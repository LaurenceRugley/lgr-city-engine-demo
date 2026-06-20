import{$ as e,A as t,B as n,C as r,D as i,E as a,F as o,G as s,H as c,I as l,J as u,K as d,L as f,M as p,N as m,O as h,P as g,Q as _,R as v,S as y,T as b,U as x,V as S,W as C,X as w,Y as T,Z as E,_ as D,a as O,at as ee,b as te,c as k,ct as A,d as j,dt as M,et as ne,f as re,ft as N,g as ie,h as P,i as ae,it as F,j as I,k as L,l as oe,lt as R,m as se,n as z,nt as B,o as ce,ot as le,p as ue,q as de,r as fe,rt as pe,s as V,st as me,t as he,tt as H,u as ge,ut as U,v as _e,w as ve,x as W,y as ye,z as be}from"./three-C1iWrYku.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var xe=Math.atan(1/Math.SQRT2),Se=Math.atan(.5),Ce=Math.PI/4,we={PERSPECTIVE:4,ISOMETRIC:5,DIMETRIC:6},Te=.12,Ee=1.45,De=4,G=40,Oe=1.5,ke=16,Ae=6,je=22,Me=3.5,Ne=11,Pe=(e,t,n)=>e+(t-e)*(1-Math.exp(-8*n)),K=(e,t)=>e+Math.PI*2*Math.round((t-e)/(Math.PI*2));function Fe({aspect:e,fov:t=48,near:n=.1,far:r=100,target:i=new M(0,.8,0),azimuth:a=Ce,elevation:o=.52,distance:s=12,zoom:c=5.5}={}){let l=new u(t,e,n,r),f=new d(-1,1,1,-1,n,r),p=we.PERSPECTIVE,m=e,h={azimuth:a,elevation:o,distance:s,zoom:c,target:i.clone()},g={azimuth:a,elevation:o,distance:s,zoom:c,target:i.clone()},_=!1,y=null,b=new M,x=()=>p===we.PERSPECTIVE?l:f;function S(e){e!==p&&(p=e,p===we.ISOMETRIC||p===we.DIMETRIC?(h.elevation=p===we.ISOMETRIC?xe:Se,h.azimuth=K(Ce,g.azimuth),_=!0):_=!1)}function C(e,t){h.azimuth+=e,_||(h.elevation=v.clamp(h.elevation+t,Te,Ee))}function w(e){p===we.PERSPECTIVE?h.distance=v.clamp(h.distance*e,De,G):h.zoom=v.clamp(h.zoom*e,Oe,ke)}function T(e,t){let n=h.azimuth,r=p===we.PERSPECTIVE?h.distance*.04:h.zoom*.08,i=new M(Math.cos(n),0,-Math.sin(n)),a=new M(-Math.sin(n),0,-Math.cos(n));h.target.addScaledVector(i,e*r),h.target.addScaledVector(a,t*r)}function E(e,t){m=e/t,l.aspect=m,l.updateProjectionMatrix()}function D(e){y&&(y(b),h.target.copy(b)),g.azimuth=Pe(g.azimuth,h.azimuth,e),g.elevation=Pe(g.elevation,h.elevation,e),g.distance=Pe(g.distance,h.distance,e),g.zoom=Pe(g.zoom,h.zoom,e),g.target.x=Pe(g.target.x,h.target.x,e),g.target.y=Pe(g.target.y,h.target.y,e),g.target.z=Pe(g.target.z,h.target.z,e);let t=Math.cos(g.elevation),n=Math.sin(g.elevation),r=Math.cos(g.azimuth),i=Math.sin(g.azimuth),a=x();if(a.position.set(g.target.x+g.distance*t*i,g.target.y+g.distance*n,g.target.z+g.distance*t*r),a.lookAt(g.target),a.isOrthographicCamera){let e=g.zoom,t=e*m;a.left=-t,a.right=t,a.top=e,a.bottom=-e,a.updateProjectionMatrix()}}function O(e,t,n,r=!1){h.target.set(e,t,n),r&&g.target.copy(h.target)}function ee(e,t=!1){h.zoom=v.clamp(e,Oe,ke),t&&(g.zoom=h.zoom)}function te(e,{frame:t,snap:n=!1}={}){y=e,n&&(y(b),h.target.copy(b),g.target.copy(b)),t!=null&&(p===we.PERSPECTIVE?h.distance=v.clamp(t,De,G):h.zoom=v.clamp(t,Oe,ke))}function k(){y=null}return{get camera(){return x()},get mode(){return p},get azimuth(){return g.azimuth},get following(){return!!y},setTarget:O,setZoom:ee,setFollow:te,clearFollow:k,get styleT(){return p===we.PERSPECTIVE?v.clamp((g.distance-Ae)/(je-Ae),0,1):v.clamp((g.zoom-Me)/(Ne-Me),0,1)},setMode:S,orbit:C,zoomBy:w,pan:T,setViewport:E,update:D}}var Ie={value:0},Le=new P(`#ffffff`),Re={value:0},ze={value:0},Be={value:0},Ve=new U,He={value:0},Ue={value:0},We=`
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
`;function Ge(e){e.uniforms.uVector=Ie,e.uniforms.uVecTint={value:Le},e.uniforms.uVecShadow=Re,e.uniforms.uSnow=ze,e.uniforms.uCloud=Be,e.uniforms.uCloudOff={value:Ve},e.uniforms.uFogCharm=He}function Ke(e){return e.replace(`#include <fog_fragment>`,`
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
  `)}function qe(e){return e.replace(`#include <common>`,`#include <common>
varying vec3 vVecN;
varying vec3 vVecP;
varying vec2 vWorldXZ;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
  vVecN = normal;
  vVecP = position;
  vWorldXZ = (modelMatrix * vec4(position, 1.0)).xz;`)}function Je(e){return e.replace(`#include <shadowmap_pars_fragment>`,`#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>`)}var Ye=`col *= mix(1.0, getShadowMask(), uVecShadow);`;function q(e,{color:t,id:n,windowGlow:r,winColors:i=[`#ffb852`,`#8cd9ff`],litFrac:a=.55}={}){let o=[0,1,2].map(e=>new P(i[e]??i[i.length-1]));return e.customProgramCacheKey=()=>`lgr-vec-tower`,e.onBeforeCompile=e=>{Ge(e),e.uniforms.uWindowGlow=r,e.uniforms.uWinId={value:n},e.uniforms.uVecColor={value:new P(t)},e.uniforms.uWinA={value:o[0]},e.uniforms.uWinB={value:o[1]},e.uniforms.uWinC={value:o[2]},e.uniforms.uWinLit={value:a},e.vertexShader=qe(e.vertexShader),e.fragmentShader=Ke(Je(e.fragmentShader.replace(`#include <common>`,`#include <common>
        uniform float uWindowGlow;
        uniform float uWinId;
        uniform vec3  uVecColor;
        uniform vec3  uWinA; uniform vec3 uWinB; uniform vec3 uWinC;
        uniform float uWinLit;
        ${We}
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
          ${Ye}                                  // the sun's shadow darkens the body
          vec3 wcol; vec2 w = winTerms(wcol);
          vec3 glass = vec3(0.17, 0.23, 0.34);          // dark glass-blue panes (day)
          col = mix(col, glass, w.x * 0.85);
          col += w.x * w.y * wcol * uWindowGlow * 1.5;  // …windows EMIT (unshadowed) at night
          gl_FragColor = vec4(col, diffuseColor.a);
        }`)))},e}function J(e,{color:t=null,glow:n=null,glowDay:r=0,glowNight:i=1,windowGlow:a=null,season:o=!1}={}){let s=t===null,c=n!==null&&a!==null;return e.customProgramCacheKey=()=>`lgr-vec|`+(s?`d`:`c`)+(c?`g`:``)+(o?`s`:``),e.onBeforeCompile=e=>{Ge(e),s||(e.uniforms.uVecColor={value:new P(t)}),c&&(e.uniforms.uGlow={value:new P(n)},e.uniforms.uGlowDay={value:r},e.uniforms.uGlowNight={value:i},e.uniforms.uWindowGlow=a),o&&(e.uniforms.uSeason=Ue),e.vertexShader=qe(e.vertexShader);let l=s?`diffuseColor.rgb`:`uVecColor`,u=o?`seasonShift(${l})`:l,d=(s?``:`uniform vec3 uVecColor;
