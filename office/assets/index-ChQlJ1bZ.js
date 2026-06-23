import{$ as e,A as t,B as n,C as r,D as i,E as a,F as o,G as s,H as c,I as l,J as u,K as d,L as f,M as p,N as m,O as h,P as g,Q as _,R as v,S as y,T as b,U as x,V as S,W as C,X as w,Y as T,Z as E,_ as D,a as O,at as ee,b as te,c as k,ct as A,d as ne,dt as re,et as j,f as M,ft as N,g as P,h as F,ht as I,i as ie,it as ae,j as L,k as oe,l as se,lt as R,m as ce,mt as z,n as le,nt as B,o as V,ot as ue,p as de,pt as fe,q as pe,r as me,rt as he,s as H,st as ge,t as _e,tt as ve,u as U,ut as ye,v as be,w as xe,x as Se,y as Ce,z as we}from"./three-D_aL4whJ.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var Te=(e,t,n,r)=>e+(t-e)*(1-Math.exp(-n*r)),W=(e,t,n)=>e<t?t:e>n?n:e,G=Math.atan(1/Math.SQRT2),Ee=Math.atan(.5),K=Math.PI/4,De={PERSPECTIVE:4,ISOMETRIC:5,DIMETRIC:6},Oe=8,ke=.12,Ae=1.45,je=4,Me=40,Ne=1.5,Pe=16,Fe=6,Ie=22,q=3.5,Le=11,Re=(e,t,n)=>Te(e,t,Oe,n),ze=(e,t)=>e+Math.PI*2*Math.round((t-e)/(Math.PI*2));function Be({aspect:e,fov:t=48,near:n=.1,far:r=100,target:i=new z(0,.8,0),azimuth:a=K,elevation:o=.52,distance:c=12,zoom:l=5.5}={}){let u=new pe(t,e,n,r),d=new s(-1,1,1,-1,n,r),p=De.PERSPECTIVE,m=e,h={azimuth:a,elevation:o,distance:c,zoom:l,target:i.clone()},g={azimuth:a,elevation:o,distance:c,zoom:l,target:i.clone()},_=!1,v=null,y=new z,b=()=>p===De.PERSPECTIVE?u:d;function x(e){e!==p&&(p=e,p===De.ISOMETRIC||p===De.DIMETRIC?(h.elevation=p===De.ISOMETRIC?G:Ee,h.azimuth=ze(K,g.azimuth),_=!0):_=!1)}function S(e,t){h.azimuth+=e,_||(h.elevation=f.clamp(h.elevation+t,ke,Ae))}function C(e){p===De.PERSPECTIVE?h.distance=f.clamp(h.distance*e,je,Me):h.zoom=f.clamp(h.zoom*e,Ne,Pe)}function w(e,t){let n=h.azimuth,r=p===De.PERSPECTIVE?h.distance*.04:h.zoom*.08,i=new z(Math.cos(n),0,-Math.sin(n)),a=new z(-Math.sin(n),0,-Math.cos(n));h.target.addScaledVector(i,e*r),h.target.addScaledVector(a,t*r)}function T(e,t){m=e/t,u.aspect=m,u.updateProjectionMatrix()}function E(e){v&&(v(y),h.target.copy(y)),g.azimuth=Re(g.azimuth,h.azimuth,e),g.elevation=Re(g.elevation,h.elevation,e),g.distance=Re(g.distance,h.distance,e),g.zoom=Re(g.zoom,h.zoom,e),g.target.x=Re(g.target.x,h.target.x,e),g.target.y=Re(g.target.y,h.target.y,e),g.target.z=Re(g.target.z,h.target.z,e);let t=Math.cos(g.elevation),n=Math.sin(g.elevation),r=Math.cos(g.azimuth),i=Math.sin(g.azimuth),a=b();if(a.position.set(g.target.x+g.distance*t*i,g.target.y+g.distance*n,g.target.z+g.distance*t*r),a.lookAt(g.target),a.isOrthographicCamera){let e=g.zoom,t=e*m;a.left=-t,a.right=t,a.top=e,a.bottom=-e,a.updateProjectionMatrix()}}function D(e,t,n,r=!1){h.target.set(e,t,n),r&&g.target.copy(h.target)}function O(e,t=!1){h.zoom=f.clamp(e,Ne,Pe),t&&(g.zoom=h.zoom)}function ee(e,t=!1){h.azimuth=ze(e,g.azimuth),t&&(g.azimuth=h.azimuth)}function te(e,t=!1){h.elevation=f.clamp(e,ke,Ae),t&&(g.elevation=h.elevation)}function k(e,{frame:t,snap:n=!1}={}){v=e,n&&(v(y),h.target.copy(y),g.target.copy(y)),t!=null&&(p===De.PERSPECTIVE?h.distance=f.clamp(t,je,Me):h.zoom=f.clamp(t,Ne,Pe))}function A(){v=null}return{get camera(){return b()},get mode(){return p},get azimuth(){return g.azimuth},get following(){return!!v},setTarget:D,setZoom:O,setFollow:k,clearFollow:A,setAzimuth:ee,setElevation:te,get styleT(){return p===De.PERSPECTIVE?f.clamp((g.distance-Fe)/(Ie-Fe),0,1):f.clamp((g.zoom-q)/(Le-q),0,1)},setMode:x,orbit:S,zoomBy:C,pan:w,setViewport:T,update:E}}var Ve={value:0},He=new F(`#ffffff`),Ue={value:0},We={value:0},Ge={value:0},Ke=new fe,qe={value:0},Je={value:0},J=`
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
`;function Ye(e){e.uniforms.uVector=Ve,e.uniforms.uVecTint={value:He},e.uniforms.uVecShadow=Ue,e.uniforms.uSnow=We,e.uniforms.uCloud=Ge,e.uniforms.uCloudOff={value:Ke},e.uniforms.uFogCharm=qe}function Xe(e){return e.replace(`#include <fog_fragment>`,`
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
  `)}function Ze(e){return e.replace(`#include <common>`,`#include <common>
