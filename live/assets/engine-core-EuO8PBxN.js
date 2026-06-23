import{A as e,B as t,C as n,D as r,E as i,G as a,H as o,I as s,J as c,K as l,L as u,M as d,N as f,O as p,P as m,Q as h,R as g,T as _,U as v,V as y,W as b,X as x,Y as S,_ as C,_t as w,b as T,bt as E,c as D,ct as O,d as ee,dt as k,et as A,f as te,ft as j,g as M,ht as N,i as P,j as F,k as ne,l as re,lt as ie,m as ae,mt as I,n as oe,nt as L,o as R,p as se,q as z,r as ce,rt as le,s as B,st as V,t as H,tt as ue,u as U,ut as de,v as W,w as fe,x as pe,xt as me,y as he,yt as ge,z as _e}from"./three-fptASJPj.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var ve=(e,t,n,r)=>e+(t-e)*(1-Math.exp(-n*r)),ye=(e,t,n)=>e<t?t:e>n?n:e,be=Math.atan(1/Math.SQRT2),G=Math.atan(.5),K=Math.PI/4,q={PERSPECTIVE:4,ISOMETRIC:5,DIMETRIC:6},J=8,xe=.12,Se=1.45,Ce=4,we=40,Te=1.5,Ee=16,De=6,Oe=22,ke=3.5,Ae=11,Y=(e,t,n)=>ve(e,t,J,n),je=(e,t)=>e+Math.PI*2*Math.round((t-e)/(Math.PI*2));function Me({aspect:e,fov:n=48,near:r=.1,far:i=100,target:a=new E(0,.8,0),azimuth:o=K,elevation:s=.52,distance:l=12,zoom:u=5.5}={}){let d=new x(n,e,r,i),f=new c(-1,1,1,-1,r,i),p=q.PERSPECTIVE,m=e,h={azimuth:o,elevation:s,distance:l,zoom:u,target:a.clone()},g={azimuth:o,elevation:s,distance:l,zoom:u,target:a.clone()},_=!1,v=null,y=new E,b=()=>p===q.PERSPECTIVE?d:f;function S(e){e!==p&&(p=e,p===q.ISOMETRIC||p===q.DIMETRIC?(h.elevation=p===q.ISOMETRIC?be:G,h.azimuth=je(K,g.azimuth),_=!0):_=!1)}function C(e,n){h.azimuth+=e,_||(h.elevation=t.clamp(h.elevation+n,xe,Se))}function w(e){p===q.PERSPECTIVE?h.distance=t.clamp(h.distance*e,Ce,we):h.zoom=t.clamp(h.zoom*e,Te,Ee)}function T(e,t){let n=h.azimuth,r=p===q.PERSPECTIVE?h.distance*.04:h.zoom*.08,i=new E(Math.cos(n),0,-Math.sin(n)),a=new E(-Math.sin(n),0,-Math.cos(n));h.target.addScaledVector(i,e*r),h.target.addScaledVector(a,t*r)}function D(e,t){m=e/t,d.aspect=m,d.updateProjectionMatrix()}function O(e){v&&(v(y),h.target.copy(y)),g.azimuth=Y(g.azimuth,h.azimuth,e),g.elevation=Y(g.elevation,h.elevation,e),g.distance=Y(g.distance,h.distance,e),g.zoom=Y(g.zoom,h.zoom,e),g.target.x=Y(g.target.x,h.target.x,e),g.target.y=Y(g.target.y,h.target.y,e),g.target.z=Y(g.target.z,h.target.z,e);let t=Math.cos(g.elevation),n=Math.sin(g.elevation),r=Math.cos(g.azimuth),i=Math.sin(g.azimuth),a=b();if(a.position.set(g.target.x+g.distance*t*i,g.target.y+g.distance*n,g.target.z+g.distance*t*r),a.lookAt(g.target),a.isOrthographicCamera){let e=g.zoom,t=e*m;a.left=-t,a.right=t,a.top=e,a.bottom=-e,a.updateProjectionMatrix()}}function ee(e,t,n,r=!1){h.target.set(e,t,n),r&&g.target.copy(h.target)}function k(e,n=!1){h.zoom=t.clamp(e,Te,Ee),n&&(g.zoom=h.zoom)}function A(e,t=!1){h.azimuth=je(e,g.azimuth),t&&(g.azimuth=h.azimuth)}function te(e,n=!1){h.elevation=t.clamp(e,xe,Se),n&&(g.elevation=h.elevation)}function j(e,{frame:n,snap:r=!1}={}){v=e,r&&(v(y),h.target.copy(y),g.target.copy(y)),n!=null&&(p===q.PERSPECTIVE?h.distance=t.clamp(n,Ce,we):h.zoom=t.clamp(n,Te,Ee))}function M(){v=null}return{get camera(){return b()},get mode(){return p},get azimuth(){return g.azimuth},get following(){return!!v},setTarget:ee,setZoom:k,setFollow:j,clearFollow:M,setAzimuth:A,setElevation:te,get styleT(){return p===q.PERSPECTIVE?t.clamp((g.distance-De)/(Oe-De),0,1):t.clamp((g.zoom-ke)/(Ae-ke),0,1)},setMode:S,orbit:C,zoomBy:w,pan:T,setViewport:D,update:O}}var Ne={value:0},Pe=new M(`#ffffff`),Fe={value:0},Ie={value:0},Le={value:0},Re=new ge,ze={value:0},Be={value:0},Ve=`
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
`;function X(e){e.uniforms.uVector=Ne,e.uniforms.uVecTint={value:Pe},e.uniforms.uVecShadow=Fe,e.uniforms.uSnow=Ie,e.uniforms.uCloud=Le,e.uniforms.uCloudOff={value:Re},e.uniforms.uFogCharm=ze}function He(e){return e.replace(`#include <fog_fragment>`,`
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
#include <shadowmask_pars_fragment>`)}var Ge=`col *= mix(1.0, getShadowMask(), uVecShadow);`;function Ke(e,{color:t,id:n,windowGlow:r,winColors:i=[`#ffb852`,`#8cd9ff`],litFrac:a=.55}={}){let o=[0,1,2].map(e=>new M(i[e]??i[i.length-1]));return e.customProgramCacheKey=()=>`lgr-vec-tower`,e.onBeforeCompile=e=>{X(e),e.uniforms.uWindowGlow=r,e.uniforms.uWinId={value:n},e.uniforms.uVecColor={value:new M(t)},e.uniforms.uWinA={value:o[0]},e.uniforms.uWinB={value:o[1]},e.uniforms.uWinC={value:o[2]},e.uniforms.uWinLit={value:a},e.vertexShader=Ue(e.vertexShader),e.fragmentShader=He(We(e.fragmentShader.replace(`#include <common>`,`#include <common>
        uniform float uWindowGlow;
        uniform float uWinId;
        uniform vec3  uVecColor;
        uniform vec3  uWinA; uniform vec3 uWinB; uniform vec3 uWinC;
        uniform float uWinLit;
        ${Ve}
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
          ${Ge}                                  // the sun's shadow darkens the body
          vec3 wcol; vec2 w = winTerms(wcol);
          vec3 glass = vec3(0.17, 0.23, 0.34);          // dark glass-blue panes (day)
          col = mix(col, glass, w.x * 0.85);
          col += w.x * w.y * wcol * uWindowGlow * 1.5;  // …windows EMIT (unshadowed) at night
          gl_FragColor = vec4(col, diffuseColor.a);
        }`)))},e}function Z(e,{color:t=null,glow:n=null,glowDay:r=0,glowNight:i=1,windowGlow:a=null,season:o=!1}={}){let s=t===null,c=n!==null&&a!==null;return e.customProgramCacheKey=()=>`lgr-vec|`+(s?`d`:`c`)+(c?`g`:``)+(o?`s`:``),e.onBeforeCompile=e=>{X(e),s||(e.uniforms.uVecColor={value:new M(t)}),c&&(e.uniforms.uGlow={value:new M(n)},e.uniforms.uGlowDay={value:r},e.uniforms.uGlowNight={value:i},e.uniforms.uWindowGlow=a),o&&(e.uniforms.uSeason=Be),e.vertexShader=Ue(e.vertexShader);let l=s?`diffuseColor.rgb`:`uVecColor`,u=o?`seasonShift(${l})`:l,d=(s?``:`uniform vec3 uVecColor;
