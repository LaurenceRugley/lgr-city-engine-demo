import{$ as e,A as t,B as n,C as r,D as i,E as a,F as o,G as s,H as c,I as l,J as u,K as d,L as f,M as p,N as m,O as h,P as g,Q as _,R as v,S as y,T as b,U as x,V as S,W as C,X as w,Y as T,Z as E,_ as D,a as O,at as k,b as ee,c as A,ct as j,d as M,dt as N,et as P,f as F,g as I,h as L,i as te,it as R,j as ne,k as re,l as ie,lt as z,m as B,n as ae,nt as oe,o as V,ot as H,p as se,q as ce,r as le,rt as ue,s as U,st as de,t as fe,tt as pe,u as me,ut as W,v as he,w as ge,x as _e,y as ve,z as ye}from"./three-BIEuwCG6.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var be=Math.atan(1/Math.SQRT2),xe=Math.atan(.5),Se=Math.PI/4,Ce={PERSPECTIVE:4,ISOMETRIC:5,DIMETRIC:6},we=.12,Te=1.45,G=4,Ee=40,K=1.5,De=16,Oe=6,ke=22,Ae=3.5,je=11,Me=(e,t,n)=>e+(t-e)*(1-Math.exp(-8*n)),Ne=(e,t)=>e+Math.PI*2*Math.round((t-e)/(Math.PI*2));function Pe({aspect:e,fov:t=48,near:n=.1,far:r=100,target:i=new W(0,.8,0),azimuth:a=Se,elevation:o=.52,distance:c=12,zoom:l=5.5}={}){let u=new ce(t,e,n,r),d=new s(-1,1,1,-1,n,r),p=Ce.PERSPECTIVE,m=e,h={azimuth:a,elevation:o,distance:c,zoom:l,target:i.clone()},g={azimuth:a,elevation:o,distance:c,zoom:l,target:i.clone()},_=!1,v=null,y=new W,b=()=>p===Ce.PERSPECTIVE?u:d;function x(e){e!==p&&(p=e,p===Ce.ISOMETRIC||p===Ce.DIMETRIC?(h.elevation=p===Ce.ISOMETRIC?be:xe,h.azimuth=Ne(Se,g.azimuth),_=!0):_=!1)}function S(e,t){h.azimuth+=e,_||(h.elevation=f.clamp(h.elevation+t,we,Te))}function C(e){p===Ce.PERSPECTIVE?h.distance=f.clamp(h.distance*e,G,Ee):h.zoom=f.clamp(h.zoom*e,K,De)}function w(e,t){let n=h.azimuth,r=p===Ce.PERSPECTIVE?h.distance*.04:h.zoom*.08,i=new W(Math.cos(n),0,-Math.sin(n)),a=new W(-Math.sin(n),0,-Math.cos(n));h.target.addScaledVector(i,e*r),h.target.addScaledVector(a,t*r)}function T(e,t){m=e/t,u.aspect=m,u.updateProjectionMatrix()}function E(e){v&&(v(y),h.target.copy(y)),g.azimuth=Me(g.azimuth,h.azimuth,e),g.elevation=Me(g.elevation,h.elevation,e),g.distance=Me(g.distance,h.distance,e),g.zoom=Me(g.zoom,h.zoom,e),g.target.x=Me(g.target.x,h.target.x,e),g.target.y=Me(g.target.y,h.target.y,e),g.target.z=Me(g.target.z,h.target.z,e);let t=Math.cos(g.elevation),n=Math.sin(g.elevation),r=Math.cos(g.azimuth),i=Math.sin(g.azimuth),a=b();if(a.position.set(g.target.x+g.distance*t*i,g.target.y+g.distance*n,g.target.z+g.distance*t*r),a.lookAt(g.target),a.isOrthographicCamera){let e=g.zoom,t=e*m;a.left=-t,a.right=t,a.top=e,a.bottom=-e,a.updateProjectionMatrix()}}function D(e,t,n,r=!1){h.target.set(e,t,n),r&&g.target.copy(h.target)}function O(e,t=!1){h.zoom=f.clamp(e,K,De),t&&(g.zoom=h.zoom)}function k(e,{frame:t,snap:n=!1}={}){v=e,n&&(v(y),h.target.copy(y),g.target.copy(y)),t!=null&&(p===Ce.PERSPECTIVE?h.distance=f.clamp(t,G,Ee):h.zoom=f.clamp(t,K,De))}function ee(){v=null}return{get camera(){return b()},get mode(){return p},get azimuth(){return g.azimuth},get following(){return!!v},setTarget:D,setZoom:O,setFollow:k,clearFollow:ee,get styleT(){return p===Ce.PERSPECTIVE?f.clamp((g.distance-Oe)/(ke-Oe),0,1):f.clamp((g.zoom-Ae)/(je-Ae),0,1)},setMode:x,orbit:S,zoomBy:C,pan:w,setViewport:T,update:E}}var Fe={value:0},Ie=new B(`#ffffff`),Le={value:0},Re={value:0},ze={value:0},Be=new z,Ve={value:0},He={value:0},Ue=`
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
`;function q(e){e.uniforms.uVector=Fe,e.uniforms.uVecTint={value:Ie},e.uniforms.uVecShadow=Le,e.uniforms.uSnow=Re,e.uniforms.uCloud=ze,e.uniforms.uCloudOff={value:Be},e.uniforms.uFogCharm=Ve}function We(e){return e.replace(`#include <fog_fragment>`,`
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
#include <shadowmask_pars_fragment>`)}var qe=`col *= mix(1.0, getShadowMask(), uVecShadow);`;function Je(e,{color:t,id:n,windowGlow:r,winColors:i=[`#ffb852`,`#8cd9ff`],litFrac:a=.55}={}){let o=[0,1,2].map(e=>new B(i[e]??i[i.length-1]));return e.customProgramCacheKey=()=>`lgr-vec-tower`,e.onBeforeCompile=e=>{q(e),e.uniforms.uWindowGlow=r,e.uniforms.uWinId={value:n},e.uniforms.uVecColor={value:new B(t)},e.uniforms.uWinA={value:o[0]},e.uniforms.uWinB={value:o[1]},e.uniforms.uWinC={value:o[2]},e.uniforms.uWinLit={value:a},e.vertexShader=Ge(e.vertexShader),e.fragmentShader=We(Ke(e.fragmentShader.replace(`#include <common>`,`#include <common>
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
          ${qe}                                  // the sun's shadow darkens the body
          vec3 wcol; vec2 w = winTerms(wcol);
          vec3 glass = vec3(0.17, 0.23, 0.34);          // dark glass-blue panes (day)
          col = mix(col, glass, w.x * 0.85);
          col += w.x * w.y * wcol * uWindowGlow * 1.5;  // …windows EMIT (unshadowed) at night
          gl_FragColor = vec4(col, diffuseColor.a);
        }`)))},e}function J(e,{color:t=null,glow:n=null,glowDay:r=0,glowNight:i=1,windowGlow:a=null,season:o=!1}={}){let s=t===null,c=n!==null&&a!==null;return e.customProgramCacheKey=()=>`lgr-vec|`+(s?`d`:`c`)+(c?`g`:``)+(o?`s`:``),e.onBeforeCompile=e=>{q(e),s||(e.uniforms.uVecColor={value:new B(t)}),c&&(e.uniforms.uGlow={value:new B(n)},e.uniforms.uGlowDay={value:r},e.uniforms.uGlowNight={value:i},e.uniforms.uWindowGlow=a),o&&(e.uniforms.uSeason=He),e.vertexShader=Ge(e.vertexShader);let l=s?`diffuseColor.rgb`:`uVecColor`,u=o?`seasonShift(${l})`:l,d=(s?``:`uniform vec3 uVecColor;