varying vec3 vVecN;
varying vec3 vVecP;
varying vec2 vWorldXZ;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
  vVecN = normal;
  vVecP = position;
  vWorldXZ = (modelMatrix * vec4(position, 1.0)).xz;`)}function Qe(e){return e.replace(`#include <shadowmap_pars_fragment>`,`#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>`)}var $e=`col *= mix(1.0, getShadowMask(), uVecShadow);`;function et(e,{color:t,id:n,windowGlow:r,winColors:i=[`#ffb852`,`#8cd9ff`],litFrac:a=.55}={}){let o=[0,1,2].map(e=>new F(i[e]??i[i.length-1]));return e.customProgramCacheKey=()=>`lgr-vec-tower`,e.onBeforeCompile=e=>{Ye(e),e.uniforms.uWindowGlow=r,e.uniforms.uWinId={value:n},e.uniforms.uVecColor={value:new F(t)},e.uniforms.uWinA={value:o[0]},e.uniforms.uWinB={value:o[1]},e.uniforms.uWinC={value:o[2]},e.uniforms.uWinLit={value:a},e.vertexShader=Ze(e.vertexShader),e.fragmentShader=Xe(Qe(e.fragmentShader.replace(`#include <common>`,`#include <common>
        uniform float uWindowGlow;
        uniform float uWinId;
        uniform vec3  uVecColor;
        uniform vec3  uWinA; uniform vec3 uWinB; uniform vec3 uWinC;
        uniform float uWinLit;
        ${J}
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
        }`).replace(`#include <color_fragment>`,`#include <color_fragment>
        {
          // winTerms() returns (paneMask, litTonight); we want the day pane mask here. It already
          // restricts itself to vertical faces (roofs/underside excluded), so roof caps stay clean.
          vec3 wcolL; vec2 wL = winTerms(wcolL);
          float bvar = 0.80 + 0.20 * fract(uWinId * 0.131);          // per-building tonal break (0.80..1.0)
          diffuseColor.rgb *= bvar;                                   // …pulls light creams off pure white
          vec3 dayGlass = diffuseColor.rgb * 0.40 + vec3(0.045, 0.065, 0.10);  // darker, cooler glass panes
          diffuseColor.rgb = mix(diffuseColor.rgb, dayGlass, wL.x * 0.85);      // mullions keep the wall colour
        }`).replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>
        {
          vec3 wcol; vec2 w = winTerms(wcol);
          totalEmissiveRadiance += w.x * w.y * wcol * uWindowGlow * 1.8;
        }`).replace(`#include <opaque_fragment>`,`#include <opaque_fragment>
        if (uVector > 0.5) {
          vec3 col = vecShade(uVecColor);
          ${$e}                                  // the sun's shadow darkens the body
          vec3 wcol; vec2 w = winTerms(wcol);
          vec3 glass = vec3(0.17, 0.23, 0.34);          // dark glass-blue panes (day)
          col = mix(col, glass, w.x * 0.85);
          col += w.x * w.y * wcol * uWindowGlow * 1.5;  // …windows EMIT (unshadowed) at night
          gl_FragColor = vec4(col, diffuseColor.a);
        }`)))},e}function Y(e,{color:t=null,glow:n=null,glowDay:r=0,glowNight:i=1,windowGlow:a=null,season:o=!1}={}){let s=t===null,c=n!==null&&a!==null;return e.customProgramCacheKey=()=>`lgr-vec|`+(s?`d`:`c`)+(c?`g`:``)+(o?`s`:``),e.onBeforeCompile=e=>{Ye(e),s||(e.uniforms.uVecColor={value:new F(t)}),c&&(e.uniforms.uGlow={value:new F(n)},e.uniforms.uGlowDay={value:r},e.uniforms.uGlowNight={value:i},e.uniforms.uWindowGlow=a),o&&(e.uniforms.uSeason=Je),e.vertexShader=Ze(e.vertexShader);let l=s?`diffuseColor.rgb`:`uVecColor`,u=o?`seasonShift(${l})`:l,d=(s?``:`uniform vec3 uVecColor;
`)+(c?`uniform vec3 uGlow; uniform float uGlowDay; uniform float uGlowNight; uniform float uWindowGlow;
`:``)+(o?`uniform float uSeason;
vec3 seasonShift(vec3 c){
  c = mix(c, vec3(0.86, 0.46, 0.13), smoothstep(0.40, 0.70, uSeason));   // → autumn orange
  c = mix(c, vec3(0.46, 0.33, 0.20), smoothstep(0.75, 1.00, uSeason));   // → bare brown
  return c;
}
`:``),f=c?`uGlow * mix(uGlowDay, uGlowNight, uWindowGlow)`:`vec3(0.0)`,p=Xe(Qe(e.fragmentShader.replace(`#include <common>`,`#include <common>
`+d+J).replace(`#include <opaque_fragment>`,`#include <opaque_fragment>
        if (uVector > 0.5) {
          vec3 col = vecShade(${u});
          ${$e}                            // the sun's shadow darkens the flat tier…
          gl_FragColor = vec4(col + ${f}, diffuseColor.a);  // …but the night glow stays lit
        }`)));c&&(p=p.replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>\n  totalEmissiveRadiance += ${f};`)),e.fragmentShader=p},e}var tt={value:0};function nt(e){return e.customProgramCacheKey=()=>`lgr-ao`,e.onBeforeCompile=e=>{e.uniforms.uAoStrength=tt,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
attribute float aAo;
varying float vAo;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
  vAo = aAo;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying float vAo;
uniform float uAoStrength;`).replace(`#include <dithering_fragment>`,`#include <dithering_fragment>
  gl_FragColor.rgb *= (1.0 - clamp(vAo, 0.0, 1.0) * uAoStrength);`)},e}function rt(e){let t=e>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function it(e){let t=rt(e);return{next:t,range:(e,n)=>e+(n-e)*t(),int:(e,n)=>e+Math.floor(t()*(n-e+1)),pick:e=>e[Math.floor(t()*e.length)],chance:e=>t()<e}}var at=[{key:`manhattan`,name:`Manhattan`,towers:[`#EDE3C8`,`#D9B98A`,`#B5562F`,`#A8C8E8`,`#2E3F5C`],ground:`#7CC455`,street:`#9AA0A6`,sidewalk:`#C8CCD0`,park:`#5DB347`,water:`#29A8D8`,shopfronts:[`#C04A3A`,`#3A7AC0`,`#C09A2A`],glass:`#7FA8CC`,winColors:[`#ffd27a`,`#9ad6ff`],hMax:4.6,sigma:.36,roofRate:.35,pSplit:.6,nightLit:.55,roofTint:null,coast:{base:.55,out:1,in:.6,jag:1.05},landmarks:[`empireState`,`chrysler`,`liberty`]},{key:`paris`,name:`Paris`,towers:[`#E8DCC0`,`#F2EAD6`,`#E0D2B4`],ground:`#8CC46A`,street:`#A8A29A`,sidewalk:`#D4CEC2`,park:`#6DB35A`,water:`#3FA8C8`,shopfronts:[`#C04A3A`,`#3A6B5A`,`#7A5AC0`],glass:`#5A6B7A`,winColors:[`#ffdca0`,`#ffcaa0`],hMax:1.5,sigma:.9,roofRate:.15,pSplit:.75,nightLit:.45,roofTint:`#6A7886`,coast:{base:1.05,out:.55,in:.3,jag:.5},landmarks:[`eiffel`,`arcDeTriomphe`,`sacreCoeur`]},{key:`neoTokyo`,name:`Neo-Tokyo`,towers:[`#2A3038`,`#3A4250`,`#252B36`,`#4A4456`],ground:`#3A4A42`,street:`#5A6068`,sidewalk:`#7A8088`,park:`#2E5E46`,water:`#0E6878`,shopfronts:[`#E8483A`,`#5AE8E0`,`#E85AA0`],glass:`#5AE8E0`,winColors:[`#5AE8E0`,`#E85AA0`,`#E8E06A`],hMax:5.2,sigma:.42,roofRate:.6,pSplit:.6,nightLit:.7,roofTint:null,coast:{base:.7,out:1.05,in:.62,jag:1.7},landmarks:[`tokyoTower`,`pagoda`,`neonBillboard`]}];at.map(e=>e.key);var ot=.3,st=1.9,ct=.55,lt=2.45,ut=.12,dt=.6,ft=6,pt={BASE:.7,OUT:.95,IN:.55,JAG:1,SAMPLES_PER_EDGE:28,HARBOR_DEPTH:.55,HARBOR_WIDTH:.26},mt={PLINTH_TOP:ot,BLOCK:st,STREET:ct,PITCH:lt,SIDEWALK:ut,SHORE:dt,N:ft,COAST:pt};function ht(e,t,n){let r=n?.base??pt.BASE,i=n?.out??pt.OUT,a=n?.in??pt.IN,o=n?.jag??pt.JAG,s=t+r,c=it((e^789079)>>>0),l=[2,3,5,8,11,13].map(e=>({k:e,amp:1/e*o**((e-2)/6),phase:c.range(0,Math.PI*2)})),u=l.reduce((e,t)=>e+t.amp,0),d=e=>{let t=0;for(let n of l)t+=n.amp*Math.sin(n.k*e*Math.PI*2+n.phase);return Math.max(-1,Math.min(1,t/(u*.6)))},f=[{fix:+s,nx:1,nz:0,sign:1},{fix:+s,nx:0,nz:1,sign:-1},{fix:-s,nx:-1,nz:0,sign:-1},{fix:-s,nx:0,nz:-1,sign:1}],p=t+.22,m=pt.SAMPLES_PER_EDGE,h=4*m,g=[],_=0;for(let e=0;e<4;e++){let t=f[e];for(let n=0;n<m;n++,_++){let o=n/m,c=_/h,l=(-s+2*s*o)*t.sign,u=d(c),f=u>=0?u*i:u*a;if(e===0){let e=Math.abs(o-.5);if(e<pt.HARBOR_WIDTH){let t=.5+.5*Math.cos(e/pt.HARBOR_WIDTH*Math.PI);f-=(r+pt.HARBOR_DEPTH)*t}}let v,y;t.nx===0?(y=t.fix+t.nz*f,v=l,y=t.nz>0?Math.max(y,p):Math.min(y,-p)):(v=t.fix+t.nx*f,y=l,v=t.nx>0?Math.max(v,p):Math.min(v,-p)),g.push(new fe(v,y))}}return{points:g,B:s,maxR:s+i,harborX:p}}function gt(e){(Array.isArray(e)?e:[e]).forEach(e=>e&&e.dispose&&e.dispose())}function _t({seed:e=1,profileIndex:t=0,landmarkFactory:r=null,windowGlow:i}){let o=new a,s=new a,l=new a;s.raycast=()=>{},l.raycast=()=>{},o.add(s,l);let u=new te(16773594,3);u.position.set(.45,.6,-.65).multiplyScalar(10);let d=new h(7313331,2762272,1);o.add(u,d);let f=0,p=[],m={seed:e,profileIndex:t,profile:at[t],extent:0,meshCount:0};function g(e,t,r,i){let a=new n(new H(e,.04,t),Y(new c({color:i,roughness:.95,flatShading:!0}),{color:i}));return a.position.y=r,a.userData.ground=!0,a}function _(e,t){for(let e of s.children)e.geometry&&e.geometry.dispose(),gt(e.material);s.clear();for(let e of l.children)e.traverse(e=>{e.isMesh&&gt(e.material)});l.clear(),p.length=0,f=0;let i=it(e),a=at[t],o=(ft-1)/2*lt,u=7.075;m={seed:e,profileIndex:t,profile:a,extent:u+(a.coast?.base??pt.BASE),meshCount:0};let d=ht(e,u,a.coast);m.coast=d;let h=new ee;d.points.forEach((e,t)=>t?h.lineTo(e.x,e.y):h.moveTo(e.x,e.y)),h.closePath();let _=new n(new y(h,{depth:2,bevelEnabled:!1,steps:1}),Y(new c({color:a.ground,roughness:.9,flatShading:!0,side:2}),{color:a.ground}));_.rotation.x=-Math.PI/2,_.position.y=ot-2,_.userData.ground=!0,s.add(_);let S=2*7.195;s.add(g(S,S,.32,a.street)),C(d.harborX,a);let T=[];for(let e=0;e<ft;e++)for(let t=0;t<ft;t++)T.push([e,t]);let E=new Set,D=Math.max(1,Math.round(T.length*.08));for(;E.size<D;)E.add(i.int(0,T.length-1));let O=i.range(-2.45*.6,lt*.6),te=i.range(-2.45*.6,lt*.6),k=Math.hypot(o,o),A=[];if(T.forEach(([e,t],n)=>{let r=(e-(ft-1)/2)*lt,o=(t-(ft-1)/2)*lt;if(s.add(g(st,st,.32999999999999996,a.sidewalk).translateX(r).translateZ(o)),E.has(n)){s.add(g(st-ut*2,st-ut*2,.35,a.park).translateX(r).translateZ(o));let e=i.int(3,5);for(let t=0;t<e;t++)w(r+i.range(-.6,.6),o+i.range(-.6,.6),a,i);return}let c=st-ut*2,l=i.chance(a.pSplit)?2:1,u=i.chance(a.pSplit)?2:1,d=c/l,f=c/u;for(let e=0;e<l;e++)for(let t=0;t<u;t++){let n=r-c/2+d*(e+.5),s=o-c/2+f*(t+.5),l=Math.max(.6,d-.1),u=Math.max(.6,f-.1),p=Math.hypot(n-O,s-te)/k,m=Math.exp(-(p*p)/(2*a.sigma*a.sigma)),h=Math.max(.5,.5+(a.hMax-.5)*m*i.range(.75,1.25));h>a.hMax*.5&&Math.min(l,u)>=.7&&A.push({lx:n,lz:s,fw:l,fd:u,h,r:p}),v(n,s,l,u,h,a,i)}}),r&&r.ready){A.sort((e,t)=>e.r-t.r);let e=[],t=a.landmarks;for(let n=0;n<t.length&&A.length;n++){let i=null;for(let t of A)if(e.every(e=>Math.hypot(e.lx-t.lx,e.lz-t.lz)>lt*.9)){i=t;break}i||=A[0],e.push(i),b(i.lx,i.lz);let o=a.hMax*r.heightFactor(t[n]),s=r.make(t[n],{x:i.lx,z:i.lz,w:i.fw,d:i.fd,h:o,plinthTop:ot});if(s){l.add(s);let e=new V().setFromObject(s);x(e.min.x-.15,e.max.x+.15,e.min.z-.15,e.max.z+.15)}}}s.traverse(e=>{e.isMesh&&(e.userData.ground?(e.castShadow=!1,e.receiveShadow=!0):e.material&&e.material.isMeshBasicMaterial?(e.castShadow=!1,e.receiveShadow=!1):(e.castShadow=!0,e.receiveShadow=!0))}),l.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),m.meshCount=s.children.length+l.children.length;let ne=0;for(let e of s.children){let t=e.position;ne=(Math.imul(ne,16777619)^(Math.round(t.x*100)*2654435761^Math.round(t.y*100)*40503^Math.round(t.z*100)*2246822519))>>>0}for(let e of m.coast.points)ne=(Math.imul(ne,16777619)^(Math.round(e.x*100)*2654435761^Math.round(e.y*100)*40503))>>>0;m.sig=ne,window.__city={seed:e,profile:a.key,meshes:m.meshCount,sig:ne}}function v(e,t,r,a,o,l,u){let d=et(new c({flatShading:!0,roughness:.7,metalness:.05}),{color:u.pick(l.towers),id:++f,windowGlow:i,winColors:l.winColors,litFrac:l.nightLit}),m=new n(new H(r,o,a),d);if(m.position.set(e,ot+o/2,t),m.userData.lot=[e,t],s.add(m),l.roofTint){let i=Y(new c({color:l.roofTint,roughness:.85,flatShading:!0}),{color:l.roofTint}),u=new n(new H(r*1.02,.08,a*1.02),i);u.position.set(e,ot+o+.04,t),u.userData.lot=[e,t],s.add(u)}if(o<1.4){let i=u.pick(l.shopfronts),o=new n(new H(r*1.04,.18,a*1.04),Y(new c({color:i,roughness:.8,flatShading:!0}),{color:i}));o.position.set(e,.39,t),o.userData.lot=[e,t],s.add(o)}let h=ot+o,g=r,_=a;if(o>l.hMax*.5&&u.chance(.55)){let d=r*u.range(.5,.72),p=a*u.range(.5,.72),m=o*u.range(.18,.4),v=new n(new H(d,m,p),et(new c({flatShading:!0,roughness:.7,metalness:.05}),{color:u.pick(l.towers),id:++f,windowGlow:i,winColors:l.winColors,litFrac:l.nightLit}));v.position.set(e,ot+o+m/2,t),v.userData.lot=[e,t],s.add(v),h=ot+o+m,g=d,_=p}if(o>l.hMax*.45&&u.chance(l.roofRate)){let r=u.chance(.5)?new n(new H(g*.4,.18,_*.4),Y(new c({color:`#9a9a9a`,flatShading:!0}),{color:`#9a9a9a`})):new n(new D(g*.18,g*.18,.22,10),Y(new c({color:`#b9bec4`,flatShading:!0}),{color:`#b9bec4`}));if(r.position.set(e+u.range(-.1,.1),h+.11,t+u.range(-.1,.1)),r.userData.lot=[e,t],s.add(r),u.chance(.25)){let r=new n(new ge(.05,6,5),new S({color:`#ff3b30`,transparent:!0,opacity:1}));r.position.set(e,h+.15,t),r.userData.lot=[e,t],r.raycast=()=>{},s.add(r),p.push({mesh:r,phase:u.range(0,6.28)})}}if(o>l.hMax*.7&&u.chance(.35)){let r=o*u.range(.18,.34),i=new n(new D(.018,.05,r,6),Y(new c({color:`#c8ccd2`,flatShading:!0}),{color:`#c8ccd2`}));i.position.set(e,h+r/2,t),i.userData.lot=[e,t],i.raycast=()=>{},s.add(i)}}function b(e,t){for(let n=s.children.length-1;n>=0;n--){let r=s.children[n];r.userData.lot&&Math.abs(r.userData.lot[0]-e)<1e-4&&Math.abs(r.userData.lot[1]-t)<1e-4&&(r.geometry&&r.geometry.dispose(),gt(r.material),s.remove(r))}for(let e=p.length-1;e>=0;e--)p[e].mesh.parent||p.splice(e,1)}function x(e,t,n,r){for(let i=s.children.length-1;i>=0;i--){let a=s.children[i];a.userData.lot&&a.position.x>=e&&a.position.x<=t&&a.position.z>=n&&a.position.z<=r&&(a.geometry&&a.geometry.dispose(),gt(a.material),s.remove(a))}}function C(e,t){let r=Y(new c({color:`#7a5634`,roughness:.95,flatShading:!0}),{color:`#7a5634`}),i=(e,t,i,a)=>{let o=new n(new H(e,.06,t),r);o.position.set(i,ot-.16,a),s.add(o)};i(.24,2,e+.02,0),i(1.3,.22,e+.7,-.72),i(1.3,.22,e+.7,.72)}function w(e,t,r,i){let a=new F(r.park),o=(r,o)=>{let l=a.clone().offsetHSL(0,0,i.range(-.06,.06)).getStyle(),u=new n(new ge(r,7,6),Y(new c({color:l,flatShading:!0}),{color:l,season:!0}));u.scale.y=.7,u.position.set(e,ot+o,t),u.userData.lot=null,s.add(u)},l=new n(new H(.05,.18,.05),Y(new c({color:`#6b4a2a`,flatShading:!0}),{color:`#6b4a2a`}));l.position.set(e,.39,t),s.add(l),o(.22,.28),o(.16,.46)}function T(e){for(let t of p)t.mesh.material.opacity=.35+.65*(.5+.5*Math.sin(e*3+t.phase))}return _(e,t),{group:o,key:u,fill:d,update:T,generate:_,get state(){return m},get extent(){return m.extent},get waterColor(){return m.profile.water},profiles:at}}var vt=Math.PI*2,yt=.7,bt=90,xt=[{name:`night`,sun:`#4a6f9e`,intensity:.35,hemiSky:`#26344f`,hemiGround:`#0c1018`,horizon:`#1e2942`,sky:`#36486e`,exposure:.95,outline:`#101a30`,window:1,toonGain:2.6,turbidity:3,rayleigh:1,mie:.004,mieG:.75,gradeTint:`#cfd8ec`,gradeSat:.84,gradeLift:`#05070e`,gradeContrast:1},{name:`dawn`,sun:`#ff9e54`,intensity:2.4,hemiSky:`#8a7686`,hemiGround:`#2a1f1a`,horizon:`#b8512c`,sky:`#ffb070`,exposure:1.05,outline:`#241826`,window:.3,toonGain:2,turbidity:6,rayleigh:3,mie:.025,mieG:.86,gradeTint:`#ffe6cf`,gradeSat:1.05,gradeLift:`#0a0603`,gradeContrast:1.04},{name:`noon`,sun:`#fff4e0`,intensity:4.6,hemiSky:`#9cb8cc`,hemiGround:`#33302a`,horizon:`#5e7689`,sky:`#aacadd`,exposure:1.18,outline:`#0b0a08`,window:0,toonGain:1.7,turbidity:1.6,rayleigh:2.9,mie:.005,mieG:.78,gradeTint:`#d6e6f4`,gradeSat:1.34,gradeLift:`#000000`,gradeContrast:1.26},{name:`dusk`,sun:`#ff6b35`,intensity:2,hemiSky:`#7a566a`,hemiGround:`#281a18`,horizon:`#b0432a`,sky:`#ff8a5a`,exposure:1.05,outline:`#1f1420`,window:.4,toonGain:2,turbidity:7,rayleigh:3.2,mie:.028,mieG:.87,gradeTint:`#ffdcc0`,gradeSat:1.06,gradeLift:`#0c0604`,gradeContrast:1.05}],St=e=>e-Math.floor(e),Ct=(e,t,n)=>e+(t-e)*n,wt=(e,t,n)=>e+(t-e)*(1-Math.exp(-6*n));function Tt({t:e=.5}={}){let t=e,n=e,r=!1,i=!1,a=xt.map(e=>({name:e.name,sun:new F(e.sun),hemiSky:new F(e.hemiSky),hemiGround:new F(e.hemiGround),horizon:new F(e.horizon),sky:new F(e.sky),outline:new F(e.outline),intensity:e.intensity,exposure:e.exposure,window:e.window,toonGain:e.toonGain,turbidity:e.turbidity,rayleigh:e.rayleigh,mie:e.mie,mieG:e.mieG,gradeTint:new F(e.gradeTint),gradeLift:new F(e.gradeLift),gradeSat:e.gradeSat,gradeContrast:e.gradeContrast})),o=new z(0,1,0),s=new F(`#fff4e0`),c=new F(`#6f97b3`),l=new F(`#2a2620`),u=new F(`#3a4a57`),d=new F(`#7da3bd`),f=new F(`#0b0a08`),p=new F(`#000000`),m=3,h=1,g=0,_=1.7,v={turbidity:2.2,rayleigh:1.3,mie:.005,mieG:.78},y={tint:new F(`#fafdff`),lift:new F(`#000000`),sat:1.08,contrast:1},b=new z;function x(e){let t=St(e)*4,n=Math.floor(t)%4,r=(n+1)%4,i=t-Math.floor(t),x=a[n],S=a[r];s.lerpColors(x.sun,S.sun,i),c.lerpColors(x.hemiSky,S.hemiSky,i),l.lerpColors(x.hemiGround,S.hemiGround,i),u.lerpColors(x.horizon,S.horizon,i),d.lerpColors(x.sky,S.sky,i),f.lerpColors(x.outline,S.outline,i),m=Ct(x.intensity,S.intensity,i),h=Ct(x.exposure,S.exposure,i),g=Ct(x.window,S.window,i),_=Ct(x.toonGain,S.toonGain,i),v.turbidity=Ct(x.turbidity,S.turbidity,i),v.rayleigh=Ct(x.rayleigh,S.rayleigh,i),v.mie=Ct(x.mie,S.mie,i),v.mieG=Ct(x.mieG,S.mieG,i),y.tint.lerpColors(x.gradeTint,S.gradeTint,i),y.lift.lerpColors(x.gradeLift,S.gradeLift,i),y.sat=Ct(x.gradeSat,S.gradeSat,i),y.contrast=Ct(x.gradeContrast,S.gradeContrast,i),p.setRGB(.045*g,.075*g,.14*g);let C=St(e)*vt-Math.PI/2,w=Math.cos(C),T=Math.sin(C);b.set(w,T*Math.cos(yt),T*Math.sin(yt)),b.y>=0?o.copy(b):o.copy(b).negate()}return x(t),{sunDir:o,sunColor:s,hemiSky:c,hemiGround:l,horizon:u,sky:d,outline:f,toonFloor:p,skyParams:v,grade:y,sunArc:b,get sunIntensity(){return m},get exposure(){return h},get windowGlow(){return g},get toonGain(){return _},get t(){return St(t)},get auto(){return r},get clock(){let e=Math.round(St(t)*24*60)%1440;return`${String(Math.floor(e/60)).padStart(2,`0`)}:${String(e%60).padStart(2,`0`)}`},cyclePreset(){n=(Math.floor(t*4+1e-4)+1)/4},nudge(e){n+=e/24},goTo(e){n=e},toggleAuto(){r=!r},setReducedMotion(e){i=e},update(e){r&&!i&&(n+=e/bt),t=wt(t,n,e),x(t)}}}function Et(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.35,`rgba(255,255,255,0.55)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new U(e);return r.colorSpace=B,r}function Dt(e,t){let n=[];for(let r=0;r<16;r++){let i=r/16*Math.PI*2;n.push(new z(Math.cos(i)*e,t,Math.sin(i)*e))}return new M(n,!0,`catmullrom`,.5)}function Ot(e){let t=(t,n)=>Math.exp(-((e-t)*(e-t))/(2*n*n)),n=Math.max(t(.33,.05),t(.75,.06)),r=f.smoothstep(e,.24,.3)*(1-f.smoothstep(e,.8,.88));return f.clamp(.15+.55*r+.45*n,.12,1)}function kt(){let{PITCH:e,N:t,PLINTH_TOP:n}=mt,r=t+1,i=n+.04,a=n=>(n-t/2)*e,o=t/2,s=[],c=(e,t)=>t*r+e;for(let e=0;e<r;e++)for(let t=0;t<r;t++)s.push({x:a(t),z:a(e),i:t,j:e,edges:[]});let l=[],u=(t,n)=>{let r=(s[t].i===o||s[t].j===o)&&(s[n].i===o||s[n].j===o),i=l.length;l.push({a:t,b:n,len:e,main:r}),s[t].edges.push(i),s[n].edges.push(i)};for(let e=0;e<r;e++)for(let t=0;t<r;t++)t<r-1&&u(c(t,e),c(t+1,e)),e<r-1&&u(c(t,e),c(t,e+1));return{nodes:s,edges:l,y:i,mid:o}}function At({plinthTop:e=.3,extent:t=4,profile:n=null}={}){let r=new a,i=kt(),{nodes:o,edges:s}=i,l=i.y,u=.34,d=0;{let e=mt.PITCH-u*2;d=Math.max(1,Math.floor((e+.26)/.56))}let p=new S({color:`#e8c84a`,fog:!0}),m=new L(new H(.05,.012,.3),p,s.length*d);m.frustumCulled=!1,m.raycast=()=>{},m.receiveShadow=!1,m.castShadow=!1,r.add(m);{let e=new C,t=0;for(let n of s){let r=o[n.a],i=o[n.b],a=i.x-r.x,s=i.z-r.z,c=Math.hypot(a,s),f=a/c,p=s/c,h=Math.atan2(f,p),g=c-u*2;for(let n=0;n<d;n++){let i=u+(d===1?g/2:g*n/(d-1));e.position.set(r.x+f*i,l,r.z+p*i),e.rotation.set(0,h,0),e.updateMatrix(),m.setMatrixAt(t++,e.matrix)}}m.instanceMatrix.needsUpdate=!0}let h=new L(new H(.34,.26,.74),Y(new c({flatShading:!0,roughness:.5,metalness:.3})),12);h.castShadow=!0,h.receiveShadow=!1,h.frustumCulled=!1,h.raycast=()=>{};let g=new se,_=new Float32Array(72),v=new Float32Array(72),y=new F(`#fff0c0`),b=new F(`#ff3528`);for(let e=0;e<12;e++)y.toArray(v,e*3),b.toArray(v,(12+e)*3),_[e*3+1]=-50,_[(12+e)*3+1]=-50;g.setAttribute(`position`,new k(_,3)),g.setAttribute(`color`,new k(v,3));let x=new E({size:.72,sizeAttenuation:!0,map:Et(),vertexColors:!0,transparent:!0,opacity:0,blending:2,depthWrite:!1}),T=new w(g,x);T.frustumCulled=!1,T.raycast=()=>{},r.add(h,T);let D=[`#f4c430`,`#c0392b`,`#d8dde2`,`#9aa7b4`,`#6b7785`,`#5a7d9a`],O=rt(2403557),ee=s.map((e,t)=>t).filter(e=>s[e].main),te=[];for(let e=0;e<12;e++){let t=e<4&&ee.length?ee[O()*ee.length|0]:O()*s.length|0,n=e===1;te.push({edge:t,fwd:O()<.5,s:O()*s[t].len,speed:n?.5:.78+e%3*.1,lenZ:n?1.45:1,color:D[n?1:e===0?0:2+e%4],rng:rt(12648430+e*2654435761),isBus:n,pos:new z,dirX:0,dirZ:1,active:!1})}let A=new F;te.forEach((e,t)=>h.setColorAt(t,A.set(e.color)));function re(e,t,n){let r=o[e],i=r.edges.filter(e=>e!==t);if(i.length===0)return t;let a=s[t],c=a.a===e?a.b:a.a,l=r.x-o[c].x,u=r.z-o[c].z,d=Math.hypot(l,u)||1,f=i[0],p=-2;for(let t of i){let n=s[t],i=n.a===e?n.b:n.a,a=o[i].x-r.x,c=o[i].z-r.z,m=Math.hypot(a,c)||1,h=l/d*(a/m)+u/d*(c/m);h>p&&(p=h,f=t)}return n()<.65?f:i[n()*i.length|0]}let j=re,M=new C,N=(e,t)=>{M.position.set(0,-50,0),M.scale.setScalar(0),M.updateMatrix(),e.setMatrixAt(t,M.matrix)},P=.085,I=mt.PLINTH_TOP+.02+.13,ie=new L(new ne(.04,.1,3,6),Y(new c({flatShading:!0,roughness:.8})),14);ie.castShadow=!0,ie.receiveShadow=!1,ie.frustumCulled=!1,ie.raycast=()=>{};let ae=Dt(t-.72,e),oe=[];for(let e=0;e<14;e++)oe.push({phase:e/14,speed:.12+e%4*.02,dir:e%2?1:-1,pos:new z,active:!1});let R=new z,ce=new z,le=new F;oe.forEach((e,t)=>ie.setColorAt(t,le.set([`#caa`,`#9ab`,`#bba`,`#ab9`][t%4]))),r.add(ie);let B={manhattan:`#e8c84a`,paris:`#dcd2bc`,neoTokyo:`#5ae8e0`};function V(e){e&&p.color.set(B[e.key]||`#e8c84a`)}V(n);function ue(t,n,r){let i=r?r.t:.5,a=r?r.windowGlow:0,c=Math.max(2,Math.round(Ot(i)*12)),l=a>.05;for(let e=0;e<12;e++){if(e>=c){N(h,e),te[e].active=!1,_[e*3+1]=-50,_[(12+e)*3+1]=-50;continue}let n=te[e];n.s+=t*n.speed;let r=0;for(;n.s>=s[n.edge].len&&r++<4;){n.s-=s[n.edge].len;let e=n.fwd?s[n.edge].b:s[n.edge].a,t=j(e,n.edge,n.rng);n.edge=t,n.fwd=s[t].a===e}let i=s[n.edge],a=n.fwd?o[i.a]:o[i.b],u=n.fwd?o[i.b]:o[i.a],d=u.x-a.x,f=u.z-a.z,p=Math.hypot(d,f)||1,m=d/p,g=f/p,v=-g,y=m,b=a.x+m*n.s+v*P,x=a.z+g*n.s+y*P,S=Math.atan2(m,g);M.position.set(b,I,x),M.rotation.set(0,S,0),M.scale.set(1,1,n.lenZ),M.updateMatrix(),h.setMatrixAt(e,M.matrix),n.pos.set(b,I,x),n.dirX=m,n.dirZ=g,n.active=!0;let C=.74*n.lenZ*.5,w=I+.06,T=e*3,E=(12+e)*3;l?(_[T]=b+m*(C+.04),_[T+1]=w,_[T+2]=x+g*(C+.04),_[E]=b-m*(C+.02),_[E+1]=w,_[E+2]=x-g*(C+.02)):(_[T+1]=-50,_[E+1]=-50)}h.instanceMatrix.needsUpdate=!0,g.attributes.position.needsUpdate=!0,x.opacity=f.clamp(a*1.8,0,1);let u=Math.max(2,Math.round(Ot(i)*14));for(let t=0;t<14;t++){if(t>=u){N(ie,t),oe[t].active=!1;continue}let r=oe[t],i=(r.phase+r.dir*r.speed*n*.02+1e3)%1;ae.getPointAt(i,R),ae.getTangentAt(i,ce);let a=Math.sin(n*6+r.phase*30)*.015;M.position.set(R.x,e+.09+a,R.z),M.rotation.set(0,Math.atan2(ce.x*r.dir,ce.z*r.dir),Math.sin(n*6+r.phase*30)*.06),M.scale.setScalar(1),M.updateMatrix(),ie.setMatrixAt(t,M.matrix),r.pos.set(R.x,e+.09,R.z),r.active=!0}ie.instanceMatrix.needsUpdate=!0}let de=[...te.map((e,t)=>({kind:`car`,label:e.isBus?`bus`:`car ${t+1}`,getWorldPos:t=>t.copy(e.pos),active:()=>e.active,info:()=>`${e.isBus?`bus`:`car`} · ${s[e.edge].main?`main avenue`:`side street`} → heading ${jt(e.dirX,e.dirZ)}`})),...oe.map((e,t)=>({kind:`person`,label:`person ${t+1}`,getWorldPos:t=>t.copy(e.pos),active:()=>e.active,info:()=>`person · strolling the waterfront promenade`}))];function fe(){return de}return{group:r,update:ue,setProfile:V,getFollowables:fe,graph:i,setRouter(e){j=e||re}}}function jt(e,t){return[`N`,`NE`,`E`,`SE`,`S`,`SW`,`W`,`NW`][(Math.round(Math.atan2(e,t)/(Math.PI/4))%8+8)%8]}function Mt({frames:e,fps:t=8,cols:n,rows:r=1}={}){let i=n||e||4,a=r||1,o=e||i*a,s=typeof window<`u`&&window.matchMedia?window.matchMedia(`(prefers-reduced-motion: reduce)`):null;function c(e,t){let n=t%i,r=Math.floor(t/i);e.offset.x=n/i,e.offset.y=1-(r+1)/a}function l(e){let t=e.clone();return t.needsUpdate=!0,t.repeat.set(1/i,1/a),c(t,0),t}function u(e,n,r=0){if(s&&s.matches)return c(e,0),0;let i=(Math.floor(n*t+r)%o+o)%o;return c(e,i),i}function d(e,t){let n=(Math.round(t)%o+o)%o;return c(e,n),n}return{frames:o,fps:t,cols:i,rows:a,makeInstanceTexture:l,step:u,setFrame:d}}function Nt(e){if(typeof document>`u`||!e||!e.image)return e;let t=e.image,n=t.width||t.naturalWidth,r=t.height||t.naturalHeight,i=document.createElement(`canvas`);i.width=n,i.height=r;let a=i.getContext(`2d`,{willReadFrequently:!0});a.drawImage(t,0,0,n,r);let o=a.getImageData(0,0,n,r),s=o.data;for(let e=0;e<s.length;e+=4){let t=s[e]*.299+s[e+1]*.587+s[e+2]*.114|0;s[e]=s[e+1]=s[e+2]=t}a.putImageData(o,0,0);let c=new U(i);return c.colorSpace=e.colorSpace||`srgb`,c}function Pt({url:e,fallback:t,luminance:n=!1,onReady:r}={}){let i=n?Nt(t):t;return e&&typeof window<`u`&&new re().load(e,e=>{e.colorSpace=B,r&&r(n?Nt(e):e)},void 0,()=>{}),i}var Ft=``+new URL(`gull_diffusion_sheet-BMlUTLhu.png`,import.meta.url).href;function It(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.4,`rgba(255,255,255,0.5)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new U(e);return r.colorSpace=B,r}function Lt(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64*.62,0,64/2,64*.62,64*.5);n.addColorStop(0,`rgba(240,250,255,0.95)`),n.addColorStop(1,`rgba(240,250,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new U(e);return r.colorSpace=B,r}function Rt(){let e=document.createElement(`canvas`);e.width=256,e.height=64;let t=e.getContext(`2d`);t.strokeStyle=`#ffffff`,t.lineWidth=6,t.lineCap=`round`,t.lineJoin=`round`;let n=[14,24,36,24];for(let e=0;e<4;e++){let r=e*64,i=n[e];t.beginPath(),t.moveTo(r+8,40),t.quadraticCurveTo(r+24,i,r+32,36),t.quadraticCurveTo(r+40,i,r+56,40),t.stroke()}let r=new U(e);return r.colorSpace=B,r}function zt(e,t,n=18){let r=[];for(let i=0;i<n;i++){let a=i/n*Math.PI*2;r.push(new z(Math.cos(a)*e,t,Math.sin(a)*e))}return new M(r,!0,`catmullrom`,.5)}function Bt(e,t,n){let r=e-t,i=[],a=(e,t)=>i.push(new z(e,n,t)),o=(e,n,r,i,o=4)=>{for(let s=1;s<=o;s++){let c=r+(i-r)*(s/o);a(e+Math.cos(c)*t,n+Math.sin(c)*t)}};for(let t=0;t<4;t++)a(e,-r+2*r*t/4);o(r,r,0,Math.PI/2);for(let t=0;t<4;t++)a(r-2*r*t/4,e);o(-r,r,Math.PI/2,Math.PI);for(let t=0;t<4;t++)a(-e,r-2*r*t/4);o(-r,-r,Math.PI,1.5*Math.PI);for(let t=0;t<4;t++)a(-r+2*r*t/4,-e);return o(r,-r,1.5*Math.PI,2*Math.PI),new M(i,!0,`catmullrom`,.5)}function Vt({extent:e=8,waterSize:t=28,plinthTop:r=.3}={}){let i=new a;i.raycast=()=>{};let o=.06,s=(e,n,r)=>r.set(e/t+.5,-n/t+.5,0),l=[Bt(9.5,3,o),zt(12.7,o),new M([new z(8.4,o,0),new z(11,o,-3.6),new z(13,o,0),new z(11,o,3.6)],!0,`catmullrom`,.5)],u=l.map(e=>e.getLength());function d({scale:e=1,hull:t=`#6b7785`,cabin:r=`#e7ecf2`}){let i=new a,o=new n(new H(.46*e,.2*e,1.1*e),Y(new c({color:t,roughness:.6,metalness:.2,flatShading:!0}),{color:t}));o.position.y=.02;let s=new n(new H(.3*e,.22*e,.42*e),Y(new c({color:r,roughness:.7,flatShading:!0}),{color:r}));return s.position.set(0,.18*e,.08*e),i.add(o,s),i.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!1),e.raycast=()=>{}}),i.userData.halfLen=.55*e,i}let p=[{laneIndex:0,dir:1,speed:.5,wake:.024,scale:1,hull:`#5a6675`,cabin:`#e7ecf2`},{laneIndex:1,dir:-1,speed:.42,wake:.022,scale:1,hull:`#7a5b46`,cabin:`#d9c3a6`},{laneIndex:0,dir:1,speed:.56,wake:.024,scale:.9,hull:`#456079`,cabin:`#cfe0ee`},{laneIndex:2,dir:1,speed:.34,wake:.03,scale:1.35,hull:`#39505f`,cabin:`#e2b85a`}];p.forEach((e,t)=>{e.mesh=d(e),e.u=t*.27%1,e.phase=t*1.7,e.isFerry=e.laneIndex===2,i.add(e.mesh)});let m=p.length,h=m*2,g=new se,_=new Float32Array(h*3).fill(-50),v=new Float32Array(h*3),y=new F(`#fff0c0`),b=new F(`#ff3528`);for(let e=0;e<m;e++)y.toArray(v,e*3),b.toArray(v,(m+e)*3);g.setAttribute(`position`,new k(_,3)),g.setAttribute(`color`,new k(v,3));let x=new w(g,new E({size:.6,sizeAttenuation:!0,map:It(),vertexColors:!0,transparent:!0,opacity:0,blending:2,depthWrite:!1}));x.frustumCulled=!1,x.raycast=()=>{},i.add(x);function S(e,t){let r=new n(new ge(e,9,7),Y(new c({color:t,roughness:.5,flatShading:!0}),{color:t}));return r.scale.set(.55,.5,1),r.castShadow=!1,r.receiveShadow=!1,r.raycast=()=>{},r.position.y=-5,r}let C=[{x:-9.5,z:6,size:.18,color:`#5b6f86`,period:11,arcH:.55,span:1.1,whale:!1},{x:7.5,z:-9.5,size:.16,color:`#4a6076`,period:14,arcH:.5,span:1,whale:!1},{x:-7,z:-8.5,size:.2,color:`#607089`,period:9,arcH:.6,span:1.2,whale:!1},{x:10.5,z:7,size:.62,color:`#3a4350`,period:38,arcH:.9,span:2.6,whale:!0}];C.forEach((e,t)=>{e.mesh=S(e.size,e.color),e.heading=Math.atan2(-e.x,-e.z),e.t=t/C.length*e.period,e.splashed=!1,i.add(e.mesh),e.whale&&(e.spout=new R(new ye({map:Lt(),transparent:!0,opacity:0,depthWrite:!1,fog:!0})),e.spout.scale.set(.6,1.1,1),e.spout.position.set(e.x,-5,e.z),i.add(e.spout))});let T=Mt({frames:4,fps:7}),D=[`#ffffff`,`#cfd4da`,`#c8a06a`],O=[],ee=Pt({url:Ft,fallback:Rt(),luminance:!0,onReady:e=>{ee=e;for(let t of O){let n=t.sp.material.map;t.sp.material.map=T.makeInstanceTexture(e),t.sp.material.needsUpdate=!0,n&&n.dispose()}typeof window<`u`&&(window.__gullSheet=`diffusion`)}});for(let e=0;e<4;e++){let t=new R(new ye({map:T.makeInstanceTexture(ee),color:new F(D[e%D.length]),transparent:!0,opacity:0,depthWrite:!1,fog:!0}));t.scale.setScalar(.5),O.push({sp:t,r:8.6+e*.5,y:1.1+e%2*.5,speed:(.18+e*.03)*(e%2?-1:1),phase:e*1.9}),i.add(t)}typeof window<`u`&&(window.__gullSheet=window.__gullSheet||`procedural`,window.__gullAnim={frames:T.frames,variants:D.length,fps:T.fps});let te=C.length,A=Array.from({length:m+te},()=>new z),ne=e=>e.laneIndex,re=new z,j=new z,N=new z;function P(e,t,n){let r=n?n.windowGlow:0,i=1-r;for(let n=0;n<m;n++){let i=p[n],a=l[i.laneIndex],c=u[i.laneIndex],d=i.isFerry?.45+.55*Math.min(1,Math.abs((i.u+.5)%1-.5)*3):1,f=i.u;i.u=(i.u+i.dir*e*i.speed*d/c+1)%1,(i.dir>0?i.u<f:i.u>f)&&(i.laneIndex=ne(i)),a.getPointAt(i.u,re),a.getTangentAt(i.u,j);let h=j.x*i.dir,g=j.z*i.dir,v=Math.atan2(h,g),y=Math.sin(t*1.1+i.phase)*.025;i.mesh.position.set(re.x,o+y,re.z),i.mesh.rotation.set(Math.sin(t*.9+i.phase)*.04,v,0);let b=i.mesh.userData.halfLen;s(re.x-h*b,re.z-g*b,N),A[n].set(N.x,N.y,i.wake);let x=n*3,S=(m+n)*3;if(r>.05){let e=.18;_[x]=re.x+h*(b+.05),_[x+1]=e,_[x+2]=re.z+g*(b+.05),_[S]=re.x-h*(b+.02),_[S+1]=e,_[S+2]=re.z-g*(b+.02)}else _[x+1]=-50,_[S+1]=-50}I(),x.material.opacity=f.clamp(r*1.8,0,1);for(let t=0;t<te;t++){let n=C[t];n.t+=e;let r=m+t,i=n.whale?3.2:1.3;if(n.t>=n.period){let e=(n.t-n.period)/i;if(e>=1){n.t=0,n.splashed=!1,n.mesh.position.y=-5,n.spout&&(n.spout.material.opacity=0),A[r].set(0,0,0);continue}let t=Math.sin(Math.PI*e),a=(e-.5)*n.span,c=n.x+Math.sin(n.heading)*a,l=n.z+Math.cos(n.heading)*a;n.mesh.position.set(c,o-.1+t*n.arcH,l),n.mesh.rotation.set(Math.cos(Math.PI*e)*.9,n.heading,0);let u=e<.16||e>.84;if(s(c,l,N),A[r].set(N.x,N.y,u?n.whale?.07:.05:0),n.spout){let t=f.clamp((e-.15)*3,0,1)*(1-e);n.spout.position.set(c,.56+t*.6,l),n.spout.material.opacity=t*.9}}else n.mesh.position.y=-5,A[r].set(0,0,0),n.spout&&(n.spout.material.opacity=0)}for(let e=0;e<4;e++){let n=O[e],r=n.phase+t*n.speed*.25;n.sp.position.set(Math.cos(r)*n.r,n.y+Math.sin(t*1.4+n.phase)*.12,Math.sin(r)*n.r),n.sp.material.opacity=f.clamp(i*.9-.05,0,.85);let a=T.step(n.sp.material.map,t,n.phase);e===0&&typeof window<`u`&&(window.__gullFrame=a)}if(typeof window<`u`){let e=0;for(let t of C)t.mesh.position.y>o&&e++;window.__waterLife={boats:m,breaching:e,gulls:+O[0].sp.material.opacity.toFixed(2),lights:+x.material.opacity.toFixed(2)}}}function I(){g.attributes.position.needsUpdate=!0}function ie(){return A.length}let ae=[...p.map((e,t)=>({kind:`boat`,label:e.isFerry?`ferry`:`boat ${t+1}`,getWorldPos:t=>t.copy(e.mesh.position),info:()=>e.isFerry?`boat · harbor ferry → docks`:`boat · open-water lane ${e.laneIndex}`})),...O.map((e,t)=>({kind:`gull`,label:`gull ${t+1}`,getWorldPos:t=>t.copy(e.sp.position),active:()=>e.sp.material.opacity>.05,info:()=>`gull · circling the coast`})),...C.map((e,t)=>({kind:`fish`,label:e.whale?`whale`:`fish ${t+1}`,getWorldPos:t=>t.copy(e.mesh.position),active:()=>e.mesh.position.y>o-.3,info:()=>e.mesh.position.y>o?e.whale?`whale · breaching!`:`fish · breaching!`:`fish · below the surface`}))];function L(){return ae}return{group:i,update:P,getFollowables:L,wakeDrops:A,get wakeCount(){return ie()},lanes:l,setRouter(e){ne=e||(e=>e.laneIndex)}}}var Ht=[`empireState`,`chrysler`,`liberty`,`eiffel`,`arcDeTriomphe`,`sacreCoeur`,`tokyoTower`,`pagoda`,`neonBillboard`],X={empireState:1.25,chrysler:1.1,liberty:.55,eiffel:3.2,arcDeTriomphe:1.5,sacreCoeur:1.75,tokyoTower:1.35,pagoda:.5,neonBillboard:.9};function Ut(e){let t=()=>new c({flatShading:!0,roughness:.7,metalness:.1}),r=(n,r={})=>r.windows?et(t(),{color:n,id:e.id(),windowGlow:e.windowGlow,winColors:e.winColors,litFrac:e.litFrac}):Y(t(),{color:n,glow:r.glow??null,glowDay:r.glowDay??0,glowNight:r.glowNight??1,windowGlow:r.glow?e.windowGlow:null});return{box:(e,t,i,a,o={})=>new n(new H(e,t,i),r(a,o)),cyl:(e,t,i,a,o={})=>new n(new D(e,t,i,o.seg||12),r(a,o)),cone:(e,t,i,a={})=>new n(new P(e,t,a.seg||8),r(i,a)),sphere:(e,t,i={})=>new n(new ge(e,i.seg||12,i.seg2||8),r(t,i)),lathe:(e,t,i={})=>new n(new p(e.map(e=>new fe(e[0],e[1])),i.seg||4),r(t,i))}}var Z=(e,t,n,r)=>(e.position.set(t,n,r),e),Wt=[`#7FB0E0`,`#E07FB0`,`#7FE0A0`,`#E0C97F`,`#9FE07F`,`#7FE0E0`,`#FF8C42`,`#E0E07F`,`#C97FE0`,`#E07F7F`,`#7F9FE0`,`#E0483A`],Gt={empireState(e,t){let n=`#E8E0CF`;e.add(Z(t.box(.42,.18,.42,n,{windows:!0}),0,.09,0)),e.add(Z(t.box(.34,.16,.34,n,{windows:!0}),0,.26,0)),e.add(Z(t.box(.26,.14,.26,n,{windows:!0}),0,.41,0)),e.add(Z(t.box(.19,.34,.19,n,{windows:!0}),0,.65,0)),e.add(Z(t.box(.13,.06,.13,n,{windows:!0}),0,.85,0));let r=Wt[new Date().getMonth()];e.add(Z(t.cyl(.03,.045,.12,n,{seg:10,glow:r,glowNight:1.85}),0,.94,0)),e.add(Z(t.cone(.012,.07,n,{seg:8}),0,1.04,0))},chrysler(e,t){let n=`#C9CED4`;e.add(Z(t.box(.22,.55,.22,`#9AA7B4`,{windows:!0}),0,.275,0));let r=.55;for(let i=0;i<5;i++){let a=.14-i*.024,o=.07;e.add(Z(t.cyl(a*.7,a,o,n,{seg:8,glow:`#dfeaff`,glowNight:.5}),0,r+o/2,0)),r+=o}e.add(Z(t.cone(.018,.16,n,{seg:8}),0,r+.08,0))},liberty(e,t){let n=`#B9B4A6`,r=`#4FA890`;e.add(Z(t.box(.42,.16,.42,n),0,.08,0)),e.add(Z(t.box(.3,.2,.3,n),0,.26,0)),e.add(Z(t.cyl(.1,.15,.42,r,{seg:10}),0,.57,0)),e.add(Z(t.box(.11,.1,.11,r),0,.83,0));for(let n=0;n<7;n++){let i=(n/6-.5)*Math.PI*1.1;e.add(Z(t.cone(.012,.1,r,{seg:5}),Math.sin(i)*.1,.92,Math.cos(i)*.06-.02))}let i=Z(t.cyl(.025,.03,.34,r,{seg:8}),.14,.98,0);i.rotation.z=.35,e.add(i),e.add(Z(t.box(.06,.06,.06,r,{glow:`#ffd060`,glowDay:.6,glowNight:1.2}),.2,1.16,0)),e.add(Z(t.cone(.04,.09,`#ffcf66`,{seg:6,glow:`#ffd060`,glowDay:.7,glowNight:1.3}),.2,1.24,0))},eiffel(e,t){let n=`#6E5C4C`,r=[[.2,0],[.13,.16],[.085,.33],[.055,.5],[.035,.66],[.02,.85],[0,.92]];e.add(t.lathe(r,n,{seg:4}));let i=t.lathe(r,n,{seg:4});i.rotation.y=Math.PI/4,e.add(i),e.add(Z(t.box(.26,.025,.26,n),0,.33,0)),e.add(Z(t.box(.14,.02,.14,n),0,.66,0)),e.add(Z(t.cone(.01,.1,n,{seg:6}),0,.97,0))},arcDeTriomphe(e,t){let r=`#D9D0C1`,i=.58,a=.5,o=.34,s=new ee;s.moveTo(-.58/2,0),s.lineTo(i/2,0),s.lineTo(i/2,a),s.lineTo(-.58/2,a),s.lineTo(-.58/2,0);let l=new d,u=.15,f=.22;l.moveTo(-.15,0),l.lineTo(-.15,f),l.absarc(0,f,u,Math.PI,0,!0),l.lineTo(u,0),l.lineTo(-.15,0),s.holes.push(l);let p=new y(s,{depth:o,bevelEnabled:!1});p.translate(0,0,-.34/2),p.computeVertexNormals(),e.add(new n(p,Y(new c({color:r,flatShading:!0}),{color:r}))),e.add(Z(t.box(i*1.06,.08,o*1.06,r),0,.54,0))},sacreCoeur(e,t){let n=`#F1EEE6`;e.add(Z(t.box(.5,.26,.4,n),0,.13,0));let r=(r,i,a,o)=>{e.add(Z(t.cyl(a*.9,a,i,n,{seg:12}),r,o,0));let s=Z(t.sphere(a,n,{seg:12}),r,o+i/2,0);s.scale.y=1.5,e.add(s)};r(0,.22,.15,.4),r(-.2,.1,.07,.33),r(.2,.1,.07,.33)},tokyoTower(e,t){let n=`#F25822`,r=`#EDEDED`,i=0;for(let a=0;a<9;a++){let o=a/9,s=(a+1)/9,c=.19*(1-o)+.03*o,l=.19*(1-s)+.03*s,u=.085,d=a%2?r:n;e.add(Z(t.cyl(l,c,u,d,{seg:4,glow:n,glowDay:0,glowNight:.7}),0,i+u/2,0)),i+=u}e.add(Z(t.box(.22,.02,.22,n,{glow:n,glowNight:.7}),0,.28,0)),e.add(Z(t.box(.12,.02,.12,r),0,.5,0)),e.add(Z(t.cone(.012,.16,r,{seg:6,glow:`#ff6a2a`,glowNight:.9}),0,i+.08,0))},pagoda(e,t){let n=0;for(let r=0;r<5;r++){let i=.42-r*.06,a=.11;e.add(Z(t.box(i,a,i,`#B23A2C`,{windows:r<4}),0,n+a/2,0)),e.add(Z(t.box(i*1.34,.03,i*1.34,`#7A3B2A`),0,n+a+.015,0)),n+=.16999999999999998}e.add(Z(t.cyl(.012,.012,.1,`#E0C040`,{seg:6}),0,n+.05,0)),e.add(Z(t.sphere(.03,`#E0C040`,{seg:8,glow:`#ffe680`,glowNight:.8}),0,n+.12,0))},neonBillboard(e,t){let n=`#20242C`;e.add(Z(t.box(.3,1,.3,n,{windows:!0}),0,.5,0));let r=[`#5AE8E0`,`#E85AA0`,`#E8E06A`],i=(n,r,i,a,o,s,c)=>{let l=Z(t.box(n,r,.02,i,{glow:i,glowDay:.6,glowNight:1.1}),a,o,s);l.rotation.y=c,e.add(l)};i(.22,.34,r[0],0,.75,.16,0),i(.16,.5,r[1],.16,.5,0,Math.PI/2),i(.2,.22,r[2],0,.34,-.16,0),e.add(Z(t.cone(.01,.14,n,{seg:6,glow:`#E85AA0`,glowDay:.4,glowNight:1}),0,1.08,0))}};function Kt(e,t){let n=new a;return Gt[e](n,Ut(t)),n}var qt=``+new URL(`building-skyscraper-d-CapD2Zqe.glb`,import.meta.url).href,Jt=``+new URL(`building-n-hdv8kKtN.glb`,import.meta.url).href,Yt=``+new URL(`building-g-CsTB1qH9.glb`,import.meta.url).href,Xt=``+new URL(`colormap-CK8fW2HB.png`,import.meta.url).href,Zt={skyscraper:{url:qt,color:`#9cc1dd`,fill:.92},midrise:{url:Jt,color:`#c9a07a`,fill:.96},setback:{url:Yt,color:`#d9c7a0`,fill:.9}};function Qt({windowGlow:e}){let t=new l;t.setURLModifier(e=>e.includes(`colormap.png`)?Xt:e);let n=new le(t),r={},i=!1,a=Promise.all(Object.entries(Zt).map(async([e,t])=>{r[e]=(await n.loadAsync(t.url)).scene})).then(()=>{i=!0,window.__landmarksReady=!0}).catch(e=>console.error(`landmark models failed:`,e)),o=9e3;function s(t,n,i={}){let a,s;if(Ht.includes(t))a=Kt(t,{windowGlow:e,winColors:i.winColors,litFrac:i.litFrac,id:()=>++o}),s=1;else{let e=r[t],n=Zt[t];if(!e||!n)return null;a=e.clone(!0),s=n.fill}a.updateMatrixWorld(!0);let c=new V().setFromObject(a).getSize(new z);a.scale.setScalar(n.h*s/c.y),a.updateMatrixWorld(!0);let l=new V().setFromObject(a),u=l.getCenter(new z);return a.position.x+=n.x-u.x,a.position.z+=n.z-u.z,a.position.y+=n.plinthTop-l.min.y,Ht.includes(t)?a.traverse(e=>{e.isMesh&&(e.castShadow=!1,e.raycast=()=>{})}):a.traverse(n=>{if(!n.isMesh)return;n.castShadow=!1,n.raycast=()=>{};let r=n=>et(n.clone(),{color:Zt[t].color,id:++o,windowGlow:e,winColors:i.winColors,litFrac:i.litFrac});n.material=Array.isArray(n.material)?n.material.map(r):r(n.material)}),a}return{make:s,whenReady:a,heightFactor:e=>X[e]??1,get ready(){return i}}}var $t=[`clear`,`rain`,`snow`,`fog`];function en({extent:e=7}={}){let t=new a;t.raycast=()=>{};let n=e+2,r=.25,i=(e,t)=>e+Math.random()*(t-e),o=new L(new u(.015,.5),new S({color:`#a9bdd6`,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),600);o.frustumCulled=!1,o.raycast=()=>{};let s=new Float32Array(600*3),c=new Float32Array(600);for(let e=0;e<600;e++)s[e*3]=i(-n,n),s[e*3+1]=i(r,11),s[e*3+2]=i(-n,n),c[e]=i(9,14);let l=new L(new u(.07,.07),new S({color:`#f3f7ff`,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),700);l.frustumCulled=!1,l.raycast=()=>{};let d=new Float32Array(700*3),f=new Float32Array(700),p=new Float32Array(700);for(let e=0;e<700;e++)d[e*3]=i(-n,n),d[e*3+1]=i(r,11),d[e*3+2]=i(-n,n),f[e]=i(0,6.28),p[e]=i(.6,1.2);t.add(o,l);let m=Array.from({length:8},()=>new z),h=0,g=`clear`,_=0,v=0,y=0,b=0,x=0,w=new C,T=(e,t,n,r)=>e+(t-e)*Math.min(1,n*r);function E(e){$t.includes(e)&&(g=e)}function D(){g=$t[($t.indexOf(g)+1)%$t.length]}function O(e,t){let a=g===`rain`,u=g===`snow`,S=g===`fog`,C=g!==`clear`;_=T(_,+!!C,e,1.4),v=T(v,+!!C,e,1.2),y=T(y,+!!S,e,.9),x=T(x,C&&!S?1:0,e,1),b=T(b,+!!u,e,u?.22:.5);let E=a?_:0,D=Math.round(600*E);for(let t=0;t<600;t++){if(t>=D){w.position.set(0,-50,0),w.scale.setScalar(0),w.updateMatrix(),o.setMatrixAt(t,w.matrix);continue}s[t*3+1]-=c[t]*e,s[t*3]+=e*1.1,s[t*3+1]<r&&(s[t*3]=i(-n,n),s[t*3+1]=11,s[t*3+2]=i(-n,n)),w.position.set(s[t*3],s[t*3+1],s[t*3+2]),w.rotation.set(0,0,0),w.scale.set(1,1,1),w.updateMatrix(),o.setMatrixAt(t,w.matrix)}o.instanceMatrix.needsUpdate=!0,o.material.opacity=.55*E,h=a?Math.round(8*_):0;for(let e=0;e<h;e++)m[e].set(Math.random(),Math.random(),.05*_);let O=Math.round(700*(u?_:0));for(let a=0;a<700;a++){if(a>=O){w.position.set(0,-50,0),w.scale.setScalar(0),w.updateMatrix(),l.setMatrixAt(a,w.matrix);continue}d[a*3+1]-=p[a]*e;let o=Math.sin(t*1.5+f[a])*.5;d[a*3+1]<r&&(d[a*3]=i(-n,n),d[a*3+1]=11,d[a*3+2]=i(-n,n)),w.position.set(d[a*3]+o,d[a*3+1],d[a*3+2]),w.rotation.set(0,0,0),w.scale.setScalar(1),w.updateMatrix(),l.setMatrixAt(a,w.matrix)}l.instanceMatrix.needsUpdate=!0,l.material.opacity=.9*(u?_:0)}return{group:t,update:O,cycle:D,setKind:E,rainDrops:m,get kind(){return g},get intensity(){return _},get overcast(){return v},get fog(){return y},get snow(){return b},get cloud(){return x},get rainDropCount(){return h},poolCounts:{rain:600,snow:700}}}function tn(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=(e,n,r)=>{let i=t.createRadialGradient(e,n,0,e,n,r);i.addColorStop(0,`rgba(255,255,255,0.95)`),i.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=i,t.beginPath(),t.arc(e,n,r,0,7),t.fill()};n(128*.42,128*.56,128*.26),n(128*.6,128*.5,128*.3),n(128*.5,128*.46,128*.22),n(128*.34,128*.54,128*.18),n(128*.7,128*.58,128*.18);let r=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5],i=t.getImageData(0,0,128,128),a=i.data;for(let e=0;e<128;e++)for(let t=0;t<128;t++){let n=(e*128+t)*4,i=a[n+3]/255,o=(r[e%4*4+t%4]+.5)/16-.5;a[n+3]=Math.max(0,Math.min(1,Math.floor(i*5+.5+o)/5))*255}t.putImageData(i,0,0);let o=new U(e);return o.colorSpace=B,o}function nn({extent:e=8,count:t=16}={}){let n=new a;n.raycast=()=>{};let r=tn(),i=e+6,o=(e,t)=>e+Math.random()*(t-e),s=[];for(let e=0;e<t;e++){let e=new ye({map:r,transparent:!0,depthWrite:!1,opacity:0,fog:!0}),t=new R(e),a={sp:t,mat:e,wisp:Math.random(),x:o(-i,i),z:o(-i,i),hiY:o(4,6.8),loY:o(.6,2.2),w:o(3,5.6),h:o(1.7,3),speed:o(.25,.7),op:o(.6,1)};t.raycast=()=>{},s.push(a),n.add(t)}let c=new F,l=new F(`#ffffff`),u=new F(`#5b626e`);function d(e,t,n,r){let a=r?r.cloud:0,d=r?r.fog:0,f=Math.min(1,.4+.6*a+.5*d);c.copy(n.sky).lerp(l,.62),c.lerp(u,.6*a);for(let n=0;n<s.length;n++){let r=s[n],l=n/s.length<f;r.x+=r.speed*e*(.6+.8*a),r.x>i&&(r.x=-i,r.z=o(-i,i));let u=Math.min(rn(r.x,-i,-i+3),1-rn(r.x,i-3,i)),p=r.hiY*(1-d)+r.loY*d,m=1-.5*r.wisp,h=.72*Math.max(0,1-d-a)+1*a+.42*d,g=l?Math.max(0,h)*r.op*m*u:0;r.mat.opacity+=(g-r.mat.opacity)*Math.min(1,e*2.5),r.mat.color.copy(c);let _=r.w*(1+.6*d)*(1+.4*r.wisp),v=r.h*(1-.35*d);r.sp.scale.set(_,v,1),r.sp.position.set(r.x,p+Math.sin(t*.3+n)*.15,r.z)}}function f(e){r=e;for(let t of s)t.mat.map=e,t.mat.needsUpdate=!0}let p=s.map((e,t)=>({kind:`cloud`,label:`cloud ${t+1}`,getWorldPos:t=>t.copy(e.sp.position),active:()=>e.mat.opacity>.06,info:()=>`cloud · ${e.wisp>.6?`wispy`:`puffy`} · drifting east${e.sp.position.y<3?` (low mist)`:``}`}));function m(){return p}return{group:n,update:d,setTexture:f,getFollowables:m,get count(){return s.length}}}function rn(e,t,n){let r=Math.max(0,Math.min(1,(e-t)/(n-t)));return r*r*(3-2*r)}var an={person:4.5,car:6,gull:6,fish:8,boat:9,cloud:16};function on({rig:e,getCamera:t,sources:n=[]}){let r=null,i=new z,a=new z,o=()=>{let e=[];for(let t of n)if(t&&t.getFollowables){let n=t.getFollowables();n&&e.push(...n)}return e},s=e=>!e.active||e.active();function c(t){return t?(r=t,e.setFollow(e=>t.getWorldPos(e),{frame:t.frame??an[t.kind]??8}),t):null}function l(){r=null,e.clearFollow()}function u(e,n,r=.14){let l=t(),u=null,d=r;for(let t of o()){if(!s(t)||(t.getWorldPos(i),a.copy(i).project(l),a.z>1||a.z<-1))continue;let r=Math.hypot(a.x-e,a.y-n);r<d&&(d=r,u=t)}return u?c(u):null}function d(e=1,t=null){let n=o().filter(e=>(!t||e.kind===t)&&s(e));if(t||(n=sn(n)),!n.length)return null;let i=r?n.indexOf(r):-1;return i=((i+e)%n.length+n.length)%n.length,c(n[i])}function f(){r&&r.active&&!r.active()&&l()}return{pickAt:u,cycle:d,follow:c,release:l,prune:f,get focus(){return r},get count(){return o().length},get readout(){return r?{kind:r.kind,label:r.label,info:r.info?r.info():``}:null}}}function sn(e){let t=new Map;for(let n of e)t.has(n.kind)||t.set(n.kind,[]),t.get(n.kind).push(n);let n=[...t.values()],r=[];for(let e=0,t=!0;t;e++){t=!1;for(let i of n)e<i.length&&(r.push(i[e]),t=!0)}return r}var cn={maxSpeed:6,accel:9,drag:5,turnRate:2.1,chaseDist:7,chaseElev:.42};function ln(e=cn){let t=new z,n=new z,r=new z,i=new z,a=new we,o=.45;function s(s,c,l,u){let d=u&&u.heightAt||(()=>0),f=W(Math.abs(s.speed)/e.maxSpeed,0,1),p=s.speed>=0?1:-1;if(s.yaw+=c.steer*e.turnRate*(.35+.65*f)*p*l,c.throttle!==0)s.speed+=c.throttle*e.accel*l;else{let t=Math.min(Math.abs(s.speed),e.drag*l);s.speed-=Math.sign(s.speed)*t}s.speed=W(s.speed,-e.maxSpeed*.5,e.maxSpeed);let m=Math.sin(s.yaw),h=Math.cos(s.yaw);s.x+=m*s.speed*l,s.z+=h*s.speed*l;let g=d(s.x,s.z);s.y=Te(s.y,g,18,l);let _=d(s.x-o,s.z),v=d(s.x+o,s.z),y=d(s.x,s.z-o),b=d(s.x,s.z+o);return t.set(_-v,2*o,y-b).normalize(),n.set(m,0,h),r.crossVectors(t,n).normalize(),i.crossVectors(r,t).normalize(),a.makeBasis(r,t,i),s.quat.setFromRotationMatrix(a),s}return{step:s}}var un={accel:7,lift:9,maxV:5,chaseDist:9.5,chaseElev:.4},dn={air:{drag:2,maxSpeed:8,turn:1.8,vDrag:2.2,buoyancy:0},water:{drag:4.6,maxSpeed:3.6,turn:1.3,vDrag:4.5,buoyancy:1.1},ground:{drag:5.5,maxSpeed:5,turn:2,vDrag:9,buoyancy:0}},fn=[`drag`,`maxSpeed`,`turn`,`vDrag`,`buoyancy`],pn=(e,t,n)=>e+(t-e)*n;function mn(e=un){let t=new z,n=new z,r=new z,i=new z,a=new we,o=new Se,s={drag:0,maxSpeed:0,turn:0,vDrag:0,buoyancy:0},c=.4,l=.3,u=-900;function d(e,t){let n=t.heightAt(e.x,e.z),r=t.waterHeightAt?t.waterHeightAt(e.x,e.z):u,i=e.y,a=e.medium||`air`;if(r>u){if(a===`water`){if(i<=r+c)return`water`}else if(i<r-c)return`water`}if(a===`ground`){if(i<=n+l+c)return`ground`}else if(i<n+l)return`ground`;return`air`}function f(c,l,u,f){let p=c.medium||`air`,m=d(c,f);c.medium=m,m===p?c.crossingT>0&&(c.crossingT=Math.max(0,c.crossingT-u/.6)):(c.crossing=p+`>`+m,c.crossingT=1);let h=dn[m],g=dn[p],_=1-(c.crossingT||0),v=s;for(let e of fn)v[e]=pn(g[e],h[e],_);c.yaw+=l.steer*v.turn*u,l.throttle===0?c.speed-=Math.sign(c.speed)*Math.min(Math.abs(c.speed),v.drag*u):c.speed+=l.throttle*e.accel*u,c.speed=W(c.speed,-v.maxSpeed*.6,v.maxSpeed);let y=Math.sin(c.yaw),b=Math.cos(c.yaw);c.x+=y*c.speed*u,c.z+=b*c.speed*u;let x=f.heightAt(c.x,c.z);if(m===`ground`&&l.lift<=0){c.vy=0,c.y=Te(c.y,x,14,u);let e=.45,o=f.heightAt(c.x-e,c.z),s=f.heightAt(c.x+e,c.z),l=f.heightAt(c.x,c.z-e),d=f.heightAt(c.x,c.z+e);t.set(o-s,2*e,l-d).normalize(),n.set(y,0,b),r.crossVectors(t,n).normalize(),i.crossVectors(r,t).normalize(),a.makeBasis(r,t,i),c.quat.setFromRotationMatrix(a)}else{c.vy+=(l.lift*e.lift+v.buoyancy)*u,c.vy-=Math.sign(c.vy)*Math.min(Math.abs(c.vy),v.vDrag*u),c.vy=W(c.vy,-e.maxV,e.maxV),c.y+=c.vy*u,c.y<x&&(c.y=x,c.vy<0&&(c.vy=0));let t=W(-l.steer*.35,-.4,.4),n=W(-c.vy*.06,-.3,.3);o.set(n,c.yaw,t,`YXZ`),c.quat.setFromEuler(o)}return c}return{step:f}}var hn={ground:ln,spacecraft:mn},gn=.55,_n={throttle:0,steer:0,lift:0};function vn({rig:e,world:t}={}){let n=`free`,r=null,i=null,a=0;function o(t){if(!t||!t.pilot)return!1;r&&s(),r=t;let o=r.pilot;return i=(hn[o.model]||hn.ground)(o.profile),o.suspendAutonomy(),e.setFollow(e=>o.getWorldPos(e),{frame:o.profile.chaseDist}),e.setElevation(o.profile.chaseElev),e.setAzimuth(o.getTransform().yaw+Math.PI,!0),n=`entering`,a=gn,!0}function s(){return r?(r.pilot.resumeAutonomy(),e.clearFollow(),r=null,i=null,n=`free`,a=0,!0):!1}function c(o,s){if(!r)return;let c=r.pilot;if(n===`entering`){a-=o,e.setAzimuth(c.getTransform().yaw+Math.PI),a<=0&&(n=`piloting`);return}let l=c.getTransform();i.step(l,s||_n,o,t),c.setTransform(l),e.setAzimuth(l.yaw+Math.PI)}return{possess:o,release:s,step:c,get active(){return!!r},get piloting(){return n===`piloting`},get state(){return n},get craft(){return r},get controlHints(){return r?r.pilot.controlHints:``},get speed(){return r?r.pilot.getTransform().speed:0},get telemetry(){if(!r)return null;let e=r.pilot.getTransform(),n=t&&t.heightAt?t.heightAt(e.x,e.z):0,i=t&&t.waterHeightAt?t.waterHeightAt(e.x,e.z):-900;return{medium:e.medium||null,speed:e.speed||0,y:e.y,altitude:Math.max(0,e.y-n),depth:i>-900?Math.max(0,i-e.y):0,climb:e.vy||0}}}}var yn=new z,bn=new z,xn=new z,Sn=new z,Cn=new we;function wn(){let e=document.createElement(`canvas`);e.width=256,e.height=64;let t=e.getContext(`2d`);t.strokeStyle=`#ffffff`,t.lineWidth=6,t.lineCap=`round`,t.lineJoin=`round`;let n=[14,24,36,24];for(let e=0;e<4;e++){let r=e*64,i=n[e];t.beginPath(),t.moveTo(r+8,40),t.quadraticCurveTo(r+24,i,r+32,36),t.quadraticCurveTo(r+40,i,r+56,40),t.stroke()}let r=new U(e);return r.colorSpace=B,r}function Tn(){let e=document.createElement(`canvas`);e.width=e.height=96;let t=e.getContext(`2d`),n=(e,n,r)=>{let i=t.createRadialGradient(e,n,0,e,n,r);i.addColorStop(0,`rgba(255,255,255,0.95)`),i.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=i,t.beginPath(),t.arc(e,n,r,0,7),t.fill()};n(96*.42,96*.56,96*.26),n(96*.6,96*.5,96*.3),n(96*.5,96*.46,96*.22),n(96*.7,96*.58,96*.18);let r=new U(e);return r.colorSpace=B,r}function En(){let e=new a,t=new n(new H(.46,.2,1.1),Y(new c({color:`#5a6675`,roughness:.6,metalness:.2,flatShading:!0}),{color:`#5a6675`}));t.position.y=.02;let r=new n(new H(.3,.22,.42),Y(new c({color:`#e7ecf2`,roughness:.7,flatShading:!0}),{color:`#e7ecf2`}));return r.position.set(0,.18,.08),e.add(t,r),e.traverse(e=>{e.isMesh&&(e.castShadow=!0),e.raycast=()=>{}}),e}function Dn(){let e=new n(new ge(.18,9,7),Y(new c({color:`#5b6f86`,roughness:.5,flatShading:!0}),{color:`#5b6f86`}));return e.scale.set(.55,.5,1),e.raycast=()=>{},e}function On(){let e=new a,t=new n(new H(.18,.34,.14),Y(new c({color:`#3b6ea5`,roughness:.8,flatShading:!0}),{color:`#3b6ea5`}));t.position.y=.17;let r=new n(new H(.13,.13,.13),Y(new c({color:`#e3b98c`,roughness:.8,flatShading:!0}),{color:`#e3b98c`}));return r.position.y=.41,e.add(t,r),e.traverse(e=>{e.isMesh&&(e.castShadow=!0),e.raycast=()=>{}}),e}function kn(){let e=new a,t=new n(new H(.5,.22,.84),Y(new c({color:`#d2622e`,roughness:.6,metalness:.2,flatShading:!0}),{color:`#d2622e`}));t.position.y=.26;let r=new n(new H(.3,.16,.32),Y(new c({color:`#2b2f37`,roughness:.8,flatShading:!0}),{color:`#2b2f37`}));r.position.set(0,.42,-.06);let i=new n(new H(.34,.12,.22),Y(new c({color:`#e2e7ee`,roughness:.7,flatShading:!0}),{color:`#e2e7ee`}));i.position.set(0,.28,.42);let o=new D(.14,.14,.13,10);for(let[t,r]of[[-.27,.3],[.27,.3],[-.27,-.3],[.27,-.3]]){let i=new n(o,Y(new c({color:`#1c2026`,roughness:.9,flatShading:!0}),{color:`#1c2026`}));i.rotation.z=Math.PI/2,i.position.set(t,.14,r),e.add(i)}return e.add(t,r,i),e.traverse(e=>{e.isMesh&&(e.castShadow=!0),e.raycast=()=>{}}),e}function An(){let e=new a,t=new n(new D(.5,.64,.16,18),Y(new c({color:`#8a93a8`,roughness:.4,metalness:.5,flatShading:!0}),{color:`#8a93a8`}));t.position.y=.3;let r=new n(new ge(.3,16,10,0,Math.PI*2,0,Math.PI/2),Y(new c({color:`#9fe6ff`,roughness:.25,metalness:.3,flatShading:!0,transparent:!0,opacity:.85}),{color:`#9fe6ff`}));r.position.y=.38;let i=new n(new H(.12,.1,.34),Y(new c({color:`#ff7a4d`,roughness:.6,flatShading:!0}),{color:`#ff7a4d`}));return i.position.set(0,.3,.52),e.add(t,r,i),e.traverse(e=>{e.isMesh&&(e.castShadow=!0),e.raycast=()=>{}}),e}function jn({heightAt:e,seaSurfaceY:t=0,waterY:n=.06}={}){let r=new a;r.raycast=()=>{};let i=e||(()=>0),o=[],s=[],c={gull:0,boat:0,fish:0,cloud:0,person:0,atv:0,craft:0},l=Mt({frames:4,fps:7}),u=wn(),d=Tn(),p=[`#ffffff`,`#cfd4da`,`#c8a06a`];function m(e,r,a,o){let s=(c[e]||0)*1.7+(o.phase||0);if(e===`gull`){let t=l.makeInstanceTexture(u),n=new R(new ye({map:t,color:new F(p[c.gull%3]),transparent:!0,opacity:.9,depthWrite:!1,fog:!0}));n.scale.setScalar(.5),n.raycast=()=>{};let o=r,d=a,m=1.4+Math.random()*.6,h=i(r,a)+2.4,g=.5+Math.random()*.3;return{kind:e,obj:n,x:r,z:a,update(e,t,r){let i=s+t*g;n.position.set(o+Math.cos(i)*m,h+Math.sin(t*1.4+s)*.12,d+Math.sin(i)*m),l.step(n.material.map,t,s);let a=r?1-r.windowGlow:1;n.material.opacity=f.clamp(.25+a*.7,0,.95)},info:()=>`gull · circling`,dispose(){t.dispose()}}}if(e===`cloud`){let t=new R(new ye({map:d,transparent:!0,opacity:.85,depthWrite:!1,fog:!0}));t.scale.set(3.4,1.9,1),t.raycast=()=>{};let n=r,i=a,o=5+Math.random()*1.4,c=.12+Math.random()*.1;return{kind:e,obj:t,x:r,z:a,update(e,r,a){t.position.set(n+Math.sin(r*.18+s)*1.2,o+Math.sin(r*.3+s)*.18,i+c*Math.cos(r*.1+s)),a&&a.sky&&t.material.color.copy(a.sky).lerp(Mn,.62)},info:()=>`cloud · drifting`}}if(e===`boat`){let t=En();t.position.set(r,n,a);let i=r,o=a,c=Math.random()*Math.PI*2;return{kind:e,obj:t,x:r,z:a,update(e,l){c+=Math.sin(l*.3+s)*.4*e;let u=.6;i+=Math.sin(c)*u*e,o+=Math.cos(c)*u*e,i+=(r-i)*.4*e,o+=(a-o)*.4*e;let d=Math.sin(l*1.1+s)*.025;t.position.set(i,n+d,o),t.rotation.set(Math.sin(l*.9+s)*.04,c,0)},info:()=>`boat · drifting`}}if(e===`fish`){let t=Dn();t.position.set(r,-5,a);let i=6+Math.random()*5,o=Math.random()*Math.PI*2,s=Math.random()*i,c={kind:e,obj:t,x:r,z:a,active:!0,update(e){if(s+=e,s>=i){let e=(s-i)/1.3;if(e>=1){s=0,t.position.set(r,-5,a),c.active=!1;return}let l=Math.sin(Math.PI*e);t.position.set(r+Math.sin(o)*(e-.5)*1,n-.1+l*.5,a+Math.cos(o)*(e-.5)*1),t.rotation.set(Math.cos(Math.PI*e)*.9,o,0),c.active=!0}else c.active=!1},info:()=>c.active?`fish · breaching!`:`fish · below`};return c}if(e===`person`){let n=On();n.position.set(r,i(r,a),a);let o=Math.random()*Math.PI*2;return{kind:e,obj:n,x:r,z:a,update(e,s){o+=(Math.random()-.5)*1.4*e;let c=.55,l=n.position.x+Math.sin(o)*c*e,u=n.position.z+Math.cos(o)*c*e,d=l+(r-l)*.25*e,f=u+(a-u)*.25*e;i(d,f)<t+.02&&(o+=Math.PI,d=n.position.x,f=n.position.z),n.position.set(d,i(d,f),f),n.rotation.y=o},info:()=>`person · wandering`}}if(e===`atv`){let t=kn(),n={x:r,y:i(r,a),z:a,yaw:o.yaw??Math.random()*Math.PI*2,speed:0,quat:new _},s=!1,c=()=>{let e=.45,t=i(n.x-e,n.z),r=i(n.x+e,n.z),a=i(n.x,n.z-e),o=i(n.x,n.z+e);yn.set(t-r,2*e,a-o).normalize(),bn.set(Math.sin(n.yaw),0,Math.cos(n.yaw)),xn.crossVectors(yn,bn).normalize(),Sn.crossVectors(xn,yn).normalize(),Cn.makeBasis(xn,yn,Sn),n.quat.setFromRotationMatrix(Cn)},l=()=>{n.y=i(n.x,n.z),c(),t.position.set(n.x,n.y,n.z),t.quaternion.copy(n.quat)};return l(),{kind:e,obj:t,x:r,z:a,get piloted(){return s},update(){s||l()},info:()=>s?`ATV · piloted`:`ATV · parked`,pilot:{model:`ground`,profile:cn,controlHints:`W/S throttle · A/D steer · Esc to exit`,getWorldPos:e=>e.copy(t.position),getTransform:()=>n,setTransform:e=>{t.position.set(e.x,e.y,e.z),t.quaternion.copy(e.quat)},suspendAutonomy:()=>{s=!0},resumeAutonomy:()=>{s=!1,n.speed=0}}}}if(e===`craft`){let t=An(),n=1.3,s=Math.random()*Math.PI*2,c={x:r,y:i(r,a)+n,z:a,yaw:o.yaw??Math.random()*Math.PI*2,speed:0,vy:0,quat:new _,medium:`air`,crossing:null,crossingT:0},l=!1;return{kind:e,obj:t,x:r,z:a,get piloted(){return l},update(e,r){if(l)return;c.yaw+=.3*e;let a=i(c.x,c.z)+n+Math.sin((r||0)*.8+s)*.08;c.y+=(a-c.y)*Math.min(1,e*3),t.position.set(c.x,c.y,c.z),t.rotation.set(0,c.yaw,0)},info:()=>l?`spacecraft · piloted`:`spacecraft · hovering`,pilot:{model:`spacecraft`,profile:un,controlHints:`W/S thrust · A/D steer · Space/Shift climb/dive · Esc exit`,getWorldPos:e=>e.copy(t.position),getTransform:()=>c,setTransform:e=>{t.position.set(e.x,e.y,e.z),t.quaternion.copy(e.quat)},suspendAutonomy:()=>{l=!0},resumeAutonomy:()=>{l=!1,c.speed=0,c.vy=0}}}}return null}function h(e){return c[e]=(c[e]||0)+1,`${e} ${c[e]}`}function g(e,t,n,i={}){let a=m(e,t,n,i);if(!a)return null;a.opts=i,o.push(a),r.add(a.obj);let c={kind:e,label:h(e),getWorldPos:e=>e.copy(a.obj.position),active:()=>a.active!==!1,info:()=>a.info()};return a.pilot&&(c.pilot=a.pilot),a.followable=c,s.push(c),a}function v(e){if(!e)return!1;let t=o.indexOf(e);if(t<0)return!1;r.remove(e.obj),e.dispose&&e.dispose(),o.splice(t,1);let n=s.indexOf(e.followable);return n>=0&&s.splice(n,1),!0}function y(e,t,n=2.5){let r=null,i=n*n;for(let n of o){let a=n.obj.position.x-e,o=n.obj.position.z-t,s=a*a+o*o;s<i&&(i=s,r=n)}if(!r)return null;let a={kind:r.kind,x:r.x,z:r.z,opts:r.opts};return v(r),a}function b(e,t,n){for(let r=0;r<o.length;r++)o[r].update(e,t,n);typeof window<`u`&&(window.__placedLife=x())}function x(){let e={gull:0,boat:0,fish:0,cloud:0,person:0,atv:0,craft:0,total:o.length};for(let t of o)e[t.kind]++;return e}function S(){return s}function C(){return o.map(e=>({kind:e.kind,x:e.x,z:e.z,opts:e.opts}))}function w(){for(let e of[...o])v(e)}function T(e){if(w(),Array.isArray(e))for(let t of e.slice(0,2e3))!t||typeof t.kind!=`string`||!Number.isFinite(t.x)||!Number.isFinite(t.z)||g(t.kind,t.x,t.z,t.opts&&typeof t.opts==`object`?t.opts:{})}return{group:r,update:b,spawn:g,despawn:v,removeNear:y,getFollowables:S,snapshot:C,restore:T,clear:w,counts:x,get count(){return o.length}}}var Mn=new F(`#ffffff`),Nn=`varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0); 
}`,Pn=`precision highp float;