`)+(c?`uniform vec3 uGlow; uniform float uGlowDay; uniform float uGlowNight; uniform float uWindowGlow;
`:``)+(o?`uniform float uSeason;
vec3 seasonShift(vec3 c){
  c = mix(c, vec3(0.86, 0.46, 0.13), smoothstep(0.40, 0.70, uSeason));   // → autumn orange
  c = mix(c, vec3(0.46, 0.33, 0.20), smoothstep(0.75, 1.00, uSeason));   // → bare brown
  return c;
}
`:``),f=c?`uGlow * mix(uGlowDay, uGlowNight, uWindowGlow)`:`vec3(0.0)`,p=He(We(e.fragmentShader.replace(`#include <common>`,`#include <common>
`+d+Ve).replace(`#include <opaque_fragment>`,`#include <opaque_fragment>
        if (uVector > 0.5) {
          vec3 col = vecShade(${u});
          ${Ge}                            // the sun's shadow darkens the flat tier…
          gl_FragColor = vec4(col + ${f}, diffuseColor.a);  // …but the night glow stays lit
        }`)));c&&(p=p.replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>\n  totalEmissiveRadiance += ${f};`)),e.fragmentShader=p},e}var qe={value:0};function Je(e){return e.customProgramCacheKey=()=>`lgr-ao`,e.onBeforeCompile=e=>{e.uniforms.uAoStrength=qe,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
attribute float aAo;
varying float vAo;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
  vAo = aAo;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying float vAo;
uniform float uAoStrength;`).replace(`#include <dithering_fragment>`,`#include <dithering_fragment>
  gl_FragColor.rgb *= (1.0 - clamp(vAo, 0.0, 1.0) * uAoStrength);`)},e}function Ye(e){let t=e>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Xe(e){let t=Ye(e);return{next:t,range:(e,n)=>e+(n-e)*t(),int:(e,n)=>e+Math.floor(t()*(n-e+1)),pick:e=>e[Math.floor(t()*e.length)],chance:e=>t()<e}}var Ze=[{key:`manhattan`,name:`Manhattan`,towers:[`#EDE3C8`,`#D9B98A`,`#B5562F`,`#A8C8E8`,`#2E3F5C`],ground:`#7CC455`,street:`#9AA0A6`,sidewalk:`#C8CCD0`,park:`#5DB347`,water:`#29A8D8`,shopfronts:[`#C04A3A`,`#3A7AC0`,`#C09A2A`],glass:`#7FA8CC`,winColors:[`#ffd27a`,`#9ad6ff`],hMax:4.6,sigma:.36,roofRate:.35,pSplit:.6,nightLit:.55,roofTint:null,coast:{base:.55,out:1,in:.6,jag:1.05},landmarks:[`empireState`,`chrysler`,`liberty`]},{key:`paris`,name:`Paris`,towers:[`#E8DCC0`,`#F2EAD6`,`#E0D2B4`],ground:`#8CC46A`,street:`#A8A29A`,sidewalk:`#D4CEC2`,park:`#6DB35A`,water:`#3FA8C8`,shopfronts:[`#C04A3A`,`#3A6B5A`,`#7A5AC0`],glass:`#5A6B7A`,winColors:[`#ffdca0`,`#ffcaa0`],hMax:1.5,sigma:.9,roofRate:.15,pSplit:.75,nightLit:.45,roofTint:`#6A7886`,coast:{base:1.05,out:.55,in:.3,jag:.5},landmarks:[`eiffel`,`arcDeTriomphe`,`sacreCoeur`]},{key:`neoTokyo`,name:`Neo-Tokyo`,towers:[`#2A3038`,`#3A4250`,`#252B36`,`#4A4456`],ground:`#3A4A42`,street:`#5A6068`,sidewalk:`#7A8088`,park:`#2E5E46`,water:`#0E6878`,shopfronts:[`#E8483A`,`#5AE8E0`,`#E85AA0`],glass:`#5AE8E0`,winColors:[`#5AE8E0`,`#E85AA0`,`#E8E06A`],hMax:5.2,sigma:.42,roofRate:.6,pSplit:.6,nightLit:.7,roofTint:null,coast:{base:.7,out:1.05,in:.62,jag:1.7},landmarks:[`tokyoTower`,`pagoda`,`neonBillboard`]}],Qe=Ze.map(e=>e.key),$e=.3,et=1.9,tt=.55,nt=2.45,rt=.12,it=.6,at=6,ot={BASE:.7,OUT:.95,IN:.55,JAG:1,SAMPLES_PER_EDGE:28,HARBOR_DEPTH:.55,HARBOR_WIDTH:.26},st={PLINTH_TOP:$e,BLOCK:et,STREET:tt,PITCH:nt,SIDEWALK:rt,SHORE:it,N:at,COAST:ot};function ct(e,t,n){let r=n?.base??ot.BASE,i=n?.out??ot.OUT,a=n?.in??ot.IN,o=n?.jag??ot.JAG,s=t+r,c=Xe((e^789079)>>>0),l=[2,3,5,8,11,13].map(e=>({k:e,amp:1/e*o**((e-2)/6),phase:c.range(0,Math.PI*2)})),u=l.reduce((e,t)=>e+t.amp,0),d=e=>{let t=0;for(let n of l)t+=n.amp*Math.sin(n.k*e*Math.PI*2+n.phase);return Math.max(-1,Math.min(1,t/(u*.6)))},f=[{fix:+s,nx:1,nz:0,sign:1},{fix:+s,nx:0,nz:1,sign:-1},{fix:-s,nx:-1,nz:0,sign:-1},{fix:-s,nx:0,nz:-1,sign:1}],p=t+.22,m=ot.SAMPLES_PER_EDGE,h=4*m,g=[],_=0;for(let e=0;e<4;e++){let t=f[e];for(let n=0;n<m;n++,_++){let o=n/m,c=_/h,l=(-s+2*s*o)*t.sign,u=d(c),f=u>=0?u*i:u*a;if(e===0){let e=Math.abs(o-.5);if(e<ot.HARBOR_WIDTH){let t=.5+.5*Math.cos(e/ot.HARBOR_WIDTH*Math.PI);f-=(r+ot.HARBOR_DEPTH)*t}}let v,y;t.nx===0?(y=t.fix+t.nz*f,v=l,y=t.nz>0?Math.max(y,p):Math.min(y,-p)):(v=t.fix+t.nx*f,y=l,v=t.nx>0?Math.max(v,p):Math.min(v,-p)),g.push(new ge(v,y))}}return{points:g,B:s,maxR:s+i,harborX:p}}function lt(e){(Array.isArray(e)?e:[e]).forEach(e=>e&&e.dispose&&e.dispose())}function ut({seed:t=1,profileIndex:n=0,landmarkFactory:r=null,windowGlow:i}){let o=new p,s=new p,c=new p;s.raycast=()=>{},c.raycast=()=>{},o.add(s,c);let l=new pe(16773594,3);l.position.set(.45,.6,-.65).multiplyScalar(10);let u=new e(7313331,2762272,1);o.add(l,u);let d=0,f=[],m={seed:t,profileIndex:n,profile:Ze[n],extent:0,meshCount:0};function h(e,t,n,r){let i=new v(new B(e,.04,t),Z(new a({color:r,roughness:.95,flatShading:!0}),{color:r}));return i.position.y=n,i.userData.ground=!0,i}function g(e,t){for(let e of s.children)e.geometry&&e.geometry.dispose(),lt(e.material);s.clear();for(let e of c.children)e.traverse(e=>{e.isMesh&&lt(e.material)});c.clear(),f.length=0,d=0;let n=Xe(e),i=Ze[t],o=(at-1)/2*nt,l=7.075;m={seed:e,profileIndex:t,profile:i,extent:l+(i.coast?.base??ot.BASE),meshCount:0};let u=ct(e,l,i.coast);m.coast=u;let p=new de;u.points.forEach((e,t)=>t?p.lineTo(e.x,e.y):p.moveTo(e.x,e.y)),p.closePath();let g=new v(new fe(p,{depth:2,bevelEnabled:!1,steps:1}),Z(new a({color:i.ground,roughness:.9,flatShading:!0,side:2}),{color:i.ground}));g.rotation.x=-Math.PI/2,g.position.y=$e-2,g.userData.ground=!0,s.add(g);let b=2*7.195;s.add(h(b,b,.32,i.street)),S(u.harborX,i);let w=[];for(let e=0;e<at;e++)for(let t=0;t<at;t++)w.push([e,t]);let T=new Set,E=Math.max(1,Math.round(w.length*.08));for(;T.size<E;)T.add(n.int(0,w.length-1));let D=n.range(-2.45*.6,nt*.6),O=n.range(-2.45*.6,nt*.6),ee=Math.hypot(o,o),k=[];if(w.forEach(([e,t],r)=>{let a=(e-(at-1)/2)*nt,o=(t-(at-1)/2)*nt;if(s.add(h(et,et,.32999999999999996,i.sidewalk).translateX(a).translateZ(o)),T.has(r)){s.add(h(et-rt*2,et-rt*2,.35,i.park).translateX(a).translateZ(o));let e=n.int(3,5);for(let t=0;t<e;t++)C(a+n.range(-.6,.6),o+n.range(-.6,.6),i,n);return}let c=et-rt*2,l=n.chance(i.pSplit)?2:1,u=n.chance(i.pSplit)?2:1,d=c/l,f=c/u;for(let e=0;e<l;e++)for(let t=0;t<u;t++){let r=a-c/2+d*(e+.5),s=o-c/2+f*(t+.5),l=Math.max(.6,d-.1),u=Math.max(.6,f-.1),p=Math.hypot(r-D,s-O)/ee,m=Math.exp(-(p*p)/(2*i.sigma*i.sigma)),h=Math.max(.5,.5+(i.hMax-.5)*m*n.range(.75,1.25));h>i.hMax*.5&&Math.min(l,u)>=.7&&k.push({lx:r,lz:s,fw:l,fd:u,h,r:p}),_(r,s,l,u,h,i,n)}}),r&&r.ready){k.sort((e,t)=>e.r-t.r);let e=[],t=i.landmarks;for(let n=0;n<t.length&&k.length;n++){let a=null;for(let t of k)if(e.every(e=>Math.hypot(e.lx-t.lx,e.lz-t.lz)>nt*.9)){a=t;break}a||=k[0],e.push(a),y(a.lx,a.lz);let o=i.hMax*r.heightFactor(t[n]),s=r.make(t[n],{x:a.lx,z:a.lz,w:a.fw,d:a.fd,h:o,plinthTop:$e});if(s){c.add(s);let e=new R().setFromObject(s);x(e.min.x-.15,e.max.x+.15,e.min.z-.15,e.max.z+.15)}}}s.traverse(e=>{e.isMesh&&(e.userData.ground?(e.castShadow=!1,e.receiveShadow=!0):e.material&&e.material.isMeshBasicMaterial?(e.castShadow=!1,e.receiveShadow=!1):(e.castShadow=!0,e.receiveShadow=!0))}),c.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),m.meshCount=s.children.length+c.children.length;let A=0;for(let e of s.children){let t=e.position;A=(Math.imul(A,16777619)^(Math.round(t.x*100)*2654435761^Math.round(t.y*100)*40503^Math.round(t.z*100)*2246822519))>>>0}for(let e of m.coast.points)A=(Math.imul(A,16777619)^(Math.round(e.x*100)*2654435761^Math.round(e.y*100)*40503))>>>0;m.sig=A,window.__city={seed:e,profile:i.key,meshes:m.meshCount,sig:A}}function _(e,t,n,r,o,c,l){let u=Ke(new a({flatShading:!0,roughness:.7,metalness:.05}),{color:l.pick(c.towers),id:++d,windowGlow:i,winColors:c.winColors,litFrac:c.nightLit}),p=new v(new B(n,o,r),u);if(p.position.set(e,$e+o/2,t),p.userData.lot=[e,t],s.add(p),c.roofTint){let i=Z(new a({color:c.roofTint,roughness:.85,flatShading:!0}),{color:c.roofTint}),l=new v(new B(n*1.02,.08,r*1.02),i);l.position.set(e,$e+o+.04,t),l.userData.lot=[e,t],s.add(l)}if(o<1.4){let i=l.pick(c.shopfronts),o=new v(new B(n*1.04,.18,r*1.04),Z(new a({color:i,roughness:.8,flatShading:!0}),{color:i}));o.position.set(e,.39,t),o.userData.lot=[e,t],s.add(o)}let m=$e+o,h=n,g=r;if(o>c.hMax*.5&&l.chance(.55)){let u=n*l.range(.5,.72),f=r*l.range(.5,.72),p=o*l.range(.18,.4),_=new v(new B(u,p,f),Ke(new a({flatShading:!0,roughness:.7,metalness:.05}),{color:l.pick(c.towers),id:++d,windowGlow:i,winColors:c.winColors,litFrac:c.nightLit}));_.position.set(e,$e+o+p/2,t),_.userData.lot=[e,t],s.add(_),m=$e+o+p,h=u,g=f}if(o>c.hMax*.45&&l.chance(c.roofRate)){let n=l.chance(.5)?new v(new B(h*.4,.18,g*.4),Z(new a({color:`#9a9a9a`,flatShading:!0}),{color:`#9a9a9a`})):new v(new W(h*.18,h*.18,.22,10),Z(new a({color:`#b9bec4`,flatShading:!0}),{color:`#b9bec4`}));if(n.position.set(e+l.range(-.1,.1),m+.11,t+l.range(-.1,.1)),n.userData.lot=[e,t],s.add(n),l.chance(.25)){let n=new v(new j(.05,6,5),new b({color:`#ff3b30`,transparent:!0,opacity:1}));n.position.set(e,m+.15,t),n.userData.lot=[e,t],n.raycast=()=>{},s.add(n),f.push({mesh:n,phase:l.range(0,6.28)})}}if(o>c.hMax*.7&&l.chance(.35)){let n=o*l.range(.18,.34),r=new v(new W(.018,.05,n,6),Z(new a({color:`#c8ccd2`,flatShading:!0}),{color:`#c8ccd2`}));r.position.set(e,m+n/2,t),r.userData.lot=[e,t],r.raycast=()=>{},s.add(r)}}function y(e,t){for(let n=s.children.length-1;n>=0;n--){let r=s.children[n];r.userData.lot&&Math.abs(r.userData.lot[0]-e)<1e-4&&Math.abs(r.userData.lot[1]-t)<1e-4&&(r.geometry&&r.geometry.dispose(),lt(r.material),s.remove(r))}for(let e=f.length-1;e>=0;e--)f[e].mesh.parent||f.splice(e,1)}function x(e,t,n,r){for(let i=s.children.length-1;i>=0;i--){let a=s.children[i];a.userData.lot&&a.position.x>=e&&a.position.x<=t&&a.position.z>=n&&a.position.z<=r&&(a.geometry&&a.geometry.dispose(),lt(a.material),s.remove(a))}}function S(e,t){let n=Z(new a({color:`#7a5634`,roughness:.95,flatShading:!0}),{color:`#7a5634`}),r=(e,t,r,i)=>{let a=new v(new B(e,.06,t),n);a.position.set(r,$e-.16,i),s.add(a)};r(.24,2,e+.02,0),r(1.3,.22,e+.7,-.72),r(1.3,.22,e+.7,.72)}function C(e,t,n,r){let i=new M(n.park),o=(n,o)=>{let c=i.clone().offsetHSL(0,0,r.range(-.06,.06)).getStyle(),l=new v(new j(n,7,6),Z(new a({color:c,flatShading:!0}),{color:c,season:!0}));l.scale.y=.7,l.position.set(e,$e+o,t),l.userData.lot=null,s.add(l)},c=new v(new B(.05,.18,.05),Z(new a({color:`#6b4a2a`,flatShading:!0}),{color:`#6b4a2a`}));c.position.set(e,.39,t),s.add(c),o(.22,.28),o(.16,.46)}function w(e){for(let t of f)t.mesh.material.opacity=.35+.65*(.5+.5*Math.sin(e*3+t.phase))}return g(t,n),{group:o,key:l,fill:u,update:w,generate:g,get state(){return m},get extent(){return m.extent},get waterColor(){return m.profile.water},profiles:Ze}}var dt=Math.PI*2,ft=.7,pt=90,mt=[{name:`night`,sun:`#4a6f9e`,intensity:.35,hemiSky:`#26344f`,hemiGround:`#0c1018`,horizon:`#1e2942`,sky:`#36486e`,exposure:.95,outline:`#101a30`,window:1,toonGain:2.6,turbidity:3,rayleigh:1,mie:.004,mieG:.75,gradeTint:`#cfd8ec`,gradeSat:.84,gradeLift:`#05070e`,gradeContrast:1},{name:`dawn`,sun:`#ff9e54`,intensity:2.4,hemiSky:`#8a7686`,hemiGround:`#2a1f1a`,horizon:`#b8512c`,sky:`#ffb070`,exposure:1.05,outline:`#241826`,window:.3,toonGain:2,turbidity:6,rayleigh:3,mie:.025,mieG:.86,gradeTint:`#ffe6cf`,gradeSat:1.05,gradeLift:`#0a0603`,gradeContrast:1.04},{name:`noon`,sun:`#fff4e0`,intensity:4.6,hemiSky:`#9cb8cc`,hemiGround:`#33302a`,horizon:`#5e7689`,sky:`#aacadd`,exposure:1.18,outline:`#0b0a08`,window:0,toonGain:1.7,turbidity:1.6,rayleigh:2.9,mie:.005,mieG:.78,gradeTint:`#d6e6f4`,gradeSat:1.34,gradeLift:`#000000`,gradeContrast:1.26},{name:`dusk`,sun:`#ff6b35`,intensity:2,hemiSky:`#7a566a`,hemiGround:`#281a18`,horizon:`#b0432a`,sky:`#ff8a5a`,exposure:1.05,outline:`#1f1420`,window:.4,toonGain:2,turbidity:7,rayleigh:3.2,mie:.028,mieG:.87,gradeTint:`#ffdcc0`,gradeSat:1.06,gradeLift:`#0c0604`,gradeContrast:1.05}],ht=e=>e-Math.floor(e),gt=(e,t,n)=>e+(t-e)*n,_t=(e,t,n)=>e+(t-e)*(1-Math.exp(-6*n));function vt({t:e=.5}={}){let t=e,n=e,r=!1,i=!1,a=mt.map(e=>({name:e.name,sun:new M(e.sun),hemiSky:new M(e.hemiSky),hemiGround:new M(e.hemiGround),horizon:new M(e.horizon),sky:new M(e.sky),outline:new M(e.outline),intensity:e.intensity,exposure:e.exposure,window:e.window,toonGain:e.toonGain,turbidity:e.turbidity,rayleigh:e.rayleigh,mie:e.mie,mieG:e.mieG,gradeTint:new M(e.gradeTint),gradeLift:new M(e.gradeLift),gradeSat:e.gradeSat,gradeContrast:e.gradeContrast})),o=new E(0,1,0),s=new M(`#fff4e0`),c=new M(`#6f97b3`),l=new M(`#2a2620`),u=new M(`#3a4a57`),d=new M(`#7da3bd`),f=new M(`#0b0a08`),p=new M(`#000000`),m=3,h=1,g=0,_=1.7,v={turbidity:2.2,rayleigh:1.3,mie:.005,mieG:.78},y={tint:new M(`#fafdff`),lift:new M(`#000000`),sat:1.08,contrast:1},b=new E;function x(e){let t=ht(e)*4,n=Math.floor(t)%4,r=(n+1)%4,i=t-Math.floor(t),x=a[n],S=a[r];s.lerpColors(x.sun,S.sun,i),c.lerpColors(x.hemiSky,S.hemiSky,i),l.lerpColors(x.hemiGround,S.hemiGround,i),u.lerpColors(x.horizon,S.horizon,i),d.lerpColors(x.sky,S.sky,i),f.lerpColors(x.outline,S.outline,i),m=gt(x.intensity,S.intensity,i),h=gt(x.exposure,S.exposure,i),g=gt(x.window,S.window,i),_=gt(x.toonGain,S.toonGain,i),v.turbidity=gt(x.turbidity,S.turbidity,i),v.rayleigh=gt(x.rayleigh,S.rayleigh,i),v.mie=gt(x.mie,S.mie,i),v.mieG=gt(x.mieG,S.mieG,i),y.tint.lerpColors(x.gradeTint,S.gradeTint,i),y.lift.lerpColors(x.gradeLift,S.gradeLift,i),y.sat=gt(x.gradeSat,S.gradeSat,i),y.contrast=gt(x.gradeContrast,S.gradeContrast,i),p.setRGB(.045*g,.075*g,.14*g);let C=ht(e)*dt-Math.PI/2,w=Math.cos(C),T=Math.sin(C);b.set(w,T*Math.cos(ft),T*Math.sin(ft)),b.y>=0?o.copy(b):o.copy(b).negate()}return x(t),{sunDir:o,sunColor:s,hemiSky:c,hemiGround:l,horizon:u,sky:d,outline:f,toonFloor:p,skyParams:v,grade:y,sunArc:b,get sunIntensity(){return m},get exposure(){return h},get windowGlow(){return g},get toonGain(){return _},get t(){return ht(t)},get auto(){return r},get clock(){let e=Math.round(ht(t)*24*60)%1440;return`${String(Math.floor(e/60)).padStart(2,`0`)}:${String(e%60).padStart(2,`0`)}`},cyclePreset(){n=(Math.floor(t*4+1e-4)+1)/4},nudge(e){n+=e/24},goTo(e){n=e},toggleAuto(){r=!r},setReducedMotion(e){i=e},update(e){r&&!i&&(n+=e/pt),t=_t(t,n,e),x(t)}}}function yt(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.35,`rgba(255,255,255,0.55)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new U(e);return r.colorSpace=V,r}function bt(e,t){let n=[];for(let r=0;r<16;r++){let i=r/16*Math.PI*2;n.push(new E(Math.cos(i)*e,t,Math.sin(i)*e))}return new te(n,!0,`catmullrom`,.5)}function xt(e){let n=(t,n)=>Math.exp(-((e-t)*(e-t))/(2*n*n)),r=Math.max(n(.33,.05),n(.75,.06)),i=t.smoothstep(e,.24,.3)*(1-t.smoothstep(e,.8,.88));return t.clamp(.15+.55*i+.45*r,.12,1)}function St(){let{PITCH:e,N:t,PLINTH_TOP:n}=st,r=t+1,i=n+.04,a=n=>(n-t/2)*e,o=t/2,s=[],c=(e,t)=>t*r+e;for(let e=0;e<r;e++)for(let t=0;t<r;t++)s.push({x:a(t),z:a(e),i:t,j:e,edges:[]});let l=[],u=(t,n)=>{let r=(s[t].i===o||s[t].j===o)&&(s[n].i===o||s[n].j===o),i=l.length;l.push({a:t,b:n,len:e,main:r}),s[t].edges.push(i),s[n].edges.push(i)};for(let e=0;e<r;e++)for(let t=0;t<r;t++)t<r-1&&u(c(t,e),c(t+1,e)),e<r-1&&u(c(t,e),c(t,e+1));return{nodes:s,edges:l,y:i,mid:o}}function Ct({plinthTop:e=.3,extent:n=4,profile:r=null}={}){let i=new p,o=St(),{nodes:s,edges:c}=o,l=o.y,u=.34,d=0;{let e=st.PITCH-u*2;d=Math.max(1,Math.floor((e+.26)/.56))}let m=new b({color:`#e8c84a`,fog:!0}),h=new f(new B(.05,.012,.3),m,c.length*d);h.frustumCulled=!1,h.raycast=()=>{},h.receiveShadow=!1,h.castShadow=!1,i.add(h);{let e=new z,t=0;for(let n of c){let r=s[n.a],i=s[n.b],a=i.x-r.x,o=i.z-r.z,c=Math.hypot(a,o),f=a/c,p=o/c,m=Math.atan2(f,p),g=c-u*2;for(let n=0;n<d;n++){let i=u+(d===1?g/2:g*n/(d-1));e.position.set(r.x+f*i,l,r.z+p*i),e.rotation.set(0,m,0),e.updateMatrix(),h.setMatrixAt(t++,e.matrix)}}h.instanceMatrix.needsUpdate=!0}let g=new f(new B(.34,.26,.74),Z(new a({flatShading:!0,roughness:.5,metalness:.3})),12);g.castShadow=!0,g.receiveShadow=!1,g.frustumCulled=!1,g.raycast=()=>{};let _=new re,v=new Float32Array(72),y=new Float32Array(72),x=new M(`#fff0c0`),S=new M(`#ff3528`);for(let e=0;e<12;e++)x.toArray(y,e*3),S.toArray(y,(12+e)*3),v[e*3+1]=-50,v[(12+e)*3+1]=-50;_.setAttribute(`position`,new D(v,3)),_.setAttribute(`color`,new D(y,3));let C=new ue({size:.72,sizeAttenuation:!0,map:yt(),vertexColors:!0,transparent:!0,opacity:0,blending:2,depthWrite:!1}),w=new A(_,C);w.frustumCulled=!1,w.raycast=()=>{},i.add(g,w);let T=[`#f4c430`,`#c0392b`,`#d8dde2`,`#9aa7b4`,`#6b7785`,`#5a7d9a`],O=Ye(2403557),k=c.map((e,t)=>t).filter(e=>c[e].main),te=[];for(let e=0;e<12;e++){let t=e<4&&k.length?k[O()*k.length|0]:O()*c.length|0,n=e===1;te.push({edge:t,fwd:O()<.5,s:O()*c[t].len,speed:n?.5:.78+e%3*.1,lenZ:n?1.45:1,color:T[n?1:e===0?0:2+e%4],rng:Ye(12648430+e*2654435761),isBus:n,pos:new E,dirX:0,dirZ:1,active:!1})}let j=new M;te.forEach((e,t)=>g.setColorAt(t,j.set(e.color)));function N(e,t,n){let r=s[e],i=r.edges.filter(e=>e!==t);if(i.length===0)return t;let a=c[t],o=a.a===e?a.b:a.a,l=r.x-s[o].x,u=r.z-s[o].z,d=Math.hypot(l,u)||1,f=i[0],p=-2;for(let t of i){let n=c[t],i=n.a===e?n.b:n.a,a=s[i].x-r.x,o=s[i].z-r.z,m=Math.hypot(a,o)||1,h=l/d*(a/m)+u/d*(o/m);h>p&&(p=h,f=t)}return n()<.65?f:i[n()*i.length|0]}let P=N,F=new z,ne=(e,t)=>{F.position.set(0,-50,0),F.scale.setScalar(0),F.updateMatrix(),e.setMatrixAt(t,F.matrix)},ie=.085,ae=st.PLINTH_TOP+.02+.13,I=new f(new ee(.04,.1,3,6),Z(new a({flatShading:!0,roughness:.8})),14);I.castShadow=!0,I.receiveShadow=!1,I.frustumCulled=!1,I.raycast=()=>{};let oe=bt(n-.72,e),L=[];for(let e=0;e<14;e++)L.push({phase:e/14,speed:.12+e%4*.02,dir:e%2?1:-1,pos:new E,active:!1});let R=new E,se=new E,ce=new M;L.forEach((e,t)=>I.setColorAt(t,ce.set([`#caa`,`#9ab`,`#bba`,`#ab9`][t%4]))),i.add(I);let le={manhattan:`#e8c84a`,paris:`#dcd2bc`,neoTokyo:`#5ae8e0`};function V(e){e&&m.color.set(le[e.key]||`#e8c84a`)}V(r);function H(n,r,i){let a=i?i.t:.5,o=i?i.windowGlow:0,l=Math.max(2,Math.round(xt(a)*12)),u=o>.05;for(let e=0;e<12;e++){if(e>=l){ne(g,e),te[e].active=!1,v[e*3+1]=-50,v[(12+e)*3+1]=-50;continue}let t=te[e];t.s+=n*t.speed;let r=0;for(;t.s>=c[t.edge].len&&r++<4;){t.s-=c[t.edge].len;let e=t.fwd?c[t.edge].b:c[t.edge].a,n=P(e,t.edge,t.rng);t.edge=n,t.fwd=c[n].a===e}let i=c[t.edge],a=t.fwd?s[i.a]:s[i.b],o=t.fwd?s[i.b]:s[i.a],d=o.x-a.x,f=o.z-a.z,p=Math.hypot(d,f)||1,m=d/p,h=f/p,_=-h,y=m,b=a.x+m*t.s+_*ie,x=a.z+h*t.s+y*ie,S=Math.atan2(m,h);F.position.set(b,ae,x),F.rotation.set(0,S,0),F.scale.set(1,1,t.lenZ),F.updateMatrix(),g.setMatrixAt(e,F.matrix),t.pos.set(b,ae,x),t.dirX=m,t.dirZ=h,t.active=!0;let C=.74*t.lenZ*.5,w=ae+.06,T=e*3,E=(12+e)*3;u?(v[T]=b+m*(C+.04),v[T+1]=w,v[T+2]=x+h*(C+.04),v[E]=b-m*(C+.02),v[E+1]=w,v[E+2]=x-h*(C+.02)):(v[T+1]=-50,v[E+1]=-50)}g.instanceMatrix.needsUpdate=!0,_.attributes.position.needsUpdate=!0,C.opacity=t.clamp(o*1.8,0,1);let d=Math.max(2,Math.round(xt(a)*14));for(let t=0;t<14;t++){if(t>=d){ne(I,t),L[t].active=!1;continue}let n=L[t],i=(n.phase+n.dir*n.speed*r*.02+1e3)%1;oe.getPointAt(i,R),oe.getTangentAt(i,se);let a=Math.sin(r*6+n.phase*30)*.015;F.position.set(R.x,e+.09+a,R.z),F.rotation.set(0,Math.atan2(se.x*n.dir,se.z*n.dir),Math.sin(r*6+n.phase*30)*.06),F.scale.setScalar(1),F.updateMatrix(),I.setMatrixAt(t,F.matrix),n.pos.set(R.x,e+.09,R.z),n.active=!0}I.instanceMatrix.needsUpdate=!0}let U=[...te.map((e,t)=>({kind:`car`,label:e.isBus?`bus`:`car ${t+1}`,getWorldPos:t=>t.copy(e.pos),active:()=>e.active,info:()=>`${e.isBus?`bus`:`car`} · ${c[e.edge].main?`main avenue`:`side street`} → heading ${wt(e.dirX,e.dirZ)}`})),...L.map((e,t)=>({kind:`person`,label:`person ${t+1}`,getWorldPos:t=>t.copy(e.pos),active:()=>e.active,info:()=>`person · strolling the waterfront promenade`}))];function de(){return U}return{group:i,update:H,setProfile:V,getFollowables:de,graph:o,setRouter(e){P=e||N}}}function wt(e,t){return[`N`,`NE`,`E`,`SE`,`S`,`SW`,`W`,`NW`][(Math.round(Math.atan2(e,t)/(Math.PI/4))%8+8)%8]}function Tt({frames:e,fps:t=8,cols:n,rows:r=1}={}){let i=n||e||4,a=r||1,o=e||i*a,s=typeof window<`u`&&window.matchMedia?window.matchMedia(`(prefers-reduced-motion: reduce)`):null;function c(e,t){let n=t%i,r=Math.floor(t/i);e.offset.x=n/i,e.offset.y=1-(r+1)/a}function l(e){let t=e.clone();return t.needsUpdate=!0,t.repeat.set(1/i,1/a),c(t,0),t}function u(e,n,r=0){if(s&&s.matches)return c(e,0),0;let i=(Math.floor(n*t+r)%o+o)%o;return c(e,i),i}function d(e,t){let n=(Math.round(t)%o+o)%o;return c(e,n),n}return{frames:o,fps:t,cols:i,rows:a,makeInstanceTexture:l,step:u,setFrame:d}}function Et(e){if(typeof document>`u`||!e||!e.image)return e;let t=e.image,n=t.width||t.naturalWidth,r=t.height||t.naturalHeight,i=document.createElement(`canvas`);i.width=n,i.height=r;let a=i.getContext(`2d`,{willReadFrequently:!0});a.drawImage(t,0,0,n,r);let o=a.getImageData(0,0,n,r),s=o.data;for(let e=0;e<s.length;e+=4){let t=s[e]*.299+s[e+1]*.587+s[e+2]*.114|0;s[e]=s[e+1]=s[e+2]=t}a.putImageData(o,0,0);let c=new U(i);return c.colorSpace=e.colorSpace||`srgb`,c}function Dt({url:e,fallback:t,luminance:n=!1,onReady:r}={}){let i=n?Et(t):t;return e&&typeof window<`u`&&new w().load(e,e=>{e.colorSpace=V,r&&r(n?Et(e):e)},void 0,()=>{}),i}var Ot=``+new URL(`gull_diffusion_sheet-BMlUTLhu.png`,import.meta.url).href;function kt(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.4,`rgba(255,255,255,0.5)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new U(e);return r.colorSpace=V,r}function At(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64*.62,0,64/2,64*.62,64*.5);n.addColorStop(0,`rgba(240,250,255,0.95)`),n.addColorStop(1,`rgba(240,250,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new U(e);return r.colorSpace=V,r}function jt(){let e=document.createElement(`canvas`);e.width=256,e.height=64;let t=e.getContext(`2d`);t.strokeStyle=`#ffffff`,t.lineWidth=6,t.lineCap=`round`,t.lineJoin=`round`;let n=[14,24,36,24];for(let e=0;e<4;e++){let r=e*64,i=n[e];t.beginPath(),t.moveTo(r+8,40),t.quadraticCurveTo(r+24,i,r+32,36),t.quadraticCurveTo(r+40,i,r+56,40),t.stroke()}let r=new U(e);return r.colorSpace=V,r}function Mt(e,t,n=18){let r=[];for(let i=0;i<n;i++){let a=i/n*Math.PI*2;r.push(new E(Math.cos(a)*e,t,Math.sin(a)*e))}return new te(r,!0,`catmullrom`,.5)}function Nt(e,t,n){let r=e-t,i=[],a=(e,t)=>i.push(new E(e,n,t)),o=(e,n,r,i,o=4)=>{for(let s=1;s<=o;s++){let c=r+(i-r)*(s/o);a(e+Math.cos(c)*t,n+Math.sin(c)*t)}};for(let t=0;t<4;t++)a(e,-r+2*r*t/4);o(r,r,0,Math.PI/2);for(let t=0;t<4;t++)a(r-2*r*t/4,e);o(-r,r,Math.PI/2,Math.PI);for(let t=0;t<4;t++)a(-e,r-2*r*t/4);o(-r,-r,Math.PI,1.5*Math.PI);for(let t=0;t<4;t++)a(-r+2*r*t/4,-e);return o(r,-r,1.5*Math.PI,2*Math.PI),new te(i,!0,`catmullrom`,.5)}function Pt({extent:e=8,waterSize:n=28,plinthTop:r=.3}={}){let i=new p;i.raycast=()=>{};let o=.06,s=(e,t,r)=>r.set(e/n+.5,-t/n+.5,0),c=[Nt(9.5,3,o),Mt(12.7,o),new te([new E(8.4,o,0),new E(11,o,-3.6),new E(13,o,0),new E(11,o,3.6)],!0,`catmullrom`,.5)],l=c.map(e=>e.getLength());function u({scale:e=1,hull:t=`#6b7785`,cabin:n=`#e7ecf2`}){let r=new p,i=new v(new B(.46*e,.2*e,1.1*e),Z(new a({color:t,roughness:.6,metalness:.2,flatShading:!0}),{color:t}));i.position.y=.02;let o=new v(new B(.3*e,.22*e,.42*e),Z(new a({color:n,roughness:.7,flatShading:!0}),{color:n}));return o.position.set(0,.18*e,.08*e),r.add(i,o),r.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!1),e.raycast=()=>{}}),r.userData.halfLen=.55*e,r}let d=[{laneIndex:0,dir:1,speed:.5,wake:.024,scale:1,hull:`#5a6675`,cabin:`#e7ecf2`},{laneIndex:1,dir:-1,speed:.42,wake:.022,scale:1,hull:`#7a5b46`,cabin:`#d9c3a6`},{laneIndex:0,dir:1,speed:.56,wake:.024,scale:.9,hull:`#456079`,cabin:`#cfe0ee`},{laneIndex:2,dir:1,speed:.34,wake:.03,scale:1.35,hull:`#39505f`,cabin:`#e2b85a`}];d.forEach((e,t)=>{e.mesh=u(e),e.u=t*.27%1,e.phase=t*1.7,e.isFerry=e.laneIndex===2,i.add(e.mesh)});let f=d.length,m=f*2,h=new re,g=new Float32Array(m*3).fill(-50),_=new Float32Array(m*3),y=new M(`#fff0c0`),b=new M(`#ff3528`);for(let e=0;e<f;e++)y.toArray(_,e*3),b.toArray(_,(f+e)*3);h.setAttribute(`position`,new D(g,3)),h.setAttribute(`color`,new D(_,3));let x=new A(h,new ue({size:.6,sizeAttenuation:!0,map:kt(),vertexColors:!0,transparent:!0,opacity:0,blending:2,depthWrite:!1}));x.frustumCulled=!1,x.raycast=()=>{},i.add(x);function S(e,t){let n=new v(new j(e,9,7),Z(new a({color:t,roughness:.5,flatShading:!0}),{color:t}));return n.scale.set(.55,.5,1),n.castShadow=!1,n.receiveShadow=!1,n.raycast=()=>{},n.position.y=-5,n}let C=[{x:-9.5,z:6,size:.18,color:`#5b6f86`,period:11,arcH:.55,span:1.1,whale:!1},{x:7.5,z:-9.5,size:.16,color:`#4a6076`,period:14,arcH:.5,span:1,whale:!1},{x:-7,z:-8.5,size:.2,color:`#607089`,period:9,arcH:.6,span:1.2,whale:!1},{x:10.5,z:7,size:.62,color:`#3a4350`,period:38,arcH:.9,span:2.6,whale:!0}];C.forEach((e,t)=>{e.mesh=S(e.size,e.color),e.heading=Math.atan2(-e.x,-e.z),e.t=t/C.length*e.period,e.splashed=!1,i.add(e.mesh),e.whale&&(e.spout=new I(new N({map:At(),transparent:!0,opacity:0,depthWrite:!1,fog:!0})),e.spout.scale.set(.6,1.1,1),e.spout.position.set(e.x,-5,e.z),i.add(e.spout))});let w=Tt({frames:4,fps:7}),T=[`#ffffff`,`#cfd4da`,`#c8a06a`],O=[],ee=Dt({url:Ot,fallback:jt(),luminance:!0,onReady:e=>{ee=e;for(let t of O){let n=t.sp.material.map;t.sp.material.map=w.makeInstanceTexture(e),t.sp.material.needsUpdate=!0,n&&n.dispose()}typeof window<`u`&&(window.__gullSheet=`diffusion`)}});for(let e=0;e<4;e++){let t=new I(new N({map:w.makeInstanceTexture(ee),color:new M(T[e%T.length]),transparent:!0,opacity:0,depthWrite:!1,fog:!0}));t.scale.setScalar(.5),O.push({sp:t,r:8.6+e*.5,y:1.1+e%2*.5,speed:(.18+e*.03)*(e%2?-1:1),phase:e*1.9}),i.add(t)}typeof window<`u`&&(window.__gullSheet=window.__gullSheet||`procedural`,window.__gullAnim={frames:w.frames,variants:T.length,fps:w.fps});let k=C.length,P=Array.from({length:f+k},()=>new E),F=e=>e.laneIndex,ne=new E,ie=new E,ae=new E;function oe(e,n,r){let i=r?r.windowGlow:0,a=1-i;for(let t=0;t<f;t++){let r=d[t],a=c[r.laneIndex],u=l[r.laneIndex],p=r.isFerry?.45+.55*Math.min(1,Math.abs((r.u+.5)%1-.5)*3):1,m=r.u;r.u=(r.u+r.dir*e*r.speed*p/u+1)%1,(r.dir>0?r.u<m:r.u>m)&&(r.laneIndex=F(r)),a.getPointAt(r.u,ne),a.getTangentAt(r.u,ie);let h=ie.x*r.dir,_=ie.z*r.dir,v=Math.atan2(h,_),y=Math.sin(n*1.1+r.phase)*.025;r.mesh.position.set(ne.x,o+y,ne.z),r.mesh.rotation.set(Math.sin(n*.9+r.phase)*.04,v,0);let b=r.mesh.userData.halfLen;s(ne.x-h*b,ne.z-_*b,ae),P[t].set(ae.x,ae.y,r.wake);let x=t*3,S=(f+t)*3;if(i>.05){let e=.18;g[x]=ne.x+h*(b+.05),g[x+1]=e,g[x+2]=ne.z+_*(b+.05),g[S]=ne.x-h*(b+.02),g[S+1]=e,g[S+2]=ne.z-_*(b+.02)}else g[x+1]=-50,g[S+1]=-50}L(),x.material.opacity=t.clamp(i*1.8,0,1);for(let n=0;n<k;n++){let r=C[n];r.t+=e;let i=f+n,a=r.whale?3.2:1.3;if(r.t>=r.period){let e=(r.t-r.period)/a;if(e>=1){r.t=0,r.splashed=!1,r.mesh.position.y=-5,r.spout&&(r.spout.material.opacity=0),P[i].set(0,0,0);continue}let n=Math.sin(Math.PI*e),c=(e-.5)*r.span,l=r.x+Math.sin(r.heading)*c,u=r.z+Math.cos(r.heading)*c;r.mesh.position.set(l,o-.1+n*r.arcH,u),r.mesh.rotation.set(Math.cos(Math.PI*e)*.9,r.heading,0);let d=e<.16||e>.84;if(s(l,u,ae),P[i].set(ae.x,ae.y,d?r.whale?.07:.05:0),r.spout){let n=t.clamp((e-.15)*3,0,1)*(1-e);r.spout.position.set(l,.56+n*.6,u),r.spout.material.opacity=n*.9}}else r.mesh.position.y=-5,P[i].set(0,0,0),r.spout&&(r.spout.material.opacity=0)}for(let e=0;e<4;e++){let r=O[e],i=r.phase+n*r.speed*.25;r.sp.position.set(Math.cos(i)*r.r,r.y+Math.sin(n*1.4+r.phase)*.12,Math.sin(i)*r.r),r.sp.material.opacity=t.clamp(a*.9-.05,0,.85);let o=w.step(r.sp.material.map,n,r.phase);e===0&&typeof window<`u`&&(window.__gullFrame=o)}if(typeof window<`u`){let e=0;for(let t of C)t.mesh.position.y>o&&e++;window.__waterLife={boats:f,breaching:e,gulls:+O[0].sp.material.opacity.toFixed(2),lights:+x.material.opacity.toFixed(2)}}}function L(){h.attributes.position.needsUpdate=!0}function R(){return P.length}let se=[...d.map((e,t)=>({kind:`boat`,label:e.isFerry?`ferry`:`boat ${t+1}`,getWorldPos:t=>t.copy(e.mesh.position),info:()=>e.isFerry?`boat · harbor ferry → docks`:`boat · open-water lane ${e.laneIndex}`})),...O.map((e,t)=>({kind:`gull`,label:`gull ${t+1}`,getWorldPos:t=>t.copy(e.sp.position),active:()=>e.sp.material.opacity>.05,info:()=>`gull · circling the coast`})),...C.map((e,t)=>({kind:`fish`,label:e.whale?`whale`:`fish ${t+1}`,getWorldPos:t=>t.copy(e.mesh.position),active:()=>e.mesh.position.y>o-.3,info:()=>e.mesh.position.y>o?e.whale?`whale · breaching!`:`fish · breaching!`:`fish · below the surface`}))];function z(){return se}return{group:i,update:oe,getFollowables:z,wakeDrops:P,get wakeCount(){return R()},lanes:c,setRouter(e){F=e||(e=>e.laneIndex)}}}var Ft=[`empireState`,`chrysler`,`liberty`,`eiffel`,`arcDeTriomphe`,`sacreCoeur`,`tokyoTower`,`pagoda`,`neonBillboard`],Q={empireState:1.25,chrysler:1.1,liberty:.55,eiffel:3.2,arcDeTriomphe:1.5,sacreCoeur:1.75,tokyoTower:1.35,pagoda:.5,neonBillboard:.9};function It(e){let t=()=>new a({flatShading:!0,roughness:.7,metalness:.1}),n=(n,r={})=>r.windows?Ke(t(),{color:n,id:e.id(),windowGlow:e.windowGlow,winColors:e.winColors,litFrac:e.litFrac}):Z(t(),{color:n,glow:r.glow??null,glowDay:r.glowDay??0,glowNight:r.glowNight??1,windowGlow:r.glow?e.windowGlow:null});return{box:(e,t,r,i,a={})=>new v(new B(e,t,r),n(i,a)),cyl:(e,t,r,i,a={})=>new v(new W(e,t,r,a.seg||12),n(i,a)),cone:(e,t,r,i={})=>new v(new C(e,t,i.seg||8),n(r,i)),sphere:(e,t,r={})=>new v(new j(e,r.seg||12,r.seg2||8),n(t,r)),lathe:(e,t,r={})=>new v(new m(e.map(e=>new ge(e[0],e[1])),r.seg||4),n(t,r))}}var $=(e,t,n,r)=>(e.position.set(t,n,r),e),Lt=[`#7FB0E0`,`#E07FB0`,`#7FE0A0`,`#E0C97F`,`#9FE07F`,`#7FE0E0`,`#FF8C42`,`#E0E07F`,`#C97FE0`,`#E07F7F`,`#7F9FE0`,`#E0483A`],Rt={empireState(e,t){let n=`#E8E0CF`;e.add($(t.box(.42,.18,.42,n,{windows:!0}),0,.09,0)),e.add($(t.box(.34,.16,.34,n,{windows:!0}),0,.26,0)),e.add($(t.box(.26,.14,.26,n,{windows:!0}),0,.41,0)),e.add($(t.box(.19,.34,.19,n,{windows:!0}),0,.65,0)),e.add($(t.box(.13,.06,.13,n,{windows:!0}),0,.85,0));let r=Lt[new Date().getMonth()];e.add($(t.cyl(.03,.045,.12,n,{seg:10,glow:r,glowNight:1.85}),0,.94,0)),e.add($(t.cone(.012,.07,n,{seg:8}),0,1.04,0))},chrysler(e,t){let n=`#C9CED4`;e.add($(t.box(.22,.55,.22,`#9AA7B4`,{windows:!0}),0,.275,0));let r=.55;for(let i=0;i<5;i++){let a=.14-i*.024,o=.07;e.add($(t.cyl(a*.7,a,o,n,{seg:8,glow:`#dfeaff`,glowNight:.5}),0,r+o/2,0)),r+=o}e.add($(t.cone(.018,.16,n,{seg:8}),0,r+.08,0))},liberty(e,t){let n=`#B9B4A6`,r=`#4FA890`;e.add($(t.box(.42,.16,.42,n),0,.08,0)),e.add($(t.box(.3,.2,.3,n),0,.26,0)),e.add($(t.cyl(.1,.15,.42,r,{seg:10}),0,.57,0)),e.add($(t.box(.11,.1,.11,r),0,.83,0));for(let n=0;n<7;n++){let i=(n/6-.5)*Math.PI*1.1;e.add($(t.cone(.012,.1,r,{seg:5}),Math.sin(i)*.1,.92,Math.cos(i)*.06-.02))}let i=$(t.cyl(.025,.03,.34,r,{seg:8}),.14,.98,0);i.rotation.z=.35,e.add(i),e.add($(t.box(.06,.06,.06,r,{glow:`#ffd060`,glowDay:.6,glowNight:1.2}),.2,1.16,0)),e.add($(t.cone(.04,.09,`#ffcf66`,{seg:6,glow:`#ffd060`,glowDay:.7,glowNight:1.3}),.2,1.24,0))},eiffel(e,t){let n=`#6E5C4C`,r=[[.2,0],[.13,.16],[.085,.33],[.055,.5],[.035,.66],[.02,.85],[0,.92]];e.add(t.lathe(r,n,{seg:4}));let i=t.lathe(r,n,{seg:4});i.rotation.y=Math.PI/4,e.add(i),e.add($(t.box(.26,.025,.26,n),0,.33,0)),e.add($(t.box(.14,.02,.14,n),0,.66,0)),e.add($(t.cone(.01,.1,n,{seg:6}),0,.97,0))},arcDeTriomphe(e,t){let n=`#D9D0C1`,r=.58,i=.5,o=.34,s=new de;s.moveTo(-.58/2,0),s.lineTo(r/2,0),s.lineTo(r/2,i),s.lineTo(-.58/2,i),s.lineTo(-.58/2,0);let c=new S,l=.15,u=.22;c.moveTo(-.15,0),c.lineTo(-.15,u),c.absarc(0,u,l,Math.PI,0,!0),c.lineTo(l,0),c.lineTo(-.15,0),s.holes.push(c);let d=new fe(s,{depth:o,bevelEnabled:!1});d.translate(0,0,-.34/2),d.computeVertexNormals(),e.add(new v(d,Z(new a({color:n,flatShading:!0}),{color:n}))),e.add($(t.box(r*1.06,.08,o*1.06,n),0,.54,0))},sacreCoeur(e,t){let n=`#F1EEE6`;e.add($(t.box(.5,.26,.4,n),0,.13,0));let r=(r,i,a,o)=>{e.add($(t.cyl(a*.9,a,i,n,{seg:12}),r,o,0));let s=$(t.sphere(a,n,{seg:12}),r,o+i/2,0);s.scale.y=1.5,e.add(s)};r(0,.22,.15,.4),r(-.2,.1,.07,.33),r(.2,.1,.07,.33)},tokyoTower(e,t){let n=`#F25822`,r=`#EDEDED`,i=0;for(let a=0;a<9;a++){let o=a/9,s=(a+1)/9,c=.19*(1-o)+.03*o,l=.19*(1-s)+.03*s,u=.085,d=a%2?r:n;e.add($(t.cyl(l,c,u,d,{seg:4,glow:n,glowDay:0,glowNight:.7}),0,i+u/2,0)),i+=u}e.add($(t.box(.22,.02,.22,n,{glow:n,glowNight:.7}),0,.28,0)),e.add($(t.box(.12,.02,.12,r),0,.5,0)),e.add($(t.cone(.012,.16,r,{seg:6,glow:`#ff6a2a`,glowNight:.9}),0,i+.08,0))},pagoda(e,t){let n=0;for(let r=0;r<5;r++){let i=.42-r*.06,a=.11;e.add($(t.box(i,a,i,`#B23A2C`,{windows:r<4}),0,n+a/2,0)),e.add($(t.box(i*1.34,.03,i*1.34,`#7A3B2A`),0,n+a+.015,0)),n+=.16999999999999998}e.add($(t.cyl(.012,.012,.1,`#E0C040`,{seg:6}),0,n+.05,0)),e.add($(t.sphere(.03,`#E0C040`,{seg:8,glow:`#ffe680`,glowNight:.8}),0,n+.12,0))},neonBillboard(e,t){let n=`#20242C`;e.add($(t.box(.3,1,.3,n,{windows:!0}),0,.5,0));let r=[`#5AE8E0`,`#E85AA0`,`#E8E06A`],i=(n,r,i,a,o,s,c)=>{let l=$(t.box(n,r,.02,i,{glow:i,glowDay:.6,glowNight:1.1}),a,o,s);l.rotation.y=c,e.add(l)};i(.22,.34,r[0],0,.75,.16,0),i(.16,.5,r[1],.16,.5,0,Math.PI/2),i(.2,.22,r[2],0,.34,-.16,0),e.add($(t.cone(.01,.14,n,{seg:6,glow:`#E85AA0`,glowDay:.4,glowNight:1}),0,1.08,0))}};function zt(e,t){let n=new p;return Rt[e](n,It(t)),n}var Bt=``+new URL(`building-skyscraper-d-CapD2Zqe.glb`,import.meta.url).href,Vt=``+new URL(`building-n-hdv8kKtN.glb`,import.meta.url).href,Ht=``+new URL(`building-g-CsTB1qH9.glb`,import.meta.url).href,Ut=``+new URL(`colormap-CK8fW2HB.png`,import.meta.url).href,Wt={skyscraper:{url:Bt,color:`#9cc1dd`,fill:.92},midrise:{url:Vt,color:`#c9a07a`,fill:.96},setback:{url:Ht,color:`#d9c7a0`,fill:.9}};function Gt({windowGlow:e}){let t=new _e;t.setURLModifier(e=>e.includes(`colormap.png`)?Ut:e);let n=new oe(t),r={},i=!1,a=Promise.all(Object.entries(Wt).map(async([e,t])=>{r[e]=(await n.loadAsync(t.url)).scene})).then(()=>{i=!0,window.__landmarksReady=!0}).catch(e=>console.error(`landmark models failed:`,e)),o=9e3;function s(t,n,i={}){let a,s;if(Ft.includes(t))a=zt(t,{windowGlow:e,winColors:i.winColors,litFrac:i.litFrac,id:()=>++o}),s=1;else{let e=r[t],n=Wt[t];if(!e||!n)return null;a=e.clone(!0),s=n.fill}a.updateMatrixWorld(!0);let c=new R().setFromObject(a).getSize(new E);a.scale.setScalar(n.h*s/c.y),a.updateMatrixWorld(!0);let l=new R().setFromObject(a),u=l.getCenter(new E);return a.position.x+=n.x-u.x,a.position.z+=n.z-u.z,a.position.y+=n.plinthTop-l.min.y,Ft.includes(t)?a.traverse(e=>{e.isMesh&&(e.castShadow=!1,e.raycast=()=>{})}):a.traverse(n=>{if(!n.isMesh)return;n.castShadow=!1,n.raycast=()=>{};let r=n=>Ke(n.clone(),{color:Wt[t].color,id:++o,windowGlow:e,winColors:i.winColors,litFrac:i.litFrac});n.material=Array.isArray(n.material)?n.material.map(r):r(n.material)}),a}return{make:s,whenReady:a,heightFactor:e=>Q[e]??1,get ready(){return i}}}var Kt=[`clear`,`rain`,`snow`,`fog`];function qt({extent:e=7}={}){let t=new p;t.raycast=()=>{};let n=e+2,r=.25,i=(e,t)=>e+Math.random()*(t-e),a=new f(new h(.015,.5),new b({color:`#a9bdd6`,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),600);a.frustumCulled=!1,a.raycast=()=>{};let o=new Float32Array(600*3),s=new Float32Array(600);for(let e=0;e<600;e++)o[e*3]=i(-n,n),o[e*3+1]=i(r,11),o[e*3+2]=i(-n,n),s[e]=i(9,14);let c=new f(new h(.07,.07),new b({color:`#f3f7ff`,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),700);c.frustumCulled=!1,c.raycast=()=>{};let l=new Float32Array(700*3),u=new Float32Array(700),d=new Float32Array(700);for(let e=0;e<700;e++)l[e*3]=i(-n,n),l[e*3+1]=i(r,11),l[e*3+2]=i(-n,n),u[e]=i(0,6.28),d[e]=i(.6,1.2);t.add(a,c);let m=Array.from({length:8},()=>new E),g=0,_=`clear`,v=0,y=0,x=0,S=0,C=0,w=new z,T=(e,t,n,r)=>e+(t-e)*Math.min(1,n*r);function D(e){Kt.includes(e)&&(_=e)}function O(){_=Kt[(Kt.indexOf(_)+1)%Kt.length]}function ee(e,t){let f=_===`rain`,p=_===`snow`,h=_===`fog`,b=_!==`clear`;v=T(v,+!!b,e,1.4),y=T(y,+!!b,e,1.2),x=T(x,+!!h,e,.9),C=T(C,b&&!h?1:0,e,1),S=T(S,+!!p,e,p?.22:.5);let E=f?v:0,D=Math.round(600*E);for(let t=0;t<600;t++){if(t>=D){w.position.set(0,-50,0),w.scale.setScalar(0),w.updateMatrix(),a.setMatrixAt(t,w.matrix);continue}o[t*3+1]-=s[t]*e,o[t*3]+=e*1.1,o[t*3+1]<r&&(o[t*3]=i(-n,n),o[t*3+1]=11,o[t*3+2]=i(-n,n)),w.position.set(o[t*3],o[t*3+1],o[t*3+2]),w.rotation.set(0,0,0),w.scale.set(1,1,1),w.updateMatrix(),a.setMatrixAt(t,w.matrix)}a.instanceMatrix.needsUpdate=!0,a.material.opacity=.55*E,g=f?Math.round(8*v):0;for(let e=0;e<g;e++)m[e].set(Math.random(),Math.random(),.05*v);let O=Math.round(700*(p?v:0));for(let a=0;a<700;a++){if(a>=O){w.position.set(0,-50,0),w.scale.setScalar(0),w.updateMatrix(),c.setMatrixAt(a,w.matrix);continue}l[a*3+1]-=d[a]*e;let o=Math.sin(t*1.5+u[a])*.5;l[a*3+1]<r&&(l[a*3]=i(-n,n),l[a*3+1]=11,l[a*3+2]=i(-n,n)),w.position.set(l[a*3]+o,l[a*3+1],l[a*3+2]),w.rotation.set(0,0,0),w.scale.setScalar(1),w.updateMatrix(),c.setMatrixAt(a,w.matrix)}c.instanceMatrix.needsUpdate=!0,c.material.opacity=.9*(p?v:0)}return{group:t,update:ee,cycle:O,setKind:D,rainDrops:m,get kind(){return _},get intensity(){return v},get overcast(){return y},get fog(){return x},get snow(){return S},get cloud(){return C},get rainDropCount(){return g},poolCounts:{rain:600,snow:700}}}function Jt(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=(e,n,r)=>{let i=t.createRadialGradient(e,n,0,e,n,r);i.addColorStop(0,`rgba(255,255,255,0.95)`),i.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=i,t.beginPath(),t.arc(e,n,r,0,7),t.fill()};n(128*.42,128*.56,128*.26),n(128*.6,128*.5,128*.3),n(128*.5,128*.46,128*.22),n(128*.34,128*.54,128*.18),n(128*.7,128*.58,128*.18);let r=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5],i=t.getImageData(0,0,128,128),a=i.data;for(let e=0;e<128;e++)for(let t=0;t<128;t++){let n=(e*128+t)*4,i=a[n+3]/255,o=(r[e%4*4+t%4]+.5)/16-.5;a[n+3]=Math.max(0,Math.min(1,Math.floor(i*5+.5+o)/5))*255}t.putImageData(i,0,0);let o=new U(e);return o.colorSpace=V,o}function Yt({extent:e=8,count:t=16}={}){let n=new p;n.raycast=()=>{};let r=Jt(),i=e+6,a=(e,t)=>e+Math.random()*(t-e),o=[];for(let e=0;e<t;e++){let e=new N({map:r,transparent:!0,depthWrite:!1,opacity:0,fog:!0}),t=new I(e),s={sp:t,mat:e,wisp:Math.random(),x:a(-i,i),z:a(-i,i),hiY:a(4,6.8),loY:a(.6,2.2),w:a(3,5.6),h:a(1.7,3),speed:a(.25,.7),op:a(.6,1)};t.raycast=()=>{},o.push(s),n.add(t)}let s=new M,c=new M(`#ffffff`),l=new M(`#5b626e`);function u(e,t,n,r){let u=r?r.cloud:0,d=r?r.fog:0,f=Math.min(1,.4+.6*u+.5*d);s.copy(n.sky).lerp(c,.62),s.lerp(l,.6*u);for(let n=0;n<o.length;n++){let r=o[n],c=n/o.length<f;r.x+=r.speed*e*(.6+.8*u),r.x>i&&(r.x=-i,r.z=a(-i,i));let l=Math.min(Xt(r.x,-i,-i+3),1-Xt(r.x,i-3,i)),p=r.hiY*(1-d)+r.loY*d,m=1-.5*r.wisp,h=.72*Math.max(0,1-d-u)+1*u+.42*d,g=c?Math.max(0,h)*r.op*m*l:0;r.mat.opacity+=(g-r.mat.opacity)*Math.min(1,e*2.5),r.mat.color.copy(s);let _=r.w*(1+.6*d)*(1+.4*r.wisp),v=r.h*(1-.35*d);r.sp.scale.set(_,v,1),r.sp.position.set(r.x,p+Math.sin(t*.3+n)*.15,r.z)}}function d(e){r=e;for(let t of o)t.mat.map=e,t.mat.needsUpdate=!0}let f=o.map((e,t)=>({kind:`cloud`,label:`cloud ${t+1}`,getWorldPos:t=>t.copy(e.sp.position),active:()=>e.mat.opacity>.06,info:()=>`cloud · ${e.wisp>.6?`wispy`:`puffy`} · drifting east${e.sp.position.y<3?` (low mist)`:``}`}));function m(){return f}return{group:n,update:u,setTexture:d,getFollowables:m,get count(){return o.length}}}function Xt(e,t,n){let r=Math.max(0,Math.min(1,(e-t)/(n-t)));return r*r*(3-2*r)}var Zt={person:4.5,car:6,gull:6,fish:8,boat:9,cloud:16};function Qt({rig:e,getCamera:t,sources:n=[]}){let r=null,i=new E,a=new E,o=()=>{let e=[];for(let t of n)if(t&&t.getFollowables){let n=t.getFollowables();n&&e.push(...n)}return e},s=e=>!e.active||e.active();function c(t){return t?(r=t,e.setFollow(e=>t.getWorldPos(e),{frame:t.frame??Zt[t.kind]??8}),t):null}function l(){r=null,e.clearFollow()}function u(e,n,r=.14){let l=t(),u=null,d=r;for(let t of o()){if(!s(t)||(t.getWorldPos(i),a.copy(i).project(l),a.z>1||a.z<-1))continue;let r=Math.hypot(a.x-e,a.y-n);r<d&&(d=r,u=t)}return u?c(u):null}function d(e=1,t=null){let n=o().filter(e=>(!t||e.kind===t)&&s(e));if(t||(n=$t(n)),!n.length)return null;let i=r?n.indexOf(r):-1;return i=((i+e)%n.length+n.length)%n.length,c(n[i])}function f(){r&&r.active&&!r.active()&&l()}return{pickAt:u,cycle:d,follow:c,release:l,prune:f,get focus(){return r},get count(){return o().length},get readout(){return r?{kind:r.kind,label:r.label,info:r.info?r.info():``}:null}}}function $t(e){let t=new Map;for(let n of e)t.has(n.kind)||t.set(n.kind,[]),t.get(n.kind).push(n);let n=[...t.values()],r=[];for(let e=0,t=!0;t;e++){t=!1;for(let i of n)e<i.length&&(r.push(i[e]),t=!0)}return r}var en={maxSpeed:6,accel:9,drag:5,turnRate:2.1,chaseDist:7,chaseElev:.42};function tn(e=en){let t=new E,n=new E,r=new E,i=new E,a=new o,s=.45;function c(o,c,l,u){let d=u&&u.heightAt||(()=>0),f=ye(Math.abs(o.speed)/e.maxSpeed,0,1),p=o.speed>=0?1:-1;if(o.yaw+=c.steer*e.turnRate*(.35+.65*f)*p*l,c.throttle!==0)o.speed+=c.throttle*e.accel*l;else{let t=Math.min(Math.abs(o.speed),e.drag*l);o.speed-=Math.sign(o.speed)*t}o.speed=ye(o.speed,-e.maxSpeed*.5,e.maxSpeed);let m=Math.sin(o.yaw),h=Math.cos(o.yaw);o.x+=m*o.speed*l,o.z+=h*o.speed*l;let g=d(o.x,o.z);o.y=ve(o.y,g,18,l);let _=d(o.x-s,o.z),v=d(o.x+s,o.z),y=d(o.x,o.z-s),b=d(o.x,o.z+s);return t.set(_-v,2*s,y-b).normalize(),n.set(m,0,h),r.crossVectors(t,n).normalize(),i.crossVectors(r,t).normalize(),a.makeBasis(r,t,i),o.quat.setFromRotationMatrix(a),o}return{step:c}}var nn={accel:7,lift:9,maxV:5,chaseDist:9.5,chaseElev:.4},rn={air:{drag:2,maxSpeed:8,turn:1.8,vDrag:2.2,buoyancy:0},water:{drag:4.6,maxSpeed:3.6,turn:1.3,vDrag:4.5,buoyancy:1.1},ground:{drag:5.5,maxSpeed:5,turn:2,vDrag:9,buoyancy:0}},an=[`drag`,`maxSpeed`,`turn`,`vDrag`,`buoyancy`],on=(e,t,n)=>e+(t-e)*n;function sn(e=nn){let t=new E,r=new E,i=new E,a=new E,s=new o,c=new n,l={drag:0,maxSpeed:0,turn:0,vDrag:0,buoyancy:0},u=.4,d=.3,f=-900;function p(e,t){let n=t.heightAt(e.x,e.z),r=t.waterHeightAt?t.waterHeightAt(e.x,e.z):f,i=e.y,a=e.medium||`air`;if(r>f){if(a===`water`){if(i<=r+u)return`water`}else if(i<r-u)return`water`}if(a===`ground`){if(i<=n+d+u)return`ground`}else if(i<n+d)return`ground`;return`air`}function m(n,o,u,d){let f=n.medium||`air`,m=p(n,d);n.medium=m,m===f?n.crossingT>0&&(n.crossingT=Math.max(0,n.crossingT-u/.6)):(n.crossing=f+`>`+m,n.crossingT=1);let h=rn[m],g=rn[f],_=1-(n.crossingT||0),v=l;for(let e of an)v[e]=on(g[e],h[e],_);n.yaw+=o.steer*v.turn*u,o.throttle===0?n.speed-=Math.sign(n.speed)*Math.min(Math.abs(n.speed),v.drag*u):n.speed+=o.throttle*e.accel*u,n.speed=ye(n.speed,-v.maxSpeed*.6,v.maxSpeed);let y=Math.sin(n.yaw),b=Math.cos(n.yaw);n.x+=y*n.speed*u,n.z+=b*n.speed*u;let x=d.heightAt(n.x,n.z);if(m===`ground`&&o.lift<=0){n.vy=0,n.y=ve(n.y,x,14,u);let e=.45,o=d.heightAt(n.x-e,n.z),c=d.heightAt(n.x+e,n.z),l=d.heightAt(n.x,n.z-e),f=d.heightAt(n.x,n.z+e);t.set(o-c,2*e,l-f).normalize(),r.set(y,0,b),i.crossVectors(t,r).normalize(),a.crossVectors(i,t).normalize(),s.makeBasis(i,t,a),n.quat.setFromRotationMatrix(s)}else{n.vy+=(o.lift*e.lift+v.buoyancy)*u,n.vy-=Math.sign(n.vy)*Math.min(Math.abs(n.vy),v.vDrag*u),n.vy=ye(n.vy,-e.maxV,e.maxV),n.y+=n.vy*u,n.y<x&&(n.y=x,n.vy<0&&(n.vy=0));let t=ye(-o.steer*.35,-.4,.4),r=ye(-n.vy*.06,-.3,.3);c.set(r,n.yaw,t,`YXZ`),n.quat.setFromEuler(c)}return n}return{step:m}}var cn={ground:tn,spacecraft:sn},ln=.55,un={throttle:0,steer:0,lift:0};function dn({rig:e,world:t}={}){let n=`free`,r=null,i=null,a=0;function o(t){if(!t||!t.pilot)return!1;r&&s(),r=t;let o=r.pilot;return i=(cn[o.model]||cn.ground)(o.profile),o.suspendAutonomy(),e.setFollow(e=>o.getWorldPos(e),{frame:o.profile.chaseDist}),e.setElevation(o.profile.chaseElev),e.setAzimuth(o.getTransform().yaw+Math.PI,!0),n=`entering`,a=ln,!0}function s(){return r?(r.pilot.resumeAutonomy(),e.clearFollow(),r=null,i=null,n=`free`,a=0,!0):!1}function c(o,s){if(!r)return;let c=r.pilot;if(n===`entering`){a-=o,e.setAzimuth(c.getTransform().yaw+Math.PI),a<=0&&(n=`piloting`);return}let l=c.getTransform();i.step(l,s||un,o,t),c.setTransform(l),e.setAzimuth(l.yaw+Math.PI)}return{possess:o,release:s,step:c,get active(){return!!r},get piloting(){return n===`piloting`},get state(){return n},get craft(){return r},get controlHints(){return r?r.pilot.controlHints:``},get speed(){return r?r.pilot.getTransform().speed:0},get telemetry(){if(!r)return null;let e=r.pilot.getTransform(),n=t&&t.heightAt?t.heightAt(e.x,e.z):0,i=t&&t.waterHeightAt?t.waterHeightAt(e.x,e.z):-900;return{medium:e.medium||null,speed:e.speed||0,y:e.y,altitude:Math.max(0,e.y-n),depth:i>-900?Math.max(0,i-e.y):0,climb:e.vy||0}}}}var fn=new E,pn=new E,mn=new E,hn=new E,gn=new o;function _n(){let e=document.createElement(`canvas`);e.width=256,e.height=64;let t=e.getContext(`2d`);t.strokeStyle=`#ffffff`,t.lineWidth=6,t.lineCap=`round`,t.lineJoin=`round`;let n=[14,24,36,24];for(let e=0;e<4;e++){let r=e*64,i=n[e];t.beginPath(),t.moveTo(r+8,40),t.quadraticCurveTo(r+24,i,r+32,36),t.quadraticCurveTo(r+40,i,r+56,40),t.stroke()}let r=new U(e);return r.colorSpace=V,r}function vn(){let e=document.createElement(`canvas`);e.width=e.height=96;let t=e.getContext(`2d`),n=(e,n,r)=>{let i=t.createRadialGradient(e,n,0,e,n,r);i.addColorStop(0,`rgba(255,255,255,0.95)`),i.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=i,t.beginPath(),t.arc(e,n,r,0,7),t.fill()};n(96*.42,96*.56,96*.26),n(96*.6,96*.5,96*.3),n(96*.5,96*.46,96*.22),n(96*.7,96*.58,96*.18);let r=new U(e);return r.colorSpace=V,r}function yn(){let e=new p,t=new v(new B(.46,.2,1.1),Z(new a({color:`#5a6675`,roughness:.6,metalness:.2,flatShading:!0}),{color:`#5a6675`}));t.position.y=.02;let n=new v(new B(.3,.22,.42),Z(new a({color:`#e7ecf2`,roughness:.7,flatShading:!0}),{color:`#e7ecf2`}));return n.position.set(0,.18,.08),e.add(t,n),e.traverse(e=>{e.isMesh&&(e.castShadow=!0),e.raycast=()=>{}}),e}function bn(){let e=new v(new j(.18,9,7),Z(new a({color:`#5b6f86`,roughness:.5,flatShading:!0}),{color:`#5b6f86`}));return e.scale.set(.55,.5,1),e.raycast=()=>{},e}function xn(){let e=new p,t=new v(new B(.18,.34,.14),Z(new a({color:`#3b6ea5`,roughness:.8,flatShading:!0}),{color:`#3b6ea5`}));t.position.y=.17;let n=new v(new B(.13,.13,.13),Z(new a({color:`#e3b98c`,roughness:.8,flatShading:!0}),{color:`#e3b98c`}));return n.position.y=.41,e.add(t,n),e.traverse(e=>{e.isMesh&&(e.castShadow=!0),e.raycast=()=>{}}),e}function Sn(){let e=new p,t=new v(new B(.5,.22,.84),Z(new a({color:`#d2622e`,roughness:.6,metalness:.2,flatShading:!0}),{color:`#d2622e`}));t.position.y=.26;let n=new v(new B(.3,.16,.32),Z(new a({color:`#2b2f37`,roughness:.8,flatShading:!0}),{color:`#2b2f37`}));n.position.set(0,.42,-.06);let r=new v(new B(.34,.12,.22),Z(new a({color:`#e2e7ee`,roughness:.7,flatShading:!0}),{color:`#e2e7ee`}));r.position.set(0,.28,.42);let i=new W(.14,.14,.13,10);for(let[t,n]of[[-.27,.3],[.27,.3],[-.27,-.3],[.27,-.3]]){let r=new v(i,Z(new a({color:`#1c2026`,roughness:.9,flatShading:!0}),{color:`#1c2026`}));r.rotation.z=Math.PI/2,r.position.set(t,.14,n),e.add(r)}return e.add(t,n,r),e.traverse(e=>{e.isMesh&&(e.castShadow=!0),e.raycast=()=>{}}),e}function Cn(){let e=new p,t=new v(new W(.5,.64,.16,18),Z(new a({color:`#8a93a8`,roughness:.4,metalness:.5,flatShading:!0}),{color:`#8a93a8`}));t.position.y=.3;let n=new v(new j(.3,16,10,0,Math.PI*2,0,Math.PI/2),Z(new a({color:`#9fe6ff`,roughness:.25,metalness:.3,flatShading:!0,transparent:!0,opacity:.85}),{color:`#9fe6ff`}));n.position.y=.38;let r=new v(new B(.12,.1,.34),Z(new a({color:`#ff7a4d`,roughness:.6,flatShading:!0}),{color:`#ff7a4d`}));return r.position.set(0,.3,.52),e.add(t,n,r),e.traverse(e=>{e.isMesh&&(e.castShadow=!0),e.raycast=()=>{}}),e}function wn({heightAt:e,seaSurfaceY:n=0,waterY:r=.06}={}){let i=new p;i.raycast=()=>{};let a=e||(()=>0),o=[],s=[],c={gull:0,boat:0,fish:0,cloud:0,person:0,atv:0,craft:0},l=Tt({frames:4,fps:7}),u=_n(),d=vn(),f=[`#ffffff`,`#cfd4da`,`#c8a06a`];function m(e,i,o,s){let p=(c[e]||0)*1.7+(s.phase||0);if(e===`gull`){let n=l.makeInstanceTexture(u),r=new I(new N({map:n,color:new M(f[c.gull%3]),transparent:!0,opacity:.9,depthWrite:!1,fog:!0}));r.scale.setScalar(.5),r.raycast=()=>{};let s=i,d=o,m=1.4+Math.random()*.6,h=a(i,o)+2.4,g=.5+Math.random()*.3;return{kind:e,obj:r,x:i,z:o,update(e,n,i){let a=p+n*g;r.position.set(s+Math.cos(a)*m,h+Math.sin(n*1.4+p)*.12,d+Math.sin(a)*m),l.step(r.material.map,n,p);let o=i?1-i.windowGlow:1;r.material.opacity=t.clamp(.25+o*.7,0,.95)},info:()=>`gull · circling`,dispose(){n.dispose()}}}if(e===`cloud`){let t=new I(new N({map:d,transparent:!0,opacity:.85,depthWrite:!1,fog:!0}));t.scale.set(3.4,1.9,1),t.raycast=()=>{};let n=i,r=o,a=5+Math.random()*1.4,s=.12+Math.random()*.1;return{kind:e,obj:t,x:i,z:o,update(e,i,o){t.position.set(n+Math.sin(i*.18+p)*1.2,a+Math.sin(i*.3+p)*.18,r+s*Math.cos(i*.1+p)),o&&o.sky&&t.material.color.copy(o.sky).lerp(Tn,.62)},info:()=>`cloud · drifting`}}if(e===`boat`){let t=yn();t.position.set(i,r,o);let n=i,a=o,s=Math.random()*Math.PI*2;return{kind:e,obj:t,x:i,z:o,update(e,c){s+=Math.sin(c*.3+p)*.4*e;let l=.6;n+=Math.sin(s)*l*e,a+=Math.cos(s)*l*e,n+=(i-n)*.4*e,a+=(o-a)*.4*e;let u=Math.sin(c*1.1+p)*.025;t.position.set(n,r+u,a),t.rotation.set(Math.sin(c*.9+p)*.04,s,0)},info:()=>`boat · drifting`}}if(e===`fish`){let t=bn();t.position.set(i,-5,o);let n=6+Math.random()*5,a=Math.random()*Math.PI*2,s=Math.random()*n,c={kind:e,obj:t,x:i,z:o,active:!0,update(e){if(s+=e,s>=n){let e=(s-n)/1.3;if(e>=1){s=0,t.position.set(i,-5,o),c.active=!1;return}let l=Math.sin(Math.PI*e);t.position.set(i+Math.sin(a)*(e-.5)*1,r-.1+l*.5,o+Math.cos(a)*(e-.5)*1),t.rotation.set(Math.cos(Math.PI*e)*.9,a,0),c.active=!0}else c.active=!1},info:()=>c.active?`fish · breaching!`:`fish · below`};return c}if(e===`person`){let t=xn();t.position.set(i,a(i,o),o);let r=Math.random()*Math.PI*2;return{kind:e,obj:t,x:i,z:o,update(e,s){r+=(Math.random()-.5)*1.4*e;let c=.55,l=t.position.x+Math.sin(r)*c*e,u=t.position.z+Math.cos(r)*c*e,d=l+(i-l)*.25*e,f=u+(o-u)*.25*e;a(d,f)<n+.02&&(r+=Math.PI,d=t.position.x,f=t.position.z),t.position.set(d,a(d,f),f),t.rotation.y=r},info:()=>`person · wandering`}}if(e===`atv`){let t=Sn(),n={x:i,y:a(i,o),z:o,yaw:s.yaw??Math.random()*Math.PI*2,speed:0,quat:new L},r=!1,c=()=>{let e=.45,t=a(n.x-e,n.z),r=a(n.x+e,n.z),i=a(n.x,n.z-e),o=a(n.x,n.z+e);fn.set(t-r,2*e,i-o).normalize(),pn.set(Math.sin(n.yaw),0,Math.cos(n.yaw)),mn.crossVectors(fn,pn).normalize(),hn.crossVectors(mn,fn).normalize(),gn.makeBasis(mn,fn,hn),n.quat.setFromRotationMatrix(gn)},l=()=>{n.y=a(n.x,n.z),c(),t.position.set(n.x,n.y,n.z),t.quaternion.copy(n.quat)};return l(),{kind:e,obj:t,x:i,z:o,get piloted(){return r},update(){r||l()},info:()=>r?`ATV · piloted`:`ATV · parked`,pilot:{model:`ground`,profile:en,controlHints:`W/S throttle · A/D steer · Esc to exit`,getWorldPos:e=>e.copy(t.position),getTransform:()=>n,setTransform:e=>{t.position.set(e.x,e.y,e.z),t.quaternion.copy(e.quat)},suspendAutonomy:()=>{r=!0},resumeAutonomy:()=>{r=!1,n.speed=0}}}}if(e===`craft`){let t=Cn(),n=1.3,r=Math.random()*Math.PI*2,c={x:i,y:a(i,o)+n,z:o,yaw:s.yaw??Math.random()*Math.PI*2,speed:0,vy:0,quat:new L,medium:`air`,crossing:null,crossingT:0},l=!1;return{kind:e,obj:t,x:i,z:o,get piloted(){return l},update(e,i){if(l)return;c.yaw+=.3*e;let o=a(c.x,c.z)+n+Math.sin((i||0)*.8+r)*.08;c.y+=(o-c.y)*Math.min(1,e*3),t.position.set(c.x,c.y,c.z),t.rotation.set(0,c.yaw,0)},info:()=>l?`spacecraft · piloted`:`spacecraft · hovering`,pilot:{model:`spacecraft`,profile:nn,controlHints:`W/S thrust · A/D steer · Space/Shift climb/dive · Esc exit`,getWorldPos:e=>e.copy(t.position),getTransform:()=>c,setTransform:e=>{t.position.set(e.x,e.y,e.z),t.quaternion.copy(e.quat)},suspendAutonomy:()=>{l=!0},resumeAutonomy:()=>{l=!1,c.speed=0,c.vy=0}}}}return null}function h(e){return c[e]=(c[e]||0)+1,`${e} ${c[e]}`}function g(e,t,n,r={}){let a=m(e,t,n,r);if(!a)return null;a.opts=r,o.push(a),i.add(a.obj);let c={kind:e,label:h(e),getWorldPos:e=>e.copy(a.obj.position),active:()=>a.active!==!1,info:()=>a.info()};return a.pilot&&(c.pilot=a.pilot),a.followable=c,s.push(c),a}function _(e){if(!e)return!1;let t=o.indexOf(e);if(t<0)return!1;i.remove(e.obj),e.dispose&&e.dispose(),o.splice(t,1);let n=s.indexOf(e.followable);return n>=0&&s.splice(n,1),!0}function v(e,t,n=2.5){let r=null,i=n*n;for(let n of o){let a=n.obj.position.x-e,o=n.obj.position.z-t,s=a*a+o*o;s<i&&(i=s,r=n)}if(!r)return null;let a={kind:r.kind,x:r.x,z:r.z,opts:r.opts};return _(r),a}function y(e,t,n){for(let r=0;r<o.length;r++)o[r].update(e,t,n);typeof window<`u`&&(window.__placedLife=b())}function b(){let e={gull:0,boat:0,fish:0,cloud:0,person:0,atv:0,craft:0,total:o.length};for(let t of o)e[t.kind]++;return e}function x(){return s}function S(){return o.map(e=>({kind:e.kind,x:e.x,z:e.z,opts:e.opts}))}function C(){for(let e of[...o])_(e)}function w(e){if(C(),e)for(let t of e)g(t.kind,t.x,t.z,t.opts||{})}return{group:i,update:y,spawn:g,despawn:_,removeNear:v,getFollowables:x,snapshot:S,restore:w,clear:C,counts:b,get count(){return o.length}}}var Tn=new M(`#ffffff`),En=`varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0); 
}`,Dn=`precision highp float;

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
}`,On=`precision highp float;

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
}`,kn=`precision highp float;

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
}`,An=`precision highp float;
varying vec2 vUv;
uniform sampler2D uSrc;
void main() { gl_FragColor = vec4(texture2D(uSrc, vUv).r, 0.0, 0.0, 0.0); }`,jn=`precision highp float;
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
}`,Mn=`precision highp float;
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
}`,Nn=`precision highp float;
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
}`;function Pn({renderer:e,N:t,cell:n,half:r,worldSize:o,seaY:s=0,FLOW:u,DAMP:d,MIN_DEPTH:f,KC:p,KE:m,KD:g,KADV:_,MAXD:y,readTerrain:b}){let x=e.getContext();if(!(x&&x.getExtension&&x.getExtension(`EXT_color_buffer_float`)))return typeof console<`u`&&console.warn(`[L87] EXT_color_buffer_float unavailable — GPU flow backend cannot run; staying on CPU.`),null;let S={type:i,format:le,minFilter:l,magFilter:l,wrapS:ae,wrapT:ae,depthBuffer:!1,stencilBuffer:!1},C=[new me(t,t,S),new me(t,t,S)],w=[new me(t,t,S),new me(t,t,S)],T=[new me(t,t,S),new me(t,t,S)],ee=new Float32Array(t*t*4),A=new he(ee,t,t,le,i);A.minFilter=l,A.magFilter=l,A.wrapS=A.wrapT=ae;let te=new Float32Array(t*t),j=!1,N=1,P=!0,F=new O,ne=new c(-1,1,1,-1,0,1),I=new v(new h(2,2),null);I.frustumCulled=!1,F.add(I);let oe=new ge(1/t,1/t),L=(e,t)=>new ie({vertexShader:En,fragmentShader:e,uniforms:t}),R=L(Dn,{uState:{value:null},uTerr:{value:null},uFlux:{value:null},uTexel:{value:oe},uN:{value:t},uDt:{value:0},uFlow:{value:u},uDamp:{value:d}}),se=L(On,{uState:{value:null},uTerr:{value:null},uFlux:{value:null},uTexel:{value:oe},uN:{value:t},uDt:{value:0},uSeaY:{value:s}}),z=L(kn,{uState:{value:null},uTerr:{value:null},uN:{value:t},uSeaY:{value:s},uRain:{value:0},uPourCount:{value:0},uPours:{value:Array.from({length:8},()=>new E)},uPourR:{value:new Float32Array(8)}}),ce=L(An,{uSrc:{value:A}}),B=()=>({uState:{value:null},uTerr:{value:null},uFlux:{value:null},uTexel:{value:oe},uN:{value:t},uDt:{value:0},uCell:{value:n},uSeaY:{value:s},uKC:{value:p},uKE:{value:m},uKD:{value:g},uMaxD:{value:y},uMinDepth:{value:f},uErosK:{value:N}}),V=L(jn,B()),H=L(Mn,B()),ue=L(Nn,{uState:{value:null},uTerr:{value:null},uFlux:{value:null},uTexel:{value:oe},uN:{value:t},uDt:{value:0},uSeaY:{value:s},uKADV:{value:_}});function U(t,n){I.material=t;let r=e.getRenderTarget();e.setRenderTarget(n),e.render(F,ne),e.setRenderTarget(r)}let de=new M;function W(t){let n=e.getRenderTarget(),r=e.getClearAlpha();e.getClearColor(de),e.setRenderTarget(t),e.setClearColor(0,0),e.clear(!0,!1,!1),e.setClearColor(de,r),e.setRenderTarget(n)}function fe(){b(te);for(let e=0;e<t*t;e++)ee[e*4]=te[e];A.needsUpdate=!0,U(ce,T[0])}function pe(){W(C[0]),W(C[1]),W(w[0]),W(w[1])}pe();let _e=t*t,ve=new Float32Array(_e*3),ye=new Float32Array(_e*2);for(let e=0;e<t;e++)for(let i=0;i<t;i++){let a=e*t+i;ve[a*3]=i*n-r,ve[a*3+1]=0,ve[a*3+2]=e*n-r,ye[a*2]=(i+.5)/t,ye[a*2+1]=(e+.5)/t}let be=[];for(let e=0;e<t-1;e++)for(let n=0;n<t-1;n++){let r=e*t+n,i=e*t+n+1,a=(e+1)*t+n,o=(e+1)*t+n+1;be.push(r,a,i,i,a,o)}let G=new re;G.setAttribute(`position`,new D(ve,3)),G.setAttribute(`aGridUv`,new D(ye,2)),G.setIndex(be),G.boundingSphere=new k(new E(0,0,0),o);let K={uStateTex:{value:C[0].texture},uTerrTex:{value:T[0].texture},uMinDepth:{value:f}},q=new a({color:`#2f6f96`,roughness:.14,metalness:.45,transparent:!0,depthWrite:!1});q.onBeforeCompile=e=>{e.uniforms.uStateTex=K.uStateTex,e.uniforms.uTerrTex=K.uTerrTex,e.uniforms.uMinDepth=K.uMinDepth,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
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
  gl_FragColor.a *= clamp((vDepth - 0.012) * 7.0, 0.16, 0.86);`)},q.customProgramCacheKey=()=>`lgr-flow-gpu`;let J=new v(G,q);J.frustumCulled=!1,J.castShadow=!1,J.receiveShadow=!1,J.raycast=()=>{},J.renderOrder=3,J.visible=!1;function xe(){K.uStateTex.value=C[0].texture,K.uTerrTex.value=T[0].texture}function Se(e){e=Math.min(e,1/30),(!j||P)&&(fe(),P=!1),R.uniforms.uState.value=C[0].texture,R.uniforms.uTerr.value=T[0].texture,R.uniforms.uFlux.value=w[0].texture,R.uniforms.uDt.value=e,U(R,w[1]),w.reverse(),se.uniforms.uState.value=C[0].texture,se.uniforms.uTerr.value=T[0].texture,se.uniforms.uFlux.value=w[0].texture,se.uniforms.uDt.value=e,U(se,C[1]),C.reverse(),j&&(V.uniforms.uState.value=C[0].texture,V.uniforms.uTerr.value=T[0].texture,V.uniforms.uFlux.value=w[0].texture,V.uniforms.uDt.value=e,V.uniforms.uErosK.value=N,U(V,T[1]),H.uniforms.uState.value=C[0].texture,H.uniforms.uTerr.value=T[0].texture,H.uniforms.uFlux.value=w[0].texture,H.uniforms.uDt.value=e,H.uniforms.uErosK.value=N,U(H,C[1]),T.reverse(),C.reverse(),ue.uniforms.uState.value=C[0].texture,ue.uniforms.uTerr.value=T[0].texture,ue.uniforms.uFlux.value=w[0].texture,ue.uniforms.uDt.value=e,U(ue,C[1]),C.reverse()),xe()}function Ce(){z.uniforms.uState.value=C[0].texture,z.uniforms.uTerr.value=T[0].texture,U(z,C[1]),C.reverse(),xe()}function we(e,t,i=.5,a=1.6){(P||!j)&&(fe(),P=!1);let o=(e+r)/n,s=(t+r)/n,c=Math.max(1,a/n);z.uniforms.uRain.value=0,z.uniforms.uPourCount.value=1,z.uniforms.uPours.value[0].set(o,s,i),z.uniforms.uPourR.value[0]=c,Ce()}function Te(e=.004){(P||!j)&&(fe(),P=!1),z.uniforms.uPourCount.value=0,z.uniforms.uRain.value=e,Ce()}function Ee(){pe(),P=!0,xe()}function De(e,t){j=!!e,t!=null&&(N=Math.max(0,t)),P=!0}let Oe=new Float32Array(t*t*4);function ke(n){return e.readRenderTargetPixels(n,0,0,t,t,Oe),Oe}function Ae(){let e=ke(C[0]),n=0;for(let r=0;r<t*t;r++)n+=e[r*4];return n}function Y(e,i){let a=Math.round((e+r)/n),o=Math.round((i+r)/n);return a<0||a>=t||o<0||o>=t?0:ke(C[0])[(o*t+a)*4]}function je(){let e=ke(C[0]),n=0;for(let r=0;r<t*t;r++)n+=e[r*4+1];return n}function Me(){let e=ke(C[0]),n=new Float32Array(t*t);for(let r=0;r<t*t;r++)n[r]=e[r*4];return n}function Ne(){let e=ke(T[0]),n=new Float32Array(t*t);for(let r=0;r<t*t;r++)n[r]=e[r*4];return n}function Pe(e){J.visible=!!e}function Fe(){for(let e of C)e.dispose();for(let e of w)e.dispose();for(let e of T)e.dispose();A.dispose(),G.dispose(),q.dispose(),I.geometry.dispose(),R.dispose(),se.dispose(),z.dispose(),ce.dispose(),V.dispose(),H.dispose(),ue.dispose()}return{mesh:J,step:Se,pourAt:we,rain:Te,clear:Ee,totalWater:Ae,cellAt:Y,totalSediment:je,readW:Me,readTerr:Ne,setErosion:De,setVisible:Pe,dispose:Fe,get grid(){return t},get erosion(){return j}}}function Fn({worldHeightAt:e,applyErosion:t=null,worldSize:n=26,grid:r=96,seaY:i=0,renderer:o=null}={}){let s=r,c=new Float32Array(s*s),l=new Float32Array(s*s),u=new Float32Array(s*s),d=new Float32Array(s*s),f=new Float32Array(s*s),m=new Float32Array(s*s),h=new Float32Array(s*s),g=new Float32Array(s*s),_=new Float32Array(s*s),y=!1,b=1,x=n/(s-1),S=n/2,C=e||(()=>0),w=e=>e*x-S,T=e=>e*x-S,E=(e,t)=>t*s+e,O=26*x,ee=.9,k=.006,A=.5,te=.25,j=.3,M=.006;function N(){for(let e=0;e<s;e++)for(let t=0;t<s;t++)m[E(t,e)]=C(w(t),T(e))}let P=`cpu`,F=null;function ne(e){N();for(let t=0;t<s*s;t++)e[t]=m[t]}function ie(){return F||!o?F:(F=Pn({renderer:o,N:s,cell:x,half:S,worldSize:n,seaY:i,FLOW:O,DAMP:ee,MIN_DEPTH:k,KC:A,KE:te,KD:j,KADV:6,MAXD:M,readTerrain:ne}),F&&fe.add(F.mesh),F)}function ae(e){if(e===`gpu`){if(ie(),!F)return typeof console<`u`&&console.info(`[L87] GPU backend unavailable (no renderer / no float RT) — staying on CPU (oracle).`),P=`cpu`,I(),P;P=`gpu`,F.setErosion(y,b)}else P=`cpu`;return I(),P}function I(){F&&F.setVisible(P===`gpu`),P===`gpu`?W.visible=!1:pe()}function oe(e){if(P===`gpu`&&F)return F.step(e);e=Math.min(e,1/30),N();for(let t=0;t<s;t++)for(let n=0;n<s;n++){let r=E(n,t),i=m[r]+c[r],a=0,o=0,p=0,h=0;n>0&&(a=Math.max(0,l[r]*ee+e*O*(i-(m[r-1]+c[r-1])))),n<s-1&&(o=Math.max(0,u[r]*ee+e*O*(i-(m[r+1]+c[r+1])))),t>0&&(h=Math.max(0,f[r]*ee+e*O*(i-(m[r-s]+c[r-s])))),t<s-1&&(p=Math.max(0,d[r]*ee+e*O*(i-(m[r+s]+c[r+s]))));let g=(a+o+p+h)*e,_=g>1e-9?Math.min(1,c[r]/g):1;l[r]=a*_,u[r]=o*_,f[r]=h*_,d[r]=p*_}for(let t=0;t<s;t++)for(let n=0;n<s;n++){let r=E(n,t),a=0;n>0&&(a+=u[r-1]),n<s-1&&(a+=l[r+1]),t>0&&(a+=d[r-s]),t<s-1&&(a+=f[r+s]);let o=l[r]+u[r]+f[r]+d[r];c[r]+=e*(a-o),c[r]<0&&(c[r]=0),m[r]<i-.02&&(c[r]=0)}y&&t&&L(e),pe()}function L(e){_.fill(0);for(let t=0;t<s;t++)for(let n=0;n<s;n++){let r=E(n,t);if(c[r]<=k){if(h[r]>0){let t=Math.min(M,j*h[r]*e);_[r]+=t,h[r]-=t}continue}let i=(l[r]+u[r]+d[r]+f[r])/(c[r]+.02),a=n>0?m[r-1]:m[r],o=n<s-1?m[r+1]:m[r],p=t>0?m[r-s]:m[r],g=t<s-1?m[r+s]:m[r],v=Math.min(2,Math.hypot(o-a,g-p)/(2*x)),y=A*i*Math.max(.05,v)*b;if(y>h[r]){let t=Math.min(M,te*(y-h[r])*e);_[r]-=t,h[r]+=t}else{let t=Math.min(M,j*(h[r]-y)*e);_[r]+=t,h[r]-=t,h[r]<0&&(h[r]=0)}}g.set(h);for(let t=0;t<s;t++)for(let n=0;n<s;n++){let r=E(n,t),i=l[r]+u[r]+d[r]+f[r];if(i<=1e-9||h[r]<=1e-9)continue;let a=Math.min(h[r],h[r]*6*e);g[r]-=a,n>0&&(g[r-1]+=a*l[r]/i),n<s-1&&(g[r+1]+=a*u[r]/i),t>0&&(g[r-s]+=a*f[r]/i),t<s-1&&(g[r+s]+=a*d[r]/i)}h.set(g);for(let e=0;e<s*s;e++)h[e]<0&&(h[e]=0),m[e]<i-.02&&(h[e]=0);t(_,s)}function R(e,t){y=!!e,t!=null&&(b=Math.max(0,t)),e||h.fill(0),P===`gpu`&&F&&F.setErosion(e,t)}function se(e,t,n=.5,r=1.6){if(P===`gpu`&&F)return F.pourAt(e,t,n,r);let i=(e+S)/x,a=(t+S)/x,o=Math.max(1,r/x),l=Math.max(0,Math.floor(i-o)),u=Math.min(s-1,Math.ceil(i+o)),d=Math.max(0,Math.floor(a-o)),f=Math.min(s-1,Math.ceil(a+o));for(let e=d;e<=f;e++)for(let t=l;t<=u;t++){let r=Math.hypot(t-i,e-a);r<=o&&(c[E(t,e)]+=n*(1-r/o))}}function z(e=.004){if(P===`gpu`&&F)return F.rain(e);N();for(let t=0;t<s*s;t++)m[t]>i&&(c[t]+=e)}function ce(){if(P===`gpu`&&F)return F.clear();c.fill(0),l.fill(0),u.fill(0),d.fill(0),f.fill(0),h.fill(0),pe()}function le(){if(P===`gpu`&&F)return F.totalWater();let e=0;for(let t=0;t<s*s;t++)e+=c[t];return e}function B(e,t){if(P===`gpu`&&F)return F.cellAt(e,t);let n=Math.round((e+S)/x),r=Math.round((t+S)/x);return n<0||n>=s||r<0||r>=s?0:c[E(n,r)]}let V=new Float32Array(s*s*3),H=new Float32Array(s*s);for(let e=0;e<s;e++)for(let t=0;t<s;t++){let n=E(t,e);V[n*3]=w(t),V[n*3+1]=-50,V[n*3+2]=T(e)}let ue=[];for(let e=0;e<s-1;e++)for(let t=0;t<s-1;t++){let n=E(t,e),r=E(t+1,e),i=E(t,e+1),a=E(t+1,e+1);ue.push(n,i,r,r,i,a)}let U=new re;U.setAttribute(`position`,new D(V,3)),U.setAttribute(`aDepth`,new D(H,1)),U.setIndex(ue),U.computeVertexNormals();let de=new a({color:`#2f6f96`,roughness:.14,metalness:.45,transparent:!0,depthWrite:!1});de.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
