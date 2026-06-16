import{A as e,B as t,C as n,D as r,E as i,F as a,G as o,H as s,I as c,L as l,M as u,N as d,O as f,P as p,Q as m,R as h,S as g,T as _,U as v,V as y,W as b,X as x,Y as S,_ as C,a as w,at as T,c as E,ct as D,f as O,ft as k,g as A,h as j,i as M,it as N,k as P,l as F,m as I,mt as L,n as ee,nt as te,o as R,pt as z,q as B,rt as V,s as ne,st as H,t as re,tt as U,u as W,v as ie,w as G,y as ae,z as oe}from"./three-wHnieZCl.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var se=Math.atan(1/Math.SQRT2),ce=Math.atan(.5),le=Math.PI/4,K={PERSPECTIVE:4,ISOMETRIC:5,DIMETRIC:6},ue=.12,de=1.45,fe=4,pe=40,me=1.5,he=16,ge=6,_e=22,ve=3.5,ye=11,q=(e,t,n)=>e+(t-e)*(1-Math.exp(-8*n)),be=(e,t)=>e+Math.PI*2*Math.round((t-e)/(Math.PI*2));function xe({aspect:e,fov:t=48,near:n=.1,far:r=100,target:i=new z(0,.8,0),azimuth:a=le,elevation:s=.52,distance:l=12,zoom:u=5.5}={}){let d=new o(t,e,n,r),f=new v(-1,1,1,-1,n,r),p=K.PERSPECTIVE,m=e,h={azimuth:a,elevation:s,distance:l,zoom:u,target:i.clone()},g={azimuth:a,elevation:s,distance:l,zoom:u,target:i.clone()},_=!1,y=()=>p===K.PERSPECTIVE?d:f;function b(e){e!==p&&(p=e,p===K.ISOMETRIC||p===K.DIMETRIC?(h.elevation=p===K.ISOMETRIC?se:ce,h.azimuth=be(le,g.azimuth),_=!0):_=!1)}function x(e,t){h.azimuth+=e,_||(h.elevation=c.clamp(h.elevation+t,ue,de))}function S(e){p===K.PERSPECTIVE?h.distance=c.clamp(h.distance*e,fe,pe):h.zoom=c.clamp(h.zoom*e,me,he)}function C(e,t){let n=h.azimuth,r=p===K.PERSPECTIVE?h.distance*.04:h.zoom*.08,i=new z(Math.cos(n),0,-Math.sin(n)),a=new z(-Math.sin(n),0,-Math.cos(n));h.target.addScaledVector(i,e*r),h.target.addScaledVector(a,t*r)}function w(e,t){m=e/t,d.aspect=m,d.updateProjectionMatrix()}function T(e){g.azimuth=q(g.azimuth,h.azimuth,e),g.elevation=q(g.elevation,h.elevation,e),g.distance=q(g.distance,h.distance,e),g.zoom=q(g.zoom,h.zoom,e),g.target.x=q(g.target.x,h.target.x,e),g.target.y=q(g.target.y,h.target.y,e),g.target.z=q(g.target.z,h.target.z,e);let t=Math.cos(g.elevation),n=Math.sin(g.elevation),r=Math.cos(g.azimuth),i=Math.sin(g.azimuth),a=y();if(a.position.set(g.target.x+g.distance*t*i,g.target.y+g.distance*n,g.target.z+g.distance*t*r),a.lookAt(g.target),a.isOrthographicCamera){let e=g.zoom,t=e*m;a.left=-t,a.right=t,a.top=e,a.bottom=-e,a.updateProjectionMatrix()}}function E(e,t,n,r=!1){h.target.set(e,t,n),r&&g.target.copy(h.target)}function D(e,t=!1){h.zoom=c.clamp(e,me,he),t&&(g.zoom=h.zoom)}return{get camera(){return y()},get mode(){return p},get azimuth(){return g.azimuth},setTarget:E,setZoom:D,get styleT(){return p===K.PERSPECTIVE?c.clamp((g.distance-ge)/(_e-ge),0,1):c.clamp((g.zoom-ve)/(ye-ve),0,1)},setMode:b,orbit:x,zoomBy:S,pan:C,setViewport:w,update:T}}var Se={value:0},Ce=new I(`#ffffff`),we={value:0},Te={value:0},Ee={value:0},De=new k,Oe={value:0},ke={value:0},Ae=`
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
`;function je(e){e.uniforms.uVector=Se,e.uniforms.uVecTint={value:Ce},e.uniforms.uVecShadow=we,e.uniforms.uSnow=Te,e.uniforms.uCloud=Ee,e.uniforms.uCloudOff={value:De},e.uniforms.uFogCharm=Oe}function Me(e){return e.replace(`#include <fog_fragment>`,`
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
  `)}function Ne(e){return e.replace(`#include <common>`,`#include <common>
varying vec3 vVecN;
varying vec3 vVecP;
varying vec2 vWorldXZ;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
  vVecN = normal;
  vVecP = position;
  vWorldXZ = (modelMatrix * vec4(position, 1.0)).xz;`)}function Pe(e){return e.replace(`#include <shadowmap_pars_fragment>`,`#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>`)}var J=`col *= mix(1.0, getShadowMask(), uVecShadow);`;function Y(e,{color:t,id:n,windowGlow:r,winColors:i=[`#ffb852`,`#8cd9ff`],litFrac:a=.55}={}){let o=[0,1,2].map(e=>new I(i[e]??i[i.length-1]));return e.customProgramCacheKey=()=>`lgr-vec-tower`,e.onBeforeCompile=e=>{je(e),e.uniforms.uWindowGlow=r,e.uniforms.uWinId={value:n},e.uniforms.uVecColor={value:new I(t)},e.uniforms.uWinA={value:o[0]},e.uniforms.uWinB={value:o[1]},e.uniforms.uWinC={value:o[2]},e.uniforms.uWinLit={value:a},e.vertexShader=Ne(e.vertexShader),e.fragmentShader=Me(Pe(e.fragmentShader.replace(`#include <common>`,`#include <common>
        uniform float uWindowGlow;
        uniform float uWinId;
        uniform vec3  uVecColor;
        uniform vec3  uWinA; uniform vec3 uWinB; uniform vec3 uWinC;
        uniform float uWinLit;
        ${Ae}
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
        }`)))},e}function X(e,{color:t=null,glow:n=null,glowDay:r=0,glowNight:i=1,windowGlow:a=null,season:o=!1}={}){let s=t===null,c=n!==null&&a!==null;return e.customProgramCacheKey=()=>`lgr-vec|`+(s?`d`:`c`)+(c?`g`:``)+(o?`s`:``),e.onBeforeCompile=e=>{je(e),s||(e.uniforms.uVecColor={value:new I(t)}),c&&(e.uniforms.uGlow={value:new I(n)},e.uniforms.uGlowDay={value:r},e.uniforms.uGlowNight={value:i},e.uniforms.uWindowGlow=a),o&&(e.uniforms.uSeason=ke),e.vertexShader=Ne(e.vertexShader);let l=s?`diffuseColor.rgb`:`uVecColor`,u=o?`seasonShift(${l})`:l,d=(s?``:`uniform vec3 uVecColor;