`)+(c?`uniform vec3 uGlow; uniform float uGlowDay; uniform float uGlowNight; uniform float uWindowGlow;
`:``)+(o?`uniform float uSeason;
vec3 seasonShift(vec3 c){
  c = mix(c, vec3(0.86, 0.46, 0.13), smoothstep(0.40, 0.70, uSeason));   // → autumn orange
  c = mix(c, vec3(0.46, 0.33, 0.20), smoothstep(0.75, 1.00, uSeason));   // → bare brown
  return c;
}
`:``),f=c?`uGlow * mix(uGlowDay, uGlowNight, uWindowGlow)`:`vec3(0.0)`,p=Ke(Je(e.fragmentShader.replace(`#include <common>`,`#include <common>
`+d+We).replace(`#include <opaque_fragment>`,`#include <opaque_fragment>
        if (uVector > 0.5) {
          vec3 col = vecShade(${u});
          ${Ye}                            // the sun's shadow darkens the flat tier…
          gl_FragColor = vec4(col + ${f}, diffuseColor.a);  // …but the night glow stays lit
        }`)));c&&(p=p.replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>\n  totalEmissiveRadiance += ${f};`)),e.fragmentShader=p},e}function Xe(e){let t=e>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Ze(e){let t=Xe(e);return{next:t,range:(e,n)=>e+(n-e)*t(),int:(e,n)=>e+Math.floor(t()*(n-e+1)),pick:e=>e[Math.floor(t()*e.length)],chance:e=>t()<e}}var Qe=[{key:`manhattan`,name:`Manhattan`,towers:[`#EDE3C8`,`#D9B98A`,`#B5562F`,`#A8C8E8`,`#2E3F5C`],ground:`#7CC455`,street:`#9AA0A6`,sidewalk:`#C8CCD0`,park:`#5DB347`,water:`#29A8D8`,shopfronts:[`#C04A3A`,`#3A7AC0`,`#C09A2A`],glass:`#7FA8CC`,winColors:[`#ffd27a`,`#9ad6ff`],hMax:4.6,sigma:.36,roofRate:.35,pSplit:.6,nightLit:.55,roofTint:null,coast:{base:.55,out:1,in:.6,jag:1.05},landmarks:[`empireState`,`chrysler`,`liberty`]},{key:`paris`,name:`Paris`,towers:[`#E8DCC0`,`#F2EAD6`,`#E0D2B4`],ground:`#8CC46A`,street:`#A8A29A`,sidewalk:`#D4CEC2`,park:`#6DB35A`,water:`#3FA8C8`,shopfronts:[`#C04A3A`,`#3A6B5A`,`#7A5AC0`],glass:`#5A6B7A`,winColors:[`#ffdca0`,`#ffcaa0`],hMax:1.5,sigma:.9,roofRate:.15,pSplit:.75,nightLit:.45,roofTint:`#6A7886`,coast:{base:1.05,out:.55,in:.3,jag:.5},landmarks:[`eiffel`,`arcDeTriomphe`,`sacreCoeur`]},{key:`neoTokyo`,name:`Neo-Tokyo`,towers:[`#2A3038`,`#3A4250`,`#252B36`,`#4A4456`],ground:`#3A4A42`,street:`#5A6068`,sidewalk:`#7A8088`,park:`#2E5E46`,water:`#0E6878`,shopfronts:[`#E8483A`,`#5AE8E0`,`#E85AA0`],glass:`#5AE8E0`,winColors:[`#5AE8E0`,`#E85AA0`,`#E8E06A`],hMax:5.2,sigma:.42,roofRate:.6,pSplit:.6,nightLit:.7,roofTint:null,coast:{base:.7,out:1.05,in:.62,jag:1.7},landmarks:[`tokyoTower`,`pagoda`,`neonBillboard`]}];Qe.map(e=>e.key);var $e=.3,Y=1.9,et=.55,tt=2.45,nt=.12,rt=.6,X=6,it={BASE:.7,OUT:.95,IN:.55,JAG:1,SAMPLES_PER_EDGE:28,HARBOR_DEPTH:.55,HARBOR_WIDTH:.26},at={PLINTH_TOP:$e,BLOCK:Y,STREET:et,PITCH:tt,SIDEWALK:nt,SHORE:rt,N:X,COAST:it};function ot(e,t,n){let r=n?.base??it.BASE,i=n?.out??it.OUT,a=n?.in??it.IN,o=n?.jag??it.JAG,s=t+r,c=Ze((e^789079)>>>0),l=[2,3,5,8,11,13].map(e=>({k:e,amp:1/e*o**((e-2)/6),phase:c.range(0,Math.PI*2)})),u=l.reduce((e,t)=>e+t.amp,0),d=e=>{let t=0;for(let n of l)t+=n.amp*Math.sin(n.k*e*Math.PI*2+n.phase);return Math.max(-1,Math.min(1,t/(u*.6)))},f=[{fix:+s,nx:1,nz:0,sign:1},{fix:+s,nx:0,nz:1,sign:-1},{fix:-s,nx:-1,nz:0,sign:-1},{fix:-s,nx:0,nz:-1,sign:1}],p=t+.22,m=it.SAMPLES_PER_EDGE,h=4*m,g=[],_=0;for(let e=0;e<4;e++){let t=f[e];for(let n=0;n<m;n++,_++){let o=n/m,c=_/h,l=(-s+2*s*o)*t.sign,u=d(c),f=u>=0?u*i:u*a;if(e===0){let e=Math.abs(o-.5);if(e<it.HARBOR_WIDTH){let t=.5+.5*Math.cos(e/it.HARBOR_WIDTH*Math.PI);f-=(r+it.HARBOR_DEPTH)*t}}let v,y;t.nx===0?(y=t.fix+t.nz*f,v=l,y=t.nz>0?Math.max(y,p):Math.min(y,-p)):(v=t.fix+t.nx*f,y=l,v=t.nx>0?Math.max(v,p):Math.min(v,-p)),g.push(new U(v,y))}}return{points:g,B:s,maxR:s+i,harborX:p}}function st(e){(Array.isArray(e)?e:[e]).forEach(e=>e&&e.dispose&&e.dispose())}function ct({seed:e=1,profileIndex:t=0,landmarkFactory:n=null,windowGlow:r}){let i=new a,o=new a,s=new a;o.raycast=()=>{},s.raycast=()=>{},i.add(o,s);let l=new te(16773594,3);l.position.set(.45,.6,-.65).multiplyScalar(10);let u=new h(7313331,2762272,1);i.add(l,u);let d=0,f=[],p={seed:e,profileIndex:t,profile:Qe[t],extent:0,meshCount:0};function m(e,t,n,r){let i=new S(new V(e,.04,t),J(new x({color:r,roughness:.95,flatShading:!0}),{color:r}));return i.position.y=n,i.userData.ground=!0,i}function g(e,t){for(let e of o.children)e.geometry&&e.geometry.dispose(),st(e.material);o.clear();for(let e of s.children)e.traverse(e=>{e.isMesh&&st(e.material)});s.clear(),f.length=0,d=0;let r=Ze(e),i=Qe[t],a=(X-1)/2*tt,c=7.075;p={seed:e,profileIndex:t,profile:i,extent:c+(i.coast?.base??it.BASE),meshCount:0};let l=ot(e,c,i.coast);p.coast=l;let u=new ee;l.points.forEach((e,t)=>t?u.lineTo(e.x,e.y):u.moveTo(e.x,e.y)),u.closePath();let h=new S(new y(u,{depth:2,bevelEnabled:!1,steps:1}),J(new x({color:i.ground,roughness:.9,flatShading:!0,side:2}),{color:i.ground}));h.rotation.x=-Math.PI/2,h.position.y=$e-2,h.userData.ground=!0,o.add(h);let g=2*7.195;o.add(m(g,g,.32,i.street)),C(l.harborX,i);let T=[];for(let e=0;e<X;e++)for(let t=0;t<X;t++)T.push([e,t]);let E=new Set,D=Math.max(1,Math.round(T.length*.08));for(;E.size<D;)E.add(r.int(0,T.length-1));let O=r.range(-2.45*.6,tt*.6),te=r.range(-2.45*.6,tt*.6),k=Math.hypot(a,a),A=[];if(T.forEach(([e,t],n)=>{let a=(e-(X-1)/2)*tt,s=(t-(X-1)/2)*tt;if(o.add(m(Y,Y,.32999999999999996,i.sidewalk).translateX(a).translateZ(s)),E.has(n)){o.add(m(Y-nt*2,Y-nt*2,.35,i.park).translateX(a).translateZ(s));let e=r.int(3,5);for(let t=0;t<e;t++)w(a+r.range(-.6,.6),s+r.range(-.6,.6),i,r);return}let c=Y-nt*2,l=r.chance(i.pSplit)?2:1,u=r.chance(i.pSplit)?2:1,d=c/l,f=c/u;for(let e=0;e<l;e++)for(let t=0;t<u;t++){let n=a-c/2+d*(e+.5),o=s-c/2+f*(t+.5),l=Math.max(.6,d-.1),u=Math.max(.6,f-.1),p=Math.hypot(n-O,o-te)/k,m=Math.exp(-(p*p)/(2*i.sigma*i.sigma)),h=Math.max(.5,.5+(i.hMax-.5)*m*r.range(.75,1.25));h>i.hMax*.5&&Math.min(l,u)>=.7&&A.push({lx:n,lz:o,fw:l,fd:u,h,r:p}),_(n,o,l,u,h,i,r)}}),n&&n.ready){A.sort((e,t)=>e.r-t.r);let e=[],t=i.landmarks;for(let r=0;r<t.length&&A.length;r++){let a=null;for(let t of A)if(e.every(e=>Math.hypot(e.lx-t.lx,e.lz-t.lz)>tt*.9)){a=t;break}a||=A[0],e.push(a),v(a.lx,a.lz);let o=i.hMax*n.heightFactor(t[r]),c=n.make(t[r],{x:a.lx,z:a.lz,w:a.fw,d:a.fd,h:o,plinthTop:$e});if(c){s.add(c);let e=new ce().setFromObject(c);b(e.min.x-.15,e.max.x+.15,e.min.z-.15,e.max.z+.15)}}}o.traverse(e=>{e.isMesh&&(e.userData.ground?(e.castShadow=!1,e.receiveShadow=!0):e.material&&e.material.isMeshBasicMaterial?(e.castShadow=!1,e.receiveShadow=!1):(e.castShadow=!0,e.receiveShadow=!0))}),s.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),p.meshCount=o.children.length+s.children.length;let j=0;for(let e of o.children){let t=e.position;j=(Math.imul(j,16777619)^(Math.round(t.x*100)*2654435761^Math.round(t.y*100)*40503^Math.round(t.z*100)*2246822519))>>>0}for(let e of p.coast.points)j=(Math.imul(j,16777619)^(Math.round(e.x*100)*2654435761^Math.round(e.y*100)*40503))>>>0;p.sig=j,window.__city={seed:e,profile:i.key,meshes:p.meshCount,sig:j}}function _(e,t,n,i,a,s,l){let u=q(new x({flatShading:!0,roughness:.7,metalness:.05}),{color:l.pick(s.towers),id:++d,windowGlow:r,winColors:s.winColors,litFrac:s.nightLit}),p=new S(new V(n,a,i),u);if(p.position.set(e,$e+a/2,t),p.userData.lot=[e,t],o.add(p),s.roofTint){let r=J(new x({color:s.roofTint,roughness:.85,flatShading:!0}),{color:s.roofTint}),c=new S(new V(n*1.02,.08,i*1.02),r);c.position.set(e,$e+a+.04,t),c.userData.lot=[e,t],o.add(c)}if(a<1.4){let r=l.pick(s.shopfronts),a=new S(new V(n*1.04,.18,i*1.04),J(new x({color:r,roughness:.8,flatShading:!0}),{color:r}));a.position.set(e,.39,t),a.userData.lot=[e,t],o.add(a)}let m=$e+a,h=n,g=i;if(a>s.hMax*.5&&l.chance(.55)){let c=n*l.range(.5,.72),u=i*l.range(.5,.72),f=a*l.range(.18,.4),p=new S(new V(c,f,u),q(new x({flatShading:!0,roughness:.7,metalness:.05}),{color:l.pick(s.towers),id:++d,windowGlow:r,winColors:s.winColors,litFrac:s.nightLit}));p.position.set(e,$e+a+f/2,t),p.userData.lot=[e,t],o.add(p),m=$e+a+f,h=c,g=u}if(a>s.hMax*.45&&l.chance(s.roofRate)){let n=l.chance(.5)?new S(new V(h*.4,.18,g*.4),J(new x({color:`#9a9a9a`,flatShading:!0}),{color:`#9a9a9a`})):new S(new D(h*.18,h*.18,.22,10),J(new x({color:`#b9bec4`,flatShading:!0}),{color:`#b9bec4`}));if(n.position.set(e+l.range(-.1,.1),m+.11,t+l.range(-.1,.1)),n.userData.lot=[e,t],o.add(n),l.chance(.25)){let n=new S(new le(.05,6,5),new c({color:`#ff3b30`,transparent:!0,opacity:1}));n.position.set(e,m+.15,t),n.userData.lot=[e,t],n.raycast=()=>{},o.add(n),f.push({mesh:n,phase:l.range(0,6.28)})}}if(a>s.hMax*.7&&l.chance(.35)){let n=a*l.range(.18,.34),r=new S(new D(.018,.05,n,6),J(new x({color:`#c8ccd2`,flatShading:!0}),{color:`#c8ccd2`}));r.position.set(e,m+n/2,t),r.userData.lot=[e,t],r.raycast=()=>{},o.add(r)}}function v(e,t){for(let n=o.children.length-1;n>=0;n--){let r=o.children[n];r.userData.lot&&Math.abs(r.userData.lot[0]-e)<1e-4&&Math.abs(r.userData.lot[1]-t)<1e-4&&(r.geometry&&r.geometry.dispose(),st(r.material),o.remove(r))}for(let e=f.length-1;e>=0;e--)f[e].mesh.parent||f.splice(e,1)}function b(e,t,n,r){for(let i=o.children.length-1;i>=0;i--){let a=o.children[i];a.userData.lot&&a.position.x>=e&&a.position.x<=t&&a.position.z>=n&&a.position.z<=r&&(a.geometry&&a.geometry.dispose(),st(a.material),o.remove(a))}}function C(e,t){let n=J(new x({color:`#7a5634`,roughness:.95,flatShading:!0}),{color:`#7a5634`}),r=(e,t,r,i)=>{let a=new S(new V(e,.06,t),n);a.position.set(r,$e-.16,i),o.add(a)};r(.24,2,e+.02,0),r(1.3,.22,e+.7,-.72),r(1.3,.22,e+.7,.72)}function w(e,t,n,r){let i=new P(n.park),a=(n,a)=>{let s=i.clone().offsetHSL(0,0,r.range(-.06,.06)).getStyle(),c=new S(new le(n,7,6),J(new x({color:s,flatShading:!0}),{color:s,season:!0}));c.scale.y=.7,c.position.set(e,$e+a,t),c.userData.lot=null,o.add(c)},s=new S(new V(.05,.18,.05),J(new x({color:`#6b4a2a`,flatShading:!0}),{color:`#6b4a2a`}));s.position.set(e,.39,t),o.add(s),a(.22,.28),a(.16,.46)}function T(e){for(let t of f)t.mesh.material.opacity=.35+.65*(.5+.5*Math.sin(e*3+t.phase))}return g(e,t),{group:i,key:l,fill:u,update:T,generate:g,get state(){return p},get extent(){return p.extent},get waterColor(){return p.profile.water},profiles:Qe}}var lt=Math.PI*2,ut=.7,dt=90,ft=[{name:`night`,sun:`#4a6f9e`,intensity:.35,hemiSky:`#26344f`,hemiGround:`#0c1018`,horizon:`#1e2942`,sky:`#36486e`,exposure:.95,outline:`#101a30`,window:1,toonGain:2.6,turbidity:3,rayleigh:1,mie:.004,mieG:.75,gradeTint:`#cfd8ec`,gradeSat:.84,gradeLift:`#05070e`,gradeContrast:1},{name:`dawn`,sun:`#ff9e54`,intensity:2.4,hemiSky:`#8a7686`,hemiGround:`#2a1f1a`,horizon:`#b8512c`,sky:`#ffb070`,exposure:1.05,outline:`#241826`,window:.3,toonGain:2,turbidity:6,rayleigh:3,mie:.025,mieG:.86,gradeTint:`#ffe6cf`,gradeSat:1.05,gradeLift:`#0a0603`,gradeContrast:1.04},{name:`noon`,sun:`#fff4e0`,intensity:4.6,hemiSky:`#9cb8cc`,hemiGround:`#33302a`,horizon:`#5e7689`,sky:`#aacadd`,exposure:1.18,outline:`#0b0a08`,window:0,toonGain:1.7,turbidity:1.6,rayleigh:2.9,mie:.005,mieG:.78,gradeTint:`#d6e6f4`,gradeSat:1.34,gradeLift:`#000000`,gradeContrast:1.26},{name:`dusk`,sun:`#ff6b35`,intensity:2,hemiSky:`#7a566a`,hemiGround:`#281a18`,horizon:`#b0432a`,sky:`#ff8a5a`,exposure:1.05,outline:`#1f1420`,window:.4,toonGain:2,turbidity:7,rayleigh:3.2,mie:.028,mieG:.87,gradeTint:`#ffdcc0`,gradeSat:1.06,gradeLift:`#0c0604`,gradeContrast:1.05}],pt=e=>e-Math.floor(e),Z=(e,t,n)=>e+(t-e)*n,mt=(e,t,n)=>e+(t-e)*(1-Math.exp(-6*n));function ht({t:e=.5}={}){let t=e,n=e,r=!1,i=!1,a=ft.map(e=>({name:e.name,sun:new P(e.sun),hemiSky:new P(e.hemiSky),hemiGround:new P(e.hemiGround),horizon:new P(e.horizon),sky:new P(e.sky),outline:new P(e.outline),intensity:e.intensity,exposure:e.exposure,window:e.window,toonGain:e.toonGain,turbidity:e.turbidity,rayleigh:e.rayleigh,mie:e.mie,mieG:e.mieG,gradeTint:new P(e.gradeTint),gradeLift:new P(e.gradeLift),gradeSat:e.gradeSat,gradeContrast:e.gradeContrast})),o=new M(0,1,0),s=new P(`#fff4e0`),c=new P(`#6f97b3`),l=new P(`#2a2620`),u=new P(`#3a4a57`),d=new P(`#7da3bd`),f=new P(`#0b0a08`),p=new P(`#000000`),m=3,h=1,g=0,_=1.7,v={turbidity:2.2,rayleigh:1.3,mie:.005,mieG:.78},y={tint:new P(`#fafdff`),lift:new P(`#000000`),sat:1.08,contrast:1},b=new M;function x(e){let t=pt(e)*4,n=Math.floor(t)%4,r=(n+1)%4,i=t-Math.floor(t),x=a[n],S=a[r];s.lerpColors(x.sun,S.sun,i),c.lerpColors(x.hemiSky,S.hemiSky,i),l.lerpColors(x.hemiGround,S.hemiGround,i),u.lerpColors(x.horizon,S.horizon,i),d.lerpColors(x.sky,S.sky,i),f.lerpColors(x.outline,S.outline,i),m=Z(x.intensity,S.intensity,i),h=Z(x.exposure,S.exposure,i),g=Z(x.window,S.window,i),_=Z(x.toonGain,S.toonGain,i),v.turbidity=Z(x.turbidity,S.turbidity,i),v.rayleigh=Z(x.rayleigh,S.rayleigh,i),v.mie=Z(x.mie,S.mie,i),v.mieG=Z(x.mieG,S.mieG,i),y.tint.lerpColors(x.gradeTint,S.gradeTint,i),y.lift.lerpColors(x.gradeLift,S.gradeLift,i),y.sat=Z(x.gradeSat,S.gradeSat,i),y.contrast=Z(x.gradeContrast,S.gradeContrast,i),p.setRGB(.045*g,.075*g,.14*g);let C=pt(e)*lt-Math.PI/2,w=Math.cos(C),T=Math.sin(C);b.set(w,T*Math.cos(ut),T*Math.sin(ut)),b.y>=0?o.copy(b):o.copy(b).negate()}return x(t),{sunDir:o,sunColor:s,hemiSky:c,hemiGround:l,horizon:u,sky:d,outline:f,toonFloor:p,skyParams:v,grade:y,sunArc:b,get sunIntensity(){return m},get exposure(){return h},get windowGlow(){return g},get toonGain(){return _},get t(){return pt(t)},get auto(){return r},get clock(){let e=Math.round(pt(t)*24*60)%1440;return`${String(Math.floor(e/60)).padStart(2,`0`)}:${String(e%60).padStart(2,`0`)}`},cyclePreset(){n=(Math.floor(t*4+1e-4)+1)/4},nudge(e){n+=e/24},goTo(e){n=e},toggleAuto(){r=!r},setReducedMotion(e){i=e},update(e){r&&!i&&(n+=e/dt),t=mt(t,n,e),x(t)}}}function gt(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.35,`rgba(255,255,255,0.55)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new ge(e);return r.colorSpace=B,r}function _t(e,t){let n=[];for(let r=0;r<16;r++){let i=r/16*Math.PI*2;n.push(new M(Math.cos(i)*e,t,Math.sin(i)*e))}return new re(n,!0,`catmullrom`,.5)}function Q(e){let t=(t,n)=>Math.exp(-((e-t)*(e-t))/(2*n*n)),n=Math.max(t(.33,.05),t(.75,.06)),r=v.smoothstep(e,.24,.3)*(1-v.smoothstep(e,.8,.88));return v.clamp(.15+.55*r+.45*n,.12,1)}function vt(){let{PITCH:e,N:t,PLINTH_TOP:n}=at,r=t+1,i=n+.04,a=n=>(n-t/2)*e,o=t/2,s=[],c=(e,t)=>t*r+e;for(let e=0;e<r;e++)for(let t=0;t<r;t++)s.push({x:a(t),z:a(e),i:t,j:e,edges:[]});let l=[],u=(t,n)=>{let r=(s[t].i===o||s[t].j===o)&&(s[n].i===o||s[n].j===o),i=l.length;l.push({a:t,b:n,len:e,main:r}),s[t].edges.push(i),s[n].edges.push(i)};for(let e=0;e<r;e++)for(let t=0;t<r;t++)t<r-1&&u(c(t,e),c(t+1,e)),e<r-1&&u(c(t,e),c(t,e+1));return{nodes:s,edges:l,y:i,mid:o}}function yt({plinthTop:e=.3,extent:t=4,profile:n=null}={}){let r=new a,i=vt(),{nodes:o,edges:l}=i,u=i.y,d=.34,f=0;{let e=at.PITCH-d*2;f=Math.max(1,Math.floor((e+.26)/.56))}let p=new c({color:`#e8c84a`,fog:!0}),m=new I(new V(.05,.012,.3),p,l.length*f);m.frustumCulled=!1,m.raycast=()=>{},m.receiveShadow=!1,m.castShadow=!1,r.add(m);{let e=new s,t=0;for(let n of l){let r=o[n.a],i=o[n.b],a=i.x-r.x,s=i.z-r.z,c=Math.hypot(a,s),l=a/c,p=s/c,h=Math.atan2(l,p),g=c-d*2;for(let n=0;n<f;n++){let i=d+(f===1?g/2:g*n/(f-1));e.position.set(r.x+l*i,u,r.z+p*i),e.rotation.set(0,h,0),e.updateMatrix(),m.setMatrixAt(t++,e.matrix)}}m.instanceMatrix.needsUpdate=!0}let h=new I(new V(.34,.26,.74),J(new x({flatShading:!0,roughness:.5,metalness:.3})),12);h.castShadow=!0,h.receiveShadow=!1,h.frustumCulled=!1,h.raycast=()=>{};let g=new oe,y=new Float32Array(72),b=new Float32Array(72),S=new P(`#fff0c0`),C=new P(`#ff3528`);for(let e=0;e<12;e++)S.toArray(b,e*3),C.toArray(b,(12+e)*3),y[e*3+1]=-50,y[(12+e)*3+1]=-50;g.setAttribute(`position`,new k(y,3)),g.setAttribute(`color`,new k(b,3));let w=new _({size:.72,sizeAttenuation:!0,map:gt(),vertexColors:!0,transparent:!0,opacity:0,blending:2,depthWrite:!1}),T=new E(g,w);T.frustumCulled=!1,T.raycast=()=>{},r.add(h,T);let D=[`#f4c430`,`#c0392b`,`#d8dde2`,`#9aa7b4`,`#6b7785`,`#5a7d9a`],O=Xe(2403557),ee=l.map((e,t)=>t).filter(e=>l[e].main),te=[];for(let e=0;e<12;e++){let t=e<4&&ee.length?ee[O()*ee.length|0]:O()*l.length|0,n=e===1;te.push({edge:t,fwd:O()<.5,s:O()*l[t].len,speed:n?.5:.78+e%3*.1,lenZ:n?1.45:1,color:D[n?1:e===0?0:2+e%4],rng:Xe(12648430+e*2654435761),isBus:n,pos:new M,dirX:0,dirZ:1,active:!1})}let A=new P;te.forEach((e,t)=>h.setColorAt(t,A.set(e.color)));function ne(e,t,n){let r=o[e],i=r.edges.filter(e=>e!==t);if(i.length===0)return t;let a=l[t],s=a.a===e?a.b:a.a,c=r.x-o[s].x,u=r.z-o[s].z,d=Math.hypot(c,u)||1,f=i[0],p=-2;for(let t of i){let n=l[t],i=n.a===e?n.b:n.a,a=o[i].x-r.x,s=o[i].z-r.z,m=Math.hypot(a,s)||1,h=c/d*(a/m)+u/d*(s/m);h>p&&(p=h,f=t)}return n()<.65?f:i[n()*i.length|0]}let re=ne,N=new s,ie=(e,t)=>{N.position.set(0,-50,0),N.scale.setScalar(0),N.updateMatrix(),e.setMatrixAt(t,N.matrix)},ae=.085,F=at.PLINTH_TOP+.02+.13,L=new I(new j(.04,.1,3,6),J(new x({flatShading:!0,roughness:.8})),14);L.castShadow=!0,L.receiveShadow=!1,L.frustumCulled=!1,L.raycast=()=>{};let R=_t(t-.72,e),se=[];for(let e=0;e<14;e++)se.push({phase:e/14,speed:.12+e%4*.02,dir:e%2?1:-1,pos:new M,active:!1});let z=new M,B=new M,ce=new P;se.forEach((e,t)=>L.setColorAt(t,ce.set([`#caa`,`#9ab`,`#bba`,`#ab9`][t%4]))),r.add(L);let le={manhattan:`#e8c84a`,paris:`#dcd2bc`,neoTokyo:`#5ae8e0`};function ue(e){e&&p.color.set(le[e.key]||`#e8c84a`)}ue(n);function de(t,n,r){let i=r?r.t:.5,a=r?r.windowGlow:0,s=Math.max(2,Math.round(Q(i)*12)),c=a>.05;for(let e=0;e<12;e++){if(e>=s){ie(h,e),te[e].active=!1,y[e*3+1]=-50,y[(12+e)*3+1]=-50;continue}let n=te[e];n.s+=t*n.speed;let r=0;for(;n.s>=l[n.edge].len&&r++<4;){n.s-=l[n.edge].len;let e=n.fwd?l[n.edge].b:l[n.edge].a,t=re(e,n.edge,n.rng);n.edge=t,n.fwd=l[t].a===e}let i=l[n.edge],a=n.fwd?o[i.a]:o[i.b],u=n.fwd?o[i.b]:o[i.a],d=u.x-a.x,f=u.z-a.z,p=Math.hypot(d,f)||1,m=d/p,g=f/p,_=-g,v=m,b=a.x+m*n.s+_*ae,x=a.z+g*n.s+v*ae,S=Math.atan2(m,g);N.position.set(b,F,x),N.rotation.set(0,S,0),N.scale.set(1,1,n.lenZ),N.updateMatrix(),h.setMatrixAt(e,N.matrix),n.pos.set(b,F,x),n.dirX=m,n.dirZ=g,n.active=!0;let C=.74*n.lenZ*.5,w=F+.06,T=e*3,E=(12+e)*3;c?(y[T]=b+m*(C+.04),y[T+1]=w,y[T+2]=x+g*(C+.04),y[E]=b-m*(C+.02),y[E+1]=w,y[E+2]=x-g*(C+.02)):(y[T+1]=-50,y[E+1]=-50)}h.instanceMatrix.needsUpdate=!0,g.attributes.position.needsUpdate=!0,w.opacity=v.clamp(a*1.8,0,1);let u=Math.max(2,Math.round(Q(i)*14));for(let t=0;t<14;t++){if(t>=u){ie(L,t),se[t].active=!1;continue}let r=se[t],i=(r.phase+r.dir*r.speed*n*.02+1e3)%1;R.getPointAt(i,z),R.getTangentAt(i,B);let a=Math.sin(n*6+r.phase*30)*.015;N.position.set(z.x,e+.09+a,z.z),N.rotation.set(0,Math.atan2(B.x*r.dir,B.z*r.dir),Math.sin(n*6+r.phase*30)*.06),N.scale.setScalar(1),N.updateMatrix(),L.setMatrixAt(t,N.matrix),r.pos.set(z.x,e+.09,z.z),r.active=!0}L.instanceMatrix.needsUpdate=!0}let fe=[...te.map((e,t)=>({kind:`car`,label:e.isBus?`bus`:`car ${t+1}`,getWorldPos:t=>t.copy(e.pos),active:()=>e.active,info:()=>`${e.isBus?`bus`:`car`} · ${l[e.edge].main?`main avenue`:`side street`} → heading ${bt(e.dirX,e.dirZ)}`})),...se.map((e,t)=>({kind:`person`,label:`person ${t+1}`,getWorldPos:t=>t.copy(e.pos),active:()=>e.active,info:()=>`person · strolling the waterfront promenade`}))];function pe(){return fe}return{group:r,update:de,setProfile:ue,getFollowables:pe,graph:i,setRouter(e){re=e||ne}}}function bt(e,t){return[`N`,`NE`,`E`,`SE`,`S`,`SW`,`W`,`NW`][(Math.round(Math.atan2(e,t)/(Math.PI/4))%8+8)%8]}function xt({frames:e,fps:t=8,cols:n,rows:r=1}={}){let i=n||e||4,a=r||1,o=e||i*a,s=typeof window<`u`&&window.matchMedia?window.matchMedia(`(prefers-reduced-motion: reduce)`):null;function c(e,t){let n=t%i,r=Math.floor(t/i);e.offset.x=n/i,e.offset.y=1-(r+1)/a}function l(e){let t=e.clone();return t.needsUpdate=!0,t.repeat.set(1/i,1/a),c(t,0),t}function u(e,n,r=0){if(s&&s.matches)return c(e,0),0;let i=(Math.floor(n*t+r)%o+o)%o;return c(e,i),i}function d(e,t){let n=(Math.round(t)%o+o)%o;return c(e,n),n}return{frames:o,fps:t,cols:i,rows:a,makeInstanceTexture:l,step:u,setFrame:d}}function St(e){if(typeof document>`u`||!e||!e.image)return e;let t=e.image,n=t.width||t.naturalWidth,r=t.height||t.naturalHeight,i=document.createElement(`canvas`);i.width=n,i.height=r;let a=i.getContext(`2d`,{willReadFrequently:!0});a.drawImage(t,0,0,n,r);let o=a.getImageData(0,0,n,r),s=o.data;for(let e=0;e<s.length;e+=4){let t=s[e]*.299+s[e+1]*.587+s[e+2]*.114|0;s[e]=s[e+1]=s[e+2]=t}a.putImageData(o,0,0);let c=new ge(i);return c.colorSpace=e.colorSpace||`srgb`,c}function Ct({url:e,fallback:t,luminance:n=!1,onReady:r}={}){let i=n?St(t):t;return e&&typeof window<`u`&&new R().load(e,e=>{e.colorSpace=B,r&&r(n?St(e):e)},void 0,()=>{}),i}var wt=``+new URL(`gull_diffusion_sheet-BMlUTLhu.png`,import.meta.url).href;function Tt(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.4,`rgba(255,255,255,0.5)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new ge(e);return r.colorSpace=B,r}function Et(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64*.62,0,64/2,64*.62,64*.5);n.addColorStop(0,`rgba(240,250,255,0.95)`),n.addColorStop(1,`rgba(240,250,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new ge(e);return r.colorSpace=B,r}function Dt(){let e=document.createElement(`canvas`);e.width=256,e.height=64;let t=e.getContext(`2d`);t.strokeStyle=`#ffffff`,t.lineWidth=6,t.lineCap=`round`,t.lineJoin=`round`;let n=[14,24,36,24];for(let e=0;e<4;e++){let r=e*64,i=n[e];t.beginPath(),t.moveTo(r+8,40),t.quadraticCurveTo(r+24,i,r+32,36),t.quadraticCurveTo(r+40,i,r+56,40),t.stroke()}let r=new ge(e);return r.colorSpace=B,r}function Ot(e,t,n=18){let r=[];for(let i=0;i<n;i++){let a=i/n*Math.PI*2;r.push(new M(Math.cos(a)*e,t,Math.sin(a)*e))}return new re(r,!0,`catmullrom`,.5)}function kt(e,t,n){let r=e-t,i=[],a=(e,t)=>i.push(new M(e,n,t)),o=(e,n,r,i,o=4)=>{for(let s=1;s<=o;s++){let c=r+(i-r)*(s/o);a(e+Math.cos(c)*t,n+Math.sin(c)*t)}};for(let t=0;t<4;t++)a(e,-r+2*r*t/4);o(r,r,0,Math.PI/2);for(let t=0;t<4;t++)a(r-2*r*t/4,e);o(-r,r,Math.PI/2,Math.PI);for(let t=0;t<4;t++)a(-e,r-2*r*t/4);o(-r,-r,Math.PI,1.5*Math.PI);for(let t=0;t<4;t++)a(-r+2*r*t/4,-e);return o(r,-r,1.5*Math.PI,2*Math.PI),new re(i,!0,`catmullrom`,.5)}function At({extent:e=8,waterSize:t=28,plinthTop:n=.3}={}){let r=new a;r.raycast=()=>{};let i=.06,o=(e,n,r)=>r.set(e/t+.5,-n/t+.5,0),s=[kt(9.5,3,i),Ot(12.7,i),new re([new M(8.4,i,0),new M(11,i,-3.6),new M(13,i,0),new M(11,i,3.6)],!0,`catmullrom`,.5)],c=s.map(e=>e.getLength());function l({scale:e=1,hull:t=`#6b7785`,cabin:n=`#e7ecf2`}){let r=new a,i=new S(new V(.46*e,.2*e,1.1*e),J(new x({color:t,roughness:.6,metalness:.2,flatShading:!0}),{color:t}));i.position.y=.02;let o=new S(new V(.3*e,.22*e,.42*e),J(new x({color:n,roughness:.7,flatShading:!0}),{color:n}));return o.position.set(0,.18*e,.08*e),r.add(i,o),r.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!1),e.raycast=()=>{}}),r.userData.halfLen=.55*e,r}let u=[{laneIndex:0,dir:1,speed:.5,wake:.024,scale:1,hull:`#5a6675`,cabin:`#e7ecf2`},{laneIndex:1,dir:-1,speed:.42,wake:.022,scale:1,hull:`#7a5b46`,cabin:`#d9c3a6`},{laneIndex:0,dir:1,speed:.56,wake:.024,scale:.9,hull:`#456079`,cabin:`#cfe0ee`},{laneIndex:2,dir:1,speed:.34,wake:.03,scale:1.35,hull:`#39505f`,cabin:`#e2b85a`}];u.forEach((e,t)=>{e.mesh=l(e),e.u=t*.27%1,e.phase=t*1.7,e.isFerry=e.laneIndex===2,r.add(e.mesh)});let d=u.length,f=d*2,p=new oe,m=new Float32Array(f*3).fill(-50),h=new Float32Array(f*3),g=new P(`#fff0c0`),y=new P(`#ff3528`);for(let e=0;e<d;e++)g.toArray(h,e*3),y.toArray(h,(d+e)*3);p.setAttribute(`position`,new k(m,3)),p.setAttribute(`color`,new k(h,3));let b=new E(p,new _({size:.6,sizeAttenuation:!0,map:Tt(),vertexColors:!0,transparent:!0,opacity:0,blending:2,depthWrite:!1}));b.frustumCulled=!1,b.raycast=()=>{},r.add(b);function C(e,t){let n=new S(new le(e,9,7),J(new x({color:t,roughness:.5,flatShading:!0}),{color:t}));return n.scale.set(.55,.5,1),n.castShadow=!1,n.receiveShadow=!1,n.raycast=()=>{},n.position.y=-5,n}let w=[{x:-9.5,z:6,size:.18,color:`#5b6f86`,period:11,arcH:.55,span:1.1,whale:!1},{x:7.5,z:-9.5,size:.16,color:`#4a6076`,period:14,arcH:.5,span:1,whale:!1},{x:-7,z:-8.5,size:.2,color:`#607089`,period:9,arcH:.6,span:1.2,whale:!1},{x:10.5,z:7,size:.62,color:`#3a4350`,period:38,arcH:.9,span:2.6,whale:!0}];w.forEach((e,t)=>{e.mesh=C(e.size,e.color),e.heading=Math.atan2(-e.x,-e.z),e.t=t/w.length*e.period,e.splashed=!1,r.add(e.mesh),e.whale&&(e.spout=new me(new A({map:Et(),transparent:!0,opacity:0,depthWrite:!1,fog:!0})),e.spout.scale.set(.6,1.1,1),e.spout.position.set(e.x,-5,e.z),r.add(e.spout))});let T=xt({frames:4,fps:7}),D=[`#ffffff`,`#cfd4da`,`#c8a06a`],O=[],ee=Ct({url:wt,fallback:Dt(),luminance:!0,onReady:e=>{ee=e;for(let t of O){let n=t.sp.material.map;t.sp.material.map=T.makeInstanceTexture(e),t.sp.material.needsUpdate=!0,n&&n.dispose()}typeof window<`u`&&(window.__gullSheet=`diffusion`)}});for(let e=0;e<4;e++){let t=new me(new A({map:T.makeInstanceTexture(ee),color:new P(D[e%D.length]),transparent:!0,opacity:0,depthWrite:!1,fog:!0}));t.scale.setScalar(.5),O.push({sp:t,r:8.6+e*.5,y:1.1+e%2*.5,speed:(.18+e*.03)*(e%2?-1:1),phase:e*1.9}),r.add(t)}typeof window<`u`&&(window.__gullSheet=window.__gullSheet||`procedural`,window.__gullAnim={frames:T.frames,variants:D.length,fps:T.fps});let te=w.length,j=Array.from({length:d+te},()=>new M),ne=e=>e.laneIndex,N=new M,ie=new M,ae=new M;function F(e,t,n){let r=n?n.windowGlow:0,a=1-r;for(let n=0;n<d;n++){let a=u[n],l=s[a.laneIndex],f=c[a.laneIndex],p=a.isFerry?.45+.55*Math.min(1,Math.abs((a.u+.5)%1-.5)*3):1,h=a.u;a.u=(a.u+a.dir*e*a.speed*p/f+1)%1,(a.dir>0?a.u<h:a.u>h)&&(a.laneIndex=ne(a)),l.getPointAt(a.u,N),l.getTangentAt(a.u,ie);let g=ie.x*a.dir,_=ie.z*a.dir,v=Math.atan2(g,_),y=Math.sin(t*1.1+a.phase)*.025;a.mesh.position.set(N.x,i+y,N.z),a.mesh.rotation.set(Math.sin(t*.9+a.phase)*.04,v,0);let b=a.mesh.userData.halfLen;o(N.x-g*b,N.z-_*b,ae),j[n].set(ae.x,ae.y,a.wake);let x=n*3,S=(d+n)*3;if(r>.05){let e=.18;m[x]=N.x+g*(b+.05),m[x+1]=e,m[x+2]=N.z+_*(b+.05),m[S]=N.x-g*(b+.02),m[S+1]=e,m[S+2]=N.z-_*(b+.02)}else m[x+1]=-50,m[S+1]=-50}I(),b.material.opacity=v.clamp(r*1.8,0,1);for(let t=0;t<te;t++){let n=w[t];n.t+=e;let r=d+t,a=n.whale?3.2:1.3;if(n.t>=n.period){let e=(n.t-n.period)/a;if(e>=1){n.t=0,n.splashed=!1,n.mesh.position.y=-5,n.spout&&(n.spout.material.opacity=0),j[r].set(0,0,0);continue}let t=Math.sin(Math.PI*e),s=(e-.5)*n.span,c=n.x+Math.sin(n.heading)*s,l=n.z+Math.cos(n.heading)*s;n.mesh.position.set(c,i-.1+t*n.arcH,l),n.mesh.rotation.set(Math.cos(Math.PI*e)*.9,n.heading,0);let u=e<.16||e>.84;if(o(c,l,ae),j[r].set(ae.x,ae.y,u?n.whale?.07:.05:0),n.spout){let t=v.clamp((e-.15)*3,0,1)*(1-e);n.spout.position.set(c,.56+t*.6,l),n.spout.material.opacity=t*.9}}else n.mesh.position.y=-5,j[r].set(0,0,0),n.spout&&(n.spout.material.opacity=0)}for(let e=0;e<4;e++){let n=O[e],r=n.phase+t*n.speed*.25;n.sp.position.set(Math.cos(r)*n.r,n.y+Math.sin(t*1.4+n.phase)*.12,Math.sin(r)*n.r),n.sp.material.opacity=v.clamp(a*.9-.05,0,.85);let i=T.step(n.sp.material.map,t,n.phase);e===0&&typeof window<`u`&&(window.__gullFrame=i)}if(typeof window<`u`){let e=0;for(let t of w)t.mesh.position.y>i&&e++;window.__waterLife={boats:d,breaching:e,gulls:+O[0].sp.material.opacity.toFixed(2),lights:+b.material.opacity.toFixed(2)}}}function I(){p.attributes.position.needsUpdate=!0}function L(){return j.length}let R=[...u.map((e,t)=>({kind:`boat`,label:e.isFerry?`ferry`:`boat ${t+1}`,getWorldPos:t=>t.copy(e.mesh.position),info:()=>e.isFerry?`boat · harbor ferry → docks`:`boat · open-water lane ${e.laneIndex}`})),...O.map((e,t)=>({kind:`gull`,label:`gull ${t+1}`,getWorldPos:t=>t.copy(e.sp.position),active:()=>e.sp.material.opacity>.05,info:()=>`gull · circling the coast`})),...w.map((e,t)=>({kind:`fish`,label:e.whale?`whale`:`fish ${t+1}`,getWorldPos:t=>t.copy(e.mesh.position),active:()=>e.mesh.position.y>i-.3,info:()=>e.mesh.position.y>i?e.whale?`whale · breaching!`:`fish · breaching!`:`fish · below the surface`}))];function se(){return R}return{group:r,update:F,getFollowables:se,wakeDrops:j,get wakeCount(){return L()},lanes:s,setRouter(e){ne=e||(e=>e.laneIndex)}}}var jt=[`empireState`,`chrysler`,`liberty`,`eiffel`,`arcDeTriomphe`,`sacreCoeur`,`tokyoTower`,`pagoda`,`neonBillboard`],Mt={empireState:1.25,chrysler:1.1,liberty:.55,eiffel:3.2,arcDeTriomphe:1.5,sacreCoeur:1.75,tokyoTower:1.35,pagoda:.5,neonBillboard:.9};function Nt(e){let t=()=>new x({flatShading:!0,roughness:.7,metalness:.1}),n=(n,r={})=>r.windows?q(t(),{color:n,id:e.id(),windowGlow:e.windowGlow,winColors:e.winColors,litFrac:e.litFrac}):J(t(),{color:n,glow:r.glow??null,glowDay:r.glowDay??0,glowNight:r.glowNight??1,windowGlow:r.glow?e.windowGlow:null});return{box:(e,t,r,i,a={})=>new S(new V(e,t,r),n(i,a)),cyl:(e,t,r,i,a={})=>new S(new D(e,t,r,a.seg||12),n(i,a)),cone:(e,t,r,i={})=>new S(new ie(e,t,i.seg||8),n(r,i)),sphere:(e,t,r={})=>new S(new le(e,r.seg||12,r.seg2||8),n(t,r)),lathe:(e,t,r={})=>new S(new p(e.map(e=>new U(e[0],e[1])),r.seg||4),n(t,r))}}var $=(e,t,n,r)=>(e.position.set(t,n,r),e),Pt=[`#7FB0E0`,`#E07FB0`,`#7FE0A0`,`#E0C97F`,`#9FE07F`,`#7FE0E0`,`#FF8C42`,`#E0E07F`,`#C97FE0`,`#E07F7F`,`#7F9FE0`,`#E0483A`],Ft={empireState(e,t){let n=`#E8E0CF`;e.add($(t.box(.42,.18,.42,n,{windows:!0}),0,.09,0)),e.add($(t.box(.34,.16,.34,n,{windows:!0}),0,.26,0)),e.add($(t.box(.26,.14,.26,n,{windows:!0}),0,.41,0)),e.add($(t.box(.19,.34,.19,n,{windows:!0}),0,.65,0)),e.add($(t.box(.13,.06,.13,n,{windows:!0}),0,.85,0));let r=Pt[new Date().getMonth()];e.add($(t.cyl(.03,.045,.12,n,{seg:10,glow:r,glowNight:1.85}),0,.94,0)),e.add($(t.cone(.012,.07,n,{seg:8}),0,1.04,0))},chrysler(e,t){let n=`#C9CED4`;e.add($(t.box(.22,.55,.22,`#9AA7B4`,{windows:!0}),0,.275,0));let r=.55;for(let i=0;i<5;i++){let a=.14-i*.024,o=.07;e.add($(t.cyl(a*.7,a,o,n,{seg:8,glow:`#dfeaff`,glowNight:.5}),0,r+o/2,0)),r+=o}e.add($(t.cone(.018,.16,n,{seg:8}),0,r+.08,0))},liberty(e,t){let n=`#B9B4A6`,r=`#4FA890`;e.add($(t.box(.42,.16,.42,n),0,.08,0)),e.add($(t.box(.3,.2,.3,n),0,.26,0)),e.add($(t.cyl(.1,.15,.42,r,{seg:10}),0,.57,0)),e.add($(t.box(.11,.1,.11,r),0,.83,0));for(let n=0;n<7;n++){let i=(n/6-.5)*Math.PI*1.1;e.add($(t.cone(.012,.1,r,{seg:5}),Math.sin(i)*.1,.92,Math.cos(i)*.06-.02))}let i=$(t.cyl(.025,.03,.34,r,{seg:8}),.14,.98,0);i.rotation.z=.35,e.add(i),e.add($(t.box(.06,.06,.06,r,{glow:`#ffd060`,glowDay:.6,glowNight:1.2}),.2,1.16,0)),e.add($(t.cone(.04,.09,`#ffcf66`,{seg:6,glow:`#ffd060`,glowDay:.7,glowNight:1.3}),.2,1.24,0))},eiffel(e,t){let n=`#6E5C4C`,r=[[.2,0],[.13,.16],[.085,.33],[.055,.5],[.035,.66],[.02,.85],[0,.92]];e.add(t.lathe(r,n,{seg:4}));let i=t.lathe(r,n,{seg:4});i.rotation.y=Math.PI/4,e.add(i),e.add($(t.box(.26,.025,.26,n),0,.33,0)),e.add($(t.box(.14,.02,.14,n),0,.66,0)),e.add($(t.cone(.01,.1,n,{seg:6}),0,.97,0))},arcDeTriomphe(e,t){let n=`#D9D0C1`,r=.58,i=.5,a=.34,o=new ee;o.moveTo(-.58/2,0),o.lineTo(r/2,0),o.lineTo(r/2,i),o.lineTo(-.58/2,i),o.lineTo(-.58/2,0);let s=new de,c=.15,l=.22;s.moveTo(-.15,0),s.lineTo(-.15,l),s.absarc(0,l,c,Math.PI,0,!0),s.lineTo(c,0),s.lineTo(-.15,0),o.holes.push(s);let u=new y(o,{depth:a,bevelEnabled:!1});u.translate(0,0,-.34/2),u.computeVertexNormals(),e.add(new S(u,J(new x({color:n,flatShading:!0}),{color:n}))),e.add($(t.box(r*1.06,.08,a*1.06,n),0,.54,0))},sacreCoeur(e,t){let n=`#F1EEE6`;e.add($(t.box(.5,.26,.4,n),0,.13,0));let r=(r,i,a,o)=>{e.add($(t.cyl(a*.9,a,i,n,{seg:12}),r,o,0));let s=$(t.sphere(a,n,{seg:12}),r,o+i/2,0);s.scale.y=1.5,e.add(s)};r(0,.22,.15,.4),r(-.2,.1,.07,.33),r(.2,.1,.07,.33)},tokyoTower(e,t){let n=`#F25822`,r=`#EDEDED`,i=0;for(let a=0;a<9;a++){let o=a/9,s=(a+1)/9,c=.19*(1-o)+.03*o,l=.19*(1-s)+.03*s,u=.085,d=a%2?r:n;e.add($(t.cyl(l,c,u,d,{seg:4,glow:n,glowDay:0,glowNight:.7}),0,i+u/2,0)),i+=u}e.add($(t.box(.22,.02,.22,n,{glow:n,glowNight:.7}),0,.28,0)),e.add($(t.box(.12,.02,.12,r),0,.5,0)),e.add($(t.cone(.012,.16,r,{seg:6,glow:`#ff6a2a`,glowNight:.9}),0,i+.08,0))},pagoda(e,t){let n=0;for(let r=0;r<5;r++){let i=.42-r*.06,a=.11;e.add($(t.box(i,a,i,`#B23A2C`,{windows:r<4}),0,n+a/2,0)),e.add($(t.box(i*1.34,.03,i*1.34,`#7A3B2A`),0,n+a+.015,0)),n+=.16999999999999998}e.add($(t.cyl(.012,.012,.1,`#E0C040`,{seg:6}),0,n+.05,0)),e.add($(t.sphere(.03,`#E0C040`,{seg:8,glow:`#ffe680`,glowNight:.8}),0,n+.12,0))},neonBillboard(e,t){let n=`#20242C`;e.add($(t.box(.3,1,.3,n,{windows:!0}),0,.5,0));let r=[`#5AE8E0`,`#E85AA0`,`#E8E06A`],i=(n,r,i,a,o,s,c)=>{let l=$(t.box(n,r,.02,i,{glow:i,glowDay:.6,glowNight:1.1}),a,o,s);l.rotation.y=c,e.add(l)};i(.22,.34,r[0],0,.75,.16,0),i(.16,.5,r[1],.16,.5,0,Math.PI/2),i(.2,.22,r[2],0,.34,-.16,0),e.add($(t.cone(.01,.14,n,{seg:6,glow:`#E85AA0`,glowDay:.4,glowNight:1}),0,1.08,0))}};function It(e,t){let n=new a;return Ft[e](n,Nt(t)),n}var Lt=``+new URL(`building-skyscraper-d-CapD2Zqe.glb`,import.meta.url).href,Rt=``+new URL(`building-n-hdv8kKtN.glb`,import.meta.url).href,zt=``+new URL(`building-g-CsTB1qH9.glb`,import.meta.url).href,Bt=``+new URL(`colormap-CK8fW2HB.png`,import.meta.url).href,Vt={skyscraper:{url:Lt,color:`#9cc1dd`,fill:.92},midrise:{url:Rt,color:`#c9a07a`,fill:.96},setback:{url:zt,color:`#d9c7a0`,fill:.9}};function Ht({windowGlow:e}){let t=new f;t.setURLModifier(e=>e.includes(`colormap.png`)?Bt:e);let n=new z(t),r={},i=!1,a=Promise.all(Object.entries(Vt).map(async([e,t])=>{r[e]=(await n.loadAsync(t.url)).scene})).then(()=>{i=!0,window.__landmarksReady=!0}).catch(e=>console.error(`landmark models failed:`,e)),o=9e3;function s(t,n,i={}){let a,s;if(jt.includes(t))a=It(t,{windowGlow:e,winColors:i.winColors,litFrac:i.litFrac,id:()=>++o}),s=1;else{let e=r[t],n=Vt[t];if(!e||!n)return null;a=e.clone(!0),s=n.fill}a.updateMatrixWorld(!0);let c=new ce().setFromObject(a).getSize(new M);a.scale.setScalar(n.h*s/c.y),a.updateMatrixWorld(!0);let l=new ce().setFromObject(a),u=l.getCenter(new M);return a.position.x+=n.x-u.x,a.position.z+=n.z-u.z,a.position.y+=n.plinthTop-l.min.y,jt.includes(t)?a.traverse(e=>{e.isMesh&&(e.castShadow=!1,e.raycast=()=>{})}):a.traverse(n=>{if(!n.isMesh)return;n.castShadow=!1,n.raycast=()=>{};let r=n=>q(n.clone(),{color:Vt[t].color,id:++o,windowGlow:e,winColors:i.winColors,litFrac:i.litFrac});n.material=Array.isArray(n.material)?n.material.map(r):r(n.material)}),a}return{make:s,whenReady:a,heightFactor:e=>Mt[e]??1,get ready(){return i}}}var Ut=[`clear`,`rain`,`snow`,`fog`];function Wt({extent:e=7}={}){let t=new a;t.raycast=()=>{};let n=e+2,r=.25,i=(e,t)=>e+Math.random()*(t-e),o=new I(new w(.015,.5),new c({color:`#a9bdd6`,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),600);o.frustumCulled=!1,o.raycast=()=>{};let l=new Float32Array(600*3),u=new Float32Array(600);for(let e=0;e<600;e++)l[e*3]=i(-n,n),l[e*3+1]=i(r,11),l[e*3+2]=i(-n,n),u[e]=i(9,14);let d=new I(new w(.07,.07),new c({color:`#f3f7ff`,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),700);d.frustumCulled=!1,d.raycast=()=>{};let f=new Float32Array(700*3),p=new Float32Array(700),m=new Float32Array(700);for(let e=0;e<700;e++)f[e*3]=i(-n,n),f[e*3+1]=i(r,11),f[e*3+2]=i(-n,n),p[e]=i(0,6.28),m[e]=i(.6,1.2);t.add(o,d);let h=Array.from({length:8},()=>new M),g=0,_=`clear`,v=0,y=0,b=0,x=0,S=0,C=new s,T=(e,t,n,r)=>e+(t-e)*Math.min(1,n*r);function E(e){Ut.includes(e)&&(_=e)}function D(){_=Ut[(Ut.indexOf(_)+1)%Ut.length]}function O(e,t){let a=_===`rain`,s=_===`snow`,c=_===`fog`,w=_!==`clear`;v=T(v,+!!w,e,1.4),y=T(y,+!!w,e,1.2),b=T(b,+!!c,e,.9),S=T(S,w&&!c?1:0,e,1),x=T(x,+!!s,e,s?.22:.5);let E=a?v:0,D=Math.round(600*E);for(let t=0;t<600;t++){if(t>=D){C.position.set(0,-50,0),C.scale.setScalar(0),C.updateMatrix(),o.setMatrixAt(t,C.matrix);continue}l[t*3+1]-=u[t]*e,l[t*3]+=e*1.1,l[t*3+1]<r&&(l[t*3]=i(-n,n),l[t*3+1]=11,l[t*3+2]=i(-n,n)),C.position.set(l[t*3],l[t*3+1],l[t*3+2]),C.rotation.set(0,0,0),C.scale.set(1,1,1),C.updateMatrix(),o.setMatrixAt(t,C.matrix)}o.instanceMatrix.needsUpdate=!0,o.material.opacity=.55*E,g=a?Math.round(8*v):0;for(let e=0;e<g;e++)h[e].set(Math.random(),Math.random(),.05*v);let O=Math.round(700*(s?v:0));for(let a=0;a<700;a++){if(a>=O){C.position.set(0,-50,0),C.scale.setScalar(0),C.updateMatrix(),d.setMatrixAt(a,C.matrix);continue}f[a*3+1]-=m[a]*e;let o=Math.sin(t*1.5+p[a])*.5;f[a*3+1]<r&&(f[a*3]=i(-n,n),f[a*3+1]=11,f[a*3+2]=i(-n,n)),C.position.set(f[a*3]+o,f[a*3+1],f[a*3+2]),C.rotation.set(0,0,0),C.scale.setScalar(1),C.updateMatrix(),d.setMatrixAt(a,C.matrix)}d.instanceMatrix.needsUpdate=!0,d.material.opacity=.9*(s?v:0)}return{group:t,update:O,cycle:D,setKind:E,rainDrops:h,get kind(){return _},get intensity(){return v},get overcast(){return y},get fog(){return b},get snow(){return x},get cloud(){return S},get rainDropCount(){return g},poolCounts:{rain:600,snow:700}}}function Gt(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=(e,n,r)=>{let i=t.createRadialGradient(e,n,0,e,n,r);i.addColorStop(0,`rgba(255,255,255,0.95)`),i.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=i,t.beginPath(),t.arc(e,n,r,0,7),t.fill()};n(128*.42,128*.56,128*.26),n(128*.6,128*.5,128*.3),n(128*.5,128*.46,128*.22),n(128*.34,128*.54,128*.18),n(128*.7,128*.58,128*.18);let r=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5],i=t.getImageData(0,0,128,128),a=i.data;for(let e=0;e<128;e++)for(let t=0;t<128;t++){let n=(e*128+t)*4,i=a[n+3]/255,o=(r[e%4*4+t%4]+.5)/16-.5;a[n+3]=Math.max(0,Math.min(1,Math.floor(i*5+.5+o)/5))*255}t.putImageData(i,0,0);let o=new ge(e);return o.colorSpace=B,o}function Kt({extent:e=8,count:t=16}={}){let n=new a;n.raycast=()=>{};let r=Gt(),i=e+6,o=(e,t)=>e+Math.random()*(t-e),s=[];for(let e=0;e<t;e++){let e=new A({map:r,transparent:!0,depthWrite:!1,opacity:0,fog:!0}),t=new me(e),a={sp:t,mat:e,wisp:Math.random(),x:o(-i,i),z:o(-i,i),hiY:o(4,6.8),loY:o(.6,2.2),w:o(3,5.6),h:o(1.7,3),speed:o(.25,.7),op:o(.6,1)};t.raycast=()=>{},s.push(a),n.add(t)}let c=new P,l=new P(`#ffffff`),u=new P(`#5b626e`);function d(e,t,n,r){let a=r?r.cloud:0,d=r?r.fog:0,f=Math.min(1,.4+.6*a+.5*d);c.copy(n.sky).lerp(l,.62),c.lerp(u,.6*a);for(let n=0;n<s.length;n++){let r=s[n],l=n/s.length<f;r.x+=r.speed*e*(.6+.8*a),r.x>i&&(r.x=-i,r.z=o(-i,i));let u=Math.min(qt(r.x,-i,-i+3),1-qt(r.x,i-3,i)),p=r.hiY*(1-d)+r.loY*d,m=1-.5*r.wisp,h=.72*Math.max(0,1-d-a)+1*a+.42*d,g=l?Math.max(0,h)*r.op*m*u:0;r.mat.opacity+=(g-r.mat.opacity)*Math.min(1,e*2.5),r.mat.color.copy(c);let _=r.w*(1+.6*d)*(1+.4*r.wisp),v=r.h*(1-.35*d);r.sp.scale.set(_,v,1),r.sp.position.set(r.x,p+Math.sin(t*.3+n)*.15,r.z)}}function f(e){r=e;for(let t of s)t.mat.map=e,t.mat.needsUpdate=!0}let p=s.map((e,t)=>({kind:`cloud`,label:`cloud ${t+1}`,getWorldPos:t=>t.copy(e.sp.position),active:()=>e.mat.opacity>.06,info:()=>`cloud · ${e.wisp>.6?`wispy`:`puffy`} · drifting east${e.sp.position.y<3?` (low mist)`:``}`}));function m(){return p}return{group:n,update:d,setTexture:f,getFollowables:m,get count(){return s.length}}}function qt(e,t,n){let r=Math.max(0,Math.min(1,(e-t)/(n-t)));return r*r*(3-2*r)}var Jt={person:4.5,car:6,gull:6,fish:8,boat:9,cloud:16};function Yt({rig:e,getCamera:t,sources:n=[]}){let r=null,i=new M,a=new M,o=()=>{let e=[];for(let t of n)if(t&&t.getFollowables){let n=t.getFollowables();n&&e.push(...n)}return e},s=e=>!e.active||e.active();function c(t){return t?(r=t,e.setFollow(e=>t.getWorldPos(e),{frame:t.frame??Jt[t.kind]??8}),t):null}function l(){r=null,e.clearFollow()}function u(e,n,r=.14){let l=t(),u=null,d=r;for(let t of o()){if(!s(t)||(t.getWorldPos(i),a.copy(i).project(l),a.z>1||a.z<-1))continue;let r=Math.hypot(a.x-e,a.y-n);r<d&&(d=r,u=t)}return u?c(u):null}function d(e=1,t=null){let n=o().filter(e=>(!t||e.kind===t)&&s(e));if(t||(n=Xt(n)),!n.length)return null;let i=r?n.indexOf(r):-1;return i=((i+e)%n.length+n.length)%n.length,c(n[i])}function f(){r&&r.active&&!r.active()&&l()}return{pickAt:u,cycle:d,follow:c,release:l,prune:f,get focus(){return r},get count(){return o().length},get readout(){return r?{kind:r.kind,label:r.label,info:r.info?r.info():``}:null}}}function Xt(e){let t=new Map;for(let n of e)t.has(n.kind)||t.set(n.kind,[]),t.get(n.kind).push(n);let n=[...t.values()],r=[];for(let e=0,t=!0;t;e++){t=!1;for(let i of n)e<i.length&&(r.push(i[e]),t=!0)}return r}function Zt(e){let t=Xe(e>>>0),n=new Uint8Array(256);for(let e=0;e<256;e++)n[e]=e;for(let e=255;e>0;e--){let r=t()*(e+1)|0,i=n[e];n[e]=n[r],n[r]=i}let r=new Uint8Array(512);for(let e=0;e<512;e++)r[e]=n[e&255];let i=e=>e*e*e*(e*(e*6-15)+10),a=(e,t,n)=>e+(t-e)*n,o=(e,t,n)=>{let r=e&4?n:t,i=e&4?t:n;return(e&1?-r:r)+(e&2?-i:i)};return(e,t)=>{let n=Math.floor(e)&255,s=Math.floor(t)&255,c=e-Math.floor(e),l=t-Math.floor(t),u=i(c),d=i(l),f=r[r[n]+s],p=r[r[n]+s+1],m=r[r[n+1]+s],h=r[r[n+1]+s+1];return a(a(o(f,c,l),o(m,c-1,l),u),a(o(p,c,l-1),o(h,c-1,l-1),u),d)}}function Qt(e,t,n,r,i,a){let o=.5,s=1,c=0,l=0;for(let u=0;u<r;u++)c+=o*e(t*s,n*s),l+=o,o*=a,s*=i;return c/l}function $t(e,t,n,r,i,a){let o=.5,s=1,c=0,l=0;for(let u=0;u<r;u++){let r=1-Math.abs(e(t*s,n*s));r*=r,c+=o*r,l+=o,o*=a,s*=i}return c/l}var en=(e,t,n)=>(n=Math.max(0,Math.min(1,(n-e)/(t-e))),n*n*(3-2*n)),tn=[{key:`ocean`,color:`#2a5b7a`},{key:`beach`,color:`#d8c89a`},{key:`grassland`,color:`#6f9a4e`},{key:`forest`,color:`#3f6b3a`},{key:`hills`,color:`#8a8a55`},{key:`rock`,color:`#7d7468`},{key:`snow`,color:`#eef2f6`}],nn=Object.fromEntries(tn.map((e,t)=>[e.key,t]));function rn(e,t,n){if(e<n-.015)return nn.ocean;if(e<n+.02)return nn.beach;let r=(e-n)/(1-n);return r>.82?nn.snow:r>.6?nn.rock:r>.34?t>.45?nn.forest:nn.hills:t>.55?nn.forest:nn.grassland}var an={valley:{freq:2.3,mtnMask:.3,mtnGain:.55,sea:.3,relief:7.5,warp:.9},archipelago:{freq:3.4,mtnMask:.18,mtnGain:.4,sea:.5,relief:6,warp:1.3},mountains:{freq:2,mtnMask:.62,mtnGain:.85,sea:.26,relief:11,warp:.8},plains:{freq:1.8,mtnMask:.12,mtnGain:.3,sea:.28,relief:4.5,warp:.7}},on=Object.keys(an);function sn({seed:e=1,size:t=160,preset:n=`valley`,params:r=null}={}){let i=r||an[n]||an.valley,a=Zt(e*2+1),o=Zt(e*5+9),s=Zt(e*7+13),c=Zt(e*3+5),l=new Float32Array(t*t),u=new Uint8Array(t*t),d=1/0,f=-1/0;for(let e=0;e<t;e++)for(let n=0;n<t;n++){let r=(n/t-.5)*i.freq,p=(e/t-.5)*i.freq,m=r+i.warp*Qt(c,r+5.2,p+1.3,4,2,.5),h=p+i.warp*Qt(c,r+9.7,p+4.1,4,2,.5),g=Qt(a,m,h,6,2,.5)*.5+.5,_=en(.45,.75,Qt(o,r*.5,p*.5,3,2,.5)*.5+.5),v=$t(a,m*1.7+11,h*1.7+7,5,2,.5);g=g*(1-_*i.mtnMask)+v*(_*i.mtnMask*(.6+i.mtnGain));let y=n/t-.5,b=e/t-.5,x=Math.sqrt(y*y+b*b)*2;g-=en(.62,1,x)*.55,g=Math.max(0,Math.min(1,g));let S=Qt(s,r*.8+3,p*.8+8,4,2,.5)*.5+.5,C=e*t+n;l[C]=g,u[C]=rn(g,S,i.sea),g<d&&(d=g),g>f&&(f=g)}return{size:t,height:l,biome:u,sea:i.sea,relief:i.relief,minH:d,maxH:f,params:i,seed:e,preset:n}}var cn=tn.map(e=>new P(e.color)),ln=new P,un=new M,dn=new M,fn=new M;function pn(e,t,n,r,i,a,o){let{size:s,height:c,biome:l,sea:u,relief:d}=e,{cell:f,half:p,baseY:m}=t,h=e=>e*f-p,g=e=>e*f-p,_=e=>m+(e-u)*d,v=0,y=(e,t,n,s,c,l,u,d,f,p)=>{un.set(s-e,c-t,l-n),dn.set(u-e,d-t,f-n),fn.crossVectors(un,dn).normalize();for(let[m,h,g]of[[e,t,n],[s,c,l],[u,d,f]])r[v*3]=m,r[v*3+1]=h,r[v*3+2]=g,i[v*3]=fn.x,i[v*3+1]=fn.y,i[v*3+2]=fn.z,o&&(a[v*3]=p.r,a[v*3+1]=p.g,a[v*3+2]=p.b),v++};for(let e=n.j0;e<n.j1;e++)for(let t=n.i0;t<n.i1;t++){let n=h(t),r=h(t+1),i=g(e),a=g(e+1),o=_(c[e*s+t]),u=_(c[e*s+t+1]),d=_(c[(e+1)*s+t]),f=_(c[(e+1)*s+t+1]),p=cn[l[e*s+t]],m=cn[l[(e+1)*s+t+1]];y(n,o,i,n,d,a,r,u,i,ln.copy(p)),y(r,u,i,n,d,a,r,f,a,ln.copy(m))}}function mn(e,{worldSize:t=26,baseY:n=0,chunks:r=4}={}){let{size:i}=e,o=new a,s={cell:t/(i-1),half:t/2,baseY:n};o.userData.world=s;let c=Math.ceil((i-1)/r);for(let t=0;t<r;t++)for(let n=0;n<r;n++){let r=n*c,a=t*c,l=Math.min(r+c,i-1),u=Math.min(a+c,i-1);if(l<=r||u<=a)continue;let d={i0:r,j0:a,i1:l,j1:u},f=(l-r)*(u-a)*6,p=new Float32Array(f*3),m=new Float32Array(f*3),h=new Float32Array(f*3);pn(e,s,d,p,m,h,!0);let g=new oe;g.setAttribute(`position`,new k(p,3)),g.setAttribute(`normal`,new k(m,3)),g.setAttribute(`color`,new k(h,3)),g.computeBoundingSphere();let _=new S(g,new x({vertexColors:!0,roughness:.92,metalness:0,flatShading:!0}));_.castShadow=!0,_.receiveShadow=!0,_.userData.chunk=d,o.add(_)}return o.userData.dispose=()=>o.traverse(e=>{e.isMesh&&(e.geometry.dispose(),e.material.dispose())}),o}function hn(e,t,n,r=!1){let i=e.userData.world;for(let e of n){let n=e.geometry;pn(t,i,e.userData.chunk,n.attributes.position.array,n.attributes.normal.array,n.attributes.color.array,r),n.attributes.position.needsUpdate=!0,n.attributes.normal.needsUpdate=!0,r&&(n.attributes.color.needsUpdate=!0),n.computeBoundingSphere()}}var gn={beach:[{type:`rock`,density:.05,maxSlope:1.4}],grassland:[{type:`tree`,density:.1,maxSlope:.7},{type:`tuft`,density:.3,maxSlope:.9}],forest:[{type:`tree`,density:.62,maxSlope:.8},{type:`rock`,density:.03,maxSlope:1.2}],hills:[{type:`tree`,density:.14,maxSlope:.7},{type:`rock`,density:.16,maxSlope:1.6}],rock:[{type:`rock`,density:.22,maxSlope:2}]};function _n({terrain:e,seed:t=1,worldSize:n=26,baseY:r=0,biomeKeys:i,density:a=1,max:o=9e3}={}){let{size:s,height:c,biome:l,sea:u,relief:d}=e,f=Xe((t^97155048)>>>0),p=n/(s-1),m=n/2,h=e=>r+(e-u)*d,g=(e,t)=>{let n=Math.max(1,Math.min(s-2,e)),r=Math.max(1,Math.min(s-2,t)),i=(c[r*s+n+1]-c[r*s+n-1])*d/(2*p),a=(c[(r+1)*s+n]-c[(r-1)*s+n])*d/(2*p);return Math.hypot(i,a)},_={tree:[],rock:[],tuft:[]};for(let e=1;e<s-1;e+=2)for(let t=1;t<s-1;t+=2){let n=e*s+t,r=c[n];if(r<u+.005)continue;let d=gn[i[l[n]]];if(!d)continue;let v=g(t,e);for(let n of d){let i=f();if(v>n.maxSlope||i>n.density*a)continue;let s=_[n.type];if(s.length>=o)continue;let c=(f()-.5)*p*2,l=(f()-.5)*p*2,u=t*p-m+c,d=e*p-m+l;s.push({x:u,y:h(r),z:d,s:.7+f()*.6,r:f()*Math.PI*2,t:.82+f()*.36})}}return{placements:_,counts:{tree:_.tree.length,rock:_.rock.length,tuft:_.tuft.length}}}function vn(e,t){let n=new P(t),r=e.attributes.position.count,i=new Float32Array(r*3);for(let e=0;e<r;e++)i[e*3]=n.r,i[e*3+1]=n.g,i[e*3+2]=n.b;return e.setAttribute(`color`,new k(i,3)),e}function yn(e){let t=0;for(let n of e)t+=n.attributes.position.count;let n=new Float32Array(t*3),r=new Float32Array(t*3),i=new Float32Array(t*3),a=0;for(let t of e)n.set(t.attributes.position.array,a*3),r.set(t.attributes.normal.array,a*3),i.set(t.attributes.color.array,a*3),a+=t.attributes.position.count;let o=new oe;return o.setAttribute(`position`,new k(n,3)),o.setAttribute(`normal`,new k(r,3)),o.setAttribute(`color`,new k(i,3)),o}function bn(){return yn([vn(new D(.045,.06,.34,6).translate(0,.17,0).toNonIndexed(),`#5b3f28`),vn(new ie(.3,.55,7).translate(0,.55,0).toNonIndexed(),`#3f7d3a`),vn(new ie(.22,.42,7).translate(0,.85,0).toNonIndexed(),`#4f9046`)])}function xn(){let e=new L(.18,0).toNonIndexed(),t=e.attributes.position,n=Xe(3098);for(let e=0;e<t.count;e++){let r=.78+n()*.5;t.setXYZ(e,t.getX(e)*r,t.getY(e)*r*.8,t.getZ(e)*r)}return e.computeVertexNormals(),vn(e,`#7d7468`)}function Sn(){return vn(new ie(.06,.16,4).translate(0,.08,0).toNonIndexed(),`#6f9a4e`)}function Cn(r){let i=new a;i.raycast=()=>{};let o={tree:bn(),rock:xn(),tuft:Sn()},s={tree:0,rock:-.05,tuft:0},c=new n,l=new e,u=new M,d=new M,f=new M(0,1,0),p=new P;for(let e of[`tree`,`rock`,`tuft`]){let n=r[e];if(!n||!n.length)continue;let a=new x({vertexColors:!0,roughness:.9,metalness:0,flatShading:!0}),m=new I(o[e],a,n.length);m.castShadow=!0,m.receiveShadow=!1,m.frustumCulled=!0,m.raycast=()=>{},m.userData.type=e,m.instanceColor=new t(new Float32Array(n.length*3),3);for(let t=0;t<n.length;t++){let r=n[t];u.set(r.x,r.y+s[e],r.z),l.setFromAxisAngle(f,r.r),d.setScalar(r.s),c.compose(u,l,d),m.setMatrixAt(t,c),m.setColorAt(t,p.setScalar(r.t))}m.instanceMatrix.needsUpdate=!0,m.instanceColor&&(m.instanceColor.needsUpdate=!0),i.add(m)}return i.userData.placements=r,i.userData.yoff=s,i.userData.dispose=()=>i.traverse(e=>{e.isInstancedMesh&&(e.geometry.dispose(),e.material.dispose())}),i}var wn={tree:.85,rock:2,tuft:.95};function Tn(t,r,{worldSize:i=26,baseY:a=0}={}){let o=t.userData.placements,s=t.userData.yoff||{};if(!o)return;let{size:c,height:l,sea:u,relief:d}=r,f=i/(c-1),p=i/2,m=e=>e<0?0:e>=c?c-1:e,h=(e,t)=>l[m(Math.round((t+p)/f))*c+m(Math.round((e+p)/f))],g=(e,t)=>{let n=Math.max(1,Math.min(c-2,Math.round((e+p)/f))),r=Math.max(1,Math.min(c-2,Math.round((t+p)/f))),i=(l[r*c+n+1]-l[r*c+n-1])*d/(2*f),a=(l[(r+1)*c+n]-l[(r-1)*c+n])*d/(2*f);return Math.hypot(i,a)},_=new n,v=new e,y=new M,b=new M,x=new M(0,1,0);for(let e of t.children){let t=e.userData.type,n=o[t];if(!n||!e.isInstancedMesh)continue;let r=wn[t]??1.5;for(let i=0;i<n.length;i++){let o=n[i],c=h(o.x,o.z),l=c<u+.005||g(o.x,o.z)>r;y.set(o.x,a+(c-u)*d+(s[t]||0),o.z),v.setFromAxisAngle(x,o.r),b.setScalar(l?0:o.s),_.compose(y,v,b),e.setMatrixAt(i,_)}e.instanceMatrix.needsUpdate=!0}}function En({terrain:e,seed:t,worldSize:n,baseY:r,biomeKeys:i,density:a,max:o}){let{placements:s,counts:c}=_n({terrain:e,seed:t,worldSize:n,baseY:r,biomeKeys:i,density:a,max:o}),l=Cn(s);return l.userData.counts=c,l}function Dn(e,{worldSize:t=26,baseY:n=0,maxLakes:r=3}={}){let{size:i,height:a,sea:o,relief:s,maxH:c}=e,l=Math.floor((i-1)/3),u=t/(i-1),d=t/2,f=(e,t)=>a[t*3*i+e*3],p=e=>e*3*u-d,m=e=>e*3*u-d,h=e=>e>o+.02,g=o+.55*Math.max(.001,c-o),_=[];for(let e=2;e<l-2;e++)for(let t=2;t<l-2;t++){let n=f(t,e);if(!h(n)||n>g)continue;let r=!0;for(let i=-1;i<=1&&r;i++)for(let a=-1;a<=1;a++)if((a||i)&&f(t+a,e+i)<n){r=!1;break}r&&_.push({gi:t,gj:e,h:n})}_.sort((e,t)=>e.h-t.h);let v=new Uint8Array(l*l),y=[];for(let e of _){if(y.length>=r)break;if(v[e.gj*l+e.gi])continue;let t=e.h+.045,i=[[e.gi,e.gj]],a=new Set,c=!0,d=0,h=0,g=0,_=[];for(;i.length;){let[e,n]=i.pop(),r=n*l+e;if(a.has(r))continue;if(a.add(r),e<=0||e>=l-1||n<=0||n>=l-1){c=!1;continue}let s=f(e,n);if(s<o){c=!1;continue}if(!(s>=t)){if(_.push(r),d+=e,h+=n,g++,g>520){c=!1;break}i.push([e+1,n],[e-1,n],[e,n+1],[e,n-1])}}if(!c||g<5)continue;for(let e of _)v[e]=1;let b=d/g,x=h/g,S=3*u,C=g*S*S,w=.82*Math.sqrt(C/Math.PI);y.push({cx:p(b),cz:m(x),y:n+(t-o)*s,radius:w,area:C})}return y}function On(e,{material:t}={}){let n=new a;n.raycast=()=>{};let r=t||new x({color:`#3f6f8c`,roughness:.08,metalness:.35,transparent:!0,opacity:.88});for(let t of e){let e=new S(new ue(t.radius,28),r);e.rotation.x=-Math.PI/2,e.position.set(t.cx,t.y+.012,t.cz),e.receiveShadow=!1,e.castShadow=!1,e.raycast=()=>{},n.add(e)}return n.userData.dispose=()=>n.traverse(e=>{e.isMesh&&e.geometry.dispose()}),n.userData.count=e.length,n}function kn(e,t={}){let n=Dn(e,t),r=On(n,t);return r.userData.lakes=n,r}function An(){let e=new Map,t={register(n){return!n||!n.id?t:(n.art=n.art||{},n.defaults=n.defaults||{},e.set(n.id,n),t)},registerAll(e){for(let n of e)t.register(n);return t},get(t){return e.get(t)},byKind(t){return[...e.values()].filter(e=>e.kind===t)},byGroup(t){return[...e.values()].filter(e=>e.group===t)},all(){return[...e.values()]},setArt(n,r){let i=e.get(n);return i&&(i.art={...i.art,...r}),t},get size(){return e.size}};return t}function jn(e=An()){return tn.forEach((t,n)=>e.register({id:`mat-${t.key}`,label:Mn(t.key),kind:`material`,group:`Terrain`,defaults:{colorIndex:n},art:{icon:t.color,placeholder:!0}})),e.registerAll([{id:`scatter-tree`,label:`Tree`,kind:`scatter`,group:`Vegetation`,defaults:{geoKey:`tree`,density:.4,maxSlope:.85},art:{icon:`🌲`,factory:null,placeholder:!0}},{id:`scatter-rock`,label:`Rock`,kind:`scatter`,group:`Rock`,defaults:{geoKey:`rock`,density:.2,maxSlope:2},art:{icon:`🪨`,factory:null,placeholder:!0}},{id:`scatter-tuft`,label:`Grass tuft`,kind:`scatter`,group:`Vegetation`,defaults:{geoKey:`tuft`,density:.3,maxSlope:.95},art:{icon:`🌱`,factory:null,placeholder:!0}}]),e.registerAll([{id:`ent-person`,label:`Person`,kind:`entity`,group:`Life`,defaults:{medium:`ground`},art:{icon:`🚶`,placeholder:!0}},{id:`ent-car`,label:`Car`,kind:`entity`,group:`Life`,defaults:{medium:`road`},art:{icon:`🚗`,placeholder:!0}},{id:`ent-boat`,label:`Boat`,kind:`entity`,group:`Life`,defaults:{medium:`water`},art:{icon:`⛵`,placeholder:!0}},{id:`ent-fish`,label:`Fish`,kind:`entity`,group:`Life`,defaults:{medium:`water`},art:{icon:`🐟`,placeholder:!0}},{id:`ent-gull`,label:`Gull`,kind:`entity`,group:`Life`,defaults:{medium:`air`},art:{icon:`🕊`,placeholder:!0}},{id:`ent-cloud`,label:`Cloud`,kind:`entity`,group:`Sky`,defaults:{medium:`air`},art:{icon:`☁️`,placeholder:!0}}]),e}var Mn=e=>e.charAt(0).toUpperCase()+e.slice(1);function Nn({scale:e=90}={}){let t=new he;t.scale.setScalar(e),t.frustumCulled=!1,t.raycast=()=>{},t.visible=!1;let n=t.material.uniforms;n.turbidity.value=2.2,n.rayleigh.value=1.3,n.mieCoefficient.value=.005,n.mieDirectionalG.value=.78;function r(e){n.sunPosition.value.copy(e)}function i(e){e&&(e.turbidity!=null&&(n.turbidity.value=e.turbidity),e.rayleigh!=null&&(n.rayleigh.value=e.rayleigh),e.mie!=null&&(n.mieCoefficient.value=e.mie),e.mieG!=null&&(n.mieDirectionalG.value=e.mieG))}let a=null,o=null,s=null,c=null;function l(t){if(typeof document>`u`||!t)return null;a||(a=new fe(t),o=new pe,s=new he,s.scale.setScalar(e),o.add(s));let r=s.material.uniforms;return r.turbidity.value=n.turbidity.value,r.rayleigh.value=n.rayleigh.value,r.mieCoefficient.value=n.mieCoefficient.value,r.mieDirectionalG.value=n.mieDirectionalG.value,r.sunPosition.value.copy(n.sunPosition.value),c&&c.dispose(),c=a.fromScene(o),c.texture}return{mesh:t,setSun:r,setParams:i,buildEnv:l,get material(){return t.material}}}var Pn=`attribute float aSize;
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
}`,Fn=`precision highp float;

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
}`,In={realistic:0,charm:0,pixel:2,vector:1},Ln={realistic:1,charm:1,pixel:1.9,vector:1.2};function Rn({seed:e=1517,count:t=340,spreadX:n=21,yLo:i=3,yHi:s=18,zBase:c=7.2}={}){let l=new a;l.raycast=()=>{};let u=Xe(e>>>0),d=new Float32Array(t*3),f=new Float32Array(t),p=new Float32Array(t),m=new Float32Array(t),h=[];for(let e=0;e<t;e++){let t=(u()*2-1)*n,r=i+u()*(s-i),a=-c-u()*.7;d[e*3]=t,d[e*3+1]=r,d[e*3+2]=a;let o=.35+u()*.65;p[e]=o,f[e]=1.6+u()*2.8+(o>.85?2.2:0),m[e]=u()*Math.PI*2,o>.82&&h.push([t,r,a])}let _=new oe;_.setAttribute(`position`,new k(d,3)),_.setAttribute(`aSize`,new k(f,1)),_.setAttribute(`aBright`,new k(p,1)),_.setAttribute(`aPhase`,new k(m,1));let v=new F({vertexShader:Pn,fragmentShader:Fn,uniforms:{uTime:{value:0},uTwinkle:{value:1},uSizeScale:{value:1},uColor:{value:new P(`#eaf0ff`)},uNight:{value:0},uMode:{value:0}},transparent:!0,depthWrite:!1,blending:2,fog:!1,toneMapped:!1}),y=new E(_,v);y.raycast=()=>{},y.frustumCulled=!1,l.add(y);let b=[];if(h.length>6)for(let e=0;e<3;e++){let e=Math.floor(u()*h.length);for(let t=0;t<3;t++){let t=h[e],n=h[(e+1+Math.floor(u()*2))%h.length];b.push(t[0],t[1],t[2],n[0],n[1],n[2]),e=(e+1)%h.length}}let x=[[[0,2],[0,0]],[[0,0],[.7,0]],[[2.1,2],[1.4,2]],[[1.4,2],[1.4,0]],[[1.4,0],[2.1,0]],[[2.1,0],[2.1,1]],[[2.1,1],[1.7,1]],[[2.8,0],[2.8,2]],[[2.8,2],[3.5,2]],[[3.5,2],[3.5,1]],[[3.5,1],[2.8,1]],[[2.8,1],[3.6,0]]],S=-c-.4,C=.62;for(let[[e,t],[n,r]]of x)b.push(-3+e*C,12+t*C,S,-3+n*C,12+r*C,S);let w=new oe;w.setAttribute(`position`,new r(b,3));let T=new o(w,new g({color:`#9fb6e8`,transparent:!0,opacity:0,depthWrite:!1,fog:!1,toneMapped:!1}));T.raycast=()=>{},T.frustumCulled=!1,l.add(T);let D=new me(new A({map:zn(),transparent:!0,opacity:0,depthWrite:!1,blending:2,fog:!1,toneMapped:!1}));D.raycast=()=>{},D.scale.set(n*2.4,n*.95,1),D.position.set(2,12,-c-.7),D.material.rotation=-.5,D.renderOrder=-3,l.add(D);let O=-1;function ee(e,t=`realistic`,n=0,r=!1){v.uniforms.uTime.value=n,v.uniforms.uTwinkle.value=+!r,v.uniforms.uNight.value=e;let i=In[t]??0;i!==O&&(v.uniforms.uMode.value=i,O=i),v.uniforms.uSizeScale.value=Ln[t]??1,T.material.opacity=e*.5,D.material.opacity=e*.32,l.visible=e>.001}return{group:l,update:ee}}function zn(){let e=document.createElement(`canvas`);e.width=e.height=256;let t=e.getContext(`2d`),n=t.createRadialGradient(256/2,256/2,0,256/2,256/2,256/2);n.addColorStop(0,`rgba(150,170,230,0.5)`),n.addColorStop(.4,`rgba(120,130,200,0.22)`),n.addColorStop(1,`rgba(90,100,160,0)`),t.fillStyle=n,t.fillRect(0,0,256,256);let r=Xe(20145);for(let e=0;e<7;e++){let e=40+r()*176,n=70+r()*116,i=14+r()*30,a=t.createRadialGradient(e,n,0,e,n,i);a.addColorStop(0,`rgba(200,210,255,0.18)`),a.addColorStop(1,`rgba(200,210,255,0)`),t.fillStyle=a,t.beginPath(),t.arc(e,n,i,0,Math.PI*2),t.fill()}let i=new ge(e);return i.colorSpace=B,i}var Bn=Math.PI*2;function Vn(e){let t=document.createElement(`canvas`);t.width=t.height=128;let n=t.getContext(`2d`),r=n.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return r.addColorStop(0,`#ffffff`),r.addColorStop(.34,`#fffaf0`),r.addColorStop(.66,e),r.addColorStop(.86,e),r.addColorStop(1,`rgba(255,255,255,0)`),n.fillStyle=r,n.beginPath(),n.arc(128/2,128/2,128/2,0,Bn),n.fill(),Jn(t,!0)}function Hn(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);n.addColorStop(0,`#ffffff`),n.addColorStop(.4,`#eef3ff`),n.addColorStop(.82,`#c4cee6`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,128/2,0,Bn),t.fill(),t.globalAlpha=.14,t.fillStyle=`#8b97b4`;for(let[e,n,r]of[[54,50,9],[78,66,7],[60,82,5]])t.beginPath(),t.arc(e,n,r,0,Bn),t.fill();return Jn(e,!0)}function Un(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`);t.translate(128/2,128/2),t.fillStyle=`rgba(255,210,120,0.9)`;for(let e=0;e<12;e++)t.rotate(Bn/12),t.beginPath(),t.moveTo(0,-28),t.lineTo(7,-54),t.lineTo(-7,-54),t.closePath(),t.fill();let n=t.createRadialGradient(0,0,0,0,0,32);return n.addColorStop(0,`#ffffff`),n.addColorStop(.4,`#fff1c8`),n.addColorStop(.8,`#ffb24a`),n.addColorStop(1,`#ff8a2a`),t.fillStyle=n,t.beginPath(),t.arc(0,0,32,0,Bn),t.fill(),Jn(e,!0)}function Wn(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,46);n.addColorStop(0,`#ffffff`),n.addColorStop(.5,`#e6ecfb`),n.addColorStop(1,`#c2cce4`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,46,0,Bn),t.fill(),t.fillStyle=`#aab6d2`;for(let[e,n,r]of[[52,48,11],[80,62,8],[58,82,7],[40,66,5]])t.beginPath(),t.arc(e,n,r,0,Bn),t.fill();return Jn(e,!0)}function Gn(e,t,n){let r=document.createElement(`canvas`);r.width=r.height=144;let i=r.getContext(`2d`),a=17/2,o=18/2-.5;for(let r=0;r<18;r++)for(let s=0;s<18;s++){let c=Math.hypot(s-a,r-a);c>o||(i.fillStyle=c<o*.45?e:c<o*.78?t:n,i.fillRect(Math.round(s*8),Math.round(r*8),8,8))}return Jn(r,!1)}function Kn(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return n.addColorStop(0,`rgba(255,255,255,0.9)`),n.addColorStop(.38,`rgba(255,255,255,0.3)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,128/2,0,Bn),t.fill(),Jn(e,!0)}function qn(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2),r=`20,30,48`;return n.addColorStop(0,`rgba(${r},0)`),n.addColorStop(.42,`rgba(${r},0)`),n.addColorStop(.6,`rgba(${r},0.6)`),n.addColorStop(1,`rgba(${r},0)`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,128/2,0,Bn),t.fill(),Jn(e,!0)}function Jn(e,t){let n=new ge(e);return n.colorSpace=B,t||(n.magFilter=C,n.minFilter=C),n}var Yn=(e,t,n)=>{let r=Math.max(0,Math.min(1,(e-t)/(n-t)));return r*r*(3-2*r)};function Xn({skyW:e=15,skyY0:t=3.4,skyH:n=3.8,z:r=-7.8,biasX:i=4.5,sunSize:o=4.6,moonSize:s=4}={}){let c=new a;c.raycast=()=>{};let l=(e,t)=>{let n=new me(new A({map:e,transparent:!0,depthWrite:!1,fog:!1,toneMapped:!1,...t?{blending:2}:{}}));return n.raycast=()=>{},n},u={realistic:Vn(`#ffcf8a`),charm:Un(),pixel:Gn(`#fff6e0`,`#ffc24a`,`#ff8a2a`)},d={realistic:Hn(),charm:Wn(),pixel:Gn(`#ffffff`,`#cdd6ee`,`#9aa6c6`)},f=Kn(),p=l(qn(),!1),m=l(f,!0),h=l(u.realistic),g=l(f,!0),_=l(d.realistic);p.renderOrder=-2,m.renderOrder=-1,c.add(p,m,h,g,_);let v=Rn({});v.group.renderOrder=-4,c.add(v.group);let y=typeof window<`u`&&window.matchMedia?window.matchMedia(`(prefers-reduced-motion: reduce)`):null,b={realistic:{sunGlow:3,sunGlowOp:.7,moonGlow:2.6,moonGlowOp:.5,sizeMul:1,sunHaloOp:.85},charm:{sunGlow:2.2,sunGlowOp:.55,moonGlow:2.1,moonGlowOp:.42,sizeMul:1.08,sunHaloOp:.7},pixel:{sunGlow:1.7,sunGlowOp:.4,moonGlow:1.7,moonGlowOp:.32,sizeMul:1,sunHaloOp:.6}},x=`realistic`;function S(e){e===x||!b[e]||(x=e,h.material.map=u[e],h.material.needsUpdate=!0,_.material.map=d[e],_.material.needsUpdate=!0)}new P;let C=new P(`#fff3df`),w=new P(`#ffb060`),T=new P(`#ff6a2a`),E=new P(`#eef2ff`),D=new P(`#9fbcff`);function O(a,c,l,u,d=`realistic`){S(d);let f=b[x],O=l.sunArc,ee=u?Math.min(1,(u.cloud||0)*.85+(u.fog||0)*.7):0,te=O.y,k=Yn(te,-.04,.1)*(1-.7*ee),A=1-Yn(Math.abs(te),.02,.5);h.position.set(O.x*e+i,t+O.y*n,r),m.position.copy(h.position);let j=o*f.sizeMul*(1+.55*A);h.scale.setScalar(j),m.scale.setScalar(j*f.sunGlow),h.material.color.copy(C),m.material.color.copy(w).lerp(T,A),h.material.opacity=k,m.material.opacity=k*f.sunGlowOp*(.7+.5*A),p.position.copy(h.position),p.scale.setScalar(j*1.7),p.material.opacity=k*(1-A)*f.sunHaloOp;let M=Yn(-O.y,-.04,.1)*(1-.65*ee);_.position.set(-O.x*e+i,t+-O.y*n,r),g.position.copy(_.position);let ne=s*f.sizeMul;_.scale.setScalar(ne),g.scale.setScalar(ne*f.moonGlow),_.material.color.copy(E),g.material.color.copy(D),_.material.opacity=M,g.material.opacity=M*f.moonGlowOp;let re=Yn(-O.y,-.05,.18)*(1-.85*ee);v.update(re,d,c,!!(y&&y.matches))}return{group:c,update:O}}var Zn=`varying vec2 vUv;

