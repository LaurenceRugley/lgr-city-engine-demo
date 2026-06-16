import{$ as e,A as t,B as n,C as r,D as i,E as a,F as o,G as s,H as c,I as l,J as u,K as d,L as f,M as p,N as m,O as h,P as g,Q as _,R as v,S as y,T as b,U as x,V as S,W as C,X as w,Y as T,Z as E,_ as D,a as O,b as ee,c as k,d as A,et as j,f as te,g as ne,h as M,i as N,j as P,k as F,l as re,m as I,n as ie,nt as L,o as R,p as z,q as ae,r as oe,rt as se,s as B,t as ce,tt as V,u as H,v as le,w as ue,x as de,y as fe,z as pe}from"./three-B1EZZ7Lj.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var me=Math.atan(1/Math.SQRT2),he=Math.atan(.5),ge=Math.PI/4,U={PERSPECTIVE:4,ISOMETRIC:5,DIMETRIC:6},_e=.12,ve=1.45,ye=4,be=40,xe=1.5,Se=16,Ce=6,we=22,Te=3.5,W=11,G=(e,t,n)=>e+(t-e)*(1-Math.exp(-8*n)),Ee=(e,t)=>e+Math.PI*2*Math.round((t-e)/(Math.PI*2));function De({aspect:e,fov:t=48,near:n=.1,far:r=100,target:i=new L(0,.8,0),azimuth:a=ge,elevation:o=.52,distance:s=12,zoom:c=5.5}={}){let l=new S(t,e,n,r),u=new pe(-1,1,1,-1,n,r),d=U.PERSPECTIVE,f=e,m={azimuth:a,elevation:o,distance:s,zoom:c,target:i.clone()},h={azimuth:a,elevation:o,distance:s,zoom:c,target:i.clone()},g=!1,_=()=>d===U.PERSPECTIVE?l:u;function v(e){e!==d&&(d=e,d===U.ISOMETRIC||d===U.DIMETRIC?(m.elevation=d===U.ISOMETRIC?me:he,m.azimuth=Ee(ge,h.azimuth),g=!0):g=!1)}function y(e,t){m.azimuth+=e,g||(m.elevation=p.clamp(m.elevation+t,_e,ve))}function b(e){d===U.PERSPECTIVE?m.distance=p.clamp(m.distance*e,ye,be):m.zoom=p.clamp(m.zoom*e,xe,Se)}function x(e,t){let n=m.azimuth,r=d===U.PERSPECTIVE?m.distance*.04:m.zoom*.08,i=new L(Math.cos(n),0,-Math.sin(n)),a=new L(-Math.sin(n),0,-Math.cos(n));m.target.addScaledVector(i,e*r),m.target.addScaledVector(a,t*r)}function C(e,t){f=e/t,l.aspect=f,l.updateProjectionMatrix()}function w(e){h.azimuth=G(h.azimuth,m.azimuth,e),h.elevation=G(h.elevation,m.elevation,e),h.distance=G(h.distance,m.distance,e),h.zoom=G(h.zoom,m.zoom,e),h.target.x=G(h.target.x,m.target.x,e),h.target.y=G(h.target.y,m.target.y,e),h.target.z=G(h.target.z,m.target.z,e);let t=Math.cos(h.elevation),n=Math.sin(h.elevation),r=Math.cos(h.azimuth),i=Math.sin(h.azimuth),a=_();if(a.position.set(h.target.x+h.distance*t*i,h.target.y+h.distance*n,h.target.z+h.distance*t*r),a.lookAt(h.target),a.isOrthographicCamera){let e=h.zoom,t=e*f;a.left=-t,a.right=t,a.top=e,a.bottom=-e,a.updateProjectionMatrix()}}function T(e,t,n,r=!1){m.target.set(e,t,n),r&&h.target.copy(m.target)}function E(e,t=!1){m.zoom=p.clamp(e,xe,Se),t&&(h.zoom=m.zoom)}return{get camera(){return _()},get mode(){return d},get azimuth(){return h.azimuth},setTarget:T,setZoom:E,get styleT(){return d===U.PERSPECTIVE?p.clamp((h.distance-Ce)/(we-Ce),0,1):p.clamp((h.zoom-Te)/(W-Te),0,1)},setMode:v,orbit:y,zoomBy:b,pan:x,setViewport:C,update:w}}var Oe={value:0},ke=new z(`#ffffff`),Ae={value:0},je={value:0},Me={value:0},Ne=new V,Pe={value:0},Fe={value:0},K=`
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
`;function q(e){e.uniforms.uVector=Oe,e.uniforms.uVecTint={value:ke},e.uniforms.uVecShadow=Ae,e.uniforms.uSnow=je,e.uniforms.uCloud=Me,e.uniforms.uCloudOff={value:Ne},e.uniforms.uFogCharm=Pe}function J(e){return e.replace(`#include <fog_fragment>`,`
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
  `)}function Y(e){return e.replace(`#include <common>`,`#include <common>
varying vec3 vVecN;
varying vec3 vVecP;
varying vec2 vWorldXZ;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
  vVecN = normal;
  vVecP = position;
  vWorldXZ = (modelMatrix * vec4(position, 1.0)).xz;`)}function X(e){return e.replace(`#include <shadowmap_pars_fragment>`,`#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>`)}var Ie=`col *= mix(1.0, getShadowMask(), uVecShadow);`;function Le(e,{color:t,id:n,windowGlow:r,winColors:i=[`#ffb852`,`#8cd9ff`],litFrac:a=.55}={}){let o=[0,1,2].map(e=>new z(i[e]??i[i.length-1]));return e.customProgramCacheKey=()=>`lgr-vec-tower`,e.onBeforeCompile=e=>{q(e),e.uniforms.uWindowGlow=r,e.uniforms.uWinId={value:n},e.uniforms.uVecColor={value:new z(t)},e.uniforms.uWinA={value:o[0]},e.uniforms.uWinB={value:o[1]},e.uniforms.uWinC={value:o[2]},e.uniforms.uWinLit={value:a},e.vertexShader=Y(e.vertexShader),e.fragmentShader=J(X(e.fragmentShader.replace(`#include <common>`,`#include <common>
        uniform float uWindowGlow;
        uniform float uWinId;
        uniform vec3  uVecColor;
        uniform vec3  uWinA; uniform vec3 uWinB; uniform vec3 uWinC;
        uniform float uWinLit;
        ${K}
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
        }`)))},e}function Z(e,{color:t=null,glow:n=null,glowDay:r=0,glowNight:i=1,windowGlow:a=null,season:o=!1}={}){let s=t===null,c=n!==null&&a!==null;return e.customProgramCacheKey=()=>`lgr-vec|`+(s?`d`:`c`)+(c?`g`:``)+(o?`s`:``),e.onBeforeCompile=e=>{q(e),s||(e.uniforms.uVecColor={value:new z(t)}),c&&(e.uniforms.uGlow={value:new z(n)},e.uniforms.uGlowDay={value:r},e.uniforms.uGlowNight={value:i},e.uniforms.uWindowGlow=a),o&&(e.uniforms.uSeason=Fe),e.vertexShader=Y(e.vertexShader);let l=s?`diffuseColor.rgb`:`uVecColor`,u=o?`seasonShift(${l})`:l,d=(s?``:`uniform vec3 uVecColor;
