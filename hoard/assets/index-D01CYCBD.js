import{$ as e,A as t,B as n,C as r,D as i,E as a,F as o,G as s,H as c,I as l,J as u,K as d,L as f,M as p,N as m,O as h,P as g,Q as _,R as v,S as y,T as b,U as x,V as S,W as C,X as w,Y as T,Z as E,_ as D,a as O,at as k,b as ee,c as A,ct as j,d as M,et as N,f as te,g as ne,h as P,i as F,it as re,j as ie,k as I,l as ae,lt as L,m as R,n as oe,nt as z,o as B,ot as V,p as H,q as se,r as ce,rt as le,s as ue,st as de,t as fe,tt as pe,u as me,ut as U,v as he,w as W,x as ge,y as _e,z as G}from"./three-D9vUaDPs.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var ve=Math.atan(1/Math.SQRT2),ye=Math.atan(.5),be=Math.PI/4,xe={PERSPECTIVE:4,ISOMETRIC:5,DIMETRIC:6},Se=.12,Ce=1.45,K=4,we=40,Te=1.5,q=16,Ee=6,J=22,De=3.5,Oe=11,ke=(e,t,n)=>e+(t-e)*(1-Math.exp(-8*n)),Ae=(e,t)=>e+Math.PI*2*Math.round((t-e)/(Math.PI*2));function je({aspect:e,fov:t=48,near:n=.1,far:r=100,target:i=new L(0,.8,0),azimuth:a=be,elevation:o=.52,distance:s=12,zoom:c=5.5}={}){let u=new d(t,e,n,r),f=new C(-1,1,1,-1,n,r),p=xe.PERSPECTIVE,m=e,h={azimuth:a,elevation:o,distance:s,zoom:c,target:i.clone()},g={azimuth:a,elevation:o,distance:s,zoom:c,target:i.clone()},_=!1,v=null,y=new L,b=()=>p===xe.PERSPECTIVE?u:f;function x(e){e!==p&&(p=e,p===xe.ISOMETRIC||p===xe.DIMETRIC?(h.elevation=p===xe.ISOMETRIC?ve:ye,h.azimuth=Ae(be,g.azimuth),_=!0):_=!1)}function S(e,t){h.azimuth+=e,_||(h.elevation=l.clamp(h.elevation+t,Se,Ce))}function w(e){p===xe.PERSPECTIVE?h.distance=l.clamp(h.distance*e,K,we):h.zoom=l.clamp(h.zoom*e,Te,q)}function T(e,t){let n=h.azimuth,r=p===xe.PERSPECTIVE?h.distance*.04:h.zoom*.08,i=new L(Math.cos(n),0,-Math.sin(n)),a=new L(-Math.sin(n),0,-Math.cos(n));h.target.addScaledVector(i,e*r),h.target.addScaledVector(a,t*r)}function E(e,t){m=e/t,u.aspect=m,u.updateProjectionMatrix()}function D(e){v&&(v(y),h.target.copy(y)),g.azimuth=ke(g.azimuth,h.azimuth,e),g.elevation=ke(g.elevation,h.elevation,e),g.distance=ke(g.distance,h.distance,e),g.zoom=ke(g.zoom,h.zoom,e),g.target.x=ke(g.target.x,h.target.x,e),g.target.y=ke(g.target.y,h.target.y,e),g.target.z=ke(g.target.z,h.target.z,e);let t=Math.cos(g.elevation),n=Math.sin(g.elevation),r=Math.cos(g.azimuth),i=Math.sin(g.azimuth),a=b();if(a.position.set(g.target.x+g.distance*t*i,g.target.y+g.distance*n,g.target.z+g.distance*t*r),a.lookAt(g.target),a.isOrthographicCamera){let e=g.zoom,t=e*m;a.left=-t,a.right=t,a.top=e,a.bottom=-e,a.updateProjectionMatrix()}}function O(e,t,n,r=!1){h.target.set(e,t,n),r&&g.target.copy(h.target)}function k(e,t=!1){h.zoom=l.clamp(e,Te,q),t&&(g.zoom=h.zoom)}function ee(e,{frame:t,snap:n=!1}={}){v=e,n&&(v(y),h.target.copy(y),g.target.copy(y)),t!=null&&(p===xe.PERSPECTIVE?h.distance=l.clamp(t,K,we):h.zoom=l.clamp(t,Te,q))}function A(){v=null}return{get camera(){return b()},get mode(){return p},get azimuth(){return g.azimuth},get following(){return!!v},setTarget:O,setZoom:k,setFollow:ee,clearFollow:A,get styleT(){return p===xe.PERSPECTIVE?l.clamp((g.distance-Ee)/(J-Ee),0,1):l.clamp((g.zoom-De)/(Oe-De),0,1)},setMode:x,orbit:S,zoomBy:w,pan:T,setViewport:E,update:D}}var Me={value:0},Ne=new H(`#ffffff`),Pe={value:0},Fe={value:0},Ie={value:0},Le=new j,Re={value:0},ze={value:0},Be=`
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
`;function Ve(e){e.uniforms.uVector=Me,e.uniforms.uVecTint={value:Ne},e.uniforms.uVecShadow=Pe,e.uniforms.uSnow=Fe,e.uniforms.uCloud=Ie,e.uniforms.uCloudOff={value:Le},e.uniforms.uFogCharm=Re}function He(e){return e.replace(`#include <fog_fragment>`,`
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
  `)}function Ue(e){return e.replace(`#include <common>`,`#include <common>
varying vec3 vVecN;
varying vec3 vVecP;
varying vec2 vWorldXZ;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
  vVecN = normal;
  vVecP = position;
  vWorldXZ = (modelMatrix * vec4(position, 1.0)).xz;`)}function We(e){return e.replace(`#include <shadowmap_pars_fragment>`,`#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>`)}var Ge=`col *= mix(1.0, getShadowMask(), uVecShadow);`;function Y(e,{color:t,id:n,windowGlow:r,winColors:i=[`#ffb852`,`#8cd9ff`],litFrac:a=.55}={}){let o=[0,1,2].map(e=>new H(i[e]??i[i.length-1]));return e.customProgramCacheKey=()=>`lgr-vec-tower`,e.onBeforeCompile=e=>{Ve(e),e.uniforms.uWindowGlow=r,e.uniforms.uWinId={value:n},e.uniforms.uVecColor={value:new H(t)},e.uniforms.uWinA={value:o[0]},e.uniforms.uWinB={value:o[1]},e.uniforms.uWinC={value:o[2]},e.uniforms.uWinLit={value:a},e.vertexShader=Ue(e.vertexShader),e.fragmentShader=He(We(e.fragmentShader.replace(`#include <common>`,`#include <common>
        uniform float uWindowGlow;
        uniform float uWinId;
        uniform vec3  uVecColor;
        uniform vec3  uWinA; uniform vec3 uWinB; uniform vec3 uWinC;
        uniform float uWinLit;
        ${Be}
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
          ${Ge}                                  // the sun's shadow darkens the body
          vec3 wcol; vec2 w = winTerms(wcol);
          vec3 glass = vec3(0.17, 0.23, 0.34);          // dark glass-blue panes (day)
          col = mix(col, glass, w.x * 0.85);
          col += w.x * w.y * wcol * uWindowGlow * 1.5;  // …windows EMIT (unshadowed) at night
          gl_FragColor = vec4(col, diffuseColor.a);
        }`)))},e}function X(e,{color:t=null,glow:n=null,glowDay:r=0,glowNight:i=1,windowGlow:a=null,season:o=!1}={}){let s=t===null,c=n!==null&&a!==null;return e.customProgramCacheKey=()=>`lgr-vec|`+(s?`d`:`c`)+(c?`g`:``)+(o?`s`:``),e.onBeforeCompile=e=>{Ve(e),s||(e.uniforms.uVecColor={value:new H(t)}),c&&(e.uniforms.uGlow={value:new H(n)},e.uniforms.uGlowDay={value:r},e.uniforms.uGlowNight={value:i},e.uniforms.uWindowGlow=a),o&&(e.uniforms.uSeason=ze),e.vertexShader=Ue(e.vertexShader);let l=s?`diffuseColor.rgb`:`uVecColor`,u=o?`seasonShift(${l})`:l,d=(s?``:`uniform vec3 uVecColor;