`)+(c?`uniform vec3 uGlow; uniform float uGlowDay; uniform float uGlowNight; uniform float uWindowGlow;
`:``)+(o?`uniform float uSeason;
vec3 seasonShift(vec3 c){
  c = mix(c, vec3(0.86, 0.46, 0.13), smoothstep(0.40, 0.70, uSeason));   // → autumn orange
  c = mix(c, vec3(0.46, 0.33, 0.20), smoothstep(0.75, 1.00, uSeason));   // → bare brown
  return c;
}
`:``),f=c?`uGlow * mix(uGlowDay, uGlowNight, uWindowGlow)`:`vec3(0.0)`,p=We(Ke(e.fragmentShader.replace(`#include <common>`,`#include <common>
`+d+Ue).replace(`#include <opaque_fragment>`,`#include <opaque_fragment>
        if (uVector > 0.5) {
          vec3 col = vecShade(${u});
          ${qe}                            // the sun's shadow darkens the flat tier…
          gl_FragColor = vec4(col + ${f}, diffuseColor.a);  // …but the night glow stays lit
        }`)));c&&(p=p.replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>\n  totalEmissiveRadiance += ${f};`)),e.fragmentShader=p},e}function Ye(e){let t=e>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Xe(e){let t=Ye(e);return{next:t,range:(e,n)=>e+(n-e)*t(),int:(e,n)=>e+Math.floor(t()*(n-e+1)),pick:e=>e[Math.floor(t()*e.length)],chance:e=>t()<e}}var Ze=[{key:`manhattan`,name:`Manhattan`,towers:[`#EDE3C8`,`#D9B98A`,`#B5562F`,`#A8C8E8`,`#2E3F5C`],ground:`#7CC455`,street:`#9AA0A6`,sidewalk:`#C8CCD0`,park:`#5DB347`,water:`#29A8D8`,shopfronts:[`#C04A3A`,`#3A7AC0`,`#C09A2A`],glass:`#7FA8CC`,winColors:[`#ffd27a`,`#9ad6ff`],hMax:4.6,sigma:.36,roofRate:.35,pSplit:.6,nightLit:.55,roofTint:null,coast:{base:.55,out:1,in:.6,jag:1.05},landmarks:[`empireState`,`chrysler`,`liberty`]},{key:`paris`,name:`Paris`,towers:[`#E8DCC0`,`#F2EAD6`,`#E0D2B4`],ground:`#8CC46A`,street:`#A8A29A`,sidewalk:`#D4CEC2`,park:`#6DB35A`,water:`#3FA8C8`,shopfronts:[`#C04A3A`,`#3A6B5A`,`#7A5AC0`],glass:`#5A6B7A`,winColors:[`#ffdca0`,`#ffcaa0`],hMax:1.5,sigma:.9,roofRate:.15,pSplit:.75,nightLit:.45,roofTint:`#6A7886`,coast:{base:1.05,out:.55,in:.3,jag:.5},landmarks:[`eiffel`,`arcDeTriomphe`,`sacreCoeur`]},{key:`neoTokyo`,name:`Neo-Tokyo`,towers:[`#2A3038`,`#3A4250`,`#252B36`,`#4A4456`],ground:`#3A4A42`,street:`#5A6068`,sidewalk:`#7A8088`,park:`#2E5E46`,water:`#0E6878`,shopfronts:[`#E8483A`,`#5AE8E0`,`#E85AA0`],glass:`#5AE8E0`,winColors:[`#5AE8E0`,`#E85AA0`,`#E8E06A`],hMax:5.2,sigma:.42,roofRate:.6,pSplit:.6,nightLit:.7,roofTint:null,coast:{base:.7,out:1.05,in:.62,jag:1.7},landmarks:[`tokyoTower`,`pagoda`,`neonBillboard`]}];Ze.map(e=>e.key);var Y=.3,Qe=1.9,X=.55,$e=2.45,Z=.12,et=.6,tt=6,Q={BASE:.7,OUT:.95,IN:.55,JAG:1,SAMPLES_PER_EDGE:28,HARBOR_DEPTH:.55,HARBOR_WIDTH:.26},nt={PLINTH_TOP:Y,BLOCK:Qe,STREET:X,PITCH:$e,SIDEWALK:Z,SHORE:et,N:tt,COAST:Q};function rt(e,t,n){let r=n?.base??Q.BASE,i=n?.out??Q.OUT,a=n?.in??Q.IN,o=n?.jag??Q.JAG,s=t+r,c=Xe((e^789079)>>>0),l=[2,3,5,8,11,13].map(e=>({k:e,amp:1/e*o**((e-2)/6),phase:c.range(0,Math.PI*2)})),u=l.reduce((e,t)=>e+t.amp,0),d=e=>{let t=0;for(let n of l)t+=n.amp*Math.sin(n.k*e*Math.PI*2+n.phase);return Math.max(-1,Math.min(1,t/(u*.6)))},f=[{fix:+s,nx:1,nz:0,sign:1},{fix:+s,nx:0,nz:1,sign:-1},{fix:-s,nx:-1,nz:0,sign:-1},{fix:-s,nx:0,nz:-1,sign:1}],p=t+.22,m=Q.SAMPLES_PER_EDGE,h=4*m,g=[],_=0;for(let e=0;e<4;e++){let t=f[e];for(let n=0;n<m;n++,_++){let o=n/m,c=_/h,l=(-s+2*s*o)*t.sign,u=d(c),f=u>=0?u*i:u*a;if(e===0){let e=Math.abs(o-.5);if(e<Q.HARBOR_WIDTH){let t=.5+.5*Math.cos(e/Q.HARBOR_WIDTH*Math.PI);f-=(r+Q.HARBOR_DEPTH)*t}}let v,y;t.nx===0?(y=t.fix+t.nz*f,v=l,y=t.nz>0?Math.max(y,p):Math.min(y,-p)):(v=t.fix+t.nx*f,y=l,v=t.nx>0?Math.max(v,p):Math.min(v,-p)),g.push(new z(v,y))}}return{points:g,B:s,maxR:s+i,harborX:p}}function it(e){(Array.isArray(e)?e:[e]).forEach(e=>e&&e.dispose&&e.dispose())}function at({seed:e=1,profileIndex:t=0,landmarkFactory:r=null,windowGlow:a}){let o=new b,s=new b,l=new b;s.raycast=()=>{},l.raycast=()=>{},o.add(s,l);let u=new ve(16773594,3);u.position.set(.45,.6,-.65).multiplyScalar(10);let d=new i(7313331,2762272,1);o.add(u,d);let f=0,p=[],m={seed:e,profileIndex:t,profile:Ze[t],extent:0,meshCount:0};function h(e,t,r,i){let a=new n(new V(e,.04,t),J(new c({color:i,roughness:.95,flatShading:!0}),{color:i}));return a.position.y=r,a.userData.ground=!0,a}function g(e,t){for(let e of s.children)e.geometry&&e.geometry.dispose(),it(e.material);s.clear();for(let e of l.children)e.traverse(e=>{e.isMesh&&it(e.material)});l.clear(),p.length=0,f=0;let i=Xe(e),a=Ze[t],o=(tt-1)/2*$e,u=7.075;m={seed:e,profileIndex:t,profile:a,extent:u+(a.coast?.base??Q.BASE),meshCount:0};let d=rt(e,u,a.coast);m.coast=d;let g=new R;d.points.forEach((e,t)=>t?g.lineTo(e.x,e.y):g.moveTo(e.x,e.y)),g.closePath();let b=new n(new _e(g,{depth:2,bevelEnabled:!1,steps:1}),J(new c({color:a.ground,roughness:.9,flatShading:!0,side:2}),{color:a.ground}));b.rotation.x=-Math.PI/2,b.position.y=Y-2,b.userData.ground=!0,s.add(b);let S=2*7.195;s.add(h(S,S,.32,a.street)),x(d.harborX,a);let w=[];for(let e=0;e<tt;e++)for(let t=0;t<tt;t++)w.push([e,t]);let T=new Set,E=Math.max(1,Math.round(w.length*.08));for(;T.size<E;)T.add(i.int(0,w.length-1));let D=i.range(-2.45*.6,$e*.6),k=i.range(-2.45*.6,$e*.6),ee=Math.hypot(o,o),A=[];if(w.forEach(([e,t],n)=>{let r=(e-(tt-1)/2)*$e,o=(t-(tt-1)/2)*$e;if(s.add(h(Qe,Qe,.32999999999999996,a.sidewalk).translateX(r).translateZ(o)),T.has(n)){s.add(h(Qe-Z*2,Qe-Z*2,.35,a.park).translateX(r).translateZ(o));let e=i.int(3,5);for(let t=0;t<e;t++)C(r+i.range(-.6,.6),o+i.range(-.6,.6),a,i);return}let c=Qe-Z*2,l=i.chance(a.pSplit)?2:1,u=i.chance(a.pSplit)?2:1,d=c/l,f=c/u;for(let e=0;e<l;e++)for(let t=0;t<u;t++){let n=r-c/2+d*(e+.5),s=o-c/2+f*(t+.5),l=Math.max(.6,d-.1),u=Math.max(.6,f-.1),p=Math.hypot(n-D,s-k)/ee,m=Math.exp(-(p*p)/(2*a.sigma*a.sigma)),h=Math.max(.5,.5+(a.hMax-.5)*m*i.range(.75,1.25));h>a.hMax*.5&&Math.min(l,u)>=.7&&A.push({lx:n,lz:s,fw:l,fd:u,h,r:p}),_(n,s,l,u,h,a,i)}}),r&&r.ready){A.sort((e,t)=>e.r-t.r);let e=[],t=a.landmarks;for(let n=0;n<t.length&&A.length;n++){let i=null;for(let t of A)if(e.every(e=>Math.hypot(e.lx-t.lx,e.lz-t.lz)>$e*.9)){i=t;break}i||=A[0],e.push(i),v(i.lx,i.lz);let o=a.hMax*r.heightFactor(t[n]),s=r.make(t[n],{x:i.lx,z:i.lz,w:i.fw,d:i.fd,h:o,plinthTop:Y});if(s){l.add(s);let e=new O().setFromObject(s);y(e.min.x-.15,e.max.x+.15,e.min.z-.15,e.max.z+.15)}}}s.traverse(e=>{e.isMesh&&(e.userData.ground?(e.castShadow=!1,e.receiveShadow=!0):e.material&&e.material.isMeshBasicMaterial?(e.castShadow=!1,e.receiveShadow=!1):(e.castShadow=!0,e.receiveShadow=!0))}),l.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),m.meshCount=s.children.length+l.children.length;let j=0;for(let e of s.children){let t=e.position;j=(Math.imul(j,16777619)^(Math.round(t.x*100)*2654435761^Math.round(t.y*100)*40503^Math.round(t.z*100)*2246822519))>>>0}for(let e of m.coast.points)j=(Math.imul(j,16777619)^(Math.round(e.x*100)*2654435761^Math.round(e.y*100)*40503))>>>0;m.sig=j,window.__city={seed:e,profile:a.key,meshes:m.meshCount,sig:j}}function _(e,t,r,i,o,l,u){let d=Je(new c({flatShading:!0,roughness:.7,metalness:.05}),{color:u.pick(l.towers),id:++f,windowGlow:a,winColors:l.winColors,litFrac:l.nightLit}),m=new n(new V(r,o,i),d);if(m.position.set(e,Y+o/2,t),m.userData.lot=[e,t],s.add(m),l.roofTint){let a=J(new c({color:l.roofTint,roughness:.85,flatShading:!0}),{color:l.roofTint}),u=new n(new V(r*1.02,.08,i*1.02),a);u.position.set(e,Y+o+.04,t),u.userData.lot=[e,t],s.add(u)}if(o<1.4){let a=u.pick(l.shopfronts),o=new n(new V(r*1.04,.18,i*1.04),J(new c({color:a,roughness:.8,flatShading:!0}),{color:a}));o.position.set(e,.39,t),o.userData.lot=[e,t],s.add(o)}let h=Y+o,g=r,_=i;if(o>l.hMax*.5&&u.chance(.55)){let d=r*u.range(.5,.72),p=i*u.range(.5,.72),m=o*u.range(.18,.4),v=new n(new V(d,m,p),Je(new c({flatShading:!0,roughness:.7,metalness:.05}),{color:u.pick(l.towers),id:++f,windowGlow:a,winColors:l.winColors,litFrac:l.nightLit}));v.position.set(e,Y+o+m/2,t),v.userData.lot=[e,t],s.add(v),h=Y+o+m,g=d,_=p}if(o>l.hMax*.45&&u.chance(l.roofRate)){let r=u.chance(.5)?new n(new V(g*.4,.18,_*.4),J(new c({color:`#9a9a9a`,flatShading:!0}),{color:`#9a9a9a`})):new n(new I(g*.18,g*.18,.22,10),J(new c({color:`#b9bec4`,flatShading:!0}),{color:`#b9bec4`}));if(r.position.set(e+u.range(-.1,.1),h+.11,t+u.range(-.1,.1)),r.userData.lot=[e,t],s.add(r),u.chance(.25)){let r=new n(new k(.05,6,5),new S({color:`#ff3b30`,transparent:!0,opacity:1}));r.position.set(e,h+.15,t),r.userData.lot=[e,t],r.raycast=()=>{},s.add(r),p.push({mesh:r,phase:u.range(0,6.28)})}}if(o>l.hMax*.7&&u.chance(.35)){let r=o*u.range(.18,.34),i=new n(new I(.018,.05,r,6),J(new c({color:`#c8ccd2`,flatShading:!0}),{color:`#c8ccd2`}));i.position.set(e,h+r/2,t),i.userData.lot=[e,t],i.raycast=()=>{},s.add(i)}}function v(e,t){for(let n=s.children.length-1;n>=0;n--){let r=s.children[n];r.userData.lot&&Math.abs(r.userData.lot[0]-e)<1e-4&&Math.abs(r.userData.lot[1]-t)<1e-4&&(r.geometry&&r.geometry.dispose(),it(r.material),s.remove(r))}for(let e=p.length-1;e>=0;e--)p[e].mesh.parent||p.splice(e,1)}function y(e,t,n,r){for(let i=s.children.length-1;i>=0;i--){let a=s.children[i];a.userData.lot&&a.position.x>=e&&a.position.x<=t&&a.position.z>=n&&a.position.z<=r&&(a.geometry&&a.geometry.dispose(),it(a.material),s.remove(a))}}function x(e,t){let r=J(new c({color:`#7a5634`,roughness:.95,flatShading:!0}),{color:`#7a5634`}),i=(e,t,i,a)=>{let o=new n(new V(e,.06,t),r);o.position.set(i,Y-.16,a),s.add(o)};i(.24,2,e+.02,0),i(1.3,.22,e+.7,-.72),i(1.3,.22,e+.7,.72)}function C(e,t,r,i){let a=new B(r.park),o=(r,o)=>{let l=a.clone().offsetHSL(0,0,i.range(-.06,.06)).getStyle(),u=new n(new k(r,7,6),J(new c({color:l,flatShading:!0}),{color:l,season:!0}));u.scale.y=.7,u.position.set(e,Y+o,t),u.userData.lot=null,s.add(u)},l=new n(new V(.05,.18,.05),J(new c({color:`#6b4a2a`,flatShading:!0}),{color:`#6b4a2a`}));l.position.set(e,.39,t),s.add(l),o(.22,.28),o(.16,.46)}function w(e){for(let t of p)t.mesh.material.opacity=.35+.65*(.5+.5*Math.sin(e*3+t.phase))}return g(e,t),{group:o,key:u,fill:d,update:w,generate:g,get state(){return m},get extent(){return m.extent},get waterColor(){return m.profile.water},profiles:Ze}}var ot=Math.PI*2,st=.7,ct=90,lt=[{name:`night`,sun:`#4a6f9e`,intensity:.35,hemiSky:`#26344f`,hemiGround:`#0c1018`,horizon:`#1e2942`,sky:`#36486e`,exposure:.95,outline:`#101a30`,window:1,toonGain:2.6,turbidity:3,rayleigh:1,mie:.004,mieG:.75},{name:`dawn`,sun:`#ff9e54`,intensity:2.4,hemiSky:`#8a7686`,hemiGround:`#2a1f1a`,horizon:`#b8512c`,sky:`#ffb070`,exposure:1.05,outline:`#241826`,window:.3,toonGain:2,turbidity:6,rayleigh:3,mie:.025,mieG:.86},{name:`noon`,sun:`#fff4e0`,intensity:4.6,hemiSky:`#9cb8cc`,hemiGround:`#33302a`,horizon:`#5e7689`,sky:`#aacadd`,exposure:1.18,outline:`#0b0a08`,window:0,toonGain:1.7,turbidity:2.2,rayleigh:1.3,mie:.005,mieG:.78},{name:`dusk`,sun:`#ff6b35`,intensity:2,hemiSky:`#7a566a`,hemiGround:`#281a18`,horizon:`#b0432a`,sky:`#ff8a5a`,exposure:1.05,outline:`#1f1420`,window:.4,toonGain:2,turbidity:7,rayleigh:3.2,mie:.028,mieG:.87}],ut=e=>e-Math.floor(e),dt=(e,t,n)=>e+(t-e)*n,ft=(e,t,n)=>e+(t-e)*(1-Math.exp(-6*n));function pt({t:e=.5}={}){let t=e,n=e,r=!1,i=!1,a=lt.map(e=>({name:e.name,sun:new B(e.sun),hemiSky:new B(e.hemiSky),hemiGround:new B(e.hemiGround),horizon:new B(e.horizon),sky:new B(e.sky),outline:new B(e.outline),intensity:e.intensity,exposure:e.exposure,window:e.window,toonGain:e.toonGain,turbidity:e.turbidity,rayleigh:e.rayleigh,mie:e.mie,mieG:e.mieG})),o=new W(0,1,0),s=new B(`#fff4e0`),c=new B(`#6f97b3`),l=new B(`#2a2620`),u=new B(`#3a4a57`),d=new B(`#7da3bd`),f=new B(`#0b0a08`),p=new B(`#000000`),m=3,h=1,g=0,_=1.7,v={turbidity:2.2,rayleigh:1.3,mie:.005,mieG:.78},y=new W;function b(e){let t=ut(e)*4,n=Math.floor(t)%4,r=(n+1)%4,i=t-Math.floor(t),b=a[n],x=a[r];s.lerpColors(b.sun,x.sun,i),c.lerpColors(b.hemiSky,x.hemiSky,i),l.lerpColors(b.hemiGround,x.hemiGround,i),u.lerpColors(b.horizon,x.horizon,i),d.lerpColors(b.sky,x.sky,i),f.lerpColors(b.outline,x.outline,i),m=dt(b.intensity,x.intensity,i),h=dt(b.exposure,x.exposure,i),g=dt(b.window,x.window,i),_=dt(b.toonGain,x.toonGain,i),v.turbidity=dt(b.turbidity,x.turbidity,i),v.rayleigh=dt(b.rayleigh,x.rayleigh,i),v.mie=dt(b.mie,x.mie,i),v.mieG=dt(b.mieG,x.mieG,i),p.setRGB(.045*g,.075*g,.14*g);let S=ut(e)*ot-Math.PI/2,C=Math.cos(S),w=Math.sin(S);y.set(C,w*Math.cos(st),w*Math.sin(st)),y.y>=0?o.copy(y):o.copy(y).negate()}return b(t),{sunDir:o,sunColor:s,hemiSky:c,hemiGround:l,horizon:u,sky:d,outline:f,toonFloor:p,skyParams:v,sunArc:y,get sunIntensity(){return m},get exposure(){return h},get windowGlow(){return g},get toonGain(){return _},get t(){return ut(t)},get auto(){return r},get clock(){let e=Math.round(ut(t)*24*60)%1440;return`${String(Math.floor(e/60)).padStart(2,`0`)}:${String(e%60).padStart(2,`0`)}`},cyclePreset(){n=(Math.floor(t*4+1e-4)+1)/4},nudge(e){n+=e/24},goTo(e){n=e},toggleAuto(){r=!r},setReducedMotion(e){i=e},update(e){r&&!i&&(n+=e/ct),t=ft(t,n,e),b(t)}}}function mt(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.35,`rgba(255,255,255,0.55)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new ie(e);return r.colorSpace=pe,r}function ht(e,t){let n=[];for(let r=0;r<16;r++){let i=r/16*Math.PI*2;n.push(new W(Math.cos(i)*e,t,Math.sin(i)*e))}return new M(n,!0,`catmullrom`,.5)}function gt(e){let t=(t,n)=>Math.exp(-((e-t)*(e-t))/(2*n*n)),n=Math.max(t(.33,.05),t(.75,.06)),r=f.smoothstep(e,.24,.3)*(1-f.smoothstep(e,.8,.88));return f.clamp(.15+.55*r+.45*n,.12,1)}function _t(){let{PITCH:e,N:t,PLINTH_TOP:n}=nt,r=t+1,i=n+.04,a=n=>(n-t/2)*e,o=t/2,s=[],c=(e,t)=>t*r+e;for(let e=0;e<r;e++)for(let t=0;t<r;t++)s.push({x:a(t),z:a(e),i:t,j:e,edges:[]});let l=[],u=(t,n)=>{let r=(s[t].i===o||s[t].j===o)&&(s[n].i===o||s[n].j===o),i=l.length;l.push({a:t,b:n,len:e,main:r}),s[t].edges.push(i),s[n].edges.push(i)};for(let e=0;e<r;e++)for(let t=0;t<r;t++)t<r-1&&u(c(t,e),c(t+1,e)),e<r-1&&u(c(t,e),c(t,e+1));return{nodes:s,edges:l,y:i,mid:o}}function vt({plinthTop:e=.3,extent:n=4,profile:r=null}={}){let i=new b,a=_t(),{nodes:o,edges:s}=a,l=a.y,u=.34,d=0;{let e=nt.PITCH-u*2;d=Math.max(1,Math.floor((e+.26)/.56))}let p=new S({color:`#e8c84a`,fog:!0}),m=new t(new V(.05,.012,.3),p,s.length*d);m.frustumCulled=!1,m.raycast=()=>{},m.receiveShadow=!1,m.castShadow=!1,i.add(m);{let e=new C,t=0;for(let n of s){let r=o[n.a],i=o[n.b],a=i.x-r.x,s=i.z-r.z,c=Math.hypot(a,s),f=a/c,p=s/c,h=Math.atan2(f,p),g=c-u*2;for(let n=0;n<d;n++){let i=u+(d===1?g/2:g*n/(d-1));e.position.set(r.x+f*i,l,r.z+p*i),e.rotation.set(0,h,0),e.updateMatrix(),m.setMatrixAt(t++,e.matrix)}}m.instanceMatrix.needsUpdate=!0}let h=new t(new V(.34,.26,.74),J(new c({flatShading:!0,roughness:.5,metalness:.3})),12);h.castShadow=!0,h.receiveShadow=!1,h.frustumCulled=!1,h.raycast=()=>{};let g=new A,_=new Float32Array(72),v=new Float32Array(72),y=new B(`#fff0c0`),x=new B(`#ff3528`);for(let e=0;e<12;e++)y.toArray(v,e*3),x.toArray(v,(12+e)*3),_[e*3+1]=-50,_[(12+e)*3+1]=-50;g.setAttribute(`position`,new U(_,3)),g.setAttribute(`color`,new U(v,3));let T=new E({size:.72,sizeAttenuation:!0,map:mt(),vertexColors:!0,transparent:!0,opacity:0,blending:2,depthWrite:!1}),D=new w(g,T);D.frustumCulled=!1,D.raycast=()=>{},i.add(h,D);let O=[`#f4c430`,`#c0392b`,`#d8dde2`,`#9aa7b4`,`#6b7785`,`#5a7d9a`],k=Ye(2403557),ee=s.map((e,t)=>t).filter(e=>s[e].main),j=[];for(let e=0;e<12;e++){let t=e<4&&ee.length?ee[k()*ee.length|0]:k()*s.length|0,n=e===1;j.push({edge:t,fwd:k()<.5,s:k()*s[t].len,speed:n?.5:.78+e%3*.1,lenZ:n?1.45:1,color:O[n?1:e===0?0:2+e%4],rng:Ye(12648430+e*2654435761),isBus:n,pos:new W,dirX:0,dirZ:1,active:!1})}let M=new B;j.forEach((e,t)=>h.setColorAt(t,M.set(e.color)));function N(e,t,n){let r=o[e],i=r.edges.filter(e=>e!==t);if(i.length===0)return t;let a=s[t],c=a.a===e?a.b:a.a,l=r.x-o[c].x,u=r.z-o[c].z,d=Math.hypot(l,u)||1,f=i[0],p=-2;for(let t of i){let n=s[t],i=n.a===e?n.b:n.a,a=o[i].x-r.x,c=o[i].z-r.z,m=Math.hypot(a,c)||1,h=l/d*(a/m)+u/d*(c/m);h>p&&(p=h,f=t)}return n()<.65?f:i[n()*i.length|0]}let P=N,F=new C,I=(e,t)=>{F.position.set(0,-50,0),F.scale.setScalar(0),F.updateMatrix(),e.setMatrixAt(t,F.matrix)},L=.085,te=nt.PLINTH_TOP+.02+.13,R=new t(new me(.04,.1,3,6),J(new c({flatShading:!0,roughness:.8})),14);R.castShadow=!0,R.receiveShadow=!1,R.frustumCulled=!1,R.raycast=()=>{};let ne=ht(n-.72,e),re=[];for(let e=0;e<14;e++)re.push({phase:e/14,speed:.12+e%4*.02,dir:e%2?1:-1,pos:new W,active:!1});let ie=new W,z=new W,ae=new B;re.forEach((e,t)=>R.setColorAt(t,ae.set([`#caa`,`#9ab`,`#bba`,`#ab9`][t%4]))),i.add(R);let oe={manhattan:`#e8c84a`,paris:`#dcd2bc`,neoTokyo:`#5ae8e0`};function H(e){e&&p.color.set(oe[e.key]||`#e8c84a`)}H(r);function se(t,n,r){let i=r?r.t:.5,a=r?r.windowGlow:0,c=Math.max(2,Math.round(gt(i)*12)),l=a>.05;for(let e=0;e<12;e++){if(e>=c){I(h,e),j[e].active=!1,_[e*3+1]=-50,_[(12+e)*3+1]=-50;continue}let n=j[e];n.s+=t*n.speed;let r=0;for(;n.s>=s[n.edge].len&&r++<4;){n.s-=s[n.edge].len;let e=n.fwd?s[n.edge].b:s[n.edge].a,t=P(e,n.edge,n.rng);n.edge=t,n.fwd=s[t].a===e}let i=s[n.edge],a=n.fwd?o[i.a]:o[i.b],u=n.fwd?o[i.b]:o[i.a],d=u.x-a.x,f=u.z-a.z,p=Math.hypot(d,f)||1,m=d/p,g=f/p,v=-g,y=m,b=a.x+m*n.s+v*L,x=a.z+g*n.s+y*L,S=Math.atan2(m,g);F.position.set(b,te,x),F.rotation.set(0,S,0),F.scale.set(1,1,n.lenZ),F.updateMatrix(),h.setMatrixAt(e,F.matrix),n.pos.set(b,te,x),n.dirX=m,n.dirZ=g,n.active=!0;let C=.74*n.lenZ*.5,w=te+.06,T=e*3,E=(12+e)*3;l?(_[T]=b+m*(C+.04),_[T+1]=w,_[T+2]=x+g*(C+.04),_[E]=b-m*(C+.02),_[E+1]=w,_[E+2]=x-g*(C+.02)):(_[T+1]=-50,_[E+1]=-50)}h.instanceMatrix.needsUpdate=!0,g.attributes.position.needsUpdate=!0,T.opacity=f.clamp(a*1.8,0,1);let u=Math.max(2,Math.round(gt(i)*14));for(let t=0;t<14;t++){if(t>=u){I(R,t),re[t].active=!1;continue}let r=re[t],i=(r.phase+r.dir*r.speed*n*.02+1e3)%1;ne.getPointAt(i,ie),ne.getTangentAt(i,z);let a=Math.sin(n*6+r.phase*30)*.015;F.position.set(ie.x,e+.09+a,ie.z),F.rotation.set(0,Math.atan2(z.x*r.dir,z.z*r.dir),Math.sin(n*6+r.phase*30)*.06),F.scale.setScalar(1),F.updateMatrix(),R.setMatrixAt(t,F.matrix),r.pos.set(ie.x,e+.09,ie.z),r.active=!0}R.instanceMatrix.needsUpdate=!0}let ce=[...j.map((e,t)=>({kind:`car`,label:e.isBus?`bus`:`car ${t+1}`,getWorldPos:t=>t.copy(e.pos),active:()=>e.active,info:()=>`${e.isBus?`bus`:`car`} · ${s[e.edge].main?`main avenue`:`side street`} → heading ${yt(e.dirX,e.dirZ)}`})),...re.map((e,t)=>({kind:`person`,label:`person ${t+1}`,getWorldPos:t=>t.copy(e.pos),active:()=>e.active,info:()=>`person · strolling the waterfront promenade`}))];function le(){return ce}return{group:i,update:se,setProfile:H,getFollowables:le,graph:a,setRouter(e){P=e||N}}}function yt(e,t){return[`N`,`NE`,`E`,`SE`,`S`,`SW`,`W`,`NW`][(Math.round(Math.atan2(e,t)/(Math.PI/4))%8+8)%8]}function bt({frames:e,fps:t=8,cols:n,rows:r=1}={}){let i=n||e||4,a=r||1,o=e||i*a,s=typeof window<`u`&&window.matchMedia?window.matchMedia(`(prefers-reduced-motion: reduce)`):null;function c(e,t){let n=t%i,r=Math.floor(t/i);e.offset.x=n/i,e.offset.y=1-(r+1)/a}function l(e){let t=e.clone();return t.needsUpdate=!0,t.repeat.set(1/i,1/a),c(t,0),t}function u(e,n,r=0){if(s&&s.matches)return c(e,0),0;let i=(Math.floor(n*t+r)%o+o)%o;return c(e,i),i}function d(e,t){let n=(Math.round(t)%o+o)%o;return c(e,n),n}return{frames:o,fps:t,cols:i,rows:a,makeInstanceTexture:l,step:u,setFrame:d}}function xt(e){if(typeof document>`u`||!e||!e.image)return e;let t=e.image,n=t.width||t.naturalWidth,r=t.height||t.naturalHeight,i=document.createElement(`canvas`);i.width=n,i.height=r;let a=i.getContext(`2d`,{willReadFrequently:!0});a.drawImage(t,0,0,n,r);let o=a.getImageData(0,0,n,r),s=o.data;for(let e=0;e<s.length;e+=4){let t=s[e]*.299+s[e+1]*.587+s[e+2]*.114|0;s[e]=s[e+1]=s[e+2]=t}a.putImageData(o,0,0);let c=new ie(i);return c.colorSpace=e.colorSpace||`srgb`,c}function St({url:e,fallback:t,luminance:n=!1,onReady:r}={}){let i=n?xt(t):t;return e&&typeof window<`u`&&new j().load(e,e=>{e.colorSpace=pe,r&&r(n?xt(e):e)},void 0,()=>{}),i}var Ct=``+new URL(`gull_diffusion_sheet-BMlUTLhu.png`,import.meta.url).href;function wt(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.4,`rgba(255,255,255,0.5)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new ie(e);return r.colorSpace=pe,r}function Tt(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64*.62,0,64/2,64*.62,64*.5);n.addColorStop(0,`rgba(240,250,255,0.95)`),n.addColorStop(1,`rgba(240,250,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new ie(e);return r.colorSpace=pe,r}function Et(){let e=document.createElement(`canvas`);e.width=256,e.height=64;let t=e.getContext(`2d`);t.strokeStyle=`#ffffff`,t.lineWidth=6,t.lineCap=`round`,t.lineJoin=`round`;let n=[14,24,36,24];for(let e=0;e<4;e++){let r=e*64,i=n[e];t.beginPath(),t.moveTo(r+8,40),t.quadraticCurveTo(r+24,i,r+32,36),t.quadraticCurveTo(r+40,i,r+56,40),t.stroke()}let r=new ie(e);return r.colorSpace=pe,r}function Dt(e,t,n=18){let r=[];for(let i=0;i<n;i++){let a=i/n*Math.PI*2;r.push(new W(Math.cos(a)*e,t,Math.sin(a)*e))}return new M(r,!0,`catmullrom`,.5)}function Ot(e,t,n){let r=e-t,i=[],a=(e,t)=>i.push(new W(e,n,t)),o=(e,n,r,i,o=4)=>{for(let s=1;s<=o;s++){let c=r+(i-r)*(s/o);a(e+Math.cos(c)*t,n+Math.sin(c)*t)}};for(let t=0;t<4;t++)a(e,-r+2*r*t/4);o(r,r,0,Math.PI/2);for(let t=0;t<4;t++)a(r-2*r*t/4,e);o(-r,r,Math.PI/2,Math.PI);for(let t=0;t<4;t++)a(-e,r-2*r*t/4);o(-r,-r,Math.PI,1.5*Math.PI);for(let t=0;t<4;t++)a(-r+2*r*t/4,-e);return o(r,-r,1.5*Math.PI,2*Math.PI),new M(i,!0,`catmullrom`,.5)}function kt({extent:e=8,waterSize:t=28,plinthTop:r=.3}={}){let i=new b;i.raycast=()=>{};let a=.06,o=(e,n,r)=>r.set(e/t+.5,-n/t+.5,0),s=[Ot(9.5,3,a),Dt(12.7,a),new M([new W(8.4,a,0),new W(11,a,-3.6),new W(13,a,0),new W(11,a,3.6)],!0,`catmullrom`,.5)],l=s.map(e=>e.getLength());function u({scale:e=1,hull:t=`#6b7785`,cabin:r=`#e7ecf2`}){let i=new b,a=new n(new V(.46*e,.2*e,1.1*e),J(new c({color:t,roughness:.6,metalness:.2,flatShading:!0}),{color:t}));a.position.y=.02;let o=new n(new V(.3*e,.22*e,.42*e),J(new c({color:r,roughness:.7,flatShading:!0}),{color:r}));return o.position.set(0,.18*e,.08*e),i.add(a,o),i.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!1),e.raycast=()=>{}}),i.userData.halfLen=.55*e,i}let d=[{laneIndex:0,dir:1,speed:.5,wake:.024,scale:1,hull:`#5a6675`,cabin:`#e7ecf2`},{laneIndex:1,dir:-1,speed:.42,wake:.022,scale:1,hull:`#7a5b46`,cabin:`#d9c3a6`},{laneIndex:0,dir:1,speed:.56,wake:.024,scale:.9,hull:`#456079`,cabin:`#cfe0ee`},{laneIndex:2,dir:1,speed:.34,wake:.03,scale:1.35,hull:`#39505f`,cabin:`#e2b85a`}];d.forEach((e,t)=>{e.mesh=u(e),e.u=t*.27%1,e.phase=t*1.7,e.isFerry=e.laneIndex===2,i.add(e.mesh)});let p=d.length,m=p*2,h=new A,g=new Float32Array(m*3).fill(-50),_=new Float32Array(m*3),v=new B(`#fff0c0`),y=new B(`#ff3528`);for(let e=0;e<p;e++)v.toArray(_,e*3),y.toArray(_,(p+e)*3);h.setAttribute(`position`,new U(g,3)),h.setAttribute(`color`,new U(_,3));let x=new w(h,new E({size:.6,sizeAttenuation:!0,map:wt(),vertexColors:!0,transparent:!0,opacity:0,blending:2,depthWrite:!1}));x.frustumCulled=!1,x.raycast=()=>{},i.add(x);function S(e,t){let r=new n(new k(e,9,7),J(new c({color:t,roughness:.5,flatShading:!0}),{color:t}));return r.scale.set(.55,.5,1),r.castShadow=!1,r.receiveShadow=!1,r.raycast=()=>{},r.position.y=-5,r}let C=[{x:-9.5,z:6,size:.18,color:`#5b6f86`,period:11,arcH:.55,span:1.1,whale:!1},{x:7.5,z:-9.5,size:.16,color:`#4a6076`,period:14,arcH:.5,span:1,whale:!1},{x:-7,z:-8.5,size:.2,color:`#607089`,period:9,arcH:.6,span:1.2,whale:!1},{x:10.5,z:7,size:.62,color:`#3a4350`,period:38,arcH:.9,span:2.6,whale:!0}];C.forEach((e,t)=>{e.mesh=S(e.size,e.color),e.heading=Math.atan2(-e.x,-e.z),e.t=t/C.length*e.period,e.splashed=!1,i.add(e.mesh),e.whale&&(e.spout=new H(new de({map:Tt(),transparent:!0,opacity:0,depthWrite:!1,fog:!0})),e.spout.scale.set(.6,1.1,1),e.spout.position.set(e.x,-5,e.z),i.add(e.spout))});let T=bt({frames:4,fps:7}),D=[`#ffffff`,`#cfd4da`,`#c8a06a`],O=[],ee=St({url:Ct,fallback:Et(),luminance:!0,onReady:e=>{ee=e;for(let t of O){let n=t.sp.material.map;t.sp.material.map=T.makeInstanceTexture(e),t.sp.material.needsUpdate=!0,n&&n.dispose()}typeof window<`u`&&(window.__gullSheet=`diffusion`)}});for(let e=0;e<4;e++){let t=new H(new de({map:T.makeInstanceTexture(ee),color:new B(D[e%D.length]),transparent:!0,opacity:0,depthWrite:!1,fog:!0}));t.scale.setScalar(.5),O.push({sp:t,r:8.6+e*.5,y:1.1+e%2*.5,speed:(.18+e*.03)*(e%2?-1:1),phase:e*1.9}),i.add(t)}typeof window<`u`&&(window.__gullSheet=window.__gullSheet||`procedural`,window.__gullAnim={frames:T.frames,variants:D.length,fps:T.fps});let j=C.length,N=Array.from({length:p+j},()=>new W),P=e=>e.laneIndex,F=new W,I=new W,L=new W;function te(e,t,n){let r=n?n.windowGlow:0,i=1-r;for(let n=0;n<p;n++){let i=d[n],c=s[i.laneIndex],u=l[i.laneIndex],f=i.isFerry?.45+.55*Math.min(1,Math.abs((i.u+.5)%1-.5)*3):1,m=i.u;i.u=(i.u+i.dir*e*i.speed*f/u+1)%1,(i.dir>0?i.u<m:i.u>m)&&(i.laneIndex=P(i)),c.getPointAt(i.u,F),c.getTangentAt(i.u,I);let h=I.x*i.dir,_=I.z*i.dir,v=Math.atan2(h,_),y=Math.sin(t*1.1+i.phase)*.025;i.mesh.position.set(F.x,a+y,F.z),i.mesh.rotation.set(Math.sin(t*.9+i.phase)*.04,v,0);let b=i.mesh.userData.halfLen;o(F.x-h*b,F.z-_*b,L),N[n].set(L.x,L.y,i.wake);let x=n*3,S=(p+n)*3;if(r>.05){let e=.18;g[x]=F.x+h*(b+.05),g[x+1]=e,g[x+2]=F.z+_*(b+.05),g[S]=F.x-h*(b+.02),g[S+1]=e,g[S+2]=F.z-_*(b+.02)}else g[x+1]=-50,g[S+1]=-50}R(),x.material.opacity=f.clamp(r*1.8,0,1);for(let t=0;t<j;t++){let n=C[t];n.t+=e;let r=p+t,i=n.whale?3.2:1.3;if(n.t>=n.period){let e=(n.t-n.period)/i;if(e>=1){n.t=0,n.splashed=!1,n.mesh.position.y=-5,n.spout&&(n.spout.material.opacity=0),N[r].set(0,0,0);continue}let t=Math.sin(Math.PI*e),s=(e-.5)*n.span,c=n.x+Math.sin(n.heading)*s,l=n.z+Math.cos(n.heading)*s;n.mesh.position.set(c,a-.1+t*n.arcH,l),n.mesh.rotation.set(Math.cos(Math.PI*e)*.9,n.heading,0);let u=e<.16||e>.84;if(o(c,l,L),N[r].set(L.x,L.y,u?n.whale?.07:.05:0),n.spout){let t=f.clamp((e-.15)*3,0,1)*(1-e);n.spout.position.set(c,.56+t*.6,l),n.spout.material.opacity=t*.9}}else n.mesh.position.y=-5,N[r].set(0,0,0),n.spout&&(n.spout.material.opacity=0)}for(let e=0;e<4;e++){let n=O[e],r=n.phase+t*n.speed*.25;n.sp.position.set(Math.cos(r)*n.r,n.y+Math.sin(t*1.4+n.phase)*.12,Math.sin(r)*n.r),n.sp.material.opacity=f.clamp(i*.9-.05,0,.85);let a=T.step(n.sp.material.map,t,n.phase);e===0&&typeof window<`u`&&(window.__gullFrame=a)}if(typeof window<`u`){let e=0;for(let t of C)t.mesh.position.y>a&&e++;window.__waterLife={boats:p,breaching:e,gulls:+O[0].sp.material.opacity.toFixed(2),lights:+x.material.opacity.toFixed(2)}}}function R(){h.attributes.position.needsUpdate=!0}function ne(){return N.length}let re=[...d.map((e,t)=>({kind:`boat`,label:e.isFerry?`ferry`:`boat ${t+1}`,getWorldPos:t=>t.copy(e.mesh.position),info:()=>e.isFerry?`boat · harbor ferry → docks`:`boat · open-water lane ${e.laneIndex}`})),...O.map((e,t)=>({kind:`gull`,label:`gull ${t+1}`,getWorldPos:t=>t.copy(e.sp.position),active:()=>e.sp.material.opacity>.05,info:()=>`gull · circling the coast`})),...C.map((e,t)=>({kind:`fish`,label:e.whale?`whale`:`fish ${t+1}`,getWorldPos:t=>t.copy(e.mesh.position),active:()=>e.mesh.position.y>a-.3,info:()=>e.mesh.position.y>a?e.whale?`whale · breaching!`:`fish · breaching!`:`fish · below the surface`}))];function ie(){return re}return{group:i,update:te,getFollowables:ie,wakeDrops:N,get wakeCount(){return ne()},lanes:s,setRouter(e){P=e||(e=>e.laneIndex)}}}var At=[`empireState`,`chrysler`,`liberty`,`eiffel`,`arcDeTriomphe`,`sacreCoeur`,`tokyoTower`,`pagoda`,`neonBillboard`],jt={empireState:1.25,chrysler:1.1,liberty:.55,eiffel:3.2,arcDeTriomphe:1.5,sacreCoeur:1.75,tokyoTower:1.35,pagoda:.5,neonBillboard:.9};function Mt(e){let t=()=>new c({flatShading:!0,roughness:.7,metalness:.1}),r=(n,r={})=>r.windows?Je(t(),{color:n,id:e.id(),windowGlow:e.windowGlow,winColors:e.winColors,litFrac:e.litFrac}):J(t(),{color:n,glow:r.glow??null,glowDay:r.glowDay??0,glowNight:r.glowNight??1,windowGlow:r.glow?e.windowGlow:null});return{box:(e,t,i,a,o={})=>new n(new V(e,t,i),r(a,o)),cyl:(e,t,i,a,o={})=>new n(new I(e,t,i,o.seg||12),r(a,o)),cone:(e,t,i,a={})=>new n(new L(e,t,a.seg||8),r(i,a)),sphere:(e,t,i={})=>new n(new k(e,i.seg||12,i.seg2||8),r(t,i)),lathe:(e,t,i={})=>new n(new ne(e.map(e=>new z(e[0],e[1])),i.seg||4),r(t,i))}}var $=(e,t,n,r)=>(e.position.set(t,n,r),e),Nt=[`#7FB0E0`,`#E07FB0`,`#7FE0A0`,`#E0C97F`,`#9FE07F`,`#7FE0E0`,`#FF8C42`,`#E0E07F`,`#C97FE0`,`#E07F7F`,`#7F9FE0`,`#E0483A`],Pt={empireState(e,t){let n=`#E8E0CF`;e.add($(t.box(.42,.18,.42,n,{windows:!0}),0,.09,0)),e.add($(t.box(.34,.16,.34,n,{windows:!0}),0,.26,0)),e.add($(t.box(.26,.14,.26,n,{windows:!0}),0,.41,0)),e.add($(t.box(.19,.34,.19,n,{windows:!0}),0,.65,0)),e.add($(t.box(.13,.06,.13,n,{windows:!0}),0,.85,0));let r=Nt[new Date().getMonth()];e.add($(t.cyl(.03,.045,.12,n,{seg:10,glow:r,glowNight:1.85}),0,.94,0)),e.add($(t.cone(.012,.07,n,{seg:8}),0,1.04,0))},chrysler(e,t){let n=`#C9CED4`;e.add($(t.box(.22,.55,.22,`#9AA7B4`,{windows:!0}),0,.275,0));let r=.55;for(let i=0;i<5;i++){let a=.14-i*.024,o=.07;e.add($(t.cyl(a*.7,a,o,n,{seg:8,glow:`#dfeaff`,glowNight:.5}),0,r+o/2,0)),r+=o}e.add($(t.cone(.018,.16,n,{seg:8}),0,r+.08,0))},liberty(e,t){let n=`#B9B4A6`,r=`#4FA890`;e.add($(t.box(.42,.16,.42,n),0,.08,0)),e.add($(t.box(.3,.2,.3,n),0,.26,0)),e.add($(t.cyl(.1,.15,.42,r,{seg:10}),0,.57,0)),e.add($(t.box(.11,.1,.11,r),0,.83,0));for(let n=0;n<7;n++){let i=(n/6-.5)*Math.PI*1.1;e.add($(t.cone(.012,.1,r,{seg:5}),Math.sin(i)*.1,.92,Math.cos(i)*.06-.02))}let i=$(t.cyl(.025,.03,.34,r,{seg:8}),.14,.98,0);i.rotation.z=.35,e.add(i),e.add($(t.box(.06,.06,.06,r,{glow:`#ffd060`,glowDay:.6,glowNight:1.2}),.2,1.16,0)),e.add($(t.cone(.04,.09,`#ffcf66`,{seg:6,glow:`#ffd060`,glowDay:.7,glowNight:1.3}),.2,1.24,0))},eiffel(e,t){let n=`#6E5C4C`,r=[[.2,0],[.13,.16],[.085,.33],[.055,.5],[.035,.66],[.02,.85],[0,.92]];e.add(t.lathe(r,n,{seg:4}));let i=t.lathe(r,n,{seg:4});i.rotation.y=Math.PI/4,e.add(i),e.add($(t.box(.26,.025,.26,n),0,.33,0)),e.add($(t.box(.14,.02,.14,n),0,.66,0)),e.add($(t.cone(.01,.1,n,{seg:6}),0,.97,0))},arcDeTriomphe(e,t){let r=`#D9D0C1`,i=.58,a=.5,o=.34,s=new R;s.moveTo(-.58/2,0),s.lineTo(i/2,0),s.lineTo(i/2,a),s.lineTo(-.58/2,a),s.lineTo(-.58/2,0);let l=new d,u=.15,f=.22;l.moveTo(-.15,0),l.lineTo(-.15,f),l.absarc(0,f,u,Math.PI,0,!0),l.lineTo(u,0),l.lineTo(-.15,0),s.holes.push(l);let p=new _e(s,{depth:o,bevelEnabled:!1});p.translate(0,0,-.34/2),p.computeVertexNormals(),e.add(new n(p,J(new c({color:r,flatShading:!0}),{color:r}))),e.add($(t.box(i*1.06,.08,o*1.06,r),0,.54,0))},sacreCoeur(e,t){let n=`#F1EEE6`;e.add($(t.box(.5,.26,.4,n),0,.13,0));let r=(r,i,a,o)=>{e.add($(t.cyl(a*.9,a,i,n,{seg:12}),r,o,0));let s=$(t.sphere(a,n,{seg:12}),r,o+i/2,0);s.scale.y=1.5,e.add(s)};r(0,.22,.15,.4),r(-.2,.1,.07,.33),r(.2,.1,.07,.33)},tokyoTower(e,t){let n=`#F25822`,r=`#EDEDED`,i=0;for(let a=0;a<9;a++){let o=a/9,s=(a+1)/9,c=.19*(1-o)+.03*o,l=.19*(1-s)+.03*s,u=.085,d=a%2?r:n;e.add($(t.cyl(l,c,u,d,{seg:4,glow:n,glowDay:0,glowNight:.7}),0,i+u/2,0)),i+=u}e.add($(t.box(.22,.02,.22,n,{glow:n,glowNight:.7}),0,.28,0)),e.add($(t.box(.12,.02,.12,r),0,.5,0)),e.add($(t.cone(.012,.16,r,{seg:6,glow:`#ff6a2a`,glowNight:.9}),0,i+.08,0))},pagoda(e,t){let n=0;for(let r=0;r<5;r++){let i=.42-r*.06,a=.11;e.add($(t.box(i,a,i,`#B23A2C`,{windows:r<4}),0,n+a/2,0)),e.add($(t.box(i*1.34,.03,i*1.34,`#7A3B2A`),0,n+a+.015,0)),n+=.16999999999999998}e.add($(t.cyl(.012,.012,.1,`#E0C040`,{seg:6}),0,n+.05,0)),e.add($(t.sphere(.03,`#E0C040`,{seg:8,glow:`#ffe680`,glowNight:.8}),0,n+.12,0))},neonBillboard(e,t){let n=`#20242C`;e.add($(t.box(.3,1,.3,n,{windows:!0}),0,.5,0));let r=[`#5AE8E0`,`#E85AA0`,`#E8E06A`],i=(n,r,i,a,o,s,c)=>{let l=$(t.box(n,r,.02,i,{glow:i,glowDay:.6,glowNight:1.1}),a,o,s);l.rotation.y=c,e.add(l)};i(.22,.34,r[0],0,.75,.16,0),i(.16,.5,r[1],.16,.5,0,Math.PI/2),i(.2,.22,r[2],0,.34,-.16,0),e.add($(t.cone(.01,.14,n,{seg:6,glow:`#E85AA0`,glowDay:.4,glowNight:1}),0,1.08,0))}};function Ft(e,t){let n=new b;return Pt[e](n,Mt(t)),n}var It=``+new URL(`building-skyscraper-d-CapD2Zqe.glb`,import.meta.url).href,Lt=``+new URL(`building-n-hdv8kKtN.glb`,import.meta.url).href,Rt=``+new URL(`building-g-CsTB1qH9.glb`,import.meta.url).href,zt=``+new URL(`colormap-CK8fW2HB.png`,import.meta.url).href,Bt={skyscraper:{url:It,color:`#9cc1dd`,fill:.92},midrise:{url:Lt,color:`#c9a07a`,fill:.96},setback:{url:Rt,color:`#d9c7a0`,fill:.9}};function Vt({windowGlow:e}){let t=new l;t.setURLModifier(e=>e.includes(`colormap.png`)?zt:e);let n=new ae(t),r={},i=!1,a=Promise.all(Object.entries(Bt).map(async([e,t])=>{r[e]=(await n.loadAsync(t.url)).scene})).then(()=>{i=!0,window.__landmarksReady=!0}).catch(e=>console.error(`landmark models failed:`,e)),o=9e3;function s(t,n,i={}){let a,s;if(At.includes(t))a=Ft(t,{windowGlow:e,winColors:i.winColors,litFrac:i.litFrac,id:()=>++o}),s=1;else{let e=r[t],n=Bt[t];if(!e||!n)return null;a=e.clone(!0),s=n.fill}a.updateMatrixWorld(!0);let c=new O().setFromObject(a).getSize(new W);a.scale.setScalar(n.h*s/c.y),a.updateMatrixWorld(!0);let l=new O().setFromObject(a),u=l.getCenter(new W);return a.position.x+=n.x-u.x,a.position.z+=n.z-u.z,a.position.y+=n.plinthTop-l.min.y,At.includes(t)?a.traverse(e=>{e.isMesh&&(e.castShadow=!1,e.raycast=()=>{})}):a.traverse(n=>{if(!n.isMesh)return;n.castShadow=!1,n.raycast=()=>{};let r=n=>Je(n.clone(),{color:Bt[t].color,id:++o,windowGlow:e,winColors:i.winColors,litFrac:i.litFrac});n.material=Array.isArray(n.material)?n.material.map(r):r(n.material)}),a}return{make:s,whenReady:a,heightFactor:e=>jt[e]??1,get ready(){return i}}}var Ht=[`clear`,`rain`,`snow`,`fog`];function Ut({extent:e=7}={}){let n=new b;n.raycast=()=>{};let r=e+2,i=.25,a=(e,t)=>e+Math.random()*(t-e),o=new t(new T(.015,.5),new S({color:`#a9bdd6`,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),600);o.frustumCulled=!1,o.raycast=()=>{};let s=new Float32Array(600*3),c=new Float32Array(600);for(let e=0;e<600;e++)s[e*3]=a(-r,r),s[e*3+1]=a(i,11),s[e*3+2]=a(-r,r),c[e]=a(9,14);let l=new t(new T(.07,.07),new S({color:`#f3f7ff`,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),700);l.frustumCulled=!1,l.raycast=()=>{};let u=new Float32Array(700*3),d=new Float32Array(700),f=new Float32Array(700);for(let e=0;e<700;e++)u[e*3]=a(-r,r),u[e*3+1]=a(i,11),u[e*3+2]=a(-r,r),d[e]=a(0,6.28),f[e]=a(.6,1.2);n.add(o,l);let p=Array.from({length:8},()=>new W),m=0,h=`clear`,g=0,_=0,v=0,y=0,x=0,w=new C,E=(e,t,n,r)=>e+(t-e)*Math.min(1,n*r);function D(e){Ht.includes(e)&&(h=e)}function O(){h=Ht[(Ht.indexOf(h)+1)%Ht.length]}function k(e,t){let n=h===`rain`,b=h===`snow`,S=h===`fog`,C=h!==`clear`;g=E(g,+!!C,e,1.4),_=E(_,+!!C,e,1.2),v=E(v,+!!S,e,.9),x=E(x,C&&!S?1:0,e,1),y=E(y,+!!b,e,b?.22:.5);let T=n?g:0,D=Math.round(600*T);for(let t=0;t<600;t++){if(t>=D){w.position.set(0,-50,0),w.scale.setScalar(0),w.updateMatrix(),o.setMatrixAt(t,w.matrix);continue}s[t*3+1]-=c[t]*e,s[t*3]+=e*1.1,s[t*3+1]<i&&(s[t*3]=a(-r,r),s[t*3+1]=11,s[t*3+2]=a(-r,r)),w.position.set(s[t*3],s[t*3+1],s[t*3+2]),w.rotation.set(0,0,0),w.scale.set(1,1,1),w.updateMatrix(),o.setMatrixAt(t,w.matrix)}o.instanceMatrix.needsUpdate=!0,o.material.opacity=.55*T,m=n?Math.round(8*g):0;for(let e=0;e<m;e++)p[e].set(Math.random(),Math.random(),.05*g);let O=Math.round(700*(b?g:0));for(let n=0;n<700;n++){if(n>=O){w.position.set(0,-50,0),w.scale.setScalar(0),w.updateMatrix(),l.setMatrixAt(n,w.matrix);continue}u[n*3+1]-=f[n]*e;let o=Math.sin(t*1.5+d[n])*.5;u[n*3+1]<i&&(u[n*3]=a(-r,r),u[n*3+1]=11,u[n*3+2]=a(-r,r)),w.position.set(u[n*3]+o,u[n*3+1],u[n*3+2]),w.rotation.set(0,0,0),w.scale.setScalar(1),w.updateMatrix(),l.setMatrixAt(n,w.matrix)}l.instanceMatrix.needsUpdate=!0,l.material.opacity=.9*(b?g:0)}return{group:n,update:k,cycle:O,setKind:D,rainDrops:p,get kind(){return h},get intensity(){return g},get overcast(){return _},get fog(){return v},get snow(){return y},get cloud(){return x},get rainDropCount(){return m},poolCounts:{rain:600,snow:700}}}function Wt(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=(e,n,r)=>{let i=t.createRadialGradient(e,n,0,e,n,r);i.addColorStop(0,`rgba(255,255,255,0.95)`),i.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=i,t.beginPath(),t.arc(e,n,r,0,7),t.fill()};n(128*.42,128*.56,128*.26),n(128*.6,128*.5,128*.3),n(128*.5,128*.46,128*.22),n(128*.34,128*.54,128*.18),n(128*.7,128*.58,128*.18);let r=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5],i=t.getImageData(0,0,128,128),a=i.data;for(let e=0;e<128;e++)for(let t=0;t<128;t++){let n=(e*128+t)*4,i=a[n+3]/255,o=(r[e%4*4+t%4]+.5)/16-.5;a[n+3]=Math.max(0,Math.min(1,Math.floor(i*5+.5+o)/5))*255}t.putImageData(i,0,0);let o=new ie(e);return o.colorSpace=pe,o}function Gt({extent:e=8,count:t=16}={}){let n=new b;n.raycast=()=>{};let r=Wt(),i=e+6,a=(e,t)=>e+Math.random()*(t-e),o=[];for(let e=0;e<t;e++){let e=new de({map:r,transparent:!0,depthWrite:!1,opacity:0,fog:!0}),t=new H(e),s={sp:t,mat:e,wisp:Math.random(),x:a(-i,i),z:a(-i,i),hiY:a(4,6.8),loY:a(.6,2.2),w:a(3,5.6),h:a(1.7,3),speed:a(.25,.7),op:a(.6,1)};t.raycast=()=>{},o.push(s),n.add(t)}let s=new B,c=new B(`#ffffff`),l=new B(`#5b626e`);function u(e,t,n,r){let u=r?r.cloud:0,d=r?r.fog:0,f=Math.min(1,.4+.6*u+.5*d);s.copy(n.sky).lerp(c,.62),s.lerp(l,.6*u);for(let n=0;n<o.length;n++){let r=o[n],c=n/o.length<f;r.x+=r.speed*e*(.6+.8*u),r.x>i&&(r.x=-i,r.z=a(-i,i));let l=Math.min(Kt(r.x,-i,-i+3),1-Kt(r.x,i-3,i)),p=r.hiY*(1-d)+r.loY*d,m=1-.5*r.wisp,h=.72*Math.max(0,1-d-u)+1*u+.42*d,g=c?Math.max(0,h)*r.op*m*l:0;r.mat.opacity+=(g-r.mat.opacity)*Math.min(1,e*2.5),r.mat.color.copy(s);let _=r.w*(1+.6*d)*(1+.4*r.wisp),v=r.h*(1-.35*d);r.sp.scale.set(_,v,1),r.sp.position.set(r.x,p+Math.sin(t*.3+n)*.15,r.z)}}function d(e){r=e;for(let t of o)t.mat.map=e,t.mat.needsUpdate=!0}let f=o.map((e,t)=>({kind:`cloud`,label:`cloud ${t+1}`,getWorldPos:t=>t.copy(e.sp.position),active:()=>e.mat.opacity>.06,info:()=>`cloud · ${e.wisp>.6?`wispy`:`puffy`} · drifting east${e.sp.position.y<3?` (low mist)`:``}`}));function p(){return f}return{group:n,update:u,setTexture:d,getFollowables:p,get count(){return o.length}}}function Kt(e,t,n){let r=Math.max(0,Math.min(1,(e-t)/(n-t)));return r*r*(3-2*r)}var qt={person:4.5,car:6,gull:6,fish:8,boat:9,cloud:16};function Jt({rig:e,getCamera:t,sources:n=[]}){let r=null,i=new W,a=new W,o=()=>{let e=[];for(let t of n)if(t&&t.getFollowables){let n=t.getFollowables();n&&e.push(...n)}return e},s=e=>!e.active||e.active();function c(t){return t?(r=t,e.setFollow(e=>t.getWorldPos(e),{frame:t.frame??qt[t.kind]??8}),t):null}function l(){r=null,e.clearFollow()}function u(e,n,r=.14){let l=t(),u=null,d=r;for(let t of o()){if(!s(t)||(t.getWorldPos(i),a.copy(i).project(l),a.z>1||a.z<-1))continue;let r=Math.hypot(a.x-e,a.y-n);r<d&&(d=r,u=t)}return u?c(u):null}function d(e=1,t=null){let n=o().filter(e=>(!t||e.kind===t)&&s(e));if(t||(n=Yt(n)),!n.length)return null;let i=r?n.indexOf(r):-1;return i=((i+e)%n.length+n.length)%n.length,c(n[i])}function f(){r&&r.active&&!r.active()&&l()}return{pickAt:u,cycle:d,follow:c,release:l,prune:f,get focus(){return r},get count(){return o().length},get readout(){return r?{kind:r.kind,label:r.label,info:r.info?r.info():``}:null}}}function Yt(e){let t=new Map;for(let n of e)t.has(n.kind)||t.set(n.kind,[]),t.get(n.kind).push(n);let n=[...t.values()],r=[];for(let e=0,t=!0;t;e++){t=!1;for(let i of n)e<i.length&&(r.push(i[e]),t=!0)}return r}function Xt(e){let t=Ye(e>>>0),n=new Uint8Array(256);for(let e=0;e<256;e++)n[e]=e;for(let e=255;e>0;e--){let r=t()*(e+1)|0,i=n[e];n[e]=n[r],n[r]=i}let r=new Uint8Array(512);for(let e=0;e<512;e++)r[e]=n[e&255];let i=e=>e*e*e*(e*(e*6-15)+10),a=(e,t,n)=>e+(t-e)*n,o=(e,t,n)=>{let r=e&4?n:t,i=e&4?t:n;return(e&1?-r:r)+(e&2?-i:i)};return(e,t)=>{let n=Math.floor(e)&255,s=Math.floor(t)&255,c=e-Math.floor(e),l=t-Math.floor(t),u=i(c),d=i(l),f=r[r[n]+s],p=r[r[n]+s+1],m=r[r[n+1]+s],h=r[r[n+1]+s+1];return a(a(o(f,c,l),o(m,c-1,l),u),a(o(p,c,l-1),o(h,c-1,l-1),u),d)}}function Zt(e,t,n,r,i,a){let o=.5,s=1,c=0,l=0;for(let u=0;u<r;u++)c+=o*e(t*s,n*s),l+=o,o*=a,s*=i;return c/l}function Qt(e,t,n,r,i,a){let o=.5,s=1,c=0,l=0;for(let u=0;u<r;u++){let r=1-Math.abs(e(t*s,n*s));r*=r,c+=o*r,l+=o,o*=a,s*=i}return c/l}var $t=(e,t,n)=>(n=Math.max(0,Math.min(1,(n-e)/(t-e))),n*n*(3-2*n)),en=[{key:`ocean`,color:`#2a5b7a`},{key:`beach`,color:`#d8c89a`},{key:`grassland`,color:`#6f9a4e`},{key:`forest`,color:`#3f6b3a`},{key:`hills`,color:`#8a8a55`},{key:`rock`,color:`#7d7468`},{key:`snow`,color:`#eef2f6`}],tn=Object.fromEntries(en.map((e,t)=>[e.key,t]));function nn(e,t,n){if(e<n-.015)return tn.ocean;if(e<n+.02)return tn.beach;let r=(e-n)/(1-n);return r>.82?tn.snow:r>.6?tn.rock:r>.34?t>.45?tn.forest:tn.hills:t>.55?tn.forest:tn.grassland}var rn={valley:{freq:2.3,mtnMask:.3,mtnGain:.55,sea:.3,relief:7.5,warp:.9},archipelago:{freq:3.4,mtnMask:.18,mtnGain:.4,sea:.5,relief:6,warp:1.3},mountains:{freq:2,mtnMask:.62,mtnGain:.85,sea:.26,relief:11,warp:.8},plains:{freq:1.8,mtnMask:.12,mtnGain:.3,sea:.28,relief:4.5,warp:.7}},an=Object.keys(rn);function on({seed:e=1,size:t=160,preset:n=`valley`,params:r=null}={}){let i=r||rn[n]||rn.valley,a=Xt(e*2+1),o=Xt(e*5+9),s=Xt(e*7+13),c=Xt(e*3+5),l=new Float32Array(t*t),u=new Uint8Array(t*t),d=1/0,f=-1/0;for(let e=0;e<t;e++)for(let n=0;n<t;n++){let r=(n/t-.5)*i.freq,p=(e/t-.5)*i.freq,m=r+i.warp*Zt(c,r+5.2,p+1.3,4,2,.5),h=p+i.warp*Zt(c,r+9.7,p+4.1,4,2,.5),g=Zt(a,m,h,6,2,.5)*.5+.5,_=$t(.45,.75,Zt(o,r*.5,p*.5,3,2,.5)*.5+.5),v=Qt(a,m*1.7+11,h*1.7+7,5,2,.5);g=g*(1-_*i.mtnMask)+v*(_*i.mtnMask*(.6+i.mtnGain));let y=n/t-.5,b=e/t-.5,x=Math.sqrt(y*y+b*b)*2;g-=$t(.62,1,x)*.55,g=Math.max(0,Math.min(1,g));let S=Zt(s,r*.8+3,p*.8+8,4,2,.5)*.5+.5,C=e*t+n;l[C]=g,u[C]=nn(g,S,i.sea),g<d&&(d=g),g>f&&(f=g)}return{size:t,height:l,biome:u,sea:i.sea,relief:i.relief,minH:d,maxH:f,params:i,seed:e,preset:n}}function sn(e,{worldSize:t=26,baseY:r=0,chunks:i=4}={}){let{size:a,height:o,biome:s,sea:l,relief:u}=e,d=new b,f=new B,p=en.map(e=>new B(e.color)),m=t/(a-1),h=t/2,g=e=>e*m-h,_=e=>e*m-h,v=e=>r+(e-l)*u,y=Math.ceil((a-1)/i),x=new W,S=new W,C=new W;for(let e=0;e<i;e++)for(let t=0;t<i;t++){let r=t*y,i=e*y,l=Math.min(r+y,a-1),u=Math.min(i+y,a-1);if(l<=r||u<=i)continue;let m=(l-r)*(u-i)*6,h=new Float32Array(m*3),b=new Float32Array(m*3),w=new Float32Array(m*3),T=0,E=(e,t,n,r,i,a,o)=>{h[T*3]=e,h[T*3+1]=t,h[T*3+2]=n,b[T*3]=r,b[T*3+1]=i,b[T*3+2]=a,w[T*3]=o.r,w[T*3+1]=o.g,w[T*3+2]=o.b,T++},D=(e,t,n,r,i,a,o,s,c,l)=>{x.set(r-e,i-t,a-n),S.set(o-e,s-t,c-n),C.crossVectors(x,S).normalize(),E(e,t,n,C.x,C.y,C.z,l),E(r,i,a,C.x,C.y,C.z,l),E(o,s,c,C.x,C.y,C.z,l)};for(let e=i;e<u;e++)for(let t=r;t<l;t++){let n=o[e*a+t],r=o[e*a+t+1],i=o[(e+1)*a+t],c=o[(e+1)*a+t+1],l=g(t),u=g(t+1),d=_(e),m=_(e+1),h=v(n),y=v(r),b=v(i),x=v(c),S=p[s[e*a+t]],C=p[s[(e+1)*a+t+1]];D(l,h,d,l,b,m,u,y,d,f.copy(S)),D(u,y,d,l,b,m,u,x,m,f.copy(C))}let O=new A;O.setAttribute(`position`,new U(h,3)),O.setAttribute(`normal`,new U(b,3)),O.setAttribute(`color`,new U(w,3));let k=new n(O,new c({vertexColors:!0,roughness:.92,metalness:0,flatShading:!0}));k.castShadow=!0,k.receiveShadow=!0,k.raycast=()=>{},d.add(k)}return d.userData.dispose=()=>d.traverse(e=>{e.isMesh&&(e.geometry.dispose(),e.material.dispose())}),d}var cn={beach:[{type:`rock`,density:.05,maxSlope:1.4}],grassland:[{type:`tree`,density:.1,maxSlope:.7},{type:`tuft`,density:.3,maxSlope:.9}],forest:[{type:`tree`,density:.62,maxSlope:.8},{type:`rock`,density:.03,maxSlope:1.2}],hills:[{type:`tree`,density:.14,maxSlope:.7},{type:`rock`,density:.16,maxSlope:1.6}],rock:[{type:`rock`,density:.22,maxSlope:2}]};function ln({terrain:e,seed:t=1,worldSize:n=26,baseY:r=0,biomeKeys:i,density:a=1,max:o=9e3}={}){let{size:s,height:c,biome:l,sea:u,relief:d}=e,f=Ye((t^97155048)>>>0),p=n/(s-1),m=n/2,h=e=>r+(e-u)*d,g=(e,t)=>{let n=Math.max(1,Math.min(s-2,e)),r=Math.max(1,Math.min(s-2,t)),i=(c[r*s+n+1]-c[r*s+n-1])*d/(2*p),a=(c[(r+1)*s+n]-c[(r-1)*s+n])*d/(2*p);return Math.hypot(i,a)},_={tree:[],rock:[],tuft:[]};for(let e=1;e<s-1;e+=2)for(let t=1;t<s-1;t+=2){let n=e*s+t,r=c[n];if(r<u+.005)continue;let d=cn[i[l[n]]];if(!d)continue;let v=g(t,e);for(let n of d){let i=f();if(v>n.maxSlope||i>n.density*a)continue;let s=_[n.type];if(s.length>=o)continue;let c=(f()-.5)*p*2,l=(f()-.5)*p*2,u=t*p-m+c,d=e*p-m+l;s.push({x:u,y:h(r),z:d,s:.7+f()*.6,r:f()*Math.PI*2,t:.82+f()*.36})}}return{placements:_,counts:{tree:_.tree.length,rock:_.rock.length,tuft:_.tuft.length}}}function un(e,t){let n=new B(t),r=e.attributes.position.count,i=new Float32Array(r*3);for(let e=0;e<r;e++)i[e*3]=n.r,i[e*3+1]=n.g,i[e*3+2]=n.b;return e.setAttribute(`color`,new U(i,3)),e}function dn(e){let t=0;for(let n of e)t+=n.attributes.position.count;let n=new Float32Array(t*3),r=new Float32Array(t*3),i=new Float32Array(t*3),a=0;for(let t of e)n.set(t.attributes.position.array,a*3),r.set(t.attributes.normal.array,a*3),i.set(t.attributes.color.array,a*3),a+=t.attributes.position.count;let o=new A;return o.setAttribute(`position`,new U(n,3)),o.setAttribute(`normal`,new U(r,3)),o.setAttribute(`color`,new U(i,3)),o}function fn(){return dn([un(new I(.045,.06,.34,6).translate(0,.17,0).toNonIndexed(),`#5b3f28`),un(new L(.3,.55,7).translate(0,.55,0).toNonIndexed(),`#3f7d3a`),un(new L(.22,.42,7).translate(0,.85,0).toNonIndexed(),`#4f9046`)])}function pn(){let e=new h(.18,0).toNonIndexed(),t=e.attributes.position,n=Ye(3098);for(let e=0;e<t.count;e++){let r=.78+n()*.5;t.setXYZ(e,t.getX(e)*r,t.getY(e)*r*.8,t.getZ(e)*r)}return e.computeVertexNormals(),un(e,`#7d7468`)}function mn(){return un(new L(.06,.16,4).translate(0,.08,0).toNonIndexed(),`#6f9a4e`)}function hn(e){let n=new b;n.raycast=()=>{};let r={tree:fn(),rock:pn(),tuft:mn()},i={tree:0,rock:-.05,tuft:0},a=new ye,o=new _,s=new W,l=new W,u=new W(0,1,0),d=new B;for(let f of[`tree`,`rock`,`tuft`]){let p=e[f];if(!p||!p.length)continue;let m=new c({vertexColors:!0,roughness:.9,metalness:0,flatShading:!0}),h=new t(r[f],m,p.length);h.castShadow=!0,h.receiveShadow=!1,h.frustumCulled=!0,h.raycast=()=>{},h.instanceColor=new re(new Float32Array(p.length*3),3);for(let e=0;e<p.length;e++){let t=p[e];s.set(t.x,t.y+i[f],t.z),o.setFromAxisAngle(u,t.r),l.setScalar(t.s),a.compose(s,o,l),h.setMatrixAt(e,a),h.setColorAt(e,d.setScalar(t.t))}h.instanceMatrix.needsUpdate=!0,h.instanceColor&&(h.instanceColor.needsUpdate=!0),n.add(h)}return n.userData.dispose=()=>n.traverse(e=>{e.isInstancedMesh&&(e.geometry.dispose(),e.material.dispose())}),n}function gn({terrain:e,seed:t,worldSize:n,baseY:r,biomeKeys:i,density:a,max:o}){let{placements:s,counts:c}=ln({terrain:e,seed:t,worldSize:n,baseY:r,biomeKeys:i,density:a,max:o}),l=hn(s);return l.userData.counts=c,l}function _n({scale:e=90}={}){let t=new fe;t.scale.setScalar(e),t.frustumCulled=!1,t.raycast=()=>{},t.visible=!1;let n=t.material.uniforms;n.turbidity.value=2.2,n.rayleigh.value=1.3,n.mieCoefficient.value=.005,n.mieDirectionalG.value=.78;function r(e){n.sunPosition.value.copy(e)}function i(e){e&&(e.turbidity!=null&&(n.turbidity.value=e.turbidity),e.rayleigh!=null&&(n.rayleigh.value=e.rayleigh),e.mie!=null&&(n.mieCoefficient.value=e.mie),e.mieG!=null&&(n.mieDirectionalG.value=e.mieG))}return{mesh:t,setSun:r,setParams:i,get material(){return t.material}}}var vn=`attribute float aSize;
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
}`,yn=`precision highp float;

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
}`,bn={realistic:0,charm:0,pixel:2,vector:1},xn={realistic:1,charm:1,pixel:1.9,vector:1.2};function Sn({seed:e=1517,count:t=340,spreadX:n=21,yLo:r=3,yHi:i=18,zBase:a=7.2}={}){let o=new b;o.raycast=()=>{};let s=Ye(e>>>0),c=new Float32Array(t*3),l=new Float32Array(t),u=new Float32Array(t),d=new Float32Array(t),f=[];for(let e=0;e<t;e++){let t=(s()*2-1)*n,o=r+s()*(i-r),p=-a-s()*.7;c[e*3]=t,c[e*3+1]=o,c[e*3+2]=p;let m=.35+s()*.65;u[e]=m,l[e]=1.6+s()*2.8+(m>.85?2.2:0),d[e]=s()*Math.PI*2,m>.82&&f.push([t,o,p])}let p=new A;p.setAttribute(`position`,new U(c,3)),p.setAttribute(`aSize`,new U(l,1)),p.setAttribute(`aBright`,new U(u,1)),p.setAttribute(`aPhase`,new U(d,1));let h=new ue({vertexShader:vn,fragmentShader:yn,uniforms:{uTime:{value:0},uTwinkle:{value:1},uSizeScale:{value:1},uColor:{value:new B(`#eaf0ff`)},uNight:{value:0},uMode:{value:0}},transparent:!0,depthWrite:!1,blending:2,fog:!1,toneMapped:!1}),_=new w(p,h);_.raycast=()=>{},_.frustumCulled=!1,o.add(_);let v=[];if(f.length>6)for(let e=0;e<3;e++){let e=Math.floor(s()*f.length);for(let t=0;t<3;t++){let t=f[e],n=f[(e+1+Math.floor(s()*2))%f.length];v.push(t[0],t[1],t[2],n[0],n[1],n[2]),e=(e+1)%f.length}}let x=[[[0,2],[0,0]],[[0,0],[.7,0]],[[2.1,2],[1.4,2]],[[1.4,2],[1.4,0]],[[1.4,0],[2.1,0]],[[2.1,0],[2.1,1]],[[2.1,1],[1.7,1]],[[2.8,0],[2.8,2]],[[2.8,2],[3.5,2]],[[3.5,2],[3.5,1]],[[3.5,1],[2.8,1]],[[2.8,1],[3.6,0]]],S=-a-.4,C=.62;for(let[[e,t],[n,r]]of x)v.push(-3+e*C,12+t*C,S,-3+n*C,12+r*C,S);let T=new A;T.setAttribute(`position`,new y(v,3));let E=new g(T,new m({color:`#9fb6e8`,transparent:!0,opacity:0,depthWrite:!1,fog:!1,toneMapped:!1}));E.raycast=()=>{},E.frustumCulled=!1,o.add(E);let D=new H(new de({map:Cn(),transparent:!0,opacity:0,depthWrite:!1,blending:2,fog:!1,toneMapped:!1}));D.raycast=()=>{},D.scale.set(n*2.4,n*.95,1),D.position.set(2,12,-a-.7),D.material.rotation=-.5,D.renderOrder=-3,o.add(D);let O=-1;function k(e,t=`realistic`,n=0,r=!1){h.uniforms.uTime.value=n,h.uniforms.uTwinkle.value=+!r,h.uniforms.uNight.value=e;let i=bn[t]??0;i!==O&&(h.uniforms.uMode.value=i,O=i),h.uniforms.uSizeScale.value=xn[t]??1,E.material.opacity=e*.5,D.material.opacity=e*.32,o.visible=e>.001}return{group:o,update:k}}function Cn(){let e=document.createElement(`canvas`);e.width=e.height=256;let t=e.getContext(`2d`),n=t.createRadialGradient(256/2,256/2,0,256/2,256/2,256/2);n.addColorStop(0,`rgba(150,170,230,0.5)`),n.addColorStop(.4,`rgba(120,130,200,0.22)`),n.addColorStop(1,`rgba(90,100,160,0)`),t.fillStyle=n,t.fillRect(0,0,256,256);let r=Ye(20145);for(let e=0;e<7;e++){let e=40+r()*176,n=70+r()*116,i=14+r()*30,a=t.createRadialGradient(e,n,0,e,n,i);a.addColorStop(0,`rgba(200,210,255,0.18)`),a.addColorStop(1,`rgba(200,210,255,0)`),t.fillStyle=a,t.beginPath(),t.arc(e,n,i,0,Math.PI*2),t.fill()}let i=new ie(e);return i.colorSpace=pe,i}var wn=Math.PI*2;function Tn(e){let t=document.createElement(`canvas`);t.width=t.height=128;let n=t.getContext(`2d`),r=n.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return r.addColorStop(0,`#ffffff`),r.addColorStop(.34,`#fffaf0`),r.addColorStop(.66,e),r.addColorStop(.86,e),r.addColorStop(1,`rgba(255,255,255,0)`),n.fillStyle=r,n.beginPath(),n.arc(128/2,128/2,128/2,0,wn),n.fill(),Mn(t,!0)}function En(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);n.addColorStop(0,`#ffffff`),n.addColorStop(.4,`#eef3ff`),n.addColorStop(.82,`#c4cee6`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,128/2,0,wn),t.fill(),t.globalAlpha=.14,t.fillStyle=`#8b97b4`;for(let[e,n,r]of[[54,50,9],[78,66,7],[60,82,5]])t.beginPath(),t.arc(e,n,r,0,wn),t.fill();return Mn(e,!0)}function Dn(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`);t.translate(128/2,128/2),t.fillStyle=`rgba(255,210,120,0.9)`;for(let e=0;e<12;e++)t.rotate(wn/12),t.beginPath(),t.moveTo(0,-28),t.lineTo(7,-54),t.lineTo(-7,-54),t.closePath(),t.fill();let n=t.createRadialGradient(0,0,0,0,0,32);return n.addColorStop(0,`#ffffff`),n.addColorStop(.4,`#fff1c8`),n.addColorStop(.8,`#ffb24a`),n.addColorStop(1,`#ff8a2a`),t.fillStyle=n,t.beginPath(),t.arc(0,0,32,0,wn),t.fill(),Mn(e,!0)}function On(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,46);n.addColorStop(0,`#ffffff`),n.addColorStop(.5,`#e6ecfb`),n.addColorStop(1,`#c2cce4`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,46,0,wn),t.fill(),t.fillStyle=`#aab6d2`;for(let[e,n,r]of[[52,48,11],[80,62,8],[58,82,7],[40,66,5]])t.beginPath(),t.arc(e,n,r,0,wn),t.fill();return Mn(e,!0)}function kn(e,t,n){let r=document.createElement(`canvas`);r.width=r.height=144;let i=r.getContext(`2d`),a=17/2,o=18/2-.5;for(let r=0;r<18;r++)for(let s=0;s<18;s++){let c=Math.hypot(s-a,r-a);c>o||(i.fillStyle=c<o*.45?e:c<o*.78?t:n,i.fillRect(Math.round(s*8),Math.round(r*8),8,8))}return Mn(r,!1)}function An(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return n.addColorStop(0,`rgba(255,255,255,0.9)`),n.addColorStop(.38,`rgba(255,255,255,0.3)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,128/2,0,wn),t.fill(),Mn(e,!0)}function jn(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2),r=`20,30,48`;return n.addColorStop(0,`rgba(${r},0)`),n.addColorStop(.42,`rgba(${r},0)`),n.addColorStop(.6,`rgba(${r},0.6)`),n.addColorStop(1,`rgba(${r},0)`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,128/2,0,wn),t.fill(),Mn(e,!0)}function Mn(e,t){let n=new ie(e);return n.colorSpace=pe,t||(n.magFilter=x,n.minFilter=x),n}var Nn=(e,t,n)=>{let r=Math.max(0,Math.min(1,(e-t)/(n-t)));return r*r*(3-2*r)};function Pn({skyW:e=15,skyY0:t=3.4,skyH:n=3.8,z:r=-7.8,biasX:i=4.5,sunSize:a=4.6,moonSize:o=4}={}){let s=new b;s.raycast=()=>{};let c=(e,t)=>{let n=new H(new de({map:e,transparent:!0,depthWrite:!1,fog:!1,toneMapped:!1,...t?{blending:2}:{}}));return n.raycast=()=>{},n},l={realistic:Tn(`#ffcf8a`),charm:Dn(),pixel:kn(`#fff6e0`,`#ffc24a`,`#ff8a2a`)},u={realistic:En(),charm:On(),pixel:kn(`#ffffff`,`#cdd6ee`,`#9aa6c6`)},d=An(),f=c(jn(),!1),p=c(d,!0),m=c(l.realistic),h=c(d,!0),g=c(u.realistic);f.renderOrder=-2,p.renderOrder=-1,s.add(f,p,m,h,g);let _=Sn({});_.group.renderOrder=-4,s.add(_.group);let v=typeof window<`u`&&window.matchMedia?window.matchMedia(`(prefers-reduced-motion: reduce)`):null,y={realistic:{sunGlow:3,sunGlowOp:.7,moonGlow:2.6,moonGlowOp:.5,sizeMul:1,sunHaloOp:.85},charm:{sunGlow:2.2,sunGlowOp:.55,moonGlow:2.1,moonGlowOp:.42,sizeMul:1.08,sunHaloOp:.7},pixel:{sunGlow:1.7,sunGlowOp:.4,moonGlow:1.7,moonGlowOp:.32,sizeMul:1,sunHaloOp:.6}},x=`realistic`;function S(e){e===x||!y[e]||(x=e,m.material.map=l[e],m.material.needsUpdate=!0,g.material.map=u[e],g.material.needsUpdate=!0)}new B;let C=new B(`#fff3df`),w=new B(`#ffb060`),T=new B(`#ff6a2a`),E=new B(`#eef2ff`),D=new B(`#9fbcff`);function O(s,c,l,u,d=`realistic`){S(d);let b=y[x],O=l.sunArc,k=u?Math.min(1,(u.cloud||0)*.85+(u.fog||0)*.7):0,ee=O.y,A=Nn(ee,-.04,.1)*(1-.7*k),j=1-Nn(Math.abs(ee),.02,.5);m.position.set(O.x*e+i,t+O.y*n,r),p.position.copy(m.position);let M=a*b.sizeMul*(1+.55*j);m.scale.setScalar(M),p.scale.setScalar(M*b.sunGlow),m.material.color.copy(C),p.material.color.copy(w).lerp(T,j),m.material.opacity=A,p.material.opacity=A*b.sunGlowOp*(.7+.5*j),f.position.copy(m.position),f.scale.setScalar(M*1.7),f.material.opacity=A*(1-j)*b.sunHaloOp;let N=Nn(-O.y,-.04,.1)*(1-.65*k);g.position.set(-O.x*e+i,t+-O.y*n,r),h.position.copy(g.position);let P=o*b.sizeMul;g.scale.setScalar(P),h.scale.setScalar(P*b.moonGlow),g.material.color.copy(E),h.material.color.copy(D),g.material.opacity=N,h.material.opacity=N*b.moonGlowOp;let F=Nn(-O.y,-.05,.18)*(1-.85*k);_.update(F,d,c,!!(v&&v.matches))}return{group:s,update:O}}var Fn=`varying vec2 vUv;