varying vec2 vUv;

uniform sampler2D uState;   
uniform sampler2D uTerr;    
uniform sampler2D uFlux;    
uniform vec2  uTexel;       
uniform float uN;           
uniform float uDt;          
uniform float uFlow;        
uniform float uDamp;        

void main() {
  vec2 uv = vUv;
  float i = floor(uv.x * uN);          
  float j = floor(uv.y * uN);          

  float Wc = texture2D(uState, uv).r;
  float Tc = texture2D(uTerr,  uv).r;
  float hc = Tc + Wc;                   
  vec4  fp = texture2D(uFlux,  uv);     

  float l = 0.0, r = 0.0, b = 0.0, t = 0.0;
  if (i > 0.5) {                                          
    vec2 n = uv + vec2(-uTexel.x, 0.0);
    float hn = texture2D(uTerr, n).r + texture2D(uState, n).r;
    l = max(0.0, fp.r * uDamp + uDt * uFlow * (hc - hn));
  }
  if (i < uN - 1.5) {                                     
    vec2 n = uv + vec2(uTexel.x, 0.0);
    float hn = texture2D(uTerr, n).r + texture2D(uState, n).r;
    r = max(0.0, fp.g * uDamp + uDt * uFlow * (hc - hn));
  }
  if (j > 0.5) {                                          
    vec2 n = uv + vec2(0.0, -uTexel.y);
    float hn = texture2D(uTerr, n).r + texture2D(uState, n).r;
    b = max(0.0, fp.b * uDamp + uDt * uFlow * (hc - hn));
  }
  if (j < uN - 1.5) {                                     
    vec2 n = uv + vec2(0.0, uTexel.y);
    float hn = texture2D(uTerr, n).r + texture2D(uState, n).r;
    t = max(0.0, fp.a * uDamp + uDt * uFlow * (hc - hn));
  }

  
  float outv = (l + r + b + t) * uDt;
  float k = outv > 1e-9 ? min(1.0, Wc / outv) : 1.0;
  gl_FragColor = vec4(l * k, r * k, b * k, t * k);        
}`,Fn=`precision highp float;

varying vec2 vUv;

uniform sampler2D uState;   
uniform sampler2D uTerr;    
uniform sampler2D uFlux;    
uniform vec2  uTexel;
uniform float uN;
uniform float uDt;
uniform float uSeaY;        

void main() {
  vec2 uv = vUv;
  float i = floor(uv.x * uN);
  float j = floor(uv.y * uN);

  vec4 fc = texture2D(uFlux, uv);                 
  float inflow = 0.0;
  if (i > 0.5)      inflow += texture2D(uFlux, uv + vec2(-uTexel.x, 0.0)).g;  
  if (i < uN - 1.5) inflow += texture2D(uFlux, uv + vec2( uTexel.x, 0.0)).r;  
  if (j > 0.5)      inflow += texture2D(uFlux, uv + vec2(0.0, -uTexel.y)).a;  
  if (j < uN - 1.5) inflow += texture2D(uFlux, uv + vec2(0.0,  uTexel.y)).b;  
  float outflow = fc.r + fc.g + fc.b + fc.a;

  vec4 st = texture2D(uState, uv);                
  float Wn = st.r + uDt * (inflow - outflow);
  if (Wn < 0.0) Wn = 0.0;
  float Tc = texture2D(uTerr, uv).r;
  if (Tc < uSeaY - 0.02) Wn = 0.0;               
  gl_FragColor = vec4(Wn, st.g, 0.0, 0.0);        
}`,In=`precision highp float;

varying vec2 vUv;

uniform sampler2D uState;   
uniform sampler2D uTerr;    
uniform float uN;
uniform float uSeaY;
uniform float uRain;        
uniform int   uPourCount;   
uniform vec3  uPours[8];    
uniform float uPourR[8];    

void main() {
  vec2 uv = vUv;
  float i = floor(uv.x * uN);
  float j = floor(uv.y * uN);
  vec4 st = texture2D(uState, uv);
  float Tc = texture2D(uTerr, uv).r;

  float add = 0.0;
  if (uRain > 0.0 && Tc > uSeaY) add += uRain;        
  for (int p = 0; p < 8; p++) {
    if (p >= uPourCount) break;
    vec3 po = uPours[p];                              
    float R = uPourR[p];
    float d = length(vec2(i - po.x, j - po.y));
    if (d <= R) add += po.z * (1.0 - d / R);          
  }
  gl_FragColor = vec4(st.r + add, st.g, 0.0, 0.0);
}`,Ln=`precision highp float;
varying vec2 vUv;
uniform sampler2D uSrc;
void main() { gl_FragColor = vec4(texture2D(uSrc, vUv).r, 0.0, 0.0, 0.0); }`,Rn=`precision highp float;
varying vec2 vUv;

uniform sampler2D uState;   
uniform sampler2D uTerr;    
uniform sampler2D uFlux;    
uniform vec2  uTexel;
uniform float uN, uDt, uCell, uSeaY;
uniform float uKC, uKE, uKD, uMaxD, uMinDepth, uErosK;

float erodeDelta(vec2 uv, float i, float j, float W, float S, float T) {
  if (W <= uMinDepth) {                                   
    return S > 0.0 ? min(uMaxD, uKD * S * uDt) : 0.0;
  }
  vec4 f = texture2D(uFlux, uv);
  float tf = f.r + f.g + f.b + f.a;                       
  float v = tf / (W + 0.02);
  float hl = i > 0.5      ? texture2D(uTerr, uv + vec2(-uTexel.x, 0.0)).r : T;
  float hr = i < uN - 1.5 ? texture2D(uTerr, uv + vec2( uTexel.x, 0.0)).r : T;
  float hd = j > 0.5      ? texture2D(uTerr, uv + vec2(0.0, -uTexel.y)).r : T;
  float hu = j < uN - 1.5 ? texture2D(uTerr, uv + vec2(0.0,  uTexel.y)).r : T;
  float slope = min(2.0, length(vec2(hr - hl, hu - hd)) / (2.0 * uCell));
  float cap = uKC * v * max(0.05, slope) * uErosK;        
  if (cap > S) return -min(uMaxD, uKE * (cap - S) * uDt); 
  return            min(uMaxD, uKD * (S - cap) * uDt);    
}