`)+(c?`uniform vec3 uGlow; uniform float uGlowDay; uniform float uGlowNight; uniform float uWindowGlow;
`:``)+(o?`uniform float uSeason;
vec3 seasonShift(vec3 c){
  c = mix(c, vec3(0.86, 0.46, 0.13), smoothstep(0.40, 0.70, uSeason));   // → autumn orange
  c = mix(c, vec3(0.46, 0.33, 0.20), smoothstep(0.75, 1.00, uSeason));   // → bare brown
  return c;
}
`:``),f=c?`uGlow * mix(uGlowDay, uGlowNight, uWindowGlow)`:`vec3(0.0)`,p=Me(Pe(e.fragmentShader.replace(`#include <common>`,`#include <common>
`+d+Ae).replace(`#include <opaque_fragment>`,`#include <opaque_fragment>
        if (uVector > 0.5) {
          vec3 col = vecShade(${u});
          ${J}                            // the sun's shadow darkens the flat tier…
          gl_FragColor = vec4(col + ${f}, diffuseColor.a);  // …but the night glow stays lit
        }`)));c&&(p=p.replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>\n  totalEmissiveRadiance += ${f};`)),e.fragmentShader=p},e}function Z(e){let t=e>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Fe(e){let t=Z(e);return{next:t,range:(e,n)=>e+(n-e)*t(),int:(e,n)=>e+Math.floor(t()*(n-e+1)),pick:e=>e[Math.floor(t()*e.length)],chance:e=>t()<e}}var Ie=[{key:`manhattan`,name:`Manhattan`,towers:[`#EDE3C8`,`#D9B98A`,`#B5562F`,`#A8C8E8`,`#2E3F5C`],ground:`#7CC455`,street:`#9AA0A6`,sidewalk:`#C8CCD0`,park:`#5DB347`,water:`#29A8D8`,shopfronts:[`#C04A3A`,`#3A7AC0`,`#C09A2A`],glass:`#7FA8CC`,winColors:[`#ffd27a`,`#9ad6ff`],hMax:4.6,sigma:.36,roofRate:.35,pSplit:.6,nightLit:.55,roofTint:null,coast:{base:.55,out:1,in:.6,jag:1.05},landmarks:[`empireState`,`chrysler`,`liberty`]},{key:`paris`,name:`Paris`,towers:[`#E8DCC0`,`#F2EAD6`,`#E0D2B4`],ground:`#8CC46A`,street:`#A8A29A`,sidewalk:`#D4CEC2`,park:`#6DB35A`,water:`#3FA8C8`,shopfronts:[`#C04A3A`,`#3A6B5A`,`#7A5AC0`],glass:`#5A6B7A`,winColors:[`#ffdca0`,`#ffcaa0`],hMax:1.5,sigma:.9,roofRate:.15,pSplit:.75,nightLit:.45,roofTint:`#6A7886`,coast:{base:1.05,out:.55,in:.3,jag:.5},landmarks:[`eiffel`,`arcDeTriomphe`,`sacreCoeur`]},{key:`neoTokyo`,name:`Neo-Tokyo`,towers:[`#2A3038`,`#3A4250`,`#252B36`,`#4A4456`],ground:`#3A4A42`,street:`#5A6068`,sidewalk:`#7A8088`,park:`#2E5E46`,water:`#0E6878`,shopfronts:[`#E8483A`,`#5AE8E0`,`#E85AA0`],glass:`#5AE8E0`,winColors:[`#5AE8E0`,`#E85AA0`,`#E8E06A`],hMax:5.2,sigma:.42,roofRate:.6,pSplit:.6,nightLit:.7,roofTint:null,coast:{base:.7,out:1.05,in:.62,jag:1.7},landmarks:[`tokyoTower`,`pagoda`,`neonBillboard`]}],Le=Ie.map(e=>e.key),Re=.3,ze=1.9,Be=.55,Ve=2.45,He=.12,Ue=.6,We=6,Q={BASE:.7,OUT:.95,IN:.55,JAG:1,SAMPLES_PER_EDGE:28,HARBOR_DEPTH:.55,HARBOR_WIDTH:.26},Ge={PLINTH_TOP:Re,BLOCK:ze,STREET:Be,PITCH:Ve,SIDEWALK:He,SHORE:Ue,N:We,COAST:Q};function Ke(e,t,n){let r=n?.base??Q.BASE,i=n?.out??Q.OUT,a=n?.in??Q.IN,o=n?.jag??Q.JAG,s=t+r,c=Fe((e^789079)>>>0),l=[2,3,5,8,11,13].map(e=>({k:e,amp:1/e*o**((e-2)/6),phase:c.range(0,Math.PI*2)})),u=l.reduce((e,t)=>e+t.amp,0),d=e=>{let t=0;for(let n of l)t+=n.amp*Math.sin(n.k*e*Math.PI*2+n.phase);return Math.max(-1,Math.min(1,t/(u*.6)))},f=[{fix:+s,nx:1,nz:0,sign:1},{fix:+s,nx:0,nz:1,sign:-1},{fix:-s,nx:-1,nz:0,sign:-1},{fix:-s,nx:0,nz:-1,sign:1}],p=t+.22,m=Q.SAMPLES_PER_EDGE,h=4*m,g=[],_=0;for(let e=0;e<4;e++){let t=f[e];for(let n=0;n<m;n++,_++){let o=n/m,c=_/h,l=(-s+2*s*o)*t.sign,u=d(c),f=u>=0?u*i:u*a;if(e===0){let e=Math.abs(o-.5);if(e<Q.HARBOR_WIDTH){let t=.5+.5*Math.cos(e/Q.HARBOR_WIDTH*Math.PI);f-=(r+Q.HARBOR_DEPTH)*t}}let v,y;t.nx===0?(y=t.fix+t.nz*f,v=l,y=t.nz>0?Math.max(y,p):Math.min(y,-p)):(v=t.fix+t.nx*f,y=l,v=t.nx>0?Math.max(v,p):Math.min(v,-p)),g.push(new k(v,y))}}return{points:g,B:s,maxR:s+i,harborX:p}}function qe(e){(Array.isArray(e)?e:[e]).forEach(e=>e&&e.dispose&&e.dispose())}function Je({seed:e=1,profileIndex:n=0,landmarkFactory:r=null,windowGlow:a}){let o=new i,s=new i,c=new i;s.raycast=()=>{},c.raycast=()=>{},o.add(s,c);let l=new ae(16773594,3);l.position.set(.45,.6,-.65).multiplyScalar(10);let u=new f(7313331,2762272,1);o.add(l,u);let d=0,p=[],m={seed:e,profileIndex:n,profile:Ie[n],extent:0,meshCount:0};function _(e,n,r,i){let a=new h(new w(e,.04,n),X(new t({color:i,roughness:.95,flatShading:!0}),{color:i}));return a.position.y=r,a.userData.ground=!0,a}function v(e,n){for(let e of s.children)e.geometry&&e.geometry.dispose(),qe(e.material);s.clear();for(let e of c.children)e.traverse(e=>{e.isMesh&&qe(e.material)});c.clear(),p.length=0,d=0;let i=Fe(e),a=Ie[n],o=(We-1)/2*Ve,l=7.075;m={seed:e,profileIndex:n,profile:a,extent:l+(a.coast?.base??Q.BASE),meshCount:0};let u=Ke(e,l,a.coast);m.coast=u;let f=new N;u.points.forEach((e,t)=>t?f.lineTo(e.x,e.y):f.moveTo(e.x,e.y)),f.closePath();let v=new h(new g(f,{depth:2,bevelEnabled:!1,steps:1}),X(new t({color:a.ground,roughness:.9,flatShading:!0,side:2}),{color:a.ground}));v.rotation.x=-Math.PI/2,v.position.y=Re-2,v.userData.ground=!0,s.add(v);let w=2*7.195;s.add(_(w,w,.32,a.street)),S(u.harborX,a);let T=[];for(let e=0;e<We;e++)for(let t=0;t<We;t++)T.push([e,t]);let E=new Set,D=Math.max(1,Math.round(T.length*.08));for(;E.size<D;)E.add(i.int(0,T.length-1));let O=i.range(-2.45*.6,Ve*.6),k=i.range(-2.45*.6,Ve*.6),A=Math.hypot(o,o),j=[];if(T.forEach(([e,t],n)=>{let r=(e-(We-1)/2)*Ve,o=(t-(We-1)/2)*Ve;if(s.add(_(ze,ze,.32999999999999996,a.sidewalk).translateX(r).translateZ(o)),E.has(n)){s.add(_(ze-He*2,ze-He*2,.35,a.park).translateX(r).translateZ(o));let e=i.int(3,5);for(let t=0;t<e;t++)C(r+i.range(-.6,.6),o+i.range(-.6,.6),a,i);return}let c=ze-He*2,l=i.chance(a.pSplit)?2:1,u=i.chance(a.pSplit)?2:1,d=c/l,f=c/u;for(let e=0;e<l;e++)for(let t=0;t<u;t++){let n=r-c/2+d*(e+.5),s=o-c/2+f*(t+.5),l=Math.max(.6,d-.1),u=Math.max(.6,f-.1),p=Math.hypot(n-O,s-k)/A,m=Math.exp(-(p*p)/(2*a.sigma*a.sigma)),h=Math.max(.5,.5+(a.hMax-.5)*m*i.range(.75,1.25));h>a.hMax*.5&&Math.min(l,u)>=.7&&j.push({lx:n,lz:s,fw:l,fd:u,h,r:p}),y(n,s,l,u,h,a,i)}}),r&&r.ready){j.sort((e,t)=>e.r-t.r);let e=[],t=a.landmarks;for(let n=0;n<t.length&&j.length;n++){let i=null;for(let t of j)if(e.every(e=>Math.hypot(e.lx-t.lx,e.lz-t.lz)>Ve*.9)){i=t;break}i||=j[0],e.push(i),b(i.lx,i.lz);let o=a.hMax*r.heightFactor(t[n]),s=r.make(t[n],{x:i.lx,z:i.lz,w:i.fw,d:i.fd,h:o,plinthTop:Re});if(s){c.add(s);let e=new M().setFromObject(s);x(e.min.x-.15,e.max.x+.15,e.min.z-.15,e.max.z+.15)}}}s.traverse(e=>{e.isMesh&&(e.userData.ground?(e.castShadow=!1,e.receiveShadow=!0):e.material&&e.material.isMeshBasicMaterial?(e.castShadow=!1,e.receiveShadow=!1):(e.castShadow=!0,e.receiveShadow=!0))}),c.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),m.meshCount=s.children.length+c.children.length;let P=0;for(let e of s.children){let t=e.position;P=(Math.imul(P,16777619)^(Math.round(t.x*100)*2654435761^Math.round(t.y*100)*40503^Math.round(t.z*100)*2246822519))>>>0}for(let e of m.coast.points)P=(Math.imul(P,16777619)^(Math.round(e.x*100)*2654435761^Math.round(e.y*100)*40503))>>>0;m.sig=P,window.__city={seed:e,profile:a.key,meshes:m.meshCount,sig:P}}function y(e,n,r,i,o,c,l){let u=Y(new t({flatShading:!0,roughness:.7,metalness:.05}),{color:l.pick(c.towers),id:++d,windowGlow:a,winColors:c.winColors,litFrac:c.nightLit}),f=new h(new w(r,o,i),u);if(f.position.set(e,Re+o/2,n),f.userData.lot=[e,n],s.add(f),c.roofTint){let a=X(new t({color:c.roofTint,roughness:.85,flatShading:!0}),{color:c.roofTint}),l=new h(new w(r*1.02,.08,i*1.02),a);l.position.set(e,Re+o+.04,n),l.userData.lot=[e,n],s.add(l)}if(o<1.4){let a=l.pick(c.shopfronts),o=new h(new w(r*1.04,.18,i*1.04),X(new t({color:a,roughness:.8,flatShading:!0}),{color:a}));o.position.set(e,.39,n),o.userData.lot=[e,n],s.add(o)}let m=Re+o,g=r,_=i;if(o>c.hMax*.5&&l.chance(.55)){let u=r*l.range(.5,.72),f=i*l.range(.5,.72),p=o*l.range(.18,.4),v=new h(new w(u,p,f),Y(new t({flatShading:!0,roughness:.7,metalness:.05}),{color:l.pick(c.towers),id:++d,windowGlow:a,winColors:c.winColors,litFrac:c.nightLit}));v.position.set(e,Re+o+p/2,n),v.userData.lot=[e,n],s.add(v),m=Re+o+p,g=u,_=f}if(o>c.hMax*.45&&l.chance(c.roofRate)){let r=l.chance(.5)?new h(new w(g*.4,.18,_*.4),X(new t({color:`#9a9a9a`,flatShading:!0}),{color:`#9a9a9a`})):new h(new A(g*.18,g*.18,.22,10),X(new t({color:`#b9bec4`,flatShading:!0}),{color:`#b9bec4`}));if(r.position.set(e+l.range(-.1,.1),m+.11,n+l.range(-.1,.1)),r.userData.lot=[e,n],s.add(r),l.chance(.25)){let t=new h(new T(.05,6,5),new oe({color:`#ff3b30`,transparent:!0,opacity:1}));t.position.set(e,m+.15,n),t.userData.lot=[e,n],t.raycast=()=>{},s.add(t),p.push({mesh:t,phase:l.range(0,6.28)})}}if(o>c.hMax*.7&&l.chance(.35)){let r=o*l.range(.18,.34),i=new h(new A(.018,.05,r,6),X(new t({color:`#c8ccd2`,flatShading:!0}),{color:`#c8ccd2`}));i.position.set(e,m+r/2,n),i.userData.lot=[e,n],i.raycast=()=>{},s.add(i)}}function b(e,t){for(let n=s.children.length-1;n>=0;n--){let r=s.children[n];r.userData.lot&&Math.abs(r.userData.lot[0]-e)<1e-4&&Math.abs(r.userData.lot[1]-t)<1e-4&&(r.geometry&&r.geometry.dispose(),qe(r.material),s.remove(r))}for(let e=p.length-1;e>=0;e--)p[e].mesh.parent||p.splice(e,1)}function x(e,t,n,r){for(let i=s.children.length-1;i>=0;i--){let a=s.children[i];a.userData.lot&&a.position.x>=e&&a.position.x<=t&&a.position.z>=n&&a.position.z<=r&&(a.geometry&&a.geometry.dispose(),qe(a.material),s.remove(a))}}function S(e,n){let r=X(new t({color:`#7a5634`,roughness:.95,flatShading:!0}),{color:`#7a5634`}),i=(e,t,n,i)=>{let a=new h(new w(e,.06,t),r);a.position.set(n,Re-.16,i),s.add(a)};i(.24,2,e+.02,0),i(1.3,.22,e+.7,-.72),i(1.3,.22,e+.7,.72)}function C(e,n,r,i){let a=new I(r.park),o=(r,o)=>{let c=a.clone().offsetHSL(0,0,i.range(-.06,.06)).getStyle(),l=new h(new T(r,7,6),X(new t({color:c,flatShading:!0}),{color:c,season:!0}));l.scale.y=.7,l.position.set(e,Re+o,n),l.userData.lot=null,s.add(l)},c=new h(new w(.05,.18,.05),X(new t({color:`#6b4a2a`,flatShading:!0}),{color:`#6b4a2a`}));c.position.set(e,.39,n),s.add(c),o(.22,.28),o(.16,.46)}function E(e){for(let t of p)t.mesh.material.opacity=.35+.65*(.5+.5*Math.sin(e*3+t.phase))}return v(e,n),{group:o,key:l,fill:u,update:E,generate:v,get state(){return m},get extent(){return m.extent},get waterColor(){return m.profile.water},profiles:Ie}}var Ye=Math.PI*2,Xe=.7,Ze=90,Qe=[{name:`night`,sun:`#4a6f9e`,intensity:.35,hemiSky:`#26344f`,hemiGround:`#0c1018`,horizon:`#1e2942`,sky:`#36486e`,exposure:.95,outline:`#101a30`,window:1,toonGain:2.6},{name:`dawn`,sun:`#ff9e54`,intensity:2.4,hemiSky:`#8a7686`,hemiGround:`#2a1f1a`,horizon:`#b8512c`,sky:`#ffb070`,exposure:1.05,outline:`#241826`,window:.3,toonGain:2},{name:`noon`,sun:`#fff4e0`,intensity:4.6,hemiSky:`#9cb8cc`,hemiGround:`#33302a`,horizon:`#5e7689`,sky:`#aacadd`,exposure:1.18,outline:`#0b0a08`,window:0,toonGain:1.7},{name:`dusk`,sun:`#ff6b35`,intensity:2,hemiSky:`#7a566a`,hemiGround:`#281a18`,horizon:`#b0432a`,sky:`#ff8a5a`,exposure:1.05,outline:`#1f1420`,window:.4,toonGain:2}],$e=e=>e-Math.floor(e),et=(e,t,n)=>e+(t-e)*n,tt=(e,t,n)=>e+(t-e)*(1-Math.exp(-6*n));function nt({t:e=.5}={}){let t=e,n=e,r=!1,i=!1,a=Qe.map(e=>({name:e.name,sun:new I(e.sun),hemiSky:new I(e.hemiSky),hemiGround:new I(e.hemiGround),horizon:new I(e.horizon),sky:new I(e.sky),outline:new I(e.outline),intensity:e.intensity,exposure:e.exposure,window:e.window,toonGain:e.toonGain})),o=new z(0,1,0),s=new I(`#fff4e0`),c=new I(`#6f97b3`),l=new I(`#2a2620`),u=new I(`#3a4a57`),d=new I(`#7da3bd`),f=new I(`#0b0a08`),p=new I(`#000000`),m=3,h=1,g=0,_=1.7,v=new z;function y(e){let t=$e(e)*4,n=Math.floor(t)%4,r=(n+1)%4,i=t-Math.floor(t),y=a[n],b=a[r];s.lerpColors(y.sun,b.sun,i),c.lerpColors(y.hemiSky,b.hemiSky,i),l.lerpColors(y.hemiGround,b.hemiGround,i),u.lerpColors(y.horizon,b.horizon,i),d.lerpColors(y.sky,b.sky,i),f.lerpColors(y.outline,b.outline,i),m=et(y.intensity,b.intensity,i),h=et(y.exposure,b.exposure,i),g=et(y.window,b.window,i),_=et(y.toonGain,b.toonGain,i),p.setRGB(.045*g,.075*g,.14*g);let x=$e(e)*Ye-Math.PI/2,S=Math.cos(x),C=Math.sin(x);v.set(S,C*Math.cos(Xe),C*Math.sin(Xe)),v.y>=0?o.copy(v):o.copy(v).negate()}return y(t),{sunDir:o,sunColor:s,hemiSky:c,hemiGround:l,horizon:u,sky:d,outline:f,toonFloor:p,sunArc:v,get sunIntensity(){return m},get exposure(){return h},get windowGlow(){return g},get toonGain(){return _},get t(){return $e(t)},get auto(){return r},get clock(){let e=Math.round($e(t)*24*60)%1440;return`${String(Math.floor(e/60)).padStart(2,`0`)}:${String(e%60).padStart(2,`0`)}`},cyclePreset(){n=(Math.floor(t*4+1e-4)+1)/4},nudge(e){n+=e/24},goTo(e){n=e},toggleAuto(){r=!r},setReducedMotion(e){i=e},update(e){r&&!i&&(n+=e/Ze),t=tt(t,n,e),y(t)}}}function rt(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.35,`rgba(255,255,255,0.55)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new E(e);return r.colorSpace=U,r}function it(e,t){let n=[];for(let r=0;r<16;r++){let i=r/16*Math.PI*2;n.push(new z(Math.cos(i)*e,t,Math.sin(i)*e))}return new W(n,!0,`catmullrom`,.5)}function at(e){let t=(t,n)=>Math.exp(-((e-t)*(e-t))/(2*n*n)),n=Math.max(t(.33,.05),t(.75,.06)),r=c.smoothstep(e,.24,.3)*(1-c.smoothstep(e,.8,.88));return c.clamp(.15+.55*r+.45*n,.12,1)}function ot(){let{PITCH:e,N:t,PLINTH_TOP:n}=Ge,r=t+1,i=n+.04,a=n=>(n-t/2)*e,o=t/2,s=[],c=(e,t)=>t*r+e;for(let e=0;e<r;e++)for(let t=0;t<r;t++)s.push({x:a(t),z:a(e),i:t,j:e,edges:[]});let l=[],u=(t,n)=>{let r=(s[t].i===o||s[t].j===o)&&(s[n].i===o||s[n].j===o),i=l.length;l.push({a:t,b:n,len:e,main:r}),s[t].edges.push(i),s[n].edges.push(i)};for(let e=0;e<r;e++)for(let t=0;t<r;t++)t<r-1&&u(c(t,e),c(t+1,e)),e<r-1&&u(c(t,e),c(t,e+1));return{nodes:s,edges:l,y:i,mid:o}}function st({plinthTop:e=.3,extent:n=4,profile:r=null}={}){let a=new i,o=ot(),{nodes:l,edges:u}=o,d=o.y,f=.34,p=0;{let e=Ge.PITCH-f*2;p=Math.max(1,Math.floor((e+.26)/.56))}let m=new oe({color:`#e8c84a`,fog:!0}),h=new P(new w(.05,.012,.3),m,u.length*p);h.frustumCulled=!1,h.raycast=()=>{},h.receiveShadow=!1,h.castShadow=!1,a.add(h);{let e=new s,t=0;for(let n of u){let r=l[n.a],i=l[n.b],a=i.x-r.x,o=i.z-r.z,s=Math.hypot(a,o),c=a/s,u=o/s,m=Math.atan2(c,u),g=s-f*2;for(let n=0;n<p;n++){let i=f+(p===1?g/2:g*n/(p-1));e.position.set(r.x+c*i,d,r.z+u*i),e.rotation.set(0,m,0),e.updateMatrix(),h.setMatrixAt(t++,e.matrix)}}h.instanceMatrix.needsUpdate=!0}let g=new P(new w(.34,.26,.74),X(new t({flatShading:!0,roughness:.5,metalness:.3})),12);g.castShadow=!0,g.receiveShadow=!1,g.frustumCulled=!1,g.raycast=()=>{};let _=new ne,v=new Float32Array(72),y=new Float32Array(72),b=new I(`#fff0c0`),C=new I(`#ff3528`);for(let e=0;e<12;e++)b.toArray(y,e*3),C.toArray(y,(12+e)*3),v[e*3+1]=-50,v[(12+e)*3+1]=-50;_.setAttribute(`position`,new R(v,3)),_.setAttribute(`color`,new R(y,3));let T=new x({size:.72,sizeAttenuation:!0,map:rt(),vertexColors:!0,transparent:!0,opacity:0,blending:2,depthWrite:!1}),E=new S(_,T);E.frustumCulled=!1,E.raycast=()=>{},a.add(g,E);let D=[`#f4c430`,`#c0392b`,`#d8dde2`,`#9aa7b4`,`#6b7785`,`#5a7d9a`],O=Z(2403557),k=u.map((e,t)=>t).filter(e=>u[e].main),A=[];for(let e=0;e<12;e++){let t=e<4&&k.length?k[O()*k.length|0]:O()*u.length|0,n=e===1;A.push({edge:t,fwd:O()<.5,s:O()*u[t].len,speed:n?.5:.78+e%3*.1,lenZ:n?1.45:1,color:D[n?1:e===0?0:2+e%4],rng:Z(12648430+e*2654435761)})}let j=new I;A.forEach((e,t)=>g.setColorAt(t,j.set(e.color)));function M(e,t,n){let r=l[e],i=r.edges.filter(e=>e!==t);if(i.length===0)return t;let a=u[t],o=a.a===e?a.b:a.a,s=r.x-l[o].x,c=r.z-l[o].z,d=Math.hypot(s,c)||1,f=i[0],p=-2;for(let t of i){let n=u[t],i=n.a===e?n.b:n.a,a=l[i].x-r.x,o=l[i].z-r.z,m=Math.hypot(a,o)||1,h=s/d*(a/m)+c/d*(o/m);h>p&&(p=h,f=t)}return n()<.65?f:i[n()*i.length|0]}let N=M,L=new s,ee=(e,t)=>{L.position.set(0,-50,0),L.scale.setScalar(0),L.updateMatrix(),e.setMatrixAt(t,L.matrix)},te=.085,B=Ge.PLINTH_TOP+.02+.13,V=new P(new F(.04,.1,3,6),X(new t({flatShading:!0,roughness:.8})),14);V.castShadow=!0,V.receiveShadow=!1,V.frustumCulled=!1,V.raycast=()=>{};let H=it(n-.72,e),re=[];for(let e=0;e<14;e++)re.push({phase:e/14,speed:.12+e%4*.02,dir:e%2?1:-1});let U=new z,W=new z,ie=new I;re.forEach((e,t)=>V.setColorAt(t,ie.set([`#caa`,`#9ab`,`#bba`,`#ab9`][t%4]))),a.add(V);let G={manhattan:`#e8c84a`,paris:`#dcd2bc`,neoTokyo:`#5ae8e0`};function ae(e){e&&m.color.set(G[e.key]||`#e8c84a`)}ae(r);function se(t,n,r){let i=r?r.t:.5,a=r?r.windowGlow:0,o=Math.max(2,Math.round(at(i)*12)),s=a>.05;for(let e=0;e<12;e++){if(e>=o){ee(g,e),v[e*3+1]=-50,v[(12+e)*3+1]=-50;continue}let n=A[e];n.s+=t*n.speed;let r=0;for(;n.s>=u[n.edge].len&&r++<4;){n.s-=u[n.edge].len;let e=n.fwd?u[n.edge].b:u[n.edge].a,t=N(e,n.edge,n.rng);n.edge=t,n.fwd=u[t].a===e}let i=u[n.edge],a=n.fwd?l[i.a]:l[i.b],c=n.fwd?l[i.b]:l[i.a],d=c.x-a.x,f=c.z-a.z,p=Math.hypot(d,f)||1,m=d/p,h=f/p,_=-h,y=m,b=a.x+m*n.s+_*te,x=a.z+h*n.s+y*te,S=Math.atan2(m,h);L.position.set(b,B,x),L.rotation.set(0,S,0),L.scale.set(1,1,n.lenZ),L.updateMatrix(),g.setMatrixAt(e,L.matrix);let C=.74*n.lenZ*.5,w=B+.06,T=e*3,E=(12+e)*3;s?(v[T]=b+m*(C+.04),v[T+1]=w,v[T+2]=x+h*(C+.04),v[E]=b-m*(C+.02),v[E+1]=w,v[E+2]=x-h*(C+.02)):(v[T+1]=-50,v[E+1]=-50)}g.instanceMatrix.needsUpdate=!0,_.attributes.position.needsUpdate=!0,T.opacity=c.clamp(a*1.8,0,1);let d=Math.max(2,Math.round(at(i)*14));for(let t=0;t<14;t++){if(t>=d){ee(V,t);continue}let r=re[t],i=(r.phase+r.dir*r.speed*n*.02+1e3)%1;H.getPointAt(i,U),H.getTangentAt(i,W);let a=Math.sin(n*6+r.phase*30)*.015;L.position.set(U.x,e+.09+a,U.z),L.rotation.set(0,Math.atan2(W.x*r.dir,W.z*r.dir),Math.sin(n*6+r.phase*30)*.06),L.scale.setScalar(1),L.updateMatrix(),V.setMatrixAt(t,L.matrix)}V.instanceMatrix.needsUpdate=!0}return{group:a,update:se,setProfile:ae,graph:o,setRouter(e){N=e||M}}}function ct({frames:e,fps:t=8,cols:n,rows:r=1}={}){let i=n||e||4,a=r||1,o=e||i*a,s=typeof window<`u`&&window.matchMedia?window.matchMedia(`(prefers-reduced-motion: reduce)`):null;function c(e,t){let n=t%i,r=Math.floor(t/i);e.offset.x=n/i,e.offset.y=1-(r+1)/a}function l(e){let t=e.clone();return t.needsUpdate=!0,t.repeat.set(1/i,1/a),c(t,0),t}function u(e,n,r=0){if(s&&s.matches)return c(e,0),0;let i=(Math.floor(n*t+r)%o+o)%o;return c(e,i),i}function d(e,t){let n=(Math.round(t)%o+o)%o;return c(e,n),n}return{frames:o,fps:t,cols:i,rows:a,makeInstanceTexture:l,step:u,setFrame:d}}function lt(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.4,`rgba(255,255,255,0.5)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new E(e);return r.colorSpace=U,r}function ut(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64*.62,0,64/2,64*.62,64*.5);n.addColorStop(0,`rgba(240,250,255,0.95)`),n.addColorStop(1,`rgba(240,250,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new E(e);return r.colorSpace=U,r}function dt(){let e=document.createElement(`canvas`);e.width=256,e.height=64;let t=e.getContext(`2d`);t.strokeStyle=`#ffffff`,t.lineWidth=6,t.lineCap=`round`,t.lineJoin=`round`;let n=[14,24,36,24];for(let e=0;e<4;e++){let r=e*64,i=n[e];t.beginPath(),t.moveTo(r+8,40),t.quadraticCurveTo(r+24,i,r+32,36),t.quadraticCurveTo(r+40,i,r+56,40),t.stroke()}let r=new E(e);return r.colorSpace=U,r}function ft(e,t,n=18){let r=[];for(let i=0;i<n;i++){let a=i/n*Math.PI*2;r.push(new z(Math.cos(a)*e,t,Math.sin(a)*e))}return new W(r,!0,`catmullrom`,.5)}function pt(e,t,n){let r=e-t,i=[],a=(e,t)=>i.push(new z(e,n,t)),o=(e,n,r,i,o=4)=>{for(let s=1;s<=o;s++){let c=r+(i-r)*(s/o);a(e+Math.cos(c)*t,n+Math.sin(c)*t)}};for(let t=0;t<4;t++)a(e,-r+2*r*t/4);o(r,r,0,Math.PI/2);for(let t=0;t<4;t++)a(r-2*r*t/4,e);o(-r,r,Math.PI/2,Math.PI);for(let t=0;t<4;t++)a(-e,r-2*r*t/4);o(-r,-r,Math.PI,1.5*Math.PI);for(let t=0;t<4;t++)a(-r+2*r*t/4,-e);return o(r,-r,1.5*Math.PI,2*Math.PI),new W(i,!0,`catmullrom`,.5)}function mt({extent:e=8,waterSize:n=28,plinthTop:r=.3}={}){let a=new i;a.raycast=()=>{};let o=.06,s=(e,t,r)=>r.set(e/n+.5,-t/n+.5,0),l=[pt(9.5,3,o),ft(12.7,o),new W([new z(8.4,o,0),new z(11,o,-3.6),new z(13,o,0),new z(11,o,3.6)],!0,`catmullrom`,.5)],u=l.map(e=>e.getLength());function d({scale:e=1,hull:n=`#6b7785`,cabin:r=`#e7ecf2`}){let a=new i,o=new h(new w(.46*e,.2*e,1.1*e),X(new t({color:n,roughness:.6,metalness:.2,flatShading:!0}),{color:n}));o.position.y=.02;let s=new h(new w(.3*e,.22*e,.42*e),X(new t({color:r,roughness:.7,flatShading:!0}),{color:r}));return s.position.set(0,.18*e,.08*e),a.add(o,s),a.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!1),e.raycast=()=>{}}),a.userData.halfLen=.55*e,a}let f=[{laneIndex:0,dir:1,speed:.5,wake:.024,scale:1,hull:`#5a6675`,cabin:`#e7ecf2`},{laneIndex:1,dir:-1,speed:.42,wake:.022,scale:1,hull:`#7a5b46`,cabin:`#d9c3a6`},{laneIndex:0,dir:1,speed:.56,wake:.024,scale:.9,hull:`#456079`,cabin:`#cfe0ee`},{laneIndex:2,dir:1,speed:.34,wake:.03,scale:1.35,hull:`#39505f`,cabin:`#e2b85a`}];f.forEach((e,t)=>{e.mesh=d(e),e.u=t*.27%1,e.phase=t*1.7,e.isFerry=e.laneIndex===2,a.add(e.mesh)});let p=f.length,m=p*2,g=new ne,_=new Float32Array(m*3).fill(-50),v=new Float32Array(m*3),y=new I(`#fff0c0`),b=new I(`#ff3528`);for(let e=0;e<p;e++)y.toArray(v,e*3),b.toArray(v,(p+e)*3);g.setAttribute(`position`,new R(_,3)),g.setAttribute(`color`,new R(v,3));let C=new S(g,new x({size:.6,sizeAttenuation:!0,map:lt(),vertexColors:!0,transparent:!0,opacity:0,blending:2,depthWrite:!1}));C.frustumCulled=!1,C.raycast=()=>{},a.add(C);function E(e,n){let r=new h(new T(e,9,7),X(new t({color:n,roughness:.5,flatShading:!0}),{color:n}));return r.scale.set(.55,.5,1),r.castShadow=!1,r.receiveShadow=!1,r.raycast=()=>{},r.position.y=-5,r}let O=[{x:-9.5,z:6,size:.18,color:`#5b6f86`,period:11,arcH:.55,span:1.1,whale:!1},{x:7.5,z:-9.5,size:.16,color:`#4a6076`,period:14,arcH:.5,span:1,whale:!1},{x:-7,z:-8.5,size:.2,color:`#607089`,period:9,arcH:.6,span:1.2,whale:!1},{x:10.5,z:7,size:.62,color:`#3a4350`,period:38,arcH:.9,span:2.6,whale:!0}];O.forEach((e,t)=>{e.mesh=E(e.size,e.color),e.heading=Math.atan2(-e.x,-e.z),e.t=t/O.length*e.period,e.splashed=!1,a.add(e.mesh),e.whale&&(e.spout=new H(new D({map:ut(),transparent:!0,opacity:0,depthWrite:!1,fog:!0})),e.spout.scale.set(.6,1.1,1),e.spout.position.set(e.x,-5,e.z),a.add(e.spout))});let k=dt(),A=ct({frames:4,fps:7}),j=[`#ffffff`,`#cfd4da`,`#c8a06a`],M=[];for(let e=0;e<4;e++){let t=new H(new D({map:A.makeInstanceTexture(k),color:new I(j[e%j.length]),transparent:!0,opacity:0,depthWrite:!1,fog:!0}));t.scale.setScalar(.5),M.push({sp:t,r:8.6+e*.5,y:1.1+e%2*.5,speed:(.18+e*.03)*(e%2?-1:1),phase:e*1.9}),a.add(t)}typeof window<`u`&&(window.__gullAnim={frames:A.frames,variants:j.length,fps:A.fps});let N=O.length,P=Array.from({length:p+N},()=>new z),F=e=>e.laneIndex,L=new z,ee=new z,te=new z;function B(e,t,n){let r=n?n.windowGlow:0,i=1-r;for(let n=0;n<p;n++){let i=f[n],a=l[i.laneIndex],c=u[i.laneIndex],d=i.isFerry?.45+.55*Math.min(1,Math.abs((i.u+.5)%1-.5)*3):1,m=i.u;i.u=(i.u+i.dir*e*i.speed*d/c+1)%1,(i.dir>0?i.u<m:i.u>m)&&(i.laneIndex=F(i)),a.getPointAt(i.u,L),a.getTangentAt(i.u,ee);let h=ee.x*i.dir,g=ee.z*i.dir,v=Math.atan2(h,g),y=Math.sin(t*1.1+i.phase)*.025;i.mesh.position.set(L.x,o+y,L.z),i.mesh.rotation.set(Math.sin(t*.9+i.phase)*.04,v,0);let b=i.mesh.userData.halfLen;s(L.x-h*b,L.z-g*b,te),P[n].set(te.x,te.y,i.wake);let x=n*3,S=(p+n)*3;if(r>.05){let e=.18;_[x]=L.x+h*(b+.05),_[x+1]=e,_[x+2]=L.z+g*(b+.05),_[S]=L.x-h*(b+.02),_[S+1]=e,_[S+2]=L.z-g*(b+.02)}else _[x+1]=-50,_[S+1]=-50}V(),C.material.opacity=c.clamp(r*1.8,0,1);for(let t=0;t<N;t++){let n=O[t];n.t+=e;let r=p+t,i=n.whale?3.2:1.3;if(n.t>=n.period){let e=(n.t-n.period)/i;if(e>=1){n.t=0,n.splashed=!1,n.mesh.position.y=-5,n.spout&&(n.spout.material.opacity=0),P[r].set(0,0,0);continue}let t=Math.sin(Math.PI*e),a=(e-.5)*n.span,l=n.x+Math.sin(n.heading)*a,u=n.z+Math.cos(n.heading)*a;n.mesh.position.set(l,o-.1+t*n.arcH,u),n.mesh.rotation.set(Math.cos(Math.PI*e)*.9,n.heading,0);let d=e<.16||e>.84;if(s(l,u,te),P[r].set(te.x,te.y,d?n.whale?.07:.05:0),n.spout){let t=c.clamp((e-.15)*3,0,1)*(1-e);n.spout.position.set(l,.56+t*.6,u),n.spout.material.opacity=t*.9}}else n.mesh.position.y=-5,P[r].set(0,0,0),n.spout&&(n.spout.material.opacity=0)}for(let e=0;e<4;e++){let n=M[e],r=n.phase+t*n.speed*.25;n.sp.position.set(Math.cos(r)*n.r,n.y+Math.sin(t*1.4+n.phase)*.12,Math.sin(r)*n.r),n.sp.material.opacity=c.clamp(i*.9-.05,0,.85);let a=A.step(n.sp.material.map,t,n.phase);e===0&&typeof window<`u`&&(window.__gullFrame=a)}if(typeof window<`u`){let e=0;for(let t of O)t.mesh.position.y>o&&e++;window.__waterLife={boats:p,breaching:e,gulls:+M[0].sp.material.opacity.toFixed(2),lights:+C.material.opacity.toFixed(2)}}}function V(){g.attributes.position.needsUpdate=!0}function re(){return P.length}return{group:a,update:B,wakeDrops:P,get wakeCount(){return re()},lanes:l,setRouter(e){F=e||(e=>e.laneIndex)}}}var ht=[`empireState`,`chrysler`,`liberty`,`eiffel`,`arcDeTriomphe`,`sacreCoeur`,`tokyoTower`,`pagoda`,`neonBillboard`],gt={empireState:1.25,chrysler:1.1,liberty:.55,eiffel:3.2,arcDeTriomphe:1.5,sacreCoeur:1.75,tokyoTower:1.35,pagoda:.5,neonBillboard:.9};function _t(n){let r=()=>new t({flatShading:!0,roughness:.7,metalness:.1}),i=(e,t={})=>t.windows?Y(r(),{color:e,id:n.id(),windowGlow:n.windowGlow,winColors:n.winColors,litFrac:n.litFrac}):X(r(),{color:e,glow:t.glow??null,glowDay:t.glowDay??0,glowNight:t.glowNight??1,windowGlow:t.glow?n.windowGlow:null});return{box:(e,t,n,r,a={})=>new h(new w(e,t,n),i(r,a)),cyl:(e,t,n,r,a={})=>new h(new A(e,t,n,a.seg||12),i(r,a)),cone:(e,t,n,r={})=>new h(new j(e,t,r.seg||8),i(n,r)),sphere:(e,t,n={})=>new h(new T(e,n.seg||12,n.seg2||8),i(t,n)),lathe:(t,n,r={})=>new h(new e(t.map(e=>new k(e[0],e[1])),r.seg||4),i(n,r))}}var $=(e,t,n,r)=>(e.position.set(t,n,r),e),vt=[`#7FB0E0`,`#E07FB0`,`#7FE0A0`,`#E0C97F`,`#9FE07F`,`#7FE0E0`,`#FF8C42`,`#E0E07F`,`#C97FE0`,`#E07F7F`,`#7F9FE0`,`#E0483A`],yt={empireState(e,t){let n=`#E8E0CF`;e.add($(t.box(.42,.18,.42,n,{windows:!0}),0,.09,0)),e.add($(t.box(.34,.16,.34,n,{windows:!0}),0,.26,0)),e.add($(t.box(.26,.14,.26,n,{windows:!0}),0,.41,0)),e.add($(t.box(.19,.34,.19,n,{windows:!0}),0,.65,0)),e.add($(t.box(.13,.06,.13,n,{windows:!0}),0,.85,0));let r=vt[new Date().getMonth()];e.add($(t.cyl(.03,.045,.12,n,{seg:10,glow:r,glowNight:1.85}),0,.94,0)),e.add($(t.cone(.012,.07,n,{seg:8}),0,1.04,0))},chrysler(e,t){let n=`#C9CED4`;e.add($(t.box(.22,.55,.22,`#9AA7B4`,{windows:!0}),0,.275,0));let r=.55;for(let i=0;i<5;i++){let a=.14-i*.024,o=.07;e.add($(t.cyl(a*.7,a,o,n,{seg:8,glow:`#dfeaff`,glowNight:.5}),0,r+o/2,0)),r+=o}e.add($(t.cone(.018,.16,n,{seg:8}),0,r+.08,0))},liberty(e,t){let n=`#B9B4A6`,r=`#4FA890`;e.add($(t.box(.42,.16,.42,n),0,.08,0)),e.add($(t.box(.3,.2,.3,n),0,.26,0)),e.add($(t.cyl(.1,.15,.42,r,{seg:10}),0,.57,0)),e.add($(t.box(.11,.1,.11,r),0,.83,0));for(let n=0;n<7;n++){let i=(n/6-.5)*Math.PI*1.1;e.add($(t.cone(.012,.1,r,{seg:5}),Math.sin(i)*.1,.92,Math.cos(i)*.06-.02))}let i=$(t.cyl(.025,.03,.34,r,{seg:8}),.14,.98,0);i.rotation.z=.35,e.add(i),e.add($(t.box(.06,.06,.06,r,{glow:`#ffd060`,glowDay:.6,glowNight:1.2}),.2,1.16,0)),e.add($(t.cone(.04,.09,`#ffcf66`,{seg:6,glow:`#ffd060`,glowDay:.7,glowNight:1.3}),.2,1.24,0))},eiffel(e,t){let n=`#6E5C4C`,r=[[.2,0],[.13,.16],[.085,.33],[.055,.5],[.035,.66],[.02,.85],[0,.92]];e.add(t.lathe(r,n,{seg:4}));let i=t.lathe(r,n,{seg:4});i.rotation.y=Math.PI/4,e.add(i),e.add($(t.box(.26,.025,.26,n),0,.33,0)),e.add($(t.box(.14,.02,.14,n),0,.66,0)),e.add($(t.cone(.01,.1,n,{seg:6}),0,.97,0))},arcDeTriomphe(e,n){let r=`#D9D0C1`,i=.58,a=.5,o=.34,s=new N;s.moveTo(-.58/2,0),s.lineTo(i/2,0),s.lineTo(i/2,a),s.lineTo(-.58/2,a),s.lineTo(-.58/2,0);let c=new b,l=.15,u=.22;c.moveTo(-.15,0),c.lineTo(-.15,u),c.absarc(0,u,l,Math.PI,0,!0),c.lineTo(l,0),c.lineTo(-.15,0),s.holes.push(c);let d=new g(s,{depth:o,bevelEnabled:!1});d.translate(0,0,-.34/2),d.computeVertexNormals(),e.add(new h(d,X(new t({color:r,flatShading:!0}),{color:r}))),e.add($(n.box(i*1.06,.08,o*1.06,r),0,.54,0))},sacreCoeur(e,t){let n=`#F1EEE6`;e.add($(t.box(.5,.26,.4,n),0,.13,0));let r=(r,i,a,o)=>{e.add($(t.cyl(a*.9,a,i,n,{seg:12}),r,o,0));let s=$(t.sphere(a,n,{seg:12}),r,o+i/2,0);s.scale.y=1.5,e.add(s)};r(0,.22,.15,.4),r(-.2,.1,.07,.33),r(.2,.1,.07,.33)},tokyoTower(e,t){let n=`#F25822`,r=`#EDEDED`,i=0;for(let a=0;a<9;a++){let o=a/9,s=(a+1)/9,c=.19*(1-o)+.03*o,l=.19*(1-s)+.03*s,u=.085,d=a%2?r:n;e.add($(t.cyl(l,c,u,d,{seg:4,glow:n,glowDay:0,glowNight:.7}),0,i+u/2,0)),i+=u}e.add($(t.box(.22,.02,.22,n,{glow:n,glowNight:.7}),0,.28,0)),e.add($(t.box(.12,.02,.12,r),0,.5,0)),e.add($(t.cone(.012,.16,r,{seg:6,glow:`#ff6a2a`,glowNight:.9}),0,i+.08,0))},pagoda(e,t){let n=0;for(let r=0;r<5;r++){let i=.42-r*.06,a=.11;e.add($(t.box(i,a,i,`#B23A2C`,{windows:r<4}),0,n+a/2,0)),e.add($(t.box(i*1.34,.03,i*1.34,`#7A3B2A`),0,n+a+.015,0)),n+=.16999999999999998}e.add($(t.cyl(.012,.012,.1,`#E0C040`,{seg:6}),0,n+.05,0)),e.add($(t.sphere(.03,`#E0C040`,{seg:8,glow:`#ffe680`,glowNight:.8}),0,n+.12,0))},neonBillboard(e,t){let n=`#20242C`;e.add($(t.box(.3,1,.3,n,{windows:!0}),0,.5,0));let r=[`#5AE8E0`,`#E85AA0`,`#E8E06A`],i=(n,r,i,a,o,s,c)=>{let l=$(t.box(n,r,.02,i,{glow:i,glowDay:.6,glowNight:1.1}),a,o,s);l.rotation.y=c,e.add(l)};i(.22,.34,r[0],0,.75,.16,0),i(.16,.5,r[1],.16,.5,0,Math.PI/2),i(.2,.22,r[2],0,.34,-.16,0),e.add($(t.cone(.01,.14,n,{seg:6,glow:`#E85AA0`,glowDay:.4,glowNight:1}),0,1.08,0))}};function bt(e,t){let n=new i;return yt[e](n,_t(t)),n}var xt=``+new URL(`building-skyscraper-d-CapD2Zqe.glb`,import.meta.url).href,St=``+new URL(`building-n-hdv8kKtN.glb`,import.meta.url).href,Ct=``+new URL(`building-g-CsTB1qH9.glb`,import.meta.url).href,wt=``+new URL(`colormap-CK8fW2HB.png`,import.meta.url).href,Tt={skyscraper:{url:xt,color:`#9cc1dd`,fill:.92},midrise:{url:St,color:`#c9a07a`,fill:.96},setback:{url:Ct,color:`#d9c7a0`,fill:.9}};function Et({windowGlow:e}){let t=new a;t.setURLModifier(e=>e.includes(`colormap.png`)?wt:e);let n=new re(t),r={},i=!1,o=Promise.all(Object.entries(Tt).map(async([e,t])=>{r[e]=(await n.loadAsync(t.url)).scene})).then(()=>{i=!0,window.__landmarksReady=!0}).catch(e=>console.error(`landmark models failed:`,e)),s=9e3;function c(t,n,i={}){let a,o;if(ht.includes(t))a=bt(t,{windowGlow:e,winColors:i.winColors,litFrac:i.litFrac,id:()=>++s}),o=1;else{let e=r[t],n=Tt[t];if(!e||!n)return null;a=e.clone(!0),o=n.fill}a.updateMatrixWorld(!0);let c=new M().setFromObject(a).getSize(new z);a.scale.setScalar(n.h*o/c.y),a.updateMatrixWorld(!0);let l=new M().setFromObject(a),u=l.getCenter(new z);return a.position.x+=n.x-u.x,a.position.z+=n.z-u.z,a.position.y+=n.plinthTop-l.min.y,ht.includes(t)?a.traverse(e=>{e.isMesh&&(e.castShadow=!1,e.raycast=()=>{})}):a.traverse(n=>{if(!n.isMesh)return;n.castShadow=!1,n.raycast=()=>{};let r=n=>Y(n.clone(),{color:Tt[t].color,id:++s,windowGlow:e,winColors:i.winColors,litFrac:i.litFrac});n.material=Array.isArray(n.material)?n.material.map(r):r(n.material)}),a}return{make:c,whenReady:o,heightFactor:e=>gt[e]??1,get ready(){return i}}}var Dt=[`clear`,`rain`,`snow`,`fog`];function Ot({extent:e=7}={}){let t=new i;t.raycast=()=>{};let n=e+2,r=.25,a=(e,t)=>e+Math.random()*(t-e),o=new P(new B(.015,.5),new oe({color:`#a9bdd6`,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),600);o.frustumCulled=!1,o.raycast=()=>{};let c=new Float32Array(600*3),l=new Float32Array(600);for(let e=0;e<600;e++)c[e*3]=a(-n,n),c[e*3+1]=a(r,11),c[e*3+2]=a(-n,n),l[e]=a(9,14);let u=new P(new B(.07,.07),new oe({color:`#f3f7ff`,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),700);u.frustumCulled=!1,u.raycast=()=>{};let d=new Float32Array(700*3),f=new Float32Array(700),p=new Float32Array(700);for(let e=0;e<700;e++)d[e*3]=a(-n,n),d[e*3+1]=a(r,11),d[e*3+2]=a(-n,n),f[e]=a(0,6.28),p[e]=a(.6,1.2);t.add(o,u);let m=Array.from({length:8},()=>new z),h=0,g=`clear`,_=0,v=0,y=0,b=0,x=0,S=new s,C=(e,t,n,r)=>e+(t-e)*Math.min(1,n*r);function w(e){Dt.includes(e)&&(g=e)}function T(){g=Dt[(Dt.indexOf(g)+1)%Dt.length]}function E(e,t){let i=g===`rain`,s=g===`snow`,w=g===`fog`,T=g!==`clear`;_=C(_,+!!T,e,1.4),v=C(v,+!!T,e,1.2),y=C(y,+!!w,e,.9),x=C(x,T&&!w?1:0,e,1),b=C(b,+!!s,e,s?.22:.5);let E=i?_:0,D=Math.round(600*E);for(let t=0;t<600;t++){if(t>=D){S.position.set(0,-50,0),S.scale.setScalar(0),S.updateMatrix(),o.setMatrixAt(t,S.matrix);continue}c[t*3+1]-=l[t]*e,c[t*3]+=e*1.1,c[t*3+1]<r&&(c[t*3]=a(-n,n),c[t*3+1]=11,c[t*3+2]=a(-n,n)),S.position.set(c[t*3],c[t*3+1],c[t*3+2]),S.rotation.set(0,0,0),S.scale.set(1,1,1),S.updateMatrix(),o.setMatrixAt(t,S.matrix)}o.instanceMatrix.needsUpdate=!0,o.material.opacity=.55*E,h=i?Math.round(8*_):0;for(let e=0;e<h;e++)m[e].set(Math.random(),Math.random(),.05*_);let O=Math.round(700*(s?_:0));for(let i=0;i<700;i++){if(i>=O){S.position.set(0,-50,0),S.scale.setScalar(0),S.updateMatrix(),u.setMatrixAt(i,S.matrix);continue}d[i*3+1]-=p[i]*e;let o=Math.sin(t*1.5+f[i])*.5;d[i*3+1]<r&&(d[i*3]=a(-n,n),d[i*3+1]=11,d[i*3+2]=a(-n,n)),S.position.set(d[i*3]+o,d[i*3+1],d[i*3+2]),S.rotation.set(0,0,0),S.scale.setScalar(1),S.updateMatrix(),u.setMatrixAt(i,S.matrix)}u.instanceMatrix.needsUpdate=!0,u.material.opacity=.9*(s?_:0)}return{group:t,update:E,cycle:T,setKind:w,rainDrops:m,get kind(){return g},get intensity(){return _},get overcast(){return v},get fog(){return y},get snow(){return b},get cloud(){return x},get rainDropCount(){return h},poolCounts:{rain:600,snow:700}}}function kt(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=(e,n,r)=>{let i=t.createRadialGradient(e,n,0,e,n,r);i.addColorStop(0,`rgba(255,255,255,0.95)`),i.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=i,t.beginPath(),t.arc(e,n,r,0,7),t.fill()};n(128*.42,128*.56,128*.26),n(128*.6,128*.5,128*.3),n(128*.5,128*.46,128*.22),n(128*.34,128*.54,128*.18),n(128*.7,128*.58,128*.18);let r=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5],i=t.getImageData(0,0,128,128),a=i.data;for(let e=0;e<128;e++)for(let t=0;t<128;t++){let n=(e*128+t)*4,i=a[n+3]/255,o=(r[e%4*4+t%4]+.5)/16-.5;a[n+3]=Math.max(0,Math.min(1,Math.floor(i*5+.5+o)/5))*255}t.putImageData(i,0,0);let o=new E(e);return o.colorSpace=U,o}function At({extent:e=8,count:t=16}={}){let n=new i;n.raycast=()=>{};let r=kt(),a=e+6,o=(e,t)=>e+Math.random()*(t-e),s=[];for(let e=0;e<t;e++){let e=new D({map:r,transparent:!0,depthWrite:!1,opacity:0,fog:!0}),t=new H(e),i={sp:t,mat:e,wisp:Math.random(),x:o(-a,a),z:o(-a,a),hiY:o(4,6.8),loY:o(.6,2.2),w:o(3,5.6),h:o(1.7,3),speed:o(.25,.7),op:o(.6,1)};t.raycast=()=>{},s.push(i),n.add(t)}let c=new I,l=new I(`#ffffff`),u=new I(`#5b626e`);function d(e,t,n,r){let i=r?r.cloud:0,d=r?r.fog:0,f=Math.min(1,.4+.6*i+.5*d);c.copy(n.sky).lerp(l,.62),c.lerp(u,.6*i);for(let n=0;n<s.length;n++){let r=s[n],l=n/s.length<f;r.x+=r.speed*e*(.6+.8*i),r.x>a&&(r.x=-a,r.z=o(-a,a));let u=Math.min(jt(r.x,-a,-a+3),1-jt(r.x,a-3,a)),p=r.hiY*(1-d)+r.loY*d,m=1-.5*r.wisp,h=.72*Math.max(0,1-d-i)+1*i+.42*d,g=l?Math.max(0,h)*r.op*m*u:0;r.mat.opacity+=(g-r.mat.opacity)*Math.min(1,e*2.5),r.mat.color.copy(c);let _=r.w*(1+.6*d)*(1+.4*r.wisp),v=r.h*(1-.35*d);r.sp.scale.set(_,v,1),r.sp.position.set(r.x,p+Math.sin(t*.3+n)*.15,r.z)}}function f(e){r=e;for(let t of s)t.mat.map=e,t.mat.needsUpdate=!0}return{group:n,update:d,setTexture:f,get count(){return s.length}}}function jt(e,t,n){let r=Math.max(0,Math.min(1,(e-t)/(n-t)));return r*r*(3-2*r)}var Mt=`attribute float aSize;
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
}`,Nt=`precision highp float;

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
}`,Pt={realistic:0,charm:0,pixel:2,vector:1},Ft={realistic:1,charm:1,pixel:1.9,vector:1.2};function It({seed:e=1517,count:t=340,spreadX:r=21,yLo:a=3,yHi:o=18,zBase:s=7.2}={}){let c=new i;c.raycast=()=>{};let l=Z(e>>>0),f=new Float32Array(t*3),p=new Float32Array(t),m=new Float32Array(t),h=new Float32Array(t),g=[];for(let e=0;e<t;e++){let t=(l()*2-1)*r,n=a+l()*(o-a),i=-s-l()*.7;f[e*3]=t,f[e*3+1]=n,f[e*3+2]=i;let c=.35+l()*.65;m[e]=c,p[e]=1.6+l()*2.8+(c>.85?2.2:0),h[e]=l()*Math.PI*2,c>.82&&g.push([t,n,i])}let _=new ne;_.setAttribute(`position`,new R(f,3)),_.setAttribute(`aSize`,new R(p,1)),_.setAttribute(`aBright`,new R(m,1)),_.setAttribute(`aPhase`,new R(h,1));let v=new V({vertexShader:Mt,fragmentShader:Nt,uniforms:{uTime:{value:0},uTwinkle:{value:1},uSizeScale:{value:1},uColor:{value:new I(`#eaf0ff`)},uNight:{value:0},uMode:{value:0}},transparent:!0,depthWrite:!1,blending:2,fog:!1,toneMapped:!1}),y=new S(_,v);y.raycast=()=>{},y.frustumCulled=!1,c.add(y);let b=[];if(g.length>6)for(let e=0;e<3;e++){let e=Math.floor(l()*g.length);for(let t=0;t<3;t++){let t=g[e],n=g[(e+1+Math.floor(l()*2))%g.length];b.push(t[0],t[1],t[2],n[0],n[1],n[2]),e=(e+1)%g.length}}let x=[[[0,2],[0,0]],[[0,0],[.7,0]],[[2.1,2],[1.4,2]],[[1.4,2],[1.4,0]],[[1.4,0],[2.1,0]],[[2.1,0],[2.1,1]],[[2.1,1],[1.7,1]],[[2.8,0],[2.8,2]],[[2.8,2],[3.5,2]],[[3.5,2],[3.5,1]],[[3.5,1],[2.8,1]],[[2.8,1],[3.6,0]]],C=-s-.4,w=.62;for(let[[e,t],[n,r]]of x)b.push(-3+e*w,12+t*w,C,-3+n*w,12+r*w,C);let T=new ne;T.setAttribute(`position`,new n(b,3));let E=new d(T,new u({color:`#9fb6e8`,transparent:!0,opacity:0,depthWrite:!1,fog:!1,toneMapped:!1}));E.raycast=()=>{},E.frustumCulled=!1,c.add(E);let O=new H(new D({map:Lt(),transparent:!0,opacity:0,depthWrite:!1,blending:2,fog:!1,toneMapped:!1}));O.raycast=()=>{},O.scale.set(r*2.4,r*.95,1),O.position.set(2,12,-s-.7),O.material.rotation=-.5,O.renderOrder=-3,c.add(O);let k=-1;function A(e,t=`realistic`,n=0,r=!1){v.uniforms.uTime.value=n,v.uniforms.uTwinkle.value=+!r,v.uniforms.uNight.value=e;let i=Pt[t]??0;i!==k&&(v.uniforms.uMode.value=i,k=i),v.uniforms.uSizeScale.value=Ft[t]??1,E.material.opacity=e*.5,O.material.opacity=e*.32,c.visible=e>.001}return{group:c,update:A}}function Lt(){let e=document.createElement(`canvas`);e.width=e.height=256;let t=e.getContext(`2d`),n=t.createRadialGradient(256/2,256/2,0,256/2,256/2,256/2);n.addColorStop(0,`rgba(150,170,230,0.5)`),n.addColorStop(.4,`rgba(120,130,200,0.22)`),n.addColorStop(1,`rgba(90,100,160,0)`),t.fillStyle=n,t.fillRect(0,0,256,256);let r=Z(20145);for(let e=0;e<7;e++){let e=40+r()*176,n=70+r()*116,i=14+r()*30,a=t.createRadialGradient(e,n,0,e,n,i);a.addColorStop(0,`rgba(200,210,255,0.18)`),a.addColorStop(1,`rgba(200,210,255,0)`),t.fillStyle=a,t.beginPath(),t.arc(e,n,i,0,Math.PI*2),t.fill()}let i=new E(e);return i.colorSpace=U,i}var Rt=Math.PI*2;function zt(e){let t=document.createElement(`canvas`);t.width=t.height=128;let n=t.getContext(`2d`),r=n.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return r.addColorStop(0,`#ffffff`),r.addColorStop(.34,`#fffaf0`),r.addColorStop(.66,e),r.addColorStop(.86,e),r.addColorStop(1,`rgba(255,255,255,0)`),n.fillStyle=r,n.beginPath(),n.arc(128/2,128/2,128/2,0,Rt),n.fill(),Kt(t,!0)}function Bt(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);n.addColorStop(0,`#ffffff`),n.addColorStop(.4,`#eef3ff`),n.addColorStop(.82,`#c4cee6`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,128/2,0,Rt),t.fill(),t.globalAlpha=.14,t.fillStyle=`#8b97b4`;for(let[e,n,r]of[[54,50,9],[78,66,7],[60,82,5]])t.beginPath(),t.arc(e,n,r,0,Rt),t.fill();return Kt(e,!0)}function Vt(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`);t.translate(128/2,128/2),t.fillStyle=`rgba(255,210,120,0.9)`;for(let e=0;e<12;e++)t.rotate(Rt/12),t.beginPath(),t.moveTo(0,-28),t.lineTo(7,-54),t.lineTo(-7,-54),t.closePath(),t.fill();let n=t.createRadialGradient(0,0,0,0,0,32);return n.addColorStop(0,`#ffffff`),n.addColorStop(.4,`#fff1c8`),n.addColorStop(.8,`#ffb24a`),n.addColorStop(1,`#ff8a2a`),t.fillStyle=n,t.beginPath(),t.arc(0,0,32,0,Rt),t.fill(),Kt(e,!0)}function Ht(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,46);n.addColorStop(0,`#ffffff`),n.addColorStop(.5,`#e6ecfb`),n.addColorStop(1,`#c2cce4`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,46,0,Rt),t.fill(),t.fillStyle=`#aab6d2`;for(let[e,n,r]of[[52,48,11],[80,62,8],[58,82,7],[40,66,5]])t.beginPath(),t.arc(e,n,r,0,Rt),t.fill();return Kt(e,!0)}function Ut(e,t,n){let r=document.createElement(`canvas`);r.width=r.height=144;let i=r.getContext(`2d`),a=17/2,o=18/2-.5;for(let r=0;r<18;r++)for(let s=0;s<18;s++){let c=Math.hypot(s-a,r-a);c>o||(i.fillStyle=c<o*.45?e:c<o*.78?t:n,i.fillRect(Math.round(s*8),Math.round(r*8),8,8))}return Kt(r,!1)}function Wt(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return n.addColorStop(0,`rgba(255,255,255,0.9)`),n.addColorStop(.38,`rgba(255,255,255,0.3)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,128/2,0,Rt),t.fill(),Kt(e,!0)}function Gt(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2),r=`20,30,48`;return n.addColorStop(0,`rgba(${r},0)`),n.addColorStop(.42,`rgba(${r},0)`),n.addColorStop(.6,`rgba(${r},0.6)`),n.addColorStop(1,`rgba(${r},0)`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,128/2,0,Rt),t.fill(),Kt(e,!0)}function Kt(e,t){let n=new E(e);return n.colorSpace=U,t||(n.magFilter=y,n.minFilter=y),n}var qt=(e,t,n)=>{let r=Math.max(0,Math.min(1,(e-t)/(n-t)));return r*r*(3-2*r)};function Jt({skyW:e=15,skyY0:t=3.4,skyH:n=3.8,z:r=-7.8,biasX:a=4.5,sunSize:o=4.6,moonSize:s=4}={}){let c=new i;c.raycast=()=>{};let l=(e,t)=>{let n=new H(new D({map:e,transparent:!0,depthWrite:!1,fog:!1,toneMapped:!1,...t?{blending:2}:{}}));return n.raycast=()=>{},n},u={realistic:zt(`#ffcf8a`),charm:Vt(),pixel:Ut(`#fff6e0`,`#ffc24a`,`#ff8a2a`)},d={realistic:Bt(),charm:Ht(),pixel:Ut(`#ffffff`,`#cdd6ee`,`#9aa6c6`)},f=Wt(),p=l(Gt(),!1),m=l(f,!0),h=l(u.realistic),g=l(f,!0),_=l(d.realistic);p.renderOrder=-2,m.renderOrder=-1,c.add(p,m,h,g,_);let v=It({});v.group.renderOrder=-4,c.add(v.group);let y=typeof window<`u`&&window.matchMedia?window.matchMedia(`(prefers-reduced-motion: reduce)`):null,b={realistic:{sunGlow:3,sunGlowOp:.7,moonGlow:2.6,moonGlowOp:.5,sizeMul:1,sunHaloOp:.85},charm:{sunGlow:2.2,sunGlowOp:.55,moonGlow:2.1,moonGlowOp:.42,sizeMul:1.08,sunHaloOp:.7},pixel:{sunGlow:1.7,sunGlowOp:.4,moonGlow:1.7,moonGlowOp:.32,sizeMul:1,sunHaloOp:.6}},x=`realistic`;function S(e){e===x||!b[e]||(x=e,h.material.map=u[e],h.material.needsUpdate=!0,_.material.map=d[e],_.material.needsUpdate=!0)}new I;let C=new I(`#fff3df`),w=new I(`#ffb060`),T=new I(`#ff6a2a`),E=new I(`#eef2ff`),O=new I(`#9fbcff`);function k(i,c,l,u,d=`realistic`){S(d);let f=b[x],D=l.sunArc,k=u?Math.min(1,(u.cloud||0)*.85+(u.fog||0)*.7):0,A=D.y,j=qt(A,-.04,.1)*(1-.7*k),M=1-qt(Math.abs(A),.02,.5);h.position.set(D.x*e+a,t+D.y*n,r),m.position.copy(h.position);let N=o*f.sizeMul*(1+.55*M);h.scale.setScalar(N),m.scale.setScalar(N*f.sunGlow),h.material.color.copy(C),m.material.color.copy(w).lerp(T,M),h.material.opacity=j,m.material.opacity=j*f.sunGlowOp*(.7+.5*M),p.position.copy(h.position),p.scale.setScalar(N*1.7),p.material.opacity=j*(1-M)*f.sunHaloOp;let P=qt(-D.y,-.04,.1)*(1-.65*k);_.position.set(-D.x*e+a,t+-D.y*n,r),g.position.copy(_.position);let F=s*f.sizeMul;_.scale.setScalar(F),g.scale.setScalar(F*f.moonGlow),_.material.color.copy(E),g.material.color.copy(O),_.material.opacity=P,g.material.opacity=P*f.moonGlowOp;let I=qt(-D.y,-.05,.18)*(1-.85*k);v.update(I,d,c,!!(y&&y.matches))}return{group:c,update:k}}var Yt=`varying vec2 vUv;

