import{$ as e,A as t,B as n,C as r,D as i,E as a,F as o,G as s,H as c,I as l,J as u,K as d,L as f,M as p,N as m,O as h,P as g,Q as _,R as v,S as y,T as b,U as x,V as S,W as C,X as w,Y as T,Z as E,_ as ee,a as D,b as te,c as O,d as k,et as ne,f as re,g as ie,h as A,i as j,it as M,j as N,k as P,l as ae,m as F,n as oe,nt as I,o as se,p as L,q as ce,r as le,rt as R,s as z,t as ue,tt as de,u as B,v as fe,w as pe,x as me,y as he,z as V}from"./three-Pxe5c5S4.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var ge=Math.atan(1/Math.SQRT2),_e=Math.atan(.5),ve=Math.PI/4,H={PERSPECTIVE:4,ISOMETRIC:5,DIMETRIC:6},U=.12,ye=1.45,be=4,xe=40,Se=1.5,W=16,Ce=6,we=22,Te=3.5,Ee=11,De=(e,t,n)=>e+(t-e)*(1-Math.exp(-8*n)),G=(e,t)=>e+Math.PI*2*Math.round((t-e)/(Math.PI*2));function Oe({aspect:e,fov:t=48,near:n=.1,far:r=100,target:i=new R(0,.8,0),azimuth:a=ve,elevation:o=.52,distance:s=12,zoom:c=5.5}={}){let u=new v(t,e,n,r),d=new l(-1,1,1,-1,n,r),f=H.PERSPECTIVE,p=e,m={azimuth:a,elevation:o,distance:s,zoom:c,target:i.clone()},h={azimuth:a,elevation:o,distance:s,zoom:c,target:i.clone()},g=!1,_=()=>f===H.PERSPECTIVE?u:d;function y(e){e!==f&&(f=e,f===H.ISOMETRIC||f===H.DIMETRIC?(m.elevation=f===H.ISOMETRIC?ge:_e,m.azimuth=G(ve,h.azimuth),g=!0):g=!1)}function b(e,t){m.azimuth+=e,g||(m.elevation=P.clamp(m.elevation+t,U,ye))}function x(e){f===H.PERSPECTIVE?m.distance=P.clamp(m.distance*e,be,xe):m.zoom=P.clamp(m.zoom*e,Se,W)}function S(e,t){let n=m.azimuth,r=f===H.PERSPECTIVE?m.distance*.04:m.zoom*.08,i=new R(Math.cos(n),0,-Math.sin(n)),a=new R(-Math.sin(n),0,-Math.cos(n));m.target.addScaledVector(i,e*r),m.target.addScaledVector(a,t*r)}function C(e,t){p=e/t,u.aspect=p,u.updateProjectionMatrix()}function w(e){h.azimuth=De(h.azimuth,m.azimuth,e),h.elevation=De(h.elevation,m.elevation,e),h.distance=De(h.distance,m.distance,e),h.zoom=De(h.zoom,m.zoom,e),h.target.x=De(h.target.x,m.target.x,e),h.target.y=De(h.target.y,m.target.y,e),h.target.z=De(h.target.z,m.target.z,e);let t=Math.cos(h.elevation),n=Math.sin(h.elevation),r=Math.cos(h.azimuth),i=Math.sin(h.azimuth),a=_();if(a.position.set(h.target.x+h.distance*t*i,h.target.y+h.distance*n,h.target.z+h.distance*t*r),a.lookAt(h.target),a.isOrthographicCamera){let e=h.zoom,t=e*p;a.left=-t,a.right=t,a.top=e,a.bottom=-e,a.updateProjectionMatrix()}}function T(e,t,n,r=!1){m.target.set(e,t,n),r&&h.target.copy(m.target)}function E(e,t=!1){m.zoom=P.clamp(e,Se,W),t&&(h.zoom=m.zoom)}return{get camera(){return _()},get mode(){return f},get azimuth(){return h.azimuth},setTarget:T,setZoom:E,get styleT(){return f===H.PERSPECTIVE?P.clamp((h.distance-Ce)/(we-Ce),0,1):P.clamp((h.zoom-Te)/(Ee-Te),0,1)},setMode:y,orbit:b,zoomBy:x,pan:S,setViewport:C,update:w}}var ke={value:0},Ae=new L(`#ffffff`),je={value:0},Me={value:0},Ne={value:0},Pe=new I,Fe={value:0},Ie={value:0},K=`
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
`;function Le(e){e.uniforms.uVector=ke,e.uniforms.uVecTint={value:Ae},e.uniforms.uVecShadow=je,e.uniforms.uSnow=Me,e.uniforms.uCloud=Ne,e.uniforms.uCloudOff={value:Pe},e.uniforms.uFogCharm=Fe}function Re(e){return e.replace(`#include <fog_fragment>`,`
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
  `)}function ze(e){return e.replace(`#include <common>`,`#include <common>
varying vec3 vVecN;
varying vec3 vVecP;
varying vec2 vWorldXZ;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
  vVecN = normal;
  vVecP = position;
  vWorldXZ = (modelMatrix * vec4(position, 1.0)).xz;`)}function Be(e){return e.replace(`#include <shadowmap_pars_fragment>`,`#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>`)}var Ve=`col *= mix(1.0, getShadowMask(), uVecShadow);`;function He(e,{color:t,id:n,windowGlow:r,winColors:i=[`#ffb852`,`#8cd9ff`],litFrac:a=.55}={}){let o=[0,1,2].map(e=>new L(i[e]??i[i.length-1]));return e.customProgramCacheKey=()=>`lgr-vec-tower`,e.onBeforeCompile=e=>{Le(e),e.uniforms.uWindowGlow=r,e.uniforms.uWinId={value:n},e.uniforms.uVecColor={value:new L(t)},e.uniforms.uWinA={value:o[0]},e.uniforms.uWinB={value:o[1]},e.uniforms.uWinC={value:o[2]},e.uniforms.uWinLit={value:a},e.vertexShader=ze(e.vertexShader),e.fragmentShader=Re(Be(e.fragmentShader.replace(`#include <common>`,`#include <common>
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
          ${Ve}                                  // the sun's shadow darkens the body
          vec3 wcol; vec2 w = winTerms(wcol);
          vec3 glass = vec3(0.17, 0.23, 0.34);          // dark glass-blue panes (day)
          col = mix(col, glass, w.x * 0.85);
          col += w.x * w.y * wcol * uWindowGlow * 1.5;  // …windows EMIT (unshadowed) at night
          gl_FragColor = vec4(col, diffuseColor.a);
        }`)))},e}function q(e,{color:t=null,glow:n=null,glowDay:r=0,glowNight:i=1,windowGlow:a=null,season:o=!1}={}){let s=t===null,c=n!==null&&a!==null;return e.customProgramCacheKey=()=>`lgr-vec|`+(s?`d`:`c`)+(c?`g`:``)+(o?`s`:``),e.onBeforeCompile=e=>{Le(e),s||(e.uniforms.uVecColor={value:new L(t)}),c&&(e.uniforms.uGlow={value:new L(n)},e.uniforms.uGlowDay={value:r},e.uniforms.uGlowNight={value:i},e.uniforms.uWindowGlow=a),o&&(e.uniforms.uSeason=Ie),e.vertexShader=ze(e.vertexShader);let l=s?`diffuseColor.rgb`:`uVecColor`,u=o?`seasonShift(${l})`:l,d=(s?``:`uniform vec3 uVecColor;
