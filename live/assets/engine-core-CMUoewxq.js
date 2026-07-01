import{$ as e,A as t,B as n,C as r,Ct as i,D as a,E as o,F as s,G as c,H as l,I as u,J as d,K as f,L as p,M as m,N as h,O as g,P as _,Q as v,R as y,S as b,Tt as x,U as S,V as C,W as w,X as T,Y as E,Z as D,_ as O,at as k,b as A,c as j,d as M,dt as N,et as P,f as F,ft as I,g as L,gt as ee,h as R,ht as te,i as ne,it as re,j as ie,k as ae,l as z,m as oe,mt as se,n as B,nt as ce,o as le,ot as ue,p as de,pt as fe,q as V,r as H,s as pe,st as me,t as he,u as U,vt as ge,w as _e,wt as W,x as ve,xt as ye,y as G,yt as be,z as xe}from"./three-B-BUIy7G.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var Se=(e,t,n,r)=>e+(t-e)*(1-Math.exp(-n*r)),Ce=(e,t,n)=>e<t?t:e>n?n:e,we=Math.atan(1/Math.SQRT2),Te=Math.atan(.5),K=Math.PI/4,q={PERSPECTIVE:4,ISOMETRIC:5,DIMETRIC:6},Ee=8,J=.03,De=1.45,Y=4,Oe=40,ke=1.5,Ae=16,je=6,Me=22,Ne=3.5,Pe=11,Fe=(e,t,n)=>Se(e,t,Ee,n),Ie=(e,t)=>e+Math.PI*2*Math.round((t-e)/(Math.PI*2));function Le({aspect:e,fov:t=48,near:n=.1,far:r=100,target:i=new W(0,.8,0),azimuth:a=K,elevation:o=.52,distance:s=12,zoom:c=5.5}={}){let l=new P(t,e,n,r),u=new v(-1,1,1,-1,n,r),d=q.PERSPECTIVE,f=e,p={azimuth:a,elevation:o,distance:s,zoom:c,target:i.clone()},m={azimuth:a,elevation:o,distance:s,zoom:c,target:i.clone()},h=!1,g=null,_=new W,y=()=>d===q.PERSPECTIVE?l:u;function b(e){e!==d&&(d=e,d===q.ISOMETRIC||d===q.DIMETRIC?(p.elevation=d===q.ISOMETRIC?we:Te,p.azimuth=Ie(K,m.azimuth),h=!0):h=!1)}function x(e,t){p.azimuth+=e,h||(p.elevation=w.clamp(p.elevation+t,J,De))}function S(e){d===q.PERSPECTIVE?p.distance=w.clamp(p.distance*e,Y,Oe):p.zoom=w.clamp(p.zoom*e,ke,Ae)}function C(e,t){let n=p.azimuth,r=d===q.PERSPECTIVE?p.distance*.04:p.zoom*.08,i=new W(Math.cos(n),0,-Math.sin(n)),a=new W(-Math.sin(n),0,-Math.cos(n));p.target.addScaledVector(i,e*r),p.target.addScaledVector(a,t*r)}function T(e,t){f=e/t,l.aspect=f,l.updateProjectionMatrix()}function E(e){g&&(g(_),p.target.copy(_)),m.azimuth=Fe(m.azimuth,p.azimuth,e),m.elevation=Fe(m.elevation,p.elevation,e),m.distance=Fe(m.distance,p.distance,e),m.zoom=Fe(m.zoom,p.zoom,e),m.target.x=Fe(m.target.x,p.target.x,e),m.target.y=Fe(m.target.y,p.target.y,e),m.target.z=Fe(m.target.z,p.target.z,e);let t=Math.cos(m.elevation),n=Math.sin(m.elevation),r=Math.cos(m.azimuth),i=Math.sin(m.azimuth),a=y();if(a.position.set(m.target.x+m.distance*t*i,m.target.y+m.distance*n,m.target.z+m.distance*t*r),a.lookAt(m.target),a.isOrthographicCamera){let e=m.zoom,t=e*f;a.left=-t,a.right=t,a.top=e,a.bottom=-e,a.updateProjectionMatrix()}}function D(e,t,n,r=!1){p.target.set(e,t,n),r&&m.target.copy(p.target)}function O(e,t=!1){p.zoom=w.clamp(e,ke,Ae),t&&(m.zoom=p.zoom)}function k(e,t=!1){p.azimuth=Ie(e,m.azimuth),t&&(m.azimuth=p.azimuth)}function A(e,t=!1){p.elevation=w.clamp(e,J,De),t&&(m.elevation=p.elevation)}function j(e,{frame:t,snap:n=!1}={}){g=e,n&&(g(_),p.target.copy(_),m.target.copy(_)),t!=null&&(d===q.PERSPECTIVE?p.distance=w.clamp(t,Y,Oe):p.zoom=w.clamp(t,ke,Ae))}function M(){g=null}return{get camera(){return y()},get mode(){return d},get azimuth(){return m.azimuth},get following(){return!!g},setTarget:D,setZoom:O,setFollow:j,clearFollow:M,setAzimuth:k,setElevation:A,get styleT(){return d===q.PERSPECTIVE?w.clamp((m.distance-je)/(Me-je),0,1):w.clamp((m.zoom-Ne)/(Pe-Ne),0,1)},setMode:b,orbit:x,zoomBy:S,pan:C,setViewport:T,update:E}}var Re={value:0},ze={value:0},Be=new G(`#ffffff`),Ve={value:0},He={value:0},Ue={value:0},We=new i,Ge={value:0},Ke={value:0},qe=`
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
`;function Je(e){e.uniforms.uVector=Re,e.uniforms.uVecTint={value:Be},e.uniforms.uVecShadow=Ve,e.uniforms.uSnow=He,e.uniforms.uCloud=Ue,e.uniforms.uCloudOff={value:We},e.uniforms.uFogCharm=Ge}function Ye(e){return e.replace(`#include <fog_fragment>`,`
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
  `)}function Xe(e){return e.replace(`#include <common>`,`#include <common>
