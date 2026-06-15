import{$ as e,A as t,B as n,C as r,D as i,E as a,F as o,G as s,H as c,I as l,J as u,K as d,L as f,M as p,N as m,O as h,P as g,Q as _,R as v,S as y,T as b,U as x,V as S,W as C,X as w,Y as T,Z as E,_ as ee,a as D,b as te,c as O,d as k,et as A,f as j,g as ne,h as M,i as N,j as P,k as F,l as re,m as ie,n as ae,nt as I,o as L,p as R,q as z,r as oe,s as se,t as B,tt as V,u as ce,v as le,w as ue,x as de,y as fe,z as pe}from"./three-D0DmFcFN.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var me=Math.atan(1/Math.SQRT2),he=Math.atan(.5),ge=Math.PI/4,_e={PERSPECTIVE:4,ISOMETRIC:5,DIMETRIC:6},ve=.12,ye=1.45,H=4,be=40,xe=1.5,U=16,W=6,G=22,Se=3.5,Ce=11,we=(e,t,n)=>e+(t-e)*(1-Math.exp(-8*n)),Te=(e,t)=>e+Math.PI*2*Math.round((t-e)/(Math.PI*2));function Ee({aspect:e,fov:t=48,near:n=.1,far:r=100,target:i=new V(0,.8,0),azimuth:a=ge,elevation:o=.52,distance:s=12,zoom:c=5.5}={}){let u=new v(t,e,n,r),d=new l(-1,1,1,-1,n,r),f=_e.PERSPECTIVE,p=e,m={azimuth:a,elevation:o,distance:s,zoom:c,target:i.clone()},h={azimuth:a,elevation:o,distance:s,zoom:c,target:i.clone()},g=!1,_=()=>f===_e.PERSPECTIVE?u:d;function y(e){e!==f&&(f=e,f===_e.ISOMETRIC||f===_e.DIMETRIC?(m.elevation=f===_e.ISOMETRIC?me:he,m.azimuth=Te(ge,h.azimuth),g=!0):g=!1)}function b(e,t){m.azimuth+=e,g||(m.elevation=F.clamp(m.elevation+t,ve,ye))}function x(e){f===_e.PERSPECTIVE?m.distance=F.clamp(m.distance*e,H,be):m.zoom=F.clamp(m.zoom*e,xe,U)}function S(e,t){let n=m.azimuth,r=f===_e.PERSPECTIVE?m.distance*.04:m.zoom*.08,i=new V(Math.cos(n),0,-Math.sin(n)),a=new V(-Math.sin(n),0,-Math.cos(n));m.target.addScaledVector(i,e*r),m.target.addScaledVector(a,t*r)}function C(e,t){p=e/t,u.aspect=p,u.updateProjectionMatrix()}function w(e){h.azimuth=we(h.azimuth,m.azimuth,e),h.elevation=we(h.elevation,m.elevation,e),h.distance=we(h.distance,m.distance,e),h.zoom=we(h.zoom,m.zoom,e),h.target.x=we(h.target.x,m.target.x,e),h.target.y=we(h.target.y,m.target.y,e),h.target.z=we(h.target.z,m.target.z,e);let t=Math.cos(h.elevation),n=Math.sin(h.elevation),r=Math.cos(h.azimuth),i=Math.sin(h.azimuth),a=_();if(a.position.set(h.target.x+h.distance*t*i,h.target.y+h.distance*n,h.target.z+h.distance*t*r),a.lookAt(h.target),a.isOrthographicCamera){let e=h.zoom,t=e*p;a.left=-t,a.right=t,a.top=e,a.bottom=-e,a.updateProjectionMatrix()}}function T(e,t,n,r=!1){m.target.set(e,t,n),r&&h.target.copy(m.target)}function E(e,t=!1){m.zoom=F.clamp(e,xe,U),t&&(h.zoom=m.zoom)}return{get camera(){return _()},get mode(){return f},get azimuth(){return h.azimuth},setTarget:T,setZoom:E,get styleT(){return f===_e.PERSPECTIVE?F.clamp((h.distance-W)/(G-W),0,1):F.clamp((h.zoom-Se)/(Ce-Se),0,1)},setMode:y,orbit:b,zoomBy:x,pan:S,setViewport:C,update:w}}var De={value:0},Oe=new R(`#ffffff`),ke={value:0},Ae={value:0},je={value:0},Me=new A,Ne={value:0},Pe={value:0},Fe=`
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
`;function K(e){e.uniforms.uVector=De,e.uniforms.uVecTint={value:Oe},e.uniforms.uVecShadow=ke,e.uniforms.uSnow=Ae,e.uniforms.uCloud=je,e.uniforms.uCloudOff={value:Me},e.uniforms.uFogCharm=Ne}function q(e){return e.replace(`#include <fog_fragment>`,`
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
  `)}function Ie(e){return e.replace(`#include <common>`,`#include <common>
varying vec3 vVecN;
varying vec3 vVecP;
varying vec2 vWorldXZ;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
  vVecN = normal;
  vVecP = position;
  vWorldXZ = (modelMatrix * vec4(position, 1.0)).xz;`)}function J(e){return e.replace(`#include <shadowmap_pars_fragment>`,`#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>`)}var Le=`col *= mix(1.0, getShadowMask(), uVecShadow);`;function Re(e,{color:t,id:n,windowGlow:r,winColors:i=[`#ffb852`,`#8cd9ff`],litFrac:a=.55}={}){let o=[0,1,2].map(e=>new R(i[e]??i[i.length-1]));return e.customProgramCacheKey=()=>`lgr-vec-tower`,e.onBeforeCompile=e=>{K(e),e.uniforms.uWindowGlow=r,e.uniforms.uWinId={value:n},e.uniforms.uVecColor={value:new R(t)},e.uniforms.uWinA={value:o[0]},e.uniforms.uWinB={value:o[1]},e.uniforms.uWinC={value:o[2]},e.uniforms.uWinLit={value:a},e.vertexShader=Ie(e.vertexShader),e.fragmentShader=q(J(e.fragmentShader.replace(`#include <common>`,`#include <common>
        uniform float uWindowGlow;
        uniform float uWinId;
        uniform vec3  uVecColor;
        uniform vec3  uWinA; uniform vec3 uWinB; uniform vec3 uWinC;
        uniform float uWinLit;
        ${Fe}
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
          ${Le}                                  // the sun's shadow darkens the body
          vec3 wcol; vec2 w = winTerms(wcol);
          vec3 glass = vec3(0.17, 0.23, 0.34);          // dark glass-blue panes (day)
          col = mix(col, glass, w.x * 0.85);
          col += w.x * w.y * wcol * uWindowGlow * 1.5;  // …windows EMIT (unshadowed) at night
          gl_FragColor = vec4(col, diffuseColor.a);
        }`)))},e}function Y(e,{color:t=null,glow:n=null,glowDay:r=0,glowNight:i=1,windowGlow:a=null,season:o=!1}={}){let s=t===null,c=n!==null&&a!==null;return e.customProgramCacheKey=()=>`lgr-vec|`+(s?`d`:`c`)+(c?`g`:``)+(o?`s`:``),e.onBeforeCompile=e=>{K(e),s||(e.uniforms.uVecColor={value:new R(t)}),c&&(e.uniforms.uGlow={value:new R(n)},e.uniforms.uGlowDay={value:r},e.uniforms.uGlowNight={value:i},e.uniforms.uWindowGlow=a),o&&(e.uniforms.uSeason=Pe),e.vertexShader=Ie(e.vertexShader);let l=s?`diffuseColor.rgb`:`uVecColor`,u=o?`seasonShift(${l})`:l,d=(s?``:`uniform vec3 uVecColor;
