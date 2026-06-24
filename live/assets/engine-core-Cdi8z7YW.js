import{A as e,B as t,C as n,D as r,E as i,G as a,H as o,I as s,J as c,K as l,L as u,M as d,N as f,O as p,P as m,Q as h,R as g,T as _,U as v,V as y,W as b,X as x,Y as S,_ as C,_t as w,b as T,bt as E,c as D,ct as O,d as k,dt as A,et as j,f as ee,ft as M,g as N,ht as P,i as te,j as F,k as I,l as ne,lt as re,m as ie,mt as L,n as ae,nt as oe,o as se,p as ce,q as R,r as le,rt as ue,s as z,st as B,t as de,tt as V,u as H,ut as fe,v as U,w as W,x as pe,xt as G,y as me,yt as K,z as he}from"./three-fptASJPj.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var ge=(e,t,n,r)=>e+(t-e)*(1-Math.exp(-n*r)),_e=(e,t,n)=>e<t?t:e>n?n:e,ve=Math.atan(1/Math.SQRT2),ye=Math.atan(.5),be=Math.PI/4,xe={PERSPECTIVE:4,ISOMETRIC:5,DIMETRIC:6},Se=8,Ce=.12,q=1.45,J=4,we=40,Y=1.5,Te=16,Ee=6,X=22,De=3.5,Oe=11,ke=(e,t,n)=>ge(e,t,Se,n),Ae=(e,t)=>e+Math.PI*2*Math.round((t-e)/(Math.PI*2));function je({aspect:e,fov:n=48,near:r=.1,far:i=100,target:a=new E(0,.8,0),azimuth:o=be,elevation:s=.52,distance:l=12,zoom:u=5.5}={}){let d=new x(n,e,r,i),f=new c(-1,1,1,-1,r,i),p=xe.PERSPECTIVE,m=e,h={azimuth:o,elevation:s,distance:l,zoom:u,target:a.clone()},g={azimuth:o,elevation:s,distance:l,zoom:u,target:a.clone()},_=!1,v=null,y=new E,b=()=>p===xe.PERSPECTIVE?d:f;function S(e){e!==p&&(p=e,p===xe.ISOMETRIC||p===xe.DIMETRIC?(h.elevation=p===xe.ISOMETRIC?ve:ye,h.azimuth=Ae(be,g.azimuth),_=!0):_=!1)}function C(e,n){h.azimuth+=e,_||(h.elevation=t.clamp(h.elevation+n,Ce,q))}function w(e){p===xe.PERSPECTIVE?h.distance=t.clamp(h.distance*e,J,we):h.zoom=t.clamp(h.zoom*e,Y,Te)}function T(e,t){let n=h.azimuth,r=p===xe.PERSPECTIVE?h.distance*.04:h.zoom*.08,i=new E(Math.cos(n),0,-Math.sin(n)),a=new E(-Math.sin(n),0,-Math.cos(n));h.target.addScaledVector(i,e*r),h.target.addScaledVector(a,t*r)}function D(e,t){m=e/t,d.aspect=m,d.updateProjectionMatrix()}function O(e){v&&(v(y),h.target.copy(y)),g.azimuth=ke(g.azimuth,h.azimuth,e),g.elevation=ke(g.elevation,h.elevation,e),g.distance=ke(g.distance,h.distance,e),g.zoom=ke(g.zoom,h.zoom,e),g.target.x=ke(g.target.x,h.target.x,e),g.target.y=ke(g.target.y,h.target.y,e),g.target.z=ke(g.target.z,h.target.z,e);let t=Math.cos(g.elevation),n=Math.sin(g.elevation),r=Math.cos(g.azimuth),i=Math.sin(g.azimuth),a=b();if(a.position.set(g.target.x+g.distance*t*i,g.target.y+g.distance*n,g.target.z+g.distance*t*r),a.lookAt(g.target),a.isOrthographicCamera){let e=g.zoom,t=e*m;a.left=-t,a.right=t,a.top=e,a.bottom=-e,a.updateProjectionMatrix()}}function k(e,t,n,r=!1){h.target.set(e,t,n),r&&g.target.copy(h.target)}function A(e,n=!1){h.zoom=t.clamp(e,Y,Te),n&&(g.zoom=h.zoom)}function j(e,t=!1){h.azimuth=Ae(e,g.azimuth),t&&(g.azimuth=h.azimuth)}function ee(e,n=!1){h.elevation=t.clamp(e,Ce,q),n&&(g.elevation=h.elevation)}function M(e,{frame:n,snap:r=!1}={}){v=e,r&&(v(y),h.target.copy(y),g.target.copy(y)),n!=null&&(p===xe.PERSPECTIVE?h.distance=t.clamp(n,J,we):h.zoom=t.clamp(n,Y,Te))}function N(){v=null}return{get camera(){return b()},get mode(){return p},get azimuth(){return g.azimuth},get following(){return!!v},setTarget:k,setZoom:A,setFollow:M,clearFollow:N,setAzimuth:j,setElevation:ee,get styleT(){return p===xe.PERSPECTIVE?t.clamp((g.distance-Ee)/(X-Ee),0,1):t.clamp((g.zoom-De)/(Oe-De),0,1)},setMode:S,orbit:C,zoomBy:w,pan:T,setViewport:D,update:O}}var Me={value:0},Ne=new N(`#ffffff`),Pe={value:0},Fe={value:0},Ie={value:0},Le=new K,Re={value:0},ze={value:0},Be=`
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
#include <shadowmask_pars_fragment>`)}var Ge=`col *= mix(1.0, getShadowMask(), uVecShadow);`;function Ke(e,{color:t,id:n,windowGlow:r,winColors:i=[`#ffb852`,`#8cd9ff`],litFrac:a=.55}={}){let o=[0,1,2].map(e=>new N(i[e]??i[i.length-1]));return e.customProgramCacheKey=()=>`lgr-vec-tower`,e.onBeforeCompile=e=>{Ve(e),e.uniforms.uWindowGlow=r,e.uniforms.uWinId={value:n},e.uniforms.uVecColor={value:new N(t)},e.uniforms.uWinA={value:o[0]},e.uniforms.uWinB={value:o[1]},e.uniforms.uWinC={value:o[2]},e.uniforms.uWinLit={value:a},e.vertexShader=Ue(e.vertexShader),e.fragmentShader=He(We(e.fragmentShader.replace(`#include <common>`,`#include <common>
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
          ${Ge}                                  // the sun's shadow darkens the body
          vec3 wcol; vec2 w = winTerms(wcol);
          vec3 glass = vec3(0.17, 0.23, 0.34);          // dark glass-blue panes (day)
          col = mix(col, glass, w.x * 0.85);
          col += w.x * w.y * wcol * uWindowGlow * 2.2;  // …windows EMIT (unshadowed) at night — L93: brighter ignite
          gl_FragColor = vec4(col, diffuseColor.a);
        }`)))},e}function Z(e,{color:t=null,glow:n=null,glowDay:r=0,glowNight:i=1,windowGlow:a=null,season:o=!1}={}){let s=t===null,c=n!==null&&a!==null;return e.customProgramCacheKey=()=>`lgr-vec|`+(s?`d`:`c`)+(c?`g`:``)+(o?`s`:``),e.onBeforeCompile=e=>{Ve(e),s||(e.uniforms.uVecColor={value:new N(t)}),c&&(e.uniforms.uGlow={value:new N(n)},e.uniforms.uGlowDay={value:r},e.uniforms.uGlowNight={value:i},e.uniforms.uWindowGlow=a),o&&(e.uniforms.uSeason=ze),e.vertexShader=Ue(e.vertexShader);let l=s?`diffuseColor.rgb`:`uVecColor`,u=o?`seasonShift(${l})`:l,d=(s?``:`uniform vec3 uVecColor;
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
        }`)));c&&(p=p.replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>\n  totalEmissiveRadiance += ${f};`)),e.fragmentShader=p},e}var qe={value:0},Je={value:0},Ye={value:0};function Xe(e,{sway:t=!1}={}){return e.customProgramCacheKey=()=>t?`lgr-ao-sway`:`lgr-ao`,e.onBeforeCompile=e=>{e.uniforms.uAoStrength=qe,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
attribute float aAo;
varying float vAo;`+(t?`
uniform float uSwayTime;
uniform float uSwayWind;`:``)).replace(`#include <begin_vertex>`,`#include <begin_vertex>
  vAo = aAo;`+(t?[``,`  // L94 sway: height-weighted drift; instanceMatrix[3].xz = the instance world offset → per-tree phase.`,`  #ifdef USE_INSTANCING`,`    float swPh = instanceMatrix[3].x * 0.7 + instanceMatrix[3].z * 0.6;`,`  #else`,`    float swPh = 0.0;`,`  #endif`,`  float swAmp = max(transformed.y, 0.0) * uSwayWind;`,`  transformed.x += sin(uSwayTime * 1.6 + swPh) * swAmp;`,`  transformed.z += sin(uSwayTime * 1.2 + swPh * 1.3) * swAmp * 0.7;`].join(`
`):``)),t&&(e.uniforms.uSwayTime=Je,e.uniforms.uSwayWind=Ye),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying float vAo;
uniform float uAoStrength;`).replace(`#include <dithering_fragment>`,`#include <dithering_fragment>
  gl_FragColor.rgb *= (1.0 - clamp(vAo, 0.0, 1.0) * uAoStrength);`)},e}function Ze(e){let t=e>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Qe(e){let t=Ze(e);return{next:t,range:(e,n)=>e+(n-e)*t(),int:(e,n)=>e+Math.floor(t()*(n-e+1)),pick:e=>e[Math.floor(t()*e.length)],chance:e=>t()<e}}var $e=new N,et={h:0,s:0,l:0};function tt(e,t){return $e.set(e).getHSL(et),et.l=Math.max(.1,Math.min(.9,et.l*(.78+t.next()*.14))),et.h=(et.h+(t.next()-.5)*.045+1)%1,et.s=Math.min(1,et.s*(.92+t.next()*.26)),$e.setHSL(et.h,et.s,et.l),`#`+$e.getHexString()}var nt=[{key:`manhattan`,name:`Manhattan`,towers:[`#EDE3C8`,`#D9B98A`,`#B5562F`,`#A8C8E8`,`#2E3F5C`],ground:`#7CC455`,street:`#9AA0A6`,sidewalk:`#C8CCD0`,park:`#5DB347`,water:`#29A8D8`,shopfronts:[`#C04A3A`,`#3A7AC0`,`#C09A2A`],glass:`#7FA8CC`,winColors:[`#ffd27a`,`#9ad6ff`],hMax:4.6,sigma:.36,roofRate:.35,pSplit:.6,nightLit:.55,roofTint:null,coast:{base:.55,out:1,in:.6,jag:1.05},landmarks:[`empireState`,`chrysler`,`liberty`]},{key:`paris`,name:`Paris`,towers:[`#E8DCC0`,`#F2EAD6`,`#E0D2B4`],ground:`#8CC46A`,street:`#A8A29A`,sidewalk:`#D4CEC2`,park:`#6DB35A`,water:`#3FA8C8`,shopfronts:[`#C04A3A`,`#3A6B5A`,`#7A5AC0`],glass:`#5A6B7A`,winColors:[`#ffdca0`,`#ffcaa0`],hMax:1.5,sigma:.9,roofRate:.15,pSplit:.75,nightLit:.45,roofTint:`#6A7886`,coast:{base:1.05,out:.55,in:.3,jag:.5},landmarks:[`eiffel`,`arcDeTriomphe`,`sacreCoeur`]},{key:`neoTokyo`,name:`Neo-Tokyo`,towers:[`#2A3038`,`#3A4250`,`#252B36`,`#4A4456`],ground:`#3A4A42`,street:`#5A6068`,sidewalk:`#7A8088`,park:`#2E5E46`,water:`#0E6878`,shopfronts:[`#E8483A`,`#5AE8E0`,`#E85AA0`],glass:`#5AE8E0`,winColors:[`#5AE8E0`,`#E85AA0`,`#E8E06A`],hMax:5.2,sigma:.42,roofRate:.6,pSplit:.6,nightLit:.7,roofTint:null,coast:{base:.7,out:1.05,in:.62,jag:1.7},landmarks:[`tokyoTower`,`pagoda`,`neonBillboard`]}],rt=nt.map(e=>e.key),it=.3,at=1.9,ot=.55,st=2.45,ct=.12,lt=.6,ut=6,dt={BASE:.7,OUT:.95,IN:.55,JAG:1,SAMPLES_PER_EDGE:28,HARBOR_DEPTH:.55,HARBOR_WIDTH:.26},ft={PLINTH_TOP:it,BLOCK:at,STREET:ot,PITCH:st,SIDEWALK:ct,SHORE:lt,N:ut,COAST:dt};function pt(e,t,n){let r=n?.base??dt.BASE,i=n?.out??dt.OUT,a=n?.in??dt.IN,o=n?.jag??dt.JAG,s=t+r,c=Qe((e^789079)>>>0),l=[2,3,5,8,11,13].map(e=>({k:e,amp:1/e*o**((e-2)/6),phase:c.range(0,Math.PI*2)})),u=l.reduce((e,t)=>e+t.amp,0),d=e=>{let t=0;for(let n of l)t+=n.amp*Math.sin(n.k*e*Math.PI*2+n.phase);return Math.max(-1,Math.min(1,t/(u*.6)))},f=[{fix:+s,nx:1,nz:0,sign:1},{fix:+s,nx:0,nz:1,sign:-1},{fix:-s,nx:-1,nz:0,sign:-1},{fix:-s,nx:0,nz:-1,sign:1}],p=t+.22,m=dt.SAMPLES_PER_EDGE,h=4*m,g=[],_=0;for(let e=0;e<4;e++){let t=f[e];for(let n=0;n<m;n++,_++){let o=n/m,c=_/h,l=(-s+2*s*o)*t.sign,u=d(c),f=u>=0?u*i:u*a;if(e===0){let e=Math.abs(o-.5);if(e<dt.HARBOR_WIDTH){let t=.5+.5*Math.cos(e/dt.HARBOR_WIDTH*Math.PI);f-=(r+dt.HARBOR_DEPTH)*t}}let v,y;t.nx===0?(y=t.fix+t.nz*f,v=l,y=t.nz>0?Math.max(y,p):Math.min(y,-p)):(v=t.fix+t.nx*f,y=l,v=t.nx>0?Math.max(v,p):Math.min(v,-p)),g.push(new K(v,y))}}return{points:g,B:s,maxR:s+i,harborX:p}}function mt(e){(Array.isArray(e)?e:[e]).forEach(e=>e&&e.dispose&&e.dispose())}function ht({seed:t=1,profileIndex:n=0,landmarkFactory:r=null,windowGlow:i}){let o=new p,s=new p,c=new p;s.raycast=()=>{},c.raycast=()=>{},o.add(s,c);let l=new pe(16773594,3);l.position.set(.45,.6,-.65).multiplyScalar(10);let u=new e(7313331,2762272,1);o.add(l,u);let d=0,f=[],m={seed:t,profileIndex:n,profile:nt[n],extent:0,meshCount:0};function h(e,t,n,r){let i=new v(new z(e,.04,t),Z(new a({color:r,roughness:.95,flatShading:!0}),{color:r}));return i.position.y=n,i.userData.ground=!0,i}function g(e,t){for(let e of s.children)e.geometry&&e.geometry.dispose(),mt(e.material);s.clear();for(let e of c.children)e.traverse(e=>{e.isMesh&&mt(e.material)});c.clear(),f.length=0,d=0;let n=Qe(e),i=nt[t],o=(ut-1)/2*st,l=7.075;m={seed:e,profileIndex:t,profile:i,extent:l+(i.coast?.base??dt.BASE),meshCount:0};let u=pt(e,l,i.coast);m.coast=u;let p=new fe;u.points.forEach((e,t)=>t?p.lineTo(e.x,e.y):p.moveTo(e.x,e.y)),p.closePath();let g=new v(new W(p,{depth:2,bevelEnabled:!1,steps:1}),Z(new a({color:i.ground,roughness:.9,flatShading:!0,side:2}),{color:i.ground}));g.rotation.x=-Math.PI/2,g.position.y=it-2,g.userData.ground=!0,s.add(g);let b=2*7.195;s.add(h(b,b,.32,i.street)),S(u.harborX,i);let w=[];for(let e=0;e<ut;e++)for(let t=0;t<ut;t++)w.push([e,t]);let T=new Set,E=Math.max(1,Math.round(w.length*.08));for(;T.size<E;)T.add(n.int(0,w.length-1));let D=n.range(-2.45*.6,st*.6),O=n.range(-2.45*.6,st*.6),k=Math.hypot(o,o),A=[];if(w.forEach(([e,t],r)=>{let a=(e-(ut-1)/2)*st,o=(t-(ut-1)/2)*st;if(s.add(h(at,at,.32999999999999996,i.sidewalk).translateX(a).translateZ(o)),T.has(r)){s.add(h(at-ct*2,at-ct*2,.35,i.park).translateX(a).translateZ(o));let e=n.int(3,5);for(let t=0;t<e;t++)C(a+n.range(-.6,.6),o+n.range(-.6,.6),i,n);return}let c=at-ct*2,l=n.chance(i.pSplit)?2:1,u=n.chance(i.pSplit)?2:1,d=c/l,f=c/u;for(let e=0;e<l;e++)for(let t=0;t<u;t++){let r=a-c/2+d*(e+.5),s=o-c/2+f*(t+.5),l=Math.max(.6,d-.1),u=Math.max(.6,f-.1),p=Math.hypot(r-D,s-O)/k,m=Math.exp(-(p*p)/(2*i.sigma*i.sigma)),h=Math.max(.5,.5+(i.hMax-.5)*m*n.range(.75,1.25));h>i.hMax*.5&&Math.min(l,u)>=.7&&A.push({lx:r,lz:s,fw:l,fd:u,h,r:p}),_(r,s,l,u,h,i,n)}}),r&&r.ready){A.sort((e,t)=>e.r-t.r);let e=[],t=i.landmarks;for(let n=0;n<t.length&&A.length;n++){let a=null;for(let t of A)if(e.every(e=>Math.hypot(e.lx-t.lx,e.lz-t.lz)>st*.9)){a=t;break}a||=A[0],e.push(a),y(a.lx,a.lz);let o=i.hMax*r.heightFactor(t[n]),s=r.make(t[n],{x:a.lx,z:a.lz,w:a.fw,d:a.fd,h:o,plinthTop:it});if(s){c.add(s);let e=new se().setFromObject(s);x(e.min.x-.15,e.max.x+.15,e.min.z-.15,e.max.z+.15)}}}s.traverse(e=>{e.isMesh&&(e.userData.ground?(e.castShadow=!1,e.receiveShadow=!0):e.material&&e.material.isMeshBasicMaterial?(e.castShadow=!1,e.receiveShadow=!1):(e.castShadow=!0,e.receiveShadow=!0))}),c.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),m.meshCount=s.children.length+c.children.length;let j=0;for(let e of s.children){let t=e.position;j=(Math.imul(j,16777619)^(Math.round(t.x*100)*2654435761^Math.round(t.y*100)*40503^Math.round(t.z*100)*2246822519))>>>0}for(let e of m.coast.points)j=(Math.imul(j,16777619)^(Math.round(e.x*100)*2654435761^Math.round(e.y*100)*40503))>>>0;m.sig=j,window.__city={seed:e,profile:i.key,meshes:m.meshCount,sig:j}}function _(e,t,n,r,o,c,l){let u=Ke(new a({flatShading:!0,roughness:.7,metalness:.05,envMapIntensity:.3}),{color:tt(l.pick(c.towers),l),id:++d,windowGlow:i,winColors:c.winColors,litFrac:c.nightLit}),p=new v(new z(n,o,r),u);if(p.position.set(e,it+o/2,t),p.userData.lot=[e,t],s.add(p),c.roofTint){let i=Z(new a({color:c.roofTint,roughness:.85,flatShading:!0}),{color:c.roofTint}),l=new v(new z(n*1.02,.08,r*1.02),i);l.position.set(e,it+o+.04,t),l.userData.lot=[e,t],s.add(l)}if(o<1.4){let i=l.pick(c.shopfronts),o=new v(new z(n*1.04,.18,r*1.04),Z(new a({color:i,roughness:.8,flatShading:!0}),{color:i}));o.position.set(e,.39,t),o.userData.lot=[e,t],s.add(o)}let m=it+o,h=n,g=r;if(o>c.hMax*.5&&l.chance(.55)){let u=n*l.range(.5,.72),f=r*l.range(.5,.72),p=o*l.range(.18,.4),_=new v(new z(u,p,f),Ke(new a({flatShading:!0,roughness:.7,metalness:.05,envMapIntensity:.3}),{color:tt(l.pick(c.towers),l),id:++d,windowGlow:i,winColors:c.winColors,litFrac:c.nightLit}));_.position.set(e,it+o+p/2,t),_.userData.lot=[e,t],s.add(_),m=it+o+p,h=u,g=f}if(o>c.hMax*.45&&l.chance(c.roofRate)){let n=l.chance(.5)?new v(new z(h*.4,.18,g*.4),Z(new a({color:`#9a9a9a`,flatShading:!0}),{color:`#9a9a9a`})):new v(new U(h*.18,h*.18,.22,10),Z(new a({color:`#b9bec4`,flatShading:!0}),{color:`#b9bec4`}));if(n.position.set(e+l.range(-.1,.1),m+.11,t+l.range(-.1,.1)),n.userData.lot=[e,t],s.add(n),l.chance(.25)){let n=new v(new M(.05,6,5),new b({color:`#ff3b30`,transparent:!0,opacity:1}));n.position.set(e,m+.15,t),n.userData.lot=[e,t],n.raycast=()=>{},s.add(n),f.push({mesh:n,phase:l.range(0,6.28)})}}if(o>c.hMax*.7&&l.chance(.35)){let n=o*l.range(.18,.34),r=new v(new U(.018,.05,n,6),Z(new a({color:`#c8ccd2`,flatShading:!0}),{color:`#c8ccd2`}));r.position.set(e,m+n/2,t),r.userData.lot=[e,t],r.raycast=()=>{},s.add(r)}}function y(e,t){for(let n=s.children.length-1;n>=0;n--){let r=s.children[n];r.userData.lot&&Math.abs(r.userData.lot[0]-e)<1e-4&&Math.abs(r.userData.lot[1]-t)<1e-4&&(r.geometry&&r.geometry.dispose(),mt(r.material),s.remove(r))}for(let e=f.length-1;e>=0;e--)f[e].mesh.parent||f.splice(e,1)}function x(e,t,n,r){for(let i=s.children.length-1;i>=0;i--){let a=s.children[i];a.userData.lot&&a.position.x>=e&&a.position.x<=t&&a.position.z>=n&&a.position.z<=r&&(a.geometry&&a.geometry.dispose(),mt(a.material),s.remove(a))}}function S(e,t){let n=Z(new a({color:`#7a5634`,roughness:.95,flatShading:!0}),{color:`#7a5634`}),r=(e,t,r,i)=>{let a=new v(new z(e,.06,t),n);a.position.set(r,it-.16,i),s.add(a)};r(.24,2,e+.02,0),r(1.3,.22,e+.7,-.72),r(1.3,.22,e+.7,.72)}function C(e,t,n,r){let i=new N(n.park),o=(n,o)=>{let c=i.clone().offsetHSL(0,0,r.range(-.06,.06)).getStyle(),l=new v(new M(n,7,6),Z(new a({color:c,flatShading:!0}),{color:c,season:!0}));l.scale.y=.7,l.position.set(e,it+o,t),l.userData.lot=null,s.add(l)},c=new v(new z(.05,.18,.05),Z(new a({color:`#6b4a2a`,flatShading:!0}),{color:`#6b4a2a`}));c.position.set(e,.39,t),s.add(c),o(.22,.28),o(.16,.46)}function w(e){for(let t of f)t.mesh.material.opacity=.35+.65*(.5+.5*Math.sin(e*3+t.phase))}return g(t,n),{group:o,key:l,fill:u,update:w,generate:g,get state(){return m},get extent(){return m.extent},get waterColor(){return m.profile.water},profiles:nt}}var gt=Math.PI*2,_t=.7,vt=90,yt=[{name:`night`,sun:`#4a6f9e`,intensity:.35,hemiSky:`#26344f`,hemiGround:`#0c1018`,horizon:`#1e2942`,sky:`#36486e`,exposure:.95,outline:`#101a30`,window:1,toonGain:2.6,turbidity:3,rayleigh:1,mie:.004,mieG:.75,gradeTint:`#cfd8ec`,gradeSat:.84,gradeLift:`#05070e`,gradeContrast:1},{name:`dawn`,sun:`#ff9e54`,intensity:2.4,hemiSky:`#8a7686`,hemiGround:`#2a1f1a`,horizon:`#b8512c`,sky:`#ffb070`,exposure:1.05,outline:`#241826`,window:.3,toonGain:2,turbidity:6,rayleigh:3,mie:.025,mieG:.86,gradeTint:`#ffe6cf`,gradeSat:1.05,gradeLift:`#0a0603`,gradeContrast:1.04},{name:`noon`,sun:`#fff4e0`,intensity:4.6,hemiSky:`#9cb8cc`,hemiGround:`#33302a`,horizon:`#5e7689`,sky:`#aacadd`,exposure:1.18,outline:`#0b0a08`,window:0,toonGain:1.7,turbidity:1.6,rayleigh:2.9,mie:.005,mieG:.78,gradeTint:`#d6e6f4`,gradeSat:1.34,gradeLift:`#000000`,gradeContrast:1.26},{name:`dusk`,sun:`#ff6b35`,intensity:2,hemiSky:`#7a566a`,hemiGround:`#281a18`,horizon:`#b0432a`,sky:`#ff8a5a`,exposure:1.05,outline:`#1f1420`,window:.72,toonGain:2,turbidity:7,rayleigh:3.2,mie:.028,mieG:.87,gradeTint:`#ffdcc0`,gradeSat:1.06,gradeLift:`#0c0604`,gradeContrast:1.05}],bt=e=>e-Math.floor(e),xt=(e,t,n)=>e+(t-e)*n,St=(e,t,n)=>e+(t-e)*(1-Math.exp(-6*n));function Ct({t:e=.5}={}){let t=e,n=e,r=!1,i=!1,a=yt.map(e=>({name:e.name,sun:new N(e.sun),hemiSky:new N(e.hemiSky),hemiGround:new N(e.hemiGround),horizon:new N(e.horizon),sky:new N(e.sky),outline:new N(e.outline),intensity:e.intensity,exposure:e.exposure,window:e.window,toonGain:e.toonGain,turbidity:e.turbidity,rayleigh:e.rayleigh,mie:e.mie,mieG:e.mieG,gradeTint:new N(e.gradeTint),gradeLift:new N(e.gradeLift),gradeSat:e.gradeSat,gradeContrast:e.gradeContrast})),o=new E(0,1,0),s=new N(`#fff4e0`),c=new N(`#6f97b3`),l=new N(`#2a2620`),u=new N(`#3a4a57`),d=new N(`#7da3bd`),f=new N(`#0b0a08`),p=new N(`#000000`),m=3,h=1,g=0,_=1.7,v={turbidity:2.2,rayleigh:1.3,mie:.005,mieG:.78},y={tint:new N(`#fafdff`),lift:new N(`#000000`),sat:1.08,contrast:1},b=new E;function x(e){let t=bt(e)*4,n=Math.floor(t)%4,r=(n+1)%4,i=t-Math.floor(t),x=a[n],S=a[r];s.lerpColors(x.sun,S.sun,i),c.lerpColors(x.hemiSky,S.hemiSky,i),l.lerpColors(x.hemiGround,S.hemiGround,i),u.lerpColors(x.horizon,S.horizon,i),d.lerpColors(x.sky,S.sky,i),f.lerpColors(x.outline,S.outline,i),m=xt(x.intensity,S.intensity,i),h=xt(x.exposure,S.exposure,i),g=xt(x.window,S.window,i),_=xt(x.toonGain,S.toonGain,i),v.turbidity=xt(x.turbidity,S.turbidity,i),v.rayleigh=xt(x.rayleigh,S.rayleigh,i),v.mie=xt(x.mie,S.mie,i),v.mieG=xt(x.mieG,S.mieG,i),y.tint.lerpColors(x.gradeTint,S.gradeTint,i),y.lift.lerpColors(x.gradeLift,S.gradeLift,i),y.sat=xt(x.gradeSat,S.gradeSat,i),y.contrast=xt(x.gradeContrast,S.gradeContrast,i),p.setRGB(.045*g,.075*g,.14*g);let C=bt(e)*gt-Math.PI/2,w=Math.cos(C),T=Math.sin(C);b.set(w,T*Math.cos(_t),T*Math.sin(_t)),b.y>=0?o.copy(b):o.copy(b).negate()}return x(t),{sunDir:o,sunColor:s,hemiSky:c,hemiGround:l,horizon:u,sky:d,outline:f,toonFloor:p,skyParams:v,grade:y,sunArc:b,get sunIntensity(){return m},get exposure(){return h},get windowGlow(){return g},get toonGain(){return _},get t(){return bt(t)},get auto(){return r},get clock(){let e=Math.round(bt(t)*24*60)%1440;return`${String(Math.floor(e/60)).padStart(2,`0`)}:${String(e%60).padStart(2,`0`)}`},cyclePreset(){n=(Math.floor(t*4+1e-4)+1)/4},nudge(e){n+=e/24},goTo(e){n=e},toggleAuto(){r=!r},setReducedMotion(e){i=e},update(e){r&&!i&&(n+=e/vt),t=St(t,n,e),x(t)}}}function wt(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.35,`rgba(255,255,255,0.55)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new H(e);return r.colorSpace=B,r}function Tt(e,t){let n=[];for(let r=0;r<16;r++){let i=r/16*Math.PI*2;n.push(new E(Math.cos(i)*e,t,Math.sin(i)*e))}return new ee(n,!0,`catmullrom`,.5)}function Et(e){let n=(t,n)=>Math.exp(-((e-t)*(e-t))/(2*n*n)),r=Math.max(n(.33,.05),n(.75,.06)),i=t.smoothstep(e,.24,.3)*(1-t.smoothstep(e,.8,.88));return t.clamp(.15+.55*i+.45*r,.12,1)}function Dt(){let{PITCH:e,N:t,PLINTH_TOP:n}=ft,r=t+1,i=n+.04,a=n=>(n-t/2)*e,o=t/2,s=[],c=(e,t)=>t*r+e;for(let e=0;e<r;e++)for(let t=0;t<r;t++)s.push({x:a(t),z:a(e),i:t,j:e,edges:[]});let l=[],u=(t,n)=>{let r=(s[t].i===o||s[t].j===o)&&(s[n].i===o||s[n].j===o),i=l.length;l.push({a:t,b:n,len:e,main:r}),s[t].edges.push(i),s[n].edges.push(i)};for(let e=0;e<r;e++)for(let t=0;t<r;t++)t<r-1&&u(c(t,e),c(t+1,e)),e<r-1&&u(c(t,e),c(t,e+1));return{nodes:s,edges:l,y:i,mid:o}}function Ot({plinthTop:e=.3,extent:n=4,profile:r=null}={}){let i=new p,o=Dt(),{nodes:s,edges:c}=o,l=o.y,u=.34,d=0;{let e=ft.PITCH-u*2;d=Math.max(1,Math.floor((e+.26)/.56))}let m=new b({color:`#e8c84a`,fog:!0}),h=new f(new z(.05,.012,.3),m,c.length*d);h.frustumCulled=!1,h.raycast=()=>{},h.receiveShadow=!1,h.castShadow=!1,i.add(h);{let e=new R,t=0;for(let n of c){let r=s[n.a],i=s[n.b],a=i.x-r.x,o=i.z-r.z,c=Math.hypot(a,o),f=a/c,p=o/c,m=Math.atan2(f,p),g=c-u*2;for(let n=0;n<d;n++){let i=u+(d===1?g/2:g*n/(d-1));e.position.set(r.x+f*i,l,r.z+p*i),e.rotation.set(0,m,0),e.updateMatrix(),h.setMatrixAt(t++,e.matrix)}}h.instanceMatrix.needsUpdate=!0}let g=new f(new z(.34,.26,.74),Z(new a({flatShading:!0,roughness:.5,metalness:.3})),12);g.castShadow=!0,g.receiveShadow=!1,g.frustumCulled=!1,g.raycast=()=>{};let _=new ne,v=new Float32Array(72),y=new Float32Array(72),x=new N(`#fff0c0`),S=new N(`#ff3528`);for(let e=0;e<12;e++)x.toArray(y,e*3),S.toArray(y,(12+e)*3),v[e*3+1]=-50,v[(12+e)*3+1]=-50;_.setAttribute(`position`,new D(v,3)),_.setAttribute(`color`,new D(y,3));let C=new V({size:.72,sizeAttenuation:!0,map:wt(),vertexColors:!0,transparent:!0,opacity:0,blending:2,depthWrite:!1}),w=new j(_,C);w.frustumCulled=!1,w.raycast=()=>{},i.add(g,w);let T=[`#f4c430`,`#c0392b`,`#d8dde2`,`#9aa7b4`,`#6b7785`,`#5a7d9a`],O=Ze(2403557),A=c.map((e,t)=>t).filter(e=>c[e].main),ee=[];for(let e=0;e<12;e++){let t=e<4&&A.length?A[O()*A.length|0]:O()*c.length|0,n=e===1;ee.push({edge:t,fwd:O()<.5,s:O()*c[t].len,speed:n?.5:.78+e%3*.1,lenZ:n?1.45:1,color:T[n?1:e===0?0:2+e%4],rng:Ze(12648430+e*2654435761),isBus:n,pos:new E,dirX:0,dirZ:1,active:!1})}let M=new N;ee.forEach((e,t)=>g.setColorAt(t,M.set(e.color)));function P(e,t,n){let r=s[e],i=r.edges.filter(e=>e!==t);if(i.length===0)return t;let a=c[t],o=a.a===e?a.b:a.a,l=r.x-s[o].x,u=r.z-s[o].z,d=Math.hypot(l,u)||1,f=i[0],p=-2;for(let t of i){let n=c[t],i=n.a===e?n.b:n.a,a=s[i].x-r.x,o=s[i].z-r.z,m=Math.hypot(a,o)||1,h=l/d*(a/m)+u/d*(o/m);h>p&&(p=h,f=t)}return n()<.65?f:i[n()*i.length|0]}let te=P,F=new R,I=(e,t)=>{F.position.set(0,-50,0),F.scale.setScalar(0),F.updateMatrix(),e.setMatrixAt(t,F.matrix)},re=.085,ie=ft.PLINTH_TOP+.02+.13,L=new f(new k(.04,.1,3,6),Z(new a({flatShading:!0,roughness:.8})),14);L.castShadow=!0,L.receiveShadow=!1,L.frustumCulled=!1,L.raycast=()=>{};let ae=Tt(n-.72,e),oe=[];for(let e=0;e<14;e++)oe.push({phase:e/14,speed:.12+e%4*.02,dir:e%2?1:-1,pos:new E,active:!1});let se=new E,ce=new E,le=new N;oe.forEach((e,t)=>L.setColorAt(t,le.set([`#caa`,`#9ab`,`#bba`,`#ab9`][t%4]))),i.add(L);let ue={manhattan:`#e8c84a`,paris:`#dcd2bc`,neoTokyo:`#5ae8e0`};function B(e){e&&m.color.set(ue[e.key]||`#e8c84a`)}B(r);function de(n,r,i){let a=i?i.t:.5,o=i?i.windowGlow:0,l=Math.max(2,Math.round(Et(a)*12)),u=o>.05;for(let e=0;e<12;e++){if(e>=l){I(g,e),ee[e].active=!1,v[e*3+1]=-50,v[(12+e)*3+1]=-50;continue}let t=ee[e];t.s+=n*t.speed;let r=0;for(;t.s>=c[t.edge].len&&r++<4;){t.s-=c[t.edge].len;let e=t.fwd?c[t.edge].b:c[t.edge].a,n=te(e,t.edge,t.rng);t.edge=n,t.fwd=c[n].a===e}let i=c[t.edge],a=t.fwd?s[i.a]:s[i.b],o=t.fwd?s[i.b]:s[i.a],d=o.x-a.x,f=o.z-a.z,p=Math.hypot(d,f)||1,m=d/p,h=f/p,_=-h,y=m,b=a.x+m*t.s+_*re,x=a.z+h*t.s+y*re,S=Math.atan2(m,h);F.position.set(b,ie,x),F.rotation.set(0,S,0),F.scale.set(1,1,t.lenZ),F.updateMatrix(),g.setMatrixAt(e,F.matrix),t.pos.set(b,ie,x),t.dirX=m,t.dirZ=h,t.active=!0;let C=.74*t.lenZ*.5,w=ie+.06,T=e*3,E=(12+e)*3;u?(v[T]=b+m*(C+.04),v[T+1]=w,v[T+2]=x+h*(C+.04),v[E]=b-m*(C+.02),v[E+1]=w,v[E+2]=x-h*(C+.02)):(v[T+1]=-50,v[E+1]=-50)}g.instanceMatrix.needsUpdate=!0,_.attributes.position.needsUpdate=!0,C.opacity=t.clamp(o*1.8,0,1);let d=Math.max(2,Math.round(Et(a)*14));for(let t=0;t<14;t++){if(t>=d){I(L,t),oe[t].active=!1;continue}let n=oe[t],i=(n.phase+n.dir*n.speed*r*.02+1e3)%1;ae.getPointAt(i,se),ae.getTangentAt(i,ce);let a=Math.sin(r*6+n.phase*30)*.015;F.position.set(se.x,e+.09+a,se.z),F.rotation.set(0,Math.atan2(ce.x*n.dir,ce.z*n.dir),Math.sin(r*6+n.phase*30)*.06),F.scale.setScalar(1),F.updateMatrix(),L.setMatrixAt(t,F.matrix),n.pos.set(se.x,e+.09,se.z),n.active=!0}L.instanceMatrix.needsUpdate=!0}let H=[...ee.map((e,t)=>({kind:`car`,label:e.isBus?`bus`:`car ${t+1}`,getWorldPos:t=>t.copy(e.pos),active:()=>e.active,info:()=>`${e.isBus?`bus`:`car`} · ${c[e.edge].main?`main avenue`:`side street`} → heading ${kt(e.dirX,e.dirZ)}`})),...oe.map((e,t)=>({kind:`person`,label:`person ${t+1}`,getWorldPos:t=>t.copy(e.pos),active:()=>e.active,info:()=>`person · strolling the waterfront promenade`}))];function fe(){return H}return{group:i,update:de,setProfile:B,getFollowables:fe,graph:o,setRouter(e){te=e||P}}}function kt(e,t){return[`N`,`NE`,`E`,`SE`,`S`,`SW`,`W`,`NW`][(Math.round(Math.atan2(e,t)/(Math.PI/4))%8+8)%8]}function At({frames:e,fps:t=8,cols:n,rows:r=1}={}){let i=n||e||4,a=r||1,o=e||i*a,s=typeof window<`u`&&window.matchMedia?window.matchMedia(`(prefers-reduced-motion: reduce)`):null;function c(e,t){let n=t%i,r=Math.floor(t/i);e.offset.x=n/i,e.offset.y=1-(r+1)/a}function l(e){let t=e.clone();return t.needsUpdate=!0,t.repeat.set(1/i,1/a),c(t,0),t}function u(e,n,r=0){if(s&&s.matches)return c(e,0),0;let i=(Math.floor(n*t+r)%o+o)%o;return c(e,i),i}function d(e,t){let n=(Math.round(t)%o+o)%o;return c(e,n),n}return{frames:o,fps:t,cols:i,rows:a,makeInstanceTexture:l,step:u,setFrame:d}}function jt(e){if(typeof document>`u`||!e||!e.image)return e;let t=e.image,n=t.width||t.naturalWidth,r=t.height||t.naturalHeight,i=document.createElement(`canvas`);i.width=n,i.height=r;let a=i.getContext(`2d`,{willReadFrequently:!0});a.drawImage(t,0,0,n,r);let o=a.getImageData(0,0,n,r),s=o.data;for(let e=0;e<s.length;e+=4){let t=s[e]*.299+s[e+1]*.587+s[e+2]*.114|0;s[e]=s[e+1]=s[e+2]=t}a.putImageData(o,0,0);let c=new H(i);return c.colorSpace=e.colorSpace||`srgb`,c}function Mt({url:e,fallback:t,luminance:n=!1,onReady:r}={}){let i=n?jt(t):t;return e&&typeof window<`u`&&new w().load(e,e=>{e.colorSpace=B,r&&r(n?jt(e):e)},void 0,()=>{}),i}var Nt=``+new URL(`gull_diffusion_sheet-BMlUTLhu.png`,import.meta.url).href;function Pt(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.4,`rgba(255,255,255,0.5)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new H(e);return r.colorSpace=B,r}function Ft(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64*.62,0,64/2,64*.62,64*.5);n.addColorStop(0,`rgba(240,250,255,0.95)`),n.addColorStop(1,`rgba(240,250,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new H(e);return r.colorSpace=B,r}function It(){let e=document.createElement(`canvas`);e.width=256,e.height=64;let t=e.getContext(`2d`);t.strokeStyle=`#ffffff`,t.lineWidth=6,t.lineCap=`round`,t.lineJoin=`round`;let n=[14,24,36,24];for(let e=0;e<4;e++){let r=e*64,i=n[e];t.beginPath(),t.moveTo(r+8,40),t.quadraticCurveTo(r+24,i,r+32,36),t.quadraticCurveTo(r+40,i,r+56,40),t.stroke()}let r=new H(e);return r.colorSpace=B,r}function Lt(e,t,n=18){let r=[];for(let i=0;i<n;i++){let a=i/n*Math.PI*2;r.push(new E(Math.cos(a)*e,t,Math.sin(a)*e))}return new ee(r,!0,`catmullrom`,.5)}function Rt(e,t,n){let r=e-t,i=[],a=(e,t)=>i.push(new E(e,n,t)),o=(e,n,r,i,o=4)=>{for(let s=1;s<=o;s++){let c=r+(i-r)*(s/o);a(e+Math.cos(c)*t,n+Math.sin(c)*t)}};for(let t=0;t<4;t++)a(e,-r+2*r*t/4);o(r,r,0,Math.PI/2);for(let t=0;t<4;t++)a(r-2*r*t/4,e);o(-r,r,Math.PI/2,Math.PI);for(let t=0;t<4;t++)a(-e,r-2*r*t/4);o(-r,-r,Math.PI,1.5*Math.PI);for(let t=0;t<4;t++)a(-r+2*r*t/4,-e);return o(r,-r,1.5*Math.PI,2*Math.PI),new ee(i,!0,`catmullrom`,.5)}function zt({extent:e=8,waterSize:n=28,plinthTop:r=.3}={}){let i=new p;i.raycast=()=>{};let o=.06,s=(e,t,r)=>r.set(e/n+.5,-t/n+.5,0),c=[Rt(9.5,3,o),Lt(12.7,o),new ee([new E(8.4,o,0),new E(11,o,-3.6),new E(13,o,0),new E(11,o,3.6)],!0,`catmullrom`,.5)],l=c.map(e=>e.getLength());function u({scale:e=1,hull:t=`#6b7785`,cabin:n=`#e7ecf2`}){let r=new p,i=new v(new z(.46*e,.2*e,1.1*e),Z(new a({color:t,roughness:.6,metalness:.2,flatShading:!0}),{color:t}));i.position.y=.02;let o=new v(new z(.3*e,.22*e,.42*e),Z(new a({color:n,roughness:.7,flatShading:!0}),{color:n}));return o.position.set(0,.18*e,.08*e),r.add(i,o),r.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!1),e.raycast=()=>{}}),r.userData.halfLen=.55*e,r}let d=[{laneIndex:0,dir:1,speed:.5,wake:.024,scale:1,hull:`#5a6675`,cabin:`#e7ecf2`},{laneIndex:1,dir:-1,speed:.42,wake:.022,scale:1,hull:`#7a5b46`,cabin:`#d9c3a6`},{laneIndex:0,dir:1,speed:.56,wake:.024,scale:.9,hull:`#456079`,cabin:`#cfe0ee`},{laneIndex:2,dir:1,speed:.34,wake:.03,scale:1.35,hull:`#39505f`,cabin:`#e2b85a`}];d.forEach((e,t)=>{e.mesh=u(e),e.u=t*.27%1,e.phase=t*1.7,e.isFerry=e.laneIndex===2,i.add(e.mesh)});let f=d.length,m=f*2,h=new ne,g=new Float32Array(m*3).fill(-50),_=new Float32Array(m*3),y=new N(`#fff0c0`),b=new N(`#ff3528`);for(let e=0;e<f;e++)y.toArray(_,e*3),b.toArray(_,(f+e)*3);h.setAttribute(`position`,new D(g,3)),h.setAttribute(`color`,new D(_,3));let x=new j(h,new V({size:.6,sizeAttenuation:!0,map:Pt(),vertexColors:!0,transparent:!0,opacity:0,blending:2,depthWrite:!1}));x.frustumCulled=!1,x.raycast=()=>{},i.add(x);function S(e,t){let n=new v(new M(e,9,7),Z(new a({color:t,roughness:.5,flatShading:!0}),{color:t}));return n.scale.set(.55,.5,1),n.castShadow=!1,n.receiveShadow=!1,n.raycast=()=>{},n.position.y=-5,n}let C=[{x:-9.5,z:6,size:.18,color:`#5b6f86`,period:11,arcH:.55,span:1.1,whale:!1},{x:7.5,z:-9.5,size:.16,color:`#4a6076`,period:14,arcH:.5,span:1,whale:!1},{x:-7,z:-8.5,size:.2,color:`#607089`,period:9,arcH:.6,span:1.2,whale:!1},{x:10.5,z:7,size:.62,color:`#3a4350`,period:38,arcH:.9,span:2.6,whale:!0}];C.forEach((e,t)=>{e.mesh=S(e.size,e.color),e.heading=Math.atan2(-e.x,-e.z),e.t=t/C.length*e.period,e.splashed=!1,i.add(e.mesh),e.whale&&(e.spout=new L(new P({map:Ft(),transparent:!0,opacity:0,depthWrite:!1,fog:!0})),e.spout.scale.set(.6,1.1,1),e.spout.position.set(e.x,-5,e.z),i.add(e.spout))});let w=At({frames:4,fps:7}),T=[`#ffffff`,`#cfd4da`,`#c8a06a`],O=[],k=Mt({url:Nt,fallback:It(),luminance:!0,onReady:e=>{k=e;for(let t of O){let n=t.sp.material.map;t.sp.material.map=w.makeInstanceTexture(e),t.sp.material.needsUpdate=!0,n&&n.dispose()}typeof window<`u`&&(window.__gullSheet=`diffusion`)}});for(let e=0;e<4;e++){let t=new L(new P({map:w.makeInstanceTexture(k),color:new N(T[e%T.length]),transparent:!0,opacity:0,depthWrite:!1,fog:!0}));t.scale.setScalar(.5),O.push({sp:t,r:8.6+e*.5,y:1.1+e%2*.5,speed:(.18+e*.03)*(e%2?-1:1),phase:e*1.9}),i.add(t)}typeof window<`u`&&(window.__gullSheet=window.__gullSheet||`procedural`,window.__gullAnim={frames:w.frames,variants:T.length,fps:w.fps});let A=C.length,te=Array.from({length:f+A},()=>new E),F=e=>e.laneIndex,I=new E,re=new E,ie=new E;function ae(e,n,r){let i=r?r.windowGlow:0,a=1-i;for(let t=0;t<f;t++){let r=d[t],a=c[r.laneIndex],u=l[r.laneIndex],p=r.isFerry?.45+.55*Math.min(1,Math.abs((r.u+.5)%1-.5)*3):1,m=r.u;r.u=(r.u+r.dir*e*r.speed*p/u+1)%1,(r.dir>0?r.u<m:r.u>m)&&(r.laneIndex=F(r)),a.getPointAt(r.u,I),a.getTangentAt(r.u,re);let h=re.x*r.dir,_=re.z*r.dir,v=Math.atan2(h,_),y=Math.sin(n*1.1+r.phase)*.025;r.mesh.position.set(I.x,o+y,I.z),r.mesh.rotation.set(Math.sin(n*.9+r.phase)*.04,v,0);let b=r.mesh.userData.halfLen;s(I.x-h*b,I.z-_*b,ie),te[t].set(ie.x,ie.y,r.wake);let x=t*3,S=(f+t)*3;if(i>.05){let e=.18;g[x]=I.x+h*(b+.05),g[x+1]=e,g[x+2]=I.z+_*(b+.05),g[S]=I.x-h*(b+.02),g[S+1]=e,g[S+2]=I.z-_*(b+.02)}else g[x+1]=-50,g[S+1]=-50}oe(),x.material.opacity=t.clamp(i*1.8,0,1);for(let n=0;n<A;n++){let r=C[n];r.t+=e;let i=f+n,a=r.whale?3.2:1.3;if(r.t>=r.period){let e=(r.t-r.period)/a;if(e>=1){r.t=0,r.splashed=!1,r.mesh.position.y=-5,r.spout&&(r.spout.material.opacity=0),te[i].set(0,0,0);continue}let n=Math.sin(Math.PI*e),c=(e-.5)*r.span,l=r.x+Math.sin(r.heading)*c,u=r.z+Math.cos(r.heading)*c;r.mesh.position.set(l,o-.1+n*r.arcH,u),r.mesh.rotation.set(Math.cos(Math.PI*e)*.9,r.heading,0);let d=e<.16||e>.84;if(s(l,u,ie),te[i].set(ie.x,ie.y,d?r.whale?.07:.05:0),r.spout){let n=t.clamp((e-.15)*3,0,1)*(1-e);r.spout.position.set(l,.56+n*.6,u),r.spout.material.opacity=n*.9}}else r.mesh.position.y=-5,te[i].set(0,0,0),r.spout&&(r.spout.material.opacity=0)}for(let e=0;e<4;e++){let r=O[e],i=r.phase+n*r.speed*.25;r.sp.position.set(Math.cos(i)*r.r,r.y+Math.sin(n*1.4+r.phase)*.12,Math.sin(i)*r.r),r.sp.material.opacity=t.clamp(a*.9-.05,0,.85);let o=w.step(r.sp.material.map,n,r.phase);e===0&&typeof window<`u`&&(window.__gullFrame=o)}if(typeof window<`u`){let e=0;for(let t of C)t.mesh.position.y>o&&e++;window.__waterLife={boats:f,breaching:e,gulls:+O[0].sp.material.opacity.toFixed(2),lights:+x.material.opacity.toFixed(2)}}}function oe(){h.attributes.position.needsUpdate=!0}function se(){return te.length}let ce=[...d.map((e,t)=>({kind:`boat`,label:e.isFerry?`ferry`:`boat ${t+1}`,getWorldPos:t=>t.copy(e.mesh.position),info:()=>e.isFerry?`boat · harbor ferry → docks`:`boat · open-water lane ${e.laneIndex}`})),...O.map((e,t)=>({kind:`gull`,label:`gull ${t+1}`,getWorldPos:t=>t.copy(e.sp.position),active:()=>e.sp.material.opacity>.05,info:()=>`gull · circling the coast`})),...C.map((e,t)=>({kind:`fish`,label:e.whale?`whale`:`fish ${t+1}`,getWorldPos:t=>t.copy(e.mesh.position),active:()=>e.mesh.position.y>o-.3,info:()=>e.mesh.position.y>o?e.whale?`whale · breaching!`:`fish · breaching!`:`fish · below the surface`}))];function R(){return ce}return{group:i,update:ae,getFollowables:R,wakeDrops:te,get wakeCount(){return se()},lanes:c,setRouter(e){F=e||(e=>e.laneIndex)}}}var Bt=[`empireState`,`chrysler`,`liberty`,`eiffel`,`arcDeTriomphe`,`sacreCoeur`,`tokyoTower`,`pagoda`,`neonBillboard`],Vt={empireState:1.25,chrysler:1.1,liberty:.55,eiffel:3.2,arcDeTriomphe:1.5,sacreCoeur:1.75,tokyoTower:1.35,pagoda:.5,neonBillboard:.9};function Ht(e){let t=()=>new a({flatShading:!0,roughness:.7,metalness:.1}),n=(n,r={})=>r.windows?Ke(t(),{color:n,id:e.id(),windowGlow:e.windowGlow,winColors:e.winColors,litFrac:e.litFrac}):Z(t(),{color:n,glow:r.glow??null,glowDay:r.glowDay??0,glowNight:r.glowNight??1,windowGlow:r.glow?e.windowGlow:null});return{box:(e,t,r,i,a={})=>new v(new z(e,t,r),n(i,a)),cyl:(e,t,r,i,a={})=>new v(new U(e,t,r,a.seg||12),n(i,a)),cone:(e,t,r,i={})=>new v(new C(e,t,i.seg||8),n(r,i)),sphere:(e,t,r={})=>new v(new M(e,r.seg||12,r.seg2||8),n(t,r)),lathe:(e,t,r={})=>new v(new m(e.map(e=>new K(e[0],e[1])),r.seg||4),n(t,r))}}var Q=(e,t,n,r)=>(e.position.set(t,n,r),e),Ut=[`#7FB0E0`,`#E07FB0`,`#7FE0A0`,`#E0C97F`,`#9FE07F`,`#7FE0E0`,`#FF8C42`,`#E0E07F`,`#C97FE0`,`#E07F7F`,`#7F9FE0`,`#E0483A`],Wt={empireState(e,t){let n=`#E8E0CF`;e.add(Q(t.box(.42,.18,.42,n,{windows:!0}),0,.09,0)),e.add(Q(t.box(.34,.16,.34,n,{windows:!0}),0,.26,0)),e.add(Q(t.box(.26,.14,.26,n,{windows:!0}),0,.41,0)),e.add(Q(t.box(.19,.34,.19,n,{windows:!0}),0,.65,0)),e.add(Q(t.box(.13,.06,.13,n,{windows:!0}),0,.85,0));let r=Ut[new Date().getMonth()];e.add(Q(t.cyl(.03,.045,.12,n,{seg:10,glow:r,glowNight:1.85}),0,.94,0)),e.add(Q(t.cone(.012,.07,n,{seg:8}),0,1.04,0))},chrysler(e,t){let n=`#C9CED4`;e.add(Q(t.box(.22,.55,.22,`#9AA7B4`,{windows:!0}),0,.275,0));let r=.55;for(let i=0;i<5;i++){let a=.14-i*.024,o=.07;e.add(Q(t.cyl(a*.7,a,o,n,{seg:8,glow:`#dfeaff`,glowNight:.5}),0,r+o/2,0)),r+=o}e.add(Q(t.cone(.018,.16,n,{seg:8}),0,r+.08,0))},liberty(e,t){let n=`#B9B4A6`,r=`#4FA890`;e.add(Q(t.box(.42,.16,.42,n),0,.08,0)),e.add(Q(t.box(.3,.2,.3,n),0,.26,0)),e.add(Q(t.cyl(.1,.15,.42,r,{seg:10}),0,.57,0)),e.add(Q(t.box(.11,.1,.11,r),0,.83,0));for(let n=0;n<7;n++){let i=(n/6-.5)*Math.PI*1.1;e.add(Q(t.cone(.012,.1,r,{seg:5}),Math.sin(i)*.1,.92,Math.cos(i)*.06-.02))}let i=Q(t.cyl(.025,.03,.34,r,{seg:8}),.14,.98,0);i.rotation.z=.35,e.add(i),e.add(Q(t.box(.06,.06,.06,r,{glow:`#ffd060`,glowDay:.6,glowNight:1.2}),.2,1.16,0)),e.add(Q(t.cone(.04,.09,`#ffcf66`,{seg:6,glow:`#ffd060`,glowDay:.7,glowNight:1.3}),.2,1.24,0))},eiffel(e,t){let n=`#6E5C4C`,r=[[.2,0],[.13,.16],[.085,.33],[.055,.5],[.035,.66],[.02,.85],[0,.92]];e.add(t.lathe(r,n,{seg:4}));let i=t.lathe(r,n,{seg:4});i.rotation.y=Math.PI/4,e.add(i),e.add(Q(t.box(.26,.025,.26,n),0,.33,0)),e.add(Q(t.box(.14,.02,.14,n),0,.66,0)),e.add(Q(t.cone(.01,.1,n,{seg:6}),0,.97,0))},arcDeTriomphe(e,t){let n=`#D9D0C1`,r=.58,i=.5,o=.34,s=new fe;s.moveTo(-.58/2,0),s.lineTo(r/2,0),s.lineTo(r/2,i),s.lineTo(-.58/2,i),s.lineTo(-.58/2,0);let c=new S,l=.15,u=.22;c.moveTo(-.15,0),c.lineTo(-.15,u),c.absarc(0,u,l,Math.PI,0,!0),c.lineTo(l,0),c.lineTo(-.15,0),s.holes.push(c);let d=new W(s,{depth:o,bevelEnabled:!1});d.translate(0,0,-.34/2),d.computeVertexNormals(),e.add(new v(d,Z(new a({color:n,flatShading:!0}),{color:n}))),e.add(Q(t.box(r*1.06,.08,o*1.06,n),0,.54,0))},sacreCoeur(e,t){let n=`#F1EEE6`;e.add(Q(t.box(.5,.26,.4,n),0,.13,0));let r=(r,i,a,o)=>{e.add(Q(t.cyl(a*.9,a,i,n,{seg:12}),r,o,0));let s=Q(t.sphere(a,n,{seg:12}),r,o+i/2,0);s.scale.y=1.5,e.add(s)};r(0,.22,.15,.4),r(-.2,.1,.07,.33),r(.2,.1,.07,.33)},tokyoTower(e,t){let n=`#F25822`,r=`#EDEDED`,i=0;for(let a=0;a<9;a++){let o=a/9,s=(a+1)/9,c=.19*(1-o)+.03*o,l=.19*(1-s)+.03*s,u=.085,d=a%2?r:n;e.add(Q(t.cyl(l,c,u,d,{seg:4,glow:n,glowDay:0,glowNight:.7}),0,i+u/2,0)),i+=u}e.add(Q(t.box(.22,.02,.22,n,{glow:n,glowNight:.7}),0,.28,0)),e.add(Q(t.box(.12,.02,.12,r),0,.5,0)),e.add(Q(t.cone(.012,.16,r,{seg:6,glow:`#ff6a2a`,glowNight:.9}),0,i+.08,0))},pagoda(e,t){let n=0;for(let r=0;r<5;r++){let i=.42-r*.06,a=.11;e.add(Q(t.box(i,a,i,`#B23A2C`,{windows:r<4}),0,n+a/2,0)),e.add(Q(t.box(i*1.34,.03,i*1.34,`#7A3B2A`),0,n+a+.015,0)),n+=.16999999999999998}e.add(Q(t.cyl(.012,.012,.1,`#E0C040`,{seg:6}),0,n+.05,0)),e.add(Q(t.sphere(.03,`#E0C040`,{seg:8,glow:`#ffe680`,glowNight:.8}),0,n+.12,0))},neonBillboard(e,t){let n=`#20242C`;e.add(Q(t.box(.3,1,.3,n,{windows:!0}),0,.5,0));let r=[`#5AE8E0`,`#E85AA0`,`#E8E06A`],i=(n,r,i,a,o,s,c)=>{let l=Q(t.box(n,r,.02,i,{glow:i,glowDay:.6,glowNight:1.1}),a,o,s);l.rotation.y=c,e.add(l)};i(.22,.34,r[0],0,.75,.16,0),i(.16,.5,r[1],.16,.5,0,Math.PI/2),i(.2,.22,r[2],0,.34,-.16,0),e.add(Q(t.cone(.01,.14,n,{seg:6,glow:`#E85AA0`,glowDay:.4,glowNight:1}),0,1.08,0))}};function $(e,t){let n=new p;return Wt[e](n,Ht(t)),n}var Gt=``+new URL(`building-skyscraper-d-CapD2Zqe.glb`,import.meta.url).href,Kt=``+new URL(`building-n-hdv8kKtN.glb`,import.meta.url).href,qt=``+new URL(`building-g-CsTB1qH9.glb`,import.meta.url).href,Jt=``+new URL(`colormap-CK8fW2HB.png`,import.meta.url).href,Yt={skyscraper:{url:Gt,color:`#9cc1dd`,fill:.92},midrise:{url:Kt,color:`#c9a07a`,fill:.96},setback:{url:qt,color:`#d9c7a0`,fill:.9}};function Xt({windowGlow:e}){let t=new he;t.setURLModifier(e=>e.includes(`colormap.png`)?Jt:e);let n=new ae(t),r={},i=!1,a=Promise.all(Object.entries(Yt).map(async([e,t])=>{r[e]=(await n.loadAsync(t.url)).scene})).then(()=>{i=!0,window.__landmarksReady=!0}).catch(e=>console.error(`landmark models failed:`,e)),o=9e3;function s(t,n,i={}){let a,s;if(Bt.includes(t))a=$(t,{windowGlow:e,winColors:i.winColors,litFrac:i.litFrac,id:()=>++o}),s=1;else{let e=r[t],n=Yt[t];if(!e||!n)return null;a=e.clone(!0),s=n.fill}a.updateMatrixWorld(!0);let c=new se().setFromObject(a).getSize(new E);a.scale.setScalar(n.h*s/c.y),a.updateMatrixWorld(!0);let l=new se().setFromObject(a),u=l.getCenter(new E);return a.position.x+=n.x-u.x,a.position.z+=n.z-u.z,a.position.y+=n.plinthTop-l.min.y,Bt.includes(t)?a.traverse(e=>{e.isMesh&&(e.castShadow=!1,e.raycast=()=>{})}):a.traverse(n=>{if(!n.isMesh)return;n.castShadow=!1,n.raycast=()=>{};let r=n=>Ke(n.clone(),{color:Yt[t].color,id:++o,windowGlow:e,winColors:i.winColors,litFrac:i.litFrac});n.material=Array.isArray(n.material)?n.material.map(r):r(n.material)}),a}return{make:s,whenReady:a,heightFactor:e=>Vt[e]??1,get ready(){return i}}}var Zt=[`clear`,`rain`,`snow`,`fog`];function Qt({extent:e=7}={}){let t=new p;t.raycast=()=>{};let n=e+2,r=.25,i=(e,t)=>e+Math.random()*(t-e),a=new f(new h(.015,.5),new b({color:`#a9bdd6`,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),600);a.frustumCulled=!1,a.raycast=()=>{};let o=new Float32Array(600*3),s=new Float32Array(600);for(let e=0;e<600;e++)o[e*3]=i(-n,n),o[e*3+1]=i(r,11),o[e*3+2]=i(-n,n),s[e]=i(9,14);let c=new f(new h(.07,.07),new b({color:`#f3f7ff`,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),700);c.frustumCulled=!1,c.raycast=()=>{};let l=new Float32Array(700*3),u=new Float32Array(700),d=new Float32Array(700);for(let e=0;e<700;e++)l[e*3]=i(-n,n),l[e*3+1]=i(r,11),l[e*3+2]=i(-n,n),u[e]=i(0,6.28),d[e]=i(.6,1.2);t.add(a,c);let m=Array.from({length:8},()=>new E),g=0,_=`clear`,v=0,y=0,x=0,S=0,C=0,w=new R,T=(e,t,n,r)=>e+(t-e)*Math.min(1,n*r);function D(e){Zt.includes(e)&&(_=e)}function O(){_=Zt[(Zt.indexOf(_)+1)%Zt.length]}function k(e,t){let f=_===`rain`,p=_===`snow`,h=_===`fog`,b=_!==`clear`;v=T(v,+!!b,e,1.4),y=T(y,+!!b,e,1.2),x=T(x,+!!h,e,.9),C=T(C,b&&!h?1:0,e,1),S=T(S,+!!p,e,p?.22:.5);let E=f?v:0,D=Math.round(600*E);for(let t=0;t<600;t++){if(t>=D){w.position.set(0,-50,0),w.scale.setScalar(0),w.updateMatrix(),a.setMatrixAt(t,w.matrix);continue}o[t*3+1]-=s[t]*e,o[t*3]+=e*1.1,o[t*3+1]<r&&(o[t*3]=i(-n,n),o[t*3+1]=11,o[t*3+2]=i(-n,n)),w.position.set(o[t*3],o[t*3+1],o[t*3+2]),w.rotation.set(0,0,0),w.scale.set(1,1,1),w.updateMatrix(),a.setMatrixAt(t,w.matrix)}a.instanceMatrix.needsUpdate=!0,a.material.opacity=.55*E,g=f?Math.round(8*v):0;for(let e=0;e<g;e++)m[e].set(Math.random(),Math.random(),.05*v);let O=Math.round(700*(p?v:0));for(let a=0;a<700;a++){if(a>=O){w.position.set(0,-50,0),w.scale.setScalar(0),w.updateMatrix(),c.setMatrixAt(a,w.matrix);continue}l[a*3+1]-=d[a]*e;let o=Math.sin(t*1.5+u[a])*.5;l[a*3+1]<r&&(l[a*3]=i(-n,n),l[a*3+1]=11,l[a*3+2]=i(-n,n)),w.position.set(l[a*3]+o,l[a*3+1],l[a*3+2]),w.rotation.set(0,0,0),w.scale.setScalar(1),w.updateMatrix(),c.setMatrixAt(a,w.matrix)}c.instanceMatrix.needsUpdate=!0,c.material.opacity=.9*(p?v:0)}return{group:t,update:k,cycle:O,setKind:D,rainDrops:m,get kind(){return _},get intensity(){return v},get overcast(){return y},get fog(){return x},get snow(){return S},get cloud(){return C},get rainDropCount(){return g},poolCounts:{rain:600,snow:700}}}function $t(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=(e,n,r)=>{let i=t.createRadialGradient(e,n,0,e,n,r);i.addColorStop(0,`rgba(255,255,255,0.95)`),i.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=i,t.beginPath(),t.arc(e,n,r,0,7),t.fill()};n(128*.42,128*.56,128*.26),n(128*.6,128*.5,128*.3),n(128*.5,128*.46,128*.22),n(128*.34,128*.54,128*.18),n(128*.7,128*.58,128*.18);let r=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5],i=t.getImageData(0,0,128,128),a=i.data;for(let e=0;e<128;e++)for(let t=0;t<128;t++){let n=(e*128+t)*4,i=a[n+3]/255,o=(r[e%4*4+t%4]+.5)/16-.5;a[n+3]=Math.max(0,Math.min(1,Math.floor(i*5+.5+o)/5))*255}t.putImageData(i,0,0);let o=new H(e);return o.colorSpace=B,o}function en({extent:e=8,count:t=16}={}){let n=new p;n.raycast=()=>{};let r=$t(),i=e+6,a=(e,t)=>e+Math.random()*(t-e),o=[];for(let e=0;e<t;e++){let e=new P({map:r,transparent:!0,depthWrite:!1,opacity:0,fog:!0}),t=new L(e),s={sp:t,mat:e,wisp:Math.random(),x:a(-i,i),z:a(-i,i),hiY:a(4,6.8),loY:a(.6,2.2),w:a(3,5.6),h:a(1.7,3),speed:a(.25,.7),op:a(.6,1)};t.raycast=()=>{},o.push(s),n.add(t)}let s=new N,c=new N(`#ffffff`),l=new N(`#5b626e`);function u(e,t,n,r){let u=r?r.cloud:0,d=r?r.fog:0,f=Math.min(1,.4+.6*u+.5*d);s.copy(n.sky).lerp(c,.62),s.lerp(l,.6*u);for(let n=0;n<o.length;n++){let r=o[n],c=n/o.length<f;r.x+=r.speed*e*(.6+.8*u),r.x>i&&(r.x=-i,r.z=a(-i,i));let l=Math.min(tn(r.x,-i,-i+3),1-tn(r.x,i-3,i)),p=r.hiY*(1-d)+r.loY*d,m=1-.5*r.wisp,h=.72*Math.max(0,1-d-u)+1*u+.42*d,g=c?Math.max(0,h)*r.op*m*l:0;r.mat.opacity+=(g-r.mat.opacity)*Math.min(1,e*2.5),r.mat.color.copy(s);let _=r.w*(1+.6*d)*(1+.4*r.wisp),v=r.h*(1-.35*d);r.sp.scale.set(_,v,1),r.sp.position.set(r.x,p+Math.sin(t*.3+n)*.15,r.z)}}function d(e){r=e;for(let t of o)t.mat.map=e,t.mat.needsUpdate=!0}let f=o.map((e,t)=>({kind:`cloud`,label:`cloud ${t+1}`,getWorldPos:t=>t.copy(e.sp.position),active:()=>e.mat.opacity>.06,info:()=>`cloud · ${e.wisp>.6?`wispy`:`puffy`} · drifting east${e.sp.position.y<3?` (low mist)`:``}`}));function m(){return f}return{group:n,update:u,setTexture:d,getFollowables:m,get count(){return o.length}}}function tn(e,t,n){let r=Math.max(0,Math.min(1,(e-t)/(n-t)));return r*r*(3-2*r)}var nn={person:4.5,car:6,gull:6,fish:8,boat:9,cloud:16};function rn({rig:e,getCamera:t,sources:n=[]}){let r=null,i=new E,a=new E,o=()=>{let e=[];for(let t of n)if(t&&t.getFollowables){let n=t.getFollowables();n&&e.push(...n)}return e},s=e=>!e.active||e.active();function c(t){return t?(r=t,e.setFollow(e=>t.getWorldPos(e),{frame:t.frame??nn[t.kind]??8}),t):null}function l(){r=null,e.clearFollow()}function u(e,n,r=.14){let l=t(),u=null,d=r;for(let t of o()){if(!s(t)||(t.getWorldPos(i),a.copy(i).project(l),a.z>1||a.z<-1))continue;let r=Math.hypot(a.x-e,a.y-n);r<d&&(d=r,u=t)}return u?c(u):null}function d(e=1,t=null){let n=o().filter(e=>(!t||e.kind===t)&&s(e));if(t||(n=an(n)),!n.length)return null;let i=r?n.indexOf(r):-1;return i=((i+e)%n.length+n.length)%n.length,c(n[i])}function f(){r&&r.active&&!r.active()&&l()}return{pickAt:u,cycle:d,follow:c,release:l,prune:f,get focus(){return r},get count(){return o().length},get readout(){return r?{kind:r.kind,label:r.label,info:r.info?r.info():``}:null}}}function an(e){let t=new Map;for(let n of e)t.has(n.kind)||t.set(n.kind,[]),t.get(n.kind).push(n);let n=[...t.values()],r=[];for(let e=0,t=!0;t;e++){t=!1;for(let i of n)e<i.length&&(r.push(i[e]),t=!0)}return r}var on={maxSpeed:6,accel:9,drag:5,turnRate:2.1,chaseDist:7,chaseElev:.42};function sn(e=on){let t=new E,n=new E,r=new E,i=new E,a=new o,s=.45;function c(o,c,l,u){let d=u&&u.heightAt||(()=>0),f=_e(Math.abs(o.speed)/e.maxSpeed,0,1),p=o.speed>=0?1:-1;if(o.yaw+=c.steer*e.turnRate*(.35+.65*f)*p*l,c.throttle!==0)o.speed+=c.throttle*e.accel*l;else{let t=Math.min(Math.abs(o.speed),e.drag*l);o.speed-=Math.sign(o.speed)*t}o.speed=_e(o.speed,-e.maxSpeed*.5,e.maxSpeed);let m=Math.sin(o.yaw),h=Math.cos(o.yaw);o.x+=m*o.speed*l,o.z+=h*o.speed*l;let g=d(o.x,o.z);o.y=ge(o.y,g,18,l);let _=d(o.x-s,o.z),v=d(o.x+s,o.z),y=d(o.x,o.z-s),b=d(o.x,o.z+s);return t.set(_-v,2*s,y-b).normalize(),n.set(m,0,h),r.crossVectors(t,n).normalize(),i.crossVectors(r,t).normalize(),a.makeBasis(r,t,i),o.quat.setFromRotationMatrix(a),o}return{step:c}}var cn={accel:7,lift:9,maxV:5,chaseDist:9.5,chaseElev:.4},ln={air:{drag:2,maxSpeed:8,turn:1.8,vDrag:2.2,buoyancy:0},water:{drag:4.6,maxSpeed:3.6,turn:1.3,vDrag:4.5,buoyancy:1.1},ground:{drag:5.5,maxSpeed:5,turn:2,vDrag:9,buoyancy:0}},un=[`drag`,`maxSpeed`,`turn`,`vDrag`,`buoyancy`],dn=(e,t,n)=>e+(t-e)*n;function fn(e=cn){let t=new E,r=new E,i=new E,a=new E,s=new o,c=new n,l={drag:0,maxSpeed:0,turn:0,vDrag:0,buoyancy:0},u=.4,d=.3,f=-900;function p(e,t){let n=t.heightAt(e.x,e.z),r=t.waterHeightAt?t.waterHeightAt(e.x,e.z):f,i=e.y,a=e.medium||`air`;if(r>f){if(a===`water`){if(i<=r+u)return`water`}else if(i<r-u)return`water`}if(a===`ground`){if(i<=n+d+u)return`ground`}else if(i<n+d)return`ground`;return`air`}function m(n,o,u,d){let f=n.medium||`air`,m=p(n,d);n.medium=m,m===f?n.crossingT>0&&(n.crossingT=Math.max(0,n.crossingT-u/.6)):(n.crossing=f+`>`+m,n.crossingT=1);let h=ln[m],g=ln[f],_=1-(n.crossingT||0),v=l;for(let e of un)v[e]=dn(g[e],h[e],_);n.yaw+=o.steer*v.turn*u,o.throttle===0?n.speed-=Math.sign(n.speed)*Math.min(Math.abs(n.speed),v.drag*u):n.speed+=o.throttle*e.accel*u,n.speed=_e(n.speed,-v.maxSpeed*.6,v.maxSpeed);let y=Math.sin(n.yaw),b=Math.cos(n.yaw);n.x+=y*n.speed*u,n.z+=b*n.speed*u;let x=d.heightAt(n.x,n.z);if(m===`ground`&&o.lift<=0){n.vy=0,n.y=ge(n.y,x,14,u);let e=.45,o=d.heightAt(n.x-e,n.z),c=d.heightAt(n.x+e,n.z),l=d.heightAt(n.x,n.z-e),f=d.heightAt(n.x,n.z+e);t.set(o-c,2*e,l-f).normalize(),r.set(y,0,b),i.crossVectors(t,r).normalize(),a.crossVectors(i,t).normalize(),s.makeBasis(i,t,a),n.quat.setFromRotationMatrix(s)}else{n.vy+=(o.lift*e.lift+v.buoyancy)*u,n.vy-=Math.sign(n.vy)*Math.min(Math.abs(n.vy),v.vDrag*u),n.vy=_e(n.vy,-e.maxV,e.maxV),n.y+=n.vy*u,n.y<x&&(n.y=x,n.vy<0&&(n.vy=0));let t=_e(-o.steer*.35,-.4,.4),r=_e(-n.vy*.06,-.3,.3);c.set(r,n.yaw,t,`YXZ`),n.quat.setFromEuler(c)}return n}return{step:m}}var pn={ground:sn,spacecraft:fn},mn=.55,hn={throttle:0,steer:0,lift:0};function gn({rig:e,world:t}={}){let n=`free`,r=null,i=null,a=0;function o(t){if(!t||!t.pilot)return!1;r&&s(),r=t;let o=r.pilot;return i=(pn[o.model]||pn.ground)(o.profile),o.suspendAutonomy(),e.setFollow(e=>o.getWorldPos(e),{frame:o.profile.chaseDist}),e.setElevation(o.profile.chaseElev),e.setAzimuth(o.getTransform().yaw+Math.PI,!0),n=`entering`,a=mn,!0}function s(){return r?(r.pilot.resumeAutonomy(),e.clearFollow(),r=null,i=null,n=`free`,a=0,!0):!1}function c(o,s){if(!r)return;let c=r.pilot;if(n===`entering`){a-=o,e.setAzimuth(c.getTransform().yaw+Math.PI),a<=0&&(n=`piloting`);return}let l=c.getTransform();i.step(l,s||hn,o,t),c.setTransform(l),e.setAzimuth(l.yaw+Math.PI)}return{possess:o,release:s,step:c,get active(){return!!r},get piloting(){return n===`piloting`},get state(){return n},get craft(){return r},get controlHints(){return r?r.pilot.controlHints:``},get speed(){return r?r.pilot.getTransform().speed:0},get telemetry(){if(!r)return null;let e=r.pilot.getTransform(),n=t&&t.heightAt?t.heightAt(e.x,e.z):0,i=t&&t.waterHeightAt?t.waterHeightAt(e.x,e.z):-900;return{medium:e.medium||null,speed:e.speed||0,y:e.y,altitude:Math.max(0,e.y-n),depth:i>-900?Math.max(0,i-e.y):0,climb:e.vy||0}}}}var _n=new E,vn=new E,yn=new E,bn=new E,xn=new o;function Sn(){let e=document.createElement(`canvas`);e.width=256,e.height=64;let t=e.getContext(`2d`);t.strokeStyle=`#ffffff`,t.lineWidth=6,t.lineCap=`round`,t.lineJoin=`round`;let n=[14,24,36,24];for(let e=0;e<4;e++){let r=e*64,i=n[e];t.beginPath(),t.moveTo(r+8,40),t.quadraticCurveTo(r+24,i,r+32,36),t.quadraticCurveTo(r+40,i,r+56,40),t.stroke()}let r=new H(e);return r.colorSpace=B,r}function Cn(){let e=document.createElement(`canvas`);e.width=e.height=96;let t=e.getContext(`2d`),n=(e,n,r)=>{let i=t.createRadialGradient(e,n,0,e,n,r);i.addColorStop(0,`rgba(255,255,255,0.95)`),i.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=i,t.beginPath(),t.arc(e,n,r,0,7),t.fill()};n(96*.42,96*.56,96*.26),n(96*.6,96*.5,96*.3),n(96*.5,96*.46,96*.22),n(96*.7,96*.58,96*.18);let r=new H(e);return r.colorSpace=B,r}function wn(){let e=new p,t=new v(new z(.46,.2,1.1),Z(new a({color:`#5a6675`,roughness:.6,metalness:.2,flatShading:!0}),{color:`#5a6675`}));t.position.y=.02;let n=new v(new z(.3,.22,.42),Z(new a({color:`#e7ecf2`,roughness:.7,flatShading:!0}),{color:`#e7ecf2`}));return n.position.set(0,.18,.08),e.add(t,n),e.traverse(e=>{e.isMesh&&(e.castShadow=!0),e.raycast=()=>{}}),e}function Tn(){let e=new v(new M(.18,9,7),Z(new a({color:`#5b6f86`,roughness:.5,flatShading:!0}),{color:`#5b6f86`}));return e.scale.set(.55,.5,1),e.raycast=()=>{},e}function En(){let e=new p,t=new v(new z(.18,.34,.14),Z(new a({color:`#3b6ea5`,roughness:.8,flatShading:!0}),{color:`#3b6ea5`}));t.position.y=.17;let n=new v(new z(.13,.13,.13),Z(new a({color:`#e3b98c`,roughness:.8,flatShading:!0}),{color:`#e3b98c`}));return n.position.y=.41,e.add(t,n),e.traverse(e=>{e.isMesh&&(e.castShadow=!0),e.raycast=()=>{}}),e}function Dn(){let e=new p,t=new v(new z(.5,.22,.84),Z(new a({color:`#d2622e`,roughness:.6,metalness:.2,flatShading:!0}),{color:`#d2622e`}));t.position.y=.26;let n=new v(new z(.3,.16,.32),Z(new a({color:`#2b2f37`,roughness:.8,flatShading:!0}),{color:`#2b2f37`}));n.position.set(0,.42,-.06);let r=new v(new z(.34,.12,.22),Z(new a({color:`#e2e7ee`,roughness:.7,flatShading:!0}),{color:`#e2e7ee`}));r.position.set(0,.28,.42);let i=new U(.14,.14,.13,10);for(let[t,n]of[[-.27,.3],[.27,.3],[-.27,-.3],[.27,-.3]]){let r=new v(i,Z(new a({color:`#1c2026`,roughness:.9,flatShading:!0}),{color:`#1c2026`}));r.rotation.z=Math.PI/2,r.position.set(t,.14,n),e.add(r)}return e.add(t,n,r),e.traverse(e=>{e.isMesh&&(e.castShadow=!0),e.raycast=()=>{}}),e}function On(){let e=new p,t=new v(new U(.5,.64,.16,18),Z(new a({color:`#8a93a8`,roughness:.4,metalness:.5,flatShading:!0}),{color:`#8a93a8`}));t.position.y=.3;let n=new v(new M(.3,16,10,0,Math.PI*2,0,Math.PI/2),Z(new a({color:`#9fe6ff`,roughness:.25,metalness:.3,flatShading:!0,transparent:!0,opacity:.85}),{color:`#9fe6ff`}));n.position.y=.38;let r=new v(new z(.12,.1,.34),Z(new a({color:`#ff7a4d`,roughness:.6,flatShading:!0}),{color:`#ff7a4d`}));return r.position.set(0,.3,.52),e.add(t,n,r),e.traverse(e=>{e.isMesh&&(e.castShadow=!0),e.raycast=()=>{}}),e}function kn({heightAt:e,seaSurfaceY:n=0,waterY:r=.06}={}){let i=new p;i.raycast=()=>{};let a=e||(()=>0),o=[],s=[],c={gull:0,boat:0,fish:0,cloud:0,person:0,atv:0,craft:0},l=At({frames:4,fps:7}),u=Sn(),d=Cn(),f=[`#ffffff`,`#cfd4da`,`#c8a06a`];function m(e,i,o,s){let p=(c[e]||0)*1.7+(s.phase||0);if(e===`gull`){let n=l.makeInstanceTexture(u),r=new L(new P({map:n,color:new N(f[c.gull%3]),transparent:!0,opacity:.9,depthWrite:!1,fog:!0}));r.scale.setScalar(.5),r.raycast=()=>{};let s=i,d=o,m=1.4+Math.random()*.6,h=a(i,o)+2.4,g=.5+Math.random()*.3;return{kind:e,obj:r,x:i,z:o,update(e,n,i){let a=p+n*g;r.position.set(s+Math.cos(a)*m,h+Math.sin(n*1.4+p)*.12,d+Math.sin(a)*m),l.step(r.material.map,n,p);let o=i?1-i.windowGlow:1;r.material.opacity=t.clamp(.25+o*.7,0,.95)},info:()=>`gull · circling`,dispose(){n.dispose()}}}if(e===`cloud`){let t=new L(new P({map:d,transparent:!0,opacity:.85,depthWrite:!1,fog:!0}));t.scale.set(3.4,1.9,1),t.raycast=()=>{};let n=i,r=o,a=5+Math.random()*1.4,s=.12+Math.random()*.1;return{kind:e,obj:t,x:i,z:o,update(e,i,o){t.position.set(n+Math.sin(i*.18+p)*1.2,a+Math.sin(i*.3+p)*.18,r+s*Math.cos(i*.1+p)),o&&o.sky&&t.material.color.copy(o.sky).lerp(An,.62)},info:()=>`cloud · drifting`}}if(e===`boat`){let t=wn();t.position.set(i,r,o);let n=i,a=o,s=Math.random()*Math.PI*2;return{kind:e,obj:t,x:i,z:o,update(e,c){s+=Math.sin(c*.3+p)*.4*e;let l=.6;n+=Math.sin(s)*l*e,a+=Math.cos(s)*l*e,n+=(i-n)*.4*e,a+=(o-a)*.4*e;let u=Math.sin(c*1.1+p)*.025;t.position.set(n,r+u,a),t.rotation.set(Math.sin(c*.9+p)*.04,s,0)},info:()=>`boat · drifting`}}if(e===`fish`){let t=Tn();t.position.set(i,-5,o);let n=6+Math.random()*5,a=Math.random()*Math.PI*2,s=Math.random()*n,c={kind:e,obj:t,x:i,z:o,active:!0,update(e){if(s+=e,s>=n){let e=(s-n)/1.3;if(e>=1){s=0,t.position.set(i,-5,o),c.active=!1;return}let l=Math.sin(Math.PI*e);t.position.set(i+Math.sin(a)*(e-.5)*1,r-.1+l*.5,o+Math.cos(a)*(e-.5)*1),t.rotation.set(Math.cos(Math.PI*e)*.9,a,0),c.active=!0}else c.active=!1},info:()=>c.active?`fish · breaching!`:`fish · below`};return c}if(e===`person`){let t=En();t.position.set(i,a(i,o),o);let r=Math.random()*Math.PI*2;return{kind:e,obj:t,x:i,z:o,update(e,s){r+=(Math.random()-.5)*1.4*e;let c=.55,l=t.position.x+Math.sin(r)*c*e,u=t.position.z+Math.cos(r)*c*e,d=l+(i-l)*.25*e,f=u+(o-u)*.25*e;a(d,f)<n+.02&&(r+=Math.PI,d=t.position.x,f=t.position.z),t.position.set(d,a(d,f),f),t.rotation.y=r},info:()=>`person · wandering`}}if(e===`atv`){let t=Dn(),n={x:i,y:a(i,o),z:o,yaw:s.yaw??Math.random()*Math.PI*2,speed:0,quat:new oe},r=!1,c=()=>{let e=.45,t=a(n.x-e,n.z),r=a(n.x+e,n.z),i=a(n.x,n.z-e),o=a(n.x,n.z+e);_n.set(t-r,2*e,i-o).normalize(),vn.set(Math.sin(n.yaw),0,Math.cos(n.yaw)),yn.crossVectors(_n,vn).normalize(),bn.crossVectors(yn,_n).normalize(),xn.makeBasis(yn,_n,bn),n.quat.setFromRotationMatrix(xn)},l=()=>{n.y=a(n.x,n.z),c(),t.position.set(n.x,n.y,n.z),t.quaternion.copy(n.quat)};return l(),{kind:e,obj:t,x:i,z:o,get piloted(){return r},update(){r||l()},info:()=>r?`ATV · piloted`:`ATV · parked`,pilot:{model:`ground`,profile:on,controlHints:`W/S throttle · A/D steer · Esc to exit`,getWorldPos:e=>e.copy(t.position),getTransform:()=>n,setTransform:e=>{t.position.set(e.x,e.y,e.z),t.quaternion.copy(e.quat)},suspendAutonomy:()=>{r=!0},resumeAutonomy:()=>{r=!1,n.speed=0}}}}if(e===`craft`){let t=On(),n=1.3,r=Math.random()*Math.PI*2,c={x:i,y:a(i,o)+n,z:o,yaw:s.yaw??Math.random()*Math.PI*2,speed:0,vy:0,quat:new oe,medium:`air`,crossing:null,crossingT:0},l=!1;return{kind:e,obj:t,x:i,z:o,get piloted(){return l},update(e,i){if(l)return;c.yaw+=.3*e;let o=a(c.x,c.z)+n+Math.sin((i||0)*.8+r)*.08;c.y+=(o-c.y)*Math.min(1,e*3),t.position.set(c.x,c.y,c.z),t.rotation.set(0,c.yaw,0)},info:()=>l?`spacecraft · piloted`:`spacecraft · hovering`,pilot:{model:`spacecraft`,profile:cn,controlHints:`W/S thrust · A/D steer · Space/Shift climb/dive · Esc exit`,getWorldPos:e=>e.copy(t.position),getTransform:()=>c,setTransform:e=>{t.position.set(e.x,e.y,e.z),t.quaternion.copy(e.quat)},suspendAutonomy:()=>{l=!0},resumeAutonomy:()=>{l=!1,c.speed=0,c.vy=0}}}}return null}function h(e){return c[e]=(c[e]||0)+1,`${e} ${c[e]}`}function g(e,t,n,r={}){let a=m(e,t,n,r);if(!a)return null;a.opts=r,o.push(a),i.add(a.obj);let c={kind:e,label:h(e),getWorldPos:e=>e.copy(a.obj.position),active:()=>a.active!==!1,info:()=>a.info()};return a.pilot&&(c.pilot=a.pilot),a.followable=c,s.push(c),a}function _(e){if(!e)return!1;let t=o.indexOf(e);if(t<0)return!1;i.remove(e.obj),e.dispose&&e.dispose(),o.splice(t,1);let n=s.indexOf(e.followable);return n>=0&&s.splice(n,1),!0}function v(e,t,n=2.5){let r=null,i=n*n;for(let n of o){let a=n.obj.position.x-e,o=n.obj.position.z-t,s=a*a+o*o;s<i&&(i=s,r=n)}if(!r)return null;let a={kind:r.kind,x:r.x,z:r.z,opts:r.opts};return _(r),a}function y(e,t,n){for(let r=0;r<o.length;r++)o[r].update(e,t,n);typeof window<`u`&&(window.__placedLife=b())}function b(){let e={gull:0,boat:0,fish:0,cloud:0,person:0,atv:0,craft:0,total:o.length};for(let t of o)e[t.kind]++;return e}function x(){return s}function S(){return o.map(e=>({kind:e.kind,x:e.x,z:e.z,opts:e.opts}))}function C(){for(let e of[...o])_(e)}function w(e){if(C(),Array.isArray(e))for(let t of e.slice(0,2e3))!t||typeof t.kind!=`string`||!Number.isFinite(t.x)||!Number.isFinite(t.z)||g(t.kind,t.x,t.z,t.opts&&typeof t.opts==`object`?t.opts:{})}return{group:i,update:y,spawn:g,despawn:_,removeNear:v,getFollowables:x,snapshot:S,restore:w,clear:C,counts:b,get count(){return o.length}}}var An=new N(`#ffffff`),jn=`varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0); 
}`,Mn=`precision highp float;

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
}`,Nn=`precision highp float;

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
}`,Pn=`precision highp float;

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
}`,Fn=`precision highp float;
varying vec2 vUv;
uniform sampler2D uSrc;
void main() { gl_FragColor = vec4(texture2D(uSrc, vUv).r, 0.0, 0.0, 0.0); }`,In=`precision highp float;
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
}`,Ln=`precision highp float;
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
}`,Rn=`precision highp float;
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
}`;function zn({renderer:e,N:t,cell:n,half:r,worldSize:o,seaY:s=0,FLOW:u,DAMP:d,MIN_DEPTH:f,KC:p,KE:m,KD:g,KADV:_,MAXD:y,readTerrain:b}){let x=e.getContext();if(!(x&&x.getExtension&&x.getExtension(`EXT_color_buffer_float`)))return typeof console<`u`&&console.warn(`[L87] EXT_color_buffer_float unavailable — GPU flow backend cannot run; staying on CPU.`),null;let S={type:i,format:ue,minFilter:l,magFilter:l,wrapS:ie,wrapT:ie,depthBuffer:!1,stencilBuffer:!1},C=[new G(t,t,S),new G(t,t,S)],w=[new G(t,t,S),new G(t,t,S)],T=[new G(t,t,S),new G(t,t,S)],k=new Float32Array(t*t*4),j=new me(k,t,t,ue,i);j.minFilter=l,j.magFilter=l,j.wrapS=j.wrapT=ie;let ee=new Float32Array(t*t),M=!1,P=1,te=!0,F=new O,I=new c(-1,1,1,-1,0,1),L=new v(new h(2,2),null);L.frustumCulled=!1,F.add(L);let ae=new K(1/t,1/t),oe=(e,t)=>new re({vertexShader:jn,fragmentShader:e,uniforms:t}),se=oe(Mn,{uState:{value:null},uTerr:{value:null},uFlux:{value:null},uTexel:{value:ae},uN:{value:t},uDt:{value:0},uFlow:{value:u},uDamp:{value:d}}),ce=oe(Nn,{uState:{value:null},uTerr:{value:null},uFlux:{value:null},uTexel:{value:ae},uN:{value:t},uDt:{value:0},uSeaY:{value:s}}),R=oe(Pn,{uState:{value:null},uTerr:{value:null},uN:{value:t},uSeaY:{value:s},uRain:{value:0},uPourCount:{value:0},uPours:{value:Array.from({length:8},()=>new E)},uPourR:{value:new Float32Array(8)}}),le=oe(Fn,{uSrc:{value:j}}),z=()=>({uState:{value:null},uTerr:{value:null},uFlux:{value:null},uTexel:{value:ae},uN:{value:t},uDt:{value:0},uCell:{value:n},uSeaY:{value:s},uKC:{value:p},uKE:{value:m},uKD:{value:g},uMaxD:{value:y},uMinDepth:{value:f},uErosK:{value:P}}),B=oe(In,z()),de=oe(Ln,z()),V=oe(Rn,{uState:{value:null},uTerr:{value:null},uFlux:{value:null},uTexel:{value:ae},uN:{value:t},uDt:{value:0},uSeaY:{value:s},uKADV:{value:_}});function H(t,n){L.material=t;let r=e.getRenderTarget();e.setRenderTarget(n),e.render(F,I),e.setRenderTarget(r)}let fe=new N;function U(t){let n=e.getRenderTarget(),r=e.getClearAlpha();e.getClearColor(fe),e.setRenderTarget(t),e.setClearColor(0,0),e.clear(!0,!1,!1),e.setClearColor(fe,r),e.setRenderTarget(n)}function W(){b(ee);for(let e=0;e<t*t;e++)k[e*4]=ee[e];j.needsUpdate=!0,H(le,T[0])}function pe(){U(C[0]),U(C[1]),U(w[0]),U(w[1])}pe();let he=t*t,ge=new Float32Array(he*3),_e=new Float32Array(he*2);for(let e=0;e<t;e++)for(let i=0;i<t;i++){let a=e*t+i;ge[a*3]=i*n-r,ge[a*3+1]=0,ge[a*3+2]=e*n-r,_e[a*2]=(i+.5)/t,_e[a*2+1]=(e+.5)/t}let ve=[];for(let e=0;e<t-1;e++)for(let n=0;n<t-1;n++){let r=e*t+n,i=e*t+n+1,a=(e+1)*t+n,o=(e+1)*t+n+1;ve.push(r,a,i,i,a,o)}let ye=new ne;ye.setAttribute(`position`,new D(ge,3)),ye.setAttribute(`aGridUv`,new D(_e,2)),ye.setIndex(ve),ye.boundingSphere=new A(new E(0,0,0),o);let be={uStateTex:{value:C[0].texture},uTerrTex:{value:T[0].texture},uMinDepth:{value:f}},xe=new a({color:`#2f6f96`,roughness:.14,metalness:.45,transparent:!0,depthWrite:!1});xe.onBeforeCompile=e=>{e.uniforms.uStateTex=be.uStateTex,e.uniforms.uTerrTex=be.uTerrTex,e.uniforms.uMinDepth=be.uMinDepth,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
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
  gl_FragColor.a *= clamp((vDepth - 0.012) * 7.0, 0.16, 0.86);`)},xe.customProgramCacheKey=()=>`lgr-flow-gpu`;let Se=new v(ye,xe);Se.frustumCulled=!1,Se.castShadow=!1,Se.receiveShadow=!1,Se.raycast=()=>{},Se.renderOrder=3,Se.visible=!1;function Ce(){be.uStateTex.value=C[0].texture,be.uTerrTex.value=T[0].texture}function q(e){e=Math.min(e,1/30),(!M||te)&&(W(),te=!1),se.uniforms.uState.value=C[0].texture,se.uniforms.uTerr.value=T[0].texture,se.uniforms.uFlux.value=w[0].texture,se.uniforms.uDt.value=e,H(se,w[1]),w.reverse(),ce.uniforms.uState.value=C[0].texture,ce.uniforms.uTerr.value=T[0].texture,ce.uniforms.uFlux.value=w[0].texture,ce.uniforms.uDt.value=e,H(ce,C[1]),C.reverse(),M&&(B.uniforms.uState.value=C[0].texture,B.uniforms.uTerr.value=T[0].texture,B.uniforms.uFlux.value=w[0].texture,B.uniforms.uDt.value=e,B.uniforms.uErosK.value=P,H(B,T[1]),de.uniforms.uState.value=C[0].texture,de.uniforms.uTerr.value=T[0].texture,de.uniforms.uFlux.value=w[0].texture,de.uniforms.uDt.value=e,de.uniforms.uErosK.value=P,H(de,C[1]),T.reverse(),C.reverse(),V.uniforms.uState.value=C[0].texture,V.uniforms.uTerr.value=T[0].texture,V.uniforms.uFlux.value=w[0].texture,V.uniforms.uDt.value=e,H(V,C[1]),C.reverse()),Ce()}function J(){R.uniforms.uState.value=C[0].texture,R.uniforms.uTerr.value=T[0].texture,H(R,C[1]),C.reverse(),Ce()}function we(e,t,i=.5,a=1.6){(te||!M)&&(W(),te=!1);let o=(e+r)/n,s=(t+r)/n,c=Math.max(1,a/n);R.uniforms.uRain.value=0,R.uniforms.uPourCount.value=1,R.uniforms.uPours.value[0].set(o,s,i),R.uniforms.uPourR.value[0]=c,J()}function Y(e=.004){(te||!M)&&(W(),te=!1),R.uniforms.uPourCount.value=0,R.uniforms.uRain.value=e,J()}function Te(){pe(),te=!0,Ce()}function Ee(e,t){M=!!e,t!=null&&(P=Math.max(0,t)),te=!0}let X=new Float32Array(t*t*4);function De(n){return e.readRenderTargetPixels(n,0,0,t,t,X),X}function Oe(){let e=De(C[0]),n=0;for(let r=0;r<t*t;r++)n+=e[r*4];return n}function ke(e,i){let a=Math.round((e+r)/n),o=Math.round((i+r)/n);return a<0||a>=t||o<0||o>=t?0:De(C[0])[(o*t+a)*4]}function Ae(){let e=De(C[0]),n=0;for(let r=0;r<t*t;r++)n+=e[r*4+1];return n}function je(){let e=De(C[0]),n=new Float32Array(t*t);for(let r=0;r<t*t;r++)n[r]=e[r*4];return n}function Me(){let e=De(T[0]),n=new Float32Array(t*t);for(let r=0;r<t*t;r++)n[r]=e[r*4];return n}function Ne(e){Se.visible=!!e}function Pe(){for(let e of C)e.dispose();for(let e of w)e.dispose();for(let e of T)e.dispose();j.dispose(),ye.dispose(),xe.dispose(),L.geometry.dispose(),se.dispose(),ce.dispose(),R.dispose(),le.dispose(),B.dispose(),de.dispose(),V.dispose()}return{mesh:Se,step:q,pourAt:we,rain:Y,clear:Te,totalWater:Oe,cellAt:ke,totalSediment:Ae,readW:je,readTerr:Me,setErosion:Ee,setVisible:Ne,dispose:Pe,get grid(){return t},get erosion(){return M}}}function Bn({worldHeightAt:e,applyErosion:t=null,syncErodedTerrain:n=null,worldSize:r=26,grid:i=96,seaY:o=0,renderer:s=null}={}){let c=i,l=new Float32Array(c*c),u=new Float32Array(c*c),d=new Float32Array(c*c),f=new Float32Array(c*c),m=new Float32Array(c*c),h=new Float32Array(c*c),g=new Float32Array(c*c),_=new Float32Array(c*c),y=new Float32Array(c*c),b=!1,x=1,S=r/(c-1),C=r/2,w=e||(()=>0),T=e=>e*S-C,E=e=>e*S-C,O=(e,t)=>t*c+e,k=26*S,A=.9,j=.006,ee=.5,M=.25,N=.3,P=.006;function te(){for(let e=0;e<c;e++)for(let t=0;t<c;t++)h[O(t,e)]=w(T(t),E(e))}let F=`cpu`,I=null,re=new Float32Array(c*c),ie=0;function L(e){te();for(let t=0;t<c*c;t++)e[t]=h[t]}function ae(){return I||!s?I:(I=zn({renderer:s,N:c,cell:S,half:C,worldSize:r,seaY:o,FLOW:k,DAMP:A,MIN_DEPTH:j,KC:ee,KE:M*3,KD:N*3,KADV:6,MAXD:P*3,readTerrain:L}),I&&he.add(I.mesh),I)}function oe(e){if(e===`gpu`){if(ae(),!I)return typeof console<`u`&&console.info(`[L87] GPU backend unavailable (no renderer / no float RT) — staying on CPU (oracle).`),F=`cpu`,se(),F;F=`gpu`,I.setErosion(b,x),b&&(L(re),ie=0)}else F=`cpu`;return se(),F}function se(){I&&I.setVisible(F===`gpu`),F===`gpu`?K.visible=!1:ge()}let ce=new Float32Array(c*c);function R(){if(++ie<20)return;ie=0;let e=I.readTerr(),t=!1;for(let n=0;n<c*c;n++){let r=e[n]-re[n];ce[n]=r,r!==0&&(t=!0),re[n]=e[n]}t&&n(ce,c)}function le(e){if(F===`gpu`&&I){I.step(e),b&&n&&R();return}e=Math.min(e,1/30),te();for(let t=0;t<c;t++)for(let n=0;n<c;n++){let r=O(n,t),i=h[r]+l[r],a=0,o=0,s=0,p=0;n>0&&(a=Math.max(0,u[r]*A+e*k*(i-(h[r-1]+l[r-1])))),n<c-1&&(o=Math.max(0,d[r]*A+e*k*(i-(h[r+1]+l[r+1])))),t>0&&(p=Math.max(0,m[r]*A+e*k*(i-(h[r-c]+l[r-c])))),t<c-1&&(s=Math.max(0,f[r]*A+e*k*(i-(h[r+c]+l[r+c]))));let g=(a+o+s+p)*e,_=g>1e-9?Math.min(1,l[r]/g):1;u[r]=a*_,d[r]=o*_,m[r]=p*_,f[r]=s*_}for(let t=0;t<c;t++)for(let n=0;n<c;n++){let r=O(n,t),i=0;n>0&&(i+=d[r-1]),n<c-1&&(i+=u[r+1]),t>0&&(i+=f[r-c]),t<c-1&&(i+=m[r+c]);let a=u[r]+d[r]+m[r]+f[r];l[r]+=e*(i-a),l[r]<0&&(l[r]=0),h[r]<o-.02&&(l[r]=0)}b&&t&&ue(e),ge()}function ue(e){y.fill(0);for(let t=0;t<c;t++)for(let n=0;n<c;n++){let r=O(n,t);if(l[r]<=j){if(g[r]>0){let t=Math.min(P,N*g[r]*e);y[r]+=t,g[r]-=t}continue}let i=(u[r]+d[r]+f[r]+m[r])/(l[r]+.02),a=n>0?h[r-1]:h[r],o=n<c-1?h[r+1]:h[r],s=t>0?h[r-c]:h[r],p=t<c-1?h[r+c]:h[r],_=Math.min(2,Math.hypot(o-a,p-s)/(2*S)),v=ee*i*Math.max(.05,_)*x;if(v>g[r]){let t=Math.min(P,M*(v-g[r])*e);y[r]-=t,g[r]+=t}else{let t=Math.min(P,N*(g[r]-v)*e);y[r]+=t,g[r]-=t,g[r]<0&&(g[r]=0)}}_.set(g);for(let t=0;t<c;t++)for(let n=0;n<c;n++){let r=O(n,t),i=u[r]+d[r]+f[r]+m[r];if(i<=1e-9||g[r]<=1e-9)continue;let a=Math.min(g[r],g[r]*6*e);_[r]-=a,n>0&&(_[r-1]+=a*u[r]/i),n<c-1&&(_[r+1]+=a*d[r]/i),t>0&&(_[r-c]+=a*m[r]/i),t<c-1&&(_[r+c]+=a*f[r]/i)}g.set(_);for(let e=0;e<c*c;e++)g[e]<0&&(g[e]=0),h[e]<o-.02&&(g[e]=0);t(y,c)}function z(e,t){b=!!e,t!=null&&(x=Math.max(0,t)),e||g.fill(0),F===`gpu`&&I&&(I.setErosion(e,t),e&&(L(re),ie=0))}function B(e,t,n=.5,r=1.6){if(F===`gpu`&&I)return I.pourAt(e,t,n,r);let i=(e+C)/S,a=(t+C)/S,o=Math.max(1,r/S),s=Math.max(0,Math.floor(i-o)),u=Math.min(c-1,Math.ceil(i+o)),d=Math.max(0,Math.floor(a-o)),f=Math.min(c-1,Math.ceil(a+o));for(let e=d;e<=f;e++)for(let t=s;t<=u;t++){let r=Math.hypot(t-i,e-a);r<=o&&(l[O(t,e)]+=n*(1-r/o))}}function de(e=.004){if(F===`gpu`&&I)return I.rain(e);te();for(let t=0;t<c*c;t++)h[t]>o&&(l[t]+=e)}function V(){if(F===`gpu`&&I)return I.clear();l.fill(0),u.fill(0),d.fill(0),f.fill(0),m.fill(0),g.fill(0),ge()}function H(){if(F===`gpu`&&I)return I.totalWater();let e=0;for(let t=0;t<c*c;t++)e+=l[t];return e}function fe(e,t){if(F===`gpu`&&I)return I.cellAt(e,t);let n=Math.round((e+C)/S),r=Math.round((t+C)/S);return n<0||n>=c||r<0||r>=c?0:l[O(n,r)]}let U=new Float32Array(c*c*3),W=new Float32Array(c*c);for(let e=0;e<c;e++)for(let t=0;t<c;t++){let n=O(t,e);U[n*3]=T(t),U[n*3+1]=-50,U[n*3+2]=E(e)}let pe=[];for(let e=0;e<c-1;e++)for(let t=0;t<c-1;t++){let n=O(t,e),r=O(t+1,e),i=O(t,e+1),a=O(t+1,e+1);pe.push(n,i,r,r,i,a)}let G=new ne;G.setAttribute(`position`,new D(U,3)),G.setAttribute(`aDepth`,new D(W,1)),G.setIndex(pe),G.computeVertexNormals();let me=new a({color:`#2f6f96`,roughness:.14,metalness:.45,transparent:!0,depthWrite:!1});me.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
