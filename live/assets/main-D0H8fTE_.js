import{i as e,o as t,r as n,s as r,t as i}from"./pixelkit-BUU5BhST.js";import{$ as a,A as o,B as s,C as c,D as l,E as u,F as d,G as f,H as p,I as m,J as h,K as g,L as _,M as v,N as y,O as b,P as x,Q as S,R as C,S as w,T,U as E,V as D,W as O,X as k,Z as A,a as ee,b as te,c as ne,d as re,f as ie,g as ae,h as oe,i as j,j as se,k as ce,l as le,m as ue,n as de,o as fe,q as pe,r as M,s as me,t as he,u as N,v as ge,w as P,x as _e,y as F,z as ve}from"./three-D31t4A6b.js";var ye=Math.atan(1/Math.SQRT2),be=Math.atan(.5),xe=Math.PI/4,I={PERSPECTIVE:4,ISOMETRIC:5,DIMETRIC:6},Se=.12,Ce=1.45,we=4,Te=40,Ee=1.5,De=16,Oe=6,ke=22,Ae=3.5,je=11,Me=(e,t,n)=>e+(t-e)*(1-Math.exp(-8*n)),Ne=(e,t)=>e+Math.PI*2*Math.round((t-e)/(Math.PI*2));function Pe({aspect:e,fov:t=48,near:n=.1,far:r=100,target:i=new S(0,.8,0),azimuth:a=xe,elevation:o=.52,distance:s=12,zoom:c=5.5}={}){let l=new d(t,e,n,r),f=new y(-1,1,1,-1,n,r),p=I.PERSPECTIVE,m=e,h={azimuth:a,elevation:o,distance:s,zoom:c,target:i.clone()},g={azimuth:a,elevation:o,distance:s,zoom:c,target:i.clone()},_=!1,v=()=>p===I.PERSPECTIVE?l:f;function b(e){e!==p&&(p=e,p===I.ISOMETRIC||p===I.DIMETRIC?(h.elevation=p===I.ISOMETRIC?ye:be,h.azimuth=Ne(xe,g.azimuth),_=!0):_=!1)}function x(e,t){h.azimuth+=e,_||(h.elevation=u.clamp(h.elevation+t,Se,Ce))}function C(e){p===I.PERSPECTIVE?h.distance=u.clamp(h.distance*e,we,Te):h.zoom=u.clamp(h.zoom*e,Ee,De)}function w(e,t){let n=h.azimuth,r=p===I.PERSPECTIVE?h.distance*.04:h.zoom*.08,i=new S(Math.cos(n),0,-Math.sin(n)),a=new S(-Math.sin(n),0,-Math.cos(n));h.target.addScaledVector(i,e*r),h.target.addScaledVector(a,t*r)}function T(e,t){m=e/t,l.aspect=m,l.updateProjectionMatrix()}function E(e){g.azimuth=Me(g.azimuth,h.azimuth,e),g.elevation=Me(g.elevation,h.elevation,e),g.distance=Me(g.distance,h.distance,e),g.zoom=Me(g.zoom,h.zoom,e),g.target.x=Me(g.target.x,h.target.x,e),g.target.y=Me(g.target.y,h.target.y,e),g.target.z=Me(g.target.z,h.target.z,e);let t=Math.cos(g.elevation),n=Math.sin(g.elevation),r=Math.cos(g.azimuth),i=Math.sin(g.azimuth),a=v();if(a.position.set(g.target.x+g.distance*t*i,g.target.y+g.distance*n,g.target.z+g.distance*t*r),a.lookAt(g.target),a.isOrthographicCamera){let e=g.zoom,t=e*m;a.left=-t,a.right=t,a.top=e,a.bottom=-e,a.updateProjectionMatrix()}}return{get camera(){return v()},get mode(){return p},get styleT(){return p===I.PERSPECTIVE?u.clamp((g.distance-Oe)/(ke-Oe),0,1):u.clamp((g.zoom-Ae)/(je-Ae),0,1)},setMode:b,orbit:x,zoomBy:C,pan:w,setViewport:T,update:E}}var Fe={value:0},Ie=new N(`#ffffff`),Le={value:0},Re={value:0},ze={value:0},Be=new A,Ve={value:0},He={value:0},Ue=`
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
`;function We(e){e.uniforms.uVector=Fe,e.uniforms.uVecTint={value:Ie},e.uniforms.uVecShadow=Le,e.uniforms.uSnow=Re,e.uniforms.uCloud=ze,e.uniforms.uCloudOff={value:Be},e.uniforms.uFogCharm=Ve}function Ge(e){return e.replace(`#include <fog_fragment>`,`
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
  `)}function Ke(e){return e.replace(`#include <common>`,`#include <common>
varying vec3 vVecN;
varying vec3 vVecP;
varying vec2 vWorldXZ;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
  vVecN = normal;
  vVecP = position;
  vWorldXZ = (modelMatrix * vec4(position, 1.0)).xz;`)}function qe(e){return e.replace(`#include <shadowmap_pars_fragment>`,`#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>`)}var Je=`col *= mix(1.0, getShadowMask(), uVecShadow);`;function Ye(e,{color:t,id:n,windowGlow:r,winColors:i=[`#ffb852`,`#8cd9ff`],litFrac:a=.55}={}){let o=[0,1,2].map(e=>new N(i[e]??i[i.length-1]));return e.customProgramCacheKey=()=>`lgr-vec-tower`,e.onBeforeCompile=e=>{We(e),e.uniforms.uWindowGlow=r,e.uniforms.uWinId={value:n},e.uniforms.uVecColor={value:new N(t)},e.uniforms.uWinA={value:o[0]},e.uniforms.uWinB={value:o[1]},e.uniforms.uWinC={value:o[2]},e.uniforms.uWinLit={value:a},e.vertexShader=Ke(e.vertexShader),e.fragmentShader=Ge(qe(e.fragmentShader.replace(`#include <common>`,`#include <common>
        uniform float uWindowGlow;
        uniform float uWinId;
        uniform vec3  uVecColor;
        uniform vec3  uWinA; uniform vec3 uWinB; uniform vec3 uWinC;
        uniform float uWinLit;
        ${Ue}
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
          ${Je}                                  // the sun's shadow darkens the body
          vec3 wcol; vec2 w = winTerms(wcol);
          vec3 glass = vec3(0.17, 0.23, 0.34);          // dark glass-blue panes (day)
          col = mix(col, glass, w.x * 0.85);
          col += w.x * w.y * wcol * uWindowGlow * 1.5;  // …windows EMIT (unshadowed) at night
          gl_FragColor = vec4(col, diffuseColor.a);
        }`)))},e}function L(e,{color:t=null,glow:n=null,glowDay:r=0,glowNight:i=1,windowGlow:a=null,season:o=!1}={}){let s=t===null,c=n!==null&&a!==null;return e.customProgramCacheKey=()=>`lgr-vec|`+(s?`d`:`c`)+(c?`g`:``)+(o?`s`:``),e.onBeforeCompile=e=>{We(e),s||(e.uniforms.uVecColor={value:new N(t)}),c&&(e.uniforms.uGlow={value:new N(n)},e.uniforms.uGlowDay={value:r},e.uniforms.uGlowNight={value:i},e.uniforms.uWindowGlow=a),o&&(e.uniforms.uSeason=He),e.vertexShader=Ke(e.vertexShader);let l=s?`diffuseColor.rgb`:`uVecColor`,u=o?`seasonShift(${l})`:l,d=(s?``:`uniform vec3 uVecColor;
`)+(c?`uniform vec3 uGlow; uniform float uGlowDay; uniform float uGlowNight; uniform float uWindowGlow;
`:``)+(o?`uniform float uSeason;
vec3 seasonShift(vec3 c){
  c = mix(c, vec3(0.86, 0.46, 0.13), smoothstep(0.40, 0.70, uSeason));   // → autumn orange
  c = mix(c, vec3(0.46, 0.33, 0.20), smoothstep(0.75, 1.00, uSeason));   // → bare brown
  return c;
}
`:``),f=c?`uGlow * mix(uGlowDay, uGlowNight, uWindowGlow)`:`vec3(0.0)`,p=Ge(qe(e.fragmentShader.replace(`#include <common>`,`#include <common>
`+d+Ue).replace(`#include <opaque_fragment>`,`#include <opaque_fragment>
        if (uVector > 0.5) {
          vec3 col = vecShade(${u});
          ${Je}                            // the sun's shadow darkens the flat tier…
          gl_FragColor = vec4(col + ${f}, diffuseColor.a);  // …but the night glow stays lit
        }`)));c&&(p=p.replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>\n  totalEmissiveRadiance += ${f};`)),e.fragmentShader=p},e}function Xe(e){let t=e>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Ze(e){let t=Xe(e);return{next:t,range:(e,n)=>e+(n-e)*t(),int:(e,n)=>e+Math.floor(t()*(n-e+1)),pick:e=>e[Math.floor(t()*e.length)],chance:e=>t()<e}}var Qe=[{key:`manhattan`,name:`Manhattan`,towers:[`#EDE3C8`,`#D9B98A`,`#B5562F`,`#A8C8E8`,`#2E3F5C`],ground:`#7CC455`,street:`#9AA0A6`,sidewalk:`#C8CCD0`,park:`#5DB347`,water:`#29A8D8`,shopfronts:[`#C04A3A`,`#3A7AC0`,`#C09A2A`],glass:`#7FA8CC`,winColors:[`#ffd27a`,`#9ad6ff`],hMax:4.6,sigma:.36,roofRate:.35,pSplit:.6,nightLit:.55,roofTint:null,landmarks:[`empireState`,`chrysler`,`liberty`]},{key:`paris`,name:`Paris`,towers:[`#E8DCC0`,`#F2EAD6`,`#E0D2B4`],ground:`#8CC46A`,street:`#A8A29A`,sidewalk:`#D4CEC2`,park:`#6DB35A`,water:`#3FA8C8`,shopfronts:[`#C04A3A`,`#3A6B5A`,`#7A5AC0`],glass:`#5A6B7A`,winColors:[`#ffdca0`,`#ffcaa0`],hMax:1.5,sigma:.9,roofRate:.15,pSplit:.75,nightLit:.45,roofTint:`#6A7886`,landmarks:[`eiffel`,`arcDeTriomphe`,`sacreCoeur`]},{key:`neoTokyo`,name:`Neo-Tokyo`,towers:[`#2A3038`,`#3A4250`,`#252B36`,`#4A4456`],ground:`#3A4A42`,street:`#5A6068`,sidewalk:`#7A8088`,park:`#2E5E46`,water:`#0E6878`,shopfronts:[`#E8483A`,`#5AE8E0`,`#E85AA0`],glass:`#5AE8E0`,winColors:[`#5AE8E0`,`#E85AA0`,`#E8E06A`],hMax:5.2,sigma:.42,roofRate:.6,pSplit:.6,nightLit:.7,roofTint:null,landmarks:[`tokyoTower`,`pagoda`,`neonBillboard`]}],$e=Qe.map(e=>e.key),et=.3,tt=1.9,nt=2.45,rt=.12,it=.6;function at(e){(Array.isArray(e)?e:[e]).forEach(e=>e&&e.dispose&&e.dispose())}function ot({seed:e=1,profileIndex:t=0,landmarkFactory:n=null,windowGlow:r}){let i=new F,a=new F,s=new F;a.raycast=()=>{},s.raycast=()=>{},i.add(a,s);let c=new oe(16773594,3);c.position.set(.45,.6,-.65).multiplyScalar(10);let l=new _e(7313331,2762272,1);i.add(c,l);let u=0,d=[],p={seed:e,profileIndex:t,profile:Qe[t],extent:0,meshCount:0};function m(e,t,n,r){let i=new b(new j(e,.04,t),L(new o({color:r,roughness:.95,flatShading:!0}),{color:r}));return i.position.y=n,i.userData.ground=!0,i}function h(e,t){for(let e of a.children)e.geometry&&e.geometry.dispose(),at(e.material);a.clear();for(let e of s.children)e.traverse(e=>{e.isMesh&&at(e.material)});s.clear(),d.length=0,u=0;let r=Ze(e),i=Qe[t],c=5/2*nt,l=7.675;p={seed:e,profileIndex:t,profile:i,extent:l,meshCount:0};let f=l*2,h=new b(new j(f,2,f),L(new o({color:i.ground,roughness:.9,flatShading:!0}),{color:i.ground}));h.position.y=et-1,h.userData.ground=!0,a.add(h),a.add(m(f-it,f-it,.32,i.street));let x=[];for(let e=0;e<6;e++)for(let t=0;t<6;t++)x.push([e,t]);let S=new Set,C=Math.max(1,Math.round(x.length*.08));for(;S.size<C;)S.add(r.int(0,x.length-1));let w=r.range(-2.45*.6,nt*.6),T=r.range(-2.45*.6,nt*.6),E=Math.hypot(c,c),D=[];if(x.forEach(([e,t],n)=>{let o=(e-5/2)*nt,s=(t-5/2)*nt;if(a.add(m(tt,tt,.32999999999999996,i.sidewalk).translateX(o).translateZ(s)),S.has(n)){a.add(m(tt-rt*2,tt-rt*2,.35,i.park).translateX(o).translateZ(s));let e=r.int(3,5);for(let t=0;t<e;t++)y(o+r.range(-.6,.6),s+r.range(-.6,.6),i,r);return}let c=tt-rt*2,l=r.chance(i.pSplit)?2:1,u=r.chance(i.pSplit)?2:1,d=c/l,f=c/u;for(let e=0;e<l;e++)for(let t=0;t<u;t++){let n=o-c/2+d*(e+.5),a=s-c/2+f*(t+.5),l=Math.max(.6,d-.1),u=Math.max(.6,f-.1),p=Math.hypot(n-w,a-T)/E,m=Math.exp(-(p*p)/(2*i.sigma*i.sigma)),h=Math.max(.5,.5+(i.hMax-.5)*m*r.range(.75,1.25));h>i.hMax*.5&&Math.min(l,u)>=.7&&D.push({lx:n,lz:a,fw:l,fd:u,h,r:p}),g(n,a,l,u,h,i,r)}}),n&&n.ready){D.sort((e,t)=>e.r-t.r);let e=[],t=i.landmarks;for(let r=0;r<t.length&&D.length;r++){let a=null;for(let t of D)if(e.every(e=>Math.hypot(e.lx-t.lx,e.lz-t.lz)>nt*.9)){a=t;break}a||=D[0],e.push(a),_(a.lx,a.lz);let o=i.hMax*n.heightFactor(t[r]),c=n.make(t[r],{x:a.lx,z:a.lz,w:a.fw,d:a.fd,h:o,plinthTop:et});if(c){s.add(c);let e=new M().setFromObject(c);v(e.min.x-.15,e.max.x+.15,e.min.z-.15,e.max.z+.15)}}}a.traverse(e=>{e.isMesh&&(e.userData.ground?(e.castShadow=!1,e.receiveShadow=!0):e.material&&e.material.isMeshBasicMaterial?(e.castShadow=!1,e.receiveShadow=!1):(e.castShadow=!0,e.receiveShadow=!0))}),s.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),p.meshCount=a.children.length+s.children.length;let O=0;for(let e of a.children){let t=e.position;O=(Math.imul(O,16777619)^(Math.round(t.x*100)*2654435761^Math.round(t.y*100)*40503^Math.round(t.z*100)*2246822519))>>>0}p.sig=O,window.__city={seed:e,profile:i.key,meshes:p.meshCount,sig:O}}function g(e,t,n,i,s,c,l){let p=Ye(new o({flatShading:!0,roughness:.7,metalness:.05}),{color:l.pick(c.towers),id:++u,windowGlow:r,winColors:c.winColors,litFrac:c.nightLit}),m=new b(new j(n,s,i),p);if(m.position.set(e,et+s/2,t),m.userData.lot=[e,t],a.add(m),c.roofTint){let r=L(new o({color:c.roofTint,roughness:.85,flatShading:!0}),{color:c.roofTint}),l=new b(new j(n*1.02,.08,i*1.02),r);l.position.set(e,et+s+.04,t),l.userData.lot=[e,t],a.add(l)}if(s<1.4){let r=l.pick(c.shopfronts),s=new b(new j(n*1.04,.18,i*1.04),L(new o({color:r,roughness:.8,flatShading:!0}),{color:r}));s.position.set(e,.39,t),s.userData.lot=[e,t],a.add(s)}if(s>c.hMax*.45&&l.chance(c.roofRate)){let r=l.chance(.5)?new b(new j(n*.4,.18,i*.4),L(new o({color:`#9a9a9a`,flatShading:!0}),{color:`#9a9a9a`})):new b(new ie(n*.18,n*.18,.22,10),L(new o({color:`#b9bec4`,flatShading:!0}),{color:`#b9bec4`}));if(r.position.set(e+l.range(-.1,.1),et+s+.11,t+l.range(-.1,.1)),r.userData.lot=[e,t],a.add(r),l.chance(.25)){let n=new b(new f(.05,6,5),new ce({color:`#ff3b30`,transparent:!0,opacity:1}));n.position.set(e,et+s+.26,t),n.userData.lot=[e,t],n.raycast=()=>{},a.add(n),d.push({mesh:n,phase:l.range(0,6.28)})}}}function _(e,t){for(let n=a.children.length-1;n>=0;n--){let r=a.children[n];r.userData.lot&&Math.abs(r.userData.lot[0]-e)<1e-4&&Math.abs(r.userData.lot[1]-t)<1e-4&&(r.geometry&&r.geometry.dispose(),at(r.material),a.remove(r))}for(let e=d.length-1;e>=0;e--)d[e].mesh.parent||d.splice(e,1)}function v(e,t,n,r){for(let i=a.children.length-1;i>=0;i--){let o=a.children[i];o.userData.lot&&o.position.x>=e&&o.position.x<=t&&o.position.z>=n&&o.position.z<=r&&(o.geometry&&o.geometry.dispose(),at(o.material),a.remove(o))}}function y(e,t,n,r){let i=new N(n.park),s=(n,s)=>{let c=i.clone().offsetHSL(0,0,r.range(-.06,.06)).getStyle(),l=new b(new f(n,7,6),L(new o({color:c,flatShading:!0}),{color:c,season:!0}));l.scale.y=.7,l.position.set(e,et+s,t),l.userData.lot=null,a.add(l)},c=new b(new j(.05,.18,.05),L(new o({color:`#6b4a2a`,flatShading:!0}),{color:`#6b4a2a`}));c.position.set(e,.39,t),a.add(c),s(.22,.28),s(.16,.46)}function x(e){for(let t of d)t.mesh.material.opacity=.35+.65*(.5+.5*Math.sin(e*3+t.phase))}return h(e,t),{group:i,key:c,fill:l,update:x,generate:h,get state(){return p},get extent(){return p.extent},get waterColor(){return p.profile.water},profiles:Qe}}var st=Math.PI*2,ct=.7,lt=90,ut=[{name:`night`,sun:`#4a6f9e`,intensity:.35,hemiSky:`#26344f`,hemiGround:`#0c1018`,horizon:`#1e2942`,sky:`#36486e`,exposure:.95,outline:`#101a30`,window:1,toonGain:2.6},{name:`dawn`,sun:`#ff9e54`,intensity:2.4,hemiSky:`#8a7686`,hemiGround:`#2a1f1a`,horizon:`#b8512c`,sky:`#ffb070`,exposure:1.05,outline:`#241826`,window:.3,toonGain:2},{name:`noon`,sun:`#fff4e0`,intensity:4.6,hemiSky:`#9cb8cc`,hemiGround:`#33302a`,horizon:`#5e7689`,sky:`#aacadd`,exposure:1.18,outline:`#0b0a08`,window:0,toonGain:1.7},{name:`dusk`,sun:`#ff6b35`,intensity:2,hemiSky:`#7a566a`,hemiGround:`#281a18`,horizon:`#b0432a`,sky:`#ff8a5a`,exposure:1.05,outline:`#1f1420`,window:.4,toonGain:2}],dt=e=>e-Math.floor(e),ft=(e,t,n)=>e+(t-e)*n,pt=(e,t,n)=>e+(t-e)*(1-Math.exp(-6*n));function mt({t:e=.5}={}){let t=e,n=e,r=!1,i=!1,a=ut.map(e=>({name:e.name,sun:new N(e.sun),hemiSky:new N(e.hemiSky),hemiGround:new N(e.hemiGround),horizon:new N(e.horizon),sky:new N(e.sky),outline:new N(e.outline),intensity:e.intensity,exposure:e.exposure,window:e.window,toonGain:e.toonGain})),o=new S(0,1,0),s=new N(`#fff4e0`),c=new N(`#6f97b3`),l=new N(`#2a2620`),u=new N(`#3a4a57`),d=new N(`#7da3bd`),f=new N(`#0b0a08`),p=new N(`#000000`),m=3,h=1,g=0,_=1.7,v=new S;function y(e){let t=dt(e)*4,n=Math.floor(t)%4,r=(n+1)%4,i=t-Math.floor(t),y=a[n],b=a[r];s.lerpColors(y.sun,b.sun,i),c.lerpColors(y.hemiSky,b.hemiSky,i),l.lerpColors(y.hemiGround,b.hemiGround,i),u.lerpColors(y.horizon,b.horizon,i),d.lerpColors(y.sky,b.sky,i),f.lerpColors(y.outline,b.outline,i),m=ft(y.intensity,b.intensity,i),h=ft(y.exposure,b.exposure,i),g=ft(y.window,b.window,i),_=ft(y.toonGain,b.toonGain,i),p.setRGB(.045*g,.075*g,.14*g);let x=dt(e)*st-Math.PI/2,S=Math.cos(x),C=Math.sin(x);v.set(S,C*Math.cos(ct),C*Math.sin(ct)),v.y>=0?o.copy(v):o.copy(v).negate()}return y(t),{sunDir:o,sunColor:s,hemiSky:c,hemiGround:l,horizon:u,sky:d,outline:f,toonFloor:p,get sunIntensity(){return m},get exposure(){return h},get windowGlow(){return g},get toonGain(){return _},get t(){return dt(t)},get auto(){return r},get clock(){let e=Math.round(dt(t)*24*60)%1440;return`${String(Math.floor(e/60)).padStart(2,`0`)}:${String(e%60).padStart(2,`0`)}`},cyclePreset(){n=(Math.floor(t*4+1e-4)+1)/4},nudge(e){n+=e/24},goTo(e){n=e},toggleAuto(){r=!r},setReducedMotion(e){i=e},update(e){r&&!i&&(n+=e/lt),t=pt(t,n,e),y(t)}}}function ht(e,t){let n=[];for(let r=0;r<16;r++){let i=r/16*Math.PI*2;n.push(new S(Math.cos(i)*e,t,Math.sin(i)*e))}return new me(n,!0,`catmullrom`,.5)}function gt(e,t){let n=new E;return n.moveTo(-e+t,-e),n.lineTo(e-t,-e),n.quadraticCurveTo(e,-e,e,-e+t),n.lineTo(e,e-t),n.quadraticCurveTo(e,e,e-t,e),n.lineTo(-e+t,e),n.quadraticCurveTo(-e,e,-e,e-t),n.lineTo(-e,-e+t),n.quadraticCurveTo(-e,-e,-e+t,-e),n}function _t(e,t,n){let r=gt(e,t).getSpacedPoints(40).map(e=>new S(e.x,n,e.y));return r.pop(),new me(r,!0,`catmullrom`,.5)}function vt(e){let t=(t,n)=>Math.exp(-((e-t)*(e-t))/(2*n*n)),n=Math.max(t(.33,.05),t(.75,.06)),r=u.smoothstep(e,.24,.3)*(1-u.smoothstep(e,.8,.88));return u.clamp(.15+.55*r+.45*n,.12,1)}function yt(e,t){let n=(e/8.5+t*.43)%1;return n<.66?1:n<.72?1-(n-.66)/.06:n<.95?0:(n-.95)/.05}function bt({plinthTop:e=.3,extent:t=4}={}){let n=new F,r=e,i=gt(t-.05,.7);i.holes.push(gt(t-.78,.45));let a=new b(new O(i),L(new o({color:`#1b1d22`,roughness:.95,metalness:0}),{color:`#bcc0c6`}));a.rotation.x=-Math.PI/2,a.position.y=r+.01,a.receiveShadow=!0,n.add(a);let s=[_t(t-.28,.6,r+.02),_t(t-.5,.55,r+.02)],c=[0,0],l=new w(new j(.42,.32,.86),L(new o({flatShading:!0,roughness:.45,metalness:.35})),7);l.castShadow=!0,l.receiveShadow=!1,l.frustumCulled=!1,l.raycast=()=>{};let d={taxi:`#f4c430`,bus:`#c0392b`,civ1:`#d8dde2`,civ2:`#9aa7b4`,civ3:`#6b7785`},f=[];for(let e=0;e<7;e++){let t=e===1,n=e===0;f.push({lane:e%2,phase:e/7,speed:t?.55:.85+e%3*.12,lenZ:t?1.5:1,color:n?d.taxi:t?d.bus:[d.civ1,d.civ2,d.civ3][e%3]})}let p=new N;f.forEach((e,t)=>l.setColorAt(t,p.set(e.color)));let h=new w(new fe(.04,.1,3,6),L(new o({flatShading:!0,roughness:.8})),16);h.castShadow=!0,h.receiveShadow=!1,h.frustumCulled=!1,h.raycast=()=>{};let g=ht(t-.72,e),_=[];for(let e=0;e<16;e++)_.push({phase:e/16,speed:.12+e%4*.02,dir:e%2?1:-1});let y=new N;_.forEach((e,t)=>h.setColorAt(t,y.set([`#caa`,`#9ab`,`#bba`,`#ab9`][t%4])));let x=new m(1,.6),C=new ce({color:`#fff0c0`,transparent:!0,opacity:1,blending:2,depthWrite:!1}),T=new w(x,C,7);T.frustumCulled=!1,T.raycast=()=>{},n.add(l,h,T);let E=new v,D=new S,k=new S;function A(t,n,i){let a=i?i.t:.5,o=i?i.windowGlow:0;for(let e=0;e<s.length;e++)c[e]+=t*yt(n,e);let d=Math.max(1,Math.round(vt(a)*7));for(let e=0;e<7;e++){let t=f[e];if(e>=d){E.scale.setScalar(0),E.position.set(0,-50,0),E.updateMatrix(),l.setMatrixAt(e,E.matrix),T.setMatrixAt(e,E.matrix);continue}let n=t.lane===0?1:-1,i=(t.phase+n*t.speed*c[t.lane]*.12+1e3)%1;s[t.lane].getPointAt(i,D),s[t.lane].getTangentAt(i,k);let a=Math.atan2(k.x*n,k.z*n);E.position.set(D.x,D.y+.16,D.z),E.rotation.set(0,a,0),E.scale.set(1,1,t.lenZ),E.updateMatrix(),l.setMatrixAt(e,E.matrix),s[t.lane].getPointAt((i+n*.012+1)%1,D),E.position.set(D.x,r+.04,D.z),E.rotation.set(-Math.PI/2,0,a),E.scale.setScalar(+(o>.05)),E.updateMatrix(),T.setMatrixAt(e,E.matrix)}l.instanceMatrix.needsUpdate=!0,T.instanceMatrix.needsUpdate=!0,C.opacity=u.clamp(o*1.7,0,1);let p=Math.max(2,Math.round(vt(a)*16));for(let t=0;t<16;t++){let r=_[t];if(t>=p){E.scale.setScalar(0),E.position.set(0,-50,0),E.updateMatrix(),h.setMatrixAt(t,E.matrix);continue}let i=(r.phase+r.dir*r.speed*n*.02+1e3)%1;g.getPointAt(i,D),g.getTangentAt(i,k);let a=Math.sin(n*6+r.phase*30)*.015;E.position.set(D.x,e+.09+a,D.z),E.rotation.set(0,Math.atan2(k.x*r.dir,k.z*r.dir),Math.sin(n*6+r.phase*30)*.06),E.scale.setScalar(1),E.updateMatrix(),h.setMatrixAt(t,E.matrix)}h.instanceMatrix.needsUpdate=!0}return{group:n,update:A}}var xt=[`empireState`,`chrysler`,`liberty`,`eiffel`,`arcDeTriomphe`,`sacreCoeur`,`tokyoTower`,`pagoda`,`neonBillboard`],St={empireState:1.25,chrysler:1.1,liberty:.55,eiffel:3.2,arcDeTriomphe:1.5,sacreCoeur:1.75,tokyoTower:1.35,pagoda:.5,neonBillboard:.9};function Ct(e){let t=()=>new o({flatShading:!0,roughness:.7,metalness:.1}),n=(n,r={})=>r.windows?Ye(t(),{color:n,id:e.id(),windowGlow:e.windowGlow,winColors:e.winColors,litFrac:e.litFrac}):L(t(),{color:n,glow:r.glow??null,glowDay:r.glowDay??0,glowNight:r.glowNight??1,windowGlow:r.glow?e.windowGlow:null});return{box:(e,t,r,i,a={})=>new b(new j(e,t,r),n(i,a)),cyl:(e,t,r,i,a={})=>new b(new ie(e,t,r,a.seg||12),n(i,a)),cone:(e,t,r,i={})=>new b(new re(e,t,i.seg||8),n(r,i)),sphere:(e,t,r={})=>new b(new f(e,r.seg||12,r.seg2||8),n(t,r)),lathe:(e,t,r={})=>new b(new c(e.map(e=>new A(e[0],e[1])),r.seg||4),n(t,r))}}var R=(e,t,n,r)=>(e.position.set(t,n,r),e),wt=[`#7FB0E0`,`#E07FB0`,`#7FE0A0`,`#E0C97F`,`#9FE07F`,`#7FE0E0`,`#FF8C42`,`#E0E07F`,`#C97FE0`,`#E07F7F`,`#7F9FE0`,`#E0483A`],Tt={empireState(e,t){let n=`#E8E0CF`;e.add(R(t.box(.42,.18,.42,n,{windows:!0}),0,.09,0)),e.add(R(t.box(.34,.16,.34,n,{windows:!0}),0,.26,0)),e.add(R(t.box(.26,.14,.26,n,{windows:!0}),0,.41,0)),e.add(R(t.box(.19,.34,.19,n,{windows:!0}),0,.65,0)),e.add(R(t.box(.13,.06,.13,n,{windows:!0}),0,.85,0));let r=wt[new Date().getMonth()];e.add(R(t.cyl(.03,.045,.12,n,{seg:10,glow:r,glowNight:1.85}),0,.94,0)),e.add(R(t.cone(.012,.07,n,{seg:8}),0,1.04,0))},chrysler(e,t){let n=`#C9CED4`;e.add(R(t.box(.22,.55,.22,`#9AA7B4`,{windows:!0}),0,.275,0));let r=.55;for(let i=0;i<5;i++){let a=.14-i*.024,o=.07;e.add(R(t.cyl(a*.7,a,o,n,{seg:8,glow:`#dfeaff`,glowNight:.5}),0,r+o/2,0)),r+=o}e.add(R(t.cone(.018,.16,n,{seg:8}),0,r+.08,0))},liberty(e,t){let n=`#B9B4A6`,r=`#4FA890`;e.add(R(t.box(.42,.16,.42,n),0,.08,0)),e.add(R(t.box(.3,.2,.3,n),0,.26,0)),e.add(R(t.cyl(.1,.15,.42,r,{seg:10}),0,.57,0)),e.add(R(t.box(.11,.1,.11,r),0,.83,0));for(let n=0;n<7;n++){let i=(n/6-.5)*Math.PI*1.1;e.add(R(t.cone(.012,.1,r,{seg:5}),Math.sin(i)*.1,.92,Math.cos(i)*.06-.02))}let i=R(t.cyl(.025,.03,.34,r,{seg:8}),.14,.98,0);i.rotation.z=.35,e.add(i),e.add(R(t.box(.06,.06,.06,r,{glow:`#ffd060`,glowDay:.6,glowNight:1.2}),.2,1.16,0)),e.add(R(t.cone(.04,.09,`#ffcf66`,{seg:6,glow:`#ffd060`,glowDay:.7,glowNight:1.3}),.2,1.24,0))},eiffel(e,t){let n=`#6E5C4C`,r=[[.2,0],[.13,.16],[.085,.33],[.055,.5],[.035,.66],[.02,.85],[0,.92]];e.add(t.lathe(r,n,{seg:4}));let i=t.lathe(r,n,{seg:4});i.rotation.y=Math.PI/4,e.add(i),e.add(R(t.box(.26,.025,.26,n),0,.33,0)),e.add(R(t.box(.14,.02,.14,n),0,.66,0)),e.add(R(t.cone(.01,.1,n,{seg:6}),0,.97,0))},arcDeTriomphe(e,t){let n=`#D9D0C1`,r=.58,i=.5,a=.34,s=new E;s.moveTo(-.58/2,0),s.lineTo(r/2,0),s.lineTo(r/2,i),s.lineTo(-.58/2,i),s.lineTo(-.58/2,0);let c=new x,l=.15,u=.22;c.moveTo(-.15,0),c.lineTo(-.15,u),c.absarc(0,u,l,Math.PI,0,!0),c.lineTo(l,0),c.lineTo(-.15,0),s.holes.push(c);let d=new ae(s,{depth:a,bevelEnabled:!1});d.translate(0,0,-.34/2),d.computeVertexNormals(),e.add(new b(d,L(new o({color:n,flatShading:!0}),{color:n}))),e.add(R(t.box(r*1.06,.08,a*1.06,n),0,.54,0))},sacreCoeur(e,t){let n=`#F1EEE6`;e.add(R(t.box(.5,.26,.4,n),0,.13,0));let r=(r,i,a,o)=>{e.add(R(t.cyl(a*.9,a,i,n,{seg:12}),r,o,0));let s=R(t.sphere(a,n,{seg:12}),r,o+i/2,0);s.scale.y=1.5,e.add(s)};r(0,.22,.15,.4),r(-.2,.1,.07,.33),r(.2,.1,.07,.33)},tokyoTower(e,t){let n=`#F25822`,r=`#EDEDED`,i=0;for(let a=0;a<9;a++){let o=a/9,s=(a+1)/9,c=.19*(1-o)+.03*o,l=.19*(1-s)+.03*s,u=.085,d=a%2?r:n;e.add(R(t.cyl(l,c,u,d,{seg:4,glow:n,glowDay:0,glowNight:.7}),0,i+u/2,0)),i+=u}e.add(R(t.box(.22,.02,.22,n,{glow:n,glowNight:.7}),0,.28,0)),e.add(R(t.box(.12,.02,.12,r),0,.5,0)),e.add(R(t.cone(.012,.16,r,{seg:6,glow:`#ff6a2a`,glowNight:.9}),0,i+.08,0))},pagoda(e,t){let n=0;for(let r=0;r<5;r++){let i=.42-r*.06,a=.11;e.add(R(t.box(i,a,i,`#B23A2C`,{windows:r<4}),0,n+a/2,0)),e.add(R(t.box(i*1.34,.03,i*1.34,`#7A3B2A`),0,n+a+.015,0)),n+=.16999999999999998}e.add(R(t.cyl(.012,.012,.1,`#E0C040`,{seg:6}),0,n+.05,0)),e.add(R(t.sphere(.03,`#E0C040`,{seg:8,glow:`#ffe680`,glowNight:.8}),0,n+.12,0))},neonBillboard(e,t){let n=`#20242C`;e.add(R(t.box(.3,1,.3,n,{windows:!0}),0,.5,0));let r=[`#5AE8E0`,`#E85AA0`,`#E8E06A`],i=(n,r,i,a,o,s,c)=>{let l=R(t.box(n,r,.02,i,{glow:i,glowDay:.6,glowNight:1.1}),a,o,s);l.rotation.y=c,e.add(l)};i(.22,.34,r[0],0,.75,.16,0),i(.16,.5,r[1],.16,.5,0,Math.PI/2),i(.2,.22,r[2],0,.34,-.16,0),e.add(R(t.cone(.01,.14,n,{seg:6,glow:`#E85AA0`,glowDay:.4,glowNight:1}),0,1.08,0))}};function Et(e,t){let n=new F;return Tt[e](n,Ct(t)),n}var Dt=``+new URL(`building-skyscraper-d-CapD2Zqe.glb`,import.meta.url).href,Ot=``+new URL(`building-n-hdv8kKtN.glb`,import.meta.url).href,kt=``+new URL(`building-g-CsTB1qH9.glb`,import.meta.url).href,At=``+new URL(`colormap-CK8fW2HB.png`,import.meta.url).href,jt={skyscraper:{url:Dt,color:`#9cc1dd`,fill:.92},midrise:{url:Ot,color:`#c9a07a`,fill:.96},setback:{url:kt,color:`#d9c7a0`,fill:.9}};function Mt({windowGlow:e}){let t=new T;t.setURLModifier(e=>e.includes(`colormap.png`)?At:e);let n=new he(t),r={},i=!1,a=Promise.all(Object.entries(jt).map(async([e,t])=>{r[e]=(await n.loadAsync(t.url)).scene})).then(()=>{i=!0,window.__landmarksReady=!0}).catch(e=>console.error(`landmark models failed:`,e)),o=9e3;function s(t,n,i={}){let a,s;if(xt.includes(t))a=Et(t,{windowGlow:e,winColors:i.winColors,litFrac:i.litFrac,id:()=>++o}),s=1;else{let e=r[t],n=jt[t];if(!e||!n)return null;a=e.clone(!0),s=n.fill}a.updateMatrixWorld(!0);let c=new M().setFromObject(a).getSize(new S);a.scale.setScalar(n.h*s/c.y),a.updateMatrixWorld(!0);let l=new M().setFromObject(a),u=l.getCenter(new S);return a.position.x+=n.x-u.x,a.position.z+=n.z-u.z,a.position.y+=n.plinthTop-l.min.y,xt.includes(t)?a.traverse(e=>{e.isMesh&&(e.castShadow=!1,e.raycast=()=>{})}):a.traverse(n=>{if(!n.isMesh)return;n.castShadow=!1,n.raycast=()=>{};let r=n=>Ye(n.clone(),{color:jt[t].color,id:++o,windowGlow:e,winColors:i.winColors,litFrac:i.litFrac});n.material=Array.isArray(n.material)?n.material.map(r):r(n.material)}),a}return{make:s,whenReady:a,heightFactor:e=>St[e]??1,get ready(){return i}}}var Nt=[`video/mp4;codecs=avc1.42E01E`,`video/mp4`,`video/webm;codecs=vp9`,`video/webm`];function Pt({renderer:e,rig:t,sunRig:n,poke:r,getState:i}){let a=e.domElement,o=new URLSearchParams(window.location.search),s=e=>{let t=i();return`lgr-${t.lesson}-${String(t.clock||``).replace(`:`,``)}-${t.style}.${e}`},c=(e,t)=>{let n=URL.createObjectURL(e),r=document.createElement(`a`);r.href=n,r.download=t,document.body.appendChild(r),r.click(),r.remove(),setTimeout(()=>URL.revokeObjectURL(n),1e3)};function l(){a.toBlob(e=>{e&&(c(e,s(`png`)),window.__lastStill=e.size)},`image/png`)}let u=()=>Nt.find(e=>window.MediaRecorder&&MediaRecorder.isTypeSupported(e))||``,d=Ft(),f=null,p=[],m=!1;function h(){if(m)return;let e=u(),t=a.captureStream(60);f=new MediaRecorder(t,e?{mimeType:e,videoBitsPerSecond:12e6}:{}),p=[],f.ondataavailable=e=>{e.data&&e.data.size&&p.push(e.data)},f.onstop=()=>{let e=new Blob(p,{type:f.mimeType});c(e,s(f.mimeType.includes(`mp4`)?`mp4`:`webm`)),window.__lastVideo=e.size},f.start(),m=!0,window.__recording=!0,d.show()}function g(){m&&(f.stop(),m=!1,window.__recording=!1,d.hide())}let _=()=>m?g():h(),v=e=>new Promise(t=>setTimeout(t,e)),y=e=>window.dispatchEvent(new KeyboardEvent(`keydown`,{key:e}));async function b(){let e=a.clientWidth,t=a.clientHeight,n=e*.26,i=t*.74;for(let t=0;t<=10;t++)r.at(n+t*e*.028,i+Math.sin(t*.7)*16),await v(100);r.stop()}async function x(e){if(e.keys)for(let t of e.keys)y(t),await v(70);e.zoom&&t.zoomBy(e.zoom),e.orbit&&t.orbit(e.orbit[0],e.orbit[1]),e.timeTo!==void 0&&n.goTo(e.timeTo),e.ripple&&await b(),e.waitMs&&await v(e.waitMs)}let S={tour:[{keys:[`6`,`0`],waitMs:600},{zoom:.72,waitMs:1700},{ripple:!0,waitMs:2400},{orbit:[.55,0],waitMs:1700},{timeTo:0,waitMs:3e3},{timeTo:.5,waitMs:1500},{keys:[`7`],waitMs:1e3},{zoom:1.5,waitMs:1400},{keys:[`B`],waitMs:2e3},{keys:[`B`],waitMs:2e3},{keys:[`B`],waitMs:2e3},{keys:[`B`],waitMs:2e3},{keys:[`B`],waitMs:2e3},{keys:[`8`],waitMs:900},{zoom:.65,waitMs:1200},{ripple:!0,waitMs:2600},{keys:[`7`],waitMs:700},{keys:[`B`],waitMs:300},{keys:[`B`],waitMs:900},{zoom:1.4,waitMs:2600}],daycycle:[{keys:[`6`,`0`],waitMs:700},{timeTo:.75,waitMs:2600},{timeTo:1,waitMs:2600},{timeTo:1.25,waitMs:2600},{timeTo:1.5,waitMs:2600},{timeTo:1.5,waitMs:800}],cities:[{keys:[`6`,`0`],waitMs:500},{timeTo:.78,waitMs:2800},{keys:[`C`],waitMs:3e3},{keys:[`C`],waitMs:3e3},{keys:[`C`],waitMs:2e3}]};async function C(e){let t=S[e];if(t){window.__director=e;for(let e of t)await x(e);window.__director=null}}async function w(e){await v(1600),h(),await C(e),await v(400),g(),window.__captureDone=!0}window.addEventListener(`keydown`,e=>{(e.key===`s`||e.key===`S`)&&l(),(e.key===`r`||e.key===`R`)&&_()});let T=o.get(`capture`);return T&&S[T]&&w(T),window.__capture={still:l,toggleRec:_,run:C,sequences:Object.keys(S)},window.__capture}function Ft(){let e=document.createElement(`div`);return e.textContent=`● REC`,e.style.cssText=`position:fixed;top:14px;right:16px;z-index:2;font:bold 12px ui-monospace,monospace;color:#ff3b30;letter-spacing:.12em;text-shadow:0 1px 3px #000;display:none;`,document.body.appendChild(e),{show:()=>{e.style.display=`block`},hide:()=>{e.style.display=`none`}}}var It=`
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
`;function Lt({controls:e,state:t,show:n,coarse:r}){if(typeof document>`u`)return;let i=document.createElement(`style`);i.textContent=It,document.head.appendChild(i);let a=document.createElement(`div`);a.className=`vui`;let o=document.createElement(`div`);o.className=`vui-info`,o.innerHTML=`KEYS · 4/5/6 cam · 0 vector · 7/8 pixel/toon · B era · T time · [ ] scrub · 9 auto · C city · G shuffle · W weather · K season · click a building / O office · Esc exit · M hide UI · S still · R rec · H shadows · P theme · drag water to ripple`;let s=(e,t,n)=>{let r=document.createElement(`button`);return r.textContent=e,n&&(r.title=n),r.addEventListener(`click`,t),r},c=e=>{let t=document.createElement(`div`);return t.className=`seg`,{seg:t,btns:e.map(([n,r])=>{let i=s(n,()=>e.find(e=>e[1]===r)[2](),n);return i.dataset.val=r,t.appendChild(i),i})}};a.appendChild(s(`City`,()=>e.city(),`Next city profile (C)`)),a.appendChild(s(`Shuffle`,()=>e.shuffle(),`New random seed (G)`)),a.appendChild(O());let l={clear:`Clear`,rain:`Rain`,snow:`Snow`,fog:`Fog`},u=[`Spring`,`Summer`,`Autumn`,`Winter`],d=s(`Clear`,()=>e.weather(),`Cycle weather: clear→rain→snow→fog (W)`),f=s(`Spring`,()=>e.season(),`Cycle season: spring→summer→autumn→winter (K)`),p=s(`Office`,()=>e.office(),`Dive into / exit the office (O · Esc)`);a.append(d,f,p,O());let m=c([[`Vector`,`vector`,()=>e.style(`vector`)],[`Pixel`,`pixel`,()=>e.style(`pixel`)],[`Toon`,`toon`,()=>e.style(`toon`)]]);a.appendChild(m.seg),a.appendChild(O());let h=document.createElement(`input`);h.type=`range`,h.min=`0`,h.max=`1`,h.step=`0.01`,h.title=`Time of day`;let g=!1;h.addEventListener(`pointerdown`,()=>{g=!0}),h.addEventListener(`pointerup`,()=>{g=!1}),h.addEventListener(`input`,()=>e.time(parseFloat(h.value)));let _=s(`▶`,()=>e.auto(),`Play/pause day cycle (9)`),v=document.createElement(`div`);v.style.cssText=`display:flex;align-items:center;gap:6px;`;let y=document.createElement(`span`);y.className=`lbl`,y.textContent=`Day`,v.append(y,h,_),a.appendChild(v),a.appendChild(O());let b=c([[`Iso`,`iso`,()=>e.cam(`iso`)],[`Dim`,`dimetric`,()=>e.cam(`dimetric`)],[`3D`,`persp`,()=>e.cam(`persp`)]]);a.appendChild(b.seg),a.appendChild(s(`ⓘ`,()=>o.classList.toggle(`open`),`All keys`)),a.appendChild(O()),a.appendChild(s(`⌄`,()=>E(!0),`Hide controls — watch unobstructed (M)`));let x=document.createElement(`button`);x.className=`vui-show`,x.innerHTML=`⌃ Controls`,x.title=`Show controls (M)`,x.addEventListener(`click`,()=>E(!1)),document.body.append(o,a,x);let S=n,C=!1;E(!1);function w(){let e=t();m.btns.forEach(t=>t.classList.toggle(`on`,t.dataset.val===e.style)),b.btns.forEach(t=>t.classList.toggle(`on`,t.dataset.val===e.cam)),d.textContent=l[e.weather]||`Clear`,d.classList.toggle(`on`,e.weather!==`clear`),f.textContent=u[e.season]||`Spring`,f.classList.toggle(`on`,(e.season||0)>0),p.textContent=e.office?`Exit`:`Office`,p.classList.toggle(`on`,!!e.office),_.textContent=e.auto?`❚❚`:`▶`,_.classList.toggle(`on`,e.auto),g||(h.value=String(e.t))}w();let T=setInterval(w,200);function E(e){if(!S){a.style.display=`none`,x.classList.remove(`on`),o.classList.remove(`open`);return}C=e,a.style.display=e?`none`:`flex`,x.classList.toggle(`on`,e),e&&o.classList.remove(`open`)}function D(){E(!C)}return{toggle:D,setHidden:E,refresh:w,destroy(){clearInterval(T),a.remove(),o.remove(),x.remove(),i.remove()}};function O(){let e=document.createElement(`div`);return e.className=`sep`,e}}var Rt=[`clear`,`rain`,`snow`,`fog`];function zt({extent:e=7}={}){let t=new F;t.raycast=()=>{};let n=e+2,r=.25,i=(e,t)=>e+Math.random()*(t-e),a=new w(new m(.015,.5),new ce({color:`#a9bdd6`,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),600);a.frustumCulled=!1,a.raycast=()=>{};let o=new Float32Array(600*3),s=new Float32Array(600);for(let e=0;e<600;e++)o[e*3]=i(-n,n),o[e*3+1]=i(r,11),o[e*3+2]=i(-n,n),s[e]=i(9,14);let c=new w(new m(.07,.07),new ce({color:`#f3f7ff`,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),700);c.frustumCulled=!1,c.raycast=()=>{};let l=new Float32Array(700*3),u=new Float32Array(700),d=new Float32Array(700);for(let e=0;e<700;e++)l[e*3]=i(-n,n),l[e*3+1]=i(r,11),l[e*3+2]=i(-n,n),u[e]=i(0,6.28),d[e]=i(.6,1.2);t.add(a,c);let f=Array.from({length:8},()=>new S),p=0,h=`clear`,g=0,_=0,y=0,b=0,x=0,C=new v,T=(e,t,n,r)=>e+(t-e)*Math.min(1,n*r);function E(e){Rt.includes(e)&&(h=e)}function D(){h=Rt[(Rt.indexOf(h)+1)%Rt.length]}function O(e,t){let m=h===`rain`,v=h===`snow`,S=h===`fog`,w=h!==`clear`;g=T(g,+!!w,e,1.4),_=T(_,+!!w,e,1.2),y=T(y,+!!S,e,.9),x=T(x,w&&!S?1:0,e,1),b=T(b,+!!v,e,v?.22:.5);let E=m?g:0,D=Math.round(600*E);for(let t=0;t<600;t++){if(t>=D){C.position.set(0,-50,0),C.scale.setScalar(0),C.updateMatrix(),a.setMatrixAt(t,C.matrix);continue}o[t*3+1]-=s[t]*e,o[t*3]+=e*1.1,o[t*3+1]<r&&(o[t*3]=i(-n,n),o[t*3+1]=11,o[t*3+2]=i(-n,n)),C.position.set(o[t*3],o[t*3+1],o[t*3+2]),C.rotation.set(0,0,0),C.scale.set(1,1,1),C.updateMatrix(),a.setMatrixAt(t,C.matrix)}a.instanceMatrix.needsUpdate=!0,a.material.opacity=.55*E,p=m?Math.round(8*g):0;for(let e=0;e<p;e++)f[e].set(Math.random(),Math.random(),.05*g);let O=Math.round(700*(v?g:0));for(let a=0;a<700;a++){if(a>=O){C.position.set(0,-50,0),C.scale.setScalar(0),C.updateMatrix(),c.setMatrixAt(a,C.matrix);continue}l[a*3+1]-=d[a]*e;let o=Math.sin(t*1.5+u[a])*.5;l[a*3+1]<r&&(l[a*3]=i(-n,n),l[a*3+1]=11,l[a*3+2]=i(-n,n)),C.position.set(l[a*3]+o,l[a*3+1],l[a*3+2]),C.rotation.set(0,0,0),C.scale.setScalar(1),C.updateMatrix(),c.setMatrixAt(a,C.matrix)}c.instanceMatrix.needsUpdate=!0,c.material.opacity=.9*(v?g:0)}return{group:t,update:O,cycle:D,setKind:E,rainDrops:f,get kind(){return h},get intensity(){return g},get overcast(){return _},get fog(){return y},get snow(){return b},get cloud(){return x},get rainDropCount(){return p},poolCounts:{rain:600,snow:700}}}function z(e,t,n,r,{rough:i=.62,metal:a=0,x:s=0,y:c=0,z:l=0}={}){let u=new b(new j(e,t,n),new o({color:r,roughness:i,metalness:a}));return u.position.set(s,c,l),u}function Bt({tier:e=`corner`}={}){let t=new D,n=new d(43,1,.1,100),r=new S(0,1.62,4.35);n.position.copy(r),n.lookAt(0,1.12,-1);let i=new F;t.add(i);let a=`#3a2618`,s=`#5b3d27`,c=z(11,.2,11,`#3c2a1c`,{rough:.5,y:-.1});i.add(c);let l=z(11,.2,11,`#241a13`,{rough:.9,y:3});i.add(l);function u(e){let t=new F,n=z(.2,3.2,8,`#4a3322`,{rough:.7,x:e*3.6,y:1.5,z:0});t.add(n);for(let n of[.9,2.1])t.add(z(.22,.06,8,a,{x:e*3.59,y:n,z:0}));let r=new b(new m(1.5,1),new o({map:Wt(e),roughness:.8}));r.position.set(e*3.49,1.7,.4),r.rotation.y=-e*Math.PI/2;let i=z(.06,1.18,1.68,`#2a1c10`,{x:e*3.52,y:1.7,z:.4});return t.add(i,r),t}i.add(u(-1),u(1));let f=new m(3,2.5),p=new ce({color:`#ffffff`,toneMapped:!1}),v=new ce({color:`#ffffff`,toneMapped:!1}),y=1.55,x=new b(f,p);x.position.set(-1.06,y,-2.64),x.rotation.y=Math.PI/4;let C=new b(f,v);C.position.set(1.06,y,-2.64),C.rotation.y=-Math.PI/4,i.add(x,C),i.add(z(.08,2.7,.08,a,{x:0,y,z:-2.2}));for(let[e,t,n]of[[-1.06,-2.64,Math.PI/4],[1.06,-2.64,-Math.PI/4]]){let r=new F;r.add(z(3.05,.09,.09,a,{y:1.3})),r.add(z(3.05,.09,.09,a,{y:-1.25})),r.add(z(.09,2.6,.09,a,{x:-1.5})),r.position.set(e,y,t),r.rotation.y=n,i.add(r)}i.add(z(5.4,.5,.3,s,{x:0,y:.25,z:-2.1500000000000004}));let w=new F;w.add(z(3.4,.12,1.5,`#6e4a30`,{rough:.32,y:.86,z:1.5})),w.add(z(3.2,.78,1.36,s,{y:.46,z:1.5}));for(let e of[.66,.4,.14])w.add(z(.9,.2,.04,`#4a3120`,{x:1.05,y:e,z:2.2}));w.add(z(.12,.04,.04,`#caa15a`,{x:1.05,y:.66,z:2.23,metal:.6})),i.add(w);let T=new F;T.add(z(.06,.5,.06,`#2a1c10`,{x:-1.15,y:1.15,z:1.6}));let E=new b(new re(.22,.26,16,1,!0),new o({color:`#c2802e`,roughness:.5,side:2,emissive:`#3a2208`,emissiveIntensity:.6}));E.position.set(-1.15,1.42,1.6),T.add(E);let O=new _(`#ffb15a`,7,7,1.8);O.position.set(-1.15,1.34,1.6),T.add(O),i.add(T);let k=new F;k.add(z(.62,.03,.42,`#1c1c20`,{y:.93,z:1.5,metal:.4,rough:.4}));let A=new b(new j(.62,.4,.025),new o({color:`#0a0c10`,emissive:`#2a4a6a`,emissiveIntensity:.7,roughness:.3}));A.position.set(0,1.14,1.31),A.rotation.x=-.32,k.add(A),k.userData.role=`laptop`,i.add(k);let ee=new F;ee.add(z(.26,.07,.34,`#15151a`,{x:1,y:.93,z:1.5})),ee.add(z(.3,.06,.08,`#101015`,{x:1,y:1,z:1.34})),ee.userData.role=`phone`,i.add(ee);let te=new _e(`#6a5238`,`#140d08`,.55);t.add(te);let ie=new g(`#ffd9a0`,9,9,.7,.5,1.2);ie.position.set(0,2.95,1.3),ie.target.position.set(0,.86,1.5),t.add(ie,ie.target),i.add(z(.4,.06,.4,`#1a130c`,{y:2.94,z:1.3}));let ae=new b(new ne(.16,20),new ce({color:`#ffe6b0`,toneMapped:!1}));ae.position.set(0,2.9,1.3),ae.rotation.x=Math.PI/2,i.add(ae);let oe=Vt(!1),se=Vt(!0),le=.62,ue=1.32,de=1.22,fe=1.78,M=new pe(new h({map:oe,transparent:!0,depthWrite:!1}));M.scale.set(le,le,1),M.position.set(ue,de,fe),M.userData.role=`cat`,i.add(M);let me=new pe(new h({map:Ut(),transparent:!0,depthWrite:!1,opacity:0}));me.scale.set(.3,.3,1),me.raycast=()=>{},i.add(me);let he=0;function N(){he=1.3}let ge=O.intensity,P=A.material.emissiveIntensity;function ve(e,t,i){let a=(i?i.windowGlow:0)>.55;M.material.map=a?se:oe,he>0&&(he=Math.max(0,he-e));let o=he>0?Math.sin((1.3-he)/1.3*Math.PI):0,s=a?.012*Math.sin(t*1.2):.03*Math.sin(t*2.4);M.scale.set(le,le*(1+s+.12*o),1),M.position.y=de+.06*o,me.material.opacity=o,me.position.set(ue,1.72+.5*(1-he/1.3),fe),me.scale.setScalar(.22+.1*o),O.intensity=ge*(.97+.03*Math.sin(t*7)*Math.sin(t*2.3)),A.material.emissiveIntensity=P*(.85+.15*Math.sin(t*3.1+1)),n.position.set(r.x+Math.sin(t*.5)*.04,r.y+Math.sin(t*.7)*.02,r.z),n.lookAt(0,1.12,-1)}function ye(e){p.map=e,v.map=e,p.needsUpdate=!0,v.needsUpdate=!0}return{scene:t,camera:n,update:ve,setCityTexture:ye,petCat:N,interactables:[k,ee,M],get tier(){return e}}}function Vt(e){let t=document.createElement(`canvas`);t.width=t.height=128;let n=t.getContext(`2d`),r=`#e08a3c`,i=`#b96a26`,a=`#3a2410`;if(n.lineJoin=`round`,e){n.fillStyle=r,n.beginPath(),n.ellipse(64,78,44,26,0,0,7),n.fill(),n.fillStyle=i,n.beginPath(),n.ellipse(64,86,44,16,0,0,7),n.fill(),n.fillStyle=r,n.beginPath(),n.arc(36,70,20,0,7),n.fill(),n.fillStyle=r,Ht(n,24,56,34,44,42,58),Ht(n,40,54,50,44,54,60),n.strokeStyle=i,n.lineWidth=7,n.lineCap=`round`,n.beginPath(),n.moveTo(100,70),n.quadraticCurveTo(112,90,88,96),n.stroke(),n.strokeStyle=a,n.lineWidth=2.5,n.beginPath(),n.arc(30,70,5,.1,Math.PI-.1),n.stroke(),n.strokeStyle=i,n.lineWidth=3;for(let e of[60,74,88])n.beginPath(),n.moveTo(e,58),n.lineTo(e,70),n.stroke()}else{n.fillStyle=r,n.beginPath(),n.ellipse(64,86,30,34,0,0,7),n.fill(),n.fillStyle=`#f3c98a`,n.beginPath(),n.ellipse(64,92,14,22,0,0,7),n.fill(),n.strokeStyle=i,n.lineWidth=8,n.lineCap=`round`,n.beginPath(),n.moveTo(92,100),n.quadraticCurveTo(116,86,104,60),n.stroke(),n.fillStyle=r,n.beginPath(),n.arc(64,48,24,0,7),n.fill(),n.fillStyle=r,Ht(n,44,34,50,18,60,34),Ht(n,84,34,78,18,68,34),n.fillStyle=`#f0b0c0`,Ht(n,47,30,50,22,56,32),Ht(n,81,30,78,22,72,32),n.fillStyle=a,n.beginPath(),n.arc(55,47,3.4,0,7),n.arc(73,47,3.4,0,7),n.fill(),n.fillStyle=`#e06a7a`,Ht(n,61,54,67,54,64,58),n.strokeStyle=a,n.lineWidth=1.6;for(let e of[-2,3])n.beginPath(),n.moveTo(50,55+e),n.lineTo(34,53+e),n.moveTo(78,55+e),n.lineTo(94,53+e),n.stroke();n.strokeStyle=i,n.lineWidth=3;for(let e of[78,90,102])n.beginPath(),n.moveTo(50,e),n.lineTo(78,e),n.stroke()}let o=new ee(t);return o.colorSpace=s,o}function Ht(e,t,n,r,i,a,o){e.beginPath(),e.moveTo(t,n),e.lineTo(r,i),e.lineTo(a,o),e.closePath(),e.fill()}function Ut(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`);t.fillStyle=`#ff5a8a`,t.beginPath(),t.moveTo(32,52),t.bezierCurveTo(6,32,14,10,32,24),t.bezierCurveTo(50,10,58,32,32,52),t.fill();let n=new ee(e);return n.colorSpace=s,n}function Wt(e){let t=document.createElement(`canvas`);t.width=t.height=256;let n=t.getContext(`2d`),r=n.createLinearGradient(0,0,256,256);e<0?(r.addColorStop(0,`#6a3b1c`),r.addColorStop(1,`#caa15a`)):(r.addColorStop(0,`#3a4a6a`),r.addColorStop(1,`#a86a3a`)),n.fillStyle=r,n.fillRect(0,0,256,256),n.globalAlpha=.5;for(let e=0;e<5;e++)n.fillStyle=e%2?`#2a1c10`:`#e0c080`,n.fillRect(30+e*36,40+e%3*30,26,150);let i=new ee(t);return i.colorSpace=s,i}function Gt(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=(e,n,r)=>{let i=t.createRadialGradient(e,n,0,e,n,r);i.addColorStop(0,`rgba(255,255,255,0.95)`),i.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=i,t.beginPath(),t.arc(e,n,r,0,7),t.fill()};n(128*.42,128*.56,128*.26),n(128*.6,128*.5,128*.3),n(128*.5,128*.46,128*.22),n(128*.34,128*.54,128*.18),n(128*.7,128*.58,128*.18);let r=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5],i=t.getImageData(0,0,128,128),a=i.data;for(let e=0;e<128;e++)for(let t=0;t<128;t++){let n=(e*128+t)*4,i=a[n+3]/255,o=(r[e%4*4+t%4]+.5)/16-.5;a[n+3]=Math.max(0,Math.min(1,Math.floor(i*5+.5+o)/5))*255}t.putImageData(i,0,0);let o=new ee(e);return o.colorSpace=s,o}function Kt({extent:e=8,count:t=16}={}){let n=new F;n.raycast=()=>{};let r=Gt(),i=e+6,a=(e,t)=>e+Math.random()*(t-e),o=[];for(let e=0;e<t;e++){let e=new h({map:r,transparent:!0,depthWrite:!1,opacity:0,fog:!0}),t=new pe(e),s={sp:t,mat:e,wisp:Math.random(),x:a(-i,i),z:a(-i,i),hiY:a(4,6.8),loY:a(.6,2.2),w:a(3,5.6),h:a(1.7,3),speed:a(.25,.7),op:a(.6,1)};t.raycast=()=>{},o.push(s),n.add(t)}let s=new N,c=new N(`#ffffff`),l=new N(`#5b626e`);function u(e,t,n,r){let u=r?r.cloud:0,d=r?r.fog:0,f=Math.min(1,.4+.6*u+.5*d);s.copy(n.sky).lerp(c,.62),s.lerp(l,.6*u);for(let n=0;n<o.length;n++){let r=o[n],c=n/o.length<f;r.x+=r.speed*e*(.6+.8*u),r.x>i&&(r.x=-i,r.z=a(-i,i));let l=Math.min(qt(r.x,-i,-i+3),1-qt(r.x,i-3,i)),p=r.hiY*(1-d)+r.loY*d,m=1-.5*r.wisp,h=.72*Math.max(0,1-d-u)+1*u+.42*d,g=c?Math.max(0,h)*r.op*m*l:0;r.mat.opacity+=(g-r.mat.opacity)*Math.min(1,e*2.5),r.mat.color.copy(s);let _=r.w*(1+.6*d)*(1+.4*r.wisp),v=r.h*(1-.35*d);r.sp.scale.set(_,v,1),r.sp.position.set(r.x,p+Math.sin(t*.3+n)*.15,r.z)}}function d(e){r=e;for(let t of o)t.mat.map=e,t.mat.needsUpdate=!0}return{group:n,update:u,setTexture:d,get count(){return o.length}}}function qt(e,t,n){let r=Math.max(0,Math.min(1,(e-t)/(n-t)));return r*r*(3-2*r)}var Jt=`varying vec2 vUv;

void main() {
  
  
  
  vUv = uv;

  
  
  
  
  
  
  
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,Yt=`precision highp float;

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
}`,Xt=`precision highp float;

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
}`,Zt=`precision highp float;

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
}`,Qt=`precision highp float;

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
}`,$t=`const float CA_STRENGTH   = 0.0030;  
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
}`,en=`const float DITHER = 0.55;   

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
}`,tn=`precision highp float;

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
}`,nn=`precision highp float;

varying vec2 vUv;
uniform sampler2D uToon;   
uniform sampler2D uPixel;  
uniform float     uBlend;  

void main() {
  vec3 t = texture2D(uToon, vUv).rgb;
  vec3 p = texture2D(uPixel, vUv).rgb;
  gl_FragColor = vec4(mix(t, p, uBlend), 1.0);
}`,rn=`precision highp float;

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
}`,an=220,B=new URLSearchParams(window.location.search),on=B.get(`demo`)===`1`||B.has(`capture`);window.__demo=on;var sn={night:[`#0A0C16`,`#1C2236`,`#3A3A52`,`#5A5A78`,`#8A92B0`],dawn:[`#1A1008`,`#43281A`,`#7A4A30`,`#B07A4E`,`#E8A86A`],noon:[`#16100A`,`#3A2F1E`,`#6B563A`,`#937B54`,`#B89968`],dusk:[`#140A0A`,`#3E1E1A`,`#7A3828`,`#B85A36`,`#F0884A`]},cn={night:[`#020604`,`#06180E`,`#10401E`,`#1E9040`,`#7FE0FF`],dawn:[`#060603`,`#1A2410`,`#3A6B22`,`#6CC040`,`#FFC060`],noon:[`#050805`,`#0E2912`,`#1E6B2F`,`#3CF06A`,`#FFB000`],dusk:[`#080402`,`#241408`,`#6B4A12`,`#E0A030`,`#FF7030`]},V=new de({antialias:!0,preserveDrawingBuffer:!0});V.shadowMap.enabled=!0,V.shadowMap.type=1,V.setPixelRatio(Math.min(window.devicePixelRatio,2)),V.setSize(window.innerWidth,window.innerHeight),V.setClearColor(920327,1),document.body.appendChild(V.domElement);var H=V.getDrawingBufferSize(new A),U=new D;U.fog=new ge(10465470,0);var ln=new N(`#aeb6c0`),un=.062,dn=new N(`#74508f`),fn=new N,W=Pe({aspect:window.innerWidth/window.innerHeight}),G=mt({t:.5}),K=256,pn={type:te,format:C,minFilter:se,magFilter:se,wrapS:le,wrapT:le,depthBuffer:!1,stencilBuffer:!1},mn=[new a(K,K,pn),new a(K,K,pn),new a(K,K,pn)];for(let e of mn)V.setRenderTarget(e),V.clear();V.setRenderTarget(null);var hn=new D,gn=new y(-1,1,1,-1,0,1),_n=new p({vertexShader:r,fragmentShader:Xt,uniforms:{uCurr:{value:null},uPrev:{value:null},uTexel:{value:new A(1/K,1/K)},uMouse:{value:new A(-1,-1)},uMouseStrength:{value:0},uC2:{value:.25},uDamping:{value:.992},uRainCount:{value:0},uRainDrops:{value:Array.from({length:8},()=>new S)}}});hn.add(new b(new m(2,2),_n));var vn=new a(H.x,H.y,{minFilter:P,magFilter:P,depthBuffer:!0,stencilBuffer:!1});function yn(e){let t=document.createElement(`canvas`);t.width=t.height=1024;let n=t.getContext(`2d`);n.fillStyle=e?`#0c1418`:`#15110b`,n.fillRect(0,0,1024,1024),n.strokeStyle=e?`rgba(120,150,170,0.22)`:`rgba(184,153,104,0.30)`,n.lineWidth=2;for(let e=0;e<=1024;e+=64)n.beginPath(),n.moveTo(e,0),n.lineTo(e,1024),n.stroke(),n.beginPath(),n.moveTo(0,e),n.lineTo(1024,e),n.stroke();e||(n.fillStyle=`#B89968`,n.font=`bold 360px Georgia, serif`,n.textAlign=`center`,n.textBaseline=`middle`,n.fillText(`LGR`,512,470),n.font=`600 64px ui-monospace, monospace`,n.fillText(`WEB · STUDIO`,512,720));let r=new ee(t);return r.colorSpace=s,r}var bn=new b(new m(16,16),new ce({map:yn(on)}));bn.rotation.x=-Math.PI/2,bn.position.y=-.35,U.add(bn);var xn=new b(new m(40,24),new p({depthWrite:!1,vertexShader:Jt,fragmentShader:Yt,uniforms:{uTime:{value:0},uInk:{value:G.horizon},uGold:{value:G.sky},uFogColor:{value:fn},uFogAmt:{value:0},uFogCharm:Ve}}));xn.position.set(0,3,-8),U.add(xn);var Sn=new p({vertexShader:Zt,fragmentShader:Qt,uniforms:{uHeight:{value:null},uScene:{value:vn.texture},uTexel:{value:new A(1/K,1/K)},uResolution:{value:new A(H.x,H.y)},uDisplace:{value:.42},uNormalStrength:{value:22},uRefractStrength:{value:.06},uChromaScale:{value:1},uNormalMatrix:{value:new l},uLightDir:{value:G.sunDir},uInk:{value:new N(`#2A2218`)},uGold:{value:new N(`#B89968`)},uVector:Fe,uVecWater:{value:new N(`#1fb8d8`)},uVecTint:{value:Ie}}}),Cn=new b(new m(16,16,K-1,K-1),Sn);Cn.rotation.x=-Math.PI/2,Cn.updateMatrixWorld(!0),Sn.uniforms.uNormalMatrix.value.getNormalMatrix(Cn.matrixWorld),U.add(Cn);var wn={value:0},Tn=new URLSearchParams(window.location.search),En=(Tn.get(`city`)?Number(Tn.get(`city`)):0)||Math.random()*1e9|0,Dn=Math.max(0,$e.indexOf(Tn.get(`profile`)||`manhattan`)),On=Mt({windowGlow:wn}),q=ot({seed:En,profileIndex:Dn,landmarkFactory:On,windowGlow:wn});U.add(q.group);var kn=bt({plinthTop:.3,extent:q.extent});U.add(kn.group);var J=zt({extent:q.extent});U.add(J.group),_n.uniforms.uRainDrops.value=J.rainDrops;var An=Kt({extent:q.extent});U.add(An.group);var jn=[0,.33,.66,1],Mn=0;window.__season=jn[Mn],q.group.remove(q.key),U.add(q.key),q.key.castShadow=!0,q.key.shadow.mapSize.set(2048,2048),q.key.shadow.bias=-18e-5,q.key.shadow.normalBias=.028,U.add(q.key.target);function Nn(){let e=q.key.shadow.camera,t=q.extent+4.5;e.left=-t,e.right=t,e.top=t,e.bottom=-t,e.near=1,e.far=Pn*2,e.updateProjectionMatrix()}var Pn=24;Nn();var Fn=!0;window.__shadows=Fn;function In(){q.generate(En,Dn),Sn.uniforms.uVecWater.value.set(q.waterColor),Nn(),ei()}On.whenReady.then(()=>{In(),window.__cityReady=!0}),Sn.uniforms.uVecWater.value.set(q.waterColor);var Ln=new ue(H.x,H.y),Rn=new a(H.x,H.y,{minFilter:P,magFilter:P,depthBuffer:!0,stencilBuffer:!1,depthTexture:Ln}),zn=new a(H.x,H.y,{minFilter:P,magFilter:P,depthBuffer:!1,stencilBuffer:!1}),Bn=new a(H.x,H.y,{minFilter:P,magFilter:P,depthBuffer:!1,stencilBuffer:!1}),Vn=new a(H.x,H.y,{minFilter:P,magFilter:P,depthBuffer:!1,stencilBuffer:!1}),Hn=new D,Un=new y(-1,1,1,-1,0,1),Wn=new b(new m(2,2));Hn.add(Wn);var Gn=new p({vertexShader:r,fragmentShader:$t,uniforms:{uScene:{value:Rn.texture},uTime:{value:0},uResolution:{value:new A(H.x,H.y)},uGrain:{value:1},uChroma:{value:1},uExposure:{value:1}}}),Kn=5,qn=e=>{let t=e.map(e=>new N(e));for(;t.length<8;)t.push(new N(0,0,0));return t},Jn=[`night`,`dawn`,`noon`,`dusk`],Yn={inkgold:Jn.map(e=>qn(sn[e])),terminal:Jn.map(e=>qn(cn[e]))},Xn=new p({vertexShader:r,fragmentShader:en,uniforms:{uScene:{value:zn.texture},uResolution:{value:new A(H.x,H.y)},uPixelSize:{value:an},uPalette:{value:Yn.inkgold[2]},uPaletteB:{value:Yn.inkgold[2]},uPaletteBlend:{value:0},uPaletteSize:{value:Kn}}});function Zn(e){let t=Er?Yn.terminal:Yn.inkgold,n=e%1*4,r=Math.floor(n)%4;Xn.uniforms.uPalette.value=t[r],Xn.uniforms.uPaletteB.value=t[(r+1)%4],Xn.uniforms.uPaletteBlend.value=n-Math.floor(n)}var Qn=new p({vertexShader:r,fragmentShader:t,uniforms:{uScene:{value:zn.texture},uResolution:{value:new A(H.x,H.y)},uGridWidth:{value:160},uDither:{value:.55},uPalette:{value:e(i[`8-bit`].palette)},uPaletteSize:{value:1},uUsePalette:{value:1}}}),$n={};for(let t of n)$n[t]=i[t].palette?e(i[t].palette):null;var er=[`native`,...n],tr=`native`;window.__era=tr;function nr(){if(tr===`native`)return;let e=i[tr];Qn.uniforms.uGridWidth.value=e.gridWidth,Qn.uniforms.uDither.value=e.dither,Qn.uniforms.uUsePalette.value=+!!e.palette,e.palette&&(Qn.uniforms.uPalette.value=$n[tr],Qn.uniforms.uPaletteSize.value=e.palette.length)}var rr=()=>tr===`native`?Xn:Qn,ir=new p({vertexShader:r,fragmentShader:tn,uniforms:{uScene:{value:zn.texture},uDepth:{value:Ln},uResolution:{value:new A(H.x,H.y)},uBands:{value:4},uToonGain:{value:1.7},uToonGamma:{value:.6},uToonFloor:{value:G.toonFloor},uOutline:{value:G.outline},uNear:{value:.1},uFar:{value:100},uIsPerspective:{value:1}}}),ar=new p({vertexShader:r,fragmentShader:nn,uniforms:{uToon:{value:Bn.texture},uPixel:{value:Vn.texture},uBlend:{value:0}}});function or(e,t){Wn.material=e,V.setRenderTarget(t),V.render(Hn,Un)}var Y=Bt({tier:`corner`});Y.camera.aspect=window.innerWidth/window.innerHeight,Y.camera.updateProjectionMatrix();var sr=new d(55,1.4,.1,100);sr.position.set(2.2,3.4,11.5),sr.lookAt(0,2,0);var cr=new a(1024,720,{minFilter:P,magFilter:P,depthBuffer:!0,stencilBuffer:!1});Y.setCityTexture(cr.texture);var lr=new a(H.x,H.y,{minFilter:P,magFilter:P,depthBuffer:!1,stencilBuffer:!1}),ur=new a(H.x,H.y,{minFilter:P,magFilter:P,depthBuffer:!1,stencilBuffer:!1}),dr=new p({vertexShader:r,fragmentShader:rn,uniforms:{uCity:{value:lr.texture},uOffice:{value:ur.texture},uT:{value:0},uFocus:{value:new A(.5,.5)}}}),X=`city`,fr=0,pr=4.6;window.__scene=X;var mr=null;function hr(e){X===`city`&&(dr.uniforms.uFocus.value.copy(e||new A(.5,.5)),X=`diving-in`,window.__scene=X)}function gr(){X!==`office`&&X!==`diving-in`||(X=`diving-out`,window.__scene=X)}var _r=!1,vr=(()=>{if(typeof document>`u`)return{showLap(){},toast(){},flash(){}};let e=document.createElement(`style`);e.textContent=`
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
    </div></div>`;let n=document.createElement(`div`);n.className=`otoast`;let r=document.createElement(`div`);r.className=`oflash`,document.body.append(t,n,r),t.querySelector(`.lap-x`).addEventListener(`click`,()=>br()),t.addEventListener(`click`,e=>{e.target===t&&br()});let i=0;return{showLap(e){t.classList.toggle(`on`,e)},toast(e){n.textContent=e,n.classList.add(`on`),clearTimeout(i),i=setTimeout(()=>n.classList.remove(`on`),1400)},flash(){r.style.transition=`none`,r.style.opacity=`0.85`,requestAnimationFrame(()=>{r.style.transition=`opacity .55s`,r.style.opacity=`0`})}}})();function yr(){_r=!0,vr.showLap(!0)}function br(){_r=!1,vr.showLap(!1)}function xr(){Dn=(Dn+1)%Qe.length,vr.flash(),In(),vr.toast(`✈  `+q.state.profile.name),window.__profile=q.state.profile.key}function Sr(e,t){Cn.visible=!1,V.setRenderTarget(vn),V.render(U,e),Cn.visible=!0,V.setRenderTarget(t),V.render(U,e)}function Cr(e,t){if(Cn.visible=!1,V.setRenderTarget(vn),V.render(U,W.camera),Cn.visible=!0,Z===1||Dr&&Z!==7&&Z!==8)V.setRenderTarget(t),V.render(U,W.camera);else if(V.setRenderTarget(Rn),V.render(U,W.camera),Z===2)Gn.uniforms.uGrain.value=1,Gn.uniforms.uChroma.value=1,or(Gn,t);else{Gn.uniforms.uGrain.value=0,Gn.uniforms.uChroma.value=0,or(Gn,zn);let n=W.camera;ir.uniforms.uNear.value=n.near,ir.uniforms.uFar.value=n.far,ir.uniforms.uIsPerspective.value=+!!n.isPerspectiveCamera,e.kind===`pixel`?(or(rr(),t),window.__style=`pixel`):e.kind===`toon`?(or(ir,t),window.__style=`toon`):(or(ir,Bn),or(rr(),Vn),ar.uniforms.uBlend.value=e.blend,or(ar,t),window.__style=`blend`)}}var wr=.45,Tr=.65,Z=3,Er=!1,Dr=!1;window.__mode=Z,window.__camMode=W.mode,window.__vector=Dr,window.addEventListener(`keydown`,e=>{(e.key===`1`||e.key===`2`||e.key===`3`)&&(Z=Number(e.key),window.__mode=Z),(e.key===`7`||e.key===`8`)&&(Z=Number(e.key),window.__mode=Z),e.key===`4`&&(W.setMode(I.PERSPECTIVE),window.__camMode=W.mode),e.key===`5`&&(W.setMode(I.ISOMETRIC),window.__camMode=W.mode),e.key===`6`&&(W.setMode(I.DIMETRIC),window.__camMode=W.mode),e.key===`ArrowLeft`&&(W.pan(-1,0),e.preventDefault()),e.key===`ArrowRight`&&(W.pan(1,0),e.preventDefault()),e.key===`ArrowUp`&&(W.pan(0,1),e.preventDefault()),e.key===`ArrowDown`&&(W.pan(0,-1),e.preventDefault()),e.key===`0`&&(Dr=!Dr,Fe.value=+!!Dr,window.__vector=Dr),(e.key===`w`||e.key===`W`)&&(J.cycle(),window.__weather=J.kind),(e.key===`k`||e.key===`K`)&&(Mn=(Mn+1)%jn.length,window.__season=jn[Mn]),(e.key===`g`||e.key===`G`)&&(En=Math.random()*1e9|0,In()),(e.key===`c`||e.key===`C`)&&(Dn=(Dn+1)%Qe.length,In()),(e.key===`h`||e.key===`H`)&&(Fn=!Fn,window.__shadows=Fn),(e.key===`p`||e.key===`P`)&&(Er=!Er),(e.key===`b`||e.key===`B`)&&(tr=er[(er.indexOf(tr)+1)%er.length],window.__era=tr,nr()),(e.key===`t`||e.key===`T`)&&G.cyclePreset(),e.key===`[`&&G.nudge(-.5),e.key===`]`&&G.nudge(.5),e.key===`9`&&(G.toggleAuto(),window.__auto=G.auto),e.key===`Escape`&&(_r?br():gr()),(e.key===`o`||e.key===`O`)&&(X===`city`?hr():gr()),(e.key===`m`||e.key===`M`)&&mr&&mr.toggle()});var Or=window.matchMedia(`(prefers-reduced-motion: reduce)`);G.setReducedMotion(Or.matches),Or.addEventListener(`change`,e=>G.setReducedMotion(e.matches));var kr=new ve,Ar=new A,Q=!1,jr=!1,Mr=0,Nr=0,Pr=.005,Fr=(e,t)=>{Ar.x=e/window.innerWidth*2-1,Ar.y=-(t/window.innerHeight)*2+1},Ir=0,Lr=0,Rr=0;function zr(){return kr.setFromCamera(Ar,W.camera),kr.intersectObject(q.group,!0)[0]?new A(Ar.x*.5+.5,Ar.y*.5+.5):null}function Br(){kr.setFromCamera(Ar,Y.camera);let e=kr.intersectObjects(Y.interactables,!0)[0];if(!e)return null;let t=e.object;for(;t&&!t.userData.role;)t=t.parent;return t?t.userData.role:null}V.domElement.addEventListener(`contextmenu`,e=>e.preventDefault()),V.domElement.addEventListener(`mousedown`,e=>{e.button===0&&(Q=X===`city`,Fr(e.clientX,e.clientY),Ir=e.clientX,Lr=e.clientY,Rr=performance.now()),e.button===2&&(jr=!0,Mr=e.clientX,Nr=e.clientY)}),window.addEventListener(`mousemove`,e=>{Q&&Fr(e.clientX,e.clientY),jr?(W.orbit(-(e.clientX-Mr)*Pr,-(e.clientY-Nr)*Pr),Mr=e.clientX,Nr=e.clientY):X===`city`&&!Q?(Fr(e.clientX,e.clientY),V.domElement.style.cursor=zr()?`pointer`:`default`):X===`office`&&(Fr(e.clientX,e.clientY),V.domElement.style.cursor=Br()?`pointer`:`default`)}),window.addEventListener(`mouseup`,e=>{let t=Math.hypot(e.clientX-Ir,e.clientY-Lr)<6&&performance.now()-Rr<350;if(Q&&X===`city`&&t){Fr(e.clientX,e.clientY);let t=zr();t&&hr(t)}else if(X===`office`&&t&&!_r){Fr(e.clientX,e.clientY);let t=Br();t===`laptop`?yr():t===`phone`?xr():t===`cat`&&Y.petCat()}Q=!1,jr=!1}),V.domElement.addEventListener(`wheel`,e=>{e.preventDefault(),W.zoomBy(Math.exp(e.deltaY*.0015))},{passive:!1});var Vr=0,Hr=(e,t)=>[(e.clientX+t.clientX)/2,(e.clientY+t.clientY)/2],Ur=(e,t)=>Math.hypot(e.clientX-t.clientX,e.clientY-t.clientY),Wr=!1;V.domElement.addEventListener(`touchstart`,e=>{e.touches.length===1&&(Q=X===`city`,Fr(e.touches[0].clientX,e.touches[0].clientY),Ir=e.touches[0].clientX,Lr=e.touches[0].clientY,Rr=performance.now(),Wr=!1),e.touches.length===2&&(Q=!1,jr=!0,[Mr,Nr]=Hr(e.touches[0],e.touches[1]),Vr=Ur(e.touches[0],e.touches[1]))},{passive:!1}),V.domElement.addEventListener(`touchmove`,e=>{if(e.preventDefault(),e.touches.length===1)Fr(e.touches[0].clientX,e.touches[0].clientY),Math.hypot(e.touches[0].clientX-Ir,e.touches[0].clientY-Lr)>8&&(Wr=!0);else if(e.touches.length===2){let[t,n]=Hr(e.touches[0],e.touches[1]);W.orbit(-(t-Mr)*Pr,-(n-Nr)*Pr),Mr=t,Nr=n;let r=Ur(e.touches[0],e.touches[1]);Vr>0&&W.zoomBy(Vr/r),Vr=r}},{passive:!1}),window.addEventListener(`touchend`,e=>{if(!Wr&&performance.now()-Rr<350&&(!e.touches||e.touches.length===0)){if(X===`city`){let e=zr();e&&hr(e)}else if(X===`office`&&!_r){let e=Br();e===`laptop`?yr():e===`phone`?xr():e===`cat`&&Y.petCat()}}Q=!1,jr=!1,Vr=0,e.touches&&e.touches.length===1&&(Q=!0)});var Gr=new k;Gr.connect(document);var Kr=0,qr=performance.now();function Jr(){if(Z===1||Z===2)return{kind:`none`};if(Z===7)return{kind:`pixel`};if(Z===8)return{kind:`toon`};let e=W.styleT;return window.__styleT=e,e>=Tr?{kind:`pixel`}:e<=wr?{kind:`toon`}:{kind:`blend`,blend:u.smoothstep(e,wr,Tr)}}var Yr=on?null:document.querySelector(`.hint`);if(on){let e=document.querySelector(`.hint`);e&&(e.style.display=`none`)}var Xr=Yr?Yr.textContent:``,Zr=``,Qr=``;function $r(e){!Yr||e===Zr||(Zr=e,Yr.textContent=`${Xr} · ${Qr} · ${e}`)}function ei(){Qr=`seed ${q.state.seed} · ${q.state.profile.name}`,window.__profile=q.state.profile.key,Zr=``}ei();function ti(){Gr.update();let e=Math.min(Gr.getDelta(),.1);W.update(e),xn.material.uniforms.uTime.value=Gr.getElapsed(),Gn.uniforms.uTime.value=Gr.getElapsed(),G.update(e),q.key.position.copy(G.sunDir).multiplyScalar(Pn),q.key.color.copy(G.sunColor),q.key.intensity=G.sunIntensity,q.fill.color.copy(G.hemiSky),q.fill.groundColor.copy(G.hemiGround),wn.value=G.windowGlow;let t=J.overcast;q.key.intensity*=1-.5*t,q.key.color.lerp(ln,.45*t),q.fill.intensity=1+.7*t;let n=u.smoothstep(G.sunDir.y,.06,.34),r=u.lerp(.28,1,1-G.windowGlow),i=Fn?n*r:0;q.key.shadow.intensity=.72*i,Le.value=.52*i;let a=1-G.windowGlow;Ie.setRGB(u.lerp(.46,1,a),u.lerp(.52,1,a),u.lerp(.74,1,a)),Gn.uniforms.uExposure.value=G.exposure,ir.uniforms.uToonGain.value=G.toonGain,V.setClearColor(G.horizon,1),Zn(G.t),$r(G.clock),window.__t=G.t,kn.update(e,Gr.getElapsed(),G),q.update(Gr.getElapsed()),J.update(e,Gr.getElapsed()),_n.uniforms.uRainCount.value=J.rainDropCount;let o=J.fog*(1-a);U.fog.density=J.fog*un,fn.copy(G.horizon).lerp(dn,.85*o),U.fog.color.copy(fn),V.setClearColor(fn,1),Ve.value=J.fog,xn.material.uniforms.uFogAmt.value=.7*J.fog,Re.value=J.snow,ze.value=J.cloud*.55,Be.x+=e*.018,Be.y+=e*.009,He.value+=(jn[Mn]-He.value)*Math.min(1,e*1.5),An.update(e,Gr.getElapsed(),G,J);let s=Jr(),c=s.kind===`toon`?1:s.kind===`blend`?1-s.blend:0;Sn.uniforms.uChromaScale.value=u.lerp(1,.5,c),Kr++;let l=performance.now();l-qr>=1e3&&(window.__fps=Kr,Kr=0,qr=l);let d=0;if(Q&&X===`city`){kr.setFromCamera(Ar,W.camera);let e=kr.intersectObject(Cn)[0];e&&e.uv&&(_n.uniforms.uMouse.value.copy(e.uv),d=.06)}_n.uniforms.uMouseStrength.value=d;let[f,p,m]=mn;_n.uniforms.uPrev.value=f.texture,_n.uniforms.uCurr.value=p.texture,V.setRenderTarget(m),V.render(hn,gn),mn=[p,m,f],Sn.uniforms.uHeight.value=mn[1].texture,fr+=(+(X===`office`||X===`diving-in`)-fr)*Math.min(1,e*pr),X===`diving-in`&&fr>.992&&(fr=1,X=`office`,window.__scene=X),X===`diving-out`&&fr<.008&&(fr=0,X=`city`,window.__scene=X),X===`city`?Cr(s,null):(Y.update(e,Gr.getElapsed(),G),Sr(sr,cr),X===`office`?(V.setRenderTarget(null),V.render(Y.scene,Y.camera)):(Cr(s,lr),V.setRenderTarget(ur),V.render(Y.scene,Y.camera),dr.uniforms.uT.value=fr,or(dr,null))),requestAnimationFrame(ti)}var ni={at:(e,t)=>{Fr(e,t),Q=!0},stop:()=>{Q=!1}};function ri(){let e=window.__style||(Z===1?`raw`:Z===2?`filmic`:`auto`);return{lesson:22,clock:G.clock,style:(Dr?`vec-`:``)+e,profile:q.state.profile.key,weather:J.kind,scene:X}}Pt({renderer:V,rig:W,sunRig:G,poke:ni,getState:ri});var $=e=>window.dispatchEvent(new KeyboardEvent(`keydown`,{key:e})),ii={cam:e=>$({iso:`5`,dimetric:`6`,persp:`4`}[e]),style:e=>{e===`vector`?(Dr||$(`0`),(Z===7||Z===8)&&$(`2`)):e===`pixel`?$(`7`):e===`toon`&&$(`8`)},city:()=>$(`C`),shuffle:()=>$(`G`),weather:()=>$(`W`),season:()=>$(`K`),office:()=>$(`o`),time:e=>G.goTo(e),auto:()=>$(`9`)};mr=Lt({controls:ii,state:()=>({cam:{4:`persp`,5:`iso`,6:`dimetric`}[W.mode],style:Z===7?`pixel`:Z===8?`toon`:`vector`,auto:G.auto,t:G.t,weather:J.kind,season:Mn,office:X!==`city`}),show:B.get(`ui`)!==`0`&&!B.has(`capture`),coarse:window.matchMedia&&window.matchMedia(`(pointer: coarse)`).matches});var ai=B.get(`cam`);ai&&[`iso`,`dimetric`,`persp`].includes(ai)&&ii.cam(ai);var oi=B.get(`style`);[`vector`,`pixel`,`toon`].includes(oi)&&ii.style(oi);var si=B.get(`t`);si!==null&&si!==``&&!Number.isNaN(parseFloat(si))&&G.goTo(parseFloat(si));var ci=B.get(`time`);ci&&G.goTo({dawn:.25,noon:.5,dusk:.75,night:0}[ci]??.5);var li=B.get(`weather`);[`clear`,`rain`,`snow`,`fog`].includes(li)&&(J.setKind(li),window.__weather=J.kind),B.get(`office`)===`1`&&(X=`office`,fr=1,window.__scene=X),ti(),window.addEventListener(`resize`,()=>{W.setViewport(window.innerWidth,window.innerHeight),V.setSize(window.innerWidth,window.innerHeight);let e=V.getDrawingBufferSize(new A);vn.setSize(e.x,e.y),Rn.setSize(e.x,e.y),zn.setSize(e.x,e.y),Bn.setSize(e.x,e.y),Vn.setSize(e.x,e.y),lr.setSize(e.x,e.y),ur.setSize(e.x,e.y),Y.camera.aspect=window.innerWidth/window.innerHeight,Y.camera.updateProjectionMatrix(),Sn.uniforms.uResolution.value.set(e.x,e.y),Gn.uniforms.uResolution.value.set(e.x,e.y),Xn.uniforms.uResolution.value.set(e.x,e.y),Qn.uniforms.uResolution.value.set(e.x,e.y),ir.uniforms.uResolution.value.set(e.x,e.y)});