varying vec3 vVecN;
varying vec3 vVecP;
varying vec2 vWorldXZ;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
  vVecN = normal;
  vVecP = position;
  vWorldXZ = (modelMatrix * vec4(position, 1.0)).xz;`)}function Ze(e){return e.replace(`#include <shadowmap_pars_fragment>`,`#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>`)}var Qe=`col *= mix(1.0, getShadowMask(), uVecShadow);`;function X(e,{color:t,id:n,windowGlow:r,winColors:i=[`#ffb852`,`#8cd9ff`],litFrac:a=.55}={}){let o=[0,1,2].map(e=>new G(i[e]??i[i.length-1]));return e.customProgramCacheKey=()=>`lgr-vec-tower`,e.onBeforeCompile=e=>{Je(e),e.uniforms.uWindowGlow=r,e.uniforms.uWinId={value:n},e.uniforms.uVecColor={value:new G(t)},e.uniforms.uWinA={value:o[0]},e.uniforms.uWinB={value:o[1]},e.uniforms.uWinC={value:o[2]},e.uniforms.uWinLit={value:a},e.uniforms.uWinRecess=ze,e.vertexShader=Xe(e.vertexShader),e.fragmentShader=Ye(Ze(e.fragmentShader.replace(`#include <common>`,`#include <common>
        uniform float uWindowGlow;
        uniform float uWinId;
        uniform vec3  uVecColor;
        uniform vec3  uWinA; uniform vec3 uWinB; uniform vec3 uWinC;
        uniform float uWinLit;
        uniform float uWinRecess;
        ${qe}
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
          // L106 NOON WINDOW FIX: uWinRecess (beauty+noon only, = midK; 0 on stylized tiers → byte-identical) makes the
          // pane ABSOLUTELY darker so the recess survives the big noon key + the ACES shoulder (was only *relatively*
          // darker via a 0.40× ratio → washed out at noon). Warmer floor so the L105 warm-balance doesn't fight it.
          vec3 dayGlass = diffuseColor.rgb * (0.40 - 0.22 * uWinRecess) + vec3(0.030, 0.045, 0.075);
          diffuseColor.rgb = mix(diffuseColor.rgb, dayGlass, wL.x * (0.85 + 0.10 * uWinRecess));   // pane commits harder at noon
        }`).replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>
        {
          vec3 wcol; vec2 w = winTerms(wcol);
          totalEmissiveRadiance += w.x * w.y * wcol * uWindowGlow * 2.6;   // L93: brighter lit windows → they GLOW + the existing bloom catches them (the "city ignites" beat)
        }`).replace(`#include <opaque_fragment>`,`#include <opaque_fragment>
        if (uVector > 0.5) {
          vec3 col = vecShade(uVecColor);
          ${Qe}                                  // the sun's shadow darkens the body
          vec3 wcol; vec2 w = winTerms(wcol);
          vec3 glass = vec3(0.17, 0.23, 0.34);          // dark glass-blue panes (day)
          col = mix(col, glass, w.x * 0.85);
          col += w.x * w.y * wcol * uWindowGlow * 2.2;  // …windows EMIT (unshadowed) at night — L93: brighter ignite
          gl_FragColor = vec4(col, diffuseColor.a);
        }`)))},e}function Z(e,{color:t=null,glow:n=null,glowDay:r=0,glowNight:i=1,windowGlow:a=null,season:o=!1}={}){let s=t===null,c=n!==null&&a!==null;return e.customProgramCacheKey=()=>`lgr-vec|`+(s?`d`:`c`)+(c?`g`:``)+(o?`s`:``),e.onBeforeCompile=e=>{Je(e),s||(e.uniforms.uVecColor={value:new G(t)}),c&&(e.uniforms.uGlow={value:new G(n)},e.uniforms.uGlowDay={value:r},e.uniforms.uGlowNight={value:i},e.uniforms.uWindowGlow=a),o&&(e.uniforms.uSeason=Ke),e.vertexShader=Xe(e.vertexShader);let l=s?`diffuseColor.rgb`:`uVecColor`,u=o?`seasonShift(${l})`:l,d=(s?``:`uniform vec3 uVecColor;
`)+(c?`uniform vec3 uGlow; uniform float uGlowDay; uniform float uGlowNight; uniform float uWindowGlow;
`:``)+(o?`uniform float uSeason;
vec3 seasonShift(vec3 c){
  c = mix(c, vec3(0.86, 0.46, 0.13), smoothstep(0.40, 0.70, uSeason));   // → autumn orange
  c = mix(c, vec3(0.46, 0.33, 0.20), smoothstep(0.75, 1.00, uSeason));   // → bare brown
  return c;
}
`:``),f=c?`uGlow * mix(uGlowDay, uGlowNight, uWindowGlow)`:`vec3(0.0)`,p=Ye(Ze(e.fragmentShader.replace(`#include <common>`,`#include <common>
`+d+qe).replace(`#include <opaque_fragment>`,`#include <opaque_fragment>
        if (uVector > 0.5) {
          vec3 col = vecShade(${u});
          ${Qe}                            // the sun's shadow darkens the flat tier…
          gl_FragColor = vec4(col + ${f}, diffuseColor.a);  // …but the night glow stays lit
        }`)));c&&(p=p.replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>\n  totalEmissiveRadiance += ${f};`)),e.fragmentShader=p},e}var $e={value:0},et={value:0},tt={value:0};function nt(e,{sway:t=!1}={}){return e.customProgramCacheKey=()=>t?`lgr-ao-sway`:`lgr-ao`,e.onBeforeCompile=e=>{e.uniforms.uAoStrength=$e,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
attribute float aAo;
varying float vAo;`+(t?`
uniform float uSwayTime;
uniform float uSwayWind;`:``)).replace(`#include <begin_vertex>`,`#include <begin_vertex>
  vAo = aAo;`+(t?[``,`  // L94 sway: height-weighted drift; instanceMatrix[3].xz = the instance world offset → per-tree phase.`,`  #ifdef USE_INSTANCING`,`    float swPh = instanceMatrix[3].x * 0.7 + instanceMatrix[3].z * 0.6;`,`  #else`,`    float swPh = 0.0;`,`  #endif`,`  float swAmp = max(transformed.y, 0.0) * uSwayWind;`,`  transformed.x += sin(uSwayTime * 1.6 + swPh) * swAmp;`,`  transformed.z += sin(uSwayTime * 1.2 + swPh * 1.3) * swAmp * 0.7;`].join(`
`):``)),t&&(e.uniforms.uSwayTime=et,e.uniforms.uSwayWind=tt),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying float vAo;
uniform float uAoStrength;`).replace(`#include <dithering_fragment>`,`#include <dithering_fragment>
  gl_FragColor.rgb *= (1.0 - clamp(vAo, 0.0, 1.0) * uAoStrength);`)},e}function rt(e){let t=e>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function it(e){let t=rt(e);return{next:t,range:(e,n)=>e+(n-e)*t(),int:(e,n)=>e+Math.floor(t()*(n-e+1)),pick:e=>e[Math.floor(t()*e.length)],chance:e=>t()<e}}var at=new G,ot={h:0,s:0,l:0};function st(e,t){return at.set(e).getHSL(ot),ot.l=Math.max(.1,Math.min(.9,ot.l*(.78+t.next()*.14))),ot.h=(ot.h+(t.next()-.5)*.045+1)%1,ot.s=Math.min(1,ot.s*(.92+t.next()*.26)),at.setHSL(ot.h,ot.s,ot.l),`#`+at.getHexString()}var ct=[{key:`manhattan`,name:`Manhattan`,towers:[`#EDE3C8`,`#D9B98A`,`#B5562F`,`#A8C8E8`,`#2E3F5C`],ground:`#7CC455`,street:`#9AA0A6`,sidewalk:`#C8CCD0`,park:`#5DB347`,water:`#29A8D8`,shopfronts:[`#C04A3A`,`#3A7AC0`,`#C09A2A`],glass:`#7FA8CC`,winColors:[`#ffd27a`,`#9ad6ff`],hMax:4.6,sigma:.36,roofRate:.35,pSplit:.6,nightLit:.55,roofTint:null,coast:{base:.55,out:1,in:.6,jag:1.05},landmarks:[`empireState`,`chrysler`,`liberty`]},{key:`paris`,name:`Paris`,towers:[`#E8DCC0`,`#F2EAD6`,`#E0D2B4`],ground:`#8CC46A`,street:`#A8A29A`,sidewalk:`#D4CEC2`,park:`#6DB35A`,water:`#3FA8C8`,shopfronts:[`#C04A3A`,`#3A6B5A`,`#7A5AC0`],glass:`#5A6B7A`,winColors:[`#ffdca0`,`#ffcaa0`],hMax:1.5,sigma:.9,roofRate:.15,pSplit:.75,nightLit:.45,roofTint:`#6A7886`,coast:{base:1.05,out:.55,in:.3,jag:.5},landmarks:[`eiffel`,`arcDeTriomphe`,`sacreCoeur`]},{key:`neoTokyo`,name:`Neo-Tokyo`,towers:[`#2A3038`,`#3A4250`,`#252B36`,`#4A4456`],ground:`#3A4A42`,street:`#5A6068`,sidewalk:`#7A8088`,park:`#2E5E46`,water:`#0E6878`,shopfronts:[`#E8483A`,`#5AE8E0`,`#E85AA0`],glass:`#5AE8E0`,winColors:[`#5AE8E0`,`#E85AA0`,`#E8E06A`],hMax:5.2,sigma:.42,roofRate:.6,pSplit:.6,nightLit:.7,roofTint:null,coast:{base:.7,out:1.05,in:.62,jag:1.7},landmarks:[`tokyoTower`,`pagoda`,`neonBillboard`]}],lt=ct.map(e=>e.key),ut=.3,dt=1.9,ft=.55,pt=2.45,mt=.12,ht=.6,gt=6,_t={BASE:.7,OUT:.95,IN:.55,JAG:1,SAMPLES_PER_EDGE:28,HARBOR_DEPTH:.55,HARBOR_WIDTH:.26},vt={PLINTH_TOP:ut,BLOCK:dt,STREET:ft,PITCH:pt,SIDEWALK:mt,SHORE:ht,N:gt,COAST:_t};function yt(e,t,n){let r=n?.base??_t.BASE,a=n?.out??_t.OUT,o=n?.in??_t.IN,s=n?.jag??_t.JAG,c=t+r,l=it((e^789079)>>>0),u=[2,3,5,8,11,13].map(e=>({k:e,amp:1/e*s**((e-2)/6),phase:l.range(0,Math.PI*2)})),d=u.reduce((e,t)=>e+t.amp,0),f=e=>{let t=0;for(let n of u)t+=n.amp*Math.sin(n.k*e*Math.PI*2+n.phase);return Math.max(-1,Math.min(1,t/(d*.6)))},p=[{fix:+c,nx:1,nz:0,sign:1},{fix:+c,nx:0,nz:1,sign:-1},{fix:-c,nx:-1,nz:0,sign:-1},{fix:-c,nx:0,nz:-1,sign:1}],m=t+.22,h=_t.SAMPLES_PER_EDGE,g=4*h,_=[],v=0;for(let e=0;e<4;e++){let t=p[e];for(let n=0;n<h;n++,v++){let s=n/h,l=v/g,u=(-c+2*c*s)*t.sign,d=f(l),p=d>=0?d*a:d*o;if(e===0){let e=Math.abs(s-.5);if(e<_t.HARBOR_WIDTH){let t=.5+.5*Math.cos(e/_t.HARBOR_WIDTH*Math.PI);p-=(r+_t.HARBOR_DEPTH)*t}}let y,b;t.nx===0?(b=t.fix+t.nz*p,y=u,b=t.nz>0?Math.max(b,m):Math.min(b,-m)):(y=t.fix+t.nx*p,b=u,y=t.nx>0?Math.max(y,m):Math.min(y,-m)),_.push(new i(y,b))}}return{points:_,B:c,maxR:c+a,harborX:m}}function bt(e){(Array.isArray(e)?e:[e]).forEach(e=>e&&e.dispose&&e.dispose())}function xt({seed:e=1,profileIndex:t=0,landmarkFactory:n=null,windowGlow:r}){let i=new m,o=new m,s=new m;o.raycast=()=>{},s.raycast=()=>{},i.add(o,s);let c=new _e(16773594,3);c.position.set(.45,.6,-.65).multiplyScalar(10);let l=new _(7313331,2762272,1);i.add(c,l);let u=0,f=[],p={seed:e,profileIndex:t,profile:ct[t],extent:0,meshCount:0};function h(e,t,n,r){let i=new V(new z(e,.04,t),Z(new E({color:r,roughness:.95,flatShading:!0}),{color:r}));return i.position.y=n,i.userData.ground=!0,i}function g(e,t){for(let e of o.children)e.geometry&&e.geometry.dispose(),bt(e.material);o.clear();for(let e of s.children)e.traverse(e=>{e.isMesh&&bt(e.material)});s.clear(),f.length=0,u=0;let r=it(e),i=ct[t],c=(gt-1)/2*pt,l=7.075;p={seed:e,profileIndex:t,profile:i,extent:l+(i.coast?.base??_t.BASE),meshCount:0};let d=yt(e,l,i.coast);p.coast=d;let m=new se;d.points.forEach((e,t)=>t?m.lineTo(e.x,e.y):m.moveTo(e.x,e.y)),m.closePath();let g=new V(new a(m,{depth:2,bevelEnabled:!1,steps:1}),Z(new E({color:i.ground,roughness:.9,flatShading:!0,side:2}),{color:i.ground}));g.rotation.x=-Math.PI/2,g.position.y=ut-2,g.userData.ground=!0,o.add(g);let _=2*7.195;o.add(h(_,_,.32,i.street)),x(d.harborX,i);let C=[];for(let e=0;e<gt;e++)for(let t=0;t<gt;t++)C.push([e,t]);let w=new Set,T=Math.max(1,Math.round(C.length*.08));for(;w.size<T;)w.add(r.int(0,C.length-1));let D=r.range(-2.45*.6,pt*.6),O=r.range(-2.45*.6,pt*.6),k=Math.hypot(c,c),A=[];if(C.forEach(([e,t],n)=>{let a=(e-(gt-1)/2)*pt,s=(t-(gt-1)/2)*pt;if(o.add(h(dt,dt,.32999999999999996,i.sidewalk).translateX(a).translateZ(s)),w.has(n)){o.add(h(dt-mt*2,dt-mt*2,.35,i.park).translateX(a).translateZ(s));let e=r.int(3,5);for(let t=0;t<e;t++)S(a+r.range(-.6,.6),s+r.range(-.6,.6),i,r);return}let c=dt-mt*2,l=r.chance(i.pSplit)?2:1,u=r.chance(i.pSplit)?2:1,d=c/l,f=c/u;for(let e=0;e<l;e++)for(let t=0;t<u;t++){let n=a-c/2+d*(e+.5),o=s-c/2+f*(t+.5),l=Math.max(.6,d-.1),u=Math.max(.6,f-.1),p=Math.hypot(n-D,o-O)/k,m=Math.exp(-(p*p)/(2*i.sigma*i.sigma)),h=Math.max(.5,.5+(i.hMax-.5)*m*r.range(.75,1.25));h>i.hMax*.5&&Math.min(l,u)>=.7&&A.push({lx:n,lz:o,fw:l,fd:u,h,r:p}),v(n,o,l,u,h,i,r)}}),n&&n.ready){A.sort((e,t)=>e.r-t.r);let e=[],t=i.landmarks;for(let r=0;r<t.length&&A.length;r++){let a=null;for(let t of A)if(e.every(e=>Math.hypot(e.lx-t.lx,e.lz-t.lz)>pt*.9)){a=t;break}a||=A[0],e.push(a),y(a.lx,a.lz);let o=i.hMax*n.heightFactor(t[r]),c=n.make(t[r],{x:a.lx,z:a.lz,w:a.fw,d:a.fd,h:o,plinthTop:ut});if(c){s.add(c);let e=new j().setFromObject(c);b(e.min.x-.15,e.max.x+.15,e.min.z-.15,e.max.z+.15)}}}o.traverse(e=>{e.isMesh&&(e.userData.ground?(e.castShadow=!1,e.receiveShadow=!0):e.material&&e.material.isMeshBasicMaterial?(e.castShadow=!1,e.receiveShadow=!1):(e.castShadow=!0,e.receiveShadow=!0))}),s.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),p.meshCount=o.children.length+s.children.length;let M=0;for(let e of o.children){let t=e.position;M=(Math.imul(M,16777619)^(Math.round(t.x*100)*2654435761^Math.round(t.y*100)*40503^Math.round(t.z*100)*2246822519))>>>0}for(let e of p.coast.points)M=(Math.imul(M,16777619)^(Math.round(e.x*100)*2654435761^Math.round(e.y*100)*40503))>>>0;p.sig=M,window.__city={seed:e,profile:i.key,meshes:p.meshCount,sig:M}}function v(e,t,n,i,a,s,c){let l=X(new E({flatShading:!0,roughness:.7,metalness:.05,envMapIntensity:.3}),{color:st(c.pick(s.towers),c),id:++u,windowGlow:r,winColors:s.winColors,litFrac:s.nightLit}),p=new V(new z(n,a,i),l);if(p.position.set(e,ut+a/2,t),p.userData.lot=[e,t],o.add(p),s.roofTint){let r=Z(new E({color:s.roofTint,roughness:.85,flatShading:!0}),{color:s.roofTint}),c=new V(new z(n*1.02,.08,i*1.02),r);c.position.set(e,ut+a+.04,t),c.userData.lot=[e,t],o.add(c)}if(a<1.4){let r=c.pick(s.shopfronts),a=new V(new z(n*1.04,.18,i*1.04),Z(new E({color:r,roughness:.8,flatShading:!0}),{color:r}));a.position.set(e,.39,t),a.userData.lot=[e,t],o.add(a)}let m=ut+a,h=n,g=i;if(a>s.hMax*.5&&c.chance(.55)){let l=n*c.range(.5,.72),d=i*c.range(.5,.72),f=a*c.range(.18,.4),p=new V(new z(l,f,d),X(new E({flatShading:!0,roughness:.7,metalness:.05,envMapIntensity:.3}),{color:st(c.pick(s.towers),c),id:++u,windowGlow:r,winColors:s.winColors,litFrac:s.nightLit}));p.position.set(e,ut+a+f/2,t),p.userData.lot=[e,t],o.add(p),m=ut+a+f,h=l,g=d}if(a>s.hMax*.45&&c.chance(s.roofRate)){let n=c.chance(.5)?new V(new z(h*.4,.18,g*.4),Z(new E({color:`#9a9a9a`,flatShading:!0}),{color:`#9a9a9a`})):new V(new ve(h*.18,h*.18,.22,10),Z(new E({color:`#b9bec4`,flatShading:!0}),{color:`#b9bec4`}));if(n.position.set(e+c.range(-.1,.1),m+.11,t+c.range(-.1,.1)),n.userData.lot=[e,t],o.add(n),c.chance(.25)){let n=new V(new ee(.05,6,5),new d({color:`#ff3b30`,transparent:!0,opacity:1}));n.position.set(e,m+.15,t),n.userData.lot=[e,t],n.raycast=()=>{},o.add(n),f.push({mesh:n,phase:c.range(0,6.28)})}}if(a>s.hMax*.7&&c.chance(.35)){let n=a*c.range(.18,.34),r=new V(new ve(.018,.05,n,6),Z(new E({color:`#c8ccd2`,flatShading:!0}),{color:`#c8ccd2`}));r.position.set(e,m+n/2,t),r.userData.lot=[e,t],r.raycast=()=>{},o.add(r)}}function y(e,t){for(let n=o.children.length-1;n>=0;n--){let r=o.children[n];r.userData.lot&&Math.abs(r.userData.lot[0]-e)<1e-4&&Math.abs(r.userData.lot[1]-t)<1e-4&&(r.geometry&&r.geometry.dispose(),bt(r.material),o.remove(r))}for(let e=f.length-1;e>=0;e--)f[e].mesh.parent||f.splice(e,1)}function b(e,t,n,r){for(let i=o.children.length-1;i>=0;i--){let a=o.children[i];a.userData.lot&&a.position.x>=e&&a.position.x<=t&&a.position.z>=n&&a.position.z<=r&&(a.geometry&&a.geometry.dispose(),bt(a.material),o.remove(a))}}function x(e,t){let n=Z(new E({color:`#7a5634`,roughness:.95,flatShading:!0}),{color:`#7a5634`}),r=(e,t,r,i)=>{let a=new V(new z(e,.06,t),n);a.position.set(r,ut-.16,i),o.add(a)};r(.24,2,e+.02,0),r(1.3,.22,e+.7,-.72),r(1.3,.22,e+.7,.72)}function S(e,t,n,r){let i=new G(n.park),a=(n,a)=>{let s=i.clone().offsetHSL(0,0,r.range(-.06,.06)).getStyle(),c=new V(new ee(n,7,6),Z(new E({color:s,flatShading:!0}),{color:s,season:!0}));c.scale.y=.7,c.position.set(e,ut+a,t),c.userData.lot=null,o.add(c)},s=new V(new z(.05,.18,.05),Z(new E({color:`#6b4a2a`,flatShading:!0}),{color:`#6b4a2a`}));s.position.set(e,.39,t),o.add(s),a(.22,.28),a(.16,.46)}function C(e){for(let t of f)t.mesh.material.opacity=.35+.65*(.5+.5*Math.sin(e*3+t.phase))}return g(e,t),{group:i,key:c,fill:l,update:C,generate:g,get state(){return p},get extent(){return p.extent},get waterColor(){return p.profile.water},profiles:ct}}var St=Math.PI*2,Ct=.7,wt=90,Tt=[{name:`night`,sun:`#4a6f9e`,intensity:.35,hemiSky:`#26344f`,hemiGround:`#0c1018`,horizon:`#1e2942`,sky:`#36486e`,exposure:.95,outline:`#101a30`,window:1,toonGain:2.6,turbidity:3,rayleigh:1,mie:.004,mieG:.75,gradeTint:`#cfd8ec`,gradeSat:.84,gradeLift:`#05070e`,gradeContrast:1},{name:`dawn`,sun:`#ff9e54`,intensity:2.4,hemiSky:`#8a7686`,hemiGround:`#2a1f1a`,horizon:`#b8512c`,sky:`#ffb070`,exposure:1.05,outline:`#241826`,window:.3,toonGain:2,turbidity:6,rayleigh:3,mie:.025,mieG:.86,gradeTint:`#ffe6cf`,gradeSat:1.05,gradeLift:`#0a0603`,gradeContrast:1.04},{name:`noon`,sun:`#fff4e0`,intensity:4.6,hemiSky:`#9cb8cc`,hemiGround:`#33302a`,horizon:`#5e7689`,sky:`#aacadd`,exposure:1.18,outline:`#0b0a08`,window:0,toonGain:1.7,turbidity:1.6,rayleigh:2.9,mie:.005,mieG:.78,gradeTint:`#d6e6f4`,gradeSat:1.34,gradeLift:`#000000`,gradeContrast:1.26},{name:`dusk`,sun:`#ff6b35`,intensity:2,hemiSky:`#7a566a`,hemiGround:`#281a18`,horizon:`#b0432a`,sky:`#ff8a5a`,exposure:1.05,outline:`#1f1420`,window:.72,toonGain:2,turbidity:7,rayleigh:3.2,mie:.028,mieG:.87,gradeTint:`#ffdcc0`,gradeSat:1.06,gradeLift:`#0c0604`,gradeContrast:1.05}],Et=e=>e-Math.floor(e),Dt=(e,t,n)=>e+(t-e)*n,Ot=(e,t,n)=>e+(t-e)*(1-Math.exp(-6*n));function kt({t:e=.5}={}){let t=e,n=e,r=!1,i=!1,a=Tt.map(e=>({name:e.name,sun:new G(e.sun),hemiSky:new G(e.hemiSky),hemiGround:new G(e.hemiGround),horizon:new G(e.horizon),sky:new G(e.sky),outline:new G(e.outline),intensity:e.intensity,exposure:e.exposure,window:e.window,toonGain:e.toonGain,turbidity:e.turbidity,rayleigh:e.rayleigh,mie:e.mie,mieG:e.mieG,gradeTint:new G(e.gradeTint),gradeLift:new G(e.gradeLift),gradeSat:e.gradeSat,gradeContrast:e.gradeContrast})),o=new W(0,1,0),s=new G(`#fff4e0`),c=new G(`#6f97b3`),l=new G(`#2a2620`),u=new G(`#3a4a57`),d=new G(`#7da3bd`),f=new G(`#0b0a08`),p=new G(`#000000`),m=3,h=1,g=0,_=1.7,v={turbidity:2.2,rayleigh:1.3,mie:.005,mieG:.78},y={tint:new G(`#fafdff`),lift:new G(`#000000`),sat:1.08,contrast:1},b=new W;function x(e){let t=Et(e)*4,n=Math.floor(t)%4,r=(n+1)%4,i=t-Math.floor(t),x=a[n],S=a[r];s.lerpColors(x.sun,S.sun,i),c.lerpColors(x.hemiSky,S.hemiSky,i),l.lerpColors(x.hemiGround,S.hemiGround,i),u.lerpColors(x.horizon,S.horizon,i),d.lerpColors(x.sky,S.sky,i),f.lerpColors(x.outline,S.outline,i),m=Dt(x.intensity,S.intensity,i),h=Dt(x.exposure,S.exposure,i),g=Dt(x.window,S.window,i),_=Dt(x.toonGain,S.toonGain,i),v.turbidity=Dt(x.turbidity,S.turbidity,i),v.rayleigh=Dt(x.rayleigh,S.rayleigh,i),v.mie=Dt(x.mie,S.mie,i),v.mieG=Dt(x.mieG,S.mieG,i),y.tint.lerpColors(x.gradeTint,S.gradeTint,i),y.lift.lerpColors(x.gradeLift,S.gradeLift,i),y.sat=Dt(x.gradeSat,S.gradeSat,i),y.contrast=Dt(x.gradeContrast,S.gradeContrast,i),p.setRGB(.045*g,.075*g,.14*g);let C=Et(e)*St-Math.PI/2,w=Math.cos(C),T=Math.sin(C);b.set(w,T*Math.cos(Ct),T*Math.sin(Ct)),b.y>=0?o.copy(b):o.copy(b).negate()}return x(t),{sunDir:o,sunColor:s,hemiSky:c,hemiGround:l,horizon:u,sky:d,outline:f,toonFloor:p,skyParams:v,grade:y,sunArc:b,get sunIntensity(){return m},get exposure(){return h},get windowGlow(){return g},get toonGain(){return _},get t(){return Et(t)},get auto(){return r},get clock(){let e=Math.round(Et(t)*24*60)%1440;return`${String(Math.floor(e/60)).padStart(2,`0`)}:${String(e%60).padStart(2,`0`)}`},cyclePreset(){n=(Math.floor(t*4+1e-4)+1)/4},nudge(e){n+=e/24},goTo(e){n=e},toggleAuto(){r=!r},setReducedMotion(e){i=e},update(e){r&&!i&&(n+=e/wt),t=Ot(t,n,e),x(t)}}}function At(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.35,`rgba(255,255,255,0.55)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new de(e);return r.colorSpace=N,r}function jt(e,t){let n=[];for(let r=0;r<16;r++){let i=r/16*Math.PI*2;n.push(new W(Math.cos(i)*e,t,Math.sin(i)*e))}return new R(n,!0,`catmullrom`,.5)}function Mt(e){let t=(t,n)=>Math.exp(-((e-t)*(e-t))/(2*n*n)),n=Math.max(t(.33,.05),t(.75,.06)),r=w.smoothstep(e,.24,.3)*(1-w.smoothstep(e,.8,.88));return w.clamp(.15+.55*r+.45*n,.12,1)}function Nt(){let{PITCH:e,N:t,PLINTH_TOP:n}=vt,r=t+1,i=n+.04,a=n=>(n-t/2)*e,o=t/2,s=[],c=(e,t)=>t*r+e;for(let e=0;e<r;e++)for(let t=0;t<r;t++)s.push({x:a(t),z:a(e),i:t,j:e,edges:[]});let l=[],u=(t,n)=>{let r=(s[t].i===o||s[t].j===o)&&(s[n].i===o||s[n].j===o),i=l.length;l.push({a:t,b:n,len:e,main:r}),s[t].edges.push(i),s[n].edges.push(i)};for(let e=0;e<r;e++)for(let t=0;t<r;t++)t<r-1&&u(c(t,e),c(t+1,e)),e<r-1&&u(c(t,e),c(t,e+1));return{nodes:s,edges:l,y:i,mid:o}}function Pt({plinthTop:e=.3,extent:t=4,profile:n=null}={}){let r=new m,i=Nt(),{nodes:a,edges:o}=i,s=i.y,c=.34,l=0;{let e=vt.PITCH-c*2;l=Math.max(1,Math.floor((e+.26)/.56))}let u=new d({color:`#e8c84a`,fog:!0}),f=new p(new z(.05,.012,.3),u,o.length*l);f.frustumCulled=!1,f.raycast=()=>{},f.receiveShadow=!1,f.castShadow=!1,r.add(f);{let e=new D,t=0;for(let n of o){let r=a[n.a],i=a[n.b],o=i.x-r.x,u=i.z-r.z,d=Math.hypot(o,u),p=o/d,m=u/d,h=Math.atan2(p,m),g=d-c*2;for(let n=0;n<l;n++){let i=c+(l===1?g/2:g*n/(l-1));e.position.set(r.x+p*i,s,r.z+m*i),e.rotation.set(0,h,0),e.updateMatrix(),f.setMatrixAt(t++,e.matrix)}}f.instanceMatrix.needsUpdate=!0}let h=new p(new z(.34,.26,.74),Z(new E({flatShading:!0,roughness:.5,metalness:.3})),12);h.castShadow=!0,h.receiveShadow=!1,h.frustumCulled=!1,h.raycast=()=>{};let g=new M,_=new Float32Array(72),v=new Float32Array(72),y=new G(`#fff0c0`),b=new G(`#ff3528`);for(let e=0;e<12;e++)y.toArray(v,e*3),b.toArray(v,(12+e)*3),_[e*3+1]=-50,_[(12+e)*3+1]=-50;g.setAttribute(`position`,new U(_,3)),g.setAttribute(`color`,new U(v,3));let x=new k({size:.72,sizeAttenuation:!0,map:At(),vertexColors:!0,transparent:!0,opacity:0,blending:2,depthWrite:!1}),S=new re(g,x);S.frustumCulled=!1,S.raycast=()=>{},r.add(h,S);let C=[`#f4c430`,`#c0392b`,`#d8dde2`,`#9aa7b4`,`#6b7785`,`#5a7d9a`],T=rt(2403557),O=o.map((e,t)=>t).filter(e=>o[e].main),A=[];for(let e=0;e<12;e++){let t=e<4&&O.length?O[T()*O.length|0]:T()*o.length|0,n=e===1;A.push({edge:t,fwd:T()<.5,s:T()*o[t].len,speed:n?.5:.78+e%3*.1,lenZ:n?1.45:1,color:C[n?1:e===0?0:2+e%4],rng:rt(12648430+e*2654435761),isBus:n,pos:new W,dirX:0,dirZ:1,active:!1})}let j=new G;A.forEach((e,t)=>h.setColorAt(t,j.set(e.color)));function N(e,t,n){let r=a[e],i=r.edges.filter(e=>e!==t);if(i.length===0)return t;let s=o[t],c=s.a===e?s.b:s.a,l=r.x-a[c].x,u=r.z-a[c].z,d=Math.hypot(l,u)||1,f=i[0],p=-2;for(let t of i){let n=o[t],i=n.a===e?n.b:n.a,s=a[i].x-r.x,c=a[i].z-r.z,m=Math.hypot(s,c)||1,h=l/d*(s/m)+u/d*(c/m);h>p&&(p=h,f=t)}return n()<.65?f:i[n()*i.length|0]}let P=N,F=new D,I=(e,t)=>{F.position.set(0,-50,0),F.scale.setScalar(0),F.updateMatrix(),e.setMatrixAt(t,F.matrix)},L=.085,ee=vt.PLINTH_TOP+.02+.13,R=new p(new oe(.04,.1,3,6),Z(new E({flatShading:!0,roughness:.8})),14);R.castShadow=!0,R.receiveShadow=!1,R.frustumCulled=!1,R.raycast=()=>{};let te=jt(t-.72,e),ne=[];for(let e=0;e<14;e++)ne.push({phase:e/14,speed:.12+e%4*.02,dir:e%2?1:-1,pos:new W,active:!1});let ie=new W,ae=new W,se=new G;ne.forEach((e,t)=>R.setColorAt(t,se.set([`#caa`,`#9ab`,`#bba`,`#ab9`][t%4]))),r.add(R);let B={manhattan:`#e8c84a`,paris:`#dcd2bc`,neoTokyo:`#5ae8e0`};function ce(e){e&&u.color.set(B[e.key]||`#e8c84a`)}ce(n);function le(t,n,r){let i=r?r.t:.5,s=r?r.windowGlow:0,c=Math.max(2,Math.round(Mt(i)*12)),l=s>.05;for(let e=0;e<12;e++){if(e>=c){I(h,e),A[e].active=!1,_[e*3+1]=-50,_[(12+e)*3+1]=-50;continue}let n=A[e];n.s+=t*n.speed;let r=0;for(;n.s>=o[n.edge].len&&r++<4;){n.s-=o[n.edge].len;let e=n.fwd?o[n.edge].b:o[n.edge].a,t=P(e,n.edge,n.rng);n.edge=t,n.fwd=o[t].a===e}let i=o[n.edge],s=n.fwd?a[i.a]:a[i.b],u=n.fwd?a[i.b]:a[i.a],d=u.x-s.x,f=u.z-s.z,p=Math.hypot(d,f)||1,m=d/p,g=f/p,v=-g,y=m,b=s.x+m*n.s+v*L,x=s.z+g*n.s+y*L,S=Math.atan2(m,g);F.position.set(b,ee,x),F.rotation.set(0,S,0),F.scale.set(1,1,n.lenZ),F.updateMatrix(),h.setMatrixAt(e,F.matrix),n.pos.set(b,ee,x),n.dirX=m,n.dirZ=g,n.active=!0;let C=.74*n.lenZ*.5,w=ee+.06,T=e*3,E=(12+e)*3;l?(_[T]=b+m*(C+.04),_[T+1]=w,_[T+2]=x+g*(C+.04),_[E]=b-m*(C+.02),_[E+1]=w,_[E+2]=x-g*(C+.02)):(_[T+1]=-50,_[E+1]=-50)}h.instanceMatrix.needsUpdate=!0,g.attributes.position.needsUpdate=!0,x.opacity=w.clamp(s*1.8,0,1);let u=Math.max(2,Math.round(Mt(i)*14));for(let t=0;t<14;t++){if(t>=u){I(R,t),ne[t].active=!1;continue}let r=ne[t],i=(r.phase+r.dir*r.speed*n*.02+1e3)%1;te.getPointAt(i,ie),te.getTangentAt(i,ae);let a=Math.sin(n*6+r.phase*30)*.015;F.position.set(ie.x,e+.09+a,ie.z),F.rotation.set(0,Math.atan2(ae.x*r.dir,ae.z*r.dir),Math.sin(n*6+r.phase*30)*.06),F.scale.setScalar(1),F.updateMatrix(),R.setMatrixAt(t,F.matrix),r.pos.set(ie.x,e+.09,ie.z),r.active=!0}R.instanceMatrix.needsUpdate=!0}let ue=[...A.map((e,t)=>({kind:`car`,label:e.isBus?`bus`:`car ${t+1}`,getWorldPos:t=>t.copy(e.pos),active:()=>e.active,info:()=>`${e.isBus?`bus`:`car`} · ${o[e.edge].main?`main avenue`:`side street`} → heading ${Ft(e.dirX,e.dirZ)}`})),...ne.map((e,t)=>({kind:`person`,label:`person ${t+1}`,getWorldPos:t=>t.copy(e.pos),active:()=>e.active,info:()=>`person · strolling the waterfront promenade`}))];function de(){return ue}return{group:r,update:le,setProfile:ce,getFollowables:de,graph:i,setRouter(e){P=e||N}}}function Ft(e,t){return[`N`,`NE`,`E`,`SE`,`S`,`SW`,`W`,`NW`][(Math.round(Math.atan2(e,t)/(Math.PI/4))%8+8)%8]}function It({frames:e,fps:t=8,cols:n,rows:r=1}={}){let i=n||e||4,a=r||1,o=e||i*a,s=typeof window<`u`&&window.matchMedia?window.matchMedia(`(prefers-reduced-motion: reduce)`):null;function c(e,t){let n=t%i,r=Math.floor(t/i);e.offset.x=n/i,e.offset.y=1-(r+1)/a}function l(e){let t=e.clone();return t.needsUpdate=!0,t.repeat.set(1/i,1/a),c(t,0),t}function u(e,n,r=0){if(s&&s.matches)return c(e,0),0;let i=(Math.floor(n*t+r)%o+o)%o;return c(e,i),i}function d(e,t){let n=(Math.round(t)%o+o)%o;return c(e,n),n}return{frames:o,fps:t,cols:i,rows:a,makeInstanceTexture:l,step:u,setFrame:d}}function Lt(e){if(typeof document>`u`||!e||!e.image)return e;let t=e.image,n=t.width||t.naturalWidth,r=t.height||t.naturalHeight,i=document.createElement(`canvas`);i.width=n,i.height=r;let a=i.getContext(`2d`,{willReadFrequently:!0});a.drawImage(t,0,0,n,r);let o=a.getImageData(0,0,n,r),s=o.data;for(let e=0;e<s.length;e+=4){let t=s[e]*.299+s[e+1]*.587+s[e+2]*.114|0;s[e]=s[e+1]=s[e+2]=t}a.putImageData(o,0,0);let c=new de(i);return c.colorSpace=e.colorSpace||`srgb`,c}function Rt({url:e,fallback:t,luminance:n=!1,onReady:r}={}){let i=n?Lt(t):t;return e&&typeof window<`u`&&new ye().load(e,e=>{e.colorSpace=N,r&&r(n?Lt(e):e)},void 0,()=>{}),i}var zt=``+new URL(`gull_diffusion_sheet-BMlUTLhu.png`,import.meta.url).href;function Bt(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.4,`rgba(255,255,255,0.5)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new de(e);return r.colorSpace=N,r}function Vt(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64*.62,0,64/2,64*.62,64*.5);n.addColorStop(0,`rgba(240,250,255,0.95)`),n.addColorStop(1,`rgba(240,250,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new de(e);return r.colorSpace=N,r}function Ht(){let e=document.createElement(`canvas`);e.width=256,e.height=64;let t=e.getContext(`2d`);t.strokeStyle=`#ffffff`,t.lineWidth=6,t.lineCap=`round`,t.lineJoin=`round`;let n=[14,24,36,24];for(let e=0;e<4;e++){let r=e*64,i=n[e];t.beginPath(),t.moveTo(r+8,40),t.quadraticCurveTo(r+24,i,r+32,36),t.quadraticCurveTo(r+40,i,r+56,40),t.stroke()}let r=new de(e);return r.colorSpace=N,r}function Ut(e,t,n=18){let r=[];for(let i=0;i<n;i++){let a=i/n*Math.PI*2;r.push(new W(Math.cos(a)*e,t,Math.sin(a)*e))}return new R(r,!0,`catmullrom`,.5)}function Wt(e,t,n){let r=e-t,i=[],a=(e,t)=>i.push(new W(e,n,t)),o=(e,n,r,i,o=4)=>{for(let s=1;s<=o;s++){let c=r+(i-r)*(s/o);a(e+Math.cos(c)*t,n+Math.sin(c)*t)}};for(let t=0;t<4;t++)a(e,-r+2*r*t/4);o(r,r,0,Math.PI/2);for(let t=0;t<4;t++)a(r-2*r*t/4,e);o(-r,r,Math.PI/2,Math.PI);for(let t=0;t<4;t++)a(-e,r-2*r*t/4);o(-r,-r,Math.PI,1.5*Math.PI);for(let t=0;t<4;t++)a(-r+2*r*t/4,-e);return o(r,-r,1.5*Math.PI,2*Math.PI),new R(i,!0,`catmullrom`,.5)}function Gt({extent:e=8,waterSize:t=28,plinthTop:n=.3}={}){let r=new m;r.raycast=()=>{};let i=.06,a=(e,n,r)=>r.set(e/t+.5,-n/t+.5,0),o=[Wt(9.5,3,i),Ut(12.7,i),new R([new W(8.4,i,0),new W(11,i,-3.6),new W(13,i,0),new W(11,i,3.6)],!0,`catmullrom`,.5)],s=o.map(e=>e.getLength());function c({scale:e=1,hull:t=`#6b7785`,cabin:n=`#e7ecf2`}){let r=new m,i=new V(new z(.46*e,.2*e,1.1*e),Z(new E({color:t,roughness:.6,metalness:.2,flatShading:!0}),{color:t}));i.position.y=.02;let a=new V(new z(.3*e,.22*e,.42*e),Z(new E({color:n,roughness:.7,flatShading:!0}),{color:n}));return a.position.set(0,.18*e,.08*e),r.add(i,a),r.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!1),e.raycast=()=>{}}),r.userData.halfLen=.55*e,r}let l=[{laneIndex:0,dir:1,speed:.5,wake:.024,scale:1,hull:`#5a6675`,cabin:`#e7ecf2`},{laneIndex:1,dir:-1,speed:.42,wake:.022,scale:1,hull:`#7a5b46`,cabin:`#d9c3a6`},{laneIndex:0,dir:1,speed:.56,wake:.024,scale:.9,hull:`#456079`,cabin:`#cfe0ee`},{laneIndex:2,dir:1,speed:.34,wake:.03,scale:1.35,hull:`#39505f`,cabin:`#e2b85a`}];l.forEach((e,t)=>{e.mesh=c(e),e.u=t*.27%1,e.phase=t*1.7,e.isFerry=e.laneIndex===2,r.add(e.mesh)});let u=l.length,d=u*2,f=new M,p=new Float32Array(d*3).fill(-50),h=new Float32Array(d*3),g=new G(`#fff0c0`),_=new G(`#ff3528`);for(let e=0;e<u;e++)g.toArray(h,e*3),_.toArray(h,(u+e)*3);f.setAttribute(`position`,new U(p,3)),f.setAttribute(`color`,new U(h,3));let v=new re(f,new k({size:.6,sizeAttenuation:!0,map:Bt(),vertexColors:!0,transparent:!0,opacity:0,blending:2,depthWrite:!1}));v.frustumCulled=!1,v.raycast=()=>{},r.add(v);function y(e,t){let n=new V(new ee(e,9,7),Z(new E({color:t,roughness:.5,flatShading:!0}),{color:t}));return n.scale.set(.55,.5,1),n.castShadow=!1,n.receiveShadow=!1,n.raycast=()=>{},n.position.y=-5,n}let b=[{x:-9.5,z:6,size:.18,color:`#5b6f86`,period:11,arcH:.55,span:1.1,whale:!1},{x:7.5,z:-9.5,size:.16,color:`#4a6076`,period:14,arcH:.5,span:1,whale:!1},{x:-7,z:-8.5,size:.2,color:`#607089`,period:9,arcH:.6,span:1.2,whale:!1},{x:10.5,z:7,size:.62,color:`#3a4350`,period:38,arcH:.9,span:2.6,whale:!0}];b.forEach((e,t)=>{e.mesh=y(e.size,e.color),e.heading=Math.atan2(-e.x,-e.z),e.t=t/b.length*e.period,e.splashed=!1,r.add(e.mesh),e.whale&&(e.spout=new ge(new be({map:Vt(),transparent:!0,opacity:0,depthWrite:!1,fog:!0})),e.spout.scale.set(.6,1.1,1),e.spout.position.set(e.x,-5,e.z),r.add(e.spout))});let x=It({frames:4,fps:7}),S=[`#ffffff`,`#cfd4da`,`#c8a06a`],C=[],T=Rt({url:zt,fallback:Ht(),luminance:!0,onReady:e=>{T=e;for(let t of C){let n=t.sp.material.map;t.sp.material.map=x.makeInstanceTexture(e),t.sp.material.needsUpdate=!0,n&&n.dispose()}typeof window<`u`&&(window.__gullSheet=`diffusion`)}});for(let e=0;e<4;e++){let t=new ge(new be({map:x.makeInstanceTexture(T),color:new G(S[e%S.length]),transparent:!0,opacity:0,depthWrite:!1,fog:!0}));t.scale.setScalar(.5),C.push({sp:t,r:8.6+e*.5,y:1.1+e%2*.5,speed:(.18+e*.03)*(e%2?-1:1),phase:e*1.9}),r.add(t)}typeof window<`u`&&(window.__gullSheet=window.__gullSheet||`procedural`,window.__gullAnim={frames:x.frames,variants:S.length,fps:x.fps});let D=b.length,O=Array.from({length:u+D},()=>new W),A=e=>e.laneIndex,j=new W,N=new W,P=new W;function F(e,t,n){let r=n?n.windowGlow:0,c=1-r;for(let n=0;n<u;n++){let c=l[n],d=o[c.laneIndex],f=s[c.laneIndex],m=c.isFerry?.45+.55*Math.min(1,Math.abs((c.u+.5)%1-.5)*3):1,h=c.u;c.u=(c.u+c.dir*e*c.speed*m/f+1)%1,(c.dir>0?c.u<h:c.u>h)&&(c.laneIndex=A(c)),d.getPointAt(c.u,j),d.getTangentAt(c.u,N);let g=N.x*c.dir,_=N.z*c.dir,v=Math.atan2(g,_),y=Math.sin(t*1.1+c.phase)*.025;c.mesh.position.set(j.x,i+y,j.z),c.mesh.rotation.set(Math.sin(t*.9+c.phase)*.04,v,0);let b=c.mesh.userData.halfLen;a(j.x-g*b,j.z-_*b,P),O[n].set(P.x,P.y,c.wake);let x=n*3,S=(u+n)*3;if(r>.05){let e=.18;p[x]=j.x+g*(b+.05),p[x+1]=e,p[x+2]=j.z+_*(b+.05),p[S]=j.x-g*(b+.02),p[S+1]=e,p[S+2]=j.z-_*(b+.02)}else p[x+1]=-50,p[S+1]=-50}I(),v.material.opacity=w.clamp(r*1.8,0,1);for(let t=0;t<D;t++){let n=b[t];n.t+=e;let r=u+t,o=n.whale?3.2:1.3;if(n.t>=n.period){let e=(n.t-n.period)/o;if(e>=1){n.t=0,n.splashed=!1,n.mesh.position.y=-5,n.spout&&(n.spout.material.opacity=0),O[r].set(0,0,0);continue}let t=Math.sin(Math.PI*e),s=(e-.5)*n.span,c=n.x+Math.sin(n.heading)*s,l=n.z+Math.cos(n.heading)*s;n.mesh.position.set(c,i-.1+t*n.arcH,l),n.mesh.rotation.set(Math.cos(Math.PI*e)*.9,n.heading,0);let u=e<.16||e>.84;if(a(c,l,P),O[r].set(P.x,P.y,u?n.whale?.07:.05:0),n.spout){let t=w.clamp((e-.15)*3,0,1)*(1-e);n.spout.position.set(c,.56+t*.6,l),n.spout.material.opacity=t*.9}}else n.mesh.position.y=-5,O[r].set(0,0,0),n.spout&&(n.spout.material.opacity=0)}for(let e=0;e<4;e++){let n=C[e],r=n.phase+t*n.speed*.25;n.sp.position.set(Math.cos(r)*n.r,n.y+Math.sin(t*1.4+n.phase)*.12,Math.sin(r)*n.r),n.sp.material.opacity=w.clamp(c*.9-.05,0,.85);let i=x.step(n.sp.material.map,t,n.phase);e===0&&typeof window<`u`&&(window.__gullFrame=i)}if(typeof window<`u`){let e=0;for(let t of b)t.mesh.position.y>i&&e++;window.__waterLife={boats:u,breaching:e,gulls:+C[0].sp.material.opacity.toFixed(2),lights:+v.material.opacity.toFixed(2)}}}function I(){f.attributes.position.needsUpdate=!0}function L(){return O.length}let te=[...l.map((e,t)=>({kind:`boat`,label:e.isFerry?`ferry`:`boat ${t+1}`,getWorldPos:t=>t.copy(e.mesh.position),info:()=>e.isFerry?`boat · harbor ferry → docks`:`boat · open-water lane ${e.laneIndex}`})),...C.map((e,t)=>({kind:`gull`,label:`gull ${t+1}`,getWorldPos:t=>t.copy(e.sp.position),active:()=>e.sp.material.opacity>.05,info:()=>`gull · circling the coast`})),...b.map((e,t)=>({kind:`fish`,label:e.whale?`whale`:`fish ${t+1}`,getWorldPos:t=>t.copy(e.mesh.position),active:()=>e.mesh.position.y>i-.3,info:()=>e.mesh.position.y>i?e.whale?`whale · breaching!`:`fish · breaching!`:`fish · below the surface`}))];function ne(){return te}return{group:r,update:F,getFollowables:ne,wakeDrops:O,get wakeCount(){return L()},lanes:o,setRouter(e){A=e||(e=>e.laneIndex)}}}var Kt=[`empireState`,`chrysler`,`liberty`,`eiffel`,`arcDeTriomphe`,`sacreCoeur`,`tokyoTower`,`pagoda`,`neonBillboard`],qt={empireState:1.25,chrysler:1.1,liberty:.55,eiffel:3.2,arcDeTriomphe:1.5,sacreCoeur:1.75,tokyoTower:1.35,pagoda:.5,neonBillboard:.9};function Jt(e){let t=()=>new E({flatShading:!0,roughness:.7,metalness:.1}),n=(n,r={})=>r.windows?X(t(),{color:n,id:e.id(),windowGlow:e.windowGlow,winColors:e.winColors,litFrac:e.litFrac}):Z(t(),{color:n,glow:r.glow??null,glowDay:r.glowDay??0,glowNight:r.glowNight??1,windowGlow:r.glow?e.windowGlow:null});return{box:(e,t,r,i,a={})=>new V(new z(e,t,r),n(i,a)),cyl:(e,t,r,i,a={})=>new V(new ve(e,t,r,a.seg||12),n(i,a)),cone:(e,t,r,i={})=>new V(new A(e,t,i.seg||8),n(r,i)),sphere:(e,t,r={})=>new V(new ee(e,r.seg||12,r.seg2||8),n(t,r)),lathe:(e,t,r={})=>new V(new y(e.map(e=>new i(e[0],e[1])),r.seg||4),n(t,r))}}var Q=(e,t,n,r)=>(e.position.set(t,n,r),e),Yt=[`#7FB0E0`,`#E07FB0`,`#7FE0A0`,`#E0C97F`,`#9FE07F`,`#7FE0E0`,`#FF8C42`,`#E0E07F`,`#C97FE0`,`#E07F7F`,`#7F9FE0`,`#E0483A`],$={empireState(e,t){let n=`#E8E0CF`;e.add(Q(t.box(.42,.18,.42,n,{windows:!0}),0,.09,0)),e.add(Q(t.box(.34,.16,.34,n,{windows:!0}),0,.26,0)),e.add(Q(t.box(.26,.14,.26,n,{windows:!0}),0,.41,0)),e.add(Q(t.box(.19,.34,.19,n,{windows:!0}),0,.65,0)),e.add(Q(t.box(.13,.06,.13,n,{windows:!0}),0,.85,0));let r=Yt[new Date().getMonth()];e.add(Q(t.cyl(.03,.045,.12,n,{seg:10,glow:r,glowNight:1.85}),0,.94,0)),e.add(Q(t.cone(.012,.07,n,{seg:8}),0,1.04,0))},chrysler(e,t){let n=`#C9CED4`;e.add(Q(t.box(.22,.55,.22,`#9AA7B4`,{windows:!0}),0,.275,0));let r=.55;for(let i=0;i<5;i++){let a=.14-i*.024,o=.07;e.add(Q(t.cyl(a*.7,a,o,n,{seg:8,glow:`#dfeaff`,glowNight:.5}),0,r+o/2,0)),r+=o}e.add(Q(t.cone(.018,.16,n,{seg:8}),0,r+.08,0))},liberty(e,t){let n=`#B9B4A6`,r=`#4FA890`;e.add(Q(t.box(.42,.16,.42,n),0,.08,0)),e.add(Q(t.box(.3,.2,.3,n),0,.26,0)),e.add(Q(t.cyl(.1,.15,.42,r,{seg:10}),0,.57,0)),e.add(Q(t.box(.11,.1,.11,r),0,.83,0));for(let n=0;n<7;n++){let i=(n/6-.5)*Math.PI*1.1;e.add(Q(t.cone(.012,.1,r,{seg:5}),Math.sin(i)*.1,.92,Math.cos(i)*.06-.02))}let i=Q(t.cyl(.025,.03,.34,r,{seg:8}),.14,.98,0);i.rotation.z=.35,e.add(i),e.add(Q(t.box(.06,.06,.06,r,{glow:`#ffd060`,glowDay:.6,glowNight:1.2}),.2,1.16,0)),e.add(Q(t.cone(.04,.09,`#ffcf66`,{seg:6,glow:`#ffd060`,glowDay:.7,glowNight:1.3}),.2,1.24,0))},eiffel(e,t){let n=`#6E5C4C`,r=[[.2,0],[.13,.16],[.085,.33],[.055,.5],[.035,.66],[.02,.85],[0,.92]];e.add(t.lathe(r,n,{seg:4}));let i=t.lathe(r,n,{seg:4});i.rotation.y=Math.PI/4,e.add(i),e.add(Q(t.box(.26,.025,.26,n),0,.33,0)),e.add(Q(t.box(.14,.02,.14,n),0,.66,0)),e.add(Q(t.cone(.01,.1,n,{seg:6}),0,.97,0))},arcDeTriomphe(t,n){let r=`#D9D0C1`,i=.58,o=.5,s=.34,c=new se;c.moveTo(-.58/2,0),c.lineTo(i/2,0),c.lineTo(i/2,o),c.lineTo(-.58/2,o),c.lineTo(-.58/2,0);let l=new e,u=.15,d=.22;l.moveTo(-.15,0),l.lineTo(-.15,d),l.absarc(0,d,u,Math.PI,0,!0),l.lineTo(u,0),l.lineTo(-.15,0),c.holes.push(l);let f=new a(c,{depth:s,bevelEnabled:!1});f.translate(0,0,-.34/2),f.computeVertexNormals(),t.add(new V(f,Z(new E({color:r,flatShading:!0}),{color:r}))),t.add(Q(n.box(i*1.06,.08,s*1.06,r),0,.54,0))},sacreCoeur(e,t){let n=`#F1EEE6`;e.add(Q(t.box(.5,.26,.4,n),0,.13,0));let r=(r,i,a,o)=>{e.add(Q(t.cyl(a*.9,a,i,n,{seg:12}),r,o,0));let s=Q(t.sphere(a,n,{seg:12}),r,o+i/2,0);s.scale.y=1.5,e.add(s)};r(0,.22,.15,.4),r(-.2,.1,.07,.33),r(.2,.1,.07,.33)},tokyoTower(e,t){let n=`#F25822`,r=`#EDEDED`,i=0;for(let a=0;a<9;a++){let o=a/9,s=(a+1)/9,c=.19*(1-o)+.03*o,l=.19*(1-s)+.03*s,u=.085,d=a%2?r:n;e.add(Q(t.cyl(l,c,u,d,{seg:4,glow:n,glowDay:0,glowNight:.7}),0,i+u/2,0)),i+=u}e.add(Q(t.box(.22,.02,.22,n,{glow:n,glowNight:.7}),0,.28,0)),e.add(Q(t.box(.12,.02,.12,r),0,.5,0)),e.add(Q(t.cone(.012,.16,r,{seg:6,glow:`#ff6a2a`,glowNight:.9}),0,i+.08,0))},pagoda(e,t){let n=0;for(let r=0;r<5;r++){let i=.42-r*.06,a=.11;e.add(Q(t.box(i,a,i,`#B23A2C`,{windows:r<4}),0,n+a/2,0)),e.add(Q(t.box(i*1.34,.03,i*1.34,`#7A3B2A`),0,n+a+.015,0)),n+=.16999999999999998}e.add(Q(t.cyl(.012,.012,.1,`#E0C040`,{seg:6}),0,n+.05,0)),e.add(Q(t.sphere(.03,`#E0C040`,{seg:8,glow:`#ffe680`,glowNight:.8}),0,n+.12,0))},neonBillboard(e,t){let n=`#20242C`;e.add(Q(t.box(.3,1,.3,n,{windows:!0}),0,.5,0));let r=[`#5AE8E0`,`#E85AA0`,`#E8E06A`],i=(n,r,i,a,o,s,c)=>{let l=Q(t.box(n,r,.02,i,{glow:i,glowDay:.6,glowNight:1.1}),a,o,s);l.rotation.y=c,e.add(l)};i(.22,.34,r[0],0,.75,.16,0),i(.16,.5,r[1],.16,.5,0,Math.PI/2),i(.2,.22,r[2],0,.34,-.16,0),e.add(Q(t.cone(.01,.14,n,{seg:6,glow:`#E85AA0`,glowDay:.4,glowNight:1}),0,1.08,0))}};function Xt(e,t){let n=new m;return $[e](n,Jt(t)),n}var Zt=``+new URL(`building-skyscraper-d-CapD2Zqe.glb`,import.meta.url).href,Qt=``+new URL(`building-n-hdv8kKtN.glb`,import.meta.url).href,$t=``+new URL(`building-g-CsTB1qH9.glb`,import.meta.url).href,en=``+new URL(`colormap-CK8fW2HB.png`,import.meta.url).href,tn={skyscraper:{url:Zt,color:`#9cc1dd`,fill:.92},midrise:{url:Qt,color:`#c9a07a`,fill:.96},setback:{url:$t,color:`#d9c7a0`,fill:.9}};function nn({windowGlow:e}){let t=new S;t.setURLModifier(e=>e.includes(`colormap.png`)?en:e);let n=new B(t),r={},i=!1,a=Promise.all(Object.entries(tn).map(async([e,t])=>{r[e]=(await n.loadAsync(t.url)).scene})).then(()=>{i=!0,window.__landmarksReady=!0}).catch(e=>console.error(`landmark models failed:`,e)),o=9e3;function s(t,n,i={}){let a,s;if(Kt.includes(t))a=Xt(t,{windowGlow:e,winColors:i.winColors,litFrac:i.litFrac,id:()=>++o}),s=1;else{let e=r[t],n=tn[t];if(!e||!n)return null;a=e.clone(!0),s=n.fill}a.updateMatrixWorld(!0);let c=new j().setFromObject(a).getSize(new W);a.scale.setScalar(n.h*s/c.y),a.updateMatrixWorld(!0);let l=new j().setFromObject(a),u=l.getCenter(new W);return a.position.x+=n.x-u.x,a.position.z+=n.z-u.z,a.position.y+=n.plinthTop-l.min.y,Kt.includes(t)?a.traverse(e=>{e.isMesh&&(e.castShadow=!1,e.raycast=()=>{})}):a.traverse(n=>{if(!n.isMesh)return;n.castShadow=!1,n.raycast=()=>{};let r=n=>X(n.clone(),{color:tn[t].color,id:++o,windowGlow:e,winColors:i.winColors,litFrac:i.litFrac});n.material=Array.isArray(n.material)?n.material.map(r):r(n.material)}),a}return{make:s,whenReady:a,heightFactor:e=>qt[e]??1,get ready(){return i}}}var rn=[`clear`,`rain`,`snow`,`fog`];function an({extent:e=7}={}){let t=new m;t.raycast=()=>{};let n=e+2,r=.25,i=(e,t)=>e+Math.random()*(t-e),a=new p(new ce(.015,.5),new d({color:`#a9bdd6`,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),600);a.frustumCulled=!1,a.raycast=()=>{};let o=new Float32Array(600*3),s=new Float32Array(600);for(let e=0;e<600;e++)o[e*3]=i(-n,n),o[e*3+1]=i(r,11),o[e*3+2]=i(-n,n),s[e]=i(9,14);let c=new p(new ce(.07,.07),new d({color:`#f3f7ff`,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),700);c.frustumCulled=!1,c.raycast=()=>{};let l=new Float32Array(700*3),u=new Float32Array(700),f=new Float32Array(700);for(let e=0;e<700;e++)l[e*3]=i(-n,n),l[e*3+1]=i(r,11),l[e*3+2]=i(-n,n),u[e]=i(0,6.28),f[e]=i(.6,1.2);t.add(a,c);let h=Array.from({length:8},()=>new W),g=0,_=`clear`,v=0,y=0,b=0,x=0,S=0,C=new D,w=(e,t,n,r)=>e+(t-e)*Math.min(1,n*r);function T(e){rn.includes(e)&&(_=e)}function E(){_=rn[(rn.indexOf(_)+1)%rn.length]}function O(e,t){let d=_===`rain`,p=_===`snow`,m=_===`fog`,T=_!==`clear`;v=w(v,+!!T,e,1.4),y=w(y,+!!T,e,1.2),b=w(b,+!!m,e,.9),S=w(S,T&&!m?1:0,e,1),x=w(x,+!!p,e,p?.22:.5);let E=d?v:0,D=Math.round(600*E);for(let t=0;t<600;t++){if(t>=D){C.position.set(0,-50,0),C.scale.setScalar(0),C.updateMatrix(),a.setMatrixAt(t,C.matrix);continue}o[t*3+1]-=s[t]*e,o[t*3]+=e*1.1,o[t*3+1]<r&&(o[t*3]=i(-n,n),o[t*3+1]=11,o[t*3+2]=i(-n,n)),C.position.set(o[t*3],o[t*3+1],o[t*3+2]),C.rotation.set(0,0,0),C.scale.set(1,1,1),C.updateMatrix(),a.setMatrixAt(t,C.matrix)}a.instanceMatrix.needsUpdate=!0,a.material.opacity=.55*E,g=d?Math.round(8*v):0;for(let e=0;e<g;e++)h[e].set(Math.random(),Math.random(),.05*v);let O=Math.round(700*(p?v:0));for(let a=0;a<700;a++){if(a>=O){C.position.set(0,-50,0),C.scale.setScalar(0),C.updateMatrix(),c.setMatrixAt(a,C.matrix);continue}l[a*3+1]-=f[a]*e;let o=Math.sin(t*1.5+u[a])*.5;l[a*3+1]<r&&(l[a*3]=i(-n,n),l[a*3+1]=11,l[a*3+2]=i(-n,n)),C.position.set(l[a*3]+o,l[a*3+1],l[a*3+2]),C.rotation.set(0,0,0),C.scale.setScalar(1),C.updateMatrix(),c.setMatrixAt(a,C.matrix)}c.instanceMatrix.needsUpdate=!0,c.material.opacity=.9*(p?v:0)}return{group:t,update:O,cycle:E,setKind:T,rainDrops:h,get kind(){return _},get intensity(){return v},get overcast(){return y},get fog(){return b},get snow(){return x},get cloud(){return S},get rainDropCount(){return g},poolCounts:{rain:600,snow:700}}}function on(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=(e,n,r)=>{let i=t.createRadialGradient(e,n,0,e,n,r);i.addColorStop(0,`rgba(255,255,255,0.95)`),i.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=i,t.beginPath(),t.arc(e,n,r,0,7),t.fill()};n(128*.42,128*.56,128*.26),n(128*.6,128*.5,128*.3),n(128*.5,128*.46,128*.22),n(128*.34,128*.54,128*.18),n(128*.7,128*.58,128*.18);let r=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5],i=t.getImageData(0,0,128,128),a=i.data;for(let e=0;e<128;e++)for(let t=0;t<128;t++){let n=(e*128+t)*4,i=a[n+3]/255,o=(r[e%4*4+t%4]+.5)/16-.5;a[n+3]=Math.max(0,Math.min(1,Math.floor(i*5+.5+o)/5))*255}t.putImageData(i,0,0);let o=new de(e);return o.colorSpace=N,o}function sn({extent:e=8,count:t=16}={}){let n=new m;n.raycast=()=>{};let r=on(),i=e+6,a=(e,t)=>e+Math.random()*(t-e),o=[];for(let e=0;e<t;e++){let e=new be({map:r,transparent:!0,depthWrite:!1,opacity:0,fog:!0}),t=new ge(e),s={sp:t,mat:e,wisp:Math.random(),x:a(-i,i),z:a(-i,i),hiY:a(4,6.8),loY:a(.6,2.2),w:a(3,5.6),h:a(1.7,3),speed:a(.25,.7),op:a(.6,1)};t.raycast=()=>{},o.push(s),n.add(t)}let s=new G,c=new G(`#ffffff`),l=new G(`#5b626e`);function u(e,t,n,r){let u=r?r.cloud:0,d=r?r.fog:0,f=Math.min(1,.4+.6*u+.5*d);s.copy(n.sky).lerp(c,.62),s.lerp(l,.6*u);for(let n=0;n<o.length;n++){let r=o[n],c=n/o.length<f;r.x+=r.speed*e*(.6+.8*u),r.x>i&&(r.x=-i,r.z=a(-i,i));let l=Math.min(cn(r.x,-i,-i+3),1-cn(r.x,i-3,i)),p=r.hiY*(1-d)+r.loY*d,m=1-.5*r.wisp,h=.72*Math.max(0,1-d-u)+1*u+.42*d,g=c?Math.max(0,h)*r.op*m*l:0;r.mat.opacity+=(g-r.mat.opacity)*Math.min(1,e*2.5),r.mat.color.copy(s);let _=r.w*(1+.6*d)*(1+.4*r.wisp),v=r.h*(1-.35*d);r.sp.scale.set(_,v,1),r.sp.position.set(r.x,p+Math.sin(t*.3+n)*.15,r.z)}}function d(e){r=e;for(let t of o)t.mat.map=e,t.mat.needsUpdate=!0}let f=o.map((e,t)=>({kind:`cloud`,label:`cloud ${t+1}`,getWorldPos:t=>t.copy(e.sp.position),active:()=>e.mat.opacity>.06,info:()=>`cloud · ${e.wisp>.6?`wispy`:`puffy`} · drifting east${e.sp.position.y<3?` (low mist)`:``}`}));function p(){return f}return{group:n,update:u,setTexture:d,getFollowables:p,get count(){return o.length}}}function cn(e,t,n){let r=Math.max(0,Math.min(1,(e-t)/(n-t)));return r*r*(3-2*r)}var ln={person:4.5,car:6,gull:6,fish:8,boat:9,cloud:16};function un({rig:e,getCamera:t,sources:n=[]}){let r=null,i=new W,a=new W,o=()=>{let e=[];for(let t of n)if(t&&t.getFollowables){let n=t.getFollowables();n&&e.push(...n)}return e},s=e=>!e.active||e.active();function c(t){return t?(r=t,e.setFollow(e=>t.getWorldPos(e),{frame:t.frame??ln[t.kind]??8}),t):null}function l(){r=null,e.clearFollow()}function u(e,n,r=.14){let l=t(),u=null,d=r;for(let t of o()){if(!s(t)||(t.getWorldPos(i),a.copy(i).project(l),a.z>1||a.z<-1))continue;let r=Math.hypot(a.x-e,a.y-n);r<d&&(d=r,u=t)}return u?c(u):null}function d(e=1,t=null){let n=o().filter(e=>(!t||e.kind===t)&&s(e));if(t||(n=dn(n)),!n.length)return null;let i=r?n.indexOf(r):-1;return i=((i+e)%n.length+n.length)%n.length,c(n[i])}function f(){r&&r.active&&!r.active()&&l()}return{pickAt:u,cycle:d,follow:c,release:l,prune:f,get focus(){return r},get count(){return o().length},get readout(){return r?{kind:r.kind,label:r.label,info:r.info?r.info():``}:null}}}function dn(e){let t=new Map;for(let n of e)t.has(n.kind)||t.set(n.kind,[]),t.get(n.kind).push(n);let n=[...t.values()],r=[];for(let e=0,t=!0;t;e++){t=!1;for(let i of n)e<i.length&&(r.push(i[e]),t=!0)}return r}var fn={maxSpeed:6,accel:9,drag:5,turnRate:2.1,chaseDist:7,chaseElev:.42};function pn(e=fn){let t=new W,n=new W,r=new W,i=new W,a=new f,o=.45;function s(s,c,l,u){let d=u&&u.heightAt||(()=>0),f=Ce(Math.abs(s.speed)/e.maxSpeed,0,1),p=s.speed>=0?1:-1;if(s.yaw+=c.steer*e.turnRate*(.35+.65*f)*p*l,c.throttle!==0)s.speed+=c.throttle*e.accel*l;else{let t=Math.min(Math.abs(s.speed),e.drag*l);s.speed-=Math.sign(s.speed)*t}s.speed=Ce(s.speed,-e.maxSpeed*.5,e.maxSpeed);let m=Math.sin(s.yaw),h=Math.cos(s.yaw);s.x+=m*s.speed*l,s.z+=h*s.speed*l;let g=d(s.x,s.z);s.y=Se(s.y,g,18,l);let _=d(s.x-o,s.z),v=d(s.x+o,s.z),y=d(s.x,s.z-o),b=d(s.x,s.z+o);return t.set(_-v,2*o,y-b).normalize(),n.set(m,0,h),r.crossVectors(t,n).normalize(),i.crossVectors(r,t).normalize(),a.makeBasis(r,t,i),s.quat.setFromRotationMatrix(a),s}return{step:s}}var mn={accel:7,lift:9,maxV:5,chaseDist:9.5,chaseElev:.4},hn={air:{drag:2,maxSpeed:8,turn:1.8,vDrag:2.2,buoyancy:0},water:{drag:4.6,maxSpeed:3.6,turn:1.3,vDrag:4.5,buoyancy:1.1},ground:{drag:5.5,maxSpeed:5,turn:2,vDrag:9,buoyancy:0}},gn=[`drag`,`maxSpeed`,`turn`,`vDrag`,`buoyancy`],_n=(e,t,n)=>e+(t-e)*n;function vn(e=mn){let t=new W,n=new W,r=new W,i=new W,a=new f,s=new o,c={drag:0,maxSpeed:0,turn:0,vDrag:0,buoyancy:0},l=.4,u=.3,d=-900;function p(e,t){let n=t.heightAt(e.x,e.z),r=t.waterHeightAt?t.waterHeightAt(e.x,e.z):d,i=e.y,a=e.medium||`air`;if(r>d){if(a===`water`){if(i<=r+l)return`water`}else if(i<r-l)return`water`}if(a===`ground`){if(i<=n+u+l)return`ground`}else if(i<n+u)return`ground`;return`air`}function m(o,l,u,d){let f=o.medium||`air`,m=p(o,d);o.medium=m,m===f?o.crossingT>0&&(o.crossingT=Math.max(0,o.crossingT-u/.6)):(o.crossing=f+`>`+m,o.crossingT=1);let h=hn[m],g=hn[f],_=1-(o.crossingT||0),v=c;for(let e of gn)v[e]=_n(g[e],h[e],_);o.yaw+=l.steer*v.turn*u,l.throttle===0?o.speed-=Math.sign(o.speed)*Math.min(Math.abs(o.speed),v.drag*u):o.speed+=l.throttle*e.accel*u,o.speed=Ce(o.speed,-v.maxSpeed*.6,v.maxSpeed);let y=Math.sin(o.yaw),b=Math.cos(o.yaw);o.x+=y*o.speed*u,o.z+=b*o.speed*u;let x=d.heightAt(o.x,o.z);if(m===`ground`&&l.lift<=0){o.vy=0,o.y=Se(o.y,x,14,u);let e=.45,s=d.heightAt(o.x-e,o.z),c=d.heightAt(o.x+e,o.z),l=d.heightAt(o.x,o.z-e),f=d.heightAt(o.x,o.z+e);t.set(s-c,2*e,l-f).normalize(),n.set(y,0,b),r.crossVectors(t,n).normalize(),i.crossVectors(r,t).normalize(),a.makeBasis(r,t,i),o.quat.setFromRotationMatrix(a)}else{o.vy+=(l.lift*e.lift+v.buoyancy)*u,o.vy-=Math.sign(o.vy)*Math.min(Math.abs(o.vy),v.vDrag*u),o.vy=Ce(o.vy,-e.maxV,e.maxV),o.y+=o.vy*u,o.y<x&&(o.y=x,o.vy<0&&(o.vy=0));let t=Ce(-l.steer*.35,-.4,.4),n=Ce(-o.vy*.06,-.3,.3);s.set(n,o.yaw,t,`YXZ`),o.quat.setFromEuler(s)}return o}return{step:m}}var yn={ground:pn,spacecraft:vn},bn=.55,xn={throttle:0,steer:0,lift:0};function Sn({rig:e,world:t}={}){let n=`free`,r=null,i=null,a=0;function o(t){if(!t||!t.pilot)return!1;r&&s(),r=t;let o=r.pilot;return i=(yn[o.model]||yn.ground)(o.profile),o.suspendAutonomy(),e.setFollow(e=>o.getWorldPos(e),{frame:o.profile.chaseDist}),e.setElevation(o.profile.chaseElev),e.setAzimuth(o.getTransform().yaw+Math.PI,!0),n=`entering`,a=bn,!0}function s(){return r?(r.pilot.resumeAutonomy(),e.clearFollow(),r=null,i=null,n=`free`,a=0,!0):!1}function c(o,s){if(!r)return;let c=r.pilot;if(n===`entering`){a-=o,e.setAzimuth(c.getTransform().yaw+Math.PI),a<=0&&(n=`piloting`);return}let l=c.getTransform();i.step(l,s||xn,o,t),c.setTransform(l),e.setAzimuth(l.yaw+Math.PI)}return{possess:o,release:s,step:c,get active(){return!!r},get piloting(){return n===`piloting`},get state(){return n},get craft(){return r},get controlHints(){return r?r.pilot.controlHints:``},get speed(){return r?r.pilot.getTransform().speed:0},get telemetry(){if(!r)return null;let e=r.pilot.getTransform(),n=t&&t.heightAt?t.heightAt(e.x,e.z):0,i=t&&t.waterHeightAt?t.waterHeightAt(e.x,e.z):-900;return{medium:e.medium||null,speed:e.speed||0,y:e.y,altitude:Math.max(0,e.y-n),depth:i>-900?Math.max(0,i-e.y):0,climb:e.vy||0}}}}var Cn=new W,wn=new W,Tn=new W,En=new W,Dn=new f,On=new W(0,1,0);function kn(){let e=document.createElement(`canvas`);e.width=256,e.height=64;let t=e.getContext(`2d`);t.strokeStyle=`#ffffff`,t.lineWidth=6,t.lineCap=`round`,t.lineJoin=`round`;let n=[14,24,36,24];for(let e=0;e<4;e++){let r=e*64,i=n[e];t.beginPath(),t.moveTo(r+8,40),t.quadraticCurveTo(r+24,i,r+32,36),t.quadraticCurveTo(r+40,i,r+56,40),t.stroke()}let r=new de(e);return r.colorSpace=N,r}function An(){let e=document.createElement(`canvas`);e.width=e.height=96;let t=e.getContext(`2d`),n=(e,n,r)=>{let i=t.createRadialGradient(e,n,0,e,n,r);i.addColorStop(0,`rgba(255,255,255,0.95)`),i.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=i,t.beginPath(),t.arc(e,n,r,0,7),t.fill()};n(96*.42,96*.56,96*.26),n(96*.6,96*.5,96*.3),n(96*.5,96*.46,96*.22),n(96*.7,96*.58,96*.18);let r=new de(e);return r.colorSpace=N,r}function jn(){let e=new m,t=new V(new z(.46,.2,1.1),Z(new E({color:`#5a6675`,roughness:.6,metalness:.2,flatShading:!0}),{color:`#5a6675`}));t.position.y=.02;let n=new V(new z(.3,.22,.42),Z(new E({color:`#e7ecf2`,roughness:.7,flatShading:!0}),{color:`#e7ecf2`}));return n.position.set(0,.18,.08),e.add(t,n),e.traverse(e=>{e.isMesh&&(e.castShadow=!0),e.raycast=()=>{}}),e}function Mn(){let e=new V(new ee(.18,9,7),Z(new E({color:`#5b6f86`,roughness:.5,flatShading:!0}),{color:`#5b6f86`}));return e.scale.set(.55,.5,1),e.raycast=()=>{},e}function Nn(){let e=new m,t=new V(new z(.18,.34,.14),Z(new E({color:`#3b6ea5`,roughness:.8,flatShading:!0}),{color:`#3b6ea5`}));t.position.y=.17;let n=new V(new z(.13,.13,.13),Z(new E({color:`#e3b98c`,roughness:.8,flatShading:!0}),{color:`#e3b98c`}));return n.position.y=.41,e.add(t,n),e.traverse(e=>{e.isMesh&&(e.castShadow=!0),e.raycast=()=>{}}),e}function Pn(){let e=new m,t=new V(new z(.5,.22,.84),Z(new E({color:`#d2622e`,roughness:.6,metalness:.2,flatShading:!0}),{color:`#d2622e`}));t.position.y=.26;let n=new V(new z(.3,.16,.32),Z(new E({color:`#2b2f37`,roughness:.8,flatShading:!0}),{color:`#2b2f37`}));n.position.set(0,.42,-.06);let r=new V(new z(.34,.12,.22),Z(new E({color:`#e2e7ee`,roughness:.7,flatShading:!0}),{color:`#e2e7ee`}));r.position.set(0,.28,.42);let i=new ve(.14,.14,.13,10);for(let[t,n]of[[-.27,.3],[.27,.3],[-.27,-.3],[.27,-.3]]){let r=new V(i,Z(new E({color:`#1c2026`,roughness:.9,flatShading:!0}),{color:`#1c2026`}));r.rotation.z=Math.PI/2,r.position.set(t,.14,n),e.add(r)}return e.add(t,n,r),e.traverse(e=>{e.isMesh&&(e.castShadow=!0),e.raycast=()=>{}}),e}function Fn(){let e=new m,t=new V(new ve(.5,.64,.16,18),Z(new E({color:`#8a93a8`,roughness:.4,metalness:.5,flatShading:!0}),{color:`#8a93a8`}));t.position.y=.3;let n=new V(new ee(.3,16,10,0,Math.PI*2,0,Math.PI/2),Z(new E({color:`#9fe6ff`,roughness:.25,metalness:.3,flatShading:!0,transparent:!0,opacity:.85}),{color:`#9fe6ff`}));n.position.y=.38;let r=new V(new z(.12,.1,.34),Z(new E({color:`#ff7a4d`,roughness:.6,flatShading:!0}),{color:`#ff7a4d`}));return r.position.set(0,.3,.52),e.add(t,n,r),e.traverse(e=>{e.isMesh&&(e.castShadow=!0),e.raycast=()=>{}}),e}function In(){let e=new m,t=`#5b6680`,n=`#2b2f3a`,r=`#3a4150`,i=(e,t)=>Z(new E({color:e,roughness:.5,metalness:.25,flatShading:!0,...t}),{color:e}),a=new V(new ee(.42,16,12),i(t));a.scale.set(.82,.78,1.28),a.position.y=.5;let o=new V(new ee(.3,14,10,0,Math.PI*2,0,Math.PI*.62),i(`#9fe6ff`,{roughness:.2,transparent:!0,opacity:.8}));o.scale.set(.82,.7,.92),o.position.set(0,.58,.32);let s=new V(new ve(.055,.14,1.05,10),i(t));s.rotation.x=Math.PI/2,s.position.set(0,.54,-.86);let c=new V(new z(.05,.3,.22),i(t));c.position.set(0,.68,-1.3);let l=new V(new z(.12,.1,.12),i(`#ff7a4d`,{roughness:.6}));l.position.set(0,.46,.74);let u=new ve(.03,.03,.92,8),d=new V(u,i(n,{roughness:.7}));d.rotation.x=Math.PI/2,d.position.set(-.28,.1,0);let f=new V(u,i(n,{roughness:.7}));f.rotation.x=Math.PI/2,f.position.set(.28,.1,0);let p=new m;p.position.set(0,.96,.06),p.add(new V(new ve(.06,.06,.12,8),i(n)));let h=new z(2.5,.02,.13),g=new V(h,i(r,{roughness:.6}));p.add(g);let _=new V(h,i(r,{roughness:.6}));_.rotation.y=Math.PI/2,p.add(_);let v=new m;v.position.set(.11,.68,-1.34);let y=new z(.04,.52,.06),b=new V(y,i(r,{roughness:.6}));v.add(b);let x=new V(y,i(r,{roughness:.6}));return x.rotation.x=Math.PI/2,v.add(x),e.add(a,o,s,c,l,d,f,p,v),e.traverse(e=>{e.isMesh&&(e.castShadow=!0),e.raycast=()=>{}}),e.userData.mainRotor=p,e.userData.tailRotor=v,e}function Ln({heightAt:e,seaSurfaceY:t=0,waterY:n=.06}={}){let r=new m;r.raycast=()=>{};let i=e||(()=>0),a=[],o=[],s={gull:0,boat:0,fish:0,cloud:0,person:0,atv:0,craft:0},c=It({frames:4,fps:7}),l=kn(),u=An(),d=[`#ffffff`,`#cfd4da`,`#c8a06a`];function f(e,r,a,o){let f=(s[e]||0)*1.7+(o.phase||0);if(e===`gull`){let t=c.makeInstanceTexture(l),n=new ge(new be({map:t,color:new G(d[s.gull%3]),transparent:!0,opacity:.9,depthWrite:!1,fog:!0}));n.scale.setScalar(.5),n.raycast=()=>{};let o=r,u=a,p=1.4+Math.random()*.6,m=i(r,a)+2.4,h=.5+Math.random()*.3;return{kind:e,obj:n,x:r,z:a,update(e,t,r){let i=f+t*h;n.position.set(o+Math.cos(i)*p,m+Math.sin(t*1.4+f)*.12,u+Math.sin(i)*p),c.step(n.material.map,t,f);let a=r?1-r.windowGlow:1;n.material.opacity=w.clamp(.25+a*.7,0,.95)},info:()=>`gull · circling`,dispose(){t.dispose()}}}if(e===`cloud`){let t=new ge(new be({map:u,transparent:!0,opacity:.85,depthWrite:!1,fog:!0}));t.scale.set(3.4,1.9,1),t.raycast=()=>{};let n=r,i=a,o=5+Math.random()*1.4,s=.12+Math.random()*.1;return{kind:e,obj:t,x:r,z:a,update(e,r,a){t.position.set(n+Math.sin(r*.18+f)*1.2,o+Math.sin(r*.3+f)*.18,i+s*Math.cos(r*.1+f)),a&&a.sky&&t.material.color.copy(a.sky).lerp(Rn,.62)},info:()=>`cloud · drifting`}}if(e===`boat`){let t=jn();t.position.set(r,n,a);let i=r,o=a,s=Math.random()*Math.PI*2;return{kind:e,obj:t,x:r,z:a,update(e,c){s+=Math.sin(c*.3+f)*.4*e;let l=.6;i+=Math.sin(s)*l*e,o+=Math.cos(s)*l*e,i+=(r-i)*.4*e,o+=(a-o)*.4*e;let u=Math.sin(c*1.1+f)*.025;t.position.set(i,n+u,o),t.rotation.set(Math.sin(c*.9+f)*.04,s,0)},info:()=>`boat · drifting`}}if(e===`fish`){let t=Mn();t.position.set(r,-5,a);let i=6+Math.random()*5,o=Math.random()*Math.PI*2,s=Math.random()*i,c={kind:e,obj:t,x:r,z:a,active:!0,update(e){if(s+=e,s>=i){let e=(s-i)/1.3;if(e>=1){s=0,t.position.set(r,-5,a),c.active=!1;return}let l=Math.sin(Math.PI*e);t.position.set(r+Math.sin(o)*(e-.5)*1,n-.1+l*.5,a+Math.cos(o)*(e-.5)*1),t.rotation.set(Math.cos(Math.PI*e)*.9,o,0),c.active=!0}else c.active=!1},info:()=>c.active?`fish · breaching!`:`fish · below`};return c}if(e===`person`){let n=Nn();n.position.set(r,i(r,a),a);let o=Math.random()*Math.PI*2;return{kind:e,obj:n,x:r,z:a,update(e,s){o+=(Math.random()-.5)*1.4*e;let c=.55,l=n.position.x+Math.sin(o)*c*e,u=n.position.z+Math.cos(o)*c*e,d=l+(r-l)*.25*e,f=u+(a-u)*.25*e;i(d,f)<t+.02&&(o+=Math.PI,d=n.position.x,f=n.position.z),n.position.set(d,i(d,f),f),n.rotation.y=o},info:()=>`person · wandering`}}if(e===`atv`){let t=Pn(),n={x:r,y:i(r,a),z:a,yaw:o.yaw??Math.random()*Math.PI*2,speed:0,quat:new ue},s=!1,c=()=>{let e=.45,t=i(n.x-e,n.z),r=i(n.x+e,n.z),a=i(n.x,n.z-e),o=i(n.x,n.z+e);Cn.set(t-r,2*e,a-o).normalize(),wn.set(Math.sin(n.yaw),0,Math.cos(n.yaw)),Tn.crossVectors(Cn,wn).normalize(),En.crossVectors(Tn,Cn).normalize(),Dn.makeBasis(Tn,Cn,En),n.quat.setFromRotationMatrix(Dn)},l=()=>{n.y=i(n.x,n.z),c(),t.position.set(n.x,n.y,n.z),t.quaternion.copy(n.quat)};return l(),{kind:e,obj:t,x:r,z:a,get piloted(){return s},update(){s||l()},info:()=>s?`ATV · piloted`:`ATV · parked`,pilot:{model:`ground`,profile:fn,controlHints:`W/S throttle · A/D steer · Esc to exit`,getWorldPos:e=>e.copy(t.position),getTransform:()=>n,setTransform:e=>{t.position.set(e.x,e.y,e.z),t.quaternion.copy(e.quat)},suspendAutonomy:()=>{s=!0},resumeAutonomy:()=>{s=!1,n.speed=0}}}}if(e===`craft`){let t=Fn(),n=1.3,s=Math.random()*Math.PI*2,c={x:r,y:i(r,a)+n,z:a,yaw:o.yaw??Math.random()*Math.PI*2,speed:0,vy:0,quat:new ue,medium:`air`,crossing:null,crossingT:0},l=!1;return{kind:e,obj:t,x:r,z:a,get piloted(){return l},update(e,r){if(l)return;c.yaw+=.3*e;let a=i(c.x,c.z)+n+Math.sin((r||0)*.8+s)*.08;c.y+=(a-c.y)*Math.min(1,e*3),t.position.set(c.x,c.y,c.z),t.rotation.set(0,c.yaw,0),c.quat.setFromAxisAngle(On,c.yaw)},info:()=>l?`spacecraft · piloted`:`spacecraft · hovering`,pilot:{model:`spacecraft`,profile:mn,controlHints:`W/S thrust · A/D steer · Space/Shift climb/dive · Esc exit`,getWorldPos:e=>e.copy(t.position),getTransform:()=>c,setTransform:e=>{t.position.set(e.x,e.y,e.z),t.quaternion.copy(e.quat)},suspendAutonomy:()=>{l=!0},resumeAutonomy:()=>{l=!1,c.speed=0,c.vy=0}}}}if(e===`heli`){let t=In(),n=t.userData.mainRotor,s=t.userData.tailRotor,c=o.hover??11,l=o.orbit??8,u=Math.random()*Math.PI*2,d={x:r,y:i(r,a)+c,z:a,yaw:o.yaw??0,speed:0,vy:0,quat:new ue,medium:`air`,crossing:null,crossingT:0,_cx:r-l,_cz:a,_at:0},f=!1;return{kind:e,obj:t,x:r,z:a,get piloted(){return f},update(e,r){if(n.rotation.y+=26*e,s.rotation.x+=26*1.6*e,f)return;if(l>0){d._at+=e;let t=d._at*.14;d.x=d._cx+Math.cos(t)*l,d.z=d._cz+Math.sin(t)*l,d.yaw=Math.atan2(-Math.sin(t),Math.cos(t))}let a=i(d.x,d.z)+c+Math.sin((r||0)*.7+u)*.1;d.y+=(a-d.y)*Math.min(1,e*2),t.position.set(d.x,d.y,d.z),t.rotation.set(0,d.yaw,0),d.quat.setFromAxisAngle(On,d.yaw)},info:()=>f?`helicopter · piloted`:`helicopter · hovering`,pilot:{model:`spacecraft`,profile:mn,controlHints:`W/S thrust · A/D steer · Space/Shift climb/dive · Esc exit`,getWorldPos:e=>e.copy(t.position),getTransform:()=>d,setTransform:e=>{t.position.set(e.x,e.y,e.z),t.quaternion.copy(e.quat)},suspendAutonomy:()=>{f=!0},resumeAutonomy:()=>{f=!1,d.speed=0,d.vy=0}}}}return null}function p(e){return s[e]=(s[e]||0)+1,`${e} ${s[e]}`}function h(e,t,n,i={}){let s=f(e,t,n,i);if(!s)return null;s.opts=i,a.push(s),r.add(s.obj);let c={kind:e,label:p(e),getWorldPos:e=>e.copy(s.obj.position),active:()=>s.active!==!1,info:()=>s.info()};return s.pilot&&(c.pilot=s.pilot),s.followable=c,o.push(c),s}function g(e){if(!e)return!1;let t=a.indexOf(e);if(t<0)return!1;r.remove(e.obj),e.dispose&&e.dispose(),a.splice(t,1);let n=o.indexOf(e.followable);return n>=0&&o.splice(n,1),!0}function _(e,t,n=2.5){let r=null,i=n*n;for(let n of a){let a=n.obj.position.x-e,o=n.obj.position.z-t,s=a*a+o*o;s<i&&(i=s,r=n)}if(!r)return null;let o={kind:r.kind,x:r.x,z:r.z,opts:r.opts};return g(r),o}function v(e,t,n){for(let r=0;r<a.length;r++)a[r].update(e,t,n);typeof window<`u`&&(window.__placedLife=y())}function y(){let e={gull:0,boat:0,fish:0,cloud:0,person:0,atv:0,craft:0,total:a.length};for(let t of a)e[t.kind]++;return e}function b(){return o}function x(){return a.map(e=>({kind:e.kind,x:e.x,z:e.z,opts:e.opts}))}function S(){for(let e of[...a])g(e)}function C(e){if(S(),Array.isArray(e))for(let t of e.slice(0,2e3))!t||typeof t.kind!=`string`||!Number.isFinite(t.x)||!Number.isFinite(t.z)||h(t.kind,t.x,t.z,t.opts&&typeof t.opts==`object`?t.opts:{})}return{group:r,update:v,spawn:h,despawn:g,removeNear:_,getFollowables:b,snapshot:x,restore:C,clear:S,counts:y,get count(){return a.length}}}var Rn=new G(`#ffffff`),zn=`varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0); 
}`,Bn=`precision highp float;

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
}`,Vn=`precision highp float;

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
}`,Hn=`precision highp float;

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
}`,Un=`precision highp float;
varying vec2 vUv;
uniform sampler2D uSrc;
void main() { gl_FragColor = vec4(texture2D(uSrc, vUv).r, 0.0, 0.0, 0.0); }`,Wn=`precision highp float;
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
}`,Gn=`precision highp float;
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
}`,Kn=`precision highp float;
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
}`;function qn({renderer:e,N:t,cell:n,half:r,worldSize:a,seaY:o=0,FLOW:s,DAMP:c,MIN_DEPTH:l,KC:u,KE:d,KD:f,KADV:p,MAXD:m,readTerrain:h}){let g=e.getContext();if(!(g&&g.getExtension&&g.getExtension(`EXT_color_buffer_float`)))return typeof console<`u`&&console.warn(`[L87] EXT_color_buffer_float unavailable — GPU flow backend cannot run; staying on CPU.`),null;let _={type:ae,format:me,minFilter:T,magFilter:T,wrapS:O,wrapT:O,depthBuffer:!1,stencilBuffer:!1},y=[new x(t,t,_),new x(t,t,_)],S=[new x(t,t,_),new x(t,t,_)],C=[new x(t,t,_),new x(t,t,_)],w=new Float32Array(t*t*4),D=new b(w,t,t,me,ae);D.minFilter=T,D.magFilter=T,D.wrapS=D.wrapT=O;let k=new Float32Array(t*t),A=!1,j=1,N=!0,P=new I,F=new v(-1,1,1,-1,0,1),L=new V(new ce(2,2),null);L.frustumCulled=!1,P.add(L);let ee=new i(1/t,1/t),R=(e,t)=>new fe({vertexShader:zn,fragmentShader:e,uniforms:t}),ne=R(Bn,{uState:{value:null},uTerr:{value:null},uFlux:{value:null},uTexel:{value:ee},uN:{value:t},uDt:{value:0},uFlow:{value:s},uDamp:{value:c}}),re=R(Vn,{uState:{value:null},uTerr:{value:null},uFlux:{value:null},uTexel:{value:ee},uN:{value:t},uDt:{value:0},uSeaY:{value:o}}),ie=R(Hn,{uState:{value:null},uTerr:{value:null},uN:{value:t},uSeaY:{value:o},uRain:{value:0},uPourCount:{value:0},uPours:{value:Array.from({length:8},()=>new W)},uPourR:{value:new Float32Array(8)}}),z=R(Un,{uSrc:{value:D}}),oe=()=>({uState:{value:null},uTerr:{value:null},uFlux:{value:null},uTexel:{value:ee},uN:{value:t},uDt:{value:0},uCell:{value:n},uSeaY:{value:o},uKC:{value:u},uKE:{value:d},uKD:{value:f},uMaxD:{value:m},uMinDepth:{value:l},uErosK:{value:j}}),se=R(Wn,oe()),B=R(Gn,oe()),le=R(Kn,{uState:{value:null},uTerr:{value:null},uFlux:{value:null},uTexel:{value:ee},uN:{value:t},uDt:{value:0},uSeaY:{value:o},uKADV:{value:p}});function ue(t,n){L.material=t;let r=e.getRenderTarget();e.setRenderTarget(n),e.render(P,F),e.setRenderTarget(r)}let de=new G;function H(t){let n=e.getRenderTarget(),r=e.getClearAlpha();e.getClearColor(de),e.setRenderTarget(t),e.setClearColor(0,0),e.clear(!0,!1,!1),e.setClearColor(de,r),e.setRenderTarget(n)}function pe(){h(k);for(let e=0;e<t*t;e++)w[e*4]=k[e];D.needsUpdate=!0,ue(z,C[0])}function he(){H(y[0]),H(y[1]),H(S[0]),H(S[1])}he();let ge=t*t,_e=new Float32Array(ge*3),ve=new Float32Array(ge*2);for(let e=0;e<t;e++)for(let i=0;i<t;i++){let a=e*t+i;_e[a*3]=i*n-r,_e[a*3+1]=0,_e[a*3+2]=e*n-r,ve[a*2]=(i+.5)/t,ve[a*2+1]=(e+.5)/t}let ye=[];for(let e=0;e<t-1;e++)for(let n=0;n<t-1;n++){let r=e*t+n,i=e*t+n+1,a=(e+1)*t+n,o=(e+1)*t+n+1;ye.push(r,a,i,i,a,o)}let be=new M;be.setAttribute(`position`,new U(_e,3)),be.setAttribute(`aGridUv`,new U(ve,2)),be.setIndex(ye),be.boundingSphere=new te(new W(0,0,0),a);let xe={uStateTex:{value:y[0].texture},uTerrTex:{value:C[0].texture},uMinDepth:{value:l}},Se=new E({color:`#2f6f96`,roughness:.14,metalness:.45,transparent:!0,depthWrite:!1});Se.onBeforeCompile=e=>{e.uniforms.uStateTex=xe.uStateTex,e.uniforms.uTerrTex=xe.uTerrTex,e.uniforms.uMinDepth=xe.uMinDepth,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
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
  gl_FragColor.a *= clamp((vDepth - 0.012) * 7.0, 0.16, 0.86);`)},Se.customProgramCacheKey=()=>`lgr-flow-gpu`;let Ce=new V(be,Se);Ce.frustumCulled=!1,Ce.castShadow=!1,Ce.receiveShadow=!1,Ce.raycast=()=>{},Ce.renderOrder=3,Ce.visible=!1;function we(){xe.uStateTex.value=y[0].texture,xe.uTerrTex.value=C[0].texture}function Te(e){e=Math.min(e,1/30),(!A||N)&&(pe(),N=!1),ne.uniforms.uState.value=y[0].texture,ne.uniforms.uTerr.value=C[0].texture,ne.uniforms.uFlux.value=S[0].texture,ne.uniforms.uDt.value=e,ue(ne,S[1]),S.reverse(),re.uniforms.uState.value=y[0].texture,re.uniforms.uTerr.value=C[0].texture,re.uniforms.uFlux.value=S[0].texture,re.uniforms.uDt.value=e,ue(re,y[1]),y.reverse(),A&&(se.uniforms.uState.value=y[0].texture,se.uniforms.uTerr.value=C[0].texture,se.uniforms.uFlux.value=S[0].texture,se.uniforms.uDt.value=e,se.uniforms.uErosK.value=j,ue(se,C[1]),B.uniforms.uState.value=y[0].texture,B.uniforms.uTerr.value=C[0].texture,B.uniforms.uFlux.value=S[0].texture,B.uniforms.uDt.value=e,B.uniforms.uErosK.value=j,ue(B,y[1]),C.reverse(),y.reverse(),le.uniforms.uState.value=y[0].texture,le.uniforms.uTerr.value=C[0].texture,le.uniforms.uFlux.value=S[0].texture,le.uniforms.uDt.value=e,ue(le,y[1]),y.reverse()),we()}function K(){ie.uniforms.uState.value=y[0].texture,ie.uniforms.uTerr.value=C[0].texture,ue(ie,y[1]),y.reverse(),we()}function q(e,t,i=.5,a=1.6){(N||!A)&&(pe(),N=!1);let o=(e+r)/n,s=(t+r)/n,c=Math.max(1,a/n);ie.uniforms.uRain.value=0,ie.uniforms.uPourCount.value=1,ie.uniforms.uPours.value[0].set(o,s,i),ie.uniforms.uPourR.value[0]=c,K()}function Ee(e=.004){(N||!A)&&(pe(),N=!1),ie.uniforms.uPourCount.value=0,ie.uniforms.uRain.value=e,K()}function J(){he(),N=!0,we()}function De(e,t){A=!!e,t!=null&&(j=Math.max(0,t)),N=!0}let Y=new Float32Array(t*t*4);function Oe(n){return e.readRenderTargetPixels(n,0,0,t,t,Y),Y}function ke(){let e=Oe(y[0]),n=0;for(let r=0;r<t*t;r++)n+=e[r*4];return n}function Ae(e,i){let a=Math.round((e+r)/n),o=Math.round((i+r)/n);return a<0||a>=t||o<0||o>=t?0:Oe(y[0])[(o*t+a)*4]}function je(){let e=Oe(y[0]),n=0;for(let r=0;r<t*t;r++)n+=e[r*4+1];return n}function Me(){let e=Oe(y[0]),n=new Float32Array(t*t);for(let r=0;r<t*t;r++)n[r]=e[r*4];return n}function Ne(){let e=Oe(C[0]),n=new Float32Array(t*t);for(let r=0;r<t*t;r++)n[r]=e[r*4];return n}function Pe(e){Ce.visible=!!e}function Fe(){for(let e of y)e.dispose();for(let e of S)e.dispose();for(let e of C)e.dispose();D.dispose(),be.dispose(),Se.dispose(),L.geometry.dispose(),ne.dispose(),re.dispose(),ie.dispose(),z.dispose(),se.dispose(),B.dispose(),le.dispose()}return{mesh:Ce,step:Te,pourAt:q,rain:Ee,clear:J,totalWater:ke,cellAt:Ae,totalSediment:je,readW:Me,readTerr:Ne,setErosion:De,setVisible:Pe,dispose:Fe,get grid(){return t},get erosion(){return A}}}function Jn({worldHeightAt:e,applyErosion:t=null,syncErodedTerrain:n=null,worldSize:r=26,grid:i=96,seaY:a=0,renderer:o=null}={}){let s=i,c=new Float32Array(s*s),l=new Float32Array(s*s),u=new Float32Array(s*s),d=new Float32Array(s*s),f=new Float32Array(s*s),p=new Float32Array(s*s),h=new Float32Array(s*s),g=new Float32Array(s*s),_=new Float32Array(s*s),v=!1,y=1,b=r/(s-1),x=r/2,S=e||(()=>0),C=e=>e*b-x,w=e=>e*b-x,T=(e,t)=>t*s+e,D=26*b,O=.9,k=.006,A=.5,j=.25,N=.3,P=.006;function F(){for(let e=0;e<s;e++)for(let t=0;t<s;t++)p[T(t,e)]=S(C(t),w(e))}let I=`cpu`,L=null,ee=new Float32Array(s*s),R=0;function te(e){F();for(let t=0;t<s*s;t++)e[t]=p[t]}function ne(){return L||!o?L:(L=qn({renderer:o,N:s,cell:b,half:x,worldSize:r,seaY:a,FLOW:D,DAMP:O,MIN_DEPTH:k,KC:A,KE:j*3,KD:N*3,KADV:6,MAXD:P*3,readTerrain:te}),L&&W.add(L.mesh),L)}function re(e){if(e===`gpu`){if(ne(),!L)return typeof console<`u`&&console.info(`[L87] GPU backend unavailable (no renderer / no float RT) — staying on CPU (oracle).`),I=`cpu`,ie(),I;I=`gpu`,L.setErosion(v,y),v&&(te(ee),R=0)}else I=`cpu`;return ie(),I}function ie(){L&&L.setVisible(I===`gpu`),I===`gpu`?_e.visible=!1:ve()}let ae=new Float32Array(s*s);function z(){if(++R<20)return;R=0;let e=L.readTerr(),t=!1;for(let n=0;n<s*s;n++){let r=e[n]-ee[n];ae[n]=r,r!==0&&(t=!0),ee[n]=e[n]}t&&n(ae,s)}function oe(e){if(I===`gpu`&&L){L.step(e),v&&n&&z();return}e=Math.min(e,1/30),F();for(let t=0;t<s;t++)for(let n=0;n<s;n++){let r=T(n,t),i=p[r]+c[r],a=0,o=0,m=0,h=0;n>0&&(a=Math.max(0,l[r]*O+e*D*(i-(p[r-1]+c[r-1])))),n<s-1&&(o=Math.max(0,u[r]*O+e*D*(i-(p[r+1]+c[r+1])))),t>0&&(h=Math.max(0,f[r]*O+e*D*(i-(p[r-s]+c[r-s])))),t<s-1&&(m=Math.max(0,d[r]*O+e*D*(i-(p[r+s]+c[r+s]))));let g=(a+o+m+h)*e,_=g>1e-9?Math.min(1,c[r]/g):1;l[r]=a*_,u[r]=o*_,f[r]=h*_,d[r]=m*_}for(let t=0;t<s;t++)for(let n=0;n<s;n++){let r=T(n,t),i=0;n>0&&(i+=u[r-1]),n<s-1&&(i+=l[r+1]),t>0&&(i+=d[r-s]),t<s-1&&(i+=f[r+s]);let o=l[r]+u[r]+f[r]+d[r];c[r]+=e*(i-o),c[r]<0&&(c[r]=0),p[r]<a-.02&&(c[r]=0)}v&&t&&se(e),ve()}function se(e){_.fill(0);for(let t=0;t<s;t++)for(let n=0;n<s;n++){let r=T(n,t);if(c[r]<=k){if(h[r]>0){let t=Math.min(P,N*h[r]*e);_[r]+=t,h[r]-=t}continue}let i=(l[r]+u[r]+d[r]+f[r])/(c[r]+.02),a=n>0?p[r-1]:p[r],o=n<s-1?p[r+1]:p[r],m=t>0?p[r-s]:p[r],g=t<s-1?p[r+s]:p[r],v=Math.min(2,Math.hypot(o-a,g-m)/(2*b)),x=A*i*Math.max(.05,v)*y;if(x>h[r]){let t=Math.min(P,j*(x-h[r])*e);_[r]-=t,h[r]+=t}else{let t=Math.min(P,N*(h[r]-x)*e);_[r]+=t,h[r]-=t,h[r]<0&&(h[r]=0)}}g.set(h);for(let t=0;t<s;t++)for(let n=0;n<s;n++){let r=T(n,t),i=l[r]+u[r]+d[r]+f[r];if(i<=1e-9||h[r]<=1e-9)continue;let a=Math.min(h[r],h[r]*6*e);g[r]-=a,n>0&&(g[r-1]+=a*l[r]/i),n<s-1&&(g[r+1]+=a*u[r]/i),t>0&&(g[r-s]+=a*f[r]/i),t<s-1&&(g[r+s]+=a*d[r]/i)}h.set(g);for(let e=0;e<s*s;e++)h[e]<0&&(h[e]=0),p[e]<a-.02&&(h[e]=0);t(_,s)}function B(e,t){v=!!e,t!=null&&(y=Math.max(0,t)),e||h.fill(0),I===`gpu`&&L&&(L.setErosion(e,t),e&&(te(ee),R=0))}function ce(e,t,n=.5,r=1.6){if(I===`gpu`&&L)return L.pourAt(e,t,n,r);let i=(e+x)/b,a=(t+x)/b,o=Math.max(1,r/b),l=Math.max(0,Math.floor(i-o)),u=Math.min(s-1,Math.ceil(i+o)),d=Math.max(0,Math.floor(a-o)),f=Math.min(s-1,Math.ceil(a+o));for(let e=d;e<=f;e++)for(let t=l;t<=u;t++){let r=Math.hypot(t-i,e-a);r<=o&&(c[T(t,e)]+=n*(1-r/o))}}function le(e=.004){if(I===`gpu`&&L)return L.rain(e);F();for(let t=0;t<s*s;t++)p[t]>a&&(c[t]+=e)}function ue(){if(I===`gpu`&&L)return L.clear();c.fill(0),l.fill(0),u.fill(0),d.fill(0),f.fill(0),h.fill(0),ve()}function de(){if(I===`gpu`&&L)return L.totalWater();let e=0;for(let t=0;t<s*s;t++)e+=c[t];return e}function fe(e,t){if(I===`gpu`&&L)return L.cellAt(e,t);let n=Math.round((e+x)/b),r=Math.round((t+x)/b);return n<0||n>=s||r<0||r>=s?0:c[T(n,r)]}let H=new Float32Array(s*s*3),pe=new Float32Array(s*s);for(let e=0;e<s;e++)for(let t=0;t<s;t++){let n=T(t,e);H[n*3]=C(t),H[n*3+1]=-50,H[n*3+2]=w(e)}let me=[];for(let e=0;e<s-1;e++)for(let t=0;t<s-1;t++){let n=T(t,e),r=T(t+1,e),i=T(t,e+1),a=T(t+1,e+1);me.push(n,i,r,r,i,a)}let he=new M;he.setAttribute(`position`,new U(H,3)),he.setAttribute(`aDepth`,new U(pe,1)),he.setIndex(me),he.computeVertexNormals();let ge=new E({color:`#2f6f96`,roughness:.14,metalness:.45,transparent:!0,depthWrite:!1});ge.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