attribute float aDepth;
varying float vDepth;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
  vDepth = aDepth;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying float vDepth;`).replace(`#include <dithering_fragment>`,`#include <dithering_fragment>
  if (vDepth < 0.012) discard;
  gl_FragColor.a *= clamp((vDepth - 0.012) * 7.0, 0.16, 0.86);`)},me.customProgramCacheKey=()=>`lgr-flow`;let K=new v(G,me);K.frustumCulled=!1,K.castShadow=!1,K.receiveShadow=!1,K.raycast=()=>{},K.renderOrder=3;let he=new p;he.add(K),he.raycast=()=>{};function ge(){let e=0;for(let t=0;t<c*c;t++){let n=l[t];W[t]=n,U[t*3+1]=n>j?h[t]+n:-50,n>j&&e++}G.attributes.position.needsUpdate=!0,G.attributes.aDepth.needsUpdate=!0,K.visible=e>0,typeof window<`u`&&(window.__flowWet=e)}ge();function _e(){if(F===`gpu`&&I)return I.totalSediment();let e=0;for(let t=0;t<c*c;t++)e+=g[t];return e}return{group:he,step:le,pourAt:B,rain:de,clear:V,totalWater:H,cellAt:fe,setErosion:z,totalSediment:_e,setBackend:oe,get backend(){return F},_debugReadW:()=>F===`gpu`&&I?I.readW():l.slice(),_debugReadTerr:()=>F===`gpu`&&I?I.readTerr():(te(),h.slice()),_debugReadS:()=>F===`gpu`&&I?I.totalSediment():_e(),_debugStepN:(e,t=1/60)=>{for(let n=0;n<e;n++)le(t)},get erosion(){return b},get grid(){return c},get visible(){return K.visible}}}function Vn({extent:e=26,count:t=2e3,seed:n=7,yLo:r=.4,yHi:i=7}={}){let a=Ze((n^218462737)>>>0),o=e/2,s=new Float32Array(t*3),c=new Float32Array(t),l=new Float32Array(t);for(let e=0;e<t;e++)s[e*3]=(a()*2-1)*o,s[e*3+1]=r+a()*(i-r),s[e*3+2]=(a()*2-1)*o,c[e]=a()*Math.PI*2,l[e]=.6+a()*.8;let u=new ne;u.setAttribute(`position`,new D(s,3)),u.setAttribute(`aPh`,new D(c,1)),u.setAttribute(`aSp`,new D(l,1)),u.setDrawRange(0,t);let d={uTime:{value:0},uWind:{value:0},uHalf:{value:o},uOpacity:{value:0},uColor:{value:new N(`#fff3d4`)},uPx:{value:2.2}},f=new re({uniforms:d,transparent:!0,depthWrite:!1,depthTest:!0,blending:2,vertexShader:`
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
      }`}),m=new j(u,f);m.frustumCulled=!1,m.raycast=()=>{};let h=new p;h.add(m),h.userData.dispose=()=>{u.dispose(),f.dispose()};function g(e,n,r,{wind:i=0,qualityLevel:a=0}={}){d.uTime.value=n,d.uWind.value=.25+i;let o=r?1-r.windowGlow:1;d.uOpacity.value=.09*o,u.setDrawRange(0,a>=2?t>>1:t)}return{group:h,update:g,count:t}}var Hn=[{id:`place`,label:`Place`,icon:`✚`,key:`1`},{id:`sculpt`,label:`Sculpt`,icon:`⛰`,key:`2`},{id:`paint`,label:`Paint`,icon:`🎨`,key:`3`},{id:`scatter`,label:`Objects`,icon:`🌲`,key:`4`},{id:`flow`,label:`Water`,icon:`💧`,key:`5`},{id:`select`,label:`Select`,icon:`◳`,key:`6`}],Un=[`tree`,`rock`,`tuft`],Wn=[`gull`,`boat`,`fish`,`cloud`,`person`,`atv`,`craft`],Gn=(e,t,n)=>e<t?t:e>n?n:e;function Kn({world:e,catalog:t,inspector:n}={}){let r=`sculpt`,i=1,a=!1,o={radius:2.2,strength:.03,density:.6,dropN:1},s={biome:2,scatter:`tree`,entity:`gull`},c=null,l=!1;function u(e){return Hn.some(t=>t.id===e)&&(r=e),r}function d(e){let t=Hn.find(t=>t.key===e);return t&&(r=t.id),r}function f(){return i=-i,i}function p(e){return o.radius=Gn(e,.8,6),o.radius}function m(e){return o.strength=Gn(e,.01,.15),o.strength}function h(e){return o.density=Gn(e,.1,1),o.density}function g(e){return o.dropN=[1,10,50].includes(e)?e:1,o.dropN}function _(e){return s.biome=e|0,s.biome}function v(e){return Un.includes(e)&&(s.scatter=e),s.scatter}function y(e){return Wn.includes(e)&&(s.entity=e),s.entity}function b(e){let n=t&&t.get(e);return n?n.kind===`material`?_(n.defaults.colorIndex??s.biome):n.kind===`scatter`?v(n.defaults.geoKey):n.kind===`entity`?y(e.replace(`ent-`,``)):null:null}function x(t,n,r){let i=0;for(let a=0;a<r;a++){let r=Math.random()*Math.PI*2,a=Math.sqrt(Math.random())*o.radius;e.placeEntity(s.entity,t+Math.cos(r)*a,n+Math.sin(r)*a)&&i++}return i}function S(t,n,r){if(r<0){e.removeEntityNear(t,n,o.radius),c={x:t,z:n};return}if(o.dropN>1){l&&=(x(t,n,o.dropN),!1);return}(!c||Math.hypot(t-c.x,n-c.z)>=o.radius*.7)&&(e.placeEntity(s.entity,t,n),c={x:t,z:n})}function C(t,n,i){i!==0&&(r===`paint`?e.paintBiome(t,n,s.biome,o.radius):r===`scatter`?e.paintScatter(t,n,{type:s.scatter,density:o.density,radius:o.radius,erase:i<0}):r===`place`?S(t,n,i):r===`sculpt`?e.sculpt(t,n,i,o.radius,o.strength):r===`flow`&&i>0&&e.flowPourAt(t,n,void 0,o.radius))}let w=()=>r!==`select`&&r!==`flow`;function T(){w()&&e.snapshot(),l=!0,c=null}function E(){c=null}function D(e,t){return n?n.pickAt(e,t):null}function O(){return e.undo()}function k(){return e.snapshot()}function A(){return a=!a,e.setScatterHidden&&e.setScatterHidden(a),a}return{get tools(){return Hn},placeKinds:Wn,get tool(){return r},setTool:u,setToolByKey:d,get dir(){return i},get raise(){return i>0},toggleDir:f,brush:o,setRadius:p,setStrength:m,setDensity:h,setDropN:g,get selection(){return{...s}},get material(){return s.biome},get scatterType(){return s.scatter},get entity(){return s.entity},setMaterial:_,setScatter:v,setEntity:y,select:b,applyAt:C,beginStroke:T,endStroke:E,pickAt:D,dropEntities:x,undo:O,snapshot:k,get canUndo(){return e.canUndo},get scatterHidden(){return a},toggleHideScatter:A}}var qn=120;function Jn(e,t){return e.length?e[Math.min(e.length-1,Math.max(0,Math.round(t/100*(e.length-1))))]:0}function Yn({renderer:e}){let t=e.getContext(),n=!1,r=new Float32Array(qn),i=0,a=0,o=0,s=0,c=t.getExtension&&t.getExtension(`EXT_disjoint_timer_query_webgl2`),l=[],u=null,d=null,f=c&&c.TIME_ELAPSED_EXT,p=c&&c.GPU_DISJOINT_EXT,m=null,h=0,g=!1,_={fps:0,cpuMs:{p50:0,p95:0,p99:0},gpuMs:null,info:null,leak:!1,gpuTimer:!!c},v=0,y=typeof performance<`u`?performance.now():0;function b(){n||=(e.info.autoReset=!1,!0),o=performance.now();let r=e.info;_.info={calls:r.render.calls,tris:r.render.triangles,programs:r.programs?r.programs.length:0,geo:r.memory.geometries,tex:r.memory.textures},r.reset(),c&&!u&&(u=t.createQuery(),t.beginQuery(f,u))}function x(){if(r[a]=performance.now()-o+s,a=(a+1)%qn,i<qn&&i++,c&&u&&(t.endQuery(f),l.push(u),u=null),c&&l.length){let e=l[0],n=t.getQueryParameter(e,t.QUERY_RESULT_AVAILABLE),r=t.getParameter(p);(n||r)&&(l.shift(),n&&!r&&(d=t.getQueryParameter(e,t.QUERY_RESULT)/1e6),t.deleteQuery(e))}if(_.info){let e=_.info.geo+_.info.tex;m==null?m=e:e>m+200?(h++,h>300&&(g=!0)):h=Math.max(0,h-2)}v++;let e=performance.now();if(e-y>=1e3){let t=Array.from(r.subarray(0,i)).sort((e,t)=>e-t);_.fps=v,_.cpuMs={p50:+Jn(t,50).toFixed(2),p95:+Jn(t,95).toFixed(2),p99:+Jn(t,99).toFixed(2)},_.gpuMs=d==null?null:+d.toFixed(2),_.leak=g,v=0,y=e,typeof window<`u`&&(window.__fps=_.fps,window.__perf=C())}}function S(){return i?Jn(Array.from(r.subarray(0,i)).sort((e,t)=>e-t),95):0}function C(){return{fps:_.fps,cpuMs:_.cpuMs,gpuMs:_.gpuMs,info:_.info,leak:_.leak,gpuTimer:!!c}}return{frameStart:b,frameEnd:x,sample:C,p95Now:S,get gpuTimerAvailable(){return!!c},forceLoad(e=0){s=Math.max(0,e)}}}var Xn=[{dpr:null,shadows:!0},{dpr:1.5,shadows:!0},{dpr:1,shadows:!0},{dpr:1,shadows:!1},{dpr:.75,shadows:!1}];function Zn({profiler:e,apply:t,targetFps:n=30,strongFps:r=58}={}){let i=1e3/n,a=1e3/r,o=0,s=0,c=0,l=`full`;function u(){let n=e.p95Now();return n<=0||(n>i?(s++,c=0,s>=45&&o<Xn.length-1&&(o++,s=0,l=`p95 ${n.toFixed(1)}ms > ${i.toFixed(0)}ms`,t(o,Xn[o]),d(n))):n<a?(c++,s=0,c>=180&&o>0&&(o--,c=0,l=`p95 ${n.toFixed(1)}ms < ${a.toFixed(0)}ms (headroom)`,t(o,Xn[o]),d(n))):(s=Math.max(0,s-1),c=Math.max(0,c-1))),o}function d(e){typeof window<`u`&&(window.__quality={level:o,of:Xn.length-1,reason:l,p95:+(e||0).toFixed(1)})}return d(0),{update:u,get level(){return o},get reason(){return l},reset(){o=0,s=c=0,l=`full`,t(0,Xn[0]),d(0)}}}function Qn(e){let t=Ze(e>>>0),n=new Uint8Array(256);for(let e=0;e<256;e++)n[e]=e;for(let e=255;e>0;e--){let r=t()*(e+1)|0,i=n[e];n[e]=n[r],n[r]=i}let r=new Uint8Array(512);for(let e=0;e<512;e++)r[e]=n[e&255];let i=e=>e*e*e*(e*(e*6-15)+10),a=(e,t,n)=>e+(t-e)*n,o=(e,t,n)=>{let r=e&4?n:t,i=e&4?t:n;return(e&1?-r:r)+(e&2?-i:i)};return(e,t)=>{let n=Math.floor(e)&255,s=Math.floor(t)&255,c=e-Math.floor(e),l=t-Math.floor(t),u=i(c),d=i(l),f=r[r[n]+s],p=r[r[n]+s+1],m=r[r[n+1]+s],h=r[r[n+1]+s+1];return a(a(o(f,c,l),o(m,c-1,l),u),a(o(p,c,l-1),o(h,c-1,l-1),u),d)}}function $n(e,t,n,r,i,a){let o=.5,s=1,c=0,l=0;for(let u=0;u<r;u++)c+=o*e(t*s,n*s),l+=o,o*=a,s*=i;return c/l}function er(e,t,n,r,i,a){let o=.5,s=1,c=0,l=0;for(let u=0;u<r;u++){let r=1-Math.abs(e(t*s,n*s));r*=r,c+=o*r,l+=o,o*=a,s*=i}return c/l}var tr=(e,t,n)=>(n=Math.max(0,Math.min(1,(n-e)/(t-e))),n*n*(3-2*n)),nr=[{key:`ocean`,color:`#2a5b7a`},{key:`beach`,color:`#d8c89a`},{key:`grassland`,color:`#6f9a4e`},{key:`forest`,color:`#3f6b3a`},{key:`hills`,color:`#8a8a55`},{key:`rock`,color:`#7d7468`},{key:`snow`,color:`#eef2f6`}],rr=Object.fromEntries(nr.map((e,t)=>[e.key,t]));function ir(e,t,n){if(e<n-.015)return rr.ocean;if(e<n+.02)return rr.beach;let r=(e-n)/(1-n);return r>.82?rr.snow:r>.6?rr.rock:r>.34?t>.45?rr.forest:rr.hills:t>.55?rr.forest:rr.grassland}var ar={valley:{freq:2.3,mtnMask:.3,mtnGain:.55,sea:.3,relief:7.5,warp:.9},archipelago:{freq:3.4,mtnMask:.18,mtnGain:.4,sea:.5,relief:6,warp:1.3},mountains:{freq:2,mtnMask:.62,mtnGain:.85,sea:.26,relief:11,warp:.8},plains:{freq:1.8,mtnMask:.12,mtnGain:.3,sea:.28,relief:4.5,warp:.7}},or=Object.keys(ar);function sr({seed:e=1,size:t=160,preset:n=`valley`,params:r=null}={}){let i=r||ar[n]||ar.valley,a=Qn(e*2+1),o=Qn(e*5+9),s=Qn(e*7+13),c=Qn(e*3+5),l=new Float32Array(t*t),u=new Uint8Array(t*t),d=1/0,f=-1/0;for(let e=0;e<t;e++)for(let n=0;n<t;n++){let r=(n/t-.5)*i.freq,p=(e/t-.5)*i.freq,m=r+i.warp*$n(c,r+5.2,p+1.3,4,2,.5),h=p+i.warp*$n(c,r+9.7,p+4.1,4,2,.5),g=$n(a,m,h,6,2,.5)*.5+.5,_=tr(.45,.75,$n(o,r*.5,p*.5,3,2,.5)*.5+.5),v=er(a,m*1.7+11,h*1.7+7,5,2,.5);g=g*(1-_*i.mtnMask)+v*(_*i.mtnMask*(.6+i.mtnGain));let y=n/t-.5,b=e/t-.5,x=Math.sqrt(y*y+b*b)*2;g-=tr(.62,1,x)*.55,g=Math.max(0,Math.min(1,g));let S=$n(s,r*.8+3,p*.8+8,4,2,.5)*.5+.5,C=e*t+n;l[C]=g,u[C]=ir(g,S,i.sea),g<d&&(d=g),g>f&&(f=g)}return{size:t,height:l,biome:u,sea:i.sea,relief:i.relief,minH:d,maxH:f,params:i,seed:e,preset:n}}var cr=nr.map(e=>new N(e.color)),lr=new N,ur=new E,dr=new E,fr=new E;function pr(e,t,n,r,i,a,o,s){let{size:c,height:l,biome:u,sea:d,relief:f}=e,{cell:p,half:m,baseY:h}=t,g=e=>e*p-m,_=e=>e*p-m,v=e=>h+(e-d)*f,y=(e,t)=>{let n=l[t*c+e],r=0,i=0;e>0&&(r+=l[t*c+e-1],i++),e<c-1&&(r+=l[t*c+e+1],i++),t>0&&(r+=l[(t-1)*c+e],i++),t<c-1&&(r+=l[(t+1)*c+e],i++);let a=Math.max(0,(i?r/i:n)-n);return Math.min(.5,a*f*.8)},b=0,x=(e,t,n,c,l,u,d,f,p,m,h,g,_)=>{ur.set(c-e,l-t,u-n),dr.set(d-e,f-t,p-n),fr.crossVectors(ur,dr).normalize();let v=[[e,t,n,h],[c,l,u,g],[d,f,p,_]];for(let[e,t,n,c]of v)r[b*3]=e,r[b*3+1]=t,r[b*3+2]=n,i[b*3]=fr.x,i[b*3+1]=fr.y,i[b*3+2]=fr.z,s&&(a[b*3]=m.r,a[b*3+1]=m.g,a[b*3+2]=m.b),o&&(o[b]=c),b++};for(let e=n.j0;e<n.j1;e++)for(let t=n.i0;t<n.i1;t++){let n=g(t),r=g(t+1),i=_(e),a=_(e+1),o=v(l[e*c+t]),s=v(l[e*c+t+1]),d=v(l[(e+1)*c+t]),f=v(l[(e+1)*c+t+1]),p=y(t,e),m=y(t+1,e),h=y(t,e+1),b=y(t+1,e+1),S=cr[u[e*c+t]],C=cr[u[(e+1)*c+t+1]];x(n,o,i,n,d,a,r,s,i,lr.copy(S),p,h,m),x(r,s,i,n,d,a,r,f,a,lr.copy(C),m,h,b)}}function mr(e,{worldSize:t=26,baseY:n=0,chunks:r=4}={}){let{size:i}=e,o=new p,s={cell:t/(i-1),half:t/2,baseY:n};o.userData.world=s;let c=Math.ceil((i-1)/r);for(let t=0;t<r;t++)for(let n=0;n<r;n++){let r=n*c,l=t*c,u=Math.min(r+c,i-1),d=Math.min(l+c,i-1);if(u<=r||d<=l)continue;let f={i0:r,j0:l,i1:u,j1:d},p=(u-r)*(d-l)*6,m=new Float32Array(p*3),h=new Float32Array(p*3),g=new Float32Array(p*3),_=new Float32Array(p);pr(e,s,f,m,h,g,_,!0);let y=new ne;y.setAttribute(`position`,new D(m,3)),y.setAttribute(`normal`,new D(h,3)),y.setAttribute(`color`,new D(g,3)),y.setAttribute(`aAo`,new D(_,1)),y.computeBoundingSphere();let b=new v(y,Xe(new a({vertexColors:!0,roughness:.92,metalness:0,flatShading:!0})));b.castShadow=!0,b.receiveShadow=!0,b.userData.chunk=f,o.add(b)}return o.userData.dispose=()=>o.traverse(e=>{e.isMesh&&(e.geometry.dispose(),e.material.dispose())}),o}function hr(e,t,n,r=!1){let i=e.userData.world;for(let e of n){let n=e.geometry,a=n.attributes.aAo?n.attributes.aAo.array:null;pr(t,i,e.userData.chunk,n.attributes.position.array,n.attributes.normal.array,n.attributes.color.array,a,r),n.attributes.position.needsUpdate=!0,n.attributes.normal.needsUpdate=!0,a&&(n.attributes.aAo.needsUpdate=!0),r&&(n.attributes.color.needsUpdate=!0),n.computeBoundingSphere()}}var gr={beach:[{type:`rock`,density:.05,maxSlope:1.4}],grassland:[{type:`tree`,density:.1,maxSlope:.7},{type:`tuft`,density:.3,maxSlope:.9}],forest:[{type:`tree`,density:.62,maxSlope:.8},{type:`rock`,density:.03,maxSlope:1.2}],hills:[{type:`tree`,density:.14,maxSlope:.7},{type:`rock`,density:.16,maxSlope:1.6}],rock:[{type:`rock`,density:.22,maxSlope:2}]};function _r({terrain:e,seed:t=1,worldSize:n=26,baseY:r=0,biomeKeys:i,density:a=1,max:o=9e3}={}){let{size:s,height:c,biome:l,sea:u,relief:d}=e,f=Ze((t^97155048)>>>0),p=n/(s-1),m=n/2,h=e=>r+(e-u)*d,g=(e,t)=>{let n=Math.max(1,Math.min(s-2,e)),r=Math.max(1,Math.min(s-2,t)),i=(c[r*s+n+1]-c[r*s+n-1])*d/(2*p),a=(c[(r+1)*s+n]-c[(r-1)*s+n])*d/(2*p);return Math.hypot(i,a)},_={tree:[],rock:[],tuft:[]};for(let e=1;e<s-1;e+=2)for(let t=1;t<s-1;t+=2){let n=e*s+t,r=c[n];if(r<u+.005)continue;let d=gr[i[l[n]]];if(!d)continue;let v=g(t,e);for(let n of d){let i=f();if(v>n.maxSlope||i>n.density*a)continue;let s=_[n.type];if(s.length>=o)continue;let c=(f()-.5)*p*2,l=(f()-.5)*p*2,u=t*p-m+c,d=e*p-m+l;s.push({x:u,y:h(r),z:d,s:.7+f()*.6,r:f()*Math.PI*2,t:.82+f()*.36})}}return{placements:_,counts:{tree:_.tree.length,rock:_.rock.length,tuft:_.tuft.length}}}function vr(e,t){let n=new N(t),r=e.attributes.position.count,i=new Float32Array(r*3),a=new Float32Array(r),o=e.attributes.position.array;for(let e=0;e<r;e++)i[e*3]=n.r,i[e*3+1]=n.g,i[e*3+2]=n.b,a[e]=Math.min(.45,Math.max(0,.42*(1-o[e*3+1]/.55)));return e.setAttribute(`color`,new D(i,3)),e.setAttribute(`aAo`,new D(a,1)),e}function yr(e){let t=0;for(let n of e)t+=n.attributes.position.count;let n=new Float32Array(t*3),r=new Float32Array(t*3),i=new Float32Array(t*3),a=new Float32Array(t),o=0;for(let t of e)n.set(t.attributes.position.array,o*3),r.set(t.attributes.normal.array,o*3),i.set(t.attributes.color.array,o*3),t.attributes.aAo&&a.set(t.attributes.aAo.array,o),o+=t.attributes.position.count;let s=new ne;return s.setAttribute(`position`,new D(n,3)),s.setAttribute(`normal`,new D(r,3)),s.setAttribute(`color`,new D(i,3)),s.setAttribute(`aAo`,new D(a,1)),s}function br(){return yr([vr(new U(.045,.06,.34,6).translate(0,.17,0).toNonIndexed(),`#5b3f28`),vr(new C(.3,.55,7).translate(0,.55,0).toNonIndexed(),`#3f7d3a`),vr(new C(.22,.42,7).translate(0,.85,0).toNonIndexed(),`#4f9046`)])}function xr(){let e=new F(.18,0).toNonIndexed(),t=e.attributes.position,n=Ze(3098);for(let e=0;e<t.count;e++){let r=.78+n()*.5;t.setXYZ(e,t.getX(e)*r,t.getY(e)*r*.8,t.getZ(e)*r)}return e.computeVertexNormals(),vr(e,`#7d7468`)}function Sr(){return vr(new C(.06,.16,4).translate(0,.08,0).toNonIndexed(),`#6f9a4e`)}var Cr=[`tree`,`rock`,`tuft`],wr={tree:0,rock:-.05,tuft:0},Tr=new o,Er=new oe,Dr=new E,Or=new E,kr=new E(0,1,0),Ar=new N;function jr(e){let t=new p;t.raycast=()=>{};let n={tree:br(),rock:xr(),tuft:Sr()};for(let r of Cr){let i=e[r]||(e[r]=[]),o=Math.max(i.length*2,512),s=Xe(new a({vertexColors:!0,roughness:.9,metalness:0,flatShading:!0}),{sway:!0}),c=new f(n[r],s,o);c.count=i.length,c.castShadow=!0,c.receiveShadow=!1,c.frustumCulled=!0,c.raycast=()=>{},c.userData.type=r,c.instanceColor=new d(new Float32Array(o*3),3);for(let e=0;e<i.length;e++)Mr(c,e,i[e],wr[r]);c.instanceMatrix.needsUpdate=!0,c.instanceColor.needsUpdate=!0,t.add(c)}return t.userData.placements=e,t.userData.yoff=wr,t.userData.dispose=()=>t.traverse(e=>{e.isInstancedMesh&&(e.geometry.dispose(),e.material.dispose())}),t}function Mr(e,t,n,r){Dr.set(n.x,n.y+(r||0),n.z),Er.setFromAxisAngle(kr,n.r),Or.setScalar(n.s),e.setMatrixAt(t,Tr.compose(Dr,Er,Or)),e.setColorAt(t,Ar.setScalar(n.t))}var Nr=(e,t)=>e.children.find(e=>e.isInstancedMesh&&e.userData.type===t);function Pr(e,t){let n=t.instanceMatrix.count*2,r=new f(t.geometry,t.material,n);return r.count=t.count,r.castShadow=!0,r.receiveShadow=!1,r.frustumCulled=!0,r.raycast=()=>{},r.userData.type=t.userData.type,r.instanceColor=new d(new Float32Array(n*3),3),r.instanceMatrix.array.set(t.instanceMatrix.array.subarray(0,t.count*16)),r.instanceColor.array.set(t.instanceColor.array.subarray(0,t.count*3)),r.instanceMatrix.needsUpdate=!0,r.instanceColor.needsUpdate=!0,e.remove(t),t.dispose(),e.add(r),r}function Fr(e,t,n,r,i,a,o,s){let c=Nr(e,t);if(!c)return!1;let l=e.userData.placements[t];l.length>=c.instanceMatrix.count&&(c=Pr(e,c));let u=l.length;return l.push({x:n,y:r,z:i,s:a,r:o,t:s}),Mr(c,u,l[u],(e.userData.yoff||{})[t]||0),c.count=l.length,c.instanceMatrix.needsUpdate=!0,c.instanceColor.needsUpdate=!0,!0}function Ir(e,t,n,r,i){let a=t===`all`?Cr:[t],o=i*i,s=0;for(let t of a){let i=Nr(e,t);if(!i)continue;let a=e.userData.placements[t],c=i.instanceMatrix.array,l=i.instanceColor&&i.instanceColor.array;for(let e=a.length-1;e>=0;e--){let t=a[e];if((t.x-n)*(t.x-n)+(t.z-r)*(t.z-r)>o)continue;let i=a.length-1;if(e!==i){a[e]=a[i];for(let t=0;t<16;t++)c[e*16+t]=c[i*16+t];if(l)for(let t=0;t<3;t++)l[e*3+t]=l[i*3+t]}a.pop(),s++}i.count=a.length,i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0)}return s}var Lr={tree:.85,rock:2,tuft:.95};function Rr(e,t,{worldSize:n=26,baseY:r=0}={}){let i=e.userData.placements,a=e.userData.yoff||{};if(!i)return;let{size:s,height:c,sea:l,relief:u}=t,d=n/(s-1),f=n/2,p=e=>e<0?0:e>=s?s-1:e,m=(e,t)=>c[p(Math.round((t+f)/d))*s+p(Math.round((e+f)/d))],h=(e,t)=>{let n=Math.max(1,Math.min(s-2,Math.round((e+f)/d))),r=Math.max(1,Math.min(s-2,Math.round((t+f)/d))),i=(c[r*s+n+1]-c[r*s+n-1])*u/(2*d),a=(c[(r+1)*s+n]-c[(r-1)*s+n])*u/(2*d);return Math.hypot(i,a)},g=new o,_=new oe,v=new E,y=new E,b=new E(0,1,0),x=new N;for(let t of e.children){let e=t.userData.type,n=i[e];if(!n||!t.isInstancedMesh)continue;let o=Lr[e]??1.5,s=t.instanceMatrix.count,c=Math.min(n.length,s);t.count=c;for(let i=0;i<c;i++){let s=n[i],c=m(s.x,s.z),d=c<l+.005||h(s.x,s.z)>o;v.set(s.x,r+(c-l)*u+(a[e]||0),s.z),_.setFromAxisAngle(b,s.r),y.setScalar(d?0:s.s),g.compose(v,_,y),t.setMatrixAt(i,g),t.setColorAt(i,x.setScalar(s.t))}t.instanceMatrix.needsUpdate=!0,t.instanceColor&&(t.instanceColor.needsUpdate=!0)}}function zr({terrain:e,seed:t,worldSize:n,baseY:r,biomeKeys:i,density:a,max:o}){let{placements:s,counts:c}=_r({terrain:e,seed:t,worldSize:n,baseY:r,biomeKeys:i,density:a,max:o}),l=jr(s);return l.userData.counts=c,l}function Br(e,{worldSize:t=26,baseY:n=0,maxLakes:r=3}={}){let{size:i,height:a,sea:o,relief:s,maxH:c}=e,l=Math.floor((i-1)/3),u=t/(i-1),d=t/2,f=(e,t)=>a[t*3*i+e*3],p=e=>e*3*u-d,m=e=>e*3*u-d,h=e=>e>o+.02,g=o+.55*Math.max(.001,c-o),_=[];for(let e=2;e<l-2;e++)for(let t=2;t<l-2;t++){let n=f(t,e);if(!h(n)||n>g)continue;let r=!0;for(let i=-1;i<=1&&r;i++)for(let a=-1;a<=1;a++)if((a||i)&&f(t+a,e+i)<n){r=!1;break}r&&_.push({gi:t,gj:e,h:n})}_.sort((e,t)=>e.h-t.h);let v=new Uint8Array(l*l),y=[];for(let e of _){if(y.length>=r)break;if(v[e.gj*l+e.gi])continue;let t=e.h+.045,i=[[e.gi,e.gj]],a=new Set,c=!0,d=0,h=0,g=0,_=[];for(;i.length;){let[e,n]=i.pop(),r=n*l+e;if(a.has(r))continue;if(a.add(r),e<=0||e>=l-1||n<=0||n>=l-1){c=!1;continue}let s=f(e,n);if(s<o){c=!1;continue}if(!(s>=t)){if(_.push(r),d+=e,h+=n,g++,g>520){c=!1;break}i.push([e+1,n],[e-1,n],[e,n+1],[e,n-1])}}if(!c||g<5)continue;for(let e of _)v[e]=1;let b=d/g,x=h/g,S=3*u,C=g*S*S,w=.82*Math.sqrt(C/Math.PI);y.push({cx:p(b),cz:m(x),y:n+(t-o)*s,radius:w,area:C})}return y}function Vr(e,{material:t}={}){let n=new p;n.raycast=()=>{};let r=t||new a({color:`#3f6f8c`,roughness:.08,metalness:.35,transparent:!0,opacity:.88});for(let t of e){let e=new v(new ce(t.radius,28),r);e.rotation.x=-Math.PI/2,e.position.set(t.cx,t.y+.012,t.cz),e.receiveShadow=!1,e.castShadow=!1,e.raycast=()=>{},n.add(e)}return n.userData.dispose=()=>n.traverse(e=>{e.isMesh&&e.geometry.dispose()}),n.userData.count=e.length,n}function Hr(e,t={}){let n=Br(e,t),r=Vr(n,t);return r.userData.lakes=n,r}function Ur(){let e=new Map,t={register(n){return!n||!n.id?t:(n.art=n.art||{},n.defaults=n.defaults||{},e.set(n.id,n),t)},registerAll(e){for(let n of e)t.register(n);return t},get(t){return e.get(t)},byKind(t){return[...e.values()].filter(e=>e.kind===t)},byGroup(t){return[...e.values()].filter(e=>e.group===t)},all(){return[...e.values()]},setArt(n,r){let i=e.get(n);return i&&(i.art={...i.art,...r}),t},get size(){return e.size}};return t}function Wr(e=Ur()){return nr.forEach((t,n)=>e.register({id:`mat-${t.key}`,label:Gr(t.key),kind:`material`,group:`Terrain`,defaults:{colorIndex:n},art:{icon:t.color,placeholder:!0}})),e.registerAll([{id:`scatter-tree`,label:`Tree`,kind:`scatter`,group:`Vegetation`,defaults:{geoKey:`tree`,density:.4,maxSlope:.85},art:{icon:`🌲`,factory:null,placeholder:!0}},{id:`scatter-rock`,label:`Rock`,kind:`scatter`,group:`Rock`,defaults:{geoKey:`rock`,density:.2,maxSlope:2},art:{icon:`🪨`,factory:null,placeholder:!0}},{id:`scatter-tuft`,label:`Grass tuft`,kind:`scatter`,group:`Vegetation`,defaults:{geoKey:`tuft`,density:.3,maxSlope:.95},art:{icon:`🌱`,factory:null,placeholder:!0}}]),e.registerAll([{id:`ent-person`,label:`Person`,kind:`entity`,group:`Life`,defaults:{medium:`ground`},art:{icon:`🚶`,placeholder:!0}},{id:`ent-car`,label:`Car`,kind:`entity`,group:`Life`,defaults:{medium:`road`},art:{icon:`🚗`,placeholder:!0}},{id:`ent-boat`,label:`Boat`,kind:`entity`,group:`Life`,defaults:{medium:`water`},art:{icon:`⛵`,placeholder:!0}},{id:`ent-fish`,label:`Fish`,kind:`entity`,group:`Life`,defaults:{medium:`water`},art:{icon:`🐟`,placeholder:!0}},{id:`ent-gull`,label:`Gull`,kind:`entity`,group:`Life`,defaults:{medium:`air`},art:{icon:`🕊`,placeholder:!0}},{id:`ent-cloud`,label:`Cloud`,kind:`entity`,group:`Sky`,defaults:{medium:`air`},art:{icon:`☁️`,placeholder:!0}},{id:`ent-atv`,label:`ATV`,kind:`entity`,group:`Vehicles`,defaults:{medium:`ground`,pilotable:!0,roam:`all-terrain`,model:`ground`},art:{icon:`🛻`,placeholder:!0}},{id:`ent-craft`,label:`Spacecraft`,kind:`entity`,group:`Vehicles`,defaults:{medium:`air`,pilotable:!0,roam:`all-medium`,model:`spacecraft`},art:{icon:`🛸`,placeholder:!0}}]),e}var Gr=e=>e.charAt(0).toUpperCase()+e.slice(1);function Kr({scale:e=90}={}){let t=new de;t.scale.setScalar(e),t.frustumCulled=!1,t.raycast=()=>{},t.visible=!1;let n=t.material.uniforms;n.turbidity.value=2.2,n.rayleigh.value=1.3,n.mieCoefficient.value=.005,n.mieDirectionalG.value=.78;function r(e){n.sunPosition.value.copy(e)}function i(e){e&&(e.turbidity!=null&&(n.turbidity.value=e.turbidity),e.rayleigh!=null&&(n.rayleigh.value=e.rayleigh),e.mie!=null&&(n.mieCoefficient.value=e.mie),e.mieG!=null&&(n.mieDirectionalG.value=e.mieG))}let a=null,o=null,s=null,c=null;function l(t){if(typeof document>`u`||!t)return null;a||(a=new le(t),o=new O,s=new de,s.scale.setScalar(e),o.add(s));let r=s.material.uniforms;return r.turbidity.value=n.turbidity.value,r.rayleigh.value=n.rayleigh.value,r.mieCoefficient.value=n.mieCoefficient.value,r.mieDirectionalG.value=n.mieDirectionalG.value,r.sunPosition.value.copy(n.sunPosition.value),c&&c.dispose(),c=a.fromScene(o),c.texture}return{mesh:t,setSun:r,setParams:i,buildEnv:l,get material(){return t.material}}}var qr=`attribute float aSize;
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
}`,Jr=`precision highp float;

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
}`,Yr={realistic:0,charm:0,pixel:2,vector:1},Xr={realistic:1,charm:1,pixel:1.9,vector:1.2};function Zr({seed:e=1517,count:t=340,spreadX:n=21,yLo:r=3,yHi:i=18,zBase:a=7.2}={}){let o=new p;o.raycast=()=>{};let c=Ze(e>>>0),l=new Float32Array(t*3),d=new Float32Array(t),f=new Float32Array(t),m=new Float32Array(t),h=[];for(let e=0;e<t;e++){let t=(c()*2-1)*n,o=r+c()*(i-r),s=-a-c()*.7;l[e*3]=t,l[e*3+1]=o,l[e*3+2]=s;let u=.35+c()*.65;f[e]=u,d[e]=1.6+c()*2.8+(u>.85?2.2:0),m[e]=c()*Math.PI*2,u>.82&&h.push([t,o,s])}let g=new ne;g.setAttribute(`position`,new D(l,3)),g.setAttribute(`aSize`,new D(d,1)),g.setAttribute(`aBright`,new D(f,1)),g.setAttribute(`aPhase`,new D(m,1));let v=new re({vertexShader:qr,fragmentShader:Jr,uniforms:{uTime:{value:0},uTwinkle:{value:1},uSizeScale:{value:1},uColor:{value:new N(`#eaf0ff`)},uNight:{value:0},uMode:{value:0}},transparent:!0,depthWrite:!1,blending:2,fog:!1,toneMapped:!1}),y=new j(g,v);y.raycast=()=>{},y.frustumCulled=!1,o.add(y);let b=[];if(h.length>6)for(let e=0;e<3;e++){let e=Math.floor(c()*h.length);for(let t=0;t<3;t++){let t=h[e],n=h[(e+1+Math.floor(c()*2))%h.length];b.push(t[0],t[1],t[2],n[0],n[1],n[2]),e=(e+1)%h.length}}let x=[[[0,2],[0,0]],[[0,0],[.7,0]],[[2.1,2],[1.4,2]],[[1.4,2],[1.4,0]],[[1.4,0],[2.1,0]],[[2.1,0],[2.1,1]],[[2.1,1],[1.7,1]],[[2.8,0],[2.8,2]],[[2.8,2],[3.5,2]],[[3.5,2],[3.5,1]],[[3.5,1],[2.8,1]],[[2.8,1],[3.6,0]]],S=-a-.4,C=.62;for(let[[e,t],[n,r]]of x)b.push(-3+e*C,12+t*C,S,-3+n*C,12+r*C,S);let w=new ne;w.setAttribute(`position`,new _(b,3));let T=new u(w,new s({color:`#9fb6e8`,transparent:!0,opacity:0,depthWrite:!1,fog:!1,toneMapped:!1}));T.raycast=()=>{},T.frustumCulled=!1,o.add(T);let E=new L(new P({map:Qr(),transparent:!0,opacity:0,depthWrite:!1,blending:2,fog:!1,toneMapped:!1}));E.raycast=()=>{},E.scale.set(n*2.4,n*.95,1),E.position.set(2,12,-a-.7),E.material.rotation=-.5,E.renderOrder=-3,o.add(E);let O=-1;function k(e,t=`realistic`,n=0,r=!1){v.uniforms.uTime.value=n,v.uniforms.uTwinkle.value=+!r,v.uniforms.uNight.value=e;let i=Yr[t]??0;i!==O&&(v.uniforms.uMode.value=i,O=i),v.uniforms.uSizeScale.value=Xr[t]??1,T.material.opacity=e*.5,E.material.opacity=e*.32,o.visible=e>.001}return{group:o,update:k}}function Qr(){let e=document.createElement(`canvas`);e.width=e.height=256;let t=e.getContext(`2d`),n=t.createRadialGradient(256/2,256/2,0,256/2,256/2,256/2);n.addColorStop(0,`rgba(150,170,230,0.5)`),n.addColorStop(.4,`rgba(120,130,200,0.22)`),n.addColorStop(1,`rgba(90,100,160,0)`),t.fillStyle=n,t.fillRect(0,0,256,256);let r=Ze(20145);for(let e=0;e<7;e++){let e=40+r()*176,n=70+r()*116,i=14+r()*30,a=t.createRadialGradient(e,n,0,e,n,i);a.addColorStop(0,`rgba(200,210,255,0.18)`),a.addColorStop(1,`rgba(200,210,255,0)`),t.fillStyle=a,t.beginPath(),t.arc(e,n,i,0,Math.PI*2),t.fill()}let i=new H(e);return i.colorSpace=B,i}var $r=Math.PI*2;function ei(e){let t=document.createElement(`canvas`);t.width=t.height=128;let n=t.getContext(`2d`),r=n.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return r.addColorStop(0,`#ffffff`),r.addColorStop(.34,`#fffaf0`),r.addColorStop(.66,e),r.addColorStop(.86,e),r.addColorStop(1,`rgba(255,255,255,0)`),n.fillStyle=r,n.beginPath(),n.arc(128/2,128/2,128/2,0,$r),n.fill(),ci(t,!0)}function ti(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);n.addColorStop(0,`#ffffff`),n.addColorStop(.4,`#eef3ff`),n.addColorStop(.82,`#c4cee6`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,128/2,0,$r),t.fill(),t.globalAlpha=.14,t.fillStyle=`#8b97b4`;for(let[e,n,r]of[[54,50,9],[78,66,7],[60,82,5]])t.beginPath(),t.arc(e,n,r,0,$r),t.fill();return ci(e,!0)}function ni(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`);t.translate(128/2,128/2),t.fillStyle=`rgba(255,210,120,0.9)`;for(let e=0;e<12;e++)t.rotate($r/12),t.beginPath(),t.moveTo(0,-28),t.lineTo(7,-54),t.lineTo(-7,-54),t.closePath(),t.fill();let n=t.createRadialGradient(0,0,0,0,0,32);return n.addColorStop(0,`#ffffff`),n.addColorStop(.4,`#fff1c8`),n.addColorStop(.8,`#ffb24a`),n.addColorStop(1,`#ff8a2a`),t.fillStyle=n,t.beginPath(),t.arc(0,0,32,0,$r),t.fill(),ci(e,!0)}function ri(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,46);n.addColorStop(0,`#ffffff`),n.addColorStop(.5,`#e6ecfb`),n.addColorStop(1,`#c2cce4`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,46,0,$r),t.fill(),t.fillStyle=`#aab6d2`;for(let[e,n,r]of[[52,48,11],[80,62,8],[58,82,7],[40,66,5]])t.beginPath(),t.arc(e,n,r,0,$r),t.fill();return ci(e,!0)}function ii(e,t,n){let r=document.createElement(`canvas`);r.width=r.height=144;let i=r.getContext(`2d`),a=17/2,o=18/2-.5;for(let r=0;r<18;r++)for(let s=0;s<18;s++){let c=Math.hypot(s-a,r-a);c>o||(i.fillStyle=c<o*.45?e:c<o*.78?t:n,i.fillRect(Math.round(s*8),Math.round(r*8),8,8))}return ci(r,!1)}function ai(e,t,n=!1){let r=document.createElement(`canvas`);r.width=r.height=128;let i=r.getContext(`2d`);if(i.fillStyle=t,i.beginPath(),i.arc(64,64,58,0,$r),i.fill(),i.fillStyle=e,i.beginPath(),i.arc(64,64,50,0,$r),i.fill(),n){i.globalAlpha=.5,i.fillStyle=t;for(let[e,t,n]of[[10,-12,10],[-16,6,7],[4,18,5]])i.beginPath(),i.arc(64+e,64+t,n,0,$r),i.fill()}return ci(r,!0)}function oi(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return n.addColorStop(0,`rgba(255,255,255,0.9)`),n.addColorStop(.38,`rgba(255,255,255,0.3)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,128/2,0,$r),t.fill(),ci(e,!0)}function si(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2),r=`20,30,48`;return n.addColorStop(0,`rgba(${r},0)`),n.addColorStop(.42,`rgba(${r},0)`),n.addColorStop(.6,`rgba(${r},0.6)`),n.addColorStop(1,`rgba(${r},0)`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,128/2,0,$r),t.fill(),ci(e,!0)}function ci(e,t){let n=new H(e);return n.colorSpace=B,t||(n.magFilter=l,n.minFilter=l),n}var li=(e,t,n)=>{let r=Math.max(0,Math.min(1,(e-t)/(n-t)));return r*r*(3-2*r)};function ui({skyW:e=13,skyY0:t=.8,skyH:n=5.5,z:r=-7.8,biasX:i=1,sunSize:a=2.6,moonSize:o=2.4}={}){let s=new p;s.raycast=()=>{};let c=(e,t)=>{let n=new L(new P({map:e,transparent:!0,depthWrite:!1,fog:!1,toneMapped:!1,...t?{blending:2}:{}}));return n.raycast=()=>{},n},l={realistic:ei(`#ffcf8a`),charm:ni(),pixel:ii(`#fff6e0`,`#ffc24a`,`#ff8a2a`),vector:ai(`#ffd24a`,`#ff9a2e`)},u={realistic:ti(),charm:ri(),pixel:ii(`#ffffff`,`#cdd6ee`,`#9aa6c6`),vector:ai(`#e8eefc`,`#b9c6e4`,!0)},d=oi(),f=c(si(),!1),m=c(d,!0),h=c(l.realistic),g=c(d,!0),_=c(u.realistic);f.renderOrder=-2,m.renderOrder=-1,s.add(f,m,h,g,_);let v=Zr({});v.group.renderOrder=-4,s.add(v.group);let y=typeof window<`u`&&window.matchMedia?window.matchMedia(`(prefers-reduced-motion: reduce)`):null,b={realistic:{sunGlow:3,sunGlowOp:.7,moonGlow:2.6,moonGlowOp:.5,sizeMul:1,sunHaloOp:.85},charm:{sunGlow:2.2,sunGlowOp:.55,moonGlow:2.1,moonGlowOp:.42,sizeMul:1.08,sunHaloOp:.7},pixel:{sunGlow:1.7,sunGlowOp:.4,moonGlow:1.7,moonGlowOp:.32,sizeMul:1,sunHaloOp:.6},vector:{sunGlow:1.4,sunGlowOp:.28,moonGlow:1.4,moonGlowOp:.22,sizeMul:1,sunHaloOp:.5}},x=`realistic`;function S(e){e===x||!b[e]||(x=e,h.material.map=l[e],h.material.needsUpdate=!0,_.material.map=u[e],_.material.needsUpdate=!0)}new N;let C=new N(`#fff3df`),w=new N(`#ffb060`),T=new N(`#ff6a2a`),E=new N(`#eef2ff`),D=new N(`#9fbcff`);function O(s,c,l,u,d=`realistic`,p=null){S(d);let O=b[x],k=l.sunArc,A=u?Math.min(1,(u.cloud||0)*.85+(u.fog||0)*.7):0,j=k.y,ee=li(j,-.04,.1)*(1-.7*A),M=1-li(Math.abs(j),.02,.5),N=a*O.sizeMul*(1+.55*M);h.position.set(k.x*e+i,t+k.y*n,r),m.position.copy(h.position),h.scale.setScalar(N),m.scale.setScalar(N*O.sunGlow),h.material.color.copy(C),m.material.color.copy(w).lerp(T,M),h.material.opacity=ee,m.material.opacity=ee*O.sunGlowOp*(.7+.5*M),f.position.copy(h.position),f.scale.setScalar(N*1.7),f.material.opacity=ee*(1-M)*O.sunHaloOp;let P=li(-k.y,-.04,.1)*(1-.65*A),te=o*O.sizeMul;_.position.set(-k.x*e+i,t+-k.y*n,r),g.position.copy(_.position),_.scale.setScalar(te),g.scale.setScalar(te*O.moonGlow),_.material.color.copy(E),g.material.color.copy(D),_.material.opacity=P,g.material.opacity=P*O.moonGlowOp;let F=li(-k.y,-.05,.18)*(1-.85*A);v.update(F,d,c,!!(y&&y.matches)),typeof window<`u`&&(window.__celestial={sun:h.position.toArray(),sunVis:+ee.toFixed(3),moon:_.position.toArray(),moonVis:+P.toFixed(3)})}return{group:s,update:O}}var di=`varying vec2 vUv;