attribute float aDepth;
varying float vDepth;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
  vDepth = aDepth;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying float vDepth;`).replace(`#include <dithering_fragment>`,`#include <dithering_fragment>
  if (vDepth < 0.012) discard;
  gl_FragColor.a *= clamp((vDepth - 0.012) * 7.0, 0.16, 0.86);`)},de.customProgramCacheKey=()=>`lgr-flow`;let W=new v(U,de);W.frustumCulled=!1,W.castShadow=!1,W.receiveShadow=!1,W.raycast=()=>{},W.renderOrder=3;let fe=new p;fe.add(W),fe.raycast=()=>{};function pe(){let e=0;for(let t=0;t<s*s;t++){let n=c[t];H[t]=n,V[t*3+1]=n>k?m[t]+n:-50,n>k&&e++}U.attributes.position.needsUpdate=!0,U.attributes.aDepth.needsUpdate=!0,W.visible=e>0,typeof window<`u`&&(window.__flowWet=e)}pe();function me(){if(P===`gpu`&&F)return F.totalSediment();let e=0;for(let t=0;t<s*s;t++)e+=h[t];return e}return{group:fe,step:oe,pourAt:se,rain:z,clear:ce,totalWater:le,cellAt:B,setErosion:R,totalSediment:me,setBackend:ae,get backend(){return P},_debugReadW:()=>P===`gpu`&&F?F.readW():c.slice(),_debugReadTerr:()=>P===`gpu`&&F?F.readTerr():(N(),m.slice()),_debugReadS:()=>P===`gpu`&&F?F.totalSediment():me(),_debugStepN:(e,t=1/60)=>{for(let n=0;n<e;n++)oe(t)},get erosion(){return y},get grid(){return s},get visible(){return W.visible}}}var In=[{id:`place`,label:`Place`,icon:`✚`,key:`1`},{id:`sculpt`,label:`Sculpt`,icon:`⛰`,key:`2`},{id:`paint`,label:`Paint`,icon:`🎨`,key:`3`},{id:`scatter`,label:`Objects`,icon:`🌲`,key:`4`},{id:`flow`,label:`Water`,icon:`💧`,key:`5`},{id:`select`,label:`Select`,icon:`◳`,key:`6`}],Ln=[`tree`,`rock`,`tuft`],Rn=[`gull`,`boat`,`fish`,`cloud`,`person`,`atv`,`craft`],zn=(e,t,n)=>e<t?t:e>n?n:e;function Bn({world:e,catalog:t,inspector:n}={}){let r=`sculpt`,i=1,a=!1,o={radius:2.2,strength:.05,density:.6,dropN:1},s={biome:2,scatter:`tree`,entity:`gull`},c=null,l=!1;function u(e){return In.some(t=>t.id===e)&&(r=e),r}function d(e){let t=In.find(t=>t.key===e);return t&&(r=t.id),r}function f(){return i=-i,i}function p(e){return o.radius=zn(e,.8,6),o.radius}function m(e){return o.strength=zn(e,.01,.15),o.strength}function h(e){return o.density=zn(e,.1,1),o.density}function g(e){return o.dropN=[1,10,50].includes(e)?e:1,o.dropN}function _(e){return s.biome=e|0,s.biome}function v(e){return Ln.includes(e)&&(s.scatter=e),s.scatter}function y(e){return Rn.includes(e)&&(s.entity=e),s.entity}function b(e){let n=t&&t.get(e);return n?n.kind===`material`?_(n.defaults.colorIndex??s.biome):n.kind===`scatter`?v(n.defaults.geoKey):n.kind===`entity`?y(e.replace(`ent-`,``)):null:null}function x(t,n,r){let i=0;for(let a=0;a<r;a++){let r=Math.random()*Math.PI*2,a=Math.sqrt(Math.random())*o.radius;e.placeEntity(s.entity,t+Math.cos(r)*a,n+Math.sin(r)*a)&&i++}return i}function S(t,n,r){if(r<0){e.removeEntityNear(t,n,o.radius),c={x:t,z:n};return}if(o.dropN>1){l&&=(x(t,n,o.dropN),!1);return}(!c||Math.hypot(t-c.x,n-c.z)>=o.radius*.7)&&(e.placeEntity(s.entity,t,n),c={x:t,z:n})}function C(t,n,i){i!==0&&(r===`paint`?e.paintBiome(t,n,s.biome,o.radius):r===`scatter`?e.paintScatter(t,n,{type:s.scatter,density:o.density,radius:o.radius,erase:i<0}):r===`place`?S(t,n,i):r===`sculpt`?e.sculpt(t,n,i,o.radius,o.strength):r===`flow`&&i>0&&e.flowPourAt(t,n,void 0,o.radius))}let w=()=>r!==`select`&&r!==`flow`;function T(){w()&&e.snapshot(),l=!0,c=null}function E(){c=null}function D(e,t){return n?n.pickAt(e,t):null}function O(){return e.undo()}function ee(){return e.snapshot()}function k(){return a=!a,e.setScatterHidden&&e.setScatterHidden(a),a}return{get tools(){return In},placeKinds:Rn,get tool(){return r},setTool:u,setToolByKey:d,get dir(){return i},get raise(){return i>0},toggleDir:f,brush:o,setRadius:p,setStrength:m,setDensity:h,setDropN:g,get selection(){return{...s}},get material(){return s.biome},get scatterType(){return s.scatter},get entity(){return s.entity},setMaterial:_,setScatter:v,setEntity:y,select:b,applyAt:C,beginStroke:T,endStroke:E,pickAt:D,dropEntities:x,undo:O,snapshot:ee,get canUndo(){return e.canUndo},get scatterHidden(){return a},toggleHideScatter:k}}var Vn=120;function Hn(e,t){return e.length?e[Math.min(e.length-1,Math.max(0,Math.round(t/100*(e.length-1))))]:0}function Un({renderer:e}){let t=e.getContext(),n=!1,r=new Float32Array(Vn),i=0,a=0,o=0,s=0,c=t.getExtension&&t.getExtension(`EXT_disjoint_timer_query_webgl2`),l=[],u=null,d=null,f=c&&c.TIME_ELAPSED_EXT,p=c&&c.GPU_DISJOINT_EXT,m=null,h=0,g=!1,_={fps:0,cpuMs:{p50:0,p95:0,p99:0},gpuMs:null,info:null,leak:!1,gpuTimer:!!c},v=0,y=typeof performance<`u`?performance.now():0;function b(){n||=(e.info.autoReset=!1,!0),o=performance.now();let r=e.info;_.info={calls:r.render.calls,tris:r.render.triangles,programs:r.programs?r.programs.length:0,geo:r.memory.geometries,tex:r.memory.textures},r.reset(),c&&!u&&(u=t.createQuery(),t.beginQuery(f,u))}function x(){if(r[a]=performance.now()-o+s,a=(a+1)%Vn,i<Vn&&i++,c&&u&&(t.endQuery(f),l.push(u),u=null),c&&l.length){let e=l[0],n=t.getQueryParameter(e,t.QUERY_RESULT_AVAILABLE),r=t.getParameter(p);(n||r)&&(l.shift(),n&&!r&&(d=t.getQueryParameter(e,t.QUERY_RESULT)/1e6),t.deleteQuery(e))}if(_.info){let e=_.info.geo+_.info.tex;m==null?m=e:e>m+200?(h++,h>300&&(g=!0)):h=Math.max(0,h-2)}v++;let e=performance.now();if(e-y>=1e3){let t=Array.from(r.subarray(0,i)).sort((e,t)=>e-t);_.fps=v,_.cpuMs={p50:+Hn(t,50).toFixed(2),p95:+Hn(t,95).toFixed(2),p99:+Hn(t,99).toFixed(2)},_.gpuMs=d==null?null:+d.toFixed(2),_.leak=g,v=0,y=e,typeof window<`u`&&(window.__fps=_.fps,window.__perf=C())}}function S(){return i?Hn(Array.from(r.subarray(0,i)).sort((e,t)=>e-t),95):0}function C(){return{fps:_.fps,cpuMs:_.cpuMs,gpuMs:_.gpuMs,info:_.info,leak:_.leak,gpuTimer:!!c}}return{frameStart:b,frameEnd:x,sample:C,p95Now:S,get gpuTimerAvailable(){return!!c},forceLoad(e=0){s=Math.max(0,e)}}}var Wn=[{dpr:null,shadows:!0},{dpr:1.5,shadows:!0},{dpr:1,shadows:!0},{dpr:1,shadows:!1},{dpr:.75,shadows:!1}];function Gn({profiler:e,apply:t,targetFps:n=30,strongFps:r=58}={}){let i=1e3/n,a=1e3/r,o=0,s=0,c=0,l=`full`;function u(){let n=e.p95Now();return n<=0||(n>i?(s++,c=0,s>=45&&o<Wn.length-1&&(o++,s=0,l=`p95 ${n.toFixed(1)}ms > ${i.toFixed(0)}ms`,t(o,Wn[o]),d(n))):n<a?(c++,s=0,c>=180&&o>0&&(o--,c=0,l=`p95 ${n.toFixed(1)}ms < ${a.toFixed(0)}ms (headroom)`,t(o,Wn[o]),d(n))):(s=Math.max(0,s-1),c=Math.max(0,c-1))),o}function d(e){typeof window<`u`&&(window.__quality={level:o,of:Wn.length-1,reason:l,p95:+(e||0).toFixed(1)})}return d(0),{update:u,get level(){return o},get reason(){return l},reset(){o=0,s=c=0,l=`full`,t(0,Wn[0]),d(0)}}}function Kn(e){let t=Ye(e>>>0),n=new Uint8Array(256);for(let e=0;e<256;e++)n[e]=e;for(let e=255;e>0;e--){let r=t()*(e+1)|0,i=n[e];n[e]=n[r],n[r]=i}let r=new Uint8Array(512);for(let e=0;e<512;e++)r[e]=n[e&255];let i=e=>e*e*e*(e*(e*6-15)+10),a=(e,t,n)=>e+(t-e)*n,o=(e,t,n)=>{let r=e&4?n:t,i=e&4?t:n;return(e&1?-r:r)+(e&2?-i:i)};return(e,t)=>{let n=Math.floor(e)&255,s=Math.floor(t)&255,c=e-Math.floor(e),l=t-Math.floor(t),u=i(c),d=i(l),f=r[r[n]+s],p=r[r[n]+s+1],m=r[r[n+1]+s],h=r[r[n+1]+s+1];return a(a(o(f,c,l),o(m,c-1,l),u),a(o(p,c,l-1),o(h,c-1,l-1),u),d)}}function qn(e,t,n,r,i,a){let o=.5,s=1,c=0,l=0;for(let u=0;u<r;u++)c+=o*e(t*s,n*s),l+=o,o*=a,s*=i;return c/l}function Jn(e,t,n,r,i,a){let o=.5,s=1,c=0,l=0;for(let u=0;u<r;u++){let r=1-Math.abs(e(t*s,n*s));r*=r,c+=o*r,l+=o,o*=a,s*=i}return c/l}var Yn=(e,t,n)=>(n=Math.max(0,Math.min(1,(n-e)/(t-e))),n*n*(3-2*n)),Xn=[{key:`ocean`,color:`#2a5b7a`},{key:`beach`,color:`#d8c89a`},{key:`grassland`,color:`#6f9a4e`},{key:`forest`,color:`#3f6b3a`},{key:`hills`,color:`#8a8a55`},{key:`rock`,color:`#7d7468`},{key:`snow`,color:`#eef2f6`}],Zn=Object.fromEntries(Xn.map((e,t)=>[e.key,t]));function Qn(e,t,n){if(e<n-.015)return Zn.ocean;if(e<n+.02)return Zn.beach;let r=(e-n)/(1-n);return r>.82?Zn.snow:r>.6?Zn.rock:r>.34?t>.45?Zn.forest:Zn.hills:t>.55?Zn.forest:Zn.grassland}var $n={valley:{freq:2.3,mtnMask:.3,mtnGain:.55,sea:.3,relief:7.5,warp:.9},archipelago:{freq:3.4,mtnMask:.18,mtnGain:.4,sea:.5,relief:6,warp:1.3},mountains:{freq:2,mtnMask:.62,mtnGain:.85,sea:.26,relief:11,warp:.8},plains:{freq:1.8,mtnMask:.12,mtnGain:.3,sea:.28,relief:4.5,warp:.7}},er=Object.keys($n);function tr({seed:e=1,size:t=160,preset:n=`valley`,params:r=null}={}){let i=r||$n[n]||$n.valley,a=Kn(e*2+1),o=Kn(e*5+9),s=Kn(e*7+13),c=Kn(e*3+5),l=new Float32Array(t*t),u=new Uint8Array(t*t),d=1/0,f=-1/0;for(let e=0;e<t;e++)for(let n=0;n<t;n++){let r=(n/t-.5)*i.freq,p=(e/t-.5)*i.freq,m=r+i.warp*qn(c,r+5.2,p+1.3,4,2,.5),h=p+i.warp*qn(c,r+9.7,p+4.1,4,2,.5),g=qn(a,m,h,6,2,.5)*.5+.5,_=Yn(.45,.75,qn(o,r*.5,p*.5,3,2,.5)*.5+.5),v=Jn(a,m*1.7+11,h*1.7+7,5,2,.5);g=g*(1-_*i.mtnMask)+v*(_*i.mtnMask*(.6+i.mtnGain));let y=n/t-.5,b=e/t-.5,x=Math.sqrt(y*y+b*b)*2;g-=Yn(.62,1,x)*.55,g=Math.max(0,Math.min(1,g));let S=qn(s,r*.8+3,p*.8+8,4,2,.5)*.5+.5,C=e*t+n;l[C]=g,u[C]=Qn(g,S,i.sea),g<d&&(d=g),g>f&&(f=g)}return{size:t,height:l,biome:u,sea:i.sea,relief:i.relief,minH:d,maxH:f,params:i,seed:e,preset:n}}var nr=Xn.map(e=>new M(e.color)),rr=new M,ir=new E,ar=new E,or=new E;function sr(e,t,n,r,i,a,o,s){let{size:c,height:l,biome:u,sea:d,relief:f}=e,{cell:p,half:m,baseY:h}=t,g=e=>e*p-m,_=e=>e*p-m,v=e=>h+(e-d)*f,y=(e,t)=>{let n=l[t*c+e],r=0,i=0;e>0&&(r+=l[t*c+e-1],i++),e<c-1&&(r+=l[t*c+e+1],i++),t>0&&(r+=l[(t-1)*c+e],i++),t<c-1&&(r+=l[(t+1)*c+e],i++);let a=Math.max(0,(i?r/i:n)-n);return Math.min(.5,a*f*.8)},b=0,x=(e,t,n,c,l,u,d,f,p,m,h,g,_)=>{ir.set(c-e,l-t,u-n),ar.set(d-e,f-t,p-n),or.crossVectors(ir,ar).normalize();let v=[[e,t,n,h],[c,l,u,g],[d,f,p,_]];for(let[e,t,n,c]of v)r[b*3]=e,r[b*3+1]=t,r[b*3+2]=n,i[b*3]=or.x,i[b*3+1]=or.y,i[b*3+2]=or.z,s&&(a[b*3]=m.r,a[b*3+1]=m.g,a[b*3+2]=m.b),o&&(o[b]=c),b++};for(let e=n.j0;e<n.j1;e++)for(let t=n.i0;t<n.i1;t++){let n=g(t),r=g(t+1),i=_(e),a=_(e+1),o=v(l[e*c+t]),s=v(l[e*c+t+1]),d=v(l[(e+1)*c+t]),f=v(l[(e+1)*c+t+1]),p=y(t,e),m=y(t+1,e),h=y(t,e+1),b=y(t+1,e+1),S=nr[u[e*c+t]],C=nr[u[(e+1)*c+t+1]];x(n,o,i,n,d,a,r,s,i,rr.copy(S),p,h,m),x(r,s,i,n,d,a,r,f,a,rr.copy(C),m,h,b)}}function cr(e,{worldSize:t=26,baseY:n=0,chunks:r=4}={}){let{size:i}=e,o=new p,s={cell:t/(i-1),half:t/2,baseY:n};o.userData.world=s;let c=Math.ceil((i-1)/r);for(let t=0;t<r;t++)for(let n=0;n<r;n++){let r=n*c,l=t*c,u=Math.min(r+c,i-1),d=Math.min(l+c,i-1);if(u<=r||d<=l)continue;let f={i0:r,j0:l,i1:u,j1:d},p=(u-r)*(d-l)*6,m=new Float32Array(p*3),h=new Float32Array(p*3),g=new Float32Array(p*3),_=new Float32Array(p);sr(e,s,f,m,h,g,_,!0);let y=new re;y.setAttribute(`position`,new D(m,3)),y.setAttribute(`normal`,new D(h,3)),y.setAttribute(`color`,new D(g,3)),y.setAttribute(`aAo`,new D(_,1)),y.computeBoundingSphere();let b=new v(y,Je(new a({vertexColors:!0,roughness:.92,metalness:0,flatShading:!0})));b.castShadow=!0,b.receiveShadow=!0,b.userData.chunk=f,o.add(b)}return o.userData.dispose=()=>o.traverse(e=>{e.isMesh&&(e.geometry.dispose(),e.material.dispose())}),o}function lr(e,t,n,r=!1){let i=e.userData.world;for(let e of n){let n=e.geometry,a=n.attributes.aAo?n.attributes.aAo.array:null;sr(t,i,e.userData.chunk,n.attributes.position.array,n.attributes.normal.array,n.attributes.color.array,a,r),n.attributes.position.needsUpdate=!0,n.attributes.normal.needsUpdate=!0,a&&(n.attributes.aAo.needsUpdate=!0),r&&(n.attributes.color.needsUpdate=!0),n.computeBoundingSphere()}}var ur={beach:[{type:`rock`,density:.05,maxSlope:1.4}],grassland:[{type:`tree`,density:.1,maxSlope:.7},{type:`tuft`,density:.3,maxSlope:.9}],forest:[{type:`tree`,density:.62,maxSlope:.8},{type:`rock`,density:.03,maxSlope:1.2}],hills:[{type:`tree`,density:.14,maxSlope:.7},{type:`rock`,density:.16,maxSlope:1.6}],rock:[{type:`rock`,density:.22,maxSlope:2}]};function dr({terrain:e,seed:t=1,worldSize:n=26,baseY:r=0,biomeKeys:i,density:a=1,max:o=9e3}={}){let{size:s,height:c,biome:l,sea:u,relief:d}=e,f=Ye((t^97155048)>>>0),p=n/(s-1),m=n/2,h=e=>r+(e-u)*d,g=(e,t)=>{let n=Math.max(1,Math.min(s-2,e)),r=Math.max(1,Math.min(s-2,t)),i=(c[r*s+n+1]-c[r*s+n-1])*d/(2*p),a=(c[(r+1)*s+n]-c[(r-1)*s+n])*d/(2*p);return Math.hypot(i,a)},_={tree:[],rock:[],tuft:[]};for(let e=1;e<s-1;e+=2)for(let t=1;t<s-1;t+=2){let n=e*s+t,r=c[n];if(r<u+.005)continue;let d=ur[i[l[n]]];if(!d)continue;let v=g(t,e);for(let n of d){let i=f();if(v>n.maxSlope||i>n.density*a)continue;let s=_[n.type];if(s.length>=o)continue;let c=(f()-.5)*p*2,l=(f()-.5)*p*2,u=t*p-m+c,d=e*p-m+l;s.push({x:u,y:h(r),z:d,s:.7+f()*.6,r:f()*Math.PI*2,t:.82+f()*.36})}}return{placements:_,counts:{tree:_.tree.length,rock:_.rock.length,tuft:_.tuft.length}}}function fr(e,t){let n=new M(t),r=e.attributes.position.count,i=new Float32Array(r*3),a=new Float32Array(r),o=e.attributes.position.array;for(let e=0;e<r;e++)i[e*3]=n.r,i[e*3+1]=n.g,i[e*3+2]=n.b,a[e]=Math.min(.45,Math.max(0,.42*(1-o[e*3+1]/.55)));return e.setAttribute(`color`,new D(i,3)),e.setAttribute(`aAo`,new D(a,1)),e}function pr(e){let t=0;for(let n of e)t+=n.attributes.position.count;let n=new Float32Array(t*3),r=new Float32Array(t*3),i=new Float32Array(t*3),a=new Float32Array(t),o=0;for(let t of e)n.set(t.attributes.position.array,o*3),r.set(t.attributes.normal.array,o*3),i.set(t.attributes.color.array,o*3),t.attributes.aAo&&a.set(t.attributes.aAo.array,o),o+=t.attributes.position.count;let s=new re;return s.setAttribute(`position`,new D(n,3)),s.setAttribute(`normal`,new D(r,3)),s.setAttribute(`color`,new D(i,3)),s.setAttribute(`aAo`,new D(a,1)),s}function mr(){return pr([fr(new W(.045,.06,.34,6).translate(0,.17,0).toNonIndexed(),`#5b3f28`),fr(new C(.3,.55,7).translate(0,.55,0).toNonIndexed(),`#3f7d3a`),fr(new C(.22,.42,7).translate(0,.85,0).toNonIndexed(),`#4f9046`)])}function hr(){let e=new F(.18,0).toNonIndexed(),t=e.attributes.position,n=Ye(3098);for(let e=0;e<t.count;e++){let r=.78+n()*.5;t.setXYZ(e,t.getX(e)*r,t.getY(e)*r*.8,t.getZ(e)*r)}return e.computeVertexNormals(),fr(e,`#7d7468`)}function gr(){return fr(new C(.06,.16,4).translate(0,.08,0).toNonIndexed(),`#6f9a4e`)}var _r=[`tree`,`rock`,`tuft`],vr={tree:0,rock:-.05,tuft:0},yr=new o,br=new L,xr=new E,Sr=new E,Cr=new E(0,1,0),wr=new M;function Tr(e){let t=new p;t.raycast=()=>{};let n={tree:mr(),rock:hr(),tuft:gr()};for(let r of _r){let i=e[r]||(e[r]=[]),o=Math.max(i.length*2,512),s=Je(new a({vertexColors:!0,roughness:.9,metalness:0,flatShading:!0})),c=new f(n[r],s,o);c.count=i.length,c.castShadow=!0,c.receiveShadow=!1,c.frustumCulled=!0,c.raycast=()=>{},c.userData.type=r,c.instanceColor=new d(new Float32Array(o*3),3);for(let e=0;e<i.length;e++)Er(c,e,i[e],vr[r]);c.instanceMatrix.needsUpdate=!0,c.instanceColor.needsUpdate=!0,t.add(c)}return t.userData.placements=e,t.userData.yoff=vr,t.userData.dispose=()=>t.traverse(e=>{e.isInstancedMesh&&(e.geometry.dispose(),e.material.dispose())}),t}function Er(e,t,n,r){xr.set(n.x,n.y+(r||0),n.z),br.setFromAxisAngle(Cr,n.r),Sr.setScalar(n.s),e.setMatrixAt(t,yr.compose(xr,br,Sr)),e.setColorAt(t,wr.setScalar(n.t))}var Dr=(e,t)=>e.children.find(e=>e.isInstancedMesh&&e.userData.type===t);function Or(e,t){let n=t.instanceMatrix.count*2,r=new f(t.geometry,t.material,n);return r.count=t.count,r.castShadow=!0,r.receiveShadow=!1,r.frustumCulled=!0,r.raycast=()=>{},r.userData.type=t.userData.type,r.instanceColor=new d(new Float32Array(n*3),3),r.instanceMatrix.array.set(t.instanceMatrix.array.subarray(0,t.count*16)),r.instanceColor.array.set(t.instanceColor.array.subarray(0,t.count*3)),r.instanceMatrix.needsUpdate=!0,r.instanceColor.needsUpdate=!0,e.remove(t),e.add(r),r}function kr(e,t,n,r,i,a,o,s){let c=Dr(e,t);if(!c)return!1;let l=e.userData.placements[t];l.length>=c.instanceMatrix.count&&(c=Or(e,c));let u=l.length;return l.push({x:n,y:r,z:i,s:a,r:o,t:s}),Er(c,u,l[u],(e.userData.yoff||{})[t]||0),c.count=l.length,c.instanceMatrix.needsUpdate=!0,c.instanceColor.needsUpdate=!0,!0}function Ar(e,t,n,r,i){let a=t===`all`?_r:[t],o=i*i,s=0;for(let t of a){let i=Dr(e,t);if(!i)continue;let a=e.userData.placements[t],c=i.instanceMatrix.array,l=i.instanceColor&&i.instanceColor.array;for(let e=a.length-1;e>=0;e--){let t=a[e];if((t.x-n)*(t.x-n)+(t.z-r)*(t.z-r)>o)continue;let i=a.length-1;if(e!==i){a[e]=a[i];for(let t=0;t<16;t++)c[e*16+t]=c[i*16+t];if(l)for(let t=0;t<3;t++)l[e*3+t]=l[i*3+t]}a.pop(),s++}i.count=a.length,i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0)}return s}var jr={tree:.85,rock:2,tuft:.95};function Mr(e,t,{worldSize:n=26,baseY:r=0}={}){let i=e.userData.placements,a=e.userData.yoff||{};if(!i)return;let{size:s,height:c,sea:l,relief:u}=t,d=n/(s-1),f=n/2,p=e=>e<0?0:e>=s?s-1:e,m=(e,t)=>c[p(Math.round((t+f)/d))*s+p(Math.round((e+f)/d))],h=(e,t)=>{let n=Math.max(1,Math.min(s-2,Math.round((e+f)/d))),r=Math.max(1,Math.min(s-2,Math.round((t+f)/d))),i=(c[r*s+n+1]-c[r*s+n-1])*u/(2*d),a=(c[(r+1)*s+n]-c[(r-1)*s+n])*u/(2*d);return Math.hypot(i,a)},g=new o,_=new L,v=new E,y=new E,b=new E(0,1,0),x=new M;for(let t of e.children){let e=t.userData.type,n=i[e];if(!n||!t.isInstancedMesh)continue;let o=jr[e]??1.5,s=t.instanceMatrix.count,c=Math.min(n.length,s);t.count=c;for(let i=0;i<c;i++){let s=n[i],c=m(s.x,s.z),d=c<l+.005||h(s.x,s.z)>o;v.set(s.x,r+(c-l)*u+(a[e]||0),s.z),_.setFromAxisAngle(b,s.r),y.setScalar(d?0:s.s),g.compose(v,_,y),t.setMatrixAt(i,g),t.setColorAt(i,x.setScalar(s.t))}t.instanceMatrix.needsUpdate=!0,t.instanceColor&&(t.instanceColor.needsUpdate=!0)}}function Nr({terrain:e,seed:t,worldSize:n,baseY:r,biomeKeys:i,density:a,max:o}){let{placements:s,counts:c}=dr({terrain:e,seed:t,worldSize:n,baseY:r,biomeKeys:i,density:a,max:o}),l=Tr(s);return l.userData.counts=c,l}function Pr(e,{worldSize:t=26,baseY:n=0,maxLakes:r=3}={}){let{size:i,height:a,sea:o,relief:s,maxH:c}=e,l=Math.floor((i-1)/3),u=t/(i-1),d=t/2,f=(e,t)=>a[t*3*i+e*3],p=e=>e*3*u-d,m=e=>e*3*u-d,h=e=>e>o+.02,g=o+.55*Math.max(.001,c-o),_=[];for(let e=2;e<l-2;e++)for(let t=2;t<l-2;t++){let n=f(t,e);if(!h(n)||n>g)continue;let r=!0;for(let i=-1;i<=1&&r;i++)for(let a=-1;a<=1;a++)if((a||i)&&f(t+a,e+i)<n){r=!1;break}r&&_.push({gi:t,gj:e,h:n})}_.sort((e,t)=>e.h-t.h);let v=new Uint8Array(l*l),y=[];for(let e of _){if(y.length>=r)break;if(v[e.gj*l+e.gi])continue;let t=e.h+.045,i=[[e.gi,e.gj]],a=new Set,c=!0,d=0,h=0,g=0,_=[];for(;i.length;){let[e,n]=i.pop(),r=n*l+e;if(a.has(r))continue;if(a.add(r),e<=0||e>=l-1||n<=0||n>=l-1){c=!1;continue}let s=f(e,n);if(s<o){c=!1;continue}if(!(s>=t)){if(_.push(r),d+=e,h+=n,g++,g>520){c=!1;break}i.push([e+1,n],[e-1,n],[e,n+1],[e,n-1])}}if(!c||g<5)continue;for(let e of _)v[e]=1;let b=d/g,x=h/g,S=3*u,C=g*S*S,w=.82*Math.sqrt(C/Math.PI);y.push({cx:p(b),cz:m(x),y:n+(t-o)*s,radius:w,area:C})}return y}function Fr(e,{material:t}={}){let n=new p;n.raycast=()=>{};let r=t||new a({color:`#3f6f8c`,roughness:.08,metalness:.35,transparent:!0,opacity:.88});for(let t of e){let e=new v(new se(t.radius,28),r);e.rotation.x=-Math.PI/2,e.position.set(t.cx,t.y+.012,t.cz),e.receiveShadow=!1,e.castShadow=!1,e.raycast=()=>{},n.add(e)}return n.userData.dispose=()=>n.traverse(e=>{e.isMesh&&e.geometry.dispose()}),n.userData.count=e.length,n}function Ir(e,t={}){let n=Pr(e,t),r=Fr(n,t);return r.userData.lakes=n,r}function Lr(){let e=new Map,t={register(n){return!n||!n.id?t:(n.art=n.art||{},n.defaults=n.defaults||{},e.set(n.id,n),t)},registerAll(e){for(let n of e)t.register(n);return t},get(t){return e.get(t)},byKind(t){return[...e.values()].filter(e=>e.kind===t)},byGroup(t){return[...e.values()].filter(e=>e.group===t)},all(){return[...e.values()]},setArt(n,r){let i=e.get(n);return i&&(i.art={...i.art,...r}),t},get size(){return e.size}};return t}function Rr(e=Lr()){return Xn.forEach((t,n)=>e.register({id:`mat-${t.key}`,label:zr(t.key),kind:`material`,group:`Terrain`,defaults:{colorIndex:n},art:{icon:t.color,placeholder:!0}})),e.registerAll([{id:`scatter-tree`,label:`Tree`,kind:`scatter`,group:`Vegetation`,defaults:{geoKey:`tree`,density:.4,maxSlope:.85},art:{icon:`🌲`,factory:null,placeholder:!0}},{id:`scatter-rock`,label:`Rock`,kind:`scatter`,group:`Rock`,defaults:{geoKey:`rock`,density:.2,maxSlope:2},art:{icon:`🪨`,factory:null,placeholder:!0}},{id:`scatter-tuft`,label:`Grass tuft`,kind:`scatter`,group:`Vegetation`,defaults:{geoKey:`tuft`,density:.3,maxSlope:.95},art:{icon:`🌱`,factory:null,placeholder:!0}}]),e.registerAll([{id:`ent-person`,label:`Person`,kind:`entity`,group:`Life`,defaults:{medium:`ground`},art:{icon:`🚶`,placeholder:!0}},{id:`ent-car`,label:`Car`,kind:`entity`,group:`Life`,defaults:{medium:`road`},art:{icon:`🚗`,placeholder:!0}},{id:`ent-boat`,label:`Boat`,kind:`entity`,group:`Life`,defaults:{medium:`water`},art:{icon:`⛵`,placeholder:!0}},{id:`ent-fish`,label:`Fish`,kind:`entity`,group:`Life`,defaults:{medium:`water`},art:{icon:`🐟`,placeholder:!0}},{id:`ent-gull`,label:`Gull`,kind:`entity`,group:`Life`,defaults:{medium:`air`},art:{icon:`🕊`,placeholder:!0}},{id:`ent-cloud`,label:`Cloud`,kind:`entity`,group:`Sky`,defaults:{medium:`air`},art:{icon:`☁️`,placeholder:!0}},{id:`ent-atv`,label:`ATV`,kind:`entity`,group:`Vehicles`,defaults:{medium:`ground`,pilotable:!0,roam:`all-terrain`,model:`ground`},art:{icon:`🛻`,placeholder:!0}},{id:`ent-craft`,label:`Spacecraft`,kind:`entity`,group:`Vehicles`,defaults:{medium:`air`,pilotable:!0,roam:`all-medium`,model:`spacecraft`},art:{icon:`🛸`,placeholder:!0}}]),e}var zr=e=>e.charAt(0).toUpperCase()+e.slice(1);function Br({scale:e=90}={}){let t=new H;t.scale.setScalar(e),t.frustumCulled=!1,t.raycast=()=>{},t.visible=!1;let n=t.material.uniforms;n.turbidity.value=2.2,n.rayleigh.value=1.3,n.mieCoefficient.value=.005,n.mieDirectionalG.value=.78;function r(e){n.sunPosition.value.copy(e)}function i(e){e&&(e.turbidity!=null&&(n.turbidity.value=e.turbidity),e.rayleigh!=null&&(n.rayleigh.value=e.rayleigh),e.mie!=null&&(n.mieCoefficient.value=e.mie),e.mieG!=null&&(n.mieDirectionalG.value=e.mieG))}let a=null,o=null,s=null,c=null;function l(t){if(typeof document>`u`||!t)return null;a||(a=new ce(t),o=new O,s=new H,s.scale.setScalar(e),o.add(s));let r=s.material.uniforms;return r.turbidity.value=n.turbidity.value,r.rayleigh.value=n.rayleigh.value,r.mieCoefficient.value=n.mieCoefficient.value,r.mieDirectionalG.value=n.mieDirectionalG.value,r.sunPosition.value.copy(n.sunPosition.value),c&&c.dispose(),c=a.fromScene(o),c.texture}return{mesh:t,setSun:r,setParams:i,buildEnv:l,get material(){return t.material}}}var Vr=`attribute float aSize;
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
}`,Hr=`precision highp float;

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
}`,Ur={realistic:0,charm:0,pixel:2,vector:1},Wr={realistic:1,charm:1,pixel:1.9,vector:1.2};function Gr({seed:e=1517,count:t=340,spreadX:n=21,yLo:r=3,yHi:i=18,zBase:a=7.2}={}){let o=new p;o.raycast=()=>{};let c=Ye(e>>>0),l=new Float32Array(t*3),d=new Float32Array(t),f=new Float32Array(t),m=new Float32Array(t),h=[];for(let e=0;e<t;e++){let t=(c()*2-1)*n,o=r+c()*(i-r),s=-a-c()*.7;l[e*3]=t,l[e*3+1]=o,l[e*3+2]=s;let u=.35+c()*.65;f[e]=u,d[e]=1.6+c()*2.8+(u>.85?2.2:0),m[e]=c()*Math.PI*2,u>.82&&h.push([t,o,s])}let g=new re;g.setAttribute(`position`,new D(l,3)),g.setAttribute(`aSize`,new D(d,1)),g.setAttribute(`aBright`,new D(f,1)),g.setAttribute(`aPhase`,new D(m,1));let v=new ie({vertexShader:Vr,fragmentShader:Hr,uniforms:{uTime:{value:0},uTwinkle:{value:1},uSizeScale:{value:1},uColor:{value:new M(`#eaf0ff`)},uNight:{value:0},uMode:{value:0}},transparent:!0,depthWrite:!1,blending:2,fog:!1,toneMapped:!1}),y=new A(g,v);y.raycast=()=>{},y.frustumCulled=!1,o.add(y);let b=[];if(h.length>6)for(let e=0;e<3;e++){let e=Math.floor(c()*h.length);for(let t=0;t<3;t++){let t=h[e],n=h[(e+1+Math.floor(c()*2))%h.length];b.push(t[0],t[1],t[2],n[0],n[1],n[2]),e=(e+1)%h.length}}let x=[[[0,2],[0,0]],[[0,0],[.7,0]],[[2.1,2],[1.4,2]],[[1.4,2],[1.4,0]],[[1.4,0],[2.1,0]],[[2.1,0],[2.1,1]],[[2.1,1],[1.7,1]],[[2.8,0],[2.8,2]],[[2.8,2],[3.5,2]],[[3.5,2],[3.5,1]],[[3.5,1],[2.8,1]],[[2.8,1],[3.6,0]]],S=-a-.4,C=.62;for(let[[e,t],[n,r]]of x)b.push(-3+e*C,12+t*C,S,-3+n*C,12+r*C,S);let w=new re;w.setAttribute(`position`,new _(b,3));let T=new u(w,new s({color:`#9fb6e8`,transparent:!0,opacity:0,depthWrite:!1,fog:!1,toneMapped:!1}));T.raycast=()=>{},T.frustumCulled=!1,o.add(T);let E=new I(new N({map:Kr(),transparent:!0,opacity:0,depthWrite:!1,blending:2,fog:!1,toneMapped:!1}));E.raycast=()=>{},E.scale.set(n*2.4,n*.95,1),E.position.set(2,12,-a-.7),E.material.rotation=-.5,E.renderOrder=-3,o.add(E);let O=-1;function ee(e,t=`realistic`,n=0,r=!1){v.uniforms.uTime.value=n,v.uniforms.uTwinkle.value=+!r,v.uniforms.uNight.value=e;let i=Ur[t]??0;i!==O&&(v.uniforms.uMode.value=i,O=i),v.uniforms.uSizeScale.value=Wr[t]??1,T.material.opacity=e*.5,E.material.opacity=e*.32,o.visible=e>.001}return{group:o,update:ee}}function Kr(){let e=document.createElement(`canvas`);e.width=e.height=256;let t=e.getContext(`2d`),n=t.createRadialGradient(256/2,256/2,0,256/2,256/2,256/2);n.addColorStop(0,`rgba(150,170,230,0.5)`),n.addColorStop(.4,`rgba(120,130,200,0.22)`),n.addColorStop(1,`rgba(90,100,160,0)`),t.fillStyle=n,t.fillRect(0,0,256,256);let r=Ye(20145);for(let e=0;e<7;e++){let e=40+r()*176,n=70+r()*116,i=14+r()*30,a=t.createRadialGradient(e,n,0,e,n,i);a.addColorStop(0,`rgba(200,210,255,0.18)`),a.addColorStop(1,`rgba(200,210,255,0)`),t.fillStyle=a,t.beginPath(),t.arc(e,n,i,0,Math.PI*2),t.fill()}let i=new U(e);return i.colorSpace=V,i}var qr=Math.PI*2;function Jr(e){let t=document.createElement(`canvas`);t.width=t.height=128;let n=t.getContext(`2d`),r=n.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return r.addColorStop(0,`#ffffff`),r.addColorStop(.34,`#fffaf0`),r.addColorStop(.66,e),r.addColorStop(.86,e),r.addColorStop(1,`rgba(255,255,255,0)`),n.fillStyle=r,n.beginPath(),n.arc(128/2,128/2,128/2,0,qr),n.fill(),ni(t,!0)}function Yr(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);n.addColorStop(0,`#ffffff`),n.addColorStop(.4,`#eef3ff`),n.addColorStop(.82,`#c4cee6`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,128/2,0,qr),t.fill(),t.globalAlpha=.14,t.fillStyle=`#8b97b4`;for(let[e,n,r]of[[54,50,9],[78,66,7],[60,82,5]])t.beginPath(),t.arc(e,n,r,0,qr),t.fill();return ni(e,!0)}function Xr(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`);t.translate(128/2,128/2),t.fillStyle=`rgba(255,210,120,0.9)`;for(let e=0;e<12;e++)t.rotate(qr/12),t.beginPath(),t.moveTo(0,-28),t.lineTo(7,-54),t.lineTo(-7,-54),t.closePath(),t.fill();let n=t.createRadialGradient(0,0,0,0,0,32);return n.addColorStop(0,`#ffffff`),n.addColorStop(.4,`#fff1c8`),n.addColorStop(.8,`#ffb24a`),n.addColorStop(1,`#ff8a2a`),t.fillStyle=n,t.beginPath(),t.arc(0,0,32,0,qr),t.fill(),ni(e,!0)}function Zr(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,46);n.addColorStop(0,`#ffffff`),n.addColorStop(.5,`#e6ecfb`),n.addColorStop(1,`#c2cce4`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,46,0,qr),t.fill(),t.fillStyle=`#aab6d2`;for(let[e,n,r]of[[52,48,11],[80,62,8],[58,82,7],[40,66,5]])t.beginPath(),t.arc(e,n,r,0,qr),t.fill();return ni(e,!0)}function Qr(e,t,n){let r=document.createElement(`canvas`);r.width=r.height=144;let i=r.getContext(`2d`),a=17/2,o=18/2-.5;for(let r=0;r<18;r++)for(let s=0;s<18;s++){let c=Math.hypot(s-a,r-a);c>o||(i.fillStyle=c<o*.45?e:c<o*.78?t:n,i.fillRect(Math.round(s*8),Math.round(r*8),8,8))}return ni(r,!1)}function $r(e,t,n=!1){let r=document.createElement(`canvas`);r.width=r.height=128;let i=r.getContext(`2d`);if(i.fillStyle=t,i.beginPath(),i.arc(64,64,58,0,qr),i.fill(),i.fillStyle=e,i.beginPath(),i.arc(64,64,50,0,qr),i.fill(),n){i.globalAlpha=.5,i.fillStyle=t;for(let[e,t,n]of[[10,-12,10],[-16,6,7],[4,18,5]])i.beginPath(),i.arc(64+e,64+t,n,0,qr),i.fill()}return ni(r,!0)}function ei(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return n.addColorStop(0,`rgba(255,255,255,0.9)`),n.addColorStop(.38,`rgba(255,255,255,0.3)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,128/2,0,qr),t.fill(),ni(e,!0)}function ti(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2),r=`20,30,48`;return n.addColorStop(0,`rgba(${r},0)`),n.addColorStop(.42,`rgba(${r},0)`),n.addColorStop(.6,`rgba(${r},0.6)`),n.addColorStop(1,`rgba(${r},0)`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,128/2,0,qr),t.fill(),ni(e,!0)}function ni(e,t){let n=new U(e);return n.colorSpace=V,t||(n.magFilter=l,n.minFilter=l),n}var ri=(e,t,n)=>{let r=Math.max(0,Math.min(1,(e-t)/(n-t)));return r*r*(3-2*r)};function ii({skyW:e=15,skyY0:t=3.4,skyH:n=2,z:r=-7.8,biasX:i=2,sunSize:a=4.6,moonSize:o=4}={}){let s=new p;s.raycast=()=>{};let c=(e,t)=>{let n=new I(new N({map:e,transparent:!0,depthWrite:!1,fog:!1,toneMapped:!1,...t?{blending:2}:{}}));return n.raycast=()=>{},n},l={realistic:Jr(`#ffcf8a`),charm:Xr(),pixel:Qr(`#fff6e0`,`#ffc24a`,`#ff8a2a`),vector:$r(`#ffd24a`,`#ff9a2e`)},u={realistic:Yr(),charm:Zr(),pixel:Qr(`#ffffff`,`#cdd6ee`,`#9aa6c6`),vector:$r(`#e8eefc`,`#b9c6e4`,!0)},d=ei(),f=c(ti(),!1),m=c(d,!0),h=c(l.realistic),g=c(d,!0),_=c(u.realistic);f.renderOrder=-2,m.renderOrder=-1,s.add(f,m,h,g,_);let v=Gr({});v.group.renderOrder=-4,s.add(v.group);let y=typeof window<`u`&&window.matchMedia?window.matchMedia(`(prefers-reduced-motion: reduce)`):null,b={realistic:{sunGlow:3,sunGlowOp:.7,moonGlow:2.6,moonGlowOp:.5,sizeMul:1,sunHaloOp:.85},charm:{sunGlow:2.2,sunGlowOp:.55,moonGlow:2.1,moonGlowOp:.42,sizeMul:1.08,sunHaloOp:.7},pixel:{sunGlow:1.7,sunGlowOp:.4,moonGlow:1.7,moonGlowOp:.32,sizeMul:1,sunHaloOp:.6},vector:{sunGlow:1.4,sunGlowOp:.28,moonGlow:1.4,moonGlowOp:.22,sizeMul:1,sunHaloOp:.5}},x=`realistic`;function S(e){e===x||!b[e]||(x=e,h.material.map=l[e],h.material.needsUpdate=!0,_.material.map=u[e],_.material.needsUpdate=!0)}new M;let C=new E,w=new E,T=new E;function D(e,t,n,r,i=0){if(!t||n<=.02)return;let a=ri(r,.22,.55);if(a<=.01)return;let o=1-.19999999999999996*a;if(C.copy(e).project(t),C.z<=-1||C.z>=1)return;let s=0,c=0;i>0&&(T.setFromMatrixColumn(t.matrixWorld,0).multiplyScalar(i),s=Math.abs(w.copy(e).add(T).project(t).x-C.x),T.setFromMatrixColumn(t.matrixWorld,1).multiplyScalar(i),c=Math.abs(w.copy(e).add(T).project(t).y-C.y));let l=Math.max(0,o-s),u=Math.max(0,o-c),d=C.x,f=C.y,p=!1;d<-l&&(d=-l,p=!0),d>l&&(d=l,p=!0),f>u&&(f=u,p=!0),p&&(C.set(d,f,C.z).unproject(t),e.copy(C))}let O=new M(`#fff3df`),ee=new M(`#ffb060`),k=new M(`#ff6a2a`),A=new M(`#eef2ff`),te=new M(`#9fbcff`);function j(s,c,l,u,d=`realistic`,p=null){S(d);let C=b[x],w=l.sunArc,T=u?Math.min(1,(u.cloud||0)*.85+(u.fog||0)*.7):0,E=w.y,j=ri(E,-.04,.1)*(1-.7*T),M=1-ri(Math.abs(E),.02,.5),N=a*C.sizeMul*(1+.55*M);h.position.set(w.x*e+i,t+w.y*n,r),D(h.position,p,j,E,N*.5),m.position.copy(h.position),h.scale.setScalar(N),m.scale.setScalar(N*C.sunGlow),h.material.color.copy(O),m.material.color.copy(ee).lerp(k,M),h.material.opacity=j,m.material.opacity=j*C.sunGlowOp*(.7+.5*M),f.position.copy(h.position),f.scale.setScalar(N*1.7),f.material.opacity=j*(1-M)*C.sunHaloOp;let P=-w.y,F=ri(P,-.04,.1)*(1-.65*T),ne=o*C.sizeMul;_.position.set(-w.x*e+i,t+-w.y*n,r),D(_.position,p,F,P,ne*.5),g.position.copy(_.position),_.scale.setScalar(ne),g.scale.setScalar(ne*C.moonGlow),_.material.color.copy(A),g.material.color.copy(te),_.material.opacity=F,g.material.opacity=F*C.moonGlowOp;let re=ri(-w.y,-.05,.18)*(1-.85*T);v.update(re,d,c,!!(y&&y.matches))}return{group:s,update:j}}var ai=`varying vec2 vUv;