attribute float aDepth;
varying float vDepth;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
  vDepth = aDepth;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying float vDepth;`).replace(`#include <dithering_fragment>`,`#include <dithering_fragment>
  if (vDepth < 0.012) discard;
  gl_FragColor.a *= clamp((vDepth - 0.012) * 7.0, 0.16, 0.86);`)},ge.customProgramCacheKey=()=>`lgr-flow`;let _e=new V(he,ge);_e.frustumCulled=!1,_e.castShadow=!1,_e.receiveShadow=!1,_e.raycast=()=>{},_e.renderOrder=3;let W=new m;W.add(_e),W.raycast=()=>{};function ve(){let e=0;for(let t=0;t<s*s;t++){let n=c[t];pe[t]=n,H[t*3+1]=n>k?p[t]+n:-50,n>k&&e++}he.attributes.position.needsUpdate=!0,he.attributes.aDepth.needsUpdate=!0,_e.visible=e>0,typeof window<`u`&&(window.__flowWet=e)}ve();function ye(){if(I===`gpu`&&L)return L.totalSediment();let e=0;for(let t=0;t<s*s;t++)e+=h[t];return e}return{group:W,step:oe,pourAt:ce,rain:le,clear:ue,totalWater:de,cellAt:fe,setErosion:B,totalSediment:ye,setBackend:re,get backend(){return I},_debugReadW:()=>I===`gpu`&&L?L.readW():c.slice(),_debugReadTerr:()=>I===`gpu`&&L?L.readTerr():(F(),p.slice()),_debugReadS:()=>I===`gpu`&&L?L.totalSediment():ye(),_debugStepN:(e,t=1/60)=>{for(let n=0;n<e;n++)oe(t)},get erosion(){return v},get grid(){return s},get visible(){return _e.visible}}}function Yn({extent:e=26,count:t=2e3,seed:n=7,yLo:r=.4,yHi:i=7}={}){let a=rt((n^218462737)>>>0),o=e/2,s=new Float32Array(t*3),c=new Float32Array(t),l=new Float32Array(t);for(let e=0;e<t;e++)s[e*3]=(a()*2-1)*o,s[e*3+1]=r+a()*(i-r),s[e*3+2]=(a()*2-1)*o,c[e]=a()*Math.PI*2,l[e]=.6+a()*.8;let u=new M;u.setAttribute(`position`,new U(s,3)),u.setAttribute(`aPh`,new U(c,1)),u.setAttribute(`aSp`,new U(l,1)),u.setDrawRange(0,t);let d={uTime:{value:0},uWind:{value:0},uHalf:{value:o},uOpacity:{value:0},uColor:{value:new G(`#fff3d4`)},uPx:{value:2.2}},f=new fe({uniforms:d,transparent:!0,depthWrite:!1,depthTest:!0,blending:2,vertexShader:`
      uniform float uTime, uWind, uHalf, uPx;
      attribute float aPh, aSp;
      varying float vSp;
      void main() {
        vSp = aSp;
        vec3 p = position;
        float t = uTime * aSp;
        // gentle multi-axis bob + a steady down-wind drift on x; wrap inside the volume so the cloud persists.
        p.x += sin(t * 0.50 + aPh) * 0.55 + uWind * uTime * 0.30;
        p.y += sin(t * 0.35 + aPh * 1.7) * 0.22;
        p.z += cos(t * 0.45 + aPh) * 0.55;
        p.x = mod(p.x + uHalf, 2.0 * uHalf) - uHalf;
        p.z = mod(p.z + uHalf, 2.0 * uHalf) - uHalf;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = uPx * aSp * (300.0 / max(-mv.z, 0.1));   // perspective size attenuation
      }`,fragmentShader:`
      uniform vec3 uColor; uniform float uOpacity;
      varying float vSp;
      void main() {
        float d = length(gl_PointCoord - 0.5);
        float a = smoothstep(0.5, 0.0, d);                      // soft round falloff (no hard dots)
        if (a <= 0.0) discard;
        gl_FragColor = vec4(uColor, a * uOpacity);              // additive: rgb glows, scaled by softness × opacity
      }`}),p=new re(u,f);p.frustumCulled=!1,p.raycast=()=>{};let h=new m;h.add(p),h.userData.dispose=()=>{u.dispose(),f.dispose()};function g(e,n,r,{wind:i=0,qualityLevel:a=0}={}){d.uTime.value=n,d.uWind.value=.25+i;let o=r?1-r.windowGlow:1;d.uOpacity.value=.09*o,u.setDrawRange(0,a>=2?t>>1:t)}return{group:h,update:g,count:t}}var Xn=[{id:`place`,label:`Place`,icon:`✚`,key:`1`},{id:`sculpt`,label:`Sculpt`,icon:`⛰`,key:`2`},{id:`paint`,label:`Paint`,icon:`🎨`,key:`3`},{id:`scatter`,label:`Objects`,icon:`🌲`,key:`4`},{id:`flow`,label:`Water`,icon:`💧`,key:`5`},{id:`select`,label:`Select`,icon:`◳`,key:`6`}],Zn=[`tree`,`rock`,`tuft`],Qn=[`gull`,`boat`,`fish`,`cloud`,`person`,`atv`,`craft`],$n=(e,t,n)=>e<t?t:e>n?n:e;function er({world:e,catalog:t,inspector:n}={}){let r=`sculpt`,i=1,a=!1,o={radius:2.2,strength:.03,density:.6,dropN:1},s={biome:2,scatter:`tree`,entity:`gull`},c=null,l=!1;function u(e){return Xn.some(t=>t.id===e)&&(r=e),r}function d(e){let t=Xn.find(t=>t.key===e);return t&&(r=t.id),r}function f(){return i=-i,i}function p(e){return o.radius=$n(e,.8,6),o.radius}function m(e){return o.strength=$n(e,.01,.15),o.strength}function h(e){return o.density=$n(e,.1,1),o.density}function g(e){return o.dropN=[1,10,50].includes(e)?e:1,o.dropN}function _(e){return s.biome=e|0,s.biome}function v(e){return Zn.includes(e)&&(s.scatter=e),s.scatter}function y(e){return Qn.includes(e)&&(s.entity=e),s.entity}function b(e){let n=t&&t.get(e);return n?n.kind===`material`?_(n.defaults.colorIndex??s.biome):n.kind===`scatter`?v(n.defaults.geoKey):n.kind===`entity`?y(e.replace(`ent-`,``)):null:null}function x(t,n,r){let i=0;for(let a=0;a<r;a++){let r=Math.random()*Math.PI*2,a=Math.sqrt(Math.random())*o.radius;e.placeEntity(s.entity,t+Math.cos(r)*a,n+Math.sin(r)*a)&&i++}return i}function S(t,n,r){if(r<0){e.removeEntityNear(t,n,o.radius),c={x:t,z:n};return}if(o.dropN>1){l&&=(x(t,n,o.dropN),!1);return}(!c||Math.hypot(t-c.x,n-c.z)>=o.radius*.7)&&(e.placeEntity(s.entity,t,n),c={x:t,z:n})}function C(t,n,i){i!==0&&(r===`paint`?e.paintBiome(t,n,s.biome,o.radius):r===`scatter`?e.paintScatter(t,n,{type:s.scatter,density:o.density,radius:o.radius,erase:i<0}):r===`place`?S(t,n,i):r===`sculpt`?e.sculpt(t,n,i,o.radius,o.strength):r===`flow`&&i>0&&e.flowPourAt(t,n,void 0,o.radius))}let w=()=>r!==`select`&&r!==`flow`;function T(){w()&&e.snapshot(),l=!0,c=null}function E(){c=null}function D(e,t){return n?n.pickAt(e,t):null}function O(){return e.undo()}function k(){return e.snapshot()}function A(){return a=!a,e.setScatterHidden&&e.setScatterHidden(a),a}return{get tools(){return Xn},placeKinds:Qn,get tool(){return r},setTool:u,setToolByKey:d,get dir(){return i},get raise(){return i>0},toggleDir:f,brush:o,setRadius:p,setStrength:m,setDensity:h,setDropN:g,get selection(){return{...s}},get material(){return s.biome},get scatterType(){return s.scatter},get entity(){return s.entity},setMaterial:_,setScatter:v,setEntity:y,select:b,applyAt:C,beginStroke:T,endStroke:E,pickAt:D,dropEntities:x,undo:O,snapshot:k,get canUndo(){return e.canUndo},get scatterHidden(){return a},toggleHideScatter:A}}var tr=120;function nr(e,t){return e.length?e[Math.min(e.length-1,Math.max(0,Math.round(t/100*(e.length-1))))]:0}function rr({renderer:e}){let t=e.getContext(),n=!1,r=new Float32Array(tr),i=0,a=0,o=0,s=0,c=t.getExtension&&t.getExtension(`EXT_disjoint_timer_query_webgl2`),l=[],u=null,d=null,f=c&&c.TIME_ELAPSED_EXT,p=c&&c.GPU_DISJOINT_EXT,m=null,h=0,g=!1,_={fps:0,cpuMs:{p50:0,p95:0,p99:0},gpuMs:null,info:null,leak:!1,gpuTimer:!!c},v=0,y=typeof performance<`u`?performance.now():0;function b(){n||=(e.info.autoReset=!1,!0),o=performance.now();let r=e.info;_.info={calls:r.render.calls,tris:r.render.triangles,programs:r.programs?r.programs.length:0,geo:r.memory.geometries,tex:r.memory.textures},r.reset(),c&&!u&&(u=t.createQuery(),t.beginQuery(f,u))}function x(){if(r[a]=performance.now()-o+s,a=(a+1)%tr,i<tr&&i++,c&&u&&(t.endQuery(f),l.push(u),u=null),c&&l.length){let e=l[0],n=t.getQueryParameter(e,t.QUERY_RESULT_AVAILABLE),r=t.getParameter(p);(n||r)&&(l.shift(),n&&!r&&(d=t.getQueryParameter(e,t.QUERY_RESULT)/1e6),t.deleteQuery(e))}if(_.info){let e=_.info.geo+_.info.tex;m==null?m=e:e>m+200?(h++,h>300&&(g=!0)):h=Math.max(0,h-2)}v++;let e=performance.now();if(e-y>=1e3){let t=Array.from(r.subarray(0,i)).sort((e,t)=>e-t);_.fps=v,_.cpuMs={p50:+nr(t,50).toFixed(2),p95:+nr(t,95).toFixed(2),p99:+nr(t,99).toFixed(2)},_.gpuMs=d==null?null:+d.toFixed(2),_.leak=g,v=0,y=e,typeof window<`u`&&(window.__fps=_.fps,window.__perf=C())}}function S(){return i?nr(Array.from(r.subarray(0,i)).sort((e,t)=>e-t),95):0}function C(){return{fps:_.fps,cpuMs:_.cpuMs,gpuMs:_.gpuMs,info:_.info,leak:_.leak,gpuTimer:!!c}}return{frameStart:b,frameEnd:x,sample:C,p95Now:S,get gpuTimerAvailable(){return!!c},forceLoad(e=0){s=Math.max(0,e)}}}var ir=[{dpr:null,shadows:!0},{dpr:1.5,shadows:!0},{dpr:1,shadows:!0},{dpr:1,shadows:!1},{dpr:.75,shadows:!1}];function ar({profiler:e,apply:t,targetFps:n=30,strongFps:r=58}={}){let i=1e3/n,a=1e3/r,o=0,s=0,c=0,l=`full`;function u(){let n=e.p95Now();return n<=0||(n>i?(s++,c=0,s>=45&&o<ir.length-1&&(o++,s=0,l=`p95 ${n.toFixed(1)}ms > ${i.toFixed(0)}ms`,t(o,ir[o]),d(n))):n<a?(c++,s=0,c>=180&&o>0&&(o--,c=0,l=`p95 ${n.toFixed(1)}ms < ${a.toFixed(0)}ms (headroom)`,t(o,ir[o]),d(n))):(s=Math.max(0,s-1),c=Math.max(0,c-1))),o}function d(e){typeof window<`u`&&(window.__quality={level:o,of:ir.length-1,reason:l,p95:+(e||0).toFixed(1)})}return d(0),{update:u,get level(){return o},get reason(){return l},reset(){o=0,s=c=0,l=`full`,t(0,ir[0]),d(0)}}}function or(e){let t=rt(e>>>0),n=new Uint8Array(256);for(let e=0;e<256;e++)n[e]=e;for(let e=255;e>0;e--){let r=t()*(e+1)|0,i=n[e];n[e]=n[r],n[r]=i}let r=new Uint8Array(512);for(let e=0;e<512;e++)r[e]=n[e&255];let i=e=>e*e*e*(e*(e*6-15)+10),a=(e,t,n)=>e+(t-e)*n,o=(e,t,n)=>{let r=e&4?n:t,i=e&4?t:n;return(e&1?-r:r)+(e&2?-i:i)};return(e,t)=>{let n=Math.floor(e)&255,s=Math.floor(t)&255,c=e-Math.floor(e),l=t-Math.floor(t),u=i(c),d=i(l),f=r[r[n]+s],p=r[r[n]+s+1],m=r[r[n+1]+s],h=r[r[n+1]+s+1];return a(a(o(f,c,l),o(m,c-1,l),u),a(o(p,c,l-1),o(h,c-1,l-1),u),d)}}function sr(e,t,n,r,i,a){let o=.5,s=1,c=0,l=0;for(let u=0;u<r;u++)c+=o*e(t*s,n*s),l+=o,o*=a,s*=i;return c/l}function cr(e,t,n,r,i,a){let o=.5,s=1,c=0,l=0;for(let u=0;u<r;u++){let r=1-Math.abs(e(t*s,n*s));r*=r,c+=o*r,l+=o,o*=a,s*=i}return c/l}var lr=(e,t,n)=>(n=Math.max(0,Math.min(1,(n-e)/(t-e))),n*n*(3-2*n)),ur=[{key:`ocean`,color:`#2a5b7a`},{key:`beach`,color:`#d8c89a`},{key:`grassland`,color:`#6f9a4e`},{key:`forest`,color:`#3f6b3a`},{key:`hills`,color:`#8a8a55`},{key:`rock`,color:`#7d7468`},{key:`snow`,color:`#eef2f6`}],dr=Object.fromEntries(ur.map((e,t)=>[e.key,t]));function fr(e,t,n){if(e<n-.015)return dr.ocean;if(e<n+.02)return dr.beach;let r=(e-n)/(1-n);return r>.82?dr.snow:r>.6?dr.rock:r>.34?t>.45?dr.forest:dr.hills:t>.55?dr.forest:dr.grassland}var pr={valley:{freq:2.3,mtnMask:.3,mtnGain:.55,sea:.3,relief:7.5,warp:.9},archipelago:{freq:3.4,mtnMask:.18,mtnGain:.4,sea:.5,relief:6,warp:1.3},mountains:{freq:2,mtnMask:.62,mtnGain:.85,sea:.26,relief:11,warp:.8},plains:{freq:1.8,mtnMask:.12,mtnGain:.3,sea:.28,relief:4.5,warp:.7}},mr=Object.keys(pr);function hr({seed:e=1,size:t=160,preset:n=`valley`,params:r=null}={}){let i=r||pr[n]||pr.valley,a=or(e*2+1),o=or(e*5+9),s=or(e*7+13),c=or(e*3+5),l=new Float32Array(t*t),u=new Uint8Array(t*t),d=1/0,f=-1/0;for(let e=0;e<t;e++)for(let n=0;n<t;n++){let r=(n/t-.5)*i.freq,p=(e/t-.5)*i.freq,m=r+i.warp*sr(c,r+5.2,p+1.3,4,2,.5),h=p+i.warp*sr(c,r+9.7,p+4.1,4,2,.5),g=sr(a,m,h,6,2,.5)*.5+.5,_=lr(.45,.75,sr(o,r*.5,p*.5,3,2,.5)*.5+.5),v=cr(a,m*1.7+11,h*1.7+7,5,2,.5);g=g*(1-_*i.mtnMask)+v*(_*i.mtnMask*(.6+i.mtnGain));let y=n/t-.5,b=e/t-.5,x=Math.sqrt(y*y+b*b)*2;g-=lr(.62,1,x)*.55,g=Math.max(0,Math.min(1,g));let S=sr(s,r*.8+3,p*.8+8,4,2,.5)*.5+.5,C=e*t+n;l[C]=g,u[C]=fr(g,S,i.sea),g<d&&(d=g),g>f&&(f=g)}return{size:t,height:l,biome:u,sea:i.sea,relief:i.relief,minH:d,maxH:f,params:i,seed:e,preset:n}}var gr=ur.map(e=>new G(e.color)),_r=new G,vr=new W,yr=new W,br=new W;function xr(e,t,n,r,i,a,o,s){let{size:c,height:l,biome:u,sea:d,relief:f}=e,{cell:p,half:m,baseY:h}=t,g=e=>e*p-m,_=e=>e*p-m,v=e=>h+(e-d)*f,y=(e,t)=>{let n=l[t*c+e],r=0,i=0;e>0&&(r+=l[t*c+e-1],i++),e<c-1&&(r+=l[t*c+e+1],i++),t>0&&(r+=l[(t-1)*c+e],i++),t<c-1&&(r+=l[(t+1)*c+e],i++);let a=Math.max(0,(i?r/i:n)-n);return Math.min(.5,a*f*.8)},b=0,x=(e,t,n,c,l,u,d,f,p,m,h,g,_)=>{vr.set(c-e,l-t,u-n),yr.set(d-e,f-t,p-n),br.crossVectors(vr,yr).normalize();let v=[[e,t,n,h],[c,l,u,g],[d,f,p,_]];for(let[e,t,n,c]of v)r[b*3]=e,r[b*3+1]=t,r[b*3+2]=n,i[b*3]=br.x,i[b*3+1]=br.y,i[b*3+2]=br.z,s&&(a[b*3]=m.r,a[b*3+1]=m.g,a[b*3+2]=m.b),o&&(o[b]=c),b++};for(let e=n.j0;e<n.j1;e++)for(let t=n.i0;t<n.i1;t++){let n=g(t),r=g(t+1),i=_(e),a=_(e+1),o=v(l[e*c+t]),s=v(l[e*c+t+1]),d=v(l[(e+1)*c+t]),f=v(l[(e+1)*c+t+1]),p=y(t,e),m=y(t+1,e),h=y(t,e+1),b=y(t+1,e+1),S=gr[u[e*c+t]],C=gr[u[(e+1)*c+t+1]];x(n,o,i,n,d,a,r,s,i,_r.copy(S),p,h,m),x(r,s,i,n,d,a,r,f,a,_r.copy(C),m,h,b)}}function Sr(e,{worldSize:t=26,baseY:n=0,chunks:r=4}={}){let{size:i}=e,a=new m,o={cell:t/(i-1),half:t/2,baseY:n};a.userData.world=o;let s=Math.ceil((i-1)/r);for(let t=0;t<r;t++)for(let n=0;n<r;n++){let r=n*s,c=t*s,l=Math.min(r+s,i-1),u=Math.min(c+s,i-1);if(l<=r||u<=c)continue;let d={i0:r,j0:c,i1:l,j1:u},f=(l-r)*(u-c)*6,p=new Float32Array(f*3),m=new Float32Array(f*3),h=new Float32Array(f*3),g=new Float32Array(f);xr(e,o,d,p,m,h,g,!0);let _=new M;_.setAttribute(`position`,new U(p,3)),_.setAttribute(`normal`,new U(m,3)),_.setAttribute(`color`,new U(h,3)),_.setAttribute(`aAo`,new U(g,1)),_.computeBoundingSphere();let v=new V(_,nt(new E({vertexColors:!0,roughness:.92,metalness:0,flatShading:!0})));v.castShadow=!0,v.receiveShadow=!0,v.userData.chunk=d,a.add(v)}return a.userData.dispose=()=>a.traverse(e=>{e.isMesh&&(e.geometry.dispose(),e.material.dispose())}),a}function Cr(e,t,n,r=!1){let i=e.userData.world;for(let e of n){let n=e.geometry,a=n.attributes.aAo?n.attributes.aAo.array:null;xr(t,i,e.userData.chunk,n.attributes.position.array,n.attributes.normal.array,n.attributes.color.array,a,r),n.attributes.position.needsUpdate=!0,n.attributes.normal.needsUpdate=!0,a&&(n.attributes.aAo.needsUpdate=!0),r&&(n.attributes.color.needsUpdate=!0),n.computeBoundingSphere()}}var wr={beach:[{type:`rock`,density:.05,maxSlope:1.4}],grassland:[{type:`tree`,density:.1,maxSlope:.7},{type:`tuft`,density:.3,maxSlope:.9}],forest:[{type:`tree`,density:.62,maxSlope:.8},{type:`rock`,density:.03,maxSlope:1.2}],hills:[{type:`tree`,density:.14,maxSlope:.7},{type:`rock`,density:.16,maxSlope:1.6}],rock:[{type:`rock`,density:.22,maxSlope:2}]};function Tr({terrain:e,seed:t=1,worldSize:n=26,baseY:r=0,biomeKeys:i,density:a=1,max:o=9e3}={}){let{size:s,height:c,biome:l,sea:u,relief:d}=e,f=rt((t^97155048)>>>0),p=n/(s-1),m=n/2,h=e=>r+(e-u)*d,g=(e,t)=>{let n=Math.max(1,Math.min(s-2,e)),r=Math.max(1,Math.min(s-2,t)),i=(c[r*s+n+1]-c[r*s+n-1])*d/(2*p),a=(c[(r+1)*s+n]-c[(r-1)*s+n])*d/(2*p);return Math.hypot(i,a)},_={tree:[],rock:[],tuft:[]};for(let e=1;e<s-1;e+=2)for(let t=1;t<s-1;t+=2){let n=e*s+t,r=c[n];if(r<u+.005)continue;let d=wr[i[l[n]]];if(!d)continue;let v=g(t,e);for(let n of d){let i=f();if(v>n.maxSlope||i>n.density*a)continue;let s=_[n.type];if(s.length>=o)continue;let c=(f()-.5)*p*2,l=(f()-.5)*p*2,u=t*p-m+c,d=e*p-m+l;s.push({x:u,y:h(r),z:d,s:.7+f()*.6,r:f()*Math.PI*2,t:.82+f()*.36})}}return{placements:_,counts:{tree:_.tree.length,rock:_.rock.length,tuft:_.tuft.length}}}function Er(e,t){let n=new G(t),r=e.attributes.position.count,i=new Float32Array(r*3),a=new Float32Array(r),o=e.attributes.position.array;for(let e=0;e<r;e++)i[e*3]=n.r,i[e*3+1]=n.g,i[e*3+2]=n.b,a[e]=Math.min(.45,Math.max(0,.42*(1-o[e*3+1]/.55)));return e.setAttribute(`color`,new U(i,3)),e.setAttribute(`aAo`,new U(a,1)),e}function Dr(e){let t=0;for(let n of e)t+=n.attributes.position.count;let n=new Float32Array(t*3),r=new Float32Array(t*3),i=new Float32Array(t*3),a=new Float32Array(t),o=0;for(let t of e)n.set(t.attributes.position.array,o*3),r.set(t.attributes.normal.array,o*3),i.set(t.attributes.color.array,o*3),t.attributes.aAo&&a.set(t.attributes.aAo.array,o),o+=t.attributes.position.count;let s=new M;return s.setAttribute(`position`,new U(n,3)),s.setAttribute(`normal`,new U(r,3)),s.setAttribute(`color`,new U(i,3)),s.setAttribute(`aAo`,new U(a,1)),s}function Or(){return Dr([Er(new ve(.045,.06,.34,6).translate(0,.17,0).toNonIndexed(),`#5b3f28`),Er(new A(.3,.55,7).translate(0,.55,0).toNonIndexed(),`#3f7d3a`),Er(new A(.22,.42,7).translate(0,.85,0).toNonIndexed(),`#4f9046`)])}function kr(){let e=new s(.18,0).toNonIndexed(),t=e.attributes.position,n=rt(3098);for(let e=0;e<t.count;e++){let r=.78+n()*.5;t.setXYZ(e,t.getX(e)*r,t.getY(e)*r*.8,t.getZ(e)*r)}return e.computeVertexNormals(),Er(e,`#7d7468`)}function Ar(){return Er(new A(.06,.16,4).translate(0,.08,0).toNonIndexed(),`#6f9a4e`)}var jr=[`tree`,`rock`,`tuft`],Mr={tree:0,rock:-.05,tuft:0},Nr=new f,Pr=new ue,Fr=new W,Ir=new W,Lr=new W(0,1,0),Rr=new G;function zr(e){let t=new m;t.raycast=()=>{};let n={tree:Or(),rock:kr(),tuft:Ar()};for(let r of jr){let i=e[r]||(e[r]=[]),a=Math.max(i.length*2,512),o=nt(new E({vertexColors:!0,roughness:.9,metalness:0,flatShading:!0}),{sway:!0}),s=new p(n[r],o,a);s.count=i.length,s.castShadow=!0,s.receiveShadow=!1,s.frustumCulled=!0,s.raycast=()=>{},s.userData.type=r,s.instanceColor=new u(new Float32Array(a*3),3);for(let e=0;e<i.length;e++)Br(s,e,i[e],Mr[r]);s.instanceMatrix.needsUpdate=!0,s.instanceColor.needsUpdate=!0,t.add(s)}return t.userData.placements=e,t.userData.yoff=Mr,t.userData.dispose=()=>t.traverse(e=>{e.isInstancedMesh&&(e.geometry.dispose(),e.material.dispose())}),t}function Br(e,t,n,r){Fr.set(n.x,n.y+(r||0),n.z),Pr.setFromAxisAngle(Lr,n.r),Ir.setScalar(n.s),e.setMatrixAt(t,Nr.compose(Fr,Pr,Ir)),e.setColorAt(t,Rr.setScalar(n.t))}var Vr=(e,t)=>e.children.find(e=>e.isInstancedMesh&&e.userData.type===t);function Hr(e,t){let n=t.instanceMatrix.count*2,r=new p(t.geometry,t.material,n);return r.count=t.count,r.castShadow=!0,r.receiveShadow=!1,r.frustumCulled=!0,r.raycast=()=>{},r.userData.type=t.userData.type,r.instanceColor=new u(new Float32Array(n*3),3),r.instanceMatrix.array.set(t.instanceMatrix.array.subarray(0,t.count*16)),r.instanceColor.array.set(t.instanceColor.array.subarray(0,t.count*3)),r.instanceMatrix.needsUpdate=!0,r.instanceColor.needsUpdate=!0,e.remove(t),t.dispose(),e.add(r),r}function Ur(e,t,n,r,i,a,o,s){let c=Vr(e,t);if(!c)return!1;let l=e.userData.placements[t];l.length>=c.instanceMatrix.count&&(c=Hr(e,c));let u=l.length;return l.push({x:n,y:r,z:i,s:a,r:o,t:s}),Br(c,u,l[u],(e.userData.yoff||{})[t]||0),c.count=l.length,c.instanceMatrix.needsUpdate=!0,c.instanceColor.needsUpdate=!0,!0}function Wr(e,t,n,r,i){let a=t===`all`?jr:[t],o=i*i,s=0;for(let t of a){let i=Vr(e,t);if(!i)continue;let a=e.userData.placements[t],c=i.instanceMatrix.array,l=i.instanceColor&&i.instanceColor.array;for(let e=a.length-1;e>=0;e--){let t=a[e];if((t.x-n)*(t.x-n)+(t.z-r)*(t.z-r)>o)continue;let i=a.length-1;if(e!==i){a[e]=a[i];for(let t=0;t<16;t++)c[e*16+t]=c[i*16+t];if(l)for(let t=0;t<3;t++)l[e*3+t]=l[i*3+t]}a.pop(),s++}i.count=a.length,i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0)}return s}var Gr={tree:.85,rock:2,tuft:.95};function Kr(e,t,{worldSize:n=26,baseY:r=0}={}){let i=e.userData.placements,a=e.userData.yoff||{};if(!i)return;let{size:o,height:s,sea:c,relief:l}=t,u=n/(o-1),d=n/2,p=e=>e<0?0:e>=o?o-1:e,m=(e,t)=>s[p(Math.round((t+d)/u))*o+p(Math.round((e+d)/u))],h=(e,t)=>{let n=Math.max(1,Math.min(o-2,Math.round((e+d)/u))),r=Math.max(1,Math.min(o-2,Math.round((t+d)/u))),i=(s[r*o+n+1]-s[r*o+n-1])*l/(2*u),a=(s[(r+1)*o+n]-s[(r-1)*o+n])*l/(2*u);return Math.hypot(i,a)},g=new f,_=new ue,v=new W,y=new W,b=new W(0,1,0),x=new G;for(let t of e.children){let e=t.userData.type,n=i[e];if(!n||!t.isInstancedMesh)continue;let o=Gr[e]??1.5,s=t.instanceMatrix.count,u=Math.min(n.length,s);t.count=u;for(let i=0;i<u;i++){let s=n[i],u=m(s.x,s.z),d=u<c+.005||h(s.x,s.z)>o;v.set(s.x,r+(u-c)*l+(a[e]||0),s.z),_.setFromAxisAngle(b,s.r),y.setScalar(d?0:s.s),g.compose(v,_,y),t.setMatrixAt(i,g),t.setColorAt(i,x.setScalar(s.t))}t.instanceMatrix.needsUpdate=!0,t.instanceColor&&(t.instanceColor.needsUpdate=!0)}}function qr({terrain:e,seed:t,worldSize:n,baseY:r,biomeKeys:i,density:a,max:o}){let{placements:s,counts:c}=Tr({terrain:e,seed:t,worldSize:n,baseY:r,biomeKeys:i,density:a,max:o}),l=zr(s);return l.userData.counts=c,l}function Jr(e,{worldSize:t=26,baseY:n=0,maxLakes:r=3}={}){let{size:i,height:a,sea:o,relief:s,maxH:c}=e,l=Math.floor((i-1)/3),u=t/(i-1),d=t/2,f=(e,t)=>a[t*3*i+e*3],p=e=>e*3*u-d,m=e=>e*3*u-d,h=e=>e>o+.02,g=o+.55*Math.max(.001,c-o),_=[];for(let e=2;e<l-2;e++)for(let t=2;t<l-2;t++){let n=f(t,e);if(!h(n)||n>g)continue;let r=!0;for(let i=-1;i<=1&&r;i++)for(let a=-1;a<=1;a++)if((a||i)&&f(t+a,e+i)<n){r=!1;break}r&&_.push({gi:t,gj:e,h:n})}_.sort((e,t)=>e.h-t.h);let v=new Uint8Array(l*l),y=[];for(let e of _){if(y.length>=r)break;if(v[e.gj*l+e.gi])continue;let t=e.h+.045,i=[[e.gi,e.gj]],a=new Set,c=!0,d=0,h=0,g=0,_=[];for(;i.length;){let[e,n]=i.pop(),r=n*l+e;if(a.has(r))continue;if(a.add(r),e<=0||e>=l-1||n<=0||n>=l-1){c=!1;continue}let s=f(e,n);if(s<o){c=!1;continue}if(!(s>=t)){if(_.push(r),d+=e,h+=n,g++,g>520){c=!1;break}i.push([e+1,n],[e-1,n],[e,n+1],[e,n-1])}}if(!c||g<5)continue;for(let e of _)v[e]=1;let b=d/g,x=h/g,S=3*u,C=g*S*S,w=.82*Math.sqrt(C/Math.PI);y.push({cx:p(b),cz:m(x),y:n+(t-o)*s,radius:w,area:C})}return y}function Yr(e,{material:t}={}){let n=new m;n.raycast=()=>{};let r=t||new E({color:`#3f6f8c`,roughness:.08,metalness:.35,transparent:!0,opacity:.88});for(let t of e){let e=new V(new L(t.radius,28),r);e.rotation.x=-Math.PI/2,e.position.set(t.cx,t.y+.012,t.cz),e.receiveShadow=!1,e.castShadow=!1,e.raycast=()=>{},n.add(e)}return n.userData.dispose=()=>n.traverse(e=>{e.isMesh&&e.geometry.dispose()}),n.userData.count=e.length,n}function Xr(e,t={}){let n=Jr(e,t),r=Yr(n,t);return r.userData.lakes=n,r}function Zr(){let e=new Map,t={register(n){return!n||!n.id?t:(n.art=n.art||{},n.defaults=n.defaults||{},e.set(n.id,n),t)},registerAll(e){for(let n of e)t.register(n);return t},get(t){return e.get(t)},byKind(t){return[...e.values()].filter(e=>e.kind===t)},byGroup(t){return[...e.values()].filter(e=>e.group===t)},all(){return[...e.values()]},setArt(n,r){let i=e.get(n);return i&&(i.art={...i.art,...r}),t},get size(){return e.size}};return t}function Qr(e=Zr()){return ur.forEach((t,n)=>e.register({id:`mat-${t.key}`,label:$r(t.key),kind:`material`,group:`Terrain`,defaults:{colorIndex:n},art:{icon:t.color,placeholder:!0}})),e.registerAll([{id:`scatter-tree`,label:`Tree`,kind:`scatter`,group:`Vegetation`,defaults:{geoKey:`tree`,density:.4,maxSlope:.85},art:{icon:`🌲`,factory:null,placeholder:!0}},{id:`scatter-rock`,label:`Rock`,kind:`scatter`,group:`Rock`,defaults:{geoKey:`rock`,density:.2,maxSlope:2},art:{icon:`🪨`,factory:null,placeholder:!0}},{id:`scatter-tuft`,label:`Grass tuft`,kind:`scatter`,group:`Vegetation`,defaults:{geoKey:`tuft`,density:.3,maxSlope:.95},art:{icon:`🌱`,factory:null,placeholder:!0}}]),e.registerAll([{id:`ent-person`,label:`Person`,kind:`entity`,group:`Life`,defaults:{medium:`ground`},art:{icon:`🚶`,placeholder:!0}},{id:`ent-car`,label:`Car`,kind:`entity`,group:`Life`,defaults:{medium:`road`},art:{icon:`🚗`,placeholder:!0}},{id:`ent-boat`,label:`Boat`,kind:`entity`,group:`Life`,defaults:{medium:`water`},art:{icon:`⛵`,placeholder:!0}},{id:`ent-fish`,label:`Fish`,kind:`entity`,group:`Life`,defaults:{medium:`water`},art:{icon:`🐟`,placeholder:!0}},{id:`ent-gull`,label:`Gull`,kind:`entity`,group:`Life`,defaults:{medium:`air`},art:{icon:`🕊`,placeholder:!0}},{id:`ent-cloud`,label:`Cloud`,kind:`entity`,group:`Sky`,defaults:{medium:`air`},art:{icon:`☁️`,placeholder:!0}},{id:`ent-atv`,label:`ATV`,kind:`entity`,group:`Vehicles`,defaults:{medium:`ground`,pilotable:!0,roam:`all-terrain`,model:`ground`},art:{icon:`🛻`,placeholder:!0}},{id:`ent-craft`,label:`Spacecraft`,kind:`entity`,group:`Vehicles`,defaults:{medium:`air`,pilotable:!0,roam:`all-medium`,model:`spacecraft`},art:{icon:`🛸`,placeholder:!0}}]),e}var $r=e=>e.charAt(0).toUpperCase()+e.slice(1);function ei({scale:e=90}={}){let t=new he;t.scale.setScalar(e),t.frustumCulled=!1,t.raycast=()=>{},t.visible=!1;let n=t.material.uniforms;n.turbidity.value=2.2,n.rayleigh.value=1.3,n.mieCoefficient.value=.005,n.mieDirectionalG.value=.78,n.showSunDisc.value=0;function r(e){n.sunPosition.value.copy(e)}function i(e){e&&(e.turbidity!=null&&(n.turbidity.value=e.turbidity),e.rayleigh!=null&&(n.rayleigh.value=e.rayleigh),e.mie!=null&&(n.mieCoefficient.value=e.mie),e.mieG!=null&&(n.mieDirectionalG.value=e.mieG))}let a=null,o=null,s=null,c=null;function l(t){if(typeof document>`u`||!t)return null;a||(a=new H(t),o=new I,s=new he,s.scale.setScalar(e),o.add(s));let r=s.material.uniforms;return r.turbidity.value=n.turbidity.value,r.rayleigh.value=n.rayleigh.value,r.mieCoefficient.value=n.mieCoefficient.value,r.mieDirectionalG.value=n.mieDirectionalG.value,r.sunPosition.value.copy(n.sunPosition.value),c&&c.dispose(),c=a.fromScene(o),c.texture}return{mesh:t,setSun:r,setParams:i,buildEnv:l,get material(){return t.material}}}var ti=`attribute float aSize;
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
}`,ni=`precision highp float;

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
}`,ri={realistic:0,charm:0,pixel:2,vector:1},ii={realistic:1,charm:1,pixel:1.9,vector:1.2};function ai({seed:e=1517,count:t=340,spreadX:r=21,yLo:i=3,yHi:a=18,zBase:o=7.2}={}){let s=new m;s.raycast=()=>{};let c=rt(e>>>0),l=new Float32Array(t*3),u=new Float32Array(t),d=new Float32Array(t),f=new Float32Array(t),p=[];for(let e=0;e<t;e++){let t=(c()*2-1)*r,n=i+c()*(a-i),s=-o-c()*.7;l[e*3]=t,l[e*3+1]=n,l[e*3+2]=s;let m=.35+c()*.65;d[e]=m,u[e]=1.6+c()*2.8+(m>.85?2.2:0),f[e]=c()*Math.PI*2,m>.82&&p.push([t,n,s])}let h=new M;h.setAttribute(`position`,new U(l,3)),h.setAttribute(`aSize`,new U(u,1)),h.setAttribute(`aBright`,new U(d,1)),h.setAttribute(`aPhase`,new U(f,1));let _=new fe({vertexShader:ti,fragmentShader:ni,uniforms:{uTime:{value:0},uTwinkle:{value:1},uSizeScale:{value:1},uColor:{value:new G(`#eaf0ff`)},uNight:{value:0},uMode:{value:0}},transparent:!0,depthWrite:!1,blending:2,fog:!1,toneMapped:!1}),v=new re(h,_);v.raycast=()=>{},v.frustumCulled=!1,s.add(v);let y=[];if(p.length>6)for(let e=0;e<3;e++){let e=Math.floor(c()*p.length);for(let t=0;t<3;t++){let t=p[e],n=p[(e+1+Math.floor(c()*2))%p.length];y.push(t[0],t[1],t[2],n[0],n[1],n[2]),e=(e+1)%p.length}}let b=[[[0,2],[0,0]],[[0,0],[.7,0]],[[2.1,2],[1.4,2]],[[1.4,2],[1.4,0]],[[1.4,0],[2.1,0]],[[2.1,0],[2.1,1]],[[2.1,1],[1.7,1]],[[2.8,0],[2.8,2]],[[2.8,2],[3.5,2]],[[3.5,2],[3.5,1]],[[3.5,1],[2.8,1]],[[2.8,1],[3.6,0]]],x=-o-.4,S=.62;for(let[[e,t],[n,r]]of b)y.push(-3+e*S,12+t*S,x,-3+n*S,12+r*S,x);let w=new M;w.setAttribute(`position`,new g(y,3));let T=new C(w,new n({color:`#9fb6e8`,transparent:!0,opacity:0,depthWrite:!1,fog:!1,toneMapped:!1}));T.raycast=()=>{},T.frustumCulled=!1,s.add(T);let E=new ge(new be({map:oi(),transparent:!0,opacity:0,depthWrite:!1,blending:2,fog:!1,toneMapped:!1}));E.raycast=()=>{},E.scale.set(r*2.4,r*.95,1),E.position.set(2,12,-o-.7),E.material.rotation=-.5,E.renderOrder=-3,s.add(E);let D=-1;function O(e,t=`realistic`,n=0,r=!1){_.uniforms.uTime.value=n,_.uniforms.uTwinkle.value=+!r,_.uniforms.uNight.value=e;let i=ri[t]??0;i!==D&&(_.uniforms.uMode.value=i,D=i),_.uniforms.uSizeScale.value=ii[t]??1,T.material.opacity=e*.5,E.material.opacity=e*.32,s.visible=e>.001}return{group:s,update:O}}function oi(){let e=document.createElement(`canvas`);e.width=e.height=256;let t=e.getContext(`2d`),n=t.createRadialGradient(256/2,256/2,0,256/2,256/2,256/2);n.addColorStop(0,`rgba(150,170,230,0.5)`),n.addColorStop(.4,`rgba(120,130,200,0.22)`),n.addColorStop(1,`rgba(90,100,160,0)`),t.fillStyle=n,t.fillRect(0,0,256,256);let r=rt(20145);for(let e=0;e<7;e++){let e=40+r()*176,n=70+r()*116,i=14+r()*30,a=t.createRadialGradient(e,n,0,e,n,i);a.addColorStop(0,`rgba(200,210,255,0.18)`),a.addColorStop(1,`rgba(200,210,255,0)`),t.fillStyle=a,t.beginPath(),t.arc(e,n,i,0,Math.PI*2),t.fill()}let i=new de(e);return i.colorSpace=N,i}var si=Math.PI*2;function ci(e){let t=document.createElement(`canvas`);t.width=t.height=128;let n=t.getContext(`2d`),r=n.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return r.addColorStop(0,`#ffffff`),r.addColorStop(.34,`#fffaf0`),r.addColorStop(.66,e),r.addColorStop(.86,e),r.addColorStop(1,`rgba(255,255,255,0)`),n.fillStyle=r,n.beginPath(),n.arc(128/2,128/2,128/2,0,si),n.fill(),gi(t,!0)}function li(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);n.addColorStop(0,`#ffffff`),n.addColorStop(.4,`#eef3ff`),n.addColorStop(.82,`#c4cee6`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,128/2,0,si),t.fill(),t.globalAlpha=.14,t.fillStyle=`#8b97b4`;for(let[e,n,r]of[[54,50,9],[78,66,7],[60,82,5]])t.beginPath(),t.arc(e,n,r,0,si),t.fill();return gi(e,!0)}function ui(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`);t.translate(128/2,128/2),t.fillStyle=`rgba(255,210,120,0.9)`;for(let e=0;e<12;e++)t.rotate(si/12),t.beginPath(),t.moveTo(0,-28),t.lineTo(7,-54),t.lineTo(-7,-54),t.closePath(),t.fill();let n=t.createRadialGradient(0,0,0,0,0,32);return n.addColorStop(0,`#ffffff`),n.addColorStop(.4,`#fff1c8`),n.addColorStop(.8,`#ffb24a`),n.addColorStop(1,`#ff8a2a`),t.fillStyle=n,t.beginPath(),t.arc(0,0,32,0,si),t.fill(),gi(e,!0)}function di(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,46);n.addColorStop(0,`#ffffff`),n.addColorStop(.5,`#e6ecfb`),n.addColorStop(1,`#c2cce4`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,46,0,si),t.fill(),t.fillStyle=`#aab6d2`;for(let[e,n,r]of[[52,48,11],[80,62,8],[58,82,7],[40,66,5]])t.beginPath(),t.arc(e,n,r,0,si),t.fill();return gi(e,!0)}function fi(e,t,n){let r=document.createElement(`canvas`);r.width=r.height=144;let i=r.getContext(`2d`),a=17/2,o=18/2-.5;for(let r=0;r<18;r++)for(let s=0;s<18;s++){let c=Math.hypot(s-a,r-a);c>o||(i.fillStyle=c<o*.45?e:c<o*.78?t:n,i.fillRect(Math.round(s*8),Math.round(r*8),8,8))}return gi(r,!1)}function pi(e,t,n=!1){let r=document.createElement(`canvas`);r.width=r.height=128;let i=r.getContext(`2d`);if(i.fillStyle=t,i.beginPath(),i.arc(64,64,58,0,si),i.fill(),i.fillStyle=e,i.beginPath(),i.arc(64,64,50,0,si),i.fill(),n){i.globalAlpha=.5,i.fillStyle=t;for(let[e,t,n]of[[10,-12,10],[-16,6,7],[4,18,5]])i.beginPath(),i.arc(64+e,64+t,n,0,si),i.fill()}return gi(r,!0)}function mi(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return n.addColorStop(0,`rgba(255,255,255,0.9)`),n.addColorStop(.38,`rgba(255,255,255,0.3)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,128/2,0,si),t.fill(),gi(e,!0)}function hi(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2),r=`20,30,48`;return n.addColorStop(0,`rgba(${r},0)`),n.addColorStop(.42,`rgba(${r},0)`),n.addColorStop(.6,`rgba(${r},0.6)`),n.addColorStop(1,`rgba(${r},0)`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,128/2,0,si),t.fill(),gi(e,!0)}function gi(e,t){let n=new de(e);return n.colorSpace=N,t||(n.magFilter=T,n.minFilter=T),n}var _i=(e,t,n)=>{let r=Math.max(0,Math.min(1,(e-t)/(n-t)));return r*r*(3-2*r)};function vi({R:e=88,sunSize:t=6,moonSize:n=5.5}={}){let r=new m;r.raycast=()=>{};let i=(e,t)=>{let n=new ge(new be({map:e,transparent:!0,depthTest:!0,depthWrite:!1,fog:!1,toneMapped:!1,...t?{blending:2}:{}}));return n.raycast=()=>{},n},a={realistic:ci(`#ffcf8a`),charm:ui(),pixel:fi(`#fff6e0`,`#ffc24a`,`#ff8a2a`),vector:pi(`#ffd24a`,`#ff9a2e`)},o={realistic:li(),charm:di(),pixel:fi(`#ffffff`,`#cdd6ee`,`#9aa6c6`),vector:pi(`#e8eefc`,`#b9c6e4`,!0)},s=mi(),c=i(hi(),!1),l=i(s,!0),u=i(a.realistic),d=i(s,!0),f=i(o.realistic);r.add(c,l,u,d,f);let p=ai({});r.add(p.group);let h=typeof window<`u`&&window.matchMedia?window.matchMedia(`(prefers-reduced-motion: reduce)`):null,g={realistic:{sunGlow:3,sunGlowOp:.7,moonGlow:2.6,moonGlowOp:.5,sizeMul:1,sunHaloOp:.85},charm:{sunGlow:2.2,sunGlowOp:.55,moonGlow:2.1,moonGlowOp:.42,sizeMul:1.08,sunHaloOp:.7},pixel:{sunGlow:1.7,sunGlowOp:.4,moonGlow:1.7,moonGlowOp:.32,sizeMul:1,sunHaloOp:.6},vector:{sunGlow:1.4,sunGlowOp:.28,moonGlow:1.4,moonGlowOp:.22,sizeMul:1,sunHaloOp:.5}},_=`realistic`;function v(e){e===_||!g[e]||(_=e,u.material.map=a[e],u.material.needsUpdate=!0,f.material.map=o[e],f.material.needsUpdate=!0)}new G;let y=new G(`#fff3df`),b=new G(`#ffb060`),x=new G(`#ff6a2a`),S=new G(`#eef2ff`),C=new G(`#9fbcff`),w=new W(0,1,0),T=new W(0,-1,0),E=new W;function D(e,r,i,a,o=`realistic`,s=null){v(o);let m=g[_],E=i.sunArc,D=a?Math.min(1,(a.cloud||0)*.85+(a.fog||0)*.7):0,k=E.y,A=_i(k,-.04,.1)*(1-.7*D),j=1-_i(Math.abs(k),.02,.5),M=t*m.sizeMul*(1+.55*j);w.copy(E);let N=_===`realistic`;u.scale.setScalar(M),l.scale.setScalar(M*m.sunGlow),u.material.color.copy(y),N&&u.material.color.multiplyScalar(3),l.material.color.copy(b).lerp(x,j),u.material.opacity=A,l.material.opacity=A*m.sunGlowOp*(.7+.5*j)*(N?.5:1),c.scale.setScalar(M*1.7),c.material.opacity=N?0:A*(1-j)*m.sunHaloOp;let P=_i(-E.y,-.04,.1)*(1-.65*D),F=n*m.sizeMul;T.copy(E).negate(),f.scale.setScalar(F),d.scale.setScalar(F*m.moonGlow),f.material.color.copy(S),d.material.color.copy(C),f.material.opacity=P,d.material.opacity=P*m.moonGlowOp,O(s);let I=_i(-E.y,-.05,.18)*(1-.85*D);p.update(I,o,r,!!(h&&h.matches)),typeof window<`u`&&(window.__celestial={sun:u.position.toArray(),dir:w.toArray().map(e=>+e.toFixed(3)),sunVis:+A.toFixed(3),moonVis:+P.toFixed(3)})}function O(t){t&&(t.getWorldPosition(E),u.position.copy(E).addScaledVector(w,e),l.position.copy(u.position),c.position.copy(u.position),f.position.copy(E).addScaledVector(T,e),d.position.copy(f.position))}return{group:r,update:D,place:O}}var yi=`varying vec2 vUv;

