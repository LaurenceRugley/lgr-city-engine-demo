import{$ as e,A as t,B as n,C as r,D as i,E as a,F as o,G as s,H as c,I as l,J as u,K as d,L as f,M as p,N as m,O as h,P as g,Q as _,R as v,S as y,T as b,U as x,V as S,W as C,X as w,Y as T,Z as E,_ as D,a as O,at as k,b as ee,c as A,ct as j,d as M,dt as N,et as P,f as te,ft as F,g as I,h as L,i as ne,it as re,j as R,k as ie,l as ae,lt as oe,m as se,n as ce,nt as le,o as z,ot as ue,p as B,q as de,r as fe,rt as pe,s as me,st as V,t as he,tt as ge,u as _e,ut as H,v as U,w as W,x as ve,y as ye,z as G}from"./three-CaZ3VnG1.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var be=Math.atan(1/Math.SQRT2),xe=Math.atan(.5),Se=Math.PI/4,Ce={PERSPECTIVE:4,ISOMETRIC:5,DIMETRIC:6},we=.12,Te=1.45,Ee=4,De=40,Oe=1.5,ke=16,Ae=6,je=22,Me=3.5,Ne=11,K=(e,t,n)=>e+(t-e)*(1-Math.exp(-8*n)),Pe=(e,t)=>e+Math.PI*2*Math.round((t-e)/(Math.PI*2));function Fe({aspect:e,fov:t=48,near:n=.1,far:r=100,target:i=new N(0,.8,0),azimuth:a=Se,elevation:c=.52,distance:l=12,zoom:u=5.5}={}){let d=new s(t,e,n,r),f=new x(-1,1,1,-1,n,r),p=Ce.PERSPECTIVE,m=e,h={azimuth:a,elevation:c,distance:l,zoom:u,target:i.clone()},g={azimuth:a,elevation:c,distance:l,zoom:u,target:i.clone()},_=!1,v=null,y=new N,b=()=>p===Ce.PERSPECTIVE?d:f;function S(e){e!==p&&(p=e,p===Ce.ISOMETRIC||p===Ce.DIMETRIC?(h.elevation=p===Ce.ISOMETRIC?be:xe,h.azimuth=Pe(Se,g.azimuth),_=!0):_=!1)}function C(e,t){h.azimuth+=e,_||(h.elevation=o.clamp(h.elevation+t,we,Te))}function w(e){p===Ce.PERSPECTIVE?h.distance=o.clamp(h.distance*e,Ee,De):h.zoom=o.clamp(h.zoom*e,Oe,ke)}function T(e,t){let n=h.azimuth,r=p===Ce.PERSPECTIVE?h.distance*.04:h.zoom*.08,i=new N(Math.cos(n),0,-Math.sin(n)),a=new N(-Math.sin(n),0,-Math.cos(n));h.target.addScaledVector(i,e*r),h.target.addScaledVector(a,t*r)}function E(e,t){m=e/t,d.aspect=m,d.updateProjectionMatrix()}function D(e){v&&(v(y),h.target.copy(y)),g.azimuth=K(g.azimuth,h.azimuth,e),g.elevation=K(g.elevation,h.elevation,e),g.distance=K(g.distance,h.distance,e),g.zoom=K(g.zoom,h.zoom,e),g.target.x=K(g.target.x,h.target.x,e),g.target.y=K(g.target.y,h.target.y,e),g.target.z=K(g.target.z,h.target.z,e);let t=Math.cos(g.elevation),n=Math.sin(g.elevation),r=Math.cos(g.azimuth),i=Math.sin(g.azimuth),a=b();if(a.position.set(g.target.x+g.distance*t*i,g.target.y+g.distance*n,g.target.z+g.distance*t*r),a.lookAt(g.target),a.isOrthographicCamera){let e=g.zoom,t=e*m;a.left=-t,a.right=t,a.top=e,a.bottom=-e,a.updateProjectionMatrix()}}function O(e,t,n,r=!1){h.target.set(e,t,n),r&&g.target.copy(h.target)}function k(e,t=!1){h.zoom=o.clamp(e,Oe,ke),t&&(g.zoom=h.zoom)}function ee(e,{frame:t,snap:n=!1}={}){v=e,n&&(v(y),h.target.copy(y),g.target.copy(y)),t!=null&&(p===Ce.PERSPECTIVE?h.distance=o.clamp(t,Ee,De):h.zoom=o.clamp(t,Oe,ke))}function A(){v=null}return{get camera(){return b()},get mode(){return p},get azimuth(){return g.azimuth},get following(){return!!v},setTarget:O,setZoom:k,setFollow:ee,clearFollow:A,get styleT(){return p===Ce.PERSPECTIVE?o.clamp((g.distance-Ae)/(je-Ae),0,1):o.clamp((g.zoom-Me)/(Ne-Me),0,1)},setMode:S,orbit:C,zoomBy:w,pan:T,setViewport:E,update:D}}var Ie={value:0},Le=new B(`#ffffff`),Re={value:0},ze={value:0},Be={value:0},Ve=new H,He={value:0},Ue={value:0},We=`
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
  vWorldXZ = (modelMatrix * vec4(position, 1.0)).xz;`)}function q(e){return e.replace(`#include <shadowmap_pars_fragment>`,`#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>`)}var J=`col *= mix(1.0, getShadowMask(), uVecShadow);`;function Je(e,{color:t,id:n,windowGlow:r,winColors:i=[`#ffb852`,`#8cd9ff`],litFrac:a=.55}={}){let o=[0,1,2].map(e=>new B(i[e]??i[i.length-1]));return e.customProgramCacheKey=()=>`lgr-vec-tower`,e.onBeforeCompile=e=>{Ge(e),e.uniforms.uWindowGlow=r,e.uniforms.uWinId={value:n},e.uniforms.uVecColor={value:new B(t)},e.uniforms.uWinA={value:o[0]},e.uniforms.uWinB={value:o[1]},e.uniforms.uWinC={value:o[2]},e.uniforms.uWinLit={value:a},e.vertexShader=qe(e.vertexShader),e.fragmentShader=Ke(q(e.fragmentShader.replace(`#include <common>`,`#include <common>
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
          ${J}                                  // the sun's shadow darkens the body
          vec3 wcol; vec2 w = winTerms(wcol);
          vec3 glass = vec3(0.17, 0.23, 0.34);          // dark glass-blue panes (day)
          col = mix(col, glass, w.x * 0.85);
          col += w.x * w.y * wcol * uWindowGlow * 1.5;  // …windows EMIT (unshadowed) at night
          gl_FragColor = vec4(col, diffuseColor.a);
        }`)))},e}function Y(e,{color:t=null,glow:n=null,glowDay:r=0,glowNight:i=1,windowGlow:a=null,season:o=!1}={}){let s=t===null,c=n!==null&&a!==null;return e.customProgramCacheKey=()=>`lgr-vec|`+(s?`d`:`c`)+(c?`g`:``)+(o?`s`:``),e.onBeforeCompile=e=>{Ge(e),s||(e.uniforms.uVecColor={value:new B(t)}),c&&(e.uniforms.uGlow={value:new B(n)},e.uniforms.uGlowDay={value:r},e.uniforms.uGlowNight={value:i},e.uniforms.uWindowGlow=a),o&&(e.uniforms.uSeason=Ue),e.vertexShader=qe(e.vertexShader);let l=s?`diffuseColor.rgb`:`uVecColor`,u=o?`seasonShift(${l})`:l,d=(s?``:`uniform vec3 uVecColor;