void main() {
  
  
  
  vUv = uv;

  
  
  
  
  
  
  
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,oi=`precision highp float;

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
}`,si=`precision highp float;

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
}`,ci=`precision highp float;

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
}`,li=`precision highp float;

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
}`,ui=`const float CA_STRENGTH   = 0.0030;  
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
}`,di=`const float DITHER = 0.55;   

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
}`,fi=`precision highp float;

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
}`,pi=`precision highp float;

varying vec2 vUv;
uniform sampler2D uToon;   
uniform sampler2D uPixel;  
uniform float     uBlend;  

void main() {
  vec3 t = texture2D(uToon, vUv).rgb;
  vec3 p = texture2D(uPixel, vUv).rgb;
  gl_FragColor = vec4(mix(t, p, uBlend), 1.0);
}`,mi=`varying vec2 vUv;
uniform sampler2D uScene;
uniform float     uThreshold;   

void main() {
  vec3 c = texture2D(uScene, vUv).rgb;
  float l = dot(c, vec3(0.2126, 0.7152, 0.0722));        
  float k = smoothstep(uThreshold, uThreshold + 0.22, l); 
  gl_FragColor = vec4(c * k, 1.0);
}`,hi=`varying vec2 vUv;
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
}`,gi=`precision highp float;

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
}`,_i={"1-bit":{gridWidth:110,dither:.6,palette:[`#15120c`,`#c8b486`]},gb:{gridWidth:130,dither:.4,palette:[`#0f380f`,`#306230`,`#8bac0f`,`#9bbc0f`]},"8-bit":{gridWidth:160,dither:.55,palette:[`#140c1c`,`#442434`,`#30346d`,`#4e4a4e`,`#854c30`,`#346524`,`#d04648`,`#757161`,`#597dce`,`#d27d2c`,`#8595a1`,`#6daa2c`,`#d2aa99`,`#6dc2ca`,`#dad45e`,`#deeed6`]},"16-bit":{gridWidth:280,dither:.3,palette:`#000000.#222034.#45283c.#663931.#8f563b.#df7126.#d9a066.#eec39a.#fbf236.#99e550.#6abe30.#37946e.#4b692f.#524b24.#323c39.#3f3f74.#306082.#5b6ee1.#639bff.#5fcde4.#cbdbfc.#ffffff.#9badb7.#847e87.#696a6a.#595652.#76428a.#ac3232.#d95763.#d77bba.#8f974a.#8a6f30`.split(`.`)},modern:{gridWidth:460,dither:.6,palette:null}},vi=[`gb`,`8-bit`,`16-bit`,`modern`],yi={"ink-gold (day)":[`#16100A`,`#3A2F1E`,`#6B563A`,`#937B54`,`#B89968`],"ink-gold (night)":[`#0A0C16`,`#1C2236`,`#3A3A52`,`#5A5A78`,`#8A92B0`],"terminal (day)":[`#050805`,`#0E2912`,`#1E6B2F`,`#3CF06A`,`#FFB000`],"terminal (night)":[`#020604`,`#06180E`,`#10401E`,`#1E9040`,`#7FE0FF`],"neutral (photoreal)":[`#1B1B1E`,`#3D3A3A`,`#5E5750`,`#867C70`,`#A99C8A`,`#C8BCAB`,`#E3DCCF`,`#F5F1E8`],"cool (noir)":[`#0A0E14`,`#16202E`,`#243447`,`#3A536B`,`#5A7D96`,`#86A6BD`,`#B6CDDA`,`#E6EEF2`],"warm (sunset)":[`#190B0A`,`#3B150F`,`#6E2A17`,`#A8421F`,`#DB702F`,`#F2A23E`,`#F9CF76`,`#FDF0C4`],"vibrant (pop)":[`#1A1A2E`,`#E43F5A`,`#F9A826`,`#FFE05D`,`#2EC4B6`,`#3A86FF`,`#8338EC`,`#FFFFFF`],"mono (ink)":[`#0C0C0C`,`#2A2A2A`,`#474747`,`#666666`,`#8A8A8A`,`#B0B0B0`,`#D6D6D6`,`#F5F5F5`]};function bi(e){let t=Math.max(e.length,1),n=new Float32Array(t*4);e.forEach((e,t)=>{let r=new M(e);n[t*4+0]=r.r,n[t*4+1]=r.g,n[t*4+2]=r.b,n[t*4+3]=1});let r=new he(n,t,1,le,i);return r.minFilter=l,r.magFilter=l,r.needsUpdate=!0,r}function xi(e,t){let n=[];for(let t=0;t+2<e.length;t+=3)n.push([e[t],e[t+1],e[t+2]]);if(n.length===0)return[`#000000`];let r=e=>{let t=[255,255,255],n=[0,0,0];for(let r of e)for(let e=0;e<3;e++)t[e]=Math.min(t[e],r[e]),n[e]=Math.max(n[e],r[e]);let r=[n[0]-t[0],n[1]-t[1],n[2]-t[2]],i=r[0]>=r[1]&&r[0]>=r[2]?0:r[1]>=r[2]?1:2;return{ax:i,range:r[i]}},i=[n];for(;i.length<t;){let e=-1,t=-1;if(i.forEach((n,i)=>{if(n.length>1){let{range:a}=r(n);a>t&&(t=a,e=i)}}),e<0)break;let n=i[e],{ax:a}=r(n);n.sort((e,t)=>e[a]-t[a]);let o=n.length>>1;i.splice(e,1,n.slice(0,o),n.slice(o))}return i.map(e=>{let t=[0,0,0];for(let n of e)for(let e=0;e<3;e++)t[e]+=n[e];return`#`+t.map(t=>Math.round(t/e.length)).map(e=>e.toString(16).padStart(2,`0`)).join(``)})}var Si=220,Ci={night:[`#0A0C16`,`#1C2236`,`#3A3A52`,`#5A5A78`,`#8A92B0`],dawn:[`#1A1008`,`#43281A`,`#7A4A30`,`#B07A4E`,`#E8A86A`],noon:[`#16100A`,`#3A2F1E`,`#6B563A`,`#937B54`,`#B89968`],dusk:[`#140A0A`,`#3E1E1A`,`#7A3828`,`#B85A36`,`#F0884A`]},wi={night:[`#020604`,`#06180E`,`#10401E`,`#1E9040`,`#7FE0FF`],dawn:[`#060603`,`#1A2410`,`#3A6B22`,`#6CC040`,`#FFC060`],noon:[`#050805`,`#0E2912`,`#1E6B2F`,`#3CF06A`,`#FFB000`],dusk:[`#080402`,`#241408`,`#6B4A12`,`#E0A030`,`#FF7030`]};function Ti({demo:e=!1,citySeed:n=0,profileIndex:i=0}={}){let o=new P({antialias:!0,preserveDrawingBuffer:!0});o.shadowMap.enabled=!0,o.shadowMap.type=1,o.shadowMap.autoUpdate=!1,o.shadowMap.needsUpdate=!0;let s=window.matchMedia&&window.matchMedia(`(pointer: coarse)`).matches?1.5:2;o.setPixelRatio(Math.min(window.devicePixelRatio,s)),o.setSize(window.innerWidth,window.innerHeight),o.setClearColor(920327,1),document.body.appendChild(o.domElement);let u=o.getDrawingBufferSize(new ge),d=!1,f=!1,p=()=>{};o.domElement.addEventListener(`webglcontextlost`,e=>{e.preventDefault(),d=!0,typeof window<`u`&&(window.__contextLost=!0)},!1),o.domElement.addEventListener(`webglcontextrestored`,()=>{p(),d=!1,typeof window<`u`&&(window.__contextLost=!1)},!1);let m=new O;m.fog=new r(10465470,0);let _=new M(`#aeb6c0`),x=.062,S=new M(`#74508f`),C=new M,w=Me({aspect:window.innerWidth/window.innerHeight}),D=vt({t:.5}),ee={type:ne,format:le,minFilter:l,magFilter:l,wrapS:ae,wrapT:ae,depthBuffer:!1,stencilBuffer:!1},k=[new me(256,256,ee),new me(256,256,ee),new me(256,256,ee)];for(let e of k)o.setRenderTarget(e),o.clear();o.setRenderTarget(null);let A=new O,te=new c(-1,1,1,-1,0,1),j=new ie({vertexShader:En,fragmentShader:si,uniforms:{uCurr:{value:null},uPrev:{value:null},uTexel:{value:new ge(1/256,1/256)},uMouse:{value:new ge(-1,-1)},uMouseStrength:{value:0},uC2:{value:.25},uDamping:{value:.992},uRainCount:{value:0},uRainDrops:{value:Array.from({length:8},()=>new E)},uWakeCount:{value:0},uWakeDrops:{value:Array.from({length:8},()=>new E)}}});A.add(new v(new h(2,2),j));let N=new me(u.x,u.y,{minFilter:g,magFilter:g,depthBuffer:!0,stencilBuffer:!1});function F(e){let t=document.createElement(`canvas`);t.width=t.height=1024;let n=t.getContext(`2d`);n.fillStyle=e?`#0c1418`:`#15110b`,n.fillRect(0,0,1024,1024),n.strokeStyle=e?`rgba(120,150,170,0.22)`:`rgba(184,153,104,0.30)`,n.lineWidth=2;for(let e=0;e<=1024;e+=64)n.beginPath(),n.moveTo(e,0),n.lineTo(e,1024),n.stroke(),n.beginPath(),n.moveTo(0,e),n.lineTo(1024,e),n.stroke();e||(n.fillStyle=`#B89968`,n.font=`bold 360px Georgia, serif`,n.textAlign=`center`,n.textBaseline=`middle`,n.fillText(`LGR`,512,470),n.font=`600 64px ui-monospace, monospace`,n.fillText(`WEB · STUDIO`,512,720));let r=new U(t);return r.colorSpace=V,r}let re=new v(new h(28,28),new b({map:F(e)}));re.rotation.x=-Math.PI/2,re.position.y=-.35,m.add(re);let I=new v(new h(40,24),new ie({depthWrite:!1,vertexShader:ai,fragmentShader:oi,uniforms:{uTime:{value:0},uInk:{value:D.horizon},uGold:{value:D.sky},uFogColor:{value:C},uFogAmt:{value:0},uFogCharm:ze}}));I.position.set(0,3,-8),m.add(I);let oe=new ie({vertexShader:ci,fragmentShader:li,uniforms:{uHeight:{value:null},uScene:{value:N.texture},uTexel:{value:new ge(1/256,1/256)},uResolution:{value:new ge(u.x,u.y)},uDisplace:{value:.42},uNormalStrength:{value:22},uRefractStrength:{value:.06},uChromaScale:{value:1},uNormalMatrix:{value:new y},uLightDir:{value:D.sunDir},uInk:{value:new M(`#2A2218`)},uGold:{value:new M(`#B89968`)},uVector:Ne,uVecWater:{value:new M(`#1fb8d8`)},uVecTint:{value:Pe}}}),L=new v(new h(28,28,255,255),oe);L.rotation.x=-Math.PI/2,L.updateMatrixWorld(!0),oe.uniforms.uNormalMatrix.value.getNormalMatrix(L.matrixWorld),m.add(L);let R={value:0},se=Gt({windowGlow:R}),z=ut({seed:n,profileIndex:i,landmarkFactory:se,windowGlow:R});m.add(z.group);let ce=Ct({plinthTop:.3,extent:z.extent,profile:z.state.profile});m.add(ce.group);let B=Pt({extent:z.extent,waterSize:28,plinthTop:.3});m.add(B.group),j.uniforms.uWakeDrops.value=B.wakeDrops;let H=qt({extent:z.extent});m.add(H.group),j.uniforms.uRainDrops.value=H.rainDrops;let ue=Yt({extent:z.extent});m.add(ue.group);let de=[ce,B,ue],W=Qt({rig:w,getCamera:()=>w.camera,sources:de}),fe=ii();m.add(fe.group);let pe=Br({scale:90});m.add(pe.mesh),m.environmentIntensity=.32;let he=!1;function _e(e){let t=e&&D.sunArc.y>-.04;t!==he&&(he=t,pe.mesh.visible=t,I.visible=!t)}let ve=null,ye=-1;p=()=>{ve=null,ye=-1,o.shadowMap.needsUpdate=!0};function be(){let e=Math.floor(D.t%1*4)%4;return(e!==ye||!ve)&&(ye=e,ve=pe.buildEnv(o)),ve}let G=null,K=null,q=null,J=null,xe=!1,Se=1234,Ce=`valley`,we=Xn.map(e=>e.key),Te=new a({color:`#3f6f8c`,roughness:.07,metalness:.4,transparent:!0,opacity:.9}),Ee=()=>[z.group,ce.group,B.group],De=()=>[G,K,q].filter(Boolean);function Oe(){for(let e of De())m.remove(e),e.userData.dispose?.();let e=tr({seed:Se,size:160,preset:Ce});J=e,G=cr(e,{worldSize:26,baseY:0,chunks:6}),K=Nr({terrain:e,seed:Se,worldSize:26,baseY:0,biomeKeys:we}),q=Ir(e,{worldSize:26,baseY:0,maxLakes:3,material:Te});for(let e of De())e.visible=xe,m.add(e);Y!==void 0&&Y&&Y.clear(),X!==void 0&&X&&X.clear(),typeof window<`u`&&(window.__world={seed:Se,preset:Ce,active:xe,chunks:G.children.length,scatter:K.userData.counts,lakes:q.userData.count})}let ke=e=>{for(let t of De())t.visible=e};function Ae(e,t){if(!J)return 0;let{size:n,height:r,sea:i,relief:a}=J,o=26/(n-1),s=Math.round((e+13)/o),c=Math.round((t+13)/o),l=s<0?0:s>=n?n-1:s;return(r[(c<0?0:c>=n?n-1:c)*n+l]-i)*a}let Y=wn({heightAt:Ae,seaSurfaceY:0,waterY:.06});Y.group.visible=!1,m.add(Y.group),de.push(Y);let je=0;function Ve(e,t){if(!J||!G)return;let{size:n,height:r,relief:i}=J,a=26/(n-1),o=26/(t-1),s=i>1e-6?1/i:0,c=!1;for(let i=0;i<t;i++)for(let l=0;l<t;l++){let u=e[i*t+l];if(u===0)continue;c=!0;let d=u*s,f=l*o/a,p=i*o/a,m=Math.max(0,Math.round(f-1)),h=Math.min(n-1,Math.round(f+1)),g=Math.max(0,Math.round(p-1)),_=Math.min(n-1,Math.round(p+1));for(let e=g;e<=_;e++)for(let t=m;t<=h;t++){let i=e*n+t,a=r[i]+d;r[i]=a<0?0:a>1?1:a}}c&&(je++,je%8==0&&lr(G,J,G.children),je%24==0&&K&&Mr(K,J,{worldSize:26,baseY:0}))}let X=Fn({worldHeightAt:Ae,applyErosion:Ve,worldSize:26,grid:96,seaY:0,renderer:o});X.group.visible=!1,m.add(X.group);let He=null,Ue=new Set;function We(){!J||!q||(m.remove(q),q.userData.dispose?.(),q=Ir(J,{worldSize:26,baseY:0,maxLakes:3,material:Te}),q.visible=xe,m.add(q),window.__world&&(window.__world.lakes=q.userData.count))}function Ge(){We(),K&&Mr(K,J,{worldSize:26,baseY:0})}function Ke(e,t,n=1,r=2.2,i=.05){if(!J||!G)return;let a=J.size,o=26/(a-1),s=(e+13)/o,c=(t+13)/o,l=r/o,u=Math.max(0,Math.floor(s-l)),d=Math.min(a-1,Math.ceil(s+l)),f=Math.max(0,Math.floor(c-l)),p=Math.min(a-1,Math.ceil(c+l)),m=J.height,h=l*.5*2*(l*.5);for(let e=f;e<=p;e++)for(let t=u;t<=d;t++){let r=(t-s)*(t-s)+(e-c)*(e-c);if(r>l*l)continue;let o=m[e*a+t]+n*i*Math.exp(-r/h);m[e*a+t]=o<0?0:o>1?1:o}Ue.clear();for(let e of G.children){let t=e.userData.chunk;t&&t.i0<=d&&t.i1>=u-1&&t.j0<=p&&t.j1>=f-1&&Ue.add(e)}lr(G,J,Ue),He&&clearTimeout(He),He=setTimeout(Ge,140)}function Z(e,t,n,r=2.2){if(!J||!G||n==null)return;let i=J.size,a=26/(i-1),o=(e+13)/a,s=(t+13)/a,c=r/a,l=c*c,u=Math.max(0,Math.floor(o-c)),d=Math.min(i-1,Math.ceil(o+c)),f=Math.max(0,Math.floor(s-c)),p=Math.min(i-1,Math.ceil(s+c)),m=J.biome;for(let e=f;e<=p;e++)for(let t=u;t<=d;t++)(t-o)*(t-o)+(e-s)*(e-s)<=l&&(m[e*i+t]=n);Ue.clear();for(let e of G.children){let t=e.userData.chunk;t&&t.i0<=d&&t.i1>=u-1&&t.j0<=p&&t.j1>=f-1&&Ue.add(e)}lr(G,J,Ue,!0)}let Je=[`tree`,`rock`,`tuft`];function Ye(e,t,{type:n=`tree`,density:r=.5,radius:i=2.2,erase:a=!1}={}){if(!J||!K)return 0;if(a)return Ar(K,n||`all`,e,t,i);let o=J.size,s=26/(o-1),c=J.height,l=J.sea,u=J.relief,d=e=>e<0?0:e>=o?o-1:e,f=(e,t)=>c[d(Math.round((t+13)/s))*o+d(Math.round((e+13)/s))],p=(e,t)=>{let n=Math.max(1,Math.min(o-2,Math.round((e+13)/s))),r=Math.max(1,Math.min(o-2,Math.round((t+13)/s))),i=(c[r*o+n+1]-c[r*o+n-1])*u/(2*s),a=(c[(r+1)*o+n]-c[(r-1)*o+n])*u/(2*s);return Math.hypot(i,a)},m=jr[n]??1.2,h=Math.max(1,Math.round((r||.5)*6)),g=0;for(let r=0;r<h;r++){let r=Math.random()*Math.PI*2,a=Math.sqrt(Math.random())*i,o=e+Math.cos(r)*a,s=t+Math.sin(r)*a,c=f(o,s);if(c<l+.005||p(o,s)>m)continue;let d=(c-l)*u;kr(K,n,o,d,s,.7+Math.random()*.6,Math.random()*Math.PI*2,.82+Math.random()*.36)&&g++}if(window.__world&&K.userData.counts)for(let e of Je)K.userData.counts[e]=(K.userData.placements[e]||[]).length;return g}let Xe=[];function Ze(){if(!K)return null;let e=K.userData.placements,t={};for(let n of Je)t[n]=(e[n]||[]).map(e=>({...e}));return t}function Qe(){J&&(Xe.push({h:J.height.slice(),b:J.biome.slice(),sc:Ze(),pl:Y.snapshot()}),Xe.length>12&&Xe.shift())}function $e(){if(!J||!Xe.length)return!1;let e=Xe.pop();if(J.height.set(e.h),J.biome.set(e.b),e.sc&&K){let t=K.userData.placements;for(let n of Je)t[n]=(e.sc[n]||[]).map(e=>({...e}))}return e.pl&&Y.restore(e.pl),lr(G,J,G.children,!0),Ge(),!0}let et=new Set([`boat`,`fish`]),tt=new Set([`person`,`atv`]);function nt(e,t,n){if(!J)return null;let r=Ae(t,n)<0;return et.has(e)&&!r||tt.has(e)&&r?null:Y.spawn(e,t,n)}function rt(e,t,n=2.5){return Y.removeNear(e,t,n)}function it(e){let t=``,n=32768;for(let r=0;r<e.length;r+=n)t+=String.fromCharCode.apply(null,e.subarray(r,Math.min(r+n,e.length)));return btoa(t)}function at(e){let t=atob(e),n=new Uint8Array(t.length);for(let e=0;e<t.length;e++)n[e]=t.charCodeAt(e);return n}let ot=e=>it(new Uint8Array(e.buffer,e.byteOffset,e.byteLength)),st=e=>it(e);function ct(){let e=K?K.userData.placements:{},t={};for(let n of Je)t[n]=(e[n]||[]).map(e=>({...e}));return t}function lt(){return J?{v:1,seed:Se,preset:Ce,size:J.size,height:ot(J.height),biome:st(J.biome),scatter:ct(),entities:Y.snapshot()}:null}function dt(){if(!J)return null;let e=tr({seed:Se,size:160,preset:Ce}),t=J.height,n=J.biome,r=[],i=[];for(let n=0;n<t.length;n++)Math.abs(t[n]-e.height[n])>1e-6&&r.push(n,Math.round(t[n]*1e4)/1e4);for(let t=0;t<n.length;t++)n[t]!==e.biome[t]&&i.push(t,n[t]);return{v:1,c:1,seed:Se,preset:Ce,hd:r,bd:i,entities:Y.snapshot()}}function ft(e){K&&(m.remove(K),K.userData.dispose?.()),K=Tr(e||{tree:[],rock:[],tuft:[]}),K.userData.counts=Je.reduce((e,t)=>(e[t]=(K.userData.placements[t]||[]).length,e),{}),K.visible=xe,m.add(K)}function pt(e){if(!e||e.v!==1)return!1;Se=e.seed|0,Ce=er.includes(e.preset)?e.preset:Ce,Xe.length=0,Oe(),xe=!0,ke(!0),Y.group.visible=!0,X.group.visible=!0;for(let e of Ee())e.visible=!1;if(window.__world&&(window.__world.active=!0),e.height&&e.biome){let t=at(e.height);J.height.set(new Float32Array(t.buffer,t.byteOffset,t.byteLength/4));let n=at(e.biome);J.biome.set(n.subarray(0,J.biome.length))}else if(e.hd||e.bd){let t=e.hd||[],n=e.bd||[];for(let e=0;e<t.length;e+=2)J.height[t[e]]=t[e+1];for(let e=0;e<n.length;e+=2)J.biome[n[e]]=n[e+1]}return lr(G,J,G.children,!0),e.scatter&&ft(e.scatter),We(),K&&Mr(K,J,{worldSize:26,baseY:0}),Y.restore(e.entities),window.__world&&(window.__world.scatter=K.userData.counts,window.__world.seed=Se,window.__world.preset=Ce),!0}let mt={enter(){G||Oe(),xe=!0,ke(!0),Y.group.visible=!0,X.group.visible=!0;for(let e of Ee())e.visible=!1;window.__world&&(window.__world.active=!0)},exit(){xe=!1,ke(!1),Y.group.visible=!1,X.group.visible=!1;for(let e of Ee())e.visible=!0;window.__world&&(window.__world.active=!1)},reroll(){return Se=Math.random()*1e9|0,Xe.length=0,Oe(),mt.enter(),Se},reset(){return Xe.length=0,Oe(),mt.enter(),Se},setPreset(e){return er.includes(e)&&(Ce=e,Xe.length=0,Oe(),mt.enter()),Ce},sculpt:Ke,paintBiome:Z,paintScatter:Ye,repoolWater:We,snapshot:Qe,undo:$e,placeEntity:nt,removeEntityNear:rt,heightAt:Ae,serialize:lt,serializeCompact:dt,deserialize:pt,flowPourAt:(e,t,n,r)=>X.pourAt(e,t,n,r),flowRain:e=>X.rain(e),flowClear:()=>X.clear(),get flowTotal(){return X.totalWater()},flowAt:(e,t)=>X.cellAt(e,t),flowErosion:(e,t)=>X.setErosion(e,t),get flowErosionOn(){return X.erosion},get flowSediment(){return X.totalSediment()},setSimBackend:e=>X.setBackend(e),get simBackend(){return X.backend},_flowReadW:()=>X._debugReadW(),_flowReadTerr:()=>X._debugReadTerr(),_flowStepN:(e,t)=>X._debugStepN(e,t),get terrainGroup(){return G},get biomes(){return Xn},get scatterCounts(){return K?K.userData.placements&&Je.reduce((e,t)=>(e[t]=(K.userData.placements[t]||[]).length,e),{}):null},get placedCounts(){return Y.counts()},setScatterHidden(e){K&&(K.visible=!e)},get placedLife(){return Y},get canUndo(){return Xe.length>0},get active(){return xe},get seed(){return Se},get preset(){return Ce},get presets(){return er}},ht=Rr(),gt=Bn({world:mt,catalog:ht,inspector:W});function _t(e,t){return Ae(e,t)<0?0:-999}let yt=dn({rig:w,world:{heightAt:Ae,waterHeightAt:_t}});z.group.remove(z.key),m.add(z.key),z.key.castShadow=!0,z.key.shadow.mapSize.set(2048,2048),z.key.shadow.bias=-18e-5,z.key.shadow.normalBias=.028,m.add(z.key.target);function bt(){let e=z.key.shadow.camera,t=z.extent+4.5;e.left=-t,e.right=t,e.top=t,e.bottom=-t,e.near=1,e.far=48,e.updateProjectionMatrix(),o.shadowMap.needsUpdate=!0}bt();let xt=new T(u.x,u.y),St=new me(u.x,u.y,{minFilter:g,magFilter:g,depthBuffer:!0,stencilBuffer:!1,depthTexture:xt}),wt=new me(u.x,u.y,{minFilter:g,magFilter:g,depthBuffer:!1,stencilBuffer:!1}),Tt=new me(u.x,u.y,{minFilter:g,magFilter:g,depthBuffer:!0,stencilBuffer:!1,samples:4}),Et=new me(u.x,u.y,{minFilter:g,magFilter:g,depthBuffer:!1,stencilBuffer:!1}),Dt=new me(u.x,u.y,{minFilter:g,magFilter:g,depthBuffer:!1,stencilBuffer:!1}),Ot=Math.max(1,Math.floor(u.x/2)),kt=Math.max(1,Math.floor(u.y/2)),At=new me(Ot,kt,{minFilter:g,magFilter:g,depthBuffer:!1,stencilBuffer:!1}),jt=new me(Ot,kt,{minFilter:g,magFilter:g,depthBuffer:!1,stencilBuffer:!1}),Mt=new O,Nt=new c(-1,1,1,-1,0,1),Ft=new v(new h(2,2));Mt.add(Ft);let Q=new ie({vertexShader:En,fragmentShader:ui,uniforms:{uScene:{value:St.texture},uTime:{value:0},uResolution:{value:new ge(u.x,u.y)},uGrain:{value:1},uChroma:{value:1},uExposure:{value:1},uAces:{value:0},uBloom:{value:At.texture},uBloomStrength:{value:0},uGrade:{value:0},uGradeTint:{value:D.grade.tint},uGradeLift:{value:D.grade.lift},uGradeSat:{value:1},uGradeContrast:{value:1},uDither:{value:0},uTonemap:{value:0}}}),It=new ie({vertexShader:En,fragmentShader:mi,uniforms:{uScene:{value:St.texture},uThreshold:{value:.78}}}),$=new ie({vertexShader:En,fragmentShader:hi,uniforms:{uScene:{value:At.texture},uDir:{value:new ge}}});function Lt(e){It.uniforms.uScene.value=e.texture,Jt(It,At),$.uniforms.uScene.value=At.texture,$.uniforms.uDir.value.set(1.6/Ot,0),Jt($,jt),$.uniforms.uScene.value=jt.texture,$.uniforms.uDir.value.set(0,1.6/kt),Jt($,At),Q.uniforms.uBloom.value=At.texture;let n=1-t.clamp(D.sunArc.y*2.2,0,1);Q.uniforms.uBloomStrength.value=.85*(.32+.95*n)}let Rt=e=>{let t=e.map(e=>new M(e));for(;t.length<8;)t.push(new M(0,0,0));return t},zt=[`night`,`dawn`,`noon`,`dusk`],Bt={inkgold:zt.map(e=>Rt(Ci[e])),terminal:zt.map(e=>Rt(wi[e]))},Vt=new ie({vertexShader:En,fragmentShader:di,uniforms:{uScene:{value:wt.texture},uResolution:{value:new ge(u.x,u.y)},uPixelSize:{value:Si},uPalette:{value:Bt.inkgold[2]},uPaletteB:{value:Bt.inkgold[2]},uPaletteBlend:{value:0},uPaletteSize:{value:5}}}),Ht=new ie({vertexShader:En,fragmentShader:gi,uniforms:{uScene:{value:wt.texture},uResolution:{value:new ge(u.x,u.y)},uGridWidth:{value:160},uDither:{value:.55},uPalette:{value:bi(_i[`8-bit`].palette)},uPaletteSize:{value:1},uUsePalette:{value:1}}}),Ut={};for(let e of vi)Ut[e]=_i[e].palette?bi(_i[e].palette):null;let Wt=new ie({vertexShader:En,fragmentShader:fi,uniforms:{uScene:{value:wt.texture},uDepth:{value:xt},uResolution:{value:new ge(u.x,u.y)},uBands:{value:4},uToonGain:{value:1.7},uToonGamma:{value:.6},uToonFloor:{value:D.toonFloor},uOutline:{value:D.outline},uNear:{value:.1},uFar:{value:100},uIsPerspective:{value:1}}}),Kt=new ie({vertexShader:En,fragmentShader:pi,uniforms:{uToon:{value:Et.texture},uPixel:{value:Dt.texture},uBlend:{value:0}}});function Jt(e,t){Ft.material=e,o.setRenderTarget(t),o.render(Mt,Nt)}function Xt(){w.setViewport(window.innerWidth,window.innerHeight),o.setSize(window.innerWidth,window.innerHeight);let e=o.getDrawingBufferSize(new ge);return N.setSize(e.x,e.y),St.setSize(e.x,e.y),wt.setSize(e.x,e.y),Tt.setSize(e.x,e.y),Et.setSize(e.x,e.y),Dt.setSize(e.x,e.y),Ot=Math.max(1,e.x>>1),kt=Math.max(1,e.y>>1),At.setSize(Ot,kt),jt.setSize(Ot,kt),oe.uniforms.uResolution.value.set(e.x,e.y),Q.uniforms.uResolution.value.set(e.x,e.y),Vt.uniforms.uResolution.value.set(e.x,e.y),Ht.uniforms.uResolution.value.set(e.x,e.y),Wt.uniforms.uResolution.value.set(e.x,e.y),e}let Zt=Un({renderer:o}),$t=!0;function en(e,t){let n=t.dpr==null?s:t.dpr,r=Math.min(window.devicePixelRatio,n);Math.abs(o.getPixelRatio()-r)>.001&&(o.setPixelRatio(r),typeof window<`u`&&window.dispatchEvent?window.dispatchEvent(new Event(`resize`)):Xt()),$t=t.shadows!==!1,$t||(o.shadowMap.needsUpdate=!1)}let tn=Gn({profiler:Zt,apply:en});function nn(){!f&&!d&&Zt.frameStart()}function rn(){f||d||(Zt.frameEnd(),tn.update())}function an(e){f=!e,typeof window<`u`&&(window.__paused=f)}function on(){try{o.compile(m,w.camera),An(1/60,0,{shadowsOn:!0}),Tn(Dn(),St),o.setRenderTarget(null)}catch(e){typeof console<`u`&&console.warn(`[L79] prewarm`,e)}}let sn=3,cn=!1,ln=!1,un=`native`,fn=.3,pn=.46,mn=[`native`,...vi],hn={"16-bit":`16-bit`,"8-bit":`8-bit`,gb:`Game Boy`,modern:`Modern`,native:`Pixel`,"1-bit":`1-bit`};typeof window<`u`&&(window.__mode=sn,window.__vector=cn,window.__era=un),typeof window<`u`&&(window.__frames=0),typeof window<`u`&&(window.__loaded=!1);let gn=0,_n=new E(1,1,1),vn=!1;function yn(e){let t=ln?Bt.terminal:Bt.inkgold,n=e%1*4,r=Math.floor(n)%4;Vt.uniforms.uPalette.value=t[r],Vt.uniforms.uPaletteB.value=t[(r+1)%4],Vt.uniforms.uPaletteBlend.value=n-Math.floor(n)}function bn(e){let t=_i[e];t&&(Ht.uniforms.uGridWidth.value=t.gridWidth,Ht.uniforms.uDither.value=t.dither,Ht.uniforms.uUsePalette.value=+!!t.palette,t.palette&&(Ht.uniforms.uPalette.value=Ut[e],Ht.uniforms.uPaletteSize.value=t.palette.length))}function xn(){un!==`native`&&bn(un)}let Sn=()=>un===`native`?Vt:Ht;function Cn(e,t){_e(!0),m.environment=be(),qe.value=1,L.visible=!1,o.setRenderTarget(N),o.render(m,e),L.visible=!0,o.setRenderTarget(Tt),o.render(m,e),Lt(Tt),Q.uniforms.uScene.value=Tt.texture,Q.uniforms.uAces.value=1,Q.uniforms.uGrade.value=1,Q.uniforms.uGrain.value=0,Q.uniforms.uChroma.value=0,Q.uniforms.uDither.value=1,Jt(Q,t)}function Tn(e,t){let n=!cn&&(sn===1||sn===2);if(_e(n),m.environment=n?be():null,qe.value=+!!n,Q.uniforms.uBloomStrength.value=0,L.visible=!1,o.setRenderTarget(N),o.render(m,w.camera),L.visible=!0,sn===1&&!n)o.setRenderTarget(t),o.render(m,w.camera);else if(sn===1)o.setRenderTarget(Tt),o.render(m,w.camera),Lt(Tt),Q.uniforms.uScene.value=Tt.texture,Q.uniforms.uAces.value=1,Q.uniforms.uGrade.value=1,Q.uniforms.uGrain.value=0,Q.uniforms.uChroma.value=0,Q.uniforms.uDither.value=1,Jt(Q,t);else if(o.setRenderTarget(n?Tt:St),o.render(m,w.camera),sn===2)n&&Lt(Tt),Q.uniforms.uScene.value=n?Tt.texture:St.texture,Q.uniforms.uAces.value=+!!n,Q.uniforms.uGrade.value=+!!n,Q.uniforms.uGrain.value=1,Q.uniforms.uChroma.value=1,Q.uniforms.uDither.value=+!!n,Jt(Q,t);else{Q.uniforms.uScene.value=St.texture,Q.uniforms.uAces.value=0,Q.uniforms.uGrade.value=0,Q.uniforms.uGrain.value=0,Q.uniforms.uChroma.value=0,Q.uniforms.uDither.value=0,Jt(Q,wt);let n=w.camera;Wt.uniforms.uNear.value=n.near,Wt.uniforms.uFar.value=n.far,Wt.uniforms.uIsPerspective.value=+!!n.isPerspectiveCamera;let r=e.era?(bn(e.era),Ht):Sn();e.kind===`pixel`?(Jt(r,t),window.__style=`pixel`):e.kind===`toon`?(Jt(Wt,t),window.__style=`toon`):(Jt(Wt,Et),Jt(r,Dt),Kt.uniforms.uBlend.value=e.blend,Jt(Kt,t),window.__style=`blend`)}}function Dn(){let e=On(),n=e.kind===`toon`?1:e.kind===`blend`?1-e.blend:0;return oe.uniforms.uChromaScale.value=t.lerp(1,.5,n),e}function On(){if(sn===1||sn===2)return{kind:`none`};if(sn===7)return{kind:`pixel`};if(sn===8)return{kind:`toon`};let e=w.styleT;return window.__styleT=e,e<=fn?{kind:`toon`}:e>=pn?{kind:`pixel`,era:e<.62?`16-bit`:e<.8?`8-bit`:`gb`}:{kind:`blend`,blend:t.smoothstep(e,fn,pn),era:`16-bit`}}function kn(e){return sn===1||sn===2?``:cn&&sn!==7&&sn!==8?`Vector`:e.kind===`toon`?`Toon`:e.kind===`pixel`?hn[e.era||un]||`Pixel`:e.kind===`blend`?`Toon → `+(hn[e.era]||`Pixel`):``}function An(e,n,{shadowsOn:r=!0,seasonTarget:i=0}={}){typeof window<`u`&&window.__frames++,r&&=$t,I.material.uniforms.uTime.value=n,Q.uniforms.uTime.value=n,D.update(e),z.key.position.copy(D.sunDir).multiplyScalar(24),z.key.color.copy(D.sunColor),z.key.intensity=D.sunIntensity,z.fill.color.copy(D.hemiSky),z.fill.groundColor.copy(D.hemiGround),R.value=D.windowGlow,pe.setSun(D.sunArc),pe.setParams(D.skyParams),Q.uniforms.uGradeSat.value=D.grade.sat,Q.uniforms.uGradeContrast.value=D.grade.contrast,m.environmentIntensity=.34*(1-.6*t.clamp(D.sunArc.y*1.5,0,1));let a=H.overcast;z.key.intensity*=1-.5*a,z.key.color.lerp(_,.45*a),z.fill.intensity=1+.7*a;let s=t.smoothstep(D.sunDir.y,.06,.34),c=t.lerp(.28,1,1-D.windowGlow),l=r?s*c:0;z.key.shadow.intensity=.72*l,Fe.value=.52*l,(r&&!vn||_n.distanceToSquared(D.sunDir)>2e-5)&&(o.shadowMap.needsUpdate=!0,_n.copy(D.sunDir)),vn=r;let u=1-D.windowGlow;Pe.setRGB(t.lerp(.46,1,u),t.lerp(.52,1,u),t.lerp(.74,1,u)),Q.uniforms.uExposure.value=D.exposure,Wt.uniforms.uToonGain.value=D.toonGain,o.setClearColor(D.horizon,1),yn(D.t),window.__t=D.t,ce.update(e,n,D),z.update(n),B.update(e,n,D),j.uniforms.uWakeCount.value=B.wakeCount,H.update(e,n),j.uniforms.uRainCount.value=H.rainDropCount;let d=H.fog*(1-u);m.fog.density=H.fog*x,C.copy(D.horizon).lerp(S,.85*d),m.fog.color.copy(C),o.setClearColor(C,1),ze.value=H.fog,I.material.uniforms.uFogAmt.value=.7*H.fog,Ie.value=H.snow,Le.value=H.cloud*.55,Re.x+=e*.018,Re.y+=e*.009,Be.value+=(i-Be.value)*Math.min(1,e*1.5),ue.update(e,n,D,H),xe&&Y.update(e,n,D),xe&&X.step(e);let f=On(),p=f.kind===`pixel`||f.kind===`blend`?`pixel`:cn?`vector`:f.kind===`toon`?`charm`:`realistic`;fe.update(e,n,D,H,p,w.camera);let[h,g,v]=k;if(j.uniforms.uPrev.value=h.texture,j.uniforms.uCurr.value=g.texture,o.setRenderTarget(v),o.render(A,te),k=[g,v,h],oe.uniforms.uHeight.value=k[1].texture,gn<2&&typeof document<`u`&&++gn===2){let e=document.getElementById(`lgr-loader`);e&&e.classList.add(`gone`),window.__loaded=!0}}function jn(e){sn=e,window.__mode=sn}function Mn(){return cn=!cn,Ne.value=+!!cn,window.__vector=cn,cn}function Nn(e){return cn=!!e,Ne.value=+!!cn,window.__vector=cn,cn}function Pn(){return un=mn[(mn.indexOf(un)+1)%mn.length],window.__era=un,xn(),un}function In(){return ln=!ln,ln}return{updateWorld:An,decideStyle:Dn,renderCityPipeline:Tn,renderCityBeautyTo:Cn,styleHintName:kn,setPostMode:jn,toggleVector:Mn,setVector:Nn,cycleEra:Pn,togglePalette:In,setTonemap:e=>{let t=e===`agx`||e===1||e===!0;return Q.uniforms.uTonemap.value=+!!t,typeof window<`u`&&(window.__tonemap=t?`agx`:`aces`),t?`agx`:`aces`},get mode(){return sn},get vector(){return cn},get sceneEra(){return un},renderer:o,drawBuffer:u,scene:m,rig:w,sunRig:D,SIM:256,targets:k,simScene:A,simCamera:te,simMaterial:j,grabRT:N,card:re,backdrop:I,WATER_SIZE:28,water:L,waterMaterial:oe,windowGlow:R,landmarkFactory:se,city:z,cityLife:ce,waterLife:B,weatherRig:H,clouds:ue,inspector:W,world:mt,catalog:ht,editor:gt,pilot:yt,profiler:Zt,governor:tn,frameStart:nn,frameEnd:rn,setActive:an,get paused(){return f},get contextLost(){return d},prewarm:on,fitShadowFrustum:bt,SHADOW_DIST:24,sceneDepth:xt,sceneRT:St,filmicRT:wt,toonRT:Et,pixelRT:Dt,postScene:Mt,postCamera:Nt,postQuad:Ft,filmicMaterial:Q,pixelMaterial:Vt,pixelkitMaterial:Ht,toonMaterial:Wt,mixMaterial:Kt,PALCACHE:Bt,ERA_TEX:Ut,runPass:Jt,OVERCAST_GREY:_,FOG_DENSITY:x,FOG_NIGHT_TINT:S,_fogColor:C,resize:Xt}}var Ei=[`video/mp4;codecs=avc1.42E01E`,`video/mp4`,`video/webm;codecs=vp9`,`video/webm`];function Di({renderer:e,rig:t,sunRig:n,poke:r,getState:i,office:a={}}){let o=e.domElement,s=new URLSearchParams(window.location.search),c=e=>{let t=i();return`lgr-${t.lesson}-${String(t.clock||``).replace(`:`,``)}-${t.style}.${e}`},l=(e,t)=>{let n=URL.createObjectURL(e),r=document.createElement(`a`);r.href=n,r.download=t,document.body.appendChild(r),r.click(),r.remove(),setTimeout(()=>URL.revokeObjectURL(n),1e3)};function u(){o.toBlob(e=>{e&&(l(e,c(`png`)),window.__lastStill=e.size)},`image/png`)}let d=()=>Ei.find(e=>window.MediaRecorder&&MediaRecorder.isTypeSupported(e))||``,f=Oi(),p=null,m=[],h=!1;function g(){if(h)return;let e=d(),t=o.captureStream(60);p=new MediaRecorder(t,e?{mimeType:e,videoBitsPerSecond:12e6}:{}),m=[],p.ondataavailable=e=>{e.data&&e.data.size&&m.push(e.data)},p.onstop=()=>{let e=new Blob(m,{type:p.mimeType});l(e,c(p.mimeType.includes(`mp4`)?`mp4`:`webm`)),window.__lastVideo=e.size},p.start(),h=!0,window.__recording=!0,f.show()}function _(){h&&(p.stop(),h=!1,window.__recording=!1,f.hide())}let v=()=>h?_():g(),y=e=>new Promise(t=>setTimeout(t,e)),b=e=>{let t=e.startsWith(`Shift+`),n=t?e.slice(6):e;window.dispatchEvent(new KeyboardEvent(`keydown`,{key:n,shiftKey:t}))};async function x(){let e=o.clientWidth,t=o.clientHeight,n=e*.26,i=t*.74;for(let t=0;t<=10;t++)r.at(n+t*e*.028,i+Math.sin(t*.7)*16),await y(100);r.stop()}async function S(e){if(e.keys)for(let t of e.keys)b(t),await y(70);e.zoom&&t.zoomBy(e.zoom),e.orbit&&t.orbit(e.orbit[0],e.orbit[1]),e.timeTo!==void 0&&n.goTo(e.timeTo),e.office&&a[e.office]?.(),e.ripple&&await x(),e.waitMs&&await y(e.waitMs)}let C={tour:[{keys:[`6`,`0`],waitMs:600},{zoom:.72,waitMs:1700},{ripple:!0,waitMs:2400},{orbit:[.55,0],waitMs:1700},{timeTo:0,waitMs:3e3},{timeTo:.5,waitMs:1500},{keys:[`7`],waitMs:1e3},{zoom:1.5,waitMs:1400},{keys:[`B`],waitMs:2e3},{keys:[`B`],waitMs:2e3},{keys:[`B`],waitMs:2e3},{keys:[`B`],waitMs:2e3},{keys:[`B`],waitMs:2e3},{keys:[`8`],waitMs:900},{zoom:.65,waitMs:1200},{ripple:!0,waitMs:2600},{keys:[`7`],waitMs:700},{keys:[`B`],waitMs:300},{keys:[`B`],waitMs:900},{zoom:1.4,waitMs:2600}],daycycle:[{keys:[`6`,`0`],waitMs:700},{timeTo:.75,waitMs:2600},{timeTo:1,waitMs:2600},{timeTo:1.25,waitMs:2600},{timeTo:1.5,waitMs:2600},{timeTo:1.5,waitMs:800}],office:[{keys:[`o`],waitMs:1700},{office:`pet`,waitMs:1300},{office:`feed`,waitMs:1700},{office:`travel`,waitMs:1700},{keys:[`Shift+W`,`Shift+W`,`Shift+W`],waitMs:1800},{timeTo:0,waitMs:2400},{office:`laptop`,waitMs:800},{office:`closeLaptop`,waitMs:300},{timeTo:.5,waitMs:900},{keys:[`Shift+W`],waitMs:200},{keys:[`o`],waitMs:1500}],cities:[{keys:[`6`,`0`],waitMs:500},{timeTo:.78,waitMs:2800},{keys:[`C`],waitMs:3e3},{keys:[`C`],waitMs:3e3},{keys:[`C`],waitMs:2e3}],water:[{keys:[`6`,`0`],waitMs:600},{zoom:1.35,waitMs:2800},{orbit:[.7,0],waitMs:2600},{ripple:!0,waitMs:2200},{timeTo:0,waitMs:3200},{timeTo:.5,waitMs:1500},{orbit:[-.5,0],waitMs:2200}],morph:[{keys:[`6`,`3`],waitMs:700},{zoom:.55,waitMs:1800},{zoom:2.3,waitMs:1700},{zoom:1.26,waitMs:1700},{zoom:1.16,waitMs:1900},{zoom:.3,waitMs:2200}],skin:[{keys:[`o`],waitMs:1800},{keys:[`j`],waitMs:2e3},{keys:[`j`],waitMs:2e3},{timeTo:0,waitMs:2600},{timeTo:.5,waitMs:1500},{keys:[`u`],waitMs:2e3},{keys:[`j`],waitMs:1400},{keys:[`o`],waitMs:1500}]};async function w(e){let t=C[e];if(t){window.__director=e;for(let e of t)await S(e);window.__director=null}}async function T(e){await y(1600),g(),await w(e),await y(400),_(),window.__captureDone=!0}s.has(`capture`)&&window.addEventListener(`keydown`,e=>{(e.key===`s`||e.key===`S`)&&u(),(e.key===`r`||e.key===`R`)&&v()});let E=s.get(`capture`);return E&&C[E]&&T(E),window.__capture={still:u,toggleRec:v,run:w,sequences:Object.keys(C)},window.__capture}function Oi(){let e=document.createElement(`div`);return e.textContent=`● REC`,e.style.cssText=`position:fixed;top:14px;right:16px;z-index:2;font:bold 12px ui-monospace,monospace;color:#ff3b30;letter-spacing:.12em;text-shadow:0 1px 3px #000;display:none;`,document.body.appendChild(e),{show:()=>{e.style.display=`block`},hide:()=>{e.style.display=`none`}}}var ki=`
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
.vui-rail button.on { background: #3a7bd5; color: #fff; }
.vui-rail .rk { display: block; font-size: 8px; opacity: .5; margin-top: 2px; letter-spacing: .1em; }
.vui-card { position: fixed; left: 74px; top: 50%; transform: translateY(-50%); z-index: 3; display: none;
  flex-direction: column; gap: 8px; padding: 11px 12px; border-radius: 14px; max-width: 236px; background: rgba(16,18,24,0.84);
  backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); box-shadow: 0 6px 24px rgba(0,0,0,0.4);
  color: #d8dde6; font: 600 12px/1 ui-monospace, monospace; pointer-events: auto; }
.vui-card.open { display: flex; }
.vui-card .ct { font-size: 13px; color: #eef2f8; letter-spacing: .04em; }
.vui-card .crow { display: flex; align-items: center; gap: 7px; flex-wrap: wrap; }
.vui-card .clbl { opacity: .55; font-size: 10px; letter-spacing: .1em; text-transform: uppercase; min-width: 46px; }
.vui-card input[type=range] { width: 108px; accent-color: #3a7bd5; height: 36px; cursor: pointer; }
.vui-card button { min-width: 40px; min-height: 40px; padding: 0 10px; border: 0; border-radius: 9px;
  background: rgba(255,255,255,0.08); color: inherit; font: inherit; cursor: pointer; transition: background .12s; }
.vui-card button:hover { background: rgba(255,255,255,0.17); }
.vui-card button.on { background: #3a7bd5; color: #fff; }
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
.vui-info { position: fixed; left: 50%; bottom: 74px; transform: translateX(-50%); z-index: 3;
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
`;function Ai({controls:e,state:t,show:n,coarse:r}){if(typeof document>`u`)return;let i=document.createElement(`style`);i.textContent=ki,document.head.appendChild(i);let a=document.createElement(`div`);a.className=`vui`;let o=document.createElement(`div`);o.className=`vui-info`,o.innerHTML=`KEYS · 4/5/6 cam · 0 vector · 7/8 pixel/toon · B era · T time · [ ] scrub · 9 auto · C city · G shuffle · W weather · K season · click a building / O office · J office skin · U painted props · Esc exit · M hide UI · S still · R rec · H shadows · P theme · drag water to ripple`;let s=(e,t,n)=>{let r=document.createElement(`button`);return r.textContent=e,n&&(r.title=n),r.addEventListener(`click`,e=>{navigator.vibrate?.(10),t(e)}),r},c=e=>{let t=document.createElement(`div`);return t.className=`seg`,{seg:t,btns:e.map(([n,r])=>{let i=s(n,()=>e.find(e=>e[1]===r)[2](),n);return i.dataset.val=r,t.appendChild(i),i})}},l=e=>{let t=document.createElement(`span`);return t.className=`clbl`,t.textContent=e,t},u=(e,t,n,r)=>{let i=document.createElement(`input`);return i.type=`range`,i.min=String(e),i.max=String(t),i.step=String(n),i.addEventListener(`input`,()=>r(parseFloat(i.value))),i},d=s(`City`,()=>e.city(),`Next city profile (C)`),f=s(`Shuffle`,()=>e.shuffle(),`New random seed (G)`),p={clear:`Clear`,rain:`Rain`,snow:`Snow`,fog:`Fog`},m=[`Spring`,`Summer`,`Autumn`,`Winter`],h=s(`Clear`,()=>e.weather(),`Cycle weather: clear→rain→snow→fog (W)`),g=s(`Spring`,()=>e.season(),`Cycle season: spring→summer→autumn→winter (K)`),_=s(`Office`,()=>e.office(),`Dive into / exit the office (O · Esc)`),v={"3d":`3D`,dressed2:`Dressed`,night2:`Night`,modern:`Modern`,charm:`Charm`},y=s(`Skin`,()=>e.officeSkin(),`Office look: 3D → dressed → night → modern → charm diffusion (J)`),b={painted:`Painted`,"3d":`Live 3D`},x=s(`Props`,()=>e.officeProps(),`Office props: painted (cohesive) ↔ live 3D (animated) — under a skin (U)`),S=s(`Inspect`,()=>e.inspect(),`Inspect: fly + click/tap any car·person·bird·boat·cloud to follow + watch its behaviour (I)`),C={valley:`Valley`,archipelago:`Archi`,mountains:`Mountains`,plains:`Plains`},w=s(`World`,()=>e.world(),`Generate + explore a procedural terrain world`),T=s(`🎲`,()=>e.worldReroll(),`New random world (seed) — G`),E=s(`Valley`,()=>e.worldPreset(),`Cycle biome preset: valley → archipelago → mountains → plains`),D=s(`✎ Edit`,()=>e.sculpt&&e.sculpt(),`World editor — brush the terrain (Sculpt to reshape, Paint to recolour)`),O=document.createElement(`div`);O.className=`vui-rail`;let ee=null;function k(t){ee||!t||(ee=t.map(t=>{let n=document.createElement(`button`);return n.dataset.id=t.id,n.title=`${t.label} (${t.key})`,n.innerHTML=`${t.icon}<span class="rk">${t.key}</span>`,n.addEventListener(`click`,()=>{navigator.vibrate?.(10),e.editTool&&e.editTool(t.id)}),O.appendChild(n),n}))}let A=document.createElement(`div`);A.className=`vui-card`;let te=document.createElement(`div`);te.className=`ct`;let j=document.createElement(`div`);j.className=`crow`;let M=u(.8,6,.1,t=>e.brushSize&&e.brushSize(t));j.append(l(`Size`),M);let N=document.createElement(`div`);N.className=`crow`;let P=u(.01,.15,.005,t=>e.brushStrength&&e.brushStrength(t));N.append(l(`Force`),P);let F=document.createElement(`div`);F.className=`crow`;let ne=u(.1,1,.05,t=>e.brushDensity&&e.brushDensity(t));F.append(l(`Density`),ne);let re=s(`↑ Raise`,()=>e.sculptDir&&e.sculptDir(),`Brush direction: raise ↔ lower / add ↔ erase / place ↔ delete`),ie=s(`↶ Undo`,()=>e.worldUndo&&e.worldUndo(),`Undo the last edit (Z)`),ae=s(`↺ Reset`,()=>e.worldReset&&e.worldReset(),`Reset to the generated world (discard edits) — same seed, NOT a reroll`),I=s(`↺ Reset`,()=>e.worldReset&&e.worldReset(),`Reset the world (discard edits) — same seed`),oe=s(`👁 Trees`,()=>e.hideScatter&&e.hideScatter(),`Hide the scatter (trees/rocks) to see the ground you are editing`),L=document.createElement(`div`);L.className=`seg`,L.style.display=`none`;let R=null;function se(t){R||!t||(R=t.map((t,n)=>{let r=document.createElement(`button`);return r.title=t.key,r.style.cssText=`min-width:30px;padding:0;background:${t.color};border:0;border-radius:8px;`,r.addEventListener(`click`,()=>{navigator.vibrate?.(8),e.material&&e.material(n)}),L.appendChild(r),r}))}let z=document.createElement(`div`);z.className=`seg`,z.style.display=`none`;let ce=null;function le(t){ce||!t||(ce=t.map(t=>{let n=document.createElement(`button`);return n.dataset.key=t.key,n.textContent=t.icon,n.title=t.label,n.style.cssText=`min-width:30px;padding:4px 6px;`,n.addEventListener(`click`,()=>{navigator.vibrate?.(8),e.scatterType&&e.scatterType(t.key)}),z.appendChild(n),n}))}let B=document.createElement(`div`);B.className=`seg`,B.style.display=`none`;let V=null;function H(t){V||!t||(V=t.map(t=>{let n=document.createElement(`button`);return n.dataset.key=t.key,n.textContent=t.icon,n.title=t.label,n.style.cssText=`min-width:30px;padding:4px 6px;`,n.addEventListener(`click`,()=>{navigator.vibrate?.(8),e.entity&&e.entity(t.key)}),B.appendChild(n),n}))}let ue=c([[`×1`,`1`,()=>e.dropN&&e.dropN(1)],[`×10`,`10`,()=>e.dropN&&e.dropN(10)],[`×50`,`50`,()=>e.dropN&&e.dropN(50)]]);ue.seg.style.display=`none`,ue.seg.title=`How many to drop per click (scattered in the ring)`;let U=document.createElement(`div`);U.className=`crow`,U.append(re,ie,I,oe),A.append(te,j,N,L,z,F,B,ue.seg,U);let de=document.createElement(`div`);de.className=`vui-save`;let W=document.createElement(`div`);W.className=`ct`,W.textContent=`💾 Save / Load`;let fe=document.createElement(`input`);fe.type=`text`,fe.placeholder=`world name`,fe.value=`my-world`;let pe=document.createElement(`select`),me=``;pe.addEventListener(`change`,()=>{pe.value&&(fe.value=pe.value)});let he=document.createElement(`input`);he.type=`file`,he.accept=`.json,application/json`,he.style.display=`none`,he.addEventListener(`change`,()=>{he.files[0]&&(e.importWorld(he.files[0]),he.value=``)});let ge=s(`💾 Save`,()=>e.saveWorld(fe.value.trim()),`Save to this device (a named slot)`),_e=s(`📂 Load`,()=>e.loadWorld(fe.value.trim()),`Load the named slot`),ve=s(`🗑`,()=>e.deleteWorld(fe.value.trim()),`Delete the named slot`),ye=s(`⬇ Export`,()=>e.exportWorld(fe.value.trim()),`Download the world as a JSON file (portable, lossless)`),be=s(`⬆ Import`,()=>he.click(),`Load a world from a JSON file`),G=s(`🔗 Link`,()=>e.shareLink(),`Copy a shareable link (light edits only — else use Export)`),K=document.createElement(`div`);K.className=`st`;let q=document.createElement(`div`);q.className=`srow`,q.append(fe);let J=document.createElement(`div`);J.className=`srow`,J.append(pe);let xe=document.createElement(`div`);xe.className=`srow`,xe.append(ge,_e,ve);let Se=document.createElement(`div`);Se.className=`srow`,Se.append(ye,be,G),de.append(W,q,J,xe,Se,K,he);let Ce=s(`✨ Realistic`,()=>e.realistic(),`Cinematic beauty look — atmospheric sky, glowing sun, colour-graded (showcase)`),we=c([[`Auto`,`auto`,()=>e.post(`auto`)],[`Pixel`,`pixel`,()=>e.post(`pixel`)],[`Toon`,`toon`,()=>e.post(`toon`)],[`None`,`none`,()=>e.post(`none`)]]);we.btns[0].title=`AUTO: zoom morphs the style (toon → 16-bit → 8-bit → Game Boy)`,we.btns[3].title=`NONE: raw beauty render, no post-crunch (clean flat-vector when Vector is on)`;let Te=s(`Vector`,()=>e.vector(),`Flat-vector materials — LAYERS onto the post mode (Vector + Pixel/Toon/Auto). Toggle (0)`),Ee={native:`Era`,gb:`GB`,"8-bit":`8-bit`,"16-bit":`16-bit`,modern:`Modern`,"1-bit":`1-bit`},De=s(`Era`,()=>e.era(),`Cycle the pixel era (B): native → GB → 8-bit → 16-bit → Modern`),Oe=document.createElement(`input`);Oe.type=`range`,Oe.min=`0`,Oe.max=`1`,Oe.step=`0.01`,Oe.title=`Time of day`;let ke=!1;Oe.addEventListener(`pointerdown`,()=>{ke=!0}),Oe.addEventListener(`pointerup`,()=>{ke=!1}),Oe.addEventListener(`input`,()=>e.time(parseFloat(Oe.value)));let Ae=s(`▶`,()=>e.auto(),`Play/pause day cycle (9)`),Y=document.createElement(`div`);Y.style.cssText=`display:flex;align-items:center;gap:6px;`;let je=document.createElement(`span`);je.className=`lbl`,je.textContent=`Day`,Y.append(je,Oe,Ae);let Me=c([[`Iso`,`iso`,()=>e.cam(`iso`)],[`Dim`,`dimetric`,()=>e.cam(`dimetric`)],[`3D`,`persp`,()=>e.cam(`persp`)]]),Ne=s(`ⓘ`,()=>o.classList.toggle(`open`),`All keys`),Pe=s(`⌄`,()=>Je(!0),`Hide controls — watch unobstructed (M)`),Fe=document.createElement(`div`);Fe.className=`vui-more`;let Ie=s(`More`,()=>{Fe.classList.toggle(`open`),Xe()},`More controls`);if(r){a.append(d,f,_,S,w,Ae,we.seg,Ie,Pe);let e=document.createElement(`div`);e.style.cssText=`display:flex;align-items:center;gap:6px;`,e.append(je,Oe),Fe.append(Ce,T,ae,E,D,h,g,y,x,Te,De,Me.seg,e)}else a.append(d,f,rt(),h,g,_,y,x,rt(),S,w,T,ae,E,D,rt(),we.seg,Ce,Te,De,rt(),Y,rt(),Me.seg,Ne,rt(),Pe);let Le=document.createElement(`div`);Le.className=`vui-inspect`;let Re=document.createElement(`div`);Re.className=`ik`;let ze=document.createElement(`div`);ze.className=`it`;let Be=document.createElement(`div`);Be.className=`ii`;let Ve=document.createElement(`div`);Ve.className=`ir`;let X=s(`▸ Next`,()=>e.inspectNext&&e.inspectNext(),`Follow the next object (Tab)`),He=s(`✕`,()=>e.inspect(),`Exit inspect (Esc)`);Ve.append(X,He),Le.append(Re,ze,Be,Ve);let Ue=document.createElement(`button`);Ue.className=`vui-show`,Ue.innerHTML=`⌃ Controls`,Ue.title=`Show controls (M)`,Ue.addEventListener(`click`,()=>Je(!1));let We=document.createElement(`div`);We.className=`vui-style`,document.body.append(o,Fe,a,Ue,We,Le,O,A,de);let Ge=n,Ke=!1;Je(r);function Z(){let e=t();we.btns.forEach(t=>t.classList.toggle(`on`,t.dataset.val===e.post)),Te.classList.toggle(`on`,!!e.vector),Me.btns.forEach(t=>t.classList.toggle(`on`,t.dataset.val===e.cam)),h.textContent=p[e.weather]||`Clear`,h.classList.toggle(`on`,e.weather!==`clear`),g.textContent=m[e.season]||`Spring`,g.classList.toggle(`on`,(e.season||0)>0),_.textContent=e.office?`Exit`:`Office`,_.classList.toggle(`on`,!!e.office),y.textContent=v[e.officeSkin]||`Skin`,y.classList.toggle(`on`,e.officeSkin&&e.officeSkin!==`3d`),x.textContent=b[e.officeProps]||`Props`,x.classList.toggle(`on`,e.officeProps===`painted`&&e.officeSkin&&e.officeSkin!==`3d`),Ae.textContent=e.auto?`❚❚`:`▶`,Ae.classList.toggle(`on`,e.auto),De.textContent=Ee[e.era]||`Era`,De.classList.toggle(`on`,e.era&&e.era!==`native`),S.textContent=e.inspect?`Exit`:`Inspect`,S.classList.toggle(`on`,!!e.inspect),w.textContent=e.world?`Exit`:`World`,w.classList.toggle(`on`,!!e.world),E.textContent=C[e.worldPreset]||`Valley`,T.style.display=e.world?``:`none`,ae.style.display=e.world?``:`none`,E.style.display=e.world?``:`none`,D.style.display=e.world?``:`none`,D.classList.toggle(`on`,!!e.sculpt),k(e.tools),O.classList.toggle(`open`,!!e.sculpt),ee&&ee.forEach(t=>t.classList.toggle(`on`,t.dataset.id===e.editTool)),A.classList.toggle(`open`,!!e.sculpt);let n=e.editTool,r=n===`paint`,i=n===`scatter`,a=n===`place`,o=n===`sculpt`;te.textContent={place:`✚ Place`,sculpt:`⛰ Sculpt`,paint:`🎨 Paint`,scatter:`🌲 Objects`,select:`◳ Select`}[n]||`Editor`,j.style.display=n===`select`?`none`:``,N.style.display=o?``:`none`,F.style.display=i?``:`none`,se(e.materials),L.style.display=r?``:`none`,R&&R.forEach((t,n)=>t.classList.toggle(`on`,n===e.material)),le(e.scatterKinds),z.style.display=i?``:`none`,ce&&ce.forEach(t=>t.classList.toggle(`on`,t.dataset.key===e.scatterType)),H(e.entityKinds),B.style.display=a?``:`none`,V&&V.forEach(t=>t.classList.toggle(`on`,t.dataset.key===e.entityKind)),ue.seg.style.display=a?``:`none`,ue.btns.forEach(t=>t.classList.toggle(`on`,t.dataset.val===String(e.dropN))),re.style.display=i||a||o?``:`none`,re.textContent=a?e.sculptRaise?`➕ Place`:`🗑 Delete`:i?e.sculptRaise?`➕ Add`:`➖ Erase`:e.sculptRaise?`↑ Raise`:`↓ Lower`,ie.disabled=!e.canUndo,ie.style.opacity=e.canUndo?``:`0.45`,oe.classList.toggle(`on`,!!e.scatterHidden),M.value=String(e.brushRadius),P.value=String(e.brushStrength),ne.value=String(e.brushDensity),de.classList.toggle(`open`,!!e.sculpt);let s=e.saveSlots||[],c=s.join(`,`);if(c!==me){me=c,pe.innerHTML=``;let e=document.createElement(`option`);e.value=``,e.textContent=s.length?`— ${s.length} saved —`:`— no saves —`,pe.append(e);for(let e of s){let t=document.createElement(`option`);t.value=e,t.textContent=e,pe.append(t)}}K.textContent=e.saveStatus||``,Ce.classList.toggle(`on`,!!e.realistic),ke||(Oe.value=String(e.t))}Z();let qe=setInterval(Z,200);function Je(e){if(!Ge){a.style.display=`none`,Ue.classList.remove(`on`),o.classList.remove(`open`),Fe.classList.remove(`open`),We.classList.remove(`on`);return}Ke=e,a.style.display=e?`none`:`flex`,Ue.classList.toggle(`on`,e),e&&(o.classList.remove(`open`),Fe.classList.remove(`open`),We.classList.remove(`on`))}function Ye(){Je(!Ke)}function Xe(){if(!Fe.classList.contains(`open`))return;let e=a.getBoundingClientRect();Fe.style.bottom=Math.round(window.innerHeight-e.top+8)+`px`}let Ze=()=>Xe();window.addEventListener(`resize`,Ze);let Qe=null,$e=null;function et(e){if(!Ge||Ke){We.classList.remove(`on`),Qe=null;return}if(!e){We.classList.remove(`on`),Qe=``;return}e!==Qe&&(Qe=e,We.textContent=e,We.classList.add(`on`),clearTimeout($e),$e=setTimeout(()=>We.classList.remove(`on`),2e3))}let tt=null;function nt(e){if(!Ge||!e){Le.classList.remove(`open`),tt=null;return}let t=e.hint?`hint:${e.hint}`:`${e.kind}|${e.info}`;t!==tt&&(tt=t,e.hint?(Re.textContent=`INSPECT`,ze.textContent=`Free-fly`,Be.textContent=e.hint,X.style.display=``):(Re.textContent=e.kind,ze.textContent=e.label||e.kind,Be.textContent=e.info||``,X.style.display=``),Le.classList.add(`open`))}return{toggle:Ye,setHidden:Je,refresh:Z,setStyleHint:et,setInspect:nt,destroy(){clearInterval(qe),window.removeEventListener(`resize`,Ze),a.remove(),o.remove(),Fe.remove(),Ue.remove(),We.remove(),Le.remove(),O.remove(),A.remove(),de.remove(),i.remove(),clearTimeout($e)}};function rt(){let e=document.createElement(`div`);return e.className=`sep`,e}}var ji=`lgr_hints_`,Mi=!1;function Ni(){if(Mi||typeof document>`u`)return;Mi=!0;let e=document.createElement(`style`);e.textContent=`
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
  }`,document.head.appendChild(e)}function Pi({key:e,title:t=`Tips`,tips:n=[],force:r=!1}={}){let i={key:e,shown:!1,dismissed:!1,seen:!1};if(typeof window<`u`&&(window.__hints=i),typeof document>`u`||!e)return{dismiss(){},el:null};let a=ji+e,o=!1;try{o=localStorage.getItem(a)===`1`}catch{}if(o&&!r)return i.seen=!0,{dismiss(){},el:null};Ni();let s=!!(window.matchMedia&&window.matchMedia(`(prefers-reduced-motion: reduce)`).matches),c=document.createElement(`div`);c.className=`lgr-hints`,c.innerHTML=`<div class="lgr-hints-card">
    <div class="lgr-hints-h">${t}</div>
    <ul>${n.map(e=>`<li>${e}</li>`).join(``)}</ul>
    <button class="lgr-hints-ok">Got it</button>
    <button class="lgr-hints-x" title="Dismiss (Esc)" aria-label="Dismiss">✕</button>
  </div>`,document.body.appendChild(c),i.shown=!0,s?c.classList.add(`on`):requestAnimationFrame(()=>c.classList.add(`on`));let l=!1;function u(e=!0){if(!l){if(l=!0,e)try{localStorage.setItem(a,`1`)}catch{}i.dismissed=!0,window.removeEventListener(`keydown`,d),c.classList.remove(`on`),setTimeout(()=>c.remove(),s?0:300)}}function d(e){e.key===`Escape`&&u(!0)}return window.addEventListener(`keydown`,d),c.querySelector(`.lgr-hints-ok`).addEventListener(`click`,()=>{navigator.vibrate?.(10),u(!0)}),c.querySelector(`.lgr-hints-x`).addEventListener(`click`,()=>{navigator.vibrate?.(10),u(!0)}),{dismiss:u,el:c}}var Fi=`precision highp float;

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
}`;function Ii({rate:e=4.6}={}){let t=new ie({vertexShader:En,fragmentShader:Fi,uniforms:{uA:{value:null},uB:{value:null},uT:{value:0},uFocus:{value:new ge(.5,.5)}}}),n=`a`,r=0;function i(e,n){t.uniforms.uA.value=e,t.uniforms.uB.value=n}function a(e){return n===`a`?(e&&t.uniforms.uFocus.value.copy(e),n=`in`,!0):!1}function o(){return n!==`b`&&n!==`in`?!1:(n=`out`,!0)}function s(e){n=e===`b`?`b`:`a`,r=+(e===`b`),t.uniforms.uT.value=r}function c(i){return r+=(+(n===`b`||n===`in`)-r)*Math.min(1,i*e),n===`in`&&r>.992&&(r=1,n=`b`),n===`out`&&r<.008&&(r=0,n=`a`),t.uniforms.uT.value=r,n}return{material:t,setSources:i,enter:a,exit:o,update:c,snap:s,get mode(){return n},get t(){return r},get transitioning(){return n===`in`||n===`out`}}}var Li=null;function Ri(){if(Li)return Li;let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return n.addColorStop(0,`rgba(0,0,0,0.60)`),n.addColorStop(.55,`rgba(0,0,0,0.32)`),n.addColorStop(1,`rgba(0,0,0,0.0)`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,128/2,0,Math.PI*2),t.fill(),Li=new U(e),Li.colorSpace=V,Li}function zi({w:e=.6,d:t=.6,x:n=0,y:r=.002,z:i=0,opacity:a=.5,rotation:o=0}={}){let s=new v(new h(e,t),new b({map:Ri(),transparent:!0,opacity:a,depthWrite:!1,toneMapped:!1}));return s.rotation.x=-Math.PI/2,s.rotation.z=o,s.position.set(n,r,i),s.renderOrder=-1,s.raycast=()=>{},s}function Bi({yawLimit:e=80,pitchUp:t=32,pitchDown:n=20,sensitivity:r=.16,keySpeed:i=70,damp:a=9}={}){let o=Math.PI/180,s=(e,t,n)=>e<t?t:e>n?n:e,c=0,l=0,u=0,d=0;return{addDrag(i,a){u=s(u-i*r,-e,e),d=s(d-a*r,-n,t)},addKeys(r,{left:a,right:o,up:c,down:l}){let f=i*r;a&&(u=s(u+f,-e,e)),o&&(u=s(u-f,-e,e)),c&&(d=s(d+f,-n,t)),l&&(d=s(d-f,-n,t))},recenter(){u=0,d=0},update(e){let t=1-Math.exp(-a*e);c+=(u-c)*t,l+=(d-l)*t},get yaw(){return c*o},get pitch(){return l*o},get active(){return Math.abs(c)>.05||Math.abs(l)>.05}}}var Vi=null;function Hi(){if(Vi)return Vi;let e=document.createElement(`canvas`);e.width=e.height=256;let t=e.getContext(`2d`),n=t.createRadialGradient(256/2,256/2,256*.32,256/2,256/2,256*.72);return n.addColorStop(0,`rgba(0,0,0,0)`),n.addColorStop(1,`rgba(0,0,0,1)`),t.fillStyle=n,t.fillRect(0,0,256,256),Vi=new U(e),Vi.colorSpace=V,Vi}function Ui({strength:e=.55,dist:n=.5}={}){let r=new v(new h(1,1),new b({map:Hi(),transparent:!0,opacity:e,depthTest:!1,depthWrite:!1,toneMapped:!1}));r.renderOrder=9999,r.raycast=()=>{},r.frustumCulled=!1;let i=new E;return r.fit=e=>{e.getWorldDirection(i),r.position.copy(e.position).addScaledVector(i,n),r.quaternion.copy(e.quaternion);let a=2*Math.tan(t.degToRad(e.fov)*.5)*n*1.05;r.scale.set(a*e.aspect,a,1)},r}export{Qe as _,Pi as a,Ti as c,bi as d,xi as f,Ze as g,Tt as h,Ii as i,_i as l,En as m,zi as n,Ai as o,gi as p,Ui as r,Di as s,Bi as t,yi as u,Z as v,q as y};