import{$ as e,A as t,B as n,C as r,D as i,E as a,F as o,G as s,H as c,I as l,J as u,K as d,L as f,M as p,N as m,O as h,P as g,Q as _,R as v,S as y,T as b,U as x,V as S,W as C,X as w,Y as T,Z as E,_ as D,a as O,at as k,b as A,c as j,ct as M,d as ee,dt as te,et as ne,f as N,ft as P,g as F,h as I,ht as L,i as re,it as ie,j as ae,k as oe,l as se,lt as R,m as ce,mt as z,n as B,nt as V,o as le,ot as ue,p as H,pt as de,q as fe,r as pe,rt as me,s as U,st as he,t as ge,tt as _e,u as W,ut as ve,v as ye,w as be,x as xe,y as Se,z as Ce}from"./three-D_aL4whJ.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var we=(e,t,n,r)=>e+(t-e)*(1-Math.exp(-n*r)),Te=(e,t,n)=>e<t?t:e>n?n:e,Ee=Math.atan(1/Math.SQRT2),De=Math.atan(.5),G=Math.PI/4,Oe={PERSPECTIVE:4,ISOMETRIC:5,DIMETRIC:6},K=8,q=.03,ke=1.45,Ae=4,je=40,Me=1.5,Ne=16,Pe=6,Fe=22,Ie=3.5,Le=11,J=(e,t,n)=>we(e,t,K,n),Re=(e,t)=>e+Math.PI*2*Math.round((t-e)/(Math.PI*2));function ze({aspect:e,fov:t=48,near:n=.1,far:r=100,target:i=new z(0,.8,0),azimuth:a=G,elevation:o=.52,distance:c=12,zoom:l=5.5}={}){let u=new fe(t,e,n,r),d=new s(-1,1,1,-1,n,r),p=Oe.PERSPECTIVE,m=e,h={azimuth:a,elevation:o,distance:c,zoom:l,target:i.clone()},g={azimuth:a,elevation:o,distance:c,zoom:l,target:i.clone()},_=!1,v=null,y=new z,b=()=>p===Oe.PERSPECTIVE?u:d;function x(e){e!==p&&(p=e,p===Oe.ISOMETRIC||p===Oe.DIMETRIC?(h.elevation=p===Oe.ISOMETRIC?Ee:De,h.azimuth=Re(G,g.azimuth),_=!0):_=!1)}function S(e,t){h.azimuth+=e,_||(h.elevation=f.clamp(h.elevation+t,q,ke))}function C(e){p===Oe.PERSPECTIVE?h.distance=f.clamp(h.distance*e,Ae,je):h.zoom=f.clamp(h.zoom*e,Me,Ne)}function w(e,t){let n=h.azimuth,r=p===Oe.PERSPECTIVE?h.distance*.04:h.zoom*.08,i=new z(Math.cos(n),0,-Math.sin(n)),a=new z(-Math.sin(n),0,-Math.cos(n));h.target.addScaledVector(i,e*r),h.target.addScaledVector(a,t*r)}function T(e,t){m=e/t,u.aspect=m,u.updateProjectionMatrix()}function E(e){v&&(v(y),h.target.copy(y)),g.azimuth=J(g.azimuth,h.azimuth,e),g.elevation=J(g.elevation,h.elevation,e),g.distance=J(g.distance,h.distance,e),g.zoom=J(g.zoom,h.zoom,e),g.target.x=J(g.target.x,h.target.x,e),g.target.y=J(g.target.y,h.target.y,e),g.target.z=J(g.target.z,h.target.z,e);let t=Math.cos(g.elevation),n=Math.sin(g.elevation),r=Math.cos(g.azimuth),i=Math.sin(g.azimuth),a=b();if(a.position.set(g.target.x+g.distance*t*i,g.target.y+g.distance*n,g.target.z+g.distance*t*r),a.lookAt(g.target),a.isOrthographicCamera){let e=g.zoom,t=e*m;a.left=-t,a.right=t,a.top=e,a.bottom=-e,a.updateProjectionMatrix()}}function D(e,t,n,r=!1){h.target.set(e,t,n),r&&g.target.copy(h.target)}function O(e,t=!1){h.zoom=f.clamp(e,Me,Ne),t&&(g.zoom=h.zoom)}function k(e,t=!1){h.azimuth=Re(e,g.azimuth),t&&(g.azimuth=h.azimuth)}function A(e,t=!1){h.elevation=f.clamp(e,q,ke),t&&(g.elevation=h.elevation)}function j(e,{frame:t,snap:n=!1}={}){v=e,n&&(v(y),h.target.copy(y),g.target.copy(y)),t!=null&&(p===Oe.PERSPECTIVE?h.distance=f.clamp(t,Ae,je):h.zoom=f.clamp(t,Me,Ne))}function M(){v=null}return{get camera(){return b()},get mode(){return p},get azimuth(){return g.azimuth},get following(){return!!v},setTarget:D,setZoom:O,setFollow:j,clearFollow:M,setAzimuth:k,setElevation:A,get styleT(){return p===Oe.PERSPECTIVE?f.clamp((g.distance-Pe)/(Fe-Pe),0,1):f.clamp((g.zoom-Ie)/(Le-Ie),0,1)},setMode:x,orbit:S,zoomBy:C,pan:w,setViewport:T,update:E}}var Be={value:0},Ve=new I(`#ffffff`),He={value:0},Ue={value:0},We={value:0},Ge=new de,Ke={value:0},qe={value:0},Je=`
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
`;function Ye(e){e.uniforms.uVector=Be,e.uniforms.uVecTint={value:Ve},e.uniforms.uVecShadow=He,e.uniforms.uSnow=Ue,e.uniforms.uCloud=We,e.uniforms.uCloudOff={value:Ge},e.uniforms.uFogCharm=Ke}function Xe(e){return e.replace(`#include <fog_fragment>`,`
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
#include <shadowmask_pars_fragment>`)}var $e=`col *= mix(1.0, getShadowMask(), uVecShadow);`;function et(e,{color:t,id:n,windowGlow:r,winColors:i=[`#ffb852`,`#8cd9ff`],litFrac:a=.55}={}){let o=[0,1,2].map(e=>new I(i[e]??i[i.length-1]));return e.customProgramCacheKey=()=>`lgr-vec-tower`,e.onBeforeCompile=e=>{Ye(e),e.uniforms.uWindowGlow=r,e.uniforms.uWinId={value:n},e.uniforms.uVecColor={value:new I(t)},e.uniforms.uWinA={value:o[0]},e.uniforms.uWinB={value:o[1]},e.uniforms.uWinC={value:o[2]},e.uniforms.uWinLit={value:a},e.vertexShader=Ze(e.vertexShader),e.fragmentShader=Xe(Qe(e.fragmentShader.replace(`#include <common>`,`#include <common>
        uniform float uWindowGlow;
        uniform float uWinId;
        uniform vec3  uVecColor;
        uniform vec3  uWinA; uniform vec3 uWinB; uniform vec3 uWinC;
        uniform float uWinLit;
        ${Je}
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
          totalEmissiveRadiance += w.x * w.y * wcol * uWindowGlow * 2.6;   // L93: brighter lit windows → they GLOW + the existing bloom catches them (the "city ignites" beat)
        }`).replace(`#include <opaque_fragment>`,`#include <opaque_fragment>
        if (uVector > 0.5) {
          vec3 col = vecShade(uVecColor);
          ${$e}                                  // the sun's shadow darkens the body
          vec3 wcol; vec2 w = winTerms(wcol);
          vec3 glass = vec3(0.17, 0.23, 0.34);          // dark glass-blue panes (day)
          col = mix(col, glass, w.x * 0.85);
          col += w.x * w.y * wcol * uWindowGlow * 2.2;  // …windows EMIT (unshadowed) at night — L93: brighter ignite
          gl_FragColor = vec4(col, diffuseColor.a);
        }`)))},e}function Y(e,{color:t=null,glow:n=null,glowDay:r=0,glowNight:i=1,windowGlow:a=null,season:o=!1}={}){let s=t===null,c=n!==null&&a!==null;return e.customProgramCacheKey=()=>`lgr-vec|`+(s?`d`:`c`)+(c?`g`:``)+(o?`s`:``),e.onBeforeCompile=e=>{Ye(e),s||(e.uniforms.uVecColor={value:new I(t)}),c&&(e.uniforms.uGlow={value:new I(n)},e.uniforms.uGlowDay={value:r},e.uniforms.uGlowNight={value:i},e.uniforms.uWindowGlow=a),o&&(e.uniforms.uSeason=qe),e.vertexShader=Ze(e.vertexShader);let l=s?`diffuseColor.rgb`:`uVecColor`,u=o?`seasonShift(${l})`:l,d=(s?``:`uniform vec3 uVecColor;