void main() {
  vec2 uv = vUv;
  float i = floor(uv.x * uN), j = floor(uv.y * uN);
  vec2 st = texture2D(uState, uv).rg;                     
  float T = texture2D(uTerr, uv).r;
  float d = erodeDelta(uv, i, j, st.x, st.y, T);
  gl_FragColor = vec4(T + d, 0.0, 0.0, 0.0);
}`,zn=`precision highp float;
varying vec2 vUv;

uniform sampler2D uState;   
uniform sampler2D uTerr;    
uniform sampler2D uFlux;    
uniform vec2  uTexel;
uniform float uN, uDt, uCell, uSeaY;
uniform float uKC, uKE, uKD, uMaxD, uMinDepth, uErosK;

float erodeDelta(vec2 uv, float i, float j, float W, float S, float T) {
  if (W <= uMinDepth) {
    return S > 0.0 ? min(uMaxD, uKD * S * uDt) : 0.0;
  }
  vec4 f = texture2D(uFlux, uv);
  float tf = f.r + f.g + f.b + f.a;
  float v = tf / (W + 0.02);
  float hl = i > 0.5      ? texture2D(uTerr, uv + vec2(-uTexel.x, 0.0)).r : T;
  float hr = i < uN - 1.5 ? texture2D(uTerr, uv + vec2( uTexel.x, 0.0)).r : T;
  float hd = j > 0.5      ? texture2D(uTerr, uv + vec2(0.0, -uTexel.y)).r : T;
  float hu = j < uN - 1.5 ? texture2D(uTerr, uv + vec2(0.0,  uTexel.y)).r : T;
  float slope = min(2.0, length(vec2(hr - hl, hu - hd)) / (2.0 * uCell));
  float cap = uKC * v * max(0.05, slope) * uErosK;
  if (cap > S) return -min(uMaxD, uKE * (cap - S) * uDt);
  return            min(uMaxD, uKD * (S - cap) * uDt);
}

void main() {
  vec2 uv = vUv;
  float i = floor(uv.x * uN), j = floor(uv.y * uN);
  vec2 st = texture2D(uState, uv).rg;                     
  float T = texture2D(uTerr, uv).r;
  float d = erodeDelta(uv, i, j, st.x, st.y, T);
  float Snew = st.y - d;                                  
  if (Snew < 0.0) Snew = 0.0;
  gl_FragColor = vec4(st.x, Snew, 0.0, 0.0);              
}`,Bn=`precision highp float;
varying vec2 vUv;

uniform sampler2D uState;   
uniform sampler2D uTerr;    
uniform sampler2D uFlux;    
uniform vec2  uTexel;
uniform float uN, uDt, uSeaY, uKADV;

float moveOut(float S, vec4 f) {                          
  float tot = f.r + f.g + f.b + f.a;
  return (tot > 1e-9 && S > 1e-9) ? min(S, S * uKADV * uDt) : 0.0;
}

void main() {
  vec2 uv = vUv;
  float i = floor(uv.x * uN), j = floor(uv.y * uN);
  vec2 st = texture2D(uState, uv).rg;                     
  vec4 fc = texture2D(uFlux, uv);
  float out_ = moveOut(st.y, fc);

  float inflow = 0.0;
  if (i < uN - 1.5) {                                     
    vec2 n = uv + vec2(uTexel.x, 0.0); vec4 fn = texture2D(uFlux, n); float Sn = texture2D(uState, n).g;
    float tn = fn.r + fn.g + fn.b + fn.a; if (tn > 1e-9) inflow += moveOut(Sn, fn) * fn.r / tn;
  }
  if (i > 0.5) {                                          
    vec2 n = uv + vec2(-uTexel.x, 0.0); vec4 fn = texture2D(uFlux, n); float Sn = texture2D(uState, n).g;
    float tn = fn.r + fn.g + fn.b + fn.a; if (tn > 1e-9) inflow += moveOut(Sn, fn) * fn.g / tn;
  }
  if (j < uN - 1.5) {                                     
    vec2 n = uv + vec2(0.0, uTexel.y); vec4 fn = texture2D(uFlux, n); float Sn = texture2D(uState, n).g;
    float tn = fn.r + fn.g + fn.b + fn.a; if (tn > 1e-9) inflow += moveOut(Sn, fn) * fn.b / tn;
  }
  if (j > 0.5) {                                          
    vec2 n = uv + vec2(0.0, -uTexel.y); vec4 fn = texture2D(uFlux, n); float Sn = texture2D(uState, n).g;
    float tn = fn.r + fn.g + fn.b + fn.a; if (tn > 1e-9) inflow += moveOut(Sn, fn) * fn.a / tn;
  }

  float Snew = st.y - out_ + inflow;
  if (Snew < 0.0) Snew = 0.0;
  if (texture2D(uTerr, uv).r < uSeaY - 0.02) Snew = 0.0;  
  gl_FragColor = vec4(st.x, Snew, 0.0, 0.0);
}`;function Vn({renderer:t,N:r,cell:i,half:a,worldSize:o,seaY:l=0,FLOW:d,DAMP:f,MIN_DEPTH:p,KC:m,KE:h,KD:g,KADV:_,MAXD:v,readTerrain:y}){let b=t.getContext();if(!(b&&b.getExtension&&b.getExtension(`EXT_color_buffer_float`)))return typeof console<`u`&&console.warn(`[L87] EXT_color_buffer_float unavailable — GPU flow backend cannot run; staying on CPU.`),null;let S={type:xe,format:e,minFilter:x,magFilter:x,wrapS:ce,wrapT:ce,depthBuffer:!1,stencilBuffer:!1},C=[new I(r,r,S),new I(r,r,S)],w=[new I(r,r,S),new I(r,r,S)],T=[new I(r,r,S),new I(r,r,S)],E=new Float32Array(r*r*4),D=new be(E,r,r,e,xe);D.minFilter=x,D.magFilter=x,D.wrapS=D.wrapT=ce;let O=new Float32Array(r*r),ee=!1,te=1,A=!0,ne=new he,re=new s(-1,1,1,-1,0,1),j=new n(new u(2,2),null);j.frustumCulled=!1,ne.add(j);let M=new fe(1/r,1/r),N=(e,t)=>new ae({vertexShader:Nn,fragmentShader:e,uniforms:t}),P=N(Pn,{uState:{value:null},uTerr:{value:null},uFlux:{value:null},uTexel:{value:M},uN:{value:r},uDt:{value:0},uFlow:{value:d},uDamp:{value:f}}),ie=N(Fn,{uState:{value:null},uTerr:{value:null},uFlux:{value:null},uTexel:{value:M},uN:{value:r},uDt:{value:0},uSeaY:{value:l}}),L=N(In,{uState:{value:null},uTerr:{value:null},uN:{value:r},uSeaY:{value:l},uRain:{value:0},uPourCount:{value:0},uPours:{value:Array.from({length:8},()=>new z)},uPourR:{value:new Float32Array(8)}}),oe=N(Ln,{uSrc:{value:D}}),R=()=>({uState:{value:null},uTerr:{value:null},uFlux:{value:null},uTexel:{value:M},uN:{value:r},uDt:{value:0},uCell:{value:i},uSeaY:{value:l},uKC:{value:m},uKE:{value:h},uKD:{value:g},uMaxD:{value:v},uMinDepth:{value:p},uErosK:{value:te}}),le=N(Rn,R()),B=N(zn,R()),V=N(Bn,{uState:{value:null},uTerr:{value:null},uFlux:{value:null},uTexel:{value:M},uN:{value:r},uDt:{value:0},uSeaY:{value:l},uKADV:{value:_}});function de(e,n){j.material=e;let r=t.getRenderTarget();t.setRenderTarget(n),t.render(ne,re),t.setRenderTarget(r)}let pe=new F;function me(e){let n=t.getRenderTarget(),r=t.getClearAlpha();t.getClearColor(pe),t.setRenderTarget(e),t.setClearColor(0,0),t.clear(!0,!1,!1),t.setClearColor(pe,r),t.setRenderTarget(n)}function H(){y(O);for(let e=0;e<r*r;e++)E[e*4]=O[e];D.needsUpdate=!0,de(oe,T[0])}function ge(){me(C[0]),me(C[1]),me(w[0]),me(w[1])}ge();let _e=r*r,ve=new Float32Array(_e*3),U=new Float32Array(_e*2);for(let e=0;e<r;e++)for(let t=0;t<r;t++){let n=e*r+t;ve[n*3]=t*i-a,ve[n*3+1]=0,ve[n*3+2]=e*i-a,U[n*2]=(t+.5)/r,U[n*2+1]=(e+.5)/r}let ye=[];for(let e=0;e<r-1;e++)for(let t=0;t<r-1;t++){let n=e*r+t,i=e*r+t+1,a=(e+1)*r+t,o=(e+1)*r+t+1;ye.push(n,a,i,i,a,o)}let Se=new se;Se.setAttribute(`position`,new k(ve,3)),Se.setAttribute(`aGridUv`,new k(U,2)),Se.setIndex(ye),Se.boundingSphere=new ue(new z(0,0,0),o);let Ce={uStateTex:{value:C[0].texture},uTerrTex:{value:T[0].texture},uMinDepth:{value:p}},we=new c({color:`#2f6f96`,roughness:.14,metalness:.45,transparent:!0,depthWrite:!1});we.onBeforeCompile=e=>{e.uniforms.uStateTex=Ce.uStateTex,e.uniforms.uTerrTex=Ce.uTerrTex,e.uniforms.uMinDepth=Ce.uMinDepth,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
uniform sampler2D uStateTex;
uniform sampler2D uTerrTex;
uniform float uMinDepth;
attribute vec2 aGridUv;
varying float vDepth;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
  float _w = texture2D(uStateTex, aGridUv).r;
  float _terr = texture2D(uTerrTex, aGridUv).r;
  vDepth = _w;
  transformed.y = _w > uMinDepth ? (_terr + _w) : -50.0;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying float vDepth;`).replace(`#include <dithering_fragment>`,`#include <dithering_fragment>
  if (vDepth < 0.012) discard;
  gl_FragColor.a *= clamp((vDepth - 0.012) * 7.0, 0.16, 0.86);`)},we.customProgramCacheKey=()=>`lgr-flow-gpu`;let Te=new n(Se,we);Te.frustumCulled=!1,Te.castShadow=!1,Te.receiveShadow=!1,Te.raycast=()=>{},Te.renderOrder=3,Te.visible=!1;function W(){Ce.uStateTex.value=C[0].texture,Ce.uTerrTex.value=T[0].texture}function G(e){e=Math.min(e,1/30),(!ee||A)&&(H(),A=!1),P.uniforms.uState.value=C[0].texture,P.uniforms.uTerr.value=T[0].texture,P.uniforms.uFlux.value=w[0].texture,P.uniforms.uDt.value=e,de(P,w[1]),w.reverse(),ie.uniforms.uState.value=C[0].texture,ie.uniforms.uTerr.value=T[0].texture,ie.uniforms.uFlux.value=w[0].texture,ie.uniforms.uDt.value=e,de(ie,C[1]),C.reverse(),ee&&(le.uniforms.uState.value=C[0].texture,le.uniforms.uTerr.value=T[0].texture,le.uniforms.uFlux.value=w[0].texture,le.uniforms.uDt.value=e,le.uniforms.uErosK.value=te,de(le,T[1]),B.uniforms.uState.value=C[0].texture,B.uniforms.uTerr.value=T[0].texture,B.uniforms.uFlux.value=w[0].texture,B.uniforms.uDt.value=e,B.uniforms.uErosK.value=te,de(B,C[1]),T.reverse(),C.reverse(),V.uniforms.uState.value=C[0].texture,V.uniforms.uTerr.value=T[0].texture,V.uniforms.uFlux.value=w[0].texture,V.uniforms.uDt.value=e,de(V,C[1]),C.reverse()),W()}function Ee(){L.uniforms.uState.value=C[0].texture,L.uniforms.uTerr.value=T[0].texture,de(L,C[1]),C.reverse(),W()}function K(e,t,n=.5,r=1.6){(A||!ee)&&(H(),A=!1);let o=(e+a)/i,s=(t+a)/i,c=Math.max(1,r/i);L.uniforms.uRain.value=0,L.uniforms.uPourCount.value=1,L.uniforms.uPours.value[0].set(o,s,n),L.uniforms.uPourR.value[0]=c,Ee()}function De(e=.004){(A||!ee)&&(H(),A=!1),L.uniforms.uPourCount.value=0,L.uniforms.uRain.value=e,Ee()}function Oe(){ge(),A=!0,W()}function ke(e,t){ee=!!e,t!=null&&(te=Math.max(0,t)),A=!0}let Ae=new Float32Array(r*r*4);function je(e){return t.readRenderTargetPixels(e,0,0,r,r,Ae),Ae}function Me(){let e=je(C[0]),t=0;for(let n=0;n<r*r;n++)t+=e[n*4];return t}function Ne(e,t){let n=Math.round((e+a)/i),o=Math.round((t+a)/i);return n<0||n>=r||o<0||o>=r?0:je(C[0])[(o*r+n)*4]}function Pe(){let e=je(C[0]),t=0;for(let n=0;n<r*r;n++)t+=e[n*4+1];return t}function Fe(){let e=je(C[0]),t=new Float32Array(r*r);for(let n=0;n<r*r;n++)t[n]=e[n*4];return t}function Ie(){let e=je(T[0]),t=new Float32Array(r*r);for(let n=0;n<r*r;n++)t[n]=e[n*4];return t}function q(e){Te.visible=!!e}function Le(){for(let e of C)e.dispose();for(let e of w)e.dispose();for(let e of T)e.dispose();D.dispose(),Se.dispose(),we.dispose(),j.geometry.dispose(),P.dispose(),ie.dispose(),L.dispose(),oe.dispose(),le.dispose(),B.dispose(),V.dispose()}return{mesh:Te,step:G,pourAt:K,rain:De,clear:Oe,totalWater:Me,cellAt:Ne,totalSediment:Pe,readW:Fe,readTerr:Ie,setErosion:ke,setVisible:q,dispose:Le,get grid(){return r},get erosion(){return ee}}}function Hn({worldHeightAt:e,applyErosion:t=null,syncErodedTerrain:r=null,worldSize:i=26,grid:o=96,seaY:s=0,renderer:l=null}={}){let u=o,d=new Float32Array(u*u),f=new Float32Array(u*u),p=new Float32Array(u*u),m=new Float32Array(u*u),h=new Float32Array(u*u),g=new Float32Array(u*u),_=new Float32Array(u*u),v=new Float32Array(u*u),y=new Float32Array(u*u),b=!1,x=1,S=i/(u-1),C=i/2,w=e||(()=>0),T=e=>e*S-C,E=e=>e*S-C,D=(e,t)=>t*u+e,O=26*S,ee=.9,te=.006,A=.5,ne=.25,re=.3,j=.006;function M(){for(let e=0;e<u;e++)for(let t=0;t<u;t++)g[D(t,e)]=w(T(t),E(e))}let N=`cpu`,P=null,F=new Float32Array(u*u),I=0;function ie(e){M();for(let t=0;t<u*u;t++)e[t]=g[t]}function ae(){return P||!l?P:(P=Vn({renderer:l,N:u,cell:S,half:C,worldSize:i,seaY:s,FLOW:O,DAMP:ee,MIN_DEPTH:te,KC:A,KE:ne*3,KD:re*3,KADV:6,MAXD:j*3,readTerrain:ie}),P&&U.add(P.mesh),P)}function L(e){if(e===`gpu`){if(ae(),!P)return typeof console<`u`&&console.info(`[L87] GPU backend unavailable (no renderer / no float RT) — staying on CPU (oracle).`),N=`cpu`,oe(),N;N=`gpu`,P.setErosion(b,x),b&&(ie(F),I=0)}else N=`cpu`;return oe(),N}function oe(){P&&P.setVisible(N===`gpu`),N===`gpu`?ve.visible=!1:ye()}let R=new Float32Array(u*u);function ce(){if(++I<20)return;I=0;let e=P.readTerr(),t=!1;for(let n=0;n<u*u;n++){let r=e[n]-F[n];R[n]=r,r!==0&&(t=!0),F[n]=e[n]}t&&r(R,u)}function z(e){if(N===`gpu`&&P){P.step(e),b&&r&&ce();return}e=Math.min(e,1/30),M(),e=Math.min(e,1/30),M();for(let t=0;t<u;t++)for(let n=0;n<u;n++){let r=D(n,t),i=g[r]+d[r],a=0,o=0,s=0,c=0;n>0&&(a=Math.max(0,f[r]*ee+e*O*(i-(g[r-1]+d[r-1])))),n<u-1&&(o=Math.max(0,p[r]*ee+e*O*(i-(g[r+1]+d[r+1])))),t>0&&(c=Math.max(0,h[r]*ee+e*O*(i-(g[r-u]+d[r-u])))),t<u-1&&(s=Math.max(0,m[r]*ee+e*O*(i-(g[r+u]+d[r+u]))));let l=(a+o+s+c)*e,_=l>1e-9?Math.min(1,d[r]/l):1;f[r]=a*_,p[r]=o*_,h[r]=c*_,m[r]=s*_}for(let t=0;t<u;t++)for(let n=0;n<u;n++){let r=D(n,t),i=0;n>0&&(i+=p[r-1]),n<u-1&&(i+=f[r+1]),t>0&&(i+=m[r-u]),t<u-1&&(i+=h[r+u]);let a=f[r]+p[r]+h[r]+m[r];d[r]+=e*(i-a),d[r]<0&&(d[r]=0),g[r]<s-.02&&(d[r]=0)}b&&t&&le(e),ye()}function le(e){y.fill(0);for(let t=0;t<u;t++)for(let n=0;n<u;n++){let r=D(n,t);if(d[r]<=te){if(_[r]>0){let t=Math.min(j,re*_[r]*e);y[r]+=t,_[r]-=t}continue}let i=(f[r]+p[r]+m[r]+h[r])/(d[r]+.02),a=n>0?g[r-1]:g[r],o=n<u-1?g[r+1]:g[r],s=t>0?g[r-u]:g[r],c=t<u-1?g[r+u]:g[r],l=Math.min(2,Math.hypot(o-a,c-s)/(2*S)),v=A*i*Math.max(.05,l)*x;if(v>_[r]){let t=Math.min(j,ne*(v-_[r])*e);y[r]-=t,_[r]+=t}else{let t=Math.min(j,re*(_[r]-v)*e);y[r]+=t,_[r]-=t,_[r]<0&&(_[r]=0)}}v.set(_);for(let t=0;t<u;t++)for(let n=0;n<u;n++){let r=D(n,t),i=f[r]+p[r]+m[r]+h[r];if(i<=1e-9||_[r]<=1e-9)continue;let a=Math.min(_[r],_[r]*6*e);v[r]-=a,n>0&&(v[r-1]+=a*f[r]/i),n<u-1&&(v[r+1]+=a*p[r]/i),t>0&&(v[r-u]+=a*h[r]/i),t<u-1&&(v[r+u]+=a*m[r]/i)}_.set(v);for(let e=0;e<u*u;e++)_[e]<0&&(_[e]=0),g[e]<s-.02&&(_[e]=0);t(y,u)}function B(e,t){b=!!e,t!=null&&(x=Math.max(0,t)),e||_.fill(0),N===`gpu`&&P&&(P.setErosion(e,t),e&&(ie(F),I=0))}function V(e,t,n=.5,r=1.6){if(N===`gpu`&&P)return P.pourAt(e,t,n,r);let i=(e+C)/S,a=(t+C)/S,o=Math.max(1,r/S),s=Math.max(0,Math.floor(i-o)),c=Math.min(u-1,Math.ceil(i+o)),l=Math.max(0,Math.floor(a-o)),f=Math.min(u-1,Math.ceil(a+o));for(let e=l;e<=f;e++)for(let t=s;t<=c;t++){let r=Math.hypot(t-i,e-a);r<=o&&(d[D(t,e)]+=n*(1-r/o))}}function ue(e=.004){if(N===`gpu`&&P)return P.rain(e);M();for(let t=0;t<u*u;t++)g[t]>s&&(d[t]+=e)}function de(){if(N===`gpu`&&P)return P.clear();d.fill(0),f.fill(0),p.fill(0),m.fill(0),h.fill(0),_.fill(0),ye()}function fe(){if(N===`gpu`&&P)return P.totalWater();let e=0;for(let t=0;t<u*u;t++)e+=d[t];return e}function pe(e,t){if(N===`gpu`&&P)return P.cellAt(e,t);let n=Math.round((e+C)/S),r=Math.round((t+C)/S);return n<0||n>=u||r<0||r>=u?0:d[D(n,r)]}let me=new Float32Array(u*u*3),he=new Float32Array(u*u);for(let e=0;e<u;e++)for(let t=0;t<u;t++){let n=D(t,e);me[n*3]=T(t),me[n*3+1]=-50,me[n*3+2]=E(e)}let H=[];for(let e=0;e<u-1;e++)for(let t=0;t<u-1;t++){let n=D(t,e),r=D(t+1,e),i=D(t,e+1),a=D(t+1,e+1);H.push(n,i,r,r,i,a)}let ge=new se;ge.setAttribute(`position`,new k(me,3)),ge.setAttribute(`aDepth`,new k(he,1)),ge.setIndex(H),ge.computeVertexNormals();let _e=new c({color:`#2f6f96`,roughness:.14,metalness:.45,transparent:!0,depthWrite:!1});_e.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