void main() {
  
  
  
  vUv = uv;

  
  
  
  
  
  
  
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,Xt=`precision highp float;

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
}`,Zt=`varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0); 
}`,Qt=`precision highp float;

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
}`,$t=`precision highp float;

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
}`,en=`precision highp float;

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
}`,tn=`const float CA_STRENGTH   = 0.0030;  
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
}`,nn=`const float DITHER = 0.55;   

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
}`,rn=`precision highp float;

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
}`,an=`precision highp float;

varying vec2 vUv;
uniform sampler2D uToon;   
uniform sampler2D uPixel;  
uniform float     uBlend;  

void main() {
  vec3 t = texture2D(uToon, vUv).rgb;
  vec3 p = texture2D(uPixel, vUv).rgb;
  gl_FragColor = vec4(mix(t, p, uBlend), 1.0);
}`,on=`precision highp float;

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
}`,sn={"1-bit":{gridWidth:110,dither:.6,palette:[`#15120c`,`#c8b486`]},gb:{gridWidth:130,dither:.4,palette:[`#0f380f`,`#306230`,`#8bac0f`,`#9bbc0f`]},"8-bit":{gridWidth:160,dither:.55,palette:[`#140c1c`,`#442434`,`#30346d`,`#4e4a4e`,`#854c30`,`#346524`,`#d04648`,`#757161`,`#597dce`,`#d27d2c`,`#8595a1`,`#6daa2c`,`#d2aa99`,`#6dc2ca`,`#dad45e`,`#deeed6`]},"16-bit":{gridWidth:280,dither:.3,palette:`#000000.#222034.#45283c.#663931.#8f563b.#df7126.#d9a066.#eec39a.#fbf236.#99e550.#6abe30.#37946e.#4b692f.#524b24.#323c39.#3f3f74.#306082.#5b6ee1.#639bff.#5fcde4.#cbdbfc.#ffffff.#9badb7.#847e87.#696a6a.#595652.#76428a.#ac3232.#d95763.#d77bba.#8f974a.#8a6f30`.split(`.`)},modern:{gridWidth:460,dither:.6,palette:null}},cn=[`gb`,`8-bit`,`16-bit`,`modern`],ln={"ink-gold (day)":[`#16100A`,`#3A2F1E`,`#6B563A`,`#937B54`,`#B89968`],"ink-gold (night)":[`#0A0C16`,`#1C2236`,`#3A3A52`,`#5A5A78`,`#8A92B0`],"terminal (day)":[`#050805`,`#0E2912`,`#1E6B2F`,`#3CF06A`,`#FFB000`],"terminal (night)":[`#020604`,`#06180E`,`#10401E`,`#1E9040`,`#7FE0FF`],"neutral (photoreal)":[`#1B1B1E`,`#3D3A3A`,`#5E5750`,`#867C70`,`#A99C8A`,`#C8BCAB`,`#E3DCCF`,`#F5F1E8`],"cool (noir)":[`#0A0E14`,`#16202E`,`#243447`,`#3A536B`,`#5A7D96`,`#86A6BD`,`#B6CDDA`,`#E6EEF2`],"warm (sunset)":[`#190B0A`,`#3B150F`,`#6E2A17`,`#A8421F`,`#DB702F`,`#F2A23E`,`#F9CF76`,`#FDF0C4`],"vibrant (pop)":[`#1A1A2E`,`#E43F5A`,`#F9A826`,`#FFE05D`,`#2EC4B6`,`#3A86FF`,`#8338EC`,`#FFFFFF`],"mono (ink)":[`#0C0C0C`,`#2A2A2A`,`#474747`,`#666666`,`#8A8A8A`,`#B0B0B0`,`#D6D6D6`,`#F5F5F5`]};function un(e){let t=Math.max(e.length,1),n=new Float32Array(t*4);e.forEach((e,t)=>{let r=new I(e);n[t*4+0]=r.r,n[t*4+1]=r.g,n[t*4+2]=r.b,n[t*4+3]=1});let r=new C(n,t,1,m,G);return r.minFilter=y,r.magFilter=y,r.needsUpdate=!0,r}function dn(e,t){let n=[];for(let t=0;t+2<e.length;t+=3)n.push([e[t],e[t+1],e[t+2]]);if(n.length===0)return[`#000000`];let r=e=>{let t=[255,255,255],n=[0,0,0];for(let r of e)for(let e=0;e<3;e++)t[e]=Math.min(t[e],r[e]),n[e]=Math.max(n[e],r[e]);let r=[n[0]-t[0],n[1]-t[1],n[2]-t[2]],i=r[0]>=r[1]&&r[0]>=r[2]?0:r[1]>=r[2]?1:2;return{ax:i,range:r[i]}},i=[n];for(;i.length<t;){let e=-1,t=-1;if(i.forEach((n,i)=>{if(n.length>1){let{range:a}=r(n);a>t&&(t=a,e=i)}}),e<0)break;let n=i[e],{ax:a}=r(n);n.sort((e,t)=>e[a]-t[a]);let o=n.length>>1;i.splice(e,1,n.slice(0,o),n.slice(o))}return i.map(e=>{let t=[0,0,0];for(let n of e)for(let e=0;e<3;e++)t[e]+=n[e];return`#`+t.map(t=>Math.round(t/e.length)).map(e=>e.toString(16).padStart(2,`0`)).join(``)})}var fn=220,pn={night:[`#0A0C16`,`#1C2236`,`#3A3A52`,`#5A5A78`,`#8A92B0`],dawn:[`#1A1008`,`#43281A`,`#7A4A30`,`#B07A4E`,`#E8A86A`],noon:[`#16100A`,`#3A2F1E`,`#6B563A`,`#937B54`,`#B89968`],dusk:[`#140A0A`,`#3E1E1A`,`#7A3828`,`#B85A36`,`#F0884A`]},mn={night:[`#020604`,`#06180E`,`#10401E`,`#1E9040`,`#7FE0FF`],dawn:[`#060603`,`#1A2410`,`#3A6B22`,`#6CC040`,`#FFC060`],noon:[`#050805`,`#0E2912`,`#1E6B2F`,`#3CF06A`,`#FFB000`],dusk:[`#080402`,`#241408`,`#6B4A12`,`#E0A030`,`#FF7030`]};function hn({demo:e=!1,citySeed:t=0,profileIndex:n=0}={}){let i=new ee({antialias:!0,preserveDrawingBuffer:!0});i.shadowMap.enabled=!0,i.shadowMap.type=1,i.shadowMap.autoUpdate=!1,i.shadowMap.needsUpdate=!0;let a=!!(window.matchMedia&&window.matchMedia(`(pointer: coarse)`).matches);i.setPixelRatio(Math.min(window.devicePixelRatio,a?1.5:2)),i.setSize(window.innerWidth,window.innerHeight),i.setClearColor(920327,1),document.body.appendChild(i.domElement);let o=i.getDrawingBufferSize(new k),s=new te;s.fog=new _(10465470,0);let u=new I(`#aeb6c0`),d=.062,f=new I(`#74508f`),g=new I,b=xe({aspect:window.innerWidth/window.innerHeight}),x=nt({t:.5}),S={type:r,format:m,minFilter:y,magFilter:y,wrapS:O,wrapT:O,depthBuffer:!1,stencilBuffer:!1},C=[new L(256,256,S),new L(256,256,S),new L(256,256,S)];for(let e of C)i.setRenderTarget(e),i.clear();i.setRenderTarget(null);let w=new te,T=new v(-1,1,1,-1,0,1),D=new V({vertexShader:Zt,fragmentShader:Qt,uniforms:{uCurr:{value:null},uPrev:{value:null},uTexel:{value:new k(1/256,1/256)},uMouse:{value:new k(-1,-1)},uMouseStrength:{value:0},uC2:{value:.25},uDamping:{value:.992},uRainCount:{value:0},uRainDrops:{value:Array.from({length:8},()=>new z)},uWakeCount:{value:0},uWakeDrops:{value:Array.from({length:8},()=>new z)}}});w.add(new h(new B(2,2),D));let A=new L(o.x,o.y,{minFilter:p,magFilter:p,depthBuffer:!0,stencilBuffer:!1});function j(e){let t=document.createElement(`canvas`);t.width=t.height=1024;let n=t.getContext(`2d`);n.fillStyle=e?`#0c1418`:`#15110b`,n.fillRect(0,0,1024,1024),n.strokeStyle=e?`rgba(120,150,170,0.22)`:`rgba(184,153,104,0.30)`,n.lineWidth=2;for(let e=0;e<=1024;e+=64)n.beginPath(),n.moveTo(e,0),n.lineTo(e,1024),n.stroke(),n.beginPath(),n.moveTo(0,e),n.lineTo(1024,e),n.stroke();e||(n.fillStyle=`#B89968`,n.font=`bold 360px Georgia, serif`,n.textAlign=`center`,n.textBaseline=`middle`,n.fillText(`LGR`,512,470),n.font=`600 64px ui-monospace, monospace`,n.fillText(`WEB · STUDIO`,512,720));let r=new E(t);return r.colorSpace=U,r}let M=new h(new B(28,28),new oe({map:j(e)}));M.rotation.x=-Math.PI/2,M.position.y=-.35,s.add(M);let N=new h(new B(40,24),new V({depthWrite:!1,vertexShader:Yt,fragmentShader:Xt,uniforms:{uTime:{value:0},uInk:{value:x.horizon},uGold:{value:x.sky},uFogColor:{value:g},uFogAmt:{value:0},uFogCharm:Oe}}));N.position.set(0,3,-8),s.add(N);let P=new V({vertexShader:$t,fragmentShader:en,uniforms:{uHeight:{value:null},uScene:{value:A.texture},uTexel:{value:new k(1/256,1/256)},uResolution:{value:new k(o.x,o.y)},uDisplace:{value:.42},uNormalStrength:{value:22},uRefractStrength:{value:.06},uChromaScale:{value:1},uNormalMatrix:{value:new l},uLightDir:{value:x.sunDir},uInk:{value:new I(`#2A2218`)},uGold:{value:new I(`#B89968`)},uVector:Se,uVecWater:{value:new I(`#1fb8d8`)},uVecTint:{value:Ce}}}),F=new h(new B(28,28,255,255),P);F.rotation.x=-Math.PI/2,F.updateMatrixWorld(!0),P.uniforms.uNormalMatrix.value.getNormalMatrix(F.matrixWorld),s.add(F);let R={value:0},ne=Et({windowGlow:R}),H=Je({seed:t,profileIndex:n,landmarkFactory:ne,windowGlow:R});s.add(H.group);let re=st({plinthTop:.3,extent:H.extent,profile:H.state.profile});s.add(re.group);let W=mt({extent:H.extent,waterSize:28,plinthTop:.3});s.add(W.group),D.uniforms.uWakeDrops.value=W.wakeDrops;let G=Ot({extent:H.extent});s.add(G.group),D.uniforms.uRainDrops.value=G.rainDrops;let ae=At({extent:H.extent});s.add(ae.group);let se=Jt();s.add(se.group),H.group.remove(H.key),s.add(H.key),H.key.castShadow=!0,H.key.shadow.mapSize.set(2048,2048),H.key.shadow.bias=-18e-5,H.key.shadow.normalBias=.028,s.add(H.key.target);function ce(){let e=H.key.shadow.camera,t=H.extent+4.5;e.left=-t,e.right=t,e.top=t,e.bottom=-t,e.near=1,e.far=48,e.updateProjectionMatrix(),i.shadowMap.needsUpdate=!0}ce();let le=new ie(o.x,o.y),K=new L(o.x,o.y,{minFilter:p,magFilter:p,depthBuffer:!0,stencilBuffer:!1,depthTexture:le}),ue=new L(o.x,o.y,{minFilter:p,magFilter:p,depthBuffer:!1,stencilBuffer:!1}),de=new L(o.x,o.y,{minFilter:p,magFilter:p,depthBuffer:!1,stencilBuffer:!1}),fe=new L(o.x,o.y,{minFilter:p,magFilter:p,depthBuffer:!1,stencilBuffer:!1}),pe=new te,me=new v(-1,1,1,-1,0,1),he=new h(new B(2,2));pe.add(he);let ge=new V({vertexShader:Zt,fragmentShader:tn,uniforms:{uScene:{value:K.texture},uTime:{value:0},uResolution:{value:new k(o.x,o.y)},uGrain:{value:1},uChroma:{value:1},uExposure:{value:1}}}),_e=e=>{let t=e.map(e=>new I(e));for(;t.length<8;)t.push(new I(0,0,0));return t},ve=[`night`,`dawn`,`noon`,`dusk`],ye={inkgold:ve.map(e=>_e(pn[e])),terminal:ve.map(e=>_e(mn[e]))},q=new V({vertexShader:Zt,fragmentShader:nn,uniforms:{uScene:{value:ue.texture},uResolution:{value:new k(o.x,o.y)},uPixelSize:{value:fn},uPalette:{value:ye.inkgold[2]},uPaletteB:{value:ye.inkgold[2]},uPaletteBlend:{value:0},uPaletteSize:{value:5}}}),be=new V({vertexShader:Zt,fragmentShader:on,uniforms:{uScene:{value:ue.texture},uResolution:{value:new k(o.x,o.y)},uGridWidth:{value:160},uDither:{value:.55},uPalette:{value:un(sn[`8-bit`].palette)},uPaletteSize:{value:1},uUsePalette:{value:1}}}),Ae={};for(let e of cn)Ae[e]=sn[e].palette?un(sn[e].palette):null;let je=new V({vertexShader:Zt,fragmentShader:rn,uniforms:{uScene:{value:ue.texture},uDepth:{value:le},uResolution:{value:new k(o.x,o.y)},uBands:{value:4},uToonGain:{value:1.7},uToonGamma:{value:.6},uToonFloor:{value:x.toonFloor},uOutline:{value:x.outline},uNear:{value:.1},uFar:{value:100},uIsPerspective:{value:1}}}),Me=new V({vertexShader:Zt,fragmentShader:an,uniforms:{uToon:{value:de.texture},uPixel:{value:fe.texture},uBlend:{value:0}}});function Ne(e,t){he.material=e,i.setRenderTarget(t),i.render(pe,me)}function Pe(){b.setViewport(window.innerWidth,window.innerHeight),i.setSize(window.innerWidth,window.innerHeight);let e=i.getDrawingBufferSize(new k);return A.setSize(e.x,e.y),K.setSize(e.x,e.y),ue.setSize(e.x,e.y),de.setSize(e.x,e.y),fe.setSize(e.x,e.y),P.uniforms.uResolution.value.set(e.x,e.y),ge.uniforms.uResolution.value.set(e.x,e.y),q.uniforms.uResolution.value.set(e.x,e.y),be.uniforms.uResolution.value.set(e.x,e.y),je.uniforms.uResolution.value.set(e.x,e.y),e}let J=3,Y=!1,X=!1,Z=`native`,Fe=.3,Ie=.46,Le=[`native`,...cn],Re={"16-bit":`16-bit`,"8-bit":`8-bit`,gb:`Game Boy`,modern:`Modern`,native:`Pixel`,"1-bit":`1-bit`};typeof window<`u`&&(window.__mode=J,window.__vector=Y,window.__era=Z);let ze=0,Be=performance.now(),Ve=typeof window<`u`&&new URLSearchParams(window.location.search).has(`perf`);typeof window<`u`&&(window.__perf=Ve),Ve&&(i.info.autoReset=!1);let He=null;typeof window<`u`&&(window.__loaded=!1);let Ue=0,We=new z(1,1,1),Q=!1;function Ge(e){let t=X?ye.terminal:ye.inkgold,n=e%1*4,r=Math.floor(n)%4;q.uniforms.uPalette.value=t[r],q.uniforms.uPaletteB.value=t[(r+1)%4],q.uniforms.uPaletteBlend.value=n-Math.floor(n)}function Ke(e){let t=sn[e];t&&(be.uniforms.uGridWidth.value=t.gridWidth,be.uniforms.uDither.value=t.dither,be.uniforms.uUsePalette.value=+!!t.palette,t.palette&&(be.uniforms.uPalette.value=Ae[e],be.uniforms.uPaletteSize.value=t.palette.length))}function qe(){Z!==`native`&&Ke(Z)}let Ye=()=>Z===`native`?q:be;function Xe(e,t){F.visible=!1,i.setRenderTarget(A),i.render(s,e),F.visible=!0,i.setRenderTarget(t),i.render(s,e)}function Ze(e,t){if(F.visible=!1,i.setRenderTarget(A),i.render(s,b.camera),F.visible=!0,J===1)i.setRenderTarget(t),i.render(s,b.camera);else if(i.setRenderTarget(K),i.render(s,b.camera),J===2)ge.uniforms.uGrain.value=1,ge.uniforms.uChroma.value=1,Ne(ge,t);else{ge.uniforms.uGrain.value=0,ge.uniforms.uChroma.value=0,Ne(ge,ue);let n=b.camera;je.uniforms.uNear.value=n.near,je.uniforms.uFar.value=n.far,je.uniforms.uIsPerspective.value=+!!n.isPerspectiveCamera;let r=e.era?(Ke(e.era),be):Ye();e.kind===`pixel`?(Ne(r,t),window.__style=`pixel`):e.kind===`toon`?(Ne(je,t),window.__style=`toon`):(Ne(je,de),Ne(r,fe),Me.uniforms.uBlend.value=e.blend,Ne(Me,t),window.__style=`blend`)}}function Qe(){let e=$e(),t=e.kind===`toon`?1:e.kind===`blend`?1-e.blend:0;return P.uniforms.uChromaScale.value=c.lerp(1,.5,t),e}function $e(){if(J===1||J===2)return{kind:`none`};if(J===7)return{kind:`pixel`};if(J===8)return{kind:`toon`};let e=b.styleT;return window.__styleT=e,e<=Fe?{kind:`toon`}:e>=Ie?{kind:`pixel`,era:e<.62?`16-bit`:e<.8?`8-bit`:`gb`}:{kind:`blend`,blend:c.smoothstep(e,Fe,Ie),era:`16-bit`}}function et(e){return J===1||J===2?``:Y&&J!==7&&J!==8?`Vector`:e.kind===`toon`?`Toon`:e.kind===`pixel`?Re[e.era||Z]||`Pixel`:e.kind===`blend`?`Toon → `+(Re[e.era]||`Pixel`):``}function tt(e,t,{shadowsOn:n=!0,seasonTarget:r=0}={}){if(Ve){let e=i.info;He={calls:e.render.calls,tris:e.render.triangles,programs:e.programs?e.programs.length:0,geo:e.memory.geometries,tex:e.memory.textures},e.reset()}N.material.uniforms.uTime.value=t,ge.uniforms.uTime.value=t,x.update(e),H.key.position.copy(x.sunDir).multiplyScalar(24),H.key.color.copy(x.sunColor),H.key.intensity=x.sunIntensity,H.fill.color.copy(x.hemiSky),H.fill.groundColor.copy(x.hemiGround),R.value=x.windowGlow;let a=G.overcast;H.key.intensity*=1-.5*a,H.key.color.lerp(u,.45*a),H.fill.intensity=1+.7*a;let o=c.smoothstep(x.sunDir.y,.06,.34),l=c.lerp(.28,1,1-x.windowGlow),p=n?o*l:0;H.key.shadow.intensity=.72*p,we.value=.52*p,(n&&!Q||We.distanceToSquared(x.sunDir)>2e-5)&&(i.shadowMap.needsUpdate=!0,We.copy(x.sunDir)),Q=n;let m=1-x.windowGlow;Ce.setRGB(c.lerp(.46,1,m),c.lerp(.52,1,m),c.lerp(.74,1,m)),ge.uniforms.uExposure.value=x.exposure,je.uniforms.uToonGain.value=x.toonGain,i.setClearColor(x.horizon,1),Ge(x.t),window.__t=x.t,re.update(e,t,x),H.update(t),W.update(e,t,x),D.uniforms.uWakeCount.value=W.wakeCount,G.update(e,t),D.uniforms.uRainCount.value=G.rainDropCount;let h=G.fog*(1-m);s.fog.density=G.fog*d,g.copy(x.horizon).lerp(f,.85*h),s.fog.color.copy(g),i.setClearColor(g,1),Oe.value=G.fog,N.material.uniforms.uFogAmt.value=.7*G.fog,Te.value=G.snow,Ee.value=G.cloud*.55,De.x+=e*.018,De.y+=e*.009,ke.value+=(r-ke.value)*Math.min(1,e*1.5),ae.update(e,t,x,G);let _=$e(),v=_.kind===`pixel`||_.kind===`blend`?`pixel`:Y||_.kind===`toon`?`charm`:`realistic`;se.update(e,t,x,G,v),ze++;let y=performance.now();y-Be>=1e3&&(window.__fps=ze,Ve&&He&&(console.log(`[perf] ${ze} fps · ~${(1e3/Math.max(1,ze)).toFixed(2)} ms · calls ${He.calls} · tris ${He.tris} · programs ${He.programs} · geo ${He.geo} · tex ${He.tex}`),window.__perfInfo={fps:ze,...He}),ze=0,Be=y);let[b,S,E]=C;if(D.uniforms.uPrev.value=b.texture,D.uniforms.uCurr.value=S.texture,i.setRenderTarget(E),i.render(w,T),C=[S,E,b],P.uniforms.uHeight.value=C[1].texture,Ue<2&&typeof document<`u`&&++Ue===2){let e=document.getElementById(`lgr-loader`);e&&e.classList.add(`gone`),window.__loaded=!0}}function rt(e){J=e,window.__mode=J}function it(){return Y=!Y,Se.value=+!!Y,window.__vector=Y,Y}function at(e){return Y=!!e,Se.value=+!!Y,window.__vector=Y,Y}function ot(){return Z=Le[(Le.indexOf(Z)+1)%Le.length],window.__era=Z,qe(),Z}function ct(){return X=!X,X}return{updateWorld:tt,decideStyle:Qe,renderCityPipeline:Ze,renderCityBeautyTo:Xe,styleHintName:et,setPostMode:rt,toggleVector:it,setVector:at,cycleEra:ot,togglePalette:ct,get mode(){return J},get vector(){return Y},get sceneEra(){return Z},renderer:i,drawBuffer:o,scene:s,rig:b,sunRig:x,SIM:256,targets:C,simScene:w,simCamera:T,simMaterial:D,grabRT:A,card:M,backdrop:N,WATER_SIZE:28,water:F,waterMaterial:P,windowGlow:R,landmarkFactory:ne,city:H,cityLife:re,waterLife:W,weatherRig:G,clouds:ae,fitShadowFrustum:ce,SHADOW_DIST:24,sceneDepth:le,sceneRT:K,filmicRT:ue,toonRT:de,pixelRT:fe,postScene:pe,postCamera:me,postQuad:he,filmicMaterial:ge,pixelMaterial:q,pixelkitMaterial:be,toonMaterial:je,mixMaterial:Me,PALCACHE:ye,ERA_TEX:Ae,runPass:Ne,OVERCAST_GREY:u,FOG_DENSITY:d,FOG_NIGHT_TINT:f,_fogColor:g,resize:Pe}}var gn=[`video/mp4;codecs=avc1.42E01E`,`video/mp4`,`video/webm;codecs=vp9`,`video/webm`];function _n({renderer:e,rig:t,sunRig:n,poke:r,getState:i,office:a={}}){let o=e.domElement,s=new URLSearchParams(window.location.search),c=e=>{let t=i();return`lgr-${t.lesson}-${String(t.clock||``).replace(`:`,``)}-${t.style}.${e}`},l=(e,t)=>{let n=URL.createObjectURL(e),r=document.createElement(`a`);r.href=n,r.download=t,document.body.appendChild(r),r.click(),r.remove(),setTimeout(()=>URL.revokeObjectURL(n),1e3)};function u(){o.toBlob(e=>{e&&(l(e,c(`png`)),window.__lastStill=e.size)},`image/png`)}let d=()=>gn.find(e=>window.MediaRecorder&&MediaRecorder.isTypeSupported(e))||``,f=vn(),p=null,m=[],h=!1;function g(){if(h)return;let e=d(),t=o.captureStream(60);p=new MediaRecorder(t,e?{mimeType:e,videoBitsPerSecond:12e6}:{}),m=[],p.ondataavailable=e=>{e.data&&e.data.size&&m.push(e.data)},p.onstop=()=>{let e=new Blob(m,{type:p.mimeType});l(e,c(p.mimeType.includes(`mp4`)?`mp4`:`webm`)),window.__lastVideo=e.size},p.start(),h=!0,window.__recording=!0,f.show()}function _(){h&&(p.stop(),h=!1,window.__recording=!1,f.hide())}let v=()=>h?_():g(),y=e=>new Promise(t=>setTimeout(t,e)),b=e=>window.dispatchEvent(new KeyboardEvent(`keydown`,{key:e}));async function x(){let e=o.clientWidth,t=o.clientHeight,n=e*.26,i=t*.74;for(let t=0;t<=10;t++)r.at(n+t*e*.028,i+Math.sin(t*.7)*16),await y(100);r.stop()}async function S(e){if(e.keys)for(let t of e.keys)b(t),await y(70);e.zoom&&t.zoomBy(e.zoom),e.orbit&&t.orbit(e.orbit[0],e.orbit[1]),e.timeTo!==void 0&&n.goTo(e.timeTo),e.office&&a[e.office]?.(),e.ripple&&await x(),e.waitMs&&await y(e.waitMs)}let C={tour:[{keys:[`6`,`0`],waitMs:600},{zoom:.72,waitMs:1700},{ripple:!0,waitMs:2400},{orbit:[.55,0],waitMs:1700},{timeTo:0,waitMs:3e3},{timeTo:.5,waitMs:1500},{keys:[`7`],waitMs:1e3},{zoom:1.5,waitMs:1400},{keys:[`B`],waitMs:2e3},{keys:[`B`],waitMs:2e3},{keys:[`B`],waitMs:2e3},{keys:[`B`],waitMs:2e3},{keys:[`B`],waitMs:2e3},{keys:[`8`],waitMs:900},{zoom:.65,waitMs:1200},{ripple:!0,waitMs:2600},{keys:[`7`],waitMs:700},{keys:[`B`],waitMs:300},{keys:[`B`],waitMs:900},{zoom:1.4,waitMs:2600}],daycycle:[{keys:[`6`,`0`],waitMs:700},{timeTo:.75,waitMs:2600},{timeTo:1,waitMs:2600},{timeTo:1.25,waitMs:2600},{timeTo:1.5,waitMs:2600},{timeTo:1.5,waitMs:800}],office:[{keys:[`o`],waitMs:1700},{office:`pet`,waitMs:1300},{office:`feed`,waitMs:1700},{office:`travel`,waitMs:1700},{keys:[`W`,`W`,`W`],waitMs:1800},{timeTo:0,waitMs:2400},{office:`laptop`,waitMs:800},{office:`closeLaptop`,waitMs:300},{timeTo:.5,waitMs:900},{keys:[`W`],waitMs:200},{keys:[`o`],waitMs:1500}],cities:[{keys:[`6`,`0`],waitMs:500},{timeTo:.78,waitMs:2800},{keys:[`C`],waitMs:3e3},{keys:[`C`],waitMs:3e3},{keys:[`C`],waitMs:2e3}],water:[{keys:[`6`,`0`],waitMs:600},{zoom:1.35,waitMs:2800},{orbit:[.7,0],waitMs:2600},{ripple:!0,waitMs:2200},{timeTo:0,waitMs:3200},{timeTo:.5,waitMs:1500},{orbit:[-.5,0],waitMs:2200}],morph:[{keys:[`6`,`3`],waitMs:700},{zoom:.55,waitMs:1800},{zoom:2.3,waitMs:1700},{zoom:1.26,waitMs:1700},{zoom:1.16,waitMs:1900},{zoom:.3,waitMs:2200}],skin:[{keys:[`o`],waitMs:1800},{keys:[`j`],waitMs:2e3},{keys:[`j`],waitMs:2e3},{timeTo:0,waitMs:2600},{timeTo:.5,waitMs:1500},{keys:[`u`],waitMs:2e3},{keys:[`j`],waitMs:1400},{keys:[`o`],waitMs:1500}]};async function w(e){let t=C[e];if(t){window.__director=e;for(let e of t)await S(e);window.__director=null}}async function T(e){await y(1600),g(),await w(e),await y(400),_(),window.__captureDone=!0}window.addEventListener(`keydown`,e=>{(e.key===`s`||e.key===`S`)&&u(),(e.key===`r`||e.key===`R`)&&v()});let E=s.get(`capture`);return E&&C[E]&&T(E),window.__capture={still:u,toggleRec:v,run:w,sequences:Object.keys(C)},window.__capture}function vn(){let e=document.createElement(`div`);return e.textContent=`● REC`,e.style.cssText=`position:fixed;top:14px;right:16px;z-index:2;font:bold 12px ui-monospace,monospace;color:#ff3b30;letter-spacing:.12em;text-shadow:0 1px 3px #000;display:none;`,document.body.appendChild(e),{show:()=>{e.style.display=`block`},hide:()=>{e.style.display=`none`}}}var yn=`
.vui { position: fixed; left: 50%; bottom: 16px; transform: translateX(-50%); z-index: 3;
  display: flex; gap: 8px; align-items: center; padding: 7px 9px; border-radius: 14px;
  background: rgba(16,18,24,0.72); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
  box-shadow: 0 6px 24px rgba(0,0,0,0.4); font: 600 12px/1 ui-monospace, monospace;
  color: #d8dde6; pointer-events: auto; user-select: none; max-width: calc(100vw - 24px);
  flex-wrap: wrap; justify-content: center; }
/* L54 FIX: the button rules apply to BOTH the primary bar (.vui) AND the "More" overflow panel
   (.vui-more) — the panel is a SEPARATE element appended to body, NOT a child of .vui, so a bare
   ".vui button" selector skipped it and its buttons collapsed to ~21px text height (below the 44px
   touch minimum). Same elements, same rules, two containers. (No backticks in this string — it is a
   JS template literal; a backtick here would close it early, the L-series build gotcha.) */
.vui button, .vui-more button { min-width: 44px; min-height: 44px; padding: 0 12px; border: 0; border-radius: 10px;
  background: rgba(255,255,255,0.07); color: inherit; font: inherit; cursor: pointer;
  letter-spacing: .04em; transition: background .12s, transform .08s ease; }
.vui button:hover, .vui-more button:hover { background: rgba(255,255,255,0.16); }
/* L41 BUTTON JUICE: a press scales down + flashes brighter so taps feel responsive (paired with a
   guarded haptic tick in JS). Reduced-motion users get the flash without the scale animation. */
.vui button:active, .vui-more button:active { transform: scale(0.92); background: rgba(255,255,255,0.26); }
@media (prefers-reduced-motion: reduce) { .vui button, .vui-more button { transition: background .12s; } .vui button:active, .vui-more button:active { transform: none; } }
.vui button.on, .vui-more button.on { background: #3a7bd5; color: #fff; }
.vui .seg, .vui-more .seg { display: flex; gap: 2px; background: rgba(255,255,255,0.05); border-radius: 11px; padding: 2px; }
.vui .seg button, .vui-more .seg button { min-width: 44px; padding: 0 9px; border-radius: 9px; }
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
`;function bn({controls:e,state:t,show:n,coarse:r}){if(typeof document>`u`)return;let i=document.createElement(`style`);i.textContent=yn,document.head.appendChild(i);let a=document.createElement(`div`);a.className=`vui`;let o=document.createElement(`div`);o.className=`vui-info`,o.innerHTML=`KEYS · 4/5/6 cam · 0 vector · 7/8 pixel/toon · B era · T time · [ ] scrub · 9 auto · C city · G shuffle · W weather · K season · click a building / O office · J office skin · U painted props · Esc exit · M hide UI · S still · R rec · H shadows · P theme · drag water to ripple`;let s=(e,t,n)=>{let r=document.createElement(`button`);return r.textContent=e,n&&(r.title=n),r.addEventListener(`click`,e=>{navigator.vibrate?.(10),t(e)}),r},c=e=>{let t=document.createElement(`div`);return t.className=`seg`,{seg:t,btns:e.map(([n,r])=>{let i=s(n,()=>e.find(e=>e[1]===r)[2](),n);return i.dataset.val=r,t.appendChild(i),i})}},l=s(`City`,()=>e.city(),`Next city profile (C)`),u=s(`Shuffle`,()=>e.shuffle(),`New random seed (G)`),d={clear:`Clear`,rain:`Rain`,snow:`Snow`,fog:`Fog`},f=[`Spring`,`Summer`,`Autumn`,`Winter`],p=s(`Clear`,()=>e.weather(),`Cycle weather: clear→rain→snow→fog (W)`),m=s(`Spring`,()=>e.season(),`Cycle season: spring→summer→autumn→winter (K)`),h=s(`Office`,()=>e.office(),`Dive into / exit the office (O · Esc)`),g={"3d":`3D`,dressed2:`Dressed`,night2:`Night`,modern:`Modern`,charm:`Charm`},_=s(`Skin`,()=>e.officeSkin(),`Office look: 3D → dressed → night → modern → charm diffusion (J)`),v={painted:`Painted`,"3d":`Live 3D`},y=s(`Props`,()=>e.officeProps(),`Office props: painted (cohesive) ↔ live 3D (animated) — under a skin (U)`),b=c([[`Auto`,`auto`,()=>e.post(`auto`)],[`Pixel`,`pixel`,()=>e.post(`pixel`)],[`Toon`,`toon`,()=>e.post(`toon`)],[`None`,`none`,()=>e.post(`none`)]]);b.btns[0].title=`AUTO: zoom morphs the style (toon → 16-bit → 8-bit → Game Boy)`,b.btns[3].title=`NONE: raw beauty render, no post-crunch (clean flat-vector when Vector is on)`;let x=s(`Vector`,()=>e.vector(),`Flat-vector materials — LAYERS onto the post mode (Vector + Pixel/Toon/Auto). Toggle (0)`),S={native:`Era`,gb:`GB`,"8-bit":`8-bit`,"16-bit":`16-bit`,modern:`Modern`,"1-bit":`1-bit`},C=s(`Era`,()=>e.era(),`Cycle the pixel era (B): native → GB → 8-bit → 16-bit → Modern`),w=document.createElement(`input`);w.type=`range`,w.min=`0`,w.max=`1`,w.step=`0.01`,w.title=`Time of day`;let T=!1;w.addEventListener(`pointerdown`,()=>{T=!0}),w.addEventListener(`pointerup`,()=>{T=!1}),w.addEventListener(`input`,()=>e.time(parseFloat(w.value)));let E=s(`▶`,()=>e.auto(),`Play/pause day cycle (9)`),D=document.createElement(`div`);D.style.cssText=`display:flex;align-items:center;gap:6px;`;let O=document.createElement(`span`);O.className=`lbl`,O.textContent=`Day`,D.append(O,w,E);let k=c([[`Iso`,`iso`,()=>e.cam(`iso`)],[`Dim`,`dimetric`,()=>e.cam(`dimetric`)],[`3D`,`persp`,()=>e.cam(`persp`)]]),A=s(`ⓘ`,()=>o.classList.toggle(`open`),`All keys`),j=s(`⌄`,()=>R(!0),`Hide controls — watch unobstructed (M)`),M=document.createElement(`div`);M.className=`vui-more`;let N=s(`More`,()=>{M.classList.toggle(`open`),B()},`More controls`);if(r){a.append(l,u,h,E,b.seg,N,j);let e=document.createElement(`div`);e.style.cssText=`display:flex;align-items:center;gap:6px;`,e.append(O,w),M.append(p,m,_,y,x,C,k.seg,e)}else a.append(l,u,U(),p,m,h,_,y,U(),b.seg,x,C,U(),D,U(),k.seg,A,U(),j);let P=document.createElement(`button`);P.className=`vui-show`,P.innerHTML=`⌃ Controls`,P.title=`Show controls (M)`,P.addEventListener(`click`,()=>R(!1));let F=document.createElement(`div`);F.className=`vui-style`,document.body.append(o,M,a,P,F);let I=n,L=!1;R(r);function ee(){let e=t();b.btns.forEach(t=>t.classList.toggle(`on`,t.dataset.val===e.post)),x.classList.toggle(`on`,!!e.vector),k.btns.forEach(t=>t.classList.toggle(`on`,t.dataset.val===e.cam)),p.textContent=d[e.weather]||`Clear`,p.classList.toggle(`on`,e.weather!==`clear`),m.textContent=f[e.season]||`Spring`,m.classList.toggle(`on`,(e.season||0)>0),h.textContent=e.office?`Exit`:`Office`,h.classList.toggle(`on`,!!e.office),_.textContent=g[e.officeSkin]||`Skin`,_.classList.toggle(`on`,e.officeSkin&&e.officeSkin!==`3d`),y.textContent=v[e.officeProps]||`Props`,y.classList.toggle(`on`,e.officeProps===`painted`&&e.officeSkin&&e.officeSkin!==`3d`),E.textContent=e.auto?`❚❚`:`▶`,E.classList.toggle(`on`,e.auto),C.textContent=S[e.era]||`Era`,C.classList.toggle(`on`,e.era&&e.era!==`native`),T||(w.value=String(e.t))}ee();let te=setInterval(ee,200);function R(e){if(!I){a.style.display=`none`,P.classList.remove(`on`),o.classList.remove(`open`),M.classList.remove(`open`),F.classList.remove(`on`);return}L=e,a.style.display=e?`none`:`flex`,P.classList.toggle(`on`,e),e&&(o.classList.remove(`open`),M.classList.remove(`open`),F.classList.remove(`on`))}function z(){R(!L)}function B(){if(!M.classList.contains(`open`))return;let e=a.getBoundingClientRect();M.style.bottom=Math.round(window.innerHeight-e.top+8)+`px`}let V=()=>B();window.addEventListener(`resize`,V);let ne=null,H=null;function re(e){if(!I||L){F.classList.remove(`on`),ne=null;return}if(!e){F.classList.remove(`on`),ne=``;return}e!==ne&&(ne=e,F.textContent=e,F.classList.add(`on`),clearTimeout(H),H=setTimeout(()=>F.classList.remove(`on`),2e3))}return{toggle:z,setHidden:R,refresh:ee,setStyleHint:re,destroy(){clearInterval(te),window.removeEventListener(`resize`,V),a.remove(),o.remove(),M.remove(),P.remove(),F.remove(),i.remove(),clearTimeout(H)}};function U(){let e=document.createElement(`div`);return e.className=`sep`,e}}var xn=`lgr_hints_`,Sn=!1;function Cn(){if(Sn||typeof document>`u`)return;Sn=!0;let e=document.createElement(`style`);e.textContent=`
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
  }`,document.head.appendChild(e)}function wn({key:e,title:t=`Tips`,tips:n=[],force:r=!1}={}){let i={key:e,shown:!1,dismissed:!1,seen:!1};if(typeof window<`u`&&(window.__hints=i),typeof document>`u`||!e)return{dismiss(){},el:null};let a=xn+e,o=!1;try{o=localStorage.getItem(a)===`1`}catch{}if(o&&!r)return i.seen=!0,{dismiss(){},el:null};Cn();let s=!!(window.matchMedia&&window.matchMedia(`(prefers-reduced-motion: reduce)`).matches),c=document.createElement(`div`);c.className=`lgr-hints`,c.innerHTML=`<div class="lgr-hints-card">
    <div class="lgr-hints-h">${t}</div>
    <ul>${n.map(e=>`<li>${e}</li>`).join(``)}</ul>
    <button class="lgr-hints-ok">Got it</button>
    <button class="lgr-hints-x" title="Dismiss (Esc)" aria-label="Dismiss">✕</button>
  </div>`,document.body.appendChild(c),i.shown=!0,s?c.classList.add(`on`):requestAnimationFrame(()=>c.classList.add(`on`));let l=!1;function u(e=!0){if(!l){if(l=!0,e)try{localStorage.setItem(a,`1`)}catch{}i.dismissed=!0,window.removeEventListener(`keydown`,d),c.classList.remove(`on`),setTimeout(()=>c.remove(),s?0:300)}}function d(e){e.key===`Escape`&&u(!0)}return window.addEventListener(`keydown`,d),c.querySelector(`.lgr-hints-ok`).addEventListener(`click`,()=>{navigator.vibrate?.(10),u(!0)}),c.querySelector(`.lgr-hints-x`).addEventListener(`click`,()=>{navigator.vibrate?.(10),u(!0)}),{dismiss:u,el:c}}var Tn=null;function En(){if(Tn)return Tn;let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return n.addColorStop(0,`rgba(0,0,0,0.60)`),n.addColorStop(.55,`rgba(0,0,0,0.32)`),n.addColorStop(1,`rgba(0,0,0,0.0)`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,128/2,0,Math.PI*2),t.fill(),Tn=new E(e),Tn.colorSpace=U,Tn}function Dn({w:e=.6,d:t=.6,x:n=0,y:r=.002,z:i=0,opacity:a=.5,rotation:o=0}={}){let s=new h(new B(e,t),new oe({map:En(),transparent:!0,opacity:a,depthWrite:!1,toneMapped:!1}));return s.rotation.x=-Math.PI/2,s.rotation.z=o,s.position.set(n,r,i),s.renderOrder=-1,s.raycast=()=>{},s}function On({yawLimit:e=80,pitchUp:t=32,pitchDown:n=20,sensitivity:r=.16,keySpeed:i=70,damp:a=9}={}){let o=Math.PI/180,s=(e,t,n)=>e<t?t:e>n?n:e,c=0,l=0,u=0,d=0;return{addDrag(i,a){u=s(u-i*r,-e,e),d=s(d-a*r,-n,t)},addKeys(r,{left:a,right:o,up:c,down:l}){let f=i*r;a&&(u=s(u+f,-e,e)),o&&(u=s(u-f,-e,e)),c&&(d=s(d+f,-n,t)),l&&(d=s(d-f,-n,t))},recenter(){u=0,d=0},update(e){let t=1-Math.exp(-a*e);c+=(u-c)*t,l+=(d-l)*t},get yaw(){return c*o},get pitch(){return l*o},get active(){return Math.abs(c)>.05||Math.abs(l)>.05}}}var kn=null;function An(){if(kn)return kn;let e=document.createElement(`canvas`);e.width=e.height=256;let t=e.getContext(`2d`),n=t.createRadialGradient(256/2,256/2,256*.32,256/2,256/2,256*.72);return n.addColorStop(0,`rgba(0,0,0,0)`),n.addColorStop(1,`rgba(0,0,0,1)`),t.fillStyle=n,t.fillRect(0,0,256,256),kn=new E(e),kn.colorSpace=U,kn}function jn({strength:e=.55,dist:t=.5}={}){let n=new h(new B(1,1),new oe({map:An(),transparent:!0,opacity:e,depthTest:!1,depthWrite:!1,toneMapped:!1}));n.renderOrder=9999,n.raycast=()=>{},n.frustumCulled=!1;let r=new z;return n.fit=e=>{e.getWorldDirection(r),n.position.copy(e.position).addScaledVector(r,t),n.quaternion.copy(e.quaternion);let i=2*Math.tan(c.degToRad(e.fov)*.5)*t*1.05;n.scale.set(i*e.aspect,i,1)},n}var Mn=`precision highp float;

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
}`;export{Le as _,wn as a,hn as c,un as d,dn as f,Ie as g,ct as h,jn as i,sn as l,Zt as m,On as n,bn as o,on as p,Dn as r,_n as s,Mn as t,ln as u,X as v,K as y};