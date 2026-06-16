import{$ as e,A as t,B as n,C as r,D as i,E as a,F as o,G as s,H as c,I as l,J as u,K as d,L as f,M as p,N as m,O as h,P as g,Q as _,R as v,S as y,T as b,U as x,V as S,W as C,X as w,Y as T,Z as E,_ as D,a as O,b as ee,c as k,d as A,et as j,f as M,g as te,h as N,i as P,j as F,k as I,l as ne,m as L,n as re,nt as R,o as z,p as B,q as ie,r as ae,rt as oe,s as V,t as se,tt as H,u as U,v as ce,w as le,x as ue,y as de,z as fe}from"./three-B1EZZ7Lj.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var pe=Math.atan(1/Math.SQRT2),me=Math.atan(.5),he=Math.PI/4,W={PERSPECTIVE:4,ISOMETRIC:5,DIMETRIC:6},ge=.12,_e=1.45,ve=4,ye=40,be=1.5,xe=16,Se=6,Ce=22,we=3.5,G=11,K=(e,t,n)=>e+(t-e)*(1-Math.exp(-8*n)),Te=(e,t)=>e+Math.PI*2*Math.round((t-e)/(Math.PI*2));function Ee({aspect:e,fov:t=48,near:n=.1,far:r=100,target:i=new R(0,.8,0),azimuth:a=he,elevation:o=.52,distance:s=12,zoom:c=5.5}={}){let l=new S(t,e,n,r),u=new fe(-1,1,1,-1,n,r),d=W.PERSPECTIVE,f=e,m={azimuth:a,elevation:o,distance:s,zoom:c,target:i.clone()},h={azimuth:a,elevation:o,distance:s,zoom:c,target:i.clone()},g=!1,_=()=>d===W.PERSPECTIVE?l:u;function v(e){e!==d&&(d=e,d===W.ISOMETRIC||d===W.DIMETRIC?(m.elevation=d===W.ISOMETRIC?pe:me,m.azimuth=Te(he,h.azimuth),g=!0):g=!1)}function y(e,t){m.azimuth+=e,g||(m.elevation=p.clamp(m.elevation+t,ge,_e))}function b(e){d===W.PERSPECTIVE?m.distance=p.clamp(m.distance*e,ve,ye):m.zoom=p.clamp(m.zoom*e,be,xe)}function x(e,t){let n=m.azimuth,r=d===W.PERSPECTIVE?m.distance*.04:m.zoom*.08,i=new R(Math.cos(n),0,-Math.sin(n)),a=new R(-Math.sin(n),0,-Math.cos(n));m.target.addScaledVector(i,e*r),m.target.addScaledVector(a,t*r)}function C(e,t){f=e/t,l.aspect=f,l.updateProjectionMatrix()}function w(e){h.azimuth=K(h.azimuth,m.azimuth,e),h.elevation=K(h.elevation,m.elevation,e),h.distance=K(h.distance,m.distance,e),h.zoom=K(h.zoom,m.zoom,e),h.target.x=K(h.target.x,m.target.x,e),h.target.y=K(h.target.y,m.target.y,e),h.target.z=K(h.target.z,m.target.z,e);let t=Math.cos(h.elevation),n=Math.sin(h.elevation),r=Math.cos(h.azimuth),i=Math.sin(h.azimuth),a=_();if(a.position.set(h.target.x+h.distance*t*i,h.target.y+h.distance*n,h.target.z+h.distance*t*r),a.lookAt(h.target),a.isOrthographicCamera){let e=h.zoom,t=e*f;a.left=-t,a.right=t,a.top=e,a.bottom=-e,a.updateProjectionMatrix()}}function T(e,t,n,r=!1){m.target.set(e,t,n),r&&h.target.copy(m.target)}function E(e,t=!1){m.zoom=p.clamp(e,be,xe),t&&(h.zoom=m.zoom)}return{get camera(){return _()},get mode(){return d},get azimuth(){return h.azimuth},setTarget:T,setZoom:E,get styleT(){return d===W.PERSPECTIVE?p.clamp((h.distance-Se)/(Ce-Se),0,1):p.clamp((h.zoom-we)/(G-we),0,1)},setMode:v,orbit:y,zoomBy:b,pan:x,setViewport:C,update:w}}var De={value:0},Oe=new B(`#ffffff`),ke={value:0},Ae={value:0},je={value:0},Me=new H,Ne={value:0},Pe={value:0},q=`
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
#include <shadowmask_pars_fragment>`)}var Ie=`col *= mix(1.0, getShadowMask(), uVecShadow);`;function Le(e,{color:t,id:n,windowGlow:r,winColors:i=[`#ffb852`,`#8cd9ff`],litFrac:a=.55}={}){let o=[0,1,2].map(e=>new B(i[e]??i[i.length-1]));return e.customProgramCacheKey=()=>`lgr-vec-tower`,e.onBeforeCompile=e=>{J(e),e.uniforms.uWindowGlow=r,e.uniforms.uWinId={value:n},e.uniforms.uVecColor={value:new B(t)},e.uniforms.uWinA={value:o[0]},e.uniforms.uWinB={value:o[1]},e.uniforms.uWinC={value:o[2]},e.uniforms.uWinLit={value:a},e.vertexShader=Fe(e.vertexShader),e.fragmentShader=Y(X(e.fragmentShader.replace(`#include <common>`,`#include <common>
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
        }`)))},e}function Z(e,{color:t=null,glow:n=null,glowDay:r=0,glowNight:i=1,windowGlow:a=null,season:o=!1}={}){let s=t===null,c=n!==null&&a!==null;return e.customProgramCacheKey=()=>`lgr-vec|`+(s?`d`:`c`)+(c?`g`:``)+(o?`s`:``),e.onBeforeCompile=e=>{J(e),s||(e.uniforms.uVecColor={value:new B(t)}),c&&(e.uniforms.uGlow={value:new B(n)},e.uniforms.uGlowDay={value:r},e.uniforms.uGlowNight={value:i},e.uniforms.uWindowGlow=a),o&&(e.uniforms.uSeason=Pe),e.vertexShader=Fe(e.vertexShader);let l=s?`diffuseColor.rgb`:`uVecColor`,u=o?`seasonShift(${l})`:l,d=(s?``:`uniform vec3 uVecColor;
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
        }`)));c&&(p=p.replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>\n  totalEmissiveRadiance += ${f};`)),e.fragmentShader=p},e}function Re(e){let t=e>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function ze(e){let t=Re(e);return{next:t,range:(e,n)=>e+(n-e)*t(),int:(e,n)=>e+Math.floor(t()*(n-e+1)),pick:e=>e[Math.floor(t()*e.length)],chance:e=>t()<e}}var Be=[{key:`manhattan`,name:`Manhattan`,towers:[`#EDE3C8`,`#D9B98A`,`#B5562F`,`#A8C8E8`,`#2E3F5C`],ground:`#7CC455`,street:`#9AA0A6`,sidewalk:`#C8CCD0`,park:`#5DB347`,water:`#29A8D8`,shopfronts:[`#C04A3A`,`#3A7AC0`,`#C09A2A`],glass:`#7FA8CC`,winColors:[`#ffd27a`,`#9ad6ff`],hMax:4.6,sigma:.36,roofRate:.35,pSplit:.6,nightLit:.55,roofTint:null,coast:{base:.55,out:1,in:.6,jag:1.05},landmarks:[`empireState`,`chrysler`,`liberty`]},{key:`paris`,name:`Paris`,towers:[`#E8DCC0`,`#F2EAD6`,`#E0D2B4`],ground:`#8CC46A`,street:`#A8A29A`,sidewalk:`#D4CEC2`,park:`#6DB35A`,water:`#3FA8C8`,shopfronts:[`#C04A3A`,`#3A6B5A`,`#7A5AC0`],glass:`#5A6B7A`,winColors:[`#ffdca0`,`#ffcaa0`],hMax:1.5,sigma:.9,roofRate:.15,pSplit:.75,nightLit:.45,roofTint:`#6A7886`,coast:{base:1.05,out:.55,in:.3,jag:.5},landmarks:[`eiffel`,`arcDeTriomphe`,`sacreCoeur`]},{key:`neoTokyo`,name:`Neo-Tokyo`,towers:[`#2A3038`,`#3A4250`,`#252B36`,`#4A4456`],ground:`#3A4A42`,street:`#5A6068`,sidewalk:`#7A8088`,park:`#2E5E46`,water:`#0E6878`,shopfronts:[`#E8483A`,`#5AE8E0`,`#E85AA0`],glass:`#5AE8E0`,winColors:[`#5AE8E0`,`#E85AA0`,`#E8E06A`],hMax:5.2,sigma:.42,roofRate:.6,pSplit:.6,nightLit:.7,roofTint:null,coast:{base:.7,out:1.05,in:.62,jag:1.7},landmarks:[`tokyoTower`,`pagoda`,`neonBillboard`]}];Be.map(e=>e.key);var Q=.3,Ve=1.9,He=.55,Ue=2.45,We=.12,Ge=.6,Ke=6,qe={BASE:.7,OUT:.95,IN:.55,JAG:1,SAMPLES_PER_EDGE:28,HARBOR_DEPTH:.55,HARBOR_WIDTH:.26},Je={PLINTH_TOP:Q,BLOCK:Ve,STREET:He,PITCH:Ue,SIDEWALK:We,SHORE:Ge,N:Ke,COAST:qe};function Ye(e,t,n){let r=n?.base??qe.BASE,i=n?.out??qe.OUT,a=n?.in??qe.IN,o=n?.jag??qe.JAG,s=t+r,c=ze((e^789079)>>>0),l=[2,3,5,8,11,13].map(e=>({k:e,amp:1/e*o**((e-2)/6),phase:c.range(0,Math.PI*2)})),u=l.reduce((e,t)=>e+t.amp,0),d=e=>{let t=0;for(let n of l)t+=n.amp*Math.sin(n.k*e*Math.PI*2+n.phase);return Math.max(-1,Math.min(1,t/(u*.6)))},f=[{fix:+s,nx:1,nz:0,sign:1},{fix:+s,nx:0,nz:1,sign:-1},{fix:-s,nx:-1,nz:0,sign:-1},{fix:-s,nx:0,nz:-1,sign:1}],p=t+.22,m=qe.SAMPLES_PER_EDGE,h=4*m,g=[],_=0;for(let e=0;e<4;e++){let t=f[e];for(let n=0;n<m;n++,_++){let o=n/m,c=_/h,l=(-s+2*s*o)*t.sign,u=d(c),f=u>=0?u*i:u*a;if(e===0){let e=Math.abs(o-.5);if(e<qe.HARBOR_WIDTH){let t=.5+.5*Math.cos(e/qe.HARBOR_WIDTH*Math.PI);f-=(r+qe.HARBOR_DEPTH)*t}}let v,y;t.nx===0?(y=t.fix+t.nz*f,v=l,y=t.nz>0?Math.max(y,p):Math.min(y,-p)):(v=t.fix+t.nx*f,y=l,v=t.nx>0?Math.max(v,p):Math.min(v,-p)),g.push(new H(v,y))}}return{points:g,B:s,maxR:s+i,harborX:p}}function Xe(e){(Array.isArray(e)?e:[e]).forEach(e=>e&&e.dispose&&e.dispose())}function Ze({seed:e=1,profileIndex:t=0,landmarkFactory:n=null,windowGlow:i}){let a=new r,s=new r,c=new r;s.raycast=()=>{},c.raycast=()=>{},a.add(s,c);let u=new ce(16773594,3);u.position.set(.45,.6,-.65).multiplyScalar(10);let d=new b(7313331,2762272,1);a.add(u,d);let f=0,p=[],m={seed:e,profileIndex:t,profile:Be[t],extent:0,meshCount:0};function h(e,t,n,r){let i=new g(new O(e,.04,t),Z(new l({color:r,roughness:.95,flatShading:!0}),{color:r}));return i.position.y=n,i.userData.ground=!0,i}function v(e,t){for(let e of s.children)e.geometry&&e.geometry.dispose(),Xe(e.material);s.clear();for(let e of c.children)e.traverse(e=>{e.isMesh&&Xe(e.material)});c.clear(),p.length=0,f=0;let r=ze(e),i=Be[t],a=(Ke-1)/2*Ue,o=7.075;m={seed:e,profileIndex:t,profile:i,extent:o+(i.coast?.base??qe.BASE),meshCount:0};let u=Ye(e,o,i.coast);m.coast=u;let d=new E;u.points.forEach((e,t)=>t?d.lineTo(e.x,e.y):d.moveTo(e.x,e.y)),d.closePath();let _=new g(new ee(d,{depth:2,bevelEnabled:!1,steps:1}),Z(new l({color:i.ground,roughness:.9,flatShading:!0,side:2}),{color:i.ground}));_.rotation.x=-Math.PI/2,_.position.y=Q-2,_.userData.ground=!0,s.add(_);let v=2*7.195;s.add(h(v,v,.32,i.street)),C(u.harborX,i);let b=[];for(let e=0;e<Ke;e++)for(let t=0;t<Ke;t++)b.push([e,t]);let T=new Set,D=Math.max(1,Math.round(b.length*.08));for(;T.size<D;)T.add(r.int(0,b.length-1));let O=r.range(-2.45*.6,Ue*.6),k=r.range(-2.45*.6,Ue*.6),A=Math.hypot(a,a),j=[];if(b.forEach(([e,t],n)=>{let a=(e-(Ke-1)/2)*Ue,o=(t-(Ke-1)/2)*Ue;if(s.add(h(Ve,Ve,.32999999999999996,i.sidewalk).translateX(a).translateZ(o)),T.has(n)){s.add(h(Ve-We*2,Ve-We*2,.35,i.park).translateX(a).translateZ(o));let e=r.int(3,5);for(let t=0;t<e;t++)w(a+r.range(-.6,.6),o+r.range(-.6,.6),i,r);return}let c=Ve-We*2,l=r.chance(i.pSplit)?2:1,u=r.chance(i.pSplit)?2:1,d=c/l,f=c/u;for(let e=0;e<l;e++)for(let t=0;t<u;t++){let n=a-c/2+d*(e+.5),s=o-c/2+f*(t+.5),l=Math.max(.6,d-.1),u=Math.max(.6,f-.1),p=Math.hypot(n-O,s-k)/A,m=Math.exp(-(p*p)/(2*i.sigma*i.sigma)),h=Math.max(.5,.5+(i.hMax-.5)*m*r.range(.75,1.25));h>i.hMax*.5&&Math.min(l,u)>=.7&&j.push({lx:n,lz:s,fw:l,fd:u,h,r:p}),y(n,s,l,u,h,i,r)}}),n&&n.ready){j.sort((e,t)=>e.r-t.r);let e=[],t=i.landmarks;for(let r=0;r<t.length&&j.length;r++){let a=null;for(let t of j)if(e.every(e=>Math.hypot(e.lx-t.lx,e.lz-t.lz)>Ue*.9)){a=t;break}a||=j[0],e.push(a),x(a.lx,a.lz);let o=i.hMax*n.heightFactor(t[r]),s=n.make(t[r],{x:a.lx,z:a.lz,w:a.fw,d:a.fd,h:o,plinthTop:Q});if(s){c.add(s);let e=new P().setFromObject(s);S(e.min.x-.15,e.max.x+.15,e.min.z-.15,e.max.z+.15)}}}s.traverse(e=>{e.isMesh&&(e.userData.ground?(e.castShadow=!1,e.receiveShadow=!0):e.material&&e.material.isMeshBasicMaterial?(e.castShadow=!1,e.receiveShadow=!1):(e.castShadow=!0,e.receiveShadow=!0))}),c.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),m.meshCount=s.children.length+c.children.length;let M=0;for(let e of s.children){let t=e.position;M=(Math.imul(M,16777619)^(Math.round(t.x*100)*2654435761^Math.round(t.y*100)*40503^Math.round(t.z*100)*2246822519))>>>0}for(let e of m.coast.points)M=(Math.imul(M,16777619)^(Math.round(e.x*100)*2654435761^Math.round(e.y*100)*40503))>>>0;m.sig=M,window.__city={seed:e,profile:i.key,meshes:m.meshCount,sig:M}}function y(e,t,n,r,a,c,u){let d=Le(new l({flatShading:!0,roughness:.7,metalness:.05}),{color:u.pick(c.towers),id:++f,windowGlow:i,winColors:c.winColors,litFrac:c.nightLit}),m=new g(new O(n,a,r),d);if(m.position.set(e,Q+a/2,t),m.userData.lot=[e,t],s.add(m),c.roofTint){let i=Z(new l({color:c.roofTint,roughness:.85,flatShading:!0}),{color:c.roofTint}),o=new g(new O(n*1.02,.08,r*1.02),i);o.position.set(e,Q+a+.04,t),o.userData.lot=[e,t],s.add(o)}if(a<1.4){let i=u.pick(c.shopfronts),a=new g(new O(n*1.04,.18,r*1.04),Z(new l({color:i,roughness:.8,flatShading:!0}),{color:i}));a.position.set(e,.39,t),a.userData.lot=[e,t],s.add(a)}let h=Q+a,v=n,y=r;if(a>c.hMax*.5&&u.chance(.55)){let o=n*u.range(.5,.72),d=r*u.range(.5,.72),p=a*u.range(.18,.4),m=new g(new O(o,p,d),Le(new l({flatShading:!0,roughness:.7,metalness:.05}),{color:u.pick(c.towers),id:++f,windowGlow:i,winColors:c.winColors,litFrac:c.nightLit}));m.position.set(e,Q+a+p/2,t),m.userData.lot=[e,t],s.add(m),h=Q+a+p,v=o,y=d}if(a>c.hMax*.45&&u.chance(c.roofRate)){let n=u.chance(.5)?new g(new O(v*.4,.18,y*.4),Z(new l({color:`#9a9a9a`,flatShading:!0}),{color:`#9a9a9a`})):new g(new N(v*.18,v*.18,.22,10),Z(new l({color:`#b9bec4`,flatShading:!0}),{color:`#b9bec4`}));if(n.position.set(e+u.range(-.1,.1),h+.11,t+u.range(-.1,.1)),n.userData.lot=[e,t],s.add(n),u.chance(.25)){let n=new g(new _(.05,6,5),new o({color:`#ff3b30`,transparent:!0,opacity:1}));n.position.set(e,h+.15,t),n.userData.lot=[e,t],n.raycast=()=>{},s.add(n),p.push({mesh:n,phase:u.range(0,6.28)})}}if(a>c.hMax*.7&&u.chance(.35)){let n=a*u.range(.18,.34),r=new g(new N(.018,.05,n,6),Z(new l({color:`#c8ccd2`,flatShading:!0}),{color:`#c8ccd2`}));r.position.set(e,h+n/2,t),r.userData.lot=[e,t],r.raycast=()=>{},s.add(r)}}function x(e,t){for(let n=s.children.length-1;n>=0;n--){let r=s.children[n];r.userData.lot&&Math.abs(r.userData.lot[0]-e)<1e-4&&Math.abs(r.userData.lot[1]-t)<1e-4&&(r.geometry&&r.geometry.dispose(),Xe(r.material),s.remove(r))}for(let e=p.length-1;e>=0;e--)p[e].mesh.parent||p.splice(e,1)}function S(e,t,n,r){for(let i=s.children.length-1;i>=0;i--){let a=s.children[i];a.userData.lot&&a.position.x>=e&&a.position.x<=t&&a.position.z>=n&&a.position.z<=r&&(a.geometry&&a.geometry.dispose(),Xe(a.material),s.remove(a))}}function C(e,t){let n=Z(new l({color:`#7a5634`,roughness:.95,flatShading:!0}),{color:`#7a5634`}),r=(e,t,r,i)=>{let a=new g(new O(e,.06,t),n);a.position.set(r,Q-.16,i),s.add(a)};r(.24,2,e+.02,0),r(1.3,.22,e+.7,-.72),r(1.3,.22,e+.7,.72)}function w(e,t,n,r){let i=new B(n.park),a=(n,a)=>{let o=i.clone().offsetHSL(0,0,r.range(-.06,.06)).getStyle(),c=new g(new _(n,7,6),Z(new l({color:o,flatShading:!0}),{color:o,season:!0}));c.scale.y=.7,c.position.set(e,Q+a,t),c.userData.lot=null,s.add(c)},o=new g(new O(.05,.18,.05),Z(new l({color:`#6b4a2a`,flatShading:!0}),{color:`#6b4a2a`}));o.position.set(e,.39,t),s.add(o),a(.22,.28),a(.16,.46)}function T(e){for(let t of p)t.mesh.material.opacity=.35+.65*(.5+.5*Math.sin(e*3+t.phase))}return v(e,t),{group:a,key:u,fill:d,update:T,generate:v,get state(){return m},get extent(){return m.extent},get waterColor(){return m.profile.water},profiles:Be}}var Qe=Math.PI*2,$e=.7,et=90,tt=[{name:`night`,sun:`#4a6f9e`,intensity:.35,hemiSky:`#26344f`,hemiGround:`#0c1018`,horizon:`#1e2942`,sky:`#36486e`,exposure:.95,outline:`#101a30`,window:1,toonGain:2.6},{name:`dawn`,sun:`#ff9e54`,intensity:2.4,hemiSky:`#8a7686`,hemiGround:`#2a1f1a`,horizon:`#b8512c`,sky:`#ffb070`,exposure:1.05,outline:`#241826`,window:.3,toonGain:2},{name:`noon`,sun:`#fff4e0`,intensity:4.6,hemiSky:`#9cb8cc`,hemiGround:`#33302a`,horizon:`#5e7689`,sky:`#aacadd`,exposure:1.18,outline:`#0b0a08`,window:0,toonGain:1.7},{name:`dusk`,sun:`#ff6b35`,intensity:2,hemiSky:`#7a566a`,hemiGround:`#281a18`,horizon:`#b0432a`,sky:`#ff8a5a`,exposure:1.05,outline:`#1f1420`,window:.4,toonGain:2}],nt=e=>e-Math.floor(e),rt=(e,t,n)=>e+(t-e)*n,it=(e,t,n)=>e+(t-e)*(1-Math.exp(-6*n));function at({t:e=.5}={}){let t=e,n=e,r=!1,i=!1,a=tt.map(e=>({name:e.name,sun:new B(e.sun),hemiSky:new B(e.hemiSky),hemiGround:new B(e.hemiGround),horizon:new B(e.horizon),sky:new B(e.sky),outline:new B(e.outline),intensity:e.intensity,exposure:e.exposure,window:e.window,toonGain:e.toonGain})),o=new R(0,1,0),s=new B(`#fff4e0`),c=new B(`#6f97b3`),l=new B(`#2a2620`),u=new B(`#3a4a57`),d=new B(`#7da3bd`),f=new B(`#0b0a08`),p=new B(`#000000`),m=3,h=1,g=0,_=1.7,v=new R;function y(e){let t=nt(e)*4,n=Math.floor(t)%4,r=(n+1)%4,i=t-Math.floor(t),y=a[n],b=a[r];s.lerpColors(y.sun,b.sun,i),c.lerpColors(y.hemiSky,b.hemiSky,i),l.lerpColors(y.hemiGround,b.hemiGround,i),u.lerpColors(y.horizon,b.horizon,i),d.lerpColors(y.sky,b.sky,i),f.lerpColors(y.outline,b.outline,i),m=rt(y.intensity,b.intensity,i),h=rt(y.exposure,b.exposure,i),g=rt(y.window,b.window,i),_=rt(y.toonGain,b.toonGain,i),p.setRGB(.045*g,.075*g,.14*g);let x=nt(e)*Qe-Math.PI/2,S=Math.cos(x),C=Math.sin(x);v.set(S,C*Math.cos($e),C*Math.sin($e)),v.y>=0?o.copy(v):o.copy(v).negate()}return y(t),{sunDir:o,sunColor:s,hemiSky:c,hemiGround:l,horizon:u,sky:d,outline:f,toonFloor:p,sunArc:v,get sunIntensity(){return m},get exposure(){return h},get windowGlow(){return g},get toonGain(){return _},get t(){return nt(t)},get auto(){return r},get clock(){let e=Math.round(nt(t)*24*60)%1440;return`${String(Math.floor(e/60)).padStart(2,`0`)}:${String(e%60).padStart(2,`0`)}`},cyclePreset(){n=(Math.floor(t*4+1e-4)+1)/4},nudge(e){n+=e/24},goTo(e){n=e},toggleAuto(){r=!r},setReducedMotion(e){i=e},update(e){r&&!i&&(n+=e/et),t=it(t,n,e),y(t)}}}function ot(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.35,`rgba(255,255,255,0.55)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new k(e);return r.colorSpace=u,r}function st(e,t){let n=[];for(let r=0;r<16;r++){let i=r/16*Math.PI*2;n.push(new R(Math.cos(i)*e,t,Math.sin(i)*e))}return new U(n,!0,`catmullrom`,.5)}function ct(e){let t=(t,n)=>Math.exp(-((e-t)*(e-t))/(2*n*n)),n=Math.max(t(.33,.05),t(.75,.06)),r=p.smoothstep(e,.24,.3)*(1-p.smoothstep(e,.8,.88));return p.clamp(.15+.55*r+.45*n,.12,1)}function lt(){let{PITCH:e,N:t,PLINTH_TOP:n}=Je,r=t+1,i=n+.04,a=n=>(n-t/2)*e,o=t/2,s=[],c=(e,t)=>t*r+e;for(let e=0;e<r;e++)for(let t=0;t<r;t++)s.push({x:a(t),z:a(e),i:t,j:e,edges:[]});let l=[],u=(t,n)=>{let r=(s[t].i===o||s[t].j===o)&&(s[n].i===o||s[n].j===o),i=l.length;l.push({a:t,b:n,len:e,main:r}),s[t].edges.push(i),s[n].edges.push(i)};for(let e=0;e<r;e++)for(let t=0;t<r;t++)t<r-1&&u(c(t,e),c(t+1,e)),e<r-1&&u(c(t,e),c(t,e+1));return{nodes:s,edges:l,y:i,mid:o}}function ut({plinthTop:e=.3,extent:t=4,profile:n=null}={}){let i=new r,c=lt(),{nodes:u,edges:d}=c,f=c.y,m=.34,h=0;{let e=Je.PITCH-m*2;h=Math.max(1,Math.floor((e+.26)/.56))}let g=new o({color:`#e8c84a`,fog:!0}),_=new a(new O(.05,.012,.3),g,d.length*h);_.frustumCulled=!1,_.raycast=()=>{},_.receiveShadow=!1,_.castShadow=!1,i.add(_);{let e=new v,t=0;for(let n of d){let r=u[n.a],i=u[n.b],a=i.x-r.x,o=i.z-r.z,s=Math.hypot(a,o),c=a/s,l=o/s,d=Math.atan2(c,l),p=s-m*2;for(let n=0;n<h;n++){let i=m+(h===1?p/2:p*n/(h-1));e.position.set(r.x+c*i,f,r.z+l*i),e.rotation.set(0,d,0),e.updateMatrix(),_.setMatrixAt(t++,e.matrix)}}_.instanceMatrix.needsUpdate=!0}let y=new a(new O(.34,.26,.74),Z(new l({flatShading:!0,roughness:.5,metalness:.3})),12);y.castShadow=!0,y.receiveShadow=!1,y.frustumCulled=!1,y.raycast=()=>{};let b=new V,x=new Float32Array(72),S=new Float32Array(72),w=new B(`#fff0c0`),T=new B(`#ff3528`);for(let e=0;e<12;e++)w.toArray(S,e*3),T.toArray(S,(12+e)*3),x[e*3+1]=-50,x[(12+e)*3+1]=-50;b.setAttribute(`position`,new z(x,3)),b.setAttribute(`color`,new z(S,3));let E=new s({size:.72,sizeAttenuation:!0,map:ot(),vertexColors:!0,transparent:!0,opacity:0,blending:2,depthWrite:!1}),D=new C(b,E);D.frustumCulled=!1,D.raycast=()=>{},i.add(y,D);let ee=[`#f4c430`,`#c0392b`,`#d8dde2`,`#9aa7b4`,`#6b7785`,`#5a7d9a`],k=Re(2403557),A=d.map((e,t)=>t).filter(e=>d[e].main),j=[];for(let e=0;e<12;e++){let t=e<4&&A.length?A[k()*A.length|0]:k()*d.length|0,n=e===1;j.push({edge:t,fwd:k()<.5,s:k()*d[t].len,speed:n?.5:.78+e%3*.1,lenZ:n?1.45:1,color:ee[n?1:e===0?0:2+e%4],rng:Re(12648430+e*2654435761)})}let M=new B;j.forEach((e,t)=>y.setColorAt(t,M.set(e.color)));function te(e,t,n){let r=u[e],i=r.edges.filter(e=>e!==t);if(i.length===0)return t;let a=d[t],o=a.a===e?a.b:a.a,s=r.x-u[o].x,c=r.z-u[o].z,l=Math.hypot(s,c)||1,f=i[0],p=-2;for(let t of i){let n=d[t],i=n.a===e?n.b:n.a,a=u[i].x-r.x,o=u[i].z-r.z,m=Math.hypot(a,o)||1,h=s/l*(a/m)+c/l*(o/m);h>p&&(p=h,f=t)}return n()<.65?f:i[n()*i.length|0]}let N=te,P=new v,F=(e,t)=>{P.position.set(0,-50,0),P.scale.setScalar(0),P.updateMatrix(),e.setMatrixAt(t,P.matrix)},I=.085,L=Je.PLINTH_TOP+.02+.13,re=new a(new ne(.04,.1,3,6),Z(new l({flatShading:!0,roughness:.8})),14);re.castShadow=!0,re.receiveShadow=!1,re.frustumCulled=!1,re.raycast=()=>{};let ie=st(t-.72,e),ae=[];for(let e=0;e<14;e++)ae.push({phase:e/14,speed:.12+e%4*.02,dir:e%2?1:-1});let oe=new R,se=new R,H=new B;ae.forEach((e,t)=>re.setColorAt(t,H.set([`#caa`,`#9ab`,`#bba`,`#ab9`][t%4]))),i.add(re);let U={manhattan:`#e8c84a`,paris:`#dcd2bc`,neoTokyo:`#5ae8e0`};function ce(e){e&&g.color.set(U[e.key]||`#e8c84a`)}ce(n);function le(t,n,r){let i=r?r.t:.5,a=r?r.windowGlow:0,o=Math.max(2,Math.round(ct(i)*12)),s=a>.05;for(let e=0;e<12;e++){if(e>=o){F(y,e),x[e*3+1]=-50,x[(12+e)*3+1]=-50;continue}let n=j[e];n.s+=t*n.speed;let r=0;for(;n.s>=d[n.edge].len&&r++<4;){n.s-=d[n.edge].len;let e=n.fwd?d[n.edge].b:d[n.edge].a,t=N(e,n.edge,n.rng);n.edge=t,n.fwd=d[t].a===e}let i=d[n.edge],a=n.fwd?u[i.a]:u[i.b],c=n.fwd?u[i.b]:u[i.a],l=c.x-a.x,f=c.z-a.z,p=Math.hypot(l,f)||1,m=l/p,h=f/p,g=-h,_=m,v=a.x+m*n.s+g*I,b=a.z+h*n.s+_*I,S=Math.atan2(m,h);P.position.set(v,L,b),P.rotation.set(0,S,0),P.scale.set(1,1,n.lenZ),P.updateMatrix(),y.setMatrixAt(e,P.matrix);let C=.74*n.lenZ*.5,w=L+.06,T=e*3,E=(12+e)*3;s?(x[T]=v+m*(C+.04),x[T+1]=w,x[T+2]=b+h*(C+.04),x[E]=v-m*(C+.02),x[E+1]=w,x[E+2]=b-h*(C+.02)):(x[T+1]=-50,x[E+1]=-50)}y.instanceMatrix.needsUpdate=!0,b.attributes.position.needsUpdate=!0,E.opacity=p.clamp(a*1.8,0,1);let c=Math.max(2,Math.round(ct(i)*14));for(let t=0;t<14;t++){if(t>=c){F(re,t);continue}let r=ae[t],i=(r.phase+r.dir*r.speed*n*.02+1e3)%1;ie.getPointAt(i,oe),ie.getTangentAt(i,se);let a=Math.sin(n*6+r.phase*30)*.015;P.position.set(oe.x,e+.09+a,oe.z),P.rotation.set(0,Math.atan2(se.x*r.dir,se.z*r.dir),Math.sin(n*6+r.phase*30)*.06),P.scale.setScalar(1),P.updateMatrix(),re.setMatrixAt(t,P.matrix)}re.instanceMatrix.needsUpdate=!0}return{group:i,update:le,setProfile:ce,graph:c,setRouter(e){N=e||te}}}function dt({frames:e,fps:t=8,cols:n,rows:r=1}={}){let i=n||e||4,a=r||1,o=e||i*a,s=typeof window<`u`&&window.matchMedia?window.matchMedia(`(prefers-reduced-motion: reduce)`):null;function c(e,t){let n=t%i,r=Math.floor(t/i);e.offset.x=n/i,e.offset.y=1-(r+1)/a}function l(e){let t=e.clone();return t.needsUpdate=!0,t.repeat.set(1/i,1/a),c(t,0),t}function u(e,n,r=0){if(s&&s.matches)return c(e,0),0;let i=(Math.floor(n*t+r)%o+o)%o;return c(e,i),i}function d(e,t){let n=(Math.round(t)%o+o)%o;return c(e,n),n}return{frames:o,fps:t,cols:i,rows:a,makeInstanceTexture:l,step:u,setFrame:d}}function ft(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.4,`rgba(255,255,255,0.5)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new k(e);return r.colorSpace=u,r}function pt(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64*.62,0,64/2,64*.62,64*.5);n.addColorStop(0,`rgba(240,250,255,0.95)`),n.addColorStop(1,`rgba(240,250,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new k(e);return r.colorSpace=u,r}function mt(){let e=document.createElement(`canvas`);e.width=256,e.height=64;let t=e.getContext(`2d`);t.strokeStyle=`#ffffff`,t.lineWidth=6,t.lineCap=`round`,t.lineJoin=`round`;let n=[14,24,36,24];for(let e=0;e<4;e++){let r=e*64,i=n[e];t.beginPath(),t.moveTo(r+8,40),t.quadraticCurveTo(r+24,i,r+32,36),t.quadraticCurveTo(r+40,i,r+56,40),t.stroke()}let r=new k(e);return r.colorSpace=u,r}function ht(e,t,n=18){let r=[];for(let i=0;i<n;i++){let a=i/n*Math.PI*2;r.push(new R(Math.cos(a)*e,t,Math.sin(a)*e))}return new U(r,!0,`catmullrom`,.5)}function gt(e,t,n){let r=e-t,i=[],a=(e,t)=>i.push(new R(e,n,t)),o=(e,n,r,i,o=4)=>{for(let s=1;s<=o;s++){let c=r+(i-r)*(s/o);a(e+Math.cos(c)*t,n+Math.sin(c)*t)}};for(let t=0;t<4;t++)a(e,-r+2*r*t/4);o(r,r,0,Math.PI/2);for(let t=0;t<4;t++)a(r-2*r*t/4,e);o(-r,r,Math.PI/2,Math.PI);for(let t=0;t<4;t++)a(-e,r-2*r*t/4);o(-r,-r,Math.PI,1.5*Math.PI);for(let t=0;t<4;t++)a(-r+2*r*t/4,-e);return o(r,-r,1.5*Math.PI,2*Math.PI),new U(i,!0,`catmullrom`,.5)}function _t({extent:t=8,waterSize:n=28,plinthTop:i=.3}={}){let a=new r;a.raycast=()=>{};let o=.06,c=(e,t,r)=>r.set(e/n+.5,-t/n+.5,0),u=[gt(9.5,3,o),ht(12.7,o),new U([new R(8.4,o,0),new R(11,o,-3.6),new R(13,o,0),new R(11,o,3.6)],!0,`catmullrom`,.5)],d=u.map(e=>e.getLength());function f({scale:e=1,hull:t=`#6b7785`,cabin:n=`#e7ecf2`}){let i=new r,a=new g(new O(.46*e,.2*e,1.1*e),Z(new l({color:t,roughness:.6,metalness:.2,flatShading:!0}),{color:t}));a.position.y=.02;let o=new g(new O(.3*e,.22*e,.42*e),Z(new l({color:n,roughness:.7,flatShading:!0}),{color:n}));return o.position.set(0,.18*e,.08*e),i.add(a,o),i.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!1),e.raycast=()=>{}}),i.userData.halfLen=.55*e,i}let m=[{laneIndex:0,dir:1,speed:.5,wake:.024,scale:1,hull:`#5a6675`,cabin:`#e7ecf2`},{laneIndex:1,dir:-1,speed:.42,wake:.022,scale:1,hull:`#7a5b46`,cabin:`#d9c3a6`},{laneIndex:0,dir:1,speed:.56,wake:.024,scale:.9,hull:`#456079`,cabin:`#cfe0ee`},{laneIndex:2,dir:1,speed:.34,wake:.03,scale:1.35,hull:`#39505f`,cabin:`#e2b85a`}];m.forEach((e,t)=>{e.mesh=f(e),e.u=t*.27%1,e.phase=t*1.7,e.isFerry=e.laneIndex===2,a.add(e.mesh)});let h=m.length,v=h*2,y=new V,b=new Float32Array(v*3).fill(-50),x=new Float32Array(v*3),S=new B(`#fff0c0`),w=new B(`#ff3528`);for(let e=0;e<h;e++)S.toArray(x,e*3),w.toArray(x,(h+e)*3);y.setAttribute(`position`,new z(b,3)),y.setAttribute(`color`,new z(x,3));let T=new C(y,new s({size:.6,sizeAttenuation:!0,map:ft(),vertexColors:!0,transparent:!0,opacity:0,blending:2,depthWrite:!1}));T.frustumCulled=!1,T.raycast=()=>{},a.add(T);function E(e,t){let n=new g(new _(e,9,7),Z(new l({color:t,roughness:.5,flatShading:!0}),{color:t}));return n.scale.set(.55,.5,1),n.castShadow=!1,n.receiveShadow=!1,n.raycast=()=>{},n.position.y=-5,n}let D=[{x:-9.5,z:6,size:.18,color:`#5b6f86`,period:11,arcH:.55,span:1.1,whale:!1},{x:7.5,z:-9.5,size:.16,color:`#4a6076`,period:14,arcH:.5,span:1,whale:!1},{x:-7,z:-8.5,size:.2,color:`#607089`,period:9,arcH:.6,span:1.2,whale:!1},{x:10.5,z:7,size:.62,color:`#3a4350`,period:38,arcH:.9,span:2.6,whale:!0}];D.forEach((t,n)=>{t.mesh=E(t.size,t.color),t.heading=Math.atan2(-t.x,-t.z),t.t=n/D.length*t.period,t.splashed=!1,a.add(t.mesh),t.whale&&(t.spout=new e(new j({map:pt(),transparent:!0,opacity:0,depthWrite:!1,fog:!0})),t.spout.scale.set(.6,1.1,1),t.spout.position.set(t.x,-5,t.z),a.add(t.spout))});let ee=mt(),k=dt({frames:4,fps:7}),A=[`#ffffff`,`#cfd4da`,`#c8a06a`],M=[];for(let t=0;t<4;t++){let n=new e(new j({map:k.makeInstanceTexture(ee),color:new B(A[t%A.length]),transparent:!0,opacity:0,depthWrite:!1,fog:!0}));n.scale.setScalar(.5),M.push({sp:n,r:8.6+t*.5,y:1.1+t%2*.5,speed:(.18+t*.03)*(t%2?-1:1),phase:t*1.9}),a.add(n)}typeof window<`u`&&(window.__gullAnim={frames:k.frames,variants:A.length,fps:k.fps});let te=D.length,N=Array.from({length:h+te},()=>new R),P=e=>e.laneIndex,F=new R,I=new R,ne=new R;function L(e,t,n){let r=n?n.windowGlow:0,i=1-r;for(let n=0;n<h;n++){let i=m[n],a=u[i.laneIndex],s=d[i.laneIndex],l=i.isFerry?.45+.55*Math.min(1,Math.abs((i.u+.5)%1-.5)*3):1,f=i.u;i.u=(i.u+i.dir*e*i.speed*l/s+1)%1,(i.dir>0?i.u<f:i.u>f)&&(i.laneIndex=P(i)),a.getPointAt(i.u,F),a.getTangentAt(i.u,I);let p=I.x*i.dir,g=I.z*i.dir,_=Math.atan2(p,g),v=Math.sin(t*1.1+i.phase)*.025;i.mesh.position.set(F.x,o+v,F.z),i.mesh.rotation.set(Math.sin(t*.9+i.phase)*.04,_,0);let y=i.mesh.userData.halfLen;c(F.x-p*y,F.z-g*y,ne),N[n].set(ne.x,ne.y,i.wake);let x=n*3,S=(h+n)*3;if(r>.05){let e=.18;b[x]=F.x+p*(y+.05),b[x+1]=e,b[x+2]=F.z+g*(y+.05),b[S]=F.x-p*(y+.02),b[S+1]=e,b[S+2]=F.z-g*(y+.02)}else b[x+1]=-50,b[S+1]=-50}re(),T.material.opacity=p.clamp(r*1.8,0,1);for(let t=0;t<te;t++){let n=D[t];n.t+=e;let r=h+t,i=n.whale?3.2:1.3;if(n.t>=n.period){let e=(n.t-n.period)/i;if(e>=1){n.t=0,n.splashed=!1,n.mesh.position.y=-5,n.spout&&(n.spout.material.opacity=0),N[r].set(0,0,0);continue}let t=Math.sin(Math.PI*e),a=(e-.5)*n.span,s=n.x+Math.sin(n.heading)*a,l=n.z+Math.cos(n.heading)*a;n.mesh.position.set(s,o-.1+t*n.arcH,l),n.mesh.rotation.set(Math.cos(Math.PI*e)*.9,n.heading,0);let u=e<.16||e>.84;if(c(s,l,ne),N[r].set(ne.x,ne.y,u?n.whale?.07:.05:0),n.spout){let t=p.clamp((e-.15)*3,0,1)*(1-e);n.spout.position.set(s,.56+t*.6,l),n.spout.material.opacity=t*.9}}else n.mesh.position.y=-5,N[r].set(0,0,0),n.spout&&(n.spout.material.opacity=0)}for(let e=0;e<4;e++){let n=M[e],r=n.phase+t*n.speed*.25;n.sp.position.set(Math.cos(r)*n.r,n.y+Math.sin(t*1.4+n.phase)*.12,Math.sin(r)*n.r),n.sp.material.opacity=p.clamp(i*.9-.05,0,.85);let a=k.step(n.sp.material.map,t,n.phase);e===0&&typeof window<`u`&&(window.__gullFrame=a)}if(typeof window<`u`){let e=0;for(let t of D)t.mesh.position.y>o&&e++;window.__waterLife={boats:h,breaching:e,gulls:+M[0].sp.material.opacity.toFixed(2),lights:+T.material.opacity.toFixed(2)}}}function re(){y.attributes.position.needsUpdate=!0}function ie(){return N.length}return{group:a,update:L,wakeDrops:N,get wakeCount(){return ie()},lanes:u,setRouter(e){P=e||(e=>e.laneIndex)}}}var vt=[`empireState`,`chrysler`,`liberty`,`eiffel`,`arcDeTriomphe`,`sacreCoeur`,`tokyoTower`,`pagoda`,`neonBillboard`],yt={empireState:1.25,chrysler:1.1,liberty:.55,eiffel:3.2,arcDeTriomphe:1.5,sacreCoeur:1.75,tokyoTower:1.35,pagoda:.5,neonBillboard:.9};function bt(e){let t=()=>new l({flatShading:!0,roughness:.7,metalness:.1}),n=(n,r={})=>r.windows?Le(t(),{color:n,id:e.id(),windowGlow:e.windowGlow,winColors:e.winColors,litFrac:e.litFrac}):Z(t(),{color:n,glow:r.glow??null,glowDay:r.glowDay??0,glowNight:r.glowNight??1,windowGlow:r.glow?e.windowGlow:null});return{box:(e,t,r,i,a={})=>new g(new O(e,t,r),n(i,a)),cyl:(e,t,r,i,a={})=>new g(new N(e,t,r,a.seg||12),n(i,a)),cone:(e,t,r,i={})=>new g(new L(e,t,i.seg||8),n(r,i)),sphere:(e,t,r={})=>new g(new _(e,r.seg||12,r.seg2||8),n(t,r)),lathe:(e,t,r={})=>new g(new i(e.map(e=>new H(e[0],e[1])),r.seg||4),n(t,r))}}var $=(e,t,n,r)=>(e.position.set(t,n,r),e),xt=[`#7FB0E0`,`#E07FB0`,`#7FE0A0`,`#E0C97F`,`#9FE07F`,`#7FE0E0`,`#FF8C42`,`#E0E07F`,`#C97FE0`,`#E07F7F`,`#7F9FE0`,`#E0483A`],St={empireState(e,t){let n=`#E8E0CF`;e.add($(t.box(.42,.18,.42,n,{windows:!0}),0,.09,0)),e.add($(t.box(.34,.16,.34,n,{windows:!0}),0,.26,0)),e.add($(t.box(.26,.14,.26,n,{windows:!0}),0,.41,0)),e.add($(t.box(.19,.34,.19,n,{windows:!0}),0,.65,0)),e.add($(t.box(.13,.06,.13,n,{windows:!0}),0,.85,0));let r=xt[new Date().getMonth()];e.add($(t.cyl(.03,.045,.12,n,{seg:10,glow:r,glowNight:1.85}),0,.94,0)),e.add($(t.cone(.012,.07,n,{seg:8}),0,1.04,0))},chrysler(e,t){let n=`#C9CED4`;e.add($(t.box(.22,.55,.22,`#9AA7B4`,{windows:!0}),0,.275,0));let r=.55;for(let i=0;i<5;i++){let a=.14-i*.024,o=.07;e.add($(t.cyl(a*.7,a,o,n,{seg:8,glow:`#dfeaff`,glowNight:.5}),0,r+o/2,0)),r+=o}e.add($(t.cone(.018,.16,n,{seg:8}),0,r+.08,0))},liberty(e,t){let n=`#B9B4A6`,r=`#4FA890`;e.add($(t.box(.42,.16,.42,n),0,.08,0)),e.add($(t.box(.3,.2,.3,n),0,.26,0)),e.add($(t.cyl(.1,.15,.42,r,{seg:10}),0,.57,0)),e.add($(t.box(.11,.1,.11,r),0,.83,0));for(let n=0;n<7;n++){let i=(n/6-.5)*Math.PI*1.1;e.add($(t.cone(.012,.1,r,{seg:5}),Math.sin(i)*.1,.92,Math.cos(i)*.06-.02))}let i=$(t.cyl(.025,.03,.34,r,{seg:8}),.14,.98,0);i.rotation.z=.35,e.add(i),e.add($(t.box(.06,.06,.06,r,{glow:`#ffd060`,glowDay:.6,glowNight:1.2}),.2,1.16,0)),e.add($(t.cone(.04,.09,`#ffcf66`,{seg:6,glow:`#ffd060`,glowDay:.7,glowNight:1.3}),.2,1.24,0))},eiffel(e,t){let n=`#6E5C4C`,r=[[.2,0],[.13,.16],[.085,.33],[.055,.5],[.035,.66],[.02,.85],[0,.92]];e.add(t.lathe(r,n,{seg:4}));let i=t.lathe(r,n,{seg:4});i.rotation.y=Math.PI/4,e.add(i),e.add($(t.box(.26,.025,.26,n),0,.33,0)),e.add($(t.box(.14,.02,.14,n),0,.66,0)),e.add($(t.cone(.01,.1,n,{seg:6}),0,.97,0))},arcDeTriomphe(e,t){let r=`#D9D0C1`,i=.58,a=.5,o=.34,s=new E;s.moveTo(-.58/2,0),s.lineTo(i/2,0),s.lineTo(i/2,a),s.lineTo(-.58/2,a),s.lineTo(-.58/2,0);let c=new n,u=.15,d=.22;c.moveTo(-.15,0),c.lineTo(-.15,d),c.absarc(0,d,u,Math.PI,0,!0),c.lineTo(u,0),c.lineTo(-.15,0),s.holes.push(c);let f=new ee(s,{depth:o,bevelEnabled:!1});f.translate(0,0,-.34/2),f.computeVertexNormals(),e.add(new g(f,Z(new l({color:r,flatShading:!0}),{color:r}))),e.add($(t.box(i*1.06,.08,o*1.06,r),0,.54,0))},sacreCoeur(e,t){let n=`#F1EEE6`;e.add($(t.box(.5,.26,.4,n),0,.13,0));let r=(r,i,a,o)=>{e.add($(t.cyl(a*.9,a,i,n,{seg:12}),r,o,0));let s=$(t.sphere(a,n,{seg:12}),r,o+i/2,0);s.scale.y=1.5,e.add(s)};r(0,.22,.15,.4),r(-.2,.1,.07,.33),r(.2,.1,.07,.33)},tokyoTower(e,t){let n=`#F25822`,r=`#EDEDED`,i=0;for(let a=0;a<9;a++){let o=a/9,s=(a+1)/9,c=.19*(1-o)+.03*o,l=.19*(1-s)+.03*s,u=.085,d=a%2?r:n;e.add($(t.cyl(l,c,u,d,{seg:4,glow:n,glowDay:0,glowNight:.7}),0,i+u/2,0)),i+=u}e.add($(t.box(.22,.02,.22,n,{glow:n,glowNight:.7}),0,.28,0)),e.add($(t.box(.12,.02,.12,r),0,.5,0)),e.add($(t.cone(.012,.16,r,{seg:6,glow:`#ff6a2a`,glowNight:.9}),0,i+.08,0))},pagoda(e,t){let n=0;for(let r=0;r<5;r++){let i=.42-r*.06,a=.11;e.add($(t.box(i,a,i,`#B23A2C`,{windows:r<4}),0,n+a/2,0)),e.add($(t.box(i*1.34,.03,i*1.34,`#7A3B2A`),0,n+a+.015,0)),n+=.16999999999999998}e.add($(t.cyl(.012,.012,.1,`#E0C040`,{seg:6}),0,n+.05,0)),e.add($(t.sphere(.03,`#E0C040`,{seg:8,glow:`#ffe680`,glowNight:.8}),0,n+.12,0))},neonBillboard(e,t){let n=`#20242C`;e.add($(t.box(.3,1,.3,n,{windows:!0}),0,.5,0));let r=[`#5AE8E0`,`#E85AA0`,`#E8E06A`],i=(n,r,i,a,o,s,c)=>{let l=$(t.box(n,r,.02,i,{glow:i,glowDay:.6,glowNight:1.1}),a,o,s);l.rotation.y=c,e.add(l)};i(.22,.34,r[0],0,.75,.16,0),i(.16,.5,r[1],.16,.5,0,Math.PI/2),i(.2,.22,r[2],0,.34,-.16,0),e.add($(t.cone(.01,.14,n,{seg:6,glow:`#E85AA0`,glowDay:.4,glowNight:1}),0,1.08,0))}};function Ct(e,t){let n=new r;return St[e](n,bt(t)),n}var wt=``+new URL(`building-skyscraper-d-CapD2Zqe.glb`,import.meta.url).href,Tt=``+new URL(`building-n-hdv8kKtN.glb`,import.meta.url).href,Et=``+new URL(`building-g-CsTB1qH9.glb`,import.meta.url).href,Dt=``+new URL(`colormap-CK8fW2HB.png`,import.meta.url).href,Ot={skyscraper:{url:wt,color:`#9cc1dd`,fill:.92},midrise:{url:Tt,color:`#c9a07a`,fill:.96},setback:{url:Et,color:`#d9c7a0`,fill:.9}};function kt({windowGlow:e}){let t=new F;t.setURLModifier(e=>e.includes(`colormap.png`)?Dt:e);let n=new se(t),r={},i=!1,a=Promise.all(Object.entries(Ot).map(async([e,t])=>{r[e]=(await n.loadAsync(t.url)).scene})).then(()=>{i=!0,window.__landmarksReady=!0}).catch(e=>console.error(`landmark models failed:`,e)),o=9e3;function s(t,n,i={}){let a,s;if(vt.includes(t))a=Ct(t,{windowGlow:e,winColors:i.winColors,litFrac:i.litFrac,id:()=>++o}),s=1;else{let e=r[t],n=Ot[t];if(!e||!n)return null;a=e.clone(!0),s=n.fill}a.updateMatrixWorld(!0);let c=new P().setFromObject(a).getSize(new R);a.scale.setScalar(n.h*s/c.y),a.updateMatrixWorld(!0);let l=new P().setFromObject(a),u=l.getCenter(new R);return a.position.x+=n.x-u.x,a.position.z+=n.z-u.z,a.position.y+=n.plinthTop-l.min.y,vt.includes(t)?a.traverse(e=>{e.isMesh&&(e.castShadow=!1,e.raycast=()=>{})}):a.traverse(n=>{if(!n.isMesh)return;n.castShadow=!1,n.raycast=()=>{};let r=n=>Le(n.clone(),{color:Ot[t].color,id:++o,windowGlow:e,winColors:i.winColors,litFrac:i.litFrac});n.material=Array.isArray(n.material)?n.material.map(r):r(n.material)}),a}return{make:s,whenReady:a,heightFactor:e=>yt[e]??1,get ready(){return i}}}var At=[`clear`,`rain`,`snow`,`fog`];function jt({extent:e=7}={}){let t=new r;t.raycast=()=>{};let n=e+2,i=.25,s=(e,t)=>e+Math.random()*(t-e),c=new a(new x(.015,.5),new o({color:`#a9bdd6`,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),600);c.frustumCulled=!1,c.raycast=()=>{};let l=new Float32Array(600*3),u=new Float32Array(600);for(let e=0;e<600;e++)l[e*3]=s(-n,n),l[e*3+1]=s(i,11),l[e*3+2]=s(-n,n),u[e]=s(9,14);let d=new a(new x(.07,.07),new o({color:`#f3f7ff`,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),700);d.frustumCulled=!1,d.raycast=()=>{};let f=new Float32Array(700*3),p=new Float32Array(700),m=new Float32Array(700);for(let e=0;e<700;e++)f[e*3]=s(-n,n),f[e*3+1]=s(i,11),f[e*3+2]=s(-n,n),p[e]=s(0,6.28),m[e]=s(.6,1.2);t.add(c,d);let h=Array.from({length:8},()=>new R),g=0,_=`clear`,y=0,b=0,S=0,C=0,w=0,T=new v,E=(e,t,n,r)=>e+(t-e)*Math.min(1,n*r);function D(e){At.includes(e)&&(_=e)}function O(){_=At[(At.indexOf(_)+1)%At.length]}function ee(e,t){let r=_===`rain`,a=_===`snow`,o=_===`fog`,v=_!==`clear`;y=E(y,+!!v,e,1.4),b=E(b,+!!v,e,1.2),S=E(S,+!!o,e,.9),w=E(w,v&&!o?1:0,e,1),C=E(C,+!!a,e,a?.22:.5);let x=r?y:0,D=Math.round(600*x);for(let t=0;t<600;t++){if(t>=D){T.position.set(0,-50,0),T.scale.setScalar(0),T.updateMatrix(),c.setMatrixAt(t,T.matrix);continue}l[t*3+1]-=u[t]*e,l[t*3]+=e*1.1,l[t*3+1]<i&&(l[t*3]=s(-n,n),l[t*3+1]=11,l[t*3+2]=s(-n,n)),T.position.set(l[t*3],l[t*3+1],l[t*3+2]),T.rotation.set(0,0,0),T.scale.set(1,1,1),T.updateMatrix(),c.setMatrixAt(t,T.matrix)}c.instanceMatrix.needsUpdate=!0,c.material.opacity=.55*x,g=r?Math.round(8*y):0;for(let e=0;e<g;e++)h[e].set(Math.random(),Math.random(),.05*y);let O=Math.round(700*(a?y:0));for(let r=0;r<700;r++){if(r>=O){T.position.set(0,-50,0),T.scale.setScalar(0),T.updateMatrix(),d.setMatrixAt(r,T.matrix);continue}f[r*3+1]-=m[r]*e;let a=Math.sin(t*1.5+p[r])*.5;f[r*3+1]<i&&(f[r*3]=s(-n,n),f[r*3+1]=11,f[r*3+2]=s(-n,n)),T.position.set(f[r*3]+a,f[r*3+1],f[r*3+2]),T.rotation.set(0,0,0),T.scale.setScalar(1),T.updateMatrix(),d.setMatrixAt(r,T.matrix)}d.instanceMatrix.needsUpdate=!0,d.material.opacity=.9*(a?y:0)}return{group:t,update:ee,cycle:O,setKind:D,rainDrops:h,get kind(){return _},get intensity(){return y},get overcast(){return b},get fog(){return S},get snow(){return C},get cloud(){return w},get rainDropCount(){return g},poolCounts:{rain:600,snow:700}}}function Mt(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=(e,n,r)=>{let i=t.createRadialGradient(e,n,0,e,n,r);i.addColorStop(0,`rgba(255,255,255,0.95)`),i.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=i,t.beginPath(),t.arc(e,n,r,0,7),t.fill()};n(128*.42,128*.56,128*.26),n(128*.6,128*.5,128*.3),n(128*.5,128*.46,128*.22),n(128*.34,128*.54,128*.18),n(128*.7,128*.58,128*.18);let r=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5],i=t.getImageData(0,0,128,128),a=i.data;for(let e=0;e<128;e++)for(let t=0;t<128;t++){let n=(e*128+t)*4,i=a[n+3]/255,o=(r[e%4*4+t%4]+.5)/16-.5;a[n+3]=Math.max(0,Math.min(1,Math.floor(i*5+.5+o)/5))*255}t.putImageData(i,0,0);let o=new k(e);return o.colorSpace=u,o}function Nt({extent:t=8,count:n=16}={}){let i=new r;i.raycast=()=>{};let a=Mt(),o=t+6,s=(e,t)=>e+Math.random()*(t-e),c=[];for(let t=0;t<n;t++){let t=new j({map:a,transparent:!0,depthWrite:!1,opacity:0,fog:!0}),n=new e(t),r={sp:n,mat:t,wisp:Math.random(),x:s(-o,o),z:s(-o,o),hiY:s(4,6.8),loY:s(.6,2.2),w:s(3,5.6),h:s(1.7,3),speed:s(.25,.7),op:s(.6,1)};n.raycast=()=>{},c.push(r),i.add(n)}let l=new B,u=new B(`#ffffff`),d=new B(`#5b626e`);function f(e,t,n,r){let i=r?r.cloud:0,a=r?r.fog:0,f=Math.min(1,.4+.6*i+.5*a);l.copy(n.sky).lerp(u,.62),l.lerp(d,.6*i);for(let n=0;n<c.length;n++){let r=c[n],u=n/c.length<f;r.x+=r.speed*e*(.6+.8*i),r.x>o&&(r.x=-o,r.z=s(-o,o));let d=Math.min(Pt(r.x,-o,-o+3),1-Pt(r.x,o-3,o)),p=r.hiY*(1-a)+r.loY*a,m=1-.5*r.wisp,h=.72*Math.max(0,1-a-i)+1*i+.42*a,g=u?Math.max(0,h)*r.op*m*d:0;r.mat.opacity+=(g-r.mat.opacity)*Math.min(1,e*2.5),r.mat.color.copy(l);let _=r.w*(1+.6*a)*(1+.4*r.wisp),v=r.h*(1-.35*a);r.sp.scale.set(_,v,1),r.sp.position.set(r.x,p+Math.sin(t*.3+n)*.15,r.z)}}function p(e){a=e;for(let t of c)t.mat.map=e,t.mat.needsUpdate=!0}return{group:i,update:f,setTexture:p,get count(){return c.length}}}function Pt(e,t,n){let r=Math.max(0,Math.min(1,(e-t)/(n-t)));return r*r*(3-2*r)}var Ft=Math.PI*2;function It(e){let t=document.createElement(`canvas`);t.width=t.height=128;let n=t.getContext(`2d`),r=n.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return r.addColorStop(0,`#ffffff`),r.addColorStop(.34,`#fffaf0`),r.addColorStop(.66,e),r.addColorStop(.86,e),r.addColorStop(1,`rgba(255,255,255,0)`),n.fillStyle=r,n.beginPath(),n.arc(128/2,128/2,128/2,0,Ft),n.fill(),Ut(t,!0)}function Lt(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);n.addColorStop(0,`#ffffff`),n.addColorStop(.4,`#eef3ff`),n.addColorStop(.82,`#c4cee6`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,128/2,0,Ft),t.fill(),t.globalAlpha=.14,t.fillStyle=`#8b97b4`;for(let[e,n,r]of[[54,50,9],[78,66,7],[60,82,5]])t.beginPath(),t.arc(e,n,r,0,Ft),t.fill();return Ut(e,!0)}function Rt(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`);t.translate(128/2,128/2),t.fillStyle=`rgba(255,210,120,0.9)`;for(let e=0;e<12;e++)t.rotate(Ft/12),t.beginPath(),t.moveTo(0,-28),t.lineTo(7,-54),t.lineTo(-7,-54),t.closePath(),t.fill();let n=t.createRadialGradient(0,0,0,0,0,32);return n.addColorStop(0,`#ffffff`),n.addColorStop(.4,`#fff1c8`),n.addColorStop(.8,`#ffb24a`),n.addColorStop(1,`#ff8a2a`),t.fillStyle=n,t.beginPath(),t.arc(0,0,32,0,Ft),t.fill(),Ut(e,!0)}function zt(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,46);n.addColorStop(0,`#ffffff`),n.addColorStop(.5,`#e6ecfb`),n.addColorStop(1,`#c2cce4`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,46,0,Ft),t.fill(),t.fillStyle=`#aab6d2`;for(let[e,n,r]of[[52,48,11],[80,62,8],[58,82,7],[40,66,5]])t.beginPath(),t.arc(e,n,r,0,Ft),t.fill();return Ut(e,!0)}function Bt(e,t,n){let r=document.createElement(`canvas`);r.width=r.height=144;let i=r.getContext(`2d`),a=17/2,o=18/2-.5;for(let r=0;r<18;r++)for(let s=0;s<18;s++){let c=Math.hypot(s-a,r-a);c>o||(i.fillStyle=c<o*.45?e:c<o*.78?t:n,i.fillRect(Math.round(s*8),Math.round(r*8),8,8))}return Ut(r,!1)}function Vt(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return n.addColorStop(0,`rgba(255,255,255,0.9)`),n.addColorStop(.38,`rgba(255,255,255,0.3)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,128/2,0,Ft),t.fill(),Ut(e,!0)}function Ht(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2),r=`20,30,48`;return n.addColorStop(0,`rgba(${r},0)`),n.addColorStop(.42,`rgba(${r},0)`),n.addColorStop(.6,`rgba(${r},0.6)`),n.addColorStop(1,`rgba(${r},0)`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,128/2,0,Ft),t.fill(),Ut(e,!0)}function Ut(e,t){let n=new k(e);return n.colorSpace=u,t||(n.magFilter=f,n.minFilter=f),n}var Wt=(e,t,n)=>{let r=Math.max(0,Math.min(1,(e-t)/(n-t)));return r*r*(3-2*r)};function Gt({skyW:t=15,skyY0:n=3.4,skyH:i=3.8,z:a=-7.8,biasX:o=4.5,sunSize:s=4.6,moonSize:c=4}={}){let l=new r;l.raycast=()=>{};let u=(t,n)=>{let r=new e(new j({map:t,transparent:!0,depthWrite:!1,fog:!1,toneMapped:!1,...n?{blending:2}:{}}));return r.raycast=()=>{},r},d={realistic:It(`#ffcf8a`),charm:Rt(),pixel:Bt(`#fff6e0`,`#ffc24a`,`#ff8a2a`)},f={realistic:Lt(),charm:zt(),pixel:Bt(`#ffffff`,`#cdd6ee`,`#9aa6c6`)},p=Vt(),m=u(Ht(),!1),h=u(p,!0),g=u(d.realistic),_=u(p,!0),v=u(f.realistic);m.renderOrder=-2,h.renderOrder=-1,l.add(m,h,g,_,v);let y={realistic:{sunGlow:3,sunGlowOp:.7,moonGlow:2.6,moonGlowOp:.5,sizeMul:1,sunHaloOp:.85},charm:{sunGlow:2.2,sunGlowOp:.55,moonGlow:2.1,moonGlowOp:.42,sizeMul:1.08,sunHaloOp:.7},pixel:{sunGlow:1.7,sunGlowOp:.4,moonGlow:1.7,moonGlowOp:.32,sizeMul:1,sunHaloOp:.6}},b=`realistic`;function x(e){e===b||!y[e]||(b=e,g.material.map=d[e],g.material.needsUpdate=!0,v.material.map=f[e],v.material.needsUpdate=!0)}new B;let S=new B(`#fff3df`),C=new B(`#ffb060`),w=new B(`#ff6a2a`),T=new B(`#eef2ff`),E=new B(`#9fbcff`);function D(e,r,l,u,d=`realistic`){x(d);let f=y[b],p=l.sunArc,D=u?Math.min(1,(u.cloud||0)*.85+(u.fog||0)*.7):0,O=p.y,ee=Wt(O,-.04,.1)*(1-.7*D),k=1-Wt(Math.abs(O),.02,.5);g.position.set(p.x*t+o,n+p.y*i,a),h.position.copy(g.position);let A=s*f.sizeMul*(1+.55*k);g.scale.setScalar(A),h.scale.setScalar(A*f.sunGlow),g.material.color.copy(S),h.material.color.copy(C).lerp(w,k),g.material.opacity=ee,h.material.opacity=ee*f.sunGlowOp*(.7+.5*k),m.position.copy(g.position),m.scale.setScalar(A*1.7),m.material.opacity=ee*(1-k)*f.sunHaloOp;let j=Wt(-p.y,-.04,.1)*(1-.65*D);v.position.set(-p.x*t+o,n+-p.y*i,a),_.position.copy(v.position);let M=c*f.sizeMul;v.scale.setScalar(M),_.scale.setScalar(M*f.moonGlow),v.material.color.copy(T),_.material.color.copy(E),v.material.opacity=j,_.material.opacity=j*f.moonGlowOp}return{group:l,update:D}}var Kt=`varying vec2 vUv;

void main() {
  
  
  
  vUv = uv;

  
  
  
  
  
  
  
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,qt=`precision highp float;

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
}`,Jt=`varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0); 
}`,Yt=`precision highp float;

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
}`,Xt=`precision highp float;

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
}`,Zt=`precision highp float;

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
}`,Qt=`const float CA_STRENGTH   = 0.0030;  
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
}`,$t=`const float DITHER = 0.55;   

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
}`,en=`precision highp float;

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
}`,tn=`precision highp float;

varying vec2 vUv;
uniform sampler2D uToon;   
uniform sampler2D uPixel;  
uniform float     uBlend;  

void main() {
  vec3 t = texture2D(uToon, vUv).rgb;
  vec3 p = texture2D(uPixel, vUv).rgb;
  gl_FragColor = vec4(mix(t, p, uBlend), 1.0);
}`,nn=`precision highp float;

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
}`,rn={"1-bit":{gridWidth:110,dither:.6,palette:[`#15120c`,`#c8b486`]},gb:{gridWidth:130,dither:.4,palette:[`#0f380f`,`#306230`,`#8bac0f`,`#9bbc0f`]},"8-bit":{gridWidth:160,dither:.55,palette:[`#140c1c`,`#442434`,`#30346d`,`#4e4a4e`,`#854c30`,`#346524`,`#d04648`,`#757161`,`#597dce`,`#d27d2c`,`#8595a1`,`#6daa2c`,`#d2aa99`,`#6dc2ca`,`#dad45e`,`#deeed6`]},"16-bit":{gridWidth:280,dither:.3,palette:`#000000.#222034.#45283c.#663931.#8f563b.#df7126.#d9a066.#eec39a.#fbf236.#99e550.#6abe30.#37946e.#4b692f.#524b24.#323c39.#3f3f74.#306082.#5b6ee1.#639bff.#5fcde4.#cbdbfc.#ffffff.#9badb7.#847e87.#696a6a.#595652.#76428a.#ac3232.#d95763.#d77bba.#8f974a.#8a6f30`.split(`.`)},modern:{gridWidth:460,dither:.6,palette:null}},an=[`gb`,`8-bit`,`16-bit`,`modern`];function on(e){let t=Math.max(e.length,1),n=new Float32Array(t*4);e.forEach((e,t)=>{let r=new B(e);n[t*4+0]=r.r,n[t*4+1]=r.g,n[t*4+2]=r.b,n[t*4+3]=1});let r=new te(n,t,1,d,ue);return r.minFilter=f,r.magFilter=f,r.needsUpdate=!0,r}var sn=220,cn={night:[`#0A0C16`,`#1C2236`,`#3A3A52`,`#5A5A78`,`#8A92B0`],dawn:[`#1A1008`,`#43281A`,`#7A4A30`,`#B07A4E`,`#E8A86A`],noon:[`#16100A`,`#3A2F1E`,`#6B563A`,`#937B54`,`#B89968`],dusk:[`#140A0A`,`#3E1E1A`,`#7A3828`,`#B85A36`,`#F0884A`]},ln={night:[`#020604`,`#06180E`,`#10401E`,`#1E9040`,`#7FE0FF`],dawn:[`#060603`,`#1A2410`,`#3A6B22`,`#6CC040`,`#FFC060`],noon:[`#050805`,`#0E2912`,`#1E6B2F`,`#3CF06A`,`#FFB000`],dusk:[`#080402`,`#241408`,`#6B4A12`,`#E0A030`,`#FF7030`]};function un({demo:e=!1,citySeed:n=0,profileIndex:r=0}={}){let i=new re({antialias:!0,preserveDrawingBuffer:!0});i.shadowMap.enabled=!0,i.shadowMap.type=1,i.shadowMap.autoUpdate=!1,i.shadowMap.needsUpdate=!0;let a=!!(window.matchMedia&&window.matchMedia(`(pointer: coarse)`).matches);i.setPixelRatio(Math.min(window.devicePixelRatio,a?1.5:2)),i.setSize(window.innerWidth,window.innerHeight),i.setClearColor(920327,1),document.body.appendChild(i.domElement);let s=i.getDrawingBufferSize(new H),c=new T;c.fog=new y(10465470,0);let l=new B(`#aeb6c0`),h=.062,_=new B(`#74508f`),v=new B,b=Ee({aspect:window.innerWidth/window.innerHeight}),S=at({t:.5}),C={type:le,format:d,minFilter:f,magFilter:f,wrapS:M,wrapT:M,depthBuffer:!1,stencilBuffer:!1},E=[new oe(256,256,C),new oe(256,256,C),new oe(256,256,C)];for(let e of E)i.setRenderTarget(e),i.clear();i.setRenderTarget(null);let O=new T,ee=new fe(-1,1,1,-1,0,1),A=new w({vertexShader:Jt,fragmentShader:Yt,uniforms:{uCurr:{value:null},uPrev:{value:null},uTexel:{value:new H(1/256,1/256)},uMouse:{value:new H(-1,-1)},uMouseStrength:{value:0},uC2:{value:.25},uDamping:{value:.992},uRainCount:{value:0},uRainDrops:{value:Array.from({length:8},()=>new R)},uWakeCount:{value:0},uWakeDrops:{value:Array.from({length:8},()=>new R)}}});O.add(new g(new x(2,2),A));let j=new oe(s.x,s.y,{minFilter:t,magFilter:t,depthBuffer:!0,stencilBuffer:!1});function te(e){let t=document.createElement(`canvas`);t.width=t.height=1024;let n=t.getContext(`2d`);n.fillStyle=e?`#0c1418`:`#15110b`,n.fillRect(0,0,1024,1024),n.strokeStyle=e?`rgba(120,150,170,0.22)`:`rgba(184,153,104,0.30)`,n.lineWidth=2;for(let e=0;e<=1024;e+=64)n.beginPath(),n.moveTo(e,0),n.lineTo(e,1024),n.stroke(),n.beginPath(),n.moveTo(0,e),n.lineTo(1024,e),n.stroke();e||(n.fillStyle=`#B89968`,n.font=`bold 360px Georgia, serif`,n.textAlign=`center`,n.textBaseline=`middle`,n.fillText(`LGR`,512,470),n.font=`600 64px ui-monospace, monospace`,n.fillText(`WEB · STUDIO`,512,720));let r=new k(t);return r.colorSpace=u,r}let N=new g(new x(28,28),new o({map:te(e)}));N.rotation.x=-Math.PI/2,N.position.y=-.35,c.add(N);let P=new g(new x(40,24),new w({depthWrite:!1,vertexShader:Kt,fragmentShader:qt,uniforms:{uTime:{value:0},uInk:{value:S.horizon},uGold:{value:S.sky},uFogColor:{value:v},uFogAmt:{value:0},uFogCharm:Ne}}));P.position.set(0,3,-8),c.add(P);let F=new w({vertexShader:Xt,fragmentShader:Zt,uniforms:{uHeight:{value:null},uScene:{value:j.texture},uTexel:{value:new H(1/256,1/256)},uResolution:{value:new H(s.x,s.y)},uDisplace:{value:.42},uNormalStrength:{value:22},uRefractStrength:{value:.06},uChromaScale:{value:1},uNormalMatrix:{value:new m},uLightDir:{value:S.sunDir},uInk:{value:new B(`#2A2218`)},uGold:{value:new B(`#B89968`)},uVector:De,uVecWater:{value:new B(`#1fb8d8`)},uVecTint:{value:Oe}}}),I=new g(new x(28,28,255,255),F);I.rotation.x=-Math.PI/2,I.updateMatrixWorld(!0),F.uniforms.uNormalMatrix.value.getNormalMatrix(I.matrixWorld),c.add(I);let ne={value:0},L=kt({windowGlow:ne}),z=Ze({seed:n,profileIndex:r,landmarkFactory:L,windowGlow:ne});c.add(z.group);let ie=ut({plinthTop:.3,extent:z.extent,profile:z.state.profile});c.add(ie.group);let ae=_t({extent:z.extent,waterSize:28,plinthTop:.3});c.add(ae.group),A.uniforms.uWakeDrops.value=ae.wakeDrops;let V=jt({extent:z.extent});c.add(V.group),A.uniforms.uRainDrops.value=V.rainDrops;let se=Nt({extent:z.extent});c.add(se.group);let U=Gt();c.add(U.group),z.group.remove(z.key),c.add(z.key),z.key.castShadow=!0,z.key.shadow.mapSize.set(2048,2048),z.key.shadow.bias=-18e-5,z.key.shadow.normalBias=.028,c.add(z.key.target);function ce(){let e=z.key.shadow.camera,t=z.extent+4.5;e.left=-t,e.right=t,e.top=t,e.bottom=-t,e.near=1,e.far=48,e.updateProjectionMatrix(),i.shadowMap.needsUpdate=!0}ce();let ue=new D(s.x,s.y),de=new oe(s.x,s.y,{minFilter:t,magFilter:t,depthBuffer:!0,stencilBuffer:!1,depthTexture:ue}),pe=new oe(s.x,s.y,{minFilter:t,magFilter:t,depthBuffer:!1,stencilBuffer:!1}),me=new oe(s.x,s.y,{minFilter:t,magFilter:t,depthBuffer:!1,stencilBuffer:!1}),he=new oe(s.x,s.y,{minFilter:t,magFilter:t,depthBuffer:!1,stencilBuffer:!1}),W=new T,ge=new fe(-1,1,1,-1,0,1),_e=new g(new x(2,2));W.add(_e);let ve=new w({vertexShader:Jt,fragmentShader:Qt,uniforms:{uScene:{value:de.texture},uTime:{value:0},uResolution:{value:new H(s.x,s.y)},uGrain:{value:1},uChroma:{value:1},uExposure:{value:1}}}),ye=e=>{let t=e.map(e=>new B(e));for(;t.length<8;)t.push(new B(0,0,0));return t},be=[`night`,`dawn`,`noon`,`dusk`],xe={inkgold:be.map(e=>ye(cn[e])),terminal:be.map(e=>ye(ln[e]))},Se=new w({vertexShader:Jt,fragmentShader:$t,uniforms:{uScene:{value:pe.texture},uResolution:{value:new H(s.x,s.y)},uPixelSize:{value:sn},uPalette:{value:xe.inkgold[2]},uPaletteB:{value:xe.inkgold[2]},uPaletteBlend:{value:0},uPaletteSize:{value:5}}}),Ce=new w({vertexShader:Jt,fragmentShader:nn,uniforms:{uScene:{value:pe.texture},uResolution:{value:new H(s.x,s.y)},uGridWidth:{value:160},uDither:{value:.55},uPalette:{value:on(rn[`8-bit`].palette)},uPaletteSize:{value:1},uUsePalette:{value:1}}}),we={};for(let e of an)we[e]=rn[e].palette?on(rn[e].palette):null;let G=new w({vertexShader:Jt,fragmentShader:en,uniforms:{uScene:{value:pe.texture},uDepth:{value:ue},uResolution:{value:new H(s.x,s.y)},uBands:{value:4},uToonGain:{value:1.7},uToonGamma:{value:.6},uToonFloor:{value:S.toonFloor},uOutline:{value:S.outline},uNear:{value:.1},uFar:{value:100},uIsPerspective:{value:1}}}),K=new w({vertexShader:Jt,fragmentShader:tn,uniforms:{uToon:{value:me.texture},uPixel:{value:he.texture},uBlend:{value:0}}});function Te(e,t){_e.material=e,i.setRenderTarget(t),i.render(W,ge)}function q(){b.setViewport(window.innerWidth,window.innerHeight),i.setSize(window.innerWidth,window.innerHeight);let e=i.getDrawingBufferSize(new H);return j.setSize(e.x,e.y),de.setSize(e.x,e.y),pe.setSize(e.x,e.y),me.setSize(e.x,e.y),he.setSize(e.x,e.y),F.uniforms.uResolution.value.set(e.x,e.y),ve.uniforms.uResolution.value.set(e.x,e.y),Se.uniforms.uResolution.value.set(e.x,e.y),Ce.uniforms.uResolution.value.set(e.x,e.y),G.uniforms.uResolution.value.set(e.x,e.y),e}let J=3,Y=!1,Fe=!1,X=`native`,Ie=.3,Le=.46,Z=[`native`,...an],Re={"16-bit":`16-bit`,"8-bit":`8-bit`,gb:`Game Boy`,modern:`Modern`,native:`Pixel`,"1-bit":`1-bit`};typeof window<`u`&&(window.__mode=J,window.__vector=Y,window.__era=X);let ze=0,Be=performance.now(),Q=typeof window<`u`&&new URLSearchParams(window.location.search).has(`perf`);typeof window<`u`&&(window.__perf=Q),Q&&(i.info.autoReset=!1);let Ve=null;typeof window<`u`&&(window.__loaded=!1);let He=0,Ue=new R(1,1,1),We=!1;function Ge(e){let t=Fe?xe.terminal:xe.inkgold,n=e%1*4,r=Math.floor(n)%4;Se.uniforms.uPalette.value=t[r],Se.uniforms.uPaletteB.value=t[(r+1)%4],Se.uniforms.uPaletteBlend.value=n-Math.floor(n)}function Ke(e){let t=rn[e];t&&(Ce.uniforms.uGridWidth.value=t.gridWidth,Ce.uniforms.uDither.value=t.dither,Ce.uniforms.uUsePalette.value=+!!t.palette,t.palette&&(Ce.uniforms.uPalette.value=we[e],Ce.uniforms.uPaletteSize.value=t.palette.length))}function qe(){X!==`native`&&Ke(X)}let Je=()=>X===`native`?Se:Ce;function Ye(e,t){I.visible=!1,i.setRenderTarget(j),i.render(c,e),I.visible=!0,i.setRenderTarget(t),i.render(c,e)}function Xe(e,t){if(I.visible=!1,i.setRenderTarget(j),i.render(c,b.camera),I.visible=!0,J===1)i.setRenderTarget(t),i.render(c,b.camera);else if(i.setRenderTarget(de),i.render(c,b.camera),J===2)ve.uniforms.uGrain.value=1,ve.uniforms.uChroma.value=1,Te(ve,t);else{ve.uniforms.uGrain.value=0,ve.uniforms.uChroma.value=0,Te(ve,pe);let n=b.camera;G.uniforms.uNear.value=n.near,G.uniforms.uFar.value=n.far,G.uniforms.uIsPerspective.value=+!!n.isPerspectiveCamera;let r=e.era?(Ke(e.era),Ce):Je();e.kind===`pixel`?(Te(r,t),window.__style=`pixel`):e.kind===`toon`?(Te(G,t),window.__style=`toon`):(Te(G,me),Te(r,he),K.uniforms.uBlend.value=e.blend,Te(K,t),window.__style=`blend`)}}function Qe(){let e=$e(),t=e.kind===`toon`?1:e.kind===`blend`?1-e.blend:0;return F.uniforms.uChromaScale.value=p.lerp(1,.5,t),e}function $e(){if(J===1||J===2)return{kind:`none`};if(J===7)return{kind:`pixel`};if(J===8)return{kind:`toon`};let e=b.styleT;return window.__styleT=e,e<=Ie?{kind:`toon`}:e>=Le?{kind:`pixel`,era:e<.62?`16-bit`:e<.8?`8-bit`:`gb`}:{kind:`blend`,blend:p.smoothstep(e,Ie,Le),era:`16-bit`}}function et(e){return J===1||J===2?``:Y&&J!==7&&J!==8?`Vector`:e.kind===`toon`?`Toon`:e.kind===`pixel`?Re[e.era||X]||`Pixel`:e.kind===`blend`?`Toon → `+(Re[e.era]||`Pixel`):``}function tt(e,t,{shadowsOn:n=!0,seasonTarget:r=0}={}){if(Q){let e=i.info;Ve={calls:e.render.calls,tris:e.render.triangles,programs:e.programs?e.programs.length:0,geo:e.memory.geometries,tex:e.memory.textures},e.reset()}P.material.uniforms.uTime.value=t,ve.uniforms.uTime.value=t,S.update(e),z.key.position.copy(S.sunDir).multiplyScalar(24),z.key.color.copy(S.sunColor),z.key.intensity=S.sunIntensity,z.fill.color.copy(S.hemiSky),z.fill.groundColor.copy(S.hemiGround),ne.value=S.windowGlow;let a=V.overcast;z.key.intensity*=1-.5*a,z.key.color.lerp(l,.45*a),z.fill.intensity=1+.7*a;let o=p.smoothstep(S.sunDir.y,.06,.34),s=p.lerp(.28,1,1-S.windowGlow),u=n?o*s:0;z.key.shadow.intensity=.72*u,ke.value=.52*u,(n&&!We||Ue.distanceToSquared(S.sunDir)>2e-5)&&(i.shadowMap.needsUpdate=!0,Ue.copy(S.sunDir)),We=n;let d=1-S.windowGlow;Oe.setRGB(p.lerp(.46,1,d),p.lerp(.52,1,d),p.lerp(.74,1,d)),ve.uniforms.uExposure.value=S.exposure,G.uniforms.uToonGain.value=S.toonGain,i.setClearColor(S.horizon,1),Ge(S.t),window.__t=S.t,ie.update(e,t,S),z.update(t),ae.update(e,t,S),A.uniforms.uWakeCount.value=ae.wakeCount,V.update(e,t),A.uniforms.uRainCount.value=V.rainDropCount;let f=V.fog*(1-d);c.fog.density=V.fog*h,v.copy(S.horizon).lerp(_,.85*f),c.fog.color.copy(v),i.setClearColor(v,1),Ne.value=V.fog,P.material.uniforms.uFogAmt.value=.7*V.fog,Ae.value=V.snow,je.value=V.cloud*.55,Me.x+=e*.018,Me.y+=e*.009,Pe.value+=(r-Pe.value)*Math.min(1,e*1.5),se.update(e,t,S,V);let m=$e(),g=m.kind===`pixel`||m.kind===`blend`?`pixel`:Y||m.kind===`toon`?`charm`:`realistic`;U.update(e,t,S,V,g),ze++;let y=performance.now();y-Be>=1e3&&(window.__fps=ze,Q&&Ve&&(console.log(`[perf] ${ze} fps · ~${(1e3/Math.max(1,ze)).toFixed(2)} ms · calls ${Ve.calls} · tris ${Ve.tris} · programs ${Ve.programs} · geo ${Ve.geo} · tex ${Ve.tex}`),window.__perfInfo={fps:ze,...Ve}),ze=0,Be=y);let[b,x,C]=E;if(A.uniforms.uPrev.value=b.texture,A.uniforms.uCurr.value=x.texture,i.setRenderTarget(C),i.render(O,ee),E=[x,C,b],F.uniforms.uHeight.value=E[1].texture,He<2&&typeof document<`u`&&++He===2){let e=document.getElementById(`lgr-loader`);e&&e.classList.add(`gone`),window.__loaded=!0}}function nt(e){J=e,window.__mode=J}function rt(){return Y=!Y,De.value=+!!Y,window.__vector=Y,Y}function it(e){return Y=!!e,De.value=+!!Y,window.__vector=Y,Y}function ot(){return X=Z[(Z.indexOf(X)+1)%Z.length],window.__era=X,qe(),X}function st(){return Fe=!Fe,Fe}return{updateWorld:tt,decideStyle:Qe,renderCityPipeline:Xe,renderCityBeautyTo:Ye,styleHintName:et,setPostMode:nt,toggleVector:rt,setVector:it,cycleEra:ot,togglePalette:st,get mode(){return J},get vector(){return Y},get sceneEra(){return X},renderer:i,drawBuffer:s,scene:c,rig:b,sunRig:S,SIM:256,targets:E,simScene:O,simCamera:ee,simMaterial:A,grabRT:j,card:N,backdrop:P,WATER_SIZE:28,water:I,waterMaterial:F,windowGlow:ne,landmarkFactory:L,city:z,cityLife:ie,waterLife:ae,weatherRig:V,clouds:se,fitShadowFrustum:ce,SHADOW_DIST:24,sceneDepth:ue,sceneRT:de,filmicRT:pe,toonRT:me,pixelRT:he,postScene:W,postCamera:ge,postQuad:_e,filmicMaterial:ve,pixelMaterial:Se,pixelkitMaterial:Ce,toonMaterial:G,mixMaterial:K,PALCACHE:xe,ERA_TEX:we,runPass:Te,OVERCAST_GREY:l,FOG_DENSITY:h,FOG_NIGHT_TINT:_,_fogColor:v,resize:q}}var dn=`lgr_hints_`,fn=!1;function pn(){if(fn||typeof document>`u`)return;fn=!0;let e=document.createElement(`style`);e.textContent=`
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
  }`,document.head.appendChild(e)}function mn({key:e,title:t=`Tips`,tips:n=[],force:r=!1}={}){let i={key:e,shown:!1,dismissed:!1,seen:!1};if(typeof window<`u`&&(window.__hints=i),typeof document>`u`||!e)return{dismiss(){},el:null};let a=dn+e,o=!1;try{o=localStorage.getItem(a)===`1`}catch{}if(o&&!r)return i.seen=!0,{dismiss(){},el:null};pn();let s=!!(window.matchMedia&&window.matchMedia(`(prefers-reduced-motion: reduce)`).matches),c=document.createElement(`div`);c.className=`lgr-hints`,c.innerHTML=`<div class="lgr-hints-card">
    <div class="lgr-hints-h">${t}</div>
    <ul>${n.map(e=>`<li>${e}</li>`).join(``)}</ul>
    <button class="lgr-hints-ok">Got it</button>
    <button class="lgr-hints-x" title="Dismiss (Esc)" aria-label="Dismiss">✕</button>
  </div>`,document.body.appendChild(c),i.shown=!0,s?c.classList.add(`on`):requestAnimationFrame(()=>c.classList.add(`on`));let l=!1;function u(e=!0){if(!l){if(l=!0,e)try{localStorage.setItem(a,`1`)}catch{}i.dismissed=!0,window.removeEventListener(`keydown`,d),c.classList.remove(`on`),setTimeout(()=>c.remove(),s?0:300)}}function d(e){e.key===`Escape`&&u(!0)}return window.addEventListener(`keydown`,d),c.querySelector(`.lgr-hints-ok`).addEventListener(`click`,()=>{navigator.vibrate?.(10),u(!0)}),c.querySelector(`.lgr-hints-x`).addEventListener(`click`,()=>{navigator.vibrate?.(10),u(!0)}),{dismiss:u,el:c}}var hn=new Set([`w`,`a`,`s`,`d`,`arrowup`,`arrowdown`,`arrowleft`,`arrowright`,`shift`,` `]),gn={walker:{p:.6,hp:26,speed:.85,dmg:9,score:10,size:1,color:`#6f8a45`},runner:{p:.25,hp:12,speed:1.75,dmg:7,score:16,size:.82,color:`#a6d24c`},tank:{p:.15,hp:95,speed:.5,dmg:20,score:34,size:1.5,color:`#39492a`}};function _n(){let e=Math.random();return e<gn.walker.p?`walker`:e<gn.walker.p+gn.runner.p?`runner`:`tank`}var vn=new B(`#ffffff`),yn=new B(`#d83a2a`),bn={food:{name:`Food`,glyph:`🍖`,color:`#c8782e`,consumable:!0},water:{name:`Water`,glyph:`💧`,color:`#3aa6dc`,consumable:!0},bandage:{name:`Bandage`,glyph:`➕`,color:`#e8e2d6`,consumable:!0},scrap:{name:`Scrap`,glyph:`⚙️`,color:`#8a8f96`,consumable:!1},medkit:{name:`Medkit`,glyph:`✚`,color:`#e0524a`,consumable:!0},repairkit:{name:`Repair Kit`,glyph:`🔧`,color:`#caa05a`,consumable:!0}},xn=[{out:`medkit`,need:{bandage:2}},{out:`repairkit`,need:{scrap:3}}];function Sn({extent:e=8,plinthTop:t=.3}={}){let n=new r;n.visible=!1,n.raycast=()=>{};let i=t+.02,s=Math.max(3,e-.7),c=typeof window<`u`&&window.matchMedia&&window.matchMedia(`(pointer: coarse)`).matches,u=1.25,d=4.4,f=1.4,m=new r,y=new g(new ne(.16,.34,4,10),Z(new l({color:`#3f7fd0`,roughness:.6,flatShading:!0}),{color:`#3f7fd0`}));y.position.y=.33;let b=new g(new _(.13,12,9),Z(new l({color:`#e9caa1`,roughness:.75,flatShading:!0}),{color:`#e9caa1`}));b.position.y=.66;let x=new g(new O(.1,.1,.16),Z(new l({color:`#ffd54a`,roughness:.5,flatShading:!0}),{color:`#ffd54a`}));x.position.set(0,.38,.18),m.add(y,b,x),m.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!1),e.raycast=()=>{}}),m.scale.setScalar(1.6),m.position.y=i,n.add(m);let S=new g(new A(.95,16,-.9,1.8),new o({color:`#ffe08a`,transparent:!0,opacity:0,depthWrite:!1,side:2}));S.rotation.x=-Math.PI/2,S.position.y=i+.06,S.raycast=()=>{},n.add(S);let C=new V().setFromPoints([new R,new R]),w=new h(C,new I({color:`#fff3c0`,transparent:!0,opacity:0,depthWrite:!1}));w.raycast=()=>{},n.add(w);let T={x:0,z:0,vx:0,vz:0,hp:100,stamina:100,hunger:100,thirst:100,facing:0,iframe:0},E=new a(new ne(.15,.3,4,8),Z(new l({roughness:.85,flatShading:!0})),48);E.castShadow=!0,E.receiveShadow=!1,E.frustumCulled=!1,E.raycast=()=>{},E.instanceMatrix.setUsage(de),n.add(E);let D=[];for(let e=0;e<48;e++)D.push({x:0,z:0,vx:0,vz:0,alive:!1,in:!1,type:`walker`,hp:1,maxhp:1,speed:1,dmg:0,score:0,size:1,phase:0,flash:0});let ee=new B,k=[],j=Z(new l({color:`#7a5a36`,roughness:.9,flatShading:!0}),{color:`#7a5a36`});for(let e=0;e<8;e++){let t=e/8*Math.PI*2,r=new g(new O(2.1,.7,.24),j.clone());r.position.set(Math.cos(t)*d,i+.35,Math.sin(t)*d),r.rotation.y=-t+Math.PI/2,r.castShadow=!0,r.raycast=()=>{},n.add(r),k.push({mesh:r,ang:t,hp:150,alive:!0,baseColor:new B(`#7a5a36`)})}function M(e,t){let n=Math.atan2(t,e);return n<0&&(n+=Math.PI*2),k[Math.round(n/(Math.PI*2/8))%8]}let te=[];for(let e=0;e<14;e++){let e=new g(new O(.26,.26,.26),Z(new l({roughness:.6,flatShading:!0})));e.castShadow=!0,e.visible=!1,e.raycast=()=>{},n.add(e),te.push({mesh:e,x:0,z:0,kind:`food`,active:!1})}let N=new B;function P(){let e=Math.random();return e<.36?`food`:e<.72?`water`:e<.88?`bandage`:`scrap`}function F(e,t,n){let r=te.find(e=>!e.active);r&&(r.x=e,r.z=t,r.kind=n||P(),r.active=!0,r.mesh.position.set(e,i+.18,t),r.mesh.visible=!0,r.mesh.material.color.copy(N.set(bn[r.kind].color)))}let L=[];function re(e){let t=L.find(t=>t.id===e);return t?t.n:0}function z(e,t=1){let n=L.find(t=>t.id===e);return n?(n.n+=t,!0):L.length<8?(L.push({id:e,n:t}),!0):!1}function ie(e,t){let n=L.find(t=>t.id===e);return!n||n.n<t?!1:(n.n-=t,n.n<=0&&L.splice(L.indexOf(n),1),!0)}function ae(e){if(re(e)<=0)return!1;if(e===`food`)T.hunger=Math.min(100,T.hunger+38);else if(e===`water`)T.thirst=Math.min(100,T.thirst+38);else if(e===`bandage`)T.hp=Math.min(100,T.hp+40);else if(e===`medkit`)T.hp=Math.min(100,T.hp+90);else if(e===`repairkit`){let e=null;for(let t of k)(!e||t.hp<e.hp)&&(e=t);e&&(e.hp=150,e.alive=!0)}else return!1;return ie(e,1),He(),!0}function oe(e){for(let t in e.need)if(re(t)<e.need[t])return!1;for(let t in e.need)ie(t,e.need[t]);return z(e.out,1),He(),!0}let se=!1,H=!1,U=1,ce=0,le=0,ue=0,fe=`spawning`,pe=0,me=0,he=0,W=0,ge=!1,_e=null;function ve(){for(let e=0;e<48;e++)if(!D[e].alive)return D[e];return null}function ye(e){let t=ve();if(!t)return;let n=gn[_n()];t.type=Object.keys(gn).find(e=>gn[e]===n)||`walker`;let r=Math.random()*Math.PI*2;t.x=Math.cos(r)*s,t.z=Math.sin(r)*s,t.vx=0,t.vz=0;let i=1+U*.08;t.maxhp=n.hp*i,t.hp=t.maxhp,t.speed=n.speed*(1+.4*e)*(1+U*.015)*(U===1?.85:1),t.dmg=n.dmg,t.score=n.score,t.size=n.size,t.phase=Math.random()*6.28,t.flash=0,t.in=!1,t.alive=!0}function be(){let e=null,t=1/0;for(let n of D){if(!n.alive)continue;let r=(n.x-T.x)**2+(n.z-T.z)**2;r<t&&(t=r,e=n)}return e}function xe(e){e.alive=!1,ce++,le+=e.score,Math.random()<.3&&F(e.x,e.z)}function Se(e,t){e.hp-=t,e.flash=.12,e.hp<=0&&xe(e)}function Ce(){if(H||he>0)return;he=.16;let e,t;if(_e)e=_e.x-T.x,t=_e.z-T.z;else{let n=be();n?(e=n.x-T.x,t=n.z-T.z):(e=Math.sin(T.facing),t=Math.cos(T.facing))}let n=Math.hypot(e,t)||1;e/=n,t/=n,T.facing=Math.atan2(e,t);let r=null,a=1/0;for(let n of D){if(!n.alive)continue;let i=n.x-T.x,o=n.z-T.z,s=i*e+o*t;s<0||s>9||Math.abs(i*t-o*e)<.7*(.4+.6*n.size)&&s<a&&(a=s,r=n)}let o=r?a:9,s=C.attributes.position;s.setXYZ(0,T.x,i+.5,T.z),s.setXYZ(1,T.x+e*o,i+.5,T.z+t*o),s.needsUpdate=!0,w.material.opacity=.95,r&&Se(r,16)}function we(){if(H||W>0)return;W=.42,S.material.opacity=.85;let e=Math.sin(T.facing),t=Math.cos(T.facing);for(let n of D){if(!n.alive)continue;let r=n.x-T.x,i=n.z-T.z,a=Math.hypot(r,i);a>1.05+n.size*.2||(r*e+i*t)/(a||1)>.2&&Se(n,34)}}let G={},K={x:0,y:0};function Te(e,t){if(!se)return;let n=e.key.toLowerCase();if(t&&n===`i`){e.stopImmediatePropagation(),Ge();return}if(t&&n===`escape`&&Ie){e.stopImmediatePropagation(),We();return}if(hn.has(n)){if(e.stopImmediatePropagation(),n.startsWith(`arrow`)&&e.preventDefault(),n===` `){t&&we();return}G[n]=t}}typeof window<`u`&&(window.addEventListener(`keydown`,e=>Te(e,!0)),window.addEventListener(`keyup`,e=>Te(e,!1)));let Ee=null,De=null,Oe=null,ke=null,Ae=null,je=null,Me=null,Ne=null,Pe=null,q=null,J=null,Y=null,Fe=null,X=null,Ie=!1;if(typeof document<`u`){let e=document.createElement(`style`);e.textContent=`
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
    `,document.head.appendChild(e),Ee=document.createElement(`div`),Ee.className=`hoard-stick`,De=document.createElement(`div`),De.className=`knob`,Ee.appendChild(De),document.body.appendChild(Ee);let t=!1,n=e=>{let t=Ee.getBoundingClientRect(),n=e.clientX-(t.left+t.width/2),r=e.clientY-(t.top+t.height/2),i=Math.hypot(n,r)||1;i>44&&(n*=44/i,r*=44/i),De.style.transform=`translate(${n}px,${r}px)`,K.x=n/44,K.y=-r/44};Ee.addEventListener(`pointerdown`,e=>{t=!0,Ee.setPointerCapture(e.pointerId),n(e)}),Ee.addEventListener(`pointermove`,e=>{t&&n(e)});let r=()=>{t=!1,K.x=0,K.y=0,De.style.transform=`translate(0,0)`};Ee.addEventListener(`pointerup`,r),Ee.addEventListener(`pointercancel`,r),J=document.createElement(`button`),J.className=`hoard-btn hoard-fire`,J.textContent=`FIRE`,document.body.appendChild(J),Y=document.createElement(`button`),Y.className=`hoard-btn hoard-melee`,Y.textContent=`MELEE`,document.body.appendChild(Y),J.addEventListener(`pointerdown`,e=>{e.preventDefault(),navigator.vibrate?.(12),ge=!0}),J.addEventListener(`pointerup`,()=>{ge=!1}),J.addEventListener(`pointercancel`,()=>{ge=!1}),Y.addEventListener(`pointerdown`,e=>{e.preventDefault(),navigator.vibrate?.(18),we()}),Oe=document.createElement(`div`),Oe.className=`hoard-hud`,Oe.innerHTML=`HP<div class="bar"><i style="background:#e0524a"></i></div>STAMINA<div class="bar"><i style="background:#4ad08a"></i></div>HUNGER<div class="bar"><i style="background:#d89a3a"></i></div>THIRST<div class="bar"><i style="background:#3aa6dc"></i></div><div class="stat"></div>`,document.body.appendChild(Oe);let i=Oe.querySelectorAll(`i`);ke=i[0],Ae=i[1],je=i[2],Me=i[3],Ne=Oe.querySelector(`.stat`),Pe=document.createElement(`div`),Pe.className=`hoard-banner`,document.body.appendChild(Pe),q=document.createElement(`div`),q.className=`hoard-death`,q.innerHTML=`<h2>YOU DIED</h2><div class="ds"></div><button>RESTART</button>`,document.body.appendChild(q),q.querySelector(`button`).addEventListener(`click`,()=>Je());let a=document.createElement(`style`);a.textContent=`
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
    `,document.head.appendChild(a),Fe=document.createElement(`button`),Fe.className=`hoard-bagbtn`,Fe.textContent=`🎒`,Fe.title=`Inventory (I)`,document.body.appendChild(Fe),Fe.addEventListener(`click`,()=>Ge()),X=document.createElement(`div`),X.className=`hoard-bag`,document.body.appendChild(X)}let Le=0;function Re(e,t=1.8){Pe&&(Pe.textContent=e,Pe.style.display=`block`),Le=t}let ze=Math.PI/4;function Be(e){ze=e}function Q(e,t){_e={x:e,z:t}}function Ve(e){ge=e}function He(){if(typeof window<`u`&&(window.__hoardBag=Object.fromEntries(L.map(e=>[e.id,e.n]))),!X)return;let e=`<div class="panel"><h3>INVENTORY</h3><div class="slots">`;for(let t=0;t<8;t++){let n=L[t];n?e+=`<button class="slot" data-id="${n.id}" title="${bn[n.id].name}">${bn[n.id].glyph}<span class="n">${n.n}</span></button>`:e+=`<div class="slot empty"></div>`}e+=`</div><div class="craft">`,xn.forEach((t,n)=>{let r=Object.keys(t.need).every(e=>re(e)>=t.need[e]),i=Object.entries(t.need).map(([e,t])=>`${t}${bn[e].glyph}`).join(`+`);e+=`<button data-rec="${n}" ${r?``:`disabled`}>Craft ${bn[t.out].name} (${i})</button>`}),e+=`</div><button class="close">CLOSE (I)</button></div>`,X.innerHTML=e,X.querySelectorAll(`.slot[data-id]`).forEach(e=>e.addEventListener(`click`,()=>{bn[e.dataset.id].consumable&&ae(e.dataset.id)})),X.querySelectorAll(`[data-rec]`).forEach(e=>e.addEventListener(`click`,()=>oe(xn[+e.dataset.rec]))),X.querySelector(`.close`).addEventListener(`click`,()=>We())}function Ue(){!se||H||(Ie=!0,X&&X.classList.add(`open`),He())}function We(){Ie=!1,X&&X.classList.remove(`open`)}function Ge(){Ie?We():Ue()}function Ke(e){U=e,me=5+e*2,fe=`spawning`}function qe(){T.x=0,T.z=0,T.vx=0,T.vz=0,T.hp=100,T.stamina=100,T.hunger=100,T.thirst=100,T.facing=0,T.iframe=0;for(let e of D)e.alive=!1;ce=0,le=0,ue=0,H=!1,ge=!1,_e=null;for(let e of k)e.hp=150,e.alive=!0,e.mesh.scale.set(1,1,1);for(let e of te)e.active=!1,e.mesh.visible=!1;L.length=0;let e=[`food`,`water`,`food`,`water`,`bandage`,`scrap`];for(let t=0;t<6;t++){let n=Math.random()*Math.PI*2,r=1.6+Math.random()*(s-2);F(Math.cos(n)*r,Math.sin(n)*r,e[t])}q&&(q.style.display=`none`),m.position.set(0,i,0),m.visible=!0,Ke(1),He()}function Je(){qe()}function Ye(e){se=e,n.visible=e;let t=e&&c;Ee&&(Ee.style.display=t?`block`:`none`),J&&(J.style.display=t?`block`:`none`),Y&&(Y.style.display=t?`block`:`none`),Oe&&(Oe.style.display=e?`block`:`none`),Pe&&!e&&(Pe.style.display=`none`),q&&!e&&(q.style.display=`none`),Fe&&(Fe.style.display=e?`block`:`none`),We();for(let e in G)G[e]=!1;K.x=K.y=0,ge=!1,e&&qe()}let Xe=new v;function Ze(e,t,n){if(!se||Ie)return;let r=n?n.windowGlow:0;if(he=Math.max(0,he-e),W=Math.max(0,W-e),w.material.opacity=Math.max(0,w.material.opacity-e*8),S.material.opacity=Math.max(0,S.material.opacity-e*6),!H){ue+=e,T.iframe=Math.max(0,T.iframe-e);let n=(G.d||G.arrowright?1:0)-(G.a||G.arrowleft?1:0)+K.x,r=(G.w||G.arrowup?1:0)-(G.s||G.arrowdown?1:0)+K.y,a=Math.hypot(n,r);a>1&&(n/=a,r/=a);let o=a>.05,c=(G.shift||K.y>.95)&&T.stamina>2&&o,l=Math.cos(ze),u=Math.sin(ze),h=l*n+-u*r,g=-u*n+-l*r,_=c?5.2:3,v=1-Math.exp(-14*e);T.vx+=(h*_-T.vx)*v,T.vz+=(g*_-T.vz)*v,T.x+=T.vx*e,T.z+=T.vz*e;let y=Math.hypot(T.x,T.z);y>s&&(T.x*=s/y,T.z*=s/y,T.vx=0,T.vz=0),o&&(T.facing=Math.atan2(h,g)),T.stamina=p.clamp(T.stamina+(c?-34:22)*e,0,100),T.hunger=Math.max(0,T.hunger-.9*e),T.thirst=Math.max(0,T.thirst-1.15*e),T.hunger<=0||T.thirst<=0?T.hp=Math.max(0,T.hp-3.5*e):T.hunger>55&&T.thirst>55&&T.hp<100&&(T.hp=Math.min(100,T.hp+2*e));for(let e of te)e.active&&(e.x-T.x)**2+(e.z-T.z)**2<.3&&z(e.kind)&&(e.active=!1,e.mesh.visible=!1,He());for(let t of k){if(t.hp>=150)continue;let n=Math.cos(t.ang)*d,r=Math.sin(t.ang)*d;(n-T.x)**2+(r-T.z)**2<f*f&&(t.hp=Math.min(150,t.hp+30*e),t.hp>0&&(t.alive=!0))}T.hp<=0&&Qe(),m.position.set(T.x,i,T.z),m.rotation.y=T.facing,m.visible=!(T.iframe>0&&Math.floor(t*20)%2==0),ge&&Ce(),S.position.set(T.x,i+.06,T.z),S.rotation.z=-T.facing}let a=0;H||fe===`spawning`&&(me>0&&Math.random()<e*(U===1?3.5:6)&&(ye(r),me--),me<=0&&(fe=`fighting`));let o=0,c=1/0;for(let n=0;n<48;n++){let r=D[n];if(!r.alive){Xe.position.set(0,-60,0),Xe.scale.setScalar(0),Xe.updateMatrix(),E.setMatrixAt(n,Xe.matrix);continue}a++;let s=T.x-r.x,l=T.z-r.z,f=Math.hypot(s,l)||1;if(f<c&&(c=f),!H){let t=s/f*r.speed,n=l/f*r.speed,i=1-Math.exp(-6*e);if(r.vx+=(t-r.vx)*i,r.vz+=(n-r.vz)*i,f>.52){let t=r.x+r.vx*e,n=r.z+r.vz*e,i=Math.hypot(r.x,r.z),a=Math.hypot(t,n);if(!r.in&&i>=d&&a<4.9){let r=M(t,n);if(r.alive){let i=Math.atan2(n,t),a=4.9;t=Math.cos(i)*a,n=Math.sin(i)*a,r.hp-=15*e,r.hp<=0&&(r.hp=0,r.alive=!1)}}a<d-.1&&(r.in=!0),r.x=t,r.z=n}else T.iframe<=0&&(o=Math.max(o,r.dmg))}r.flash=Math.max(0,r.flash-e);let p=Math.sin(t*6+r.phase)*.04;Xe.position.set(r.x,i+.3*r.size*u+p,r.z),Xe.rotation.set(0,Math.atan2(r.vx,r.vz),Math.sin(t*3+r.phase)*.12),Xe.scale.setScalar(r.size*u),Xe.updateMatrix(),E.setMatrixAt(n,Xe.matrix),ee.set(gn[r.type].color),r.flash>0?ee.lerp(vn,.7):ee.lerp(yn,.35*(1-r.hp/r.maxhp)),E.setColorAt(n,ee)}E.instanceMatrix.needsUpdate=!0,E.instanceColor&&(E.instanceColor.needsUpdate=!0);let l=0;for(let e of k){e.alive&&l++;let t=Math.max(0,e.hp/150);e.mesh.scale.y=e.alive?Math.max(.18,t):.12,e.mesh.position.y=i+.35*e.mesh.scale.y,e.mesh.material.color.copy(e.baseColor).lerp(yn,(1-t)*.55)}!H&&o>0&&(T.hp=Math.max(0,T.hp-o*(U===1?.5:1)),T.iframe=.6,T.hp<=0&&Qe()),!H&&fe===`fighting`&&a===0&&me<=0&&(fe=`complete`,pe=2.2,Re(`WAVE ${U} CLEAR`,2)),!H&&fe===`complete`&&(pe-=e,pe<=0&&(Ke(U+1),Re(`WAVE ${U}`,1.4))),Le>0&&(Le-=e,Le<=0&&Pe&&(Pe.style.display=`none`)),ke&&(ke.style.width=`${T.hp}%`),Ae&&(Ae.style.width=`${T.stamina}%`),je&&(je.style.width=`${T.hunger}%`),Me&&(Me.style.width=`${T.thirst}%`),Ne&&(Ne.textContent=`WAVE ${U}   KILLS ${ce}   SCORE ${le}`),typeof window<`u`&&(window.__hoard={active:se,dead:H,paused:Ie,hp:Math.round(T.hp),stamina:Math.round(T.stamina),hunger:Math.round(T.hunger),thirst:Math.round(T.thirst),zombies:a,barriers:l,pickups:te.filter(e=>e.active).length,inv:Object.fromEntries(L.map(e=>[e.id,e.n])),wave:U,kills:ce,score:le,weapon:`gun`,znear:+c.toFixed(2),px:+T.x.toFixed(2),pz:+T.z.toFixed(2)})}function Qe(){H=!0,ge=!1,q&&(q.querySelector(`.ds`).innerHTML=`Wave reached: ${U}<br>Kills: ${ce}<br>Score: ${le}<br>Survived: ${ue.toFixed(0)}s`,q.style.display=`flex`)}return{group:n,update:Ze,setActive:Ye,setAzimuth:Be,setAim:Q,setFiring:Ve,melee:we,reset:qe,restart:Je,openBag:Ue,closeBag:We,toggleBag:Ge,addItem:z,get player(){return T},get dead(){return H},get active(){return se},get paused(){return Ie},get inv(){return L.map(e=>({...e}))},get nearestPickup(){let e=null,t=1e9;for(let n of te){if(!n.active)continue;let r=(n.x-T.x)**2+(n.z-T.z)**2;r<t&&(t=r,e=n)}return e?{x:e.x,z:e.z}:null},setTarget(){}}}var{Timer:Cn}=ae,wn=new URLSearchParams(window.location.search),Tn=wn.get(`demo`)===`1`||wn.has(`capture`);window.__demo=Tn;var En=(wn.get(`city`)?Number(wn.get(`city`)):0)||Math.random()*1e9|0,Dn=0,On=un({demo:Tn,citySeed:En,profileIndex:Dn}),{renderer:kn,scene:An,rig:jn,sunRig:Mn,city:Nn,landmarkFactory:Pn}=On,Fn=Sn({extent:Nn.extent,plinthTop:.3});An.add(Fn.group),window.__hoardApi=Fn;var In=!0;window.__shadows=In,window.__scene=`hoard`;var Ln=new R,Rn=new Set,zn=6.5;function Bn(e){Nn.group.traverse(t=>{!t.isMesh||t.userData.ground||!t.visible||(t.getWorldPosition(Ln),Math.hypot(Ln.x,Ln.z)<e&&(t.visible=!1,Rn.add(t)))})}function Vn(){for(let e of Rn)e.visible=!0;Rn.clear()}var Hn=new ie,Un=new R,Wn=new R,Gn=new Set;function Kn(){for(let e of Gn)e.material&&(e.material.opacity=1,e.material.transparent=!!e.userData._wasT,e.material.depthWrite=e.userData._wasDW!==!1);Gn.clear()}function qn(e){Kn();let t=jn.camera;for(let[n,r]of[[0,0],[.7,.4],[-.7,.4]]){Wn.set(e.x+n,.6,e.z+r),Un.subVectors(Wn,t.position);let i=Un.length();Hn.set(t.position,Un.normalize()),Hn.far=i-.4;for(let e of Hn.intersectObject(Nn.group,!0)){let t=e.object;!t.material||t.userData.ground||Gn.has(t)||(t.userData._wasT=t.material.transparent,t.userData._wasDW=t.material.depthWrite,t.material.transparent=!0,t.material.opacity=.16,t.material.depthWrite=!1,Gn.add(t))}}}function Jn(){Fn.setActive(!0),Bn(zn),jn.setMode(W.DIMETRIC),jn.setZoom(2.8,!0),jn.setTarget(Fn.player.x,.6,Fn.player.z,!0)}var Yn=new ie,Xn=new H,Zn=new c(new R(0,1,0),-.32),Qn=new R,$n=window.matchMedia&&window.matchMedia(`(pointer: coarse)`).matches,er=!1,tr=0,nr=0,rr=.005,ir=(e,t)=>{Xn.x=e/window.innerWidth*2-1,Xn.y=-(t/window.innerHeight)*2+1};kn.domElement.addEventListener(`contextmenu`,e=>e.preventDefault()),kn.domElement.addEventListener(`mousedown`,e=>{e.button===0&&(ir(e.clientX,e.clientY),Fn.setFiring(!0)),e.button===2&&(er=!0,tr=e.clientX,nr=e.clientY)}),window.addEventListener(`mousemove`,e=>{ir(e.clientX,e.clientY),er&&(jn.orbit(-(e.clientX-tr)*rr,-(e.clientY-nr)*rr),tr=e.clientX,nr=e.clientY)}),window.addEventListener(`mouseup`,()=>{Fn.setFiring(!1),er=!1}),kn.domElement.addEventListener(`wheel`,e=>{e.preventDefault(),jn.zoomBy(Math.exp(e.deltaY*.0015))},{passive:!1}),window.addEventListener(`keydown`,e=>{(e.key===`h`||e.key===`H`)&&(In=!In,window.__shadows=In)}),Pn.whenReady.then(()=>{Nn.generate(En,Dn),On.fitShadowFrustum(),Vn(),Bn(zn),window.__cityReady=!0});var ar=new Cn;ar.connect(document);function or(){ar.update();let e=Math.min(ar.getDelta(),.1);Fn.setAzimuth(jn.azimuth),$n||(Yn.setFromCamera(Xn,jn.camera),Yn.ray.intersectPlane(Zn,Qn)&&Fn.setAim(Qn.x,Qn.z)),Fn.update(e,ar.getElapsed(),Mn),jn.setTarget(Fn.player.x,.6,Fn.player.z),jn.update(e),qn(Fn.player),On.updateWorld(e,ar.getElapsed(),{shadowsOn:In,seasonTarget:0});let t=On.decideStyle();On.renderCityPipeline(t,null),requestAnimationFrame(or)}Jn(),or(),mn({key:`hoard`,title:`The Hoard`,tips:[`Move: WASD / arrows · on touch: the left thumb-stick`,`Aim: mouse / drag · Fire: hold click / the FIRE button · Melee: the MELEE button`,`Survive the waves · B: bag & crafting · Esc: exit`]}),window.addEventListener(`resize`,()=>{On.resize()});