void main() {
  
  
  
  vUv = uv;

  
  
  
  
  
  
  
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,fi=`precision highp float;

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
}`,pi=`precision highp float;

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
}`,mi=`precision highp float;

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
}`,hi=`precision highp float;

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
}`,gi=`const float CA_STRENGTH   = 0.0030;  
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
}`,_i=`const float DITHER = 0.55;   

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
}`,vi=`precision highp float;

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
}`,yi=`precision highp float;

varying vec2 vUv;
uniform sampler2D uToon;   
uniform sampler2D uPixel;  
uniform float     uBlend;  

void main() {
  vec3 t = texture2D(uToon, vUv).rgb;
  vec3 p = texture2D(uPixel, vUv).rgb;
  gl_FragColor = vec4(mix(t, p, uBlend), 1.0);
}`,bi=`varying vec2 vUv;
uniform sampler2D uScene;
uniform float     uThreshold;   

void main() {
  vec3 c = texture2D(uScene, vUv).rgb;
  float l = dot(c, vec3(0.2126, 0.7152, 0.0722));        
  float k = smoothstep(uThreshold, uThreshold + 0.22, l); 
  gl_FragColor = vec4(c * k, 1.0);
}`,xi=`varying vec2 vUv;
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
}`,Si=`precision highp float;

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
}`,Ci={"1-bit":{gridWidth:110,dither:.6,palette:[`#15120c`,`#c8b486`]},gb:{gridWidth:130,dither:.4,palette:[`#0f380f`,`#306230`,`#8bac0f`,`#9bbc0f`]},"8-bit":{gridWidth:160,dither:.55,palette:[`#140c1c`,`#442434`,`#30346d`,`#4e4a4e`,`#854c30`,`#346524`,`#d04648`,`#757161`,`#597dce`,`#d27d2c`,`#8595a1`,`#6daa2c`,`#d2aa99`,`#6dc2ca`,`#dad45e`,`#deeed6`]},"16-bit":{gridWidth:280,dither:.3,palette:`#000000.#222034.#45283c.#663931.#8f563b.#df7126.#d9a066.#eec39a.#fbf236.#99e550.#6abe30.#37946e.#4b692f.#524b24.#323c39.#3f3f74.#306082.#5b6ee1.#639bff.#5fcde4.#cbdbfc.#ffffff.#9badb7.#847e87.#696a6a.#595652.#76428a.#ac3232.#d95763.#d77bba.#8f974a.#8a6f30`.split(`.`)},modern:{gridWidth:460,dither:.6,palette:null}},wi=[`gb`,`8-bit`,`16-bit`,`modern`],Ti={"ink-gold (day)":[`#16100A`,`#3A2F1E`,`#6B563A`,`#937B54`,`#B89968`],"ink-gold (night)":[`#0A0C16`,`#1C2236`,`#3A3A52`,`#5A5A78`,`#8A92B0`],"terminal (day)":[`#050805`,`#0E2912`,`#1E6B2F`,`#3CF06A`,`#FFB000`],"terminal (night)":[`#020604`,`#06180E`,`#10401E`,`#1E9040`,`#7FE0FF`],"neutral (photoreal)":[`#1B1B1E`,`#3D3A3A`,`#5E5750`,`#867C70`,`#A99C8A`,`#C8BCAB`,`#E3DCCF`,`#F5F1E8`],"cool (noir)":[`#0A0E14`,`#16202E`,`#243447`,`#3A536B`,`#5A7D96`,`#86A6BD`,`#B6CDDA`,`#E6EEF2`],"warm (sunset)":[`#190B0A`,`#3B150F`,`#6E2A17`,`#A8421F`,`#DB702F`,`#F2A23E`,`#F9CF76`,`#FDF0C4`],"vibrant (pop)":[`#1A1A2E`,`#E43F5A`,`#F9A826`,`#FFE05D`,`#2EC4B6`,`#3A86FF`,`#8338EC`,`#FFFFFF`],"mono (ink)":[`#0C0C0C`,`#2A2A2A`,`#474747`,`#666666`,`#8A8A8A`,`#B0B0B0`,`#D6D6D6`,`#F5F5F5`]};function Ei(e){let t=Math.max(e.length,1),n=new Float32Array(t*4);e.forEach((e,t)=>{let r=new N(e);n[t*4+0]=r.r,n[t*4+1]=r.g,n[t*4+2]=r.b,n[t*4+3]=1});let r=new me(n,t,1,ue,i);return r.minFilter=l,r.magFilter=l,r.needsUpdate=!0,r}function Di(e,t){let n=[];for(let t=0;t+2<e.length;t+=3)n.push([e[t],e[t+1],e[t+2]]);if(n.length===0)return[`#000000`];let r=e=>{let t=[255,255,255],n=[0,0,0];for(let r of e)for(let e=0;e<3;e++)t[e]=Math.min(t[e],r[e]),n[e]=Math.max(n[e],r[e]);let r=[n[0]-t[0],n[1]-t[1],n[2]-t[2]],i=r[0]>=r[1]&&r[0]>=r[2]?0:r[1]>=r[2]?1:2;return{ax:i,range:r[i]}},i=[n];for(;i.length<t;){let e=-1,t=-1;if(i.forEach((n,i)=>{if(n.length>1){let{range:a}=r(n);a>t&&(t=a,e=i)}}),e<0)break;let n=i[e],{ax:a}=r(n);n.sort((e,t)=>e[a]-t[a]);let o=n.length>>1;i.splice(e,1,n.slice(0,o),n.slice(o))}return i.map(e=>{let t=[0,0,0];for(let n of e)for(let e=0;e<3;e++)t[e]+=n[e];return`#`+t.map(t=>Math.round(t/e.length)).map(e=>e.toString(16).padStart(2,`0`)).join(``)})}var Oi=220,ki={night:[`#0A0C16`,`#1C2236`,`#3A3A52`,`#5A5A78`,`#8A92B0`],dawn:[`#1A1008`,`#43281A`,`#7A4A30`,`#B07A4E`,`#E8A86A`],noon:[`#16100A`,`#3A2F1E`,`#6B563A`,`#937B54`,`#B89968`],dusk:[`#140A0A`,`#3E1E1A`,`#7A3828`,`#B85A36`,`#F0884A`]},Ai={night:[`#020604`,`#06180E`,`#10401E`,`#1E9040`,`#7FE0FF`],dawn:[`#060603`,`#1A2410`,`#3A6B22`,`#6CC040`,`#FFC060`],noon:[`#050805`,`#0E2912`,`#1E6B2F`,`#3CF06A`,`#FFB000`],dusk:[`#080402`,`#241408`,`#6B4A12`,`#E0A030`,`#FF7030`]};function ji(e){if(typeof document>`u`||document.getElementById(`lgr-nowebgl`))return;let t=document.createElement(`div`);t.id=`lgr-nowebgl`,t.style.cssText=`position:fixed;inset:0;z-index:99999;display:flex;align-items:center;justify-content:center;background:#0e1116;color:#cdd6e4;font:16px/1.6 system-ui,-apple-system,sans-serif;text-align:center;padding:2rem;`,t.innerHTML=`<div style="max-width:30rem"><div style="font-size:2.4rem;margin-bottom:1rem">🌊</div><h1 style="font-size:1.3rem;margin:0 0 .6rem;color:#fff;font-weight:600">This experience needs a modern browser</h1><p style="margin:0;color:#9aa6b8">`+e+`</p></div>`,document.body&&document.body.appendChild(t)}function Mi({demo:e=!1,citySeed:n=0,profileIndex:i=0}={}){let o;try{o=new te({antialias:!0,preserveDrawingBuffer:!0})}catch(e){throw ji(`This experience needs WebGL2 — please open it in an up-to-date browser (Chrome, Edge, Firefox, or Safari on iOS 15+) with hardware acceleration enabled.`),e}o.shadowMap.enabled=!0,o.shadowMap.type=1,o.shadowMap.autoUpdate=!1,o.shadowMap.needsUpdate=!0;let s=!!(window.matchMedia&&window.matchMedia(`(pointer: coarse)`).matches),u=s?1.5:2;o.setPixelRatio(Math.min(window.devicePixelRatio,u)),o.setSize(window.innerWidth,window.innerHeight),o.setClearColor(920327,1),document.body.appendChild(o.domElement);let d=o.getDrawingBufferSize(new K),f=!1,p=!1,m=()=>{};o.domElement.addEventListener(`webglcontextlost`,e=>{e.preventDefault(),f=!0,typeof window<`u`&&(window.__contextLost=!0)},!1),o.domElement.addEventListener(`webglcontextrestored`,()=>{m(),f=!1,typeof window<`u`&&(window.__contextLost=!1)},!1);let _=new O;_.fog=new r(10465470,0);let x=new N(`#aeb6c0`),S=.062,C=new N(`#74508f`),w=new N,D=je({aspect:window.innerWidth/window.innerHeight}),k=Ct({t:.5}),A=o.getContext(),j=!!(A&&A.getExtension&&(A.getExtension(`EXT_color_buffer_float`)||A.getExtension(`EXT_color_buffer_half_float`)));!j&&typeof console<`u`&&console.info(`[L90 H1] No float colour buffer (EXT_color_buffer_float/half_float) — wave sim OFF, flat-sea fallback.`);let ee={type:I,format:ue,minFilter:l,magFilter:l,wrapS:ie,wrapT:ie,depthBuffer:!1,stencilBuffer:!1},M=j?[new G(256,256,ee),new G(256,256,ee),new G(256,256,ee)]:null;if(M){for(let e of M)o.setRenderTarget(e),o.clear();o.setRenderTarget(null)}let P=new me(new Uint8Array([0,0,0,255]),1,1,ue);P.needsUpdate=!0;let F=new O,ne=new c(-1,1,1,-1,0,1),L=new re({vertexShader:jn,fragmentShader:pi,uniforms:{uCurr:{value:null},uPrev:{value:null},uTexel:{value:new K(1/256,1/256)},uMouse:{value:new K(-1,-1)},uMouseStrength:{value:0},uC2:{value:.25},uDamping:{value:.992},uRainCount:{value:0},uRainDrops:{value:Array.from({length:8},()=>new E)},uWakeCount:{value:0},uWakeDrops:{value:Array.from({length:8},()=>new E)}}});F.add(new v(new h(2,2),L));let ae=new G(d.x,d.y,{minFilter:g,magFilter:g,depthBuffer:!0,stencilBuffer:!1});function oe(e){let t=document.createElement(`canvas`);t.width=t.height=1024;let n=t.getContext(`2d`);n.fillStyle=e?`#0c1418`:`#15110b`,n.fillRect(0,0,1024,1024),n.strokeStyle=e?`rgba(120,150,170,0.22)`:`rgba(184,153,104,0.30)`,n.lineWidth=2;for(let e=0;e<=1024;e+=64)n.beginPath(),n.moveTo(e,0),n.lineTo(e,1024),n.stroke(),n.beginPath(),n.moveTo(0,e),n.lineTo(1024,e),n.stroke();e||(n.fillStyle=`#B89968`,n.font=`bold 360px Georgia, serif`,n.textAlign=`center`,n.textBaseline=`middle`,n.fillText(`LGR`,512,470),n.font=`600 64px ui-monospace, monospace`,n.fillText(`WEB · STUDIO`,512,720));let r=new H(t);return r.colorSpace=B,r}let se=new v(new h(28,28),new b({map:oe(e)}));se.rotation.x=-Math.PI/2,se.position.y=-.35,_.add(se);let ce=new v(new h(40,24),new re({depthWrite:!1,vertexShader:di,fragmentShader:fi,uniforms:{uTime:{value:0},uInk:{value:k.horizon},uGold:{value:k.sky},uFogColor:{value:w},uFogAmt:{value:0},uFogCharm:Re}}));ce.position.set(0,3,-8),_.add(ce);let R=new re({vertexShader:mi,fragmentShader:hi,uniforms:{uHeight:{value:j?null:P},uScene:{value:ae.texture},uTexel:{value:new K(1/256,1/256)},uResolution:{value:new K(d.x,d.y)},uDisplace:{value:.42},uNormalStrength:{value:22},uRefractStrength:{value:.06},uChromaScale:{value:1},uNormalMatrix:{value:new y},uLightDir:{value:k.sunDir},uInk:{value:new N(`#2A2218`)},uGold:{value:new N(`#B89968`)},uVector:Me,uVecWater:{value:new N(`#1fb8d8`)},uVecTint:{value:Ne}}}),le=new v(new h(28,28,255,255),R);le.rotation.x=-Math.PI/2,le.updateMatrixWorld(!0),R.uniforms.uNormalMatrix.value.getNormalMatrix(le.matrixWorld),_.add(le);let z={value:0},de=Xt({windowGlow:z}),V=ht({seed:n,profileIndex:i,landmarkFactory:de,windowGlow:z});_.add(V.group);let fe=Ot({plinthTop:.3,extent:V.extent,profile:V.state.profile});_.add(fe.group);let U=zt({extent:V.extent,waterSize:28,plinthTop:.3});_.add(U.group),L.uniforms.uWakeDrops.value=U.wakeDrops;let W=Qt({extent:V.extent});_.add(W.group),L.uniforms.uRainDrops.value=W.rainDrops;let pe=en({extent:V.extent});_.add(pe.group);let he=[fe,U,pe],ge=rn({rig:D,getCamera:()=>D.camera,sources:he}),_e=ui();_.add(_e.group);let ve=Kr({scale:90});_.add(ve.mesh),_.environmentIntensity=.32;let ye=!1;function be(e){let t=e&&k.sunArc.y>-.04;t!==ye&&(ye=t,ve.mesh.visible=t,ce.visible=!t)}let xe=null,Se=-1;m=()=>{xe=null,Se=-1,o.shadowMap.needsUpdate=!0};function Ce(){let e=Math.floor(k.t%1*4)%4;return(e!==Se||!xe)&&(Se=e,xe=ve.buildEnv(o)),xe}let q=null,J=null,we=null,Y=null,Te=!1,Ee=1234,X=`valley`,De=nr.map(e=>e.key),Oe=new a({color:`#3f6f8c`,roughness:.07,metalness:.4,transparent:!0,opacity:.9}),ke=()=>[V.group,fe.group,U.group],Ae=()=>[q,J,we].filter(Boolean);function Be(){for(let e of Ae())_.remove(e),e.userData.dispose?.();let e=sr({seed:Ee,size:160,preset:X});Y=e,q=mr(e,{worldSize:26,baseY:0,chunks:6}),J=zr({terrain:e,seed:Ee,worldSize:26,baseY:0,biomeKeys:De}),we=Hr(e,{worldSize:26,baseY:0,maxLakes:3,material:Oe});for(let e of Ae())e.visible=Te,_.add(e);Ue!==void 0&&Ue&&Ue.clear(),Z!==void 0&&Z&&Z.clear(),typeof window<`u`&&(window.__world={seed:Ee,preset:X,active:Te,chunks:q.children.length,scatter:J.userData.counts,lakes:we.userData.count})}let Ve=e=>{for(let t of Ae())t.visible=e};function He(e,t){if(!Y)return 0;let{size:n,height:r,sea:i,relief:a}=Y,o=26/(n-1),s=Math.round((e+13)/o),c=Math.round((t+13)/o),l=s<0?0:s>=n?n-1:s;return(r[(c<0?0:c>=n?n-1:c)*n+l]-i)*a}let Ue=kn({heightAt:He,seaSurfaceY:0,waterY:.06});Ue.group.visible=!1,_.add(Ue.group),he.push(Ue);let We=0;function Ge(e,t){if(!Y||!q)return;let{size:n,height:r,relief:i}=Y,a=26/(n-1),o=26/(t-1),s=i>1e-6?1/i:0,c=!1;for(let i=0;i<t;i++)for(let l=0;l<t;l++){let u=e[i*t+l];if(u===0)continue;c=!0;let d=u*s,f=l*o/a,p=i*o/a,m=Math.max(0,Math.round(f-1)),h=Math.min(n-1,Math.round(f+1)),g=Math.max(0,Math.round(p-1)),_=Math.min(n-1,Math.round(p+1));for(let e=g;e<=_;e++)for(let t=m;t<=h;t++){let i=e*n+t,a=r[i]+d;r[i]=a<0?0:a>1?1:a}}c&&(We++,We%8==0&&hr(q,Y,q.children),We%24==0&&J&&Rr(J,Y,{worldSize:26,baseY:0}))}function Ke(e,t){if(!Y||!q)return;let{size:n,height:r,relief:i}=Y,a=i>1e-6?1/i:0,o=(t-1)/(n-1),s=!1;for(let i=0;i<n;i++){let c=i*o,l=Math.floor(c),u=c-l,d=Math.min(t-1,l+1);for(let c=0;c<n;c++){let f=c*o,p=Math.floor(f),m=f-p,h=Math.min(t-1,p+1),g=e[l*t+p],_=e[l*t+h],v=e[d*t+p],y=e[d*t+h],b=(g*(1-m)+_*m)*(1-u)+(v*(1-m)+y*m)*u;if(b!==0){s=!0;let e=i*n+c,t=r[e]+b*a;r[e]=t<0?0:t>1?1:t}}}s&&(hr(q,Y,q.children),J&&Rr(J,Y,{worldSize:26,baseY:0}))}let Z=Bn({worldHeightAt:He,applyErosion:Ge,syncErodedTerrain:Ke,worldSize:26,grid:96,seaY:0,renderer:o});Z.group.visible=!1,_.add(Z.group);let Xe=Vn({extent:26,count:s?500:2e3});Xe.group.visible=!1,_.add(Xe.group);let Ze=null,Qe=!1,$e=new Set;function et(){!Y||!we||(_.remove(we),we.userData.dispose?.(),we=Hr(Y,{worldSize:26,baseY:0,maxLakes:3,material:Oe}),we.visible=Te&&!Qe,_.add(we),window.__world&&(window.__world.lakes=we.userData.count))}function tt(){et(),J&&Rr(J,Y,{worldSize:26,baseY:0})}function nt(e,t,n=1,r=2.2,i=.05){if(!Y||!q)return;let a=Y.size,o=26/(a-1),s=(e+13)/o,c=(t+13)/o,l=r/o,u=Math.max(0,Math.floor(s-l)),d=Math.min(a-1,Math.ceil(s+l)),f=Math.max(0,Math.floor(c-l)),p=Math.min(a-1,Math.ceil(c+l)),m=Y.height,h=l*.5*2*(l*.5);for(let e=f;e<=p;e++)for(let t=u;t<=d;t++){let r=(t-s)*(t-s)+(e-c)*(e-c);if(r>l*l)continue;let o=m[e*a+t]+n*i*Math.exp(-r/h);m[e*a+t]=o<0?0:o>1?1:o}$e.clear();for(let e of q.children){let t=e.userData.chunk;t&&t.i0<=d&&t.i1>=u-1&&t.j0<=p&&t.j1>=f-1&&$e.add(e)}hr(q,Y,$e),Ze&&clearTimeout(Ze),Ze=setTimeout(tt,140)}function rt(e,t,n,r=2.2){if(!Y||!q||n==null)return;let i=Y.size,a=26/(i-1),o=(e+13)/a,s=(t+13)/a,c=r/a,l=c*c,u=Math.max(0,Math.floor(o-c)),d=Math.min(i-1,Math.ceil(o+c)),f=Math.max(0,Math.floor(s-c)),p=Math.min(i-1,Math.ceil(s+c)),m=Y.biome;for(let e=f;e<=p;e++)for(let t=u;t<=d;t++)(t-o)*(t-o)+(e-s)*(e-s)<=l&&(m[e*i+t]=n);$e.clear();for(let e of q.children){let t=e.userData.chunk;t&&t.i0<=d&&t.i1>=u-1&&t.j0<=p&&t.j1>=f-1&&$e.add(e)}hr(q,Y,$e,!0)}let it=[`tree`,`rock`,`tuft`];function at(e,t,{type:n=`tree`,density:r=.5,radius:i=2.2,erase:a=!1}={}){if(!Y||!J)return 0;if(a)return Ir(J,n||`all`,e,t,i);let o=Y.size,s=26/(o-1),c=Y.height,l=Y.sea,u=Y.relief,d=e=>e<0?0:e>=o?o-1:e,f=(e,t)=>c[d(Math.round((t+13)/s))*o+d(Math.round((e+13)/s))],p=(e,t)=>{let n=Math.max(1,Math.min(o-2,Math.round((e+13)/s))),r=Math.max(1,Math.min(o-2,Math.round((t+13)/s))),i=(c[r*o+n+1]-c[r*o+n-1])*u/(2*s),a=(c[(r+1)*o+n]-c[(r-1)*o+n])*u/(2*s);return Math.hypot(i,a)},m=Lr[n]??1.2,h=Math.max(1,Math.round((r||.5)*6)),g=0;for(let r=0;r<h;r++){let r=Math.random()*Math.PI*2,a=Math.sqrt(Math.random())*i,o=e+Math.cos(r)*a,s=t+Math.sin(r)*a,c=f(o,s);if(c<l+.005||p(o,s)>m)continue;let d=(c-l)*u;Fr(J,n,o,d,s,.7+Math.random()*.6,Math.random()*Math.PI*2,.82+Math.random()*.36)&&g++}if(window.__world&&J.userData.counts)for(let e of it)J.userData.counts[e]=(J.userData.placements[e]||[]).length;return g}let ot=[];function st(){if(!J)return null;let e=J.userData.placements,t={};for(let n of it)t[n]=(e[n]||[]).map(e=>({...e}));return t}function ct(){Y&&(ot.push({h:Y.height.slice(),b:Y.biome.slice(),sc:st(),pl:Ue.snapshot()}),ot.length>12&&ot.shift())}function lt(){if(!Y||!ot.length)return!1;let e=ot.pop();if(Y.height.set(e.h),Y.biome.set(e.b),e.sc&&J){let t=J.userData.placements;for(let n of it)t[n]=(e.sc[n]||[]).map(e=>({...e}))}return e.pl&&Ue.restore(e.pl),hr(q,Y,q.children,!0),tt(),!0}let ut=new Set([`boat`,`fish`]),dt=new Set([`person`,`atv`]);function ft(e,t,n){if(!Y)return null;let r=He(t,n)<0;return ut.has(e)&&!r||dt.has(e)&&r?null:Ue.spawn(e,t,n)}function pt(e,t,n=2.5){return Ue.removeNear(e,t,n)}function mt(e){let t=``,n=32768;for(let r=0;r<e.length;r+=n)t+=String.fromCharCode.apply(null,e.subarray(r,Math.min(r+n,e.length)));return btoa(t)}function gt(e){let t=atob(e),n=new Uint8Array(t.length);for(let e=0;e<t.length;e++)n[e]=t.charCodeAt(e);return n}let _t=e=>mt(new Uint8Array(e.buffer,e.byteOffset,e.byteLength)),vt=e=>mt(e);function yt(){let e=J?J.userData.placements:{},t={};for(let n of it)t[n]=(e[n]||[]).map(e=>({...e}));return t}function bt(){return Y?{v:1,seed:Ee,preset:X,size:Y.size,height:_t(Y.height),biome:vt(Y.biome),scatter:yt(),entities:Ue.snapshot()}:null}function xt(){if(!Y)return null;let e=sr({seed:Ee,size:160,preset:X}),t=Y.height,n=Y.biome,r=[],i=[];for(let n=0;n<t.length;n++)Math.abs(t[n]-e.height[n])>1e-6&&r.push(n,Math.round(t[n]*1e4)/1e4);for(let t=0;t<n.length;t++)n[t]!==e.biome[t]&&i.push(t,n[t]);return{v:1,c:1,seed:Ee,preset:X,hd:r,bd:i,entities:Ue.snapshot()}}function St(e){J&&(_.remove(J),J.userData.dispose?.()),J=jr(e||{tree:[],rock:[],tuft:[]}),J.userData.counts=it.reduce((e,t)=>(e[t]=(J.userData.placements[t]||[]).length,e),{}),J.visible=Te,_.add(J)}function wt(e){if(!e||e.v!==1)return!1;let t=25600;if(e.height!=null||e.biome!=null){if(typeof e.height!=`string`||typeof e.biome!=`string`)return!1;let n,r;try{n=gt(e.height),r=gt(e.biome)}catch{return!1}if(n.byteLength%4!=0||n.byteLength>>2!=t||r.length<t)return!1;let i=new Float32Array(n.buffer,n.byteOffset,n.byteLength>>2);for(let e=0;e<i.length;e++)if(!Number.isFinite(i[e]))return!1}if(e.hd!=null&&!Array.isArray(e.hd)||e.bd!=null&&!Array.isArray(e.bd))return!1;if(Array.isArray(e.hd))for(let n=0;n<e.hd.length;n+=2){let r=e.hd[n];if(!Number.isInteger(r)||r<0||r>=t||!Number.isFinite(e.hd[n+1]))return!1}if(Array.isArray(e.bd))for(let n=0;n<e.bd.length;n+=2){let r=e.bd[n];if(!Number.isInteger(r)||r<0||r>=t)return!1}Ee=e.seed|0,X=or.includes(e.preset)?e.preset:X,ot.length=0,Be(),Te=!0,Ve(!0),Ue.group.visible=!0,Z.group.visible=!0,Xe.group.visible=!0;for(let e of ke())e.visible=!1;window.__world&&(window.__world.active=!0);let n=e=>e<0?0:e>1?1:e,r=nr.length;if(e.height&&e.biome){let t=gt(e.height),i=new Float32Array(t.buffer,t.byteOffset,t.byteLength>>2);for(let e=0;e<i.length;e++)Y.height[e]=n(i[e]);let a=gt(e.biome);for(let e=0;e<Y.biome.length;e++)Y.biome[e]=Math.min(r-1,a[e]|0)}else if(e.hd||e.bd){let t=e.hd||[],i=e.bd||[];for(let e=0;e<t.length;e+=2)Y.height[t[e]]=n(t[e+1]);for(let e=0;e<i.length;e+=2)Y.biome[i[e]]=Math.min(r-1,Math.max(0,i[e+1]|0))}return hr(q,Y,q.children,!0),e.scatter&&St(e.scatter),et(),J&&Rr(J,Y,{worldSize:26,baseY:0}),Ue.restore(e.entities),window.__world&&(window.__world.scatter=J.userData.counts,window.__world.seed=Ee,window.__world.preset=X),!0}let Tt={enter(){q||Be(),Te=!0,Ve(!0),Ue.group.visible=!0,Z.group.visible=!0,Xe.group.visible=!0;for(let e of ke())e.visible=!1;window.__world&&(window.__world.active=!0)},exit(){Qe=!1,Te=!1,Ve(!1),Ue.group.visible=!1,Z.group.visible=!1,Xe.group.visible=!1;for(let e of ke())e.visible=!0;window.__world&&(window.__world.active=!1)},setEditing(e){return Qe=!!e,le.visible=Te&&!Qe,we&&(we.visible=Te&&!Qe),Z.group.visible=Te&&!Qe,!Qe&&Te&&et(),Qe},get editing(){return Qe},get waterHidden(){return Qe&&!le.visible},reroll(){return Ee=Math.random()*1e9|0,ot.length=0,Be(),Tt.enter(),Ee},reset(){return ot.length=0,Be(),Tt.enter(),Ee},setPreset(e){return or.includes(e)&&(X=e,ot.length=0,Be(),Tt.enter()),X},sculpt:nt,paintBiome:rt,paintScatter:at,repoolWater:et,snapshot:ct,undo:lt,placeEntity:ft,removeEntityNear:pt,heightAt:He,serialize:bt,serializeCompact:xt,deserialize:wt,flowPourAt:(e,t,n,r)=>Z.pourAt(e,t,n,r),flowRain:e=>Z.rain(e),flowClear:()=>Z.clear(),get flowTotal(){return Z.totalWater()},flowAt:(e,t)=>Z.cellAt(e,t),flowErosion:(e,t)=>Z.setErosion(e,t),get flowErosionOn(){return Z.erosion},get flowSediment(){return Z.totalSediment()},setSimBackend:e=>Z.setBackend(e),get simBackend(){return Z.backend},_flowReadW:()=>Z._debugReadW(),_flowReadTerr:()=>Z._debugReadTerr(),_flowStepN:(e,t)=>Z._debugStepN(e,t),get terrainGroup(){return q},get biomes(){return nr},get scatterCounts(){return J?J.userData.placements&&it.reduce((e,t)=>(e[t]=(J.userData.placements[t]||[]).length,e),{}):null},get placedCounts(){return Ue.counts()},setScatterHidden(e){J&&(J.visible=!e)},get placedLife(){return Ue},get canUndo(){return ot.length>0},get active(){return Te},get seed(){return Ee},get preset(){return X},get presets(){return or}},Et=Wr(),Dt=Kn({world:Tt,catalog:Et,inspector:ge});function kt(e,t){return He(e,t)<0?0:-999}let At=gn({rig:D,world:{heightAt:He,waterHeightAt:kt}});V.group.remove(V.key),_.add(V.key),V.key.castShadow=!0,V.key.shadow.mapSize.set(2048,2048),V.key.shadow.bias=-18e-5,V.key.shadow.normalBias=.028,_.add(V.key.target);function jt(){let e=V.key.shadow.camera,t=V.extent+4.5;e.left=-t,e.right=t,e.top=t,e.bottom=-t,e.near=1,e.far=48,e.updateProjectionMatrix(),o.shadowMap.needsUpdate=!0}jt();let Mt=new T(d.x,d.y),Nt=new G(d.x,d.y,{minFilter:g,magFilter:g,depthBuffer:!0,stencilBuffer:!1,depthTexture:Mt}),Pt=new G(d.x,d.y,{minFilter:g,magFilter:g,depthBuffer:!1,stencilBuffer:!1}),Ft=new G(d.x,d.y,{minFilter:g,magFilter:g,depthBuffer:!0,stencilBuffer:!1,samples:4}),It=new G(d.x,d.y,{minFilter:g,magFilter:g,depthBuffer:!1,stencilBuffer:!1}),Lt=new G(d.x,d.y,{minFilter:g,magFilter:g,depthBuffer:!1,stencilBuffer:!1}),Rt=Math.max(1,Math.floor(d.x/2)),Bt=Math.max(1,Math.floor(d.y/2)),Vt=new G(Rt,Bt,{minFilter:g,magFilter:g,depthBuffer:!1,stencilBuffer:!1}),Ht=new G(Rt,Bt,{minFilter:g,magFilter:g,depthBuffer:!1,stencilBuffer:!1}),Q=new O,Ut=new c(-1,1,1,-1,0,1),Wt=new v(new h(2,2));Q.add(Wt);let $=new re({vertexShader:jn,fragmentShader:gi,uniforms:{uScene:{value:Nt.texture},uTime:{value:0},uResolution:{value:new K(d.x,d.y)},uGrain:{value:1},uChroma:{value:1},uExposure:{value:1},uAces:{value:0},uBloom:{value:Vt.texture},uBloomStrength:{value:0},uGrade:{value:0},uGradeTint:{value:k.grade.tint},uGradeLift:{value:k.grade.lift},uGradeSat:{value:1},uGradeContrast:{value:1},uDither:{value:0},uTonemap:{value:0}}}),Gt=new re({vertexShader:jn,fragmentShader:bi,uniforms:{uScene:{value:Nt.texture},uThreshold:{value:.78}}}),Kt=new re({vertexShader:jn,fragmentShader:xi,uniforms:{uScene:{value:Vt.texture},uDir:{value:new K}}});function qt(e){Gt.uniforms.uScene.value=e.texture,sn(Gt,Vt),Kt.uniforms.uScene.value=Vt.texture,Kt.uniforms.uDir.value.set(1.6/Rt,0),sn(Kt,Ht),Kt.uniforms.uScene.value=Ht.texture,Kt.uniforms.uDir.value.set(0,1.6/Bt),sn(Kt,Vt),$.uniforms.uBloom.value=Vt.texture;let n=1-t.clamp(k.sunArc.y*2.2,0,1);$.uniforms.uBloomStrength.value=.85*(.32+.95*n)}let Jt=e=>{let t=e.map(e=>new N(e));for(;t.length<8;)t.push(new N(0,0,0));return t},Yt=[`night`,`dawn`,`noon`,`dusk`],Zt={inkgold:Yt.map(e=>Jt(ki[e])),terminal:Yt.map(e=>Jt(Ai[e]))},$t=new re({vertexShader:jn,fragmentShader:_i,uniforms:{uScene:{value:Pt.texture},uResolution:{value:new K(d.x,d.y)},uPixelSize:{value:Oi},uPalette:{value:Zt.inkgold[2]},uPaletteB:{value:Zt.inkgold[2]},uPaletteBlend:{value:0},uPaletteSize:{value:5}}}),tn=new re({vertexShader:jn,fragmentShader:Si,uniforms:{uScene:{value:Pt.texture},uResolution:{value:new K(d.x,d.y)},uGridWidth:{value:160},uDither:{value:.55},uPalette:{value:Ei(Ci[`8-bit`].palette)},uPaletteSize:{value:1},uUsePalette:{value:1}}}),nn={};for(let e of wi)nn[e]=Ci[e].palette?Ei(Ci[e].palette):null;let an=new re({vertexShader:jn,fragmentShader:vi,uniforms:{uScene:{value:Pt.texture},uDepth:{value:Mt},uResolution:{value:new K(d.x,d.y)},uBands:{value:4},uToonGain:{value:1.7},uToonGamma:{value:.6},uToonFloor:{value:k.toonFloor},uOutline:{value:k.outline},uNear:{value:.1},uFar:{value:100},uIsPerspective:{value:1}}}),on=new re({vertexShader:jn,fragmentShader:yi,uniforms:{uToon:{value:It.texture},uPixel:{value:Lt.texture},uBlend:{value:0}}});function sn(e,t){Wt.material=e,o.setRenderTarget(t),o.render(Q,Ut)}function cn(){D.setViewport(window.innerWidth,window.innerHeight),o.setSize(window.innerWidth,window.innerHeight);let e=o.getDrawingBufferSize(new K);return ae.setSize(e.x,e.y),Nt.setSize(e.x,e.y),Pt.setSize(e.x,e.y),Ft.setSize(e.x,e.y),It.setSize(e.x,e.y),Lt.setSize(e.x,e.y),Rt=Math.max(1,e.x>>1),Bt=Math.max(1,e.y>>1),Vt.setSize(Rt,Bt),Ht.setSize(Rt,Bt),R.uniforms.uResolution.value.set(e.x,e.y),$.uniforms.uResolution.value.set(e.x,e.y),$t.uniforms.uResolution.value.set(e.x,e.y),tn.uniforms.uResolution.value.set(e.x,e.y),an.uniforms.uResolution.value.set(e.x,e.y),e}let ln=Yn({renderer:o}),un=!0;function dn(e,t){let n=t.dpr==null?u:t.dpr,r=Math.min(window.devicePixelRatio,n);Math.abs(o.getPixelRatio()-r)>.001&&(o.setPixelRatio(r),typeof window<`u`&&window.dispatchEvent?window.dispatchEvent(new Event(`resize`)):cn()),un=t.shadows!==!1,un||(o.shadowMap.needsUpdate=!1)}let fn=Zn({profiler:ln,apply:dn});function pn(){!p&&!f&&ln.frameStart()}function mn(){p||f||(ln.frameEnd(),fn.update())}function hn(e){p=!e,typeof window<`u`&&(window.__paused=p)}function _n(){try{o.compile(_,D.camera),Hn(1/60,0,{shadowsOn:!0}),In(Ln(),Nt),o.setRenderTarget(null)}catch(e){typeof console<`u`&&console.warn(`[L79] prewarm`,e)}}let vn=3,yn=!1,bn=!1,xn=`native`,Sn=.3,Cn=.46,wn=[`native`,...wi],Tn={"16-bit":`16-bit`,"8-bit":`8-bit`,gb:`Game Boy`,modern:`Modern`,native:`Pixel`,"1-bit":`1-bit`};typeof window<`u`&&(window.__mode=vn,window.__vector=yn,window.__era=xn),typeof window<`u`&&(window.__frames=0),typeof window<`u`&&(window.__loaded=!1);let En=0,Dn=new E(1,1,1),On=!1;function An(e){let t=bn?Zt.terminal:Zt.inkgold,n=e%1*4,r=Math.floor(n)%4;$t.uniforms.uPalette.value=t[r],$t.uniforms.uPaletteB.value=t[(r+1)%4],$t.uniforms.uPaletteBlend.value=n-Math.floor(n)}function Mn(e){let t=Ci[e];t&&(tn.uniforms.uGridWidth.value=t.gridWidth,tn.uniforms.uDither.value=t.dither,tn.uniforms.uUsePalette.value=+!!t.palette,t.palette&&(tn.uniforms.uPalette.value=nn[e],tn.uniforms.uPaletteSize.value=t.palette.length))}function Nn(){xn!==`native`&&Mn(xn)}let Pn=()=>xn===`native`?$t:tn;function Fn(e,t){be(!0),_.environment=Ce(),qe.value=1,le.visible=!1,o.setRenderTarget(ae),o.render(_,e),le.visible=!0,o.setRenderTarget(Ft),o.render(_,e),qt(Ft),$.uniforms.uScene.value=Ft.texture,$.uniforms.uAces.value=1,$.uniforms.uGrade.value=1,$.uniforms.uGrain.value=0,$.uniforms.uChroma.value=0,$.uniforms.uDither.value=1,sn($,t)}function In(e,t){let n=!yn&&(vn===1||vn===2);if(be(n),_.environment=n?Ce():null,qe.value=+!!n,$.uniforms.uBloomStrength.value=0,le.visible=!1,o.setRenderTarget(ae),o.render(_,D.camera),le.visible=!Qe,vn===1&&!n)o.setRenderTarget(t),o.render(_,D.camera);else if(vn===1)o.setRenderTarget(Ft),o.render(_,D.camera),qt(Ft),$.uniforms.uScene.value=Ft.texture,$.uniforms.uAces.value=1,$.uniforms.uGrade.value=1,$.uniforms.uGrain.value=0,$.uniforms.uChroma.value=0,$.uniforms.uDither.value=1,sn($,t);else if(o.setRenderTarget(n?Ft:Nt),o.render(_,D.camera),vn===2)n&&qt(Ft),$.uniforms.uScene.value=n?Ft.texture:Nt.texture,$.uniforms.uAces.value=+!!n,$.uniforms.uGrade.value=+!!n,$.uniforms.uGrain.value=1,$.uniforms.uChroma.value=1,$.uniforms.uDither.value=+!!n,sn($,t);else{$.uniforms.uScene.value=Nt.texture,$.uniforms.uAces.value=0,$.uniforms.uGrade.value=0,$.uniforms.uGrain.value=0,$.uniforms.uChroma.value=0,$.uniforms.uDither.value=0,sn($,Pt);let n=D.camera;an.uniforms.uNear.value=n.near,an.uniforms.uFar.value=n.far,an.uniforms.uIsPerspective.value=+!!n.isPerspectiveCamera;let r=e.era?(Mn(e.era),tn):Pn();e.kind===`pixel`?(sn(r,t),window.__style=`pixel`):e.kind===`toon`?(sn(an,t),window.__style=`toon`):(sn(an,It),sn(r,Lt),on.uniforms.uBlend.value=e.blend,sn(on,t),window.__style=`blend`)}}function Ln(){let e=Rn(),n=e.kind===`toon`?1:e.kind===`blend`?1-e.blend:0;return R.uniforms.uChromaScale.value=t.lerp(1,.5,n),e}function Rn(){if(vn===1||vn===2)return{kind:`none`};if(vn===7)return{kind:`pixel`};if(vn===8)return{kind:`toon`};let e=D.styleT;return window.__styleT=e,e<=Sn?{kind:`toon`}:e>=Cn?{kind:`pixel`,era:e<.62?`16-bit`:e<.8?`8-bit`:`gb`}:{kind:`blend`,blend:t.smoothstep(e,Sn,Cn),era:`16-bit`}}function zn(e){return vn===1||vn===2?``:yn&&vn!==7&&vn!==8?`Vector`:e.kind===`toon`?`Toon`:e.kind===`pixel`?Tn[e.era||xn]||`Pixel`:e.kind===`blend`?`Toon → `+(Tn[e.era]||`Pixel`):``}function Hn(e,n,{shadowsOn:r=!0,seasonTarget:i=0}={}){typeof window<`u`&&window.__frames++,r&&=un,ce.material.uniforms.uTime.value=n,$.uniforms.uTime.value=n,k.update(e),V.key.position.copy(k.sunDir).multiplyScalar(24),V.key.color.copy(k.sunColor),V.key.intensity=k.sunIntensity,V.fill.color.copy(k.hemiSky),V.fill.groundColor.copy(k.hemiGround),z.value=k.windowGlow,ve.setSun(k.sunArc),ve.setParams(k.skyParams),$.uniforms.uGradeSat.value=k.grade.sat,$.uniforms.uGradeContrast.value=k.grade.contrast,_.environmentIntensity=.34*(1-.6*t.clamp(k.sunArc.y*1.5,0,1));let a=W.overcast;V.key.intensity*=1-.5*a,V.key.color.lerp(x,.45*a),V.fill.intensity=1+.7*a;let s=t.smoothstep(k.sunDir.y,.06,.34),c=t.lerp(.28,1,1-k.windowGlow),l=r?s*c:0;V.key.shadow.intensity=.72*l,Pe.value=.52*l,(r&&!On||Dn.distanceToSquared(k.sunDir)>2e-5)&&(o.shadowMap.needsUpdate=!0,Dn.copy(k.sunDir)),On=r;let u=1-k.windowGlow;Ne.setRGB(t.lerp(.46,1,u),t.lerp(.52,1,u),t.lerp(.74,1,u)),$.uniforms.uExposure.value=k.exposure,an.uniforms.uToonGain.value=k.toonGain,o.setClearColor(k.horizon,1),An(k.t),window.__t=k.t,fe.update(e,n,k),V.update(n),U.update(e,n,k),L.uniforms.uWakeCount.value=U.wakeCount,W.update(e,n),L.uniforms.uRainCount.value=W.rainDropCount;let d=W.fog*(1-u);_.fog.density=.016+W.fog*S,w.copy(k.horizon).lerp(C,.85*d),_.fog.color.copy(w),o.setClearColor(w,1),Re.value=W.fog,ce.material.uniforms.uFogAmt.value=.7*W.fog,Fe.value=W.snow,Ie.value=W.cloud*.55,Le.x+=e*.018,Le.y+=e*.009,ze.value+=(i-ze.value)*Math.min(1,e*1.5),Je.value=n,Ye.value=.035+.05*a,pe.update(e,n,k,W),Te&&Ue.update(e,n,k),Te&&Z.step(e),Te&&Xe.update(e,n,k,{wind:.6*W.cloud,qualityLevel:window.__quality&&window.__quality.level||0});let f=Rn(),p=f.kind===`pixel`||f.kind===`blend`?`pixel`:yn?`vector`:f.kind===`toon`?`charm`:`realistic`;if(_e.update(e,n,k,W,p,D.camera),j){let[e,t,n]=M;L.uniforms.uPrev.value=e.texture,L.uniforms.uCurr.value=t.texture,o.setRenderTarget(n),o.render(F,ne),M=[t,n,e],R.uniforms.uHeight.value=M[1].texture}if(En<2&&typeof document<`u`&&++En===2){let e=document.getElementById(`lgr-loader`);e&&e.classList.add(`gone`),window.__loaded=!0}}function Un(e){vn=e,window.__mode=vn}function Wn(){return yn=!yn,Me.value=+!!yn,window.__vector=yn,yn}function Gn(e){return yn=!!e,Me.value=+!!yn,window.__vector=yn,yn}function qn(){return xn=wn[(wn.indexOf(xn)+1)%wn.length],window.__era=xn,Nn(),xn}function Jn(){return bn=!bn,bn}return{updateWorld:Hn,decideStyle:Ln,renderCityPipeline:In,renderCityBeautyTo:Fn,styleHintName:zn,setPostMode:Un,toggleVector:Wn,setVector:Gn,cycleEra:qn,togglePalette:Jn,setTonemap:e=>{let t=e===`agx`||e===1||e===!0;return $.uniforms.uTonemap.value=+!!t,typeof window<`u`&&(window.__tonemap=t?`agx`:`aces`),t?`agx`:`aces`},get mode(){return vn},get vector(){return yn},get sceneEra(){return xn},renderer:o,drawBuffer:d,scene:_,rig:D,sunRig:k,SIM:256,targets:M,simScene:F,simCamera:ne,simMaterial:L,grabRT:ae,card:se,backdrop:ce,WATER_SIZE:28,water:le,waterMaterial:R,windowGlow:z,landmarkFactory:de,city:V,cityLife:fe,waterLife:U,weatherRig:W,clouds:pe,inspector:ge,world:Tt,catalog:Et,editor:Dt,pilot:At,profiler:ln,governor:fn,frameStart:pn,frameEnd:mn,setActive:hn,get paused(){return p},get contextLost(){return f},prewarm:_n,fitShadowFrustum:jt,SHADOW_DIST:24,sceneDepth:Mt,sceneRT:Nt,filmicRT:Pt,toonRT:It,pixelRT:Lt,postScene:Q,postCamera:Ut,postQuad:Wt,filmicMaterial:$,pixelMaterial:$t,pixelkitMaterial:tn,toonMaterial:an,mixMaterial:on,PALCACHE:Zt,ERA_TEX:nn,runPass:sn,OVERCAST_GREY:x,FOG_DENSITY:S,FOG_NIGHT_TINT:C,_fogColor:w,resize:cn}}var Ni=[`video/mp4;codecs=avc1.42E01E`,`video/mp4`,`video/webm;codecs=vp9`,`video/webm`];function Pi({renderer:e,rig:t,sunRig:n,poke:r,getState:i,office:a={},world:o=null}){let s=e.domElement,c=new URLSearchParams(window.location.search),l=e=>{let t=i();return`lgr-${t.lesson}-${String(t.clock||``).replace(`:`,``)}-${t.style}.${e}`},u=(e,t)=>{let n=URL.createObjectURL(e),r=document.createElement(`a`);r.href=n,r.download=t,document.body.appendChild(r),r.click(),r.remove(),setTimeout(()=>URL.revokeObjectURL(n),1e3)};function d(){s.toBlob(e=>{e&&(u(e,l(`png`)),window.__lastStill=e.size)},`image/png`)}let f=()=>Ni.find(e=>window.MediaRecorder&&MediaRecorder.isTypeSupported(e))||``,p=Fi(),m=null,h=[],g=!1;function _(){if(g)return;let e=f(),t=s.captureStream(60);m=new MediaRecorder(t,e?{mimeType:e,videoBitsPerSecond:12e6}:{}),h=[],m.ondataavailable=e=>{e.data&&e.data.size&&h.push(e.data)},m.onstop=()=>{let e=new Blob(h,{type:m.mimeType});u(e,l(m.mimeType.includes(`mp4`)?`mp4`:`webm`)),window.__lastVideo=e.size},m.start(),g=!0,window.__recording=!0,p.show()}function v(){g&&(m.stop(),g=!1,window.__recording=!1,p.hide())}let y=()=>g?v():_(),b=e=>new Promise(t=>setTimeout(t,e)),x=e=>{let t=e.startsWith(`Shift+`),n=t?e.slice(6):e;window.dispatchEvent(new KeyboardEvent(`keydown`,{key:n,shiftKey:t}))};async function S(){let e=s.clientWidth,t=s.clientHeight,n=e*.26,i=t*.74;for(let t=0;t<=10;t++)r.at(n+t*e*.028,i+Math.sin(t*.7)*16),await b(100);r.stop()}async function C(e){if(e.world&&o?.[e.world]?.(),e.keys)for(let t of e.keys)x(t),await b(70);if(e.zoom&&t.zoomBy(e.zoom),e.orbit&&t.orbit(e.orbit[0],e.orbit[1]),e.timeTo!==void 0&&n.goTo(e.timeTo),e.pour&&o?.flowPourAt)for(let t=0;t<10;t++)o.flowPourAt(e.pour[0],e.pour[1],e.pour[2],e.pour[3]);e.office&&a[e.office]?.(),e.ripple&&await S(),e.waitMs&&await b(e.waitMs)}let w={tour:[{keys:[`6`,`0`],waitMs:600},{zoom:.72,waitMs:1700},{ripple:!0,waitMs:2400},{orbit:[.55,0],waitMs:1700},{timeTo:0,waitMs:3e3},{timeTo:.5,waitMs:1500},{keys:[`7`],waitMs:1e3},{zoom:1.5,waitMs:1400},{keys:[`B`],waitMs:2e3},{keys:[`B`],waitMs:2e3},{keys:[`B`],waitMs:2e3},{keys:[`B`],waitMs:2e3},{keys:[`B`],waitMs:2e3},{keys:[`8`],waitMs:900},{zoom:.65,waitMs:1200},{ripple:!0,waitMs:2600},{keys:[`7`],waitMs:700},{keys:[`B`],waitMs:300},{keys:[`B`],waitMs:900},{zoom:1.4,waitMs:2600}],daycycle:[{keys:[`6`,`0`],waitMs:700},{timeTo:.75,waitMs:2600},{timeTo:1,waitMs:2600},{timeTo:1.25,waitMs:2600},{timeTo:1.5,waitMs:2600},{timeTo:1.5,waitMs:800}],office:[{keys:[`o`],waitMs:1700},{office:`pet`,waitMs:1300},{office:`feed`,waitMs:1700},{office:`travel`,waitMs:1700},{keys:[`Shift+W`,`Shift+W`,`Shift+W`],waitMs:1800},{timeTo:0,waitMs:2400},{office:`laptop`,waitMs:800},{office:`closeLaptop`,waitMs:300},{timeTo:.5,waitMs:900},{keys:[`Shift+W`],waitMs:200},{keys:[`o`],waitMs:1500}],cities:[{keys:[`6`,`0`],waitMs:500},{timeTo:.78,waitMs:2800},{keys:[`C`],waitMs:3e3},{keys:[`C`],waitMs:3e3},{keys:[`C`],waitMs:2e3}],water:[{keys:[`6`,`0`],waitMs:600},{zoom:1.35,waitMs:2800},{orbit:[.7,0],waitMs:2600},{ripple:!0,waitMs:2200},{timeTo:0,waitMs:3200},{timeTo:.5,waitMs:1500},{orbit:[-.5,0],waitMs:2200}],morph:[{keys:[`6`,`3`],waitMs:700},{zoom:.55,waitMs:1800},{zoom:2.3,waitMs:1700},{zoom:1.26,waitMs:1700},{zoom:1.16,waitMs:1900},{zoom:.3,waitMs:2200}],skin:[{keys:[`o`],waitMs:1800},{keys:[`j`],waitMs:2e3},{keys:[`j`],waitMs:2e3},{timeTo:0,waitMs:2600},{timeTo:.5,waitMs:1500},{keys:[`u`],waitMs:2e3},{keys:[`j`],waitMs:1400},{keys:[`o`],waitMs:1500}]};w.hero=[{world:`enter`,keys:[`2`],waitMs:1500},{timeTo:.27,waitMs:400},{orbit:[.55,.05],waitMs:2400},{pour:[3.2,-5.24,.6,1.8],waitMs:2800},{orbit:[-.4,-.03],zoom:.9,waitMs:2400},{timeTo:.74,waitMs:3200},{keys:[`8`],waitMs:1600},{keys:[`7`],waitMs:1600},{keys:[`2`],waitMs:2200}];async function T(e){let t=w[e];if(t){window.__director=e;for(let e of t)await C(e);window.__director=null}}async function E(e){await b(1600),_(),await T(e),await b(400),v(),window.__captureDone=!0}c.has(`capture`)&&window.addEventListener(`keydown`,e=>{(e.key===`s`||e.key===`S`)&&d(),(e.key===`r`||e.key===`R`)&&y()});let D=c.get(`capture`);return D&&w[D]&&E(D),window.__capture={still:d,toggleRec:y,run:T,sequences:Object.keys(w)},window.__capture}function Fi(){let e=document.createElement(`div`);return e.textContent=`● REC`,e.style.cssText=`position:fixed;top:14px;right:16px;z-index:2;font:bold 12px ui-monospace,monospace;color:#ff3b30;letter-spacing:.12em;text-shadow:0 1px 3px #000;display:none;`,document.body.appendChild(e),{show:()=>{e.style.display=`block`},hide:()=>{e.style.display=`none`}}}var Ii=`
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
.vui-env button.on { background: #3a7bd5; color: #fff; }
.vui-env button:focus-visible { outline: 2px solid #e8c069; outline-offset: 2px; }
@media (pointer: coarse) { .vui { top: 16px; padding: 9px 11px; } .vui button { font-size: 13px; }
  .vui-show { bottom: 20px; } }
/* L97 a11y — a visually-hidden live region (announces mode/zone swaps to screen readers without repainting
   controls silently). The clip-rect pattern keeps it in the a11y tree but off-screen for sighted users. */
.vui-live { position: fixed; width: 1px; height: 1px; margin: -1px; padding: 0; overflow: hidden;
  clip: rect(0 0 0 0); clip-path: inset(50%); border: 0; white-space: nowrap; }
/* L97 a11y — a clear keyboard focus ring on every control zone (don't regress the L91 visible-focus win). */
.vui button:focus-visible, .vui-rail button:focus-visible, .vui-card button:focus-visible,
.vui-save button:focus-visible, .vui-more button:focus-visible, .vui-inspect button:focus-visible {
  outline: 2px solid #e8c069; outline-offset: 2px; }
`;function Li({controls:e,state:t,show:n,coarse:r}){if(typeof document>`u`)return;let i=document.createElement(`style`);i.textContent=Ii,document.head.appendChild(i);let a=document.createElement(`div`);a.className=`vui`;let o=document.createElement(`div`);o.className=`vui-info`,o.innerHTML=`KEYS · WASD move · 4/5/6 cam · 0 vector · 7/8 pixel/toon · B era · T time · [ ] scrub · 9 auto · Shift+W weather · K season · G shuffle · C city · I inspect · click a building / O office · J office skin · U painted props · Esc exit · M hide UI · H shadows · P theme · drag water to ripple`;let s=(e,t,n)=>{let r=document.createElement(`button`);return r.textContent=e,n&&(r.title=n),r.addEventListener(`click`,e=>{navigator.vibrate?.(10),t(e)}),r},c=e=>{let t=document.createElement(`div`);return t.className=`seg`,{seg:t,btns:e.map(([n,r])=>{let i=s(n,()=>e.find(e=>e[1]===r)[2](),n);return i.dataset.val=r,t.appendChild(i),i})}},l=e=>{let t=document.createElement(`span`);return t.className=`clbl`,t.textContent=e,t},u=(e,t,n,r)=>{let i=document.createElement(`input`);return i.type=`range`,i.min=String(e),i.max=String(t),i.step=String(n),i.addEventListener(`input`,()=>r(parseFloat(i.value))),i},d=s(`City`,()=>e.city(),`Next city profile (C)`),f=s(`Shuffle`,()=>e.shuffle(),`New random seed (G)`),p={clear:`Clear`,rain:`Rain`,snow:`Snow`,fog:`Fog`},m=[`Spring`,`Summer`,`Autumn`,`Winter`],h=s(`Clear`,()=>e.weather(),`Cycle weather: clear→rain→snow→fog (Shift+W)`),g=s(`Spring`,()=>e.season(),`Cycle season: spring→summer→autumn→winter (K)`),_=s(`Office`,()=>e.office(),`Dive into / exit the office (O · Esc)`),v={"3d":`3D`,dressed2:`Dressed`,night2:`Night`,modern:`Modern`,charm:`Charm`},y=s(`Skin`,()=>e.officeSkin(),`Office look: 3D → dressed → night → modern → charm diffusion (J)`),b={painted:`Painted`,"3d":`Live 3D`},x=s(`Props`,()=>e.officeProps(),`Office props: painted (cohesive) ↔ live 3D (animated) — under a skin (U)`),S=s(`Inspect`,()=>e.inspect(),`Inspect: fly + click/tap any car·person·bird·boat·cloud to follow + watch its behaviour (I)`),C={valley:`Valley`,archipelago:`Archi`,mountains:`Mountains`,plains:`Plains`},w=s(`World`,()=>e.world(),`Generate + explore a procedural terrain world`),T=s(`🎲`,()=>e.worldReroll(),`New random world (seed) — G`),E=s(`Valley`,()=>e.worldPreset(),`Cycle biome preset: valley → archipelago → mountains → plains`),D=s(`✎ Edit`,()=>e.sculpt&&e.sculpt(),`World editor — brush the terrain (Sculpt to reshape, Paint to recolour)`),O=document.createElement(`div`);O.className=`vui-rail`;let k=null;function A(t){k||!t||(k=t.map(t=>{let n=document.createElement(`button`);return n.dataset.id=t.id,n.title=`${t.label} (${t.key})`,n.innerHTML=`${t.icon}<span class="rk">${t.key}</span>`,n.addEventListener(`click`,()=>{navigator.vibrate?.(10),e.editTool&&e.editTool(t.id)}),O.appendChild(n),n}))}let j=document.createElement(`div`);j.className=`vui-card`;let ee=document.createElement(`div`);ee.className=`ct`;let M=document.createElement(`div`);M.className=`crow`;let N=u(.8,6,.1,t=>e.brushSize&&e.brushSize(t));M.append(l(`Size`),N);let P=document.createElement(`div`);P.className=`crow`;let te=u(.01,.15,.005,t=>e.brushStrength&&e.brushStrength(t));P.append(l(`Force`),te);let F=document.createElement(`div`);F.className=`crow`;let I=u(.1,1,.05,t=>e.brushDensity&&e.brushDensity(t));F.append(l(`Density`),I);let ne=s(`↑ Raise`,()=>e.sculptDir&&e.sculptDir(),`Brush direction: raise ↔ lower / add ↔ erase / place ↔ delete`),re=s(`↶ Undo`,()=>e.worldUndo&&e.worldUndo(),`Undo the last edit (Z)`),ie=s(`↺ Reset`,()=>e.worldReset&&e.worldReset(),`Reset to the generated world (discard edits) — same seed, NOT a reroll`),L=s(`↺ Reset`,()=>e.worldReset&&e.worldReset(),`Reset the world (discard edits) — same seed`),ae=s(`👁 Trees`,()=>e.hideScatter&&e.hideScatter(),`Hide the scatter (trees/rocks) to see the ground you are editing`),oe=document.createElement(`div`);oe.className=`seg`,oe.style.display=`none`;let se=null;function ce(t){se||!t||(se=t.map((t,n)=>{let r=document.createElement(`button`);return r.title=t.key,r.style.cssText=`min-width:30px;padding:0;background:${t.color};border:0;border-radius:8px;`,r.addEventListener(`click`,()=>{navigator.vibrate?.(8),e.material&&e.material(n)}),oe.appendChild(r),r}))}let R=document.createElement(`div`);R.className=`seg`,R.style.display=`none`;let le=null;function ue(t){le||!t||(le=t.map(t=>{let n=document.createElement(`button`);return n.dataset.key=t.key,n.textContent=t.icon,n.title=t.label,n.style.cssText=`min-width:30px;padding:4px 6px;`,n.addEventListener(`click`,()=>{navigator.vibrate?.(8),e.scatterType&&e.scatterType(t.key)}),R.appendChild(n),n}))}let z=document.createElement(`div`);z.className=`seg`,z.style.display=`none`;let B=null;function de(t){B||!t||(B=t.map(t=>{let n=document.createElement(`button`);return n.dataset.key=t.key,n.textContent=t.icon,n.title=t.label,n.style.cssText=`min-width:30px;padding:4px 6px;`,n.addEventListener(`click`,()=>{navigator.vibrate?.(8),e.entity&&e.entity(t.key)}),z.appendChild(n),n}))}let V=c([[`×1`,`1`,()=>e.dropN&&e.dropN(1)],[`×10`,`10`,()=>e.dropN&&e.dropN(10)],[`×50`,`50`,()=>e.dropN&&e.dropN(50)]]);V.seg.style.display=`none`,V.seg.title=`How many to drop per click (scattered in the ring)`;let H=document.createElement(`div`);H.className=`crow`,H.append(ne,re,L,ae),j.append(ee,M,P,oe,R,F,z,V.seg,H);let fe=document.createElement(`div`);fe.className=`vui-save`;let U=document.createElement(`div`);U.className=`ct`,U.textContent=`💾 Save / Load`;let W=document.createElement(`input`);W.type=`text`,W.placeholder=`world name`,W.value=`my-world`;let pe=document.createElement(`select`),G=``;pe.addEventListener(`change`,()=>{pe.value&&(W.value=pe.value)});let me=document.createElement(`input`);me.type=`file`,me.accept=`.json,application/json`,me.style.display=`none`,me.addEventListener(`change`,()=>{me.files[0]&&(e.importWorld(me.files[0]),me.value=``)});let K=s(`💾 Save`,()=>e.saveWorld(W.value.trim()),`Save to this device (a named slot)`),he=s(`📂 Load`,()=>e.loadWorld(W.value.trim()),`Load the named slot`),ge=s(`🗑`,()=>e.deleteWorld(W.value.trim()),`Delete the named slot`),_e=s(`⬇ Export`,()=>e.exportWorld(W.value.trim()),`Download the world as a JSON file (portable, lossless)`),ve=s(`⬆ Import`,()=>me.click(),`Load a world from a JSON file`),ye=s(`🔗 Link`,()=>e.shareLink(),`Copy a shareable link (light edits only — else use Export)`),be=document.createElement(`div`);be.className=`st`;let xe=document.createElement(`div`);xe.className=`srow`,xe.append(W);let Se=document.createElement(`div`);Se.className=`srow`,Se.append(pe);let Ce=document.createElement(`div`);Ce.className=`srow`,Ce.append(K,he,ge);let q=document.createElement(`div`);q.className=`srow`,q.append(_e,ve,ye),fe.append(U,xe,Se,Ce,q,be,me);let J=s(`✨ Realistic`,()=>e.realistic(),`Cinematic beauty look — atmospheric sky, glowing sun, colour-graded (showcase)`),we=c([[`Auto`,`auto`,()=>e.post(`auto`)],[`Pixel`,`pixel`,()=>e.post(`pixel`)],[`Toon`,`toon`,()=>e.post(`toon`)],[`None`,`none`,()=>e.post(`none`)]]);we.btns[0].title=`AUTO: zoom morphs the style (toon → 16-bit → 8-bit → Game Boy)`,we.btns[3].title=`NONE: raw beauty render, no post-crunch (clean flat-vector when Vector is on)`;let Y=s(`Vector`,()=>e.vector(),`Flat-vector materials — LAYERS onto the post mode (Vector + Pixel/Toon/Auto). Toggle (0)`),Te={native:`Era`,gb:`GB`,"8-bit":`8-bit`,"16-bit":`16-bit`,modern:`Modern`,"1-bit":`1-bit`},Ee=s(`Era`,()=>e.era(),`Cycle the pixel era (B): native → GB → 8-bit → 16-bit → Modern`),X=document.createElement(`input`);X.type=`range`,X.min=`0`,X.max=`1`,X.step=`0.01`,X.title=`Time of day`;let De=!1;X.addEventListener(`pointerdown`,()=>{De=!0}),X.addEventListener(`pointerup`,()=>{De=!1}),X.addEventListener(`input`,()=>e.time(parseFloat(X.value)));let Oe=s(`▶`,()=>e.auto(),`Play/pause day cycle (9)`),ke=document.createElement(`div`);ke.style.cssText=`display:flex;align-items:center;gap:6px;`;let Ae=document.createElement(`span`);Ae.className=`lbl`,Ae.textContent=`Day`,ke.append(Ae,X);let je=s(`☀ Shadows`,()=>e.shadows&&e.shadows(),`Sun shadows on/off (H)`),Me=s(`◐ Theme`,()=>e.theme&&e.theme(),`Swap the UI palette: ink/gold ↔ terminal (P)`),Ne=document.createElement(`div`);Ne.className=`vui-env`,Ne.setAttribute(`role`,`group`),Ne.setAttribute(`aria-label`,`Environment and view settings`);let Pe=s(`⚙ More ▾`,()=>{Ne.classList.toggle(`open`)},`Environment & view: day/night play · weather · season · shadows · theme`),Fe=c([[`Iso`,`iso`,()=>e.cam(`iso`)],[`Dim`,`dimetric`,()=>e.cam(`dimetric`)],[`3D`,`persp`,()=>e.cam(`persp`)]]),Ie=s(`ⓘ`,()=>o.classList.toggle(`open`),`All keys`),Le=s(`⌄`,()=>tt(!0),`Hide controls — watch unobstructed (M)`),Re=c([[`City`,`city`,()=>e.mode(`city`)],[`World`,`world`,()=>e.mode(`world`)],[`Office`,`office`,()=>e.mode(`office`)],[`Hoard`,`hoard`,()=>e.mode(`hoard`)]]);Re.btns[0].title=`City — the living skyline`,Re.btns[1].title=`World — the procedural terrain editor`,Re.btns[2].title=`Office — dive into the building`,Re.btns[3].title=`Hoard — the survival game`;let ze=document.createElement(`div`);ze.className=`vui-more`;let Be=s(`More`,()=>{ze.classList.toggle(`open`),rt()},`More controls`);if(r){a.append(Re.seg,S,Oe,we.seg,Be,Le);let e=document.createElement(`div`);e.style.cssText=`display:flex;align-items:center;gap:6px;`,e.append(Ae,X),ze.append(d,f,J,T,ie,E,D,h,g,je,Me,y,x,Y,Ee,Fe.seg,e)}else a.append(Re.seg,ut(),d,f,y,x,S,ut(),T,ie,E,D,ut(),we.seg,J,Y,Ee,ut(),ke,Pe,ut(),Fe.seg,Ie,ut(),Le),Ne.append(Oe,h,g,je,Me);let Ve=document.createElement(`div`);Ve.className=`vui-inspect`;let He=document.createElement(`div`);He.className=`ik`;let Ue=document.createElement(`div`);Ue.className=`it`;let We=document.createElement(`div`);We.className=`ii`;let Ge=document.createElement(`div`);Ge.className=`ir`;let Ke=s(`▸ Next`,()=>e.inspectNext&&e.inspectNext(),`Follow the next object (Tab)`),Z=s(`✕`,()=>e.inspect(),`Exit inspect (Esc)`);Ge.append(Ke,Z),Ve.append(He,Ue,We,Ge);let qe=document.createElement(`button`);qe.className=`vui-show`,qe.innerHTML=`⌃ Controls`,qe.title=`Show controls (M)`,qe.addEventListener(`click`,()=>tt(!1));let Je=document.createElement(`div`);Je.className=`vui-style`,a.setAttribute(`role`,`toolbar`),a.setAttribute(`aria-label`,`Global controls`),O.setAttribute(`role`,`toolbar`),O.setAttribute(`aria-label`,`Tools`),O.setAttribute(`aria-orientation`,`vertical`),j.setAttribute(`role`,`group`),j.setAttribute(`aria-label`,`Tool properties`),fe.setAttribute(`role`,`group`),fe.setAttribute(`aria-label`,`Save and load worlds`);let Ye=document.createElement(`div`);Ye.className=`vui-live`,Ye.setAttribute(`role`,`status`),Ye.setAttribute(`aria-live`,`polite`),document.body.append(o,ze,a,qe,Je,Ve,O,j,fe,Ye,Ne);let Xe=n,Ze=!1;tt(r);let Qe=null;function $e(){let e=t();we.btns.forEach(t=>t.classList.toggle(`on`,t.dataset.val===e.post)),Y.classList.toggle(`on`,!!e.vector),Fe.btns.forEach(t=>t.classList.toggle(`on`,t.dataset.val===e.cam)),h.textContent=p[e.weather]||`Clear`,h.classList.toggle(`on`,e.weather!==`clear`),g.textContent=m[e.season]||`Spring`,g.classList.toggle(`on`,(e.season||0)>0),_.textContent=e.office?`Exit`:`Office`,_.classList.toggle(`on`,!!e.office),y.textContent=v[e.officeSkin]||`Skin`,y.classList.toggle(`on`,e.officeSkin&&e.officeSkin!==`3d`),x.textContent=b[e.officeProps]||`Props`,x.classList.toggle(`on`,e.officeProps===`painted`&&e.officeSkin&&e.officeSkin!==`3d`),Oe.textContent=e.auto?`❚❚`:`▶`,Oe.classList.toggle(`on`,e.auto),Ee.textContent=Te[e.era]||`Era`,Ee.classList.toggle(`on`,e.era&&e.era!==`native`),S.textContent=e.inspect?`Exit`:`Inspect`,S.classList.toggle(`on`,!!e.inspect),w.textContent=e.world?`Exit`:`World`,w.classList.toggle(`on`,!!e.world),E.textContent=C[e.worldPreset]||`Valley`,T.style.display=e.world?``:`none`,ie.style.display=e.world?``:`none`,E.style.display=e.world?``:`none`,D.style.display=e.world?``:`none`;let n=e.currentMode,r=n===`city`,i=n===`world`,a=n===`office`,o=r||i,s=e.audienceModes||[`city`,`world`,`office`,`hoard`];Re.btns.forEach(e=>{let t=e.dataset.val;e.style.display=s.includes(t)?``:`none`,e.classList.toggle(`on`,t===n)}),d.style.display=r?``:`none`,f.style.display=r?``:`none`,S.style.display=r?``:`none`,y.style.display=a?``:`none`,x.style.display=a?``:`none`,h.style.display=o?``:`none`,g.style.display=o?``:`none`;let c=i?e.sculpt?`World editor — editing`:`World`:a?`Office`:n===`hoard`?`Hoard`:`City`;c!==Qe&&(Qe=c,Ye.textContent=`${c} mode — controls updated`),je.classList.toggle(`on`,!!e.shadows),Me.classList.toggle(`on`,!!e.theme),D.classList.toggle(`on`,!!e.sculpt),A(e.tools),O.classList.toggle(`open`,!!e.sculpt),k&&k.forEach(t=>t.classList.toggle(`on`,t.dataset.id===e.editTool)),j.classList.toggle(`open`,!!e.sculpt);let l=e.editTool,u=l===`paint`,L=l===`scatter`,H=l===`place`,U=l===`sculpt`;ee.textContent={place:`✚ Place`,sculpt:`⛰ Sculpt`,paint:`🎨 Paint`,scatter:`🌲 Objects`,select:`◳ Select`}[l]||`Editor`,M.style.display=l===`select`?`none`:``,P.style.display=U?``:`none`,F.style.display=L?``:`none`,ce(e.materials),oe.style.display=u?``:`none`,se&&se.forEach((t,n)=>t.classList.toggle(`on`,n===e.material)),ue(e.scatterKinds),R.style.display=L?``:`none`,le&&le.forEach(t=>t.classList.toggle(`on`,t.dataset.key===e.scatterType)),de(e.entityKinds),z.style.display=H?``:`none`,B&&B.forEach(t=>t.classList.toggle(`on`,t.dataset.key===e.entityKind)),V.seg.style.display=H?``:`none`,V.btns.forEach(t=>t.classList.toggle(`on`,t.dataset.val===String(e.dropN))),ne.style.display=L||H||U?``:`none`,ne.textContent=H?e.sculptRaise?`➕ Place`:`🗑 Delete`:L?e.sculptRaise?`➕ Add`:`➖ Erase`:e.sculptRaise?`↑ Raise`:`↓ Lower`,re.disabled=!e.canUndo,re.style.opacity=e.canUndo?``:`0.45`,ae.classList.toggle(`on`,!!e.scatterHidden),N.value=String(e.brushRadius),te.value=String(e.brushStrength),I.value=String(e.brushDensity),fe.classList.toggle(`open`,!!e.sculpt);let W=e.saveSlots||[],me=W.join(`,`);if(me!==G){G=me,pe.innerHTML=``;let e=document.createElement(`option`);e.value=``,e.textContent=W.length?`— ${W.length} saved —`:`— no saves —`,pe.append(e);for(let e of W){let t=document.createElement(`option`);t.value=e,t.textContent=e,pe.append(t)}}be.textContent=e.saveStatus||``,J.classList.toggle(`on`,!!e.realistic),De||(X.value=String(e.t))}$e();let et=setInterval($e,200);function tt(e){if(!Xe){a.style.display=`none`,qe.classList.remove(`on`),o.classList.remove(`open`),ze.classList.remove(`open`),Je.classList.remove(`on`);return}Ze=e,a.style.display=e?`none`:`flex`,qe.classList.toggle(`on`,e),e&&(o.classList.remove(`open`),ze.classList.remove(`open`),Je.classList.remove(`on`))}function nt(){tt(!Ze)}function rt(){if(!ze.classList.contains(`open`))return;let e=a.getBoundingClientRect();ze.style.top=Math.round(e.bottom+8)+`px`,ze.style.bottom=`auto`}let it=()=>rt();window.addEventListener(`resize`,it);let at=null,ot=null;function st(e){if(!Xe||Ze){Je.classList.remove(`on`),at=null;return}if(!e){Je.classList.remove(`on`),at=``;return}e!==at&&(at=e,Je.textContent=e,Je.classList.add(`on`),clearTimeout(ot),ot=setTimeout(()=>Je.classList.remove(`on`),2e3))}let ct=null;function lt(e){if(!Xe||!e){Ve.classList.remove(`open`),ct=null;return}let t=e.hint?`hint:${e.hint}`:`${e.kind}|${e.info}`;t!==ct&&(ct=t,e.hint?(He.textContent=`INSPECT`,Ue.textContent=`Free-fly`,We.textContent=e.hint,Ke.style.display=``):(He.textContent=e.kind,Ue.textContent=e.label||e.kind,We.textContent=e.info||``,Ke.style.display=``),Ve.classList.add(`open`))}return[a,o,ze,qe,Je,Ve,O,j,fe,Ne,i].forEach(e=>e&&e.querySelectorAll&&e.querySelectorAll(`button[title]:not([aria-label])`).forEach(e=>e.setAttribute(`aria-label`,e.title))),{toggle:nt,setHidden:tt,refresh:$e,setStyleHint:st,setInspect:lt,destroy(){clearInterval(et),window.removeEventListener(`resize`,it),a.remove(),o.remove(),ze.remove(),qe.remove(),Je.remove(),Ve.remove(),O.remove(),j.remove(),fe.remove(),Ye.remove(),Ne.remove(),i.remove(),clearTimeout(ot)}};function ut(){let e=document.createElement(`div`);return e.className=`sep`,e}}var Ri=`lgr_hints_`,zi=!1;function Bi(){if(zi||typeof document>`u`)return;zi=!0;let e=document.createElement(`style`);e.textContent=`
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
  }`,document.head.appendChild(e)}function Vi({key:e,title:t=`Tips`,tips:n=[],force:r=!1}={}){let i={key:e,shown:!1,dismissed:!1,seen:!1};if(typeof window<`u`&&(window.__hints=i),typeof document>`u`||!e)return{dismiss(){},el:null};let a=Ri+e,o=!1;try{o=localStorage.getItem(a)===`1`}catch{}if(o&&!r)return i.seen=!0,{dismiss(){},el:null};Bi();let s=!!(window.matchMedia&&window.matchMedia(`(prefers-reduced-motion: reduce)`).matches),c=document.createElement(`div`);c.className=`lgr-hints`,c.innerHTML=`<div class="lgr-hints-card">
    <div class="lgr-hints-h">${t}</div>
    <ul>${n.map(e=>`<li>${e}</li>`).join(``)}</ul>
    <button class="lgr-hints-ok">Got it</button>
    <button class="lgr-hints-x" title="Dismiss (Esc)" aria-label="Dismiss">✕</button>
  </div>`,document.body.appendChild(c),i.shown=!0,s?c.classList.add(`on`):requestAnimationFrame(()=>c.classList.add(`on`));let l=!1;function u(e=!0){if(!l){if(l=!0,e)try{localStorage.setItem(a,`1`)}catch{}i.dismissed=!0,window.removeEventListener(`keydown`,d),c.classList.remove(`on`),setTimeout(()=>c.remove(),s?0:300)}}function d(e){e.key===`Escape`&&u(!0)}return window.addEventListener(`keydown`,d),c.querySelector(`.lgr-hints-ok`).addEventListener(`click`,()=>{navigator.vibrate?.(10),u(!0)}),c.querySelector(`.lgr-hints-x`).addEventListener(`click`,()=>{navigator.vibrate?.(10),u(!0)}),{dismiss:u,el:c}}var Hi=`precision highp float;

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
}`;function Ui({rate:e=4.6}={}){let t=new re({vertexShader:jn,fragmentShader:Hi,uniforms:{uA:{value:null},uB:{value:null},uT:{value:0},uFocus:{value:new K(.5,.5)}}}),n=`a`,r=0;function i(e,n){t.uniforms.uA.value=e,t.uniforms.uB.value=n}function a(e){return n===`a`?(e&&t.uniforms.uFocus.value.copy(e),n=`in`,!0):!1}function o(){return n!==`b`&&n!==`in`?!1:(n=`out`,!0)}function s(e){n=e===`b`?`b`:`a`,r=+(e===`b`),t.uniforms.uT.value=r}function c(i){return r+=(+(n===`b`||n===`in`)-r)*Math.min(1,i*e),n===`in`&&r>.992&&(r=1,n=`b`),n===`out`&&r<.008&&(r=0,n=`a`),t.uniforms.uT.value=r,n}return{material:t,setSources:i,enter:a,exit:o,update:c,snap:s,get mode(){return n},get t(){return r},get transitioning(){return n===`in`||n===`out`}}}var Wi=null;function Gi(){if(Wi)return Wi;let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return n.addColorStop(0,`rgba(0,0,0,0.60)`),n.addColorStop(.55,`rgba(0,0,0,0.32)`),n.addColorStop(1,`rgba(0,0,0,0.0)`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,128/2,0,Math.PI*2),t.fill(),Wi=new H(e),Wi.colorSpace=B,Wi}function Ki({w:e=.6,d:t=.6,x:n=0,y:r=.002,z:i=0,opacity:a=.5,rotation:o=0}={}){let s=new v(new h(e,t),new b({map:Gi(),transparent:!0,opacity:a,depthWrite:!1,toneMapped:!1}));return s.rotation.x=-Math.PI/2,s.rotation.z=o,s.position.set(n,r,i),s.renderOrder=-1,s.raycast=()=>{},s}function qi({yawLimit:e=80,pitchUp:t=32,pitchDown:n=20,sensitivity:r=.16,keySpeed:i=70,damp:a=9}={}){let o=Math.PI/180,s=(e,t,n)=>e<t?t:e>n?n:e,c=0,l=0,u=0,d=0;return{addDrag(i,a){u=s(u-i*r,-e,e),d=s(d-a*r,-n,t)},addKeys(r,{left:a,right:o,up:c,down:l}){let f=i*r;a&&(u=s(u+f,-e,e)),o&&(u=s(u-f,-e,e)),c&&(d=s(d+f,-n,t)),l&&(d=s(d-f,-n,t))},recenter(){u=0,d=0},update(e){let t=1-Math.exp(-a*e);c+=(u-c)*t,l+=(d-l)*t},get yaw(){return c*o},get pitch(){return l*o},get active(){return Math.abs(c)>.05||Math.abs(l)>.05}}}var Ji=null;function Yi(){if(Ji)return Ji;let e=document.createElement(`canvas`);e.width=e.height=256;let t=e.getContext(`2d`),n=t.createRadialGradient(256/2,256/2,256*.32,256/2,256/2,256*.72);return n.addColorStop(0,`rgba(0,0,0,0)`),n.addColorStop(1,`rgba(0,0,0,1)`),t.fillStyle=n,t.fillRect(0,0,256,256),Ji=new H(e),Ji.colorSpace=B,Ji}function Xi({strength:e=.55,dist:n=.5}={}){let r=new v(new h(1,1),new b({map:Yi(),transparent:!0,opacity:e,depthTest:!1,depthWrite:!1,toneMapped:!1}));r.renderOrder=9999,r.raycast=()=>{},r.frustumCulled=!1;let i=new E;return r.fit=e=>{e.getWorldDirection(i),r.position.copy(e.position).addScaledVector(i,n),r.quaternion.copy(e.quaternion);let a=2*Math.tan(t.degToRad(e.fov)*.5)*n*1.05;r.scale.set(a*e.aspect,a,1)},r}export{rt as _,Vi as a,Mi as c,Ei as d,Di as f,nt as g,At as h,Ui as i,Ci as l,jn as m,Ki as n,Li as o,Si as p,Xi as r,Pi as s,qi as t,Ti as u,Z as v,xe as y};