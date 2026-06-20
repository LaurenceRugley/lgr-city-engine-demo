import{$ as e,A as t,B as n,C as r,D as i,E as a,F as o,G as s,H as c,I as l,J as u,K as d,L as f,M as p,N as m,O as h,P as g,Q as _,R as v,S as y,T as b,U as x,V as S,W as C,X as w,Y as T,Z as E,_ as D,a as O,at as k,b as A,c as j,ct as M,d as ee,dt as N,et as P,f as F,ft as I,g as te,h as L,i as ne,it as re,j as ie,k as ae,l as R,lt as oe,m as z,n as se,nt as ce,o as B,ot as le,p as ue,pt as V,q as H,r as de,rt as fe,s as U,st as W,t as pe,tt as me,u as he,ut as ge,v as _e,w as ve,x as ye,y as be,z as G}from"./three-DpDPozDb.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var xe=Math.atan(1/Math.SQRT2),Se=Math.atan(.5),Ce=Math.PI/4,we={PERSPECTIVE:4,ISOMETRIC:5,DIMETRIC:6},Te=.12,Ee=1.45,De=4,Oe=40,ke=1.5,Ae=16,je=6,Me=22,Ne=3.5,Pe=11,Fe=(e,t,n)=>e+(t-e)*(1-Math.exp(-8*n)),K=(e,t)=>e+Math.PI*2*Math.round((t-e)/(Math.PI*2));function Ie({aspect:e,fov:t=48,near:n=.1,far:r=100,target:i=new I(0,.8,0),azimuth:a=Ce,elevation:o=.52,distance:s=12,zoom:c=5.5}={}){let u=new d(t,e,n,r),f=new C(-1,1,1,-1,n,r),p=we.PERSPECTIVE,m=e,h={azimuth:a,elevation:o,distance:s,zoom:c,target:i.clone()},g={azimuth:a,elevation:o,distance:s,zoom:c,target:i.clone()},_=!1,v=null,y=new I,b=()=>p===we.PERSPECTIVE?u:f;function x(e){e!==p&&(p=e,p===we.ISOMETRIC||p===we.DIMETRIC?(h.elevation=p===we.ISOMETRIC?xe:Se,h.azimuth=K(Ce,g.azimuth),_=!0):_=!1)}function S(e,t){h.azimuth+=e,_||(h.elevation=l.clamp(h.elevation+t,Te,Ee))}function w(e){p===we.PERSPECTIVE?h.distance=l.clamp(h.distance*e,De,Oe):h.zoom=l.clamp(h.zoom*e,ke,Ae)}function T(e,t){let n=h.azimuth,r=p===we.PERSPECTIVE?h.distance*.04:h.zoom*.08,i=new I(Math.cos(n),0,-Math.sin(n)),a=new I(-Math.sin(n),0,-Math.cos(n));h.target.addScaledVector(i,e*r),h.target.addScaledVector(a,t*r)}function E(e,t){m=e/t,u.aspect=m,u.updateProjectionMatrix()}function D(e){v&&(v(y),h.target.copy(y)),g.azimuth=Fe(g.azimuth,h.azimuth,e),g.elevation=Fe(g.elevation,h.elevation,e),g.distance=Fe(g.distance,h.distance,e),g.zoom=Fe(g.zoom,h.zoom,e),g.target.x=Fe(g.target.x,h.target.x,e),g.target.y=Fe(g.target.y,h.target.y,e),g.target.z=Fe(g.target.z,h.target.z,e);let t=Math.cos(g.elevation),n=Math.sin(g.elevation),r=Math.cos(g.azimuth),i=Math.sin(g.azimuth),a=b();if(a.position.set(g.target.x+g.distance*t*i,g.target.y+g.distance*n,g.target.z+g.distance*t*r),a.lookAt(g.target),a.isOrthographicCamera){let e=g.zoom,t=e*m;a.left=-t,a.right=t,a.top=e,a.bottom=-e,a.updateProjectionMatrix()}}function O(e,t,n,r=!1){h.target.set(e,t,n),r&&g.target.copy(h.target)}function k(e,t=!1){h.zoom=l.clamp(e,ke,Ae),t&&(g.zoom=h.zoom)}function A(e,{frame:t,snap:n=!1}={}){v=e,n&&(v(y),h.target.copy(y),g.target.copy(y)),t!=null&&(p===we.PERSPECTIVE?h.distance=l.clamp(t,De,Oe):h.zoom=l.clamp(t,ke,Ae))}function j(){v=null}return{get camera(){return b()},get mode(){return p},get azimuth(){return g.azimuth},get following(){return!!v},setTarget:O,setZoom:k,setFollow:A,clearFollow:j,get styleT(){return p===we.PERSPECTIVE?l.clamp((g.distance-je)/(Me-je),0,1):l.clamp((g.zoom-Ne)/(Pe-Ne),0,1)},setMode:x,orbit:S,zoomBy:w,pan:T,setViewport:E,update:D}}var Le={value:0},Re=new z(`#ffffff`),ze={value:0},Be={value:0},Ve={value:0},He=new N,Ue={value:0},We={value:0},Ge=`
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
`;function Ke(e){e.uniforms.uVector=Le,e.uniforms.uVecTint={value:Re},e.uniforms.uVecShadow=ze,e.uniforms.uSnow=Be,e.uniforms.uCloud=Ve,e.uniforms.uCloudOff={value:He},e.uniforms.uFogCharm=Ue}function qe(e){return e.replace(`#include <fog_fragment>`,`
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
  `)}function Je(e){return e.replace(`#include <common>`,`#include <common>
varying vec3 vVecN;
varying vec3 vVecP;
varying vec2 vWorldXZ;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
  vVecN = normal;
  vVecP = position;
  vWorldXZ = (modelMatrix * vec4(position, 1.0)).xz;`)}function Ye(e){return e.replace(`#include <shadowmap_pars_fragment>`,`#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>`)}var Xe=`col *= mix(1.0, getShadowMask(), uVecShadow);`;function Ze(e,{color:t,id:n,windowGlow:r,winColors:i=[`#ffb852`,`#8cd9ff`],litFrac:a=.55}={}){let o=[0,1,2].map(e=>new z(i[e]??i[i.length-1]));return e.customProgramCacheKey=()=>`lgr-vec-tower`,e.onBeforeCompile=e=>{Ke(e),e.uniforms.uWindowGlow=r,e.uniforms.uWinId={value:n},e.uniforms.uVecColor={value:new z(t)},e.uniforms.uWinA={value:o[0]},e.uniforms.uWinB={value:o[1]},e.uniforms.uWinC={value:o[2]},e.uniforms.uWinLit={value:a},e.vertexShader=Je(e.vertexShader),e.fragmentShader=qe(Ye(e.fragmentShader.replace(`#include <common>`,`#include <common>
        uniform float uWindowGlow;
        uniform float uWinId;
        uniform vec3  uVecColor;
        uniform vec3  uWinA; uniform vec3 uWinB; uniform vec3 uWinC;
        uniform float uWinLit;
        ${Ge}
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
          ${Xe}                                  // the sun's shadow darkens the body
          vec3 wcol; vec2 w = winTerms(wcol);
          vec3 glass = vec3(0.17, 0.23, 0.34);          // dark glass-blue panes (day)
          col = mix(col, glass, w.x * 0.85);
          col += w.x * w.y * wcol * uWindowGlow * 1.5;  // …windows EMIT (unshadowed) at night
          gl_FragColor = vec4(col, diffuseColor.a);
        }`)))},e}function q(e,{color:t=null,glow:n=null,glowDay:r=0,glowNight:i=1,windowGlow:a=null,season:o=!1}={}){let s=t===null,c=n!==null&&a!==null;return e.customProgramCacheKey=()=>`lgr-vec|`+(s?`d`:`c`)+(c?`g`:``)+(o?`s`:``),e.onBeforeCompile=e=>{Ke(e),s||(e.uniforms.uVecColor={value:new z(t)}),c&&(e.uniforms.uGlow={value:new z(n)},e.uniforms.uGlowDay={value:r},e.uniforms.uGlowNight={value:i},e.uniforms.uWindowGlow=a),o&&(e.uniforms.uSeason=We),e.vertexShader=Je(e.vertexShader);let l=s?`diffuseColor.rgb`:`uVecColor`,u=o?`seasonShift(${l})`:l,d=(s?``:`uniform vec3 uVecColor;
