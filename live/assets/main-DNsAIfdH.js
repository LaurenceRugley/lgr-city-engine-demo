import{i as e,o as t,r as n,s as r,t as i}from"./pixelkit-BWx556hK.js";import{$ as a,A as o,B as s,C as c,D as l,E as u,F as d,G as f,H as p,I as m,J as h,K as g,L as _,M as v,N as y,O as b,P as x,R as S,S as C,T as w,U as T,V as E,W as D,X as O,Y as ee,Z as te,_ as ne,a as re,b as k,c as ie,d as ae,et as A,f as j,g as oe,i as M,j as N,k as P,l as se,m as ce,n as le,nt as F,o as ue,p as de,q as fe,r as pe,s as me,t as he,tt as I,u as ge,v as _e,w as ve,x as L,z as ye}from"./three-DlGTpswt.js";var be=Math.atan(1/Math.SQRT2),xe=Math.atan(.5),Se=Math.PI/4,R={PERSPECTIVE:4,ISOMETRIC:5,DIMETRIC:6},Ce=.12,we=1.45,Te=4,Ee=40,De=1.5,Oe=16,ke=6,Ae=22,je=3.5,Me=11,Ne=(e,t,n)=>e+(t-e)*(1-Math.exp(-8*n)),Pe=(e,t)=>e+Math.PI*2*Math.round((t-e)/(Math.PI*2));function Fe({aspect:e,fov:t=48,near:n=.1,far:r=100,target:i=new I(0,.8,0),azimuth:a=Se,elevation:o=.52,distance:s=12,zoom:c=5.5}={}){let l=new _(t,e,n,r),u=new d(-1,1,1,-1,n,r),f=R.PERSPECTIVE,p=e,m={azimuth:a,elevation:o,distance:s,zoom:c,target:i.clone()},h={azimuth:a,elevation:o,distance:s,zoom:c,target:i.clone()},g=!1,v=()=>f===R.PERSPECTIVE?l:u;function y(e){e!==f&&(f=e,f===R.ISOMETRIC||f===R.DIMETRIC?(m.elevation=f===R.ISOMETRIC?be:xe,m.azimuth=Pe(Se,h.azimuth),g=!0):g=!1)}function x(e,t){m.azimuth+=e,g||(m.elevation=b.clamp(m.elevation+t,Ce,we))}function S(e){f===R.PERSPECTIVE?m.distance=b.clamp(m.distance*e,Te,Ee):m.zoom=b.clamp(m.zoom*e,De,Oe)}function C(e,t){let n=m.azimuth,r=f===R.PERSPECTIVE?m.distance*.04:m.zoom*.08,i=new I(Math.cos(n),0,-Math.sin(n)),a=new I(-Math.sin(n),0,-Math.cos(n));m.target.addScaledVector(i,e*r),m.target.addScaledVector(a,t*r)}function w(e,t){p=e/t,l.aspect=p,l.updateProjectionMatrix()}function T(e){h.azimuth=Ne(h.azimuth,m.azimuth,e),h.elevation=Ne(h.elevation,m.elevation,e),h.distance=Ne(h.distance,m.distance,e),h.zoom=Ne(h.zoom,m.zoom,e),h.target.x=Ne(h.target.x,m.target.x,e),h.target.y=Ne(h.target.y,m.target.y,e),h.target.z=Ne(h.target.z,m.target.z,e);let t=Math.cos(h.elevation),n=Math.sin(h.elevation),r=Math.cos(h.azimuth),i=Math.sin(h.azimuth),a=v();if(a.position.set(h.target.x+h.distance*t*i,h.target.y+h.distance*n,h.target.z+h.distance*t*r),a.lookAt(h.target),a.isOrthographicCamera){let e=h.zoom,t=e*p;a.left=-t,a.right=t,a.top=e,a.bottom=-e,a.updateProjectionMatrix()}}return{get camera(){return v()},get mode(){return f},get styleT(){return f===R.PERSPECTIVE?b.clamp((h.distance-ke)/(Ae-ke),0,1):b.clamp((h.zoom-je)/(Me-je),0,1)},setMode:y,orbit:x,zoomBy:S,pan:C,setViewport:w,update:T}}var z={value:0},B=new j(`#ffffff`),Ie={value:0},Le={value:0},Re={value:0},ze=new A,Be={value:0},Ve={value:0},He=`
  varying vec3 vVecN;
  varying vec3 vVecP;
  varying vec2 vWorldXZ;
  uniform float uVector;
  uniform vec3  uVecTint;
  uniform float uVecShadow;
  uniform float uSnow;        // white roof/ground accumulation
  uniform float uCloud;       // cloud-shadow strength
  uniform vec2  uCloudOff;    // cloud-shadow scroll (wind)
  uniform float uFogCharm;    // L20: 0 smooth fog → 1 ordered-dithered banded fog
  // 4x4 ORDERED (Bayer) dither, built recursively from the 2x2 base so we need no array/LUT.
  // Returns a per-pixel threshold in [0,1) — comparing/quantising against it turns a smooth ramp
  // into clean diagonal bands (the classic 8/16-bit gradient look). (C++: a const threshold matrix.)
  float bayer2(vec2 q){ return 2.0 * q.x + 3.0 * q.y - 4.0 * q.x * q.y; }   // → 0,2,3,1
  float bayer4(vec2 c){ vec2 p = floor(mod(c, 4.0));
    return (4.0 * bayer2(floor(p / 2.0)) + bayer2(mod(p, 2.0))) / 16.0; }
  // cheap value noise for the drifting cloud shadows (no texture needed).
  float vhash(vec2 p){ return fract(sin(dot(p, vec2(27.17, 113.5))) * 43758.5453); }
  float vnoise(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(vhash(i), vhash(i + vec2(1,0)), f.x), mix(vhash(i + vec2(0,1)), vhash(i + vec2(1,1)), f.x), f.y); }
  vec3 vecShade(vec3 base){
    vec3 n = normalize(vVecN);
    float up  = step(0.5, n.y);                         // up-facing → top tier
    vec3  sun = normalize(vec3(0.55, 0.0, -0.83));      // fixed, art-directed "sun side"
    float lit = step(0.25, dot(normalize(vec3(n.x, 0.0, n.z) + 1e-4), sun));
    float tier = mix(0.58, 0.82, lit);                  // shade vs sun-side
    tier = mix(tier, 1.0, up);                          // top overrides → brightest
    vec3 c = base * tier * uVecTint;
    c = mix(c, vec3(0.93, 0.95, 0.99), up * uSnow);     // SNOW dusts roofs + ground white
    float cl = vnoise(vWorldXZ * 0.12 + uCloudOff);     // CLOUD SHADOW drifts over the whole city
    c *= mix(1.0, 0.6 + 0.4 * cl, uCloud);
    return c;
  }
`;function Ue(e){e.uniforms.uVector=z,e.uniforms.uVecTint={value:B},e.uniforms.uVecShadow=Ie,e.uniforms.uSnow=Le,e.uniforms.uCloud=Re,e.uniforms.uCloudOff={value:ze},e.uniforms.uFogCharm=Be}function We(e){return e.replace(`#include <fog_fragment>`,`
    #ifdef USE_FOG
      float fF = 1.0 - exp(-fogDensity * fogDensity * vFogDepth * vFogDepth);
      // NEON PUNCHES THROUGH: bright (emissive window) fragments resist the haze, so the city's
      // lights still glow through the murk — the cheap stand-in for a bloom pass the mock fakes.
      float lum = dot(gl_FragColor.rgb, vec3(0.299, 0.587, 0.114));
      fF *= 1.0 - 0.7 * smoothstep(0.30, 0.85, lum);
      // CHARM: ordered-dither the fog factor into bands (scaled by uFogCharm) for the banded sky.
      float bands = 7.0;
      float dith  = bayer4(gl_FragCoord.xy) - 0.5;             // ordered threshold, centred
      float banded = clamp(floor(fF * bands + 0.5 + dith) / bands, 0.0, 1.0);
      fF = mix(fF, banded, uFogCharm);                          // smooth → banded by charm amount
      gl_FragColor.rgb = mix(gl_FragColor.rgb, fogColor, fF);
    #endif
  `)}function Ge(e){return e.replace(`#include <common>`,`#include <common>
varying vec3 vVecN;
varying vec3 vVecP;
varying vec2 vWorldXZ;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
  vVecN = normal;
  vVecP = position;
  vWorldXZ = (modelMatrix * vec4(position, 1.0)).xz;`)}function Ke(e){return e.replace(`#include <shadowmap_pars_fragment>`,`#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>`)}var qe=`col *= mix(1.0, getShadowMask(), uVecShadow);`;function Je(e,{color:t,id:n,windowGlow:r,winColors:i=[`#ffb852`,`#8cd9ff`],litFrac:a=.55}={}){let o=[0,1,2].map(e=>new j(i[e]??i[i.length-1]));return e.customProgramCacheKey=()=>`lgr-vec-tower`,e.onBeforeCompile=e=>{Ue(e),e.uniforms.uWindowGlow=r,e.uniforms.uWinId={value:n},e.uniforms.uVecColor={value:new j(t)},e.uniforms.uWinA={value:o[0]},e.uniforms.uWinB={value:o[1]},e.uniforms.uWinC={value:o[2]},e.uniforms.uWinLit={value:a},e.vertexShader=Ge(e.vertexShader),e.fragmentShader=We(Ke(e.fragmentShader.replace(`#include <common>`,`#include <common>
        uniform float uWindowGlow;
        uniform float uWinId;
        uniform vec3  uVecColor;
        uniform vec3  uWinA; uniform vec3 uWinB; uniform vec3 uWinC;
        uniform float uWinLit;
        ${He}
        float winHash(vec2 p){ return fract(sin(dot(p, vec2(41.3, 289.1)) + uWinId * 7.13) * 43758.5453); }
        // Returns (paneMask, litTonight) and writes this pane's lit colour to wcol.
        vec2 winTerms(out vec3 wcol){
          float sideMask = step(abs(vVecN.y), 0.5);   // vertical faces only (skip roof/underside)
          float colCoord = (vVecP.x + vVecP.z) * 3.2;  // columns wrap the box
          float rowCoord =  vVecP.y * 3.2;             // rows up y
          vec2  cell = vec2(floor(colCoord), floor(rowCoord));
          vec2  f    = fract(vec2(colCoord, rowCoord));
          float pane = step(0.18, f.x) * step(f.x, 0.82) * step(0.22, f.y) * step(f.y, 0.80);
          float r    = winHash(cell);
          float lit  = step(r, uWindowGlow * uWinLit); // cap lit fraction → staggered skyline
          float s = fract(r * 13.0);                    // pick among the (≤3) lit-pane colours
          wcol = s < 0.34 ? uWinA : (s < 0.67 ? uWinB : uWinC);
          return vec2(sideMask * pane, lit);
        }`).replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>
        {
          vec3 wcol; vec2 w = winTerms(wcol);
          totalEmissiveRadiance += w.x * w.y * wcol * uWindowGlow * 1.8;
        }`).replace(`#include <opaque_fragment>`,`#include <opaque_fragment>
        if (uVector > 0.5) {
          vec3 col = vecShade(uVecColor);
          ${qe}                                  // the sun's shadow darkens the body
          vec3 wcol; vec2 w = winTerms(wcol);
          vec3 glass = vec3(0.17, 0.23, 0.34);          // dark glass-blue panes (day)
          col = mix(col, glass, w.x * 0.85);
          col += w.x * w.y * wcol * uWindowGlow * 1.5;  // …windows EMIT (unshadowed) at night
          gl_FragColor = vec4(col, diffuseColor.a);
        }`)))},e}function V(e,{color:t=null,glow:n=null,glowDay:r=0,glowNight:i=1,windowGlow:a=null,season:o=!1}={}){let s=t===null,c=n!==null&&a!==null;return e.customProgramCacheKey=()=>`lgr-vec|`+(s?`d`:`c`)+(c?`g`:``)+(o?`s`:``),e.onBeforeCompile=e=>{Ue(e),s||(e.uniforms.uVecColor={value:new j(t)}),c&&(e.uniforms.uGlow={value:new j(n)},e.uniforms.uGlowDay={value:r},e.uniforms.uGlowNight={value:i},e.uniforms.uWindowGlow=a),o&&(e.uniforms.uSeason=Ve),e.vertexShader=Ge(e.vertexShader);let l=s?`diffuseColor.rgb`:`uVecColor`,u=o?`seasonShift(${l})`:l,d=(s?``:`uniform vec3 uVecColor;
`)+(c?`uniform vec3 uGlow; uniform float uGlowDay; uniform float uGlowNight; uniform float uWindowGlow;
`:``)+(o?`uniform float uSeason;
vec3 seasonShift(vec3 c){
  c = mix(c, vec3(0.86, 0.46, 0.13), smoothstep(0.40, 0.70, uSeason));   // → autumn orange
  c = mix(c, vec3(0.46, 0.33, 0.20), smoothstep(0.75, 1.00, uSeason));   // → bare brown
  return c;
}
`:``),f=c?`uGlow * mix(uGlowDay, uGlowNight, uWindowGlow)`:`vec3(0.0)`,p=We(Ke(e.fragmentShader.replace(`#include <common>`,`#include <common>
`+d+He).replace(`#include <opaque_fragment>`,`#include <opaque_fragment>
        if (uVector > 0.5) {
          vec3 col = vecShade(${u});
          ${qe}                            // the sun's shadow darkens the flat tier…
          gl_FragColor = vec4(col + ${f}, diffuseColor.a);  // …but the night glow stays lit
        }`)));c&&(p=p.replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>\n  totalEmissiveRadiance += ${f};`)),e.fragmentShader=p},e}function Ye(e){let t=e>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Xe(e){let t=Ye(e);return{next:t,range:(e,n)=>e+(n-e)*t(),int:(e,n)=>e+Math.floor(t()*(n-e+1)),pick:e=>e[Math.floor(t()*e.length)],chance:e=>t()<e}}var Ze=[{key:`manhattan`,name:`Manhattan`,towers:[`#EDE3C8`,`#D9B98A`,`#B5562F`,`#A8C8E8`,`#2E3F5C`],ground:`#7CC455`,street:`#9AA0A6`,sidewalk:`#C8CCD0`,park:`#5DB347`,water:`#29A8D8`,shopfronts:[`#C04A3A`,`#3A7AC0`,`#C09A2A`],glass:`#7FA8CC`,winColors:[`#ffd27a`,`#9ad6ff`],hMax:4.6,sigma:.36,roofRate:.35,pSplit:.6,nightLit:.55,roofTint:null,landmarks:[`empireState`,`chrysler`,`liberty`]},{key:`paris`,name:`Paris`,towers:[`#E8DCC0`,`#F2EAD6`,`#E0D2B4`],ground:`#8CC46A`,street:`#A8A29A`,sidewalk:`#D4CEC2`,park:`#6DB35A`,water:`#3FA8C8`,shopfronts:[`#C04A3A`,`#3A6B5A`,`#7A5AC0`],glass:`#5A6B7A`,winColors:[`#ffdca0`,`#ffcaa0`],hMax:1.5,sigma:.9,roofRate:.15,pSplit:.75,nightLit:.45,roofTint:`#6A7886`,landmarks:[`eiffel`,`arcDeTriomphe`,`sacreCoeur`]},{key:`neoTokyo`,name:`Neo-Tokyo`,towers:[`#2A3038`,`#3A4250`,`#252B36`,`#4A4456`],ground:`#3A4A42`,street:`#5A6068`,sidewalk:`#7A8088`,park:`#2E5E46`,water:`#0E6878`,shopfronts:[`#E8483A`,`#5AE8E0`,`#E85AA0`],glass:`#5AE8E0`,winColors:[`#5AE8E0`,`#E85AA0`,`#E8E06A`],hMax:5.2,sigma:.42,roofRate:.6,pSplit:.6,nightLit:.7,roofTint:null,landmarks:[`tokyoTower`,`pagoda`,`neonBillboard`]}],Qe=Ze.map(e=>e.key),$e=.3,et=1.9,tt=.55,nt=2.45,rt=.12,it=.6,at=6,ot={PLINTH_TOP:$e,BLOCK:et,STREET:tt,PITCH:nt,SIDEWALK:rt,SHORE:it,N:at};function st(e){(Array.isArray(e)?e:[e]).forEach(e=>e&&e.dispose&&e.dispose())}function ct({seed:e=1,profileIndex:t=0,landmarkFactory:n=null,windowGlow:r}){let i=new L,a=new L,s=new L;a.raycast=()=>{},s.raycast=()=>{},i.add(a,s);let l=new ne(16773594,3);l.position.set(.45,.6,-.65).multiplyScalar(10);let u=new c(7313331,2762272,1);i.add(l,u);let d=0,f=[],p={seed:e,profileIndex:t,profile:Ze[t],extent:0,meshCount:0};function m(e,t,n,r){let i=new o(new M(e,.04,t),V(new v({color:r,roughness:.95,flatShading:!0}),{color:r}));return i.position.y=n,i.userData.ground=!0,i}function g(e,t){for(let e of a.children)e.geometry&&e.geometry.dispose(),st(e.material);a.clear();for(let e of s.children)e.traverse(e=>{e.isMesh&&st(e.material)});s.clear(),f.length=0,d=0;let r=Xe(e),i=Ze[t],c=(at-1)/2*nt,l=7.675;p={seed:e,profileIndex:t,profile:i,extent:l,meshCount:0};let u=l*2,h=new o(new M(u,2,u),V(new v({color:i.ground,roughness:.9,flatShading:!0}),{color:i.ground}));h.position.y=$e-1,h.userData.ground=!0,a.add(h),a.add(m(u-it,u-it,.32,i.street));let g=[];for(let e=0;e<at;e++)for(let t=0;t<at;t++)g.push([e,t]);let S=new Set,C=Math.max(1,Math.round(g.length*.08));for(;S.size<C;)S.add(r.int(0,g.length-1));let w=r.range(-2.45*.6,nt*.6),T=r.range(-2.45*.6,nt*.6),E=Math.hypot(c,c),D=[];if(g.forEach(([e,t],n)=>{let o=(e-(at-1)/2)*nt,s=(t-(at-1)/2)*nt;if(a.add(m(et,et,.32999999999999996,i.sidewalk).translateX(o).translateZ(s)),S.has(n)){a.add(m(et-rt*2,et-rt*2,.35,i.park).translateX(o).translateZ(s));let e=r.int(3,5);for(let t=0;t<e;t++)x(o+r.range(-.6,.6),s+r.range(-.6,.6),i,r);return}let c=et-rt*2,l=r.chance(i.pSplit)?2:1,u=r.chance(i.pSplit)?2:1,d=c/l,f=c/u;for(let e=0;e<l;e++)for(let t=0;t<u;t++){let n=o-c/2+d*(e+.5),a=s-c/2+f*(t+.5),l=Math.max(.6,d-.1),u=Math.max(.6,f-.1),p=Math.hypot(n-w,a-T)/E,m=Math.exp(-(p*p)/(2*i.sigma*i.sigma)),h=Math.max(.5,.5+(i.hMax-.5)*m*r.range(.75,1.25));h>i.hMax*.5&&Math.min(l,u)>=.7&&D.push({lx:n,lz:a,fw:l,fd:u,h,r:p}),_(n,a,l,u,h,i,r)}}),n&&n.ready){D.sort((e,t)=>e.r-t.r);let e=[],t=i.landmarks;for(let r=0;r<t.length&&D.length;r++){let a=null;for(let t of D)if(e.every(e=>Math.hypot(e.lx-t.lx,e.lz-t.lz)>nt*.9)){a=t;break}a||=D[0],e.push(a),y(a.lx,a.lz);let o=i.hMax*n.heightFactor(t[r]),c=n.make(t[r],{x:a.lx,z:a.lz,w:a.fw,d:a.fd,h:o,plinthTop:$e});if(c){s.add(c);let e=new pe().setFromObject(c);b(e.min.x-.15,e.max.x+.15,e.min.z-.15,e.max.z+.15)}}}a.traverse(e=>{e.isMesh&&(e.userData.ground?(e.castShadow=!1,e.receiveShadow=!0):e.material&&e.material.isMeshBasicMaterial?(e.castShadow=!1,e.receiveShadow=!1):(e.castShadow=!0,e.receiveShadow=!0))}),s.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),p.meshCount=a.children.length+s.children.length;let O=0;for(let e of a.children){let t=e.position;O=(Math.imul(O,16777619)^(Math.round(t.x*100)*2654435761^Math.round(t.y*100)*40503^Math.round(t.z*100)*2246822519))>>>0}p.sig=O,window.__city={seed:e,profile:i.key,meshes:p.meshCount,sig:O}}function _(e,t,n,i,s,c,l){let u=Je(new v({flatShading:!0,roughness:.7,metalness:.05}),{color:l.pick(c.towers),id:++d,windowGlow:r,winColors:c.winColors,litFrac:c.nightLit}),p=new o(new M(n,s,i),u);if(p.position.set(e,$e+s/2,t),p.userData.lot=[e,t],a.add(p),c.roofTint){let r=V(new v({color:c.roofTint,roughness:.85,flatShading:!0}),{color:c.roofTint}),l=new o(new M(n*1.02,.08,i*1.02),r);l.position.set(e,$e+s+.04,t),l.userData.lot=[e,t],a.add(l)}if(s<1.4){let r=l.pick(c.shopfronts),s=new o(new M(n*1.04,.18,i*1.04),V(new v({color:r,roughness:.8,flatShading:!0}),{color:r}));s.position.set(e,.39,t),s.userData.lot=[e,t],a.add(s)}if(s>c.hMax*.45&&l.chance(c.roofRate)){let r=l.chance(.5)?new o(new M(n*.4,.18,i*.4),V(new v({color:`#9a9a9a`,flatShading:!0}),{color:`#9a9a9a`})):new o(new ce(n*.18,n*.18,.22,10),V(new v({color:`#b9bec4`,flatShading:!0}),{color:`#b9bec4`}));if(r.position.set(e+l.range(-.1,.1),$e+s+.11,t+l.range(-.1,.1)),r.userData.lot=[e,t],a.add(r),l.chance(.25)){let n=new o(new h(.05,6,5),new N({color:`#ff3b30`,transparent:!0,opacity:1}));n.position.set(e,$e+s+.26,t),n.userData.lot=[e,t],n.raycast=()=>{},a.add(n),f.push({mesh:n,phase:l.range(0,6.28)})}}}function y(e,t){for(let n=a.children.length-1;n>=0;n--){let r=a.children[n];r.userData.lot&&Math.abs(r.userData.lot[0]-e)<1e-4&&Math.abs(r.userData.lot[1]-t)<1e-4&&(r.geometry&&r.geometry.dispose(),st(r.material),a.remove(r))}for(let e=f.length-1;e>=0;e--)f[e].mesh.parent||f.splice(e,1)}function b(e,t,n,r){for(let i=a.children.length-1;i>=0;i--){let o=a.children[i];o.userData.lot&&o.position.x>=e&&o.position.x<=t&&o.position.z>=n&&o.position.z<=r&&(o.geometry&&o.geometry.dispose(),st(o.material),a.remove(o))}}function x(e,t,n,r){let i=new j(n.park),s=(n,s)=>{let c=i.clone().offsetHSL(0,0,r.range(-.06,.06)).getStyle(),l=new o(new h(n,7,6),V(new v({color:c,flatShading:!0}),{color:c,season:!0}));l.scale.y=.7,l.position.set(e,$e+s,t),l.userData.lot=null,a.add(l)},c=new o(new M(.05,.18,.05),V(new v({color:`#6b4a2a`,flatShading:!0}),{color:`#6b4a2a`}));c.position.set(e,.39,t),a.add(c),s(.22,.28),s(.16,.46)}function S(e){for(let t of f)t.mesh.material.opacity=.35+.65*(.5+.5*Math.sin(e*3+t.phase))}return g(e,t),{group:i,key:l,fill:u,update:S,generate:g,get state(){return p},get extent(){return p.extent},get waterColor(){return p.profile.water},profiles:Ze}}var lt=Math.PI*2,ut=.7,dt=90,ft=[{name:`night`,sun:`#4a6f9e`,intensity:.35,hemiSky:`#26344f`,hemiGround:`#0c1018`,horizon:`#1e2942`,sky:`#36486e`,exposure:.95,outline:`#101a30`,window:1,toonGain:2.6},{name:`dawn`,sun:`#ff9e54`,intensity:2.4,hemiSky:`#8a7686`,hemiGround:`#2a1f1a`,horizon:`#b8512c`,sky:`#ffb070`,exposure:1.05,outline:`#241826`,window:.3,toonGain:2},{name:`noon`,sun:`#fff4e0`,intensity:4.6,hemiSky:`#9cb8cc`,hemiGround:`#33302a`,horizon:`#5e7689`,sky:`#aacadd`,exposure:1.18,outline:`#0b0a08`,window:0,toonGain:1.7},{name:`dusk`,sun:`#ff6b35`,intensity:2,hemiSky:`#7a566a`,hemiGround:`#281a18`,horizon:`#b0432a`,sky:`#ff8a5a`,exposure:1.05,outline:`#1f1420`,window:.4,toonGain:2}],pt=e=>e-Math.floor(e),mt=(e,t,n)=>e+(t-e)*n,ht=(e,t,n)=>e+(t-e)*(1-Math.exp(-6*n));function gt({t:e=.5}={}){let t=e,n=e,r=!1,i=!1,a=ft.map(e=>({name:e.name,sun:new j(e.sun),hemiSky:new j(e.hemiSky),hemiGround:new j(e.hemiGround),horizon:new j(e.horizon),sky:new j(e.sky),outline:new j(e.outline),intensity:e.intensity,exposure:e.exposure,window:e.window,toonGain:e.toonGain})),o=new I(0,1,0),s=new j(`#fff4e0`),c=new j(`#6f97b3`),l=new j(`#2a2620`),u=new j(`#3a4a57`),d=new j(`#7da3bd`),f=new j(`#0b0a08`),p=new j(`#000000`),m=3,h=1,g=0,_=1.7,v=new I;function y(e){let t=pt(e)*4,n=Math.floor(t)%4,r=(n+1)%4,i=t-Math.floor(t),y=a[n],b=a[r];s.lerpColors(y.sun,b.sun,i),c.lerpColors(y.hemiSky,b.hemiSky,i),l.lerpColors(y.hemiGround,b.hemiGround,i),u.lerpColors(y.horizon,b.horizon,i),d.lerpColors(y.sky,b.sky,i),f.lerpColors(y.outline,b.outline,i),m=mt(y.intensity,b.intensity,i),h=mt(y.exposure,b.exposure,i),g=mt(y.window,b.window,i),_=mt(y.toonGain,b.toonGain,i),p.setRGB(.045*g,.075*g,.14*g);let x=pt(e)*lt-Math.PI/2,S=Math.cos(x),C=Math.sin(x);v.set(S,C*Math.cos(ut),C*Math.sin(ut)),v.y>=0?o.copy(v):o.copy(v).negate()}return y(t),{sunDir:o,sunColor:s,hemiSky:c,hemiGround:l,horizon:u,sky:d,outline:f,toonFloor:p,get sunIntensity(){return m},get exposure(){return h},get windowGlow(){return g},get toonGain(){return _},get t(){return pt(t)},get auto(){return r},get clock(){let e=Math.round(pt(t)*24*60)%1440;return`${String(Math.floor(e/60)).padStart(2,`0`)}:${String(e%60).padStart(2,`0`)}`},cyclePreset(){n=(Math.floor(t*4+1e-4)+1)/4},nudge(e){n+=e/24},goTo(e){n=e},toggleAuto(){r=!r},setReducedMotion(e){i=e},update(e){r&&!i&&(n+=e/dt),t=ht(t,n,e),y(t)}}}function _t(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.35,`rgba(255,255,255,0.55)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new me(e);return r.colorSpace=D,r}function vt(e,t){let n=[];for(let r=0;r<16;r++){let i=r/16*Math.PI*2;n.push(new I(Math.cos(i)*e,t,Math.sin(i)*e))}return new se(n,!0,`catmullrom`,.5)}function yt(e){let t=(t,n)=>Math.exp(-((e-t)*(e-t))/(2*n*n)),n=Math.max(t(.33,.05),t(.75,.06)),r=b.smoothstep(e,.24,.3)*(1-b.smoothstep(e,.8,.88));return b.clamp(.15+.55*r+.45*n,.12,1)}function bt(){let{PITCH:e,N:t,PLINTH_TOP:n}=ot,r=t+1,i=n+.04,a=n=>(n-t/2)*e,o=t/2,s=[],c=(e,t)=>t*r+e;for(let e=0;e<r;e++)for(let t=0;t<r;t++)s.push({x:a(t),z:a(e),i:t,j:e,edges:[]});let l=[],u=(t,n)=>{let r=(s[t].i===o||s[t].j===o)&&(s[n].i===o||s[n].j===o),i=l.length;l.push({a:t,b:n,len:e,main:r}),s[t].edges.push(i),s[n].edges.push(i)};for(let e=0;e<r;e++)for(let t=0;t<r;t++)t<r-1&&u(c(t,e),c(t+1,e)),e<r-1&&u(c(t,e),c(t,e+1));return{nodes:s,edges:l,y:i,mid:o}}function xt({plinthTop:e=.3,extent:t=4,profile:n=null}={}){let r=new L,i=bt(),{nodes:a,edges:o}=i,c=i.y,l=.34,u=0;{let e=ot.PITCH-l*2;u=Math.max(1,Math.floor((e+.26)/.56))}let d=new N({color:`#e8c84a`,fog:!0}),f=new ve(new M(.05,.012,.3),d,o.length*u);f.frustumCulled=!1,f.raycast=()=>{},f.receiveShadow=!1,f.castShadow=!1,r.add(f);{let e=new x,t=0;for(let n of o){let r=a[n.a],i=a[n.b],o=i.x-r.x,s=i.z-r.z,d=Math.hypot(o,s),p=o/d,m=s/d,h=Math.atan2(p,m),g=d-l*2;for(let n=0;n<u;n++){let i=l+(u===1?g/2:g*n/(u-1));e.position.set(r.x+p*i,c,r.z+m*i),e.rotation.set(0,h,0),e.updateMatrix(),f.setMatrixAt(t++,e.matrix)}}f.instanceMatrix.needsUpdate=!0}let p=new ve(new M(.34,.26,.74),V(new v({flatShading:!0,roughness:.5,metalness:.3})),12);p.castShadow=!0,p.receiveShadow=!1,p.frustumCulled=!1,p.raycast=()=>{};let m=new ue,h=new Float32Array(72),g=new Float32Array(72),_=new j(`#fff0c0`),y=new j(`#ff3528`);for(let e=0;e<12;e++)_.toArray(g,e*3),y.toArray(g,(12+e)*3),h[e*3+1]=-50,h[(12+e)*3+1]=-50;m.setAttribute(`position`,new re(h,3)),m.setAttribute(`color`,new re(g,3));let S=new E({size:.72,sizeAttenuation:!0,map:_t(),vertexColors:!0,transparent:!0,opacity:0,blending:2,depthWrite:!1}),C=new s(m,S);C.frustumCulled=!1,C.raycast=()=>{},r.add(p,C);let w=[`#f4c430`,`#c0392b`,`#d8dde2`,`#9aa7b4`,`#6b7785`,`#5a7d9a`],T=Ye(2403557),D=o.map((e,t)=>t).filter(e=>o[e].main),O=[];for(let e=0;e<12;e++){let t=e<4&&D.length?D[T()*D.length|0]:T()*o.length|0,n=e===1;O.push({edge:t,fwd:T()<.5,s:T()*o[t].len,speed:n?.5:.78+e%3*.1,lenZ:n?1.45:1,color:w[n?1:e===0?0:2+e%4],rng:Ye(12648430+e*2654435761)})}let ee=new j;O.forEach((e,t)=>p.setColorAt(t,ee.set(e.color)));function te(e,t,n){let r=a[e],i=r.edges.filter(e=>e!==t);if(i.length===0)return t;let s=o[t],c=s.a===e?s.b:s.a,l=r.x-a[c].x,u=r.z-a[c].z,d=Math.hypot(l,u)||1,f=i[0],p=-2;for(let t of i){let n=o[t],i=n.a===e?n.b:n.a,s=a[i].x-r.x,c=a[i].z-r.z,m=Math.hypot(s,c)||1,h=l/d*(s/m)+u/d*(c/m);h>p&&(p=h,f=t)}return n()<.65?f:i[n()*i.length|0]}let ne=te,k=new x,ae=(e,t)=>{k.position.set(0,-50,0),k.scale.setScalar(0),k.updateMatrix(),e.setMatrixAt(t,k.matrix)},A=.085,oe=ot.PLINTH_TOP+.02+.13,P=new ve(new ie(.04,.1,3,6),V(new v({flatShading:!0,roughness:.8})),14);P.castShadow=!0,P.receiveShadow=!1,P.frustumCulled=!1,P.raycast=()=>{};let se=vt(t-.72,e),ce=[];for(let e=0;e<14;e++)ce.push({phase:e/14,speed:.12+e%4*.02,dir:e%2?1:-1});let le=new I,F=new I,de=new j;ce.forEach((e,t)=>P.setColorAt(t,de.set([`#caa`,`#9ab`,`#bba`,`#ab9`][t%4]))),r.add(P);let fe={manhattan:`#e8c84a`,paris:`#dcd2bc`,neoTokyo:`#5ae8e0`};function pe(e){e&&d.color.set(fe[e.key]||`#e8c84a`)}pe(n);function me(t,n,r){let i=r?r.t:.5,s=r?r.windowGlow:0,c=Math.max(2,Math.round(yt(i)*12)),l=s>.05;for(let e=0;e<12;e++){if(e>=c){ae(p,e),h[e*3+1]=-50,h[(12+e)*3+1]=-50;continue}let n=O[e];n.s+=t*n.speed;let r=0;for(;n.s>=o[n.edge].len&&r++<4;){n.s-=o[n.edge].len;let e=n.fwd?o[n.edge].b:o[n.edge].a,t=ne(e,n.edge,n.rng);n.edge=t,n.fwd=o[t].a===e}let i=o[n.edge],s=n.fwd?a[i.a]:a[i.b],u=n.fwd?a[i.b]:a[i.a],d=u.x-s.x,f=u.z-s.z,m=Math.hypot(d,f)||1,g=d/m,_=f/m,v=-_,y=g,b=s.x+g*n.s+v*A,x=s.z+_*n.s+y*A,S=Math.atan2(g,_);k.position.set(b,oe,x),k.rotation.set(0,S,0),k.scale.set(1,1,n.lenZ),k.updateMatrix(),p.setMatrixAt(e,k.matrix);let C=.74*n.lenZ*.5,w=oe+.06,T=e*3,E=(12+e)*3;l?(h[T]=b+g*(C+.04),h[T+1]=w,h[T+2]=x+_*(C+.04),h[E]=b-g*(C+.02),h[E+1]=w,h[E+2]=x-_*(C+.02)):(h[T+1]=-50,h[E+1]=-50)}p.instanceMatrix.needsUpdate=!0,m.attributes.position.needsUpdate=!0,S.opacity=b.clamp(s*1.8,0,1);let u=Math.max(2,Math.round(yt(i)*14));for(let t=0;t<14;t++){if(t>=u){ae(P,t);continue}let r=ce[t],i=(r.phase+r.dir*r.speed*n*.02+1e3)%1;se.getPointAt(i,le),se.getTangentAt(i,F);let a=Math.sin(n*6+r.phase*30)*.015;k.position.set(le.x,e+.09+a,le.z),k.rotation.set(0,Math.atan2(F.x*r.dir,F.z*r.dir),Math.sin(n*6+r.phase*30)*.06),k.scale.setScalar(1),k.updateMatrix(),P.setMatrixAt(t,k.matrix)}P.instanceMatrix.needsUpdate=!0}return{group:r,update:me,setProfile:pe,graph:i,setRouter(e){ne=e||te}}}var St=[`empireState`,`chrysler`,`liberty`,`eiffel`,`arcDeTriomphe`,`sacreCoeur`,`tokyoTower`,`pagoda`,`neonBillboard`],Ct={empireState:1.25,chrysler:1.1,liberty:.55,eiffel:3.2,arcDeTriomphe:1.5,sacreCoeur:1.75,tokyoTower:1.35,pagoda:.5,neonBillboard:.9};function wt(e){let t=()=>new v({flatShading:!0,roughness:.7,metalness:.1}),n=(n,r={})=>r.windows?Je(t(),{color:n,id:e.id(),windowGlow:e.windowGlow,winColors:e.winColors,litFrac:e.litFrac}):V(t(),{color:n,glow:r.glow??null,glowDay:r.glowDay??0,glowNight:r.glowNight??1,windowGlow:r.glow?e.windowGlow:null});return{box:(e,t,r,i,a={})=>new o(new M(e,t,r),n(i,a)),cyl:(e,t,r,i,a={})=>new o(new ce(e,t,r,a.seg||12),n(i,a)),cone:(e,t,r,i={})=>new o(new de(e,t,i.seg||8),n(r,i)),sphere:(e,t,r={})=>new o(new h(e,r.seg||12,r.seg2||8),n(t,r)),lathe:(e,t,r={})=>new o(new w(e.map(e=>new A(e[0],e[1])),r.seg||4),n(t,r))}}var H=(e,t,n,r)=>(e.position.set(t,n,r),e),Tt=[`#7FB0E0`,`#E07FB0`,`#7FE0A0`,`#E0C97F`,`#9FE07F`,`#7FE0E0`,`#FF8C42`,`#E0E07F`,`#C97FE0`,`#E07F7F`,`#7F9FE0`,`#E0483A`],Et={empireState(e,t){let n=`#E8E0CF`;e.add(H(t.box(.42,.18,.42,n,{windows:!0}),0,.09,0)),e.add(H(t.box(.34,.16,.34,n,{windows:!0}),0,.26,0)),e.add(H(t.box(.26,.14,.26,n,{windows:!0}),0,.41,0)),e.add(H(t.box(.19,.34,.19,n,{windows:!0}),0,.65,0)),e.add(H(t.box(.13,.06,.13,n,{windows:!0}),0,.85,0));let r=Tt[new Date().getMonth()];e.add(H(t.cyl(.03,.045,.12,n,{seg:10,glow:r,glowNight:1.85}),0,.94,0)),e.add(H(t.cone(.012,.07,n,{seg:8}),0,1.04,0))},chrysler(e,t){let n=`#C9CED4`;e.add(H(t.box(.22,.55,.22,`#9AA7B4`,{windows:!0}),0,.275,0));let r=.55;for(let i=0;i<5;i++){let a=.14-i*.024,o=.07;e.add(H(t.cyl(a*.7,a,o,n,{seg:8,glow:`#dfeaff`,glowNight:.5}),0,r+o/2,0)),r+=o}e.add(H(t.cone(.018,.16,n,{seg:8}),0,r+.08,0))},liberty(e,t){let n=`#B9B4A6`,r=`#4FA890`;e.add(H(t.box(.42,.16,.42,n),0,.08,0)),e.add(H(t.box(.3,.2,.3,n),0,.26,0)),e.add(H(t.cyl(.1,.15,.42,r,{seg:10}),0,.57,0)),e.add(H(t.box(.11,.1,.11,r),0,.83,0));for(let n=0;n<7;n++){let i=(n/6-.5)*Math.PI*1.1;e.add(H(t.cone(.012,.1,r,{seg:5}),Math.sin(i)*.1,.92,Math.cos(i)*.06-.02))}let i=H(t.cyl(.025,.03,.34,r,{seg:8}),.14,.98,0);i.rotation.z=.35,e.add(i),e.add(H(t.box(.06,.06,.06,r,{glow:`#ffd060`,glowDay:.6,glowNight:1.2}),.2,1.16,0)),e.add(H(t.cone(.04,.09,`#ffcf66`,{seg:6,glow:`#ffd060`,glowDay:.7,glowNight:1.3}),.2,1.24,0))},eiffel(e,t){let n=`#6E5C4C`,r=[[.2,0],[.13,.16],[.085,.33],[.055,.5],[.035,.66],[.02,.85],[0,.92]];e.add(t.lathe(r,n,{seg:4}));let i=t.lathe(r,n,{seg:4});i.rotation.y=Math.PI/4,e.add(i),e.add(H(t.box(.26,.025,.26,n),0,.33,0)),e.add(H(t.box(.14,.02,.14,n),0,.66,0)),e.add(H(t.cone(.01,.1,n,{seg:6}),0,.97,0))},arcDeTriomphe(e,t){let n=`#D9D0C1`,r=.58,i=.5,a=.34,s=new fe;s.moveTo(-.58/2,0),s.lineTo(r/2,0),s.lineTo(r/2,i),s.lineTo(-.58/2,i),s.lineTo(-.58/2,0);let c=new m,l=.15,u=.22;c.moveTo(-.15,0),c.lineTo(-.15,u),c.absarc(0,u,l,Math.PI,0,!0),c.lineTo(l,0),c.lineTo(-.15,0),s.holes.push(c);let d=new _e(s,{depth:a,bevelEnabled:!1});d.translate(0,0,-.34/2),d.computeVertexNormals(),e.add(new o(d,V(new v({color:n,flatShading:!0}),{color:n}))),e.add(H(t.box(r*1.06,.08,a*1.06,n),0,.54,0))},sacreCoeur(e,t){let n=`#F1EEE6`;e.add(H(t.box(.5,.26,.4,n),0,.13,0));let r=(r,i,a,o)=>{e.add(H(t.cyl(a*.9,a,i,n,{seg:12}),r,o,0));let s=H(t.sphere(a,n,{seg:12}),r,o+i/2,0);s.scale.y=1.5,e.add(s)};r(0,.22,.15,.4),r(-.2,.1,.07,.33),r(.2,.1,.07,.33)},tokyoTower(e,t){let n=`#F25822`,r=`#EDEDED`,i=0;for(let a=0;a<9;a++){let o=a/9,s=(a+1)/9,c=.19*(1-o)+.03*o,l=.19*(1-s)+.03*s,u=.085,d=a%2?r:n;e.add(H(t.cyl(l,c,u,d,{seg:4,glow:n,glowDay:0,glowNight:.7}),0,i+u/2,0)),i+=u}e.add(H(t.box(.22,.02,.22,n,{glow:n,glowNight:.7}),0,.28,0)),e.add(H(t.box(.12,.02,.12,r),0,.5,0)),e.add(H(t.cone(.012,.16,r,{seg:6,glow:`#ff6a2a`,glowNight:.9}),0,i+.08,0))},pagoda(e,t){let n=0;for(let r=0;r<5;r++){let i=.42-r*.06,a=.11;e.add(H(t.box(i,a,i,`#B23A2C`,{windows:r<4}),0,n+a/2,0)),e.add(H(t.box(i*1.34,.03,i*1.34,`#7A3B2A`),0,n+a+.015,0)),n+=.16999999999999998}e.add(H(t.cyl(.012,.012,.1,`#E0C040`,{seg:6}),0,n+.05,0)),e.add(H(t.sphere(.03,`#E0C040`,{seg:8,glow:`#ffe680`,glowNight:.8}),0,n+.12,0))},neonBillboard(e,t){let n=`#20242C`;e.add(H(t.box(.3,1,.3,n,{windows:!0}),0,.5,0));let r=[`#5AE8E0`,`#E85AA0`,`#E8E06A`],i=(n,r,i,a,o,s,c)=>{let l=H(t.box(n,r,.02,i,{glow:i,glowDay:.6,glowNight:1.1}),a,o,s);l.rotation.y=c,e.add(l)};i(.22,.34,r[0],0,.75,.16,0),i(.16,.5,r[1],.16,.5,0,Math.PI/2),i(.2,.22,r[2],0,.34,-.16,0),e.add(H(t.cone(.01,.14,n,{seg:6,glow:`#E85AA0`,glowDay:.4,glowNight:1}),0,1.08,0))}};function Dt(e,t){let n=new L;return Et[e](n,wt(t)),n}var Ot=``+new URL(`building-skyscraper-d-CapD2Zqe.glb`,import.meta.url).href,kt=``+new URL(`building-n-hdv8kKtN.glb`,import.meta.url).href,At=``+new URL(`building-g-CsTB1qH9.glb`,import.meta.url).href,jt=``+new URL(`colormap-CK8fW2HB.png`,import.meta.url).href,Mt={skyscraper:{url:Ot,color:`#9cc1dd`,fill:.92},midrise:{url:kt,color:`#c9a07a`,fill:.96},setback:{url:At,color:`#d9c7a0`,fill:.9}};function Nt({windowGlow:e}){let t=new l;t.setURLModifier(e=>e.includes(`colormap.png`)?jt:e);let n=new he(t),r={},i=!1,a=Promise.all(Object.entries(Mt).map(async([e,t])=>{r[e]=(await n.loadAsync(t.url)).scene})).then(()=>{i=!0,window.__landmarksReady=!0}).catch(e=>console.error(`landmark models failed:`,e)),o=9e3;function s(t,n,i={}){let a,s;if(St.includes(t))a=Dt(t,{windowGlow:e,winColors:i.winColors,litFrac:i.litFrac,id:()=>++o}),s=1;else{let e=r[t],n=Mt[t];if(!e||!n)return null;a=e.clone(!0),s=n.fill}a.updateMatrixWorld(!0);let c=new pe().setFromObject(a).getSize(new I);a.scale.setScalar(n.h*s/c.y),a.updateMatrixWorld(!0);let l=new pe().setFromObject(a),u=l.getCenter(new I);return a.position.x+=n.x-u.x,a.position.z+=n.z-u.z,a.position.y+=n.plinthTop-l.min.y,St.includes(t)?a.traverse(e=>{e.isMesh&&(e.castShadow=!1,e.raycast=()=>{})}):a.traverse(n=>{if(!n.isMesh)return;n.castShadow=!1,n.raycast=()=>{};let r=n=>Je(n.clone(),{color:Mt[t].color,id:++o,windowGlow:e,winColors:i.winColors,litFrac:i.litFrac});n.material=Array.isArray(n.material)?n.material.map(r):r(n.material)}),a}return{make:s,whenReady:a,heightFactor:e=>Ct[e]??1,get ready(){return i}}}var Pt=[`video/mp4;codecs=avc1.42E01E`,`video/mp4`,`video/webm;codecs=vp9`,`video/webm`];function Ft({renderer:e,rig:t,sunRig:n,poke:r,getState:i,office:a={}}){let o=e.domElement,s=new URLSearchParams(window.location.search),c=e=>{let t=i();return`lgr-${t.lesson}-${String(t.clock||``).replace(`:`,``)}-${t.style}.${e}`},l=(e,t)=>{let n=URL.createObjectURL(e),r=document.createElement(`a`);r.href=n,r.download=t,document.body.appendChild(r),r.click(),r.remove(),setTimeout(()=>URL.revokeObjectURL(n),1e3)};function u(){o.toBlob(e=>{e&&(l(e,c(`png`)),window.__lastStill=e.size)},`image/png`)}let d=()=>Pt.find(e=>window.MediaRecorder&&MediaRecorder.isTypeSupported(e))||``,f=It(),p=null,m=[],h=!1;function g(){if(h)return;let e=d(),t=o.captureStream(60);p=new MediaRecorder(t,e?{mimeType:e,videoBitsPerSecond:12e6}:{}),m=[],p.ondataavailable=e=>{e.data&&e.data.size&&m.push(e.data)},p.onstop=()=>{let e=new Blob(m,{type:p.mimeType});l(e,c(p.mimeType.includes(`mp4`)?`mp4`:`webm`)),window.__lastVideo=e.size},p.start(),h=!0,window.__recording=!0,f.show()}function _(){h&&(p.stop(),h=!1,window.__recording=!1,f.hide())}let v=()=>h?_():g(),y=e=>new Promise(t=>setTimeout(t,e)),b=e=>window.dispatchEvent(new KeyboardEvent(`keydown`,{key:e}));async function x(){let e=o.clientWidth,t=o.clientHeight,n=e*.26,i=t*.74;for(let t=0;t<=10;t++)r.at(n+t*e*.028,i+Math.sin(t*.7)*16),await y(100);r.stop()}async function S(e){if(e.keys)for(let t of e.keys)b(t),await y(70);e.zoom&&t.zoomBy(e.zoom),e.orbit&&t.orbit(e.orbit[0],e.orbit[1]),e.timeTo!==void 0&&n.goTo(e.timeTo),e.office&&a[e.office]?.(),e.ripple&&await x(),e.waitMs&&await y(e.waitMs)}let C={tour:[{keys:[`6`,`0`],waitMs:600},{zoom:.72,waitMs:1700},{ripple:!0,waitMs:2400},{orbit:[.55,0],waitMs:1700},{timeTo:0,waitMs:3e3},{timeTo:.5,waitMs:1500},{keys:[`7`],waitMs:1e3},{zoom:1.5,waitMs:1400},{keys:[`B`],waitMs:2e3},{keys:[`B`],waitMs:2e3},{keys:[`B`],waitMs:2e3},{keys:[`B`],waitMs:2e3},{keys:[`B`],waitMs:2e3},{keys:[`8`],waitMs:900},{zoom:.65,waitMs:1200},{ripple:!0,waitMs:2600},{keys:[`7`],waitMs:700},{keys:[`B`],waitMs:300},{keys:[`B`],waitMs:900},{zoom:1.4,waitMs:2600}],daycycle:[{keys:[`6`,`0`],waitMs:700},{timeTo:.75,waitMs:2600},{timeTo:1,waitMs:2600},{timeTo:1.25,waitMs:2600},{timeTo:1.5,waitMs:2600},{timeTo:1.5,waitMs:800}],office:[{keys:[`o`],waitMs:1700},{office:`pet`,waitMs:1300},{office:`feed`,waitMs:1700},{office:`travel`,waitMs:1700},{keys:[`W`,`W`,`W`],waitMs:1800},{timeTo:0,waitMs:2400},{office:`laptop`,waitMs:800},{office:`closeLaptop`,waitMs:300},{timeTo:.5,waitMs:900},{keys:[`W`],waitMs:200},{keys:[`o`],waitMs:1500}],cities:[{keys:[`6`,`0`],waitMs:500},{timeTo:.78,waitMs:2800},{keys:[`C`],waitMs:3e3},{keys:[`C`],waitMs:3e3},{keys:[`C`],waitMs:2e3}]};async function w(e){let t=C[e];if(t){window.__director=e;for(let e of t)await S(e);window.__director=null}}async function T(e){await y(1600),g(),await w(e),await y(400),_(),window.__captureDone=!0}window.addEventListener(`keydown`,e=>{(e.key===`s`||e.key===`S`)&&u(),(e.key===`r`||e.key===`R`)&&v()});let E=s.get(`capture`);return E&&C[E]&&T(E),window.__capture={still:u,toggleRec:v,run:w,sequences:Object.keys(C)},window.__capture}function It(){let e=document.createElement(`div`);return e.textContent=`● REC`,e.style.cssText=`position:fixed;top:14px;right:16px;z-index:2;font:bold 12px ui-monospace,monospace;color:#ff3b30;letter-spacing:.12em;text-shadow:0 1px 3px #000;display:none;`,document.body.appendChild(e),{show:()=>{e.style.display=`block`},hide:()=>{e.style.display=`none`}}}var Lt=`
.vui { position: fixed; left: 50%; bottom: 16px; transform: translateX(-50%); z-index: 3;
  display: flex; gap: 8px; align-items: center; padding: 7px 9px; border-radius: 14px;
  background: rgba(16,18,24,0.72); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
  box-shadow: 0 6px 24px rgba(0,0,0,0.4); font: 600 12px/1 ui-monospace, monospace;
  color: #d8dde6; pointer-events: auto; user-select: none; max-width: calc(100vw - 24px);
  flex-wrap: wrap; justify-content: center; }
.vui button { min-width: 44px; min-height: 44px; padding: 0 12px; border: 0; border-radius: 10px;
  background: rgba(255,255,255,0.07); color: inherit; font: inherit; cursor: pointer;
  letter-spacing: .04em; transition: background .12s; }
.vui button:hover { background: rgba(255,255,255,0.16); }
.vui button.on { background: #3a7bd5; color: #fff; }
.vui .seg { display: flex; gap: 2px; background: rgba(255,255,255,0.05); border-radius: 11px; padding: 2px; }
.vui .seg button { min-width: 40px; padding: 0 9px; border-radius: 9px; }
.vui .sep { width: 1px; align-self: stretch; margin: 4px 2px; background: rgba(255,255,255,0.12); }
.vui input[type=range] { width: 92px; accent-color: #3a7bd5; height: 44px; cursor: pointer; }
.vui .lbl { opacity: .55; font-size: 10px; letter-spacing: .12em; text-transform: uppercase; padding: 0 2px; }
.vui-info { position: fixed; left: 50%; bottom: 74px; transform: translateX(-50%); z-index: 3;
  display: none; max-width: calc(100vw - 24px); padding: 10px 14px; border-radius: 12px;
  background: rgba(16,18,24,0.92); color: #c8ccd4; pointer-events: auto;
  font: 11px/1.7 ui-monospace, monospace; letter-spacing: .04em; }
.vui-info.open { display: block; }
/* L20 "show controls" pill — appears bottom-right when the bar is minimized, so a viewer can
   hide the UI to watch the scene unobstructed, then bring it back with one tap. */
.vui-show { position: fixed; right: 14px; bottom: 16px; z-index: 3; display: none;
  min-width: 44px; min-height: 44px; padding: 0 14px; border: 0; border-radius: 12px;
  background: rgba(16,18,24,0.72); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
  color: #d8dde6; font: 600 12px/1 ui-monospace, monospace; letter-spacing: .04em; cursor: pointer;
  align-items: center; gap: 7px; box-shadow: 0 6px 24px rgba(0,0,0,0.4); pointer-events: auto; }
.vui-show.on { display: inline-flex; }
@media (pointer: coarse) { .vui { bottom: 20px; padding: 9px 11px; } .vui button { font-size: 13px; }
  .vui-show { bottom: 20px; } }
`;function Rt({controls:e,state:t,show:n,coarse:r}){if(typeof document>`u`)return;let i=document.createElement(`style`);i.textContent=Lt,document.head.appendChild(i);let a=document.createElement(`div`);a.className=`vui`;let o=document.createElement(`div`);o.className=`vui-info`,o.innerHTML=`KEYS · 4/5/6 cam · 0 vector · 7/8 pixel/toon · B era · T time · [ ] scrub · 9 auto · C city · G shuffle · W weather · K season · click a building / O office · Esc exit · M hide UI · S still · R rec · H shadows · P theme · drag water to ripple`;let s=(e,t,n)=>{let r=document.createElement(`button`);return r.textContent=e,n&&(r.title=n),r.addEventListener(`click`,t),r},c=e=>{let t=document.createElement(`div`);return t.className=`seg`,{seg:t,btns:e.map(([n,r])=>{let i=s(n,()=>e.find(e=>e[1]===r)[2](),n);return i.dataset.val=r,t.appendChild(i),i})}};a.appendChild(s(`City`,()=>e.city(),`Next city profile (C)`)),a.appendChild(s(`Shuffle`,()=>e.shuffle(),`New random seed (G)`)),a.appendChild(O());let l={clear:`Clear`,rain:`Rain`,snow:`Snow`,fog:`Fog`},u=[`Spring`,`Summer`,`Autumn`,`Winter`],d=s(`Clear`,()=>e.weather(),`Cycle weather: clear→rain→snow→fog (W)`),f=s(`Spring`,()=>e.season(),`Cycle season: spring→summer→autumn→winter (K)`),p=s(`Office`,()=>e.office(),`Dive into / exit the office (O · Esc)`);a.append(d,f,p,O());let m=c([[`Vector`,`vector`,()=>e.style(`vector`)],[`Pixel`,`pixel`,()=>e.style(`pixel`)],[`Toon`,`toon`,()=>e.style(`toon`)]]);a.appendChild(m.seg),a.appendChild(O());let h=document.createElement(`input`);h.type=`range`,h.min=`0`,h.max=`1`,h.step=`0.01`,h.title=`Time of day`;let g=!1;h.addEventListener(`pointerdown`,()=>{g=!0}),h.addEventListener(`pointerup`,()=>{g=!1}),h.addEventListener(`input`,()=>e.time(parseFloat(h.value)));let _=s(`▶`,()=>e.auto(),`Play/pause day cycle (9)`),v=document.createElement(`div`);v.style.cssText=`display:flex;align-items:center;gap:6px;`;let y=document.createElement(`span`);y.className=`lbl`,y.textContent=`Day`,v.append(y,h,_),a.appendChild(v),a.appendChild(O());let b=c([[`Iso`,`iso`,()=>e.cam(`iso`)],[`Dim`,`dimetric`,()=>e.cam(`dimetric`)],[`3D`,`persp`,()=>e.cam(`persp`)]]);a.appendChild(b.seg),a.appendChild(s(`ⓘ`,()=>o.classList.toggle(`open`),`All keys`)),a.appendChild(O()),a.appendChild(s(`⌄`,()=>E(!0),`Hide controls — watch unobstructed (M)`));let x=document.createElement(`button`);x.className=`vui-show`,x.innerHTML=`⌃ Controls`,x.title=`Show controls (M)`,x.addEventListener(`click`,()=>E(!1)),document.body.append(o,a,x);let S=n,C=!1;E(!1);function w(){let e=t();m.btns.forEach(t=>t.classList.toggle(`on`,t.dataset.val===e.style)),b.btns.forEach(t=>t.classList.toggle(`on`,t.dataset.val===e.cam)),d.textContent=l[e.weather]||`Clear`,d.classList.toggle(`on`,e.weather!==`clear`),f.textContent=u[e.season]||`Spring`,f.classList.toggle(`on`,(e.season||0)>0),p.textContent=e.office?`Exit`:`Office`,p.classList.toggle(`on`,!!e.office),_.textContent=e.auto?`❚❚`:`▶`,_.classList.toggle(`on`,e.auto),g||(h.value=String(e.t))}w();let T=setInterval(w,200);function E(e){if(!S){a.style.display=`none`,x.classList.remove(`on`),o.classList.remove(`open`);return}C=e,a.style.display=e?`none`:`flex`,x.classList.toggle(`on`,e),e&&o.classList.remove(`open`)}function D(){E(!C)}return{toggle:D,setHidden:E,refresh:w,destroy(){clearInterval(T),a.remove(),o.remove(),x.remove(),i.remove()}};function O(){let e=document.createElement(`div`);return e.className=`sep`,e}}var zt=[`clear`,`rain`,`snow`,`fog`];function Bt({extent:e=7}={}){let t=new L;t.raycast=()=>{};let n=e+2,r=.25,i=(e,t)=>e+Math.random()*(t-e),a=new ve(new S(.015,.5),new N({color:`#a9bdd6`,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),600);a.frustumCulled=!1,a.raycast=()=>{};let o=new Float32Array(600*3),s=new Float32Array(600);for(let e=0;e<600;e++)o[e*3]=i(-n,n),o[e*3+1]=i(r,11),o[e*3+2]=i(-n,n),s[e]=i(9,14);let c=new ve(new S(.07,.07),new N({color:`#f3f7ff`,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),700);c.frustumCulled=!1,c.raycast=()=>{};let l=new Float32Array(700*3),u=new Float32Array(700),d=new Float32Array(700);for(let e=0;e<700;e++)l[e*3]=i(-n,n),l[e*3+1]=i(r,11),l[e*3+2]=i(-n,n),u[e]=i(0,6.28),d[e]=i(.6,1.2);t.add(a,c);let f=Array.from({length:8},()=>new I),p=0,m=`clear`,h=0,g=0,_=0,v=0,y=0,b=new x,C=(e,t,n,r)=>e+(t-e)*Math.min(1,n*r);function w(e){zt.includes(e)&&(m=e)}function T(){m=zt[(zt.indexOf(m)+1)%zt.length]}function E(e,t){let x=m===`rain`,S=m===`snow`,w=m===`fog`,T=m!==`clear`;h=C(h,+!!T,e,1.4),g=C(g,+!!T,e,1.2),_=C(_,+!!w,e,.9),y=C(y,T&&!w?1:0,e,1),v=C(v,+!!S,e,S?.22:.5);let E=x?h:0,D=Math.round(600*E);for(let t=0;t<600;t++){if(t>=D){b.position.set(0,-50,0),b.scale.setScalar(0),b.updateMatrix(),a.setMatrixAt(t,b.matrix);continue}o[t*3+1]-=s[t]*e,o[t*3]+=e*1.1,o[t*3+1]<r&&(o[t*3]=i(-n,n),o[t*3+1]=11,o[t*3+2]=i(-n,n)),b.position.set(o[t*3],o[t*3+1],o[t*3+2]),b.rotation.set(0,0,0),b.scale.set(1,1,1),b.updateMatrix(),a.setMatrixAt(t,b.matrix)}a.instanceMatrix.needsUpdate=!0,a.material.opacity=.55*E,p=x?Math.round(8*h):0;for(let e=0;e<p;e++)f[e].set(Math.random(),Math.random(),.05*h);let O=Math.round(700*(S?h:0));for(let a=0;a<700;a++){if(a>=O){b.position.set(0,-50,0),b.scale.setScalar(0),b.updateMatrix(),c.setMatrixAt(a,b.matrix);continue}l[a*3+1]-=d[a]*e;let o=Math.sin(t*1.5+u[a])*.5;l[a*3+1]<r&&(l[a*3]=i(-n,n),l[a*3+1]=11,l[a*3+2]=i(-n,n)),b.position.set(l[a*3]+o,l[a*3+1],l[a*3+2]),b.rotation.set(0,0,0),b.scale.setScalar(1),b.updateMatrix(),c.setMatrixAt(a,b.matrix)}c.instanceMatrix.needsUpdate=!0,c.material.opacity=.9*(S?h:0)}return{group:t,update:E,cycle:T,setKind:w,rainDrops:f,get kind(){return m},get intensity(){return h},get overcast(){return g},get fog(){return _},get snow(){return v},get cloud(){return y},get rainDropCount(){return p},poolCounts:{rain:600,snow:700}}}function U(e,t,n,r,{rough:i=.62,metal:a=0,x:s=0,y:c=0,z:l=0,emissive:u=null,emissiveIntensity:d=1}={}){let f=new o(new M(e,t,n),new v({color:r,roughness:i,metalness:a,...u?{emissive:u,emissiveIntensity:d}:{}}));return f.position.set(s,c,l),f}function Vt({tier:e=`corner`}={}){let t=new f,n=new _(43,1,.1,100),r=new I(0,1.62,4.35);n.position.copy(r),n.lookAt(0,1.12,-1);let i=new L;t.add(i);let a=new L,s=new L;i.add(a,s);let l=[],u=`#3a2618`,d=`#5b3d27`,p=`#5a5650`;a.add(U(11,.2,11,`#3c2a1c`,{rough:.5,y:-.1})),a.add(U(11,.2,11,`#241a13`,{rough:.9,y:3}));function m(e){let t=new L;t.add(U(.2,3.2,8,`#4a3322`,{rough:.7,x:e*3.6,y:1.5,z:0}));for(let n of[.9,2.1])t.add(U(.22,.06,8,u,{x:e*3.59,y:n,z:0}));let n=new o(new S(1.5,1),new v({map:Yt(e),roughness:.8}));return n.position.set(e*3.49,1.7,.4),n.rotation.y=-e*Math.PI/2,t.add(U(.06,1.18,1.68,`#2a1c10`,{x:e*3.52,y:1.7,z:.4}),n),t}a.add(m(-1),m(1));let h=new S(3,2.5),g=new N({color:`#ffffff`,toneMapped:!1}),y=new N({color:`#ffffff`,toneMapped:!1}),b=1.55,x=new o(h,g);x.position.set(-1.06,b,-2.64),x.rotation.y=Math.PI/4;let C=new o(h,y);C.position.set(1.06,b,-2.64),C.rotation.y=-Math.PI/4,a.add(x,C),a.add(U(.08,2.7,.08,u,{x:0,y:b,z:-2.2}));for(let[e,t,n]of[[-1.06,-2.64,Math.PI/4],[1.06,-2.64,-Math.PI/4]]){let r=new L;r.add(U(3.05,.09,.09,u,{y:1.3})),r.add(U(3.05,.09,.09,u,{y:-1.25})),r.add(U(.09,2.6,.09,u,{x:-1.5})),r.position.set(e,b,t),r.rotation.y=n,a.add(r)}a.add(U(5.4,.5,.3,d,{x:0,y:.25,z:-2.1500000000000004})),a.add(U(.4,.06,.4,`#1a130c`,{y:2.94,z:1.3}));let w=new o(new ge(.16,20),new N({color:`#ffe6b0`,toneMapped:!1}));w.position.set(0,2.9,1.3),w.rotation.x=Math.PI/2,a.add(w),a.add(Ut(l,{x:-3.46,y:2.15,z:.2,ry:Math.PI/2,face:`#efe2c8`,rim:`#2a1c10`})),s.add(U(11,.2,11,`#403d38`,{rough:.85,y:-.1})),s.add(U(11,.2,11,`#1c1a17`,{rough:.95,y:2.8})),s.add(U(7,3,.2,p,{rough:.92,x:0,y:1.4,z:-2.9})),s.add(U(.2,3,6,p,{rough:.92,x:-3.2,y:1.4,z:-.2})),s.add(U(.2,3,6,p,{rough:.92,x:3.2,y:1.4,z:-.2}));for(let e of[-1.6,-.4]){let t=new o(new ce(.07,.07,6,10),new v({color:`#6b6258`,roughness:.6,metalness:.4}));t.rotation.z=Math.PI/2,t.position.set(0,2.62,e),s.add(t)}let T=new N({color:`#ffffff`,toneMapped:!1}),E=new o(new S(1.9,1.2),T);E.position.set(0,1.5,-2.79),s.add(E),s.add(U(2.06,1.36,.06,`#241a12`,{x:0,y:1.5,z:-2.83})),s.add(U(.04,.34,.04,`#1a1410`,{x:-.1,y:2.45,z:-.4}));let D=new o(new ge(.1,16),new N({color:`#ffdb8a`,toneMapped:!1}));D.position.set(-.1,2.26,-.4),D.rotation.x=Math.PI/2,s.add(D);let ne=new L;ne.add(U(1.3,.05,.32,`#3a2c1e`,{x:0,y:0,z:0}));let re=[`#7a3a2a`,`#2a4a6a`,`#b08a3a`,`#3a5a3a`,`#6a2a4a`];for(let e=0;e<8;e++)ne.add(U(.12,.34,.24,re[e%re.length],{x:-.55+e*.14,y:.2,z:0}));ne.position.set(-2.3,1.5,-2.66),s.add(ne);let k=new L;k.add(U(.34,.34,.34,`#7a4a2a`,{y:.17}));let ie=new L;for(let e=0;e<6;e++){let t=U(.05,.5,.14,`#3a7a3a`,{rough:.7});t.geometry.translate(0,.25,0),t.rotation.z=(e/6-.5)*1.2,t.rotation.x=Math.sin(e)*.25,ie.add(t)}ie.position.y=.34,k.add(ie),k.position.set(2.45,0,-1.4),s.add(k),s.add(Ut(l,{x:1.9,y:2.1,z:-2.78,ry:0,face:`#d8d2c4`,rim:`#1a130c`}));let ae=new L;ae.add(U(3.4,.12,1.5,`#6e4a30`,{rough:.32,y:.86,z:1.5})),ae.add(U(3.2,.78,1.36,d,{y:.46,z:1.5}));for(let e of[.66,.4,.14])ae.add(U(.9,.2,.04,`#4a3120`,{x:1.05,y:e,z:2.2}));ae.add(U(.12,.04,.04,`#caa15a`,{x:1.05,y:.66,z:2.23,metal:.6})),i.add(ae);let A=new L;A.add(U(.06,.5,.06,`#2a1c10`,{x:-1.15,y:1.15,z:1.6}));let oe=new o(new de(.22,.26,16,1,!0),new v({color:`#c2802e`,roughness:.5,side:2,emissive:`#3a2208`,emissiveIntensity:.6}));oe.position.set(-1.15,1.42,1.6),A.add(oe);let P=new ye(`#ffb15a`,7,7,1.8);P.position.set(-1.15,1.34,1.6),A.add(P),i.add(A);let se=new L;se.add(U(.62,.03,.42,`#1c1c20`,{y:.93,z:1.5,metal:.4,rough:.4}));let le=new o(new M(.62,.4,.025),new v({color:`#0a0c10`,emissive:`#2a4a6a`,emissiveIntensity:.7,roughness:.3}));le.position.set(0,1.14,1.31),le.rotation.x=-.32,se.add(le),se.userData.role=`laptop`,i.add(se);let F=new L;F.add(U(.26,.07,.34,`#15151a`,{x:1,y:.93,z:1.5})),F.add(U(.3,.06,.08,`#101015`,{x:1,y:1,z:1.34})),F.userData.role=`phone`,i.add(F);let ue=new c(`#6a5238`,`#140d08`,.55);t.add(ue);let fe=new ee(`#ffd9a0`,9,9,.7,.5,1.2);fe.position.set(0,2.95,1.3),fe.target.position.set(0,.86,1.5),t.add(fe,fe.target);let pe=Wt(!1),me=Wt(!0),he=.62,_e=1.32,ve=1.22,be=1.78,xe=new O(new te({map:pe,transparent:!0,depthWrite:!1}));xe.scale.set(he,he,1),xe.position.set(_e,ve,be),xe.userData.role=`cat`,i.add(xe);let Se=new O(new te({map:Kt(),transparent:!0,depthWrite:!1,opacity:0}));Se.scale.set(.3,.3,1),Se.raycast=()=>{},i.add(Se);let R=0;function Ce(){R=1.3}let we=.62,Te=.42,Ee=.34,De=new L;De.position.set(-.78,1.06,1.95),De.add(U(we,.05,Ee,`#3a3026`,{y:-.19}));let Oe=new o(new M(we-.04,Te-.08,Ee-.04),new v({color:`#1f9fc0`,transparent:!0,opacity:.26,roughness:.1,emissive:`#0a3a4a`,emissiveIntensity:.4,depthWrite:!1}));Oe.position.y=.02,De.add(Oe);for(let e of[-1,1])for(let t of[-1,1])De.add(U(.03,Te,.03,`#20262c`,{x:e*(we/2-.015),z:t*(Ee/2-.015),metal:.5}));let ke=new o(new M(we,Te,Ee),new N({visible:!1}));ke.userData.role=`tank`,De.add(ke);let Ae=new ye(`#5fd8ff`,0,3,2);De.add(Ae);let je=[qt(`#e8a23c`),qt(`#d85a6a`),qt(`#6cc0e0`)],Me=[],Ne=Te/2-.12;for(let e=0;e<3;e++){let t=new O(new te({map:je[e],transparent:!0,depthWrite:!1})),n=.15-e*.015;t.userData={sz:n,sp:.6+e*.22,ph:e*2.1,ax:.21*(.7+.1*e),ay:Ne,az:.09000000000000001,prevx:0},t.scale.set(n,n,1),Me.push(t),De.add(t)}let Pe=Jt(),Fe=[];for(let e=0;e<5;e++){let t=new O(new te({map:Pe,color:`#cfeffb`,transparent:!0,opacity:.5,depthWrite:!1}));t.userData={ph:e/5,sp:.16+Math.random()*.06,x:-.1+e%3*.07},t.scale.setScalar(.03+e%2*.015),t.raycast=()=>{},Fe.push(t),De.add(t)}let z=new O(new te({map:Pe,color:`#c8a24a`,transparent:!0,opacity:0,depthWrite:!1}));z.scale.setScalar(.04),z.raycast=()=>{},De.add(z);let B=0;function Ie(){B=3,z.position.set(-.05,Ne,0),z.material.opacity=1}i.add(De);let Le=new L;for(let e=0;e<8;e++){let t=new O(new te({map:Pe,color:`#ffd9a0`,transparent:!0,opacity:0,depthWrite:!1,blending:2}));t.scale.setScalar(.018),t.userData={ph:e*.9,sp:.1+e%3*.04,r:.1+e%4*.03},t.raycast=()=>{},Le.add(t)}Le.position.set(-1.15,1.2,1.6),i.add(Le);let Re=Ht(),ze=P.intensity,Be=le.material.emissiveIntensity,Ve=new j;function He(e,t,i){let a=i?i.windowGlow:0,o=a>.55;xe.material.map=o?me:pe,R>0&&(R=Math.max(0,R-e));let s=R>0?Math.sin((1.3-R)/1.3*Math.PI):0,c=o?.012*Math.sin(t*1.2):.03*Math.sin(t*2.4);xe.scale.set(he,he*(1+c+.12*s),1),xe.position.y=ve+.06*s,Se.material.opacity=s,Se.position.set(_e,1.72+.5*(1-R/1.3),be),Se.scale.setScalar(.22+.1*s),B>0&&(B=Math.max(0,B-e),z.position.y=Math.max(-.09,z.position.y-e*.06),z.material.opacity=B>.3?1:B/.3);for(let e of Me){let n=e.userData,r=Math.sin(t*n.sp+n.ph)*n.ax,i=Math.sin(t*n.sp*.8+n.ph*1.7)*n.ay*.7,a=Math.cos(t*n.sp*.6+n.ph)*n.az,o=B>0?z.position.x:r,s=B>0?z.position.y:i,c=B>0?z.position.z:a,l=B>0?.05:.1;e.position.x+=(o-e.position.x)*l,e.position.y+=(s-e.position.y)*l,e.position.z+=(c-e.position.z)*l,e.scale.x=(e.position.x>=n.prevx?1:-1)*n.sz,n.prevx=e.position.x}for(let e of Fe){let n=(t*e.userData.sp+e.userData.ph)%1;e.position.set(e.userData.x+Math.sin(t*2+e.userData.ph*9)*.015,-.09+2*Ne*n,.02),e.material.opacity=.5*Math.sin(n*Math.PI)}Ae.intensity=2.6*a,Oe.material.emissiveIntensity=.4+.9*a,P.intensity=ze*(.97+.03*Math.sin(t*7)*Math.sin(t*2.3)),le.material.emissiveIntensity=Be*(.85+.15*Math.sin(t*3.1+1)),Ve.setRGB(1,.85,.62),Le.children.forEach((e,n)=>{let r=e.userData,i=(t*r.sp+r.ph)%1;e.position.set(Math.cos(t*.5+r.ph*5)*r.r,-.15+i*.45,Math.sin(t*.4+r.ph*5)*r.r),e.material.opacity=(.1+.18*a)*Math.sin(i*Math.PI)}),ie.rotation.z=Math.sin(t*.8)*.05,ie.rotation.x=Math.sin(t*.6+1)*.04;let u=i?i.t%1:0;for(let e of l)e.rotation.z=-u*Math.PI*2;Re.update(e),n.position.set(r.x+Math.sin(t*.5)*.04,r.y+Math.sin(t*.7)*.02,r.z),n.lookAt(0,1.12,-1)}function Ue(e){g.map=e,y.map=e,g.needsUpdate=!0,y.needsUpdate=!0}function We(e){T.map=e,T.needsUpdate=!0}let Ge=e;function Ke(e){Ge=e===`basement`?`basement`:`corner`;let t=Ge===`corner`;return a.visible=t,s.visible=!t,fe.intensity=t?9:3.2,ue.intensity=t?.55:.78,ue.color.set(t?`#6a5238`:`#7a5a34`),Ge}return Ke(Ge),{scene:t,camera:n,update:He,setCityTexture:Ue,setVignetteTexture:We,setFitout:Ke,petCat:Ce,feedFish:Ie,vignette:Re,interactables:[se,F,xe,ke],get tier(){return Ge}}}function Ht(){let e=new f;e.background=new j(`#7fb0dd`);let t=new d(-1.4,1.4,.9,-.9,0,10);t.position.set(0,0,5);let n=(e,t={})=>new N({color:e,toneMapped:!1,...t}),r=(e,t,r,i,a,s,c)=>{let l=new o(new S(e,t),n(s,c));return l.position.set(r,i,a),l};e.add(r(3.2,.9,.5,-.95,1,`#2a4a30`)),e.add(r(3.2,.7,-.7,-1.05,2,`#1d3724`)),e.add(r(.06,.3,-.95,-.55,3,`#3a2a1a`));let i=new o(new ge(.22,18),n(`#234a2a`));i.position.set(-.95,-.32,3),e.add(i),e.add(r(.04,.55,.9,-.55,3,`#20242a`));let a=new o(new ge(.1,16),n(`#ffd98a`,{transparent:!0,opacity:0}));a.position.set(.9,-.26,3.1),e.add(a);let s=new o(new ge(.16,24),n(`#fff4d8`));e.add(s);let c=[];for(let[t,r]of[[-1,.5],[-.6,.7],[.2,.6],[.7,.72],[1.05,.45],[-.2,.78],[.45,.4]]){let i=new o(new ge(.015,8),n(`#ffffff`,{transparent:!0,opacity:0}));i.position.set(t,r,.5),c.push(i),e.add(i)}let l=new j(`#141d33`),u=new j(`#7fb6e0`),p=new j(`#d6824a`),m=new j(`#fff0cc`),h=new j(`#cdd8ef`),g=.34;function _(t){g=(g+t*.04)%1;let n=g*Math.PI*2,r=-Math.cos(n);s.position.set(Math.sin(n)*1.15,r*.66+.06,0);let i=b.smoothstep(r,-.18,.5),o=b.smoothstep(.32,0,Math.abs(r));e.background.copy(l).lerp(u,i).lerp(p,o*.45),s.material.color.copy(r>0?m:h),a.material.opacity=1-i;let d=(1-i)*.85;for(let e of c)e.material.opacity=d}return{scene:e,camera:t,update:_}}function Ut(e,{x:t,y:n,z:r,ry:i=0,face:a=`#efe2c8`,rim:s=`#2a1c10`}){let c=new L,l=new o(new ge(.2,28),new v({color:s,roughness:.6})),u=new o(new ge(.17,28),new v({color:a,roughness:.7}));u.position.z=.01;let d=new o(new S(.018,.14),new v({color:`#1a130c`,roughness:.5}));return d.geometry.translate(0,.05,0),d.position.z=.02,e.push(d),c.add(l,u,d),c.position.set(t,n,r),c.rotation.y=i,c}function Wt(e){let t=document.createElement(`canvas`);t.width=t.height=128;let n=t.getContext(`2d`),r=`#e08a3c`,i=`#b96a26`,a=`#3a2410`;if(n.lineJoin=`round`,e){n.fillStyle=r,n.beginPath(),n.ellipse(64,78,44,26,0,0,7),n.fill(),n.fillStyle=i,n.beginPath(),n.ellipse(64,86,44,16,0,0,7),n.fill(),n.fillStyle=r,n.beginPath(),n.arc(36,70,20,0,7),n.fill(),n.fillStyle=r,Gt(n,24,56,34,44,42,58),Gt(n,40,54,50,44,54,60),n.strokeStyle=i,n.lineWidth=7,n.lineCap=`round`,n.beginPath(),n.moveTo(100,70),n.quadraticCurveTo(112,90,88,96),n.stroke(),n.strokeStyle=a,n.lineWidth=2.5,n.beginPath(),n.arc(30,70,5,.1,Math.PI-.1),n.stroke(),n.strokeStyle=i,n.lineWidth=3;for(let e of[60,74,88])n.beginPath(),n.moveTo(e,58),n.lineTo(e,70),n.stroke()}else{n.fillStyle=r,n.beginPath(),n.ellipse(64,86,30,34,0,0,7),n.fill(),n.fillStyle=`#f3c98a`,n.beginPath(),n.ellipse(64,92,14,22,0,0,7),n.fill(),n.strokeStyle=i,n.lineWidth=8,n.lineCap=`round`,n.beginPath(),n.moveTo(92,100),n.quadraticCurveTo(116,86,104,60),n.stroke(),n.fillStyle=r,n.beginPath(),n.arc(64,48,24,0,7),n.fill(),n.fillStyle=r,Gt(n,44,34,50,18,60,34),Gt(n,84,34,78,18,68,34),n.fillStyle=`#f0b0c0`,Gt(n,47,30,50,22,56,32),Gt(n,81,30,78,22,72,32),n.fillStyle=a,n.beginPath(),n.arc(55,47,3.4,0,7),n.arc(73,47,3.4,0,7),n.fill(),n.fillStyle=`#e06a7a`,Gt(n,61,54,67,54,64,58),n.strokeStyle=a,n.lineWidth=1.6;for(let e of[-2,3])n.beginPath(),n.moveTo(50,55+e),n.lineTo(34,53+e),n.moveTo(78,55+e),n.lineTo(94,53+e),n.stroke();n.strokeStyle=i,n.lineWidth=3;for(let e of[78,90,102])n.beginPath(),n.moveTo(50,e),n.lineTo(78,e),n.stroke()}let o=new me(t);return o.colorSpace=D,o}function Gt(e,t,n,r,i,a,o){e.beginPath(),e.moveTo(t,n),e.lineTo(r,i),e.lineTo(a,o),e.closePath(),e.fill()}function Kt(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`);t.fillStyle=`#ff5a8a`,t.beginPath(),t.moveTo(32,52),t.bezierCurveTo(6,32,14,10,32,24),t.bezierCurveTo(50,10,58,32,32,52),t.fill();let n=new me(e);return n.colorSpace=D,n}function qt(e){let t=document.createElement(`canvas`);t.width=t.height=64;let n=t.getContext(`2d`);n.fillStyle=e,n.beginPath(),n.ellipse(30,32,18,11,0,0,7),n.fill(),n.beginPath(),n.moveTo(46,32),n.lineTo(60,22),n.lineTo(60,42),n.closePath(),n.fill(),n.fillStyle=`rgba(255,255,255,0.35)`,n.beginPath(),n.ellipse(28,36,12,5,0,0,7),n.fill(),n.fillStyle=`#15212a`,n.beginPath(),n.arc(20,30,2.6,0,7),n.fill();let r=new me(t);return r.colorSpace=D,r}function Jt(){let e=document.createElement(`canvas`);e.width=e.height=32;let t=e.getContext(`2d`),n=t.createRadialGradient(16,16,0,16,16,16);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.6,`rgba(255,255,255,0.7)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.beginPath(),t.arc(16,16,16,0,7),t.fill();let r=new me(e);return r.colorSpace=D,r}function Yt(e){let t=document.createElement(`canvas`);t.width=t.height=256;let n=t.getContext(`2d`),r=n.createLinearGradient(0,0,256,256);e<0?(r.addColorStop(0,`#6a3b1c`),r.addColorStop(1,`#caa15a`)):(r.addColorStop(0,`#3a4a6a`),r.addColorStop(1,`#a86a3a`)),n.fillStyle=r,n.fillRect(0,0,256,256),n.globalAlpha=.5;for(let e=0;e<5;e++)n.fillStyle=e%2?`#2a1c10`:`#e0c080`,n.fillRect(30+e*36,40+e%3*30,26,150);let i=new me(t);return i.colorSpace=D,i}function Xt(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=(e,n,r)=>{let i=t.createRadialGradient(e,n,0,e,n,r);i.addColorStop(0,`rgba(255,255,255,0.95)`),i.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=i,t.beginPath(),t.arc(e,n,r,0,7),t.fill()};n(128*.42,128*.56,128*.26),n(128*.6,128*.5,128*.3),n(128*.5,128*.46,128*.22),n(128*.34,128*.54,128*.18),n(128*.7,128*.58,128*.18);let r=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5],i=t.getImageData(0,0,128,128),a=i.data;for(let e=0;e<128;e++)for(let t=0;t<128;t++){let n=(e*128+t)*4,i=a[n+3]/255,o=(r[e%4*4+t%4]+.5)/16-.5;a[n+3]=Math.max(0,Math.min(1,Math.floor(i*5+.5+o)/5))*255}t.putImageData(i,0,0);let o=new me(e);return o.colorSpace=D,o}function Zt({extent:e=8,count:t=16}={}){let n=new L;n.raycast=()=>{};let r=Xt(),i=e+6,a=(e,t)=>e+Math.random()*(t-e),o=[];for(let e=0;e<t;e++){let e=new te({map:r,transparent:!0,depthWrite:!1,opacity:0,fog:!0}),t=new O(e),s={sp:t,mat:e,wisp:Math.random(),x:a(-i,i),z:a(-i,i),hiY:a(4,6.8),loY:a(.6,2.2),w:a(3,5.6),h:a(1.7,3),speed:a(.25,.7),op:a(.6,1)};t.raycast=()=>{},o.push(s),n.add(t)}let s=new j,c=new j(`#ffffff`),l=new j(`#5b626e`);function u(e,t,n,r){let u=r?r.cloud:0,d=r?r.fog:0,f=Math.min(1,.4+.6*u+.5*d);s.copy(n.sky).lerp(c,.62),s.lerp(l,.6*u);for(let n=0;n<o.length;n++){let r=o[n],c=n/o.length<f;r.x+=r.speed*e*(.6+.8*u),r.x>i&&(r.x=-i,r.z=a(-i,i));let l=Math.min(Qt(r.x,-i,-i+3),1-Qt(r.x,i-3,i)),p=r.hiY*(1-d)+r.loY*d,m=1-.5*r.wisp,h=.72*Math.max(0,1-d-u)+1*u+.42*d,g=c?Math.max(0,h)*r.op*m*l:0;r.mat.opacity+=(g-r.mat.opacity)*Math.min(1,e*2.5),r.mat.color.copy(s);let _=r.w*(1+.6*d)*(1+.4*r.wisp),v=r.h*(1-.35*d);r.sp.scale.set(_,v,1),r.sp.position.set(r.x,p+Math.sin(t*.3+n)*.15,r.z)}}function d(e){r=e;for(let t of o)t.mat.map=e,t.mat.needsUpdate=!0}return{group:n,update:u,setTexture:d,get count(){return o.length}}}function Qt(e,t,n){let r=Math.max(0,Math.min(1,(e-t)/(n-t)));return r*r*(3-2*r)}var $t=`varying vec2 vUv;

void main() {
  
  
  
  vUv = uv;

  
  
  
  
  
  
  
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,en=`precision highp float;

varying vec2 vUv;

uniform float uTime;
uniform vec3  uInk;
uniform vec3  uGold;

uniform vec3  uFogColor;
uniform float uFogAmt;
uniform float uFogCharm;
float bayer2(vec2 q){ return 2.0 * q.x + 3.0 * q.y - 4.0 * q.x * q.y; }
float bayer4(vec2 c){ vec2 p = floor(mod(c, 4.0));
  return (4.0 * bayer2(floor(p / 2.0)) + bayer2(mod(p, 2.0))) / 16.0; }

void main() {
  
  
  float wave = 0.5 + 0.5 * sin(vUv.x * 3.0 + vUv.y * 2.0 + uTime * 0.3);

  
  
  wave *= 0.6 + 0.4 * sin(vUv.y * 4.0 - uTime * 0.15);

  
  float bands = 6.0;
  float d = bayer4(gl_FragCoord.xy) - 0.5;
  float banded = clamp(floor(wave * bands + 0.5 + d) / bands, 0.0, 1.0);
  wave = mix(wave, banded, uFogCharm);

  
  vec3 ink  = mix(uInk, uFogColor, uFogAmt);
  vec3 gold = mix(uGold * 0.5, uFogColor * 1.25, uFogAmt);   
  vec3 colour = mix(ink, gold, wave * 0.45);

  gl_FragColor = vec4(colour, 1.0); 
}`,tn=`precision highp float;

varying vec2 vUv;

uniform sampler2D uCurr;          
uniform sampler2D uPrev;          
uniform vec2  uTexel;             
uniform vec2  uMouse;             
uniform float uMouseStrength;     
uniform float uC2;                
uniform float uDamping;           

#define RAIN_MAX 8
uniform int  uRainCount;          
uniform vec3 uRainDrops[RAIN_MAX];

void main() {
  
  
  
  
  float centre = texture2D(uCurr, vUv).r;
  float left   = texture2D(uCurr, vUv - vec2(uTexel.x, 0.0)).r;
  float right  = texture2D(uCurr, vUv + vec2(uTexel.x, 0.0)).r;
  float down   = texture2D(uCurr, vUv - vec2(0.0, uTexel.y)).r;
  float up     = texture2D(uCurr, vUv + vec2(0.0, uTexel.y)).r;
  float prev   = texture2D(uPrev, vUv).r;

  
  
  float laplacian = left + right + up + down - 4.0 * centre;

  
  float next = (2.0 * centre - prev + uC2 * laplacian) * uDamping;

  
  
  
  float d = distance(vUv, uMouse);
  float sigma = 0.012;
  next += uMouseStrength * exp(-(d * d) / (2.0 * sigma * sigma));

  
  for (int i = 0; i < RAIN_MAX; i++) {
    if (i >= uRainCount) break;
    vec3 drop = uRainDrops[i];
    float rd = distance(vUv, drop.xy);
    next += drop.z * exp(-(rd * rd) / (2.0 * 0.006 * 0.006));
  }

  
  gl_FragColor = vec4(next, 0.0, 0.0, 1.0);
}`,nn=`precision highp float;

uniform sampler2D uHeight;   
uniform float uDisplace;     

varying vec2 vUv;
varying vec3 vWorldPos;      

void main() {
  vUv = uv;

  float h = texture2D(uHeight, uv).r;            
  vec3 displaced = position + vec3(0.0, 0.0, h * uDisplace); 

  vec4 worldPos = modelMatrix * vec4(displaced, 1.0); 
  vWorldPos = worldPos.xyz;

  
  
  gl_Position = projectionMatrix * viewMatrix * worldPos;
}`,rn=`precision highp float;

uniform sampler2D uHeight;       
uniform sampler2D uScene;        
uniform vec2  uTexel;            
uniform vec2  uResolution;       
uniform float uNormalStrength;   
uniform float uRefractStrength;  
uniform float uChromaScale;      
                                 
                                 
uniform mat3  uNormalMatrix;     
uniform vec3  uLightDir;         
uniform vec3  uInk;              
uniform vec3  uGold;             

uniform float uVector;
uniform vec3  uVecWater;         
uniform vec3  uVecTint;          

varying vec2 vUv;
varying vec3 vWorldPos;

void main() {
  
  float hL = texture2D(uHeight, vUv - vec2(uTexel.x, 0.0)).r;
  float hR = texture2D(uHeight, vUv + vec2(uTexel.x, 0.0)).r;
  float hD = texture2D(uHeight, vUv - vec2(0.0, uTexel.y)).r;
  float hU = texture2D(uHeight, vUv + vec2(0.0, uTexel.y)).r;
  vec3 nObject = normalize(vec3((hL - hR) * uNormalStrength,
                                (hD - hU) * uNormalStrength, 1.0));
  vec3 N = normalize(uNormalMatrix * nObject);          
  vec3 V = normalize(cameraPosition - vWorldPos);       

  
  
  vec2 screenUV = gl_FragCoord.xy / uResolution;
  
  
  vec2 tilt = (viewMatrix * vec4(N, 0.0)).xy;
  vec2 off  = tilt * uRefractStrength;
  
  
  float caR = mix(1.0, 1.08, uChromaScale);
  float caB = mix(1.0, 0.92, uChromaScale);
  vec3 refr;
  refr.r = texture2D(uScene, screenUV + off * caR).r;
  refr.g = texture2D(uScene, screenUV + off      ).g;
  refr.b = texture2D(uScene, screenUV + off * caB).b;

  
  float fres = pow(1.0 - max(dot(N, V), 0.0), 3.0);     

  
  if (uVector > 0.5) {
    float flatness = clamp(N.y, 0.0, 1.0);              
    float crest    = pow(1.0 - flatness, 1.3);          
    vec3  wcol = mix(uVecWater, uVecWater * 1.2 + 0.08, crest);
    wcol = mix(wcol, vec3(0.86, 0.96, 1.0), fres * 0.22); 
    gl_FragColor = vec4(wcol * uVecTint, 1.0);
    return;
  }

  vec3  L    = normalize(uLightDir);
  vec3  H    = normalize(L + V);
  float spec = pow(max(dot(N, H), 0.0), 60.0);          

  vec3 col = mix(refr, uInk, 0.12);                      
  col = mix(col, uGold, fres * 0.28);                    
  col += uGold * spec * 0.8;                             

  gl_FragColor = vec4(col, 1.0);
}`,an=`const float CA_STRENGTH   = 0.0030;  
const float VIGNETTE_EDGE = 1.20;    
const float VIGNETTE_SOFT = 0.45;    
const float VIGNETTE_MIN  = 0.55;    
const float GRAIN         = 0.045;   
const vec3  TINT_WARM     = vec3(1.03, 1.00, 0.94); 

varying vec2 vUv;
uniform sampler2D uScene;      
uniform float     uTime;       
uniform vec2      uResolution; 
uniform float     uGrain;      
                               
                               
uniform float     uChroma;     
                               
uniform float     uExposure;   
                               

/* Cheap screen-space hash (the classic sin-dot trick): one pseudo-random number
   per pixel per frame. Not statistically perfect — perfectly fine for grain. */
float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

void main() {
  /* Distance from the image centre, ASPECT-CORRECTED: without the correction a
     vignette on a wide screen is an ellipse squashed the wrong way. We scale x
     by aspect so "radius" means the same thing horizontally and vertically. */
  vec2  toCentre = vUv - 0.5;
  float aspect   = uResolution.x / uResolution.y;
  float r        = length(toCentre * vec2(aspect, 1.0));

  /* 1) CHROMATIC ABERRATION — sample R pushed outward, B pulled inward, G true.
     The offset grows with r² so the centre stays clean and edges fringe. */
  vec2 dir = (r > 0.0001) ? normalize(toCentre) : vec2(0.0);
  vec2 off = dir * (r * r) * CA_STRENGTH * uChroma;  
                                                     
                                                     
  vec3 col;
  col.r = texture2D(uScene, vUv + off).r;
  col.g = texture2D(uScene, vUv).g;
  col.b = texture2D(uScene, vUv - off).b;

  /* 2) VIGNETTE — smoothstep from "no effect" inside VIGNETTE_SOFT to full
     darkening at VIGNETTE_EDGE; never below VIGNETTE_MIN so blacks stay readable.
     The centre gets a slight warm tint instead — ink edges, golden heart. */
  float vig = 1.0 - smoothstep(VIGNETTE_SOFT, VIGNETTE_EDGE, r) * (1.0 - VIGNETTE_MIN);
  col *= mix(vec3(1.0), TINT_WARM, 1.0 - smoothstep(0.0, VIGNETTE_SOFT, r));
  col *= vig;

  /* 3) FILM GRAIN — re-seed the hash every frame via uTime so the noise dances.
     fract(uTime) cycles 0..1; multiplying into the pixel coord shifts the
     pattern. Centered around 0 (±0.5) so grain doesn't brighten the image. */
  float g = hash(gl_FragCoord.xy + fract(uTime * 13.37) * uResolution) - 0.5;
  col += g * GRAIN * uGrain;

  col *= uExposure;                              

  gl_FragColor = vec4(col, 1.0);
}`,on=`const float DITHER = 0.55;   

varying vec2 vUv;
uniform sampler2D uScene;        
uniform vec2      uResolution;   
uniform float     uPixelSize;    
uniform vec3      uPalette[8];   
uniform vec3      uPaletteB[8];  
uniform float     uPaletteBlend; 
uniform int       uPaletteSize;  

/* Bayer threshold for a virtual-pixel coordinate. mat4 columns are written
   column-major, so matrix[column][row] — laid out here so it reads like the
   table above. Returns 0..15. */
float bayer4(vec2 cell) {
  int x = int(mod(cell.x, 4.0));
  int y = int(mod(cell.y, 4.0));
  mat4 m = mat4(
     0.0, 12.0,  3.0, 15.0,   
     8.0,  4.0, 11.0,  7.0,   
     2.0, 14.0,  1.0, 13.0,   
    10.0,  6.0,  9.0,  5.0    
  );
  return m[x][y];
}

void main() {
  /* 1) SNAP — virtual grid: uPixelSize cells across, height follows the real
     aspect ratio so the cells are square on screen. floor() + 0.5 samples the
     CENTRE of each cell (sampling an edge invites bleeding between texels). */
  float aspect = uResolution.x / uResolution.y;
  vec2  grid   = vec2(uPixelSize, uPixelSize / aspect);
  vec2  cell   = floor(vUv * grid);             
  vec2  snapUv = (cell + 0.5) / grid;           
  vec3  col    = texture2D(uScene, snapUv).rgb;

  /* 2) DITHER — Bayer threshold for THIS CELL (not this real pixel: dithering
     must operate at virtual-pixel scale or the pattern vanishes inside blocks).
     Bias is ± half a "palette step" (≈ 1/paletteSize of full range) × DITHER. */
  float threshold = (bayer4(cell) + 0.5) / 16.0 - 0.5;        
  float step      = 1.0 / max(float(uPaletteSize - 1), 1.0);  
  col += threshold * step * DITHER;

  /* 3) QUANTIZE — nearest palette colour by squared RGB distance. The loop has a
     constant bound (GLSL requirement) and breaks at the live palette size.
     LESSON 09: we don't grade a fixed palette to "tint" it for time of day — that
     fights the quantizer (a graded source maps to the wrong fixed buckets). Instead
     we INTERPOLATE between two AUTHORED palettes (current → next time-of-day) and
     quantize against the blended entries. Each pixel still snaps to a clean palette
     colour; the palette itself drifts dawn→day→dusk→night (the Pokémon Gold/Silver
     trick, made continuous). */
  vec3  best  = mix(uPalette[0], uPaletteB[0], uPaletteBlend);
  float bestD = 1e9;
  for (int i = 0; i < 8; i++) {
    if (i >= uPaletteSize) break;
    vec3  pal = mix(uPalette[i], uPaletteB[i], uPaletteBlend);
    vec3  d   = col - pal;
    float dd  = dot(d, d);                       
    if (dd < bestD) { bestD = dd; best = pal; }
  }

  gl_FragColor = vec4(best, 1.0);
}`,sn=`precision highp float;

const float OUTLINE_LO = 0.030;  
const float OUTLINE_HI = 0.075;  

varying vec2 vUv;
uniform sampler2D uScene;        
uniform sampler2D uDepth;        
uniform vec2      uResolution;   
uniform float     uBands;        
uniform float     uToonGain;     
uniform float     uToonGamma;    
uniform vec3      uToonFloor;    
                                 
uniform vec3      uOutline;      
uniform float     uNear;         
uniform float     uFar;          
uniform float     uIsPerspective;

/* Raw depth sample → real view-space distance (positive, in world units). */
float linearDepth(vec2 uv) {
  float d = texture2D(uDepth, uv).x;          
  if (uIsPerspective > 0.5) {
    float z = d * 2.0 - 1.0;                   
    return (2.0 * uNear * uFar) / (uFar + uNear - z * (uFar - uNear));
  }
  return uNear + d * (uFar - uNear);          
}

void main() {
  vec2 texel = 1.0 / uResolution;

  /* --- 1) CEL POSTERIZE — snap luminance to flat bands, keep the hue. --------
     Rec.601 luma, then a TONE LIFT (gain + gamma) BEFORE banding. The lab scene
     is deliberately deep-ink/moody; without the lift almost every pixel sits in
     the lowest band and the toon look collapses to black blobs. The lift maps the
     scene's dark range up into the band range (gamma < 1 raises the shadows most),
     so towers AND water resolve into a few flat tones — and the dark outline then
     has a lit surface to sit on. Banding the LIFTED luminance, we re-apply the
     original hue (chroma = colour / luma) at the quantized brightness: shade snaps,
     hue survives. */
  vec3  c      = texture2D(uScene, vUv).rgb;
  c            = max(c, uToonFloor);     
  float lum    = dot(c, vec3(0.299, 0.587, 0.114));
  float lifted = pow(clamp(lum * uToonGain, 0.0, 1.0), uToonGamma);
  float levels = max(uBands, 2.0);
  float qlum   = clamp(floor(lifted * levels) / (levels - 1.0), 0.0, 1.0);
  vec3  cel    = (c / max(lum, 1e-4)) * qlum;

  /* --- 2) DEPTH OUTLINE — Roberts cross over a 2×2 block of linear depths. ----
     Normalise the jump by the centre distance (a RELATIVE threshold) so a far
     silhouette reads the same as a near one, and a gently receding surface (the
     water toward the horizon) doesn't trip a false line. */
  float dA = linearDepth(vUv);
  float dB = linearDepth(vUv + vec2(texel.x, 0.0));
  float dC = linearDepth(vUv + vec2(0.0, texel.y));
  float dD = linearDepth(vUv + texel);
  float grad = abs(dA - dD) + abs(dB - dC);            
  float rel  = grad / max(dA, 1e-3);
  float edge = smoothstep(OUTLINE_LO, OUTLINE_HI, rel);

  gl_FragColor = vec4(mix(cel, uOutline, edge), 1.0);
}`,cn=`precision highp float;

varying vec2 vUv;
uniform sampler2D uToon;   
uniform sampler2D uPixel;  
uniform float     uBlend;  

void main() {
  vec3 t = texture2D(uToon, vUv).rgb;
  vec3 p = texture2D(uPixel, vUv).rgb;
  gl_FragColor = vec4(mix(t, p, uBlend), 1.0);
}`,ln=`precision highp float;

varying vec2 vUv;

uniform sampler2D uCity;
uniform sampler2D uOffice;
uniform float uT;
uniform vec2  uFocus;

void main() {
  
  float t = uT * uT * (3.0 - 2.0 * uT);

  
  
  float scale = mix(1.0, 0.32, t);
  vec2 cityUv = uFocus + (vUv - uFocus) * scale;
  vec3 city = texture2D(uCity, cityUv).rgb;

  
  float office = smoothstep(0.40, 1.0, uT);
  vec3 room = texture2D(uOffice, vUv).rgb;

  
  vec3 col = mix(city, room, office);
  float v = 1.0 - smoothstep(0.2, 1.1, distance(vUv, vec2(0.5))) * (0.35 * (1.0 - abs(uT - 0.5) * 2.0));
  col *= v;

  gl_FragColor = vec4(col, 1.0);
}`,un=220,dn=new URLSearchParams(window.location.search),fn=dn.get(`demo`)===`1`||dn.has(`capture`);window.__demo=fn;var pn={night:[`#0A0C16`,`#1C2236`,`#3A3A52`,`#5A5A78`,`#8A92B0`],dawn:[`#1A1008`,`#43281A`,`#7A4A30`,`#B07A4E`,`#E8A86A`],noon:[`#16100A`,`#3A2F1E`,`#6B563A`,`#937B54`,`#B89968`],dusk:[`#140A0A`,`#3E1E1A`,`#7A3828`,`#B85A36`,`#F0884A`]},mn={night:[`#020604`,`#06180E`,`#10401E`,`#1E9040`,`#7FE0FF`],dawn:[`#060603`,`#1A2410`,`#3A6B22`,`#6CC040`,`#FFC060`],noon:[`#050805`,`#0E2912`,`#1E6B2F`,`#3CF06A`,`#FFB000`],dusk:[`#080402`,`#241408`,`#6B4A12`,`#E0A030`,`#FF7030`]},W=new le({antialias:!0,preserveDrawingBuffer:!0});W.shadowMap.enabled=!0,W.shadowMap.type=1,W.setPixelRatio(Math.min(window.devicePixelRatio,2)),W.setSize(window.innerWidth,window.innerHeight),W.setClearColor(920327,1),document.body.appendChild(W.domElement);var G=W.getDrawingBufferSize(new A),K=new f;K.fog=new k(10465470,0);var hn=new j(`#aeb6c0`),gn=.062,_n=new j(`#74508f`),vn=new j,q=Fe({aspect:window.innerWidth/window.innerHeight}),J=gt({t:.5}),yn=256,bn={type:C,format:p,minFilter:y,magFilter:y,wrapS:ae,wrapT:ae,depthBuffer:!1,stencilBuffer:!1},xn=[new F(yn,yn,bn),new F(yn,yn,bn),new F(yn,yn,bn)];for(let e of xn)W.setRenderTarget(e),W.clear();W.setRenderTarget(null);var Sn=new f,Cn=new d(-1,1,1,-1,0,1),wn=new g({vertexShader:r,fragmentShader:tn,uniforms:{uCurr:{value:null},uPrev:{value:null},uTexel:{value:new A(1/yn,1/yn)},uMouse:{value:new A(-1,-1)},uMouseStrength:{value:0},uC2:{value:.25},uDamping:{value:.992},uRainCount:{value:0},uRainDrops:{value:Array.from({length:8},()=>new I)}}});Sn.add(new o(new S(2,2),wn));var Tn=new F(G.x,G.y,{minFilter:u,magFilter:u,depthBuffer:!0,stencilBuffer:!1});function En(e){let t=document.createElement(`canvas`);t.width=t.height=1024;let n=t.getContext(`2d`);n.fillStyle=e?`#0c1418`:`#15110b`,n.fillRect(0,0,1024,1024),n.strokeStyle=e?`rgba(120,150,170,0.22)`:`rgba(184,153,104,0.30)`,n.lineWidth=2;for(let e=0;e<=1024;e+=64)n.beginPath(),n.moveTo(e,0),n.lineTo(e,1024),n.stroke(),n.beginPath(),n.moveTo(0,e),n.lineTo(1024,e),n.stroke();e||(n.fillStyle=`#B89968`,n.font=`bold 360px Georgia, serif`,n.textAlign=`center`,n.textBaseline=`middle`,n.fillText(`LGR`,512,470),n.font=`600 64px ui-monospace, monospace`,n.fillText(`WEB · STUDIO`,512,720));let r=new me(t);return r.colorSpace=D,r}var Dn=new o(new S(16,16),new N({map:En(fn)}));Dn.rotation.x=-Math.PI/2,Dn.position.y=-.35,K.add(Dn);var On=new o(new S(40,24),new g({depthWrite:!1,vertexShader:$t,fragmentShader:en,uniforms:{uTime:{value:0},uInk:{value:J.horizon},uGold:{value:J.sky},uFogColor:{value:vn},uFogAmt:{value:0},uFogCharm:Be}}));On.position.set(0,3,-8),K.add(On);var kn=new g({vertexShader:nn,fragmentShader:rn,uniforms:{uHeight:{value:null},uScene:{value:Tn.texture},uTexel:{value:new A(1/yn,1/yn)},uResolution:{value:new A(G.x,G.y)},uDisplace:{value:.42},uNormalStrength:{value:22},uRefractStrength:{value:.06},uChromaScale:{value:1},uNormalMatrix:{value:new P},uLightDir:{value:J.sunDir},uInk:{value:new j(`#2A2218`)},uGold:{value:new j(`#B89968`)},uVector:z,uVecWater:{value:new j(`#1fb8d8`)},uVecTint:{value:B}}}),An=new o(new S(16,16,yn-1,yn-1),kn);An.rotation.x=-Math.PI/2,An.updateMatrixWorld(!0),kn.uniforms.uNormalMatrix.value.getNormalMatrix(An.matrixWorld),K.add(An);var jn={value:0},Mn=new URLSearchParams(window.location.search),Nn=(Mn.get(`city`)?Number(Mn.get(`city`)):0)||Math.random()*1e9|0,Pn=Math.max(0,Qe.indexOf(Mn.get(`profile`)||`manhattan`)),Fn=Nt({windowGlow:jn}),Y=ct({seed:Nn,profileIndex:Pn,landmarkFactory:Fn,windowGlow:jn});K.add(Y.group);var In=xt({plinthTop:.3,extent:Y.extent,profile:Y.state.profile});K.add(In.group);var X=Bt({extent:Y.extent});K.add(X.group),wn.uniforms.uRainDrops.value=X.rainDrops;var Ln=Zt({extent:Y.extent});K.add(Ln.group);var Rn=[0,.33,.66,1],zn=0;window.__season=Rn[zn],Y.group.remove(Y.key),K.add(Y.key),Y.key.castShadow=!0,Y.key.shadow.mapSize.set(2048,2048),Y.key.shadow.bias=-18e-5,Y.key.shadow.normalBias=.028,K.add(Y.key.target);function Bn(){let e=Y.key.shadow.camera,t=Y.extent+4.5;e.left=-t,e.right=t,e.top=t,e.bottom=-t,e.near=1,e.far=Vn*2,e.updateProjectionMatrix()}var Vn=24;Bn();var Hn=!0;window.__shadows=Hn;function Un(){Y.generate(Nn,Pn),kn.uniforms.uVecWater.value.set(Y.waterColor),In.setProfile(Y.state.profile),Bn(),di()}Fn.whenReady.then(()=>{Un(),window.__cityReady=!0}),kn.uniforms.uVecWater.value.set(Y.waterColor);var Wn=new oe(G.x,G.y),Gn=new F(G.x,G.y,{minFilter:u,magFilter:u,depthBuffer:!0,stencilBuffer:!1,depthTexture:Wn}),Kn=new F(G.x,G.y,{minFilter:u,magFilter:u,depthBuffer:!1,stencilBuffer:!1}),qn=new F(G.x,G.y,{minFilter:u,magFilter:u,depthBuffer:!1,stencilBuffer:!1}),Jn=new F(G.x,G.y,{minFilter:u,magFilter:u,depthBuffer:!1,stencilBuffer:!1}),Yn=new f,Xn=new d(-1,1,1,-1,0,1),Zn=new o(new S(2,2));Yn.add(Zn);var Qn=new g({vertexShader:r,fragmentShader:an,uniforms:{uScene:{value:Gn.texture},uTime:{value:0},uResolution:{value:new A(G.x,G.y)},uGrain:{value:1},uChroma:{value:1},uExposure:{value:1}}}),$n=5,er=e=>{let t=e.map(e=>new j(e));for(;t.length<8;)t.push(new j(0,0,0));return t},tr=[`night`,`dawn`,`noon`,`dusk`],nr={inkgold:tr.map(e=>er(pn[e])),terminal:tr.map(e=>er(mn[e]))},rr=new g({vertexShader:r,fragmentShader:on,uniforms:{uScene:{value:Kn.texture},uResolution:{value:new A(G.x,G.y)},uPixelSize:{value:un},uPalette:{value:nr.inkgold[2]},uPaletteB:{value:nr.inkgold[2]},uPaletteBlend:{value:0},uPaletteSize:{value:$n}}});function ir(e){let t=Ir?nr.terminal:nr.inkgold,n=e%1*4,r=Math.floor(n)%4;rr.uniforms.uPalette.value=t[r],rr.uniforms.uPaletteB.value=t[(r+1)%4],rr.uniforms.uPaletteBlend.value=n-Math.floor(n)}var ar=new g({vertexShader:r,fragmentShader:t,uniforms:{uScene:{value:Kn.texture},uResolution:{value:new A(G.x,G.y)},uGridWidth:{value:160},uDither:{value:.55},uPalette:{value:e(i[`8-bit`].palette)},uPaletteSize:{value:1},uUsePalette:{value:1}}}),or={};for(let t of n)or[t]=i[t].palette?e(i[t].palette):null;var sr=[`native`,...n],cr=`native`;window.__era=cr;function lr(){if(cr===`native`)return;let e=i[cr];ar.uniforms.uGridWidth.value=e.gridWidth,ar.uniforms.uDither.value=e.dither,ar.uniforms.uUsePalette.value=+!!e.palette,e.palette&&(ar.uniforms.uPalette.value=or[cr],ar.uniforms.uPaletteSize.value=e.palette.length)}var ur=()=>cr===`native`?rr:ar,dr=new g({vertexShader:r,fragmentShader:sn,uniforms:{uScene:{value:Kn.texture},uDepth:{value:Wn},uResolution:{value:new A(G.x,G.y)},uBands:{value:4},uToonGain:{value:1.7},uToonGamma:{value:.6},uToonFloor:{value:J.toonFloor},uOutline:{value:J.outline},uNear:{value:.1},uFar:{value:100},uIsPerspective:{value:1}}}),fr=new g({vertexShader:r,fragmentShader:cn,uniforms:{uToon:{value:qn.texture},uPixel:{value:Jn.texture},uBlend:{value:0}}});function pr(e,t){Zn.material=e,W.setRenderTarget(t),W.render(Yn,Xn)}var Z=Vt({tier:`corner`});Z.camera.aspect=window.innerWidth/window.innerHeight,Z.camera.updateProjectionMatrix();var mr=new _(55,1.4,.1,100);mr.position.set(2.2,3.4,11.5),mr.lookAt(0,2,0);var hr=new F(1024,720,{minFilter:u,magFilter:u,depthBuffer:!0,stencilBuffer:!1});Z.setCityTexture(hr.texture);var gr=new F(512,320,{minFilter:u,magFilter:u,depthBuffer:!0,stencilBuffer:!1});Z.setVignetteTexture(gr.texture);var _r=new F(G.x,G.y,{minFilter:u,magFilter:u,depthBuffer:!1,stencilBuffer:!1}),vr=new F(G.x,G.y,{minFilter:u,magFilter:u,depthBuffer:!1,stencilBuffer:!1}),yr=new g({vertexShader:r,fragmentShader:ln,uniforms:{uCity:{value:_r.texture},uOffice:{value:vr.texture},uT:{value:0},uFocus:{value:new A(.5,.5)}}}),Q=`city`,br=0,xr=4.6;window.__scene=Q;var Sr=null;function Cr(e){Q===`city`&&(yr.uniforms.uFocus.value.copy(e||new A(.5,.5)),Q=`diving-in`,window.__scene=Q)}function wr(){Q!==`office`&&Q!==`diving-in`||(Q=`diving-out`,window.__scene=Q)}var Tr=!1,Er=(()=>{if(typeof document>`u`)return{showLap(){},toast(){},flash(){}};let e=document.createElement(`style`);e.textContent=`
  .lap { position: fixed; inset: 0; z-index: 5; display:flex; align-items:center; justify-content:center;
    background: rgba(6,8,12,0.55); opacity:0; pointer-events:none; transition: opacity .25s; }
  .lap.on { opacity:1; pointer-events:auto; }
  .lap-win { width:min(560px,90vw); border-radius:14px; overflow:hidden; background:#0e1016;
    border:1px solid #2a2f3a; box-shadow:0 20px 60px rgba(0,0,0,.6); font:13px/1.5 ui-monospace,monospace; color:#cdd3dc; }
  .lap-bar { display:flex; align-items:center; justify-content:space-between; padding:10px 14px; background:#161a22; border-bottom:1px solid #2a2f3a; }
  .lap-bar b { letter-spacing:.08em; color:#7fd0ff; }
  .lap-x { cursor:pointer; border:0; background:#222833; color:#cdd3dc; min-width:34px;height:34px;border-radius:8px; font:inherit; }
  .lap-body { padding:18px; }
  .lap-body .row { display:flex; gap:8px; margin-top:12px; flex-wrap:wrap; }
  .lap-body button.stub { padding:9px 13px; border-radius:8px; border:1px solid #2a2f3a; background:#1a1f29; color:#cdd3dc; cursor:pointer; }
  .lap-note { opacity:.55; margin-top:16px; font-size:11px; }
  .otoast { position:fixed; left:50%; top:18px; transform:translateX(-50%); z-index:5; padding:9px 18px; border-radius:999px;
    background:rgba(16,18,24,.85); color:#e8edf4; font:600 13px/1 ui-monospace,monospace; letter-spacing:.04em;
    opacity:0; transition:opacity .3s; pointer-events:none; }
  .otoast.on { opacity:1; }
  .oflash { position:fixed; inset:0; z-index:4; background:#dfe8ff; opacity:0; pointer-events:none; }
  `,document.head.appendChild(e);let t=document.createElement(`div`);t.className=`lap`,t.innerHTML=`<div class="lap-win"><div class="lap-bar"><b>PORTFOLIO OS — John's Game</b>
    <button class="lap-x" title="Close (Esc)">✕</button></div>
    <div class="lap-body">Welcome back, Exec. <span style="opacity:.55">(placeholder — the real game UI mounts here)</span>
    <div class="row"><button class="stub">▶ Resume</button><button class="stub">📈 Portfolio</button>
    <button class="stub">🏢 Properties</button><button class="stub">⚙ Settings</button></div>
    <div class="lap-note">This panel is an HTML overlay over the WebGL canvas — the seam where John drops his game in.</div>
    </div></div>`;let n=document.createElement(`div`);n.className=`otoast`;let r=document.createElement(`div`);r.className=`oflash`,document.body.append(t,n,r),t.querySelector(`.lap-x`).addEventListener(`click`,()=>Or()),t.addEventListener(`click`,e=>{e.target===t&&Or()});let i=0;return{showLap(e){t.classList.toggle(`on`,e)},toast(e){n.textContent=e,n.classList.add(`on`),clearTimeout(i),i=setTimeout(()=>n.classList.remove(`on`),1400)},flash(){r.style.transition=`none`,r.style.opacity=`0.85`,requestAnimationFrame(()=>{r.style.transition=`opacity .55s`,r.style.opacity=`0`})}}})();function Dr(){Tr=!0,Er.showLap(!0)}function Or(){Tr=!1,Er.showLap(!1)}function kr(){Pn=(Pn+1)%Ze.length,Er.flash(),Un(),Er.toast(`✈  `+Y.state.profile.name),window.__profile=Y.state.profile.key}function Ar(e){let t=Z.setFitout(e);return Er.toast(t===`basement`?`🏚  Basement office`:`🏙  Corner office`),window.__tier=t,t}function jr(){return Ar(Z.tier===`corner`?`basement`:`corner`)}window.__tier=Z.tier;function Mr(e,t){An.visible=!1,W.setRenderTarget(Tn),W.render(K,e),An.visible=!0,W.setRenderTarget(t),W.render(K,e)}function Nr(e,t){if(An.visible=!1,W.setRenderTarget(Tn),W.render(K,q.camera),An.visible=!0,$===1||Lr&&$!==7&&$!==8)W.setRenderTarget(t),W.render(K,q.camera);else if(W.setRenderTarget(Gn),W.render(K,q.camera),$===2)Qn.uniforms.uGrain.value=1,Qn.uniforms.uChroma.value=1,pr(Qn,t);else{Qn.uniforms.uGrain.value=0,Qn.uniforms.uChroma.value=0,pr(Qn,Kn);let n=q.camera;dr.uniforms.uNear.value=n.near,dr.uniforms.uFar.value=n.far,dr.uniforms.uIsPerspective.value=+!!n.isPerspectiveCamera,e.kind===`pixel`?(pr(ur(),t),window.__style=`pixel`):e.kind===`toon`?(pr(dr,t),window.__style=`toon`):(pr(dr,qn),pr(ur(),Jn),fr.uniforms.uBlend.value=e.blend,pr(fr,t),window.__style=`blend`)}}var Pr=.45,Fr=.65,$=3,Ir=!1,Lr=!1;window.__mode=$,window.__camMode=q.mode,window.__vector=Lr,window.addEventListener(`keydown`,e=>{(e.key===`1`||e.key===`2`||e.key===`3`)&&($=Number(e.key),window.__mode=$),(e.key===`7`||e.key===`8`)&&($=Number(e.key),window.__mode=$),e.key===`4`&&(q.setMode(R.PERSPECTIVE),window.__camMode=q.mode),e.key===`5`&&(q.setMode(R.ISOMETRIC),window.__camMode=q.mode),e.key===`6`&&(q.setMode(R.DIMETRIC),window.__camMode=q.mode),e.key===`ArrowLeft`&&(q.pan(-1,0),e.preventDefault()),e.key===`ArrowRight`&&(q.pan(1,0),e.preventDefault()),e.key===`ArrowUp`&&(q.pan(0,1),e.preventDefault()),e.key===`ArrowDown`&&(q.pan(0,-1),e.preventDefault()),e.key===`0`&&(Lr=!Lr,z.value=+!!Lr,window.__vector=Lr),(e.key===`w`||e.key===`W`)&&(X.cycle(),window.__weather=X.kind),(e.key===`k`||e.key===`K`)&&(zn=(zn+1)%Rn.length,window.__season=Rn[zn]),(e.key===`g`||e.key===`G`)&&(Nn=Math.random()*1e9|0,Un()),(e.key===`c`||e.key===`C`)&&(Pn=(Pn+1)%Ze.length,Un()),(e.key===`h`||e.key===`H`)&&(Hn=!Hn,window.__shadows=Hn),(e.key===`p`||e.key===`P`)&&(Ir=!Ir),(e.key===`b`||e.key===`B`)&&(cr=sr[(sr.indexOf(cr)+1)%sr.length],window.__era=cr,lr()),(e.key===`t`||e.key===`T`)&&J.cyclePreset(),e.key===`[`&&J.nudge(-.5),e.key===`]`&&J.nudge(.5),e.key===`9`&&(J.toggleAuto(),window.__auto=J.auto),e.key===`Escape`&&(Tr?Or():wr()),(e.key===`o`||e.key===`O`)&&(Q===`city`?Cr():wr()),(e.key===`f`||e.key===`F`)&&Q!==`city`&&jr(),(e.key===`m`||e.key===`M`)&&Sr&&Sr.toggle()});var Rr=window.matchMedia(`(prefers-reduced-motion: reduce)`);J.setReducedMotion(Rr.matches),Rr.addEventListener(`change`,e=>J.setReducedMotion(e.matches));var zr=new T,Br=new A,Vr=!1,Hr=!1,Ur=0,Wr=0,Gr=.005,Kr=(e,t)=>{Br.x=e/window.innerWidth*2-1,Br.y=-(t/window.innerHeight)*2+1},qr=0,Jr=0,Yr=0;function Xr(){return zr.setFromCamera(Br,q.camera),zr.intersectObject(Y.group,!0)[0]?new A(Br.x*.5+.5,Br.y*.5+.5):null}function Zr(){zr.setFromCamera(Br,Z.camera);let e=zr.intersectObjects(Z.interactables,!0)[0];if(!e)return null;let t=e.object;for(;t&&!t.userData.role;)t=t.parent;return t?t.userData.role:null}W.domElement.addEventListener(`contextmenu`,e=>e.preventDefault()),W.domElement.addEventListener(`mousedown`,e=>{e.button===0&&(Vr=Q===`city`,Kr(e.clientX,e.clientY),qr=e.clientX,Jr=e.clientY,Yr=performance.now()),e.button===2&&(Hr=!0,Ur=e.clientX,Wr=e.clientY)}),window.addEventListener(`mousemove`,e=>{Vr&&Kr(e.clientX,e.clientY),Hr?(q.orbit(-(e.clientX-Ur)*Gr,-(e.clientY-Wr)*Gr),Ur=e.clientX,Wr=e.clientY):Q===`city`&&!Vr?(Kr(e.clientX,e.clientY),W.domElement.style.cursor=Xr()?`pointer`:`default`):Q===`office`&&(Kr(e.clientX,e.clientY),W.domElement.style.cursor=Zr()?`pointer`:`default`)}),window.addEventListener(`mouseup`,e=>{let t=Math.hypot(e.clientX-qr,e.clientY-Jr)<6&&performance.now()-Yr<350;if(Vr&&Q===`city`&&t){Kr(e.clientX,e.clientY);let t=Xr();t&&Cr(t)}else if(Q===`office`&&t&&!Tr){Kr(e.clientX,e.clientY);let t=Zr();t===`laptop`?Dr():t===`phone`?kr():t===`cat`?Z.petCat():t===`tank`&&Z.feedFish()}Vr=!1,Hr=!1}),W.domElement.addEventListener(`wheel`,e=>{e.preventDefault(),q.zoomBy(Math.exp(e.deltaY*.0015))},{passive:!1});var Qr=0,$r=(e,t)=>[(e.clientX+t.clientX)/2,(e.clientY+t.clientY)/2],ei=(e,t)=>Math.hypot(e.clientX-t.clientX,e.clientY-t.clientY),ti=!1;W.domElement.addEventListener(`touchstart`,e=>{e.touches.length===1&&(Vr=Q===`city`,Kr(e.touches[0].clientX,e.touches[0].clientY),qr=e.touches[0].clientX,Jr=e.touches[0].clientY,Yr=performance.now(),ti=!1),e.touches.length===2&&(Vr=!1,Hr=!0,[Ur,Wr]=$r(e.touches[0],e.touches[1]),Qr=ei(e.touches[0],e.touches[1]))},{passive:!1}),W.domElement.addEventListener(`touchmove`,e=>{if(e.preventDefault(),e.touches.length===1)Kr(e.touches[0].clientX,e.touches[0].clientY),Math.hypot(e.touches[0].clientX-qr,e.touches[0].clientY-Jr)>8&&(ti=!0);else if(e.touches.length===2){let[t,n]=$r(e.touches[0],e.touches[1]);q.orbit(-(t-Ur)*Gr,-(n-Wr)*Gr),Ur=t,Wr=n;let r=ei(e.touches[0],e.touches[1]);Qr>0&&q.zoomBy(Qr/r),Qr=r}},{passive:!1}),window.addEventListener(`touchend`,e=>{if(!ti&&performance.now()-Yr<350&&(!e.touches||e.touches.length===0)){if(Q===`city`){let e=Xr();e&&Cr(e)}else if(Q===`office`&&!Tr){let e=Zr();e===`laptop`?Dr():e===`phone`?kr():e===`cat`?Z.petCat():e===`tank`&&Z.feedFish()}}Vr=!1,Hr=!1,Qr=0,e.touches&&e.touches.length===1&&(Vr=!0)});var ni=new a;ni.connect(document);var ri=0,ii=performance.now();function ai(){if($===1||$===2)return{kind:`none`};if($===7)return{kind:`pixel`};if($===8)return{kind:`toon`};let e=q.styleT;return window.__styleT=e,e>=Fr?{kind:`pixel`}:e<=Pr?{kind:`toon`}:{kind:`blend`,blend:b.smoothstep(e,Pr,Fr)}}var oi=fn?null:document.querySelector(`.hint`);if(fn){let e=document.querySelector(`.hint`);e&&(e.style.display=`none`)}var si=oi?oi.textContent:``,ci=``,li=``;function ui(e){!oi||e===ci||(ci=e,oi.textContent=`${si} · ${li} · ${e}`)}function di(){li=`seed ${Y.state.seed} · ${Y.state.profile.name}`,window.__profile=Y.state.profile.key,ci=``}di();function fi(){ni.update();let e=Math.min(ni.getDelta(),.1);q.update(e),On.material.uniforms.uTime.value=ni.getElapsed(),Qn.uniforms.uTime.value=ni.getElapsed(),J.update(e),Y.key.position.copy(J.sunDir).multiplyScalar(Vn),Y.key.color.copy(J.sunColor),Y.key.intensity=J.sunIntensity,Y.fill.color.copy(J.hemiSky),Y.fill.groundColor.copy(J.hemiGround),jn.value=J.windowGlow;let t=X.overcast;Y.key.intensity*=1-.5*t,Y.key.color.lerp(hn,.45*t),Y.fill.intensity=1+.7*t;let n=b.smoothstep(J.sunDir.y,.06,.34),r=b.lerp(.28,1,1-J.windowGlow),i=Hn?n*r:0;Y.key.shadow.intensity=.72*i,Ie.value=.52*i;let a=1-J.windowGlow;B.setRGB(b.lerp(.46,1,a),b.lerp(.52,1,a),b.lerp(.74,1,a)),Qn.uniforms.uExposure.value=J.exposure,dr.uniforms.uToonGain.value=J.toonGain,W.setClearColor(J.horizon,1),ir(J.t),ui(J.clock),window.__t=J.t,In.update(e,ni.getElapsed(),J),Y.update(ni.getElapsed()),X.update(e,ni.getElapsed()),wn.uniforms.uRainCount.value=X.rainDropCount;let o=X.fog*(1-a);K.fog.density=X.fog*gn,vn.copy(J.horizon).lerp(_n,.85*o),K.fog.color.copy(vn),W.setClearColor(vn,1),Be.value=X.fog,On.material.uniforms.uFogAmt.value=.7*X.fog,Le.value=X.snow,Re.value=X.cloud*.55,ze.x+=e*.018,ze.y+=e*.009,Ve.value+=(Rn[zn]-Ve.value)*Math.min(1,e*1.5),Ln.update(e,ni.getElapsed(),J,X);let s=ai(),c=s.kind===`toon`?1:s.kind===`blend`?1-s.blend:0;kn.uniforms.uChromaScale.value=b.lerp(1,.5,c),ri++;let l=performance.now();l-ii>=1e3&&(window.__fps=ri,ri=0,ii=l);let u=0;if(Vr&&Q===`city`){zr.setFromCamera(Br,q.camera);let e=zr.intersectObject(An)[0];e&&e.uv&&(wn.uniforms.uMouse.value.copy(e.uv),u=.06)}wn.uniforms.uMouseStrength.value=u;let[d,f,p]=xn;wn.uniforms.uPrev.value=d.texture,wn.uniforms.uCurr.value=f.texture,W.setRenderTarget(p),W.render(Sn,Cn),xn=[f,p,d],kn.uniforms.uHeight.value=xn[1].texture,br+=(+(Q===`office`||Q===`diving-in`)-br)*Math.min(1,e*xr),Q===`diving-in`&&br>.992&&(br=1,Q=`office`,window.__scene=Q),Q===`diving-out`&&br<.008&&(br=0,Q=`city`,window.__scene=Q),Q===`city`?Nr(s,null):(Z.update(e,ni.getElapsed(),J),Z.tier===`basement`?(W.setRenderTarget(gr),W.render(Z.vignette.scene,Z.vignette.camera)):Mr(mr,hr),Q===`office`?(W.setRenderTarget(null),W.render(Z.scene,Z.camera)):(Nr(s,_r),W.setRenderTarget(vr),W.render(Z.scene,Z.camera),yr.uniforms.uT.value=br,pr(yr,null))),requestAnimationFrame(fi)}var pi={at:(e,t)=>{Kr(e,t),Vr=!0},stop:()=>{Vr=!1}};function mi(){let e=window.__style||($===1?`raw`:$===2?`filmic`:`auto`);return{lesson:23,clock:J.clock,style:(Lr?`vec-`:``)+e,profile:Y.state.profile.key,weather:X.kind,scene:Q}}Ft({renderer:W,rig:q,sunRig:J,poke:pi,getState:mi,office:{pet:()=>Z.petCat(),feed:()=>Z.feedFish(),laptop:()=>Dr(),closeLaptop:()=>Or(),travel:()=>kr(),fitout:()=>jr()}});var hi=e=>window.dispatchEvent(new KeyboardEvent(`keydown`,{key:e})),gi={cam:e=>hi({iso:`5`,dimetric:`6`,persp:`4`}[e]),style:e=>{e===`vector`?(Lr||hi(`0`),($===7||$===8)&&hi(`2`)):e===`pixel`?hi(`7`):e===`toon`&&hi(`8`)},city:()=>hi(`C`),shuffle:()=>hi(`G`),weather:()=>hi(`W`),season:()=>hi(`K`),office:()=>hi(`o`),time:e=>J.goTo(e),auto:()=>hi(`9`)};Sr=Rt({controls:gi,state:()=>({cam:{4:`persp`,5:`iso`,6:`dimetric`}[q.mode],style:$===7?`pixel`:$===8?`toon`:`vector`,auto:J.auto,t:J.t,weather:X.kind,season:zn,office:Q!==`city`}),show:dn.get(`ui`)!==`0`&&!dn.has(`capture`),coarse:window.matchMedia&&window.matchMedia(`(pointer: coarse)`).matches});var _i=dn.get(`cam`);_i&&[`iso`,`dimetric`,`persp`].includes(_i)&&gi.cam(_i);var vi=dn.get(`style`);[`vector`,`pixel`,`toon`].includes(vi)&&gi.style(vi);var yi=dn.get(`t`);yi!==null&&yi!==``&&!Number.isNaN(parseFloat(yi))&&J.goTo(parseFloat(yi));var bi=dn.get(`time`);bi&&J.goTo({dawn:.25,noon:.5,dusk:.75,night:0}[bi]??.5);var xi=dn.get(`weather`);[`clear`,`rain`,`snow`,`fog`].includes(xi)&&(X.setKind(xi),window.__weather=X.kind);var Si=dn.get(`office`);(Si===`1`||Si===`corner`||Si===`basement`)&&(Si===`basement`&&Ar(`basement`),Q=`office`,br=1,window.__scene=Q),fi(),window.addEventListener(`resize`,()=>{q.setViewport(window.innerWidth,window.innerHeight),W.setSize(window.innerWidth,window.innerHeight);let e=W.getDrawingBufferSize(new A);Tn.setSize(e.x,e.y),Gn.setSize(e.x,e.y),Kn.setSize(e.x,e.y),qn.setSize(e.x,e.y),Jn.setSize(e.x,e.y),_r.setSize(e.x,e.y),vr.setSize(e.x,e.y),Z.camera.aspect=window.innerWidth/window.innerHeight,Z.camera.updateProjectionMatrix(),kn.uniforms.uResolution.value.set(e.x,e.y),Qn.uniforms.uResolution.value.set(e.x,e.y),rr.uniforms.uResolution.value.set(e.x,e.y),ar.uniforms.uResolution.value.set(e.x,e.y),dr.uniforms.uResolution.value.set(e.x,e.y)});