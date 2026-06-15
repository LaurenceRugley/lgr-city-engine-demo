import{$ as e,A as t,B as n,C as r,D as i,E as a,F as o,G as s,H as c,I as l,J as u,K as d,L as f,M as p,N as m,O as h,P as g,Q as _,R as v,S as y,T as b,U as x,V as S,W as C,X as w,Y as T,Z as E,_ as D,a as O,b as k,c as A,d as ee,et as te,f as j,g as M,h as N,i as P,j as F,k as ne,l as re,m as I,n as ie,nt as L,o as ae,p as R,q as oe,r as z,rt as se,s as ce,t as le,tt as B,u as V,v as ue,w as de,x as fe,y as pe,z as me}from"./three-B1EZZ7Lj.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var he=Math.atan(1/Math.SQRT2),ge=Math.atan(.5),_e=Math.PI/4,H={PERSPECTIVE:4,ISOMETRIC:5,DIMETRIC:6},U=.12,ve=1.45,ye=4,be=40,xe=1.5,Se=16,Ce=6,we=22,Te=3.5,W=11,G=(e,t,n)=>e+(t-e)*(1-Math.exp(-8*n)),K=(e,t)=>e+Math.PI*2*Math.round((t-e)/(Math.PI*2));function Ee({aspect:e,fov:t=48,near:n=.1,far:r=100,target:i=new L(0,.8,0),azimuth:a=_e,elevation:o=.52,distance:s=12,zoom:c=5.5}={}){let l=new S(t,e,n,r),u=new me(-1,1,1,-1,n,r),d=H.PERSPECTIVE,f=e,m={azimuth:a,elevation:o,distance:s,zoom:c,target:i.clone()},h={azimuth:a,elevation:o,distance:s,zoom:c,target:i.clone()},g=!1,_=()=>d===H.PERSPECTIVE?l:u;function v(e){e!==d&&(d=e,d===H.ISOMETRIC||d===H.DIMETRIC?(m.elevation=d===H.ISOMETRIC?he:ge,m.azimuth=K(_e,h.azimuth),g=!0):g=!1)}function y(e,t){m.azimuth+=e,g||(m.elevation=p.clamp(m.elevation+t,U,ve))}function b(e){d===H.PERSPECTIVE?m.distance=p.clamp(m.distance*e,ye,be):m.zoom=p.clamp(m.zoom*e,xe,Se)}function x(e,t){let n=m.azimuth,r=d===H.PERSPECTIVE?m.distance*.04:m.zoom*.08,i=new L(Math.cos(n),0,-Math.sin(n)),a=new L(-Math.sin(n),0,-Math.cos(n));m.target.addScaledVector(i,e*r),m.target.addScaledVector(a,t*r)}function C(e,t){f=e/t,l.aspect=f,l.updateProjectionMatrix()}function w(e){h.azimuth=G(h.azimuth,m.azimuth,e),h.elevation=G(h.elevation,m.elevation,e),h.distance=G(h.distance,m.distance,e),h.zoom=G(h.zoom,m.zoom,e),h.target.x=G(h.target.x,m.target.x,e),h.target.y=G(h.target.y,m.target.y,e),h.target.z=G(h.target.z,m.target.z,e);let t=Math.cos(h.elevation),n=Math.sin(h.elevation),r=Math.cos(h.azimuth),i=Math.sin(h.azimuth),a=_();if(a.position.set(h.target.x+h.distance*t*i,h.target.y+h.distance*n,h.target.z+h.distance*t*r),a.lookAt(h.target),a.isOrthographicCamera){let e=h.zoom,t=e*f;a.left=-t,a.right=t,a.top=e,a.bottom=-e,a.updateProjectionMatrix()}}function T(e,t,n,r=!1){m.target.set(e,t,n),r&&h.target.copy(m.target)}function E(e,t=!1){m.zoom=p.clamp(e,xe,Se),t&&(h.zoom=m.zoom)}return{get camera(){return _()},get mode(){return d},get azimuth(){return h.azimuth},setTarget:T,setZoom:E,get styleT(){return d===H.PERSPECTIVE?p.clamp((h.distance-Ce)/(we-Ce),0,1):p.clamp((h.zoom-Te)/(W-Te),0,1)},setMode:v,orbit:y,zoomBy:b,pan:x,setViewport:C,update:w}}var De={value:0},Oe=new R(`#ffffff`),ke={value:0},Ae={value:0},je={value:0},Me=new B,Ne={value:0},Pe={value:0},q=`
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
`;function J(e){e.uniforms.uVector=De,e.uniforms.uVecTint={value:Oe},e.uniforms.uVecShadow=ke,e.uniforms.uSnow=Ae,e.uniforms.uCloud=je,e.uniforms.uCloudOff={value:Me},e.uniforms.uFogCharm=Ne}function Y(e){return e.replace(`#include <fog_fragment>`,`
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
  `)}function Fe(e){return e.replace(`#include <common>`,`#include <common>
varying vec3 vVecN;
varying vec3 vVecP;
varying vec2 vWorldXZ;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
  vVecN = normal;
  vVecP = position;
  vWorldXZ = (modelMatrix * vec4(position, 1.0)).xz;`)}function X(e){return e.replace(`#include <shadowmap_pars_fragment>`,`#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>`)}var Ie=`col *= mix(1.0, getShadowMask(), uVecShadow);`;function Le(e,{color:t,id:n,windowGlow:r,winColors:i=[`#ffb852`,`#8cd9ff`],litFrac:a=.55}={}){let o=[0,1,2].map(e=>new R(i[e]??i[i.length-1]));return e.customProgramCacheKey=()=>`lgr-vec-tower`,e.onBeforeCompile=e=>{J(e),e.uniforms.uWindowGlow=r,e.uniforms.uWinId={value:n},e.uniforms.uVecColor={value:new R(t)},e.uniforms.uWinA={value:o[0]},e.uniforms.uWinB={value:o[1]},e.uniforms.uWinC={value:o[2]},e.uniforms.uWinLit={value:a},e.vertexShader=Fe(e.vertexShader),e.fragmentShader=Y(X(e.fragmentShader.replace(`#include <common>`,`#include <common>
        uniform float uWindowGlow;
        uniform float uWinId;
        uniform vec3  uVecColor;
        uniform vec3  uWinA; uniform vec3 uWinB; uniform vec3 uWinC;
        uniform float uWinLit;
        ${q}
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
          ${Ie}                                  // the sun's shadow darkens the body
          vec3 wcol; vec2 w = winTerms(wcol);
          vec3 glass = vec3(0.17, 0.23, 0.34);          // dark glass-blue panes (day)
          col = mix(col, glass, w.x * 0.85);
          col += w.x * w.y * wcol * uWindowGlow * 1.5;  // …windows EMIT (unshadowed) at night
          gl_FragColor = vec4(col, diffuseColor.a);
        }`)))},e}function Z(e,{color:t=null,glow:n=null,glowDay:r=0,glowNight:i=1,windowGlow:a=null,season:o=!1}={}){let s=t===null,c=n!==null&&a!==null;return e.customProgramCacheKey=()=>`lgr-vec|`+(s?`d`:`c`)+(c?`g`:``)+(o?`s`:``),e.onBeforeCompile=e=>{J(e),s||(e.uniforms.uVecColor={value:new R(t)}),c&&(e.uniforms.uGlow={value:new R(n)},e.uniforms.uGlowDay={value:r},e.uniforms.uGlowNight={value:i},e.uniforms.uWindowGlow=a),o&&(e.uniforms.uSeason=Pe),e.vertexShader=Fe(e.vertexShader);let l=s?`diffuseColor.rgb`:`uVecColor`,u=o?`seasonShift(${l})`:l,d=(s?``:`uniform vec3 uVecColor;
