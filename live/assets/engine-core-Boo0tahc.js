import{$ as e,A as t,B as n,C as r,D as i,E as a,F as o,G as s,I as c,K as l,L as u,M as d,N as f,P as p,Q as m,R as h,S as g,T as _,U as v,V as y,X as b,Y as x,Z as S,_ as C,a as w,at as T,b as E,c as D,f as O,g as k,h as A,i as j,j as M,l as N,m as P,n as ee,nt as F,o as I,ot as L,p as R,q as z,s as B,st as V,t as H,tt as U,u as W,v as G,w as te,x as ne,z as re}from"./three-CAqSPQgM.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var ie=Math.atan(1/Math.SQRT2),K=Math.atan(.5),ae=Math.PI/4,oe={PERSPECTIVE:4,ISOMETRIC:5,DIMETRIC:6},se=.12,ce=1.45,le=4,ue=40,de=1.5,fe=16,pe=6,me=22,q=3.5,he=11,ge=(e,t,n)=>e+(t-e)*(1-Math.exp(-8*n)),_e=(e,t)=>e+Math.PI*2*Math.round((t-e)/(Math.PI*2));function ve({aspect:e,fov:t=48,near:n=.1,far:r=100,target:i=new L(0,.8,0),azimuth:a=ae,elevation:o=.52,distance:s=12,zoom:c=5.5}={}){let l=new y(t,e,n,r),u=new re(-1,1,1,-1,n,r),f=oe.PERSPECTIVE,p=e,m={azimuth:a,elevation:o,distance:s,zoom:c,target:i.clone()},h={azimuth:a,elevation:o,distance:s,zoom:c,target:i.clone()},g=!1,_=()=>f===oe.PERSPECTIVE?l:u;function v(e){e!==f&&(f=e,f===oe.ISOMETRIC||f===oe.DIMETRIC?(m.elevation=f===oe.ISOMETRIC?ie:K,m.azimuth=_e(ae,h.azimuth),g=!0):g=!1)}function b(e,t){m.azimuth+=e,g||(m.elevation=d.clamp(m.elevation+t,se,ce))}function x(e){f===oe.PERSPECTIVE?m.distance=d.clamp(m.distance*e,le,ue):m.zoom=d.clamp(m.zoom*e,de,fe)}function S(e,t){let n=m.azimuth,r=f===oe.PERSPECTIVE?m.distance*.04:m.zoom*.08,i=new L(Math.cos(n),0,-Math.sin(n)),a=new L(-Math.sin(n),0,-Math.cos(n));m.target.addScaledVector(i,e*r),m.target.addScaledVector(a,t*r)}function C(e,t){p=e/t,l.aspect=p,l.updateProjectionMatrix()}function w(e){h.azimuth=ge(h.azimuth,m.azimuth,e),h.elevation=ge(h.elevation,m.elevation,e),h.distance=ge(h.distance,m.distance,e),h.zoom=ge(h.zoom,m.zoom,e),h.target.x=ge(h.target.x,m.target.x,e),h.target.y=ge(h.target.y,m.target.y,e),h.target.z=ge(h.target.z,m.target.z,e);let t=Math.cos(h.elevation),n=Math.sin(h.elevation),r=Math.cos(h.azimuth),i=Math.sin(h.azimuth),a=_();if(a.position.set(h.target.x+h.distance*t*i,h.target.y+h.distance*n,h.target.z+h.distance*t*r),a.lookAt(h.target),a.isOrthographicCamera){let e=h.zoom,t=e*p;a.left=-t,a.right=t,a.top=e,a.bottom=-e,a.updateProjectionMatrix()}}function T(e,t,n,r=!1){m.target.set(e,t,n),r&&h.target.copy(m.target)}function E(e,t=!1){m.zoom=d.clamp(e,de,fe),t&&(h.zoom=m.zoom)}return{get camera(){return _()},get mode(){return f},get azimuth(){return h.azimuth},setTarget:T,setZoom:E,get styleT(){return f===oe.PERSPECTIVE?d.clamp((h.distance-pe)/(me-pe),0,1):d.clamp((h.zoom-q)/(he-q),0,1)},setMode:v,orbit:b,zoomBy:x,pan:S,setViewport:C,update:w}}var ye={value:0},be=new R(`#ffffff`),xe={value:0},Se={value:0},Ce={value:0},we=new T,Te={value:0},Ee={value:0},De=`
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
`;function Oe(e){e.uniforms.uVector=ye,e.uniforms.uVecTint={value:be},e.uniforms.uVecShadow=xe,e.uniforms.uSnow=Se,e.uniforms.uCloud=Ce,e.uniforms.uCloudOff={value:we},e.uniforms.uFogCharm=Te}function ke(e){return e.replace(`#include <fog_fragment>`,`
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
  `)}function Ae(e){return e.replace(`#include <common>`,`#include <common>
varying vec3 vVecN;
varying vec3 vVecP;
varying vec2 vWorldXZ;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
  vVecN = normal;
  vVecP = position;
  vWorldXZ = (modelMatrix * vec4(position, 1.0)).xz;`)}function je(e){return e.replace(`#include <shadowmap_pars_fragment>`,`#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>`)}var Me=`col *= mix(1.0, getShadowMask(), uVecShadow);`;function Ne(e,{color:t,id:n,windowGlow:r,winColors:i=[`#ffb852`,`#8cd9ff`],litFrac:a=.55}={}){let o=[0,1,2].map(e=>new R(i[e]??i[i.length-1]));return e.customProgramCacheKey=()=>`lgr-vec-tower`,e.onBeforeCompile=e=>{Oe(e),e.uniforms.uWindowGlow=r,e.uniforms.uWinId={value:n},e.uniforms.uVecColor={value:new R(t)},e.uniforms.uWinA={value:o[0]},e.uniforms.uWinB={value:o[1]},e.uniforms.uWinC={value:o[2]},e.uniforms.uWinLit={value:a},e.vertexShader=Ae(e.vertexShader),e.fragmentShader=ke(je(e.fragmentShader.replace(`#include <common>`,`#include <common>
        uniform float uWindowGlow;
        uniform float uWinId;
        uniform vec3  uVecColor;
        uniform vec3  uWinA; uniform vec3 uWinB; uniform vec3 uWinC;
        uniform float uWinLit;
        ${De}
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
          ${Me}                                  // the sun's shadow darkens the body
          vec3 wcol; vec2 w = winTerms(wcol);
          vec3 glass = vec3(0.17, 0.23, 0.34);          // dark glass-blue panes (day)
          col = mix(col, glass, w.x * 0.85);
          col += w.x * w.y * wcol * uWindowGlow * 1.5;  // …windows EMIT (unshadowed) at night
          gl_FragColor = vec4(col, diffuseColor.a);
        }`)))},e}function J(e,{color:t=null,glow:n=null,glowDay:r=0,glowNight:i=1,windowGlow:a=null,season:o=!1}={}){let s=t===null,c=n!==null&&a!==null;return e.customProgramCacheKey=()=>`lgr-vec|`+(s?`d`:`c`)+(c?`g`:``)+(o?`s`:``),e.onBeforeCompile=e=>{Oe(e),s||(e.uniforms.uVecColor={value:new R(t)}),c&&(e.uniforms.uGlow={value:new R(n)},e.uniforms.uGlowDay={value:r},e.uniforms.uGlowNight={value:i},e.uniforms.uWindowGlow=a),o&&(e.uniforms.uSeason=Ee),e.vertexShader=Ae(e.vertexShader);let l=s?`diffuseColor.rgb`:`uVecColor`,u=o?`seasonShift(${l})`:l,d=(s?``:`uniform vec3 uVecColor;