`)+(c?`uniform vec3 uGlow; uniform float uGlowDay; uniform float uGlowNight; uniform float uWindowGlow;
`:``)+(o?`uniform float uSeason;
vec3 seasonShift(vec3 c){
  c = mix(c, vec3(0.86, 0.46, 0.13), smoothstep(0.40, 0.70, uSeason));   // → autumn orange
  c = mix(c, vec3(0.46, 0.33, 0.20), smoothstep(0.75, 1.00, uSeason));   // → bare brown
  return c;
}
`:``),f=c?`uGlow * mix(uGlowDay, uGlowNight, uWindowGlow)`:`vec3(0.0)`,p=qe(Ye(e.fragmentShader.replace(`#include <common>`,`#include <common>
`+d+Ge).replace(`#include <opaque_fragment>`,`#include <opaque_fragment>
        if (uVector > 0.5) {
          vec3 col = vecShade(${u});
          ${Xe}                            // the sun's shadow darkens the flat tier…
          gl_FragColor = vec4(col + ${f}, diffuseColor.a);  // …but the night glow stays lit
        }`)));c&&(p=p.replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>\n  totalEmissiveRadiance += ${f};`)),e.fragmentShader=p},e}function Qe(e){let t=e>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function $e(e){let t=Qe(e);return{next:t,range:(e,n)=>e+(n-e)*t(),int:(e,n)=>e+Math.floor(t()*(n-e+1)),pick:e=>e[Math.floor(t()*e.length)],chance:e=>t()<e}}var et=[{key:`manhattan`,name:`Manhattan`,towers:[`#EDE3C8`,`#D9B98A`,`#B5562F`,`#A8C8E8`,`#2E3F5C`],ground:`#7CC455`,street:`#9AA0A6`,sidewalk:`#C8CCD0`,park:`#5DB347`,water:`#29A8D8`,shopfronts:[`#C04A3A`,`#3A7AC0`,`#C09A2A`],glass:`#7FA8CC`,winColors:[`#ffd27a`,`#9ad6ff`],hMax:4.6,sigma:.36,roofRate:.35,pSplit:.6,nightLit:.55,roofTint:null,coast:{base:.55,out:1,in:.6,jag:1.05},landmarks:[`empireState`,`chrysler`,`liberty`]},{key:`paris`,name:`Paris`,towers:[`#E8DCC0`,`#F2EAD6`,`#E0D2B4`],ground:`#8CC46A`,street:`#A8A29A`,sidewalk:`#D4CEC2`,park:`#6DB35A`,water:`#3FA8C8`,shopfronts:[`#C04A3A`,`#3A6B5A`,`#7A5AC0`],glass:`#5A6B7A`,winColors:[`#ffdca0`,`#ffcaa0`],hMax:1.5,sigma:.9,roofRate:.15,pSplit:.75,nightLit:.45,roofTint:`#6A7886`,coast:{base:1.05,out:.55,in:.3,jag:.5},landmarks:[`eiffel`,`arcDeTriomphe`,`sacreCoeur`]},{key:`neoTokyo`,name:`Neo-Tokyo`,towers:[`#2A3038`,`#3A4250`,`#252B36`,`#4A4456`],ground:`#3A4A42`,street:`#5A6068`,sidewalk:`#7A8088`,park:`#2E5E46`,water:`#0E6878`,shopfronts:[`#E8483A`,`#5AE8E0`,`#E85AA0`],glass:`#5AE8E0`,winColors:[`#5AE8E0`,`#E85AA0`,`#E8E06A`],hMax:5.2,sigma:.42,roofRate:.6,pSplit:.6,nightLit:.7,roofTint:null,coast:{base:.7,out:1.05,in:.62,jag:1.7},landmarks:[`tokyoTower`,`pagoda`,`neonBillboard`]}];et.map(e=>e.key);var J=.3,tt=1.9,Y=.55,X=2.45,nt=.12,rt=.6,it=6,at={BASE:.7,OUT:.95,IN:.55,JAG:1,SAMPLES_PER_EDGE:28,HARBOR_DEPTH:.55,HARBOR_WIDTH:.26},ot={PLINTH_TOP:J,BLOCK:tt,STREET:Y,PITCH:X,SIDEWALK:nt,SHORE:rt,N:it,COAST:at};function st(e,t,n){let r=n?.base??at.BASE,i=n?.out??at.OUT,a=n?.in??at.IN,o=n?.jag??at.JAG,s=t+r,c=$e((e^789079)>>>0),l=[2,3,5,8,11,13].map(e=>({k:e,amp:1/e*o**((e-2)/6),phase:c.range(0,Math.PI*2)})),u=l.reduce((e,t)=>e+t.amp,0),d=e=>{let t=0;for(let n of l)t+=n.amp*Math.sin(n.k*e*Math.PI*2+n.phase);return Math.max(-1,Math.min(1,t/(u*.6)))},f=[{fix:+s,nx:1,nz:0,sign:1},{fix:+s,nx:0,nz:1,sign:-1},{fix:-s,nx:-1,nz:0,sign:-1},{fix:-s,nx:0,nz:-1,sign:1}],p=t+.22,m=at.SAMPLES_PER_EDGE,h=4*m,g=[],_=0;for(let e=0;e<4;e++){let t=f[e];for(let n=0;n<m;n++,_++){let o=n/m,c=_/h,l=(-s+2*s*o)*t.sign,u=d(c),f=u>=0?u*i:u*a;if(e===0){let e=Math.abs(o-.5);if(e<at.HARBOR_WIDTH){let t=.5+.5*Math.cos(e/at.HARBOR_WIDTH*Math.PI);f-=(r+at.HARBOR_DEPTH)*t}}let v,y;t.nx===0?(y=t.fix+t.nz*f,v=l,y=t.nz>0?Math.max(y,p):Math.min(y,-p)):(v=t.fix+t.nx*f,y=l,v=t.nx>0?Math.max(v,p):Math.min(v,-p)),g.push(new N(v,y))}}return{points:g,B:s,maxR:s+i,harborX:p}}function ct(e){(Array.isArray(e)?e:[e]).forEach(e=>e&&e.dispose&&e.dispose())}function lt({seed:e=1,profileIndex:t=0,landmarkFactory:r=null,windowGlow:a}){let o=new b,s=new b,c=new b;s.raycast=()=>{},c.raycast=()=>{},o.add(s,c);let l=new be(16773594,3);l.position.set(.45,.6,-.65).multiplyScalar(10);let u=new i(7313331,2762272,1);o.add(l,u);let d=0,f=[],p={seed:e,profileIndex:t,profile:et[t],extent:0,meshCount:0};function m(e,t,n,r){let i=new G(new B(e,.04,t),q(new S({color:r,roughness:.95,flatShading:!0}),{color:r}));return i.position.y=n,i.userData.ground=!0,i}function h(e,t){for(let e of s.children)e.geometry&&e.geometry.dispose(),ct(e.material);s.clear();for(let e of c.children)e.traverse(e=>{e.isMesh&&ct(e.material)});c.clear(),f.length=0,d=0;let n=$e(e),i=et[t],a=(it-1)/2*X,o=7.075;p={seed:e,profileIndex:t,profile:i,extent:o+(i.coast?.base??at.BASE),meshCount:0};let l=st(e,o,i.coast);p.coast=l;let u=new re;l.points.forEach((e,t)=>t?u.lineTo(e.x,e.y):u.moveTo(e.x,e.y)),u.closePath();let h=new G(new ye(u,{depth:2,bevelEnabled:!1,steps:1}),q(new S({color:i.ground,roughness:.9,flatShading:!0,side:2}),{color:i.ground}));h.rotation.x=-Math.PI/2,h.position.y=J-2,h.userData.ground=!0,s.add(h);let b=2*7.195;s.add(m(b,b,.32,i.street)),y(l.harborX,i);let C=[];for(let e=0;e<it;e++)for(let t=0;t<it;t++)C.push([e,t]);let w=new Set,T=Math.max(1,Math.round(C.length*.08));for(;w.size<T;)w.add(n.int(0,C.length-1));let E=n.range(-2.45*.6,X*.6),D=n.range(-2.45*.6,X*.6),k=Math.hypot(a,a),A=[];if(C.forEach(([e,t],r)=>{let a=(e-(it-1)/2)*X,o=(t-(it-1)/2)*X;if(s.add(m(tt,tt,.32999999999999996,i.sidewalk).translateX(a).translateZ(o)),w.has(r)){s.add(m(tt-nt*2,tt-nt*2,.35,i.park).translateX(a).translateZ(o));let e=n.int(3,5);for(let t=0;t<e;t++)x(a+n.range(-.6,.6),o+n.range(-.6,.6),i,n);return}let c=tt-nt*2,l=n.chance(i.pSplit)?2:1,u=n.chance(i.pSplit)?2:1,d=c/l,f=c/u;for(let e=0;e<l;e++)for(let t=0;t<u;t++){let r=a-c/2+d*(e+.5),s=o-c/2+f*(t+.5),l=Math.max(.6,d-.1),u=Math.max(.6,f-.1),p=Math.hypot(r-E,s-D)/k,m=Math.exp(-(p*p)/(2*i.sigma*i.sigma)),h=Math.max(.5,.5+(i.hMax-.5)*m*n.range(.75,1.25));h>i.hMax*.5&&Math.min(l,u)>=.7&&A.push({lx:r,lz:s,fw:l,fd:u,h,r:p}),g(r,s,l,u,h,i,n)}}),r&&r.ready){A.sort((e,t)=>e.r-t.r);let e=[],t=i.landmarks;for(let n=0;n<t.length&&A.length;n++){let a=null;for(let t of A)if(e.every(e=>Math.hypot(e.lx-t.lx,e.lz-t.lz)>X*.9)){a=t;break}a||=A[0],e.push(a),_(a.lx,a.lz);let o=i.hMax*r.heightFactor(t[n]),s=r.make(t[n],{x:a.lx,z:a.lz,w:a.fw,d:a.fd,h:o,plinthTop:J});if(s){c.add(s);let e=new O().setFromObject(s);v(e.min.x-.15,e.max.x+.15,e.min.z-.15,e.max.z+.15)}}}s.traverse(e=>{e.isMesh&&(e.userData.ground?(e.castShadow=!1,e.receiveShadow=!0):e.material&&e.material.isMeshBasicMaterial?(e.castShadow=!1,e.receiveShadow=!1):(e.castShadow=!0,e.receiveShadow=!0))}),c.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),p.meshCount=s.children.length+c.children.length;let j=0;for(let e of s.children){let t=e.position;j=(Math.imul(j,16777619)^(Math.round(t.x*100)*2654435761^Math.round(t.y*100)*40503^Math.round(t.z*100)*2246822519))>>>0}for(let e of p.coast.points)j=(Math.imul(j,16777619)^(Math.round(e.x*100)*2654435761^Math.round(e.y*100)*40503))>>>0;p.sig=j,window.__city={seed:e,profile:i.key,meshes:p.meshCount,sig:j}}function g(e,t,r,i,o,c,l){let u=Ze(new S({flatShading:!0,roughness:.7,metalness:.05}),{color:l.pick(c.towers),id:++d,windowGlow:a,winColors:c.winColors,litFrac:c.nightLit}),p=new G(new B(r,o,i),u);if(p.position.set(e,J+o/2,t),p.userData.lot=[e,t],s.add(p),c.roofTint){let n=q(new S({color:c.roofTint,roughness:.85,flatShading:!0}),{color:c.roofTint}),a=new G(new B(r*1.02,.08,i*1.02),n);a.position.set(e,J+o+.04,t),a.userData.lot=[e,t],s.add(a)}if(o<1.4){let n=l.pick(c.shopfronts),a=new G(new B(r*1.04,.18,i*1.04),q(new S({color:n,roughness:.8,flatShading:!0}),{color:n}));a.position.set(e,.39,t),a.userData.lot=[e,t],s.add(a)}let m=J+o,h=r,g=i;if(o>c.hMax*.5&&l.chance(.55)){let n=r*l.range(.5,.72),u=i*l.range(.5,.72),f=o*l.range(.18,.4),p=new G(new B(n,f,u),Ze(new S({flatShading:!0,roughness:.7,metalness:.05}),{color:l.pick(c.towers),id:++d,windowGlow:a,winColors:c.winColors,litFrac:c.nightLit}));p.position.set(e,J+o+f/2,t),p.userData.lot=[e,t],s.add(p),m=J+o+f,h=n,g=u}if(o>c.hMax*.45&&l.chance(c.roofRate)){let r=l.chance(.5)?new G(new B(h*.4,.18,g*.4),q(new S({color:`#9a9a9a`,flatShading:!0}),{color:`#9a9a9a`})):new G(new te(h*.18,h*.18,.22,10),q(new S({color:`#b9bec4`,flatShading:!0}),{color:`#b9bec4`}));if(r.position.set(e+l.range(-.1,.1),m+.11,t+l.range(-.1,.1)),r.userData.lot=[e,t],s.add(r),l.chance(.25)){let r=new G(new k(.05,6,5),new n({color:`#ff3b30`,transparent:!0,opacity:1}));r.position.set(e,m+.15,t),r.userData.lot=[e,t],r.raycast=()=>{},s.add(r),f.push({mesh:r,phase:l.range(0,6.28)})}}if(o>c.hMax*.7&&l.chance(.35)){let n=o*l.range(.18,.34),r=new G(new te(.018,.05,n,6),q(new S({color:`#c8ccd2`,flatShading:!0}),{color:`#c8ccd2`}));r.position.set(e,m+n/2,t),r.userData.lot=[e,t],r.raycast=()=>{},s.add(r)}}function _(e,t){for(let n=s.children.length-1;n>=0;n--){let r=s.children[n];r.userData.lot&&Math.abs(r.userData.lot[0]-e)<1e-4&&Math.abs(r.userData.lot[1]-t)<1e-4&&(r.geometry&&r.geometry.dispose(),ct(r.material),s.remove(r))}for(let e=f.length-1;e>=0;e--)f[e].mesh.parent||f.splice(e,1)}function v(e,t,n,r){for(let i=s.children.length-1;i>=0;i--){let a=s.children[i];a.userData.lot&&a.position.x>=e&&a.position.x<=t&&a.position.z>=n&&a.position.z<=r&&(a.geometry&&a.geometry.dispose(),ct(a.material),s.remove(a))}}function y(e,t){let n=q(new S({color:`#7a5634`,roughness:.95,flatShading:!0}),{color:`#7a5634`}),r=(e,t,r,i)=>{let a=new G(new B(e,.06,t),n);a.position.set(r,J-.16,i),s.add(a)};r(.24,2,e+.02,0),r(1.3,.22,e+.7,-.72),r(1.3,.22,e+.7,.72)}function x(e,t,n,r){let i=new z(n.park),a=(n,a)=>{let o=i.clone().offsetHSL(0,0,r.range(-.06,.06)).getStyle(),c=new G(new k(n,7,6),q(new S({color:o,flatShading:!0}),{color:o,season:!0}));c.scale.y=.7,c.position.set(e,J+a,t),c.userData.lot=null,s.add(c)},o=new G(new B(.05,.18,.05),q(new S({color:`#6b4a2a`,flatShading:!0}),{color:`#6b4a2a`}));o.position.set(e,.39,t),s.add(o),a(.22,.28),a(.16,.46)}function C(e){for(let t of f)t.mesh.material.opacity=.35+.65*(.5+.5*Math.sin(e*3+t.phase))}return h(e,t),{group:o,key:l,fill:u,update:C,generate:h,get state(){return p},get extent(){return p.extent},get waterColor(){return p.profile.water},profiles:et}}var ut=Math.PI*2,dt=.7,ft=90,pt=[{name:`night`,sun:`#4a6f9e`,intensity:.35,hemiSky:`#26344f`,hemiGround:`#0c1018`,horizon:`#1e2942`,sky:`#36486e`,exposure:.95,outline:`#101a30`,window:1,toonGain:2.6,turbidity:3,rayleigh:1,mie:.004,mieG:.75},{name:`dawn`,sun:`#ff9e54`,intensity:2.4,hemiSky:`#8a7686`,hemiGround:`#2a1f1a`,horizon:`#b8512c`,sky:`#ffb070`,exposure:1.05,outline:`#241826`,window:.3,toonGain:2,turbidity:6,rayleigh:3,mie:.025,mieG:.86},{name:`noon`,sun:`#fff4e0`,intensity:4.6,hemiSky:`#9cb8cc`,hemiGround:`#33302a`,horizon:`#5e7689`,sky:`#aacadd`,exposure:1.18,outline:`#0b0a08`,window:0,toonGain:1.7,turbidity:2.2,rayleigh:1.3,mie:.005,mieG:.78},{name:`dusk`,sun:`#ff6b35`,intensity:2,hemiSky:`#7a566a`,hemiGround:`#281a18`,horizon:`#b0432a`,sky:`#ff8a5a`,exposure:1.05,outline:`#1f1420`,window:.4,toonGain:2,turbidity:7,rayleigh:3.2,mie:.028,mieG:.87}],mt=e=>e-Math.floor(e),ht=(e,t,n)=>e+(t-e)*n,gt=(e,t,n)=>e+(t-e)*(1-Math.exp(-6*n));function _t({t:e=.5}={}){let t=e,n=e,r=!1,i=!1,a=pt.map(e=>({name:e.name,sun:new z(e.sun),hemiSky:new z(e.hemiSky),hemiGround:new z(e.hemiGround),horizon:new z(e.horizon),sky:new z(e.sky),outline:new z(e.outline),intensity:e.intensity,exposure:e.exposure,window:e.window,toonGain:e.toonGain,turbidity:e.turbidity,rayleigh:e.rayleigh,mie:e.mie,mieG:e.mieG})),o=new I(0,1,0),s=new z(`#fff4e0`),c=new z(`#6f97b3`),l=new z(`#2a2620`),u=new z(`#3a4a57`),d=new z(`#7da3bd`),f=new z(`#0b0a08`),p=new z(`#000000`),m=3,h=1,g=0,_=1.7,v={turbidity:2.2,rayleigh:1.3,mie:.005,mieG:.78},y=new I;function b(e){let t=mt(e)*4,n=Math.floor(t)%4,r=(n+1)%4,i=t-Math.floor(t),b=a[n],x=a[r];s.lerpColors(b.sun,x.sun,i),c.lerpColors(b.hemiSky,x.hemiSky,i),l.lerpColors(b.hemiGround,x.hemiGround,i),u.lerpColors(b.horizon,x.horizon,i),d.lerpColors(b.sky,x.sky,i),f.lerpColors(b.outline,x.outline,i),m=ht(b.intensity,x.intensity,i),h=ht(b.exposure,x.exposure,i),g=ht(b.window,x.window,i),_=ht(b.toonGain,x.toonGain,i),v.turbidity=ht(b.turbidity,x.turbidity,i),v.rayleigh=ht(b.rayleigh,x.rayleigh,i),v.mie=ht(b.mie,x.mie,i),v.mieG=ht(b.mieG,x.mieG,i),p.setRGB(.045*g,.075*g,.14*g);let S=mt(e)*ut-Math.PI/2,C=Math.cos(S),w=Math.sin(S);y.set(C,w*Math.cos(dt),w*Math.sin(dt)),y.y>=0?o.copy(y):o.copy(y).negate()}return b(t),{sunDir:o,sunColor:s,hemiSky:c,hemiGround:l,horizon:u,sky:d,outline:f,toonFloor:p,skyParams:v,sunArc:y,get sunIntensity(){return m},get exposure(){return h},get windowGlow(){return g},get toonGain(){return _},get t(){return mt(t)},get auto(){return r},get clock(){let e=Math.round(mt(t)*24*60)%1440;return`${String(Math.floor(e/60)).padStart(2,`0`)}:${String(e%60).padStart(2,`0`)}`},cyclePreset(){n=(Math.floor(t*4+1e-4)+1)/4},nudge(e){n+=e/24},goTo(e){n=e},toggleAuto(){r=!r},setReducedMotion(e){i=e},update(e){r&&!i&&(n+=e/ft),t=gt(t,n,e),b(t)}}}function vt(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.35,`rgba(255,255,255,0.55)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new R(e);return r.colorSpace=me,r}function yt(e,t){let n=[];for(let r=0;r<16;r++){let i=r/16*Math.PI*2;n.push(new I(Math.cos(i)*e,t,Math.sin(i)*e))}return new ee(n,!0,`catmullrom`,.5)}function bt(e){let t=(t,n)=>Math.exp(-((e-t)*(e-t))/(2*n*n)),n=Math.max(t(.33,.05),t(.75,.06)),r=l.smoothstep(e,.24,.3)*(1-l.smoothstep(e,.8,.88));return l.clamp(.15+.55*r+.45*n,.12,1)}function xt(){let{PITCH:e,N:t,PLINTH_TOP:n}=ot,r=t+1,i=n+.04,a=n=>(n-t/2)*e,o=t/2,s=[],c=(e,t)=>t*r+e;for(let e=0;e<r;e++)for(let t=0;t<r;t++)s.push({x:a(t),z:a(e),i:t,j:e,edges:[]});let l=[],u=(t,n)=>{let r=(s[t].i===o||s[t].j===o)&&(s[n].i===o||s[n].j===o),i=l.length;l.push({a:t,b:n,len:e,main:r}),s[t].edges.push(i),s[n].edges.push(i)};for(let e=0;e<r;e++)for(let t=0;t<r;t++)t<r-1&&u(c(t,e),c(t+1,e)),e<r-1&&u(c(t,e),c(t,e+1));return{nodes:s,edges:l,y:i,mid:o}}function St({plinthTop:e=.3,extent:r=4,profile:i=null}={}){let a=new b,o=xt(),{nodes:s,edges:c}=o,u=o.y,d=.34,f=0;{let e=ot.PITCH-d*2;f=Math.max(1,Math.floor((e+.26)/.56))}let p=new n({color:`#e8c84a`,fog:!0}),m=new t(new B(.05,.012,.3),p,c.length*f);m.frustumCulled=!1,m.raycast=()=>{},m.receiveShadow=!1,m.castShadow=!1,a.add(m);{let e=new x,t=0;for(let n of c){let r=s[n.a],i=s[n.b],a=i.x-r.x,o=i.z-r.z,c=Math.hypot(a,o),l=a/c,p=o/c,h=Math.atan2(l,p),g=c-d*2;for(let n=0;n<f;n++){let i=d+(f===1?g/2:g*n/(f-1));e.position.set(r.x+l*i,u,r.z+p*i),e.rotation.set(0,h,0),e.updateMatrix(),m.setMatrixAt(t++,e.matrix)}}m.instanceMatrix.needsUpdate=!0}let h=new t(new B(.34,.26,.74),q(new S({flatShading:!0,roughness:.5,metalness:.3})),12);h.castShadow=!0,h.receiveShadow=!1,h.frustumCulled=!1,h.raycast=()=>{};let g=new j,_=new Float32Array(72),v=new Float32Array(72),y=new z(`#fff0c0`),C=new z(`#ff3528`);for(let e=0;e<12;e++)y.toArray(v,e*3),C.toArray(v,(12+e)*3),_[e*3+1]=-50,_[(12+e)*3+1]=-50;g.setAttribute(`position`,new U(_,3)),g.setAttribute(`color`,new U(v,3));let E=new w({size:.72,sizeAttenuation:!0,map:vt(),vertexColors:!0,transparent:!0,opacity:0,blending:2,depthWrite:!1}),D=new T(g,E);D.frustumCulled=!1,D.raycast=()=>{},a.add(h,D);let O=[`#f4c430`,`#c0392b`,`#d8dde2`,`#9aa7b4`,`#6b7785`,`#5a7d9a`],k=Qe(2403557),A=c.map((e,t)=>t).filter(e=>c[e].main),M=[];for(let e=0;e<12;e++){let t=e<4&&A.length?A[k()*A.length|0]:k()*c.length|0,n=e===1;M.push({edge:t,fwd:k()<.5,s:k()*c[t].len,speed:n?.5:.78+e%3*.1,lenZ:n?1.45:1,color:O[n?1:e===0?0:2+e%4],rng:Qe(12648430+e*2654435761),isBus:n,pos:new I,dirX:0,dirZ:1,active:!1})}let ee=new z;M.forEach((e,t)=>h.setColorAt(t,ee.set(e.color)));function N(e,t,n){let r=s[e],i=r.edges.filter(e=>e!==t);if(i.length===0)return t;let a=c[t],o=a.a===e?a.b:a.a,l=r.x-s[o].x,u=r.z-s[o].z,d=Math.hypot(l,u)||1,f=i[0],p=-2;for(let t of i){let n=c[t],i=n.a===e?n.b:n.a,a=s[i].x-r.x,o=s[i].z-r.z,m=Math.hypot(a,o)||1,h=l/d*(a/m)+u/d*(o/m);h>p&&(p=h,f=t)}return n()<.65?f:i[n()*i.length|0]}let P=N,F=new x,te=(e,t)=>{F.position.set(0,-50,0),F.scale.setScalar(0),F.updateMatrix(),e.setMatrixAt(t,F.matrix)},L=.085,ne=ot.PLINTH_TOP+.02+.13,re=new t(new he(.04,.1,3,6),q(new S({flatShading:!0,roughness:.8})),14);re.castShadow=!0,re.receiveShadow=!1,re.frustumCulled=!1,re.raycast=()=>{};let ie=yt(r-.72,e),ae=[];for(let e=0;e<14;e++)ae.push({phase:e/14,speed:.12+e%4*.02,dir:e%2?1:-1,pos:new I,active:!1});let R=new I,oe=new I,se=new z;ae.forEach((e,t)=>re.setColorAt(t,se.set([`#caa`,`#9ab`,`#bba`,`#ab9`][t%4]))),a.add(re);let ce={manhattan:`#e8c84a`,paris:`#dcd2bc`,neoTokyo:`#5ae8e0`};function le(e){e&&p.color.set(ce[e.key]||`#e8c84a`)}le(i);function ue(t,n,r){let i=r?r.t:.5,a=r?r.windowGlow:0,o=Math.max(2,Math.round(bt(i)*12)),u=a>.05;for(let e=0;e<12;e++){if(e>=o){te(h,e),M[e].active=!1,_[e*3+1]=-50,_[(12+e)*3+1]=-50;continue}let n=M[e];n.s+=t*n.speed;let r=0;for(;n.s>=c[n.edge].len&&r++<4;){n.s-=c[n.edge].len;let e=n.fwd?c[n.edge].b:c[n.edge].a,t=P(e,n.edge,n.rng);n.edge=t,n.fwd=c[t].a===e}let i=c[n.edge],a=n.fwd?s[i.a]:s[i.b],l=n.fwd?s[i.b]:s[i.a],d=l.x-a.x,f=l.z-a.z,p=Math.hypot(d,f)||1,m=d/p,g=f/p,v=-g,y=m,b=a.x+m*n.s+v*L,x=a.z+g*n.s+y*L,S=Math.atan2(m,g);F.position.set(b,ne,x),F.rotation.set(0,S,0),F.scale.set(1,1,n.lenZ),F.updateMatrix(),h.setMatrixAt(e,F.matrix),n.pos.set(b,ne,x),n.dirX=m,n.dirZ=g,n.active=!0;let C=.74*n.lenZ*.5,w=ne+.06,T=e*3,E=(12+e)*3;u?(_[T]=b+m*(C+.04),_[T+1]=w,_[T+2]=x+g*(C+.04),_[E]=b-m*(C+.02),_[E+1]=w,_[E+2]=x-g*(C+.02)):(_[T+1]=-50,_[E+1]=-50)}h.instanceMatrix.needsUpdate=!0,g.attributes.position.needsUpdate=!0,E.opacity=l.clamp(a*1.8,0,1);let d=Math.max(2,Math.round(bt(i)*14));for(let t=0;t<14;t++){if(t>=d){te(re,t),ae[t].active=!1;continue}let r=ae[t],i=(r.phase+r.dir*r.speed*n*.02+1e3)%1;ie.getPointAt(i,R),ie.getTangentAt(i,oe);let a=Math.sin(n*6+r.phase*30)*.015;F.position.set(R.x,e+.09+a,R.z),F.rotation.set(0,Math.atan2(oe.x*r.dir,oe.z*r.dir),Math.sin(n*6+r.phase*30)*.06),F.scale.setScalar(1),F.updateMatrix(),re.setMatrixAt(t,F.matrix),r.pos.set(R.x,e+.09,R.z),r.active=!0}re.instanceMatrix.needsUpdate=!0}let V=[...M.map((e,t)=>({kind:`car`,label:e.isBus?`bus`:`car ${t+1}`,getWorldPos:t=>t.copy(e.pos),active:()=>e.active,info:()=>`${e.isBus?`bus`:`car`} · ${c[e.edge].main?`main avenue`:`side street`} → heading ${Ct(e.dirX,e.dirZ)}`})),...ae.map((e,t)=>({kind:`person`,label:`person ${t+1}`,getWorldPos:t=>t.copy(e.pos),active:()=>e.active,info:()=>`person · strolling the waterfront promenade`}))];function H(){return V}return{group:a,update:ue,setProfile:le,getFollowables:H,graph:o,setRouter(e){P=e||N}}}function Ct(e,t){return[`N`,`NE`,`E`,`SE`,`S`,`SW`,`W`,`NW`][(Math.round(Math.atan2(e,t)/(Math.PI/4))%8+8)%8]}function wt({frames:e,fps:t=8,cols:n,rows:r=1}={}){let i=n||e||4,a=r||1,o=e||i*a,s=typeof window<`u`&&window.matchMedia?window.matchMedia(`(prefers-reduced-motion: reduce)`):null;function c(e,t){let n=t%i,r=Math.floor(t/i);e.offset.x=n/i,e.offset.y=1-(r+1)/a}function l(e){let t=e.clone();return t.needsUpdate=!0,t.repeat.set(1/i,1/a),c(t,0),t}function u(e,n,r=0){if(s&&s.matches)return c(e,0),0;let i=(Math.floor(n*t+r)%o+o)%o;return c(e,i),i}function d(e,t){let n=(Math.round(t)%o+o)%o;return c(e,n),n}return{frames:o,fps:t,cols:i,rows:a,makeInstanceTexture:l,step:u,setFrame:d}}function Tt(e){if(typeof document>`u`||!e||!e.image)return e;let t=e.image,n=t.width||t.naturalWidth,r=t.height||t.naturalHeight,i=document.createElement(`canvas`);i.width=n,i.height=r;let a=i.getContext(`2d`,{willReadFrequently:!0});a.drawImage(t,0,0,n,r);let o=a.getImageData(0,0,n,r),s=o.data;for(let e=0;e<s.length;e+=4){let t=s[e]*.299+s[e+1]*.587+s[e+2]*.114|0;s[e]=s[e+1]=s[e+2]=t}a.putImageData(o,0,0);let c=new R(i);return c.colorSpace=e.colorSpace||`srgb`,c}function Et({url:e,fallback:t,luminance:n=!1,onReady:r}={}){let i=n?Tt(t):t;return e&&typeof window<`u`&&new oe().load(e,e=>{e.colorSpace=me,r&&r(n?Tt(e):e)},void 0,()=>{}),i}var Dt=``+new URL(`gull_diffusion_sheet-BMlUTLhu.png`,import.meta.url).href;function Ot(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.4,`rgba(255,255,255,0.5)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new R(e);return r.colorSpace=me,r}function kt(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64*.62,0,64/2,64*.62,64*.5);n.addColorStop(0,`rgba(240,250,255,0.95)`),n.addColorStop(1,`rgba(240,250,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new R(e);return r.colorSpace=me,r}function At(){let e=document.createElement(`canvas`);e.width=256,e.height=64;let t=e.getContext(`2d`);t.strokeStyle=`#ffffff`,t.lineWidth=6,t.lineCap=`round`,t.lineJoin=`round`;let n=[14,24,36,24];for(let e=0;e<4;e++){let r=e*64,i=n[e];t.beginPath(),t.moveTo(r+8,40),t.quadraticCurveTo(r+24,i,r+32,36),t.quadraticCurveTo(r+40,i,r+56,40),t.stroke()}let r=new R(e);return r.colorSpace=me,r}function jt(e,t,n=18){let r=[];for(let i=0;i<n;i++){let a=i/n*Math.PI*2;r.push(new I(Math.cos(a)*e,t,Math.sin(a)*e))}return new ee(r,!0,`catmullrom`,.5)}function Mt(e,t,n){let r=e-t,i=[],a=(e,t)=>i.push(new I(e,n,t)),o=(e,n,r,i,o=4)=>{for(let s=1;s<=o;s++){let c=r+(i-r)*(s/o);a(e+Math.cos(c)*t,n+Math.sin(c)*t)}};for(let t=0;t<4;t++)a(e,-r+2*r*t/4);o(r,r,0,Math.PI/2);for(let t=0;t<4;t++)a(r-2*r*t/4,e);o(-r,r,Math.PI/2,Math.PI);for(let t=0;t<4;t++)a(-e,r-2*r*t/4);o(-r,-r,Math.PI,1.5*Math.PI);for(let t=0;t<4;t++)a(-r+2*r*t/4,-e);return o(r,-r,1.5*Math.PI,2*Math.PI),new ee(i,!0,`catmullrom`,.5)}function Nt({extent:e=8,waterSize:t=28,plinthTop:n=.3}={}){let r=new b;r.raycast=()=>{};let i=.06,a=(e,n,r)=>r.set(e/t+.5,-n/t+.5,0),o=[Mt(9.5,3,i),jt(12.7,i),new ee([new I(8.4,i,0),new I(11,i,-3.6),new I(13,i,0),new I(11,i,3.6)],!0,`catmullrom`,.5)],s=o.map(e=>e.getLength());function c({scale:e=1,hull:t=`#6b7785`,cabin:n=`#e7ecf2`}){let r=new b,i=new G(new B(.46*e,.2*e,1.1*e),q(new S({color:t,roughness:.6,metalness:.2,flatShading:!0}),{color:t}));i.position.y=.02;let a=new G(new B(.3*e,.22*e,.42*e),q(new S({color:n,roughness:.7,flatShading:!0}),{color:n}));return a.position.set(0,.18*e,.08*e),r.add(i,a),r.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!1),e.raycast=()=>{}}),r.userData.halfLen=.55*e,r}let u=[{laneIndex:0,dir:1,speed:.5,wake:.024,scale:1,hull:`#5a6675`,cabin:`#e7ecf2`},{laneIndex:1,dir:-1,speed:.42,wake:.022,scale:1,hull:`#7a5b46`,cabin:`#d9c3a6`},{laneIndex:0,dir:1,speed:.56,wake:.024,scale:.9,hull:`#456079`,cabin:`#cfe0ee`},{laneIndex:2,dir:1,speed:.34,wake:.03,scale:1.35,hull:`#39505f`,cabin:`#e2b85a`}];u.forEach((e,t)=>{e.mesh=c(e),e.u=t*.27%1,e.phase=t*1.7,e.isFerry=e.laneIndex===2,r.add(e.mesh)});let d=u.length,f=d*2,p=new j,m=new Float32Array(f*3).fill(-50),h=new Float32Array(f*3),g=new z(`#fff0c0`),_=new z(`#ff3528`);for(let e=0;e<d;e++)g.toArray(h,e*3),_.toArray(h,(d+e)*3);p.setAttribute(`position`,new U(m,3)),p.setAttribute(`color`,new U(h,3));let v=new T(p,new w({size:.6,sizeAttenuation:!0,map:Ot(),vertexColors:!0,transparent:!0,opacity:0,blending:2,depthWrite:!1}));v.frustumCulled=!1,v.raycast=()=>{},r.add(v);function y(e,t){let n=new G(new k(e,9,7),q(new S({color:t,roughness:.5,flatShading:!0}),{color:t}));return n.scale.set(.55,.5,1),n.castShadow=!1,n.receiveShadow=!1,n.raycast=()=>{},n.position.y=-5,n}let x=[{x:-9.5,z:6,size:.18,color:`#5b6f86`,period:11,arcH:.55,span:1.1,whale:!1},{x:7.5,z:-9.5,size:.16,color:`#4a6076`,period:14,arcH:.5,span:1,whale:!1},{x:-7,z:-8.5,size:.2,color:`#607089`,period:9,arcH:.6,span:1.2,whale:!1},{x:10.5,z:7,size:.62,color:`#3a4350`,period:38,arcH:.9,span:2.6,whale:!0}];x.forEach((e,t)=>{e.mesh=y(e.size,e.color),e.heading=Math.atan2(-e.x,-e.z),e.t=t/x.length*e.period,e.splashed=!1,r.add(e.mesh),e.whale&&(e.spout=new W(new M({map:kt(),transparent:!0,opacity:0,depthWrite:!1,fog:!0})),e.spout.scale.set(.6,1.1,1),e.spout.position.set(e.x,-5,e.z),r.add(e.spout))});let C=wt({frames:4,fps:7}),E=[`#ffffff`,`#cfd4da`,`#c8a06a`],D=[],O=Et({url:Dt,fallback:At(),luminance:!0,onReady:e=>{O=e;for(let t of D){let n=t.sp.material.map;t.sp.material.map=C.makeInstanceTexture(e),t.sp.material.needsUpdate=!0,n&&n.dispose()}typeof window<`u`&&(window.__gullSheet=`diffusion`)}});for(let e=0;e<4;e++){let t=new W(new M({map:C.makeInstanceTexture(O),color:new z(E[e%E.length]),transparent:!0,opacity:0,depthWrite:!1,fog:!0}));t.scale.setScalar(.5),D.push({sp:t,r:8.6+e*.5,y:1.1+e%2*.5,speed:(.18+e*.03)*(e%2?-1:1),phase:e*1.9}),r.add(t)}typeof window<`u`&&(window.__gullSheet=window.__gullSheet||`procedural`,window.__gullAnim={frames:C.frames,variants:E.length,fps:C.fps});let A=x.length,N=Array.from({length:d+A},()=>new I),P=e=>e.laneIndex,F=new I,te=new I,L=new I;function ne(e,t,n){let r=n?n.windowGlow:0,c=1-r;for(let n=0;n<d;n++){let c=u[n],l=o[c.laneIndex],f=s[c.laneIndex],p=c.isFerry?.45+.55*Math.min(1,Math.abs((c.u+.5)%1-.5)*3):1,h=c.u;c.u=(c.u+c.dir*e*c.speed*p/f+1)%1,(c.dir>0?c.u<h:c.u>h)&&(c.laneIndex=P(c)),l.getPointAt(c.u,F),l.getTangentAt(c.u,te);let g=te.x*c.dir,_=te.z*c.dir,v=Math.atan2(g,_),y=Math.sin(t*1.1+c.phase)*.025;c.mesh.position.set(F.x,i+y,F.z),c.mesh.rotation.set(Math.sin(t*.9+c.phase)*.04,v,0);let b=c.mesh.userData.halfLen;a(F.x-g*b,F.z-_*b,L),N[n].set(L.x,L.y,c.wake);let x=n*3,S=(d+n)*3;if(r>.05){let e=.18;m[x]=F.x+g*(b+.05),m[x+1]=e,m[x+2]=F.z+_*(b+.05),m[S]=F.x-g*(b+.02),m[S+1]=e,m[S+2]=F.z-_*(b+.02)}else m[x+1]=-50,m[S+1]=-50}re(),v.material.opacity=l.clamp(r*1.8,0,1);for(let t=0;t<A;t++){let n=x[t];n.t+=e;let r=d+t,o=n.whale?3.2:1.3;if(n.t>=n.period){let e=(n.t-n.period)/o;if(e>=1){n.t=0,n.splashed=!1,n.mesh.position.y=-5,n.spout&&(n.spout.material.opacity=0),N[r].set(0,0,0);continue}let t=Math.sin(Math.PI*e),s=(e-.5)*n.span,c=n.x+Math.sin(n.heading)*s,u=n.z+Math.cos(n.heading)*s;n.mesh.position.set(c,i-.1+t*n.arcH,u),n.mesh.rotation.set(Math.cos(Math.PI*e)*.9,n.heading,0);let d=e<.16||e>.84;if(a(c,u,L),N[r].set(L.x,L.y,d?n.whale?.07:.05:0),n.spout){let t=l.clamp((e-.15)*3,0,1)*(1-e);n.spout.position.set(c,.56+t*.6,u),n.spout.material.opacity=t*.9}}else n.mesh.position.y=-5,N[r].set(0,0,0),n.spout&&(n.spout.material.opacity=0)}for(let e=0;e<4;e++){let n=D[e],r=n.phase+t*n.speed*.25;n.sp.position.set(Math.cos(r)*n.r,n.y+Math.sin(t*1.4+n.phase)*.12,Math.sin(r)*n.r),n.sp.material.opacity=l.clamp(c*.9-.05,0,.85);let i=C.step(n.sp.material.map,t,n.phase);e===0&&typeof window<`u`&&(window.__gullFrame=i)}if(typeof window<`u`){let e=0;for(let t of x)t.mesh.position.y>i&&e++;window.__waterLife={boats:d,breaching:e,gulls:+D[0].sp.material.opacity.toFixed(2),lights:+v.material.opacity.toFixed(2)}}}function re(){p.attributes.position.needsUpdate=!0}function ie(){return N.length}let ae=[...u.map((e,t)=>({kind:`boat`,label:e.isFerry?`ferry`:`boat ${t+1}`,getWorldPos:t=>t.copy(e.mesh.position),info:()=>e.isFerry?`boat · harbor ferry → docks`:`boat · open-water lane ${e.laneIndex}`})),...D.map((e,t)=>({kind:`gull`,label:`gull ${t+1}`,getWorldPos:t=>t.copy(e.sp.position),active:()=>e.sp.material.opacity>.05,info:()=>`gull · circling the coast`})),...x.map((e,t)=>({kind:`fish`,label:e.whale?`whale`:`fish ${t+1}`,getWorldPos:t=>t.copy(e.mesh.position),active:()=>e.mesh.position.y>i-.3,info:()=>e.mesh.position.y>i?e.whale?`whale · breaching!`:`fish · breaching!`:`fish · below the surface`}))];function R(){return ae}return{group:r,update:ne,getFollowables:R,wakeDrops:N,get wakeCount(){return ie()},lanes:o,setRouter(e){P=e||(e=>e.laneIndex)}}}var Pt=[`empireState`,`chrysler`,`liberty`,`eiffel`,`arcDeTriomphe`,`sacreCoeur`,`tokyoTower`,`pagoda`,`neonBillboard`],Ft={empireState:1.25,chrysler:1.1,liberty:.55,eiffel:3.2,arcDeTriomphe:1.5,sacreCoeur:1.75,tokyoTower:1.35,pagoda:.5,neonBillboard:.9};function It(e){let t=()=>new S({flatShading:!0,roughness:.7,metalness:.1}),n=(n,r={})=>r.windows?Ze(t(),{color:n,id:e.id(),windowGlow:e.windowGlow,winColors:e.winColors,litFrac:e.litFrac}):q(t(),{color:n,glow:r.glow??null,glowDay:r.glowDay??0,glowNight:r.glowNight??1,windowGlow:r.glow?e.windowGlow:null});return{box:(e,t,r,i,a={})=>new G(new B(e,t,r),n(i,a)),cyl:(e,t,r,i,a={})=>new G(new te(e,t,r,a.seg||12),n(i,a)),cone:(e,t,r,i={})=>new G(new L(e,t,i.seg||8),n(r,i)),sphere:(e,t,r={})=>new G(new k(e,r.seg||12,r.seg2||8),n(t,r)),lathe:(e,t,r={})=>new G(new ie(e.map(e=>new N(e[0],e[1])),r.seg||4),n(t,r))}}var Z=(e,t,n,r)=>(e.position.set(t,n,r),e),Lt=[`#7FB0E0`,`#E07FB0`,`#7FE0A0`,`#E0C97F`,`#9FE07F`,`#7FE0E0`,`#FF8C42`,`#E0E07F`,`#C97FE0`,`#E07F7F`,`#7F9FE0`,`#E0483A`],Rt={empireState(e,t){let n=`#E8E0CF`;e.add(Z(t.box(.42,.18,.42,n,{windows:!0}),0,.09,0)),e.add(Z(t.box(.34,.16,.34,n,{windows:!0}),0,.26,0)),e.add(Z(t.box(.26,.14,.26,n,{windows:!0}),0,.41,0)),e.add(Z(t.box(.19,.34,.19,n,{windows:!0}),0,.65,0)),e.add(Z(t.box(.13,.06,.13,n,{windows:!0}),0,.85,0));let r=Lt[new Date().getMonth()];e.add(Z(t.cyl(.03,.045,.12,n,{seg:10,glow:r,glowNight:1.85}),0,.94,0)),e.add(Z(t.cone(.012,.07,n,{seg:8}),0,1.04,0))},chrysler(e,t){let n=`#C9CED4`;e.add(Z(t.box(.22,.55,.22,`#9AA7B4`,{windows:!0}),0,.275,0));let r=.55;for(let i=0;i<5;i++){let a=.14-i*.024,o=.07;e.add(Z(t.cyl(a*.7,a,o,n,{seg:8,glow:`#dfeaff`,glowNight:.5}),0,r+o/2,0)),r+=o}e.add(Z(t.cone(.018,.16,n,{seg:8}),0,r+.08,0))},liberty(e,t){let n=`#B9B4A6`,r=`#4FA890`;e.add(Z(t.box(.42,.16,.42,n),0,.08,0)),e.add(Z(t.box(.3,.2,.3,n),0,.26,0)),e.add(Z(t.cyl(.1,.15,.42,r,{seg:10}),0,.57,0)),e.add(Z(t.box(.11,.1,.11,r),0,.83,0));for(let n=0;n<7;n++){let i=(n/6-.5)*Math.PI*1.1;e.add(Z(t.cone(.012,.1,r,{seg:5}),Math.sin(i)*.1,.92,Math.cos(i)*.06-.02))}let i=Z(t.cyl(.025,.03,.34,r,{seg:8}),.14,.98,0);i.rotation.z=.35,e.add(i),e.add(Z(t.box(.06,.06,.06,r,{glow:`#ffd060`,glowDay:.6,glowNight:1.2}),.2,1.16,0)),e.add(Z(t.cone(.04,.09,`#ffcf66`,{seg:6,glow:`#ffd060`,glowDay:.7,glowNight:1.3}),.2,1.24,0))},eiffel(e,t){let n=`#6E5C4C`,r=[[.2,0],[.13,.16],[.085,.33],[.055,.5],[.035,.66],[.02,.85],[0,.92]];e.add(t.lathe(r,n,{seg:4}));let i=t.lathe(r,n,{seg:4});i.rotation.y=Math.PI/4,e.add(i),e.add(Z(t.box(.26,.025,.26,n),0,.33,0)),e.add(Z(t.box(.14,.02,.14,n),0,.66,0)),e.add(Z(t.cone(.01,.1,n,{seg:6}),0,.97,0))},arcDeTriomphe(e,t){let n=`#D9D0C1`,r=.58,i=.5,a=.34,o=new re;o.moveTo(-.58/2,0),o.lineTo(r/2,0),o.lineTo(r/2,i),o.lineTo(-.58/2,i),o.lineTo(-.58/2,0);let c=new s,l=.15,u=.22;c.moveTo(-.15,0),c.lineTo(-.15,u),c.absarc(0,u,l,Math.PI,0,!0),c.lineTo(l,0),c.lineTo(-.15,0),o.holes.push(c);let d=new ye(o,{depth:a,bevelEnabled:!1});d.translate(0,0,-.34/2),d.computeVertexNormals(),e.add(new G(d,q(new S({color:n,flatShading:!0}),{color:n}))),e.add(Z(t.box(r*1.06,.08,a*1.06,n),0,.54,0))},sacreCoeur(e,t){let n=`#F1EEE6`;e.add(Z(t.box(.5,.26,.4,n),0,.13,0));let r=(r,i,a,o)=>{e.add(Z(t.cyl(a*.9,a,i,n,{seg:12}),r,o,0));let s=Z(t.sphere(a,n,{seg:12}),r,o+i/2,0);s.scale.y=1.5,e.add(s)};r(0,.22,.15,.4),r(-.2,.1,.07,.33),r(.2,.1,.07,.33)},tokyoTower(e,t){let n=`#F25822`,r=`#EDEDED`,i=0;for(let a=0;a<9;a++){let o=a/9,s=(a+1)/9,c=.19*(1-o)+.03*o,l=.19*(1-s)+.03*s,u=.085,d=a%2?r:n;e.add(Z(t.cyl(l,c,u,d,{seg:4,glow:n,glowDay:0,glowNight:.7}),0,i+u/2,0)),i+=u}e.add(Z(t.box(.22,.02,.22,n,{glow:n,glowNight:.7}),0,.28,0)),e.add(Z(t.box(.12,.02,.12,r),0,.5,0)),e.add(Z(t.cone(.012,.16,r,{seg:6,glow:`#ff6a2a`,glowNight:.9}),0,i+.08,0))},pagoda(e,t){let n=0;for(let r=0;r<5;r++){let i=.42-r*.06,a=.11;e.add(Z(t.box(i,a,i,`#B23A2C`,{windows:r<4}),0,n+a/2,0)),e.add(Z(t.box(i*1.34,.03,i*1.34,`#7A3B2A`),0,n+a+.015,0)),n+=.16999999999999998}e.add(Z(t.cyl(.012,.012,.1,`#E0C040`,{seg:6}),0,n+.05,0)),e.add(Z(t.sphere(.03,`#E0C040`,{seg:8,glow:`#ffe680`,glowNight:.8}),0,n+.12,0))},neonBillboard(e,t){let n=`#20242C`;e.add(Z(t.box(.3,1,.3,n,{windows:!0}),0,.5,0));let r=[`#5AE8E0`,`#E85AA0`,`#E8E06A`],i=(n,r,i,a,o,s,c)=>{let l=Z(t.box(n,r,.02,i,{glow:i,glowDay:.6,glowNight:1.1}),a,o,s);l.rotation.y=c,e.add(l)};i(.22,.34,r[0],0,.75,.16,0),i(.16,.5,r[1],.16,.5,0,Math.PI/2),i(.2,.22,r[2],0,.34,-.16,0),e.add(Z(t.cone(.01,.14,n,{seg:6,glow:`#E85AA0`,glowDay:.4,glowNight:1}),0,1.08,0))}};function zt(e,t){let n=new b;return Rt[e](n,It(t)),n}var Bt=``+new URL(`building-skyscraper-d-CapD2Zqe.glb`,import.meta.url).href,Vt=``+new URL(`building-n-hdv8kKtN.glb`,import.meta.url).href,Ht=``+new URL(`building-g-CsTB1qH9.glb`,import.meta.url).href,Ut=``+new URL(`colormap-CK8fW2HB.png`,import.meta.url).href,Wt={skyscraper:{url:Bt,color:`#9cc1dd`,fill:.92},midrise:{url:Vt,color:`#c9a07a`,fill:.96},setback:{url:Ht,color:`#d9c7a0`,fill:.9}};function Gt({windowGlow:e}){let t=new o;t.setURLModifier(e=>e.includes(`colormap.png`)?Ut:e);let n=new se(t),r={},i=!1,a=Promise.all(Object.entries(Wt).map(async([e,t])=>{r[e]=(await n.loadAsync(t.url)).scene})).then(()=>{i=!0,window.__landmarksReady=!0}).catch(e=>console.error(`landmark models failed:`,e)),s=9e3;function c(t,n,i={}){let a,o;if(Pt.includes(t))a=zt(t,{windowGlow:e,winColors:i.winColors,litFrac:i.litFrac,id:()=>++s}),o=1;else{let e=r[t],n=Wt[t];if(!e||!n)return null;a=e.clone(!0),o=n.fill}a.updateMatrixWorld(!0);let c=new O().setFromObject(a).getSize(new I);a.scale.setScalar(n.h*o/c.y),a.updateMatrixWorld(!0);let l=new O().setFromObject(a),u=l.getCenter(new I);return a.position.x+=n.x-u.x,a.position.z+=n.z-u.z,a.position.y+=n.plinthTop-l.min.y,Pt.includes(t)?a.traverse(e=>{e.isMesh&&(e.castShadow=!1,e.raycast=()=>{})}):a.traverse(n=>{if(!n.isMesh)return;n.castShadow=!1,n.raycast=()=>{};let r=n=>Ze(n.clone(),{color:Wt[t].color,id:++s,windowGlow:e,winColors:i.winColors,litFrac:i.litFrac});n.material=Array.isArray(n.material)?n.material.map(r):r(n.material)}),a}return{make:c,whenReady:a,heightFactor:e=>Ft[e]??1,get ready(){return i}}}var Kt=[`clear`,`rain`,`snow`,`fog`];function qt({extent:e=7}={}){let r=new b;r.raycast=()=>{};let i=e+2,a=.25,o=(e,t)=>e+Math.random()*(t-e),s=new t(new H(.015,.5),new n({color:`#a9bdd6`,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),600);s.frustumCulled=!1,s.raycast=()=>{};let c=new Float32Array(600*3),l=new Float32Array(600);for(let e=0;e<600;e++)c[e*3]=o(-i,i),c[e*3+1]=o(a,11),c[e*3+2]=o(-i,i),l[e]=o(9,14);let u=new t(new H(.07,.07),new n({color:`#f3f7ff`,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),700);u.frustumCulled=!1,u.raycast=()=>{};let d=new Float32Array(700*3),f=new Float32Array(700),p=new Float32Array(700);for(let e=0;e<700;e++)d[e*3]=o(-i,i),d[e*3+1]=o(a,11),d[e*3+2]=o(-i,i),f[e]=o(0,6.28),p[e]=o(.6,1.2);r.add(s,u);let m=Array.from({length:8},()=>new I),h=0,g=`clear`,_=0,v=0,y=0,S=0,C=0,w=new x,T=(e,t,n,r)=>e+(t-e)*Math.min(1,n*r);function E(e){Kt.includes(e)&&(g=e)}function D(){g=Kt[(Kt.indexOf(g)+1)%Kt.length]}function O(e,t){let n=g===`rain`,r=g===`snow`,b=g===`fog`,x=g!==`clear`;_=T(_,+!!x,e,1.4),v=T(v,+!!x,e,1.2),y=T(y,+!!b,e,.9),C=T(C,x&&!b?1:0,e,1),S=T(S,+!!r,e,r?.22:.5);let E=n?_:0,D=Math.round(600*E);for(let t=0;t<600;t++){if(t>=D){w.position.set(0,-50,0),w.scale.setScalar(0),w.updateMatrix(),s.setMatrixAt(t,w.matrix);continue}c[t*3+1]-=l[t]*e,c[t*3]+=e*1.1,c[t*3+1]<a&&(c[t*3]=o(-i,i),c[t*3+1]=11,c[t*3+2]=o(-i,i)),w.position.set(c[t*3],c[t*3+1],c[t*3+2]),w.rotation.set(0,0,0),w.scale.set(1,1,1),w.updateMatrix(),s.setMatrixAt(t,w.matrix)}s.instanceMatrix.needsUpdate=!0,s.material.opacity=.55*E,h=n?Math.round(8*_):0;for(let e=0;e<h;e++)m[e].set(Math.random(),Math.random(),.05*_);let O=Math.round(700*(r?_:0));for(let n=0;n<700;n++){if(n>=O){w.position.set(0,-50,0),w.scale.setScalar(0),w.updateMatrix(),u.setMatrixAt(n,w.matrix);continue}d[n*3+1]-=p[n]*e;let r=Math.sin(t*1.5+f[n])*.5;d[n*3+1]<a&&(d[n*3]=o(-i,i),d[n*3+1]=11,d[n*3+2]=o(-i,i)),w.position.set(d[n*3]+r,d[n*3+1],d[n*3+2]),w.rotation.set(0,0,0),w.scale.setScalar(1),w.updateMatrix(),u.setMatrixAt(n,w.matrix)}u.instanceMatrix.needsUpdate=!0,u.material.opacity=.9*(r?_:0)}return{group:r,update:O,cycle:D,setKind:E,rainDrops:m,get kind(){return g},get intensity(){return _},get overcast(){return v},get fog(){return y},get snow(){return S},get cloud(){return C},get rainDropCount(){return h},poolCounts:{rain:600,snow:700}}}function Jt(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=(e,n,r)=>{let i=t.createRadialGradient(e,n,0,e,n,r);i.addColorStop(0,`rgba(255,255,255,0.95)`),i.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=i,t.beginPath(),t.arc(e,n,r,0,7),t.fill()};n(128*.42,128*.56,128*.26),n(128*.6,128*.5,128*.3),n(128*.5,128*.46,128*.22),n(128*.34,128*.54,128*.18),n(128*.7,128*.58,128*.18);let r=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5],i=t.getImageData(0,0,128,128),a=i.data;for(let e=0;e<128;e++)for(let t=0;t<128;t++){let n=(e*128+t)*4,i=a[n+3]/255,o=(r[e%4*4+t%4]+.5)/16-.5;a[n+3]=Math.max(0,Math.min(1,Math.floor(i*5+.5+o)/5))*255}t.putImageData(i,0,0);let o=new R(e);return o.colorSpace=me,o}function Yt({extent:e=8,count:t=16}={}){let n=new b;n.raycast=()=>{};let r=Jt(),i=e+6,a=(e,t)=>e+Math.random()*(t-e),o=[];for(let e=0;e<t;e++){let e=new M({map:r,transparent:!0,depthWrite:!1,opacity:0,fog:!0}),t=new W(e),s={sp:t,mat:e,wisp:Math.random(),x:a(-i,i),z:a(-i,i),hiY:a(4,6.8),loY:a(.6,2.2),w:a(3,5.6),h:a(1.7,3),speed:a(.25,.7),op:a(.6,1)};t.raycast=()=>{},o.push(s),n.add(t)}let s=new z,c=new z(`#ffffff`),l=new z(`#5b626e`);function u(e,t,n,r){let u=r?r.cloud:0,d=r?r.fog:0,f=Math.min(1,.4+.6*u+.5*d);s.copy(n.sky).lerp(c,.62),s.lerp(l,.6*u);for(let n=0;n<o.length;n++){let r=o[n],c=n/o.length<f;r.x+=r.speed*e*(.6+.8*u),r.x>i&&(r.x=-i,r.z=a(-i,i));let l=Math.min(Xt(r.x,-i,-i+3),1-Xt(r.x,i-3,i)),p=r.hiY*(1-d)+r.loY*d,m=1-.5*r.wisp,h=.72*Math.max(0,1-d-u)+1*u+.42*d,g=c?Math.max(0,h)*r.op*m*l:0;r.mat.opacity+=(g-r.mat.opacity)*Math.min(1,e*2.5),r.mat.color.copy(s);let _=r.w*(1+.6*d)*(1+.4*r.wisp),v=r.h*(1-.35*d);r.sp.scale.set(_,v,1),r.sp.position.set(r.x,p+Math.sin(t*.3+n)*.15,r.z)}}function d(e){r=e;for(let t of o)t.mat.map=e,t.mat.needsUpdate=!0}let f=o.map((e,t)=>({kind:`cloud`,label:`cloud ${t+1}`,getWorldPos:t=>t.copy(e.sp.position),active:()=>e.mat.opacity>.06,info:()=>`cloud · ${e.wisp>.6?`wispy`:`puffy`} · drifting east${e.sp.position.y<3?` (low mist)`:``}`}));function p(){return f}return{group:n,update:u,setTexture:d,getFollowables:p,get count(){return o.length}}}function Xt(e,t,n){let r=Math.max(0,Math.min(1,(e-t)/(n-t)));return r*r*(3-2*r)}var Zt={person:4.5,car:6,gull:6,fish:8,boat:9,cloud:16};function Qt({rig:e,getCamera:t,sources:n=[]}){let r=null,i=new I,a=new I,o=()=>{let e=[];for(let t of n)if(t&&t.getFollowables){let n=t.getFollowables();n&&e.push(...n)}return e},s=e=>!e.active||e.active();function c(t){return t?(r=t,e.setFollow(e=>t.getWorldPos(e),{frame:t.frame??Zt[t.kind]??8}),t):null}function l(){r=null,e.clearFollow()}function u(e,n,r=.14){let l=t(),u=null,d=r;for(let t of o()){if(!s(t)||(t.getWorldPos(i),a.copy(i).project(l),a.z>1||a.z<-1))continue;let r=Math.hypot(a.x-e,a.y-n);r<d&&(d=r,u=t)}return u?c(u):null}function d(e=1,t=null){let n=o().filter(e=>(!t||e.kind===t)&&s(e));if(t||(n=$t(n)),!n.length)return null;let i=r?n.indexOf(r):-1;return i=((i+e)%n.length+n.length)%n.length,c(n[i])}function f(){r&&r.active&&!r.active()&&l()}return{pickAt:u,cycle:d,follow:c,release:l,prune:f,get focus(){return r},get count(){return o().length},get readout(){return r?{kind:r.kind,label:r.label,info:r.info?r.info():``}:null}}}function $t(e){let t=new Map;for(let n of e)t.has(n.kind)||t.set(n.kind,[]),t.get(n.kind).push(n);let n=[...t.values()],r=[];for(let e=0,t=!0;t;e++){t=!1;for(let i of n)e<i.length&&(r.push(i[e]),t=!0)}return r}function en(e){let t=Qe(e>>>0),n=new Uint8Array(256);for(let e=0;e<256;e++)n[e]=e;for(let e=255;e>0;e--){let r=t()*(e+1)|0,i=n[e];n[e]=n[r],n[r]=i}let r=new Uint8Array(512);for(let e=0;e<512;e++)r[e]=n[e&255];let i=e=>e*e*e*(e*(e*6-15)+10),a=(e,t,n)=>e+(t-e)*n,o=(e,t,n)=>{let r=e&4?n:t,i=e&4?t:n;return(e&1?-r:r)+(e&2?-i:i)};return(e,t)=>{let n=Math.floor(e)&255,s=Math.floor(t)&255,c=e-Math.floor(e),l=t-Math.floor(t),u=i(c),d=i(l),f=r[r[n]+s],p=r[r[n]+s+1],m=r[r[n+1]+s],h=r[r[n+1]+s+1];return a(a(o(f,c,l),o(m,c-1,l),u),a(o(p,c,l-1),o(h,c-1,l-1),u),d)}}function tn(e,t,n,r,i,a){let o=.5,s=1,c=0,l=0;for(let u=0;u<r;u++)c+=o*e(t*s,n*s),l+=o,o*=a,s*=i;return c/l}function nn(e,t,n,r,i,a){let o=.5,s=1,c=0,l=0;for(let u=0;u<r;u++){let r=1-Math.abs(e(t*s,n*s));r*=r,c+=o*r,l+=o,o*=a,s*=i}return c/l}var rn=(e,t,n)=>(n=Math.max(0,Math.min(1,(n-e)/(t-e))),n*n*(3-2*n)),an=[{key:`ocean`,color:`#2a5b7a`},{key:`beach`,color:`#d8c89a`},{key:`grassland`,color:`#6f9a4e`},{key:`forest`,color:`#3f6b3a`},{key:`hills`,color:`#8a8a55`},{key:`rock`,color:`#7d7468`},{key:`snow`,color:`#eef2f6`}],on=Object.fromEntries(an.map((e,t)=>[e.key,t]));function sn(e,t,n){if(e<n-.015)return on.ocean;if(e<n+.02)return on.beach;let r=(e-n)/(1-n);return r>.82?on.snow:r>.6?on.rock:r>.34?t>.45?on.forest:on.hills:t>.55?on.forest:on.grassland}var cn={valley:{freq:2.3,mtnMask:.3,mtnGain:.55,sea:.3,relief:7.5,warp:.9},archipelago:{freq:3.4,mtnMask:.18,mtnGain:.4,sea:.5,relief:6,warp:1.3},mountains:{freq:2,mtnMask:.62,mtnGain:.85,sea:.26,relief:11,warp:.8},plains:{freq:1.8,mtnMask:.12,mtnGain:.3,sea:.28,relief:4.5,warp:.7}},ln=Object.keys(cn);function un({seed:e=1,size:t=160,preset:n=`valley`,params:r=null}={}){let i=r||cn[n]||cn.valley,a=en(e*2+1),o=en(e*5+9),s=en(e*7+13),c=en(e*3+5),l=new Float32Array(t*t),u=new Uint8Array(t*t),d=1/0,f=-1/0;for(let e=0;e<t;e++)for(let n=0;n<t;n++){let r=(n/t-.5)*i.freq,p=(e/t-.5)*i.freq,m=r+i.warp*tn(c,r+5.2,p+1.3,4,2,.5),h=p+i.warp*tn(c,r+9.7,p+4.1,4,2,.5),g=tn(a,m,h,6,2,.5)*.5+.5,_=rn(.45,.75,tn(o,r*.5,p*.5,3,2,.5)*.5+.5),v=nn(a,m*1.7+11,h*1.7+7,5,2,.5);g=g*(1-_*i.mtnMask)+v*(_*i.mtnMask*(.6+i.mtnGain));let y=n/t-.5,b=e/t-.5,x=Math.sqrt(y*y+b*b)*2;g-=rn(.62,1,x)*.55,g=Math.max(0,Math.min(1,g));let S=tn(s,r*.8+3,p*.8+8,4,2,.5)*.5+.5,C=e*t+n;l[C]=g,u[C]=sn(g,S,i.sea),g<d&&(d=g),g>f&&(f=g)}return{size:t,height:l,biome:u,sea:i.sea,relief:i.relief,minH:d,maxH:f,params:i,seed:e,preset:n}}function dn(e,{worldSize:t=26,baseY:n=0,chunks:r=4}={}){let{size:i,height:a,biome:o,sea:s,relief:c}=e,l=new b,u=new z,d=an.map(e=>new z(e.color)),f=t/(i-1),p=t/2,m=e=>e*f-p,h=e=>e*f-p,g=e=>n+(e-s)*c,_=Math.ceil((i-1)/r),v=new I,y=new I,x=new I;for(let e=0;e<r;e++)for(let t=0;t<r;t++){let n=t*_,r=e*_,s=Math.min(n+_,i-1),c=Math.min(r+_,i-1);if(s<=n||c<=r)continue;let f=(s-n)*(c-r)*6,p=new Float32Array(f*3),b=new Float32Array(f*3),C=new Float32Array(f*3),w=0,T=(e,t,n,r,i,a,o)=>{p[w*3]=e,p[w*3+1]=t,p[w*3+2]=n,b[w*3]=r,b[w*3+1]=i,b[w*3+2]=a,C[w*3]=o.r,C[w*3+1]=o.g,C[w*3+2]=o.b,w++},E=(e,t,n,r,i,a,o,s,c,l)=>{v.set(r-e,i-t,a-n),y.set(o-e,s-t,c-n),x.crossVectors(v,y).normalize(),T(e,t,n,x.x,x.y,x.z,l),T(r,i,a,x.x,x.y,x.z,l),T(o,s,c,x.x,x.y,x.z,l)};for(let e=r;e<c;e++)for(let t=n;t<s;t++){let n=a[e*i+t],r=a[e*i+t+1],s=a[(e+1)*i+t],c=a[(e+1)*i+t+1],l=m(t),f=m(t+1),p=h(e),_=h(e+1),v=g(n),y=g(r),b=g(s),x=g(c),S=d[o[e*i+t]],C=d[o[(e+1)*i+t+1]];E(l,v,p,l,b,_,f,y,p,u.copy(S)),E(f,y,p,l,b,_,f,x,_,u.copy(C))}let D=new j;D.setAttribute(`position`,new U(p,3)),D.setAttribute(`normal`,new U(b,3)),D.setAttribute(`color`,new U(C,3));let O=new G(D,new S({vertexColors:!0,roughness:.92,metalness:0,flatShading:!0}));O.castShadow=!0,O.receiveShadow=!0,O.raycast=()=>{},l.add(O)}return l.userData.dispose=()=>l.traverse(e=>{e.isMesh&&(e.geometry.dispose(),e.material.dispose())}),l}var fn={beach:[{type:`rock`,density:.05,maxSlope:1.4}],grassland:[{type:`tree`,density:.1,maxSlope:.7},{type:`tuft`,density:.3,maxSlope:.9}],forest:[{type:`tree`,density:.62,maxSlope:.8},{type:`rock`,density:.03,maxSlope:1.2}],hills:[{type:`tree`,density:.14,maxSlope:.7},{type:`rock`,density:.16,maxSlope:1.6}],rock:[{type:`rock`,density:.22,maxSlope:2}]};function pn({terrain:e,seed:t=1,worldSize:n=26,baseY:r=0,biomeKeys:i,density:a=1,max:o=9e3}={}){let{size:s,height:c,biome:l,sea:u,relief:d}=e,f=Qe((t^97155048)>>>0),p=n/(s-1),m=n/2,h=e=>r+(e-u)*d,g=(e,t)=>{let n=Math.max(1,Math.min(s-2,e)),r=Math.max(1,Math.min(s-2,t)),i=(c[r*s+n+1]-c[r*s+n-1])*d/(2*p),a=(c[(r+1)*s+n]-c[(r-1)*s+n])*d/(2*p);return Math.hypot(i,a)},_={tree:[],rock:[],tuft:[]};for(let e=1;e<s-1;e+=2)for(let t=1;t<s-1;t+=2){let n=e*s+t,r=c[n];if(r<u+.005)continue;let d=fn[i[l[n]]];if(!d)continue;let v=g(t,e);for(let n of d){let i=f();if(v>n.maxSlope||i>n.density*a)continue;let s=_[n.type];if(s.length>=o)continue;let c=(f()-.5)*p*2,l=(f()-.5)*p*2,u=t*p-m+c,d=e*p-m+l;s.push({x:u,y:h(r),z:d,s:.7+f()*.6,r:f()*Math.PI*2,t:.82+f()*.36})}}return{placements:_,counts:{tree:_.tree.length,rock:_.rock.length,tuft:_.tuft.length}}}function mn(e,t){let n=new z(t),r=e.attributes.position.count,i=new Float32Array(r*3);for(let e=0;e<r;e++)i[e*3]=n.r,i[e*3+1]=n.g,i[e*3+2]=n.b;return e.setAttribute(`color`,new U(i,3)),e}function hn(e){let t=0;for(let n of e)t+=n.attributes.position.count;let n=new Float32Array(t*3),r=new Float32Array(t*3),i=new Float32Array(t*3),a=0;for(let t of e)n.set(t.attributes.position.array,a*3),r.set(t.attributes.normal.array,a*3),i.set(t.attributes.color.array,a*3),a+=t.attributes.position.count;let o=new j;return o.setAttribute(`position`,new U(n,3)),o.setAttribute(`normal`,new U(r,3)),o.setAttribute(`color`,new U(i,3)),o}function gn(){return hn([mn(new te(.045,.06,.34,6).translate(0,.17,0).toNonIndexed(),`#5b3f28`),mn(new L(.3,.55,7).translate(0,.55,0).toNonIndexed(),`#3f7d3a`),mn(new L(.22,.42,7).translate(0,.85,0).toNonIndexed(),`#4f9046`)])}function _n(){let e=new h(.18,0).toNonIndexed(),t=e.attributes.position,n=Qe(3098);for(let e=0;e<t.count;e++){let r=.78+n()*.5;t.setXYZ(e,t.getX(e)*r,t.getY(e)*r*.8,t.getZ(e)*r)}return e.computeVertexNormals(),mn(e,`#7d7468`)}function vn(){return mn(new L(.06,.16,4).translate(0,.08,0).toNonIndexed(),`#6f9a4e`)}function yn(e){let n=new b;n.raycast=()=>{};let r={tree:gn(),rock:_n(),tuft:vn()},i={tree:0,rock:-.05,tuft:0},a=new v,o=new E,s=new I,c=new I,l=new I(0,1,0),u=new z;for(let d of[`tree`,`rock`,`tuft`]){let f=e[d];if(!f||!f.length)continue;let p=new S({vertexColors:!0,roughness:.9,metalness:0,flatShading:!0}),m=new t(r[d],p,f.length);m.castShadow=!0,m.receiveShadow=!1,m.frustumCulled=!0,m.raycast=()=>{},m.instanceColor=new ae(new Float32Array(f.length*3),3);for(let e=0;e<f.length;e++){let t=f[e];s.set(t.x,t.y+i[d],t.z),o.setFromAxisAngle(l,t.r),c.setScalar(t.s),a.compose(s,o,c),m.setMatrixAt(e,a),m.setColorAt(e,u.setScalar(t.t))}m.instanceMatrix.needsUpdate=!0,m.instanceColor&&(m.instanceColor.needsUpdate=!0),n.add(m)}return n.userData.dispose=()=>n.traverse(e=>{e.isInstancedMesh&&(e.geometry.dispose(),e.material.dispose())}),n}function bn({terrain:e,seed:t,worldSize:n,baseY:r,biomeKeys:i,density:a,max:o}){let{placements:s,counts:c}=pn({terrain:e,seed:t,worldSize:n,baseY:r,biomeKeys:i,density:a,max:o}),l=yn(s);return l.userData.counts=c,l}function xn({scale:e=90}={}){let t=new pe;t.scale.setScalar(e),t.frustumCulled=!1,t.raycast=()=>{},t.visible=!1;let n=t.material.uniforms;n.turbidity.value=2.2,n.rayleigh.value=1.3,n.mieCoefficient.value=.005,n.mieDirectionalG.value=.78;function r(e){n.sunPosition.value.copy(e)}function i(e){e&&(e.turbidity!=null&&(n.turbidity.value=e.turbidity),e.rayleigh!=null&&(n.rayleigh.value=e.rayleigh),e.mie!=null&&(n.mieCoefficient.value=e.mie),e.mieG!=null&&(n.mieDirectionalG.value=e.mieG))}return{mesh:t,setSun:r,setParams:i,get material(){return t.material}}}var Sn=`attribute float aSize;
attribute float aBright;
attribute float aPhase;

uniform float uTime;       
uniform float uTwinkle;    
uniform float uSizeScale;  

varying float vBright;

void main() {
  
  float tw = 1.0 - uTwinkle * 0.3 * (0.5 + 0.5 * sin(uTime * 2.2 + aPhase));
  vBright = aBright * tw;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = aSize * uSizeScale;
}`,Cn=`precision highp float;

uniform vec3  uColor;
uniform float uNight;
uniform float uMode;

varying float vBright;

void main() {
  vec2 p = gl_PointCoord - 0.5;
  float d = length(p);
  float a;
  if (uMode > 1.5)      a = 1.0;                       
  else if (uMode > 0.5) a = step(d, 0.45);             
  else                  a = smoothstep(0.5, 0.06, d);  
  float alpha = a * vBright * uNight;
  if (alpha < 0.01) discard;
  gl_FragColor = vec4(uColor, alpha);
}`,wn={realistic:0,charm:0,pixel:2,vector:1},Tn={realistic:1,charm:1,pixel:1.9,vector:1.2};function En({seed:e=1517,count:t=340,spreadX:n=21,yLo:r=3,yHi:i=18,zBase:a=7.2}={}){let o=new b;o.raycast=()=>{};let s=Qe(e>>>0),c=new Float32Array(t*3),l=new Float32Array(t),u=new Float32Array(t),d=new Float32Array(t),f=[];for(let e=0;e<t;e++){let t=(s()*2-1)*n,o=r+s()*(i-r),p=-a-s()*.7;c[e*3]=t,c[e*3+1]=o,c[e*3+2]=p;let m=.35+s()*.65;u[e]=m,l[e]=1.6+s()*2.8+(m>.85?2.2:0),d[e]=s()*Math.PI*2,m>.82&&f.push([t,o,p])}let h=new j;h.setAttribute(`position`,new U(c,3)),h.setAttribute(`aSize`,new U(l,1)),h.setAttribute(`aBright`,new U(u,1)),h.setAttribute(`aPhase`,new U(d,1));let g=new fe({vertexShader:Sn,fragmentShader:Cn,uniforms:{uTime:{value:0},uTwinkle:{value:1},uSizeScale:{value:1},uColor:{value:new z(`#eaf0ff`)},uNight:{value:0},uMode:{value:0}},transparent:!0,depthWrite:!1,blending:2,fog:!1,toneMapped:!1}),_=new T(h,g);_.raycast=()=>{},_.frustumCulled=!1,o.add(_);let v=[];if(f.length>6)for(let e=0;e<3;e++){let e=Math.floor(s()*f.length);for(let t=0;t<3;t++){let t=f[e],n=f[(e+1+Math.floor(s()*2))%f.length];v.push(t[0],t[1],t[2],n[0],n[1],n[2]),e=(e+1)%f.length}}let x=[[[0,2],[0,0]],[[0,0],[.7,0]],[[2.1,2],[1.4,2]],[[1.4,2],[1.4,0]],[[1.4,0],[2.1,0]],[[2.1,0],[2.1,1]],[[2.1,1],[1.7,1]],[[2.8,0],[2.8,2]],[[2.8,2],[3.5,2]],[[3.5,2],[3.5,1]],[[3.5,1],[2.8,1]],[[2.8,1],[3.6,0]]],S=-a-.4,C=.62;for(let[[e,t],[n,r]]of x)v.push(-3+e*C,12+t*C,S,-3+n*C,12+r*C,S);let w=new j;w.setAttribute(`position`,new y(v,3));let E=new m(w,new p({color:`#9fb6e8`,transparent:!0,opacity:0,depthWrite:!1,fog:!1,toneMapped:!1}));E.raycast=()=>{},E.frustumCulled=!1,o.add(E);let D=new W(new M({map:Dn(),transparent:!0,opacity:0,depthWrite:!1,blending:2,fog:!1,toneMapped:!1}));D.raycast=()=>{},D.scale.set(n*2.4,n*.95,1),D.position.set(2,12,-a-.7),D.material.rotation=-.5,D.renderOrder=-3,o.add(D);let O=-1;function k(e,t=`realistic`,n=0,r=!1){g.uniforms.uTime.value=n,g.uniforms.uTwinkle.value=+!r,g.uniforms.uNight.value=e;let i=wn[t]??0;i!==O&&(g.uniforms.uMode.value=i,O=i),g.uniforms.uSizeScale.value=Tn[t]??1,E.material.opacity=e*.5,D.material.opacity=e*.32,o.visible=e>.001}return{group:o,update:k}}function Dn(){let e=document.createElement(`canvas`);e.width=e.height=256;let t=e.getContext(`2d`),n=t.createRadialGradient(256/2,256/2,0,256/2,256/2,256/2);n.addColorStop(0,`rgba(150,170,230,0.5)`),n.addColorStop(.4,`rgba(120,130,200,0.22)`),n.addColorStop(1,`rgba(90,100,160,0)`),t.fillStyle=n,t.fillRect(0,0,256,256);let r=Qe(20145);for(let e=0;e<7;e++){let e=40+r()*176,n=70+r()*116,i=14+r()*30,a=t.createRadialGradient(e,n,0,e,n,i);a.addColorStop(0,`rgba(200,210,255,0.18)`),a.addColorStop(1,`rgba(200,210,255,0)`),t.fillStyle=a,t.beginPath(),t.arc(e,n,i,0,Math.PI*2),t.fill()}let i=new R(e);return i.colorSpace=me,i}var On=Math.PI*2;function kn(e){let t=document.createElement(`canvas`);t.width=t.height=128;let n=t.getContext(`2d`),r=n.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return r.addColorStop(0,`#ffffff`),r.addColorStop(.34,`#fffaf0`),r.addColorStop(.66,e),r.addColorStop(.86,e),r.addColorStop(1,`rgba(255,255,255,0)`),n.fillStyle=r,n.beginPath(),n.arc(128/2,128/2,128/2,0,On),n.fill(),In(t,!0)}function An(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);n.addColorStop(0,`#ffffff`),n.addColorStop(.4,`#eef3ff`),n.addColorStop(.82,`#c4cee6`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,128/2,0,On),t.fill(),t.globalAlpha=.14,t.fillStyle=`#8b97b4`;for(let[e,n,r]of[[54,50,9],[78,66,7],[60,82,5]])t.beginPath(),t.arc(e,n,r,0,On),t.fill();return In(e,!0)}function jn(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`);t.translate(128/2,128/2),t.fillStyle=`rgba(255,210,120,0.9)`;for(let e=0;e<12;e++)t.rotate(On/12),t.beginPath(),t.moveTo(0,-28),t.lineTo(7,-54),t.lineTo(-7,-54),t.closePath(),t.fill();let n=t.createRadialGradient(0,0,0,0,0,32);return n.addColorStop(0,`#ffffff`),n.addColorStop(.4,`#fff1c8`),n.addColorStop(.8,`#ffb24a`),n.addColorStop(1,`#ff8a2a`),t.fillStyle=n,t.beginPath(),t.arc(0,0,32,0,On),t.fill(),In(e,!0)}function Mn(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,46);n.addColorStop(0,`#ffffff`),n.addColorStop(.5,`#e6ecfb`),n.addColorStop(1,`#c2cce4`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,46,0,On),t.fill(),t.fillStyle=`#aab6d2`;for(let[e,n,r]of[[52,48,11],[80,62,8],[58,82,7],[40,66,5]])t.beginPath(),t.arc(e,n,r,0,On),t.fill();return In(e,!0)}function Nn(e,t,n){let r=document.createElement(`canvas`);r.width=r.height=144;let i=r.getContext(`2d`),a=17/2,o=18/2-.5;for(let r=0;r<18;r++)for(let s=0;s<18;s++){let c=Math.hypot(s-a,r-a);c>o||(i.fillStyle=c<o*.45?e:c<o*.78?t:n,i.fillRect(Math.round(s*8),Math.round(r*8),8,8))}return In(r,!1)}function Pn(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return n.addColorStop(0,`rgba(255,255,255,0.9)`),n.addColorStop(.38,`rgba(255,255,255,0.3)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,128/2,0,On),t.fill(),In(e,!0)}function Fn(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2),r=`20,30,48`;return n.addColorStop(0,`rgba(${r},0)`),n.addColorStop(.42,`rgba(${r},0)`),n.addColorStop(.6,`rgba(${r},0.6)`),n.addColorStop(1,`rgba(${r},0)`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,128/2,0,On),t.fill(),In(e,!0)}function In(e,t){let n=new R(e);return n.colorSpace=me,t||(n.magFilter=c,n.minFilter=c),n}var Ln=(e,t,n)=>{let r=Math.max(0,Math.min(1,(e-t)/(n-t)));return r*r*(3-2*r)};function Rn({skyW:e=15,skyY0:t=3.4,skyH:n=3.8,z:r=-7.8,biasX:i=4.5,sunSize:a=4.6,moonSize:o=4}={}){let s=new b;s.raycast=()=>{};let c=(e,t)=>{let n=new W(new M({map:e,transparent:!0,depthWrite:!1,fog:!1,toneMapped:!1,...t?{blending:2}:{}}));return n.raycast=()=>{},n},l={realistic:kn(`#ffcf8a`),charm:jn(),pixel:Nn(`#fff6e0`,`#ffc24a`,`#ff8a2a`)},u={realistic:An(),charm:Mn(),pixel:Nn(`#ffffff`,`#cdd6ee`,`#9aa6c6`)},d=Pn(),f=c(Fn(),!1),p=c(d,!0),m=c(l.realistic),h=c(d,!0),g=c(u.realistic);f.renderOrder=-2,p.renderOrder=-1,s.add(f,p,m,h,g);let _=En({});_.group.renderOrder=-4,s.add(_.group);let v=typeof window<`u`&&window.matchMedia?window.matchMedia(`(prefers-reduced-motion: reduce)`):null,y={realistic:{sunGlow:3,sunGlowOp:.7,moonGlow:2.6,moonGlowOp:.5,sizeMul:1,sunHaloOp:.85},charm:{sunGlow:2.2,sunGlowOp:.55,moonGlow:2.1,moonGlowOp:.42,sizeMul:1.08,sunHaloOp:.7},pixel:{sunGlow:1.7,sunGlowOp:.4,moonGlow:1.7,moonGlowOp:.32,sizeMul:1,sunHaloOp:.6}},x=`realistic`;function S(e){e===x||!y[e]||(x=e,m.material.map=l[e],m.material.needsUpdate=!0,g.material.map=u[e],g.material.needsUpdate=!0)}new z;let C=new z(`#fff3df`),w=new z(`#ffb060`),T=new z(`#ff6a2a`),E=new z(`#eef2ff`),D=new z(`#9fbcff`);function O(s,c,l,u,d=`realistic`){S(d);let b=y[x],O=l.sunArc,k=u?Math.min(1,(u.cloud||0)*.85+(u.fog||0)*.7):0,A=O.y,j=Ln(A,-.04,.1)*(1-.7*k),M=1-Ln(Math.abs(A),.02,.5);m.position.set(O.x*e+i,t+O.y*n,r),p.position.copy(m.position);let ee=a*b.sizeMul*(1+.55*M);m.scale.setScalar(ee),p.scale.setScalar(ee*b.sunGlow),m.material.color.copy(C),p.material.color.copy(w).lerp(T,M),m.material.opacity=j,p.material.opacity=j*b.sunGlowOp*(.7+.5*M),f.position.copy(m.position),f.scale.setScalar(ee*1.7),f.material.opacity=j*(1-M)*b.sunHaloOp;let N=Ln(-O.y,-.04,.1)*(1-.65*k);g.position.set(-O.x*e+i,t+-O.y*n,r),h.position.copy(g.position);let P=o*b.sizeMul;g.scale.setScalar(P),h.scale.setScalar(P*b.moonGlow),g.material.color.copy(E),h.material.color.copy(D),g.material.opacity=N,h.material.opacity=N*b.moonGlowOp;let F=Ln(-O.y,-.05,.18)*(1-.85*k);_.update(F,d,c,!!(v&&v.matches))}return{group:s,update:O}}var zn=`varying vec2 vUv;

void main() {
  
  
  
  vUv = uv;

  
  
  
  
  
  
  
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,Bn=`precision highp float;

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
}`,Vn=`varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0); 
}`,Hn=`precision highp float;

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
}`,Un=`precision highp float;

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
}`,Wn=`precision highp float;

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
}`,Gn=`const float CA_STRENGTH   = 0.0030;  
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
                               
uniform float     uAces;       
                               
uniform sampler2D uBloom;        
uniform float     uBloomStrength;

/* Cheap screen-space hash (the classic sin-dot trick): one pseudo-random number
   per pixel per frame. Not statistically perfect — perfectly fine for grain. */
float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

/* L66 ACES FILMIC TONEMAP (Narkowicz 2015 fit) — maps unbounded HDR → a filmic [0,1] display curve.
   Bright highlights (suns/speculars) roll off toward white CINEMATICALLY instead of clipping flat, and
   the toe lifts shadows. The instant "looks pro, not a demo" lever. C++: a fixed rational-polynomial
   kernel applied per pixel on the framebuffer. */
vec3 aces(vec3 x) {
  const float a = 2.51, b = 0.03, c = 2.43, d = 0.59, e = 0.14;
  return clamp((x * (a * x + b)) / (x * (c * x + d) + e), 0.0, 1.0);
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

  
  
  col += texture2D(uBloom, vUv).rgb * uBloomStrength;

  col *= uExposure;                              
  if (uAces > 0.5) col = aces(col);              

  gl_FragColor = vec4(col, 1.0);
}`,Kn=`const float DITHER = 0.55;   

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
}`,qn=`precision highp float;

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
}`,Jn=`precision highp float;

varying vec2 vUv;
uniform sampler2D uToon;   
uniform sampler2D uPixel;  
uniform float     uBlend;  

void main() {
  vec3 t = texture2D(uToon, vUv).rgb;
  vec3 p = texture2D(uPixel, vUv).rgb;
  gl_FragColor = vec4(mix(t, p, uBlend), 1.0);
}`,Yn=`varying vec2 vUv;
uniform sampler2D uScene;
uniform float     uThreshold;   

void main() {
  vec3 c = texture2D(uScene, vUv).rgb;
  float l = dot(c, vec3(0.2126, 0.7152, 0.0722));        
  float k = smoothstep(uThreshold, uThreshold + 0.22, l); 
  gl_FragColor = vec4(c * k, 1.0);
}`,Xn=`varying vec2 vUv;
uniform sampler2D uScene;
uniform vec2      uDir;     

void main() {
  
  float w0 = 0.227027, w1 = 0.1945946, w2 = 0.1216216, w3 = 0.054054, w4 = 0.016216;
  vec3 sum = texture2D(uScene, vUv).rgb * w0;
  sum += texture2D(uScene, vUv + uDir * 1.0).rgb * w1;
  sum += texture2D(uScene, vUv - uDir * 1.0).rgb * w1;
  sum += texture2D(uScene, vUv + uDir * 2.0).rgb * w2;
  sum += texture2D(uScene, vUv - uDir * 2.0).rgb * w2;
  sum += texture2D(uScene, vUv + uDir * 3.0).rgb * w3;
  sum += texture2D(uScene, vUv - uDir * 3.0).rgb * w3;
  sum += texture2D(uScene, vUv + uDir * 4.0).rgb * w4;
  sum += texture2D(uScene, vUv - uDir * 4.0).rgb * w4;
  gl_FragColor = vec4(sum, 1.0);
}`,Zn=`precision highp float;

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
}`,Qn={"1-bit":{gridWidth:110,dither:.6,palette:[`#15120c`,`#c8b486`]},gb:{gridWidth:130,dither:.4,palette:[`#0f380f`,`#306230`,`#8bac0f`,`#9bbc0f`]},"8-bit":{gridWidth:160,dither:.55,palette:[`#140c1c`,`#442434`,`#30346d`,`#4e4a4e`,`#854c30`,`#346524`,`#d04648`,`#757161`,`#597dce`,`#d27d2c`,`#8595a1`,`#6daa2c`,`#d2aa99`,`#6dc2ca`,`#dad45e`,`#deeed6`]},"16-bit":{gridWidth:280,dither:.3,palette:`#000000.#222034.#45283c.#663931.#8f563b.#df7126.#d9a066.#eec39a.#fbf236.#99e550.#6abe30.#37946e.#4b692f.#524b24.#323c39.#3f3f74.#306082.#5b6ee1.#639bff.#5fcde4.#cbdbfc.#ffffff.#9badb7.#847e87.#696a6a.#595652.#76428a.#ac3232.#d95763.#d77bba.#8f974a.#8a6f30`.split(`.`)},modern:{gridWidth:460,dither:.6,palette:null}},$n=[`gb`,`8-bit`,`16-bit`,`modern`];function er(e){let t=Math.max(e.length,1),n=new Float32Array(t*4);e.forEach((e,t)=>{let r=new z(e);n[t*4+0]=r.r,n[t*4+1]=r.g,n[t*4+2]=r.b,n[t*4+3]=1});let i=new D(n,t,1,_,r);return i.minFilter=c,i.magFilter=c,i.needsUpdate=!0,i}var tr=220,nr={night:[`#0A0C16`,`#1C2236`,`#3A3A52`,`#5A5A78`,`#8A92B0`],dawn:[`#1A1008`,`#43281A`,`#7A4A30`,`#B07A4E`,`#E8A86A`],noon:[`#16100A`,`#3A2F1E`,`#6B563A`,`#937B54`,`#B89968`],dusk:[`#140A0A`,`#3E1E1A`,`#7A3828`,`#B85A36`,`#F0884A`]},rr={night:[`#020604`,`#06180E`,`#10401E`,`#1E9040`,`#7FE0FF`],dawn:[`#060603`,`#1A2410`,`#3A6B22`,`#6CC040`,`#FFC060`],noon:[`#050805`,`#0E2912`,`#1E6B2F`,`#3CF06A`,`#FFB000`],dusk:[`#080402`,`#241408`,`#6B4A12`,`#E0A030`,`#FF7030`]};function ir({demo:e=!1,citySeed:t=0,profileIndex:r=0}={}){let i=new de({antialias:!0,preserveDrawingBuffer:!0});i.shadowMap.enabled=!0,i.shadowMap.type=1,i.shadowMap.autoUpdate=!1,i.shadowMap.needsUpdate=!0;let o=!!(window.matchMedia&&window.matchMedia(`(pointer: coarse)`).matches);i.setPixelRatio(Math.min(window.devicePixelRatio,o?1.5:2)),i.setSize(window.innerWidth,window.innerHeight),i.setClearColor(920327,1),document.body.appendChild(i.domElement);let s=i.getDrawingBufferSize(new N),u=new ce;u.fog=new ve(10465470,0);let d=new z(`#aeb6c0`),p=.062,m=new z(`#74508f`),h=new z,v=Ie({aspect:window.innerWidth/window.innerHeight}),y=_t({t:.5}),b={type:a,format:_,minFilter:c,magFilter:c,wrapS:ue,wrapT:ue,depthBuffer:!1,stencilBuffer:!1},x=[new V(256,256,b),new V(256,256,b),new V(256,256,b)];for(let e of x)i.setRenderTarget(e),i.clear();i.setRenderTarget(null);let S=new ce,w=new C(-1,1,1,-1,0,1),T=new fe({vertexShader:Vn,fragmentShader:Hn,uniforms:{uCurr:{value:null},uPrev:{value:null},uTexel:{value:new N(1/256,1/256)},uMouse:{value:new N(-1,-1)},uMouseStrength:{value:0},uC2:{value:.25},uDamping:{value:.992},uRainCount:{value:0},uRainDrops:{value:Array.from({length:8},()=>new I)},uWakeCount:{value:0},uWakeDrops:{value:Array.from({length:8},()=>new I)}}});S.add(new G(new H(2,2),T));let E=new V(s.x,s.y,{minFilter:g,magFilter:g,depthBuffer:!0,stencilBuffer:!1});function D(e){let t=document.createElement(`canvas`);t.width=t.height=1024;let n=t.getContext(`2d`);n.fillStyle=e?`#0c1418`:`#15110b`,n.fillRect(0,0,1024,1024),n.strokeStyle=e?`rgba(120,150,170,0.22)`:`rgba(184,153,104,0.30)`,n.lineWidth=2;for(let e=0;e<=1024;e+=64)n.beginPath(),n.moveTo(e,0),n.lineTo(e,1024),n.stroke(),n.beginPath(),n.moveTo(0,e),n.lineTo(1024,e),n.stroke();e||(n.fillStyle=`#B89968`,n.font=`bold 360px Georgia, serif`,n.textAlign=`center`,n.textBaseline=`middle`,n.fillText(`LGR`,512,470),n.font=`600 64px ui-monospace, monospace`,n.fillText(`WEB · STUDIO`,512,720));let r=new R(t);return r.colorSpace=me,r}let O=new G(new H(28,28),new n({map:D(e)}));O.rotation.x=-Math.PI/2,O.position.y=-.35,u.add(O);let k=new G(new H(40,24),new fe({depthWrite:!1,vertexShader:zn,fragmentShader:Bn,uniforms:{uTime:{value:0},uInk:{value:y.horizon},uGold:{value:y.sky},uFogColor:{value:h},uFogAmt:{value:0},uFogCharm:Ue}}));k.position.set(0,3,-8),u.add(k);let A=new fe({vertexShader:Un,fragmentShader:Wn,uniforms:{uHeight:{value:null},uScene:{value:E.texture},uTexel:{value:new N(1/256,1/256)},uResolution:{value:new N(s.x,s.y)},uDisplace:{value:.42},uNormalStrength:{value:22},uRefractStrength:{value:.06},uChromaScale:{value:1},uNormalMatrix:{value:new f},uLightDir:{value:y.sunDir},uInk:{value:new z(`#2A2218`)},uGold:{value:new z(`#B89968`)},uVector:Le,uVecWater:{value:new z(`#1fb8d8`)},uVecTint:{value:Re}}}),j=new G(new H(28,28,255,255),A);j.rotation.x=-Math.PI/2,j.updateMatrixWorld(!0),A.uniforms.uNormalMatrix.value.getNormalMatrix(j.matrixWorld),u.add(j);let M={value:0},ee=Gt({windowGlow:M}),P=lt({seed:t,profileIndex:r,landmarkFactory:ee,windowGlow:M});u.add(P.group);let F=St({plinthTop:.3,extent:P.extent,profile:P.state.profile});u.add(F.group);let te=Nt({extent:P.extent,waterSize:28,plinthTop:.3});u.add(te.group),T.uniforms.uWakeDrops.value=te.wakeDrops;let L=qt({extent:P.extent});u.add(L.group),T.uniforms.uRainDrops.value=L.rainDrops;let ne=Yt({extent:P.extent});u.add(ne.group);let re=Qt({rig:v,getCamera:()=>v.camera,sources:[F,te,ne]}),ie=Rn();u.add(ie.group);let ae=xn({scale:90});u.add(ae.mesh);let oe=!1;function se(e){let t=e&&y.sunArc.y>-.04;t!==oe&&(oe=t,ae.mesh.visible=t,k.visible=!t)}let B=null,le=null,U=!1,W=1234,pe=`valley`,he=an.map(e=>e.key),ge=()=>[P.group,F.group,te.group],ye=()=>[B,le].filter(Boolean);function be(){for(let e of ye())u.remove(e),e.userData.dispose?.();let e=un({seed:W,size:160,preset:pe});B=dn(e,{worldSize:26,baseY:0,chunks:6}),le=bn({terrain:e,seed:W,worldSize:26,baseY:0,biomeKeys:he});for(let e of ye())e.visible=U,u.add(e);typeof window<`u`&&(window.__world={seed:W,preset:pe,active:U,chunks:B.children.length,scatter:le.userData.counts})}let xe=e=>{for(let t of ye())t.visible=e},Se={enter(){B||be(),U=!0,xe(!0);for(let e of ge())e.visible=!1;window.__world&&(window.__world.active=!0)},exit(){U=!1,xe(!1);for(let e of ge())e.visible=!0;window.__world&&(window.__world.active=!1)},reroll(){return W=Math.random()*1e9|0,be(),Se.enter(),W},setPreset(e){return ln.includes(e)&&(pe=e,be(),Se.enter()),pe},get active(){return U},get seed(){return W},get preset(){return pe},get presets(){return ln}};P.group.remove(P.key),u.add(P.key),P.key.castShadow=!0,P.key.shadow.mapSize.set(2048,2048),P.key.shadow.bias=-18e-5,P.key.shadow.normalBias=.028,u.add(P.key.target);function Ce(){let e=P.key.shadow.camera,t=P.extent+4.5;e.left=-t,e.right=t,e.top=t,e.bottom=-t,e.near=1,e.far=48,e.updateProjectionMatrix(),i.shadowMap.needsUpdate=!0}Ce();let we=new _e(s.x,s.y),Te=new V(s.x,s.y,{minFilter:g,magFilter:g,depthBuffer:!0,stencilBuffer:!1,depthTexture:we}),Ee=new V(s.x,s.y,{minFilter:g,magFilter:g,depthBuffer:!1,stencilBuffer:!1}),De=new V(s.x,s.y,{minFilter:g,magFilter:g,depthBuffer:!1,stencilBuffer:!1}),Oe=new V(s.x,s.y,{minFilter:g,magFilter:g,depthBuffer:!1,stencilBuffer:!1}),ke=Math.max(1,Math.floor(s.x/2)),Ae=Math.max(1,Math.floor(s.y/2)),je=new V(ke,Ae,{minFilter:g,magFilter:g,depthBuffer:!1,stencilBuffer:!1}),Me=new V(ke,Ae,{minFilter:g,magFilter:g,depthBuffer:!1,stencilBuffer:!1}),Ne=new ce,Pe=new C(-1,1,1,-1,0,1),Fe=new G(new H(2,2));Ne.add(Fe);let K=new fe({vertexShader:Vn,fragmentShader:Gn,uniforms:{uScene:{value:Te.texture},uTime:{value:0},uResolution:{value:new N(s.x,s.y)},uGrain:{value:1},uChroma:{value:1},uExposure:{value:1},uAces:{value:0},uBloom:{value:je.texture},uBloomStrength:{value:0}}}),Ge=new fe({vertexShader:Vn,fragmentShader:Yn,uniforms:{uScene:{value:Te.texture},uThreshold:{value:.78}}}),Ke=new fe({vertexShader:Vn,fragmentShader:Xn,uniforms:{uScene:{value:je.texture},uDir:{value:new N}}});function qe(e){Ge.uniforms.uScene.value=e.texture,J(Ge,je),Ke.uniforms.uScene.value=je.texture,Ke.uniforms.uDir.value.set(1.6/ke,0),J(Ke,Me),Ke.uniforms.uScene.value=Me.texture,Ke.uniforms.uDir.value.set(0,1.6/Ae),J(Ke,je),K.uniforms.uBloom.value=je.texture;let t=1-l.clamp(y.sunArc.y*2.2,0,1);K.uniforms.uBloomStrength.value=.85*(.7+.6*t)}let Je=e=>{let t=e.map(e=>new z(e));for(;t.length<8;)t.push(new z(0,0,0));return t},Ye=[`night`,`dawn`,`noon`,`dusk`],Xe={inkgold:Ye.map(e=>Je(nr[e])),terminal:Ye.map(e=>Je(rr[e]))},Ze=new fe({vertexShader:Vn,fragmentShader:Kn,uniforms:{uScene:{value:Ee.texture},uResolution:{value:new N(s.x,s.y)},uPixelSize:{value:tr},uPalette:{value:Xe.inkgold[2]},uPaletteB:{value:Xe.inkgold[2]},uPaletteBlend:{value:0},uPaletteSize:{value:5}}}),q=new fe({vertexShader:Vn,fragmentShader:Zn,uniforms:{uScene:{value:Ee.texture},uResolution:{value:new N(s.x,s.y)},uGridWidth:{value:160},uDither:{value:.55},uPalette:{value:er(Qn[`8-bit`].palette)},uPaletteSize:{value:1},uUsePalette:{value:1}}}),Qe={};for(let e of $n)Qe[e]=Qn[e].palette?er(Qn[e].palette):null;let $e=new fe({vertexShader:Vn,fragmentShader:qn,uniforms:{uScene:{value:Ee.texture},uDepth:{value:we},uResolution:{value:new N(s.x,s.y)},uBands:{value:4},uToonGain:{value:1.7},uToonGamma:{value:.6},uToonFloor:{value:y.toonFloor},uOutline:{value:y.outline},uNear:{value:.1},uFar:{value:100},uIsPerspective:{value:1}}}),et=new fe({vertexShader:Vn,fragmentShader:Jn,uniforms:{uToon:{value:De.texture},uPixel:{value:Oe.texture},uBlend:{value:0}}});function J(e,t){Fe.material=e,i.setRenderTarget(t),i.render(Ne,Pe)}function tt(){v.setViewport(window.innerWidth,window.innerHeight),i.setSize(window.innerWidth,window.innerHeight);let e=i.getDrawingBufferSize(new N);return E.setSize(e.x,e.y),Te.setSize(e.x,e.y),Ee.setSize(e.x,e.y),De.setSize(e.x,e.y),Oe.setSize(e.x,e.y),ke=Math.max(1,e.x>>1),Ae=Math.max(1,e.y>>1),je.setSize(ke,Ae),Me.setSize(ke,Ae),A.uniforms.uResolution.value.set(e.x,e.y),K.uniforms.uResolution.value.set(e.x,e.y),Ze.uniforms.uResolution.value.set(e.x,e.y),q.uniforms.uResolution.value.set(e.x,e.y),$e.uniforms.uResolution.value.set(e.x,e.y),e}let Y=3,X=!1,nt=!1,rt=`native`,it=.3,at=.46,ot=[`native`,...$n],st={"16-bit":`16-bit`,"8-bit":`8-bit`,gb:`Game Boy`,modern:`Modern`,native:`Pixel`,"1-bit":`1-bit`};typeof window<`u`&&(window.__mode=Y,window.__vector=X,window.__era=rt);let ct=0,ut=performance.now(),dt=typeof window<`u`&&new URLSearchParams(window.location.search).has(`perf`);typeof window<`u`&&(window.__perf=dt),dt&&(i.info.autoReset=!1);let ft=null;typeof window<`u`&&(window.__loaded=!1);let pt=0,mt=new I(1,1,1),ht=!1;function gt(e){let t=nt?Xe.terminal:Xe.inkgold,n=e%1*4,r=Math.floor(n)%4;Ze.uniforms.uPalette.value=t[r],Ze.uniforms.uPaletteB.value=t[(r+1)%4],Ze.uniforms.uPaletteBlend.value=n-Math.floor(n)}function vt(e){let t=Qn[e];t&&(q.uniforms.uGridWidth.value=t.gridWidth,q.uniforms.uDither.value=t.dither,q.uniforms.uUsePalette.value=+!!t.palette,t.palette&&(q.uniforms.uPalette.value=Qe[e],q.uniforms.uPaletteSize.value=t.palette.length))}function yt(){rt!==`native`&&vt(rt)}let bt=()=>rt===`native`?Ze:q;function xt(e,t){se(!0),j.visible=!1,i.setRenderTarget(E),i.render(u,e),j.visible=!0,i.setRenderTarget(t),i.render(u,e)}function Ct(e,t){se((Y===1||Y===2)&&!X),K.uniforms.uBloomStrength.value=0,j.visible=!1,i.setRenderTarget(E),i.render(u,v.camera),j.visible=!0;let n=!X&&(Y===1||Y===2);if(Y===1&&!n)i.setRenderTarget(t),i.render(u,v.camera);else if(Y===1)i.setRenderTarget(Te),i.render(u,v.camera),qe(Te),K.uniforms.uAces.value=1,K.uniforms.uGrain.value=0,K.uniforms.uChroma.value=0,J(K,t);else if(i.setRenderTarget(Te),i.render(u,v.camera),Y===2)n&&qe(Te),K.uniforms.uAces.value=+!!n,K.uniforms.uGrain.value=1,K.uniforms.uChroma.value=1,J(K,t);else{K.uniforms.uAces.value=0,K.uniforms.uGrain.value=0,K.uniforms.uChroma.value=0,J(K,Ee);let n=v.camera;$e.uniforms.uNear.value=n.near,$e.uniforms.uFar.value=n.far,$e.uniforms.uIsPerspective.value=+!!n.isPerspectiveCamera;let r=e.era?(vt(e.era),q):bt();e.kind===`pixel`?(J(r,t),window.__style=`pixel`):e.kind===`toon`?(J($e,t),window.__style=`toon`):(J($e,De),J(r,Oe),et.uniforms.uBlend.value=e.blend,J(et,t),window.__style=`blend`)}}function wt(){let e=Tt(),t=e.kind===`toon`?1:e.kind===`blend`?1-e.blend:0;return A.uniforms.uChromaScale.value=l.lerp(1,.5,t),e}function Tt(){if(Y===1||Y===2)return{kind:`none`};if(Y===7)return{kind:`pixel`};if(Y===8)return{kind:`toon`};let e=v.styleT;return window.__styleT=e,e<=it?{kind:`toon`}:e>=at?{kind:`pixel`,era:e<.62?`16-bit`:e<.8?`8-bit`:`gb`}:{kind:`blend`,blend:l.smoothstep(e,it,at),era:`16-bit`}}function Et(e){return Y===1||Y===2?``:X&&Y!==7&&Y!==8?`Vector`:e.kind===`toon`?`Toon`:e.kind===`pixel`?st[e.era||rt]||`Pixel`:e.kind===`blend`?`Toon → `+(st[e.era]||`Pixel`):``}function Dt(e,t,{shadowsOn:n=!0,seasonTarget:r=0}={}){if(dt){let e=i.info;ft={calls:e.render.calls,tris:e.render.triangles,programs:e.programs?e.programs.length:0,geo:e.memory.geometries,tex:e.memory.textures},e.reset()}k.material.uniforms.uTime.value=t,K.uniforms.uTime.value=t,y.update(e),P.key.position.copy(y.sunDir).multiplyScalar(24),P.key.color.copy(y.sunColor),P.key.intensity=y.sunIntensity,P.fill.color.copy(y.hemiSky),P.fill.groundColor.copy(y.hemiGround),M.value=y.windowGlow,ae.setSun(y.sunArc),ae.setParams(y.skyParams);let a=L.overcast;P.key.intensity*=1-.5*a,P.key.color.lerp(d,.45*a),P.fill.intensity=1+.7*a;let o=l.smoothstep(y.sunDir.y,.06,.34),s=l.lerp(.28,1,1-y.windowGlow),c=n?o*s:0;P.key.shadow.intensity=.72*c,ze.value=.52*c,(n&&!ht||mt.distanceToSquared(y.sunDir)>2e-5)&&(i.shadowMap.needsUpdate=!0,mt.copy(y.sunDir)),ht=n;let f=1-y.windowGlow;Re.setRGB(l.lerp(.46,1,f),l.lerp(.52,1,f),l.lerp(.74,1,f)),K.uniforms.uExposure.value=y.exposure,$e.uniforms.uToonGain.value=y.toonGain,i.setClearColor(y.horizon,1),gt(y.t),window.__t=y.t,F.update(e,t,y),P.update(t),te.update(e,t,y),T.uniforms.uWakeCount.value=te.wakeCount,L.update(e,t),T.uniforms.uRainCount.value=L.rainDropCount;let g=L.fog*(1-f);u.fog.density=L.fog*p,h.copy(y.horizon).lerp(m,.85*g),u.fog.color.copy(h),i.setClearColor(h,1),Ue.value=L.fog,k.material.uniforms.uFogAmt.value=.7*L.fog,Be.value=L.snow,Ve.value=L.cloud*.55,He.x+=e*.018,He.y+=e*.009,We.value+=(r-We.value)*Math.min(1,e*1.5),ne.update(e,t,y,L);let _=Tt(),v=_.kind===`pixel`||_.kind===`blend`?`pixel`:X||_.kind===`toon`?`charm`:`realistic`;ie.update(e,t,y,L,v),ct++;let b=performance.now();b-ut>=1e3&&(window.__fps=ct,dt&&ft&&(console.log(`[perf] ${ct} fps · ~${(1e3/Math.max(1,ct)).toFixed(2)} ms · calls ${ft.calls} · tris ${ft.tris} · programs ${ft.programs} · geo ${ft.geo} · tex ${ft.tex}`),window.__perfInfo={fps:ct,...ft}),ct=0,ut=b);let[C,E,D]=x;if(T.uniforms.uPrev.value=C.texture,T.uniforms.uCurr.value=E.texture,i.setRenderTarget(D),i.render(S,w),x=[E,D,C],A.uniforms.uHeight.value=x[1].texture,pt<2&&typeof document<`u`&&++pt===2){let e=document.getElementById(`lgr-loader`);e&&e.classList.add(`gone`),window.__loaded=!0}}function Ot(e){Y=e,window.__mode=Y}function kt(){return X=!X,Le.value=+!!X,window.__vector=X,X}function At(e){return X=!!e,Le.value=+!!X,window.__vector=X,X}function jt(){return rt=ot[(ot.indexOf(rt)+1)%ot.length],window.__era=rt,yt(),rt}function Mt(){return nt=!nt,nt}return{updateWorld:Dt,decideStyle:wt,renderCityPipeline:Ct,renderCityBeautyTo:xt,styleHintName:Et,setPostMode:Ot,toggleVector:kt,setVector:At,cycleEra:jt,togglePalette:Mt,get mode(){return Y},get vector(){return X},get sceneEra(){return rt},renderer:i,drawBuffer:s,scene:u,rig:v,sunRig:y,SIM:256,targets:x,simScene:S,simCamera:w,simMaterial:T,grabRT:E,card:O,backdrop:k,WATER_SIZE:28,water:j,waterMaterial:A,windowGlow:M,landmarkFactory:ee,city:P,cityLife:F,waterLife:te,weatherRig:L,clouds:ne,inspector:re,world:Se,fitShadowFrustum:Ce,SHADOW_DIST:24,sceneDepth:we,sceneRT:Te,filmicRT:Ee,toonRT:De,pixelRT:Oe,postScene:Ne,postCamera:Pe,postQuad:Fe,filmicMaterial:K,pixelMaterial:Ze,pixelkitMaterial:q,toonMaterial:$e,mixMaterial:et,PALCACHE:Xe,ERA_TEX:Qe,runPass:J,OVERCAST_GREY:d,FOG_DENSITY:p,FOG_NIGHT_TINT:m,_fogColor:h,resize:tt}}var ar=`lgr_hints_`,or=!1;function sr(){if(or||typeof document>`u`)return;or=!0;let e=document.createElement(`style`);e.textContent=`
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
  }`,document.head.appendChild(e)}function cr({key:e,title:t=`Tips`,tips:n=[],force:r=!1}={}){let i={key:e,shown:!1,dismissed:!1,seen:!1};if(typeof window<`u`&&(window.__hints=i),typeof document>`u`||!e)return{dismiss(){},el:null};let a=ar+e,o=!1;try{o=localStorage.getItem(a)===`1`}catch{}if(o&&!r)return i.seen=!0,{dismiss(){},el:null};sr();let s=!!(window.matchMedia&&window.matchMedia(`(prefers-reduced-motion: reduce)`).matches),c=document.createElement(`div`);c.className=`lgr-hints`,c.innerHTML=`<div class="lgr-hints-card">
    <div class="lgr-hints-h">${t}</div>
    <ul>${n.map(e=>`<li>${e}</li>`).join(``)}</ul>
    <button class="lgr-hints-ok">Got it</button>
    <button class="lgr-hints-x" title="Dismiss (Esc)" aria-label="Dismiss">✕</button>
  </div>`,document.body.appendChild(c),i.shown=!0,s?c.classList.add(`on`):requestAnimationFrame(()=>c.classList.add(`on`));let l=!1;function u(e=!0){if(!l){if(l=!0,e)try{localStorage.setItem(a,`1`)}catch{}i.dismissed=!0,window.removeEventListener(`keydown`,d),c.classList.remove(`on`),setTimeout(()=>c.remove(),s?0:300)}}function d(e){e.key===`Escape`&&u(!0)}return window.addEventListener(`keydown`,d),c.querySelector(`.lgr-hints-ok`).addEventListener(`click`,()=>{navigator.vibrate?.(10),u(!0)}),c.querySelector(`.lgr-hints-x`).addEventListener(`click`,()=>{navigator.vibrate?.(10),u(!0)}),{dismiss:u,el:c}}var lr=null;function ur(){if(lr)return lr;let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return n.addColorStop(0,`rgba(0,0,0,0.60)`),n.addColorStop(.55,`rgba(0,0,0,0.32)`),n.addColorStop(1,`rgba(0,0,0,0.0)`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,128/2,0,Math.PI*2),t.fill(),lr=new R(e),lr.colorSpace=me,lr}function dr({w:e=.6,d:t=.6,x:r=0,y:i=.002,z:a=0,opacity:o=.5,rotation:s=0}={}){let c=new G(new H(e,t),new n({map:ur(),transparent:!0,opacity:o,depthWrite:!1,toneMapped:!1}));return c.rotation.x=-Math.PI/2,c.rotation.z=s,c.position.set(r,i,a),c.renderOrder=-1,c.raycast=()=>{},c}function fr({yawLimit:e=80,pitchUp:t=32,pitchDown:n=20,sensitivity:r=.16,keySpeed:i=70,damp:a=9}={}){let o=Math.PI/180,s=(e,t,n)=>e<t?t:e>n?n:e,c=0,l=0,u=0,d=0;return{addDrag(i,a){u=s(u-i*r,-e,e),d=s(d-a*r,-n,t)},addKeys(r,{left:a,right:o,up:c,down:l}){let f=i*r;a&&(u=s(u+f,-e,e)),o&&(u=s(u-f,-e,e)),c&&(d=s(d+f,-n,t)),l&&(d=s(d-f,-n,t))},recenter(){u=0,d=0},update(e){let t=1-Math.exp(-a*e);c+=(u-c)*t,l+=(d-l)*t},get yaw(){return c*o},get pitch(){return l*o},get active(){return Math.abs(c)>.05||Math.abs(l)>.05}}}var pr=null;function mr(){if(pr)return pr;let e=document.createElement(`canvas`);e.width=e.height=256;let t=e.getContext(`2d`),n=t.createRadialGradient(256/2,256/2,256*.32,256/2,256/2,256*.72);return n.addColorStop(0,`rgba(0,0,0,0)`),n.addColorStop(1,`rgba(0,0,0,1)`),t.fillStyle=n,t.fillRect(0,0,256,256),pr=new R(e),pr.colorSpace=me,pr}function hr({strength:e=.55,dist:t=.5}={}){let r=new G(new H(1,1),new n({map:mr(),transparent:!0,opacity:e,depthTest:!1,depthWrite:!1,toneMapped:!1}));r.renderOrder=9999,r.raycast=()=>{},r.frustumCulled=!1;let i=new I;return r.fit=e=>{e.getWorldDirection(i),r.position.copy(e.position).addScaledVector(i,t),r.quaternion.copy(e.quaternion);let n=2*Math.tan(l.degToRad(e.fov)*.5)*t*1.05;r.scale.set(n*e.aspect,n,1)},r}var gr=``+new URL(`office-dressed2-CNZL1Pge.png`,import.meta.url).href,_r=``+new URL(`office-night2-Tdv47G8J.png`,import.meta.url).href,vr=``+new URL(`office-modern-CQqt-EK1.png`,import.meta.url).href,yr=``+new URL(`office-charm2-qAn3JlVo.png`,import.meta.url).href;function br(){let e=document.createElement(`canvas`);e.width=e.height=256;let t=e.getContext(`2d`);t.fillStyle=`#6e4a2c`,t.fillRect(0,0,256,256);for(let e=0;e<150;e++){let e=Math.random()*256,n=.7+Math.random()*.7;t.strokeStyle=`rgba(${Math.round(110*n)},${Math.round(74*n)},${Math.round(44*n)},${.16+Math.random()*.28})`,t.lineWidth=.5+Math.random()*1.6,t.beginPath(),t.moveTo(e,0);for(let n=0;n<=256;n+=14)t.lineTo(e+Math.sin(n*.05+e)*3,n);t.stroke()}t.strokeStyle=`rgba(30,18,8,0.5)`,t.lineWidth=2;for(let e of[256*.34,256*.67])t.beginPath(),t.moveTo(0,e),t.lineTo(256,e),t.stroke();let n=new R(e);return n.colorSpace=me,n.wrapS=n.wrapT=P,n}function Q(e,t,n,r,{rough:i=.62,metal:a=0,x:o=0,y:s=0,z:c=0,emissive:l=null,emissiveIntensity:u=1,map:d=null,mapRepeat:f=null}={}){let p=d;d&&f&&(p=d.clone(),p.needsUpdate=!0,p.wrapS=p.wrapT=P,p.repeat.set(f[0],f[1]));let m=new G(new B(e,t,n),new S({color:p?`#ffffff`:r,roughness:i,metalness:a,...p?{map:p}:{},...l?{emissive:l,emissiveIntensity:u}:{}}));return m.position.set(o,s,c),m}function xr(){let e=document.createElement(`canvas`);e.width=512,e.height=304;let t=e.getContext(`2d`);t.fillStyle=`#fff`,t.fillRect(0,0,512,304);let n=.13*512,r=.87*512,i=.1*304,a=.66*304;return t.filter=`blur(7px)`,t.fillStyle=`#000`,t.beginPath(),t.moveTo(80.56,i),t.arcTo(r,i,r,a,14),t.arcTo(r,a,n,a,14),t.arcTo(n,a,n,i,14),t.arcTo(n,i,r,i,14),t.closePath(),t.fill(),t.filter=`none`,new R(e)}function Sr({tier:e=`corner`,layout:t=`straight-on`}={}){let r=new ce,a=new d(43,1,.1,100),o=new I(0,1.62,4.35),s=new I(0,1.12,-1);a.position.copy(o),a.lookAt(s);let c=fr({yawLimit:80,pitchUp:34,pitchDown:20}),f=new A(0,0,0,`YXZ`),p=new E,m=new b;r.add(m);let h=new b,g=new b,_=new b,v=new b,y=new b;m.add(h,g,_,v,y);let x=[],C=`#4a3322`,w=`#3a2618`,T=`#5b3d27`,D=`#6e4a30`,O=`#5a5650`,k=br();h.add(Q(11,.2,11,`#3c2a1c`,{rough:.5,y:-.1,map:k,mapRepeat:[5,5]})),h.add(Q(11,.2,11,`#3a2a1d`,{rough:.9,y:3,map:k,mapRepeat:[4,4]}));for(let e of[-2.4,0,2.4])h.add(Q(.18,.16,7.4,w,{rough:.7,x:e,y:2.9,z:0,map:k,mapRepeat:[1,4]}));for(let e of[-2,.4])h.add(Q(7.4,.16,.18,w,{rough:.7,x:0,y:2.88,z:e,map:k,mapRepeat:[4,1]}));function j(e){let t=new b;t.add(Q(.2,3.2,8,C,{rough:.7,x:e*3.6,y:1.5,z:0,map:k,mapRepeat:[3,1.4]}));let n=e*3.45;t.add(Q(.06,.22,8,w,{x:n,y:.13,z:0})),t.add(Q(.08,.16,8,w,{x:n,y:2.84,z:0})),t.add(Q(.05,.05,8,w,{x:n,y:1,z:0}));for(let e of[-2.6,-1.3,1.3,2.6])t.add(Q(.05,1.6,.06,w,{x:n,y:1.95,z:e}));for(let e of[-2.6,-1.3,1.3,2.6])t.add(Q(.05,.7,.06,w,{x:n,y:.6,z:e}));let r=new G(new H(1.5,1),new S({map:Ar(e),roughness:.8}));r.position.set(e*3.49,1.7,.4),r.rotation.y=-e*Math.PI/2,t.add(Q(.06,1.18,1.68,`#2a1c10`,{x:e*3.52,y:1.7,z:.4}),r);let i=new G(new H(1,1.3),new S({map:Ar(-e),roughness:.8}));i.position.set(e*3.49,1.78,-2),i.rotation.y=-e*Math.PI/2,t.add(Q(.06,1.46,1.16,`#2a1c10`,{x:e*3.52,y:1.78,z:-2}),i),t.add(Q(.12,.3,.16,`#2a1c10`,{x:e*3.4,y:2.2,z:2.2}));let a=new W(new M({map:kr(),color:`#ffcf8a`,transparent:!0,opacity:.5,depthWrite:!1,blending:2}));return a.scale.set(.6,.75,1),a.position.set(e*3.32,2.34,2.2),a.raycast=()=>{},t.add(a),t}h.add(j(-1),j(1));let ee=new b;ee.add(Q(.3,1.9,1.5,T,{rough:.5,y:.95}));for(let e of[.4,.95,1.5])ee.add(Q(.3,.04,1.46,`#3a2c1e`,{y:e}));let N=[`#7a3a2a`,`#2a4a6a`,`#b08a3a`,`#3a5a3a`,`#6a2a4a`,`#8a5a2a`];for(let e of[.6,1.15,1.7])for(let t=0;t<7;t++)ee.add(Q(.18,.3,.11,N[(t+Math.round(e))%N.length],{x:.02,y:e-.06,z:-.6+t*.17}));ee.position.set(-3.34,0,-1.9),h.add(ee),h.add(dr({w:1,d:1.8,x:-3.2,y:.02,z:-1.9,opacity:.4}));let P=new b;P.add(Q(.5,.1,.5,`#4a3526`,{rough:.7,y:.45})),P.add(Q(.5,.55,.08,`#4a3526`,{rough:.7,y:.72,z:-.21}));for(let[e,t]of[[-.2,-.2],[.2,-.2],[-.2,.2],[.2,.2]])P.add(Q(.05,.45,.05,`#2a1c10`,{x:e,y:.22,z:t}));P.position.set(2.7,0,2.6),P.rotation.y=-.5,h.add(P),h.add(dr({w:.7,d:.7,x:2.7,y:.02,z:2.6,opacity:.42}));let ne=new H(3,2.5),re=new H(3,2.5),ie=new n({color:`#ffffff`,toneMapped:!1}),ae=new n({color:`#ffffff`,toneMapped:!1}),R=-3.7,se=1.55,ue=l.degToRad(30),V=3/2*Math.cos(ue),de=R+3/2*Math.sin(ue),fe=new G(ne,ie);fe.position.set(-V,se,de),fe.rotation.y=ue;let U=new G(re,ae);U.position.set(V,se,de),U.rotation.y=-ue;let pe=new n({color:`#ffffff`,toneMapped:!1}),he=new G(new H(5.4,2.6),pe);he.position.set(0,se,-3.5500000000000003),he.visible=!1,_.add(fe,U,he);let _e=new b;_e.add(Q(.08,2.7,.08,w,{x:0,y:se,z:de+3/2*Math.sin(ue)+.02}));for(let[e,t,n]of[[-V,de,ue],[V,de,-ue]]){let r=new b;r.add(Q(3.05,.09,.09,w,{y:1.3})),r.add(Q(3.05,.09,.09,w,{y:-1.25})),r.add(Q(.09,2.6,.09,w,{x:-1.5})),r.position.set(e,se,t),r.rotation.y=n,_e.add(r)}_e.add(Q(5.4,.5,.3,T,{x:0,y:.25,z:de+.5})),h.add(_e);let ve=new b;ve.add(Q(11,3.2,.2,C,{rough:.7,x:0,y:1.5,z:R-.05,map:k,mapRepeat:[4,1.4]})),ve.add(Q(5.8,.14,.12,w,{x:0,y:2.9000000000000004,z:-3.5})),ve.add(Q(5.8,.14,.12,w,{x:0,y:se-1.35,z:-3.5})),ve.add(Q(.14,2.84,.12,w,{x:-2.8,y:se,z:-3.5})),ve.add(Q(.14,2.84,.12,w,{x:2.8,y:se,z:-3.5})),ve.add(Q(.09,2.6,.09,w,{x:0,y:se,z:-3.49})),ve.add(Q(5.4,.5,.3,T,{x:0,y:.25,z:-3.35}));let ye=new b;ye.add(Q(2.4,.9,.55,T,{rough:.42,y:.45,z:0})),ye.add(Q(2.46,.06,.58,D,{rough:.3,y:.91,z:0}));for(let e of[-.62,0,.62])ye.add(Q(.66,.72,.03,`#4a3120`,{x:e,y:.45,z:.285}));for(let e of[-.62,0,.62])ye.add(Q(.05,.04,.05,`#caa15a`,{x:e+.2,y:.45,z:.31,metal:.6}));let be=[`#7a3a2a`,`#2a4a6a`,`#b08a3a`,`#3a5a3a`];for(let e=0;e<4;e++)ye.add(Q(.1,.26+e%2*.05,.2,be[e],{x:-.95+e*.13,y:1.07,z:-.06}));ye.add(Q(.04,.34,.42,`#241a12`,{x:.7,y:1.12,z:-.02})),ye.position.set(-3.9,0,-3.25),ve.add(ye),ve.add(dr({w:2.8,d:.95,x:-3.9,y:.02,z:-3.25,opacity:.45}));for(let[e,t]of[[-3.55,-1],[3.55,1]]){let n=new b,r=new G(new H(.78,.98),new S({map:Ar(t),roughness:.82}));r.position.z=.05,n.add(Q(.06,1.12,.92,`#241a10`,{}),r),n.position.set(e,1.45,-3.5700000000000003),ve.add(n)}for(let e of[-3.55,3.55]){ve.add(Q(.16,.32,.13,`#2a1c10`,{x:e,y:2.35,z:-3.5}));let t=new W(new M({map:kr(),color:`#ffcf8a`,transparent:!0,opacity:.5,depthWrite:!1,blending:2}));t.scale.set(.55,.7,1),t.position.set(e,2.5,-3.42),t.raycast=()=>{},ve.add(t)}ve.visible=!1,h.add(ve),h.add(Q(.4,.06,.4,`#1a130c`,{y:2.94,z:1.3}));let xe=new G(new F(.16,20),new n({color:`#ffe6b0`,toneMapped:!1}));xe.position.set(0,2.9,1.3),xe.rotation.x=Math.PI/2,h.add(xe);for(let[e,t]of[[-1.6,-1],[1.6,-1],[-1.6,-2.6],[1.6,-2.6],[0,-2.6]]){h.add(Q(.28,.05,.28,`#1a130c`,{y:2.95,x:e,z:t}));let r=new G(new F(.1,16),new n({color:`#ffe6b0`,toneMapped:!1}));r.position.set(e,2.915,t),r.rotation.x=Math.PI/2,r.raycast=()=>{},h.add(r)}h.add(wr(x,{x:-3.46,y:2.15,z:.2,ry:Math.PI/2,face:`#efe2c8`,rim:`#2a1c10`})),h.add(Q(3.4,.03,2.4,`#3a1410`,{rough:.98,x:0,y:.012,z:1.95})),h.add(Q(3,.04,2,`#6e2a26`,{rough:.96,x:0,y:.02,z:1.95}));let Se=new b;Se.add(Q(.32,.32,.32,`#7a4a2a`,{rough:.8,y:.16}));for(let e=0;e<6;e++){let t=Q(.05,.55,.13,`#356a32`,{rough:.7,y:.32});t.geometry.translate(0,.27,0),t.rotation.z=(e/6-.5)*1.1,t.rotation.x=Math.sin(e*1.3)*.22,Se.add(t)}Se.position.set(2.7,0,.4),h.add(Se),h.add(dr({w:.7,d:.7,x:2.7,y:.03,z:.4,opacity:.45})),g.add(Q(11,.2,11,`#403d38`,{rough:.85,y:-.1})),g.add(Q(11,.2,11,`#1c1a17`,{rough:.95,y:2.8})),g.add(Q(7,3,.2,O,{rough:.92,x:0,y:1.4,z:-2.9})),g.add(Q(.2,3,6,O,{rough:.92,x:-3.2,y:1.4,z:-.2})),g.add(Q(.2,3,6,O,{rough:.92,x:3.2,y:1.4,z:-.2}));for(let e of[-1.6,-.4]){let t=new G(new te(.07,.07,6,10),new S({color:`#6b6258`,roughness:.6,metalness:.4}));t.rotation.z=Math.PI/2,t.position.set(0,2.62,e),g.add(t)}let Ce=new n({color:`#ffffff`,toneMapped:!1}),we=new G(new H(1.9,1.2),Ce);we.position.set(0,1.5,-2.79),g.add(we),g.add(Q(2.06,1.36,.06,`#241a12`,{x:0,y:1.5,z:-2.83})),g.add(Q(.04,.34,.04,`#1a1410`,{x:-.1,y:2.45,z:-.4}));let Te=new G(new F(.1,16),new n({color:`#ffdb8a`,toneMapped:!1}));Te.position.set(-.1,2.26,-.4),Te.rotation.x=Math.PI/2,g.add(Te);let Ee=new b;Ee.add(Q(1.3,.05,.32,`#3a2c1e`,{x:0,y:0,z:0}));let De=[`#7a3a2a`,`#2a4a6a`,`#b08a3a`,`#3a5a3a`,`#6a2a4a`];for(let e=0;e<8;e++)Ee.add(Q(.12,.34,.24,De[e%De.length],{x:-.55+e*.14,y:.2,z:0}));Ee.position.set(-2.3,1.5,-2.66),g.add(Ee);let Oe=new b;Oe.add(Q(.34,.34,.34,`#7a4a2a`,{y:.17}));let ke=new b;for(let e=0;e<6;e++){let t=Q(.05,.5,.14,`#3a7a3a`,{rough:.7});t.geometry.translate(0,.25,0),t.rotation.z=(e/6-.5)*1.2,t.rotation.x=Math.sin(e)*.25,ke.add(t)}ke.position.y=.34,Oe.add(ke),Oe.position.set(2.45,0,-1.4),g.add(Oe),g.add(wr(x,{x:1.9,y:2.1,z:-2.78,ry:0,face:`#d8d2c4`,rim:`#1a130c`}));let Ae=new b;Ae.add(Q(3.4,.12,1.5,D,{rough:.32,y:.86,z:1.5,map:k,mapRepeat:[3,1.4]})),Ae.add(Q(3.2,.78,1.36,T,{y:.46,z:1.5,map:k,mapRepeat:[3,1]}));for(let e of[.66,.4,.14])Ae.add(Q(.9,.2,.04,`#4a3120`,{x:1.05,y:e,z:2.2}));Ae.add(Q(.12,.04,.04,`#caa15a`,{x:1.05,y:.66,z:2.23,metal:.6}));let je=new G(new te(.05,.045,.1,16),new S({color:`#d8cbb4`,roughness:.6}));je.position.set(-.55,.97,1.95);let Me=new G(new ge(.035,.012,8,14),new S({color:`#d8cbb4`,roughness:.6}));Me.position.set(-.61,.97,1.95),Me.rotation.y=Math.PI/2,Ae.add(je,Me);let Ne=new W(new M({map:kr(),color:`#fff4e0`,transparent:!0,opacity:0,depthWrite:!1,blending:2}));Ne.scale.set(.12,.18,1),Ne.position.set(-.55,1.05,1.95),Ne.raycast=()=>{},Ae.add(Ne),Ae.add(Q(.26,.03,.34,`#efe7d4`,{rough:.85,x:.5,y:.935,z:1.9})),m.add(Ae);let Pe=new b;Pe.add(Q(.06,.5,.06,`#2a1c10`,{x:-1.15,y:1.15,z:1.6}));let Fe=new G(new L(.22,.26,16,1,!0),new S({color:`#c2802e`,roughness:.5,side:2,emissive:`#3a2208`,emissiveIntensity:.6}));Fe.position.set(-1.15,1.42,1.6),Pe.add(Fe);let K=new u(`#ffb15a`,7,7,1.8);K.position.set(-1.15,1.34,1.6),Pe.add(K);let Ie=new W(new M({map:kr(),color:`#ffcf8a`,transparent:!0,opacity:.55,depthWrite:!1,blending:2}));Ie.scale.set(.85,.85,1),Ie.position.set(-1.15,1.35,1.6),Ie.raycast=()=>{},Pe.add(Ie),Pe.position.x=-.3,m.add(Pe);let Le=new b;Le.add(Q(.62,.03,.42,`#1c1c20`,{y:.93,z:1.5,metal:.4,rough:.4}));let Re=new G(new B(.62,.4,.025),new S({color:`#0a0c10`,emissive:`#2a4a6a`,emissiveIntensity:.7,roughness:.3}));Re.position.set(0,1.14,1.31),Re.rotation.x=-.32,Le.add(Re),Le.userData.role=`laptop`,m.add(Le);let ze=new b;ze.add(Q(.26,.07,.34,`#15151a`,{x:1,y:.93,z:1.5}));let Be=Q(.3,.06,.08,`#101015`,{x:1,y:1,z:1.34,emissive:`#234a6a`,emissiveIntensity:.4});ze.add(Be),ze.userData.role=`phone`,m.add(ze);let Ve=new i(`#8a6a42`,`#1c130a`,.78);r.add(Ve);let He=new le(`#ffd9a0`,9,9,.7,.5,1.2);He.position.set(0,2.95,1.3),He.target.position.set(0,.86,1.5),r.add(He,He.target);let Ue=Tr(!1),We=Tr(!0),Ge=.62,Ke=1.32,qe=1.22,Je=1.78,Ye=new W(new M({map:Ue,transparent:!0,depthWrite:!1}));Ye.scale.set(Ge,Ge,1),Ye.position.set(Ke,qe,Je),Ye.userData.role=`cat`,m.add(Ye);let Xe=new W(new M({map:Dr(),transparent:!0,depthWrite:!1,opacity:0}));Xe.scale.set(.3,.3,1),Xe.raycast=()=>{},m.add(Xe);let Ze=0;function q(){Ze=1.3}let Qe=-.95,$e=1.06,et=1.95,J=.62,tt=.42,Y=.34,X=new b;X.position.set(Qe,$e,et),X.add(Q(J,.05,Y,`#3a3026`,{y:-.19}));let nt=new G(new B(J-.04,tt-.08,Y-.04),new S({color:`#1f9fc0`,transparent:!0,opacity:.26,roughness:.1,emissive:`#0a3a4a`,emissiveIntensity:.4,depthWrite:!1}));nt.position.y=.02,X.add(nt);for(let e of[-1,1])for(let t of[-1,1])X.add(Q(.03,tt,.03,`#20262c`,{x:e*(J/2-.015),z:t*(Y/2-.015),metal:.5}));let rt=new G(new B(J,tt,Y),new n({visible:!1}));rt.userData.role=`tank`,X.add(rt);let it=new u(`#5fd8ff`,0,3,2);X.add(it);let at=[Or(`#e8a23c`),Or(`#d85a6a`),Or(`#6cc0e0`)],ot=[],st=tt/2-.12;for(let e=0;e<3;e++){let t=new W(new M({map:at[e],transparent:!0,depthWrite:!1})),n=.15-e*.015;t.userData={sz:n,sp:.6+e*.22,ph:e*2.1,ax:.21*(.7+.1*e),ay:st,az:.09000000000000001,prevx:0},t.scale.set(n,n,1),ot.push(t),X.add(t)}let ct=kr(),lt=[];for(let e=0;e<5;e++){let t=new W(new M({map:ct,color:`#cfeffb`,transparent:!0,opacity:.5,depthWrite:!1}));t.userData={ph:e/5,sp:.16+Math.random()*.06,x:-.1+e%3*.07},t.scale.setScalar(.03+e%2*.015),t.raycast=()=>{},lt.push(t),X.add(t)}let ut=new W(new M({map:ct,color:`#c8a24a`,transparent:!0,opacity:0,depthWrite:!1}));ut.scale.setScalar(.04),ut.raycast=()=>{},X.add(ut);let dt=0;function ft(){dt=3,ut.position.set(-.05,st,0),ut.material.opacity=1}m.add(X);let pt=new b;for(let e=0;e<8;e++){let t=new W(new M({map:ct,color:`#ffd9a0`,transparent:!0,opacity:0,depthWrite:!1,blending:2}));t.scale.setScalar(.018),t.userData={ph:e*.9,sp:.1+e%3*.04,r:.1+e%4*.03},t.raycast=()=>{},pt.add(t)}pt.position.set(-1.45,1.2,1.6),m.add(pt);let mt=new b,ht=.925;mt.add(dr({w:4,d:2,x:0,y:.045,z:1.55,opacity:.5})),mt.add(dr({w:.95,d:.62,x:0,y:ht,z:1.42,opacity:.42})),mt.add(dr({w:.3,d:.3,x:-.55,y:ht,z:1.95,opacity:.4})),mt.add(dr({w:.42,d:.46,x:.5,y:ht,z:1.9,opacity:.35})),mt.add(dr({w:.42,d:.46,x:1,y:ht,z:1.5,opacity:.42})),mt.add(dr({w:.7,d:.42,x:Qe,y:ht,z:1.95,opacity:.42})),mt.add(dr({w:.55,d:.4,x:1.32,y:ht,z:1.78,opacity:.4})),mt.add(dr({w:.34,d:.34,x:-1.45,y:ht,z:1.6,opacity:.35})),m.add(mt),[Ae,Pe,Le,ze,Ye,X,pt,mt].forEach(e=>v.add(e));function gt(e,t,r,i,a,o,s){let c=new G(new B(t,r,i),new n({visible:!1}));c.position.set(a,o,s),c.userData.role=e,y.add(c)}gt(`laptop`,.95,.6,.7,0,1.05,1.4),gt(`phone`,.5,.4,.5,1,.98,1.42),gt(`cat`,.62,.74,.5,Ke,qe,Je),gt(`tank`,J,tt,.5,Qe,$e,et);let _t=Cr(),vt={dressed2:new oe().load(gr),night2:new oe().load(_r),modern:new oe().load(vr),charm:new oe().load(yr)},yt=[`dressed2`,`night2`,`modern`,`charm`];for(let e of yt)vt[e].colorSpace=me;let bt=xr(),xt=new G(new H(1,1),new n({map:vt.dressed2,alphaMap:bt,transparent:!0,toneMapped:!1}));xt.position.set(0,1.45,-5),xt.visible=!1,xt.raycast=()=>{},r.add(xt);let St=hr({strength:.5});r.add(St);let Ct=`3d`,wt=`painted`;function Tt(){let e=Lt===`corner`,t=Ct!==`3d`,n=t&&wt===`painted`;h.visible=e&&!t,g.visible=!e&&!t,_.visible=t||e,xt.visible=t,v.visible=!n,Ft()}function Et(e){return Ct=yt.includes(e)?e:`3d`,Ct!==`3d`&&(xt.material.map=vt[Ct],xt.material.needsUpdate=!0),Tt(),Ct}function Dt(e){return wt=e===`3d`?`3d`:`painted`,Tt(),wt}let Ot=K.intensity,kt=Re.material.emissiveIntensity,At=new z;function jt(e,t,n){let r=n?n.windowGlow:0,i=r>.55;Ye.material.map=i?We:Ue,Ze>0&&(Ze=Math.max(0,Ze-e));let u=Ze>0?Math.sin((1.3-Ze)/1.3*Math.PI):0,d=i?.012*Math.sin(t*1.2):.03*Math.sin(t*2.4);Ye.scale.set(Ge,Ge*(1+d+.12*u),1),Ye.position.y=qe+.06*u,Xe.material.opacity=u,Xe.position.set(Ke,1.72+.5*(1-Ze/1.3),Je),Xe.scale.setScalar(.22+.1*u),dt>0&&(dt=Math.max(0,dt-e),ut.position.y=Math.max(-.09,ut.position.y-e*.06),ut.material.opacity=dt>.3?1:dt/.3);for(let e of ot){let n=e.userData,r=Math.sin(t*n.sp+n.ph)*n.ax,i=Math.sin(t*n.sp*.8+n.ph*1.7)*n.ay*.7,a=Math.cos(t*n.sp*.6+n.ph)*n.az,o=dt>0?ut.position.x:r,s=dt>0?ut.position.y:i,c=dt>0?ut.position.z:a,l=dt>0?.05:.1;e.position.x+=(o-e.position.x)*l,e.position.y+=(s-e.position.y)*l,e.position.z+=(c-e.position.z)*l,e.scale.x=(e.position.x>=n.prevx?1:-1)*n.sz,n.prevx=e.position.x}for(let e of lt){let n=(t*e.userData.sp+e.userData.ph)%1;e.position.set(e.userData.x+Math.sin(t*2+e.userData.ph*9)*.015,-.09+2*st*n,.02),e.material.opacity=.5*Math.sin(n*Math.PI)}it.intensity=2.6*r,nt.material.emissiveIntensity=.4+.9*r,K.intensity=Ot*(.97+.03*Math.sin(t*7)*Math.sin(t*2.3)),Re.material.emissiveIntensity=kt*(.85+.15*Math.sin(t*3.1+1)),Be.material.emissiveIntensity=.4*(.65+.35*Math.sin(t*2.2)),At.setRGB(1,.85,.62),pt.children.forEach((e,n)=>{let i=e.userData,a=(t*i.sp+i.ph)%1;e.position.set(Math.cos(t*.5+i.ph*5)*i.r,-.15+a*.45,Math.sin(t*.4+i.ph*5)*i.r),e.material.opacity=(.1+.18*r)*Math.sin(a*Math.PI)});let m=t*.4%1;Ne.position.y=1.04+m*.22,Ne.position.x=-.55+Math.sin(t*1.5)*.02,Ne.material.opacity=.26*Math.sin(m*Math.PI),Ne.scale.set(.1+m*.08,.16+m*.12,1),ke.rotation.z=Math.sin(t*.8)*.05,ke.rotation.x=Math.sin(t*.6+1)*.04;let h=n?n.t%1:0;for(let e of x)e.rotation.z=-h*Math.PI*2;if(_t.update(e),xt.visible){let e=a.position.z-xt.position.z,t=2*Math.tan(l.degToRad(a.fov)*.5)*e*1.18;xt.scale.set(t*a.aspect,t,1);let n=.55+.45*(1-r);xt.material.color.setRGB(n,n*.97,n*.92)}a.position.set(o.x+Math.sin(t*.5)*.04,o.y+Math.sin(t*.7)*.02,o.z),a.lookAt(s),c.update(e),f.set(c.pitch,c.yaw,0,`YXZ`),a.quaternion.multiply(p.setFromEuler(f)),St.fit(a)}function Mt(e,t=e){ie.map=e,ae.map=t,ie.needsUpdate=!0,ae.needsUpdate=!0}function Nt(e){pe.map=e,pe.needsUpdate=!0}let Pt=`corner`;function Ft(){let e=Pt===`corner`;fe.visible=U.visible=e,he.visible=!e||Ct!==`3d`,_e.visible=e,ve.visible=!e}function It(e){return Pt=e===`straight-on`?`straight-on`:`corner`,Ft(),Pt}function Z(e){Ce.map=e,Ce.needsUpdate=!0}let Lt=e;function Rt(e){Lt=e===`basement`?`basement`:`corner`;let t=Lt===`corner`;return Tt(),He.intensity=t?9:3.2,Ve.intensity=t?.78:.82,Ve.color.set(t?`#6a5238`:`#7a5a34`),Lt}return Rt(Lt),It(t),{scene:r,camera:a,update:jt,setCityTexture:Mt,setStraightCityTexture:Nt,setVignetteTexture:Z,setFitout:Rt,setSkin:Et,setProps:Dt,setLayout:It,petCat:q,feedFish:ft,look:c,vignette:_t,get interactables(){return Ct!==`3d`&&wt===`painted`?y.children:[Le,ze,Ye,rt]},get tier(){return Lt},get skin(){return Ct},get props(){return wt},get layout(){return Pt}}}function Cr(){let e=new ce;e.background=new z(`#7fb0dd`);let t=new C(-1.4,1.4,.9,-.9,0,10);t.position.set(0,0,5);let r=(e,t={})=>new n({color:e,toneMapped:!1,...t}),i=(e,t,n,i,a,o,s)=>{let c=new G(new H(e,t),r(o,s));return c.position.set(n,i,a),c};e.add(i(3.2,.9,.5,-.95,1,`#2a4a30`)),e.add(i(3.2,.7,-.7,-1.05,2,`#1d3724`)),e.add(i(.06,.3,-.95,-.55,3,`#3a2a1a`));let a=new G(new F(.22,18),r(`#234a2a`));a.position.set(-.95,-.32,3),e.add(a),e.add(i(.04,.55,.9,-.55,3,`#20242a`));let o=new G(new F(.1,16),r(`#ffd98a`,{transparent:!0,opacity:0}));o.position.set(.9,-.26,3.1),e.add(o);let s=new G(new F(.16,24),r(`#fff4d8`));e.add(s);let c=[];for(let[t,n]of[[-1,.5],[-.6,.7],[.2,.6],[.7,.72],[1.05,.45],[-.2,.78],[.45,.4]]){let i=new G(new F(.015,8),r(`#ffffff`,{transparent:!0,opacity:0}));i.position.set(t,n,.5),c.push(i),e.add(i)}let u=new z(`#141d33`),d=new z(`#7fb6e0`),f=new z(`#d6824a`),p=new z(`#fff0cc`),m=new z(`#cdd8ef`),h=.34;function g(t){h=(h+t*.04)%1;let n=h*Math.PI*2,r=-Math.cos(n);s.position.set(Math.sin(n)*1.15,r*.66+.06,0);let i=l.smoothstep(r,-.18,.5),a=l.smoothstep(.32,0,Math.abs(r));e.background.copy(u).lerp(d,i).lerp(f,a*.45),s.material.color.copy(r>0?p:m),o.material.opacity=1-i;let g=(1-i)*.85;for(let e of c)e.material.opacity=g}return{scene:e,camera:t,update:g}}function wr(e,{x:t,y:n,z:r,ry:i=0,face:a=`#efe2c8`,rim:o=`#2a1c10`}){let s=new b,c=new G(new F(.2,28),new S({color:o,roughness:.6})),l=new G(new F(.17,28),new S({color:a,roughness:.7}));l.position.z=.01;let u=new G(new H(.018,.14),new S({color:`#1a130c`,roughness:.5}));return u.geometry.translate(0,.05,0),u.position.z=.02,e.push(u),s.add(c,l,u),s.position.set(t,n,r),s.rotation.y=i,s}function Tr(e){let t=document.createElement(`canvas`);t.width=t.height=128;let n=t.getContext(`2d`),r=`#e08a3c`,i=`#b96a26`,a=`#3a2410`;if(n.lineJoin=`round`,e){n.fillStyle=r,n.beginPath(),n.ellipse(64,78,44,26,0,0,7),n.fill(),n.fillStyle=i,n.beginPath(),n.ellipse(64,86,44,16,0,0,7),n.fill(),n.fillStyle=r,n.beginPath(),n.arc(36,70,20,0,7),n.fill(),n.fillStyle=r,Er(n,24,56,34,44,42,58),Er(n,40,54,50,44,54,60),n.strokeStyle=i,n.lineWidth=7,n.lineCap=`round`,n.beginPath(),n.moveTo(100,70),n.quadraticCurveTo(112,90,88,96),n.stroke(),n.strokeStyle=a,n.lineWidth=2.5,n.beginPath(),n.arc(30,70,5,.1,Math.PI-.1),n.stroke(),n.strokeStyle=i,n.lineWidth=3;for(let e of[60,74,88])n.beginPath(),n.moveTo(e,58),n.lineTo(e,70),n.stroke()}else{n.fillStyle=r,n.beginPath(),n.ellipse(64,86,30,34,0,0,7),n.fill(),n.fillStyle=`#f3c98a`,n.beginPath(),n.ellipse(64,92,14,22,0,0,7),n.fill(),n.strokeStyle=i,n.lineWidth=8,n.lineCap=`round`,n.beginPath(),n.moveTo(92,100),n.quadraticCurveTo(116,86,104,60),n.stroke(),n.fillStyle=r,n.beginPath(),n.arc(64,48,24,0,7),n.fill(),n.fillStyle=r,Er(n,44,34,50,18,60,34),Er(n,84,34,78,18,68,34),n.fillStyle=`#f0b0c0`,Er(n,47,30,50,22,56,32),Er(n,81,30,78,22,72,32),n.fillStyle=a,n.beginPath(),n.arc(55,47,3.4,0,7),n.arc(73,47,3.4,0,7),n.fill(),n.fillStyle=`#e06a7a`,Er(n,61,54,67,54,64,58),n.strokeStyle=a,n.lineWidth=1.6;for(let e of[-2,3])n.beginPath(),n.moveTo(50,55+e),n.lineTo(34,53+e),n.moveTo(78,55+e),n.lineTo(94,53+e),n.stroke();n.strokeStyle=i,n.lineWidth=3;for(let e of[78,90,102])n.beginPath(),n.moveTo(50,e),n.lineTo(78,e),n.stroke()}let o=new R(t);return o.colorSpace=me,o}function Er(e,t,n,r,i,a,o){e.beginPath(),e.moveTo(t,n),e.lineTo(r,i),e.lineTo(a,o),e.closePath(),e.fill()}function Dr(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`);t.fillStyle=`#ff5a8a`,t.beginPath(),t.moveTo(32,52),t.bezierCurveTo(6,32,14,10,32,24),t.bezierCurveTo(50,10,58,32,32,52),t.fill();let n=new R(e);return n.colorSpace=me,n}function Or(e){let t=document.createElement(`canvas`);t.width=t.height=64;let n=t.getContext(`2d`);n.fillStyle=e,n.beginPath(),n.ellipse(30,32,18,11,0,0,7),n.fill(),n.beginPath(),n.moveTo(46,32),n.lineTo(60,22),n.lineTo(60,42),n.closePath(),n.fill(),n.fillStyle=`rgba(255,255,255,0.35)`,n.beginPath(),n.ellipse(28,36,12,5,0,0,7),n.fill(),n.fillStyle=`#15212a`,n.beginPath(),n.arc(20,30,2.6,0,7),n.fill();let r=new R(t);return r.colorSpace=me,r}function kr(){let e=document.createElement(`canvas`);e.width=e.height=32;let t=e.getContext(`2d`),n=t.createRadialGradient(16,16,0,16,16,16);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.6,`rgba(255,255,255,0.7)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.beginPath(),t.arc(16,16,16,0,7),t.fill();let r=new R(e);return r.colorSpace=me,r}function Ar(e){let t=document.createElement(`canvas`);t.width=t.height=256;let n=t.getContext(`2d`),r=n.createLinearGradient(0,0,256,256);e<0?(r.addColorStop(0,`#6a3b1c`),r.addColorStop(1,`#caa15a`)):(r.addColorStop(0,`#3a4a6a`),r.addColorStop(1,`#a86a3a`)),n.fillStyle=r,n.fillRect(0,0,256,256),n.globalAlpha=.5;for(let e=0;e<5;e++)n.fillStyle=e%2?`#2a1c10`:`#e0c080`,n.fillRect(30+e*36,40+e%3*30,26,150);let i=new R(t);return i.colorSpace=me,i}var{Timer:jr}=ne,Mr=new URLSearchParams(window.location.search),Nr=Mr.get(`demo`)===`1`||Mr.has(`capture`);window.__demo=Nr;var Pr=(Mr.get(`city`)?Number(Mr.get(`city`)):0)||Math.random()*1e9|0,Fr=0,Ir=ir({demo:Nr,citySeed:Pr,profileIndex:Fr}),{renderer:Lr,rig:Rr,sunRig:zr,city:Br,cityLife:Vr,waterMaterial:Hr,fitShadowFrustum:Ur,landmarkFactory:Wr,renderCityBeautyTo:Gr}=Ir,$=Sr({tier:`corner`});typeof window<`u`&&(window.__office=$),$.camera.aspect=window.innerWidth/window.innerHeight,$.camera.updateProjectionMatrix();var Kr=!0;window.__shadows=Kr,window.__scene=`office`;var qr={minFilter:g,magFilter:g,depthBuffer:!0,stencilBuffer:!1},Jr=new I(2.2,3.4,11.5),Yr=new I(0,2,0).sub(Jr),Xr=new I(0,1,0),Zr=30,Qr=384/320,$r=l.radToDeg(2*Math.atan(Math.tan(l.degToRad(Zr))/Qr));function ei(e){let t=new d($r,Qr,.1,100);t.position.copy(Jr);let n=Yr.clone().applyAxisAngle(Xr,l.degToRad(e));return t.lookAt(Jr.clone().add(n)),t}var ti=ei(30),ni=ei(-30),ri=new V(384,320,qr),ii=new V(384,320,qr);$.setCityTexture(ri.texture,ii.texture);var ai=new d(52,540/320,.1,100);ai.position.copy(Jr),ai.lookAt(Jr.clone().add(Yr));var oi=new V(540,320,qr);$.setStraightCityTexture(oi.texture);var si=0,ci=3,li=new V(512,320,{minFilter:g,magFilter:g,depthBuffer:!0,stencilBuffer:!1});$.setVignetteTexture(li.texture);var ui=!1,di=(()=>{if(typeof document>`u`)return{showLap(){},toast(){},flash(){}};let e=document.createElement(`style`);e.textContent=`
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
    </div></div>`;let n=document.createElement(`div`);n.className=`otoast`;let r=document.createElement(`div`);r.className=`oflash`,document.body.append(t,n,r),t.querySelector(`.lap-x`).addEventListener(`click`,()=>pi()),t.addEventListener(`click`,e=>{e.target===t&&pi()}),t.addEventListener(`click`,e=>{e.target.closest(`button`)&&navigator.vibrate?.(10)});let i=0;return{showLap(e){t.classList.toggle(`on`,e)},toast(e){n.textContent=e,n.classList.add(`on`),clearTimeout(i),i=setTimeout(()=>n.classList.remove(`on`),1400)},flash(){r.style.transition=`none`,r.style.opacity=`0.85`,requestAnimationFrame(()=>{r.style.transition=`opacity .55s`,r.style.opacity=`0`})}}})();function fi(){ui=!0,di.showLap(!0)}function pi(){ui=!1,di.showLap(!1)}function mi(){Fr=(Fr+1)%et.length,di.flash(),Br.generate(Pr,Fr),Hr.uniforms.uVecWater.value.set(Br.waterColor),Vr.setProfile(Br.state.profile),Ur(),di.toast(`✈  `+Br.state.profile.name),window.__profile=Br.state.profile.key}function hi(e){let t=$.setFitout(e);return di.toast(t===`basement`?`🏚  Basement office`:`🏙  Corner office`),window.__tier=t,t}function gi(){return hi($.tier===`corner`?`basement`:`corner`)}window.__tier=$.tier;var _i=[`3d`,`dressed2`,`night2`,`modern`,`charm`],vi={"3d":`🧊  Stylized 3D office`,dressed2:`📚  Dressed office (day)`,night2:`🌙  Night office`,modern:`🏙  Modern office (day)`,charm:`🎨  Charm office`};function yi(e){let t=$.setSkin(e);return window.__officeSkin=t,di.toast(vi[t]),t}function bi(){return yi(_i[(_i.indexOf($.skin)+1)%_i.length])}window.__officeSkin=$.skin;var xi={painted:`🎨  Painted props (cohesive)`,"3d":`🧊  Live 3D props (animated)`};function Si(e){let t=$.setProps(e);return window.__officeProps=t,$.skin!==`3d`&&di.toast(xi[t]),t}function Ci(){return Si($.props===`painted`?`3d`:`painted`)}window.__officeProps=$.props;var wi={corner:`🏙  Corner window`,"straight-on":`🖼  Straight-on window`};function Ti(e){let t=$.setLayout(e);return window.__officeLayout=t,di.toast(wi[t]),t}function Ei(){return Ti($.layout===`corner`?`straight-on`:`corner`)}window.__officeLayout=$.layout;var Di=new e,Oi=new N,ki=(e,t)=>{Oi.x=e/window.innerWidth*2-1,Oi.y=-(t/window.innerHeight)*2+1};function Ai(){Di.setFromCamera(Oi,$.camera);let e=Di.intersectObjects($.interactables,!0)[0];if(!e)return null;let t=e.object;for(;t&&!t.userData.role;)t=t.parent;return t?t.userData.role:null}function ji(e){e===`laptop`?fi():e===`phone`?mi():e===`cat`?$.petCat():e===`tank`&&$.feedFish()}var Mi=6,Ni=0,Pi=0,Fi=0,Ii=0,Li=0,Ri=!1,zi=!1;Lr.domElement.style.cursor=`grab`,Lr.domElement.addEventListener(`mousedown`,e=>{Ri=!0,zi=!1,Ni=Ii=e.clientX,Pi=Li=e.clientY,Fi=performance.now()}),window.addEventListener(`mousemove`,e=>{Ri?(!zi&&Math.hypot(e.clientX-Ni,e.clientY-Pi)>Mi&&(zi=!0),zi&&($.look.addDrag(e.clientX-Ii,e.clientY-Li),Lr.domElement.style.cursor=`grabbing`),Ii=e.clientX,Li=e.clientY):(ki(e.clientX,e.clientY),Lr.domElement.style.cursor=Ai()?`pointer`:`grab`)}),window.addEventListener(`mouseup`,e=>{if(Ri&&!zi&&!ui){ki(e.clientX,e.clientY);let t=Ai();t&&ji(t)}Ri=!1,zi=!1,Lr.domElement.style.cursor=`grab`});var Bi=!1;Lr.domElement.addEventListener(`touchstart`,e=>{e.touches.length===1&&(Ni=Ii=e.touches[0].clientX,Pi=Li=e.touches[0].clientY,Fi=performance.now(),Bi=!1)},{passive:!0}),Lr.domElement.addEventListener(`touchmove`,e=>{if(e.touches.length!==1)return;let t=e.touches[0].clientX,n=e.touches[0].clientY;!Bi&&Math.hypot(t-Ni,n-Pi)>8&&(Bi=!0),Bi&&$.look.addDrag(t-Ii,n-Li),Ii=t,Li=n},{passive:!0}),window.addEventListener(`touchend`,e=>{if(!Bi&&performance.now()-Fi<350&&(!e.touches||e.touches.length===0)&&!ui){let e=Ai();e&&ji(e)}Bi=!1});var Vi={left:!1,right:!1,up:!1,down:!1},Hi={ArrowLeft:`left`,ArrowRight:`right`,ArrowUp:`up`,ArrowDown:`down`};window.addEventListener(`keydown`,e=>{if(Hi[e.key]){Vi[Hi[e.key]]=!0,e.preventDefault();return}e.key===`Escape`&&(ui?pi():$.look.recenter()),(e.key===`f`||e.key===`F`)&&gi(),(e.key===`j`||e.key===`J`)&&bi(),(e.key===`u`||e.key===`U`)&&Ci(),(e.key===`t`||e.key===`T`)&&zr.cyclePreset(),(e.key===`h`||e.key===`H`)&&(Kr=!Kr,window.__shadows=Kr),(e.key===`w`||e.key===`W`)&&Ei()}),window.addEventListener(`keyup`,e=>{Hi[e.key]&&(Vi[Hi[e.key]]=!1)}),Wr.whenReady.then(()=>{Br.generate(Pr,Fr),Ur(),window.__cityReady=!0}),Mr.get(`office`)===`basement`&&hi(`basement`);var Ui=Mr.get(`officeskin`);_i.includes(Ui)&&yi(Ui);var Wi=Mr.get(`officeprops`);[`painted`,`3d`].includes(Wi)&&Si(Wi);var Gi=Mr.get(`officelayout`);[`corner`,`straight-on`].includes(Gi)&&Ti(Gi);var Ki=new jr;Ki.connect(document);function qi(){Ki.update();let e=Math.min(Ki.getDelta(),.1);Rr.update(e),Ir.updateWorld(e,Ki.getElapsed(),{shadowsOn:Kr,seasonTarget:0}),$.look.addKeys(e,Vi),$.update(e,Ki.getElapsed(),zr),window.__lookYaw=$.look.yaw,window.__lookPitch=$.look.pitch,$.tier===`basement`?(Lr.setRenderTarget(li),Lr.render($.vignette.scene,$.vignette.camera)):si%ci===0&&($.layout===`straight-on`?Gr(ai,oi):(Gr(ti,ri),Gr(ni,ii),$.skin!==`3d`&&Gr(ai,oi))),si++,Lr.setRenderTarget(null),Lr.render($.scene,$.camera),requestAnimationFrame(qi)}qi(),cr({key:`office`,title:`The Office`,tips:[`Drag to look around the office (or use the arrow keys)`,`Click / tap the LAPTOP to open the game panel`,`Tap the PHONE to travel to another city · pet the CAT · feed the FISH`,`Esc exits · F fitout · J skin · U props · W window · T time`]}),window.addEventListener(`resize`,()=>{Ir.resize(),$.camera.aspect=window.innerWidth/window.innerHeight,$.camera.updateProjectionMatrix()});