void main() {
  
  
  
  vUv = uv;

  
  
  
  
  
  
  
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,bi=`precision highp float;

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
}`,xi=`precision highp float;

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
}`,Si=`precision highp float;

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
}`,Ci=`precision highp float;

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
}`,wi=`const float CA_STRENGTH   = 0.0030;  
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
uniform float     uWarmBal;       
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
    /* L105 NOON WARM-BALANCE — kill the residual blue sky-IBL cast at high sun (uWarmBal = midK·strength from the
       engine; 0 at golden hour → no-op there). Push R up / B down, then rescale to PRESERVE LUMA (a white-balance,
       NOT exposure). Inside the uGrade gate → pixel/toon/vector (uGrade=0) stay BYTE-IDENTICAL. */
    if (uWarmBal > 0.0) {
      vec3 warm = vec3(1.0 + 0.20 * uWarmBal, 1.0, 1.0 - 0.26 * uWarmBal);
      float l0 = dot(col, vec3(0.2126, 0.7152, 0.0722));
      vec3 cw = col * warm;
      float l1 = dot(cw, vec3(0.2126, 0.7152, 0.0722));
      col = clamp(cw * (l1 > 1e-4 ? l0 / l1 : 1.0), 0.0, 1.0);
    }

    /* L92 CINEMATIC GRADE DISCIPLINE — layered ON the SunRig time-of-day mood above to read "shot, not
       rendered". STATIC (not keyframed): the discipline is constant; the SunRig handles the daily mood.
       Beauty-tier only (this whole block is uGrade-gated) → pixel/vector/toon stay byte-identical.
       C++: rgb' = grade(rgb) — three per-pixel functions composed. */
    
    
    
    float lum = dot(col, vec3(0.2126, 0.7152, 0.0722));
    col += vec3(-0.018, 0.005, 0.028) * (1.0 - smoothstep(0.0, 0.28, lum));   
    col += vec3( 0.040, 0.015, -0.030) * smoothstep(0.62, 1.0, lum);          
    col = clamp(col, 0.0, 1.0);
    
    
    col = mix(vec3(0.02), vec3(0.98), col);
    col += (smoothstep(0.0, 1.0, col) - col) * 0.42;
    
    
    float mx = max(col.r, max(col.g, col.b)), mn = min(col.r, min(col.g, col.b)), sat = mx - mn;
    float lv = dot(col, vec3(0.2126, 0.7152, 0.0722));
    col = mix(vec3(lv), col, 1.0 + 0.22 * (1.0 - sat));
    col = clamp(col, 0.0, 1.0);

    /* L93 BEAUTY HERO POP — the L92 caveat: at midday the bright Preetham sun over-lights the pale building
       albedo, blowing it toward white and drowning the L92 varied albedo / AO / window grid. A soft-knee
       HIGHLIGHT SHOULDER pulls the blown top back into a readable bright range so the buildings POP (detail
       reads), + a tiny black-point lift for depth/separation. Beauty-tier ONLY (this whole block is uGrade-
       gated → pixel/vector/toon untouched). We do NOT touch uExposure (it feeds the pixel pre-pass). */
    float Lp = dot(col, vec3(0.2126, 0.7152, 0.0722));
    col *= 1.0 - smoothstep(0.50, 1.0, Lp) * 0.36;        
                                                          
                                                          
    col = (col - 0.44) * 1.14 + 0.44;                     
                                                          
    col = mix(vec3(0.030), vec3(1.0), col);              
    col = clamp(col, 0.0, 1.0);

    /* L93 HERO VIGNETTE — a soft EXTRA corner darken on the BEAUTY hero, AFTER the grade (display-referred)
       so it frames the eye on the city without muddying the tonemap. Subtle (~10% at the extreme corners) on
       top of the universal base vignette above. Beauty-tier ONLY (this block is uGrade-gated) → pixel/vector/
       toon keep their byte-identical base vignette. (r = the aspect-corrected radius computed up top.) */
    col *= 1.0 - smoothstep(0.62, 1.20, r) * 0.11;
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
}`,Ti=`const float DITHER = 0.55;   

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
}`,Ei=`precision highp float;

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
}`,Di=`precision highp float;

varying vec2 vUv;
uniform sampler2D uToon;   
uniform sampler2D uPixel;  
uniform float     uBlend;  

void main() {
  vec3 t = texture2D(uToon, vUv).rgb;
  vec3 p = texture2D(uPixel, vUv).rgb;
  gl_FragColor = vec4(mix(t, p, uBlend), 1.0);
}`,Oi=`varying vec2 vUv;
uniform sampler2D uScene;
uniform float     uThreshold;   

void main() {
  vec3 c = texture2D(uScene, vUv).rgb;
  float l = dot(c, vec3(0.2126, 0.7152, 0.0722));        
  float k = smoothstep(uThreshold, uThreshold + 0.22, l); 
  gl_FragColor = vec4(c * k, 1.0);
}`,ki=`varying vec2 vUv;
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
}`,Ai=`precision highp float;

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
}`,ji={"1-bit":{gridWidth:110,dither:.6,palette:[`#15120c`,`#c8b486`]},gb:{gridWidth:130,dither:.4,palette:[`#0f380f`,`#306230`,`#8bac0f`,`#9bbc0f`]},"8-bit":{gridWidth:160,dither:.55,palette:[`#140c1c`,`#442434`,`#30346d`,`#4e4a4e`,`#854c30`,`#346524`,`#d04648`,`#757161`,`#597dce`,`#d27d2c`,`#8595a1`,`#6daa2c`,`#d2aa99`,`#6dc2ca`,`#dad45e`,`#deeed6`]},"16-bit":{gridWidth:280,dither:.3,palette:`#000000.#222034.#45283c.#663931.#8f563b.#df7126.#d9a066.#eec39a.#fbf236.#99e550.#6abe30.#37946e.#4b692f.#524b24.#323c39.#3f3f74.#306082.#5b6ee1.#639bff.#5fcde4.#cbdbfc.#ffffff.#9badb7.#847e87.#696a6a.#595652.#76428a.#ac3232.#d95763.#d77bba.#8f974a.#8a6f30`.split(`.`)},modern:{gridWidth:460,dither:.6,palette:null}},Mi=[`gb`,`8-bit`,`16-bit`,`modern`],Ni={"ink-gold (day)":[`#16100A`,`#3A2F1E`,`#6B563A`,`#937B54`,`#B89968`],"ink-gold (night)":[`#0A0C16`,`#1C2236`,`#3A3A52`,`#5A5A78`,`#8A92B0`],"terminal (day)":[`#050805`,`#0E2912`,`#1E6B2F`,`#3CF06A`,`#FFB000`],"terminal (night)":[`#020604`,`#06180E`,`#10401E`,`#1E9040`,`#7FE0FF`],"neutral (photoreal)":[`#1B1B1E`,`#3D3A3A`,`#5E5750`,`#867C70`,`#A99C8A`,`#C8BCAB`,`#E3DCCF`,`#F5F1E8`],"cool (noir)":[`#0A0E14`,`#16202E`,`#243447`,`#3A536B`,`#5A7D96`,`#86A6BD`,`#B6CDDA`,`#E6EEF2`],"warm (sunset)":[`#190B0A`,`#3B150F`,`#6E2A17`,`#A8421F`,`#DB702F`,`#F2A23E`,`#F9CF76`,`#FDF0C4`],"vibrant (pop)":[`#1A1A2E`,`#E43F5A`,`#F9A826`,`#FFE05D`,`#2EC4B6`,`#3A86FF`,`#8338EC`,`#FFFFFF`],"mono (ink)":[`#0C0C0C`,`#2A2A2A`,`#474747`,`#666666`,`#8A8A8A`,`#B0B0B0`,`#D6D6D6`,`#F5F5F5`]};function Pi(e){let t=Math.max(e.length,1),n=new Float32Array(t*4);e.forEach((e,t)=>{let r=new G(e);n[t*4+0]=r.r,n[t*4+1]=r.g,n[t*4+2]=r.b,n[t*4+3]=1});let r=new b(n,t,1,me,ae);return r.minFilter=T,r.magFilter=T,r.needsUpdate=!0,r}function Fi(e,t){let n=[];for(let t=0;t+2<e.length;t+=3)n.push([e[t],e[t+1],e[t+2]]);if(n.length===0)return[`#000000`];let r=e=>{let t=[255,255,255],n=[0,0,0];for(let r of e)for(let e=0;e<3;e++)t[e]=Math.min(t[e],r[e]),n[e]=Math.max(n[e],r[e]);let r=[n[0]-t[0],n[1]-t[1],n[2]-t[2]],i=r[0]>=r[1]&&r[0]>=r[2]?0:r[1]>=r[2]?1:2;return{ax:i,range:r[i]}},i=[n];for(;i.length<t;){let e=-1,t=-1;if(i.forEach((n,i)=>{if(n.length>1){let{range:a}=r(n);a>t&&(t=a,e=i)}}),e<0)break;let n=i[e],{ax:a}=r(n);n.sort((e,t)=>e[a]-t[a]);let o=n.length>>1;i.splice(e,1,n.slice(0,o),n.slice(o))}return i.map(e=>{let t=[0,0,0];for(let n of e)for(let e=0;e<3;e++)t[e]+=n[e];return`#`+t.map(t=>Math.round(t/e.length)).map(e=>e.toString(16).padStart(2,`0`)).join(``)})}var Ii=220,Li={night:[`#0A0C16`,`#1C2236`,`#3A3A52`,`#5A5A78`,`#8A92B0`],dawn:[`#1A1008`,`#43281A`,`#7A4A30`,`#B07A4E`,`#E8A86A`],noon:[`#16100A`,`#3A2F1E`,`#6B563A`,`#937B54`,`#B89968`],dusk:[`#140A0A`,`#3E1E1A`,`#7A3828`,`#B85A36`,`#F0884A`]},Ri={night:[`#020604`,`#06180E`,`#10401E`,`#1E9040`,`#7FE0FF`],dawn:[`#060603`,`#1A2410`,`#3A6B22`,`#6CC040`,`#FFC060`],noon:[`#050805`,`#0E2912`,`#1E6B2F`,`#3CF06A`,`#FFB000`],dusk:[`#080402`,`#241408`,`#6B4A12`,`#E0A030`,`#FF7030`]};function zi(e){if(typeof document>`u`||document.getElementById(`lgr-nowebgl`))return;let t=document.createElement(`div`);t.id=`lgr-nowebgl`,t.style.cssText=`position:fixed;inset:0;z-index:99999;display:flex;align-items:center;justify-content:center;background:#0e1116;color:#cdd6e4;font:16px/1.6 system-ui,-apple-system,sans-serif;text-align:center;padding:2rem;`,t.innerHTML=`<div style="max-width:30rem"><div style="font-size:2.4rem;margin-bottom:1rem">🌊</div><h1 style="font-size:1.3rem;margin:0 0 .6rem;color:#fff;font-weight:600">This experience needs a modern browser</h1><p style="margin:0;color:#9aa6b8">`+e+`</p></div>`,document.body&&document.body.appendChild(t)}function Bi({demo:e=!1,citySeed:n=0,profileIndex:a=0}={}){let o;try{o=new ne({antialias:!0,preserveDrawingBuffer:!0})}catch(e){throw zi(`This experience needs WebGL2 — please open it in an up-to-date browser (Chrome, Edge, Firefox, or Safari on iOS 15+) with hardware acceleration enabled.`),e}o.shadowMap.enabled=!0,o.shadowMap.type=1,o.shadowMap.autoUpdate=!1,o.shadowMap.needsUpdate=!0;let s=!!(window.matchMedia&&window.matchMedia(`(pointer: coarse)`).matches),u=s?1.5:2;o.setPixelRatio(Math.min(window.devicePixelRatio,u)),o.setSize(window.innerWidth,window.innerHeight),o.setClearColor(920327,1),document.body.appendChild(o.domElement);let f=o.getDrawingBufferSize(new i),p=!1,g=!1,_=()=>{};o.domElement.addEventListener(`webglcontextlost`,e=>{e.preventDefault(),p=!0,typeof window<`u`&&(window.__contextLost=!0)},!1),o.domElement.addEventListener(`webglcontextrestored`,()=>{_(),p=!1,typeof window<`u`&&(window.__contextLost=!1)},!1);let y=new I;y.fog=new t(10465470,0);let S=new G(`#aeb6c0`),C=.062,D=new G(`#74508f`),k=new G,A=Le({aspect:window.innerWidth/window.innerHeight}),j=kt({t:.5}),M=o.getContext(),P=!!(M&&M.getExtension&&(M.getExtension(`EXT_color_buffer_float`)||M.getExtension(`EXT_color_buffer_half_float`)));!P&&typeof console<`u`&&console.info(`[L90 H1] No float colour buffer (EXT_color_buffer_float/half_float) — wave sim OFF, flat-sea fallback.`);let F={type:h,format:me,minFilter:T,magFilter:T,wrapS:O,wrapT:O,depthBuffer:!1,stencilBuffer:!1},L=P?[new x(256,256,F),new x(256,256,F),new x(256,256,F)]:null;if(L){for(let e of L)o.setRenderTarget(e),o.clear();o.setRenderTarget(null)}let ee=new b(new Uint8Array([0,0,0,255]),1,1,me);ee.needsUpdate=!0;let R=new I,te=new v(-1,1,1,-1,0,1),re=new fe({vertexShader:zn,fragmentShader:xi,uniforms:{uCurr:{value:null},uPrev:{value:null},uTexel:{value:new i(1/256,1/256)},uMouse:{value:new i(-1,-1)},uMouseStrength:{value:0},uC2:{value:.25},uDamping:{value:.992},uRainCount:{value:0},uRainDrops:{value:Array.from({length:8},()=>new W)},uWakeCount:{value:0},uWakeDrops:{value:Array.from({length:8},()=>new W)}}});R.add(new V(new ce(2,2),re));let ie=new x(f.x,f.y,{minFilter:l,magFilter:l,depthBuffer:!0,stencilBuffer:!1});function ae(e){let t=document.createElement(`canvas`);t.width=t.height=1024;let n=t.getContext(`2d`);n.fillStyle=e?`#0c1418`:`#15110b`,n.fillRect(0,0,1024,1024),n.strokeStyle=e?`rgba(120,150,170,0.22)`:`rgba(184,153,104,0.30)`,n.lineWidth=2;for(let e=0;e<=1024;e+=64)n.beginPath(),n.moveTo(e,0),n.lineTo(e,1024),n.stroke(),n.beginPath(),n.moveTo(0,e),n.lineTo(1024,e),n.stroke();e||(n.fillStyle=`#B89968`,n.font=`bold 360px Georgia, serif`,n.textAlign=`center`,n.textBaseline=`middle`,n.fillText(`LGR`,512,470),n.font=`600 64px ui-monospace, monospace`,n.fillText(`WEB · STUDIO`,512,720));let r=new de(t);return r.colorSpace=N,r}let z=new V(new ce(28,28),new d({map:ae(e)}));z.rotation.x=-Math.PI/2,z.position.y=-.35,y.add(z);let oe=new V(new ce(40,24),new fe({depthWrite:!1,vertexShader:yi,fragmentShader:bi,uniforms:{uTime:{value:0},uInk:{value:j.horizon},uGold:{value:j.sky},uFogColor:{value:k},uFogAmt:{value:0},uFogCharm:Ge}}));oe.position.set(0,3,-8),y.add(oe);let se=new fe({vertexShader:Si,fragmentShader:Ci,uniforms:{uHeight:{value:P?null:ee},uScene:{value:ie.texture},uTexel:{value:new i(1/256,1/256)},uResolution:{value:new i(f.x,f.y)},uDisplace:{value:.42},uNormalStrength:{value:22},uRefractStrength:{value:.06},uChromaScale:{value:1},uNormalMatrix:{value:new c},uLightDir:{value:j.sunDir},uInk:{value:new G(`#2A2218`)},uGold:{value:new G(`#B89968`)},uVector:Re,uVecWater:{value:new G(`#1fb8d8`)},uVecTint:{value:Be}}}),B=new V(new ce(28,28,255,255),se);B.rotation.x=-Math.PI/2,B.updateMatrixWorld(!0),se.uniforms.uNormalMatrix.value.getNormalMatrix(B.matrixWorld),y.add(B);let le={value:0},ue=nn({windowGlow:le}),H=xt({seed:n,profileIndex:a,landmarkFactory:ue,windowGlow:le});y.add(H.group);let pe=Pt({plinthTop:.3,extent:H.extent,profile:H.state.profile});y.add(pe.group);let he=Gt({extent:H.extent,waterSize:28,plinthTop:.3});y.add(he.group),re.uniforms.uWakeDrops.value=he.wakeDrops;let U=an({extent:H.extent});y.add(U.group),re.uniforms.uRainDrops.value=U.rainDrops;let ge=sn({extent:H.extent});y.add(ge.group);let _e=[pe,he,ge],ve=un({rig:A,getCamera:()=>A.camera,sources:_e}),ye=vi();y.add(ye.group);let be=ei({scale:90});y.add(be.mesh),y.environmentIntensity=.32;let xe=!1;function Se(e){let t=e&&j.sunArc.y>-.04;t!==xe&&(xe=t,be.mesh.visible=t,oe.visible=!t)}let Ce=null,we=-1;_=()=>{Ce=null,we=-1,o.shadowMap.needsUpdate=!0};function Te(){let e=Math.floor(j.t%1*4)%4;return(e!==we||!Ce)&&(we=e,Ce=be.buildEnv(o)),Ce}let K=null,q=null,Ee=null,J=null,De=!1,Y=1234,Oe=`valley`,ke=ur.map(e=>e.key),Ae=new E({color:`#3f6f8c`,roughness:.07,metalness:.4,transparent:!0,opacity:.9}),je=()=>[H.group,pe.group,he.group],Me=()=>[K,q,Ee].filter(Boolean);function Ne(){for(let e of Me())y.remove(e),e.userData.dispose?.();let e=hr({seed:Y,size:160,preset:Oe});J=e,K=Sr(e,{worldSize:26,baseY:0,chunks:6}),q=qr({terrain:e,seed:Y,worldSize:26,baseY:0,biomeKeys:ke}),Ee=Xr(e,{worldSize:26,baseY:0,maxLakes:3,material:Ae});for(let e of Me())e.visible=De,y.add(e);Ie!==void 0&&Ie&&Ie.clear(),X!==void 0&&X&&X.clear(),typeof window<`u`&&(window.__world={seed:Y,preset:Oe,active:De,chunks:K.children.length,scatter:q.userData.counts,lakes:Ee.userData.count})}let Pe=e=>{for(let t of Me())t.visible=e};function Fe(e,t){if(!J)return 0;let{size:n,height:r,sea:i,relief:a}=J,o=26/(n-1),s=Math.round((e+13)/o),c=Math.round((t+13)/o),l=s<0?0:s>=n?n-1:s;return(r[(c<0?0:c>=n?n-1:c)*n+l]-i)*a}let Ie=Ln({heightAt:Fe,seaSurfaceY:0,waterY:.06});Ie.group.visible=!1,y.add(Ie.group),_e.push(Ie);let qe=new m;qe.raycast=()=>{},y.add(qe);let Je=null;function Ye(e,t=0,n=0,r={}){return Je&&=(qe.remove(Je.obj),Ie.despawn(Je),null),Je=Ie.spawn(e,t,n,r),Je&&(Ie.group.remove(Je.obj),qe.add(Je.obj)),Je?Je.followable:null}let Xe=0;function Ze(e,t){if(!J||!K)return;let{size:n,height:r,relief:i}=J,a=26/(n-1),o=26/(t-1),s=i>1e-6?1/i:0,c=!1;for(let i=0;i<t;i++)for(let l=0;l<t;l++){let u=e[i*t+l];if(u===0)continue;c=!0;let d=u*s,f=l*o/a,p=i*o/a,m=Math.max(0,Math.round(f-1)),h=Math.min(n-1,Math.round(f+1)),g=Math.max(0,Math.round(p-1)),_=Math.min(n-1,Math.round(p+1));for(let e=g;e<=_;e++)for(let t=m;t<=h;t++){let i=e*n+t,a=r[i]+d;r[i]=a<0?0:a>1?1:a}}c&&(Xe++,Xe%8==0&&Cr(K,J,K.children),Xe%24==0&&q&&Kr(q,J,{worldSize:26,baseY:0}))}function Qe(e,t){if(!J||!K)return;let{size:n,height:r,relief:i}=J,a=i>1e-6?1/i:0,o=(t-1)/(n-1),s=!1;for(let i=0;i<n;i++){let c=i*o,l=Math.floor(c),u=c-l,d=Math.min(t-1,l+1);for(let c=0;c<n;c++){let f=c*o,p=Math.floor(f),m=f-p,h=Math.min(t-1,p+1),g=e[l*t+p],_=e[l*t+h],v=e[d*t+p],y=e[d*t+h],b=(g*(1-m)+_*m)*(1-u)+(v*(1-m)+y*m)*u;if(b!==0){s=!0;let e=i*n+c,t=r[e]+b*a;r[e]=t<0?0:t>1?1:t}}}s&&(Cr(K,J,K.children),q&&Kr(q,J,{worldSize:26,baseY:0}))}let X=Jn({worldHeightAt:Fe,applyErosion:Ze,syncErodedTerrain:Qe,worldSize:26,grid:96,seaY:0,renderer:o});X.group.visible=!1,y.add(X.group);let Z=Yn({extent:26,count:s?500:2e3});Z.group.visible=!1,y.add(Z.group);let nt=null,rt=!1,it=new Set;function at(){!J||!Ee||(y.remove(Ee),Ee.userData.dispose?.(),Ee=Xr(J,{worldSize:26,baseY:0,maxLakes:3,material:Ae}),Ee.visible=De&&!rt,y.add(Ee),window.__world&&(window.__world.lakes=Ee.userData.count))}function ot(){at(),q&&Kr(q,J,{worldSize:26,baseY:0})}function st(e,t,n=1,r=2.2,i=.05){if(!J||!K)return;let a=J.size,o=26/(a-1),s=(e+13)/o,c=(t+13)/o,l=r/o,u=Math.max(0,Math.floor(s-l)),d=Math.min(a-1,Math.ceil(s+l)),f=Math.max(0,Math.floor(c-l)),p=Math.min(a-1,Math.ceil(c+l)),m=J.height,h=l*.5*2*(l*.5);for(let e=f;e<=p;e++)for(let t=u;t<=d;t++){let r=(t-s)*(t-s)+(e-c)*(e-c);if(r>l*l)continue;let o=m[e*a+t]+n*i*Math.exp(-r/h);m[e*a+t]=o<0?0:o>1?1:o}it.clear();for(let e of K.children){let t=e.userData.chunk;t&&t.i0<=d&&t.i1>=u-1&&t.j0<=p&&t.j1>=f-1&&it.add(e)}Cr(K,J,it),nt&&clearTimeout(nt),nt=setTimeout(ot,140)}function ct(e,t,n,r=2.2){if(!J||!K||n==null)return;let i=J.size,a=26/(i-1),o=(e+13)/a,s=(t+13)/a,c=r/a,l=c*c,u=Math.max(0,Math.floor(o-c)),d=Math.min(i-1,Math.ceil(o+c)),f=Math.max(0,Math.floor(s-c)),p=Math.min(i-1,Math.ceil(s+c)),m=J.biome;for(let e=f;e<=p;e++)for(let t=u;t<=d;t++)(t-o)*(t-o)+(e-s)*(e-s)<=l&&(m[e*i+t]=n);it.clear();for(let e of K.children){let t=e.userData.chunk;t&&t.i0<=d&&t.i1>=u-1&&t.j0<=p&&t.j1>=f-1&&it.add(e)}Cr(K,J,it,!0)}let lt=[`tree`,`rock`,`tuft`];function ut(e,t,{type:n=`tree`,density:r=.5,radius:i=2.2,erase:a=!1}={}){if(!J||!q)return 0;if(a)return Wr(q,n||`all`,e,t,i);let o=J.size,s=26/(o-1),c=J.height,l=J.sea,u=J.relief,d=e=>e<0?0:e>=o?o-1:e,f=(e,t)=>c[d(Math.round((t+13)/s))*o+d(Math.round((e+13)/s))],p=(e,t)=>{let n=Math.max(1,Math.min(o-2,Math.round((e+13)/s))),r=Math.max(1,Math.min(o-2,Math.round((t+13)/s))),i=(c[r*o+n+1]-c[r*o+n-1])*u/(2*s),a=(c[(r+1)*o+n]-c[(r-1)*o+n])*u/(2*s);return Math.hypot(i,a)},m=Gr[n]??1.2,h=Math.max(1,Math.round((r||.5)*6)),g=0;for(let r=0;r<h;r++){let r=Math.random()*Math.PI*2,a=Math.sqrt(Math.random())*i,o=e+Math.cos(r)*a,s=t+Math.sin(r)*a,c=f(o,s);if(c<l+.005||p(o,s)>m)continue;let d=(c-l)*u;Ur(q,n,o,d,s,.7+Math.random()*.6,Math.random()*Math.PI*2,.82+Math.random()*.36)&&g++}if(window.__world&&q.userData.counts)for(let e of lt)q.userData.counts[e]=(q.userData.placements[e]||[]).length;return g}let dt=[];function ft(){if(!q)return null;let e=q.userData.placements,t={};for(let n of lt)t[n]=(e[n]||[]).map(e=>({...e}));return t}function pt(){J&&(dt.push({h:J.height.slice(),b:J.biome.slice(),sc:ft(),pl:Ie.snapshot()}),dt.length>12&&dt.shift())}function mt(){if(!J||!dt.length)return!1;let e=dt.pop();if(J.height.set(e.h),J.biome.set(e.b),e.sc&&q){let t=q.userData.placements;for(let n of lt)t[n]=(e.sc[n]||[]).map(e=>({...e}))}return e.pl&&Ie.restore(e.pl),Cr(K,J,K.children,!0),ot(),!0}let ht=new Set([`boat`,`fish`]),gt=new Set([`person`,`atv`]);function _t(e,t,n){if(!J)return null;let r=Fe(t,n)<0;return ht.has(e)&&!r||gt.has(e)&&r?null:Ie.spawn(e,t,n)}function vt(e,t,n=2.5){return Ie.removeNear(e,t,n)}function yt(e){let t=``,n=32768;for(let r=0;r<e.length;r+=n)t+=String.fromCharCode.apply(null,e.subarray(r,Math.min(r+n,e.length)));return btoa(t)}function bt(e){let t=atob(e),n=new Uint8Array(t.length);for(let e=0;e<t.length;e++)n[e]=t.charCodeAt(e);return n}let St=e=>yt(new Uint8Array(e.buffer,e.byteOffset,e.byteLength)),Ct=e=>yt(e);function wt(){let e=q?q.userData.placements:{},t={};for(let n of lt)t[n]=(e[n]||[]).map(e=>({...e}));return t}function Tt(){return J?{v:1,seed:Y,preset:Oe,size:J.size,height:St(J.height),biome:Ct(J.biome),scatter:wt(),entities:Ie.snapshot()}:null}function Et(){if(!J)return null;let e=hr({seed:Y,size:160,preset:Oe}),t=J.height,n=J.biome,r=[],i=[];for(let n=0;n<t.length;n++)Math.abs(t[n]-e.height[n])>1e-6&&r.push(n,Math.round(t[n]*1e4)/1e4);for(let t=0;t<n.length;t++)n[t]!==e.biome[t]&&i.push(t,n[t]);return{v:1,c:1,seed:Y,preset:Oe,hd:r,bd:i,entities:Ie.snapshot()}}function Dt(e){q&&(y.remove(q),q.userData.dispose?.()),q=zr(e||{tree:[],rock:[],tuft:[]}),q.userData.counts=lt.reduce((e,t)=>(e[t]=(q.userData.placements[t]||[]).length,e),{}),q.visible=De,y.add(q)}function Ot(e){if(!e||e.v!==1)return!1;let t=25600;if(e.height!=null||e.biome!=null){if(typeof e.height!=`string`||typeof e.biome!=`string`)return!1;let n,r;try{n=bt(e.height),r=bt(e.biome)}catch{return!1}if(n.byteLength%4!=0||n.byteLength>>2!=t||r.length<t)return!1;let i=new Float32Array(n.buffer,n.byteOffset,n.byteLength>>2);for(let e=0;e<i.length;e++)if(!Number.isFinite(i[e]))return!1}if(e.hd!=null&&!Array.isArray(e.hd)||e.bd!=null&&!Array.isArray(e.bd))return!1;if(Array.isArray(e.hd))for(let n=0;n<e.hd.length;n+=2){let r=e.hd[n];if(!Number.isInteger(r)||r<0||r>=t||!Number.isFinite(e.hd[n+1]))return!1}if(Array.isArray(e.bd))for(let n=0;n<e.bd.length;n+=2){let r=e.bd[n];if(!Number.isInteger(r)||r<0||r>=t)return!1}Y=e.seed|0,Oe=mr.includes(e.preset)?e.preset:Oe,dt.length=0,Ne(),De=!0,Pe(!0),Ie.group.visible=!0,X.group.visible=!0,Z.group.visible=!0;for(let e of je())e.visible=!1;window.__world&&(window.__world.active=!0);let n=e=>e<0?0:e>1?1:e,r=ur.length;if(e.height&&e.biome){let t=bt(e.height),i=new Float32Array(t.buffer,t.byteOffset,t.byteLength>>2);for(let e=0;e<i.length;e++)J.height[e]=n(i[e]);let a=bt(e.biome);for(let e=0;e<J.biome.length;e++)J.biome[e]=Math.min(r-1,a[e]|0)}else if(e.hd||e.bd){let t=e.hd||[],i=e.bd||[];for(let e=0;e<t.length;e+=2)J.height[t[e]]=n(t[e+1]);for(let e=0;e<i.length;e+=2)J.biome[i[e]]=Math.min(r-1,Math.max(0,i[e+1]|0))}return Cr(K,J,K.children,!0),e.scatter&&Dt(e.scatter),at(),q&&Kr(q,J,{worldSize:26,baseY:0}),Ie.restore(e.entities),window.__world&&(window.__world.scatter=q.userData.counts,window.__world.seed=Y,window.__world.preset=Oe),!0}let At={enter(){K||Ne(),De=!0,Pe(!0),Ie.group.visible=!0,X.group.visible=!0,Z.group.visible=!0;for(let e of je())e.visible=!1;window.__world&&(window.__world.active=!0)},exit(){rt=!1,De=!1,Pe(!1),Ie.group.visible=!1,X.group.visible=!1,Z.group.visible=!1;for(let e of je())e.visible=!0;window.__world&&(window.__world.active=!1)},setEditing(e){return rt=!!e,B.visible=De&&!rt,Ee&&(Ee.visible=De&&!rt),X.group.visible=De&&!rt,!rt&&De&&at(),rt},get editing(){return rt},get waterHidden(){return rt&&!B.visible},reroll(){return Y=Math.random()*1e9|0,dt.length=0,Ne(),At.enter(),Y},reset(){return dt.length=0,Ne(),At.enter(),Y},setPreset(e){return mr.includes(e)&&(Oe=e,dt.length=0,Ne(),At.enter()),Oe},sculpt:st,paintBiome:ct,paintScatter:ut,repoolWater:at,snapshot:pt,undo:mt,placeEntity:_t,removeEntityNear:vt,heightAt:Fe,serialize:Tt,serializeCompact:Et,deserialize:Ot,flowPourAt:(e,t,n,r)=>X.pourAt(e,t,n,r),flowRain:e=>X.rain(e),flowClear:()=>X.clear(),get flowTotal(){return X.totalWater()},flowAt:(e,t)=>X.cellAt(e,t),flowErosion:(e,t)=>X.setErosion(e,t),get flowErosionOn(){return X.erosion},get flowSediment(){return X.totalSediment()},setSimBackend:e=>X.setBackend(e),get simBackend(){return X.backend},_flowReadW:()=>X._debugReadW(),_flowReadTerr:()=>X._debugReadTerr(),_flowStepN:(e,t)=>X._debugStepN(e,t),get terrainGroup(){return K},get biomes(){return ur},get scatterCounts(){return q?q.userData.placements&&lt.reduce((e,t)=>(e[t]=(q.userData.placements[t]||[]).length,e),{}):null},get placedCounts(){return Ie.counts()},setScatterHidden(e){q&&(q.visible=!e)},get placedLife(){return Ie},get canUndo(){return dt.length>0},get active(){return De},get seed(){return Y},get preset(){return Oe},get presets(){return mr}},jt=Qr(),Mt=er({world:At,catalog:jt,inspector:ve});function Nt(e,t){return Fe(e,t)<0?0:-999}let Ft=Sn({rig:A,world:{heightAt:Fe,waterHeightAt:Nt}});H.group.remove(H.key),y.add(H.key),H.key.castShadow=!0,H.key.shadow.mapSize.set(2048,2048),H.key.shadow.bias=-18e-5,H.key.shadow.normalBias=.028,y.add(H.key.target);function It(){let e=H.key.shadow.camera,t=H.extent+4.5;e.left=-t,e.right=t,e.top=t,e.bottom=-t,e.near=1,e.far=48,e.updateProjectionMatrix(),o.shadowMap.needsUpdate=!0}It();let Lt=new r(f.x,f.y),Rt=new x(f.x,f.y,{minFilter:l,magFilter:l,depthBuffer:!0,stencilBuffer:!1,depthTexture:Lt}),zt=new x(f.x,f.y,{minFilter:l,magFilter:l,depthBuffer:!1,stencilBuffer:!1}),Bt=new x(f.x,f.y,{minFilter:l,magFilter:l,depthBuffer:!0,stencilBuffer:!1,samples:4}),Vt=new x(f.x,f.y,{minFilter:l,magFilter:l,depthBuffer:!1,stencilBuffer:!1}),Ht=new x(f.x,f.y,{minFilter:l,magFilter:l,depthBuffer:!1,stencilBuffer:!1}),Ut=Math.max(1,Math.floor(f.x/2)),Wt=Math.max(1,Math.floor(f.y/2)),Kt=new x(Ut,Wt,{minFilter:l,magFilter:l,depthBuffer:!1,stencilBuffer:!1}),qt=new x(Ut,Wt,{minFilter:l,magFilter:l,depthBuffer:!1,stencilBuffer:!1}),Jt=new I,Q=new v(-1,1,1,-1,0,1),Yt=new V(new ce(2,2));Jt.add(Yt);let $=new fe({vertexShader:zn,fragmentShader:wi,uniforms:{uScene:{value:Rt.texture},uTime:{value:0},uResolution:{value:new i(f.x,f.y)},uGrain:{value:1},uChroma:{value:1},uExposure:{value:1},uAces:{value:0},uBloom:{value:Kt.texture},uBloomStrength:{value:0},uGrade:{value:0},uGradeTint:{value:j.grade.tint},uGradeLift:{value:j.grade.lift},uGradeSat:{value:1},uGradeContrast:{value:1},uWarmBal:{value:0},uDither:{value:0},uTonemap:{value:0}}}),Xt=new fe({vertexShader:zn,fragmentShader:Oi,uniforms:{uScene:{value:Rt.texture},uThreshold:{value:.78}}}),Zt=new fe({vertexShader:zn,fragmentShader:ki,uniforms:{uScene:{value:Kt.texture},uDir:{value:new i}}});function Qt(e){Xt.uniforms.uScene.value=e.texture,fn(Xt,Kt),Zt.uniforms.uScene.value=Kt.texture,Zt.uniforms.uDir.value.set(1.6/Ut,0),fn(Zt,qt),Zt.uniforms.uScene.value=qt.texture,Zt.uniforms.uDir.value.set(0,1.6/Wt),fn(Zt,Kt),$.uniforms.uBloom.value=Kt.texture;let t=1-w.clamp(j.sunArc.y*2.2,0,1);Xt.uniforms.uThreshold.value=.92+.3*t,$.uniforms.uBloomStrength.value=.85*(.32+.95*t)}let $t=e=>{let t=e.map(e=>new G(e));for(;t.length<8;)t.push(new G(0,0,0));return t},en=[`night`,`dawn`,`noon`,`dusk`],tn={inkgold:en.map(e=>$t(Li[e])),terminal:en.map(e=>$t(Ri[e]))},rn=new fe({vertexShader:zn,fragmentShader:Ti,uniforms:{uScene:{value:zt.texture},uResolution:{value:new i(f.x,f.y)},uPixelSize:{value:Ii},uPalette:{value:tn.inkgold[2]},uPaletteB:{value:tn.inkgold[2]},uPaletteBlend:{value:0},uPaletteSize:{value:5}}}),on=new fe({vertexShader:zn,fragmentShader:Ai,uniforms:{uScene:{value:zt.texture},uResolution:{value:new i(f.x,f.y)},uGridWidth:{value:160},uDither:{value:.55},uPalette:{value:Pi(ji[`8-bit`].palette)},uPaletteSize:{value:1},uUsePalette:{value:1}}}),cn={};for(let e of Mi)cn[e]=ji[e].palette?Pi(ji[e].palette):null;let ln=new fe({vertexShader:zn,fragmentShader:Ei,uniforms:{uScene:{value:zt.texture},uDepth:{value:Lt},uResolution:{value:new i(f.x,f.y)},uBands:{value:4},uToonGain:{value:1.7},uToonGamma:{value:.6},uToonFloor:{value:j.toonFloor},uOutline:{value:j.outline},uNear:{value:.1},uFar:{value:100},uIsPerspective:{value:1}}}),dn=new fe({vertexShader:zn,fragmentShader:Di,uniforms:{uToon:{value:Vt.texture},uPixel:{value:Ht.texture},uBlend:{value:0}}});function fn(e,t){Yt.material=e,o.setRenderTarget(t),o.render(Jt,Q)}function pn(){A.setViewport(window.innerWidth,window.innerHeight),o.setSize(window.innerWidth,window.innerHeight);let e=o.getDrawingBufferSize(new i);return ie.setSize(e.x,e.y),Rt.setSize(e.x,e.y),zt.setSize(e.x,e.y),Bt.setSize(e.x,e.y),Vt.setSize(e.x,e.y),Ht.setSize(e.x,e.y),Ut=Math.max(1,e.x>>1),Wt=Math.max(1,e.y>>1),Kt.setSize(Ut,Wt),qt.setSize(Ut,Wt),se.uniforms.uResolution.value.set(e.x,e.y),$.uniforms.uResolution.value.set(e.x,e.y),rn.uniforms.uResolution.value.set(e.x,e.y),on.uniforms.uResolution.value.set(e.x,e.y),ln.uniforms.uResolution.value.set(e.x,e.y),e}let mn=rr({renderer:o}),hn=!0;function gn(e,t){let n=t.dpr==null?u:t.dpr,r=Math.min(window.devicePixelRatio,n);Math.abs(o.getPixelRatio()-r)>.001&&(o.setPixelRatio(r),typeof window<`u`&&window.dispatchEvent?window.dispatchEvent(new Event(`resize`)):pn()),hn=t.shadows!==!1,hn||(o.shadowMap.needsUpdate=!1)}let _n=ar({profiler:mn,apply:gn});function vn(){!g&&!p&&mn.frameStart()}function yn(){g||p||(mn.frameEnd(),_n.update())}function bn(e){g=!e,typeof window<`u`&&(window.__paused=g)}function xn(){try{o.compile(y,A.camera),Xn(1/60,0,{shadowsOn:!0}),Wn(Gn(),Rt),o.setRenderTarget(null)}catch(e){typeof console<`u`&&console.warn(`[L79] prewarm`,e)}}let Cn=3,wn=!1,Tn=!1,En=`native`,Dn=.3,On=.46,kn=[`native`,...Mi],An={"16-bit":`16-bit`,"8-bit":`8-bit`,gb:`Game Boy`,modern:`Modern`,native:`Pixel`,"1-bit":`1-bit`};typeof window<`u`&&(window.__mode=Cn,window.__vector=wn,window.__era=En),typeof window<`u`&&(window.__frames=0),typeof window<`u`&&(window.__loaded=!1);let jn=0,Mn=new W(1,1,1),Nn=!1;function Pn(e){let t=Tn?tn.terminal:tn.inkgold,n=e%1*4,r=Math.floor(n)%4;rn.uniforms.uPalette.value=t[r],rn.uniforms.uPaletteB.value=t[(r+1)%4],rn.uniforms.uPaletteBlend.value=n-Math.floor(n)}function Fn(e){let t=ji[e];t&&(on.uniforms.uGridWidth.value=t.gridWidth,on.uniforms.uDither.value=t.dither,on.uniforms.uUsePalette.value=+!!t.palette,t.palette&&(on.uniforms.uPalette.value=cn[e],on.uniforms.uPaletteSize.value=t.palette.length))}function In(){En!==`native`&&Fn(En)}let Rn=()=>En===`native`?rn:on;function Bn(e,t){Se(!0),y.environment=Te(),$e.value=1;let n=w.smoothstep(w.clamp(j.sunArc.y,0,1),.22,.8);H.fill.intensity=Vn*(1-.6*n),y.environmentIntensity=Hn*(1-.45*n),ze.value=n,ye.place(e),B.visible=!1,o.setRenderTarget(ie),o.render(y,e),B.visible=!0,o.setRenderTarget(Bt),o.render(y,e),Qt(Bt),$.uniforms.uScene.value=Bt.texture,$.uniforms.uAces.value=1,$.uniforms.uGrade.value=1,$.uniforms.uGrain.value=0,$.uniforms.uChroma.value=0,$.uniforms.uDither.value=1,$.uniforms.uWarmBal.value=.9*n,fn($,t),ye.place(A.camera)}let Vn=1,Hn=.34,Un=new G(`#cdaa80`);function Wn(e,t){let n=!wn&&(Cn===1||Cn===2);Se(n),y.environment=n?Te():null,$e.value=+!!n;let r=w.smoothstep(w.clamp(j.sunArc.y,0,1),.22,.8);if(H.fill.intensity=n?Vn*(1-.6*r):Vn,ze.value=n?r:0,n?($.uniforms.uWarmBal.value=.9*r,y.environmentIntensity=Hn*(1-.58*r),H.fill.color.lerp(Un,.45*r)):$.uniforms.uWarmBal.value=0,$.uniforms.uBloomStrength.value=0,B.visible=!1,o.setRenderTarget(ie),o.render(y,A.camera),B.visible=!rt,Cn===1&&!n)o.setRenderTarget(t),o.render(y,A.camera);else if(Cn===1)o.setRenderTarget(Bt),o.render(y,A.camera),Qt(Bt),$.uniforms.uScene.value=Bt.texture,$.uniforms.uAces.value=1,$.uniforms.uGrade.value=1,$.uniforms.uGrain.value=0,$.uniforms.uChroma.value=0,$.uniforms.uDither.value=1,fn($,t);else if(o.setRenderTarget(n?Bt:Rt),o.render(y,A.camera),Cn===2)n&&Qt(Bt),$.uniforms.uScene.value=n?Bt.texture:Rt.texture,$.uniforms.uAces.value=+!!n,$.uniforms.uGrade.value=+!!n,$.uniforms.uGrain.value=1,$.uniforms.uChroma.value=1,$.uniforms.uDither.value=+!!n,fn($,t);else{$.uniforms.uScene.value=Rt.texture,$.uniforms.uAces.value=0,$.uniforms.uGrade.value=0,$.uniforms.uGrain.value=0,$.uniforms.uChroma.value=0,$.uniforms.uDither.value=0,fn($,zt);let n=A.camera;ln.uniforms.uNear.value=n.near,ln.uniforms.uFar.value=n.far,ln.uniforms.uIsPerspective.value=+!!n.isPerspectiveCamera;let r=e.era?(Fn(e.era),on):Rn();e.kind===`pixel`?(fn(r,t),window.__style=`pixel`):e.kind===`toon`?(fn(ln,t),window.__style=`toon`):(fn(ln,Vt),fn(r,Ht),dn.uniforms.uBlend.value=e.blend,fn(dn,t),window.__style=`blend`)}}function Gn(){let e=Kn(),t=e.kind===`toon`?1:e.kind===`blend`?1-e.blend:0;return se.uniforms.uChromaScale.value=w.lerp(1,.5,t),e}function Kn(){if(Cn===1||Cn===2)return{kind:`none`};if(Cn===7)return{kind:`pixel`};if(Cn===8)return{kind:`toon`};let e=A.styleT;return window.__styleT=e,e<=Dn?{kind:`toon`}:e>=On?{kind:`pixel`,era:e<.62?`16-bit`:e<.8?`8-bit`:`gb`}:{kind:`blend`,blend:w.smoothstep(e,Dn,On),era:`16-bit`}}function qn(e){return Cn===1||Cn===2?``:wn&&Cn!==7&&Cn!==8?`Vector`:e.kind===`toon`?`Toon`:e.kind===`pixel`?An[e.era||En]||`Pixel`:e.kind===`blend`?`Toon → `+(An[e.era]||`Pixel`):``}function Xn(e,t,{shadowsOn:n=!0,seasonTarget:r=0}={}){typeof window<`u`&&window.__frames++,n&&=hn,oe.material.uniforms.uTime.value=t,$.uniforms.uTime.value=t,j.update(e),H.key.position.copy(j.sunDir).multiplyScalar(24),H.key.color.copy(j.sunColor),H.key.intensity=j.sunIntensity,H.fill.color.copy(j.hemiSky),H.fill.groundColor.copy(j.hemiGround),le.value=j.windowGlow,be.setSun(j.sunArc),be.setParams(j.skyParams),$.uniforms.uGradeSat.value=j.grade.sat,$.uniforms.uGradeContrast.value=j.grade.contrast,y.environmentIntensity=.34*(1-.6*w.clamp(j.sunArc.y*1.5,0,1)),Hn=y.environmentIntensity;let i=U.overcast;H.key.intensity*=1-.5*i,H.key.color.lerp(S,.45*i),H.fill.intensity=1+.7*i,Vn=H.fill.intensity;let a=w.smoothstep(j.sunDir.y,.06,.34),s=w.lerp(.28,1,1-j.windowGlow),c=n?a*s:0;H.key.shadow.intensity=.72*c,Ve.value=.52*c,(n&&!Nn||Mn.distanceToSquared(j.sunDir)>2e-5)&&(o.shadowMap.needsUpdate=!0,Mn.copy(j.sunDir)),Nn=n;let l=1-j.windowGlow;Be.setRGB(w.lerp(.46,1,l),w.lerp(.52,1,l),w.lerp(.74,1,l)),$.uniforms.uExposure.value=j.exposure,ln.uniforms.uToonGain.value=j.toonGain,o.setClearColor(j.horizon,1),Pn(j.t),window.__t=j.t,pe.update(e,t,j),H.update(t),he.update(e,t,j),re.uniforms.uWakeCount.value=he.wakeCount,U.update(e,t),re.uniforms.uRainCount.value=U.rainDropCount;let u=U.fog*(1-l);y.fog.density=.016+U.fog*C,k.copy(j.horizon).lerp(D,.85*u),y.fog.color.copy(k),o.setClearColor(k,1),Ge.value=U.fog,oe.material.uniforms.uFogAmt.value=.7*U.fog,He.value=U.snow,Ue.value=U.cloud*.55,We.x+=e*.018,We.y+=e*.009,Ke.value+=(r-Ke.value)*Math.min(1,e*1.5),et.value=t,tt.value=.035+.05*i,ge.update(e,t,j,U),De&&Ie.update(e,t,j),qe.visible=!De,Je&&!De&&Je.update(e,t,j),De&&X.step(e),De&&Z.update(e,t,j,{wind:.6*U.cloud,qualityLevel:window.__quality&&window.__quality.level||0});let d=Kn(),f=d.kind===`pixel`||d.kind===`blend`?`pixel`:wn?`vector`:d.kind===`toon`?`charm`:`realistic`;if(ye.update(e,t,j,U,f,A.camera),P){let[e,t,n]=L;re.uniforms.uPrev.value=e.texture,re.uniforms.uCurr.value=t.texture,o.setRenderTarget(n),o.render(R,te),L=[t,n,e],se.uniforms.uHeight.value=L[1].texture}if(jn<2&&typeof document<`u`&&++jn===2){let e=document.getElementById(`lgr-loader`);e&&e.classList.add(`gone`),window.__loaded=!0}}function Zn(e){Cn=e,window.__mode=Cn}function Qn(){return wn=!wn,Re.value=+!!wn,window.__vector=wn,wn}function $n(e){return wn=!!e,Re.value=+!!wn,window.__vector=wn,wn}function tr(){return En=kn[(kn.indexOf(En)+1)%kn.length],window.__era=En,In(),En}function nr(){return Tn=!Tn,Tn}return{updateWorld:Xn,decideStyle:Gn,renderCityPipeline:Wn,renderCityBeautyTo:Bn,styleHintName:qn,setPostMode:Zn,toggleVector:Qn,setVector:$n,cycleEra:tr,togglePalette:nr,setTonemap:e=>{let t=e===`agx`||e===1||e===!0;return $.uniforms.uTonemap.value=+!!t,typeof window<`u`&&(window.__tonemap=t?`agx`:`aces`),t?`agx`:`aces`},get mode(){return Cn},get vector(){return wn},get sceneEra(){return En},renderer:o,drawBuffer:f,scene:y,rig:A,sunRig:j,SIM:256,targets:L,simScene:R,simCamera:te,simMaterial:re,grabRT:ie,card:z,backdrop:oe,WATER_SIZE:28,water:B,waterMaterial:se,windowGlow:le,landmarkFactory:ue,city:H,cityLife:pe,waterLife:he,weatherRig:U,clouds:ge,inspector:ve,world:At,catalog:jt,editor:Mt,pilot:Ft,spawnSeizeCraft:Ye,get seizeCraft(){return Je?Je.followable:null},profiler:mn,governor:_n,frameStart:vn,frameEnd:yn,setActive:bn,get paused(){return g},get contextLost(){return p},prewarm:xn,fitShadowFrustum:It,SHADOW_DIST:24,sceneDepth:Lt,sceneRT:Rt,filmicRT:zt,toonRT:Vt,pixelRT:Ht,postScene:Jt,postCamera:Q,postQuad:Yt,filmicMaterial:$,pixelMaterial:rn,pixelkitMaterial:on,toonMaterial:ln,mixMaterial:dn,PALCACHE:tn,ERA_TEX:cn,runPass:fn,OVERCAST_GREY:S,FOG_DENSITY:C,FOG_NIGHT_TINT:D,_fogColor:k,resize:pn}}var Vi=[`video/mp4;codecs=avc1.42E01E`,`video/mp4`,`video/webm;codecs=vp9`,`video/webm`];function Hi({renderer:e,rig:t,sunRig:n,poke:r,getState:i,office:a={},world:o=null}){let s=e.domElement,c=new URLSearchParams(window.location.search),l=e=>{let t=i();return`lgr-${t.lesson}-${String(t.clock||``).replace(`:`,``)}-${t.style}.${e}`},u=(e,t)=>{let n=URL.createObjectURL(e),r=document.createElement(`a`);r.href=n,r.download=t,document.body.appendChild(r),r.click(),r.remove(),setTimeout(()=>URL.revokeObjectURL(n),1e3)};function d(){s.toBlob(e=>{e&&(u(e,l(`png`)),window.__lastStill=e.size)},`image/png`)}let f=()=>Vi.find(e=>window.MediaRecorder&&MediaRecorder.isTypeSupported(e))||``,p=Ui(),m=null,h=[],g=!1;function _(){if(g)return;let e=f(),t=s.captureStream(60);m=new MediaRecorder(t,e?{mimeType:e,videoBitsPerSecond:12e6}:{}),h=[],m.ondataavailable=e=>{e.data&&e.data.size&&h.push(e.data)},m.onstop=()=>{let e=new Blob(h,{type:m.mimeType});u(e,l(m.mimeType.includes(`mp4`)?`mp4`:`webm`)),window.__lastVideo=e.size},m.start(),g=!0,window.__recording=!0,p.show()}function v(){g&&(m.stop(),g=!1,window.__recording=!1,p.hide())}let y=()=>g?v():_(),b=e=>new Promise(t=>setTimeout(t,e)),x=e=>{let t=e.startsWith(`Shift+`),n=t?e.slice(6):e;window.dispatchEvent(new KeyboardEvent(`keydown`,{key:n,shiftKey:t}))};async function S(){let e=s.clientWidth,t=s.clientHeight,n=e*.26,i=t*.74;for(let t=0;t<=10;t++)r.at(n+t*e*.028,i+Math.sin(t*.7)*16),await b(100);r.stop()}async function C(e){if(e.world&&o?.[e.world]?.(),e.keys)for(let t of e.keys)x(t),await b(70);if(e.zoom&&t.zoomBy(e.zoom),e.orbit&&t.orbit(e.orbit[0],e.orbit[1]),e.timeTo!==void 0&&n.goTo(e.timeTo),e.pour&&o?.flowPourAt)for(let t=0;t<10;t++)o.flowPourAt(e.pour[0],e.pour[1],e.pour[2],e.pour[3]);e.office&&a[e.office]?.(),e.ripple&&await S(),e.waitMs&&await b(e.waitMs)}let w={tour:[{keys:[`6`,`0`],waitMs:600},{zoom:.72,waitMs:1700},{ripple:!0,waitMs:2400},{orbit:[.55,0],waitMs:1700},{timeTo:0,waitMs:3e3},{timeTo:.5,waitMs:1500},{keys:[`7`],waitMs:1e3},{zoom:1.5,waitMs:1400},{keys:[`B`],waitMs:2e3},{keys:[`B`],waitMs:2e3},{keys:[`B`],waitMs:2e3},{keys:[`B`],waitMs:2e3},{keys:[`B`],waitMs:2e3},{keys:[`8`],waitMs:900},{zoom:.65,waitMs:1200},{ripple:!0,waitMs:2600},{keys:[`7`],waitMs:700},{keys:[`B`],waitMs:300},{keys:[`B`],waitMs:900},{zoom:1.4,waitMs:2600}],daycycle:[{keys:[`6`,`0`],waitMs:700},{timeTo:.75,waitMs:2600},{timeTo:1,waitMs:2600},{timeTo:1.25,waitMs:2600},{timeTo:1.5,waitMs:2600},{timeTo:1.5,waitMs:800}],office:[{keys:[`o`],waitMs:1700},{office:`pet`,waitMs:1300},{office:`feed`,waitMs:1700},{office:`travel`,waitMs:1700},{keys:[`Shift+W`,`Shift+W`,`Shift+W`],waitMs:1800},{timeTo:0,waitMs:2400},{office:`laptop`,waitMs:800},{office:`closeLaptop`,waitMs:300},{timeTo:.5,waitMs:900},{keys:[`Shift+W`],waitMs:200},{keys:[`o`],waitMs:1500}],cities:[{keys:[`6`,`0`],waitMs:500},{timeTo:.78,waitMs:2800},{keys:[`C`],waitMs:3e3},{keys:[`C`],waitMs:3e3},{keys:[`C`],waitMs:2e3}],water:[{keys:[`6`,`0`],waitMs:600},{zoom:1.35,waitMs:2800},{orbit:[.7,0],waitMs:2600},{ripple:!0,waitMs:2200},{timeTo:0,waitMs:3200},{timeTo:.5,waitMs:1500},{orbit:[-.5,0],waitMs:2200}],morph:[{keys:[`6`,`3`],waitMs:700},{zoom:.55,waitMs:1800},{zoom:2.3,waitMs:1700},{zoom:1.26,waitMs:1700},{zoom:1.16,waitMs:1900},{zoom:.3,waitMs:2200}],skin:[{keys:[`o`],waitMs:1800},{keys:[`j`],waitMs:2e3},{keys:[`j`],waitMs:2e3},{timeTo:0,waitMs:2600},{timeTo:.5,waitMs:1500},{keys:[`u`],waitMs:2e3},{keys:[`j`],waitMs:1400},{keys:[`o`],waitMs:1500}]};w.hero=[{world:`enter`,keys:[`2`],waitMs:1400},{timeTo:.3,waitMs:300},{pour:[3.2,-5.24,.7,1.9],waitMs:300},{orbit:[.5,.05],waitMs:2700},{orbit:[-.3,-.04],zoom:.9,waitMs:2500},{timeTo:.74,waitMs:1400},{orbit:[.18,-.42],waitMs:3e3},{keys:[`8`],waitMs:1500},{keys:[`7`],waitMs:1500},{keys:[`2`],waitMs:2200}],w.heroCity=[{keys:[`6`,`2`],waitMs:1300},{timeTo:.3,waitMs:1900},{orbit:[.5,0],waitMs:2500},{timeTo:.9,waitMs:2100},{orbit:[-.45,0],zoom:.85,waitMs:2600},{keys:[`8`],waitMs:1500},{keys:[`7`],waitMs:1500},{keys:[`2`],waitMs:2200}];async function T(e){let t=w[e];if(t){window.__director=e;for(let e of t)await C(e);window.__director=null}}async function E(e){await b(1600),_(),await T(e),await b(400),v(),window.__captureDone=!0}c.has(`capture`)&&window.addEventListener(`keydown`,e=>{(e.key===`s`||e.key===`S`)&&d(),(e.key===`r`||e.key===`R`)&&y()});let D=c.get(`capture`);return D&&w[D]&&E(D),window.__capture={still:d,toggleRec:y,run:T,sequences:Object.keys(w)},window.__capture}function Ui(){let e=document.createElement(`div`);return e.textContent=`● REC`,e.style.cssText=`position:fixed;top:14px;right:16px;z-index:2;font:bold 12px ui-monospace,monospace;color:#ff3b30;letter-spacing:.12em;text-shadow:0 1px 3px #000;display:none;`,document.body.appendChild(e),{show:()=>{e.style.display=`block`},hide:()=>{e.style.display=`none`}}}var Wi=`
.lgr-cmdk-back { position: fixed; inset: 0; z-index: 50; display: none; align-items: flex-start; justify-content: center;
  background: rgba(8,10,14,0.55); backdrop-filter: blur(3px); -webkit-backdrop-filter: blur(3px); padding-top: 12vh; }
.lgr-cmdk-back.on { display: flex; }
.lgr-cmdk { width: min(560px, calc(100vw - 28px)); max-height: 64vh; display: flex; flex-direction: column;
  background: rgba(18,20,27,0.97); border: 1px solid rgba(184,153,104,0.32); border-radius: 14px; overflow: hidden;
  box-shadow: 0 22px 60px rgba(0,0,0,0.6); color: #e8edf4; font: 13px/1.4 ui-monospace, monospace; }
.lgr-cmdk-in { width: 100%; box-sizing: border-box; border: 0; outline: 0; background: transparent; color: #f2f5fa;
  font: 500 15px/1 ui-monospace, monospace; padding: 15px 16px; border-bottom: 1px solid rgba(255,255,255,0.08); }
.lgr-cmdk-in::placeholder { color: #8a93a3; }
.lgr-cmdk-list { list-style: none; margin: 0; padding: 6px; overflow-y: auto; }
.lgr-cmdk-grp { font-size: 10px; letter-spacing: .14em; text-transform: uppercase; color: #b89968; padding: 9px 10px 4px; }
.lgr-cmdk-opt { display: flex; align-items: center; justify-content: space-between; gap: 10px; min-height: 40px;
  padding: 0 10px; border-radius: 9px; cursor: pointer; }
.lgr-cmdk-opt[aria-selected="true"] { background: rgba(184,153,104,0.20); outline: 1px solid rgba(184,153,104,0.45); }
.lgr-cmdk-opt:hover { background: rgba(255,255,255,0.06); }
.lgr-cmdk-lbl { color: #eef2f8; }
.lgr-cmdk-sc { color: #9aa3b2; font-size: 11px; letter-spacing: .04em; padding: 2px 7px; border-radius: 6px;
  background: rgba(255,255,255,0.06); white-space: nowrap; }
.lgr-cmdk-empty { color: #8a93a3; padding: 16px; text-align: center; }
`;function Gi({commands:e=[],onAfterRun:t}={}){if(typeof document>`u`)return{open(){},close(){},toggle(){},setCommands(){},destroy(){}};let n=e.slice(),r=document.createElement(`style`);r.textContent=Wi,document.head.appendChild(r);let i=document.createElement(`div`);i.className=`lgr-cmdk-back`;let a=document.createElement(`div`);a.className=`lgr-cmdk`,a.setAttribute(`role`,`dialog`),a.setAttribute(`aria-modal`,`true`),a.setAttribute(`aria-label`,`Command palette`);let o=document.createElement(`input`);o.className=`lgr-cmdk-in`,o.type=`text`,o.setAttribute(`role`,`combobox`),o.setAttribute(`aria-expanded`,`true`),o.setAttribute(`aria-autocomplete`,`list`),o.setAttribute(`aria-controls`,`lgr-cmdk-list`),o.setAttribute(`aria-label`,`Search commands`),o.placeholder=`Type a command…  (↑↓ to move · Enter to run · Esc to close)`;let s=document.createElement(`ul`);s.className=`lgr-cmdk-list`,s.id=`lgr-cmdk-list`,s.setAttribute(`role`,`listbox`),a.append(o,s),i.append(a),document.body.append(i);let c=!1,l=[],u=0,d=null,f=e=>(e||``).toLowerCase();function p(e){return e=f(e).trim(),e?n.filter(t=>f(t.label).includes(e)||f(t.group).includes(e)||f(t.shortcut).includes(e)).sort((t,n)=>(f(t.label).startsWith(e)?-1:0)-(f(n.label).startsWith(e)?-1:0)):n.slice()}function m(){if(s.innerHTML=``,l=p(o.value),u>=l.length&&(u=Math.max(0,l.length-1)),!l.length){let e=document.createElement(`li`);e.className=`lgr-cmdk-empty`,e.textContent=`No commands`,s.append(e),o.removeAttribute(`aria-activedescendant`);return}let e=null;l.forEach((t,n)=>{if(t.group&&t.group!==e){e=t.group;let n=document.createElement(`li`);n.className=`lgr-cmdk-grp`,n.textContent=t.group,n.setAttribute(`aria-hidden`,`true`),s.append(n)}let r=document.createElement(`li`);r.className=`lgr-cmdk-opt`,r.id=`lgr-cmdk-opt-${n}`,r.setAttribute(`role`,`option`),r.setAttribute(`aria-selected`,String(n===u));let i=document.createElement(`span`);if(i.className=`lgr-cmdk-lbl`,i.textContent=t.label,r.append(i),t.shortcut){let e=document.createElement(`span`);e.className=`lgr-cmdk-sc`,e.textContent=t.shortcut,r.append(e)}r.addEventListener(`mousemove`,()=>{u!==n&&(u=n,h())}),r.addEventListener(`click`,()=>g(n)),s.append(r)}),h()}function h(){[...s.querySelectorAll(`.lgr-cmdk-opt`)].forEach((e,t)=>e.setAttribute(`aria-selected`,String(t===u)));let e=s.querySelector(`#lgr-cmdk-opt-${u}`);e?(o.setAttribute(`aria-activedescendant`,e.id),e.scrollIntoView({block:`nearest`})):o.removeAttribute(`aria-activedescendant`)}function g(e){let n=l[e];if(n){v();try{n.run()}catch{}t&&t(n)}}function _(){c||(c=!0,d=document.activeElement,o.value=``,u=0,m(),i.classList.add(`on`),o.focus(),typeof window<`u`&&(window.__cmdk=!0))}function v(){if(c){if(c=!1,i.classList.remove(`on`),d&&d.focus)try{d.focus()}catch{}typeof window<`u`&&(window.__cmdk=!1)}}o.addEventListener(`input`,()=>{u=0,m()}),i.addEventListener(`keydown`,e=>{if(e.key===`Escape`){e.preventDefault(),e.stopPropagation(),v();return}if(e.key===`ArrowDown`){e.preventDefault(),l.length&&(u=(u+1)%l.length,h());return}if(e.key===`ArrowUp`){e.preventDefault(),l.length&&(u=(u-1+l.length)%l.length,h());return}if(e.key===`Enter`){e.preventDefault(),g(u);return}e.key===`Tab`&&e.preventDefault()}),i.addEventListener(`mousedown`,e=>{e.target===i&&v()});let y=e=>{(e.metaKey||e.ctrlKey)&&(e.key===`k`||e.key===`K`)&&(e.preventDefault(),e.stopPropagation(),c?v():_())};return window.addEventListener(`keydown`,y,!0),{open:_,close:v,toggle:()=>c?v():_(),setCommands(e){n=(e||[]).slice(),c&&m()},get isOpen(){return c},destroy(){window.removeEventListener(`keydown`,y,!0),i.remove(),r.remove()}}}var Ki=`
/* L104 — ONE GOLD ACCENT TOKEN (retires the L97 blue #3a7bd5 active-highlight). The blue was undocumented drift
   AND failed contrast: white-on-#3a7bd5 ≈ 4.22:1 < 4.5:1. Gold FILL + DARK INK ≈ 6.95:1 (passes WCAG 1.4.3) and
   matches the existing L99 ⌘K FAB (#b89968 on #1b1d24). One token, referenced by every .on/accent-color site below
   (grep'd ALL shell call-sites, Rule 7). Defined on :root so it reaches the panels too (they're appended to <body>,
   not children of .vui). --vui-accent-bright = the slightly lighter gold already used for focus rings (#e8c069). */
:root { --vui-accent: #b89968; --vui-accent-ink: #1b1d24; --vui-accent-bright: #e8c069; }
/* L97 REDESIGN — the GLOBAL TOP BAR (zone 2): docked to the TOP so the viewport reads as the hero (the scene
   fills the canvas; chrome floats translucent at the EDGES, not across the bottom-middle). Same glass identity. */
.vui { position: fixed; left: 50%; top: 12px; transform: translateX(-50%); z-index: 3;
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
.vui button.on, .vui-more button.on { background: var(--vui-accent); color: var(--vui-accent-ink); }
.vui .seg, .vui-more .seg { display: flex; gap: 2px; background: rgba(255,255,255,0.05); border-radius: 11px; padding: 2px; }
.vui .seg button, .vui-more .seg button { min-width: 44px; padding: 0 9px; border-radius: 9px; }
.vui .sep { width: 1px; align-self: stretch; margin: 4px 2px; background: rgba(255,255,255,0.12); }
.vui input[type=range] { width: 92px; accent-color: var(--vui-accent); height: 44px; cursor: pointer; }
.vui .lbl { opacity: .55; font-size: 10px; letter-spacing: .12em; text-transform: uppercase; padding: 0 2px; }
/* L74 WORLD-EDITOR CHROME — a left-edge vertical MODE RAIL (the tool radio) + a floating per-tool CONTROL CARD.
   Reuses the .vui glass + 44px touch minimum; mounts ONLY in edit mode (?edit=1), so the clean showcase is untouched. */
.vui-rail { position: fixed; left: 12px; top: 50%; transform: translateY(-50%); z-index: 3; display: none;
  flex-direction: column; gap: 6px; padding: 7px; border-radius: 14px; background: rgba(16,18,24,0.72);
  backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); box-shadow: 0 6px 24px rgba(0,0,0,0.4); pointer-events: auto; }
.vui-rail.open { display: flex; }
.vui-rail button { min-width: 48px; min-height: 48px; padding: 2px 0 0; border: 0; border-radius: 11px; cursor: pointer;
  background: rgba(255,255,255,0.07); color: #d8dde6; font: 600 19px/1 ui-monospace, monospace; transition: background .12s, transform .08s; }
.vui-rail button:hover { background: rgba(255,255,255,0.16); }
.vui-rail button:active { transform: scale(0.92); }
.vui-rail button.on { background: var(--vui-accent); color: var(--vui-accent-ink); }
.vui-rail .rk { display: block; font-size: 8px; opacity: .5; margin-top: 2px; letter-spacing: .1em; }
/* L97 REDESIGN — the PROPERTIES panel (zone 4) docked to the RIGHT edge (was left:74px beside the rail). The
   active tool's settings live here; the LEFT edge holds the tool palette (rail), the RIGHT holds its properties. */
.vui-card { position: fixed; right: 12px; left: auto; top: 50%; transform: translateY(-50%); z-index: 3; display: none;
  flex-direction: column; gap: 8px; padding: 11px 12px; border-radius: 14px; max-width: 236px; background: rgba(16,18,24,0.84);
  backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); box-shadow: 0 6px 24px rgba(0,0,0,0.4);
  color: #d8dde6; font: 600 12px/1 ui-monospace, monospace; pointer-events: auto; }
.vui-card.open { display: flex; }
.vui-card .ct { font-size: 13px; color: #eef2f8; letter-spacing: .04em; }
.vui-card .crow { display: flex; align-items: center; gap: 7px; flex-wrap: wrap; }
.vui-card .clbl { opacity: .55; font-size: 10px; letter-spacing: .1em; text-transform: uppercase; min-width: 46px; }
.vui-card input[type=range] { width: 108px; accent-color: var(--vui-accent); height: 36px; cursor: pointer; }
.vui-card button { min-width: 40px; min-height: 40px; padding: 0 10px; border: 0; border-radius: 9px;
  background: rgba(255,255,255,0.08); color: inherit; font: inherit; cursor: pointer; transition: background .12s; }
.vui-card button:hover { background: rgba(255,255,255,0.17); }
.vui-card button.on { background: var(--vui-accent); color: var(--vui-accent-ink); }
.vui-card .seg { display: flex; gap: 2px; background: rgba(255,255,255,0.05); border-radius: 11px; padding: 2px; }
.vui-card .seg button { min-width: 40px; padding: 0 9px; border-radius: 9px; }
/* L75 SAVE / LOAD panel — top-right floating glass; lists localStorage slots + the file/link transports. Edit-mode only. */
.vui-save { position: fixed; right: 12px; top: 12px; z-index: 3; display: none; flex-direction: column; gap: 7px;
  padding: 11px 12px; border-radius: 14px; max-width: 250px; background: rgba(16,18,24,0.84);
  backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); box-shadow: 0 6px 24px rgba(0,0,0,0.4);
  color: #d8dde6; font: 600 12px/1 ui-monospace, monospace; pointer-events: auto; }
.vui-save.open { display: flex; }
.vui-save .ct { font-size: 13px; color: #eef2f8; letter-spacing: .04em; }
.vui-save .srow { display: flex; align-items: center; gap: 6px; flex-wrap: wrap; }
.vui-save input[type=text], .vui-save select { flex: 1; min-width: 90px; min-height: 36px; border: 0; border-radius: 9px;
  background: rgba(255,255,255,0.09); color: #eef2f8; font: 600 12px ui-monospace, monospace; padding: 0 9px; }
.vui-save button { min-width: 40px; min-height: 38px; padding: 0 10px; border: 0; border-radius: 9px;
  background: rgba(255,255,255,0.08); color: inherit; font: inherit; cursor: pointer; transition: background .12s; }
.vui-save button:hover { background: rgba(255,255,255,0.17); }
.vui-save .st { font-size: 10px; opacity: .7; letter-spacing: .04em; min-height: 12px; }
/* L97: the key-list popover drops DOWN from the top bar (the ⓘ button) instead of up from the bottom. */
.vui-info { position: fixed; left: 50%; top: 64px; transform: translateX(-50%); z-index: 3;
  display: none; max-width: calc(100vw - 24px); padding: 10px 14px; border-radius: 12px;
  background: rgba(16,18,24,0.92); color: #c8ccd4; pointer-events: auto;
  font: 11px/1.7 ui-monospace, monospace; letter-spacing: .04em; }
.vui-info.open { display: block; }
/* L63 INSPECT readout — top-left panel naming the followed object + its live behaviour, with a
   tap "next" + "exit". Shown only while the inspection lens is on; pointer-events on so the buttons
   work, but it never covers the bottom control bar. */
.vui-inspect { position: fixed; left: 14px; top: 14px; z-index: 3; display: none; max-width: 260px;
  padding: 10px 12px; border-radius: 12px; background: rgba(16,18,24,0.9); color: #d8dde6;
  backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); pointer-events: auto;
  font: 600 12px/1.5 ui-monospace, monospace; box-shadow: 0 6px 24px rgba(0,0,0,0.4); }
.vui-inspect.open { display: block; }
.vui-inspect .ik { font-size: 10px; letter-spacing: .16em; text-transform: uppercase; opacity: .55; }
.vui-inspect .it { font-size: 13px; margin: 1px 0 3px; color: #eef2f8; }
.vui-inspect .ii { opacity: .82; font-weight: 500; }
.vui-inspect .ir { display: flex; gap: 6px; margin-top: 9px; }
.vui-inspect button { min-width: 40px; min-height: 36px; padding: 0 10px; border: 0; border-radius: 9px;
  background: rgba(255,255,255,0.09); color: inherit; font: inherit; cursor: pointer; }
.vui-inspect button:hover { background: rgba(255,255,255,0.18); }
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
/* L97: the style-hint pill moved to BOTTOM-centre (the top is now the global bar) — it names the live look as you
   zoom the AUTO morph ladder, away from the chrome. */
.vui-style { position: fixed; left: 50%; bottom: 22px; transform: translateX(-50%); z-index: 3;
  padding: 6px 13px; border-radius: 999px; background: rgba(16,18,24,0.72);
  backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); color: #eaeef4;
  font: 700 11px/1 ui-monospace, monospace; letter-spacing: .16em; text-transform: uppercase;
  pointer-events: none; opacity: 0; transition: opacity .35s ease; box-shadow: 0 4px 16px rgba(0,0,0,0.35); }
.vui-style.on { opacity: 0.92; }
/* L31 "More" overflow panel (TOUCH only): the secondary toggles live here behind one tap, so the
   primary bar stays one/two compact rows and the ENGINE owns the mobile landing (progressive disclosure). */
.vui-more { position: fixed; left: 50%; top: 64px; transform: translateX(-50%); z-index: 3;
  display: none; flex-wrap: wrap; justify-content: center; align-items: center; gap: 8px;
  max-width: calc(100vw - 24px); padding: 9px 11px; border-radius: 14px;
  background: rgba(16,18,24,0.92); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
  box-shadow: 0 6px 24px rgba(0,0,0,0.4); pointer-events: auto; }
.vui-more.open { display: flex; }
/* L97 progressive disclosure — the ENVIRONMENT/VIEW expander: a small popover under the top bar holding the
   SECONDARY controls (auto-day/night · weather · season · shadows · theme) so the bar shows only the primary
   ones (time slider stays on the bar). Fixed under the top bar (which is itself fixed at top:12). */
.vui-env { position: fixed; top: 64px; right: 16px; z-index: 3; display: none; flex-wrap: wrap; gap: 8px;
  align-items: center; max-width: min(360px, calc(100vw - 24px)); padding: 9px 11px; border-radius: 14px;
  background: rgba(16,18,24,0.94); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
  box-shadow: 0 6px 24px rgba(0,0,0,0.4); pointer-events: auto; }
.vui-env.open { display: flex; }
.vui-env button { min-width: 44px; min-height: 44px; padding: 0 12px; border: 0; border-radius: 10px;
  background: rgba(255,255,255,0.07); color: inherit; font: inherit; cursor: pointer; transition: background .12s; }
.vui-env button:hover { background: rgba(255,255,255,0.16); }
.vui-env button.on { background: var(--vui-accent); color: var(--vui-accent-ink); }
.vui-env button:focus-visible { outline: 2px solid #e8c069; outline-offset: 2px; }
@media (pointer: coarse) { .vui { top: 16px; padding: 9px 11px; } .vui button { font-size: 13px; }
  .vui-show { bottom: 20px; } }
/* L99 MOBILE BOTTOM-SHEET (touch only) — the edge editor panels (left tool rail + right properties card) re-dock to a
   thumb-reachable BOTTOM SHEET with two snap states: PEEK (handle + the horizontal tool row) and EXPANDED (+ the active
   tool's full properties). Built/mounted ONLY on coarse pointers; desktop keeps the edge panels untouched. */
.vui-sheet { position: fixed; left: 0; right: 0; bottom: 0; z-index: 4; display: none; flex-direction: column;
  background: rgba(16,18,24,0.96); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
  border-top: 1px solid rgba(184,153,104,0.30); border-radius: 18px 18px 0 0; box-shadow: 0 -10px 34px rgba(0,0,0,0.55);
  padding: 0 12px max(12px, env(safe-area-inset-bottom)); max-height: 72vh; color: #d8dde6;
  font: 600 13px/1 ui-monospace, monospace; pointer-events: auto; }
.vui-sheet.on { display: flex; }
.vui-sheet-grip { align-self: center; min-width: 44px; min-height: 28px; display: flex; align-items: center; justify-content: center;
  background: transparent; border: 0; cursor: pointer; padding: 8px; }
.vui-sheet-grip::before { content: ''; width: 40px; height: 5px; border-radius: 3px; background: rgba(255,255,255,0.28); }
.vui-sheet-grip:focus-visible { outline: 2px solid #e8c069; outline-offset: 2px; border-radius: 8px; }
.vui-sheet-title { font-size: 12px; color: #eef2f8; letter-spacing: .04em; padding: 2px 4px 8px; text-align: center; }
.vui-sheet-tools { display: flex; gap: 8px; overflow-x: auto; padding: 0 0 10px; -webkit-overflow-scrolling: touch; }
.vui-sheet-body { overflow-y: auto; padding-bottom: 8px; }
.vui-sheet.peek .vui-sheet-body, .vui-sheet.peek .vui-sheet-title { display: none; }   /* PEEK = grip + tools only */
/* in-sheet overrides: the rail + card lose their fixed-edge positioning and flow inside the sheet (rail goes horizontal). */
.vui-sheet .vui-rail { position: static; transform: none; display: flex; flex-direction: row; background: transparent;
  box-shadow: none; padding: 0; gap: 8px; }
.vui-sheet .vui-card { position: static; transform: none; display: flex; max-width: none; width: 100%; background: transparent;
  box-shadow: none; padding: 0; }
/* L99 FAB (touch) — a thumb primary action: open the ⌘K command palette. Sits above the sheet/bar, bottom-right. */
.vui-fab { position: fixed; right: 16px; bottom: max(20px, env(safe-area-inset-bottom)); z-index: 6; display: none;
  width: 56px; height: 56px; border-radius: 50%; border: 0; cursor: pointer; align-items: center; justify-content: center;
  background: #b89968; color: #1b1d24; font: 700 16px/1 ui-monospace, monospace; box-shadow: 0 8px 24px rgba(0,0,0,0.5); }
.vui-fab.on { display: inline-flex; }
.vui-fab:active { transform: scale(0.92); }
.vui-fab:focus-visible { outline: 3px solid #e8c069; outline-offset: 3px; }
/* L97 a11y — a visually-hidden live region (announces mode/zone swaps to screen readers without repainting
   controls silently). The clip-rect pattern keeps it in the a11y tree but off-screen for sighted users. */
.vui-live { position: fixed; width: 1px; height: 1px; margin: -1px; padding: 0; overflow: hidden;
  clip: rect(0 0 0 0); clip-path: inset(50%); border: 0; white-space: nowrap; }
/* L97 a11y — a clear keyboard focus ring on every control zone (don't regress the L91 visible-focus win). */
.vui button:focus-visible, .vui-rail button:focus-visible, .vui-card button:focus-visible,
.vui-save button:focus-visible, .vui-more button:focus-visible, .vui-inspect button:focus-visible {
  outline: 2px solid #e8c069; outline-offset: 2px; }
`;function qi({controls:e,state:t,show:n,coarse:r}){if(typeof document>`u`)return;let i=document.createElement(`style`);i.textContent=Ki,document.head.appendChild(i);let a=document.createElement(`div`);a.className=`vui`;let o=document.createElement(`div`);o.className=`vui-info`,o.innerHTML=`KEYS · WASD move · 4/5/6 cam · 0 vector · 7/8 pixel/toon · B era · T time · [ ] scrub · 9 auto · Shift+W weather · K season · G shuffle · C city · I inspect · click a building / O office · J office skin · U painted props · Esc exit · M hide UI · H shadows · P theme · drag water to ripple`;let s=(e,t,n)=>{let r=document.createElement(`button`);return r.textContent=e,n&&(r.title=n),r.addEventListener(`click`,e=>{navigator.vibrate?.(10),t(e)}),r},c=e=>{let t=document.createElement(`div`);return t.className=`seg`,{seg:t,btns:e.map(([n,r])=>{let i=s(n,()=>e.find(e=>e[1]===r)[2](),n);return i.dataset.val=r,t.appendChild(i),i})}},l=e=>{let t=document.createElement(`span`);return t.className=`clbl`,t.textContent=e,t},u=(e,t,n,r)=>{let i=document.createElement(`input`);return i.type=`range`,i.min=String(e),i.max=String(t),i.step=String(n),i.addEventListener(`input`,()=>r(parseFloat(i.value))),i},d=s(`City`,()=>e.city(),`Next city profile (C)`),f=s(`Shuffle`,()=>e.shuffle(),`New random seed (G)`),p={clear:`Clear`,rain:`Rain`,snow:`Snow`,fog:`Fog`},m=[`Spring`,`Summer`,`Autumn`,`Winter`],h=s(`Clear`,()=>e.weather(),`Cycle weather: clear→rain→snow→fog (Shift+W)`),g=s(`Spring`,()=>e.season(),`Cycle season: spring→summer→autumn→winter (K)`),_=s(`Office`,()=>e.office(),`Dive into / exit the office (O · Esc)`),v={"3d":`3D`,dressed2:`Dressed`,night2:`Night`,modern:`Modern`,charm:`Charm`},y=s(`Skin`,()=>e.officeSkin(),`Office look: 3D → dressed → night → modern → charm diffusion (J)`),b={painted:`Painted`,"3d":`Live 3D`},x=s(`Props`,()=>e.officeProps(),`Office props: painted (cohesive) ↔ live 3D (animated) — under a skin (U)`),S=s(`Inspect`,()=>e.inspect(),`Inspect: fly + click/tap any car·person·bird·boat·cloud to follow + watch its behaviour (I)`),C={valley:`Valley`,archipelago:`Archi`,mountains:`Mountains`,plains:`Plains`},w=s(`World`,()=>e.world(),`Generate + explore a procedural terrain world`),T=s(`🎲`,()=>e.worldReroll(),`New random world (seed) — G`),E=s(`Valley`,()=>e.worldPreset(),`Cycle biome preset: valley → archipelago → mountains → plains`),D=s(`✎ Edit`,()=>e.sculpt&&e.sculpt(),`World editor — brush the terrain (Sculpt to reshape, Paint to recolour)`),O=document.createElement(`div`);O.className=`vui-rail`;let k=null;function A(t){k||!t||(k=t.map(t=>{let n=document.createElement(`button`);return n.dataset.id=t.id,n.title=`${t.label} (${t.key})`,n.innerHTML=`${t.icon}<span class="rk">${t.key}</span>`,n.addEventListener(`click`,()=>{navigator.vibrate?.(10),e.editTool&&e.editTool(t.id)}),O.appendChild(n),n}))}let j=document.createElement(`div`);j.className=`vui-card`;let M=document.createElement(`div`);M.className=`ct`;let N=document.createElement(`div`);N.className=`crow`;let P=u(.8,6,.1,t=>e.brushSize&&e.brushSize(t));N.append(l(`Size`),P);let F=document.createElement(`div`);F.className=`crow`;let I=u(.01,.15,.005,t=>e.brushStrength&&e.brushStrength(t));F.append(l(`Force`),I);let L=document.createElement(`div`);L.className=`crow`;let ee=u(.1,1,.05,t=>e.brushDensity&&e.brushDensity(t));L.append(l(`Density`),ee);let R=s(`↑ Raise`,()=>e.sculptDir&&e.sculptDir(),`Brush direction: raise ↔ lower / add ↔ erase / place ↔ delete`),te=s(`↶ Undo`,()=>e.worldUndo&&e.worldUndo(),`Undo the last edit (Z)`),ne=s(`↺ Reset`,()=>e.worldReset&&e.worldReset(),`Reset to the generated world (discard edits) — same seed, NOT a reroll`),re=s(`↺ Reset`,()=>e.worldReset&&e.worldReset(),`Reset the world (discard edits) — same seed`),ie=s(`👁 Trees`,()=>e.hideScatter&&e.hideScatter(),`Hide the scatter (trees/rocks) to see the ground you are editing`),ae=document.createElement(`div`);ae.className=`seg`,ae.style.display=`none`;let z=null;function oe(t){z||!t||(z=t.map((t,n)=>{let r=document.createElement(`button`);return r.title=t.key,r.style.cssText=`min-width:30px;padding:0;background:${t.color};border:0;border-radius:8px;`,r.addEventListener(`click`,()=>{navigator.vibrate?.(8),e.material&&e.material(n)}),ae.appendChild(r),r}))}let se=document.createElement(`div`);se.className=`seg`,se.style.display=`none`;let B=null;function ce(t){B||!t||(B=t.map(t=>{let n=document.createElement(`button`);return n.dataset.key=t.key,n.textContent=t.icon,n.title=t.label,n.style.cssText=`min-width:30px;padding:4px 6px;`,n.addEventListener(`click`,()=>{navigator.vibrate?.(8),e.scatterType&&e.scatterType(t.key)}),se.appendChild(n),n}))}let le=document.createElement(`div`);le.className=`seg`,le.style.display=`none`;let ue=null;function de(t){ue||!t||(ue=t.map(t=>{let n=document.createElement(`button`);return n.dataset.key=t.key,n.textContent=t.icon,n.title=t.label,n.style.cssText=`min-width:30px;padding:4px 6px;`,n.addEventListener(`click`,()=>{navigator.vibrate?.(8),e.entity&&e.entity(t.key)}),le.appendChild(n),n}))}let fe=c([[`×1`,`1`,()=>e.dropN&&e.dropN(1)],[`×10`,`10`,()=>e.dropN&&e.dropN(10)],[`×50`,`50`,()=>e.dropN&&e.dropN(50)]]);fe.seg.style.display=`none`,fe.seg.title=`How many to drop per click (scattered in the ring)`;let V=document.createElement(`div`);V.className=`crow`,V.append(R,te,re,ie),j.append(M,N,F,ae,se,L,le,fe.seg,V);let H=document.createElement(`div`);H.className=`vui-save`;let pe=document.createElement(`div`);pe.className=`ct`,pe.textContent=`💾 Save / Load`;let me=document.createElement(`input`);me.type=`text`,me.placeholder=`world name`,me.value=`my-world`;let he=document.createElement(`select`),U=``;he.addEventListener(`change`,()=>{he.value&&(me.value=he.value)});let ge=document.createElement(`input`);ge.type=`file`,ge.accept=`.json,application/json`,ge.style.display=`none`,ge.addEventListener(`change`,()=>{ge.files[0]&&(e.importWorld(ge.files[0]),ge.value=``)});let _e=s(`💾 Save`,()=>e.saveWorld(me.value.trim()),`Save to this device (a named slot)`),W=s(`📂 Load`,()=>e.loadWorld(me.value.trim()),`Load the named slot`),ve=s(`🗑`,()=>e.deleteWorld(me.value.trim()),`Delete the named slot`),ye=s(`⬇ Export`,()=>e.exportWorld(me.value.trim()),`Download the world as a JSON file (portable, lossless)`),G=s(`⬆ Import`,()=>ge.click(),`Load a world from a JSON file`),be=s(`🔗 Link`,()=>e.shareLink(),`Copy a shareable link (light edits only — else use Export)`),xe=document.createElement(`div`);xe.className=`st`;let Se=document.createElement(`div`);Se.className=`srow`,Se.append(me);let Ce=document.createElement(`div`);Ce.className=`srow`,Ce.append(he);let we=document.createElement(`div`);we.className=`srow`,we.append(_e,W,ve);let Te=document.createElement(`div`);Te.className=`srow`,Te.append(ye,G,be),H.append(pe,Se,Ce,we,Te,xe,ge);let K=s(`✨ Realistic`,()=>e.realistic(),`Cinematic beauty look — atmospheric sky, glowing sun, colour-graded (showcase)`),q=c([[`Auto`,`auto`,()=>e.post(`auto`)],[`Pixel`,`pixel`,()=>e.post(`pixel`)],[`Toon`,`toon`,()=>e.post(`toon`)],[`None`,`none`,()=>e.post(`none`)]]);q.btns[0].title=`AUTO: zoom morphs the style (toon → 16-bit → 8-bit → Game Boy)`,q.btns[3].title=`NONE: raw beauty render, no post-crunch (clean flat-vector when Vector is on)`;let Ee=s(`Vector`,()=>e.vector(),`Flat-vector materials — LAYERS onto the post mode (Vector + Pixel/Toon/Auto). Toggle (0)`),J={native:`Era`,gb:`GB`,"8-bit":`8-bit`,"16-bit":`16-bit`,modern:`Modern`,"1-bit":`1-bit`},De=s(`Era`,()=>e.era(),`Cycle the pixel era (B): native → GB → 8-bit → 16-bit → Modern`),Y=document.createElement(`input`);Y.type=`range`,Y.min=`0`,Y.max=`1`,Y.step=`0.01`,Y.title=`Time of day`;let Oe=!1;Y.addEventListener(`pointerdown`,()=>{Oe=!0}),Y.addEventListener(`pointerup`,()=>{Oe=!1}),Y.addEventListener(`input`,()=>e.time(parseFloat(Y.value)));let ke=s(`▶`,()=>e.auto(),`Play/pause day cycle (9)`),Ae=document.createElement(`div`);Ae.style.cssText=`display:flex;align-items:center;gap:6px;`;let je=document.createElement(`span`);je.className=`lbl`,je.textContent=`Day`,Ae.append(je,Y);let Me=s(`☀ Shadows`,()=>e.shadows&&e.shadows(),`Sun shadows on/off (H)`),Ne=s(`◐ Theme`,()=>e.theme&&e.theme(),`Swap the UI palette: ink/gold ↔ terminal (P)`),Pe=document.createElement(`div`);Pe.className=`vui-env`,Pe.setAttribute(`role`,`group`),Pe.setAttribute(`aria-label`,`Environment and view settings`);let Fe=s(`⚙ More ▾`,()=>{Pe.classList.toggle(`open`)},`Environment & view: day/night play · weather · season · shadows · theme`),Ie=c([[`Iso`,`iso`,()=>e.cam(`iso`)],[`Dim`,`dimetric`,()=>e.cam(`dimetric`)],[`3D`,`persp`,()=>e.cam(`persp`)]]),Le=s(`ⓘ`,()=>o.classList.toggle(`open`),`All keys`),Re=s(`⌄`,()=>at(!0),`Hide controls — watch unobstructed (M)`),ze=Gi({commands:[{group:`Modes`,label:`Go to City`,shortcut:``,run:()=>e.mode(`city`)},{group:`Modes`,label:`Go to World — terrain editor`,shortcut:``,run:()=>e.mode(`world`)},{group:`Modes`,label:`Go to Office`,shortcut:`O`,run:()=>e.mode(`office`)},{group:`Modes`,label:`Go to Hoard — the game`,shortcut:`X`,run:()=>e.mode(`hoard`)},{group:`Camera`,label:`Camera: Perspective (3D orbit)`,shortcut:`4`,run:()=>e.cam(`persp`)},{group:`Camera`,label:`Camera: Isometric`,shortcut:`5`,run:()=>e.cam(`iso`)},{group:`Camera`,label:`Camera: Dimetric (2:1)`,shortcut:`6`,run:()=>e.cam(`dimetric`)},{group:`Art`,label:`Art tier: Auto LOD (zoom morph)`,shortcut:`3`,run:()=>e.post(`auto`)},{group:`Art`,label:`Art tier: Pixel`,shortcut:`7`,run:()=>e.post(`pixel`)},{group:`Art`,label:`Art tier: Toon`,shortcut:`8`,run:()=>e.post(`toon`)},{group:`Art`,label:`Art tier: Raw (no crunch)`,shortcut:`1`,run:()=>e.post(`none`)},{group:`Art`,label:`Toggle Vector (flat materials)`,shortcut:`0`,run:()=>e.vector()},{group:`Art`,label:`Realistic — cinematic beauty`,shortcut:``,run:()=>e.realistic()},{group:`Art`,label:`Cycle pixel Era`,shortcut:`B`,run:()=>e.era()},{group:`Environment`,label:`Play / pause day-night`,shortcut:`9`,run:()=>e.auto()},{group:`Environment`,label:`Time of day: Dawn`,shortcut:``,run:()=>e.time(.25)},{group:`Environment`,label:`Time of day: Noon`,shortcut:``,run:()=>e.time(.5)},{group:`Environment`,label:`Time of day: Dusk`,shortcut:``,run:()=>e.time(.75)},{group:`Environment`,label:`Time of day: Night`,shortcut:``,run:()=>e.time(0)},{group:`Environment`,label:`Cycle Weather`,shortcut:`Shift+W`,run:()=>e.weather()},{group:`Environment`,label:`Cycle Season`,shortcut:`K`,run:()=>e.season()},{group:`Environment`,label:`Toggle sun Shadows`,shortcut:`H`,run:()=>e.shadows&&e.shadows()},{group:`Environment`,label:`Swap UI Theme`,shortcut:`P`,run:()=>e.theme&&e.theme()},{group:`City`,label:`Next city profile`,shortcut:`C`,run:()=>e.city()},{group:`City`,label:`Shuffle city seed`,shortcut:`G`,run:()=>e.shuffle()},{group:`City`,label:`Inspect — follow a car/person/bird…`,shortcut:`I`,run:()=>e.inspect()},{group:`Office`,label:`Cycle office look (skin)`,shortcut:`J`,run:()=>e.officeSkin()},{group:`Office`,label:`Office props: painted ↔ live 3D`,shortcut:`U`,run:()=>e.officeProps()},{group:`World editor`,label:`Toggle ✎ Sculpt editor`,shortcut:``,run:()=>e.sculpt&&e.sculpt()},{group:`World editor`,label:`New random world`,shortcut:`G`,run:()=>e.worldReroll&&e.worldReroll()},{group:`World editor`,label:`Reset world (discard edits)`,shortcut:``,run:()=>e.worldReset&&e.worldReset()},{group:`World editor`,label:`Cycle biome preset`,shortcut:``,run:()=>e.worldPreset&&e.worldPreset()},{group:`World editor`,label:`Undo last edit`,shortcut:`Z`,run:()=>e.worldUndo&&e.worldUndo()},{group:`World editor`,label:`Export world (JSON file)`,shortcut:``,run:()=>e.exportWorld&&e.exportWorld(`my-world`)},{group:`World editor`,label:`Copy share link`,shortcut:``,run:()=>e.shareLink&&e.shareLink()},{group:`View`,label:`Hide / show controls`,shortcut:`M`,run:()=>ot()},{group:`View`,label:`Show all keyboard shortcuts`,shortcut:``,run:()=>o.classList.add(`open`)}]}),Be=s(`⌘K`,()=>ze.open(),`Command palette — run anything (⌘K / Ctrl-K)`),Ve=c([[`City`,`city`,()=>e.mode(`city`)],[`World`,`world`,()=>e.mode(`world`)],[`Office`,`office`,()=>e.mode(`office`)],[`Hoard`,`hoard`,()=>e.mode(`hoard`)]]);Ve.btns[0].title=`City — the living skyline`,Ve.btns[1].title=`World — the procedural terrain editor`,Ve.btns[2].title=`Office — dive into the building`,Ve.btns[3].title=`Hoard — the survival game`;let He=document.createElement(`div`);He.className=`vui-more`;let Ue=s(`More`,()=>{He.classList.toggle(`open`),st()},`More controls`);if(r){a.append(Ve.seg,S,ke,q.seg,Be,Ue,Re);let e=document.createElement(`div`);e.style.cssText=`display:flex;align-items:center;gap:6px;`,e.append(je,Y),He.append(d,f,K,T,ne,E,D,h,g,Me,Ne,y,x,Ee,De,Ie.seg,e)}else a.append(Ve.seg,ht(),d,f,y,x,S,ht(),T,ne,E,D,ht(),q.seg,K,Ee,De,ht(),Ae,Fe,ht(),Ie.seg,Be,Le,ht(),Re),Pe.append(ke,h,g,Me,Ne);let We=document.createElement(`div`);We.className=`vui-inspect`;let Ge=document.createElement(`div`);Ge.className=`ik`;let Ke=document.createElement(`div`);Ke.className=`it`;let qe=document.createElement(`div`);qe.className=`ii`;let Je=document.createElement(`div`);Je.className=`ir`;let Ye=s(`▸ Next`,()=>e.inspectNext&&e.inspectNext(),`Follow the next object (Tab)`),Xe=s(`✕`,()=>e.inspect(),`Exit inspect (Esc)`);Je.append(Ye,Xe),We.append(Ge,Ke,qe,Je);let Ze=document.createElement(`button`);Ze.className=`vui-show`,Ze.innerHTML=`⌃ Controls`,Ze.title=`Show controls (M)`,Ze.addEventListener(`click`,()=>at(!1));let Qe=document.createElement(`div`);Qe.className=`vui-style`,a.setAttribute(`role`,`toolbar`),a.setAttribute(`aria-label`,`Global controls`),O.setAttribute(`role`,`toolbar`),O.setAttribute(`aria-label`,`Tools`),O.setAttribute(`aria-orientation`,`vertical`),j.setAttribute(`role`,`group`),j.setAttribute(`aria-label`,`Tool properties`),H.setAttribute(`role`,`group`),H.setAttribute(`aria-label`,`Save and load worlds`);let X=document.createElement(`div`);X.className=`vui-live`,X.setAttribute(`role`,`status`),X.setAttribute(`aria-live`,`polite`),document.body.append(o,He,a,Ze,Qe,We,O,j,H,X,Pe);let Z=n,$e=null,et=null;if(r&&Z){$e=document.createElement(`div`),$e.className=`vui-sheet`,$e.setAttribute(`role`,`group`),$e.setAttribute(`aria-label`,`Editor tools and properties`);let e=document.createElement(`button`);e.className=`vui-sheet-grip`,e.title=`Expand / collapse`,e.setAttribute(`aria-label`,`Expand or collapse the editor sheet`),e.setAttribute(`aria-expanded`,`true`);let t=document.createElement(`div`);t.className=`vui-sheet-title`,t.textContent=`✎ Editor`;let n=document.createElement(`div`);n.className=`vui-sheet-tools`;let r=document.createElement(`div`);r.className=`vui-sheet-body`,n.append(O),r.append(j),$e.append(e,t,n,r),e.addEventListener(`click`,()=>{navigator.vibrate?.(8);let t=$e.classList.toggle(`peek`);e.setAttribute(`aria-expanded`,String(!t))}),document.body.append($e),et=document.createElement(`button`),et.className=`vui-fab on`,et.textContent=`⌘K`,et.title=`Command palette`,et.setAttribute(`aria-label`,`Open the command palette`),et.addEventListener(`click`,()=>{navigator.vibrate?.(10),ze.open()}),document.body.append(et)}let tt=!1;at(r);let nt=null;function rt(){let e=t();q.btns.forEach(t=>t.classList.toggle(`on`,t.dataset.val===e.post)),Ee.classList.toggle(`on`,!!e.vector),Ie.btns.forEach(t=>t.classList.toggle(`on`,t.dataset.val===e.cam)),h.textContent=p[e.weather]||`Clear`,h.classList.toggle(`on`,e.weather!==`clear`),g.textContent=m[e.season]||`Spring`,g.classList.toggle(`on`,(e.season||0)>0),_.textContent=e.office?`Exit`:`Office`,_.classList.toggle(`on`,!!e.office),y.textContent=v[e.officeSkin]||`Skin`,y.classList.toggle(`on`,e.officeSkin&&e.officeSkin!==`3d`),x.textContent=b[e.officeProps]||`Props`,x.classList.toggle(`on`,e.officeProps===`painted`&&e.officeSkin&&e.officeSkin!==`3d`),ke.textContent=e.auto?`❚❚`:`▶`,ke.classList.toggle(`on`,e.auto),De.textContent=J[e.era]||`Era`,De.classList.toggle(`on`,e.era&&e.era!==`native`),S.textContent=e.inspect?`Exit`:`Inspect`,S.classList.toggle(`on`,!!e.inspect),w.textContent=e.world?`Exit`:`World`,w.classList.toggle(`on`,!!e.world),E.textContent=C[e.worldPreset]||`Valley`,T.style.display=e.world?``:`none`,ne.style.display=e.world?``:`none`,E.style.display=e.world?``:`none`,D.style.display=e.world?``:`none`;let n=e.currentMode,r=n===`city`,i=n===`world`,a=n===`office`,o=r||i,s=e.audienceModes||[`city`,`world`,`office`,`hoard`];Ve.btns.forEach(e=>{let t=e.dataset.val;e.style.display=s.includes(t)?``:`none`,e.classList.toggle(`on`,t===n)}),d.style.display=r?``:`none`,f.style.display=r?``:`none`,S.style.display=r?``:`none`,y.style.display=a?``:`none`,x.style.display=a?``:`none`,h.style.display=o?``:`none`,g.style.display=o?``:`none`;let c=i?e.sculpt?`World editor — editing`:`World`:a?`Office`:n===`hoard`?`Hoard`:`City`;c!==nt&&(nt=c,X.textContent=`${c} mode — controls updated`),Me.classList.toggle(`on`,!!e.shadows),Ne.classList.toggle(`on`,!!e.theme),D.classList.toggle(`on`,!!e.sculpt),A(e.tools),O.classList.toggle(`open`,!!e.sculpt),k&&k.forEach(t=>t.classList.toggle(`on`,t.dataset.id===e.editTool)),j.classList.toggle(`open`,!!e.sculpt),$e&&$e.classList.toggle(`on`,!!e.sculpt);let l=e.editTool,u=l===`paint`,re=l===`scatter`,V=l===`place`,pe=l===`sculpt`;M.textContent={place:`✚ Place`,sculpt:`⛰ Sculpt`,paint:`🎨 Paint`,scatter:`🌲 Objects`,select:`◳ Select`}[l]||`Editor`,N.style.display=l===`select`?`none`:``,F.style.display=pe?``:`none`,L.style.display=re?``:`none`,oe(e.materials),ae.style.display=u?``:`none`,z&&z.forEach((t,n)=>t.classList.toggle(`on`,n===e.material)),ce(e.scatterKinds),se.style.display=re?``:`none`,B&&B.forEach(t=>t.classList.toggle(`on`,t.dataset.key===e.scatterType)),de(e.entityKinds),le.style.display=V?``:`none`,ue&&ue.forEach(t=>t.classList.toggle(`on`,t.dataset.key===e.entityKind)),fe.seg.style.display=V?``:`none`,fe.btns.forEach(t=>t.classList.toggle(`on`,t.dataset.val===String(e.dropN))),R.style.display=re||V||pe?``:`none`,R.textContent=V?e.sculptRaise?`➕ Place`:`🗑 Delete`:re?e.sculptRaise?`➕ Add`:`➖ Erase`:e.sculptRaise?`↑ Raise`:`↓ Lower`,te.disabled=!e.canUndo,te.style.opacity=e.canUndo?``:`0.45`,ie.classList.toggle(`on`,!!e.scatterHidden),P.value=String(e.brushRadius),I.value=String(e.brushStrength),ee.value=String(e.brushDensity),H.classList.toggle(`open`,!!e.sculpt);let me=e.saveSlots||[],ge=me.join(`,`);if(ge!==U){U=ge,he.innerHTML=``;let e=document.createElement(`option`);e.value=``,e.textContent=me.length?`— ${me.length} saved —`:`— no saves —`,he.append(e);for(let e of me){let t=document.createElement(`option`);t.value=e,t.textContent=e,he.append(t)}}xe.textContent=e.saveStatus||``,K.classList.toggle(`on`,!!e.realistic),Oe||(Y.value=String(e.t))}rt();let it=setInterval(rt,200);function at(e){if(!Z){a.style.display=`none`,Ze.classList.remove(`on`),o.classList.remove(`open`),He.classList.remove(`open`),Qe.classList.remove(`on`);return}tt=e,a.style.display=e?`none`:`flex`,Ze.classList.toggle(`on`,e),e&&(o.classList.remove(`open`),He.classList.remove(`open`),Qe.classList.remove(`on`))}function ot(){at(!tt)}function st(){if(!He.classList.contains(`open`))return;let e=a.getBoundingClientRect();He.style.top=Math.round(e.bottom+8)+`px`,He.style.bottom=`auto`}let ct=()=>st();window.addEventListener(`resize`,ct);let lt=null,ut=null;function dt(e){if(!Z||tt){Qe.classList.remove(`on`),lt=null;return}if(!e){Qe.classList.remove(`on`),lt=``;return}e!==lt&&(lt=e,Qe.textContent=e,Qe.classList.add(`on`),clearTimeout(ut),ut=setTimeout(()=>Qe.classList.remove(`on`),2e3))}let ft=null;function pt(e){if(!Z||!e){We.classList.remove(`open`),ft=null;return}let t=e.hint?`hint:${e.hint}`:`${e.kind}|${e.info}`;t!==ft&&(ft=t,e.hint?(Ge.textContent=`INSPECT`,Ke.textContent=`Free-fly`,qe.textContent=e.hint,Ye.style.display=``):(Ge.textContent=e.kind,Ke.textContent=e.label||e.kind,qe.textContent=e.info||``,Ye.style.display=``),We.classList.add(`open`))}[a,o,He,Ze,Qe,We,O,j,H,Pe,$e,i].forEach(e=>e&&e.querySelectorAll&&e.querySelectorAll(`button[title]:not([aria-label])`).forEach(e=>e.setAttribute(`aria-label`,e.title)));function mt(e){X&&e&&(X.textContent=``,X.textContent=String(e))}return{toggle:ot,setHidden:at,refresh:rt,setStyleHint:dt,setInspect:pt,announce:mt,destroy(){clearInterval(it),window.removeEventListener(`resize`,ct),a.remove(),o.remove(),He.remove(),Ze.remove(),Qe.remove(),We.remove(),O.remove(),j.remove(),H.remove(),X.remove(),Pe.remove(),$e&&$e.remove(),et&&et.remove(),ze.destroy(),i.remove(),clearTimeout(ut)}};function ht(){let e=document.createElement(`div`);return e.className=`sep`,e}}var Ji=`lgr_hints_`,Yi=!1;function Xi(){if(Yi||typeof document>`u`)return;Yi=!0;let e=document.createElement(`style`);e.textContent=`
  /* L97: anchor the first-run coachmark to the BOTTOM-LEFT corner (an edge hint), not floating in the centre of
     the now-clean canvas (the redesign moved the bar to the top, leaving the lower-centre empty). Still a
     transparent, click-through backdrop with the card dismissible (Got it / ✕ / Esc). */
  .lgr-hints { position: fixed; inset: 0; z-index: 40; display: flex; align-items: flex-end;
    justify-content: flex-start; padding: 0 16px 18px; pointer-events: none; opacity: 0; transition: opacity .3s ease; }
  .lgr-hints.on { opacity: 1; }
  .lgr-hints-card { pointer-events: auto; position: relative; max-width: 340px; width: 100%;
    background: rgba(16,18,24,0.93); border: 1px solid rgba(184,153,104,0.42); border-radius: 14px;
    padding: 15px 18px; color: #e8edf4; font: 13px/1.55 ui-monospace, monospace;
    box-shadow: 0 14px 44px rgba(0,0,0,0.55); }
  .lgr-hints-h { font: 700 15px/1 Georgia, serif; color: #b89968; letter-spacing: .06em; margin: 0 0 10px; }
  .lgr-hints-card ul { margin: 0 0 14px; padding-left: 18px; }
  .lgr-hints-card li { margin: 4px 0; }
  /* L104: gold-not-blue — the "Got it" button matches the one gold accent (was blue #3a7bd5; white-on-blue
     failed 4.5:1). Gold fill + dark ink ≈ 6.95:1, pairing with the card's existing #b89968 title/border. */
  .lgr-hints-ok { min-width: 44px; min-height: 40px; padding: 0 18px; border: 0; border-radius: 9px;
    background: #b89968; color: #1b1d24; font: 600 13px/1 ui-monospace, monospace; cursor: pointer;
    letter-spacing: .04em; transition: transform .08s ease, background .12s; }
  .lgr-hints-ok:hover { background: #cdab74; }
  .lgr-hints-ok:active { transform: scale(0.94); background: #e8c069; }
  .lgr-hints-x { position: absolute; top: 7px; right: 7px; min-width: 36px; min-height: 36px; border: 0;
    background: transparent; color: #8a93a3; font: 15px/1 ui-monospace, monospace; cursor: pointer;
    border-radius: 8px; transition: transform .08s ease; }
  .lgr-hints-x:active { transform: scale(0.9); }
  @media (prefers-reduced-motion: reduce) {
    .lgr-hints, .lgr-hints-ok, .lgr-hints-x { transition: none; }
  }`,document.head.appendChild(e)}function Zi({key:e,title:t=`Tips`,tips:n=[],force:r=!1}={}){let i={key:e,shown:!1,dismissed:!1,seen:!1};if(typeof window<`u`&&(window.__hints=i),typeof document>`u`||!e)return{dismiss(){},el:null};let a=Ji+e,o=!1;try{o=localStorage.getItem(a)===`1`}catch{}if(o&&!r)return i.seen=!0,{dismiss(){},el:null};Xi();let s=!!(window.matchMedia&&window.matchMedia(`(prefers-reduced-motion: reduce)`).matches),c=document.createElement(`div`);c.className=`lgr-hints`,c.innerHTML=`<div class="lgr-hints-card">
    <div class="lgr-hints-h">${t}</div>
    <ul>${n.map(e=>`<li>${e}</li>`).join(``)}</ul>
    <button class="lgr-hints-ok">Got it</button>
    <button class="lgr-hints-x" title="Dismiss (Esc)" aria-label="Dismiss">✕</button>
  </div>`,document.body.appendChild(c),i.shown=!0,s?c.classList.add(`on`):requestAnimationFrame(()=>c.classList.add(`on`));let l=!1;function u(e=!0){if(!l){if(l=!0,e)try{localStorage.setItem(a,`1`)}catch{}i.dismissed=!0,window.removeEventListener(`keydown`,d),c.classList.remove(`on`),setTimeout(()=>c.remove(),s?0:300)}}function d(e){e.key===`Escape`&&u(!0)}return window.addEventListener(`keydown`,d),c.querySelector(`.lgr-hints-ok`).addEventListener(`click`,()=>{navigator.vibrate?.(10),u(!0)}),c.querySelector(`.lgr-hints-x`).addEventListener(`click`,()=>{navigator.vibrate?.(10),u(!0)}),{dismiss:u,el:c}}var Qi=[{key:`telemetry`,label:`Telemetry`,d3:!1},{key:`perf`,label:`Perf HUD`,d3:!1},{key:`gforce`,label:`G-force / accel`,d3:!1},{key:`scrubber`,label:`Style-morph scrubber`,d3:!1},{key:`heading`,label:`Heading + trajectory`,d3:!0},{key:`ghost`,label:`Ghost trail`,d3:!0},{key:`worldgiz`,label:`World gizmos`,d3:!0},{key:`inspector`,label:`Entity inspector`,d3:!1}],$i=`lgr_dev_`,ea=90,ta=`
.lgr-dev-panel { position: fixed; left: 12px; top: 50%; transform: translateY(-50%); z-index: 9;
  background: rgba(10,12,16,0.92); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(184,153,104,0.4); border-radius: 12px; padding: 10px 12px; min-width: 188px;
  color: #d8dde6; font: 600 12px/1.4 ui-monospace, monospace; box-shadow: 0 8px 30px rgba(0,0,0,0.55); }
.lgr-dev-panel .dh { color: #e8c069; letter-spacing: .14em; font-size: 11px; margin: 0 0 8px; }
.lgr-dev-panel .dr { display: flex; align-items: center; gap: 8px; min-height: 30px; cursor: pointer; user-select: none; }
.lgr-dev-panel .dr input { width: 16px; height: 16px; accent-color: #b89968; cursor: pointer; }
.lgr-dev-ro { position: fixed; z-index: 9; background: rgba(10,12,16,0.86); border: 1px solid rgba(184,153,104,0.32);
  border-radius: 10px; padding: 8px 11px; color: #cdd3dc; font: 500 11px/1.5 ui-monospace, monospace;
  pointer-events: none; display: none; white-space: pre; box-shadow: 0 6px 22px rgba(0,0,0,0.5); }
.lgr-dev-ro.on { display: block; }
.lgr-dev-ro b { color: #e8c069; font-weight: 700; }
.lgr-dev-ro.tel { right: 12px; top: 76px; } .lgr-dev-ro.perf { right: 12px; top: 220px; }
.lgr-dev-ro.gforce { right: 12px; top: 360px; } .lgr-dev-ro.insp { right: 12px; top: 496px; }   /* L106: moved off the LEFT (was colliding with the toggle panel) into the right readout column */
.lgr-dev-bar { display: inline-block; height: 7px; background: #b89968; border-radius: 3px; vertical-align: middle; }
.lgr-dev-scrub { position: fixed; left: 50%; bottom: 64px; transform: translateX(-50%); z-index: 9; display: none;
  align-items: center; gap: 9px; background: rgba(10,12,16,0.9); border: 1px solid rgba(184,153,104,0.4);
  border-radius: 999px; padding: 8px 16px; color: #d8dde6; font: 600 11px/1 ui-monospace, monospace; }
.lgr-dev-scrub.on { display: flex; }
.lgr-dev-scrub input { width: 200px; accent-color: #b89968; }
.lgr-dev-scrub .lab { color: #e8c069; letter-spacing: .1em; }
`;function na({engine:e,getCraft:t=()=>null,getAxes:r=()=>({}),setPostMode:i=()=>{}}={}){if(typeof document>`u`||!e)return{update(){},destroy(){},setToy(){},get state(){return{}}};let a=e.scene,s=(e,t)=>{let n=document.createElement(e);return t&&(n.className=t),n},c={};Qi.forEach(e=>{let t=!1;try{t=localStorage.getItem($i+e.key)===`1`}catch{}c[e.key]=t});let l=s(`style`);l.textContent=ta,document.head.appendChild(l);let u=s(`div`,`lgr-dev-panel`);u.setAttribute(`role`,`group`),u.setAttribute(`aria-label`,`Developer mode toys`),u.appendChild(Object.assign(s(`div`,`dh`),{textContent:`⚙ DEV MODE`}));let d={};Qi.forEach(e=>{let t=s(`label`,`dr`),n=s(`input`);n.type=`checkbox`,n.checked=c[e.key],n.addEventListener(`change`,()=>L(e.key,n.checked)),t.append(n,document.createTextNode(` `+e.label)),u.appendChild(t),d[e.key]=n}),document.body.appendChild(u);let f=s(`div`,`lgr-dev-ro tel`),p=s(`div`,`lgr-dev-ro perf`),h=s(`div`,`lgr-dev-ro gforce`),g=s(`div`,`lgr-dev-ro insp`);document.body.append(f,p,h,g);let _=s(`div`,`lgr-dev-scrub`),v=s(`input`);v.type=`range`,v.min=`0`,v.max=`1`,v.step=`0.01`,v.value=`0`,v.setAttribute(`aria-label`,`Style morph — beauty to toon to pixel`);let y=s(`span`,`lab`);y.textContent=`BEAUTY`,v.addEventListener(`input`,()=>R(parseFloat(v.value))),_.append(Object.assign(s(`span`,`lab`),{textContent:`STYLE`}),v,y),document.body.appendChild(_);let b=new m;b.name=`lgr-dev-gizmos`,b.raycast=()=>{},a.add(b);let x=new le(new W(0,0,1),new W,3,16769712,.8,.5),S=new Float32Array(72),C=new xe(new M().setAttribute(`position`,new U(S,3)),new n({color:15253609,transparent:!0,opacity:.5})),w=new m;w.add(x,C),w.visible=!1,b.add(w);let T=new Float32Array(ea*3),E=0,D=0,O=new xe(new M().setAttribute(`position`,new U(new Float32Array(ea*3),3)),new n({color:8380671,transparent:!0,opacity:.55}));O.visible=!1,b.add(O);let k=new m;k.visible=!1,b.add(k);let A=new pe(6),j=new le(new W(0,1,0),new W(0,.2,0),10,16765567,1.4,.9),N=new ie(60,30,4871014,2765120);N.position.y=.02;let P=e.rig&&e.rig.camera?new F(e.rig.camera):null;k.add(A,j,N),P&&k.add(P),[x,C,O,A,j,N].forEach(e=>{e.raycast=()=>{}});function I(){f.classList.toggle(`on`,c.telemetry),p.classList.toggle(`on`,c.perf),h.classList.toggle(`on`,c.gforce),g.classList.toggle(`on`,c.inspector),_.classList.toggle(`on`,c.scrubber),w.visible=c.heading,O.visible=c.ghost,k.visible=c.worldgiz,P&&(P.visible=c.worldgiz)}function L(e,t){if(e in c){c[e]=t;try{localStorage.setItem($i+e,t?`1`:`0`)}catch{}d[e]&&(d[e].checked=t),e===`ghost`&&t&&(E=D=0),I()}}I();let ee=[`BEAUTY`,`TOON`,`PIXEL`];function R(e){let t=e<.34?0:e<.67?1:2;y.textContent=ee[t],i([2,8,7][t])}let te=new o,ne=new W,re=new W,ae=0,z=0,oe=0,se=e=>(e*180/Math.PI).toFixed(0),B=(e,t,n=46)=>`<span class="lgr-dev-bar" style="width:${Math.round(Math.abs(e)/t*n)}px"></span>`;function ce(n){let i=t(),a=i&&i.pilot?i.pilot.getTransform():null,o=e.pilot?e.pilot.telemetry:null,s=r()||{},l=++oe%6==0;if(a&&n>0){let e=(Math.abs(a.speed)-ae)/n;z+=(e-z)*Math.min(1,n*6),ae=Math.abs(a.speed)}if(c.telemetry&&l&&(a?(te.setFromQuaternion(a.quat,`YXZ`),f.innerHTML=`<b>TELEMETRY</b>\npos  ${a.x.toFixed(1)} ${a.y.toFixed(1)} ${a.z.toFixed(1)}\nalt  ${(o?o.altitude:0).toFixed(1)}   medium ${a.medium||`—`}\nhdg  ${se(a.yaw)}°   pitch ${se(te.x)}°  roll ${se(te.z)}°\nspd  ${Math.abs(a.speed).toFixed(1)} m/s   vY ${(a.vy||0).toFixed(1)}\nthr  ${B(s.throttle||0,1)} ${(s.throttle||0).toFixed(2)}\nstr  ${B(s.steer||0,1)} ${(s.steer||0).toFixed(2)}\nlft  ${B(s.lift||0,1)} ${(s.lift||0).toFixed(2)}`):f.innerHTML=`<b>TELEMETRY</b>
(no craft — press F to fly)`),c.perf&&l){let t=e.profiler?e.profiler.sample():null,n=typeof window<`u`&&window.__quality||null;if(t){let r=t.info||{};p.innerHTML=`<b>PERF</b>\nfps  ${t.fps}   cpu p95 ${t.cpuMs.p95}ms\ngpu  ${t.gpuMs==null?t.gpuTimer?`…`:`n/a`:t.gpuMs+`ms`}\ndraws ${r.calls||0}   tris ${((r.tris||0)/1e3).toFixed(0)}k\ngeo ${r.geo||0}  tex ${r.tex||0}  prog ${r.programs||0}\ngov  rung ${e.governor?e.governor.level:0}/${n?n.of:4}${t.leak?`  ⚠ LEAK`:``}`}else p.innerHTML=`<b>PERF</b>
(profiler idle)`}if(c.gforce&&l&&(h.innerHTML=`<b>G-FORCE</b>\naccel ${z>=0?`+`:``}${z.toFixed(1)} m/s²\ng     ${(z/9.81).toFixed(2)} g   ${B(z,12)}`),c.inspector&&l){let t=e.inspector&&e.inspector.focus||i;t&&(t.info||t.pilot)?g.innerHTML=`<b>INSPECT</b>\nkind  ${t.kind||t.label||`—`}\n${t.pilot?`pilot `+t.pilot.model+`
`:``}${typeof t.info==`function`?t.info():``}`+(a?`\nxyz  ${a.x.toFixed(1)} ${a.y.toFixed(1)} ${a.z.toFixed(1)}`:``):g.innerHTML=`<b>INSPECT</b>
(fly a craft, or use Inspect (I) to pick an entity)`}if(c.heading&&a){re.set(a.x,a.y,a.z);let e=Math.sin(a.yaw),t=Math.cos(a.yaw),n=a.speed||0;ne.set(e*n,a.vy||0,t*n);let r=Math.max(1.2,ne.length()*.8);x.position.copy(re),x.setDirection(ne.lengthSq()>1e-4?ne.clone().normalize():new W(e,0,t)),x.setLength(r,.7,.45);let i=C.geometry.attributes.position.array,o=0;for(let e=0;e<8;e++){let t=e/7*1.6;i[o++]=a.x+ne.x*t,i[o++]=a.y+ne.y*t,i[o++]=a.z+ne.z*t}C.geometry.attributes.position.needsUpdate=!0,C.geometry.setDrawRange(0,8)}if(c.ghost&&a){T[E*3]=a.x,T[E*3+1]=a.y,T[E*3+2]=a.z,E=(E+1)%ea,D=Math.min(ea,D+1);let e=O.geometry.attributes.position.array;for(let t=0;t<D;t++){let n=((E-D+t)%ea+ea)%ea;e[t*3]=T[n*3],e[t*3+1]=T[n*3+1],e[t*3+2]=T[n*3+2]}O.geometry.attributes.position.needsUpdate=!0,O.geometry.setDrawRange(0,D)}c.worldgiz&&(e.sunRig&&e.sunRig.sunArc&&j.setDirection(ne.copy(e.sunRig.sunArc).normalize()),P&&P.update())}function ue(){[u,f,p,h,g,_,l].forEach(e=>e&&e.remove()),a.remove(b),b.traverse(e=>{if(e.geometry&&e.geometry.dispose(),e.material){let t=e.material;(Array.isArray(t)?t:[t]).forEach(e=>e.dispose&&e.dispose())}})}return typeof window<`u`&&(window.__dev={get state(){return{...c}},setToy:L}),{update:ce,setToy:L,destroy:ue,get state(){return{...c}}}}var ra=`precision highp float;

varying vec2 vUv;

uniform sampler2D uA;
uniform sampler2D uB;
uniform float uT;
uniform vec2  uFocus;

void main() {
  
  float t = uT * uT * (3.0 - 2.0 * uT);

  
  
  float scale = mix(1.0, 0.32, t);
  vec2 aUv = uFocus + (vUv - uFocus) * scale;
  vec3 a = texture2D(uA, aUv).rgb;

  
  float bMix = smoothstep(0.40, 1.0, uT);
  vec3 b = texture2D(uB, vUv).rgb;

  
  vec3 col = mix(a, b, bMix);
  float v = 1.0 - smoothstep(0.2, 1.1, distance(vUv, vec2(0.5))) * (0.35 * (1.0 - abs(uT - 0.5) * 2.0));
  col *= v;

  gl_FragColor = vec4(col, 1.0);
}`;function ia({rate:e=4.6}={}){let t=new fe({vertexShader:zn,fragmentShader:ra,uniforms:{uA:{value:null},uB:{value:null},uT:{value:0},uFocus:{value:new i(.5,.5)}}}),n=`a`,r=0;function a(e,n){t.uniforms.uA.value=e,t.uniforms.uB.value=n}function o(e){return n===`a`?(e&&t.uniforms.uFocus.value.copy(e),n=`in`,!0):!1}function s(){return n!==`b`&&n!==`in`?!1:(n=`out`,!0)}function c(e){n=e===`b`?`b`:`a`,r=+(e===`b`),t.uniforms.uT.value=r}function l(i){return r+=(+(n===`b`||n===`in`)-r)*Math.min(1,i*e),n===`in`&&r>.992&&(r=1,n=`b`),n===`out`&&r<.008&&(r=0,n=`a`),t.uniforms.uT.value=r,n}return{material:t,setSources:a,enter:o,exit:s,update:l,snap:c,get mode(){return n},get t(){return r},get transitioning(){return n===`in`||n===`out`}}}var aa=null;function oa(){if(aa)return aa;let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return n.addColorStop(0,`rgba(0,0,0,0.60)`),n.addColorStop(.55,`rgba(0,0,0,0.32)`),n.addColorStop(1,`rgba(0,0,0,0.0)`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,128/2,0,Math.PI*2),t.fill(),aa=new de(e),aa.colorSpace=N,aa}function sa({w:e=.6,d:t=.6,x:n=0,y:r=.002,z:i=0,opacity:a=.5,rotation:o=0}={}){let s=new V(new ce(e,t),new d({map:oa(),transparent:!0,opacity:a,depthWrite:!1,toneMapped:!1}));return s.rotation.x=-Math.PI/2,s.rotation.z=o,s.position.set(n,r,i),s.renderOrder=-1,s.raycast=()=>{},s}function ca({yawLimit:e=80,pitchUp:t=32,pitchDown:n=20,sensitivity:r=.16,keySpeed:i=70,damp:a=9}={}){let o=Math.PI/180,s=(e,t,n)=>e<t?t:e>n?n:e,c=0,l=0,u=0,d=0;return{addDrag(i,a){u=s(u-i*r,-e,e),d=s(d-a*r,-n,t)},addKeys(r,{left:a,right:o,up:c,down:l}){let f=i*r;a&&(u=s(u+f,-e,e)),o&&(u=s(u-f,-e,e)),c&&(d=s(d+f,-n,t)),l&&(d=s(d-f,-n,t))},recenter(){u=0,d=0},update(e){let t=1-Math.exp(-a*e);c+=(u-c)*t,l+=(d-l)*t},get yaw(){return c*o},get pitch(){return l*o},get active(){return Math.abs(c)>.05||Math.abs(l)>.05}}}var la=null;function ua(){if(la)return la;let e=document.createElement(`canvas`);e.width=e.height=256;let t=e.getContext(`2d`),n=t.createRadialGradient(256/2,256/2,256*.32,256/2,256/2,256*.72);return n.addColorStop(0,`rgba(0,0,0,0)`),n.addColorStop(1,`rgba(0,0,0,1)`),t.fillStyle=n,t.fillRect(0,0,256,256),la=new de(e),la.colorSpace=N,la}function da({strength:e=.55,dist:t=.5}={}){let n=new V(new ce(1,1),new d({map:ua(),transparent:!0,opacity:e,depthTest:!1,depthWrite:!1,toneMapped:!1}));n.renderOrder=9999,n.raycast=()=>{},n.frustumCulled=!1;let r=new W;return n.fit=e=>{e.getWorldDirection(r),n.position.copy(e.position).addScaledVector(r,t),n.quaternion.copy(e.quaternion);let i=2*Math.tan(w.degToRad(e.fov)*.5)*t*1.05;n.scale.set(i*e.aspect,i,1)},n}export{ct as _,na as a,q as b,Hi as c,Ni as d,Pi as f,It as g,zn as h,ia as i,Bi as l,Ai as m,sa as n,Zi as o,Fi as p,da as r,qi as s,ca as t,ji as u,lt as v,Z as y};