attribute float aDepth;
varying float vDepth;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
  vDepth = aDepth;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying float vDepth;`).replace(`#include <dithering_fragment>`,`#include <dithering_fragment>
  if (vDepth < 0.012) discard;
  gl_FragColor.a *= clamp((vDepth - 0.012) * 7.0, 0.16, 0.86);`)},_e.customProgramCacheKey=()=>`lgr-flow`;let ve=new n(ge,_e);ve.frustumCulled=!1,ve.castShadow=!1,ve.receiveShadow=!1,ve.raycast=()=>{},ve.renderOrder=3;let U=new a;U.add(ve),U.raycast=()=>{};function ye(){let e=0;for(let t=0;t<u*u;t++){let n=d[t];he[t]=n,me[t*3+1]=n>te?g[t]+n:-50,n>te&&e++}ge.attributes.position.needsUpdate=!0,ge.attributes.aDepth.needsUpdate=!0,ve.visible=e>0,typeof window<`u`&&(window.__flowWet=e)}ye();function be(){if(N===`gpu`&&P)return P.totalSediment();let e=0;for(let t=0;t<u*u;t++)e+=_[t];return e}return{group:U,step:z,pourAt:V,rain:ue,clear:de,totalWater:fe,cellAt:pe,setErosion:B,totalSediment:be,setBackend:L,get backend(){return N},_debugReadW:()=>N===`gpu`&&P?P.readW():d.slice(),_debugReadTerr:()=>N===`gpu`&&P?P.readTerr():(M(),g.slice()),_debugReadS:()=>N===`gpu`&&P?P.totalSediment():be(),_debugStepN:(e,t=1/60)=>{for(let n=0;n<e;n++)z(t)},get erosion(){return b},get grid(){return u},get visible(){return ve.visible}}}var Un=[{id:`place`,label:`Place`,icon:`✚`,key:`1`},{id:`sculpt`,label:`Sculpt`,icon:`⛰`,key:`2`},{id:`paint`,label:`Paint`,icon:`🎨`,key:`3`},{id:`scatter`,label:`Objects`,icon:`🌲`,key:`4`},{id:`flow`,label:`Water`,icon:`💧`,key:`5`},{id:`select`,label:`Select`,icon:`◳`,key:`6`}],Wn=[`tree`,`rock`,`tuft`],Gn=[`gull`,`boat`,`fish`,`cloud`,`person`,`atv`,`craft`],Kn=(e,t,n)=>e<t?t:e>n?n:e;function qn({world:e,catalog:t,inspector:n}={}){let r=`sculpt`,i=1,a=!1,o={radius:2.2,strength:.05,density:.6,dropN:1},s={biome:2,scatter:`tree`,entity:`gull`},c=null,l=!1;function u(e){return Un.some(t=>t.id===e)&&(r=e),r}function d(e){let t=Un.find(t=>t.key===e);return t&&(r=t.id),r}function f(){return i=-i,i}function p(e){return o.radius=Kn(e,.8,6),o.radius}function m(e){return o.strength=Kn(e,.01,.15),o.strength}function h(e){return o.density=Kn(e,.1,1),o.density}function g(e){return o.dropN=[1,10,50].includes(e)?e:1,o.dropN}function _(e){return s.biome=e|0,s.biome}function v(e){return Wn.includes(e)&&(s.scatter=e),s.scatter}function y(e){return Gn.includes(e)&&(s.entity=e),s.entity}function b(e){let n=t&&t.get(e);return n?n.kind===`material`?_(n.defaults.colorIndex??s.biome):n.kind===`scatter`?v(n.defaults.geoKey):n.kind===`entity`?y(e.replace(`ent-`,``)):null:null}function x(t,n,r){let i=0;for(let a=0;a<r;a++){let r=Math.random()*Math.PI*2,a=Math.sqrt(Math.random())*o.radius;e.placeEntity(s.entity,t+Math.cos(r)*a,n+Math.sin(r)*a)&&i++}return i}function S(t,n,r){if(r<0){e.removeEntityNear(t,n,o.radius),c={x:t,z:n};return}if(o.dropN>1){l&&=(x(t,n,o.dropN),!1);return}(!c||Math.hypot(t-c.x,n-c.z)>=o.radius*.7)&&(e.placeEntity(s.entity,t,n),c={x:t,z:n})}function C(t,n,i){i!==0&&(r===`paint`?e.paintBiome(t,n,s.biome,o.radius):r===`scatter`?e.paintScatter(t,n,{type:s.scatter,density:o.density,radius:o.radius,erase:i<0}):r===`place`?S(t,n,i):r===`sculpt`?e.sculpt(t,n,i,o.radius,o.strength):r===`flow`&&i>0&&e.flowPourAt(t,n,void 0,o.radius))}let w=()=>r!==`select`&&r!==`flow`;function T(){w()&&e.snapshot(),l=!0,c=null}function E(){c=null}function D(e,t){return n?n.pickAt(e,t):null}function O(){return e.undo()}function ee(){return e.snapshot()}function te(){return a=!a,e.setScatterHidden&&e.setScatterHidden(a),a}return{get tools(){return Un},placeKinds:Gn,get tool(){return r},setTool:u,setToolByKey:d,get dir(){return i},get raise(){return i>0},toggleDir:f,brush:o,setRadius:p,setStrength:m,setDensity:h,setDropN:g,get selection(){return{...s}},get material(){return s.biome},get scatterType(){return s.scatter},get entity(){return s.entity},setMaterial:_,setScatter:v,setEntity:y,select:b,applyAt:C,beginStroke:T,endStroke:E,pickAt:D,dropEntities:x,undo:O,snapshot:ee,get canUndo(){return e.canUndo},get scatterHidden(){return a},toggleHideScatter:te}}var Jn=120;function Yn(e,t){return e.length?e[Math.min(e.length-1,Math.max(0,Math.round(t/100*(e.length-1))))]:0}function Xn({renderer:e}){let t=e.getContext(),n=!1,r=new Float32Array(Jn),i=0,a=0,o=0,s=0,c=t.getExtension&&t.getExtension(`EXT_disjoint_timer_query_webgl2`),l=[],u=null,d=null,f=c&&c.TIME_ELAPSED_EXT,p=c&&c.GPU_DISJOINT_EXT,m=null,h=0,g=!1,_={fps:0,cpuMs:{p50:0,p95:0,p99:0},gpuMs:null,info:null,leak:!1,gpuTimer:!!c},v=0,y=typeof performance<`u`?performance.now():0;function b(){n||=(e.info.autoReset=!1,!0),o=performance.now();let r=e.info;_.info={calls:r.render.calls,tris:r.render.triangles,programs:r.programs?r.programs.length:0,geo:r.memory.geometries,tex:r.memory.textures},r.reset(),c&&!u&&(u=t.createQuery(),t.beginQuery(f,u))}function x(){if(r[a]=performance.now()-o+s,a=(a+1)%Jn,i<Jn&&i++,c&&u&&(t.endQuery(f),l.push(u),u=null),c&&l.length){let e=l[0],n=t.getQueryParameter(e,t.QUERY_RESULT_AVAILABLE),r=t.getParameter(p);(n||r)&&(l.shift(),n&&!r&&(d=t.getQueryParameter(e,t.QUERY_RESULT)/1e6),t.deleteQuery(e))}if(_.info){let e=_.info.geo+_.info.tex;m==null?m=e:e>m+200?(h++,h>300&&(g=!0)):h=Math.max(0,h-2)}v++;let e=performance.now();if(e-y>=1e3){let t=Array.from(r.subarray(0,i)).sort((e,t)=>e-t);_.fps=v,_.cpuMs={p50:+Yn(t,50).toFixed(2),p95:+Yn(t,95).toFixed(2),p99:+Yn(t,99).toFixed(2)},_.gpuMs=d==null?null:+d.toFixed(2),_.leak=g,v=0,y=e,typeof window<`u`&&(window.__fps=_.fps,window.__perf=C())}}function S(){return i?Yn(Array.from(r.subarray(0,i)).sort((e,t)=>e-t),95):0}function C(){return{fps:_.fps,cpuMs:_.cpuMs,gpuMs:_.gpuMs,info:_.info,leak:_.leak,gpuTimer:!!c}}return{frameStart:b,frameEnd:x,sample:C,p95Now:S,get gpuTimerAvailable(){return!!c},forceLoad(e=0){s=Math.max(0,e)}}}var Zn=[{dpr:null,shadows:!0},{dpr:1.5,shadows:!0},{dpr:1,shadows:!0},{dpr:1,shadows:!1},{dpr:.75,shadows:!1}];function Qn({profiler:e,apply:t,targetFps:n=30,strongFps:r=58}={}){let i=1e3/n,a=1e3/r,o=0,s=0,c=0,l=`full`;function u(){let n=e.p95Now();return n<=0||(n>i?(s++,c=0,s>=45&&o<Zn.length-1&&(o++,s=0,l=`p95 ${n.toFixed(1)}ms > ${i.toFixed(0)}ms`,t(o,Zn[o]),d(n))):n<a?(c++,s=0,c>=180&&o>0&&(o--,c=0,l=`p95 ${n.toFixed(1)}ms < ${a.toFixed(0)}ms (headroom)`,t(o,Zn[o]),d(n))):(s=Math.max(0,s-1),c=Math.max(0,c-1))),o}function d(e){typeof window<`u`&&(window.__quality={level:o,of:Zn.length-1,reason:l,p95:+(e||0).toFixed(1)})}return d(0),{update:u,get level(){return o},get reason(){return l},reset(){o=0,s=c=0,l=`full`,t(0,Zn[0]),d(0)}}}function $n(e){let t=rt(e>>>0),n=new Uint8Array(256);for(let e=0;e<256;e++)n[e]=e;for(let e=255;e>0;e--){let r=t()*(e+1)|0,i=n[e];n[e]=n[r],n[r]=i}let r=new Uint8Array(512);for(let e=0;e<512;e++)r[e]=n[e&255];let i=e=>e*e*e*(e*(e*6-15)+10),a=(e,t,n)=>e+(t-e)*n,o=(e,t,n)=>{let r=e&4?n:t,i=e&4?t:n;return(e&1?-r:r)+(e&2?-i:i)};return(e,t)=>{let n=Math.floor(e)&255,s=Math.floor(t)&255,c=e-Math.floor(e),l=t-Math.floor(t),u=i(c),d=i(l),f=r[r[n]+s],p=r[r[n]+s+1],m=r[r[n+1]+s],h=r[r[n+1]+s+1];return a(a(o(f,c,l),o(m,c-1,l),u),a(o(p,c,l-1),o(h,c-1,l-1),u),d)}}function er(e,t,n,r,i,a){let o=.5,s=1,c=0,l=0;for(let u=0;u<r;u++)c+=o*e(t*s,n*s),l+=o,o*=a,s*=i;return c/l}function tr(e,t,n,r,i,a){let o=.5,s=1,c=0,l=0;for(let u=0;u<r;u++){let r=1-Math.abs(e(t*s,n*s));r*=r,c+=o*r,l+=o,o*=a,s*=i}return c/l}var nr=(e,t,n)=>(n=Math.max(0,Math.min(1,(n-e)/(t-e))),n*n*(3-2*n)),rr=[{key:`ocean`,color:`#2a5b7a`},{key:`beach`,color:`#d8c89a`},{key:`grassland`,color:`#6f9a4e`},{key:`forest`,color:`#3f6b3a`},{key:`hills`,color:`#8a8a55`},{key:`rock`,color:`#7d7468`},{key:`snow`,color:`#eef2f6`}],ir=Object.fromEntries(rr.map((e,t)=>[e.key,t]));function ar(e,t,n){if(e<n-.015)return ir.ocean;if(e<n+.02)return ir.beach;let r=(e-n)/(1-n);return r>.82?ir.snow:r>.6?ir.rock:r>.34?t>.45?ir.forest:ir.hills:t>.55?ir.forest:ir.grassland}var or={valley:{freq:2.3,mtnMask:.3,mtnGain:.55,sea:.3,relief:7.5,warp:.9},archipelago:{freq:3.4,mtnMask:.18,mtnGain:.4,sea:.5,relief:6,warp:1.3},mountains:{freq:2,mtnMask:.62,mtnGain:.85,sea:.26,relief:11,warp:.8},plains:{freq:1.8,mtnMask:.12,mtnGain:.3,sea:.28,relief:4.5,warp:.7}},sr=Object.keys(or);function cr({seed:e=1,size:t=160,preset:n=`valley`,params:r=null}={}){let i=r||or[n]||or.valley,a=$n(e*2+1),o=$n(e*5+9),s=$n(e*7+13),c=$n(e*3+5),l=new Float32Array(t*t),u=new Uint8Array(t*t),d=1/0,f=-1/0;for(let e=0;e<t;e++)for(let n=0;n<t;n++){let r=(n/t-.5)*i.freq,p=(e/t-.5)*i.freq,m=r+i.warp*er(c,r+5.2,p+1.3,4,2,.5),h=p+i.warp*er(c,r+9.7,p+4.1,4,2,.5),g=er(a,m,h,6,2,.5)*.5+.5,_=nr(.45,.75,er(o,r*.5,p*.5,3,2,.5)*.5+.5),v=tr(a,m*1.7+11,h*1.7+7,5,2,.5);g=g*(1-_*i.mtnMask)+v*(_*i.mtnMask*(.6+i.mtnGain));let y=n/t-.5,b=e/t-.5,x=Math.sqrt(y*y+b*b)*2;g-=nr(.62,1,x)*.55,g=Math.max(0,Math.min(1,g));let S=er(s,r*.8+3,p*.8+8,4,2,.5)*.5+.5,C=e*t+n;l[C]=g,u[C]=ar(g,S,i.sea),g<d&&(d=g),g>f&&(f=g)}return{size:t,height:l,biome:u,sea:i.sea,relief:i.relief,minH:d,maxH:f,params:i,seed:e,preset:n}}var lr=rr.map(e=>new F(e.color)),ur=new F,dr=new z,fr=new z,pr=new z;function mr(e,t,n,r,i,a,o,s){let{size:c,height:l,biome:u,sea:d,relief:f}=e,{cell:p,half:m,baseY:h}=t,g=e=>e*p-m,_=e=>e*p-m,v=e=>h+(e-d)*f,y=(e,t)=>{let n=l[t*c+e],r=0,i=0;e>0&&(r+=l[t*c+e-1],i++),e<c-1&&(r+=l[t*c+e+1],i++),t>0&&(r+=l[(t-1)*c+e],i++),t<c-1&&(r+=l[(t+1)*c+e],i++);let a=Math.max(0,(i?r/i:n)-n);return Math.min(.5,a*f*.8)},b=0,x=(e,t,n,c,l,u,d,f,p,m,h,g,_)=>{dr.set(c-e,l-t,u-n),fr.set(d-e,f-t,p-n),pr.crossVectors(dr,fr).normalize();let v=[[e,t,n,h],[c,l,u,g],[d,f,p,_]];for(let[e,t,n,c]of v)r[b*3]=e,r[b*3+1]=t,r[b*3+2]=n,i[b*3]=pr.x,i[b*3+1]=pr.y,i[b*3+2]=pr.z,s&&(a[b*3]=m.r,a[b*3+1]=m.g,a[b*3+2]=m.b),o&&(o[b]=c),b++};for(let e=n.j0;e<n.j1;e++)for(let t=n.i0;t<n.i1;t++){let n=g(t),r=g(t+1),i=_(e),a=_(e+1),o=v(l[e*c+t]),s=v(l[e*c+t+1]),d=v(l[(e+1)*c+t]),f=v(l[(e+1)*c+t+1]),p=y(t,e),m=y(t+1,e),h=y(t,e+1),b=y(t+1,e+1),S=lr[u[e*c+t]],C=lr[u[(e+1)*c+t+1]];x(n,o,i,n,d,a,r,s,i,ur.copy(S),p,h,m),x(r,s,i,n,d,a,r,f,a,ur.copy(C),m,h,b)}}function hr(e,{worldSize:t=26,baseY:r=0,chunks:i=4}={}){let{size:o}=e,s=new a,l={cell:t/(o-1),half:t/2,baseY:r};s.userData.world=l;let u=Math.ceil((o-1)/i);for(let t=0;t<i;t++)for(let r=0;r<i;r++){let i=r*u,a=t*u,d=Math.min(i+u,o-1),f=Math.min(a+u,o-1);if(d<=i||f<=a)continue;let p={i0:i,j0:a,i1:d,j1:f},m=(d-i)*(f-a)*6,h=new Float32Array(m*3),g=new Float32Array(m*3),_=new Float32Array(m*3),v=new Float32Array(m);mr(e,l,p,h,g,_,v,!0);let y=new se;y.setAttribute(`position`,new k(h,3)),y.setAttribute(`normal`,new k(g,3)),y.setAttribute(`color`,new k(_,3)),y.setAttribute(`aAo`,new k(v,1)),y.computeBoundingSphere();let b=new n(y,nt(new c({vertexColors:!0,roughness:.92,metalness:0,flatShading:!0})));b.castShadow=!0,b.receiveShadow=!0,b.userData.chunk=p,s.add(b)}return s.userData.dispose=()=>s.traverse(e=>{e.isMesh&&(e.geometry.dispose(),e.material.dispose())}),s}function gr(e,t,n,r=!1){let i=e.userData.world;for(let e of n){let n=e.geometry,a=n.attributes.aAo?n.attributes.aAo.array:null;mr(t,i,e.userData.chunk,n.attributes.position.array,n.attributes.normal.array,n.attributes.color.array,a,r),n.attributes.position.needsUpdate=!0,n.attributes.normal.needsUpdate=!0,a&&(n.attributes.aAo.needsUpdate=!0),r&&(n.attributes.color.needsUpdate=!0),n.computeBoundingSphere()}}var _r={beach:[{type:`rock`,density:.05,maxSlope:1.4}],grassland:[{type:`tree`,density:.1,maxSlope:.7},{type:`tuft`,density:.3,maxSlope:.9}],forest:[{type:`tree`,density:.62,maxSlope:.8},{type:`rock`,density:.03,maxSlope:1.2}],hills:[{type:`tree`,density:.14,maxSlope:.7},{type:`rock`,density:.16,maxSlope:1.6}],rock:[{type:`rock`,density:.22,maxSlope:2}]};function vr({terrain:e,seed:t=1,worldSize:n=26,baseY:r=0,biomeKeys:i,density:a=1,max:o=9e3}={}){let{size:s,height:c,biome:l,sea:u,relief:d}=e,f=rt((t^97155048)>>>0),p=n/(s-1),m=n/2,h=e=>r+(e-u)*d,g=(e,t)=>{let n=Math.max(1,Math.min(s-2,e)),r=Math.max(1,Math.min(s-2,t)),i=(c[r*s+n+1]-c[r*s+n-1])*d/(2*p),a=(c[(r+1)*s+n]-c[(r-1)*s+n])*d/(2*p);return Math.hypot(i,a)},_={tree:[],rock:[],tuft:[]};for(let e=1;e<s-1;e+=2)for(let t=1;t<s-1;t+=2){let n=e*s+t,r=c[n];if(r<u+.005)continue;let d=_r[i[l[n]]];if(!d)continue;let v=g(t,e);for(let n of d){let i=f();if(v>n.maxSlope||i>n.density*a)continue;let s=_[n.type];if(s.length>=o)continue;let c=(f()-.5)*p*2,l=(f()-.5)*p*2,u=t*p-m+c,d=e*p-m+l;s.push({x:u,y:h(r),z:d,s:.7+f()*.6,r:f()*Math.PI*2,t:.82+f()*.36})}}return{placements:_,counts:{tree:_.tree.length,rock:_.rock.length,tuft:_.tuft.length}}}function yr(e,t){let n=new F(t),r=e.attributes.position.count,i=new Float32Array(r*3),a=new Float32Array(r),o=e.attributes.position.array;for(let e=0;e<r;e++)i[e*3]=n.r,i[e*3+1]=n.g,i[e*3+2]=n.b,a[e]=Math.min(.45,Math.max(0,.42*(1-o[e*3+1]/.55)));return e.setAttribute(`color`,new k(i,3)),e.setAttribute(`aAo`,new k(a,1)),e}function br(e){let t=0;for(let n of e)t+=n.attributes.position.count;let n=new Float32Array(t*3),r=new Float32Array(t*3),i=new Float32Array(t*3),a=new Float32Array(t),o=0;for(let t of e)n.set(t.attributes.position.array,o*3),r.set(t.attributes.normal.array,o*3),i.set(t.attributes.color.array,o*3),t.attributes.aAo&&a.set(t.attributes.aAo.array,o),o+=t.attributes.position.count;let s=new se;return s.setAttribute(`position`,new k(n,3)),s.setAttribute(`normal`,new k(r,3)),s.setAttribute(`color`,new k(i,3)),s.setAttribute(`aAo`,new k(a,1)),s}function xr(){return br([yr(new D(.045,.06,.34,6).translate(0,.17,0).toNonIndexed(),`#5b3f28`),yr(new P(.3,.55,7).translate(0,.55,0).toNonIndexed(),`#3f7d3a`),yr(new P(.22,.42,7).translate(0,.85,0).toNonIndexed(),`#4f9046`)])}function Sr(){let e=new oe(.18,0).toNonIndexed(),t=e.attributes.position,n=rt(3098);for(let e=0;e<t.count;e++){let r=.78+n()*.5;t.setXYZ(e,t.getX(e)*r,t.getY(e)*r*.8,t.getZ(e)*r)}return e.computeVertexNormals(),yr(e,`#7d7468`)}function Cr(){return yr(new P(.06,.16,4).translate(0,.08,0).toNonIndexed(),`#6f9a4e`)}var wr=[`tree`,`rock`,`tuft`],Tr={tree:0,rock:-.05,tuft:0},Er=new we,Dr=new _,Or=new z,kr=new z,Ar=new z(0,1,0),jr=new F;function Mr(e){let n=new a;n.raycast=()=>{};let r={tree:xr(),rock:Sr(),tuft:Cr()};for(let i of wr){let a=e[i]||(e[i]=[]),o=Math.max(a.length*2,512),s=nt(new c({vertexColors:!0,roughness:.9,metalness:0,flatShading:!0})),l=new L(r[i],s,o);l.count=a.length,l.castShadow=!0,l.receiveShadow=!1,l.frustumCulled=!0,l.raycast=()=>{},l.userData.type=i,l.instanceColor=new t(new Float32Array(o*3),3);for(let e=0;e<a.length;e++)Nr(l,e,a[e],Tr[i]);l.instanceMatrix.needsUpdate=!0,l.instanceColor.needsUpdate=!0,n.add(l)}return n.userData.placements=e,n.userData.yoff=Tr,n.userData.dispose=()=>n.traverse(e=>{e.isInstancedMesh&&(e.geometry.dispose(),e.material.dispose())}),n}function Nr(e,t,n,r){Or.set(n.x,n.y+(r||0),n.z),Dr.setFromAxisAngle(Ar,n.r),kr.setScalar(n.s),e.setMatrixAt(t,Er.compose(Or,Dr,kr)),e.setColorAt(t,jr.setScalar(n.t))}var Pr=(e,t)=>e.children.find(e=>e.isInstancedMesh&&e.userData.type===t);function Fr(e,n){let r=n.instanceMatrix.count*2,i=new L(n.geometry,n.material,r);return i.count=n.count,i.castShadow=!0,i.receiveShadow=!1,i.frustumCulled=!0,i.raycast=()=>{},i.userData.type=n.userData.type,i.instanceColor=new t(new Float32Array(r*3),3),i.instanceMatrix.array.set(n.instanceMatrix.array.subarray(0,n.count*16)),i.instanceColor.array.set(n.instanceColor.array.subarray(0,n.count*3)),i.instanceMatrix.needsUpdate=!0,i.instanceColor.needsUpdate=!0,e.remove(n),e.add(i),i}function Ir(e,t,n,r,i,a,o,s){let c=Pr(e,t);if(!c)return!1;let l=e.userData.placements[t];l.length>=c.instanceMatrix.count&&(c=Fr(e,c));let u=l.length;return l.push({x:n,y:r,z:i,s:a,r:o,t:s}),Nr(c,u,l[u],(e.userData.yoff||{})[t]||0),c.count=l.length,c.instanceMatrix.needsUpdate=!0,c.instanceColor.needsUpdate=!0,!0}function Lr(e,t,n,r,i){let a=t===`all`?wr:[t],o=i*i,s=0;for(let t of a){let i=Pr(e,t);if(!i)continue;let a=e.userData.placements[t],c=i.instanceMatrix.array,l=i.instanceColor&&i.instanceColor.array;for(let e=a.length-1;e>=0;e--){let t=a[e];if((t.x-n)*(t.x-n)+(t.z-r)*(t.z-r)>o)continue;let i=a.length-1;if(e!==i){a[e]=a[i];for(let t=0;t<16;t++)c[e*16+t]=c[i*16+t];if(l)for(let t=0;t<3;t++)l[e*3+t]=l[i*3+t]}a.pop(),s++}i.count=a.length,i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0)}return s}var Rr={tree:.85,rock:2,tuft:.95};function zr(e,t,{worldSize:n=26,baseY:r=0}={}){let i=e.userData.placements,a=e.userData.yoff||{};if(!i)return;let{size:o,height:s,sea:c,relief:l}=t,u=n/(o-1),d=n/2,f=e=>e<0?0:e>=o?o-1:e,p=(e,t)=>s[f(Math.round((t+d)/u))*o+f(Math.round((e+d)/u))],m=(e,t)=>{let n=Math.max(1,Math.min(o-2,Math.round((e+d)/u))),r=Math.max(1,Math.min(o-2,Math.round((t+d)/u))),i=(s[r*o+n+1]-s[r*o+n-1])*l/(2*u),a=(s[(r+1)*o+n]-s[(r-1)*o+n])*l/(2*u);return Math.hypot(i,a)},h=new we,g=new _,v=new z,y=new z,b=new z(0,1,0),x=new F;for(let t of e.children){let e=t.userData.type,n=i[e];if(!n||!t.isInstancedMesh)continue;let o=Rr[e]??1.5,s=t.instanceMatrix.count,u=Math.min(n.length,s);t.count=u;for(let i=0;i<u;i++){let s=n[i],u=p(s.x,s.z),d=u<c+.005||m(s.x,s.z)>o;v.set(s.x,r+(u-c)*l+(a[e]||0),s.z),g.setFromAxisAngle(b,s.r),y.setScalar(d?0:s.s),h.compose(v,g,y),t.setMatrixAt(i,h),t.setColorAt(i,x.setScalar(s.t))}t.instanceMatrix.needsUpdate=!0,t.instanceColor&&(t.instanceColor.needsUpdate=!0)}}function Br({terrain:e,seed:t,worldSize:n,baseY:r,biomeKeys:i,density:a,max:o}){let{placements:s,counts:c}=vr({terrain:e,seed:t,worldSize:n,baseY:r,biomeKeys:i,density:a,max:o}),l=Mr(s);return l.userData.counts=c,l}function Vr(e,{worldSize:t=26,baseY:n=0,maxLakes:r=3}={}){let{size:i,height:a,sea:o,relief:s,maxH:c}=e,l=Math.floor((i-1)/3),u=t/(i-1),d=t/2,f=(e,t)=>a[t*3*i+e*3],p=e=>e*3*u-d,m=e=>e*3*u-d,h=e=>e>o+.02,g=o+.55*Math.max(.001,c-o),_=[];for(let e=2;e<l-2;e++)for(let t=2;t<l-2;t++){let n=f(t,e);if(!h(n)||n>g)continue;let r=!0;for(let i=-1;i<=1&&r;i++)for(let a=-1;a<=1;a++)if((a||i)&&f(t+a,e+i)<n){r=!1;break}r&&_.push({gi:t,gj:e,h:n})}_.sort((e,t)=>e.h-t.h);let v=new Uint8Array(l*l),y=[];for(let e of _){if(y.length>=r)break;if(v[e.gj*l+e.gi])continue;let t=e.h+.045,i=[[e.gi,e.gj]],a=new Set,c=!0,d=0,h=0,g=0,_=[];for(;i.length;){let[e,n]=i.pop(),r=n*l+e;if(a.has(r))continue;if(a.add(r),e<=0||e>=l-1||n<=0||n>=l-1){c=!1;continue}let s=f(e,n);if(s<o){c=!1;continue}if(!(s>=t)){if(_.push(r),d+=e,h+=n,g++,g>520){c=!1;break}i.push([e+1,n],[e-1,n],[e,n+1],[e,n-1])}}if(!c||g<5)continue;for(let e of _)v[e]=1;let b=d/g,x=h/g,S=3*u,C=g*S*S,w=.82*Math.sqrt(C/Math.PI);y.push({cx:p(b),cz:m(x),y:n+(t-o)*s,radius:w,area:C})}return y}function Hr(e,{material:t}={}){let r=new a;r.raycast=()=>{};let i=t||new c({color:`#3f6f8c`,roughness:.08,metalness:.35,transparent:!0,opacity:.88});for(let t of e){let e=new n(new de(t.radius,28),i);e.rotation.x=-Math.PI/2,e.position.set(t.cx,t.y+.012,t.cz),e.receiveShadow=!1,e.castShadow=!1,e.raycast=()=>{},r.add(e)}return r.userData.dispose=()=>r.traverse(e=>{e.isMesh&&e.geometry.dispose()}),r.userData.count=e.length,r}function Ur(e,t={}){let n=Vr(e,t),r=Hr(n,t);return r.userData.lakes=n,r}function Wr(){let e=new Map,t={register(n){return!n||!n.id?t:(n.art=n.art||{},n.defaults=n.defaults||{},e.set(n.id,n),t)},registerAll(e){for(let n of e)t.register(n);return t},get(t){return e.get(t)},byKind(t){return[...e.values()].filter(e=>e.kind===t)},byGroup(t){return[...e.values()].filter(e=>e.group===t)},all(){return[...e.values()]},setArt(n,r){let i=e.get(n);return i&&(i.art={...i.art,...r}),t},get size(){return e.size}};return t}function Gr(e=Wr()){return rr.forEach((t,n)=>e.register({id:`mat-${t.key}`,label:Kr(t.key),kind:`material`,group:`Terrain`,defaults:{colorIndex:n},art:{icon:t.color,placeholder:!0}})),e.registerAll([{id:`scatter-tree`,label:`Tree`,kind:`scatter`,group:`Vegetation`,defaults:{geoKey:`tree`,density:.4,maxSlope:.85},art:{icon:`🌲`,factory:null,placeholder:!0}},{id:`scatter-rock`,label:`Rock`,kind:`scatter`,group:`Rock`,defaults:{geoKey:`rock`,density:.2,maxSlope:2},art:{icon:`🪨`,factory:null,placeholder:!0}},{id:`scatter-tuft`,label:`Grass tuft`,kind:`scatter`,group:`Vegetation`,defaults:{geoKey:`tuft`,density:.3,maxSlope:.95},art:{icon:`🌱`,factory:null,placeholder:!0}}]),e.registerAll([{id:`ent-person`,label:`Person`,kind:`entity`,group:`Life`,defaults:{medium:`ground`},art:{icon:`🚶`,placeholder:!0}},{id:`ent-car`,label:`Car`,kind:`entity`,group:`Life`,defaults:{medium:`road`},art:{icon:`🚗`,placeholder:!0}},{id:`ent-boat`,label:`Boat`,kind:`entity`,group:`Life`,defaults:{medium:`water`},art:{icon:`⛵`,placeholder:!0}},{id:`ent-fish`,label:`Fish`,kind:`entity`,group:`Life`,defaults:{medium:`water`},art:{icon:`🐟`,placeholder:!0}},{id:`ent-gull`,label:`Gull`,kind:`entity`,group:`Life`,defaults:{medium:`air`},art:{icon:`🕊`,placeholder:!0}},{id:`ent-cloud`,label:`Cloud`,kind:`entity`,group:`Sky`,defaults:{medium:`air`},art:{icon:`☁️`,placeholder:!0}},{id:`ent-atv`,label:`ATV`,kind:`entity`,group:`Vehicles`,defaults:{medium:`ground`,pilotable:!0,roam:`all-terrain`,model:`ground`},art:{icon:`🛻`,placeholder:!0}},{id:`ent-craft`,label:`Spacecraft`,kind:`entity`,group:`Vehicles`,defaults:{medium:`air`,pilotable:!0,roam:`all-medium`,model:`spacecraft`},art:{icon:`🛸`,placeholder:!0}}]),e}var Kr=e=>e.charAt(0).toUpperCase()+e.slice(1);function qr({scale:e=90}={}){let t=new _e;t.scale.setScalar(e),t.frustumCulled=!1,t.raycast=()=>{},t.visible=!1;let n=t.material.uniforms;n.turbidity.value=2.2,n.rayleigh.value=1.3,n.mieCoefficient.value=.005,n.mieDirectionalG.value=.78;function r(e){n.sunPosition.value.copy(e)}function i(e){e&&(e.turbidity!=null&&(n.turbidity.value=e.turbidity),e.rayleigh!=null&&(n.rayleigh.value=e.rayleigh),e.mie!=null&&(n.mieCoefficient.value=e.mie),e.mieG!=null&&(n.mieDirectionalG.value=e.mieG))}let a=null,o=null,s=null,c=null;function l(t){if(typeof document>`u`||!t)return null;a||(a=new me(t),o=new he,s=new _e,s.scale.setScalar(e),o.add(s));let r=s.material.uniforms;return r.turbidity.value=n.turbidity.value,r.rayleigh.value=n.rayleigh.value,r.mieCoefficient.value=n.mieCoefficient.value,r.mieDirectionalG.value=n.mieDirectionalG.value,r.sunPosition.value.copy(n.sunPosition.value),c&&c.dispose(),c=a.fromScene(o),c.texture}return{mesh:t,setSun:r,setParams:i,buildEnv:l,get material(){return t.material}}}var Jr=`attribute float aSize;
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
}`,Yr=`precision highp float;

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
}`,Xr={realistic:0,charm:0,pixel:2,vector:1},Zr={realistic:1,charm:1,pixel:1.9,vector:1.2};function Qr({seed:e=1517,count:t=340,spreadX:n=21,yLo:i=3,yHi:o=18,zBase:s=7.2}={}){let c=new a;c.raycast=()=>{};let l=rt(e>>>0),u=new Float32Array(t*3),d=new Float32Array(t),f=new Float32Array(t),p=new Float32Array(t),h=[];for(let e=0;e<t;e++){let t=(l()*2-1)*n,r=i+l()*(o-i),a=-s-l()*.7;u[e*3]=t,u[e*3+1]=r,u[e*3+2]=a;let c=.35+l()*.65;f[e]=c,d[e]=1.6+l()*2.8+(c>.85?2.2:0),p[e]=l()*Math.PI*2,c>.82&&h.push([t,r,a])}let _=new se;_.setAttribute(`position`,new k(u,3)),_.setAttribute(`aSize`,new k(d,1)),_.setAttribute(`aBright`,new k(f,1)),_.setAttribute(`aPhase`,new k(p,1));let v=new ae({vertexShader:Jr,fragmentShader:Yr,uniforms:{uTime:{value:0},uTwinkle:{value:1},uSizeScale:{value:1},uColor:{value:new F(`#eaf0ff`)},uNight:{value:0},uMode:{value:0}},transparent:!0,depthWrite:!1,blending:2,fog:!1,toneMapped:!1}),y=new w(_,v);y.raycast=()=>{},y.frustumCulled=!1,c.add(y);let b=[];if(h.length>6)for(let e=0;e<3;e++){let e=Math.floor(l()*h.length);for(let t=0;t<3;t++){let t=h[e],n=h[(e+1+Math.floor(l()*2))%h.length];b.push(t[0],t[1],t[2],n[0],n[1],n[2]),e=(e+1)%h.length}}let x=[[[0,2],[0,0]],[[0,0],[.7,0]],[[2.1,2],[1.4,2]],[[1.4,2],[1.4,0]],[[1.4,0],[2.1,0]],[[2.1,0],[2.1,1]],[[2.1,1],[1.7,1]],[[2.8,0],[2.8,2]],[[2.8,2],[3.5,2]],[[3.5,2],[3.5,1]],[[3.5,1],[2.8,1]],[[2.8,1],[3.6,0]]],S=-s-.4,C=.62;for(let[[e,t],[n,r]]of x)b.push(-3+e*C,12+t*C,S,-3+n*C,12+r*C,S);let T=new se;T.setAttribute(`position`,new r(b,3));let E=new g(T,new m({color:`#9fb6e8`,transparent:!0,opacity:0,depthWrite:!1,fog:!1,toneMapped:!1}));E.raycast=()=>{},E.frustumCulled=!1,c.add(E);let D=new R(new ye({map:$r(),transparent:!0,opacity:0,depthWrite:!1,blending:2,fog:!1,toneMapped:!1}));D.raycast=()=>{},D.scale.set(n*2.4,n*.95,1),D.position.set(2,12,-s-.7),D.material.rotation=-.5,D.renderOrder=-3,c.add(D);let O=-1;function ee(e,t=`realistic`,n=0,r=!1){v.uniforms.uTime.value=n,v.uniforms.uTwinkle.value=+!r,v.uniforms.uNight.value=e;let i=Xr[t]??0;i!==O&&(v.uniforms.uMode.value=i,O=i),v.uniforms.uSizeScale.value=Zr[t]??1,E.material.opacity=e*.5,D.material.opacity=e*.32,c.visible=e>.001}return{group:c,update:ee}}function $r(){let e=document.createElement(`canvas`);e.width=e.height=256;let t=e.getContext(`2d`),n=t.createRadialGradient(256/2,256/2,0,256/2,256/2,256/2);n.addColorStop(0,`rgba(150,170,230,0.5)`),n.addColorStop(.4,`rgba(120,130,200,0.22)`),n.addColorStop(1,`rgba(90,100,160,0)`),t.fillStyle=n,t.fillRect(0,0,256,256);let r=rt(20145);for(let e=0;e<7;e++){let e=40+r()*176,n=70+r()*116,i=14+r()*30,a=t.createRadialGradient(e,n,0,e,n,i);a.addColorStop(0,`rgba(200,210,255,0.18)`),a.addColorStop(1,`rgba(200,210,255,0)`),t.fillStyle=a,t.beginPath(),t.arc(e,n,i,0,Math.PI*2),t.fill()}let i=new U(e);return i.colorSpace=B,i}var ei=Math.PI*2;function ti(e){let t=document.createElement(`canvas`);t.width=t.height=128;let n=t.getContext(`2d`),r=n.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return r.addColorStop(0,`#ffffff`),r.addColorStop(.34,`#fffaf0`),r.addColorStop(.66,e),r.addColorStop(.86,e),r.addColorStop(1,`rgba(255,255,255,0)`),n.fillStyle=r,n.beginPath(),n.arc(128/2,128/2,128/2,0,ei),n.fill(),li(t,!0)}function ni(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);n.addColorStop(0,`#ffffff`),n.addColorStop(.4,`#eef3ff`),n.addColorStop(.82,`#c4cee6`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,128/2,0,ei),t.fill(),t.globalAlpha=.14,t.fillStyle=`#8b97b4`;for(let[e,n,r]of[[54,50,9],[78,66,7],[60,82,5]])t.beginPath(),t.arc(e,n,r,0,ei),t.fill();return li(e,!0)}function ri(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`);t.translate(128/2,128/2),t.fillStyle=`rgba(255,210,120,0.9)`;for(let e=0;e<12;e++)t.rotate(ei/12),t.beginPath(),t.moveTo(0,-28),t.lineTo(7,-54),t.lineTo(-7,-54),t.closePath(),t.fill();let n=t.createRadialGradient(0,0,0,0,0,32);return n.addColorStop(0,`#ffffff`),n.addColorStop(.4,`#fff1c8`),n.addColorStop(.8,`#ffb24a`),n.addColorStop(1,`#ff8a2a`),t.fillStyle=n,t.beginPath(),t.arc(0,0,32,0,ei),t.fill(),li(e,!0)}function ii(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,46);n.addColorStop(0,`#ffffff`),n.addColorStop(.5,`#e6ecfb`),n.addColorStop(1,`#c2cce4`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,46,0,ei),t.fill(),t.fillStyle=`#aab6d2`;for(let[e,n,r]of[[52,48,11],[80,62,8],[58,82,7],[40,66,5]])t.beginPath(),t.arc(e,n,r,0,ei),t.fill();return li(e,!0)}function ai(e,t,n){let r=document.createElement(`canvas`);r.width=r.height=144;let i=r.getContext(`2d`),a=17/2,o=18/2-.5;for(let r=0;r<18;r++)for(let s=0;s<18;s++){let c=Math.hypot(s-a,r-a);c>o||(i.fillStyle=c<o*.45?e:c<o*.78?t:n,i.fillRect(Math.round(s*8),Math.round(r*8),8,8))}return li(r,!1)}function oi(e,t,n=!1){let r=document.createElement(`canvas`);r.width=r.height=128;let i=r.getContext(`2d`);if(i.fillStyle=t,i.beginPath(),i.arc(64,64,58,0,ei),i.fill(),i.fillStyle=e,i.beginPath(),i.arc(64,64,50,0,ei),i.fill(),n){i.globalAlpha=.5,i.fillStyle=t;for(let[e,t,n]of[[10,-12,10],[-16,6,7],[4,18,5]])i.beginPath(),i.arc(64+e,64+t,n,0,ei),i.fill()}return li(r,!0)}function si(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return n.addColorStop(0,`rgba(255,255,255,0.9)`),n.addColorStop(.38,`rgba(255,255,255,0.3)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,128/2,0,ei),t.fill(),li(e,!0)}function ci(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2),r=`20,30,48`;return n.addColorStop(0,`rgba(${r},0)`),n.addColorStop(.42,`rgba(${r},0)`),n.addColorStop(.6,`rgba(${r},0.6)`),n.addColorStop(1,`rgba(${r},0)`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,128/2,0,ei),t.fill(),li(e,!0)}function li(e,t){let n=new U(e);return n.colorSpace=B,t||(n.magFilter=x,n.minFilter=x),n}var ui=(e,t,n)=>{let r=Math.max(0,Math.min(1,(e-t)/(n-t)));return r*r*(3-2*r)};function di({skyW:e=15,skyY0:t=3.4,skyH:n=2,z:r=-7.8,biasX:i=2,sunSize:o=4.6,moonSize:s=4}={}){let c=new a;c.raycast=()=>{};let l=(e,t)=>{let n=new R(new ye({map:e,transparent:!0,depthWrite:!1,fog:!1,toneMapped:!1,...t?{blending:2}:{}}));return n.raycast=()=>{},n},u={realistic:ti(`#ffcf8a`),charm:ri(),pixel:ai(`#fff6e0`,`#ffc24a`,`#ff8a2a`),vector:oi(`#ffd24a`,`#ff9a2e`)},d={realistic:ni(),charm:ii(),pixel:ai(`#ffffff`,`#cdd6ee`,`#9aa6c6`),vector:oi(`#e8eefc`,`#b9c6e4`,!0)},f=si(),p=l(ci(),!1),m=l(f,!0),h=l(u.realistic),g=l(f,!0),_=l(d.realistic);p.renderOrder=-2,m.renderOrder=-1,c.add(p,m,h,g,_);let v=Qr({});v.group.renderOrder=-4,c.add(v.group);let y=typeof window<`u`&&window.matchMedia?window.matchMedia(`(prefers-reduced-motion: reduce)`):null,b={realistic:{sunGlow:3,sunGlowOp:.7,moonGlow:2.6,moonGlowOp:.5,sizeMul:1,sunHaloOp:.85},charm:{sunGlow:2.2,sunGlowOp:.55,moonGlow:2.1,moonGlowOp:.42,sizeMul:1.08,sunHaloOp:.7},pixel:{sunGlow:1.7,sunGlowOp:.4,moonGlow:1.7,moonGlowOp:.32,sizeMul:1,sunHaloOp:.6},vector:{sunGlow:1.4,sunGlowOp:.28,moonGlow:1.4,moonGlowOp:.22,sizeMul:1,sunHaloOp:.5}},x=`realistic`;function S(e){e===x||!b[e]||(x=e,h.material.map=u[e],h.material.needsUpdate=!0,_.material.map=d[e],_.material.needsUpdate=!0)}new F;let C=new z,w=new z,T=new z;function E(e,t,n,r,i=0){if(!t||n<=.02)return;let a=ui(r,.22,.55);if(a<=.01)return;let o=1-.19999999999999996*a;if(C.copy(e).project(t),C.z<=-1||C.z>=1)return;let s=0,c=0;i>0&&(T.setFromMatrixColumn(t.matrixWorld,0).multiplyScalar(i),s=Math.abs(w.copy(e).add(T).project(t).x-C.x),T.setFromMatrixColumn(t.matrixWorld,1).multiplyScalar(i),c=Math.abs(w.copy(e).add(T).project(t).y-C.y));let l=Math.max(0,o-s),u=Math.max(0,o-c),d=C.x,f=C.y,p=!1;d<-l&&(d=-l,p=!0),d>l&&(d=l,p=!0),f>u&&(f=u,p=!0),p&&(C.set(d,f,C.z).unproject(t),e.copy(C))}let D=new F(`#fff3df`),O=new F(`#ffb060`),ee=new F(`#ff6a2a`),te=new F(`#eef2ff`),k=new F(`#9fbcff`);function A(a,c,l,u,d=`realistic`,f=null){S(d);let C=b[x],w=l.sunArc,T=u?Math.min(1,(u.cloud||0)*.85+(u.fog||0)*.7):0,A=w.y,ne=ui(A,-.04,.1)*(1-.7*T),re=1-ui(Math.abs(A),.02,.5),j=o*C.sizeMul*(1+.55*re);h.position.set(w.x*e+i,t+w.y*n,r),E(h.position,f,ne,A,j*.5),m.position.copy(h.position),h.scale.setScalar(j),m.scale.setScalar(j*C.sunGlow),h.material.color.copy(D),m.material.color.copy(O).lerp(ee,re),h.material.opacity=ne,m.material.opacity=ne*C.sunGlowOp*(.7+.5*re),p.position.copy(h.position),p.scale.setScalar(j*1.7),p.material.opacity=ne*(1-re)*C.sunHaloOp;let M=-w.y,N=ui(M,-.04,.1)*(1-.65*T),P=s*C.sizeMul;_.position.set(-w.x*e+i,t+-w.y*n,r),E(_.position,f,N,M,P*.5),g.position.copy(_.position),_.scale.setScalar(P),g.scale.setScalar(P*C.moonGlow),_.material.color.copy(te),g.material.color.copy(k),_.material.opacity=N,g.material.opacity=N*C.moonGlowOp;let F=ui(-w.y,-.05,.18)*(1-.85*T);v.update(F,d,c,!!(y&&y.matches))}return{group:c,update:A}}var fi=`varying vec2 vUv;