`)+(c?`uniform vec3 uGlow; uniform float uGlowDay; uniform float uGlowNight; uniform float uWindowGlow;
`:``)+(o?`uniform float uSeason;
vec3 seasonShift(vec3 c){
  c = mix(c, vec3(0.86, 0.46, 0.13), smoothstep(0.40, 0.70, uSeason));   // → autumn orange
  c = mix(c, vec3(0.46, 0.33, 0.20), smoothstep(0.75, 1.00, uSeason));   // → bare brown
  return c;
}
`:``),f=c?`uGlow * mix(uGlowDay, uGlowNight, uWindowGlow)`:`vec3(0.0)`,p=J(X(e.fragmentShader.replace(`#include <common>`,`#include <common>
`+d+K).replace(`#include <opaque_fragment>`,`#include <opaque_fragment>
        if (uVector > 0.5) {
          vec3 col = vecShade(${u});
          ${Ie}                            // the sun's shadow darkens the flat tier…
          gl_FragColor = vec4(col + ${f}, diffuseColor.a);  // …but the night glow stays lit
        }`)));c&&(p=p.replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>\n  totalEmissiveRadiance += ${f};`)),e.fragmentShader=p},e}function Re(e){let t=e>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function ze(e){let t=Re(e);return{next:t,range:(e,n)=>e+(n-e)*t(),int:(e,n)=>e+Math.floor(t()*(n-e+1)),pick:e=>e[Math.floor(t()*e.length)],chance:e=>t()<e}}var Be=[{key:`manhattan`,name:`Manhattan`,towers:[`#EDE3C8`,`#D9B98A`,`#B5562F`,`#A8C8E8`,`#2E3F5C`],ground:`#7CC455`,street:`#9AA0A6`,sidewalk:`#C8CCD0`,park:`#5DB347`,water:`#29A8D8`,shopfronts:[`#C04A3A`,`#3A7AC0`,`#C09A2A`],glass:`#7FA8CC`,winColors:[`#ffd27a`,`#9ad6ff`],hMax:4.6,sigma:.36,roofRate:.35,pSplit:.6,nightLit:.55,roofTint:null,coast:{base:.55,out:1,in:.6,jag:1.05},landmarks:[`empireState`,`chrysler`,`liberty`]},{key:`paris`,name:`Paris`,towers:[`#E8DCC0`,`#F2EAD6`,`#E0D2B4`],ground:`#8CC46A`,street:`#A8A29A`,sidewalk:`#D4CEC2`,park:`#6DB35A`,water:`#3FA8C8`,shopfronts:[`#C04A3A`,`#3A6B5A`,`#7A5AC0`],glass:`#5A6B7A`,winColors:[`#ffdca0`,`#ffcaa0`],hMax:1.5,sigma:.9,roofRate:.15,pSplit:.75,nightLit:.45,roofTint:`#6A7886`,coast:{base:1.05,out:.55,in:.3,jag:.5},landmarks:[`eiffel`,`arcDeTriomphe`,`sacreCoeur`]},{key:`neoTokyo`,name:`Neo-Tokyo`,towers:[`#2A3038`,`#3A4250`,`#252B36`,`#4A4456`],ground:`#3A4A42`,street:`#5A6068`,sidewalk:`#7A8088`,park:`#2E5E46`,water:`#0E6878`,shopfronts:[`#E8483A`,`#5AE8E0`,`#E85AA0`],glass:`#5AE8E0`,winColors:[`#5AE8E0`,`#E85AA0`,`#E8E06A`],hMax:5.2,sigma:.42,roofRate:.6,pSplit:.6,nightLit:.7,roofTint:null,coast:{base:.7,out:1.05,in:.62,jag:1.7},landmarks:[`tokyoTower`,`pagoda`,`neonBillboard`]}];Be.map(e=>e.key);var Ve=.3,Q=1.9,He=.55,Ue=2.45,We=.12,Ge=.6,Ke=6,qe={BASE:.7,OUT:.95,IN:.55,JAG:1,SAMPLES_PER_EDGE:28,HARBOR_DEPTH:.55,HARBOR_WIDTH:.26},Je={PLINTH_TOP:Ve,BLOCK:Q,STREET:He,PITCH:Ue,SIDEWALK:We,SHORE:Ge,N:Ke,COAST:qe};function Ye(e,t,n){let r=n?.base??qe.BASE,i=n?.out??qe.OUT,a=n?.in??qe.IN,o=n?.jag??qe.JAG,s=t+r,c=ze((e^789079)>>>0),l=[2,3,5,8,11,13].map(e=>({k:e,amp:1/e*o**((e-2)/6),phase:c.range(0,Math.PI*2)})),u=l.reduce((e,t)=>e+t.amp,0),d=e=>{let t=0;for(let n of l)t+=n.amp*Math.sin(n.k*e*Math.PI*2+n.phase);return Math.max(-1,Math.min(1,t/(u*.6)))},f=[{fix:+s,nx:1,nz:0,sign:1},{fix:+s,nx:0,nz:1,sign:-1},{fix:-s,nx:-1,nz:0,sign:-1},{fix:-s,nx:0,nz:-1,sign:1}],p=t+.22,m=qe.SAMPLES_PER_EDGE,h=4*m,g=[],_=0;for(let e=0;e<4;e++){let t=f[e];for(let n=0;n<m;n++,_++){let o=n/m,c=_/h,l=(-s+2*s*o)*t.sign,u=d(c),f=u>=0?u*i:u*a;if(e===0){let e=Math.abs(o-.5);if(e<qe.HARBOR_WIDTH){let t=.5+.5*Math.cos(e/qe.HARBOR_WIDTH*Math.PI);f-=(r+qe.HARBOR_DEPTH)*t}}let v,y;t.nx===0?(y=t.fix+t.nz*f,v=l,y=t.nz>0?Math.max(y,p):Math.min(y,-p)):(v=t.fix+t.nx*f,y=l,v=t.nx>0?Math.max(v,p):Math.min(v,-p)),g.push(new V(v,y))}}return{points:g,B:s,maxR:s+i,harborX:p}}function Xe(e){(Array.isArray(e)?e:[e]).forEach(e=>e&&e.dispose&&e.dispose())}function Ze({seed:e=1,profileIndex:t=0,landmarkFactory:n=null,windowGlow:i}){let a=new r,s=new r,c=new r;s.raycast=()=>{},c.raycast=()=>{},a.add(s,c);let u=new le(16773594,3);u.position.set(.45,.6,-.65).multiplyScalar(10);let d=new b(7313331,2762272,1);a.add(u,d);let f=0,p=[],m={seed:e,profileIndex:t,profile:Be[t],extent:0,meshCount:0};function h(e,t,n,r){let i=new g(new O(e,.04,t),Z(new l({color:r,roughness:.95,flatShading:!0}),{color:r}));return i.position.y=n,i.userData.ground=!0,i}function v(e,t){for(let e of s.children)e.geometry&&e.geometry.dispose(),Xe(e.material);s.clear();for(let e of c.children)e.traverse(e=>{e.isMesh&&Xe(e.material)});c.clear(),p.length=0,f=0;let r=ze(e),i=Be[t],a=(Ke-1)/2*Ue,o=7.075;m={seed:e,profileIndex:t,profile:i,extent:o+(i.coast?.base??qe.BASE),meshCount:0};let u=Ye(e,o,i.coast);m.coast=u;let d=new E;u.points.forEach((e,t)=>t?d.lineTo(e.x,e.y):d.moveTo(e.x,e.y)),d.closePath();let _=new g(new ee(d,{depth:2,bevelEnabled:!1,steps:1}),Z(new l({color:i.ground,roughness:.9,flatShading:!0,side:2}),{color:i.ground}));_.rotation.x=-Math.PI/2,_.position.y=Ve-2,_.userData.ground=!0,s.add(_);let v=2*7.195;s.add(h(v,v,.32,i.street)),C(u.harborX,i);let b=[];for(let e=0;e<Ke;e++)for(let t=0;t<Ke;t++)b.push([e,t]);let T=new Set,D=Math.max(1,Math.round(b.length*.08));for(;T.size<D;)T.add(r.int(0,b.length-1));let O=r.range(-2.45*.6,Ue*.6),k=r.range(-2.45*.6,Ue*.6),A=Math.hypot(a,a),j=[];if(b.forEach(([e,t],n)=>{let a=(e-(Ke-1)/2)*Ue,o=(t-(Ke-1)/2)*Ue;if(s.add(h(Q,Q,.32999999999999996,i.sidewalk).translateX(a).translateZ(o)),T.has(n)){s.add(h(Q-We*2,Q-We*2,.35,i.park).translateX(a).translateZ(o));let e=r.int(3,5);for(let t=0;t<e;t++)w(a+r.range(-.6,.6),o+r.range(-.6,.6),i,r);return}let c=Q-We*2,l=r.chance(i.pSplit)?2:1,u=r.chance(i.pSplit)?2:1,d=c/l,f=c/u;for(let e=0;e<l;e++)for(let t=0;t<u;t++){let n=a-c/2+d*(e+.5),s=o-c/2+f*(t+.5),l=Math.max(.6,d-.1),u=Math.max(.6,f-.1),p=Math.hypot(n-O,s-k)/A,m=Math.exp(-(p*p)/(2*i.sigma*i.sigma)),h=Math.max(.5,.5+(i.hMax-.5)*m*r.range(.75,1.25));h>i.hMax*.5&&Math.min(l,u)>=.7&&j.push({lx:n,lz:s,fw:l,fd:u,h,r:p}),y(n,s,l,u,h,i,r)}}),n&&n.ready){j.sort((e,t)=>e.r-t.r);let e=[],t=i.landmarks;for(let r=0;r<t.length&&j.length;r++){let a=null;for(let t of j)if(e.every(e=>Math.hypot(e.lx-t.lx,e.lz-t.lz)>Ue*.9)){a=t;break}a||=j[0],e.push(a),x(a.lx,a.lz);let o=i.hMax*n.heightFactor(t[r]),s=n.make(t[r],{x:a.lx,z:a.lz,w:a.fw,d:a.fd,h:o,plinthTop:Ve});if(s){c.add(s);let e=new N().setFromObject(s);S(e.min.x-.15,e.max.x+.15,e.min.z-.15,e.max.z+.15)}}}s.traverse(e=>{e.isMesh&&(e.userData.ground?(e.castShadow=!1,e.receiveShadow=!0):e.material&&e.material.isMeshBasicMaterial?(e.castShadow=!1,e.receiveShadow=!1):(e.castShadow=!0,e.receiveShadow=!0))}),c.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),m.meshCount=s.children.length+c.children.length;let te=0;for(let e of s.children){let t=e.position;te=(Math.imul(te,16777619)^(Math.round(t.x*100)*2654435761^Math.round(t.y*100)*40503^Math.round(t.z*100)*2246822519))>>>0}for(let e of m.coast.points)te=(Math.imul(te,16777619)^(Math.round(e.x*100)*2654435761^Math.round(e.y*100)*40503))>>>0;m.sig=te,window.__city={seed:e,profile:i.key,meshes:m.meshCount,sig:te}}function y(e,t,n,r,a,c,u){let d=Le(new l({flatShading:!0,roughness:.7,metalness:.05}),{color:u.pick(c.towers),id:++f,windowGlow:i,winColors:c.winColors,litFrac:c.nightLit}),m=new g(new O(n,a,r),d);if(m.position.set(e,Ve+a/2,t),m.userData.lot=[e,t],s.add(m),c.roofTint){let i=Z(new l({color:c.roofTint,roughness:.85,flatShading:!0}),{color:c.roofTint}),o=new g(new O(n*1.02,.08,r*1.02),i);o.position.set(e,Ve+a+.04,t),o.userData.lot=[e,t],s.add(o)}if(a<1.4){let i=u.pick(c.shopfronts),a=new g(new O(n*1.04,.18,r*1.04),Z(new l({color:i,roughness:.8,flatShading:!0}),{color:i}));a.position.set(e,.39,t),a.userData.lot=[e,t],s.add(a)}if(a>c.hMax*.45&&u.chance(c.roofRate)){let i=u.chance(.5)?new g(new O(n*.4,.18,r*.4),Z(new l({color:`#9a9a9a`,flatShading:!0}),{color:`#9a9a9a`})):new g(new M(n*.18,n*.18,.22,10),Z(new l({color:`#b9bec4`,flatShading:!0}),{color:`#b9bec4`}));if(i.position.set(e+u.range(-.1,.1),Ve+a+.11,t+u.range(-.1,.1)),i.userData.lot=[e,t],s.add(i),u.chance(.25)){let n=new g(new _(.05,6,5),new o({color:`#ff3b30`,transparent:!0,opacity:1}));n.position.set(e,Ve+a+.26,t),n.userData.lot=[e,t],n.raycast=()=>{},s.add(n),p.push({mesh:n,phase:u.range(0,6.28)})}}}function x(e,t){for(let n=s.children.length-1;n>=0;n--){let r=s.children[n];r.userData.lot&&Math.abs(r.userData.lot[0]-e)<1e-4&&Math.abs(r.userData.lot[1]-t)<1e-4&&(r.geometry&&r.geometry.dispose(),Xe(r.material),s.remove(r))}for(let e=p.length-1;e>=0;e--)p[e].mesh.parent||p.splice(e,1)}function S(e,t,n,r){for(let i=s.children.length-1;i>=0;i--){let a=s.children[i];a.userData.lot&&a.position.x>=e&&a.position.x<=t&&a.position.z>=n&&a.position.z<=r&&(a.geometry&&a.geometry.dispose(),Xe(a.material),s.remove(a))}}function C(e,t){let n=Z(new l({color:`#7a5634`,roughness:.95,flatShading:!0}),{color:`#7a5634`}),r=(e,t,r,i)=>{let a=new g(new O(e,.06,t),n);a.position.set(r,Ve-.16,i),s.add(a)};r(.24,2,e+.02,0),r(1.3,.22,e+.7,-.72),r(1.3,.22,e+.7,.72)}function w(e,t,n,r){let i=new z(n.park),a=(n,a)=>{let o=i.clone().offsetHSL(0,0,r.range(-.06,.06)).getStyle(),c=new g(new _(n,7,6),Z(new l({color:o,flatShading:!0}),{color:o,season:!0}));c.scale.y=.7,c.position.set(e,Ve+a,t),c.userData.lot=null,s.add(c)},o=new g(new O(.05,.18,.05),Z(new l({color:`#6b4a2a`,flatShading:!0}),{color:`#6b4a2a`}));o.position.set(e,.39,t),s.add(o),a(.22,.28),a(.16,.46)}function T(e){for(let t of p)t.mesh.material.opacity=.35+.65*(.5+.5*Math.sin(e*3+t.phase))}return v(e,t),{group:a,key:u,fill:d,update:T,generate:v,get state(){return m},get extent(){return m.extent},get waterColor(){return m.profile.water},profiles:Be}}var Qe=Math.PI*2,$e=.7,et=90,tt=[{name:`night`,sun:`#4a6f9e`,intensity:.35,hemiSky:`#26344f`,hemiGround:`#0c1018`,horizon:`#1e2942`,sky:`#36486e`,exposure:.95,outline:`#101a30`,window:1,toonGain:2.6},{name:`dawn`,sun:`#ff9e54`,intensity:2.4,hemiSky:`#8a7686`,hemiGround:`#2a1f1a`,horizon:`#b8512c`,sky:`#ffb070`,exposure:1.05,outline:`#241826`,window:.3,toonGain:2},{name:`noon`,sun:`#fff4e0`,intensity:4.6,hemiSky:`#9cb8cc`,hemiGround:`#33302a`,horizon:`#5e7689`,sky:`#aacadd`,exposure:1.18,outline:`#0b0a08`,window:0,toonGain:1.7},{name:`dusk`,sun:`#ff6b35`,intensity:2,hemiSky:`#7a566a`,hemiGround:`#281a18`,horizon:`#b0432a`,sky:`#ff8a5a`,exposure:1.05,outline:`#1f1420`,window:.4,toonGain:2}],nt=e=>e-Math.floor(e),rt=(e,t,n)=>e+(t-e)*n,it=(e,t,n)=>e+(t-e)*(1-Math.exp(-6*n));function at({t:e=.5}={}){let t=e,n=e,r=!1,i=!1,a=tt.map(e=>({name:e.name,sun:new z(e.sun),hemiSky:new z(e.hemiSky),hemiGround:new z(e.hemiGround),horizon:new z(e.horizon),sky:new z(e.sky),outline:new z(e.outline),intensity:e.intensity,exposure:e.exposure,window:e.window,toonGain:e.toonGain})),o=new L(0,1,0),s=new z(`#fff4e0`),c=new z(`#6f97b3`),l=new z(`#2a2620`),u=new z(`#3a4a57`),d=new z(`#7da3bd`),f=new z(`#0b0a08`),p=new z(`#000000`),m=3,h=1,g=0,_=1.7,v=new L;function y(e){let t=nt(e)*4,n=Math.floor(t)%4,r=(n+1)%4,i=t-Math.floor(t),y=a[n],b=a[r];s.lerpColors(y.sun,b.sun,i),c.lerpColors(y.hemiSky,b.hemiSky,i),l.lerpColors(y.hemiGround,b.hemiGround,i),u.lerpColors(y.horizon,b.horizon,i),d.lerpColors(y.sky,b.sky,i),f.lerpColors(y.outline,b.outline,i),m=rt(y.intensity,b.intensity,i),h=rt(y.exposure,b.exposure,i),g=rt(y.window,b.window,i),_=rt(y.toonGain,b.toonGain,i),p.setRGB(.045*g,.075*g,.14*g);let x=nt(e)*Qe-Math.PI/2,S=Math.cos(x),C=Math.sin(x);v.set(S,C*Math.cos($e),C*Math.sin($e)),v.y>=0?o.copy(v):o.copy(v).negate()}return y(t),{sunDir:o,sunColor:s,hemiSky:c,hemiGround:l,horizon:u,sky:d,outline:f,toonFloor:p,sunArc:v,get sunIntensity(){return m},get exposure(){return h},get windowGlow(){return g},get toonGain(){return _},get t(){return nt(t)},get auto(){return r},get clock(){let e=Math.round(nt(t)*24*60)%1440;return`${String(Math.floor(e/60)).padStart(2,`0`)}:${String(e%60).padStart(2,`0`)}`},cyclePreset(){n=(Math.floor(t*4+1e-4)+1)/4},nudge(e){n+=e/24},goTo(e){n=e},toggleAuto(){r=!r},setReducedMotion(e){i=e},update(e){r&&!i&&(n+=e/et),t=it(t,n,e),y(t)}}}function ot(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.35,`rgba(255,255,255,0.55)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new k(e);return r.colorSpace=u,r}function st(e,t){let n=[];for(let r=0;r<16;r++){let i=r/16*Math.PI*2;n.push(new L(Math.cos(i)*e,t,Math.sin(i)*e))}return new H(n,!0,`catmullrom`,.5)}function ct(e){let t=(t,n)=>Math.exp(-((e-t)*(e-t))/(2*n*n)),n=Math.max(t(.33,.05),t(.75,.06)),r=p.smoothstep(e,.24,.3)*(1-p.smoothstep(e,.8,.88));return p.clamp(.15+.55*r+.45*n,.12,1)}function lt(){let{PITCH:e,N:t,PLINTH_TOP:n}=Je,r=t+1,i=n+.04,a=n=>(n-t/2)*e,o=t/2,s=[],c=(e,t)=>t*r+e;for(let e=0;e<r;e++)for(let t=0;t<r;t++)s.push({x:a(t),z:a(e),i:t,j:e,edges:[]});let l=[],u=(t,n)=>{let r=(s[t].i===o||s[t].j===o)&&(s[n].i===o||s[n].j===o),i=l.length;l.push({a:t,b:n,len:e,main:r}),s[t].edges.push(i),s[n].edges.push(i)};for(let e=0;e<r;e++)for(let t=0;t<r;t++)t<r-1&&u(c(t,e),c(t+1,e)),e<r-1&&u(c(t,e),c(t,e+1));return{nodes:s,edges:l,y:i,mid:o}}function ut({plinthTop:e=.3,extent:t=4,profile:n=null}={}){let i=new r,c=lt(),{nodes:u,edges:d}=c,f=c.y,m=.34,h=0;{let e=Je.PITCH-m*2;h=Math.max(1,Math.floor((e+.26)/.56))}let g=new o({color:`#e8c84a`,fog:!0}),_=new a(new O(.05,.012,.3),g,d.length*h);_.frustumCulled=!1,_.raycast=()=>{},_.receiveShadow=!1,_.castShadow=!1,i.add(_);{let e=new v,t=0;for(let n of d){let r=u[n.a],i=u[n.b],a=i.x-r.x,o=i.z-r.z,s=Math.hypot(a,o),c=a/s,l=o/s,d=Math.atan2(c,l),p=s-m*2;for(let n=0;n<h;n++){let i=m+(h===1?p/2:p*n/(h-1));e.position.set(r.x+c*i,f,r.z+l*i),e.rotation.set(0,d,0),e.updateMatrix(),_.setMatrixAt(t++,e.matrix)}}_.instanceMatrix.needsUpdate=!0}let y=new a(new O(.34,.26,.74),Z(new l({flatShading:!0,roughness:.5,metalness:.3})),12);y.castShadow=!0,y.receiveShadow=!1,y.frustumCulled=!1,y.raycast=()=>{};let b=new B,x=new Float32Array(72),S=new Float32Array(72),w=new z(`#fff0c0`),T=new z(`#ff3528`);for(let e=0;e<12;e++)w.toArray(S,e*3),T.toArray(S,(12+e)*3),x[e*3+1]=-50,x[(12+e)*3+1]=-50;b.setAttribute(`position`,new R(x,3)),b.setAttribute(`color`,new R(S,3));let E=new s({size:.72,sizeAttenuation:!0,map:ot(),vertexColors:!0,transparent:!0,opacity:0,blending:2,depthWrite:!1}),D=new C(b,E);D.frustumCulled=!1,D.raycast=()=>{},i.add(y,D);let ee=[`#f4c430`,`#c0392b`,`#d8dde2`,`#9aa7b4`,`#6b7785`,`#5a7d9a`],k=Re(2403557),A=d.map((e,t)=>t).filter(e=>d[e].main),j=[];for(let e=0;e<12;e++){let t=e<4&&A.length?A[k()*A.length|0]:k()*d.length|0,n=e===1;j.push({edge:t,fwd:k()<.5,s:k()*d[t].len,speed:n?.5:.78+e%3*.1,lenZ:n?1.45:1,color:ee[n?1:e===0?0:2+e%4],rng:Re(12648430+e*2654435761)})}let te=new z;j.forEach((e,t)=>y.setColorAt(t,te.set(e.color)));function ne(e,t,n){let r=u[e],i=r.edges.filter(e=>e!==t);if(i.length===0)return t;let a=d[t],o=a.a===e?a.b:a.a,s=r.x-u[o].x,c=r.z-u[o].z,l=Math.hypot(s,c)||1,f=i[0],p=-2;for(let t of i){let n=d[t],i=n.a===e?n.b:n.a,a=u[i].x-r.x,o=u[i].z-r.z,m=Math.hypot(a,o)||1,h=s/l*(a/m)+c/l*(o/m);h>p&&(p=h,f=t)}return n()<.65?f:i[n()*i.length|0]}let M=ne,N=new v,P=(e,t)=>{N.position.set(0,-50,0),N.scale.setScalar(0),N.updateMatrix(),e.setMatrixAt(t,N.matrix)},F=.085,I=Je.PLINTH_TOP+.02+.13,ie=new a(new re(.04,.1,3,6),Z(new l({flatShading:!0,roughness:.8})),14);ie.castShadow=!0,ie.receiveShadow=!1,ie.frustumCulled=!1,ie.raycast=()=>{};let ae=st(t-.72,e),oe=[];for(let e=0;e<14;e++)oe.push({phase:e/14,speed:.12+e%4*.02,dir:e%2?1:-1});let se=new L,ce=new L,V=new z;oe.forEach((e,t)=>ie.setColorAt(t,V.set([`#caa`,`#9ab`,`#bba`,`#ab9`][t%4]))),i.add(ie);let H={manhattan:`#e8c84a`,paris:`#dcd2bc`,neoTokyo:`#5ae8e0`};function le(e){e&&g.color.set(H[e.key]||`#e8c84a`)}le(n);function ue(t,n,r){let i=r?r.t:.5,a=r?r.windowGlow:0,o=Math.max(2,Math.round(ct(i)*12)),s=a>.05;for(let e=0;e<12;e++){if(e>=o){P(y,e),x[e*3+1]=-50,x[(12+e)*3+1]=-50;continue}let n=j[e];n.s+=t*n.speed;let r=0;for(;n.s>=d[n.edge].len&&r++<4;){n.s-=d[n.edge].len;let e=n.fwd?d[n.edge].b:d[n.edge].a,t=M(e,n.edge,n.rng);n.edge=t,n.fwd=d[t].a===e}let i=d[n.edge],a=n.fwd?u[i.a]:u[i.b],c=n.fwd?u[i.b]:u[i.a],l=c.x-a.x,f=c.z-a.z,p=Math.hypot(l,f)||1,m=l/p,h=f/p,g=-h,_=m,v=a.x+m*n.s+g*F,b=a.z+h*n.s+_*F,S=Math.atan2(m,h);N.position.set(v,I,b),N.rotation.set(0,S,0),N.scale.set(1,1,n.lenZ),N.updateMatrix(),y.setMatrixAt(e,N.matrix);let C=.74*n.lenZ*.5,w=I+.06,T=e*3,E=(12+e)*3;s?(x[T]=v+m*(C+.04),x[T+1]=w,x[T+2]=b+h*(C+.04),x[E]=v-m*(C+.02),x[E+1]=w,x[E+2]=b-h*(C+.02)):(x[T+1]=-50,x[E+1]=-50)}y.instanceMatrix.needsUpdate=!0,b.attributes.position.needsUpdate=!0,E.opacity=p.clamp(a*1.8,0,1);let c=Math.max(2,Math.round(ct(i)*14));for(let t=0;t<14;t++){if(t>=c){P(ie,t);continue}let r=oe[t],i=(r.phase+r.dir*r.speed*n*.02+1e3)%1;ae.getPointAt(i,se),ae.getTangentAt(i,ce);let a=Math.sin(n*6+r.phase*30)*.015;N.position.set(se.x,e+.09+a,se.z),N.rotation.set(0,Math.atan2(ce.x*r.dir,ce.z*r.dir),Math.sin(n*6+r.phase*30)*.06),N.scale.setScalar(1),N.updateMatrix(),ie.setMatrixAt(t,N.matrix)}ie.instanceMatrix.needsUpdate=!0}return{group:i,update:ue,setProfile:le,graph:c,setRouter(e){M=e||ne}}}function dt({frames:e=4,fps:t=8}={}){function n(t){let n=t.clone();return n.needsUpdate=!0,n.repeat.set(1/e,1),n.offset.set(0,0),n}function r(n,r,i=0){let a=(Math.floor(r*t+i)%e+e)%e;return n.offset.x=a/e,a}return{frames:e,fps:t,makeInstanceTexture:n,step:r}}function ft(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.4,`rgba(255,255,255,0.5)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new k(e);return r.colorSpace=u,r}function pt(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64*.62,0,64/2,64*.62,64*.5);n.addColorStop(0,`rgba(240,250,255,0.95)`),n.addColorStop(1,`rgba(240,250,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new k(e);return r.colorSpace=u,r}function mt(){let e=document.createElement(`canvas`);e.width=256,e.height=64;let t=e.getContext(`2d`);t.strokeStyle=`#ffffff`,t.lineWidth=6,t.lineCap=`round`,t.lineJoin=`round`;let n=[14,24,36,24];for(let e=0;e<4;e++){let r=e*64,i=n[e];t.beginPath(),t.moveTo(r+8,40),t.quadraticCurveTo(r+24,i,r+32,36),t.quadraticCurveTo(r+40,i,r+56,40),t.stroke()}let r=new k(e);return r.colorSpace=u,r}function ht(e,t,n=18){let r=[];for(let i=0;i<n;i++){let a=i/n*Math.PI*2;r.push(new L(Math.cos(a)*e,t,Math.sin(a)*e))}return new H(r,!0,`catmullrom`,.5)}function gt(e,t,n){let r=e-t,i=[],a=(e,t)=>i.push(new L(e,n,t)),o=(e,n,r,i,o=4)=>{for(let s=1;s<=o;s++){let c=r+(i-r)*(s/o);a(e+Math.cos(c)*t,n+Math.sin(c)*t)}};for(let t=0;t<4;t++)a(e,-r+2*r*t/4);o(r,r,0,Math.PI/2);for(let t=0;t<4;t++)a(r-2*r*t/4,e);o(-r,r,Math.PI/2,Math.PI);for(let t=0;t<4;t++)a(-e,r-2*r*t/4);o(-r,-r,Math.PI,1.5*Math.PI);for(let t=0;t<4;t++)a(-r+2*r*t/4,-e);return o(r,-r,1.5*Math.PI,2*Math.PI),new H(i,!0,`catmullrom`,.5)}function _t({extent:t=8,waterSize:n=28,plinthTop:i=.3}={}){let a=new r;a.raycast=()=>{};let o=.06,c=(e,t,r)=>r.set(e/n+.5,-t/n+.5,0),u=[gt(9.5,3,o),ht(12.7,o),new H([new L(8.4,o,0),new L(11,o,-3.6),new L(13,o,0),new L(11,o,3.6)],!0,`catmullrom`,.5)],d=u.map(e=>e.getLength());function f({scale:e=1,hull:t=`#6b7785`,cabin:n=`#e7ecf2`}){let i=new r,a=new g(new O(.46*e,.2*e,1.1*e),Z(new l({color:t,roughness:.6,metalness:.2,flatShading:!0}),{color:t}));a.position.y=.02;let o=new g(new O(.3*e,.22*e,.42*e),Z(new l({color:n,roughness:.7,flatShading:!0}),{color:n}));return o.position.set(0,.18*e,.08*e),i.add(a,o),i.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!1),e.raycast=()=>{}}),i.userData.halfLen=.55*e,i}let m=[{laneIndex:0,dir:1,speed:.5,wake:.024,scale:1,hull:`#5a6675`,cabin:`#e7ecf2`},{laneIndex:1,dir:-1,speed:.42,wake:.022,scale:1,hull:`#7a5b46`,cabin:`#d9c3a6`},{laneIndex:0,dir:1,speed:.56,wake:.024,scale:.9,hull:`#456079`,cabin:`#cfe0ee`},{laneIndex:2,dir:1,speed:.34,wake:.03,scale:1.35,hull:`#39505f`,cabin:`#e2b85a`}];m.forEach((e,t)=>{e.mesh=f(e),e.u=t*.27%1,e.phase=t*1.7,e.isFerry=e.laneIndex===2,a.add(e.mesh)});let h=m.length,v=h*2,y=new B,b=new Float32Array(v*3).fill(-50),x=new Float32Array(v*3),S=new z(`#fff0c0`),w=new z(`#ff3528`);for(let e=0;e<h;e++)S.toArray(x,e*3),w.toArray(x,(h+e)*3);y.setAttribute(`position`,new R(b,3)),y.setAttribute(`color`,new R(x,3));let T=new C(y,new s({size:.6,sizeAttenuation:!0,map:ft(),vertexColors:!0,transparent:!0,opacity:0,blending:2,depthWrite:!1}));T.frustumCulled=!1,T.raycast=()=>{},a.add(T);function E(e,t){let n=new g(new _(e,9,7),Z(new l({color:t,roughness:.5,flatShading:!0}),{color:t}));return n.scale.set(.55,.5,1),n.castShadow=!1,n.receiveShadow=!1,n.raycast=()=>{},n.position.y=-5,n}let D=[{x:-9.5,z:6,size:.18,color:`#5b6f86`,period:11,arcH:.55,span:1.1,whale:!1},{x:7.5,z:-9.5,size:.16,color:`#4a6076`,period:14,arcH:.5,span:1,whale:!1},{x:-7,z:-8.5,size:.2,color:`#607089`,period:9,arcH:.6,span:1.2,whale:!1},{x:10.5,z:7,size:.62,color:`#3a4350`,period:38,arcH:.9,span:2.6,whale:!0}];D.forEach((t,n)=>{t.mesh=E(t.size,t.color),t.heading=Math.atan2(-t.x,-t.z),t.t=n/D.length*t.period,t.splashed=!1,a.add(t.mesh),t.whale&&(t.spout=new e(new j({map:pt(),transparent:!0,opacity:0,depthWrite:!1,fog:!0})),t.spout.scale.set(.6,1.1,1),t.spout.position.set(t.x,-5,t.z),a.add(t.spout))});let ee=mt(),k=dt({frames:4,fps:7}),A=[`#ffffff`,`#cfd4da`,`#c8a06a`],te=[];for(let t=0;t<4;t++){let n=new e(new j({map:k.makeInstanceTexture(ee),color:new z(A[t%A.length]),transparent:!0,opacity:0,depthWrite:!1,fog:!0}));n.scale.setScalar(.5),te.push({sp:n,r:8.6+t*.5,y:1.1+t%2*.5,speed:(.18+t*.03)*(t%2?-1:1),phase:t*1.9}),a.add(n)}typeof window<`u`&&(window.__gullAnim={frames:k.frames,variants:A.length,fps:k.fps});let ne=D.length,M=Array.from({length:h+ne},()=>new L),N=e=>e.laneIndex,P=new L,F=new L,re=new L;function I(e,t,n){let r=n?n.windowGlow:0,i=1-r;for(let n=0;n<h;n++){let i=m[n],a=u[i.laneIndex],s=d[i.laneIndex],l=i.isFerry?.45+.55*Math.min(1,Math.abs((i.u+.5)%1-.5)*3):1,f=i.u;i.u=(i.u+i.dir*e*i.speed*l/s+1)%1,(i.dir>0?i.u<f:i.u>f)&&(i.laneIndex=N(i)),a.getPointAt(i.u,P),a.getTangentAt(i.u,F);let p=F.x*i.dir,g=F.z*i.dir,_=Math.atan2(p,g),v=Math.sin(t*1.1+i.phase)*.025;i.mesh.position.set(P.x,o+v,P.z),i.mesh.rotation.set(Math.sin(t*.9+i.phase)*.04,_,0);let y=i.mesh.userData.halfLen;c(P.x-p*y,P.z-g*y,re),M[n].set(re.x,re.y,i.wake);let x=n*3,S=(h+n)*3;if(r>.05){let e=.18;b[x]=P.x+p*(y+.05),b[x+1]=e,b[x+2]=P.z+g*(y+.05),b[S]=P.x-p*(y+.02),b[S+1]=e,b[S+2]=P.z-g*(y+.02)}else b[x+1]=-50,b[S+1]=-50}ie(),T.material.opacity=p.clamp(r*1.8,0,1);for(let t=0;t<ne;t++){let n=D[t];n.t+=e;let r=h+t,i=n.whale?3.2:1.3;if(n.t>=n.period){let e=(n.t-n.period)/i;if(e>=1){n.t=0,n.splashed=!1,n.mesh.position.y=-5,n.spout&&(n.spout.material.opacity=0),M[r].set(0,0,0);continue}let t=Math.sin(Math.PI*e),a=(e-.5)*n.span,s=n.x+Math.sin(n.heading)*a,l=n.z+Math.cos(n.heading)*a;n.mesh.position.set(s,o-.1+t*n.arcH,l),n.mesh.rotation.set(Math.cos(Math.PI*e)*.9,n.heading,0);let u=e<.16||e>.84;if(c(s,l,re),M[r].set(re.x,re.y,u?n.whale?.07:.05:0),n.spout){let t=p.clamp((e-.15)*3,0,1)*(1-e);n.spout.position.set(s,.56+t*.6,l),n.spout.material.opacity=t*.9}}else n.mesh.position.y=-5,M[r].set(0,0,0),n.spout&&(n.spout.material.opacity=0)}for(let e=0;e<4;e++){let n=te[e],r=n.phase+t*n.speed*.25;n.sp.position.set(Math.cos(r)*n.r,n.y+Math.sin(t*1.4+n.phase)*.12,Math.sin(r)*n.r),n.sp.material.opacity=p.clamp(i*.9-.05,0,.85);let a=k.step(n.sp.material.map,t,n.phase);e===0&&typeof window<`u`&&(window.__gullFrame=a)}if(typeof window<`u`){let e=0;for(let t of D)t.mesh.position.y>o&&e++;window.__waterLife={boats:h,breaching:e,gulls:+te[0].sp.material.opacity.toFixed(2),lights:+T.material.opacity.toFixed(2)}}}function ie(){y.attributes.position.needsUpdate=!0}function ae(){return M.length}return{group:a,update:I,wakeDrops:M,get wakeCount(){return ae()},lanes:u,setRouter(e){N=e||(e=>e.laneIndex)}}}var vt=[`empireState`,`chrysler`,`liberty`,`eiffel`,`arcDeTriomphe`,`sacreCoeur`,`tokyoTower`,`pagoda`,`neonBillboard`],yt={empireState:1.25,chrysler:1.1,liberty:.55,eiffel:3.2,arcDeTriomphe:1.5,sacreCoeur:1.75,tokyoTower:1.35,pagoda:.5,neonBillboard:.9};function bt(e){let t=()=>new l({flatShading:!0,roughness:.7,metalness:.1}),n=(n,r={})=>r.windows?Le(t(),{color:n,id:e.id(),windowGlow:e.windowGlow,winColors:e.winColors,litFrac:e.litFrac}):Z(t(),{color:n,glow:r.glow??null,glowDay:r.glowDay??0,glowNight:r.glowNight??1,windowGlow:r.glow?e.windowGlow:null});return{box:(e,t,r,i,a={})=>new g(new O(e,t,r),n(i,a)),cyl:(e,t,r,i,a={})=>new g(new M(e,t,r,a.seg||12),n(i,a)),cone:(e,t,r,i={})=>new g(new I(e,t,i.seg||8),n(r,i)),sphere:(e,t,r={})=>new g(new _(e,r.seg||12,r.seg2||8),n(t,r)),lathe:(e,t,r={})=>new g(new i(e.map(e=>new V(e[0],e[1])),r.seg||4),n(t,r))}}var $=(e,t,n,r)=>(e.position.set(t,n,r),e),xt=[`#7FB0E0`,`#E07FB0`,`#7FE0A0`,`#E0C97F`,`#9FE07F`,`#7FE0E0`,`#FF8C42`,`#E0E07F`,`#C97FE0`,`#E07F7F`,`#7F9FE0`,`#E0483A`],St={empireState(e,t){let n=`#E8E0CF`;e.add($(t.box(.42,.18,.42,n,{windows:!0}),0,.09,0)),e.add($(t.box(.34,.16,.34,n,{windows:!0}),0,.26,0)),e.add($(t.box(.26,.14,.26,n,{windows:!0}),0,.41,0)),e.add($(t.box(.19,.34,.19,n,{windows:!0}),0,.65,0)),e.add($(t.box(.13,.06,.13,n,{windows:!0}),0,.85,0));let r=xt[new Date().getMonth()];e.add($(t.cyl(.03,.045,.12,n,{seg:10,glow:r,glowNight:1.85}),0,.94,0)),e.add($(t.cone(.012,.07,n,{seg:8}),0,1.04,0))},chrysler(e,t){let n=`#C9CED4`;e.add($(t.box(.22,.55,.22,`#9AA7B4`,{windows:!0}),0,.275,0));let r=.55;for(let i=0;i<5;i++){let a=.14-i*.024,o=.07;e.add($(t.cyl(a*.7,a,o,n,{seg:8,glow:`#dfeaff`,glowNight:.5}),0,r+o/2,0)),r+=o}e.add($(t.cone(.018,.16,n,{seg:8}),0,r+.08,0))},liberty(e,t){let n=`#B9B4A6`,r=`#4FA890`;e.add($(t.box(.42,.16,.42,n),0,.08,0)),e.add($(t.box(.3,.2,.3,n),0,.26,0)),e.add($(t.cyl(.1,.15,.42,r,{seg:10}),0,.57,0)),e.add($(t.box(.11,.1,.11,r),0,.83,0));for(let n=0;n<7;n++){let i=(n/6-.5)*Math.PI*1.1;e.add($(t.cone(.012,.1,r,{seg:5}),Math.sin(i)*.1,.92,Math.cos(i)*.06-.02))}let i=$(t.cyl(.025,.03,.34,r,{seg:8}),.14,.98,0);i.rotation.z=.35,e.add(i),e.add($(t.box(.06,.06,.06,r,{glow:`#ffd060`,glowDay:.6,glowNight:1.2}),.2,1.16,0)),e.add($(t.cone(.04,.09,`#ffcf66`,{seg:6,glow:`#ffd060`,glowDay:.7,glowNight:1.3}),.2,1.24,0))},eiffel(e,t){let n=`#6E5C4C`,r=[[.2,0],[.13,.16],[.085,.33],[.055,.5],[.035,.66],[.02,.85],[0,.92]];e.add(t.lathe(r,n,{seg:4}));let i=t.lathe(r,n,{seg:4});i.rotation.y=Math.PI/4,e.add(i),e.add($(t.box(.26,.025,.26,n),0,.33,0)),e.add($(t.box(.14,.02,.14,n),0,.66,0)),e.add($(t.cone(.01,.1,n,{seg:6}),0,.97,0))},arcDeTriomphe(e,t){let r=`#D9D0C1`,i=.58,a=.5,o=.34,s=new E;s.moveTo(-.58/2,0),s.lineTo(i/2,0),s.lineTo(i/2,a),s.lineTo(-.58/2,a),s.lineTo(-.58/2,0);let c=new n,u=.15,d=.22;c.moveTo(-.15,0),c.lineTo(-.15,d),c.absarc(0,d,u,Math.PI,0,!0),c.lineTo(u,0),c.lineTo(-.15,0),s.holes.push(c);let f=new ee(s,{depth:o,bevelEnabled:!1});f.translate(0,0,-.34/2),f.computeVertexNormals(),e.add(new g(f,Z(new l({color:r,flatShading:!0}),{color:r}))),e.add($(t.box(i*1.06,.08,o*1.06,r),0,.54,0))},sacreCoeur(e,t){let n=`#F1EEE6`;e.add($(t.box(.5,.26,.4,n),0,.13,0));let r=(r,i,a,o)=>{e.add($(t.cyl(a*.9,a,i,n,{seg:12}),r,o,0));let s=$(t.sphere(a,n,{seg:12}),r,o+i/2,0);s.scale.y=1.5,e.add(s)};r(0,.22,.15,.4),r(-.2,.1,.07,.33),r(.2,.1,.07,.33)},tokyoTower(e,t){let n=`#F25822`,r=`#EDEDED`,i=0;for(let a=0;a<9;a++){let o=a/9,s=(a+1)/9,c=.19*(1-o)+.03*o,l=.19*(1-s)+.03*s,u=.085,d=a%2?r:n;e.add($(t.cyl(l,c,u,d,{seg:4,glow:n,glowDay:0,glowNight:.7}),0,i+u/2,0)),i+=u}e.add($(t.box(.22,.02,.22,n,{glow:n,glowNight:.7}),0,.28,0)),e.add($(t.box(.12,.02,.12,r),0,.5,0)),e.add($(t.cone(.012,.16,r,{seg:6,glow:`#ff6a2a`,glowNight:.9}),0,i+.08,0))},pagoda(e,t){let n=0;for(let r=0;r<5;r++){let i=.42-r*.06,a=.11;e.add($(t.box(i,a,i,`#B23A2C`,{windows:r<4}),0,n+a/2,0)),e.add($(t.box(i*1.34,.03,i*1.34,`#7A3B2A`),0,n+a+.015,0)),n+=.16999999999999998}e.add($(t.cyl(.012,.012,.1,`#E0C040`,{seg:6}),0,n+.05,0)),e.add($(t.sphere(.03,`#E0C040`,{seg:8,glow:`#ffe680`,glowNight:.8}),0,n+.12,0))},neonBillboard(e,t){let n=`#20242C`;e.add($(t.box(.3,1,.3,n,{windows:!0}),0,.5,0));let r=[`#5AE8E0`,`#E85AA0`,`#E8E06A`],i=(n,r,i,a,o,s,c)=>{let l=$(t.box(n,r,.02,i,{glow:i,glowDay:.6,glowNight:1.1}),a,o,s);l.rotation.y=c,e.add(l)};i(.22,.34,r[0],0,.75,.16,0),i(.16,.5,r[1],.16,.5,0,Math.PI/2),i(.2,.22,r[2],0,.34,-.16,0),e.add($(t.cone(.01,.14,n,{seg:6,glow:`#E85AA0`,glowDay:.4,glowNight:1}),0,1.08,0))}};function Ct(e,t){let n=new r;return St[e](n,bt(t)),n}var wt=``+new URL(`building-skyscraper-d-CapD2Zqe.glb`,import.meta.url).href,Tt=``+new URL(`building-n-hdv8kKtN.glb`,import.meta.url).href,Et=``+new URL(`building-g-CsTB1qH9.glb`,import.meta.url).href,Dt=``+new URL(`colormap-CK8fW2HB.png`,import.meta.url).href,Ot={skyscraper:{url:wt,color:`#9cc1dd`,fill:.92},midrise:{url:Tt,color:`#c9a07a`,fill:.96},setback:{url:Et,color:`#d9c7a0`,fill:.9}};function kt({windowGlow:e}){let t=new P;t.setURLModifier(e=>e.includes(`colormap.png`)?Dt:e);let n=new ce(t),r={},i=!1,a=Promise.all(Object.entries(Ot).map(async([e,t])=>{r[e]=(await n.loadAsync(t.url)).scene})).then(()=>{i=!0,window.__landmarksReady=!0}).catch(e=>console.error(`landmark models failed:`,e)),o=9e3;function s(t,n,i={}){let a,s;if(vt.includes(t))a=Ct(t,{windowGlow:e,winColors:i.winColors,litFrac:i.litFrac,id:()=>++o}),s=1;else{let e=r[t],n=Ot[t];if(!e||!n)return null;a=e.clone(!0),s=n.fill}a.updateMatrixWorld(!0);let c=new N().setFromObject(a).getSize(new L);a.scale.setScalar(n.h*s/c.y),a.updateMatrixWorld(!0);let l=new N().setFromObject(a),u=l.getCenter(new L);return a.position.x+=n.x-u.x,a.position.z+=n.z-u.z,a.position.y+=n.plinthTop-l.min.y,vt.includes(t)?a.traverse(e=>{e.isMesh&&(e.castShadow=!1,e.raycast=()=>{})}):a.traverse(n=>{if(!n.isMesh)return;n.castShadow=!1,n.raycast=()=>{};let r=n=>Le(n.clone(),{color:Ot[t].color,id:++o,windowGlow:e,winColors:i.winColors,litFrac:i.litFrac});n.material=Array.isArray(n.material)?n.material.map(r):r(n.material)}),a}return{make:s,whenReady:a,heightFactor:e=>yt[e]??1,get ready(){return i}}}var At=[`clear`,`rain`,`snow`,`fog`];function jt({extent:e=7}={}){let t=new r;t.raycast=()=>{};let n=e+2,i=.25,s=(e,t)=>e+Math.random()*(t-e),c=new a(new x(.015,.5),new o({color:`#a9bdd6`,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),600);c.frustumCulled=!1,c.raycast=()=>{};let l=new Float32Array(600*3),u=new Float32Array(600);for(let e=0;e<600;e++)l[e*3]=s(-n,n),l[e*3+1]=s(i,11),l[e*3+2]=s(-n,n),u[e]=s(9,14);let d=new a(new x(.07,.07),new o({color:`#f3f7ff`,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),700);d.frustumCulled=!1,d.raycast=()=>{};let f=new Float32Array(700*3),p=new Float32Array(700),m=new Float32Array(700);for(let e=0;e<700;e++)f[e*3]=s(-n,n),f[e*3+1]=s(i,11),f[e*3+2]=s(-n,n),p[e]=s(0,6.28),m[e]=s(.6,1.2);t.add(c,d);let h=Array.from({length:8},()=>new L),g=0,_=`clear`,y=0,b=0,S=0,C=0,w=0,T=new v,E=(e,t,n,r)=>e+(t-e)*Math.min(1,n*r);function D(e){At.includes(e)&&(_=e)}function O(){_=At[(At.indexOf(_)+1)%At.length]}function ee(e,t){let r=_===`rain`,a=_===`snow`,o=_===`fog`,v=_!==`clear`;y=E(y,+!!v,e,1.4),b=E(b,+!!v,e,1.2),S=E(S,+!!o,e,.9),w=E(w,v&&!o?1:0,e,1),C=E(C,+!!a,e,a?.22:.5);let x=r?y:0,D=Math.round(600*x);for(let t=0;t<600;t++){if(t>=D){T.position.set(0,-50,0),T.scale.setScalar(0),T.updateMatrix(),c.setMatrixAt(t,T.matrix);continue}l[t*3+1]-=u[t]*e,l[t*3]+=e*1.1,l[t*3+1]<i&&(l[t*3]=s(-n,n),l[t*3+1]=11,l[t*3+2]=s(-n,n)),T.position.set(l[t*3],l[t*3+1],l[t*3+2]),T.rotation.set(0,0,0),T.scale.set(1,1,1),T.updateMatrix(),c.setMatrixAt(t,T.matrix)}c.instanceMatrix.needsUpdate=!0,c.material.opacity=.55*x,g=r?Math.round(8*y):0;for(let e=0;e<g;e++)h[e].set(Math.random(),Math.random(),.05*y);let O=Math.round(700*(a?y:0));for(let r=0;r<700;r++){if(r>=O){T.position.set(0,-50,0),T.scale.setScalar(0),T.updateMatrix(),d.setMatrixAt(r,T.matrix);continue}f[r*3+1]-=m[r]*e;let a=Math.sin(t*1.5+p[r])*.5;f[r*3+1]<i&&(f[r*3]=s(-n,n),f[r*3+1]=11,f[r*3+2]=s(-n,n)),T.position.set(f[r*3]+a,f[r*3+1],f[r*3+2]),T.rotation.set(0,0,0),T.scale.setScalar(1),T.updateMatrix(),d.setMatrixAt(r,T.matrix)}d.instanceMatrix.needsUpdate=!0,d.material.opacity=.9*(a?y:0)}return{group:t,update:ee,cycle:O,setKind:D,rainDrops:h,get kind(){return _},get intensity(){return y},get overcast(){return b},get fog(){return S},get snow(){return C},get cloud(){return w},get rainDropCount(){return g},poolCounts:{rain:600,snow:700}}}function Mt(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=(e,n,r)=>{let i=t.createRadialGradient(e,n,0,e,n,r);i.addColorStop(0,`rgba(255,255,255,0.95)`),i.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=i,t.beginPath(),t.arc(e,n,r,0,7),t.fill()};n(128*.42,128*.56,128*.26),n(128*.6,128*.5,128*.3),n(128*.5,128*.46,128*.22),n(128*.34,128*.54,128*.18),n(128*.7,128*.58,128*.18);let r=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5],i=t.getImageData(0,0,128,128),a=i.data;for(let e=0;e<128;e++)for(let t=0;t<128;t++){let n=(e*128+t)*4,i=a[n+3]/255,o=(r[e%4*4+t%4]+.5)/16-.5;a[n+3]=Math.max(0,Math.min(1,Math.floor(i*5+.5+o)/5))*255}t.putImageData(i,0,0);let o=new k(e);return o.colorSpace=u,o}function Nt({extent:t=8,count:n=16}={}){let i=new r;i.raycast=()=>{};let a=Mt(),o=t+6,s=(e,t)=>e+Math.random()*(t-e),c=[];for(let t=0;t<n;t++){let t=new j({map:a,transparent:!0,depthWrite:!1,opacity:0,fog:!0}),n=new e(t),r={sp:n,mat:t,wisp:Math.random(),x:s(-o,o),z:s(-o,o),hiY:s(4,6.8),loY:s(.6,2.2),w:s(3,5.6),h:s(1.7,3),speed:s(.25,.7),op:s(.6,1)};n.raycast=()=>{},c.push(r),i.add(n)}let l=new z,u=new z(`#ffffff`),d=new z(`#5b626e`);function f(e,t,n,r){let i=r?r.cloud:0,a=r?r.fog:0,f=Math.min(1,.4+.6*i+.5*a);l.copy(n.sky).lerp(u,.62),l.lerp(d,.6*i);for(let n=0;n<c.length;n++){let r=c[n],u=n/c.length<f;r.x+=r.speed*e*(.6+.8*i),r.x>o&&(r.x=-o,r.z=s(-o,o));let d=Math.min(Pt(r.x,-o,-o+3),1-Pt(r.x,o-3,o)),p=r.hiY*(1-a)+r.loY*a,m=1-.5*r.wisp,h=.72*Math.max(0,1-a-i)+1*i+.42*a,g=u?Math.max(0,h)*r.op*m*d:0;r.mat.opacity+=(g-r.mat.opacity)*Math.min(1,e*2.5),r.mat.color.copy(l);let _=r.w*(1+.6*a)*(1+.4*r.wisp),v=r.h*(1-.35*a);r.sp.scale.set(_,v,1),r.sp.position.set(r.x,p+Math.sin(t*.3+n)*.15,r.z)}}function p(e){a=e;for(let t of c)t.mat.map=e,t.mat.needsUpdate=!0}return{group:i,update:f,setTexture:p,get count(){return c.length}}}function Pt(e,t,n){let r=Math.max(0,Math.min(1,(e-t)/(n-t)));return r*r*(3-2*r)}function Ft(e,t){let n=document.createElement(`canvas`);n.width=n.height=128;let r=n.getContext(`2d`),i=r.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);i.addColorStop(0,e),i.addColorStop(.62,e),i.addColorStop(.82,t),i.addColorStop(1,`rgba(255,255,255,0)`),r.fillStyle=i,r.beginPath(),r.arc(128/2,128/2,128/2,0,Math.PI*2),r.fill();let a=new k(n);return a.colorSpace=u,a}function It(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);n.addColorStop(0,`#eef2ff`),n.addColorStop(.7,`#d6def2`),n.addColorStop(.85,`#b9c4dd`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,128/2,0,Math.PI*2),t.fill(),t.globalAlpha=.18,t.fillStyle=`#8b97b4`;for(let[e,n,r]of[[52,48,11],[78,64,8],[60,82,6],[44,70,5]])t.beginPath(),t.arc(e,n,r,0,Math.PI*2),t.fill();let r=new k(e);return r.colorSpace=u,r}function Lt(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);n.addColorStop(0,`rgba(255,255,255,0.85)`),n.addColorStop(.4,`rgba(255,255,255,0.28)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,128/2,0,Math.PI*2),t.fill();let r=new k(e);return r.colorSpace=u,r}var Rt=(e,t,n)=>{let r=Math.max(0,Math.min(1,(e-t)/(n-t)));return r*r*(3-2*r)};function zt({skyW:t=17,skyY0:n=2.6,skyH:i=12.5,z:a=-7.8,sunSize:o=2.6,moonSize:s=2.2}={}){let c=new r;c.raycast=()=>{};let l=(t,n)=>{let r=new e(new j({map:t,transparent:!0,depthWrite:!1,fog:!1,toneMapped:!1,...n?{blending:2}:{}}));return r.raycast=()=>{},r},u=l(Lt(),!0),d=l(Ft(`#fff6dc`,`#ffcaa0`)),f=l(Lt(),!0),p=l(It());c.add(u,d,f,p);let m=new z,h=new z(`#fff6e0`),g=new z(`#ff7a2e`),_=new z(`#dfe6f7`),v=new z(`#ffd9a0`),y=new z(`#aec4ff`);function b(e,r,c,l){let b=c.sunArc,x=l?Math.min(1,(l.cloud||0)*.85+(l.fog||0)*.7):0,S=b.y,C=Rt(S,-.02,.12)*(1-.75*x),w=1-Rt(Math.abs(S),.02,.42);d.position.set(b.x*t,n+b.y*i,a),u.position.copy(d.position);let T=o*(1+.75*w);d.scale.setScalar(T),u.scale.setScalar(T*2.7),m.copy(h).lerp(g,w),d.material.color.copy(m),u.material.color.copy(v).lerp(g,w*.6),d.material.opacity=C,u.material.opacity=C*(.45+.35*w);let E=Rt(-b.y,-.02,.12)*(1-.7*x);p.position.set(-b.x*t,n+-b.y*i,a),f.position.copy(p.position),p.scale.setScalar(s),f.scale.setScalar(s*2.3),p.material.color.copy(_),f.material.color.copy(y),p.material.opacity=E,f.material.opacity=E*.4}return{group:c,update:b}}var Bt=`varying vec2 vUv;

void main() {
  
  
  
  vUv = uv;

  
  
  
  
  
  
  
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,Vt=`precision highp float;

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
}`,Ht=`varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0); 
}`,Ut=`precision highp float;

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
}`,Wt=`precision highp float;

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
}`,Gt=`precision highp float;

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
}`,Kt=`const float CA_STRENGTH   = 0.0030;  
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
}`,qt=`const float DITHER = 0.55;   

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
}`,Jt=`precision highp float;

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
}`,Yt=`precision highp float;

varying vec2 vUv;
uniform sampler2D uToon;   
uniform sampler2D uPixel;  
uniform float     uBlend;  

void main() {
  vec3 t = texture2D(uToon, vUv).rgb;
  vec3 p = texture2D(uPixel, vUv).rgb;
  gl_FragColor = vec4(mix(t, p, uBlend), 1.0);
}`,Xt=`precision highp float;

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
}`,Zt={"1-bit":{gridWidth:110,dither:.6,palette:[`#15120c`,`#c8b486`]},gb:{gridWidth:130,dither:.4,palette:[`#0f380f`,`#306230`,`#8bac0f`,`#9bbc0f`]},"8-bit":{gridWidth:160,dither:.55,palette:[`#140c1c`,`#442434`,`#30346d`,`#4e4a4e`,`#854c30`,`#346524`,`#d04648`,`#757161`,`#597dce`,`#d27d2c`,`#8595a1`,`#6daa2c`,`#d2aa99`,`#6dc2ca`,`#dad45e`,`#deeed6`]},"16-bit":{gridWidth:280,dither:.3,palette:`#000000.#222034.#45283c.#663931.#8f563b.#df7126.#d9a066.#eec39a.#fbf236.#99e550.#6abe30.#37946e.#4b692f.#524b24.#323c39.#3f3f74.#306082.#5b6ee1.#639bff.#5fcde4.#cbdbfc.#ffffff.#9badb7.#847e87.#696a6a.#595652.#76428a.#ac3232.#d95763.#d77bba.#8f974a.#8a6f30`.split(`.`)},modern:{gridWidth:460,dither:.6,palette:null}},Qt=[`gb`,`8-bit`,`16-bit`,`modern`];function $t(e){let t=Math.max(e.length,1),n=new Float32Array(t*4);e.forEach((e,t)=>{let r=new z(e);n[t*4+0]=r.r,n[t*4+1]=r.g,n[t*4+2]=r.b,n[t*4+3]=1});let r=new ne(n,t,1,d,de);return r.minFilter=f,r.magFilter=f,r.needsUpdate=!0,r}var en=220,tn={night:[`#0A0C16`,`#1C2236`,`#3A3A52`,`#5A5A78`,`#8A92B0`],dawn:[`#1A1008`,`#43281A`,`#7A4A30`,`#B07A4E`,`#E8A86A`],noon:[`#16100A`,`#3A2F1E`,`#6B563A`,`#937B54`,`#B89968`],dusk:[`#140A0A`,`#3E1E1A`,`#7A3828`,`#B85A36`,`#F0884A`]},nn={night:[`#020604`,`#06180E`,`#10401E`,`#1E9040`,`#7FE0FF`],dawn:[`#060603`,`#1A2410`,`#3A6B22`,`#6CC040`,`#FFC060`],noon:[`#050805`,`#0E2912`,`#1E6B2F`,`#3CF06A`,`#FFB000`],dusk:[`#080402`,`#241408`,`#6B4A12`,`#E0A030`,`#FF7030`]};function rn({demo:e=!1,citySeed:n=0,profileIndex:r=0}={}){let i=new ie({antialias:!0,preserveDrawingBuffer:!0});i.shadowMap.enabled=!0,i.shadowMap.type=1,i.shadowMap.autoUpdate=!1,i.shadowMap.needsUpdate=!0;let a=!!(window.matchMedia&&window.matchMedia(`(pointer: coarse)`).matches);i.setPixelRatio(Math.min(window.devicePixelRatio,a?1.5:2)),i.setSize(window.innerWidth,window.innerHeight),i.setClearColor(920327,1),document.body.appendChild(i.domElement);let s=i.getDrawingBufferSize(new V),c=new T;c.fog=new y(10465470,0);let l=new z(`#aeb6c0`),h=.062,_=new z(`#74508f`),v=new z,b=De({aspect:window.innerWidth/window.innerHeight}),S=at({t:.5}),C={type:ue,format:d,minFilter:f,magFilter:f,wrapS:te,wrapT:te,depthBuffer:!1,stencilBuffer:!1},E=[new se(256,256,C),new se(256,256,C),new se(256,256,C)];for(let e of E)i.setRenderTarget(e),i.clear();i.setRenderTarget(null);let O=new T,ee=new pe(-1,1,1,-1,0,1),A=new w({vertexShader:Ht,fragmentShader:Ut,uniforms:{uCurr:{value:null},uPrev:{value:null},uTexel:{value:new V(1/256,1/256)},uMouse:{value:new V(-1,-1)},uMouseStrength:{value:0},uC2:{value:.25},uDamping:{value:.992},uRainCount:{value:0},uRainDrops:{value:Array.from({length:8},()=>new L)},uWakeCount:{value:0},uWakeDrops:{value:Array.from({length:8},()=>new L)}}});O.add(new g(new x(2,2),A));let j=new se(s.x,s.y,{minFilter:t,magFilter:t,depthBuffer:!0,stencilBuffer:!1});function ne(e){let t=document.createElement(`canvas`);t.width=t.height=1024;let n=t.getContext(`2d`);n.fillStyle=e?`#0c1418`:`#15110b`,n.fillRect(0,0,1024,1024),n.strokeStyle=e?`rgba(120,150,170,0.22)`:`rgba(184,153,104,0.30)`,n.lineWidth=2;for(let e=0;e<=1024;e+=64)n.beginPath(),n.moveTo(e,0),n.lineTo(e,1024),n.stroke(),n.beginPath(),n.moveTo(0,e),n.lineTo(1024,e),n.stroke();e||(n.fillStyle=`#B89968`,n.font=`bold 360px Georgia, serif`,n.textAlign=`center`,n.textBaseline=`middle`,n.fillText(`LGR`,512,470),n.font=`600 64px ui-monospace, monospace`,n.fillText(`WEB · STUDIO`,512,720));let r=new k(t);return r.colorSpace=u,r}let M=new g(new x(28,28),new o({map:ne(e)}));M.rotation.x=-Math.PI/2,M.position.y=-.35,c.add(M);let N=new g(new x(40,24),new w({depthWrite:!1,vertexShader:Bt,fragmentShader:Vt,uniforms:{uTime:{value:0},uInk:{value:S.horizon},uGold:{value:S.sky},uFogColor:{value:v},uFogAmt:{value:0},uFogCharm:Pe}}));N.position.set(0,3,-8),c.add(N);let P=new w({vertexShader:Wt,fragmentShader:Gt,uniforms:{uHeight:{value:null},uScene:{value:j.texture},uTexel:{value:new V(1/256,1/256)},uResolution:{value:new V(s.x,s.y)},uDisplace:{value:.42},uNormalStrength:{value:22},uRefractStrength:{value:.06},uChromaScale:{value:1},uNormalMatrix:{value:new m},uLightDir:{value:S.sunDir},uInk:{value:new z(`#2A2218`)},uGold:{value:new z(`#B89968`)},uVector:Oe,uVecWater:{value:new z(`#1fb8d8`)},uVecTint:{value:ke}}}),F=new g(new x(28,28,255,255),P);F.rotation.x=-Math.PI/2,F.updateMatrixWorld(!0),P.uniforms.uNormalMatrix.value.getNormalMatrix(F.matrixWorld),c.add(F);let re={value:0},I=kt({windowGlow:re}),R=Ze({seed:n,profileIndex:r,landmarkFactory:I,windowGlow:re});c.add(R.group);let ae=ut({plinthTop:.3,extent:R.extent,profile:R.state.profile});c.add(ae.group);let oe=_t({extent:R.extent,waterSize:28,plinthTop:.3});c.add(oe.group),A.uniforms.uWakeDrops.value=oe.wakeDrops;let B=jt({extent:R.extent});c.add(B.group),A.uniforms.uRainDrops.value=B.rainDrops;let ce=Nt({extent:R.extent});c.add(ce.group);let H=zt();c.add(H.group),R.group.remove(R.key),c.add(R.key),R.key.castShadow=!0,R.key.shadow.mapSize.set(2048,2048),R.key.shadow.bias=-18e-5,R.key.shadow.normalBias=.028,c.add(R.key.target);function le(){let e=R.key.shadow.camera,t=R.extent+4.5;e.left=-t,e.right=t,e.top=t,e.bottom=-t,e.near=1,e.far=48,e.updateProjectionMatrix(),i.shadowMap.needsUpdate=!0}le();let de=new D(s.x,s.y),fe=new se(s.x,s.y,{minFilter:t,magFilter:t,depthBuffer:!0,stencilBuffer:!1,depthTexture:de}),me=new se(s.x,s.y,{minFilter:t,magFilter:t,depthBuffer:!1,stencilBuffer:!1}),he=new se(s.x,s.y,{minFilter:t,magFilter:t,depthBuffer:!1,stencilBuffer:!1}),ge=new se(s.x,s.y,{minFilter:t,magFilter:t,depthBuffer:!1,stencilBuffer:!1}),U=new T,_e=new pe(-1,1,1,-1,0,1),ve=new g(new x(2,2));U.add(ve);let ye=new w({vertexShader:Ht,fragmentShader:Kt,uniforms:{uScene:{value:fe.texture},uTime:{value:0},uResolution:{value:new V(s.x,s.y)},uGrain:{value:1},uChroma:{value:1},uExposure:{value:1}}}),be=e=>{let t=e.map(e=>new z(e));for(;t.length<8;)t.push(new z(0,0,0));return t},xe=[`night`,`dawn`,`noon`,`dusk`],Se={inkgold:xe.map(e=>be(tn[e])),terminal:xe.map(e=>be(nn[e]))},Ce=new w({vertexShader:Ht,fragmentShader:qt,uniforms:{uScene:{value:me.texture},uResolution:{value:new V(s.x,s.y)},uPixelSize:{value:en},uPalette:{value:Se.inkgold[2]},uPaletteB:{value:Se.inkgold[2]},uPaletteBlend:{value:0},uPaletteSize:{value:5}}}),we=new w({vertexShader:Ht,fragmentShader:Xt,uniforms:{uScene:{value:me.texture},uResolution:{value:new V(s.x,s.y)},uGridWidth:{value:160},uDither:{value:.55},uPalette:{value:$t(Zt[`8-bit`].palette)},uPaletteSize:{value:1},uUsePalette:{value:1}}}),Te={};for(let e of Qt)Te[e]=Zt[e].palette?$t(Zt[e].palette):null;let W=new w({vertexShader:Ht,fragmentShader:Jt,uniforms:{uScene:{value:me.texture},uDepth:{value:de},uResolution:{value:new V(s.x,s.y)},uBands:{value:4},uToonGain:{value:1.7},uToonGamma:{value:.6},uToonFloor:{value:S.toonFloor},uOutline:{value:S.outline},uNear:{value:.1},uFar:{value:100},uIsPerspective:{value:1}}}),G=new w({vertexShader:Ht,fragmentShader:Yt,uniforms:{uToon:{value:he.texture},uPixel:{value:ge.texture},uBlend:{value:0}}});function Ee(e,t){ve.material=e,i.setRenderTarget(t),i.render(U,_e)}function K(){b.setViewport(window.innerWidth,window.innerHeight),i.setSize(window.innerWidth,window.innerHeight);let e=i.getDrawingBufferSize(new V);return j.setSize(e.x,e.y),fe.setSize(e.x,e.y),me.setSize(e.x,e.y),he.setSize(e.x,e.y),ge.setSize(e.x,e.y),P.uniforms.uResolution.value.set(e.x,e.y),ye.uniforms.uResolution.value.set(e.x,e.y),Ce.uniforms.uResolution.value.set(e.x,e.y),we.uniforms.uResolution.value.set(e.x,e.y),W.uniforms.uResolution.value.set(e.x,e.y),e}let q=3,J=!1,Y=!1,X=`native`,Ie=.3,Le=.46,Z=[`native`,...Qt],Re={"16-bit":`16-bit`,"8-bit":`8-bit`,gb:`Game Boy`,modern:`Modern`,native:`Pixel`,"1-bit":`1-bit`};typeof window<`u`&&(window.__mode=q,window.__vector=J,window.__era=X);let ze=0,Be=performance.now(),Ve=typeof window<`u`&&new URLSearchParams(window.location.search).has(`perf`);typeof window<`u`&&(window.__perf=Ve),Ve&&(i.info.autoReset=!1);let Q=null;typeof window<`u`&&(window.__loaded=!1);let He=0,Ue=new L(1,1,1),We=!1;function Ge(e){let t=Y?Se.terminal:Se.inkgold,n=e%1*4,r=Math.floor(n)%4;Ce.uniforms.uPalette.value=t[r],Ce.uniforms.uPaletteB.value=t[(r+1)%4],Ce.uniforms.uPaletteBlend.value=n-Math.floor(n)}function Ke(e){let t=Zt[e];t&&(we.uniforms.uGridWidth.value=t.gridWidth,we.uniforms.uDither.value=t.dither,we.uniforms.uUsePalette.value=+!!t.palette,t.palette&&(we.uniforms.uPalette.value=Te[e],we.uniforms.uPaletteSize.value=t.palette.length))}function qe(){X!==`native`&&Ke(X)}let Je=()=>X===`native`?Ce:we;function Ye(e,t){F.visible=!1,i.setRenderTarget(j),i.render(c,e),F.visible=!0,i.setRenderTarget(t),i.render(c,e)}function Xe(e,t){if(F.visible=!1,i.setRenderTarget(j),i.render(c,b.camera),F.visible=!0,q===1||J&&q!==7&&q!==8)i.setRenderTarget(t),i.render(c,b.camera);else if(i.setRenderTarget(fe),i.render(c,b.camera),q===2)ye.uniforms.uGrain.value=1,ye.uniforms.uChroma.value=1,Ee(ye,t);else{ye.uniforms.uGrain.value=0,ye.uniforms.uChroma.value=0,Ee(ye,me);let n=b.camera;W.uniforms.uNear.value=n.near,W.uniforms.uFar.value=n.far,W.uniforms.uIsPerspective.value=+!!n.isPerspectiveCamera;let r=e.era?(Ke(e.era),we):Je();e.kind===`pixel`?(Ee(r,t),window.__style=`pixel`):e.kind===`toon`?(Ee(W,t),window.__style=`toon`):(Ee(W,he),Ee(r,ge),G.uniforms.uBlend.value=e.blend,Ee(G,t),window.__style=`blend`)}}function Qe(){let e=$e(),t=e.kind===`toon`?1:e.kind===`blend`?1-e.blend:0;return P.uniforms.uChromaScale.value=p.lerp(1,.5,t),e}function $e(){if(q===1||q===2)return{kind:`none`};if(q===7)return{kind:`pixel`};if(q===8)return{kind:`toon`};let e=b.styleT;return window.__styleT=e,e<=Ie?{kind:`toon`}:e>=Le?{kind:`pixel`,era:e<.62?`16-bit`:e<.8?`8-bit`:`gb`}:{kind:`blend`,blend:p.smoothstep(e,Ie,Le),era:`16-bit`}}function et(e){return q===1||q===2?``:J&&q!==7&&q!==8?`Vector`:e.kind===`toon`?`Toon`:e.kind===`pixel`?Re[e.era||X]||`Pixel`:e.kind===`blend`?`Toon → `+(Re[e.era]||`Pixel`):``}function tt(e,t,{shadowsOn:n=!0,seasonTarget:r=0}={}){if(Ve){let e=i.info;Q={calls:e.render.calls,tris:e.render.triangles,programs:e.programs?e.programs.length:0,geo:e.memory.geometries,tex:e.memory.textures},e.reset()}N.material.uniforms.uTime.value=t,ye.uniforms.uTime.value=t,S.update(e),R.key.position.copy(S.sunDir).multiplyScalar(24),R.key.color.copy(S.sunColor),R.key.intensity=S.sunIntensity,R.fill.color.copy(S.hemiSky),R.fill.groundColor.copy(S.hemiGround),re.value=S.windowGlow;let a=B.overcast;R.key.intensity*=1-.5*a,R.key.color.lerp(l,.45*a),R.fill.intensity=1+.7*a;let o=p.smoothstep(S.sunDir.y,.06,.34),s=p.lerp(.28,1,1-S.windowGlow),u=n?o*s:0;R.key.shadow.intensity=.72*u,Ae.value=.52*u,(n&&!We||Ue.distanceToSquared(S.sunDir)>2e-5)&&(i.shadowMap.needsUpdate=!0,Ue.copy(S.sunDir)),We=n;let d=1-S.windowGlow;ke.setRGB(p.lerp(.46,1,d),p.lerp(.52,1,d),p.lerp(.74,1,d)),ye.uniforms.uExposure.value=S.exposure,W.uniforms.uToonGain.value=S.toonGain,i.setClearColor(S.horizon,1),Ge(S.t),window.__t=S.t,ae.update(e,t,S),R.update(t),oe.update(e,t,S),A.uniforms.uWakeCount.value=oe.wakeCount,B.update(e,t),A.uniforms.uRainCount.value=B.rainDropCount;let f=B.fog*(1-d);c.fog.density=B.fog*h,v.copy(S.horizon).lerp(_,.85*f),c.fog.color.copy(v),i.setClearColor(v,1),Pe.value=B.fog,N.material.uniforms.uFogAmt.value=.7*B.fog,je.value=B.snow,Me.value=B.cloud*.55,Ne.x+=e*.018,Ne.y+=e*.009,Fe.value+=(r-Fe.value)*Math.min(1,e*1.5),ce.update(e,t,S,B),H.update(e,t,S,B),ze++;let m=performance.now();m-Be>=1e3&&(window.__fps=ze,Ve&&Q&&(console.log(`[perf] ${ze} fps · ~${(1e3/Math.max(1,ze)).toFixed(2)} ms · calls ${Q.calls} · tris ${Q.tris} · programs ${Q.programs} · geo ${Q.geo} · tex ${Q.tex}`),window.__perfInfo={fps:ze,...Q}),ze=0,Be=m);let[g,y,b]=E;if(A.uniforms.uPrev.value=g.texture,A.uniforms.uCurr.value=y.texture,i.setRenderTarget(b),i.render(O,ee),E=[y,b,g],P.uniforms.uHeight.value=E[1].texture,He<2&&typeof document<`u`&&++He===2){let e=document.getElementById(`lgr-loader`);e&&e.classList.add(`gone`),window.__loaded=!0}}function nt(e){q=e,window.__mode=q}function rt(){return J=!J,Oe.value=+!!J,window.__vector=J,J}function it(e){return J=!!e,Oe.value=+!!J,window.__vector=J,J}function ot(){return X=Z[(Z.indexOf(X)+1)%Z.length],window.__era=X,qe(),X}function st(){return Y=!Y,Y}return{updateWorld:tt,decideStyle:Qe,renderCityPipeline:Xe,renderCityBeautyTo:Ye,styleHintName:et,setPostMode:nt,toggleVector:rt,setVector:it,cycleEra:ot,togglePalette:st,get mode(){return q},get vector(){return J},get sceneEra(){return X},renderer:i,drawBuffer:s,scene:c,rig:b,sunRig:S,SIM:256,targets:E,simScene:O,simCamera:ee,simMaterial:A,grabRT:j,card:M,backdrop:N,WATER_SIZE:28,water:F,waterMaterial:P,windowGlow:re,landmarkFactory:I,city:R,cityLife:ae,waterLife:oe,weatherRig:B,clouds:ce,fitShadowFrustum:le,SHADOW_DIST:24,sceneDepth:de,sceneRT:fe,filmicRT:me,toonRT:he,pixelRT:ge,postScene:U,postCamera:_e,postQuad:ve,filmicMaterial:ye,pixelMaterial:Ce,pixelkitMaterial:we,toonMaterial:W,mixMaterial:G,PALCACHE:Se,ERA_TEX:Te,runPass:Ee,OVERCAST_GREY:l,FOG_DENSITY:h,FOG_NIGHT_TINT:_,_fogColor:v,resize:K}}var an=`lgr_hints_`,on=!1;function sn(){if(on||typeof document>`u`)return;on=!0;let e=document.createElement(`style`);e.textContent=`
  .lgr-hints { position: fixed; inset: 0; z-index: 40; display: flex; align-items: flex-end;
    justify-content: center; padding: 0 16px 92px; pointer-events: none; opacity: 0; transition: opacity .3s ease; }
  .lgr-hints.on { opacity: 1; }
  .lgr-hints-card { pointer-events: auto; position: relative; max-width: 360px; width: 100%;
    background: rgba(16,18,24,0.93); border: 1px solid rgba(184,153,104,0.42); border-radius: 14px;
    padding: 15px 18px; color: #e8edf4; font: 13px/1.55 ui-monospace, monospace;
    box-shadow: 0 14px 44px rgba(0,0,0,0.55); }
  .lgr-hints-h { font: 700 15px/1 Georgia, serif; color: #b89968; letter-spacing: .06em; margin: 0 0 10px; }
  .lgr-hints-card ul { margin: 0 0 14px; padding-left: 18px; }
  .lgr-hints-card li { margin: 4px 0; }
  .lgr-hints-ok { min-width: 44px; min-height: 40px; padding: 0 18px; border: 0; border-radius: 9px;
    background: #3a7bd5; color: #fff; font: 600 13px/1 ui-monospace, monospace; cursor: pointer;
    letter-spacing: .04em; transition: transform .08s ease, background .12s; }
  .lgr-hints-ok:hover { background: #4a8be5; }
  .lgr-hints-ok:active { transform: scale(0.94); background: #5a9bf5; }
  .lgr-hints-x { position: absolute; top: 7px; right: 7px; min-width: 36px; min-height: 36px; border: 0;
    background: transparent; color: #8a93a3; font: 15px/1 ui-monospace, monospace; cursor: pointer;
    border-radius: 8px; transition: transform .08s ease; }
  .lgr-hints-x:active { transform: scale(0.9); }
  @media (prefers-reduced-motion: reduce) {
    .lgr-hints, .lgr-hints-ok, .lgr-hints-x { transition: none; }
  }`,document.head.appendChild(e)}function cn({key:e,title:t=`Tips`,tips:n=[],force:r=!1}={}){let i={key:e,shown:!1,dismissed:!1,seen:!1};if(typeof window<`u`&&(window.__hints=i),typeof document>`u`||!e)return{dismiss(){},el:null};let a=an+e,o=!1;try{o=localStorage.getItem(a)===`1`}catch{}if(o&&!r)return i.seen=!0,{dismiss(){},el:null};sn();let s=!!(window.matchMedia&&window.matchMedia(`(prefers-reduced-motion: reduce)`).matches),c=document.createElement(`div`);c.className=`lgr-hints`,c.innerHTML=`<div class="lgr-hints-card">
    <div class="lgr-hints-h">${t}</div>
    <ul>${n.map(e=>`<li>${e}</li>`).join(``)}</ul>
    <button class="lgr-hints-ok">Got it</button>
    <button class="lgr-hints-x" title="Dismiss (Esc)" aria-label="Dismiss">✕</button>
  </div>`,document.body.appendChild(c),i.shown=!0,s?c.classList.add(`on`):requestAnimationFrame(()=>c.classList.add(`on`));let l=!1;function u(e=!0){if(!l){if(l=!0,e)try{localStorage.setItem(a,`1`)}catch{}i.dismissed=!0,window.removeEventListener(`keydown`,d),c.classList.remove(`on`),setTimeout(()=>c.remove(),s?0:300)}}function d(e){e.key===`Escape`&&u(!0)}return window.addEventListener(`keydown`,d),c.querySelector(`.lgr-hints-ok`).addEventListener(`click`,()=>{navigator.vibrate?.(10),u(!0)}),c.querySelector(`.lgr-hints-x`).addEventListener(`click`,()=>{navigator.vibrate?.(10),u(!0)}),{dismiss:u,el:c}}var ln=new Set([`w`,`a`,`s`,`d`,`arrowup`,`arrowdown`,`arrowleft`,`arrowright`,`shift`,` `]),un={walker:{p:.6,hp:26,speed:.85,dmg:9,score:10,size:1,color:`#6f8a45`},runner:{p:.25,hp:12,speed:1.75,dmg:7,score:16,size:.82,color:`#a6d24c`},tank:{p:.15,hp:95,speed:.5,dmg:20,score:34,size:1.5,color:`#39492a`}};function dn(){let e=Math.random();return e<un.walker.p?`walker`:e<un.walker.p+un.runner.p?`runner`:`tank`}var fn=new z(`#ffffff`),pn=new z(`#d83a2a`),mn={food:{name:`Food`,glyph:`🍖`,color:`#c8782e`,consumable:!0},water:{name:`Water`,glyph:`💧`,color:`#3aa6dc`,consumable:!0},bandage:{name:`Bandage`,glyph:`➕`,color:`#e8e2d6`,consumable:!0},scrap:{name:`Scrap`,glyph:`⚙️`,color:`#8a8f96`,consumable:!1},medkit:{name:`Medkit`,glyph:`✚`,color:`#e0524a`,consumable:!0},repairkit:{name:`Repair Kit`,glyph:`🔧`,color:`#caa05a`,consumable:!0}},hn=[{out:`medkit`,need:{bandage:2}},{out:`repairkit`,need:{scrap:3}}];function gn({extent:e=8,plinthTop:t=.3}={}){let n=new r;n.visible=!1,n.raycast=()=>{};let i=t+.02,s=Math.max(3,e-.7),c=typeof window<`u`&&window.matchMedia&&window.matchMedia(`(pointer: coarse)`).matches,u=1.25,d=4.4,f=1.4,m=new r,y=new g(new re(.16,.34,4,10),Z(new l({color:`#3f7fd0`,roughness:.6,flatShading:!0}),{color:`#3f7fd0`}));y.position.y=.33;let b=new g(new _(.13,12,9),Z(new l({color:`#e9caa1`,roughness:.75,flatShading:!0}),{color:`#e9caa1`}));b.position.y=.66;let x=new g(new O(.1,.1,.16),Z(new l({color:`#ffd54a`,roughness:.5,flatShading:!0}),{color:`#ffd54a`}));x.position.set(0,.38,.18),m.add(y,b,x),m.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!1),e.raycast=()=>{}}),m.scale.setScalar(1.6),m.position.y=i,n.add(m);let S=new g(new A(.95,16,-.9,1.8),new o({color:`#ffe08a`,transparent:!0,opacity:0,depthWrite:!1,side:2}));S.rotation.x=-Math.PI/2,S.position.y=i+.06,S.raycast=()=>{},n.add(S);let C=new B().setFromPoints([new L,new L]),w=new h(C,new F({color:`#fff3c0`,transparent:!0,opacity:0,depthWrite:!1}));w.raycast=()=>{},n.add(w);let T={x:0,z:0,vx:0,vz:0,hp:100,stamina:100,hunger:100,thirst:100,facing:0,iframe:0},E=new a(new re(.15,.3,4,8),Z(new l({roughness:.85,flatShading:!0})),48);E.castShadow=!0,E.receiveShadow=!1,E.frustumCulled=!1,E.raycast=()=>{},E.instanceMatrix.setUsage(fe),n.add(E);let D=[];for(let e=0;e<48;e++)D.push({x:0,z:0,vx:0,vz:0,alive:!1,in:!1,type:`walker`,hp:1,maxhp:1,speed:1,dmg:0,score:0,size:1,phase:0,flash:0});let ee=new z,k=[],j=Z(new l({color:`#7a5a36`,roughness:.9,flatShading:!0}),{color:`#7a5a36`});for(let e=0;e<8;e++){let t=e/8*Math.PI*2,r=new g(new O(2.1,.7,.24),j.clone());r.position.set(Math.cos(t)*d,i+.35,Math.sin(t)*d),r.rotation.y=-t+Math.PI/2,r.castShadow=!0,r.raycast=()=>{},n.add(r),k.push({mesh:r,ang:t,hp:150,alive:!0,baseColor:new z(`#7a5a36`)})}function te(e,t){let n=Math.atan2(t,e);return n<0&&(n+=Math.PI*2),k[Math.round(n/(Math.PI*2/8))%8]}let ne=[];for(let e=0;e<14;e++){let e=new g(new O(.26,.26,.26),Z(new l({roughness:.6,flatShading:!0})));e.castShadow=!0,e.visible=!1,e.raycast=()=>{},n.add(e),ne.push({mesh:e,x:0,z:0,kind:`food`,active:!1})}let M=new z;function N(){let e=Math.random();return e<.36?`food`:e<.72?`water`:e<.88?`bandage`:`scrap`}function P(e,t,n){let r=ne.find(e=>!e.active);r&&(r.x=e,r.z=t,r.kind=n||N(),r.active=!0,r.mesh.position.set(e,i+.18,t),r.mesh.visible=!0,r.mesh.material.color.copy(M.set(mn[r.kind].color)))}let I=[];function ie(e){let t=I.find(t=>t.id===e);return t?t.n:0}function R(e,t=1){let n=I.find(t=>t.id===e);return n?(n.n+=t,!0):I.length<8?(I.push({id:e,n:t}),!0):!1}function ae(e,t){let n=I.find(t=>t.id===e);return!n||n.n<t?!1:(n.n-=t,n.n<=0&&I.splice(I.indexOf(n),1),!0)}function oe(e){if(ie(e)<=0)return!1;if(e===`food`)T.hunger=Math.min(100,T.hunger+38);else if(e===`water`)T.thirst=Math.min(100,T.thirst+38);else if(e===`bandage`)T.hp=Math.min(100,T.hp+40);else if(e===`medkit`)T.hp=Math.min(100,T.hp+90);else if(e===`repairkit`){let e=null;for(let t of k)(!e||t.hp<e.hp)&&(e=t);e&&(e.hp=150,e.alive=!0)}else return!1;return ae(e,1),He(),!0}function se(e){for(let t in e.need)if(ie(t)<e.need[t])return!1;for(let t in e.need)ae(t,e.need[t]);return R(e.out,1),He(),!0}let ce=!1,V=!1,H=1,le=0,ue=0,de=0,pe=`spawning`,me=0,he=0,ge=0,U=0,_e=!1,ve=null;function ye(){for(let e=0;e<48;e++)if(!D[e].alive)return D[e];return null}function be(e){let t=ye();if(!t)return;let n=un[dn()];t.type=Object.keys(un).find(e=>un[e]===n)||`walker`;let r=Math.random()*Math.PI*2;t.x=Math.cos(r)*s,t.z=Math.sin(r)*s,t.vx=0,t.vz=0;let i=1+H*.08;t.maxhp=n.hp*i,t.hp=t.maxhp,t.speed=n.speed*(1+.4*e)*(1+H*.015)*(H===1?.85:1),t.dmg=n.dmg,t.score=n.score,t.size=n.size,t.phase=Math.random()*6.28,t.flash=0,t.in=!1,t.alive=!0}function xe(){let e=null,t=1/0;for(let n of D){if(!n.alive)continue;let r=(n.x-T.x)**2+(n.z-T.z)**2;r<t&&(t=r,e=n)}return e}function Se(e){e.alive=!1,le++,ue+=e.score,Math.random()<.3&&P(e.x,e.z)}function Ce(e,t){e.hp-=t,e.flash=.12,e.hp<=0&&Se(e)}function we(){if(V||ge>0)return;ge=.16;let e,t;if(ve)e=ve.x-T.x,t=ve.z-T.z;else{let n=xe();n?(e=n.x-T.x,t=n.z-T.z):(e=Math.sin(T.facing),t=Math.cos(T.facing))}let n=Math.hypot(e,t)||1;e/=n,t/=n,T.facing=Math.atan2(e,t);let r=null,a=1/0;for(let n of D){if(!n.alive)continue;let i=n.x-T.x,o=n.z-T.z,s=i*e+o*t;s<0||s>9||Math.abs(i*t-o*e)<.7*(.4+.6*n.size)&&s<a&&(a=s,r=n)}let o=r?a:9,s=C.attributes.position;s.setXYZ(0,T.x,i+.5,T.z),s.setXYZ(1,T.x+e*o,i+.5,T.z+t*o),s.needsUpdate=!0,w.material.opacity=.95,r&&Ce(r,16)}function Te(){if(V||U>0)return;U=.42,S.material.opacity=.85;let e=Math.sin(T.facing),t=Math.cos(T.facing);for(let n of D){if(!n.alive)continue;let r=n.x-T.x,i=n.z-T.z,a=Math.hypot(r,i);a>1.05+n.size*.2||(r*e+i*t)/(a||1)>.2&&Ce(n,34)}}let W={},G={x:0,y:0};function Ee(e,t){if(!ce)return;let n=e.key.toLowerCase();if(t&&n===`i`){e.stopImmediatePropagation(),Ge();return}if(t&&n===`escape`&&Ie){e.stopImmediatePropagation(),We();return}if(ln.has(n)){if(e.stopImmediatePropagation(),n.startsWith(`arrow`)&&e.preventDefault(),n===` `){t&&Te();return}W[n]=t}}typeof window<`u`&&(window.addEventListener(`keydown`,e=>Ee(e,!0)),window.addEventListener(`keyup`,e=>Ee(e,!1)));let De=null,Oe=null,ke=null,Ae=null,je=null,Me=null,Ne=null,Pe=null,Fe=null,K=null,q=null,J=null,Y=null,X=null,Ie=!1;if(typeof document<`u`){let e=document.createElement(`style`);e.textContent=`
      .hoard-stick{position:fixed;left:22px;bottom:22px;width:124px;height:124px;border-radius:50%;
        background:rgba(16,18,24,0.5);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);
        border:1px solid rgba(255,255,255,0.18);z-index:4;display:none;touch-action:none;pointer-events:auto;}
      .hoard-stick .knob{position:absolute;left:50%;top:50%;width:54px;height:54px;margin:-27px 0 0 -27px;
        border-radius:50%;background:rgba(120,160,220,0.85);box-shadow:0 3px 12px rgba(0,0,0,0.4);}
      .hoard-btn{position:fixed;z-index:4;display:none;width:84px;height:84px;border-radius:50%;border:0;
        color:#fff;font:800 13px/1 ui-monospace,monospace;letter-spacing:.08em;pointer-events:auto;
        box-shadow:0 4px 16px rgba(0,0,0,0.4);touch-action:none;transition:transform .07s ease,filter .07s;}
      .hoard-btn:active{transform:scale(0.9);filter:brightness(1.35);}
      @media (prefers-reduced-motion: reduce){.hoard-btn{transition:filter .07s;}.hoard-btn:active{transform:none;}}
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
    `,document.head.appendChild(e),De=document.createElement(`div`),De.className=`hoard-stick`,Oe=document.createElement(`div`),Oe.className=`knob`,De.appendChild(Oe),document.body.appendChild(De);let t=!1,n=e=>{let t=De.getBoundingClientRect(),n=e.clientX-(t.left+t.width/2),r=e.clientY-(t.top+t.height/2),i=Math.hypot(n,r)||1;i>44&&(n*=44/i,r*=44/i),Oe.style.transform=`translate(${n}px,${r}px)`,G.x=n/44,G.y=-r/44};De.addEventListener(`pointerdown`,e=>{t=!0,De.setPointerCapture(e.pointerId),n(e)}),De.addEventListener(`pointermove`,e=>{t&&n(e)});let r=()=>{t=!1,G.x=0,G.y=0,Oe.style.transform=`translate(0,0)`};De.addEventListener(`pointerup`,r),De.addEventListener(`pointercancel`,r),q=document.createElement(`button`),q.className=`hoard-btn hoard-fire`,q.textContent=`FIRE`,document.body.appendChild(q),J=document.createElement(`button`),J.className=`hoard-btn hoard-melee`,J.textContent=`MELEE`,document.body.appendChild(J),q.addEventListener(`pointerdown`,e=>{e.preventDefault(),navigator.vibrate?.(12),_e=!0}),q.addEventListener(`pointerup`,()=>{_e=!1}),q.addEventListener(`pointercancel`,()=>{_e=!1}),J.addEventListener(`pointerdown`,e=>{e.preventDefault(),navigator.vibrate?.(18),Te()}),ke=document.createElement(`div`),ke.className=`hoard-hud`,ke.innerHTML=`HP<div class="bar"><i style="background:#e0524a"></i></div>STAMINA<div class="bar"><i style="background:#4ad08a"></i></div>HUNGER<div class="bar"><i style="background:#d89a3a"></i></div>THIRST<div class="bar"><i style="background:#3aa6dc"></i></div><div class="stat"></div>`,document.body.appendChild(ke);let i=ke.querySelectorAll(`i`);Ae=i[0],je=i[1],Me=i[2],Ne=i[3],Pe=ke.querySelector(`.stat`),Fe=document.createElement(`div`),Fe.className=`hoard-banner`,document.body.appendChild(Fe),K=document.createElement(`div`),K.className=`hoard-death`,K.innerHTML=`<h2>YOU DIED</h2><div class="ds"></div><button>RESTART</button>`,document.body.appendChild(K),K.querySelector(`button`).addEventListener(`click`,()=>Je());let a=document.createElement(`style`);a.textContent=`
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
    `,document.head.appendChild(a),Y=document.createElement(`button`),Y.className=`hoard-bagbtn`,Y.textContent=`🎒`,Y.title=`Inventory (I)`,document.body.appendChild(Y),Y.addEventListener(`click`,()=>Ge()),X=document.createElement(`div`),X.className=`hoard-bag`,document.body.appendChild(X)}let Le=0;function Re(e,t=1.8){Fe&&(Fe.textContent=e,Fe.style.display=`block`),Le=t}let ze=Math.PI/4;function Be(e){ze=e}function Ve(e,t){ve={x:e,z:t}}function Q(e){_e=e}function He(){if(typeof window<`u`&&(window.__hoardBag=Object.fromEntries(I.map(e=>[e.id,e.n]))),!X)return;let e=`<div class="panel"><h3>INVENTORY</h3><div class="slots">`;for(let t=0;t<8;t++){let n=I[t];n?e+=`<button class="slot" data-id="${n.id}" title="${mn[n.id].name}">${mn[n.id].glyph}<span class="n">${n.n}</span></button>`:e+=`<div class="slot empty"></div>`}e+=`</div><div class="craft">`,hn.forEach((t,n)=>{let r=Object.keys(t.need).every(e=>ie(e)>=t.need[e]),i=Object.entries(t.need).map(([e,t])=>`${t}${mn[e].glyph}`).join(`+`);e+=`<button data-rec="${n}" ${r?``:`disabled`}>Craft ${mn[t.out].name} (${i})</button>`}),e+=`</div><button class="close">CLOSE (I)</button></div>`,X.innerHTML=e,X.querySelectorAll(`.slot[data-id]`).forEach(e=>e.addEventListener(`click`,()=>{mn[e.dataset.id].consumable&&oe(e.dataset.id)})),X.querySelectorAll(`[data-rec]`).forEach(e=>e.addEventListener(`click`,()=>se(hn[+e.dataset.rec]))),X.querySelector(`.close`).addEventListener(`click`,()=>We())}function Ue(){!ce||V||(Ie=!0,X&&X.classList.add(`open`),He())}function We(){Ie=!1,X&&X.classList.remove(`open`)}function Ge(){Ie?We():Ue()}function Ke(e){H=e,he=5+e*2,pe=`spawning`}function qe(){T.x=0,T.z=0,T.vx=0,T.vz=0,T.hp=100,T.stamina=100,T.hunger=100,T.thirst=100,T.facing=0,T.iframe=0;for(let e of D)e.alive=!1;le=0,ue=0,de=0,V=!1,_e=!1,ve=null;for(let e of k)e.hp=150,e.alive=!0,e.mesh.scale.set(1,1,1);for(let e of ne)e.active=!1,e.mesh.visible=!1;I.length=0;let e=[`food`,`water`,`food`,`water`,`bandage`,`scrap`];for(let t=0;t<6;t++){let n=Math.random()*Math.PI*2,r=1.6+Math.random()*(s-2);P(Math.cos(n)*r,Math.sin(n)*r,e[t])}K&&(K.style.display=`none`),m.position.set(0,i,0),m.visible=!0,Ke(1),He()}function Je(){qe()}function Ye(e){ce=e,n.visible=e;let t=e&&c;De&&(De.style.display=t?`block`:`none`),q&&(q.style.display=t?`block`:`none`),J&&(J.style.display=t?`block`:`none`),ke&&(ke.style.display=e?`block`:`none`),Fe&&!e&&(Fe.style.display=`none`),K&&!e&&(K.style.display=`none`),Y&&(Y.style.display=e?`block`:`none`),We();for(let e in W)W[e]=!1;G.x=G.y=0,_e=!1,e&&qe()}let Xe=new v;function Ze(e,t,n){if(!ce||Ie)return;let r=n?n.windowGlow:0;if(ge=Math.max(0,ge-e),U=Math.max(0,U-e),w.material.opacity=Math.max(0,w.material.opacity-e*8),S.material.opacity=Math.max(0,S.material.opacity-e*6),!V){de+=e,T.iframe=Math.max(0,T.iframe-e);let n=(W.d||W.arrowright?1:0)-(W.a||W.arrowleft?1:0)+G.x,r=(W.w||W.arrowup?1:0)-(W.s||W.arrowdown?1:0)+G.y,a=Math.hypot(n,r);a>1&&(n/=a,r/=a);let o=a>.05,c=(W.shift||G.y>.95)&&T.stamina>2&&o,l=Math.cos(ze),u=Math.sin(ze),h=l*n+-u*r,g=-u*n+-l*r,_=c?5.2:3,v=1-Math.exp(-14*e);T.vx+=(h*_-T.vx)*v,T.vz+=(g*_-T.vz)*v,T.x+=T.vx*e,T.z+=T.vz*e;let y=Math.hypot(T.x,T.z);y>s&&(T.x*=s/y,T.z*=s/y,T.vx=0,T.vz=0),o&&(T.facing=Math.atan2(h,g)),T.stamina=p.clamp(T.stamina+(c?-34:22)*e,0,100),T.hunger=Math.max(0,T.hunger-.9*e),T.thirst=Math.max(0,T.thirst-1.15*e),T.hunger<=0||T.thirst<=0?T.hp=Math.max(0,T.hp-3.5*e):T.hunger>55&&T.thirst>55&&T.hp<100&&(T.hp=Math.min(100,T.hp+2*e));for(let e of ne)e.active&&(e.x-T.x)**2+(e.z-T.z)**2<.3&&R(e.kind)&&(e.active=!1,e.mesh.visible=!1,He());for(let t of k){if(t.hp>=150)continue;let n=Math.cos(t.ang)*d,r=Math.sin(t.ang)*d;(n-T.x)**2+(r-T.z)**2<f*f&&(t.hp=Math.min(150,t.hp+30*e),t.hp>0&&(t.alive=!0))}T.hp<=0&&Qe(),m.position.set(T.x,i,T.z),m.rotation.y=T.facing,m.visible=!(T.iframe>0&&Math.floor(t*20)%2==0),_e&&we(),S.position.set(T.x,i+.06,T.z),S.rotation.z=-T.facing}let a=0;V||pe===`spawning`&&(he>0&&Math.random()<e*(H===1?3.5:6)&&(be(r),he--),he<=0&&(pe=`fighting`));let o=0,c=1/0;for(let n=0;n<48;n++){let r=D[n];if(!r.alive){Xe.position.set(0,-60,0),Xe.scale.setScalar(0),Xe.updateMatrix(),E.setMatrixAt(n,Xe.matrix);continue}a++;let s=T.x-r.x,l=T.z-r.z,f=Math.hypot(s,l)||1;if(f<c&&(c=f),!V){let t=s/f*r.speed,n=l/f*r.speed,i=1-Math.exp(-6*e);if(r.vx+=(t-r.vx)*i,r.vz+=(n-r.vz)*i,f>.52){let t=r.x+r.vx*e,n=r.z+r.vz*e,i=Math.hypot(r.x,r.z),a=Math.hypot(t,n);if(!r.in&&i>=d&&a<4.9){let r=te(t,n);if(r.alive){let i=Math.atan2(n,t),a=4.9;t=Math.cos(i)*a,n=Math.sin(i)*a,r.hp-=15*e,r.hp<=0&&(r.hp=0,r.alive=!1)}}a<d-.1&&(r.in=!0),r.x=t,r.z=n}else T.iframe<=0&&(o=Math.max(o,r.dmg))}r.flash=Math.max(0,r.flash-e);let p=Math.sin(t*6+r.phase)*.04;Xe.position.set(r.x,i+.3*r.size*u+p,r.z),Xe.rotation.set(0,Math.atan2(r.vx,r.vz),Math.sin(t*3+r.phase)*.12),Xe.scale.setScalar(r.size*u),Xe.updateMatrix(),E.setMatrixAt(n,Xe.matrix),ee.set(un[r.type].color),r.flash>0?ee.lerp(fn,.7):ee.lerp(pn,.35*(1-r.hp/r.maxhp)),E.setColorAt(n,ee)}E.instanceMatrix.needsUpdate=!0,E.instanceColor&&(E.instanceColor.needsUpdate=!0);let l=0;for(let e of k){e.alive&&l++;let t=Math.max(0,e.hp/150);e.mesh.scale.y=e.alive?Math.max(.18,t):.12,e.mesh.position.y=i+.35*e.mesh.scale.y,e.mesh.material.color.copy(e.baseColor).lerp(pn,(1-t)*.55)}!V&&o>0&&(T.hp=Math.max(0,T.hp-o*(H===1?.5:1)),T.iframe=.6,T.hp<=0&&Qe()),!V&&pe===`fighting`&&a===0&&he<=0&&(pe=`complete`,me=2.2,Re(`WAVE ${H} CLEAR`,2)),!V&&pe===`complete`&&(me-=e,me<=0&&(Ke(H+1),Re(`WAVE ${H}`,1.4))),Le>0&&(Le-=e,Le<=0&&Fe&&(Fe.style.display=`none`)),Ae&&(Ae.style.width=`${T.hp}%`),je&&(je.style.width=`${T.stamina}%`),Me&&(Me.style.width=`${T.hunger}%`),Ne&&(Ne.style.width=`${T.thirst}%`),Pe&&(Pe.textContent=`WAVE ${H}   KILLS ${le}   SCORE ${ue}`),typeof window<`u`&&(window.__hoard={active:ce,dead:V,paused:Ie,hp:Math.round(T.hp),stamina:Math.round(T.stamina),hunger:Math.round(T.hunger),thirst:Math.round(T.thirst),zombies:a,barriers:l,pickups:ne.filter(e=>e.active).length,inv:Object.fromEntries(I.map(e=>[e.id,e.n])),wave:H,kills:le,score:ue,weapon:`gun`,znear:+c.toFixed(2),px:+T.x.toFixed(2),pz:+T.z.toFixed(2)})}function Qe(){V=!0,_e=!1,K&&(K.querySelector(`.ds`).innerHTML=`Wave reached: ${H}<br>Kills: ${le}<br>Score: ${ue}<br>Survived: ${de.toFixed(0)}s`,K.style.display=`flex`)}return{group:n,update:Ze,setActive:Ye,setAzimuth:Be,setAim:Ve,setFiring:Q,melee:Te,reset:qe,restart:Je,openBag:Ue,closeBag:We,toggleBag:Ge,addItem:R,get player(){return T},get dead(){return V},get active(){return ce},get paused(){return Ie},get inv(){return I.map(e=>({...e}))},get nearestPickup(){let e=null,t=1e9;for(let n of ne){if(!n.active)continue;let r=(n.x-T.x)**2+(n.z-T.z)**2;r<t&&(t=r,e=n)}return e?{x:e.x,z:e.z}:null},setTarget(){}}}var{Timer:_n}=oe,vn=new URLSearchParams(window.location.search),yn=vn.get(`demo`)===`1`||vn.has(`capture`);window.__demo=yn;var bn=(vn.get(`city`)?Number(vn.get(`city`)):0)||Math.random()*1e9|0,xn=0,Sn=rn({demo:yn,citySeed:bn,profileIndex:xn}),{renderer:Cn,scene:wn,rig:Tn,sunRig:En,city:Dn,landmarkFactory:On}=Sn,kn=gn({extent:Dn.extent,plinthTop:.3});wn.add(kn.group),window.__hoardApi=kn;var An=!0;window.__shadows=An,window.__scene=`hoard`;var jn=new L,Mn=new Set,Nn=6.5;function Pn(e){Dn.group.traverse(t=>{!t.isMesh||t.userData.ground||!t.visible||(t.getWorldPosition(jn),Math.hypot(jn.x,jn.z)<e&&(t.visible=!1,Mn.add(t)))})}function Fn(){for(let e of Mn)e.visible=!0;Mn.clear()}var In=new ae,Ln=new L,Rn=new L,zn=new Set;function Bn(){for(let e of zn)e.material&&(e.material.opacity=1,e.material.transparent=!!e.userData._wasT,e.material.depthWrite=e.userData._wasDW!==!1);zn.clear()}function Vn(e){Bn();let t=Tn.camera;for(let[n,r]of[[0,0],[.7,.4],[-.7,.4]]){Rn.set(e.x+n,.6,e.z+r),Ln.subVectors(Rn,t.position);let i=Ln.length();In.set(t.position,Ln.normalize()),In.far=i-.4;for(let e of In.intersectObject(Dn.group,!0)){let t=e.object;!t.material||t.userData.ground||zn.has(t)||(t.userData._wasT=t.material.transparent,t.userData._wasDW=t.material.depthWrite,t.material.transparent=!0,t.material.opacity=.16,t.material.depthWrite=!1,zn.add(t))}}}function Hn(){kn.setActive(!0),Pn(Nn),Tn.setMode(U.DIMETRIC),Tn.setZoom(2.8,!0),Tn.setTarget(kn.player.x,.6,kn.player.z,!0)}var Un=new ae,Wn=new V,Gn=new c(new L(0,1,0),-.32),Kn=new L,qn=window.matchMedia&&window.matchMedia(`(pointer: coarse)`).matches,Jn=!1,Yn=0,Xn=0,Zn=.005,Qn=(e,t)=>{Wn.x=e/window.innerWidth*2-1,Wn.y=-(t/window.innerHeight)*2+1};Cn.domElement.addEventListener(`contextmenu`,e=>e.preventDefault()),Cn.domElement.addEventListener(`mousedown`,e=>{e.button===0&&(Qn(e.clientX,e.clientY),kn.setFiring(!0)),e.button===2&&(Jn=!0,Yn=e.clientX,Xn=e.clientY)}),window.addEventListener(`mousemove`,e=>{Qn(e.clientX,e.clientY),Jn&&(Tn.orbit(-(e.clientX-Yn)*Zn,-(e.clientY-Xn)*Zn),Yn=e.clientX,Xn=e.clientY)}),window.addEventListener(`mouseup`,()=>{kn.setFiring(!1),Jn=!1}),Cn.domElement.addEventListener(`wheel`,e=>{e.preventDefault(),Tn.zoomBy(Math.exp(e.deltaY*.0015))},{passive:!1}),window.addEventListener(`keydown`,e=>{(e.key===`h`||e.key===`H`)&&(An=!An,window.__shadows=An)}),On.whenReady.then(()=>{Dn.generate(bn,xn),Sn.fitShadowFrustum(),Fn(),Pn(Nn),window.__cityReady=!0});var $n=new _n;$n.connect(document);function er(){$n.update();let e=Math.min($n.getDelta(),.1);kn.setAzimuth(Tn.azimuth),qn||(Un.setFromCamera(Wn,Tn.camera),Un.ray.intersectPlane(Gn,Kn)&&kn.setAim(Kn.x,Kn.z)),kn.update(e,$n.getElapsed(),En),Tn.setTarget(kn.player.x,.6,kn.player.z),Tn.update(e),Vn(kn.player),Sn.updateWorld(e,$n.getElapsed(),{shadowsOn:An,seasonTarget:0});let t=Sn.decideStyle();Sn.renderCityPipeline(t,null),requestAnimationFrame(er)}Hn(),er(),cn({key:`hoard`,title:`The Hoard`,tips:[`Move: WASD / arrows · on touch: the left thumb-stick`,`Aim: mouse / drag · Fire: hold click / the FIRE button · Melee: the MELEE button`,`Survive the waves · B: bag & crafting · Esc: exit`]}),window.addEventListener(`resize`,()=>{Sn.resize()});