`)+(c?`uniform vec3 uGlow; uniform float uGlowDay; uniform float uGlowNight; uniform float uWindowGlow;
`:``)+(o?`uniform float uSeason;
vec3 seasonShift(vec3 c){
  c = mix(c, vec3(0.86, 0.46, 0.13), smoothstep(0.40, 0.70, uSeason));   // → autumn orange
  c = mix(c, vec3(0.46, 0.33, 0.20), smoothstep(0.75, 1.00, uSeason));   // → bare brown
  return c;
}
`:``),f=c?`uGlow * mix(uGlowDay, uGlowNight, uWindowGlow)`:`vec3(0.0)`,p=Ke(q(e.fragmentShader.replace(`#include <common>`,`#include <common>
`+d+We).replace(`#include <opaque_fragment>`,`#include <opaque_fragment>
        if (uVector > 0.5) {
          vec3 col = vecShade(${u});
          ${J}                            // the sun's shadow darkens the flat tier…
          gl_FragColor = vec4(col + ${f}, diffuseColor.a);  // …but the night glow stays lit
        }`)));c&&(p=p.replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>\n  totalEmissiveRadiance += ${f};`)),e.fragmentShader=p},e}function Ye(e){let t=e>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Xe(e){let t=Ye(e);return{next:t,range:(e,n)=>e+(n-e)*t(),int:(e,n)=>e+Math.floor(t()*(n-e+1)),pick:e=>e[Math.floor(t()*e.length)],chance:e=>t()<e}}var Ze=[{key:`manhattan`,name:`Manhattan`,towers:[`#EDE3C8`,`#D9B98A`,`#B5562F`,`#A8C8E8`,`#2E3F5C`],ground:`#7CC455`,street:`#9AA0A6`,sidewalk:`#C8CCD0`,park:`#5DB347`,water:`#29A8D8`,shopfronts:[`#C04A3A`,`#3A7AC0`,`#C09A2A`],glass:`#7FA8CC`,winColors:[`#ffd27a`,`#9ad6ff`],hMax:4.6,sigma:.36,roofRate:.35,pSplit:.6,nightLit:.55,roofTint:null,coast:{base:.55,out:1,in:.6,jag:1.05},landmarks:[`empireState`,`chrysler`,`liberty`]},{key:`paris`,name:`Paris`,towers:[`#E8DCC0`,`#F2EAD6`,`#E0D2B4`],ground:`#8CC46A`,street:`#A8A29A`,sidewalk:`#D4CEC2`,park:`#6DB35A`,water:`#3FA8C8`,shopfronts:[`#C04A3A`,`#3A6B5A`,`#7A5AC0`],glass:`#5A6B7A`,winColors:[`#ffdca0`,`#ffcaa0`],hMax:1.5,sigma:.9,roofRate:.15,pSplit:.75,nightLit:.45,roofTint:`#6A7886`,coast:{base:1.05,out:.55,in:.3,jag:.5},landmarks:[`eiffel`,`arcDeTriomphe`,`sacreCoeur`]},{key:`neoTokyo`,name:`Neo-Tokyo`,towers:[`#2A3038`,`#3A4250`,`#252B36`,`#4A4456`],ground:`#3A4A42`,street:`#5A6068`,sidewalk:`#7A8088`,park:`#2E5E46`,water:`#0E6878`,shopfronts:[`#E8483A`,`#5AE8E0`,`#E85AA0`],glass:`#5AE8E0`,winColors:[`#5AE8E0`,`#E85AA0`,`#E8E06A`],hMax:5.2,sigma:.42,roofRate:.6,pSplit:.6,nightLit:.7,roofTint:null,coast:{base:.7,out:1.05,in:.62,jag:1.7},landmarks:[`tokyoTower`,`pagoda`,`neonBillboard`]}];Ze.map(e=>e.key);var Qe=.3,$e=1.9,et=.55,tt=2.45,X=.12,nt=.6,rt=6,it={BASE:.7,OUT:.95,IN:.55,JAG:1,SAMPLES_PER_EDGE:28,HARBOR_DEPTH:.55,HARBOR_WIDTH:.26},at={PLINTH_TOP:Qe,BLOCK:$e,STREET:et,PITCH:tt,SIDEWALK:X,SHORE:nt,N:rt,COAST:it};function ot(e,t,n){let r=n?.base??it.BASE,i=n?.out??it.OUT,a=n?.in??it.IN,o=n?.jag??it.JAG,s=t+r,c=Xe((e^789079)>>>0),l=[2,3,5,8,11,13].map(e=>({k:e,amp:1/e*o**((e-2)/6),phase:c.range(0,Math.PI*2)})),u=l.reduce((e,t)=>e+t.amp,0),d=e=>{let t=0;for(let n of l)t+=n.amp*Math.sin(n.k*e*Math.PI*2+n.phase);return Math.max(-1,Math.min(1,t/(u*.6)))},f=[{fix:+s,nx:1,nz:0,sign:1},{fix:+s,nx:0,nz:1,sign:-1},{fix:-s,nx:-1,nz:0,sign:-1},{fix:-s,nx:0,nz:-1,sign:1}],p=t+.22,m=it.SAMPLES_PER_EDGE,h=4*m,g=[],_=0;for(let e=0;e<4;e++){let t=f[e];for(let n=0;n<m;n++,_++){let o=n/m,c=_/h,l=(-s+2*s*o)*t.sign,u=d(c),f=u>=0?u*i:u*a;if(e===0){let e=Math.abs(o-.5);if(e<it.HARBOR_WIDTH){let t=.5+.5*Math.cos(e/it.HARBOR_WIDTH*Math.PI);f-=(r+it.HARBOR_DEPTH)*t}}let v,y;t.nx===0?(y=t.fix+t.nz*f,v=l,y=t.nz>0?Math.max(y,p):Math.min(y,-p)):(v=t.fix+t.nx*f,y=l,v=t.nx>0?Math.max(v,p):Math.min(v,-p)),g.push(new H(v,y))}}return{points:g,B:s,maxR:s+i,harborX:p}}function st(e){(Array.isArray(e)?e:[e]).forEach(e=>e&&e.dispose&&e.dispose())}function ct({seed:e=1,profileIndex:t=0,landmarkFactory:r=null,windowGlow:i}){let o=new W,s=new W,c=new W;s.raycast=()=>{},c.raycast=()=>{},o.add(s,c);let l=new U(16773594,3);l.position.set(.45,.6,-.65).multiplyScalar(10);let u=new a(7313331,2762272,1);o.add(l,u);let d=0,f=[],p={seed:e,profileIndex:t,profile:Ze[t],extent:0,meshCount:0};function m(e,t,r,i){let a=new v(new O(e,.04,t),Y(new n({color:i,roughness:.95,flatShading:!0}),{color:i}));return a.position.y=r,a.userData.ground=!0,a}function h(e,t){for(let e of s.children)e.geometry&&e.geometry.dispose(),st(e.material);s.clear();for(let e of c.children)e.traverse(e=>{e.isMesh&&st(e.material)});c.clear(),f.length=0,d=0;let i=Xe(e),a=Ze[t],o=(rt-1)/2*tt,l=7.075;p={seed:e,profileIndex:t,profile:a,extent:l+(a.coast?.base??it.BASE),meshCount:0};let u=ot(e,l,a.coast);p.coast=u;let h=new pe;u.points.forEach((e,t)=>t?h.lineTo(e.x,e.y):h.moveTo(e.x,e.y)),h.closePath();let S=new v(new ee(h,{depth:2,bevelEnabled:!1,steps:1}),Y(new n({color:a.ground,roughness:.9,flatShading:!0,side:2}),{color:a.ground}));S.rotation.x=-Math.PI/2,S.position.y=Qe-2,S.userData.ground=!0,s.add(S);let C=2*7.195;s.add(m(C,C,.32,a.street)),b(u.harborX,a);let w=[];for(let e=0;e<rt;e++)for(let t=0;t<rt;t++)w.push([e,t]);let T=new Set,E=Math.max(1,Math.round(w.length*.08));for(;T.size<E;)T.add(i.int(0,w.length-1));let D=i.range(-2.45*.6,tt*.6),O=i.range(-2.45*.6,tt*.6),k=Math.hypot(o,o),A=[];if(w.forEach(([e,t],n)=>{let r=(e-(rt-1)/2)*tt,o=(t-(rt-1)/2)*tt;if(s.add(m($e,$e,.32999999999999996,a.sidewalk).translateX(r).translateZ(o)),T.has(n)){s.add(m($e-X*2,$e-X*2,.35,a.park).translateX(r).translateZ(o));let e=i.int(3,5);for(let t=0;t<e;t++)x(r+i.range(-.6,.6),o+i.range(-.6,.6),a,i);return}let c=$e-X*2,l=i.chance(a.pSplit)?2:1,u=i.chance(a.pSplit)?2:1,d=c/l,f=c/u;for(let e=0;e<l;e++)for(let t=0;t<u;t++){let n=r-c/2+d*(e+.5),s=o-c/2+f*(t+.5),l=Math.max(.6,d-.1),u=Math.max(.6,f-.1),p=Math.hypot(n-D,s-O)/k,m=Math.exp(-(p*p)/(2*a.sigma*a.sigma)),h=Math.max(.5,.5+(a.hMax-.5)*m*i.range(.75,1.25));h>a.hMax*.5&&Math.min(l,u)>=.7&&A.push({lx:n,lz:s,fw:l,fd:u,h,r:p}),g(n,s,l,u,h,a,i)}}),r&&r.ready){A.sort((e,t)=>e.r-t.r);let e=[],t=a.landmarks;for(let n=0;n<t.length&&A.length;n++){let i=null;for(let t of A)if(e.every(e=>Math.hypot(e.lx-t.lx,e.lz-t.lz)>tt*.9)){i=t;break}i||=A[0],e.push(i),_(i.lx,i.lz);let o=a.hMax*r.heightFactor(t[n]),s=r.make(t[n],{x:i.lx,z:i.lz,w:i.fw,d:i.fd,h:o,plinthTop:Qe});if(s){c.add(s);let e=new ne().setFromObject(s);y(e.min.x-.15,e.max.x+.15,e.min.z-.15,e.max.z+.15)}}}s.traverse(e=>{e.isMesh&&(e.userData.ground?(e.castShadow=!1,e.receiveShadow=!0):e.material&&e.material.isMeshBasicMaterial?(e.castShadow=!1,e.receiveShadow=!1):(e.castShadow=!0,e.receiveShadow=!0))}),c.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),p.meshCount=s.children.length+c.children.length;let j=0;for(let e of s.children){let t=e.position;j=(Math.imul(j,16777619)^(Math.round(t.x*100)*2654435761^Math.round(t.y*100)*40503^Math.round(t.z*100)*2246822519))>>>0}for(let e of p.coast.points)j=(Math.imul(j,16777619)^(Math.round(e.x*100)*2654435761^Math.round(e.y*100)*40503))>>>0;p.sig=j,window.__city={seed:e,profile:a.key,meshes:p.meshCount,sig:j}}function g(e,t,r,a,o,c,l){let u=Je(new n({flatShading:!0,roughness:.7,metalness:.05}),{color:l.pick(c.towers),id:++d,windowGlow:i,winColors:c.winColors,litFrac:c.nightLit}),p=new v(new O(r,o,a),u);if(p.position.set(e,Qe+o/2,t),p.userData.lot=[e,t],s.add(p),c.roofTint){let i=Y(new n({color:c.roofTint,roughness:.85,flatShading:!0}),{color:c.roofTint}),l=new v(new O(r*1.02,.08,a*1.02),i);l.position.set(e,Qe+o+.04,t),l.userData.lot=[e,t],s.add(l)}if(o<1.4){let i=l.pick(c.shopfronts),o=new v(new O(r*1.04,.18,a*1.04),Y(new n({color:i,roughness:.8,flatShading:!0}),{color:i}));o.position.set(e,.39,t),o.userData.lot=[e,t],s.add(o)}let m=Qe+o,h=r,g=a;if(o>c.hMax*.5&&l.chance(.55)){let u=r*l.range(.5,.72),f=a*l.range(.5,.72),p=o*l.range(.18,.4),_=new v(new O(u,p,f),Je(new n({flatShading:!0,roughness:.7,metalness:.05}),{color:l.pick(c.towers),id:++d,windowGlow:i,winColors:c.winColors,litFrac:c.nightLit}));_.position.set(e,Qe+o+p/2,t),_.userData.lot=[e,t],s.add(_),m=Qe+o+p,h=u,g=f}if(o>c.hMax*.45&&l.chance(c.roofRate)){let r=l.chance(.5)?new v(new O(h*.4,.18,g*.4),Y(new n({color:`#9a9a9a`,flatShading:!0}),{color:`#9a9a9a`})):new v(new L(h*.18,h*.18,.22,10),Y(new n({color:`#b9bec4`,flatShading:!0}),{color:`#b9bec4`}));if(r.position.set(e+l.range(-.1,.1),m+.11,t+l.range(-.1,.1)),r.userData.lot=[e,t],s.add(r),l.chance(.25)){let n=new v(new re(.05,6,5),new G({color:`#ff3b30`,transparent:!0,opacity:1}));n.position.set(e,m+.15,t),n.userData.lot=[e,t],n.raycast=()=>{},s.add(n),f.push({mesh:n,phase:l.range(0,6.28)})}}if(o>c.hMax*.7&&l.chance(.35)){let r=o*l.range(.18,.34),i=new v(new L(.018,.05,r,6),Y(new n({color:`#c8ccd2`,flatShading:!0}),{color:`#c8ccd2`}));i.position.set(e,m+r/2,t),i.userData.lot=[e,t],i.raycast=()=>{},s.add(i)}}function _(e,t){for(let n=s.children.length-1;n>=0;n--){let r=s.children[n];r.userData.lot&&Math.abs(r.userData.lot[0]-e)<1e-4&&Math.abs(r.userData.lot[1]-t)<1e-4&&(r.geometry&&r.geometry.dispose(),st(r.material),s.remove(r))}for(let e=f.length-1;e>=0;e--)f[e].mesh.parent||f.splice(e,1)}function y(e,t,n,r){for(let i=s.children.length-1;i>=0;i--){let a=s.children[i];a.userData.lot&&a.position.x>=e&&a.position.x<=t&&a.position.z>=n&&a.position.z<=r&&(a.geometry&&a.geometry.dispose(),st(a.material),s.remove(a))}}function b(e,t){let r=Y(new n({color:`#7a5634`,roughness:.95,flatShading:!0}),{color:`#7a5634`}),i=(e,t,n,i)=>{let a=new v(new O(e,.06,t),r);a.position.set(n,Qe-.16,i),s.add(a)};i(.24,2,e+.02,0),i(1.3,.22,e+.7,-.72),i(1.3,.22,e+.7,.72)}function x(e,t,r,i){let a=new B(r.park),o=(r,o)=>{let c=a.clone().offsetHSL(0,0,i.range(-.06,.06)).getStyle(),l=new v(new re(r,7,6),Y(new n({color:c,flatShading:!0}),{color:c,season:!0}));l.scale.y=.7,l.position.set(e,Qe+o,t),l.userData.lot=null,s.add(l)},c=new v(new O(.05,.18,.05),Y(new n({color:`#6b4a2a`,flatShading:!0}),{color:`#6b4a2a`}));c.position.set(e,.39,t),s.add(c),o(.22,.28),o(.16,.46)}function S(e){for(let t of f)t.mesh.material.opacity=.35+.65*(.5+.5*Math.sin(e*3+t.phase))}return h(e,t),{group:o,key:l,fill:u,update:S,generate:h,get state(){return p},get extent(){return p.extent},get waterColor(){return p.profile.water},profiles:Ze}}var lt=Math.PI*2,ut=.7,dt=90,ft=[{name:`night`,sun:`#4a6f9e`,intensity:.35,hemiSky:`#26344f`,hemiGround:`#0c1018`,horizon:`#1e2942`,sky:`#36486e`,exposure:.95,outline:`#101a30`,window:1,toonGain:2.6},{name:`dawn`,sun:`#ff9e54`,intensity:2.4,hemiSky:`#8a7686`,hemiGround:`#2a1f1a`,horizon:`#b8512c`,sky:`#ffb070`,exposure:1.05,outline:`#241826`,window:.3,toonGain:2},{name:`noon`,sun:`#fff4e0`,intensity:4.6,hemiSky:`#9cb8cc`,hemiGround:`#33302a`,horizon:`#5e7689`,sky:`#aacadd`,exposure:1.18,outline:`#0b0a08`,window:0,toonGain:1.7},{name:`dusk`,sun:`#ff6b35`,intensity:2,hemiSky:`#7a566a`,hemiGround:`#281a18`,horizon:`#b0432a`,sky:`#ff8a5a`,exposure:1.05,outline:`#1f1420`,window:.4,toonGain:2}],pt=e=>e-Math.floor(e),mt=(e,t,n)=>e+(t-e)*n,ht=(e,t,n)=>e+(t-e)*(1-Math.exp(-6*n));function gt({t:e=.5}={}){let t=e,n=e,r=!1,i=!1,a=ft.map(e=>({name:e.name,sun:new B(e.sun),hemiSky:new B(e.hemiSky),hemiGround:new B(e.hemiGround),horizon:new B(e.horizon),sky:new B(e.sky),outline:new B(e.outline),intensity:e.intensity,exposure:e.exposure,window:e.window,toonGain:e.toonGain})),o=new N(0,1,0),s=new B(`#fff4e0`),c=new B(`#6f97b3`),l=new B(`#2a2620`),u=new B(`#3a4a57`),d=new B(`#7da3bd`),f=new B(`#0b0a08`),p=new B(`#000000`),m=3,h=1,g=0,_=1.7,v=new N;function y(e){let t=pt(e)*4,n=Math.floor(t)%4,r=(n+1)%4,i=t-Math.floor(t),y=a[n],b=a[r];s.lerpColors(y.sun,b.sun,i),c.lerpColors(y.hemiSky,b.hemiSky,i),l.lerpColors(y.hemiGround,b.hemiGround,i),u.lerpColors(y.horizon,b.horizon,i),d.lerpColors(y.sky,b.sky,i),f.lerpColors(y.outline,b.outline,i),m=mt(y.intensity,b.intensity,i),h=mt(y.exposure,b.exposure,i),g=mt(y.window,b.window,i),_=mt(y.toonGain,b.toonGain,i),p.setRGB(.045*g,.075*g,.14*g);let x=pt(e)*lt-Math.PI/2,S=Math.cos(x),C=Math.sin(x);v.set(S,C*Math.cos(ut),C*Math.sin(ut)),v.y>=0?o.copy(v):o.copy(v).negate()}return y(t),{sunDir:o,sunColor:s,hemiSky:c,hemiGround:l,horizon:u,sky:d,outline:f,toonFloor:p,sunArc:v,get sunIntensity(){return m},get exposure(){return h},get windowGlow(){return g},get toonGain(){return _},get t(){return pt(t)},get auto(){return r},get clock(){let e=Math.round(pt(t)*24*60)%1440;return`${String(Math.floor(e/60)).padStart(2,`0`)}:${String(e%60).padStart(2,`0`)}`},cyclePreset(){n=(Math.floor(t*4+1e-4)+1)/4},nudge(e){n+=e/24},goTo(e){n=e},toggleAuto(){r=!r},setReducedMotion(e){i=e},update(e){r&&!i&&(n+=e/dt),t=ht(t,n,e),y(t)}}}function _t(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.35,`rgba(255,255,255,0.55)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new A(e);return r.colorSpace=P,r}function vt(e,t){let n=[];for(let r=0;r<16;r++){let i=r/16*Math.PI*2;n.push(new N(Math.cos(i)*e,t,Math.sin(i)*e))}return new _e(n,!0,`catmullrom`,.5)}function yt(e){let t=(t,n)=>Math.exp(-((e-t)*(e-t))/(2*n*n)),n=Math.max(t(.33,.05),t(.75,.06)),r=o.smoothstep(e,.24,.3)*(1-o.smoothstep(e,.8,.88));return o.clamp(.15+.55*r+.45*n,.12,1)}function bt(){let{PITCH:e,N:t,PLINTH_TOP:n}=at,r=t+1,i=n+.04,a=n=>(n-t/2)*e,o=t/2,s=[],c=(e,t)=>t*r+e;for(let e=0;e<r;e++)for(let t=0;t<r;t++)s.push({x:a(t),z:a(e),i:t,j:e,edges:[]});let l=[],u=(t,n)=>{let r=(s[t].i===o||s[t].j===o)&&(s[n].i===o||s[n].j===o),i=l.length;l.push({a:t,b:n,len:e,main:r}),s[t].edges.push(i),s[n].edges.push(i)};for(let e=0;e<r;e++)for(let t=0;t<r;t++)t<r-1&&u(c(t,e),c(t+1,e)),e<r-1&&u(c(t,e),c(t,e+1));return{nodes:s,edges:l,y:i,mid:o}}function xt({plinthTop:e=.3,extent:t=4,profile:r=null}={}){let i=new W,a=bt(),{nodes:s,edges:l}=a,d=a.y,f=.34,p=0;{let e=at.PITCH-f*2;p=Math.max(1,Math.floor((e+.26)/.56))}let m=new G({color:`#e8c84a`,fog:!0}),h=new ie(new O(.05,.012,.3),m,l.length*p);h.frustumCulled=!1,h.raycast=()=>{},h.receiveShadow=!1,h.castShadow=!1,i.add(h);{let e=new c,t=0;for(let n of l){let r=s[n.a],i=s[n.b],a=i.x-r.x,o=i.z-r.z,c=Math.hypot(a,o),l=a/c,u=o/c,m=Math.atan2(l,u),g=c-f*2;for(let n=0;n<p;n++){let i=f+(p===1?g/2:g*n/(p-1));e.position.set(r.x+l*i,d,r.z+u*i),e.rotation.set(0,m,0),e.updateMatrix(),h.setMatrixAt(t++,e.matrix)}}h.instanceMatrix.needsUpdate=!0}let g=new ie(new O(.34,.26,.74),Y(new n({flatShading:!0,roughness:.5,metalness:.3})),12);g.castShadow=!0,g.receiveShadow=!1,g.frustumCulled=!1,g.raycast=()=>{};let _=new me,v=new Float32Array(72),y=new Float32Array(72),b=new B(`#fff0c0`),x=new B(`#ff3528`);for(let e=0;e<12;e++)b.toArray(y,e*3),x.toArray(y,(12+e)*3),v[e*3+1]=-50,v[(12+e)*3+1]=-50;_.setAttribute(`position`,new z(v,3)),_.setAttribute(`color`,new z(y,3));let S=new T({size:.72,sizeAttenuation:!0,map:_t(),vertexColors:!0,transparent:!0,opacity:0,blending:2,depthWrite:!1}),C=new u(_,S);C.frustumCulled=!1,C.raycast=()=>{},i.add(g,C);let w=[`#f4c430`,`#c0392b`,`#d8dde2`,`#9aa7b4`,`#6b7785`,`#5a7d9a`],E=Ye(2403557),D=l.map((e,t)=>t).filter(e=>l[e].main),k=[];for(let e=0;e<12;e++){let t=e<4&&D.length?D[E()*D.length|0]:E()*l.length|0,n=e===1;k.push({edge:t,fwd:E()<.5,s:E()*l[t].len,speed:n?.5:.78+e%3*.1,lenZ:n?1.45:1,color:w[n?1:e===0?0:2+e%4],rng:Ye(12648430+e*2654435761),isBus:n,pos:new N,dirX:0,dirZ:1,active:!1})}let ee=new B;k.forEach((e,t)=>g.setColorAt(t,ee.set(e.color)));function A(e,t,n){let r=s[e],i=r.edges.filter(e=>e!==t);if(i.length===0)return t;let a=l[t],o=a.a===e?a.b:a.a,c=r.x-s[o].x,u=r.z-s[o].z,d=Math.hypot(c,u)||1,f=i[0],p=-2;for(let t of i){let n=l[t],i=n.a===e?n.b:n.a,a=s[i].x-r.x,o=s[i].z-r.z,m=Math.hypot(a,o)||1,h=c/d*(a/m)+u/d*(o/m);h>p&&(p=h,f=t)}return n()<.65?f:i[n()*i.length|0]}let j=A,M=new c,P=(e,t)=>{M.position.set(0,-50,0),M.scale.setScalar(0),M.updateMatrix(),e.setMatrixAt(t,M.matrix)},te=.085,F=at.PLINTH_TOP+.02+.13,I=new ie(new ae(.04,.1,3,6),Y(new n({flatShading:!0,roughness:.8})),14);I.castShadow=!0,I.receiveShadow=!1,I.frustumCulled=!1,I.raycast=()=>{};let L=vt(t-.72,e),ne=[];for(let e=0;e<14;e++)ne.push({phase:e/14,speed:.12+e%4*.02,dir:e%2?1:-1,pos:new N,active:!1});let re=new N,R=new N,oe=new B;ne.forEach((e,t)=>I.setColorAt(t,oe.set([`#caa`,`#9ab`,`#bba`,`#ab9`][t%4]))),i.add(I);let se={manhattan:`#e8c84a`,paris:`#dcd2bc`,neoTokyo:`#5ae8e0`};function ce(e){e&&m.color.set(se[e.key]||`#e8c84a`)}ce(r);function le(t,n,r){let i=r?r.t:.5,a=r?r.windowGlow:0,c=Math.max(2,Math.round(yt(i)*12)),u=a>.05;for(let e=0;e<12;e++){if(e>=c){P(g,e),k[e].active=!1,v[e*3+1]=-50,v[(12+e)*3+1]=-50;continue}let n=k[e];n.s+=t*n.speed;let r=0;for(;n.s>=l[n.edge].len&&r++<4;){n.s-=l[n.edge].len;let e=n.fwd?l[n.edge].b:l[n.edge].a,t=j(e,n.edge,n.rng);n.edge=t,n.fwd=l[t].a===e}let i=l[n.edge],a=n.fwd?s[i.a]:s[i.b],o=n.fwd?s[i.b]:s[i.a],d=o.x-a.x,f=o.z-a.z,p=Math.hypot(d,f)||1,m=d/p,h=f/p,_=-h,y=m,b=a.x+m*n.s+_*te,x=a.z+h*n.s+y*te,S=Math.atan2(m,h);M.position.set(b,F,x),M.rotation.set(0,S,0),M.scale.set(1,1,n.lenZ),M.updateMatrix(),g.setMatrixAt(e,M.matrix),n.pos.set(b,F,x),n.dirX=m,n.dirZ=h,n.active=!0;let C=.74*n.lenZ*.5,w=F+.06,T=e*3,E=(12+e)*3;u?(v[T]=b+m*(C+.04),v[T+1]=w,v[T+2]=x+h*(C+.04),v[E]=b-m*(C+.02),v[E+1]=w,v[E+2]=x-h*(C+.02)):(v[T+1]=-50,v[E+1]=-50)}g.instanceMatrix.needsUpdate=!0,_.attributes.position.needsUpdate=!0,S.opacity=o.clamp(a*1.8,0,1);let d=Math.max(2,Math.round(yt(i)*14));for(let t=0;t<14;t++){if(t>=d){P(I,t),ne[t].active=!1;continue}let r=ne[t],i=(r.phase+r.dir*r.speed*n*.02+1e3)%1;L.getPointAt(i,re),L.getTangentAt(i,R);let a=Math.sin(n*6+r.phase*30)*.015;M.position.set(re.x,e+.09+a,re.z),M.rotation.set(0,Math.atan2(R.x*r.dir,R.z*r.dir),Math.sin(n*6+r.phase*30)*.06),M.scale.setScalar(1),M.updateMatrix(),I.setMatrixAt(t,M.matrix),r.pos.set(re.x,e+.09,re.z),r.active=!0}I.instanceMatrix.needsUpdate=!0}let ue=[...k.map((e,t)=>({kind:`car`,label:e.isBus?`bus`:`car ${t+1}`,getWorldPos:t=>t.copy(e.pos),active:()=>e.active,info:()=>`${e.isBus?`bus`:`car`} · ${l[e.edge].main?`main avenue`:`side street`} → heading ${St(e.dirX,e.dirZ)}`})),...ne.map((e,t)=>({kind:`person`,label:`person ${t+1}`,getWorldPos:t=>t.copy(e.pos),active:()=>e.active,info:()=>`person · strolling the waterfront promenade`}))];function de(){return ue}return{group:i,update:le,setProfile:ce,getFollowables:de,graph:a,setRouter(e){j=e||A}}}function St(e,t){return[`N`,`NE`,`E`,`SE`,`S`,`SW`,`W`,`NW`][(Math.round(Math.atan2(e,t)/(Math.PI/4))%8+8)%8]}function Ct({frames:e,fps:t=8,cols:n,rows:r=1}={}){let i=n||e||4,a=r||1,o=e||i*a,s=typeof window<`u`&&window.matchMedia?window.matchMedia(`(prefers-reduced-motion: reduce)`):null;function c(e,t){let n=t%i,r=Math.floor(t/i);e.offset.x=n/i,e.offset.y=1-(r+1)/a}function l(e){let t=e.clone();return t.needsUpdate=!0,t.repeat.set(1/i,1/a),c(t,0),t}function u(e,n,r=0){if(s&&s.matches)return c(e,0),0;let i=(Math.floor(n*t+r)%o+o)%o;return c(e,i),i}function d(e,t){let n=(Math.round(t)%o+o)%o;return c(e,n),n}return{frames:o,fps:t,cols:i,rows:a,makeInstanceTexture:l,step:u,setFrame:d}}function wt(e){if(typeof document>`u`||!e||!e.image)return e;let t=e.image,n=t.width||t.naturalWidth,r=t.height||t.naturalHeight,i=document.createElement(`canvas`);i.width=n,i.height=r;let a=i.getContext(`2d`,{willReadFrequently:!0});a.drawImage(t,0,0,n,r);let o=a.getImageData(0,0,n,r),s=o.data;for(let e=0;e<s.length;e+=4){let t=s[e]*.299+s[e+1]*.587+s[e+2]*.114|0;s[e]=s[e+1]=s[e+2]=t}a.putImageData(o,0,0);let c=new A(i);return c.colorSpace=e.colorSpace||`srgb`,c}function Tt({url:e,fallback:t,luminance:n=!1,onReady:r}={}){let i=n?wt(t):t;return e&&typeof window<`u`&&new j().load(e,e=>{e.colorSpace=P,r&&r(n?wt(e):e)},void 0,()=>{}),i}var Et=``+new URL(`gull_diffusion_sheet-BMlUTLhu.png`,import.meta.url).href;function Dt(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.4,`rgba(255,255,255,0.5)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new A(e);return r.colorSpace=P,r}function Ot(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64*.62,0,64/2,64*.62,64*.5);n.addColorStop(0,`rgba(240,250,255,0.95)`),n.addColorStop(1,`rgba(240,250,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new A(e);return r.colorSpace=P,r}function kt(){let e=document.createElement(`canvas`);e.width=256,e.height=64;let t=e.getContext(`2d`);t.strokeStyle=`#ffffff`,t.lineWidth=6,t.lineCap=`round`,t.lineJoin=`round`;let n=[14,24,36,24];for(let e=0;e<4;e++){let r=e*64,i=n[e];t.beginPath(),t.moveTo(r+8,40),t.quadraticCurveTo(r+24,i,r+32,36),t.quadraticCurveTo(r+40,i,r+56,40),t.stroke()}let r=new A(e);return r.colorSpace=P,r}function At(e,t,n=18){let r=[];for(let i=0;i<n;i++){let a=i/n*Math.PI*2;r.push(new N(Math.cos(a)*e,t,Math.sin(a)*e))}return new _e(r,!0,`catmullrom`,.5)}function jt(e,t,n){let r=e-t,i=[],a=(e,t)=>i.push(new N(e,n,t)),o=(e,n,r,i,o=4)=>{for(let s=1;s<=o;s++){let c=r+(i-r)*(s/o);a(e+Math.cos(c)*t,n+Math.sin(c)*t)}};for(let t=0;t<4;t++)a(e,-r+2*r*t/4);o(r,r,0,Math.PI/2);for(let t=0;t<4;t++)a(r-2*r*t/4,e);o(-r,r,Math.PI/2,Math.PI);for(let t=0;t<4;t++)a(-e,r-2*r*t/4);o(-r,-r,Math.PI,1.5*Math.PI);for(let t=0;t<4;t++)a(-r+2*r*t/4,-e);return o(r,-r,1.5*Math.PI,2*Math.PI),new _e(i,!0,`catmullrom`,.5)}function Mt({extent:e=8,waterSize:t=28,plinthTop:r=.3}={}){let i=new W;i.raycast=()=>{};let a=.06,s=(e,n,r)=>r.set(e/t+.5,-n/t+.5,0),c=[jt(9.5,3,a),At(12.7,a),new _e([new N(8.4,a,0),new N(11,a,-3.6),new N(13,a,0),new N(11,a,3.6)],!0,`catmullrom`,.5)],l=c.map(e=>e.getLength());function d({scale:e=1,hull:t=`#6b7785`,cabin:r=`#e7ecf2`}){let i=new W,a=new v(new O(.46*e,.2*e,1.1*e),Y(new n({color:t,roughness:.6,metalness:.2,flatShading:!0}),{color:t}));a.position.y=.02;let o=new v(new O(.3*e,.22*e,.42*e),Y(new n({color:r,roughness:.7,flatShading:!0}),{color:r}));return o.position.set(0,.18*e,.08*e),i.add(a,o),i.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!1),e.raycast=()=>{}}),i.userData.halfLen=.55*e,i}let f=[{laneIndex:0,dir:1,speed:.5,wake:.024,scale:1,hull:`#5a6675`,cabin:`#e7ecf2`},{laneIndex:1,dir:-1,speed:.42,wake:.022,scale:1,hull:`#7a5b46`,cabin:`#d9c3a6`},{laneIndex:0,dir:1,speed:.56,wake:.024,scale:.9,hull:`#456079`,cabin:`#cfe0ee`},{laneIndex:2,dir:1,speed:.34,wake:.03,scale:1.35,hull:`#39505f`,cabin:`#e2b85a`}];f.forEach((e,t)=>{e.mesh=d(e),e.u=t*.27%1,e.phase=t*1.7,e.isFerry=e.laneIndex===2,i.add(e.mesh)});let p=f.length,m=p*2,h=new me,g=new Float32Array(m*3).fill(-50),_=new Float32Array(m*3),y=new B(`#fff0c0`),b=new B(`#ff3528`);for(let e=0;e<p;e++)y.toArray(_,e*3),b.toArray(_,(p+e)*3);h.setAttribute(`position`,new z(g,3)),h.setAttribute(`color`,new z(_,3));let x=new u(h,new T({size:.6,sizeAttenuation:!0,map:Dt(),vertexColors:!0,transparent:!0,opacity:0,blending:2,depthWrite:!1}));x.frustumCulled=!1,x.raycast=()=>{},i.add(x);function S(e,t){let r=new v(new re(e,9,7),Y(new n({color:t,roughness:.5,flatShading:!0}),{color:t}));return r.scale.set(.55,.5,1),r.castShadow=!1,r.receiveShadow=!1,r.raycast=()=>{},r.position.y=-5,r}let C=[{x:-9.5,z:6,size:.18,color:`#5b6f86`,period:11,arcH:.55,span:1.1,whale:!1},{x:7.5,z:-9.5,size:.16,color:`#4a6076`,period:14,arcH:.5,span:1,whale:!1},{x:-7,z:-8.5,size:.2,color:`#607089`,period:9,arcH:.6,span:1.2,whale:!1},{x:10.5,z:7,size:.62,color:`#3a4350`,period:38,arcH:.9,span:2.6,whale:!0}];C.forEach((e,t)=>{e.mesh=S(e.size,e.color),e.heading=Math.atan2(-e.x,-e.z),e.t=t/C.length*e.period,e.splashed=!1,i.add(e.mesh),e.whale&&(e.spout=new ue(new V({map:Ot(),transparent:!0,opacity:0,depthWrite:!1,fog:!0})),e.spout.scale.set(.6,1.1,1),e.spout.position.set(e.x,-5,e.z),i.add(e.spout))});let w=Ct({frames:4,fps:7}),E=[`#ffffff`,`#cfd4da`,`#c8a06a`],D=[],k=Tt({url:Et,fallback:kt(),luminance:!0,onReady:e=>{k=e;for(let t of D){let n=t.sp.material.map;t.sp.material.map=w.makeInstanceTexture(e),t.sp.material.needsUpdate=!0,n&&n.dispose()}typeof window<`u`&&(window.__gullSheet=`diffusion`)}});for(let e=0;e<4;e++){let t=new ue(new V({map:w.makeInstanceTexture(k),color:new B(E[e%E.length]),transparent:!0,opacity:0,depthWrite:!1,fog:!0}));t.scale.setScalar(.5),D.push({sp:t,r:8.6+e*.5,y:1.1+e%2*.5,speed:(.18+e*.03)*(e%2?-1:1),phase:e*1.9}),i.add(t)}typeof window<`u`&&(window.__gullSheet=window.__gullSheet||`procedural`,window.__gullAnim={frames:w.frames,variants:E.length,fps:w.fps});let ee=C.length,A=Array.from({length:p+ee},()=>new N),j=e=>e.laneIndex,M=new N,P=new N,te=new N;function F(e,t,n){let r=n?n.windowGlow:0,i=1-r;for(let n=0;n<p;n++){let i=f[n],o=c[i.laneIndex],u=l[i.laneIndex],d=i.isFerry?.45+.55*Math.min(1,Math.abs((i.u+.5)%1-.5)*3):1,m=i.u;i.u=(i.u+i.dir*e*i.speed*d/u+1)%1,(i.dir>0?i.u<m:i.u>m)&&(i.laneIndex=j(i)),o.getPointAt(i.u,M),o.getTangentAt(i.u,P);let h=P.x*i.dir,_=P.z*i.dir,v=Math.atan2(h,_),y=Math.sin(t*1.1+i.phase)*.025;i.mesh.position.set(M.x,a+y,M.z),i.mesh.rotation.set(Math.sin(t*.9+i.phase)*.04,v,0);let b=i.mesh.userData.halfLen;s(M.x-h*b,M.z-_*b,te),A[n].set(te.x,te.y,i.wake);let x=n*3,S=(p+n)*3;if(r>.05){let e=.18;g[x]=M.x+h*(b+.05),g[x+1]=e,g[x+2]=M.z+_*(b+.05),g[S]=M.x-h*(b+.02),g[S+1]=e,g[S+2]=M.z-_*(b+.02)}else g[x+1]=-50,g[S+1]=-50}I(),x.material.opacity=o.clamp(r*1.8,0,1);for(let t=0;t<ee;t++){let n=C[t];n.t+=e;let r=p+t,i=n.whale?3.2:1.3;if(n.t>=n.period){let e=(n.t-n.period)/i;if(e>=1){n.t=0,n.splashed=!1,n.mesh.position.y=-5,n.spout&&(n.spout.material.opacity=0),A[r].set(0,0,0);continue}let t=Math.sin(Math.PI*e),c=(e-.5)*n.span,l=n.x+Math.sin(n.heading)*c,u=n.z+Math.cos(n.heading)*c;n.mesh.position.set(l,a-.1+t*n.arcH,u),n.mesh.rotation.set(Math.cos(Math.PI*e)*.9,n.heading,0);let d=e<.16||e>.84;if(s(l,u,te),A[r].set(te.x,te.y,d?n.whale?.07:.05:0),n.spout){let t=o.clamp((e-.15)*3,0,1)*(1-e);n.spout.position.set(l,.56+t*.6,u),n.spout.material.opacity=t*.9}}else n.mesh.position.y=-5,A[r].set(0,0,0),n.spout&&(n.spout.material.opacity=0)}for(let e=0;e<4;e++){let n=D[e],r=n.phase+t*n.speed*.25;n.sp.position.set(Math.cos(r)*n.r,n.y+Math.sin(t*1.4+n.phase)*.12,Math.sin(r)*n.r),n.sp.material.opacity=o.clamp(i*.9-.05,0,.85);let a=w.step(n.sp.material.map,t,n.phase);e===0&&typeof window<`u`&&(window.__gullFrame=a)}if(typeof window<`u`){let e=0;for(let t of C)t.mesh.position.y>a&&e++;window.__waterLife={boats:p,breaching:e,gulls:+D[0].sp.material.opacity.toFixed(2),lights:+x.material.opacity.toFixed(2)}}}function I(){h.attributes.position.needsUpdate=!0}function L(){return A.length}let ne=[...f.map((e,t)=>({kind:`boat`,label:e.isFerry?`ferry`:`boat ${t+1}`,getWorldPos:t=>t.copy(e.mesh.position),info:()=>e.isFerry?`boat · harbor ferry → docks`:`boat · open-water lane ${e.laneIndex}`})),...D.map((e,t)=>({kind:`gull`,label:`gull ${t+1}`,getWorldPos:t=>t.copy(e.sp.position),active:()=>e.sp.material.opacity>.05,info:()=>`gull · circling the coast`})),...C.map((e,t)=>({kind:`fish`,label:e.whale?`whale`:`fish ${t+1}`,getWorldPos:t=>t.copy(e.mesh.position),active:()=>e.mesh.position.y>a-.3,info:()=>e.mesh.position.y>a?e.whale?`whale · breaching!`:`fish · breaching!`:`fish · below the surface`}))];function R(){return ne}return{group:i,update:F,getFollowables:R,wakeDrops:A,get wakeCount(){return L()},lanes:c,setRouter(e){j=e||(e=>e.laneIndex)}}}var Nt=[`empireState`,`chrysler`,`liberty`,`eiffel`,`arcDeTriomphe`,`sacreCoeur`,`tokyoTower`,`pagoda`,`neonBillboard`],Pt={empireState:1.25,chrysler:1.1,liberty:.55,eiffel:3.2,arcDeTriomphe:1.5,sacreCoeur:1.75,tokyoTower:1.35,pagoda:.5,neonBillboard:.9};function Ft(e){let r=()=>new n({flatShading:!0,roughness:.7,metalness:.1}),i=(t,n={})=>n.windows?Je(r(),{color:t,id:e.id(),windowGlow:e.windowGlow,winColors:e.winColors,litFrac:e.litFrac}):Y(r(),{color:t,glow:n.glow??null,glowDay:n.glowDay??0,glowNight:n.glowNight??1,windowGlow:n.glow?e.windowGlow:null});return{box:(e,t,n,r,a={})=>new v(new O(e,t,n),i(r,a)),cyl:(e,t,n,r,a={})=>new v(new L(e,t,n,a.seg||12),i(r,a)),cone:(e,t,n,r={})=>new v(new se(e,t,r.seg||8),i(n,r)),sphere:(e,t,n={})=>new v(new re(e,n.seg||12,n.seg2||8),i(t,n)),lathe:(e,n,r={})=>new v(new t(e.map(e=>new H(e[0],e[1])),r.seg||4),i(n,r))}}var Z=(e,t,n,r)=>(e.position.set(t,n,r),e),It=[`#7FB0E0`,`#E07FB0`,`#7FE0A0`,`#E0C97F`,`#9FE07F`,`#7FE0E0`,`#FF8C42`,`#E0E07F`,`#C97FE0`,`#E07F7F`,`#7F9FE0`,`#E0483A`],Lt={empireState(e,t){let n=`#E8E0CF`;e.add(Z(t.box(.42,.18,.42,n,{windows:!0}),0,.09,0)),e.add(Z(t.box(.34,.16,.34,n,{windows:!0}),0,.26,0)),e.add(Z(t.box(.26,.14,.26,n,{windows:!0}),0,.41,0)),e.add(Z(t.box(.19,.34,.19,n,{windows:!0}),0,.65,0)),e.add(Z(t.box(.13,.06,.13,n,{windows:!0}),0,.85,0));let r=It[new Date().getMonth()];e.add(Z(t.cyl(.03,.045,.12,n,{seg:10,glow:r,glowNight:1.85}),0,.94,0)),e.add(Z(t.cone(.012,.07,n,{seg:8}),0,1.04,0))},chrysler(e,t){let n=`#C9CED4`;e.add(Z(t.box(.22,.55,.22,`#9AA7B4`,{windows:!0}),0,.275,0));let r=.55;for(let i=0;i<5;i++){let a=.14-i*.024,o=.07;e.add(Z(t.cyl(a*.7,a,o,n,{seg:8,glow:`#dfeaff`,glowNight:.5}),0,r+o/2,0)),r+=o}e.add(Z(t.cone(.018,.16,n,{seg:8}),0,r+.08,0))},liberty(e,t){let n=`#B9B4A6`,r=`#4FA890`;e.add(Z(t.box(.42,.16,.42,n),0,.08,0)),e.add(Z(t.box(.3,.2,.3,n),0,.26,0)),e.add(Z(t.cyl(.1,.15,.42,r,{seg:10}),0,.57,0)),e.add(Z(t.box(.11,.1,.11,r),0,.83,0));for(let n=0;n<7;n++){let i=(n/6-.5)*Math.PI*1.1;e.add(Z(t.cone(.012,.1,r,{seg:5}),Math.sin(i)*.1,.92,Math.cos(i)*.06-.02))}let i=Z(t.cyl(.025,.03,.34,r,{seg:8}),.14,.98,0);i.rotation.z=.35,e.add(i),e.add(Z(t.box(.06,.06,.06,r,{glow:`#ffd060`,glowDay:.6,glowNight:1.2}),.2,1.16,0)),e.add(Z(t.cone(.04,.09,`#ffcf66`,{seg:6,glow:`#ffd060`,glowDay:.7,glowNight:1.3}),.2,1.24,0))},eiffel(e,t){let n=`#6E5C4C`,r=[[.2,0],[.13,.16],[.085,.33],[.055,.5],[.035,.66],[.02,.85],[0,.92]];e.add(t.lathe(r,n,{seg:4}));let i=t.lathe(r,n,{seg:4});i.rotation.y=Math.PI/4,e.add(i),e.add(Z(t.box(.26,.025,.26,n),0,.33,0)),e.add(Z(t.box(.14,.02,.14,n),0,.66,0)),e.add(Z(t.cone(.01,.1,n,{seg:6}),0,.97,0))},arcDeTriomphe(e,t){let r=`#D9D0C1`,i=.58,a=.5,o=.34,s=new pe;s.moveTo(-.58/2,0),s.lineTo(i/2,0),s.lineTo(i/2,a),s.lineTo(-.58/2,a),s.lineTo(-.58/2,0);let c=new C,l=.15,u=.22;c.moveTo(-.15,0),c.lineTo(-.15,u),c.absarc(0,u,l,Math.PI,0,!0),c.lineTo(l,0),c.lineTo(-.15,0),s.holes.push(c);let d=new ee(s,{depth:o,bevelEnabled:!1});d.translate(0,0,-.34/2),d.computeVertexNormals(),e.add(new v(d,Y(new n({color:r,flatShading:!0}),{color:r}))),e.add(Z(t.box(i*1.06,.08,o*1.06,r),0,.54,0))},sacreCoeur(e,t){let n=`#F1EEE6`;e.add(Z(t.box(.5,.26,.4,n),0,.13,0));let r=(r,i,a,o)=>{e.add(Z(t.cyl(a*.9,a,i,n,{seg:12}),r,o,0));let s=Z(t.sphere(a,n,{seg:12}),r,o+i/2,0);s.scale.y=1.5,e.add(s)};r(0,.22,.15,.4),r(-.2,.1,.07,.33),r(.2,.1,.07,.33)},tokyoTower(e,t){let n=`#F25822`,r=`#EDEDED`,i=0;for(let a=0;a<9;a++){let o=a/9,s=(a+1)/9,c=.19*(1-o)+.03*o,l=.19*(1-s)+.03*s,u=.085,d=a%2?r:n;e.add(Z(t.cyl(l,c,u,d,{seg:4,glow:n,glowDay:0,glowNight:.7}),0,i+u/2,0)),i+=u}e.add(Z(t.box(.22,.02,.22,n,{glow:n,glowNight:.7}),0,.28,0)),e.add(Z(t.box(.12,.02,.12,r),0,.5,0)),e.add(Z(t.cone(.012,.16,r,{seg:6,glow:`#ff6a2a`,glowNight:.9}),0,i+.08,0))},pagoda(e,t){let n=0;for(let r=0;r<5;r++){let i=.42-r*.06,a=.11;e.add(Z(t.box(i,a,i,`#B23A2C`,{windows:r<4}),0,n+a/2,0)),e.add(Z(t.box(i*1.34,.03,i*1.34,`#7A3B2A`),0,n+a+.015,0)),n+=.16999999999999998}e.add(Z(t.cyl(.012,.012,.1,`#E0C040`,{seg:6}),0,n+.05,0)),e.add(Z(t.sphere(.03,`#E0C040`,{seg:8,glow:`#ffe680`,glowNight:.8}),0,n+.12,0))},neonBillboard(e,t){let n=`#20242C`;e.add(Z(t.box(.3,1,.3,n,{windows:!0}),0,.5,0));let r=[`#5AE8E0`,`#E85AA0`,`#E8E06A`],i=(n,r,i,a,o,s,c)=>{let l=Z(t.box(n,r,.02,i,{glow:i,glowDay:.6,glowNight:1.1}),a,o,s);l.rotation.y=c,e.add(l)};i(.22,.34,r[0],0,.75,.16,0),i(.16,.5,r[1],.16,.5,0,Math.PI/2),i(.2,.22,r[2],0,.34,-.16,0),e.add(Z(t.cone(.01,.14,n,{seg:6,glow:`#E85AA0`,glowDay:.4,glowNight:1}),0,1.08,0))}};function Rt(e,t){let n=new W;return Lt[e](n,Ft(t)),n}var zt=``+new URL(`building-skyscraper-d-CapD2Zqe.glb`,import.meta.url).href,Bt=``+new URL(`building-n-hdv8kKtN.glb`,import.meta.url).href,Vt=``+new URL(`building-g-CsTB1qH9.glb`,import.meta.url).href,Ht=``+new URL(`colormap-CK8fW2HB.png`,import.meta.url).href,Ut={skyscraper:{url:zt,color:`#9cc1dd`,fill:.92},midrise:{url:Bt,color:`#c9a07a`,fill:.96},setback:{url:Vt,color:`#d9c7a0`,fill:.9}};function Wt({windowGlow:e}){let t=new g;t.setURLModifier(e=>e.includes(`colormap.png`)?Ht:e);let n=new he(t),r={},i=!1,a=Promise.all(Object.entries(Ut).map(async([e,t])=>{r[e]=(await n.loadAsync(t.url)).scene})).then(()=>{i=!0,window.__landmarksReady=!0}).catch(e=>console.error(`landmark models failed:`,e)),o=9e3;function s(t,n,i={}){let a,s;if(Nt.includes(t))a=Rt(t,{windowGlow:e,winColors:i.winColors,litFrac:i.litFrac,id:()=>++o}),s=1;else{let e=r[t],n=Ut[t];if(!e||!n)return null;a=e.clone(!0),s=n.fill}a.updateMatrixWorld(!0);let c=new ne().setFromObject(a).getSize(new N);a.scale.setScalar(n.h*s/c.y),a.updateMatrixWorld(!0);let l=new ne().setFromObject(a),u=l.getCenter(new N);return a.position.x+=n.x-u.x,a.position.z+=n.z-u.z,a.position.y+=n.plinthTop-l.min.y,Nt.includes(t)?a.traverse(e=>{e.isMesh&&(e.castShadow=!1,e.raycast=()=>{})}):a.traverse(n=>{if(!n.isMesh)return;n.castShadow=!1,n.raycast=()=>{};let r=n=>Je(n.clone(),{color:Ut[t].color,id:++o,windowGlow:e,winColors:i.winColors,litFrac:i.litFrac});n.material=Array.isArray(n.material)?n.material.map(r):r(n.material)}),a}return{make:s,whenReady:a,heightFactor:e=>Pt[e]??1,get ready(){return i}}}var Gt=[`clear`,`rain`,`snow`,`fog`];function Kt({extent:e=7}={}){let t=new W;t.raycast=()=>{};let n=e+2,r=.25,i=(e,t)=>e+Math.random()*(t-e),a=new ie(new d(.015,.5),new G({color:`#a9bdd6`,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),600);a.frustumCulled=!1,a.raycast=()=>{};let o=new Float32Array(600*3),s=new Float32Array(600);for(let e=0;e<600;e++)o[e*3]=i(-n,n),o[e*3+1]=i(r,11),o[e*3+2]=i(-n,n),s[e]=i(9,14);let l=new ie(new d(.07,.07),new G({color:`#f3f7ff`,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),700);l.frustumCulled=!1,l.raycast=()=>{};let u=new Float32Array(700*3),f=new Float32Array(700),p=new Float32Array(700);for(let e=0;e<700;e++)u[e*3]=i(-n,n),u[e*3+1]=i(r,11),u[e*3+2]=i(-n,n),f[e]=i(0,6.28),p[e]=i(.6,1.2);t.add(a,l);let m=Array.from({length:8},()=>new N),h=0,g=`clear`,_=0,v=0,y=0,b=0,x=0,S=new c,C=(e,t,n,r)=>e+(t-e)*Math.min(1,n*r);function w(e){Gt.includes(e)&&(g=e)}function T(){g=Gt[(Gt.indexOf(g)+1)%Gt.length]}function E(e,t){let c=g===`rain`,d=g===`snow`,w=g===`fog`,T=g!==`clear`;_=C(_,+!!T,e,1.4),v=C(v,+!!T,e,1.2),y=C(y,+!!w,e,.9),x=C(x,T&&!w?1:0,e,1),b=C(b,+!!d,e,d?.22:.5);let E=c?_:0,D=Math.round(600*E);for(let t=0;t<600;t++){if(t>=D){S.position.set(0,-50,0),S.scale.setScalar(0),S.updateMatrix(),a.setMatrixAt(t,S.matrix);continue}o[t*3+1]-=s[t]*e,o[t*3]+=e*1.1,o[t*3+1]<r&&(o[t*3]=i(-n,n),o[t*3+1]=11,o[t*3+2]=i(-n,n)),S.position.set(o[t*3],o[t*3+1],o[t*3+2]),S.rotation.set(0,0,0),S.scale.set(1,1,1),S.updateMatrix(),a.setMatrixAt(t,S.matrix)}a.instanceMatrix.needsUpdate=!0,a.material.opacity=.55*E,h=c?Math.round(8*_):0;for(let e=0;e<h;e++)m[e].set(Math.random(),Math.random(),.05*_);let O=Math.round(700*(d?_:0));for(let a=0;a<700;a++){if(a>=O){S.position.set(0,-50,0),S.scale.setScalar(0),S.updateMatrix(),l.setMatrixAt(a,S.matrix);continue}u[a*3+1]-=p[a]*e;let o=Math.sin(t*1.5+f[a])*.5;u[a*3+1]<r&&(u[a*3]=i(-n,n),u[a*3+1]=11,u[a*3+2]=i(-n,n)),S.position.set(u[a*3]+o,u[a*3+1],u[a*3+2]),S.rotation.set(0,0,0),S.scale.setScalar(1),S.updateMatrix(),l.setMatrixAt(a,S.matrix)}l.instanceMatrix.needsUpdate=!0,l.material.opacity=.9*(d?_:0)}return{group:t,update:E,cycle:T,setKind:w,rainDrops:m,get kind(){return g},get intensity(){return _},get overcast(){return v},get fog(){return y},get snow(){return b},get cloud(){return x},get rainDropCount(){return h},poolCounts:{rain:600,snow:700}}}function qt(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=(e,n,r)=>{let i=t.createRadialGradient(e,n,0,e,n,r);i.addColorStop(0,`rgba(255,255,255,0.95)`),i.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=i,t.beginPath(),t.arc(e,n,r,0,7),t.fill()};n(128*.42,128*.56,128*.26),n(128*.6,128*.5,128*.3),n(128*.5,128*.46,128*.22),n(128*.34,128*.54,128*.18),n(128*.7,128*.58,128*.18);let r=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5],i=t.getImageData(0,0,128,128),a=i.data;for(let e=0;e<128;e++)for(let t=0;t<128;t++){let n=(e*128+t)*4,i=a[n+3]/255,o=(r[e%4*4+t%4]+.5)/16-.5;a[n+3]=Math.max(0,Math.min(1,Math.floor(i*5+.5+o)/5))*255}t.putImageData(i,0,0);let o=new A(e);return o.colorSpace=P,o}function Jt({extent:e=8,count:t=16}={}){let n=new W;n.raycast=()=>{};let r=qt(),i=e+6,a=(e,t)=>e+Math.random()*(t-e),o=[];for(let e=0;e<t;e++){let e=new V({map:r,transparent:!0,depthWrite:!1,opacity:0,fog:!0}),t=new ue(e),s={sp:t,mat:e,wisp:Math.random(),x:a(-i,i),z:a(-i,i),hiY:a(4,6.8),loY:a(.6,2.2),w:a(3,5.6),h:a(1.7,3),speed:a(.25,.7),op:a(.6,1)};t.raycast=()=>{},o.push(s),n.add(t)}let s=new B,c=new B(`#ffffff`),l=new B(`#5b626e`);function u(e,t,n,r){let u=r?r.cloud:0,d=r?r.fog:0,f=Math.min(1,.4+.6*u+.5*d);s.copy(n.sky).lerp(c,.62),s.lerp(l,.6*u);for(let n=0;n<o.length;n++){let r=o[n],c=n/o.length<f;r.x+=r.speed*e*(.6+.8*u),r.x>i&&(r.x=-i,r.z=a(-i,i));let l=Math.min(Yt(r.x,-i,-i+3),1-Yt(r.x,i-3,i)),p=r.hiY*(1-d)+r.loY*d,m=1-.5*r.wisp,h=.72*Math.max(0,1-d-u)+1*u+.42*d,g=c?Math.max(0,h)*r.op*m*l:0;r.mat.opacity+=(g-r.mat.opacity)*Math.min(1,e*2.5),r.mat.color.copy(s);let _=r.w*(1+.6*d)*(1+.4*r.wisp),v=r.h*(1-.35*d);r.sp.scale.set(_,v,1),r.sp.position.set(r.x,p+Math.sin(t*.3+n)*.15,r.z)}}function d(e){r=e;for(let t of o)t.mat.map=e,t.mat.needsUpdate=!0}let f=o.map((e,t)=>({kind:`cloud`,label:`cloud ${t+1}`,getWorldPos:t=>t.copy(e.sp.position),active:()=>e.mat.opacity>.06,info:()=>`cloud · ${e.wisp>.6?`wispy`:`puffy`} · drifting east${e.sp.position.y<3?` (low mist)`:``}`}));function p(){return f}return{group:n,update:u,setTexture:d,getFollowables:p,get count(){return o.length}}}function Yt(e,t,n){let r=Math.max(0,Math.min(1,(e-t)/(n-t)));return r*r*(3-2*r)}var Xt={person:4.5,car:6,gull:6,fish:8,boat:9,cloud:16};function Zt({rig:e,getCamera:t,sources:n=[]}){let r=null,i=new N,a=new N,o=()=>{let e=[];for(let t of n)if(t&&t.getFollowables){let n=t.getFollowables();n&&e.push(...n)}return e},s=e=>!e.active||e.active();function c(t){return t?(r=t,e.setFollow(e=>t.getWorldPos(e),{frame:t.frame??Xt[t.kind]??8}),t):null}function l(){r=null,e.clearFollow()}function u(e,n,r=.14){let l=t(),u=null,d=r;for(let t of o()){if(!s(t)||(t.getWorldPos(i),a.copy(i).project(l),a.z>1||a.z<-1))continue;let r=Math.hypot(a.x-e,a.y-n);r<d&&(d=r,u=t)}return u?c(u):null}function d(e=1,t=null){let n=o().filter(e=>(!t||e.kind===t)&&s(e));if(t||(n=Qt(n)),!n.length)return null;let i=r?n.indexOf(r):-1;return i=((i+e)%n.length+n.length)%n.length,c(n[i])}function f(){r&&r.active&&!r.active()&&l()}return{pickAt:u,cycle:d,follow:c,release:l,prune:f,get focus(){return r},get count(){return o().length},get readout(){return r?{kind:r.kind,label:r.label,info:r.info?r.info():``}:null}}}function Qt(e){let t=new Map;for(let n of e)t.has(n.kind)||t.set(n.kind,[]),t.get(n.kind).push(n);let n=[...t.values()],r=[];for(let e=0,t=!0;t;e++){t=!1;for(let i of n)e<i.length&&(r.push(i[e]),t=!0)}return r}function $t(e){let t=Ye(e>>>0),n=new Uint8Array(256);for(let e=0;e<256;e++)n[e]=e;for(let e=255;e>0;e--){let r=t()*(e+1)|0,i=n[e];n[e]=n[r],n[r]=i}let r=new Uint8Array(512);for(let e=0;e<512;e++)r[e]=n[e&255];let i=e=>e*e*e*(e*(e*6-15)+10),a=(e,t,n)=>e+(t-e)*n,o=(e,t,n)=>{let r=e&4?n:t,i=e&4?t:n;return(e&1?-r:r)+(e&2?-i:i)};return(e,t)=>{let n=Math.floor(e)&255,s=Math.floor(t)&255,c=e-Math.floor(e),l=t-Math.floor(t),u=i(c),d=i(l),f=r[r[n]+s],p=r[r[n]+s+1],m=r[r[n+1]+s],h=r[r[n+1]+s+1];return a(a(o(f,c,l),o(m,c-1,l),u),a(o(p,c,l-1),o(h,c-1,l-1),u),d)}}function en(e,t,n,r,i,a){let o=.5,s=1,c=0,l=0;for(let u=0;u<r;u++)c+=o*e(t*s,n*s),l+=o,o*=a,s*=i;return c/l}function tn(e,t,n,r,i,a){let o=.5,s=1,c=0,l=0;for(let u=0;u<r;u++){let r=1-Math.abs(e(t*s,n*s));r*=r,c+=o*r,l+=o,o*=a,s*=i}return c/l}var nn=(e,t,n)=>(n=Math.max(0,Math.min(1,(n-e)/(t-e))),n*n*(3-2*n)),rn=[{key:`ocean`,color:`#2a5b7a`},{key:`beach`,color:`#d8c89a`},{key:`grassland`,color:`#6f9a4e`},{key:`forest`,color:`#3f6b3a`},{key:`hills`,color:`#8a8a55`},{key:`rock`,color:`#7d7468`},{key:`snow`,color:`#eef2f6`}],an=Object.fromEntries(rn.map((e,t)=>[e.key,t]));function on(e,t,n){if(e<n-.015)return an.ocean;if(e<n+.02)return an.beach;let r=(e-n)/(1-n);return r>.82?an.snow:r>.6?an.rock:r>.34?t>.45?an.forest:an.hills:t>.55?an.forest:an.grassland}var sn={valley:{freq:2.3,mtnMask:.3,mtnGain:.55,sea:.3,relief:7.5,warp:.9},archipelago:{freq:3.4,mtnMask:.18,mtnGain:.4,sea:.5,relief:6,warp:1.3},mountains:{freq:2,mtnMask:.62,mtnGain:.85,sea:.26,relief:11,warp:.8},plains:{freq:1.8,mtnMask:.12,mtnGain:.3,sea:.28,relief:4.5,warp:.7}},cn=Object.keys(sn);function ln({seed:e=1,size:t=160,preset:n=`valley`,params:r=null}={}){let i=r||sn[n]||sn.valley,a=$t(e*2+1),o=$t(e*5+9),s=$t(e*7+13),c=$t(e*3+5),l=new Float32Array(t*t),u=new Uint8Array(t*t),d=1/0,f=-1/0;for(let e=0;e<t;e++)for(let n=0;n<t;n++){let r=(n/t-.5)*i.freq,p=(e/t-.5)*i.freq,m=r+i.warp*en(c,r+5.2,p+1.3,4,2,.5),h=p+i.warp*en(c,r+9.7,p+4.1,4,2,.5),g=en(a,m,h,6,2,.5)*.5+.5,_=nn(.45,.75,en(o,r*.5,p*.5,3,2,.5)*.5+.5),v=tn(a,m*1.7+11,h*1.7+7,5,2,.5);g=g*(1-_*i.mtnMask)+v*(_*i.mtnMask*(.6+i.mtnGain));let y=n/t-.5,b=e/t-.5,x=Math.sqrt(y*y+b*b)*2;g-=nn(.62,1,x)*.55,g=Math.max(0,Math.min(1,g));let S=en(s,r*.8+3,p*.8+8,4,2,.5)*.5+.5,C=e*t+n;l[C]=g,u[C]=on(g,S,i.sea),g<d&&(d=g),g>f&&(f=g)}return{size:t,height:l,biome:u,sea:i.sea,relief:i.relief,minH:d,maxH:f,params:i,seed:e,preset:n}}function un(e,{worldSize:t=26,baseY:r=0,chunks:i=4}={}){let{size:a,height:o,biome:s,sea:c,relief:l}=e,u=new W,d=new B,f=rn.map(e=>new B(e.color)),p=t/(a-1),m=t/2,h=e=>e*p-m,g=e=>e*p-m,_=e=>r+(e-c)*l,y=Math.ceil((a-1)/i),b=new N,x=new N,S=new N;for(let e=0;e<i;e++)for(let t=0;t<i;t++){let r=t*y,i=e*y,c=Math.min(r+y,a-1),l=Math.min(i+y,a-1);if(c<=r||l<=i)continue;let p=(c-r)*(l-i)*6,m=new Float32Array(p*3),C=new Float32Array(p*3),w=new Float32Array(p*3),T=0,E=(e,t,n,r,i,a,o)=>{m[T*3]=e,m[T*3+1]=t,m[T*3+2]=n,C[T*3]=r,C[T*3+1]=i,C[T*3+2]=a,w[T*3]=o.r,w[T*3+1]=o.g,w[T*3+2]=o.b,T++},D=(e,t,n,r,i,a,o,s,c,l)=>{b.set(r-e,i-t,a-n),x.set(o-e,s-t,c-n),S.crossVectors(b,x).normalize(),E(e,t,n,S.x,S.y,S.z,l),E(r,i,a,S.x,S.y,S.z,l),E(o,s,c,S.x,S.y,S.z,l)};for(let e=i;e<l;e++)for(let t=r;t<c;t++){let n=o[e*a+t],r=o[e*a+t+1],i=o[(e+1)*a+t],c=o[(e+1)*a+t+1],l=h(t),u=h(t+1),p=g(e),m=g(e+1),v=_(n),y=_(r),b=_(i),x=_(c),S=f[s[e*a+t]],C=f[s[(e+1)*a+t+1]];D(l,v,p,l,b,m,u,y,p,d.copy(S)),D(u,y,p,l,b,m,u,x,m,d.copy(C))}let O=new me;O.setAttribute(`position`,new z(m,3)),O.setAttribute(`normal`,new z(C,3)),O.setAttribute(`color`,new z(w,3));let k=new v(O,new n({vertexColors:!0,roughness:.92,metalness:0,flatShading:!0}));k.castShadow=!0,k.receiveShadow=!0,k.raycast=()=>{},u.add(k)}return u.userData.dispose=()=>u.traverse(e=>{e.isMesh&&(e.geometry.dispose(),e.material.dispose())}),u}var dn={beach:[{type:`rock`,density:.05,maxSlope:1.4}],grassland:[{type:`tree`,density:.1,maxSlope:.7},{type:`tuft`,density:.3,maxSlope:.9}],forest:[{type:`tree`,density:.62,maxSlope:.8},{type:`rock`,density:.03,maxSlope:1.2}],hills:[{type:`tree`,density:.14,maxSlope:.7},{type:`rock`,density:.16,maxSlope:1.6}],rock:[{type:`rock`,density:.22,maxSlope:2}]};function fn({terrain:e,seed:t=1,worldSize:n=26,baseY:r=0,biomeKeys:i,density:a=1,max:o=9e3}={}){let{size:s,height:c,biome:l,sea:u,relief:d}=e,f=Ye((t^97155048)>>>0),p=n/(s-1),m=n/2,h=e=>r+(e-u)*d,g=(e,t)=>{let n=Math.max(1,Math.min(s-2,e)),r=Math.max(1,Math.min(s-2,t)),i=(c[r*s+n+1]-c[r*s+n-1])*d/(2*p),a=(c[(r+1)*s+n]-c[(r-1)*s+n])*d/(2*p);return Math.hypot(i,a)},_={tree:[],rock:[],tuft:[]};for(let e=1;e<s-1;e+=2)for(let t=1;t<s-1;t+=2){let n=e*s+t,r=c[n];if(r<u+.005)continue;let d=dn[i[l[n]]];if(!d)continue;let v=g(t,e);for(let n of d){let i=f();if(v>n.maxSlope||i>n.density*a)continue;let s=_[n.type];if(s.length>=o)continue;let c=(f()-.5)*p*2,l=(f()-.5)*p*2,u=t*p-m+c,d=e*p-m+l;s.push({x:u,y:h(r),z:d,s:.7+f()*.6,r:f()*Math.PI*2,t:.82+f()*.36})}}return{placements:_,counts:{tree:_.tree.length,rock:_.rock.length,tuft:_.tuft.length}}}function pn(e,t){let n=new B(t),r=e.attributes.position.count,i=new Float32Array(r*3);for(let e=0;e<r;e++)i[e*3]=n.r,i[e*3+1]=n.g,i[e*3+2]=n.b;return e.setAttribute(`color`,new z(i,3)),e}function mn(e){let t=0;for(let n of e)t+=n.attributes.position.count;let n=new Float32Array(t*3),r=new Float32Array(t*3),i=new Float32Array(t*3),a=0;for(let t of e)n.set(t.attributes.position.array,a*3),r.set(t.attributes.normal.array,a*3),i.set(t.attributes.color.array,a*3),a+=t.attributes.position.count;let o=new me;return o.setAttribute(`position`,new z(n,3)),o.setAttribute(`normal`,new z(r,3)),o.setAttribute(`color`,new z(i,3)),o}function hn(){return mn([pn(new L(.045,.06,.34,6).translate(0,.17,0).toNonIndexed(),`#5b3f28`),pn(new se(.3,.55,7).translate(0,.55,0).toNonIndexed(),`#3f7d3a`),pn(new se(.22,.42,7).translate(0,.85,0).toNonIndexed(),`#4f9046`)])}function gn(){let e=new i(.18,0).toNonIndexed(),t=e.attributes.position,n=Ye(3098);for(let e=0;e<t.count;e++){let r=.78+n()*.5;t.setXYZ(e,t.getX(e)*r,t.getY(e)*r*.8,t.getZ(e)*r)}return e.computeVertexNormals(),pn(e,`#7d7468`)}function _n(){return pn(new se(.06,.16,4).translate(0,.08,0).toNonIndexed(),`#6f9a4e`)}function vn(e){let t=new W;t.raycast=()=>{};let r={tree:hn(),rock:gn(),tuft:_n()},i={tree:0,rock:-.05,tuft:0},a=new f,o=new w,s=new N,c=new N,l=new N(0,1,0),u=new B;for(let d of[`tree`,`rock`,`tuft`]){let f=e[d];if(!f||!f.length)continue;let p=new n({vertexColors:!0,roughness:.9,metalness:0,flatShading:!0}),m=new ie(r[d],p,f.length);m.castShadow=!0,m.receiveShadow=!1,m.frustumCulled=!0,m.raycast=()=>{},m.instanceColor=new h(new Float32Array(f.length*3),3);for(let e=0;e<f.length;e++){let t=f[e];s.set(t.x,t.y+i[d],t.z),o.setFromAxisAngle(l,t.r),c.setScalar(t.s),a.compose(s,o,c),m.setMatrixAt(e,a),m.setColorAt(e,u.setScalar(t.t))}m.instanceMatrix.needsUpdate=!0,m.instanceColor&&(m.instanceColor.needsUpdate=!0),t.add(m)}return t.userData.dispose=()=>t.traverse(e=>{e.isInstancedMesh&&(e.geometry.dispose(),e.material.dispose())}),t}function yn({terrain:e,seed:t,worldSize:n,baseY:r,biomeKeys:i,density:a,max:o}){let{placements:s,counts:c}=fn({terrain:e,seed:t,worldSize:n,baseY:r,biomeKeys:i,density:a,max:o}),l=vn(s);return l.userData.counts=c,l}var bn=`attribute float aSize;
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
}`,xn=`precision highp float;

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
}`,Sn={realistic:0,charm:0,pixel:2,vector:1},Cn={realistic:1,charm:1,pixel:1.9,vector:1.2};function wn({seed:e=1517,count:t=340,spreadX:n=21,yLo:r=3,yHi:i=18,zBase:a=7.2}={}){let o=new W;o.raycast=()=>{};let s=Ye(e>>>0),c=new Float32Array(t*3),l=new Float32Array(t),d=new Float32Array(t),f=new Float32Array(t),m=[];for(let e=0;e<t;e++){let t=(s()*2-1)*n,o=r+s()*(i-r),u=-a-s()*.7;c[e*3]=t,c[e*3+1]=o,c[e*3+2]=u;let p=.35+s()*.65;d[e]=p,l[e]=1.6+s()*2.8+(p>.85?2.2:0),f[e]=s()*Math.PI*2,p>.82&&m.push([t,o,u])}let h=new me;h.setAttribute(`position`,new z(c,3)),h.setAttribute(`aSize`,new z(l,1)),h.setAttribute(`aBright`,new z(d,1)),h.setAttribute(`aPhase`,new z(f,1));let g=new le({vertexShader:bn,fragmentShader:xn,uniforms:{uTime:{value:0},uTwinkle:{value:1},uSizeScale:{value:1},uColor:{value:new B(`#eaf0ff`)},uNight:{value:0},uMode:{value:0}},transparent:!0,depthWrite:!1,blending:2,fog:!1,toneMapped:!1}),_=new u(h,g);_.raycast=()=>{},_.frustumCulled=!1,o.add(_);let v=[];if(m.length>6)for(let e=0;e<3;e++){let e=Math.floor(s()*m.length);for(let t=0;t<3;t++){let t=m[e],n=m[(e+1+Math.floor(s()*2))%m.length];v.push(t[0],t[1],t[2],n[0],n[1],n[2]),e=(e+1)%m.length}}let y=[[[0,2],[0,0]],[[0,0],[.7,0]],[[2.1,2],[1.4,2]],[[1.4,2],[1.4,0]],[[1.4,0],[2.1,0]],[[2.1,0],[2.1,1]],[[2.1,1],[1.7,1]],[[2.8,0],[2.8,2]],[[2.8,2],[3.5,2]],[[3.5,2],[3.5,1]],[[3.5,1],[2.8,1]],[[2.8,1],[3.6,0]]],b=-a-.4,x=.62;for(let[[e,t],[n,r]]of y)v.push(-3+e*x,12+t*x,b,-3+n*x,12+r*x,b);let S=new me;S.setAttribute(`position`,new ve(v,3));let C=new p(S,new R({color:`#9fb6e8`,transparent:!0,opacity:0,depthWrite:!1,fog:!1,toneMapped:!1}));C.raycast=()=>{},C.frustumCulled=!1,o.add(C);let w=new ue(new V({map:Tn(),transparent:!0,opacity:0,depthWrite:!1,blending:2,fog:!1,toneMapped:!1}));w.raycast=()=>{},w.scale.set(n*2.4,n*.95,1),w.position.set(2,12,-a-.7),w.material.rotation=-.5,w.renderOrder=-3,o.add(w);let T=-1;function E(e,t=`realistic`,n=0,r=!1){g.uniforms.uTime.value=n,g.uniforms.uTwinkle.value=+!r,g.uniforms.uNight.value=e;let i=Sn[t]??0;i!==T&&(g.uniforms.uMode.value=i,T=i),g.uniforms.uSizeScale.value=Cn[t]??1,C.material.opacity=e*.5,w.material.opacity=e*.32,o.visible=e>.001}return{group:o,update:E}}function Tn(){let e=document.createElement(`canvas`);e.width=e.height=256;let t=e.getContext(`2d`),n=t.createRadialGradient(256/2,256/2,0,256/2,256/2,256/2);n.addColorStop(0,`rgba(150,170,230,0.5)`),n.addColorStop(.4,`rgba(120,130,200,0.22)`),n.addColorStop(1,`rgba(90,100,160,0)`),t.fillStyle=n,t.fillRect(0,0,256,256);let r=Ye(20145);for(let e=0;e<7;e++){let e=40+r()*176,n=70+r()*116,i=14+r()*30,a=t.createRadialGradient(e,n,0,e,n,i);a.addColorStop(0,`rgba(200,210,255,0.18)`),a.addColorStop(1,`rgba(200,210,255,0)`),t.fillStyle=a,t.beginPath(),t.arc(e,n,i,0,Math.PI*2),t.fill()}let i=new A(e);return i.colorSpace=P,i}var En=Math.PI*2;function Dn(e){let t=document.createElement(`canvas`);t.width=t.height=128;let n=t.getContext(`2d`),r=n.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return r.addColorStop(0,`#ffffff`),r.addColorStop(.34,`#fffaf0`),r.addColorStop(.66,e),r.addColorStop(.86,e),r.addColorStop(1,`rgba(255,255,255,0)`),n.fillStyle=r,n.beginPath(),n.arc(128/2,128/2,128/2,0,En),n.fill(),Pn(t,!0)}function On(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);n.addColorStop(0,`#ffffff`),n.addColorStop(.4,`#eef3ff`),n.addColorStop(.82,`#c4cee6`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,128/2,0,En),t.fill(),t.globalAlpha=.14,t.fillStyle=`#8b97b4`;for(let[e,n,r]of[[54,50,9],[78,66,7],[60,82,5]])t.beginPath(),t.arc(e,n,r,0,En),t.fill();return Pn(e,!0)}function kn(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`);t.translate(128/2,128/2),t.fillStyle=`rgba(255,210,120,0.9)`;for(let e=0;e<12;e++)t.rotate(En/12),t.beginPath(),t.moveTo(0,-28),t.lineTo(7,-54),t.lineTo(-7,-54),t.closePath(),t.fill();let n=t.createRadialGradient(0,0,0,0,0,32);return n.addColorStop(0,`#ffffff`),n.addColorStop(.4,`#fff1c8`),n.addColorStop(.8,`#ffb24a`),n.addColorStop(1,`#ff8a2a`),t.fillStyle=n,t.beginPath(),t.arc(0,0,32,0,En),t.fill(),Pn(e,!0)}function An(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,46);n.addColorStop(0,`#ffffff`),n.addColorStop(.5,`#e6ecfb`),n.addColorStop(1,`#c2cce4`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,46,0,En),t.fill(),t.fillStyle=`#aab6d2`;for(let[e,n,r]of[[52,48,11],[80,62,8],[58,82,7],[40,66,5]])t.beginPath(),t.arc(e,n,r,0,En),t.fill();return Pn(e,!0)}function jn(e,t,n){let r=document.createElement(`canvas`);r.width=r.height=144;let i=r.getContext(`2d`),a=17/2,o=18/2-.5;for(let r=0;r<18;r++)for(let s=0;s<18;s++){let c=Math.hypot(s-a,r-a);c>o||(i.fillStyle=c<o*.45?e:c<o*.78?t:n,i.fillRect(Math.round(s*8),Math.round(r*8),8,8))}return Pn(r,!1)}function Mn(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return n.addColorStop(0,`rgba(255,255,255,0.9)`),n.addColorStop(.38,`rgba(255,255,255,0.3)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,128/2,0,En),t.fill(),Pn(e,!0)}function Nn(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2),r=`20,30,48`;return n.addColorStop(0,`rgba(${r},0)`),n.addColorStop(.42,`rgba(${r},0)`),n.addColorStop(.6,`rgba(${r},0.6)`),n.addColorStop(1,`rgba(${r},0)`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,128/2,0,En),t.fill(),Pn(e,!0)}function Pn(e,t){let n=new A(e);return n.colorSpace=P,t||(n.magFilter=S,n.minFilter=S),n}var Fn=(e,t,n)=>{let r=Math.max(0,Math.min(1,(e-t)/(n-t)));return r*r*(3-2*r)};function In({skyW:e=15,skyY0:t=3.4,skyH:n=3.8,z:r=-7.8,biasX:i=4.5,sunSize:a=4.6,moonSize:o=4}={}){let s=new W;s.raycast=()=>{};let c=(e,t)=>{let n=new ue(new V({map:e,transparent:!0,depthWrite:!1,fog:!1,toneMapped:!1,...t?{blending:2}:{}}));return n.raycast=()=>{},n},l={realistic:Dn(`#ffcf8a`),charm:kn(),pixel:jn(`#fff6e0`,`#ffc24a`,`#ff8a2a`)},u={realistic:On(),charm:An(),pixel:jn(`#ffffff`,`#cdd6ee`,`#9aa6c6`)},d=Mn(),f=c(Nn(),!1),p=c(d,!0),m=c(l.realistic),h=c(d,!0),g=c(u.realistic);f.renderOrder=-2,p.renderOrder=-1,s.add(f,p,m,h,g);let _=wn({});_.group.renderOrder=-4,s.add(_.group);let v=typeof window<`u`&&window.matchMedia?window.matchMedia(`(prefers-reduced-motion: reduce)`):null,y={realistic:{sunGlow:3,sunGlowOp:.7,moonGlow:2.6,moonGlowOp:.5,sizeMul:1,sunHaloOp:.85},charm:{sunGlow:2.2,sunGlowOp:.55,moonGlow:2.1,moonGlowOp:.42,sizeMul:1.08,sunHaloOp:.7},pixel:{sunGlow:1.7,sunGlowOp:.4,moonGlow:1.7,moonGlowOp:.32,sizeMul:1,sunHaloOp:.6}},b=`realistic`;function x(e){e===b||!y[e]||(b=e,m.material.map=l[e],m.material.needsUpdate=!0,g.material.map=u[e],g.material.needsUpdate=!0)}new B;let S=new B(`#fff3df`),C=new B(`#ffb060`),w=new B(`#ff6a2a`),T=new B(`#eef2ff`),E=new B(`#9fbcff`);function D(s,c,l,u,d=`realistic`){x(d);let D=y[b],O=l.sunArc,k=u?Math.min(1,(u.cloud||0)*.85+(u.fog||0)*.7):0,ee=O.y,A=Fn(ee,-.04,.1)*(1-.7*k),j=1-Fn(Math.abs(ee),.02,.5);m.position.set(O.x*e+i,t+O.y*n,r),p.position.copy(m.position);let M=a*D.sizeMul*(1+.55*j);m.scale.setScalar(M),p.scale.setScalar(M*D.sunGlow),m.material.color.copy(S),p.material.color.copy(C).lerp(w,j),m.material.opacity=A,p.material.opacity=A*D.sunGlowOp*(.7+.5*j),f.position.copy(m.position),f.scale.setScalar(M*1.7),f.material.opacity=A*(1-j)*D.sunHaloOp;let N=Fn(-O.y,-.04,.1)*(1-.65*k);g.position.set(-O.x*e+i,t+-O.y*n,r),h.position.copy(g.position);let P=o*D.sizeMul;g.scale.setScalar(P),h.scale.setScalar(P*D.moonGlow),g.material.color.copy(T),h.material.color.copy(E),g.material.opacity=N,h.material.opacity=N*D.moonGlowOp;let te=Fn(-O.y,-.05,.18)*(1-.85*k);_.update(te,d,c,!!(v&&v.matches))}return{group:s,update:D}}var Ln=`varying vec2 vUv;