void main() {
  
  
  
  vUv = uv;

  
  
  
  
  
  
  
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,pi=`precision highp float;

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
}`,mi=`precision highp float;

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
}`,hi=`precision highp float;

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
}`,gi=`precision highp float;

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
}`,_i=`const float CA_STRENGTH   = 0.0030;  
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
uniform float     uDither;        
                                  
uniform float     uTonemap;       

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

/* L83 AgX TONEMAP (Troy Sobotka's AgX, minimal sRGB-space impl by Benjamin Wrensch — iolite-engine.com, MIT).
   vs ACES: AgX desaturates highlights more gracefully (no ACES "notorious six" hue shift / skin-orange clip) and
   keeps a cleaner neutral. A 6th-order polynomial sigmoid in a log2 working space, between two 3×3 inset/outset
   matrices. Drop-in for aces(): linear HDR in, display [0,1] out. C++: a fixed transfer curve (matrix·log2·poly·matrix). */
const mat3 AGX_IN = mat3(
  0.842479062253094,  0.0423282422610123, 0.0423756549057051,
  0.0784335999999992, 0.878468636469772,  0.0784336,
  0.0792237451477643, 0.0791661274605434, 0.879142973793104);
const mat3 AGX_OUT = mat3(
   1.19687900512017,   -0.0528968517574562, -0.0529716355144438,
  -0.0980208811401368,  1.15190312990417,   -0.0980434501171241,
  -0.0990297440797205, -0.0989611768448433,  1.15107367264116);
vec3 agxContrast(vec3 x) {                          
  vec3 x2 = x * x, x4 = x2 * x2;
  return 15.5 * x4 * x2 - 40.14 * x4 * x + 31.96 * x4 - 6.868 * x2 * x + 0.4298 * x2 + 0.1191 * x - 0.00232;
}
vec3 agx(vec3 col) {
  const float minEv = -12.47393, maxEv = 4.026069;
  col = AGX_IN * max(col, vec3(0.0));
  col = clamp(log2(max(col, vec3(1e-10))), minEv, maxEv);
  col = (col - minEv) / (maxEv - minEv);            
  col = agxContrast(col);
  col = AGX_OUT * col;
  return clamp(col, 0.0, 1.0);
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
  
  
  if (uAces > 0.5) col = (uTonemap > 0.5) ? agx(col) : aces(col);

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

  /* L80 OUTPUT DITHER (beauty only) — smooth gradients (the Preetham sky, fog, soft lighting) quantize into
     visible STAIR-STEP BANDS at 8-bit output, glaring on a phone. Add a tiny TRIANGULAR (TPDF) noise of ~±1 LSB
     so the quantization error averages out across neighbouring pixels → the eye integrates it to a smooth ramp
     (the same noise-shaping trick as audio dithering). Two hashes → a triangular distribution (softer than flat).
     uDither is 0 on the pixel/toon pre-pass (+ vector) → exactly a no-op → those tiers stay byte-identical. */
  if (uDither > 0.0) {
    float d = (hash(gl_FragCoord.xy * 0.7919) + hash(gl_FragCoord.xy * 1.137 + 19.19) - 1.0) / 255.0;
    col += d * uDither;
  }

  gl_FragColor = vec4(col, 1.0);
}`,vi=`const float DITHER = 0.55;   

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
}`,yi=`precision highp float;

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
}`,bi=`precision highp float;

varying vec2 vUv;
uniform sampler2D uToon;   
uniform sampler2D uPixel;  
uniform float     uBlend;  

void main() {
  vec3 t = texture2D(uToon, vUv).rgb;
  vec3 p = texture2D(uPixel, vUv).rgb;
  gl_FragColor = vec4(mix(t, p, uBlend), 1.0);
}`,xi=`varying vec2 vUv;
uniform sampler2D uScene;
uniform float     uThreshold;   

void main() {
  vec3 c = texture2D(uScene, vUv).rgb;
  float l = dot(c, vec3(0.2126, 0.7152, 0.0722));        
  float k = smoothstep(uThreshold, uThreshold + 0.22, l); 
  gl_FragColor = vec4(c * k, 1.0);
}`,Si=`varying vec2 vUv;
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
}`,Ci=`precision highp float;

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
}`,wi={"1-bit":{gridWidth:110,dither:.6,palette:[`#15120c`,`#c8b486`]},gb:{gridWidth:130,dither:.4,palette:[`#0f380f`,`#306230`,`#8bac0f`,`#9bbc0f`]},"8-bit":{gridWidth:160,dither:.55,palette:[`#140c1c`,`#442434`,`#30346d`,`#4e4a4e`,`#854c30`,`#346524`,`#d04648`,`#757161`,`#597dce`,`#d27d2c`,`#8595a1`,`#6daa2c`,`#d2aa99`,`#6dc2ca`,`#dad45e`,`#deeed6`]},"16-bit":{gridWidth:280,dither:.3,palette:`#000000.#222034.#45283c.#663931.#8f563b.#df7126.#d9a066.#eec39a.#fbf236.#99e550.#6abe30.#37946e.#4b692f.#524b24.#323c39.#3f3f74.#306082.#5b6ee1.#639bff.#5fcde4.#cbdbfc.#ffffff.#9badb7.#847e87.#696a6a.#595652.#76428a.#ac3232.#d95763.#d77bba.#8f974a.#8a6f30`.split(`.`)},modern:{gridWidth:460,dither:.6,palette:null}},Ti=[`gb`,`8-bit`,`16-bit`,`modern`];function Ei(t){let n=Math.max(t.length,1),r=new Float32Array(n*4);t.forEach((e,t)=>{let n=new F(e);r[t*4+0]=n.r,r[t*4+1]=n.g,r[t*4+2]=n.b,r[t*4+3]=1});let i=new be(r,n,1,e,xe);return i.minFilter=x,i.magFilter=x,i.needsUpdate=!0,i}var Di=220,Oi={night:[`#0A0C16`,`#1C2236`,`#3A3A52`,`#5A5A78`,`#8A92B0`],dawn:[`#1A1008`,`#43281A`,`#7A4A30`,`#B07A4E`,`#E8A86A`],noon:[`#16100A`,`#3A2F1E`,`#6B563A`,`#937B54`,`#B89968`],dusk:[`#140A0A`,`#3E1E1A`,`#7A3828`,`#B85A36`,`#F0884A`]},ki={night:[`#020604`,`#06180E`,`#10401E`,`#1E9040`,`#7FE0FF`],dawn:[`#060603`,`#1A2410`,`#3A6B22`,`#6CC040`,`#FFC060`],noon:[`#050805`,`#0E2912`,`#1E6B2F`,`#3CF06A`,`#FFB000`],dusk:[`#080402`,`#241408`,`#6B4A12`,`#E0A030`,`#FF7030`]};function Ai(e){if(typeof document>`u`||document.getElementById(`lgr-nowebgl`))return;let t=document.createElement(`div`);t.id=`lgr-nowebgl`,t.style.cssText=`position:fixed;inset:0;z-index:99999;display:flex;align-items:center;justify-content:center;background:#0e1116;color:#cdd6e4;font:16px/1.6 system-ui,-apple-system,sans-serif;text-align:center;padding:2rem;`,t.innerHTML=`<div style="max-width:30rem"><div style="font-size:2.4rem;margin-bottom:1rem">🌊</div><h1 style="font-size:1.3rem;margin:0 0 .6rem;color:#fff;font-weight:600">This experience needs a modern browser</h1><p style="margin:0;color:#9aa6b8">`+e+`</p></div>`,document.body&&document.body.appendChild(t)}function ji({demo:t=!1,citySeed:r=0,profileIndex:a=0}={}){let l;try{l=new ie({antialias:!0,preserveDrawingBuffer:!0})}catch(e){throw Ai(`This experience needs WebGL2 — please open it in an up-to-date browser (Chrome, Edge, Firefox, or Safari on iOS 15+) with hardware acceleration enabled.`),e}l.shadowMap.enabled=!0,l.shadowMap.type=1,l.shadowMap.autoUpdate=!1,l.shadowMap.needsUpdate=!0;let d=window.matchMedia&&window.matchMedia(`(pointer: coarse)`).matches?1.5:2;l.setPixelRatio(Math.min(window.devicePixelRatio,d)),l.setSize(window.innerWidth,window.innerHeight),l.setClearColor(920327,1),document.body.appendChild(l.domElement);let p=l.getDrawingBufferSize(new fe),m=!1,h=!1,g=()=>{};l.domElement.addEventListener(`webglcontextlost`,e=>{e.preventDefault(),m=!0,typeof window<`u`&&(window.__contextLost=!0)},!1),l.domElement.addEventListener(`webglcontextrestored`,()=>{g(),m=!1,typeof window<`u`&&(window.__contextLost=!1)},!1);let _=new he;_.fog=new b(10465470,0);let y=new F(`#aeb6c0`),C=.062,w=new F(`#74508f`),T=new F,E=Be({aspect:window.innerWidth/window.innerHeight}),D=Tt({t:.5}),O=l.getContext(),ee=!!(O&&O.getExtension&&(O.getExtension(`EXT_color_buffer_float`)||O.getExtension(`EXT_color_buffer_half_float`)));!ee&&typeof console<`u`&&console.info(`[L90 H1] No float colour buffer (EXT_color_buffer_float/half_float) — wave sim OFF, flat-sea fallback.`);let te={type:i,format:e,minFilter:x,magFilter:x,wrapS:ce,wrapT:ce,depthBuffer:!1,stencilBuffer:!1},k=ee?[new I(256,256,te),new I(256,256,te),new I(256,256,te)]:null;if(k){for(let e of k)l.setRenderTarget(e),l.clear();l.setRenderTarget(null)}let A=new be(new Uint8Array([0,0,0,255]),1,1,e);A.needsUpdate=!0;let ne=new he,re=new s(-1,1,1,-1,0,1),j=new ae({vertexShader:Nn,fragmentShader:mi,uniforms:{uCurr:{value:null},uPrev:{value:null},uTexel:{value:new fe(1/256,1/256)},uMouse:{value:new fe(-1,-1)},uMouseStrength:{value:0},uC2:{value:.25},uDamping:{value:.992},uRainCount:{value:0},uRainDrops:{value:Array.from({length:8},()=>new z)},uWakeCount:{value:0},uWakeDrops:{value:Array.from({length:8},()=>new z)}}});ne.add(new n(new u(2,2),j));let M=new I(p.x,p.y,{minFilter:o,magFilter:o,depthBuffer:!0,stencilBuffer:!1});function N(e){let t=document.createElement(`canvas`);t.width=t.height=1024;let n=t.getContext(`2d`);n.fillStyle=e?`#0c1418`:`#15110b`,n.fillRect(0,0,1024,1024),n.strokeStyle=e?`rgba(120,150,170,0.22)`:`rgba(184,153,104,0.30)`,n.lineWidth=2;for(let e=0;e<=1024;e+=64)n.beginPath(),n.moveTo(e,0),n.lineTo(e,1024),n.stroke(),n.beginPath(),n.moveTo(0,e),n.lineTo(1024,e),n.stroke();e||(n.fillStyle=`#B89968`,n.font=`bold 360px Georgia, serif`,n.textAlign=`center`,n.textBaseline=`middle`,n.fillText(`LGR`,512,470),n.font=`600 64px ui-monospace, monospace`,n.fillText(`WEB · STUDIO`,512,720));let r=new U(t);return r.colorSpace=B,r}let P=new n(new u(28,28),new S({map:N(t)}));P.rotation.x=-Math.PI/2,P.position.y=-.35,_.add(P);let L=new n(new u(40,24),new ae({depthWrite:!1,vertexShader:fi,fragmentShader:pi,uniforms:{uTime:{value:0},uInk:{value:D.horizon},uGold:{value:D.sky},uFogColor:{value:T},uFogAmt:{value:0},uFogCharm:qe}}));L.position.set(0,3,-8),_.add(L);let oe=new ae({vertexShader:hi,fragmentShader:gi,uniforms:{uHeight:{value:ee?null:A},uScene:{value:M.texture},uTexel:{value:new fe(1/256,1/256)},uResolution:{value:new fe(p.x,p.y)},uDisplace:{value:.42},uNormalStrength:{value:22},uRefractStrength:{value:.06},uChromaScale:{value:1},uNormalMatrix:{value:new v},uLightDir:{value:D.sunDir},uInk:{value:new F(`#2A2218`)},uGold:{value:new F(`#B89968`)},uVector:Ve,uVecWater:{value:new F(`#1fb8d8`)},uVecTint:{value:He}}}),se=new n(new u(28,28,255,255),oe);se.rotation.x=-Math.PI/2,se.updateMatrixWorld(!0),oe.uniforms.uNormalMatrix.value.getNormalMatrix(se.matrixWorld),_.add(se);let R={value:0},le=Qt({windowGlow:R}),V=_t({seed:r,profileIndex:a,landmarkFactory:le,windowGlow:R});_.add(V.group);let ue=At({plinthTop:.3,extent:V.extent,profile:V.state.profile});_.add(ue.group);let de=Vt({extent:V.extent,waterSize:28,plinthTop:.3});_.add(de.group),j.uniforms.uWakeDrops.value=de.wakeDrops;let pe=en({extent:V.extent});_.add(pe.group),j.uniforms.uRainDrops.value=pe.rainDrops;let me=nn({extent:V.extent});_.add(me.group);let H=[ue,de,me],ge=on({rig:E,getCamera:()=>E.camera,sources:H}),_e=di();_.add(_e.group);let ve=qr({scale:90});_.add(ve.mesh),_.environmentIntensity=.32;let ye=!1;function xe(e){let t=e&&D.sunArc.y>-.04;t!==ye&&(ye=t,ve.mesh.visible=t,L.visible=!t)}let Se=null,we=-1;g=()=>{Se=null,we=-1,l.shadowMap.needsUpdate=!0};function Te(){let e=Math.floor(D.t%1*4)%4;return(e!==we||!Se)&&(we=e,Se=ve.buildEnv(l)),Se}let W=null,G=null,Ee=null,K=null,De=!1,Oe=1234,ke=`valley`,Ae=rr.map(e=>e.key),je=new c({color:`#3f6f8c`,roughness:.07,metalness:.4,transparent:!0,opacity:.9}),Me=()=>[V.group,ue.group,de.group],Ne=()=>[W,G,Ee].filter(Boolean);function Pe(){for(let e of Ne())_.remove(e),e.userData.dispose?.();let e=cr({seed:Oe,size:160,preset:ke});K=e,W=hr(e,{worldSize:26,baseY:0,chunks:6}),G=Br({terrain:e,seed:Oe,worldSize:26,baseY:0,biomeKeys:Ae}),Ee=Ur(e,{worldSize:26,baseY:0,maxLakes:3,material:je});for(let e of Ne())e.visible=De,_.add(e);q!==void 0&&q&&q.clear(),J!==void 0&&J&&J.clear(),typeof window<`u`&&(window.__world={seed:Oe,preset:ke,active:De,chunks:W.children.length,scatter:G.userData.counts,lakes:Ee.userData.count})}let Fe=e=>{for(let t of Ne())t.visible=e};function Ie(e,t){if(!K)return 0;let{size:n,height:r,sea:i,relief:a}=K,o=26/(n-1),s=Math.round((e+13)/o),c=Math.round((t+13)/o),l=s<0?0:s>=n?n-1:s;return(r[(c<0?0:c>=n?n-1:c)*n+l]-i)*a}let q=jn({heightAt:Ie,seaSurfaceY:0,waterY:.06});q.group.visible=!1,_.add(q.group),H.push(q);let Le=0;function Re(e,t){if(!K||!W)return;let{size:n,height:r,relief:i}=K,a=26/(n-1),o=26/(t-1),s=i>1e-6?1/i:0,c=!1;for(let i=0;i<t;i++)for(let l=0;l<t;l++){let u=e[i*t+l];if(u===0)continue;c=!0;let d=u*s,f=l*o/a,p=i*o/a,m=Math.max(0,Math.round(f-1)),h=Math.min(n-1,Math.round(f+1)),g=Math.max(0,Math.round(p-1)),_=Math.min(n-1,Math.round(p+1));for(let e=g;e<=_;e++)for(let t=m;t<=h;t++){let i=e*n+t,a=r[i]+d;r[i]=a<0?0:a>1?1:a}}c&&(Le++,Le%8==0&&gr(W,K,W.children),Le%24==0&&G&&zr(G,K,{worldSize:26,baseY:0}))}function ze(e,t){if(!K||!W)return;let{size:n,height:r,relief:i}=K,a=i>1e-6?1/i:0,o=(t-1)/(n-1),s=!1;for(let i=0;i<n;i++){let c=i*o,l=Math.floor(c),u=c-l,d=Math.min(t-1,l+1);for(let c=0;c<n;c++){let f=c*o,p=Math.floor(f),m=f-p,h=Math.min(t-1,p+1),g=e[l*t+p],_=e[l*t+h],v=e[d*t+p],y=e[d*t+h],b=(g*(1-m)+_*m)*(1-u)+(v*(1-m)+y*m)*u;if(b!==0){s=!0;let e=i*n+c,t=r[e]+b*a;r[e]=t<0?0:t>1?1:t}}}s&&(gr(W,K,W.children),G&&zr(G,K,{worldSize:26,baseY:0}))}let J=Hn({worldHeightAt:Ie,applyErosion:Re,syncErodedTerrain:ze,worldSize:26,grid:96,seaY:0,renderer:l});J.group.visible=!1,_.add(J.group);let Ye=null,Xe=new Set;function Ze(){!K||!Ee||(_.remove(Ee),Ee.userData.dispose?.(),Ee=Ur(K,{worldSize:26,baseY:0,maxLakes:3,material:je}),Ee.visible=De,_.add(Ee),window.__world&&(window.__world.lakes=Ee.userData.count))}function Qe(){Ze(),G&&zr(G,K,{worldSize:26,baseY:0})}function $e(e,t,n=1,r=2.2,i=.05){if(!K||!W)return;let a=K.size,o=26/(a-1),s=(e+13)/o,c=(t+13)/o,l=r/o,u=Math.max(0,Math.floor(s-l)),d=Math.min(a-1,Math.ceil(s+l)),f=Math.max(0,Math.floor(c-l)),p=Math.min(a-1,Math.ceil(c+l)),m=K.height,h=l*.5*2*(l*.5);for(let e=f;e<=p;e++)for(let t=u;t<=d;t++){let r=(t-s)*(t-s)+(e-c)*(e-c);if(r>l*l)continue;let o=m[e*a+t]+n*i*Math.exp(-r/h);m[e*a+t]=o<0?0:o>1?1:o}Xe.clear();for(let e of W.children){let t=e.userData.chunk;t&&t.i0<=d&&t.i1>=u-1&&t.j0<=p&&t.j1>=f-1&&Xe.add(e)}gr(W,K,Xe),Ye&&clearTimeout(Ye),Ye=setTimeout(Qe,140)}function et(e,t,n,r=2.2){if(!K||!W||n==null)return;let i=K.size,a=26/(i-1),o=(e+13)/a,s=(t+13)/a,c=r/a,l=c*c,u=Math.max(0,Math.floor(o-c)),d=Math.min(i-1,Math.ceil(o+c)),f=Math.max(0,Math.floor(s-c)),p=Math.min(i-1,Math.ceil(s+c)),m=K.biome;for(let e=f;e<=p;e++)for(let t=u;t<=d;t++)(t-o)*(t-o)+(e-s)*(e-s)<=l&&(m[e*i+t]=n);Xe.clear();for(let e of W.children){let t=e.userData.chunk;t&&t.i0<=d&&t.i1>=u-1&&t.j0<=p&&t.j1>=f-1&&Xe.add(e)}gr(W,K,Xe,!0)}let Y=[`tree`,`rock`,`tuft`];function nt(e,t,{type:n=`tree`,density:r=.5,radius:i=2.2,erase:a=!1}={}){if(!K||!G)return 0;if(a)return Lr(G,n||`all`,e,t,i);let o=K.size,s=26/(o-1),c=K.height,l=K.sea,u=K.relief,d=e=>e<0?0:e>=o?o-1:e,f=(e,t)=>c[d(Math.round((t+13)/s))*o+d(Math.round((e+13)/s))],p=(e,t)=>{let n=Math.max(1,Math.min(o-2,Math.round((e+13)/s))),r=Math.max(1,Math.min(o-2,Math.round((t+13)/s))),i=(c[r*o+n+1]-c[r*o+n-1])*u/(2*s),a=(c[(r+1)*o+n]-c[(r-1)*o+n])*u/(2*s);return Math.hypot(i,a)},m=Rr[n]??1.2,h=Math.max(1,Math.round((r||.5)*6)),g=0;for(let r=0;r<h;r++){let r=Math.random()*Math.PI*2,a=Math.sqrt(Math.random())*i,o=e+Math.cos(r)*a,s=t+Math.sin(r)*a,c=f(o,s);if(c<l+.005||p(o,s)>m)continue;let d=(c-l)*u;Ir(G,n,o,d,s,.7+Math.random()*.6,Math.random()*Math.PI*2,.82+Math.random()*.36)&&g++}if(window.__world&&G.userData.counts)for(let e of Y)G.userData.counts[e]=(G.userData.placements[e]||[]).length;return g}let rt=[];function it(){if(!G)return null;let e=G.userData.placements,t={};for(let n of Y)t[n]=(e[n]||[]).map(e=>({...e}));return t}function at(){K&&(rt.push({h:K.height.slice(),b:K.biome.slice(),sc:it(),pl:q.snapshot()}),rt.length>12&&rt.shift())}function ot(){if(!K||!rt.length)return!1;let e=rt.pop();if(K.height.set(e.h),K.biome.set(e.b),e.sc&&G){let t=G.userData.placements;for(let n of Y)t[n]=(e.sc[n]||[]).map(e=>({...e}))}return e.pl&&q.restore(e.pl),gr(W,K,W.children,!0),Qe(),!0}let st=new Set([`boat`,`fish`]),ct=new Set([`person`,`atv`]);function lt(e,t,n){if(!K)return null;let r=Ie(t,n)<0;return st.has(e)&&!r||ct.has(e)&&r?null:q.spawn(e,t,n)}function ut(e,t,n=2.5){return q.removeNear(e,t,n)}function dt(e){let t=``,n=32768;for(let r=0;r<e.length;r+=n)t+=String.fromCharCode.apply(null,e.subarray(r,Math.min(r+n,e.length)));return btoa(t)}function ft(e){let t=atob(e),n=new Uint8Array(t.length);for(let e=0;e<t.length;e++)n[e]=t.charCodeAt(e);return n}let pt=e=>dt(new Uint8Array(e.buffer,e.byteOffset,e.byteLength)),mt=e=>dt(e);function ht(){let e=G?G.userData.placements:{},t={};for(let n of Y)t[n]=(e[n]||[]).map(e=>({...e}));return t}function gt(){return K?{v:1,seed:Oe,preset:ke,size:K.size,height:pt(K.height),biome:mt(K.biome),scatter:ht(),entities:q.snapshot()}:null}function vt(){if(!K)return null;let e=cr({seed:Oe,size:160,preset:ke}),t=K.height,n=K.biome,r=[],i=[];for(let n=0;n<t.length;n++)Math.abs(t[n]-e.height[n])>1e-6&&r.push(n,Math.round(t[n]*1e4)/1e4);for(let t=0;t<n.length;t++)n[t]!==e.biome[t]&&i.push(t,n[t]);return{v:1,c:1,seed:Oe,preset:ke,hd:r,bd:i,entities:q.snapshot()}}function yt(e){G&&(_.remove(G),G.userData.dispose?.()),G=Mr(e||{tree:[],rock:[],tuft:[]}),G.userData.counts=Y.reduce((e,t)=>(e[t]=(G.userData.placements[t]||[]).length,e),{}),G.visible=De,_.add(G)}function bt(e){if(!e||e.v!==1)return!1;let t=25600;if(e.height!=null||e.biome!=null){if(typeof e.height!=`string`||typeof e.biome!=`string`)return!1;let n,r;try{n=ft(e.height),r=ft(e.biome)}catch{return!1}if(n.byteLength%4!=0||n.byteLength>>2!=t||r.length<t)return!1;let i=new Float32Array(n.buffer,n.byteOffset,n.byteLength>>2);for(let e=0;e<i.length;e++)if(!Number.isFinite(i[e]))return!1}if(e.hd!=null&&!Array.isArray(e.hd)||e.bd!=null&&!Array.isArray(e.bd))return!1;if(Array.isArray(e.hd))for(let n=0;n<e.hd.length;n+=2){let r=e.hd[n];if(!Number.isInteger(r)||r<0||r>=t||!Number.isFinite(e.hd[n+1]))return!1}if(Array.isArray(e.bd))for(let n=0;n<e.bd.length;n+=2){let r=e.bd[n];if(!Number.isInteger(r)||r<0||r>=t)return!1}Oe=e.seed|0,ke=sr.includes(e.preset)?e.preset:ke,rt.length=0,Pe(),De=!0,Fe(!0),q.group.visible=!0,J.group.visible=!0;for(let e of Me())e.visible=!1;window.__world&&(window.__world.active=!0);let n=e=>e<0?0:e>1?1:e,r=rr.length;if(e.height&&e.biome){let t=ft(e.height),i=new Float32Array(t.buffer,t.byteOffset,t.byteLength>>2);for(let e=0;e<i.length;e++)K.height[e]=n(i[e]);let a=ft(e.biome);for(let e=0;e<K.biome.length;e++)K.biome[e]=Math.min(r-1,a[e]|0)}else if(e.hd||e.bd){let t=e.hd||[],i=e.bd||[];for(let e=0;e<t.length;e+=2)K.height[t[e]]=n(t[e+1]);for(let e=0;e<i.length;e+=2)K.biome[i[e]]=Math.min(r-1,Math.max(0,i[e+1]|0))}return gr(W,K,W.children,!0),e.scatter&&yt(e.scatter),Ze(),G&&zr(G,K,{worldSize:26,baseY:0}),q.restore(e.entities),window.__world&&(window.__world.scatter=G.userData.counts,window.__world.seed=Oe,window.__world.preset=ke),!0}let xt={enter(){W||Pe(),De=!0,Fe(!0),q.group.visible=!0,J.group.visible=!0;for(let e of Me())e.visible=!1;window.__world&&(window.__world.active=!0)},exit(){De=!1,Fe(!1),q.group.visible=!1,J.group.visible=!1;for(let e of Me())e.visible=!0;window.__world&&(window.__world.active=!1)},reroll(){return Oe=Math.random()*1e9|0,rt.length=0,Pe(),xt.enter(),Oe},reset(){return rt.length=0,Pe(),xt.enter(),Oe},setPreset(e){return sr.includes(e)&&(ke=e,rt.length=0,Pe(),xt.enter()),ke},sculpt:$e,paintBiome:et,paintScatter:nt,repoolWater:Ze,snapshot:at,undo:ot,placeEntity:lt,removeEntityNear:ut,heightAt:Ie,serialize:gt,serializeCompact:vt,deserialize:bt,flowPourAt:(e,t,n,r)=>J.pourAt(e,t,n,r),flowRain:e=>J.rain(e),flowClear:()=>J.clear(),get flowTotal(){return J.totalWater()},flowAt:(e,t)=>J.cellAt(e,t),flowErosion:(e,t)=>J.setErosion(e,t),get flowErosionOn(){return J.erosion},get flowSediment(){return J.totalSediment()},setSimBackend:e=>J.setBackend(e),get simBackend(){return J.backend},_flowReadW:()=>J._debugReadW(),_flowReadTerr:()=>J._debugReadTerr(),_flowStepN:(e,t)=>J._debugStepN(e,t),get terrainGroup(){return W},get biomes(){return rr},get scatterCounts(){return G?G.userData.placements&&Y.reduce((e,t)=>(e[t]=(G.userData.placements[t]||[]).length,e),{}):null},get placedCounts(){return q.counts()},setScatterHidden(e){G&&(G.visible=!e)},get placedLife(){return q},get canUndo(){return rt.length>0},get active(){return De},get seed(){return Oe},get preset(){return ke},get presets(){return sr}},St=Gr(),Ct=qn({world:xt,catalog:St,inspector:ge});function wt(e,t){return Ie(e,t)<0?0:-999}let Et=vn({rig:E,world:{heightAt:Ie,waterHeightAt:wt}});V.group.remove(V.key),_.add(V.key),V.key.castShadow=!0,V.key.shadow.mapSize.set(2048,2048),V.key.shadow.bias=-18e-5,V.key.shadow.normalBias=.028,_.add(V.key.target);function Dt(){let e=V.key.shadow.camera,t=V.extent+4.5;e.left=-t,e.right=t,e.top=t,e.bottom=-t,e.near=1,e.far=48,e.updateProjectionMatrix(),l.shadowMap.needsUpdate=!0}Dt();let Ot=new Ce(p.x,p.y),kt=new I(p.x,p.y,{minFilter:o,magFilter:o,depthBuffer:!0,stencilBuffer:!1,depthTexture:Ot}),jt=new I(p.x,p.y,{minFilter:o,magFilter:o,depthBuffer:!1,stencilBuffer:!1}),Mt=new I(p.x,p.y,{minFilter:o,magFilter:o,depthBuffer:!0,stencilBuffer:!1,samples:4}),Nt=new I(p.x,p.y,{minFilter:o,magFilter:o,depthBuffer:!1,stencilBuffer:!1}),Pt=new I(p.x,p.y,{minFilter:o,magFilter:o,depthBuffer:!1,stencilBuffer:!1}),Ft=Math.max(1,Math.floor(p.x/2)),It=Math.max(1,Math.floor(p.y/2)),Lt=new I(Ft,It,{minFilter:o,magFilter:o,depthBuffer:!1,stencilBuffer:!1}),Rt=new I(Ft,It,{minFilter:o,magFilter:o,depthBuffer:!1,stencilBuffer:!1}),zt=new he,Bt=new s(-1,1,1,-1,0,1),Ht=new n(new u(2,2));zt.add(Ht);let X=new ae({vertexShader:Nn,fragmentShader:_i,uniforms:{uScene:{value:kt.texture},uTime:{value:0},uResolution:{value:new fe(p.x,p.y)},uGrain:{value:1},uChroma:{value:1},uExposure:{value:1},uAces:{value:0},uBloom:{value:Lt.texture},uBloomStrength:{value:0},uGrade:{value:0},uGradeTint:{value:D.grade.tint},uGradeLift:{value:D.grade.lift},uGradeSat:{value:1},uGradeContrast:{value:1},uDither:{value:0},uTonemap:{value:0}}}),Ut=new ae({vertexShader:Nn,fragmentShader:xi,uniforms:{uScene:{value:kt.texture},uThreshold:{value:.78}}}),Z=new ae({vertexShader:Nn,fragmentShader:Si,uniforms:{uScene:{value:Lt.texture},uDir:{value:new fe}}});function Wt(e){Ut.uniforms.uScene.value=e.texture,tn(Ut,Lt),Z.uniforms.uScene.value=Lt.texture,Z.uniforms.uDir.value.set(1.6/Ft,0),tn(Z,Rt),Z.uniforms.uScene.value=Rt.texture,Z.uniforms.uDir.value.set(0,1.6/It),tn(Z,Lt),X.uniforms.uBloom.value=Lt.texture;let t=1-f.clamp(D.sunArc.y*2.2,0,1);X.uniforms.uBloomStrength.value=.85*(.32+.95*t)}let Gt=e=>{let t=e.map(e=>new F(e));for(;t.length<8;)t.push(new F(0,0,0));return t},Kt=[`night`,`dawn`,`noon`,`dusk`],qt={inkgold:Kt.map(e=>Gt(Oi[e])),terminal:Kt.map(e=>Gt(ki[e]))},Jt=new ae({vertexShader:Nn,fragmentShader:vi,uniforms:{uScene:{value:jt.texture},uResolution:{value:new fe(p.x,p.y)},uPixelSize:{value:Di},uPalette:{value:qt.inkgold[2]},uPaletteB:{value:qt.inkgold[2]},uPaletteBlend:{value:0},uPaletteSize:{value:5}}}),Yt=new ae({vertexShader:Nn,fragmentShader:Ci,uniforms:{uScene:{value:jt.texture},uResolution:{value:new fe(p.x,p.y)},uGridWidth:{value:160},uDither:{value:.55},uPalette:{value:Ei(wi[`8-bit`].palette)},uPaletteSize:{value:1},uUsePalette:{value:1}}}),Xt={};for(let e of Ti)Xt[e]=wi[e].palette?Ei(wi[e].palette):null;let Zt=new ae({vertexShader:Nn,fragmentShader:yi,uniforms:{uScene:{value:jt.texture},uDepth:{value:Ot},uResolution:{value:new fe(p.x,p.y)},uBands:{value:4},uToonGain:{value:1.7},uToonGamma:{value:.6},uToonFloor:{value:D.toonFloor},uOutline:{value:D.outline},uNear:{value:.1},uFar:{value:100},uIsPerspective:{value:1}}}),$t=new ae({vertexShader:Nn,fragmentShader:bi,uniforms:{uToon:{value:Nt.texture},uPixel:{value:Pt.texture},uBlend:{value:0}}});function tn(e,t){Ht.material=e,l.setRenderTarget(t),l.render(zt,Bt)}function rn(){E.setViewport(window.innerWidth,window.innerHeight),l.setSize(window.innerWidth,window.innerHeight);let e=l.getDrawingBufferSize(new fe);return M.setSize(e.x,e.y),kt.setSize(e.x,e.y),jt.setSize(e.x,e.y),Mt.setSize(e.x,e.y),Nt.setSize(e.x,e.y),Pt.setSize(e.x,e.y),Ft=Math.max(1,e.x>>1),It=Math.max(1,e.y>>1),Lt.setSize(Ft,It),Rt.setSize(Ft,It),oe.uniforms.uResolution.value.set(e.x,e.y),X.uniforms.uResolution.value.set(e.x,e.y),Jt.uniforms.uResolution.value.set(e.x,e.y),Yt.uniforms.uResolution.value.set(e.x,e.y),Zt.uniforms.uResolution.value.set(e.x,e.y),e}let an=Xn({renderer:l}),sn=!0;function cn(e,t){let n=t.dpr==null?d:t.dpr,r=Math.min(window.devicePixelRatio,n);Math.abs(l.getPixelRatio()-r)>.001&&(l.setPixelRatio(r),typeof window<`u`&&window.dispatchEvent?window.dispatchEvent(new Event(`resize`)):rn()),sn=t.shadows!==!1,sn||(l.shadowMap.needsUpdate=!1)}let ln=Qn({profiler:an,apply:cn});function un(){!h&&!m&&an.frameStart()}function dn(){h||m||(an.frameEnd(),ln.update())}function fn(e){h=!e,typeof window<`u`&&(window.__paused=h)}function pn(){try{l.compile(_,E.camera),Ln(1/60,0,{shadowsOn:!0}),Mn(Pn(),kt),l.setRenderTarget(null)}catch(e){typeof console<`u`&&console.warn(`[L79] prewarm`,e)}}let mn=3,hn=!1,gn=!1,_n=`native`,yn=.3,bn=.46,xn=[`native`,...Ti],Sn={"16-bit":`16-bit`,"8-bit":`8-bit`,gb:`Game Boy`,modern:`Modern`,native:`Pixel`,"1-bit":`1-bit`};typeof window<`u`&&(window.__mode=mn,window.__vector=hn,window.__era=_n),typeof window<`u`&&(window.__frames=0),typeof window<`u`&&(window.__loaded=!1);let Cn=0,wn=new z(1,1,1),Tn=!1;function En(e){let t=gn?qt.terminal:qt.inkgold,n=e%1*4,r=Math.floor(n)%4;Jt.uniforms.uPalette.value=t[r],Jt.uniforms.uPaletteB.value=t[(r+1)%4],Jt.uniforms.uPaletteBlend.value=n-Math.floor(n)}function Dn(e){let t=wi[e];t&&(Yt.uniforms.uGridWidth.value=t.gridWidth,Yt.uniforms.uDither.value=t.dither,Yt.uniforms.uUsePalette.value=+!!t.palette,t.palette&&(Yt.uniforms.uPalette.value=Xt[e],Yt.uniforms.uPaletteSize.value=t.palette.length))}function On(){_n!==`native`&&Dn(_n)}let kn=()=>_n===`native`?Jt:Yt;function An(e,t){xe(!0),_.environment=Te(),tt.value=1,se.visible=!1,l.setRenderTarget(M),l.render(_,e),se.visible=!0,l.setRenderTarget(Mt),l.render(_,e),Wt(Mt),X.uniforms.uScene.value=Mt.texture,X.uniforms.uAces.value=1,X.uniforms.uGrade.value=1,X.uniforms.uGrain.value=0,X.uniforms.uChroma.value=0,X.uniforms.uDither.value=1,tn(X,t)}function Mn(e,t){let n=!hn&&(mn===1||mn===2);if(xe(n),_.environment=n?Te():null,tt.value=+!!n,X.uniforms.uBloomStrength.value=0,se.visible=!1,l.setRenderTarget(M),l.render(_,E.camera),se.visible=!0,mn===1&&!n)l.setRenderTarget(t),l.render(_,E.camera);else if(mn===1)l.setRenderTarget(Mt),l.render(_,E.camera),Wt(Mt),X.uniforms.uScene.value=Mt.texture,X.uniforms.uAces.value=1,X.uniforms.uGrade.value=1,X.uniforms.uGrain.value=0,X.uniforms.uChroma.value=0,X.uniforms.uDither.value=1,tn(X,t);else if(l.setRenderTarget(n?Mt:kt),l.render(_,E.camera),mn===2)n&&Wt(Mt),X.uniforms.uScene.value=n?Mt.texture:kt.texture,X.uniforms.uAces.value=+!!n,X.uniforms.uGrade.value=+!!n,X.uniforms.uGrain.value=1,X.uniforms.uChroma.value=1,X.uniforms.uDither.value=+!!n,tn(X,t);else{X.uniforms.uScene.value=kt.texture,X.uniforms.uAces.value=0,X.uniforms.uGrade.value=0,X.uniforms.uGrain.value=0,X.uniforms.uChroma.value=0,X.uniforms.uDither.value=0,tn(X,jt);let n=E.camera;Zt.uniforms.uNear.value=n.near,Zt.uniforms.uFar.value=n.far,Zt.uniforms.uIsPerspective.value=+!!n.isPerspectiveCamera;let r=e.era?(Dn(e.era),Yt):kn();e.kind===`pixel`?(tn(r,t),window.__style=`pixel`):e.kind===`toon`?(tn(Zt,t),window.__style=`toon`):(tn(Zt,Nt),tn(r,Pt),$t.uniforms.uBlend.value=e.blend,tn($t,t),window.__style=`blend`)}}function Pn(){let e=Fn(),t=e.kind===`toon`?1:e.kind===`blend`?1-e.blend:0;return oe.uniforms.uChromaScale.value=f.lerp(1,.5,t),e}function Fn(){if(mn===1||mn===2)return{kind:`none`};if(mn===7)return{kind:`pixel`};if(mn===8)return{kind:`toon`};let e=E.styleT;return window.__styleT=e,e<=yn?{kind:`toon`}:e>=bn?{kind:`pixel`,era:e<.62?`16-bit`:e<.8?`8-bit`:`gb`}:{kind:`blend`,blend:f.smoothstep(e,yn,bn),era:`16-bit`}}function In(e){return mn===1||mn===2?``:hn&&mn!==7&&mn!==8?`Vector`:e.kind===`toon`?`Toon`:e.kind===`pixel`?Sn[e.era||_n]||`Pixel`:e.kind===`blend`?`Toon → `+(Sn[e.era]||`Pixel`):``}function Ln(e,t,{shadowsOn:n=!0,seasonTarget:r=0}={}){typeof window<`u`&&window.__frames++,n&&=sn,L.material.uniforms.uTime.value=t,X.uniforms.uTime.value=t,D.update(e),V.key.position.copy(D.sunDir).multiplyScalar(24),V.key.color.copy(D.sunColor),V.key.intensity=D.sunIntensity,V.fill.color.copy(D.hemiSky),V.fill.groundColor.copy(D.hemiGround),R.value=D.windowGlow,ve.setSun(D.sunArc),ve.setParams(D.skyParams),X.uniforms.uGradeSat.value=D.grade.sat,X.uniforms.uGradeContrast.value=D.grade.contrast,_.environmentIntensity=.34*(1-.6*f.clamp(D.sunArc.y*1.5,0,1));let i=pe.overcast;V.key.intensity*=1-.5*i,V.key.color.lerp(y,.45*i),V.fill.intensity=1+.7*i;let a=f.smoothstep(D.sunDir.y,.06,.34),o=f.lerp(.28,1,1-D.windowGlow),s=n?a*o:0;V.key.shadow.intensity=.72*s,Ue.value=.52*s,(n&&!Tn||wn.distanceToSquared(D.sunDir)>2e-5)&&(l.shadowMap.needsUpdate=!0,wn.copy(D.sunDir)),Tn=n;let c=1-D.windowGlow;He.setRGB(f.lerp(.46,1,c),f.lerp(.52,1,c),f.lerp(.74,1,c)),X.uniforms.uExposure.value=D.exposure,Zt.uniforms.uToonGain.value=D.toonGain,l.setClearColor(D.horizon,1),En(D.t),window.__t=D.t,ue.update(e,t,D),V.update(t),de.update(e,t,D),j.uniforms.uWakeCount.value=de.wakeCount,pe.update(e,t),j.uniforms.uRainCount.value=pe.rainDropCount;let u=pe.fog*(1-c);_.fog.density=pe.fog*C,T.copy(D.horizon).lerp(w,.85*u),_.fog.color.copy(T),l.setClearColor(T,1),qe.value=pe.fog,L.material.uniforms.uFogAmt.value=.7*pe.fog,We.value=pe.snow,Ge.value=pe.cloud*.55,Ke.x+=e*.018,Ke.y+=e*.009,Je.value+=(r-Je.value)*Math.min(1,e*1.5),me.update(e,t,D,pe),De&&q.update(e,t,D),De&&J.step(e);let d=Fn(),p=d.kind===`pixel`||d.kind===`blend`?`pixel`:hn?`vector`:d.kind===`toon`?`charm`:`realistic`;if(_e.update(e,t,D,pe,p,E.camera),ee){let[e,t,n]=k;j.uniforms.uPrev.value=e.texture,j.uniforms.uCurr.value=t.texture,l.setRenderTarget(n),l.render(ne,re),k=[t,n,e],oe.uniforms.uHeight.value=k[1].texture}if(Cn<2&&typeof document<`u`&&++Cn===2){let e=document.getElementById(`lgr-loader`);e&&e.classList.add(`gone`),window.__loaded=!0}}function Rn(e){mn=e,window.__mode=mn}function zn(){return hn=!hn,Ve.value=+!!hn,window.__vector=hn,hn}function Bn(e){return hn=!!e,Ve.value=+!!hn,window.__vector=hn,hn}function Vn(){return _n=xn[(xn.indexOf(_n)+1)%xn.length],window.__era=_n,On(),_n}function Un(){return gn=!gn,gn}return{updateWorld:Ln,decideStyle:Pn,renderCityPipeline:Mn,renderCityBeautyTo:An,styleHintName:In,setPostMode:Rn,toggleVector:zn,setVector:Bn,cycleEra:Vn,togglePalette:Un,setTonemap:e=>{let t=e===`agx`||e===1||e===!0;return X.uniforms.uTonemap.value=+!!t,typeof window<`u`&&(window.__tonemap=t?`agx`:`aces`),t?`agx`:`aces`},get mode(){return mn},get vector(){return hn},get sceneEra(){return _n},renderer:l,drawBuffer:p,scene:_,rig:E,sunRig:D,SIM:256,targets:k,simScene:ne,simCamera:re,simMaterial:j,grabRT:M,card:P,backdrop:L,WATER_SIZE:28,water:se,waterMaterial:oe,windowGlow:R,landmarkFactory:le,city:V,cityLife:ue,waterLife:de,weatherRig:pe,clouds:me,inspector:ge,world:xt,catalog:St,editor:Ct,pilot:Et,profiler:an,governor:ln,frameStart:un,frameEnd:dn,setActive:fn,get paused(){return h},get contextLost(){return m},prewarm:pn,fitShadowFrustum:Dt,SHADOW_DIST:24,sceneDepth:Ot,sceneRT:kt,filmicRT:jt,toonRT:Nt,pixelRT:Pt,postScene:zt,postCamera:Bt,postQuad:Ht,filmicMaterial:X,pixelMaterial:Jt,pixelkitMaterial:Yt,toonMaterial:Zt,mixMaterial:$t,PALCACHE:qt,ERA_TEX:Xt,runPass:tn,OVERCAST_GREY:y,FOG_DENSITY:C,FOG_NIGHT_TINT:w,_fogColor:T,resize:rn}}var Mi=`lgr_hints_`,Ni=!1;function Pi(){if(Ni||typeof document>`u`)return;Ni=!0;let e=document.createElement(`style`);e.textContent=`
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
  }`,document.head.appendChild(e)}function Fi({key:e,title:t=`Tips`,tips:n=[],force:r=!1}={}){let i={key:e,shown:!1,dismissed:!1,seen:!1};if(typeof window<`u`&&(window.__hints=i),typeof document>`u`||!e)return{dismiss(){},el:null};let a=Mi+e,o=!1;try{o=localStorage.getItem(a)===`1`}catch{}if(o&&!r)return i.seen=!0,{dismiss(){},el:null};Pi();let s=!!(window.matchMedia&&window.matchMedia(`(prefers-reduced-motion: reduce)`).matches),c=document.createElement(`div`);c.className=`lgr-hints`,c.innerHTML=`<div class="lgr-hints-card">
    <div class="lgr-hints-h">${t}</div>
    <ul>${n.map(e=>`<li>${e}</li>`).join(``)}</ul>
    <button class="lgr-hints-ok">Got it</button>
    <button class="lgr-hints-x" title="Dismiss (Esc)" aria-label="Dismiss">✕</button>
  </div>`,document.body.appendChild(c),i.shown=!0,s?c.classList.add(`on`):requestAnimationFrame(()=>c.classList.add(`on`));let l=!1;function u(e=!0){if(!l){if(l=!0,e)try{localStorage.setItem(a,`1`)}catch{}i.dismissed=!0,window.removeEventListener(`keydown`,d),c.classList.remove(`on`),setTimeout(()=>c.remove(),s?0:300)}}function d(e){e.key===`Escape`&&u(!0)}return window.addEventListener(`keydown`,d),c.querySelector(`.lgr-hints-ok`).addEventListener(`click`,()=>{navigator.vibrate?.(10),u(!0)}),c.querySelector(`.lgr-hints-x`).addEventListener(`click`,()=>{navigator.vibrate?.(10),u(!0)}),{dismiss:u,el:c}}var Ii=null;function Li(){if(Ii)return Ii;let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return n.addColorStop(0,`rgba(0,0,0,0.60)`),n.addColorStop(.55,`rgba(0,0,0,0.32)`),n.addColorStop(1,`rgba(0,0,0,0.0)`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,128/2,0,Math.PI*2),t.fill(),Ii=new U(e),Ii.colorSpace=B,Ii}function Ri({w:e=.6,d:t=.6,x:r=0,y:i=.002,z:a=0,opacity:o=.5,rotation:s=0}={}){let c=new n(new u(e,t),new S({map:Li(),transparent:!0,opacity:o,depthWrite:!1,toneMapped:!1}));return c.rotation.x=-Math.PI/2,c.rotation.z=s,c.position.set(r,i,a),c.renderOrder=-1,c.raycast=()=>{},c}function zi({yawLimit:e=80,pitchUp:t=32,pitchDown:n=20,sensitivity:r=.16,keySpeed:i=70,damp:a=9}={}){let o=Math.PI/180,s=(e,t,n)=>e<t?t:e>n?n:e,c=0,l=0,u=0,d=0;return{addDrag(i,a){u=s(u-i*r,-e,e),d=s(d-a*r,-n,t)},addKeys(r,{left:a,right:o,up:c,down:l}){let f=i*r;a&&(u=s(u+f,-e,e)),o&&(u=s(u-f,-e,e)),c&&(d=s(d+f,-n,t)),l&&(d=s(d-f,-n,t))},recenter(){u=0,d=0},update(e){let t=1-Math.exp(-a*e);c+=(u-c)*t,l+=(d-l)*t},get yaw(){return c*o},get pitch(){return l*o},get active(){return Math.abs(c)>.05||Math.abs(l)>.05}}}var Bi=null;function Vi(){if(Bi)return Bi;let e=document.createElement(`canvas`);e.width=e.height=256;let t=e.getContext(`2d`),n=t.createRadialGradient(256/2,256/2,256*.32,256/2,256/2,256*.72);return n.addColorStop(0,`rgba(0,0,0,0)`),n.addColorStop(1,`rgba(0,0,0,1)`),t.fillStyle=n,t.fillRect(0,0,256,256),Bi=new U(e),Bi.colorSpace=B,Bi}function Hi({strength:e=.55,dist:t=.5}={}){let r=new n(new u(1,1),new S({map:Vi(),transparent:!0,opacity:e,depthTest:!1,depthWrite:!1,toneMapped:!1}));r.renderOrder=9999,r.raycast=()=>{},r.frustumCulled=!1;let i=new z;return r.fit=e=>{e.getWorldDirection(i),r.position.copy(e.position).addScaledVector(i,t),r.quaternion.copy(e.quaternion);let n=2*Math.tan(f.degToRad(e.fov)*.5)*t*1.05;r.scale.set(n*e.aspect,n,1)},r}var Ui=``+new URL(`office-dressed2-CNZL1Pge.png`,import.meta.url).href,Wi=``+new URL(`office-night2-Tdv47G8J.png`,import.meta.url).href,Gi=``+new URL(`office-modern-CQqt-EK1.png`,import.meta.url).href,Ki=``+new URL(`office-charm2-qAn3JlVo.png`,import.meta.url).href;function qi(){let e=document.createElement(`canvas`);e.width=e.height=256;let t=e.getContext(`2d`);t.fillStyle=`#6e4a2c`,t.fillRect(0,0,256,256);for(let e=0;e<150;e++){let e=Math.random()*256,n=.7+Math.random()*.7;t.strokeStyle=`rgba(${Math.round(110*n)},${Math.round(74*n)},${Math.round(44*n)},${.16+Math.random()*.28})`,t.lineWidth=.5+Math.random()*1.6,t.beginPath(),t.moveTo(e,0);for(let n=0;n<=256;n+=14)t.lineTo(e+Math.sin(n*.05+e)*3,n);t.stroke()}t.strokeStyle=`rgba(30,18,8,0.5)`,t.lineWidth=2;for(let e of[256*.34,256*.67])t.beginPath(),t.moveTo(0,e),t.lineTo(256,e),t.stroke();let n=new U(e);return n.colorSpace=B,n.wrapS=n.wrapT=ve,n}function Q(e,t,r,i,{rough:a=.62,metal:o=0,x:s=0,y:l=0,z:u=0,emissive:d=null,emissiveIntensity:f=1,map:p=null,mapRepeat:m=null}={}){let h=p;p&&m&&(h=p.clone(),h.needsUpdate=!0,h.wrapS=h.wrapT=ve,h.repeat.set(m[0],m[1]));let g=new n(new H(e,t,r),new c({color:h?`#ffffff`:i,roughness:a,metalness:o,...h?{map:h}:{},...d?{emissive:d,emissiveIntensity:f}:{}}));return g.position.set(s,l,u),g}function Ji(){let e=document.createElement(`canvas`);e.width=512,e.height=304;let t=e.getContext(`2d`);t.fillStyle=`#fff`,t.fillRect(0,0,512,304);let n=.13*512,r=.87*512,i=.1*304,a=.66*304;return t.filter=`blur(7px)`,t.fillStyle=`#000`,t.beginPath(),t.moveTo(80.56,i),t.arcTo(r,i,r,a,14),t.arcTo(r,a,n,a,14),t.arcTo(n,a,n,i,14),t.arcTo(n,i,r,i,14),t.closePath(),t.fill(),t.filter=`none`,new U(e)}function Yi({tier:e=`corner`,layout:t=`straight-on`}={}){let r=new he,i=new pe(43,1,.1,100),o=new z(0,1.62,4.35),s=new z(0,1.12,-1);i.position.copy(o),i.lookAt(s);let l=zi({yawLimit:80,pitchUp:34,pitchDown:20}),d=new Se(0,0,0,`YXZ`),p=new _,m=new a;r.add(m);let g=new a,v=new a,y=new a,b=new a,x=new a;m.add(g,v,y,b,x);let C=[],w=`#4a3322`,E=`#3a2618`,O=`#5b3d27`,ee=`#6e4a30`,te=`#5a5650`,k=qi();g.add(Q(11,.2,11,`#3c2a1c`,{rough:.5,y:-.1,map:k,mapRepeat:[5,5]})),g.add(Q(11,.2,11,`#3a2a1d`,{rough:.9,y:3,map:k,mapRepeat:[4,4]}));for(let e of[-2.4,0,2.4])g.add(Q(.18,.16,7.4,E,{rough:.7,x:e,y:2.9,z:0,map:k,mapRepeat:[1,4]}));for(let e of[-2,.4])g.add(Q(7.4,.16,.18,E,{rough:.7,x:0,y:2.88,z:e,map:k,mapRepeat:[4,1]}));function ne(e){let t=new a;t.add(Q(.2,3.2,8,w,{rough:.7,x:e*3.6,y:1.5,z:0,map:k,mapRepeat:[3,1.4]}));let r=e*3.45;t.add(Q(.06,.22,8,E,{x:r,y:.13,z:0})),t.add(Q(.08,.16,8,E,{x:r,y:2.84,z:0})),t.add(Q(.05,.05,8,E,{x:r,y:1,z:0}));for(let e of[-2.6,-1.3,1.3,2.6])t.add(Q(.05,1.6,.06,E,{x:r,y:1.95,z:e}));for(let e of[-2.6,-1.3,1.3,2.6])t.add(Q(.05,.7,.06,E,{x:r,y:.6,z:e}));let i=new n(new u(1.5,1),new c({map:ra(e),roughness:.8}));i.position.set(e*3.49,1.7,.4),i.rotation.y=-e*Math.PI/2,t.add(Q(.06,1.18,1.68,`#2a1c10`,{x:e*3.52,y:1.7,z:.4}),i);let o=new n(new u(1,1.3),new c({map:ra(-e),roughness:.8}));o.position.set(e*3.49,1.78,-2),o.rotation.y=-e*Math.PI/2,t.add(Q(.06,1.46,1.16,`#2a1c10`,{x:e*3.52,y:1.78,z:-2}),o),t.add(Q(.12,.3,.16,`#2a1c10`,{x:e*3.4,y:2.2,z:2.2}));let s=new R(new ye({map:na(),color:`#ffcf8a`,transparent:!0,opacity:.5,depthWrite:!1,blending:2}));return s.scale.set(.6,.75,1),s.position.set(e*3.32,2.34,2.2),s.raycast=()=>{},t.add(s),t}g.add(ne(-1),ne(1));let j=new a;j.add(Q(.3,1.9,1.5,O,{rough:.5,y:.95}));for(let e of[.4,.95,1.5])j.add(Q(.3,.04,1.46,`#3a2c1e`,{y:e}));let M=[`#7a3a2a`,`#2a4a6a`,`#b08a3a`,`#3a5a3a`,`#6a2a4a`,`#8a5a2a`];for(let e of[.6,1.15,1.7])for(let t=0;t<7;t++)j.add(Q(.18,.3,.11,M[(t+Math.round(e))%M.length],{x:.02,y:e-.06,z:-.6+t*.17}));j.position.set(-3.34,0,-1.9),g.add(j),g.add(Ri({w:1,d:1.8,x:-3.2,y:.02,z:-1.9,opacity:.4}));let I=new a;I.add(Q(.5,.1,.5,`#4a3526`,{rough:.7,y:.45})),I.add(Q(.5,.55,.08,`#4a3526`,{rough:.7,y:.72,z:-.21}));for(let[e,t]of[[-.2,-.2],[.2,-.2],[-.2,.2],[.2,.2]])I.add(Q(.05,.45,.05,`#2a1c10`,{x:e,y:.22,z:t}));I.position.set(2.7,0,2.6),I.rotation.y=-.5,g.add(I),g.add(Ri({w:.7,d:.7,x:2.7,y:.02,z:2.6,opacity:.42}));let ie=new u(3,2.5),ae=new u(3,2.5),L=new S({color:`#ffffff`,toneMapped:!1}),oe=new S({color:`#ffffff`,toneMapped:!1}),se=-3.7,ce=1.55,le=f.degToRad(30),V=3/2*Math.cos(le),ue=se+3/2*Math.sin(le),fe=new n(ie,L);fe.position.set(-V,ce,ue),fe.rotation.y=le;let me=new n(ae,oe);me.position.set(V,ce,ue),me.rotation.y=-le;let ge=new S({color:`#ffffff`,toneMapped:!1}),_e=new n(new u(5.4,2.6),ge);_e.position.set(0,ce,-3.5500000000000003),_e.visible=!1,y.add(fe,me,_e);let ve=new a;ve.add(Q(.08,2.7,.08,E,{x:0,y:ce,z:ue+3/2*Math.sin(le)+.02}));for(let[e,t,n]of[[-V,ue,le],[V,ue,-le]]){let r=new a;r.add(Q(3.05,.09,.09,E,{y:1.3})),r.add(Q(3.05,.09,.09,E,{y:-1.25})),r.add(Q(.09,2.6,.09,E,{x:-1.5})),r.position.set(e,ce,t),r.rotation.y=n,ve.add(r)}ve.add(Q(5.4,.5,.3,O,{x:0,y:.25,z:ue+.5})),g.add(ve);let U=new a;U.add(Q(11,3.2,.2,w,{rough:.7,x:0,y:1.5,z:se-.05,map:k,mapRepeat:[4,1.4]})),U.add(Q(5.8,.14,.12,E,{x:0,y:2.9000000000000004,z:-3.5})),U.add(Q(5.8,.14,.12,E,{x:0,y:ce-1.35,z:-3.5})),U.add(Q(.14,2.84,.12,E,{x:-2.8,y:ce,z:-3.5})),U.add(Q(.14,2.84,.12,E,{x:2.8,y:ce,z:-3.5})),U.add(Q(.09,2.6,.09,E,{x:0,y:ce,z:-3.49})),U.add(Q(5.4,.5,.3,O,{x:0,y:.25,z:-3.35}));let be=new a;be.add(Q(2.4,.9,.55,O,{rough:.42,y:.45,z:0})),be.add(Q(2.46,.06,.58,ee,{rough:.3,y:.91,z:0}));for(let e of[-.62,0,.62])be.add(Q(.66,.72,.03,`#4a3120`,{x:e,y:.45,z:.285}));for(let e of[-.62,0,.62])be.add(Q(.05,.04,.05,`#caa15a`,{x:e+.2,y:.45,z:.31,metal:.6}));let xe=[`#7a3a2a`,`#2a4a6a`,`#b08a3a`,`#3a5a3a`];for(let e=0;e<4;e++)be.add(Q(.1,.26+e%2*.05,.2,xe[e],{x:-.95+e*.13,y:1.07,z:-.06}));be.add(Q(.04,.34,.42,`#241a12`,{x:.7,y:1.12,z:-.02})),be.position.set(-3.9,0,-3.25),U.add(be),U.add(Ri({w:2.8,d:.95,x:-3.9,y:.02,z:-3.25,opacity:.45}));for(let[e,t]of[[-3.55,-1],[3.55,1]]){let r=new a,i=new n(new u(.78,.98),new c({map:ra(t),roughness:.82}));i.position.z=.05,r.add(Q(.06,1.12,.92,`#241a10`,{}),i),r.position.set(e,1.45,-3.5700000000000003),U.add(r)}for(let e of[-3.55,3.55]){U.add(Q(.16,.32,.13,`#2a1c10`,{x:e,y:2.35,z:-3.5}));let t=new R(new ye({map:na(),color:`#ffcf8a`,transparent:!0,opacity:.5,depthWrite:!1,blending:2}));t.scale.set(.55,.7,1),t.position.set(e,2.5,-3.42),t.raycast=()=>{},U.add(t)}U.visible=!1,g.add(U),g.add(Q(.4,.06,.4,`#1a130c`,{y:2.94,z:1.3}));let Ce=new n(new de(.16,20),new S({color:`#ffe6b0`,toneMapped:!1}));Ce.position.set(0,2.9,1.3),Ce.rotation.x=Math.PI/2,g.add(Ce);for(let[e,t]of[[-1.6,-1],[1.6,-1],[-1.6,-2.6],[1.6,-2.6],[0,-2.6]]){g.add(Q(.28,.05,.28,`#1a130c`,{y:2.95,x:e,z:t}));let r=new n(new de(.1,16),new S({color:`#ffe6b0`,toneMapped:!1}));r.position.set(e,2.915,t),r.rotation.x=Math.PI/2,r.raycast=()=>{},g.add(r)}g.add(Zi(C,{x:-3.46,y:2.15,z:.2,ry:Math.PI/2,face:`#efe2c8`,rim:`#2a1c10`})),g.add(Q(3.4,.03,2.4,`#3a1410`,{rough:.98,x:0,y:.012,z:1.95})),g.add(Q(3,.04,2,`#6e2a26`,{rough:.96,x:0,y:.02,z:1.95}));let we=new a;we.add(Q(.32,.32,.32,`#7a4a2a`,{rough:.8,y:.16}));for(let e=0;e<6;e++){let t=Q(.05,.55,.13,`#356a32`,{rough:.7,y:.32});t.geometry.translate(0,.27,0),t.rotation.z=(e/6-.5)*1.1,t.rotation.x=Math.sin(e*1.3)*.22,we.add(t)}we.position.set(2.7,0,.4),g.add(we),g.add(Ri({w:.7,d:.7,x:2.7,y:.03,z:.4,opacity:.45})),v.add(Q(11,.2,11,`#403d38`,{rough:.85,y:-.1})),v.add(Q(11,.2,11,`#1c1a17`,{rough:.95,y:2.8})),v.add(Q(7,3,.2,te,{rough:.92,x:0,y:1.4,z:-2.9})),v.add(Q(.2,3,6,te,{rough:.92,x:-3.2,y:1.4,z:-.2})),v.add(Q(.2,3,6,te,{rough:.92,x:3.2,y:1.4,z:-.2}));for(let e of[-1.6,-.4]){let t=new n(new D(.07,.07,6,10),new c({color:`#6b6258`,roughness:.6,metalness:.4}));t.rotation.z=Math.PI/2,t.position.set(0,2.62,e),v.add(t)}let Te=new S({color:`#ffffff`,toneMapped:!1}),W=new n(new u(1.9,1.2),Te);W.position.set(0,1.5,-2.79),v.add(W),v.add(Q(2.06,1.36,.06,`#241a12`,{x:0,y:1.5,z:-2.83})),v.add(Q(.04,.34,.04,`#1a1410`,{x:-.1,y:2.45,z:-.4}));let G=new n(new de(.1,16),new S({color:`#ffdb8a`,toneMapped:!1}));G.position.set(-.1,2.26,-.4),G.rotation.x=Math.PI/2,v.add(G);let Ee=new a;Ee.add(Q(1.3,.05,.32,`#3a2c1e`,{x:0,y:0,z:0}));let K=[`#7a3a2a`,`#2a4a6a`,`#b08a3a`,`#3a5a3a`,`#6a2a4a`];for(let e=0;e<8;e++)Ee.add(Q(.12,.34,.24,K[e%K.length],{x:-.55+e*.14,y:.2,z:0}));Ee.position.set(-2.3,1.5,-2.66),v.add(Ee);let De=new a;De.add(Q(.34,.34,.34,`#7a4a2a`,{y:.17}));let Oe=new a;for(let e=0;e<6;e++){let t=Q(.05,.5,.14,`#3a7a3a`,{rough:.7});t.geometry.translate(0,.25,0),t.rotation.z=(e/6-.5)*1.2,t.rotation.x=Math.sin(e)*.25,Oe.add(t)}Oe.position.y=.34,De.add(Oe),De.position.set(2.45,0,-1.4),v.add(De),v.add(Zi(C,{x:1.9,y:2.1,z:-2.78,ry:0,face:`#d8d2c4`,rim:`#1a130c`}));let ke=new a;ke.add(Q(3.4,.12,1.5,ee,{rough:.32,y:.86,z:1.5,map:k,mapRepeat:[3,1.4]})),ke.add(Q(3.2,.78,1.36,O,{y:.46,z:1.5,map:k,mapRepeat:[3,1]}));for(let e of[.66,.4,.14])ke.add(Q(.9,.2,.04,`#4a3120`,{x:1.05,y:e,z:2.2}));ke.add(Q(.12,.04,.04,`#caa15a`,{x:1.05,y:.66,z:2.23,metal:.6}));let Ae=new n(new D(.05,.045,.1,16),new c({color:`#d8cbb4`,roughness:.6}));Ae.position.set(-.55,.97,1.95);let je=new n(new N(.035,.012,8,14),new c({color:`#d8cbb4`,roughness:.6}));je.position.set(-.61,.97,1.95),je.rotation.y=Math.PI/2,ke.add(Ae,je);let Me=new R(new ye({map:na(),color:`#fff4e0`,transparent:!0,opacity:0,depthWrite:!1,blending:2}));Me.scale.set(.12,.18,1),Me.position.set(-.55,1.05,1.95),Me.raycast=()=>{},ke.add(Me),ke.add(Q(.26,.03,.34,`#efe7d4`,{rough:.85,x:.5,y:.935,z:1.9})),m.add(ke);let Ne=new a;Ne.add(Q(.06,.5,.06,`#2a1c10`,{x:-1.15,y:1.15,z:1.6}));let Pe=new n(new P(.22,.26,16,1,!0),new c({color:`#c2802e`,roughness:.5,side:2,emissive:`#3a2208`,emissiveIntensity:.6}));Pe.position.set(-1.15,1.42,1.6),Ne.add(Pe);let Fe=new T(`#ffb15a`,7,7,1.8);Fe.position.set(-1.15,1.34,1.6),Ne.add(Fe);let Ie=new R(new ye({map:na(),color:`#ffcf8a`,transparent:!0,opacity:.55,depthWrite:!1,blending:2}));Ie.scale.set(.85,.85,1),Ie.position.set(-1.15,1.35,1.6),Ie.raycast=()=>{},Ne.add(Ie),Ne.position.x=-.3,m.add(Ne);let q=new a;q.add(Q(.62,.03,.42,`#1c1c20`,{y:.93,z:1.5,metal:.4,rough:.4}));let Le=new n(new H(.62,.4,.025),new c({color:`#0a0c10`,emissive:`#2a4a6a`,emissiveIntensity:.7,roughness:.3}));Le.position.set(0,1.14,1.31),Le.rotation.x=-.32,q.add(Le),q.userData.role=`laptop`,m.add(q);let Re=new a;Re.add(Q(.26,.07,.34,`#15151a`,{x:1,y:.93,z:1.5}));let ze=Q(.3,.06,.08,`#101015`,{x:1,y:1,z:1.34,emissive:`#234a6a`,emissiveIntensity:.4});Re.add(ze),Re.userData.role=`phone`,m.add(Re);let Be=new h(`#8a6a42`,`#1c130a`,.78);r.add(Be);let Ve=new A(`#ffd9a0`,9,9,.7,.5,1.2);Ve.position.set(0,2.95,1.3),Ve.target.position.set(0,.86,1.5),r.add(Ve,Ve.target);let He=Qi(!1),Ue=Qi(!0),We=.62,Ge=1.32,Ke=1.22,qe=1.78,Je=new R(new ye({map:He,transparent:!0,depthWrite:!1}));Je.scale.set(We,We,1),Je.position.set(Ge,Ke,qe),Je.userData.role=`cat`,m.add(Je);let J=new R(new ye({map:ea(),transparent:!0,depthWrite:!1,opacity:0}));J.scale.set(.3,.3,1),J.raycast=()=>{},m.add(J);let Ye=0;function Xe(){Ye=1.3}let Ze=-.95,Qe=1.06,$e=1.95,et=.62,Y=.42,tt=.34,nt=new a;nt.position.set(Ze,Qe,$e),nt.add(Q(et,.05,tt,`#3a3026`,{y:-.19}));let rt=new n(new H(et-.04,Y-.08,tt-.04),new c({color:`#1f9fc0`,transparent:!0,opacity:.26,roughness:.1,emissive:`#0a3a4a`,emissiveIntensity:.4,depthWrite:!1}));rt.position.y=.02,nt.add(rt);for(let e of[-1,1])for(let t of[-1,1])nt.add(Q(.03,Y,.03,`#20262c`,{x:e*(et/2-.015),z:t*(tt/2-.015),metal:.5}));let it=new n(new H(et,Y,tt),new S({visible:!1}));it.userData.role=`tank`,nt.add(it);let at=new T(`#5fd8ff`,0,3,2);nt.add(at);let ot=[ta(`#e8a23c`),ta(`#d85a6a`),ta(`#6cc0e0`)],st=[],ct=Y/2-.12;for(let e=0;e<3;e++){let t=new R(new ye({map:ot[e],transparent:!0,depthWrite:!1})),n=.15-e*.015;t.userData={sz:n,sp:.6+e*.22,ph:e*2.1,ax:.21*(.7+.1*e),ay:ct,az:.09000000000000001,prevx:0},t.scale.set(n,n,1),st.push(t),nt.add(t)}let lt=na(),ut=[];for(let e=0;e<5;e++){let t=new R(new ye({map:lt,color:`#cfeffb`,transparent:!0,opacity:.5,depthWrite:!1}));t.userData={ph:e/5,sp:.16+Math.random()*.06,x:-.1+e%3*.07},t.scale.setScalar(.03+e%2*.015),t.raycast=()=>{},ut.push(t),nt.add(t)}let dt=new R(new ye({map:lt,color:`#c8a24a`,transparent:!0,opacity:0,depthWrite:!1}));dt.scale.setScalar(.04),dt.raycast=()=>{},nt.add(dt);let ft=0;function pt(){ft=3,dt.position.set(-.05,ct,0),dt.material.opacity=1}m.add(nt);let mt=new a;for(let e=0;e<8;e++){let t=new R(new ye({map:lt,color:`#ffd9a0`,transparent:!0,opacity:0,depthWrite:!1,blending:2}));t.scale.setScalar(.018),t.userData={ph:e*.9,sp:.1+e%3*.04,r:.1+e%4*.03},t.raycast=()=>{},mt.add(t)}mt.position.set(-1.45,1.2,1.6),m.add(mt);let ht=new a,gt=.925;ht.add(Ri({w:4,d:2,x:0,y:.045,z:1.55,opacity:.5})),ht.add(Ri({w:.95,d:.62,x:0,y:gt,z:1.42,opacity:.42})),ht.add(Ri({w:.3,d:.3,x:-.55,y:gt,z:1.95,opacity:.4})),ht.add(Ri({w:.42,d:.46,x:.5,y:gt,z:1.9,opacity:.35})),ht.add(Ri({w:.42,d:.46,x:1,y:gt,z:1.5,opacity:.42})),ht.add(Ri({w:.7,d:.42,x:Ze,y:gt,z:1.95,opacity:.42})),ht.add(Ri({w:.55,d:.4,x:1.32,y:gt,z:1.78,opacity:.4})),ht.add(Ri({w:.34,d:.34,x:-1.45,y:gt,z:1.6,opacity:.35})),m.add(ht),[ke,Ne,q,Re,Je,nt,mt,ht].forEach(e=>b.add(e));function _t(e,t,r,i,a,o,s){let c=new n(new H(t,r,i),new S({visible:!1}));c.position.set(a,o,s),c.userData.role=e,x.add(c)}_t(`laptop`,.95,.6,.7,0,1.05,1.4),_t(`phone`,.5,.4,.5,1,.98,1.42),_t(`cat`,.62,.74,.5,Ge,Ke,qe),_t(`tank`,et,Y,.5,Ze,Qe,$e);let vt=Xi(),yt={dressed2:new re().load(Ui),night2:new re().load(Wi),modern:new re().load(Gi),charm:new re().load(Ki)},bt=[`dressed2`,`night2`,`modern`,`charm`];for(let e of bt)yt[e].colorSpace=B;let xt=Ji(),St=new n(new u(1,1),new S({map:yt.dressed2,alphaMap:xt,transparent:!0,toneMapped:!1}));St.position.set(0,1.45,-5),St.visible=!1,St.raycast=()=>{},r.add(St);let Ct=Hi({strength:.5});r.add(Ct);let wt=`3d`,Tt=`painted`;function Et(){let e=zt===`corner`,t=wt!==`3d`,n=t&&Tt===`painted`;g.visible=e&&!t,v.visible=!e&&!t,y.visible=t||e,St.visible=t,b.visible=!n,It()}function Dt(e){return wt=bt.includes(e)?e:`3d`,wt!==`3d`&&(St.material.map=yt[wt],St.material.needsUpdate=!0),Et(),wt}function Ot(e){return Tt=e===`3d`?`3d`:`painted`,Et(),Tt}let kt=Fe.intensity,At=Le.material.emissiveIntensity,jt=new F;function Mt(e,t,n){let r=n?n.windowGlow:0,a=r>.55;Je.material.map=a?Ue:He,Ye>0&&(Ye=Math.max(0,Ye-e));let c=Ye>0?Math.sin((1.3-Ye)/1.3*Math.PI):0,u=a?.012*Math.sin(t*1.2):.03*Math.sin(t*2.4);Je.scale.set(We,We*(1+u+.12*c),1),Je.position.y=Ke+.06*c,J.material.opacity=c,J.position.set(Ge,1.72+.5*(1-Ye/1.3),qe),J.scale.setScalar(.22+.1*c),ft>0&&(ft=Math.max(0,ft-e),dt.position.y=Math.max(-.09,dt.position.y-e*.06),dt.material.opacity=ft>.3?1:ft/.3);for(let e of st){let n=e.userData,r=Math.sin(t*n.sp+n.ph)*n.ax,i=Math.sin(t*n.sp*.8+n.ph*1.7)*n.ay*.7,a=Math.cos(t*n.sp*.6+n.ph)*n.az,o=ft>0?dt.position.x:r,s=ft>0?dt.position.y:i,c=ft>0?dt.position.z:a,l=ft>0?.05:.1;e.position.x+=(o-e.position.x)*l,e.position.y+=(s-e.position.y)*l,e.position.z+=(c-e.position.z)*l,e.scale.x=(e.position.x>=n.prevx?1:-1)*n.sz,n.prevx=e.position.x}for(let e of ut){let n=(t*e.userData.sp+e.userData.ph)%1;e.position.set(e.userData.x+Math.sin(t*2+e.userData.ph*9)*.015,-.09+2*ct*n,.02),e.material.opacity=.5*Math.sin(n*Math.PI)}at.intensity=2.6*r,rt.material.emissiveIntensity=.4+.9*r,Fe.intensity=kt*(.97+.03*Math.sin(t*7)*Math.sin(t*2.3)),Le.material.emissiveIntensity=At*(.85+.15*Math.sin(t*3.1+1)),ze.material.emissiveIntensity=.4*(.65+.35*Math.sin(t*2.2)),jt.setRGB(1,.85,.62),mt.children.forEach((e,n)=>{let i=e.userData,a=(t*i.sp+i.ph)%1;e.position.set(Math.cos(t*.5+i.ph*5)*i.r,-.15+a*.45,Math.sin(t*.4+i.ph*5)*i.r),e.material.opacity=(.1+.18*r)*Math.sin(a*Math.PI)});let m=t*.4%1;Me.position.y=1.04+m*.22,Me.position.x=-.55+Math.sin(t*1.5)*.02,Me.material.opacity=.26*Math.sin(m*Math.PI),Me.scale.set(.1+m*.08,.16+m*.12,1),Oe.rotation.z=Math.sin(t*.8)*.05,Oe.rotation.x=Math.sin(t*.6+1)*.04;let h=n?n.t%1:0;for(let e of C)e.rotation.z=-h*Math.PI*2;if(vt.update(e),St.visible){let e=i.position.z-St.position.z,t=2*Math.tan(f.degToRad(i.fov)*.5)*e*1.18;St.scale.set(t*i.aspect,t,1);let n=.55+.45*(1-r);St.material.color.setRGB(n,n*.97,n*.92)}i.position.set(o.x+Math.sin(t*.5)*.04,o.y+Math.sin(t*.7)*.02,o.z),i.lookAt(s),l.update(e),d.set(l.pitch,l.yaw,0,`YXZ`),i.quaternion.multiply(p.setFromEuler(d)),Ct.fit(i)}function Nt(e,t=e){L.map=e,oe.map=t,L.needsUpdate=!0,oe.needsUpdate=!0}function Pt(e){ge.map=e,ge.needsUpdate=!0}let Ft=`corner`;function It(){let e=Ft===`corner`;fe.visible=me.visible=e,_e.visible=!e||wt!==`3d`,ve.visible=e,U.visible=!e}function Lt(e){return Ft=e===`straight-on`?`straight-on`:`corner`,It(),Ft}function Rt(e){Te.map=e,Te.needsUpdate=!0}let zt=e;function Bt(e){zt=e===`basement`?`basement`:`corner`;let t=zt===`corner`;return Et(),Ve.intensity=t?9:3.2,Be.intensity=t?.78:.82,Be.color.set(t?`#6a5238`:`#7a5a34`),zt}return Bt(zt),Lt(t),{scene:r,camera:i,update:Mt,setCityTexture:Nt,setStraightCityTexture:Pt,setVignetteTexture:Rt,setFitout:Bt,setSkin:Dt,setProps:Ot,setLayout:Lt,petCat:Xe,feedFish:pt,look:l,vignette:vt,get interactables(){return wt!==`3d`&&Tt===`painted`?x.children:[q,Re,Je,it]},get tier(){return zt},get skin(){return wt},get props(){return Tt},get layout(){return Ft}}}function Xi(){let e=new he;e.background=new F(`#7fb0dd`);let t=new s(-1.4,1.4,.9,-.9,0,10);t.position.set(0,0,5);let r=(e,t={})=>new S({color:e,toneMapped:!1,...t}),i=(e,t,i,a,o,s,c)=>{let l=new n(new u(e,t),r(s,c));return l.position.set(i,a,o),l};e.add(i(3.2,.9,.5,-.95,1,`#2a4a30`)),e.add(i(3.2,.7,-.7,-1.05,2,`#1d3724`)),e.add(i(.06,.3,-.95,-.55,3,`#3a2a1a`));let a=new n(new de(.22,18),r(`#234a2a`));a.position.set(-.95,-.32,3),e.add(a),e.add(i(.04,.55,.9,-.55,3,`#20242a`));let o=new n(new de(.1,16),r(`#ffd98a`,{transparent:!0,opacity:0}));o.position.set(.9,-.26,3.1),e.add(o);let c=new n(new de(.16,24),r(`#fff4d8`));e.add(c);let l=[];for(let[t,i]of[[-1,.5],[-.6,.7],[.2,.6],[.7,.72],[1.05,.45],[-.2,.78],[.45,.4]]){let a=new n(new de(.015,8),r(`#ffffff`,{transparent:!0,opacity:0}));a.position.set(t,i,.5),l.push(a),e.add(a)}let d=new F(`#141d33`),p=new F(`#7fb6e0`),m=new F(`#d6824a`),h=new F(`#fff0cc`),g=new F(`#cdd8ef`),_=.34;function v(t){_=(_+t*.04)%1;let n=_*Math.PI*2,r=-Math.cos(n);c.position.set(Math.sin(n)*1.15,r*.66+.06,0);let i=f.smoothstep(r,-.18,.5),a=f.smoothstep(.32,0,Math.abs(r));e.background.copy(d).lerp(p,i).lerp(m,a*.45),c.material.color.copy(r>0?h:g),o.material.opacity=1-i;let s=(1-i)*.85;for(let e of l)e.material.opacity=s}return{scene:e,camera:t,update:v}}function Zi(e,{x:t,y:r,z:i,ry:o=0,face:s=`#efe2c8`,rim:l=`#2a1c10`}){let d=new a,f=new n(new de(.2,28),new c({color:l,roughness:.6})),p=new n(new de(.17,28),new c({color:s,roughness:.7}));p.position.z=.01;let m=new n(new u(.018,.14),new c({color:`#1a130c`,roughness:.5}));return m.geometry.translate(0,.05,0),m.position.z=.02,e.push(m),d.add(f,p,m),d.position.set(t,r,i),d.rotation.y=o,d}function Qi(e){let t=document.createElement(`canvas`);t.width=t.height=128;let n=t.getContext(`2d`),r=`#e08a3c`,i=`#b96a26`,a=`#3a2410`;if(n.lineJoin=`round`,e){n.fillStyle=r,n.beginPath(),n.ellipse(64,78,44,26,0,0,7),n.fill(),n.fillStyle=i,n.beginPath(),n.ellipse(64,86,44,16,0,0,7),n.fill(),n.fillStyle=r,n.beginPath(),n.arc(36,70,20,0,7),n.fill(),n.fillStyle=r,$i(n,24,56,34,44,42,58),$i(n,40,54,50,44,54,60),n.strokeStyle=i,n.lineWidth=7,n.lineCap=`round`,n.beginPath(),n.moveTo(100,70),n.quadraticCurveTo(112,90,88,96),n.stroke(),n.strokeStyle=a,n.lineWidth=2.5,n.beginPath(),n.arc(30,70,5,.1,Math.PI-.1),n.stroke(),n.strokeStyle=i,n.lineWidth=3;for(let e of[60,74,88])n.beginPath(),n.moveTo(e,58),n.lineTo(e,70),n.stroke()}else{n.fillStyle=r,n.beginPath(),n.ellipse(64,86,30,34,0,0,7),n.fill(),n.fillStyle=`#f3c98a`,n.beginPath(),n.ellipse(64,92,14,22,0,0,7),n.fill(),n.strokeStyle=i,n.lineWidth=8,n.lineCap=`round`,n.beginPath(),n.moveTo(92,100),n.quadraticCurveTo(116,86,104,60),n.stroke(),n.fillStyle=r,n.beginPath(),n.arc(64,48,24,0,7),n.fill(),n.fillStyle=r,$i(n,44,34,50,18,60,34),$i(n,84,34,78,18,68,34),n.fillStyle=`#f0b0c0`,$i(n,47,30,50,22,56,32),$i(n,81,30,78,22,72,32),n.fillStyle=a,n.beginPath(),n.arc(55,47,3.4,0,7),n.arc(73,47,3.4,0,7),n.fill(),n.fillStyle=`#e06a7a`,$i(n,61,54,67,54,64,58),n.strokeStyle=a,n.lineWidth=1.6;for(let e of[-2,3])n.beginPath(),n.moveTo(50,55+e),n.lineTo(34,53+e),n.moveTo(78,55+e),n.lineTo(94,53+e),n.stroke();n.strokeStyle=i,n.lineWidth=3;for(let e of[78,90,102])n.beginPath(),n.moveTo(50,e),n.lineTo(78,e),n.stroke()}let o=new U(t);return o.colorSpace=B,o}function $i(e,t,n,r,i,a,o){e.beginPath(),e.moveTo(t,n),e.lineTo(r,i),e.lineTo(a,o),e.closePath(),e.fill()}function ea(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`);t.fillStyle=`#ff5a8a`,t.beginPath(),t.moveTo(32,52),t.bezierCurveTo(6,32,14,10,32,24),t.bezierCurveTo(50,10,58,32,32,52),t.fill();let n=new U(e);return n.colorSpace=B,n}function ta(e){let t=document.createElement(`canvas`);t.width=t.height=64;let n=t.getContext(`2d`);n.fillStyle=e,n.beginPath(),n.ellipse(30,32,18,11,0,0,7),n.fill(),n.beginPath(),n.moveTo(46,32),n.lineTo(60,22),n.lineTo(60,42),n.closePath(),n.fill(),n.fillStyle=`rgba(255,255,255,0.35)`,n.beginPath(),n.ellipse(28,36,12,5,0,0,7),n.fill(),n.fillStyle=`#15212a`,n.beginPath(),n.arc(20,30,2.6,0,7),n.fill();let r=new U(t);return r.colorSpace=B,r}function na(){let e=document.createElement(`canvas`);e.width=e.height=32;let t=e.getContext(`2d`),n=t.createRadialGradient(16,16,0,16,16,16);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.6,`rgba(255,255,255,0.7)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.beginPath(),t.arc(16,16,16,0,7),t.fill();let r=new U(e);return r.colorSpace=B,r}function ra(e){let t=document.createElement(`canvas`);t.width=t.height=256;let n=t.getContext(`2d`),r=n.createLinearGradient(0,0,256,256);e<0?(r.addColorStop(0,`#6a3b1c`),r.addColorStop(1,`#caa15a`)):(r.addColorStop(0,`#3a4a6a`),r.addColorStop(1,`#a86a3a`)),n.fillStyle=r,n.fillRect(0,0,256,256),n.globalAlpha=.5;for(let e=0;e<5;e++)n.fillStyle=e%2?`#2a1c10`:`#e0c080`,n.fillRect(30+e*36,40+e%3*30,26,150);let i=new U(t);return i.colorSpace=B,i}var{Timer:ia}=O,aa=new URLSearchParams(window.location.search),oa=aa.get(`demo`)===`1`||aa.has(`capture`);window.__demo=oa;var sa=(aa.get(`city`)?Number(aa.get(`city`)):0)||Math.random()*1e9|0,ca=0,la=ji({demo:oa,citySeed:sa,profileIndex:ca}),{renderer:ua,rig:da,sunRig:fa,city:pa,cityLife:ma,waterMaterial:ha,fitShadowFrustum:ga,landmarkFactory:_a,renderCityBeautyTo:va}=la,$=Yi({tier:`corner`});typeof window<`u`&&(window.__office=$),$.camera.aspect=window.innerWidth/window.innerHeight,$.camera.updateProjectionMatrix();var ya=!0;window.__shadows=ya,window.__scene=`office`;var ba={minFilter:o,magFilter:o,depthBuffer:!0,stencilBuffer:!1},xa=new z(2.2,3.4,11.5),Sa=new z(0,2,0).sub(xa),Ca=new z(0,1,0),wa=30,Ta=384/320,Ea=f.radToDeg(2*Math.atan(Math.tan(f.degToRad(wa))/Ta));function Da(e){let t=new pe(Ea,Ta,.1,100);t.position.copy(xa);let n=Sa.clone().applyAxisAngle(Ca,f.degToRad(e));return t.lookAt(xa.clone().add(n)),t}var Oa=Da(30),ka=Da(-30),Aa=new I(384,320,ba),ja=new I(384,320,ba);$.setCityTexture(Aa.texture,ja.texture);var Ma=new pe(52,540/320,.1,100);Ma.position.copy(xa),Ma.lookAt(xa.clone().add(Sa));var Na=new I(540,320,ba);$.setStraightCityTexture(Na.texture);var Pa=0,Fa=3,Ia=new I(512,320,{minFilter:o,magFilter:o,depthBuffer:!0,stencilBuffer:!1});$.setVignetteTexture(Ia.texture);var La=!1,Ra=(()=>{if(typeof document>`u`)return{showLap(){},toast(){},flash(){}};let e=document.createElement(`style`);e.textContent=`
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
    </div></div>`;let n=document.createElement(`div`);n.className=`otoast`;let r=document.createElement(`div`);r.className=`oflash`,document.body.append(t,n,r),t.querySelector(`.lap-x`).addEventListener(`click`,()=>Ba()),t.addEventListener(`click`,e=>{e.target===t&&Ba()}),t.addEventListener(`click`,e=>{e.target.closest(`button`)&&navigator.vibrate?.(10)});let i=0;return{showLap(e){t.classList.toggle(`on`,e)},toast(e){n.textContent=e,n.classList.add(`on`),clearTimeout(i),i=setTimeout(()=>n.classList.remove(`on`),1400)},flash(){r.style.transition=`none`,r.style.opacity=`0.85`,requestAnimationFrame(()=>{r.style.transition=`opacity .55s`,r.style.opacity=`0`})}}})();function za(){La=!0,Ra.showLap(!0)}function Ba(){La=!1,Ra.showLap(!1)}function Va(){ca=(ca+1)%at.length,Ra.flash(),pa.generate(sa,ca),ha.uniforms.uVecWater.value.set(pa.waterColor),ma.setProfile(pa.state.profile),ga(),Ra.toast(`✈  `+pa.state.profile.name),window.__profile=pa.state.profile.key}function Ha(e){let t=$.setFitout(e);return Ra.toast(t===`basement`?`🏚  Basement office`:`🏙  Corner office`),window.__tier=t,t}function Ua(){return Ha($.tier===`corner`?`basement`:`corner`)}window.__tier=$.tier;var Wa=[`3d`,`dressed2`,`night2`,`modern`,`charm`],Ga={"3d":`🧊  Stylized 3D office`,dressed2:`📚  Dressed office (day)`,night2:`🌙  Night office`,modern:`🏙  Modern office (day)`,charm:`🎨  Charm office`};function Ka(e){let t=$.setSkin(e);return window.__officeSkin=t,Ra.toast(Ga[t]),t}function qa(){return Ka(Wa[(Wa.indexOf($.skin)+1)%Wa.length])}window.__officeSkin=$.skin;var Ja={painted:`🎨  Painted props (cohesive)`,"3d":`🧊  Live 3D props (animated)`};function Ya(e){let t=$.setProps(e);return window.__officeProps=t,$.skin!==`3d`&&Ra.toast(Ja[t]),t}function Xa(){return Ya($.props===`painted`?`3d`:`painted`)}window.__officeProps=$.props;var Za={corner:`🏙  Corner window`,"straight-on":`🖼  Straight-on window`};function Qa(e){let t=$.setLayout(e);return window.__officeLayout=t,Ra.toast(Za[t]),t}function $a(){return Qa($.layout===`corner`?`straight-on`:`corner`)}window.__officeLayout=$.layout;var eo=new j,to=new fe,no=(e,t)=>{to.x=e/window.innerWidth*2-1,to.y=-(t/window.innerHeight)*2+1};function ro(){eo.setFromCamera(to,$.camera);let e=eo.intersectObjects($.interactables,!0)[0];if(!e)return null;let t=e.object;for(;t&&!t.userData.role;)t=t.parent;return t?t.userData.role:null}function io(e){e===`laptop`?za():e===`phone`?Va():e===`cat`?$.petCat():e===`tank`&&$.feedFish()}var ao=6,oo=0,so=0,co=0,lo=0,uo=0,fo=!1,po=!1;ua.domElement.style.cursor=`grab`,ua.domElement.addEventListener(`mousedown`,e=>{fo=!0,po=!1,oo=lo=e.clientX,so=uo=e.clientY,co=performance.now()}),window.addEventListener(`mousemove`,e=>{fo?(!po&&Math.hypot(e.clientX-oo,e.clientY-so)>ao&&(po=!0),po&&($.look.addDrag(e.clientX-lo,e.clientY-uo),ua.domElement.style.cursor=`grabbing`),lo=e.clientX,uo=e.clientY):(no(e.clientX,e.clientY),ua.domElement.style.cursor=ro()?`pointer`:`grab`)}),window.addEventListener(`mouseup`,e=>{if(fo&&!po&&!La){no(e.clientX,e.clientY);let t=ro();t&&io(t)}fo=!1,po=!1,ua.domElement.style.cursor=`grab`});var mo=!1;ua.domElement.addEventListener(`touchstart`,e=>{e.touches.length===1&&(oo=lo=e.touches[0].clientX,so=uo=e.touches[0].clientY,co=performance.now(),mo=!1)},{passive:!0}),ua.domElement.addEventListener(`touchmove`,e=>{if(e.touches.length!==1)return;let t=e.touches[0].clientX,n=e.touches[0].clientY;!mo&&Math.hypot(t-oo,n-so)>8&&(mo=!0),mo&&$.look.addDrag(t-lo,n-uo),lo=t,uo=n},{passive:!0}),window.addEventListener(`touchend`,e=>{if(!mo&&performance.now()-co<350&&(!e.touches||e.touches.length===0)&&!La){let e=ro();e&&io(e)}mo=!1});var ho={left:!1,right:!1,up:!1,down:!1},go={ArrowLeft:`left`,ArrowRight:`right`,ArrowUp:`up`,ArrowDown:`down`};window.addEventListener(`keydown`,e=>{if(go[e.key]){ho[go[e.key]]=!0,e.preventDefault();return}e.key===`Escape`&&(La?Ba():$.look.recenter()),(e.key===`f`||e.key===`F`)&&Ua(),(e.key===`j`||e.key===`J`)&&qa(),(e.key===`u`||e.key===`U`)&&Xa(),(e.key===`t`||e.key===`T`)&&fa.cyclePreset(),(e.key===`h`||e.key===`H`)&&(ya=!ya,window.__shadows=ya),(e.key===`w`||e.key===`W`)&&$a()}),window.addEventListener(`keyup`,e=>{go[e.key]&&(ho[go[e.key]]=!1)}),_a.whenReady.then(()=>{pa.generate(sa,ca),ga(),window.__cityReady=!0}),aa.get(`office`)===`basement`&&Ha(`basement`);var _o=aa.get(`officeskin`);Wa.includes(_o)&&Ka(_o);var vo=aa.get(`officeprops`);[`painted`,`3d`].includes(vo)&&Ya(vo);var yo=aa.get(`officelayout`);[`corner`,`straight-on`].includes(yo)&&Qa(yo);var bo=new ia;bo.connect(document);function xo(){bo.update();let e=Math.min(bo.getDelta(),.1);da.update(e),la.updateWorld(e,bo.getElapsed(),{shadowsOn:ya,seasonTarget:0}),$.look.addKeys(e,ho),$.update(e,bo.getElapsed(),fa),window.__lookYaw=$.look.yaw,window.__lookPitch=$.look.pitch,$.tier===`basement`?(ua.setRenderTarget(Ia),ua.render($.vignette.scene,$.vignette.camera)):Pa%Fa===0&&($.layout===`straight-on`?va(Ma,Na):(va(Oa,Aa),va(ka,ja),$.skin!==`3d`&&va(Ma,Na))),Pa++,ua.setRenderTarget(null),ua.render($.scene,$.camera),requestAnimationFrame(xo)}xo(),Fi({key:`office`,title:`The Office`,tips:[`Drag to look around the office (or use the arrow keys)`,`Click / tap the LAPTOP to open the game panel`,`Tap the PHONE to travel to another city · pet the CAT · feed the FISH`,`Esc exits · F fitout · J skin · U props · W window · T time`]}),window.addEventListener(`resize`,()=>{la.resize(),$.camera.aspect=window.innerWidth/window.innerHeight,$.camera.updateProjectionMatrix()});