void main() {
  
  
  
  vUv = uv;

  
  
  
  
  
  
  
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,Qn=`precision highp float;

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
}`,$n=`varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0); 
}`,er=`precision highp float;

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
}`,tr=`precision highp float;

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
}`,nr=`precision highp float;

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
}`,rr=`const float CA_STRENGTH   = 0.0030;  
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
uniform float     uGrade;        
uniform vec3      uGradeTint;    
uniform vec3      uGradeLift;    
uniform float     uGradeSat;     
uniform float     uGradeContrast;

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

  /* L67 COLOUR GRADE (display-referred, AFTER ACES, beauty-tier only) — pulls every surface into ONE
     art-directed mood: a saturation tweak, a hue-tinted gain, and a small shadow lift. Keyframed by the
     SunRig (warm dawn/dusk, clean noon, cool-moody night). uGrade = 0 on the pixel/toon pre-pass → no-op. */
  if (uGrade > 0.5) {
    float l = dot(col, vec3(0.2126, 0.7152, 0.0722));     
    col = mix(vec3(l), col, uGradeSat);                   
    col = col * uGradeTint + uGradeLift * (1.0 - col);    
    col = (col - 0.5) * uGradeContrast + 0.5;             
    col = clamp(col, 0.0, 1.0);
  }

  gl_FragColor = vec4(col, 1.0);
}`,ir=`const float DITHER = 0.55;   

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
}`,ar=`precision highp float;

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
}`,or=`precision highp float;

varying vec2 vUv;
uniform sampler2D uToon;   
uniform sampler2D uPixel;  
uniform float     uBlend;  

void main() {
  vec3 t = texture2D(uToon, vUv).rgb;
  vec3 p = texture2D(uPixel, vUv).rgb;
  gl_FragColor = vec4(mix(t, p, uBlend), 1.0);
}`,sr=`varying vec2 vUv;
uniform sampler2D uScene;
uniform float     uThreshold;   

void main() {
  vec3 c = texture2D(uScene, vUv).rgb;
  float l = dot(c, vec3(0.2126, 0.7152, 0.0722));        
  float k = smoothstep(uThreshold, uThreshold + 0.22, l); 
  gl_FragColor = vec4(c * k, 1.0);
}`,cr=`varying vec2 vUv;
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
}`,lr=`precision highp float;

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
}`,ur={"1-bit":{gridWidth:110,dither:.6,palette:[`#15120c`,`#c8b486`]},gb:{gridWidth:130,dither:.4,palette:[`#0f380f`,`#306230`,`#8bac0f`,`#9bbc0f`]},"8-bit":{gridWidth:160,dither:.55,palette:[`#140c1c`,`#442434`,`#30346d`,`#4e4a4e`,`#854c30`,`#346524`,`#d04648`,`#757161`,`#597dce`,`#d27d2c`,`#8595a1`,`#6daa2c`,`#d2aa99`,`#6dc2ca`,`#dad45e`,`#deeed6`]},"16-bit":{gridWidth:280,dither:.3,palette:`#000000.#222034.#45283c.#663931.#8f563b.#df7126.#d9a066.#eec39a.#fbf236.#99e550.#6abe30.#37946e.#4b692f.#524b24.#323c39.#3f3f74.#306082.#5b6ee1.#639bff.#5fcde4.#cbdbfc.#ffffff.#9badb7.#847e87.#696a6a.#595652.#76428a.#ac3232.#d95763.#d77bba.#8f974a.#8a6f30`.split(`.`)},modern:{gridWidth:460,dither:.6,palette:null}},dr=[`gb`,`8-bit`,`16-bit`,`modern`];function fr(e){let t=Math.max(e.length,1),n=new Float32Array(t*4);e.forEach((e,t)=>{let r=new P(e);n[t*4+0]=r.r,n[t*4+1]=r.g,n[t*4+2]=r.b,n[t*4+3]=1});let r=new _e(n,t,1,ne,ve);return r.minFilter=C,r.magFilter=C,r.needsUpdate=!0,r}var pr=220,mr={night:[`#0A0C16`,`#1C2236`,`#3A3A52`,`#5A5A78`,`#8A92B0`],dawn:[`#1A1008`,`#43281A`,`#7A4A30`,`#B07A4E`,`#E8A86A`],noon:[`#16100A`,`#3A2F1E`,`#6B563A`,`#937B54`,`#B89968`],dusk:[`#140A0A`,`#3E1E1A`,`#7A3828`,`#B85A36`,`#F0884A`]},hr={night:[`#020604`,`#06180E`,`#10401E`,`#1E9040`,`#7FE0FF`],dawn:[`#060603`,`#1A2410`,`#3A6B22`,`#6CC040`,`#FFC060`],noon:[`#050805`,`#0E2912`,`#1E6B2F`,`#3CF06A`,`#FFB000`],dusk:[`#080402`,`#241408`,`#6B4A12`,`#E0A030`,`#FF7030`]};function gr({demo:e=!1,citySeed:t=0,profileIndex:n=0}={}){let r=new ae({antialias:!0,preserveDrawingBuffer:!0});r.shadowMap.enabled=!0,r.shadowMap.type=1,r.shadowMap.autoUpdate=!1,r.shadowMap.needsUpdate=!0;let a=!!(window.matchMedia&&window.matchMedia(`(pointer: coarse)`).matches);r.setPixelRatio(Math.min(window.devicePixelRatio,a?1.5:2)),r.setSize(window.innerWidth,window.innerHeight),r.setClearColor(920327,1),document.body.appendChild(r.domElement);let o=r.getDrawingBufferSize(new U),s=new pe;s.fog=new b(10465470,0);let u=new P(`#aeb6c0`),f=.062,p=new P(`#74508f`),m=new P,h=Fe({aspect:window.innerWidth/window.innerHeight}),g=ht({t:.5}),_={type:i,format:ne,minFilter:C,magFilter:C,wrapS:se,wrapT:se,depthBuffer:!1,stencilBuffer:!1},y=[new N(256,256,_),new N(256,256,_),new N(256,256,_)];for(let e of y)r.setRenderTarget(e),r.clear();r.setRenderTarget(null);let T=new pe,E=new d(-1,1,1,-1,0,1),D=new F({vertexShader:$n,fragmentShader:er,uniforms:{uCurr:{value:null},uPrev:{value:null},uTexel:{value:new U(1/256,1/256)},uMouse:{value:new U(-1,-1)},uMouseStrength:{value:0},uC2:{value:.25},uDamping:{value:.992},uRainCount:{value:0},uRainDrops:{value:Array.from({length:8},()=>new M)},uWakeCount:{value:0},uWakeDrops:{value:Array.from({length:8},()=>new M)}}});T.add(new S(new w(2,2),D));let O=new N(o.x,o.y,{minFilter:l,magFilter:l,depthBuffer:!0,stencilBuffer:!1});function ee(e){let t=document.createElement(`canvas`);t.width=t.height=1024;let n=t.getContext(`2d`);n.fillStyle=e?`#0c1418`:`#15110b`,n.fillRect(0,0,1024,1024),n.strokeStyle=e?`rgba(120,150,170,0.22)`:`rgba(184,153,104,0.30)`,n.lineWidth=2;for(let e=0;e<=1024;e+=64)n.beginPath(),n.moveTo(e,0),n.lineTo(e,1024),n.stroke(),n.beginPath(),n.moveTo(0,e),n.lineTo(1024,e),n.stroke();e||(n.fillStyle=`#B89968`,n.font=`bold 360px Georgia, serif`,n.textAlign=`center`,n.textBaseline=`middle`,n.fillText(`LGR`,512,470),n.font=`600 64px ui-monospace, monospace`,n.fillText(`WEB · STUDIO`,512,720));let r=new ge(t);return r.colorSpace=B,r}let te=new S(new w(28,28),new c({map:ee(e)}));te.rotation.x=-Math.PI/2,te.position.y=-.35,s.add(te);let k=new S(new w(40,24),new F({depthWrite:!1,vertexShader:Zn,fragmentShader:Qn,uniforms:{uTime:{value:0},uInk:{value:g.horizon},uGold:{value:g.sky},uFogColor:{value:m},uFogAmt:{value:0},uFogCharm:He}}));k.position.set(0,3,-8),s.add(k);let A=new F({vertexShader:tr,fragmentShader:nr,uniforms:{uHeight:{value:null},uScene:{value:O.texture},uTexel:{value:new U(1/256,1/256)},uResolution:{value:new U(o.x,o.y)},uDisplace:{value:.42},uNormalStrength:{value:22},uRefractStrength:{value:.06},uChromaScale:{value:1},uNormalMatrix:{value:new be},uLightDir:{value:g.sunDir},uInk:{value:new P(`#2A2218`)},uGold:{value:new P(`#B89968`)},uVector:Ie,uVecWater:{value:new P(`#1fb8d8`)},uVecTint:{value:Le}}}),j=new S(new w(28,28,255,255),A);j.rotation.x=-Math.PI/2,j.updateMatrixWorld(!0),A.uniforms.uNormalMatrix.value.getNormalMatrix(j.matrixWorld),s.add(j);let re={value:0},ie=Ht({windowGlow:re}),I=ct({seed:t,profileIndex:n,landmarkFactory:ie,windowGlow:re});s.add(I.group);let L=yt({plinthTop:.3,extent:I.extent,profile:I.state.profile});s.add(L.group);let oe=At({extent:I.extent,waterSize:28,plinthTop:.3});s.add(oe.group),D.uniforms.uWakeDrops.value=oe.wakeDrops;let R=Wt({extent:I.extent});s.add(R.group),D.uniforms.uRainDrops.value=R.rainDrops;let z=Kt({extent:I.extent});s.add(z.group);let ce=Yt({rig:h,getCamera:()=>h.camera,sources:[L,oe,z]}),le=Xn();s.add(le.group);let ue=Nn({scale:90});s.add(ue.mesh),s.environmentIntensity=.32;let de=!1;function fe(e){let t=e&&g.sunArc.y>-.04;t!==de&&(de=t,ue.mesh.visible=t,k.visible=!t)}let V=null,me=-1;function he(){let e=Math.floor(g.t%1*4)%4;return(e!==me||!V)&&(me=e,V=ue.buildEnv(r)),V}let H=null,_e=null,ve=null,W=null,xe=!1,Se=1234,Ce=`valley`,we=tn.map(e=>e.key),Te=new x({color:`#3f6f8c`,roughness:.07,metalness:.4,transparent:!0,opacity:.9}),Ee=()=>[I.group,L.group,oe.group],De=()=>[H,_e,ve].filter(Boolean);function G(){for(let e of De())s.remove(e),e.userData.dispose?.();let e=sn({seed:Se,size:160,preset:Ce});W=e,H=mn(e,{worldSize:26,baseY:0,chunks:6}),_e=En({terrain:e,seed:Se,worldSize:26,baseY:0,biomeKeys:we}),ve=kn(e,{worldSize:26,baseY:0,maxLakes:3,material:Te});for(let e of De())e.visible=xe,s.add(e);typeof window<`u`&&(window.__world={seed:Se,preset:Ce,active:xe,chunks:H.children.length,scatter:_e.userData.counts,lakes:ve.userData.count})}let Oe=e=>{for(let t of De())t.visible=e},ke=null,Ae=new Set;function je(){!W||!ve||(s.remove(ve),ve.userData.dispose?.(),ve=kn(W,{worldSize:26,baseY:0,maxLakes:3,material:Te}),ve.visible=xe,s.add(ve),window.__world&&(window.__world.lakes=ve.userData.count))}function Me(){je(),_e&&Tn(_e,W,{worldSize:26,baseY:0})}function Ne(e,t,n=1,r=2.2,i=.05){if(!W||!H)return;let a=W.size,o=26/(a-1),s=(e+13)/o,c=(t+13)/o,l=r/o,u=Math.max(0,Math.floor(s-l)),d=Math.min(a-1,Math.ceil(s+l)),f=Math.max(0,Math.floor(c-l)),p=Math.min(a-1,Math.ceil(c+l)),m=W.height,h=l*.5*2*(l*.5);for(let e=f;e<=p;e++)for(let t=u;t<=d;t++){let r=(t-s)*(t-s)+(e-c)*(e-c);if(r>l*l)continue;let o=m[e*a+t]+n*i*Math.exp(-r/h);m[e*a+t]=o<0?0:o>1?1:o}Ae.clear();for(let e of H.children){let t=e.userData.chunk;t&&t.i0<=d&&t.i1>=u-1&&t.j0<=p&&t.j1>=f-1&&Ae.add(e)}hn(H,W,Ae),ke&&clearTimeout(ke),ke=setTimeout(Me,140)}function Pe(e,t,n,r=2.2){if(!W||!H||n==null)return;let i=W.size,a=26/(i-1),o=(e+13)/a,s=(t+13)/a,c=r/a,l=c*c,u=Math.max(0,Math.floor(o-c)),d=Math.min(i-1,Math.ceil(o+c)),f=Math.max(0,Math.floor(s-c)),p=Math.min(i-1,Math.ceil(s+c)),m=W.biome;for(let e=f;e<=p;e++)for(let t=u;t<=d;t++)(t-o)*(t-o)+(e-s)*(e-s)<=l&&(m[e*i+t]=n);Ae.clear();for(let e of H.children){let t=e.userData.chunk;t&&t.i0<=d&&t.i1>=u-1&&t.j0<=p&&t.j1>=f-1&&Ae.add(e)}hn(H,W,Ae,!0)}let K=[];function We(){W&&(K.push({h:W.height.slice(),b:W.biome.slice()}),K.length>12&&K.shift())}function Ge(){if(!W||!K.length)return!1;let e=K.pop();return W.height.set(e.h),W.biome.set(e.b),hn(H,W,H.children,!0),Me(),!0}let Ke={enter(){H||G(),xe=!0,Oe(!0);for(let e of Ee())e.visible=!1;window.__world&&(window.__world.active=!0)},exit(){xe=!1,Oe(!1);for(let e of Ee())e.visible=!0;window.__world&&(window.__world.active=!1)},reroll(){return Se=Math.random()*1e9|0,K.length=0,G(),Ke.enter(),Se},reset(){return K.length=0,G(),Ke.enter(),Se},setPreset(e){return on.includes(e)&&(Ce=e,K.length=0,G(),Ke.enter()),Ce},sculpt:Ne,paintBiome:Pe,repoolWater:je,snapshot:We,undo:Ge,get terrainGroup(){return H},get biomes(){return tn},get canUndo(){return K.length>0},get active(){return xe},get seed(){return Se},get preset(){return Ce},get presets(){return on}},qe=jn();I.group.remove(I.key),s.add(I.key),I.key.castShadow=!0,I.key.shadow.mapSize.set(2048,2048),I.key.shadow.bias=-18e-5,I.key.shadow.normalBias=.028,s.add(I.key.target);function Je(){let e=I.key.shadow.camera,t=I.extent+4.5;e.left=-t,e.right=t,e.top=t,e.bottom=-t,e.near=1,e.far=48,e.updateProjectionMatrix(),r.shadowMap.needsUpdate=!0}Je();let Ye=new ye(o.x,o.y),q=new N(o.x,o.y,{minFilter:l,magFilter:l,depthBuffer:!0,stencilBuffer:!1,depthTexture:Ye}),J=new N(o.x,o.y,{minFilter:l,magFilter:l,depthBuffer:!1,stencilBuffer:!1}),Xe=new N(o.x,o.y,{minFilter:l,magFilter:l,depthBuffer:!1,stencilBuffer:!1}),Ze=new N(o.x,o.y,{minFilter:l,magFilter:l,depthBuffer:!1,stencilBuffer:!1}),Qe=Math.max(1,Math.floor(o.x/2)),$e=Math.max(1,Math.floor(o.y/2)),Y=new N(Qe,$e,{minFilter:l,magFilter:l,depthBuffer:!1,stencilBuffer:!1}),et=new N(Qe,$e,{minFilter:l,magFilter:l,depthBuffer:!1,stencilBuffer:!1}),tt=new pe,nt=new d(-1,1,1,-1,0,1),rt=new S(new w(2,2));tt.add(rt);let X=new F({vertexShader:$n,fragmentShader:rr,uniforms:{uScene:{value:q.texture},uTime:{value:0},uResolution:{value:new U(o.x,o.y)},uGrain:{value:1},uChroma:{value:1},uExposure:{value:1},uAces:{value:0},uBloom:{value:Y.texture},uBloomStrength:{value:0},uGrade:{value:0},uGradeTint:{value:g.grade.tint},uGradeLift:{value:g.grade.lift},uGradeSat:{value:1},uGradeContrast:{value:1}}}),it=new F({vertexShader:$n,fragmentShader:sr,uniforms:{uScene:{value:q.texture},uThreshold:{value:.78}}}),at=new F({vertexShader:$n,fragmentShader:cr,uniforms:{uScene:{value:Y.texture},uDir:{value:new U}}});function ot(e){it.uniforms.uScene.value=e.texture,gt(it,Y),at.uniforms.uScene.value=Y.texture,at.uniforms.uDir.value.set(1.6/Qe,0),gt(at,et),at.uniforms.uScene.value=et.texture,at.uniforms.uDir.value.set(0,1.6/$e),gt(at,Y),X.uniforms.uBloom.value=Y.texture;let t=1-v.clamp(g.sunArc.y*2.2,0,1);X.uniforms.uBloomStrength.value=.85*(.32+.95*t)}let st=e=>{let t=e.map(e=>new P(e));for(;t.length<8;)t.push(new P(0,0,0));return t},lt=[`night`,`dawn`,`noon`,`dusk`],ut={inkgold:lt.map(e=>st(mr[e])),terminal:lt.map(e=>st(hr[e]))},dt=new F({vertexShader:$n,fragmentShader:ir,uniforms:{uScene:{value:J.texture},uResolution:{value:new U(o.x,o.y)},uPixelSize:{value:pr},uPalette:{value:ut.inkgold[2]},uPaletteB:{value:ut.inkgold[2]},uPaletteBlend:{value:0},uPaletteSize:{value:5}}}),ft=new F({vertexShader:$n,fragmentShader:lr,uniforms:{uScene:{value:J.texture},uResolution:{value:new U(o.x,o.y)},uGridWidth:{value:160},uDither:{value:.55},uPalette:{value:fr(ur[`8-bit`].palette)},uPaletteSize:{value:1},uUsePalette:{value:1}}}),pt={};for(let e of dr)pt[e]=ur[e].palette?fr(ur[e].palette):null;let Z=new F({vertexShader:$n,fragmentShader:ar,uniforms:{uScene:{value:J.texture},uDepth:{value:Ye},uResolution:{value:new U(o.x,o.y)},uBands:{value:4},uToonGain:{value:1.7},uToonGamma:{value:.6},uToonFloor:{value:g.toonFloor},uOutline:{value:g.outline},uNear:{value:.1},uFar:{value:100},uIsPerspective:{value:1}}}),mt=new F({vertexShader:$n,fragmentShader:or,uniforms:{uToon:{value:Xe.texture},uPixel:{value:Ze.texture},uBlend:{value:0}}});function gt(e,t){rt.material=e,r.setRenderTarget(t),r.render(tt,nt)}function _t(){h.setViewport(window.innerWidth,window.innerHeight),r.setSize(window.innerWidth,window.innerHeight);let e=r.getDrawingBufferSize(new U);return O.setSize(e.x,e.y),q.setSize(e.x,e.y),J.setSize(e.x,e.y),Xe.setSize(e.x,e.y),Ze.setSize(e.x,e.y),Qe=Math.max(1,e.x>>1),$e=Math.max(1,e.y>>1),Y.setSize(Qe,$e),et.setSize(Qe,$e),A.uniforms.uResolution.value.set(e.x,e.y),X.uniforms.uResolution.value.set(e.x,e.y),dt.uniforms.uResolution.value.set(e.x,e.y),ft.uniforms.uResolution.value.set(e.x,e.y),Z.uniforms.uResolution.value.set(e.x,e.y),e}let Q=3,vt=!1,bt=!1,xt=`native`,St=.3,Ct=.46,wt=[`native`,...dr],Tt={"16-bit":`16-bit`,"8-bit":`8-bit`,gb:`Game Boy`,modern:`Modern`,native:`Pixel`,"1-bit":`1-bit`};typeof window<`u`&&(window.__mode=Q,window.__vector=vt,window.__era=xt);let Et=0,Dt=performance.now(),Ot=typeof window<`u`&&new URLSearchParams(window.location.search).has(`perf`);typeof window<`u`&&(window.__perf=Ot),Ot&&(r.info.autoReset=!1);let kt=null;typeof window<`u`&&(window.__loaded=!1);let jt=0,Mt=new M(1,1,1),Nt=!1;function $(e){let t=bt?ut.terminal:ut.inkgold,n=e%1*4,r=Math.floor(n)%4;dt.uniforms.uPalette.value=t[r],dt.uniforms.uPaletteB.value=t[(r+1)%4],dt.uniforms.uPaletteBlend.value=n-Math.floor(n)}function Pt(e){let t=ur[e];t&&(ft.uniforms.uGridWidth.value=t.gridWidth,ft.uniforms.uDither.value=t.dither,ft.uniforms.uUsePalette.value=+!!t.palette,t.palette&&(ft.uniforms.uPalette.value=pt[e],ft.uniforms.uPaletteSize.value=t.palette.length))}function Ft(){xt!==`native`&&Pt(xt)}let It=()=>xt===`native`?dt:ft;function Lt(e,t){fe(!0),s.environment=he(),j.visible=!1,r.setRenderTarget(O),r.render(s,e),j.visible=!0,r.setRenderTarget(q),r.render(s,e),ot(q),X.uniforms.uAces.value=1,X.uniforms.uGrade.value=1,X.uniforms.uGrain.value=0,X.uniforms.uChroma.value=0,gt(X,t)}function Rt(e,t){let n=!vt&&(Q===1||Q===2);if(fe(n),s.environment=n?he():null,X.uniforms.uBloomStrength.value=0,j.visible=!1,r.setRenderTarget(O),r.render(s,h.camera),j.visible=!0,Q===1&&!n)r.setRenderTarget(t),r.render(s,h.camera);else if(Q===1)r.setRenderTarget(q),r.render(s,h.camera),ot(q),X.uniforms.uAces.value=1,X.uniforms.uGrade.value=1,X.uniforms.uGrain.value=0,X.uniforms.uChroma.value=0,gt(X,t);else if(r.setRenderTarget(q),r.render(s,h.camera),Q===2)n&&ot(q),X.uniforms.uAces.value=+!!n,X.uniforms.uGrade.value=+!!n,X.uniforms.uGrain.value=1,X.uniforms.uChroma.value=1,gt(X,t);else{X.uniforms.uAces.value=0,X.uniforms.uGrade.value=0,X.uniforms.uGrain.value=0,X.uniforms.uChroma.value=0,gt(X,J);let n=h.camera;Z.uniforms.uNear.value=n.near,Z.uniforms.uFar.value=n.far,Z.uniforms.uIsPerspective.value=+!!n.isPerspectiveCamera;let r=e.era?(Pt(e.era),ft):It();e.kind===`pixel`?(gt(r,t),window.__style=`pixel`):e.kind===`toon`?(gt(Z,t),window.__style=`toon`):(gt(Z,Xe),gt(r,Ze),mt.uniforms.uBlend.value=e.blend,gt(mt,t),window.__style=`blend`)}}function zt(){let e=Bt(),t=e.kind===`toon`?1:e.kind===`blend`?1-e.blend:0;return A.uniforms.uChromaScale.value=v.lerp(1,.5,t),e}function Bt(){if(Q===1||Q===2)return{kind:`none`};if(Q===7)return{kind:`pixel`};if(Q===8)return{kind:`toon`};let e=h.styleT;return window.__styleT=e,e<=St?{kind:`toon`}:e>=Ct?{kind:`pixel`,era:e<.62?`16-bit`:e<.8?`8-bit`:`gb`}:{kind:`blend`,blend:v.smoothstep(e,St,Ct),era:`16-bit`}}function Vt(e){return Q===1||Q===2?``:vt&&Q!==7&&Q!==8?`Vector`:e.kind===`toon`?`Toon`:e.kind===`pixel`?Tt[e.era||xt]||`Pixel`:e.kind===`blend`?`Toon → `+(Tt[e.era]||`Pixel`):``}function Ut(e,t,{shadowsOn:n=!0,seasonTarget:i=0}={}){if(Ot){let e=r.info;kt={calls:e.render.calls,tris:e.render.triangles,programs:e.programs?e.programs.length:0,geo:e.memory.geometries,tex:e.memory.textures},e.reset()}k.material.uniforms.uTime.value=t,X.uniforms.uTime.value=t,g.update(e),I.key.position.copy(g.sunDir).multiplyScalar(24),I.key.color.copy(g.sunColor),I.key.intensity=g.sunIntensity,I.fill.color.copy(g.hemiSky),I.fill.groundColor.copy(g.hemiGround),re.value=g.windowGlow,ue.setSun(g.sunArc),ue.setParams(g.skyParams),X.uniforms.uGradeSat.value=g.grade.sat,X.uniforms.uGradeContrast.value=g.grade.contrast,s.environmentIntensity=.34*(1-.6*v.clamp(g.sunArc.y*1.5,0,1));let a=R.overcast;I.key.intensity*=1-.5*a,I.key.color.lerp(u,.45*a),I.fill.intensity=1+.7*a;let o=v.smoothstep(g.sunDir.y,.06,.34),c=v.lerp(.28,1,1-g.windowGlow),l=n?o*c:0;I.key.shadow.intensity=.72*l,Re.value=.52*l,(n&&!Nt||Mt.distanceToSquared(g.sunDir)>2e-5)&&(r.shadowMap.needsUpdate=!0,Mt.copy(g.sunDir)),Nt=n;let d=1-g.windowGlow;Le.setRGB(v.lerp(.46,1,d),v.lerp(.52,1,d),v.lerp(.74,1,d)),X.uniforms.uExposure.value=g.exposure,Z.uniforms.uToonGain.value=g.toonGain,r.setClearColor(g.horizon,1),$(g.t),window.__t=g.t,L.update(e,t,g),I.update(t),oe.update(e,t,g),D.uniforms.uWakeCount.value=oe.wakeCount,R.update(e,t),D.uniforms.uRainCount.value=R.rainDropCount;let h=R.fog*(1-d);s.fog.density=R.fog*f,m.copy(g.horizon).lerp(p,.85*h),s.fog.color.copy(m),r.setClearColor(m,1),He.value=R.fog,k.material.uniforms.uFogAmt.value=.7*R.fog,ze.value=R.snow,Be.value=R.cloud*.55,Ve.x+=e*.018,Ve.y+=e*.009,Ue.value+=(i-Ue.value)*Math.min(1,e*1.5),z.update(e,t,g,R);let _=Bt(),b=_.kind===`pixel`||_.kind===`blend`?`pixel`:vt||_.kind===`toon`?`charm`:`realistic`;le.update(e,t,g,R,b),Et++;let x=performance.now();x-Dt>=1e3&&(window.__fps=Et,Ot&&kt&&(console.log(`[perf] ${Et} fps · ~${(1e3/Math.max(1,Et)).toFixed(2)} ms · calls ${kt.calls} · tris ${kt.tris} · programs ${kt.programs} · geo ${kt.geo} · tex ${kt.tex}`),window.__perfInfo={fps:Et,...kt}),Et=0,Dt=x);let[S,C,w]=y;if(D.uniforms.uPrev.value=S.texture,D.uniforms.uCurr.value=C.texture,r.setRenderTarget(w),r.render(T,E),y=[C,w,S],A.uniforms.uHeight.value=y[1].texture,jt<2&&typeof document<`u`&&++jt===2){let e=document.getElementById(`lgr-loader`);e&&e.classList.add(`gone`),window.__loaded=!0}}function Gt(e){Q=e,window.__mode=Q}function qt(){return vt=!vt,Ie.value=+!!vt,window.__vector=vt,vt}function Jt(e){return vt=!!e,Ie.value=+!!vt,window.__vector=vt,vt}function Xt(){return xt=wt[(wt.indexOf(xt)+1)%wt.length],window.__era=xt,Ft(),xt}function Zt(){return bt=!bt,bt}return{updateWorld:Ut,decideStyle:zt,renderCityPipeline:Rt,renderCityBeautyTo:Lt,styleHintName:Vt,setPostMode:Gt,toggleVector:qt,setVector:Jt,cycleEra:Xt,togglePalette:Zt,get mode(){return Q},get vector(){return vt},get sceneEra(){return xt},renderer:r,drawBuffer:o,scene:s,rig:h,sunRig:g,SIM:256,targets:y,simScene:T,simCamera:E,simMaterial:D,grabRT:O,card:te,backdrop:k,WATER_SIZE:28,water:j,waterMaterial:A,windowGlow:re,landmarkFactory:ie,city:I,cityLife:L,waterLife:oe,weatherRig:R,clouds:z,inspector:ce,world:Ke,catalog:qe,fitShadowFrustum:Je,SHADOW_DIST:24,sceneDepth:Ye,sceneRT:q,filmicRT:J,toonRT:Xe,pixelRT:Ze,postScene:tt,postCamera:nt,postQuad:rt,filmicMaterial:X,pixelMaterial:dt,pixelkitMaterial:ft,toonMaterial:Z,mixMaterial:mt,PALCACHE:ut,ERA_TEX:pt,runPass:gt,OVERCAST_GREY:u,FOG_DENSITY:f,FOG_NIGHT_TINT:p,_fogColor:m,resize:_t}}var _r=`lgr_hints_`,vr=!1;function yr(){if(vr||typeof document>`u`)return;vr=!0;let e=document.createElement(`style`);e.textContent=`
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
  }`,document.head.appendChild(e)}function br({key:e,title:t=`Tips`,tips:n=[],force:r=!1}={}){let i={key:e,shown:!1,dismissed:!1,seen:!1};if(typeof window<`u`&&(window.__hints=i),typeof document>`u`||!e)return{dismiss(){},el:null};let a=_r+e,o=!1;try{o=localStorage.getItem(a)===`1`}catch{}if(o&&!r)return i.seen=!0,{dismiss(){},el:null};yr();let s=!!(window.matchMedia&&window.matchMedia(`(prefers-reduced-motion: reduce)`).matches),c=document.createElement(`div`);c.className=`lgr-hints`,c.innerHTML=`<div class="lgr-hints-card">
    <div class="lgr-hints-h">${t}</div>
    <ul>${n.map(e=>`<li>${e}</li>`).join(``)}</ul>
    <button class="lgr-hints-ok">Got it</button>
    <button class="lgr-hints-x" title="Dismiss (Esc)" aria-label="Dismiss">✕</button>
  </div>`,document.body.appendChild(c),i.shown=!0,s?c.classList.add(`on`):requestAnimationFrame(()=>c.classList.add(`on`));let l=!1;function u(e=!0){if(!l){if(l=!0,e)try{localStorage.setItem(a,`1`)}catch{}i.dismissed=!0,window.removeEventListener(`keydown`,d),c.classList.remove(`on`),setTimeout(()=>c.remove(),s?0:300)}}function d(e){e.key===`Escape`&&u(!0)}return window.addEventListener(`keydown`,d),c.querySelector(`.lgr-hints-ok`).addEventListener(`click`,()=>{navigator.vibrate?.(10),u(!0)}),c.querySelector(`.lgr-hints-x`).addEventListener(`click`,()=>{navigator.vibrate?.(10),u(!0)}),{dismiss:u,el:c}}var xr=new Set([`w`,`a`,`s`,`d`,`arrowup`,`arrowdown`,`arrowleft`,`arrowright`,`shift`,` `]),Sr={walker:{p:.6,hp:26,speed:.85,dmg:9,score:10,size:1,color:`#6f8a45`},runner:{p:.25,hp:12,speed:1.75,dmg:7,score:16,size:.82,color:`#a6d24c`},tank:{p:.15,hp:95,speed:.5,dmg:20,score:34,size:1.5,color:`#39492a`}};function Cr(){let e=Math.random();return e<Sr.walker.p?`walker`:e<Sr.walker.p+Sr.runner.p?`runner`:`tank`}var wr=new P(`#ffffff`),Tr=new P(`#d83a2a`),Er={food:{name:`Food`,glyph:`🍖`,color:`#c8782e`,consumable:!0},water:{name:`Water`,glyph:`💧`,color:`#3aa6dc`,consumable:!0},bandage:{name:`Bandage`,glyph:`➕`,color:`#e8e2d6`,consumable:!0},scrap:{name:`Scrap`,glyph:`⚙️`,color:`#8a8f96`,consumable:!1},medkit:{name:`Medkit`,glyph:`✚`,color:`#e0524a`,consumable:!0},repairkit:{name:`Repair Kit`,glyph:`🔧`,color:`#caa05a`,consumable:!0}},Dr=[{out:`medkit`,need:{bandage:2}},{out:`repairkit`,need:{scrap:3}}];function Or({extent:e=8,plinthTop:t=.3}={}){let n=new a;n.visible=!1,n.raycast=()=>{};let r=t+.02,i=Math.max(3,e-.7),o=typeof window<`u`&&window.matchMedia&&window.matchMedia(`(pointer: coarse)`).matches,l=1.25,u=4.4,d=1.4,f=new a,p=new S(new j(.16,.34,4,10),J(new x({color:`#3f7fd0`,roughness:.6,flatShading:!0}),{color:`#3f7fd0`}));p.position.y=.33;let h=new S(new le(.13,12,9),J(new x({color:`#e9caa1`,roughness:.75,flatShading:!0}),{color:`#e9caa1`}));h.position.y=.66;let _=new S(new V(.1,.1,.16),J(new x({color:`#ffd54a`,roughness:.5,flatShading:!0}),{color:`#ffd54a`}));_.position.set(0,.38,.18),f.add(p,h,_),f.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!1),e.raycast=()=>{}}),f.scale.setScalar(1.6),f.position.y=r,n.add(f);let y=new S(new ue(.95,16,-.9,1.8),new c({color:`#ffe08a`,transparent:!0,opacity:0,depthWrite:!1,side:2}));y.rotation.x=-Math.PI/2,y.position.y=r+.06,y.raycast=()=>{},n.add(y);let b=new oe().setFromPoints([new M,new M]),C=new m(b,new g({color:`#fff3c0`,transparent:!0,opacity:0,depthWrite:!1}));C.raycast=()=>{},n.add(C);let w={x:0,z:0,vx:0,vz:0,hp:100,stamina:100,hunger:100,thirst:100,facing:0,iframe:0},T=new I(new j(.15,.3,4,8),J(new x({roughness:.85,flatShading:!0})),48);T.castShadow=!0,T.receiveShadow=!1,T.frustumCulled=!1,T.raycast=()=>{},T.instanceMatrix.setUsage(W),n.add(T);let E=[];for(let e=0;e<48;e++)E.push({x:0,z:0,vx:0,vz:0,alive:!1,in:!1,type:`walker`,hp:1,maxhp:1,speed:1,dmg:0,score:0,size:1,phase:0,flash:0});let D=new P,O=[],ee=J(new x({color:`#7a5a36`,roughness:.9,flatShading:!0}),{color:`#7a5a36`});for(let e=0;e<8;e++){let t=e/8*Math.PI*2,i=new S(new V(2.1,.7,.24),ee.clone());i.position.set(Math.cos(t)*u,r+.35,Math.sin(t)*u),i.rotation.y=-t+Math.PI/2,i.castShadow=!0,i.raycast=()=>{},n.add(i),O.push({mesh:i,ang:t,hp:150,alive:!0,baseColor:new P(`#7a5a36`)})}function te(e,t){let n=Math.atan2(t,e);return n<0&&(n+=Math.PI*2),O[Math.round(n/(Math.PI*2/8))%8]}let k=[];for(let e=0;e<14;e++){let e=new S(new V(.26,.26,.26),J(new x({roughness:.6,flatShading:!0})));e.castShadow=!0,e.visible=!1,e.raycast=()=>{},n.add(e),k.push({mesh:e,x:0,z:0,kind:`food`,active:!1})}let A=new P;function ne(){let e=Math.random();return e<.36?`food`:e<.72?`water`:e<.88?`bandage`:`scrap`}function re(e,t,n){let i=k.find(e=>!e.active);i&&(i.x=e,i.z=t,i.kind=n||ne(),i.active=!0,i.mesh.position.set(e,r+.18,t),i.mesh.visible=!0,i.mesh.material.color.copy(A.set(Er[i.kind].color)))}let N=[];function ie(e){let t=N.find(t=>t.id===e);return t?t.n:0}function ae(e,t=1){let n=N.find(t=>t.id===e);return n?(n.n+=t,!0):N.length<8?(N.push({id:e,n:t}),!0):!1}function F(e,t){let n=N.find(t=>t.id===e);return!n||n.n<t?!1:(n.n-=t,n.n<=0&&N.splice(N.indexOf(n),1),!0)}function L(e){if(ie(e)<=0)return!1;if(e===`food`)w.hunger=Math.min(100,w.hunger+38);else if(e===`water`)w.thirst=Math.min(100,w.thirst+38);else if(e===`bandage`)w.hp=Math.min(100,w.hp+40);else if(e===`medkit`)w.hp=Math.min(100,w.hp+90);else if(e===`repairkit`){let e=null;for(let t of O)(!e||t.hp<e.hp)&&(e=t);e&&(e.hp=150,e.alive=!0)}else return!1;return F(e,1),qe(),!0}function R(e){for(let t in e.need)if(ie(t)<e.need[t])return!1;for(let t in e.need)F(t,e.need[t]);return ae(e.out,1),qe(),!0}let se=!1,z=!1,B=1,ce=0,de=0,fe=0,pe=`spawning`,me=0,he=0,H=0,ge=0,U=!1,_e=null;function ve(){for(let e=0;e<48;e++)if(!E[e].alive)return E[e];return null}function ye(e){let t=ve();if(!t)return;let n=Sr[Cr()];t.type=Object.keys(Sr).find(e=>Sr[e]===n)||`walker`;let r=Math.random()*Math.PI*2;t.x=Math.cos(r)*i,t.z=Math.sin(r)*i,t.vx=0,t.vz=0;let a=1+B*.08;t.maxhp=n.hp*a,t.hp=t.maxhp,t.speed=n.speed*(1+.4*e)*(1+B*.015)*(B===1?.85:1),t.dmg=n.dmg,t.score=n.score,t.size=n.size,t.phase=Math.random()*6.28,t.flash=0,t.in=!1,t.alive=!0}function be(){let e=null,t=1/0;for(let n of E){if(!n.alive)continue;let r=(n.x-w.x)**2+(n.z-w.z)**2;r<t&&(t=r,e=n)}return e}function xe(e){e.alive=!1,ce++,de+=e.score,Math.random()<.3&&re(e.x,e.z)}function Se(e,t){e.hp-=t,e.flash=.12,e.hp<=0&&xe(e)}function Ce(){if(z||H>0)return;H=.16;let e,t;if(_e)e=_e.x-w.x,t=_e.z-w.z;else{let n=be();n?(e=n.x-w.x,t=n.z-w.z):(e=Math.sin(w.facing),t=Math.cos(w.facing))}let n=Math.hypot(e,t)||1;e/=n,t/=n,w.facing=Math.atan2(e,t);let i=null,a=1/0;for(let n of E){if(!n.alive)continue;let r=n.x-w.x,o=n.z-w.z,s=r*e+o*t;s<0||s>9||Math.abs(r*t-o*e)<.7*(.4+.6*n.size)&&s<a&&(a=s,i=n)}let o=i?a:9,s=b.attributes.position;s.setXYZ(0,w.x,r+.5,w.z),s.setXYZ(1,w.x+e*o,r+.5,w.z+t*o),s.needsUpdate=!0,C.material.opacity=.95,i&&Se(i,16)}function we(){if(z||ge>0)return;ge=.42,y.material.opacity=.85;let e=Math.sin(w.facing),t=Math.cos(w.facing);for(let n of E){if(!n.alive)continue;let r=n.x-w.x,i=n.z-w.z,a=Math.hypot(r,i);a>1.05+n.size*.2||(r*e+i*t)/(a||1)>.2&&Se(n,34)}}let Te={},Ee={x:0,y:0};function De(e,t){if(!se)return;let n=e.key.toLowerCase();if(t&&n===`i`){e.stopImmediatePropagation(),q();return}if(t&&n===`escape`&&Be){e.stopImmediatePropagation(),Ye();return}if(xr.has(n)){if(e.stopImmediatePropagation(),n.startsWith(`arrow`)&&e.preventDefault(),n===` `){t&&we();return}Te[n]=t}}typeof window<`u`&&(window.addEventListener(`keydown`,e=>De(e,!0)),window.addEventListener(`keyup`,e=>De(e,!1)));let G=null,Oe=null,ke=null,Ae=null,je=null,Me=null,Ne=null,Pe=null,K=null,Fe=null,Ie=null,Le=null,Re=null,ze=null,Be=!1;if(typeof document<`u`){let e=document.createElement(`style`);e.textContent=`
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
    `,document.head.appendChild(e),G=document.createElement(`div`),G.className=`hoard-stick`,Oe=document.createElement(`div`),Oe.className=`knob`,G.appendChild(Oe),document.body.appendChild(G);let t=!1,n=e=>{let t=G.getBoundingClientRect(),n=e.clientX-(t.left+t.width/2),r=e.clientY-(t.top+t.height/2),i=Math.hypot(n,r)||1;i>44&&(n*=44/i,r*=44/i),Oe.style.transform=`translate(${n}px,${r}px)`,Ee.x=n/44,Ee.y=-r/44};G.addEventListener(`pointerdown`,e=>{t=!0,G.setPointerCapture(e.pointerId),n(e)}),G.addEventListener(`pointermove`,e=>{t&&n(e)});let r=()=>{t=!1,Ee.x=0,Ee.y=0,Oe.style.transform=`translate(0,0)`};G.addEventListener(`pointerup`,r),G.addEventListener(`pointercancel`,r),Ie=document.createElement(`button`),Ie.className=`hoard-btn hoard-fire`,Ie.textContent=`FIRE`,document.body.appendChild(Ie),Le=document.createElement(`button`),Le.className=`hoard-btn hoard-melee`,Le.textContent=`MELEE`,document.body.appendChild(Le),Ie.addEventListener(`pointerdown`,e=>{e.preventDefault(),navigator.vibrate?.(12),U=!0}),Ie.addEventListener(`pointerup`,()=>{U=!1}),Ie.addEventListener(`pointercancel`,()=>{U=!1}),Le.addEventListener(`pointerdown`,e=>{e.preventDefault(),navigator.vibrate?.(18),we()}),ke=document.createElement(`div`),ke.className=`hoard-hud`,ke.innerHTML=`HP<div class="bar"><i style="background:#e0524a"></i></div>STAMINA<div class="bar"><i style="background:#4ad08a"></i></div>HUNGER<div class="bar"><i style="background:#d89a3a"></i></div>THIRST<div class="bar"><i style="background:#3aa6dc"></i></div><div class="stat"></div>`,document.body.appendChild(ke);let i=ke.querySelectorAll(`i`);Ae=i[0],je=i[1],Me=i[2],Ne=i[3],Pe=ke.querySelector(`.stat`),K=document.createElement(`div`),K.className=`hoard-banner`,document.body.appendChild(K),Fe=document.createElement(`div`),Fe.className=`hoard-death`,Fe.innerHTML=`<h2>YOU DIED</h2><div class="ds"></div><button>RESTART</button>`,document.body.appendChild(Fe),Fe.querySelector(`button`).addEventListener(`click`,()=>Qe());let a=document.createElement(`style`);a.textContent=`
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
    `,document.head.appendChild(a),Re=document.createElement(`button`),Re.className=`hoard-bagbtn`,Re.textContent=`🎒`,Re.title=`Inventory (I)`,document.body.appendChild(Re),Re.addEventListener(`click`,()=>q()),ze=document.createElement(`div`),ze.className=`hoard-bag`,document.body.appendChild(ze)}let Ve=0;function He(e,t=1.8){K&&(K.textContent=e,K.style.display=`block`),Ve=t}let Ue=Math.PI/4;function We(e){Ue=e}function Ge(e,t){_e={x:e,z:t}}function Ke(e){U=e}function qe(){if(typeof window<`u`&&(window.__hoardBag=Object.fromEntries(N.map(e=>[e.id,e.n]))),!ze)return;let e=`<div class="panel"><h3>INVENTORY</h3><div class="slots">`;for(let t=0;t<8;t++){let n=N[t];n?e+=`<button class="slot" data-id="${n.id}" title="${Er[n.id].name}">${Er[n.id].glyph}<span class="n">${n.n}</span></button>`:e+=`<div class="slot empty"></div>`}e+=`</div><div class="craft">`,Dr.forEach((t,n)=>{let r=Object.keys(t.need).every(e=>ie(e)>=t.need[e]),i=Object.entries(t.need).map(([e,t])=>`${t}${Er[e].glyph}`).join(`+`);e+=`<button data-rec="${n}" ${r?``:`disabled`}>Craft ${Er[t.out].name} (${i})</button>`}),e+=`</div><button class="close">CLOSE (I)</button></div>`,ze.innerHTML=e,ze.querySelectorAll(`.slot[data-id]`).forEach(e=>e.addEventListener(`click`,()=>{Er[e.dataset.id].consumable&&L(e.dataset.id)})),ze.querySelectorAll(`[data-rec]`).forEach(e=>e.addEventListener(`click`,()=>R(Dr[+e.dataset.rec]))),ze.querySelector(`.close`).addEventListener(`click`,()=>Ye())}function Je(){!se||z||(Be=!0,ze&&ze.classList.add(`open`),qe())}function Ye(){Be=!1,ze&&ze.classList.remove(`open`)}function q(){Be?Ye():Je()}function Xe(e){B=e,he=5+e*2,pe=`spawning`}function Ze(){w.x=0,w.z=0,w.vx=0,w.vz=0,w.hp=100,w.stamina=100,w.hunger=100,w.thirst=100,w.facing=0,w.iframe=0;for(let e of E)e.alive=!1;ce=0,de=0,fe=0,z=!1,U=!1,_e=null;for(let e of O)e.hp=150,e.alive=!0,e.mesh.scale.set(1,1,1);for(let e of k)e.active=!1,e.mesh.visible=!1;N.length=0;let e=[`food`,`water`,`food`,`water`,`bandage`,`scrap`];for(let t=0;t<6;t++){let n=Math.random()*Math.PI*2,r=1.6+Math.random()*(i-2);re(Math.cos(n)*r,Math.sin(n)*r,e[t])}Fe&&(Fe.style.display=`none`),f.position.set(0,r,0),f.visible=!0,Xe(1),qe()}function Qe(){Ze()}function $e(e){se=e,n.visible=e;let t=e&&o;G&&(G.style.display=t?`block`:`none`),Ie&&(Ie.style.display=t?`block`:`none`),Le&&(Le.style.display=t?`block`:`none`),ke&&(ke.style.display=e?`block`:`none`),K&&!e&&(K.style.display=`none`),Fe&&!e&&(Fe.style.display=`none`),Re&&(Re.style.display=e?`block`:`none`),Ye();for(let e in Te)Te[e]=!1;Ee.x=Ee.y=0,U=!1,e&&Ze()}let Y=new s;function et(e,t,n){if(!se||Be)return;let a=n?n.windowGlow:0;if(H=Math.max(0,H-e),ge=Math.max(0,ge-e),C.material.opacity=Math.max(0,C.material.opacity-e*8),y.material.opacity=Math.max(0,y.material.opacity-e*6),!z){fe+=e,w.iframe=Math.max(0,w.iframe-e);let n=(Te.d||Te.arrowright?1:0)-(Te.a||Te.arrowleft?1:0)+Ee.x,a=(Te.w||Te.arrowup?1:0)-(Te.s||Te.arrowdown?1:0)+Ee.y,o=Math.hypot(n,a);o>1&&(n/=o,a/=o);let s=o>.05,c=(Te.shift||Ee.y>.95)&&w.stamina>2&&s,l=Math.cos(Ue),p=Math.sin(Ue),m=l*n+-p*a,h=-p*n+-l*a,g=c?5.2:3,_=1-Math.exp(-14*e);w.vx+=(m*g-w.vx)*_,w.vz+=(h*g-w.vz)*_,w.x+=w.vx*e,w.z+=w.vz*e;let b=Math.hypot(w.x,w.z);b>i&&(w.x*=i/b,w.z*=i/b,w.vx=0,w.vz=0),s&&(w.facing=Math.atan2(m,h)),w.stamina=v.clamp(w.stamina+(c?-34:22)*e,0,100),w.hunger=Math.max(0,w.hunger-.9*e),w.thirst=Math.max(0,w.thirst-1.15*e),w.hunger<=0||w.thirst<=0?w.hp=Math.max(0,w.hp-3.5*e):w.hunger>55&&w.thirst>55&&w.hp<100&&(w.hp=Math.min(100,w.hp+2*e));for(let e of k)e.active&&(e.x-w.x)**2+(e.z-w.z)**2<.3&&ae(e.kind)&&(e.active=!1,e.mesh.visible=!1,qe());for(let t of O){if(t.hp>=150)continue;let n=Math.cos(t.ang)*u,r=Math.sin(t.ang)*u;(n-w.x)**2+(r-w.z)**2<d*d&&(t.hp=Math.min(150,t.hp+30*e),t.hp>0&&(t.alive=!0))}w.hp<=0&&tt(),f.position.set(w.x,r,w.z),f.rotation.y=w.facing,f.visible=!(w.iframe>0&&Math.floor(t*20)%2==0),U&&Ce(),y.position.set(w.x,r+.06,w.z),y.rotation.z=-w.facing}let o=0;z||pe===`spawning`&&(he>0&&Math.random()<e*(B===1?3.5:6)&&(ye(a),he--),he<=0&&(pe=`fighting`));let s=0,c=1/0;for(let n=0;n<48;n++){let i=E[n];if(!i.alive){Y.position.set(0,-60,0),Y.scale.setScalar(0),Y.updateMatrix(),T.setMatrixAt(n,Y.matrix);continue}o++;let a=w.x-i.x,d=w.z-i.z,f=Math.hypot(a,d)||1;if(f<c&&(c=f),!z){let t=a/f*i.speed,n=d/f*i.speed,r=1-Math.exp(-6*e);if(i.vx+=(t-i.vx)*r,i.vz+=(n-i.vz)*r,f>.52){let t=i.x+i.vx*e,n=i.z+i.vz*e,r=Math.hypot(i.x,i.z),a=Math.hypot(t,n);if(!i.in&&r>=u&&a<4.9){let r=te(t,n);if(r.alive){let i=Math.atan2(n,t),a=4.9;t=Math.cos(i)*a,n=Math.sin(i)*a,r.hp-=15*e,r.hp<=0&&(r.hp=0,r.alive=!1)}}a<u-.1&&(i.in=!0),i.x=t,i.z=n}else w.iframe<=0&&(s=Math.max(s,i.dmg))}i.flash=Math.max(0,i.flash-e);let p=Math.sin(t*6+i.phase)*.04;Y.position.set(i.x,r+.3*i.size*l+p,i.z),Y.rotation.set(0,Math.atan2(i.vx,i.vz),Math.sin(t*3+i.phase)*.12),Y.scale.setScalar(i.size*l),Y.updateMatrix(),T.setMatrixAt(n,Y.matrix),D.set(Sr[i.type].color),i.flash>0?D.lerp(wr,.7):D.lerp(Tr,.35*(1-i.hp/i.maxhp)),T.setColorAt(n,D)}T.instanceMatrix.needsUpdate=!0,T.instanceColor&&(T.instanceColor.needsUpdate=!0);let p=0;for(let e of O){e.alive&&p++;let t=Math.max(0,e.hp/150);e.mesh.scale.y=e.alive?Math.max(.18,t):.12,e.mesh.position.y=r+.35*e.mesh.scale.y,e.mesh.material.color.copy(e.baseColor).lerp(Tr,(1-t)*.55)}!z&&s>0&&(w.hp=Math.max(0,w.hp-s*(B===1?.5:1)),w.iframe=.6,w.hp<=0&&tt()),!z&&pe===`fighting`&&o===0&&he<=0&&(pe=`complete`,me=2.2,He(`WAVE ${B} CLEAR`,2)),!z&&pe===`complete`&&(me-=e,me<=0&&(Xe(B+1),He(`WAVE ${B}`,1.4))),Ve>0&&(Ve-=e,Ve<=0&&K&&(K.style.display=`none`)),Ae&&(Ae.style.width=`${w.hp}%`),je&&(je.style.width=`${w.stamina}%`),Me&&(Me.style.width=`${w.hunger}%`),Ne&&(Ne.style.width=`${w.thirst}%`),Pe&&(Pe.textContent=`WAVE ${B}   KILLS ${ce}   SCORE ${de}`),typeof window<`u`&&(window.__hoard={active:se,dead:z,paused:Be,hp:Math.round(w.hp),stamina:Math.round(w.stamina),hunger:Math.round(w.hunger),thirst:Math.round(w.thirst),zombies:o,barriers:p,pickups:k.filter(e=>e.active).length,inv:Object.fromEntries(N.map(e=>[e.id,e.n])),wave:B,kills:ce,score:de,weapon:`gun`,znear:+c.toFixed(2),px:+w.x.toFixed(2),pz:+w.z.toFixed(2)})}function tt(){z=!0,U=!1,Fe&&(Fe.querySelector(`.ds`).innerHTML=`Wave reached: ${B}<br>Kills: ${ce}<br>Score: ${de}<br>Survived: ${fe.toFixed(0)}s`,Fe.style.display=`flex`)}return{group:n,update:et,setActive:$e,setAzimuth:We,setAim:Ge,setFiring:Ke,melee:we,reset:Ze,restart:Qe,openBag:Je,closeBag:Ye,toggleBag:q,addItem:ae,get player(){return w},get dead(){return z},get active(){return se},get paused(){return Be},get inv(){return N.map(e=>({...e}))},get nearestPickup(){let e=null,t=1e9;for(let n of k){if(!n.active)continue;let r=(n.x-w.x)**2+(n.z-w.z)**2;r<t&&(t=r,e=n)}return e?{x:e.x,z:e.z}:null},setTarget(){}}}var{Timer:kr}=O,Ar=new URLSearchParams(window.location.search),jr=Ar.get(`demo`)===`1`||Ar.has(`capture`);window.__demo=jr;var Mr=(Ar.get(`city`)?Number(Ar.get(`city`)):0)||Math.random()*1e9|0,Nr=0,Pr=gr({demo:jr,citySeed:Mr,profileIndex:Nr}),{renderer:Fr,scene:Ir,rig:Lr,sunRig:Rr,city:zr,landmarkFactory:Br}=Pr,Vr=Or({extent:zr.extent,plinthTop:.3});Ir.add(Vr.group),window.__hoardApi=Vr;var Hr=!0;window.__shadows=Hr,window.__scene=`hoard`;var Ur=new M,Wr=new Set,Gr=6.5;function Kr(e){zr.group.traverse(t=>{!t.isMesh||t.userData.ground||!t.visible||(t.getWorldPosition(Ur),Math.hypot(Ur.x,Ur.z)<e&&(t.visible=!1,Wr.add(t)))})}function qr(){for(let e of Wr)e.visible=!0;Wr.clear()}var Jr=new H,Yr=new M,Xr=new M,Zr=new Set;function Qr(){for(let e of Zr)e.material&&(e.material.opacity=1,e.material.transparent=!!e.userData._wasT,e.material.depthWrite=e.userData._wasDW!==!1);Zr.clear()}function $r(e){Qr();let t=Lr.camera;for(let[n,r]of[[0,0],[.7,.4],[-.7,.4]]){Xr.set(e.x+n,.6,e.z+r),Yr.subVectors(Xr,t.position);let i=Yr.length();Jr.set(t.position,Yr.normalize()),Jr.far=i-.4;for(let e of Jr.intersectObject(zr.group,!0)){let t=e.object;!t.material||t.userData.ground||Zr.has(t)||(t.userData._wasT=t.material.transparent,t.userData._wasDW=t.material.depthWrite,t.material.transparent=!0,t.material.opacity=.16,t.material.depthWrite=!1,Zr.add(t))}}}function ei(){Vr.setActive(!0),Kr(Gr),Lr.setMode(we.DIMETRIC),Lr.setZoom(2.8,!0),Lr.setTarget(Vr.player.x,.6,Vr.player.z,!0)}var ti=new H,ni=new U,ri=new T(new M(0,1,0),-.32),ii=new M,ai=window.matchMedia&&window.matchMedia(`(pointer: coarse)`).matches,oi=!1,si=0,ci=0,li=.005,ui=(e,t)=>{ni.x=e/window.innerWidth*2-1,ni.y=-(t/window.innerHeight)*2+1};Fr.domElement.addEventListener(`contextmenu`,e=>e.preventDefault()),Fr.domElement.addEventListener(`mousedown`,e=>{e.button===0&&(ui(e.clientX,e.clientY),Vr.setFiring(!0)),e.button===2&&(oi=!0,si=e.clientX,ci=e.clientY)}),window.addEventListener(`mousemove`,e=>{ui(e.clientX,e.clientY),oi&&(Lr.orbit(-(e.clientX-si)*li,-(e.clientY-ci)*li),si=e.clientX,ci=e.clientY)}),window.addEventListener(`mouseup`,()=>{Vr.setFiring(!1),oi=!1}),Fr.domElement.addEventListener(`wheel`,e=>{e.preventDefault(),Lr.zoomBy(Math.exp(e.deltaY*.0015))},{passive:!1}),window.addEventListener(`keydown`,e=>{(e.key===`h`||e.key===`H`)&&(Hr=!Hr,window.__shadows=Hr)}),Br.whenReady.then(()=>{zr.generate(Mr,Nr),Pr.fitShadowFrustum(),qr(),Kr(Gr),window.__cityReady=!0});var di=new kr;di.connect(document);function fi(){di.update();let e=Math.min(di.getDelta(),.1);Vr.setAzimuth(Lr.azimuth),ai||(ti.setFromCamera(ni,Lr.camera),ti.ray.intersectPlane(ri,ii)&&Vr.setAim(ii.x,ii.z)),Vr.update(e,di.getElapsed(),Rr),Lr.setTarget(Vr.player.x,.6,Vr.player.z),Lr.update(e),$r(Vr.player),Pr.updateWorld(e,di.getElapsed(),{shadowsOn:Hr,seasonTarget:0});let t=Pr.decideStyle();Pr.renderCityPipeline(t,null),requestAnimationFrame(fi)}ei(),fi(),br({key:`hoard`,title:`The Hoard`,tips:[`Move: WASD / arrows · on touch: the left thumb-stick`,`Aim: mouse / drag · Fire: hold click / the FIRE button · Melee: the MELEE button`,`Survive the waves · B: bag & crafting · Esc: exit`]}),window.addEventListener(`resize`,()=>{Pr.resize()});