`)+(c?`uniform vec3 uGlow; uniform float uGlowDay; uniform float uGlowNight; uniform float uWindowGlow;
`:``)+(o?`uniform float uSeason;
vec3 seasonShift(vec3 c){
  c = mix(c, vec3(0.86, 0.46, 0.13), smoothstep(0.40, 0.70, uSeason));   // → autumn orange
  c = mix(c, vec3(0.46, 0.33, 0.20), smoothstep(0.75, 1.00, uSeason));   // → bare brown
  return c;
}
`:``),f=c?`uGlow * mix(uGlowDay, uGlowNight, uWindowGlow)`:`vec3(0.0)`,p=He(We(e.fragmentShader.replace(`#include <common>`,`#include <common>
`+d+Be).replace(`#include <opaque_fragment>`,`#include <opaque_fragment>
        if (uVector > 0.5) {
          vec3 col = vecShade(${u});
          ${Ge}                            // the sun's shadow darkens the flat tier…
          gl_FragColor = vec4(col + ${f}, diffuseColor.a);  // …but the night glow stays lit
        }`)));c&&(p=p.replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>\n  totalEmissiveRadiance += ${f};`)),e.fragmentShader=p},e}function Z(e){let t=e>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Ke(e){let t=Z(e);return{next:t,range:(e,n)=>e+(n-e)*t(),int:(e,n)=>e+Math.floor(t()*(n-e+1)),pick:e=>e[Math.floor(t()*e.length)],chance:e=>t()<e}}var qe=[{key:`manhattan`,name:`Manhattan`,towers:[`#EDE3C8`,`#D9B98A`,`#B5562F`,`#A8C8E8`,`#2E3F5C`],ground:`#7CC455`,street:`#9AA0A6`,sidewalk:`#C8CCD0`,park:`#5DB347`,water:`#29A8D8`,shopfronts:[`#C04A3A`,`#3A7AC0`,`#C09A2A`],glass:`#7FA8CC`,winColors:[`#ffd27a`,`#9ad6ff`],hMax:4.6,sigma:.36,roofRate:.35,pSplit:.6,nightLit:.55,roofTint:null,coast:{base:.55,out:1,in:.6,jag:1.05},landmarks:[`empireState`,`chrysler`,`liberty`]},{key:`paris`,name:`Paris`,towers:[`#E8DCC0`,`#F2EAD6`,`#E0D2B4`],ground:`#8CC46A`,street:`#A8A29A`,sidewalk:`#D4CEC2`,park:`#6DB35A`,water:`#3FA8C8`,shopfronts:[`#C04A3A`,`#3A6B5A`,`#7A5AC0`],glass:`#5A6B7A`,winColors:[`#ffdca0`,`#ffcaa0`],hMax:1.5,sigma:.9,roofRate:.15,pSplit:.75,nightLit:.45,roofTint:`#6A7886`,coast:{base:1.05,out:.55,in:.3,jag:.5},landmarks:[`eiffel`,`arcDeTriomphe`,`sacreCoeur`]},{key:`neoTokyo`,name:`Neo-Tokyo`,towers:[`#2A3038`,`#3A4250`,`#252B36`,`#4A4456`],ground:`#3A4A42`,street:`#5A6068`,sidewalk:`#7A8088`,park:`#2E5E46`,water:`#0E6878`,shopfronts:[`#E8483A`,`#5AE8E0`,`#E85AA0`],glass:`#5AE8E0`,winColors:[`#5AE8E0`,`#E85AA0`,`#E8E06A`],hMax:5.2,sigma:.42,roofRate:.6,pSplit:.6,nightLit:.7,roofTint:null,coast:{base:.7,out:1.05,in:.62,jag:1.7},landmarks:[`tokyoTower`,`pagoda`,`neonBillboard`]}];qe.map(e=>e.key);var Je=.3,Ye=1.9,Xe=.55,Q=2.45,Ze=.12,Qe=.6,$e=6,et={BASE:.7,OUT:.95,IN:.55,JAG:1,SAMPLES_PER_EDGE:28,HARBOR_DEPTH:.55,HARBOR_WIDTH:.26},tt={PLINTH_TOP:Je,BLOCK:Ye,STREET:Xe,PITCH:Q,SIDEWALK:Ze,SHORE:Qe,N:$e,COAST:et};function nt(e,t,n){let r=n?.base??et.BASE,i=n?.out??et.OUT,a=n?.in??et.IN,o=n?.jag??et.JAG,s=t+r,c=Ke((e^789079)>>>0),l=[2,3,5,8,11,13].map(e=>({k:e,amp:1/e*o**((e-2)/6),phase:c.range(0,Math.PI*2)})),u=l.reduce((e,t)=>e+t.amp,0),d=e=>{let t=0;for(let n of l)t+=n.amp*Math.sin(n.k*e*Math.PI*2+n.phase);return Math.max(-1,Math.min(1,t/(u*.6)))},f=[{fix:+s,nx:1,nz:0,sign:1},{fix:+s,nx:0,nz:1,sign:-1},{fix:-s,nx:-1,nz:0,sign:-1},{fix:-s,nx:0,nz:-1,sign:1}],p=t+.22,m=et.SAMPLES_PER_EDGE,h=4*m,g=[],_=0;for(let e=0;e<4;e++){let t=f[e];for(let n=0;n<m;n++,_++){let o=n/m,c=_/h,l=(-s+2*s*o)*t.sign,u=d(c),f=u>=0?u*i:u*a;if(e===0){let e=Math.abs(o-.5);if(e<et.HARBOR_WIDTH){let t=.5+.5*Math.cos(e/et.HARBOR_WIDTH*Math.PI);f-=(r+et.HARBOR_DEPTH)*t}}let v,y;t.nx===0?(y=t.fix+t.nz*f,v=l,y=t.nz>0?Math.max(y,p):Math.min(y,-p)):(v=t.fix+t.nx*f,y=l,v=t.nx>0?Math.max(v,p):Math.min(v,-p)),g.push(new j(v,y))}}return{points:g,B:s,maxR:s+i,harborX:p}}function rt(e){(Array.isArray(e)?e:[e]).forEach(e=>e&&e.dispose&&e.dispose())}function it({seed:e=1,profileIndex:t=0,landmarkFactory:r=null,windowGlow:i}){let o=new W,s=new W,c=new W;s.raycast=()=>{},c.raycast=()=>{},o.add(s,c);let l=new he(16773594,3);l.position.set(.45,.6,-.65).multiplyScalar(10);let u=new a(7313331,2762272,1);o.add(l,u);let d=0,f=[],p={seed:e,profileIndex:t,profile:qe[t],extent:0,meshCount:0};function m(e,t,n,r){let i=new G(new O(e,.04,t),X(new S({color:r,roughness:.95,flatShading:!0}),{color:r}));return i.position.y=n,i.userData.ground=!0,i}function h(e,t){for(let e of s.children)e.geometry&&e.geometry.dispose(),rt(e.material);s.clear();for(let e of c.children)e.traverse(e=>{e.isMesh&&rt(e.material)});c.clear(),f.length=0,d=0;let n=Ke(e),i=qe[t],a=($e-1)/2*Q,o=7.075;p={seed:e,profileIndex:t,profile:i,extent:o+(i.coast?.base??et.BASE),meshCount:0};let l=nt(e,o,i.coast);p.coast=l;let u=new le;l.points.forEach((e,t)=>t?u.lineTo(e.x,e.y):u.moveTo(e.x,e.y)),u.closePath();let h=new G(new ee(u,{depth:2,bevelEnabled:!1,steps:1}),X(new S({color:i.ground,roughness:.9,flatShading:!0,side:2}),{color:i.ground}));h.rotation.x=-Math.PI/2,h.position.y=Je-2,h.userData.ground=!0,s.add(h);let x=2*7.195;s.add(m(x,x,.32,i.street)),y(l.harborX,i);let C=[];for(let e=0;e<$e;e++)for(let t=0;t<$e;t++)C.push([e,t]);let w=new Set,T=Math.max(1,Math.round(C.length*.08));for(;w.size<T;)w.add(n.int(0,C.length-1));let E=n.range(-2.45*.6,Q*.6),D=n.range(-2.45*.6,Q*.6),O=Math.hypot(a,a),k=[];if(C.forEach(([e,t],r)=>{let a=(e-($e-1)/2)*Q,o=(t-($e-1)/2)*Q;if(s.add(m(Ye,Ye,.32999999999999996,i.sidewalk).translateX(a).translateZ(o)),w.has(r)){s.add(m(Ye-Ze*2,Ye-Ze*2,.35,i.park).translateX(a).translateZ(o));let e=n.int(3,5);for(let t=0;t<e;t++)b(a+n.range(-.6,.6),o+n.range(-.6,.6),i,n);return}let c=Ye-Ze*2,l=n.chance(i.pSplit)?2:1,u=n.chance(i.pSplit)?2:1,d=c/l,f=c/u;for(let e=0;e<l;e++)for(let t=0;t<u;t++){let r=a-c/2+d*(e+.5),s=o-c/2+f*(t+.5),l=Math.max(.6,d-.1),u=Math.max(.6,f-.1),p=Math.hypot(r-E,s-D)/O,m=Math.exp(-(p*p)/(2*i.sigma*i.sigma)),h=Math.max(.5,.5+(i.hMax-.5)*m*n.range(.75,1.25));h>i.hMax*.5&&Math.min(l,u)>=.7&&k.push({lx:r,lz:s,fw:l,fd:u,h,r:p}),g(r,s,l,u,h,i,n)}}),r&&r.ready){k.sort((e,t)=>e.r-t.r);let e=[],t=i.landmarks;for(let n=0;n<t.length&&k.length;n++){let a=null;for(let t of k)if(e.every(e=>Math.hypot(e.lx-t.lx,e.lz-t.lz)>Q*.9)){a=t;break}a||=k[0],e.push(a),_(a.lx,a.lz);let o=i.hMax*r.heightFactor(t[n]),s=r.make(t[n],{x:a.lx,z:a.lz,w:a.fw,d:a.fd,h:o,plinthTop:Je});if(s){c.add(s);let e=new F().setFromObject(s);v(e.min.x-.15,e.max.x+.15,e.min.z-.15,e.max.z+.15)}}}s.traverse(e=>{e.isMesh&&(e.userData.ground?(e.castShadow=!1,e.receiveShadow=!0):e.material&&e.material.isMeshBasicMaterial?(e.castShadow=!1,e.receiveShadow=!1):(e.castShadow=!0,e.receiveShadow=!0))}),c.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),p.meshCount=s.children.length+c.children.length;let A=0;for(let e of s.children){let t=e.position;A=(Math.imul(A,16777619)^(Math.round(t.x*100)*2654435761^Math.round(t.y*100)*40503^Math.round(t.z*100)*2246822519))>>>0}for(let e of p.coast.points)A=(Math.imul(A,16777619)^(Math.round(e.x*100)*2654435761^Math.round(e.y*100)*40503))>>>0;p.sig=A,window.__city={seed:e,profile:i.key,meshes:p.meshCount,sig:A}}function g(e,t,r,a,o,c,l){let u=Y(new S({flatShading:!0,roughness:.7,metalness:.05}),{color:l.pick(c.towers),id:++d,windowGlow:i,winColors:c.winColors,litFrac:c.nightLit}),p=new G(new O(r,o,a),u);if(p.position.set(e,Je+o/2,t),p.userData.lot=[e,t],s.add(p),c.roofTint){let n=X(new S({color:c.roofTint,roughness:.85,flatShading:!0}),{color:c.roofTint}),i=new G(new O(r*1.02,.08,a*1.02),n);i.position.set(e,Je+o+.04,t),i.userData.lot=[e,t],s.add(i)}if(o<1.4){let n=l.pick(c.shopfronts),i=new G(new O(r*1.04,.18,a*1.04),X(new S({color:n,roughness:.8,flatShading:!0}),{color:n}));i.position.set(e,.39,t),i.userData.lot=[e,t],s.add(i)}let m=Je+o,h=r,g=a;if(o>c.hMax*.5&&l.chance(.55)){let n=r*l.range(.5,.72),u=a*l.range(.5,.72),f=o*l.range(.18,.4),p=new G(new O(n,f,u),Y(new S({flatShading:!0,roughness:.7,metalness:.05}),{color:l.pick(c.towers),id:++d,windowGlow:i,winColors:c.winColors,litFrac:c.nightLit}));p.position.set(e,Je+o+f/2,t),p.userData.lot=[e,t],s.add(p),m=Je+o+f,h=n,g=u}if(o>c.hMax*.45&&l.chance(c.roofRate)){let r=l.chance(.5)?new G(new O(h*.4,.18,g*.4),X(new S({color:`#9a9a9a`,flatShading:!0}),{color:`#9a9a9a`})):new G(new P(h*.18,h*.18,.22,10),X(new S({color:`#b9bec4`,flatShading:!0}),{color:`#b9bec4`}));if(r.position.set(e+l.range(-.1,.1),m+.11,t+l.range(-.1,.1)),r.userData.lot=[e,t],s.add(r),l.chance(.25)){let r=new G(new re(.05,6,5),new n({color:`#ff3b30`,transparent:!0,opacity:1}));r.position.set(e,m+.15,t),r.userData.lot=[e,t],r.raycast=()=>{},s.add(r),f.push({mesh:r,phase:l.range(0,6.28)})}}if(o>c.hMax*.7&&l.chance(.35)){let n=o*l.range(.18,.34),r=new G(new P(.018,.05,n,6),X(new S({color:`#c8ccd2`,flatShading:!0}),{color:`#c8ccd2`}));r.position.set(e,m+n/2,t),r.userData.lot=[e,t],r.raycast=()=>{},s.add(r)}}function _(e,t){for(let n=s.children.length-1;n>=0;n--){let r=s.children[n];r.userData.lot&&Math.abs(r.userData.lot[0]-e)<1e-4&&Math.abs(r.userData.lot[1]-t)<1e-4&&(r.geometry&&r.geometry.dispose(),rt(r.material),s.remove(r))}for(let e=f.length-1;e>=0;e--)f[e].mesh.parent||f.splice(e,1)}function v(e,t,n,r){for(let i=s.children.length-1;i>=0;i--){let a=s.children[i];a.userData.lot&&a.position.x>=e&&a.position.x<=t&&a.position.z>=n&&a.position.z<=r&&(a.geometry&&a.geometry.dispose(),rt(a.material),s.remove(a))}}function y(e,t){let n=X(new S({color:`#7a5634`,roughness:.95,flatShading:!0}),{color:`#7a5634`}),r=(e,t,r,i)=>{let a=new G(new O(e,.06,t),n);a.position.set(r,Je-.16,i),s.add(a)};r(.24,2,e+.02,0),r(1.3,.22,e+.7,-.72),r(1.3,.22,e+.7,.72)}function b(e,t,n,r){let i=new H(n.park),a=(n,a)=>{let o=i.clone().offsetHSL(0,0,r.range(-.06,.06)).getStyle(),c=new G(new re(n,7,6),X(new S({color:o,flatShading:!0}),{color:o,season:!0}));c.scale.y=.7,c.position.set(e,Je+a,t),c.userData.lot=null,s.add(c)},o=new G(new O(.05,.18,.05),X(new S({color:`#6b4a2a`,flatShading:!0}),{color:`#6b4a2a`}));o.position.set(e,.39,t),s.add(o),a(.22,.28),a(.16,.46)}function x(e){for(let t of f)t.mesh.material.opacity=.35+.65*(.5+.5*Math.sin(e*3+t.phase))}return h(e,t),{group:o,key:l,fill:u,update:x,generate:h,get state(){return p},get extent(){return p.extent},get waterColor(){return p.profile.water},profiles:qe}}var at=Math.PI*2,ot=.7,st=90,ct=[{name:`night`,sun:`#4a6f9e`,intensity:.35,hemiSky:`#26344f`,hemiGround:`#0c1018`,horizon:`#1e2942`,sky:`#36486e`,exposure:.95,outline:`#101a30`,window:1,toonGain:2.6},{name:`dawn`,sun:`#ff9e54`,intensity:2.4,hemiSky:`#8a7686`,hemiGround:`#2a1f1a`,horizon:`#b8512c`,sky:`#ffb070`,exposure:1.05,outline:`#241826`,window:.3,toonGain:2},{name:`noon`,sun:`#fff4e0`,intensity:4.6,hemiSky:`#9cb8cc`,hemiGround:`#33302a`,horizon:`#5e7689`,sky:`#aacadd`,exposure:1.18,outline:`#0b0a08`,window:0,toonGain:1.7},{name:`dusk`,sun:`#ff6b35`,intensity:2,hemiSky:`#7a566a`,hemiGround:`#281a18`,horizon:`#b0432a`,sky:`#ff8a5a`,exposure:1.05,outline:`#1f1420`,window:.4,toonGain:2}],lt=e=>e-Math.floor(e),ut=(e,t,n)=>e+(t-e)*n,dt=(e,t,n)=>e+(t-e)*(1-Math.exp(-6*n));function ft({t:e=.5}={}){let t=e,n=e,r=!1,i=!1,a=ct.map(e=>({name:e.name,sun:new H(e.sun),hemiSky:new H(e.hemiSky),hemiGround:new H(e.hemiGround),horizon:new H(e.horizon),sky:new H(e.sky),outline:new H(e.outline),intensity:e.intensity,exposure:e.exposure,window:e.window,toonGain:e.toonGain})),o=new L(0,1,0),s=new H(`#fff4e0`),c=new H(`#6f97b3`),l=new H(`#2a2620`),u=new H(`#3a4a57`),d=new H(`#7da3bd`),f=new H(`#0b0a08`),p=new H(`#000000`),m=3,h=1,g=0,_=1.7,v=new L;function y(e){let t=lt(e)*4,n=Math.floor(t)%4,r=(n+1)%4,i=t-Math.floor(t),y=a[n],b=a[r];s.lerpColors(y.sun,b.sun,i),c.lerpColors(y.hemiSky,b.hemiSky,i),l.lerpColors(y.hemiGround,b.hemiGround,i),u.lerpColors(y.horizon,b.horizon,i),d.lerpColors(y.sky,b.sky,i),f.lerpColors(y.outline,b.outline,i),m=ut(y.intensity,b.intensity,i),h=ut(y.exposure,b.exposure,i),g=ut(y.window,b.window,i),_=ut(y.toonGain,b.toonGain,i),p.setRGB(.045*g,.075*g,.14*g);let x=lt(e)*at-Math.PI/2,S=Math.cos(x),C=Math.sin(x);v.set(S,C*Math.cos(ot),C*Math.sin(ot)),v.y>=0?o.copy(v):o.copy(v).negate()}return y(t),{sunDir:o,sunColor:s,hemiSky:c,hemiGround:l,horizon:u,sky:d,outline:f,toonFloor:p,sunArc:v,get sunIntensity(){return m},get exposure(){return h},get windowGlow(){return g},get toonGain(){return _},get t(){return lt(t)},get auto(){return r},get clock(){let e=Math.round(lt(t)*24*60)%1440;return`${String(Math.floor(e/60)).padStart(2,`0`)}:${String(e%60).padStart(2,`0`)}`},cyclePreset(){n=(Math.floor(t*4+1e-4)+1)/4},nudge(e){n+=e/24},goTo(e){n=e},toggleAuto(){r=!r},setReducedMotion(e){i=e},update(e){r&&!i&&(n+=e/st),t=dt(t,n,e),y(t)}}}function pt(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.35,`rgba(255,255,255,0.55)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new A(e);return r.colorSpace=N,r}function mt(e,t){let n=[];for(let r=0;r<16;r++){let i=r/16*Math.PI*2;n.push(new L(Math.cos(i)*e,t,Math.sin(i)*e))}return new me(n,!0,`catmullrom`,.5)}function ht(e){let t=(t,n)=>Math.exp(-((e-t)*(e-t))/(2*n*n)),n=Math.max(t(.33,.05),t(.75,.06)),r=l.smoothstep(e,.24,.3)*(1-l.smoothstep(e,.8,.88));return l.clamp(.15+.55*r+.45*n,.12,1)}function gt(){let{PITCH:e,N:t,PLINTH_TOP:n}=tt,r=t+1,i=n+.04,a=n=>(n-t/2)*e,o=t/2,s=[],c=(e,t)=>t*r+e;for(let e=0;e<r;e++)for(let t=0;t<r;t++)s.push({x:a(t),z:a(e),i:t,j:e,edges:[]});let l=[],u=(t,n)=>{let r=(s[t].i===o||s[t].j===o)&&(s[n].i===o||s[n].j===o),i=l.length;l.push({a:t,b:n,len:e,main:r}),s[t].edges.push(i),s[n].edges.push(i)};for(let e=0;e<r;e++)for(let t=0;t<r;t++)t<r-1&&u(c(t,e),c(t+1,e)),e<r-1&&u(c(t,e),c(t,e+1));return{nodes:s,edges:l,y:i,mid:o}}function _t({plinthTop:e=.3,extent:t=4,profile:r=null}={}){let i=new W,a=gt(),{nodes:o,edges:s}=a,c=a.y,u=.34,d=0;{let e=tt.PITCH-u*2;d=Math.max(1,Math.floor((e+.26)/.56))}let f=new n({color:`#e8c84a`,fog:!0}),p=new I(new O(.05,.012,.3),f,s.length*d);p.frustumCulled=!1,p.raycast=()=>{},p.receiveShadow=!1,p.castShadow=!1,i.add(p);{let e=new x,t=0;for(let n of s){let r=o[n.a],i=o[n.b],a=i.x-r.x,s=i.z-r.z,l=Math.hypot(a,s),f=a/l,m=s/l,h=Math.atan2(f,m),g=l-u*2;for(let n=0;n<d;n++){let i=u+(d===1?g/2:g*n/(d-1));e.position.set(r.x+f*i,c,r.z+m*i),e.rotation.set(0,h,0),e.updateMatrix(),p.setMatrixAt(t++,e.matrix)}}p.instanceMatrix.needsUpdate=!0}let m=new I(new O(.34,.26,.74),X(new S({flatShading:!0,roughness:.5,metalness:.3})),12);m.castShadow=!0,m.receiveShadow=!1,m.frustumCulled=!1,m.raycast=()=>{};let h=new ue,g=new Float32Array(72),_=new Float32Array(72),v=new H(`#fff0c0`),y=new H(`#ff3528`);for(let e=0;e<12;e++)v.toArray(_,e*3),y.toArray(_,(12+e)*3),g[e*3+1]=-50,g[(12+e)*3+1]=-50;h.setAttribute(`position`,new B(g,3)),h.setAttribute(`color`,new B(_,3));let b=new w({size:.72,sizeAttenuation:!0,map:pt(),vertexColors:!0,transparent:!0,opacity:0,blending:2,depthWrite:!1}),C=new T(h,b);C.frustumCulled=!1,C.raycast=()=>{},i.add(m,C);let E=[`#f4c430`,`#c0392b`,`#d8dde2`,`#9aa7b4`,`#6b7785`,`#5a7d9a`],D=Z(2403557),k=s.map((e,t)=>t).filter(e=>s[e].main),ee=[];for(let e=0;e<12;e++){let t=e<4&&k.length?k[D()*k.length|0]:D()*s.length|0,n=e===1;ee.push({edge:t,fwd:D()<.5,s:D()*s[t].len,speed:n?.5:.78+e%3*.1,lenZ:n?1.45:1,color:E[n?1:e===0?0:2+e%4],rng:Z(12648430+e*2654435761),isBus:n,pos:new L,dirX:0,dirZ:1,active:!1})}let A=new H;ee.forEach((e,t)=>m.setColorAt(t,A.set(e.color)));function j(e,t,n){let r=o[e],i=r.edges.filter(e=>e!==t);if(i.length===0)return t;let a=s[t],c=a.a===e?a.b:a.a,l=r.x-o[c].x,u=r.z-o[c].z,d=Math.hypot(l,u)||1,f=i[0],p=-2;for(let t of i){let n=s[t],i=n.a===e?n.b:n.a,a=o[i].x-r.x,c=o[i].z-r.z,m=Math.hypot(a,c)||1,h=l/d*(a/m)+u/d*(c/m);h>p&&(p=h,f=t)}return n()<.65?f:i[n()*i.length|0]}let M=j,N=new x,te=(e,t)=>{N.position.set(0,-50,0),N.scale.setScalar(0),N.updateMatrix(),e.setMatrixAt(t,N.matrix)},ne=.085,P=tt.PLINTH_TOP+.02+.13,F=new I(new ae(.04,.1,3,6),X(new S({flatShading:!0,roughness:.8})),14);F.castShadow=!0,F.receiveShadow=!1,F.frustumCulled=!1,F.raycast=()=>{};let re=mt(t-.72,e),ie=[];for(let e=0;e<14;e++)ie.push({phase:e/14,speed:.12+e%4*.02,dir:e%2?1:-1,pos:new L,active:!1});let R=new L,oe=new L,z=new H;ie.forEach((e,t)=>F.setColorAt(t,z.set([`#caa`,`#9ab`,`#bba`,`#ab9`][t%4]))),i.add(F);let V={manhattan:`#e8c84a`,paris:`#dcd2bc`,neoTokyo:`#5ae8e0`};function se(e){e&&f.color.set(V[e.key]||`#e8c84a`)}se(r);function ce(t,n,r){let i=r?r.t:.5,a=r?r.windowGlow:0,c=Math.max(2,Math.round(ht(i)*12)),u=a>.05;for(let e=0;e<12;e++){if(e>=c){te(m,e),ee[e].active=!1,g[e*3+1]=-50,g[(12+e)*3+1]=-50;continue}let n=ee[e];n.s+=t*n.speed;let r=0;for(;n.s>=s[n.edge].len&&r++<4;){n.s-=s[n.edge].len;let e=n.fwd?s[n.edge].b:s[n.edge].a,t=M(e,n.edge,n.rng);n.edge=t,n.fwd=s[t].a===e}let i=s[n.edge],a=n.fwd?o[i.a]:o[i.b],l=n.fwd?o[i.b]:o[i.a],d=l.x-a.x,f=l.z-a.z,p=Math.hypot(d,f)||1,h=d/p,_=f/p,v=-_,y=h,b=a.x+h*n.s+v*ne,x=a.z+_*n.s+y*ne,S=Math.atan2(h,_);N.position.set(b,P,x),N.rotation.set(0,S,0),N.scale.set(1,1,n.lenZ),N.updateMatrix(),m.setMatrixAt(e,N.matrix),n.pos.set(b,P,x),n.dirX=h,n.dirZ=_,n.active=!0;let C=.74*n.lenZ*.5,w=P+.06,T=e*3,E=(12+e)*3;u?(g[T]=b+h*(C+.04),g[T+1]=w,g[T+2]=x+_*(C+.04),g[E]=b-h*(C+.02),g[E+1]=w,g[E+2]=x-_*(C+.02)):(g[T+1]=-50,g[E+1]=-50)}m.instanceMatrix.needsUpdate=!0,h.attributes.position.needsUpdate=!0,b.opacity=l.clamp(a*1.8,0,1);let d=Math.max(2,Math.round(ht(i)*14));for(let t=0;t<14;t++){if(t>=d){te(F,t),ie[t].active=!1;continue}let r=ie[t],i=(r.phase+r.dir*r.speed*n*.02+1e3)%1;re.getPointAt(i,R),re.getTangentAt(i,oe);let a=Math.sin(n*6+r.phase*30)*.015;N.position.set(R.x,e+.09+a,R.z),N.rotation.set(0,Math.atan2(oe.x*r.dir,oe.z*r.dir),Math.sin(n*6+r.phase*30)*.06),N.scale.setScalar(1),N.updateMatrix(),F.setMatrixAt(t,N.matrix),r.pos.set(R.x,e+.09,R.z),r.active=!0}F.instanceMatrix.needsUpdate=!0}let le=[...ee.map((e,t)=>({kind:`car`,label:e.isBus?`bus`:`car ${t+1}`,getWorldPos:t=>t.copy(e.pos),active:()=>e.active,info:()=>`${e.isBus?`bus`:`car`} · ${s[e.edge].main?`main avenue`:`side street`} → heading ${vt(e.dirX,e.dirZ)}`})),...ie.map((e,t)=>({kind:`person`,label:`person ${t+1}`,getWorldPos:t=>t.copy(e.pos),active:()=>e.active,info:()=>`person · strolling the waterfront promenade`}))];function de(){return le}return{group:i,update:ce,setProfile:se,getFollowables:de,graph:a,setRouter(e){M=e||j}}}function vt(e,t){return[`N`,`NE`,`E`,`SE`,`S`,`SW`,`W`,`NW`][(Math.round(Math.atan2(e,t)/(Math.PI/4))%8+8)%8]}function yt({frames:e,fps:t=8,cols:n,rows:r=1}={}){let i=n||e||4,a=r||1,o=e||i*a,s=typeof window<`u`&&window.matchMedia?window.matchMedia(`(prefers-reduced-motion: reduce)`):null;function c(e,t){let n=t%i,r=Math.floor(t/i);e.offset.x=n/i,e.offset.y=1-(r+1)/a}function l(e){let t=e.clone();return t.needsUpdate=!0,t.repeat.set(1/i,1/a),c(t,0),t}function u(e,n,r=0){if(s&&s.matches)return c(e,0),0;let i=(Math.floor(n*t+r)%o+o)%o;return c(e,i),i}function d(e,t){let n=(Math.round(t)%o+o)%o;return c(e,n),n}return{frames:o,fps:t,cols:i,rows:a,makeInstanceTexture:l,step:u,setFrame:d}}function bt(e){if(typeof document>`u`||!e||!e.image)return e;let t=e.image,n=t.width||t.naturalWidth,r=t.height||t.naturalHeight,i=document.createElement(`canvas`);i.width=n,i.height=r;let a=i.getContext(`2d`,{willReadFrequently:!0});a.drawImage(t,0,0,n,r);let o=a.getImageData(0,0,n,r),s=o.data;for(let e=0;e<s.length;e+=4){let t=s[e]*.299+s[e+1]*.587+s[e+2]*.114|0;s[e]=s[e+1]=s[e+2]=t}a.putImageData(o,0,0);let c=new A(i);return c.colorSpace=e.colorSpace||`srgb`,c}function xt({url:e,fallback:t,luminance:n=!1,onReady:r}={}){let i=n?bt(t):t;return e&&typeof window<`u`&&new de().load(e,e=>{e.colorSpace=N,r&&r(n?bt(e):e)},void 0,()=>{}),i}var St=``+new URL(`gull_diffusion_sheet-BMlUTLhu.png`,import.meta.url).href;function Ct(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.4,`rgba(255,255,255,0.5)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new A(e);return r.colorSpace=N,r}function wt(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64*.62,0,64/2,64*.62,64*.5);n.addColorStop(0,`rgba(240,250,255,0.95)`),n.addColorStop(1,`rgba(240,250,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new A(e);return r.colorSpace=N,r}function Tt(){let e=document.createElement(`canvas`);e.width=256,e.height=64;let t=e.getContext(`2d`);t.strokeStyle=`#ffffff`,t.lineWidth=6,t.lineCap=`round`,t.lineJoin=`round`;let n=[14,24,36,24];for(let e=0;e<4;e++){let r=e*64,i=n[e];t.beginPath(),t.moveTo(r+8,40),t.quadraticCurveTo(r+24,i,r+32,36),t.quadraticCurveTo(r+40,i,r+56,40),t.stroke()}let r=new A(e);return r.colorSpace=N,r}function Et(e,t,n=18){let r=[];for(let i=0;i<n;i++){let a=i/n*Math.PI*2;r.push(new L(Math.cos(a)*e,t,Math.sin(a)*e))}return new me(r,!0,`catmullrom`,.5)}function Dt(e,t,n){let r=e-t,i=[],a=(e,t)=>i.push(new L(e,n,t)),o=(e,n,r,i,o=4)=>{for(let s=1;s<=o;s++){let c=r+(i-r)*(s/o);a(e+Math.cos(c)*t,n+Math.sin(c)*t)}};for(let t=0;t<4;t++)a(e,-r+2*r*t/4);o(r,r,0,Math.PI/2);for(let t=0;t<4;t++)a(r-2*r*t/4,e);o(-r,r,Math.PI/2,Math.PI);for(let t=0;t<4;t++)a(-e,r-2*r*t/4);o(-r,-r,Math.PI,1.5*Math.PI);for(let t=0;t<4;t++)a(-r+2*r*t/4,-e);return o(r,-r,1.5*Math.PI,2*Math.PI),new me(i,!0,`catmullrom`,.5)}function Ot({extent:e=8,waterSize:t=28,plinthTop:n=.3}={}){let r=new W;r.raycast=()=>{};let i=.06,a=(e,n,r)=>r.set(e/t+.5,-n/t+.5,0),o=[Dt(9.5,3,i),Et(12.7,i),new me([new L(8.4,i,0),new L(11,i,-3.6),new L(13,i,0),new L(11,i,3.6)],!0,`catmullrom`,.5)],s=o.map(e=>e.getLength());function c({scale:e=1,hull:t=`#6b7785`,cabin:n=`#e7ecf2`}){let r=new W,i=new G(new O(.46*e,.2*e,1.1*e),X(new S({color:t,roughness:.6,metalness:.2,flatShading:!0}),{color:t}));i.position.y=.02;let a=new G(new O(.3*e,.22*e,.42*e),X(new S({color:n,roughness:.7,flatShading:!0}),{color:n}));return a.position.set(0,.18*e,.08*e),r.add(i,a),r.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!1),e.raycast=()=>{}}),r.userData.halfLen=.55*e,r}let u=[{laneIndex:0,dir:1,speed:.5,wake:.024,scale:1,hull:`#5a6675`,cabin:`#e7ecf2`},{laneIndex:1,dir:-1,speed:.42,wake:.022,scale:1,hull:`#7a5b46`,cabin:`#d9c3a6`},{laneIndex:0,dir:1,speed:.56,wake:.024,scale:.9,hull:`#456079`,cabin:`#cfe0ee`},{laneIndex:2,dir:1,speed:.34,wake:.03,scale:1.35,hull:`#39505f`,cabin:`#e2b85a`}];u.forEach((e,t)=>{e.mesh=c(e),e.u=t*.27%1,e.phase=t*1.7,e.isFerry=e.laneIndex===2,r.add(e.mesh)});let d=u.length,f=d*2,p=new ue,m=new Float32Array(f*3).fill(-50),h=new Float32Array(f*3),g=new H(`#fff0c0`),_=new H(`#ff3528`);for(let e=0;e<d;e++)g.toArray(h,e*3),_.toArray(h,(d+e)*3);p.setAttribute(`position`,new B(m,3)),p.setAttribute(`color`,new B(h,3));let v=new T(p,new w({size:.6,sizeAttenuation:!0,map:Ct(),vertexColors:!0,transparent:!0,opacity:0,blending:2,depthWrite:!1}));v.frustumCulled=!1,v.raycast=()=>{},r.add(v);function y(e,t){let n=new G(new re(e,9,7),X(new S({color:t,roughness:.5,flatShading:!0}),{color:t}));return n.scale.set(.55,.5,1),n.castShadow=!1,n.receiveShadow=!1,n.raycast=()=>{},n.position.y=-5,n}let b=[{x:-9.5,z:6,size:.18,color:`#5b6f86`,period:11,arcH:.55,span:1.1,whale:!1},{x:7.5,z:-9.5,size:.16,color:`#4a6076`,period:14,arcH:.5,span:1,whale:!1},{x:-7,z:-8.5,size:.2,color:`#607089`,period:9,arcH:.6,span:1.2,whale:!1},{x:10.5,z:7,size:.62,color:`#3a4350`,period:38,arcH:.9,span:2.6,whale:!0}];b.forEach((e,t)=>{e.mesh=y(e.size,e.color),e.heading=Math.atan2(-e.x,-e.z),e.t=t/b.length*e.period,e.splashed=!1,r.add(e.mesh),e.whale&&(e.spout=new k(new V({map:wt(),transparent:!0,opacity:0,depthWrite:!1,fog:!0})),e.spout.scale.set(.6,1.1,1),e.spout.position.set(e.x,-5,e.z),r.add(e.spout))});let x=yt({frames:4,fps:7}),C=[`#ffffff`,`#cfd4da`,`#c8a06a`],E=[],D=xt({url:St,fallback:Tt(),luminance:!0,onReady:e=>{D=e;for(let t of E){let n=t.sp.material.map;t.sp.material.map=x.makeInstanceTexture(e),t.sp.material.needsUpdate=!0,n&&n.dispose()}typeof window<`u`&&(window.__gullSheet=`diffusion`)}});for(let e=0;e<4;e++){let t=new k(new V({map:x.makeInstanceTexture(D),color:new H(C[e%C.length]),transparent:!0,opacity:0,depthWrite:!1,fog:!0}));t.scale.setScalar(.5),E.push({sp:t,r:8.6+e*.5,y:1.1+e%2*.5,speed:(.18+e*.03)*(e%2?-1:1),phase:e*1.9}),r.add(t)}typeof window<`u`&&(window.__gullSheet=window.__gullSheet||`procedural`,window.__gullAnim={frames:x.frames,variants:C.length,fps:x.fps});let ee=b.length,A=Array.from({length:d+ee},()=>new L),j=e=>e.laneIndex,M=new L,N=new L,te=new L;function ne(e,t,n){let r=n?n.windowGlow:0,c=1-r;for(let n=0;n<d;n++){let c=u[n],l=o[c.laneIndex],f=s[c.laneIndex],p=c.isFerry?.45+.55*Math.min(1,Math.abs((c.u+.5)%1-.5)*3):1,h=c.u;c.u=(c.u+c.dir*e*c.speed*p/f+1)%1,(c.dir>0?c.u<h:c.u>h)&&(c.laneIndex=j(c)),l.getPointAt(c.u,M),l.getTangentAt(c.u,N);let g=N.x*c.dir,_=N.z*c.dir,v=Math.atan2(g,_),y=Math.sin(t*1.1+c.phase)*.025;c.mesh.position.set(M.x,i+y,M.z),c.mesh.rotation.set(Math.sin(t*.9+c.phase)*.04,v,0);let b=c.mesh.userData.halfLen;a(M.x-g*b,M.z-_*b,te),A[n].set(te.x,te.y,c.wake);let x=n*3,S=(d+n)*3;if(r>.05){let e=.18;m[x]=M.x+g*(b+.05),m[x+1]=e,m[x+2]=M.z+_*(b+.05),m[S]=M.x-g*(b+.02),m[S+1]=e,m[S+2]=M.z-_*(b+.02)}else m[x+1]=-50,m[S+1]=-50}P(),v.material.opacity=l.clamp(r*1.8,0,1);for(let t=0;t<ee;t++){let n=b[t];n.t+=e;let r=d+t,o=n.whale?3.2:1.3;if(n.t>=n.period){let e=(n.t-n.period)/o;if(e>=1){n.t=0,n.splashed=!1,n.mesh.position.y=-5,n.spout&&(n.spout.material.opacity=0),A[r].set(0,0,0);continue}let t=Math.sin(Math.PI*e),s=(e-.5)*n.span,c=n.x+Math.sin(n.heading)*s,u=n.z+Math.cos(n.heading)*s;n.mesh.position.set(c,i-.1+t*n.arcH,u),n.mesh.rotation.set(Math.cos(Math.PI*e)*.9,n.heading,0);let d=e<.16||e>.84;if(a(c,u,te),A[r].set(te.x,te.y,d?n.whale?.07:.05:0),n.spout){let t=l.clamp((e-.15)*3,0,1)*(1-e);n.spout.position.set(c,.56+t*.6,u),n.spout.material.opacity=t*.9}}else n.mesh.position.y=-5,A[r].set(0,0,0),n.spout&&(n.spout.material.opacity=0)}for(let e=0;e<4;e++){let n=E[e],r=n.phase+t*n.speed*.25;n.sp.position.set(Math.cos(r)*n.r,n.y+Math.sin(t*1.4+n.phase)*.12,Math.sin(r)*n.r),n.sp.material.opacity=l.clamp(c*.9-.05,0,.85);let i=x.step(n.sp.material.map,t,n.phase);e===0&&typeof window<`u`&&(window.__gullFrame=i)}if(typeof window<`u`){let e=0;for(let t of b)t.mesh.position.y>i&&e++;window.__waterLife={boats:d,breaching:e,gulls:+E[0].sp.material.opacity.toFixed(2),lights:+v.material.opacity.toFixed(2)}}}function P(){p.attributes.position.needsUpdate=!0}function F(){return A.length}let ie=[...u.map((e,t)=>({kind:`boat`,label:e.isFerry?`ferry`:`boat ${t+1}`,getWorldPos:t=>t.copy(e.mesh.position),info:()=>e.isFerry?`boat · harbor ferry → docks`:`boat · open-water lane ${e.laneIndex}`})),...E.map((e,t)=>({kind:`gull`,label:`gull ${t+1}`,getWorldPos:t=>t.copy(e.sp.position),active:()=>e.sp.material.opacity>.05,info:()=>`gull · circling the coast`})),...b.map((e,t)=>({kind:`fish`,label:e.whale?`whale`:`fish ${t+1}`,getWorldPos:t=>t.copy(e.mesh.position),active:()=>e.mesh.position.y>i-.3,info:()=>e.mesh.position.y>i?e.whale?`whale · breaching!`:`fish · breaching!`:`fish · below the surface`}))];function I(){return ie}return{group:r,update:ne,getFollowables:I,wakeDrops:A,get wakeCount(){return F()},lanes:o,setRouter(e){j=e||(e=>e.laneIndex)}}}var kt=[`empireState`,`chrysler`,`liberty`,`eiffel`,`arcDeTriomphe`,`sacreCoeur`,`tokyoTower`,`pagoda`,`neonBillboard`],At={empireState:1.25,chrysler:1.1,liberty:.55,eiffel:3.2,arcDeTriomphe:1.5,sacreCoeur:1.75,tokyoTower:1.35,pagoda:.5,neonBillboard:.9};function jt(e){let n=()=>new S({flatShading:!0,roughness:.7,metalness:.1}),r=(t,r={})=>r.windows?Y(n(),{color:t,id:e.id(),windowGlow:e.windowGlow,winColors:e.winColors,litFrac:e.litFrac}):X(n(),{color:t,glow:r.glow??null,glowDay:r.glowDay??0,glowNight:r.glowNight??1,windowGlow:r.glow?e.windowGlow:null});return{box:(e,t,n,i,a={})=>new G(new O(e,t,n),r(i,a)),cyl:(e,t,n,i,a={})=>new G(new P(e,t,n,a.seg||12),r(i,a)),cone:(e,t,n,i={})=>new G(new R(e,t,i.seg||8),r(n,i)),sphere:(e,t,n={})=>new G(new re(e,n.seg||12,n.seg2||8),r(t,n)),lathe:(e,n,i={})=>new G(new t(e.map(e=>new j(e[0],e[1])),i.seg||4),r(n,i))}}var $=(e,t,n,r)=>(e.position.set(t,n,r),e),Mt=[`#7FB0E0`,`#E07FB0`,`#7FE0A0`,`#E0C97F`,`#9FE07F`,`#7FE0E0`,`#FF8C42`,`#E0E07F`,`#C97FE0`,`#E07F7F`,`#7F9FE0`,`#E0483A`],Nt={empireState(e,t){let n=`#E8E0CF`;e.add($(t.box(.42,.18,.42,n,{windows:!0}),0,.09,0)),e.add($(t.box(.34,.16,.34,n,{windows:!0}),0,.26,0)),e.add($(t.box(.26,.14,.26,n,{windows:!0}),0,.41,0)),e.add($(t.box(.19,.34,.19,n,{windows:!0}),0,.65,0)),e.add($(t.box(.13,.06,.13,n,{windows:!0}),0,.85,0));let r=Mt[new Date().getMonth()];e.add($(t.cyl(.03,.045,.12,n,{seg:10,glow:r,glowNight:1.85}),0,.94,0)),e.add($(t.cone(.012,.07,n,{seg:8}),0,1.04,0))},chrysler(e,t){let n=`#C9CED4`;e.add($(t.box(.22,.55,.22,`#9AA7B4`,{windows:!0}),0,.275,0));let r=.55;for(let i=0;i<5;i++){let a=.14-i*.024,o=.07;e.add($(t.cyl(a*.7,a,o,n,{seg:8,glow:`#dfeaff`,glowNight:.5}),0,r+o/2,0)),r+=o}e.add($(t.cone(.018,.16,n,{seg:8}),0,r+.08,0))},liberty(e,t){let n=`#B9B4A6`,r=`#4FA890`;e.add($(t.box(.42,.16,.42,n),0,.08,0)),e.add($(t.box(.3,.2,.3,n),0,.26,0)),e.add($(t.cyl(.1,.15,.42,r,{seg:10}),0,.57,0)),e.add($(t.box(.11,.1,.11,r),0,.83,0));for(let n=0;n<7;n++){let i=(n/6-.5)*Math.PI*1.1;e.add($(t.cone(.012,.1,r,{seg:5}),Math.sin(i)*.1,.92,Math.cos(i)*.06-.02))}let i=$(t.cyl(.025,.03,.34,r,{seg:8}),.14,.98,0);i.rotation.z=.35,e.add(i),e.add($(t.box(.06,.06,.06,r,{glow:`#ffd060`,glowDay:.6,glowNight:1.2}),.2,1.16,0)),e.add($(t.cone(.04,.09,`#ffcf66`,{seg:6,glow:`#ffd060`,glowDay:.7,glowNight:1.3}),.2,1.24,0))},eiffel(e,t){let n=`#6E5C4C`,r=[[.2,0],[.13,.16],[.085,.33],[.055,.5],[.035,.66],[.02,.85],[0,.92]];e.add(t.lathe(r,n,{seg:4}));let i=t.lathe(r,n,{seg:4});i.rotation.y=Math.PI/4,e.add(i),e.add($(t.box(.26,.025,.26,n),0,.33,0)),e.add($(t.box(.14,.02,.14,n),0,.66,0)),e.add($(t.cone(.01,.1,n,{seg:6}),0,.97,0))},arcDeTriomphe(e,t){let n=`#D9D0C1`,r=.58,i=.5,a=.34,o=new le;o.moveTo(-.58/2,0),o.lineTo(r/2,0),o.lineTo(r/2,i),o.lineTo(-.58/2,i),o.lineTo(-.58/2,0);let c=new s,l=.15,u=.22;c.moveTo(-.15,0),c.lineTo(-.15,u),c.absarc(0,u,l,Math.PI,0,!0),c.lineTo(l,0),c.lineTo(-.15,0),o.holes.push(c);let d=new ee(o,{depth:a,bevelEnabled:!1});d.translate(0,0,-.34/2),d.computeVertexNormals(),e.add(new G(d,X(new S({color:n,flatShading:!0}),{color:n}))),e.add($(t.box(r*1.06,.08,a*1.06,n),0,.54,0))},sacreCoeur(e,t){let n=`#F1EEE6`;e.add($(t.box(.5,.26,.4,n),0,.13,0));let r=(r,i,a,o)=>{e.add($(t.cyl(a*.9,a,i,n,{seg:12}),r,o,0));let s=$(t.sphere(a,n,{seg:12}),r,o+i/2,0);s.scale.y=1.5,e.add(s)};r(0,.22,.15,.4),r(-.2,.1,.07,.33),r(.2,.1,.07,.33)},tokyoTower(e,t){let n=`#F25822`,r=`#EDEDED`,i=0;for(let a=0;a<9;a++){let o=a/9,s=(a+1)/9,c=.19*(1-o)+.03*o,l=.19*(1-s)+.03*s,u=.085,d=a%2?r:n;e.add($(t.cyl(l,c,u,d,{seg:4,glow:n,glowDay:0,glowNight:.7}),0,i+u/2,0)),i+=u}e.add($(t.box(.22,.02,.22,n,{glow:n,glowNight:.7}),0,.28,0)),e.add($(t.box(.12,.02,.12,r),0,.5,0)),e.add($(t.cone(.012,.16,r,{seg:6,glow:`#ff6a2a`,glowNight:.9}),0,i+.08,0))},pagoda(e,t){let n=0;for(let r=0;r<5;r++){let i=.42-r*.06,a=.11;e.add($(t.box(i,a,i,`#B23A2C`,{windows:r<4}),0,n+a/2,0)),e.add($(t.box(i*1.34,.03,i*1.34,`#7A3B2A`),0,n+a+.015,0)),n+=.16999999999999998}e.add($(t.cyl(.012,.012,.1,`#E0C040`,{seg:6}),0,n+.05,0)),e.add($(t.sphere(.03,`#E0C040`,{seg:8,glow:`#ffe680`,glowNight:.8}),0,n+.12,0))},neonBillboard(e,t){let n=`#20242C`;e.add($(t.box(.3,1,.3,n,{windows:!0}),0,.5,0));let r=[`#5AE8E0`,`#E85AA0`,`#E8E06A`],i=(n,r,i,a,o,s,c)=>{let l=$(t.box(n,r,.02,i,{glow:i,glowDay:.6,glowNight:1.1}),a,o,s);l.rotation.y=c,e.add(l)};i(.22,.34,r[0],0,.75,.16,0),i(.16,.5,r[1],.16,.5,0,Math.PI/2),i(.2,.22,r[2],0,.34,-.16,0),e.add($(t.cone(.01,.14,n,{seg:6,glow:`#E85AA0`,glowDay:.4,glowNight:1}),0,1.08,0))}};function Pt(e,t){let n=new W;return Nt[e](n,jt(t)),n}var Ft=``+new URL(`building-skyscraper-d-CapD2Zqe.glb`,import.meta.url).href,It=``+new URL(`building-n-hdv8kKtN.glb`,import.meta.url).href,Lt=``+new URL(`building-g-CsTB1qH9.glb`,import.meta.url).href,Rt=``+new URL(`colormap-CK8fW2HB.png`,import.meta.url).href,zt={skyscraper:{url:Ft,color:`#9cc1dd`,fill:.92},midrise:{url:It,color:`#c9a07a`,fill:.96},setback:{url:Lt,color:`#d9c7a0`,fill:.9}};function Bt({windowGlow:e}){let t=new o;t.setURLModifier(e=>e.includes(`colormap.png`)?Rt:e);let n=new fe(t),r={},i=!1,a=Promise.all(Object.entries(zt).map(async([e,t])=>{r[e]=(await n.loadAsync(t.url)).scene})).then(()=>{i=!0,window.__landmarksReady=!0}).catch(e=>console.error(`landmark models failed:`,e)),s=9e3;function c(t,n,i={}){let a,o;if(kt.includes(t))a=Pt(t,{windowGlow:e,winColors:i.winColors,litFrac:i.litFrac,id:()=>++s}),o=1;else{let e=r[t],n=zt[t];if(!e||!n)return null;a=e.clone(!0),o=n.fill}a.updateMatrixWorld(!0);let c=new F().setFromObject(a).getSize(new L);a.scale.setScalar(n.h*o/c.y),a.updateMatrixWorld(!0);let l=new F().setFromObject(a),u=l.getCenter(new L);return a.position.x+=n.x-u.x,a.position.z+=n.z-u.z,a.position.y+=n.plinthTop-l.min.y,kt.includes(t)?a.traverse(e=>{e.isMesh&&(e.castShadow=!1,e.raycast=()=>{})}):a.traverse(n=>{if(!n.isMesh)return;n.castShadow=!1,n.raycast=()=>{};let r=n=>Y(n.clone(),{color:zt[t].color,id:++s,windowGlow:e,winColors:i.winColors,litFrac:i.litFrac});n.material=Array.isArray(n.material)?n.material.map(r):r(n.material)}),a}return{make:c,whenReady:a,heightFactor:e=>At[e]??1,get ready(){return i}}}var Vt=[`clear`,`rain`,`snow`,`fog`];function Ht({extent:e=7}={}){let t=new W;t.raycast=()=>{};let r=e+2,i=.25,a=(e,t)=>e+Math.random()*(t-e),o=new I(new u(.015,.5),new n({color:`#a9bdd6`,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),600);o.frustumCulled=!1,o.raycast=()=>{};let s=new Float32Array(600*3),c=new Float32Array(600);for(let e=0;e<600;e++)s[e*3]=a(-r,r),s[e*3+1]=a(i,11),s[e*3+2]=a(-r,r),c[e]=a(9,14);let l=new I(new u(.07,.07),new n({color:`#f3f7ff`,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),700);l.frustumCulled=!1,l.raycast=()=>{};let d=new Float32Array(700*3),f=new Float32Array(700),p=new Float32Array(700);for(let e=0;e<700;e++)d[e*3]=a(-r,r),d[e*3+1]=a(i,11),d[e*3+2]=a(-r,r),f[e]=a(0,6.28),p[e]=a(.6,1.2);t.add(o,l);let m=Array.from({length:8},()=>new L),h=0,g=`clear`,_=0,v=0,y=0,b=0,S=0,C=new x,w=(e,t,n,r)=>e+(t-e)*Math.min(1,n*r);function T(e){Vt.includes(e)&&(g=e)}function E(){g=Vt[(Vt.indexOf(g)+1)%Vt.length]}function D(e,t){let n=g===`rain`,u=g===`snow`,x=g===`fog`,T=g!==`clear`;_=w(_,+!!T,e,1.4),v=w(v,+!!T,e,1.2),y=w(y,+!!x,e,.9),S=w(S,T&&!x?1:0,e,1),b=w(b,+!!u,e,u?.22:.5);let E=n?_:0,D=Math.round(600*E);for(let t=0;t<600;t++){if(t>=D){C.position.set(0,-50,0),C.scale.setScalar(0),C.updateMatrix(),o.setMatrixAt(t,C.matrix);continue}s[t*3+1]-=c[t]*e,s[t*3]+=e*1.1,s[t*3+1]<i&&(s[t*3]=a(-r,r),s[t*3+1]=11,s[t*3+2]=a(-r,r)),C.position.set(s[t*3],s[t*3+1],s[t*3+2]),C.rotation.set(0,0,0),C.scale.set(1,1,1),C.updateMatrix(),o.setMatrixAt(t,C.matrix)}o.instanceMatrix.needsUpdate=!0,o.material.opacity=.55*E,h=n?Math.round(8*_):0;for(let e=0;e<h;e++)m[e].set(Math.random(),Math.random(),.05*_);let O=Math.round(700*(u?_:0));for(let n=0;n<700;n++){if(n>=O){C.position.set(0,-50,0),C.scale.setScalar(0),C.updateMatrix(),l.setMatrixAt(n,C.matrix);continue}d[n*3+1]-=p[n]*e;let o=Math.sin(t*1.5+f[n])*.5;d[n*3+1]<i&&(d[n*3]=a(-r,r),d[n*3+1]=11,d[n*3+2]=a(-r,r)),C.position.set(d[n*3]+o,d[n*3+1],d[n*3+2]),C.rotation.set(0,0,0),C.scale.setScalar(1),C.updateMatrix(),l.setMatrixAt(n,C.matrix)}l.instanceMatrix.needsUpdate=!0,l.material.opacity=.9*(u?_:0)}return{group:t,update:D,cycle:E,setKind:T,rainDrops:m,get kind(){return g},get intensity(){return _},get overcast(){return v},get fog(){return y},get snow(){return b},get cloud(){return S},get rainDropCount(){return h},poolCounts:{rain:600,snow:700}}}function Ut(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=(e,n,r)=>{let i=t.createRadialGradient(e,n,0,e,n,r);i.addColorStop(0,`rgba(255,255,255,0.95)`),i.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=i,t.beginPath(),t.arc(e,n,r,0,7),t.fill()};n(128*.42,128*.56,128*.26),n(128*.6,128*.5,128*.3),n(128*.5,128*.46,128*.22),n(128*.34,128*.54,128*.18),n(128*.7,128*.58,128*.18);let r=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5],i=t.getImageData(0,0,128,128),a=i.data;for(let e=0;e<128;e++)for(let t=0;t<128;t++){let n=(e*128+t)*4,i=a[n+3]/255,o=(r[e%4*4+t%4]+.5)/16-.5;a[n+3]=Math.max(0,Math.min(1,Math.floor(i*5+.5+o)/5))*255}t.putImageData(i,0,0);let o=new A(e);return o.colorSpace=N,o}function Wt({extent:e=8,count:t=16}={}){let n=new W;n.raycast=()=>{};let r=Ut(),i=e+6,a=(e,t)=>e+Math.random()*(t-e),o=[];for(let e=0;e<t;e++){let e=new V({map:r,transparent:!0,depthWrite:!1,opacity:0,fog:!0}),t=new k(e),s={sp:t,mat:e,wisp:Math.random(),x:a(-i,i),z:a(-i,i),hiY:a(4,6.8),loY:a(.6,2.2),w:a(3,5.6),h:a(1.7,3),speed:a(.25,.7),op:a(.6,1)};t.raycast=()=>{},o.push(s),n.add(t)}let s=new H,c=new H(`#ffffff`),l=new H(`#5b626e`);function u(e,t,n,r){let u=r?r.cloud:0,d=r?r.fog:0,f=Math.min(1,.4+.6*u+.5*d);s.copy(n.sky).lerp(c,.62),s.lerp(l,.6*u);for(let n=0;n<o.length;n++){let r=o[n],c=n/o.length<f;r.x+=r.speed*e*(.6+.8*u),r.x>i&&(r.x=-i,r.z=a(-i,i));let l=Math.min(Gt(r.x,-i,-i+3),1-Gt(r.x,i-3,i)),p=r.hiY*(1-d)+r.loY*d,m=1-.5*r.wisp,h=.72*Math.max(0,1-d-u)+1*u+.42*d,g=c?Math.max(0,h)*r.op*m*l:0;r.mat.opacity+=(g-r.mat.opacity)*Math.min(1,e*2.5),r.mat.color.copy(s);let _=r.w*(1+.6*d)*(1+.4*r.wisp),v=r.h*(1-.35*d);r.sp.scale.set(_,v,1),r.sp.position.set(r.x,p+Math.sin(t*.3+n)*.15,r.z)}}function d(e){r=e;for(let t of o)t.mat.map=e,t.mat.needsUpdate=!0}let f=o.map((e,t)=>({kind:`cloud`,label:`cloud ${t+1}`,getWorldPos:t=>t.copy(e.sp.position),active:()=>e.mat.opacity>.06,info:()=>`cloud · ${e.wisp>.6?`wispy`:`puffy`} · drifting east${e.sp.position.y<3?` (low mist)`:``}`}));function p(){return f}return{group:n,update:u,setTexture:d,getFollowables:p,get count(){return o.length}}}function Gt(e,t,n){let r=Math.max(0,Math.min(1,(e-t)/(n-t)));return r*r*(3-2*r)}var Kt={person:4.5,car:6,gull:6,fish:8,boat:9,cloud:16};function qt({rig:e,getCamera:t,sources:n=[]}){let r=null,i=new L,a=new L,o=()=>{let e=[];for(let t of n)if(t&&t.getFollowables){let n=t.getFollowables();n&&e.push(...n)}return e},s=e=>!e.active||e.active();function c(t){return t?(r=t,e.setFollow(e=>t.getWorldPos(e),{frame:t.frame??Kt[t.kind]??8}),t):null}function l(){r=null,e.clearFollow()}function u(e,n,r=.14){let l=t(),u=null,d=r;for(let t of o()){if(!s(t)||(t.getWorldPos(i),a.copy(i).project(l),a.z>1||a.z<-1))continue;let r=Math.hypot(a.x-e,a.y-n);r<d&&(d=r,u=t)}return u?c(u):null}function d(e=1,t=null){let n=o().filter(e=>(!t||e.kind===t)&&s(e));if(t||(n=Jt(n)),!n.length)return null;let i=r?n.indexOf(r):-1;return i=((i+e)%n.length+n.length)%n.length,c(n[i])}function f(){r&&r.active&&!r.active()&&l()}return{pickAt:u,cycle:d,follow:c,release:l,prune:f,get focus(){return r},get count(){return o().length},get readout(){return r?{kind:r.kind,label:r.label,info:r.info?r.info():``}:null}}}function Jt(e){let t=new Map;for(let n of e)t.has(n.kind)||t.set(n.kind,[]),t.get(n.kind).push(n);let n=[...t.values()],r=[];for(let e=0,t=!0;t;e++){t=!1;for(let i of n)e<i.length&&(r.push(i[e]),t=!0)}return r}function Yt(e){let t=Z(e>>>0),n=new Uint8Array(256);for(let e=0;e<256;e++)n[e]=e;for(let e=255;e>0;e--){let r=t()*(e+1)|0,i=n[e];n[e]=n[r],n[r]=i}let r=new Uint8Array(512);for(let e=0;e<512;e++)r[e]=n[e&255];let i=e=>e*e*e*(e*(e*6-15)+10),a=(e,t,n)=>e+(t-e)*n,o=(e,t,n)=>{let r=e&4?n:t,i=e&4?t:n;return(e&1?-r:r)+(e&2?-i:i)};return(e,t)=>{let n=Math.floor(e)&255,s=Math.floor(t)&255,c=e-Math.floor(e),l=t-Math.floor(t),u=i(c),d=i(l),f=r[r[n]+s],p=r[r[n]+s+1],m=r[r[n+1]+s],h=r[r[n+1]+s+1];return a(a(o(f,c,l),o(m,c-1,l),u),a(o(p,c,l-1),o(h,c-1,l-1),u),d)}}function Xt(e,t,n,r,i,a){let o=.5,s=1,c=0,l=0;for(let u=0;u<r;u++)c+=o*e(t*s,n*s),l+=o,o*=a,s*=i;return c/l}function Zt(e,t,n,r,i,a){let o=.5,s=1,c=0,l=0;for(let u=0;u<r;u++){let r=1-Math.abs(e(t*s,n*s));r*=r,c+=o*r,l+=o,o*=a,s*=i}return c/l}var Qt=(e,t,n)=>(n=Math.max(0,Math.min(1,(n-e)/(t-e))),n*n*(3-2*n)),$t=[{key:`ocean`,color:`#2a5b7a`},{key:`beach`,color:`#d8c89a`},{key:`grassland`,color:`#6f9a4e`},{key:`forest`,color:`#3f6b3a`},{key:`hills`,color:`#8a8a55`},{key:`rock`,color:`#7d7468`},{key:`snow`,color:`#eef2f6`}],en=Object.fromEntries($t.map((e,t)=>[e.key,t]));function tn(e,t,n){if(e<n-.015)return en.ocean;if(e<n+.02)return en.beach;let r=(e-n)/(1-n);return r>.82?en.snow:r>.6?en.rock:r>.34?t>.45?en.forest:en.hills:t>.55?en.forest:en.grassland}var nn={valley:{freq:2.3,mtnMask:.3,mtnGain:.55,sea:.3,relief:7.5,warp:.9},archipelago:{freq:3.4,mtnMask:.18,mtnGain:.4,sea:.5,relief:6,warp:1.3},mountains:{freq:2,mtnMask:.62,mtnGain:.85,sea:.26,relief:11,warp:.8},plains:{freq:1.8,mtnMask:.12,mtnGain:.3,sea:.28,relief:4.5,warp:.7}},rn=Object.keys(nn);function an({seed:e=1,size:t=160,preset:n=`valley`,params:r=null}={}){let i=r||nn[n]||nn.valley,a=Yt(e*2+1),o=Yt(e*5+9),s=Yt(e*7+13),c=Yt(e*3+5),l=new Float32Array(t*t),u=new Uint8Array(t*t),d=1/0,f=-1/0;for(let e=0;e<t;e++)for(let n=0;n<t;n++){let r=(n/t-.5)*i.freq,p=(e/t-.5)*i.freq,m=r+i.warp*Xt(c,r+5.2,p+1.3,4,2,.5),h=p+i.warp*Xt(c,r+9.7,p+4.1,4,2,.5),g=Xt(a,m,h,6,2,.5)*.5+.5,_=Qt(.45,.75,Xt(o,r*.5,p*.5,3,2,.5)*.5+.5),v=Zt(a,m*1.7+11,h*1.7+7,5,2,.5);g=g*(1-_*i.mtnMask)+v*(_*i.mtnMask*(.6+i.mtnGain));let y=n/t-.5,b=e/t-.5,x=Math.sqrt(y*y+b*b)*2;g-=Qt(.62,1,x)*.55,g=Math.max(0,Math.min(1,g));let S=Xt(s,r*.8+3,p*.8+8,4,2,.5)*.5+.5,C=e*t+n;l[C]=g,u[C]=tn(g,S,i.sea),g<d&&(d=g),g>f&&(f=g)}return{size:t,height:l,biome:u,sea:i.sea,relief:i.relief,minH:d,maxH:f,params:i,seed:e,preset:n}}function on(e,{worldSize:t=26,baseY:n=0,chunks:r=4}={}){let{size:i,height:a,biome:o,sea:s,relief:c}=e,l=new W,u=new H,d=$t.map(e=>new H(e.color)),f=t/(i-1),p=t/2,m=e=>e*f-p,h=e=>e*f-p,g=e=>n+(e-s)*c,_=Math.ceil((i-1)/r),v=new L,y=new L,b=new L;for(let e=0;e<r;e++)for(let t=0;t<r;t++){let n=t*_,r=e*_,s=Math.min(n+_,i-1),c=Math.min(r+_,i-1);if(s<=n||c<=r)continue;let f=(s-n)*(c-r)*6,p=new Float32Array(f*3),x=new Float32Array(f*3),C=new Float32Array(f*3),w=0,T=(e,t,n,r,i,a,o)=>{p[w*3]=e,p[w*3+1]=t,p[w*3+2]=n,x[w*3]=r,x[w*3+1]=i,x[w*3+2]=a,C[w*3]=o.r,C[w*3+1]=o.g,C[w*3+2]=o.b,w++},E=(e,t,n,r,i,a,o,s,c,l)=>{v.set(r-e,i-t,a-n),y.set(o-e,s-t,c-n),b.crossVectors(v,y).normalize(),T(e,t,n,b.x,b.y,b.z,l),T(r,i,a,b.x,b.y,b.z,l),T(o,s,c,b.x,b.y,b.z,l)};for(let e=r;e<c;e++)for(let t=n;t<s;t++){let n=a[e*i+t],r=a[e*i+t+1],s=a[(e+1)*i+t],c=a[(e+1)*i+t+1],l=m(t),f=m(t+1),p=h(e),_=h(e+1),v=g(n),y=g(r),b=g(s),x=g(c),S=d[o[e*i+t]],C=d[o[(e+1)*i+t+1]];E(l,v,p,l,b,_,f,y,p,u.copy(S)),E(f,y,p,l,b,_,f,x,_,u.copy(C))}let D=new ue;D.setAttribute(`position`,new B(p,3)),D.setAttribute(`normal`,new B(x,3)),D.setAttribute(`color`,new B(C,3));let O=new G(D,new S({vertexColors:!0,roughness:.92,metalness:0,flatShading:!0}));O.castShadow=!0,O.receiveShadow=!0,O.raycast=()=>{},l.add(O)}return l.userData.dispose=()=>l.traverse(e=>{e.isMesh&&(e.geometry.dispose(),e.material.dispose())}),l}var sn={beach:[{type:`rock`,density:.05,maxSlope:1.4}],grassland:[{type:`tree`,density:.1,maxSlope:.7},{type:`tuft`,density:.3,maxSlope:.9}],forest:[{type:`tree`,density:.62,maxSlope:.8},{type:`rock`,density:.03,maxSlope:1.2}],hills:[{type:`tree`,density:.14,maxSlope:.7},{type:`rock`,density:.16,maxSlope:1.6}],rock:[{type:`rock`,density:.22,maxSlope:2}]};function cn({terrain:e,seed:t=1,worldSize:n=26,baseY:r=0,biomeKeys:i,density:a=1,max:o=9e3}={}){let{size:s,height:c,biome:l,sea:u,relief:d}=e,f=Z((t^97155048)>>>0),p=n/(s-1),m=n/2,h=e=>r+(e-u)*d,g=(e,t)=>{let n=Math.max(1,Math.min(s-2,e)),r=Math.max(1,Math.min(s-2,t)),i=(c[r*s+n+1]-c[r*s+n-1])*d/(2*p),a=(c[(r+1)*s+n]-c[(r-1)*s+n])*d/(2*p);return Math.hypot(i,a)},_={tree:[],rock:[],tuft:[]};for(let e=1;e<s-1;e+=2)for(let t=1;t<s-1;t+=2){let n=e*s+t,r=c[n];if(r<u+.005)continue;let d=sn[i[l[n]]];if(!d)continue;let v=g(t,e);for(let n of d){let i=f();if(v>n.maxSlope||i>n.density*a)continue;let s=_[n.type];if(s.length>=o)continue;let c=(f()-.5)*p*2,l=(f()-.5)*p*2,u=t*p-m+c,d=e*p-m+l;s.push({x:u,y:h(r),z:d,s:.7+f()*.6,r:f()*Math.PI*2,t:.82+f()*.36})}}return{placements:_,counts:{tree:_.tree.length,rock:_.rock.length,tuft:_.tuft.length}}}function ln(e,t){let n=new H(t),r=e.attributes.position.count,i=new Float32Array(r*3);for(let e=0;e<r;e++)i[e*3]=n.r,i[e*3+1]=n.g,i[e*3+2]=n.b;return e.setAttribute(`color`,new B(i,3)),e}function un(e){let t=0;for(let n of e)t+=n.attributes.position.count;let n=new Float32Array(t*3),r=new Float32Array(t*3),i=new Float32Array(t*3),a=0;for(let t of e)n.set(t.attributes.position.array,a*3),r.set(t.attributes.normal.array,a*3),i.set(t.attributes.color.array,a*3),a+=t.attributes.position.count;let o=new ue;return o.setAttribute(`position`,new B(n,3)),o.setAttribute(`normal`,new B(r,3)),o.setAttribute(`color`,new B(i,3)),o}function dn(){return un([ln(new P(.045,.06,.34,6).translate(0,.17,0).toNonIndexed(),`#5b3f28`),ln(new R(.3,.55,7).translate(0,.55,0).toNonIndexed(),`#3f7d3a`),ln(new R(.22,.42,7).translate(0,.85,0).toNonIndexed(),`#4f9046`)])}function fn(){let e=new i(.18,0).toNonIndexed(),t=e.attributes.position,n=Z(3098);for(let e=0;e<t.count;e++){let r=.78+n()*.5;t.setXYZ(e,t.getX(e)*r,t.getY(e)*r*.8,t.getZ(e)*r)}return e.computeVertexNormals(),ln(e,`#7d7468`)}function pn(){return ln(new R(.06,.16,4).translate(0,.08,0).toNonIndexed(),`#6f9a4e`)}function mn(e){let t=new W;t.raycast=()=>{};let n={tree:dn(),rock:fn(),tuft:pn()},r={tree:0,rock:-.05,tuft:0},i=new v,a=new E,o=new L,s=new L,c=new L(0,1,0),l=new H;for(let u of[`tree`,`rock`,`tuft`]){let d=e[u];if(!d||!d.length)continue;let f=new S({vertexColors:!0,roughness:.9,metalness:0,flatShading:!0}),p=new I(n[u],f,d.length);p.castShadow=!0,p.receiveShadow=!1,p.frustumCulled=!0,p.raycast=()=>{},p.instanceColor=new h(new Float32Array(d.length*3),3);for(let e=0;e<d.length;e++){let t=d[e];o.set(t.x,t.y+r[u],t.z),a.setFromAxisAngle(c,t.r),s.setScalar(t.s),i.compose(o,a,s),p.setMatrixAt(e,i),p.setColorAt(e,l.setScalar(t.t))}p.instanceMatrix.needsUpdate=!0,p.instanceColor&&(p.instanceColor.needsUpdate=!0),t.add(p)}return t.userData.dispose=()=>t.traverse(e=>{e.isInstancedMesh&&(e.geometry.dispose(),e.material.dispose())}),t}function hn({terrain:e,seed:t,worldSize:n,baseY:r,biomeKeys:i,density:a,max:o}){let{placements:s,counts:c}=cn({terrain:e,seed:t,worldSize:n,baseY:r,biomeKeys:i,density:a,max:o}),l=mn(s);return l.userData.counts=c,l}var gn=`attribute float aSize;
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
}`,_n=`precision highp float;

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
}`,vn={realistic:0,charm:0,pixel:2,vector:1},yn={realistic:1,charm:1,pixel:1.9,vector:1.2};function bn({seed:e=1517,count:t=340,spreadX:n=21,yLo:r=3,yHi:i=18,zBase:a=7.2}={}){let o=new W;o.raycast=()=>{};let s=Z(e>>>0),c=new Float32Array(t*3),l=new Float32Array(t),u=new Float32Array(t),d=new Float32Array(t),f=[];for(let e=0;e<t;e++){let t=(s()*2-1)*n,o=r+s()*(i-r),p=-a-s()*.7;c[e*3]=t,c[e*3+1]=o,c[e*3+2]=p;let m=.35+s()*.65;u[e]=m,l[e]=1.6+s()*2.8+(m>.85?2.2:0),d[e]=s()*Math.PI*2,m>.82&&f.push([t,o,p])}let h=new ue;h.setAttribute(`position`,new B(c,3)),h.setAttribute(`aSize`,new B(l,1)),h.setAttribute(`aBright`,new B(u,1)),h.setAttribute(`aPhase`,new B(d,1));let g=new z({vertexShader:gn,fragmentShader:_n,uniforms:{uTime:{value:0},uTwinkle:{value:1},uSizeScale:{value:1},uColor:{value:new H(`#eaf0ff`)},uNight:{value:0},uMode:{value:0}},transparent:!0,depthWrite:!1,blending:2,fog:!1,toneMapped:!1}),_=new T(h,g);_.raycast=()=>{},_.frustumCulled=!1,o.add(_);let v=[];if(f.length>6)for(let e=0;e<3;e++){let e=Math.floor(s()*f.length);for(let t=0;t<3;t++){let t=f[e],n=f[(e+1+Math.floor(s()*2))%f.length];v.push(t[0],t[1],t[2],n[0],n[1],n[2]),e=(e+1)%f.length}}let y=[[[0,2],[0,0]],[[0,0],[.7,0]],[[2.1,2],[1.4,2]],[[1.4,2],[1.4,0]],[[1.4,0],[2.1,0]],[[2.1,0],[2.1,1]],[[2.1,1],[1.7,1]],[[2.8,0],[2.8,2]],[[2.8,2],[3.5,2]],[[3.5,2],[3.5,1]],[[3.5,1],[2.8,1]],[[2.8,1],[3.6,0]]],b=-a-.4,x=.62;for(let[[e,t],[n,r]]of y)v.push(-3+e*x,12+t*x,b,-3+n*x,12+r*x,b);let S=new ue;S.setAttribute(`position`,new ge(v,3));let C=new m(S,new p({color:`#9fb6e8`,transparent:!0,opacity:0,depthWrite:!1,fog:!1,toneMapped:!1}));C.raycast=()=>{},C.frustumCulled=!1,o.add(C);let w=new k(new V({map:xn(),transparent:!0,opacity:0,depthWrite:!1,blending:2,fog:!1,toneMapped:!1}));w.raycast=()=>{},w.scale.set(n*2.4,n*.95,1),w.position.set(2,12,-a-.7),w.material.rotation=-.5,w.renderOrder=-3,o.add(w);let E=-1;function D(e,t=`realistic`,n=0,r=!1){g.uniforms.uTime.value=n,g.uniforms.uTwinkle.value=+!r,g.uniforms.uNight.value=e;let i=vn[t]??0;i!==E&&(g.uniforms.uMode.value=i,E=i),g.uniforms.uSizeScale.value=yn[t]??1,C.material.opacity=e*.5,w.material.opacity=e*.32,o.visible=e>.001}return{group:o,update:D}}function xn(){let e=document.createElement(`canvas`);e.width=e.height=256;let t=e.getContext(`2d`),n=t.createRadialGradient(256/2,256/2,0,256/2,256/2,256/2);n.addColorStop(0,`rgba(150,170,230,0.5)`),n.addColorStop(.4,`rgba(120,130,200,0.22)`),n.addColorStop(1,`rgba(90,100,160,0)`),t.fillStyle=n,t.fillRect(0,0,256,256);let r=Z(20145);for(let e=0;e<7;e++){let e=40+r()*176,n=70+r()*116,i=14+r()*30,a=t.createRadialGradient(e,n,0,e,n,i);a.addColorStop(0,`rgba(200,210,255,0.18)`),a.addColorStop(1,`rgba(200,210,255,0)`),t.fillStyle=a,t.beginPath(),t.arc(e,n,i,0,Math.PI*2),t.fill()}let i=new A(e);return i.colorSpace=N,i}var Sn=Math.PI*2;function Cn(e){let t=document.createElement(`canvas`);t.width=t.height=128;let n=t.getContext(`2d`),r=n.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return r.addColorStop(0,`#ffffff`),r.addColorStop(.34,`#fffaf0`),r.addColorStop(.66,e),r.addColorStop(.86,e),r.addColorStop(1,`rgba(255,255,255,0)`),n.fillStyle=r,n.beginPath(),n.arc(128/2,128/2,128/2,0,Sn),n.fill(),An(t,!0)}function wn(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);n.addColorStop(0,`#ffffff`),n.addColorStop(.4,`#eef3ff`),n.addColorStop(.82,`#c4cee6`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,128/2,0,Sn),t.fill(),t.globalAlpha=.14,t.fillStyle=`#8b97b4`;for(let[e,n,r]of[[54,50,9],[78,66,7],[60,82,5]])t.beginPath(),t.arc(e,n,r,0,Sn),t.fill();return An(e,!0)}function Tn(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`);t.translate(128/2,128/2),t.fillStyle=`rgba(255,210,120,0.9)`;for(let e=0;e<12;e++)t.rotate(Sn/12),t.beginPath(),t.moveTo(0,-28),t.lineTo(7,-54),t.lineTo(-7,-54),t.closePath(),t.fill();let n=t.createRadialGradient(0,0,0,0,0,32);return n.addColorStop(0,`#ffffff`),n.addColorStop(.4,`#fff1c8`),n.addColorStop(.8,`#ffb24a`),n.addColorStop(1,`#ff8a2a`),t.fillStyle=n,t.beginPath(),t.arc(0,0,32,0,Sn),t.fill(),An(e,!0)}function En(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,46);n.addColorStop(0,`#ffffff`),n.addColorStop(.5,`#e6ecfb`),n.addColorStop(1,`#c2cce4`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,46,0,Sn),t.fill(),t.fillStyle=`#aab6d2`;for(let[e,n,r]of[[52,48,11],[80,62,8],[58,82,7],[40,66,5]])t.beginPath(),t.arc(e,n,r,0,Sn),t.fill();return An(e,!0)}function Dn(e,t,n){let r=document.createElement(`canvas`);r.width=r.height=144;let i=r.getContext(`2d`),a=17/2,o=18/2-.5;for(let r=0;r<18;r++)for(let s=0;s<18;s++){let c=Math.hypot(s-a,r-a);c>o||(i.fillStyle=c<o*.45?e:c<o*.78?t:n,i.fillRect(Math.round(s*8),Math.round(r*8),8,8))}return An(r,!1)}function On(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return n.addColorStop(0,`rgba(255,255,255,0.9)`),n.addColorStop(.38,`rgba(255,255,255,0.3)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,128/2,0,Sn),t.fill(),An(e,!0)}function kn(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2),r=`20,30,48`;return n.addColorStop(0,`rgba(${r},0)`),n.addColorStop(.42,`rgba(${r},0)`),n.addColorStop(.6,`rgba(${r},0.6)`),n.addColorStop(1,`rgba(${r},0)`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,128/2,0,Sn),t.fill(),An(e,!0)}function An(e,t){let n=new A(e);return n.colorSpace=N,t||(n.magFilter=c,n.minFilter=c),n}var jn=(e,t,n)=>{let r=Math.max(0,Math.min(1,(e-t)/(n-t)));return r*r*(3-2*r)};function Mn({skyW:e=15,skyY0:t=3.4,skyH:n=3.8,z:r=-7.8,biasX:i=4.5,sunSize:a=4.6,moonSize:o=4}={}){let s=new W;s.raycast=()=>{};let c=(e,t)=>{let n=new k(new V({map:e,transparent:!0,depthWrite:!1,fog:!1,toneMapped:!1,...t?{blending:2}:{}}));return n.raycast=()=>{},n},l={realistic:Cn(`#ffcf8a`),charm:Tn(),pixel:Dn(`#fff6e0`,`#ffc24a`,`#ff8a2a`)},u={realistic:wn(),charm:En(),pixel:Dn(`#ffffff`,`#cdd6ee`,`#9aa6c6`)},d=On(),f=c(kn(),!1),p=c(d,!0),m=c(l.realistic),h=c(d,!0),g=c(u.realistic);f.renderOrder=-2,p.renderOrder=-1,s.add(f,p,m,h,g);let _=bn({});_.group.renderOrder=-4,s.add(_.group);let v=typeof window<`u`&&window.matchMedia?window.matchMedia(`(prefers-reduced-motion: reduce)`):null,y={realistic:{sunGlow:3,sunGlowOp:.7,moonGlow:2.6,moonGlowOp:.5,sizeMul:1,sunHaloOp:.85},charm:{sunGlow:2.2,sunGlowOp:.55,moonGlow:2.1,moonGlowOp:.42,sizeMul:1.08,sunHaloOp:.7},pixel:{sunGlow:1.7,sunGlowOp:.4,moonGlow:1.7,moonGlowOp:.32,sizeMul:1,sunHaloOp:.6}},b=`realistic`;function x(e){e===b||!y[e]||(b=e,m.material.map=l[e],m.material.needsUpdate=!0,g.material.map=u[e],g.material.needsUpdate=!0)}new H;let S=new H(`#fff3df`),C=new H(`#ffb060`),w=new H(`#ff6a2a`),T=new H(`#eef2ff`),E=new H(`#9fbcff`);function D(s,c,l,u,d=`realistic`){x(d);let D=y[b],O=l.sunArc,k=u?Math.min(1,(u.cloud||0)*.85+(u.fog||0)*.7):0,ee=O.y,A=jn(ee,-.04,.1)*(1-.7*k),j=1-jn(Math.abs(ee),.02,.5);m.position.set(O.x*e+i,t+O.y*n,r),p.position.copy(m.position);let M=a*D.sizeMul*(1+.55*j);m.scale.setScalar(M),p.scale.setScalar(M*D.sunGlow),m.material.color.copy(S),p.material.color.copy(C).lerp(w,j),m.material.opacity=A,p.material.opacity=A*D.sunGlowOp*(.7+.5*j),f.position.copy(m.position),f.scale.setScalar(M*1.7),f.material.opacity=A*(1-j)*D.sunHaloOp;let N=jn(-O.y,-.04,.1)*(1-.65*k);g.position.set(-O.x*e+i,t+-O.y*n,r),h.position.copy(g.position);let te=o*D.sizeMul;g.scale.setScalar(te),h.scale.setScalar(te*D.moonGlow),g.material.color.copy(T),h.material.color.copy(E),g.material.opacity=N,h.material.opacity=N*D.moonGlowOp;let ne=jn(-O.y,-.05,.18)*(1-.85*k);_.update(ne,d,c,!!(v&&v.matches))}return{group:s,update:D}}var Nn=`varying vec2 vUv;