`)+(c?`uniform vec3 uGlow; uniform float uGlowDay; uniform float uGlowNight; uniform float uWindowGlow;
`:``)+(o?`uniform float uSeason;
vec3 seasonShift(vec3 c){
  c = mix(c, vec3(0.86, 0.46, 0.13), smoothstep(0.40, 0.70, uSeason));   // → autumn orange
  c = mix(c, vec3(0.46, 0.33, 0.20), smoothstep(0.75, 1.00, uSeason));   // → bare brown
  return c;
}
`:``),f=c?`uGlow * mix(uGlowDay, uGlowNight, uWindowGlow)`:`vec3(0.0)`,p=q(J(e.fragmentShader.replace(`#include <common>`,`#include <common>
`+d+Fe).replace(`#include <opaque_fragment>`,`#include <opaque_fragment>
        if (uVector > 0.5) {
          vec3 col = vecShade(${u});
          ${Le}                            // the sun's shadow darkens the flat tier…
          gl_FragColor = vec4(col + ${f}, diffuseColor.a);  // …but the night glow stays lit
        }`)));c&&(p=p.replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>\n  totalEmissiveRadiance += ${f};`)),e.fragmentShader=p},e}function ze(e){let t=e>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Be(e){let t=ze(e);return{next:t,range:(e,n)=>e+(n-e)*t(),int:(e,n)=>e+Math.floor(t()*(n-e+1)),pick:e=>e[Math.floor(t()*e.length)],chance:e=>t()<e}}var Ve=[{key:`manhattan`,name:`Manhattan`,towers:[`#EDE3C8`,`#D9B98A`,`#B5562F`,`#A8C8E8`,`#2E3F5C`],ground:`#7CC455`,street:`#9AA0A6`,sidewalk:`#C8CCD0`,park:`#5DB347`,water:`#29A8D8`,shopfronts:[`#C04A3A`,`#3A7AC0`,`#C09A2A`],glass:`#7FA8CC`,winColors:[`#ffd27a`,`#9ad6ff`],hMax:4.6,sigma:.36,roofRate:.35,pSplit:.6,nightLit:.55,roofTint:null,coast:{base:.55,out:1,in:.6,jag:1.05},landmarks:[`empireState`,`chrysler`,`liberty`]},{key:`paris`,name:`Paris`,towers:[`#E8DCC0`,`#F2EAD6`,`#E0D2B4`],ground:`#8CC46A`,street:`#A8A29A`,sidewalk:`#D4CEC2`,park:`#6DB35A`,water:`#3FA8C8`,shopfronts:[`#C04A3A`,`#3A6B5A`,`#7A5AC0`],glass:`#5A6B7A`,winColors:[`#ffdca0`,`#ffcaa0`],hMax:1.5,sigma:.9,roofRate:.15,pSplit:.75,nightLit:.45,roofTint:`#6A7886`,coast:{base:1.05,out:.55,in:.3,jag:.5},landmarks:[`eiffel`,`arcDeTriomphe`,`sacreCoeur`]},{key:`neoTokyo`,name:`Neo-Tokyo`,towers:[`#2A3038`,`#3A4250`,`#252B36`,`#4A4456`],ground:`#3A4A42`,street:`#5A6068`,sidewalk:`#7A8088`,park:`#2E5E46`,water:`#0E6878`,shopfronts:[`#E8483A`,`#5AE8E0`,`#E85AA0`],glass:`#5AE8E0`,winColors:[`#5AE8E0`,`#E85AA0`,`#E8E06A`],hMax:5.2,sigma:.42,roofRate:.6,pSplit:.6,nightLit:.7,roofTint:null,coast:{base:.7,out:1.05,in:.62,jag:1.7},landmarks:[`tokyoTower`,`pagoda`,`neonBillboard`]}];Ve.map(e=>e.key);var He=.3,X=1.9,Ue=.55,We=2.45,Ge=.12,Ke=.6,qe=6,Je={BASE:.7,OUT:.95,IN:.55,JAG:1,SAMPLES_PER_EDGE:28,HARBOR_DEPTH:.55,HARBOR_WIDTH:.26},Ye={PLINTH_TOP:He,BLOCK:X,STREET:Ue,PITCH:We,SIDEWALK:Ge,SHORE:Ke,N:qe,COAST:Je};function Xe(e,t,n){let r=n?.base??Je.BASE,i=n?.out??Je.OUT,a=n?.in??Je.IN,o=n?.jag??Je.JAG,s=t+r,c=Be((e^789079)>>>0),l=[2,3,5,8,11,13].map(e=>({k:e,amp:1/e*o**((e-2)/6),phase:c.range(0,Math.PI*2)})),u=l.reduce((e,t)=>e+t.amp,0),d=e=>{let t=0;for(let n of l)t+=n.amp*Math.sin(n.k*e*Math.PI*2+n.phase);return Math.max(-1,Math.min(1,t/(u*.6)))},f=[{fix:+s,nx:1,nz:0,sign:1},{fix:+s,nx:0,nz:1,sign:-1},{fix:-s,nx:-1,nz:0,sign:-1},{fix:-s,nx:0,nz:-1,sign:1}],p=t+.22,m=Je.SAMPLES_PER_EDGE,h=4*m,g=[],_=0;for(let e=0;e<4;e++){let t=f[e];for(let n=0;n<m;n++,_++){let o=n/m,c=_/h,l=(-s+2*s*o)*t.sign,u=d(c),f=u>=0?u*i:u*a;if(e===0){let e=Math.abs(o-.5);if(e<Je.HARBOR_WIDTH){let t=.5+.5*Math.cos(e/Je.HARBOR_WIDTH*Math.PI);f-=(r+Je.HARBOR_DEPTH)*t}}let v,y;t.nx===0?(y=t.fix+t.nz*f,v=l,y=t.nz>0?Math.max(y,p):Math.min(y,-p)):(v=t.fix+t.nx*f,y=l,v=t.nx>0?Math.max(v,p):Math.min(v,-p)),g.push(new A(v,y))}}return{points:g,B:s,maxR:s+i,harborX:p}}function Ze(e){(Array.isArray(e)?e:[e]).forEach(e=>e&&e.dispose&&e.dispose())}function Qe({seed:e=1,profileIndex:t=0,landmarkFactory:n=null,windowGlow:r}){let i=new y,a=new y,o=new y;a.raycast=()=>{},o.raycast=()=>{},i.add(a,o);let s=new le(16773594,3);s.position.set(.45,.6,-.65).multiplyScalar(10);let c=new ue(7313331,2762272,1);i.add(s,c);let l=0,d=[],f={seed:e,profileIndex:t,profile:Ve[t],extent:0,meshCount:0};function h(e,t,n,r){let i=new P(new D(e,.04,t),Y(new m({color:r,roughness:.95,flatShading:!0}),{color:r}));return i.position.y=n,i.userData.ground=!0,i}function g(e,t){for(let e of a.children)e.geometry&&e.geometry.dispose(),Ze(e.material);a.clear();for(let e of o.children)e.traverse(e=>{e.isMesh&&Ze(e.material)});o.clear(),d.length=0,l=0;let r=Be(e),i=Ve[t],s=(qe-1)/2*We,c=7.075;f={seed:e,profileIndex:t,profile:i,extent:c+(i.coast?.base??Je.BASE),meshCount:0};let p=Xe(e,c,i.coast);f.coast=p;let g=new u;p.points.forEach((e,t)=>t?g.lineTo(e.x,e.y):g.moveTo(e.x,e.y)),g.closePath();let y=new P(new fe(g,{depth:2,bevelEnabled:!1,steps:1}),Y(new m({color:i.ground,roughness:.9,flatShading:!0,side:2}),{color:i.ground}));y.rotation.x=-Math.PI/2,y.position.y=He-2,y.userData.ground=!0,a.add(y);let C=2*7.195;a.add(h(C,C,.32,i.street)),x(p.harborX,i);let w=[];for(let e=0;e<qe;e++)for(let t=0;t<qe;t++)w.push([e,t]);let T=new Set,E=Math.max(1,Math.round(w.length*.08));for(;T.size<E;)T.add(r.int(0,w.length-1));let ee=r.range(-2.45*.6,We*.6),D=r.range(-2.45*.6,We*.6),te=Math.hypot(s,s),O=[];if(w.forEach(([e,t],n)=>{let o=(e-(qe-1)/2)*We,s=(t-(qe-1)/2)*We;if(a.add(h(X,X,.32999999999999996,i.sidewalk).translateX(o).translateZ(s)),T.has(n)){a.add(h(X-Ge*2,X-Ge*2,.35,i.park).translateX(o).translateZ(s));let e=r.int(3,5);for(let t=0;t<e;t++)S(o+r.range(-.6,.6),s+r.range(-.6,.6),i,r);return}let c=X-Ge*2,l=r.chance(i.pSplit)?2:1,u=r.chance(i.pSplit)?2:1,d=c/l,f=c/u;for(let e=0;e<l;e++)for(let t=0;t<u;t++){let n=o-c/2+d*(e+.5),a=s-c/2+f*(t+.5),l=Math.max(.6,d-.1),u=Math.max(.6,f-.1),p=Math.hypot(n-ee,a-D)/te,m=Math.exp(-(p*p)/(2*i.sigma*i.sigma)),h=Math.max(.5,.5+(i.hMax-.5)*m*r.range(.75,1.25));h>i.hMax*.5&&Math.min(l,u)>=.7&&O.push({lx:n,lz:a,fw:l,fd:u,h,r:p}),_(n,a,l,u,h,i,r)}}),n&&n.ready){O.sort((e,t)=>e.r-t.r);let e=[],t=i.landmarks;for(let r=0;r<t.length&&O.length;r++){let a=null;for(let t of O)if(e.every(e=>Math.hypot(e.lx-t.lx,e.lz-t.lz)>We*.9)){a=t;break}a||=O[0],e.push(a),v(a.lx,a.lz);let s=i.hMax*n.heightFactor(t[r]),c=n.make(t[r],{x:a.lx,z:a.lz,w:a.fw,d:a.fd,h:s,plinthTop:He});if(c){o.add(c);let e=new N().setFromObject(c);b(e.min.x-.15,e.max.x+.15,e.min.z-.15,e.max.z+.15)}}}a.traverse(e=>{e.isMesh&&(e.userData.ground?(e.castShadow=!1,e.receiveShadow=!0):e.material&&e.material.isMeshBasicMaterial?(e.castShadow=!1,e.receiveShadow=!1):(e.castShadow=!0,e.receiveShadow=!0))}),o.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),f.meshCount=a.children.length+o.children.length;let k=0;for(let e of a.children){let t=e.position;k=(Math.imul(k,16777619)^(Math.round(t.x*100)*2654435761^Math.round(t.y*100)*40503^Math.round(t.z*100)*2246822519))>>>0}for(let e of f.coast.points)k=(Math.imul(k,16777619)^(Math.round(e.x*100)*2654435761^Math.round(e.y*100)*40503))>>>0;f.sig=k,window.__city={seed:e,profile:i.key,meshes:f.meshCount,sig:k}}function _(e,t,n,i,o,s,c){let u=Re(new m({flatShading:!0,roughness:.7,metalness:.05}),{color:c.pick(s.towers),id:++l,windowGlow:r,winColors:s.winColors,litFrac:s.nightLit}),f=new P(new D(n,o,i),u);if(f.position.set(e,He+o/2,t),f.userData.lot=[e,t],a.add(f),s.roofTint){let r=Y(new m({color:s.roofTint,roughness:.85,flatShading:!0}),{color:s.roofTint}),c=new P(new D(n*1.02,.08,i*1.02),r);c.position.set(e,He+o+.04,t),c.userData.lot=[e,t],a.add(c)}if(o<1.4){let r=c.pick(s.shopfronts),o=new P(new D(n*1.04,.18,i*1.04),Y(new m({color:r,roughness:.8,flatShading:!0}),{color:r}));o.position.set(e,.39,t),o.userData.lot=[e,t],a.add(o)}if(o>s.hMax*.45&&c.chance(s.roofRate)){let r=c.chance(.5)?new P(new D(n*.4,.18,i*.4),Y(new m({color:`#9a9a9a`,flatShading:!0}),{color:`#9a9a9a`})):new P(new M(n*.18,n*.18,.22,10),Y(new m({color:`#b9bec4`,flatShading:!0}),{color:`#b9bec4`}));if(r.position.set(e+c.range(-.1,.1),He+o+.11,t+c.range(-.1,.1)),r.userData.lot=[e,t],a.add(r),c.chance(.25)){let n=new P(new T(.05,6,5),new p({color:`#ff3b30`,transparent:!0,opacity:1}));n.position.set(e,He+o+.26,t),n.userData.lot=[e,t],n.raycast=()=>{},a.add(n),d.push({mesh:n,phase:c.range(0,6.28)})}}}function v(e,t){for(let n=a.children.length-1;n>=0;n--){let r=a.children[n];r.userData.lot&&Math.abs(r.userData.lot[0]-e)<1e-4&&Math.abs(r.userData.lot[1]-t)<1e-4&&(r.geometry&&r.geometry.dispose(),Ze(r.material),a.remove(r))}for(let e=d.length-1;e>=0;e--)d[e].mesh.parent||d.splice(e,1)}function b(e,t,n,r){for(let i=a.children.length-1;i>=0;i--){let o=a.children[i];o.userData.lot&&o.position.x>=e&&o.position.x<=t&&o.position.z>=n&&o.position.z<=r&&(o.geometry&&o.geometry.dispose(),Ze(o.material),a.remove(o))}}function x(e,t){let n=Y(new m({color:`#7a5634`,roughness:.95,flatShading:!0}),{color:`#7a5634`}),r=(e,t,r,i)=>{let o=new P(new D(e,.06,t),n);o.position.set(r,He-.16,i),a.add(o)};r(.24,2,e+.02,0),r(1.3,.22,e+.7,-.72),r(1.3,.22,e+.7,.72)}function S(e,t,n,r){let i=new R(n.park),o=(n,o)=>{let s=i.clone().offsetHSL(0,0,r.range(-.06,.06)).getStyle(),c=new P(new T(n,7,6),Y(new m({color:s,flatShading:!0}),{color:s,season:!0}));c.scale.y=.7,c.position.set(e,He+o,t),c.userData.lot=null,a.add(c)},s=new P(new D(.05,.18,.05),Y(new m({color:`#6b4a2a`,flatShading:!0}),{color:`#6b4a2a`}));s.position.set(e,.39,t),a.add(s),o(.22,.28),o(.16,.46)}function C(e){for(let t of d)t.mesh.material.opacity=.35+.65*(.5+.5*Math.sin(e*3+t.phase))}return g(e,t),{group:i,key:s,fill:c,update:C,generate:g,get state(){return f},get extent(){return f.extent},get waterColor(){return f.profile.water},profiles:Ve}}var $e=Math.PI*2,et=.7,tt=90,nt=[{name:`night`,sun:`#4a6f9e`,intensity:.35,hemiSky:`#26344f`,hemiGround:`#0c1018`,horizon:`#1e2942`,sky:`#36486e`,exposure:.95,outline:`#101a30`,window:1,toonGain:2.6},{name:`dawn`,sun:`#ff9e54`,intensity:2.4,hemiSky:`#8a7686`,hemiGround:`#2a1f1a`,horizon:`#b8512c`,sky:`#ffb070`,exposure:1.05,outline:`#241826`,window:.3,toonGain:2},{name:`noon`,sun:`#fff4e0`,intensity:4.6,hemiSky:`#9cb8cc`,hemiGround:`#33302a`,horizon:`#5e7689`,sky:`#aacadd`,exposure:1.18,outline:`#0b0a08`,window:0,toonGain:1.7},{name:`dusk`,sun:`#ff6b35`,intensity:2,hemiSky:`#7a566a`,hemiGround:`#281a18`,horizon:`#b0432a`,sky:`#ff8a5a`,exposure:1.05,outline:`#1f1420`,window:.4,toonGain:2}],rt=e=>e-Math.floor(e),it=(e,t,n)=>e+(t-e)*n,at=(e,t,n)=>e+(t-e)*(1-Math.exp(-6*n));function ot({t:e=.5}={}){let t=e,n=e,r=!1,i=!1,a=nt.map(e=>({name:e.name,sun:new R(e.sun),hemiSky:new R(e.hemiSky),hemiGround:new R(e.hemiGround),horizon:new R(e.horizon),sky:new R(e.sky),outline:new R(e.outline),intensity:e.intensity,exposure:e.exposure,window:e.window,toonGain:e.toonGain})),o=new V(0,1,0),s=new R(`#fff4e0`),c=new R(`#6f97b3`),l=new R(`#2a2620`),u=new R(`#3a4a57`),d=new R(`#7da3bd`),f=new R(`#0b0a08`),p=new R(`#000000`),m=3,h=1,g=0,_=1.7,v=new V;function y(e){let t=rt(e)*4,n=Math.floor(t)%4,r=(n+1)%4,i=t-Math.floor(t),y=a[n],b=a[r];s.lerpColors(y.sun,b.sun,i),c.lerpColors(y.hemiSky,b.hemiSky,i),l.lerpColors(y.hemiGround,b.hemiGround,i),u.lerpColors(y.horizon,b.horizon,i),d.lerpColors(y.sky,b.sky,i),f.lerpColors(y.outline,b.outline,i),m=it(y.intensity,b.intensity,i),h=it(y.exposure,b.exposure,i),g=it(y.window,b.window,i),_=it(y.toonGain,b.toonGain,i),p.setRGB(.045*g,.075*g,.14*g);let x=rt(e)*$e-Math.PI/2,S=Math.cos(x),C=Math.sin(x);v.set(S,C*Math.cos(et),C*Math.sin(et)),v.y>=0?o.copy(v):o.copy(v).negate()}return y(t),{sunDir:o,sunColor:s,hemiSky:c,hemiGround:l,horizon:u,sky:d,outline:f,toonFloor:p,get sunIntensity(){return m},get exposure(){return h},get windowGlow(){return g},get toonGain(){return _},get t(){return rt(t)},get auto(){return r},get clock(){let e=Math.round(rt(t)*24*60)%1440;return`${String(Math.floor(e/60)).padStart(2,`0`)}:${String(e%60).padStart(2,`0`)}`},cyclePreset(){n=(Math.floor(t*4+1e-4)+1)/4},nudge(e){n+=e/24},goTo(e){n=e},toggleAuto(){r=!r},setReducedMotion(e){i=e},update(e){r&&!i&&(n+=e/tt),t=at(t,n,e),y(t)}}}function st(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.35,`rgba(255,255,255,0.55)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new O(e);return r.colorSpace=s,r}function ct(e,t){let n=[];for(let r=0;r<16;r++){let i=r/16*Math.PI*2;n.push(new V(Math.cos(i)*e,t,Math.sin(i)*e))}return new ce(n,!0,`catmullrom`,.5)}function lt(e){let t=(t,n)=>Math.exp(-((e-t)*(e-t))/(2*n*n)),n=Math.max(t(.33,.05),t(.75,.06)),r=F.smoothstep(e,.24,.3)*(1-F.smoothstep(e,.8,.88));return F.clamp(.15+.55*r+.45*n,.12,1)}function ut(){let{PITCH:e,N:t,PLINTH_TOP:n}=Ye,r=t+1,i=n+.04,a=n=>(n-t/2)*e,o=t/2,s=[],c=(e,t)=>t*r+e;for(let e=0;e<r;e++)for(let t=0;t<r;t++)s.push({x:a(t),z:a(e),i:t,j:e,edges:[]});let l=[],u=(t,n)=>{let r=(s[t].i===o||s[t].j===o)&&(s[n].i===o||s[n].j===o),i=l.length;l.push({a:t,b:n,len:e,main:r}),s[t].edges.push(i),s[n].edges.push(i)};for(let e=0;e<r;e++)for(let t=0;t<r;t++)t<r-1&&u(c(t,e),c(t+1,e)),e<r-1&&u(c(t,e),c(t,e+1));return{nodes:s,edges:l,y:i,mid:o}}function dt({plinthTop:e=.3,extent:t=4,profile:n=null}={}){let r=new y,i=ut(),{nodes:a,edges:s}=i,l=i.y,u=.34,d=0;{let e=Ye.PITCH-u*2;d=Math.max(1,Math.floor((e+.26)/.56))}let f=new p({color:`#e8c84a`,fog:!0}),h=new b(new D(.05,.012,.3),f,s.length*d);h.frustumCulled=!1,h.raycast=()=>{},h.receiveShadow=!1,h.castShadow=!1,r.add(h);{let e=new o,t=0;for(let n of s){let r=a[n.a],i=a[n.b],o=i.x-r.x,s=i.z-r.z,c=Math.hypot(o,s),f=o/c,p=s/c,m=Math.atan2(f,p),g=c-u*2;for(let n=0;n<d;n++){let i=u+(d===1?g/2:g*n/(d-1));e.position.set(r.x+f*i,l,r.z+p*i),e.rotation.set(0,m,0),e.updateMatrix(),h.setMatrixAt(t++,e.matrix)}}h.instanceMatrix.needsUpdate=!0}let g=new b(new D(.34,.26,.74),Y(new m({flatShading:!0,roughness:.5,metalness:.3})),12);g.castShadow=!0,g.receiveShadow=!1,g.frustumCulled=!1,g.raycast=()=>{};let _=new se,v=new Float32Array(72),x=new Float32Array(72),C=new R(`#fff0c0`),w=new R(`#ff3528`);for(let e=0;e<12;e++)C.toArray(x,e*3),w.toArray(x,(12+e)*3),v[e*3+1]=-50,v[(12+e)*3+1]=-50;_.setAttribute(`position`,new L(v,3)),_.setAttribute(`color`,new L(x,3));let T=new c({size:.72,sizeAttenuation:!0,map:st(),vertexColors:!0,transparent:!0,opacity:0,blending:2,depthWrite:!1}),E=new S(_,T);E.frustumCulled=!1,E.raycast=()=>{},r.add(g,E);let ee=[`#f4c430`,`#c0392b`,`#d8dde2`,`#9aa7b4`,`#6b7785`,`#5a7d9a`],te=ze(2403557),O=s.map((e,t)=>t).filter(e=>s[e].main),k=[];for(let e=0;e<12;e++){let t=e<4&&O.length?O[te()*O.length|0]:te()*s.length|0,n=e===1;k.push({edge:t,fwd:te()<.5,s:te()*s[t].len,speed:n?.5:.78+e%3*.1,lenZ:n?1.45:1,color:ee[n?1:e===0?0:2+e%4],rng:ze(12648430+e*2654435761)})}let A=new R;k.forEach((e,t)=>g.setColorAt(t,A.set(e.color)));function j(e,t,n){let r=a[e],i=r.edges.filter(e=>e!==t);if(i.length===0)return t;let o=s[t],c=o.a===e?o.b:o.a,l=r.x-a[c].x,u=r.z-a[c].z,d=Math.hypot(l,u)||1,f=i[0],p=-2;for(let t of i){let n=s[t],i=n.a===e?n.b:n.a,o=a[i].x-r.x,c=a[i].z-r.z,m=Math.hypot(o,c)||1,h=l/d*(o/m)+u/d*(c/m);h>p&&(p=h,f=t)}return n()<.65?f:i[n()*i.length|0]}let ne=j,M=new o,N=(e,t)=>{M.position.set(0,-50,0),M.scale.setScalar(0),M.updateMatrix(),e.setMatrixAt(t,M.matrix)},P=.085,ie=Ye.PLINTH_TOP+.02+.13,ae=new b(new re(.04,.1,3,6),Y(new m({flatShading:!0,roughness:.8})),14);ae.castShadow=!0,ae.receiveShadow=!1,ae.frustumCulled=!1,ae.raycast=()=>{};let I=ct(t-.72,e),z=[];for(let e=0;e<14;e++)z.push({phase:e/14,speed:.12+e%4*.02,dir:e%2?1:-1});let oe=new V,B=new V,ce=new R;z.forEach((e,t)=>ae.setColorAt(t,ce.set([`#caa`,`#9ab`,`#bba`,`#ab9`][t%4]))),r.add(ae);let le={manhattan:`#e8c84a`,paris:`#dcd2bc`,neoTokyo:`#5ae8e0`};function ue(e){e&&f.color.set(le[e.key]||`#e8c84a`)}ue(n);function de(t,n,r){let i=r?r.t:.5,o=r?r.windowGlow:0,c=Math.max(2,Math.round(lt(i)*12)),l=o>.05;for(let e=0;e<12;e++){if(e>=c){N(g,e),v[e*3+1]=-50,v[(12+e)*3+1]=-50;continue}let n=k[e];n.s+=t*n.speed;let r=0;for(;n.s>=s[n.edge].len&&r++<4;){n.s-=s[n.edge].len;let e=n.fwd?s[n.edge].b:s[n.edge].a,t=ne(e,n.edge,n.rng);n.edge=t,n.fwd=s[t].a===e}let i=s[n.edge],o=n.fwd?a[i.a]:a[i.b],u=n.fwd?a[i.b]:a[i.a],d=u.x-o.x,f=u.z-o.z,p=Math.hypot(d,f)||1,m=d/p,h=f/p,_=-h,y=m,b=o.x+m*n.s+_*P,x=o.z+h*n.s+y*P,S=Math.atan2(m,h);M.position.set(b,ie,x),M.rotation.set(0,S,0),M.scale.set(1,1,n.lenZ),M.updateMatrix(),g.setMatrixAt(e,M.matrix);let C=.74*n.lenZ*.5,w=ie+.06,T=e*3,E=(12+e)*3;l?(v[T]=b+m*(C+.04),v[T+1]=w,v[T+2]=x+h*(C+.04),v[E]=b-m*(C+.02),v[E+1]=w,v[E+2]=x-h*(C+.02)):(v[T+1]=-50,v[E+1]=-50)}g.instanceMatrix.needsUpdate=!0,_.attributes.position.needsUpdate=!0,T.opacity=F.clamp(o*1.8,0,1);let u=Math.max(2,Math.round(lt(i)*14));for(let t=0;t<14;t++){if(t>=u){N(ae,t);continue}let r=z[t],i=(r.phase+r.dir*r.speed*n*.02+1e3)%1;I.getPointAt(i,oe),I.getTangentAt(i,B);let a=Math.sin(n*6+r.phase*30)*.015;M.position.set(oe.x,e+.09+a,oe.z),M.rotation.set(0,Math.atan2(B.x*r.dir,B.z*r.dir),Math.sin(n*6+r.phase*30)*.06),M.scale.setScalar(1),M.updateMatrix(),ae.setMatrixAt(t,M.matrix)}ae.instanceMatrix.needsUpdate=!0}return{group:r,update:de,setProfile:ue,graph:i,setRouter(e){ne=e||j}}}function ft(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.4,`rgba(255,255,255,0.5)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new O(e);return r.colorSpace=s,r}function pt(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64*.62,0,64/2,64*.62,64*.5);n.addColorStop(0,`rgba(240,250,255,0.95)`),n.addColorStop(1,`rgba(240,250,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new O(e);return r.colorSpace=s,r}function mt(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`);t.strokeStyle=`rgba(40,46,54,0.9)`,t.lineWidth=6,t.lineCap=`round`,t.beginPath(),t.moveTo(8,40),t.quadraticCurveTo(24,18,32,34),t.quadraticCurveTo(40,18,56,40),t.stroke();let n=new O(e);return n.colorSpace=s,n}function ht(e,t,n=18){let r=[];for(let i=0;i<n;i++){let a=i/n*Math.PI*2;r.push(new V(Math.cos(a)*e,t,Math.sin(a)*e))}return new ce(r,!0,`catmullrom`,.5)}function gt(e,t,n){let r=e-t,i=[],a=(e,t)=>i.push(new V(e,n,t)),o=(e,n,r,i,o=4)=>{for(let s=1;s<=o;s++){let c=r+(i-r)*(s/o);a(e+Math.cos(c)*t,n+Math.sin(c)*t)}};for(let t=0;t<4;t++)a(e,-r+2*r*t/4);o(r,r,0,Math.PI/2);for(let t=0;t<4;t++)a(r-2*r*t/4,e);o(-r,r,Math.PI/2,Math.PI);for(let t=0;t<4;t++)a(-e,r-2*r*t/4);o(-r,-r,Math.PI,1.5*Math.PI);for(let t=0;t<4;t++)a(-r+2*r*t/4,-e);return o(r,-r,1.5*Math.PI,2*Math.PI),new ce(i,!0,`catmullrom`,.5)}function _t({extent:e=8,waterSize:t=28,plinthTop:n=.3}={}){let r=new y;r.raycast=()=>{};let i=.06,a=(e,n,r)=>r.set(e/t+.5,-n/t+.5,0),o=[gt(9.5,3,i),ht(12.7,i),new ce([new V(8.4,i,0),new V(11,i,-3.6),new V(13,i,0),new V(11,i,3.6)],!0,`catmullrom`,.5)],s=o.map(e=>e.getLength());function l({scale:e=1,hull:t=`#6b7785`,cabin:n=`#e7ecf2`}){let r=new y,i=new P(new D(.46*e,.2*e,1.1*e),Y(new m({color:t,roughness:.6,metalness:.2,flatShading:!0}),{color:t}));i.position.y=.02;let a=new P(new D(.3*e,.22*e,.42*e),Y(new m({color:n,roughness:.7,flatShading:!0}),{color:n}));return a.position.set(0,.18*e,.08*e),r.add(i,a),r.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!1),e.raycast=()=>{}}),r.userData.halfLen=.55*e,r}let u=[{laneIndex:0,dir:1,speed:.5,wake:.024,scale:1,hull:`#5a6675`,cabin:`#e7ecf2`},{laneIndex:1,dir:-1,speed:.42,wake:.022,scale:1,hull:`#7a5b46`,cabin:`#d9c3a6`},{laneIndex:0,dir:1,speed:.56,wake:.024,scale:.9,hull:`#456079`,cabin:`#cfe0ee`},{laneIndex:2,dir:1,speed:.34,wake:.03,scale:1.35,hull:`#39505f`,cabin:`#e2b85a`}];u.forEach((e,t)=>{e.mesh=l(e),e.u=t*.27%1,e.phase=t*1.7,e.isFerry=e.laneIndex===2,r.add(e.mesh)});let d=u.length,f=d*2,p=new se,h=new Float32Array(f*3).fill(-50),g=new Float32Array(f*3),v=new R(`#fff0c0`),b=new R(`#ff3528`);for(let e=0;e<d;e++)v.toArray(g,e*3),b.toArray(g,(d+e)*3);p.setAttribute(`position`,new L(h,3)),p.setAttribute(`color`,new L(g,3));let x=new S(p,new c({size:.6,sizeAttenuation:!0,map:ft(),vertexColors:!0,transparent:!0,opacity:0,blending:2,depthWrite:!1}));x.frustumCulled=!1,x.raycast=()=>{},r.add(x);function C(e,t){let n=new P(new T(e,9,7),Y(new m({color:t,roughness:.5,flatShading:!0}),{color:t}));return n.scale.set(.55,.5,1),n.castShadow=!1,n.receiveShadow=!1,n.raycast=()=>{},n.position.y=-5,n}let w=[{x:-9.5,z:6,size:.18,color:`#5b6f86`,period:11,arcH:.55,span:1.1,whale:!1},{x:7.5,z:-9.5,size:.16,color:`#4a6076`,period:14,arcH:.5,span:1,whale:!1},{x:-7,z:-8.5,size:.2,color:`#607089`,period:9,arcH:.6,span:1.2,whale:!1},{x:10.5,z:7,size:.62,color:`#3a4350`,period:38,arcH:.9,span:2.6,whale:!0}];w.forEach((e,t)=>{e.mesh=C(e.size,e.color),e.heading=Math.atan2(-e.x,-e.z),e.t=t/w.length*e.period,e.splashed=!1,r.add(e.mesh),e.whale&&(e.spout=new E(new _({map:pt(),transparent:!0,opacity:0,depthWrite:!1,fog:!0})),e.spout.scale.set(.6,1.1,1),e.spout.position.set(e.x,-5,e.z),r.add(e.spout))});let ee=mt(),te=[];for(let e=0;e<4;e++){let t=new E(new _({map:ee,transparent:!0,opacity:0,depthWrite:!1,fog:!0}));t.scale.setScalar(.5),te.push({sp:t,r:8.6+e*.5,y:1.1+e%2*.5,speed:(.18+e*.03)*(e%2?-1:1),phase:e*1.9}),r.add(t)}let O=w.length,k=Array.from({length:d+O},()=>new V),A=e=>e.laneIndex,j=new V,ne=new V,M=new V;function N(e,t,n){let r=n?n.windowGlow:0,c=1-r;for(let n=0;n<d;n++){let c=u[n],l=o[c.laneIndex],f=s[c.laneIndex],p=c.isFerry?.45+.55*Math.min(1,Math.abs((c.u+.5)%1-.5)*3):1,m=c.u;c.u=(c.u+c.dir*e*c.speed*p/f+1)%1,(c.dir>0?c.u<m:c.u>m)&&(c.laneIndex=A(c)),l.getPointAt(c.u,j),l.getTangentAt(c.u,ne);let g=ne.x*c.dir,_=ne.z*c.dir,v=Math.atan2(g,_),y=Math.sin(t*1.1+c.phase)*.025;c.mesh.position.set(j.x,i+y,j.z),c.mesh.rotation.set(Math.sin(t*.9+c.phase)*.04,v,0);let b=c.mesh.userData.halfLen;a(j.x-g*b,j.z-_*b,M),k[n].set(M.x,M.y,c.wake);let x=n*3,S=(d+n)*3;if(r>.05){let e=.18;h[x]=j.x+g*(b+.05),h[x+1]=e,h[x+2]=j.z+_*(b+.05),h[S]=j.x-g*(b+.02),h[S+1]=e,h[S+2]=j.z-_*(b+.02)}else h[x+1]=-50,h[S+1]=-50}re(),x.material.opacity=F.clamp(r*1.8,0,1);for(let t=0;t<O;t++){let n=w[t];n.t+=e;let r=d+t,o=n.whale?3.2:1.3;if(n.t>=n.period){let e=(n.t-n.period)/o;if(e>=1){n.t=0,n.splashed=!1,n.mesh.position.y=-5,n.spout&&(n.spout.material.opacity=0),k[r].set(0,0,0);continue}let t=Math.sin(Math.PI*e),s=(e-.5)*n.span,c=n.x+Math.sin(n.heading)*s,l=n.z+Math.cos(n.heading)*s;n.mesh.position.set(c,i-.1+t*n.arcH,l),n.mesh.rotation.set(Math.cos(Math.PI*e)*.9,n.heading,0);let u=e<.16||e>.84;if(a(c,l,M),k[r].set(M.x,M.y,u?n.whale?.07:.05:0),n.spout){let t=F.clamp((e-.15)*3,0,1)*(1-e);n.spout.position.set(c,.56+t*.6,l),n.spout.material.opacity=t*.9}}else n.mesh.position.y=-5,k[r].set(0,0,0),n.spout&&(n.spout.material.opacity=0)}for(let e=0;e<4;e++){let n=te[e],r=n.phase+t*n.speed*.25;n.sp.position.set(Math.cos(r)*n.r,n.y+Math.sin(t*1.4+n.phase)*.12,Math.sin(r)*n.r),n.sp.material.opacity=F.clamp(c*.9-.05,0,.85)}if(typeof window<`u`){let e=0;for(let t of w)t.mesh.position.y>i&&e++;window.__waterLife={boats:d,breaching:e,gulls:+te[0].sp.material.opacity.toFixed(2),lights:+x.material.opacity.toFixed(2)}}}function re(){p.attributes.position.needsUpdate=!0}function ie(){return k.length}return{group:r,update:N,wakeDrops:k,get wakeCount(){return ie()},lanes:o,setRouter(e){A=e||(e=>e.laneIndex)}}}var vt=[`empireState`,`chrysler`,`liberty`,`eiffel`,`arcDeTriomphe`,`sacreCoeur`,`tokyoTower`,`pagoda`,`neonBillboard`],yt={empireState:1.25,chrysler:1.1,liberty:.55,eiffel:3.2,arcDeTriomphe:1.5,sacreCoeur:1.75,tokyoTower:1.35,pagoda:.5,neonBillboard:.9};function bt(e){let t=()=>new m({flatShading:!0,roughness:.7,metalness:.1}),n=(n,r={})=>r.windows?Re(t(),{color:n,id:e.id(),windowGlow:e.windowGlow,winColors:e.winColors,litFrac:e.litFrac}):Y(t(),{color:n,glow:r.glow??null,glowDay:r.glowDay??0,glowNight:r.glowNight??1,windowGlow:r.glow?e.windowGlow:null});return{box:(e,t,r,i,a={})=>new P(new D(e,t,r),n(i,a)),cyl:(e,t,r,i,a={})=>new P(new M(e,t,r,a.seg||12),n(i,a)),cone:(e,t,r,i={})=>new P(new ie(e,t,i.seg||8),n(r,i)),sphere:(e,t,r={})=>new P(new T(e,r.seg||12,r.seg2||8),n(t,r)),lathe:(e,t,r={})=>new P(new a(e.map(e=>new A(e[0],e[1])),r.seg||4),n(t,r))}}var Z=(e,t,n,r)=>(e.position.set(t,n,r),e),xt=[`#7FB0E0`,`#E07FB0`,`#7FE0A0`,`#E0C97F`,`#9FE07F`,`#7FE0E0`,`#FF8C42`,`#E0E07F`,`#C97FE0`,`#E07F7F`,`#7F9FE0`,`#E0483A`],St={empireState(e,t){let n=`#E8E0CF`;e.add(Z(t.box(.42,.18,.42,n,{windows:!0}),0,.09,0)),e.add(Z(t.box(.34,.16,.34,n,{windows:!0}),0,.26,0)),e.add(Z(t.box(.26,.14,.26,n,{windows:!0}),0,.41,0)),e.add(Z(t.box(.19,.34,.19,n,{windows:!0}),0,.65,0)),e.add(Z(t.box(.13,.06,.13,n,{windows:!0}),0,.85,0));let r=xt[new Date().getMonth()];e.add(Z(t.cyl(.03,.045,.12,n,{seg:10,glow:r,glowNight:1.85}),0,.94,0)),e.add(Z(t.cone(.012,.07,n,{seg:8}),0,1.04,0))},chrysler(e,t){let n=`#C9CED4`;e.add(Z(t.box(.22,.55,.22,`#9AA7B4`,{windows:!0}),0,.275,0));let r=.55;for(let i=0;i<5;i++){let a=.14-i*.024,o=.07;e.add(Z(t.cyl(a*.7,a,o,n,{seg:8,glow:`#dfeaff`,glowNight:.5}),0,r+o/2,0)),r+=o}e.add(Z(t.cone(.018,.16,n,{seg:8}),0,r+.08,0))},liberty(e,t){let n=`#B9B4A6`,r=`#4FA890`;e.add(Z(t.box(.42,.16,.42,n),0,.08,0)),e.add(Z(t.box(.3,.2,.3,n),0,.26,0)),e.add(Z(t.cyl(.1,.15,.42,r,{seg:10}),0,.57,0)),e.add(Z(t.box(.11,.1,.11,r),0,.83,0));for(let n=0;n<7;n++){let i=(n/6-.5)*Math.PI*1.1;e.add(Z(t.cone(.012,.1,r,{seg:5}),Math.sin(i)*.1,.92,Math.cos(i)*.06-.02))}let i=Z(t.cyl(.025,.03,.34,r,{seg:8}),.14,.98,0);i.rotation.z=.35,e.add(i),e.add(Z(t.box(.06,.06,.06,r,{glow:`#ffd060`,glowDay:.6,glowNight:1.2}),.2,1.16,0)),e.add(Z(t.cone(.04,.09,`#ffcf66`,{seg:6,glow:`#ffd060`,glowDay:.7,glowNight:1.3}),.2,1.24,0))},eiffel(e,t){let n=`#6E5C4C`,r=[[.2,0],[.13,.16],[.085,.33],[.055,.5],[.035,.66],[.02,.85],[0,.92]];e.add(t.lathe(r,n,{seg:4}));let i=t.lathe(r,n,{seg:4});i.rotation.y=Math.PI/4,e.add(i),e.add(Z(t.box(.26,.025,.26,n),0,.33,0)),e.add(Z(t.box(.14,.02,.14,n),0,.66,0)),e.add(Z(t.cone(.01,.1,n,{seg:6}),0,.97,0))},arcDeTriomphe(e,t){let n=`#D9D0C1`,r=.58,i=.5,a=.34,o=new u;o.moveTo(-.58/2,0),o.lineTo(r/2,0),o.lineTo(r/2,i),o.lineTo(-.58/2,i),o.lineTo(-.58/2,0);let s=new f,c=.15,l=.22;s.moveTo(-.15,0),s.lineTo(-.15,l),s.absarc(0,l,c,Math.PI,0,!0),s.lineTo(c,0),s.lineTo(-.15,0),o.holes.push(s);let d=new fe(o,{depth:a,bevelEnabled:!1});d.translate(0,0,-.34/2),d.computeVertexNormals(),e.add(new P(d,Y(new m({color:n,flatShading:!0}),{color:n}))),e.add(Z(t.box(r*1.06,.08,a*1.06,n),0,.54,0))},sacreCoeur(e,t){let n=`#F1EEE6`;e.add(Z(t.box(.5,.26,.4,n),0,.13,0));let r=(r,i,a,o)=>{e.add(Z(t.cyl(a*.9,a,i,n,{seg:12}),r,o,0));let s=Z(t.sphere(a,n,{seg:12}),r,o+i/2,0);s.scale.y=1.5,e.add(s)};r(0,.22,.15,.4),r(-.2,.1,.07,.33),r(.2,.1,.07,.33)},tokyoTower(e,t){let n=`#F25822`,r=`#EDEDED`,i=0;for(let a=0;a<9;a++){let o=a/9,s=(a+1)/9,c=.19*(1-o)+.03*o,l=.19*(1-s)+.03*s,u=.085,d=a%2?r:n;e.add(Z(t.cyl(l,c,u,d,{seg:4,glow:n,glowDay:0,glowNight:.7}),0,i+u/2,0)),i+=u}e.add(Z(t.box(.22,.02,.22,n,{glow:n,glowNight:.7}),0,.28,0)),e.add(Z(t.box(.12,.02,.12,r),0,.5,0)),e.add(Z(t.cone(.012,.16,r,{seg:6,glow:`#ff6a2a`,glowNight:.9}),0,i+.08,0))},pagoda(e,t){let n=0;for(let r=0;r<5;r++){let i=.42-r*.06,a=.11;e.add(Z(t.box(i,a,i,`#B23A2C`,{windows:r<4}),0,n+a/2,0)),e.add(Z(t.box(i*1.34,.03,i*1.34,`#7A3B2A`),0,n+a+.015,0)),n+=.16999999999999998}e.add(Z(t.cyl(.012,.012,.1,`#E0C040`,{seg:6}),0,n+.05,0)),e.add(Z(t.sphere(.03,`#E0C040`,{seg:8,glow:`#ffe680`,glowNight:.8}),0,n+.12,0))},neonBillboard(e,t){let n=`#20242C`;e.add(Z(t.box(.3,1,.3,n,{windows:!0}),0,.5,0));let r=[`#5AE8E0`,`#E85AA0`,`#E8E06A`],i=(n,r,i,a,o,s,c)=>{let l=Z(t.box(n,r,.02,i,{glow:i,glowDay:.6,glowNight:1.1}),a,o,s);l.rotation.y=c,e.add(l)};i(.22,.34,r[0],0,.75,.16,0),i(.16,.5,r[1],.16,.5,0,Math.PI/2),i(.2,.22,r[2],0,.34,-.16,0),e.add(Z(t.cone(.01,.14,n,{seg:6,glow:`#E85AA0`,glowDay:.4,glowNight:1}),0,1.08,0))}};function Ct(e,t){let n=new y;return St[e](n,bt(t)),n}var wt=``+new URL(`building-skyscraper-d-CapD2Zqe.glb`,import.meta.url).href,Tt=``+new URL(`building-n-hdv8kKtN.glb`,import.meta.url).href,Et=``+new URL(`building-g-CsTB1qH9.glb`,import.meta.url).href,Dt=``+new URL(`colormap-CK8fW2HB.png`,import.meta.url).href,Ot={skyscraper:{url:wt,color:`#9cc1dd`,fill:.92},midrise:{url:Tt,color:`#c9a07a`,fill:.96},setback:{url:Et,color:`#d9c7a0`,fill:.9}};function kt({windowGlow:e}){let t=new h;t.setURLModifier(e=>e.includes(`colormap.png`)?Dt:e);let n=new B(t),r={},i=!1,a=Promise.all(Object.entries(Ot).map(async([e,t])=>{r[e]=(await n.loadAsync(t.url)).scene})).then(()=>{i=!0,window.__landmarksReady=!0}).catch(e=>console.error(`landmark models failed:`,e)),o=9e3;function s(t,n,i={}){let a,s;if(vt.includes(t))a=Ct(t,{windowGlow:e,winColors:i.winColors,litFrac:i.litFrac,id:()=>++o}),s=1;else{let e=r[t],n=Ot[t];if(!e||!n)return null;a=e.clone(!0),s=n.fill}a.updateMatrixWorld(!0);let c=new N().setFromObject(a).getSize(new V);a.scale.setScalar(n.h*s/c.y),a.updateMatrixWorld(!0);let l=new N().setFromObject(a),u=l.getCenter(new V);return a.position.x+=n.x-u.x,a.position.z+=n.z-u.z,a.position.y+=n.plinthTop-l.min.y,vt.includes(t)?a.traverse(e=>{e.isMesh&&(e.castShadow=!1,e.raycast=()=>{})}):a.traverse(n=>{if(!n.isMesh)return;n.castShadow=!1,n.raycast=()=>{};let r=n=>Re(n.clone(),{color:Ot[t].color,id:++o,windowGlow:e,winColors:i.winColors,litFrac:i.litFrac});n.material=Array.isArray(n.material)?n.material.map(r):r(n.material)}),a}return{make:s,whenReady:a,heightFactor:e=>yt[e]??1,get ready(){return i}}}var At=[`clear`,`rain`,`snow`,`fog`];function jt({extent:e=7}={}){let t=new y;t.raycast=()=>{};let n=e+2,r=.25,i=(e,t)=>e+Math.random()*(t-e),a=new b(new pe(.015,.5),new p({color:`#a9bdd6`,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),600);a.frustumCulled=!1,a.raycast=()=>{};let s=new Float32Array(600*3),c=new Float32Array(600);for(let e=0;e<600;e++)s[e*3]=i(-n,n),s[e*3+1]=i(r,11),s[e*3+2]=i(-n,n),c[e]=i(9,14);let l=new b(new pe(.07,.07),new p({color:`#f3f7ff`,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),700);l.frustumCulled=!1,l.raycast=()=>{};let u=new Float32Array(700*3),d=new Float32Array(700),f=new Float32Array(700);for(let e=0;e<700;e++)u[e*3]=i(-n,n),u[e*3+1]=i(r,11),u[e*3+2]=i(-n,n),d[e]=i(0,6.28),f[e]=i(.6,1.2);t.add(a,l);let m=Array.from({length:8},()=>new V),h=0,g=`clear`,_=0,v=0,x=0,S=0,C=0,w=new o,T=(e,t,n,r)=>e+(t-e)*Math.min(1,n*r);function E(e){At.includes(e)&&(g=e)}function ee(){g=At[(At.indexOf(g)+1)%At.length]}function D(e,t){let o=g===`rain`,p=g===`snow`,y=g===`fog`,b=g!==`clear`;_=T(_,+!!b,e,1.4),v=T(v,+!!b,e,1.2),x=T(x,+!!y,e,.9),C=T(C,b&&!y?1:0,e,1),S=T(S,+!!p,e,p?.22:.5);let E=o?_:0,ee=Math.round(600*E);for(let t=0;t<600;t++){if(t>=ee){w.position.set(0,-50,0),w.scale.setScalar(0),w.updateMatrix(),a.setMatrixAt(t,w.matrix);continue}s[t*3+1]-=c[t]*e,s[t*3]+=e*1.1,s[t*3+1]<r&&(s[t*3]=i(-n,n),s[t*3+1]=11,s[t*3+2]=i(-n,n)),w.position.set(s[t*3],s[t*3+1],s[t*3+2]),w.rotation.set(0,0,0),w.scale.set(1,1,1),w.updateMatrix(),a.setMatrixAt(t,w.matrix)}a.instanceMatrix.needsUpdate=!0,a.material.opacity=.55*E,h=o?Math.round(8*_):0;for(let e=0;e<h;e++)m[e].set(Math.random(),Math.random(),.05*_);let D=Math.round(700*(p?_:0));for(let a=0;a<700;a++){if(a>=D){w.position.set(0,-50,0),w.scale.setScalar(0),w.updateMatrix(),l.setMatrixAt(a,w.matrix);continue}u[a*3+1]-=f[a]*e;let o=Math.sin(t*1.5+d[a])*.5;u[a*3+1]<r&&(u[a*3]=i(-n,n),u[a*3+1]=11,u[a*3+2]=i(-n,n)),w.position.set(u[a*3]+o,u[a*3+1],u[a*3+2]),w.rotation.set(0,0,0),w.scale.setScalar(1),w.updateMatrix(),l.setMatrixAt(a,w.matrix)}l.instanceMatrix.needsUpdate=!0,l.material.opacity=.9*(p?_:0)}return{group:t,update:D,cycle:ee,setKind:E,rainDrops:m,get kind(){return g},get intensity(){return _},get overcast(){return v},get fog(){return x},get snow(){return S},get cloud(){return C},get rainDropCount(){return h},poolCounts:{rain:600,snow:700}}}function Mt(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=(e,n,r)=>{let i=t.createRadialGradient(e,n,0,e,n,r);i.addColorStop(0,`rgba(255,255,255,0.95)`),i.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=i,t.beginPath(),t.arc(e,n,r,0,7),t.fill()};n(128*.42,128*.56,128*.26),n(128*.6,128*.5,128*.3),n(128*.5,128*.46,128*.22),n(128*.34,128*.54,128*.18),n(128*.7,128*.58,128*.18);let r=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5],i=t.getImageData(0,0,128,128),a=i.data;for(let e=0;e<128;e++)for(let t=0;t<128;t++){let n=(e*128+t)*4,i=a[n+3]/255,o=(r[e%4*4+t%4]+.5)/16-.5;a[n+3]=Math.max(0,Math.min(1,Math.floor(i*5+.5+o)/5))*255}t.putImageData(i,0,0);let o=new O(e);return o.colorSpace=s,o}function Nt({extent:e=8,count:t=16}={}){let n=new y;n.raycast=()=>{};let r=Mt(),i=e+6,a=(e,t)=>e+Math.random()*(t-e),o=[];for(let e=0;e<t;e++){let e=new _({map:r,transparent:!0,depthWrite:!1,opacity:0,fog:!0}),t=new E(e),s={sp:t,mat:e,wisp:Math.random(),x:a(-i,i),z:a(-i,i),hiY:a(4,6.8),loY:a(.6,2.2),w:a(3,5.6),h:a(1.7,3),speed:a(.25,.7),op:a(.6,1)};t.raycast=()=>{},o.push(s),n.add(t)}let s=new R,c=new R(`#ffffff`),l=new R(`#5b626e`);function u(e,t,n,r){let u=r?r.cloud:0,d=r?r.fog:0,f=Math.min(1,.4+.6*u+.5*d);s.copy(n.sky).lerp(c,.62),s.lerp(l,.6*u);for(let n=0;n<o.length;n++){let r=o[n],c=n/o.length<f;r.x+=r.speed*e*(.6+.8*u),r.x>i&&(r.x=-i,r.z=a(-i,i));let l=Math.min(Pt(r.x,-i,-i+3),1-Pt(r.x,i-3,i)),p=r.hiY*(1-d)+r.loY*d,m=1-.5*r.wisp,h=.72*Math.max(0,1-d-u)+1*u+.42*d,g=c?Math.max(0,h)*r.op*m*l:0;r.mat.opacity+=(g-r.mat.opacity)*Math.min(1,e*2.5),r.mat.color.copy(s);let _=r.w*(1+.6*d)*(1+.4*r.wisp),v=r.h*(1-.35*d);r.sp.scale.set(_,v,1),r.sp.position.set(r.x,p+Math.sin(t*.3+n)*.15,r.z)}}function d(e){r=e;for(let t of o)t.mat.map=e,t.mat.needsUpdate=!0}return{group:n,update:u,setTexture:d,get count(){return o.length}}}function Pt(e,t,n){let r=Math.max(0,Math.min(1,(e-t)/(n-t)));return r*r*(3-2*r)}var Ft=`varying vec2 vUv;

void main() {
  
  
  
  vUv = uv;

  
  
  
  
  
  
  
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,It=`precision highp float;

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
}`,Lt=`varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0); 
}`,Rt=`precision highp float;

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

#define WAKE_MAX 8
uniform int  uWakeCount;          
uniform vec3 uWakeDrops[WAKE_MAX];

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

  
  
  for (int i = 0; i < WAKE_MAX; i++) {
    if (i >= uWakeCount) break;
    vec3 w = uWakeDrops[i];
    float wd = distance(vUv, w.xy);
    next += w.z * exp(-(wd * wd) / (2.0 * 0.011 * 0.011));
  }

  
  gl_FragColor = vec4(next, 0.0, 0.0, 1.0);
}`,zt=`precision highp float;

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
}`,Bt=`precision highp float;

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
}`,Vt=`const float CA_STRENGTH   = 0.0030;  
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
}`,Ht=`const float DITHER = 0.55;   

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
}`,Ut=`precision highp float;

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
}`,Wt=`precision highp float;

varying vec2 vUv;
uniform sampler2D uToon;   
uniform sampler2D uPixel;  
uniform float     uBlend;  

void main() {
  vec3 t = texture2D(uToon, vUv).rgb;
  vec3 p = texture2D(uPixel, vUv).rgb;
  gl_FragColor = vec4(mix(t, p, uBlend), 1.0);
}`,Gt=`precision highp float;

const int   MAX_PALETTE = 64;   
const float BAYER_DIV   = 16.0; 

varying vec2 vUv;
uniform sampler2D uScene;        
uniform vec2      uResolution;   
uniform float     uGridWidth;    
uniform float     uDither;       
uniform sampler2D uPalette;      
uniform int       uPaletteSize;  
uniform float     uUsePalette;   

/* 4×4 Bayer threshold (0..15) for a virtual-pixel cell — laid out column-major. */
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

/* Read palette entry i from the LUT texture (centre-sample the i-th texel). */
vec3 paletteEntry(int i) {
  float u = (float(i) + 0.5) / float(uPaletteSize);
  return texture2D(uPalette, vec2(u, 0.5)).rgb;
}

void main() {
  /* 1) SNAP — sample the CENTRE of the virtual cell so each cell is one flat colour.
     Cell height follows the real aspect so cells stay square on screen. */
  float aspect = uResolution.x / uResolution.y;
  vec2  grid   = vec2(uGridWidth, uGridWidth / aspect);
  vec2  cell   = floor(vUv * grid);
  vec2  snapUv = (cell + 0.5) / grid;
  vec3  col    = texture2D(uScene, snapUv).rgb;

  if (uUsePalette < 0.5) {
    /* MODERN era — no palette cap: just the chunky grid, plus a whisper of ordered
       dither so flat regions don't look dead. Full 24-bit colour survives. */
    col += (bayer4(cell) / BAYER_DIV - 0.5) * uDither * 0.04;
    gl_FragColor = vec4(col, 1.0);
    return;
  }

  /* 2) DITHER — bias by ± half a palette step (ordered, per virtual cell) BEFORE the
     snap-to-palette, so gradients resolve into a stable crosshatch instead of bands. */
  float threshold = (bayer4(cell) + 0.5) / BAYER_DIV - 0.5;   
  float palStep   = 1.0 / max(float(uPaletteSize - 1), 1.0);
  col += threshold * palStep * uDither;

  /* 3) QUANTIZE — nearest palette colour by squared RGB distance (sqrt unneeded). */
  vec3  best  = paletteEntry(0);
  float bestD = 1e9;
  for (int i = 0; i < MAX_PALETTE; i++) {
    if (i >= uPaletteSize) break;
    vec3  p  = paletteEntry(i);
    vec3  d  = col - p;
    float dd = dot(d, d);
    if (dd < bestD) { bestD = dd; best = p; }
  }

  gl_FragColor = vec4(best, 1.0);
}`,Kt={"1-bit":{gridWidth:110,dither:.6,palette:[`#15120c`,`#c8b486`]},gb:{gridWidth:130,dither:.4,palette:[`#0f380f`,`#306230`,`#8bac0f`,`#9bbc0f`]},"8-bit":{gridWidth:160,dither:.55,palette:[`#140c1c`,`#442434`,`#30346d`,`#4e4a4e`,`#854c30`,`#346524`,`#d04648`,`#757161`,`#597dce`,`#d27d2c`,`#8595a1`,`#6daa2c`,`#d2aa99`,`#6dc2ca`,`#dad45e`,`#deeed6`]},"16-bit":{gridWidth:280,dither:.3,palette:`#000000.#222034.#45283c.#663931.#8f563b.#df7126.#d9a066.#eec39a.#fbf236.#99e550.#6abe30.#37946e.#4b692f.#524b24.#323c39.#3f3f74.#306082.#5b6ee1.#639bff.#5fcde4.#cbdbfc.#ffffff.#9badb7.#847e87.#696a6a.#595652.#76428a.#ac3232.#d95763.#d77bba.#8f974a.#8a6f30`.split(`.`)},modern:{gridWidth:460,dither:.6,palette:null}},qt=[`gb`,`8-bit`,`16-bit`,`modern`];function Jt(e){let t=Math.max(e.length,1),n=new Float32Array(t*4);e.forEach((e,t)=>{let r=new R(e);n[t*4+0]=r.r,n[t*4+1]=r.g,n[t*4+2]=r.b,n[t*4+3]=1});let r=new ne(n,t,1,x,te);return r.minFilter=g,r.magFilter=g,r.needsUpdate=!0,r}var Yt=220,Xt={night:[`#0A0C16`,`#1C2236`,`#3A3A52`,`#5A5A78`,`#8A92B0`],dawn:[`#1A1008`,`#43281A`,`#7A4A30`,`#B07A4E`,`#E8A86A`],noon:[`#16100A`,`#3A2F1E`,`#6B563A`,`#937B54`,`#B89968`],dusk:[`#140A0A`,`#3E1E1A`,`#7A3828`,`#B85A36`,`#F0884A`]},Zt={night:[`#020604`,`#06180E`,`#10401E`,`#1E9040`,`#7FE0FF`],dawn:[`#060603`,`#1A2410`,`#3A6B22`,`#6CC040`,`#FFC060`],noon:[`#050805`,`#0E2912`,`#1E6B2F`,`#3CF06A`,`#FFB000`],dusk:[`#080402`,`#241408`,`#6B4A12`,`#E0A030`,`#FF7030`]};function Qt({demo:e=!1,citySeed:n=0,profileIndex:a=0}={}){let o=new ae({antialias:!0,preserveDrawingBuffer:!0});o.shadowMap.enabled=!0,o.shadowMap.type=1,o.shadowMap.autoUpdate=!1,o.shadowMap.needsUpdate=!0;let c=!!(window.matchMedia&&window.matchMedia(`(pointer: coarse)`).matches);o.setPixelRatio(Math.min(window.devicePixelRatio,c?1.5:2)),o.setSize(window.innerWidth,window.innerHeight),o.setClearColor(920327,1),document.body.appendChild(o.domElement);let u=o.getDrawingBufferSize(new A),f=new d;f.fog=new de(10465470,0);let m=new R(`#aeb6c0`),h=.062,_=new R(`#74508f`),v=new R,y=Ee({aspect:window.innerWidth/window.innerHeight}),b=ot({t:.5}),S={type:r,format:x,minFilter:g,magFilter:g,wrapS:j,wrapT:j,depthBuffer:!1,stencilBuffer:!1},C=[new I(256,256,S),new I(256,256,S),new I(256,256,S)];for(let e of C)o.setRenderTarget(e),o.clear();o.setRenderTarget(null);let w=new d,T=new l(-1,1,1,-1,0,1),E=new z({vertexShader:Lt,fragmentShader:Rt,uniforms:{uCurr:{value:null},uPrev:{value:null},uTexel:{value:new A(1/256,1/256)},uMouse:{value:new A(-1,-1)},uMouseStrength:{value:0},uC2:{value:.25},uDamping:{value:.992},uRainCount:{value:0},uRainDrops:{value:Array.from({length:8},()=>new V)},uWakeCount:{value:0},uWakeDrops:{value:Array.from({length:8},()=>new V)}}});w.add(new P(new pe(2,2),E));let D=new I(u.x,u.y,{minFilter:i,magFilter:i,depthBuffer:!0,stencilBuffer:!1});function te(e){let t=document.createElement(`canvas`);t.width=t.height=1024;let n=t.getContext(`2d`);n.fillStyle=e?`#0c1418`:`#15110b`,n.fillRect(0,0,1024,1024),n.strokeStyle=e?`rgba(120,150,170,0.22)`:`rgba(184,153,104,0.30)`,n.lineWidth=2;for(let e=0;e<=1024;e+=64)n.beginPath(),n.moveTo(e,0),n.lineTo(e,1024),n.stroke(),n.beginPath(),n.moveTo(0,e),n.lineTo(1024,e),n.stroke();e||(n.fillStyle=`#B89968`,n.font=`bold 360px Georgia, serif`,n.textAlign=`center`,n.textBaseline=`middle`,n.fillText(`LGR`,512,470),n.font=`600 64px ui-monospace, monospace`,n.fillText(`WEB · STUDIO`,512,720));let r=new O(t);return r.colorSpace=s,r}let k=new P(new pe(28,28),new p({map:te(e)}));k.rotation.x=-Math.PI/2,k.position.y=-.35,f.add(k);let ne=new P(new pe(40,24),new z({depthWrite:!1,vertexShader:Ft,fragmentShader:It,uniforms:{uTime:{value:0},uInk:{value:b.horizon},uGold:{value:b.sky},uFogColor:{value:v},uFogAmt:{value:0},uFogCharm:Ne}}));ne.position.set(0,3,-8),f.add(ne);let M=new z({vertexShader:zt,fragmentShader:Bt,uniforms:{uHeight:{value:null},uScene:{value:D.texture},uTexel:{value:new A(1/256,1/256)},uResolution:{value:new A(u.x,u.y)},uDisplace:{value:.42},uNormalStrength:{value:22},uRefractStrength:{value:.06},uChromaScale:{value:1},uNormalMatrix:{value:new t},uLightDir:{value:b.sunDir},uInk:{value:new R(`#2A2218`)},uGold:{value:new R(`#B89968`)},uVector:De,uVecWater:{value:new R(`#1fb8d8`)},uVecTint:{value:Oe}}}),N=new P(new pe(28,28,255,255),M);N.rotation.x=-Math.PI/2,N.updateMatrixWorld(!0),M.uniforms.uNormalMatrix.value.getNormalMatrix(N.matrixWorld),f.add(N);let re={value:0},ie=kt({windowGlow:re}),L=Qe({seed:n,profileIndex:a,landmarkFactory:ie,windowGlow:re});f.add(L.group);let oe=dt({plinthTop:.3,extent:L.extent,profile:L.state.profile});f.add(oe.group);let se=_t({extent:L.extent,waterSize:28,plinthTop:.3});f.add(se.group),E.uniforms.uWakeDrops.value=se.wakeDrops;let B=jt({extent:L.extent});f.add(B.group),E.uniforms.uRainDrops.value=B.rainDrops;let ce=Nt({extent:L.extent});f.add(ce.group),L.group.remove(L.key),f.add(L.key),L.key.castShadow=!0,L.key.shadow.mapSize.set(2048,2048),L.key.shadow.bias=-18e-5,L.key.shadow.normalBias=.028,f.add(L.key.target);function le(){let e=L.key.shadow.camera,t=L.extent+4.5;e.left=-t,e.right=t,e.top=t,e.bottom=-t,e.near=1,e.far=48,e.updateProjectionMatrix(),o.shadowMap.needsUpdate=!0}le();let ue=new ee(u.x,u.y),fe=new I(u.x,u.y,{minFilter:i,magFilter:i,depthBuffer:!0,stencilBuffer:!1,depthTexture:ue}),me=new I(u.x,u.y,{minFilter:i,magFilter:i,depthBuffer:!1,stencilBuffer:!1}),he=new I(u.x,u.y,{minFilter:i,magFilter:i,depthBuffer:!1,stencilBuffer:!1}),ge=new I(u.x,u.y,{minFilter:i,magFilter:i,depthBuffer:!1,stencilBuffer:!1}),_e=new d,ve=new l(-1,1,1,-1,0,1),ye=new P(new pe(2,2));_e.add(ye);let H=new z({vertexShader:Lt,fragmentShader:Vt,uniforms:{uScene:{value:fe.texture},uTime:{value:0},uResolution:{value:new A(u.x,u.y)},uGrain:{value:1},uChroma:{value:1},uExposure:{value:1}}}),be=e=>{let t=e.map(e=>new R(e));for(;t.length<8;)t.push(new R(0,0,0));return t},xe=[`night`,`dawn`,`noon`,`dusk`],U={inkgold:xe.map(e=>be(Xt[e])),terminal:xe.map(e=>be(Zt[e]))},W=new z({vertexShader:Lt,fragmentShader:Ht,uniforms:{uScene:{value:me.texture},uResolution:{value:new A(u.x,u.y)},uPixelSize:{value:Yt},uPalette:{value:U.inkgold[2]},uPaletteB:{value:U.inkgold[2]},uPaletteBlend:{value:0},uPaletteSize:{value:5}}}),G=new z({vertexShader:Lt,fragmentShader:Gt,uniforms:{uScene:{value:me.texture},uResolution:{value:new A(u.x,u.y)},uGridWidth:{value:160},uDither:{value:.55},uPalette:{value:Jt(Kt[`8-bit`].palette)},uPaletteSize:{value:1},uUsePalette:{value:1}}}),Se={};for(let e of qt)Se[e]=Kt[e].palette?Jt(Kt[e].palette):null;let Ce=new z({vertexShader:Lt,fragmentShader:Ut,uniforms:{uScene:{value:me.texture},uDepth:{value:ue},uResolution:{value:new A(u.x,u.y)},uBands:{value:4},uToonGain:{value:1.7},uToonGamma:{value:.6},uToonFloor:{value:b.toonFloor},uOutline:{value:b.outline},uNear:{value:.1},uFar:{value:100},uIsPerspective:{value:1}}}),we=new z({vertexShader:Lt,fragmentShader:Wt,uniforms:{uToon:{value:he.texture},uPixel:{value:ge.texture},uBlend:{value:0}}});function Te(e,t){ye.material=e,o.setRenderTarget(t),o.render(_e,ve)}function Fe(){y.setViewport(window.innerWidth,window.innerHeight),o.setSize(window.innerWidth,window.innerHeight);let e=o.getDrawingBufferSize(new A);return D.setSize(e.x,e.y),fe.setSize(e.x,e.y),me.setSize(e.x,e.y),he.setSize(e.x,e.y),ge.setSize(e.x,e.y),M.uniforms.uResolution.value.set(e.x,e.y),H.uniforms.uResolution.value.set(e.x,e.y),W.uniforms.uResolution.value.set(e.x,e.y),G.uniforms.uResolution.value.set(e.x,e.y),Ce.uniforms.uResolution.value.set(e.x,e.y),e}let K=3,q=!1,Ie=!1,J=`native`,Le=.3,Re=.46,Y=[`native`,...qt],ze={"16-bit":`16-bit`,"8-bit":`8-bit`,gb:`Game Boy`,modern:`Modern`,native:`Pixel`,"1-bit":`1-bit`};typeof window<`u`&&(window.__mode=K,window.__vector=q,window.__era=J);let Be=0,Ve=performance.now(),He=typeof window<`u`&&new URLSearchParams(window.location.search).has(`perf`);typeof window<`u`&&(window.__perf=He),He&&(o.info.autoReset=!1);let X=null,Ue=new V(1,1,1),We=!1;function Ge(e){let t=Ie?U.terminal:U.inkgold,n=e%1*4,r=Math.floor(n)%4;W.uniforms.uPalette.value=t[r],W.uniforms.uPaletteB.value=t[(r+1)%4],W.uniforms.uPaletteBlend.value=n-Math.floor(n)}function Ke(e){let t=Kt[e];t&&(G.uniforms.uGridWidth.value=t.gridWidth,G.uniforms.uDither.value=t.dither,G.uniforms.uUsePalette.value=+!!t.palette,t.palette&&(G.uniforms.uPalette.value=Se[e],G.uniforms.uPaletteSize.value=t.palette.length))}function qe(){J!==`native`&&Ke(J)}let Je=()=>J===`native`?W:G;function Ye(e,t){N.visible=!1,o.setRenderTarget(D),o.render(f,e),N.visible=!0,o.setRenderTarget(t),o.render(f,e)}function Xe(e,t){if(N.visible=!1,o.setRenderTarget(D),o.render(f,y.camera),N.visible=!0,K===1||q&&K!==7&&K!==8)o.setRenderTarget(t),o.render(f,y.camera);else if(o.setRenderTarget(fe),o.render(f,y.camera),K===2)H.uniforms.uGrain.value=1,H.uniforms.uChroma.value=1,Te(H,t);else{H.uniforms.uGrain.value=0,H.uniforms.uChroma.value=0,Te(H,me);let n=y.camera;Ce.uniforms.uNear.value=n.near,Ce.uniforms.uFar.value=n.far,Ce.uniforms.uIsPerspective.value=+!!n.isPerspectiveCamera;let r=e.era?(Ke(e.era),G):Je();e.kind===`pixel`?(Te(r,t),window.__style=`pixel`):e.kind===`toon`?(Te(Ce,t),window.__style=`toon`):(Te(Ce,he),Te(r,ge),we.uniforms.uBlend.value=e.blend,Te(we,t),window.__style=`blend`)}}function Ze(){let e=$e(),t=e.kind===`toon`?1:e.kind===`blend`?1-e.blend:0;return M.uniforms.uChromaScale.value=F.lerp(1,.5,t),e}function $e(){if(K===1||K===2)return{kind:`none`};if(K===7)return{kind:`pixel`};if(K===8)return{kind:`toon`};let e=y.styleT;return window.__styleT=e,e<=Le?{kind:`toon`}:e>=Re?{kind:`pixel`,era:e<.62?`16-bit`:e<.8?`8-bit`:`gb`}:{kind:`blend`,blend:F.smoothstep(e,Le,Re),era:`16-bit`}}function et(e){return K===1||K===2?``:q&&K!==7&&K!==8?`Vector`:e.kind===`toon`?`Toon`:e.kind===`pixel`?ze[e.era||J]||`Pixel`:e.kind===`blend`?`Toon → `+(ze[e.era]||`Pixel`):``}function tt(e,t,{shadowsOn:n=!0,seasonTarget:r=0}={}){if(He){let e=o.info;X={calls:e.render.calls,tris:e.render.triangles,programs:e.programs?e.programs.length:0,geo:e.memory.geometries,tex:e.memory.textures},e.reset()}ne.material.uniforms.uTime.value=t,H.uniforms.uTime.value=t,b.update(e),L.key.position.copy(b.sunDir).multiplyScalar(24),L.key.color.copy(b.sunColor),L.key.intensity=b.sunIntensity,L.fill.color.copy(b.hemiSky),L.fill.groundColor.copy(b.hemiGround),re.value=b.windowGlow;let i=B.overcast;L.key.intensity*=1-.5*i,L.key.color.lerp(m,.45*i),L.fill.intensity=1+.7*i;let a=F.smoothstep(b.sunDir.y,.06,.34),s=F.lerp(.28,1,1-b.windowGlow),c=n?a*s:0;L.key.shadow.intensity=.72*c,ke.value=.52*c,(n&&!We||Ue.distanceToSquared(b.sunDir)>2e-5)&&(o.shadowMap.needsUpdate=!0,Ue.copy(b.sunDir)),We=n;let l=1-b.windowGlow;Oe.setRGB(F.lerp(.46,1,l),F.lerp(.52,1,l),F.lerp(.74,1,l)),H.uniforms.uExposure.value=b.exposure,Ce.uniforms.uToonGain.value=b.toonGain,o.setClearColor(b.horizon,1),Ge(b.t),window.__t=b.t,oe.update(e,t,b),L.update(t),se.update(e,t,b),E.uniforms.uWakeCount.value=se.wakeCount,B.update(e,t),E.uniforms.uRainCount.value=B.rainDropCount;let u=B.fog*(1-l);f.fog.density=B.fog*h,v.copy(b.horizon).lerp(_,.85*u),f.fog.color.copy(v),o.setClearColor(v,1),Ne.value=B.fog,ne.material.uniforms.uFogAmt.value=.7*B.fog,Ae.value=B.snow,je.value=B.cloud*.55,Me.x+=e*.018,Me.y+=e*.009,Pe.value+=(r-Pe.value)*Math.min(1,e*1.5),ce.update(e,t,b,B),Be++;let d=performance.now();d-Ve>=1e3&&(window.__fps=Be,He&&X&&(console.log(`[perf] ${Be} fps · ~${(1e3/Math.max(1,Be)).toFixed(2)} ms · calls ${X.calls} · tris ${X.tris} · programs ${X.programs} · geo ${X.geo} · tex ${X.tex}`),window.__perfInfo={fps:Be,...X}),Be=0,Ve=d);let[p,g,y]=C;E.uniforms.uPrev.value=p.texture,E.uniforms.uCurr.value=g.texture,o.setRenderTarget(y),o.render(w,T),C=[g,y,p],M.uniforms.uHeight.value=C[1].texture}function nt(e){K=e,window.__mode=K}function rt(){return q=!q,De.value=+!!q,window.__vector=q,q}function it(e){return q=!!e,De.value=+!!q,window.__vector=q,q}function at(){return J=Y[(Y.indexOf(J)+1)%Y.length],window.__era=J,qe(),J}function st(){return Ie=!Ie,Ie}return{updateWorld:tt,decideStyle:Ze,renderCityPipeline:Xe,renderCityBeautyTo:Ye,styleHintName:et,setPostMode:nt,toggleVector:rt,setVector:it,cycleEra:at,togglePalette:st,get mode(){return K},get vector(){return q},get sceneEra(){return J},renderer:o,drawBuffer:u,scene:f,rig:y,sunRig:b,SIM:256,targets:C,simScene:w,simCamera:T,simMaterial:E,grabRT:D,card:k,backdrop:ne,WATER_SIZE:28,water:N,waterMaterial:M,windowGlow:re,landmarkFactory:ie,city:L,cityLife:oe,waterLife:se,weatherRig:B,clouds:ce,fitShadowFrustum:le,SHADOW_DIST:24,sceneDepth:ue,sceneRT:fe,filmicRT:me,toonRT:he,pixelRT:ge,postScene:_e,postCamera:ve,postQuad:ye,filmicMaterial:H,pixelMaterial:W,pixelkitMaterial:G,toonMaterial:Ce,mixMaterial:we,PALCACHE:U,ERA_TEX:Se,runPass:Te,OVERCAST_GREY:m,FOG_DENSITY:h,FOG_NIGHT_TINT:_,_fogColor:v,resize:Fe}}var $t=``+new URL(`office-smooth-DEluvd7o.png`,import.meta.url).href,en=``+new URL(`office-charm-D7t90SkH.png`,import.meta.url).href;function Q(e,t,n,r,{rough:i=.62,metal:a=0,x:o=0,y:s=0,z:c=0,emissive:l=null,emissiveIntensity:u=1}={}){let d=new P(new D(e,t,n),new m({color:r,roughness:i,metalness:a,...l?{emissive:l,emissiveIntensity:u}:{}}));return d.position.set(o,s,c),d}function tn({tier:t=`corner`}={}){let r=new d,i=new v(43,1,.1,100),a=new V(0,1.62,4.35);i.position.copy(a),i.lookAt(0,1.12,-1);let o=new y;r.add(o);let c=new y,l=new y,u=new y,f=new y,h=new y;o.add(c,l,u,f,h);let g=[],b=`#3a2618`,x=`#5b3d27`,S=`#5a5650`;c.add(Q(11,.2,11,`#3c2a1c`,{rough:.5,y:-.1})),c.add(Q(11,.2,11,`#241a13`,{rough:.9,y:3}));function C(e){let t=new y;t.add(Q(.2,3.2,8,`#4a3322`,{rough:.7,x:e*3.6,y:1.5,z:0}));for(let n of[.9,2.1])t.add(Q(.22,.06,8,b,{x:e*3.59,y:n,z:0}));let n=new P(new pe(1.5,1),new m({map:un(e),roughness:.8}));return n.position.set(e*3.49,1.7,.4),n.rotation.y=-e*Math.PI/2,t.add(Q(.06,1.18,1.68,`#2a1c10`,{x:e*3.52,y:1.7,z:.4}),n),t}c.add(C(-1),C(1));let T=new pe(3,2.5),ee=new p({color:`#ffffff`,toneMapped:!1}),te=new p({color:`#ffffff`,toneMapped:!1}),O=1.55,A=new P(T,ee);A.position.set(-1.06,O,-2.64),A.rotation.y=Math.PI/4;let j=new P(T,te);j.position.set(1.06,O,-2.64),j.rotation.y=-Math.PI/4,u.add(A,j),c.add(Q(.08,2.7,.08,b,{x:0,y:O,z:-2.2}));for(let[e,t,n]of[[-1.06,-2.64,Math.PI/4],[1.06,-2.64,-Math.PI/4]]){let r=new y;r.add(Q(3.05,.09,.09,b,{y:1.3})),r.add(Q(3.05,.09,.09,b,{y:-1.25})),r.add(Q(.09,2.6,.09,b,{x:-1.5})),r.position.set(e,O,t),r.rotation.y=n,c.add(r)}c.add(Q(5.4,.5,.3,x,{x:0,y:.25,z:-2.1500000000000004})),c.add(Q(.4,.06,.4,`#1a130c`,{y:2.94,z:1.3}));let ne=new P(new k(.16,20),new p({color:`#ffe6b0`,toneMapped:!1}));ne.position.set(0,2.9,1.3),ne.rotation.x=Math.PI/2,c.add(ne),c.add(rn(g,{x:-3.46,y:2.15,z:.2,ry:Math.PI/2,face:`#efe2c8`,rim:`#2a1c10`})),l.add(Q(11,.2,11,`#403d38`,{rough:.85,y:-.1})),l.add(Q(11,.2,11,`#1c1a17`,{rough:.95,y:2.8})),l.add(Q(7,3,.2,S,{rough:.92,x:0,y:1.4,z:-2.9})),l.add(Q(.2,3,6,S,{rough:.92,x:-3.2,y:1.4,z:-.2})),l.add(Q(.2,3,6,S,{rough:.92,x:3.2,y:1.4,z:-.2}));for(let e of[-1.6,-.4]){let t=new P(new M(.07,.07,6,10),new m({color:`#6b6258`,roughness:.6,metalness:.4}));t.rotation.z=Math.PI/2,t.position.set(0,2.62,e),l.add(t)}let N=new p({color:`#ffffff`,toneMapped:!1}),re=new P(new pe(1.9,1.2),N);re.position.set(0,1.5,-2.79),l.add(re),l.add(Q(2.06,1.36,.06,`#241a12`,{x:0,y:1.5,z:-2.83})),l.add(Q(.04,.34,.04,`#1a1410`,{x:-.1,y:2.45,z:-.4}));let ae=new P(new k(.1,16),new p({color:`#ffdb8a`,toneMapped:!1}));ae.position.set(-.1,2.26,-.4),ae.rotation.x=Math.PI/2,l.add(ae);let I=new y;I.add(Q(1.3,.05,.32,`#3a2c1e`,{x:0,y:0,z:0}));let L=[`#7a3a2a`,`#2a4a6a`,`#b08a3a`,`#3a5a3a`,`#6a2a4a`];for(let e=0;e<8;e++)I.add(Q(.12,.34,.24,L[e%L.length],{x:-.55+e*.14,y:.2,z:0}));I.position.set(-2.3,1.5,-2.66),l.add(I);let z=new y;z.add(Q(.34,.34,.34,`#7a4a2a`,{y:.17}));let oe=new y;for(let e=0;e<6;e++){let t=Q(.05,.5,.14,`#3a7a3a`,{rough:.7});t.geometry.translate(0,.25,0),t.rotation.z=(e/6-.5)*1.2,t.rotation.x=Math.sin(e)*.25,oe.add(t)}oe.position.y=.34,z.add(oe),z.position.set(2.45,0,-1.4),l.add(z),l.add(rn(g,{x:1.9,y:2.1,z:-2.78,ry:0,face:`#d8d2c4`,rim:`#1a130c`}));let se=new y;se.add(Q(3.4,.12,1.5,`#6e4a30`,{rough:.32,y:.86,z:1.5})),se.add(Q(3.2,.78,1.36,x,{y:.46,z:1.5}));for(let e of[.66,.4,.14])se.add(Q(.9,.2,.04,`#4a3120`,{x:1.05,y:e,z:2.2}));se.add(Q(.12,.04,.04,`#caa15a`,{x:1.05,y:.66,z:2.23,metal:.6})),o.add(se);let B=new y;B.add(Q(.06,.5,.06,`#2a1c10`,{x:-1.15,y:1.15,z:1.6}));let ce=new P(new ie(.22,.26,16,1,!0),new m({color:`#c2802e`,roughness:.5,side:2,emissive:`#3a2208`,emissiveIntensity:.6}));ce.position.set(-1.15,1.42,1.6),B.add(ce);let le=new n(`#ffb15a`,7,7,1.8);le.position.set(-1.15,1.34,1.6),B.add(le),o.add(B);let de=new y;de.add(Q(.62,.03,.42,`#1c1c20`,{y:.93,z:1.5,metal:.4,rough:.4}));let fe=new P(new D(.62,.4,.025),new m({color:`#0a0c10`,emissive:`#2a4a6a`,emissiveIntensity:.7,roughness:.3}));fe.position.set(0,1.14,1.31),fe.rotation.x=-.32,de.add(fe),de.userData.role=`laptop`,o.add(de);let me=new y;me.add(Q(.26,.07,.34,`#15151a`,{x:1,y:.93,z:1.5})),me.add(Q(.3,.06,.08,`#101015`,{x:1,y:1,z:1.34})),me.userData.role=`phone`,o.add(me);let he=new ue(`#6a5238`,`#140d08`,.55);r.add(he);let ge=new w(`#ffd9a0`,9,9,.7,.5,1.2);ge.position.set(0,2.95,1.3),ge.target.position.set(0,.86,1.5),r.add(ge,ge.target);let _e=an(!1),ve=an(!0),ye=.62,H=1.32,be=1.22,xe=1.78,U=new E(new _({map:_e,transparent:!0,depthWrite:!1}));U.scale.set(ye,ye,1),U.position.set(H,be,xe),U.userData.role=`cat`,o.add(U);let W=new E(new _({map:sn(),transparent:!0,depthWrite:!1,opacity:0}));W.scale.set(.3,.3,1),W.raycast=()=>{},o.add(W);let G=0;function Se(){G=1.3}let Ce=.62,we=.42,Te=.34,Ee=new y;Ee.position.set(-.78,1.06,1.95),Ee.add(Q(Ce,.05,Te,`#3a3026`,{y:-.19}));let De=new P(new D(Ce-.04,we-.08,Te-.04),new m({color:`#1f9fc0`,transparent:!0,opacity:.26,roughness:.1,emissive:`#0a3a4a`,emissiveIntensity:.4,depthWrite:!1}));De.position.y=.02,Ee.add(De);for(let e of[-1,1])for(let t of[-1,1])Ee.add(Q(.03,we,.03,`#20262c`,{x:e*(Ce/2-.015),z:t*(Te/2-.015),metal:.5}));let Oe=new P(new D(Ce,we,Te),new p({visible:!1}));Oe.userData.role=`tank`,Ee.add(Oe);let ke=new n(`#5fd8ff`,0,3,2);Ee.add(ke);let Ae=[cn(`#e8a23c`),cn(`#d85a6a`),cn(`#6cc0e0`)],je=[],Me=we/2-.12;for(let e=0;e<3;e++){let t=new E(new _({map:Ae[e],transparent:!0,depthWrite:!1})),n=.15-e*.015;t.userData={sz:n,sp:.6+e*.22,ph:e*2.1,ax:.21*(.7+.1*e),ay:Me,az:.09000000000000001,prevx:0},t.scale.set(n,n,1),je.push(t),Ee.add(t)}let Ne=ln(),Pe=[];for(let e=0;e<5;e++){let t=new E(new _({map:Ne,color:`#cfeffb`,transparent:!0,opacity:.5,depthWrite:!1}));t.userData={ph:e/5,sp:.16+Math.random()*.06,x:-.1+e%3*.07},t.scale.setScalar(.03+e%2*.015),t.raycast=()=>{},Pe.push(t),Ee.add(t)}let Fe=new E(new _({map:Ne,color:`#c8a24a`,transparent:!0,opacity:0,depthWrite:!1}));Fe.scale.setScalar(.04),Fe.raycast=()=>{},Ee.add(Fe);let K=0;function q(){K=3,Fe.position.set(-.05,Me,0),Fe.material.opacity=1}o.add(Ee);let Ie=new y;for(let e=0;e<8;e++){let t=new E(new _({map:Ne,color:`#ffd9a0`,transparent:!0,opacity:0,depthWrite:!1,blending:2}));t.scale.setScalar(.018),t.userData={ph:e*.9,sp:.1+e%3*.04,r:.1+e%4*.03},t.raycast=()=>{},Ie.add(t)}Ie.position.set(-1.15,1.2,1.6),o.add(Ie),[se,B,de,me,U,Ee,Ie].forEach(e=>f.add(e));function J(e,t,n,r,i,a,o){let s=new P(new D(t,n,r),new p({visible:!1}));s.position.set(i,a,o),s.userData.role=e,h.add(s)}J(`laptop`,.95,.6,.7,0,1.05,1.4),J(`phone`,.5,.4,.5,1,.98,1.42),J(`cat`,.62,.74,.5,H,be,xe);let Le=nn(),Re={smooth:new e().load($t),charm:new e().load(en)};for(let e of[`smooth`,`charm`]){let t=Re[e];t.colorSpace=s,t.repeat.set(1,.86),t.offset.set(0,.14),t.needsUpdate=!0}let Y=new P(new pe(1,1),new p({map:Re.smooth,toneMapped:!1}));Y.position.set(0,1.45,-5),Y.visible=!1,Y.raycast=()=>{},r.add(Y);let ze=`3d`,Be=`painted`;function Ve(){let e=Ye===`corner`,t=ze!==`3d`,n=t&&Be===`painted`;c.visible=e&&!t,l.visible=!e&&!t,u.visible=t||e,Y.visible=t,f.visible=!n}function He(e){return ze=e===`smooth`||e===`charm`?e:`3d`,ze!==`3d`&&(Y.material.map=Re[ze],Y.material.needsUpdate=!0),Ve(),ze}function X(e){return Be=e===`3d`?`3d`:`painted`,Ve(),Be}let Ue=le.intensity,We=fe.material.emissiveIntensity,Ge=new R;function Ke(e,t,n){let r=n?n.windowGlow:0,o=r>.55;U.material.map=o?ve:_e,G>0&&(G=Math.max(0,G-e));let s=G>0?Math.sin((1.3-G)/1.3*Math.PI):0,c=o?.012*Math.sin(t*1.2):.03*Math.sin(t*2.4);U.scale.set(ye,ye*(1+c+.12*s),1),U.position.y=be+.06*s,W.material.opacity=s,W.position.set(H,1.72+.5*(1-G/1.3),xe),W.scale.setScalar(.22+.1*s),K>0&&(K=Math.max(0,K-e),Fe.position.y=Math.max(-.09,Fe.position.y-e*.06),Fe.material.opacity=K>.3?1:K/.3);for(let e of je){let n=e.userData,r=Math.sin(t*n.sp+n.ph)*n.ax,i=Math.sin(t*n.sp*.8+n.ph*1.7)*n.ay*.7,a=Math.cos(t*n.sp*.6+n.ph)*n.az,o=K>0?Fe.position.x:r,s=K>0?Fe.position.y:i,c=K>0?Fe.position.z:a,l=K>0?.05:.1;e.position.x+=(o-e.position.x)*l,e.position.y+=(s-e.position.y)*l,e.position.z+=(c-e.position.z)*l,e.scale.x=(e.position.x>=n.prevx?1:-1)*n.sz,n.prevx=e.position.x}for(let e of Pe){let n=(t*e.userData.sp+e.userData.ph)%1;e.position.set(e.userData.x+Math.sin(t*2+e.userData.ph*9)*.015,-.09+2*Me*n,.02),e.material.opacity=.5*Math.sin(n*Math.PI)}ke.intensity=2.6*r,De.material.emissiveIntensity=.4+.9*r,le.intensity=Ue*(.97+.03*Math.sin(t*7)*Math.sin(t*2.3)),fe.material.emissiveIntensity=We*(.85+.15*Math.sin(t*3.1+1)),Ge.setRGB(1,.85,.62),Ie.children.forEach((e,n)=>{let i=e.userData,a=(t*i.sp+i.ph)%1;e.position.set(Math.cos(t*.5+i.ph*5)*i.r,-.15+a*.45,Math.sin(t*.4+i.ph*5)*i.r),e.material.opacity=(.1+.18*r)*Math.sin(a*Math.PI)}),oe.rotation.z=Math.sin(t*.8)*.05,oe.rotation.x=Math.sin(t*.6+1)*.04;let l=n?n.t%1:0;for(let e of g)e.rotation.z=-l*Math.PI*2;if(Le.update(e),Y.visible){let e=i.position.z-Y.position.z,t=2*Math.tan(F.degToRad(i.fov)*.5)*e*1.18;Y.scale.set(t*i.aspect,t,1);let n=.55+.45*(1-r);Y.material.color.setRGB(n,n*.97,n*.92)}i.position.set(a.x+Math.sin(t*.5)*.04,a.y+Math.sin(t*.7)*.02,a.z),i.lookAt(0,1.12,-1)}function qe(e){ee.map=e,te.map=e,ee.needsUpdate=!0,te.needsUpdate=!0}function Je(e){N.map=e,N.needsUpdate=!0}let Ye=t;function Xe(e){Ye=e===`basement`?`basement`:`corner`;let t=Ye===`corner`;return Ve(),ge.intensity=t?9:3.2,he.intensity=t?.55:.78,he.color.set(t?`#6a5238`:`#7a5a34`),Ye}return Xe(Ye),{scene:r,camera:i,update:Ke,setCityTexture:qe,setVignetteTexture:Je,setFitout:Xe,setSkin:He,setProps:X,petCat:Se,feedFish:q,vignette:Le,get interactables(){return ze!==`3d`&&Be===`painted`?h.children:[de,me,U,Oe]},get tier(){return Ye},get skin(){return ze},get props(){return Be}}}function nn(){let e=new d;e.background=new R(`#7fb0dd`);let t=new l(-1.4,1.4,.9,-.9,0,10);t.position.set(0,0,5);let n=(e,t={})=>new p({color:e,toneMapped:!1,...t}),r=(e,t,r,i,a,o,s)=>{let c=new P(new pe(e,t),n(o,s));return c.position.set(r,i,a),c};e.add(r(3.2,.9,.5,-.95,1,`#2a4a30`)),e.add(r(3.2,.7,-.7,-1.05,2,`#1d3724`)),e.add(r(.06,.3,-.95,-.55,3,`#3a2a1a`));let i=new P(new k(.22,18),n(`#234a2a`));i.position.set(-.95,-.32,3),e.add(i),e.add(r(.04,.55,.9,-.55,3,`#20242a`));let a=new P(new k(.1,16),n(`#ffd98a`,{transparent:!0,opacity:0}));a.position.set(.9,-.26,3.1),e.add(a);let o=new P(new k(.16,24),n(`#fff4d8`));e.add(o);let s=[];for(let[t,r]of[[-1,.5],[-.6,.7],[.2,.6],[.7,.72],[1.05,.45],[-.2,.78],[.45,.4]]){let i=new P(new k(.015,8),n(`#ffffff`,{transparent:!0,opacity:0}));i.position.set(t,r,.5),s.push(i),e.add(i)}let c=new R(`#141d33`),u=new R(`#7fb6e0`),f=new R(`#d6824a`),m=new R(`#fff0cc`),h=new R(`#cdd8ef`),g=.34;function _(t){g=(g+t*.04)%1;let n=g*Math.PI*2,r=-Math.cos(n);o.position.set(Math.sin(n)*1.15,r*.66+.06,0);let i=F.smoothstep(r,-.18,.5),l=F.smoothstep(.32,0,Math.abs(r));e.background.copy(c).lerp(u,i).lerp(f,l*.45),o.material.color.copy(r>0?m:h),a.material.opacity=1-i;let d=(1-i)*.85;for(let e of s)e.material.opacity=d}return{scene:e,camera:t,update:_}}function rn(e,{x:t,y:n,z:r,ry:i=0,face:a=`#efe2c8`,rim:o=`#2a1c10`}){let s=new y,c=new P(new k(.2,28),new m({color:o,roughness:.6})),l=new P(new k(.17,28),new m({color:a,roughness:.7}));l.position.z=.01;let u=new P(new pe(.018,.14),new m({color:`#1a130c`,roughness:.5}));return u.geometry.translate(0,.05,0),u.position.z=.02,e.push(u),s.add(c,l,u),s.position.set(t,n,r),s.rotation.y=i,s}function an(e){let t=document.createElement(`canvas`);t.width=t.height=128;let n=t.getContext(`2d`),r=`#e08a3c`,i=`#b96a26`,a=`#3a2410`;if(n.lineJoin=`round`,e){n.fillStyle=r,n.beginPath(),n.ellipse(64,78,44,26,0,0,7),n.fill(),n.fillStyle=i,n.beginPath(),n.ellipse(64,86,44,16,0,0,7),n.fill(),n.fillStyle=r,n.beginPath(),n.arc(36,70,20,0,7),n.fill(),n.fillStyle=r,on(n,24,56,34,44,42,58),on(n,40,54,50,44,54,60),n.strokeStyle=i,n.lineWidth=7,n.lineCap=`round`,n.beginPath(),n.moveTo(100,70),n.quadraticCurveTo(112,90,88,96),n.stroke(),n.strokeStyle=a,n.lineWidth=2.5,n.beginPath(),n.arc(30,70,5,.1,Math.PI-.1),n.stroke(),n.strokeStyle=i,n.lineWidth=3;for(let e of[60,74,88])n.beginPath(),n.moveTo(e,58),n.lineTo(e,70),n.stroke()}else{n.fillStyle=r,n.beginPath(),n.ellipse(64,86,30,34,0,0,7),n.fill(),n.fillStyle=`#f3c98a`,n.beginPath(),n.ellipse(64,92,14,22,0,0,7),n.fill(),n.strokeStyle=i,n.lineWidth=8,n.lineCap=`round`,n.beginPath(),n.moveTo(92,100),n.quadraticCurveTo(116,86,104,60),n.stroke(),n.fillStyle=r,n.beginPath(),n.arc(64,48,24,0,7),n.fill(),n.fillStyle=r,on(n,44,34,50,18,60,34),on(n,84,34,78,18,68,34),n.fillStyle=`#f0b0c0`,on(n,47,30,50,22,56,32),on(n,81,30,78,22,72,32),n.fillStyle=a,n.beginPath(),n.arc(55,47,3.4,0,7),n.arc(73,47,3.4,0,7),n.fill(),n.fillStyle=`#e06a7a`,on(n,61,54,67,54,64,58),n.strokeStyle=a,n.lineWidth=1.6;for(let e of[-2,3])n.beginPath(),n.moveTo(50,55+e),n.lineTo(34,53+e),n.moveTo(78,55+e),n.lineTo(94,53+e),n.stroke();n.strokeStyle=i,n.lineWidth=3;for(let e of[78,90,102])n.beginPath(),n.moveTo(50,e),n.lineTo(78,e),n.stroke()}let o=new O(t);return o.colorSpace=s,o}function on(e,t,n,r,i,a,o){e.beginPath(),e.moveTo(t,n),e.lineTo(r,i),e.lineTo(a,o),e.closePath(),e.fill()}function sn(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`);t.fillStyle=`#ff5a8a`,t.beginPath(),t.moveTo(32,52),t.bezierCurveTo(6,32,14,10,32,24),t.bezierCurveTo(50,10,58,32,32,52),t.fill();let n=new O(e);return n.colorSpace=s,n}function cn(e){let t=document.createElement(`canvas`);t.width=t.height=64;let n=t.getContext(`2d`);n.fillStyle=e,n.beginPath(),n.ellipse(30,32,18,11,0,0,7),n.fill(),n.beginPath(),n.moveTo(46,32),n.lineTo(60,22),n.lineTo(60,42),n.closePath(),n.fill(),n.fillStyle=`rgba(255,255,255,0.35)`,n.beginPath(),n.ellipse(28,36,12,5,0,0,7),n.fill(),n.fillStyle=`#15212a`,n.beginPath(),n.arc(20,30,2.6,0,7),n.fill();let r=new O(t);return r.colorSpace=s,r}function ln(){let e=document.createElement(`canvas`);e.width=e.height=32;let t=e.getContext(`2d`),n=t.createRadialGradient(16,16,0,16,16,16);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.6,`rgba(255,255,255,0.7)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.beginPath(),t.arc(16,16,16,0,7),t.fill();let r=new O(e);return r.colorSpace=s,r}function un(e){let t=document.createElement(`canvas`);t.width=t.height=256;let n=t.getContext(`2d`),r=n.createLinearGradient(0,0,256,256);e<0?(r.addColorStop(0,`#6a3b1c`),r.addColorStop(1,`#caa15a`)):(r.addColorStop(0,`#3a4a6a`),r.addColorStop(1,`#a86a3a`)),n.fillStyle=r,n.fillRect(0,0,256,256),n.globalAlpha=.5;for(let e=0;e<5;e++)n.fillStyle=e%2?`#2a1c10`:`#e0c080`,n.fillRect(30+e*36,40+e%3*30,26,150);let i=new O(t);return i.colorSpace=s,i}var{Timer:dn}=oe,fn=new URLSearchParams(window.location.search),pn=fn.get(`demo`)===`1`||fn.has(`capture`);window.__demo=pn;var mn=(fn.get(`city`)?Number(fn.get(`city`)):0)||Math.random()*1e9|0,hn=0,gn=Qt({demo:pn,citySeed:mn,profileIndex:hn}),{renderer:_n,rig:vn,sunRig:yn,city:bn,cityLife:xn,waterMaterial:Sn,fitShadowFrustum:Cn,landmarkFactory:wn,renderCityBeautyTo:Tn}=gn,$=tn({tier:`corner`});$.camera.aspect=window.innerWidth/window.innerHeight,$.camera.updateProjectionMatrix();var En=!0;window.__shadows=En,window.__scene=`office`;var Dn=new v(55,1.4,.1,100);Dn.position.set(2.2,3.4,11.5),Dn.lookAt(0,2,0);var On=new I(640,448,{minFilter:i,magFilter:i,depthBuffer:!0,stencilBuffer:!1});$.setCityTexture(On.texture);var kn=0,An=3,jn=new I(512,320,{minFilter:i,magFilter:i,depthBuffer:!0,stencilBuffer:!1});$.setVignetteTexture(jn.texture);var Mn=!1,Nn=(()=>{if(typeof document>`u`)return{showLap(){},toast(){},flash(){}};let e=document.createElement(`style`);e.textContent=`
  .lap { position: fixed; inset: 0; z-index: 5; display:flex; align-items:center; justify-content:center;
    background: rgba(6,8,12,0.55); opacity:0; pointer-events:none; transition: opacity .25s; }
  .lap.on { opacity:1; pointer-events:auto; }
  .lap-win { width:min(560px,90vw); border-radius:14px; overflow:hidden; background:#0e1016;
    border:1px solid #2a2f3a; box-shadow:0 20px 60px rgba(0,0,0,.6); font:13px/1.5 ui-monospace,monospace; color:#cdd3dc; }
  .lap-bar { display:flex; align-items:center; justify-content:space-between; padding:10px 14px; background:#161a22; border-bottom:1px solid #2a2f3a; }
  .lap-bar b { letter-spacing:.08em; color:#7fd0ff; }
  .lap-x { cursor:pointer; border:0; background:#222833; color:#cdd3dc; min-width:44px;height:44px;border-radius:8px; font:inherit; }
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
    </div></div>`;let n=document.createElement(`div`);n.className=`otoast`;let r=document.createElement(`div`);r.className=`oflash`,document.body.append(t,n,r),t.querySelector(`.lap-x`).addEventListener(`click`,()=>Fn()),t.addEventListener(`click`,e=>{e.target===t&&Fn()});let i=0;return{showLap(e){t.classList.toggle(`on`,e)},toast(e){n.textContent=e,n.classList.add(`on`),clearTimeout(i),i=setTimeout(()=>n.classList.remove(`on`),1400)},flash(){r.style.transition=`none`,r.style.opacity=`0.85`,requestAnimationFrame(()=>{r.style.transition=`opacity .55s`,r.style.opacity=`0`})}}})();function Pn(){Mn=!0,Nn.showLap(!0)}function Fn(){Mn=!1,Nn.showLap(!1)}function In(){hn=(hn+1)%Ve.length,Nn.flash(),bn.generate(mn,hn),Sn.uniforms.uVecWater.value.set(bn.waterColor),xn.setProfile(bn.state.profile),Cn(),Nn.toast(`✈  `+bn.state.profile.name),window.__profile=bn.state.profile.key}function Ln(e){let t=$.setFitout(e);return Nn.toast(t===`basement`?`🏚  Basement office`:`🏙  Corner office`),window.__tier=t,t}function Rn(){return Ln($.tier===`corner`?`basement`:`corner`)}window.__tier=$.tier;var zn=[`3d`,`smooth`,`charm`],Bn={"3d":`🧊  Stylized 3D office`,smooth:`🖼  Smooth diffusion skin`,charm:`🕹  Charm diffusion skin`};function Vn(e){let t=$.setSkin(e);return window.__officeSkin=t,Nn.toast(Bn[t]),t}function Hn(){return Vn(zn[(zn.indexOf($.skin)+1)%zn.length])}window.__officeSkin=$.skin;var Un={painted:`🎨  Painted props (cohesive)`,"3d":`🧊  Live 3D props (animated)`};function Wn(e){let t=$.setProps(e);return window.__officeProps=t,$.skin!==`3d`&&Nn.toast(Un[t]),t}function Gn(){return Wn($.props===`painted`?`3d`:`painted`)}window.__officeProps=$.props;var Kn=new C,qn=new A,Jn=(e,t)=>{qn.x=e/window.innerWidth*2-1,qn.y=-(t/window.innerHeight)*2+1};function Yn(){Kn.setFromCamera(qn,$.camera);let e=Kn.intersectObjects($.interactables,!0)[0];if(!e)return null;let t=e.object;for(;t&&!t.userData.role;)t=t.parent;return t?t.userData.role:null}function Xn(e){e===`laptop`?Pn():e===`phone`?In():e===`cat`?$.petCat():e===`tank`&&$.feedFish()}var Zn=0,Qn=0,$n=0;_n.domElement.addEventListener(`mousedown`,e=>{Zn=e.clientX,Qn=e.clientY,$n=performance.now()}),window.addEventListener(`mousemove`,e=>{Jn(e.clientX,e.clientY),_n.domElement.style.cursor=Yn()?`pointer`:`default`}),window.addEventListener(`mouseup`,e=>{if(Math.hypot(e.clientX-Zn,e.clientY-Qn)<6&&performance.now()-$n<350&&!Mn){Jn(e.clientX,e.clientY);let t=Yn();t&&Xn(t)}});var er=!1;_n.domElement.addEventListener(`touchstart`,e=>{e.touches.length===1&&(Zn=e.touches[0].clientX,Qn=e.touches[0].clientY,$n=performance.now(),er=!1)},{passive:!0}),_n.domElement.addEventListener(`touchmove`,e=>{e.touches.length===1&&Math.hypot(e.touches[0].clientX-Zn,e.touches[0].clientY-Qn)>8&&(er=!0)},{passive:!0}),window.addEventListener(`touchend`,e=>{if(!er&&performance.now()-$n<350&&(!e.touches||e.touches.length===0)&&!Mn){let e=Yn();e&&Xn(e)}}),window.addEventListener(`keydown`,e=>{e.key===`Escape`&&Mn&&Fn(),(e.key===`f`||e.key===`F`)&&Rn(),(e.key===`j`||e.key===`J`)&&Hn(),(e.key===`u`||e.key===`U`)&&Gn(),(e.key===`t`||e.key===`T`)&&yn.cyclePreset(),(e.key===`h`||e.key===`H`)&&(En=!En,window.__shadows=En)}),wn.whenReady.then(()=>{bn.generate(mn,hn),Cn(),window.__cityReady=!0}),fn.get(`office`)===`basement`&&Ln(`basement`);var tr=fn.get(`officeskin`);[`3d`,`smooth`,`charm`].includes(tr)&&Vn(tr);var nr=fn.get(`officeprops`);[`painted`,`3d`].includes(nr)&&Wn(nr);var rr=new dn;rr.connect(document);function ir(){rr.update();let e=Math.min(rr.getDelta(),.1);vn.update(e),gn.updateWorld(e,rr.getElapsed(),{shadowsOn:En,seasonTarget:0}),$.update(e,rr.getElapsed(),yn),$.tier===`basement`?(_n.setRenderTarget(jn),_n.render($.vignette.scene,$.vignette.camera)):kn%An===0&&Tn(Dn,On),kn++,_n.setRenderTarget(null),_n.render($.scene,$.camera),requestAnimationFrame(ir)}ir(),window.addEventListener(`resize`,()=>{gn.resize(),$.camera.aspect=window.innerWidth/window.innerHeight,$.camera.updateProjectionMatrix()});