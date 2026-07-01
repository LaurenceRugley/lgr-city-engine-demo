import{$ as e,A as t,B as n,C as r,D as i,E as a,F as o,G as s,H as c,I as l,J as u,K as d,L as f,M as p,N as m,O as h,P as g,Q as _,R as v,S as y,T as b,U as x,V as S,W as C,X as w,Y as T,Z as E,_ as D,a as O,at as k,b as A,c as j,ct as M,d as ee,dt as te,et as N,f as P,ft as F,g as I,h as L,i as ne,it as re,j as ie,k as R,l as ae,lt as z,m as oe,mt as B,n as se,nt as ce,o as V,ot as le,p as ue,pt as H,q as de,r as U,rt as fe,s as W,st as pe,t as me,tt as he,u as ge,ut as _e,v as ve,w as ye,x as be,y as xe,z as G}from"./three-Cd4EyEsF.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var Se=(e,t,n,r)=>e+(t-e)*(1-Math.exp(-n*r)),Ce=(e,t,n)=>e<t?t:e>n?n:e,we=Math.atan(1/Math.SQRT2),Te=Math.atan(.5),K=Math.PI/4,q={PERSPECTIVE:4,ISOMETRIC:5,DIMETRIC:6},Ee=8,J=.03,De=1.45,Oe=4,ke=40,Ae=1.5,je=16,Me=6,Ne=22,Pe=3.5,Fe=11,Ie=(e,t,n)=>Se(e,t,Ee,n),Y=(e,t)=>e+Math.PI*2*Math.round((t-e)/(Math.PI*2));function Le({aspect:e,fov:t=48,near:n=.1,far:r=100,target:i=new H(0,.8,0),azimuth:a=K,elevation:o=.52,distance:s=12,zoom:c=5.5}={}){let l=new T(t,e,n,r),u=new de(-1,1,1,-1,n,r),d=q.PERSPECTIVE,f=e,p={azimuth:a,elevation:o,distance:s,zoom:c,target:i.clone()},m={azimuth:a,elevation:o,distance:s,zoom:c,target:i.clone()},h=!1,g=null,_=new H,v=()=>d===q.PERSPECTIVE?l:u;function y(e){e!==d&&(d=e,d===q.ISOMETRIC||d===q.DIMETRIC?(p.elevation=d===q.ISOMETRIC?we:Te,p.azimuth=Y(K,m.azimuth),h=!0):h=!1)}function b(e,t){p.azimuth+=e,h||(p.elevation=G.clamp(p.elevation+t,J,De))}function x(e){d===q.PERSPECTIVE?p.distance=G.clamp(p.distance*e,Oe,ke):p.zoom=G.clamp(p.zoom*e,Ae,je)}function S(e,t){let n=p.azimuth,r=d===q.PERSPECTIVE?p.distance*.04:p.zoom*.08,i=new H(Math.cos(n),0,-Math.sin(n)),a=new H(-Math.sin(n),0,-Math.cos(n));p.target.addScaledVector(i,e*r),p.target.addScaledVector(a,t*r)}function C(e,t){f=e/t,l.aspect=f,l.updateProjectionMatrix()}function w(e){g&&(g(_),p.target.copy(_)),m.azimuth=Ie(m.azimuth,p.azimuth,e),m.elevation=Ie(m.elevation,p.elevation,e),m.distance=Ie(m.distance,p.distance,e),m.zoom=Ie(m.zoom,p.zoom,e),m.target.x=Ie(m.target.x,p.target.x,e),m.target.y=Ie(m.target.y,p.target.y,e),m.target.z=Ie(m.target.z,p.target.z,e);let t=Math.cos(m.elevation),n=Math.sin(m.elevation),r=Math.cos(m.azimuth),i=Math.sin(m.azimuth),a=v();if(a.position.set(m.target.x+m.distance*t*i,m.target.y+m.distance*n,m.target.z+m.distance*t*r),a.lookAt(m.target),a.isOrthographicCamera){let e=m.zoom,t=e*f;a.left=-t,a.right=t,a.top=e,a.bottom=-e,a.updateProjectionMatrix()}}function E(e,t,n,r=!1){p.target.set(e,t,n),r&&m.target.copy(p.target)}function D(e,t=!1){p.zoom=G.clamp(e,Ae,je),t&&(m.zoom=p.zoom)}function O(e,t=!1){p.azimuth=Y(e,m.azimuth),t&&(m.azimuth=p.azimuth)}function k(e,t=!1){p.elevation=G.clamp(e,J,De),t&&(m.elevation=p.elevation)}function A(e,{frame:t,snap:n=!1}={}){g=e,n&&(g(_),p.target.copy(_),m.target.copy(_)),t!=null&&(d===q.PERSPECTIVE?p.distance=G.clamp(t,Oe,ke):p.zoom=G.clamp(t,Ae,je))}function j(){g=null}return{get camera(){return v()},get mode(){return d},get azimuth(){return m.azimuth},get following(){return!!g},setTarget:E,setZoom:D,setFollow:A,clearFollow:j,setAzimuth:O,setElevation:k,get styleT(){return d===q.PERSPECTIVE?G.clamp((m.distance-Me)/(Ne-Me),0,1):G.clamp((m.zoom-Pe)/(Fe-Pe),0,1)},setMode:y,orbit:b,zoomBy:x,pan:S,setViewport:C,update:w}}var Re={value:0},ze={value:0},Be=new L(`#ffffff`),Ve={value:0},He={value:0},Ue={value:0},We=new F,Ge={value:0},Ke={value:0},qe=`
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
#include <shadowmask_pars_fragment>`)}var Qe=`col *= mix(1.0, getShadowMask(), uVecShadow);`;function X(e,{color:t,id:n,windowGlow:r,winColors:i=[`#ffb852`,`#8cd9ff`],litFrac:a=.55}={}){let o=[0,1,2].map(e=>new L(i[e]??i[i.length-1]));return e.customProgramCacheKey=()=>`lgr-vec-tower`,e.onBeforeCompile=e=>{Je(e),e.uniforms.uWindowGlow=r,e.uniforms.uWinId={value:n},e.uniforms.uVecColor={value:new L(t)},e.uniforms.uWinA={value:o[0]},e.uniforms.uWinB={value:o[1]},e.uniforms.uWinC={value:o[2]},e.uniforms.uWinLit={value:a},e.uniforms.uWinRecess=ze,e.vertexShader=Xe(e.vertexShader),e.fragmentShader=Ye(Ze(e.fragmentShader.replace(`#include <common>`,`#include <common>
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
        }`)))},e}function Z(e,{color:t=null,glow:n=null,glowDay:r=0,glowNight:i=1,windowGlow:a=null,season:o=!1}={}){let s=t===null,c=n!==null&&a!==null;return e.customProgramCacheKey=()=>`lgr-vec|`+(s?`d`:`c`)+(c?`g`:``)+(o?`s`:``),e.onBeforeCompile=e=>{Je(e),s||(e.uniforms.uVecColor={value:new L(t)}),c&&(e.uniforms.uGlow={value:new L(n)},e.uniforms.uGlowDay={value:r},e.uniforms.uGlowNight={value:i},e.uniforms.uWindowGlow=a),o&&(e.uniforms.uSeason=Ke),e.vertexShader=Xe(e.vertexShader);let l=s?`diffuseColor.rgb`:`uVecColor`,u=o?`seasonShift(${l})`:l,d=(s?``:`uniform vec3 uVecColor;
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
  gl_FragColor.rgb *= (1.0 - clamp(vAo, 0.0, 1.0) * uAoStrength);`)},e}function rt(e){let t=e>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function it(e){let t=rt(e);return{next:t,range:(e,n)=>e+(n-e)*t(),int:(e,n)=>e+Math.floor(t()*(n-e+1)),pick:e=>e[Math.floor(t()*e.length)],chance:e=>t()<e}}var at=new L,ot={h:0,s:0,l:0};function st(e,t){return at.set(e).getHSL(ot),ot.l=Math.max(.1,Math.min(.9,ot.l*(.78+t.next()*.14))),ot.h=(ot.h+(t.next()-.5)*.045+1)%1,ot.s=Math.min(1,ot.s*(.92+t.next()*.26)),at.setHSL(ot.h,ot.s,ot.l),`#`+at.getHexString()}var ct=[{key:`manhattan`,name:`Manhattan`,towers:[`#EDE3C8`,`#D9B98A`,`#B5562F`,`#A8C8E8`,`#2E3F5C`],ground:`#7CC455`,street:`#9AA0A6`,sidewalk:`#C8CCD0`,park:`#5DB347`,water:`#29A8D8`,shopfronts:[`#C04A3A`,`#3A7AC0`,`#C09A2A`],glass:`#7FA8CC`,winColors:[`#ffd27a`,`#9ad6ff`],hMax:4.6,sigma:.36,roofRate:.35,pSplit:.6,nightLit:.55,roofTint:null,coast:{base:.55,out:1,in:.6,jag:1.05},landmarks:[`empireState`,`chrysler`,`liberty`]},{key:`paris`,name:`Paris`,towers:[`#E8DCC0`,`#F2EAD6`,`#E0D2B4`],ground:`#8CC46A`,street:`#A8A29A`,sidewalk:`#D4CEC2`,park:`#6DB35A`,water:`#3FA8C8`,shopfronts:[`#C04A3A`,`#3A6B5A`,`#7A5AC0`],glass:`#5A6B7A`,winColors:[`#ffdca0`,`#ffcaa0`],hMax:1.5,sigma:.9,roofRate:.15,pSplit:.75,nightLit:.45,roofTint:`#6A7886`,coast:{base:1.05,out:.55,in:.3,jag:.5},landmarks:[`eiffel`,`arcDeTriomphe`,`sacreCoeur`]},{key:`neoTokyo`,name:`Neo-Tokyo`,towers:[`#2A3038`,`#3A4250`,`#252B36`,`#4A4456`],ground:`#3A4A42`,street:`#5A6068`,sidewalk:`#7A8088`,park:`#2E5E46`,water:`#0E6878`,shopfronts:[`#E8483A`,`#5AE8E0`,`#E85AA0`],glass:`#5AE8E0`,winColors:[`#5AE8E0`,`#E85AA0`,`#E8E06A`],hMax:5.2,sigma:.42,roofRate:.6,pSplit:.6,nightLit:.7,roofTint:null,coast:{base:.7,out:1.05,in:.62,jag:1.7},landmarks:[`tokyoTower`,`pagoda`,`neonBillboard`]}];ct.map(e=>e.key);var lt=.3,ut=1.9,dt=.55,ft=2.45,pt=.12,mt=.6,ht=6,gt={BASE:.7,OUT:.95,IN:.55,JAG:1,SAMPLES_PER_EDGE:28,HARBOR_DEPTH:.55,HARBOR_WIDTH:.26},_t={PLINTH_TOP:lt,BLOCK:ut,STREET:dt,PITCH:ft,SIDEWALK:pt,SHORE:mt,N:ht,COAST:gt};function vt(e,t,n){let r=n?.base??gt.BASE,i=n?.out??gt.OUT,a=n?.in??gt.IN,o=n?.jag??gt.JAG,s=t+r,c=it((e^789079)>>>0),l=[2,3,5,8,11,13].map(e=>({k:e,amp:1/e*o**((e-2)/6),phase:c.range(0,Math.PI*2)})),u=l.reduce((e,t)=>e+t.amp,0),d=e=>{let t=0;for(let n of l)t+=n.amp*Math.sin(n.k*e*Math.PI*2+n.phase);return Math.max(-1,Math.min(1,t/(u*.6)))},f=[{fix:+s,nx:1,nz:0,sign:1},{fix:+s,nx:0,nz:1,sign:-1},{fix:-s,nx:-1,nz:0,sign:-1},{fix:-s,nx:0,nz:-1,sign:1}],p=t+.22,m=gt.SAMPLES_PER_EDGE,h=4*m,g=[],_=0;for(let e=0;e<4;e++){let t=f[e];for(let n=0;n<m;n++,_++){let o=n/m,c=_/h,l=(-s+2*s*o)*t.sign,u=d(c),f=u>=0?u*i:u*a;if(e===0){let e=Math.abs(o-.5);if(e<gt.HARBOR_WIDTH){let t=.5+.5*Math.cos(e/gt.HARBOR_WIDTH*Math.PI);f-=(r+gt.HARBOR_DEPTH)*t}}let v,y;t.nx===0?(y=t.fix+t.nz*f,v=l,y=t.nz>0?Math.max(y,p):Math.min(y,-p)):(v=t.fix+t.nx*f,y=l,v=t.nx>0?Math.max(v,p):Math.min(v,-p)),g.push(new F(v,y))}}return{points:g,B:s,maxR:s+i,harborX:p}}function yt(e){(Array.isArray(e)?e:[e]).forEach(e=>e&&e.dispose&&e.dispose())}function bt({seed:e=1,profileIndex:t=0,landmarkFactory:n=null,windowGlow:a}){let o=new i,s=new i,l=new i;s.raycast=()=>{},l.raycast=()=>{},o.add(s,l);let u=new A(16773594,3);u.position.set(.45,.6,-.65).multiplyScalar(10);let d=new R(7313331,2762272,1);o.add(u,d);let f=0,p=[],m={seed:e,profileIndex:t,profile:ct[t],extent:0,meshCount:0};function h(e,t,n,r){let i=new c(new W(e,.04,t),Z(new C({color:r,roughness:.95,flatShading:!0}),{color:r}));return i.position.y=n,i.userData.ground=!0,i}function g(e,t){for(let e of s.children)e.geometry&&e.geometry.dispose(),yt(e.material);s.clear();for(let e of l.children)e.traverse(e=>{e.isMesh&&yt(e.material)});l.clear(),p.length=0,f=0;let i=it(e),a=ct[t],o=(ht-1)/2*ft,u=7.075;m={seed:e,profileIndex:t,profile:a,extent:u+(a.coast?.base??gt.BASE),meshCount:0};let d=vt(e,u,a.coast);m.coast=d;let g=new le;d.points.forEach((e,t)=>t?g.lineTo(e.x,e.y):g.moveTo(e.x,e.y)),g.closePath();let x=new c(new r(g,{depth:2,bevelEnabled:!1,steps:1}),Z(new C({color:a.ground,roughness:.9,flatShading:!0,side:2}),{color:a.ground}));x.rotation.x=-Math.PI/2,x.position.y=lt-2,x.userData.ground=!0,s.add(x);let w=2*7.195;s.add(h(w,w,.32,a.street)),b(d.harborX,a);let T=[];for(let e=0;e<ht;e++)for(let t=0;t<ht;t++)T.push([e,t]);let E=new Set,D=Math.max(1,Math.round(T.length*.08));for(;E.size<D;)E.add(i.int(0,T.length-1));let O=i.range(-2.45*.6,ft*.6),k=i.range(-2.45*.6,ft*.6),A=Math.hypot(o,o),j=[];if(T.forEach(([e,t],n)=>{let r=(e-(ht-1)/2)*ft,o=(t-(ht-1)/2)*ft;if(s.add(h(ut,ut,.32999999999999996,a.sidewalk).translateX(r).translateZ(o)),E.has(n)){s.add(h(ut-pt*2,ut-pt*2,.35,a.park).translateX(r).translateZ(o));let e=i.int(3,5);for(let t=0;t<e;t++)S(r+i.range(-.6,.6),o+i.range(-.6,.6),a,i);return}let c=ut-pt*2,l=i.chance(a.pSplit)?2:1,u=i.chance(a.pSplit)?2:1,d=c/l,f=c/u;for(let e=0;e<l;e++)for(let t=0;t<u;t++){let n=r-c/2+d*(e+.5),s=o-c/2+f*(t+.5),l=Math.max(.6,d-.1),u=Math.max(.6,f-.1),p=Math.hypot(n-O,s-k)/A,m=Math.exp(-(p*p)/(2*a.sigma*a.sigma)),h=Math.max(.5,.5+(a.hMax-.5)*m*i.range(.75,1.25));h>a.hMax*.5&&Math.min(l,u)>=.7&&j.push({lx:n,lz:s,fw:l,fd:u,h,r:p}),_(n,s,l,u,h,a,i)}}),n&&n.ready){j.sort((e,t)=>e.r-t.r);let e=[],t=a.landmarks;for(let r=0;r<t.length&&j.length;r++){let i=null;for(let t of j)if(e.every(e=>Math.hypot(e.lx-t.lx,e.lz-t.lz)>ft*.9)){i=t;break}i||=j[0],e.push(i),v(i.lx,i.lz);let o=a.hMax*n.heightFactor(t[r]),s=n.make(t[r],{x:i.lx,z:i.lz,w:i.fw,d:i.fd,h:o,plinthTop:lt});if(s){l.add(s);let e=new V().setFromObject(s);y(e.min.x-.15,e.max.x+.15,e.min.z-.15,e.max.z+.15)}}}s.traverse(e=>{e.isMesh&&(e.userData.ground?(e.castShadow=!1,e.receiveShadow=!0):e.material&&e.material.isMeshBasicMaterial?(e.castShadow=!1,e.receiveShadow=!1):(e.castShadow=!0,e.receiveShadow=!0))}),l.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),m.meshCount=s.children.length+l.children.length;let M=0;for(let e of s.children){let t=e.position;M=(Math.imul(M,16777619)^(Math.round(t.x*100)*2654435761^Math.round(t.y*100)*40503^Math.round(t.z*100)*2246822519))>>>0}for(let e of m.coast.points)M=(Math.imul(M,16777619)^(Math.round(e.x*100)*2654435761^Math.round(e.y*100)*40503))>>>0;m.sig=M,window.__city={seed:e,profile:a.key,meshes:m.meshCount,sig:M}}function _(e,t,n,r,i,o,l){let u=X(new C({flatShading:!0,roughness:.7,metalness:.05,envMapIntensity:.3}),{color:st(l.pick(o.towers),l),id:++f,windowGlow:a,winColors:o.winColors,litFrac:o.nightLit}),d=new c(new W(n,i,r),u);if(d.position.set(e,lt+i/2,t),d.userData.lot=[e,t],s.add(d),o.roofTint){let a=Z(new C({color:o.roofTint,roughness:.85,flatShading:!0}),{color:o.roofTint}),l=new c(new W(n*1.02,.08,r*1.02),a);l.position.set(e,lt+i+.04,t),l.userData.lot=[e,t],s.add(l)}if(i<1.4){let i=l.pick(o.shopfronts),a=new c(new W(n*1.04,.18,r*1.04),Z(new C({color:i,roughness:.8,flatShading:!0}),{color:i}));a.position.set(e,.39,t),a.userData.lot=[e,t],s.add(a)}let m=lt+i,h=n,g=r;if(i>o.hMax*.5&&l.chance(.55)){let u=n*l.range(.5,.72),d=r*l.range(.5,.72),p=i*l.range(.18,.4),_=new c(new W(u,p,d),X(new C({flatShading:!0,roughness:.7,metalness:.05,envMapIntensity:.3}),{color:st(l.pick(o.towers),l),id:++f,windowGlow:a,winColors:o.winColors,litFrac:o.nightLit}));_.position.set(e,lt+i+p/2,t),_.userData.lot=[e,t],s.add(_),m=lt+i+p,h=u,g=d}if(i>o.hMax*.45&&l.chance(o.roofRate)){let n=l.chance(.5)?new c(new W(h*.4,.18,g*.4),Z(new C({color:`#9a9a9a`,flatShading:!0}),{color:`#9a9a9a`})):new c(new D(h*.18,h*.18,.22,10),Z(new C({color:`#b9bec4`,flatShading:!0}),{color:`#b9bec4`}));if(n.position.set(e+l.range(-.1,.1),m+.11,t+l.range(-.1,.1)),n.userData.lot=[e,t],s.add(n),l.chance(.25)){let n=new c(new M(.05,6,5),new x({color:`#ff3b30`,transparent:!0,opacity:1}));n.position.set(e,m+.15,t),n.userData.lot=[e,t],n.raycast=()=>{},s.add(n),p.push({mesh:n,phase:l.range(0,6.28)})}}if(i>o.hMax*.7&&l.chance(.35)){let n=i*l.range(.18,.34),r=new c(new D(.018,.05,n,6),Z(new C({color:`#c8ccd2`,flatShading:!0}),{color:`#c8ccd2`}));r.position.set(e,m+n/2,t),r.userData.lot=[e,t],r.raycast=()=>{},s.add(r)}}function v(e,t){for(let n=s.children.length-1;n>=0;n--){let r=s.children[n];r.userData.lot&&Math.abs(r.userData.lot[0]-e)<1e-4&&Math.abs(r.userData.lot[1]-t)<1e-4&&(r.geometry&&r.geometry.dispose(),yt(r.material),s.remove(r))}for(let e=p.length-1;e>=0;e--)p[e].mesh.parent||p.splice(e,1)}function y(e,t,n,r){for(let i=s.children.length-1;i>=0;i--){let a=s.children[i];a.userData.lot&&a.position.x>=e&&a.position.x<=t&&a.position.z>=n&&a.position.z<=r&&(a.geometry&&a.geometry.dispose(),yt(a.material),s.remove(a))}}function b(e,t){let n=Z(new C({color:`#7a5634`,roughness:.95,flatShading:!0}),{color:`#7a5634`}),r=(e,t,r,i)=>{let a=new c(new W(e,.06,t),n);a.position.set(r,lt-.16,i),s.add(a)};r(.24,2,e+.02,0),r(1.3,.22,e+.7,-.72),r(1.3,.22,e+.7,.72)}function S(e,t,n,r){let i=new L(n.park),a=(n,a)=>{let o=i.clone().offsetHSL(0,0,r.range(-.06,.06)).getStyle(),l=new c(new M(n,7,6),Z(new C({color:o,flatShading:!0}),{color:o,season:!0}));l.scale.y=.7,l.position.set(e,lt+a,t),l.userData.lot=null,s.add(l)},o=new c(new W(.05,.18,.05),Z(new C({color:`#6b4a2a`,flatShading:!0}),{color:`#6b4a2a`}));o.position.set(e,.39,t),s.add(o),a(.22,.28),a(.16,.46)}function w(e){for(let t of p)t.mesh.material.opacity=.35+.65*(.5+.5*Math.sin(e*3+t.phase))}return g(e,t),{group:o,key:u,fill:d,update:w,generate:g,get state(){return m},get extent(){return m.extent},get waterColor(){return m.profile.water},profiles:ct}}var xt=Math.PI*2,St=.7,Ct=90,wt=[{name:`night`,sun:`#4a6f9e`,intensity:.35,hemiSky:`#26344f`,hemiGround:`#0c1018`,horizon:`#1e2942`,sky:`#36486e`,exposure:.95,outline:`#101a30`,window:1,toonGain:2.6,turbidity:3,rayleigh:1,mie:.004,mieG:.75,gradeTint:`#cfd8ec`,gradeSat:.84,gradeLift:`#05070e`,gradeContrast:1},{name:`dawn`,sun:`#ff9e54`,intensity:2.4,hemiSky:`#8a7686`,hemiGround:`#2a1f1a`,horizon:`#b8512c`,sky:`#ffb070`,exposure:1.05,outline:`#241826`,window:.3,toonGain:2,turbidity:6,rayleigh:3,mie:.025,mieG:.86,gradeTint:`#ffe6cf`,gradeSat:1.05,gradeLift:`#0a0603`,gradeContrast:1.04},{name:`noon`,sun:`#fff4e0`,intensity:4.6,hemiSky:`#9cb8cc`,hemiGround:`#33302a`,horizon:`#5e7689`,sky:`#aacadd`,exposure:1.18,outline:`#0b0a08`,window:0,toonGain:1.7,turbidity:1.6,rayleigh:2.9,mie:.005,mieG:.78,gradeTint:`#d6e6f4`,gradeSat:1.34,gradeLift:`#000000`,gradeContrast:1.26},{name:`dusk`,sun:`#ff6b35`,intensity:2,hemiSky:`#7a566a`,hemiGround:`#281a18`,horizon:`#b0432a`,sky:`#ff8a5a`,exposure:1.05,outline:`#1f1420`,window:.72,toonGain:2,turbidity:7,rayleigh:3.2,mie:.028,mieG:.87,gradeTint:`#ffdcc0`,gradeSat:1.06,gradeLift:`#0c0604`,gradeContrast:1.05}],Tt=e=>e-Math.floor(e),Et=(e,t,n)=>e+(t-e)*n,Dt=(e,t,n)=>e+(t-e)*(1-Math.exp(-6*n));function Ot({t:e=.5}={}){let t=e,n=e,r=!1,i=!1,a=wt.map(e=>({name:e.name,sun:new L(e.sun),hemiSky:new L(e.hemiSky),hemiGround:new L(e.hemiGround),horizon:new L(e.horizon),sky:new L(e.sky),outline:new L(e.outline),intensity:e.intensity,exposure:e.exposure,window:e.window,toonGain:e.toonGain,turbidity:e.turbidity,rayleigh:e.rayleigh,mie:e.mie,mieG:e.mieG,gradeTint:new L(e.gradeTint),gradeLift:new L(e.gradeLift),gradeSat:e.gradeSat,gradeContrast:e.gradeContrast})),o=new H(0,1,0),s=new L(`#fff4e0`),c=new L(`#6f97b3`),l=new L(`#2a2620`),u=new L(`#3a4a57`),d=new L(`#7da3bd`),f=new L(`#0b0a08`),p=new L(`#000000`),m=3,h=1,g=0,_=1.7,v={turbidity:2.2,rayleigh:1.3,mie:.005,mieG:.78},y={tint:new L(`#fafdff`),lift:new L(`#000000`),sat:1.08,contrast:1},b=new H;function x(e){let t=Tt(e)*4,n=Math.floor(t)%4,r=(n+1)%4,i=t-Math.floor(t),x=a[n],S=a[r];s.lerpColors(x.sun,S.sun,i),c.lerpColors(x.hemiSky,S.hemiSky,i),l.lerpColors(x.hemiGround,S.hemiGround,i),u.lerpColors(x.horizon,S.horizon,i),d.lerpColors(x.sky,S.sky,i),f.lerpColors(x.outline,S.outline,i),m=Et(x.intensity,S.intensity,i),h=Et(x.exposure,S.exposure,i),g=Et(x.window,S.window,i),_=Et(x.toonGain,S.toonGain,i),v.turbidity=Et(x.turbidity,S.turbidity,i),v.rayleigh=Et(x.rayleigh,S.rayleigh,i),v.mie=Et(x.mie,S.mie,i),v.mieG=Et(x.mieG,S.mieG,i),y.tint.lerpColors(x.gradeTint,S.gradeTint,i),y.lift.lerpColors(x.gradeLift,S.gradeLift,i),y.sat=Et(x.gradeSat,S.gradeSat,i),y.contrast=Et(x.gradeContrast,S.gradeContrast,i),p.setRGB(.045*g,.075*g,.14*g);let C=Tt(e)*xt-Math.PI/2,w=Math.cos(C),T=Math.sin(C);b.set(w,T*Math.cos(St),T*Math.sin(St)),b.y>=0?o.copy(b):o.copy(b).negate()}return x(t),{sunDir:o,sunColor:s,hemiSky:c,hemiGround:l,horizon:u,sky:d,outline:f,toonFloor:p,skyParams:v,grade:y,sunArc:b,get sunIntensity(){return m},get exposure(){return h},get windowGlow(){return g},get toonGain(){return _},get t(){return Tt(t)},get auto(){return r},get clock(){let e=Math.round(Tt(t)*24*60)%1440;return`${String(Math.floor(e/60)).padStart(2,`0`)}:${String(e%60).padStart(2,`0`)}`},cyclePreset(){n=(Math.floor(t*4+1e-4)+1)/4},nudge(e){n+=e/24},goTo(e){n=e},toggleAuto(){r=!r},setReducedMotion(e){i=e},update(e){r&&!i&&(n+=e/Ct),t=Dt(t,n,e),x(t)}}}function kt(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.35,`rgba(255,255,255,0.55)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new ge(e);return r.colorSpace=fe,r}function At(e,t){let n=[];for(let r=0;r<16;r++){let i=r/16*Math.PI*2;n.push(new H(Math.cos(i)*e,t,Math.sin(i)*e))}return new P(n,!0,`catmullrom`,.5)}function jt(e){let t=(t,n)=>Math.exp(-((e-t)*(e-t))/(2*n*n)),n=Math.max(t(.33,.05),t(.75,.06)),r=G.smoothstep(e,.24,.3)*(1-G.smoothstep(e,.8,.88));return G.clamp(.15+.55*r+.45*n,.12,1)}function Mt(){let{PITCH:e,N:t,PLINTH_TOP:n}=_t,r=t+1,i=n+.04,a=n=>(n-t/2)*e,o=t/2,s=[],c=(e,t)=>t*r+e;for(let e=0;e<r;e++)for(let t=0;t<r;t++)s.push({x:a(t),z:a(e),i:t,j:e,edges:[]});let l=[],u=(t,n)=>{let r=(s[t].i===o||s[t].j===o)&&(s[n].i===o||s[n].j===o),i=l.length;l.push({a:t,b:n,len:e,main:r}),s[t].edges.push(i),s[n].edges.push(i)};for(let e=0;e<r;e++)for(let t=0;t<r;t++)t<r-1&&u(c(t,e),c(t+1,e)),e<r-1&&u(c(t,e),c(t,e+1));return{nodes:s,edges:l,y:i,mid:o}}function Nt({plinthTop:t=.3,extent:n=4,profile:r=null}={}){let a=new i,o=Mt(),{nodes:s,edges:c}=o,l=o.y,u=.34,f=0;{let e=_t.PITCH-u*2;f=Math.max(1,Math.floor((e+.26)/.56))}let m=new x({color:`#e8c84a`,fog:!0}),h=new p(new W(.05,.012,.3),m,c.length*f);h.frustumCulled=!1,h.raycast=()=>{},h.receiveShadow=!1,h.castShadow=!1,a.add(h);{let e=new d,t=0;for(let n of c){let r=s[n.a],i=s[n.b],a=i.x-r.x,o=i.z-r.z,c=Math.hypot(a,o),d=a/c,p=o/c,m=Math.atan2(d,p),g=c-u*2;for(let n=0;n<f;n++){let i=u+(f===1?g/2:g*n/(f-1));e.position.set(r.x+d*i,l,r.z+p*i),e.rotation.set(0,m,0),e.updateMatrix(),h.setMatrixAt(t++,e.matrix)}}h.instanceMatrix.needsUpdate=!0}let g=new p(new W(.34,.26,.74),Z(new C({flatShading:!0,roughness:.5,metalness:.3})),12);g.castShadow=!0,g.receiveShadow=!1,g.frustumCulled=!1,g.raycast=()=>{};let v=new ae,y=new Float32Array(72),b=new Float32Array(72),S=new L(`#fff0c0`),w=new L(`#ff3528`);for(let e=0;e<12;e++)S.toArray(b,e*3),w.toArray(b,(12+e)*3),y[e*3+1]=-50,y[(12+e)*3+1]=-50;v.setAttribute(`position`,new j(y,3)),v.setAttribute(`color`,new j(b,3));let T=new e({size:.72,sizeAttenuation:!0,map:kt(),vertexColors:!0,transparent:!0,opacity:0,blending:2,depthWrite:!1}),E=new _(v,T);E.frustumCulled=!1,E.raycast=()=>{},a.add(g,E);let D=[`#f4c430`,`#c0392b`,`#d8dde2`,`#9aa7b4`,`#6b7785`,`#5a7d9a`],O=rt(2403557),k=c.map((e,t)=>t).filter(e=>c[e].main),A=[];for(let e=0;e<12;e++){let t=e<4&&k.length?k[O()*k.length|0]:O()*c.length|0,n=e===1;A.push({edge:t,fwd:O()<.5,s:O()*c[t].len,speed:n?.5:.78+e%3*.1,lenZ:n?1.45:1,color:D[n?1:e===0?0:2+e%4],rng:rt(12648430+e*2654435761),isBus:n,pos:new H,dirX:0,dirZ:1,active:!1})}let M=new L;A.forEach((e,t)=>g.setColorAt(t,M.set(e.color)));function te(e,t,n){let r=s[e],i=r.edges.filter(e=>e!==t);if(i.length===0)return t;let a=c[t],o=a.a===e?a.b:a.a,l=r.x-s[o].x,u=r.z-s[o].z,d=Math.hypot(l,u)||1,f=i[0],p=-2;for(let t of i){let n=c[t],i=n.a===e?n.b:n.a,a=s[i].x-r.x,o=s[i].z-r.z,m=Math.hypot(a,o)||1,h=l/d*(a/m)+u/d*(o/m);h>p&&(p=h,f=t)}return n()<.65?f:i[n()*i.length|0]}let N=te,P=new d,F=(e,t)=>{P.position.set(0,-50,0),P.scale.setScalar(0),P.updateMatrix(),e.setMatrixAt(t,P.matrix)},I=.085,ne=_t.PLINTH_TOP+.02+.13,re=new p(new ee(.04,.1,3,6),Z(new C({flatShading:!0,roughness:.8})),14);re.castShadow=!0,re.receiveShadow=!1,re.frustumCulled=!1,re.raycast=()=>{};let ie=At(n-.72,t),R=[];for(let e=0;e<14;e++)R.push({phase:e/14,speed:.12+e%4*.02,dir:e%2?1:-1,pos:new H,active:!1});let z=new H,oe=new H,B=new L;R.forEach((e,t)=>re.setColorAt(t,B.set([`#caa`,`#9ab`,`#bba`,`#ab9`][t%4]))),a.add(re);let se={manhattan:`#e8c84a`,paris:`#dcd2bc`,neoTokyo:`#5ae8e0`};function ce(e){e&&m.color.set(se[e.key]||`#e8c84a`)}ce(r);function V(e,n,r){let i=r?r.t:.5,a=r?r.windowGlow:0,o=Math.max(2,Math.round(jt(i)*12)),l=a>.05;for(let t=0;t<12;t++){if(t>=o){F(g,t),A[t].active=!1,y[t*3+1]=-50,y[(12+t)*3+1]=-50;continue}let n=A[t];n.s+=e*n.speed;let r=0;for(;n.s>=c[n.edge].len&&r++<4;){n.s-=c[n.edge].len;let e=n.fwd?c[n.edge].b:c[n.edge].a,t=N(e,n.edge,n.rng);n.edge=t,n.fwd=c[t].a===e}let i=c[n.edge],a=n.fwd?s[i.a]:s[i.b],u=n.fwd?s[i.b]:s[i.a],d=u.x-a.x,f=u.z-a.z,p=Math.hypot(d,f)||1,m=d/p,h=f/p,_=-h,v=m,b=a.x+m*n.s+_*I,x=a.z+h*n.s+v*I,S=Math.atan2(m,h);P.position.set(b,ne,x),P.rotation.set(0,S,0),P.scale.set(1,1,n.lenZ),P.updateMatrix(),g.setMatrixAt(t,P.matrix),n.pos.set(b,ne,x),n.dirX=m,n.dirZ=h,n.active=!0;let C=.74*n.lenZ*.5,w=ne+.06,T=t*3,E=(12+t)*3;l?(y[T]=b+m*(C+.04),y[T+1]=w,y[T+2]=x+h*(C+.04),y[E]=b-m*(C+.02),y[E+1]=w,y[E+2]=x-h*(C+.02)):(y[T+1]=-50,y[E+1]=-50)}g.instanceMatrix.needsUpdate=!0,v.attributes.position.needsUpdate=!0,T.opacity=G.clamp(a*1.8,0,1);let u=Math.max(2,Math.round(jt(i)*14));for(let e=0;e<14;e++){if(e>=u){F(re,e),R[e].active=!1;continue}let r=R[e],i=(r.phase+r.dir*r.speed*n*.02+1e3)%1;ie.getPointAt(i,z),ie.getTangentAt(i,oe);let a=Math.sin(n*6+r.phase*30)*.015;P.position.set(z.x,t+.09+a,z.z),P.rotation.set(0,Math.atan2(oe.x*r.dir,oe.z*r.dir),Math.sin(n*6+r.phase*30)*.06),P.scale.setScalar(1),P.updateMatrix(),re.setMatrixAt(e,P.matrix),r.pos.set(z.x,t+.09,z.z),r.active=!0}re.instanceMatrix.needsUpdate=!0}let le=[...A.map((e,t)=>({kind:`car`,label:e.isBus?`bus`:`car ${t+1}`,getWorldPos:t=>t.copy(e.pos),active:()=>e.active,info:()=>`${e.isBus?`bus`:`car`} · ${c[e.edge].main?`main avenue`:`side street`} → heading ${Pt(e.dirX,e.dirZ)}`})),...R.map((e,t)=>({kind:`person`,label:`person ${t+1}`,getWorldPos:t=>t.copy(e.pos),active:()=>e.active,info:()=>`person · strolling the waterfront promenade`}))];function ue(){return le}return{group:a,update:V,setProfile:ce,getFollowables:ue,graph:o,setRouter(e){N=e||te}}}function Pt(e,t){return[`N`,`NE`,`E`,`SE`,`S`,`SW`,`W`,`NW`][(Math.round(Math.atan2(e,t)/(Math.PI/4))%8+8)%8]}function Ft({frames:e,fps:t=8,cols:n,rows:r=1}={}){let i=n||e||4,a=r||1,o=e||i*a,s=typeof window<`u`&&window.matchMedia?window.matchMedia(`(prefers-reduced-motion: reduce)`):null;function c(e,t){let n=t%i,r=Math.floor(t/i);e.offset.x=n/i,e.offset.y=1-(r+1)/a}function l(e){let t=e.clone();return t.needsUpdate=!0,t.repeat.set(1/i,1/a),c(t,0),t}function u(e,n,r=0){if(s&&s.matches)return c(e,0),0;let i=(Math.floor(n*t+r)%o+o)%o;return c(e,i),i}function d(e,t){let n=(Math.round(t)%o+o)%o;return c(e,n),n}return{frames:o,fps:t,cols:i,rows:a,makeInstanceTexture:l,step:u,setFrame:d}}function It(e){if(typeof document>`u`||!e||!e.image)return e;let t=e.image,n=t.width||t.naturalWidth,r=t.height||t.naturalHeight,i=document.createElement(`canvas`);i.width=n,i.height=r;let a=i.getContext(`2d`,{willReadFrequently:!0});a.drawImage(t,0,0,n,r);let o=a.getImageData(0,0,n,r),s=o.data;for(let e=0;e<s.length;e+=4){let t=s[e]*.299+s[e+1]*.587+s[e+2]*.114|0;s[e]=s[e+1]=s[e+2]=t}a.putImageData(o,0,0);let c=new ge(i);return c.colorSpace=e.colorSpace||`srgb`,c}function Lt({url:e,fallback:t,luminance:n=!1,onReady:r}={}){let i=n?It(t):t;return e&&typeof window<`u`&&new te().load(e,e=>{e.colorSpace=fe,r&&r(n?It(e):e)},void 0,()=>{}),i}var Rt=``+new URL(`gull_diffusion_sheet-BMlUTLhu.png`,import.meta.url).href;function zt(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.4,`rgba(255,255,255,0.5)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new ge(e);return r.colorSpace=fe,r}function Bt(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64*.62,0,64/2,64*.62,64*.5);n.addColorStop(0,`rgba(240,250,255,0.95)`),n.addColorStop(1,`rgba(240,250,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new ge(e);return r.colorSpace=fe,r}function Vt(){let e=document.createElement(`canvas`);e.width=256,e.height=64;let t=e.getContext(`2d`);t.strokeStyle=`#ffffff`,t.lineWidth=6,t.lineCap=`round`,t.lineJoin=`round`;let n=[14,24,36,24];for(let e=0;e<4;e++){let r=e*64,i=n[e];t.beginPath(),t.moveTo(r+8,40),t.quadraticCurveTo(r+24,i,r+32,36),t.quadraticCurveTo(r+40,i,r+56,40),t.stroke()}let r=new ge(e);return r.colorSpace=fe,r}function Ht(e,t,n=18){let r=[];for(let i=0;i<n;i++){let a=i/n*Math.PI*2;r.push(new H(Math.cos(a)*e,t,Math.sin(a)*e))}return new P(r,!0,`catmullrom`,.5)}function Ut(e,t,n){let r=e-t,i=[],a=(e,t)=>i.push(new H(e,n,t)),o=(e,n,r,i,o=4)=>{for(let s=1;s<=o;s++){let c=r+(i-r)*(s/o);a(e+Math.cos(c)*t,n+Math.sin(c)*t)}};for(let t=0;t<4;t++)a(e,-r+2*r*t/4);o(r,r,0,Math.PI/2);for(let t=0;t<4;t++)a(r-2*r*t/4,e);o(-r,r,Math.PI/2,Math.PI);for(let t=0;t<4;t++)a(-e,r-2*r*t/4);o(-r,-r,Math.PI,1.5*Math.PI);for(let t=0;t<4;t++)a(-r+2*r*t/4,-e);return o(r,-r,1.5*Math.PI,2*Math.PI),new P(i,!0,`catmullrom`,.5)}function Wt({extent:t=8,waterSize:n=28,plinthTop:r=.3}={}){let a=new i;a.raycast=()=>{};let o=.06,s=(e,t,r)=>r.set(e/n+.5,-t/n+.5,0),l=[Ut(9.5,3,o),Ht(12.7,o),new P([new H(8.4,o,0),new H(11,o,-3.6),new H(13,o,0),new H(11,o,3.6)],!0,`catmullrom`,.5)],u=l.map(e=>e.getLength());function d({scale:e=1,hull:t=`#6b7785`,cabin:n=`#e7ecf2`}){let r=new i,a=new c(new W(.46*e,.2*e,1.1*e),Z(new C({color:t,roughness:.6,metalness:.2,flatShading:!0}),{color:t}));a.position.y=.02;let o=new c(new W(.3*e,.22*e,.42*e),Z(new C({color:n,roughness:.7,flatShading:!0}),{color:n}));return o.position.set(0,.18*e,.08*e),r.add(a,o),r.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!1),e.raycast=()=>{}}),r.userData.halfLen=.55*e,r}let f=[{laneIndex:0,dir:1,speed:.5,wake:.024,scale:1,hull:`#5a6675`,cabin:`#e7ecf2`},{laneIndex:1,dir:-1,speed:.42,wake:.022,scale:1,hull:`#7a5b46`,cabin:`#d9c3a6`},{laneIndex:0,dir:1,speed:.56,wake:.024,scale:.9,hull:`#456079`,cabin:`#cfe0ee`},{laneIndex:2,dir:1,speed:.34,wake:.03,scale:1.35,hull:`#39505f`,cabin:`#e2b85a`}];f.forEach((e,t)=>{e.mesh=d(e),e.u=t*.27%1,e.phase=t*1.7,e.isFerry=e.laneIndex===2,a.add(e.mesh)});let p=f.length,m=p*2,h=new ae,g=new Float32Array(m*3).fill(-50),v=new Float32Array(m*3),y=new L(`#fff0c0`),b=new L(`#ff3528`);for(let e=0;e<p;e++)y.toArray(v,e*3),b.toArray(v,(p+e)*3);h.setAttribute(`position`,new j(g,3)),h.setAttribute(`color`,new j(v,3));let x=new _(h,new e({size:.6,sizeAttenuation:!0,map:zt(),vertexColors:!0,transparent:!0,opacity:0,blending:2,depthWrite:!1}));x.frustumCulled=!1,x.raycast=()=>{},a.add(x);function S(e,t){let n=new c(new M(e,9,7),Z(new C({color:t,roughness:.5,flatShading:!0}),{color:t}));return n.scale.set(.55,.5,1),n.castShadow=!1,n.receiveShadow=!1,n.raycast=()=>{},n.position.y=-5,n}let w=[{x:-9.5,z:6,size:.18,color:`#5b6f86`,period:11,arcH:.55,span:1.1,whale:!1},{x:7.5,z:-9.5,size:.16,color:`#4a6076`,period:14,arcH:.5,span:1,whale:!1},{x:-7,z:-8.5,size:.2,color:`#607089`,period:9,arcH:.6,span:1.2,whale:!1},{x:10.5,z:7,size:.62,color:`#3a4350`,period:38,arcH:.9,span:2.6,whale:!0}];w.forEach((e,t)=>{e.mesh=S(e.size,e.color),e.heading=Math.atan2(-e.x,-e.z),e.t=t/w.length*e.period,e.splashed=!1,a.add(e.mesh),e.whale&&(e.spout=new z(new _e({map:Bt(),transparent:!0,opacity:0,depthWrite:!1,fog:!0})),e.spout.scale.set(.6,1.1,1),e.spout.position.set(e.x,-5,e.z),a.add(e.spout))});let T=Ft({frames:4,fps:7}),E=[`#ffffff`,`#cfd4da`,`#c8a06a`],D=[],O=Lt({url:Rt,fallback:Vt(),luminance:!0,onReady:e=>{O=e;for(let t of D){let n=t.sp.material.map;t.sp.material.map=T.makeInstanceTexture(e),t.sp.material.needsUpdate=!0,n&&n.dispose()}typeof window<`u`&&(window.__gullSheet=`diffusion`)}});for(let e=0;e<4;e++){let t=new z(new _e({map:T.makeInstanceTexture(O),color:new L(E[e%E.length]),transparent:!0,opacity:0,depthWrite:!1,fog:!0}));t.scale.setScalar(.5),D.push({sp:t,r:8.6+e*.5,y:1.1+e%2*.5,speed:(.18+e*.03)*(e%2?-1:1),phase:e*1.9}),a.add(t)}typeof window<`u`&&(window.__gullSheet=window.__gullSheet||`procedural`,window.__gullAnim={frames:T.frames,variants:E.length,fps:T.fps});let k=w.length,A=Array.from({length:p+k},()=>new H),ee=e=>e.laneIndex,te=new H,N=new H,F=new H;function I(e,t,n){let r=n?n.windowGlow:0,i=1-r;for(let n=0;n<p;n++){let i=f[n],a=l[i.laneIndex],c=u[i.laneIndex],d=i.isFerry?.45+.55*Math.min(1,Math.abs((i.u+.5)%1-.5)*3):1,m=i.u;i.u=(i.u+i.dir*e*i.speed*d/c+1)%1,(i.dir>0?i.u<m:i.u>m)&&(i.laneIndex=ee(i)),a.getPointAt(i.u,te),a.getTangentAt(i.u,N);let h=N.x*i.dir,_=N.z*i.dir,v=Math.atan2(h,_),y=Math.sin(t*1.1+i.phase)*.025;i.mesh.position.set(te.x,o+y,te.z),i.mesh.rotation.set(Math.sin(t*.9+i.phase)*.04,v,0);let b=i.mesh.userData.halfLen;s(te.x-h*b,te.z-_*b,F),A[n].set(F.x,F.y,i.wake);let x=n*3,S=(p+n)*3;if(r>.05){let e=.18;g[x]=te.x+h*(b+.05),g[x+1]=e,g[x+2]=te.z+_*(b+.05),g[S]=te.x-h*(b+.02),g[S+1]=e,g[S+2]=te.z-_*(b+.02)}else g[x+1]=-50,g[S+1]=-50}ne(),x.material.opacity=G.clamp(r*1.8,0,1);for(let t=0;t<k;t++){let n=w[t];n.t+=e;let r=p+t,i=n.whale?3.2:1.3;if(n.t>=n.period){let e=(n.t-n.period)/i;if(e>=1){n.t=0,n.splashed=!1,n.mesh.position.y=-5,n.spout&&(n.spout.material.opacity=0),A[r].set(0,0,0);continue}let t=Math.sin(Math.PI*e),a=(e-.5)*n.span,c=n.x+Math.sin(n.heading)*a,l=n.z+Math.cos(n.heading)*a;n.mesh.position.set(c,o-.1+t*n.arcH,l),n.mesh.rotation.set(Math.cos(Math.PI*e)*.9,n.heading,0);let u=e<.16||e>.84;if(s(c,l,F),A[r].set(F.x,F.y,u?n.whale?.07:.05:0),n.spout){let t=G.clamp((e-.15)*3,0,1)*(1-e);n.spout.position.set(c,.56+t*.6,l),n.spout.material.opacity=t*.9}}else n.mesh.position.y=-5,A[r].set(0,0,0),n.spout&&(n.spout.material.opacity=0)}for(let e=0;e<4;e++){let n=D[e],r=n.phase+t*n.speed*.25;n.sp.position.set(Math.cos(r)*n.r,n.y+Math.sin(t*1.4+n.phase)*.12,Math.sin(r)*n.r),n.sp.material.opacity=G.clamp(i*.9-.05,0,.85);let a=T.step(n.sp.material.map,t,n.phase);e===0&&typeof window<`u`&&(window.__gullFrame=a)}if(typeof window<`u`){let e=0;for(let t of w)t.mesh.position.y>o&&e++;window.__waterLife={boats:p,breaching:e,gulls:+D[0].sp.material.opacity.toFixed(2),lights:+x.material.opacity.toFixed(2)}}}function ne(){h.attributes.position.needsUpdate=!0}function re(){return A.length}let ie=[...f.map((e,t)=>({kind:`boat`,label:e.isFerry?`ferry`:`boat ${t+1}`,getWorldPos:t=>t.copy(e.mesh.position),info:()=>e.isFerry?`boat · harbor ferry → docks`:`boat · open-water lane ${e.laneIndex}`})),...D.map((e,t)=>({kind:`gull`,label:`gull ${t+1}`,getWorldPos:t=>t.copy(e.sp.position),active:()=>e.sp.material.opacity>.05,info:()=>`gull · circling the coast`})),...w.map((e,t)=>({kind:`fish`,label:e.whale?`whale`:`fish ${t+1}`,getWorldPos:t=>t.copy(e.mesh.position),active:()=>e.mesh.position.y>o-.3,info:()=>e.mesh.position.y>o?e.whale?`whale · breaching!`:`fish · breaching!`:`fish · below the surface`}))];function R(){return ie}return{group:a,update:I,getFollowables:R,wakeDrops:A,get wakeCount(){return re()},lanes:l,setRouter(e){ee=e||(e=>e.laneIndex)}}}var Gt=[`empireState`,`chrysler`,`liberty`,`eiffel`,`arcDeTriomphe`,`sacreCoeur`,`tokyoTower`,`pagoda`,`neonBillboard`],Kt={empireState:1.25,chrysler:1.1,liberty:.55,eiffel:3.2,arcDeTriomphe:1.5,sacreCoeur:1.75,tokyoTower:1.35,pagoda:.5,neonBillboard:.9};function qt(e){let t=()=>new C({flatShading:!0,roughness:.7,metalness:.1}),n=(n,r={})=>r.windows?X(t(),{color:n,id:e.id(),windowGlow:e.windowGlow,winColors:e.winColors,litFrac:e.litFrac}):Z(t(),{color:n,glow:r.glow??null,glowDay:r.glowDay??0,glowNight:r.glowNight??1,windowGlow:r.glow?e.windowGlow:null});return{box:(e,t,r,i,a={})=>new c(new W(e,t,r),n(i,a)),cyl:(e,t,r,i,a={})=>new c(new D(e,t,r,a.seg||12),n(i,a)),cone:(e,t,r,i={})=>new c(new I(e,t,i.seg||8),n(r,i)),sphere:(e,t,r={})=>new c(new M(e,r.seg||12,r.seg2||8),n(t,r)),lathe:(e,t,r={})=>new c(new m(e.map(e=>new F(e[0],e[1])),r.seg||4),n(t,r))}}var Q=(e,t,n,r)=>(e.position.set(t,n,r),e),Jt=[`#7FB0E0`,`#E07FB0`,`#7FE0A0`,`#E0C97F`,`#9FE07F`,`#7FE0E0`,`#FF8C42`,`#E0E07F`,`#C97FE0`,`#E07F7F`,`#7F9FE0`,`#E0483A`],Yt={empireState(e,t){let n=`#E8E0CF`;e.add(Q(t.box(.42,.18,.42,n,{windows:!0}),0,.09,0)),e.add(Q(t.box(.34,.16,.34,n,{windows:!0}),0,.26,0)),e.add(Q(t.box(.26,.14,.26,n,{windows:!0}),0,.41,0)),e.add(Q(t.box(.19,.34,.19,n,{windows:!0}),0,.65,0)),e.add(Q(t.box(.13,.06,.13,n,{windows:!0}),0,.85,0));let r=Jt[new Date().getMonth()];e.add(Q(t.cyl(.03,.045,.12,n,{seg:10,glow:r,glowNight:1.85}),0,.94,0)),e.add(Q(t.cone(.012,.07,n,{seg:8}),0,1.04,0))},chrysler(e,t){let n=`#C9CED4`;e.add(Q(t.box(.22,.55,.22,`#9AA7B4`,{windows:!0}),0,.275,0));let r=.55;for(let i=0;i<5;i++){let a=.14-i*.024,o=.07;e.add(Q(t.cyl(a*.7,a,o,n,{seg:8,glow:`#dfeaff`,glowNight:.5}),0,r+o/2,0)),r+=o}e.add(Q(t.cone(.018,.16,n,{seg:8}),0,r+.08,0))},liberty(e,t){let n=`#B9B4A6`,r=`#4FA890`;e.add(Q(t.box(.42,.16,.42,n),0,.08,0)),e.add(Q(t.box(.3,.2,.3,n),0,.26,0)),e.add(Q(t.cyl(.1,.15,.42,r,{seg:10}),0,.57,0)),e.add(Q(t.box(.11,.1,.11,r),0,.83,0));for(let n=0;n<7;n++){let i=(n/6-.5)*Math.PI*1.1;e.add(Q(t.cone(.012,.1,r,{seg:5}),Math.sin(i)*.1,.92,Math.cos(i)*.06-.02))}let i=Q(t.cyl(.025,.03,.34,r,{seg:8}),.14,.98,0);i.rotation.z=.35,e.add(i),e.add(Q(t.box(.06,.06,.06,r,{glow:`#ffd060`,glowDay:.6,glowNight:1.2}),.2,1.16,0)),e.add(Q(t.cone(.04,.09,`#ffcf66`,{seg:6,glow:`#ffd060`,glowDay:.7,glowNight:1.3}),.2,1.24,0))},eiffel(e,t){let n=`#6E5C4C`,r=[[.2,0],[.13,.16],[.085,.33],[.055,.5],[.035,.66],[.02,.85],[0,.92]];e.add(t.lathe(r,n,{seg:4}));let i=t.lathe(r,n,{seg:4});i.rotation.y=Math.PI/4,e.add(i),e.add(Q(t.box(.26,.025,.26,n),0,.33,0)),e.add(Q(t.box(.14,.02,.14,n),0,.66,0)),e.add(Q(t.cone(.01,.1,n,{seg:6}),0,.97,0))},arcDeTriomphe(e,t){let n=`#D9D0C1`,i=.58,a=.5,o=.34,s=new le;s.moveTo(-.58/2,0),s.lineTo(i/2,0),s.lineTo(i/2,a),s.lineTo(-.58/2,a),s.lineTo(-.58/2,0);let l=new u,d=.15,f=.22;l.moveTo(-.15,0),l.lineTo(-.15,f),l.absarc(0,f,d,Math.PI,0,!0),l.lineTo(d,0),l.lineTo(-.15,0),s.holes.push(l);let p=new r(s,{depth:o,bevelEnabled:!1});p.translate(0,0,-.34/2),p.computeVertexNormals(),e.add(new c(p,Z(new C({color:n,flatShading:!0}),{color:n}))),e.add(Q(t.box(i*1.06,.08,o*1.06,n),0,.54,0))},sacreCoeur(e,t){let n=`#F1EEE6`;e.add(Q(t.box(.5,.26,.4,n),0,.13,0));let r=(r,i,a,o)=>{e.add(Q(t.cyl(a*.9,a,i,n,{seg:12}),r,o,0));let s=Q(t.sphere(a,n,{seg:12}),r,o+i/2,0);s.scale.y=1.5,e.add(s)};r(0,.22,.15,.4),r(-.2,.1,.07,.33),r(.2,.1,.07,.33)},tokyoTower(e,t){let n=`#F25822`,r=`#EDEDED`,i=0;for(let a=0;a<9;a++){let o=a/9,s=(a+1)/9,c=.19*(1-o)+.03*o,l=.19*(1-s)+.03*s,u=.085,d=a%2?r:n;e.add(Q(t.cyl(l,c,u,d,{seg:4,glow:n,glowDay:0,glowNight:.7}),0,i+u/2,0)),i+=u}e.add(Q(t.box(.22,.02,.22,n,{glow:n,glowNight:.7}),0,.28,0)),e.add(Q(t.box(.12,.02,.12,r),0,.5,0)),e.add(Q(t.cone(.012,.16,r,{seg:6,glow:`#ff6a2a`,glowNight:.9}),0,i+.08,0))},pagoda(e,t){let n=0;for(let r=0;r<5;r++){let i=.42-r*.06,a=.11;e.add(Q(t.box(i,a,i,`#B23A2C`,{windows:r<4}),0,n+a/2,0)),e.add(Q(t.box(i*1.34,.03,i*1.34,`#7A3B2A`),0,n+a+.015,0)),n+=.16999999999999998}e.add(Q(t.cyl(.012,.012,.1,`#E0C040`,{seg:6}),0,n+.05,0)),e.add(Q(t.sphere(.03,`#E0C040`,{seg:8,glow:`#ffe680`,glowNight:.8}),0,n+.12,0))},neonBillboard(e,t){let n=`#20242C`;e.add(Q(t.box(.3,1,.3,n,{windows:!0}),0,.5,0));let r=[`#5AE8E0`,`#E85AA0`,`#E8E06A`],i=(n,r,i,a,o,s,c)=>{let l=Q(t.box(n,r,.02,i,{glow:i,glowDay:.6,glowNight:1.1}),a,o,s);l.rotation.y=c,e.add(l)};i(.22,.34,r[0],0,.75,.16,0),i(.16,.5,r[1],.16,.5,0,Math.PI/2),i(.2,.22,r[2],0,.34,-.16,0),e.add(Q(t.cone(.01,.14,n,{seg:6,glow:`#E85AA0`,glowDay:.4,glowNight:1}),0,1.08,0))}};function $(e,t){let n=new i;return Yt[e](n,qt(t)),n}var Xt=``+new URL(`building-skyscraper-d-CapD2Zqe.glb`,import.meta.url).href,Zt=``+new URL(`building-n-hdv8kKtN.glb`,import.meta.url).href,Qt=``+new URL(`building-g-CsTB1qH9.glb`,import.meta.url).href,$t=``+new URL(`colormap-CK8fW2HB.png`,import.meta.url).href,en={skyscraper:{url:Xt,color:`#9cc1dd`,fill:.92},midrise:{url:Zt,color:`#c9a07a`,fill:.96},setback:{url:Qt,color:`#d9c7a0`,fill:.9}};function tn({windowGlow:e}){let t=new v;t.setURLModifier(e=>e.includes(`colormap.png`)?$t:e);let n=new se(t),r={},i=!1,a=Promise.all(Object.entries(en).map(async([e,t])=>{r[e]=(await n.loadAsync(t.url)).scene})).then(()=>{i=!0,window.__landmarksReady=!0}).catch(e=>console.error(`landmark models failed:`,e)),o=9e3;function s(t,n,i={}){let a,s;if(Gt.includes(t))a=$(t,{windowGlow:e,winColors:i.winColors,litFrac:i.litFrac,id:()=>++o}),s=1;else{let e=r[t],n=en[t];if(!e||!n)return null;a=e.clone(!0),s=n.fill}a.updateMatrixWorld(!0);let c=new V().setFromObject(a).getSize(new H);a.scale.setScalar(n.h*s/c.y),a.updateMatrixWorld(!0);let l=new V().setFromObject(a),u=l.getCenter(new H);return a.position.x+=n.x-u.x,a.position.z+=n.z-u.z,a.position.y+=n.plinthTop-l.min.y,Gt.includes(t)?a.traverse(e=>{e.isMesh&&(e.castShadow=!1,e.raycast=()=>{})}):a.traverse(n=>{if(!n.isMesh)return;n.castShadow=!1,n.raycast=()=>{};let r=n=>X(n.clone(),{color:en[t].color,id:++o,windowGlow:e,winColors:i.winColors,litFrac:i.litFrac});n.material=Array.isArray(n.material)?n.material.map(r):r(n.material)}),a}return{make:s,whenReady:a,heightFactor:e=>Kt[e]??1,get ready(){return i}}}var nn=[`clear`,`rain`,`snow`,`fog`];function rn({extent:e=7}={}){let t=new i;t.raycast=()=>{};let n=e+2,r=.25,a=(e,t)=>e+Math.random()*(t-e),o=new p(new E(.015,.5),new x({color:`#a9bdd6`,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),600);o.frustumCulled=!1,o.raycast=()=>{};let s=new Float32Array(600*3),c=new Float32Array(600);for(let e=0;e<600;e++)s[e*3]=a(-n,n),s[e*3+1]=a(r,11),s[e*3+2]=a(-n,n),c[e]=a(9,14);let l=new p(new E(.07,.07),new x({color:`#f3f7ff`,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),700);l.frustumCulled=!1,l.raycast=()=>{};let u=new Float32Array(700*3),f=new Float32Array(700),m=new Float32Array(700);for(let e=0;e<700;e++)u[e*3]=a(-n,n),u[e*3+1]=a(r,11),u[e*3+2]=a(-n,n),f[e]=a(0,6.28),m[e]=a(.6,1.2);t.add(o,l);let h=Array.from({length:8},()=>new H),g=0,_=`clear`,v=0,y=0,b=0,S=0,C=0,w=new d,T=(e,t,n,r)=>e+(t-e)*Math.min(1,n*r);function D(e){nn.includes(e)&&(_=e)}function O(){_=nn[(nn.indexOf(_)+1)%nn.length]}function k(e,t){let i=_===`rain`,d=_===`snow`,p=_===`fog`,x=_!==`clear`;v=T(v,+!!x,e,1.4),y=T(y,+!!x,e,1.2),b=T(b,+!!p,e,.9),C=T(C,x&&!p?1:0,e,1),S=T(S,+!!d,e,d?.22:.5);let E=i?v:0,D=Math.round(600*E);for(let t=0;t<600;t++){if(t>=D){w.position.set(0,-50,0),w.scale.setScalar(0),w.updateMatrix(),o.setMatrixAt(t,w.matrix);continue}s[t*3+1]-=c[t]*e,s[t*3]+=e*1.1,s[t*3+1]<r&&(s[t*3]=a(-n,n),s[t*3+1]=11,s[t*3+2]=a(-n,n)),w.position.set(s[t*3],s[t*3+1],s[t*3+2]),w.rotation.set(0,0,0),w.scale.set(1,1,1),w.updateMatrix(),o.setMatrixAt(t,w.matrix)}o.instanceMatrix.needsUpdate=!0,o.material.opacity=.55*E,g=i?Math.round(8*v):0;for(let e=0;e<g;e++)h[e].set(Math.random(),Math.random(),.05*v);let O=Math.round(700*(d?v:0));for(let i=0;i<700;i++){if(i>=O){w.position.set(0,-50,0),w.scale.setScalar(0),w.updateMatrix(),l.setMatrixAt(i,w.matrix);continue}u[i*3+1]-=m[i]*e;let o=Math.sin(t*1.5+f[i])*.5;u[i*3+1]<r&&(u[i*3]=a(-n,n),u[i*3+1]=11,u[i*3+2]=a(-n,n)),w.position.set(u[i*3]+o,u[i*3+1],u[i*3+2]),w.rotation.set(0,0,0),w.scale.setScalar(1),w.updateMatrix(),l.setMatrixAt(i,w.matrix)}l.instanceMatrix.needsUpdate=!0,l.material.opacity=.9*(d?v:0)}return{group:t,update:k,cycle:O,setKind:D,rainDrops:h,get kind(){return _},get intensity(){return v},get overcast(){return y},get fog(){return b},get snow(){return S},get cloud(){return C},get rainDropCount(){return g},poolCounts:{rain:600,snow:700}}}function an(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=(e,n,r)=>{let i=t.createRadialGradient(e,n,0,e,n,r);i.addColorStop(0,`rgba(255,255,255,0.95)`),i.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=i,t.beginPath(),t.arc(e,n,r,0,7),t.fill()};n(128*.42,128*.56,128*.26),n(128*.6,128*.5,128*.3),n(128*.5,128*.46,128*.22),n(128*.34,128*.54,128*.18),n(128*.7,128*.58,128*.18);let r=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5],i=t.getImageData(0,0,128,128),a=i.data;for(let e=0;e<128;e++)for(let t=0;t<128;t++){let n=(e*128+t)*4,i=a[n+3]/255,o=(r[e%4*4+t%4]+.5)/16-.5;a[n+3]=Math.max(0,Math.min(1,Math.floor(i*5+.5+o)/5))*255}t.putImageData(i,0,0);let o=new ge(e);return o.colorSpace=fe,o}function on({extent:e=8,count:t=16}={}){let n=new i;n.raycast=()=>{};let r=an(),a=e+6,o=(e,t)=>e+Math.random()*(t-e),s=[];for(let e=0;e<t;e++){let e=new _e({map:r,transparent:!0,depthWrite:!1,opacity:0,fog:!0}),t=new z(e),i={sp:t,mat:e,wisp:Math.random(),x:o(-a,a),z:o(-a,a),hiY:o(4,6.8),loY:o(.6,2.2),w:o(3,5.6),h:o(1.7,3),speed:o(.25,.7),op:o(.6,1)};t.raycast=()=>{},s.push(i),n.add(t)}let c=new L,l=new L(`#ffffff`),u=new L(`#5b626e`);function d(e,t,n,r){let i=r?r.cloud:0,d=r?r.fog:0,f=Math.min(1,.4+.6*i+.5*d);c.copy(n.sky).lerp(l,.62),c.lerp(u,.6*i);for(let n=0;n<s.length;n++){let r=s[n],l=n/s.length<f;r.x+=r.speed*e*(.6+.8*i),r.x>a&&(r.x=-a,r.z=o(-a,a));let u=Math.min(sn(r.x,-a,-a+3),1-sn(r.x,a-3,a)),p=r.hiY*(1-d)+r.loY*d,m=1-.5*r.wisp,h=.72*Math.max(0,1-d-i)+1*i+.42*d,g=l?Math.max(0,h)*r.op*m*u:0;r.mat.opacity+=(g-r.mat.opacity)*Math.min(1,e*2.5),r.mat.color.copy(c);let _=r.w*(1+.6*d)*(1+.4*r.wisp),v=r.h*(1-.35*d);r.sp.scale.set(_,v,1),r.sp.position.set(r.x,p+Math.sin(t*.3+n)*.15,r.z)}}function f(e){r=e;for(let t of s)t.mat.map=e,t.mat.needsUpdate=!0}let p=s.map((e,t)=>({kind:`cloud`,label:`cloud ${t+1}`,getWorldPos:t=>t.copy(e.sp.position),active:()=>e.mat.opacity>.06,info:()=>`cloud · ${e.wisp>.6?`wispy`:`puffy`} · drifting east${e.sp.position.y<3?` (low mist)`:``}`}));function m(){return p}return{group:n,update:d,setTexture:f,getFollowables:m,get count(){return s.length}}}function sn(e,t,n){let r=Math.max(0,Math.min(1,(e-t)/(n-t)));return r*r*(3-2*r)}var cn={person:4.5,car:6,gull:6,fish:8,boat:9,cloud:16};function ln({rig:e,getCamera:t,sources:n=[]}){let r=null,i=new H,a=new H,o=()=>{let e=[];for(let t of n)if(t&&t.getFollowables){let n=t.getFollowables();n&&e.push(...n)}return e},s=e=>!e.active||e.active();function c(t){return t?(r=t,e.setFollow(e=>t.getWorldPos(e),{frame:t.frame??cn[t.kind]??8}),t):null}function l(){r=null,e.clearFollow()}function u(e,n,r=.14){let l=t(),u=null,d=r;for(let t of o()){if(!s(t)||(t.getWorldPos(i),a.copy(i).project(l),a.z>1||a.z<-1))continue;let r=Math.hypot(a.x-e,a.y-n);r<d&&(d=r,u=t)}return u?c(u):null}function d(e=1,t=null){let n=o().filter(e=>(!t||e.kind===t)&&s(e));if(t||(n=un(n)),!n.length)return null;let i=r?n.indexOf(r):-1;return i=((i+e)%n.length+n.length)%n.length,c(n[i])}function f(){r&&r.active&&!r.active()&&l()}return{pickAt:u,cycle:d,follow:c,release:l,prune:f,get focus(){return r},get count(){return o().length},get readout(){return r?{kind:r.kind,label:r.label,info:r.info?r.info():``}:null}}}function un(e){let t=new Map;for(let n of e)t.has(n.kind)||t.set(n.kind,[]),t.get(n.kind).push(n);let n=[...t.values()],r=[];for(let e=0,t=!0;t;e++){t=!1;for(let i of n)e<i.length&&(r.push(i[e]),t=!0)}return r}var dn={maxSpeed:6,accel:9,drag:5,turnRate:2.1,chaseDist:7,chaseElev:.42};function fn(e=dn){let t=new H,n=new H,r=new H,i=new H,a=new S,o=.45;function s(s,c,l,u){let d=u&&u.heightAt||(()=>0),f=Ce(Math.abs(s.speed)/e.maxSpeed,0,1),p=s.speed>=0?1:-1;if(s.yaw+=c.steer*e.turnRate*(.35+.65*f)*p*l,c.throttle!==0)s.speed+=c.throttle*e.accel*l;else{let t=Math.min(Math.abs(s.speed),e.drag*l);s.speed-=Math.sign(s.speed)*t}s.speed=Ce(s.speed,-e.maxSpeed*.5,e.maxSpeed);let m=Math.sin(s.yaw),h=Math.cos(s.yaw);s.x+=m*s.speed*l,s.z+=h*s.speed*l;let g=d(s.x,s.z);s.y=Se(s.y,g,18,l);let _=d(s.x-o,s.z),v=d(s.x+o,s.z),y=d(s.x,s.z-o),b=d(s.x,s.z+o);return t.set(_-v,2*o,y-b).normalize(),n.set(m,0,h),r.crossVectors(t,n).normalize(),i.crossVectors(r,t).normalize(),a.makeBasis(r,t,i),s.quat.setFromRotationMatrix(a),s}return{step:s}}var pn={accel:7,lift:9,maxV:5,chaseDist:9.5,chaseElev:.4},mn={air:{drag:2,maxSpeed:8,turn:1.8,vDrag:2.2,buoyancy:0},water:{drag:4.6,maxSpeed:3.6,turn:1.3,vDrag:4.5,buoyancy:1.1},ground:{drag:5.5,maxSpeed:5,turn:2,vDrag:9,buoyancy:0}},hn=[`drag`,`maxSpeed`,`turn`,`vDrag`,`buoyancy`],gn=(e,t,n)=>e+(t-e)*n;function _n(e=pn){let t=new H,n=new H,r=new H,i=new H,a=new S,o=new y,s={drag:0,maxSpeed:0,turn:0,vDrag:0,buoyancy:0},c=.4,l=.3,u=-900;function d(e,t){let n=t.heightAt(e.x,e.z),r=t.waterHeightAt?t.waterHeightAt(e.x,e.z):u,i=e.y,a=e.medium||`air`;if(r>u){if(a===`water`){if(i<=r+c)return`water`}else if(i<r-c)return`water`}if(a===`ground`){if(i<=n+l+c)return`ground`}else if(i<n+l)return`ground`;return`air`}function f(c,l,u,f){let p=c.medium||`air`,m=d(c,f);c.medium=m,m===p?c.crossingT>0&&(c.crossingT=Math.max(0,c.crossingT-u/.6)):(c.crossing=p+`>`+m,c.crossingT=1);let h=mn[m],g=mn[p],_=1-(c.crossingT||0),v=s;for(let e of hn)v[e]=gn(g[e],h[e],_);c.yaw+=l.steer*v.turn*u,l.throttle===0?c.speed-=Math.sign(c.speed)*Math.min(Math.abs(c.speed),v.drag*u):c.speed+=l.throttle*e.accel*u,c.speed=Ce(c.speed,-v.maxSpeed*.6,v.maxSpeed);let y=Math.sin(c.yaw),b=Math.cos(c.yaw);c.x+=y*c.speed*u,c.z+=b*c.speed*u;let x=f.heightAt(c.x,c.z);if(m===`ground`&&l.lift<=0){c.vy=0,c.y=Se(c.y,x,14,u);let e=.45,o=f.heightAt(c.x-e,c.z),s=f.heightAt(c.x+e,c.z),l=f.heightAt(c.x,c.z-e),d=f.heightAt(c.x,c.z+e);t.set(o-s,2*e,l-d).normalize(),n.set(y,0,b),r.crossVectors(t,n).normalize(),i.crossVectors(r,t).normalize(),a.makeBasis(r,t,i),c.quat.setFromRotationMatrix(a)}else{c.vy+=(l.lift*e.lift+v.buoyancy)*u,c.vy-=Math.sign(c.vy)*Math.min(Math.abs(c.vy),v.vDrag*u),c.vy=Ce(c.vy,-e.maxV,e.maxV),c.y+=c.vy*u,c.y<x&&(c.y=x,c.vy<0&&(c.vy=0));let t=Ce(-l.steer*.35,-.4,.4),n=Ce(-c.vy*.06,-.3,.3);o.set(n,c.yaw,t,`YXZ`),c.quat.setFromEuler(o)}return c}return{step:f}}var vn={ground:fn,spacecraft:_n},yn=.55,bn={throttle:0,steer:0,lift:0};function xn({rig:e,world:t}={}){let n=`free`,r=null,i=null,a=0;function o(t){if(!t||!t.pilot)return!1;r&&s(),r=t;let o=r.pilot;return i=(vn[o.model]||vn.ground)(o.profile),o.suspendAutonomy(),e.setFollow(e=>o.getWorldPos(e),{frame:o.profile.chaseDist}),e.setElevation(o.profile.chaseElev),e.setAzimuth(o.getTransform().yaw+Math.PI,!0),n=`entering`,a=yn,!0}function s(){return r?(r.pilot.resumeAutonomy(),e.clearFollow(),r=null,i=null,n=`free`,a=0,!0):!1}function c(o,s){if(!r)return;let c=r.pilot;if(n===`entering`){a-=o,e.setAzimuth(c.getTransform().yaw+Math.PI),a<=0&&(n=`piloting`);return}let l=c.getTransform();i.step(l,s||bn,o,t),c.setTransform(l),e.setAzimuth(l.yaw+Math.PI)}return{possess:o,release:s,step:c,get active(){return!!r},get piloting(){return n===`piloting`},get state(){return n},get craft(){return r},get controlHints(){return r?r.pilot.controlHints:``},get speed(){return r?r.pilot.getTransform().speed:0},get telemetry(){if(!r)return null;let e=r.pilot.getTransform(),n=t&&t.heightAt?t.heightAt(e.x,e.z):0,i=t&&t.waterHeightAt?t.waterHeightAt(e.x,e.z):-900;return{medium:e.medium||null,speed:e.speed||0,y:e.y,altitude:Math.max(0,e.y-n),depth:i>-900?Math.max(0,i-e.y):0,climb:e.vy||0}}}}var Sn=new H,Cn=new H,wn=new H,Tn=new H,En=new S,Dn=new H(0,1,0);function On(){let e=document.createElement(`canvas`);e.width=256,e.height=64;let t=e.getContext(`2d`);t.strokeStyle=`#ffffff`,t.lineWidth=6,t.lineCap=`round`,t.lineJoin=`round`;let n=[14,24,36,24];for(let e=0;e<4;e++){let r=e*64,i=n[e];t.beginPath(),t.moveTo(r+8,40),t.quadraticCurveTo(r+24,i,r+32,36),t.quadraticCurveTo(r+40,i,r+56,40),t.stroke()}let r=new ge(e);return r.colorSpace=fe,r}function kn(){let e=document.createElement(`canvas`);e.width=e.height=96;let t=e.getContext(`2d`),n=(e,n,r)=>{let i=t.createRadialGradient(e,n,0,e,n,r);i.addColorStop(0,`rgba(255,255,255,0.95)`),i.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=i,t.beginPath(),t.arc(e,n,r,0,7),t.fill()};n(96*.42,96*.56,96*.26),n(96*.6,96*.5,96*.3),n(96*.5,96*.46,96*.22),n(96*.7,96*.58,96*.18);let r=new ge(e);return r.colorSpace=fe,r}function An(){let e=new i,t=new c(new W(.46,.2,1.1),Z(new C({color:`#5a6675`,roughness:.6,metalness:.2,flatShading:!0}),{color:`#5a6675`}));t.position.y=.02;let n=new c(new W(.3,.22,.42),Z(new C({color:`#e7ecf2`,roughness:.7,flatShading:!0}),{color:`#e7ecf2`}));return n.position.set(0,.18,.08),e.add(t,n),e.traverse(e=>{e.isMesh&&(e.castShadow=!0),e.raycast=()=>{}}),e}function jn(){let e=new c(new M(.18,9,7),Z(new C({color:`#5b6f86`,roughness:.5,flatShading:!0}),{color:`#5b6f86`}));return e.scale.set(.55,.5,1),e.raycast=()=>{},e}function Mn(){let e=new i,t=new c(new W(.18,.34,.14),Z(new C({color:`#3b6ea5`,roughness:.8,flatShading:!0}),{color:`#3b6ea5`}));t.position.y=.17;let n=new c(new W(.13,.13,.13),Z(new C({color:`#e3b98c`,roughness:.8,flatShading:!0}),{color:`#e3b98c`}));return n.position.y=.41,e.add(t,n),e.traverse(e=>{e.isMesh&&(e.castShadow=!0),e.raycast=()=>{}}),e}function Nn(){let e=new i,t=new c(new W(.5,.22,.84),Z(new C({color:`#d2622e`,roughness:.6,metalness:.2,flatShading:!0}),{color:`#d2622e`}));t.position.y=.26;let n=new c(new W(.3,.16,.32),Z(new C({color:`#2b2f37`,roughness:.8,flatShading:!0}),{color:`#2b2f37`}));n.position.set(0,.42,-.06);let r=new c(new W(.34,.12,.22),Z(new C({color:`#e2e7ee`,roughness:.7,flatShading:!0}),{color:`#e2e7ee`}));r.position.set(0,.28,.42);let a=new D(.14,.14,.13,10);for(let[t,n]of[[-.27,.3],[.27,.3],[-.27,-.3],[.27,-.3]]){let r=new c(a,Z(new C({color:`#1c2026`,roughness:.9,flatShading:!0}),{color:`#1c2026`}));r.rotation.z=Math.PI/2,r.position.set(t,.14,n),e.add(r)}return e.add(t,n,r),e.traverse(e=>{e.isMesh&&(e.castShadow=!0),e.raycast=()=>{}}),e}function Pn(){let e=new i,t=new c(new D(.5,.64,.16,18),Z(new C({color:`#8a93a8`,roughness:.4,metalness:.5,flatShading:!0}),{color:`#8a93a8`}));t.position.y=.3;let n=new c(new M(.3,16,10,0,Math.PI*2,0,Math.PI/2),Z(new C({color:`#9fe6ff`,roughness:.25,metalness:.3,flatShading:!0,transparent:!0,opacity:.85}),{color:`#9fe6ff`}));n.position.y=.38;let r=new c(new W(.12,.1,.34),Z(new C({color:`#ff7a4d`,roughness:.6,flatShading:!0}),{color:`#ff7a4d`}));return r.position.set(0,.3,.52),e.add(t,n,r),e.traverse(e=>{e.isMesh&&(e.castShadow=!0),e.raycast=()=>{}}),e}function Fn(){let e=new i,t=`#5b6680`,n=`#2b2f3a`,r=`#3a4150`,a=(e,t)=>Z(new C({color:e,roughness:.5,metalness:.25,flatShading:!0,...t}),{color:e}),o=new c(new M(.42,16,12),a(t));o.scale.set(.82,.78,1.28),o.position.y=.5;let s=new c(new M(.3,14,10,0,Math.PI*2,0,Math.PI*.62),a(`#9fe6ff`,{roughness:.2,transparent:!0,opacity:.8}));s.scale.set(.82,.7,.92),s.position.set(0,.58,.32);let l=new c(new D(.055,.14,1.05,10),a(t));l.rotation.x=Math.PI/2,l.position.set(0,.54,-.86);let u=new c(new W(.05,.3,.22),a(t));u.position.set(0,.68,-1.3);let d=new c(new W(.12,.1,.12),a(`#ff7a4d`,{roughness:.6}));d.position.set(0,.46,.74);let f=new D(.03,.03,.92,8),p=new c(f,a(n,{roughness:.7}));p.rotation.x=Math.PI/2,p.position.set(-.28,.1,0);let m=new c(f,a(n,{roughness:.7}));m.rotation.x=Math.PI/2,m.position.set(.28,.1,0);let h=new i;h.position.set(0,.96,.06),h.add(new c(new D(.06,.06,.12,8),a(n)));let g=new W(2.5,.02,.13),_=new c(g,a(r,{roughness:.6}));h.add(_);let v=new c(g,a(r,{roughness:.6}));v.rotation.y=Math.PI/2,h.add(v);let y=new i;y.position.set(.11,.68,-1.34);let b=new W(.04,.52,.06),x=new c(b,a(r,{roughness:.6}));y.add(x);let S=new c(b,a(r,{roughness:.6}));return S.rotation.x=Math.PI/2,y.add(S),e.add(o,s,l,u,d,p,m,h,y),e.traverse(e=>{e.isMesh&&(e.castShadow=!0),e.raycast=()=>{}}),e.userData.mainRotor=h,e.userData.tailRotor=y,e}function In({heightAt:e,seaSurfaceY:t=0,waterY:n=.06}={}){let r=new i;r.raycast=()=>{};let a=e||(()=>0),o=[],s=[],c={gull:0,boat:0,fish:0,cloud:0,person:0,atv:0,craft:0},l=Ft({frames:4,fps:7}),u=On(),d=kn(),f=[`#ffffff`,`#cfd4da`,`#c8a06a`];function p(e,r,i,o){let s=(c[e]||0)*1.7+(o.phase||0);if(e===`gull`){let t=l.makeInstanceTexture(u),n=new z(new _e({map:t,color:new L(f[c.gull%3]),transparent:!0,opacity:.9,depthWrite:!1,fog:!0}));n.scale.setScalar(.5),n.raycast=()=>{};let o=r,d=i,p=1.4+Math.random()*.6,m=a(r,i)+2.4,h=.5+Math.random()*.3;return{kind:e,obj:n,x:r,z:i,update(e,t,r){let i=s+t*h;n.position.set(o+Math.cos(i)*p,m+Math.sin(t*1.4+s)*.12,d+Math.sin(i)*p),l.step(n.material.map,t,s);let a=r?1-r.windowGlow:1;n.material.opacity=G.clamp(.25+a*.7,0,.95)},info:()=>`gull · circling`,dispose(){t.dispose()}}}if(e===`cloud`){let t=new z(new _e({map:d,transparent:!0,opacity:.85,depthWrite:!1,fog:!0}));t.scale.set(3.4,1.9,1),t.raycast=()=>{};let n=r,a=i,o=5+Math.random()*1.4,c=.12+Math.random()*.1;return{kind:e,obj:t,x:r,z:i,update(e,r,i){t.position.set(n+Math.sin(r*.18+s)*1.2,o+Math.sin(r*.3+s)*.18,a+c*Math.cos(r*.1+s)),i&&i.sky&&t.material.color.copy(i.sky).lerp(Ln,.62)},info:()=>`cloud · drifting`}}if(e===`boat`){let t=An();t.position.set(r,n,i);let a=r,o=i,c=Math.random()*Math.PI*2;return{kind:e,obj:t,x:r,z:i,update(e,l){c+=Math.sin(l*.3+s)*.4*e;let u=.6;a+=Math.sin(c)*u*e,o+=Math.cos(c)*u*e,a+=(r-a)*.4*e,o+=(i-o)*.4*e;let d=Math.sin(l*1.1+s)*.025;t.position.set(a,n+d,o),t.rotation.set(Math.sin(l*.9+s)*.04,c,0)},info:()=>`boat · drifting`}}if(e===`fish`){let t=jn();t.position.set(r,-5,i);let a=6+Math.random()*5,o=Math.random()*Math.PI*2,s=Math.random()*a,c={kind:e,obj:t,x:r,z:i,active:!0,update(e){if(s+=e,s>=a){let e=(s-a)/1.3;if(e>=1){s=0,t.position.set(r,-5,i),c.active=!1;return}let l=Math.sin(Math.PI*e);t.position.set(r+Math.sin(o)*(e-.5)*1,n-.1+l*.5,i+Math.cos(o)*(e-.5)*1),t.rotation.set(Math.cos(Math.PI*e)*.9,o,0),c.active=!0}else c.active=!1},info:()=>c.active?`fish · breaching!`:`fish · below`};return c}if(e===`person`){let n=Mn();n.position.set(r,a(r,i),i);let o=Math.random()*Math.PI*2;return{kind:e,obj:n,x:r,z:i,update(e,s){o+=(Math.random()-.5)*1.4*e;let c=.55,l=n.position.x+Math.sin(o)*c*e,u=n.position.z+Math.cos(o)*c*e,d=l+(r-l)*.25*e,f=u+(i-u)*.25*e;a(d,f)<t+.02&&(o+=Math.PI,d=n.position.x,f=n.position.z),n.position.set(d,a(d,f),f),n.rotation.y=o},info:()=>`person · wandering`}}if(e===`atv`){let t=Nn(),n={x:r,y:a(r,i),z:i,yaw:o.yaw??Math.random()*Math.PI*2,speed:0,quat:new N},s=!1,c=()=>{let e=.45,t=a(n.x-e,n.z),r=a(n.x+e,n.z),i=a(n.x,n.z-e),o=a(n.x,n.z+e);Sn.set(t-r,2*e,i-o).normalize(),Cn.set(Math.sin(n.yaw),0,Math.cos(n.yaw)),wn.crossVectors(Sn,Cn).normalize(),Tn.crossVectors(wn,Sn).normalize(),En.makeBasis(wn,Sn,Tn),n.quat.setFromRotationMatrix(En)},l=()=>{n.y=a(n.x,n.z),c(),t.position.set(n.x,n.y,n.z),t.quaternion.copy(n.quat)};return l(),{kind:e,obj:t,x:r,z:i,get piloted(){return s},update(){s||l()},info:()=>s?`ATV · piloted`:`ATV · parked`,pilot:{model:`ground`,profile:dn,controlHints:`W/S throttle · A/D steer · Esc to exit`,getWorldPos:e=>e.copy(t.position),getTransform:()=>n,setTransform:e=>{t.position.set(e.x,e.y,e.z),t.quaternion.copy(e.quat)},suspendAutonomy:()=>{s=!0},resumeAutonomy:()=>{s=!1,n.speed=0}}}}if(e===`craft`){let t=Pn(),n=1.3,s=Math.random()*Math.PI*2,c={x:r,y:a(r,i)+n,z:i,yaw:o.yaw??Math.random()*Math.PI*2,speed:0,vy:0,quat:new N,medium:`air`,crossing:null,crossingT:0},l=!1;return{kind:e,obj:t,x:r,z:i,get piloted(){return l},update(e,r){if(l)return;c.yaw+=.3*e;let i=a(c.x,c.z)+n+Math.sin((r||0)*.8+s)*.08;c.y+=(i-c.y)*Math.min(1,e*3),t.position.set(c.x,c.y,c.z),t.rotation.set(0,c.yaw,0),c.quat.setFromAxisAngle(Dn,c.yaw)},info:()=>l?`spacecraft · piloted`:`spacecraft · hovering`,pilot:{model:`spacecraft`,profile:pn,controlHints:`W/S thrust · A/D steer · Space/Shift climb/dive · Esc exit`,getWorldPos:e=>e.copy(t.position),getTransform:()=>c,setTransform:e=>{t.position.set(e.x,e.y,e.z),t.quaternion.copy(e.quat)},suspendAutonomy:()=>{l=!0},resumeAutonomy:()=>{l=!1,c.speed=0,c.vy=0}}}}if(e===`heli`){let t=Fn(),n=t.userData.mainRotor,s=t.userData.tailRotor,c=o.hover??11,l=o.orbit??8,u=Math.random()*Math.PI*2,d={x:r,y:a(r,i)+c,z:i,yaw:o.yaw??0,speed:0,vy:0,quat:new N,medium:`air`,crossing:null,crossingT:0,_cx:r-l,_cz:i,_at:0},f=!1;return{kind:e,obj:t,x:r,z:i,get piloted(){return f},update(e,r){if(n.rotation.y+=26*e,s.rotation.x+=26*1.6*e,f)return;if(l>0){d._at+=e;let t=d._at*.14;d.x=d._cx+Math.cos(t)*l,d.z=d._cz+Math.sin(t)*l,d.yaw=Math.atan2(-Math.sin(t),Math.cos(t))}let i=a(d.x,d.z)+c+Math.sin((r||0)*.7+u)*.1;d.y+=(i-d.y)*Math.min(1,e*2),t.position.set(d.x,d.y,d.z),t.rotation.set(0,d.yaw,0),d.quat.setFromAxisAngle(Dn,d.yaw)},info:()=>f?`helicopter · piloted`:`helicopter · hovering`,pilot:{model:`spacecraft`,profile:pn,controlHints:`W/S thrust · A/D steer · Space/Shift climb/dive · Esc exit`,getWorldPos:e=>e.copy(t.position),getTransform:()=>d,setTransform:e=>{t.position.set(e.x,e.y,e.z),t.quaternion.copy(e.quat)},suspendAutonomy:()=>{f=!0},resumeAutonomy:()=>{f=!1,d.speed=0,d.vy=0}}}}return null}function m(e){return c[e]=(c[e]||0)+1,`${e} ${c[e]}`}function h(e,t,n,i={}){let a=p(e,t,n,i);if(!a)return null;a.opts=i,o.push(a),r.add(a.obj);let c={kind:e,label:m(e),getWorldPos:e=>e.copy(a.obj.position),active:()=>a.active!==!1,info:()=>a.info()};return a.pilot&&(c.pilot=a.pilot),a.followable=c,s.push(c),a}function g(e){if(!e)return!1;let t=o.indexOf(e);if(t<0)return!1;r.remove(e.obj),e.dispose&&e.dispose(),o.splice(t,1);let n=s.indexOf(e.followable);return n>=0&&s.splice(n,1),!0}function _(e,t,n=2.5){let r=null,i=n*n;for(let n of o){let a=n.obj.position.x-e,o=n.obj.position.z-t,s=a*a+o*o;s<i&&(i=s,r=n)}if(!r)return null;let a={kind:r.kind,x:r.x,z:r.z,opts:r.opts};return g(r),a}function v(e,t,n){for(let r=0;r<o.length;r++)o[r].update(e,t,n);typeof window<`u`&&(window.__placedLife=y())}function y(){let e={gull:0,boat:0,fish:0,cloud:0,person:0,atv:0,craft:0,total:o.length};for(let t of o)e[t.kind]++;return e}function b(){return s}function x(){return o.map(e=>({kind:e.kind,x:e.x,z:e.z,opts:e.opts}))}function S(){for(let e of[...o])g(e)}function C(e){if(S(),Array.isArray(e))for(let t of e.slice(0,2e3))!t||typeof t.kind!=`string`||!Number.isFinite(t.x)||!Number.isFinite(t.z)||h(t.kind,t.x,t.z,t.opts&&typeof t.opts==`object`?t.opts:{})}return{group:r,update:v,spawn:h,despawn:g,removeNear:_,getFollowables:b,snapshot:x,restore:C,clear:S,counts:y,get count(){return o.length}}}var Ln=new L(`#ffffff`),Rn=`varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0); 
}`,zn=`precision highp float;

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
}`,Bn=`precision highp float;

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
}`,Vn=`precision highp float;

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
}`,Hn=`precision highp float;
varying vec2 vUv;
uniform sampler2D uSrc;
void main() { gl_FragColor = vec4(texture2D(uSrc, vUv).r, 0.0, 0.0, 0.0); }`,Un=`precision highp float;
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
}`,Wn=`precision highp float;
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
}`,Gn=`precision highp float;
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
}`;function Kn({renderer:e,N:t,cell:n,half:r,worldSize:i,seaY:a=0,FLOW:o,DAMP:l,MIN_DEPTH:u,KC:d,KE:f,KD:p,KADV:m,MAXD:h,readTerrain:g}){let _=e.getContext();if(!(_&&_.getExtension&&_.getExtension(`EXT_color_buffer_float`)))return typeof console<`u`&&console.warn(`[L87] EXT_color_buffer_float unavailable — GPU flow backend cannot run; staying on CPU.`),null;let v={type:b,format:he,minFilter:s,magFilter:s,wrapS:oe,wrapT:oe,depthBuffer:!1,stencilBuffer:!1},y=[new B(t,t,v),new B(t,t,v)],x=[new B(t,t,v),new B(t,t,v)],S=[new B(t,t,v),new B(t,t,v)],w=new Float32Array(t*t*4),T=new ve(w,t,t,he,b);T.minFilter=s,T.magFilter=s,T.wrapS=T.wrapT=oe;let D=new Float32Array(t*t),O=!1,A=1,M=!0,ee=new re,te=new de(-1,1,1,-1,0,1),N=new c(new E(2,2),null);N.frustumCulled=!1,ee.add(N);let P=new F(1/t,1/t),I=(e,t)=>new k({vertexShader:Rn,fragmentShader:e,uniforms:t}),ne=I(zn,{uState:{value:null},uTerr:{value:null},uFlux:{value:null},uTexel:{value:P},uN:{value:t},uDt:{value:0},uFlow:{value:o},uDamp:{value:l}}),ie=I(Bn,{uState:{value:null},uTerr:{value:null},uFlux:{value:null},uTexel:{value:P},uN:{value:t},uDt:{value:0},uSeaY:{value:a}}),R=I(Vn,{uState:{value:null},uTerr:{value:null},uN:{value:t},uSeaY:{value:a},uRain:{value:0},uPourCount:{value:0},uPours:{value:Array.from({length:8},()=>new H)},uPourR:{value:new Float32Array(8)}}),z=I(Hn,{uSrc:{value:T}}),se=()=>({uState:{value:null},uTerr:{value:null},uFlux:{value:null},uTexel:{value:P},uN:{value:t},uDt:{value:0},uCell:{value:n},uSeaY:{value:a},uKC:{value:d},uKE:{value:f},uKD:{value:p},uMaxD:{value:h},uMinDepth:{value:u},uErosK:{value:A}}),ce=I(Un,se()),V=I(Wn,se()),le=I(Gn,{uState:{value:null},uTerr:{value:null},uFlux:{value:null},uTexel:{value:P},uN:{value:t},uDt:{value:0},uSeaY:{value:a},uKADV:{value:m}});function ue(t,n){N.material=t;let r=e.getRenderTarget();e.setRenderTarget(n),e.render(ee,te),e.setRenderTarget(r)}let U=new L;function fe(t){let n=e.getRenderTarget(),r=e.getClearAlpha();e.getClearColor(U),e.setRenderTarget(t),e.setClearColor(0,0),e.clear(!0,!1,!1),e.setClearColor(U,r),e.setRenderTarget(n)}function W(){g(D);for(let e=0;e<t*t;e++)w[e*4]=D[e];T.needsUpdate=!0,ue(z,S[0])}function me(){fe(y[0]),fe(y[1]),fe(x[0]),fe(x[1])}me();let ge=t*t,_e=new Float32Array(ge*3),ye=new Float32Array(ge*2);for(let e=0;e<t;e++)for(let i=0;i<t;i++){let a=e*t+i;_e[a*3]=i*n-r,_e[a*3+1]=0,_e[a*3+2]=e*n-r,ye[a*2]=(i+.5)/t,ye[a*2+1]=(e+.5)/t}let be=[];for(let e=0;e<t-1;e++)for(let n=0;n<t-1;n++){let r=e*t+n,i=e*t+n+1,a=(e+1)*t+n,o=(e+1)*t+n+1;be.push(r,a,i,i,a,o)}let xe=new ae;xe.setAttribute(`position`,new j(_e,3)),xe.setAttribute(`aGridUv`,new j(ye,2)),xe.setIndex(be),xe.boundingSphere=new pe(new H(0,0,0),i);let G={uStateTex:{value:y[0].texture},uTerrTex:{value:S[0].texture},uMinDepth:{value:u}},Se=new C({color:`#2f6f96`,roughness:.14,metalness:.45,transparent:!0,depthWrite:!1});Se.onBeforeCompile=e=>{e.uniforms.uStateTex=G.uStateTex,e.uniforms.uTerrTex=G.uTerrTex,e.uniforms.uMinDepth=G.uMinDepth,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
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
  gl_FragColor.a *= clamp((vDepth - 0.012) * 7.0, 0.16, 0.86);`)},Se.customProgramCacheKey=()=>`lgr-flow-gpu`;let Ce=new c(xe,Se);Ce.frustumCulled=!1,Ce.castShadow=!1,Ce.receiveShadow=!1,Ce.raycast=()=>{},Ce.renderOrder=3,Ce.visible=!1;function we(){G.uStateTex.value=y[0].texture,G.uTerrTex.value=S[0].texture}function Te(e){e=Math.min(e,1/30),(!O||M)&&(W(),M=!1),ne.uniforms.uState.value=y[0].texture,ne.uniforms.uTerr.value=S[0].texture,ne.uniforms.uFlux.value=x[0].texture,ne.uniforms.uDt.value=e,ue(ne,x[1]),x.reverse(),ie.uniforms.uState.value=y[0].texture,ie.uniforms.uTerr.value=S[0].texture,ie.uniforms.uFlux.value=x[0].texture,ie.uniforms.uDt.value=e,ue(ie,y[1]),y.reverse(),O&&(ce.uniforms.uState.value=y[0].texture,ce.uniforms.uTerr.value=S[0].texture,ce.uniforms.uFlux.value=x[0].texture,ce.uniforms.uDt.value=e,ce.uniforms.uErosK.value=A,ue(ce,S[1]),V.uniforms.uState.value=y[0].texture,V.uniforms.uTerr.value=S[0].texture,V.uniforms.uFlux.value=x[0].texture,V.uniforms.uDt.value=e,V.uniforms.uErosK.value=A,ue(V,y[1]),S.reverse(),y.reverse(),le.uniforms.uState.value=y[0].texture,le.uniforms.uTerr.value=S[0].texture,le.uniforms.uFlux.value=x[0].texture,le.uniforms.uDt.value=e,ue(le,y[1]),y.reverse()),we()}function K(){R.uniforms.uState.value=y[0].texture,R.uniforms.uTerr.value=S[0].texture,ue(R,y[1]),y.reverse(),we()}function q(e,t,i=.5,a=1.6){(M||!O)&&(W(),M=!1);let o=(e+r)/n,s=(t+r)/n,c=Math.max(1,a/n);R.uniforms.uRain.value=0,R.uniforms.uPourCount.value=1,R.uniforms.uPours.value[0].set(o,s,i),R.uniforms.uPourR.value[0]=c,K()}function Ee(e=.004){(M||!O)&&(W(),M=!1),R.uniforms.uPourCount.value=0,R.uniforms.uRain.value=e,K()}function J(){me(),M=!0,we()}function De(e,t){O=!!e,t!=null&&(A=Math.max(0,t)),M=!0}let Oe=new Float32Array(t*t*4);function ke(n){return e.readRenderTargetPixels(n,0,0,t,t,Oe),Oe}function Ae(){let e=ke(y[0]),n=0;for(let r=0;r<t*t;r++)n+=e[r*4];return n}function je(e,i){let a=Math.round((e+r)/n),o=Math.round((i+r)/n);return a<0||a>=t||o<0||o>=t?0:ke(y[0])[(o*t+a)*4]}function Me(){let e=ke(y[0]),n=0;for(let r=0;r<t*t;r++)n+=e[r*4+1];return n}function Ne(){let e=ke(y[0]),n=new Float32Array(t*t);for(let r=0;r<t*t;r++)n[r]=e[r*4];return n}function Pe(){let e=ke(S[0]),n=new Float32Array(t*t);for(let r=0;r<t*t;r++)n[r]=e[r*4];return n}function Fe(e){Ce.visible=!!e}function Ie(){for(let e of y)e.dispose();for(let e of x)e.dispose();for(let e of S)e.dispose();T.dispose(),xe.dispose(),Se.dispose(),N.geometry.dispose(),ne.dispose(),ie.dispose(),R.dispose(),z.dispose(),ce.dispose(),V.dispose(),le.dispose()}return{mesh:Ce,step:Te,pourAt:q,rain:Ee,clear:J,totalWater:Ae,cellAt:je,totalSediment:Me,readW:Ne,readTerr:Pe,setErosion:De,setVisible:Fe,dispose:Ie,get grid(){return t},get erosion(){return O}}}function qn({worldHeightAt:e,applyErosion:t=null,syncErodedTerrain:n=null,worldSize:r=26,grid:a=96,seaY:o=0,renderer:s=null}={}){let l=a,u=new Float32Array(l*l),d=new Float32Array(l*l),f=new Float32Array(l*l),p=new Float32Array(l*l),m=new Float32Array(l*l),h=new Float32Array(l*l),g=new Float32Array(l*l),_=new Float32Array(l*l),v=new Float32Array(l*l),y=!1,b=1,x=r/(l-1),S=r/2,w=e||(()=>0),T=e=>e*x-S,E=e=>e*x-S,D=(e,t)=>t*l+e,O=26*x,k=.9,A=.006,M=.5,ee=.25,te=.3,N=.006;function P(){for(let e=0;e<l;e++)for(let t=0;t<l;t++)h[D(t,e)]=w(T(t),E(e))}let F=`cpu`,I=null,L=new Float32Array(l*l),ne=0;function re(e){P();for(let t=0;t<l*l;t++)e[t]=h[t]}function ie(){return I||!s?I:(I=Kn({renderer:s,N:l,cell:x,half:S,worldSize:r,seaY:o,FLOW:O,DAMP:k,MIN_DEPTH:A,KC:M,KE:ee*3,KD:te*3,KADV:6,MAXD:N*3,readTerrain:re}),I&&_e.add(I.mesh),I)}function R(e){if(e===`gpu`){if(ie(),!I)return typeof console<`u`&&console.info(`[L87] GPU backend unavailable (no renderer / no float RT) — staying on CPU (oracle).`),F=`cpu`,z(),F;F=`gpu`,I.setErosion(y,b),y&&(re(L),ne=0)}else F=`cpu`;return z(),F}function z(){I&&I.setVisible(F===`gpu`),F===`gpu`?ge.visible=!1:ve()}let oe=new Float32Array(l*l);function B(){if(++ne<20)return;ne=0;let e=I.readTerr(),t=!1;for(let n=0;n<l*l;n++){let r=e[n]-L[n];oe[n]=r,r!==0&&(t=!0),L[n]=e[n]}t&&n(oe,l)}function se(e){if(F===`gpu`&&I){I.step(e),y&&n&&B();return}e=Math.min(e,1/30),P();for(let t=0;t<l;t++)for(let n=0;n<l;n++){let r=D(n,t),i=h[r]+u[r],a=0,o=0,s=0,c=0;n>0&&(a=Math.max(0,d[r]*k+e*O*(i-(h[r-1]+u[r-1])))),n<l-1&&(o=Math.max(0,f[r]*k+e*O*(i-(h[r+1]+u[r+1])))),t>0&&(c=Math.max(0,m[r]*k+e*O*(i-(h[r-l]+u[r-l])))),t<l-1&&(s=Math.max(0,p[r]*k+e*O*(i-(h[r+l]+u[r+l]))));let g=(a+o+s+c)*e,_=g>1e-9?Math.min(1,u[r]/g):1;d[r]=a*_,f[r]=o*_,m[r]=c*_,p[r]=s*_}for(let t=0;t<l;t++)for(let n=0;n<l;n++){let r=D(n,t),i=0;n>0&&(i+=f[r-1]),n<l-1&&(i+=d[r+1]),t>0&&(i+=p[r-l]),t<l-1&&(i+=m[r+l]);let a=d[r]+f[r]+m[r]+p[r];u[r]+=e*(i-a),u[r]<0&&(u[r]=0),h[r]<o-.02&&(u[r]=0)}y&&t&&ce(e),ve()}function ce(e){v.fill(0);for(let t=0;t<l;t++)for(let n=0;n<l;n++){let r=D(n,t);if(u[r]<=A){if(g[r]>0){let t=Math.min(N,te*g[r]*e);v[r]+=t,g[r]-=t}continue}let i=(d[r]+f[r]+p[r]+m[r])/(u[r]+.02),a=n>0?h[r-1]:h[r],o=n<l-1?h[r+1]:h[r],s=t>0?h[r-l]:h[r],c=t<l-1?h[r+l]:h[r],_=Math.min(2,Math.hypot(o-a,c-s)/(2*x)),y=M*i*Math.max(.05,_)*b;if(y>g[r]){let t=Math.min(N,ee*(y-g[r])*e);v[r]-=t,g[r]+=t}else{let t=Math.min(N,te*(g[r]-y)*e);v[r]+=t,g[r]-=t,g[r]<0&&(g[r]=0)}}_.set(g);for(let t=0;t<l;t++)for(let n=0;n<l;n++){let r=D(n,t),i=d[r]+f[r]+p[r]+m[r];if(i<=1e-9||g[r]<=1e-9)continue;let a=Math.min(g[r],g[r]*6*e);_[r]-=a,n>0&&(_[r-1]+=a*d[r]/i),n<l-1&&(_[r+1]+=a*f[r]/i),t>0&&(_[r-l]+=a*m[r]/i),t<l-1&&(_[r+l]+=a*p[r]/i)}g.set(_);for(let e=0;e<l*l;e++)g[e]<0&&(g[e]=0),h[e]<o-.02&&(g[e]=0);t(v,l)}function V(e,t){y=!!e,t!=null&&(b=Math.max(0,t)),e||g.fill(0),F===`gpu`&&I&&(I.setErosion(e,t),e&&(re(L),ne=0))}function le(e,t,n=.5,r=1.6){if(F===`gpu`&&I)return I.pourAt(e,t,n,r);let i=(e+S)/x,a=(t+S)/x,o=Math.max(1,r/x),s=Math.max(0,Math.floor(i-o)),c=Math.min(l-1,Math.ceil(i+o)),d=Math.max(0,Math.floor(a-o)),f=Math.min(l-1,Math.ceil(a+o));for(let e=d;e<=f;e++)for(let t=s;t<=c;t++){let r=Math.hypot(t-i,e-a);r<=o&&(u[D(t,e)]+=n*(1-r/o))}}function ue(e=.004){if(F===`gpu`&&I)return I.rain(e);P();for(let t=0;t<l*l;t++)h[t]>o&&(u[t]+=e)}function H(){if(F===`gpu`&&I)return I.clear();u.fill(0),d.fill(0),f.fill(0),p.fill(0),m.fill(0),g.fill(0),ve()}function de(){if(F===`gpu`&&I)return I.totalWater();let e=0;for(let t=0;t<l*l;t++)e+=u[t];return e}function U(e,t){if(F===`gpu`&&I)return I.cellAt(e,t);let n=Math.round((e+S)/x),r=Math.round((t+S)/x);return n<0||n>=l||r<0||r>=l?0:u[D(n,r)]}let fe=new Float32Array(l*l*3),W=new Float32Array(l*l);for(let e=0;e<l;e++)for(let t=0;t<l;t++){let n=D(t,e);fe[n*3]=T(t),fe[n*3+1]=-50,fe[n*3+2]=E(e)}let pe=[];for(let e=0;e<l-1;e++)for(let t=0;t<l-1;t++){let n=D(t,e),r=D(t+1,e),i=D(t,e+1),a=D(t+1,e+1);pe.push(n,i,r,r,i,a)}let me=new ae;me.setAttribute(`position`,new j(fe,3)),me.setAttribute(`aDepth`,new j(W,1)),me.setIndex(pe),me.computeVertexNormals();let he=new C({color:`#2f6f96`,roughness:.14,metalness:.45,transparent:!0,depthWrite:!1});he.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