void main() {
  
  
  
  vUv = uv;

  
  
  
  
  
  
  
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,In=`precision highp float;

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
}`,Ln=`varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0); 
}`,Rn=`precision highp float;

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
}`,zn=`precision highp float;

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
}`,Bn=`precision highp float;

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
}`,Vn=`const float CA_STRENGTH   = 0.0030;  
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
}`,Hn=`const float DITHER = 0.55;   

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
}`,Un=`precision highp float;

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
}`,Wn=`precision highp float;

varying vec2 vUv;
uniform sampler2D uToon;   
uniform sampler2D uPixel;  
uniform float     uBlend;  

void main() {
  vec3 t = texture2D(uToon, vUv).rgb;
  vec3 p = texture2D(uPixel, vUv).rgb;
  gl_FragColor = vec4(mix(t, p, uBlend), 1.0);
}`,Gn=`varying vec2 vUv;
uniform sampler2D uScene;
uniform float     uThreshold;   

void main() {
  vec3 c = texture2D(uScene, vUv).rgb;
  float l = dot(c, vec3(0.2126, 0.7152, 0.0722));        
  float k = smoothstep(uThreshold, uThreshold + 0.22, l); 
  gl_FragColor = vec4(c * k, 1.0);
}`,Kn=`varying vec2 vUv;
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
}`,qn=`precision highp float;

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
}`,Jn={"1-bit":{gridWidth:110,dither:.6,palette:[`#15120c`,`#c8b486`]},gb:{gridWidth:130,dither:.4,palette:[`#0f380f`,`#306230`,`#8bac0f`,`#9bbc0f`]},"8-bit":{gridWidth:160,dither:.55,palette:[`#140c1c`,`#442434`,`#30346d`,`#4e4a4e`,`#854c30`,`#346524`,`#d04648`,`#757161`,`#597dce`,`#d27d2c`,`#8595a1`,`#6daa2c`,`#d2aa99`,`#6dc2ca`,`#dad45e`,`#deeed6`]},"16-bit":{gridWidth:280,dither:.3,palette:`#000000.#222034.#45283c.#663931.#8f563b.#df7126.#d9a066.#eec39a.#fbf236.#99e550.#6abe30.#37946e.#4b692f.#524b24.#323c39.#3f3f74.#306082.#5b6ee1.#639bff.#5fcde4.#cbdbfc.#ffffff.#9badb7.#847e87.#696a6a.#595652.#76428a.#ac3232.#d95763.#d77bba.#8f974a.#8a6f30`.split(`.`)},modern:{gridWidth:460,dither:.6,palette:null}},Yn=[`gb`,`8-bit`,`16-bit`,`modern`];function Xn(t){let n=Math.max(t.length,1),i=new Float32Array(n*4);t.forEach((e,t)=>{let n=new B(e);i[t*4+0]=n.r,i[t*4+1]=n.g,i[t*4+2]=n.b,i[t*4+3]=1});let a=new D(i,n,1,e,r);return a.minFilter=x,a.magFilter=x,a.needsUpdate=!0,a}var Zn=220,Qn={night:[`#0A0C16`,`#1C2236`,`#3A3A52`,`#5A5A78`,`#8A92B0`],dawn:[`#1A1008`,`#43281A`,`#7A4A30`,`#B07A4E`,`#E8A86A`],noon:[`#16100A`,`#3A2F1E`,`#6B563A`,`#937B54`,`#B89968`],dusk:[`#140A0A`,`#3E1E1A`,`#7A3828`,`#B85A36`,`#F0884A`]},$n={night:[`#020604`,`#06180E`,`#10401E`,`#1E9040`,`#7FE0FF`],dawn:[`#060603`,`#1A2410`,`#3A6B22`,`#6CC040`,`#FFC060`],noon:[`#050805`,`#0E2912`,`#1E6B2F`,`#3CF06A`,`#FFB000`],dusk:[`#080402`,`#241408`,`#6B4A12`,`#E0A030`,`#FF7030`]};function er({demo:t=!1,citySeed:r=0,profileIndex:i=0}={}){let c=new le({antialias:!0,preserveDrawingBuffer:!0});c.shadowMap.enabled=!0,c.shadowMap.type=1,c.shadowMap.autoUpdate=!1,c.shadowMap.needsUpdate=!0;let l=!!(window.matchMedia&&window.matchMedia(`(pointer: coarse)`).matches);c.setPixelRatio(Math.min(window.devicePixelRatio,l?1.5:2)),c.setSize(window.innerWidth,window.innerHeight),c.setClearColor(920327,1),document.body.appendChild(c.domElement);let u=c.getDrawingBufferSize(new z),d=new oe;d.fog=new ge(10465470,0);let p=new B(`#aeb6c0`),m=.062,h=new B(`#74508f`),g=new B,_=Pe({aspect:window.innerWidth/window.innerHeight}),y=pt({t:.5}),b={type:a,format:e,minFilter:x,magFilter:x,wrapS:se,wrapT:se,depthBuffer:!1,stencilBuffer:!1},C=[new N(256,256,b),new N(256,256,b),new N(256,256,b)];for(let e of C)c.setRenderTarget(e),c.clear();c.setRenderTarget(null);let w=new oe,E=new s(-1,1,1,-1,0,1),D=new ue({vertexShader:Ln,fragmentShader:Rn,uniforms:{uCurr:{value:null},uPrev:{value:null},uTexel:{value:new z(1/256,1/256)},uMouse:{value:new z(-1,-1)},uMouseStrength:{value:0},uC2:{value:.25},uDamping:{value:.992},uRainCount:{value:0},uRainDrops:{value:Array.from({length:8},()=>new W)},uWakeCount:{value:0},uWakeDrops:{value:Array.from({length:8},()=>new W)}}});w.add(new n(new T(2,2),D));let O=new N(u.x,u.y,{minFilter:o,magFilter:o,depthBuffer:!0,stencilBuffer:!1});function k(e){let t=document.createElement(`canvas`);t.width=t.height=1024;let n=t.getContext(`2d`);n.fillStyle=e?`#0c1418`:`#15110b`,n.fillRect(0,0,1024,1024),n.strokeStyle=e?`rgba(120,150,170,0.22)`:`rgba(184,153,104,0.30)`,n.lineWidth=2;for(let e=0;e<=1024;e+=64)n.beginPath(),n.moveTo(e,0),n.lineTo(e,1024),n.stroke(),n.beginPath(),n.moveTo(0,e),n.lineTo(1024,e),n.stroke();e||(n.fillStyle=`#B89968`,n.font=`bold 360px Georgia, serif`,n.textAlign=`center`,n.textBaseline=`middle`,n.fillText(`LGR`,512,470),n.font=`600 64px ui-monospace, monospace`,n.fillText(`WEB · STUDIO`,512,720));let r=new ie(t);return r.colorSpace=pe,r}let ee=new n(new T(28,28),new S({map:k(t)}));ee.rotation.x=-Math.PI/2,ee.position.y=-.35,d.add(ee);let A=new n(new T(40,24),new ue({depthWrite:!1,vertexShader:Fn,fragmentShader:In,uniforms:{uTime:{value:0},uInk:{value:y.horizon},uGold:{value:y.sky},uFogColor:{value:g},uFogAmt:{value:0},uFogCharm:Ve}}));A.position.set(0,3,-8),d.add(A);let j=new ue({vertexShader:zn,fragmentShader:Bn,uniforms:{uHeight:{value:null},uScene:{value:O.texture},uTexel:{value:new z(1/256,1/256)},uResolution:{value:new z(u.x,u.y)},uDisplace:{value:.42},uNormalStrength:{value:22},uRefractStrength:{value:.06},uChromaScale:{value:1},uNormalMatrix:{value:new v},uLightDir:{value:y.sunDir},uInk:{value:new B(`#2A2218`)},uGold:{value:new B(`#B89968`)},uVector:Fe,uVecWater:{value:new B(`#1fb8d8`)},uVecTint:{value:Ie}}}),M=new n(new T(28,28,255,255),j);M.rotation.x=-Math.PI/2,M.updateMatrixWorld(!0),j.uniforms.uNormalMatrix.value.getNormalMatrix(M.matrixWorld),d.add(M);let P={value:0},F=Vt({windowGlow:P}),I=at({seed:r,profileIndex:i,landmarkFactory:F,windowGlow:P});d.add(I.group);let L=vt({plinthTop:.3,extent:I.extent,profile:I.state.profile});d.add(L.group);let te=kt({extent:I.extent,waterSize:28,plinthTop:.3});d.add(te.group),D.uniforms.uWakeDrops.value=te.wakeDrops;let R=Ut({extent:I.extent});d.add(R.group),D.uniforms.uRainDrops.value=R.rainDrops;let ne=Gt({extent:I.extent});d.add(ne.group);let re=Jt({rig:_,getCamera:()=>_.camera,sources:[L,te,ne]}),ae=Pn();d.add(ae.group);let V=_n({scale:90});d.add(V.mesh);let H=!1;function ce(e){let t=e&&y.sunArc.y>-.04;t!==H&&(H=t,V.mesh.visible=t,A.visible=!t)}let U=null,de=null,fe=!1,me=1234,_e=`valley`,ve=en.map(e=>e.key),ye=()=>[I.group,L.group,te.group],be=()=>[U,de].filter(Boolean);function xe(){for(let e of be())d.remove(e),e.userData.dispose?.();let e=on({seed:me,size:160,preset:_e});U=sn(e,{worldSize:26,baseY:0,chunks:6}),de=gn({terrain:e,seed:me,worldSize:26,baseY:0,biomeKeys:ve});for(let e of be())e.visible=fe,d.add(e);typeof window<`u`&&(window.__world={seed:me,preset:_e,active:fe,chunks:U.children.length,scatter:de.userData.counts})}let Se=e=>{for(let t of be())t.visible=e},Ce={enter(){U||xe(),fe=!0,Se(!0);for(let e of ye())e.visible=!1;window.__world&&(window.__world.active=!0)},exit(){fe=!1,Se(!1);for(let e of ye())e.visible=!0;window.__world&&(window.__world.active=!1)},reroll(){return me=Math.random()*1e9|0,xe(),Ce.enter(),me},setPreset(e){return an.includes(e)&&(_e=e,xe(),Ce.enter()),_e},get active(){return fe},get seed(){return me},get preset(){return _e},get presets(){return an}};I.group.remove(I.key),d.add(I.key),I.key.castShadow=!0,I.key.shadow.mapSize.set(2048,2048),I.key.shadow.bias=-18e-5,I.key.shadow.normalBias=.028,d.add(I.key.target);function we(){let e=I.key.shadow.camera,t=I.extent+4.5;e.left=-t,e.right=t,e.top=t,e.bottom=-t,e.near=1,e.far=48,e.updateProjectionMatrix(),c.shadowMap.needsUpdate=!0}we();let Te=new he(u.x,u.y),G=new N(u.x,u.y,{minFilter:o,magFilter:o,depthBuffer:!0,stencilBuffer:!1,depthTexture:Te}),Ee=new N(u.x,u.y,{minFilter:o,magFilter:o,depthBuffer:!1,stencilBuffer:!1}),K=new N(u.x,u.y,{minFilter:o,magFilter:o,depthBuffer:!1,stencilBuffer:!1}),De=new N(u.x,u.y,{minFilter:o,magFilter:o,depthBuffer:!1,stencilBuffer:!1}),Oe=Math.max(1,Math.floor(u.x/2)),ke=Math.max(1,Math.floor(u.y/2)),Ae=new N(Oe,ke,{minFilter:o,magFilter:o,depthBuffer:!1,stencilBuffer:!1}),je=new N(Oe,ke,{minFilter:o,magFilter:o,depthBuffer:!1,stencilBuffer:!1}),Me=new oe,Ne=new s(-1,1,1,-1,0,1),Ue=new n(new T(2,2));Me.add(Ue);let q=new ue({vertexShader:Ln,fragmentShader:Vn,uniforms:{uScene:{value:G.texture},uTime:{value:0},uResolution:{value:new z(u.x,u.y)},uGrain:{value:1},uChroma:{value:1},uExposure:{value:1},uAces:{value:0},uBloom:{value:Ae.texture},uBloomStrength:{value:0}}}),We=new ue({vertexShader:Ln,fragmentShader:Gn,uniforms:{uScene:{value:G.texture},uThreshold:{value:.78}}}),Ge=new ue({vertexShader:Ln,fragmentShader:Kn,uniforms:{uScene:{value:Ae.texture},uDir:{value:new z}}});function Ke(e){We.uniforms.uScene.value=e.texture,X(We,Ae),Ge.uniforms.uScene.value=Ae.texture,Ge.uniforms.uDir.value.set(1.6/Oe,0),X(Ge,je),Ge.uniforms.uScene.value=je.texture,Ge.uniforms.uDir.value.set(0,1.6/ke),X(Ge,Ae),q.uniforms.uBloom.value=Ae.texture;let t=1-f.clamp(y.sunArc.y*2.2,0,1);q.uniforms.uBloomStrength.value=.85*(.7+.6*t)}let qe=e=>{let t=e.map(e=>new B(e));for(;t.length<8;)t.push(new B(0,0,0));return t},Je=[`night`,`dawn`,`noon`,`dusk`],J={inkgold:Je.map(e=>qe(Qn[e])),terminal:Je.map(e=>qe($n[e]))},Ye=new ue({vertexShader:Ln,fragmentShader:Hn,uniforms:{uScene:{value:Ee.texture},uResolution:{value:new z(u.x,u.y)},uPixelSize:{value:Zn},uPalette:{value:J.inkgold[2]},uPaletteB:{value:J.inkgold[2]},uPaletteBlend:{value:0},uPaletteSize:{value:5}}}),Xe=new ue({vertexShader:Ln,fragmentShader:qn,uniforms:{uScene:{value:Ee.texture},uResolution:{value:new z(u.x,u.y)},uGridWidth:{value:160},uDither:{value:.55},uPalette:{value:Xn(Jn[`8-bit`].palette)},uPaletteSize:{value:1},uUsePalette:{value:1}}}),Ze={};for(let e of Yn)Ze[e]=Jn[e].palette?Xn(Jn[e].palette):null;let Y=new ue({vertexShader:Ln,fragmentShader:Un,uniforms:{uScene:{value:Ee.texture},uDepth:{value:Te},uResolution:{value:new z(u.x,u.y)},uBands:{value:4},uToonGain:{value:1.7},uToonGamma:{value:.6},uToonFloor:{value:y.toonFloor},uOutline:{value:y.outline},uNear:{value:.1},uFar:{value:100},uIsPerspective:{value:1}}}),Qe=new ue({vertexShader:Ln,fragmentShader:Wn,uniforms:{uToon:{value:K.texture},uPixel:{value:De.texture},uBlend:{value:0}}});function X(e,t){Ue.material=e,c.setRenderTarget(t),c.render(Me,Ne)}function $e(){_.setViewport(window.innerWidth,window.innerHeight),c.setSize(window.innerWidth,window.innerHeight);let e=c.getDrawingBufferSize(new z);return O.setSize(e.x,e.y),G.setSize(e.x,e.y),Ee.setSize(e.x,e.y),K.setSize(e.x,e.y),De.setSize(e.x,e.y),Oe=Math.max(1,e.x>>1),ke=Math.max(1,e.y>>1),Ae.setSize(Oe,ke),je.setSize(Oe,ke),j.uniforms.uResolution.value.set(e.x,e.y),q.uniforms.uResolution.value.set(e.x,e.y),Ye.uniforms.uResolution.value.set(e.x,e.y),Xe.uniforms.uResolution.value.set(e.x,e.y),Y.uniforms.uResolution.value.set(e.x,e.y),e}let Z=3,et=!1,tt=!1,Q=`native`,nt=.3,rt=.46,it=[`native`,...Yn],ot={"16-bit":`16-bit`,"8-bit":`8-bit`,gb:`Game Boy`,modern:`Modern`,native:`Pixel`,"1-bit":`1-bit`};typeof window<`u`&&(window.__mode=Z,window.__vector=et,window.__era=Q);let st=0,ct=performance.now(),lt=typeof window<`u`&&new URLSearchParams(window.location.search).has(`perf`);typeof window<`u`&&(window.__perf=lt),lt&&(c.info.autoReset=!1);let ut=null;typeof window<`u`&&(window.__loaded=!1);let dt=0,ft=new W(1,1,1),mt=!1;function ht(e){let t=tt?J.terminal:J.inkgold,n=e%1*4,r=Math.floor(n)%4;Ye.uniforms.uPalette.value=t[r],Ye.uniforms.uPaletteB.value=t[(r+1)%4],Ye.uniforms.uPaletteBlend.value=n-Math.floor(n)}function gt(e){let t=Jn[e];t&&(Xe.uniforms.uGridWidth.value=t.gridWidth,Xe.uniforms.uDither.value=t.dither,Xe.uniforms.uUsePalette.value=+!!t.palette,t.palette&&(Xe.uniforms.uPalette.value=Ze[e],Xe.uniforms.uPaletteSize.value=t.palette.length))}function _t(){Q!==`native`&&gt(Q)}let yt=()=>Q===`native`?Ye:Xe;function bt(e,t){ce(!0),M.visible=!1,c.setRenderTarget(O),c.render(d,e),M.visible=!0,c.setRenderTarget(t),c.render(d,e)}function xt(e,t){ce((Z===1||Z===2)&&!et),q.uniforms.uBloomStrength.value=0,M.visible=!1,c.setRenderTarget(O),c.render(d,_.camera),M.visible=!0;let n=!et&&(Z===1||Z===2);if(Z===1&&!n)c.setRenderTarget(t),c.render(d,_.camera);else if(Z===1)c.setRenderTarget(G),c.render(d,_.camera),Ke(G),q.uniforms.uAces.value=1,q.uniforms.uGrain.value=0,q.uniforms.uChroma.value=0,X(q,t);else if(c.setRenderTarget(G),c.render(d,_.camera),Z===2)n&&Ke(G),q.uniforms.uAces.value=+!!n,q.uniforms.uGrain.value=1,q.uniforms.uChroma.value=1,X(q,t);else{q.uniforms.uAces.value=0,q.uniforms.uGrain.value=0,q.uniforms.uChroma.value=0,X(q,Ee);let n=_.camera;Y.uniforms.uNear.value=n.near,Y.uniforms.uFar.value=n.far,Y.uniforms.uIsPerspective.value=+!!n.isPerspectiveCamera;let r=e.era?(gt(e.era),Xe):yt();e.kind===`pixel`?(X(r,t),window.__style=`pixel`):e.kind===`toon`?(X(Y,t),window.__style=`toon`):(X(Y,K),X(r,De),Qe.uniforms.uBlend.value=e.blend,X(Qe,t),window.__style=`blend`)}}function St(){let e=Ct(),t=e.kind===`toon`?1:e.kind===`blend`?1-e.blend:0;return j.uniforms.uChromaScale.value=f.lerp(1,.5,t),e}function Ct(){if(Z===1||Z===2)return{kind:`none`};if(Z===7)return{kind:`pixel`};if(Z===8)return{kind:`toon`};let e=_.styleT;return window.__styleT=e,e<=nt?{kind:`toon`}:e>=rt?{kind:`pixel`,era:e<.62?`16-bit`:e<.8?`8-bit`:`gb`}:{kind:`blend`,blend:f.smoothstep(e,nt,rt),era:`16-bit`}}function wt(e){return Z===1||Z===2?``:et&&Z!==7&&Z!==8?`Vector`:e.kind===`toon`?`Toon`:e.kind===`pixel`?ot[e.era||Q]||`Pixel`:e.kind===`blend`?`Toon → `+(ot[e.era]||`Pixel`):``}function Tt(e,t,{shadowsOn:n=!0,seasonTarget:r=0}={}){if(lt){let e=c.info;ut={calls:e.render.calls,tris:e.render.triangles,programs:e.programs?e.programs.length:0,geo:e.memory.geometries,tex:e.memory.textures},e.reset()}A.material.uniforms.uTime.value=t,q.uniforms.uTime.value=t,y.update(e),I.key.position.copy(y.sunDir).multiplyScalar(24),I.key.color.copy(y.sunColor),I.key.intensity=y.sunIntensity,I.fill.color.copy(y.hemiSky),I.fill.groundColor.copy(y.hemiGround),P.value=y.windowGlow,V.setSun(y.sunArc),V.setParams(y.skyParams);let i=R.overcast;I.key.intensity*=1-.5*i,I.key.color.lerp(p,.45*i),I.fill.intensity=1+.7*i;let a=f.smoothstep(y.sunDir.y,.06,.34),o=f.lerp(.28,1,1-y.windowGlow),s=n?a*o:0;I.key.shadow.intensity=.72*s,Le.value=.52*s,(n&&!mt||ft.distanceToSquared(y.sunDir)>2e-5)&&(c.shadowMap.needsUpdate=!0,ft.copy(y.sunDir)),mt=n;let l=1-y.windowGlow;Ie.setRGB(f.lerp(.46,1,l),f.lerp(.52,1,l),f.lerp(.74,1,l)),q.uniforms.uExposure.value=y.exposure,Y.uniforms.uToonGain.value=y.toonGain,c.setClearColor(y.horizon,1),ht(y.t),window.__t=y.t,L.update(e,t,y),I.update(t),te.update(e,t,y),D.uniforms.uWakeCount.value=te.wakeCount,R.update(e,t),D.uniforms.uRainCount.value=R.rainDropCount;let u=R.fog*(1-l);d.fog.density=R.fog*m,g.copy(y.horizon).lerp(h,.85*u),d.fog.color.copy(g),c.setClearColor(g,1),Ve.value=R.fog,A.material.uniforms.uFogAmt.value=.7*R.fog,Re.value=R.snow,ze.value=R.cloud*.55,Be.x+=e*.018,Be.y+=e*.009,He.value+=(r-He.value)*Math.min(1,e*1.5),ne.update(e,t,y,R);let _=Ct(),v=_.kind===`pixel`||_.kind===`blend`?`pixel`:et||_.kind===`toon`?`charm`:`realistic`;ae.update(e,t,y,R,v),st++;let b=performance.now();b-ct>=1e3&&(window.__fps=st,lt&&ut&&(console.log(`[perf] ${st} fps · ~${(1e3/Math.max(1,st)).toFixed(2)} ms · calls ${ut.calls} · tris ${ut.tris} · programs ${ut.programs} · geo ${ut.geo} · tex ${ut.tex}`),window.__perfInfo={fps:st,...ut}),st=0,ct=b);let[x,S,T]=C;if(D.uniforms.uPrev.value=x.texture,D.uniforms.uCurr.value=S.texture,c.setRenderTarget(T),c.render(w,E),C=[S,T,x],j.uniforms.uHeight.value=C[1].texture,dt<2&&typeof document<`u`&&++dt===2){let e=document.getElementById(`lgr-loader`);e&&e.classList.add(`gone`),window.__loaded=!0}}function Et(e){Z=e,window.__mode=Z}function Dt(){return et=!et,Fe.value=+!!et,window.__vector=et,et}function Ot(e){return et=!!e,Fe.value=+!!et,window.__vector=et,et}function At(){return Q=it[(it.indexOf(Q)+1)%it.length],window.__era=Q,_t(),Q}function jt(){return tt=!tt,tt}return{updateWorld:Tt,decideStyle:St,renderCityPipeline:xt,renderCityBeautyTo:bt,styleHintName:wt,setPostMode:Et,toggleVector:Dt,setVector:Ot,cycleEra:At,togglePalette:jt,get mode(){return Z},get vector(){return et},get sceneEra(){return Q},renderer:c,drawBuffer:u,scene:d,rig:_,sunRig:y,SIM:256,targets:C,simScene:w,simCamera:E,simMaterial:D,grabRT:O,card:ee,backdrop:A,WATER_SIZE:28,water:M,waterMaterial:j,windowGlow:P,landmarkFactory:F,city:I,cityLife:L,waterLife:te,weatherRig:R,clouds:ne,inspector:re,world:Ce,fitShadowFrustum:we,SHADOW_DIST:24,sceneDepth:Te,sceneRT:G,filmicRT:Ee,toonRT:K,pixelRT:De,postScene:Me,postCamera:Ne,postQuad:Ue,filmicMaterial:q,pixelMaterial:Ye,pixelkitMaterial:Xe,toonMaterial:Y,mixMaterial:Qe,PALCACHE:J,ERA_TEX:Ze,runPass:X,OVERCAST_GREY:p,FOG_DENSITY:m,FOG_NIGHT_TINT:h,_fogColor:g,resize:$e}}var tr=`lgr_hints_`,nr=!1;function rr(){if(nr||typeof document>`u`)return;nr=!0;let e=document.createElement(`style`);e.textContent=`
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
  }`,document.head.appendChild(e)}function ir({key:e,title:t=`Tips`,tips:n=[],force:r=!1}={}){let i={key:e,shown:!1,dismissed:!1,seen:!1};if(typeof window<`u`&&(window.__hints=i),typeof document>`u`||!e)return{dismiss(){},el:null};let a=tr+e,o=!1;try{o=localStorage.getItem(a)===`1`}catch{}if(o&&!r)return i.seen=!0,{dismiss(){},el:null};rr();let s=!!(window.matchMedia&&window.matchMedia(`(prefers-reduced-motion: reduce)`).matches),c=document.createElement(`div`);c.className=`lgr-hints`,c.innerHTML=`<div class="lgr-hints-card">
    <div class="lgr-hints-h">${t}</div>
    <ul>${n.map(e=>`<li>${e}</li>`).join(``)}</ul>
    <button class="lgr-hints-ok">Got it</button>
    <button class="lgr-hints-x" title="Dismiss (Esc)" aria-label="Dismiss">✕</button>
  </div>`,document.body.appendChild(c),i.shown=!0,s?c.classList.add(`on`):requestAnimationFrame(()=>c.classList.add(`on`));let l=!1;function u(e=!0){if(!l){if(l=!0,e)try{localStorage.setItem(a,`1`)}catch{}i.dismissed=!0,window.removeEventListener(`keydown`,d),c.classList.remove(`on`),setTimeout(()=>c.remove(),s?0:300)}}function d(e){e.key===`Escape`&&u(!0)}return window.addEventListener(`keydown`,d),c.querySelector(`.lgr-hints-ok`).addEventListener(`click`,()=>{navigator.vibrate?.(10),u(!0)}),c.querySelector(`.lgr-hints-x`).addEventListener(`click`,()=>{navigator.vibrate?.(10),u(!0)}),{dismiss:u,el:c}}var ar=new Set([`w`,`a`,`s`,`d`,`arrowup`,`arrowdown`,`arrowleft`,`arrowright`,`shift`,` `]),or={walker:{p:.6,hp:26,speed:.85,dmg:9,score:10,size:1,color:`#6f8a45`},runner:{p:.25,hp:12,speed:1.75,dmg:7,score:16,size:.82,color:`#a6d24c`},tank:{p:.15,hp:95,speed:.5,dmg:20,score:34,size:1.5,color:`#39492a`}};function sr(){let e=Math.random();return e<or.walker.p?`walker`:e<or.walker.p+or.runner.p?`runner`:`tank`}var cr=new B(`#ffffff`),lr=new B(`#d83a2a`),ur={food:{name:`Food`,glyph:`🍖`,color:`#c8782e`,consumable:!0},water:{name:`Water`,glyph:`💧`,color:`#3aa6dc`,consumable:!0},bandage:{name:`Bandage`,glyph:`➕`,color:`#e8e2d6`,consumable:!0},scrap:{name:`Scrap`,glyph:`⚙️`,color:`#8a8f96`,consumable:!1},medkit:{name:`Medkit`,glyph:`✚`,color:`#e0524a`,consumable:!0},repairkit:{name:`Repair Kit`,glyph:`🔧`,color:`#caa05a`,consumable:!0}},dr=[{out:`medkit`,need:{bandage:2}},{out:`repairkit`,need:{scrap:3}}];function fr({extent:e=8,plinthTop:r=.3}={}){let i=new b;i.visible=!1,i.raycast=()=>{};let a=r+.02,o=Math.max(3,e-.7),s=typeof window<`u`&&window.matchMedia&&window.matchMedia(`(pointer: coarse)`).matches,l=1.25,u=4.4,d=1.4,h=new b,g=new n(new me(.16,.34,4,10),J(new c({color:`#3f7fd0`,roughness:.6,flatShading:!0}),{color:`#3f7fd0`}));g.position.y=.33;let _=new n(new k(.13,12,9),J(new c({color:`#e9caa1`,roughness:.75,flatShading:!0}),{color:`#e9caa1`}));_.position.y=.66;let v=new n(new V(.1,.1,.16),J(new c({color:`#ffd54a`,roughness:.5,flatShading:!0}),{color:`#ffd54a`}));v.position.set(0,.38,.18),h.add(g,_,v),h.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!1),e.raycast=()=>{}}),h.scale.setScalar(1.6),h.position.y=a,i.add(h);let y=new n(new F(.95,16,-.9,1.8),new S({color:`#ffe08a`,transparent:!0,opacity:0,depthWrite:!1,side:2}));y.rotation.x=-Math.PI/2,y.position.y=a+.06,y.raycast=()=>{},i.add(y);let x=new A().setFromPoints([new W,new W]),w=new p(x,new m({color:`#fff3c0`,transparent:!0,opacity:0,depthWrite:!1}));w.raycast=()=>{},i.add(w);let T={x:0,z:0,vx:0,vz:0,hp:100,stamina:100,hunger:100,thirst:100,facing:0,iframe:0},E=new t(new me(.15,.3,4,8),J(new c({roughness:.85,flatShading:!0})),48);E.castShadow=!0,E.receiveShadow=!1,E.frustumCulled=!1,E.raycast=()=>{},E.instanceMatrix.setUsage(ee),i.add(E);let D=[];for(let e=0;e<48;e++)D.push({x:0,z:0,vx:0,vz:0,alive:!1,in:!1,type:`walker`,hp:1,maxhp:1,speed:1,dmg:0,score:0,size:1,phase:0,flash:0});let O=new B,j=[],M=J(new c({color:`#7a5a36`,roughness:.9,flatShading:!0}),{color:`#7a5a36`});for(let e=0;e<8;e++){let t=e/8*Math.PI*2,r=new n(new V(2.1,.7,.24),M.clone());r.position.set(Math.cos(t)*u,a+.35,Math.sin(t)*u),r.rotation.y=-t+Math.PI/2,r.castShadow=!0,r.raycast=()=>{},i.add(r),j.push({mesh:r,ang:t,hp:150,alive:!0,baseColor:new B(`#7a5a36`)})}function N(e,t){let n=Math.atan2(t,e);return n<0&&(n+=Math.PI*2),j[Math.round(n/(Math.PI*2/8))%8]}let P=[];for(let e=0;e<14;e++){let e=new n(new V(.26,.26,.26),J(new c({roughness:.6,flatShading:!0})));e.castShadow=!0,e.visible=!1,e.raycast=()=>{},i.add(e),P.push({mesh:e,x:0,z:0,kind:`food`,active:!1})}let I=new B;function L(){let e=Math.random();return e<.36?`food`:e<.72?`water`:e<.88?`bandage`:`scrap`}function te(e,t,n){let r=P.find(e=>!e.active);r&&(r.x=e,r.z=t,r.kind=n||L(),r.active=!0,r.mesh.position.set(e,a+.18,t),r.mesh.visible=!0,r.mesh.material.color.copy(I.set(ur[r.kind].color)))}let R=[];function ne(e){let t=R.find(t=>t.id===e);return t?t.n:0}function re(e,t=1){let n=R.find(t=>t.id===e);return n?(n.n+=t,!0):R.length<8?(R.push({id:e,n:t}),!0):!1}function ie(e,t){let n=R.find(t=>t.id===e);return!n||n.n<t?!1:(n.n-=t,n.n<=0&&R.splice(R.indexOf(n),1),!0)}function z(e){if(ne(e)<=0)return!1;if(e===`food`)T.hunger=Math.min(100,T.hunger+38);else if(e===`water`)T.thirst=Math.min(100,T.thirst+38);else if(e===`bandage`)T.hp=Math.min(100,T.hp+40);else if(e===`medkit`)T.hp=Math.min(100,T.hp+90);else if(e===`repairkit`){let e=null;for(let t of j)(!e||t.hp<e.hp)&&(e=t);e&&(e.hp=150,e.alive=!0)}else return!1;return ie(e,1),Ke(),!0}function ae(e){for(let t in e.need)if(ne(t)<e.need[t])return!1;for(let t in e.need)ie(t,e.need[t]);return re(e.out,1),Ke(),!0}let oe=!1,H=!1,se=1,ce=0,le=0,ue=0,U=`spawning`,de=0,fe=0,pe=0,he=0,ge=!1,_e=null;function ve(){for(let e=0;e<48;e++)if(!D[e].alive)return D[e];return null}function ye(e){let t=ve();if(!t)return;let n=or[sr()];t.type=Object.keys(or).find(e=>or[e]===n)||`walker`;let r=Math.random()*Math.PI*2;t.x=Math.cos(r)*o,t.z=Math.sin(r)*o,t.vx=0,t.vz=0;let i=1+se*.08;t.maxhp=n.hp*i,t.hp=t.maxhp,t.speed=n.speed*(1+.4*e)*(1+se*.015)*(se===1?.85:1),t.dmg=n.dmg,t.score=n.score,t.size=n.size,t.phase=Math.random()*6.28,t.flash=0,t.in=!1,t.alive=!0}function be(){let e=null,t=1/0;for(let n of D){if(!n.alive)continue;let r=(n.x-T.x)**2+(n.z-T.z)**2;r<t&&(t=r,e=n)}return e}function xe(e){e.alive=!1,ce++,le+=e.score,Math.random()<.3&&te(e.x,e.z)}function Se(e,t){e.hp-=t,e.flash=.12,e.hp<=0&&xe(e)}function Ce(){if(H||pe>0)return;pe=.16;let e,t;if(_e)e=_e.x-T.x,t=_e.z-T.z;else{let n=be();n?(e=n.x-T.x,t=n.z-T.z):(e=Math.sin(T.facing),t=Math.cos(T.facing))}let n=Math.hypot(e,t)||1;e/=n,t/=n,T.facing=Math.atan2(e,t);let r=null,i=1/0;for(let n of D){if(!n.alive)continue;let a=n.x-T.x,o=n.z-T.z,s=a*e+o*t;s<0||s>9||Math.abs(a*t-o*e)<.7*(.4+.6*n.size)&&s<i&&(i=s,r=n)}let o=r?i:9,s=x.attributes.position;s.setXYZ(0,T.x,a+.5,T.z),s.setXYZ(1,T.x+e*o,a+.5,T.z+t*o),s.needsUpdate=!0,w.material.opacity=.95,r&&Se(r,16)}function we(){if(H||he>0)return;he=.42,y.material.opacity=.85;let e=Math.sin(T.facing),t=Math.cos(T.facing);for(let n of D){if(!n.alive)continue;let r=n.x-T.x,i=n.z-T.z,a=Math.hypot(r,i);a>1.05+n.size*.2||(r*e+i*t)/(a||1)>.2&&Se(n,34)}}let Te={},G={x:0,y:0};function Ee(e,t){if(!oe)return;let n=e.key.toLowerCase();if(t&&n===`i`){e.stopImmediatePropagation(),Ye();return}if(t&&n===`escape`&&Be){e.stopImmediatePropagation(),Je();return}if(ar.has(n)){if(e.stopImmediatePropagation(),n.startsWith(`arrow`)&&e.preventDefault(),n===` `){t&&we();return}Te[n]=t}}typeof window<`u`&&(window.addEventListener(`keydown`,e=>Ee(e,!0)),window.addEventListener(`keyup`,e=>Ee(e,!1)));let K=null,De=null,Oe=null,ke=null,Ae=null,je=null,Me=null,Ne=null,Pe=null,Fe=null,Ie=null,Le=null,Re=null,ze=null,Be=!1;if(typeof document<`u`){let e=document.createElement(`style`);e.textContent=`
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
    `,document.head.appendChild(e),K=document.createElement(`div`),K.className=`hoard-stick`,De=document.createElement(`div`),De.className=`knob`,K.appendChild(De),document.body.appendChild(K);let t=!1,n=e=>{let t=K.getBoundingClientRect(),n=e.clientX-(t.left+t.width/2),r=e.clientY-(t.top+t.height/2),i=Math.hypot(n,r)||1;i>44&&(n*=44/i,r*=44/i),De.style.transform=`translate(${n}px,${r}px)`,G.x=n/44,G.y=-r/44};K.addEventListener(`pointerdown`,e=>{t=!0,K.setPointerCapture(e.pointerId),n(e)}),K.addEventListener(`pointermove`,e=>{t&&n(e)});let r=()=>{t=!1,G.x=0,G.y=0,De.style.transform=`translate(0,0)`};K.addEventListener(`pointerup`,r),K.addEventListener(`pointercancel`,r),Ie=document.createElement(`button`),Ie.className=`hoard-btn hoard-fire`,Ie.textContent=`FIRE`,document.body.appendChild(Ie),Le=document.createElement(`button`),Le.className=`hoard-btn hoard-melee`,Le.textContent=`MELEE`,document.body.appendChild(Le),Ie.addEventListener(`pointerdown`,e=>{e.preventDefault(),navigator.vibrate?.(12),ge=!0}),Ie.addEventListener(`pointerup`,()=>{ge=!1}),Ie.addEventListener(`pointercancel`,()=>{ge=!1}),Le.addEventListener(`pointerdown`,e=>{e.preventDefault(),navigator.vibrate?.(18),we()}),Oe=document.createElement(`div`),Oe.className=`hoard-hud`,Oe.innerHTML=`HP<div class="bar"><i style="background:#e0524a"></i></div>STAMINA<div class="bar"><i style="background:#4ad08a"></i></div>HUNGER<div class="bar"><i style="background:#d89a3a"></i></div>THIRST<div class="bar"><i style="background:#3aa6dc"></i></div><div class="stat"></div>`,document.body.appendChild(Oe);let i=Oe.querySelectorAll(`i`);ke=i[0],Ae=i[1],je=i[2],Me=i[3],Ne=Oe.querySelector(`.stat`),Pe=document.createElement(`div`),Pe.className=`hoard-banner`,document.body.appendChild(Pe),Fe=document.createElement(`div`),Fe.className=`hoard-death`,Fe.innerHTML=`<h2>YOU DIED</h2><div class="ds"></div><button>RESTART</button>`,document.body.appendChild(Fe),Fe.querySelector(`button`).addEventListener(`click`,()=>Y());let a=document.createElement(`style`);a.textContent=`
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
    `,document.head.appendChild(a),Re=document.createElement(`button`),Re.className=`hoard-bagbtn`,Re.textContent=`🎒`,Re.title=`Inventory (I)`,document.body.appendChild(Re),Re.addEventListener(`click`,()=>Ye()),ze=document.createElement(`div`),ze.className=`hoard-bag`,document.body.appendChild(ze)}let Ve=0;function He(e,t=1.8){Pe&&(Pe.textContent=e,Pe.style.display=`block`),Ve=t}let Ue=Math.PI/4;function q(e){Ue=e}function We(e,t){_e={x:e,z:t}}function Ge(e){ge=e}function Ke(){if(typeof window<`u`&&(window.__hoardBag=Object.fromEntries(R.map(e=>[e.id,e.n]))),!ze)return;let e=`<div class="panel"><h3>INVENTORY</h3><div class="slots">`;for(let t=0;t<8;t++){let n=R[t];n?e+=`<button class="slot" data-id="${n.id}" title="${ur[n.id].name}">${ur[n.id].glyph}<span class="n">${n.n}</span></button>`:e+=`<div class="slot empty"></div>`}e+=`</div><div class="craft">`,dr.forEach((t,n)=>{let r=Object.keys(t.need).every(e=>ne(e)>=t.need[e]),i=Object.entries(t.need).map(([e,t])=>`${t}${ur[e].glyph}`).join(`+`);e+=`<button data-rec="${n}" ${r?``:`disabled`}>Craft ${ur[t.out].name} (${i})</button>`}),e+=`</div><button class="close">CLOSE (I)</button></div>`,ze.innerHTML=e,ze.querySelectorAll(`.slot[data-id]`).forEach(e=>e.addEventListener(`click`,()=>{ur[e.dataset.id].consumable&&z(e.dataset.id)})),ze.querySelectorAll(`[data-rec]`).forEach(e=>e.addEventListener(`click`,()=>ae(dr[+e.dataset.rec]))),ze.querySelector(`.close`).addEventListener(`click`,()=>Je())}function qe(){!oe||H||(Be=!0,ze&&ze.classList.add(`open`),Ke())}function Je(){Be=!1,ze&&ze.classList.remove(`open`)}function Ye(){Be?Je():qe()}function Xe(e){se=e,fe=5+e*2,U=`spawning`}function Ze(){T.x=0,T.z=0,T.vx=0,T.vz=0,T.hp=100,T.stamina=100,T.hunger=100,T.thirst=100,T.facing=0,T.iframe=0;for(let e of D)e.alive=!1;ce=0,le=0,ue=0,H=!1,ge=!1,_e=null;for(let e of j)e.hp=150,e.alive=!0,e.mesh.scale.set(1,1,1);for(let e of P)e.active=!1,e.mesh.visible=!1;R.length=0;let e=[`food`,`water`,`food`,`water`,`bandage`,`scrap`];for(let t=0;t<6;t++){let n=Math.random()*Math.PI*2,r=1.6+Math.random()*(o-2);te(Math.cos(n)*r,Math.sin(n)*r,e[t])}Fe&&(Fe.style.display=`none`),h.position.set(0,a,0),h.visible=!0,Xe(1),Ke()}function Y(){Ze()}function Qe(e){oe=e,i.visible=e;let t=e&&s;K&&(K.style.display=t?`block`:`none`),Ie&&(Ie.style.display=t?`block`:`none`),Le&&(Le.style.display=t?`block`:`none`),Oe&&(Oe.style.display=e?`block`:`none`),Pe&&!e&&(Pe.style.display=`none`),Fe&&!e&&(Fe.style.display=`none`),Re&&(Re.style.display=e?`block`:`none`),Je();for(let e in Te)Te[e]=!1;G.x=G.y=0,ge=!1,e&&Ze()}let X=new C;function $e(e,t,n){if(!oe||Be)return;let r=n?n.windowGlow:0;if(pe=Math.max(0,pe-e),he=Math.max(0,he-e),w.material.opacity=Math.max(0,w.material.opacity-e*8),y.material.opacity=Math.max(0,y.material.opacity-e*6),!H){ue+=e,T.iframe=Math.max(0,T.iframe-e);let n=(Te.d||Te.arrowright?1:0)-(Te.a||Te.arrowleft?1:0)+G.x,r=(Te.w||Te.arrowup?1:0)-(Te.s||Te.arrowdown?1:0)+G.y,i=Math.hypot(n,r);i>1&&(n/=i,r/=i);let s=i>.05,c=(Te.shift||G.y>.95)&&T.stamina>2&&s,l=Math.cos(Ue),p=Math.sin(Ue),m=l*n+-p*r,g=-p*n+-l*r,_=c?5.2:3,v=1-Math.exp(-14*e);T.vx+=(m*_-T.vx)*v,T.vz+=(g*_-T.vz)*v,T.x+=T.vx*e,T.z+=T.vz*e;let b=Math.hypot(T.x,T.z);b>o&&(T.x*=o/b,T.z*=o/b,T.vx=0,T.vz=0),s&&(T.facing=Math.atan2(m,g)),T.stamina=f.clamp(T.stamina+(c?-34:22)*e,0,100),T.hunger=Math.max(0,T.hunger-.9*e),T.thirst=Math.max(0,T.thirst-1.15*e),T.hunger<=0||T.thirst<=0?T.hp=Math.max(0,T.hp-3.5*e):T.hunger>55&&T.thirst>55&&T.hp<100&&(T.hp=Math.min(100,T.hp+2*e));for(let e of P)e.active&&(e.x-T.x)**2+(e.z-T.z)**2<.3&&re(e.kind)&&(e.active=!1,e.mesh.visible=!1,Ke());for(let t of j){if(t.hp>=150)continue;let n=Math.cos(t.ang)*u,r=Math.sin(t.ang)*u;(n-T.x)**2+(r-T.z)**2<d*d&&(t.hp=Math.min(150,t.hp+30*e),t.hp>0&&(t.alive=!0))}T.hp<=0&&Z(),h.position.set(T.x,a,T.z),h.rotation.y=T.facing,h.visible=!(T.iframe>0&&Math.floor(t*20)%2==0),ge&&Ce(),y.position.set(T.x,a+.06,T.z),y.rotation.z=-T.facing}let i=0;H||U===`spawning`&&(fe>0&&Math.random()<e*(se===1?3.5:6)&&(ye(r),fe--),fe<=0&&(U=`fighting`));let s=0,c=1/0;for(let n=0;n<48;n++){let r=D[n];if(!r.alive){X.position.set(0,-60,0),X.scale.setScalar(0),X.updateMatrix(),E.setMatrixAt(n,X.matrix);continue}i++;let o=T.x-r.x,d=T.z-r.z,f=Math.hypot(o,d)||1;if(f<c&&(c=f),!H){let t=o/f*r.speed,n=d/f*r.speed,i=1-Math.exp(-6*e);if(r.vx+=(t-r.vx)*i,r.vz+=(n-r.vz)*i,f>.52){let t=r.x+r.vx*e,n=r.z+r.vz*e,i=Math.hypot(r.x,r.z),a=Math.hypot(t,n);if(!r.in&&i>=u&&a<4.9){let r=N(t,n);if(r.alive){let i=Math.atan2(n,t),a=4.9;t=Math.cos(i)*a,n=Math.sin(i)*a,r.hp-=15*e,r.hp<=0&&(r.hp=0,r.alive=!1)}}a<u-.1&&(r.in=!0),r.x=t,r.z=n}else T.iframe<=0&&(s=Math.max(s,r.dmg))}r.flash=Math.max(0,r.flash-e);let p=Math.sin(t*6+r.phase)*.04;X.position.set(r.x,a+.3*r.size*l+p,r.z),X.rotation.set(0,Math.atan2(r.vx,r.vz),Math.sin(t*3+r.phase)*.12),X.scale.setScalar(r.size*l),X.updateMatrix(),E.setMatrixAt(n,X.matrix),O.set(or[r.type].color),r.flash>0?O.lerp(cr,.7):O.lerp(lr,.35*(1-r.hp/r.maxhp)),E.setColorAt(n,O)}E.instanceMatrix.needsUpdate=!0,E.instanceColor&&(E.instanceColor.needsUpdate=!0);let p=0;for(let e of j){e.alive&&p++;let t=Math.max(0,e.hp/150);e.mesh.scale.y=e.alive?Math.max(.18,t):.12,e.mesh.position.y=a+.35*e.mesh.scale.y,e.mesh.material.color.copy(e.baseColor).lerp(lr,(1-t)*.55)}!H&&s>0&&(T.hp=Math.max(0,T.hp-s*(se===1?.5:1)),T.iframe=.6,T.hp<=0&&Z()),!H&&U===`fighting`&&i===0&&fe<=0&&(U=`complete`,de=2.2,He(`WAVE ${se} CLEAR`,2)),!H&&U===`complete`&&(de-=e,de<=0&&(Xe(se+1),He(`WAVE ${se}`,1.4))),Ve>0&&(Ve-=e,Ve<=0&&Pe&&(Pe.style.display=`none`)),ke&&(ke.style.width=`${T.hp}%`),Ae&&(Ae.style.width=`${T.stamina}%`),je&&(je.style.width=`${T.hunger}%`),Me&&(Me.style.width=`${T.thirst}%`),Ne&&(Ne.textContent=`WAVE ${se}   KILLS ${ce}   SCORE ${le}`),typeof window<`u`&&(window.__hoard={active:oe,dead:H,paused:Be,hp:Math.round(T.hp),stamina:Math.round(T.stamina),hunger:Math.round(T.hunger),thirst:Math.round(T.thirst),zombies:i,barriers:p,pickups:P.filter(e=>e.active).length,inv:Object.fromEntries(R.map(e=>[e.id,e.n])),wave:se,kills:ce,score:le,weapon:`gun`,znear:+c.toFixed(2),px:+T.x.toFixed(2),pz:+T.z.toFixed(2)})}function Z(){H=!0,ge=!1,Fe&&(Fe.querySelector(`.ds`).innerHTML=`Wave reached: ${se}<br>Kills: ${ce}<br>Score: ${le}<br>Survived: ${ue.toFixed(0)}s`,Fe.style.display=`flex`)}return{group:i,update:$e,setActive:Qe,setAzimuth:q,setAim:We,setFiring:Ge,melee:we,reset:Ze,restart:Y,openBag:qe,closeBag:Je,toggleBag:Ye,addItem:re,get player(){return T},get dead(){return H},get active(){return oe},get paused(){return Be},get inv(){return R.map(e=>({...e}))},get nearestPickup(){let e=null,t=1e9;for(let n of P){if(!n.active)continue;let r=(n.x-T.x)**2+(n.z-T.z)**2;r<t&&(t=r,e=n)}return e?{x:e.x,z:e.z}:null},setTarget(){}}}var{Timer:pr}=te,mr=new URLSearchParams(window.location.search),hr=mr.get(`demo`)===`1`||mr.has(`capture`);window.__demo=hr;var gr=(mr.get(`city`)?Number(mr.get(`city`)):0)||Math.random()*1e9|0,_r=0,vr=er({demo:hr,citySeed:gr,profileIndex:_r}),{renderer:yr,scene:br,rig:xr,sunRig:Sr,city:Cr,landmarkFactory:wr}=vr,Tr=fr({extent:Cr.extent,plinthTop:.3});br.add(Tr.group),window.__hoardApi=Tr;var Er=!0;window.__shadows=Er,window.__scene=`hoard`;var Dr=new W,Or=new Set,kr=6.5;function Ar(e){Cr.group.traverse(t=>{!t.isMesh||t.userData.ground||!t.visible||(t.getWorldPosition(Dr),Math.hypot(Dr.x,Dr.z)<e&&(t.visible=!1,Or.add(t)))})}function jr(){for(let e of Or)e.visible=!0;Or.clear()}var Mr=new P,Nr=new W,Pr=new W,Fr=new Set;function Ir(){for(let e of Fr)e.material&&(e.material.opacity=1,e.material.transparent=!!e.userData._wasT,e.material.depthWrite=e.userData._wasDW!==!1);Fr.clear()}function Lr(e){Ir();let t=xr.camera;for(let[n,r]of[[0,0],[.7,.4],[-.7,.4]]){Pr.set(e.x+n,.6,e.z+r),Nr.subVectors(Pr,t.position);let i=Nr.length();Mr.set(t.position,Nr.normalize()),Mr.far=i-.4;for(let e of Mr.intersectObject(Cr.group,!0)){let t=e.object;!t.material||t.userData.ground||Fr.has(t)||(t.userData._wasT=t.material.transparent,t.userData._wasDW=t.material.depthWrite,t.material.transparent=!0,t.material.opacity=.16,t.material.depthWrite=!1,Fr.add(t))}}}function Rr(){Tr.setActive(!0),Ar(kr),xr.setMode(Ce.DIMETRIC),xr.setZoom(2.8,!0),xr.setTarget(Tr.player.x,.6,Tr.player.z,!0)}var zr=new P,Br=new z,Vr=new u(new W(0,1,0),-.32),Hr=new W,Ur=window.matchMedia&&window.matchMedia(`(pointer: coarse)`).matches,Wr=!1,Gr=0,Kr=0,qr=.005,Jr=(e,t)=>{Br.x=e/window.innerWidth*2-1,Br.y=-(t/window.innerHeight)*2+1};yr.domElement.addEventListener(`contextmenu`,e=>e.preventDefault()),yr.domElement.addEventListener(`mousedown`,e=>{e.button===0&&(Jr(e.clientX,e.clientY),Tr.setFiring(!0)),e.button===2&&(Wr=!0,Gr=e.clientX,Kr=e.clientY)}),window.addEventListener(`mousemove`,e=>{Jr(e.clientX,e.clientY),Wr&&(xr.orbit(-(e.clientX-Gr)*qr,-(e.clientY-Kr)*qr),Gr=e.clientX,Kr=e.clientY)}),window.addEventListener(`mouseup`,()=>{Tr.setFiring(!1),Wr=!1}),yr.domElement.addEventListener(`wheel`,e=>{e.preventDefault(),xr.zoomBy(Math.exp(e.deltaY*.0015))},{passive:!1}),window.addEventListener(`keydown`,e=>{(e.key===`h`||e.key===`H`)&&(Er=!Er,window.__shadows=Er)}),wr.whenReady.then(()=>{Cr.generate(gr,_r),vr.fitShadowFrustum(),jr(),Ar(kr),window.__cityReady=!0});var Yr=new pr;Yr.connect(document);function Xr(){Yr.update();let e=Math.min(Yr.getDelta(),.1);Tr.setAzimuth(xr.azimuth),Ur||(zr.setFromCamera(Br,xr.camera),zr.ray.intersectPlane(Vr,Hr)&&Tr.setAim(Hr.x,Hr.z)),Tr.update(e,Yr.getElapsed(),Sr),xr.setTarget(Tr.player.x,.6,Tr.player.z),xr.update(e),Lr(Tr.player),vr.updateWorld(e,Yr.getElapsed(),{shadowsOn:Er,seasonTarget:0});let t=vr.decideStyle();vr.renderCityPipeline(t,null),requestAnimationFrame(Xr)}Rr(),Xr(),ir({key:`hoard`,title:`The Hoard`,tips:[`Move: WASD / arrows · on touch: the left thumb-stick`,`Aim: mouse / drag · Fire: hold click / the FIRE button · Melee: the MELEE button`,`Survive the waves · B: bag & crafting · Esc: exit`]}),window.addEventListener(`resize`,()=>{vr.resize()});