void main() {
  
  
  
  vUv = uv;

  
  
  
  
  
  
  
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,Pn=`precision highp float;

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
}`,Fn=`varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0); 
}`,In=`precision highp float;

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
}`,Ln=`precision highp float;

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
}`,Rn=`precision highp float;

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
}`,zn=`const float CA_STRENGTH   = 0.0030;  
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
}`,Bn=`const float DITHER = 0.55;   

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
}`,Vn=`precision highp float;

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
}`,Hn=`precision highp float;

varying vec2 vUv;
uniform sampler2D uToon;   
uniform sampler2D uPixel;  
uniform float     uBlend;  

void main() {
  vec3 t = texture2D(uToon, vUv).rgb;
  vec3 p = texture2D(uPixel, vUv).rgb;
  gl_FragColor = vec4(mix(t, p, uBlend), 1.0);
}`,Un=`precision highp float;

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
}`,Wn={"1-bit":{gridWidth:110,dither:.6,palette:[`#15120c`,`#c8b486`]},gb:{gridWidth:130,dither:.4,palette:[`#0f380f`,`#306230`,`#8bac0f`,`#9bbc0f`]},"8-bit":{gridWidth:160,dither:.55,palette:[`#140c1c`,`#442434`,`#30346d`,`#4e4a4e`,`#854c30`,`#346524`,`#d04648`,`#757161`,`#597dce`,`#d27d2c`,`#8595a1`,`#6daa2c`,`#d2aa99`,`#6dc2ca`,`#dad45e`,`#deeed6`]},"16-bit":{gridWidth:280,dither:.3,palette:`#000000.#222034.#45283c.#663931.#8f563b.#df7126.#d9a066.#eec39a.#fbf236.#99e550.#6abe30.#37946e.#4b692f.#524b24.#323c39.#3f3f74.#306082.#5b6ee1.#639bff.#5fcde4.#cbdbfc.#ffffff.#9badb7.#847e87.#696a6a.#595652.#76428a.#ac3232.#d95763.#d77bba.#8f974a.#8a6f30`.split(`.`)},modern:{gridWidth:460,dither:.6,palette:null}},Gn=[`gb`,`8-bit`,`16-bit`,`modern`];function Kn(e){let t=Math.max(e.length,1),n=new Float32Array(t*4);e.forEach((e,t)=>{let r=new H(e);n[t*4+0]=r.r,n[t*4+1]=r.g,n[t*4+2]=r.b,n[t*4+3]=1});let r=new ne(n,t,1,_,y);return r.minFilter=c,r.magFilter=c,r.needsUpdate=!0,r}var qn=220,Jn={night:[`#0A0C16`,`#1C2236`,`#3A3A52`,`#5A5A78`,`#8A92B0`],dawn:[`#1A1008`,`#43281A`,`#7A4A30`,`#B07A4E`,`#E8A86A`],noon:[`#16100A`,`#3A2F1E`,`#6B563A`,`#937B54`,`#B89968`],dusk:[`#140A0A`,`#3E1E1A`,`#7A3828`,`#B85A36`,`#F0884A`]},Yn={night:[`#020604`,`#06180E`,`#10401E`,`#1E9040`,`#7FE0FF`],dawn:[`#060603`,`#1A2410`,`#3A6B22`,`#6CC040`,`#FFC060`],noon:[`#050805`,`#0E2912`,`#1E6B2F`,`#3CF06A`,`#FFB000`],dusk:[`#080402`,`#241408`,`#6B4A12`,`#E0A030`,`#FF7030`]};function Xn({demo:e=!1,citySeed:t=0,profileIndex:i=0}={}){let a=new oe({antialias:!0,preserveDrawingBuffer:!0});a.shadowMap.enabled=!0,a.shadowMap.type=1,a.shadowMap.autoUpdate=!1,a.shadowMap.needsUpdate=!0;let o=!!(window.matchMedia&&window.matchMedia(`(pointer: coarse)`).matches);a.setPixelRatio(Math.min(window.devicePixelRatio,o?1.5:2)),a.setSize(window.innerWidth,window.innerHeight),a.setClearColor(920327,1),document.body.appendChild(a.domElement);let s=a.getDrawingBufferSize(new j),d=new pe;d.fog=new r(10465470,0);let p=new H(`#aeb6c0`),m=.062,h=new H(`#74508f`),v=new H,y=je({aspect:window.innerWidth/window.innerHeight}),x=ft({t:.5}),S={type:b,format:_,minFilter:c,magFilter:c,wrapS:te,wrapT:te,depthBuffer:!1,stencilBuffer:!1},w=[new U(256,256,S),new U(256,256,S),new U(256,256,S)];for(let e of w)a.setRenderTarget(e),a.clear();a.setRenderTarget(null);let T=new pe,E=new C(-1,1,1,-1,0,1),O=new z({vertexShader:Fn,fragmentShader:In,uniforms:{uCurr:{value:null},uPrev:{value:null},uTexel:{value:new j(1/256,1/256)},uMouse:{value:new j(-1,-1)},uMouseStrength:{value:0},uC2:{value:.25},uDamping:{value:.992},uRainCount:{value:0},uRainDrops:{value:Array.from({length:8},()=>new L)},uWakeCount:{value:0},uWakeDrops:{value:Array.from({length:8},()=>new L)}}});T.add(new G(new u(2,2),O));let k=new U(s.x,s.y,{minFilter:g,magFilter:g,depthBuffer:!0,stencilBuffer:!1});function ee(e){let t=document.createElement(`canvas`);t.width=t.height=1024;let n=t.getContext(`2d`);n.fillStyle=e?`#0c1418`:`#15110b`,n.fillRect(0,0,1024,1024),n.strokeStyle=e?`rgba(120,150,170,0.22)`:`rgba(184,153,104,0.30)`,n.lineWidth=2;for(let e=0;e<=1024;e+=64)n.beginPath(),n.moveTo(e,0),n.lineTo(e,1024),n.stroke(),n.beginPath(),n.moveTo(0,e),n.lineTo(1024,e),n.stroke();e||(n.fillStyle=`#B89968`,n.font=`bold 360px Georgia, serif`,n.textAlign=`center`,n.textBaseline=`middle`,n.fillText(`LGR`,512,470),n.font=`600 64px ui-monospace, monospace`,n.fillText(`WEB · STUDIO`,512,720));let r=new A(t);return r.colorSpace=N,r}let M=new G(new u(28,28),new n({map:ee(e)}));M.rotation.x=-Math.PI/2,M.position.y=-.35,d.add(M);let ne=new G(new u(40,24),new z({depthWrite:!1,vertexShader:Nn,fragmentShader:Pn,uniforms:{uTime:{value:0},uInk:{value:x.horizon},uGold:{value:x.sky},uFogColor:{value:v},uFogAmt:{value:0},uFogCharm:Re}}));ne.position.set(0,3,-8),d.add(ne);let P=new z({vertexShader:Ln,fragmentShader:Rn,uniforms:{uHeight:{value:null},uScene:{value:k.texture},uTexel:{value:new j(1/256,1/256)},uResolution:{value:new j(s.x,s.y)},uDisplace:{value:.42},uNormalStrength:{value:22},uRefractStrength:{value:.06},uChromaScale:{value:1},uNormalMatrix:{value:new f},uLightDir:{value:x.sunDir},uInk:{value:new H(`#2A2218`)},uGold:{value:new H(`#B89968`)},uVector:Me,uVecWater:{value:new H(`#1fb8d8`)},uVecTint:{value:Ne}}}),F=new G(new u(28,28,255,255),P);F.rotation.x=-Math.PI/2,F.updateMatrixWorld(!0),P.uniforms.uNormalMatrix.value.getNormalMatrix(F.matrixWorld),d.add(F);let re={value:0},ie=Bt({windowGlow:re}),I=it({seed:t,profileIndex:i,landmarkFactory:ie,windowGlow:re});d.add(I.group);let ae=_t({plinthTop:.3,extent:I.extent,profile:I.state.profile});d.add(ae.group);let R=Ot({extent:I.extent,waterSize:28,plinthTop:.3});d.add(R.group),O.uniforms.uWakeDrops.value=R.wakeDrops;let B=Ht({extent:I.extent});d.add(B.group),O.uniforms.uRainDrops.value=B.rainDrops;let V=Wt({extent:I.extent});d.add(V.group);let se=qt({rig:y,getCamera:()=>y.camera,sources:[ae,R,V]}),ce=Mn();d.add(ce.group);let le=null,ue=null,de=!1,fe=1234,me=`valley`,he=$t.map(e=>e.key),W=()=>[I.group,ae.group,R.group],ge=()=>[le,ue].filter(Boolean);function _e(){for(let e of ge())d.remove(e),e.userData.dispose?.();let e=an({seed:fe,size:160,preset:me});le=on(e,{worldSize:26,baseY:0,chunks:6}),ue=hn({terrain:e,seed:fe,worldSize:26,baseY:0,biomeKeys:he});for(let e of ge())e.visible=de,d.add(e);typeof window<`u`&&(window.__world={seed:fe,preset:me,active:de,chunks:le.children.length,scatter:ue.userData.counts})}let ve=e=>{for(let t of ge())t.visible=e},ye={enter(){le||_e(),de=!0,ve(!0);for(let e of W())e.visible=!1;window.__world&&(window.__world.active=!0)},exit(){de=!1,ve(!1);for(let e of W())e.visible=!0;window.__world&&(window.__world.active=!1)},reroll(){return fe=Math.random()*1e9|0,_e(),ye.enter(),fe},setPreset(e){return rn.includes(e)&&(me=e,_e(),ye.enter()),me},get active(){return de},get seed(){return fe},get preset(){return me},get presets(){return rn}};I.group.remove(I.key),d.add(I.key),I.key.castShadow=!0,I.key.shadow.mapSize.set(2048,2048),I.key.shadow.bias=-18e-5,I.key.shadow.normalBias=.028,d.add(I.key.target);function be(){let e=I.key.shadow.camera,t=I.extent+4.5;e.left=-t,e.right=t,e.top=t,e.bottom=-t,e.near=1,e.far=48,e.updateProjectionMatrix(),a.shadowMap.needsUpdate=!0}be();let xe=new D(s.x,s.y),Se=new U(s.x,s.y,{minFilter:g,magFilter:g,depthBuffer:!0,stencilBuffer:!1,depthTexture:xe}),Ce=new U(s.x,s.y,{minFilter:g,magFilter:g,depthBuffer:!1,stencilBuffer:!1}),K=new U(s.x,s.y,{minFilter:g,magFilter:g,depthBuffer:!1,stencilBuffer:!1}),we=new U(s.x,s.y,{minFilter:g,magFilter:g,depthBuffer:!1,stencilBuffer:!1}),Te=new pe,q=new C(-1,1,1,-1,0,1),Ee=new G(new u(2,2));Te.add(Ee);let J=new z({vertexShader:Fn,fragmentShader:zn,uniforms:{uScene:{value:Se.texture},uTime:{value:0},uResolution:{value:new j(s.x,s.y)},uGrain:{value:1},uChroma:{value:1},uExposure:{value:1}}}),De=e=>{let t=e.map(e=>new H(e));for(;t.length<8;)t.push(new H(0,0,0));return t},Oe=[`night`,`dawn`,`noon`,`dusk`],ke={inkgold:Oe.map(e=>De(Jn[e])),terminal:Oe.map(e=>De(Yn[e]))},Ae=new z({vertexShader:Fn,fragmentShader:Bn,uniforms:{uScene:{value:Ce.texture},uResolution:{value:new j(s.x,s.y)},uPixelSize:{value:qn},uPalette:{value:ke.inkgold[2]},uPaletteB:{value:ke.inkgold[2]},uPaletteBlend:{value:0},uPaletteSize:{value:5}}}),Be=new z({vertexShader:Fn,fragmentShader:Un,uniforms:{uScene:{value:Ce.texture},uResolution:{value:new j(s.x,s.y)},uGridWidth:{value:160},uDither:{value:.55},uPalette:{value:Kn(Wn[`8-bit`].palette)},uPaletteSize:{value:1},uUsePalette:{value:1}}}),Ve={};for(let e of Gn)Ve[e]=Wn[e].palette?Kn(Wn[e].palette):null;let He=new z({vertexShader:Fn,fragmentShader:Vn,uniforms:{uScene:{value:Ce.texture},uDepth:{value:xe},uResolution:{value:new j(s.x,s.y)},uBands:{value:4},uToonGain:{value:1.7},uToonGamma:{value:.6},uToonFloor:{value:x.toonFloor},uOutline:{value:x.outline},uNear:{value:.1},uFar:{value:100},uIsPerspective:{value:1}}}),Ue=new z({vertexShader:Fn,fragmentShader:Hn,uniforms:{uToon:{value:K.texture},uPixel:{value:we.texture},uBlend:{value:0}}});function We(e,t){Ee.material=e,a.setRenderTarget(t),a.render(Te,q)}function Ge(){y.setViewport(window.innerWidth,window.innerHeight),a.setSize(window.innerWidth,window.innerHeight);let e=a.getDrawingBufferSize(new j);return k.setSize(e.x,e.y),Se.setSize(e.x,e.y),Ce.setSize(e.x,e.y),K.setSize(e.x,e.y),we.setSize(e.x,e.y),P.uniforms.uResolution.value.set(e.x,e.y),J.uniforms.uResolution.value.set(e.x,e.y),Ae.uniforms.uResolution.value.set(e.x,e.y),Be.uniforms.uResolution.value.set(e.x,e.y),He.uniforms.uResolution.value.set(e.x,e.y),e}let Y=3,X=!1,Z=!1,Ke=`native`,qe=.3,Je=.46,Ye=[`native`,...Gn],Xe={"16-bit":`16-bit`,"8-bit":`8-bit`,gb:`Game Boy`,modern:`Modern`,native:`Pixel`,"1-bit":`1-bit`};typeof window<`u`&&(window.__mode=Y,window.__vector=X,window.__era=Ke);let Q=0,Ze=performance.now(),Qe=typeof window<`u`&&new URLSearchParams(window.location.search).has(`perf`);typeof window<`u`&&(window.__perf=Qe),Qe&&(a.info.autoReset=!1);let $e=null;typeof window<`u`&&(window.__loaded=!1);let et=0,tt=new L(1,1,1),nt=!1;function rt(e){let t=Z?ke.terminal:ke.inkgold,n=e%1*4,r=Math.floor(n)%4;Ae.uniforms.uPalette.value=t[r],Ae.uniforms.uPaletteB.value=t[(r+1)%4],Ae.uniforms.uPaletteBlend.value=n-Math.floor(n)}function at(e){let t=Wn[e];t&&(Be.uniforms.uGridWidth.value=t.gridWidth,Be.uniforms.uDither.value=t.dither,Be.uniforms.uUsePalette.value=+!!t.palette,t.palette&&(Be.uniforms.uPalette.value=Ve[e],Be.uniforms.uPaletteSize.value=t.palette.length))}function ot(){Ke!==`native`&&at(Ke)}let st=()=>Ke===`native`?Ae:Be;function ct(e,t){F.visible=!1,a.setRenderTarget(k),a.render(d,e),F.visible=!0,a.setRenderTarget(t),a.render(d,e)}function lt(e,t){if(F.visible=!1,a.setRenderTarget(k),a.render(d,y.camera),F.visible=!0,Y===1)a.setRenderTarget(t),a.render(d,y.camera);else if(a.setRenderTarget(Se),a.render(d,y.camera),Y===2)J.uniforms.uGrain.value=1,J.uniforms.uChroma.value=1,We(J,t);else{J.uniforms.uGrain.value=0,J.uniforms.uChroma.value=0,We(J,Ce);let n=y.camera;He.uniforms.uNear.value=n.near,He.uniforms.uFar.value=n.far,He.uniforms.uIsPerspective.value=+!!n.isPerspectiveCamera;let r=e.era?(at(e.era),Be):st();e.kind===`pixel`?(We(r,t),window.__style=`pixel`):e.kind===`toon`?(We(He,t),window.__style=`toon`):(We(He,K),We(r,we),Ue.uniforms.uBlend.value=e.blend,We(Ue,t),window.__style=`blend`)}}function ut(){let e=dt(),t=e.kind===`toon`?1:e.kind===`blend`?1-e.blend:0;return P.uniforms.uChromaScale.value=l.lerp(1,.5,t),e}function dt(){if(Y===1||Y===2)return{kind:`none`};if(Y===7)return{kind:`pixel`};if(Y===8)return{kind:`toon`};let e=y.styleT;return window.__styleT=e,e<=qe?{kind:`toon`}:e>=Je?{kind:`pixel`,era:e<.62?`16-bit`:e<.8?`8-bit`:`gb`}:{kind:`blend`,blend:l.smoothstep(e,qe,Je),era:`16-bit`}}function pt(e){return Y===1||Y===2?``:X&&Y!==7&&Y!==8?`Vector`:e.kind===`toon`?`Toon`:e.kind===`pixel`?Xe[e.era||Ke]||`Pixel`:e.kind===`blend`?`Toon → `+(Xe[e.era]||`Pixel`):``}function mt(e,t,{shadowsOn:n=!0,seasonTarget:r=0}={}){if(Qe){let e=a.info;$e={calls:e.render.calls,tris:e.render.triangles,programs:e.programs?e.programs.length:0,geo:e.memory.geometries,tex:e.memory.textures},e.reset()}ne.material.uniforms.uTime.value=t,J.uniforms.uTime.value=t,x.update(e),I.key.position.copy(x.sunDir).multiplyScalar(24),I.key.color.copy(x.sunColor),I.key.intensity=x.sunIntensity,I.fill.color.copy(x.hemiSky),I.fill.groundColor.copy(x.hemiGround),re.value=x.windowGlow;let i=B.overcast;I.key.intensity*=1-.5*i,I.key.color.lerp(p,.45*i),I.fill.intensity=1+.7*i;let o=l.smoothstep(x.sunDir.y,.06,.34),s=l.lerp(.28,1,1-x.windowGlow),c=n?o*s:0;I.key.shadow.intensity=.72*c,Pe.value=.52*c,(n&&!nt||tt.distanceToSquared(x.sunDir)>2e-5)&&(a.shadowMap.needsUpdate=!0,tt.copy(x.sunDir)),nt=n;let u=1-x.windowGlow;Ne.setRGB(l.lerp(.46,1,u),l.lerp(.52,1,u),l.lerp(.74,1,u)),J.uniforms.uExposure.value=x.exposure,He.uniforms.uToonGain.value=x.toonGain,a.setClearColor(x.horizon,1),rt(x.t),window.__t=x.t,ae.update(e,t,x),I.update(t),R.update(e,t,x),O.uniforms.uWakeCount.value=R.wakeCount,B.update(e,t),O.uniforms.uRainCount.value=B.rainDropCount;let f=B.fog*(1-u);d.fog.density=B.fog*m,v.copy(x.horizon).lerp(h,.85*f),d.fog.color.copy(v),a.setClearColor(v,1),Re.value=B.fog,ne.material.uniforms.uFogAmt.value=.7*B.fog,Fe.value=B.snow,Ie.value=B.cloud*.55,Le.x+=e*.018,Le.y+=e*.009,ze.value+=(r-ze.value)*Math.min(1,e*1.5),V.update(e,t,x,B);let g=dt(),_=g.kind===`pixel`||g.kind===`blend`?`pixel`:X||g.kind===`toon`?`charm`:`realistic`;ce.update(e,t,x,B,_),Q++;let y=performance.now();y-Ze>=1e3&&(window.__fps=Q,Qe&&$e&&(console.log(`[perf] ${Q} fps · ~${(1e3/Math.max(1,Q)).toFixed(2)} ms · calls ${$e.calls} · tris ${$e.tris} · programs ${$e.programs} · geo ${$e.geo} · tex ${$e.tex}`),window.__perfInfo={fps:Q,...$e}),Q=0,Ze=y);let[b,S,C]=w;if(O.uniforms.uPrev.value=b.texture,O.uniforms.uCurr.value=S.texture,a.setRenderTarget(C),a.render(T,E),w=[S,C,b],P.uniforms.uHeight.value=w[1].texture,et<2&&typeof document<`u`&&++et===2){let e=document.getElementById(`lgr-loader`);e&&e.classList.add(`gone`),window.__loaded=!0}}function ht(e){Y=e,window.__mode=Y}function gt(){return X=!X,Me.value=+!!X,window.__vector=X,X}function vt(e){return X=!!e,Me.value=+!!X,window.__vector=X,X}function yt(){return Ke=Ye[(Ye.indexOf(Ke)+1)%Ye.length],window.__era=Ke,ot(),Ke}function bt(){return Z=!Z,Z}return{updateWorld:mt,decideStyle:ut,renderCityPipeline:lt,renderCityBeautyTo:ct,styleHintName:pt,setPostMode:ht,toggleVector:gt,setVector:vt,cycleEra:yt,togglePalette:bt,get mode(){return Y},get vector(){return X},get sceneEra(){return Ke},renderer:a,drawBuffer:s,scene:d,rig:y,sunRig:x,SIM:256,targets:w,simScene:T,simCamera:E,simMaterial:O,grabRT:k,card:M,backdrop:ne,WATER_SIZE:28,water:F,waterMaterial:P,windowGlow:re,landmarkFactory:ie,city:I,cityLife:ae,waterLife:R,weatherRig:B,clouds:V,inspector:se,world:ye,fitShadowFrustum:be,SHADOW_DIST:24,sceneDepth:xe,sceneRT:Se,filmicRT:Ce,toonRT:K,pixelRT:we,postScene:Te,postCamera:q,postQuad:Ee,filmicMaterial:J,pixelMaterial:Ae,pixelkitMaterial:Be,toonMaterial:He,mixMaterial:Ue,PALCACHE:ke,ERA_TEX:Ve,runPass:We,OVERCAST_GREY:p,FOG_DENSITY:m,FOG_NIGHT_TINT:h,_fogColor:v,resize:Ge}}var Zn=`lgr_hints_`,Qn=!1;function $n(){if(Qn||typeof document>`u`)return;Qn=!0;let e=document.createElement(`style`);e.textContent=`
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
  }`,document.head.appendChild(e)}function er({key:e,title:t=`Tips`,tips:n=[],force:r=!1}={}){let i={key:e,shown:!1,dismissed:!1,seen:!1};if(typeof window<`u`&&(window.__hints=i),typeof document>`u`||!e)return{dismiss(){},el:null};let a=Zn+e,o=!1;try{o=localStorage.getItem(a)===`1`}catch{}if(o&&!r)return i.seen=!0,{dismiss(){},el:null};$n();let s=!!(window.matchMedia&&window.matchMedia(`(prefers-reduced-motion: reduce)`).matches),c=document.createElement(`div`);c.className=`lgr-hints`,c.innerHTML=`<div class="lgr-hints-card">
    <div class="lgr-hints-h">${t}</div>
    <ul>${n.map(e=>`<li>${e}</li>`).join(``)}</ul>
    <button class="lgr-hints-ok">Got it</button>
    <button class="lgr-hints-x" title="Dismiss (Esc)" aria-label="Dismiss">✕</button>
  </div>`,document.body.appendChild(c),i.shown=!0,s?c.classList.add(`on`):requestAnimationFrame(()=>c.classList.add(`on`));let l=!1;function u(e=!0){if(!l){if(l=!0,e)try{localStorage.setItem(a,`1`)}catch{}i.dismissed=!0,window.removeEventListener(`keydown`,d),c.classList.remove(`on`),setTimeout(()=>c.remove(),s?0:300)}}function d(e){e.key===`Escape`&&u(!0)}return window.addEventListener(`keydown`,d),c.querySelector(`.lgr-hints-ok`).addEventListener(`click`,()=>{navigator.vibrate?.(10),u(!0)}),c.querySelector(`.lgr-hints-x`).addEventListener(`click`,()=>{navigator.vibrate?.(10),u(!0)}),{dismiss:u,el:c}}var tr=new Set([`w`,`a`,`s`,`d`,`arrowup`,`arrowdown`,`arrowleft`,`arrowright`,`shift`,` `]),nr={walker:{p:.6,hp:26,speed:.85,dmg:9,score:10,size:1,color:`#6f8a45`},runner:{p:.25,hp:12,speed:1.75,dmg:7,score:16,size:.82,color:`#a6d24c`},tank:{p:.15,hp:95,speed:.5,dmg:20,score:34,size:1.5,color:`#39492a`}};function rr(){let e=Math.random();return e<nr.walker.p?`walker`:e<nr.walker.p+nr.runner.p?`runner`:`tank`}var ir=new H(`#ffffff`),ar=new H(`#d83a2a`),or={food:{name:`Food`,glyph:`🍖`,color:`#c8782e`,consumable:!0},water:{name:`Water`,glyph:`💧`,color:`#3aa6dc`,consumable:!0},bandage:{name:`Bandage`,glyph:`➕`,color:`#e8e2d6`,consumable:!0},scrap:{name:`Scrap`,glyph:`⚙️`,color:`#8a8f96`,consumable:!1},medkit:{name:`Medkit`,glyph:`✚`,color:`#e0524a`,consumable:!0},repairkit:{name:`Repair Kit`,glyph:`🔧`,color:`#caa05a`,consumable:!0}},sr=[{out:`medkit`,need:{bandage:2}},{out:`repairkit`,need:{scrap:3}}];function cr({extent:e=8,plinthTop:t=.3}={}){let r=new W;r.visible=!1,r.raycast=()=>{};let i=t+.02,a=Math.max(3,e-.7),o=typeof window<`u`&&window.matchMedia&&window.matchMedia(`(pointer: coarse)`).matches,s=1.25,c=4.4,u=1.4,d=new W,f=new G(new ae(.16,.34,4,10),X(new S({color:`#3f7fd0`,roughness:.6,flatShading:!0}),{color:`#3f7fd0`}));f.position.y=.33;let m=new G(new re(.13,12,9),X(new S({color:`#e9caa1`,roughness:.75,flatShading:!0}),{color:`#e9caa1`}));m.position.y=.66;let h=new G(new O(.1,.1,.16),X(new S({color:`#ffd54a`,roughness:.5,flatShading:!0}),{color:`#ffd54a`}));h.position.set(0,.38,.18),d.add(f,m,h),d.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!1),e.raycast=()=>{}}),d.scale.setScalar(1.6),d.position.y=i,r.add(d);let g=new G(new M(.95,16,-.9,1.8),new n({color:`#ffe08a`,transparent:!0,opacity:0,depthWrite:!1,side:2}));g.rotation.x=-Math.PI/2,g.position.y=i+.06,g.raycast=()=>{},r.add(g);let _=new ue().setFromPoints([new L,new L]),v=new ie(_,new p({color:`#fff3c0`,transparent:!0,opacity:0,depthWrite:!1}));v.raycast=()=>{},r.add(v);let y={x:0,z:0,vx:0,vz:0,hp:100,stamina:100,hunger:100,thirst:100,facing:0,iframe:0},b=new I(new ae(.15,.3,4,8),X(new S({roughness:.85,flatShading:!0})),48);b.castShadow=!0,b.receiveShadow=!1,b.frustumCulled=!1,b.raycast=()=>{},b.instanceMatrix.setUsage(_e),r.add(b);let C=[];for(let e=0;e<48;e++)C.push({x:0,z:0,vx:0,vz:0,alive:!1,in:!1,type:`walker`,hp:1,maxhp:1,speed:1,dmg:0,score:0,size:1,phase:0,flash:0});let w=new H,T=[],E=X(new S({color:`#7a5a36`,roughness:.9,flatShading:!0}),{color:`#7a5a36`});for(let e=0;e<8;e++){let t=e/8*Math.PI*2,n=new G(new O(2.1,.7,.24),E.clone());n.position.set(Math.cos(t)*c,i+.35,Math.sin(t)*c),n.rotation.y=-t+Math.PI/2,n.castShadow=!0,n.raycast=()=>{},r.add(n),T.push({mesh:n,ang:t,hp:150,alive:!0,baseColor:new H(`#7a5a36`)})}function D(e,t){let n=Math.atan2(t,e);return n<0&&(n+=Math.PI*2),T[Math.round(n/(Math.PI*2/8))%8]}let k=[];for(let e=0;e<14;e++){let e=new G(new O(.26,.26,.26),X(new S({roughness:.6,flatShading:!0})));e.castShadow=!0,e.visible=!1,e.raycast=()=>{},r.add(e),k.push({mesh:e,x:0,z:0,kind:`food`,active:!1})}let ee=new H;function A(){let e=Math.random();return e<.36?`food`:e<.72?`water`:e<.88?`bandage`:`scrap`}function j(e,t,n){let r=k.find(e=>!e.active);r&&(r.x=e,r.z=t,r.kind=n||A(),r.active=!0,r.mesh.position.set(e,i+.18,t),r.mesh.visible=!0,r.mesh.material.color.copy(ee.set(or[r.kind].color)))}let N=[];function te(e){let t=N.find(t=>t.id===e);return t?t.n:0}function ne(e,t=1){let n=N.find(t=>t.id===e);return n?(n.n+=t,!0):N.length<8?(N.push({id:e,n:t}),!0):!1}function P(e,t){let n=N.find(t=>t.id===e);return!n||n.n<t?!1:(n.n-=t,n.n<=0&&N.splice(N.indexOf(n),1),!0)}function F(e){if(te(e)<=0)return!1;if(e===`food`)y.hunger=Math.min(100,y.hunger+38);else if(e===`water`)y.thirst=Math.min(100,y.thirst+38);else if(e===`bandage`)y.hp=Math.min(100,y.hp+40);else if(e===`medkit`)y.hp=Math.min(100,y.hp+90);else if(e===`repairkit`){let e=null;for(let t of T)(!e||t.hp<e.hp)&&(e=t);e&&(e.hp=150,e.alive=!0)}else return!1;return P(e,1),Ge(),!0}function R(e){for(let t in e.need)if(te(t)<e.need[t])return!1;for(let t in e.need)P(t,e.need[t]);return ne(e.out,1),Ge(),!0}let oe=!1,z=!1,B=1,V=0,se=0,ce=0,le=`spawning`,de=0,fe=0,pe=0,me=0,U=!1,he=null;function ge(){for(let e=0;e<48;e++)if(!C[e].alive)return C[e];return null}function ve(e){let t=ge();if(!t)return;let n=nr[rr()];t.type=Object.keys(nr).find(e=>nr[e]===n)||`walker`;let r=Math.random()*Math.PI*2;t.x=Math.cos(r)*a,t.z=Math.sin(r)*a,t.vx=0,t.vz=0;let i=1+B*.08;t.maxhp=n.hp*i,t.hp=t.maxhp,t.speed=n.speed*(1+.4*e)*(1+B*.015)*(B===1?.85:1),t.dmg=n.dmg,t.score=n.score,t.size=n.size,t.phase=Math.random()*6.28,t.flash=0,t.in=!1,t.alive=!0}function ye(){let e=null,t=1/0;for(let n of C){if(!n.alive)continue;let r=(n.x-y.x)**2+(n.z-y.z)**2;r<t&&(t=r,e=n)}return e}function be(e){e.alive=!1,V++,se+=e.score,Math.random()<.3&&j(e.x,e.z)}function xe(e,t){e.hp-=t,e.flash=.12,e.hp<=0&&be(e)}function Se(){if(z||pe>0)return;pe=.16;let e,t;if(he)e=he.x-y.x,t=he.z-y.z;else{let n=ye();n?(e=n.x-y.x,t=n.z-y.z):(e=Math.sin(y.facing),t=Math.cos(y.facing))}let n=Math.hypot(e,t)||1;e/=n,t/=n,y.facing=Math.atan2(e,t);let r=null,a=1/0;for(let n of C){if(!n.alive)continue;let i=n.x-y.x,o=n.z-y.z,s=i*e+o*t;s<0||s>9||Math.abs(i*t-o*e)<.7*(.4+.6*n.size)&&s<a&&(a=s,r=n)}let o=r?a:9,s=_.attributes.position;s.setXYZ(0,y.x,i+.5,y.z),s.setXYZ(1,y.x+e*o,i+.5,y.z+t*o),s.needsUpdate=!0,v.material.opacity=.95,r&&xe(r,16)}function Ce(){if(z||me>0)return;me=.42,g.material.opacity=.85;let e=Math.sin(y.facing),t=Math.cos(y.facing);for(let n of C){if(!n.alive)continue;let r=n.x-y.x,i=n.z-y.z,a=Math.hypot(r,i);a>1.05+n.size*.2||(r*e+i*t)/(a||1)>.2&&xe(n,34)}}let K={},we={x:0,y:0};function Te(e,t){if(!oe)return;let n=e.key.toLowerCase();if(t&&n===`i`){e.stopImmediatePropagation(),Ke();return}if(t&&n===`escape`&&Re){e.stopImmediatePropagation(),Z();return}if(tr.has(n)){if(e.stopImmediatePropagation(),n.startsWith(`arrow`)&&e.preventDefault(),n===` `){t&&Ce();return}K[n]=t}}typeof window<`u`&&(window.addEventListener(`keydown`,e=>Te(e,!0)),window.addEventListener(`keyup`,e=>Te(e,!1)));let q=null,Ee=null,J=null,De=null,Oe=null,ke=null,Ae=null,je=null,Me=null,Ne=null,Pe=null,Fe=null,Ie=null,Le=null,Re=!1;if(typeof document<`u`){let e=document.createElement(`style`);e.textContent=`
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
    `,document.head.appendChild(e),q=document.createElement(`div`),q.className=`hoard-stick`,Ee=document.createElement(`div`),Ee.className=`knob`,q.appendChild(Ee),document.body.appendChild(q);let t=!1,n=e=>{let t=q.getBoundingClientRect(),n=e.clientX-(t.left+t.width/2),r=e.clientY-(t.top+t.height/2),i=Math.hypot(n,r)||1;i>44&&(n*=44/i,r*=44/i),Ee.style.transform=`translate(${n}px,${r}px)`,we.x=n/44,we.y=-r/44};q.addEventListener(`pointerdown`,e=>{t=!0,q.setPointerCapture(e.pointerId),n(e)}),q.addEventListener(`pointermove`,e=>{t&&n(e)});let r=()=>{t=!1,we.x=0,we.y=0,Ee.style.transform=`translate(0,0)`};q.addEventListener(`pointerup`,r),q.addEventListener(`pointercancel`,r),Pe=document.createElement(`button`),Pe.className=`hoard-btn hoard-fire`,Pe.textContent=`FIRE`,document.body.appendChild(Pe),Fe=document.createElement(`button`),Fe.className=`hoard-btn hoard-melee`,Fe.textContent=`MELEE`,document.body.appendChild(Fe),Pe.addEventListener(`pointerdown`,e=>{e.preventDefault(),navigator.vibrate?.(12),U=!0}),Pe.addEventListener(`pointerup`,()=>{U=!1}),Pe.addEventListener(`pointercancel`,()=>{U=!1}),Fe.addEventListener(`pointerdown`,e=>{e.preventDefault(),navigator.vibrate?.(18),Ce()}),J=document.createElement(`div`),J.className=`hoard-hud`,J.innerHTML=`HP<div class="bar"><i style="background:#e0524a"></i></div>STAMINA<div class="bar"><i style="background:#4ad08a"></i></div>HUNGER<div class="bar"><i style="background:#d89a3a"></i></div>THIRST<div class="bar"><i style="background:#3aa6dc"></i></div><div class="stat"></div>`,document.body.appendChild(J);let i=J.querySelectorAll(`i`);De=i[0],Oe=i[1],ke=i[2],Ae=i[3],je=J.querySelector(`.stat`),Me=document.createElement(`div`),Me.className=`hoard-banner`,document.body.appendChild(Me),Ne=document.createElement(`div`),Ne.className=`hoard-death`,Ne.innerHTML=`<h2>YOU DIED</h2><div class="ds"></div><button>RESTART</button>`,document.body.appendChild(Ne),Ne.querySelector(`button`).addEventListener(`click`,()=>Ye());let a=document.createElement(`style`);a.textContent=`
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
    `,document.head.appendChild(a),Ie=document.createElement(`button`),Ie.className=`hoard-bagbtn`,Ie.textContent=`🎒`,Ie.title=`Inventory (I)`,document.body.appendChild(Ie),Ie.addEventListener(`click`,()=>Ke()),Le=document.createElement(`div`),Le.className=`hoard-bag`,document.body.appendChild(Le)}let ze=0;function Be(e,t=1.8){Me&&(Me.textContent=e,Me.style.display=`block`),ze=t}let Ve=Math.PI/4;function He(e){Ve=e}function Ue(e,t){he={x:e,z:t}}function We(e){U=e}function Ge(){if(typeof window<`u`&&(window.__hoardBag=Object.fromEntries(N.map(e=>[e.id,e.n]))),!Le)return;let e=`<div class="panel"><h3>INVENTORY</h3><div class="slots">`;for(let t=0;t<8;t++){let n=N[t];n?e+=`<button class="slot" data-id="${n.id}" title="${or[n.id].name}">${or[n.id].glyph}<span class="n">${n.n}</span></button>`:e+=`<div class="slot empty"></div>`}e+=`</div><div class="craft">`,sr.forEach((t,n)=>{let r=Object.keys(t.need).every(e=>te(e)>=t.need[e]),i=Object.entries(t.need).map(([e,t])=>`${t}${or[e].glyph}`).join(`+`);e+=`<button data-rec="${n}" ${r?``:`disabled`}>Craft ${or[t.out].name} (${i})</button>`}),e+=`</div><button class="close">CLOSE (I)</button></div>`,Le.innerHTML=e,Le.querySelectorAll(`.slot[data-id]`).forEach(e=>e.addEventListener(`click`,()=>{or[e.dataset.id].consumable&&F(e.dataset.id)})),Le.querySelectorAll(`[data-rec]`).forEach(e=>e.addEventListener(`click`,()=>R(sr[+e.dataset.rec]))),Le.querySelector(`.close`).addEventListener(`click`,()=>Z())}function Y(){!oe||z||(Re=!0,Le&&Le.classList.add(`open`),Ge())}function Z(){Re=!1,Le&&Le.classList.remove(`open`)}function Ke(){Re?Z():Y()}function qe(e){B=e,fe=5+e*2,le=`spawning`}function Je(){y.x=0,y.z=0,y.vx=0,y.vz=0,y.hp=100,y.stamina=100,y.hunger=100,y.thirst=100,y.facing=0,y.iframe=0;for(let e of C)e.alive=!1;V=0,se=0,ce=0,z=!1,U=!1,he=null;for(let e of T)e.hp=150,e.alive=!0,e.mesh.scale.set(1,1,1);for(let e of k)e.active=!1,e.mesh.visible=!1;N.length=0;let e=[`food`,`water`,`food`,`water`,`bandage`,`scrap`];for(let t=0;t<6;t++){let n=Math.random()*Math.PI*2,r=1.6+Math.random()*(a-2);j(Math.cos(n)*r,Math.sin(n)*r,e[t])}Ne&&(Ne.style.display=`none`),d.position.set(0,i,0),d.visible=!0,qe(1),Ge()}function Ye(){Je()}function Xe(e){oe=e,r.visible=e;let t=e&&o;q&&(q.style.display=t?`block`:`none`),Pe&&(Pe.style.display=t?`block`:`none`),Fe&&(Fe.style.display=t?`block`:`none`),J&&(J.style.display=e?`block`:`none`),Me&&!e&&(Me.style.display=`none`),Ne&&!e&&(Ne.style.display=`none`),Ie&&(Ie.style.display=e?`block`:`none`),Z();for(let e in K)K[e]=!1;we.x=we.y=0,U=!1,e&&Je()}let Q=new x;function Ze(e,t,n){if(!oe||Re)return;let r=n?n.windowGlow:0;if(pe=Math.max(0,pe-e),me=Math.max(0,me-e),v.material.opacity=Math.max(0,v.material.opacity-e*8),g.material.opacity=Math.max(0,g.material.opacity-e*6),!z){ce+=e,y.iframe=Math.max(0,y.iframe-e);let n=(K.d||K.arrowright?1:0)-(K.a||K.arrowleft?1:0)+we.x,r=(K.w||K.arrowup?1:0)-(K.s||K.arrowdown?1:0)+we.y,o=Math.hypot(n,r);o>1&&(n/=o,r/=o);let s=o>.05,f=(K.shift||we.y>.95)&&y.stamina>2&&s,p=Math.cos(Ve),m=Math.sin(Ve),h=p*n+-m*r,_=-m*n+-p*r,v=f?5.2:3,b=1-Math.exp(-14*e);y.vx+=(h*v-y.vx)*b,y.vz+=(_*v-y.vz)*b,y.x+=y.vx*e,y.z+=y.vz*e;let x=Math.hypot(y.x,y.z);x>a&&(y.x*=a/x,y.z*=a/x,y.vx=0,y.vz=0),s&&(y.facing=Math.atan2(h,_)),y.stamina=l.clamp(y.stamina+(f?-34:22)*e,0,100),y.hunger=Math.max(0,y.hunger-.9*e),y.thirst=Math.max(0,y.thirst-1.15*e),y.hunger<=0||y.thirst<=0?y.hp=Math.max(0,y.hp-3.5*e):y.hunger>55&&y.thirst>55&&y.hp<100&&(y.hp=Math.min(100,y.hp+2*e));for(let e of k)e.active&&(e.x-y.x)**2+(e.z-y.z)**2<.3&&ne(e.kind)&&(e.active=!1,e.mesh.visible=!1,Ge());for(let t of T){if(t.hp>=150)continue;let n=Math.cos(t.ang)*c,r=Math.sin(t.ang)*c;(n-y.x)**2+(r-y.z)**2<u*u&&(t.hp=Math.min(150,t.hp+30*e),t.hp>0&&(t.alive=!0))}y.hp<=0&&Qe(),d.position.set(y.x,i,y.z),d.rotation.y=y.facing,d.visible=!(y.iframe>0&&Math.floor(t*20)%2==0),U&&Se(),g.position.set(y.x,i+.06,y.z),g.rotation.z=-y.facing}let o=0;z||le===`spawning`&&(fe>0&&Math.random()<e*(B===1?3.5:6)&&(ve(r),fe--),fe<=0&&(le=`fighting`));let f=0,p=1/0;for(let n=0;n<48;n++){let r=C[n];if(!r.alive){Q.position.set(0,-60,0),Q.scale.setScalar(0),Q.updateMatrix(),b.setMatrixAt(n,Q.matrix);continue}o++;let a=y.x-r.x,l=y.z-r.z,u=Math.hypot(a,l)||1;if(u<p&&(p=u),!z){let t=a/u*r.speed,n=l/u*r.speed,i=1-Math.exp(-6*e);if(r.vx+=(t-r.vx)*i,r.vz+=(n-r.vz)*i,u>.52){let t=r.x+r.vx*e,n=r.z+r.vz*e,i=Math.hypot(r.x,r.z),a=Math.hypot(t,n);if(!r.in&&i>=c&&a<4.9){let r=D(t,n);if(r.alive){let i=Math.atan2(n,t),a=4.9;t=Math.cos(i)*a,n=Math.sin(i)*a,r.hp-=15*e,r.hp<=0&&(r.hp=0,r.alive=!1)}}a<c-.1&&(r.in=!0),r.x=t,r.z=n}else y.iframe<=0&&(f=Math.max(f,r.dmg))}r.flash=Math.max(0,r.flash-e);let d=Math.sin(t*6+r.phase)*.04;Q.position.set(r.x,i+.3*r.size*s+d,r.z),Q.rotation.set(0,Math.atan2(r.vx,r.vz),Math.sin(t*3+r.phase)*.12),Q.scale.setScalar(r.size*s),Q.updateMatrix(),b.setMatrixAt(n,Q.matrix),w.set(nr[r.type].color),r.flash>0?w.lerp(ir,.7):w.lerp(ar,.35*(1-r.hp/r.maxhp)),b.setColorAt(n,w)}b.instanceMatrix.needsUpdate=!0,b.instanceColor&&(b.instanceColor.needsUpdate=!0);let m=0;for(let e of T){e.alive&&m++;let t=Math.max(0,e.hp/150);e.mesh.scale.y=e.alive?Math.max(.18,t):.12,e.mesh.position.y=i+.35*e.mesh.scale.y,e.mesh.material.color.copy(e.baseColor).lerp(ar,(1-t)*.55)}!z&&f>0&&(y.hp=Math.max(0,y.hp-f*(B===1?.5:1)),y.iframe=.6,y.hp<=0&&Qe()),!z&&le===`fighting`&&o===0&&fe<=0&&(le=`complete`,de=2.2,Be(`WAVE ${B} CLEAR`,2)),!z&&le===`complete`&&(de-=e,de<=0&&(qe(B+1),Be(`WAVE ${B}`,1.4))),ze>0&&(ze-=e,ze<=0&&Me&&(Me.style.display=`none`)),De&&(De.style.width=`${y.hp}%`),Oe&&(Oe.style.width=`${y.stamina}%`),ke&&(ke.style.width=`${y.hunger}%`),Ae&&(Ae.style.width=`${y.thirst}%`),je&&(je.textContent=`WAVE ${B}   KILLS ${V}   SCORE ${se}`),typeof window<`u`&&(window.__hoard={active:oe,dead:z,paused:Re,hp:Math.round(y.hp),stamina:Math.round(y.stamina),hunger:Math.round(y.hunger),thirst:Math.round(y.thirst),zombies:o,barriers:m,pickups:k.filter(e=>e.active).length,inv:Object.fromEntries(N.map(e=>[e.id,e.n])),wave:B,kills:V,score:se,weapon:`gun`,znear:+p.toFixed(2),px:+y.x.toFixed(2),pz:+y.z.toFixed(2)})}function Qe(){z=!0,U=!1,Ne&&(Ne.querySelector(`.ds`).innerHTML=`Wave reached: ${B}<br>Kills: ${V}<br>Score: ${se}<br>Survived: ${ce.toFixed(0)}s`,Ne.style.display=`flex`)}return{group:r,update:Ze,setActive:Xe,setAzimuth:He,setAim:Ue,setFiring:We,melee:Ce,reset:Je,restart:Ye,openBag:Y,closeBag:Z,toggleBag:Ke,addItem:ne,get player(){return y},get dead(){return z},get active(){return oe},get paused(){return Re},get inv(){return N.map(e=>({...e}))},get nearestPickup(){let e=null,t=1e9;for(let n of k){if(!n.active)continue;let r=(n.x-y.x)**2+(n.z-y.z)**2;r<t&&(t=r,e=n)}return e?{x:e.x,z:e.z}:null},setTarget(){}}}var{Timer:lr}=ce,ur=new URLSearchParams(window.location.search),dr=ur.get(`demo`)===`1`||ur.has(`capture`);window.__demo=dr;var fr=(ur.get(`city`)?Number(ur.get(`city`)):0)||Math.random()*1e9|0,pr=0,mr=Xn({demo:dr,citySeed:fr,profileIndex:pr}),{renderer:hr,scene:gr,rig:_r,sunRig:vr,city:yr,landmarkFactory:br}=mr,xr=cr({extent:yr.extent,plinthTop:.3});gr.add(xr.group),window.__hoardApi=xr;var Sr=!0;window.__shadows=Sr,window.__scene=`hoard`;var Cr=new L,wr=new Set,Tr=6.5;function Er(e){yr.group.traverse(t=>{!t.isMesh||t.userData.ground||!t.visible||(t.getWorldPosition(Cr),Math.hypot(Cr.x,Cr.z)<e&&(t.visible=!1,wr.add(t)))})}function Dr(){for(let e of wr)e.visible=!0;wr.clear()}var Or=new e,kr=new L,Ar=new L,jr=new Set;function Mr(){for(let e of jr)e.material&&(e.material.opacity=1,e.material.transparent=!!e.userData._wasT,e.material.depthWrite=e.userData._wasDW!==!1);jr.clear()}function Nr(e){Mr();let t=_r.camera;for(let[n,r]of[[0,0],[.7,.4],[-.7,.4]]){Ar.set(e.x+n,.6,e.z+r),kr.subVectors(Ar,t.position);let i=kr.length();Or.set(t.position,kr.normalize()),Or.far=i-.4;for(let e of Or.intersectObject(yr.group,!0)){let t=e.object;!t.material||t.userData.ground||jr.has(t)||(t.userData._wasT=t.material.transparent,t.userData._wasDW=t.material.depthWrite,t.material.transparent=!0,t.material.opacity=.16,t.material.depthWrite=!1,jr.add(t))}}}function Pr(){xr.setActive(!0),Er(Tr),_r.setMode(xe.DIMETRIC),_r.setZoom(2.8,!0),_r.setTarget(xr.player.x,.6,xr.player.z,!0)}var Fr=new e,Ir=new j,Lr=new se(new L(0,1,0),-.32),Rr=new L,zr=window.matchMedia&&window.matchMedia(`(pointer: coarse)`).matches,Br=!1,Vr=0,Hr=0,Ur=.005,Wr=(e,t)=>{Ir.x=e/window.innerWidth*2-1,Ir.y=-(t/window.innerHeight)*2+1};hr.domElement.addEventListener(`contextmenu`,e=>e.preventDefault()),hr.domElement.addEventListener(`mousedown`,e=>{e.button===0&&(Wr(e.clientX,e.clientY),xr.setFiring(!0)),e.button===2&&(Br=!0,Vr=e.clientX,Hr=e.clientY)}),window.addEventListener(`mousemove`,e=>{Wr(e.clientX,e.clientY),Br&&(_r.orbit(-(e.clientX-Vr)*Ur,-(e.clientY-Hr)*Ur),Vr=e.clientX,Hr=e.clientY)}),window.addEventListener(`mouseup`,()=>{xr.setFiring(!1),Br=!1}),hr.domElement.addEventListener(`wheel`,e=>{e.preventDefault(),_r.zoomBy(Math.exp(e.deltaY*.0015))},{passive:!1}),window.addEventListener(`keydown`,e=>{(e.key===`h`||e.key===`H`)&&(Sr=!Sr,window.__shadows=Sr)}),br.whenReady.then(()=>{yr.generate(fr,pr),mr.fitShadowFrustum(),Dr(),Er(Tr),window.__cityReady=!0});var Gr=new lr;Gr.connect(document);function Kr(){Gr.update();let e=Math.min(Gr.getDelta(),.1);xr.setAzimuth(_r.azimuth),zr||(Fr.setFromCamera(Ir,_r.camera),Fr.ray.intersectPlane(Lr,Rr)&&xr.setAim(Rr.x,Rr.z)),xr.update(e,Gr.getElapsed(),vr),_r.setTarget(xr.player.x,.6,xr.player.z),_r.update(e),Nr(xr.player),mr.updateWorld(e,Gr.getElapsed(),{shadowsOn:Sr,seasonTarget:0});let t=mr.decideStyle();mr.renderCityPipeline(t,null),requestAnimationFrame(Kr)}Pr(),Kr(),er({key:`hoard`,title:`The Hoard`,tips:[`Move: WASD / arrows · on touch: the left thumb-stick`,`Aim: mouse / drag · Fire: hold click / the FIRE button · Melee: the MELEE button`,`Survive the waves · B: bag & crafting · Esc: exit`]}),window.addEventListener(`resize`,()=>{mr.resize()});