`)+(c?`uniform vec3 uGlow; uniform float uGlowDay; uniform float uGlowNight; uniform float uWindowGlow;
`:``)+(o?`uniform float uSeason;
vec3 seasonShift(vec3 c){
  c = mix(c, vec3(0.86, 0.46, 0.13), smoothstep(0.40, 0.70, uSeason));   // → autumn orange
  c = mix(c, vec3(0.46, 0.33, 0.20), smoothstep(0.75, 1.00, uSeason));   // → bare brown
  return c;
}
`:``),f=c?`uGlow * mix(uGlowDay, uGlowNight, uWindowGlow)`:`vec3(0.0)`,p=Y(X(e.fragmentShader.replace(`#include <common>`,`#include <common>
`+d+q).replace(`#include <opaque_fragment>`,`#include <opaque_fragment>
        if (uVector > 0.5) {
          vec3 col = vecShade(${u});
          ${Ie}                            // the sun's shadow darkens the flat tier…
          gl_FragColor = vec4(col + ${f}, diffuseColor.a);  // …but the night glow stays lit
        }`)));c&&(p=p.replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>\n  totalEmissiveRadiance += ${f};`)),e.fragmentShader=p},e}function Re(e){let t=e>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function ze(e){let t=Re(e);return{next:t,range:(e,n)=>e+(n-e)*t(),int:(e,n)=>e+Math.floor(t()*(n-e+1)),pick:e=>e[Math.floor(t()*e.length)],chance:e=>t()<e}}var Be=[{key:`manhattan`,name:`Manhattan`,towers:[`#EDE3C8`,`#D9B98A`,`#B5562F`,`#A8C8E8`,`#2E3F5C`],ground:`#7CC455`,street:`#9AA0A6`,sidewalk:`#C8CCD0`,park:`#5DB347`,water:`#29A8D8`,shopfronts:[`#C04A3A`,`#3A7AC0`,`#C09A2A`],glass:`#7FA8CC`,winColors:[`#ffd27a`,`#9ad6ff`],hMax:4.6,sigma:.36,roofRate:.35,pSplit:.6,nightLit:.55,roofTint:null,coast:{base:.55,out:1,in:.6,jag:1.05},landmarks:[`empireState`,`chrysler`,`liberty`]},{key:`paris`,name:`Paris`,towers:[`#E8DCC0`,`#F2EAD6`,`#E0D2B4`],ground:`#8CC46A`,street:`#A8A29A`,sidewalk:`#D4CEC2`,park:`#6DB35A`,water:`#3FA8C8`,shopfronts:[`#C04A3A`,`#3A6B5A`,`#7A5AC0`],glass:`#5A6B7A`,winColors:[`#ffdca0`,`#ffcaa0`],hMax:1.5,sigma:.9,roofRate:.15,pSplit:.75,nightLit:.45,roofTint:`#6A7886`,coast:{base:1.05,out:.55,in:.3,jag:.5},landmarks:[`eiffel`,`arcDeTriomphe`,`sacreCoeur`]},{key:`neoTokyo`,name:`Neo-Tokyo`,towers:[`#2A3038`,`#3A4250`,`#252B36`,`#4A4456`],ground:`#3A4A42`,street:`#5A6068`,sidewalk:`#7A8088`,park:`#2E5E46`,water:`#0E6878`,shopfronts:[`#E8483A`,`#5AE8E0`,`#E85AA0`],glass:`#5AE8E0`,winColors:[`#5AE8E0`,`#E85AA0`,`#E8E06A`],hMax:5.2,sigma:.42,roofRate:.6,pSplit:.6,nightLit:.7,roofTint:null,coast:{base:.7,out:1.05,in:.62,jag:1.7},landmarks:[`tokyoTower`,`pagoda`,`neonBillboard`]}];Be.map(e=>e.key);var Ve=.3,He=1.9,Ue=.55,We=2.45,Ge=.12,Ke=.6,qe=6,Q={BASE:.7,OUT:.95,IN:.55,JAG:1,SAMPLES_PER_EDGE:28,HARBOR_DEPTH:.55,HARBOR_WIDTH:.26},Je={PLINTH_TOP:Ve,BLOCK:He,STREET:Ue,PITCH:We,SIDEWALK:Ge,SHORE:Ke,N:qe,COAST:Q};function Ye(e,t,n){let r=n?.base??Q.BASE,i=n?.out??Q.OUT,a=n?.in??Q.IN,o=n?.jag??Q.JAG,s=t+r,c=ze((e^789079)>>>0),l=[2,3,5,8,11,13].map(e=>({k:e,amp:1/e*o**((e-2)/6),phase:c.range(0,Math.PI*2)})),u=l.reduce((e,t)=>e+t.amp,0),d=e=>{let t=0;for(let n of l)t+=n.amp*Math.sin(n.k*e*Math.PI*2+n.phase);return Math.max(-1,Math.min(1,t/(u*.6)))},f=[{fix:+s,nx:1,nz:0,sign:1},{fix:+s,nx:0,nz:1,sign:-1},{fix:-s,nx:-1,nz:0,sign:-1},{fix:-s,nx:0,nz:-1,sign:1}],p=t+.22,m=Q.SAMPLES_PER_EDGE,h=4*m,g=[],_=0;for(let e=0;e<4;e++){let t=f[e];for(let n=0;n<m;n++,_++){let o=n/m,c=_/h,l=(-s+2*s*o)*t.sign,u=d(c),f=u>=0?u*i:u*a;if(e===0){let e=Math.abs(o-.5);if(e<Q.HARBOR_WIDTH){let t=.5+.5*Math.cos(e/Q.HARBOR_WIDTH*Math.PI);f-=(r+Q.HARBOR_DEPTH)*t}}let v,y;t.nx===0?(y=t.fix+t.nz*f,v=l,y=t.nz>0?Math.max(y,p):Math.min(y,-p)):(v=t.fix+t.nx*f,y=l,v=t.nx>0?Math.max(v,p):Math.min(v,-p)),g.push(new B(v,y))}}return{points:g,B:s,maxR:s+i,harborX:p}}function Xe(e){(Array.isArray(e)?e:[e]).forEach(e=>e&&e.dispose&&e.dispose())}function Ze({seed:e=1,profileIndex:t=0,landmarkFactory:n=null,windowGlow:i}){let a=new r,s=new r,c=new r;s.raycast=()=>{},c.raycast=()=>{},a.add(s,c);let u=new ue(16773594,3);u.position.set(.45,.6,-.65).multiplyScalar(10);let d=new b(7313331,2762272,1);a.add(u,d);let f=0,p=[],m={seed:e,profileIndex:t,profile:Be[t],extent:0,meshCount:0};function h(e,t,n,r){let i=new g(new O(e,.04,t),Z(new l({color:r,roughness:.95,flatShading:!0}),{color:r}));return i.position.y=n,i.userData.ground=!0,i}function v(e,t){for(let e of s.children)e.geometry&&e.geometry.dispose(),Xe(e.material);s.clear();for(let e of c.children)e.traverse(e=>{e.isMesh&&Xe(e.material)});c.clear(),p.length=0,f=0;let r=ze(e),i=Be[t],a=(qe-1)/2*We,o=7.075;m={seed:e,profileIndex:t,profile:i,extent:o+(i.coast?.base??Q.BASE),meshCount:0};let u=Ye(e,o,i.coast);m.coast=u;let d=new E;u.points.forEach((e,t)=>t?d.lineTo(e.x,e.y):d.moveTo(e.x,e.y)),d.closePath();let _=new g(new k(d,{depth:2,bevelEnabled:!1,steps:1}),Z(new l({color:i.ground,roughness:.9,flatShading:!0,side:2}),{color:i.ground}));_.rotation.x=-Math.PI/2,_.position.y=Ve-2,_.userData.ground=!0,s.add(_);let v=2*7.195;s.add(h(v,v,.32,i.street)),C(u.harborX,i);let b=[];for(let e=0;e<qe;e++)for(let t=0;t<qe;t++)b.push([e,t]);let T=new Set,D=Math.max(1,Math.round(b.length*.08));for(;T.size<D;)T.add(r.int(0,b.length-1));let O=r.range(-2.45*.6,We*.6),A=r.range(-2.45*.6,We*.6),ee=Math.hypot(a,a),te=[];if(b.forEach(([e,t],n)=>{let a=(e-(qe-1)/2)*We,o=(t-(qe-1)/2)*We;if(s.add(h(He,He,.32999999999999996,i.sidewalk).translateX(a).translateZ(o)),T.has(n)){s.add(h(He-Ge*2,He-Ge*2,.35,i.park).translateX(a).translateZ(o));let e=r.int(3,5);for(let t=0;t<e;t++)w(a+r.range(-.6,.6),o+r.range(-.6,.6),i,r);return}let c=He-Ge*2,l=r.chance(i.pSplit)?2:1,u=r.chance(i.pSplit)?2:1,d=c/l,f=c/u;for(let e=0;e<l;e++)for(let t=0;t<u;t++){let n=a-c/2+d*(e+.5),s=o-c/2+f*(t+.5),l=Math.max(.6,d-.1),u=Math.max(.6,f-.1),p=Math.hypot(n-O,s-A)/ee,m=Math.exp(-(p*p)/(2*i.sigma*i.sigma)),h=Math.max(.5,.5+(i.hMax-.5)*m*r.range(.75,1.25));h>i.hMax*.5&&Math.min(l,u)>=.7&&te.push({lx:n,lz:s,fw:l,fd:u,h,r:p}),y(n,s,l,u,h,i,r)}}),n&&n.ready){te.sort((e,t)=>e.r-t.r);let e=[],t=i.landmarks;for(let r=0;r<t.length&&te.length;r++){let a=null;for(let t of te)if(e.every(e=>Math.hypot(e.lx-t.lx,e.lz-t.lz)>We*.9)){a=t;break}a||=te[0],e.push(a),x(a.lx,a.lz);let o=i.hMax*n.heightFactor(t[r]),s=n.make(t[r],{x:a.lx,z:a.lz,w:a.fw,d:a.fd,h:o,plinthTop:Ve});if(s){c.add(s);let e=new P().setFromObject(s);S(e.min.x-.15,e.max.x+.15,e.min.z-.15,e.max.z+.15)}}}s.traverse(e=>{e.isMesh&&(e.userData.ground?(e.castShadow=!1,e.receiveShadow=!0):e.material&&e.material.isMeshBasicMaterial?(e.castShadow=!1,e.receiveShadow=!1):(e.castShadow=!0,e.receiveShadow=!0))}),c.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),m.meshCount=s.children.length+c.children.length;let j=0;for(let e of s.children){let t=e.position;j=(Math.imul(j,16777619)^(Math.round(t.x*100)*2654435761^Math.round(t.y*100)*40503^Math.round(t.z*100)*2246822519))>>>0}for(let e of m.coast.points)j=(Math.imul(j,16777619)^(Math.round(e.x*100)*2654435761^Math.round(e.y*100)*40503))>>>0;m.sig=j,window.__city={seed:e,profile:i.key,meshes:m.meshCount,sig:j}}function y(e,t,n,r,a,c,u){let d=Le(new l({flatShading:!0,roughness:.7,metalness:.05}),{color:u.pick(c.towers),id:++f,windowGlow:i,winColors:c.winColors,litFrac:c.nightLit}),m=new g(new O(n,a,r),d);if(m.position.set(e,Ve+a/2,t),m.userData.lot=[e,t],s.add(m),c.roofTint){let i=Z(new l({color:c.roofTint,roughness:.85,flatShading:!0}),{color:c.roofTint}),o=new g(new O(n*1.02,.08,r*1.02),i);o.position.set(e,Ve+a+.04,t),o.userData.lot=[e,t],s.add(o)}if(a<1.4){let i=u.pick(c.shopfronts),a=new g(new O(n*1.04,.18,r*1.04),Z(new l({color:i,roughness:.8,flatShading:!0}),{color:i}));a.position.set(e,.39,t),a.userData.lot=[e,t],s.add(a)}if(a>c.hMax*.45&&u.chance(c.roofRate)){let i=u.chance(.5)?new g(new O(n*.4,.18,r*.4),Z(new l({color:`#9a9a9a`,flatShading:!0}),{color:`#9a9a9a`})):new g(new N(n*.18,n*.18,.22,10),Z(new l({color:`#b9bec4`,flatShading:!0}),{color:`#b9bec4`}));if(i.position.set(e+u.range(-.1,.1),Ve+a+.11,t+u.range(-.1,.1)),i.userData.lot=[e,t],s.add(i),u.chance(.25)){let n=new g(new _(.05,6,5),new o({color:`#ff3b30`,transparent:!0,opacity:1}));n.position.set(e,Ve+a+.26,t),n.userData.lot=[e,t],n.raycast=()=>{},s.add(n),p.push({mesh:n,phase:u.range(0,6.28)})}}}function x(e,t){for(let n=s.children.length-1;n>=0;n--){let r=s.children[n];r.userData.lot&&Math.abs(r.userData.lot[0]-e)<1e-4&&Math.abs(r.userData.lot[1]-t)<1e-4&&(r.geometry&&r.geometry.dispose(),Xe(r.material),s.remove(r))}for(let e=p.length-1;e>=0;e--)p[e].mesh.parent||p.splice(e,1)}function S(e,t,n,r){for(let i=s.children.length-1;i>=0;i--){let a=s.children[i];a.userData.lot&&a.position.x>=e&&a.position.x<=t&&a.position.z>=n&&a.position.z<=r&&(a.geometry&&a.geometry.dispose(),Xe(a.material),s.remove(a))}}function C(e,t){let n=Z(new l({color:`#7a5634`,roughness:.95,flatShading:!0}),{color:`#7a5634`}),r=(e,t,r,i)=>{let a=new g(new O(e,.06,t),n);a.position.set(r,Ve-.16,i),s.add(a)};r(.24,2,e+.02,0),r(1.3,.22,e+.7,-.72),r(1.3,.22,e+.7,.72)}function w(e,t,n,r){let i=new R(n.park),a=(n,a)=>{let o=i.clone().offsetHSL(0,0,r.range(-.06,.06)).getStyle(),c=new g(new _(n,7,6),Z(new l({color:o,flatShading:!0}),{color:o,season:!0}));c.scale.y=.7,c.position.set(e,Ve+a,t),c.userData.lot=null,s.add(c)},o=new g(new O(.05,.18,.05),Z(new l({color:`#6b4a2a`,flatShading:!0}),{color:`#6b4a2a`}));o.position.set(e,.39,t),s.add(o),a(.22,.28),a(.16,.46)}function T(e){for(let t of p)t.mesh.material.opacity=.35+.65*(.5+.5*Math.sin(e*3+t.phase))}return v(e,t),{group:a,key:u,fill:d,update:T,generate:v,get state(){return m},get extent(){return m.extent},get waterColor(){return m.profile.water},profiles:Be}}var Qe=Math.PI*2,$e=.7,et=90,tt=[{name:`night`,sun:`#4a6f9e`,intensity:.35,hemiSky:`#26344f`,hemiGround:`#0c1018`,horizon:`#1e2942`,sky:`#36486e`,exposure:.95,outline:`#101a30`,window:1,toonGain:2.6},{name:`dawn`,sun:`#ff9e54`,intensity:2.4,hemiSky:`#8a7686`,hemiGround:`#2a1f1a`,horizon:`#b8512c`,sky:`#ffb070`,exposure:1.05,outline:`#241826`,window:.3,toonGain:2},{name:`noon`,sun:`#fff4e0`,intensity:4.6,hemiSky:`#9cb8cc`,hemiGround:`#33302a`,horizon:`#5e7689`,sky:`#aacadd`,exposure:1.18,outline:`#0b0a08`,window:0,toonGain:1.7},{name:`dusk`,sun:`#ff6b35`,intensity:2,hemiSky:`#7a566a`,hemiGround:`#281a18`,horizon:`#b0432a`,sky:`#ff8a5a`,exposure:1.05,outline:`#1f1420`,window:.4,toonGain:2}],nt=e=>e-Math.floor(e),rt=(e,t,n)=>e+(t-e)*n,it=(e,t,n)=>e+(t-e)*(1-Math.exp(-6*n));function at({t:e=.5}={}){let t=e,n=e,r=!1,i=!1,a=tt.map(e=>({name:e.name,sun:new R(e.sun),hemiSky:new R(e.hemiSky),hemiGround:new R(e.hemiGround),horizon:new R(e.horizon),sky:new R(e.sky),outline:new R(e.outline),intensity:e.intensity,exposure:e.exposure,window:e.window,toonGain:e.toonGain})),o=new L(0,1,0),s=new R(`#fff4e0`),c=new R(`#6f97b3`),l=new R(`#2a2620`),u=new R(`#3a4a57`),d=new R(`#7da3bd`),f=new R(`#0b0a08`),p=new R(`#000000`),m=3,h=1,g=0,_=1.7,v=new L;function y(e){let t=nt(e)*4,n=Math.floor(t)%4,r=(n+1)%4,i=t-Math.floor(t),y=a[n],b=a[r];s.lerpColors(y.sun,b.sun,i),c.lerpColors(y.hemiSky,b.hemiSky,i),l.lerpColors(y.hemiGround,b.hemiGround,i),u.lerpColors(y.horizon,b.horizon,i),d.lerpColors(y.sky,b.sky,i),f.lerpColors(y.outline,b.outline,i),m=rt(y.intensity,b.intensity,i),h=rt(y.exposure,b.exposure,i),g=rt(y.window,b.window,i),_=rt(y.toonGain,b.toonGain,i),p.setRGB(.045*g,.075*g,.14*g);let x=nt(e)*Qe-Math.PI/2,S=Math.cos(x),C=Math.sin(x);v.set(S,C*Math.cos($e),C*Math.sin($e)),v.y>=0?o.copy(v):o.copy(v).negate()}return y(t),{sunDir:o,sunColor:s,hemiSky:c,hemiGround:l,horizon:u,sky:d,outline:f,toonFloor:p,get sunIntensity(){return m},get exposure(){return h},get windowGlow(){return g},get toonGain(){return _},get t(){return nt(t)},get auto(){return r},get clock(){let e=Math.round(nt(t)*24*60)%1440;return`${String(Math.floor(e/60)).padStart(2,`0`)}:${String(e%60).padStart(2,`0`)}`},cyclePreset(){n=(Math.floor(t*4+1e-4)+1)/4},nudge(e){n+=e/24},goTo(e){n=e},toggleAuto(){r=!r},setReducedMotion(e){i=e},update(e){r&&!i&&(n+=e/et),t=it(t,n,e),y(t)}}}function ot(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.35,`rgba(255,255,255,0.55)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new A(e);return r.colorSpace=u,r}function st(e,t){let n=[];for(let r=0;r<16;r++){let i=r/16*Math.PI*2;n.push(new L(Math.cos(i)*e,t,Math.sin(i)*e))}return new V(n,!0,`catmullrom`,.5)}function ct(e){let t=(t,n)=>Math.exp(-((e-t)*(e-t))/(2*n*n)),n=Math.max(t(.33,.05),t(.75,.06)),r=p.smoothstep(e,.24,.3)*(1-p.smoothstep(e,.8,.88));return p.clamp(.15+.55*r+.45*n,.12,1)}function lt(){let{PITCH:e,N:t,PLINTH_TOP:n}=Je,r=t+1,i=n+.04,a=n=>(n-t/2)*e,o=t/2,s=[],c=(e,t)=>t*r+e;for(let e=0;e<r;e++)for(let t=0;t<r;t++)s.push({x:a(t),z:a(e),i:t,j:e,edges:[]});let l=[],u=(t,n)=>{let r=(s[t].i===o||s[t].j===o)&&(s[n].i===o||s[n].j===o),i=l.length;l.push({a:t,b:n,len:e,main:r}),s[t].edges.push(i),s[n].edges.push(i)};for(let e=0;e<r;e++)for(let t=0;t<r;t++)t<r-1&&u(c(t,e),c(t+1,e)),e<r-1&&u(c(t,e),c(t,e+1));return{nodes:s,edges:l,y:i,mid:o}}function ut({plinthTop:e=.3,extent:t=4,profile:n=null}={}){let i=new r,c=lt(),{nodes:u,edges:d}=c,f=c.y,m=.34,h=0;{let e=Je.PITCH-m*2;h=Math.max(1,Math.floor((e+.26)/.56))}let g=new o({color:`#e8c84a`,fog:!0}),_=new a(new O(.05,.012,.3),g,d.length*h);_.frustumCulled=!1,_.raycast=()=>{},_.receiveShadow=!1,_.castShadow=!1,i.add(_);{let e=new v,t=0;for(let n of d){let r=u[n.a],i=u[n.b],a=i.x-r.x,o=i.z-r.z,s=Math.hypot(a,o),c=a/s,l=o/s,d=Math.atan2(c,l),p=s-m*2;for(let n=0;n<h;n++){let i=m+(h===1?p/2:p*n/(h-1));e.position.set(r.x+c*i,f,r.z+l*i),e.rotation.set(0,d,0),e.updateMatrix(),_.setMatrixAt(t++,e.matrix)}}_.instanceMatrix.needsUpdate=!0}let y=new a(new O(.34,.26,.74),Z(new l({flatShading:!0,roughness:.5,metalness:.3})),12);y.castShadow=!0,y.receiveShadow=!1,y.frustumCulled=!1,y.raycast=()=>{};let b=new ce,x=new Float32Array(72),S=new Float32Array(72),w=new R(`#fff0c0`),T=new R(`#ff3528`);for(let e=0;e<12;e++)w.toArray(S,e*3),T.toArray(S,(12+e)*3),x[e*3+1]=-50,x[(12+e)*3+1]=-50;b.setAttribute(`position`,new ae(x,3)),b.setAttribute(`color`,new ae(S,3));let E=new s({size:.72,sizeAttenuation:!0,map:ot(),vertexColors:!0,transparent:!0,opacity:0,blending:2,depthWrite:!1}),D=new C(b,E);D.frustumCulled=!1,D.raycast=()=>{},i.add(y,D);let k=[`#f4c430`,`#c0392b`,`#d8dde2`,`#9aa7b4`,`#6b7785`,`#5a7d9a`],A=Re(2403557),ee=d.map((e,t)=>t).filter(e=>d[e].main),te=[];for(let e=0;e<12;e++){let t=e<4&&ee.length?ee[A()*ee.length|0]:A()*d.length|0,n=e===1;te.push({edge:t,fwd:A()<.5,s:A()*d[t].len,speed:n?.5:.78+e%3*.1,lenZ:n?1.45:1,color:k[n?1:e===0?0:2+e%4],rng:Re(12648430+e*2654435761)})}let j=new R;te.forEach((e,t)=>y.setColorAt(t,j.set(e.color)));function M(e,t,n){let r=u[e],i=r.edges.filter(e=>e!==t);if(i.length===0)return t;let a=d[t],o=a.a===e?a.b:a.a,s=r.x-u[o].x,c=r.z-u[o].z,l=Math.hypot(s,c)||1,f=i[0],p=-2;for(let t of i){let n=d[t],i=n.a===e?n.b:n.a,a=u[i].x-r.x,o=u[i].z-r.z,m=Math.hypot(a,o)||1,h=s/l*(a/m)+c/l*(o/m);h>p&&(p=h,f=t)}return n()<.65?f:i[n()*i.length|0]}let N=M,P=new v,F=(e,t)=>{P.position.set(0,-50,0),P.scale.setScalar(0),P.updateMatrix(),e.setMatrixAt(t,P.matrix)},ne=.085,I=Je.PLINTH_TOP+.02+.13,ie=new a(new re(.04,.1,3,6),Z(new l({flatShading:!0,roughness:.8})),14);ie.castShadow=!0,ie.receiveShadow=!1,ie.frustumCulled=!1,ie.raycast=()=>{};let oe=st(t-.72,e),z=[];for(let e=0;e<14;e++)z.push({phase:e/14,speed:.12+e%4*.02,dir:e%2?1:-1});let se=new L,le=new L,B=new R;z.forEach((e,t)=>ie.setColorAt(t,B.set([`#caa`,`#9ab`,`#bba`,`#ab9`][t%4]))),i.add(ie);let V={manhattan:`#e8c84a`,paris:`#dcd2bc`,neoTokyo:`#5ae8e0`};function ue(e){e&&g.color.set(V[e.key]||`#e8c84a`)}ue(n);function de(t,n,r){let i=r?r.t:.5,a=r?r.windowGlow:0,o=Math.max(2,Math.round(ct(i)*12)),s=a>.05;for(let e=0;e<12;e++){if(e>=o){F(y,e),x[e*3+1]=-50,x[(12+e)*3+1]=-50;continue}let n=te[e];n.s+=t*n.speed;let r=0;for(;n.s>=d[n.edge].len&&r++<4;){n.s-=d[n.edge].len;let e=n.fwd?d[n.edge].b:d[n.edge].a,t=N(e,n.edge,n.rng);n.edge=t,n.fwd=d[t].a===e}let i=d[n.edge],a=n.fwd?u[i.a]:u[i.b],c=n.fwd?u[i.b]:u[i.a],l=c.x-a.x,f=c.z-a.z,p=Math.hypot(l,f)||1,m=l/p,h=f/p,g=-h,_=m,v=a.x+m*n.s+g*ne,b=a.z+h*n.s+_*ne,S=Math.atan2(m,h);P.position.set(v,I,b),P.rotation.set(0,S,0),P.scale.set(1,1,n.lenZ),P.updateMatrix(),y.setMatrixAt(e,P.matrix);let C=.74*n.lenZ*.5,w=I+.06,T=e*3,E=(12+e)*3;s?(x[T]=v+m*(C+.04),x[T+1]=w,x[T+2]=b+h*(C+.04),x[E]=v-m*(C+.02),x[E+1]=w,x[E+2]=b-h*(C+.02)):(x[T+1]=-50,x[E+1]=-50)}y.instanceMatrix.needsUpdate=!0,b.attributes.position.needsUpdate=!0,E.opacity=p.clamp(a*1.8,0,1);let c=Math.max(2,Math.round(ct(i)*14));for(let t=0;t<14;t++){if(t>=c){F(ie,t);continue}let r=z[t],i=(r.phase+r.dir*r.speed*n*.02+1e3)%1;oe.getPointAt(i,se),oe.getTangentAt(i,le);let a=Math.sin(n*6+r.phase*30)*.015;P.position.set(se.x,e+.09+a,se.z),P.rotation.set(0,Math.atan2(le.x*r.dir,le.z*r.dir),Math.sin(n*6+r.phase*30)*.06),P.scale.setScalar(1),P.updateMatrix(),ie.setMatrixAt(t,P.matrix)}ie.instanceMatrix.needsUpdate=!0}return{group:i,update:de,setProfile:ue,graph:c,setRouter(e){N=e||M}}}function dt(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.4,`rgba(255,255,255,0.5)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new A(e);return r.colorSpace=u,r}function ft(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64*.62,0,64/2,64*.62,64*.5);n.addColorStop(0,`rgba(240,250,255,0.95)`),n.addColorStop(1,`rgba(240,250,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new A(e);return r.colorSpace=u,r}function pt(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`);t.strokeStyle=`rgba(40,46,54,0.9)`,t.lineWidth=6,t.lineCap=`round`,t.beginPath(),t.moveTo(8,40),t.quadraticCurveTo(24,18,32,34),t.quadraticCurveTo(40,18,56,40),t.stroke();let n=new A(e);return n.colorSpace=u,n}function mt(e,t,n=18){let r=[];for(let i=0;i<n;i++){let a=i/n*Math.PI*2;r.push(new L(Math.cos(a)*e,t,Math.sin(a)*e))}return new V(r,!0,`catmullrom`,.5)}function ht(e,t,n){let r=e-t,i=[],a=(e,t)=>i.push(new L(e,n,t)),o=(e,n,r,i,o=4)=>{for(let s=1;s<=o;s++){let c=r+(i-r)*(s/o);a(e+Math.cos(c)*t,n+Math.sin(c)*t)}};for(let t=0;t<4;t++)a(e,-r+2*r*t/4);o(r,r,0,Math.PI/2);for(let t=0;t<4;t++)a(r-2*r*t/4,e);o(-r,r,Math.PI/2,Math.PI);for(let t=0;t<4;t++)a(-e,r-2*r*t/4);o(-r,-r,Math.PI,1.5*Math.PI);for(let t=0;t<4;t++)a(-r+2*r*t/4,-e);return o(r,-r,1.5*Math.PI,2*Math.PI),new V(i,!0,`catmullrom`,.5)}function gt({extent:t=8,waterSize:n=28,plinthTop:i=.3}={}){let a=new r;a.raycast=()=>{};let o=.06,c=(e,t,r)=>r.set(e/n+.5,-t/n+.5,0),u=[ht(9.5,3,o),mt(12.7,o),new V([new L(8.4,o,0),new L(11,o,-3.6),new L(13,o,0),new L(11,o,3.6)],!0,`catmullrom`,.5)],d=u.map(e=>e.getLength());function f({scale:e=1,hull:t=`#6b7785`,cabin:n=`#e7ecf2`}){let i=new r,a=new g(new O(.46*e,.2*e,1.1*e),Z(new l({color:t,roughness:.6,metalness:.2,flatShading:!0}),{color:t}));a.position.y=.02;let o=new g(new O(.3*e,.22*e,.42*e),Z(new l({color:n,roughness:.7,flatShading:!0}),{color:n}));return o.position.set(0,.18*e,.08*e),i.add(a,o),i.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!1),e.raycast=()=>{}}),i.userData.halfLen=.55*e,i}let m=[{laneIndex:0,dir:1,speed:.5,wake:.024,scale:1,hull:`#5a6675`,cabin:`#e7ecf2`},{laneIndex:1,dir:-1,speed:.42,wake:.022,scale:1,hull:`#7a5b46`,cabin:`#d9c3a6`},{laneIndex:0,dir:1,speed:.56,wake:.024,scale:.9,hull:`#456079`,cabin:`#cfe0ee`},{laneIndex:2,dir:1,speed:.34,wake:.03,scale:1.35,hull:`#39505f`,cabin:`#e2b85a`}];m.forEach((e,t)=>{e.mesh=f(e),e.u=t*.27%1,e.phase=t*1.7,e.isFerry=e.laneIndex===2,a.add(e.mesh)});let h=m.length,v=h*2,y=new ce,b=new Float32Array(v*3).fill(-50),x=new Float32Array(v*3),S=new R(`#fff0c0`),w=new R(`#ff3528`);for(let e=0;e<h;e++)S.toArray(x,e*3),w.toArray(x,(h+e)*3);y.setAttribute(`position`,new ae(b,3)),y.setAttribute(`color`,new ae(x,3));let T=new C(y,new s({size:.6,sizeAttenuation:!0,map:dt(),vertexColors:!0,transparent:!0,opacity:0,blending:2,depthWrite:!1}));T.frustumCulled=!1,T.raycast=()=>{},a.add(T);function E(e,t){let n=new g(new _(e,9,7),Z(new l({color:t,roughness:.5,flatShading:!0}),{color:t}));return n.scale.set(.55,.5,1),n.castShadow=!1,n.receiveShadow=!1,n.raycast=()=>{},n.position.y=-5,n}let D=[{x:-9.5,z:6,size:.18,color:`#5b6f86`,period:11,arcH:.55,span:1.1,whale:!1},{x:7.5,z:-9.5,size:.16,color:`#4a6076`,period:14,arcH:.5,span:1,whale:!1},{x:-7,z:-8.5,size:.2,color:`#607089`,period:9,arcH:.6,span:1.2,whale:!1},{x:10.5,z:7,size:.62,color:`#3a4350`,period:38,arcH:.9,span:2.6,whale:!0}];D.forEach((t,n)=>{t.mesh=E(t.size,t.color),t.heading=Math.atan2(-t.x,-t.z),t.t=n/D.length*t.period,t.splashed=!1,a.add(t.mesh),t.whale&&(t.spout=new e(new te({map:ft(),transparent:!0,opacity:0,depthWrite:!1,fog:!0})),t.spout.scale.set(.6,1.1,1),t.spout.position.set(t.x,-5,t.z),a.add(t.spout))});let k=pt(),A=[];for(let t=0;t<4;t++){let n=new e(new te({map:k,transparent:!0,opacity:0,depthWrite:!1,fog:!0}));n.scale.setScalar(.5),A.push({sp:n,r:8.6+t*.5,y:1.1+t%2*.5,speed:(.18+t*.03)*(t%2?-1:1),phase:t*1.9}),a.add(n)}let ee=D.length,j=Array.from({length:h+ee},()=>new L),M=e=>e.laneIndex,N=new L,P=new L,F=new L;function ne(e,t,n){let r=n?n.windowGlow:0,i=1-r;for(let n=0;n<h;n++){let i=m[n],a=u[i.laneIndex],s=d[i.laneIndex],l=i.isFerry?.45+.55*Math.min(1,Math.abs((i.u+.5)%1-.5)*3):1,f=i.u;i.u=(i.u+i.dir*e*i.speed*l/s+1)%1,(i.dir>0?i.u<f:i.u>f)&&(i.laneIndex=M(i)),a.getPointAt(i.u,N),a.getTangentAt(i.u,P);let p=P.x*i.dir,g=P.z*i.dir,_=Math.atan2(p,g),v=Math.sin(t*1.1+i.phase)*.025;i.mesh.position.set(N.x,o+v,N.z),i.mesh.rotation.set(Math.sin(t*.9+i.phase)*.04,_,0);let y=i.mesh.userData.halfLen;c(N.x-p*y,N.z-g*y,F),j[n].set(F.x,F.y,i.wake);let x=n*3,S=(h+n)*3;if(r>.05){let e=.18;b[x]=N.x+p*(y+.05),b[x+1]=e,b[x+2]=N.z+g*(y+.05),b[S]=N.x-p*(y+.02),b[S+1]=e,b[S+2]=N.z-g*(y+.02)}else b[x+1]=-50,b[S+1]=-50}re(),T.material.opacity=p.clamp(r*1.8,0,1);for(let t=0;t<ee;t++){let n=D[t];n.t+=e;let r=h+t,i=n.whale?3.2:1.3;if(n.t>=n.period){let e=(n.t-n.period)/i;if(e>=1){n.t=0,n.splashed=!1,n.mesh.position.y=-5,n.spout&&(n.spout.material.opacity=0),j[r].set(0,0,0);continue}let t=Math.sin(Math.PI*e),a=(e-.5)*n.span,s=n.x+Math.sin(n.heading)*a,l=n.z+Math.cos(n.heading)*a;n.mesh.position.set(s,o-.1+t*n.arcH,l),n.mesh.rotation.set(Math.cos(Math.PI*e)*.9,n.heading,0);let u=e<.16||e>.84;if(c(s,l,F),j[r].set(F.x,F.y,u?n.whale?.07:.05:0),n.spout){let t=p.clamp((e-.15)*3,0,1)*(1-e);n.spout.position.set(s,.56+t*.6,l),n.spout.material.opacity=t*.9}}else n.mesh.position.y=-5,j[r].set(0,0,0),n.spout&&(n.spout.material.opacity=0)}for(let e=0;e<4;e++){let n=A[e],r=n.phase+t*n.speed*.25;n.sp.position.set(Math.cos(r)*n.r,n.y+Math.sin(t*1.4+n.phase)*.12,Math.sin(r)*n.r),n.sp.material.opacity=p.clamp(i*.9-.05,0,.85)}if(typeof window<`u`){let e=0;for(let t of D)t.mesh.position.y>o&&e++;window.__waterLife={boats:h,breaching:e,gulls:+A[0].sp.material.opacity.toFixed(2),lights:+T.material.opacity.toFixed(2)}}}function re(){y.attributes.position.needsUpdate=!0}function I(){return j.length}return{group:a,update:ne,wakeDrops:j,get wakeCount(){return I()},lanes:u,setRouter(e){M=e||(e=>e.laneIndex)}}}var _t=[`empireState`,`chrysler`,`liberty`,`eiffel`,`arcDeTriomphe`,`sacreCoeur`,`tokyoTower`,`pagoda`,`neonBillboard`],vt={empireState:1.25,chrysler:1.1,liberty:.55,eiffel:3.2,arcDeTriomphe:1.5,sacreCoeur:1.75,tokyoTower:1.35,pagoda:.5,neonBillboard:.9};function yt(e){let t=()=>new l({flatShading:!0,roughness:.7,metalness:.1}),n=(n,r={})=>r.windows?Le(t(),{color:n,id:e.id(),windowGlow:e.windowGlow,winColors:e.winColors,litFrac:e.litFrac}):Z(t(),{color:n,glow:r.glow??null,glowDay:r.glowDay??0,glowNight:r.glowNight??1,windowGlow:r.glow?e.windowGlow:null});return{box:(e,t,r,i,a={})=>new g(new O(e,t,r),n(i,a)),cyl:(e,t,r,i,a={})=>new g(new N(e,t,r,a.seg||12),n(i,a)),cone:(e,t,r,i={})=>new g(new I(e,t,i.seg||8),n(r,i)),sphere:(e,t,r={})=>new g(new _(e,r.seg||12,r.seg2||8),n(t,r)),lathe:(e,t,r={})=>new g(new i(e.map(e=>new B(e[0],e[1])),r.seg||4),n(t,r))}}var $=(e,t,n,r)=>(e.position.set(t,n,r),e),bt=[`#7FB0E0`,`#E07FB0`,`#7FE0A0`,`#E0C97F`,`#9FE07F`,`#7FE0E0`,`#FF8C42`,`#E0E07F`,`#C97FE0`,`#E07F7F`,`#7F9FE0`,`#E0483A`],xt={empireState(e,t){let n=`#E8E0CF`;e.add($(t.box(.42,.18,.42,n,{windows:!0}),0,.09,0)),e.add($(t.box(.34,.16,.34,n,{windows:!0}),0,.26,0)),e.add($(t.box(.26,.14,.26,n,{windows:!0}),0,.41,0)),e.add($(t.box(.19,.34,.19,n,{windows:!0}),0,.65,0)),e.add($(t.box(.13,.06,.13,n,{windows:!0}),0,.85,0));let r=bt[new Date().getMonth()];e.add($(t.cyl(.03,.045,.12,n,{seg:10,glow:r,glowNight:1.85}),0,.94,0)),e.add($(t.cone(.012,.07,n,{seg:8}),0,1.04,0))},chrysler(e,t){let n=`#C9CED4`;e.add($(t.box(.22,.55,.22,`#9AA7B4`,{windows:!0}),0,.275,0));let r=.55;for(let i=0;i<5;i++){let a=.14-i*.024,o=.07;e.add($(t.cyl(a*.7,a,o,n,{seg:8,glow:`#dfeaff`,glowNight:.5}),0,r+o/2,0)),r+=o}e.add($(t.cone(.018,.16,n,{seg:8}),0,r+.08,0))},liberty(e,t){let n=`#B9B4A6`,r=`#4FA890`;e.add($(t.box(.42,.16,.42,n),0,.08,0)),e.add($(t.box(.3,.2,.3,n),0,.26,0)),e.add($(t.cyl(.1,.15,.42,r,{seg:10}),0,.57,0)),e.add($(t.box(.11,.1,.11,r),0,.83,0));for(let n=0;n<7;n++){let i=(n/6-.5)*Math.PI*1.1;e.add($(t.cone(.012,.1,r,{seg:5}),Math.sin(i)*.1,.92,Math.cos(i)*.06-.02))}let i=$(t.cyl(.025,.03,.34,r,{seg:8}),.14,.98,0);i.rotation.z=.35,e.add(i),e.add($(t.box(.06,.06,.06,r,{glow:`#ffd060`,glowDay:.6,glowNight:1.2}),.2,1.16,0)),e.add($(t.cone(.04,.09,`#ffcf66`,{seg:6,glow:`#ffd060`,glowDay:.7,glowNight:1.3}),.2,1.24,0))},eiffel(e,t){let n=`#6E5C4C`,r=[[.2,0],[.13,.16],[.085,.33],[.055,.5],[.035,.66],[.02,.85],[0,.92]];e.add(t.lathe(r,n,{seg:4}));let i=t.lathe(r,n,{seg:4});i.rotation.y=Math.PI/4,e.add(i),e.add($(t.box(.26,.025,.26,n),0,.33,0)),e.add($(t.box(.14,.02,.14,n),0,.66,0)),e.add($(t.cone(.01,.1,n,{seg:6}),0,.97,0))},arcDeTriomphe(e,t){let r=`#D9D0C1`,i=.58,a=.5,o=.34,s=new E;s.moveTo(-.58/2,0),s.lineTo(i/2,0),s.lineTo(i/2,a),s.lineTo(-.58/2,a),s.lineTo(-.58/2,0);let c=new n,u=.15,d=.22;c.moveTo(-.15,0),c.lineTo(-.15,d),c.absarc(0,d,u,Math.PI,0,!0),c.lineTo(u,0),c.lineTo(-.15,0),s.holes.push(c);let f=new k(s,{depth:o,bevelEnabled:!1});f.translate(0,0,-.34/2),f.computeVertexNormals(),e.add(new g(f,Z(new l({color:r,flatShading:!0}),{color:r}))),e.add($(t.box(i*1.06,.08,o*1.06,r),0,.54,0))},sacreCoeur(e,t){let n=`#F1EEE6`;e.add($(t.box(.5,.26,.4,n),0,.13,0));let r=(r,i,a,o)=>{e.add($(t.cyl(a*.9,a,i,n,{seg:12}),r,o,0));let s=$(t.sphere(a,n,{seg:12}),r,o+i/2,0);s.scale.y=1.5,e.add(s)};r(0,.22,.15,.4),r(-.2,.1,.07,.33),r(.2,.1,.07,.33)},tokyoTower(e,t){let n=`#F25822`,r=`#EDEDED`,i=0;for(let a=0;a<9;a++){let o=a/9,s=(a+1)/9,c=.19*(1-o)+.03*o,l=.19*(1-s)+.03*s,u=.085,d=a%2?r:n;e.add($(t.cyl(l,c,u,d,{seg:4,glow:n,glowDay:0,glowNight:.7}),0,i+u/2,0)),i+=u}e.add($(t.box(.22,.02,.22,n,{glow:n,glowNight:.7}),0,.28,0)),e.add($(t.box(.12,.02,.12,r),0,.5,0)),e.add($(t.cone(.012,.16,r,{seg:6,glow:`#ff6a2a`,glowNight:.9}),0,i+.08,0))},pagoda(e,t){let n=0;for(let r=0;r<5;r++){let i=.42-r*.06,a=.11;e.add($(t.box(i,a,i,`#B23A2C`,{windows:r<4}),0,n+a/2,0)),e.add($(t.box(i*1.34,.03,i*1.34,`#7A3B2A`),0,n+a+.015,0)),n+=.16999999999999998}e.add($(t.cyl(.012,.012,.1,`#E0C040`,{seg:6}),0,n+.05,0)),e.add($(t.sphere(.03,`#E0C040`,{seg:8,glow:`#ffe680`,glowNight:.8}),0,n+.12,0))},neonBillboard(e,t){let n=`#20242C`;e.add($(t.box(.3,1,.3,n,{windows:!0}),0,.5,0));let r=[`#5AE8E0`,`#E85AA0`,`#E8E06A`],i=(n,r,i,a,o,s,c)=>{let l=$(t.box(n,r,.02,i,{glow:i,glowDay:.6,glowNight:1.1}),a,o,s);l.rotation.y=c,e.add(l)};i(.22,.34,r[0],0,.75,.16,0),i(.16,.5,r[1],.16,.5,0,Math.PI/2),i(.2,.22,r[2],0,.34,-.16,0),e.add($(t.cone(.01,.14,n,{seg:6,glow:`#E85AA0`,glowDay:.4,glowNight:1}),0,1.08,0))}};function St(e,t){let n=new r;return xt[e](n,yt(t)),n}var Ct=``+new URL(`building-skyscraper-d-CapD2Zqe.glb`,import.meta.url).href,wt=``+new URL(`building-n-hdv8kKtN.glb`,import.meta.url).href,Tt=``+new URL(`building-g-CsTB1qH9.glb`,import.meta.url).href,Et=``+new URL(`colormap-CK8fW2HB.png`,import.meta.url).href,Dt={skyscraper:{url:Ct,color:`#9cc1dd`,fill:.92},midrise:{url:wt,color:`#c9a07a`,fill:.96},setback:{url:Tt,color:`#d9c7a0`,fill:.9}};function Ot({windowGlow:e}){let t=new F;t.setURLModifier(e=>e.includes(`colormap.png`)?Et:e);let n=new le(t),r={},i=!1,a=Promise.all(Object.entries(Dt).map(async([e,t])=>{r[e]=(await n.loadAsync(t.url)).scene})).then(()=>{i=!0,window.__landmarksReady=!0}).catch(e=>console.error(`landmark models failed:`,e)),o=9e3;function s(t,n,i={}){let a,s;if(_t.includes(t))a=St(t,{windowGlow:e,winColors:i.winColors,litFrac:i.litFrac,id:()=>++o}),s=1;else{let e=r[t],n=Dt[t];if(!e||!n)return null;a=e.clone(!0),s=n.fill}a.updateMatrixWorld(!0);let c=new P().setFromObject(a).getSize(new L);a.scale.setScalar(n.h*s/c.y),a.updateMatrixWorld(!0);let l=new P().setFromObject(a),u=l.getCenter(new L);return a.position.x+=n.x-u.x,a.position.z+=n.z-u.z,a.position.y+=n.plinthTop-l.min.y,_t.includes(t)?a.traverse(e=>{e.isMesh&&(e.castShadow=!1,e.raycast=()=>{})}):a.traverse(n=>{if(!n.isMesh)return;n.castShadow=!1,n.raycast=()=>{};let r=n=>Le(n.clone(),{color:Dt[t].color,id:++o,windowGlow:e,winColors:i.winColors,litFrac:i.litFrac});n.material=Array.isArray(n.material)?n.material.map(r):r(n.material)}),a}return{make:s,whenReady:a,heightFactor:e=>vt[e]??1,get ready(){return i}}}var kt=[`clear`,`rain`,`snow`,`fog`];function At({extent:e=7}={}){let t=new r;t.raycast=()=>{};let n=e+2,i=.25,s=(e,t)=>e+Math.random()*(t-e),c=new a(new x(.015,.5),new o({color:`#a9bdd6`,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),600);c.frustumCulled=!1,c.raycast=()=>{};let l=new Float32Array(600*3),u=new Float32Array(600);for(let e=0;e<600;e++)l[e*3]=s(-n,n),l[e*3+1]=s(i,11),l[e*3+2]=s(-n,n),u[e]=s(9,14);let d=new a(new x(.07,.07),new o({color:`#f3f7ff`,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),700);d.frustumCulled=!1,d.raycast=()=>{};let f=new Float32Array(700*3),p=new Float32Array(700),m=new Float32Array(700);for(let e=0;e<700;e++)f[e*3]=s(-n,n),f[e*3+1]=s(i,11),f[e*3+2]=s(-n,n),p[e]=s(0,6.28),m[e]=s(.6,1.2);t.add(c,d);let h=Array.from({length:8},()=>new L),g=0,_=`clear`,y=0,b=0,S=0,C=0,w=0,T=new v,E=(e,t,n,r)=>e+(t-e)*Math.min(1,n*r);function D(e){kt.includes(e)&&(_=e)}function O(){_=kt[(kt.indexOf(_)+1)%kt.length]}function k(e,t){let r=_===`rain`,a=_===`snow`,o=_===`fog`,v=_!==`clear`;y=E(y,+!!v,e,1.4),b=E(b,+!!v,e,1.2),S=E(S,+!!o,e,.9),w=E(w,v&&!o?1:0,e,1),C=E(C,+!!a,e,a?.22:.5);let x=r?y:0,D=Math.round(600*x);for(let t=0;t<600;t++){if(t>=D){T.position.set(0,-50,0),T.scale.setScalar(0),T.updateMatrix(),c.setMatrixAt(t,T.matrix);continue}l[t*3+1]-=u[t]*e,l[t*3]+=e*1.1,l[t*3+1]<i&&(l[t*3]=s(-n,n),l[t*3+1]=11,l[t*3+2]=s(-n,n)),T.position.set(l[t*3],l[t*3+1],l[t*3+2]),T.rotation.set(0,0,0),T.scale.set(1,1,1),T.updateMatrix(),c.setMatrixAt(t,T.matrix)}c.instanceMatrix.needsUpdate=!0,c.material.opacity=.55*x,g=r?Math.round(8*y):0;for(let e=0;e<g;e++)h[e].set(Math.random(),Math.random(),.05*y);let O=Math.round(700*(a?y:0));for(let r=0;r<700;r++){if(r>=O){T.position.set(0,-50,0),T.scale.setScalar(0),T.updateMatrix(),d.setMatrixAt(r,T.matrix);continue}f[r*3+1]-=m[r]*e;let a=Math.sin(t*1.5+p[r])*.5;f[r*3+1]<i&&(f[r*3]=s(-n,n),f[r*3+1]=11,f[r*3+2]=s(-n,n)),T.position.set(f[r*3]+a,f[r*3+1],f[r*3+2]),T.rotation.set(0,0,0),T.scale.setScalar(1),T.updateMatrix(),d.setMatrixAt(r,T.matrix)}d.instanceMatrix.needsUpdate=!0,d.material.opacity=.9*(a?y:0)}return{group:t,update:k,cycle:O,setKind:D,rainDrops:h,get kind(){return _},get intensity(){return y},get overcast(){return b},get fog(){return S},get snow(){return C},get cloud(){return w},get rainDropCount(){return g},poolCounts:{rain:600,snow:700}}}function jt(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=(e,n,r)=>{let i=t.createRadialGradient(e,n,0,e,n,r);i.addColorStop(0,`rgba(255,255,255,0.95)`),i.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=i,t.beginPath(),t.arc(e,n,r,0,7),t.fill()};n(128*.42,128*.56,128*.26),n(128*.6,128*.5,128*.3),n(128*.5,128*.46,128*.22),n(128*.34,128*.54,128*.18),n(128*.7,128*.58,128*.18);let r=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5],i=t.getImageData(0,0,128,128),a=i.data;for(let e=0;e<128;e++)for(let t=0;t<128;t++){let n=(e*128+t)*4,i=a[n+3]/255,o=(r[e%4*4+t%4]+.5)/16-.5;a[n+3]=Math.max(0,Math.min(1,Math.floor(i*5+.5+o)/5))*255}t.putImageData(i,0,0);let o=new A(e);return o.colorSpace=u,o}function Mt({extent:t=8,count:n=16}={}){let i=new r;i.raycast=()=>{};let a=jt(),o=t+6,s=(e,t)=>e+Math.random()*(t-e),c=[];for(let t=0;t<n;t++){let t=new te({map:a,transparent:!0,depthWrite:!1,opacity:0,fog:!0}),n=new e(t),r={sp:n,mat:t,wisp:Math.random(),x:s(-o,o),z:s(-o,o),hiY:s(4,6.8),loY:s(.6,2.2),w:s(3,5.6),h:s(1.7,3),speed:s(.25,.7),op:s(.6,1)};n.raycast=()=>{},c.push(r),i.add(n)}let l=new R,u=new R(`#ffffff`),d=new R(`#5b626e`);function f(e,t,n,r){let i=r?r.cloud:0,a=r?r.fog:0,f=Math.min(1,.4+.6*i+.5*a);l.copy(n.sky).lerp(u,.62),l.lerp(d,.6*i);for(let n=0;n<c.length;n++){let r=c[n],u=n/c.length<f;r.x+=r.speed*e*(.6+.8*i),r.x>o&&(r.x=-o,r.z=s(-o,o));let d=Math.min(Nt(r.x,-o,-o+3),1-Nt(r.x,o-3,o)),p=r.hiY*(1-a)+r.loY*a,m=1-.5*r.wisp,h=.72*Math.max(0,1-a-i)+1*i+.42*a,g=u?Math.max(0,h)*r.op*m*d:0;r.mat.opacity+=(g-r.mat.opacity)*Math.min(1,e*2.5),r.mat.color.copy(l);let _=r.w*(1+.6*a)*(1+.4*r.wisp),v=r.h*(1-.35*a);r.sp.scale.set(_,v,1),r.sp.position.set(r.x,p+Math.sin(t*.3+n)*.15,r.z)}}function p(e){a=e;for(let t of c)t.mat.map=e,t.mat.needsUpdate=!0}return{group:i,update:f,setTexture:p,get count(){return c.length}}}function Nt(e,t,n){let r=Math.max(0,Math.min(1,(e-t)/(n-t)));return r*r*(3-2*r)}var Pt=`varying vec2 vUv;

void main() {
  
  
  
  vUv = uv;

  
  
  
  
  
  
  
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,Ft=`precision highp float;

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
}`,It=`varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0); 
}`,Lt=`precision highp float;

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
}`,Rt=`precision highp float;

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
}`,zt=`precision highp float;

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
}`,Bt=`const float CA_STRENGTH   = 0.0030;  
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
}`,Vt=`const float DITHER = 0.55;   

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
}`,Ht=`precision highp float;

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
}`,Ut=`precision highp float;

varying vec2 vUv;
uniform sampler2D uToon;   
uniform sampler2D uPixel;  
uniform float     uBlend;  

void main() {
  vec3 t = texture2D(uToon, vUv).rgb;
  vec3 p = texture2D(uPixel, vUv).rgb;
  gl_FragColor = vec4(mix(t, p, uBlend), 1.0);
}`,Wt=`precision highp float;

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
}`,Gt={"1-bit":{gridWidth:110,dither:.6,palette:[`#15120c`,`#c8b486`]},gb:{gridWidth:130,dither:.4,palette:[`#0f380f`,`#306230`,`#8bac0f`,`#9bbc0f`]},"8-bit":{gridWidth:160,dither:.55,palette:[`#140c1c`,`#442434`,`#30346d`,`#4e4a4e`,`#854c30`,`#346524`,`#d04648`,`#757161`,`#597dce`,`#d27d2c`,`#8595a1`,`#6daa2c`,`#d2aa99`,`#6dc2ca`,`#dad45e`,`#deeed6`]},"16-bit":{gridWidth:280,dither:.3,palette:`#000000.#222034.#45283c.#663931.#8f563b.#df7126.#d9a066.#eec39a.#fbf236.#99e550.#6abe30.#37946e.#4b692f.#524b24.#323c39.#3f3f74.#306082.#5b6ee1.#639bff.#5fcde4.#cbdbfc.#ffffff.#9badb7.#847e87.#696a6a.#595652.#76428a.#ac3232.#d95763.#d77bba.#8f974a.#8a6f30`.split(`.`)},modern:{gridWidth:460,dither:.6,palette:null}},Kt=[`gb`,`8-bit`,`16-bit`,`modern`];function qt(e){let t=Math.max(e.length,1),n=new Float32Array(t*4);e.forEach((e,t)=>{let r=new R(e);n[t*4+0]=r.r,n[t*4+1]=r.g,n[t*4+2]=r.b,n[t*4+3]=1});let r=new M(n,t,1,d,fe);return r.minFilter=f,r.magFilter=f,r.needsUpdate=!0,r}var Jt=220,Yt={night:[`#0A0C16`,`#1C2236`,`#3A3A52`,`#5A5A78`,`#8A92B0`],dawn:[`#1A1008`,`#43281A`,`#7A4A30`,`#B07A4E`,`#E8A86A`],noon:[`#16100A`,`#3A2F1E`,`#6B563A`,`#937B54`,`#B89968`],dusk:[`#140A0A`,`#3E1E1A`,`#7A3828`,`#B85A36`,`#F0884A`]},Xt={night:[`#020604`,`#06180E`,`#10401E`,`#1E9040`,`#7FE0FF`],dawn:[`#060603`,`#1A2410`,`#3A6B22`,`#6CC040`,`#FFC060`],noon:[`#050805`,`#0E2912`,`#1E6B2F`,`#3CF06A`,`#FFB000`],dusk:[`#080402`,`#241408`,`#6B4A12`,`#E0A030`,`#FF7030`]};function Zt({demo:e=!1,citySeed:n=0,profileIndex:r=0}={}){let i=new ie({antialias:!0,preserveDrawingBuffer:!0});i.shadowMap.enabled=!0,i.shadowMap.type=1,i.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.setSize(window.innerWidth,window.innerHeight),i.setClearColor(920327,1),document.body.appendChild(i.domElement);let a=i.getDrawingBufferSize(new B),s=new T;s.fog=new y(10465470,0);let c=new R(`#aeb6c0`),l=.062,h=new R(`#74508f`),_=new R,v=Ee({aspect:window.innerWidth/window.innerHeight}),b=at({t:.5}),S={type:de,format:d,minFilter:f,magFilter:f,wrapS:j,wrapT:j,depthBuffer:!1,stencilBuffer:!1},C=[new se(256,256,S),new se(256,256,S),new se(256,256,S)];for(let e of C)i.setRenderTarget(e),i.clear();i.setRenderTarget(null);let E=new T,O=new me(-1,1,1,-1,0,1),k=new w({vertexShader:It,fragmentShader:Lt,uniforms:{uCurr:{value:null},uPrev:{value:null},uTexel:{value:new B(1/256,1/256)},uMouse:{value:new B(-1,-1)},uMouseStrength:{value:0},uC2:{value:.25},uDamping:{value:.992},uRainCount:{value:0},uRainDrops:{value:Array.from({length:8},()=>new L)},uWakeCount:{value:0},uWakeDrops:{value:Array.from({length:8},()=>new L)}}});E.add(new g(new x(2,2),k));let ee=new se(a.x,a.y,{minFilter:t,magFilter:t,depthBuffer:!0,stencilBuffer:!1});function te(e){let t=document.createElement(`canvas`);t.width=t.height=1024;let n=t.getContext(`2d`);n.fillStyle=e?`#0c1418`:`#15110b`,n.fillRect(0,0,1024,1024),n.strokeStyle=e?`rgba(120,150,170,0.22)`:`rgba(184,153,104,0.30)`,n.lineWidth=2;for(let e=0;e<=1024;e+=64)n.beginPath(),n.moveTo(e,0),n.lineTo(e,1024),n.stroke(),n.beginPath(),n.moveTo(0,e),n.lineTo(1024,e),n.stroke();e||(n.fillStyle=`#B89968`,n.font=`bold 360px Georgia, serif`,n.textAlign=`center`,n.textBaseline=`middle`,n.fillText(`LGR`,512,470),n.font=`600 64px ui-monospace, monospace`,n.fillText(`WEB · STUDIO`,512,720));let r=new A(t);return r.colorSpace=u,r}let M=new g(new x(28,28),new o({map:te(e)}));M.rotation.x=-Math.PI/2,M.position.y=-.35,s.add(M);let N=new g(new x(40,24),new w({depthWrite:!1,vertexShader:Pt,fragmentShader:Ft,uniforms:{uTime:{value:0},uInk:{value:b.horizon},uGold:{value:b.sky},uFogColor:{value:_},uFogAmt:{value:0},uFogCharm:Ne}}));N.position.set(0,3,-8),s.add(N);let P=new w({vertexShader:Rt,fragmentShader:zt,uniforms:{uHeight:{value:null},uScene:{value:ee.texture},uTexel:{value:new B(1/256,1/256)},uResolution:{value:new B(a.x,a.y)},uDisplace:{value:.42},uNormalStrength:{value:22},uRefractStrength:{value:.06},uChromaScale:{value:1},uNormalMatrix:{value:new m},uLightDir:{value:b.sunDir},uInk:{value:new R(`#2A2218`)},uGold:{value:new R(`#B89968`)},uVector:De,uVecWater:{value:new R(`#1fb8d8`)},uVecTint:{value:Oe}}}),F=new g(new x(28,28,255,255),P);F.rotation.x=-Math.PI/2,F.updateMatrixWorld(!0),P.uniforms.uNormalMatrix.value.getNormalMatrix(F.matrixWorld),s.add(F);let ne={value:0},re=Ot({windowGlow:ne}),I=Ze({seed:n,profileIndex:r,landmarkFactory:re,windowGlow:ne});s.add(I.group);let ae=ut({plinthTop:.3,extent:I.extent,profile:I.state.profile});s.add(ae.group);let oe=gt({extent:I.extent,waterSize:28,plinthTop:.3});s.add(oe.group),k.uniforms.uWakeDrops.value=oe.wakeDrops;let z=At({extent:I.extent});s.add(z.group),k.uniforms.uRainDrops.value=z.rainDrops;let ce=Mt({extent:I.extent});s.add(ce.group),I.group.remove(I.key),s.add(I.key),I.key.castShadow=!0,I.key.shadow.mapSize.set(2048,2048),I.key.shadow.bias=-18e-5,I.key.shadow.normalBias=.028,s.add(I.key.target);function le(){let e=I.key.shadow.camera,t=I.extent+4.5;e.left=-t,e.right=t,e.top=t,e.bottom=-t,e.near=1,e.far=48,e.updateProjectionMatrix()}le();let V=new D(a.x,a.y),ue=new se(a.x,a.y,{minFilter:t,magFilter:t,depthBuffer:!0,stencilBuffer:!1,depthTexture:V}),fe=new se(a.x,a.y,{minFilter:t,magFilter:t,depthBuffer:!1,stencilBuffer:!1}),pe=new se(a.x,a.y,{minFilter:t,magFilter:t,depthBuffer:!1,stencilBuffer:!1}),he=new se(a.x,a.y,{minFilter:t,magFilter:t,depthBuffer:!1,stencilBuffer:!1}),ge=new T,_e=new me(-1,1,1,-1,0,1),H=new g(new x(2,2));ge.add(H);let U=new w({vertexShader:It,fragmentShader:Bt,uniforms:{uScene:{value:ue.texture},uTime:{value:0},uResolution:{value:new B(a.x,a.y)},uGrain:{value:1},uChroma:{value:1},uExposure:{value:1}}}),ve=e=>{let t=e.map(e=>new R(e));for(;t.length<8;)t.push(new R(0,0,0));return t},ye=[`night`,`dawn`,`noon`,`dusk`],be={inkgold:ye.map(e=>ve(Yt[e])),terminal:ye.map(e=>ve(Xt[e]))},xe=new w({vertexShader:It,fragmentShader:Vt,uniforms:{uScene:{value:fe.texture},uResolution:{value:new B(a.x,a.y)},uPixelSize:{value:Jt},uPalette:{value:be.inkgold[2]},uPaletteB:{value:be.inkgold[2]},uPaletteBlend:{value:0},uPaletteSize:{value:5}}}),Se=new w({vertexShader:It,fragmentShader:Wt,uniforms:{uScene:{value:fe.texture},uResolution:{value:new B(a.x,a.y)},uGridWidth:{value:160},uDither:{value:.55},uPalette:{value:qt(Gt[`8-bit`].palette)},uPaletteSize:{value:1},uUsePalette:{value:1}}}),Ce={};for(let e of Kt)Ce[e]=Gt[e].palette?qt(Gt[e].palette):null;let we=new w({vertexShader:It,fragmentShader:Ht,uniforms:{uScene:{value:fe.texture},uDepth:{value:V},uResolution:{value:new B(a.x,a.y)},uBands:{value:4},uToonGain:{value:1.7},uToonGamma:{value:.6},uToonFloor:{value:b.toonFloor},uOutline:{value:b.outline},uNear:{value:.1},uFar:{value:100},uIsPerspective:{value:1}}}),Te=new w({vertexShader:It,fragmentShader:Ut,uniforms:{uToon:{value:pe.texture},uPixel:{value:he.texture},uBlend:{value:0}}});function W(e,t){H.material=e,i.setRenderTarget(t),i.render(ge,_e)}function G(){v.setViewport(window.innerWidth,window.innerHeight),i.setSize(window.innerWidth,window.innerHeight);let e=i.getDrawingBufferSize(new B);return ee.setSize(e.x,e.y),ue.setSize(e.x,e.y),fe.setSize(e.x,e.y),pe.setSize(e.x,e.y),he.setSize(e.x,e.y),P.uniforms.uResolution.value.set(e.x,e.y),U.uniforms.uResolution.value.set(e.x,e.y),xe.uniforms.uResolution.value.set(e.x,e.y),Se.uniforms.uResolution.value.set(e.x,e.y),we.uniforms.uResolution.value.set(e.x,e.y),e}let K=3,q=!1,J=!1,Y=`native`,Fe=.3,X=.46,Ie=[`native`,...Kt],Le={"16-bit":`16-bit`,"8-bit":`8-bit`,gb:`Game Boy`,modern:`Modern`,native:`Pixel`,"1-bit":`1-bit`};typeof window<`u`&&(window.__mode=K,window.__vector=q,window.__era=Y);let Z=0,Re=performance.now();function ze(e){let t=J?be.terminal:be.inkgold,n=e%1*4,r=Math.floor(n)%4;xe.uniforms.uPalette.value=t[r],xe.uniforms.uPaletteB.value=t[(r+1)%4],xe.uniforms.uPaletteBlend.value=n-Math.floor(n)}function Be(e){let t=Gt[e];t&&(Se.uniforms.uGridWidth.value=t.gridWidth,Se.uniforms.uDither.value=t.dither,Se.uniforms.uUsePalette.value=+!!t.palette,t.palette&&(Se.uniforms.uPalette.value=Ce[e],Se.uniforms.uPaletteSize.value=t.palette.length))}function Ve(){Y!==`native`&&Be(Y)}let He=()=>Y===`native`?xe:Se;function Ue(e,t){F.visible=!1,i.setRenderTarget(ee),i.render(s,e),F.visible=!0,i.setRenderTarget(t),i.render(s,e)}function We(e,t){if(F.visible=!1,i.setRenderTarget(ee),i.render(s,v.camera),F.visible=!0,K===1||q&&K!==7&&K!==8)i.setRenderTarget(t),i.render(s,v.camera);else if(i.setRenderTarget(ue),i.render(s,v.camera),K===2)U.uniforms.uGrain.value=1,U.uniforms.uChroma.value=1,W(U,t);else{U.uniforms.uGrain.value=0,U.uniforms.uChroma.value=0,W(U,fe);let n=v.camera;we.uniforms.uNear.value=n.near,we.uniforms.uFar.value=n.far,we.uniforms.uIsPerspective.value=+!!n.isPerspectiveCamera;let r=e.era?(Be(e.era),Se):He();e.kind===`pixel`?(W(r,t),window.__style=`pixel`):e.kind===`toon`?(W(we,t),window.__style=`toon`):(W(we,pe),W(r,he),Te.uniforms.uBlend.value=e.blend,W(Te,t),window.__style=`blend`)}}function Ge(){let e=Ke(),t=e.kind===`toon`?1:e.kind===`blend`?1-e.blend:0;return P.uniforms.uChromaScale.value=p.lerp(1,.5,t),e}function Ke(){if(K===1||K===2)return{kind:`none`};if(K===7)return{kind:`pixel`};if(K===8)return{kind:`toon`};let e=v.styleT;return window.__styleT=e,e<=Fe?{kind:`toon`}:e>=X?{kind:`pixel`,era:e<.62?`16-bit`:e<.8?`8-bit`:`gb`}:{kind:`blend`,blend:p.smoothstep(e,Fe,X),era:`16-bit`}}function qe(e){return K===1||K===2?``:q&&K!==7&&K!==8?`Vector`:e.kind===`toon`?`Toon`:e.kind===`pixel`?Le[e.era||Y]||`Pixel`:e.kind===`blend`?`Toon → `+(Le[e.era]||`Pixel`):``}function Q(e,t,{shadowsOn:n=!0,seasonTarget:r=0}={}){N.material.uniforms.uTime.value=t,U.uniforms.uTime.value=t,b.update(e),I.key.position.copy(b.sunDir).multiplyScalar(24),I.key.color.copy(b.sunColor),I.key.intensity=b.sunIntensity,I.fill.color.copy(b.hemiSky),I.fill.groundColor.copy(b.hemiGround),ne.value=b.windowGlow;let a=z.overcast;I.key.intensity*=1-.5*a,I.key.color.lerp(c,.45*a),I.fill.intensity=1+.7*a;let o=p.smoothstep(b.sunDir.y,.06,.34),u=p.lerp(.28,1,1-b.windowGlow),d=n?o*u:0;I.key.shadow.intensity=.72*d,ke.value=.52*d;let f=1-b.windowGlow;Oe.setRGB(p.lerp(.46,1,f),p.lerp(.52,1,f),p.lerp(.74,1,f)),U.uniforms.uExposure.value=b.exposure,we.uniforms.uToonGain.value=b.toonGain,i.setClearColor(b.horizon,1),ze(b.t),window.__t=b.t,ae.update(e,t,b),I.update(t),oe.update(e,t,b),k.uniforms.uWakeCount.value=oe.wakeCount,z.update(e,t),k.uniforms.uRainCount.value=z.rainDropCount;let m=z.fog*(1-f);s.fog.density=z.fog*l,_.copy(b.horizon).lerp(h,.85*m),s.fog.color.copy(_),i.setClearColor(_,1),Ne.value=z.fog,N.material.uniforms.uFogAmt.value=.7*z.fog,Ae.value=z.snow,je.value=z.cloud*.55,Me.x+=e*.018,Me.y+=e*.009,Pe.value+=(r-Pe.value)*Math.min(1,e*1.5),ce.update(e,t,b,z),Z++;let g=performance.now();g-Re>=1e3&&(window.__fps=Z,Z=0,Re=g);let[v,y,x]=C;k.uniforms.uPrev.value=v.texture,k.uniforms.uCurr.value=y.texture,i.setRenderTarget(x),i.render(E,O),C=[y,x,v],P.uniforms.uHeight.value=C[1].texture}function Je(e){K=e,window.__mode=K}function Ye(){return q=!q,De.value=+!!q,window.__vector=q,q}function Xe(e){return q=!!e,De.value=+!!q,window.__vector=q,q}function Qe(){return Y=Ie[(Ie.indexOf(Y)+1)%Ie.length],window.__era=Y,Ve(),Y}function $e(){return J=!J,J}return{updateWorld:Q,decideStyle:Ge,renderCityPipeline:We,renderCityBeautyTo:Ue,styleHintName:qe,setPostMode:Je,toggleVector:Ye,setVector:Xe,cycleEra:Qe,togglePalette:$e,get mode(){return K},get vector(){return q},get sceneEra(){return Y},renderer:i,drawBuffer:a,scene:s,rig:v,sunRig:b,SIM:256,targets:C,simScene:E,simCamera:O,simMaterial:k,grabRT:ee,card:M,backdrop:N,WATER_SIZE:28,water:F,waterMaterial:P,windowGlow:ne,landmarkFactory:re,city:I,cityLife:ae,waterLife:oe,weatherRig:z,clouds:ce,fitShadowFrustum:le,SHADOW_DIST:24,sceneDepth:V,sceneRT:ue,filmicRT:fe,toonRT:pe,pixelRT:he,postScene:ge,postCamera:_e,postQuad:H,filmicMaterial:U,pixelMaterial:xe,pixelkitMaterial:Se,toonMaterial:we,mixMaterial:Te,PALCACHE:be,ERA_TEX:Ce,runPass:W,OVERCAST_GREY:c,FOG_DENSITY:l,FOG_NIGHT_TINT:h,_fogColor:_,resize:G}}var Qt=new Set([`w`,`a`,`s`,`d`,`arrowup`,`arrowdown`,`arrowleft`,`arrowright`,`shift`,` `]),$t={walker:{p:.6,hp:26,speed:.85,dmg:9,score:10,size:1,color:`#6f8a45`},runner:{p:.25,hp:12,speed:1.75,dmg:7,score:16,size:.82,color:`#a6d24c`},tank:{p:.15,hp:95,speed:.5,dmg:20,score:34,size:1.5,color:`#39492a`}};function en(){let e=Math.random();return e<$t.walker.p?`walker`:e<$t.walker.p+$t.runner.p?`runner`:`tank`}var tn=new R(`#ffffff`),nn=new R(`#d83a2a`),rn={food:{name:`Food`,glyph:`🍖`,color:`#c8782e`,consumable:!0},water:{name:`Water`,glyph:`💧`,color:`#3aa6dc`,consumable:!0},bandage:{name:`Bandage`,glyph:`➕`,color:`#e8e2d6`,consumable:!0},scrap:{name:`Scrap`,glyph:`⚙️`,color:`#8a8f96`,consumable:!1},medkit:{name:`Medkit`,glyph:`✚`,color:`#e0524a`,consumable:!0},repairkit:{name:`Repair Kit`,glyph:`🔧`,color:`#caa05a`,consumable:!0}},an=[{out:`medkit`,need:{bandage:2}},{out:`repairkit`,need:{scrap:3}}];function on({extent:e=8,plinthTop:t=.3}={}){let n=new r;n.visible=!1,n.raycast=()=>{};let i=t+.02,s=Math.max(3,e-.7),c=typeof window<`u`&&window.matchMedia&&window.matchMedia(`(pointer: coarse)`).matches,u=1.25,d=4.4,f=1.4,m=new r,y=new g(new re(.16,.34,4,10),Z(new l({color:`#3f7fd0`,roughness:.6,flatShading:!0}),{color:`#3f7fd0`}));y.position.y=.33;let b=new g(new _(.13,12,9),Z(new l({color:`#e9caa1`,roughness:.75,flatShading:!0}),{color:`#e9caa1`}));b.position.y=.66;let x=new g(new O(.1,.1,.16),Z(new l({color:`#ffd54a`,roughness:.5,flatShading:!0}),{color:`#ffd54a`}));x.position.set(0,.38,.18),m.add(y,b,x),m.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!1),e.raycast=()=>{}}),m.scale.setScalar(1.6),m.position.y=i,n.add(m);let S=new g(new ee(.95,16,-.9,1.8),new o({color:`#ffe08a`,transparent:!0,opacity:0,depthWrite:!1,side:2}));S.rotation.x=-Math.PI/2,S.position.y=i+.06,S.raycast=()=>{},n.add(S);let C=new ce().setFromPoints([new L,new L]),w=new h(C,new ne({color:`#fff3c0`,transparent:!0,opacity:0,depthWrite:!1}));w.raycast=()=>{},n.add(w);let T={x:0,z:0,vx:0,vz:0,hp:100,stamina:100,hunger:100,thirst:100,facing:0,iframe:0},E=new a(new re(.15,.3,4,8),Z(new l({roughness:.85,flatShading:!0})),48);E.castShadow=!0,E.receiveShadow=!1,E.frustumCulled=!1,E.raycast=()=>{},E.instanceMatrix.setUsage(pe),n.add(E);let D=[];for(let e=0;e<48;e++)D.push({x:0,z:0,vx:0,vz:0,alive:!1,in:!1,type:`walker`,hp:1,maxhp:1,speed:1,dmg:0,score:0,size:1,phase:0,flash:0});let k=new R,A=[],te=Z(new l({color:`#7a5a36`,roughness:.9,flatShading:!0}),{color:`#7a5a36`});for(let e=0;e<8;e++){let t=e/8*Math.PI*2,r=new g(new O(2.1,.7,.24),te.clone());r.position.set(Math.cos(t)*d,i+.35,Math.sin(t)*d),r.rotation.y=-t+Math.PI/2,r.castShadow=!0,r.raycast=()=>{},n.add(r),A.push({mesh:r,ang:t,hp:150,alive:!0,baseColor:new R(`#7a5a36`)})}function j(e,t){let n=Math.atan2(t,e);return n<0&&(n+=Math.PI*2),A[Math.round(n/(Math.PI*2/8))%8]}let M=[];for(let e=0;e<14;e++){let e=new g(new O(.26,.26,.26),Z(new l({roughness:.6,flatShading:!0})));e.castShadow=!0,e.visible=!1,e.raycast=()=>{},n.add(e),M.push({mesh:e,x:0,z:0,kind:`food`,active:!1})}let N=new R;function P(){let e=Math.random();return e<.36?`food`:e<.72?`water`:e<.88?`bandage`:`scrap`}function F(e,t,n){let r=M.find(e=>!e.active);r&&(r.x=e,r.z=t,r.kind=n||P(),r.active=!0,r.mesh.position.set(e,i+.18,t),r.mesh.visible=!0,r.mesh.material.color.copy(N.set(rn[r.kind].color)))}let I=[];function ie(e){let t=I.find(t=>t.id===e);return t?t.n:0}function ae(e,t=1){let n=I.find(t=>t.id===e);return n?(n.n+=t,!0):I.length<8?(I.push({id:e,n:t}),!0):!1}function oe(e,t){let n=I.find(t=>t.id===e);return!n||n.n<t?!1:(n.n-=t,n.n<=0&&I.splice(I.indexOf(n),1),!0)}function z(e){if(ie(e)<=0)return!1;if(e===`food`)T.hunger=Math.min(100,T.hunger+38);else if(e===`water`)T.thirst=Math.min(100,T.thirst+38);else if(e===`bandage`)T.hp=Math.min(100,T.hp+40);else if(e===`medkit`)T.hp=Math.min(100,T.hp+90);else if(e===`repairkit`){let e=null;for(let t of A)(!e||t.hp<e.hp)&&(e=t);e&&(e.hp=150,e.alive=!0)}else return!1;return oe(e,1),Ue(),!0}function se(e){for(let t in e.need)if(ie(t)<e.need[t])return!1;for(let t in e.need)oe(t,e.need[t]);return ae(e.out,1),Ue(),!0}let le=!1,B=!1,V=1,ue=0,de=0,fe=0,me=`spawning`,he=0,ge=0,_e=0,H=0,U=!1,ve=null;function ye(){for(let e=0;e<48;e++)if(!D[e].alive)return D[e];return null}function be(e){let t=ye();if(!t)return;let n=$t[en()];t.type=Object.keys($t).find(e=>$t[e]===n)||`walker`;let r=Math.random()*Math.PI*2;t.x=Math.cos(r)*s,t.z=Math.sin(r)*s,t.vx=0,t.vz=0;let i=1+V*.08;t.maxhp=n.hp*i,t.hp=t.maxhp,t.speed=n.speed*(1+.4*e)*(1+V*.015)*(V===1?.85:1),t.dmg=n.dmg,t.score=n.score,t.size=n.size,t.phase=Math.random()*6.28,t.flash=0,t.in=!1,t.alive=!0}function xe(){let e=null,t=1/0;for(let n of D){if(!n.alive)continue;let r=(n.x-T.x)**2+(n.z-T.z)**2;r<t&&(t=r,e=n)}return e}function Se(e){e.alive=!1,ue++,de+=e.score,Math.random()<.3&&F(e.x,e.z)}function Ce(e,t){e.hp-=t,e.flash=.12,e.hp<=0&&Se(e)}function we(){if(B||_e>0)return;_e=.16;let e,t;if(ve)e=ve.x-T.x,t=ve.z-T.z;else{let n=xe();n?(e=n.x-T.x,t=n.z-T.z):(e=Math.sin(T.facing),t=Math.cos(T.facing))}let n=Math.hypot(e,t)||1;e/=n,t/=n,T.facing=Math.atan2(e,t);let r=null,a=1/0;for(let n of D){if(!n.alive)continue;let i=n.x-T.x,o=n.z-T.z,s=i*e+o*t;s<0||s>9||Math.abs(i*t-o*e)<.7*(.4+.6*n.size)&&s<a&&(a=s,r=n)}let o=r?a:9;C.setFromPoints([new L(T.x,i+.5,T.z),new L(T.x+e*o,i+.5,T.z+t*o)]),C.attributes.position.needsUpdate=!0,w.material.opacity=.95,r&&Ce(r,16)}function Te(){if(B||H>0)return;H=.42,S.material.opacity=.85;let e=Math.sin(T.facing),t=Math.cos(T.facing);for(let n of D){if(!n.alive)continue;let r=n.x-T.x,i=n.z-T.z,a=Math.hypot(r,i);a>1.05+n.size*.2||(r*e+i*t)/(a||1)>.2&&Ce(n,34)}}let W={},G={x:0,y:0};function K(e,t){if(!le)return;let n=e.key.toLowerCase();if(t&&n===`i`){e.stopImmediatePropagation(),Ke();return}if(t&&n===`escape`&&Ie){e.stopImmediatePropagation(),Ge();return}if(Qt.has(n)){if(e.stopImmediatePropagation(),n.startsWith(`arrow`)&&e.preventDefault(),n===` `){t&&Te();return}W[n]=t}}typeof window<`u`&&(window.addEventListener(`keydown`,e=>K(e,!0)),window.addEventListener(`keyup`,e=>K(e,!1)));let Ee=null,De=null,Oe=null,ke=null,Ae=null,je=null,Me=null,Ne=null,Pe=null,q=null,J=null,Y=null,Fe=null,X=null,Ie=!1;if(typeof document<`u`){let e=document.createElement(`style`);e.textContent=`
      .hoard-stick{position:fixed;left:22px;bottom:22px;width:124px;height:124px;border-radius:50%;
        background:rgba(16,18,24,0.5);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);
        border:1px solid rgba(255,255,255,0.18);z-index:4;display:none;touch-action:none;pointer-events:auto;}
      .hoard-stick .knob{position:absolute;left:50%;top:50%;width:54px;height:54px;margin:-27px 0 0 -27px;
        border-radius:50%;background:rgba(120,160,220,0.85);box-shadow:0 3px 12px rgba(0,0,0,0.4);}
      .hoard-btn{position:fixed;z-index:4;display:none;width:84px;height:84px;border-radius:50%;border:0;
        color:#fff;font:800 13px/1 ui-monospace,monospace;letter-spacing:.08em;pointer-events:auto;
        box-shadow:0 4px 16px rgba(0,0,0,0.4);touch-action:none;}
      .hoard-fire{right:24px;bottom:96px;background:rgba(210,70,60,0.9);}
      .hoard-melee{right:118px;bottom:30px;background:rgba(70,110,170,0.9);width:70px;height:70px;font-size:12px;}
      .hoard-hud{position:fixed;left:16px;top:14px;z-index:4;font:700 10px/1.1 ui-monospace,monospace;
        letter-spacing:.1em;color:#e7ecf4;display:none;pointer-events:none;text-shadow:0 1px 2px #000;}
      .hoard-hud .bar{width:140px;height:8px;border-radius:5px;background:rgba(255,255,255,0.16);margin:3px 0 7px;overflow:hidden;}
      .hoard-hud .bar i{display:block;height:100%;border-radius:5px;transition:width .08s;}
      .hoard-hud .stat{opacity:.92;font-size:11px;letter-spacing:.14em;}
      .hoard-banner{position:fixed;left:50%;top:34%;transform:translateX(-50%);z-index:5;display:none;
        padding:10px 20px;border-radius:12px;background:rgba(16,18,24,0.8);color:#ffe08a;
        font:800 18px/1 ui-monospace,monospace;letter-spacing:.18em;text-shadow:0 2px 6px #000;pointer-events:none;}
      .hoard-death{position:fixed;inset:0;z-index:6;display:none;flex-direction:column;align-items:center;justify-content:center;
        gap:14px;background:rgba(8,6,10,0.78);backdrop-filter:blur(3px);color:#f2e9e0;pointer-events:auto;
        font:600 14px/1.5 ui-monospace,monospace;letter-spacing:.06em;text-align:center;}
      .hoard-death h2{font-size:30px;letter-spacing:.22em;color:#e0524a;margin:0;}
      .hoard-death button{margin-top:8px;min-width:160px;min-height:48px;border:0;border-radius:12px;
        background:#3a7bd5;color:#fff;font:800 15px/1 ui-monospace,monospace;letter-spacing:.1em;cursor:pointer;}
    `,document.head.appendChild(e),Ee=document.createElement(`div`),Ee.className=`hoard-stick`,De=document.createElement(`div`),De.className=`knob`,Ee.appendChild(De),document.body.appendChild(Ee);let t=!1,n=e=>{let t=Ee.getBoundingClientRect(),n=e.clientX-(t.left+t.width/2),r=e.clientY-(t.top+t.height/2),i=Math.hypot(n,r)||1;i>44&&(n*=44/i,r*=44/i),De.style.transform=`translate(${n}px,${r}px)`,G.x=n/44,G.y=-r/44};Ee.addEventListener(`pointerdown`,e=>{t=!0,Ee.setPointerCapture(e.pointerId),n(e)}),Ee.addEventListener(`pointermove`,e=>{t&&n(e)});let r=()=>{t=!1,G.x=0,G.y=0,De.style.transform=`translate(0,0)`};Ee.addEventListener(`pointerup`,r),Ee.addEventListener(`pointercancel`,r),J=document.createElement(`button`),J.className=`hoard-btn hoard-fire`,J.textContent=`FIRE`,document.body.appendChild(J),Y=document.createElement(`button`),Y.className=`hoard-btn hoard-melee`,Y.textContent=`MELEE`,document.body.appendChild(Y),J.addEventListener(`pointerdown`,e=>{e.preventDefault(),U=!0}),J.addEventListener(`pointerup`,()=>{U=!1}),J.addEventListener(`pointercancel`,()=>{U=!1}),Y.addEventListener(`pointerdown`,e=>{e.preventDefault(),Te()}),Oe=document.createElement(`div`),Oe.className=`hoard-hud`,Oe.innerHTML=`HP<div class="bar"><i style="background:#e0524a"></i></div>STAMINA<div class="bar"><i style="background:#4ad08a"></i></div>HUNGER<div class="bar"><i style="background:#d89a3a"></i></div>THIRST<div class="bar"><i style="background:#3aa6dc"></i></div><div class="stat"></div>`,document.body.appendChild(Oe);let i=Oe.querySelectorAll(`i`);ke=i[0],Ae=i[1],je=i[2],Me=i[3],Ne=Oe.querySelector(`.stat`),Pe=document.createElement(`div`),Pe.className=`hoard-banner`,document.body.appendChild(Pe),q=document.createElement(`div`),q.className=`hoard-death`,q.innerHTML=`<h2>YOU DIED</h2><div class="ds"></div><button>RESTART</button>`,document.body.appendChild(q),q.querySelector(`button`).addEventListener(`click`,()=>Je());let a=document.createElement(`style`);a.textContent=`
      .hoard-bagbtn{position:fixed;right:16px;top:14px;z-index:4;display:none;width:48px;height:48px;border:0;border-radius:12px;
        background:rgba(16,18,24,0.72);color:#fff;font-size:22px;cursor:pointer;pointer-events:auto;box-shadow:0 4px 14px rgba(0,0,0,0.4);}
      .hoard-bag{position:fixed;inset:0;z-index:6;display:none;align-items:center;justify-content:center;
        background:rgba(8,8,12,0.6);backdrop-filter:blur(3px);pointer-events:auto;}
      .hoard-bag.open{display:flex;}
      .hoard-bag .panel{background:rgba(20,22,28,0.96);border-radius:16px;padding:18px 20px;color:#e7ecf4;
        font:700 12px/1.2 ui-monospace,monospace;letter-spacing:.05em;max-width:calc(100vw - 32px);box-shadow:0 8px 30px rgba(0,0,0,0.5);}
      .hoard-bag h3{margin:0 0 10px;font-size:14px;letter-spacing:.16em;}
      .hoard-bag .slots{display:grid;grid-template-columns:repeat(4,58px);gap:8px;}
      .hoard-bag .slot{width:58px;height:58px;border:1px solid rgba(255,255,255,0.14);border-radius:10px;background:rgba(255,255,255,0.05);
        display:flex;align-items:center;justify-content:center;font-size:24px;cursor:pointer;position:relative;}
      .hoard-bag .slot.empty{opacity:.35;cursor:default;}
      .hoard-bag .slot .n{position:absolute;right:4px;bottom:3px;font-size:11px;background:#000a;padding:0 3px;border-radius:4px;}
      .hoard-bag .craft{margin-top:14px;display:flex;gap:8px;flex-wrap:wrap;}
      .hoard-bag .craft button{min-height:44px;border:0;border-radius:10px;padding:0 13px;color:#fff;font:700 11px/1 ui-monospace,monospace;
        letter-spacing:.04em;cursor:pointer;background:#3a7bd5;}
      .hoard-bag .craft button:disabled{opacity:.32;cursor:default;}
      .hoard-bag .close{margin-top:14px;width:100%;min-height:46px;border:0;border-radius:10px;background:#444b57;color:#fff;
        font:700 12px/1 ui-monospace,monospace;letter-spacing:.1em;cursor:pointer;}
    `,document.head.appendChild(a),Fe=document.createElement(`button`),Fe.className=`hoard-bagbtn`,Fe.textContent=`🎒`,Fe.title=`Inventory (I)`,document.body.appendChild(Fe),Fe.addEventListener(`click`,()=>Ke()),X=document.createElement(`div`),X.className=`hoard-bag`,document.body.appendChild(X)}let Le=0;function Re(e,t=1.8){Pe&&(Pe.textContent=e,Pe.style.display=`block`),Le=t}let ze=Math.PI/4;function Be(e){ze=e}function Ve(e,t){ve={x:e,z:t}}function He(e){U=e}function Ue(){if(typeof window<`u`&&(window.__hoardBag=Object.fromEntries(I.map(e=>[e.id,e.n]))),!X)return;let e=`<div class="panel"><h3>INVENTORY</h3><div class="slots">`;for(let t=0;t<8;t++){let n=I[t];n?e+=`<button class="slot" data-id="${n.id}" title="${rn[n.id].name}">${rn[n.id].glyph}<span class="n">${n.n}</span></button>`:e+=`<div class="slot empty"></div>`}e+=`</div><div class="craft">`,an.forEach((t,n)=>{let r=Object.keys(t.need).every(e=>ie(e)>=t.need[e]),i=Object.entries(t.need).map(([e,t])=>`${t}${rn[e].glyph}`).join(`+`);e+=`<button data-rec="${n}" ${r?``:`disabled`}>Craft ${rn[t.out].name} (${i})</button>`}),e+=`</div><button class="close">CLOSE (I)</button></div>`,X.innerHTML=e,X.querySelectorAll(`.slot[data-id]`).forEach(e=>e.addEventListener(`click`,()=>{rn[e.dataset.id].consumable&&z(e.dataset.id)})),X.querySelectorAll(`[data-rec]`).forEach(e=>e.addEventListener(`click`,()=>se(an[+e.dataset.rec]))),X.querySelector(`.close`).addEventListener(`click`,()=>Ge())}function We(){!le||B||(Ie=!0,X&&X.classList.add(`open`),Ue())}function Ge(){Ie=!1,X&&X.classList.remove(`open`)}function Ke(){Ie?Ge():We()}function qe(e){V=e,ge=5+e*2,me=`spawning`}function Q(){T.x=0,T.z=0,T.vx=0,T.vz=0,T.hp=100,T.stamina=100,T.hunger=100,T.thirst=100,T.facing=0,T.iframe=0;for(let e of D)e.alive=!1;ue=0,de=0,fe=0,B=!1,U=!1,ve=null;for(let e of A)e.hp=150,e.alive=!0,e.mesh.scale.set(1,1,1);for(let e of M)e.active=!1,e.mesh.visible=!1;I.length=0;let e=[`food`,`water`,`food`,`water`,`bandage`,`scrap`];for(let t=0;t<6;t++){let n=Math.random()*Math.PI*2,r=1.6+Math.random()*(s-2);F(Math.cos(n)*r,Math.sin(n)*r,e[t])}q&&(q.style.display=`none`),m.position.set(0,i,0),m.visible=!0,qe(1),Ue()}function Je(){Q()}function Ye(e){le=e,n.visible=e;let t=e&&c;Ee&&(Ee.style.display=t?`block`:`none`),J&&(J.style.display=t?`block`:`none`),Y&&(Y.style.display=t?`block`:`none`),Oe&&(Oe.style.display=e?`block`:`none`),Pe&&!e&&(Pe.style.display=`none`),q&&!e&&(q.style.display=`none`),Fe&&(Fe.style.display=e?`block`:`none`),Ge();for(let e in W)W[e]=!1;G.x=G.y=0,U=!1,e&&Q()}let Xe=new v;function Ze(e,t,n){if(!le||Ie)return;let r=n?n.windowGlow:0;if(_e=Math.max(0,_e-e),H=Math.max(0,H-e),w.material.opacity=Math.max(0,w.material.opacity-e*8),S.material.opacity=Math.max(0,S.material.opacity-e*6),!B){fe+=e,T.iframe=Math.max(0,T.iframe-e);let n=(W.d||W.arrowright?1:0)-(W.a||W.arrowleft?1:0)+G.x,r=(W.w||W.arrowup?1:0)-(W.s||W.arrowdown?1:0)+G.y,a=Math.hypot(n,r);a>1&&(n/=a,r/=a);let o=a>.05,c=(W.shift||G.y>.95)&&T.stamina>2&&o,l=Math.cos(ze),u=Math.sin(ze),h=l*n+-u*r,g=-u*n+-l*r,_=c?5.2:3,v=1-Math.exp(-14*e);T.vx+=(h*_-T.vx)*v,T.vz+=(g*_-T.vz)*v,T.x+=T.vx*e,T.z+=T.vz*e;let y=Math.hypot(T.x,T.z);y>s&&(T.x*=s/y,T.z*=s/y,T.vx=0,T.vz=0),o&&(T.facing=Math.atan2(h,g)),T.stamina=p.clamp(T.stamina+(c?-34:22)*e,0,100),T.hunger=Math.max(0,T.hunger-.9*e),T.thirst=Math.max(0,T.thirst-1.15*e),T.hunger<=0||T.thirst<=0?T.hp=Math.max(0,T.hp-3.5*e):T.hunger>55&&T.thirst>55&&T.hp<100&&(T.hp=Math.min(100,T.hp+2*e));for(let e of M)e.active&&(e.x-T.x)**2+(e.z-T.z)**2<.3&&ae(e.kind)&&(e.active=!1,e.mesh.visible=!1,Ue());for(let t of A){if(t.hp>=150)continue;let n=Math.cos(t.ang)*d,r=Math.sin(t.ang)*d;(n-T.x)**2+(r-T.z)**2<f*f&&(t.hp=Math.min(150,t.hp+30*e),t.hp>0&&(t.alive=!0))}T.hp<=0&&Qe(),m.position.set(T.x,i,T.z),m.rotation.y=T.facing,m.visible=!(T.iframe>0&&Math.floor(t*20)%2==0),U&&we(),S.position.set(T.x,i+.06,T.z),S.rotation.z=-T.facing}let a=0;B||me===`spawning`&&(ge>0&&Math.random()<e*(V===1?3.5:6)&&(be(r),ge--),ge<=0&&(me=`fighting`));let o=0,c=1/0;for(let n=0;n<48;n++){let r=D[n];if(!r.alive){Xe.position.set(0,-60,0),Xe.scale.setScalar(0),Xe.updateMatrix(),E.setMatrixAt(n,Xe.matrix);continue}a++;let s=T.x-r.x,l=T.z-r.z,f=Math.hypot(s,l)||1;if(f<c&&(c=f),!B){let t=s/f*r.speed,n=l/f*r.speed,i=1-Math.exp(-6*e);if(r.vx+=(t-r.vx)*i,r.vz+=(n-r.vz)*i,f>.52){let t=r.x+r.vx*e,n=r.z+r.vz*e,i=Math.hypot(r.x,r.z),a=Math.hypot(t,n);if(!r.in&&i>=d&&a<4.9){let r=j(t,n);if(r.alive){let i=Math.atan2(n,t),a=4.9;t=Math.cos(i)*a,n=Math.sin(i)*a,r.hp-=15*e,r.hp<=0&&(r.hp=0,r.alive=!1)}}a<d-.1&&(r.in=!0),r.x=t,r.z=n}else T.iframe<=0&&(o=Math.max(o,r.dmg))}r.flash=Math.max(0,r.flash-e);let p=Math.sin(t*6+r.phase)*.04;Xe.position.set(r.x,i+.3*r.size*u+p,r.z),Xe.rotation.set(0,Math.atan2(r.vx,r.vz),Math.sin(t*3+r.phase)*.12),Xe.scale.setScalar(r.size*u),Xe.updateMatrix(),E.setMatrixAt(n,Xe.matrix),k.set($t[r.type].color),r.flash>0?k.lerp(tn,.7):k.lerp(nn,.35*(1-r.hp/r.maxhp)),E.setColorAt(n,k)}E.instanceMatrix.needsUpdate=!0,E.instanceColor&&(E.instanceColor.needsUpdate=!0);let l=0;for(let e of A){e.alive&&l++;let t=Math.max(0,e.hp/150);e.mesh.scale.y=e.alive?Math.max(.18,t):.12,e.mesh.position.y=i+.35*e.mesh.scale.y,e.mesh.material.color.copy(e.baseColor).lerp(nn,(1-t)*.55)}!B&&o>0&&(T.hp=Math.max(0,T.hp-o*(V===1?.5:1)),T.iframe=.6,T.hp<=0&&Qe()),!B&&me===`fighting`&&a===0&&ge<=0&&(me=`complete`,he=2.2,Re(`WAVE ${V} CLEAR`,2)),!B&&me===`complete`&&(he-=e,he<=0&&(qe(V+1),Re(`WAVE ${V}`,1.4))),Le>0&&(Le-=e,Le<=0&&Pe&&(Pe.style.display=`none`)),ke&&(ke.style.width=`${T.hp}%`),Ae&&(Ae.style.width=`${T.stamina}%`),je&&(je.style.width=`${T.hunger}%`),Me&&(Me.style.width=`${T.thirst}%`),Ne&&(Ne.textContent=`WAVE ${V}   KILLS ${ue}   SCORE ${de}`),typeof window<`u`&&(window.__hoard={active:le,dead:B,paused:Ie,hp:Math.round(T.hp),stamina:Math.round(T.stamina),hunger:Math.round(T.hunger),thirst:Math.round(T.thirst),zombies:a,barriers:l,pickups:M.filter(e=>e.active).length,inv:Object.fromEntries(I.map(e=>[e.id,e.n])),wave:V,kills:ue,score:de,weapon:`gun`,znear:+c.toFixed(2),px:+T.x.toFixed(2),pz:+T.z.toFixed(2)})}function Qe(){B=!0,U=!1,q&&(q.querySelector(`.ds`).innerHTML=`Wave reached: ${V}<br>Kills: ${ue}<br>Score: ${de}<br>Survived: ${fe.toFixed(0)}s`,q.style.display=`flex`)}return{group:n,update:Ze,setActive:Ye,setAzimuth:Be,setAim:Ve,setFiring:He,melee:Te,reset:Q,restart:Je,openBag:We,closeBag:Ge,toggleBag:Ke,addItem:ae,get player(){return T},get dead(){return B},get active(){return le},get paused(){return Ie},get inv(){return I.map(e=>({...e}))},get nearestPickup(){let e=null,t=1e9;for(let n of M){if(!n.active)continue;let r=(n.x-T.x)**2+(n.z-T.z)**2;r<t&&(t=r,e=n)}return e?{x:e.x,z:e.z}:null},setTarget(){}}}var{Timer:sn}=z,cn=new URLSearchParams(window.location.search),ln=cn.get(`demo`)===`1`||cn.has(`capture`);window.__demo=ln;var un=(cn.get(`city`)?Number(cn.get(`city`)):0)||Math.random()*1e9|0,dn=0,fn=Zt({demo:ln,citySeed:un,profileIndex:dn}),{renderer:pn,scene:mn,rig:hn,sunRig:gn,city:_n,landmarkFactory:vn}=fn,yn=on({extent:_n.extent,plinthTop:.3});mn.add(yn.group),window.__hoardApi=yn;var bn=!0;window.__shadows=bn,window.__scene=`hoard`;var xn=new L,Sn=new Set,Cn=6.5;function wn(e){_n.group.traverse(t=>{!t.isMesh||t.userData.ground||!t.visible||(t.getWorldPosition(xn),Math.hypot(xn.x,xn.z)<e&&(t.visible=!1,Sn.add(t)))})}function Tn(){for(let e of Sn)e.visible=!0;Sn.clear()}var En=new oe,Dn=new L,On=new L,kn=new Set;function An(){for(let e of kn)e.material&&(e.material.opacity=1,e.material.transparent=!!e.userData._wasT,e.material.depthWrite=e.userData._wasDW!==!1);kn.clear()}function jn(e){An();let t=hn.camera;for(let[n,r]of[[0,0],[.7,.4],[-.7,.4]]){On.set(e.x+n,.6,e.z+r),Dn.subVectors(On,t.position);let i=Dn.length();En.set(t.position,Dn.normalize()),En.far=i-.4;for(let e of En.intersectObject(_n.group,!0)){let t=e.object;!t.material||t.userData.ground||kn.has(t)||(t.userData._wasT=t.material.transparent,t.userData._wasDW=t.material.depthWrite,t.material.transparent=!0,t.material.opacity=.16,t.material.depthWrite=!1,kn.add(t))}}}function Mn(){yn.setActive(!0),wn(Cn),hn.setMode(H.DIMETRIC),hn.setZoom(2.8,!0),hn.setTarget(yn.player.x,.6,yn.player.z,!0)}var Nn=new oe,Pn=new B,Fn=new c(new L(0,1,0),-.32),In=new L,Ln=window.matchMedia&&window.matchMedia(`(pointer: coarse)`).matches,Rn=!1,zn=0,Bn=0,Vn=.005,Hn=(e,t)=>{Pn.x=e/window.innerWidth*2-1,Pn.y=-(t/window.innerHeight)*2+1};pn.domElement.addEventListener(`contextmenu`,e=>e.preventDefault()),pn.domElement.addEventListener(`mousedown`,e=>{e.button===0&&(Hn(e.clientX,e.clientY),yn.setFiring(!0)),e.button===2&&(Rn=!0,zn=e.clientX,Bn=e.clientY)}),window.addEventListener(`mousemove`,e=>{Hn(e.clientX,e.clientY),Rn&&(hn.orbit(-(e.clientX-zn)*Vn,-(e.clientY-Bn)*Vn),zn=e.clientX,Bn=e.clientY)}),window.addEventListener(`mouseup`,()=>{yn.setFiring(!1),Rn=!1}),pn.domElement.addEventListener(`wheel`,e=>{e.preventDefault(),hn.zoomBy(Math.exp(e.deltaY*.0015))},{passive:!1}),window.addEventListener(`keydown`,e=>{(e.key===`h`||e.key===`H`)&&(bn=!bn,window.__shadows=bn)}),vn.whenReady.then(()=>{_n.generate(un,dn),fn.fitShadowFrustum(),Tn(),wn(Cn),window.__cityReady=!0});var Un=new sn;Un.connect(document);function Wn(){Un.update();let e=Math.min(Un.getDelta(),.1);yn.setAzimuth(hn.azimuth),Ln||(Nn.setFromCamera(Pn,hn.camera),Nn.ray.intersectPlane(Fn,In)&&yn.setAim(In.x,In.z)),yn.update(e,Un.getElapsed(),gn),hn.setTarget(yn.player.x,.6,yn.player.z),hn.update(e),jn(yn.player),fn.updateWorld(e,Un.getElapsed(),{shadowsOn:bn,seasonTarget:0});let t=fn.decideStyle();fn.renderCityPipeline(t,null),requestAnimationFrame(Wn)}Mn(),Wn(),window.addEventListener(`resize`,()=>{fn.resize()});