`)+(c?`uniform vec3 uGlow; uniform float uGlowDay; uniform float uGlowNight; uniform float uWindowGlow;
`:``)+(o?`uniform float uSeason;
vec3 seasonShift(vec3 c){
  c = mix(c, vec3(0.86, 0.46, 0.13), smoothstep(0.40, 0.70, uSeason));   // → autumn orange
  c = mix(c, vec3(0.46, 0.33, 0.20), smoothstep(0.75, 1.00, uSeason));   // → bare brown
  return c;
}
`:``),f=c?`uGlow * mix(uGlowDay, uGlowNight, uWindowGlow)`:`vec3(0.0)`,p=Xe(Qe(e.fragmentShader.replace(`#include <common>`,`#include <common>
`+d+Je).replace(`#include <opaque_fragment>`,`#include <opaque_fragment>
        if (uVector > 0.5) {
          vec3 col = vecShade(${u});
          ${$e}                            // the sun's shadow darkens the flat tier…
          gl_FragColor = vec4(col + ${f}, diffuseColor.a);  // …but the night glow stays lit
        }`)));c&&(p=p.replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>\n  totalEmissiveRadiance += ${f};`)),e.fragmentShader=p},e}var tt={value:0},nt={value:0},rt={value:0};function it(e,{sway:t=!1}={}){return e.customProgramCacheKey=()=>t?`lgr-ao-sway`:`lgr-ao`,e.onBeforeCompile=e=>{e.uniforms.uAoStrength=tt,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
attribute float aAo;
varying float vAo;`+(t?`
uniform float uSwayTime;
uniform float uSwayWind;`:``)).replace(`#include <begin_vertex>`,`#include <begin_vertex>
  vAo = aAo;`+(t?[``,`  // L94 sway: height-weighted drift; instanceMatrix[3].xz = the instance world offset → per-tree phase.`,`  #ifdef USE_INSTANCING`,`    float swPh = instanceMatrix[3].x * 0.7 + instanceMatrix[3].z * 0.6;`,`  #else`,`    float swPh = 0.0;`,`  #endif`,`  float swAmp = max(transformed.y, 0.0) * uSwayWind;`,`  transformed.x += sin(uSwayTime * 1.6 + swPh) * swAmp;`,`  transformed.z += sin(uSwayTime * 1.2 + swPh * 1.3) * swAmp * 0.7;`].join(`
`):``)),t&&(e.uniforms.uSwayTime=nt,e.uniforms.uSwayWind=rt),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying float vAo;
uniform float uAoStrength;`).replace(`#include <dithering_fragment>`,`#include <dithering_fragment>
  gl_FragColor.rgb *= (1.0 - clamp(vAo, 0.0, 1.0) * uAoStrength);`)},e}function at(e){let t=e>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function ot(e){let t=at(e);return{next:t,range:(e,n)=>e+(n-e)*t(),int:(e,n)=>e+Math.floor(t()*(n-e+1)),pick:e=>e[Math.floor(t()*e.length)],chance:e=>t()<e}}var st=new I,ct={h:0,s:0,l:0};function lt(e,t){return st.set(e).getHSL(ct),ct.l=Math.max(.1,Math.min(.9,ct.l*(.78+t.next()*.14))),ct.h=(ct.h+(t.next()-.5)*.045+1)%1,ct.s=Math.min(1,ct.s*(.92+t.next()*.26)),st.setHSL(ct.h,ct.s,ct.l),`#`+st.getHexString()}var ut=[{key:`manhattan`,name:`Manhattan`,towers:[`#EDE3C8`,`#D9B98A`,`#B5562F`,`#A8C8E8`,`#2E3F5C`],ground:`#7CC455`,street:`#9AA0A6`,sidewalk:`#C8CCD0`,park:`#5DB347`,water:`#29A8D8`,shopfronts:[`#C04A3A`,`#3A7AC0`,`#C09A2A`],glass:`#7FA8CC`,winColors:[`#ffd27a`,`#9ad6ff`],hMax:4.6,sigma:.36,roofRate:.35,pSplit:.6,nightLit:.55,roofTint:null,coast:{base:.55,out:1,in:.6,jag:1.05},landmarks:[`empireState`,`chrysler`,`liberty`]},{key:`paris`,name:`Paris`,towers:[`#E8DCC0`,`#F2EAD6`,`#E0D2B4`],ground:`#8CC46A`,street:`#A8A29A`,sidewalk:`#D4CEC2`,park:`#6DB35A`,water:`#3FA8C8`,shopfronts:[`#C04A3A`,`#3A6B5A`,`#7A5AC0`],glass:`#5A6B7A`,winColors:[`#ffdca0`,`#ffcaa0`],hMax:1.5,sigma:.9,roofRate:.15,pSplit:.75,nightLit:.45,roofTint:`#6A7886`,coast:{base:1.05,out:.55,in:.3,jag:.5},landmarks:[`eiffel`,`arcDeTriomphe`,`sacreCoeur`]},{key:`neoTokyo`,name:`Neo-Tokyo`,towers:[`#2A3038`,`#3A4250`,`#252B36`,`#4A4456`],ground:`#3A4A42`,street:`#5A6068`,sidewalk:`#7A8088`,park:`#2E5E46`,water:`#0E6878`,shopfronts:[`#E8483A`,`#5AE8E0`,`#E85AA0`],glass:`#5AE8E0`,winColors:[`#5AE8E0`,`#E85AA0`,`#E8E06A`],hMax:5.2,sigma:.42,roofRate:.6,pSplit:.6,nightLit:.7,roofTint:null,coast:{base:.7,out:1.05,in:.62,jag:1.7},landmarks:[`tokyoTower`,`pagoda`,`neonBillboard`]}];ut.map(e=>e.key);var dt=.3,ft=1.9,pt=.55,mt=2.45,ht=.12,gt=.6,_t=6,vt={BASE:.7,OUT:.95,IN:.55,JAG:1,SAMPLES_PER_EDGE:28,HARBOR_DEPTH:.55,HARBOR_WIDTH:.26},yt={PLINTH_TOP:dt,BLOCK:ft,STREET:pt,PITCH:mt,SIDEWALK:ht,SHORE:gt,N:_t,COAST:vt};function bt(e,t,n){let r=n?.base??vt.BASE,i=n?.out??vt.OUT,a=n?.in??vt.IN,o=n?.jag??vt.JAG,s=t+r,c=ot((e^789079)>>>0),l=[2,3,5,8,11,13].map(e=>({k:e,amp:1/e*o**((e-2)/6),phase:c.range(0,Math.PI*2)})),u=l.reduce((e,t)=>e+t.amp,0),d=e=>{let t=0;for(let n of l)t+=n.amp*Math.sin(n.k*e*Math.PI*2+n.phase);return Math.max(-1,Math.min(1,t/(u*.6)))},f=[{fix:+s,nx:1,nz:0,sign:1},{fix:+s,nx:0,nz:1,sign:-1},{fix:-s,nx:-1,nz:0,sign:-1},{fix:-s,nx:0,nz:-1,sign:1}],p=t+.22,m=vt.SAMPLES_PER_EDGE,h=4*m,g=[],_=0;for(let e=0;e<4;e++){let t=f[e];for(let n=0;n<m;n++,_++){let o=n/m,c=_/h,l=(-s+2*s*o)*t.sign,u=d(c),f=u>=0?u*i:u*a;if(e===0){let e=Math.abs(o-.5);if(e<vt.HARBOR_WIDTH){let t=.5+.5*Math.cos(e/vt.HARBOR_WIDTH*Math.PI);f-=(r+vt.HARBOR_DEPTH)*t}}let v,y;t.nx===0?(y=t.fix+t.nz*f,v=l,y=t.nz>0?Math.max(y,p):Math.min(y,-p)):(v=t.fix+t.nx*f,y=l,v=t.nx>0?Math.max(v,p):Math.min(v,-p)),g.push(new de(v,y))}}return{points:g,B:s,maxR:s+i,harborX:p}}function xt(e){(Array.isArray(e)?e:[e]).forEach(e=>e&&e.dispose&&e.dispose())}function St({seed:e=1,profileIndex:t=0,landmarkFactory:r=null,windowGlow:i}){let o=new a,s=new a,l=new a;s.raycast=()=>{},l.raycast=()=>{},o.add(s,l);let u=new A(16773594,3);u.position.set(.45,.6,-.65).multiplyScalar(10);let d=new h(7313331,2762272,1);o.add(u,d);let f=0,p=[],m={seed:e,profileIndex:t,profile:ut[t],extent:0,meshCount:0};function g(e,t,r,i){let a=new n(new U(e,.04,t),Y(new c({color:i,roughness:.95,flatShading:!0}),{color:i}));return a.position.y=r,a.userData.ground=!0,a}function _(e,t){for(let e of s.children)e.geometry&&e.geometry.dispose(),xt(e.material);s.clear();for(let e of l.children)e.traverse(e=>{e.isMesh&&xt(e.material)});l.clear(),p.length=0,f=0;let i=ot(e),a=ut[t],o=(_t-1)/2*mt,u=7.075;m={seed:e,profileIndex:t,profile:a,extent:u+(a.coast?.base??vt.BASE),meshCount:0};let d=bt(e,u,a.coast);m.coast=d;let h=new k;d.points.forEach((e,t)=>t?h.lineTo(e.x,e.y):h.moveTo(e.x,e.y)),h.closePath();let _=new n(new y(h,{depth:2,bevelEnabled:!1,steps:1}),Y(new c({color:a.ground,roughness:.9,flatShading:!0,side:2}),{color:a.ground}));_.rotation.x=-Math.PI/2,_.position.y=dt-2,_.userData.ground=!0,s.add(_);let S=2*7.195;s.add(g(S,S,.32,a.street)),C(d.harborX,a);let T=[];for(let e=0;e<_t;e++)for(let t=0;t<_t;t++)T.push([e,t]);let E=new Set,D=Math.max(1,Math.round(T.length*.08));for(;E.size<D;)E.add(i.int(0,T.length-1));let O=i.range(-2.45*.6,mt*.6),A=i.range(-2.45*.6,mt*.6),j=Math.hypot(o,o),M=[];if(T.forEach(([e,t],n)=>{let r=(e-(_t-1)/2)*mt,o=(t-(_t-1)/2)*mt;if(s.add(g(ft,ft,.32999999999999996,a.sidewalk).translateX(r).translateZ(o)),E.has(n)){s.add(g(ft-ht*2,ft-ht*2,.35,a.park).translateX(r).translateZ(o));let e=i.int(3,5);for(let t=0;t<e;t++)w(r+i.range(-.6,.6),o+i.range(-.6,.6),a,i);return}let c=ft-ht*2,l=i.chance(a.pSplit)?2:1,u=i.chance(a.pSplit)?2:1,d=c/l,f=c/u;for(let e=0;e<l;e++)for(let t=0;t<u;t++){let n=r-c/2+d*(e+.5),s=o-c/2+f*(t+.5),l=Math.max(.6,d-.1),u=Math.max(.6,f-.1),p=Math.hypot(n-O,s-A)/j,m=Math.exp(-(p*p)/(2*a.sigma*a.sigma)),h=Math.max(.5,.5+(a.hMax-.5)*m*i.range(.75,1.25));h>a.hMax*.5&&Math.min(l,u)>=.7&&M.push({lx:n,lz:s,fw:l,fd:u,h,r:p}),v(n,s,l,u,h,a,i)}}),r&&r.ready){M.sort((e,t)=>e.r-t.r);let e=[],t=a.landmarks;for(let n=0;n<t.length&&M.length;n++){let i=null;for(let t of M)if(e.every(e=>Math.hypot(e.lx-t.lx,e.lz-t.lz)>mt*.9)){i=t;break}i||=M[0],e.push(i),b(i.lx,i.lz);let o=a.hMax*r.heightFactor(t[n]),s=r.make(t[n],{x:i.lx,z:i.lz,w:i.fw,d:i.fd,h:o,plinthTop:dt});if(s){l.add(s);let e=new le().setFromObject(s);x(e.min.x-.15,e.max.x+.15,e.min.z-.15,e.max.z+.15)}}}s.traverse(e=>{e.isMesh&&(e.userData.ground?(e.castShadow=!1,e.receiveShadow=!0):e.material&&e.material.isMeshBasicMaterial?(e.castShadow=!1,e.receiveShadow=!1):(e.castShadow=!0,e.receiveShadow=!0))}),l.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),m.meshCount=s.children.length+l.children.length;let ee=0;for(let e of s.children){let t=e.position;ee=(Math.imul(ee,16777619)^(Math.round(t.x*100)*2654435761^Math.round(t.y*100)*40503^Math.round(t.z*100)*2246822519))>>>0}for(let e of m.coast.points)ee=(Math.imul(ee,16777619)^(Math.round(e.x*100)*2654435761^Math.round(e.y*100)*40503))>>>0;m.sig=ee,window.__city={seed:e,profile:a.key,meshes:m.meshCount,sig:ee}}function v(e,t,r,a,o,l,u){let d=et(new c({flatShading:!0,roughness:.7,metalness:.05,envMapIntensity:.3}),{color:lt(u.pick(l.towers),u),id:++f,windowGlow:i,winColors:l.winColors,litFrac:l.nightLit}),m=new n(new U(r,o,a),d);if(m.position.set(e,dt+o/2,t),m.userData.lot=[e,t],s.add(m),l.roofTint){let i=Y(new c({color:l.roofTint,roughness:.85,flatShading:!0}),{color:l.roofTint}),u=new n(new U(r*1.02,.08,a*1.02),i);u.position.set(e,dt+o+.04,t),u.userData.lot=[e,t],s.add(u)}if(o<1.4){let i=u.pick(l.shopfronts),o=new n(new U(r*1.04,.18,a*1.04),Y(new c({color:i,roughness:.8,flatShading:!0}),{color:i}));o.position.set(e,.39,t),o.userData.lot=[e,t],s.add(o)}let h=dt+o,g=r,_=a;if(o>l.hMax*.5&&u.chance(.55)){let d=r*u.range(.5,.72),p=a*u.range(.5,.72),m=o*u.range(.18,.4),v=new n(new U(d,m,p),et(new c({flatShading:!0,roughness:.7,metalness:.05,envMapIntensity:.3}),{color:lt(u.pick(l.towers),u),id:++f,windowGlow:i,winColors:l.winColors,litFrac:l.nightLit}));v.position.set(e,dt+o+m/2,t),v.userData.lot=[e,t],s.add(v),h=dt+o+m,g=d,_=p}if(o>l.hMax*.45&&u.chance(l.roofRate)){let r=u.chance(.5)?new n(new U(g*.4,.18,_*.4),Y(new c({color:`#9a9a9a`,flatShading:!0}),{color:`#9a9a9a`})):new n(new D(g*.18,g*.18,.22,10),Y(new c({color:`#b9bec4`,flatShading:!0}),{color:`#b9bec4`}));if(r.position.set(e+u.range(-.1,.1),h+.11,t+u.range(-.1,.1)),r.userData.lot=[e,t],s.add(r),u.chance(.25)){let r=new n(new he(.05,6,5),new S({color:`#ff3b30`,transparent:!0,opacity:1}));r.position.set(e,h+.15,t),r.userData.lot=[e,t],r.raycast=()=>{},s.add(r),p.push({mesh:r,phase:u.range(0,6.28)})}}if(o>l.hMax*.7&&u.chance(.35)){let r=o*u.range(.18,.34),i=new n(new D(.018,.05,r,6),Y(new c({color:`#c8ccd2`,flatShading:!0}),{color:`#c8ccd2`}));i.position.set(e,h+r/2,t),i.userData.lot=[e,t],i.raycast=()=>{},s.add(i)}}function b(e,t){for(let n=s.children.length-1;n>=0;n--){let r=s.children[n];r.userData.lot&&Math.abs(r.userData.lot[0]-e)<1e-4&&Math.abs(r.userData.lot[1]-t)<1e-4&&(r.geometry&&r.geometry.dispose(),xt(r.material),s.remove(r))}for(let e=p.length-1;e>=0;e--)p[e].mesh.parent||p.splice(e,1)}function x(e,t,n,r){for(let i=s.children.length-1;i>=0;i--){let a=s.children[i];a.userData.lot&&a.position.x>=e&&a.position.x<=t&&a.position.z>=n&&a.position.z<=r&&(a.geometry&&a.geometry.dispose(),xt(a.material),s.remove(a))}}function C(e,t){let r=Y(new c({color:`#7a5634`,roughness:.95,flatShading:!0}),{color:`#7a5634`}),i=(e,t,i,a)=>{let o=new n(new U(e,.06,t),r);o.position.set(i,dt-.16,a),s.add(o)};i(.24,2,e+.02,0),i(1.3,.22,e+.7,-.72),i(1.3,.22,e+.7,.72)}function w(e,t,r,i){let a=new I(r.park),o=(r,o)=>{let l=a.clone().offsetHSL(0,0,i.range(-.06,.06)).getStyle(),u=new n(new he(r,7,6),Y(new c({color:l,flatShading:!0}),{color:l,season:!0}));u.scale.y=.7,u.position.set(e,dt+o,t),u.userData.lot=null,s.add(u)},l=new n(new U(.05,.18,.05),Y(new c({color:`#6b4a2a`,flatShading:!0}),{color:`#6b4a2a`}));l.position.set(e,.39,t),s.add(l),o(.22,.28),o(.16,.46)}function T(e){for(let t of p)t.mesh.material.opacity=.35+.65*(.5+.5*Math.sin(e*3+t.phase))}return _(e,t),{group:o,key:u,fill:d,update:T,generate:_,get state(){return m},get extent(){return m.extent},get waterColor(){return m.profile.water},profiles:ut}}var Ct=Math.PI*2,wt=.7,Tt=90,Et=[{name:`night`,sun:`#4a6f9e`,intensity:.35,hemiSky:`#26344f`,hemiGround:`#0c1018`,horizon:`#1e2942`,sky:`#36486e`,exposure:.95,outline:`#101a30`,window:1,toonGain:2.6,turbidity:3,rayleigh:1,mie:.004,mieG:.75,gradeTint:`#cfd8ec`,gradeSat:.84,gradeLift:`#05070e`,gradeContrast:1},{name:`dawn`,sun:`#ff9e54`,intensity:2.4,hemiSky:`#8a7686`,hemiGround:`#2a1f1a`,horizon:`#b8512c`,sky:`#ffb070`,exposure:1.05,outline:`#241826`,window:.3,toonGain:2,turbidity:6,rayleigh:3,mie:.025,mieG:.86,gradeTint:`#ffe6cf`,gradeSat:1.05,gradeLift:`#0a0603`,gradeContrast:1.04},{name:`noon`,sun:`#fff4e0`,intensity:4.6,hemiSky:`#9cb8cc`,hemiGround:`#33302a`,horizon:`#5e7689`,sky:`#aacadd`,exposure:1.18,outline:`#0b0a08`,window:0,toonGain:1.7,turbidity:1.6,rayleigh:2.9,mie:.005,mieG:.78,gradeTint:`#d6e6f4`,gradeSat:1.34,gradeLift:`#000000`,gradeContrast:1.26},{name:`dusk`,sun:`#ff6b35`,intensity:2,hemiSky:`#7a566a`,hemiGround:`#281a18`,horizon:`#b0432a`,sky:`#ff8a5a`,exposure:1.05,outline:`#1f1420`,window:.72,toonGain:2,turbidity:7,rayleigh:3.2,mie:.028,mieG:.87,gradeTint:`#ffdcc0`,gradeSat:1.06,gradeLift:`#0c0604`,gradeContrast:1.05}],Dt=e=>e-Math.floor(e),Ot=(e,t,n)=>e+(t-e)*n,kt=(e,t,n)=>e+(t-e)*(1-Math.exp(-6*n));function At({t:e=.5}={}){let t=e,n=e,r=!1,i=!1,a=Et.map(e=>({name:e.name,sun:new I(e.sun),hemiSky:new I(e.hemiSky),hemiGround:new I(e.hemiGround),horizon:new I(e.horizon),sky:new I(e.sky),outline:new I(e.outline),intensity:e.intensity,exposure:e.exposure,window:e.window,toonGain:e.toonGain,turbidity:e.turbidity,rayleigh:e.rayleigh,mie:e.mie,mieG:e.mieG,gradeTint:new I(e.gradeTint),gradeLift:new I(e.gradeLift),gradeSat:e.gradeSat,gradeContrast:e.gradeContrast})),o=new z(0,1,0),s=new I(`#fff4e0`),c=new I(`#6f97b3`),l=new I(`#2a2620`),u=new I(`#3a4a57`),d=new I(`#7da3bd`),f=new I(`#0b0a08`),p=new I(`#000000`),m=3,h=1,g=0,_=1.7,v={turbidity:2.2,rayleigh:1.3,mie:.005,mieG:.78},y={tint:new I(`#fafdff`),lift:new I(`#000000`),sat:1.08,contrast:1},b=new z;function x(e){let t=Dt(e)*4,n=Math.floor(t)%4,r=(n+1)%4,i=t-Math.floor(t),x=a[n],S=a[r];s.lerpColors(x.sun,S.sun,i),c.lerpColors(x.hemiSky,S.hemiSky,i),l.lerpColors(x.hemiGround,S.hemiGround,i),u.lerpColors(x.horizon,S.horizon,i),d.lerpColors(x.sky,S.sky,i),f.lerpColors(x.outline,S.outline,i),m=Ot(x.intensity,S.intensity,i),h=Ot(x.exposure,S.exposure,i),g=Ot(x.window,S.window,i),_=Ot(x.toonGain,S.toonGain,i),v.turbidity=Ot(x.turbidity,S.turbidity,i),v.rayleigh=Ot(x.rayleigh,S.rayleigh,i),v.mie=Ot(x.mie,S.mie,i),v.mieG=Ot(x.mieG,S.mieG,i),y.tint.lerpColors(x.gradeTint,S.gradeTint,i),y.lift.lerpColors(x.gradeLift,S.gradeLift,i),y.sat=Ot(x.gradeSat,S.gradeSat,i),y.contrast=Ot(x.gradeContrast,S.gradeContrast,i),p.setRGB(.045*g,.075*g,.14*g);let C=Dt(e)*Ct-Math.PI/2,w=Math.cos(C),T=Math.sin(C);b.set(w,T*Math.cos(wt),T*Math.sin(wt)),b.y>=0?o.copy(b):o.copy(b).negate()}return x(t),{sunDir:o,sunColor:s,hemiSky:c,hemiGround:l,horizon:u,sky:d,outline:f,toonFloor:p,skyParams:v,grade:y,sunArc:b,get sunIntensity(){return m},get exposure(){return h},get windowGlow(){return g},get toonGain(){return _},get t(){return Dt(t)},get auto(){return r},get clock(){let e=Math.round(Dt(t)*24*60)%1440;return`${String(Math.floor(e/60)).padStart(2,`0`)}:${String(e%60).padStart(2,`0`)}`},cyclePreset(){n=(Math.floor(t*4+1e-4)+1)/4},nudge(e){n+=e/24},goTo(e){n=e},toggleAuto(){r=!r},setReducedMotion(e){i=e},update(e){r&&!i&&(n+=e/Tt),t=kt(t,n,e),x(t)}}}function jt(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.35,`rgba(255,255,255,0.55)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new W(e);return r.colorSpace=V,r}function Mt(e,t){let n=[];for(let r=0;r<16;r++){let i=r/16*Math.PI*2;n.push(new z(Math.cos(i)*e,t,Math.sin(i)*e))}return new N(n,!0,`catmullrom`,.5)}function Nt(e){let t=(t,n)=>Math.exp(-((e-t)*(e-t))/(2*n*n)),n=Math.max(t(.33,.05),t(.75,.06)),r=f.smoothstep(e,.24,.3)*(1-f.smoothstep(e,.8,.88));return f.clamp(.15+.55*r+.45*n,.12,1)}function Pt(){let{PITCH:e,N:t,PLINTH_TOP:n}=yt,r=t+1,i=n+.04,a=n=>(n-t/2)*e,o=t/2,s=[],c=(e,t)=>t*r+e;for(let e=0;e<r;e++)for(let t=0;t<r;t++)s.push({x:a(t),z:a(e),i:t,j:e,edges:[]});let l=[],u=(t,n)=>{let r=(s[t].i===o||s[t].j===o)&&(s[n].i===o||s[n].j===o),i=l.length;l.push({a:t,b:n,len:e,main:r}),s[t].edges.push(i),s[n].edges.push(i)};for(let e=0;e<r;e++)for(let t=0;t<r;t++)t<r-1&&u(c(t,e),c(t+1,e)),e<r-1&&u(c(t,e),c(t,e+1));return{nodes:s,edges:l,y:i,mid:o}}function Ft({plinthTop:e=.3,extent:t=4,profile:n=null}={}){let r=new a,i=Pt(),{nodes:o,edges:s}=i,l=i.y,u=.34,d=0;{let e=yt.PITCH-u*2;d=Math.max(1,Math.floor((e+.26)/.56))}let p=new S({color:`#e8c84a`,fog:!0}),m=new ae(new U(.05,.012,.3),p,s.length*d);m.frustumCulled=!1,m.raycast=()=>{},m.receiveShadow=!1,m.castShadow=!1,r.add(m);{let e=new C,t=0;for(let n of s){let r=o[n.a],i=o[n.b],a=i.x-r.x,s=i.z-r.z,c=Math.hypot(a,s),f=a/c,p=s/c,h=Math.atan2(f,p),g=c-u*2;for(let n=0;n<d;n++){let i=u+(d===1?g/2:g*n/(d-1));e.position.set(r.x+f*i,l,r.z+p*i),e.rotation.set(0,h,0),e.updateMatrix(),m.setMatrixAt(t++,e.matrix)}}m.instanceMatrix.needsUpdate=!0}let h=new ae(new U(.34,.26,.74),Y(new c({flatShading:!0,roughness:.5,metalness:.3})),12);h.castShadow=!0,h.receiveShadow=!1,h.frustumCulled=!1,h.raycast=()=>{};let g=new se,_=new Float32Array(72),v=new Float32Array(72),y=new I(`#fff0c0`),b=new I(`#ff3528`);for(let e=0;e<12;e++)y.toArray(v,e*3),b.toArray(v,(12+e)*3),_[e*3+1]=-50,_[(12+e)*3+1]=-50;g.setAttribute(`position`,new j(_,3)),g.setAttribute(`color`,new j(v,3));let x=new E({size:.72,sizeAttenuation:!0,map:jt(),vertexColors:!0,transparent:!0,opacity:0,blending:2,depthWrite:!1}),T=new w(g,x);T.frustumCulled=!1,T.raycast=()=>{},r.add(h,T);let D=[`#f4c430`,`#c0392b`,`#d8dde2`,`#9aa7b4`,`#6b7785`,`#5a7d9a`],O=at(2403557),k=s.map((e,t)=>t).filter(e=>s[e].main),A=[];for(let e=0;e<12;e++){let t=e<4&&k.length?k[O()*k.length|0]:O()*s.length|0,n=e===1;A.push({edge:t,fwd:O()<.5,s:O()*s[t].len,speed:n?.5:.78+e%3*.1,lenZ:n?1.45:1,color:D[n?1:e===0?0:2+e%4],rng:at(12648430+e*2654435761),isBus:n,pos:new z,dirX:0,dirZ:1,active:!1})}let M=new I;A.forEach((e,t)=>h.setColorAt(t,M.set(e.color)));function te(e,t,n){let r=o[e],i=r.edges.filter(e=>e!==t);if(i.length===0)return t;let a=s[t],c=a.a===e?a.b:a.a,l=r.x-o[c].x,u=r.z-o[c].z,d=Math.hypot(l,u)||1,f=i[0],p=-2;for(let t of i){let n=s[t],i=n.a===e?n.b:n.a,a=o[i].x-r.x,c=o[i].z-r.z,m=Math.hypot(a,c)||1,h=l/d*(a/m)+u/d*(c/m);h>p&&(p=h,f=t)}return n()<.65?f:i[n()*i.length|0]}let ne=te,N=new C,P=(e,t)=>{N.position.set(0,-50,0),N.scale.setScalar(0),N.updateMatrix(),e.setMatrixAt(t,N.matrix)},F=.085,L=yt.PLINTH_TOP+.02+.13,re=new ae(new ee(.04,.1,3,6),Y(new c({flatShading:!0,roughness:.8})),14);re.castShadow=!0,re.receiveShadow=!1,re.frustumCulled=!1,re.raycast=()=>{};let ie=Mt(t-.72,e),oe=[];for(let e=0;e<14;e++)oe.push({phase:e/14,speed:.12+e%4*.02,dir:e%2?1:-1,pos:new z,active:!1});let R=new z,ce=new z,B=new I;oe.forEach((e,t)=>re.setColorAt(t,B.set([`#caa`,`#9ab`,`#bba`,`#ab9`][t%4]))),r.add(re);let V={manhattan:`#e8c84a`,paris:`#dcd2bc`,neoTokyo:`#5ae8e0`};function le(e){e&&p.color.set(V[e.key]||`#e8c84a`)}le(n);function ue(t,n,r){let i=r?r.t:.5,a=r?r.windowGlow:0,c=Math.max(2,Math.round(Nt(i)*12)),l=a>.05;for(let e=0;e<12;e++){if(e>=c){P(h,e),A[e].active=!1,_[e*3+1]=-50,_[(12+e)*3+1]=-50;continue}let n=A[e];n.s+=t*n.speed;let r=0;for(;n.s>=s[n.edge].len&&r++<4;){n.s-=s[n.edge].len;let e=n.fwd?s[n.edge].b:s[n.edge].a,t=ne(e,n.edge,n.rng);n.edge=t,n.fwd=s[t].a===e}let i=s[n.edge],a=n.fwd?o[i.a]:o[i.b],u=n.fwd?o[i.b]:o[i.a],d=u.x-a.x,f=u.z-a.z,p=Math.hypot(d,f)||1,m=d/p,g=f/p,v=-g,y=m,b=a.x+m*n.s+v*F,x=a.z+g*n.s+y*F,S=Math.atan2(m,g);N.position.set(b,L,x),N.rotation.set(0,S,0),N.scale.set(1,1,n.lenZ),N.updateMatrix(),h.setMatrixAt(e,N.matrix),n.pos.set(b,L,x),n.dirX=m,n.dirZ=g,n.active=!0;let C=.74*n.lenZ*.5,w=L+.06,T=e*3,E=(12+e)*3;l?(_[T]=b+m*(C+.04),_[T+1]=w,_[T+2]=x+g*(C+.04),_[E]=b-m*(C+.02),_[E+1]=w,_[E+2]=x-g*(C+.02)):(_[T+1]=-50,_[E+1]=-50)}h.instanceMatrix.needsUpdate=!0,g.attributes.position.needsUpdate=!0,x.opacity=f.clamp(a*1.8,0,1);let u=Math.max(2,Math.round(Nt(i)*14));for(let t=0;t<14;t++){if(t>=u){P(re,t),oe[t].active=!1;continue}let r=oe[t],i=(r.phase+r.dir*r.speed*n*.02+1e3)%1;ie.getPointAt(i,R),ie.getTangentAt(i,ce);let a=Math.sin(n*6+r.phase*30)*.015;N.position.set(R.x,e+.09+a,R.z),N.rotation.set(0,Math.atan2(ce.x*r.dir,ce.z*r.dir),Math.sin(n*6+r.phase*30)*.06),N.scale.setScalar(1),N.updateMatrix(),re.setMatrixAt(t,N.matrix),r.pos.set(R.x,e+.09,R.z),r.active=!0}re.instanceMatrix.needsUpdate=!0}let H=[...A.map((e,t)=>({kind:`car`,label:e.isBus?`bus`:`car ${t+1}`,getWorldPos:t=>t.copy(e.pos),active:()=>e.active,info:()=>`${e.isBus?`bus`:`car`} · ${s[e.edge].main?`main avenue`:`side street`} → heading ${It(e.dirX,e.dirZ)}`})),...oe.map((e,t)=>({kind:`person`,label:`person ${t+1}`,getWorldPos:t=>t.copy(e.pos),active:()=>e.active,info:()=>`person · strolling the waterfront promenade`}))];function de(){return H}return{group:r,update:ue,setProfile:le,getFollowables:de,graph:i,setRouter(e){ne=e||te}}}function It(e,t){return[`N`,`NE`,`E`,`SE`,`S`,`SW`,`W`,`NW`][(Math.round(Math.atan2(e,t)/(Math.PI/4))%8+8)%8]}function Lt({frames:e,fps:t=8,cols:n,rows:r=1}={}){let i=n||e||4,a=r||1,o=e||i*a,s=typeof window<`u`&&window.matchMedia?window.matchMedia(`(prefers-reduced-motion: reduce)`):null;function c(e,t){let n=t%i,r=Math.floor(t/i);e.offset.x=n/i,e.offset.y=1-(r+1)/a}function l(e){let t=e.clone();return t.needsUpdate=!0,t.repeat.set(1/i,1/a),c(t,0),t}function u(e,n,r=0){if(s&&s.matches)return c(e,0),0;let i=(Math.floor(n*t+r)%o+o)%o;return c(e,i),i}function d(e,t){let n=(Math.round(t)%o+o)%o;return c(e,n),n}return{frames:o,fps:t,cols:i,rows:a,makeInstanceTexture:l,step:u,setFrame:d}}function Rt(e){if(typeof document>`u`||!e||!e.image)return e;let t=e.image,n=t.width||t.naturalWidth,r=t.height||t.naturalHeight,i=document.createElement(`canvas`);i.width=n,i.height=r;let a=i.getContext(`2d`,{willReadFrequently:!0});a.drawImage(t,0,0,n,r);let o=a.getImageData(0,0,n,r),s=o.data;for(let e=0;e<s.length;e+=4){let t=s[e]*.299+s[e+1]*.587+s[e+2]*.114|0;s[e]=s[e+1]=s[e+2]=t}a.putImageData(o,0,0);let c=new W(i);return c.colorSpace=e.colorSpace||`srgb`,c}function zt({url:e,fallback:t,luminance:n=!1,onReady:r}={}){let i=n?Rt(t):t;return e&&typeof window<`u`&&new te().load(e,e=>{e.colorSpace=V,r&&r(n?Rt(e):e)},void 0,()=>{}),i}var Bt=``+new URL(`gull_diffusion_sheet-BMlUTLhu.png`,import.meta.url).href;function Vt(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.4,`rgba(255,255,255,0.5)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new W(e);return r.colorSpace=V,r}function Ht(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64*.62,0,64/2,64*.62,64*.5);n.addColorStop(0,`rgba(240,250,255,0.95)`),n.addColorStop(1,`rgba(240,250,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new W(e);return r.colorSpace=V,r}function Ut(){let e=document.createElement(`canvas`);e.width=256,e.height=64;let t=e.getContext(`2d`);t.strokeStyle=`#ffffff`,t.lineWidth=6,t.lineCap=`round`,t.lineJoin=`round`;let n=[14,24,36,24];for(let e=0;e<4;e++){let r=e*64,i=n[e];t.beginPath(),t.moveTo(r+8,40),t.quadraticCurveTo(r+24,i,r+32,36),t.quadraticCurveTo(r+40,i,r+56,40),t.stroke()}let r=new W(e);return r.colorSpace=V,r}function Wt(e,t,n=18){let r=[];for(let i=0;i<n;i++){let a=i/n*Math.PI*2;r.push(new z(Math.cos(a)*e,t,Math.sin(a)*e))}return new N(r,!0,`catmullrom`,.5)}function Gt(e,t,n){let r=e-t,i=[],a=(e,t)=>i.push(new z(e,n,t)),o=(e,n,r,i,o=4)=>{for(let s=1;s<=o;s++){let c=r+(i-r)*(s/o);a(e+Math.cos(c)*t,n+Math.sin(c)*t)}};for(let t=0;t<4;t++)a(e,-r+2*r*t/4);o(r,r,0,Math.PI/2);for(let t=0;t<4;t++)a(r-2*r*t/4,e);o(-r,r,Math.PI/2,Math.PI);for(let t=0;t<4;t++)a(-e,r-2*r*t/4);o(-r,-r,Math.PI,1.5*Math.PI);for(let t=0;t<4;t++)a(-r+2*r*t/4,-e);return o(r,-r,1.5*Math.PI,2*Math.PI),new N(i,!0,`catmullrom`,.5)}function Kt({extent:e=8,waterSize:t=28,plinthTop:r=.3}={}){let i=new a;i.raycast=()=>{};let o=.06,s=(e,n,r)=>r.set(e/t+.5,-n/t+.5,0),l=[Gt(9.5,3,o),Wt(12.7,o),new N([new z(8.4,o,0),new z(11,o,-3.6),new z(13,o,0),new z(11,o,3.6)],!0,`catmullrom`,.5)],u=l.map(e=>e.getLength());function d({scale:e=1,hull:t=`#6b7785`,cabin:r=`#e7ecf2`}){let i=new a,o=new n(new U(.46*e,.2*e,1.1*e),Y(new c({color:t,roughness:.6,metalness:.2,flatShading:!0}),{color:t}));o.position.y=.02;let s=new n(new U(.3*e,.22*e,.42*e),Y(new c({color:r,roughness:.7,flatShading:!0}),{color:r}));return s.position.set(0,.18*e,.08*e),i.add(o,s),i.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!1),e.raycast=()=>{}}),i.userData.halfLen=.55*e,i}let p=[{laneIndex:0,dir:1,speed:.5,wake:.024,scale:1,hull:`#5a6675`,cabin:`#e7ecf2`},{laneIndex:1,dir:-1,speed:.42,wake:.022,scale:1,hull:`#7a5b46`,cabin:`#d9c3a6`},{laneIndex:0,dir:1,speed:.56,wake:.024,scale:.9,hull:`#456079`,cabin:`#cfe0ee`},{laneIndex:2,dir:1,speed:.34,wake:.03,scale:1.35,hull:`#39505f`,cabin:`#e2b85a`}];p.forEach((e,t)=>{e.mesh=d(e),e.u=t*.27%1,e.phase=t*1.7,e.isFerry=e.laneIndex===2,i.add(e.mesh)});let m=p.length,h=m*2,g=new se,_=new Float32Array(h*3).fill(-50),v=new Float32Array(h*3),y=new I(`#fff0c0`),b=new I(`#ff3528`);for(let e=0;e<m;e++)y.toArray(v,e*3),b.toArray(v,(m+e)*3);g.setAttribute(`position`,new j(_,3)),g.setAttribute(`color`,new j(v,3));let x=new w(g,new E({size:.6,sizeAttenuation:!0,map:Vt(),vertexColors:!0,transparent:!0,opacity:0,blending:2,depthWrite:!1}));x.frustumCulled=!1,x.raycast=()=>{},i.add(x);function S(e,t){let r=new n(new he(e,9,7),Y(new c({color:t,roughness:.5,flatShading:!0}),{color:t}));return r.scale.set(.55,.5,1),r.castShadow=!1,r.receiveShadow=!1,r.raycast=()=>{},r.position.y=-5,r}let C=[{x:-9.5,z:6,size:.18,color:`#5b6f86`,period:11,arcH:.55,span:1.1,whale:!1},{x:7.5,z:-9.5,size:.16,color:`#4a6076`,period:14,arcH:.5,span:1,whale:!1},{x:-7,z:-8.5,size:.2,color:`#607089`,period:9,arcH:.6,span:1.2,whale:!1},{x:10.5,z:7,size:.62,color:`#3a4350`,period:38,arcH:.9,span:2.6,whale:!0}];C.forEach((e,t)=>{e.mesh=S(e.size,e.color),e.heading=Math.atan2(-e.x,-e.z),e.t=t/C.length*e.period,e.splashed=!1,i.add(e.mesh),e.whale&&(e.spout=new R(new ve({map:Ht(),transparent:!0,opacity:0,depthWrite:!1,fog:!0})),e.spout.scale.set(.6,1.1,1),e.spout.position.set(e.x,-5,e.z),i.add(e.spout))});let T=Lt({frames:4,fps:7}),D=[`#ffffff`,`#cfd4da`,`#c8a06a`],O=[],k=zt({url:Bt,fallback:Ut(),luminance:!0,onReady:e=>{k=e;for(let t of O){let n=t.sp.material.map;t.sp.material.map=T.makeInstanceTexture(e),t.sp.material.needsUpdate=!0,n&&n.dispose()}typeof window<`u`&&(window.__gullSheet=`diffusion`)}});for(let e=0;e<4;e++){let t=new R(new ve({map:T.makeInstanceTexture(k),color:new I(D[e%D.length]),transparent:!0,opacity:0,depthWrite:!1,fog:!0}));t.scale.setScalar(.5),O.push({sp:t,r:8.6+e*.5,y:1.1+e%2*.5,speed:(.18+e*.03)*(e%2?-1:1),phase:e*1.9}),i.add(t)}typeof window<`u`&&(window.__gullSheet=window.__gullSheet||`procedural`,window.__gullAnim={frames:T.frames,variants:D.length,fps:T.fps});let A=C.length,M=Array.from({length:m+A},()=>new z),ee=e=>e.laneIndex,te=new z,ne=new z,P=new z;function F(e,t,n){let r=n?n.windowGlow:0,i=1-r;for(let n=0;n<m;n++){let i=p[n],a=l[i.laneIndex],c=u[i.laneIndex],d=i.isFerry?.45+.55*Math.min(1,Math.abs((i.u+.5)%1-.5)*3):1,f=i.u;i.u=(i.u+i.dir*e*i.speed*d/c+1)%1,(i.dir>0?i.u<f:i.u>f)&&(i.laneIndex=ee(i)),a.getPointAt(i.u,te),a.getTangentAt(i.u,ne);let h=ne.x*i.dir,g=ne.z*i.dir,v=Math.atan2(h,g),y=Math.sin(t*1.1+i.phase)*.025;i.mesh.position.set(te.x,o+y,te.z),i.mesh.rotation.set(Math.sin(t*.9+i.phase)*.04,v,0);let b=i.mesh.userData.halfLen;s(te.x-h*b,te.z-g*b,P),M[n].set(P.x,P.y,i.wake);let x=n*3,S=(m+n)*3;if(r>.05){let e=.18;_[x]=te.x+h*(b+.05),_[x+1]=e,_[x+2]=te.z+g*(b+.05),_[S]=te.x-h*(b+.02),_[S+1]=e,_[S+2]=te.z-g*(b+.02)}else _[x+1]=-50,_[S+1]=-50}L(),x.material.opacity=f.clamp(r*1.8,0,1);for(let t=0;t<A;t++){let n=C[t];n.t+=e;let r=m+t,i=n.whale?3.2:1.3;if(n.t>=n.period){let e=(n.t-n.period)/i;if(e>=1){n.t=0,n.splashed=!1,n.mesh.position.y=-5,n.spout&&(n.spout.material.opacity=0),M[r].set(0,0,0);continue}let t=Math.sin(Math.PI*e),a=(e-.5)*n.span,c=n.x+Math.sin(n.heading)*a,l=n.z+Math.cos(n.heading)*a;n.mesh.position.set(c,o-.1+t*n.arcH,l),n.mesh.rotation.set(Math.cos(Math.PI*e)*.9,n.heading,0);let u=e<.16||e>.84;if(s(c,l,P),M[r].set(P.x,P.y,u?n.whale?.07:.05:0),n.spout){let t=f.clamp((e-.15)*3,0,1)*(1-e);n.spout.position.set(c,.56+t*.6,l),n.spout.material.opacity=t*.9}}else n.mesh.position.y=-5,M[r].set(0,0,0),n.spout&&(n.spout.material.opacity=0)}for(let e=0;e<4;e++){let n=O[e],r=n.phase+t*n.speed*.25;n.sp.position.set(Math.cos(r)*n.r,n.y+Math.sin(t*1.4+n.phase)*.12,Math.sin(r)*n.r),n.sp.material.opacity=f.clamp(i*.9-.05,0,.85);let a=T.step(n.sp.material.map,t,n.phase);e===0&&typeof window<`u`&&(window.__gullFrame=a)}if(typeof window<`u`){let e=0;for(let t of C)t.mesh.position.y>o&&e++;window.__waterLife={boats:m,breaching:e,gulls:+O[0].sp.material.opacity.toFixed(2),lights:+x.material.opacity.toFixed(2)}}}function L(){g.attributes.position.needsUpdate=!0}function re(){return M.length}let ie=[...p.map((e,t)=>({kind:`boat`,label:e.isFerry?`ferry`:`boat ${t+1}`,getWorldPos:t=>t.copy(e.mesh.position),info:()=>e.isFerry?`boat · harbor ferry → docks`:`boat · open-water lane ${e.laneIndex}`})),...O.map((e,t)=>({kind:`gull`,label:`gull ${t+1}`,getWorldPos:t=>t.copy(e.sp.position),active:()=>e.sp.material.opacity>.05,info:()=>`gull · circling the coast`})),...C.map((e,t)=>({kind:`fish`,label:e.whale?`whale`:`fish ${t+1}`,getWorldPos:t=>t.copy(e.mesh.position),active:()=>e.mesh.position.y>o-.3,info:()=>e.mesh.position.y>o?e.whale?`whale · breaching!`:`fish · breaching!`:`fish · below the surface`}))];function ae(){return ie}return{group:i,update:F,getFollowables:ae,wakeDrops:M,get wakeCount(){return re()},lanes:l,setRouter(e){ee=e||(e=>e.laneIndex)}}}var qt=[`empireState`,`chrysler`,`liberty`,`eiffel`,`arcDeTriomphe`,`sacreCoeur`,`tokyoTower`,`pagoda`,`neonBillboard`],Jt={empireState:1.25,chrysler:1.1,liberty:.55,eiffel:3.2,arcDeTriomphe:1.5,sacreCoeur:1.75,tokyoTower:1.35,pagoda:.5,neonBillboard:.9};function Yt(e){let t=()=>new c({flatShading:!0,roughness:.7,metalness:.1}),r=(n,r={})=>r.windows?et(t(),{color:n,id:e.id(),windowGlow:e.windowGlow,winColors:e.winColors,litFrac:e.litFrac}):Y(t(),{color:n,glow:r.glow??null,glowDay:r.glowDay??0,glowNight:r.glowNight??1,windowGlow:r.glow?e.windowGlow:null});return{box:(e,t,i,a,o={})=>new n(new U(e,t,i),r(a,o)),cyl:(e,t,i,a,o={})=>new n(new D(e,t,i,o.seg||12),r(a,o)),cone:(e,t,i,a={})=>new n(new F(e,t,a.seg||8),r(i,a)),sphere:(e,t,i={})=>new n(new he(e,i.seg||12,i.seg2||8),r(t,i)),lathe:(e,t,i={})=>new n(new p(e.map(e=>new de(e[0],e[1])),i.seg||4),r(t,i))}}var X=(e,t,n,r)=>(e.position.set(t,n,r),e),Xt=[`#7FB0E0`,`#E07FB0`,`#7FE0A0`,`#E0C97F`,`#9FE07F`,`#7FE0E0`,`#FF8C42`,`#E0E07F`,`#C97FE0`,`#E07F7F`,`#7F9FE0`,`#E0483A`],Z={empireState(e,t){let n=`#E8E0CF`;e.add(X(t.box(.42,.18,.42,n,{windows:!0}),0,.09,0)),e.add(X(t.box(.34,.16,.34,n,{windows:!0}),0,.26,0)),e.add(X(t.box(.26,.14,.26,n,{windows:!0}),0,.41,0)),e.add(X(t.box(.19,.34,.19,n,{windows:!0}),0,.65,0)),e.add(X(t.box(.13,.06,.13,n,{windows:!0}),0,.85,0));let r=Xt[new Date().getMonth()];e.add(X(t.cyl(.03,.045,.12,n,{seg:10,glow:r,glowNight:1.85}),0,.94,0)),e.add(X(t.cone(.012,.07,n,{seg:8}),0,1.04,0))},chrysler(e,t){let n=`#C9CED4`;e.add(X(t.box(.22,.55,.22,`#9AA7B4`,{windows:!0}),0,.275,0));let r=.55;for(let i=0;i<5;i++){let a=.14-i*.024,o=.07;e.add(X(t.cyl(a*.7,a,o,n,{seg:8,glow:`#dfeaff`,glowNight:.5}),0,r+o/2,0)),r+=o}e.add(X(t.cone(.018,.16,n,{seg:8}),0,r+.08,0))},liberty(e,t){let n=`#B9B4A6`,r=`#4FA890`;e.add(X(t.box(.42,.16,.42,n),0,.08,0)),e.add(X(t.box(.3,.2,.3,n),0,.26,0)),e.add(X(t.cyl(.1,.15,.42,r,{seg:10}),0,.57,0)),e.add(X(t.box(.11,.1,.11,r),0,.83,0));for(let n=0;n<7;n++){let i=(n/6-.5)*Math.PI*1.1;e.add(X(t.cone(.012,.1,r,{seg:5}),Math.sin(i)*.1,.92,Math.cos(i)*.06-.02))}let i=X(t.cyl(.025,.03,.34,r,{seg:8}),.14,.98,0);i.rotation.z=.35,e.add(i),e.add(X(t.box(.06,.06,.06,r,{glow:`#ffd060`,glowDay:.6,glowNight:1.2}),.2,1.16,0)),e.add(X(t.cone(.04,.09,`#ffcf66`,{seg:6,glow:`#ffd060`,glowDay:.7,glowNight:1.3}),.2,1.24,0))},eiffel(e,t){let n=`#6E5C4C`,r=[[.2,0],[.13,.16],[.085,.33],[.055,.5],[.035,.66],[.02,.85],[0,.92]];e.add(t.lathe(r,n,{seg:4}));let i=t.lathe(r,n,{seg:4});i.rotation.y=Math.PI/4,e.add(i),e.add(X(t.box(.26,.025,.26,n),0,.33,0)),e.add(X(t.box(.14,.02,.14,n),0,.66,0)),e.add(X(t.cone(.01,.1,n,{seg:6}),0,.97,0))},arcDeTriomphe(e,t){let r=`#D9D0C1`,i=.58,a=.5,o=.34,s=new k;s.moveTo(-.58/2,0),s.lineTo(i/2,0),s.lineTo(i/2,a),s.lineTo(-.58/2,a),s.lineTo(-.58/2,0);let l=new d,u=.15,f=.22;l.moveTo(-.15,0),l.lineTo(-.15,f),l.absarc(0,f,u,Math.PI,0,!0),l.lineTo(u,0),l.lineTo(-.15,0),s.holes.push(l);let p=new y(s,{depth:o,bevelEnabled:!1});p.translate(0,0,-.34/2),p.computeVertexNormals(),e.add(new n(p,Y(new c({color:r,flatShading:!0}),{color:r}))),e.add(X(t.box(i*1.06,.08,o*1.06,r),0,.54,0))},sacreCoeur(e,t){let n=`#F1EEE6`;e.add(X(t.box(.5,.26,.4,n),0,.13,0));let r=(r,i,a,o)=>{e.add(X(t.cyl(a*.9,a,i,n,{seg:12}),r,o,0));let s=X(t.sphere(a,n,{seg:12}),r,o+i/2,0);s.scale.y=1.5,e.add(s)};r(0,.22,.15,.4),r(-.2,.1,.07,.33),r(.2,.1,.07,.33)},tokyoTower(e,t){let n=`#F25822`,r=`#EDEDED`,i=0;for(let a=0;a<9;a++){let o=a/9,s=(a+1)/9,c=.19*(1-o)+.03*o,l=.19*(1-s)+.03*s,u=.085,d=a%2?r:n;e.add(X(t.cyl(l,c,u,d,{seg:4,glow:n,glowDay:0,glowNight:.7}),0,i+u/2,0)),i+=u}e.add(X(t.box(.22,.02,.22,n,{glow:n,glowNight:.7}),0,.28,0)),e.add(X(t.box(.12,.02,.12,r),0,.5,0)),e.add(X(t.cone(.012,.16,r,{seg:6,glow:`#ff6a2a`,glowNight:.9}),0,i+.08,0))},pagoda(e,t){let n=0;for(let r=0;r<5;r++){let i=.42-r*.06,a=.11;e.add(X(t.box(i,a,i,`#B23A2C`,{windows:r<4}),0,n+a/2,0)),e.add(X(t.box(i*1.34,.03,i*1.34,`#7A3B2A`),0,n+a+.015,0)),n+=.16999999999999998}e.add(X(t.cyl(.012,.012,.1,`#E0C040`,{seg:6}),0,n+.05,0)),e.add(X(t.sphere(.03,`#E0C040`,{seg:8,glow:`#ffe680`,glowNight:.8}),0,n+.12,0))},neonBillboard(e,t){let n=`#20242C`;e.add(X(t.box(.3,1,.3,n,{windows:!0}),0,.5,0));let r=[`#5AE8E0`,`#E85AA0`,`#E8E06A`],i=(n,r,i,a,o,s,c)=>{let l=X(t.box(n,r,.02,i,{glow:i,glowDay:.6,glowNight:1.1}),a,o,s);l.rotation.y=c,e.add(l)};i(.22,.34,r[0],0,.75,.16,0),i(.16,.5,r[1],.16,.5,0,Math.PI/2),i(.2,.22,r[2],0,.34,-.16,0),e.add(X(t.cone(.01,.14,n,{seg:6,glow:`#E85AA0`,glowDay:.4,glowNight:1}),0,1.08,0))}};function Zt(e,t){let n=new a;return Z[e](n,Yt(t)),n}var Qt=``+new URL(`building-skyscraper-d-CapD2Zqe.glb`,import.meta.url).href,$t=``+new URL(`building-n-hdv8kKtN.glb`,import.meta.url).href,en=``+new URL(`building-g-CsTB1qH9.glb`,import.meta.url).href,tn=``+new URL(`colormap-CK8fW2HB.png`,import.meta.url).href,nn={skyscraper:{url:Qt,color:`#9cc1dd`,fill:.92},midrise:{url:$t,color:`#c9a07a`,fill:.96},setback:{url:en,color:`#d9c7a0`,fill:.9}};function rn({windowGlow:e}){let t=new l;t.setURLModifier(e=>e.includes(`colormap.png`)?tn:e);let n=new B(t),r={},i=!1,a=Promise.all(Object.entries(nn).map(async([e,t])=>{r[e]=(await n.loadAsync(t.url)).scene})).then(()=>{i=!0,window.__landmarksReady=!0}).catch(e=>console.error(`landmark models failed:`,e)),o=9e3;function s(t,n,i={}){let a,s;if(qt.includes(t))a=Zt(t,{windowGlow:e,winColors:i.winColors,litFrac:i.litFrac,id:()=>++o}),s=1;else{let e=r[t],n=nn[t];if(!e||!n)return null;a=e.clone(!0),s=n.fill}a.updateMatrixWorld(!0);let c=new le().setFromObject(a).getSize(new z);a.scale.setScalar(n.h*s/c.y),a.updateMatrixWorld(!0);let l=new le().setFromObject(a),u=l.getCenter(new z);return a.position.x+=n.x-u.x,a.position.z+=n.z-u.z,a.position.y+=n.plinthTop-l.min.y,qt.includes(t)?a.traverse(e=>{e.isMesh&&(e.castShadow=!1,e.raycast=()=>{})}):a.traverse(n=>{if(!n.isMesh)return;n.castShadow=!1,n.raycast=()=>{};let r=n=>et(n.clone(),{color:nn[t].color,id:++o,windowGlow:e,winColors:i.winColors,litFrac:i.litFrac});n.material=Array.isArray(n.material)?n.material.map(r):r(n.material)}),a}return{make:s,whenReady:a,heightFactor:e=>Jt[e]??1,get ready(){return i}}}var an=[`clear`,`rain`,`snow`,`fog`];function on({extent:e=7}={}){let t=new a;t.raycast=()=>{};let n=e+2,r=.25,i=(e,t)=>e+Math.random()*(t-e),o=new ae(new u(.015,.5),new S({color:`#a9bdd6`,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),600);o.frustumCulled=!1,o.raycast=()=>{};let s=new Float32Array(600*3),c=new Float32Array(600);for(let e=0;e<600;e++)s[e*3]=i(-n,n),s[e*3+1]=i(r,11),s[e*3+2]=i(-n,n),c[e]=i(9,14);let l=new ae(new u(.07,.07),new S({color:`#f3f7ff`,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),700);l.frustumCulled=!1,l.raycast=()=>{};let d=new Float32Array(700*3),f=new Float32Array(700),p=new Float32Array(700);for(let e=0;e<700;e++)d[e*3]=i(-n,n),d[e*3+1]=i(r,11),d[e*3+2]=i(-n,n),f[e]=i(0,6.28),p[e]=i(.6,1.2);t.add(o,l);let m=Array.from({length:8},()=>new z),h=0,g=`clear`,_=0,v=0,y=0,b=0,x=0,w=new C,T=(e,t,n,r)=>e+(t-e)*Math.min(1,n*r);function E(e){an.includes(e)&&(g=e)}function D(){g=an[(an.indexOf(g)+1)%an.length]}function O(e,t){let a=g===`rain`,u=g===`snow`,S=g===`fog`,C=g!==`clear`;_=T(_,+!!C,e,1.4),v=T(v,+!!C,e,1.2),y=T(y,+!!S,e,.9),x=T(x,C&&!S?1:0,e,1),b=T(b,+!!u,e,u?.22:.5);let E=a?_:0,D=Math.round(600*E);for(let t=0;t<600;t++){if(t>=D){w.position.set(0,-50,0),w.scale.setScalar(0),w.updateMatrix(),o.setMatrixAt(t,w.matrix);continue}s[t*3+1]-=c[t]*e,s[t*3]+=e*1.1,s[t*3+1]<r&&(s[t*3]=i(-n,n),s[t*3+1]=11,s[t*3+2]=i(-n,n)),w.position.set(s[t*3],s[t*3+1],s[t*3+2]),w.rotation.set(0,0,0),w.scale.set(1,1,1),w.updateMatrix(),o.setMatrixAt(t,w.matrix)}o.instanceMatrix.needsUpdate=!0,o.material.opacity=.55*E,h=a?Math.round(8*_):0;for(let e=0;e<h;e++)m[e].set(Math.random(),Math.random(),.05*_);let O=Math.round(700*(u?_:0));for(let a=0;a<700;a++){if(a>=O){w.position.set(0,-50,0),w.scale.setScalar(0),w.updateMatrix(),l.setMatrixAt(a,w.matrix);continue}d[a*3+1]-=p[a]*e;let o=Math.sin(t*1.5+f[a])*.5;d[a*3+1]<r&&(d[a*3]=i(-n,n),d[a*3+1]=11,d[a*3+2]=i(-n,n)),w.position.set(d[a*3]+o,d[a*3+1],d[a*3+2]),w.rotation.set(0,0,0),w.scale.setScalar(1),w.updateMatrix(),l.setMatrixAt(a,w.matrix)}l.instanceMatrix.needsUpdate=!0,l.material.opacity=.9*(u?_:0)}return{group:t,update:O,cycle:D,setKind:E,rainDrops:m,get kind(){return g},get intensity(){return _},get overcast(){return v},get fog(){return y},get snow(){return b},get cloud(){return x},get rainDropCount(){return h},poolCounts:{rain:600,snow:700}}}function sn(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=(e,n,r)=>{let i=t.createRadialGradient(e,n,0,e,n,r);i.addColorStop(0,`rgba(255,255,255,0.95)`),i.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=i,t.beginPath(),t.arc(e,n,r,0,7),t.fill()};n(128*.42,128*.56,128*.26),n(128*.6,128*.5,128*.3),n(128*.5,128*.46,128*.22),n(128*.34,128*.54,128*.18),n(128*.7,128*.58,128*.18);let r=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5],i=t.getImageData(0,0,128,128),a=i.data;for(let e=0;e<128;e++)for(let t=0;t<128;t++){let n=(e*128+t)*4,i=a[n+3]/255,o=(r[e%4*4+t%4]+.5)/16-.5;a[n+3]=Math.max(0,Math.min(1,Math.floor(i*5+.5+o)/5))*255}t.putImageData(i,0,0);let o=new W(e);return o.colorSpace=V,o}function cn({extent:e=8,count:t=16}={}){let n=new a;n.raycast=()=>{};let r=sn(),i=e+6,o=(e,t)=>e+Math.random()*(t-e),s=[];for(let e=0;e<t;e++){let e=new ve({map:r,transparent:!0,depthWrite:!1,opacity:0,fog:!0}),t=new R(e),a={sp:t,mat:e,wisp:Math.random(),x:o(-i,i),z:o(-i,i),hiY:o(4,6.8),loY:o(.6,2.2),w:o(3,5.6),h:o(1.7,3),speed:o(.25,.7),op:o(.6,1)};t.raycast=()=>{},s.push(a),n.add(t)}let c=new I,l=new I(`#ffffff`),u=new I(`#5b626e`);function d(e,t,n,r){let a=r?r.cloud:0,d=r?r.fog:0,f=Math.min(1,.4+.6*a+.5*d);c.copy(n.sky).lerp(l,.62),c.lerp(u,.6*a);for(let n=0;n<s.length;n++){let r=s[n],l=n/s.length<f;r.x+=r.speed*e*(.6+.8*a),r.x>i&&(r.x=-i,r.z=o(-i,i));let u=Math.min(ln(r.x,-i,-i+3),1-ln(r.x,i-3,i)),p=r.hiY*(1-d)+r.loY*d,m=1-.5*r.wisp,h=.72*Math.max(0,1-d-a)+1*a+.42*d,g=l?Math.max(0,h)*r.op*m*u:0;r.mat.opacity+=(g-r.mat.opacity)*Math.min(1,e*2.5),r.mat.color.copy(c);let _=r.w*(1+.6*d)*(1+.4*r.wisp),v=r.h*(1-.35*d);r.sp.scale.set(_,v,1),r.sp.position.set(r.x,p+Math.sin(t*.3+n)*.15,r.z)}}function f(e){r=e;for(let t of s)t.mat.map=e,t.mat.needsUpdate=!0}let p=s.map((e,t)=>({kind:`cloud`,label:`cloud ${t+1}`,getWorldPos:t=>t.copy(e.sp.position),active:()=>e.mat.opacity>.06,info:()=>`cloud · ${e.wisp>.6?`wispy`:`puffy`} · drifting east${e.sp.position.y<3?` (low mist)`:``}`}));function m(){return p}return{group:n,update:d,setTexture:f,getFollowables:m,get count(){return s.length}}}function ln(e,t,n){let r=Math.max(0,Math.min(1,(e-t)/(n-t)));return r*r*(3-2*r)}var un={person:4.5,car:6,gull:6,fish:8,boat:9,cloud:16};function dn({rig:e,getCamera:t,sources:n=[]}){let r=null,i=new z,a=new z,o=()=>{let e=[];for(let t of n)if(t&&t.getFollowables){let n=t.getFollowables();n&&e.push(...n)}return e},s=e=>!e.active||e.active();function c(t){return t?(r=t,e.setFollow(e=>t.getWorldPos(e),{frame:t.frame??un[t.kind]??8}),t):null}function l(){r=null,e.clearFollow()}function u(e,n,r=.14){let l=t(),u=null,d=r;for(let t of o()){if(!s(t)||(t.getWorldPos(i),a.copy(i).project(l),a.z>1||a.z<-1))continue;let r=Math.hypot(a.x-e,a.y-n);r<d&&(d=r,u=t)}return u?c(u):null}function d(e=1,t=null){let n=o().filter(e=>(!t||e.kind===t)&&s(e));if(t||(n=fn(n)),!n.length)return null;let i=r?n.indexOf(r):-1;return i=((i+e)%n.length+n.length)%n.length,c(n[i])}function f(){r&&r.active&&!r.active()&&l()}return{pickAt:u,cycle:d,follow:c,release:l,prune:f,get focus(){return r},get count(){return o().length},get readout(){return r?{kind:r.kind,label:r.label,info:r.info?r.info():``}:null}}}function fn(e){let t=new Map;for(let n of e)t.has(n.kind)||t.set(n.kind,[]),t.get(n.kind).push(n);let n=[...t.values()],r=[];for(let e=0,t=!0;t;e++){t=!1;for(let i of n)e<i.length&&(r.push(i[e]),t=!0)}return r}var pn={maxSpeed:6,accel:9,drag:5,turnRate:2.1,chaseDist:7,chaseElev:.42};function mn(e=pn){let t=new z,n=new z,r=new z,i=new z,a=new Ce,o=.45;function s(s,c,l,u){let d=u&&u.heightAt||(()=>0),f=Te(Math.abs(s.speed)/e.maxSpeed,0,1),p=s.speed>=0?1:-1;if(s.yaw+=c.steer*e.turnRate*(.35+.65*f)*p*l,c.throttle!==0)s.speed+=c.throttle*e.accel*l;else{let t=Math.min(Math.abs(s.speed),e.drag*l);s.speed-=Math.sign(s.speed)*t}s.speed=Te(s.speed,-e.maxSpeed*.5,e.maxSpeed);let m=Math.sin(s.yaw),h=Math.cos(s.yaw);s.x+=m*s.speed*l,s.z+=h*s.speed*l;let g=d(s.x,s.z);s.y=we(s.y,g,18,l);let _=d(s.x-o,s.z),v=d(s.x+o,s.z),y=d(s.x,s.z-o),b=d(s.x,s.z+o);return t.set(_-v,2*o,y-b).normalize(),n.set(m,0,h),r.crossVectors(t,n).normalize(),i.crossVectors(r,t).normalize(),a.makeBasis(r,t,i),s.quat.setFromRotationMatrix(a),s}return{step:s}}var hn={accel:7,lift:9,maxV:5,chaseDist:9.5,chaseElev:.4},gn={air:{drag:2,maxSpeed:8,turn:1.8,vDrag:2.2,buoyancy:0},water:{drag:4.6,maxSpeed:3.6,turn:1.3,vDrag:4.5,buoyancy:1.1},ground:{drag:5.5,maxSpeed:5,turn:2,vDrag:9,buoyancy:0}},_n=[`drag`,`maxSpeed`,`turn`,`vDrag`,`buoyancy`],vn=(e,t,n)=>e+(t-e)*n;function yn(e=hn){let t=new z,n=new z,r=new z,i=new z,a=new Ce,o=new xe,s={drag:0,maxSpeed:0,turn:0,vDrag:0,buoyancy:0},c=.4,l=.3,u=-900;function d(e,t){let n=t.heightAt(e.x,e.z),r=t.waterHeightAt?t.waterHeightAt(e.x,e.z):u,i=e.y,a=e.medium||`air`;if(r>u){if(a===`water`){if(i<=r+c)return`water`}else if(i<r-c)return`water`}if(a===`ground`){if(i<=n+l+c)return`ground`}else if(i<n+l)return`ground`;return`air`}function f(c,l,u,f){let p=c.medium||`air`,m=d(c,f);c.medium=m,m===p?c.crossingT>0&&(c.crossingT=Math.max(0,c.crossingT-u/.6)):(c.crossing=p+`>`+m,c.crossingT=1);let h=gn[m],g=gn[p],_=1-(c.crossingT||0),v=s;for(let e of _n)v[e]=vn(g[e],h[e],_);c.yaw+=l.steer*v.turn*u,l.throttle===0?c.speed-=Math.sign(c.speed)*Math.min(Math.abs(c.speed),v.drag*u):c.speed+=l.throttle*e.accel*u,c.speed=Te(c.speed,-v.maxSpeed*.6,v.maxSpeed);let y=Math.sin(c.yaw),b=Math.cos(c.yaw);c.x+=y*c.speed*u,c.z+=b*c.speed*u;let x=f.heightAt(c.x,c.z);if(m===`ground`&&l.lift<=0){c.vy=0,c.y=we(c.y,x,14,u);let e=.45,o=f.heightAt(c.x-e,c.z),s=f.heightAt(c.x+e,c.z),l=f.heightAt(c.x,c.z-e),d=f.heightAt(c.x,c.z+e);t.set(o-s,2*e,l-d).normalize(),n.set(y,0,b),r.crossVectors(t,n).normalize(),i.crossVectors(r,t).normalize(),a.makeBasis(r,t,i),c.quat.setFromRotationMatrix(a)}else{c.vy+=(l.lift*e.lift+v.buoyancy)*u,c.vy-=Math.sign(c.vy)*Math.min(Math.abs(c.vy),v.vDrag*u),c.vy=Te(c.vy,-e.maxV,e.maxV),c.y+=c.vy*u,c.y<x&&(c.y=x,c.vy<0&&(c.vy=0));let t=Te(-l.steer*.35,-.4,.4),n=Te(-c.vy*.06,-.3,.3);o.set(n,c.yaw,t,`YXZ`),c.quat.setFromEuler(o)}return c}return{step:f}}var bn={ground:mn,spacecraft:yn},xn=.55,Sn={throttle:0,steer:0,lift:0};function Cn({rig:e,world:t}={}){let n=`free`,r=null,i=null,a=0;function o(t){if(!t||!t.pilot)return!1;r&&s(),r=t;let o=r.pilot;return i=(bn[o.model]||bn.ground)(o.profile),o.suspendAutonomy(),e.setFollow(e=>o.getWorldPos(e),{frame:o.profile.chaseDist}),e.setElevation(o.profile.chaseElev),e.setAzimuth(o.getTransform().yaw+Math.PI,!0),n=`entering`,a=xn,!0}function s(){return r?(r.pilot.resumeAutonomy(),e.clearFollow(),r=null,i=null,n=`free`,a=0,!0):!1}function c(o,s){if(!r)return;let c=r.pilot;if(n===`entering`){a-=o,e.setAzimuth(c.getTransform().yaw+Math.PI),a<=0&&(n=`piloting`);return}let l=c.getTransform();i.step(l,s||Sn,o,t),c.setTransform(l),e.setAzimuth(l.yaw+Math.PI)}return{possess:o,release:s,step:c,get active(){return!!r},get piloting(){return n===`piloting`},get state(){return n},get craft(){return r},get controlHints(){return r?r.pilot.controlHints:``},get speed(){return r?r.pilot.getTransform().speed:0},get telemetry(){if(!r)return null;let e=r.pilot.getTransform(),n=t&&t.heightAt?t.heightAt(e.x,e.z):0,i=t&&t.waterHeightAt?t.waterHeightAt(e.x,e.z):-900;return{medium:e.medium||null,speed:e.speed||0,y:e.y,altitude:Math.max(0,e.y-n),depth:i>-900?Math.max(0,i-e.y):0,climb:e.vy||0}}}}var wn=new z,Tn=new z,En=new z,Dn=new z,On=new Ce;function kn(){let e=document.createElement(`canvas`);e.width=256,e.height=64;let t=e.getContext(`2d`);t.strokeStyle=`#ffffff`,t.lineWidth=6,t.lineCap=`round`,t.lineJoin=`round`;let n=[14,24,36,24];for(let e=0;e<4;e++){let r=e*64,i=n[e];t.beginPath(),t.moveTo(r+8,40),t.quadraticCurveTo(r+24,i,r+32,36),t.quadraticCurveTo(r+40,i,r+56,40),t.stroke()}let r=new W(e);return r.colorSpace=V,r}function An(){let e=document.createElement(`canvas`);e.width=e.height=96;let t=e.getContext(`2d`),n=(e,n,r)=>{let i=t.createRadialGradient(e,n,0,e,n,r);i.addColorStop(0,`rgba(255,255,255,0.95)`),i.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=i,t.beginPath(),t.arc(e,n,r,0,7),t.fill()};n(96*.42,96*.56,96*.26),n(96*.6,96*.5,96*.3),n(96*.5,96*.46,96*.22),n(96*.7,96*.58,96*.18);let r=new W(e);return r.colorSpace=V,r}function jn(){let e=new a,t=new n(new U(.46,.2,1.1),Y(new c({color:`#5a6675`,roughness:.6,metalness:.2,flatShading:!0}),{color:`#5a6675`}));t.position.y=.02;let r=new n(new U(.3,.22,.42),Y(new c({color:`#e7ecf2`,roughness:.7,flatShading:!0}),{color:`#e7ecf2`}));return r.position.set(0,.18,.08),e.add(t,r),e.traverse(e=>{e.isMesh&&(e.castShadow=!0),e.raycast=()=>{}}),e}function Mn(){let e=new n(new he(.18,9,7),Y(new c({color:`#5b6f86`,roughness:.5,flatShading:!0}),{color:`#5b6f86`}));return e.scale.set(.55,.5,1),e.raycast=()=>{},e}function Nn(){let e=new a,t=new n(new U(.18,.34,.14),Y(new c({color:`#3b6ea5`,roughness:.8,flatShading:!0}),{color:`#3b6ea5`}));t.position.y=.17;let r=new n(new U(.13,.13,.13),Y(new c({color:`#e3b98c`,roughness:.8,flatShading:!0}),{color:`#e3b98c`}));return r.position.y=.41,e.add(t,r),e.traverse(e=>{e.isMesh&&(e.castShadow=!0),e.raycast=()=>{}}),e}function Pn(){let e=new a,t=new n(new U(.5,.22,.84),Y(new c({color:`#d2622e`,roughness:.6,metalness:.2,flatShading:!0}),{color:`#d2622e`}));t.position.y=.26;let r=new n(new U(.3,.16,.32),Y(new c({color:`#2b2f37`,roughness:.8,flatShading:!0}),{color:`#2b2f37`}));r.position.set(0,.42,-.06);let i=new n(new U(.34,.12,.22),Y(new c({color:`#e2e7ee`,roughness:.7,flatShading:!0}),{color:`#e2e7ee`}));i.position.set(0,.28,.42);let o=new D(.14,.14,.13,10);for(let[t,r]of[[-.27,.3],[.27,.3],[-.27,-.3],[.27,-.3]]){let i=new n(o,Y(new c({color:`#1c2026`,roughness:.9,flatShading:!0}),{color:`#1c2026`}));i.rotation.z=Math.PI/2,i.position.set(t,.14,r),e.add(i)}return e.add(t,r,i),e.traverse(e=>{e.isMesh&&(e.castShadow=!0),e.raycast=()=>{}}),e}function Fn(){let e=new a,t=new n(new D(.5,.64,.16,18),Y(new c({color:`#8a93a8`,roughness:.4,metalness:.5,flatShading:!0}),{color:`#8a93a8`}));t.position.y=.3;let r=new n(new he(.3,16,10,0,Math.PI*2,0,Math.PI/2),Y(new c({color:`#9fe6ff`,roughness:.25,metalness:.3,flatShading:!0,transparent:!0,opacity:.85}),{color:`#9fe6ff`}));r.position.y=.38;let i=new n(new U(.12,.1,.34),Y(new c({color:`#ff7a4d`,roughness:.6,flatShading:!0}),{color:`#ff7a4d`}));return i.position.set(0,.3,.52),e.add(t,r,i),e.traverse(e=>{e.isMesh&&(e.castShadow=!0),e.raycast=()=>{}}),e}function In(){let e=new a,t=`#5b6680`,r=`#2b2f3a`,i=`#3a4150`,o=(e,t)=>Y(new c({color:e,roughness:.5,metalness:.25,flatShading:!0,...t}),{color:e}),s=new n(new he(.42,16,12),o(t));s.scale.set(.82,.78,1.28),s.position.y=.5;let l=new n(new he(.3,14,10,0,Math.PI*2,0,Math.PI*.62),o(`#9fe6ff`,{roughness:.2,transparent:!0,opacity:.8}));l.scale.set(.82,.7,.92),l.position.set(0,.58,.32);let u=new n(new D(.055,.14,1.05,10),o(t));u.rotation.x=Math.PI/2,u.position.set(0,.54,-.86);let d=new n(new U(.05,.3,.22),o(t));d.position.set(0,.68,-1.3);let f=new n(new U(.12,.1,.12),o(`#ff7a4d`,{roughness:.6}));f.position.set(0,.46,.74);let p=new D(.03,.03,.92,8),m=new n(p,o(r,{roughness:.7}));m.rotation.x=Math.PI/2,m.position.set(-.28,.1,0);let h=new n(p,o(r,{roughness:.7}));h.rotation.x=Math.PI/2,h.position.set(.28,.1,0);let g=new a;g.position.set(0,.96,.06),g.add(new n(new D(.06,.06,.12,8),o(r)));let _=new U(2.5,.02,.13),v=new n(_,o(i,{roughness:.6}));g.add(v);let y=new n(_,o(i,{roughness:.6}));y.rotation.y=Math.PI/2,g.add(y);let b=new a;b.position.set(.11,.68,-1.34);let x=new U(.04,.52,.06),S=new n(x,o(i,{roughness:.6}));b.add(S);let C=new n(x,o(i,{roughness:.6}));return C.rotation.x=Math.PI/2,b.add(C),e.add(s,l,u,d,f,m,h,g,b),e.traverse(e=>{e.isMesh&&(e.castShadow=!0),e.raycast=()=>{}}),e.userData.mainRotor=g,e.userData.tailRotor=b,e}function Ln({heightAt:e,seaSurfaceY:t=0,waterY:n=.06}={}){let r=new a;r.raycast=()=>{};let i=e||(()=>0),o=[],s=[],c={gull:0,boat:0,fish:0,cloud:0,person:0,atv:0,craft:0},l=Lt({frames:4,fps:7}),u=kn(),d=An(),p=[`#ffffff`,`#cfd4da`,`#c8a06a`];function m(e,r,a,o){let s=(c[e]||0)*1.7+(o.phase||0);if(e===`gull`){let t=l.makeInstanceTexture(u),n=new R(new ve({map:t,color:new I(p[c.gull%3]),transparent:!0,opacity:.9,depthWrite:!1,fog:!0}));n.scale.setScalar(.5),n.raycast=()=>{};let o=r,d=a,m=1.4+Math.random()*.6,h=i(r,a)+2.4,g=.5+Math.random()*.3;return{kind:e,obj:n,x:r,z:a,update(e,t,r){let i=s+t*g;n.position.set(o+Math.cos(i)*m,h+Math.sin(t*1.4+s)*.12,d+Math.sin(i)*m),l.step(n.material.map,t,s);let a=r?1-r.windowGlow:1;n.material.opacity=f.clamp(.25+a*.7,0,.95)},info:()=>`gull · circling`,dispose(){t.dispose()}}}if(e===`cloud`){let t=new R(new ve({map:d,transparent:!0,opacity:.85,depthWrite:!1,fog:!0}));t.scale.set(3.4,1.9,1),t.raycast=()=>{};let n=r,i=a,o=5+Math.random()*1.4,c=.12+Math.random()*.1;return{kind:e,obj:t,x:r,z:a,update(e,r,a){t.position.set(n+Math.sin(r*.18+s)*1.2,o+Math.sin(r*.3+s)*.18,i+c*Math.cos(r*.1+s)),a&&a.sky&&t.material.color.copy(a.sky).lerp(Rn,.62)},info:()=>`cloud · drifting`}}if(e===`boat`){let t=jn();t.position.set(r,n,a);let i=r,o=a,c=Math.random()*Math.PI*2;return{kind:e,obj:t,x:r,z:a,update(e,l){c+=Math.sin(l*.3+s)*.4*e;let u=.6;i+=Math.sin(c)*u*e,o+=Math.cos(c)*u*e,i+=(r-i)*.4*e,o+=(a-o)*.4*e;let d=Math.sin(l*1.1+s)*.025;t.position.set(i,n+d,o),t.rotation.set(Math.sin(l*.9+s)*.04,c,0)},info:()=>`boat · drifting`}}if(e===`fish`){let t=Mn();t.position.set(r,-5,a);let i=6+Math.random()*5,o=Math.random()*Math.PI*2,s=Math.random()*i,c={kind:e,obj:t,x:r,z:a,active:!0,update(e){if(s+=e,s>=i){let e=(s-i)/1.3;if(e>=1){s=0,t.position.set(r,-5,a),c.active=!1;return}let l=Math.sin(Math.PI*e);t.position.set(r+Math.sin(o)*(e-.5)*1,n-.1+l*.5,a+Math.cos(o)*(e-.5)*1),t.rotation.set(Math.cos(Math.PI*e)*.9,o,0),c.active=!0}else c.active=!1},info:()=>c.active?`fish · breaching!`:`fish · below`};return c}if(e===`person`){let n=Nn();n.position.set(r,i(r,a),a);let o=Math.random()*Math.PI*2;return{kind:e,obj:n,x:r,z:a,update(e,s){o+=(Math.random()-.5)*1.4*e;let c=.55,l=n.position.x+Math.sin(o)*c*e,u=n.position.z+Math.cos(o)*c*e,d=l+(r-l)*.25*e,f=u+(a-u)*.25*e;i(d,f)<t+.02&&(o+=Math.PI,d=n.position.x,f=n.position.z),n.position.set(d,i(d,f),f),n.rotation.y=o},info:()=>`person · wandering`}}if(e===`atv`){let t=Pn(),n={x:r,y:i(r,a),z:a,yaw:o.yaw??Math.random()*Math.PI*2,speed:0,quat:new _},s=!1,c=()=>{let e=.45,t=i(n.x-e,n.z),r=i(n.x+e,n.z),a=i(n.x,n.z-e),o=i(n.x,n.z+e);wn.set(t-r,2*e,a-o).normalize(),Tn.set(Math.sin(n.yaw),0,Math.cos(n.yaw)),En.crossVectors(wn,Tn).normalize(),Dn.crossVectors(En,wn).normalize(),On.makeBasis(En,wn,Dn),n.quat.setFromRotationMatrix(On)},l=()=>{n.y=i(n.x,n.z),c(),t.position.set(n.x,n.y,n.z),t.quaternion.copy(n.quat)};return l(),{kind:e,obj:t,x:r,z:a,get piloted(){return s},update(){s||l()},info:()=>s?`ATV · piloted`:`ATV · parked`,pilot:{model:`ground`,profile:pn,controlHints:`W/S throttle · A/D steer · Esc to exit`,getWorldPos:e=>e.copy(t.position),getTransform:()=>n,setTransform:e=>{t.position.set(e.x,e.y,e.z),t.quaternion.copy(e.quat)},suspendAutonomy:()=>{s=!0},resumeAutonomy:()=>{s=!1,n.speed=0}}}}if(e===`craft`){let t=Fn(),n=1.3,s=Math.random()*Math.PI*2,c={x:r,y:i(r,a)+n,z:a,yaw:o.yaw??Math.random()*Math.PI*2,speed:0,vy:0,quat:new _,medium:`air`,crossing:null,crossingT:0},l=!1;return{kind:e,obj:t,x:r,z:a,get piloted(){return l},update(e,r){if(l)return;c.yaw+=.3*e;let a=i(c.x,c.z)+n+Math.sin((r||0)*.8+s)*.08;c.y+=(a-c.y)*Math.min(1,e*3),t.position.set(c.x,c.y,c.z),t.rotation.set(0,c.yaw,0)},info:()=>l?`spacecraft · piloted`:`spacecraft · hovering`,pilot:{model:`spacecraft`,profile:hn,controlHints:`W/S thrust · A/D steer · Space/Shift climb/dive · Esc exit`,getWorldPos:e=>e.copy(t.position),getTransform:()=>c,setTransform:e=>{t.position.set(e.x,e.y,e.z),t.quaternion.copy(e.quat)},suspendAutonomy:()=>{l=!0},resumeAutonomy:()=>{l=!1,c.speed=0,c.vy=0}}}}if(e===`heli`){let t=In(),n=t.userData.mainRotor,s=t.userData.tailRotor,c=o.hover??11,l=Math.random()*Math.PI*2,u={x:r,y:i(r,a)+c,z:a,yaw:o.yaw??Math.random()*Math.PI*2,speed:0,vy:0,quat:new _,medium:`air`,crossing:null,crossingT:0},d=!1;return{kind:e,obj:t,x:r,z:a,get piloted(){return d},update(e,r){if(n.rotation.y+=26*e,s.rotation.x+=26*1.6*e,d)return;let a=i(u.x,u.z)+c+Math.sin((r||0)*.7+l)*.1;u.y+=(a-u.y)*Math.min(1,e*2),t.position.set(u.x,u.y,u.z),t.rotation.set(0,u.yaw,0)},info:()=>d?`helicopter · piloted`:`helicopter · hovering`,pilot:{model:`spacecraft`,profile:hn,controlHints:`W/S thrust · A/D steer · Space/Shift climb/dive · Esc exit`,getWorldPos:e=>e.copy(t.position),getTransform:()=>u,setTransform:e=>{t.position.set(e.x,e.y,e.z),t.quaternion.copy(e.quat)},suspendAutonomy:()=>{d=!0},resumeAutonomy:()=>{d=!1,u.speed=0,u.vy=0}}}}return null}function h(e){return c[e]=(c[e]||0)+1,`${e} ${c[e]}`}function g(e,t,n,i={}){let a=m(e,t,n,i);if(!a)return null;a.opts=i,o.push(a),r.add(a.obj);let c={kind:e,label:h(e),getWorldPos:e=>e.copy(a.obj.position),active:()=>a.active!==!1,info:()=>a.info()};return a.pilot&&(c.pilot=a.pilot),a.followable=c,s.push(c),a}function v(e){if(!e)return!1;let t=o.indexOf(e);if(t<0)return!1;r.remove(e.obj),e.dispose&&e.dispose(),o.splice(t,1);let n=s.indexOf(e.followable);return n>=0&&s.splice(n,1),!0}function y(e,t,n=2.5){let r=null,i=n*n;for(let n of o){let a=n.obj.position.x-e,o=n.obj.position.z-t,s=a*a+o*o;s<i&&(i=s,r=n)}if(!r)return null;let a={kind:r.kind,x:r.x,z:r.z,opts:r.opts};return v(r),a}function b(e,t,n){for(let r=0;r<o.length;r++)o[r].update(e,t,n);typeof window<`u`&&(window.__placedLife=x())}function x(){let e={gull:0,boat:0,fish:0,cloud:0,person:0,atv:0,craft:0,total:o.length};for(let t of o)e[t.kind]++;return e}function S(){return s}function C(){return o.map(e=>({kind:e.kind,x:e.x,z:e.z,opts:e.opts}))}function w(){for(let e of[...o])v(e)}function T(e){if(w(),Array.isArray(e))for(let t of e.slice(0,2e3))!t||typeof t.kind!=`string`||!Number.isFinite(t.x)||!Number.isFinite(t.z)||g(t.kind,t.x,t.z,t.opts&&typeof t.opts==`object`?t.opts:{})}return{group:r,update:b,spawn:g,despawn:v,removeNear:y,getFollowables:S,snapshot:C,restore:T,clear:w,counts:x,get count(){return o.length}}}var Rn=new I(`#ffffff`),zn=`varying vec2 vUv;

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
}`;function qn({renderer:t,N:r,cell:i,half:a,worldSize:o,seaY:l=0,FLOW:d,DAMP:f,MIN_DEPTH:p,KC:m,KE:h,KD:g,KADV:_,MAXD:v,readTerrain:y}){let b=t.getContext();if(!(b&&b.getExtension&&b.getExtension(`EXT_color_buffer_float`)))return typeof console<`u`&&console.warn(`[L87] EXT_color_buffer_float unavailable — GPU flow backend cannot run; staying on CPU.`),null;let S={type:be,format:e,minFilter:x,magFilter:x,wrapS:ce,wrapT:ce,depthBuffer:!1,stencilBuffer:!1},C=[new L(r,r,S),new L(r,r,S)],w=[new L(r,r,S),new L(r,r,S)],T=[new L(r,r,S),new L(r,r,S)],E=new Float32Array(r*r*4),D=new ye(E,r,r,e,be);D.minFilter=x,D.magFilter=x,D.wrapS=D.wrapT=ce;let O=new Float32Array(r*r),k=!1,A=1,M=!0,ee=new me,te=new s(-1,1,1,-1,0,1),ne=new n(new u(2,2),null);ne.frustumCulled=!1,ee.add(ne);let N=new de(1/r,1/r),P=(e,t)=>new ie({vertexShader:zn,fragmentShader:e,uniforms:t}),F=P(Bn,{uState:{value:null},uTerr:{value:null},uFlux:{value:null},uTexel:{value:N},uN:{value:r},uDt:{value:0},uFlow:{value:d},uDamp:{value:f}}),re=P(Vn,{uState:{value:null},uTerr:{value:null},uFlux:{value:null},uTexel:{value:N},uN:{value:r},uDt:{value:0},uSeaY:{value:l}}),ae=P(Hn,{uState:{value:null},uTerr:{value:null},uN:{value:r},uSeaY:{value:l},uRain:{value:0},uPourCount:{value:0},uPours:{value:Array.from({length:8},()=>new z)},uPourR:{value:new Float32Array(8)}}),oe=P(Un,{uSrc:{value:D}}),R=()=>({uState:{value:null},uTerr:{value:null},uFlux:{value:null},uTexel:{value:N},uN:{value:r},uDt:{value:0},uCell:{value:i},uSeaY:{value:l},uKC:{value:m},uKE:{value:h},uKD:{value:g},uMaxD:{value:v},uMinDepth:{value:p},uErosK:{value:A}}),B=P(Wn,R()),V=P(Gn,R()),le=P(Kn,{uState:{value:null},uTerr:{value:null},uFlux:{value:null},uTexel:{value:N},uN:{value:r},uDt:{value:0},uSeaY:{value:l},uKADV:{value:_}});function H(e,n){ne.material=e;let r=t.getRenderTarget();t.setRenderTarget(n),t.render(ee,te),t.setRenderTarget(r)}let fe=new I;function pe(e){let n=t.getRenderTarget(),r=t.getClearAlpha();t.getClearColor(fe),t.setRenderTarget(e),t.setClearColor(0,0),t.clear(!0,!1,!1),t.setClearColor(fe,r),t.setRenderTarget(n)}function U(){y(O);for(let e=0;e<r*r;e++)E[e*4]=O[e];D.needsUpdate=!0,H(oe,T[0])}function he(){pe(C[0]),pe(C[1]),pe(w[0]),pe(w[1])}he();let ge=r*r,_e=new Float32Array(ge*3),W=new Float32Array(ge*2);for(let e=0;e<r;e++)for(let t=0;t<r;t++){let n=e*r+t;_e[n*3]=t*i-a,_e[n*3+1]=0,_e[n*3+2]=e*i-a,W[n*2]=(t+.5)/r,W[n*2+1]=(e+.5)/r}let ve=[];for(let e=0;e<r-1;e++)for(let t=0;t<r-1;t++){let n=e*r+t,i=e*r+t+1,a=(e+1)*r+t,o=(e+1)*r+t+1;ve.push(n,a,i,i,a,o)}let xe=new se;xe.setAttribute(`position`,new j(_e,3)),xe.setAttribute(`aGridUv`,new j(W,2)),xe.setIndex(ve),xe.boundingSphere=new ue(new z(0,0,0),o);let Se={uStateTex:{value:C[0].texture},uTerrTex:{value:T[0].texture},uMinDepth:{value:p}},Ce=new c({color:`#2f6f96`,roughness:.14,metalness:.45,transparent:!0,depthWrite:!1});Ce.onBeforeCompile=e=>{e.uniforms.uStateTex=Se.uStateTex,e.uniforms.uTerrTex=Se.uTerrTex,e.uniforms.uMinDepth=Se.uMinDepth,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
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
  gl_FragColor.a *= clamp((vDepth - 0.012) * 7.0, 0.16, 0.86);`)},Ce.customProgramCacheKey=()=>`lgr-flow-gpu`;let we=new n(xe,Ce);we.frustumCulled=!1,we.castShadow=!1,we.receiveShadow=!1,we.raycast=()=>{},we.renderOrder=3,we.visible=!1;function Te(){Se.uStateTex.value=C[0].texture,Se.uTerrTex.value=T[0].texture}function Ee(e){e=Math.min(e,1/30),(!k||M)&&(U(),M=!1),F.uniforms.uState.value=C[0].texture,F.uniforms.uTerr.value=T[0].texture,F.uniforms.uFlux.value=w[0].texture,F.uniforms.uDt.value=e,H(F,w[1]),w.reverse(),re.uniforms.uState.value=C[0].texture,re.uniforms.uTerr.value=T[0].texture,re.uniforms.uFlux.value=w[0].texture,re.uniforms.uDt.value=e,H(re,C[1]),C.reverse(),k&&(B.uniforms.uState.value=C[0].texture,B.uniforms.uTerr.value=T[0].texture,B.uniforms.uFlux.value=w[0].texture,B.uniforms.uDt.value=e,B.uniforms.uErosK.value=A,H(B,T[1]),V.uniforms.uState.value=C[0].texture,V.uniforms.uTerr.value=T[0].texture,V.uniforms.uFlux.value=w[0].texture,V.uniforms.uDt.value=e,V.uniforms.uErosK.value=A,H(V,C[1]),T.reverse(),C.reverse(),le.uniforms.uState.value=C[0].texture,le.uniforms.uTerr.value=T[0].texture,le.uniforms.uFlux.value=w[0].texture,le.uniforms.uDt.value=e,H(le,C[1]),C.reverse()),Te()}function De(){ae.uniforms.uState.value=C[0].texture,ae.uniforms.uTerr.value=T[0].texture,H(ae,C[1]),C.reverse(),Te()}function G(e,t,n=.5,r=1.6){(M||!k)&&(U(),M=!1);let o=(e+a)/i,s=(t+a)/i,c=Math.max(1,r/i);ae.uniforms.uRain.value=0,ae.uniforms.uPourCount.value=1,ae.uniforms.uPours.value[0].set(o,s,n),ae.uniforms.uPourR.value[0]=c,De()}function Oe(e=.004){(M||!k)&&(U(),M=!1),ae.uniforms.uPourCount.value=0,ae.uniforms.uRain.value=e,De()}function K(){he(),M=!0,Te()}function q(e,t){k=!!e,t!=null&&(A=Math.max(0,t)),M=!0}let ke=new Float32Array(r*r*4);function Ae(e){return t.readRenderTargetPixels(e,0,0,r,r,ke),ke}function je(){let e=Ae(C[0]),t=0;for(let n=0;n<r*r;n++)t+=e[n*4];return t}function Me(e,t){let n=Math.round((e+a)/i),o=Math.round((t+a)/i);return n<0||n>=r||o<0||o>=r?0:Ae(C[0])[(o*r+n)*4]}function Ne(){let e=Ae(C[0]),t=0;for(let n=0;n<r*r;n++)t+=e[n*4+1];return t}function Pe(){let e=Ae(C[0]),t=new Float32Array(r*r);for(let n=0;n<r*r;n++)t[n]=e[n*4];return t}function Fe(){let e=Ae(T[0]),t=new Float32Array(r*r);for(let n=0;n<r*r;n++)t[n]=e[n*4];return t}function Ie(e){we.visible=!!e}function Le(){for(let e of C)e.dispose();for(let e of w)e.dispose();for(let e of T)e.dispose();D.dispose(),xe.dispose(),Ce.dispose(),ne.geometry.dispose(),F.dispose(),re.dispose(),ae.dispose(),oe.dispose(),B.dispose(),V.dispose(),le.dispose()}return{mesh:we,step:Ee,pourAt:G,rain:Oe,clear:K,totalWater:je,cellAt:Me,totalSediment:Ne,readW:Pe,readTerr:Fe,setErosion:q,setVisible:Ie,dispose:Le,get grid(){return r},get erosion(){return k}}}function Jn({worldHeightAt:e,applyErosion:t=null,syncErodedTerrain:r=null,worldSize:i=26,grid:o=96,seaY:s=0,renderer:l=null}={}){let u=o,d=new Float32Array(u*u),f=new Float32Array(u*u),p=new Float32Array(u*u),m=new Float32Array(u*u),h=new Float32Array(u*u),g=new Float32Array(u*u),_=new Float32Array(u*u),v=new Float32Array(u*u),y=new Float32Array(u*u),b=!1,x=1,S=i/(u-1),C=i/2,w=e||(()=>0),T=e=>e*S-C,E=e=>e*S-C,D=(e,t)=>t*u+e,O=26*S,k=.9,A=.006,M=.5,ee=.25,te=.3,ne=.006;function N(){for(let e=0;e<u;e++)for(let t=0;t<u;t++)g[D(t,e)]=w(T(t),E(e))}let P=`cpu`,F=null,I=new Float32Array(u*u),L=0;function re(e){N();for(let t=0;t<u*u;t++)e[t]=g[t]}function ie(){return F||!l?F:(F=qn({renderer:l,N:u,cell:S,half:C,worldSize:i,seaY:s,FLOW:O,DAMP:k,MIN_DEPTH:A,KC:M,KE:ee*3,KD:te*3,KADV:6,MAXD:ne*3,readTerrain:re}),F&&W.add(F.mesh),F)}function ae(e){if(e===`gpu`){if(ie(),!F)return typeof console<`u`&&console.info(`[L87] GPU backend unavailable (no renderer / no float RT) — staying on CPU (oracle).`),P=`cpu`,oe(),P;P=`gpu`,F.setErosion(b,x),b&&(re(I),L=0)}else P=`cpu`;return oe(),P}function oe(){F&&F.setVisible(P===`gpu`),P===`gpu`?_e.visible=!1:ve()}let R=new Float32Array(u*u);function ce(){if(++L<20)return;L=0;let e=F.readTerr(),t=!1;for(let n=0;n<u*u;n++){let r=e[n]-I[n];R[n]=r,r!==0&&(t=!0),I[n]=e[n]}t&&r(R,u)}function z(e){if(P===`gpu`&&F){F.step(e),b&&r&&ce();return}e=Math.min(e,1/30),N();for(let t=0;t<u;t++)for(let n=0;n<u;n++){let r=D(n,t),i=g[r]+d[r],a=0,o=0,s=0,c=0;n>0&&(a=Math.max(0,f[r]*k+e*O*(i-(g[r-1]+d[r-1])))),n<u-1&&(o=Math.max(0,p[r]*k+e*O*(i-(g[r+1]+d[r+1])))),t>0&&(c=Math.max(0,h[r]*k+e*O*(i-(g[r-u]+d[r-u])))),t<u-1&&(s=Math.max(0,m[r]*k+e*O*(i-(g[r+u]+d[r+u]))));let l=(a+o+s+c)*e,_=l>1e-9?Math.min(1,d[r]/l):1;f[r]=a*_,p[r]=o*_,h[r]=c*_,m[r]=s*_}for(let t=0;t<u;t++)for(let n=0;n<u;n++){let r=D(n,t),i=0;n>0&&(i+=p[r-1]),n<u-1&&(i+=f[r+1]),t>0&&(i+=m[r-u]),t<u-1&&(i+=h[r+u]);let a=f[r]+p[r]+h[r]+m[r];d[r]+=e*(i-a),d[r]<0&&(d[r]=0),g[r]<s-.02&&(d[r]=0)}b&&t&&B(e),ve()}function B(e){y.fill(0);for(let t=0;t<u;t++)for(let n=0;n<u;n++){let r=D(n,t);if(d[r]<=A){if(_[r]>0){let t=Math.min(ne,te*_[r]*e);y[r]+=t,_[r]-=t}continue}let i=(f[r]+p[r]+m[r]+h[r])/(d[r]+.02),a=n>0?g[r-1]:g[r],o=n<u-1?g[r+1]:g[r],s=t>0?g[r-u]:g[r],c=t<u-1?g[r+u]:g[r],l=Math.min(2,Math.hypot(o-a,c-s)/(2*S)),v=M*i*Math.max(.05,l)*x;if(v>_[r]){let t=Math.min(ne,ee*(v-_[r])*e);y[r]-=t,_[r]+=t}else{let t=Math.min(ne,te*(_[r]-v)*e);y[r]+=t,_[r]-=t,_[r]<0&&(_[r]=0)}}v.set(_);for(let t=0;t<u;t++)for(let n=0;n<u;n++){let r=D(n,t),i=f[r]+p[r]+m[r]+h[r];if(i<=1e-9||_[r]<=1e-9)continue;let a=Math.min(_[r],_[r]*6*e);v[r]-=a,n>0&&(v[r-1]+=a*f[r]/i),n<u-1&&(v[r+1]+=a*p[r]/i),t>0&&(v[r-u]+=a*h[r]/i),t<u-1&&(v[r+u]+=a*m[r]/i)}_.set(v);for(let e=0;e<u*u;e++)_[e]<0&&(_[e]=0),g[e]<s-.02&&(_[e]=0);t(y,u)}function V(e,t){b=!!e,t!=null&&(x=Math.max(0,t)),e||_.fill(0),P===`gpu`&&F&&(F.setErosion(e,t),e&&(re(I),L=0))}function le(e,t,n=.5,r=1.6){if(P===`gpu`&&F)return F.pourAt(e,t,n,r);let i=(e+C)/S,a=(t+C)/S,o=Math.max(1,r/S),s=Math.max(0,Math.floor(i-o)),c=Math.min(u-1,Math.ceil(i+o)),l=Math.max(0,Math.floor(a-o)),f=Math.min(u-1,Math.ceil(a+o));for(let e=l;e<=f;e++)for(let t=s;t<=c;t++){let r=Math.hypot(t-i,e-a);r<=o&&(d[D(t,e)]+=n*(1-r/o))}}function ue(e=.004){if(P===`gpu`&&F)return F.rain(e);N();for(let t=0;t<u*u;t++)g[t]>s&&(d[t]+=e)}function H(){if(P===`gpu`&&F)return F.clear();d.fill(0),f.fill(0),p.fill(0),m.fill(0),h.fill(0),_.fill(0),ve()}function de(){if(P===`gpu`&&F)return F.totalWater();let e=0;for(let t=0;t<u*u;t++)e+=d[t];return e}function fe(e,t){if(P===`gpu`&&F)return F.cellAt(e,t);let n=Math.round((e+C)/S),r=Math.round((t+C)/S);return n<0||n>=u||r<0||r>=u?0:d[D(n,r)]}let pe=new Float32Array(u*u*3),me=new Float32Array(u*u);for(let e=0;e<u;e++)for(let t=0;t<u;t++){let n=D(t,e);pe[n*3]=T(t),pe[n*3+1]=-50,pe[n*3+2]=E(e)}let U=[];for(let e=0;e<u-1;e++)for(let t=0;t<u-1;t++){let n=D(t,e),r=D(t+1,e),i=D(t,e+1),a=D(t+1,e+1);U.push(n,i,r,r,i,a)}let he=new se;he.setAttribute(`position`,new j(pe,3)),he.setAttribute(`aDepth`,new j(me,1)),he.setIndex(U),he.computeVertexNormals();let ge=new c({color:`#2f6f96`,roughness:.14,metalness:.45,transparent:!0,depthWrite:!1});ge.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