`)+(c?`uniform vec3 uGlow; uniform float uGlowDay; uniform float uGlowNight; uniform float uWindowGlow;
`:``)+(o?`uniform float uSeason;
vec3 seasonShift(vec3 c){
  c = mix(c, vec3(0.86, 0.46, 0.13), smoothstep(0.40, 0.70, uSeason));   // → autumn orange
  c = mix(c, vec3(0.46, 0.33, 0.20), smoothstep(0.75, 1.00, uSeason));   // → bare brown
  return c;
}
`:``),f=c?`uGlow * mix(uGlowDay, uGlowNight, uWindowGlow)`:`vec3(0.0)`,p=ke(je(e.fragmentShader.replace(`#include <common>`,`#include <common>
`+d+De).replace(`#include <opaque_fragment>`,`#include <opaque_fragment>
        if (uVector > 0.5) {
          vec3 col = vecShade(${u});
          ${Me}                            // the sun's shadow darkens the flat tier…
          gl_FragColor = vec4(col + ${f}, diffuseColor.a);  // …but the night glow stays lit
        }`)));c&&(p=p.replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>\n  totalEmissiveRadiance += ${f};`)),e.fragmentShader=p},e}function Y(e){let t=e>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Pe(e){let t=Y(e);return{next:t,range:(e,n)=>e+(n-e)*t(),int:(e,n)=>e+Math.floor(t()*(n-e+1)),pick:e=>e[Math.floor(t()*e.length)],chance:e=>t()<e}}var X=[{key:`manhattan`,name:`Manhattan`,towers:[`#EDE3C8`,`#D9B98A`,`#B5562F`,`#A8C8E8`,`#2E3F5C`],ground:`#7CC455`,street:`#9AA0A6`,sidewalk:`#C8CCD0`,park:`#5DB347`,water:`#29A8D8`,shopfronts:[`#C04A3A`,`#3A7AC0`,`#C09A2A`],glass:`#7FA8CC`,winColors:[`#ffd27a`,`#9ad6ff`],hMax:4.6,sigma:.36,roofRate:.35,pSplit:.6,nightLit:.55,roofTint:null,coast:{base:.55,out:1,in:.6,jag:1.05},landmarks:[`empireState`,`chrysler`,`liberty`]},{key:`paris`,name:`Paris`,towers:[`#E8DCC0`,`#F2EAD6`,`#E0D2B4`],ground:`#8CC46A`,street:`#A8A29A`,sidewalk:`#D4CEC2`,park:`#6DB35A`,water:`#3FA8C8`,shopfronts:[`#C04A3A`,`#3A6B5A`,`#7A5AC0`],glass:`#5A6B7A`,winColors:[`#ffdca0`,`#ffcaa0`],hMax:1.5,sigma:.9,roofRate:.15,pSplit:.75,nightLit:.45,roofTint:`#6A7886`,coast:{base:1.05,out:.55,in:.3,jag:.5},landmarks:[`eiffel`,`arcDeTriomphe`,`sacreCoeur`]},{key:`neoTokyo`,name:`Neo-Tokyo`,towers:[`#2A3038`,`#3A4250`,`#252B36`,`#4A4456`],ground:`#3A4A42`,street:`#5A6068`,sidewalk:`#7A8088`,park:`#2E5E46`,water:`#0E6878`,shopfronts:[`#E8483A`,`#5AE8E0`,`#E85AA0`],glass:`#5AE8E0`,winColors:[`#5AE8E0`,`#E85AA0`,`#E8E06A`],hMax:5.2,sigma:.42,roofRate:.6,pSplit:.6,nightLit:.7,roofTint:null,coast:{base:.7,out:1.05,in:.62,jag:1.7},landmarks:[`tokyoTower`,`pagoda`,`neonBillboard`]}],Fe=X.map(e=>e.key),Ie=.3,Le=1.9,Re=.55,Z=2.45,ze=.12,Be=.6,Q=6,Ve={BASE:.7,OUT:.95,IN:.55,JAG:1,SAMPLES_PER_EDGE:28,HARBOR_DEPTH:.55,HARBOR_WIDTH:.26},He={PLINTH_TOP:Ie,BLOCK:Le,STREET:Re,PITCH:Z,SIDEWALK:ze,SHORE:Be,N:Q,COAST:Ve};function Ue(e,t,n){let r=n?.base??Ve.BASE,i=n?.out??Ve.OUT,a=n?.in??Ve.IN,o=n?.jag??Ve.JAG,s=t+r,c=Pe((e^789079)>>>0),l=[2,3,5,8,11,13].map(e=>({k:e,amp:1/e*o**((e-2)/6),phase:c.range(0,Math.PI*2)})),u=l.reduce((e,t)=>e+t.amp,0),d=e=>{let t=0;for(let n of l)t+=n.amp*Math.sin(n.k*e*Math.PI*2+n.phase);return Math.max(-1,Math.min(1,t/(u*.6)))},f=[{fix:+s,nx:1,nz:0,sign:1},{fix:+s,nx:0,nz:1,sign:-1},{fix:-s,nx:-1,nz:0,sign:-1},{fix:-s,nx:0,nz:-1,sign:1}],p=t+.22,m=Ve.SAMPLES_PER_EDGE,h=4*m,g=[],_=0;for(let e=0;e<4;e++){let t=f[e];for(let n=0;n<m;n++,_++){let o=n/m,c=_/h,l=(-s+2*s*o)*t.sign,u=d(c),f=u>=0?u*i:u*a;if(e===0){let e=Math.abs(o-.5);if(e<Ve.HARBOR_WIDTH){let t=.5+.5*Math.cos(e/Ve.HARBOR_WIDTH*Math.PI);f-=(r+Ve.HARBOR_DEPTH)*t}}let v,y;t.nx===0?(y=t.fix+t.nz*f,v=l,y=t.nz>0?Math.max(y,p):Math.min(y,-p)):(v=t.fix+t.nx*f,y=l,v=t.nx>0?Math.max(v,p):Math.min(v,-p)),g.push(new T(v,y))}}return{points:g,B:s,maxR:s+i,harborX:p}}function We(e){(Array.isArray(e)?e:[e]).forEach(e=>e&&e.dispose&&e.dispose())}function Ge({seed:t=1,profileIndex:n=0,landmarkFactory:i=null,windowGlow:a}){let s=new r,l=new r,u=new r;l.raycast=()=>{},u.raycast=()=>{},s.add(l,u);let d=new G(16773594,3);d.position.set(.45,.6,-.65).multiplyScalar(10);let f=new _(7313331,2762272,1);s.add(d,f);let h=0,g=[],v={seed:t,profileIndex:n,profile:X[n],extent:0,meshCount:0};function y(e,t,n,r){let i=new p(new w(e,.04,t),J(new c({color:r,roughness:.95,flatShading:!0}),{color:r}));return i.position.y=n,i.userData.ground=!0,i}function b(e,t){for(let e of l.children)e.geometry&&e.geometry.dispose(),We(e.material);l.clear();for(let e of u.children)e.traverse(e=>{e.isMesh&&We(e.material)});u.clear(),g.length=0,h=0;let n=Pe(e),r=X[t],a=(Q-1)/2*Z,o=7.075;v={seed:e,profileIndex:t,profile:r,extent:o+(r.coast?.base??Ve.BASE),meshCount:0};let s=Ue(e,o,r.coast);v.coast=s;let d=new m;s.points.forEach((e,t)=>t?d.lineTo(e.x,e.y):d.moveTo(e.x,e.y)),d.closePath();let f=new p(new E(d,{depth:2,bevelEnabled:!1,steps:1}),J(new c({color:r.ground,roughness:.9,flatShading:!0,side:2}),{color:r.ground}));f.rotation.x=-Math.PI/2,f.position.y=Ie-2,f.userData.ground=!0,l.add(f);let _=2*7.195;l.add(y(_,_,.32,r.street)),T(s.harborX,r);let b=[];for(let e=0;e<Q;e++)for(let t=0;t<Q;t++)b.push([e,t]);let w=new Set,O=Math.max(1,Math.round(b.length*.08));for(;w.size<O;)w.add(n.int(0,b.length-1));let k=n.range(-2.45*.6,Z*.6),A=n.range(-2.45*.6,Z*.6),M=Math.hypot(a,a),N=[];if(b.forEach(([e,t],i)=>{let a=(e-(Q-1)/2)*Z,o=(t-(Q-1)/2)*Z;if(l.add(y(Le,Le,.32999999999999996,r.sidewalk).translateX(a).translateZ(o)),w.has(i)){l.add(y(Le-ze*2,Le-ze*2,.35,r.park).translateX(a).translateZ(o));let e=n.int(3,5);for(let t=0;t<e;t++)D(a+n.range(-.6,.6),o+n.range(-.6,.6),r,n);return}let s=Le-ze*2,c=n.chance(r.pSplit)?2:1,u=n.chance(r.pSplit)?2:1,d=s/c,f=s/u;for(let e=0;e<c;e++)for(let t=0;t<u;t++){let i=a-s/2+d*(e+.5),c=o-s/2+f*(t+.5),l=Math.max(.6,d-.1),u=Math.max(.6,f-.1),p=Math.hypot(i-k,c-A)/M,m=Math.exp(-(p*p)/(2*r.sigma*r.sigma)),h=Math.max(.5,.5+(r.hMax-.5)*m*n.range(.75,1.25));h>r.hMax*.5&&Math.min(l,u)>=.7&&N.push({lx:i,lz:c,fw:l,fd:u,h,r:p}),x(i,c,l,u,h,r,n)}}),i&&i.ready){N.sort((e,t)=>e.r-t.r);let e=[],t=r.landmarks;for(let n=0;n<t.length&&N.length;n++){let a=null;for(let t of N)if(e.every(e=>Math.hypot(e.lx-t.lx,e.lz-t.lz)>Z*.9)){a=t;break}a||=N[0],e.push(a),S(a.lx,a.lz);let o=r.hMax*i.heightFactor(t[n]),s=i.make(t[n],{x:a.lx,z:a.lz,w:a.fw,d:a.fd,h:o,plinthTop:Ie});if(s){u.add(s);let e=new j().setFromObject(s);C(e.min.x-.15,e.max.x+.15,e.min.z-.15,e.max.z+.15)}}}l.traverse(e=>{e.isMesh&&(e.userData.ground?(e.castShadow=!1,e.receiveShadow=!0):e.material&&e.material.isMeshBasicMaterial?(e.castShadow=!1,e.receiveShadow=!1):(e.castShadow=!0,e.receiveShadow=!0))}),u.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),v.meshCount=l.children.length+u.children.length;let P=0;for(let e of l.children){let t=e.position;P=(Math.imul(P,16777619)^(Math.round(t.x*100)*2654435761^Math.round(t.y*100)*40503^Math.round(t.z*100)*2246822519))>>>0}for(let e of v.coast.points)P=(Math.imul(P,16777619)^(Math.round(e.x*100)*2654435761^Math.round(e.y*100)*40503))>>>0;v.sig=P,window.__city={seed:e,profile:r.key,meshes:v.meshCount,sig:P}}function x(t,n,r,i,s,u,d){let f=Ne(new c({flatShading:!0,roughness:.7,metalness:.05}),{color:d.pick(u.towers),id:++h,windowGlow:a,winColors:u.winColors,litFrac:u.nightLit}),m=new p(new w(r,s,i),f);if(m.position.set(t,Ie+s/2,n),m.userData.lot=[t,n],l.add(m),u.roofTint){let e=J(new c({color:u.roofTint,roughness:.85,flatShading:!0}),{color:u.roofTint}),a=new p(new w(r*1.02,.08,i*1.02),e);a.position.set(t,Ie+s+.04,n),a.userData.lot=[t,n],l.add(a)}if(s<1.4){let e=d.pick(u.shopfronts),a=new p(new w(r*1.04,.18,i*1.04),J(new c({color:e,roughness:.8,flatShading:!0}),{color:e}));a.position.set(t,.39,n),a.userData.lot=[t,n],l.add(a)}if(s>u.hMax*.45&&d.chance(u.roofRate)){let a=d.chance(.5)?new p(new w(r*.4,.18,i*.4),J(new c({color:`#9a9a9a`,flatShading:!0}),{color:`#9a9a9a`})):new p(new A(r*.18,r*.18,.22,10),J(new c({color:`#b9bec4`,flatShading:!0}),{color:`#b9bec4`}));if(a.position.set(t+d.range(-.1,.1),Ie+s+.11,n+d.range(-.1,.1)),a.userData.lot=[t,n],l.add(a),d.chance(.25)){let r=new p(new e(.05,6,5),new o({color:`#ff3b30`,transparent:!0,opacity:1}));r.position.set(t,Ie+s+.26,n),r.userData.lot=[t,n],r.raycast=()=>{},l.add(r),g.push({mesh:r,phase:d.range(0,6.28)})}}}function S(e,t){for(let n=l.children.length-1;n>=0;n--){let r=l.children[n];r.userData.lot&&Math.abs(r.userData.lot[0]-e)<1e-4&&Math.abs(r.userData.lot[1]-t)<1e-4&&(r.geometry&&r.geometry.dispose(),We(r.material),l.remove(r))}for(let e=g.length-1;e>=0;e--)g[e].mesh.parent||g.splice(e,1)}function C(e,t,n,r){for(let i=l.children.length-1;i>=0;i--){let a=l.children[i];a.userData.lot&&a.position.x>=e&&a.position.x<=t&&a.position.z>=n&&a.position.z<=r&&(a.geometry&&a.geometry.dispose(),We(a.material),l.remove(a))}}function T(e,t){let n=J(new c({color:`#7a5634`,roughness:.95,flatShading:!0}),{color:`#7a5634`}),r=(e,t,r,i)=>{let a=new p(new w(e,.06,t),n);a.position.set(r,Ie-.16,i),l.add(a)};r(.24,2,e+.02,0),r(1.3,.22,e+.7,-.72),r(1.3,.22,e+.7,.72)}function D(t,n,r,i){let a=new R(r.park),o=(r,o)=>{let s=a.clone().offsetHSL(0,0,i.range(-.06,.06)).getStyle(),u=new p(new e(r,7,6),J(new c({color:s,flatShading:!0}),{color:s,season:!0}));u.scale.y=.7,u.position.set(t,Ie+o,n),u.userData.lot=null,l.add(u)},s=new p(new w(.05,.18,.05),J(new c({color:`#6b4a2a`,flatShading:!0}),{color:`#6b4a2a`}));s.position.set(t,.39,n),l.add(s),o(.22,.28),o(.16,.46)}function O(e){for(let t of g)t.mesh.material.opacity=.35+.65*(.5+.5*Math.sin(e*3+t.phase))}return b(t,n),{group:s,key:d,fill:f,update:O,generate:b,get state(){return v},get extent(){return v.extent},get waterColor(){return v.profile.water},profiles:X}}var Ke=Math.PI*2,qe=.7,Je=90,Ye=[{name:`night`,sun:`#4a6f9e`,intensity:.35,hemiSky:`#26344f`,hemiGround:`#0c1018`,horizon:`#1e2942`,sky:`#36486e`,exposure:.95,outline:`#101a30`,window:1,toonGain:2.6},{name:`dawn`,sun:`#ff9e54`,intensity:2.4,hemiSky:`#8a7686`,hemiGround:`#2a1f1a`,horizon:`#b8512c`,sky:`#ffb070`,exposure:1.05,outline:`#241826`,window:.3,toonGain:2},{name:`noon`,sun:`#fff4e0`,intensity:4.6,hemiSky:`#9cb8cc`,hemiGround:`#33302a`,horizon:`#5e7689`,sky:`#aacadd`,exposure:1.18,outline:`#0b0a08`,window:0,toonGain:1.7},{name:`dusk`,sun:`#ff6b35`,intensity:2,hemiSky:`#7a566a`,hemiGround:`#281a18`,horizon:`#b0432a`,sky:`#ff8a5a`,exposure:1.05,outline:`#1f1420`,window:.4,toonGain:2}],Xe=e=>e-Math.floor(e),Ze=(e,t,n)=>e+(t-e)*n,Qe=(e,t,n)=>e+(t-e)*(1-Math.exp(-6*n));function $e({t:e=.5}={}){let t=e,n=e,r=!1,i=!1,a=Ye.map(e=>({name:e.name,sun:new R(e.sun),hemiSky:new R(e.hemiSky),hemiGround:new R(e.hemiGround),horizon:new R(e.horizon),sky:new R(e.sky),outline:new R(e.outline),intensity:e.intensity,exposure:e.exposure,window:e.window,toonGain:e.toonGain})),o=new L(0,1,0),s=new R(`#fff4e0`),c=new R(`#6f97b3`),l=new R(`#2a2620`),u=new R(`#3a4a57`),d=new R(`#7da3bd`),f=new R(`#0b0a08`),p=new R(`#000000`),m=3,h=1,g=0,_=1.7,v=new L;function y(e){let t=Xe(e)*4,n=Math.floor(t)%4,r=(n+1)%4,i=t-Math.floor(t),y=a[n],b=a[r];s.lerpColors(y.sun,b.sun,i),c.lerpColors(y.hemiSky,b.hemiSky,i),l.lerpColors(y.hemiGround,b.hemiGround,i),u.lerpColors(y.horizon,b.horizon,i),d.lerpColors(y.sky,b.sky,i),f.lerpColors(y.outline,b.outline,i),m=Ze(y.intensity,b.intensity,i),h=Ze(y.exposure,b.exposure,i),g=Ze(y.window,b.window,i),_=Ze(y.toonGain,b.toonGain,i),p.setRGB(.045*g,.075*g,.14*g);let x=Xe(e)*Ke-Math.PI/2,S=Math.cos(x),C=Math.sin(x);v.set(S,C*Math.cos(qe),C*Math.sin(qe)),v.y>=0?o.copy(v):o.copy(v).negate()}return y(t),{sunDir:o,sunColor:s,hemiSky:c,hemiGround:l,horizon:u,sky:d,outline:f,toonFloor:p,get sunIntensity(){return m},get exposure(){return h},get windowGlow(){return g},get toonGain(){return _},get t(){return Xe(t)},get auto(){return r},get clock(){let e=Math.round(Xe(t)*24*60)%1440;return`${String(Math.floor(e/60)).padStart(2,`0`)}:${String(e%60).padStart(2,`0`)}`},cyclePreset(){n=(Math.floor(t*4+1e-4)+1)/4},nudge(e){n+=e/24},goTo(e){n=e},toggleAuto(){r=!r},setReducedMotion(e){i=e},update(e){r&&!i&&(n+=e/Je),t=Qe(t,n,e),y(t)}}}function et(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.35,`rgba(255,255,255,0.55)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new D(e);return r.colorSpace=x,r}function tt(e,t){let n=[];for(let r=0;r<16;r++){let i=r/16*Math.PI*2;n.push(new L(Math.cos(i)*e,t,Math.sin(i)*e))}return new W(n,!0,`catmullrom`,.5)}function nt(e){let t=(t,n)=>Math.exp(-((e-t)*(e-t))/(2*n*n)),n=Math.max(t(.33,.05),t(.75,.06)),r=d.smoothstep(e,.24,.3)*(1-d.smoothstep(e,.8,.88));return d.clamp(.15+.55*r+.45*n,.12,1)}function rt(){let{PITCH:e,N:t,PLINTH_TOP:n}=He,r=t+1,i=n+.04,a=n=>(n-t/2)*e,o=t/2,s=[],c=(e,t)=>t*r+e;for(let e=0;e<r;e++)for(let t=0;t<r;t++)s.push({x:a(t),z:a(e),i:t,j:e,edges:[]});let l=[],u=(t,n)=>{let r=(s[t].i===o||s[t].j===o)&&(s[n].i===o||s[n].j===o),i=l.length;l.push({a:t,b:n,len:e,main:r}),s[t].edges.push(i),s[n].edges.push(i)};for(let e=0;e<r;e++)for(let t=0;t<r;t++)t<r-1&&u(c(t,e),c(t+1,e)),e<r-1&&u(c(t,e),c(t,e+1));return{nodes:s,edges:l,y:i,mid:o}}function it({plinthTop:e=.3,extent:t=4,profile:n=null}={}){let i=new r,u=rt(),{nodes:f,edges:p}=u,m=u.y,g=.34,_=0;{let e=He.PITCH-g*2;_=Math.max(1,Math.floor((e+.26)/.56))}let v=new o({color:`#e8c84a`,fog:!0}),y=new a(new w(.05,.012,.3),v,p.length*_);y.frustumCulled=!1,y.raycast=()=>{},y.receiveShadow=!1,y.castShadow=!1,i.add(y);{let e=new h,t=0;for(let n of p){let r=f[n.a],i=f[n.b],a=i.x-r.x,o=i.z-r.z,s=Math.hypot(a,o),c=a/s,l=o/s,u=Math.atan2(c,l),d=s-g*2;for(let n=0;n<_;n++){let i=g+(_===1?d/2:d*n/(_-1));e.position.set(r.x+c*i,m,r.z+l*i),e.rotation.set(0,u,0),e.updateMatrix(),y.setMatrixAt(t++,e.matrix)}}y.instanceMatrix.needsUpdate=!0}let b=new a(new w(.34,.26,.74),J(new c({flatShading:!0,roughness:.5,metalness:.3})),12);b.castShadow=!0,b.receiveShadow=!1,b.frustumCulled=!1,b.raycast=()=>{};let x=new B,S=new Float32Array(72),C=new Float32Array(72),T=new R(`#fff0c0`),E=new R(`#ff3528`);for(let e=0;e<12;e++)T.toArray(C,e*3),E.toArray(C,(12+e)*3),S[e*3+1]=-50,S[(12+e)*3+1]=-50;x.setAttribute(`position`,new I(S,3)),x.setAttribute(`color`,new I(C,3));let D=new l({size:.72,sizeAttenuation:!0,map:et(),vertexColors:!0,transparent:!0,opacity:0,blending:2,depthWrite:!1}),O=new s(x,D);O.frustumCulled=!1,O.raycast=()=>{},i.add(b,O);let k=[`#f4c430`,`#c0392b`,`#d8dde2`,`#9aa7b4`,`#6b7785`,`#5a7d9a`],A=Y(2403557),j=p.map((e,t)=>t).filter(e=>p[e].main),M=[];for(let e=0;e<12;e++){let t=e<4&&j.length?j[A()*j.length|0]:A()*p.length|0,n=e===1;M.push({edge:t,fwd:A()<.5,s:A()*p[t].len,speed:n?.5:.78+e%3*.1,lenZ:n?1.45:1,color:k[n?1:e===0?0:2+e%4],rng:Y(12648430+e*2654435761)})}let P=new R;M.forEach((e,t)=>b.setColorAt(t,P.set(e.color)));function ee(e,t,n){let r=f[e],i=r.edges.filter(e=>e!==t);if(i.length===0)return t;let a=p[t],o=a.a===e?a.b:a.a,s=r.x-f[o].x,c=r.z-f[o].z,l=Math.hypot(s,c)||1,u=i[0],d=-2;for(let t of i){let n=p[t],i=n.a===e?n.b:n.a,a=f[i].x-r.x,o=f[i].z-r.z,m=Math.hypot(a,o)||1,h=s/l*(a/m)+c/l*(o/m);h>d&&(d=h,u=t)}return n()<.65?u:i[n()*i.length|0]}let F=ee,z=new h,V=(e,t)=>{z.position.set(0,-50,0),z.scale.setScalar(0),z.updateMatrix(),e.setMatrixAt(t,z.matrix)},H=.085,U=He.PLINTH_TOP+.02+.13,W=new a(new N(.04,.1,3,6),J(new c({flatShading:!0,roughness:.8})),14);W.castShadow=!0,W.receiveShadow=!1,W.frustumCulled=!1,W.raycast=()=>{};let G=tt(t-.72,e),te=[];for(let e=0;e<14;e++)te.push({phase:e/14,speed:.12+e%4*.02,dir:e%2?1:-1});let ne=new L,re=new L,ie=new R;te.forEach((e,t)=>W.setColorAt(t,ie.set([`#caa`,`#9ab`,`#bba`,`#ab9`][t%4]))),i.add(W);let K={manhattan:`#e8c84a`,paris:`#dcd2bc`,neoTokyo:`#5ae8e0`};function ae(e){e&&v.color.set(K[e.key]||`#e8c84a`)}ae(n);function oe(t,n,r){let i=r?r.t:.5,a=r?r.windowGlow:0,o=Math.max(2,Math.round(nt(i)*12)),s=a>.05;for(let e=0;e<12;e++){if(e>=o){V(b,e),S[e*3+1]=-50,S[(12+e)*3+1]=-50;continue}let n=M[e];n.s+=t*n.speed;let r=0;for(;n.s>=p[n.edge].len&&r++<4;){n.s-=p[n.edge].len;let e=n.fwd?p[n.edge].b:p[n.edge].a,t=F(e,n.edge,n.rng);n.edge=t,n.fwd=p[t].a===e}let i=p[n.edge],a=n.fwd?f[i.a]:f[i.b],c=n.fwd?f[i.b]:f[i.a],l=c.x-a.x,u=c.z-a.z,d=Math.hypot(l,u)||1,m=l/d,h=u/d,g=-h,_=m,v=a.x+m*n.s+g*H,y=a.z+h*n.s+_*H,x=Math.atan2(m,h);z.position.set(v,U,y),z.rotation.set(0,x,0),z.scale.set(1,1,n.lenZ),z.updateMatrix(),b.setMatrixAt(e,z.matrix);let C=.74*n.lenZ*.5,w=U+.06,T=e*3,E=(12+e)*3;s?(S[T]=v+m*(C+.04),S[T+1]=w,S[T+2]=y+h*(C+.04),S[E]=v-m*(C+.02),S[E+1]=w,S[E+2]=y-h*(C+.02)):(S[T+1]=-50,S[E+1]=-50)}b.instanceMatrix.needsUpdate=!0,x.attributes.position.needsUpdate=!0,D.opacity=d.clamp(a*1.8,0,1);let c=Math.max(2,Math.round(nt(i)*14));for(let t=0;t<14;t++){if(t>=c){V(W,t);continue}let r=te[t],i=(r.phase+r.dir*r.speed*n*.02+1e3)%1;G.getPointAt(i,ne),G.getTangentAt(i,re);let a=Math.sin(n*6+r.phase*30)*.015;z.position.set(ne.x,e+.09+a,ne.z),z.rotation.set(0,Math.atan2(re.x*r.dir,re.z*r.dir),Math.sin(n*6+r.phase*30)*.06),z.scale.setScalar(1),z.updateMatrix(),W.setMatrixAt(t,z.matrix)}W.instanceMatrix.needsUpdate=!0}return{group:i,update:oe,setProfile:ae,graph:u,setRouter(e){F=e||ee}}}function at(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.4,`rgba(255,255,255,0.5)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new D(e);return r.colorSpace=x,r}function ot(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64*.62,0,64/2,64*.62,64*.5);n.addColorStop(0,`rgba(240,250,255,0.95)`),n.addColorStop(1,`rgba(240,250,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new D(e);return r.colorSpace=x,r}function st(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`);t.strokeStyle=`rgba(40,46,54,0.9)`,t.lineWidth=6,t.lineCap=`round`,t.beginPath(),t.moveTo(8,40),t.quadraticCurveTo(24,18,32,34),t.quadraticCurveTo(40,18,56,40),t.stroke();let n=new D(e);return n.colorSpace=x,n}function ct(e,t,n=18){let r=[];for(let i=0;i<n;i++){let a=i/n*Math.PI*2;r.push(new L(Math.cos(a)*e,t,Math.sin(a)*e))}return new W(r,!0,`catmullrom`,.5)}function lt(e,t,n){let r=e-t,i=[],a=(e,t)=>i.push(new L(e,n,t)),o=(e,n,r,i,o=4)=>{for(let s=1;s<=o;s++){let c=r+(i-r)*(s/o);a(e+Math.cos(c)*t,n+Math.sin(c)*t)}};for(let t=0;t<4;t++)a(e,-r+2*r*t/4);o(r,r,0,Math.PI/2);for(let t=0;t<4;t++)a(r-2*r*t/4,e);o(-r,r,Math.PI/2,Math.PI);for(let t=0;t<4;t++)a(-e,r-2*r*t/4);o(-r,-r,Math.PI,1.5*Math.PI);for(let t=0;t<4;t++)a(-r+2*r*t/4,-e);return o(r,-r,1.5*Math.PI,2*Math.PI),new W(i,!0,`catmullrom`,.5)}function ut({extent:t=8,waterSize:n=28,plinthTop:i=.3}={}){let a=new r;a.raycast=()=>{};let o=.06,u=(e,t,r)=>r.set(e/n+.5,-t/n+.5,0),f=[lt(9.5,3,o),ct(12.7,o),new W([new L(8.4,o,0),new L(11,o,-3.6),new L(13,o,0),new L(11,o,3.6)],!0,`catmullrom`,.5)],m=f.map(e=>e.getLength());function h({scale:e=1,hull:t=`#6b7785`,cabin:n=`#e7ecf2`}){let i=new r,a=new p(new w(.46*e,.2*e,1.1*e),J(new c({color:t,roughness:.6,metalness:.2,flatShading:!0}),{color:t}));a.position.y=.02;let o=new p(new w(.3*e,.22*e,.42*e),J(new c({color:n,roughness:.7,flatShading:!0}),{color:n}));return o.position.set(0,.18*e,.08*e),i.add(a,o),i.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!1),e.raycast=()=>{}}),i.userData.halfLen=.55*e,i}let g=[{laneIndex:0,dir:1,speed:.5,wake:.024,scale:1,hull:`#5a6675`,cabin:`#e7ecf2`},{laneIndex:1,dir:-1,speed:.42,wake:.022,scale:1,hull:`#7a5b46`,cabin:`#d9c3a6`},{laneIndex:0,dir:1,speed:.56,wake:.024,scale:.9,hull:`#456079`,cabin:`#cfe0ee`},{laneIndex:2,dir:1,speed:.34,wake:.03,scale:1.35,hull:`#39505f`,cabin:`#e2b85a`}];g.forEach((e,t)=>{e.mesh=h(e),e.u=t*.27%1,e.phase=t*1.7,e.isFerry=e.laneIndex===2,a.add(e.mesh)});let _=g.length,v=_*2,y=new B,b=new Float32Array(v*3).fill(-50),x=new Float32Array(v*3),S=new R(`#fff0c0`),C=new R(`#ff3528`);for(let e=0;e<_;e++)S.toArray(x,e*3),C.toArray(x,(_+e)*3);y.setAttribute(`position`,new I(b,3)),y.setAttribute(`color`,new I(x,3));let T=new s(y,new l({size:.6,sizeAttenuation:!0,map:at(),vertexColors:!0,transparent:!0,opacity:0,blending:2,depthWrite:!1}));T.frustumCulled=!1,T.raycast=()=>{},a.add(T);function E(t,n){let r=new p(new e(t,9,7),J(new c({color:n,roughness:.5,flatShading:!0}),{color:n}));return r.scale.set(.55,.5,1),r.castShadow=!1,r.receiveShadow=!1,r.raycast=()=>{},r.position.y=-5,r}let D=[{x:-9.5,z:6,size:.18,color:`#5b6f86`,period:11,arcH:.55,span:1.1,whale:!1},{x:7.5,z:-9.5,size:.16,color:`#4a6076`,period:14,arcH:.5,span:1,whale:!1},{x:-7,z:-8.5,size:.2,color:`#607089`,period:9,arcH:.6,span:1.2,whale:!1},{x:10.5,z:7,size:.62,color:`#3a4350`,period:38,arcH:.9,span:2.6,whale:!0}];D.forEach((e,t)=>{e.mesh=E(e.size,e.color),e.heading=Math.atan2(-e.x,-e.z),e.t=t/D.length*e.period,e.splashed=!1,a.add(e.mesh),e.whale&&(e.spout=new U(new F({map:ot(),transparent:!0,opacity:0,depthWrite:!1,fog:!0})),e.spout.scale.set(.6,1.1,1),e.spout.position.set(e.x,-5,e.z),a.add(e.spout))});let O=st(),k=[];for(let e=0;e<4;e++){let t=new U(new F({map:O,transparent:!0,opacity:0,depthWrite:!1,fog:!0}));t.scale.setScalar(.5),k.push({sp:t,r:8.6+e*.5,y:1.1+e%2*.5,speed:(.18+e*.03)*(e%2?-1:1),phase:e*1.9}),a.add(t)}let A=D.length,j=Array.from({length:_+A},()=>new L),M=e=>e.laneIndex,N=new L,P=new L,ee=new L;function z(e,t,n){let r=n?n.windowGlow:0,i=1-r;for(let n=0;n<_;n++){let i=g[n],a=f[i.laneIndex],s=m[i.laneIndex],c=i.isFerry?.45+.55*Math.min(1,Math.abs((i.u+.5)%1-.5)*3):1,l=i.u;i.u=(i.u+i.dir*e*i.speed*c/s+1)%1,(i.dir>0?i.u<l:i.u>l)&&(i.laneIndex=M(i)),a.getPointAt(i.u,N),a.getTangentAt(i.u,P);let d=P.x*i.dir,p=P.z*i.dir,h=Math.atan2(d,p),v=Math.sin(t*1.1+i.phase)*.025;i.mesh.position.set(N.x,o+v,N.z),i.mesh.rotation.set(Math.sin(t*.9+i.phase)*.04,h,0);let y=i.mesh.userData.halfLen;u(N.x-d*y,N.z-p*y,ee),j[n].set(ee.x,ee.y,i.wake);let x=n*3,S=(_+n)*3;if(r>.05){let e=.18;b[x]=N.x+d*(y+.05),b[x+1]=e,b[x+2]=N.z+p*(y+.05),b[S]=N.x-d*(y+.02),b[S+1]=e,b[S+2]=N.z-p*(y+.02)}else b[x+1]=-50,b[S+1]=-50}V(),T.material.opacity=d.clamp(r*1.8,0,1);for(let t=0;t<A;t++){let n=D[t];n.t+=e;let r=_+t,i=n.whale?3.2:1.3;if(n.t>=n.period){let e=(n.t-n.period)/i;if(e>=1){n.t=0,n.splashed=!1,n.mesh.position.y=-5,n.spout&&(n.spout.material.opacity=0),j[r].set(0,0,0);continue}let t=Math.sin(Math.PI*e),a=(e-.5)*n.span,s=n.x+Math.sin(n.heading)*a,c=n.z+Math.cos(n.heading)*a;n.mesh.position.set(s,o-.1+t*n.arcH,c),n.mesh.rotation.set(Math.cos(Math.PI*e)*.9,n.heading,0);let l=e<.16||e>.84;if(u(s,c,ee),j[r].set(ee.x,ee.y,l?n.whale?.07:.05:0),n.spout){let t=d.clamp((e-.15)*3,0,1)*(1-e);n.spout.position.set(s,.56+t*.6,c),n.spout.material.opacity=t*.9}}else n.mesh.position.y=-5,j[r].set(0,0,0),n.spout&&(n.spout.material.opacity=0)}for(let e=0;e<4;e++){let n=k[e],r=n.phase+t*n.speed*.25;n.sp.position.set(Math.cos(r)*n.r,n.y+Math.sin(t*1.4+n.phase)*.12,Math.sin(r)*n.r),n.sp.material.opacity=d.clamp(i*.9-.05,0,.85)}if(typeof window<`u`){let e=0;for(let t of D)t.mesh.position.y>o&&e++;window.__waterLife={boats:_,breaching:e,gulls:+k[0].sp.material.opacity.toFixed(2),lights:+T.material.opacity.toFixed(2)}}}function V(){y.attributes.position.needsUpdate=!0}function H(){return j.length}return{group:a,update:z,wakeDrops:j,get wakeCount(){return H()},lanes:f,setRouter(e){M=e||(e=>e.laneIndex)}}}var dt=[`empireState`,`chrysler`,`liberty`,`eiffel`,`arcDeTriomphe`,`sacreCoeur`,`tokyoTower`,`pagoda`,`neonBillboard`],ft={empireState:1.25,chrysler:1.1,liberty:.55,eiffel:3.2,arcDeTriomphe:1.5,sacreCoeur:1.75,tokyoTower:1.35,pagoda:.5,neonBillboard:.9};function pt(t){let n=()=>new c({flatShading:!0,roughness:.7,metalness:.1}),r=(e,r={})=>r.windows?Ne(n(),{color:e,id:t.id(),windowGlow:t.windowGlow,winColors:t.winColors,litFrac:t.litFrac}):J(n(),{color:e,glow:r.glow??null,glowDay:r.glowDay??0,glowNight:r.glowNight??1,windowGlow:r.glow?t.windowGlow:null});return{box:(e,t,n,i,a={})=>new p(new w(e,t,n),r(i,a)),cyl:(e,t,n,i,a={})=>new p(new A(e,t,n,a.seg||12),r(i,a)),cone:(e,t,n,i={})=>new p(new P(e,t,i.seg||8),r(n,i)),sphere:(t,n,i={})=>new p(new e(t,i.seg||12,i.seg2||8),r(n,i)),lathe:(e,t,n={})=>new p(new i(e.map(e=>new T(e[0],e[1])),n.seg||4),r(t,n))}}var $=(e,t,n,r)=>(e.position.set(t,n,r),e),mt=[`#7FB0E0`,`#E07FB0`,`#7FE0A0`,`#E0C97F`,`#9FE07F`,`#7FE0E0`,`#FF8C42`,`#E0E07F`,`#C97FE0`,`#E07F7F`,`#7F9FE0`,`#E0483A`],ht={empireState(e,t){let n=`#E8E0CF`;e.add($(t.box(.42,.18,.42,n,{windows:!0}),0,.09,0)),e.add($(t.box(.34,.16,.34,n,{windows:!0}),0,.26,0)),e.add($(t.box(.26,.14,.26,n,{windows:!0}),0,.41,0)),e.add($(t.box(.19,.34,.19,n,{windows:!0}),0,.65,0)),e.add($(t.box(.13,.06,.13,n,{windows:!0}),0,.85,0));let r=mt[new Date().getMonth()];e.add($(t.cyl(.03,.045,.12,n,{seg:10,glow:r,glowNight:1.85}),0,.94,0)),e.add($(t.cone(.012,.07,n,{seg:8}),0,1.04,0))},chrysler(e,t){let n=`#C9CED4`;e.add($(t.box(.22,.55,.22,`#9AA7B4`,{windows:!0}),0,.275,0));let r=.55;for(let i=0;i<5;i++){let a=.14-i*.024,o=.07;e.add($(t.cyl(a*.7,a,o,n,{seg:8,glow:`#dfeaff`,glowNight:.5}),0,r+o/2,0)),r+=o}e.add($(t.cone(.018,.16,n,{seg:8}),0,r+.08,0))},liberty(e,t){let n=`#B9B4A6`,r=`#4FA890`;e.add($(t.box(.42,.16,.42,n),0,.08,0)),e.add($(t.box(.3,.2,.3,n),0,.26,0)),e.add($(t.cyl(.1,.15,.42,r,{seg:10}),0,.57,0)),e.add($(t.box(.11,.1,.11,r),0,.83,0));for(let n=0;n<7;n++){let i=(n/6-.5)*Math.PI*1.1;e.add($(t.cone(.012,.1,r,{seg:5}),Math.sin(i)*.1,.92,Math.cos(i)*.06-.02))}let i=$(t.cyl(.025,.03,.34,r,{seg:8}),.14,.98,0);i.rotation.z=.35,e.add(i),e.add($(t.box(.06,.06,.06,r,{glow:`#ffd060`,glowDay:.6,glowNight:1.2}),.2,1.16,0)),e.add($(t.cone(.04,.09,`#ffcf66`,{seg:6,glow:`#ffd060`,glowDay:.7,glowNight:1.3}),.2,1.24,0))},eiffel(e,t){let n=`#6E5C4C`,r=[[.2,0],[.13,.16],[.085,.33],[.055,.5],[.035,.66],[.02,.85],[0,.92]];e.add(t.lathe(r,n,{seg:4}));let i=t.lathe(r,n,{seg:4});i.rotation.y=Math.PI/4,e.add(i),e.add($(t.box(.26,.025,.26,n),0,.33,0)),e.add($(t.box(.14,.02,.14,n),0,.66,0)),e.add($(t.cone(.01,.1,n,{seg:6}),0,.97,0))},arcDeTriomphe(e,t){let r=`#D9D0C1`,i=.58,a=.5,o=.34,s=new m;s.moveTo(-.58/2,0),s.lineTo(i/2,0),s.lineTo(i/2,a),s.lineTo(-.58/2,a),s.lineTo(-.58/2,0);let l=new n,u=.15,d=.22;l.moveTo(-.15,0),l.lineTo(-.15,d),l.absarc(0,d,u,Math.PI,0,!0),l.lineTo(u,0),l.lineTo(-.15,0),s.holes.push(l);let f=new E(s,{depth:o,bevelEnabled:!1});f.translate(0,0,-.34/2),f.computeVertexNormals(),e.add(new p(f,J(new c({color:r,flatShading:!0}),{color:r}))),e.add($(t.box(i*1.06,.08,o*1.06,r),0,.54,0))},sacreCoeur(e,t){let n=`#F1EEE6`;e.add($(t.box(.5,.26,.4,n),0,.13,0));let r=(r,i,a,o)=>{e.add($(t.cyl(a*.9,a,i,n,{seg:12}),r,o,0));let s=$(t.sphere(a,n,{seg:12}),r,o+i/2,0);s.scale.y=1.5,e.add(s)};r(0,.22,.15,.4),r(-.2,.1,.07,.33),r(.2,.1,.07,.33)},tokyoTower(e,t){let n=`#F25822`,r=`#EDEDED`,i=0;for(let a=0;a<9;a++){let o=a/9,s=(a+1)/9,c=.19*(1-o)+.03*o,l=.19*(1-s)+.03*s,u=.085,d=a%2?r:n;e.add($(t.cyl(l,c,u,d,{seg:4,glow:n,glowDay:0,glowNight:.7}),0,i+u/2,0)),i+=u}e.add($(t.box(.22,.02,.22,n,{glow:n,glowNight:.7}),0,.28,0)),e.add($(t.box(.12,.02,.12,r),0,.5,0)),e.add($(t.cone(.012,.16,r,{seg:6,glow:`#ff6a2a`,glowNight:.9}),0,i+.08,0))},pagoda(e,t){let n=0;for(let r=0;r<5;r++){let i=.42-r*.06,a=.11;e.add($(t.box(i,a,i,`#B23A2C`,{windows:r<4}),0,n+a/2,0)),e.add($(t.box(i*1.34,.03,i*1.34,`#7A3B2A`),0,n+a+.015,0)),n+=.16999999999999998}e.add($(t.cyl(.012,.012,.1,`#E0C040`,{seg:6}),0,n+.05,0)),e.add($(t.sphere(.03,`#E0C040`,{seg:8,glow:`#ffe680`,glowNight:.8}),0,n+.12,0))},neonBillboard(e,t){let n=`#20242C`;e.add($(t.box(.3,1,.3,n,{windows:!0}),0,.5,0));let r=[`#5AE8E0`,`#E85AA0`,`#E8E06A`],i=(n,r,i,a,o,s,c)=>{let l=$(t.box(n,r,.02,i,{glow:i,glowDay:.6,glowNight:1.1}),a,o,s);l.rotation.y=c,e.add(l)};i(.22,.34,r[0],0,.75,.16,0),i(.16,.5,r[1],.16,.5,0,Math.PI/2),i(.2,.22,r[2],0,.34,-.16,0),e.add($(t.cone(.01,.14,n,{seg:6,glow:`#E85AA0`,glowDay:.4,glowNight:1}),0,1.08,0))}};function gt(e,t){let n=new r;return ht[e](n,pt(t)),n}var _t=``+new URL(`building-skyscraper-d-CapD2Zqe.glb`,import.meta.url).href,vt=``+new URL(`building-n-hdv8kKtN.glb`,import.meta.url).href,yt=``+new URL(`building-g-CsTB1qH9.glb`,import.meta.url).href,bt=``+new URL(`colormap-CK8fW2HB.png`,import.meta.url).href,xt={skyscraper:{url:_t,color:`#9cc1dd`,fill:.92},midrise:{url:vt,color:`#c9a07a`,fill:.96},setback:{url:yt,color:`#d9c7a0`,fill:.9}};function St({windowGlow:e}){let t=new M;t.setURLModifier(e=>e.includes(`colormap.png`)?bt:e);let n=new H(t),r={},i=!1,a=Promise.all(Object.entries(xt).map(async([e,t])=>{r[e]=(await n.loadAsync(t.url)).scene})).then(()=>{i=!0,window.__landmarksReady=!0}).catch(e=>console.error(`landmark models failed:`,e)),o=9e3;function s(t,n,i={}){let a,s;if(dt.includes(t))a=gt(t,{windowGlow:e,winColors:i.winColors,litFrac:i.litFrac,id:()=>++o}),s=1;else{let e=r[t],n=xt[t];if(!e||!n)return null;a=e.clone(!0),s=n.fill}a.updateMatrixWorld(!0);let c=new j().setFromObject(a).getSize(new L);a.scale.setScalar(n.h*s/c.y),a.updateMatrixWorld(!0);let l=new j().setFromObject(a),u=l.getCenter(new L);return a.position.x+=n.x-u.x,a.position.z+=n.z-u.z,a.position.y+=n.plinthTop-l.min.y,dt.includes(t)?a.traverse(e=>{e.isMesh&&(e.castShadow=!1,e.raycast=()=>{})}):a.traverse(n=>{if(!n.isMesh)return;n.castShadow=!1,n.raycast=()=>{};let r=n=>Ne(n.clone(),{color:xt[t].color,id:++o,windowGlow:e,winColors:i.winColors,litFrac:i.litFrac});n.material=Array.isArray(n.material)?n.material.map(r):r(n.material)}),a}return{make:s,whenReady:a,heightFactor:e=>ft[e]??1,get ready(){return i}}}var Ct=[`clear`,`rain`,`snow`,`fog`];function wt({extent:e=7}={}){let t=new r;t.raycast=()=>{};let n=e+2,i=.25,s=(e,t)=>e+Math.random()*(t-e),c=new a(new v(.015,.5),new o({color:`#a9bdd6`,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),600);c.frustumCulled=!1,c.raycast=()=>{};let l=new Float32Array(600*3),u=new Float32Array(600);for(let e=0;e<600;e++)l[e*3]=s(-n,n),l[e*3+1]=s(i,11),l[e*3+2]=s(-n,n),u[e]=s(9,14);let d=new a(new v(.07,.07),new o({color:`#f3f7ff`,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),700);d.frustumCulled=!1,d.raycast=()=>{};let f=new Float32Array(700*3),p=new Float32Array(700),m=new Float32Array(700);for(let e=0;e<700;e++)f[e*3]=s(-n,n),f[e*3+1]=s(i,11),f[e*3+2]=s(-n,n),p[e]=s(0,6.28),m[e]=s(.6,1.2);t.add(c,d);let g=Array.from({length:8},()=>new L),_=0,y=`clear`,b=0,x=0,S=0,C=0,w=0,T=new h,E=(e,t,n,r)=>e+(t-e)*Math.min(1,n*r);function D(e){Ct.includes(e)&&(y=e)}function O(){y=Ct[(Ct.indexOf(y)+1)%Ct.length]}function k(e,t){let r=y===`rain`,a=y===`snow`,o=y===`fog`,h=y!==`clear`;b=E(b,+!!h,e,1.4),x=E(x,+!!h,e,1.2),S=E(S,+!!o,e,.9),w=E(w,h&&!o?1:0,e,1),C=E(C,+!!a,e,a?.22:.5);let v=r?b:0,D=Math.round(600*v);for(let t=0;t<600;t++){if(t>=D){T.position.set(0,-50,0),T.scale.setScalar(0),T.updateMatrix(),c.setMatrixAt(t,T.matrix);continue}l[t*3+1]-=u[t]*e,l[t*3]+=e*1.1,l[t*3+1]<i&&(l[t*3]=s(-n,n),l[t*3+1]=11,l[t*3+2]=s(-n,n)),T.position.set(l[t*3],l[t*3+1],l[t*3+2]),T.rotation.set(0,0,0),T.scale.set(1,1,1),T.updateMatrix(),c.setMatrixAt(t,T.matrix)}c.instanceMatrix.needsUpdate=!0,c.material.opacity=.55*v,_=r?Math.round(8*b):0;for(let e=0;e<_;e++)g[e].set(Math.random(),Math.random(),.05*b);let O=Math.round(700*(a?b:0));for(let r=0;r<700;r++){if(r>=O){T.position.set(0,-50,0),T.scale.setScalar(0),T.updateMatrix(),d.setMatrixAt(r,T.matrix);continue}f[r*3+1]-=m[r]*e;let a=Math.sin(t*1.5+p[r])*.5;f[r*3+1]<i&&(f[r*3]=s(-n,n),f[r*3+1]=11,f[r*3+2]=s(-n,n)),T.position.set(f[r*3]+a,f[r*3+1],f[r*3+2]),T.rotation.set(0,0,0),T.scale.setScalar(1),T.updateMatrix(),d.setMatrixAt(r,T.matrix)}d.instanceMatrix.needsUpdate=!0,d.material.opacity=.9*(a?b:0)}return{group:t,update:k,cycle:O,setKind:D,rainDrops:g,get kind(){return y},get intensity(){return b},get overcast(){return x},get fog(){return S},get snow(){return C},get cloud(){return w},get rainDropCount(){return _},poolCounts:{rain:600,snow:700}}}function Tt(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=(e,n,r)=>{let i=t.createRadialGradient(e,n,0,e,n,r);i.addColorStop(0,`rgba(255,255,255,0.95)`),i.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=i,t.beginPath(),t.arc(e,n,r,0,7),t.fill()};n(128*.42,128*.56,128*.26),n(128*.6,128*.5,128*.3),n(128*.5,128*.46,128*.22),n(128*.34,128*.54,128*.18),n(128*.7,128*.58,128*.18);let r=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5],i=t.getImageData(0,0,128,128),a=i.data;for(let e=0;e<128;e++)for(let t=0;t<128;t++){let n=(e*128+t)*4,i=a[n+3]/255,o=(r[e%4*4+t%4]+.5)/16-.5;a[n+3]=Math.max(0,Math.min(1,Math.floor(i*5+.5+o)/5))*255}t.putImageData(i,0,0);let o=new D(e);return o.colorSpace=x,o}function Et({extent:e=8,count:t=16}={}){let n=new r;n.raycast=()=>{};let i=Tt(),a=e+6,o=(e,t)=>e+Math.random()*(t-e),s=[];for(let e=0;e<t;e++){let e=new F({map:i,transparent:!0,depthWrite:!1,opacity:0,fog:!0}),t=new U(e),r={sp:t,mat:e,wisp:Math.random(),x:o(-a,a),z:o(-a,a),hiY:o(4,6.8),loY:o(.6,2.2),w:o(3,5.6),h:o(1.7,3),speed:o(.25,.7),op:o(.6,1)};t.raycast=()=>{},s.push(r),n.add(t)}let c=new R,l=new R(`#ffffff`),u=new R(`#5b626e`);function d(e,t,n,r){let i=r?r.cloud:0,d=r?r.fog:0,f=Math.min(1,.4+.6*i+.5*d);c.copy(n.sky).lerp(l,.62),c.lerp(u,.6*i);for(let n=0;n<s.length;n++){let r=s[n],l=n/s.length<f;r.x+=r.speed*e*(.6+.8*i),r.x>a&&(r.x=-a,r.z=o(-a,a));let u=Math.min(Dt(r.x,-a,-a+3),1-Dt(r.x,a-3,a)),p=r.hiY*(1-d)+r.loY*d,m=1-.5*r.wisp,h=.72*Math.max(0,1-d-i)+1*i+.42*d,g=l?Math.max(0,h)*r.op*m*u:0;r.mat.opacity+=(g-r.mat.opacity)*Math.min(1,e*2.5),r.mat.color.copy(c);let _=r.w*(1+.6*d)*(1+.4*r.wisp),v=r.h*(1-.35*d);r.sp.scale.set(_,v,1),r.sp.position.set(r.x,p+Math.sin(t*.3+n)*.15,r.z)}}function f(e){i=e;for(let t of s)t.mat.map=e,t.mat.needsUpdate=!0}return{group:n,update:d,setTexture:f,get count(){return s.length}}}function Dt(e,t,n){let r=Math.max(0,Math.min(1,(e-t)/(n-t)));return r*r*(3-2*r)}var Ot=`varying vec2 vUv;

void main() {
  
  
  
  vUv = uv;

  
  
  
  
  
  
  
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,kt=`precision highp float;

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
}`,At=`varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0); 
}`,jt=`precision highp float;

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
}`,Mt=`precision highp float;

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
}`,Nt=`precision highp float;

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
}`,Pt=`const float CA_STRENGTH   = 0.0030;  
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
}`,Ft=`const float DITHER = 0.55;   

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
}`,It=`precision highp float;

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
}`,Lt=`precision highp float;

varying vec2 vUv;
uniform sampler2D uToon;   
uniform sampler2D uPixel;  
uniform float     uBlend;  

void main() {
  vec3 t = texture2D(uToon, vUv).rgb;
  vec3 p = texture2D(uPixel, vUv).rgb;
  gl_FragColor = vec4(mix(t, p, uBlend), 1.0);
}`,Rt=`precision highp float;

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
}`,zt={"1-bit":{gridWidth:110,dither:.6,palette:[`#15120c`,`#c8b486`]},gb:{gridWidth:130,dither:.4,palette:[`#0f380f`,`#306230`,`#8bac0f`,`#9bbc0f`]},"8-bit":{gridWidth:160,dither:.55,palette:[`#140c1c`,`#442434`,`#30346d`,`#4e4a4e`,`#854c30`,`#346524`,`#d04648`,`#757161`,`#597dce`,`#d27d2c`,`#8595a1`,`#6daa2c`,`#d2aa99`,`#6dc2ca`,`#dad45e`,`#deeed6`]},"16-bit":{gridWidth:280,dither:.3,palette:`#000000.#222034.#45283c.#663931.#8f563b.#df7126.#d9a066.#eec39a.#fbf236.#99e550.#6abe30.#37946e.#4b692f.#524b24.#323c39.#3f3f74.#306082.#5b6ee1.#639bff.#5fcde4.#cbdbfc.#ffffff.#9badb7.#847e87.#696a6a.#595652.#76428a.#ac3232.#d95763.#d77bba.#8f974a.#8a6f30`.split(`.`)},modern:{gridWidth:460,dither:.6,palette:null}},Bt=[`gb`,`8-bit`,`16-bit`,`modern`],Vt={"ink-gold (day)":[`#16100A`,`#3A2F1E`,`#6B563A`,`#937B54`,`#B89968`],"ink-gold (night)":[`#0A0C16`,`#1C2236`,`#3A3A52`,`#5A5A78`,`#8A92B0`],"terminal (day)":[`#050805`,`#0E2912`,`#1E6B2F`,`#3CF06A`,`#FFB000`],"terminal (night)":[`#020604`,`#06180E`,`#10401E`,`#1E9040`,`#7FE0FF`]};function Ht(e){let t=Math.max(e.length,1),n=new Float32Array(t*4);e.forEach((e,t)=>{let r=new R(e);n[t*4+0]=r.r,n[t*4+1]=r.g,n[t*4+2]=r.b,n[t*4+3]=1});let r=new k(n,t,1,z,ne);return r.minFilter=u,r.magFilter=u,r.needsUpdate=!0,r}function Ut(e,t){let n=[];for(let t=0;t+2<e.length;t+=3)n.push([e[t],e[t+1],e[t+2]]);if(n.length===0)return[`#000000`];let r=e=>{let t=[255,255,255],n=[0,0,0];for(let r of e)for(let e=0;e<3;e++)t[e]=Math.min(t[e],r[e]),n[e]=Math.max(n[e],r[e]);let r=[n[0]-t[0],n[1]-t[1],n[2]-t[2]],i=r[0]>=r[1]&&r[0]>=r[2]?0:r[1]>=r[2]?1:2;return{ax:i,range:r[i]}},i=[n];for(;i.length<t;){let e=-1,t=-1;if(i.forEach((n,i)=>{if(n.length>1){let{range:a}=r(n);a>t&&(t=a,e=i)}}),e<0)break;let n=i[e],{ax:a}=r(n);n.sort((e,t)=>e[a]-t[a]);let o=n.length>>1;i.splice(e,1,n.slice(0,o),n.slice(o))}return i.map(e=>{let t=[0,0,0];for(let n of e)for(let e=0;e<3;e++)t[e]+=n[e];return`#`+t.map(t=>Math.round(t/e.length)).map(e=>e.toString(16).padStart(2,`0`)).join(``)})}var Wt=220,Gt={night:[`#0A0C16`,`#1C2236`,`#3A3A52`,`#5A5A78`,`#8A92B0`],dawn:[`#1A1008`,`#43281A`,`#7A4A30`,`#B07A4E`,`#E8A86A`],noon:[`#16100A`,`#3A2F1E`,`#6B563A`,`#937B54`,`#B89968`],dusk:[`#140A0A`,`#3E1E1A`,`#7A3828`,`#B85A36`,`#F0884A`]},Kt={night:[`#020604`,`#06180E`,`#10401E`,`#1E9040`,`#7FE0FF`],dawn:[`#060603`,`#1A2410`,`#3A6B22`,`#6CC040`,`#FFC060`],noon:[`#050805`,`#0E2912`,`#1E6B2F`,`#3CF06A`,`#FFB000`],dusk:[`#080402`,`#241408`,`#6B4A12`,`#E0A030`,`#FF7030`]};function qt({demo:e=!1,citySeed:n=0,profileIndex:r=0}={}){let i=new ee({antialias:!0,preserveDrawingBuffer:!0});i.shadowMap.enabled=!0,i.shadowMap.type=1,i.shadowMap.autoUpdate=!1,i.shadowMap.needsUpdate=!0;let a=!!(window.matchMedia&&window.matchMedia(`(pointer: coarse)`).matches);i.setPixelRatio(Math.min(window.devicePixelRatio,a?1.5:2)),i.setSize(window.innerWidth,window.innerHeight),i.setClearColor(920327,1),document.body.appendChild(i.domElement);let s=i.getDrawingBufferSize(new T),c=new b;c.fog=new g(10465470,0);let l=new R(`#aeb6c0`),m=.062,h=new R(`#74508f`),_=new R,y=ve({aspect:window.innerWidth/window.innerHeight}),w=$e({t:.5}),E={type:te,format:z,minFilter:u,magFilter:u,wrapS:O,wrapT:O,depthBuffer:!1,stencilBuffer:!1},k=[new V(256,256,E),new V(256,256,E),new V(256,256,E)];for(let e of k)i.setRenderTarget(e),i.clear();i.setRenderTarget(null);let A=new b,j=new re(-1,1,1,-1,0,1),M=new S({vertexShader:At,fragmentShader:jt,uniforms:{uCurr:{value:null},uPrev:{value:null},uTexel:{value:new T(1/256,1/256)},uMouse:{value:new T(-1,-1)},uMouseStrength:{value:0},uC2:{value:.25},uDamping:{value:.992},uRainCount:{value:0},uRainDrops:{value:Array.from({length:8},()=>new L)},uWakeCount:{value:0},uWakeDrops:{value:Array.from({length:8},()=>new L)}}});A.add(new p(new v(2,2),M));let N=new V(s.x,s.y,{minFilter:t,magFilter:t,depthBuffer:!0,stencilBuffer:!1});function P(e){let t=document.createElement(`canvas`);t.width=t.height=1024;let n=t.getContext(`2d`);n.fillStyle=e?`#0c1418`:`#15110b`,n.fillRect(0,0,1024,1024),n.strokeStyle=e?`rgba(120,150,170,0.22)`:`rgba(184,153,104,0.30)`,n.lineWidth=2;for(let e=0;e<=1024;e+=64)n.beginPath(),n.moveTo(e,0),n.lineTo(e,1024),n.stroke(),n.beginPath(),n.moveTo(0,e),n.lineTo(1024,e),n.stroke();e||(n.fillStyle=`#B89968`,n.font=`bold 360px Georgia, serif`,n.textAlign=`center`,n.textBaseline=`middle`,n.fillText(`LGR`,512,470),n.font=`600 64px ui-monospace, monospace`,n.fillText(`WEB · STUDIO`,512,720));let r=new D(t);return r.colorSpace=x,r}let F=new p(new v(28,28),new o({map:P(e)}));F.rotation.x=-Math.PI/2,F.position.y=-.35,c.add(F);let I=new p(new v(40,24),new S({depthWrite:!1,vertexShader:Ot,fragmentShader:kt,uniforms:{uTime:{value:0},uInk:{value:w.horizon},uGold:{value:w.sky},uFogColor:{value:_},uFogAmt:{value:0},uFogCharm:Te}}));I.position.set(0,3,-8),c.add(I);let B=new S({vertexShader:Mt,fragmentShader:Nt,uniforms:{uHeight:{value:null},uScene:{value:N.texture},uTexel:{value:new T(1/256,1/256)},uResolution:{value:new T(s.x,s.y)},uDisplace:{value:.42},uNormalStrength:{value:22},uRefractStrength:{value:.06},uChromaScale:{value:1},uNormalMatrix:{value:new f},uLightDir:{value:w.sunDir},uInk:{value:new R(`#2A2218`)},uGold:{value:new R(`#B89968`)},uVector:ye,uVecWater:{value:new R(`#1fb8d8`)},uVecTint:{value:be}}}),H=new p(new v(28,28,255,255),B);H.rotation.x=-Math.PI/2,H.updateMatrixWorld(!0),B.uniforms.uNormalMatrix.value.getNormalMatrix(H.matrixWorld),c.add(H);let U={value:0},W=St({windowGlow:U}),G=Ge({seed:n,profileIndex:r,landmarkFactory:W,windowGlow:U});c.add(G.group);let ne=it({plinthTop:.3,extent:G.extent,profile:G.state.profile});c.add(ne.group);let ie=ut({extent:G.extent,waterSize:28,plinthTop:.3});c.add(ie.group),M.uniforms.uWakeDrops.value=ie.wakeDrops;let K=wt({extent:G.extent});c.add(K.group),M.uniforms.uRainDrops.value=K.rainDrops;let ae=Et({extent:G.extent});c.add(ae.group),G.group.remove(G.key),c.add(G.key),G.key.castShadow=!0,G.key.shadow.mapSize.set(2048,2048),G.key.shadow.bias=-18e-5,G.key.shadow.normalBias=.028,c.add(G.key.target);function oe(){let e=G.key.shadow.camera,t=G.extent+4.5;e.left=-t,e.right=t,e.top=t,e.bottom=-t,e.near=1,e.far=48,e.updateProjectionMatrix(),i.shadowMap.needsUpdate=!0}oe();let se=new C(s.x,s.y),ce=new V(s.x,s.y,{minFilter:t,magFilter:t,depthBuffer:!0,stencilBuffer:!1,depthTexture:se}),le=new V(s.x,s.y,{minFilter:t,magFilter:t,depthBuffer:!1,stencilBuffer:!1}),ue=new V(s.x,s.y,{minFilter:t,magFilter:t,depthBuffer:!1,stencilBuffer:!1}),de=new V(s.x,s.y,{minFilter:t,magFilter:t,depthBuffer:!1,stencilBuffer:!1}),fe=new b,pe=new re(-1,1,1,-1,0,1),me=new p(new v(2,2));fe.add(me);let q=new S({vertexShader:At,fragmentShader:Pt,uniforms:{uScene:{value:ce.texture},uTime:{value:0},uResolution:{value:new T(s.x,s.y)},uGrain:{value:1},uChroma:{value:1},uExposure:{value:1}}}),he=e=>{let t=e.map(e=>new R(e));for(;t.length<8;)t.push(new R(0,0,0));return t},ge=[`night`,`dawn`,`noon`,`dusk`],_e={inkgold:ge.map(e=>he(Gt[e])),terminal:ge.map(e=>he(Kt[e]))},De=new S({vertexShader:At,fragmentShader:Ft,uniforms:{uScene:{value:le.texture},uResolution:{value:new T(s.x,s.y)},uPixelSize:{value:Wt},uPalette:{value:_e.inkgold[2]},uPaletteB:{value:_e.inkgold[2]},uPaletteBlend:{value:0},uPaletteSize:{value:5}}}),Oe=new S({vertexShader:At,fragmentShader:Rt,uniforms:{uScene:{value:le.texture},uResolution:{value:new T(s.x,s.y)},uGridWidth:{value:160},uDither:{value:.55},uPalette:{value:Ht(zt[`8-bit`].palette)},uPaletteSize:{value:1},uUsePalette:{value:1}}}),ke={};for(let e of Bt)ke[e]=zt[e].palette?Ht(zt[e].palette):null;let Ae=new S({vertexShader:At,fragmentShader:It,uniforms:{uScene:{value:le.texture},uDepth:{value:se},uResolution:{value:new T(s.x,s.y)},uBands:{value:4},uToonGain:{value:1.7},uToonGamma:{value:.6},uToonFloor:{value:w.toonFloor},uOutline:{value:w.outline},uNear:{value:.1},uFar:{value:100},uIsPerspective:{value:1}}}),je=new S({vertexShader:At,fragmentShader:Lt,uniforms:{uToon:{value:ue.texture},uPixel:{value:de.texture},uBlend:{value:0}}});function Me(e,t){me.material=e,i.setRenderTarget(t),i.render(fe,pe)}function Ne(){y.setViewport(window.innerWidth,window.innerHeight),i.setSize(window.innerWidth,window.innerHeight);let e=i.getDrawingBufferSize(new T);return N.setSize(e.x,e.y),ce.setSize(e.x,e.y),le.setSize(e.x,e.y),ue.setSize(e.x,e.y),de.setSize(e.x,e.y),B.uniforms.uResolution.value.set(e.x,e.y),q.uniforms.uResolution.value.set(e.x,e.y),De.uniforms.uResolution.value.set(e.x,e.y),Oe.uniforms.uResolution.value.set(e.x,e.y),Ae.uniforms.uResolution.value.set(e.x,e.y),e}let J=3,Y=!1,Pe=!1,X=`native`,Fe=.3,Ie=.46,Le=[`native`,...Bt],Re={"16-bit":`16-bit`,"8-bit":`8-bit`,gb:`Game Boy`,modern:`Modern`,native:`Pixel`,"1-bit":`1-bit`};typeof window<`u`&&(window.__mode=J,window.__vector=Y,window.__era=X);let Z=0,ze=performance.now(),Be=typeof window<`u`&&new URLSearchParams(window.location.search).has(`perf`);typeof window<`u`&&(window.__perf=Be),Be&&(i.info.autoReset=!1);let Q=null;typeof window<`u`&&(window.__loaded=!1);let Ve=0,He=new L(1,1,1),Ue=!1;function We(e){let t=Pe?_e.terminal:_e.inkgold,n=e%1*4,r=Math.floor(n)%4;De.uniforms.uPalette.value=t[r],De.uniforms.uPaletteB.value=t[(r+1)%4],De.uniforms.uPaletteBlend.value=n-Math.floor(n)}function Ke(e){let t=zt[e];t&&(Oe.uniforms.uGridWidth.value=t.gridWidth,Oe.uniforms.uDither.value=t.dither,Oe.uniforms.uUsePalette.value=+!!t.palette,t.palette&&(Oe.uniforms.uPalette.value=ke[e],Oe.uniforms.uPaletteSize.value=t.palette.length))}function qe(){X!==`native`&&Ke(X)}let Je=()=>X===`native`?De:Oe;function Ye(e,t){H.visible=!1,i.setRenderTarget(N),i.render(c,e),H.visible=!0,i.setRenderTarget(t),i.render(c,e)}function Xe(e,t){if(H.visible=!1,i.setRenderTarget(N),i.render(c,y.camera),H.visible=!0,J===1||Y&&J!==7&&J!==8)i.setRenderTarget(t),i.render(c,y.camera);else if(i.setRenderTarget(ce),i.render(c,y.camera),J===2)q.uniforms.uGrain.value=1,q.uniforms.uChroma.value=1,Me(q,t);else{q.uniforms.uGrain.value=0,q.uniforms.uChroma.value=0,Me(q,le);let n=y.camera;Ae.uniforms.uNear.value=n.near,Ae.uniforms.uFar.value=n.far,Ae.uniforms.uIsPerspective.value=+!!n.isPerspectiveCamera;let r=e.era?(Ke(e.era),Oe):Je();e.kind===`pixel`?(Me(r,t),window.__style=`pixel`):e.kind===`toon`?(Me(Ae,t),window.__style=`toon`):(Me(Ae,ue),Me(r,de),je.uniforms.uBlend.value=e.blend,Me(je,t),window.__style=`blend`)}}function Ze(){let e=Qe(),t=e.kind===`toon`?1:e.kind===`blend`?1-e.blend:0;return B.uniforms.uChromaScale.value=d.lerp(1,.5,t),e}function Qe(){if(J===1||J===2)return{kind:`none`};if(J===7)return{kind:`pixel`};if(J===8)return{kind:`toon`};let e=y.styleT;return window.__styleT=e,e<=Fe?{kind:`toon`}:e>=Ie?{kind:`pixel`,era:e<.62?`16-bit`:e<.8?`8-bit`:`gb`}:{kind:`blend`,blend:d.smoothstep(e,Fe,Ie),era:`16-bit`}}function et(e){return J===1||J===2?``:Y&&J!==7&&J!==8?`Vector`:e.kind===`toon`?`Toon`:e.kind===`pixel`?Re[e.era||X]||`Pixel`:e.kind===`blend`?`Toon → `+(Re[e.era]||`Pixel`):``}function tt(e,t,{shadowsOn:n=!0,seasonTarget:r=0}={}){if(Be){let e=i.info;Q={calls:e.render.calls,tris:e.render.triangles,programs:e.programs?e.programs.length:0,geo:e.memory.geometries,tex:e.memory.textures},e.reset()}I.material.uniforms.uTime.value=t,q.uniforms.uTime.value=t,w.update(e),G.key.position.copy(w.sunDir).multiplyScalar(24),G.key.color.copy(w.sunColor),G.key.intensity=w.sunIntensity,G.fill.color.copy(w.hemiSky),G.fill.groundColor.copy(w.hemiGround),U.value=w.windowGlow;let a=K.overcast;G.key.intensity*=1-.5*a,G.key.color.lerp(l,.45*a),G.fill.intensity=1+.7*a;let o=d.smoothstep(w.sunDir.y,.06,.34),s=d.lerp(.28,1,1-w.windowGlow),u=n?o*s:0;G.key.shadow.intensity=.72*u,xe.value=.52*u,(n&&!Ue||He.distanceToSquared(w.sunDir)>2e-5)&&(i.shadowMap.needsUpdate=!0,He.copy(w.sunDir)),Ue=n;let f=1-w.windowGlow;be.setRGB(d.lerp(.46,1,f),d.lerp(.52,1,f),d.lerp(.74,1,f)),q.uniforms.uExposure.value=w.exposure,Ae.uniforms.uToonGain.value=w.toonGain,i.setClearColor(w.horizon,1),We(w.t),window.__t=w.t,ne.update(e,t,w),G.update(t),ie.update(e,t,w),M.uniforms.uWakeCount.value=ie.wakeCount,K.update(e,t),M.uniforms.uRainCount.value=K.rainDropCount;let p=K.fog*(1-f);c.fog.density=K.fog*m,_.copy(w.horizon).lerp(h,.85*p),c.fog.color.copy(_),i.setClearColor(_,1),Te.value=K.fog,I.material.uniforms.uFogAmt.value=.7*K.fog,Se.value=K.snow,Ce.value=K.cloud*.55,we.x+=e*.018,we.y+=e*.009,Ee.value+=(r-Ee.value)*Math.min(1,e*1.5),ae.update(e,t,w,K),Z++;let g=performance.now();g-ze>=1e3&&(window.__fps=Z,Be&&Q&&(console.log(`[perf] ${Z} fps · ~${(1e3/Math.max(1,Z)).toFixed(2)} ms · calls ${Q.calls} · tris ${Q.tris} · programs ${Q.programs} · geo ${Q.geo} · tex ${Q.tex}`),window.__perfInfo={fps:Z,...Q}),Z=0,ze=g);let[v,y,b]=k;if(M.uniforms.uPrev.value=v.texture,M.uniforms.uCurr.value=y.texture,i.setRenderTarget(b),i.render(A,j),k=[y,b,v],B.uniforms.uHeight.value=k[1].texture,Ve<2&&typeof document<`u`&&++Ve===2){let e=document.getElementById(`lgr-loader`);e&&e.classList.add(`gone`),window.__loaded=!0}}function nt(e){J=e,window.__mode=J}function rt(){return Y=!Y,ye.value=+!!Y,window.__vector=Y,Y}function at(e){return Y=!!e,ye.value=+!!Y,window.__vector=Y,Y}function ot(){return X=Le[(Le.indexOf(X)+1)%Le.length],window.__era=X,qe(),X}function st(){return Pe=!Pe,Pe}return{updateWorld:tt,decideStyle:Ze,renderCityPipeline:Xe,renderCityBeautyTo:Ye,styleHintName:et,setPostMode:nt,toggleVector:rt,setVector:at,cycleEra:ot,togglePalette:st,get mode(){return J},get vector(){return Y},get sceneEra(){return X},renderer:i,drawBuffer:s,scene:c,rig:y,sunRig:w,SIM:256,targets:k,simScene:A,simCamera:j,simMaterial:M,grabRT:N,card:F,backdrop:I,WATER_SIZE:28,water:H,waterMaterial:B,windowGlow:U,landmarkFactory:W,city:G,cityLife:ne,waterLife:ie,weatherRig:K,clouds:ae,fitShadowFrustum:oe,SHADOW_DIST:24,sceneDepth:se,sceneRT:ce,filmicRT:le,toonRT:ue,pixelRT:de,postScene:fe,postCamera:pe,postQuad:me,filmicMaterial:q,pixelMaterial:De,pixelkitMaterial:Oe,toonMaterial:Ae,mixMaterial:je,PALCACHE:_e,ERA_TEX:ke,runPass:Me,OVERCAST_GREY:l,FOG_DENSITY:m,FOG_NIGHT_TINT:h,_fogColor:_,resize:Ne}}var Jt=[`video/mp4;codecs=avc1.42E01E`,`video/mp4`,`video/webm;codecs=vp9`,`video/webm`];function Yt({renderer:e,rig:t,sunRig:n,poke:r,getState:i,office:a={}}){let o=e.domElement,s=new URLSearchParams(window.location.search),c=e=>{let t=i();return`lgr-${t.lesson}-${String(t.clock||``).replace(`:`,``)}-${t.style}.${e}`},l=(e,t)=>{let n=URL.createObjectURL(e),r=document.createElement(`a`);r.href=n,r.download=t,document.body.appendChild(r),r.click(),r.remove(),setTimeout(()=>URL.revokeObjectURL(n),1e3)};function u(){o.toBlob(e=>{e&&(l(e,c(`png`)),window.__lastStill=e.size)},`image/png`)}let d=()=>Jt.find(e=>window.MediaRecorder&&MediaRecorder.isTypeSupported(e))||``,f=Xt(),p=null,m=[],h=!1;function g(){if(h)return;let e=d(),t=o.captureStream(60);p=new MediaRecorder(t,e?{mimeType:e,videoBitsPerSecond:12e6}:{}),m=[],p.ondataavailable=e=>{e.data&&e.data.size&&m.push(e.data)},p.onstop=()=>{let e=new Blob(m,{type:p.mimeType});l(e,c(p.mimeType.includes(`mp4`)?`mp4`:`webm`)),window.__lastVideo=e.size},p.start(),h=!0,window.__recording=!0,f.show()}function _(){h&&(p.stop(),h=!1,window.__recording=!1,f.hide())}let v=()=>h?_():g(),y=e=>new Promise(t=>setTimeout(t,e)),b=e=>window.dispatchEvent(new KeyboardEvent(`keydown`,{key:e}));async function x(){let e=o.clientWidth,t=o.clientHeight,n=e*.26,i=t*.74;for(let t=0;t<=10;t++)r.at(n+t*e*.028,i+Math.sin(t*.7)*16),await y(100);r.stop()}async function S(e){if(e.keys)for(let t of e.keys)b(t),await y(70);e.zoom&&t.zoomBy(e.zoom),e.orbit&&t.orbit(e.orbit[0],e.orbit[1]),e.timeTo!==void 0&&n.goTo(e.timeTo),e.office&&a[e.office]?.(),e.ripple&&await x(),e.waitMs&&await y(e.waitMs)}let C={tour:[{keys:[`6`,`0`],waitMs:600},{zoom:.72,waitMs:1700},{ripple:!0,waitMs:2400},{orbit:[.55,0],waitMs:1700},{timeTo:0,waitMs:3e3},{timeTo:.5,waitMs:1500},{keys:[`7`],waitMs:1e3},{zoom:1.5,waitMs:1400},{keys:[`B`],waitMs:2e3},{keys:[`B`],waitMs:2e3},{keys:[`B`],waitMs:2e3},{keys:[`B`],waitMs:2e3},{keys:[`B`],waitMs:2e3},{keys:[`8`],waitMs:900},{zoom:.65,waitMs:1200},{ripple:!0,waitMs:2600},{keys:[`7`],waitMs:700},{keys:[`B`],waitMs:300},{keys:[`B`],waitMs:900},{zoom:1.4,waitMs:2600}],daycycle:[{keys:[`6`,`0`],waitMs:700},{timeTo:.75,waitMs:2600},{timeTo:1,waitMs:2600},{timeTo:1.25,waitMs:2600},{timeTo:1.5,waitMs:2600},{timeTo:1.5,waitMs:800}],office:[{keys:[`o`],waitMs:1700},{office:`pet`,waitMs:1300},{office:`feed`,waitMs:1700},{office:`travel`,waitMs:1700},{keys:[`W`,`W`,`W`],waitMs:1800},{timeTo:0,waitMs:2400},{office:`laptop`,waitMs:800},{office:`closeLaptop`,waitMs:300},{timeTo:.5,waitMs:900},{keys:[`W`],waitMs:200},{keys:[`o`],waitMs:1500}],cities:[{keys:[`6`,`0`],waitMs:500},{timeTo:.78,waitMs:2800},{keys:[`C`],waitMs:3e3},{keys:[`C`],waitMs:3e3},{keys:[`C`],waitMs:2e3}],water:[{keys:[`6`,`0`],waitMs:600},{zoom:1.35,waitMs:2800},{orbit:[.7,0],waitMs:2600},{ripple:!0,waitMs:2200},{timeTo:0,waitMs:3200},{timeTo:.5,waitMs:1500},{orbit:[-.5,0],waitMs:2200}],morph:[{keys:[`6`,`3`],waitMs:700},{zoom:.55,waitMs:1800},{zoom:2.3,waitMs:1700},{zoom:1.26,waitMs:1700},{zoom:1.16,waitMs:1900},{zoom:.3,waitMs:2200}],skin:[{keys:[`o`],waitMs:1800},{keys:[`j`],waitMs:2e3},{keys:[`j`],waitMs:2e3},{timeTo:0,waitMs:2600},{timeTo:.5,waitMs:1500},{keys:[`u`],waitMs:2e3},{keys:[`j`],waitMs:1400},{keys:[`o`],waitMs:1500}]};async function w(e){let t=C[e];if(t){window.__director=e;for(let e of t)await S(e);window.__director=null}}async function T(e){await y(1600),g(),await w(e),await y(400),_(),window.__captureDone=!0}window.addEventListener(`keydown`,e=>{(e.key===`s`||e.key===`S`)&&u(),(e.key===`r`||e.key===`R`)&&v()});let E=s.get(`capture`);return E&&C[E]&&T(E),window.__capture={still:u,toggleRec:v,run:w,sequences:Object.keys(C)},window.__capture}function Xt(){let e=document.createElement(`div`);return e.textContent=`● REC`,e.style.cssText=`position:fixed;top:14px;right:16px;z-index:2;font:bold 12px ui-monospace,monospace;color:#ff3b30;letter-spacing:.12em;text-shadow:0 1px 3px #000;display:none;`,document.body.appendChild(e),{show:()=>{e.style.display=`block`},hide:()=>{e.style.display=`none`}}}var Zt=`
.vui { position: fixed; left: 50%; bottom: 16px; transform: translateX(-50%); z-index: 3;
  display: flex; gap: 8px; align-items: center; padding: 7px 9px; border-radius: 14px;
  background: rgba(16,18,24,0.72); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
  box-shadow: 0 6px 24px rgba(0,0,0,0.4); font: 600 12px/1 ui-monospace, monospace;
  color: #d8dde6; pointer-events: auto; user-select: none; max-width: calc(100vw - 24px);
  flex-wrap: wrap; justify-content: center; }
.vui button { min-width: 44px; min-height: 44px; padding: 0 12px; border: 0; border-radius: 10px;
  background: rgba(255,255,255,0.07); color: inherit; font: inherit; cursor: pointer;
  letter-spacing: .04em; transition: background .12s, transform .08s ease; }
.vui button:hover { background: rgba(255,255,255,0.16); }
/* L41 BUTTON JUICE: a press scales down + flashes brighter so taps feel responsive (paired with a
   guarded haptic tick in JS). Reduced-motion users get the flash without the scale animation. */
.vui button:active { transform: scale(0.92); background: rgba(255,255,255,0.26); }
@media (prefers-reduced-motion: reduce) { .vui button { transition: background .12s; } .vui button:active { transform: none; } }
.vui button.on { background: #3a7bd5; color: #fff; }
.vui .seg { display: flex; gap: 2px; background: rgba(255,255,255,0.05); border-radius: 11px; padding: 2px; }
.vui .seg button { min-width: 44px; padding: 0 9px; border-radius: 9px; }
.vui .sep { width: 1px; align-self: stretch; margin: 4px 2px; background: rgba(255,255,255,0.12); }
.vui input[type=range] { width: 92px; accent-color: #3a7bd5; height: 44px; cursor: pointer; }
.vui .lbl { opacity: .55; font-size: 10px; letter-spacing: .12em; text-transform: uppercase; padding: 0 2px; }
.vui-info { position: fixed; left: 50%; bottom: 74px; transform: translateX(-50%); z-index: 3;
  display: none; max-width: calc(100vw - 24px); padding: 10px 14px; border-radius: 12px;
  background: rgba(16,18,24,0.92); color: #c8ccd4; pointer-events: auto;
  font: 11px/1.7 ui-monospace, monospace; letter-spacing: .04em; }
.vui-info.open { display: block; }
/* L20 "show controls" pill — appears bottom-right when the bar is minimized, so a viewer can
   hide the UI to watch the scene unobstructed, then bring it back with one tap. */
.vui-show { position: fixed; right: 14px; bottom: 16px; z-index: 3; display: none;
  min-width: 44px; min-height: 44px; padding: 0 14px; border: 0; border-radius: 12px;
  background: rgba(16,18,24,0.72); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
  color: #d8dde6; font: 600 12px/1 ui-monospace, monospace; letter-spacing: .04em; cursor: pointer;
  align-items: center; gap: 7px; box-shadow: 0 6px 24px rgba(0,0,0,0.4); pointer-events: auto; }
.vui-show.on { display: inline-flex; }
/* L27 on-screen STYLE HINT — a small top-centre pill naming the current look as you zoom the AUTO
   Style-LOD ladder (vector → toon → 16-bit → 8-bit → Game Boy), so the morph is legible. Fades in on
   change, out when idle; pointer-events none (never blocks the canvas). Hidden with the bar (M) + ?ui=0. */
.vui-style { position: fixed; left: 50%; top: 16px; transform: translateX(-50%); z-index: 3;
  padding: 6px 13px; border-radius: 999px; background: rgba(16,18,24,0.72);
  backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); color: #eaeef4;
  font: 700 11px/1 ui-monospace, monospace; letter-spacing: .16em; text-transform: uppercase;
  pointer-events: none; opacity: 0; transition: opacity .35s ease; box-shadow: 0 4px 16px rgba(0,0,0,0.35); }
.vui-style.on { opacity: 0.92; }
/* L31 "More" overflow panel (TOUCH only): the secondary toggles live here behind one tap, so the
   primary bar stays one/two compact rows and the ENGINE owns the mobile landing (progressive disclosure). */
.vui-more { position: fixed; left: 50%; bottom: 80px; transform: translateX(-50%); z-index: 3;
  display: none; flex-wrap: wrap; justify-content: center; align-items: center; gap: 8px;
  max-width: calc(100vw - 24px); padding: 9px 11px; border-radius: 14px;
  background: rgba(16,18,24,0.92); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
  box-shadow: 0 6px 24px rgba(0,0,0,0.4); pointer-events: auto; }
.vui-more.open { display: flex; }
@media (pointer: coarse) { .vui { bottom: 20px; padding: 9px 11px; } .vui button { font-size: 13px; }
  .vui-show { bottom: 20px; } .vui-more { bottom: 84px; } }
`;function Qt({controls:e,state:t,show:n,coarse:r}){if(typeof document>`u`)return;let i=document.createElement(`style`);i.textContent=Zt,document.head.appendChild(i);let a=document.createElement(`div`);a.className=`vui`;let o=document.createElement(`div`);o.className=`vui-info`,o.innerHTML=`KEYS · 4/5/6 cam · 0 vector · 7/8 pixel/toon · B era · T time · [ ] scrub · 9 auto · C city · G shuffle · W weather · K season · click a building / O office · J office skin · U painted props · Esc exit · M hide UI · S still · R rec · H shadows · P theme · drag water to ripple`;let s=(e,t,n)=>{let r=document.createElement(`button`);return r.textContent=e,n&&(r.title=n),r.addEventListener(`click`,e=>{navigator.vibrate?.(10),t(e)}),r},c=e=>{let t=document.createElement(`div`);return t.className=`seg`,{seg:t,btns:e.map(([n,r])=>{let i=s(n,()=>e.find(e=>e[1]===r)[2](),n);return i.dataset.val=r,t.appendChild(i),i})}},l=s(`City`,()=>e.city(),`Next city profile (C)`),u=s(`Shuffle`,()=>e.shuffle(),`New random seed (G)`),d={clear:`Clear`,rain:`Rain`,snow:`Snow`,fog:`Fog`},f=[`Spring`,`Summer`,`Autumn`,`Winter`],p=s(`Clear`,()=>e.weather(),`Cycle weather: clear→rain→snow→fog (W)`),m=s(`Spring`,()=>e.season(),`Cycle season: spring→summer→autumn→winter (K)`),h=s(`Office`,()=>e.office(),`Dive into / exit the office (O · Esc)`),g={"3d":`3D`,smooth:`Smooth`,charm:`Charm`},_=s(`Skin`,()=>e.officeSkin(),`Office look: 3D → smooth → charm diffusion (J)`),v={painted:`Painted`,"3d":`Live 3D`},y=s(`Props`,()=>e.officeProps(),`Office props: painted (cohesive) ↔ live 3D (animated) — under a skin (U)`),b=c([[`Auto`,`auto`,()=>e.style(`auto`)],[`Vector`,`vector`,()=>e.style(`vector`)],[`Pixel`,`pixel`,()=>e.style(`pixel`)],[`Toon`,`toon`,()=>e.style(`toon`)]]);b.btns[0].title=`AUTO: zoom morphs the style (toon → 16-bit → 8-bit → Game Boy)`;let x={native:`Era`,gb:`GB`,"8-bit":`8-bit`,"16-bit":`16-bit`,modern:`Modern`,"1-bit":`1-bit`},S=s(`Era`,()=>e.era(),`Cycle the pixel era (B): native → GB → 8-bit → 16-bit → Modern`),C=document.createElement(`input`);C.type=`range`,C.min=`0`,C.max=`1`,C.step=`0.01`,C.title=`Time of day`;let w=!1;C.addEventListener(`pointerdown`,()=>{w=!0}),C.addEventListener(`pointerup`,()=>{w=!1}),C.addEventListener(`input`,()=>e.time(parseFloat(C.value)));let T=s(`▶`,()=>e.auto(),`Play/pause day cycle (9)`),E=document.createElement(`div`);E.style.cssText=`display:flex;align-items:center;gap:6px;`;let D=document.createElement(`span`);D.className=`lbl`,D.textContent=`Day`,E.append(D,C,T);let O=c([[`Iso`,`iso`,()=>e.cam(`iso`)],[`Dim`,`dimetric`,()=>e.cam(`dimetric`)],[`3D`,`persp`,()=>e.cam(`persp`)]]),k=s(`ⓘ`,()=>o.classList.toggle(`open`),`All keys`),A=s(`⌄`,()=>R(!0),`Hide controls — watch unobstructed (M)`),j=document.createElement(`div`);j.className=`vui-more`;let M=s(`More`,()=>j.classList.toggle(`open`),`More controls`);if(r){a.append(l,u,h,T,b.seg,M,A);let e=document.createElement(`div`);e.style.cssText=`display:flex;align-items:center;gap:6px;`,e.append(D,C),j.append(p,m,_,y,S,O.seg,e)}else a.append(l,u,U(),p,m,h,_,y,U(),b.seg,S,U(),E,U(),O.seg,k,U(),A);let N=document.createElement(`button`);N.className=`vui-show`,N.innerHTML=`⌃ Controls`,N.title=`Show controls (M)`,N.addEventListener(`click`,()=>R(!1));let P=document.createElement(`div`);P.className=`vui-style`,document.body.append(o,j,a,N,P);let ee=n,F=!1;R(r);function I(){let e=t();b.btns.forEach(t=>t.classList.toggle(`on`,t.dataset.val===e.style)),O.btns.forEach(t=>t.classList.toggle(`on`,t.dataset.val===e.cam)),p.textContent=d[e.weather]||`Clear`,p.classList.toggle(`on`,e.weather!==`clear`),m.textContent=f[e.season]||`Spring`,m.classList.toggle(`on`,(e.season||0)>0),h.textContent=e.office?`Exit`:`Office`,h.classList.toggle(`on`,!!e.office),_.textContent=g[e.officeSkin]||`Skin`,_.classList.toggle(`on`,e.officeSkin&&e.officeSkin!==`3d`),y.textContent=v[e.officeProps]||`Props`,y.classList.toggle(`on`,e.officeProps===`painted`&&e.officeSkin&&e.officeSkin!==`3d`),T.textContent=e.auto?`❚❚`:`▶`,T.classList.toggle(`on`,e.auto),S.textContent=x[e.era]||`Era`,S.classList.toggle(`on`,e.era&&e.era!==`native`),w||(C.value=String(e.t))}I();let L=setInterval(I,200);function R(e){if(!ee){a.style.display=`none`,N.classList.remove(`on`),o.classList.remove(`open`),j.classList.remove(`open`),P.classList.remove(`on`);return}F=e,a.style.display=e?`none`:`flex`,N.classList.toggle(`on`,e),e&&(o.classList.remove(`open`),j.classList.remove(`open`),P.classList.remove(`on`))}function z(){R(!F)}let B=null,V=null;function H(e){if(!ee||F){P.classList.remove(`on`),B=null;return}if(!e){P.classList.remove(`on`),B=``;return}e!==B&&(B=e,P.textContent=e,P.classList.add(`on`),clearTimeout(V),V=setTimeout(()=>P.classList.remove(`on`),2e3))}return{toggle:z,setHidden:R,refresh:I,setStyleHint:H,destroy(){clearInterval(L),a.remove(),o.remove(),j.remove(),N.remove(),P.remove(),i.remove(),clearTimeout(V)}};function U(){let e=document.createElement(`div`);return e.className=`sep`,e}}var $t=`lgr_hints_`,en=!1;function tn(){if(en||typeof document>`u`)return;en=!0;let e=document.createElement(`style`);e.textContent=`
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
  }`,document.head.appendChild(e)}function nn({key:e,title:t=`Tips`,tips:n=[],force:r=!1}={}){let i={key:e,shown:!1,dismissed:!1,seen:!1};if(typeof window<`u`&&(window.__hints=i),typeof document>`u`||!e)return{dismiss(){},el:null};let a=$t+e,o=!1;try{o=localStorage.getItem(a)===`1`}catch{}if(o&&!r)return i.seen=!0,{dismiss(){},el:null};tn();let s=!!(window.matchMedia&&window.matchMedia(`(prefers-reduced-motion: reduce)`).matches),c=document.createElement(`div`);c.className=`lgr-hints`,c.innerHTML=`<div class="lgr-hints-card">
    <div class="lgr-hints-h">${t}</div>
    <ul>${n.map(e=>`<li>${e}</li>`).join(``)}</ul>
    <button class="lgr-hints-ok">Got it</button>
    <button class="lgr-hints-x" title="Dismiss (Esc)" aria-label="Dismiss">✕</button>
  </div>`,document.body.appendChild(c),i.shown=!0,s?c.classList.add(`on`):requestAnimationFrame(()=>c.classList.add(`on`));let l=!1;function u(e=!0){if(!l){if(l=!0,e)try{localStorage.setItem(a,`1`)}catch{}i.dismissed=!0,window.removeEventListener(`keydown`,d),c.classList.remove(`on`),setTimeout(()=>c.remove(),s?0:300)}}function d(e){e.key===`Escape`&&u(!0)}return window.addEventListener(`keydown`,d),c.querySelector(`.lgr-hints-ok`).addEventListener(`click`,()=>{navigator.vibrate?.(10),u(!0)}),c.querySelector(`.lgr-hints-x`).addEventListener(`click`,()=>{navigator.vibrate?.(10),u(!0)}),{dismiss:u,el:c}}var rn=`precision highp float;

varying vec2 vUv;

uniform sampler2D uCity;
uniform sampler2D uOffice;
uniform float uT;
uniform vec2  uFocus;

void main() {
  
  float t = uT * uT * (3.0 - 2.0 * uT);

  
  
  float scale = mix(1.0, 0.32, t);
  vec2 cityUv = uFocus + (vUv - uFocus) * scale;
  vec3 city = texture2D(uCity, cityUv).rgb;

  
  float office = smoothstep(0.40, 1.0, uT);
  vec3 room = texture2D(uOffice, vUv).rgb;

  
  vec3 col = mix(city, room, office);
  float v = 1.0 - smoothstep(0.2, 1.1, distance(vUv, vec2(0.5))) * (0.35 * (1.0 - abs(uT - 0.5) * 2.0));
  col *= v;

  gl_FragColor = vec4(col, 1.0);
}`;export{qt as a,Ht as c,At as d,X as f,oe as h,Yt as i,Ut as l,J as m,nn as n,zt as o,Fe as p,Qt as r,Vt as s,rn as t,Rt as u};