attribute float aDepth;
varying float vDepth;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
  vDepth = aDepth;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying float vDepth;`).replace(`#include <dithering_fragment>`,`#include <dithering_fragment>
  if (vDepth < 0.012) discard;
  gl_FragColor.a *= clamp((vDepth - 0.012) * 7.0, 0.16, 0.86);`)},he.customProgramCacheKey=()=>`lgr-flow`;let ge=new c(me,he);ge.frustumCulled=!1,ge.castShadow=!1,ge.receiveShadow=!1,ge.raycast=()=>{},ge.renderOrder=3;let _e=new i;_e.add(ge),_e.raycast=()=>{};function ve(){let e=0;for(let t=0;t<l*l;t++){let n=u[t];W[t]=n,fe[t*3+1]=n>A?h[t]+n:-50,n>A&&e++}me.attributes.position.needsUpdate=!0,me.attributes.aDepth.needsUpdate=!0,ge.visible=e>0,typeof window<`u`&&(window.__flowWet=e)}ve();function ye(){if(F===`gpu`&&I)return I.totalSediment();let e=0;for(let t=0;t<l*l;t++)e+=g[t];return e}return{group:_e,step:se,pourAt:le,rain:ue,clear:H,totalWater:de,cellAt:U,setErosion:V,totalSediment:ye,setBackend:R,get backend(){return F},_debugReadW:()=>F===`gpu`&&I?I.readW():u.slice(),_debugReadTerr:()=>F===`gpu`&&I?I.readTerr():(P(),h.slice()),_debugReadS:()=>F===`gpu`&&I?I.totalSediment():ye(),_debugStepN:(e,t=1/60)=>{for(let n=0;n<e;n++)se(t)},get erosion(){return y},get grid(){return l},get visible(){return ge.visible}}}function Jn({extent:e=26,count:t=2e3,seed:n=7,yLo:r=.4,yHi:a=7}={}){let o=rt((n^218462737)>>>0),s=e/2,c=new Float32Array(t*3),l=new Float32Array(t),u=new Float32Array(t);for(let e=0;e<t;e++)c[e*3]=(o()*2-1)*s,c[e*3+1]=r+o()*(a-r),c[e*3+2]=(o()*2-1)*s,l[e]=o()*Math.PI*2,u[e]=.6+o()*.8;let d=new ae;d.setAttribute(`position`,new j(c,3)),d.setAttribute(`aPh`,new j(l,1)),d.setAttribute(`aSp`,new j(u,1)),d.setDrawRange(0,t);let f={uTime:{value:0},uWind:{value:0},uHalf:{value:s},uOpacity:{value:0},uColor:{value:new L(`#fff3d4`)},uPx:{value:2.2}},p=new k({uniforms:f,transparent:!0,depthWrite:!1,depthTest:!0,blending:2,vertexShader:`
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
      }`}),m=new _(d,p);m.frustumCulled=!1,m.raycast=()=>{};let h=new i;h.add(m),h.userData.dispose=()=>{d.dispose(),p.dispose()};function g(e,n,r,{wind:i=0,qualityLevel:a=0}={}){f.uTime.value=n,f.uWind.value=.25+i;let o=r?1-r.windowGlow:1;f.uOpacity.value=.09*o,d.setDrawRange(0,a>=2?t>>1:t)}return{group:h,update:g,count:t}}var Yn=[{id:`place`,label:`Place`,icon:`✚`,key:`1`},{id:`sculpt`,label:`Sculpt`,icon:`⛰`,key:`2`},{id:`paint`,label:`Paint`,icon:`🎨`,key:`3`},{id:`scatter`,label:`Objects`,icon:`🌲`,key:`4`},{id:`flow`,label:`Water`,icon:`💧`,key:`5`},{id:`select`,label:`Select`,icon:`◳`,key:`6`}],Xn=[`tree`,`rock`,`tuft`],Zn=[`gull`,`boat`,`fish`,`cloud`,`person`,`atv`,`craft`],Qn=(e,t,n)=>e<t?t:e>n?n:e;function $n({world:e,catalog:t,inspector:n}={}){let r=`sculpt`,i=1,a=!1,o={radius:2.2,strength:.03,density:.6,dropN:1},s={biome:2,scatter:`tree`,entity:`gull`},c=null,l=!1;function u(e){return Yn.some(t=>t.id===e)&&(r=e),r}function d(e){let t=Yn.find(t=>t.key===e);return t&&(r=t.id),r}function f(){return i=-i,i}function p(e){return o.radius=Qn(e,.8,6),o.radius}function m(e){return o.strength=Qn(e,.01,.15),o.strength}function h(e){return o.density=Qn(e,.1,1),o.density}function g(e){return o.dropN=[1,10,50].includes(e)?e:1,o.dropN}function _(e){return s.biome=e|0,s.biome}function v(e){return Xn.includes(e)&&(s.scatter=e),s.scatter}function y(e){return Zn.includes(e)&&(s.entity=e),s.entity}function b(e){let n=t&&t.get(e);return n?n.kind===`material`?_(n.defaults.colorIndex??s.biome):n.kind===`scatter`?v(n.defaults.geoKey):n.kind===`entity`?y(e.replace(`ent-`,``)):null:null}function x(t,n,r){let i=0;for(let a=0;a<r;a++){let r=Math.random()*Math.PI*2,a=Math.sqrt(Math.random())*o.radius;e.placeEntity(s.entity,t+Math.cos(r)*a,n+Math.sin(r)*a)&&i++}return i}function S(t,n,r){if(r<0){e.removeEntityNear(t,n,o.radius),c={x:t,z:n};return}if(o.dropN>1){l&&=(x(t,n,o.dropN),!1);return}(!c||Math.hypot(t-c.x,n-c.z)>=o.radius*.7)&&(e.placeEntity(s.entity,t,n),c={x:t,z:n})}function C(t,n,i){i!==0&&(r===`paint`?e.paintBiome(t,n,s.biome,o.radius):r===`scatter`?e.paintScatter(t,n,{type:s.scatter,density:o.density,radius:o.radius,erase:i<0}):r===`place`?S(t,n,i):r===`sculpt`?e.sculpt(t,n,i,o.radius,o.strength):r===`flow`&&i>0&&e.flowPourAt(t,n,void 0,o.radius))}let w=()=>r!==`select`&&r!==`flow`;function T(){w()&&e.snapshot(),l=!0,c=null}function E(){c=null}function D(e,t){return n?n.pickAt(e,t):null}function O(){return e.undo()}function k(){return e.snapshot()}function A(){return a=!a,e.setScatterHidden&&e.setScatterHidden(a),a}return{get tools(){return Yn},placeKinds:Zn,get tool(){return r},setTool:u,setToolByKey:d,get dir(){return i},get raise(){return i>0},toggleDir:f,brush:o,setRadius:p,setStrength:m,setDensity:h,setDropN:g,get selection(){return{...s}},get material(){return s.biome},get scatterType(){return s.scatter},get entity(){return s.entity},setMaterial:_,setScatter:v,setEntity:y,select:b,applyAt:C,beginStroke:T,endStroke:E,pickAt:D,dropEntities:x,undo:O,snapshot:k,get canUndo(){return e.canUndo},get scatterHidden(){return a},toggleHideScatter:A}}var er=120;function tr(e,t){return e.length?e[Math.min(e.length-1,Math.max(0,Math.round(t/100*(e.length-1))))]:0}function nr({renderer:e}){let t=e.getContext(),n=!1,r=new Float32Array(er),i=0,a=0,o=0,s=0,c=t.getExtension&&t.getExtension(`EXT_disjoint_timer_query_webgl2`),l=[],u=null,d=null,f=c&&c.TIME_ELAPSED_EXT,p=c&&c.GPU_DISJOINT_EXT,m=null,h=0,g=!1,_={fps:0,cpuMs:{p50:0,p95:0,p99:0},gpuMs:null,info:null,leak:!1,gpuTimer:!!c},v=0,y=typeof performance<`u`?performance.now():0;function b(){n||=(e.info.autoReset=!1,!0),o=performance.now();let r=e.info;_.info={calls:r.render.calls,tris:r.render.triangles,programs:r.programs?r.programs.length:0,geo:r.memory.geometries,tex:r.memory.textures},r.reset(),c&&!u&&(u=t.createQuery(),t.beginQuery(f,u))}function x(){if(r[a]=performance.now()-o+s,a=(a+1)%er,i<er&&i++,c&&u&&(t.endQuery(f),l.push(u),u=null),c&&l.length){let e=l[0],n=t.getQueryParameter(e,t.QUERY_RESULT_AVAILABLE),r=t.getParameter(p);(n||r)&&(l.shift(),n&&!r&&(d=t.getQueryParameter(e,t.QUERY_RESULT)/1e6),t.deleteQuery(e))}if(_.info){let e=_.info.geo+_.info.tex;m==null?m=e:e>m+200?(h++,h>300&&(g=!0)):h=Math.max(0,h-2)}v++;let e=performance.now();if(e-y>=1e3){let t=Array.from(r.subarray(0,i)).sort((e,t)=>e-t);_.fps=v,_.cpuMs={p50:+tr(t,50).toFixed(2),p95:+tr(t,95).toFixed(2),p99:+tr(t,99).toFixed(2)},_.gpuMs=d==null?null:+d.toFixed(2),_.leak=g,v=0,y=e,typeof window<`u`&&(window.__fps=_.fps,window.__perf=C())}}function S(){return i?tr(Array.from(r.subarray(0,i)).sort((e,t)=>e-t),95):0}function C(){return{fps:_.fps,cpuMs:_.cpuMs,gpuMs:_.gpuMs,info:_.info,leak:_.leak,gpuTimer:!!c}}return{frameStart:b,frameEnd:x,sample:C,p95Now:S,get gpuTimerAvailable(){return!!c},forceLoad(e=0){s=Math.max(0,e)}}}var rr=[{dpr:null,shadows:!0},{dpr:1.5,shadows:!0},{dpr:1,shadows:!0},{dpr:1,shadows:!1},{dpr:.75,shadows:!1}];function ir({profiler:e,apply:t,targetFps:n=30,strongFps:r=58}={}){let i=1e3/n,a=1e3/r,o=0,s=0,c=0,l=`full`;function u(){let n=e.p95Now();return n<=0||(n>i?(s++,c=0,s>=45&&o<rr.length-1&&(o++,s=0,l=`p95 ${n.toFixed(1)}ms > ${i.toFixed(0)}ms`,t(o,rr[o]),d(n))):n<a?(c++,s=0,c>=180&&o>0&&(o--,c=0,l=`p95 ${n.toFixed(1)}ms < ${a.toFixed(0)}ms (headroom)`,t(o,rr[o]),d(n))):(s=Math.max(0,s-1),c=Math.max(0,c-1))),o}function d(e){typeof window<`u`&&(window.__quality={level:o,of:rr.length-1,reason:l,p95:+(e||0).toFixed(1)})}return d(0),{update:u,get level(){return o},get reason(){return l},reset(){o=0,s=c=0,l=`full`,t(0,rr[0]),d(0)}}}function ar(e){let t=rt(e>>>0),n=new Uint8Array(256);for(let e=0;e<256;e++)n[e]=e;for(let e=255;e>0;e--){let r=t()*(e+1)|0,i=n[e];n[e]=n[r],n[r]=i}let r=new Uint8Array(512);for(let e=0;e<512;e++)r[e]=n[e&255];let i=e=>e*e*e*(e*(e*6-15)+10),a=(e,t,n)=>e+(t-e)*n,o=(e,t,n)=>{let r=e&4?n:t,i=e&4?t:n;return(e&1?-r:r)+(e&2?-i:i)};return(e,t)=>{let n=Math.floor(e)&255,s=Math.floor(t)&255,c=e-Math.floor(e),l=t-Math.floor(t),u=i(c),d=i(l),f=r[r[n]+s],p=r[r[n]+s+1],m=r[r[n+1]+s],h=r[r[n+1]+s+1];return a(a(o(f,c,l),o(m,c-1,l),u),a(o(p,c,l-1),o(h,c-1,l-1),u),d)}}function or(e,t,n,r,i,a){let o=.5,s=1,c=0,l=0;for(let u=0;u<r;u++)c+=o*e(t*s,n*s),l+=o,o*=a,s*=i;return c/l}function sr(e,t,n,r,i,a){let o=.5,s=1,c=0,l=0;for(let u=0;u<r;u++){let r=1-Math.abs(e(t*s,n*s));r*=r,c+=o*r,l+=o,o*=a,s*=i}return c/l}var cr=(e,t,n)=>(n=Math.max(0,Math.min(1,(n-e)/(t-e))),n*n*(3-2*n)),lr=[{key:`ocean`,color:`#2a5b7a`},{key:`beach`,color:`#d8c89a`},{key:`grassland`,color:`#6f9a4e`},{key:`forest`,color:`#3f6b3a`},{key:`hills`,color:`#8a8a55`},{key:`rock`,color:`#7d7468`},{key:`snow`,color:`#eef2f6`}],ur=Object.fromEntries(lr.map((e,t)=>[e.key,t]));function dr(e,t,n){if(e<n-.015)return ur.ocean;if(e<n+.02)return ur.beach;let r=(e-n)/(1-n);return r>.82?ur.snow:r>.6?ur.rock:r>.34?t>.45?ur.forest:ur.hills:t>.55?ur.forest:ur.grassland}var fr={valley:{freq:2.3,mtnMask:.3,mtnGain:.55,sea:.3,relief:7.5,warp:.9},archipelago:{freq:3.4,mtnMask:.18,mtnGain:.4,sea:.5,relief:6,warp:1.3},mountains:{freq:2,mtnMask:.62,mtnGain:.85,sea:.26,relief:11,warp:.8},plains:{freq:1.8,mtnMask:.12,mtnGain:.3,sea:.28,relief:4.5,warp:.7}},pr=Object.keys(fr);function mr({seed:e=1,size:t=160,preset:n=`valley`,params:r=null}={}){let i=r||fr[n]||fr.valley,a=ar(e*2+1),o=ar(e*5+9),s=ar(e*7+13),c=ar(e*3+5),l=new Float32Array(t*t),u=new Uint8Array(t*t),d=1/0,f=-1/0;for(let e=0;e<t;e++)for(let n=0;n<t;n++){let r=(n/t-.5)*i.freq,p=(e/t-.5)*i.freq,m=r+i.warp*or(c,r+5.2,p+1.3,4,2,.5),h=p+i.warp*or(c,r+9.7,p+4.1,4,2,.5),g=or(a,m,h,6,2,.5)*.5+.5,_=cr(.45,.75,or(o,r*.5,p*.5,3,2,.5)*.5+.5),v=sr(a,m*1.7+11,h*1.7+7,5,2,.5);g=g*(1-_*i.mtnMask)+v*(_*i.mtnMask*(.6+i.mtnGain));let y=n/t-.5,b=e/t-.5,x=Math.sqrt(y*y+b*b)*2;g-=cr(.62,1,x)*.55,g=Math.max(0,Math.min(1,g));let S=or(s,r*.8+3,p*.8+8,4,2,.5)*.5+.5,C=e*t+n;l[C]=g,u[C]=dr(g,S,i.sea),g<d&&(d=g),g>f&&(f=g)}return{size:t,height:l,biome:u,sea:i.sea,relief:i.relief,minH:d,maxH:f,params:i,seed:e,preset:n}}var hr=lr.map(e=>new L(e.color)),gr=new L,_r=new H,vr=new H,yr=new H;function br(e,t,n,r,i,a,o,s){let{size:c,height:l,biome:u,sea:d,relief:f}=e,{cell:p,half:m,baseY:h}=t,g=e=>e*p-m,_=e=>e*p-m,v=e=>h+(e-d)*f,y=(e,t)=>{let n=l[t*c+e],r=0,i=0;e>0&&(r+=l[t*c+e-1],i++),e<c-1&&(r+=l[t*c+e+1],i++),t>0&&(r+=l[(t-1)*c+e],i++),t<c-1&&(r+=l[(t+1)*c+e],i++);let a=Math.max(0,(i?r/i:n)-n);return Math.min(.5,a*f*.8)},b=0,x=(e,t,n,c,l,u,d,f,p,m,h,g,_)=>{_r.set(c-e,l-t,u-n),vr.set(d-e,f-t,p-n),yr.crossVectors(_r,vr).normalize();let v=[[e,t,n,h],[c,l,u,g],[d,f,p,_]];for(let[e,t,n,c]of v)r[b*3]=e,r[b*3+1]=t,r[b*3+2]=n,i[b*3]=yr.x,i[b*3+1]=yr.y,i[b*3+2]=yr.z,s&&(a[b*3]=m.r,a[b*3+1]=m.g,a[b*3+2]=m.b),o&&(o[b]=c),b++};for(let e=n.j0;e<n.j1;e++)for(let t=n.i0;t<n.i1;t++){let n=g(t),r=g(t+1),i=_(e),a=_(e+1),o=v(l[e*c+t]),s=v(l[e*c+t+1]),d=v(l[(e+1)*c+t]),f=v(l[(e+1)*c+t+1]),p=y(t,e),m=y(t+1,e),h=y(t,e+1),b=y(t+1,e+1),S=hr[u[e*c+t]],C=hr[u[(e+1)*c+t+1]];x(n,o,i,n,d,a,r,s,i,gr.copy(S),p,h,m),x(r,s,i,n,d,a,r,f,a,gr.copy(C),m,h,b)}}function xr(e,{worldSize:t=26,baseY:n=0,chunks:r=4}={}){let{size:a}=e,o=new i,s={cell:t/(a-1),half:t/2,baseY:n};o.userData.world=s;let l=Math.ceil((a-1)/r);for(let t=0;t<r;t++)for(let n=0;n<r;n++){let r=n*l,i=t*l,u=Math.min(r+l,a-1),d=Math.min(i+l,a-1);if(u<=r||d<=i)continue;let f={i0:r,j0:i,i1:u,j1:d},p=(u-r)*(d-i)*6,m=new Float32Array(p*3),h=new Float32Array(p*3),g=new Float32Array(p*3),_=new Float32Array(p);br(e,s,f,m,h,g,_,!0);let v=new ae;v.setAttribute(`position`,new j(m,3)),v.setAttribute(`normal`,new j(h,3)),v.setAttribute(`color`,new j(g,3)),v.setAttribute(`aAo`,new j(_,1)),v.computeBoundingSphere();let y=new c(v,nt(new C({vertexColors:!0,roughness:.92,metalness:0,flatShading:!0})));y.castShadow=!0,y.receiveShadow=!0,y.userData.chunk=f,o.add(y)}return o.userData.dispose=()=>o.traverse(e=>{e.isMesh&&(e.geometry.dispose(),e.material.dispose())}),o}function Sr(e,t,n,r=!1){let i=e.userData.world;for(let e of n){let n=e.geometry,a=n.attributes.aAo?n.attributes.aAo.array:null;br(t,i,e.userData.chunk,n.attributes.position.array,n.attributes.normal.array,n.attributes.color.array,a,r),n.attributes.position.needsUpdate=!0,n.attributes.normal.needsUpdate=!0,a&&(n.attributes.aAo.needsUpdate=!0),r&&(n.attributes.color.needsUpdate=!0),n.computeBoundingSphere()}}var Cr={beach:[{type:`rock`,density:.05,maxSlope:1.4}],grassland:[{type:`tree`,density:.1,maxSlope:.7},{type:`tuft`,density:.3,maxSlope:.9}],forest:[{type:`tree`,density:.62,maxSlope:.8},{type:`rock`,density:.03,maxSlope:1.2}],hills:[{type:`tree`,density:.14,maxSlope:.7},{type:`rock`,density:.16,maxSlope:1.6}],rock:[{type:`rock`,density:.22,maxSlope:2}]};function wr({terrain:e,seed:t=1,worldSize:n=26,baseY:r=0,biomeKeys:i,density:a=1,max:o=9e3}={}){let{size:s,height:c,biome:l,sea:u,relief:d}=e,f=rt((t^97155048)>>>0),p=n/(s-1),m=n/2,h=e=>r+(e-u)*d,g=(e,t)=>{let n=Math.max(1,Math.min(s-2,e)),r=Math.max(1,Math.min(s-2,t)),i=(c[r*s+n+1]-c[r*s+n-1])*d/(2*p),a=(c[(r+1)*s+n]-c[(r-1)*s+n])*d/(2*p);return Math.hypot(i,a)},_={tree:[],rock:[],tuft:[]};for(let e=1;e<s-1;e+=2)for(let t=1;t<s-1;t+=2){let n=e*s+t,r=c[n];if(r<u+.005)continue;let d=Cr[i[l[n]]];if(!d)continue;let v=g(t,e);for(let n of d){let i=f();if(v>n.maxSlope||i>n.density*a)continue;let s=_[n.type];if(s.length>=o)continue;let c=(f()-.5)*p*2,l=(f()-.5)*p*2,u=t*p-m+c,d=e*p-m+l;s.push({x:u,y:h(r),z:d,s:.7+f()*.6,r:f()*Math.PI*2,t:.82+f()*.36})}}return{placements:_,counts:{tree:_.tree.length,rock:_.rock.length,tuft:_.tuft.length}}}function Tr(e,t){let n=new L(t),r=e.attributes.position.count,i=new Float32Array(r*3),a=new Float32Array(r),o=e.attributes.position.array;for(let e=0;e<r;e++)i[e*3]=n.r,i[e*3+1]=n.g,i[e*3+2]=n.b,a[e]=Math.min(.45,Math.max(0,.42*(1-o[e*3+1]/.55)));return e.setAttribute(`color`,new j(i,3)),e.setAttribute(`aAo`,new j(a,1)),e}function Er(e){let t=0;for(let n of e)t+=n.attributes.position.count;let n=new Float32Array(t*3),r=new Float32Array(t*3),i=new Float32Array(t*3),a=new Float32Array(t),o=0;for(let t of e)n.set(t.attributes.position.array,o*3),r.set(t.attributes.normal.array,o*3),i.set(t.attributes.color.array,o*3),t.attributes.aAo&&a.set(t.attributes.aAo.array,o),o+=t.attributes.position.count;let s=new ae;return s.setAttribute(`position`,new j(n,3)),s.setAttribute(`normal`,new j(r,3)),s.setAttribute(`color`,new j(i,3)),s.setAttribute(`aAo`,new j(a,1)),s}function Dr(){return Er([Tr(new D(.045,.06,.34,6).translate(0,.17,0).toNonIndexed(),`#5b3f28`),Tr(new I(.3,.55,7).translate(0,.55,0).toNonIndexed(),`#3f7d3a`),Tr(new I(.22,.42,7).translate(0,.85,0).toNonIndexed(),`#4f9046`)])}function Or(){let e=new t(.18,0).toNonIndexed(),n=e.attributes.position,r=rt(3098);for(let e=0;e<n.count;e++){let t=.78+r()*.5;n.setXYZ(e,n.getX(e)*t,n.getY(e)*t*.8,n.getZ(e)*t)}return e.computeVertexNormals(),Tr(e,`#7d7468`)}function kr(){return Tr(new I(.06,.16,4).translate(0,.08,0).toNonIndexed(),`#6f9a4e`)}var Ar=[`tree`,`rock`,`tuft`],jr={tree:0,rock:-.05,tuft:0},Mr=new S,Nr=new N,Pr=new H,Fr=new H,Ir=new H(0,1,0),Lr=new L;function Rr(e){let t=new i;t.raycast=()=>{};let n={tree:Dr(),rock:Or(),tuft:kr()};for(let r of Ar){let i=e[r]||(e[r]=[]),a=Math.max(i.length*2,512),o=nt(new C({vertexColors:!0,roughness:.9,metalness:0,flatShading:!0}),{sway:!0}),s=new p(n[r],o,a);s.count=i.length,s.castShadow=!0,s.receiveShadow=!1,s.frustumCulled=!0,s.raycast=()=>{},s.userData.type=r,s.instanceColor=new ie(new Float32Array(a*3),3);for(let e=0;e<i.length;e++)zr(s,e,i[e],jr[r]);s.instanceMatrix.needsUpdate=!0,s.instanceColor.needsUpdate=!0,t.add(s)}return t.userData.placements=e,t.userData.yoff=jr,t.userData.dispose=()=>t.traverse(e=>{e.isInstancedMesh&&(e.geometry.dispose(),e.material.dispose())}),t}function zr(e,t,n,r){Pr.set(n.x,n.y+(r||0),n.z),Nr.setFromAxisAngle(Ir,n.r),Fr.setScalar(n.s),e.setMatrixAt(t,Mr.compose(Pr,Nr,Fr)),e.setColorAt(t,Lr.setScalar(n.t))}var Br=(e,t)=>e.children.find(e=>e.isInstancedMesh&&e.userData.type===t);function Vr(e,t){let n=t.instanceMatrix.count*2,r=new p(t.geometry,t.material,n);return r.count=t.count,r.castShadow=!0,r.receiveShadow=!1,r.frustumCulled=!0,r.raycast=()=>{},r.userData.type=t.userData.type,r.instanceColor=new ie(new Float32Array(n*3),3),r.instanceMatrix.array.set(t.instanceMatrix.array.subarray(0,t.count*16)),r.instanceColor.array.set(t.instanceColor.array.subarray(0,t.count*3)),r.instanceMatrix.needsUpdate=!0,r.instanceColor.needsUpdate=!0,e.remove(t),t.dispose(),e.add(r),r}function Hr(e,t,n,r,i,a,o,s){let c=Br(e,t);if(!c)return!1;let l=e.userData.placements[t];l.length>=c.instanceMatrix.count&&(c=Vr(e,c));let u=l.length;return l.push({x:n,y:r,z:i,s:a,r:o,t:s}),zr(c,u,l[u],(e.userData.yoff||{})[t]||0),c.count=l.length,c.instanceMatrix.needsUpdate=!0,c.instanceColor.needsUpdate=!0,!0}function Ur(e,t,n,r,i){let a=t===`all`?Ar:[t],o=i*i,s=0;for(let t of a){let i=Br(e,t);if(!i)continue;let a=e.userData.placements[t],c=i.instanceMatrix.array,l=i.instanceColor&&i.instanceColor.array;for(let e=a.length-1;e>=0;e--){let t=a[e];if((t.x-n)*(t.x-n)+(t.z-r)*(t.z-r)>o)continue;let i=a.length-1;if(e!==i){a[e]=a[i];for(let t=0;t<16;t++)c[e*16+t]=c[i*16+t];if(l)for(let t=0;t<3;t++)l[e*3+t]=l[i*3+t]}a.pop(),s++}i.count=a.length,i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0)}return s}var Wr={tree:.85,rock:2,tuft:.95};function Gr(e,t,{worldSize:n=26,baseY:r=0}={}){let i=e.userData.placements,a=e.userData.yoff||{};if(!i)return;let{size:o,height:s,sea:c,relief:l}=t,u=n/(o-1),d=n/2,f=e=>e<0?0:e>=o?o-1:e,p=(e,t)=>s[f(Math.round((t+d)/u))*o+f(Math.round((e+d)/u))],m=(e,t)=>{let n=Math.max(1,Math.min(o-2,Math.round((e+d)/u))),r=Math.max(1,Math.min(o-2,Math.round((t+d)/u))),i=(s[r*o+n+1]-s[r*o+n-1])*l/(2*u),a=(s[(r+1)*o+n]-s[(r-1)*o+n])*l/(2*u);return Math.hypot(i,a)},h=new S,g=new N,_=new H,v=new H,y=new H(0,1,0),b=new L;for(let t of e.children){let e=t.userData.type,n=i[e];if(!n||!t.isInstancedMesh)continue;let o=Wr[e]??1.5,s=t.instanceMatrix.count,u=Math.min(n.length,s);t.count=u;for(let i=0;i<u;i++){let s=n[i],u=p(s.x,s.z),d=u<c+.005||m(s.x,s.z)>o;_.set(s.x,r+(u-c)*l+(a[e]||0),s.z),g.setFromAxisAngle(y,s.r),v.setScalar(d?0:s.s),h.compose(_,g,v),t.setMatrixAt(i,h),t.setColorAt(i,b.setScalar(s.t))}t.instanceMatrix.needsUpdate=!0,t.instanceColor&&(t.instanceColor.needsUpdate=!0)}}function Kr({terrain:e,seed:t,worldSize:n,baseY:r,biomeKeys:i,density:a,max:o}){let{placements:s,counts:c}=wr({terrain:e,seed:t,worldSize:n,baseY:r,biomeKeys:i,density:a,max:o}),l=Rr(s);return l.userData.counts=c,l}function qr(e,{worldSize:t=26,baseY:n=0,maxLakes:r=3}={}){let{size:i,height:a,sea:o,relief:s,maxH:c}=e,l=Math.floor((i-1)/3),u=t/(i-1),d=t/2,f=(e,t)=>a[t*3*i+e*3],p=e=>e*3*u-d,m=e=>e*3*u-d,h=e=>e>o+.02,g=o+.55*Math.max(.001,c-o),_=[];for(let e=2;e<l-2;e++)for(let t=2;t<l-2;t++){let n=f(t,e);if(!h(n)||n>g)continue;let r=!0;for(let i=-1;i<=1&&r;i++)for(let a=-1;a<=1;a++)if((a||i)&&f(t+a,e+i)<n){r=!1;break}r&&_.push({gi:t,gj:e,h:n})}_.sort((e,t)=>e.h-t.h);let v=new Uint8Array(l*l),y=[];for(let e of _){if(y.length>=r)break;if(v[e.gj*l+e.gi])continue;let t=e.h+.045,i=[[e.gi,e.gj]],a=new Set,c=!0,d=0,h=0,g=0,_=[];for(;i.length;){let[e,n]=i.pop(),r=n*l+e;if(a.has(r))continue;if(a.add(r),e<=0||e>=l-1||n<=0||n>=l-1){c=!1;continue}let s=f(e,n);if(s<o){c=!1;continue}if(!(s>=t)){if(_.push(r),d+=e,h+=n,g++,g>520){c=!1;break}i.push([e+1,n],[e-1,n],[e,n+1],[e,n-1])}}if(!c||g<5)continue;for(let e of _)v[e]=1;let b=d/g,x=h/g,S=3*u,C=g*S*S,w=.82*Math.sqrt(C/Math.PI);y.push({cx:p(b),cz:m(x),y:n+(t-o)*s,radius:w,area:C})}return y}function Jr(e,{material:t}={}){let n=new i;n.raycast=()=>{};let r=t||new C({color:`#3f6f8c`,roughness:.08,metalness:.35,transparent:!0,opacity:.88});for(let t of e){let e=new c(new ue(t.radius,28),r);e.rotation.x=-Math.PI/2,e.position.set(t.cx,t.y+.012,t.cz),e.receiveShadow=!1,e.castShadow=!1,e.raycast=()=>{},n.add(e)}return n.userData.dispose=()=>n.traverse(e=>{e.isMesh&&e.geometry.dispose()}),n.userData.count=e.length,n}function Yr(e,t={}){let n=qr(e,t),r=Jr(n,t);return r.userData.lakes=n,r}function Xr(){let e=new Map,t={register(n){return!n||!n.id?t:(n.art=n.art||{},n.defaults=n.defaults||{},e.set(n.id,n),t)},registerAll(e){for(let n of e)t.register(n);return t},get(t){return e.get(t)},byKind(t){return[...e.values()].filter(e=>e.kind===t)},byGroup(t){return[...e.values()].filter(e=>e.group===t)},all(){return[...e.values()]},setArt(n,r){let i=e.get(n);return i&&(i.art={...i.art,...r}),t},get size(){return e.size}};return t}function Zr(e=Xr()){return lr.forEach((t,n)=>e.register({id:`mat-${t.key}`,label:Qr(t.key),kind:`material`,group:`Terrain`,defaults:{colorIndex:n},art:{icon:t.color,placeholder:!0}})),e.registerAll([{id:`scatter-tree`,label:`Tree`,kind:`scatter`,group:`Vegetation`,defaults:{geoKey:`tree`,density:.4,maxSlope:.85},art:{icon:`🌲`,factory:null,placeholder:!0}},{id:`scatter-rock`,label:`Rock`,kind:`scatter`,group:`Rock`,defaults:{geoKey:`rock`,density:.2,maxSlope:2},art:{icon:`🪨`,factory:null,placeholder:!0}},{id:`scatter-tuft`,label:`Grass tuft`,kind:`scatter`,group:`Vegetation`,defaults:{geoKey:`tuft`,density:.3,maxSlope:.95},art:{icon:`🌱`,factory:null,placeholder:!0}}]),e.registerAll([{id:`ent-person`,label:`Person`,kind:`entity`,group:`Life`,defaults:{medium:`ground`},art:{icon:`🚶`,placeholder:!0}},{id:`ent-car`,label:`Car`,kind:`entity`,group:`Life`,defaults:{medium:`road`},art:{icon:`🚗`,placeholder:!0}},{id:`ent-boat`,label:`Boat`,kind:`entity`,group:`Life`,defaults:{medium:`water`},art:{icon:`⛵`,placeholder:!0}},{id:`ent-fish`,label:`Fish`,kind:`entity`,group:`Life`,defaults:{medium:`water`},art:{icon:`🐟`,placeholder:!0}},{id:`ent-gull`,label:`Gull`,kind:`entity`,group:`Life`,defaults:{medium:`air`},art:{icon:`🕊`,placeholder:!0}},{id:`ent-cloud`,label:`Cloud`,kind:`entity`,group:`Sky`,defaults:{medium:`air`},art:{icon:`☁️`,placeholder:!0}},{id:`ent-atv`,label:`ATV`,kind:`entity`,group:`Vehicles`,defaults:{medium:`ground`,pilotable:!0,roam:`all-terrain`,model:`ground`},art:{icon:`🛻`,placeholder:!0}},{id:`ent-craft`,label:`Spacecraft`,kind:`entity`,group:`Vehicles`,defaults:{medium:`air`,pilotable:!0,roam:`all-medium`,model:`spacecraft`},art:{icon:`🛸`,placeholder:!0}}]),e}var Qr=e=>e.charAt(0).toUpperCase()+e.slice(1);function $r({scale:e=90}={}){let t=new me;t.scale.setScalar(e),t.frustumCulled=!1,t.raycast=()=>{},t.visible=!1;let n=t.material.uniforms;n.turbidity.value=2.2,n.rayleigh.value=1.3,n.mieCoefficient.value=.005,n.mieDirectionalG.value=.78,n.showSunDisc.value=0;function r(e){n.sunPosition.value.copy(e)}function i(e){e&&(e.turbidity!=null&&(n.turbidity.value=e.turbidity),e.rayleigh!=null&&(n.rayleigh.value=e.rayleigh),e.mie!=null&&(n.mieCoefficient.value=e.mie),e.mieG!=null&&(n.mieDirectionalG.value=e.mieG))}let a=null,o=null,s=null,c=null;function l(t){if(typeof document>`u`||!t)return null;a||(a=new U(t),o=new re,s=new me,s.scale.setScalar(e),o.add(s));let r=s.material.uniforms;return r.turbidity.value=n.turbidity.value,r.rayleigh.value=n.rayleigh.value,r.mieCoefficient.value=n.mieCoefficient.value,r.mieDirectionalG.value=n.mieDirectionalG.value,r.sunPosition.value.copy(n.sunPosition.value),c&&c.dispose(),c=a.fromScene(o),c.texture}return{mesh:t,setSun:r,setParams:i,buildEnv:l,get material(){return t.material}}}var ei=`attribute float aSize;
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
}`,ti=`precision highp float;

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
}`,ni={realistic:0,charm:0,pixel:2,vector:1},ri={realistic:1,charm:1,pixel:1.9,vector:1.2};function ii({seed:e=1517,count:t=340,spreadX:n=21,yLo:r=3,yHi:a=18,zBase:s=7.2}={}){let c=new i;c.raycast=()=>{};let u=rt(e>>>0),d=new Float32Array(t*3),f=new Float32Array(t),p=new Float32Array(t),m=new Float32Array(t),h=[];for(let e=0;e<t;e++){let t=(u()*2-1)*n,i=r+u()*(a-r),o=-s-u()*.7;d[e*3]=t,d[e*3+1]=i,d[e*3+2]=o;let c=.35+u()*.65;p[e]=c,f[e]=1.6+u()*2.8+(c>.85?2.2:0),m[e]=u()*Math.PI*2,c>.82&&h.push([t,i,o])}let g=new ae;g.setAttribute(`position`,new j(d,3)),g.setAttribute(`aSize`,new j(f,1)),g.setAttribute(`aBright`,new j(p,1)),g.setAttribute(`aPhase`,new j(m,1));let v=new k({vertexShader:ei,fragmentShader:ti,uniforms:{uTime:{value:0},uTwinkle:{value:1},uSizeScale:{value:1},uColor:{value:new L(`#eaf0ff`)},uNight:{value:0},uMode:{value:0}},transparent:!0,depthWrite:!1,blending:2,fog:!1,toneMapped:!1}),y=new _(g,v);y.raycast=()=>{},y.frustumCulled=!1,c.add(y);let b=[];if(h.length>6)for(let e=0;e<3;e++){let e=Math.floor(u()*h.length);for(let t=0;t<3;t++){let t=h[e],n=h[(e+1+Math.floor(u()*2))%h.length];b.push(t[0],t[1],t[2],n[0],n[1],n[2]),e=(e+1)%h.length}}let x=[[[0,2],[0,0]],[[0,0],[.7,0]],[[2.1,2],[1.4,2]],[[1.4,2],[1.4,0]],[[1.4,0],[2.1,0]],[[2.1,0],[2.1,1]],[[2.1,1],[1.7,1]],[[2.8,0],[2.8,2]],[[2.8,2],[3.5,2]],[[3.5,2],[3.5,1]],[[3.5,1],[2.8,1]],[[2.8,1],[3.6,0]]],S=-s-.4,C=.62;for(let[[e,t],[n,r]]of x)b.push(-3+e*C,12+t*C,S,-3+n*C,12+r*C,S);let w=new ae;w.setAttribute(`position`,new ye(b,3));let T=new l(w,new o({color:`#9fb6e8`,transparent:!0,opacity:0,depthWrite:!1,fog:!1,toneMapped:!1}));T.raycast=()=>{},T.frustumCulled=!1,c.add(T);let E=new z(new _e({map:ai(),transparent:!0,opacity:0,depthWrite:!1,blending:2,fog:!1,toneMapped:!1}));E.raycast=()=>{},E.scale.set(n*2.4,n*.95,1),E.position.set(2,12,-s-.7),E.material.rotation=-.5,E.renderOrder=-3,c.add(E);let D=-1;function O(e,t=`realistic`,n=0,r=!1){v.uniforms.uTime.value=n,v.uniforms.uTwinkle.value=+!r,v.uniforms.uNight.value=e;let i=ni[t]??0;i!==D&&(v.uniforms.uMode.value=i,D=i),v.uniforms.uSizeScale.value=ri[t]??1,T.material.opacity=e*.5,E.material.opacity=e*.32,c.visible=e>.001}return{group:c,update:O}}function ai(){let e=document.createElement(`canvas`);e.width=e.height=256;let t=e.getContext(`2d`),n=t.createRadialGradient(256/2,256/2,0,256/2,256/2,256/2);n.addColorStop(0,`rgba(150,170,230,0.5)`),n.addColorStop(.4,`rgba(120,130,200,0.22)`),n.addColorStop(1,`rgba(90,100,160,0)`),t.fillStyle=n,t.fillRect(0,0,256,256);let r=rt(20145);for(let e=0;e<7;e++){let e=40+r()*176,n=70+r()*116,i=14+r()*30,a=t.createRadialGradient(e,n,0,e,n,i);a.addColorStop(0,`rgba(200,210,255,0.18)`),a.addColorStop(1,`rgba(200,210,255,0)`),t.fillStyle=a,t.beginPath(),t.arc(e,n,i,0,Math.PI*2),t.fill()}let i=new ge(e);return i.colorSpace=fe,i}var oi=Math.PI*2;function si(e){let t=document.createElement(`canvas`);t.width=t.height=128;let n=t.getContext(`2d`),r=n.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return r.addColorStop(0,`#ffffff`),r.addColorStop(.34,`#fffaf0`),r.addColorStop(.66,e),r.addColorStop(.86,e),r.addColorStop(1,`rgba(255,255,255,0)`),n.fillStyle=r,n.beginPath(),n.arc(128/2,128/2,128/2,0,oi),n.fill(),hi(t,!0)}function ci(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);n.addColorStop(0,`#ffffff`),n.addColorStop(.4,`#eef3ff`),n.addColorStop(.82,`#c4cee6`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,128/2,0,oi),t.fill(),t.globalAlpha=.14,t.fillStyle=`#8b97b4`;for(let[e,n,r]of[[54,50,9],[78,66,7],[60,82,5]])t.beginPath(),t.arc(e,n,r,0,oi),t.fill();return hi(e,!0)}function li(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`);t.translate(128/2,128/2),t.fillStyle=`rgba(255,210,120,0.9)`;for(let e=0;e<12;e++)t.rotate(oi/12),t.beginPath(),t.moveTo(0,-28),t.lineTo(7,-54),t.lineTo(-7,-54),t.closePath(),t.fill();let n=t.createRadialGradient(0,0,0,0,0,32);return n.addColorStop(0,`#ffffff`),n.addColorStop(.4,`#fff1c8`),n.addColorStop(.8,`#ffb24a`),n.addColorStop(1,`#ff8a2a`),t.fillStyle=n,t.beginPath(),t.arc(0,0,32,0,oi),t.fill(),hi(e,!0)}function ui(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,46);n.addColorStop(0,`#ffffff`),n.addColorStop(.5,`#e6ecfb`),n.addColorStop(1,`#c2cce4`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,46,0,oi),t.fill(),t.fillStyle=`#aab6d2`;for(let[e,n,r]of[[52,48,11],[80,62,8],[58,82,7],[40,66,5]])t.beginPath(),t.arc(e,n,r,0,oi),t.fill();return hi(e,!0)}function di(e,t,n){let r=document.createElement(`canvas`);r.width=r.height=144;let i=r.getContext(`2d`),a=17/2,o=18/2-.5;for(let r=0;r<18;r++)for(let s=0;s<18;s++){let c=Math.hypot(s-a,r-a);c>o||(i.fillStyle=c<o*.45?e:c<o*.78?t:n,i.fillRect(Math.round(s*8),Math.round(r*8),8,8))}return hi(r,!1)}function fi(e,t,n=!1){let r=document.createElement(`canvas`);r.width=r.height=128;let i=r.getContext(`2d`);if(i.fillStyle=t,i.beginPath(),i.arc(64,64,58,0,oi),i.fill(),i.fillStyle=e,i.beginPath(),i.arc(64,64,50,0,oi),i.fill(),n){i.globalAlpha=.5,i.fillStyle=t;for(let[e,t,n]of[[10,-12,10],[-16,6,7],[4,18,5]])i.beginPath(),i.arc(64+e,64+t,n,0,oi),i.fill()}return hi(r,!0)}function pi(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return n.addColorStop(0,`rgba(255,255,255,0.9)`),n.addColorStop(.38,`rgba(255,255,255,0.3)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,128/2,0,oi),t.fill(),hi(e,!0)}function mi(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2),r=`20,30,48`;return n.addColorStop(0,`rgba(${r},0)`),n.addColorStop(.42,`rgba(${r},0)`),n.addColorStop(.6,`rgba(${r},0.6)`),n.addColorStop(1,`rgba(${r},0)`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,128/2,0,oi),t.fill(),hi(e,!0)}function hi(e,t){let n=new ge(e);return n.colorSpace=fe,t||(n.magFilter=s,n.minFilter=s),n}var gi=(e,t,n)=>{let r=Math.max(0,Math.min(1,(e-t)/(n-t)));return r*r*(3-2*r)};function _i({R:e=88,sunSize:t=6,moonSize:n=5.5}={}){let r=new i;r.raycast=()=>{};let a=(e,t)=>{let n=new z(new _e({map:e,transparent:!0,depthTest:!0,depthWrite:!1,fog:!1,toneMapped:!1,...t?{blending:2}:{}}));return n.raycast=()=>{},n},o={realistic:si(`#ffcf8a`),charm:li(),pixel:di(`#fff6e0`,`#ffc24a`,`#ff8a2a`),vector:fi(`#ffd24a`,`#ff9a2e`)},s={realistic:ci(),charm:ui(),pixel:di(`#ffffff`,`#cdd6ee`,`#9aa6c6`),vector:fi(`#e8eefc`,`#b9c6e4`,!0)},c=pi(),l=a(mi(),!1),u=a(c,!0),d=a(o.realistic),f=a(c,!0),p=a(s.realistic);r.add(l,u,d,f,p);let m=ii({});r.add(m.group);let h=typeof window<`u`&&window.matchMedia?window.matchMedia(`(prefers-reduced-motion: reduce)`):null,g={realistic:{sunGlow:3,sunGlowOp:.7,moonGlow:2.6,moonGlowOp:.5,sizeMul:1,sunHaloOp:.85},charm:{sunGlow:2.2,sunGlowOp:.55,moonGlow:2.1,moonGlowOp:.42,sizeMul:1.08,sunHaloOp:.7},pixel:{sunGlow:1.7,sunGlowOp:.4,moonGlow:1.7,moonGlowOp:.32,sizeMul:1,sunHaloOp:.6},vector:{sunGlow:1.4,sunGlowOp:.28,moonGlow:1.4,moonGlowOp:.22,sizeMul:1,sunHaloOp:.5}},_=`realistic`;function v(e){e===_||!g[e]||(_=e,d.material.map=o[e],d.material.needsUpdate=!0,p.material.map=s[e],p.material.needsUpdate=!0)}new L;let y=new L(`#fff3df`),b=new L(`#ffb060`),x=new L(`#ff6a2a`),S=new L(`#eef2ff`),C=new L(`#9fbcff`),w=new H(0,1,0),T=new H(0,-1,0),E=new H;function D(e,r,i,a,o=`realistic`,s=null){v(o);let c=g[_],E=i.sunArc,D=a?Math.min(1,(a.cloud||0)*.85+(a.fog||0)*.7):0,k=E.y,A=gi(k,-.04,.1)*(1-.7*D),j=1-gi(Math.abs(k),.02,.5),M=t*c.sizeMul*(1+.55*j);w.copy(E);let ee=_===`realistic`;d.scale.setScalar(M),u.scale.setScalar(M*c.sunGlow),d.material.color.copy(y),ee&&d.material.color.multiplyScalar(3),u.material.color.copy(b).lerp(x,j),d.material.opacity=A,u.material.opacity=A*c.sunGlowOp*(.7+.5*j)*(ee?.5:1),l.scale.setScalar(M*1.7),l.material.opacity=ee?0:A*(1-j)*c.sunHaloOp;let te=gi(-E.y,-.04,.1)*(1-.65*D),N=n*c.sizeMul;T.copy(E).negate(),p.scale.setScalar(N),f.scale.setScalar(N*c.moonGlow),p.material.color.copy(S),f.material.color.copy(C),p.material.opacity=te,f.material.opacity=te*c.moonGlowOp,O(s);let P=gi(-E.y,-.05,.18)*(1-.85*D);m.update(P,o,r,!!(h&&h.matches)),typeof window<`u`&&(window.__celestial={sun:d.position.toArray(),dir:w.toArray().map(e=>+e.toFixed(3)),sunVis:+A.toFixed(3),moonVis:+te.toFixed(3)})}function O(t){t&&(t.getWorldPosition(E),d.position.copy(E).addScaledVector(w,e),u.position.copy(d.position),l.position.copy(d.position),p.position.copy(E).addScaledVector(T,e),f.position.copy(p.position))}return{group:r,update:D,place:O}}var vi=`varying vec2 vUv;