attribute float aDepth;
varying float vDepth;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
  vDepth = aDepth;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying float vDepth;`).replace(`#include <dithering_fragment>`,`#include <dithering_fragment>
  if (vDepth < 0.012) discard;
  gl_FragColor.a *= clamp((vDepth - 0.012) * 7.0, 0.16, 0.86);`)},ge.customProgramCacheKey=()=>`lgr-flow`;let _e=new n(he,ge);_e.frustumCulled=!1,_e.castShadow=!1,_e.receiveShadow=!1,_e.raycast=()=>{},_e.renderOrder=3;let W=new a;W.add(_e),W.raycast=()=>{};function ve(){let e=0;for(let t=0;t<u*u;t++){let n=d[t];me[t]=n,pe[t*3+1]=n>A?g[t]+n:-50,n>A&&e++}he.attributes.position.needsUpdate=!0,he.attributes.aDepth.needsUpdate=!0,_e.visible=e>0,typeof window<`u`&&(window.__flowWet=e)}ve();function ye(){if(P===`gpu`&&F)return F.totalSediment();let e=0;for(let t=0;t<u*u;t++)e+=_[t];return e}return{group:W,step:z,pourAt:le,rain:ue,clear:H,totalWater:de,cellAt:fe,setErosion:V,totalSediment:ye,setBackend:ae,get backend(){return P},_debugReadW:()=>P===`gpu`&&F?F.readW():d.slice(),_debugReadTerr:()=>P===`gpu`&&F?F.readTerr():(N(),g.slice()),_debugReadS:()=>P===`gpu`&&F?F.totalSediment():ye(),_debugStepN:(e,t=1/60)=>{for(let n=0;n<e;n++)z(t)},get erosion(){return b},get grid(){return u},get visible(){return _e.visible}}}function Yn({extent:e=26,count:t=2e3,seed:n=7,yLo:r=.4,yHi:i=7}={}){let o=at((n^218462737)>>>0),s=e/2,c=new Float32Array(t*3),l=new Float32Array(t),u=new Float32Array(t);for(let e=0;e<t;e++)c[e*3]=(o()*2-1)*s,c[e*3+1]=r+o()*(i-r),c[e*3+2]=(o()*2-1)*s,l[e]=o()*Math.PI*2,u[e]=.6+o()*.8;let d=new se;d.setAttribute(`position`,new j(c,3)),d.setAttribute(`aPh`,new j(l,1)),d.setAttribute(`aSp`,new j(u,1)),d.setDrawRange(0,t);let f={uTime:{value:0},uWind:{value:0},uHalf:{value:s},uOpacity:{value:0},uColor:{value:new I(`#fff3d4`)},uPx:{value:2.2}},p=new ie({uniforms:f,transparent:!0,depthWrite:!1,depthTest:!0,blending:2,vertexShader:`
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
      }`}),m=new w(d,p);m.frustumCulled=!1,m.raycast=()=>{};let h=new a;h.add(m),h.userData.dispose=()=>{d.dispose(),p.dispose()};function g(e,n,r,{wind:i=0,qualityLevel:a=0}={}){f.uTime.value=n,f.uWind.value=.25+i;let o=r?1-r.windowGlow:1;f.uOpacity.value=.09*o,d.setDrawRange(0,a>=2?t>>1:t)}return{group:h,update:g,count:t}}var Xn=[{id:`place`,label:`Place`,icon:`✚`,key:`1`},{id:`sculpt`,label:`Sculpt`,icon:`⛰`,key:`2`},{id:`paint`,label:`Paint`,icon:`🎨`,key:`3`},{id:`scatter`,label:`Objects`,icon:`🌲`,key:`4`},{id:`flow`,label:`Water`,icon:`💧`,key:`5`},{id:`select`,label:`Select`,icon:`◳`,key:`6`}],Zn=[`tree`,`rock`,`tuft`],Qn=[`gull`,`boat`,`fish`,`cloud`,`person`,`atv`,`craft`],$n=(e,t,n)=>e<t?t:e>n?n:e;function er({world:e,catalog:t,inspector:n}={}){let r=`sculpt`,i=1,a=!1,o={radius:2.2,strength:.03,density:.6,dropN:1},s={biome:2,scatter:`tree`,entity:`gull`},c=null,l=!1;function u(e){return Xn.some(t=>t.id===e)&&(r=e),r}function d(e){let t=Xn.find(t=>t.key===e);return t&&(r=t.id),r}function f(){return i=-i,i}function p(e){return o.radius=$n(e,.8,6),o.radius}function m(e){return o.strength=$n(e,.01,.15),o.strength}function h(e){return o.density=$n(e,.1,1),o.density}function g(e){return o.dropN=[1,10,50].includes(e)?e:1,o.dropN}function _(e){return s.biome=e|0,s.biome}function v(e){return Zn.includes(e)&&(s.scatter=e),s.scatter}function y(e){return Qn.includes(e)&&(s.entity=e),s.entity}function b(e){let n=t&&t.get(e);return n?n.kind===`material`?_(n.defaults.colorIndex??s.biome):n.kind===`scatter`?v(n.defaults.geoKey):n.kind===`entity`?y(e.replace(`ent-`,``)):null:null}function x(t,n,r){let i=0;for(let a=0;a<r;a++){let r=Math.random()*Math.PI*2,a=Math.sqrt(Math.random())*o.radius;e.placeEntity(s.entity,t+Math.cos(r)*a,n+Math.sin(r)*a)&&i++}return i}function S(t,n,r){if(r<0){e.removeEntityNear(t,n,o.radius),c={x:t,z:n};return}if(o.dropN>1){l&&=(x(t,n,o.dropN),!1);return}(!c||Math.hypot(t-c.x,n-c.z)>=o.radius*.7)&&(e.placeEntity(s.entity,t,n),c={x:t,z:n})}function C(t,n,i){i!==0&&(r===`paint`?e.paintBiome(t,n,s.biome,o.radius):r===`scatter`?e.paintScatter(t,n,{type:s.scatter,density:o.density,radius:o.radius,erase:i<0}):r===`place`?S(t,n,i):r===`sculpt`?e.sculpt(t,n,i,o.radius,o.strength):r===`flow`&&i>0&&e.flowPourAt(t,n,void 0,o.radius))}let w=()=>r!==`select`&&r!==`flow`;function T(){w()&&e.snapshot(),l=!0,c=null}function E(){c=null}function D(e,t){return n?n.pickAt(e,t):null}function O(){return e.undo()}function k(){return e.snapshot()}function A(){return a=!a,e.setScatterHidden&&e.setScatterHidden(a),a}return{get tools(){return Xn},placeKinds:Qn,get tool(){return r},setTool:u,setToolByKey:d,get dir(){return i},get raise(){return i>0},toggleDir:f,brush:o,setRadius:p,setStrength:m,setDensity:h,setDropN:g,get selection(){return{...s}},get material(){return s.biome},get scatterType(){return s.scatter},get entity(){return s.entity},setMaterial:_,setScatter:v,setEntity:y,select:b,applyAt:C,beginStroke:T,endStroke:E,pickAt:D,dropEntities:x,undo:O,snapshot:k,get canUndo(){return e.canUndo},get scatterHidden(){return a},toggleHideScatter:A}}var tr=120;function nr(e,t){return e.length?e[Math.min(e.length-1,Math.max(0,Math.round(t/100*(e.length-1))))]:0}function rr({renderer:e}){let t=e.getContext(),n=!1,r=new Float32Array(tr),i=0,a=0,o=0,s=0,c=t.getExtension&&t.getExtension(`EXT_disjoint_timer_query_webgl2`),l=[],u=null,d=null,f=c&&c.TIME_ELAPSED_EXT,p=c&&c.GPU_DISJOINT_EXT,m=null,h=0,g=!1,_={fps:0,cpuMs:{p50:0,p95:0,p99:0},gpuMs:null,info:null,leak:!1,gpuTimer:!!c},v=0,y=typeof performance<`u`?performance.now():0;function b(){n||=(e.info.autoReset=!1,!0),o=performance.now();let r=e.info;_.info={calls:r.render.calls,tris:r.render.triangles,programs:r.programs?r.programs.length:0,geo:r.memory.geometries,tex:r.memory.textures},r.reset(),c&&!u&&(u=t.createQuery(),t.beginQuery(f,u))}function x(){if(r[a]=performance.now()-o+s,a=(a+1)%tr,i<tr&&i++,c&&u&&(t.endQuery(f),l.push(u),u=null),c&&l.length){let e=l[0],n=t.getQueryParameter(e,t.QUERY_RESULT_AVAILABLE),r=t.getParameter(p);(n||r)&&(l.shift(),n&&!r&&(d=t.getQueryParameter(e,t.QUERY_RESULT)/1e6),t.deleteQuery(e))}if(_.info){let e=_.info.geo+_.info.tex;m==null?m=e:e>m+200?(h++,h>300&&(g=!0)):h=Math.max(0,h-2)}v++;let e=performance.now();if(e-y>=1e3){let t=Array.from(r.subarray(0,i)).sort((e,t)=>e-t);_.fps=v,_.cpuMs={p50:+nr(t,50).toFixed(2),p95:+nr(t,95).toFixed(2),p99:+nr(t,99).toFixed(2)},_.gpuMs=d==null?null:+d.toFixed(2),_.leak=g,v=0,y=e,typeof window<`u`&&(window.__fps=_.fps,window.__perf=C())}}function S(){return i?nr(Array.from(r.subarray(0,i)).sort((e,t)=>e-t),95):0}function C(){return{fps:_.fps,cpuMs:_.cpuMs,gpuMs:_.gpuMs,info:_.info,leak:_.leak,gpuTimer:!!c}}return{frameStart:b,frameEnd:x,sample:C,p95Now:S,get gpuTimerAvailable(){return!!c},forceLoad(e=0){s=Math.max(0,e)}}}var ir=[{dpr:null,shadows:!0},{dpr:1.5,shadows:!0},{dpr:1,shadows:!0},{dpr:1,shadows:!1},{dpr:.75,shadows:!1}];function ar({profiler:e,apply:t,targetFps:n=30,strongFps:r=58}={}){let i=1e3/n,a=1e3/r,o=0,s=0,c=0,l=`full`;function u(){let n=e.p95Now();return n<=0||(n>i?(s++,c=0,s>=45&&o<ir.length-1&&(o++,s=0,l=`p95 ${n.toFixed(1)}ms > ${i.toFixed(0)}ms`,t(o,ir[o]),d(n))):n<a?(c++,s=0,c>=180&&o>0&&(o--,c=0,l=`p95 ${n.toFixed(1)}ms < ${a.toFixed(0)}ms (headroom)`,t(o,ir[o]),d(n))):(s=Math.max(0,s-1),c=Math.max(0,c-1))),o}function d(e){typeof window<`u`&&(window.__quality={level:o,of:ir.length-1,reason:l,p95:+(e||0).toFixed(1)})}return d(0),{update:u,get level(){return o},get reason(){return l},reset(){o=0,s=c=0,l=`full`,t(0,ir[0]),d(0)}}}function or(e){let t=at(e>>>0),n=new Uint8Array(256);for(let e=0;e<256;e++)n[e]=e;for(let e=255;e>0;e--){let r=t()*(e+1)|0,i=n[e];n[e]=n[r],n[r]=i}let r=new Uint8Array(512);for(let e=0;e<512;e++)r[e]=n[e&255];let i=e=>e*e*e*(e*(e*6-15)+10),a=(e,t,n)=>e+(t-e)*n,o=(e,t,n)=>{let r=e&4?n:t,i=e&4?t:n;return(e&1?-r:r)+(e&2?-i:i)};return(e,t)=>{let n=Math.floor(e)&255,s=Math.floor(t)&255,c=e-Math.floor(e),l=t-Math.floor(t),u=i(c),d=i(l),f=r[r[n]+s],p=r[r[n]+s+1],m=r[r[n+1]+s],h=r[r[n+1]+s+1];return a(a(o(f,c,l),o(m,c-1,l),u),a(o(p,c,l-1),o(h,c-1,l-1),u),d)}}function sr(e,t,n,r,i,a){let o=.5,s=1,c=0,l=0;for(let u=0;u<r;u++)c+=o*e(t*s,n*s),l+=o,o*=a,s*=i;return c/l}function cr(e,t,n,r,i,a){let o=.5,s=1,c=0,l=0;for(let u=0;u<r;u++){let r=1-Math.abs(e(t*s,n*s));r*=r,c+=o*r,l+=o,o*=a,s*=i}return c/l}var lr=(e,t,n)=>(n=Math.max(0,Math.min(1,(n-e)/(t-e))),n*n*(3-2*n)),ur=[{key:`ocean`,color:`#2a5b7a`},{key:`beach`,color:`#d8c89a`},{key:`grassland`,color:`#6f9a4e`},{key:`forest`,color:`#3f6b3a`},{key:`hills`,color:`#8a8a55`},{key:`rock`,color:`#7d7468`},{key:`snow`,color:`#eef2f6`}],dr=Object.fromEntries(ur.map((e,t)=>[e.key,t]));function fr(e,t,n){if(e<n-.015)return dr.ocean;if(e<n+.02)return dr.beach;let r=(e-n)/(1-n);return r>.82?dr.snow:r>.6?dr.rock:r>.34?t>.45?dr.forest:dr.hills:t>.55?dr.forest:dr.grassland}var pr={valley:{freq:2.3,mtnMask:.3,mtnGain:.55,sea:.3,relief:7.5,warp:.9},archipelago:{freq:3.4,mtnMask:.18,mtnGain:.4,sea:.5,relief:6,warp:1.3},mountains:{freq:2,mtnMask:.62,mtnGain:.85,sea:.26,relief:11,warp:.8},plains:{freq:1.8,mtnMask:.12,mtnGain:.3,sea:.28,relief:4.5,warp:.7}},mr=Object.keys(pr);function hr({seed:e=1,size:t=160,preset:n=`valley`,params:r=null}={}){let i=r||pr[n]||pr.valley,a=or(e*2+1),o=or(e*5+9),s=or(e*7+13),c=or(e*3+5),l=new Float32Array(t*t),u=new Uint8Array(t*t),d=1/0,f=-1/0;for(let e=0;e<t;e++)for(let n=0;n<t;n++){let r=(n/t-.5)*i.freq,p=(e/t-.5)*i.freq,m=r+i.warp*sr(c,r+5.2,p+1.3,4,2,.5),h=p+i.warp*sr(c,r+9.7,p+4.1,4,2,.5),g=sr(a,m,h,6,2,.5)*.5+.5,_=lr(.45,.75,sr(o,r*.5,p*.5,3,2,.5)*.5+.5),v=cr(a,m*1.7+11,h*1.7+7,5,2,.5);g=g*(1-_*i.mtnMask)+v*(_*i.mtnMask*(.6+i.mtnGain));let y=n/t-.5,b=e/t-.5,x=Math.sqrt(y*y+b*b)*2;g-=lr(.62,1,x)*.55,g=Math.max(0,Math.min(1,g));let S=sr(s,r*.8+3,p*.8+8,4,2,.5)*.5+.5,C=e*t+n;l[C]=g,u[C]=fr(g,S,i.sea),g<d&&(d=g),g>f&&(f=g)}return{size:t,height:l,biome:u,sea:i.sea,relief:i.relief,minH:d,maxH:f,params:i,seed:e,preset:n}}var gr=ur.map(e=>new I(e.color)),_r=new I,vr=new z,yr=new z,br=new z;function xr(e,t,n,r,i,a,o,s){let{size:c,height:l,biome:u,sea:d,relief:f}=e,{cell:p,half:m,baseY:h}=t,g=e=>e*p-m,_=e=>e*p-m,v=e=>h+(e-d)*f,y=(e,t)=>{let n=l[t*c+e],r=0,i=0;e>0&&(r+=l[t*c+e-1],i++),e<c-1&&(r+=l[t*c+e+1],i++),t>0&&(r+=l[(t-1)*c+e],i++),t<c-1&&(r+=l[(t+1)*c+e],i++);let a=Math.max(0,(i?r/i:n)-n);return Math.min(.5,a*f*.8)},b=0,x=(e,t,n,c,l,u,d,f,p,m,h,g,_)=>{vr.set(c-e,l-t,u-n),yr.set(d-e,f-t,p-n),br.crossVectors(vr,yr).normalize();let v=[[e,t,n,h],[c,l,u,g],[d,f,p,_]];for(let[e,t,n,c]of v)r[b*3]=e,r[b*3+1]=t,r[b*3+2]=n,i[b*3]=br.x,i[b*3+1]=br.y,i[b*3+2]=br.z,s&&(a[b*3]=m.r,a[b*3+1]=m.g,a[b*3+2]=m.b),o&&(o[b]=c),b++};for(let e=n.j0;e<n.j1;e++)for(let t=n.i0;t<n.i1;t++){let n=g(t),r=g(t+1),i=_(e),a=_(e+1),o=v(l[e*c+t]),s=v(l[e*c+t+1]),d=v(l[(e+1)*c+t]),f=v(l[(e+1)*c+t+1]),p=y(t,e),m=y(t+1,e),h=y(t,e+1),b=y(t+1,e+1),S=gr[u[e*c+t]],C=gr[u[(e+1)*c+t+1]];x(n,o,i,n,d,a,r,s,i,_r.copy(S),p,h,m),x(r,s,i,n,d,a,r,f,a,_r.copy(C),m,h,b)}}function Sr(e,{worldSize:t=26,baseY:r=0,chunks:i=4}={}){let{size:o}=e,s=new a,l={cell:t/(o-1),half:t/2,baseY:r};s.userData.world=l;let u=Math.ceil((o-1)/i);for(let t=0;t<i;t++)for(let r=0;r<i;r++){let i=r*u,a=t*u,d=Math.min(i+u,o-1),f=Math.min(a+u,o-1);if(d<=i||f<=a)continue;let p={i0:i,j0:a,i1:d,j1:f},m=(d-i)*(f-a)*6,h=new Float32Array(m*3),g=new Float32Array(m*3),_=new Float32Array(m*3),v=new Float32Array(m);xr(e,l,p,h,g,_,v,!0);let y=new se;y.setAttribute(`position`,new j(h,3)),y.setAttribute(`normal`,new j(g,3)),y.setAttribute(`color`,new j(_,3)),y.setAttribute(`aAo`,new j(v,1)),y.computeBoundingSphere();let b=new n(y,it(new c({vertexColors:!0,roughness:.92,metalness:0,flatShading:!0})));b.castShadow=!0,b.receiveShadow=!0,b.userData.chunk=p,s.add(b)}return s.userData.dispose=()=>s.traverse(e=>{e.isMesh&&(e.geometry.dispose(),e.material.dispose())}),s}function Cr(e,t,n,r=!1){let i=e.userData.world;for(let e of n){let n=e.geometry,a=n.attributes.aAo?n.attributes.aAo.array:null;xr(t,i,e.userData.chunk,n.attributes.position.array,n.attributes.normal.array,n.attributes.color.array,a,r),n.attributes.position.needsUpdate=!0,n.attributes.normal.needsUpdate=!0,a&&(n.attributes.aAo.needsUpdate=!0),r&&(n.attributes.color.needsUpdate=!0),n.computeBoundingSphere()}}var wr={beach:[{type:`rock`,density:.05,maxSlope:1.4}],grassland:[{type:`tree`,density:.1,maxSlope:.7},{type:`tuft`,density:.3,maxSlope:.9}],forest:[{type:`tree`,density:.62,maxSlope:.8},{type:`rock`,density:.03,maxSlope:1.2}],hills:[{type:`tree`,density:.14,maxSlope:.7},{type:`rock`,density:.16,maxSlope:1.6}],rock:[{type:`rock`,density:.22,maxSlope:2}]};function Tr({terrain:e,seed:t=1,worldSize:n=26,baseY:r=0,biomeKeys:i,density:a=1,max:o=9e3}={}){let{size:s,height:c,biome:l,sea:u,relief:d}=e,f=at((t^97155048)>>>0),p=n/(s-1),m=n/2,h=e=>r+(e-u)*d,g=(e,t)=>{let n=Math.max(1,Math.min(s-2,e)),r=Math.max(1,Math.min(s-2,t)),i=(c[r*s+n+1]-c[r*s+n-1])*d/(2*p),a=(c[(r+1)*s+n]-c[(r-1)*s+n])*d/(2*p);return Math.hypot(i,a)},_={tree:[],rock:[],tuft:[]};for(let e=1;e<s-1;e+=2)for(let t=1;t<s-1;t+=2){let n=e*s+t,r=c[n];if(r<u+.005)continue;let d=wr[i[l[n]]];if(!d)continue;let v=g(t,e);for(let n of d){let i=f();if(v>n.maxSlope||i>n.density*a)continue;let s=_[n.type];if(s.length>=o)continue;let c=(f()-.5)*p*2,l=(f()-.5)*p*2,u=t*p-m+c,d=e*p-m+l;s.push({x:u,y:h(r),z:d,s:.7+f()*.6,r:f()*Math.PI*2,t:.82+f()*.36})}}return{placements:_,counts:{tree:_.tree.length,rock:_.rock.length,tuft:_.tuft.length}}}function Er(e,t){let n=new I(t),r=e.attributes.position.count,i=new Float32Array(r*3),a=new Float32Array(r),o=e.attributes.position.array;for(let e=0;e<r;e++)i[e*3]=n.r,i[e*3+1]=n.g,i[e*3+2]=n.b,a[e]=Math.min(.45,Math.max(0,.42*(1-o[e*3+1]/.55)));return e.setAttribute(`color`,new j(i,3)),e.setAttribute(`aAo`,new j(a,1)),e}function Dr(e){let t=0;for(let n of e)t+=n.attributes.position.count;let n=new Float32Array(t*3),r=new Float32Array(t*3),i=new Float32Array(t*3),a=new Float32Array(t),o=0;for(let t of e)n.set(t.attributes.position.array,o*3),r.set(t.attributes.normal.array,o*3),i.set(t.attributes.color.array,o*3),t.attributes.aAo&&a.set(t.attributes.aAo.array,o),o+=t.attributes.position.count;let s=new se;return s.setAttribute(`position`,new j(n,3)),s.setAttribute(`normal`,new j(r,3)),s.setAttribute(`color`,new j(i,3)),s.setAttribute(`aAo`,new j(a,1)),s}function Or(){return Dr([Er(new D(.045,.06,.34,6).translate(0,.17,0).toNonIndexed(),`#5b3f28`),Er(new F(.3,.55,7).translate(0,.55,0).toNonIndexed(),`#3f7d3a`),Er(new F(.22,.42,7).translate(0,.85,0).toNonIndexed(),`#4f9046`)])}function kr(){let e=new oe(.18,0).toNonIndexed(),t=e.attributes.position,n=at(3098);for(let e=0;e<t.count;e++){let r=.78+n()*.5;t.setXYZ(e,t.getX(e)*r,t.getY(e)*r*.8,t.getZ(e)*r)}return e.computeVertexNormals(),Er(e,`#7d7468`)}function Ar(){return Er(new F(.06,.16,4).translate(0,.08,0).toNonIndexed(),`#6f9a4e`)}var jr=[`tree`,`rock`,`tuft`],Mr={tree:0,rock:-.05,tuft:0},Nr=new Ce,Pr=new _,Fr=new z,Ir=new z,Lr=new z(0,1,0),Rr=new I;function zr(e){let n=new a;n.raycast=()=>{};let r={tree:Or(),rock:kr(),tuft:Ar()};for(let i of jr){let a=e[i]||(e[i]=[]),o=Math.max(a.length*2,512),s=it(new c({vertexColors:!0,roughness:.9,metalness:0,flatShading:!0}),{sway:!0}),l=new ae(r[i],s,o);l.count=a.length,l.castShadow=!0,l.receiveShadow=!1,l.frustumCulled=!0,l.raycast=()=>{},l.userData.type=i,l.instanceColor=new t(new Float32Array(o*3),3);for(let e=0;e<a.length;e++)Br(l,e,a[e],Mr[i]);l.instanceMatrix.needsUpdate=!0,l.instanceColor.needsUpdate=!0,n.add(l)}return n.userData.placements=e,n.userData.yoff=Mr,n.userData.dispose=()=>n.traverse(e=>{e.isInstancedMesh&&(e.geometry.dispose(),e.material.dispose())}),n}function Br(e,t,n,r){Fr.set(n.x,n.y+(r||0),n.z),Pr.setFromAxisAngle(Lr,n.r),Ir.setScalar(n.s),e.setMatrixAt(t,Nr.compose(Fr,Pr,Ir)),e.setColorAt(t,Rr.setScalar(n.t))}var Vr=(e,t)=>e.children.find(e=>e.isInstancedMesh&&e.userData.type===t);function Hr(e,n){let r=n.instanceMatrix.count*2,i=new ae(n.geometry,n.material,r);return i.count=n.count,i.castShadow=!0,i.receiveShadow=!1,i.frustumCulled=!0,i.raycast=()=>{},i.userData.type=n.userData.type,i.instanceColor=new t(new Float32Array(r*3),3),i.instanceMatrix.array.set(n.instanceMatrix.array.subarray(0,n.count*16)),i.instanceColor.array.set(n.instanceColor.array.subarray(0,n.count*3)),i.instanceMatrix.needsUpdate=!0,i.instanceColor.needsUpdate=!0,e.remove(n),n.dispose(),e.add(i),i}function Ur(e,t,n,r,i,a,o,s){let c=Vr(e,t);if(!c)return!1;let l=e.userData.placements[t];l.length>=c.instanceMatrix.count&&(c=Hr(e,c));let u=l.length;return l.push({x:n,y:r,z:i,s:a,r:o,t:s}),Br(c,u,l[u],(e.userData.yoff||{})[t]||0),c.count=l.length,c.instanceMatrix.needsUpdate=!0,c.instanceColor.needsUpdate=!0,!0}function Wr(e,t,n,r,i){let a=t===`all`?jr:[t],o=i*i,s=0;for(let t of a){let i=Vr(e,t);if(!i)continue;let a=e.userData.placements[t],c=i.instanceMatrix.array,l=i.instanceColor&&i.instanceColor.array;for(let e=a.length-1;e>=0;e--){let t=a[e];if((t.x-n)*(t.x-n)+(t.z-r)*(t.z-r)>o)continue;let i=a.length-1;if(e!==i){a[e]=a[i];for(let t=0;t<16;t++)c[e*16+t]=c[i*16+t];if(l)for(let t=0;t<3;t++)l[e*3+t]=l[i*3+t]}a.pop(),s++}i.count=a.length,i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0)}return s}var Gr={tree:.85,rock:2,tuft:.95};function Kr(e,t,{worldSize:n=26,baseY:r=0}={}){let i=e.userData.placements,a=e.userData.yoff||{};if(!i)return;let{size:o,height:s,sea:c,relief:l}=t,u=n/(o-1),d=n/2,f=e=>e<0?0:e>=o?o-1:e,p=(e,t)=>s[f(Math.round((t+d)/u))*o+f(Math.round((e+d)/u))],m=(e,t)=>{let n=Math.max(1,Math.min(o-2,Math.round((e+d)/u))),r=Math.max(1,Math.min(o-2,Math.round((t+d)/u))),i=(s[r*o+n+1]-s[r*o+n-1])*l/(2*u),a=(s[(r+1)*o+n]-s[(r-1)*o+n])*l/(2*u);return Math.hypot(i,a)},h=new Ce,g=new _,v=new z,y=new z,b=new z(0,1,0),x=new I;for(let t of e.children){let e=t.userData.type,n=i[e];if(!n||!t.isInstancedMesh)continue;let o=Gr[e]??1.5,s=t.instanceMatrix.count,u=Math.min(n.length,s);t.count=u;for(let i=0;i<u;i++){let s=n[i],u=p(s.x,s.z),d=u<c+.005||m(s.x,s.z)>o;v.set(s.x,r+(u-c)*l+(a[e]||0),s.z),g.setFromAxisAngle(b,s.r),y.setScalar(d?0:s.s),h.compose(v,g,y),t.setMatrixAt(i,h),t.setColorAt(i,x.setScalar(s.t))}t.instanceMatrix.needsUpdate=!0,t.instanceColor&&(t.instanceColor.needsUpdate=!0)}}function qr({terrain:e,seed:t,worldSize:n,baseY:r,biomeKeys:i,density:a,max:o}){let{placements:s,counts:c}=Tr({terrain:e,seed:t,worldSize:n,baseY:r,biomeKeys:i,density:a,max:o}),l=zr(s);return l.userData.counts=c,l}function Jr(e,{worldSize:t=26,baseY:n=0,maxLakes:r=3}={}){let{size:i,height:a,sea:o,relief:s,maxH:c}=e,l=Math.floor((i-1)/3),u=t/(i-1),d=t/2,f=(e,t)=>a[t*3*i+e*3],p=e=>e*3*u-d,m=e=>e*3*u-d,h=e=>e>o+.02,g=o+.55*Math.max(.001,c-o),_=[];for(let e=2;e<l-2;e++)for(let t=2;t<l-2;t++){let n=f(t,e);if(!h(n)||n>g)continue;let r=!0;for(let i=-1;i<=1&&r;i++)for(let a=-1;a<=1;a++)if((a||i)&&f(t+a,e+i)<n){r=!1;break}r&&_.push({gi:t,gj:e,h:n})}_.sort((e,t)=>e.h-t.h);let v=new Uint8Array(l*l),y=[];for(let e of _){if(y.length>=r)break;if(v[e.gj*l+e.gi])continue;let t=e.h+.045,i=[[e.gi,e.gj]],a=new Set,c=!0,d=0,h=0,g=0,_=[];for(;i.length;){let[e,n]=i.pop(),r=n*l+e;if(a.has(r))continue;if(a.add(r),e<=0||e>=l-1||n<=0||n>=l-1){c=!1;continue}let s=f(e,n);if(s<o){c=!1;continue}if(!(s>=t)){if(_.push(r),d+=e,h+=n,g++,g>520){c=!1;break}i.push([e+1,n],[e-1,n],[e,n+1],[e,n-1])}}if(!c||g<5)continue;for(let e of _)v[e]=1;let b=d/g,x=h/g,S=3*u,C=g*S*S,w=.82*Math.sqrt(C/Math.PI);y.push({cx:p(b),cz:m(x),y:n+(t-o)*s,radius:w,area:C})}return y}function Yr(e,{material:t}={}){let r=new a;r.raycast=()=>{};let i=t||new c({color:`#3f6f8c`,roughness:.08,metalness:.35,transparent:!0,opacity:.88});for(let t of e){let e=new n(new H(t.radius,28),i);e.rotation.x=-Math.PI/2,e.position.set(t.cx,t.y+.012,t.cz),e.receiveShadow=!1,e.castShadow=!1,e.raycast=()=>{},r.add(e)}return r.userData.dispose=()=>r.traverse(e=>{e.isMesh&&e.geometry.dispose()}),r.userData.count=e.length,r}function Xr(e,t={}){let n=Jr(e,t),r=Yr(n,t);return r.userData.lakes=n,r}function Zr(){let e=new Map,t={register(n){return!n||!n.id?t:(n.art=n.art||{},n.defaults=n.defaults||{},e.set(n.id,n),t)},registerAll(e){for(let n of e)t.register(n);return t},get(t){return e.get(t)},byKind(t){return[...e.values()].filter(e=>e.kind===t)},byGroup(t){return[...e.values()].filter(e=>e.group===t)},all(){return[...e.values()]},setArt(n,r){let i=e.get(n);return i&&(i.art={...i.art,...r}),t},get size(){return e.size}};return t}function Qr(e=Zr()){return ur.forEach((t,n)=>e.register({id:`mat-${t.key}`,label:$r(t.key),kind:`material`,group:`Terrain`,defaults:{colorIndex:n},art:{icon:t.color,placeholder:!0}})),e.registerAll([{id:`scatter-tree`,label:`Tree`,kind:`scatter`,group:`Vegetation`,defaults:{geoKey:`tree`,density:.4,maxSlope:.85},art:{icon:`🌲`,factory:null,placeholder:!0}},{id:`scatter-rock`,label:`Rock`,kind:`scatter`,group:`Rock`,defaults:{geoKey:`rock`,density:.2,maxSlope:2},art:{icon:`🪨`,factory:null,placeholder:!0}},{id:`scatter-tuft`,label:`Grass tuft`,kind:`scatter`,group:`Vegetation`,defaults:{geoKey:`tuft`,density:.3,maxSlope:.95},art:{icon:`🌱`,factory:null,placeholder:!0}}]),e.registerAll([{id:`ent-person`,label:`Person`,kind:`entity`,group:`Life`,defaults:{medium:`ground`},art:{icon:`🚶`,placeholder:!0}},{id:`ent-car`,label:`Car`,kind:`entity`,group:`Life`,defaults:{medium:`road`},art:{icon:`🚗`,placeholder:!0}},{id:`ent-boat`,label:`Boat`,kind:`entity`,group:`Life`,defaults:{medium:`water`},art:{icon:`⛵`,placeholder:!0}},{id:`ent-fish`,label:`Fish`,kind:`entity`,group:`Life`,defaults:{medium:`water`},art:{icon:`🐟`,placeholder:!0}},{id:`ent-gull`,label:`Gull`,kind:`entity`,group:`Life`,defaults:{medium:`air`},art:{icon:`🕊`,placeholder:!0}},{id:`ent-cloud`,label:`Cloud`,kind:`entity`,group:`Sky`,defaults:{medium:`air`},art:{icon:`☁️`,placeholder:!0}},{id:`ent-atv`,label:`ATV`,kind:`entity`,group:`Vehicles`,defaults:{medium:`ground`,pilotable:!0,roam:`all-terrain`,model:`ground`},art:{icon:`🛻`,placeholder:!0}},{id:`ent-craft`,label:`Spacecraft`,kind:`entity`,group:`Vehicles`,defaults:{medium:`air`,pilotable:!0,roam:`all-medium`,model:`spacecraft`},art:{icon:`🛸`,placeholder:!0}}]),e}var $r=e=>e.charAt(0).toUpperCase()+e.slice(1);function ei({scale:e=90}={}){let t=new ge;t.scale.setScalar(e),t.frustumCulled=!1,t.raycast=()=>{},t.visible=!1;let n=t.material.uniforms;n.turbidity.value=2.2,n.rayleigh.value=1.3,n.mieCoefficient.value=.005,n.mieDirectionalG.value=.78,n.showSunDisc.value=0;function r(e){n.sunPosition.value.copy(e)}function i(e){e&&(e.turbidity!=null&&(n.turbidity.value=e.turbidity),e.rayleigh!=null&&(n.rayleigh.value=e.rayleigh),e.mie!=null&&(n.mieCoefficient.value=e.mie),e.mieG!=null&&(n.mieDirectionalG.value=e.mieG))}let a=null,o=null,s=null,c=null;function l(t){if(typeof document>`u`||!t)return null;a||(a=new pe(t),o=new me,s=new ge,s.scale.setScalar(e),o.add(s));let r=s.material.uniforms;return r.turbidity.value=n.turbidity.value,r.rayleigh.value=n.rayleigh.value,r.mieCoefficient.value=n.mieCoefficient.value,r.mieDirectionalG.value=n.mieDirectionalG.value,r.sunPosition.value.copy(n.sunPosition.value),c&&c.dispose(),c=a.fromScene(o),c.texture}return{mesh:t,setSun:r,setParams:i,buildEnv:l,get material(){return t.material}}}var ti=`attribute float aSize;
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
}`,ri={realistic:0,charm:0,pixel:2,vector:1},ii={realistic:1,charm:1,pixel:1.9,vector:1.2};function ai({seed:e=1517,count:t=340,spreadX:n=21,yLo:i=3,yHi:o=18,zBase:s=7.2}={}){let c=new a;c.raycast=()=>{};let l=at(e>>>0),u=new Float32Array(t*3),d=new Float32Array(t),f=new Float32Array(t),p=new Float32Array(t),h=[];for(let e=0;e<t;e++){let t=(l()*2-1)*n,r=i+l()*(o-i),a=-s-l()*.7;u[e*3]=t,u[e*3+1]=r,u[e*3+2]=a;let c=.35+l()*.65;f[e]=c,d[e]=1.6+l()*2.8+(c>.85?2.2:0),p[e]=l()*Math.PI*2,c>.82&&h.push([t,r,a])}let _=new se;_.setAttribute(`position`,new j(u,3)),_.setAttribute(`aSize`,new j(d,1)),_.setAttribute(`aBright`,new j(f,1)),_.setAttribute(`aPhase`,new j(p,1));let v=new ie({vertexShader:ti,fragmentShader:ni,uniforms:{uTime:{value:0},uTwinkle:{value:1},uSizeScale:{value:1},uColor:{value:new I(`#eaf0ff`)},uNight:{value:0},uMode:{value:0}},transparent:!0,depthWrite:!1,blending:2,fog:!1,toneMapped:!1}),y=new w(_,v);y.raycast=()=>{},y.frustumCulled=!1,c.add(y);let b=[];if(h.length>6)for(let e=0;e<3;e++){let e=Math.floor(l()*h.length);for(let t=0;t<3;t++){let t=h[e],n=h[(e+1+Math.floor(l()*2))%h.length];b.push(t[0],t[1],t[2],n[0],n[1],n[2]),e=(e+1)%h.length}}let x=[[[0,2],[0,0]],[[0,0],[.7,0]],[[2.1,2],[1.4,2]],[[1.4,2],[1.4,0]],[[1.4,0],[2.1,0]],[[2.1,0],[2.1,1]],[[2.1,1],[1.7,1]],[[2.8,0],[2.8,2]],[[2.8,2],[3.5,2]],[[3.5,2],[3.5,1]],[[3.5,1],[2.8,1]],[[2.8,1],[3.6,0]]],S=-s-.4,C=.62;for(let[[e,t],[n,r]]of x)b.push(-3+e*C,12+t*C,S,-3+n*C,12+r*C,S);let T=new se;T.setAttribute(`position`,new r(b,3));let E=new g(T,new m({color:`#9fb6e8`,transparent:!0,opacity:0,depthWrite:!1,fog:!1,toneMapped:!1}));E.raycast=()=>{},E.frustumCulled=!1,c.add(E);let D=new R(new ve({map:oi(),transparent:!0,opacity:0,depthWrite:!1,blending:2,fog:!1,toneMapped:!1}));D.raycast=()=>{},D.scale.set(n*2.4,n*.95,1),D.position.set(2,12,-s-.7),D.material.rotation=-.5,D.renderOrder=-3,c.add(D);let O=-1;function k(e,t=`realistic`,n=0,r=!1){v.uniforms.uTime.value=n,v.uniforms.uTwinkle.value=+!r,v.uniforms.uNight.value=e;let i=ri[t]??0;i!==O&&(v.uniforms.uMode.value=i,O=i),v.uniforms.uSizeScale.value=ii[t]??1,E.material.opacity=e*.5,D.material.opacity=e*.32,c.visible=e>.001}return{group:c,update:k}}function oi(){let e=document.createElement(`canvas`);e.width=e.height=256;let t=e.getContext(`2d`),n=t.createRadialGradient(256/2,256/2,0,256/2,256/2,256/2);n.addColorStop(0,`rgba(150,170,230,0.5)`),n.addColorStop(.4,`rgba(120,130,200,0.22)`),n.addColorStop(1,`rgba(90,100,160,0)`),t.fillStyle=n,t.fillRect(0,0,256,256);let r=at(20145);for(let e=0;e<7;e++){let e=40+r()*176,n=70+r()*116,i=14+r()*30,a=t.createRadialGradient(e,n,0,e,n,i);a.addColorStop(0,`rgba(200,210,255,0.18)`),a.addColorStop(1,`rgba(200,210,255,0)`),t.fillStyle=a,t.beginPath(),t.arc(e,n,i,0,Math.PI*2),t.fill()}let i=new W(e);return i.colorSpace=V,i}var si=Math.PI*2;function ci(e){let t=document.createElement(`canvas`);t.width=t.height=128;let n=t.getContext(`2d`),r=n.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return r.addColorStop(0,`#ffffff`),r.addColorStop(.34,`#fffaf0`),r.addColorStop(.66,e),r.addColorStop(.86,e),r.addColorStop(1,`rgba(255,255,255,0)`),n.fillStyle=r,n.beginPath(),n.arc(128/2,128/2,128/2,0,si),n.fill(),gi(t,!0)}function li(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);n.addColorStop(0,`#ffffff`),n.addColorStop(.4,`#eef3ff`),n.addColorStop(.82,`#c4cee6`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,128/2,0,si),t.fill(),t.globalAlpha=.14,t.fillStyle=`#8b97b4`;for(let[e,n,r]of[[54,50,9],[78,66,7],[60,82,5]])t.beginPath(),t.arc(e,n,r,0,si),t.fill();return gi(e,!0)}function ui(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`);t.translate(128/2,128/2),t.fillStyle=`rgba(255,210,120,0.9)`;for(let e=0;e<12;e++)t.rotate(si/12),t.beginPath(),t.moveTo(0,-28),t.lineTo(7,-54),t.lineTo(-7,-54),t.closePath(),t.fill();let n=t.createRadialGradient(0,0,0,0,0,32);return n.addColorStop(0,`#ffffff`),n.addColorStop(.4,`#fff1c8`),n.addColorStop(.8,`#ffb24a`),n.addColorStop(1,`#ff8a2a`),t.fillStyle=n,t.beginPath(),t.arc(0,0,32,0,si),t.fill(),gi(e,!0)}function di(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,46);n.addColorStop(0,`#ffffff`),n.addColorStop(.5,`#e6ecfb`),n.addColorStop(1,`#c2cce4`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,46,0,si),t.fill(),t.fillStyle=`#aab6d2`;for(let[e,n,r]of[[52,48,11],[80,62,8],[58,82,7],[40,66,5]])t.beginPath(),t.arc(e,n,r,0,si),t.fill();return gi(e,!0)}function fi(e,t,n){let r=document.createElement(`canvas`);r.width=r.height=144;let i=r.getContext(`2d`),a=17/2,o=18/2-.5;for(let r=0;r<18;r++)for(let s=0;s<18;s++){let c=Math.hypot(s-a,r-a);c>o||(i.fillStyle=c<o*.45?e:c<o*.78?t:n,i.fillRect(Math.round(s*8),Math.round(r*8),8,8))}return gi(r,!1)}function pi(e,t,n=!1){let r=document.createElement(`canvas`);r.width=r.height=128;let i=r.getContext(`2d`);if(i.fillStyle=t,i.beginPath(),i.arc(64,64,58,0,si),i.fill(),i.fillStyle=e,i.beginPath(),i.arc(64,64,50,0,si),i.fill(),n){i.globalAlpha=.5,i.fillStyle=t;for(let[e,t,n]of[[10,-12,10],[-16,6,7],[4,18,5]])i.beginPath(),i.arc(64+e,64+t,n,0,si),i.fill()}return gi(r,!0)}function mi(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return n.addColorStop(0,`rgba(255,255,255,0.9)`),n.addColorStop(.38,`rgba(255,255,255,0.3)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,128/2,0,si),t.fill(),gi(e,!0)}function hi(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2),r=`20,30,48`;return n.addColorStop(0,`rgba(${r},0)`),n.addColorStop(.42,`rgba(${r},0)`),n.addColorStop(.6,`rgba(${r},0.6)`),n.addColorStop(1,`rgba(${r},0)`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,128/2,0,si),t.fill(),gi(e,!0)}function gi(e,t){let n=new W(e);return n.colorSpace=V,t||(n.magFilter=x,n.minFilter=x),n}var _i=(e,t,n)=>{let r=Math.max(0,Math.min(1,(e-t)/(n-t)));return r*r*(3-2*r)};function vi({R:e=88,sunSize:t=6,moonSize:n=5.5}={}){let r=new a;r.raycast=()=>{};let i=(e,t)=>{let n=new R(new ve({map:e,transparent:!0,depthTest:!0,depthWrite:!1,fog:!1,toneMapped:!1,...t?{blending:2}:{}}));return n.raycast=()=>{},n},o={realistic:ci(`#ffcf8a`),charm:ui(),pixel:fi(`#fff6e0`,`#ffc24a`,`#ff8a2a`),vector:pi(`#ffd24a`,`#ff9a2e`)},s={realistic:li(),charm:di(),pixel:fi(`#ffffff`,`#cdd6ee`,`#9aa6c6`),vector:pi(`#e8eefc`,`#b9c6e4`,!0)},c=mi(),l=i(hi(),!1),u=i(c,!0),d=i(o.realistic),f=i(c,!0),p=i(s.realistic);r.add(l,u,d,f,p);let m=ai({});r.add(m.group);let h=typeof window<`u`&&window.matchMedia?window.matchMedia(`(prefers-reduced-motion: reduce)`):null,g={realistic:{sunGlow:3,sunGlowOp:.7,moonGlow:2.6,moonGlowOp:.5,sizeMul:1,sunHaloOp:.85},charm:{sunGlow:2.2,sunGlowOp:.55,moonGlow:2.1,moonGlowOp:.42,sizeMul:1.08,sunHaloOp:.7},pixel:{sunGlow:1.7,sunGlowOp:.4,moonGlow:1.7,moonGlowOp:.32,sizeMul:1,sunHaloOp:.6},vector:{sunGlow:1.4,sunGlowOp:.28,moonGlow:1.4,moonGlowOp:.22,sizeMul:1,sunHaloOp:.5}},_=`realistic`;function v(e){e===_||!g[e]||(_=e,d.material.map=o[e],d.material.needsUpdate=!0,p.material.map=s[e],p.material.needsUpdate=!0)}new I;let y=new I(`#fff3df`),b=new I(`#ffb060`),x=new I(`#ff6a2a`),S=new I(`#eef2ff`),C=new I(`#9fbcff`),w=new z(0,1,0),T=new z(0,-1,0),E=new z;function D(e,r,i,a,o=`realistic`,s=null){v(o);let c=g[_],E=i.sunArc,D=a?Math.min(1,(a.cloud||0)*.85+(a.fog||0)*.7):0,k=E.y,A=_i(k,-.04,.1)*(1-.7*D),j=1-_i(Math.abs(k),.02,.5),M=t*c.sizeMul*(1+.55*j);w.copy(E);let ee=_===`realistic`;d.scale.setScalar(M),u.scale.setScalar(M*c.sunGlow),d.material.color.copy(y),ee&&d.material.color.multiplyScalar(3),u.material.color.copy(b).lerp(x,j),d.material.opacity=A,u.material.opacity=A*c.sunGlowOp*(.7+.5*j)*(ee?.5:1),l.scale.setScalar(M*1.7),l.material.opacity=ee?0:A*(1-j)*c.sunHaloOp;let te=_i(-E.y,-.04,.1)*(1-.65*D),ne=n*c.sizeMul;T.copy(E).negate(),p.scale.setScalar(ne),f.scale.setScalar(ne*c.moonGlow),p.material.color.copy(S),f.material.color.copy(C),p.material.opacity=te,f.material.opacity=te*c.moonGlowOp,O(s);let N=_i(-E.y,-.05,.18)*(1-.85*D);m.update(N,o,r,!!(h&&h.matches)),typeof window<`u`&&(window.__celestial={sun:d.position.toArray(),dir:w.toArray().map(e=>+e.toFixed(3)),sunVis:+A.toFixed(3),moonVis:+te.toFixed(3)})}function O(t){t&&(t.getWorldPosition(E),d.position.copy(E).addScaledVector(w,e),u.position.copy(d.position),l.position.copy(d.position),p.position.copy(E).addScaledVector(T,e),f.position.copy(p.position))}return{group:r,update:D,place:O}}var yi=`varying vec2 vUv;

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
}`,ji={"1-bit":{gridWidth:110,dither:.6,palette:[`#15120c`,`#c8b486`]},gb:{gridWidth:130,dither:.4,palette:[`#0f380f`,`#306230`,`#8bac0f`,`#9bbc0f`]},"8-bit":{gridWidth:160,dither:.55,palette:[`#140c1c`,`#442434`,`#30346d`,`#4e4a4e`,`#854c30`,`#346524`,`#d04648`,`#757161`,`#597dce`,`#d27d2c`,`#8595a1`,`#6daa2c`,`#d2aa99`,`#6dc2ca`,`#dad45e`,`#deeed6`]},"16-bit":{gridWidth:280,dither:.3,palette:`#000000.#222034.#45283c.#663931.#8f563b.#df7126.#d9a066.#eec39a.#fbf236.#99e550.#6abe30.#37946e.#4b692f.#524b24.#323c39.#3f3f74.#306082.#5b6ee1.#639bff.#5fcde4.#cbdbfc.#ffffff.#9badb7.#847e87.#696a6a.#595652.#76428a.#ac3232.#d95763.#d77bba.#8f974a.#8a6f30`.split(`.`)},modern:{gridWidth:460,dither:.6,palette:null}},Mi=[`gb`,`8-bit`,`16-bit`,`modern`];function Ni(t){let n=Math.max(t.length,1),r=new Float32Array(n*4);t.forEach((e,t)=>{let n=new I(e);r[t*4+0]=n.r,r[t*4+1]=n.g,r[t*4+2]=n.b,r[t*4+3]=1});let i=new ye(r,n,1,e,be);return i.minFilter=x,i.magFilter=x,i.needsUpdate=!0,i}var Pi=220,Fi={night:[`#0A0C16`,`#1C2236`,`#3A3A52`,`#5A5A78`,`#8A92B0`],dawn:[`#1A1008`,`#43281A`,`#7A4A30`,`#B07A4E`,`#E8A86A`],noon:[`#16100A`,`#3A2F1E`,`#6B563A`,`#937B54`,`#B89968`],dusk:[`#140A0A`,`#3E1E1A`,`#7A3828`,`#B85A36`,`#F0884A`]},Ii={night:[`#020604`,`#06180E`,`#10401E`,`#1E9040`,`#7FE0FF`],dawn:[`#060603`,`#1A2410`,`#3A6B22`,`#6CC040`,`#FFC060`],noon:[`#050805`,`#0E2912`,`#1E6B2F`,`#3CF06A`,`#FFB000`],dusk:[`#080402`,`#241408`,`#6B4A12`,`#E0A030`,`#FF7030`]};function Li(e){if(typeof document>`u`||document.getElementById(`lgr-nowebgl`))return;let t=document.createElement(`div`);t.id=`lgr-nowebgl`,t.style.cssText=`position:fixed;inset:0;z-index:99999;display:flex;align-items:center;justify-content:center;background:#0e1116;color:#cdd6e4;font:16px/1.6 system-ui,-apple-system,sans-serif;text-align:center;padding:2rem;`,t.innerHTML=`<div style="max-width:30rem"><div style="font-size:2.4rem;margin-bottom:1rem">🌊</div><h1 style="font-size:1.3rem;margin:0 0 .6rem;color:#fff;font-weight:600">This experience needs a modern browser</h1><p style="margin:0;color:#9aa6b8">`+e+`</p></div>`,document.body&&document.body.appendChild(t)}function Ri({demo:t=!1,citySeed:r=0,profileIndex:l=0}={}){let d;try{d=new re({antialias:!0,preserveDrawingBuffer:!0})}catch(e){throw Li(`This experience needs WebGL2 — please open it in an up-to-date browser (Chrome, Edge, Firefox, or Safari on iOS 15+) with hardware acceleration enabled.`),e}d.shadowMap.enabled=!0,d.shadowMap.type=1,d.shadowMap.autoUpdate=!1,d.shadowMap.needsUpdate=!0;let p=!!(window.matchMedia&&window.matchMedia(`(pointer: coarse)`).matches),m=p?1.5:2;d.setPixelRatio(Math.min(window.devicePixelRatio,m)),d.setSize(window.innerWidth,window.innerHeight),d.setClearColor(920327,1),document.body.appendChild(d.domElement);let h=d.getDrawingBufferSize(new de),g=!1,_=!1,y=()=>{};d.domElement.addEventListener(`webglcontextlost`,e=>{e.preventDefault(),g=!0,typeof window<`u`&&(window.__contextLost=!0)},!1),d.domElement.addEventListener(`webglcontextrestored`,()=>{y(),g=!1,typeof window<`u`&&(window.__contextLost=!1)},!1);let C=new me;C.fog=new b(10465470,0);let w=new I(`#aeb6c0`),T=.062,E=new I(`#74508f`),D=new I,O=ze({aspect:window.innerWidth/window.innerHeight}),k=At({t:.5}),A=d.getContext(),j=!!(A&&A.getExtension&&(A.getExtension(`EXT_color_buffer_float`)||A.getExtension(`EXT_color_buffer_half_float`)));!j&&typeof console<`u`&&console.info(`[L90 H1] No float colour buffer (EXT_color_buffer_float/half_float) — wave sim OFF, flat-sea fallback.`);let M={type:i,format:e,minFilter:x,magFilter:x,wrapS:ce,wrapT:ce,depthBuffer:!1,stencilBuffer:!1},ee=j?[new L(256,256,M),new L(256,256,M),new L(256,256,M)]:null;if(ee){for(let e of ee)d.setRenderTarget(e),d.clear();d.setRenderTarget(null)}let te=new ye(new Uint8Array([0,0,0,255]),1,1,e);te.needsUpdate=!0;let ne=new me,N=new s(-1,1,1,-1,0,1),P=new ie({vertexShader:zn,fragmentShader:xi,uniforms:{uCurr:{value:null},uPrev:{value:null},uTexel:{value:new de(1/256,1/256)},uMouse:{value:new de(-1,-1)},uMouseStrength:{value:0},uC2:{value:.25},uDamping:{value:.992},uRainCount:{value:0},uRainDrops:{value:Array.from({length:8},()=>new z)},uWakeCount:{value:0},uWakeDrops:{value:Array.from({length:8},()=>new z)}}});ne.add(new n(new u(2,2),P));let F=new L(h.x,h.y,{minFilter:o,magFilter:o,depthBuffer:!0,stencilBuffer:!1});function ae(e){let t=document.createElement(`canvas`);t.width=t.height=1024;let n=t.getContext(`2d`);n.fillStyle=e?`#0c1418`:`#15110b`,n.fillRect(0,0,1024,1024),n.strokeStyle=e?`rgba(120,150,170,0.22)`:`rgba(184,153,104,0.30)`,n.lineWidth=2;for(let e=0;e<=1024;e+=64)n.beginPath(),n.moveTo(e,0),n.lineTo(e,1024),n.stroke(),n.beginPath(),n.moveTo(0,e),n.lineTo(1024,e),n.stroke();e||(n.fillStyle=`#B89968`,n.font=`bold 360px Georgia, serif`,n.textAlign=`center`,n.textBaseline=`middle`,n.fillText(`LGR`,512,470),n.font=`600 64px ui-monospace, monospace`,n.fillText(`WEB · STUDIO`,512,720));let r=new W(t);return r.colorSpace=V,r}let oe=new n(new u(28,28),new S({map:ae(t)}));oe.rotation.x=-Math.PI/2,oe.position.y=-.35,C.add(oe);let se=new n(new u(40,24),new ie({depthWrite:!1,vertexShader:yi,fragmentShader:bi,uniforms:{uTime:{value:0},uInk:{value:k.horizon},uGold:{value:k.sky},uFogColor:{value:D},uFogAmt:{value:0},uFogCharm:Ke}}));se.position.set(0,3,-8),C.add(se);let R=new ie({vertexShader:Si,fragmentShader:Ci,uniforms:{uHeight:{value:j?null:te},uScene:{value:F.texture},uTexel:{value:new de(1/256,1/256)},uResolution:{value:new de(h.x,h.y)},uDisplace:{value:.42},uNormalStrength:{value:22},uRefractStrength:{value:.06},uChromaScale:{value:1},uNormalMatrix:{value:new v},uLightDir:{value:k.sunDir},uInk:{value:new I(`#2A2218`)},uGold:{value:new I(`#B89968`)},uVector:Be,uVecWater:{value:new I(`#1fb8d8`)},uVecTint:{value:Ve}}}),B=new n(new u(28,28,255,255),R);B.rotation.x=-Math.PI/2,B.updateMatrixWorld(!0),R.uniforms.uNormalMatrix.value.getNormalMatrix(B.matrixWorld),C.add(B);let le={value:0},ue=rn({windowGlow:le}),H=St({seed:r,profileIndex:l,landmarkFactory:ue,windowGlow:le});C.add(H.group);let fe=Ft({plinthTop:.3,extent:H.extent,profile:H.state.profile});C.add(fe.group);let pe=Kt({extent:H.extent,waterSize:28,plinthTop:.3});C.add(pe.group),P.uniforms.uWakeDrops.value=pe.wakeDrops;let U=on({extent:H.extent});C.add(U.group),P.uniforms.uRainDrops.value=U.rainDrops;let he=cn({extent:H.extent});C.add(he.group);let ge=[fe,pe,he],_e=dn({rig:O,getCamera:()=>O.camera,sources:ge}),ve=vi();C.add(ve.group);let be=ei({scale:90});C.add(be.mesh),C.environmentIntensity=.32;let xe=!1;function Ce(e){let t=e&&k.sunArc.y>-.04;t!==xe&&(xe=t,be.mesh.visible=t,se.visible=!t)}let we=null,Te=-1;y=()=>{we=null,Te=-1,d.shadowMap.needsUpdate=!0};function Ee(){let e=Math.floor(k.t%1*4)%4;return(e!==Te||!we)&&(Te=e,we=be.buildEnv(d)),we}let De=null,G=null,Oe=null,K=null,q=!1,ke=1234,Ae=`valley`,je=ur.map(e=>e.key),Me=new c({color:`#3f6f8c`,roughness:.07,metalness:.4,transparent:!0,opacity:.9}),Ne=()=>[H.group,fe.group,pe.group],Pe=()=>[De,G,Oe].filter(Boolean);function Fe(){for(let e of Pe())C.remove(e),e.userData.dispose?.();let e=hr({seed:ke,size:160,preset:Ae});K=e,De=Sr(e,{worldSize:26,baseY:0,chunks:6}),G=qr({terrain:e,seed:ke,worldSize:26,baseY:0,biomeKeys:je}),Oe=Xr(e,{worldSize:26,baseY:0,maxLakes:3,material:Me});for(let e of Pe())e.visible=q,C.add(e);J!==void 0&&J&&J.clear(),$e!==void 0&&$e&&$e.clear(),typeof window<`u`&&(window.__world={seed:ke,preset:Ae,active:q,chunks:De.children.length,scatter:G.userData.counts,lakes:Oe.userData.count})}let Ie=e=>{for(let t of Pe())t.visible=e};function Le(e,t){if(!K)return 0;let{size:n,height:r,sea:i,relief:a}=K,o=26/(n-1),s=Math.round((e+13)/o),c=Math.round((t+13)/o),l=s<0?0:s>=n?n-1:s;return(r[(c<0?0:c>=n?n-1:c)*n+l]-i)*a}let J=Ln({heightAt:Le,seaSurfaceY:0,waterY:.06});J.group.visible=!1,C.add(J.group),ge.push(J);let Re=new a;Re.raycast=()=>{},C.add(Re);let Je=null;function Ye(e,t=0,n=0,r={}){return Je&&=(Re.remove(Je.obj),J.despawn(Je),null),Je=J.spawn(e,t,n,r),Je&&(J.group.remove(Je.obj),Re.add(Je.obj)),Je?Je.followable:null}let Xe=0;function Ze(e,t){if(!K||!De)return;let{size:n,height:r,relief:i}=K,a=26/(n-1),o=26/(t-1),s=i>1e-6?1/i:0,c=!1;for(let i=0;i<t;i++)for(let l=0;l<t;l++){let u=e[i*t+l];if(u===0)continue;c=!0;let d=u*s,f=l*o/a,p=i*o/a,m=Math.max(0,Math.round(f-1)),h=Math.min(n-1,Math.round(f+1)),g=Math.max(0,Math.round(p-1)),_=Math.min(n-1,Math.round(p+1));for(let e=g;e<=_;e++)for(let t=m;t<=h;t++){let i=e*n+t,a=r[i]+d;r[i]=a<0?0:a>1?1:a}}c&&(Xe++,Xe%8==0&&Cr(De,K,De.children),Xe%24==0&&G&&Kr(G,K,{worldSize:26,baseY:0}))}function Qe(e,t){if(!K||!De)return;let{size:n,height:r,relief:i}=K,a=i>1e-6?1/i:0,o=(t-1)/(n-1),s=!1;for(let i=0;i<n;i++){let c=i*o,l=Math.floor(c),u=c-l,d=Math.min(t-1,l+1);for(let c=0;c<n;c++){let f=c*o,p=Math.floor(f),m=f-p,h=Math.min(t-1,p+1),g=e[l*t+p],_=e[l*t+h],v=e[d*t+p],y=e[d*t+h],b=(g*(1-m)+_*m)*(1-u)+(v*(1-m)+y*m)*u;if(b!==0){s=!0;let e=i*n+c,t=r[e]+b*a;r[e]=t<0?0:t>1?1:t}}}s&&(Cr(De,K,De.children),G&&Kr(G,K,{worldSize:26,baseY:0}))}let $e=Jn({worldHeightAt:Le,applyErosion:Ze,syncErodedTerrain:Qe,worldSize:26,grid:96,seaY:0,renderer:d});$e.group.visible=!1,C.add($e.group);let et=Yn({extent:26,count:p?500:2e3});et.group.visible=!1,C.add(et.group);let Y=null,it=!1,at=new Set;function ot(){!K||!Oe||(C.remove(Oe),Oe.userData.dispose?.(),Oe=Xr(K,{worldSize:26,baseY:0,maxLakes:3,material:Me}),Oe.visible=q&&!it,C.add(Oe),window.__world&&(window.__world.lakes=Oe.userData.count))}function st(){ot(),G&&Kr(G,K,{worldSize:26,baseY:0})}function ct(e,t,n=1,r=2.2,i=.05){if(!K||!De)return;let a=K.size,o=26/(a-1),s=(e+13)/o,c=(t+13)/o,l=r/o,u=Math.max(0,Math.floor(s-l)),d=Math.min(a-1,Math.ceil(s+l)),f=Math.max(0,Math.floor(c-l)),p=Math.min(a-1,Math.ceil(c+l)),m=K.height,h=l*.5*2*(l*.5);for(let e=f;e<=p;e++)for(let t=u;t<=d;t++){let r=(t-s)*(t-s)+(e-c)*(e-c);if(r>l*l)continue;let o=m[e*a+t]+n*i*Math.exp(-r/h);m[e*a+t]=o<0?0:o>1?1:o}at.clear();for(let e of De.children){let t=e.userData.chunk;t&&t.i0<=d&&t.i1>=u-1&&t.j0<=p&&t.j1>=f-1&&at.add(e)}Cr(De,K,at),Y&&clearTimeout(Y),Y=setTimeout(st,140)}function lt(e,t,n,r=2.2){if(!K||!De||n==null)return;let i=K.size,a=26/(i-1),o=(e+13)/a,s=(t+13)/a,c=r/a,l=c*c,u=Math.max(0,Math.floor(o-c)),d=Math.min(i-1,Math.ceil(o+c)),f=Math.max(0,Math.floor(s-c)),p=Math.min(i-1,Math.ceil(s+c)),m=K.biome;for(let e=f;e<=p;e++)for(let t=u;t<=d;t++)(t-o)*(t-o)+(e-s)*(e-s)<=l&&(m[e*i+t]=n);at.clear();for(let e of De.children){let t=e.userData.chunk;t&&t.i0<=d&&t.i1>=u-1&&t.j0<=p&&t.j1>=f-1&&at.add(e)}Cr(De,K,at,!0)}let ut=[`tree`,`rock`,`tuft`];function dt(e,t,{type:n=`tree`,density:r=.5,radius:i=2.2,erase:a=!1}={}){if(!K||!G)return 0;if(a)return Wr(G,n||`all`,e,t,i);let o=K.size,s=26/(o-1),c=K.height,l=K.sea,u=K.relief,d=e=>e<0?0:e>=o?o-1:e,f=(e,t)=>c[d(Math.round((t+13)/s))*o+d(Math.round((e+13)/s))],p=(e,t)=>{let n=Math.max(1,Math.min(o-2,Math.round((e+13)/s))),r=Math.max(1,Math.min(o-2,Math.round((t+13)/s))),i=(c[r*o+n+1]-c[r*o+n-1])*u/(2*s),a=(c[(r+1)*o+n]-c[(r-1)*o+n])*u/(2*s);return Math.hypot(i,a)},m=Gr[n]??1.2,h=Math.max(1,Math.round((r||.5)*6)),g=0;for(let r=0;r<h;r++){let r=Math.random()*Math.PI*2,a=Math.sqrt(Math.random())*i,o=e+Math.cos(r)*a,s=t+Math.sin(r)*a,c=f(o,s);if(c<l+.005||p(o,s)>m)continue;let d=(c-l)*u;Ur(G,n,o,d,s,.7+Math.random()*.6,Math.random()*Math.PI*2,.82+Math.random()*.36)&&g++}if(window.__world&&G.userData.counts)for(let e of ut)G.userData.counts[e]=(G.userData.placements[e]||[]).length;return g}let ft=[];function pt(){if(!G)return null;let e=G.userData.placements,t={};for(let n of ut)t[n]=(e[n]||[]).map(e=>({...e}));return t}function mt(){K&&(ft.push({h:K.height.slice(),b:K.biome.slice(),sc:pt(),pl:J.snapshot()}),ft.length>12&&ft.shift())}function ht(){if(!K||!ft.length)return!1;let e=ft.pop();if(K.height.set(e.h),K.biome.set(e.b),e.sc&&G){let t=G.userData.placements;for(let n of ut)t[n]=(e.sc[n]||[]).map(e=>({...e}))}return e.pl&&J.restore(e.pl),Cr(De,K,De.children,!0),st(),!0}let gt=new Set([`boat`,`fish`]),_t=new Set([`person`,`atv`]);function vt(e,t,n){if(!K)return null;let r=Le(t,n)<0;return gt.has(e)&&!r||_t.has(e)&&r?null:J.spawn(e,t,n)}function yt(e,t,n=2.5){return J.removeNear(e,t,n)}function bt(e){let t=``,n=32768;for(let r=0;r<e.length;r+=n)t+=String.fromCharCode.apply(null,e.subarray(r,Math.min(r+n,e.length)));return btoa(t)}function xt(e){let t=atob(e),n=new Uint8Array(t.length);for(let e=0;e<t.length;e++)n[e]=t.charCodeAt(e);return n}let Ct=e=>bt(new Uint8Array(e.buffer,e.byteOffset,e.byteLength)),wt=e=>bt(e);function Tt(){let e=G?G.userData.placements:{},t={};for(let n of ut)t[n]=(e[n]||[]).map(e=>({...e}));return t}function Et(){return K?{v:1,seed:ke,preset:Ae,size:K.size,height:Ct(K.height),biome:wt(K.biome),scatter:Tt(),entities:J.snapshot()}:null}function Dt(){if(!K)return null;let e=hr({seed:ke,size:160,preset:Ae}),t=K.height,n=K.biome,r=[],i=[];for(let n=0;n<t.length;n++)Math.abs(t[n]-e.height[n])>1e-6&&r.push(n,Math.round(t[n]*1e4)/1e4);for(let t=0;t<n.length;t++)n[t]!==e.biome[t]&&i.push(t,n[t]);return{v:1,c:1,seed:ke,preset:Ae,hd:r,bd:i,entities:J.snapshot()}}function Ot(e){G&&(C.remove(G),G.userData.dispose?.()),G=zr(e||{tree:[],rock:[],tuft:[]}),G.userData.counts=ut.reduce((e,t)=>(e[t]=(G.userData.placements[t]||[]).length,e),{}),G.visible=q,C.add(G)}function kt(e){if(!e||e.v!==1)return!1;let t=25600;if(e.height!=null||e.biome!=null){if(typeof e.height!=`string`||typeof e.biome!=`string`)return!1;let n,r;try{n=xt(e.height),r=xt(e.biome)}catch{return!1}if(n.byteLength%4!=0||n.byteLength>>2!=t||r.length<t)return!1;let i=new Float32Array(n.buffer,n.byteOffset,n.byteLength>>2);for(let e=0;e<i.length;e++)if(!Number.isFinite(i[e]))return!1}if(e.hd!=null&&!Array.isArray(e.hd)||e.bd!=null&&!Array.isArray(e.bd))return!1;if(Array.isArray(e.hd))for(let n=0;n<e.hd.length;n+=2){let r=e.hd[n];if(!Number.isInteger(r)||r<0||r>=t||!Number.isFinite(e.hd[n+1]))return!1}if(Array.isArray(e.bd))for(let n=0;n<e.bd.length;n+=2){let r=e.bd[n];if(!Number.isInteger(r)||r<0||r>=t)return!1}ke=e.seed|0,Ae=mr.includes(e.preset)?e.preset:Ae,ft.length=0,Fe(),q=!0,Ie(!0),J.group.visible=!0,$e.group.visible=!0,et.group.visible=!0;for(let e of Ne())e.visible=!1;window.__world&&(window.__world.active=!0);let n=e=>e<0?0:e>1?1:e,r=ur.length;if(e.height&&e.biome){let t=xt(e.height),i=new Float32Array(t.buffer,t.byteOffset,t.byteLength>>2);for(let e=0;e<i.length;e++)K.height[e]=n(i[e]);let a=xt(e.biome);for(let e=0;e<K.biome.length;e++)K.biome[e]=Math.min(r-1,a[e]|0)}else if(e.hd||e.bd){let t=e.hd||[],i=e.bd||[];for(let e=0;e<t.length;e+=2)K.height[t[e]]=n(t[e+1]);for(let e=0;e<i.length;e+=2)K.biome[i[e]]=Math.min(r-1,Math.max(0,i[e+1]|0))}return Cr(De,K,De.children,!0),e.scatter&&Ot(e.scatter),ot(),G&&Kr(G,K,{worldSize:26,baseY:0}),J.restore(e.entities),window.__world&&(window.__world.scatter=G.userData.counts,window.__world.seed=ke,window.__world.preset=Ae),!0}let jt={enter(){De||Fe(),q=!0,Ie(!0),J.group.visible=!0,$e.group.visible=!0,et.group.visible=!0;for(let e of Ne())e.visible=!1;window.__world&&(window.__world.active=!0)},exit(){it=!1,q=!1,Ie(!1),J.group.visible=!1,$e.group.visible=!1,et.group.visible=!1;for(let e of Ne())e.visible=!0;window.__world&&(window.__world.active=!1)},setEditing(e){return it=!!e,B.visible=q&&!it,Oe&&(Oe.visible=q&&!it),$e.group.visible=q&&!it,!it&&q&&ot(),it},get editing(){return it},get waterHidden(){return it&&!B.visible},reroll(){return ke=Math.random()*1e9|0,ft.length=0,Fe(),jt.enter(),ke},reset(){return ft.length=0,Fe(),jt.enter(),ke},setPreset(e){return mr.includes(e)&&(Ae=e,ft.length=0,Fe(),jt.enter()),Ae},sculpt:ct,paintBiome:lt,paintScatter:dt,repoolWater:ot,snapshot:mt,undo:ht,placeEntity:vt,removeEntityNear:yt,heightAt:Le,serialize:Et,serializeCompact:Dt,deserialize:kt,flowPourAt:(e,t,n,r)=>$e.pourAt(e,t,n,r),flowRain:e=>$e.rain(e),flowClear:()=>$e.clear(),get flowTotal(){return $e.totalWater()},flowAt:(e,t)=>$e.cellAt(e,t),flowErosion:(e,t)=>$e.setErosion(e,t),get flowErosionOn(){return $e.erosion},get flowSediment(){return $e.totalSediment()},setSimBackend:e=>$e.setBackend(e),get simBackend(){return $e.backend},_flowReadW:()=>$e._debugReadW(),_flowReadTerr:()=>$e._debugReadTerr(),_flowStepN:(e,t)=>$e._debugStepN(e,t),get terrainGroup(){return De},get biomes(){return ur},get scatterCounts(){return G?G.userData.placements&&ut.reduce((e,t)=>(e[t]=(G.userData.placements[t]||[]).length,e),{}):null},get placedCounts(){return J.counts()},setScatterHidden(e){G&&(G.visible=!e)},get placedLife(){return J},get canUndo(){return ft.length>0},get active(){return q},get seed(){return ke},get preset(){return Ae},get presets(){return mr}},Mt=Qr(),Nt=er({world:jt,catalog:Mt,inspector:_e});function Pt(e,t){return Le(e,t)<0?0:-999}let It=Cn({rig:O,world:{heightAt:Le,waterHeightAt:Pt}});H.group.remove(H.key),C.add(H.key),H.key.castShadow=!0,H.key.shadow.mapSize.set(2048,2048),H.key.shadow.bias=-18e-5,H.key.shadow.normalBias=.028,C.add(H.key.target);function Lt(){let e=H.key.shadow.camera,t=H.extent+4.5;e.left=-t,e.right=t,e.top=t,e.bottom=-t,e.near=1,e.far=48,e.updateProjectionMatrix(),d.shadowMap.needsUpdate=!0}Lt();let Rt=new Se(h.x,h.y),zt=new L(h.x,h.y,{minFilter:o,magFilter:o,depthBuffer:!0,stencilBuffer:!1,depthTexture:Rt}),Bt=new L(h.x,h.y,{minFilter:o,magFilter:o,depthBuffer:!1,stencilBuffer:!1}),Vt=new L(h.x,h.y,{minFilter:o,magFilter:o,depthBuffer:!0,stencilBuffer:!1,samples:4}),Ht=new L(h.x,h.y,{minFilter:o,magFilter:o,depthBuffer:!1,stencilBuffer:!1}),Ut=new L(h.x,h.y,{minFilter:o,magFilter:o,depthBuffer:!1,stencilBuffer:!1}),Wt=Math.max(1,Math.floor(h.x/2)),Gt=Math.max(1,Math.floor(h.y/2)),qt=new L(Wt,Gt,{minFilter:o,magFilter:o,depthBuffer:!1,stencilBuffer:!1}),Jt=new L(Wt,Gt,{minFilter:o,magFilter:o,depthBuffer:!1,stencilBuffer:!1}),Yt=new me,X=new s(-1,1,1,-1,0,1),Xt=new n(new u(2,2));Yt.add(Xt);let Z=new ie({vertexShader:zn,fragmentShader:wi,uniforms:{uScene:{value:zt.texture},uTime:{value:0},uResolution:{value:new de(h.x,h.y)},uGrain:{value:1},uChroma:{value:1},uExposure:{value:1},uAces:{value:0},uBloom:{value:qt.texture},uBloomStrength:{value:0},uGrade:{value:0},uGradeTint:{value:k.grade.tint},uGradeLift:{value:k.grade.lift},uGradeSat:{value:1},uGradeContrast:{value:1},uDither:{value:0},uTonemap:{value:0}}}),Zt=new ie({vertexShader:zn,fragmentShader:Oi,uniforms:{uScene:{value:zt.texture},uThreshold:{value:.78}}}),Qt=new ie({vertexShader:zn,fragmentShader:ki,uniforms:{uScene:{value:qt.texture},uDir:{value:new de}}});function $t(e){Zt.uniforms.uScene.value=e.texture,pn(Zt,qt),Qt.uniforms.uScene.value=qt.texture,Qt.uniforms.uDir.value.set(1.6/Wt,0),pn(Qt,Jt),Qt.uniforms.uScene.value=Jt.texture,Qt.uniforms.uDir.value.set(0,1.6/Gt),pn(Qt,qt),Z.uniforms.uBloom.value=qt.texture;let t=1-f.clamp(k.sunArc.y*2.2,0,1);Z.uniforms.uBloomStrength.value=.85*(.32+.95*t)}let en=e=>{let t=e.map(e=>new I(e));for(;t.length<8;)t.push(new I(0,0,0));return t},tn=[`night`,`dawn`,`noon`,`dusk`],nn={inkgold:tn.map(e=>en(Fi[e])),terminal:tn.map(e=>en(Ii[e]))},an=new ie({vertexShader:zn,fragmentShader:Ti,uniforms:{uScene:{value:Bt.texture},uResolution:{value:new de(h.x,h.y)},uPixelSize:{value:Pi},uPalette:{value:nn.inkgold[2]},uPaletteB:{value:nn.inkgold[2]},uPaletteBlend:{value:0},uPaletteSize:{value:5}}}),sn=new ie({vertexShader:zn,fragmentShader:Ai,uniforms:{uScene:{value:Bt.texture},uResolution:{value:new de(h.x,h.y)},uGridWidth:{value:160},uDither:{value:.55},uPalette:{value:Ni(ji[`8-bit`].palette)},uPaletteSize:{value:1},uUsePalette:{value:1}}}),ln={};for(let e of Mi)ln[e]=ji[e].palette?Ni(ji[e].palette):null;let un=new ie({vertexShader:zn,fragmentShader:Ei,uniforms:{uScene:{value:Bt.texture},uDepth:{value:Rt},uResolution:{value:new de(h.x,h.y)},uBands:{value:4},uToonGain:{value:1.7},uToonGamma:{value:.6},uToonFloor:{value:k.toonFloor},uOutline:{value:k.outline},uNear:{value:.1},uFar:{value:100},uIsPerspective:{value:1}}}),fn=new ie({vertexShader:zn,fragmentShader:Di,uniforms:{uToon:{value:Ht.texture},uPixel:{value:Ut.texture},uBlend:{value:0}}});function pn(e,t){Xt.material=e,d.setRenderTarget(t),d.render(Yt,X)}function mn(){O.setViewport(window.innerWidth,window.innerHeight),d.setSize(window.innerWidth,window.innerHeight);let e=d.getDrawingBufferSize(new de);return F.setSize(e.x,e.y),zt.setSize(e.x,e.y),Bt.setSize(e.x,e.y),Vt.setSize(e.x,e.y),Ht.setSize(e.x,e.y),Ut.setSize(e.x,e.y),Wt=Math.max(1,e.x>>1),Gt=Math.max(1,e.y>>1),qt.setSize(Wt,Gt),Jt.setSize(Wt,Gt),R.uniforms.uResolution.value.set(e.x,e.y),Z.uniforms.uResolution.value.set(e.x,e.y),an.uniforms.uResolution.value.set(e.x,e.y),sn.uniforms.uResolution.value.set(e.x,e.y),un.uniforms.uResolution.value.set(e.x,e.y),e}let hn=rr({renderer:d}),gn=!0;function _n(e,t){let n=t.dpr==null?m:t.dpr,r=Math.min(window.devicePixelRatio,n);Math.abs(d.getPixelRatio()-r)>.001&&(d.setPixelRatio(r),typeof window<`u`&&window.dispatchEvent?window.dispatchEvent(new Event(`resize`)):mn()),gn=t.shadows!==!1,gn||(d.shadowMap.needsUpdate=!1)}let vn=ar({profiler:hn,apply:_n});function yn(){!_&&!g&&hn.frameStart()}function bn(){_||g||(hn.frameEnd(),vn.update())}function xn(e){_=!e,typeof window<`u`&&(window.__paused=_)}function Sn(){try{d.compile(C,O.camera),Xn(1/60,0,{shadowsOn:!0}),Wn(Gn(),zt),d.setRenderTarget(null)}catch(e){typeof console<`u`&&console.warn(`[L79] prewarm`,e)}}let wn=3,Tn=!1,En=!1,Dn=`native`,On=.3,kn=.46,An=[`native`,...Mi],jn={"16-bit":`16-bit`,"8-bit":`8-bit`,gb:`Game Boy`,modern:`Modern`,native:`Pixel`,"1-bit":`1-bit`};typeof window<`u`&&(window.__mode=wn,window.__vector=Tn,window.__era=Dn),typeof window<`u`&&(window.__frames=0),typeof window<`u`&&(window.__loaded=!1);let Mn=0,Nn=new z(1,1,1),Pn=!1;function Fn(e){let t=En?nn.terminal:nn.inkgold,n=e%1*4,r=Math.floor(n)%4;an.uniforms.uPalette.value=t[r],an.uniforms.uPaletteB.value=t[(r+1)%4],an.uniforms.uPaletteBlend.value=n-Math.floor(n)}function In(e){let t=ji[e];t&&(sn.uniforms.uGridWidth.value=t.gridWidth,sn.uniforms.uDither.value=t.dither,sn.uniforms.uUsePalette.value=+!!t.palette,t.palette&&(sn.uniforms.uPalette.value=ln[e],sn.uniforms.uPaletteSize.value=t.palette.length))}function Rn(){Dn!==`native`&&In(Dn)}let Bn=()=>Dn===`native`?an:sn;function Vn(e,t){Ce(!0),C.environment=Ee(),tt.value=1;let n=f.smoothstep(f.clamp(k.sunArc.y,0,1),.22,.8);H.fill.intensity=Hn*(1-.6*n),C.environmentIntensity=Un*(1-.45*n),ve.place(e),B.visible=!1,d.setRenderTarget(F),d.render(C,e),B.visible=!0,d.setRenderTarget(Vt),d.render(C,e),$t(Vt),Z.uniforms.uScene.value=Vt.texture,Z.uniforms.uAces.value=1,Z.uniforms.uGrade.value=1,Z.uniforms.uGrain.value=0,Z.uniforms.uChroma.value=0,Z.uniforms.uDither.value=1,pn(Z,t),ve.place(O.camera)}let Hn=1,Un=.34;function Wn(e,t){let n=!Tn&&(wn===1||wn===2);Ce(n),C.environment=n?Ee():null,tt.value=+!!n;let r=f.smoothstep(f.clamp(k.sunArc.y,0,1),.22,.8);if(H.fill.intensity=n?Hn*(1-.6*r):Hn,n&&(C.environmentIntensity=Un*(1-.45*r)),Z.uniforms.uBloomStrength.value=0,B.visible=!1,d.setRenderTarget(F),d.render(C,O.camera),B.visible=!it,wn===1&&!n)d.setRenderTarget(t),d.render(C,O.camera);else if(wn===1)d.setRenderTarget(Vt),d.render(C,O.camera),$t(Vt),Z.uniforms.uScene.value=Vt.texture,Z.uniforms.uAces.value=1,Z.uniforms.uGrade.value=1,Z.uniforms.uGrain.value=0,Z.uniforms.uChroma.value=0,Z.uniforms.uDither.value=1,pn(Z,t);else if(d.setRenderTarget(n?Vt:zt),d.render(C,O.camera),wn===2)n&&$t(Vt),Z.uniforms.uScene.value=n?Vt.texture:zt.texture,Z.uniforms.uAces.value=+!!n,Z.uniforms.uGrade.value=+!!n,Z.uniforms.uGrain.value=1,Z.uniforms.uChroma.value=1,Z.uniforms.uDither.value=+!!n,pn(Z,t);else{Z.uniforms.uScene.value=zt.texture,Z.uniforms.uAces.value=0,Z.uniforms.uGrade.value=0,Z.uniforms.uGrain.value=0,Z.uniforms.uChroma.value=0,Z.uniforms.uDither.value=0,pn(Z,Bt);let n=O.camera;un.uniforms.uNear.value=n.near,un.uniforms.uFar.value=n.far,un.uniforms.uIsPerspective.value=+!!n.isPerspectiveCamera;let r=e.era?(In(e.era),sn):Bn();e.kind===`pixel`?(pn(r,t),window.__style=`pixel`):e.kind===`toon`?(pn(un,t),window.__style=`toon`):(pn(un,Ht),pn(r,Ut),fn.uniforms.uBlend.value=e.blend,pn(fn,t),window.__style=`blend`)}}function Gn(){let e=Kn(),t=e.kind===`toon`?1:e.kind===`blend`?1-e.blend:0;return R.uniforms.uChromaScale.value=f.lerp(1,.5,t),e}function Kn(){if(wn===1||wn===2)return{kind:`none`};if(wn===7)return{kind:`pixel`};if(wn===8)return{kind:`toon`};let e=O.styleT;return window.__styleT=e,e<=On?{kind:`toon`}:e>=kn?{kind:`pixel`,era:e<.62?`16-bit`:e<.8?`8-bit`:`gb`}:{kind:`blend`,blend:f.smoothstep(e,On,kn),era:`16-bit`}}function qn(e){return wn===1||wn===2?``:Tn&&wn!==7&&wn!==8?`Vector`:e.kind===`toon`?`Toon`:e.kind===`pixel`?jn[e.era||Dn]||`Pixel`:e.kind===`blend`?`Toon → `+(jn[e.era]||`Pixel`):``}function Xn(e,t,{shadowsOn:n=!0,seasonTarget:r=0}={}){typeof window<`u`&&window.__frames++,n&&=gn,se.material.uniforms.uTime.value=t,Z.uniforms.uTime.value=t,k.update(e),H.key.position.copy(k.sunDir).multiplyScalar(24),H.key.color.copy(k.sunColor),H.key.intensity=k.sunIntensity,H.fill.color.copy(k.hemiSky),H.fill.groundColor.copy(k.hemiGround),le.value=k.windowGlow,be.setSun(k.sunArc),be.setParams(k.skyParams),Z.uniforms.uGradeSat.value=k.grade.sat,Z.uniforms.uGradeContrast.value=k.grade.contrast,C.environmentIntensity=.34*(1-.6*f.clamp(k.sunArc.y*1.5,0,1)),Un=C.environmentIntensity;let i=U.overcast;H.key.intensity*=1-.5*i,H.key.color.lerp(w,.45*i),H.fill.intensity=1+.7*i,Hn=H.fill.intensity;let a=f.smoothstep(k.sunDir.y,.06,.34),o=f.lerp(.28,1,1-k.windowGlow),s=n?a*o:0;H.key.shadow.intensity=.72*s,He.value=.52*s,(n&&!Pn||Nn.distanceToSquared(k.sunDir)>2e-5)&&(d.shadowMap.needsUpdate=!0,Nn.copy(k.sunDir)),Pn=n;let c=1-k.windowGlow;Ve.setRGB(f.lerp(.46,1,c),f.lerp(.52,1,c),f.lerp(.74,1,c)),Z.uniforms.uExposure.value=k.exposure,un.uniforms.uToonGain.value=k.toonGain,d.setClearColor(k.horizon,1),Fn(k.t),window.__t=k.t,fe.update(e,t,k),H.update(t),pe.update(e,t,k),P.uniforms.uWakeCount.value=pe.wakeCount,U.update(e,t),P.uniforms.uRainCount.value=U.rainDropCount;let l=U.fog*(1-c);C.fog.density=.016+U.fog*T,D.copy(k.horizon).lerp(E,.85*l),C.fog.color.copy(D),d.setClearColor(D,1),Ke.value=U.fog,se.material.uniforms.uFogAmt.value=.7*U.fog,Ue.value=U.snow,We.value=U.cloud*.55,Ge.x+=e*.018,Ge.y+=e*.009,qe.value+=(r-qe.value)*Math.min(1,e*1.5),nt.value=t,rt.value=.035+.05*i,he.update(e,t,k,U),q&&J.update(e,t,k),Re.visible=!q,Je&&!q&&Je.update(e,t,k),q&&$e.step(e),q&&et.update(e,t,k,{wind:.6*U.cloud,qualityLevel:window.__quality&&window.__quality.level||0});let u=Kn(),p=u.kind===`pixel`||u.kind===`blend`?`pixel`:Tn?`vector`:u.kind===`toon`?`charm`:`realistic`;if(ve.update(e,t,k,U,p,O.camera),j){let[e,t,n]=ee;P.uniforms.uPrev.value=e.texture,P.uniforms.uCurr.value=t.texture,d.setRenderTarget(n),d.render(ne,N),ee=[t,n,e],R.uniforms.uHeight.value=ee[1].texture}if(Mn<2&&typeof document<`u`&&++Mn===2){let e=document.getElementById(`lgr-loader`);e&&e.classList.add(`gone`),window.__loaded=!0}}function Zn(e){wn=e,window.__mode=wn}function Qn(){return Tn=!Tn,Be.value=+!!Tn,window.__vector=Tn,Tn}function $n(e){return Tn=!!e,Be.value=+!!Tn,window.__vector=Tn,Tn}function tr(){return Dn=An[(An.indexOf(Dn)+1)%An.length],window.__era=Dn,Rn(),Dn}function nr(){return En=!En,En}return{updateWorld:Xn,decideStyle:Gn,renderCityPipeline:Wn,renderCityBeautyTo:Vn,styleHintName:qn,setPostMode:Zn,toggleVector:Qn,setVector:$n,cycleEra:tr,togglePalette:nr,setTonemap:e=>{let t=e===`agx`||e===1||e===!0;return Z.uniforms.uTonemap.value=+!!t,typeof window<`u`&&(window.__tonemap=t?`agx`:`aces`),t?`agx`:`aces`},get mode(){return wn},get vector(){return Tn},get sceneEra(){return Dn},renderer:d,drawBuffer:h,scene:C,rig:O,sunRig:k,SIM:256,targets:ee,simScene:ne,simCamera:N,simMaterial:P,grabRT:F,card:oe,backdrop:se,WATER_SIZE:28,water:B,waterMaterial:R,windowGlow:le,landmarkFactory:ue,city:H,cityLife:fe,waterLife:pe,weatherRig:U,clouds:he,inspector:_e,world:jt,catalog:Mt,editor:Nt,pilot:It,spawnSeizeCraft:Ye,get seizeCraft(){return Je?Je.followable:null},profiler:hn,governor:vn,frameStart:yn,frameEnd:bn,setActive:xn,get paused(){return _},get contextLost(){return g},prewarm:Sn,fitShadowFrustum:Lt,SHADOW_DIST:24,sceneDepth:Rt,sceneRT:zt,filmicRT:Bt,toonRT:Ht,pixelRT:Ut,postScene:Yt,postCamera:X,postQuad:Xt,filmicMaterial:Z,pixelMaterial:an,pixelkitMaterial:sn,toonMaterial:un,mixMaterial:fn,PALCACHE:nn,ERA_TEX:ln,runPass:pn,OVERCAST_GREY:w,FOG_DENSITY:T,FOG_NIGHT_TINT:E,_fogColor:D,resize:mn}}var zi=`lgr_hints_`,Bi=!1;function Vi(){if(Bi||typeof document>`u`)return;Bi=!0;let e=document.createElement(`style`);e.textContent=`
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
  }`,document.head.appendChild(e)}function Hi({key:e,title:t=`Tips`,tips:n=[],force:r=!1}={}){let i={key:e,shown:!1,dismissed:!1,seen:!1};if(typeof window<`u`&&(window.__hints=i),typeof document>`u`||!e)return{dismiss(){},el:null};let a=zi+e,o=!1;try{o=localStorage.getItem(a)===`1`}catch{}if(o&&!r)return i.seen=!0,{dismiss(){},el:null};Vi();let s=!!(window.matchMedia&&window.matchMedia(`(prefers-reduced-motion: reduce)`).matches),c=document.createElement(`div`);c.className=`lgr-hints`,c.innerHTML=`<div class="lgr-hints-card">
    <div class="lgr-hints-h">${t}</div>
    <ul>${n.map(e=>`<li>${e}</li>`).join(``)}</ul>
    <button class="lgr-hints-ok">Got it</button>
    <button class="lgr-hints-x" title="Dismiss (Esc)" aria-label="Dismiss">✕</button>
  </div>`,document.body.appendChild(c),i.shown=!0,s?c.classList.add(`on`):requestAnimationFrame(()=>c.classList.add(`on`));let l=!1;function u(e=!0){if(!l){if(l=!0,e)try{localStorage.setItem(a,`1`)}catch{}i.dismissed=!0,window.removeEventListener(`keydown`,d),c.classList.remove(`on`),setTimeout(()=>c.remove(),s?0:300)}}function d(e){e.key===`Escape`&&u(!0)}return window.addEventListener(`keydown`,d),c.querySelector(`.lgr-hints-ok`).addEventListener(`click`,()=>{navigator.vibrate?.(10),u(!0)}),c.querySelector(`.lgr-hints-x`).addEventListener(`click`,()=>{navigator.vibrate?.(10),u(!0)}),{dismiss:u,el:c}}var Ui=null;function Wi(){if(Ui)return Ui;let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return n.addColorStop(0,`rgba(0,0,0,0.60)`),n.addColorStop(.55,`rgba(0,0,0,0.32)`),n.addColorStop(1,`rgba(0,0,0,0.0)`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,128/2,0,Math.PI*2),t.fill(),Ui=new W(e),Ui.colorSpace=V,Ui}function Gi({w:e=.6,d:t=.6,x:r=0,y:i=.002,z:a=0,opacity:o=.5,rotation:s=0}={}){let c=new n(new u(e,t),new S({map:Wi(),transparent:!0,opacity:o,depthWrite:!1,toneMapped:!1}));return c.rotation.x=-Math.PI/2,c.rotation.z=s,c.position.set(r,i,a),c.renderOrder=-1,c.raycast=()=>{},c}function Ki({yawLimit:e=80,pitchUp:t=32,pitchDown:n=20,sensitivity:r=.16,keySpeed:i=70,damp:a=9}={}){let o=Math.PI/180,s=(e,t,n)=>e<t?t:e>n?n:e,c=0,l=0,u=0,d=0;return{addDrag(i,a){u=s(u-i*r,-e,e),d=s(d-a*r,-n,t)},addKeys(r,{left:a,right:o,up:c,down:l}){let f=i*r;a&&(u=s(u+f,-e,e)),o&&(u=s(u-f,-e,e)),c&&(d=s(d+f,-n,t)),l&&(d=s(d-f,-n,t))},recenter(){u=0,d=0},update(e){let t=1-Math.exp(-a*e);c+=(u-c)*t,l+=(d-l)*t},get yaw(){return c*o},get pitch(){return l*o},get active(){return Math.abs(c)>.05||Math.abs(l)>.05}}}var qi=null;function Ji(){if(qi)return qi;let e=document.createElement(`canvas`);e.width=e.height=256;let t=e.getContext(`2d`),n=t.createRadialGradient(256/2,256/2,256*.32,256/2,256/2,256*.72);return n.addColorStop(0,`rgba(0,0,0,0)`),n.addColorStop(1,`rgba(0,0,0,1)`),t.fillStyle=n,t.fillRect(0,0,256,256),qi=new W(e),qi.colorSpace=V,qi}function Yi({strength:e=.55,dist:t=.5}={}){let r=new n(new u(1,1),new S({map:Ji(),transparent:!0,opacity:e,depthTest:!1,depthWrite:!1,toneMapped:!1}));r.renderOrder=9999,r.raycast=()=>{},r.frustumCulled=!1;let i=new z;return r.fit=e=>{e.getWorldDirection(i),r.position.copy(e.position).addScaledVector(i,t),r.quaternion.copy(e.quaternion);let n=2*Math.tan(f.degToRad(e.fov)*.5)*t*1.05;r.scale.set(n*e.aspect,n,1)},r}var Xi=``+new URL(`office-dressed2-CNZL1Pge.png`,import.meta.url).href,Zi=``+new URL(`office-night2-Tdv47G8J.png`,import.meta.url).href,Qi=``+new URL(`office-modern-CQqt-EK1.png`,import.meta.url).href,$i=``+new URL(`office-charm2-qAn3JlVo.png`,import.meta.url).href;function ea(){let e=document.createElement(`canvas`);e.width=e.height=256;let t=e.getContext(`2d`);t.fillStyle=`#6e4a2c`,t.fillRect(0,0,256,256);for(let e=0;e<150;e++){let e=Math.random()*256,n=.7+Math.random()*.7;t.strokeStyle=`rgba(${Math.round(110*n)},${Math.round(74*n)},${Math.round(44*n)},${.16+Math.random()*.28})`,t.lineWidth=.5+Math.random()*1.6,t.beginPath(),t.moveTo(e,0);for(let n=0;n<=256;n+=14)t.lineTo(e+Math.sin(n*.05+e)*3,n);t.stroke()}t.strokeStyle=`rgba(30,18,8,0.5)`,t.lineWidth=2;for(let e of[256*.34,256*.67])t.beginPath(),t.moveTo(0,e),t.lineTo(256,e),t.stroke();let n=new W(e);return n.colorSpace=V,n.wrapS=n.wrapT=_e,n}function Q(e,t,r,i,{rough:a=.62,metal:o=0,x:s=0,y:l=0,z:u=0,emissive:d=null,emissiveIntensity:f=1,map:p=null,mapRepeat:m=null}={}){let h=p;p&&m&&(h=p.clone(),h.needsUpdate=!0,h.wrapS=h.wrapT=_e,h.repeat.set(m[0],m[1]));let g=new n(new U(e,t,r),new c({color:h?`#ffffff`:i,roughness:a,metalness:o,...h?{map:h}:{},...d?{emissive:d,emissiveIntensity:f}:{}}));return g.position.set(s,l,u),g}function ta(){let e=document.createElement(`canvas`);e.width=512,e.height=304;let t=e.getContext(`2d`);t.fillStyle=`#fff`,t.fillRect(0,0,512,304);let n=.13*512,r=.87*512,i=.1*304,a=.66*304;return t.filter=`blur(7px)`,t.fillStyle=`#000`,t.beginPath(),t.moveTo(80.56,i),t.arcTo(r,i,r,a,14),t.arcTo(r,a,n,a,14),t.arcTo(n,a,n,i,14),t.arcTo(n,i,r,i,14),t.closePath(),t.fill(),t.filter=`none`,new W(e)}function na({tier:e=`corner`,layout:t=`straight-on`}={}){let r=new me,i=new fe(43,1,.1,100),o=new z(0,1.62,4.35),s=new z(0,1.12,-1);i.position.copy(o),i.lookAt(s);let l=Ki({yawLimit:80,pitchUp:34,pitchDown:20}),d=new xe(0,0,0,`YXZ`),p=new _,m=new a;r.add(m);let g=new a,v=new a,y=new a,b=new a,x=new a;m.add(g,v,y,b,x);let C=[],w=`#4a3322`,E=`#3a2618`,O=`#5b3d27`,k=`#6e4a30`,A=`#5a5650`,j=ea();g.add(Q(11,.2,11,`#3c2a1c`,{rough:.5,y:-.1,map:j,mapRepeat:[5,5]})),g.add(Q(11,.2,11,`#3a2a1d`,{rough:.9,y:3,map:j,mapRepeat:[4,4]}));for(let e of[-2.4,0,2.4])g.add(Q(.18,.16,7.4,E,{rough:.7,x:e,y:2.9,z:0,map:j,mapRepeat:[1,4]}));for(let e of[-2,.4])g.add(Q(7.4,.16,.18,E,{rough:.7,x:0,y:2.88,z:e,map:j,mapRepeat:[4,1]}));function ee(e){let t=new a;t.add(Q(.2,3.2,8,w,{rough:.7,x:e*3.6,y:1.5,z:0,map:j,mapRepeat:[3,1.4]}));let r=e*3.45;t.add(Q(.06,.22,8,E,{x:r,y:.13,z:0})),t.add(Q(.08,.16,8,E,{x:r,y:2.84,z:0})),t.add(Q(.05,.05,8,E,{x:r,y:1,z:0}));for(let e of[-2.6,-1.3,1.3,2.6])t.add(Q(.05,1.6,.06,E,{x:r,y:1.95,z:e}));for(let e of[-2.6,-1.3,1.3,2.6])t.add(Q(.05,.7,.06,E,{x:r,y:.6,z:e}));let i=new n(new u(1.5,1),new c({map:ua(e),roughness:.8}));i.position.set(e*3.49,1.7,.4),i.rotation.y=-e*Math.PI/2,t.add(Q(.06,1.18,1.68,`#2a1c10`,{x:e*3.52,y:1.7,z:.4}),i);let o=new n(new u(1,1.3),new c({map:ua(-e),roughness:.8}));o.position.set(e*3.49,1.78,-2),o.rotation.y=-e*Math.PI/2,t.add(Q(.06,1.46,1.16,`#2a1c10`,{x:e*3.52,y:1.78,z:-2}),o),t.add(Q(.12,.3,.16,`#2a1c10`,{x:e*3.4,y:2.2,z:2.2}));let s=new R(new ve({map:la(),color:`#ffcf8a`,transparent:!0,opacity:.5,depthWrite:!1,blending:2}));return s.scale.set(.6,.75,1),s.position.set(e*3.32,2.34,2.2),s.raycast=()=>{},t.add(s),t}g.add(ee(-1),ee(1));let ne=new a;ne.add(Q(.3,1.9,1.5,O,{rough:.5,y:.95}));for(let e of[.4,.95,1.5])ne.add(Q(.3,.04,1.46,`#3a2c1e`,{y:e}));let N=[`#7a3a2a`,`#2a4a6a`,`#b08a3a`,`#3a5a3a`,`#6a2a4a`,`#8a5a2a`];for(let e of[.6,1.15,1.7])for(let t=0;t<7;t++)ne.add(Q(.18,.3,.11,N[(t+Math.round(e))%N.length],{x:.02,y:e-.06,z:-.6+t*.17}));ne.position.set(-3.34,0,-1.9),g.add(ne),g.add(Gi({w:1,d:1.8,x:-3.2,y:.02,z:-1.9,opacity:.4}));let L=new a;L.add(Q(.5,.1,.5,`#4a3526`,{rough:.7,y:.45})),L.add(Q(.5,.55,.08,`#4a3526`,{rough:.7,y:.72,z:-.21}));for(let[e,t]of[[-.2,-.2],[.2,-.2],[-.2,.2],[.2,.2]])L.add(Q(.05,.45,.05,`#2a1c10`,{x:e,y:.22,z:t}));L.position.set(2.7,0,2.6),L.rotation.y=-.5,g.add(L),g.add(Gi({w:.7,d:.7,x:2.7,y:.02,z:2.6,opacity:.42}));let re=new u(3,2.5),ie=new u(3,2.5),ae=new S({color:`#ffffff`,toneMapped:!1}),oe=new S({color:`#ffffff`,toneMapped:!1}),se=-3.7,ce=1.55,B=f.degToRad(30),le=3/2*Math.cos(B),ue=se+3/2*Math.sin(B),de=new n(re,ae);de.position.set(-le,ce,ue),de.rotation.y=B;let pe=new n(ie,oe);pe.position.set(le,ce,ue),pe.rotation.y=-B;let he=new S({color:`#ffffff`,toneMapped:!1}),ge=new n(new u(5.4,2.6),he);ge.position.set(0,ce,-3.5500000000000003),ge.visible=!1,y.add(de,pe,ge);let _e=new a;_e.add(Q(.08,2.7,.08,E,{x:0,y:ce,z:ue+3/2*Math.sin(B)+.02}));for(let[e,t,n]of[[-le,ue,B],[le,ue,-B]]){let r=new a;r.add(Q(3.05,.09,.09,E,{y:1.3})),r.add(Q(3.05,.09,.09,E,{y:-1.25})),r.add(Q(.09,2.6,.09,E,{x:-1.5})),r.position.set(e,ce,t),r.rotation.y=n,_e.add(r)}_e.add(Q(5.4,.5,.3,O,{x:0,y:.25,z:ue+.5})),g.add(_e);let W=new a;W.add(Q(11,3.2,.2,w,{rough:.7,x:0,y:1.5,z:se-.05,map:j,mapRepeat:[4,1.4]})),W.add(Q(5.8,.14,.12,E,{x:0,y:2.9000000000000004,z:-3.5})),W.add(Q(5.8,.14,.12,E,{x:0,y:ce-1.35,z:-3.5})),W.add(Q(.14,2.84,.12,E,{x:-2.8,y:ce,z:-3.5})),W.add(Q(.14,2.84,.12,E,{x:2.8,y:ce,z:-3.5})),W.add(Q(.09,2.6,.09,E,{x:0,y:ce,z:-3.49})),W.add(Q(5.4,.5,.3,O,{x:0,y:.25,z:-3.35}));let ye=new a;ye.add(Q(2.4,.9,.55,O,{rough:.42,y:.45,z:0})),ye.add(Q(2.46,.06,.58,k,{rough:.3,y:.91,z:0}));for(let e of[-.62,0,.62])ye.add(Q(.66,.72,.03,`#4a3120`,{x:e,y:.45,z:.285}));for(let e of[-.62,0,.62])ye.add(Q(.05,.04,.05,`#caa15a`,{x:e+.2,y:.45,z:.31,metal:.6}));let be=[`#7a3a2a`,`#2a4a6a`,`#b08a3a`,`#3a5a3a`];for(let e=0;e<4;e++)ye.add(Q(.1,.26+e%2*.05,.2,be[e],{x:-.95+e*.13,y:1.07,z:-.06}));ye.add(Q(.04,.34,.42,`#241a12`,{x:.7,y:1.12,z:-.02})),ye.position.set(-3.9,0,-3.25),W.add(ye),W.add(Gi({w:2.8,d:.95,x:-3.9,y:.02,z:-3.25,opacity:.45}));for(let[e,t]of[[-3.55,-1],[3.55,1]]){let r=new a,i=new n(new u(.78,.98),new c({map:ua(t),roughness:.82}));i.position.z=.05,r.add(Q(.06,1.12,.92,`#241a10`,{}),i),r.position.set(e,1.45,-3.5700000000000003),W.add(r)}for(let e of[-3.55,3.55]){W.add(Q(.16,.32,.13,`#2a1c10`,{x:e,y:2.35,z:-3.5}));let t=new R(new ve({map:la(),color:`#ffcf8a`,transparent:!0,opacity:.5,depthWrite:!1,blending:2}));t.scale.set(.55,.7,1),t.position.set(e,2.5,-3.42),t.raycast=()=>{},W.add(t)}W.visible=!1,g.add(W),g.add(Q(.4,.06,.4,`#1a130c`,{y:2.94,z:1.3}));let Se=new n(new H(.16,20),new S({color:`#ffe6b0`,toneMapped:!1}));Se.position.set(0,2.9,1.3),Se.rotation.x=Math.PI/2,g.add(Se);for(let[e,t]of[[-1.6,-1],[1.6,-1],[-1.6,-2.6],[1.6,-2.6],[0,-2.6]]){g.add(Q(.28,.05,.28,`#1a130c`,{y:2.95,x:e,z:t}));let r=new n(new H(.1,16),new S({color:`#ffe6b0`,toneMapped:!1}));r.position.set(e,2.915,t),r.rotation.x=Math.PI/2,r.raycast=()=>{},g.add(r)}g.add(ia(C,{x:-3.46,y:2.15,z:.2,ry:Math.PI/2,face:`#efe2c8`,rim:`#2a1c10`})),g.add(Q(3.4,.03,2.4,`#3a1410`,{rough:.98,x:0,y:.012,z:1.95})),g.add(Q(3,.04,2,`#6e2a26`,{rough:.96,x:0,y:.02,z:1.95}));let Ce=new a;Ce.add(Q(.32,.32,.32,`#7a4a2a`,{rough:.8,y:.16}));for(let e=0;e<6;e++){let t=Q(.05,.55,.13,`#356a32`,{rough:.7,y:.32});t.geometry.translate(0,.27,0),t.rotation.z=(e/6-.5)*1.1,t.rotation.x=Math.sin(e*1.3)*.22,Ce.add(t)}Ce.position.set(2.7,0,.4),g.add(Ce),g.add(Gi({w:.7,d:.7,x:2.7,y:.03,z:.4,opacity:.45})),v.add(Q(11,.2,11,`#403d38`,{rough:.85,y:-.1})),v.add(Q(11,.2,11,`#1c1a17`,{rough:.95,y:2.8})),v.add(Q(7,3,.2,A,{rough:.92,x:0,y:1.4,z:-2.9})),v.add(Q(.2,3,6,A,{rough:.92,x:-3.2,y:1.4,z:-.2})),v.add(Q(.2,3,6,A,{rough:.92,x:3.2,y:1.4,z:-.2}));for(let e of[-1.6,-.4]){let t=new n(new D(.07,.07,6,10),new c({color:`#6b6258`,roughness:.6,metalness:.4}));t.rotation.z=Math.PI/2,t.position.set(0,2.62,e),v.add(t)}let we=new S({color:`#ffffff`,toneMapped:!1}),Te=new n(new u(1.9,1.2),we);Te.position.set(0,1.5,-2.79),v.add(Te),v.add(Q(2.06,1.36,.06,`#241a12`,{x:0,y:1.5,z:-2.83})),v.add(Q(.04,.34,.04,`#1a1410`,{x:-.1,y:2.45,z:-.4}));let Ee=new n(new H(.1,16),new S({color:`#ffdb8a`,toneMapped:!1}));Ee.position.set(-.1,2.26,-.4),Ee.rotation.x=Math.PI/2,v.add(Ee);let De=new a;De.add(Q(1.3,.05,.32,`#3a2c1e`,{x:0,y:0,z:0}));let G=[`#7a3a2a`,`#2a4a6a`,`#b08a3a`,`#3a5a3a`,`#6a2a4a`];for(let e=0;e<8;e++)De.add(Q(.12,.34,.24,G[e%G.length],{x:-.55+e*.14,y:.2,z:0}));De.position.set(-2.3,1.5,-2.66),v.add(De);let Oe=new a;Oe.add(Q(.34,.34,.34,`#7a4a2a`,{y:.17}));let K=new a;for(let e=0;e<6;e++){let t=Q(.05,.5,.14,`#3a7a3a`,{rough:.7});t.geometry.translate(0,.25,0),t.rotation.z=(e/6-.5)*1.2,t.rotation.x=Math.sin(e)*.25,K.add(t)}K.position.y=.34,Oe.add(K),Oe.position.set(2.45,0,-1.4),v.add(Oe),v.add(ia(C,{x:1.9,y:2.1,z:-2.78,ry:0,face:`#d8d2c4`,rim:`#1a130c`}));let q=new a;q.add(Q(3.4,.12,1.5,k,{rough:.32,y:.86,z:1.5,map:j,mapRepeat:[3,1.4]})),q.add(Q(3.2,.78,1.36,O,{y:.46,z:1.5,map:j,mapRepeat:[3,1]}));for(let e of[.66,.4,.14])q.add(Q(.9,.2,.04,`#4a3120`,{x:1.05,y:e,z:2.2}));q.add(Q(.12,.04,.04,`#caa15a`,{x:1.05,y:.66,z:2.23,metal:.6}));let ke=new n(new D(.05,.045,.1,16),new c({color:`#d8cbb4`,roughness:.6}));ke.position.set(-.55,.97,1.95);let Ae=new n(new P(.035,.012,8,14),new c({color:`#d8cbb4`,roughness:.6}));Ae.position.set(-.61,.97,1.95),Ae.rotation.y=Math.PI/2,q.add(ke,Ae);let je=new R(new ve({map:la(),color:`#fff4e0`,transparent:!0,opacity:0,depthWrite:!1,blending:2}));je.scale.set(.12,.18,1),je.position.set(-.55,1.05,1.95),je.raycast=()=>{},q.add(je),q.add(Q(.26,.03,.34,`#efe7d4`,{rough:.85,x:.5,y:.935,z:1.9})),m.add(q);let Me=new a;Me.add(Q(.06,.5,.06,`#2a1c10`,{x:-1.15,y:1.15,z:1.6}));let Ne=new n(new F(.22,.26,16,1,!0),new c({color:`#c2802e`,roughness:.5,side:2,emissive:`#3a2208`,emissiveIntensity:.6}));Ne.position.set(-1.15,1.42,1.6),Me.add(Ne);let Pe=new T(`#ffb15a`,7,7,1.8);Pe.position.set(-1.15,1.34,1.6),Me.add(Pe);let Fe=new R(new ve({map:la(),color:`#ffcf8a`,transparent:!0,opacity:.55,depthWrite:!1,blending:2}));Fe.scale.set(.85,.85,1),Fe.position.set(-1.15,1.35,1.6),Fe.raycast=()=>{},Me.add(Fe),Me.position.x=-.3,m.add(Me);let Ie=new a;Ie.add(Q(.62,.03,.42,`#1c1c20`,{y:.93,z:1.5,metal:.4,rough:.4}));let Le=new n(new U(.62,.4,.025),new c({color:`#0a0c10`,emissive:`#2a4a6a`,emissiveIntensity:.7,roughness:.3}));Le.position.set(0,1.14,1.31),Le.rotation.x=-.32,Ie.add(Le),Ie.userData.role=`laptop`,m.add(Ie);let J=new a;J.add(Q(.26,.07,.34,`#15151a`,{x:1,y:.93,z:1.5}));let Re=Q(.3,.06,.08,`#101015`,{x:1,y:1,z:1.34,emissive:`#234a6a`,emissiveIntensity:.4});J.add(Re),J.userData.role=`phone`,m.add(J);let ze=new h(`#8a6a42`,`#1c130a`,.78);r.add(ze);let Be=new M(`#ffd9a0`,9,9,.7,.5,1.2);Be.position.set(0,2.95,1.3),Be.target.position.set(0,.86,1.5),r.add(Be,Be.target);let Ve=aa(!1),He=aa(!0),Ue=.62,We=1.32,Ge=1.22,Ke=1.78,qe=new R(new ve({map:Ve,transparent:!0,depthWrite:!1}));qe.scale.set(Ue,Ue,1),qe.position.set(We,Ge,Ke),qe.userData.role=`cat`,m.add(qe);let Je=new R(new ve({map:sa(),transparent:!0,depthWrite:!1,opacity:0}));Je.scale.set(.3,.3,1),Je.raycast=()=>{},m.add(Je);let Ye=0;function Xe(){Ye=1.3}let Ze=-.95,Qe=1.06,$e=1.95,et=.62,Y=.42,tt=.34,nt=new a;nt.position.set(Ze,Qe,$e),nt.add(Q(et,.05,tt,`#3a3026`,{y:-.19}));let rt=new n(new U(et-.04,Y-.08,tt-.04),new c({color:`#1f9fc0`,transparent:!0,opacity:.26,roughness:.1,emissive:`#0a3a4a`,emissiveIntensity:.4,depthWrite:!1}));rt.position.y=.02,nt.add(rt);for(let e of[-1,1])for(let t of[-1,1])nt.add(Q(.03,Y,.03,`#20262c`,{x:e*(et/2-.015),z:t*(tt/2-.015),metal:.5}));let it=new n(new U(et,Y,tt),new S({visible:!1}));it.userData.role=`tank`,nt.add(it);let at=new T(`#5fd8ff`,0,3,2);nt.add(at);let ot=[ca(`#e8a23c`),ca(`#d85a6a`),ca(`#6cc0e0`)],st=[],ct=Y/2-.12;for(let e=0;e<3;e++){let t=new R(new ve({map:ot[e],transparent:!0,depthWrite:!1})),n=.15-e*.015;t.userData={sz:n,sp:.6+e*.22,ph:e*2.1,ax:.21*(.7+.1*e),ay:ct,az:.09000000000000001,prevx:0},t.scale.set(n,n,1),st.push(t),nt.add(t)}let lt=la(),ut=[];for(let e=0;e<5;e++){let t=new R(new ve({map:lt,color:`#cfeffb`,transparent:!0,opacity:.5,depthWrite:!1}));t.userData={ph:e/5,sp:.16+Math.random()*.06,x:-.1+e%3*.07},t.scale.setScalar(.03+e%2*.015),t.raycast=()=>{},ut.push(t),nt.add(t)}let dt=new R(new ve({map:lt,color:`#c8a24a`,transparent:!0,opacity:0,depthWrite:!1}));dt.scale.setScalar(.04),dt.raycast=()=>{},nt.add(dt);let ft=0;function pt(){ft=3,dt.position.set(-.05,ct,0),dt.material.opacity=1}m.add(nt);let mt=new a;for(let e=0;e<8;e++){let t=new R(new ve({map:lt,color:`#ffd9a0`,transparent:!0,opacity:0,depthWrite:!1,blending:2}));t.scale.setScalar(.018),t.userData={ph:e*.9,sp:.1+e%3*.04,r:.1+e%4*.03},t.raycast=()=>{},mt.add(t)}mt.position.set(-1.45,1.2,1.6),m.add(mt);let ht=new a,gt=.925;ht.add(Gi({w:4,d:2,x:0,y:.045,z:1.55,opacity:.5})),ht.add(Gi({w:.95,d:.62,x:0,y:gt,z:1.42,opacity:.42})),ht.add(Gi({w:.3,d:.3,x:-.55,y:gt,z:1.95,opacity:.4})),ht.add(Gi({w:.42,d:.46,x:.5,y:gt,z:1.9,opacity:.35})),ht.add(Gi({w:.42,d:.46,x:1,y:gt,z:1.5,opacity:.42})),ht.add(Gi({w:.7,d:.42,x:Ze,y:gt,z:1.95,opacity:.42})),ht.add(Gi({w:.55,d:.4,x:1.32,y:gt,z:1.78,opacity:.4})),ht.add(Gi({w:.34,d:.34,x:-1.45,y:gt,z:1.6,opacity:.35})),m.add(ht),[q,Me,Ie,J,qe,nt,mt,ht].forEach(e=>b.add(e));function _t(e,t,r,i,a,o,s){let c=new n(new U(t,r,i),new S({visible:!1}));c.position.set(a,o,s),c.userData.role=e,x.add(c)}_t(`laptop`,.95,.6,.7,0,1.05,1.4),_t(`phone`,.5,.4,.5,1,.98,1.42),_t(`cat`,.62,.74,.5,We,Ge,Ke),_t(`tank`,et,Y,.5,Ze,Qe,$e);let vt=ra(),yt={dressed2:new te().load(Xi),night2:new te().load(Zi),modern:new te().load(Qi),charm:new te().load($i)},bt=[`dressed2`,`night2`,`modern`,`charm`];for(let e of bt)yt[e].colorSpace=V;let xt=ta(),St=new n(new u(1,1),new S({map:yt.dressed2,alphaMap:xt,transparent:!0,toneMapped:!1}));St.position.set(0,1.45,-5),St.visible=!1,St.raycast=()=>{},r.add(St);let Ct=Yi({strength:.5});r.add(Ct);let wt=`3d`,Tt=`painted`;function Et(){let e=zt===`corner`,t=wt!==`3d`,n=t&&Tt===`painted`;g.visible=e&&!t,v.visible=!e&&!t,y.visible=t||e,St.visible=t,b.visible=!n,It()}function Dt(e){return wt=bt.includes(e)?e:`3d`,wt!==`3d`&&(St.material.map=yt[wt],St.material.needsUpdate=!0),Et(),wt}function Ot(e){return Tt=e===`3d`?`3d`:`painted`,Et(),Tt}let kt=Pe.intensity,At=Le.material.emissiveIntensity,jt=new I;function Mt(e,t,n){let r=n?n.windowGlow:0,a=r>.55;qe.material.map=a?He:Ve,Ye>0&&(Ye=Math.max(0,Ye-e));let c=Ye>0?Math.sin((1.3-Ye)/1.3*Math.PI):0,u=a?.012*Math.sin(t*1.2):.03*Math.sin(t*2.4);qe.scale.set(Ue,Ue*(1+u+.12*c),1),qe.position.y=Ge+.06*c,Je.material.opacity=c,Je.position.set(We,1.72+.5*(1-Ye/1.3),Ke),Je.scale.setScalar(.22+.1*c),ft>0&&(ft=Math.max(0,ft-e),dt.position.y=Math.max(-.09,dt.position.y-e*.06),dt.material.opacity=ft>.3?1:ft/.3);for(let e of st){let n=e.userData,r=Math.sin(t*n.sp+n.ph)*n.ax,i=Math.sin(t*n.sp*.8+n.ph*1.7)*n.ay*.7,a=Math.cos(t*n.sp*.6+n.ph)*n.az,o=ft>0?dt.position.x:r,s=ft>0?dt.position.y:i,c=ft>0?dt.position.z:a,l=ft>0?.05:.1;e.position.x+=(o-e.position.x)*l,e.position.y+=(s-e.position.y)*l,e.position.z+=(c-e.position.z)*l,e.scale.x=(e.position.x>=n.prevx?1:-1)*n.sz,n.prevx=e.position.x}for(let e of ut){let n=(t*e.userData.sp+e.userData.ph)%1;e.position.set(e.userData.x+Math.sin(t*2+e.userData.ph*9)*.015,-.09+2*ct*n,.02),e.material.opacity=.5*Math.sin(n*Math.PI)}at.intensity=2.6*r,rt.material.emissiveIntensity=.4+.9*r,Pe.intensity=kt*(.97+.03*Math.sin(t*7)*Math.sin(t*2.3)),Le.material.emissiveIntensity=At*(.85+.15*Math.sin(t*3.1+1)),Re.material.emissiveIntensity=.4*(.65+.35*Math.sin(t*2.2)),jt.setRGB(1,.85,.62),mt.children.forEach((e,n)=>{let i=e.userData,a=(t*i.sp+i.ph)%1;e.position.set(Math.cos(t*.5+i.ph*5)*i.r,-.15+a*.45,Math.sin(t*.4+i.ph*5)*i.r),e.material.opacity=(.1+.18*r)*Math.sin(a*Math.PI)});let m=t*.4%1;je.position.y=1.04+m*.22,je.position.x=-.55+Math.sin(t*1.5)*.02,je.material.opacity=.26*Math.sin(m*Math.PI),je.scale.set(.1+m*.08,.16+m*.12,1),K.rotation.z=Math.sin(t*.8)*.05,K.rotation.x=Math.sin(t*.6+1)*.04;let h=n?n.t%1:0;for(let e of C)e.rotation.z=-h*Math.PI*2;if(vt.update(e),St.visible){let e=i.position.z-St.position.z,t=2*Math.tan(f.degToRad(i.fov)*.5)*e*1.18;St.scale.set(t*i.aspect,t,1);let n=.55+.45*(1-r);St.material.color.setRGB(n,n*.97,n*.92)}i.position.set(o.x+Math.sin(t*.5)*.04,o.y+Math.sin(t*.7)*.02,o.z),i.lookAt(s),l.update(e),d.set(l.pitch,l.yaw,0,`YXZ`),i.quaternion.multiply(p.setFromEuler(d)),Ct.fit(i)}function Nt(e,t=e){ae.map=e,oe.map=t,ae.needsUpdate=!0,oe.needsUpdate=!0}function Pt(e){he.map=e,he.needsUpdate=!0}let Ft=`corner`;function It(){let e=Ft===`corner`;de.visible=pe.visible=e,ge.visible=!e||wt!==`3d`,_e.visible=e,W.visible=!e}function Lt(e){return Ft=e===`straight-on`?`straight-on`:`corner`,It(),Ft}function Rt(e){we.map=e,we.needsUpdate=!0}let zt=e;function Bt(e){zt=e===`basement`?`basement`:`corner`;let t=zt===`corner`;return Et(),Be.intensity=t?9:3.2,ze.intensity=t?.78:.82,ze.color.set(t?`#6a5238`:`#7a5a34`),zt}return Bt(zt),Lt(t),{scene:r,camera:i,update:Mt,setCityTexture:Nt,setStraightCityTexture:Pt,setVignetteTexture:Rt,setFitout:Bt,setSkin:Dt,setProps:Ot,setLayout:Lt,petCat:Xe,feedFish:pt,look:l,vignette:vt,get interactables(){return wt!==`3d`&&Tt===`painted`?x.children:[Ie,J,qe,it]},get tier(){return zt},get skin(){return wt},get props(){return Tt},get layout(){return Ft}}}function ra(){let e=new me;e.background=new I(`#7fb0dd`);let t=new s(-1.4,1.4,.9,-.9,0,10);t.position.set(0,0,5);let r=(e,t={})=>new S({color:e,toneMapped:!1,...t}),i=(e,t,i,a,o,s,c)=>{let l=new n(new u(e,t),r(s,c));return l.position.set(i,a,o),l};e.add(i(3.2,.9,.5,-.95,1,`#2a4a30`)),e.add(i(3.2,.7,-.7,-1.05,2,`#1d3724`)),e.add(i(.06,.3,-.95,-.55,3,`#3a2a1a`));let a=new n(new H(.22,18),r(`#234a2a`));a.position.set(-.95,-.32,3),e.add(a),e.add(i(.04,.55,.9,-.55,3,`#20242a`));let o=new n(new H(.1,16),r(`#ffd98a`,{transparent:!0,opacity:0}));o.position.set(.9,-.26,3.1),e.add(o);let c=new n(new H(.16,24),r(`#fff4d8`));e.add(c);let l=[];for(let[t,i]of[[-1,.5],[-.6,.7],[.2,.6],[.7,.72],[1.05,.45],[-.2,.78],[.45,.4]]){let a=new n(new H(.015,8),r(`#ffffff`,{transparent:!0,opacity:0}));a.position.set(t,i,.5),l.push(a),e.add(a)}let d=new I(`#141d33`),p=new I(`#7fb6e0`),m=new I(`#d6824a`),h=new I(`#fff0cc`),g=new I(`#cdd8ef`),_=.34;function v(t){_=(_+t*.04)%1;let n=_*Math.PI*2,r=-Math.cos(n);c.position.set(Math.sin(n)*1.15,r*.66+.06,0);let i=f.smoothstep(r,-.18,.5),a=f.smoothstep(.32,0,Math.abs(r));e.background.copy(d).lerp(p,i).lerp(m,a*.45),c.material.color.copy(r>0?h:g),o.material.opacity=1-i;let s=(1-i)*.85;for(let e of l)e.material.opacity=s}return{scene:e,camera:t,update:v}}function ia(e,{x:t,y:r,z:i,ry:o=0,face:s=`#efe2c8`,rim:l=`#2a1c10`}){let d=new a,f=new n(new H(.2,28),new c({color:l,roughness:.6})),p=new n(new H(.17,28),new c({color:s,roughness:.7}));p.position.z=.01;let m=new n(new u(.018,.14),new c({color:`#1a130c`,roughness:.5}));return m.geometry.translate(0,.05,0),m.position.z=.02,e.push(m),d.add(f,p,m),d.position.set(t,r,i),d.rotation.y=o,d}function aa(e){let t=document.createElement(`canvas`);t.width=t.height=128;let n=t.getContext(`2d`),r=`#e08a3c`,i=`#b96a26`,a=`#3a2410`;if(n.lineJoin=`round`,e){n.fillStyle=r,n.beginPath(),n.ellipse(64,78,44,26,0,0,7),n.fill(),n.fillStyle=i,n.beginPath(),n.ellipse(64,86,44,16,0,0,7),n.fill(),n.fillStyle=r,n.beginPath(),n.arc(36,70,20,0,7),n.fill(),n.fillStyle=r,oa(n,24,56,34,44,42,58),oa(n,40,54,50,44,54,60),n.strokeStyle=i,n.lineWidth=7,n.lineCap=`round`,n.beginPath(),n.moveTo(100,70),n.quadraticCurveTo(112,90,88,96),n.stroke(),n.strokeStyle=a,n.lineWidth=2.5,n.beginPath(),n.arc(30,70,5,.1,Math.PI-.1),n.stroke(),n.strokeStyle=i,n.lineWidth=3;for(let e of[60,74,88])n.beginPath(),n.moveTo(e,58),n.lineTo(e,70),n.stroke()}else{n.fillStyle=r,n.beginPath(),n.ellipse(64,86,30,34,0,0,7),n.fill(),n.fillStyle=`#f3c98a`,n.beginPath(),n.ellipse(64,92,14,22,0,0,7),n.fill(),n.strokeStyle=i,n.lineWidth=8,n.lineCap=`round`,n.beginPath(),n.moveTo(92,100),n.quadraticCurveTo(116,86,104,60),n.stroke(),n.fillStyle=r,n.beginPath(),n.arc(64,48,24,0,7),n.fill(),n.fillStyle=r,oa(n,44,34,50,18,60,34),oa(n,84,34,78,18,68,34),n.fillStyle=`#f0b0c0`,oa(n,47,30,50,22,56,32),oa(n,81,30,78,22,72,32),n.fillStyle=a,n.beginPath(),n.arc(55,47,3.4,0,7),n.arc(73,47,3.4,0,7),n.fill(),n.fillStyle=`#e06a7a`,oa(n,61,54,67,54,64,58),n.strokeStyle=a,n.lineWidth=1.6;for(let e of[-2,3])n.beginPath(),n.moveTo(50,55+e),n.lineTo(34,53+e),n.moveTo(78,55+e),n.lineTo(94,53+e),n.stroke();n.strokeStyle=i,n.lineWidth=3;for(let e of[78,90,102])n.beginPath(),n.moveTo(50,e),n.lineTo(78,e),n.stroke()}let o=new W(t);return o.colorSpace=V,o}function oa(e,t,n,r,i,a,o){e.beginPath(),e.moveTo(t,n),e.lineTo(r,i),e.lineTo(a,o),e.closePath(),e.fill()}function sa(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`);t.fillStyle=`#ff5a8a`,t.beginPath(),t.moveTo(32,52),t.bezierCurveTo(6,32,14,10,32,24),t.bezierCurveTo(50,10,58,32,32,52),t.fill();let n=new W(e);return n.colorSpace=V,n}function ca(e){let t=document.createElement(`canvas`);t.width=t.height=64;let n=t.getContext(`2d`);n.fillStyle=e,n.beginPath(),n.ellipse(30,32,18,11,0,0,7),n.fill(),n.beginPath(),n.moveTo(46,32),n.lineTo(60,22),n.lineTo(60,42),n.closePath(),n.fill(),n.fillStyle=`rgba(255,255,255,0.35)`,n.beginPath(),n.ellipse(28,36,12,5,0,0,7),n.fill(),n.fillStyle=`#15212a`,n.beginPath(),n.arc(20,30,2.6,0,7),n.fill();let r=new W(t);return r.colorSpace=V,r}function la(){let e=document.createElement(`canvas`);e.width=e.height=32;let t=e.getContext(`2d`),n=t.createRadialGradient(16,16,0,16,16,16);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.6,`rgba(255,255,255,0.7)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.beginPath(),t.arc(16,16,16,0,7),t.fill();let r=new W(e);return r.colorSpace=V,r}function ua(e){let t=document.createElement(`canvas`);t.width=t.height=256;let n=t.getContext(`2d`),r=n.createLinearGradient(0,0,256,256);e<0?(r.addColorStop(0,`#6a3b1c`),r.addColorStop(1,`#caa15a`)):(r.addColorStop(0,`#3a4a6a`),r.addColorStop(1,`#a86a3a`)),n.fillStyle=r,n.fillRect(0,0,256,256),n.globalAlpha=.5;for(let e=0;e<5;e++)n.fillStyle=e%2?`#2a1c10`:`#e0c080`,n.fillRect(30+e*36,40+e%3*30,26,150);let i=new W(t);return i.colorSpace=V,i}var{Timer:da}=O,fa=new URLSearchParams(window.location.search),pa=fa.get(`demo`)===`1`||fa.has(`capture`);window.__demo=pa;var ma=(fa.get(`city`)?Number(fa.get(`city`)):0)||Math.random()*1e9|0,ha=0,ga=Ri({demo:pa,citySeed:ma,profileIndex:ha}),{renderer:_a,rig:va,sunRig:ya,city:ba,cityLife:xa,waterMaterial:Sa,fitShadowFrustum:Ca,landmarkFactory:wa,renderCityBeautyTo:Ta}=ga,$=na({tier:`corner`});typeof window<`u`&&(window.__office=$),typeof window<`u`&&(window.__quality={get level(){return ga.governor.level},forceLoad:e=>ga.profiler.forceLoad(e)}),$.camera.aspect=window.innerWidth/window.innerHeight,$.camera.updateProjectionMatrix();var Ea=!0;window.__shadows=Ea,window.__scene=`office`;var Da={minFilter:o,magFilter:o,depthBuffer:!0,stencilBuffer:!1},Oa=new z(2.2,3.4,11.5),ka=new z(0,2,0).sub(Oa),Aa=new z(0,1,0),ja=30,Ma=384/320,Na=f.radToDeg(2*Math.atan(Math.tan(f.degToRad(ja))/Ma));function Pa(e){let t=new fe(Na,Ma,.1,100);t.position.copy(Oa);let n=ka.clone().applyAxisAngle(Aa,f.degToRad(e));return t.lookAt(Oa.clone().add(n)),t}var Fa=Pa(30),Ia=Pa(-30),La=new L(384,320,Da),Ra=new L(384,320,Da);$.setCityTexture(La.texture,Ra.texture);var za=new fe(52,540/320,.1,100);za.position.copy(Oa),za.lookAt(Oa.clone().add(ka));var Ba=new L(540,320,Da);$.setStraightCityTexture(Ba.texture);var Va=0,Ha=3,Ua=new L(512,320,{minFilter:o,magFilter:o,depthBuffer:!0,stencilBuffer:!1});$.setVignetteTexture(Ua.texture);var Wa=!1,Ga=(()=>{if(typeof document>`u`)return{showLap(){},toast(){},flash(){}};let e=document.createElement(`style`);e.textContent=`
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
    </div></div>`;let n=document.createElement(`div`);n.className=`otoast`;let r=document.createElement(`div`);r.className=`oflash`,document.body.append(t,n,r),t.querySelector(`.lap-x`).addEventListener(`click`,()=>qa()),t.addEventListener(`click`,e=>{e.target===t&&qa()}),t.addEventListener(`click`,e=>{e.target.closest(`button`)&&navigator.vibrate?.(10)});let i=0;return{showLap(e){t.classList.toggle(`on`,e)},toast(e){n.textContent=e,n.classList.add(`on`),clearTimeout(i),i=setTimeout(()=>n.classList.remove(`on`),1400)},flash(){r.style.transition=`none`,r.style.opacity=`0.85`,requestAnimationFrame(()=>{r.style.transition=`opacity .55s`,r.style.opacity=`0`})}}})();function Ka(){Wa=!0,Ga.showLap(!0)}function qa(){Wa=!1,Ga.showLap(!1)}function Ja(){ha=(ha+1)%ut.length,Ga.flash(),ba.generate(ma,ha),Sa.uniforms.uVecWater.value.set(ba.waterColor),xa.setProfile(ba.state.profile),Ca(),Ga.toast(`✈  `+ba.state.profile.name),window.__profile=ba.state.profile.key}function Ya(e){let t=$.setFitout(e);return Ga.toast(t===`basement`?`🏚  Basement office`:`🏙  Corner office`),window.__tier=t,t}function Xa(){return Ya($.tier===`corner`?`basement`:`corner`)}window.__tier=$.tier;var Za=[`3d`,`dressed2`,`night2`,`modern`,`charm`],Qa={"3d":`🧊  Stylized 3D office`,dressed2:`📚  Dressed office (day)`,night2:`🌙  Night office`,modern:`🏙  Modern office (day)`,charm:`🎨  Charm office`};function $a(e){let t=$.setSkin(e);return window.__officeSkin=t,Ga.toast(Qa[t]),t}function eo(){return $a(Za[(Za.indexOf($.skin)+1)%Za.length])}window.__officeSkin=$.skin;var to={painted:`🎨  Painted props (cohesive)`,"3d":`🧊  Live 3D props (animated)`};function no(e){let t=$.setProps(e);return window.__officeProps=t,$.skin!==`3d`&&Ga.toast(to[t]),t}function ro(){return no($.props===`painted`?`3d`:`painted`)}window.__officeProps=$.props;var io={corner:`🏙  Corner window`,"straight-on":`🖼  Straight-on window`};function ao(e){let t=$.setLayout(e);return window.__officeLayout=t,Ga.toast(io[t]),t}function oo(){return ao($.layout===`corner`?`straight-on`:`corner`)}window.__officeLayout=$.layout;var so=new ne,co=new de,lo=(e,t)=>{co.x=e/window.innerWidth*2-1,co.y=-(t/window.innerHeight)*2+1};function uo(){so.setFromCamera(co,$.camera);let e=so.intersectObjects($.interactables,!0)[0];if(!e)return null;let t=e.object;for(;t&&!t.userData.role;)t=t.parent;return t?t.userData.role:null}function fo(e){e===`laptop`?Ka():e===`phone`?Ja():e===`cat`?$.petCat():e===`tank`&&$.feedFish()}var po=6,mo=0,ho=0,go=0,_o=0,vo=0,yo=!1,bo=!1;_a.domElement.style.cursor=`grab`,_a.domElement.addEventListener(`mousedown`,e=>{yo=!0,bo=!1,mo=_o=e.clientX,ho=vo=e.clientY,go=performance.now()}),window.addEventListener(`mousemove`,e=>{yo?(!bo&&Math.hypot(e.clientX-mo,e.clientY-ho)>po&&(bo=!0),bo&&($.look.addDrag(e.clientX-_o,e.clientY-vo),_a.domElement.style.cursor=`grabbing`),_o=e.clientX,vo=e.clientY):(lo(e.clientX,e.clientY),_a.domElement.style.cursor=uo()?`pointer`:`grab`)}),window.addEventListener(`mouseup`,e=>{if(yo&&!bo&&!Wa){lo(e.clientX,e.clientY);let t=uo();t&&fo(t)}yo=!1,bo=!1,_a.domElement.style.cursor=`grab`});var xo=!1;_a.domElement.addEventListener(`touchstart`,e=>{e.touches.length===1&&(mo=_o=e.touches[0].clientX,ho=vo=e.touches[0].clientY,go=performance.now(),xo=!1)},{passive:!0}),_a.domElement.addEventListener(`touchmove`,e=>{if(e.touches.length!==1)return;let t=e.touches[0].clientX,n=e.touches[0].clientY;!xo&&Math.hypot(t-mo,n-ho)>8&&(xo=!0),xo&&$.look.addDrag(t-_o,n-vo),_o=t,vo=n},{passive:!0}),window.addEventListener(`touchend`,e=>{if(!xo&&performance.now()-go<350&&(!e.touches||e.touches.length===0)&&!Wa){let e=uo();e&&fo(e)}xo=!1});var So=0,Co=e=>Math.hypot(e.touches[0].clientX-e.touches[1].clientX,e.touches[0].clientY-e.touches[1].clientY);_a.domElement.addEventListener(`touchstart`,e=>{e.touches.length===2&&(So=Co(e))},{passive:!0}),_a.domElement.addEventListener(`touchmove`,e=>{if(e.touches.length!==2)return;e.preventDefault();let t=Co(e);So>0&&t>0&&($.camera.fov=Math.max(32,Math.min(72,$.camera.fov*(So/t))),$.camera.updateProjectionMatrix()),So=t},{passive:!1}),window.addEventListener(`touchend`,e=>{(!e.touches||e.touches.length<2)&&(So=0)});var wo={left:!1,right:!1,up:!1,down:!1},To={ArrowLeft:`left`,ArrowRight:`right`,ArrowUp:`up`,ArrowDown:`down`};window.addEventListener(`keydown`,e=>{if(To[e.key]){wo[To[e.key]]=!0,e.preventDefault();return}e.key===`Escape`&&(Wa?qa():$.look.recenter()),(e.key===`f`||e.key===`F`)&&Xa(),(e.key===`j`||e.key===`J`)&&eo(),(e.key===`u`||e.key===`U`)&&ro(),(e.key===`t`||e.key===`T`)&&ya.cyclePreset(),(e.key===`h`||e.key===`H`)&&(Ea=!Ea,window.__shadows=Ea),(e.key===`w`||e.key===`W`)&&oo()}),window.addEventListener(`keyup`,e=>{To[e.key]&&(wo[To[e.key]]=!1)}),wa.whenReady.then(()=>{ba.generate(ma,ha),Ca(),window.__cityReady=!0}),fa.get(`office`)===`basement`&&Ya(`basement`);var Eo=fa.get(`officeskin`);Za.includes(Eo)&&$a(Eo);var Do=fa.get(`officeprops`);[`painted`,`3d`].includes(Do)&&no(Do);var Oo=fa.get(`officelayout`);[`corner`,`straight-on`].includes(Oo)&&ao(Oo);var ko=new da;ko.connect(document);function Ao(){ko.update(),ga.frameStart();let e=Math.min(ko.getDelta(),.1);va.update(e),ga.updateWorld(e,ko.getElapsed(),{shadowsOn:Ea,seasonTarget:0}),$.look.addKeys(e,wo),$.update(e,ko.getElapsed(),ya),window.__lookYaw=$.look.yaw,window.__lookPitch=$.look.pitch,$.tier===`basement`?(_a.setRenderTarget(Ua),_a.render($.vignette.scene,$.vignette.camera)):Va%Ha===0&&($.layout===`straight-on`?Ta(za,Ba):(Ta(Fa,La),Ta(Ia,Ra),$.skin!==`3d`&&Ta(za,Ba))),Va++,_a.setRenderTarget(null),_a.render($.scene,$.camera),ga.frameEnd(),requestAnimationFrame(Ao)}Ao(),Hi({key:`office`,title:`The Office`,tips:[`Drag to look around the office (or use the arrow keys)`,`Click / tap the LAPTOP to open the game panel`,`Tap the PHONE to travel to another city · pet the CAT · feed the FISH`,`Esc exits · F fitout · J skin · U props · W window · T time`]}),window.addEventListener(`resize`,()=>{ga.resize(),$.camera.aspect=window.innerWidth/window.innerHeight,$.camera.updateProjectionMatrix()});