void main() {
  
  
  
  vUv = uv;

  
  
  
  
  
  
  
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,Rn=`precision highp float;

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
}`,zn=`varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0); 
}`,Bn=`precision highp float;

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
}`,Vn=`precision highp float;

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
}`,Hn=`precision highp float;

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
}`,Un=`const float CA_STRENGTH   = 0.0030;  
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
}`,Wn=`const float DITHER = 0.55;   

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
}`,Gn=`precision highp float;

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
}`,Kn=`precision highp float;

varying vec2 vUv;
uniform sampler2D uToon;   
uniform sampler2D uPixel;  
uniform float     uBlend;  

void main() {
  vec3 t = texture2D(uToon, vUv).rgb;
  vec3 p = texture2D(uPixel, vUv).rgb;
  gl_FragColor = vec4(mix(t, p, uBlend), 1.0);
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
}`,Jn={"1-bit":{gridWidth:110,dither:.6,palette:[`#15120c`,`#c8b486`]},gb:{gridWidth:130,dither:.4,palette:[`#0f380f`,`#306230`,`#8bac0f`,`#9bbc0f`]},"8-bit":{gridWidth:160,dither:.55,palette:[`#140c1c`,`#442434`,`#30346d`,`#4e4a4e`,`#854c30`,`#346524`,`#d04648`,`#757161`,`#597dce`,`#d27d2c`,`#8595a1`,`#6daa2c`,`#d2aa99`,`#6dc2ca`,`#dad45e`,`#deeed6`]},"16-bit":{gridWidth:280,dither:.3,palette:`#000000.#222034.#45283c.#663931.#8f563b.#df7126.#d9a066.#eec39a.#fbf236.#99e550.#6abe30.#37946e.#4b692f.#524b24.#323c39.#3f3f74.#306082.#5b6ee1.#639bff.#5fcde4.#cbdbfc.#ffffff.#9badb7.#847e87.#696a6a.#595652.#76428a.#ac3232.#d95763.#d77bba.#8f974a.#8a6f30`.split(`.`)},modern:{gridWidth:460,dither:.6,palette:null}},Yn=[`gb`,`8-bit`,`16-bit`,`modern`];function Xn(e){let t=Math.max(e.length,1),n=new Float32Array(t*4);e.forEach((e,t)=>{let r=new B(e);n[t*4+0]=r.r,n[t*4+1]=r.g,n[t*4+2]=r.b,n[t*4+3]=1});let r=new I(n,t,1,E,y);return r.minFilter=S,r.magFilter=S,r.needsUpdate=!0,r}var Zn=220,Qn={night:[`#0A0C16`,`#1C2236`,`#3A3A52`,`#5A5A78`,`#8A92B0`],dawn:[`#1A1008`,`#43281A`,`#7A4A30`,`#B07A4E`,`#E8A86A`],noon:[`#16100A`,`#3A2F1E`,`#6B563A`,`#937B54`,`#B89968`],dusk:[`#140A0A`,`#3E1E1A`,`#7A3828`,`#B85A36`,`#F0884A`]},$n={night:[`#020604`,`#06180E`,`#10401E`,`#1E9040`,`#7FE0FF`],dawn:[`#060603`,`#1A2410`,`#3A6B22`,`#6CC040`,`#FFC060`],noon:[`#050805`,`#0E2912`,`#1E6B2F`,`#3CF06A`,`#FFB000`],dusk:[`#080402`,`#241408`,`#6B4A12`,`#E0A030`,`#FF7030`]};function er({demo:e=!1,citySeed:t=0,profileIndex:n=0}={}){let i=new ce({antialias:!0,preserveDrawingBuffer:!0});i.shadowMap.enabled=!0,i.shadowMap.type=1,i.shadowMap.autoUpdate=!1,i.shadowMap.needsUpdate=!0;let a=!!(window.matchMedia&&window.matchMedia(`(pointer: coarse)`).matches);i.setPixelRatio(Math.min(window.devicePixelRatio,a?1.5:2)),i.setSize(window.innerWidth,window.innerHeight),i.setClearColor(920327,1),document.body.appendChild(i.domElement);let s=i.getDrawingBufferSize(new H),c=new ge;c.fog=new r(10465470,0);let u=new B(`#aeb6c0`),f=.062,p=new B(`#74508f`),h=new B,g=Fe({aspect:window.innerWidth/window.innerHeight}),_=gt({t:.5}),y={type:b,format:E,minFilter:S,magFilter:S,wrapS:te,wrapT:te,depthBuffer:!1,stencilBuffer:!1},C=[new F(256,256,y),new F(256,256,y),new F(256,256,y)];for(let e of C)i.setRenderTarget(e),i.clear();i.setRenderTarget(null);let w=new ge,T=new x(-1,1,1,-1,0,1),O=new le({vertexShader:zn,fragmentShader:Bn,uniforms:{uCurr:{value:null},uPrev:{value:null},uTexel:{value:new H(1/256,1/256)},uMouse:{value:new H(-1,-1)},uMouseStrength:{value:0},uC2:{value:.25},uDamping:{value:.992},uRainCount:{value:0},uRainDrops:{value:Array.from({length:8},()=>new N)},uWakeCount:{value:0},uWakeDrops:{value:Array.from({length:8},()=>new N)}}});w.add(new v(new d(2,2),O));let k=new F(s.x,s.y,{minFilter:m,magFilter:m,depthBuffer:!0,stencilBuffer:!1});function ee(e){let t=document.createElement(`canvas`);t.width=t.height=1024;let n=t.getContext(`2d`);n.fillStyle=e?`#0c1418`:`#15110b`,n.fillRect(0,0,1024,1024),n.strokeStyle=e?`rgba(120,150,170,0.22)`:`rgba(184,153,104,0.30)`,n.lineWidth=2;for(let e=0;e<=1024;e+=64)n.beginPath(),n.moveTo(e,0),n.lineTo(e,1024),n.stroke(),n.beginPath(),n.moveTo(0,e),n.lineTo(1024,e),n.stroke();e||(n.fillStyle=`#B89968`,n.font=`bold 360px Georgia, serif`,n.textAlign=`center`,n.textBaseline=`middle`,n.fillText(`LGR`,512,470),n.font=`600 64px ui-monospace, monospace`,n.fillText(`WEB · STUDIO`,512,720));let r=new A(t);return r.colorSpace=P,r}let j=new v(new d(28,28),new G({map:ee(e)}));j.rotation.x=-Math.PI/2,j.position.y=-.35,c.add(j);let M=new v(new d(40,24),new le({depthWrite:!1,vertexShader:Ln,fragmentShader:Rn,uniforms:{uTime:{value:0},uInk:{value:_.horizon},uGold:{value:_.sky},uFogColor:{value:h},uFogAmt:{value:0},uFogCharm:He}}));M.position.set(0,3,-8),c.add(M);let I=new le({vertexShader:Vn,fragmentShader:Hn,uniforms:{uHeight:{value:null},uScene:{value:k.texture},uTexel:{value:new H(1/256,1/256)},uResolution:{value:new H(s.x,s.y)},uDisplace:{value:.42},uNormalStrength:{value:22},uRefractStrength:{value:.06},uChromaScale:{value:1},uNormalMatrix:{value:new l},uLightDir:{value:_.sunDir},uInk:{value:new B(`#2A2218`)},uGold:{value:new B(`#B89968`)},uVector:Ie,uVecWater:{value:new B(`#1fb8d8`)},uVecTint:{value:Le}}}),L=new v(new d(28,28,255,255),I);L.rotation.x=-Math.PI/2,L.updateMatrixWorld(!0),I.uniforms.uNormalMatrix.value.getNormalMatrix(L.matrixWorld),c.add(L);let ne={value:0},re=Wt({windowGlow:ne}),R=ct({seed:t,profileIndex:n,landmarkFactory:re,windowGlow:ne});c.add(R.group);let ie=xt({plinthTop:.3,extent:R.extent,profile:R.state.profile});c.add(ie.group);let ae=Mt({extent:R.extent,waterSize:28,plinthTop:.3});c.add(ae.group),O.uniforms.uWakeDrops.value=ae.wakeDrops;let oe=Kt({extent:R.extent});c.add(oe.group),O.uniforms.uRainDrops.value=oe.rainDrops;let se=Jt({extent:R.extent});c.add(se.group);let z=Zt({rig:g,getCamera:()=>g.camera,sources:[ie,ae,se]}),ue=In();c.add(ue.group);let de=null,fe=null,pe=!1,me=1234,V=`valley`,he=rn.map(e=>e.key),_e=()=>[R.group,ie.group,ae.group],U=()=>[de,fe].filter(Boolean);function W(){for(let e of U())c.remove(e),e.userData.dispose?.();let e=ln({seed:me,size:160,preset:V});de=un(e,{worldSize:26,baseY:0,chunks:6}),fe=yn({terrain:e,seed:me,worldSize:26,baseY:0,biomeKeys:he});for(let e of U())e.visible=pe,c.add(e);typeof window<`u`&&(window.__world={seed:me,preset:V,active:pe,chunks:de.children.length,scatter:fe.userData.counts})}let ve=e=>{for(let t of U())t.visible=e},ye={enter(){de||W(),pe=!0,ve(!0);for(let e of _e())e.visible=!1;window.__world&&(window.__world.active=!0)},exit(){pe=!1,ve(!1);for(let e of _e())e.visible=!0;window.__world&&(window.__world.active=!1)},reroll(){return me=Math.random()*1e9|0,W(),ye.enter(),me},setPreset(e){return cn.includes(e)&&(V=e,W(),ye.enter()),V},get active(){return pe},get seed(){return me},get preset(){return V},get presets(){return cn}};R.group.remove(R.key),c.add(R.key),R.key.castShadow=!0,R.key.shadow.mapSize.set(2048,2048),R.key.shadow.bias=-18e-5,R.key.shadow.normalBias=.028,c.add(R.key.target);function be(){let e=R.key.shadow.camera,t=R.extent+4.5;e.left=-t,e.right=t,e.top=t,e.bottom=-t,e.near=1,e.far=48,e.updateProjectionMatrix(),i.shadowMap.needsUpdate=!0}be();let xe=new D(s.x,s.y),Se=new F(s.x,s.y,{minFilter:m,magFilter:m,depthBuffer:!0,stencilBuffer:!1,depthTexture:xe}),Ce=new F(s.x,s.y,{minFilter:m,magFilter:m,depthBuffer:!1,stencilBuffer:!1}),we=new F(s.x,s.y,{minFilter:m,magFilter:m,depthBuffer:!1,stencilBuffer:!1}),Te=new F(s.x,s.y,{minFilter:m,magFilter:m,depthBuffer:!1,stencilBuffer:!1}),Ee=new ge,De=new x(-1,1,1,-1,0,1),Oe=new v(new d(2,2));Ee.add(Oe);let ke=new le({vertexShader:zn,fragmentShader:Un,uniforms:{uScene:{value:Se.texture},uTime:{value:0},uResolution:{value:new H(s.x,s.y)},uGrain:{value:1},uChroma:{value:1},uExposure:{value:1}}}),Ae=e=>{let t=e.map(e=>new B(e));for(;t.length<8;)t.push(new B(0,0,0));return t},je=[`night`,`dawn`,`noon`,`dusk`],Me={inkgold:je.map(e=>Ae(Qn[e])),terminal:je.map(e=>Ae($n[e]))},Ne=new le({vertexShader:zn,fragmentShader:Wn,uniforms:{uScene:{value:Ce.texture},uResolution:{value:new H(s.x,s.y)},uPixelSize:{value:Zn},uPalette:{value:Me.inkgold[2]},uPaletteB:{value:Me.inkgold[2]},uPaletteBlend:{value:0},uPaletteSize:{value:5}}}),K=new le({vertexShader:zn,fragmentShader:qn,uniforms:{uScene:{value:Ce.texture},uResolution:{value:new H(s.x,s.y)},uGridWidth:{value:160},uDither:{value:.55},uPalette:{value:Xn(Jn[`8-bit`].palette)},uPaletteSize:{value:1},uUsePalette:{value:1}}}),Pe={};for(let e of Yn)Pe[e]=Jn[e].palette?Xn(Jn[e].palette):null;let We=new le({vertexShader:zn,fragmentShader:Gn,uniforms:{uScene:{value:Ce.texture},uDepth:{value:xe},uResolution:{value:new H(s.x,s.y)},uBands:{value:4},uToonGain:{value:1.7},uToonGamma:{value:.6},uToonFloor:{value:_.toonFloor},uOutline:{value:_.outline},uNear:{value:.1},uFar:{value:100},uIsPerspective:{value:1}}}),Ge=new le({vertexShader:zn,fragmentShader:Kn,uniforms:{uToon:{value:we.texture},uPixel:{value:Te.texture},uBlend:{value:0}}});function Ke(e,t){Oe.material=e,i.setRenderTarget(t),i.render(Ee,De)}function qe(){g.setViewport(window.innerWidth,window.innerHeight),i.setSize(window.innerWidth,window.innerHeight);let e=i.getDrawingBufferSize(new H);return k.setSize(e.x,e.y),Se.setSize(e.x,e.y),Ce.setSize(e.x,e.y),we.setSize(e.x,e.y),Te.setSize(e.x,e.y),I.uniforms.uResolution.value.set(e.x,e.y),ke.uniforms.uResolution.value.set(e.x,e.y),Ne.uniforms.uResolution.value.set(e.x,e.y),K.uniforms.uResolution.value.set(e.x,e.y),We.uniforms.uResolution.value.set(e.x,e.y),e}let q=3,J=!1,Je=!1,Y=`native`,Ye=.3,Xe=.46,Ze=[`native`,...Yn],Qe={"16-bit":`16-bit`,"8-bit":`8-bit`,gb:`Game Boy`,modern:`Modern`,native:`Pixel`,"1-bit":`1-bit`};typeof window<`u`&&(window.__mode=q,window.__vector=J,window.__era=Y);let $e=0,et=performance.now(),tt=typeof window<`u`&&new URLSearchParams(window.location.search).has(`perf`);typeof window<`u`&&(window.__perf=tt),tt&&(i.info.autoReset=!1);let X=null;typeof window<`u`&&(window.__loaded=!1);let nt=0,rt=new N(1,1,1),it=!1;function at(e){let t=Je?Me.terminal:Me.inkgold,n=e%1*4,r=Math.floor(n)%4;Ne.uniforms.uPalette.value=t[r],Ne.uniforms.uPaletteB.value=t[(r+1)%4],Ne.uniforms.uPaletteBlend.value=n-Math.floor(n)}function ot(e){let t=Jn[e];t&&(K.uniforms.uGridWidth.value=t.gridWidth,K.uniforms.uDither.value=t.dither,K.uniforms.uUsePalette.value=+!!t.palette,t.palette&&(K.uniforms.uPalette.value=Pe[e],K.uniforms.uPaletteSize.value=t.palette.length))}function st(){Y!==`native`&&ot(Y)}let lt=()=>Y===`native`?Ne:K;function ut(e,t){L.visible=!1,i.setRenderTarget(k),i.render(c,e),L.visible=!0,i.setRenderTarget(t),i.render(c,e)}function dt(e,t){if(L.visible=!1,i.setRenderTarget(k),i.render(c,g.camera),L.visible=!0,q===1)i.setRenderTarget(t),i.render(c,g.camera);else if(i.setRenderTarget(Se),i.render(c,g.camera),q===2)ke.uniforms.uGrain.value=1,ke.uniforms.uChroma.value=1,Ke(ke,t);else{ke.uniforms.uGrain.value=0,ke.uniforms.uChroma.value=0,Ke(ke,Ce);let n=g.camera;We.uniforms.uNear.value=n.near,We.uniforms.uFar.value=n.far,We.uniforms.uIsPerspective.value=+!!n.isPerspectiveCamera;let r=e.era?(ot(e.era),K):lt();e.kind===`pixel`?(Ke(r,t),window.__style=`pixel`):e.kind===`toon`?(Ke(We,t),window.__style=`toon`):(Ke(We,we),Ke(r,Te),Ge.uniforms.uBlend.value=e.blend,Ke(Ge,t),window.__style=`blend`)}}function ft(){let e=pt(),t=e.kind===`toon`?1:e.kind===`blend`?1-e.blend:0;return I.uniforms.uChromaScale.value=o.lerp(1,.5,t),e}function pt(){if(q===1||q===2)return{kind:`none`};if(q===7)return{kind:`pixel`};if(q===8)return{kind:`toon`};let e=g.styleT;return window.__styleT=e,e<=Ye?{kind:`toon`}:e>=Xe?{kind:`pixel`,era:e<.62?`16-bit`:e<.8?`8-bit`:`gb`}:{kind:`blend`,blend:o.smoothstep(e,Ye,Xe),era:`16-bit`}}function mt(e){return q===1||q===2?``:J&&q!==7&&q!==8?`Vector`:e.kind===`toon`?`Toon`:e.kind===`pixel`?Qe[e.era||Y]||`Pixel`:e.kind===`blend`?`Toon → `+(Qe[e.era]||`Pixel`):``}function ht(e,t,{shadowsOn:n=!0,seasonTarget:r=0}={}){if(tt){let e=i.info;X={calls:e.render.calls,tris:e.render.triangles,programs:e.programs?e.programs.length:0,geo:e.memory.geometries,tex:e.memory.textures},e.reset()}M.material.uniforms.uTime.value=t,ke.uniforms.uTime.value=t,_.update(e),R.key.position.copy(_.sunDir).multiplyScalar(24),R.key.color.copy(_.sunColor),R.key.intensity=_.sunIntensity,R.fill.color.copy(_.hemiSky),R.fill.groundColor.copy(_.hemiGround),ne.value=_.windowGlow;let a=oe.overcast;R.key.intensity*=1-.5*a,R.key.color.lerp(u,.45*a),R.fill.intensity=1+.7*a;let s=o.smoothstep(_.sunDir.y,.06,.34),l=o.lerp(.28,1,1-_.windowGlow),d=n?s*l:0;R.key.shadow.intensity=.72*d,Re.value=.52*d,(n&&!it||rt.distanceToSquared(_.sunDir)>2e-5)&&(i.shadowMap.needsUpdate=!0,rt.copy(_.sunDir)),it=n;let m=1-_.windowGlow;Le.setRGB(o.lerp(.46,1,m),o.lerp(.52,1,m),o.lerp(.74,1,m)),ke.uniforms.uExposure.value=_.exposure,We.uniforms.uToonGain.value=_.toonGain,i.setClearColor(_.horizon,1),at(_.t),window.__t=_.t,ie.update(e,t,_),R.update(t),ae.update(e,t,_),O.uniforms.uWakeCount.value=ae.wakeCount,oe.update(e,t),O.uniforms.uRainCount.value=oe.rainDropCount;let g=oe.fog*(1-m);c.fog.density=oe.fog*f,h.copy(_.horizon).lerp(p,.85*g),c.fog.color.copy(h),i.setClearColor(h,1),He.value=oe.fog,M.material.uniforms.uFogAmt.value=.7*oe.fog,ze.value=oe.snow,Be.value=oe.cloud*.55,Ve.x+=e*.018,Ve.y+=e*.009,Ue.value+=(r-Ue.value)*Math.min(1,e*1.5),se.update(e,t,_,oe);let v=pt(),y=v.kind===`pixel`||v.kind===`blend`?`pixel`:J||v.kind===`toon`?`charm`:`realistic`;ue.update(e,t,_,oe,y),$e++;let b=performance.now();b-et>=1e3&&(window.__fps=$e,tt&&X&&(console.log(`[perf] ${$e} fps · ~${(1e3/Math.max(1,$e)).toFixed(2)} ms · calls ${X.calls} · tris ${X.tris} · programs ${X.programs} · geo ${X.geo} · tex ${X.tex}`),window.__perfInfo={fps:$e,...X}),$e=0,et=b);let[x,S,E]=C;if(O.uniforms.uPrev.value=x.texture,O.uniforms.uCurr.value=S.texture,i.setRenderTarget(E),i.render(w,T),C=[S,E,x],I.uniforms.uHeight.value=C[1].texture,nt<2&&typeof document<`u`&&++nt===2){let e=document.getElementById(`lgr-loader`);e&&e.classList.add(`gone`),window.__loaded=!0}}function _t(e){q=e,window.__mode=q}function vt(){return J=!J,Ie.value=+!!J,window.__vector=J,J}function yt(e){return J=!!e,Ie.value=+!!J,window.__vector=J,J}function bt(){return Y=Ze[(Ze.indexOf(Y)+1)%Ze.length],window.__era=Y,st(),Y}function St(){return Je=!Je,Je}return{updateWorld:ht,decideStyle:ft,renderCityPipeline:dt,renderCityBeautyTo:ut,styleHintName:mt,setPostMode:_t,toggleVector:vt,setVector:yt,cycleEra:bt,togglePalette:St,get mode(){return q},get vector(){return J},get sceneEra(){return Y},renderer:i,drawBuffer:s,scene:c,rig:g,sunRig:_,SIM:256,targets:C,simScene:w,simCamera:T,simMaterial:O,grabRT:k,card:j,backdrop:M,WATER_SIZE:28,water:L,waterMaterial:I,windowGlow:ne,landmarkFactory:re,city:R,cityLife:ie,waterLife:ae,weatherRig:oe,clouds:se,inspector:z,world:ye,fitShadowFrustum:be,SHADOW_DIST:24,sceneDepth:xe,sceneRT:Se,filmicRT:Ce,toonRT:we,pixelRT:Te,postScene:Ee,postCamera:De,postQuad:Oe,filmicMaterial:ke,pixelMaterial:Ne,pixelkitMaterial:K,toonMaterial:We,mixMaterial:Ge,PALCACHE:Me,ERA_TEX:Pe,runPass:Ke,OVERCAST_GREY:u,FOG_DENSITY:f,FOG_NIGHT_TINT:p,_fogColor:h,resize:qe}}var tr=`lgr_hints_`,nr=!1;function rr(){if(nr||typeof document>`u`)return;nr=!0;let e=document.createElement(`style`);e.textContent=`
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
  </div>`,document.body.appendChild(c),i.shown=!0,s?c.classList.add(`on`):requestAnimationFrame(()=>c.classList.add(`on`));let l=!1;function u(e=!0){if(!l){if(l=!0,e)try{localStorage.setItem(a,`1`)}catch{}i.dismissed=!0,window.removeEventListener(`keydown`,d),c.classList.remove(`on`),setTimeout(()=>c.remove(),s?0:300)}}function d(e){e.key===`Escape`&&u(!0)}return window.addEventListener(`keydown`,d),c.querySelector(`.lgr-hints-ok`).addEventListener(`click`,()=>{navigator.vibrate?.(10),u(!0)}),c.querySelector(`.lgr-hints-x`).addEventListener(`click`,()=>{navigator.vibrate?.(10),u(!0)}),{dismiss:u,el:c}}var ar=null;function or(){if(ar)return ar;let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return n.addColorStop(0,`rgba(0,0,0,0.60)`),n.addColorStop(.55,`rgba(0,0,0,0.32)`),n.addColorStop(1,`rgba(0,0,0,0.0)`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,128/2,0,Math.PI*2),t.fill(),ar=new A(e),ar.colorSpace=P,ar}function sr({w:e=.6,d:t=.6,x:n=0,y:r=.002,z:i=0,opacity:a=.5,rotation:o=0}={}){let s=new v(new d(e,t),new G({map:or(),transparent:!0,opacity:a,depthWrite:!1,toneMapped:!1}));return s.rotation.x=-Math.PI/2,s.rotation.z=o,s.position.set(n,r,i),s.renderOrder=-1,s.raycast=()=>{},s}function cr({yawLimit:e=80,pitchUp:t=32,pitchDown:n=20,sensitivity:r=.16,keySpeed:i=70,damp:a=9}={}){let o=Math.PI/180,s=(e,t,n)=>e<t?t:e>n?n:e,c=0,l=0,u=0,d=0;return{addDrag(i,a){u=s(u-i*r,-e,e),d=s(d-a*r,-n,t)},addKeys(r,{left:a,right:o,up:c,down:l}){let f=i*r;a&&(u=s(u+f,-e,e)),o&&(u=s(u-f,-e,e)),c&&(d=s(d+f,-n,t)),l&&(d=s(d-f,-n,t))},recenter(){u=0,d=0},update(e){let t=1-Math.exp(-a*e);c+=(u-c)*t,l+=(d-l)*t},get yaw(){return c*o},get pitch(){return l*o},get active(){return Math.abs(c)>.05||Math.abs(l)>.05}}}var lr=null;function ur(){if(lr)return lr;let e=document.createElement(`canvas`);e.width=e.height=256;let t=e.getContext(`2d`),n=t.createRadialGradient(256/2,256/2,256*.32,256/2,256/2,256*.72);return n.addColorStop(0,`rgba(0,0,0,0)`),n.addColorStop(1,`rgba(0,0,0,1)`),t.fillStyle=n,t.fillRect(0,0,256,256),lr=new A(e),lr.colorSpace=P,lr}function dr({strength:e=.55,dist:t=.5}={}){let n=new v(new d(1,1),new G({map:ur(),transparent:!0,opacity:e,depthTest:!1,depthWrite:!1,toneMapped:!1}));n.renderOrder=9999,n.raycast=()=>{},n.frustumCulled=!1;let r=new N;return n.fit=e=>{e.getWorldDirection(r),n.position.copy(e.position).addScaledVector(r,t),n.quaternion.copy(e.quaternion);let i=2*Math.tan(o.degToRad(e.fov)*.5)*t*1.05;n.scale.set(i*e.aspect,i,1)},n}var fr=``+new URL(`office-dressed2-CNZL1Pge.png`,import.meta.url).href,pr=``+new URL(`office-night2-Tdv47G8J.png`,import.meta.url).href,mr=``+new URL(`office-modern-CQqt-EK1.png`,import.meta.url).href,hr=``+new URL(`office-charm2-qAn3JlVo.png`,import.meta.url).href;function gr(){let t=document.createElement(`canvas`);t.width=t.height=256;let n=t.getContext(`2d`);n.fillStyle=`#6e4a2c`,n.fillRect(0,0,256,256);for(let e=0;e<150;e++){let e=Math.random()*256,t=.7+Math.random()*.7;n.strokeStyle=`rgba(${Math.round(110*t)},${Math.round(74*t)},${Math.round(44*t)},${.16+Math.random()*.28})`,n.lineWidth=.5+Math.random()*1.6,n.beginPath(),n.moveTo(e,0);for(let t=0;t<=256;t+=14)n.lineTo(e+Math.sin(t*.05+e)*3,t);n.stroke()}n.strokeStyle=`rgba(30,18,8,0.5)`,n.lineWidth=2;for(let e of[256*.34,256*.67])n.beginPath(),n.moveTo(0,e),n.lineTo(256,e),n.stroke();let r=new A(t);return r.colorSpace=P,r.wrapS=r.wrapT=e,r}function Q(t,r,i,a,{rough:o=.62,metal:s=0,x:c=0,y:l=0,z:u=0,emissive:d=null,emissiveIntensity:f=1,map:p=null,mapRepeat:m=null}={}){let h=p;p&&m&&(h=p.clone(),h.needsUpdate=!0,h.wrapS=h.wrapT=e,h.repeat.set(m[0],m[1]));let g=new v(new O(t,r,i),new n({color:h?`#ffffff`:a,roughness:o,metalness:s,...h?{map:h}:{},...d?{emissive:d,emissiveIntensity:f}:{}}));return g.position.set(c,l,u),g}function _r(){let e=document.createElement(`canvas`);e.width=512,e.height=304;let t=e.getContext(`2d`);t.fillStyle=`#fff`,t.fillRect(0,0,512,304);let n=.13*512,r=.87*512,i=.1*304,a=.66*304;return t.filter=`blur(7px)`,t.fillStyle=`#000`,t.beginPath(),t.moveTo(80.56,i),t.arcTo(r,i,r,a,14),t.arcTo(r,a,n,a,14),t.arcTo(n,a,n,i,14),t.arcTo(n,i,r,i,14),t.closePath(),t.fill(),t.filter=`none`,new A(e)}function vr({tier:e=`corner`,layout:t=`straight-on`}={}){let r=new ge,i=new s(43,1,.1,100),c=new N(0,1.62,4.35),l=new N(0,1.12,-1);i.position.copy(c),i.lookAt(l);let u=cr({yawLimit:80,pitchUp:34,pitchDown:20}),f=new ye(0,0,0,`YXZ`),p=new w,m=new W;r.add(m);let h=new W,g=new W,_=new W,y=new W,b=new W;m.add(h,g,_,y,b);let x=[],S=`#4a3322`,C=`#3a2618`,T=`#5b3d27`,E=`#6e4a30`,D=`#5a5650`,ee=gr();h.add(Q(11,.2,11,`#3c2a1c`,{rough:.5,y:-.1,map:ee,mapRepeat:[5,5]})),h.add(Q(11,.2,11,`#3a2a1d`,{rough:.9,y:3,map:ee,mapRepeat:[4,4]}));for(let e of[-2.4,0,2.4])h.add(Q(.18,.16,7.4,C,{rough:.7,x:e,y:2.9,z:0,map:ee,mapRepeat:[1,4]}));for(let e of[-2,.4])h.add(Q(7.4,.16,.18,C,{rough:.7,x:0,y:2.88,z:e,map:ee,mapRepeat:[4,1]}));function A(e){let t=new W;t.add(Q(.2,3.2,8,S,{rough:.7,x:e*3.6,y:1.5,z:0,map:ee,mapRepeat:[3,1.4]}));let r=e*3.45;t.add(Q(.06,.22,8,C,{x:r,y:.13,z:0})),t.add(Q(.08,.16,8,C,{x:r,y:2.84,z:0})),t.add(Q(.05,.05,8,C,{x:r,y:1,z:0}));for(let e of[-2.6,-1.3,1.3,2.6])t.add(Q(.05,1.6,.06,C,{x:r,y:1.95,z:e}));for(let e of[-2.6,-1.3,1.3,2.6])t.add(Q(.05,.7,.06,C,{x:r,y:.6,z:e}));let i=new v(new d(1.5,1),new n({map:Er(e),roughness:.8}));i.position.set(e*3.49,1.7,.4),i.rotation.y=-e*Math.PI/2,t.add(Q(.06,1.18,1.68,`#2a1c10`,{x:e*3.52,y:1.7,z:.4}),i);let a=new v(new d(1,1.3),new n({map:Er(-e),roughness:.8}));a.position.set(e*3.49,1.78,-2),a.rotation.y=-e*Math.PI/2,t.add(Q(.06,1.46,1.16,`#2a1c10`,{x:e*3.52,y:1.78,z:-2}),a),t.add(Q(.12,.3,.16,`#2a1c10`,{x:e*3.4,y:2.2,z:2.2}));let o=new ue(new V({map:Tr(),color:`#ffcf8a`,transparent:!0,opacity:.5,depthWrite:!1,blending:2}));return o.scale.set(.6,.75,1),o.position.set(e*3.32,2.34,2.2),o.raycast=()=>{},t.add(o),t}h.add(A(-1),A(1));let te=new W;te.add(Q(.3,1.9,1.5,T,{rough:.5,y:.95}));for(let e of[.4,.95,1.5])te.add(Q(.3,.04,1.46,`#3a2c1e`,{y:e}));let F=[`#7a3a2a`,`#2a4a6a`,`#b08a3a`,`#3a5a3a`,`#6a2a4a`,`#8a5a2a`];for(let e of[.6,1.15,1.7])for(let t=0;t<7;t++)te.add(Q(.18,.3,.11,F[(t+Math.round(e))%F.length],{x:.02,y:e-.06,z:-.6+t*.17}));te.position.set(-3.34,0,-1.9),h.add(te),h.add(sr({w:1,d:1.8,x:-3.2,y:.02,z:-1.9,opacity:.4}));let I=new W;I.add(Q(.5,.1,.5,`#4a3526`,{rough:.7,y:.45})),I.add(Q(.5,.55,.08,`#4a3526`,{rough:.7,y:.72,z:-.21}));for(let[e,t]of[[-.2,-.2],[.2,-.2],[-.2,.2],[.2,.2]])I.add(Q(.05,.45,.05,`#2a1c10`,{x:e,y:.22,z:t}));I.position.set(2.7,0,2.6),I.rotation.y=-.5,h.add(I),h.add(sr({w:.7,d:.7,x:2.7,y:.02,z:2.6,opacity:.42}));let ne=new d(3,2.5),re=new d(3,2.5),R=new G({color:`#ffffff`,toneMapped:!1}),ie=new G({color:`#ffffff`,toneMapped:!1}),ae=-3.7,ce=1.55,le=o.degToRad(30),z=3/2*Math.cos(le),fe=ae+3/2*Math.sin(le),pe=new v(ne,R);pe.position.set(-z,ce,fe),pe.rotation.y=le;let me=new v(re,ie);me.position.set(z,ce,fe),me.rotation.y=-le;let he=new G({color:`#ffffff`,toneMapped:!1}),_e=new v(new d(5.4,2.6),he);_e.position.set(0,ce,-3.5500000000000003),_e.visible=!1,_.add(pe,me,_e);let H=new W;H.add(Q(.08,2.7,.08,C,{x:0,y:ce,z:fe+3/2*Math.sin(le)+.02}));for(let[e,t,n]of[[-z,fe,le],[z,fe,-le]]){let r=new W;r.add(Q(3.05,.09,.09,C,{y:1.3})),r.add(Q(3.05,.09,.09,C,{y:-1.25})),r.add(Q(.09,2.6,.09,C,{x:-1.5})),r.position.set(e,ce,t),r.rotation.y=n,H.add(r)}H.add(Q(5.4,.5,.3,T,{x:0,y:.25,z:fe+.5})),h.add(H);let U=new W;U.add(Q(11,3.2,.2,S,{rough:.7,x:0,y:1.5,z:ae-.05,map:ee,mapRepeat:[4,1.4]})),U.add(Q(5.8,.14,.12,C,{x:0,y:2.9000000000000004,z:-3.5})),U.add(Q(5.8,.14,.12,C,{x:0,y:ce-1.35,z:-3.5})),U.add(Q(.14,2.84,.12,C,{x:-2.8,y:ce,z:-3.5})),U.add(Q(.14,2.84,.12,C,{x:2.8,y:ce,z:-3.5})),U.add(Q(.09,2.6,.09,C,{x:0,y:ce,z:-3.49})),U.add(Q(5.4,.5,.3,T,{x:0,y:.25,z:-3.35}));let ve=new W;ve.add(Q(2.4,.9,.55,T,{rough:.42,y:.45,z:0})),ve.add(Q(2.46,.06,.58,E,{rough:.3,y:.91,z:0}));for(let e of[-.62,0,.62])ve.add(Q(.66,.72,.03,`#4a3120`,{x:e,y:.45,z:.285}));for(let e of[-.62,0,.62])ve.add(Q(.05,.04,.05,`#caa15a`,{x:e+.2,y:.45,z:.31,metal:.6}));let be=[`#7a3a2a`,`#2a4a6a`,`#b08a3a`,`#3a5a3a`];for(let e=0;e<4;e++)ve.add(Q(.1,.26+e%2*.05,.2,be[e],{x:-.95+e*.13,y:1.07,z:-.06}));ve.add(Q(.04,.34,.42,`#241a12`,{x:.7,y:1.12,z:-.02})),ve.position.set(-3.9,0,-3.25),U.add(ve),U.add(sr({w:2.8,d:.95,x:-3.9,y:.02,z:-3.25,opacity:.45}));for(let[e,t]of[[-3.55,-1],[3.55,1]]){let r=new W,i=new v(new d(.78,.98),new n({map:Er(t),roughness:.82}));i.position.z=.05,r.add(Q(.06,1.12,.92,`#241a10`,{}),i),r.position.set(e,1.45,-3.5700000000000003),U.add(r)}for(let e of[-3.55,3.55]){U.add(Q(.16,.32,.13,`#2a1c10`,{x:e,y:2.35,z:-3.5}));let t=new ue(new V({map:Tr(),color:`#ffcf8a`,transparent:!0,opacity:.5,depthWrite:!1,blending:2}));t.scale.set(.55,.7,1),t.position.set(e,2.5,-3.42),t.raycast=()=>{},U.add(t)}U.visible=!1,h.add(U),h.add(Q(.4,.06,.4,`#1a130c`,{y:2.94,z:1.3}));let xe=new v(new M(.16,20),new G({color:`#ffe6b0`,toneMapped:!1}));xe.position.set(0,2.9,1.3),xe.rotation.x=Math.PI/2,h.add(xe);for(let[e,t]of[[-1.6,-1],[1.6,-1],[-1.6,-2.6],[1.6,-2.6],[0,-2.6]]){h.add(Q(.28,.05,.28,`#1a130c`,{y:2.95,x:e,z:t}));let n=new v(new M(.1,16),new G({color:`#ffe6b0`,toneMapped:!1}));n.position.set(e,2.915,t),n.rotation.x=Math.PI/2,n.raycast=()=>{},h.add(n)}h.add(br(x,{x:-3.46,y:2.15,z:.2,ry:Math.PI/2,face:`#efe2c8`,rim:`#2a1c10`})),h.add(Q(3.4,.03,2.4,`#3a1410`,{rough:.98,x:0,y:.012,z:1.95})),h.add(Q(3,.04,2,`#6e2a26`,{rough:.96,x:0,y:.02,z:1.95}));let Se=new W;Se.add(Q(.32,.32,.32,`#7a4a2a`,{rough:.8,y:.16}));for(let e=0;e<6;e++){let t=Q(.05,.55,.13,`#356a32`,{rough:.7,y:.32});t.geometry.translate(0,.27,0),t.rotation.z=(e/6-.5)*1.1,t.rotation.x=Math.sin(e*1.3)*.22,Se.add(t)}Se.position.set(2.7,0,.4),h.add(Se),h.add(sr({w:.7,d:.7,x:2.7,y:.03,z:.4,opacity:.45})),g.add(Q(11,.2,11,`#403d38`,{rough:.85,y:-.1})),g.add(Q(11,.2,11,`#1c1a17`,{rough:.95,y:2.8})),g.add(Q(7,3,.2,D,{rough:.92,x:0,y:1.4,z:-2.9})),g.add(Q(.2,3,6,D,{rough:.92,x:-3.2,y:1.4,z:-.2})),g.add(Q(.2,3,6,D,{rough:.92,x:3.2,y:1.4,z:-.2}));for(let e of[-1.6,-.4]){let t=new v(new L(.07,.07,6,10),new n({color:`#6b6258`,roughness:.6,metalness:.4}));t.rotation.z=Math.PI/2,t.position.set(0,2.62,e),g.add(t)}let Ce=new G({color:`#ffffff`,toneMapped:!1}),we=new v(new d(1.9,1.2),Ce);we.position.set(0,1.5,-2.79),g.add(we),g.add(Q(2.06,1.36,.06,`#241a12`,{x:0,y:1.5,z:-2.83})),g.add(Q(.04,.34,.04,`#1a1410`,{x:-.1,y:2.45,z:-.4}));let Te=new v(new M(.1,16),new G({color:`#ffdb8a`,toneMapped:!1}));Te.position.set(-.1,2.26,-.4),Te.rotation.x=Math.PI/2,g.add(Te);let Ee=new W;Ee.add(Q(1.3,.05,.32,`#3a2c1e`,{x:0,y:0,z:0}));let De=[`#7a3a2a`,`#2a4a6a`,`#b08a3a`,`#3a5a3a`,`#6a2a4a`];for(let e=0;e<8;e++)Ee.add(Q(.12,.34,.24,De[e%De.length],{x:-.55+e*.14,y:.2,z:0}));Ee.position.set(-2.3,1.5,-2.66),g.add(Ee);let Oe=new W;Oe.add(Q(.34,.34,.34,`#7a4a2a`,{y:.17}));let ke=new W;for(let e=0;e<6;e++){let t=Q(.05,.5,.14,`#3a7a3a`,{rough:.7});t.geometry.translate(0,.25,0),t.rotation.z=(e/6-.5)*1.2,t.rotation.x=Math.sin(e)*.25,ke.add(t)}ke.position.y=.34,Oe.add(ke),Oe.position.set(2.45,0,-1.4),g.add(Oe),g.add(br(x,{x:1.9,y:2.1,z:-2.78,ry:0,face:`#d8d2c4`,rim:`#1a130c`}));let Ae=new W;Ae.add(Q(3.4,.12,1.5,E,{rough:.32,y:.86,z:1.5,map:ee,mapRepeat:[3,1.4]})),Ae.add(Q(3.2,.78,1.36,T,{y:.46,z:1.5,map:ee,mapRepeat:[3,1]}));for(let e of[.66,.4,.14])Ae.add(Q(.9,.2,.04,`#4a3120`,{x:1.05,y:e,z:2.2}));Ae.add(Q(.12,.04,.04,`#caa15a`,{x:1.05,y:.66,z:2.23,metal:.6}));let je=new v(new L(.05,.045,.1,16),new n({color:`#d8cbb4`,roughness:.6}));je.position.set(-.55,.97,1.95);let Me=new v(new oe(.035,.012,8,14),new n({color:`#d8cbb4`,roughness:.6}));Me.position.set(-.61,.97,1.95),Me.rotation.y=Math.PI/2,Ae.add(je,Me);let Ne=new ue(new V({map:Tr(),color:`#fff4e0`,transparent:!0,opacity:0,depthWrite:!1,blending:2}));Ne.scale.set(.12,.18,1),Ne.position.set(-.55,1.05,1.95),Ne.raycast=()=>{},Ae.add(Ne),Ae.add(Q(.26,.03,.34,`#efe7d4`,{rough:.85,x:.5,y:.935,z:1.9})),m.add(Ae);let K=new W;K.add(Q(.06,.5,.06,`#2a1c10`,{x:-1.15,y:1.15,z:1.6}));let Pe=new v(new se(.22,.26,16,1,!0),new n({color:`#c2802e`,roughness:.5,side:2,emissive:`#3a2208`,emissiveIntensity:.6}));Pe.position.set(-1.15,1.42,1.6),K.add(Pe);let Fe=new de(`#ffb15a`,7,7,1.8);Fe.position.set(-1.15,1.34,1.6),K.add(Fe);let Ie=new ue(new V({map:Tr(),color:`#ffcf8a`,transparent:!0,opacity:.55,depthWrite:!1,blending:2}));Ie.scale.set(.85,.85,1),Ie.position.set(-1.15,1.35,1.6),Ie.raycast=()=>{},K.add(Ie),K.position.x=-.3,m.add(K);let Le=new W;Le.add(Q(.62,.03,.42,`#1c1c20`,{y:.93,z:1.5,metal:.4,rough:.4}));let Re=new v(new O(.62,.4,.025),new n({color:`#0a0c10`,emissive:`#2a4a6a`,emissiveIntensity:.7,roughness:.3}));Re.position.set(0,1.14,1.31),Re.rotation.x=-.32,Le.add(Re),Le.userData.role=`laptop`,m.add(Le);let ze=new W;ze.add(Q(.26,.07,.34,`#15151a`,{x:1,y:.93,z:1.5}));let Be=Q(.3,.06,.08,`#101015`,{x:1,y:1,z:1.34,emissive:`#234a6a`,emissiveIntensity:.4});ze.add(Be),ze.userData.role=`phone`,m.add(ze);let Ve=new a(`#8a6a42`,`#1c130a`,.78);r.add(Ve);let He=new k(`#ffd9a0`,9,9,.7,.5,1.2);He.position.set(0,2.95,1.3),He.target.position.set(0,.86,1.5),r.add(He,He.target);let Ue=xr(!1),We=xr(!0),Ge=.62,Ke=1.32,qe=1.22,q=1.78,J=new ue(new V({map:Ue,transparent:!0,depthWrite:!1}));J.scale.set(Ge,Ge,1),J.position.set(Ke,qe,q),J.userData.role=`cat`,m.add(J);let Je=new ue(new V({map:Cr(),transparent:!0,depthWrite:!1,opacity:0}));Je.scale.set(.3,.3,1),Je.raycast=()=>{},m.add(Je);let Y=0;function Ye(){Y=1.3}let Xe=-.95,Ze=1.06,Qe=1.95,$e=.62,et=.42,tt=.34,X=new W;X.position.set(Xe,Ze,Qe),X.add(Q($e,.05,tt,`#3a3026`,{y:-.19}));let nt=new v(new O($e-.04,et-.08,tt-.04),new n({color:`#1f9fc0`,transparent:!0,opacity:.26,roughness:.1,emissive:`#0a3a4a`,emissiveIntensity:.4,depthWrite:!1}));nt.position.y=.02,X.add(nt);for(let e of[-1,1])for(let t of[-1,1])X.add(Q(.03,et,.03,`#20262c`,{x:e*($e/2-.015),z:t*(tt/2-.015),metal:.5}));let rt=new v(new O($e,et,tt),new G({visible:!1}));rt.userData.role=`tank`,X.add(rt);let it=new de(`#5fd8ff`,0,3,2);X.add(it);let at=[wr(`#e8a23c`),wr(`#d85a6a`),wr(`#6cc0e0`)],ot=[],st=et/2-.12;for(let e=0;e<3;e++){let t=new ue(new V({map:at[e],transparent:!0,depthWrite:!1})),n=.15-e*.015;t.userData={sz:n,sp:.6+e*.22,ph:e*2.1,ax:.21*(.7+.1*e),ay:st,az:.09000000000000001,prevx:0},t.scale.set(n,n,1),ot.push(t),X.add(t)}let ct=Tr(),lt=[];for(let e=0;e<5;e++){let t=new ue(new V({map:ct,color:`#cfeffb`,transparent:!0,opacity:.5,depthWrite:!1}));t.userData={ph:e/5,sp:.16+Math.random()*.06,x:-.1+e%3*.07},t.scale.setScalar(.03+e%2*.015),t.raycast=()=>{},lt.push(t),X.add(t)}let ut=new ue(new V({map:ct,color:`#c8a24a`,transparent:!0,opacity:0,depthWrite:!1}));ut.scale.setScalar(.04),ut.raycast=()=>{},X.add(ut);let dt=0;function ft(){dt=3,ut.position.set(-.05,st,0),ut.material.opacity=1}m.add(X);let pt=new W;for(let e=0;e<8;e++){let t=new ue(new V({map:ct,color:`#ffd9a0`,transparent:!0,opacity:0,depthWrite:!1,blending:2}));t.scale.setScalar(.018),t.userData={ph:e*.9,sp:.1+e%3*.04,r:.1+e%4*.03},t.raycast=()=>{},pt.add(t)}pt.position.set(-1.45,1.2,1.6),m.add(pt);let mt=new W,ht=.925;mt.add(sr({w:4,d:2,x:0,y:.045,z:1.55,opacity:.5})),mt.add(sr({w:.95,d:.62,x:0,y:ht,z:1.42,opacity:.42})),mt.add(sr({w:.3,d:.3,x:-.55,y:ht,z:1.95,opacity:.4})),mt.add(sr({w:.42,d:.46,x:.5,y:ht,z:1.9,opacity:.35})),mt.add(sr({w:.42,d:.46,x:1,y:ht,z:1.5,opacity:.42})),mt.add(sr({w:.7,d:.42,x:Xe,y:ht,z:1.95,opacity:.42})),mt.add(sr({w:.55,d:.4,x:1.32,y:ht,z:1.78,opacity:.4})),mt.add(sr({w:.34,d:.34,x:-1.45,y:ht,z:1.6,opacity:.35})),m.add(mt),[Ae,K,Le,ze,J,X,pt,mt].forEach(e=>y.add(e));function gt(e,t,n,r,i,a,o){let s=new v(new O(t,n,r),new G({visible:!1}));s.position.set(i,a,o),s.userData.role=e,b.add(s)}gt(`laptop`,.95,.6,.7,0,1.05,1.4),gt(`phone`,.5,.4,.5,1,.98,1.42),gt(`cat`,.62,.74,.5,Ke,qe,q),gt(`tank`,$e,et,.5,Xe,Ze,Qe);let _t=yr(),vt={dressed2:new j().load(fr),night2:new j().load(pr),modern:new j().load(mr),charm:new j().load(hr)},yt=[`dressed2`,`night2`,`modern`,`charm`];for(let e of yt)vt[e].colorSpace=P;let bt=_r(),xt=new v(new d(1,1),new G({map:vt.dressed2,alphaMap:bt,transparent:!0,toneMapped:!1}));xt.position.set(0,1.45,-5),xt.visible=!1,xt.raycast=()=>{},r.add(xt);let St=dr({strength:.5});r.add(St);let Ct=`3d`,wt=`painted`;function Tt(){let e=Lt===`corner`,t=Ct!==`3d`,n=t&&wt===`painted`;h.visible=e&&!t,g.visible=!e&&!t,_.visible=t||e,xt.visible=t,y.visible=!n,Ft()}function Et(e){return Ct=yt.includes(e)?e:`3d`,Ct!==`3d`&&(xt.material.map=vt[Ct],xt.material.needsUpdate=!0),Tt(),Ct}function Dt(e){return wt=e===`3d`?`3d`:`painted`,Tt(),wt}let Ot=Fe.intensity,kt=Re.material.emissiveIntensity,At=new B;function jt(e,t,n){let r=n?n.windowGlow:0,a=r>.55;J.material.map=a?We:Ue,Y>0&&(Y=Math.max(0,Y-e));let s=Y>0?Math.sin((1.3-Y)/1.3*Math.PI):0,d=a?.012*Math.sin(t*1.2):.03*Math.sin(t*2.4);J.scale.set(Ge,Ge*(1+d+.12*s),1),J.position.y=qe+.06*s,Je.material.opacity=s,Je.position.set(Ke,1.72+.5*(1-Y/1.3),q),Je.scale.setScalar(.22+.1*s),dt>0&&(dt=Math.max(0,dt-e),ut.position.y=Math.max(-.09,ut.position.y-e*.06),ut.material.opacity=dt>.3?1:dt/.3);for(let e of ot){let n=e.userData,r=Math.sin(t*n.sp+n.ph)*n.ax,i=Math.sin(t*n.sp*.8+n.ph*1.7)*n.ay*.7,a=Math.cos(t*n.sp*.6+n.ph)*n.az,o=dt>0?ut.position.x:r,s=dt>0?ut.position.y:i,c=dt>0?ut.position.z:a,l=dt>0?.05:.1;e.position.x+=(o-e.position.x)*l,e.position.y+=(s-e.position.y)*l,e.position.z+=(c-e.position.z)*l,e.scale.x=(e.position.x>=n.prevx?1:-1)*n.sz,n.prevx=e.position.x}for(let e of lt){let n=(t*e.userData.sp+e.userData.ph)%1;e.position.set(e.userData.x+Math.sin(t*2+e.userData.ph*9)*.015,-.09+2*st*n,.02),e.material.opacity=.5*Math.sin(n*Math.PI)}it.intensity=2.6*r,nt.material.emissiveIntensity=.4+.9*r,Fe.intensity=Ot*(.97+.03*Math.sin(t*7)*Math.sin(t*2.3)),Re.material.emissiveIntensity=kt*(.85+.15*Math.sin(t*3.1+1)),Be.material.emissiveIntensity=.4*(.65+.35*Math.sin(t*2.2)),At.setRGB(1,.85,.62),pt.children.forEach((e,n)=>{let i=e.userData,a=(t*i.sp+i.ph)%1;e.position.set(Math.cos(t*.5+i.ph*5)*i.r,-.15+a*.45,Math.sin(t*.4+i.ph*5)*i.r),e.material.opacity=(.1+.18*r)*Math.sin(a*Math.PI)});let m=t*.4%1;Ne.position.y=1.04+m*.22,Ne.position.x=-.55+Math.sin(t*1.5)*.02,Ne.material.opacity=.26*Math.sin(m*Math.PI),Ne.scale.set(.1+m*.08,.16+m*.12,1),ke.rotation.z=Math.sin(t*.8)*.05,ke.rotation.x=Math.sin(t*.6+1)*.04;let h=n?n.t%1:0;for(let e of x)e.rotation.z=-h*Math.PI*2;if(_t.update(e),xt.visible){let e=i.position.z-xt.position.z,t=2*Math.tan(o.degToRad(i.fov)*.5)*e*1.18;xt.scale.set(t*i.aspect,t,1);let n=.55+.45*(1-r);xt.material.color.setRGB(n,n*.97,n*.92)}i.position.set(c.x+Math.sin(t*.5)*.04,c.y+Math.sin(t*.7)*.02,c.z),i.lookAt(l),u.update(e),f.set(u.pitch,u.yaw,0,`YXZ`),i.quaternion.multiply(p.setFromEuler(f)),St.fit(i)}function Mt(e,t=e){R.map=e,ie.map=t,R.needsUpdate=!0,ie.needsUpdate=!0}function Nt(e){he.map=e,he.needsUpdate=!0}let Pt=`corner`;function Ft(){let e=Pt===`corner`;pe.visible=me.visible=e,_e.visible=!e||Ct!==`3d`,H.visible=e,U.visible=!e}function Z(e){return Pt=e===`straight-on`?`straight-on`:`corner`,Ft(),Pt}function It(e){Ce.map=e,Ce.needsUpdate=!0}let Lt=e;function Rt(e){Lt=e===`basement`?`basement`:`corner`;let t=Lt===`corner`;return Tt(),He.intensity=t?9:3.2,Ve.intensity=t?.78:.82,Ve.color.set(t?`#6a5238`:`#7a5a34`),Lt}return Rt(Lt),Z(t),{scene:r,camera:i,update:jt,setCityTexture:Mt,setStraightCityTexture:Nt,setVignetteTexture:It,setFitout:Rt,setSkin:Et,setProps:Dt,setLayout:Z,petCat:Ye,feedFish:ft,look:u,vignette:_t,get interactables(){return Ct!==`3d`&&wt===`painted`?b.children:[Le,ze,J,rt]},get tier(){return Lt},get skin(){return Ct},get props(){return wt},get layout(){return Pt}}}function yr(){let e=new ge;e.background=new B(`#7fb0dd`);let t=new x(-1.4,1.4,.9,-.9,0,10);t.position.set(0,0,5);let n=(e,t={})=>new G({color:e,toneMapped:!1,...t}),r=(e,t,r,i,a,o,s)=>{let c=new v(new d(e,t),n(o,s));return c.position.set(r,i,a),c};e.add(r(3.2,.9,.5,-.95,1,`#2a4a30`)),e.add(r(3.2,.7,-.7,-1.05,2,`#1d3724`)),e.add(r(.06,.3,-.95,-.55,3,`#3a2a1a`));let i=new v(new M(.22,18),n(`#234a2a`));i.position.set(-.95,-.32,3),e.add(i),e.add(r(.04,.55,.9,-.55,3,`#20242a`));let a=new v(new M(.1,16),n(`#ffd98a`,{transparent:!0,opacity:0}));a.position.set(.9,-.26,3.1),e.add(a);let s=new v(new M(.16,24),n(`#fff4d8`));e.add(s);let c=[];for(let[t,r]of[[-1,.5],[-.6,.7],[.2,.6],[.7,.72],[1.05,.45],[-.2,.78],[.45,.4]]){let i=new v(new M(.015,8),n(`#ffffff`,{transparent:!0,opacity:0}));i.position.set(t,r,.5),c.push(i),e.add(i)}let l=new B(`#141d33`),u=new B(`#7fb6e0`),f=new B(`#d6824a`),p=new B(`#fff0cc`),m=new B(`#cdd8ef`),h=.34;function g(t){h=(h+t*.04)%1;let n=h*Math.PI*2,r=-Math.cos(n);s.position.set(Math.sin(n)*1.15,r*.66+.06,0);let i=o.smoothstep(r,-.18,.5),d=o.smoothstep(.32,0,Math.abs(r));e.background.copy(l).lerp(u,i).lerp(f,d*.45),s.material.color.copy(r>0?p:m),a.material.opacity=1-i;let g=(1-i)*.85;for(let e of c)e.material.opacity=g}return{scene:e,camera:t,update:g}}function br(e,{x:t,y:r,z:i,ry:a=0,face:o=`#efe2c8`,rim:s=`#2a1c10`}){let c=new W,l=new v(new M(.2,28),new n({color:s,roughness:.6})),u=new v(new M(.17,28),new n({color:o,roughness:.7}));u.position.z=.01;let f=new v(new d(.018,.14),new n({color:`#1a130c`,roughness:.5}));return f.geometry.translate(0,.05,0),f.position.z=.02,e.push(f),c.add(l,u,f),c.position.set(t,r,i),c.rotation.y=a,c}function xr(e){let t=document.createElement(`canvas`);t.width=t.height=128;let n=t.getContext(`2d`),r=`#e08a3c`,i=`#b96a26`,a=`#3a2410`;if(n.lineJoin=`round`,e){n.fillStyle=r,n.beginPath(),n.ellipse(64,78,44,26,0,0,7),n.fill(),n.fillStyle=i,n.beginPath(),n.ellipse(64,86,44,16,0,0,7),n.fill(),n.fillStyle=r,n.beginPath(),n.arc(36,70,20,0,7),n.fill(),n.fillStyle=r,Sr(n,24,56,34,44,42,58),Sr(n,40,54,50,44,54,60),n.strokeStyle=i,n.lineWidth=7,n.lineCap=`round`,n.beginPath(),n.moveTo(100,70),n.quadraticCurveTo(112,90,88,96),n.stroke(),n.strokeStyle=a,n.lineWidth=2.5,n.beginPath(),n.arc(30,70,5,.1,Math.PI-.1),n.stroke(),n.strokeStyle=i,n.lineWidth=3;for(let e of[60,74,88])n.beginPath(),n.moveTo(e,58),n.lineTo(e,70),n.stroke()}else{n.fillStyle=r,n.beginPath(),n.ellipse(64,86,30,34,0,0,7),n.fill(),n.fillStyle=`#f3c98a`,n.beginPath(),n.ellipse(64,92,14,22,0,0,7),n.fill(),n.strokeStyle=i,n.lineWidth=8,n.lineCap=`round`,n.beginPath(),n.moveTo(92,100),n.quadraticCurveTo(116,86,104,60),n.stroke(),n.fillStyle=r,n.beginPath(),n.arc(64,48,24,0,7),n.fill(),n.fillStyle=r,Sr(n,44,34,50,18,60,34),Sr(n,84,34,78,18,68,34),n.fillStyle=`#f0b0c0`,Sr(n,47,30,50,22,56,32),Sr(n,81,30,78,22,72,32),n.fillStyle=a,n.beginPath(),n.arc(55,47,3.4,0,7),n.arc(73,47,3.4,0,7),n.fill(),n.fillStyle=`#e06a7a`,Sr(n,61,54,67,54,64,58),n.strokeStyle=a,n.lineWidth=1.6;for(let e of[-2,3])n.beginPath(),n.moveTo(50,55+e),n.lineTo(34,53+e),n.moveTo(78,55+e),n.lineTo(94,53+e),n.stroke();n.strokeStyle=i,n.lineWidth=3;for(let e of[78,90,102])n.beginPath(),n.moveTo(50,e),n.lineTo(78,e),n.stroke()}let o=new A(t);return o.colorSpace=P,o}function Sr(e,t,n,r,i,a,o){e.beginPath(),e.moveTo(t,n),e.lineTo(r,i),e.lineTo(a,o),e.closePath(),e.fill()}function Cr(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`);t.fillStyle=`#ff5a8a`,t.beginPath(),t.moveTo(32,52),t.bezierCurveTo(6,32,14,10,32,24),t.bezierCurveTo(50,10,58,32,32,52),t.fill();let n=new A(e);return n.colorSpace=P,n}function wr(e){let t=document.createElement(`canvas`);t.width=t.height=64;let n=t.getContext(`2d`);n.fillStyle=e,n.beginPath(),n.ellipse(30,32,18,11,0,0,7),n.fill(),n.beginPath(),n.moveTo(46,32),n.lineTo(60,22),n.lineTo(60,42),n.closePath(),n.fill(),n.fillStyle=`rgba(255,255,255,0.35)`,n.beginPath(),n.ellipse(28,36,12,5,0,0,7),n.fill(),n.fillStyle=`#15212a`,n.beginPath(),n.arc(20,30,2.6,0,7),n.fill();let r=new A(t);return r.colorSpace=P,r}function Tr(){let e=document.createElement(`canvas`);e.width=e.height=32;let t=e.getContext(`2d`),n=t.createRadialGradient(16,16,0,16,16,16);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.6,`rgba(255,255,255,0.7)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.beginPath(),t.arc(16,16,16,0,7),t.fill();let r=new A(e);return r.colorSpace=P,r}function Er(e){let t=document.createElement(`canvas`);t.width=t.height=256;let n=t.getContext(`2d`),r=n.createLinearGradient(0,0,256,256);e<0?(r.addColorStop(0,`#6a3b1c`),r.addColorStop(1,`#caa15a`)):(r.addColorStop(0,`#3a4a6a`),r.addColorStop(1,`#a86a3a`)),n.fillStyle=r,n.fillRect(0,0,256,256),n.globalAlpha=.5;for(let e=0;e<5;e++)n.fillStyle=e%2?`#2a1c10`:`#e0c080`,n.fillRect(30+e*36,40+e%3*30,26,150);let i=new A(t);return i.colorSpace=P,i}var{Timer:Dr}=fe,Or=new URLSearchParams(window.location.search),kr=Or.get(`demo`)===`1`||Or.has(`capture`);window.__demo=kr;var Ar=(Or.get(`city`)?Number(Or.get(`city`)):0)||Math.random()*1e9|0,jr=0,Mr=er({demo:kr,citySeed:Ar,profileIndex:jr}),{renderer:Nr,rig:Pr,sunRig:Fr,city:Ir,cityLife:Lr,waterMaterial:Rr,fitShadowFrustum:zr,landmarkFactory:Br,renderCityBeautyTo:Vr}=Mr,$=vr({tier:`corner`});typeof window<`u`&&(window.__office=$),$.camera.aspect=window.innerWidth/window.innerHeight,$.camera.updateProjectionMatrix();var Hr=!0;window.__shadows=Hr,window.__scene=`office`;var Ur={minFilter:m,magFilter:m,depthBuffer:!0,stencilBuffer:!1},Wr=new N(2.2,3.4,11.5),Gr=new N(0,2,0).sub(Wr),Kr=new N(0,1,0),qr=30,Jr=384/320,Yr=o.radToDeg(2*Math.atan(Math.tan(o.degToRad(qr))/Jr));function Xr(e){let t=new s(Yr,Jr,.1,100);t.position.copy(Wr);let n=Gr.clone().applyAxisAngle(Kr,o.degToRad(e));return t.lookAt(Wr.clone().add(n)),t}var Zr=Xr(30),Qr=Xr(-30),$r=new F(384,320,Ur),ei=new F(384,320,Ur);$.setCityTexture($r.texture,ei.texture);var ti=new s(52,540/320,.1,100);ti.position.copy(Wr),ti.lookAt(Wr.clone().add(Gr));var ni=new F(540,320,Ur);$.setStraightCityTexture(ni.texture);var ri=0,ii=3,ai=new F(512,320,{minFilter:m,magFilter:m,depthBuffer:!0,stencilBuffer:!1});$.setVignetteTexture(ai.texture);var oi=!1,si=(()=>{if(typeof document>`u`)return{showLap(){},toast(){},flash(){}};let e=document.createElement(`style`);e.textContent=`
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
    </div></div>`;let n=document.createElement(`div`);n.className=`otoast`;let r=document.createElement(`div`);r.className=`oflash`,document.body.append(t,n,r),t.querySelector(`.lap-x`).addEventListener(`click`,()=>li()),t.addEventListener(`click`,e=>{e.target===t&&li()}),t.addEventListener(`click`,e=>{e.target.closest(`button`)&&navigator.vibrate?.(10)});let i=0;return{showLap(e){t.classList.toggle(`on`,e)},toast(e){n.textContent=e,n.classList.add(`on`),clearTimeout(i),i=setTimeout(()=>n.classList.remove(`on`),1400)},flash(){r.style.transition=`none`,r.style.opacity=`0.85`,requestAnimationFrame(()=>{r.style.transition=`opacity .55s`,r.style.opacity=`0`})}}})();function ci(){oi=!0,si.showLap(!0)}function li(){oi=!1,si.showLap(!1)}function ui(){jr=(jr+1)%Ze.length,si.flash(),Ir.generate(Ar,jr),Rr.uniforms.uVecWater.value.set(Ir.waterColor),Lr.setProfile(Ir.state.profile),zr(),si.toast(`✈  `+Ir.state.profile.name),window.__profile=Ir.state.profile.key}function di(e){let t=$.setFitout(e);return si.toast(t===`basement`?`🏚  Basement office`:`🏙  Corner office`),window.__tier=t,t}function fi(){return di($.tier===`corner`?`basement`:`corner`)}window.__tier=$.tier;var pi=[`3d`,`dressed2`,`night2`,`modern`,`charm`],mi={"3d":`🧊  Stylized 3D office`,dressed2:`📚  Dressed office (day)`,night2:`🌙  Night office`,modern:`🏙  Modern office (day)`,charm:`🎨  Charm office`};function hi(e){let t=$.setSkin(e);return window.__officeSkin=t,si.toast(mi[t]),t}function gi(){return hi(pi[(pi.indexOf($.skin)+1)%pi.length])}window.__officeSkin=$.skin;var _i={painted:`🎨  Painted props (cohesive)`,"3d":`🧊  Live 3D props (animated)`};function vi(e){let t=$.setProps(e);return window.__officeProps=t,$.skin!==`3d`&&si.toast(_i[t]),t}function yi(){return vi($.props===`painted`?`3d`:`painted`)}window.__officeProps=$.props;var bi={corner:`🏙  Corner window`,"straight-on":`🖼  Straight-on window`};function xi(e){let t=$.setLayout(e);return window.__officeLayout=t,si.toast(bi[t]),t}function Si(){return xi($.layout===`corner`?`straight-on`:`corner`)}window.__officeLayout=$.layout;var Ci=new _,wi=new H,Ti=(e,t)=>{wi.x=e/window.innerWidth*2-1,wi.y=-(t/window.innerHeight)*2+1};function Ei(){Ci.setFromCamera(wi,$.camera);let e=Ci.intersectObjects($.interactables,!0)[0];if(!e)return null;let t=e.object;for(;t&&!t.userData.role;)t=t.parent;return t?t.userData.role:null}function Di(e){e===`laptop`?ci():e===`phone`?ui():e===`cat`?$.petCat():e===`tank`&&$.feedFish()}var Oi=6,ki=0,Ai=0,ji=0,Mi=0,Ni=0,Pi=!1,Fi=!1;Nr.domElement.style.cursor=`grab`,Nr.domElement.addEventListener(`mousedown`,e=>{Pi=!0,Fi=!1,ki=Mi=e.clientX,Ai=Ni=e.clientY,ji=performance.now()}),window.addEventListener(`mousemove`,e=>{Pi?(!Fi&&Math.hypot(e.clientX-ki,e.clientY-Ai)>Oi&&(Fi=!0),Fi&&($.look.addDrag(e.clientX-Mi,e.clientY-Ni),Nr.domElement.style.cursor=`grabbing`),Mi=e.clientX,Ni=e.clientY):(Ti(e.clientX,e.clientY),Nr.domElement.style.cursor=Ei()?`pointer`:`grab`)}),window.addEventListener(`mouseup`,e=>{if(Pi&&!Fi&&!oi){Ti(e.clientX,e.clientY);let t=Ei();t&&Di(t)}Pi=!1,Fi=!1,Nr.domElement.style.cursor=`grab`});var Ii=!1;Nr.domElement.addEventListener(`touchstart`,e=>{e.touches.length===1&&(ki=Mi=e.touches[0].clientX,Ai=Ni=e.touches[0].clientY,ji=performance.now(),Ii=!1)},{passive:!0}),Nr.domElement.addEventListener(`touchmove`,e=>{if(e.touches.length!==1)return;let t=e.touches[0].clientX,n=e.touches[0].clientY;!Ii&&Math.hypot(t-ki,n-Ai)>8&&(Ii=!0),Ii&&$.look.addDrag(t-Mi,n-Ni),Mi=t,Ni=n},{passive:!0}),window.addEventListener(`touchend`,e=>{if(!Ii&&performance.now()-ji<350&&(!e.touches||e.touches.length===0)&&!oi){let e=Ei();e&&Di(e)}Ii=!1});var Li={left:!1,right:!1,up:!1,down:!1},Ri={ArrowLeft:`left`,ArrowRight:`right`,ArrowUp:`up`,ArrowDown:`down`};window.addEventListener(`keydown`,e=>{if(Ri[e.key]){Li[Ri[e.key]]=!0,e.preventDefault();return}e.key===`Escape`&&(oi?li():$.look.recenter()),(e.key===`f`||e.key===`F`)&&fi(),(e.key===`j`||e.key===`J`)&&gi(),(e.key===`u`||e.key===`U`)&&yi(),(e.key===`t`||e.key===`T`)&&Fr.cyclePreset(),(e.key===`h`||e.key===`H`)&&(Hr=!Hr,window.__shadows=Hr),(e.key===`w`||e.key===`W`)&&Si()}),window.addEventListener(`keyup`,e=>{Ri[e.key]&&(Li[Ri[e.key]]=!1)}),Br.whenReady.then(()=>{Ir.generate(Ar,jr),zr(),window.__cityReady=!0}),Or.get(`office`)===`basement`&&di(`basement`);var zi=Or.get(`officeskin`);pi.includes(zi)&&hi(zi);var Bi=Or.get(`officeprops`);[`painted`,`3d`].includes(Bi)&&vi(Bi);var Vi=Or.get(`officelayout`);[`corner`,`straight-on`].includes(Vi)&&xi(Vi);var Hi=new Dr;Hi.connect(document);function Ui(){Hi.update();let e=Math.min(Hi.getDelta(),.1);Pr.update(e),Mr.updateWorld(e,Hi.getElapsed(),{shadowsOn:Hr,seasonTarget:0}),$.look.addKeys(e,Li),$.update(e,Hi.getElapsed(),Fr),window.__lookYaw=$.look.yaw,window.__lookPitch=$.look.pitch,$.tier===`basement`?(Nr.setRenderTarget(ai),Nr.render($.vignette.scene,$.vignette.camera)):ri%ii===0&&($.layout===`straight-on`?Vr(ti,ni):(Vr(Zr,$r),Vr(Qr,ei),$.skin!==`3d`&&Vr(ti,ni))),ri++,Nr.setRenderTarget(null),Nr.render($.scene,$.camera),requestAnimationFrame(Ui)}Ui(),ir({key:`office`,title:`The Office`,tips:[`Drag to look around the office (or use the arrow keys)`,`Click / tap the LAPTOP to open the game panel`,`Tap the PHONE to travel to another city · pet the CAT · feed the FISH`,`Esc exits · F fitout · J skin · U props · W window · T time`]}),window.addEventListener(`resize`,()=>{Mr.resize(),$.camera.aspect=window.innerWidth/window.innerHeight,$.camera.updateProjectionMatrix()});