`)+(c?`uniform vec3 uGlow; uniform float uGlowDay; uniform float uGlowNight; uniform float uWindowGlow;
`:``)+(o?`uniform float uSeason;
vec3 seasonShift(vec3 c){
  c = mix(c, vec3(0.86, 0.46, 0.13), smoothstep(0.40, 0.70, uSeason));   // → autumn orange
  c = mix(c, vec3(0.46, 0.33, 0.20), smoothstep(0.75, 1.00, uSeason));   // → bare brown
  return c;
}
`:``),f=c?`uGlow * mix(uGlowDay, uGlowNight, uWindowGlow)`:`vec3(0.0)`,p=Re(Be(e.fragmentShader.replace(`#include <common>`,`#include <common>
`+d+K).replace(`#include <opaque_fragment>`,`#include <opaque_fragment>
        if (uVector > 0.5) {
          vec3 col = vecShade(${u});
          ${Ve}                            // the sun's shadow darkens the flat tier…
          gl_FragColor = vec4(col + ${f}, diffuseColor.a);  // …but the night glow stays lit
        }`)));c&&(p=p.replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>\n  totalEmissiveRadiance += ${f};`)),e.fragmentShader=p},e}function Ue(e){let t=e>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function We(e){let t=Ue(e);return{next:t,range:(e,n)=>e+(n-e)*t(),int:(e,n)=>e+Math.floor(t()*(n-e+1)),pick:e=>e[Math.floor(t()*e.length)],chance:e=>t()<e}}var J=[{key:`manhattan`,name:`Manhattan`,towers:[`#EDE3C8`,`#D9B98A`,`#B5562F`,`#A8C8E8`,`#2E3F5C`],ground:`#7CC455`,street:`#9AA0A6`,sidewalk:`#C8CCD0`,park:`#5DB347`,water:`#29A8D8`,shopfronts:[`#C04A3A`,`#3A7AC0`,`#C09A2A`],glass:`#7FA8CC`,winColors:[`#ffd27a`,`#9ad6ff`],hMax:4.6,sigma:.36,roofRate:.35,pSplit:.6,nightLit:.55,roofTint:null,coast:{base:.55,out:1,in:.6,jag:1.05},landmarks:[`empireState`,`chrysler`,`liberty`]},{key:`paris`,name:`Paris`,towers:[`#E8DCC0`,`#F2EAD6`,`#E0D2B4`],ground:`#8CC46A`,street:`#A8A29A`,sidewalk:`#D4CEC2`,park:`#6DB35A`,water:`#3FA8C8`,shopfronts:[`#C04A3A`,`#3A6B5A`,`#7A5AC0`],glass:`#5A6B7A`,winColors:[`#ffdca0`,`#ffcaa0`],hMax:1.5,sigma:.9,roofRate:.15,pSplit:.75,nightLit:.45,roofTint:`#6A7886`,coast:{base:1.05,out:.55,in:.3,jag:.5},landmarks:[`eiffel`,`arcDeTriomphe`,`sacreCoeur`]},{key:`neoTokyo`,name:`Neo-Tokyo`,towers:[`#2A3038`,`#3A4250`,`#252B36`,`#4A4456`],ground:`#3A4A42`,street:`#5A6068`,sidewalk:`#7A8088`,park:`#2E5E46`,water:`#0E6878`,shopfronts:[`#E8483A`,`#5AE8E0`,`#E85AA0`],glass:`#5AE8E0`,winColors:[`#5AE8E0`,`#E85AA0`,`#E8E06A`],hMax:5.2,sigma:.42,roofRate:.6,pSplit:.6,nightLit:.7,roofTint:null,coast:{base:.7,out:1.05,in:.62,jag:1.7},landmarks:[`tokyoTower`,`pagoda`,`neonBillboard`]}];J.map(e=>e.key);var Y=.3,Ge=1.9,Ke=.55,qe=2.45,Je=.12,Ye=.6,Xe=6,X={BASE:.7,OUT:.95,IN:.55,JAG:1,SAMPLES_PER_EDGE:28,HARBOR_DEPTH:.55,HARBOR_WIDTH:.26},Ze={PLINTH_TOP:Y,BLOCK:Ge,STREET:Ke,PITCH:qe,SIDEWALK:Je,SHORE:Ye,N:Xe,COAST:X};function Qe(e,t,n){let r=n?.base??X.BASE,i=n?.out??X.OUT,a=n?.in??X.IN,o=n?.jag??X.JAG,s=t+r,c=We((e^789079)>>>0),l=[2,3,5,8,11,13].map(e=>({k:e,amp:1/e*o**((e-2)/6),phase:c.range(0,Math.PI*2)})),u=l.reduce((e,t)=>e+t.amp,0),d=e=>{let t=0;for(let n of l)t+=n.amp*Math.sin(n.k*e*Math.PI*2+n.phase);return Math.max(-1,Math.min(1,t/(u*.6)))},f=[{fix:+s,nx:1,nz:0,sign:1},{fix:+s,nx:0,nz:1,sign:-1},{fix:-s,nx:-1,nz:0,sign:-1},{fix:-s,nx:0,nz:-1,sign:1}],p=t+.22,m=X.SAMPLES_PER_EDGE,h=4*m,g=[],_=0;for(let e=0;e<4;e++){let t=f[e];for(let n=0;n<m;n++,_++){let o=n/m,c=_/h,l=(-s+2*s*o)*t.sign,u=d(c),f=u>=0?u*i:u*a;if(e===0){let e=Math.abs(o-.5);if(e<X.HARBOR_WIDTH){let t=.5+.5*Math.cos(e/X.HARBOR_WIDTH*Math.PI);f-=(r+X.HARBOR_DEPTH)*t}}let v,y;t.nx===0?(y=t.fix+t.nz*f,v=l,y=t.nz>0?Math.max(y,p):Math.min(y,-p)):(v=t.fix+t.nx*f,y=l,v=t.nx>0?Math.max(v,p):Math.min(v,-p)),g.push(new I(v,y))}}return{points:g,B:s,maxR:s+i,harborX:p}}function $e(e){(Array.isArray(e)?e:[e]).forEach(e=>e&&e.dispose&&e.dispose())}function et({seed:e=1,profileIndex:t=0,landmarkFactory:n=null,windowGlow:r}){let i=new y,a=new y,o=new y;a.raycast=()=>{},o.raycast=()=>{},i.add(a,o);let s=new fe(16773594,3);s.position.set(.45,.6,-.65).multiplyScalar(10);let c=new pe(7313331,2762272,1);i.add(s,c);let l=0,u=[],d={seed:e,profileIndex:t,profile:J[t],extent:0,meshCount:0};function f(e,t,n,r){let i=new N(new D(e,.04,t),q(new m({color:r,roughness:.95,flatShading:!0}),{color:r}));return i.position.y=n,i.userData.ground=!0,i}function h(e,t){for(let e of a.children)e.geometry&&e.geometry.dispose(),$e(e.material);a.clear();for(let e of o.children)e.traverse(e=>{e.isMesh&&$e(e.material)});o.clear(),u.length=0,l=0;let r=We(e),i=J[t],s=(Xe-1)/2*qe,c=7.075;d={seed:e,profileIndex:t,profile:i,extent:c+(i.coast?.base??X.BASE),meshCount:0};let p=Qe(e,c,i.coast);d.coast=p;let h=new T;p.points.forEach((e,t)=>t?h.lineTo(e.x,e.y):h.moveTo(e.x,e.y)),h.closePath();let y=new N(new he(h,{depth:2,bevelEnabled:!1,steps:1}),q(new m({color:i.ground,roughness:.9,flatShading:!0,side:2}),{color:i.ground}));y.rotation.x=-Math.PI/2,y.position.y=Y-2,y.userData.ground=!0,a.add(y);let S=2*7.195;a.add(f(S,S,.32,i.street)),b(p.harborX,i);let C=[];for(let e=0;e<Xe;e++)for(let t=0;t<Xe;t++)C.push([e,t]);let w=new Set,E=Math.max(1,Math.round(C.length*.08));for(;w.size<E;)w.add(r.int(0,C.length-1));let ee=r.range(-2.45*.6,qe*.6),D=r.range(-2.45*.6,qe*.6),te=Math.hypot(s,s),O=[];if(C.forEach(([e,t],n)=>{let o=(e-(Xe-1)/2)*qe,s=(t-(Xe-1)/2)*qe;if(a.add(f(Ge,Ge,.32999999999999996,i.sidewalk).translateX(o).translateZ(s)),w.has(n)){a.add(f(Ge-Je*2,Ge-Je*2,.35,i.park).translateX(o).translateZ(s));let e=r.int(3,5);for(let t=0;t<e;t++)x(o+r.range(-.6,.6),s+r.range(-.6,.6),i,r);return}let c=Ge-Je*2,l=r.chance(i.pSplit)?2:1,u=r.chance(i.pSplit)?2:1,d=c/l,p=c/u;for(let e=0;e<l;e++)for(let t=0;t<u;t++){let n=o-c/2+d*(e+.5),a=s-c/2+p*(t+.5),l=Math.max(.6,d-.1),u=Math.max(.6,p-.1),f=Math.hypot(n-ee,a-D)/te,m=Math.exp(-(f*f)/(2*i.sigma*i.sigma)),h=Math.max(.5,.5+(i.hMax-.5)*m*r.range(.75,1.25));h>i.hMax*.5&&Math.min(l,u)>=.7&&O.push({lx:n,lz:a,fw:l,fd:u,h,r:f}),g(n,a,l,u,h,i,r)}}),n&&n.ready){O.sort((e,t)=>e.r-t.r);let e=[],t=i.landmarks;for(let r=0;r<t.length&&O.length;r++){let a=null;for(let t of O)if(e.every(e=>Math.hypot(e.lx-t.lx,e.lz-t.lz)>qe*.9)){a=t;break}a||=O[0],e.push(a),_(a.lx,a.lz);let s=i.hMax*n.heightFactor(t[r]),c=n.make(t[r],{x:a.lx,z:a.lz,w:a.fw,d:a.fd,h:s,plinthTop:Y});if(c){o.add(c);let e=new j().setFromObject(c);v(e.min.x-.15,e.max.x+.15,e.min.z-.15,e.max.z+.15)}}}a.traverse(e=>{e.isMesh&&(e.userData.ground?(e.castShadow=!1,e.receiveShadow=!0):e.material&&e.material.isMeshBasicMaterial?(e.castShadow=!1,e.receiveShadow=!1):(e.castShadow=!0,e.receiveShadow=!0))}),o.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),d.meshCount=a.children.length+o.children.length;let k=0;for(let e of a.children){let t=e.position;k=(Math.imul(k,16777619)^(Math.round(t.x*100)*2654435761^Math.round(t.y*100)*40503^Math.round(t.z*100)*2246822519))>>>0}for(let e of d.coast.points)k=(Math.imul(k,16777619)^(Math.round(e.x*100)*2654435761^Math.round(e.y*100)*40503))>>>0;d.sig=k,window.__city={seed:e,profile:i.key,meshes:d.meshCount,sig:k}}function g(e,t,n,i,o,s,c){let d=He(new m({flatShading:!0,roughness:.7,metalness:.05}),{color:c.pick(s.towers),id:++l,windowGlow:r,winColors:s.winColors,litFrac:s.nightLit}),f=new N(new D(n,o,i),d);if(f.position.set(e,Y+o/2,t),f.userData.lot=[e,t],a.add(f),s.roofTint){let r=q(new m({color:s.roofTint,roughness:.85,flatShading:!0}),{color:s.roofTint}),c=new N(new D(n*1.02,.08,i*1.02),r);c.position.set(e,Y+o+.04,t),c.userData.lot=[e,t],a.add(c)}if(o<1.4){let r=c.pick(s.shopfronts),o=new N(new D(n*1.04,.18,i*1.04),q(new m({color:r,roughness:.8,flatShading:!0}),{color:r}));o.position.set(e,.39,t),o.userData.lot=[e,t],a.add(o)}if(o>s.hMax*.45&&c.chance(s.roofRate)){let r=c.chance(.5)?new N(new D(n*.4,.18,i*.4),q(new m({color:`#9a9a9a`,flatShading:!0}),{color:`#9a9a9a`})):new N(new A(n*.18,n*.18,.22,10),q(new m({color:`#b9bec4`,flatShading:!0}),{color:`#b9bec4`}));if(r.position.set(e+c.range(-.1,.1),Y+o+.11,t+c.range(-.1,.1)),r.userData.lot=[e,t],a.add(r),c.chance(.25)){let n=new N(new w(.05,6,5),new p({color:`#ff3b30`,transparent:!0,opacity:1}));n.position.set(e,Y+o+.26,t),n.userData.lot=[e,t],n.raycast=()=>{},a.add(n),u.push({mesh:n,phase:c.range(0,6.28)})}}}function _(e,t){for(let n=a.children.length-1;n>=0;n--){let r=a.children[n];r.userData.lot&&Math.abs(r.userData.lot[0]-e)<1e-4&&Math.abs(r.userData.lot[1]-t)<1e-4&&(r.geometry&&r.geometry.dispose(),$e(r.material),a.remove(r))}for(let e=u.length-1;e>=0;e--)u[e].mesh.parent||u.splice(e,1)}function v(e,t,n,r){for(let i=a.children.length-1;i>=0;i--){let o=a.children[i];o.userData.lot&&o.position.x>=e&&o.position.x<=t&&o.position.z>=n&&o.position.z<=r&&(o.geometry&&o.geometry.dispose(),$e(o.material),a.remove(o))}}function b(e,t){let n=q(new m({color:`#7a5634`,roughness:.95,flatShading:!0}),{color:`#7a5634`}),r=(e,t,r,i)=>{let o=new N(new D(e,.06,t),n);o.position.set(r,Y-.16,i),a.add(o)};r(.24,2,e+.02,0),r(1.3,.22,e+.7,-.72),r(1.3,.22,e+.7,.72)}function x(e,t,n,r){let i=new L(n.park),o=(n,o)=>{let s=i.clone().offsetHSL(0,0,r.range(-.06,.06)).getStyle(),c=new N(new w(n,7,6),q(new m({color:s,flatShading:!0}),{color:s,season:!0}));c.scale.y=.7,c.position.set(e,Y+o,t),c.userData.lot=null,a.add(c)},s=new N(new D(.05,.18,.05),q(new m({color:`#6b4a2a`,flatShading:!0}),{color:`#6b4a2a`}));s.position.set(e,.39,t),a.add(s),o(.22,.28),o(.16,.46)}function S(e){for(let t of u)t.mesh.material.opacity=.35+.65*(.5+.5*Math.sin(e*3+t.phase))}return h(e,t),{group:i,key:s,fill:c,update:S,generate:h,get state(){return d},get extent(){return d.extent},get waterColor(){return d.profile.water},profiles:J}}var tt=Math.PI*2,nt=.7,rt=90,it=[{name:`night`,sun:`#4a6f9e`,intensity:.35,hemiSky:`#26344f`,hemiGround:`#0c1018`,horizon:`#1e2942`,sky:`#36486e`,exposure:.95,outline:`#101a30`,window:1,toonGain:2.6},{name:`dawn`,sun:`#ff9e54`,intensity:2.4,hemiSky:`#8a7686`,hemiGround:`#2a1f1a`,horizon:`#b8512c`,sky:`#ffb070`,exposure:1.05,outline:`#241826`,window:.3,toonGain:2},{name:`noon`,sun:`#fff4e0`,intensity:4.6,hemiSky:`#9cb8cc`,hemiGround:`#33302a`,horizon:`#5e7689`,sky:`#aacadd`,exposure:1.18,outline:`#0b0a08`,window:0,toonGain:1.7},{name:`dusk`,sun:`#ff6b35`,intensity:2,hemiSky:`#7a566a`,hemiGround:`#281a18`,horizon:`#b0432a`,sky:`#ff8a5a`,exposure:1.05,outline:`#1f1420`,window:.4,toonGain:2}],at=e=>e-Math.floor(e),ot=(e,t,n)=>e+(t-e)*n,st=(e,t,n)=>e+(t-e)*(1-Math.exp(-6*n));function ct({t:e=.5}={}){let t=e,n=e,r=!1,i=!1,a=it.map(e=>({name:e.name,sun:new L(e.sun),hemiSky:new L(e.hemiSky),hemiGround:new L(e.hemiGround),horizon:new L(e.horizon),sky:new L(e.sky),outline:new L(e.outline),intensity:e.intensity,exposure:e.exposure,window:e.window,toonGain:e.toonGain})),o=new R(0,1,0),s=new L(`#fff4e0`),c=new L(`#6f97b3`),l=new L(`#2a2620`),u=new L(`#3a4a57`),d=new L(`#7da3bd`),f=new L(`#0b0a08`),p=new L(`#000000`),m=3,h=1,g=0,_=1.7,v=new R;function y(e){let t=at(e)*4,n=Math.floor(t)%4,r=(n+1)%4,i=t-Math.floor(t),y=a[n],b=a[r];s.lerpColors(y.sun,b.sun,i),c.lerpColors(y.hemiSky,b.hemiSky,i),l.lerpColors(y.hemiGround,b.hemiGround,i),u.lerpColors(y.horizon,b.horizon,i),d.lerpColors(y.sky,b.sky,i),f.lerpColors(y.outline,b.outline,i),m=ot(y.intensity,b.intensity,i),h=ot(y.exposure,b.exposure,i),g=ot(y.window,b.window,i),_=ot(y.toonGain,b.toonGain,i),p.setRGB(.045*g,.075*g,.14*g);let x=at(e)*tt-Math.PI/2,S=Math.cos(x),C=Math.sin(x);v.set(S,C*Math.cos(nt),C*Math.sin(nt)),v.y>=0?o.copy(v):o.copy(v).negate()}return y(t),{sunDir:o,sunColor:s,hemiSky:c,hemiGround:l,horizon:u,sky:d,outline:f,toonFloor:p,get sunIntensity(){return m},get exposure(){return h},get windowGlow(){return g},get toonGain(){return _},get t(){return at(t)},get auto(){return r},get clock(){let e=Math.round(at(t)*24*60)%1440;return`${String(Math.floor(e/60)).padStart(2,`0`)}:${String(e%60).padStart(2,`0`)}`},cyclePreset(){n=(Math.floor(t*4+1e-4)+1)/4},nudge(e){n+=e/24},goTo(e){n=e},toggleAuto(){r=!r},setReducedMotion(e){i=e},update(e){r&&!i&&(n+=e/rt),t=st(t,n,e),y(t)}}}function lt(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.35,`rgba(255,255,255,0.55)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new O(e);return r.colorSpace=d,r}function ut(e,t){let n=[];for(let r=0;r<16;r++){let i=r/16*Math.PI*2;n.push(new R(Math.cos(i)*e,t,Math.sin(i)*e))}return new B(n,!0,`catmullrom`,.5)}function dt(e){let t=(t,n)=>Math.exp(-((e-t)*(e-t))/(2*n*n)),n=Math.max(t(.33,.05),t(.75,.06)),r=P.smoothstep(e,.24,.3)*(1-P.smoothstep(e,.8,.88));return P.clamp(.15+.55*r+.45*n,.12,1)}function ft(){let{PITCH:e,N:t,PLINTH_TOP:n}=Ze,r=t+1,i=n+.04,a=n=>(n-t/2)*e,o=t/2,s=[],c=(e,t)=>t*r+e;for(let e=0;e<r;e++)for(let t=0;t<r;t++)s.push({x:a(t),z:a(e),i:t,j:e,edges:[]});let l=[],u=(t,n)=>{let r=(s[t].i===o||s[t].j===o)&&(s[n].i===o||s[n].j===o),i=l.length;l.push({a:t,b:n,len:e,main:r}),s[t].edges.push(i),s[n].edges.push(i)};for(let e=0;e<r;e++)for(let t=0;t<r;t++)t<r-1&&u(c(t,e),c(t+1,e)),e<r-1&&u(c(t,e),c(t,e+1));return{nodes:s,edges:l,y:i,mid:o}}function pt({plinthTop:e=.3,extent:t=4,profile:n=null}={}){let r=new y,i=ft(),{nodes:a,edges:s}=i,l=i.y,u=.34,d=0;{let e=Ze.PITCH-u*2;d=Math.max(1,Math.floor((e+.26)/.56))}let f=new p({color:`#e8c84a`,fog:!0}),h=new b(new D(.05,.012,.3),f,s.length*d);h.frustumCulled=!1,h.raycast=()=>{},h.receiveShadow=!1,h.castShadow=!1,r.add(h);{let e=new o,t=0;for(let n of s){let r=a[n.a],i=a[n.b],o=i.x-r.x,s=i.z-r.z,c=Math.hypot(o,s),f=o/c,p=s/c,m=Math.atan2(f,p),g=c-u*2;for(let n=0;n<d;n++){let i=u+(d===1?g/2:g*n/(d-1));e.position.set(r.x+f*i,l,r.z+p*i),e.rotation.set(0,m,0),e.updateMatrix(),h.setMatrixAt(t++,e.matrix)}}h.instanceMatrix.needsUpdate=!0}let g=new b(new D(.34,.26,.74),q(new m({flatShading:!0,roughness:.5,metalness:.3})),12);g.castShadow=!0,g.receiveShadow=!1,g.frustumCulled=!1,g.raycast=()=>{};let _=new z,v=new Float32Array(72),x=new Float32Array(72),C=new L(`#fff0c0`),w=new L(`#ff3528`);for(let e=0;e<12;e++)C.toArray(x,e*3),w.toArray(x,(12+e)*3),v[e*3+1]=-50,v[(12+e)*3+1]=-50;_.setAttribute(`position`,new se(v,3)),_.setAttribute(`color`,new se(x,3));let T=new c({size:.72,sizeAttenuation:!0,map:lt(),vertexColors:!0,transparent:!0,opacity:0,blending:2,depthWrite:!1}),E=new S(_,T);E.frustumCulled=!1,E.raycast=()=>{},r.add(g,E);let ee=[`#f4c430`,`#c0392b`,`#d8dde2`,`#9aa7b4`,`#6b7785`,`#5a7d9a`],te=Ue(2403557),O=s.map((e,t)=>t).filter(e=>s[e].main),k=[];for(let e=0;e<12;e++){let t=e<4&&O.length?O[te()*O.length|0]:te()*s.length|0,n=e===1;k.push({edge:t,fwd:te()<.5,s:te()*s[t].len,speed:n?.5:.78+e%3*.1,lenZ:n?1.45:1,color:ee[n?1:e===0?0:2+e%4],rng:Ue(12648430+e*2654435761)})}let ne=new L;k.forEach((e,t)=>g.setColorAt(t,ne.set(e.color)));function re(e,t,n){let r=a[e],i=r.edges.filter(e=>e!==t);if(i.length===0)return t;let o=s[t],c=o.a===e?o.b:o.a,l=r.x-a[c].x,u=r.z-a[c].z,d=Math.hypot(l,u)||1,f=i[0],p=-2;for(let t of i){let n=s[t],i=n.a===e?n.b:n.a,o=a[i].x-r.x,c=a[i].z-r.z,m=Math.hypot(o,c)||1,h=l/d*(o/m)+u/d*(c/m);h>p&&(p=h,f=t)}return n()<.65?f:i[n()*i.length|0]}let ie=re,A=new o,j=(e,t)=>{A.position.set(0,-50,0),A.scale.setScalar(0),A.updateMatrix(),e.setMatrixAt(t,A.matrix)},M=.085,N=Ze.PLINTH_TOP+.02+.13,F=new b(new ae(.04,.1,3,6),q(new m({flatShading:!0,roughness:.8})),14);F.castShadow=!0,F.receiveShadow=!1,F.frustumCulled=!1,F.raycast=()=>{};let oe=ut(t-.72,e),I=[];for(let e=0;e<14;e++)I.push({phase:e/14,speed:.12+e%4*.02,dir:e%2?1:-1});let ce=new R,le=new R,ue=new L;I.forEach((e,t)=>F.setColorAt(t,ue.set([`#caa`,`#9ab`,`#bba`,`#ab9`][t%4]))),r.add(F);let de={manhattan:`#e8c84a`,paris:`#dcd2bc`,neoTokyo:`#5ae8e0`};function B(e){e&&f.color.set(de[e.key]||`#e8c84a`)}B(n);function fe(t,n,r){let i=r?r.t:.5,o=r?r.windowGlow:0,c=Math.max(2,Math.round(dt(i)*12)),l=o>.05;for(let e=0;e<12;e++){if(e>=c){j(g,e),v[e*3+1]=-50,v[(12+e)*3+1]=-50;continue}let n=k[e];n.s+=t*n.speed;let r=0;for(;n.s>=s[n.edge].len&&r++<4;){n.s-=s[n.edge].len;let e=n.fwd?s[n.edge].b:s[n.edge].a,t=ie(e,n.edge,n.rng);n.edge=t,n.fwd=s[t].a===e}let i=s[n.edge],o=n.fwd?a[i.a]:a[i.b],u=n.fwd?a[i.b]:a[i.a],d=u.x-o.x,f=u.z-o.z,p=Math.hypot(d,f)||1,m=d/p,h=f/p,_=-h,y=m,b=o.x+m*n.s+_*M,x=o.z+h*n.s+y*M,S=Math.atan2(m,h);A.position.set(b,N,x),A.rotation.set(0,S,0),A.scale.set(1,1,n.lenZ),A.updateMatrix(),g.setMatrixAt(e,A.matrix);let C=.74*n.lenZ*.5,w=N+.06,T=e*3,E=(12+e)*3;l?(v[T]=b+m*(C+.04),v[T+1]=w,v[T+2]=x+h*(C+.04),v[E]=b-m*(C+.02),v[E+1]=w,v[E+2]=x-h*(C+.02)):(v[T+1]=-50,v[E+1]=-50)}g.instanceMatrix.needsUpdate=!0,_.attributes.position.needsUpdate=!0,T.opacity=P.clamp(o*1.8,0,1);let u=Math.max(2,Math.round(dt(i)*14));for(let t=0;t<14;t++){if(t>=u){j(F,t);continue}let r=I[t],i=(r.phase+r.dir*r.speed*n*.02+1e3)%1;oe.getPointAt(i,ce),oe.getTangentAt(i,le);let a=Math.sin(n*6+r.phase*30)*.015;A.position.set(ce.x,e+.09+a,ce.z),A.rotation.set(0,Math.atan2(le.x*r.dir,le.z*r.dir),Math.sin(n*6+r.phase*30)*.06),A.scale.setScalar(1),A.updateMatrix(),F.setMatrixAt(t,A.matrix)}F.instanceMatrix.needsUpdate=!0}return{group:r,update:fe,setProfile:B,graph:i,setRouter(e){ie=e||re}}}function mt({frames:e=4,fps:t=8}={}){function n(t){let n=t.clone();return n.needsUpdate=!0,n.repeat.set(1/e,1),n.offset.set(0,0),n}function r(n,r,i=0){let a=(Math.floor(r*t+i)%e+e)%e;return n.offset.x=a/e,a}return{frames:e,fps:t,makeInstanceTexture:n,step:r}}function ht(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.4,`rgba(255,255,255,0.5)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new O(e);return r.colorSpace=d,r}function gt(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64*.62,0,64/2,64*.62,64*.5);n.addColorStop(0,`rgba(240,250,255,0.95)`),n.addColorStop(1,`rgba(240,250,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new O(e);return r.colorSpace=d,r}function _t(){let e=document.createElement(`canvas`);e.width=256,e.height=64;let t=e.getContext(`2d`);t.strokeStyle=`#ffffff`,t.lineWidth=6,t.lineCap=`round`,t.lineJoin=`round`;let n=[14,24,36,24];for(let e=0;e<4;e++){let r=e*64,i=n[e];t.beginPath(),t.moveTo(r+8,40),t.quadraticCurveTo(r+24,i,r+32,36),t.quadraticCurveTo(r+40,i,r+56,40),t.stroke()}let r=new O(e);return r.colorSpace=d,r}function vt(e,t,n=18){let r=[];for(let i=0;i<n;i++){let a=i/n*Math.PI*2;r.push(new R(Math.cos(a)*e,t,Math.sin(a)*e))}return new B(r,!0,`catmullrom`,.5)}function yt(e,t,n){let r=e-t,i=[],a=(e,t)=>i.push(new R(e,n,t)),o=(e,n,r,i,o=4)=>{for(let s=1;s<=o;s++){let c=r+(i-r)*(s/o);a(e+Math.cos(c)*t,n+Math.sin(c)*t)}};for(let t=0;t<4;t++)a(e,-r+2*r*t/4);o(r,r,0,Math.PI/2);for(let t=0;t<4;t++)a(r-2*r*t/4,e);o(-r,r,Math.PI/2,Math.PI);for(let t=0;t<4;t++)a(-e,r-2*r*t/4);o(-r,-r,Math.PI,1.5*Math.PI);for(let t=0;t<4;t++)a(-r+2*r*t/4,-e);return o(r,-r,1.5*Math.PI,2*Math.PI),new B(i,!0,`catmullrom`,.5)}function bt({extent:t=8,waterSize:n=28,plinthTop:r=.3}={}){let i=new y;i.raycast=()=>{};let a=.06,o=(e,t,r)=>r.set(e/n+.5,-t/n+.5,0),s=[yt(9.5,3,a),vt(12.7,a),new B([new R(8.4,a,0),new R(11,a,-3.6),new R(13,a,0),new R(11,a,3.6)],!0,`catmullrom`,.5)],l=s.map(e=>e.getLength());function u({scale:e=1,hull:t=`#6b7785`,cabin:n=`#e7ecf2`}){let r=new y,i=new N(new D(.46*e,.2*e,1.1*e),q(new m({color:t,roughness:.6,metalness:.2,flatShading:!0}),{color:t}));i.position.y=.02;let a=new N(new D(.3*e,.22*e,.42*e),q(new m({color:n,roughness:.7,flatShading:!0}),{color:n}));return a.position.set(0,.18*e,.08*e),r.add(i,a),r.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!1),e.raycast=()=>{}}),r.userData.halfLen=.55*e,r}let d=[{laneIndex:0,dir:1,speed:.5,wake:.024,scale:1,hull:`#5a6675`,cabin:`#e7ecf2`},{laneIndex:1,dir:-1,speed:.42,wake:.022,scale:1,hull:`#7a5b46`,cabin:`#d9c3a6`},{laneIndex:0,dir:1,speed:.56,wake:.024,scale:.9,hull:`#456079`,cabin:`#cfe0ee`},{laneIndex:2,dir:1,speed:.34,wake:.03,scale:1.35,hull:`#39505f`,cabin:`#e2b85a`}];d.forEach((e,t)=>{e.mesh=u(e),e.u=t*.27%1,e.phase=t*1.7,e.isFerry=e.laneIndex===2,i.add(e.mesh)});let f=d.length,p=f*2,h=new z,g=new Float32Array(p*3).fill(-50),v=new Float32Array(p*3),b=new L(`#fff0c0`),x=new L(`#ff3528`);for(let e=0;e<f;e++)b.toArray(v,e*3),x.toArray(v,(f+e)*3);h.setAttribute(`position`,new se(g,3)),h.setAttribute(`color`,new se(v,3));let C=new S(h,new c({size:.6,sizeAttenuation:!0,map:ht(),vertexColors:!0,transparent:!0,opacity:0,blending:2,depthWrite:!1}));C.frustumCulled=!1,C.raycast=()=>{},i.add(C);function T(e,t){let n=new N(new w(e,9,7),q(new m({color:t,roughness:.5,flatShading:!0}),{color:t}));return n.scale.set(.55,.5,1),n.castShadow=!1,n.receiveShadow=!1,n.raycast=()=>{},n.position.y=-5,n}let E=[{x:-9.5,z:6,size:.18,color:`#5b6f86`,period:11,arcH:.55,span:1.1,whale:!1},{x:7.5,z:-9.5,size:.16,color:`#4a6076`,period:14,arcH:.5,span:1,whale:!1},{x:-7,z:-8.5,size:.2,color:`#607089`,period:9,arcH:.6,span:1.2,whale:!1},{x:10.5,z:7,size:.62,color:`#3a4350`,period:38,arcH:.9,span:2.6,whale:!0}];E.forEach((t,n)=>{t.mesh=T(t.size,t.color),t.heading=Math.atan2(-t.x,-t.z),t.t=n/E.length*t.period,t.splashed=!1,i.add(t.mesh),t.whale&&(t.spout=new _(new e({map:gt(),transparent:!0,opacity:0,depthWrite:!1,fog:!0})),t.spout.scale.set(.6,1.1,1),t.spout.position.set(t.x,-5,t.z),i.add(t.spout))});let ee=_t(),te=mt({frames:4,fps:7}),O=[`#ffffff`,`#cfd4da`,`#c8a06a`],k=[];for(let t=0;t<4;t++){let n=new _(new e({map:te.makeInstanceTexture(ee),color:new L(O[t%O.length]),transparent:!0,opacity:0,depthWrite:!1,fog:!0}));n.scale.setScalar(.5),k.push({sp:n,r:8.6+t*.5,y:1.1+t%2*.5,speed:(.18+t*.03)*(t%2?-1:1),phase:t*1.9}),i.add(n)}typeof window<`u`&&(window.__gullAnim={frames:te.frames,variants:O.length,fps:te.fps});let ne=E.length,re=Array.from({length:f+ne},()=>new R),ie=e=>e.laneIndex,A=new R,j=new R,M=new R;function ae(e,t,n){let r=n?n.windowGlow:0,i=1-r;for(let n=0;n<f;n++){let i=d[n],c=s[i.laneIndex],u=l[i.laneIndex],p=i.isFerry?.45+.55*Math.min(1,Math.abs((i.u+.5)%1-.5)*3):1,m=i.u;i.u=(i.u+i.dir*e*i.speed*p/u+1)%1,(i.dir>0?i.u<m:i.u>m)&&(i.laneIndex=ie(i)),c.getPointAt(i.u,A),c.getTangentAt(i.u,j);let h=j.x*i.dir,_=j.z*i.dir,v=Math.atan2(h,_),y=Math.sin(t*1.1+i.phase)*.025;i.mesh.position.set(A.x,a+y,A.z),i.mesh.rotation.set(Math.sin(t*.9+i.phase)*.04,v,0);let b=i.mesh.userData.halfLen;o(A.x-h*b,A.z-_*b,M),re[n].set(M.x,M.y,i.wake);let x=n*3,S=(f+n)*3;if(r>.05){let e=.18;g[x]=A.x+h*(b+.05),g[x+1]=e,g[x+2]=A.z+_*(b+.05),g[S]=A.x-h*(b+.02),g[S+1]=e,g[S+2]=A.z-_*(b+.02)}else g[x+1]=-50,g[S+1]=-50}F(),C.material.opacity=P.clamp(r*1.8,0,1);for(let t=0;t<ne;t++){let n=E[t];n.t+=e;let r=f+t,i=n.whale?3.2:1.3;if(n.t>=n.period){let e=(n.t-n.period)/i;if(e>=1){n.t=0,n.splashed=!1,n.mesh.position.y=-5,n.spout&&(n.spout.material.opacity=0),re[r].set(0,0,0);continue}let t=Math.sin(Math.PI*e),s=(e-.5)*n.span,c=n.x+Math.sin(n.heading)*s,l=n.z+Math.cos(n.heading)*s;n.mesh.position.set(c,a-.1+t*n.arcH,l),n.mesh.rotation.set(Math.cos(Math.PI*e)*.9,n.heading,0);let u=e<.16||e>.84;if(o(c,l,M),re[r].set(M.x,M.y,u?n.whale?.07:.05:0),n.spout){let t=P.clamp((e-.15)*3,0,1)*(1-e);n.spout.position.set(c,.56+t*.6,l),n.spout.material.opacity=t*.9}}else n.mesh.position.y=-5,re[r].set(0,0,0),n.spout&&(n.spout.material.opacity=0)}for(let e=0;e<4;e++){let n=k[e],r=n.phase+t*n.speed*.25;n.sp.position.set(Math.cos(r)*n.r,n.y+Math.sin(t*1.4+n.phase)*.12,Math.sin(r)*n.r),n.sp.material.opacity=P.clamp(i*.9-.05,0,.85);let a=te.step(n.sp.material.map,t,n.phase);e===0&&typeof window<`u`&&(window.__gullFrame=a)}if(typeof window<`u`){let e=0;for(let t of E)t.mesh.position.y>a&&e++;window.__waterLife={boats:f,breaching:e,gulls:+k[0].sp.material.opacity.toFixed(2),lights:+C.material.opacity.toFixed(2)}}}function F(){h.attributes.position.needsUpdate=!0}function oe(){return re.length}return{group:i,update:ae,wakeDrops:re,get wakeCount(){return oe()},lanes:s,setRouter(e){ie=e||(e=>e.laneIndex)}}}var xt=[`empireState`,`chrysler`,`liberty`,`eiffel`,`arcDeTriomphe`,`sacreCoeur`,`tokyoTower`,`pagoda`,`neonBillboard`],St={empireState:1.25,chrysler:1.1,liberty:.55,eiffel:3.2,arcDeTriomphe:1.5,sacreCoeur:1.75,tokyoTower:1.35,pagoda:.5,neonBillboard:.9};function Ct(e){let t=()=>new m({flatShading:!0,roughness:.7,metalness:.1}),n=(n,r={})=>r.windows?He(t(),{color:n,id:e.id(),windowGlow:e.windowGlow,winColors:e.winColors,litFrac:e.litFrac}):q(t(),{color:n,glow:r.glow??null,glowDay:r.glowDay??0,glowNight:r.glowNight??1,windowGlow:r.glow?e.windowGlow:null});return{box:(e,t,r,i,a={})=>new N(new D(e,t,r),n(i,a)),cyl:(e,t,r,i,a={})=>new N(new A(e,t,r,a.seg||12),n(i,a)),cone:(e,t,r,i={})=>new N(new F(e,t,i.seg||8),n(r,i)),sphere:(e,t,r={})=>new N(new w(e,r.seg||12,r.seg2||8),n(t,r)),lathe:(e,t,r={})=>new N(new a(e.map(e=>new I(e[0],e[1])),r.seg||4),n(t,r))}}var Z=(e,t,n,r)=>(e.position.set(t,n,r),e),wt=[`#7FB0E0`,`#E07FB0`,`#7FE0A0`,`#E0C97F`,`#9FE07F`,`#7FE0E0`,`#FF8C42`,`#E0E07F`,`#C97FE0`,`#E07F7F`,`#7F9FE0`,`#E0483A`],Tt={empireState(e,t){let n=`#E8E0CF`;e.add(Z(t.box(.42,.18,.42,n,{windows:!0}),0,.09,0)),e.add(Z(t.box(.34,.16,.34,n,{windows:!0}),0,.26,0)),e.add(Z(t.box(.26,.14,.26,n,{windows:!0}),0,.41,0)),e.add(Z(t.box(.19,.34,.19,n,{windows:!0}),0,.65,0)),e.add(Z(t.box(.13,.06,.13,n,{windows:!0}),0,.85,0));let r=wt[new Date().getMonth()];e.add(Z(t.cyl(.03,.045,.12,n,{seg:10,glow:r,glowNight:1.85}),0,.94,0)),e.add(Z(t.cone(.012,.07,n,{seg:8}),0,1.04,0))},chrysler(e,t){let n=`#C9CED4`;e.add(Z(t.box(.22,.55,.22,`#9AA7B4`,{windows:!0}),0,.275,0));let r=.55;for(let i=0;i<5;i++){let a=.14-i*.024,o=.07;e.add(Z(t.cyl(a*.7,a,o,n,{seg:8,glow:`#dfeaff`,glowNight:.5}),0,r+o/2,0)),r+=o}e.add(Z(t.cone(.018,.16,n,{seg:8}),0,r+.08,0))},liberty(e,t){let n=`#B9B4A6`,r=`#4FA890`;e.add(Z(t.box(.42,.16,.42,n),0,.08,0)),e.add(Z(t.box(.3,.2,.3,n),0,.26,0)),e.add(Z(t.cyl(.1,.15,.42,r,{seg:10}),0,.57,0)),e.add(Z(t.box(.11,.1,.11,r),0,.83,0));for(let n=0;n<7;n++){let i=(n/6-.5)*Math.PI*1.1;e.add(Z(t.cone(.012,.1,r,{seg:5}),Math.sin(i)*.1,.92,Math.cos(i)*.06-.02))}let i=Z(t.cyl(.025,.03,.34,r,{seg:8}),.14,.98,0);i.rotation.z=.35,e.add(i),e.add(Z(t.box(.06,.06,.06,r,{glow:`#ffd060`,glowDay:.6,glowNight:1.2}),.2,1.16,0)),e.add(Z(t.cone(.04,.09,`#ffcf66`,{seg:6,glow:`#ffd060`,glowDay:.7,glowNight:1.3}),.2,1.24,0))},eiffel(e,t){let n=`#6E5C4C`,r=[[.2,0],[.13,.16],[.085,.33],[.055,.5],[.035,.66],[.02,.85],[0,.92]];e.add(t.lathe(r,n,{seg:4}));let i=t.lathe(r,n,{seg:4});i.rotation.y=Math.PI/4,e.add(i),e.add(Z(t.box(.26,.025,.26,n),0,.33,0)),e.add(Z(t.box(.14,.02,.14,n),0,.66,0)),e.add(Z(t.cone(.01,.1,n,{seg:6}),0,.97,0))},arcDeTriomphe(e,t){let n=`#D9D0C1`,r=.58,i=.5,a=.34,o=new T;o.moveTo(-.58/2,0),o.lineTo(r/2,0),o.lineTo(r/2,i),o.lineTo(-.58/2,i),o.lineTo(-.58/2,0);let s=new f,c=.15,l=.22;s.moveTo(-.15,0),s.lineTo(-.15,l),s.absarc(0,l,c,Math.PI,0,!0),s.lineTo(c,0),s.lineTo(-.15,0),o.holes.push(s);let u=new he(o,{depth:a,bevelEnabled:!1});u.translate(0,0,-.34/2),u.computeVertexNormals(),e.add(new N(u,q(new m({color:n,flatShading:!0}),{color:n}))),e.add(Z(t.box(r*1.06,.08,a*1.06,n),0,.54,0))},sacreCoeur(e,t){let n=`#F1EEE6`;e.add(Z(t.box(.5,.26,.4,n),0,.13,0));let r=(r,i,a,o)=>{e.add(Z(t.cyl(a*.9,a,i,n,{seg:12}),r,o,0));let s=Z(t.sphere(a,n,{seg:12}),r,o+i/2,0);s.scale.y=1.5,e.add(s)};r(0,.22,.15,.4),r(-.2,.1,.07,.33),r(.2,.1,.07,.33)},tokyoTower(e,t){let n=`#F25822`,r=`#EDEDED`,i=0;for(let a=0;a<9;a++){let o=a/9,s=(a+1)/9,c=.19*(1-o)+.03*o,l=.19*(1-s)+.03*s,u=.085,d=a%2?r:n;e.add(Z(t.cyl(l,c,u,d,{seg:4,glow:n,glowDay:0,glowNight:.7}),0,i+u/2,0)),i+=u}e.add(Z(t.box(.22,.02,.22,n,{glow:n,glowNight:.7}),0,.28,0)),e.add(Z(t.box(.12,.02,.12,r),0,.5,0)),e.add(Z(t.cone(.012,.16,r,{seg:6,glow:`#ff6a2a`,glowNight:.9}),0,i+.08,0))},pagoda(e,t){let n=0;for(let r=0;r<5;r++){let i=.42-r*.06,a=.11;e.add(Z(t.box(i,a,i,`#B23A2C`,{windows:r<4}),0,n+a/2,0)),e.add(Z(t.box(i*1.34,.03,i*1.34,`#7A3B2A`),0,n+a+.015,0)),n+=.16999999999999998}e.add(Z(t.cyl(.012,.012,.1,`#E0C040`,{seg:6}),0,n+.05,0)),e.add(Z(t.sphere(.03,`#E0C040`,{seg:8,glow:`#ffe680`,glowNight:.8}),0,n+.12,0))},neonBillboard(e,t){let n=`#20242C`;e.add(Z(t.box(.3,1,.3,n,{windows:!0}),0,.5,0));let r=[`#5AE8E0`,`#E85AA0`,`#E8E06A`],i=(n,r,i,a,o,s,c)=>{let l=Z(t.box(n,r,.02,i,{glow:i,glowDay:.6,glowNight:1.1}),a,o,s);l.rotation.y=c,e.add(l)};i(.22,.34,r[0],0,.75,.16,0),i(.16,.5,r[1],.16,.5,0,Math.PI/2),i(.2,.22,r[2],0,.34,-.16,0),e.add(Z(t.cone(.01,.14,n,{seg:6,glow:`#E85AA0`,glowDay:.4,glowNight:1}),0,1.08,0))}};function Et(e,t){let n=new y;return Tt[e](n,Ct(t)),n}var Dt=``+new URL(`building-skyscraper-d-CapD2Zqe.glb`,import.meta.url).href,Ot=``+new URL(`building-n-hdv8kKtN.glb`,import.meta.url).href,kt=``+new URL(`building-g-CsTB1qH9.glb`,import.meta.url).href,At=``+new URL(`colormap-CK8fW2HB.png`,import.meta.url).href,jt={skyscraper:{url:Dt,color:`#9cc1dd`,fill:.92},midrise:{url:Ot,color:`#c9a07a`,fill:.96},setback:{url:kt,color:`#d9c7a0`,fill:.9}};function Mt({windowGlow:e}){let t=new h;t.setURLModifier(e=>e.includes(`colormap.png`)?At:e);let n=new ue(t),r={},i=!1,a=Promise.all(Object.entries(jt).map(async([e,t])=>{r[e]=(await n.loadAsync(t.url)).scene})).then(()=>{i=!0,window.__landmarksReady=!0}).catch(e=>console.error(`landmark models failed:`,e)),o=9e3;function s(t,n,i={}){let a,s;if(xt.includes(t))a=Et(t,{windowGlow:e,winColors:i.winColors,litFrac:i.litFrac,id:()=>++o}),s=1;else{let e=r[t],n=jt[t];if(!e||!n)return null;a=e.clone(!0),s=n.fill}a.updateMatrixWorld(!0);let c=new j().setFromObject(a).getSize(new R);a.scale.setScalar(n.h*s/c.y),a.updateMatrixWorld(!0);let l=new j().setFromObject(a),u=l.getCenter(new R);return a.position.x+=n.x-u.x,a.position.z+=n.z-u.z,a.position.y+=n.plinthTop-l.min.y,xt.includes(t)?a.traverse(e=>{e.isMesh&&(e.castShadow=!1,e.raycast=()=>{})}):a.traverse(n=>{if(!n.isMesh)return;n.castShadow=!1,n.raycast=()=>{};let r=n=>He(n.clone(),{color:jt[t].color,id:++o,windowGlow:e,winColors:i.winColors,litFrac:i.litFrac});n.material=Array.isArray(n.material)?n.material.map(r):r(n.material)}),a}return{make:s,whenReady:a,heightFactor:e=>St[e]??1,get ready(){return i}}}var Nt=[`clear`,`rain`,`snow`,`fog`];function Pt({extent:e=7}={}){let t=new y;t.raycast=()=>{};let n=e+2,r=.25,i=(e,t)=>e+Math.random()*(t-e),a=new b(new V(.015,.5),new p({color:`#a9bdd6`,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),600);a.frustumCulled=!1,a.raycast=()=>{};let s=new Float32Array(600*3),c=new Float32Array(600);for(let e=0;e<600;e++)s[e*3]=i(-n,n),s[e*3+1]=i(r,11),s[e*3+2]=i(-n,n),c[e]=i(9,14);let l=new b(new V(.07,.07),new p({color:`#f3f7ff`,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),700);l.frustumCulled=!1,l.raycast=()=>{};let u=new Float32Array(700*3),d=new Float32Array(700),f=new Float32Array(700);for(let e=0;e<700;e++)u[e*3]=i(-n,n),u[e*3+1]=i(r,11),u[e*3+2]=i(-n,n),d[e]=i(0,6.28),f[e]=i(.6,1.2);t.add(a,l);let m=Array.from({length:8},()=>new R),h=0,g=`clear`,_=0,v=0,x=0,S=0,C=0,w=new o,T=(e,t,n,r)=>e+(t-e)*Math.min(1,n*r);function E(e){Nt.includes(e)&&(g=e)}function ee(){g=Nt[(Nt.indexOf(g)+1)%Nt.length]}function D(e,t){let o=g===`rain`,p=g===`snow`,y=g===`fog`,b=g!==`clear`;_=T(_,+!!b,e,1.4),v=T(v,+!!b,e,1.2),x=T(x,+!!y,e,.9),C=T(C,b&&!y?1:0,e,1),S=T(S,+!!p,e,p?.22:.5);let E=o?_:0,ee=Math.round(600*E);for(let t=0;t<600;t++){if(t>=ee){w.position.set(0,-50,0),w.scale.setScalar(0),w.updateMatrix(),a.setMatrixAt(t,w.matrix);continue}s[t*3+1]-=c[t]*e,s[t*3]+=e*1.1,s[t*3+1]<r&&(s[t*3]=i(-n,n),s[t*3+1]=11,s[t*3+2]=i(-n,n)),w.position.set(s[t*3],s[t*3+1],s[t*3+2]),w.rotation.set(0,0,0),w.scale.set(1,1,1),w.updateMatrix(),a.setMatrixAt(t,w.matrix)}a.instanceMatrix.needsUpdate=!0,a.material.opacity=.55*E,h=o?Math.round(8*_):0;for(let e=0;e<h;e++)m[e].set(Math.random(),Math.random(),.05*_);let D=Math.round(700*(p?_:0));for(let a=0;a<700;a++){if(a>=D){w.position.set(0,-50,0),w.scale.setScalar(0),w.updateMatrix(),l.setMatrixAt(a,w.matrix);continue}u[a*3+1]-=f[a]*e;let o=Math.sin(t*1.5+d[a])*.5;u[a*3+1]<r&&(u[a*3]=i(-n,n),u[a*3+1]=11,u[a*3+2]=i(-n,n)),w.position.set(u[a*3]+o,u[a*3+1],u[a*3+2]),w.rotation.set(0,0,0),w.scale.setScalar(1),w.updateMatrix(),l.setMatrixAt(a,w.matrix)}l.instanceMatrix.needsUpdate=!0,l.material.opacity=.9*(p?_:0)}return{group:t,update:D,cycle:ee,setKind:E,rainDrops:m,get kind(){return g},get intensity(){return _},get overcast(){return v},get fog(){return x},get snow(){return S},get cloud(){return C},get rainDropCount(){return h},poolCounts:{rain:600,snow:700}}}function Ft(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=(e,n,r)=>{let i=t.createRadialGradient(e,n,0,e,n,r);i.addColorStop(0,`rgba(255,255,255,0.95)`),i.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=i,t.beginPath(),t.arc(e,n,r,0,7),t.fill()};n(128*.42,128*.56,128*.26),n(128*.6,128*.5,128*.3),n(128*.5,128*.46,128*.22),n(128*.34,128*.54,128*.18),n(128*.7,128*.58,128*.18);let r=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5],i=t.getImageData(0,0,128,128),a=i.data;for(let e=0;e<128;e++)for(let t=0;t<128;t++){let n=(e*128+t)*4,i=a[n+3]/255,o=(r[e%4*4+t%4]+.5)/16-.5;a[n+3]=Math.max(0,Math.min(1,Math.floor(i*5+.5+o)/5))*255}t.putImageData(i,0,0);let o=new O(e);return o.colorSpace=d,o}function It({extent:t=8,count:n=16}={}){let r=new y;r.raycast=()=>{};let i=Ft(),a=t+6,o=(e,t)=>e+Math.random()*(t-e),s=[];for(let t=0;t<n;t++){let t=new e({map:i,transparent:!0,depthWrite:!1,opacity:0,fog:!0}),n=new _(t),c={sp:n,mat:t,wisp:Math.random(),x:o(-a,a),z:o(-a,a),hiY:o(4,6.8),loY:o(.6,2.2),w:o(3,5.6),h:o(1.7,3),speed:o(.25,.7),op:o(.6,1)};n.raycast=()=>{},s.push(c),r.add(n)}let c=new L,l=new L(`#ffffff`),u=new L(`#5b626e`);function d(e,t,n,r){let i=r?r.cloud:0,d=r?r.fog:0,f=Math.min(1,.4+.6*i+.5*d);c.copy(n.sky).lerp(l,.62),c.lerp(u,.6*i);for(let n=0;n<s.length;n++){let r=s[n],l=n/s.length<f;r.x+=r.speed*e*(.6+.8*i),r.x>a&&(r.x=-a,r.z=o(-a,a));let u=Math.min(Lt(r.x,-a,-a+3),1-Lt(r.x,a-3,a)),p=r.hiY*(1-d)+r.loY*d,m=1-.5*r.wisp,h=.72*Math.max(0,1-d-i)+1*i+.42*d,g=l?Math.max(0,h)*r.op*m*u:0;r.mat.opacity+=(g-r.mat.opacity)*Math.min(1,e*2.5),r.mat.color.copy(c);let _=r.w*(1+.6*d)*(1+.4*r.wisp),v=r.h*(1-.35*d);r.sp.scale.set(_,v,1),r.sp.position.set(r.x,p+Math.sin(t*.3+n)*.15,r.z)}}function f(e){i=e;for(let t of s)t.mat.map=e,t.mat.needsUpdate=!0}return{group:r,update:d,setTexture:f,get count(){return s.length}}}function Lt(e,t,n){let r=Math.max(0,Math.min(1,(e-t)/(n-t)));return r*r*(3-2*r)}var Rt=`varying vec2 vUv;

void main() {
  
  
  
  vUv = uv;

  
  
  
  
  
  
  
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,zt=`precision highp float;

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
}`,Bt=`varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0); 
}`,Vt=`precision highp float;

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
}`,Ht=`precision highp float;

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
}`,Ut=`precision highp float;

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
}`,Wt=`const float CA_STRENGTH   = 0.0030;  
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
}`,Gt=`const float DITHER = 0.55;   

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
}`,Kt=`precision highp float;

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
}`,qt=`precision highp float;

varying vec2 vUv;
uniform sampler2D uToon;   
uniform sampler2D uPixel;  
uniform float     uBlend;  

void main() {
  vec3 t = texture2D(uToon, vUv).rgb;
  vec3 p = texture2D(uPixel, vUv).rgb;
  gl_FragColor = vec4(mix(t, p, uBlend), 1.0);
}`,Jt=`precision highp float;

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
}`,Yt={"1-bit":{gridWidth:110,dither:.6,palette:[`#15120c`,`#c8b486`]},gb:{gridWidth:130,dither:.4,palette:[`#0f380f`,`#306230`,`#8bac0f`,`#9bbc0f`]},"8-bit":{gridWidth:160,dither:.55,palette:[`#140c1c`,`#442434`,`#30346d`,`#4e4a4e`,`#854c30`,`#346524`,`#d04648`,`#757161`,`#597dce`,`#d27d2c`,`#8595a1`,`#6daa2c`,`#d2aa99`,`#6dc2ca`,`#dad45e`,`#deeed6`]},"16-bit":{gridWidth:280,dither:.3,palette:`#000000.#222034.#45283c.#663931.#8f563b.#df7126.#d9a066.#eec39a.#fbf236.#99e550.#6abe30.#37946e.#4b692f.#524b24.#323c39.#3f3f74.#306082.#5b6ee1.#639bff.#5fcde4.#cbdbfc.#ffffff.#9badb7.#847e87.#696a6a.#595652.#76428a.#ac3232.#d95763.#d77bba.#8f974a.#8a6f30`.split(`.`)},modern:{gridWidth:460,dither:.6,palette:null}},Xt=[`gb`,`8-bit`,`16-bit`,`modern`];function Zt(e){let t=Math.max(e.length,1),n=new Float32Array(t*4);e.forEach((e,t)=>{let r=new L(e);n[t*4+0]=r.r,n[t*4+1]=r.g,n[t*4+2]=r.b,n[t*4+3]=1});let r=new ie(n,t,1,x,te);return r.minFilter=g,r.magFilter=g,r.needsUpdate=!0,r}var Qt=220,$t={night:[`#0A0C16`,`#1C2236`,`#3A3A52`,`#5A5A78`,`#8A92B0`],dawn:[`#1A1008`,`#43281A`,`#7A4A30`,`#B07A4E`,`#E8A86A`],noon:[`#16100A`,`#3A2F1E`,`#6B563A`,`#937B54`,`#B89968`],dusk:[`#140A0A`,`#3E1E1A`,`#7A3828`,`#B85A36`,`#F0884A`]},en={night:[`#020604`,`#06180E`,`#10401E`,`#1E9040`,`#7FE0FF`],dawn:[`#060603`,`#1A2410`,`#3A6B22`,`#6CC040`,`#FFC060`],noon:[`#050805`,`#0E2912`,`#1E6B2F`,`#3CF06A`,`#FFB000`],dusk:[`#080402`,`#241408`,`#6B4A12`,`#E0A030`,`#FF7030`]};function tn({demo:e=!1,citySeed:n=0,profileIndex:a=0}={}){let o=new oe({antialias:!0,preserveDrawingBuffer:!0});o.shadowMap.enabled=!0,o.shadowMap.type=1,o.shadowMap.autoUpdate=!1,o.shadowMap.needsUpdate=!0;let s=!!(window.matchMedia&&window.matchMedia(`(pointer: coarse)`).matches);o.setPixelRatio(Math.min(window.devicePixelRatio,s?1.5:2)),o.setSize(window.innerWidth,window.innerHeight),o.setClearColor(920327,1),document.body.appendChild(o.domElement);let c=o.getDrawingBufferSize(new I),f=new ce;f.fog=new me(10465470,0);let m=new L(`#aeb6c0`),h=.062,_=new L(`#74508f`),v=new L,y=Oe({aspect:window.innerWidth/window.innerHeight}),b=ct({t:.5}),S={type:r,format:x,minFilter:g,magFilter:g,wrapS:re,wrapT:re,depthBuffer:!1,stencilBuffer:!1},C=[new M(256,256,S),new M(256,256,S),new M(256,256,S)];for(let e of C)o.setRenderTarget(e),o.clear();o.setRenderTarget(null);let w=new ce,T=new l(-1,1,1,-1,0,1),E=new u({vertexShader:Bt,fragmentShader:Vt,uniforms:{uCurr:{value:null},uPrev:{value:null},uTexel:{value:new I(1/256,1/256)},uMouse:{value:new I(-1,-1)},uMouseStrength:{value:0},uC2:{value:.25},uDamping:{value:.992},uRainCount:{value:0},uRainDrops:{value:Array.from({length:8},()=>new R)},uWakeCount:{value:0},uWakeDrops:{value:Array.from({length:8},()=>new R)}}});w.add(new N(new V(2,2),E));let D=new M(c.x,c.y,{minFilter:i,magFilter:i,depthBuffer:!0,stencilBuffer:!1});function te(e){let t=document.createElement(`canvas`);t.width=t.height=1024;let n=t.getContext(`2d`);n.fillStyle=e?`#0c1418`:`#15110b`,n.fillRect(0,0,1024,1024),n.strokeStyle=e?`rgba(120,150,170,0.22)`:`rgba(184,153,104,0.30)`,n.lineWidth=2;for(let e=0;e<=1024;e+=64)n.beginPath(),n.moveTo(e,0),n.lineTo(e,1024),n.stroke(),n.beginPath(),n.moveTo(0,e),n.lineTo(1024,e),n.stroke();e||(n.fillStyle=`#B89968`,n.font=`bold 360px Georgia, serif`,n.textAlign=`center`,n.textBaseline=`middle`,n.fillText(`LGR`,512,470),n.font=`600 64px ui-monospace, monospace`,n.fillText(`WEB · STUDIO`,512,720));let r=new O(t);return r.colorSpace=d,r}let k=new N(new V(28,28),new p({map:te(e)}));k.rotation.x=-Math.PI/2,k.position.y=-.35,f.add(k);let ne=new N(new V(40,24),new u({depthWrite:!1,vertexShader:Rt,fragmentShader:zt,uniforms:{uTime:{value:0},uInk:{value:b.horizon},uGold:{value:b.sky},uFogColor:{value:v},uFogAmt:{value:0},uFogCharm:Fe}}));ne.position.set(0,3,-8),f.add(ne);let ie=new u({vertexShader:Ht,fragmentShader:Ut,uniforms:{uHeight:{value:null},uScene:{value:D.texture},uTexel:{value:new I(1/256,1/256)},uResolution:{value:new I(c.x,c.y)},uDisplace:{value:.42},uNormalStrength:{value:22},uRefractStrength:{value:.06},uChromaScale:{value:1},uNormalMatrix:{value:new t},uLightDir:{value:b.sunDir},uInk:{value:new L(`#2A2218`)},uGold:{value:new L(`#B89968`)},uVector:ke,uVecWater:{value:new L(`#1fb8d8`)},uVecTint:{value:Ae}}}),A=new N(new V(28,28,255,255),ie);A.rotation.x=-Math.PI/2,A.updateMatrixWorld(!0),ie.uniforms.uNormalMatrix.value.getNormalMatrix(A.matrixWorld),f.add(A);let j={value:0},ae=Mt({windowGlow:j}),F=et({seed:n,profileIndex:a,landmarkFactory:ae,windowGlow:j});f.add(F.group);let se=pt({plinthTop:.3,extent:F.extent,profile:F.state.profile});f.add(se.group);let le=bt({extent:F.extent,waterSize:28,plinthTop:.3});f.add(le.group),E.uniforms.uWakeDrops.value=le.wakeDrops;let z=Pt({extent:F.extent});f.add(z.group),E.uniforms.uRainDrops.value=z.rainDrops;let ue=It({extent:F.extent});f.add(ue.group),F.group.remove(F.key),f.add(F.key),F.key.castShadow=!0,F.key.shadow.mapSize.set(2048,2048),F.key.shadow.bias=-18e-5,F.key.shadow.normalBias=.028,f.add(F.key.target);function de(){let e=F.key.shadow.camera,t=F.extent+4.5;e.left=-t,e.right=t,e.top=t,e.bottom=-t,e.near=1,e.far=48,e.updateProjectionMatrix(),o.shadowMap.needsUpdate=!0}de();let B=new ee(c.x,c.y),fe=new M(c.x,c.y,{minFilter:i,magFilter:i,depthBuffer:!0,stencilBuffer:!1,depthTexture:B}),pe=new M(c.x,c.y,{minFilter:i,magFilter:i,depthBuffer:!1,stencilBuffer:!1}),he=new M(c.x,c.y,{minFilter:i,magFilter:i,depthBuffer:!1,stencilBuffer:!1}),ge=new M(c.x,c.y,{minFilter:i,magFilter:i,depthBuffer:!1,stencilBuffer:!1}),_e=new ce,ve=new l(-1,1,1,-1,0,1),H=new N(new V(2,2));_e.add(H);let U=new u({vertexShader:Bt,fragmentShader:Wt,uniforms:{uScene:{value:fe.texture},uTime:{value:0},uResolution:{value:new I(c.x,c.y)},uGrain:{value:1},uChroma:{value:1},uExposure:{value:1}}}),ye=e=>{let t=e.map(e=>new L(e));for(;t.length<8;)t.push(new L(0,0,0));return t},be=[`night`,`dawn`,`noon`,`dusk`],xe={inkgold:be.map(e=>ye($t[e])),terminal:be.map(e=>ye(en[e]))},Se=new u({vertexShader:Bt,fragmentShader:Gt,uniforms:{uScene:{value:pe.texture},uResolution:{value:new I(c.x,c.y)},uPixelSize:{value:Qt},uPalette:{value:xe.inkgold[2]},uPaletteB:{value:xe.inkgold[2]},uPaletteBlend:{value:0},uPaletteSize:{value:5}}}),W=new u({vertexShader:Bt,fragmentShader:Jt,uniforms:{uScene:{value:pe.texture},uResolution:{value:new I(c.x,c.y)},uGridWidth:{value:160},uDither:{value:.55},uPalette:{value:Zt(Yt[`8-bit`].palette)},uPaletteSize:{value:1},uUsePalette:{value:1}}}),Ce={};for(let e of Xt)Ce[e]=Yt[e].palette?Zt(Yt[e].palette):null;let we=new u({vertexShader:Bt,fragmentShader:Kt,uniforms:{uScene:{value:pe.texture},uDepth:{value:B},uResolution:{value:new I(c.x,c.y)},uBands:{value:4},uToonGain:{value:1.7},uToonGamma:{value:.6},uToonFloor:{value:b.toonFloor},uOutline:{value:b.outline},uNear:{value:.1},uFar:{value:100},uIsPerspective:{value:1}}}),Te=new u({vertexShader:Bt,fragmentShader:qt,uniforms:{uToon:{value:he.texture},uPixel:{value:ge.texture},uBlend:{value:0}}});function Ee(e,t){H.material=e,o.setRenderTarget(t),o.render(_e,ve)}function De(){y.setViewport(window.innerWidth,window.innerHeight),o.setSize(window.innerWidth,window.innerHeight);let e=o.getDrawingBufferSize(new I);return D.setSize(e.x,e.y),fe.setSize(e.x,e.y),pe.setSize(e.x,e.y),he.setSize(e.x,e.y),ge.setSize(e.x,e.y),ie.uniforms.uResolution.value.set(e.x,e.y),U.uniforms.uResolution.value.set(e.x,e.y),Se.uniforms.uResolution.value.set(e.x,e.y),W.uniforms.uResolution.value.set(e.x,e.y),we.uniforms.uResolution.value.set(e.x,e.y),e}let G=3,K=!1,Le=!1,Re=`native`,ze=.3,Be=.46,Ve=[`native`,...Xt],He={"16-bit":`16-bit`,"8-bit":`8-bit`,gb:`Game Boy`,modern:`Modern`,native:`Pixel`,"1-bit":`1-bit`};typeof window<`u`&&(window.__mode=G,window.__vector=K,window.__era=Re);let q=0,Ue=performance.now(),We=typeof window<`u`&&new URLSearchParams(window.location.search).has(`perf`);typeof window<`u`&&(window.__perf=We),We&&(o.info.autoReset=!1);let J=null;typeof window<`u`&&(window.__loaded=!1);let Y=0,Ge=new R(1,1,1),Ke=!1;function qe(e){let t=Le?xe.terminal:xe.inkgold,n=e%1*4,r=Math.floor(n)%4;Se.uniforms.uPalette.value=t[r],Se.uniforms.uPaletteB.value=t[(r+1)%4],Se.uniforms.uPaletteBlend.value=n-Math.floor(n)}function Je(e){let t=Yt[e];t&&(W.uniforms.uGridWidth.value=t.gridWidth,W.uniforms.uDither.value=t.dither,W.uniforms.uUsePalette.value=+!!t.palette,t.palette&&(W.uniforms.uPalette.value=Ce[e],W.uniforms.uPaletteSize.value=t.palette.length))}function Ye(){Re!==`native`&&Je(Re)}let Xe=()=>Re===`native`?Se:W;function X(e,t){A.visible=!1,o.setRenderTarget(D),o.render(f,e),A.visible=!0,o.setRenderTarget(t),o.render(f,e)}function Ze(e,t){if(A.visible=!1,o.setRenderTarget(D),o.render(f,y.camera),A.visible=!0,G===1||K&&G!==7&&G!==8)o.setRenderTarget(t),o.render(f,y.camera);else if(o.setRenderTarget(fe),o.render(f,y.camera),G===2)U.uniforms.uGrain.value=1,U.uniforms.uChroma.value=1,Ee(U,t);else{U.uniforms.uGrain.value=0,U.uniforms.uChroma.value=0,Ee(U,pe);let n=y.camera;we.uniforms.uNear.value=n.near,we.uniforms.uFar.value=n.far,we.uniforms.uIsPerspective.value=+!!n.isPerspectiveCamera;let r=e.era?(Je(e.era),W):Xe();e.kind===`pixel`?(Ee(r,t),window.__style=`pixel`):e.kind===`toon`?(Ee(we,t),window.__style=`toon`):(Ee(we,he),Ee(r,ge),Te.uniforms.uBlend.value=e.blend,Ee(Te,t),window.__style=`blend`)}}function Qe(){let e=$e(),t=e.kind===`toon`?1:e.kind===`blend`?1-e.blend:0;return ie.uniforms.uChromaScale.value=P.lerp(1,.5,t),e}function $e(){if(G===1||G===2)return{kind:`none`};if(G===7)return{kind:`pixel`};if(G===8)return{kind:`toon`};let e=y.styleT;return window.__styleT=e,e<=ze?{kind:`toon`}:e>=Be?{kind:`pixel`,era:e<.62?`16-bit`:e<.8?`8-bit`:`gb`}:{kind:`blend`,blend:P.smoothstep(e,ze,Be),era:`16-bit`}}function tt(e){return G===1||G===2?``:K&&G!==7&&G!==8?`Vector`:e.kind===`toon`?`Toon`:e.kind===`pixel`?He[e.era||Re]||`Pixel`:e.kind===`blend`?`Toon → `+(He[e.era]||`Pixel`):``}function nt(e,t,{shadowsOn:n=!0,seasonTarget:r=0}={}){if(We){let e=o.info;J={calls:e.render.calls,tris:e.render.triangles,programs:e.programs?e.programs.length:0,geo:e.memory.geometries,tex:e.memory.textures},e.reset()}ne.material.uniforms.uTime.value=t,U.uniforms.uTime.value=t,b.update(e),F.key.position.copy(b.sunDir).multiplyScalar(24),F.key.color.copy(b.sunColor),F.key.intensity=b.sunIntensity,F.fill.color.copy(b.hemiSky),F.fill.groundColor.copy(b.hemiGround),j.value=b.windowGlow;let i=z.overcast;F.key.intensity*=1-.5*i,F.key.color.lerp(m,.45*i),F.fill.intensity=1+.7*i;let a=P.smoothstep(b.sunDir.y,.06,.34),s=P.lerp(.28,1,1-b.windowGlow),c=n?a*s:0;F.key.shadow.intensity=.72*c,je.value=.52*c,(n&&!Ke||Ge.distanceToSquared(b.sunDir)>2e-5)&&(o.shadowMap.needsUpdate=!0,Ge.copy(b.sunDir)),Ke=n;let l=1-b.windowGlow;Ae.setRGB(P.lerp(.46,1,l),P.lerp(.52,1,l),P.lerp(.74,1,l)),U.uniforms.uExposure.value=b.exposure,we.uniforms.uToonGain.value=b.toonGain,o.setClearColor(b.horizon,1),qe(b.t),window.__t=b.t,se.update(e,t,b),F.update(t),le.update(e,t,b),E.uniforms.uWakeCount.value=le.wakeCount,z.update(e,t),E.uniforms.uRainCount.value=z.rainDropCount;let u=z.fog*(1-l);f.fog.density=z.fog*h,v.copy(b.horizon).lerp(_,.85*u),f.fog.color.copy(v),o.setClearColor(v,1),Fe.value=z.fog,ne.material.uniforms.uFogAmt.value=.7*z.fog,Me.value=z.snow,Ne.value=z.cloud*.55,Pe.x+=e*.018,Pe.y+=e*.009,Ie.value+=(r-Ie.value)*Math.min(1,e*1.5),ue.update(e,t,b,z),q++;let d=performance.now();d-Ue>=1e3&&(window.__fps=q,We&&J&&(console.log(`[perf] ${q} fps · ~${(1e3/Math.max(1,q)).toFixed(2)} ms · calls ${J.calls} · tris ${J.tris} · programs ${J.programs} · geo ${J.geo} · tex ${J.tex}`),window.__perfInfo={fps:q,...J}),q=0,Ue=d);let[p,g,y]=C;if(E.uniforms.uPrev.value=p.texture,E.uniforms.uCurr.value=g.texture,o.setRenderTarget(y),o.render(w,T),C=[g,y,p],ie.uniforms.uHeight.value=C[1].texture,Y<2&&typeof document<`u`&&++Y===2){let e=document.getElementById(`lgr-loader`);e&&e.classList.add(`gone`),window.__loaded=!0}}function rt(e){G=e,window.__mode=G}function it(){return K=!K,ke.value=+!!K,window.__vector=K,K}function at(e){return K=!!e,ke.value=+!!K,window.__vector=K,K}function ot(){return Re=Ve[(Ve.indexOf(Re)+1)%Ve.length],window.__era=Re,Ye(),Re}function st(){return Le=!Le,Le}return{updateWorld:nt,decideStyle:Qe,renderCityPipeline:Ze,renderCityBeautyTo:X,styleHintName:tt,setPostMode:rt,toggleVector:it,setVector:at,cycleEra:ot,togglePalette:st,get mode(){return G},get vector(){return K},get sceneEra(){return Re},renderer:o,drawBuffer:c,scene:f,rig:y,sunRig:b,SIM:256,targets:C,simScene:w,simCamera:T,simMaterial:E,grabRT:D,card:k,backdrop:ne,WATER_SIZE:28,water:A,waterMaterial:ie,windowGlow:j,landmarkFactory:ae,city:F,cityLife:se,waterLife:le,weatherRig:z,clouds:ue,fitShadowFrustum:de,SHADOW_DIST:24,sceneDepth:B,sceneRT:fe,filmicRT:pe,toonRT:he,pixelRT:ge,postScene:_e,postCamera:ve,postQuad:H,filmicMaterial:U,pixelMaterial:Se,pixelkitMaterial:W,toonMaterial:we,mixMaterial:Te,PALCACHE:xe,ERA_TEX:Ce,runPass:Ee,OVERCAST_GREY:m,FOG_DENSITY:h,FOG_NIGHT_TINT:_,_fogColor:v,resize:De}}var nn=`lgr_hints_`,rn=!1;function an(){if(rn||typeof document>`u`)return;rn=!0;let e=document.createElement(`style`);e.textContent=`
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
  }`,document.head.appendChild(e)}function on({key:e,title:t=`Tips`,tips:n=[],force:r=!1}={}){let i={key:e,shown:!1,dismissed:!1,seen:!1};if(typeof window<`u`&&(window.__hints=i),typeof document>`u`||!e)return{dismiss(){},el:null};let a=nn+e,o=!1;try{o=localStorage.getItem(a)===`1`}catch{}if(o&&!r)return i.seen=!0,{dismiss(){},el:null};an();let s=!!(window.matchMedia&&window.matchMedia(`(prefers-reduced-motion: reduce)`).matches),c=document.createElement(`div`);c.className=`lgr-hints`,c.innerHTML=`<div class="lgr-hints-card">
    <div class="lgr-hints-h">${t}</div>
    <ul>${n.map(e=>`<li>${e}</li>`).join(``)}</ul>
    <button class="lgr-hints-ok">Got it</button>
    <button class="lgr-hints-x" title="Dismiss (Esc)" aria-label="Dismiss">✕</button>
  </div>`,document.body.appendChild(c),i.shown=!0,s?c.classList.add(`on`):requestAnimationFrame(()=>c.classList.add(`on`));let l=!1;function u(e=!0){if(!l){if(l=!0,e)try{localStorage.setItem(a,`1`)}catch{}i.dismissed=!0,window.removeEventListener(`keydown`,d),c.classList.remove(`on`),setTimeout(()=>c.remove(),s?0:300)}}function d(e){e.key===`Escape`&&u(!0)}return window.addEventListener(`keydown`,d),c.querySelector(`.lgr-hints-ok`).addEventListener(`click`,()=>{navigator.vibrate?.(10),u(!0)}),c.querySelector(`.lgr-hints-x`).addEventListener(`click`,()=>{navigator.vibrate?.(10),u(!0)}),{dismiss:u,el:c}}var sn=null;function cn(){if(sn)return sn;let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return n.addColorStop(0,`rgba(0,0,0,0.60)`),n.addColorStop(.55,`rgba(0,0,0,0.32)`),n.addColorStop(1,`rgba(0,0,0,0.0)`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,128/2,0,Math.PI*2),t.fill(),sn=new O(e),sn.colorSpace=d,sn}function ln({w:e=.6,d:t=.6,x:n=0,y:r=.002,z:i=0,opacity:a=.5,rotation:o=0}={}){let s=new N(new V(e,t),new p({map:cn(),transparent:!0,opacity:a,depthWrite:!1,toneMapped:!1}));return s.rotation.x=-Math.PI/2,s.rotation.z=o,s.position.set(n,r,i),s.renderOrder=-1,s.raycast=()=>{},s}var un=null;function dn(){if(un)return un;let e=document.createElement(`canvas`);e.width=e.height=256;let t=e.getContext(`2d`),n=t.createRadialGradient(256/2,256/2,256*.32,256/2,256/2,256*.72);return n.addColorStop(0,`rgba(0,0,0,0)`),n.addColorStop(1,`rgba(0,0,0,1)`),t.fillStyle=n,t.fillRect(0,0,256,256),un=new O(e),un.colorSpace=d,un}function fn({strength:e=.55,dist:t=.5}={}){let n=new N(new V(1,1),new p({map:dn(),transparent:!0,opacity:e,depthTest:!1,depthWrite:!1,toneMapped:!1}));n.renderOrder=9999,n.raycast=()=>{},n.frustumCulled=!1;let r=new R;return n.fit=e=>{e.getWorldDirection(r),n.position.copy(e.position).addScaledVector(r,t),n.quaternion.copy(e.quaternion);let i=2*Math.tan(P.degToRad(e.fov)*.5)*t*1.05;n.scale.set(i*e.aspect,i,1)},n}var pn=``+new URL(`office-smooth-DEluvd7o.png`,import.meta.url).href,mn=``+new URL(`office-charm-D7t90SkH.png`,import.meta.url).href;function hn(){let e=document.createElement(`canvas`);e.width=e.height=256;let t=e.getContext(`2d`);t.fillStyle=`#6e4a2c`,t.fillRect(0,0,256,256);for(let e=0;e<150;e++){let e=Math.random()*256,n=.7+Math.random()*.7;t.strokeStyle=`rgba(${Math.round(110*n)},${Math.round(74*n)},${Math.round(44*n)},${.16+Math.random()*.28})`,t.lineWidth=.5+Math.random()*1.6,t.beginPath(),t.moveTo(e,0);for(let n=0;n<=256;n+=14)t.lineTo(e+Math.sin(n*.05+e)*3,n);t.stroke()}t.strokeStyle=`rgba(30,18,8,0.5)`,t.lineWidth=2;for(let e of[256*.34,256*.67])t.beginPath(),t.moveTo(0,e),t.lineTo(256,e),t.stroke();let n=new O(e);return n.colorSpace=d,n.wrapS=n.wrapT=s,n}function Q(e,t,n,r,{rough:i=.62,metal:a=0,x:o=0,y:c=0,z:l=0,emissive:u=null,emissiveIntensity:d=1,map:f=null,mapRepeat:p=null}={}){let h=f;f&&p&&(h=f.clone(),h.needsUpdate=!0,h.wrapS=h.wrapT=s,h.repeat.set(p[0],p[1]));let g=new N(new D(e,t,n),new m({color:h?`#ffffff`:r,roughness:i,metalness:a,...h?{map:h}:{},...u?{emissive:u,emissiveIntensity:d}:{}}));return g.position.set(o,c,l),g}function gn({tier:t=`corner`}={}){let r=new ce,i=new v(43,1,.1,100),a=new R(0,1.62,4.35);i.position.copy(a),i.lookAt(0,1.12,-1);let o=new y;r.add(o);let s=new y,c=new y,l=new y,u=new y,f=new y;o.add(s,c,l,u,f);let h=[],g=`#3a2618`,b=`#5b3d27`,x=`#5a5650`,S=hn();s.add(Q(11,.2,11,`#3c2a1c`,{rough:.5,y:-.1,map:S,mapRepeat:[5,5]})),s.add(Q(11,.2,11,`#3a2a1d`,{rough:.9,y:3,map:S,mapRepeat:[4,4]}));for(let e of[-2.4,0,2.4])s.add(Q(.18,.16,7.4,g,{rough:.7,x:e,y:2.9,z:0,map:S,mapRepeat:[1,4]}));for(let e of[-2,.4])s.add(Q(7.4,.16,.18,g,{rough:.7,x:0,y:2.88,z:e,map:S,mapRepeat:[4,1]}));function C(e){let t=new y;t.add(Q(.2,3.2,8,`#4a3322`,{rough:.7,x:e*3.6,y:1.5,z:0,map:S,mapRepeat:[3,1.4]}));let n=e*3.45;t.add(Q(.06,.22,8,g,{x:n,y:.13,z:0})),t.add(Q(.08,.16,8,g,{x:n,y:2.84,z:0})),t.add(Q(.05,.05,8,g,{x:n,y:1,z:0}));for(let e of[-2.6,-1.3,1.3,2.6])t.add(Q(.05,1.6,.06,g,{x:n,y:1.95,z:e}));for(let e of[-2.6,-1.3,1.3,2.6])t.add(Q(.05,.7,.06,g,{x:n,y:.6,z:e}));let r=new N(new V(1.5,1),new m({map:wn(e),roughness:.8}));return r.position.set(e*3.49,1.7,.4),r.rotation.y=-e*Math.PI/2,t.add(Q(.06,1.18,1.68,`#2a1c10`,{x:e*3.52,y:1.7,z:.4}),r),t}s.add(C(-1),C(1));let w=new V(3,2.5),T=new V(3,2.5);{let e=w.attributes.uv,t=T.attributes.uv;for(let n=0;n<e.count;n++)e.setX(n,e.getX(n)*.5),t.setX(n,t.getX(n)*.5+.5);e.needsUpdate=!0,t.needsUpdate=!0}let ee=new p({color:`#ffffff`,toneMapped:!1}),te=new p({color:`#ffffff`,toneMapped:!1}),O=1.55,re=new N(w,ee);re.position.set(-1.06,O,-2.64),re.rotation.y=Math.PI/4;let ie=new N(T,te);ie.position.set(1.06,O,-2.64),ie.rotation.y=-Math.PI/4,l.add(re,ie),s.add(Q(.08,2.7,.08,g,{x:0,y:O,z:-2.2}));for(let[e,t,n]of[[-1.06,-2.64,Math.PI/4],[1.06,-2.64,-Math.PI/4]]){let r=new y;r.add(Q(3.05,.09,.09,g,{y:1.3})),r.add(Q(3.05,.09,.09,g,{y:-1.25})),r.add(Q(.09,2.6,.09,g,{x:-1.5})),r.position.set(e,O,t),r.rotation.y=n,s.add(r)}s.add(Q(5.4,.5,.3,b,{x:0,y:.25,z:-2.1500000000000004})),s.add(Q(.4,.06,.4,`#1a130c`,{y:2.94,z:1.3}));let j=new N(new k(.16,20),new p({color:`#ffe6b0`,toneMapped:!1}));j.position.set(0,2.9,1.3),j.rotation.x=Math.PI/2,s.add(j),s.add(vn(h,{x:-3.46,y:2.15,z:.2,ry:Math.PI/2,face:`#efe2c8`,rim:`#2a1c10`})),s.add(Q(3.4,.03,2.4,`#3a1410`,{rough:.98,x:0,y:.012,z:1.95})),s.add(Q(3,.04,2,`#6e2a26`,{rough:.96,x:0,y:.02,z:1.95}));let M=new y;M.add(Q(.32,.32,.32,`#7a4a2a`,{rough:.8,y:.16}));for(let e=0;e<6;e++){let t=Q(.05,.55,.13,`#356a32`,{rough:.7,y:.32});t.geometry.translate(0,.27,0),t.rotation.z=(e/6-.5)*1.1,t.rotation.x=Math.sin(e*1.3)*.22,M.add(t)}M.position.set(2.7,0,.4),s.add(M),s.add(ln({w:.7,d:.7,x:2.7,y:.03,z:.4,opacity:.45})),c.add(Q(11,.2,11,`#403d38`,{rough:.85,y:-.1})),c.add(Q(11,.2,11,`#1c1a17`,{rough:.95,y:2.8})),c.add(Q(7,3,.2,x,{rough:.92,x:0,y:1.4,z:-2.9})),c.add(Q(.2,3,6,x,{rough:.92,x:-3.2,y:1.4,z:-.2})),c.add(Q(.2,3,6,x,{rough:.92,x:3.2,y:1.4,z:-.2}));for(let e of[-1.6,-.4]){let t=new N(new A(.07,.07,6,10),new m({color:`#6b6258`,roughness:.6,metalness:.4}));t.rotation.z=Math.PI/2,t.position.set(0,2.62,e),c.add(t)}let ae=new p({color:`#ffffff`,toneMapped:!1}),oe=new N(new V(1.9,1.2),ae);oe.position.set(0,1.5,-2.79),c.add(oe),c.add(Q(2.06,1.36,.06,`#241a12`,{x:0,y:1.5,z:-2.83})),c.add(Q(.04,.34,.04,`#1a1410`,{x:-.1,y:2.45,z:-.4}));let I=new N(new k(.1,16),new p({color:`#ffdb8a`,toneMapped:!1}));I.position.set(-.1,2.26,-.4),I.rotation.x=Math.PI/2,c.add(I);let se=new y;se.add(Q(1.3,.05,.32,`#3a2c1e`,{x:0,y:0,z:0}));let le=[`#7a3a2a`,`#2a4a6a`,`#b08a3a`,`#3a5a3a`,`#6a2a4a`];for(let e=0;e<8;e++)se.add(Q(.12,.34,.24,le[e%le.length],{x:-.55+e*.14,y:.2,z:0}));se.position.set(-2.3,1.5,-2.66),c.add(se);let z=new y;z.add(Q(.34,.34,.34,`#7a4a2a`,{y:.17}));let ue=new y;for(let e=0;e<6;e++){let t=Q(.05,.5,.14,`#3a7a3a`,{rough:.7});t.geometry.translate(0,.25,0),t.rotation.z=(e/6-.5)*1.2,t.rotation.x=Math.sin(e)*.25,ue.add(t)}ue.position.y=.34,z.add(ue),z.position.set(2.45,0,-1.4),c.add(z),c.add(vn(h,{x:1.9,y:2.1,z:-2.78,ry:0,face:`#d8d2c4`,rim:`#1a130c`}));let B=new y;B.add(Q(3.4,.12,1.5,`#6e4a30`,{rough:.32,y:.86,z:1.5,map:S,mapRepeat:[3,1.4]})),B.add(Q(3.2,.78,1.36,b,{y:.46,z:1.5,map:S,mapRepeat:[3,1]}));for(let e of[.66,.4,.14])B.add(Q(.9,.2,.04,`#4a3120`,{x:1.05,y:e,z:2.2}));B.add(Q(.12,.04,.04,`#caa15a`,{x:1.05,y:.66,z:2.23,metal:.6}));let fe=new N(new A(.05,.045,.1,16),new m({color:`#d8cbb4`,roughness:.6}));fe.position.set(-.55,.97,1.95);let me=new N(new de(.035,.012,8,14),new m({color:`#d8cbb4`,roughness:.6}));me.position.set(-.61,.97,1.95),me.rotation.y=Math.PI/2,B.add(fe,me);let he=new _(new e({map:Cn(),color:`#fff4e0`,transparent:!0,opacity:0,depthWrite:!1,blending:2}));he.scale.set(.12,.18,1),he.position.set(-.55,1.05,1.95),he.raycast=()=>{},B.add(he),B.add(Q(.26,.03,.34,`#efe7d4`,{rough:.85,x:.5,y:.935,z:1.9})),o.add(B);let ge=new y;ge.add(Q(.06,.5,.06,`#2a1c10`,{x:-1.15,y:1.15,z:1.6}));let _e=new N(new F(.22,.26,16,1,!0),new m({color:`#c2802e`,roughness:.5,side:2,emissive:`#3a2208`,emissiveIntensity:.6}));_e.position.set(-1.15,1.42,1.6),ge.add(_e);let ve=new n(`#ffb15a`,7,7,1.8);ve.position.set(-1.15,1.34,1.6),ge.add(ve);let H=new _(new e({map:Cn(),color:`#ffcf8a`,transparent:!0,opacity:.55,depthWrite:!1,blending:2}));H.scale.set(.85,.85,1),H.position.set(-1.15,1.35,1.6),H.raycast=()=>{},ge.add(H),o.add(ge);let U=new y;U.add(Q(.62,.03,.42,`#1c1c20`,{y:.93,z:1.5,metal:.4,rough:.4}));let ye=new N(new D(.62,.4,.025),new m({color:`#0a0c10`,emissive:`#2a4a6a`,emissiveIntensity:.7,roughness:.3}));ye.position.set(0,1.14,1.31),ye.rotation.x=-.32,U.add(ye),U.userData.role=`laptop`,o.add(U);let be=new y;be.add(Q(.26,.07,.34,`#15151a`,{x:1,y:.93,z:1.5}));let xe=Q(.3,.06,.08,`#101015`,{x:1,y:1,z:1.34,emissive:`#234a6a`,emissiveIntensity:.4});be.add(xe),be.userData.role=`phone`,o.add(be);let Se=new pe(`#8a6a42`,`#1c130a`,.78);r.add(Se);let W=new E(`#ffd9a0`,9,9,.7,.5,1.2);W.position.set(0,2.95,1.3),W.target.position.set(0,.86,1.5),r.add(W,W.target);let Ce=yn(!1),we=yn(!0),Te=.62,Ee=1.32,De=1.22,G=1.78,Oe=new _(new e({map:Ce,transparent:!0,depthWrite:!1}));Oe.scale.set(Te,Te,1),Oe.position.set(Ee,De,G),Oe.userData.role=`cat`,o.add(Oe);let ke=new _(new e({map:xn(),transparent:!0,depthWrite:!1,opacity:0}));ke.scale.set(.3,.3,1),ke.raycast=()=>{},o.add(ke);let Ae=0;function je(){Ae=1.3}let Me=.62,Ne=.42,Pe=.34,Fe=new y;Fe.position.set(-.78,1.06,1.95),Fe.add(Q(Me,.05,Pe,`#3a3026`,{y:-.19}));let Ie=new N(new D(Me-.04,Ne-.08,Pe-.04),new m({color:`#1f9fc0`,transparent:!0,opacity:.26,roughness:.1,emissive:`#0a3a4a`,emissiveIntensity:.4,depthWrite:!1}));Ie.position.y=.02,Fe.add(Ie);for(let e of[-1,1])for(let t of[-1,1])Fe.add(Q(.03,Ne,.03,`#20262c`,{x:e*(Me/2-.015),z:t*(Pe/2-.015),metal:.5}));let K=new N(new D(Me,Ne,Pe),new p({visible:!1}));K.userData.role=`tank`,Fe.add(K);let Le=new n(`#5fd8ff`,0,3,2);Fe.add(Le);let Re=[Sn(`#e8a23c`),Sn(`#d85a6a`),Sn(`#6cc0e0`)],ze=[],Be=Ne/2-.12;for(let t=0;t<3;t++){let n=new _(new e({map:Re[t],transparent:!0,depthWrite:!1})),r=.15-t*.015;n.userData={sz:r,sp:.6+t*.22,ph:t*2.1,ax:.21*(.7+.1*t),ay:Be,az:.09000000000000001,prevx:0},n.scale.set(r,r,1),ze.push(n),Fe.add(n)}let Ve=Cn(),He=[];for(let t=0;t<5;t++){let n=new _(new e({map:Ve,color:`#cfeffb`,transparent:!0,opacity:.5,depthWrite:!1}));n.userData={ph:t/5,sp:.16+Math.random()*.06,x:-.1+t%3*.07},n.scale.setScalar(.03+t%2*.015),n.raycast=()=>{},He.push(n),Fe.add(n)}let q=new _(new e({map:Ve,color:`#c8a24a`,transparent:!0,opacity:0,depthWrite:!1}));q.scale.setScalar(.04),q.raycast=()=>{},Fe.add(q);let Ue=0;function We(){Ue=3,q.position.set(-.05,Be,0),q.material.opacity=1}o.add(Fe);let J=new y;for(let t=0;t<8;t++){let n=new _(new e({map:Ve,color:`#ffd9a0`,transparent:!0,opacity:0,depthWrite:!1,blending:2}));n.scale.setScalar(.018),n.userData={ph:t*.9,sp:.1+t%3*.04,r:.1+t%4*.03},n.raycast=()=>{},J.add(n)}J.position.set(-1.15,1.2,1.6),o.add(J);let Y=new y,Ge=.925;Y.add(ln({w:4,d:2,x:0,y:.045,z:1.55,opacity:.5})),Y.add(ln({w:.95,d:.62,x:0,y:Ge,z:1.42,opacity:.42})),Y.add(ln({w:.3,d:.3,x:-.55,y:Ge,z:1.95,opacity:.4})),Y.add(ln({w:.42,d:.46,x:.5,y:Ge,z:1.9,opacity:.35})),Y.add(ln({w:.42,d:.46,x:1,y:Ge,z:1.5,opacity:.42})),Y.add(ln({w:.7,d:.42,x:-.78,y:Ge,z:1.95,opacity:.42})),Y.add(ln({w:.55,d:.4,x:1.32,y:Ge,z:1.78,opacity:.4})),Y.add(ln({w:.34,d:.34,x:-1.15,y:Ge,z:1.6,opacity:.35})),o.add(Y),[B,ge,U,be,Oe,Fe,J,Y].forEach(e=>u.add(e));function Ke(e,t,n,r,i,a,o){let s=new N(new D(t,n,r),new p({visible:!1}));s.position.set(i,a,o),s.userData.role=e,f.add(s)}Ke(`laptop`,.95,.6,.7,0,1.05,1.4),Ke(`phone`,.5,.4,.5,1,.98,1.42),Ke(`cat`,.62,.74,.5,Ee,De,G);let qe=_n(),Je={smooth:new ne().load(pn),charm:new ne().load(mn)};for(let e of[`smooth`,`charm`]){let t=Je[e];t.colorSpace=d,t.repeat.set(1,.86),t.offset.set(0,.14),t.needsUpdate=!0}let Ye=new N(new V(1,1),new p({map:Je.smooth,toneMapped:!1}));Ye.position.set(0,1.45,-5),Ye.visible=!1,Ye.raycast=()=>{},r.add(Ye);let Xe=fn({strength:.5});r.add(Xe);let X=`3d`,Ze=`painted`;function Qe(){let e=st===`corner`,t=X!==`3d`,n=t&&Ze===`painted`;s.visible=e&&!t,c.visible=!e&&!t,l.visible=t||e,Ye.visible=t,u.visible=!n}function $e(e){return X=e===`smooth`||e===`charm`?e:`3d`,X!==`3d`&&(Ye.material.map=Je[X],Ye.material.needsUpdate=!0),Qe(),X}function et(e){return Ze=e===`3d`?`3d`:`painted`,Qe(),Ze}let tt=ve.intensity,nt=ye.material.emissiveIntensity,rt=new L;function it(e,t,n){let r=n?n.windowGlow:0,o=r>.55;Oe.material.map=o?we:Ce,Ae>0&&(Ae=Math.max(0,Ae-e));let s=Ae>0?Math.sin((1.3-Ae)/1.3*Math.PI):0,c=o?.012*Math.sin(t*1.2):.03*Math.sin(t*2.4);Oe.scale.set(Te,Te*(1+c+.12*s),1),Oe.position.y=De+.06*s,ke.material.opacity=s,ke.position.set(Ee,1.72+.5*(1-Ae/1.3),G),ke.scale.setScalar(.22+.1*s),Ue>0&&(Ue=Math.max(0,Ue-e),q.position.y=Math.max(-.09,q.position.y-e*.06),q.material.opacity=Ue>.3?1:Ue/.3);for(let e of ze){let n=e.userData,r=Math.sin(t*n.sp+n.ph)*n.ax,i=Math.sin(t*n.sp*.8+n.ph*1.7)*n.ay*.7,a=Math.cos(t*n.sp*.6+n.ph)*n.az,o=Ue>0?q.position.x:r,s=Ue>0?q.position.y:i,c=Ue>0?q.position.z:a,l=Ue>0?.05:.1;e.position.x+=(o-e.position.x)*l,e.position.y+=(s-e.position.y)*l,e.position.z+=(c-e.position.z)*l,e.scale.x=(e.position.x>=n.prevx?1:-1)*n.sz,n.prevx=e.position.x}for(let e of He){let n=(t*e.userData.sp+e.userData.ph)%1;e.position.set(e.userData.x+Math.sin(t*2+e.userData.ph*9)*.015,-.09+2*Be*n,.02),e.material.opacity=.5*Math.sin(n*Math.PI)}Le.intensity=2.6*r,Ie.material.emissiveIntensity=.4+.9*r,ve.intensity=tt*(.97+.03*Math.sin(t*7)*Math.sin(t*2.3)),ye.material.emissiveIntensity=nt*(.85+.15*Math.sin(t*3.1+1)),xe.material.emissiveIntensity=.4*(.65+.35*Math.sin(t*2.2)),rt.setRGB(1,.85,.62),J.children.forEach((e,n)=>{let i=e.userData,a=(t*i.sp+i.ph)%1;e.position.set(Math.cos(t*.5+i.ph*5)*i.r,-.15+a*.45,Math.sin(t*.4+i.ph*5)*i.r),e.material.opacity=(.1+.18*r)*Math.sin(a*Math.PI)});let l=t*.4%1;he.position.y=1.04+l*.22,he.position.x=-.55+Math.sin(t*1.5)*.02,he.material.opacity=.26*Math.sin(l*Math.PI),he.scale.set(.1+l*.08,.16+l*.12,1),ue.rotation.z=Math.sin(t*.8)*.05,ue.rotation.x=Math.sin(t*.6+1)*.04;let u=n?n.t%1:0;for(let e of h)e.rotation.z=-u*Math.PI*2;if(qe.update(e),Ye.visible){let e=i.position.z-Ye.position.z,t=2*Math.tan(P.degToRad(i.fov)*.5)*e*1.18;Ye.scale.set(t*i.aspect,t,1);let n=.55+.45*(1-r);Ye.material.color.setRGB(n,n*.97,n*.92)}i.position.set(a.x+Math.sin(t*.5)*.04,a.y+Math.sin(t*.7)*.02,a.z),i.lookAt(0,1.12,-1),Xe.fit(i)}function at(e){ee.map=e,te.map=e,ee.needsUpdate=!0,te.needsUpdate=!0}function ot(e){ae.map=e,ae.needsUpdate=!0}let st=t;function ct(e){st=e===`basement`?`basement`:`corner`;let t=st===`corner`;return Qe(),W.intensity=t?9:3.2,Se.intensity=t?.78:.82,Se.color.set(t?`#6a5238`:`#7a5a34`),st}return ct(st),{scene:r,camera:i,update:it,setCityTexture:at,setVignetteTexture:ot,setFitout:ct,setSkin:$e,setProps:et,petCat:je,feedFish:We,vignette:qe,get interactables(){return X!==`3d`&&Ze===`painted`?f.children:[U,be,Oe,K]},get tier(){return st},get skin(){return X},get props(){return Ze}}}function _n(){let e=new ce;e.background=new L(`#7fb0dd`);let t=new l(-1.4,1.4,.9,-.9,0,10);t.position.set(0,0,5);let n=(e,t={})=>new p({color:e,toneMapped:!1,...t}),r=(e,t,r,i,a,o,s)=>{let c=new N(new V(e,t),n(o,s));return c.position.set(r,i,a),c};e.add(r(3.2,.9,.5,-.95,1,`#2a4a30`)),e.add(r(3.2,.7,-.7,-1.05,2,`#1d3724`)),e.add(r(.06,.3,-.95,-.55,3,`#3a2a1a`));let i=new N(new k(.22,18),n(`#234a2a`));i.position.set(-.95,-.32,3),e.add(i),e.add(r(.04,.55,.9,-.55,3,`#20242a`));let a=new N(new k(.1,16),n(`#ffd98a`,{transparent:!0,opacity:0}));a.position.set(.9,-.26,3.1),e.add(a);let o=new N(new k(.16,24),n(`#fff4d8`));e.add(o);let s=[];for(let[t,r]of[[-1,.5],[-.6,.7],[.2,.6],[.7,.72],[1.05,.45],[-.2,.78],[.45,.4]]){let i=new N(new k(.015,8),n(`#ffffff`,{transparent:!0,opacity:0}));i.position.set(t,r,.5),s.push(i),e.add(i)}let c=new L(`#141d33`),u=new L(`#7fb6e0`),d=new L(`#d6824a`),f=new L(`#fff0cc`),m=new L(`#cdd8ef`),h=.34;function g(t){h=(h+t*.04)%1;let n=h*Math.PI*2,r=-Math.cos(n);o.position.set(Math.sin(n)*1.15,r*.66+.06,0);let i=P.smoothstep(r,-.18,.5),l=P.smoothstep(.32,0,Math.abs(r));e.background.copy(c).lerp(u,i).lerp(d,l*.45),o.material.color.copy(r>0?f:m),a.material.opacity=1-i;let p=(1-i)*.85;for(let e of s)e.material.opacity=p}return{scene:e,camera:t,update:g}}function vn(e,{x:t,y:n,z:r,ry:i=0,face:a=`#efe2c8`,rim:o=`#2a1c10`}){let s=new y,c=new N(new k(.2,28),new m({color:o,roughness:.6})),l=new N(new k(.17,28),new m({color:a,roughness:.7}));l.position.z=.01;let u=new N(new V(.018,.14),new m({color:`#1a130c`,roughness:.5}));return u.geometry.translate(0,.05,0),u.position.z=.02,e.push(u),s.add(c,l,u),s.position.set(t,n,r),s.rotation.y=i,s}function yn(e){let t=document.createElement(`canvas`);t.width=t.height=128;let n=t.getContext(`2d`),r=`#e08a3c`,i=`#b96a26`,a=`#3a2410`;if(n.lineJoin=`round`,e){n.fillStyle=r,n.beginPath(),n.ellipse(64,78,44,26,0,0,7),n.fill(),n.fillStyle=i,n.beginPath(),n.ellipse(64,86,44,16,0,0,7),n.fill(),n.fillStyle=r,n.beginPath(),n.arc(36,70,20,0,7),n.fill(),n.fillStyle=r,bn(n,24,56,34,44,42,58),bn(n,40,54,50,44,54,60),n.strokeStyle=i,n.lineWidth=7,n.lineCap=`round`,n.beginPath(),n.moveTo(100,70),n.quadraticCurveTo(112,90,88,96),n.stroke(),n.strokeStyle=a,n.lineWidth=2.5,n.beginPath(),n.arc(30,70,5,.1,Math.PI-.1),n.stroke(),n.strokeStyle=i,n.lineWidth=3;for(let e of[60,74,88])n.beginPath(),n.moveTo(e,58),n.lineTo(e,70),n.stroke()}else{n.fillStyle=r,n.beginPath(),n.ellipse(64,86,30,34,0,0,7),n.fill(),n.fillStyle=`#f3c98a`,n.beginPath(),n.ellipse(64,92,14,22,0,0,7),n.fill(),n.strokeStyle=i,n.lineWidth=8,n.lineCap=`round`,n.beginPath(),n.moveTo(92,100),n.quadraticCurveTo(116,86,104,60),n.stroke(),n.fillStyle=r,n.beginPath(),n.arc(64,48,24,0,7),n.fill(),n.fillStyle=r,bn(n,44,34,50,18,60,34),bn(n,84,34,78,18,68,34),n.fillStyle=`#f0b0c0`,bn(n,47,30,50,22,56,32),bn(n,81,30,78,22,72,32),n.fillStyle=a,n.beginPath(),n.arc(55,47,3.4,0,7),n.arc(73,47,3.4,0,7),n.fill(),n.fillStyle=`#e06a7a`,bn(n,61,54,67,54,64,58),n.strokeStyle=a,n.lineWidth=1.6;for(let e of[-2,3])n.beginPath(),n.moveTo(50,55+e),n.lineTo(34,53+e),n.moveTo(78,55+e),n.lineTo(94,53+e),n.stroke();n.strokeStyle=i,n.lineWidth=3;for(let e of[78,90,102])n.beginPath(),n.moveTo(50,e),n.lineTo(78,e),n.stroke()}let o=new O(t);return o.colorSpace=d,o}function bn(e,t,n,r,i,a,o){e.beginPath(),e.moveTo(t,n),e.lineTo(r,i),e.lineTo(a,o),e.closePath(),e.fill()}function xn(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`);t.fillStyle=`#ff5a8a`,t.beginPath(),t.moveTo(32,52),t.bezierCurveTo(6,32,14,10,32,24),t.bezierCurveTo(50,10,58,32,32,52),t.fill();let n=new O(e);return n.colorSpace=d,n}function Sn(e){let t=document.createElement(`canvas`);t.width=t.height=64;let n=t.getContext(`2d`);n.fillStyle=e,n.beginPath(),n.ellipse(30,32,18,11,0,0,7),n.fill(),n.beginPath(),n.moveTo(46,32),n.lineTo(60,22),n.lineTo(60,42),n.closePath(),n.fill(),n.fillStyle=`rgba(255,255,255,0.35)`,n.beginPath(),n.ellipse(28,36,12,5,0,0,7),n.fill(),n.fillStyle=`#15212a`,n.beginPath(),n.arc(20,30,2.6,0,7),n.fill();let r=new O(t);return r.colorSpace=d,r}function Cn(){let e=document.createElement(`canvas`);e.width=e.height=32;let t=e.getContext(`2d`),n=t.createRadialGradient(16,16,0,16,16,16);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.6,`rgba(255,255,255,0.7)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.beginPath(),t.arc(16,16,16,0,7),t.fill();let r=new O(e);return r.colorSpace=d,r}function wn(e){let t=document.createElement(`canvas`);t.width=t.height=256;let n=t.getContext(`2d`),r=n.createLinearGradient(0,0,256,256);e<0?(r.addColorStop(0,`#6a3b1c`),r.addColorStop(1,`#caa15a`)):(r.addColorStop(0,`#3a4a6a`),r.addColorStop(1,`#a86a3a`)),n.fillStyle=r,n.fillRect(0,0,256,256),n.globalAlpha=.5;for(let e=0;e<5;e++)n.fillStyle=e%2?`#2a1c10`:`#e0c080`,n.fillRect(30+e*36,40+e%3*30,26,150);let i=new O(t);return i.colorSpace=d,i}var{Timer:Tn}=le,En=new URLSearchParams(window.location.search),Dn=En.get(`demo`)===`1`||En.has(`capture`);window.__demo=Dn;var On=(En.get(`city`)?Number(En.get(`city`)):0)||Math.random()*1e9|0,kn=0,An=tn({demo:Dn,citySeed:On,profileIndex:kn}),{renderer:jn,rig:Mn,sunRig:Nn,city:Pn,cityLife:Fn,waterMaterial:In,fitShadowFrustum:Ln,landmarkFactory:Rn,renderCityBeautyTo:zn}=An,$=gn({tier:`corner`});$.camera.aspect=window.innerWidth/window.innerHeight,$.camera.updateProjectionMatrix();var Bn=!0;window.__shadows=Bn,window.__scene=`office`;var Vn=new v(55,1.4,.1,100);Vn.position.set(2.2,3.4,11.5),Vn.lookAt(0,2,0);var Hn=new M(640,448,{minFilter:i,magFilter:i,depthBuffer:!0,stencilBuffer:!1});$.setCityTexture(Hn.texture);var Un=0,Wn=3,Gn=new M(512,320,{minFilter:i,magFilter:i,depthBuffer:!0,stencilBuffer:!1});$.setVignetteTexture(Gn.texture);var Kn=!1,qn=(()=>{if(typeof document>`u`)return{showLap(){},toast(){},flash(){}};let e=document.createElement(`style`);e.textContent=`
  .lap { position: fixed; inset: 0; z-index: 5; display:flex; align-items:center; justify-content:center;
    background: rgba(6,8,12,0.55); opacity:0; pointer-events:none; transition: opacity .25s; }
  .lap.on { opacity:1; pointer-events:auto; }
  .lap-win { width:min(560px,90vw); border-radius:14px; overflow:hidden; background:#0e1016;
    border:1px solid #2a2f3a; box-shadow:0 20px 60px rgba(0,0,0,.6); font:13px/1.5 ui-monospace,monospace; color:#cdd3dc; }
  .lap-bar { display:flex; align-items:center; justify-content:space-between; padding:10px 14px; background:#161a22; border-bottom:1px solid #2a2f3a; }
  .lap-bar b { letter-spacing:.08em; color:#7fd0ff; }
  .lap-x { cursor:pointer; border:0; background:#222833; color:#cdd3dc; min-width:44px;height:44px;border-radius:8px; font:inherit; transition: transform .08s ease, background .12s; }
  .lap-body { padding:18px; }
  .lap-body .row { display:flex; gap:8px; margin-top:12px; flex-wrap:wrap; }
  .lap-body button.stub { padding:9px 13px; border-radius:8px; border:1px solid #2a2f3a; background:#1a1f29; color:#cdd3dc; cursor:pointer; transition: transform .08s ease, background .12s; }
  /* L42 button juice: press scale + flash on the panel buttons (paired with a guarded haptic in JS). */
  .lap-x:active, .lap-body button.stub:active { transform: scale(0.92); background:#33405a; }
  @media (prefers-reduced-motion: reduce) { .lap-x, .lap-body button.stub { transition: background .12s; } .lap-x:active, .lap-body button.stub:active { transform: none; } }
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
    </div></div>`;let n=document.createElement(`div`);n.className=`otoast`;let r=document.createElement(`div`);r.className=`oflash`,document.body.append(t,n,r),t.querySelector(`.lap-x`).addEventListener(`click`,()=>Yn()),t.addEventListener(`click`,e=>{e.target===t&&Yn()}),t.addEventListener(`click`,e=>{e.target.closest(`button`)&&navigator.vibrate?.(10)});let i=0;return{showLap(e){t.classList.toggle(`on`,e)},toast(e){n.textContent=e,n.classList.add(`on`),clearTimeout(i),i=setTimeout(()=>n.classList.remove(`on`),1400)},flash(){r.style.transition=`none`,r.style.opacity=`0.85`,requestAnimationFrame(()=>{r.style.transition=`opacity .55s`,r.style.opacity=`0`})}}})();function Jn(){Kn=!0,qn.showLap(!0)}function Yn(){Kn=!1,qn.showLap(!1)}function Xn(){kn=(kn+1)%J.length,qn.flash(),Pn.generate(On,kn),In.uniforms.uVecWater.value.set(Pn.waterColor),Fn.setProfile(Pn.state.profile),Ln(),qn.toast(`✈  `+Pn.state.profile.name),window.__profile=Pn.state.profile.key}function Zn(e){let t=$.setFitout(e);return qn.toast(t===`basement`?`🏚  Basement office`:`🏙  Corner office`),window.__tier=t,t}function Qn(){return Zn($.tier===`corner`?`basement`:`corner`)}window.__tier=$.tier;var $n=[`3d`,`smooth`,`charm`],er={"3d":`🧊  Stylized 3D office`,smooth:`🖼  Smooth diffusion skin`,charm:`🕹  Charm diffusion skin`};function tr(e){let t=$.setSkin(e);return window.__officeSkin=t,qn.toast(er[t]),t}function nr(){return tr($n[($n.indexOf($.skin)+1)%$n.length])}window.__officeSkin=$.skin;var rr={painted:`🎨  Painted props (cohesive)`,"3d":`🧊  Live 3D props (animated)`};function ir(e){let t=$.setProps(e);return window.__officeProps=t,$.skin!==`3d`&&qn.toast(rr[t]),t}function ar(){return ir($.props===`painted`?`3d`:`painted`)}window.__officeProps=$.props;var or=new C,sr=new I,cr=(e,t)=>{sr.x=e/window.innerWidth*2-1,sr.y=-(t/window.innerHeight)*2+1};function lr(){or.setFromCamera(sr,$.camera);let e=or.intersectObjects($.interactables,!0)[0];if(!e)return null;let t=e.object;for(;t&&!t.userData.role;)t=t.parent;return t?t.userData.role:null}function ur(e){e===`laptop`?Jn():e===`phone`?Xn():e===`cat`?$.petCat():e===`tank`&&$.feedFish()}var dr=0,fr=0,pr=0;jn.domElement.addEventListener(`mousedown`,e=>{dr=e.clientX,fr=e.clientY,pr=performance.now()}),window.addEventListener(`mousemove`,e=>{cr(e.clientX,e.clientY),jn.domElement.style.cursor=lr()?`pointer`:`default`}),window.addEventListener(`mouseup`,e=>{if(Math.hypot(e.clientX-dr,e.clientY-fr)<6&&performance.now()-pr<350&&!Kn){cr(e.clientX,e.clientY);let t=lr();t&&ur(t)}});var mr=!1;jn.domElement.addEventListener(`touchstart`,e=>{e.touches.length===1&&(dr=e.touches[0].clientX,fr=e.touches[0].clientY,pr=performance.now(),mr=!1)},{passive:!0}),jn.domElement.addEventListener(`touchmove`,e=>{e.touches.length===1&&Math.hypot(e.touches[0].clientX-dr,e.touches[0].clientY-fr)>8&&(mr=!0)},{passive:!0}),window.addEventListener(`touchend`,e=>{if(!mr&&performance.now()-pr<350&&(!e.touches||e.touches.length===0)&&!Kn){let e=lr();e&&ur(e)}}),window.addEventListener(`keydown`,e=>{e.key===`Escape`&&Kn&&Yn(),(e.key===`f`||e.key===`F`)&&Qn(),(e.key===`j`||e.key===`J`)&&nr(),(e.key===`u`||e.key===`U`)&&ar(),(e.key===`t`||e.key===`T`)&&Nn.cyclePreset(),(e.key===`h`||e.key===`H`)&&(Bn=!Bn,window.__shadows=Bn)}),Rn.whenReady.then(()=>{Pn.generate(On,kn),Ln(),window.__cityReady=!0}),En.get(`office`)===`basement`&&Zn(`basement`);var hr=En.get(`officeskin`);[`3d`,`smooth`,`charm`].includes(hr)&&tr(hr);var gr=En.get(`officeprops`);[`painted`,`3d`].includes(gr)&&ir(gr);var _r=new Tn;_r.connect(document);function vr(){_r.update();let e=Math.min(_r.getDelta(),.1);Mn.update(e),An.updateWorld(e,_r.getElapsed(),{shadowsOn:Bn,seasonTarget:0}),$.update(e,_r.getElapsed(),Nn),$.tier===`basement`?(jn.setRenderTarget(Gn),jn.render($.vignette.scene,$.vignette.camera)):Un%Wn===0&&zn(Vn,Hn),Un++,jn.setRenderTarget(null),jn.render($.scene,$.camera),requestAnimationFrame(vr)}vr(),on({key:`office`,title:`The Office`,tips:[`Click / tap the LAPTOP to open the game panel`,`Tap the PHONE to travel to another city · pet the CAT · feed the FISH`,`Esc exits · F fitout · J skin · U props · T time`]}),window.addEventListener(`resize`,()=>{An.resize(),$.camera.aspect=window.innerWidth/window.innerHeight,$.camera.updateProjectionMatrix()});