void main() {
  
  
  
  vUv = uv;

  
  
  
  
  
  
  
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,yi=`precision highp float;

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
}`,bi=`precision highp float;

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
}`,xi=`precision highp float;

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
}`,Si=`precision highp float;

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
}`,Ci=`const float CA_STRENGTH   = 0.0030;  
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
}`,wi=`const float DITHER = 0.55;   

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
}`,Ti=`precision highp float;

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
}`,Ei=`precision highp float;

varying vec2 vUv;
uniform sampler2D uToon;   
uniform sampler2D uPixel;  
uniform float     uBlend;  

void main() {
  vec3 t = texture2D(uToon, vUv).rgb;
  vec3 p = texture2D(uPixel, vUv).rgb;
  gl_FragColor = vec4(mix(t, p, uBlend), 1.0);
}`,Di=`varying vec2 vUv;
uniform sampler2D uScene;
uniform float     uThreshold;   

void main() {
  vec3 c = texture2D(uScene, vUv).rgb;
  float l = dot(c, vec3(0.2126, 0.7152, 0.0722));        
  float k = smoothstep(uThreshold, uThreshold + 0.22, l); 
  gl_FragColor = vec4(c * k, 1.0);
}`,Oi=`varying vec2 vUv;
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
}`,ki=`precision highp float;

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
}`,Ai={"1-bit":{gridWidth:110,dither:.6,palette:[`#15120c`,`#c8b486`]},gb:{gridWidth:130,dither:.4,palette:[`#0f380f`,`#306230`,`#8bac0f`,`#9bbc0f`]},"8-bit":{gridWidth:160,dither:.55,palette:[`#140c1c`,`#442434`,`#30346d`,`#4e4a4e`,`#854c30`,`#346524`,`#d04648`,`#757161`,`#597dce`,`#d27d2c`,`#8595a1`,`#6daa2c`,`#d2aa99`,`#6dc2ca`,`#dad45e`,`#deeed6`]},"16-bit":{gridWidth:280,dither:.3,palette:`#000000.#222034.#45283c.#663931.#8f563b.#df7126.#d9a066.#eec39a.#fbf236.#99e550.#6abe30.#37946e.#4b692f.#524b24.#323c39.#3f3f74.#306082.#5b6ee1.#639bff.#5fcde4.#cbdbfc.#ffffff.#9badb7.#847e87.#696a6a.#595652.#76428a.#ac3232.#d95763.#d77bba.#8f974a.#8a6f30`.split(`.`)},modern:{gridWidth:460,dither:.6,palette:null}},ji=[`gb`,`8-bit`,`16-bit`,`modern`];function Mi(e){let t=Math.max(e.length,1),n=new Float32Array(t*4);e.forEach((e,t)=>{let r=new L(e);n[t*4+0]=r.r,n[t*4+1]=r.g,n[t*4+2]=r.b,n[t*4+3]=1});let r=new ve(n,t,1,he,b);return r.minFilter=s,r.magFilter=s,r.needsUpdate=!0,r}var Ni=220,Pi={night:[`#0A0C16`,`#1C2236`,`#3A3A52`,`#5A5A78`,`#8A92B0`],dawn:[`#1A1008`,`#43281A`,`#7A4A30`,`#B07A4E`,`#E8A86A`],noon:[`#16100A`,`#3A2F1E`,`#6B563A`,`#937B54`,`#B89968`],dusk:[`#140A0A`,`#3E1E1A`,`#7A3828`,`#B85A36`,`#F0884A`]},Fi={night:[`#020604`,`#06180E`,`#10401E`,`#1E9040`,`#7FE0FF`],dawn:[`#060603`,`#1A2410`,`#3A6B22`,`#6CC040`,`#FFC060`],noon:[`#050805`,`#0E2912`,`#1E6B2F`,`#3CF06A`,`#FFB000`],dusk:[`#080402`,`#241408`,`#6B4A12`,`#E0A030`,`#FF7030`]};function Ii(e){if(typeof document>`u`||document.getElementById(`lgr-nowebgl`))return;let t=document.createElement(`div`);t.id=`lgr-nowebgl`,t.style.cssText=`position:fixed;inset:0;z-index:99999;display:flex;align-items:center;justify-content:center;background:#0e1116;color:#cdd6e4;font:16px/1.6 system-ui,-apple-system,sans-serif;text-align:center;padding:2rem;`,t.innerHTML=`<div style="max-width:30rem"><div style="font-size:2.4rem;margin-bottom:1rem">🌊</div><h1 style="font-size:1.3rem;margin:0 0 .6rem;color:#fff;font-weight:600">This experience needs a modern browser</h1><p style="margin:0;color:#9aa6b8">`+e+`</p></div>`,document.body&&document.body.appendChild(t)}function Li({demo:e=!1,citySeed:t=0,profileIndex:r=0}={}){let o;try{o=new ne({antialias:!0,preserveDrawingBuffer:!0})}catch(e){throw Ii(`This experience needs WebGL2 — please open it in an up-to-date browser (Chrome, Edge, Firefox, or Safari on iOS 15+) with hardware acceleration enabled.`),e}o.shadowMap.enabled=!0,o.shadowMap.type=1,o.shadowMap.autoUpdate=!1,o.shadowMap.needsUpdate=!0;let l=!!(window.matchMedia&&window.matchMedia(`(pointer: coarse)`).matches),u=l?1.5:2;o.setPixelRatio(Math.min(window.devicePixelRatio,u)),o.setSize(window.innerWidth,window.innerHeight),o.setClearColor(920327,1),document.body.appendChild(o.domElement);let d=o.getDrawingBufferSize(new F),p=!1,m=!1,g=()=>{};o.domElement.addEventListener(`webglcontextlost`,e=>{e.preventDefault(),p=!0,typeof window<`u`&&(window.__contextLost=!0)},!1),o.domElement.addEventListener(`webglcontextrestored`,()=>{g(),p=!1,typeof window<`u`&&(window.__contextLost=!1)},!1);let _=new re;_.fog=new a(10465470,0);let v=new L(`#aeb6c0`),y=.062,b=new L(`#74508f`),S=new L,w=Le({aspect:window.innerWidth/window.innerHeight}),T=Ot({t:.5}),D=o.getContext(),O=!!(D&&D.getExtension&&(D.getExtension(`EXT_color_buffer_float`)||D.getExtension(`EXT_color_buffer_half_float`)));!O&&typeof console<`u`&&console.info(`[L90 H1] No float colour buffer (EXT_color_buffer_float/half_float) — wave sim OFF, flat-sea fallback.`);let A={type:h,format:he,minFilter:s,magFilter:s,wrapS:oe,wrapT:oe,depthBuffer:!1,stencilBuffer:!1},j=O?[new B(256,256,A),new B(256,256,A),new B(256,256,A)]:null;if(j){for(let e of j)o.setRenderTarget(e),o.clear();o.setRenderTarget(null)}let M=new ve(new Uint8Array([0,0,0,255]),1,1,he);M.needsUpdate=!0;let ee=new re,te=new de(-1,1,1,-1,0,1),N=new k({vertexShader:Rn,fragmentShader:bi,uniforms:{uCurr:{value:null},uPrev:{value:null},uTexel:{value:new F(1/256,1/256)},uMouse:{value:new F(-1,-1)},uMouseStrength:{value:0},uC2:{value:.25},uDamping:{value:.992},uRainCount:{value:0},uRainDrops:{value:Array.from({length:8},()=>new H)},uWakeCount:{value:0},uWakeDrops:{value:Array.from({length:8},()=>new H)}}});ee.add(new c(new E(2,2),N));let P=new B(d.x,d.y,{minFilter:f,magFilter:f,depthBuffer:!0,stencilBuffer:!1});function I(e){let t=document.createElement(`canvas`);t.width=t.height=1024;let n=t.getContext(`2d`);n.fillStyle=e?`#0c1418`:`#15110b`,n.fillRect(0,0,1024,1024),n.strokeStyle=e?`rgba(120,150,170,0.22)`:`rgba(184,153,104,0.30)`,n.lineWidth=2;for(let e=0;e<=1024;e+=64)n.beginPath(),n.moveTo(e,0),n.lineTo(e,1024),n.stroke(),n.beginPath(),n.moveTo(0,e),n.lineTo(1024,e),n.stroke();e||(n.fillStyle=`#B89968`,n.font=`bold 360px Georgia, serif`,n.textAlign=`center`,n.textBaseline=`middle`,n.fillText(`LGR`,512,470),n.font=`600 64px ui-monospace, monospace`,n.fillText(`WEB · STUDIO`,512,720));let r=new ge(t);return r.colorSpace=fe,r}let ie=new c(new E(28,28),new x({map:I(e)}));ie.rotation.x=-Math.PI/2,ie.position.y=-.35,_.add(ie);let R=new c(new E(40,24),new k({depthWrite:!1,vertexShader:vi,fragmentShader:yi,uniforms:{uTime:{value:0},uInk:{value:T.horizon},uGold:{value:T.sky},uFogColor:{value:S},uFogAmt:{value:0},uFogCharm:Ge}}));R.position.set(0,3,-8),_.add(R);let ae=new k({vertexShader:xi,fragmentShader:Si,uniforms:{uHeight:{value:O?null:M},uScene:{value:P.texture},uTexel:{value:new F(1/256,1/256)},uResolution:{value:new F(d.x,d.y)},uDisplace:{value:.42},uNormalStrength:{value:22},uRefractStrength:{value:.06},uChromaScale:{value:1},uNormalMatrix:{value:new n},uLightDir:{value:T.sunDir},uInk:{value:new L(`#2A2218`)},uGold:{value:new L(`#B89968`)},uVector:Re,uVecWater:{value:new L(`#1fb8d8`)},uVecTint:{value:Be}}}),z=new c(new E(28,28,255,255),ae);z.rotation.x=-Math.PI/2,z.updateMatrixWorld(!0),ae.uniforms.uNormalMatrix.value.getNormalMatrix(z.matrixWorld),_.add(z);let se={value:0},ce=tn({windowGlow:se}),V=bt({seed:t,profileIndex:r,landmarkFactory:ce,windowGlow:se});_.add(V.group);let le=Nt({plinthTop:.3,extent:V.extent,profile:V.state.profile});_.add(le.group);let ue=Wt({extent:V.extent,waterSize:28,plinthTop:.3});_.add(ue.group),N.uniforms.uWakeDrops.value=ue.wakeDrops;let U=rn({extent:V.extent});_.add(U.group),N.uniforms.uRainDrops.value=U.rainDrops;let W=on({extent:V.extent});_.add(W.group);let pe=[le,ue,W],me=ln({rig:w,getCamera:()=>w.camera,sources:pe}),_e=_i();_.add(_e.group);let ye=$r({scale:90});_.add(ye.mesh),_.environmentIntensity=.32;let be=!1;function Se(e){let t=e&&T.sunArc.y>-.04;t!==be&&(be=t,ye.mesh.visible=t,R.visible=!t)}let Ce=null,we=-1;g=()=>{Ce=null,we=-1,o.shadowMap.needsUpdate=!0};function Te(){let e=Math.floor(T.t%1*4)%4;return(e!==we||!Ce)&&(we=e,Ce=ye.buildEnv(o)),Ce}let K=null,q=null,Ee=null,J=null,De=!1,Oe=1234,ke=`valley`,Ae=lr.map(e=>e.key),je=new C({color:`#3f6f8c`,roughness:.07,metalness:.4,transparent:!0,opacity:.9}),Me=()=>[V.group,le.group,ue.group],Ne=()=>[K,q,Ee].filter(Boolean);function Pe(){for(let e of Ne())_.remove(e),e.userData.dispose?.();let e=mr({seed:Oe,size:160,preset:ke});J=e,K=xr(e,{worldSize:26,baseY:0,chunks:6}),q=Kr({terrain:e,seed:Oe,worldSize:26,baseY:0,biomeKeys:Ae}),Ee=Yr(e,{worldSize:26,baseY:0,maxLakes:3,material:je});for(let e of Ne())e.visible=De,_.add(e);Y!==void 0&&Y&&Y.clear(),X!==void 0&&X&&X.clear(),typeof window<`u`&&(window.__world={seed:Oe,preset:ke,active:De,chunks:K.children.length,scatter:q.userData.counts,lakes:Ee.userData.count})}let Fe=e=>{for(let t of Ne())t.visible=e};function Ie(e,t){if(!J)return 0;let{size:n,height:r,sea:i,relief:a}=J,o=26/(n-1),s=Math.round((e+13)/o),c=Math.round((t+13)/o),l=s<0?0:s>=n?n-1:s;return(r[(c<0?0:c>=n?n-1:c)*n+l]-i)*a}let Y=In({heightAt:Ie,seaSurfaceY:0,waterY:.06});Y.group.visible=!1,_.add(Y.group),pe.push(Y);let qe=new i;qe.raycast=()=>{},_.add(qe);let Je=null;function Ye(e,t=0,n=0,r={}){return Je&&=(qe.remove(Je.obj),Y.despawn(Je),null),Je=Y.spawn(e,t,n,r),Je&&(Y.group.remove(Je.obj),qe.add(Je.obj)),Je?Je.followable:null}let Xe=0;function Ze(e,t){if(!J||!K)return;let{size:n,height:r,relief:i}=J,a=26/(n-1),o=26/(t-1),s=i>1e-6?1/i:0,c=!1;for(let i=0;i<t;i++)for(let l=0;l<t;l++){let u=e[i*t+l];if(u===0)continue;c=!0;let d=u*s,f=l*o/a,p=i*o/a,m=Math.max(0,Math.round(f-1)),h=Math.min(n-1,Math.round(f+1)),g=Math.max(0,Math.round(p-1)),_=Math.min(n-1,Math.round(p+1));for(let e=g;e<=_;e++)for(let t=m;t<=h;t++){let i=e*n+t,a=r[i]+d;r[i]=a<0?0:a>1?1:a}}c&&(Xe++,Xe%8==0&&Sr(K,J,K.children),Xe%24==0&&q&&Gr(q,J,{worldSize:26,baseY:0}))}function Qe(e,t){if(!J||!K)return;let{size:n,height:r,relief:i}=J,a=i>1e-6?1/i:0,o=(t-1)/(n-1),s=!1;for(let i=0;i<n;i++){let c=i*o,l=Math.floor(c),u=c-l,d=Math.min(t-1,l+1);for(let c=0;c<n;c++){let f=c*o,p=Math.floor(f),m=f-p,h=Math.min(t-1,p+1),g=e[l*t+p],_=e[l*t+h],v=e[d*t+p],y=e[d*t+h],b=(g*(1-m)+_*m)*(1-u)+(v*(1-m)+y*m)*u;if(b!==0){s=!0;let e=i*n+c,t=r[e]+b*a;r[e]=t<0?0:t>1?1:t}}}s&&(Sr(K,J,K.children),q&&Gr(q,J,{worldSize:26,baseY:0}))}let X=qn({worldHeightAt:Ie,applyErosion:Ze,syncErodedTerrain:Qe,worldSize:26,grid:96,seaY:0,renderer:o});X.group.visible=!1,_.add(X.group);let Z=Jn({extent:26,count:l?500:2e3});Z.group.visible=!1,_.add(Z.group);let nt=null,rt=!1,it=new Set;function at(){!J||!Ee||(_.remove(Ee),Ee.userData.dispose?.(),Ee=Yr(J,{worldSize:26,baseY:0,maxLakes:3,material:je}),Ee.visible=De&&!rt,_.add(Ee),window.__world&&(window.__world.lakes=Ee.userData.count))}function ot(){at(),q&&Gr(q,J,{worldSize:26,baseY:0})}function st(e,t,n=1,r=2.2,i=.05){if(!J||!K)return;let a=J.size,o=26/(a-1),s=(e+13)/o,c=(t+13)/o,l=r/o,u=Math.max(0,Math.floor(s-l)),d=Math.min(a-1,Math.ceil(s+l)),f=Math.max(0,Math.floor(c-l)),p=Math.min(a-1,Math.ceil(c+l)),m=J.height,h=l*.5*2*(l*.5);for(let e=f;e<=p;e++)for(let t=u;t<=d;t++){let r=(t-s)*(t-s)+(e-c)*(e-c);if(r>l*l)continue;let o=m[e*a+t]+n*i*Math.exp(-r/h);m[e*a+t]=o<0?0:o>1?1:o}it.clear();for(let e of K.children){let t=e.userData.chunk;t&&t.i0<=d&&t.i1>=u-1&&t.j0<=p&&t.j1>=f-1&&it.add(e)}Sr(K,J,it),nt&&clearTimeout(nt),nt=setTimeout(ot,140)}function ct(e,t,n,r=2.2){if(!J||!K||n==null)return;let i=J.size,a=26/(i-1),o=(e+13)/a,s=(t+13)/a,c=r/a,l=c*c,u=Math.max(0,Math.floor(o-c)),d=Math.min(i-1,Math.ceil(o+c)),f=Math.max(0,Math.floor(s-c)),p=Math.min(i-1,Math.ceil(s+c)),m=J.biome;for(let e=f;e<=p;e++)for(let t=u;t<=d;t++)(t-o)*(t-o)+(e-s)*(e-s)<=l&&(m[e*i+t]=n);it.clear();for(let e of K.children){let t=e.userData.chunk;t&&t.i0<=d&&t.i1>=u-1&&t.j0<=p&&t.j1>=f-1&&it.add(e)}Sr(K,J,it,!0)}let lt=[`tree`,`rock`,`tuft`];function ut(e,t,{type:n=`tree`,density:r=.5,radius:i=2.2,erase:a=!1}={}){if(!J||!q)return 0;if(a)return Ur(q,n||`all`,e,t,i);let o=J.size,s=26/(o-1),c=J.height,l=J.sea,u=J.relief,d=e=>e<0?0:e>=o?o-1:e,f=(e,t)=>c[d(Math.round((t+13)/s))*o+d(Math.round((e+13)/s))],p=(e,t)=>{let n=Math.max(1,Math.min(o-2,Math.round((e+13)/s))),r=Math.max(1,Math.min(o-2,Math.round((t+13)/s))),i=(c[r*o+n+1]-c[r*o+n-1])*u/(2*s),a=(c[(r+1)*o+n]-c[(r-1)*o+n])*u/(2*s);return Math.hypot(i,a)},m=Wr[n]??1.2,h=Math.max(1,Math.round((r||.5)*6)),g=0;for(let r=0;r<h;r++){let r=Math.random()*Math.PI*2,a=Math.sqrt(Math.random())*i,o=e+Math.cos(r)*a,s=t+Math.sin(r)*a,c=f(o,s);if(c<l+.005||p(o,s)>m)continue;let d=(c-l)*u;Hr(q,n,o,d,s,.7+Math.random()*.6,Math.random()*Math.PI*2,.82+Math.random()*.36)&&g++}if(window.__world&&q.userData.counts)for(let e of lt)q.userData.counts[e]=(q.userData.placements[e]||[]).length;return g}let dt=[];function ft(){if(!q)return null;let e=q.userData.placements,t={};for(let n of lt)t[n]=(e[n]||[]).map(e=>({...e}));return t}function pt(){J&&(dt.push({h:J.height.slice(),b:J.biome.slice(),sc:ft(),pl:Y.snapshot()}),dt.length>12&&dt.shift())}function mt(){if(!J||!dt.length)return!1;let e=dt.pop();if(J.height.set(e.h),J.biome.set(e.b),e.sc&&q){let t=q.userData.placements;for(let n of lt)t[n]=(e.sc[n]||[]).map(e=>({...e}))}return e.pl&&Y.restore(e.pl),Sr(K,J,K.children,!0),ot(),!0}let ht=new Set([`boat`,`fish`]),gt=new Set([`person`,`atv`]);function _t(e,t,n){if(!J)return null;let r=Ie(t,n)<0;return ht.has(e)&&!r||gt.has(e)&&r?null:Y.spawn(e,t,n)}function vt(e,t,n=2.5){return Y.removeNear(e,t,n)}function yt(e){let t=``,n=32768;for(let r=0;r<e.length;r+=n)t+=String.fromCharCode.apply(null,e.subarray(r,Math.min(r+n,e.length)));return btoa(t)}function xt(e){let t=atob(e),n=new Uint8Array(t.length);for(let e=0;e<t.length;e++)n[e]=t.charCodeAt(e);return n}let St=e=>yt(new Uint8Array(e.buffer,e.byteOffset,e.byteLength)),Ct=e=>yt(e);function wt(){let e=q?q.userData.placements:{},t={};for(let n of lt)t[n]=(e[n]||[]).map(e=>({...e}));return t}function Tt(){return J?{v:1,seed:Oe,preset:ke,size:J.size,height:St(J.height),biome:Ct(J.biome),scatter:wt(),entities:Y.snapshot()}:null}function Et(){if(!J)return null;let e=mr({seed:Oe,size:160,preset:ke}),t=J.height,n=J.biome,r=[],i=[];for(let n=0;n<t.length;n++)Math.abs(t[n]-e.height[n])>1e-6&&r.push(n,Math.round(t[n]*1e4)/1e4);for(let t=0;t<n.length;t++)n[t]!==e.biome[t]&&i.push(t,n[t]);return{v:1,c:1,seed:Oe,preset:ke,hd:r,bd:i,entities:Y.snapshot()}}function Dt(e){q&&(_.remove(q),q.userData.dispose?.()),q=Rr(e||{tree:[],rock:[],tuft:[]}),q.userData.counts=lt.reduce((e,t)=>(e[t]=(q.userData.placements[t]||[]).length,e),{}),q.visible=De,_.add(q)}function kt(e){if(!e||e.v!==1)return!1;let t=25600;if(e.height!=null||e.biome!=null){if(typeof e.height!=`string`||typeof e.biome!=`string`)return!1;let n,r;try{n=xt(e.height),r=xt(e.biome)}catch{return!1}if(n.byteLength%4!=0||n.byteLength>>2!=t||r.length<t)return!1;let i=new Float32Array(n.buffer,n.byteOffset,n.byteLength>>2);for(let e=0;e<i.length;e++)if(!Number.isFinite(i[e]))return!1}if(e.hd!=null&&!Array.isArray(e.hd)||e.bd!=null&&!Array.isArray(e.bd))return!1;if(Array.isArray(e.hd))for(let n=0;n<e.hd.length;n+=2){let r=e.hd[n];if(!Number.isInteger(r)||r<0||r>=t||!Number.isFinite(e.hd[n+1]))return!1}if(Array.isArray(e.bd))for(let n=0;n<e.bd.length;n+=2){let r=e.bd[n];if(!Number.isInteger(r)||r<0||r>=t)return!1}Oe=e.seed|0,ke=pr.includes(e.preset)?e.preset:ke,dt.length=0,Pe(),De=!0,Fe(!0),Y.group.visible=!0,X.group.visible=!0,Z.group.visible=!0;for(let e of Me())e.visible=!1;window.__world&&(window.__world.active=!0);let n=e=>e<0?0:e>1?1:e,r=lr.length;if(e.height&&e.biome){let t=xt(e.height),i=new Float32Array(t.buffer,t.byteOffset,t.byteLength>>2);for(let e=0;e<i.length;e++)J.height[e]=n(i[e]);let a=xt(e.biome);for(let e=0;e<J.biome.length;e++)J.biome[e]=Math.min(r-1,a[e]|0)}else if(e.hd||e.bd){let t=e.hd||[],i=e.bd||[];for(let e=0;e<t.length;e+=2)J.height[t[e]]=n(t[e+1]);for(let e=0;e<i.length;e+=2)J.biome[i[e]]=Math.min(r-1,Math.max(0,i[e+1]|0))}return Sr(K,J,K.children,!0),e.scatter&&Dt(e.scatter),at(),q&&Gr(q,J,{worldSize:26,baseY:0}),Y.restore(e.entities),window.__world&&(window.__world.scatter=q.userData.counts,window.__world.seed=Oe,window.__world.preset=ke),!0}let At={enter(){K||Pe(),De=!0,Fe(!0),Y.group.visible=!0,X.group.visible=!0,Z.group.visible=!0;for(let e of Me())e.visible=!1;window.__world&&(window.__world.active=!0)},exit(){rt=!1,De=!1,Fe(!1),Y.group.visible=!1,X.group.visible=!1,Z.group.visible=!1;for(let e of Me())e.visible=!0;window.__world&&(window.__world.active=!1)},setEditing(e){return rt=!!e,z.visible=De&&!rt,Ee&&(Ee.visible=De&&!rt),X.group.visible=De&&!rt,!rt&&De&&at(),rt},get editing(){return rt},get waterHidden(){return rt&&!z.visible},reroll(){return Oe=Math.random()*1e9|0,dt.length=0,Pe(),At.enter(),Oe},reset(){return dt.length=0,Pe(),At.enter(),Oe},setPreset(e){return pr.includes(e)&&(ke=e,dt.length=0,Pe(),At.enter()),ke},sculpt:st,paintBiome:ct,paintScatter:ut,repoolWater:at,snapshot:pt,undo:mt,placeEntity:_t,removeEntityNear:vt,heightAt:Ie,serialize:Tt,serializeCompact:Et,deserialize:kt,flowPourAt:(e,t,n,r)=>X.pourAt(e,t,n,r),flowRain:e=>X.rain(e),flowClear:()=>X.clear(),get flowTotal(){return X.totalWater()},flowAt:(e,t)=>X.cellAt(e,t),flowErosion:(e,t)=>X.setErosion(e,t),get flowErosionOn(){return X.erosion},get flowSediment(){return X.totalSediment()},setSimBackend:e=>X.setBackend(e),get simBackend(){return X.backend},_flowReadW:()=>X._debugReadW(),_flowReadTerr:()=>X._debugReadTerr(),_flowStepN:(e,t)=>X._debugStepN(e,t),get terrainGroup(){return K},get biomes(){return lr},get scatterCounts(){return q?q.userData.placements&&lt.reduce((e,t)=>(e[t]=(q.userData.placements[t]||[]).length,e),{}):null},get placedCounts(){return Y.counts()},setScatterHidden(e){q&&(q.visible=!e)},get placedLife(){return Y},get canUndo(){return dt.length>0},get active(){return De},get seed(){return Oe},get preset(){return ke},get presets(){return pr}},jt=Zr(),Mt=$n({world:At,catalog:jt,inspector:me});function Pt(e,t){return Ie(e,t)<0?0:-999}let Ft=xn({rig:w,world:{heightAt:Ie,waterHeightAt:Pt}});V.group.remove(V.key),_.add(V.key),V.key.castShadow=!0,V.key.shadow.mapSize.set(2048,2048),V.key.shadow.bias=-18e-5,V.key.shadow.normalBias=.028,_.add(V.key.target);function It(){let e=V.key.shadow.camera,t=V.extent+4.5;e.left=-t,e.right=t,e.top=t,e.bottom=-t,e.near=1,e.far=48,e.updateProjectionMatrix(),o.shadowMap.needsUpdate=!0}It();let Lt=new xe(d.x,d.y),Rt=new B(d.x,d.y,{minFilter:f,magFilter:f,depthBuffer:!0,stencilBuffer:!1,depthTexture:Lt}),zt=new B(d.x,d.y,{minFilter:f,magFilter:f,depthBuffer:!1,stencilBuffer:!1}),Bt=new B(d.x,d.y,{minFilter:f,magFilter:f,depthBuffer:!0,stencilBuffer:!1,samples:4}),Vt=new B(d.x,d.y,{minFilter:f,magFilter:f,depthBuffer:!1,stencilBuffer:!1}),Ht=new B(d.x,d.y,{minFilter:f,magFilter:f,depthBuffer:!1,stencilBuffer:!1}),Ut=Math.max(1,Math.floor(d.x/2)),Gt=Math.max(1,Math.floor(d.y/2)),Kt=new B(Ut,Gt,{minFilter:f,magFilter:f,depthBuffer:!1,stencilBuffer:!1}),qt=new B(Ut,Gt,{minFilter:f,magFilter:f,depthBuffer:!1,stencilBuffer:!1}),Q=new re,Jt=new de(-1,1,1,-1,0,1),Yt=new c(new E(2,2));Q.add(Yt);let $=new k({vertexShader:Rn,fragmentShader:Ci,uniforms:{uScene:{value:Rt.texture},uTime:{value:0},uResolution:{value:new F(d.x,d.y)},uGrain:{value:1},uChroma:{value:1},uExposure:{value:1},uAces:{value:0},uBloom:{value:Kt.texture},uBloomStrength:{value:0},uGrade:{value:0},uGradeTint:{value:T.grade.tint},uGradeLift:{value:T.grade.lift},uGradeSat:{value:1},uGradeContrast:{value:1},uWarmBal:{value:0},uDither:{value:0},uTonemap:{value:0}}}),Xt=new k({vertexShader:Rn,fragmentShader:Di,uniforms:{uScene:{value:Rt.texture},uThreshold:{value:.78}}}),Zt=new k({vertexShader:Rn,fragmentShader:Oi,uniforms:{uScene:{value:Kt.texture},uDir:{value:new F}}});function Qt(e){Xt.uniforms.uScene.value=e.texture,fn(Xt,Kt),Zt.uniforms.uScene.value=Kt.texture,Zt.uniforms.uDir.value.set(1.6/Ut,0),fn(Zt,qt),Zt.uniforms.uScene.value=qt.texture,Zt.uniforms.uDir.value.set(0,1.6/Gt),fn(Zt,Kt),$.uniforms.uBloom.value=Kt.texture;let t=1-G.clamp(T.sunArc.y*2.2,0,1);Xt.uniforms.uThreshold.value=.92+.3*t,$.uniforms.uBloomStrength.value=.85*(.32+.95*t)}let $t=e=>{let t=e.map(e=>new L(e));for(;t.length<8;)t.push(new L(0,0,0));return t},en=[`night`,`dawn`,`noon`,`dusk`],nn={inkgold:en.map(e=>$t(Pi[e])),terminal:en.map(e=>$t(Fi[e]))},an=new k({vertexShader:Rn,fragmentShader:wi,uniforms:{uScene:{value:zt.texture},uResolution:{value:new F(d.x,d.y)},uPixelSize:{value:Ni},uPalette:{value:nn.inkgold[2]},uPaletteB:{value:nn.inkgold[2]},uPaletteBlend:{value:0},uPaletteSize:{value:5}}}),sn=new k({vertexShader:Rn,fragmentShader:ki,uniforms:{uScene:{value:zt.texture},uResolution:{value:new F(d.x,d.y)},uGridWidth:{value:160},uDither:{value:.55},uPalette:{value:Mi(Ai[`8-bit`].palette)},uPaletteSize:{value:1},uUsePalette:{value:1}}}),cn={};for(let e of ji)cn[e]=Ai[e].palette?Mi(Ai[e].palette):null;let un=new k({vertexShader:Rn,fragmentShader:Ti,uniforms:{uScene:{value:zt.texture},uDepth:{value:Lt},uResolution:{value:new F(d.x,d.y)},uBands:{value:4},uToonGain:{value:1.7},uToonGamma:{value:.6},uToonFloor:{value:T.toonFloor},uOutline:{value:T.outline},uNear:{value:.1},uFar:{value:100},uIsPerspective:{value:1}}}),dn=new k({vertexShader:Rn,fragmentShader:Ei,uniforms:{uToon:{value:Vt.texture},uPixel:{value:Ht.texture},uBlend:{value:0}}});function fn(e,t){Yt.material=e,o.setRenderTarget(t),o.render(Q,Jt)}function pn(){w.setViewport(window.innerWidth,window.innerHeight),o.setSize(window.innerWidth,window.innerHeight);let e=o.getDrawingBufferSize(new F);return P.setSize(e.x,e.y),Rt.setSize(e.x,e.y),zt.setSize(e.x,e.y),Bt.setSize(e.x,e.y),Vt.setSize(e.x,e.y),Ht.setSize(e.x,e.y),Ut=Math.max(1,e.x>>1),Gt=Math.max(1,e.y>>1),Kt.setSize(Ut,Gt),qt.setSize(Ut,Gt),ae.uniforms.uResolution.value.set(e.x,e.y),$.uniforms.uResolution.value.set(e.x,e.y),an.uniforms.uResolution.value.set(e.x,e.y),sn.uniforms.uResolution.value.set(e.x,e.y),un.uniforms.uResolution.value.set(e.x,e.y),e}let mn=nr({renderer:o}),hn=!0;function gn(e,t){let n=t.dpr==null?u:t.dpr,r=Math.min(window.devicePixelRatio,n);Math.abs(o.getPixelRatio()-r)>.001&&(o.setPixelRatio(r),typeof window<`u`&&window.dispatchEvent?window.dispatchEvent(new Event(`resize`)):pn()),hn=t.shadows!==!1,hn||(o.shadowMap.needsUpdate=!1)}let _n=ir({profiler:mn,apply:gn});function vn(){!m&&!p&&mn.frameStart()}function yn(){m||p||(mn.frameEnd(),_n.update())}function bn(e){m=!e,typeof window<`u`&&(window.__paused=m)}function Sn(){try{o.compile(_,w.camera),Xn(1/60,0,{shadowsOn:!0}),Wn(Gn(),Rt),o.setRenderTarget(null)}catch(e){typeof console<`u`&&console.warn(`[L79] prewarm`,e)}}let Cn=3,wn=!1,Tn=!1,En=`native`,Dn=.3,On=.46,kn=[`native`,...ji],An={"16-bit":`16-bit`,"8-bit":`8-bit`,gb:`Game Boy`,modern:`Modern`,native:`Pixel`,"1-bit":`1-bit`};typeof window<`u`&&(window.__mode=Cn,window.__vector=wn,window.__era=En),typeof window<`u`&&(window.__frames=0),typeof window<`u`&&(window.__loaded=!1);let jn=0,Mn=new H(1,1,1),Nn=!1;function Pn(e){let t=Tn?nn.terminal:nn.inkgold,n=e%1*4,r=Math.floor(n)%4;an.uniforms.uPalette.value=t[r],an.uniforms.uPaletteB.value=t[(r+1)%4],an.uniforms.uPaletteBlend.value=n-Math.floor(n)}function Fn(e){let t=Ai[e];t&&(sn.uniforms.uGridWidth.value=t.gridWidth,sn.uniforms.uDither.value=t.dither,sn.uniforms.uUsePalette.value=+!!t.palette,t.palette&&(sn.uniforms.uPalette.value=cn[e],sn.uniforms.uPaletteSize.value=t.palette.length))}function Ln(){En!==`native`&&Fn(En)}let zn=()=>En===`native`?an:sn;function Bn(e,t){Se(!0),_.environment=Te(),$e.value=1;let n=G.smoothstep(G.clamp(T.sunArc.y,0,1),.22,.8);V.fill.intensity=Vn*(1-.6*n),_.environmentIntensity=Hn*(1-.45*n),ze.value=n,_e.place(e),z.visible=!1,o.setRenderTarget(P),o.render(_,e),z.visible=!0,o.setRenderTarget(Bt),o.render(_,e),Qt(Bt),$.uniforms.uScene.value=Bt.texture,$.uniforms.uAces.value=1,$.uniforms.uGrade.value=1,$.uniforms.uGrain.value=0,$.uniforms.uChroma.value=0,$.uniforms.uDither.value=1,$.uniforms.uWarmBal.value=.9*n,fn($,t),_e.place(w.camera)}let Vn=1,Hn=.34,Un=new L(`#cdaa80`);function Wn(e,t){let n=!wn&&(Cn===1||Cn===2);Se(n),_.environment=n?Te():null,$e.value=+!!n;let r=G.smoothstep(G.clamp(T.sunArc.y,0,1),.22,.8);if(V.fill.intensity=n?Vn*(1-.6*r):Vn,ze.value=n?r:0,n?($.uniforms.uWarmBal.value=.9*r,_.environmentIntensity=Hn*(1-.58*r),V.fill.color.lerp(Un,.45*r)):$.uniforms.uWarmBal.value=0,$.uniforms.uBloomStrength.value=0,z.visible=!1,o.setRenderTarget(P),o.render(_,w.camera),z.visible=!rt,Cn===1&&!n)o.setRenderTarget(t),o.render(_,w.camera);else if(Cn===1)o.setRenderTarget(Bt),o.render(_,w.camera),Qt(Bt),$.uniforms.uScene.value=Bt.texture,$.uniforms.uAces.value=1,$.uniforms.uGrade.value=1,$.uniforms.uGrain.value=0,$.uniforms.uChroma.value=0,$.uniforms.uDither.value=1,fn($,t);else if(o.setRenderTarget(n?Bt:Rt),o.render(_,w.camera),Cn===2)n&&Qt(Bt),$.uniforms.uScene.value=n?Bt.texture:Rt.texture,$.uniforms.uAces.value=+!!n,$.uniforms.uGrade.value=+!!n,$.uniforms.uGrain.value=1,$.uniforms.uChroma.value=1,$.uniforms.uDither.value=+!!n,fn($,t);else{$.uniforms.uScene.value=Rt.texture,$.uniforms.uAces.value=0,$.uniforms.uGrade.value=0,$.uniforms.uGrain.value=0,$.uniforms.uChroma.value=0,$.uniforms.uDither.value=0,fn($,zt);let n=w.camera;un.uniforms.uNear.value=n.near,un.uniforms.uFar.value=n.far,un.uniforms.uIsPerspective.value=+!!n.isPerspectiveCamera;let r=e.era?(Fn(e.era),sn):zn();e.kind===`pixel`?(fn(r,t),window.__style=`pixel`):e.kind===`toon`?(fn(un,t),window.__style=`toon`):(fn(un,Vt),fn(r,Ht),dn.uniforms.uBlend.value=e.blend,fn(dn,t),window.__style=`blend`)}}function Gn(){let e=Kn(),t=e.kind===`toon`?1:e.kind===`blend`?1-e.blend:0;return ae.uniforms.uChromaScale.value=G.lerp(1,.5,t),e}function Kn(){if(Cn===1||Cn===2)return{kind:`none`};if(Cn===7)return{kind:`pixel`};if(Cn===8)return{kind:`toon`};let e=w.styleT;return window.__styleT=e,e<=Dn?{kind:`toon`}:e>=On?{kind:`pixel`,era:e<.62?`16-bit`:e<.8?`8-bit`:`gb`}:{kind:`blend`,blend:G.smoothstep(e,Dn,On),era:`16-bit`}}function Yn(e){return Cn===1||Cn===2?``:wn&&Cn!==7&&Cn!==8?`Vector`:e.kind===`toon`?`Toon`:e.kind===`pixel`?An[e.era||En]||`Pixel`:e.kind===`blend`?`Toon → `+(An[e.era]||`Pixel`):``}function Xn(e,t,{shadowsOn:n=!0,seasonTarget:r=0}={}){typeof window<`u`&&window.__frames++,n&&=hn,R.material.uniforms.uTime.value=t,$.uniforms.uTime.value=t,T.update(e),V.key.position.copy(T.sunDir).multiplyScalar(24),V.key.color.copy(T.sunColor),V.key.intensity=T.sunIntensity,V.fill.color.copy(T.hemiSky),V.fill.groundColor.copy(T.hemiGround),se.value=T.windowGlow,ye.setSun(T.sunArc),ye.setParams(T.skyParams),$.uniforms.uGradeSat.value=T.grade.sat,$.uniforms.uGradeContrast.value=T.grade.contrast,_.environmentIntensity=.34*(1-.6*G.clamp(T.sunArc.y*1.5,0,1)),Hn=_.environmentIntensity;let i=U.overcast;V.key.intensity*=1-.5*i,V.key.color.lerp(v,.45*i),V.fill.intensity=1+.7*i,Vn=V.fill.intensity;let a=G.smoothstep(T.sunDir.y,.06,.34),s=G.lerp(.28,1,1-T.windowGlow),c=n?a*s:0;V.key.shadow.intensity=.72*c,Ve.value=.52*c,(n&&!Nn||Mn.distanceToSquared(T.sunDir)>2e-5)&&(o.shadowMap.needsUpdate=!0,Mn.copy(T.sunDir)),Nn=n;let l=1-T.windowGlow;Be.setRGB(G.lerp(.46,1,l),G.lerp(.52,1,l),G.lerp(.74,1,l)),$.uniforms.uExposure.value=T.exposure,un.uniforms.uToonGain.value=T.toonGain,o.setClearColor(T.horizon,1),Pn(T.t),window.__t=T.t,le.update(e,t,T),V.update(t),ue.update(e,t,T),N.uniforms.uWakeCount.value=ue.wakeCount,U.update(e,t),N.uniforms.uRainCount.value=U.rainDropCount;let u=U.fog*(1-l);_.fog.density=.016+U.fog*y,S.copy(T.horizon).lerp(b,.85*u),_.fog.color.copy(S),o.setClearColor(S,1),Ge.value=U.fog,R.material.uniforms.uFogAmt.value=.7*U.fog,He.value=U.snow,Ue.value=U.cloud*.55,We.x+=e*.018,We.y+=e*.009,Ke.value+=(r-Ke.value)*Math.min(1,e*1.5),et.value=t,tt.value=.035+.05*i,W.update(e,t,T,U),De&&Y.update(e,t,T),qe.visible=!De,Je&&!De&&Je.update(e,t,T),De&&X.step(e),De&&Z.update(e,t,T,{wind:.6*U.cloud,qualityLevel:window.__quality&&window.__quality.level||0});let d=Kn(),f=d.kind===`pixel`||d.kind===`blend`?`pixel`:wn?`vector`:d.kind===`toon`?`charm`:`realistic`;if(_e.update(e,t,T,U,f,w.camera),O){let[e,t,n]=j;N.uniforms.uPrev.value=e.texture,N.uniforms.uCurr.value=t.texture,o.setRenderTarget(n),o.render(ee,te),j=[t,n,e],ae.uniforms.uHeight.value=j[1].texture}if(jn<2&&typeof document<`u`&&++jn===2){let e=document.getElementById(`lgr-loader`);e&&e.classList.add(`gone`),window.__loaded=!0}}function Zn(e){Cn=e,window.__mode=Cn}function Qn(){return wn=!wn,Re.value=+!!wn,window.__vector=wn,wn}function er(e){return wn=!!e,Re.value=+!!wn,window.__vector=wn,wn}function tr(){return En=kn[(kn.indexOf(En)+1)%kn.length],window.__era=En,Ln(),En}function rr(){return Tn=!Tn,Tn}return{updateWorld:Xn,decideStyle:Gn,renderCityPipeline:Wn,renderCityBeautyTo:Bn,styleHintName:Yn,setPostMode:Zn,toggleVector:Qn,setVector:er,cycleEra:tr,togglePalette:rr,setTonemap:e=>{let t=e===`agx`||e===1||e===!0;return $.uniforms.uTonemap.value=+!!t,typeof window<`u`&&(window.__tonemap=t?`agx`:`aces`),t?`agx`:`aces`},get mode(){return Cn},get vector(){return wn},get sceneEra(){return En},renderer:o,drawBuffer:d,scene:_,rig:w,sunRig:T,SIM:256,targets:j,simScene:ee,simCamera:te,simMaterial:N,grabRT:P,card:ie,backdrop:R,WATER_SIZE:28,water:z,waterMaterial:ae,windowGlow:se,landmarkFactory:ce,city:V,cityLife:le,waterLife:ue,weatherRig:U,clouds:W,inspector:me,world:At,catalog:jt,editor:Mt,pilot:Ft,spawnSeizeCraft:Ye,get seizeCraft(){return Je?Je.followable:null},profiler:mn,governor:_n,frameStart:vn,frameEnd:yn,setActive:bn,get paused(){return m},get contextLost(){return p},prewarm:Sn,fitShadowFrustum:It,SHADOW_DIST:24,sceneDepth:Lt,sceneRT:Rt,filmicRT:zt,toonRT:Vt,pixelRT:Ht,postScene:Q,postCamera:Jt,postQuad:Yt,filmicMaterial:$,pixelMaterial:an,pixelkitMaterial:sn,toonMaterial:un,mixMaterial:dn,PALCACHE:nn,ERA_TEX:cn,runPass:fn,OVERCAST_GREY:v,FOG_DENSITY:y,FOG_NIGHT_TINT:b,_fogColor:S,resize:pn}}var Ri=`lgr_hints_`,zi=!1;function Bi(){if(zi||typeof document>`u`)return;zi=!0;let e=document.createElement(`style`);e.textContent=`
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
  }`,document.head.appendChild(e)}function Vi({key:e,title:t=`Tips`,tips:n=[],force:r=!1}={}){let i={key:e,shown:!1,dismissed:!1,seen:!1};if(typeof window<`u`&&(window.__hints=i),typeof document>`u`||!e)return{dismiss(){},el:null};let a=Ri+e,o=!1;try{o=localStorage.getItem(a)===`1`}catch{}if(o&&!r)return i.seen=!0,{dismiss(){},el:null};Bi();let s=!!(window.matchMedia&&window.matchMedia(`(prefers-reduced-motion: reduce)`).matches),c=document.createElement(`div`);c.className=`lgr-hints`,c.innerHTML=`<div class="lgr-hints-card">
    <div class="lgr-hints-h">${t}</div>
    <ul>${n.map(e=>`<li>${e}</li>`).join(``)}</ul>
    <button class="lgr-hints-ok">Got it</button>
    <button class="lgr-hints-x" title="Dismiss (Esc)" aria-label="Dismiss">✕</button>
  </div>`,document.body.appendChild(c),i.shown=!0,s?c.classList.add(`on`):requestAnimationFrame(()=>c.classList.add(`on`));let l=!1;function u(e=!0){if(!l){if(l=!0,e)try{localStorage.setItem(a,`1`)}catch{}i.dismissed=!0,window.removeEventListener(`keydown`,d),c.classList.remove(`on`),setTimeout(()=>c.remove(),s?0:300)}}function d(e){e.key===`Escape`&&u(!0)}return window.addEventListener(`keydown`,d),c.querySelector(`.lgr-hints-ok`).addEventListener(`click`,()=>{navigator.vibrate?.(10),u(!0)}),c.querySelector(`.lgr-hints-x`).addEventListener(`click`,()=>{navigator.vibrate?.(10),u(!0)}),{dismiss:u,el:c}}var Hi=new Set([`w`,`a`,`s`,`d`,`arrowup`,`arrowdown`,`arrowleft`,`arrowright`,`shift`,` `]),Ui={walker:{p:.6,hp:26,speed:.85,dmg:9,score:10,size:1,color:`#6f8a45`},runner:{p:.25,hp:12,speed:1.75,dmg:7,score:16,size:.82,color:`#a6d24c`},tank:{p:.15,hp:95,speed:.5,dmg:20,score:34,size:1.5,color:`#39492a`}};function Wi(){let e=Math.random();return e<Ui.walker.p?`walker`:e<Ui.walker.p+Ui.runner.p?`runner`:`tank`}var Gi=new L(`#ffffff`),Ki=new L(`#d83a2a`),qi={food:{name:`Food`,glyph:`🍖`,color:`#c8782e`,consumable:!0},water:{name:`Water`,glyph:`💧`,color:`#3aa6dc`,consumable:!0},bandage:{name:`Bandage`,glyph:`➕`,color:`#e8e2d6`,consumable:!0},scrap:{name:`Scrap`,glyph:`⚙️`,color:`#8a8f96`,consumable:!1},medkit:{name:`Medkit`,glyph:`✚`,color:`#e0524a`,consumable:!0},repairkit:{name:`Repair Kit`,glyph:`🔧`,color:`#caa05a`,consumable:!0}},Ji=[{out:`medkit`,need:{bandage:2}},{out:`repairkit`,need:{scrap:3}}];function Yi({extent:e=8,plinthTop:t=.3}={}){let n=new i;n.visible=!1,n.raycast=()=>{};let r=t+.02,a=Math.max(3,e-.7),s=typeof window<`u`&&window.matchMedia&&window.matchMedia(`(pointer: coarse)`).matches,l=1.25,u=4.4,f=1.4,m=new i,h=new c(new ee(.16,.34,4,10),Z(new C({color:`#3f7fd0`,roughness:.6,flatShading:!0}),{color:`#3f7fd0`}));h.position.y=.33;let _=new c(new M(.13,12,9),Z(new C({color:`#e9caa1`,roughness:.75,flatShading:!0}),{color:`#e9caa1`}));_.position.y=.66;let v=new c(new W(.1,.1,.16),Z(new C({color:`#ffd54a`,roughness:.5,flatShading:!0}),{color:`#ffd54a`}));v.position.set(0,.38,.18),m.add(h,_,v),m.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!1),e.raycast=()=>{}}),m.scale.setScalar(1.6),m.position.y=r,n.add(m);let y=new c(new ue(.95,16,-.9,1.8),new x({color:`#ffe08a`,transparent:!0,opacity:0,depthWrite:!1,side:2}));y.rotation.x=-Math.PI/2,y.position.y=r+.06,y.raycast=()=>{},n.add(y);let b=new ae().setFromPoints([new H,new H]),S=new g(b,new o({color:`#fff3c0`,transparent:!0,opacity:0,depthWrite:!1}));S.raycast=()=>{},n.add(S);let w={x:0,z:0,vx:0,vz:0,hp:100,stamina:100,hunger:100,thirst:100,facing:0,iframe:0},T=new p(new ee(.15,.3,4,8),Z(new C({roughness:.85,flatShading:!0})),48);T.castShadow=!0,T.receiveShadow=!1,T.frustumCulled=!1,T.raycast=()=>{},T.instanceMatrix.setUsage(be),n.add(T);let E=[];for(let e=0;e<48;e++)E.push({x:0,z:0,vx:0,vz:0,alive:!1,in:!1,type:`walker`,hp:1,maxhp:1,speed:1,dmg:0,score:0,size:1,phase:0,flash:0});let D=new L,O=[],k=Z(new C({color:`#7a5a36`,roughness:.9,flatShading:!0}),{color:`#7a5a36`});for(let e=0;e<8;e++){let t=e/8*Math.PI*2,i=new c(new W(2.1,.7,.24),k.clone());i.position.set(Math.cos(t)*u,r+.35,Math.sin(t)*u),i.rotation.y=-t+Math.PI/2,i.castShadow=!0,i.raycast=()=>{},n.add(i),O.push({mesh:i,ang:t,hp:150,alive:!0,baseColor:new L(`#7a5a36`)})}function A(e,t){let n=Math.atan2(t,e);return n<0&&(n+=Math.PI*2),O[Math.round(n/(Math.PI*2/8))%8]}let j=[];for(let e=0;e<14;e++){let e=new c(new W(.26,.26,.26),Z(new C({roughness:.6,flatShading:!0})));e.castShadow=!0,e.visible=!1,e.raycast=()=>{},n.add(e),j.push({mesh:e,x:0,z:0,kind:`food`,active:!1})}let te=new L;function N(){let e=Math.random();return e<.36?`food`:e<.72?`water`:e<.88?`bandage`:`scrap`}function P(e,t,n){let i=j.find(e=>!e.active);i&&(i.x=e,i.z=t,i.kind=n||N(),i.active=!0,i.mesh.position.set(e,r+.18,t),i.mesh.visible=!0,i.mesh.material.color.copy(te.set(qi[i.kind].color)))}let F=[];function I(e){let t=F.find(t=>t.id===e);return t?t.n:0}function ne(e,t=1){let n=F.find(t=>t.id===e);return n?(n.n+=t,!0):F.length<8?(F.push({id:e,n:t}),!0):!1}function re(e,t){let n=F.find(t=>t.id===e);return!n||n.n<t?!1:(n.n-=t,n.n<=0&&F.splice(F.indexOf(n),1),!0)}function ie(e){if(I(e)<=0)return!1;if(e===`food`)w.hunger=Math.min(100,w.hunger+38);else if(e===`water`)w.thirst=Math.min(100,w.thirst+38);else if(e===`bandage`)w.hp=Math.min(100,w.hp+40);else if(e===`medkit`)w.hp=Math.min(100,w.hp+90);else if(e===`repairkit`){let e=null;for(let t of O)(!e||t.hp<e.hp)&&(e=t);e&&(e.hp=150,e.alive=!0)}else return!1;return re(e,1),We(),!0}function R(e){for(let t in e.need)if(I(t)<e.need[t])return!1;for(let t in e.need)re(t,e.need[t]);return ne(e.out,1),We(),!0}let z=!1,oe=!1,B=1,se=0,ce=0,V=0,le=`spawning`,de=0,U=0,fe=0,pe=0,me=!1,he=null;function ge(){for(let e=0;e<48;e++)if(!E[e].alive)return E[e];return null}function _e(e){let t=ge();if(!t)return;let n=Ui[Wi()];t.type=Object.keys(Ui).find(e=>Ui[e]===n)||`walker`;let r=Math.random()*Math.PI*2;t.x=Math.cos(r)*a,t.z=Math.sin(r)*a,t.vx=0,t.vz=0;let i=1+B*.08;t.maxhp=n.hp*i,t.hp=t.maxhp,t.speed=n.speed*(1+.4*e)*(1+B*.015)*(B===1?.85:1),t.dmg=n.dmg,t.score=n.score,t.size=n.size,t.phase=Math.random()*6.28,t.flash=0,t.in=!1,t.alive=!0}function ve(){let e=null,t=1/0;for(let n of E){if(!n.alive)continue;let r=(n.x-w.x)**2+(n.z-w.z)**2;r<t&&(t=r,e=n)}return e}function ye(e){e.alive=!1,se++,ce+=e.score,Math.random()<.3&&P(e.x,e.z)}function xe(e,t){e.hp-=t,e.flash=.12,e.hp<=0&&ye(e)}function Se(){if(oe||fe>0)return;fe=.16;let e,t;if(he)e=he.x-w.x,t=he.z-w.z;else{let n=ve();n?(e=n.x-w.x,t=n.z-w.z):(e=Math.sin(w.facing),t=Math.cos(w.facing))}let n=Math.hypot(e,t)||1;e/=n,t/=n,w.facing=Math.atan2(e,t);let i=null,a=1/0;for(let n of E){if(!n.alive)continue;let r=n.x-w.x,o=n.z-w.z,s=r*e+o*t;s<0||s>9||Math.abs(r*t-o*e)<.7*(.4+.6*n.size)&&s<a&&(a=s,i=n)}let o=i?a:9,s=b.attributes.position;s.setXYZ(0,w.x,r+.5,w.z),s.setXYZ(1,w.x+e*o,r+.5,w.z+t*o),s.needsUpdate=!0,S.material.opacity=.95,i&&xe(i,16)}function Ce(){if(oe||pe>0)return;pe=.42,y.material.opacity=.85;let e=Math.sin(w.facing),t=Math.cos(w.facing);for(let n of E){if(!n.alive)continue;let r=n.x-w.x,i=n.z-w.z,a=Math.hypot(r,i);a>1.05+n.size*.2||(r*e+i*t)/(a||1)>.2&&xe(n,34)}}let we={},Te={x:0,y:0};function K(e,t){if(!z)return;let n=e.key.toLowerCase();if(t&&n===`i`){e.stopImmediatePropagation(),qe();return}if(t&&n===`escape`&&Le){e.stopImmediatePropagation(),Ke();return}if(Hi.has(n)){if(e.stopImmediatePropagation(),n.startsWith(`arrow`)&&e.preventDefault(),n===` `){t&&Ce();return}we[n]=t}}typeof window<`u`&&(window.addEventListener(`keydown`,e=>K(e,!0)),window.addEventListener(`keyup`,e=>K(e,!1)));let q=null,Ee=null,J=null,De=null,Oe=null,ke=null,Ae=null,je=null,Me=null,Ne=null,Pe=null,Fe=null,Ie=null,Y=null,Le=!1;if(typeof document<`u`){let e=document.createElement(`style`);e.textContent=`
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
    `,document.head.appendChild(e),q=document.createElement(`div`),q.className=`hoard-stick`,Ee=document.createElement(`div`),Ee.className=`knob`,q.appendChild(Ee),document.body.appendChild(q);let t=!1,n=e=>{let t=q.getBoundingClientRect(),n=e.clientX-(t.left+t.width/2),r=e.clientY-(t.top+t.height/2),i=Math.hypot(n,r)||1;i>44&&(n*=44/i,r*=44/i),Ee.style.transform=`translate(${n}px,${r}px)`,Te.x=n/44,Te.y=-r/44};q.addEventListener(`pointerdown`,e=>{t=!0,q.setPointerCapture(e.pointerId),n(e)}),q.addEventListener(`pointermove`,e=>{t&&n(e)});let r=()=>{t=!1,Te.x=0,Te.y=0,Ee.style.transform=`translate(0,0)`};q.addEventListener(`pointerup`,r),q.addEventListener(`pointercancel`,r),Pe=document.createElement(`button`),Pe.className=`hoard-btn hoard-fire`,Pe.textContent=`FIRE`,document.body.appendChild(Pe),Fe=document.createElement(`button`),Fe.className=`hoard-btn hoard-melee`,Fe.textContent=`MELEE`,document.body.appendChild(Fe),Pe.addEventListener(`pointerdown`,e=>{e.preventDefault(),navigator.vibrate?.(12),me=!0}),Pe.addEventListener(`pointerup`,()=>{me=!1}),Pe.addEventListener(`pointercancel`,()=>{me=!1}),Fe.addEventListener(`pointerdown`,e=>{e.preventDefault(),navigator.vibrate?.(18),Ce()}),J=document.createElement(`div`),J.className=`hoard-hud`,J.innerHTML=`HP<div class="bar"><i style="background:#e0524a"></i></div>STAMINA<div class="bar"><i style="background:#4ad08a"></i></div>HUNGER<div class="bar"><i style="background:#d89a3a"></i></div>THIRST<div class="bar"><i style="background:#3aa6dc"></i></div><div class="stat"></div>`,document.body.appendChild(J);let i=J.querySelectorAll(`i`);De=i[0],Oe=i[1],ke=i[2],Ae=i[3],je=J.querySelector(`.stat`),Me=document.createElement(`div`),Me.className=`hoard-banner`,document.body.appendChild(Me),Ne=document.createElement(`div`),Ne.className=`hoard-death`,Ne.innerHTML=`<h2>YOU DIED</h2><div class="ds"></div><button>RESTART</button>`,document.body.appendChild(Ne),Ne.querySelector(`button`).addEventListener(`click`,()=>Xe());let a=document.createElement(`style`);a.textContent=`
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
    `,document.head.appendChild(a),Ie=document.createElement(`button`),Ie.className=`hoard-bagbtn`,Ie.textContent=`🎒`,Ie.title=`Inventory (I)`,document.body.appendChild(Ie),Ie.addEventListener(`click`,()=>qe()),Y=document.createElement(`div`),Y.className=`hoard-bag`,document.body.appendChild(Y)}let Re=0;function ze(e,t=1.8){Me&&(Me.textContent=e,Me.style.display=`block`),Re=t}let Be=Math.PI/4;function Ve(e){Be=e}function He(e,t){he={x:e,z:t}}function Ue(e){me=e}function We(){if(typeof window<`u`&&(window.__hoardBag=Object.fromEntries(F.map(e=>[e.id,e.n]))),!Y)return;let e=`<div class="panel"><h3>INVENTORY</h3><div class="slots">`;for(let t=0;t<8;t++){let n=F[t];n?e+=`<button class="slot" data-id="${n.id}" title="${qi[n.id].name}">${qi[n.id].glyph}<span class="n">${n.n}</span></button>`:e+=`<div class="slot empty"></div>`}e+=`</div><div class="craft">`,Ji.forEach((t,n)=>{let r=Object.keys(t.need).every(e=>I(e)>=t.need[e]),i=Object.entries(t.need).map(([e,t])=>`${t}${qi[e].glyph}`).join(`+`);e+=`<button data-rec="${n}" ${r?``:`disabled`}>Craft ${qi[t.out].name} (${i})</button>`}),e+=`</div><button class="close">CLOSE (I)</button></div>`,Y.innerHTML=e,Y.querySelectorAll(`.slot[data-id]`).forEach(e=>e.addEventListener(`click`,()=>{qi[e.dataset.id].consumable&&ie(e.dataset.id)})),Y.querySelectorAll(`[data-rec]`).forEach(e=>e.addEventListener(`click`,()=>R(Ji[+e.dataset.rec]))),Y.querySelector(`.close`).addEventListener(`click`,()=>Ke())}function Ge(){!z||oe||(Le=!0,Y&&Y.classList.add(`open`),We())}function Ke(){Le=!1,Y&&Y.classList.remove(`open`)}function qe(){Le?Ke():Ge()}function Je(e){B=e,U=5+e*2,le=`spawning`}function Ye(){w.x=0,w.z=0,w.vx=0,w.vz=0,w.hp=100,w.stamina=100,w.hunger=100,w.thirst=100,w.facing=0,w.iframe=0;for(let e of E)e.alive=!1;se=0,ce=0,V=0,oe=!1,me=!1,he=null;for(let e of O)e.hp=150,e.alive=!0,e.mesh.scale.set(1,1,1);for(let e of j)e.active=!1,e.mesh.visible=!1;F.length=0;let e=[`food`,`water`,`food`,`water`,`bandage`,`scrap`];for(let t=0;t<6;t++){let n=Math.random()*Math.PI*2,r=1.6+Math.random()*(a-2);P(Math.cos(n)*r,Math.sin(n)*r,e[t])}Ne&&(Ne.style.display=`none`),m.position.set(0,r,0),m.visible=!0,Je(1),We()}function Xe(){Ye()}function Ze(e){z=e,n.visible=e;let t=e&&s;q&&(q.style.display=t?`block`:`none`),Pe&&(Pe.style.display=t?`block`:`none`),Fe&&(Fe.style.display=t?`block`:`none`),J&&(J.style.display=e?`block`:`none`),Me&&!e&&(Me.style.display=`none`),Ne&&!e&&(Ne.style.display=`none`),Ie&&(Ie.style.display=e?`block`:`none`),Ke();for(let e in we)we[e]=!1;Te.x=Te.y=0,me=!1,e&&Ye()}let Qe=new d;function X(e,t,n){if(!z||Le)return;let i=n?n.windowGlow:0;if(fe=Math.max(0,fe-e),pe=Math.max(0,pe-e),S.material.opacity=Math.max(0,S.material.opacity-e*8),y.material.opacity=Math.max(0,y.material.opacity-e*6),!oe){V+=e,w.iframe=Math.max(0,w.iframe-e);let n=(we.d||we.arrowright?1:0)-(we.a||we.arrowleft?1:0)+Te.x,i=(we.w||we.arrowup?1:0)-(we.s||we.arrowdown?1:0)+Te.y,o=Math.hypot(n,i);o>1&&(n/=o,i/=o);let s=o>.05,c=(we.shift||Te.y>.95)&&w.stamina>2&&s,l=Math.cos(Be),d=Math.sin(Be),p=l*n+-d*i,h=-d*n+-l*i,g=c?5.2:3,_=1-Math.exp(-14*e);w.vx+=(p*g-w.vx)*_,w.vz+=(h*g-w.vz)*_,w.x+=w.vx*e,w.z+=w.vz*e;let v=Math.hypot(w.x,w.z);v>a&&(w.x*=a/v,w.z*=a/v,w.vx=0,w.vz=0),s&&(w.facing=Math.atan2(p,h)),w.stamina=G.clamp(w.stamina+(c?-34:22)*e,0,100),w.hunger=Math.max(0,w.hunger-.9*e),w.thirst=Math.max(0,w.thirst-1.15*e),w.hunger<=0||w.thirst<=0?w.hp=Math.max(0,w.hp-3.5*e):w.hunger>55&&w.thirst>55&&w.hp<100&&(w.hp=Math.min(100,w.hp+2*e));for(let e of j)e.active&&(e.x-w.x)**2+(e.z-w.z)**2<.3&&ne(e.kind)&&(e.active=!1,e.mesh.visible=!1,We());for(let t of O){if(t.hp>=150)continue;let n=Math.cos(t.ang)*u,r=Math.sin(t.ang)*u;(n-w.x)**2+(r-w.z)**2<f*f&&(t.hp=Math.min(150,t.hp+30*e),t.hp>0&&(t.alive=!0))}w.hp<=0&&$e(),m.position.set(w.x,r,w.z),m.rotation.y=w.facing,m.visible=!(w.iframe>0&&Math.floor(t*20)%2==0),me&&Se(),y.position.set(w.x,r+.06,w.z),y.rotation.z=-w.facing}let o=0;oe||le===`spawning`&&(U>0&&Math.random()<e*(B===1?3.5:6)&&(_e(i),U--),U<=0&&(le=`fighting`));let s=0,c=1/0;for(let n=0;n<48;n++){let i=E[n];if(!i.alive){Qe.position.set(0,-60,0),Qe.scale.setScalar(0),Qe.updateMatrix(),T.setMatrixAt(n,Qe.matrix);continue}o++;let a=w.x-i.x,d=w.z-i.z,f=Math.hypot(a,d)||1;if(f<c&&(c=f),!oe){let t=a/f*i.speed,n=d/f*i.speed,r=1-Math.exp(-6*e);if(i.vx+=(t-i.vx)*r,i.vz+=(n-i.vz)*r,f>.52){let t=i.x+i.vx*e,n=i.z+i.vz*e,r=Math.hypot(i.x,i.z),a=Math.hypot(t,n);if(!i.in&&r>=u&&a<4.9){let r=A(t,n);if(r.alive){let i=Math.atan2(n,t),a=4.9;t=Math.cos(i)*a,n=Math.sin(i)*a,r.hp-=15*e,r.hp<=0&&(r.hp=0,r.alive=!1)}}a<u-.1&&(i.in=!0),i.x=t,i.z=n}else w.iframe<=0&&(s=Math.max(s,i.dmg))}i.flash=Math.max(0,i.flash-e);let p=Math.sin(t*6+i.phase)*.04;Qe.position.set(i.x,r+.3*i.size*l+p,i.z),Qe.rotation.set(0,Math.atan2(i.vx,i.vz),Math.sin(t*3+i.phase)*.12),Qe.scale.setScalar(i.size*l),Qe.updateMatrix(),T.setMatrixAt(n,Qe.matrix),D.set(Ui[i.type].color),i.flash>0?D.lerp(Gi,.7):D.lerp(Ki,.35*(1-i.hp/i.maxhp)),T.setColorAt(n,D)}T.instanceMatrix.needsUpdate=!0,T.instanceColor&&(T.instanceColor.needsUpdate=!0);let d=0;for(let e of O){e.alive&&d++;let t=Math.max(0,e.hp/150);e.mesh.scale.y=e.alive?Math.max(.18,t):.12,e.mesh.position.y=r+.35*e.mesh.scale.y,e.mesh.material.color.copy(e.baseColor).lerp(Ki,(1-t)*.55)}!oe&&s>0&&(w.hp=Math.max(0,w.hp-s*(B===1?.5:1)),w.iframe=.6,w.hp<=0&&$e()),!oe&&le===`fighting`&&o===0&&U<=0&&(le=`complete`,de=2.2,ze(`WAVE ${B} CLEAR`,2)),!oe&&le===`complete`&&(de-=e,de<=0&&(Je(B+1),ze(`WAVE ${B}`,1.4))),Re>0&&(Re-=e,Re<=0&&Me&&(Me.style.display=`none`)),De&&(De.style.width=`${w.hp}%`),Oe&&(Oe.style.width=`${w.stamina}%`),ke&&(ke.style.width=`${w.hunger}%`),Ae&&(Ae.style.width=`${w.thirst}%`),je&&(je.textContent=`WAVE ${B}   KILLS ${se}   SCORE ${ce}`),typeof window<`u`&&(window.__hoard={active:z,dead:oe,paused:Le,hp:Math.round(w.hp),stamina:Math.round(w.stamina),hunger:Math.round(w.hunger),thirst:Math.round(w.thirst),zombies:o,barriers:d,pickups:j.filter(e=>e.active).length,inv:Object.fromEntries(F.map(e=>[e.id,e.n])),wave:B,kills:se,score:ce,weapon:`gun`,znear:+c.toFixed(2),px:+w.x.toFixed(2),pz:+w.z.toFixed(2)})}function $e(){oe=!0,me=!1,Ne&&(Ne.querySelector(`.ds`).innerHTML=`Wave reached: ${B}<br>Kills: ${se}<br>Score: ${ce}<br>Survived: ${V.toFixed(0)}s`,Ne.style.display=`flex`)}return{group:n,update:X,setActive:Ze,setAzimuth:Ve,setAim:He,setFiring:Ue,melee:Ce,reset:Ye,restart:Xe,openBag:Ge,closeBag:Ke,toggleBag:qe,addItem:ne,get player(){return w},get dead(){return oe},get active(){return z},get paused(){return Le},get inv(){return F.map(e=>({...e}))},get nearestPickup(){let e=null,t=1e9;for(let n of j){if(!n.active)continue;let r=(n.x-w.x)**2+(n.z-w.z)**2;r<t&&(t=r,e=n)}return e?{x:e.x,z:e.z}:null},setTarget(){}}}var{Timer:Xi}=O,Zi=new URLSearchParams(window.location.search),Qi=Zi.get(`demo`)===`1`||Zi.has(`capture`);window.__demo=Qi;var $i=(Zi.get(`city`)?Number(Zi.get(`city`)):0)||Math.random()*1e9|0,ea=0,ta=Li({demo:Qi,citySeed:$i,profileIndex:ea}),{renderer:na,scene:ra,rig:ia,sunRig:aa,city:oa,landmarkFactory:sa}=ta,ca=Yi({extent:oa.extent,plinthTop:.3});ra.add(ca.group),window.__hoardApi=ca,typeof window<`u`&&(window.__quality={get level(){return ta.governor.level},forceLoad:e=>ta.profiler.forceLoad(e)}),typeof window<`u`&&(window.__rig=ia);var la=!0;window.__shadows=la,window.__scene=`hoard`;var ua=new H,da=new Set,fa=6.5;function pa(e){oa.group.traverse(t=>{!t.isMesh||t.userData.ground||!t.visible||(t.getWorldPosition(ua),Math.hypot(ua.x,ua.z)<e&&(t.visible=!1,da.add(t)))})}function ma(){for(let e of da)e.visible=!0;da.clear()}var ha=new ce,ga=new H,_a=new H,va=new Set;function ya(){for(let e of va)e.material&&(e.material.opacity=1,e.material.transparent=!!e.userData._wasT,e.material.depthWrite=e.userData._wasDW!==!1);va.clear()}function ba(e){ya();let t=ia.camera;for(let[n,r]of[[0,0],[.7,.4],[-.7,.4]]){_a.set(e.x+n,.6,e.z+r),ga.subVectors(_a,t.position);let i=ga.length();ha.set(t.position,ga.normalize()),ha.far=i-.4;for(let e of ha.intersectObject(oa.group,!0)){let t=e.object;!t.material||t.userData.ground||va.has(t)||(t.userData._wasT=t.material.transparent,t.userData._wasDW=t.material.depthWrite,t.material.transparent=!0,t.material.opacity=.16,t.material.depthWrite=!1,va.add(t))}}}function xa(){ca.setActive(!0),pa(fa),ia.setMode(q.DIMETRIC),ia.setZoom(2.8,!0),ia.setTarget(ca.player.x,.6,ca.player.z,!0)}var Sa=new ce,Ca=new F,wa=new w(new H(0,1,0),-.32),Ta=new H,Ea=window.matchMedia&&window.matchMedia(`(pointer: coarse)`).matches,Da=!1,Oa=0,ka=0,Aa=.005,ja=(e,t)=>{Ca.x=e/window.innerWidth*2-1,Ca.y=-(t/window.innerHeight)*2+1};na.domElement.addEventListener(`contextmenu`,e=>e.preventDefault()),na.domElement.addEventListener(`mousedown`,e=>{e.button===0&&(ja(e.clientX,e.clientY),ca.setFiring(!0)),e.button===2&&(Da=!0,Oa=e.clientX,ka=e.clientY)}),window.addEventListener(`mousemove`,e=>{ja(e.clientX,e.clientY),Da&&(ia.orbit(-(e.clientX-Oa)*Aa,-(e.clientY-ka)*Aa),Oa=e.clientX,ka=e.clientY)}),window.addEventListener(`mouseup`,()=>{ca.setFiring(!1),Da=!1}),na.domElement.addEventListener(`wheel`,e=>{e.preventDefault(),ia.zoomBy(Math.exp(e.deltaY*.0015))},{passive:!1});var Ma=0,Na=(e,t)=>[(e.clientX+t.clientX)/2,(e.clientY+t.clientY)/2],Pa=(e,t)=>Math.hypot(e.clientX-t.clientX,e.clientY-t.clientY);na.domElement.addEventListener(`touchstart`,e=>{e.touches.length===2&&(Da=!0,[Oa,ka]=Na(e.touches[0],e.touches[1]),Ma=Pa(e.touches[0],e.touches[1]))},{passive:!0}),na.domElement.addEventListener(`touchmove`,e=>{if(e.touches.length!==2)return;e.preventDefault();let[t,n]=Na(e.touches[0],e.touches[1]);ia.orbit(-(t-Oa)*Aa,-(n-ka)*Aa),Oa=t,ka=n;let r=Pa(e.touches[0],e.touches[1]);Ma>0&&ia.zoomBy(Ma/r),Ma=r},{passive:!1}),window.addEventListener(`touchend`,e=>{(!e.touches||e.touches.length<2)&&(Da=!1,Ma=0)}),window.addEventListener(`keydown`,e=>{(e.key===`h`||e.key===`H`)&&(la=!la,window.__shadows=la)}),sa.whenReady.then(()=>{oa.generate($i,ea),ta.fitShadowFrustum(),ma(),pa(fa),window.__cityReady=!0});var Fa=new Xi;Fa.connect(document);function Ia(){Fa.update(),ta.frameStart();let e=Math.min(Fa.getDelta(),.1);ca.setAzimuth(ia.azimuth),Ea||(Sa.setFromCamera(Ca,ia.camera),Sa.ray.intersectPlane(wa,Ta)&&ca.setAim(Ta.x,Ta.z)),ca.update(e,Fa.getElapsed(),aa),ia.setTarget(ca.player.x,.6,ca.player.z),ia.update(e),ba(ca.player),ta.updateWorld(e,Fa.getElapsed(),{shadowsOn:la,seasonTarget:0});let t=ta.decideStyle();ta.renderCityPipeline(t,null),ta.frameEnd(),requestAnimationFrame(Ia)}xa(),Ia(),Vi({key:`hoard`,title:`The Hoard`,tips:[`Move: WASD / arrows · on touch: the left thumb-stick`,`Aim: mouse / drag · Fire: hold click / the FIRE button · Melee: the MELEE button`,`Survive the waves · B: bag & crafting · Esc: exit`]}),window.addEventListener(`resize`,()=>{ta.resize()});