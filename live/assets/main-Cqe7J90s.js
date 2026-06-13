import{i as e,o as t,r as n,s as r,t as i}from"./pixelkit-BUU5BhST.js";import{$ as a,A as o,B as s,C as c,D as l,E as u,F as d,G as f,H as p,I as m,J as h,K as g,L as _,M as v,N as y,O as b,P as x,Q as S,R as C,S as w,T,U as E,V as D,W as O,X as ee,Z as k,a as A,b as te,c as ne,d as re,f as ie,g as ae,h as oe,i as j,j as se,k as M,l as ce,m as le,n as ue,o as de,q as fe,r as pe,s as me,t as he,u as N,v as ge,w as P,x as _e,y as F,z as ve}from"./three-D31t4A6b.js";var ye=Math.atan(1/Math.SQRT2),be=Math.atan(.5),xe=Math.PI/4,I={PERSPECTIVE:4,ISOMETRIC:5,DIMETRIC:6},Se=.12,Ce=1.45,we=4,Te=40,Ee=1.5,De=16,Oe=6,ke=22,Ae=3.5,je=11,Me=(e,t,n)=>e+(t-e)*(1-Math.exp(-8*n)),Ne=(e,t)=>e+Math.PI*2*Math.round((t-e)/(Math.PI*2));function Pe({aspect:e,fov:t=48,near:n=.1,far:r=100,target:i=new S(0,.8,0),azimuth:a=xe,elevation:o=.52,distance:s=12,zoom:c=5.5}={}){let l=new d(t,e,n,r),f=new y(-1,1,1,-1,n,r),p=I.PERSPECTIVE,m=e,h={azimuth:a,elevation:o,distance:s,zoom:c,target:i.clone()},g={azimuth:a,elevation:o,distance:s,zoom:c,target:i.clone()},_=!1,v=()=>p===I.PERSPECTIVE?l:f;function b(e){e!==p&&(p=e,p===I.ISOMETRIC||p===I.DIMETRIC?(h.elevation=p===I.ISOMETRIC?ye:be,h.azimuth=Ne(xe,g.azimuth),_=!0):_=!1)}function x(e,t){h.azimuth+=e,_||(h.elevation=u.clamp(h.elevation+t,Se,Ce))}function C(e){p===I.PERSPECTIVE?h.distance=u.clamp(h.distance*e,we,Te):h.zoom=u.clamp(h.zoom*e,Ee,De)}function w(e,t){let n=h.azimuth,r=p===I.PERSPECTIVE?h.distance*.04:h.zoom*.08,i=new S(Math.cos(n),0,-Math.sin(n)),a=new S(-Math.sin(n),0,-Math.cos(n));h.target.addScaledVector(i,e*r),h.target.addScaledVector(a,t*r)}function T(e,t){m=e/t,l.aspect=m,l.updateProjectionMatrix()}function E(e){g.azimuth=Me(g.azimuth,h.azimuth,e),g.elevation=Me(g.elevation,h.elevation,e),g.distance=Me(g.distance,h.distance,e),g.zoom=Me(g.zoom,h.zoom,e),g.target.x=Me(g.target.x,h.target.x,e),g.target.y=Me(g.target.y,h.target.y,e),g.target.z=Me(g.target.z,h.target.z,e);let t=Math.cos(g.elevation),n=Math.sin(g.elevation),r=Math.cos(g.azimuth),i=Math.sin(g.azimuth),a=v();if(a.position.set(g.target.x+g.distance*t*i,g.target.y+g.distance*n,g.target.z+g.distance*t*r),a.lookAt(g.target),a.isOrthographicCamera){let e=g.zoom,t=e*m;a.left=-t,a.right=t,a.top=e,a.bottom=-e,a.updateProjectionMatrix()}}return{get camera(){return v()},get mode(){return p},get styleT(){return p===I.PERSPECTIVE?u.clamp((g.distance-Oe)/(ke-Oe),0,1):u.clamp((g.zoom-Ae)/(je-Ae),0,1)},setMode:b,orbit:x,zoomBy:C,pan:w,setViewport:T,update:E}}var Fe={value:0},Ie=new N(`#ffffff`),Le={value:0},L={value:0},R={value:0},Re=new k,ze={value:0},Be={value:0},Ve=`
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
`;function He(e){e.uniforms.uVector=Fe,e.uniforms.uVecTint={value:Ie},e.uniforms.uVecShadow=Le,e.uniforms.uSnow=L,e.uniforms.uCloud=R,e.uniforms.uCloudOff={value:Re},e.uniforms.uFogCharm=ze}function Ue(e){return e.replace(`#include <fog_fragment>`,`
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
  `)}function We(e){return e.replace(`#include <common>`,`#include <common>
varying vec3 vVecN;
varying vec3 vVecP;
varying vec2 vWorldXZ;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
  vVecN = normal;
  vVecP = position;
  vWorldXZ = (modelMatrix * vec4(position, 1.0)).xz;`)}function Ge(e){return e.replace(`#include <shadowmap_pars_fragment>`,`#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>`)}var Ke=`col *= mix(1.0, getShadowMask(), uVecShadow);`;function qe(e,{color:t,id:n,windowGlow:r,winColors:i=[`#ffb852`,`#8cd9ff`],litFrac:a=.55}={}){let o=[0,1,2].map(e=>new N(i[e]??i[i.length-1]));return e.customProgramCacheKey=()=>`lgr-vec-tower`,e.onBeforeCompile=e=>{He(e),e.uniforms.uWindowGlow=r,e.uniforms.uWinId={value:n},e.uniforms.uVecColor={value:new N(t)},e.uniforms.uWinA={value:o[0]},e.uniforms.uWinB={value:o[1]},e.uniforms.uWinC={value:o[2]},e.uniforms.uWinLit={value:a},e.vertexShader=We(e.vertexShader),e.fragmentShader=Ue(Ge(e.fragmentShader.replace(`#include <common>`,`#include <common>
        uniform float uWindowGlow;
        uniform float uWinId;
        uniform vec3  uVecColor;
        uniform vec3  uWinA; uniform vec3 uWinB; uniform vec3 uWinC;
        uniform float uWinLit;
        ${Ve}
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
          ${Ke}                                  // the sun's shadow darkens the body
          vec3 wcol; vec2 w = winTerms(wcol);
          vec3 glass = vec3(0.17, 0.23, 0.34);          // dark glass-blue panes (day)
          col = mix(col, glass, w.x * 0.85);
          col += w.x * w.y * wcol * uWindowGlow * 1.5;  // …windows EMIT (unshadowed) at night
          gl_FragColor = vec4(col, diffuseColor.a);
        }`)))},e}function z(e,{color:t=null,glow:n=null,glowDay:r=0,glowNight:i=1,windowGlow:a=null,season:o=!1}={}){let s=t===null,c=n!==null&&a!==null;return e.customProgramCacheKey=()=>`lgr-vec|`+(s?`d`:`c`)+(c?`g`:``)+(o?`s`:``),e.onBeforeCompile=e=>{He(e),s||(e.uniforms.uVecColor={value:new N(t)}),c&&(e.uniforms.uGlow={value:new N(n)},e.uniforms.uGlowDay={value:r},e.uniforms.uGlowNight={value:i},e.uniforms.uWindowGlow=a),o&&(e.uniforms.uSeason=Be),e.vertexShader=We(e.vertexShader);let l=s?`diffuseColor.rgb`:`uVecColor`,u=o?`seasonShift(${l})`:l,d=(s?``:`uniform vec3 uVecColor;
`)+(c?`uniform vec3 uGlow; uniform float uGlowDay; uniform float uGlowNight; uniform float uWindowGlow;
`:``)+(o?`uniform float uSeason;
vec3 seasonShift(vec3 c){
  c = mix(c, vec3(0.86, 0.46, 0.13), smoothstep(0.40, 0.70, uSeason));   // → autumn orange
  c = mix(c, vec3(0.46, 0.33, 0.20), smoothstep(0.75, 1.00, uSeason));   // → bare brown
  return c;
}
`:``),f=c?`uGlow * mix(uGlowDay, uGlowNight, uWindowGlow)`:`vec3(0.0)`,p=Ue(Ge(e.fragmentShader.replace(`#include <common>`,`#include <common>
`+d+Ve).replace(`#include <opaque_fragment>`,`#include <opaque_fragment>
        if (uVector > 0.5) {
          vec3 col = vecShade(${u});
          ${Ke}                            // the sun's shadow darkens the flat tier…
          gl_FragColor = vec4(col + ${f}, diffuseColor.a);  // …but the night glow stays lit
        }`)));c&&(p=p.replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>\n  totalEmissiveRadiance += ${f};`)),e.fragmentShader=p},e}function Je(e){let t=e>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Ye(e){let t=Je(e);return{next:t,range:(e,n)=>e+(n-e)*t(),int:(e,n)=>e+Math.floor(t()*(n-e+1)),pick:e=>e[Math.floor(t()*e.length)],chance:e=>t()<e}}var Xe=[{key:`manhattan`,name:`Manhattan`,towers:[`#EDE3C8`,`#D9B98A`,`#B5562F`,`#A8C8E8`,`#2E3F5C`],ground:`#7CC455`,street:`#9AA0A6`,sidewalk:`#C8CCD0`,park:`#5DB347`,water:`#29A8D8`,shopfronts:[`#C04A3A`,`#3A7AC0`,`#C09A2A`],glass:`#7FA8CC`,winColors:[`#ffd27a`,`#9ad6ff`],hMax:4.6,sigma:.36,roofRate:.35,pSplit:.6,nightLit:.55,roofTint:null,landmarks:[`empireState`,`chrysler`,`liberty`]},{key:`paris`,name:`Paris`,towers:[`#E8DCC0`,`#F2EAD6`,`#E0D2B4`],ground:`#8CC46A`,street:`#A8A29A`,sidewalk:`#D4CEC2`,park:`#6DB35A`,water:`#3FA8C8`,shopfronts:[`#C04A3A`,`#3A6B5A`,`#7A5AC0`],glass:`#5A6B7A`,winColors:[`#ffdca0`,`#ffcaa0`],hMax:1.5,sigma:.9,roofRate:.15,pSplit:.75,nightLit:.45,roofTint:`#6A7886`,landmarks:[`eiffel`,`arcDeTriomphe`,`sacreCoeur`]},{key:`neoTokyo`,name:`Neo-Tokyo`,towers:[`#2A3038`,`#3A4250`,`#252B36`,`#4A4456`],ground:`#3A4A42`,street:`#5A6068`,sidewalk:`#7A8088`,park:`#2E5E46`,water:`#0E6878`,shopfronts:[`#E8483A`,`#5AE8E0`,`#E85AA0`],glass:`#5AE8E0`,winColors:[`#5AE8E0`,`#E85AA0`,`#E8E06A`],hMax:5.2,sigma:.42,roofRate:.6,pSplit:.6,nightLit:.7,roofTint:null,landmarks:[`tokyoTower`,`pagoda`,`neonBillboard`]}],Ze=Xe.map(e=>e.key),Qe=.3,$e=1.9,et=2.45,tt=.12,nt=.6;function rt(e){(Array.isArray(e)?e:[e]).forEach(e=>e&&e.dispose&&e.dispose())}function it({seed:e=1,profileIndex:t=0,landmarkFactory:n=null,windowGlow:r}){let i=new F,a=new F,s=new F;a.raycast=()=>{},s.raycast=()=>{},i.add(a,s);let c=new oe(16773594,3);c.position.set(.45,.6,-.65).multiplyScalar(10);let l=new _e(7313331,2762272,1);i.add(c,l);let u=0,d=[],p={seed:e,profileIndex:t,profile:Xe[t],extent:0,meshCount:0};function m(e,t,n,r){let i=new b(new j(e,.04,t),z(new o({color:r,roughness:.95,flatShading:!0}),{color:r}));return i.position.y=n,i.userData.ground=!0,i}function h(e,t){for(let e of a.children)e.geometry&&e.geometry.dispose(),rt(e.material);a.clear();for(let e of s.children)e.traverse(e=>{e.isMesh&&rt(e.material)});s.clear(),d.length=0,u=0;let r=Ye(e),i=Xe[t],c=5/2*et,l=7.675;p={seed:e,profileIndex:t,profile:i,extent:l,meshCount:0};let f=l*2,h=new b(new j(f,2,f),z(new o({color:i.ground,roughness:.9,flatShading:!0}),{color:i.ground}));h.position.y=Qe-1,h.userData.ground=!0,a.add(h),a.add(m(f-nt,f-nt,.32,i.street));let x=[];for(let e=0;e<6;e++)for(let t=0;t<6;t++)x.push([e,t]);let S=new Set,C=Math.max(1,Math.round(x.length*.08));for(;S.size<C;)S.add(r.int(0,x.length-1));let w=r.range(-2.45*.6,et*.6),T=r.range(-2.45*.6,et*.6),E=Math.hypot(c,c),D=[];if(x.forEach(([e,t],n)=>{let o=(e-5/2)*et,s=(t-5/2)*et;if(a.add(m($e,$e,.32999999999999996,i.sidewalk).translateX(o).translateZ(s)),S.has(n)){a.add(m($e-tt*2,$e-tt*2,.35,i.park).translateX(o).translateZ(s));let e=r.int(3,5);for(let t=0;t<e;t++)y(o+r.range(-.6,.6),s+r.range(-.6,.6),i,r);return}let c=$e-tt*2,l=r.chance(i.pSplit)?2:1,u=r.chance(i.pSplit)?2:1,d=c/l,f=c/u;for(let e=0;e<l;e++)for(let t=0;t<u;t++){let n=o-c/2+d*(e+.5),a=s-c/2+f*(t+.5),l=Math.max(.6,d-.1),u=Math.max(.6,f-.1),p=Math.hypot(n-w,a-T)/E,m=Math.exp(-(p*p)/(2*i.sigma*i.sigma)),h=Math.max(.5,.5+(i.hMax-.5)*m*r.range(.75,1.25));h>i.hMax*.5&&Math.min(l,u)>=.7&&D.push({lx:n,lz:a,fw:l,fd:u,h,r:p}),g(n,a,l,u,h,i,r)}}),n&&n.ready){D.sort((e,t)=>e.r-t.r);let e=[],t=i.landmarks;for(let r=0;r<t.length&&D.length;r++){let a=null;for(let t of D)if(e.every(e=>Math.hypot(e.lx-t.lx,e.lz-t.lz)>et*.9)){a=t;break}a||=D[0],e.push(a),_(a.lx,a.lz);let o=i.hMax*n.heightFactor(t[r]),c=n.make(t[r],{x:a.lx,z:a.lz,w:a.fw,d:a.fd,h:o,plinthTop:Qe});if(c){s.add(c);let e=new pe().setFromObject(c);v(e.min.x-.15,e.max.x+.15,e.min.z-.15,e.max.z+.15)}}}a.traverse(e=>{e.isMesh&&(e.userData.ground?(e.castShadow=!1,e.receiveShadow=!0):e.material&&e.material.isMeshBasicMaterial?(e.castShadow=!1,e.receiveShadow=!1):(e.castShadow=!0,e.receiveShadow=!0))}),s.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),p.meshCount=a.children.length+s.children.length;let O=0;for(let e of a.children){let t=e.position;O=(Math.imul(O,16777619)^(Math.round(t.x*100)*2654435761^Math.round(t.y*100)*40503^Math.round(t.z*100)*2246822519))>>>0}p.sig=O,window.__city={seed:e,profile:i.key,meshes:p.meshCount,sig:O}}function g(e,t,n,i,s,c,l){let p=qe(new o({flatShading:!0,roughness:.7,metalness:.05}),{color:l.pick(c.towers),id:++u,windowGlow:r,winColors:c.winColors,litFrac:c.nightLit}),m=new b(new j(n,s,i),p);if(m.position.set(e,Qe+s/2,t),m.userData.lot=[e,t],a.add(m),c.roofTint){let r=z(new o({color:c.roofTint,roughness:.85,flatShading:!0}),{color:c.roofTint}),l=new b(new j(n*1.02,.08,i*1.02),r);l.position.set(e,Qe+s+.04,t),l.userData.lot=[e,t],a.add(l)}if(s<1.4){let r=l.pick(c.shopfronts),s=new b(new j(n*1.04,.18,i*1.04),z(new o({color:r,roughness:.8,flatShading:!0}),{color:r}));s.position.set(e,.39,t),s.userData.lot=[e,t],a.add(s)}if(s>c.hMax*.45&&l.chance(c.roofRate)){let r=l.chance(.5)?new b(new j(n*.4,.18,i*.4),z(new o({color:`#9a9a9a`,flatShading:!0}),{color:`#9a9a9a`})):new b(new ie(n*.18,n*.18,.22,10),z(new o({color:`#b9bec4`,flatShading:!0}),{color:`#b9bec4`}));if(r.position.set(e+l.range(-.1,.1),Qe+s+.11,t+l.range(-.1,.1)),r.userData.lot=[e,t],a.add(r),l.chance(.25)){let n=new b(new f(.05,6,5),new M({color:`#ff3b30`,transparent:!0,opacity:1}));n.position.set(e,Qe+s+.26,t),n.userData.lot=[e,t],n.raycast=()=>{},a.add(n),d.push({mesh:n,phase:l.range(0,6.28)})}}}function _(e,t){for(let n=a.children.length-1;n>=0;n--){let r=a.children[n];r.userData.lot&&Math.abs(r.userData.lot[0]-e)<1e-4&&Math.abs(r.userData.lot[1]-t)<1e-4&&(r.geometry&&r.geometry.dispose(),rt(r.material),a.remove(r))}for(let e=d.length-1;e>=0;e--)d[e].mesh.parent||d.splice(e,1)}function v(e,t,n,r){for(let i=a.children.length-1;i>=0;i--){let o=a.children[i];o.userData.lot&&o.position.x>=e&&o.position.x<=t&&o.position.z>=n&&o.position.z<=r&&(o.geometry&&o.geometry.dispose(),rt(o.material),a.remove(o))}}function y(e,t,n,r){let i=new N(n.park),s=(n,s)=>{let c=i.clone().offsetHSL(0,0,r.range(-.06,.06)).getStyle(),l=new b(new f(n,7,6),z(new o({color:c,flatShading:!0}),{color:c,season:!0}));l.scale.y=.7,l.position.set(e,Qe+s,t),l.userData.lot=null,a.add(l)},c=new b(new j(.05,.18,.05),z(new o({color:`#6b4a2a`,flatShading:!0}),{color:`#6b4a2a`}));c.position.set(e,.39,t),a.add(c),s(.22,.28),s(.16,.46)}function x(e){for(let t of d)t.mesh.material.opacity=.35+.65*(.5+.5*Math.sin(e*3+t.phase))}return h(e,t),{group:i,key:c,fill:l,update:x,generate:h,get state(){return p},get extent(){return p.extent},get waterColor(){return p.profile.water},profiles:Xe}}var at=Math.PI*2,ot=.7,st=90,ct=[{name:`night`,sun:`#4a6f9e`,intensity:.35,hemiSky:`#26344f`,hemiGround:`#0c1018`,horizon:`#1e2942`,sky:`#36486e`,exposure:.95,outline:`#101a30`,window:1,toonGain:2.6},{name:`dawn`,sun:`#ff9e54`,intensity:2.4,hemiSky:`#8a7686`,hemiGround:`#2a1f1a`,horizon:`#b8512c`,sky:`#ffb070`,exposure:1.05,outline:`#241826`,window:.3,toonGain:2},{name:`noon`,sun:`#fff4e0`,intensity:4.6,hemiSky:`#9cb8cc`,hemiGround:`#33302a`,horizon:`#5e7689`,sky:`#aacadd`,exposure:1.18,outline:`#0b0a08`,window:0,toonGain:1.7},{name:`dusk`,sun:`#ff6b35`,intensity:2,hemiSky:`#7a566a`,hemiGround:`#281a18`,horizon:`#b0432a`,sky:`#ff8a5a`,exposure:1.05,outline:`#1f1420`,window:.4,toonGain:2}],lt=e=>e-Math.floor(e),ut=(e,t,n)=>e+(t-e)*n,dt=(e,t,n)=>e+(t-e)*(1-Math.exp(-6*n));function ft({t:e=.5}={}){let t=e,n=e,r=!1,i=!1,a=ct.map(e=>({name:e.name,sun:new N(e.sun),hemiSky:new N(e.hemiSky),hemiGround:new N(e.hemiGround),horizon:new N(e.horizon),sky:new N(e.sky),outline:new N(e.outline),intensity:e.intensity,exposure:e.exposure,window:e.window,toonGain:e.toonGain})),o=new S(0,1,0),s=new N(`#fff4e0`),c=new N(`#6f97b3`),l=new N(`#2a2620`),u=new N(`#3a4a57`),d=new N(`#7da3bd`),f=new N(`#0b0a08`),p=new N(`#000000`),m=3,h=1,g=0,_=1.7,v=new S;function y(e){let t=lt(e)*4,n=Math.floor(t)%4,r=(n+1)%4,i=t-Math.floor(t),y=a[n],b=a[r];s.lerpColors(y.sun,b.sun,i),c.lerpColors(y.hemiSky,b.hemiSky,i),l.lerpColors(y.hemiGround,b.hemiGround,i),u.lerpColors(y.horizon,b.horizon,i),d.lerpColors(y.sky,b.sky,i),f.lerpColors(y.outline,b.outline,i),m=ut(y.intensity,b.intensity,i),h=ut(y.exposure,b.exposure,i),g=ut(y.window,b.window,i),_=ut(y.toonGain,b.toonGain,i),p.setRGB(.045*g,.075*g,.14*g);let x=lt(e)*at-Math.PI/2,S=Math.cos(x),C=Math.sin(x);v.set(S,C*Math.cos(ot),C*Math.sin(ot)),v.y>=0?o.copy(v):o.copy(v).negate()}return y(t),{sunDir:o,sunColor:s,hemiSky:c,hemiGround:l,horizon:u,sky:d,outline:f,toonFloor:p,get sunIntensity(){return m},get exposure(){return h},get windowGlow(){return g},get toonGain(){return _},get t(){return lt(t)},get auto(){return r},get clock(){let e=Math.round(lt(t)*24*60)%1440;return`${String(Math.floor(e/60)).padStart(2,`0`)}:${String(e%60).padStart(2,`0`)}`},cyclePreset(){n=(Math.floor(t*4+1e-4)+1)/4},nudge(e){n+=e/24},goTo(e){n=e},toggleAuto(){r=!r},setReducedMotion(e){i=e},update(e){r&&!i&&(n+=e/st),t=dt(t,n,e),y(t)}}}function pt(e,t){let n=[];for(let r=0;r<16;r++){let i=r/16*Math.PI*2;n.push(new S(Math.cos(i)*e,t,Math.sin(i)*e))}return new me(n,!0,`catmullrom`,.5)}function mt(e,t){let n=new E;return n.moveTo(-e+t,-e),n.lineTo(e-t,-e),n.quadraticCurveTo(e,-e,e,-e+t),n.lineTo(e,e-t),n.quadraticCurveTo(e,e,e-t,e),n.lineTo(-e+t,e),n.quadraticCurveTo(-e,e,-e,e-t),n.lineTo(-e,-e+t),n.quadraticCurveTo(-e,-e,-e+t,-e),n}function ht(e,t,n){let r=mt(e,t).getSpacedPoints(40).map(e=>new S(e.x,n,e.y));return r.pop(),new me(r,!0,`catmullrom`,.5)}function gt(e){let t=(t,n)=>Math.exp(-((e-t)*(e-t))/(2*n*n)),n=Math.max(t(.33,.05),t(.75,.06)),r=u.smoothstep(e,.24,.3)*(1-u.smoothstep(e,.8,.88));return u.clamp(.15+.55*r+.45*n,.12,1)}function _t(e,t){let n=(e/8.5+t*.43)%1;return n<.66?1:n<.72?1-(n-.66)/.06:n<.95?0:(n-.95)/.05}function vt({plinthTop:e=.3,extent:t=4}={}){let n=new F,r=e,i=mt(t-.05,.7);i.holes.push(mt(t-.78,.45));let a=new b(new O(i),z(new o({color:`#1b1d22`,roughness:.95,metalness:0}),{color:`#bcc0c6`}));a.rotation.x=-Math.PI/2,a.position.y=r+.01,a.receiveShadow=!0,n.add(a);let s=[ht(t-.28,.6,r+.02),ht(t-.5,.55,r+.02)],c=[0,0],l=new w(new j(.42,.32,.86),z(new o({flatShading:!0,roughness:.45,metalness:.35})),7);l.castShadow=!0,l.receiveShadow=!1,l.frustumCulled=!1,l.raycast=()=>{};let d={taxi:`#f4c430`,bus:`#c0392b`,civ1:`#d8dde2`,civ2:`#9aa7b4`,civ3:`#6b7785`},f=[];for(let e=0;e<7;e++){let t=e===1,n=e===0;f.push({lane:e%2,phase:e/7,speed:t?.55:.85+e%3*.12,lenZ:t?1.5:1,color:n?d.taxi:t?d.bus:[d.civ1,d.civ2,d.civ3][e%3]})}let p=new N;f.forEach((e,t)=>l.setColorAt(t,p.set(e.color)));let h=new w(new de(.04,.1,3,6),z(new o({flatShading:!0,roughness:.8})),16);h.castShadow=!0,h.receiveShadow=!1,h.frustumCulled=!1,h.raycast=()=>{};let g=pt(t-.72,e),_=[];for(let e=0;e<16;e++)_.push({phase:e/16,speed:.12+e%4*.02,dir:e%2?1:-1});let y=new N;_.forEach((e,t)=>h.setColorAt(t,y.set([`#caa`,`#9ab`,`#bba`,`#ab9`][t%4])));let x=new m(1,.6),C=new M({color:`#fff0c0`,transparent:!0,opacity:1,blending:2,depthWrite:!1}),T=new w(x,C,7);T.frustumCulled=!1,T.raycast=()=>{},n.add(l,h,T);let E=new v,D=new S,ee=new S;function k(t,n,i){let a=i?i.t:.5,o=i?i.windowGlow:0;for(let e=0;e<s.length;e++)c[e]+=t*_t(n,e);let d=Math.max(1,Math.round(gt(a)*7));for(let e=0;e<7;e++){let t=f[e];if(e>=d){E.scale.setScalar(0),E.position.set(0,-50,0),E.updateMatrix(),l.setMatrixAt(e,E.matrix),T.setMatrixAt(e,E.matrix);continue}let n=t.lane===0?1:-1,i=(t.phase+n*t.speed*c[t.lane]*.12+1e3)%1;s[t.lane].getPointAt(i,D),s[t.lane].getTangentAt(i,ee);let a=Math.atan2(ee.x*n,ee.z*n);E.position.set(D.x,D.y+.16,D.z),E.rotation.set(0,a,0),E.scale.set(1,1,t.lenZ),E.updateMatrix(),l.setMatrixAt(e,E.matrix),s[t.lane].getPointAt((i+n*.012+1)%1,D),E.position.set(D.x,r+.04,D.z),E.rotation.set(-Math.PI/2,0,a),E.scale.setScalar(+(o>.05)),E.updateMatrix(),T.setMatrixAt(e,E.matrix)}l.instanceMatrix.needsUpdate=!0,T.instanceMatrix.needsUpdate=!0,C.opacity=u.clamp(o*1.7,0,1);let p=Math.max(2,Math.round(gt(a)*16));for(let t=0;t<16;t++){let r=_[t];if(t>=p){E.scale.setScalar(0),E.position.set(0,-50,0),E.updateMatrix(),h.setMatrixAt(t,E.matrix);continue}let i=(r.phase+r.dir*r.speed*n*.02+1e3)%1;g.getPointAt(i,D),g.getTangentAt(i,ee);let a=Math.sin(n*6+r.phase*30)*.015;E.position.set(D.x,e+.09+a,D.z),E.rotation.set(0,Math.atan2(ee.x*r.dir,ee.z*r.dir),Math.sin(n*6+r.phase*30)*.06),E.scale.setScalar(1),E.updateMatrix(),h.setMatrixAt(t,E.matrix)}h.instanceMatrix.needsUpdate=!0}return{group:n,update:k}}var yt=[`empireState`,`chrysler`,`liberty`,`eiffel`,`arcDeTriomphe`,`sacreCoeur`,`tokyoTower`,`pagoda`,`neonBillboard`],bt={empireState:1.25,chrysler:1.1,liberty:.55,eiffel:3.2,arcDeTriomphe:1.5,sacreCoeur:1.75,tokyoTower:1.35,pagoda:.5,neonBillboard:.9};function xt(e){let t=()=>new o({flatShading:!0,roughness:.7,metalness:.1}),n=(n,r={})=>r.windows?qe(t(),{color:n,id:e.id(),windowGlow:e.windowGlow,winColors:e.winColors,litFrac:e.litFrac}):z(t(),{color:n,glow:r.glow??null,glowDay:r.glowDay??0,glowNight:r.glowNight??1,windowGlow:r.glow?e.windowGlow:null});return{box:(e,t,r,i,a={})=>new b(new j(e,t,r),n(i,a)),cyl:(e,t,r,i,a={})=>new b(new ie(e,t,r,a.seg||12),n(i,a)),cone:(e,t,r,i={})=>new b(new re(e,t,i.seg||8),n(r,i)),sphere:(e,t,r={})=>new b(new f(e,r.seg||12,r.seg2||8),n(t,r)),lathe:(e,t,r={})=>new b(new c(e.map(e=>new k(e[0],e[1])),r.seg||4),n(t,r))}}var B=(e,t,n,r)=>(e.position.set(t,n,r),e),St=[`#7FB0E0`,`#E07FB0`,`#7FE0A0`,`#E0C97F`,`#9FE07F`,`#7FE0E0`,`#FF8C42`,`#E0E07F`,`#C97FE0`,`#E07F7F`,`#7F9FE0`,`#E0483A`],Ct={empireState(e,t){let n=`#E8E0CF`;e.add(B(t.box(.42,.18,.42,n,{windows:!0}),0,.09,0)),e.add(B(t.box(.34,.16,.34,n,{windows:!0}),0,.26,0)),e.add(B(t.box(.26,.14,.26,n,{windows:!0}),0,.41,0)),e.add(B(t.box(.19,.34,.19,n,{windows:!0}),0,.65,0)),e.add(B(t.box(.13,.06,.13,n,{windows:!0}),0,.85,0));let r=St[new Date().getMonth()];e.add(B(t.cyl(.03,.045,.12,n,{seg:10,glow:r,glowNight:1.85}),0,.94,0)),e.add(B(t.cone(.012,.07,n,{seg:8}),0,1.04,0))},chrysler(e,t){let n=`#C9CED4`;e.add(B(t.box(.22,.55,.22,`#9AA7B4`,{windows:!0}),0,.275,0));let r=.55;for(let i=0;i<5;i++){let a=.14-i*.024,o=.07;e.add(B(t.cyl(a*.7,a,o,n,{seg:8,glow:`#dfeaff`,glowNight:.5}),0,r+o/2,0)),r+=o}e.add(B(t.cone(.018,.16,n,{seg:8}),0,r+.08,0))},liberty(e,t){let n=`#B9B4A6`,r=`#4FA890`;e.add(B(t.box(.42,.16,.42,n),0,.08,0)),e.add(B(t.box(.3,.2,.3,n),0,.26,0)),e.add(B(t.cyl(.1,.15,.42,r,{seg:10}),0,.57,0)),e.add(B(t.box(.11,.1,.11,r),0,.83,0));for(let n=0;n<7;n++){let i=(n/6-.5)*Math.PI*1.1;e.add(B(t.cone(.012,.1,r,{seg:5}),Math.sin(i)*.1,.92,Math.cos(i)*.06-.02))}let i=B(t.cyl(.025,.03,.34,r,{seg:8}),.14,.98,0);i.rotation.z=.35,e.add(i),e.add(B(t.box(.06,.06,.06,r,{glow:`#ffd060`,glowDay:.6,glowNight:1.2}),.2,1.16,0)),e.add(B(t.cone(.04,.09,`#ffcf66`,{seg:6,glow:`#ffd060`,glowDay:.7,glowNight:1.3}),.2,1.24,0))},eiffel(e,t){let n=`#6E5C4C`,r=[[.2,0],[.13,.16],[.085,.33],[.055,.5],[.035,.66],[.02,.85],[0,.92]];e.add(t.lathe(r,n,{seg:4}));let i=t.lathe(r,n,{seg:4});i.rotation.y=Math.PI/4,e.add(i),e.add(B(t.box(.26,.025,.26,n),0,.33,0)),e.add(B(t.box(.14,.02,.14,n),0,.66,0)),e.add(B(t.cone(.01,.1,n,{seg:6}),0,.97,0))},arcDeTriomphe(e,t){let n=`#D9D0C1`,r=.58,i=.5,a=.34,s=new E;s.moveTo(-.58/2,0),s.lineTo(r/2,0),s.lineTo(r/2,i),s.lineTo(-.58/2,i),s.lineTo(-.58/2,0);let c=new x,l=.15,u=.22;c.moveTo(-.15,0),c.lineTo(-.15,u),c.absarc(0,u,l,Math.PI,0,!0),c.lineTo(l,0),c.lineTo(-.15,0),s.holes.push(c);let d=new ae(s,{depth:a,bevelEnabled:!1});d.translate(0,0,-.34/2),d.computeVertexNormals(),e.add(new b(d,z(new o({color:n,flatShading:!0}),{color:n}))),e.add(B(t.box(r*1.06,.08,a*1.06,n),0,.54,0))},sacreCoeur(e,t){let n=`#F1EEE6`;e.add(B(t.box(.5,.26,.4,n),0,.13,0));let r=(r,i,a,o)=>{e.add(B(t.cyl(a*.9,a,i,n,{seg:12}),r,o,0));let s=B(t.sphere(a,n,{seg:12}),r,o+i/2,0);s.scale.y=1.5,e.add(s)};r(0,.22,.15,.4),r(-.2,.1,.07,.33),r(.2,.1,.07,.33)},tokyoTower(e,t){let n=`#F25822`,r=`#EDEDED`,i=0;for(let a=0;a<9;a++){let o=a/9,s=(a+1)/9,c=.19*(1-o)+.03*o,l=.19*(1-s)+.03*s,u=.085,d=a%2?r:n;e.add(B(t.cyl(l,c,u,d,{seg:4,glow:n,glowDay:0,glowNight:.7}),0,i+u/2,0)),i+=u}e.add(B(t.box(.22,.02,.22,n,{glow:n,glowNight:.7}),0,.28,0)),e.add(B(t.box(.12,.02,.12,r),0,.5,0)),e.add(B(t.cone(.012,.16,r,{seg:6,glow:`#ff6a2a`,glowNight:.9}),0,i+.08,0))},pagoda(e,t){let n=0;for(let r=0;r<5;r++){let i=.42-r*.06,a=.11;e.add(B(t.box(i,a,i,`#B23A2C`,{windows:r<4}),0,n+a/2,0)),e.add(B(t.box(i*1.34,.03,i*1.34,`#7A3B2A`),0,n+a+.015,0)),n+=.16999999999999998}e.add(B(t.cyl(.012,.012,.1,`#E0C040`,{seg:6}),0,n+.05,0)),e.add(B(t.sphere(.03,`#E0C040`,{seg:8,glow:`#ffe680`,glowNight:.8}),0,n+.12,0))},neonBillboard(e,t){let n=`#20242C`;e.add(B(t.box(.3,1,.3,n,{windows:!0}),0,.5,0));let r=[`#5AE8E0`,`#E85AA0`,`#E8E06A`],i=(n,r,i,a,o,s,c)=>{let l=B(t.box(n,r,.02,i,{glow:i,glowDay:.6,glowNight:1.1}),a,o,s);l.rotation.y=c,e.add(l)};i(.22,.34,r[0],0,.75,.16,0),i(.16,.5,r[1],.16,.5,0,Math.PI/2),i(.2,.22,r[2],0,.34,-.16,0),e.add(B(t.cone(.01,.14,n,{seg:6,glow:`#E85AA0`,glowDay:.4,glowNight:1}),0,1.08,0))}};function wt(e,t){let n=new F;return Ct[e](n,xt(t)),n}var Tt=``+new URL(`building-skyscraper-d-CapD2Zqe.glb`,import.meta.url).href,Et=``+new URL(`building-n-hdv8kKtN.glb`,import.meta.url).href,Dt=``+new URL(`building-g-CsTB1qH9.glb`,import.meta.url).href,Ot=``+new URL(`colormap-CK8fW2HB.png`,import.meta.url).href,kt={skyscraper:{url:Tt,color:`#9cc1dd`,fill:.92},midrise:{url:Et,color:`#c9a07a`,fill:.96},setback:{url:Dt,color:`#d9c7a0`,fill:.9}};function At({windowGlow:e}){let t=new T;t.setURLModifier(e=>e.includes(`colormap.png`)?Ot:e);let n=new he(t),r={},i=!1,a=Promise.all(Object.entries(kt).map(async([e,t])=>{r[e]=(await n.loadAsync(t.url)).scene})).then(()=>{i=!0,window.__landmarksReady=!0}).catch(e=>console.error(`landmark models failed:`,e)),o=9e3;function s(t,n,i={}){let a,s;if(yt.includes(t))a=wt(t,{windowGlow:e,winColors:i.winColors,litFrac:i.litFrac,id:()=>++o}),s=1;else{let e=r[t],n=kt[t];if(!e||!n)return null;a=e.clone(!0),s=n.fill}a.updateMatrixWorld(!0);let c=new pe().setFromObject(a).getSize(new S);a.scale.setScalar(n.h*s/c.y),a.updateMatrixWorld(!0);let l=new pe().setFromObject(a),u=l.getCenter(new S);return a.position.x+=n.x-u.x,a.position.z+=n.z-u.z,a.position.y+=n.plinthTop-l.min.y,yt.includes(t)?a.traverse(e=>{e.isMesh&&(e.castShadow=!1,e.raycast=()=>{})}):a.traverse(n=>{if(!n.isMesh)return;n.castShadow=!1,n.raycast=()=>{};let r=n=>qe(n.clone(),{color:kt[t].color,id:++o,windowGlow:e,winColors:i.winColors,litFrac:i.litFrac});n.material=Array.isArray(n.material)?n.material.map(r):r(n.material)}),a}return{make:s,whenReady:a,heightFactor:e=>bt[e]??1,get ready(){return i}}}var jt=[`video/mp4;codecs=avc1.42E01E`,`video/mp4`,`video/webm;codecs=vp9`,`video/webm`];function Mt({renderer:e,rig:t,sunRig:n,poke:r,getState:i,office:a={}}){let o=e.domElement,s=new URLSearchParams(window.location.search),c=e=>{let t=i();return`lgr-${t.lesson}-${String(t.clock||``).replace(`:`,``)}-${t.style}.${e}`},l=(e,t)=>{let n=URL.createObjectURL(e),r=document.createElement(`a`);r.href=n,r.download=t,document.body.appendChild(r),r.click(),r.remove(),setTimeout(()=>URL.revokeObjectURL(n),1e3)};function u(){o.toBlob(e=>{e&&(l(e,c(`png`)),window.__lastStill=e.size)},`image/png`)}let d=()=>jt.find(e=>window.MediaRecorder&&MediaRecorder.isTypeSupported(e))||``,f=Nt(),p=null,m=[],h=!1;function g(){if(h)return;let e=d(),t=o.captureStream(60);p=new MediaRecorder(t,e?{mimeType:e,videoBitsPerSecond:12e6}:{}),m=[],p.ondataavailable=e=>{e.data&&e.data.size&&m.push(e.data)},p.onstop=()=>{let e=new Blob(m,{type:p.mimeType});l(e,c(p.mimeType.includes(`mp4`)?`mp4`:`webm`)),window.__lastVideo=e.size},p.start(),h=!0,window.__recording=!0,f.show()}function _(){h&&(p.stop(),h=!1,window.__recording=!1,f.hide())}let v=()=>h?_():g(),y=e=>new Promise(t=>setTimeout(t,e)),b=e=>window.dispatchEvent(new KeyboardEvent(`keydown`,{key:e}));async function x(){let e=o.clientWidth,t=o.clientHeight,n=e*.26,i=t*.74;for(let t=0;t<=10;t++)r.at(n+t*e*.028,i+Math.sin(t*.7)*16),await y(100);r.stop()}async function S(e){if(e.keys)for(let t of e.keys)b(t),await y(70);e.zoom&&t.zoomBy(e.zoom),e.orbit&&t.orbit(e.orbit[0],e.orbit[1]),e.timeTo!==void 0&&n.goTo(e.timeTo),e.office&&a[e.office]?.(),e.ripple&&await x(),e.waitMs&&await y(e.waitMs)}let C={tour:[{keys:[`6`,`0`],waitMs:600},{zoom:.72,waitMs:1700},{ripple:!0,waitMs:2400},{orbit:[.55,0],waitMs:1700},{timeTo:0,waitMs:3e3},{timeTo:.5,waitMs:1500},{keys:[`7`],waitMs:1e3},{zoom:1.5,waitMs:1400},{keys:[`B`],waitMs:2e3},{keys:[`B`],waitMs:2e3},{keys:[`B`],waitMs:2e3},{keys:[`B`],waitMs:2e3},{keys:[`B`],waitMs:2e3},{keys:[`8`],waitMs:900},{zoom:.65,waitMs:1200},{ripple:!0,waitMs:2600},{keys:[`7`],waitMs:700},{keys:[`B`],waitMs:300},{keys:[`B`],waitMs:900},{zoom:1.4,waitMs:2600}],daycycle:[{keys:[`6`,`0`],waitMs:700},{timeTo:.75,waitMs:2600},{timeTo:1,waitMs:2600},{timeTo:1.25,waitMs:2600},{timeTo:1.5,waitMs:2600},{timeTo:1.5,waitMs:800}],office:[{keys:[`o`],waitMs:1700},{office:`pet`,waitMs:1300},{office:`feed`,waitMs:1700},{office:`travel`,waitMs:1700},{keys:[`W`,`W`,`W`],waitMs:1800},{timeTo:0,waitMs:2400},{office:`laptop`,waitMs:800},{office:`closeLaptop`,waitMs:300},{timeTo:.5,waitMs:900},{keys:[`W`],waitMs:200},{keys:[`o`],waitMs:1500}],cities:[{keys:[`6`,`0`],waitMs:500},{timeTo:.78,waitMs:2800},{keys:[`C`],waitMs:3e3},{keys:[`C`],waitMs:3e3},{keys:[`C`],waitMs:2e3}]};async function w(e){let t=C[e];if(t){window.__director=e;for(let e of t)await S(e);window.__director=null}}async function T(e){await y(1600),g(),await w(e),await y(400),_(),window.__captureDone=!0}window.addEventListener(`keydown`,e=>{(e.key===`s`||e.key===`S`)&&u(),(e.key===`r`||e.key===`R`)&&v()});let E=s.get(`capture`);return E&&C[E]&&T(E),window.__capture={still:u,toggleRec:v,run:w,sequences:Object.keys(C)},window.__capture}function Nt(){let e=document.createElement(`div`);return e.textContent=`● REC`,e.style.cssText=`position:fixed;top:14px;right:16px;z-index:2;font:bold 12px ui-monospace,monospace;color:#ff3b30;letter-spacing:.12em;text-shadow:0 1px 3px #000;display:none;`,document.body.appendChild(e),{show:()=>{e.style.display=`block`},hide:()=>{e.style.display=`none`}}}var Pt=`
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
`;function Ft({controls:e,state:t,show:n,coarse:r}){if(typeof document>`u`)return;let i=document.createElement(`style`);i.textContent=Pt,document.head.appendChild(i);let a=document.createElement(`div`);a.className=`vui`;let o=document.createElement(`div`);o.className=`vui-info`,o.innerHTML=`KEYS · 4/5/6 cam · 0 vector · 7/8 pixel/toon · B era · T time · [ ] scrub · 9 auto · C city · G shuffle · W weather · K season · click a building / O office · Esc exit · M hide UI · S still · R rec · H shadows · P theme · drag water to ripple`;let s=(e,t,n)=>{let r=document.createElement(`button`);return r.textContent=e,n&&(r.title=n),r.addEventListener(`click`,t),r},c=e=>{let t=document.createElement(`div`);return t.className=`seg`,{seg:t,btns:e.map(([n,r])=>{let i=s(n,()=>e.find(e=>e[1]===r)[2](),n);return i.dataset.val=r,t.appendChild(i),i})}};a.appendChild(s(`City`,()=>e.city(),`Next city profile (C)`)),a.appendChild(s(`Shuffle`,()=>e.shuffle(),`New random seed (G)`)),a.appendChild(O());let l={clear:`Clear`,rain:`Rain`,snow:`Snow`,fog:`Fog`},u=[`Spring`,`Summer`,`Autumn`,`Winter`],d=s(`Clear`,()=>e.weather(),`Cycle weather: clear→rain→snow→fog (W)`),f=s(`Spring`,()=>e.season(),`Cycle season: spring→summer→autumn→winter (K)`),p=s(`Office`,()=>e.office(),`Dive into / exit the office (O · Esc)`);a.append(d,f,p,O());let m=c([[`Vector`,`vector`,()=>e.style(`vector`)],[`Pixel`,`pixel`,()=>e.style(`pixel`)],[`Toon`,`toon`,()=>e.style(`toon`)]]);a.appendChild(m.seg),a.appendChild(O());let h=document.createElement(`input`);h.type=`range`,h.min=`0`,h.max=`1`,h.step=`0.01`,h.title=`Time of day`;let g=!1;h.addEventListener(`pointerdown`,()=>{g=!0}),h.addEventListener(`pointerup`,()=>{g=!1}),h.addEventListener(`input`,()=>e.time(parseFloat(h.value)));let _=s(`▶`,()=>e.auto(),`Play/pause day cycle (9)`),v=document.createElement(`div`);v.style.cssText=`display:flex;align-items:center;gap:6px;`;let y=document.createElement(`span`);y.className=`lbl`,y.textContent=`Day`,v.append(y,h,_),a.appendChild(v),a.appendChild(O());let b=c([[`Iso`,`iso`,()=>e.cam(`iso`)],[`Dim`,`dimetric`,()=>e.cam(`dimetric`)],[`3D`,`persp`,()=>e.cam(`persp`)]]);a.appendChild(b.seg),a.appendChild(s(`ⓘ`,()=>o.classList.toggle(`open`),`All keys`)),a.appendChild(O()),a.appendChild(s(`⌄`,()=>E(!0),`Hide controls — watch unobstructed (M)`));let x=document.createElement(`button`);x.className=`vui-show`,x.innerHTML=`⌃ Controls`,x.title=`Show controls (M)`,x.addEventListener(`click`,()=>E(!1)),document.body.append(o,a,x);let S=n,C=!1;E(!1);function w(){let e=t();m.btns.forEach(t=>t.classList.toggle(`on`,t.dataset.val===e.style)),b.btns.forEach(t=>t.classList.toggle(`on`,t.dataset.val===e.cam)),d.textContent=l[e.weather]||`Clear`,d.classList.toggle(`on`,e.weather!==`clear`),f.textContent=u[e.season]||`Spring`,f.classList.toggle(`on`,(e.season||0)>0),p.textContent=e.office?`Exit`:`Office`,p.classList.toggle(`on`,!!e.office),_.textContent=e.auto?`❚❚`:`▶`,_.classList.toggle(`on`,e.auto),g||(h.value=String(e.t))}w();let T=setInterval(w,200);function E(e){if(!S){a.style.display=`none`,x.classList.remove(`on`),o.classList.remove(`open`);return}C=e,a.style.display=e?`none`:`flex`,x.classList.toggle(`on`,e),e&&o.classList.remove(`open`)}function D(){E(!C)}return{toggle:D,setHidden:E,refresh:w,destroy(){clearInterval(T),a.remove(),o.remove(),x.remove(),i.remove()}};function O(){let e=document.createElement(`div`);return e.className=`sep`,e}}var It=[`clear`,`rain`,`snow`,`fog`];function Lt({extent:e=7}={}){let t=new F;t.raycast=()=>{};let n=e+2,r=.25,i=(e,t)=>e+Math.random()*(t-e),a=new w(new m(.015,.5),new M({color:`#a9bdd6`,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),600);a.frustumCulled=!1,a.raycast=()=>{};let o=new Float32Array(600*3),s=new Float32Array(600);for(let e=0;e<600;e++)o[e*3]=i(-n,n),o[e*3+1]=i(r,11),o[e*3+2]=i(-n,n),s[e]=i(9,14);let c=new w(new m(.07,.07),new M({color:`#f3f7ff`,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),700);c.frustumCulled=!1,c.raycast=()=>{};let l=new Float32Array(700*3),u=new Float32Array(700),d=new Float32Array(700);for(let e=0;e<700;e++)l[e*3]=i(-n,n),l[e*3+1]=i(r,11),l[e*3+2]=i(-n,n),u[e]=i(0,6.28),d[e]=i(.6,1.2);t.add(a,c);let f=Array.from({length:8},()=>new S),p=0,h=`clear`,g=0,_=0,y=0,b=0,x=0,C=new v,T=(e,t,n,r)=>e+(t-e)*Math.min(1,n*r);function E(e){It.includes(e)&&(h=e)}function D(){h=It[(It.indexOf(h)+1)%It.length]}function O(e,t){let m=h===`rain`,v=h===`snow`,S=h===`fog`,w=h!==`clear`;g=T(g,+!!w,e,1.4),_=T(_,+!!w,e,1.2),y=T(y,+!!S,e,.9),x=T(x,w&&!S?1:0,e,1),b=T(b,+!!v,e,v?.22:.5);let E=m?g:0,D=Math.round(600*E);for(let t=0;t<600;t++){if(t>=D){C.position.set(0,-50,0),C.scale.setScalar(0),C.updateMatrix(),a.setMatrixAt(t,C.matrix);continue}o[t*3+1]-=s[t]*e,o[t*3]+=e*1.1,o[t*3+1]<r&&(o[t*3]=i(-n,n),o[t*3+1]=11,o[t*3+2]=i(-n,n)),C.position.set(o[t*3],o[t*3+1],o[t*3+2]),C.rotation.set(0,0,0),C.scale.set(1,1,1),C.updateMatrix(),a.setMatrixAt(t,C.matrix)}a.instanceMatrix.needsUpdate=!0,a.material.opacity=.55*E,p=m?Math.round(8*g):0;for(let e=0;e<p;e++)f[e].set(Math.random(),Math.random(),.05*g);let O=Math.round(700*(v?g:0));for(let a=0;a<700;a++){if(a>=O){C.position.set(0,-50,0),C.scale.setScalar(0),C.updateMatrix(),c.setMatrixAt(a,C.matrix);continue}l[a*3+1]-=d[a]*e;let o=Math.sin(t*1.5+u[a])*.5;l[a*3+1]<r&&(l[a*3]=i(-n,n),l[a*3+1]=11,l[a*3+2]=i(-n,n)),C.position.set(l[a*3]+o,l[a*3+1],l[a*3+2]),C.rotation.set(0,0,0),C.scale.setScalar(1),C.updateMatrix(),c.setMatrixAt(a,C.matrix)}c.instanceMatrix.needsUpdate=!0,c.material.opacity=.9*(v?g:0)}return{group:t,update:O,cycle:D,setKind:E,rainDrops:f,get kind(){return h},get intensity(){return g},get overcast(){return _},get fog(){return y},get snow(){return b},get cloud(){return x},get rainDropCount(){return p},poolCounts:{rain:600,snow:700}}}function V(e,t,n,r,{rough:i=.62,metal:a=0,x:s=0,y:c=0,z:l=0,emissive:u=null,emissiveIntensity:d=1}={}){let f=new b(new j(e,t,n),new o({color:r,roughness:i,metalness:a,...u?{emissive:u,emissiveIntensity:d}:{}}));return f.position.set(s,c,l),f}function Rt({tier:e=`corner`}={}){let t=new D,n=new d(43,1,.1,100),r=new S(0,1.62,4.35);n.position.copy(r),n.lookAt(0,1.12,-1);let i=new F;t.add(i);let a=new F,s=new F;i.add(a,s);let c=[],l=`#3a2618`,u=`#5b3d27`,f=`#5a5650`;a.add(V(11,.2,11,`#3c2a1c`,{rough:.5,y:-.1})),a.add(V(11,.2,11,`#241a13`,{rough:.9,y:3}));function p(e){let t=new F;t.add(V(.2,3.2,8,`#4a3322`,{rough:.7,x:e*3.6,y:1.5,z:0}));for(let n of[.9,2.1])t.add(V(.22,.06,8,l,{x:e*3.59,y:n,z:0}));let n=new b(new m(1.5,1),new o({map:Kt(e),roughness:.8}));return n.position.set(e*3.49,1.7,.4),n.rotation.y=-e*Math.PI/2,t.add(V(.06,1.18,1.68,`#2a1c10`,{x:e*3.52,y:1.7,z:.4}),n),t}a.add(p(-1),p(1));let v=new m(3,2.5),y=new M({color:`#ffffff`,toneMapped:!1}),x=new M({color:`#ffffff`,toneMapped:!1}),C=1.55,w=new b(v,y);w.position.set(-1.06,C,-2.64),w.rotation.y=Math.PI/4;let T=new b(v,x);T.position.set(1.06,C,-2.64),T.rotation.y=-Math.PI/4,a.add(w,T),a.add(V(.08,2.7,.08,l,{x:0,y:C,z:-2.2}));for(let[e,t,n]of[[-1.06,-2.64,Math.PI/4],[1.06,-2.64,-Math.PI/4]]){let r=new F;r.add(V(3.05,.09,.09,l,{y:1.3})),r.add(V(3.05,.09,.09,l,{y:-1.25})),r.add(V(.09,2.6,.09,l,{x:-1.5})),r.position.set(e,C,t),r.rotation.y=n,a.add(r)}a.add(V(5.4,.5,.3,u,{x:0,y:.25,z:-2.1500000000000004})),a.add(V(.4,.06,.4,`#1a130c`,{y:2.94,z:1.3}));let E=new b(new ne(.16,20),new M({color:`#ffe6b0`,toneMapped:!1}));E.position.set(0,2.9,1.3),E.rotation.x=Math.PI/2,a.add(E),a.add(Bt(c,{x:-3.46,y:2.15,z:.2,ry:Math.PI/2,face:`#efe2c8`,rim:`#2a1c10`})),s.add(V(11,.2,11,`#403d38`,{rough:.85,y:-.1})),s.add(V(11,.2,11,`#1c1a17`,{rough:.95,y:2.8})),s.add(V(7,3,.2,f,{rough:.92,x:0,y:1.4,z:-2.9})),s.add(V(.2,3,6,f,{rough:.92,x:-3.2,y:1.4,z:-.2})),s.add(V(.2,3,6,f,{rough:.92,x:3.2,y:1.4,z:-.2}));for(let e of[-1.6,-.4]){let t=new b(new ie(.07,.07,6,10),new o({color:`#6b6258`,roughness:.6,metalness:.4}));t.rotation.z=Math.PI/2,t.position.set(0,2.62,e),s.add(t)}let O=new M({color:`#ffffff`,toneMapped:!1}),ee=new b(new m(1.9,1.2),O);ee.position.set(0,1.5,-2.79),s.add(ee),s.add(V(2.06,1.36,.06,`#241a12`,{x:0,y:1.5,z:-2.83})),s.add(V(.04,.34,.04,`#1a1410`,{x:-.1,y:2.45,z:-.4}));let k=new b(new ne(.1,16),new M({color:`#ffdb8a`,toneMapped:!1}));k.position.set(-.1,2.26,-.4),k.rotation.x=Math.PI/2,s.add(k);let A=new F;A.add(V(1.3,.05,.32,`#3a2c1e`,{x:0,y:0,z:0}));let te=[`#7a3a2a`,`#2a4a6a`,`#b08a3a`,`#3a5a3a`,`#6a2a4a`];for(let e=0;e<8;e++)A.add(V(.12,.34,.24,te[e%te.length],{x:-.55+e*.14,y:.2,z:0}));A.position.set(-2.3,1.5,-2.66),s.add(A);let ae=new F;ae.add(V(.34,.34,.34,`#7a4a2a`,{y:.17}));let oe=new F;for(let e=0;e<6;e++){let t=V(.05,.5,.14,`#3a7a3a`,{rough:.7});t.geometry.translate(0,.25,0),t.rotation.z=(e/6-.5)*1.2,t.rotation.x=Math.sin(e)*.25,oe.add(t)}oe.position.y=.34,ae.add(oe),ae.position.set(2.45,0,-1.4),s.add(ae),s.add(Bt(c,{x:1.9,y:2.1,z:-2.78,ry:0,face:`#d8d2c4`,rim:`#1a130c`}));let se=new F;se.add(V(3.4,.12,1.5,`#6e4a30`,{rough:.32,y:.86,z:1.5})),se.add(V(3.2,.78,1.36,u,{y:.46,z:1.5}));for(let e of[.66,.4,.14])se.add(V(.9,.2,.04,`#4a3120`,{x:1.05,y:e,z:2.2}));se.add(V(.12,.04,.04,`#caa15a`,{x:1.05,y:.66,z:2.23,metal:.6})),i.add(se);let ce=new F;ce.add(V(.06,.5,.06,`#2a1c10`,{x:-1.15,y:1.15,z:1.6}));let le=new b(new re(.22,.26,16,1,!0),new o({color:`#c2802e`,roughness:.5,side:2,emissive:`#3a2208`,emissiveIntensity:.6}));le.position.set(-1.15,1.42,1.6),ce.add(le);let ue=new _(`#ffb15a`,7,7,1.8);ue.position.set(-1.15,1.34,1.6),ce.add(ue),i.add(ce);let de=new F;de.add(V(.62,.03,.42,`#1c1c20`,{y:.93,z:1.5,metal:.4,rough:.4}));let pe=new b(new j(.62,.4,.025),new o({color:`#0a0c10`,emissive:`#2a4a6a`,emissiveIntensity:.7,roughness:.3}));pe.position.set(0,1.14,1.31),pe.rotation.x=-.32,de.add(pe),de.userData.role=`laptop`,i.add(de);let me=new F;me.add(V(.26,.07,.34,`#15151a`,{x:1,y:.93,z:1.5})),me.add(V(.3,.06,.08,`#101015`,{x:1,y:1,z:1.34})),me.userData.role=`phone`,i.add(me);let he=new _e(`#6a5238`,`#140d08`,.55);t.add(he);let ge=new g(`#ffd9a0`,9,9,.7,.5,1.2);ge.position.set(0,2.95,1.3),ge.target.position.set(0,.86,1.5),t.add(ge,ge.target);let P=Vt(!1),ve=Vt(!0),ye=.62,be=1.32,xe=1.22,I=1.78,Se=new fe(new h({map:P,transparent:!0,depthWrite:!1}));Se.scale.set(ye,ye,1),Se.position.set(be,xe,I),Se.userData.role=`cat`,i.add(Se);let Ce=new fe(new h({map:Ut(),transparent:!0,depthWrite:!1,opacity:0}));Ce.scale.set(.3,.3,1),Ce.raycast=()=>{},i.add(Ce);let we=0;function Te(){we=1.3}let Ee=.62,De=.42,Oe=.34,ke=new F;ke.position.set(-.78,1.06,1.95),ke.add(V(Ee,.05,Oe,`#3a3026`,{y:-.19}));let Ae=new b(new j(Ee-.04,De-.08,Oe-.04),new o({color:`#1f9fc0`,transparent:!0,opacity:.26,roughness:.1,emissive:`#0a3a4a`,emissiveIntensity:.4,depthWrite:!1}));Ae.position.y=.02,ke.add(Ae);for(let e of[-1,1])for(let t of[-1,1])ke.add(V(.03,De,.03,`#20262c`,{x:e*(Ee/2-.015),z:t*(Oe/2-.015),metal:.5}));let je=new b(new j(Ee,De,Oe),new M({visible:!1}));je.userData.role=`tank`,ke.add(je);let Me=new _(`#5fd8ff`,0,3,2);ke.add(Me);let Ne=[Wt(`#e8a23c`),Wt(`#d85a6a`),Wt(`#6cc0e0`)],Pe=[],Fe=De/2-.12;for(let e=0;e<3;e++){let t=new fe(new h({map:Ne[e],transparent:!0,depthWrite:!1})),n=.15-e*.015;t.userData={sz:n,sp:.6+e*.22,ph:e*2.1,ax:.21*(.7+.1*e),ay:Fe,az:.09000000000000001,prevx:0},t.scale.set(n,n,1),Pe.push(t),ke.add(t)}let Ie=Gt(),Le=[];for(let e=0;e<5;e++){let t=new fe(new h({map:Ie,color:`#cfeffb`,transparent:!0,opacity:.5,depthWrite:!1}));t.userData={ph:e/5,sp:.16+Math.random()*.06,x:-.1+e%3*.07},t.scale.setScalar(.03+e%2*.015),t.raycast=()=>{},Le.push(t),ke.add(t)}let L=new fe(new h({map:Ie,color:`#c8a24a`,transparent:!0,opacity:0,depthWrite:!1}));L.scale.setScalar(.04),L.raycast=()=>{},ke.add(L);let R=0;function Re(){R=3,L.position.set(-.05,Fe,0),L.material.opacity=1}i.add(ke);let ze=new F;for(let e=0;e<8;e++){let t=new fe(new h({map:Ie,color:`#ffd9a0`,transparent:!0,opacity:0,depthWrite:!1,blending:2}));t.scale.setScalar(.018),t.userData={ph:e*.9,sp:.1+e%3*.04,r:.1+e%4*.03},t.raycast=()=>{},ze.add(t)}ze.position.set(-1.15,1.2,1.6),i.add(ze);let Be=zt(),Ve=ue.intensity,He=pe.material.emissiveIntensity,Ue=new N;function We(e,t,i){let a=i?i.windowGlow:0,o=a>.55;Se.material.map=o?ve:P,we>0&&(we=Math.max(0,we-e));let s=we>0?Math.sin((1.3-we)/1.3*Math.PI):0,l=o?.012*Math.sin(t*1.2):.03*Math.sin(t*2.4);Se.scale.set(ye,ye*(1+l+.12*s),1),Se.position.y=xe+.06*s,Ce.material.opacity=s,Ce.position.set(be,1.72+.5*(1-we/1.3),I),Ce.scale.setScalar(.22+.1*s),R>0&&(R=Math.max(0,R-e),L.position.y=Math.max(-.09,L.position.y-e*.06),L.material.opacity=R>.3?1:R/.3);for(let e of Pe){let n=e.userData,r=Math.sin(t*n.sp+n.ph)*n.ax,i=Math.sin(t*n.sp*.8+n.ph*1.7)*n.ay*.7,a=Math.cos(t*n.sp*.6+n.ph)*n.az,o=R>0?L.position.x:r,s=R>0?L.position.y:i,c=R>0?L.position.z:a,l=R>0?.05:.1;e.position.x+=(o-e.position.x)*l,e.position.y+=(s-e.position.y)*l,e.position.z+=(c-e.position.z)*l,e.scale.x=(e.position.x>=n.prevx?1:-1)*n.sz,n.prevx=e.position.x}for(let e of Le){let n=(t*e.userData.sp+e.userData.ph)%1;e.position.set(e.userData.x+Math.sin(t*2+e.userData.ph*9)*.015,-.09+2*Fe*n,.02),e.material.opacity=.5*Math.sin(n*Math.PI)}Me.intensity=2.6*a,Ae.material.emissiveIntensity=.4+.9*a,ue.intensity=Ve*(.97+.03*Math.sin(t*7)*Math.sin(t*2.3)),pe.material.emissiveIntensity=He*(.85+.15*Math.sin(t*3.1+1)),Ue.setRGB(1,.85,.62),ze.children.forEach((e,n)=>{let r=e.userData,i=(t*r.sp+r.ph)%1;e.position.set(Math.cos(t*.5+r.ph*5)*r.r,-.15+i*.45,Math.sin(t*.4+r.ph*5)*r.r),e.material.opacity=(.1+.18*a)*Math.sin(i*Math.PI)}),oe.rotation.z=Math.sin(t*.8)*.05,oe.rotation.x=Math.sin(t*.6+1)*.04;let u=i?i.t%1:0;for(let e of c)e.rotation.z=-u*Math.PI*2;Be.update(e),n.position.set(r.x+Math.sin(t*.5)*.04,r.y+Math.sin(t*.7)*.02,r.z),n.lookAt(0,1.12,-1)}function Ge(e){y.map=e,x.map=e,y.needsUpdate=!0,x.needsUpdate=!0}function Ke(e){O.map=e,O.needsUpdate=!0}let qe=e;function z(e){qe=e===`basement`?`basement`:`corner`;let t=qe===`corner`;return a.visible=t,s.visible=!t,ge.intensity=t?9:3.2,he.intensity=t?.55:.78,he.color.set(t?`#6a5238`:`#7a5a34`),qe}return z(qe),{scene:t,camera:n,update:We,setCityTexture:Ge,setVignetteTexture:Ke,setFitout:z,petCat:Te,feedFish:Re,vignette:Be,interactables:[de,me,Se,je],get tier(){return qe}}}function zt(){let e=new D;e.background=new N(`#7fb0dd`);let t=new y(-1.4,1.4,.9,-.9,0,10);t.position.set(0,0,5);let n=(e,t={})=>new M({color:e,toneMapped:!1,...t}),r=(e,t,r,i,a,o,s)=>{let c=new b(new m(e,t),n(o,s));return c.position.set(r,i,a),c};e.add(r(3.2,.9,.5,-.95,1,`#2a4a30`)),e.add(r(3.2,.7,-.7,-1.05,2,`#1d3724`)),e.add(r(.06,.3,-.95,-.55,3,`#3a2a1a`));let i=new b(new ne(.22,18),n(`#234a2a`));i.position.set(-.95,-.32,3),e.add(i),e.add(r(.04,.55,.9,-.55,3,`#20242a`));let a=new b(new ne(.1,16),n(`#ffd98a`,{transparent:!0,opacity:0}));a.position.set(.9,-.26,3.1),e.add(a);let o=new b(new ne(.16,24),n(`#fff4d8`));e.add(o);let s=[];for(let[t,r]of[[-1,.5],[-.6,.7],[.2,.6],[.7,.72],[1.05,.45],[-.2,.78],[.45,.4]]){let i=new b(new ne(.015,8),n(`#ffffff`,{transparent:!0,opacity:0}));i.position.set(t,r,.5),s.push(i),e.add(i)}let c=new N(`#141d33`),l=new N(`#7fb6e0`),d=new N(`#d6824a`),f=new N(`#fff0cc`),p=new N(`#cdd8ef`),h=.34;function g(t){h=(h+t*.04)%1;let n=h*Math.PI*2,r=-Math.cos(n);o.position.set(Math.sin(n)*1.15,r*.66+.06,0);let i=u.smoothstep(r,-.18,.5),m=u.smoothstep(.32,0,Math.abs(r));e.background.copy(c).lerp(l,i).lerp(d,m*.45),o.material.color.copy(r>0?f:p),a.material.opacity=1-i;let g=(1-i)*.85;for(let e of s)e.material.opacity=g}return{scene:e,camera:t,update:g}}function Bt(e,{x:t,y:n,z:r,ry:i=0,face:a=`#efe2c8`,rim:s=`#2a1c10`}){let c=new F,l=new b(new ne(.2,28),new o({color:s,roughness:.6})),u=new b(new ne(.17,28),new o({color:a,roughness:.7}));u.position.z=.01;let d=new b(new m(.018,.14),new o({color:`#1a130c`,roughness:.5}));return d.geometry.translate(0,.05,0),d.position.z=.02,e.push(d),c.add(l,u,d),c.position.set(t,n,r),c.rotation.y=i,c}function Vt(e){let t=document.createElement(`canvas`);t.width=t.height=128;let n=t.getContext(`2d`),r=`#e08a3c`,i=`#b96a26`,a=`#3a2410`;if(n.lineJoin=`round`,e){n.fillStyle=r,n.beginPath(),n.ellipse(64,78,44,26,0,0,7),n.fill(),n.fillStyle=i,n.beginPath(),n.ellipse(64,86,44,16,0,0,7),n.fill(),n.fillStyle=r,n.beginPath(),n.arc(36,70,20,0,7),n.fill(),n.fillStyle=r,Ht(n,24,56,34,44,42,58),Ht(n,40,54,50,44,54,60),n.strokeStyle=i,n.lineWidth=7,n.lineCap=`round`,n.beginPath(),n.moveTo(100,70),n.quadraticCurveTo(112,90,88,96),n.stroke(),n.strokeStyle=a,n.lineWidth=2.5,n.beginPath(),n.arc(30,70,5,.1,Math.PI-.1),n.stroke(),n.strokeStyle=i,n.lineWidth=3;for(let e of[60,74,88])n.beginPath(),n.moveTo(e,58),n.lineTo(e,70),n.stroke()}else{n.fillStyle=r,n.beginPath(),n.ellipse(64,86,30,34,0,0,7),n.fill(),n.fillStyle=`#f3c98a`,n.beginPath(),n.ellipse(64,92,14,22,0,0,7),n.fill(),n.strokeStyle=i,n.lineWidth=8,n.lineCap=`round`,n.beginPath(),n.moveTo(92,100),n.quadraticCurveTo(116,86,104,60),n.stroke(),n.fillStyle=r,n.beginPath(),n.arc(64,48,24,0,7),n.fill(),n.fillStyle=r,Ht(n,44,34,50,18,60,34),Ht(n,84,34,78,18,68,34),n.fillStyle=`#f0b0c0`,Ht(n,47,30,50,22,56,32),Ht(n,81,30,78,22,72,32),n.fillStyle=a,n.beginPath(),n.arc(55,47,3.4,0,7),n.arc(73,47,3.4,0,7),n.fill(),n.fillStyle=`#e06a7a`,Ht(n,61,54,67,54,64,58),n.strokeStyle=a,n.lineWidth=1.6;for(let e of[-2,3])n.beginPath(),n.moveTo(50,55+e),n.lineTo(34,53+e),n.moveTo(78,55+e),n.lineTo(94,53+e),n.stroke();n.strokeStyle=i,n.lineWidth=3;for(let e of[78,90,102])n.beginPath(),n.moveTo(50,e),n.lineTo(78,e),n.stroke()}let o=new A(t);return o.colorSpace=s,o}function Ht(e,t,n,r,i,a,o){e.beginPath(),e.moveTo(t,n),e.lineTo(r,i),e.lineTo(a,o),e.closePath(),e.fill()}function Ut(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`);t.fillStyle=`#ff5a8a`,t.beginPath(),t.moveTo(32,52),t.bezierCurveTo(6,32,14,10,32,24),t.bezierCurveTo(50,10,58,32,32,52),t.fill();let n=new A(e);return n.colorSpace=s,n}function Wt(e){let t=document.createElement(`canvas`);t.width=t.height=64;let n=t.getContext(`2d`);n.fillStyle=e,n.beginPath(),n.ellipse(30,32,18,11,0,0,7),n.fill(),n.beginPath(),n.moveTo(46,32),n.lineTo(60,22),n.lineTo(60,42),n.closePath(),n.fill(),n.fillStyle=`rgba(255,255,255,0.35)`,n.beginPath(),n.ellipse(28,36,12,5,0,0,7),n.fill(),n.fillStyle=`#15212a`,n.beginPath(),n.arc(20,30,2.6,0,7),n.fill();let r=new A(t);return r.colorSpace=s,r}function Gt(){let e=document.createElement(`canvas`);e.width=e.height=32;let t=e.getContext(`2d`),n=t.createRadialGradient(16,16,0,16,16,16);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.6,`rgba(255,255,255,0.7)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.beginPath(),t.arc(16,16,16,0,7),t.fill();let r=new A(e);return r.colorSpace=s,r}function Kt(e){let t=document.createElement(`canvas`);t.width=t.height=256;let n=t.getContext(`2d`),r=n.createLinearGradient(0,0,256,256);e<0?(r.addColorStop(0,`#6a3b1c`),r.addColorStop(1,`#caa15a`)):(r.addColorStop(0,`#3a4a6a`),r.addColorStop(1,`#a86a3a`)),n.fillStyle=r,n.fillRect(0,0,256,256),n.globalAlpha=.5;for(let e=0;e<5;e++)n.fillStyle=e%2?`#2a1c10`:`#e0c080`,n.fillRect(30+e*36,40+e%3*30,26,150);let i=new A(t);return i.colorSpace=s,i}function qt(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=(e,n,r)=>{let i=t.createRadialGradient(e,n,0,e,n,r);i.addColorStop(0,`rgba(255,255,255,0.95)`),i.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=i,t.beginPath(),t.arc(e,n,r,0,7),t.fill()};n(128*.42,128*.56,128*.26),n(128*.6,128*.5,128*.3),n(128*.5,128*.46,128*.22),n(128*.34,128*.54,128*.18),n(128*.7,128*.58,128*.18);let r=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5],i=t.getImageData(0,0,128,128),a=i.data;for(let e=0;e<128;e++)for(let t=0;t<128;t++){let n=(e*128+t)*4,i=a[n+3]/255,o=(r[e%4*4+t%4]+.5)/16-.5;a[n+3]=Math.max(0,Math.min(1,Math.floor(i*5+.5+o)/5))*255}t.putImageData(i,0,0);let o=new A(e);return o.colorSpace=s,o}function Jt({extent:e=8,count:t=16}={}){let n=new F;n.raycast=()=>{};let r=qt(),i=e+6,a=(e,t)=>e+Math.random()*(t-e),o=[];for(let e=0;e<t;e++){let e=new h({map:r,transparent:!0,depthWrite:!1,opacity:0,fog:!0}),t=new fe(e),s={sp:t,mat:e,wisp:Math.random(),x:a(-i,i),z:a(-i,i),hiY:a(4,6.8),loY:a(.6,2.2),w:a(3,5.6),h:a(1.7,3),speed:a(.25,.7),op:a(.6,1)};t.raycast=()=>{},o.push(s),n.add(t)}let s=new N,c=new N(`#ffffff`),l=new N(`#5b626e`);function u(e,t,n,r){let u=r?r.cloud:0,d=r?r.fog:0,f=Math.min(1,.4+.6*u+.5*d);s.copy(n.sky).lerp(c,.62),s.lerp(l,.6*u);for(let n=0;n<o.length;n++){let r=o[n],c=n/o.length<f;r.x+=r.speed*e*(.6+.8*u),r.x>i&&(r.x=-i,r.z=a(-i,i));let l=Math.min(Yt(r.x,-i,-i+3),1-Yt(r.x,i-3,i)),p=r.hiY*(1-d)+r.loY*d,m=1-.5*r.wisp,h=.72*Math.max(0,1-d-u)+1*u+.42*d,g=c?Math.max(0,h)*r.op*m*l:0;r.mat.opacity+=(g-r.mat.opacity)*Math.min(1,e*2.5),r.mat.color.copy(s);let _=r.w*(1+.6*d)*(1+.4*r.wisp),v=r.h*(1-.35*d);r.sp.scale.set(_,v,1),r.sp.position.set(r.x,p+Math.sin(t*.3+n)*.15,r.z)}}function d(e){r=e;for(let t of o)t.mat.map=e,t.mat.needsUpdate=!0}return{group:n,update:u,setTexture:d,get count(){return o.length}}}function Yt(e,t,n){let r=Math.max(0,Math.min(1,(e-t)/(n-t)));return r*r*(3-2*r)}var Xt=`varying vec2 vUv;

void main() {
  
  
  
  vUv = uv;

  
  
  
  
  
  
  
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,Zt=`precision highp float;

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
}`,Qt=`precision highp float;

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
}`,$t=`precision highp float;

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
}`,en=`precision highp float;

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
}`,tn=`const float CA_STRENGTH   = 0.0030;  
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
}`,nn=`const float DITHER = 0.55;   

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
}`,rn=`precision highp float;

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
}`,an=`precision highp float;

varying vec2 vUv;
uniform sampler2D uToon;   
uniform sampler2D uPixel;  
uniform float     uBlend;  

void main() {
  vec3 t = texture2D(uToon, vUv).rgb;
  vec3 p = texture2D(uPixel, vUv).rgb;
  gl_FragColor = vec4(mix(t, p, uBlend), 1.0);
}`,on=`precision highp float;

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
}`,sn=220,cn=new URLSearchParams(window.location.search),ln=cn.get(`demo`)===`1`||cn.has(`capture`);window.__demo=ln;var un={night:[`#0A0C16`,`#1C2236`,`#3A3A52`,`#5A5A78`,`#8A92B0`],dawn:[`#1A1008`,`#43281A`,`#7A4A30`,`#B07A4E`,`#E8A86A`],noon:[`#16100A`,`#3A2F1E`,`#6B563A`,`#937B54`,`#B89968`],dusk:[`#140A0A`,`#3E1E1A`,`#7A3828`,`#B85A36`,`#F0884A`]},dn={night:[`#020604`,`#06180E`,`#10401E`,`#1E9040`,`#7FE0FF`],dawn:[`#060603`,`#1A2410`,`#3A6B22`,`#6CC040`,`#FFC060`],noon:[`#050805`,`#0E2912`,`#1E6B2F`,`#3CF06A`,`#FFB000`],dusk:[`#080402`,`#241408`,`#6B4A12`,`#E0A030`,`#FF7030`]},H=new ue({antialias:!0,preserveDrawingBuffer:!0});H.shadowMap.enabled=!0,H.shadowMap.type=1,H.setPixelRatio(Math.min(window.devicePixelRatio,2)),H.setSize(window.innerWidth,window.innerHeight),H.setClearColor(920327,1),document.body.appendChild(H.domElement);var U=H.getDrawingBufferSize(new k),W=new D;W.fog=new ge(10465470,0);var fn=new N(`#aeb6c0`),pn=.062,mn=new N(`#74508f`),hn=new N,G=Pe({aspect:window.innerWidth/window.innerHeight}),K=ft({t:.5}),q=256,gn={type:te,format:C,minFilter:se,magFilter:se,wrapS:ce,wrapT:ce,depthBuffer:!1,stencilBuffer:!1},_n=[new a(q,q,gn),new a(q,q,gn),new a(q,q,gn)];for(let e of _n)H.setRenderTarget(e),H.clear();H.setRenderTarget(null);var vn=new D,yn=new y(-1,1,1,-1,0,1),bn=new p({vertexShader:r,fragmentShader:Qt,uniforms:{uCurr:{value:null},uPrev:{value:null},uTexel:{value:new k(1/q,1/q)},uMouse:{value:new k(-1,-1)},uMouseStrength:{value:0},uC2:{value:.25},uDamping:{value:.992},uRainCount:{value:0},uRainDrops:{value:Array.from({length:8},()=>new S)}}});vn.add(new b(new m(2,2),bn));var xn=new a(U.x,U.y,{minFilter:P,magFilter:P,depthBuffer:!0,stencilBuffer:!1});function Sn(e){let t=document.createElement(`canvas`);t.width=t.height=1024;let n=t.getContext(`2d`);n.fillStyle=e?`#0c1418`:`#15110b`,n.fillRect(0,0,1024,1024),n.strokeStyle=e?`rgba(120,150,170,0.22)`:`rgba(184,153,104,0.30)`,n.lineWidth=2;for(let e=0;e<=1024;e+=64)n.beginPath(),n.moveTo(e,0),n.lineTo(e,1024),n.stroke(),n.beginPath(),n.moveTo(0,e),n.lineTo(1024,e),n.stroke();e||(n.fillStyle=`#B89968`,n.font=`bold 360px Georgia, serif`,n.textAlign=`center`,n.textBaseline=`middle`,n.fillText(`LGR`,512,470),n.font=`600 64px ui-monospace, monospace`,n.fillText(`WEB · STUDIO`,512,720));let r=new A(t);return r.colorSpace=s,r}var Cn=new b(new m(16,16),new M({map:Sn(ln)}));Cn.rotation.x=-Math.PI/2,Cn.position.y=-.35,W.add(Cn);var wn=new b(new m(40,24),new p({depthWrite:!1,vertexShader:Xt,fragmentShader:Zt,uniforms:{uTime:{value:0},uInk:{value:K.horizon},uGold:{value:K.sky},uFogColor:{value:hn},uFogAmt:{value:0},uFogCharm:ze}}));wn.position.set(0,3,-8),W.add(wn);var Tn=new p({vertexShader:$t,fragmentShader:en,uniforms:{uHeight:{value:null},uScene:{value:xn.texture},uTexel:{value:new k(1/q,1/q)},uResolution:{value:new k(U.x,U.y)},uDisplace:{value:.42},uNormalStrength:{value:22},uRefractStrength:{value:.06},uChromaScale:{value:1},uNormalMatrix:{value:new l},uLightDir:{value:K.sunDir},uInk:{value:new N(`#2A2218`)},uGold:{value:new N(`#B89968`)},uVector:Fe,uVecWater:{value:new N(`#1fb8d8`)},uVecTint:{value:Ie}}}),En=new b(new m(16,16,q-1,q-1),Tn);En.rotation.x=-Math.PI/2,En.updateMatrixWorld(!0),Tn.uniforms.uNormalMatrix.value.getNormalMatrix(En.matrixWorld),W.add(En);var Dn={value:0},On=new URLSearchParams(window.location.search),kn=(On.get(`city`)?Number(On.get(`city`)):0)||Math.random()*1e9|0,An=Math.max(0,Ze.indexOf(On.get(`profile`)||`manhattan`)),jn=At({windowGlow:Dn}),J=it({seed:kn,profileIndex:An,landmarkFactory:jn,windowGlow:Dn});W.add(J.group);var Mn=vt({plinthTop:.3,extent:J.extent});W.add(Mn.group);var Y=Lt({extent:J.extent});W.add(Y.group),bn.uniforms.uRainDrops.value=Y.rainDrops;var Nn=Jt({extent:J.extent});W.add(Nn.group);var Pn=[0,.33,.66,1],Fn=0;window.__season=Pn[Fn],J.group.remove(J.key),W.add(J.key),J.key.castShadow=!0,J.key.shadow.mapSize.set(2048,2048),J.key.shadow.bias=-18e-5,J.key.shadow.normalBias=.028,W.add(J.key.target);function In(){let e=J.key.shadow.camera,t=J.extent+4.5;e.left=-t,e.right=t,e.top=t,e.bottom=-t,e.near=1,e.far=Ln*2,e.updateProjectionMatrix()}var Ln=24;In();var Rn=!0;window.__shadows=Rn;function zn(){J.generate(kn,An),Tn.uniforms.uVecWater.value.set(J.waterColor),In(),oi()}jn.whenReady.then(()=>{zn(),window.__cityReady=!0}),Tn.uniforms.uVecWater.value.set(J.waterColor);var Bn=new le(U.x,U.y),Vn=new a(U.x,U.y,{minFilter:P,magFilter:P,depthBuffer:!0,stencilBuffer:!1,depthTexture:Bn}),Hn=new a(U.x,U.y,{minFilter:P,magFilter:P,depthBuffer:!1,stencilBuffer:!1}),Un=new a(U.x,U.y,{minFilter:P,magFilter:P,depthBuffer:!1,stencilBuffer:!1}),Wn=new a(U.x,U.y,{minFilter:P,magFilter:P,depthBuffer:!1,stencilBuffer:!1}),Gn=new D,Kn=new y(-1,1,1,-1,0,1),qn=new b(new m(2,2));Gn.add(qn);var Jn=new p({vertexShader:r,fragmentShader:tn,uniforms:{uScene:{value:Vn.texture},uTime:{value:0},uResolution:{value:new k(U.x,U.y)},uGrain:{value:1},uChroma:{value:1},uExposure:{value:1}}}),Yn=5,Xn=e=>{let t=e.map(e=>new N(e));for(;t.length<8;)t.push(new N(0,0,0));return t},Zn=[`night`,`dawn`,`noon`,`dusk`],Qn={inkgold:Zn.map(e=>Xn(un[e])),terminal:Zn.map(e=>Xn(dn[e]))},$n=new p({vertexShader:r,fragmentShader:nn,uniforms:{uScene:{value:Hn.texture},uResolution:{value:new k(U.x,U.y)},uPixelSize:{value:sn},uPalette:{value:Qn.inkgold[2]},uPaletteB:{value:Qn.inkgold[2]},uPaletteBlend:{value:0},uPaletteSize:{value:Yn}}});function er(e){let t=Mr?Qn.terminal:Qn.inkgold,n=e%1*4,r=Math.floor(n)%4;$n.uniforms.uPalette.value=t[r],$n.uniforms.uPaletteB.value=t[(r+1)%4],$n.uniforms.uPaletteBlend.value=n-Math.floor(n)}var tr=new p({vertexShader:r,fragmentShader:t,uniforms:{uScene:{value:Hn.texture},uResolution:{value:new k(U.x,U.y)},uGridWidth:{value:160},uDither:{value:.55},uPalette:{value:e(i[`8-bit`].palette)},uPaletteSize:{value:1},uUsePalette:{value:1}}}),nr={};for(let t of n)nr[t]=i[t].palette?e(i[t].palette):null;var rr=[`native`,...n],ir=`native`;window.__era=ir;function ar(){if(ir===`native`)return;let e=i[ir];tr.uniforms.uGridWidth.value=e.gridWidth,tr.uniforms.uDither.value=e.dither,tr.uniforms.uUsePalette.value=+!!e.palette,e.palette&&(tr.uniforms.uPalette.value=nr[ir],tr.uniforms.uPaletteSize.value=e.palette.length)}var or=()=>ir===`native`?$n:tr,sr=new p({vertexShader:r,fragmentShader:rn,uniforms:{uScene:{value:Hn.texture},uDepth:{value:Bn},uResolution:{value:new k(U.x,U.y)},uBands:{value:4},uToonGain:{value:1.7},uToonGamma:{value:.6},uToonFloor:{value:K.toonFloor},uOutline:{value:K.outline},uNear:{value:.1},uFar:{value:100},uIsPerspective:{value:1}}}),cr=new p({vertexShader:r,fragmentShader:an,uniforms:{uToon:{value:Un.texture},uPixel:{value:Wn.texture},uBlend:{value:0}}});function lr(e,t){qn.material=e,H.setRenderTarget(t),H.render(Gn,Kn)}var X=Rt({tier:`corner`});X.camera.aspect=window.innerWidth/window.innerHeight,X.camera.updateProjectionMatrix();var ur=new d(55,1.4,.1,100);ur.position.set(2.2,3.4,11.5),ur.lookAt(0,2,0);var dr=new a(1024,720,{minFilter:P,magFilter:P,depthBuffer:!0,stencilBuffer:!1});X.setCityTexture(dr.texture);var fr=new a(512,320,{minFilter:P,magFilter:P,depthBuffer:!0,stencilBuffer:!1});X.setVignetteTexture(fr.texture);var pr=new a(U.x,U.y,{minFilter:P,magFilter:P,depthBuffer:!1,stencilBuffer:!1}),mr=new a(U.x,U.y,{minFilter:P,magFilter:P,depthBuffer:!1,stencilBuffer:!1}),hr=new p({vertexShader:r,fragmentShader:on,uniforms:{uCity:{value:pr.texture},uOffice:{value:mr.texture},uT:{value:0},uFocus:{value:new k(.5,.5)}}}),Z=`city`,gr=0,_r=4.6;window.__scene=Z;var vr=null;function yr(e){Z===`city`&&(hr.uniforms.uFocus.value.copy(e||new k(.5,.5)),Z=`diving-in`,window.__scene=Z)}function br(){Z!==`office`&&Z!==`diving-in`||(Z=`diving-out`,window.__scene=Z)}var xr=!1,Sr=(()=>{if(typeof document>`u`)return{showLap(){},toast(){},flash(){}};let e=document.createElement(`style`);e.textContent=`
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
    </div></div>`;let n=document.createElement(`div`);n.className=`otoast`;let r=document.createElement(`div`);r.className=`oflash`,document.body.append(t,n,r),t.querySelector(`.lap-x`).addEventListener(`click`,()=>wr()),t.addEventListener(`click`,e=>{e.target===t&&wr()});let i=0;return{showLap(e){t.classList.toggle(`on`,e)},toast(e){n.textContent=e,n.classList.add(`on`),clearTimeout(i),i=setTimeout(()=>n.classList.remove(`on`),1400)},flash(){r.style.transition=`none`,r.style.opacity=`0.85`,requestAnimationFrame(()=>{r.style.transition=`opacity .55s`,r.style.opacity=`0`})}}})();function Cr(){xr=!0,Sr.showLap(!0)}function wr(){xr=!1,Sr.showLap(!1)}function Tr(){An=(An+1)%Xe.length,Sr.flash(),zn(),Sr.toast(`✈  `+J.state.profile.name),window.__profile=J.state.profile.key}function Er(e){let t=X.setFitout(e);return Sr.toast(t===`basement`?`🏚  Basement office`:`🏙  Corner office`),window.__tier=t,t}function Dr(){return Er(X.tier===`corner`?`basement`:`corner`)}window.__tier=X.tier;function Or(e,t){En.visible=!1,H.setRenderTarget(xn),H.render(W,e),En.visible=!0,H.setRenderTarget(t),H.render(W,e)}function kr(e,t){if(En.visible=!1,H.setRenderTarget(xn),H.render(W,G.camera),En.visible=!0,Q===1||Nr&&Q!==7&&Q!==8)H.setRenderTarget(t),H.render(W,G.camera);else if(H.setRenderTarget(Vn),H.render(W,G.camera),Q===2)Jn.uniforms.uGrain.value=1,Jn.uniforms.uChroma.value=1,lr(Jn,t);else{Jn.uniforms.uGrain.value=0,Jn.uniforms.uChroma.value=0,lr(Jn,Hn);let n=G.camera;sr.uniforms.uNear.value=n.near,sr.uniforms.uFar.value=n.far,sr.uniforms.uIsPerspective.value=+!!n.isPerspectiveCamera,e.kind===`pixel`?(lr(or(),t),window.__style=`pixel`):e.kind===`toon`?(lr(sr,t),window.__style=`toon`):(lr(sr,Un),lr(or(),Wn),cr.uniforms.uBlend.value=e.blend,lr(cr,t),window.__style=`blend`)}}var Ar=.45,jr=.65,Q=3,Mr=!1,Nr=!1;window.__mode=Q,window.__camMode=G.mode,window.__vector=Nr,window.addEventListener(`keydown`,e=>{(e.key===`1`||e.key===`2`||e.key===`3`)&&(Q=Number(e.key),window.__mode=Q),(e.key===`7`||e.key===`8`)&&(Q=Number(e.key),window.__mode=Q),e.key===`4`&&(G.setMode(I.PERSPECTIVE),window.__camMode=G.mode),e.key===`5`&&(G.setMode(I.ISOMETRIC),window.__camMode=G.mode),e.key===`6`&&(G.setMode(I.DIMETRIC),window.__camMode=G.mode),e.key===`ArrowLeft`&&(G.pan(-1,0),e.preventDefault()),e.key===`ArrowRight`&&(G.pan(1,0),e.preventDefault()),e.key===`ArrowUp`&&(G.pan(0,1),e.preventDefault()),e.key===`ArrowDown`&&(G.pan(0,-1),e.preventDefault()),e.key===`0`&&(Nr=!Nr,Fe.value=+!!Nr,window.__vector=Nr),(e.key===`w`||e.key===`W`)&&(Y.cycle(),window.__weather=Y.kind),(e.key===`k`||e.key===`K`)&&(Fn=(Fn+1)%Pn.length,window.__season=Pn[Fn]),(e.key===`g`||e.key===`G`)&&(kn=Math.random()*1e9|0,zn()),(e.key===`c`||e.key===`C`)&&(An=(An+1)%Xe.length,zn()),(e.key===`h`||e.key===`H`)&&(Rn=!Rn,window.__shadows=Rn),(e.key===`p`||e.key===`P`)&&(Mr=!Mr),(e.key===`b`||e.key===`B`)&&(ir=rr[(rr.indexOf(ir)+1)%rr.length],window.__era=ir,ar()),(e.key===`t`||e.key===`T`)&&K.cyclePreset(),e.key===`[`&&K.nudge(-.5),e.key===`]`&&K.nudge(.5),e.key===`9`&&(K.toggleAuto(),window.__auto=K.auto),e.key===`Escape`&&(xr?wr():br()),(e.key===`o`||e.key===`O`)&&(Z===`city`?yr():br()),(e.key===`f`||e.key===`F`)&&Z!==`city`&&Dr(),(e.key===`m`||e.key===`M`)&&vr&&vr.toggle()});var Pr=window.matchMedia(`(prefers-reduced-motion: reduce)`);K.setReducedMotion(Pr.matches),Pr.addEventListener(`change`,e=>K.setReducedMotion(e.matches));var Fr=new ve,Ir=new k,$=!1,Lr=!1,Rr=0,zr=0,Br=.005,Vr=(e,t)=>{Ir.x=e/window.innerWidth*2-1,Ir.y=-(t/window.innerHeight)*2+1},Hr=0,Ur=0,Wr=0;function Gr(){return Fr.setFromCamera(Ir,G.camera),Fr.intersectObject(J.group,!0)[0]?new k(Ir.x*.5+.5,Ir.y*.5+.5):null}function Kr(){Fr.setFromCamera(Ir,X.camera);let e=Fr.intersectObjects(X.interactables,!0)[0];if(!e)return null;let t=e.object;for(;t&&!t.userData.role;)t=t.parent;return t?t.userData.role:null}H.domElement.addEventListener(`contextmenu`,e=>e.preventDefault()),H.domElement.addEventListener(`mousedown`,e=>{e.button===0&&($=Z===`city`,Vr(e.clientX,e.clientY),Hr=e.clientX,Ur=e.clientY,Wr=performance.now()),e.button===2&&(Lr=!0,Rr=e.clientX,zr=e.clientY)}),window.addEventListener(`mousemove`,e=>{$&&Vr(e.clientX,e.clientY),Lr?(G.orbit(-(e.clientX-Rr)*Br,-(e.clientY-zr)*Br),Rr=e.clientX,zr=e.clientY):Z===`city`&&!$?(Vr(e.clientX,e.clientY),H.domElement.style.cursor=Gr()?`pointer`:`default`):Z===`office`&&(Vr(e.clientX,e.clientY),H.domElement.style.cursor=Kr()?`pointer`:`default`)}),window.addEventListener(`mouseup`,e=>{let t=Math.hypot(e.clientX-Hr,e.clientY-Ur)<6&&performance.now()-Wr<350;if($&&Z===`city`&&t){Vr(e.clientX,e.clientY);let t=Gr();t&&yr(t)}else if(Z===`office`&&t&&!xr){Vr(e.clientX,e.clientY);let t=Kr();t===`laptop`?Cr():t===`phone`?Tr():t===`cat`?X.petCat():t===`tank`&&X.feedFish()}$=!1,Lr=!1}),H.domElement.addEventListener(`wheel`,e=>{e.preventDefault(),G.zoomBy(Math.exp(e.deltaY*.0015))},{passive:!1});var qr=0,Jr=(e,t)=>[(e.clientX+t.clientX)/2,(e.clientY+t.clientY)/2],Yr=(e,t)=>Math.hypot(e.clientX-t.clientX,e.clientY-t.clientY),Xr=!1;H.domElement.addEventListener(`touchstart`,e=>{e.touches.length===1&&($=Z===`city`,Vr(e.touches[0].clientX,e.touches[0].clientY),Hr=e.touches[0].clientX,Ur=e.touches[0].clientY,Wr=performance.now(),Xr=!1),e.touches.length===2&&($=!1,Lr=!0,[Rr,zr]=Jr(e.touches[0],e.touches[1]),qr=Yr(e.touches[0],e.touches[1]))},{passive:!1}),H.domElement.addEventListener(`touchmove`,e=>{if(e.preventDefault(),e.touches.length===1)Vr(e.touches[0].clientX,e.touches[0].clientY),Math.hypot(e.touches[0].clientX-Hr,e.touches[0].clientY-Ur)>8&&(Xr=!0);else if(e.touches.length===2){let[t,n]=Jr(e.touches[0],e.touches[1]);G.orbit(-(t-Rr)*Br,-(n-zr)*Br),Rr=t,zr=n;let r=Yr(e.touches[0],e.touches[1]);qr>0&&G.zoomBy(qr/r),qr=r}},{passive:!1}),window.addEventListener(`touchend`,e=>{if(!Xr&&performance.now()-Wr<350&&(!e.touches||e.touches.length===0)){if(Z===`city`){let e=Gr();e&&yr(e)}else if(Z===`office`&&!xr){let e=Kr();e===`laptop`?Cr():e===`phone`?Tr():e===`cat`?X.petCat():e===`tank`&&X.feedFish()}}$=!1,Lr=!1,qr=0,e.touches&&e.touches.length===1&&($=!0)});var Zr=new ee;Zr.connect(document);var Qr=0,$r=performance.now();function ei(){if(Q===1||Q===2)return{kind:`none`};if(Q===7)return{kind:`pixel`};if(Q===8)return{kind:`toon`};let e=G.styleT;return window.__styleT=e,e>=jr?{kind:`pixel`}:e<=Ar?{kind:`toon`}:{kind:`blend`,blend:u.smoothstep(e,Ar,jr)}}var ti=ln?null:document.querySelector(`.hint`);if(ln){let e=document.querySelector(`.hint`);e&&(e.style.display=`none`)}var ni=ti?ti.textContent:``,ri=``,ii=``;function ai(e){!ti||e===ri||(ri=e,ti.textContent=`${ni} · ${ii} · ${e}`)}function oi(){ii=`seed ${J.state.seed} · ${J.state.profile.name}`,window.__profile=J.state.profile.key,ri=``}oi();function si(){Zr.update();let e=Math.min(Zr.getDelta(),.1);G.update(e),wn.material.uniforms.uTime.value=Zr.getElapsed(),Jn.uniforms.uTime.value=Zr.getElapsed(),K.update(e),J.key.position.copy(K.sunDir).multiplyScalar(Ln),J.key.color.copy(K.sunColor),J.key.intensity=K.sunIntensity,J.fill.color.copy(K.hemiSky),J.fill.groundColor.copy(K.hemiGround),Dn.value=K.windowGlow;let t=Y.overcast;J.key.intensity*=1-.5*t,J.key.color.lerp(fn,.45*t),J.fill.intensity=1+.7*t;let n=u.smoothstep(K.sunDir.y,.06,.34),r=u.lerp(.28,1,1-K.windowGlow),i=Rn?n*r:0;J.key.shadow.intensity=.72*i,Le.value=.52*i;let a=1-K.windowGlow;Ie.setRGB(u.lerp(.46,1,a),u.lerp(.52,1,a),u.lerp(.74,1,a)),Jn.uniforms.uExposure.value=K.exposure,sr.uniforms.uToonGain.value=K.toonGain,H.setClearColor(K.horizon,1),er(K.t),ai(K.clock),window.__t=K.t,Mn.update(e,Zr.getElapsed(),K),J.update(Zr.getElapsed()),Y.update(e,Zr.getElapsed()),bn.uniforms.uRainCount.value=Y.rainDropCount;let o=Y.fog*(1-a);W.fog.density=Y.fog*pn,hn.copy(K.horizon).lerp(mn,.85*o),W.fog.color.copy(hn),H.setClearColor(hn,1),ze.value=Y.fog,wn.material.uniforms.uFogAmt.value=.7*Y.fog,L.value=Y.snow,R.value=Y.cloud*.55,Re.x+=e*.018,Re.y+=e*.009,Be.value+=(Pn[Fn]-Be.value)*Math.min(1,e*1.5),Nn.update(e,Zr.getElapsed(),K,Y);let s=ei(),c=s.kind===`toon`?1:s.kind===`blend`?1-s.blend:0;Tn.uniforms.uChromaScale.value=u.lerp(1,.5,c),Qr++;let l=performance.now();l-$r>=1e3&&(window.__fps=Qr,Qr=0,$r=l);let d=0;if($&&Z===`city`){Fr.setFromCamera(Ir,G.camera);let e=Fr.intersectObject(En)[0];e&&e.uv&&(bn.uniforms.uMouse.value.copy(e.uv),d=.06)}bn.uniforms.uMouseStrength.value=d;let[f,p,m]=_n;bn.uniforms.uPrev.value=f.texture,bn.uniforms.uCurr.value=p.texture,H.setRenderTarget(m),H.render(vn,yn),_n=[p,m,f],Tn.uniforms.uHeight.value=_n[1].texture,gr+=(+(Z===`office`||Z===`diving-in`)-gr)*Math.min(1,e*_r),Z===`diving-in`&&gr>.992&&(gr=1,Z=`office`,window.__scene=Z),Z===`diving-out`&&gr<.008&&(gr=0,Z=`city`,window.__scene=Z),Z===`city`?kr(s,null):(X.update(e,Zr.getElapsed(),K),X.tier===`basement`?(H.setRenderTarget(fr),H.render(X.vignette.scene,X.vignette.camera)):Or(ur,dr),Z===`office`?(H.setRenderTarget(null),H.render(X.scene,X.camera)):(kr(s,pr),H.setRenderTarget(mr),H.render(X.scene,X.camera),hr.uniforms.uT.value=gr,lr(hr,null))),requestAnimationFrame(si)}var ci={at:(e,t)=>{Vr(e,t),$=!0},stop:()=>{$=!1}};function li(){let e=window.__style||(Q===1?`raw`:Q===2?`filmic`:`auto`);return{lesson:23,clock:K.clock,style:(Nr?`vec-`:``)+e,profile:J.state.profile.key,weather:Y.kind,scene:Z}}Mt({renderer:H,rig:G,sunRig:K,poke:ci,getState:li,office:{pet:()=>X.petCat(),feed:()=>X.feedFish(),laptop:()=>Cr(),closeLaptop:()=>wr(),travel:()=>Tr(),fitout:()=>Dr()}});var ui=e=>window.dispatchEvent(new KeyboardEvent(`keydown`,{key:e})),di={cam:e=>ui({iso:`5`,dimetric:`6`,persp:`4`}[e]),style:e=>{e===`vector`?(Nr||ui(`0`),(Q===7||Q===8)&&ui(`2`)):e===`pixel`?ui(`7`):e===`toon`&&ui(`8`)},city:()=>ui(`C`),shuffle:()=>ui(`G`),weather:()=>ui(`W`),season:()=>ui(`K`),office:()=>ui(`o`),time:e=>K.goTo(e),auto:()=>ui(`9`)};vr=Ft({controls:di,state:()=>({cam:{4:`persp`,5:`iso`,6:`dimetric`}[G.mode],style:Q===7?`pixel`:Q===8?`toon`:`vector`,auto:K.auto,t:K.t,weather:Y.kind,season:Fn,office:Z!==`city`}),show:cn.get(`ui`)!==`0`&&!cn.has(`capture`),coarse:window.matchMedia&&window.matchMedia(`(pointer: coarse)`).matches});var fi=cn.get(`cam`);fi&&[`iso`,`dimetric`,`persp`].includes(fi)&&di.cam(fi);var pi=cn.get(`style`);[`vector`,`pixel`,`toon`].includes(pi)&&di.style(pi);var mi=cn.get(`t`);mi!==null&&mi!==``&&!Number.isNaN(parseFloat(mi))&&K.goTo(parseFloat(mi));var hi=cn.get(`time`);hi&&K.goTo({dawn:.25,noon:.5,dusk:.75,night:0}[hi]??.5);var gi=cn.get(`weather`);[`clear`,`rain`,`snow`,`fog`].includes(gi)&&(Y.setKind(gi),window.__weather=Y.kind);var _i=cn.get(`office`);(_i===`1`||_i===`corner`||_i===`basement`)&&(_i===`basement`&&Er(`basement`),Z=`office`,gr=1,window.__scene=Z),si(),window.addEventListener(`resize`,()=>{G.setViewport(window.innerWidth,window.innerHeight),H.setSize(window.innerWidth,window.innerHeight);let e=H.getDrawingBufferSize(new k);xn.setSize(e.x,e.y),Vn.setSize(e.x,e.y),Hn.setSize(e.x,e.y),Un.setSize(e.x,e.y),Wn.setSize(e.x,e.y),pr.setSize(e.x,e.y),mr.setSize(e.x,e.y),X.camera.aspect=window.innerWidth/window.innerHeight,X.camera.updateProjectionMatrix(),Tn.uniforms.uResolution.value.set(e.x,e.y),Jn.uniforms.uResolution.value.set(e.x,e.y),$n.uniforms.uResolution.value.set(e.x,e.y),tr.uniforms.uResolution.value.set(e.x,e.y),sr.uniforms.uResolution.value.set(e.x,e.y)});