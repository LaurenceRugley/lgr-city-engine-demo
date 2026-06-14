import{i as e,o as t,r as n,s as r,t as i}from"./pixelkit-CjIiVGTw.js";import{A as a,B as o,C as s,D as c,E as l,F as u,G as d,H as f,I as p,J as m,K as h,L as g,M as _,N as v,O as y,P as b,Q as x,R as S,S as C,T as w,U as T,V as E,W as ee,X as D,Y as te,Z as O,_ as k,a as ne,c as A,d as j,et as re,f as M,g as N,i as P,it as F,j as I,k as L,l as ie,m as ae,n as oe,nt as R,o as se,p as ce,q as le,r as ue,rt as z,s as B,t as de,tt as fe,u as pe,v as me,w as he,x as ge,y as _e,z as ve}from"./three-is-Bqkoc.js";var ye=Math.atan(1/Math.SQRT2),be=Math.atan(.5),xe=Math.PI/4,Se={PERSPECTIVE:4,ISOMETRIC:5,DIMETRIC:6},Ce=.12,we=1.45,Te=4,Ee=40,De=1.5,Oe=16,ke=6,Ae=22,je=3.5,Me=11,Ne=(e,t,n)=>e+(t-e)*(1-Math.exp(-8*n)),Pe=(e,t)=>e+Math.PI*2*Math.round((t-e)/(Math.PI*2));function Fe({aspect:e,fov:t=48,near:n=.1,far:r=100,target:i=new z(0,.8,0),azimuth:a=xe,elevation:o=.52,distance:s=12,zoom:c=5.5}={}){let l=new S(t,e,n,r),u=new p(-1,1,1,-1,n,r),d=Se.PERSPECTIVE,f=e,m={azimuth:a,elevation:o,distance:s,zoom:c,target:i.clone()},h={azimuth:a,elevation:o,distance:s,zoom:c,target:i.clone()},g=!1,_=()=>d===Se.PERSPECTIVE?l:u;function v(e){e!==d&&(d=e,d===Se.ISOMETRIC||d===Se.DIMETRIC?(m.elevation=d===Se.ISOMETRIC?ye:be,m.azimuth=Pe(xe,h.azimuth),g=!0):g=!1)}function y(e,t){m.azimuth+=e,g||(m.elevation=L.clamp(m.elevation+t,Ce,we))}function b(e){d===Se.PERSPECTIVE?m.distance=L.clamp(m.distance*e,Te,Ee):m.zoom=L.clamp(m.zoom*e,De,Oe)}function x(e,t){let n=m.azimuth,r=d===Se.PERSPECTIVE?m.distance*.04:m.zoom*.08,i=new z(Math.cos(n),0,-Math.sin(n)),a=new z(-Math.sin(n),0,-Math.cos(n));m.target.addScaledVector(i,e*r),m.target.addScaledVector(a,t*r)}function C(e,t){f=e/t,l.aspect=f,l.updateProjectionMatrix()}function w(e){h.azimuth=Ne(h.azimuth,m.azimuth,e),h.elevation=Ne(h.elevation,m.elevation,e),h.distance=Ne(h.distance,m.distance,e),h.zoom=Ne(h.zoom,m.zoom,e),h.target.x=Ne(h.target.x,m.target.x,e),h.target.y=Ne(h.target.y,m.target.y,e),h.target.z=Ne(h.target.z,m.target.z,e);let t=Math.cos(h.elevation),n=Math.sin(h.elevation),r=Math.cos(h.azimuth),i=Math.sin(h.azimuth),a=_();if(a.position.set(h.target.x+h.distance*t*i,h.target.y+h.distance*n,h.target.z+h.distance*t*r),a.lookAt(h.target),a.isOrthographicCamera){let e=h.zoom,t=e*f;a.left=-t,a.right=t,a.top=e,a.bottom=-e,a.updateProjectionMatrix()}}function T(e,t,n,r=!1){m.target.set(e,t,n),r&&h.target.copy(m.target)}function E(e,t=!1){m.zoom=L.clamp(e,De,Oe),t&&(h.zoom=m.zoom)}return{get camera(){return _()},get mode(){return d},get azimuth(){return h.azimuth},setTarget:T,setZoom:E,get styleT(){return d===Se.PERSPECTIVE?L.clamp((h.distance-ke)/(Ae-ke),0,1):L.clamp((h.zoom-je)/(Me-je),0,1)},setMode:v,orbit:y,zoomBy:b,pan:x,setViewport:C,update:w}}var Ie={value:0},Le=new M(`#ffffff`),Re={value:0},ze={value:0},Be={value:0},Ve=new R,He={value:0},Ue={value:0},We=`
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
  vWorldXZ = (modelMatrix * vec4(position, 1.0)).xz;`)}function Je(e){return e.replace(`#include <shadowmap_pars_fragment>`,`#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>`)}var Ye=`col *= mix(1.0, getShadowMask(), uVecShadow);`;function Xe(e,{color:t,id:n,windowGlow:r,winColors:i=[`#ffb852`,`#8cd9ff`],litFrac:a=.55}={}){let o=[0,1,2].map(e=>new M(i[e]??i[i.length-1]));return e.customProgramCacheKey=()=>`lgr-vec-tower`,e.onBeforeCompile=e=>{Ge(e),e.uniforms.uWindowGlow=r,e.uniforms.uWinId={value:n},e.uniforms.uVecColor={value:new M(t)},e.uniforms.uWinA={value:o[0]},e.uniforms.uWinB={value:o[1]},e.uniforms.uWinC={value:o[2]},e.uniforms.uWinLit={value:a},e.vertexShader=qe(e.vertexShader),e.fragmentShader=Ke(Je(e.fragmentShader.replace(`#include <common>`,`#include <common>
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
          ${Ye}                                  // the sun's shadow darkens the body
          vec3 wcol; vec2 w = winTerms(wcol);
          vec3 glass = vec3(0.17, 0.23, 0.34);          // dark glass-blue panes (day)
          col = mix(col, glass, w.x * 0.85);
          col += w.x * w.y * wcol * uWindowGlow * 1.5;  // …windows EMIT (unshadowed) at night
          gl_FragColor = vec4(col, diffuseColor.a);
        }`)))},e}function V(e,{color:t=null,glow:n=null,glowDay:r=0,glowNight:i=1,windowGlow:a=null,season:o=!1}={}){let s=t===null,c=n!==null&&a!==null;return e.customProgramCacheKey=()=>`lgr-vec|`+(s?`d`:`c`)+(c?`g`:``)+(o?`s`:``),e.onBeforeCompile=e=>{Ge(e),s||(e.uniforms.uVecColor={value:new M(t)}),c&&(e.uniforms.uGlow={value:new M(n)},e.uniforms.uGlowDay={value:r},e.uniforms.uGlowNight={value:i},e.uniforms.uWindowGlow=a),o&&(e.uniforms.uSeason=Ue),e.vertexShader=qe(e.vertexShader);let l=s?`diffuseColor.rgb`:`uVecColor`,u=o?`seasonShift(${l})`:l,d=(s?``:`uniform vec3 uVecColor;
`)+(c?`uniform vec3 uGlow; uniform float uGlowDay; uniform float uGlowNight; uniform float uWindowGlow;
`:``)+(o?`uniform float uSeason;
vec3 seasonShift(vec3 c){
  c = mix(c, vec3(0.86, 0.46, 0.13), smoothstep(0.40, 0.70, uSeason));   // → autumn orange
  c = mix(c, vec3(0.46, 0.33, 0.20), smoothstep(0.75, 1.00, uSeason));   // → bare brown
  return c;
}
`:``),f=c?`uGlow * mix(uGlowDay, uGlowNight, uWindowGlow)`:`vec3(0.0)`,p=Ke(Je(e.fragmentShader.replace(`#include <common>`,`#include <common>
`+d+We).replace(`#include <opaque_fragment>`,`#include <opaque_fragment>
        if (uVector > 0.5) {
          vec3 col = vecShade(${u});
          ${Ye}                            // the sun's shadow darkens the flat tier…
          gl_FragColor = vec4(col + ${f}, diffuseColor.a);  // …but the night glow stays lit
        }`)));c&&(p=p.replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>\n  totalEmissiveRadiance += ${f};`)),e.fragmentShader=p},e}function Ze(e){let t=e>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Qe(e){let t=Ze(e);return{next:t,range:(e,n)=>e+(n-e)*t(),int:(e,n)=>e+Math.floor(t()*(n-e+1)),pick:e=>e[Math.floor(t()*e.length)],chance:e=>t()<e}}var $e=[{key:`manhattan`,name:`Manhattan`,towers:[`#EDE3C8`,`#D9B98A`,`#B5562F`,`#A8C8E8`,`#2E3F5C`],ground:`#7CC455`,street:`#9AA0A6`,sidewalk:`#C8CCD0`,park:`#5DB347`,water:`#29A8D8`,shopfronts:[`#C04A3A`,`#3A7AC0`,`#C09A2A`],glass:`#7FA8CC`,winColors:[`#ffd27a`,`#9ad6ff`],hMax:4.6,sigma:.36,roofRate:.35,pSplit:.6,nightLit:.55,roofTint:null,coast:{base:.55,out:1,in:.6,jag:1.05},landmarks:[`empireState`,`chrysler`,`liberty`]},{key:`paris`,name:`Paris`,towers:[`#E8DCC0`,`#F2EAD6`,`#E0D2B4`],ground:`#8CC46A`,street:`#A8A29A`,sidewalk:`#D4CEC2`,park:`#6DB35A`,water:`#3FA8C8`,shopfronts:[`#C04A3A`,`#3A6B5A`,`#7A5AC0`],glass:`#5A6B7A`,winColors:[`#ffdca0`,`#ffcaa0`],hMax:1.5,sigma:.9,roofRate:.15,pSplit:.75,nightLit:.45,roofTint:`#6A7886`,coast:{base:1.05,out:.55,in:.3,jag:.5},landmarks:[`eiffel`,`arcDeTriomphe`,`sacreCoeur`]},{key:`neoTokyo`,name:`Neo-Tokyo`,towers:[`#2A3038`,`#3A4250`,`#252B36`,`#4A4456`],ground:`#3A4A42`,street:`#5A6068`,sidewalk:`#7A8088`,park:`#2E5E46`,water:`#0E6878`,shopfronts:[`#E8483A`,`#5AE8E0`,`#E85AA0`],glass:`#5AE8E0`,winColors:[`#5AE8E0`,`#E85AA0`,`#E8E06A`],hMax:5.2,sigma:.42,roofRate:.6,pSplit:.6,nightLit:.7,roofTint:null,coast:{base:.7,out:1.05,in:.62,jag:1.7},landmarks:[`tokyoTower`,`pagoda`,`neonBillboard`]}],et=$e.map(e=>e.key),tt=.3,nt=1.9,rt=.55,it=2.45,at=.12,ot=.6,st=6,ct={BASE:.7,OUT:.95,IN:.55,JAG:1,SAMPLES_PER_EDGE:28,HARBOR_DEPTH:.55,HARBOR_WIDTH:.26},lt={PLINTH_TOP:tt,BLOCK:nt,STREET:rt,PITCH:it,SIDEWALK:at,SHORE:ot,N:st,COAST:ct};function ut(e,t,n){let r=n?.base??ct.BASE,i=n?.out??ct.OUT,a=n?.in??ct.IN,o=n?.jag??ct.JAG,s=t+r,c=Qe((e^789079)>>>0),l=[2,3,5,8,11,13].map(e=>({k:e,amp:1/e*o**((e-2)/6),phase:c.range(0,Math.PI*2)})),u=l.reduce((e,t)=>e+t.amp,0),d=e=>{let t=0;for(let n of l)t+=n.amp*Math.sin(n.k*e*Math.PI*2+n.phase);return Math.max(-1,Math.min(1,t/(u*.6)))},f=[{fix:+s,nx:1,nz:0,sign:1},{fix:+s,nx:0,nz:1,sign:-1},{fix:-s,nx:-1,nz:0,sign:-1},{fix:-s,nx:0,nz:-1,sign:1}],p=t+.22,m=ct.SAMPLES_PER_EDGE,h=4*m,g=[],_=0;for(let e=0;e<4;e++){let t=f[e];for(let n=0;n<m;n++,_++){let o=n/m,c=_/h,l=(-s+2*s*o)*t.sign,u=d(c),f=u>=0?u*i:u*a;if(e===0){let e=Math.abs(o-.5);if(e<ct.HARBOR_WIDTH){let t=.5+.5*Math.cos(e/ct.HARBOR_WIDTH*Math.PI);f-=(r+ct.HARBOR_DEPTH)*t}}let v,y;t.nx===0?(y=t.fix+t.nz*f,v=l,y=t.nz>0?Math.max(y,p):Math.min(y,-p)):(v=t.fix+t.nx*f,y=l,v=t.nx>0?Math.max(v,p):Math.min(v,-p)),g.push(new R(v,y))}}return{points:g,B:s,maxR:s+i,harborX:p}}function dt(e){(Array.isArray(e)?e:[e]).forEach(e=>e&&e.dispose&&e.dispose())}function ft({seed:e=1,profileIndex:t=0,landmarkFactory:n=null,windowGlow:r}){let i=new C,a=new C,o=new C;a.raycast=()=>{},o.raycast=()=>{},i.add(a,o);let s=new k(16773594,3);s.position.set(.45,.6,-.65).multiplyScalar(10);let c=new he(7313331,2762272,1);i.add(s,c);let l=0,u=[],d={seed:e,profileIndex:t,profile:$e[t],extent:0,meshCount:0};function f(e,t,n,r){let i=new I(new P(e,.04,t),V(new v({color:r,roughness:.95,flatShading:!0}),{color:r}));return i.position.y=n,i.userData.ground=!0,i}function p(e,t){for(let e of a.children)e.geometry&&e.geometry.dispose(),dt(e.material);a.clear();for(let e of o.children)e.traverse(e=>{e.isMesh&&dt(e.material)});o.clear(),u.length=0,l=0;let r=Qe(e),i=$e[t],s=(st-1)/2*it,c=7.075;d={seed:e,profileIndex:t,profile:i,extent:c+(i.coast?.base??ct.BASE),meshCount:0};let p=ut(e,c,i.coast);d.coast=p;let _=new m;p.points.forEach((e,t)=>t?_.lineTo(e.x,e.y):_.moveTo(e.x,e.y)),_.closePath();let S=new I(new _e(_,{depth:2,bevelEnabled:!1,steps:1}),V(new v({color:i.ground,roughness:.9,flatShading:!0,side:2}),{color:i.ground}));S.rotation.x=-Math.PI/2,S.position.y=tt-2,S.userData.ground=!0,a.add(S);let C=2*7.195;a.add(f(C,C,.32,i.street)),b(p.harborX,i);let w=[];for(let e=0;e<st;e++)for(let t=0;t<st;t++)w.push([e,t]);let T=new Set,E=Math.max(1,Math.round(w.length*.08));for(;T.size<E;)T.add(r.int(0,w.length-1));let ee=r.range(-2.45*.6,it*.6),D=r.range(-2.45*.6,it*.6),te=Math.hypot(s,s),O=[];if(w.forEach(([e,t],n)=>{let o=(e-(st-1)/2)*it,s=(t-(st-1)/2)*it;if(a.add(f(nt,nt,.32999999999999996,i.sidewalk).translateX(o).translateZ(s)),T.has(n)){a.add(f(nt-at*2,nt-at*2,.35,i.park).translateX(o).translateZ(s));let e=r.int(3,5);for(let t=0;t<e;t++)x(o+r.range(-.6,.6),s+r.range(-.6,.6),i,r);return}let c=nt-at*2,l=r.chance(i.pSplit)?2:1,u=r.chance(i.pSplit)?2:1,d=c/l,p=c/u;for(let e=0;e<l;e++)for(let t=0;t<u;t++){let n=o-c/2+d*(e+.5),a=s-c/2+p*(t+.5),l=Math.max(.6,d-.1),u=Math.max(.6,p-.1),f=Math.hypot(n-ee,a-D)/te,m=Math.exp(-(f*f)/(2*i.sigma*i.sigma)),g=Math.max(.5,.5+(i.hMax-.5)*m*r.range(.75,1.25));g>i.hMax*.5&&Math.min(l,u)>=.7&&O.push({lx:n,lz:a,fw:l,fd:u,h:g,r:f}),h(n,a,l,u,g,i,r)}}),n&&n.ready){O.sort((e,t)=>e.r-t.r);let e=[],t=i.landmarks;for(let r=0;r<t.length&&O.length;r++){let a=null;for(let t of O)if(e.every(e=>Math.hypot(e.lx-t.lx,e.lz-t.lz)>it*.9)){a=t;break}a||=O[0],e.push(a),g(a.lx,a.lz);let s=i.hMax*n.heightFactor(t[r]),c=n.make(t[r],{x:a.lx,z:a.lz,w:a.fw,d:a.fd,h:s,plinthTop:tt});if(c){o.add(c);let e=new ue().setFromObject(c);y(e.min.x-.15,e.max.x+.15,e.min.z-.15,e.max.z+.15)}}}a.traverse(e=>{e.isMesh&&(e.userData.ground?(e.castShadow=!1,e.receiveShadow=!0):e.material&&e.material.isMeshBasicMaterial?(e.castShadow=!1,e.receiveShadow=!1):(e.castShadow=!0,e.receiveShadow=!0))}),o.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),d.meshCount=a.children.length+o.children.length;let k=0;for(let e of a.children){let t=e.position;k=(Math.imul(k,16777619)^(Math.round(t.x*100)*2654435761^Math.round(t.y*100)*40503^Math.round(t.z*100)*2246822519))>>>0}for(let e of d.coast.points)k=(Math.imul(k,16777619)^(Math.round(e.x*100)*2654435761^Math.round(e.y*100)*40503))>>>0;d.sig=k,window.__city={seed:e,profile:i.key,meshes:d.meshCount,sig:k}}function h(e,t,n,i,o,s,c){let d=Xe(new v({flatShading:!0,roughness:.7,metalness:.05}),{color:c.pick(s.towers),id:++l,windowGlow:r,winColors:s.winColors,litFrac:s.nightLit}),f=new I(new P(n,o,i),d);if(f.position.set(e,tt+o/2,t),f.userData.lot=[e,t],a.add(f),s.roofTint){let r=V(new v({color:s.roofTint,roughness:.85,flatShading:!0}),{color:s.roofTint}),c=new I(new P(n*1.02,.08,i*1.02),r);c.position.set(e,tt+o+.04,t),c.userData.lot=[e,t],a.add(c)}if(o<1.4){let r=c.pick(s.shopfronts),o=new I(new P(n*1.04,.18,i*1.04),V(new v({color:r,roughness:.8,flatShading:!0}),{color:r}));o.position.set(e,.39,t),o.userData.lot=[e,t],a.add(o)}if(o>s.hMax*.45&&c.chance(s.roofRate)){let r=c.chance(.5)?new I(new P(n*.4,.18,i*.4),V(new v({color:`#9a9a9a`,flatShading:!0}),{color:`#9a9a9a`})):new I(new ae(n*.18,n*.18,.22,10),V(new v({color:`#b9bec4`,flatShading:!0}),{color:`#b9bec4`}));if(r.position.set(e+c.range(-.1,.1),tt+o+.11,t+c.range(-.1,.1)),r.userData.lot=[e,t],a.add(r),c.chance(.25)){let n=new I(new te(.05,6,5),new _({color:`#ff3b30`,transparent:!0,opacity:1}));n.position.set(e,tt+o+.26,t),n.userData.lot=[e,t],n.raycast=()=>{},a.add(n),u.push({mesh:n,phase:c.range(0,6.28)})}}}function g(e,t){for(let n=a.children.length-1;n>=0;n--){let r=a.children[n];r.userData.lot&&Math.abs(r.userData.lot[0]-e)<1e-4&&Math.abs(r.userData.lot[1]-t)<1e-4&&(r.geometry&&r.geometry.dispose(),dt(r.material),a.remove(r))}for(let e=u.length-1;e>=0;e--)u[e].mesh.parent||u.splice(e,1)}function y(e,t,n,r){for(let i=a.children.length-1;i>=0;i--){let o=a.children[i];o.userData.lot&&o.position.x>=e&&o.position.x<=t&&o.position.z>=n&&o.position.z<=r&&(o.geometry&&o.geometry.dispose(),dt(o.material),a.remove(o))}}function b(e,t){let n=V(new v({color:`#7a5634`,roughness:.95,flatShading:!0}),{color:`#7a5634`}),r=(e,t,r,i)=>{let o=new I(new P(e,.06,t),n);o.position.set(r,tt-.16,i),a.add(o)};r(.24,2,e+.02,0),r(1.3,.22,e+.7,-.72),r(1.3,.22,e+.7,.72)}function x(e,t,n,r){let i=new M(n.park),o=(n,o)=>{let s=i.clone().offsetHSL(0,0,r.range(-.06,.06)).getStyle(),c=new I(new te(n,7,6),V(new v({color:s,flatShading:!0}),{color:s,season:!0}));c.scale.y=.7,c.position.set(e,tt+o,t),c.userData.lot=null,a.add(c)},s=new I(new P(.05,.18,.05),V(new v({color:`#6b4a2a`,flatShading:!0}),{color:`#6b4a2a`}));s.position.set(e,.39,t),a.add(s),o(.22,.28),o(.16,.46)}function S(e){for(let t of u)t.mesh.material.opacity=.35+.65*(.5+.5*Math.sin(e*3+t.phase))}return p(e,t),{group:i,key:s,fill:c,update:S,generate:p,get state(){return d},get extent(){return d.extent},get waterColor(){return d.profile.water},profiles:$e}}var pt=Math.PI*2,mt=.7,ht=90,gt=[{name:`night`,sun:`#4a6f9e`,intensity:.35,hemiSky:`#26344f`,hemiGround:`#0c1018`,horizon:`#1e2942`,sky:`#36486e`,exposure:.95,outline:`#101a30`,window:1,toonGain:2.6},{name:`dawn`,sun:`#ff9e54`,intensity:2.4,hemiSky:`#8a7686`,hemiGround:`#2a1f1a`,horizon:`#b8512c`,sky:`#ffb070`,exposure:1.05,outline:`#241826`,window:.3,toonGain:2},{name:`noon`,sun:`#fff4e0`,intensity:4.6,hemiSky:`#9cb8cc`,hemiGround:`#33302a`,horizon:`#5e7689`,sky:`#aacadd`,exposure:1.18,outline:`#0b0a08`,window:0,toonGain:1.7},{name:`dusk`,sun:`#ff6b35`,intensity:2,hemiSky:`#7a566a`,hemiGround:`#281a18`,horizon:`#b0432a`,sky:`#ff8a5a`,exposure:1.05,outline:`#1f1420`,window:.4,toonGain:2}],_t=e=>e-Math.floor(e),vt=(e,t,n)=>e+(t-e)*n,yt=(e,t,n)=>e+(t-e)*(1-Math.exp(-6*n));function bt({t:e=.5}={}){let t=e,n=e,r=!1,i=!1,a=gt.map(e=>({name:e.name,sun:new M(e.sun),hemiSky:new M(e.hemiSky),hemiGround:new M(e.hemiGround),horizon:new M(e.horizon),sky:new M(e.sky),outline:new M(e.outline),intensity:e.intensity,exposure:e.exposure,window:e.window,toonGain:e.toonGain})),o=new z(0,1,0),s=new M(`#fff4e0`),c=new M(`#6f97b3`),l=new M(`#2a2620`),u=new M(`#3a4a57`),d=new M(`#7da3bd`),f=new M(`#0b0a08`),p=new M(`#000000`),m=3,h=1,g=0,_=1.7,v=new z;function y(e){let t=_t(e)*4,n=Math.floor(t)%4,r=(n+1)%4,i=t-Math.floor(t),y=a[n],b=a[r];s.lerpColors(y.sun,b.sun,i),c.lerpColors(y.hemiSky,b.hemiSky,i),l.lerpColors(y.hemiGround,b.hemiGround,i),u.lerpColors(y.horizon,b.horizon,i),d.lerpColors(y.sky,b.sky,i),f.lerpColors(y.outline,b.outline,i),m=vt(y.intensity,b.intensity,i),h=vt(y.exposure,b.exposure,i),g=vt(y.window,b.window,i),_=vt(y.toonGain,b.toonGain,i),p.setRGB(.045*g,.075*g,.14*g);let x=_t(e)*pt-Math.PI/2,S=Math.cos(x),C=Math.sin(x);v.set(S,C*Math.cos(mt),C*Math.sin(mt)),v.y>=0?o.copy(v):o.copy(v).negate()}return y(t),{sunDir:o,sunColor:s,hemiSky:c,hemiGround:l,horizon:u,sky:d,outline:f,toonFloor:p,get sunIntensity(){return m},get exposure(){return h},get windowGlow(){return g},get toonGain(){return _},get t(){return _t(t)},get auto(){return r},get clock(){let e=Math.round(_t(t)*24*60)%1440;return`${String(Math.floor(e/60)).padStart(2,`0`)}:${String(e%60).padStart(2,`0`)}`},cyclePreset(){n=(Math.floor(t*4+1e-4)+1)/4},nudge(e){n+=e/24},goTo(e){n=e},toggleAuto(){r=!r},setReducedMotion(e){i=e},update(e){r&&!i&&(n+=e/ht),t=yt(t,n,e),y(t)}}}function xt(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.35,`rgba(255,255,255,0.55)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new B(e);return r.colorSpace=d,r}function St(e,t){let n=[];for(let r=0;r<16;r++){let i=r/16*Math.PI*2;n.push(new z(Math.cos(i)*e,t,Math.sin(i)*e))}return new ie(n,!0,`catmullrom`,.5)}function Ct(e){let t=(t,n)=>Math.exp(-((e-t)*(e-t))/(2*n*n)),n=Math.max(t(.33,.05),t(.75,.06)),r=L.smoothstep(e,.24,.3)*(1-L.smoothstep(e,.8,.88));return L.clamp(.15+.55*r+.45*n,.12,1)}function wt(){let{PITCH:e,N:t,PLINTH_TOP:n}=lt,r=t+1,i=n+.04,a=n=>(n-t/2)*e,o=t/2,s=[],c=(e,t)=>t*r+e;for(let e=0;e<r;e++)for(let t=0;t<r;t++)s.push({x:a(t),z:a(e),i:t,j:e,edges:[]});let l=[],u=(t,n)=>{let r=(s[t].i===o||s[t].j===o)&&(s[n].i===o||s[n].j===o),i=l.length;l.push({a:t,b:n,len:e,main:r}),s[t].edges.push(i),s[n].edges.push(i)};for(let e=0;e<r;e++)for(let t=0;t<r;t++)t<r-1&&u(c(t,e),c(t+1,e)),e<r-1&&u(c(t,e),c(t,e+1));return{nodes:s,edges:l,y:i,mid:o}}function Tt({plinthTop:e=.3,extent:t=4,profile:n=null}={}){let r=new C,i=wt(),{nodes:a,edges:o}=i,s=i.y,c=.34,l=0;{let e=lt.PITCH-c*2;l=Math.max(1,Math.floor((e+.26)/.56))}let d=new _({color:`#e8c84a`,fog:!0}),p=new w(new P(.05,.012,.3),d,o.length*l);p.frustumCulled=!1,p.raycast=()=>{},p.receiveShadow=!1,p.castShadow=!1,r.add(p);{let e=new u,t=0;for(let n of o){let r=a[n.a],i=a[n.b],o=i.x-r.x,u=i.z-r.z,d=Math.hypot(o,u),f=o/d,m=u/d,h=Math.atan2(f,m),g=d-c*2;for(let n=0;n<l;n++){let i=c+(l===1?g/2:g*n/(l-1));e.position.set(r.x+f*i,s,r.z+m*i),e.rotation.set(0,h,0),e.updateMatrix(),p.setMatrixAt(t++,e.matrix)}}p.instanceMatrix.needsUpdate=!0}let m=new w(new P(.34,.26,.74),V(new v({flatShading:!0,roughness:.5,metalness:.3})),12);m.castShadow=!0,m.receiveShadow=!1,m.frustumCulled=!1,m.raycast=()=>{};let h=new se,g=new Float32Array(72),y=new Float32Array(72),b=new M(`#fff0c0`),x=new M(`#ff3528`);for(let e=0;e<12;e++)b.toArray(y,e*3),x.toArray(y,(12+e)*3),g[e*3+1]=-50,g[(12+e)*3+1]=-50;h.setAttribute(`position`,new ne(g,3)),h.setAttribute(`color`,new ne(y,3));let S=new f({size:.72,sizeAttenuation:!0,map:xt(),vertexColors:!0,transparent:!0,opacity:0,blending:2,depthWrite:!1}),T=new E(h,S);T.frustumCulled=!1,T.raycast=()=>{},r.add(m,T);let ee=[`#f4c430`,`#c0392b`,`#d8dde2`,`#9aa7b4`,`#6b7785`,`#5a7d9a`],D=Ze(2403557),te=o.map((e,t)=>t).filter(e=>o[e].main),O=[];for(let e=0;e<12;e++){let t=e<4&&te.length?te[D()*te.length|0]:D()*o.length|0,n=e===1;O.push({edge:t,fwd:D()<.5,s:D()*o[t].len,speed:n?.5:.78+e%3*.1,lenZ:n?1.45:1,color:ee[n?1:e===0?0:2+e%4],rng:Ze(12648430+e*2654435761)})}let k=new M;O.forEach((e,t)=>m.setColorAt(t,k.set(e.color)));function j(e,t,n){let r=a[e],i=r.edges.filter(e=>e!==t);if(i.length===0)return t;let s=o[t],c=s.a===e?s.b:s.a,l=r.x-a[c].x,u=r.z-a[c].z,d=Math.hypot(l,u)||1,f=i[0],p=-2;for(let t of i){let n=o[t],i=n.a===e?n.b:n.a,s=a[i].x-r.x,c=a[i].z-r.z,m=Math.hypot(s,c)||1,h=l/d*(s/m)+u/d*(c/m);h>p&&(p=h,f=t)}return n()<.65?f:i[n()*i.length|0]}let re=j,N=new u,F=(e,t)=>{N.position.set(0,-50,0),N.scale.setScalar(0),N.updateMatrix(),e.setMatrixAt(t,N.matrix)},I=.085,ie=lt.PLINTH_TOP+.02+.13,ae=new w(new A(.04,.1,3,6),V(new v({flatShading:!0,roughness:.8})),14);ae.castShadow=!0,ae.receiveShadow=!1,ae.frustumCulled=!1,ae.raycast=()=>{};let oe=St(t-.72,e),R=[];for(let e=0;e<14;e++)R.push({phase:e/14,speed:.12+e%4*.02,dir:e%2?1:-1});let ce=new z,le=new z,ue=new M;R.forEach((e,t)=>ae.setColorAt(t,ue.set([`#caa`,`#9ab`,`#bba`,`#ab9`][t%4]))),r.add(ae);let B={manhattan:`#e8c84a`,paris:`#dcd2bc`,neoTokyo:`#5ae8e0`};function de(e){e&&d.color.set(B[e.key]||`#e8c84a`)}de(n);function fe(t,n,r){let i=r?r.t:.5,s=r?r.windowGlow:0,c=Math.max(2,Math.round(Ct(i)*12)),l=s>.05;for(let e=0;e<12;e++){if(e>=c){F(m,e),g[e*3+1]=-50,g[(12+e)*3+1]=-50;continue}let n=O[e];n.s+=t*n.speed;let r=0;for(;n.s>=o[n.edge].len&&r++<4;){n.s-=o[n.edge].len;let e=n.fwd?o[n.edge].b:o[n.edge].a,t=re(e,n.edge,n.rng);n.edge=t,n.fwd=o[t].a===e}let i=o[n.edge],s=n.fwd?a[i.a]:a[i.b],u=n.fwd?a[i.b]:a[i.a],d=u.x-s.x,f=u.z-s.z,p=Math.hypot(d,f)||1,h=d/p,_=f/p,v=-_,y=h,b=s.x+h*n.s+v*I,x=s.z+_*n.s+y*I,S=Math.atan2(h,_);N.position.set(b,ie,x),N.rotation.set(0,S,0),N.scale.set(1,1,n.lenZ),N.updateMatrix(),m.setMatrixAt(e,N.matrix);let C=.74*n.lenZ*.5,w=ie+.06,T=e*3,E=(12+e)*3;l?(g[T]=b+h*(C+.04),g[T+1]=w,g[T+2]=x+_*(C+.04),g[E]=b-h*(C+.02),g[E+1]=w,g[E+2]=x-_*(C+.02)):(g[T+1]=-50,g[E+1]=-50)}m.instanceMatrix.needsUpdate=!0,h.attributes.position.needsUpdate=!0,S.opacity=L.clamp(s*1.8,0,1);let u=Math.max(2,Math.round(Ct(i)*14));for(let t=0;t<14;t++){if(t>=u){F(ae,t);continue}let r=R[t],i=(r.phase+r.dir*r.speed*n*.02+1e3)%1;oe.getPointAt(i,ce),oe.getTangentAt(i,le);let a=Math.sin(n*6+r.phase*30)*.015;N.position.set(ce.x,e+.09+a,ce.z),N.rotation.set(0,Math.atan2(le.x*r.dir,le.z*r.dir),Math.sin(n*6+r.phase*30)*.06),N.scale.setScalar(1),N.updateMatrix(),ae.setMatrixAt(t,N.matrix)}ae.instanceMatrix.needsUpdate=!0}return{group:r,update:fe,setProfile:de,graph:i,setRouter(e){re=e||j}}}function Et(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.4,`rgba(255,255,255,0.5)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new B(e);return r.colorSpace=d,r}function Dt(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64*.62,0,64/2,64*.62,64*.5);n.addColorStop(0,`rgba(240,250,255,0.95)`),n.addColorStop(1,`rgba(240,250,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new B(e);return r.colorSpace=d,r}function Ot(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`);t.strokeStyle=`rgba(40,46,54,0.9)`,t.lineWidth=6,t.lineCap=`round`,t.beginPath(),t.moveTo(8,40),t.quadraticCurveTo(24,18,32,34),t.quadraticCurveTo(40,18,56,40),t.stroke();let n=new B(e);return n.colorSpace=d,n}function kt(e,t,n=18){let r=[];for(let i=0;i<n;i++){let a=i/n*Math.PI*2;r.push(new z(Math.cos(a)*e,t,Math.sin(a)*e))}return new ie(r,!0,`catmullrom`,.5)}function At(e,t,n){let r=e-t,i=[],a=(e,t)=>i.push(new z(e,n,t)),o=(e,n,r,i,o=4)=>{for(let s=1;s<=o;s++){let c=r+(i-r)*(s/o);a(e+Math.cos(c)*t,n+Math.sin(c)*t)}};for(let t=0;t<4;t++)a(e,-r+2*r*t/4);o(r,r,0,Math.PI/2);for(let t=0;t<4;t++)a(r-2*r*t/4,e);o(-r,r,Math.PI/2,Math.PI);for(let t=0;t<4;t++)a(-e,r-2*r*t/4);o(-r,-r,Math.PI,1.5*Math.PI);for(let t=0;t<4;t++)a(-r+2*r*t/4,-e);return o(r,-r,1.5*Math.PI,2*Math.PI),new ie(i,!0,`catmullrom`,.5)}function jt({extent:e=8,waterSize:t=28,plinthTop:n=.3}={}){let r=new C;r.raycast=()=>{};let i=.06,a=(e,n,r)=>r.set(e/t+.5,-n/t+.5,0),o=[At(9.5,3,i),kt(12.7,i),new ie([new z(8.4,i,0),new z(11,i,-3.6),new z(13,i,0),new z(11,i,3.6)],!0,`catmullrom`,.5)],s=o.map(e=>e.getLength());function c({scale:e=1,hull:t=`#6b7785`,cabin:n=`#e7ecf2`}){let r=new C,i=new I(new P(.46*e,.2*e,1.1*e),V(new v({color:t,roughness:.6,metalness:.2,flatShading:!0}),{color:t}));i.position.y=.02;let a=new I(new P(.3*e,.22*e,.42*e),V(new v({color:n,roughness:.7,flatShading:!0}),{color:n}));return a.position.set(0,.18*e,.08*e),r.add(i,a),r.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!1),e.raycast=()=>{}}),r.userData.halfLen=.55*e,r}let l=[{laneIndex:0,dir:1,speed:.5,wake:.024,scale:1,hull:`#5a6675`,cabin:`#e7ecf2`},{laneIndex:1,dir:-1,speed:.42,wake:.022,scale:1,hull:`#7a5b46`,cabin:`#d9c3a6`},{laneIndex:0,dir:1,speed:.56,wake:.024,scale:.9,hull:`#456079`,cabin:`#cfe0ee`},{laneIndex:2,dir:1,speed:.34,wake:.03,scale:1.35,hull:`#39505f`,cabin:`#e2b85a`}];l.forEach((e,t)=>{e.mesh=c(e),e.u=t*.27%1,e.phase=t*1.7,e.isFerry=e.laneIndex===2,r.add(e.mesh)});let u=l.length,d=u*2,p=new se,m=new Float32Array(d*3).fill(-50),h=new Float32Array(d*3),g=new M(`#fff0c0`),_=new M(`#ff3528`);for(let e=0;e<u;e++)g.toArray(h,e*3),_.toArray(h,(u+e)*3);p.setAttribute(`position`,new ne(m,3)),p.setAttribute(`color`,new ne(h,3));let y=new E(p,new f({size:.6,sizeAttenuation:!0,map:Et(),vertexColors:!0,transparent:!0,opacity:0,blending:2,depthWrite:!1}));y.frustumCulled=!1,y.raycast=()=>{},r.add(y);function b(e,t){let n=new I(new te(e,9,7),V(new v({color:t,roughness:.5,flatShading:!0}),{color:t}));return n.scale.set(.55,.5,1),n.castShadow=!1,n.receiveShadow=!1,n.raycast=()=>{},n.position.y=-5,n}let S=[{x:-9.5,z:6,size:.18,color:`#5b6f86`,period:11,arcH:.55,span:1.1,whale:!1},{x:7.5,z:-9.5,size:.16,color:`#4a6076`,period:14,arcH:.5,span:1,whale:!1},{x:-7,z:-8.5,size:.2,color:`#607089`,period:9,arcH:.6,span:1.2,whale:!1},{x:10.5,z:7,size:.62,color:`#3a4350`,period:38,arcH:.9,span:2.6,whale:!0}];S.forEach((e,t)=>{e.mesh=b(e.size,e.color),e.heading=Math.atan2(-e.x,-e.z),e.t=t/S.length*e.period,e.splashed=!1,r.add(e.mesh),e.whale&&(e.spout=new O(new x({map:Dt(),transparent:!0,opacity:0,depthWrite:!1,fog:!0})),e.spout.scale.set(.6,1.1,1),e.spout.position.set(e.x,-5,e.z),r.add(e.spout))});let w=Ot(),T=[];for(let e=0;e<4;e++){let t=new O(new x({map:w,transparent:!0,opacity:0,depthWrite:!1,fog:!0}));t.scale.setScalar(.5),T.push({sp:t,r:8.6+e*.5,y:1.1+e%2*.5,speed:(.18+e*.03)*(e%2?-1:1),phase:e*1.9}),r.add(t)}let ee=S.length,D=Array.from({length:u+ee},()=>new z),k=e=>e.laneIndex,A=new z,j=new z,re=new z;function N(e,t,n){let r=n?n.windowGlow:0,c=1-r;for(let n=0;n<u;n++){let c=l[n],d=o[c.laneIndex],f=s[c.laneIndex],p=c.isFerry?.45+.55*Math.min(1,Math.abs((c.u+.5)%1-.5)*3):1,h=c.u;c.u=(c.u+c.dir*e*c.speed*p/f+1)%1,(c.dir>0?c.u<h:c.u>h)&&(c.laneIndex=k(c)),d.getPointAt(c.u,A),d.getTangentAt(c.u,j);let g=j.x*c.dir,_=j.z*c.dir,v=Math.atan2(g,_),y=Math.sin(t*1.1+c.phase)*.025;c.mesh.position.set(A.x,i+y,A.z),c.mesh.rotation.set(Math.sin(t*.9+c.phase)*.04,v,0);let b=c.mesh.userData.halfLen;a(A.x-g*b,A.z-_*b,re),D[n].set(re.x,re.y,c.wake);let x=n*3,S=(u+n)*3;if(r>.05){let e=.18;m[x]=A.x+g*(b+.05),m[x+1]=e,m[x+2]=A.z+_*(b+.05),m[S]=A.x-g*(b+.02),m[S+1]=e,m[S+2]=A.z-_*(b+.02)}else m[x+1]=-50,m[S+1]=-50}F(),y.material.opacity=L.clamp(r*1.8,0,1);for(let t=0;t<ee;t++){let n=S[t];n.t+=e;let r=u+t,o=n.whale?3.2:1.3;if(n.t>=n.period){let e=(n.t-n.period)/o;if(e>=1){n.t=0,n.splashed=!1,n.mesh.position.y=-5,n.spout&&(n.spout.material.opacity=0),D[r].set(0,0,0);continue}let t=Math.sin(Math.PI*e),s=(e-.5)*n.span,c=n.x+Math.sin(n.heading)*s,l=n.z+Math.cos(n.heading)*s;n.mesh.position.set(c,i-.1+t*n.arcH,l),n.mesh.rotation.set(Math.cos(Math.PI*e)*.9,n.heading,0);let u=e<.16||e>.84;if(a(c,l,re),D[r].set(re.x,re.y,u?n.whale?.07:.05:0),n.spout){let t=L.clamp((e-.15)*3,0,1)*(1-e);n.spout.position.set(c,.56+t*.6,l),n.spout.material.opacity=t*.9}}else n.mesh.position.y=-5,D[r].set(0,0,0),n.spout&&(n.spout.material.opacity=0)}for(let e=0;e<4;e++){let n=T[e],r=n.phase+t*n.speed*.25;n.sp.position.set(Math.cos(r)*n.r,n.y+Math.sin(t*1.4+n.phase)*.12,Math.sin(r)*n.r),n.sp.material.opacity=L.clamp(c*.9-.05,0,.85)}if(typeof window<`u`){let e=0;for(let t of S)t.mesh.position.y>i&&e++;window.__waterLife={boats:u,breaching:e,gulls:+T[0].sp.material.opacity.toFixed(2),lights:+y.material.opacity.toFixed(2)}}}function F(){p.attributes.position.needsUpdate=!0}function ae(){return D.length}return{group:r,update:N,wakeDrops:D,get wakeCount(){return ae()},lanes:o,setRouter(e){k=e||(e=>e.laneIndex)}}}var Mt=new Set([`w`,`a`,`s`,`d`,`arrowup`,`arrowdown`,`arrowleft`,`arrowright`,`shift`]);function Nt({extent:e=8,plinthTop:t=.3}={}){let n=new C;n.visible=!1,n.raycast=()=>{};let r=t+.02,i=Math.max(3,e-.7),a=typeof window<`u`&&window.matchMedia&&window.matchMedia(`(pointer: coarse)`).matches,o=new C,s=new I(new A(.16,.34,4,10),V(new v({color:`#3f7fd0`,roughness:.6,flatShading:!0}),{color:`#3f7fd0`}));s.position.y=.33;let c=new I(new te(.13,12,9),V(new v({color:`#e9caa1`,roughness:.75,flatShading:!0}),{color:`#e9caa1`}));c.position.y=.66;let l=new I(new P(.1,.1,.14),V(new v({color:`#ffd54a`,roughness:.5,flatShading:!0}),{color:`#ffd54a`}));l.position.set(0,.38,.16),o.add(s,c,l),o.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!1),e.raycast=()=>{}}),o.scale.setScalar(1.3),o.position.y=r,n.add(o);let d={x:0,z:0,vx:0,vz:0,hp:100,stamina:100,facing:0},f=new w(new A(.15,.3,4,8),V(new v({color:`#5f7a39`,roughness:.85,flatShading:!0}),{color:`#5f7a39`}),16);f.castShadow=!0,f.receiveShadow=!1,f.frustumCulled=!1,f.raycast=()=>{},f.instanceMatrix.setUsage(me),n.add(f);let p=[];for(let e=0;e<16;e++)p.push({x:0,z:0,vx:0,vz:0,alive:!1,speed:1,phase:e});let m=1;function h(e){let t=Math.random()*Math.PI*2;e.x=Math.cos(t)*i,e.z=Math.sin(t)*i,e.vx=0,e.vz=0,e.alive=!0,e.speed=.7+Math.random()*.5,e.phase=Math.random()*6.28}let g=!1,_={},y={x:0,y:0};function b(e,t){if(!g)return;let n=e.key.toLowerCase();Mt.has(n)&&(_[n]=t,e.stopImmediatePropagation(),n.startsWith(`arrow`)&&e.preventDefault())}typeof window<`u`&&(window.addEventListener(`keydown`,e=>b(e,!0)),window.addEventListener(`keyup`,e=>b(e,!1)));let x=null,S=null;if(typeof document<`u`){let e=document.createElement(`style`);e.textContent=`
      .hoard-stick{position:fixed;left:22px;bottom:22px;width:124px;height:124px;border-radius:50%;
        background:rgba(16,18,24,0.5);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);
        border:1px solid rgba(255,255,255,0.18);z-index:4;display:none;touch-action:none;pointer-events:auto;}
      .hoard-stick .knob{position:absolute;left:50%;top:50%;width:54px;height:54px;margin:-27px 0 0 -27px;
        border-radius:50%;background:rgba(120,160,220,0.85);box-shadow:0 3px 12px rgba(0,0,0,0.4);}
      .hoard-hud{position:fixed;left:16px;top:16px;z-index:4;font:700 10px/1 ui-monospace,monospace;
        letter-spacing:.12em;color:#e7ecf4;display:none;pointer-events:none;text-shadow:0 1px 2px #000;}
      .hoard-hud .bar{width:120px;height:8px;border-radius:5px;background:rgba(255,255,255,0.15);margin:4px 0 8px;overflow:hidden;}
      .hoard-hud .bar i{display:block;height:100%;border-radius:5px;}
    `,document.head.appendChild(e),x=document.createElement(`div`),x.className=`hoard-stick`,S=document.createElement(`div`),S.className=`knob`,x.appendChild(S),document.body.appendChild(x);let t=!1,n=e=>{let t=x.getBoundingClientRect(),n=e.clientX-(t.left+t.width/2),r=e.clientY-(t.top+t.height/2),i=Math.hypot(n,r)||1;i>44&&(n*=44/i,r*=44/i),S.style.transform=`translate(${n}px,${r}px)`,y.x=n/44,y.y=-r/44};x.addEventListener(`pointerdown`,e=>{t=!0,x.setPointerCapture(e.pointerId),n(e)}),x.addEventListener(`pointermove`,e=>{t&&n(e)});let r=()=>{t=!1,y.x=0,y.y=0,S.style.transform=`translate(0,0)`};x.addEventListener(`pointerup`,r),x.addEventListener(`pointercancel`,r)}let T=null,E=null,ee=null;typeof document<`u`&&(T=document.createElement(`div`),T.className=`hoard-hud`,T.innerHTML=`HP<div class="bar"><i style="background:#e0524a"></i></div>STAMINA<div class="bar"><i style="background:#4ad08a"></i></div>`,document.body.appendChild(T),E=T.querySelectorAll(`i`)[0],ee=T.querySelectorAll(`i`)[1]);let D=Math.PI/4;function O(e){D=e}function k(){d.x=0,d.z=0,d.vx=0,d.vz=0,d.hp=100,d.stamina=100,d.facing=0,m=1;for(let e of p)e.alive=!1;for(let e=0;e<10;e++)h(p[e]);o.position.set(0,r,0)}function ne(e){g=e,n.visible=e,x&&(x.style.display=e&&a?`block`:`none`),T&&(T.style.display=e?`block`:`none`);for(let e in _)_[e]=!1;y.x=y.y=0,e&&k()}let j=new u;function re(e,t,n){if(!g)return;let a=n?n.windowGlow:0,s=(_.d||_.arrowright?1:0)-(_.a||_.arrowleft?1:0)+y.x,c=(_.w||_.arrowup?1:0)-(_.s||_.arrowdown?1:0)+y.y,l=Math.hypot(s,c);l>1&&(s/=l,c/=l);let u=l>.05,v=(_.shift||y.y>.92)&&d.stamina>2&&u,b=Math.cos(D),x=Math.sin(D),S=b*s+-x*c,C=-x*s+-b*c,w=v?5.2:3,T=S*w,te=C*w,O=1-Math.exp(-14*e);d.vx+=(T-d.vx)*O,d.vz+=(te-d.vz)*O,d.x+=d.vx*e,d.z+=d.vz*e;let k=Math.hypot(d.x,d.z);k>i&&(d.x*=i/k,d.z*=i/k,d.vx=0,d.vz=0),u&&(d.facing=Math.atan2(S,C)),o.position.set(d.x,r,d.z),o.rotation.y=d.facing,d.stamina=L.clamp(d.stamina+(v?-34:22)*e,0,100);let ne=10+(a>.5?4:0),A=0,re=1/0;for(let n=0;n<16;n++){let i=p[n];if(!i.alive)if(n<ne)h(i);else{j.position.set(0,-50,0),j.scale.setScalar(0),j.updateMatrix(),f.setMatrixAt(n,j.matrix);continue}A++;let o=d.x-i.x,s=d.z-i.z,c=Math.hypot(o,s)||1;c<re&&(re=c);let l=i.speed*(1+.45*a),u=o/c*l,m=s/c*l,g=1-Math.exp(-6*e);i.vx+=(u-i.vx)*g,i.vz+=(m-i.vz)*g,c>.45&&(i.x+=i.vx*e,i.z+=i.vz*e);let _=Math.sin(t*6+i.phase)*.04;j.position.set(i.x,r+.3+_,i.z),j.rotation.set(0,Math.atan2(i.vx,i.vz),Math.sin(t*3+i.phase)*.12),j.scale.setScalar(1),j.updateMatrix(),f.setMatrixAt(n,j.matrix)}f.instanceMatrix.needsUpdate=!0,E&&(E.style.width=`${d.hp}%`),ee&&(ee.style.width=`${d.stamina}%`),typeof window<`u`&&(window.__hoard={active:g,hp:Math.round(d.hp),stamina:Math.round(d.stamina),zombies:A,wave:m,px:+d.x.toFixed(2),pz:+d.z.toFixed(2),znear:+re.toFixed(2)})}return{group:n,update:re,setActive:ne,setAzimuth:O,reset:k,get player(){return d},setTarget(){},get active(){return g}}}var Pt=[`empireState`,`chrysler`,`liberty`,`eiffel`,`arcDeTriomphe`,`sacreCoeur`,`tokyoTower`,`pagoda`,`neonBillboard`],Ft={empireState:1.25,chrysler:1.1,liberty:.55,eiffel:3.2,arcDeTriomphe:1.5,sacreCoeur:1.75,tokyoTower:1.35,pagoda:.5,neonBillboard:.9};function It(e){let t=()=>new v({flatShading:!0,roughness:.7,metalness:.1}),n=(n,r={})=>r.windows?Xe(t(),{color:n,id:e.id(),windowGlow:e.windowGlow,winColors:e.winColors,litFrac:e.litFrac}):V(t(),{color:n,glow:r.glow??null,glowDay:r.glowDay??0,glowNight:r.glowNight??1,windowGlow:r.glow?e.windowGlow:null});return{box:(e,t,r,i,a={})=>new I(new P(e,t,r),n(i,a)),cyl:(e,t,r,i,a={})=>new I(new ae(e,t,r,a.seg||12),n(i,a)),cone:(e,t,r,i={})=>new I(new ce(e,t,i.seg||8),n(r,i)),sphere:(e,t,r={})=>new I(new te(e,r.seg||12,r.seg2||8),n(t,r)),lathe:(e,t,r={})=>new I(new l(e.map(e=>new R(e[0],e[1])),r.seg||4),n(t,r))}}var H=(e,t,n,r)=>(e.position.set(t,n,r),e),Lt=[`#7FB0E0`,`#E07FB0`,`#7FE0A0`,`#E0C97F`,`#9FE07F`,`#7FE0E0`,`#FF8C42`,`#E0E07F`,`#C97FE0`,`#E07F7F`,`#7F9FE0`,`#E0483A`],Rt={empireState(e,t){let n=`#E8E0CF`;e.add(H(t.box(.42,.18,.42,n,{windows:!0}),0,.09,0)),e.add(H(t.box(.34,.16,.34,n,{windows:!0}),0,.26,0)),e.add(H(t.box(.26,.14,.26,n,{windows:!0}),0,.41,0)),e.add(H(t.box(.19,.34,.19,n,{windows:!0}),0,.65,0)),e.add(H(t.box(.13,.06,.13,n,{windows:!0}),0,.85,0));let r=Lt[new Date().getMonth()];e.add(H(t.cyl(.03,.045,.12,n,{seg:10,glow:r,glowNight:1.85}),0,.94,0)),e.add(H(t.cone(.012,.07,n,{seg:8}),0,1.04,0))},chrysler(e,t){let n=`#C9CED4`;e.add(H(t.box(.22,.55,.22,`#9AA7B4`,{windows:!0}),0,.275,0));let r=.55;for(let i=0;i<5;i++){let a=.14-i*.024,o=.07;e.add(H(t.cyl(a*.7,a,o,n,{seg:8,glow:`#dfeaff`,glowNight:.5}),0,r+o/2,0)),r+=o}e.add(H(t.cone(.018,.16,n,{seg:8}),0,r+.08,0))},liberty(e,t){let n=`#B9B4A6`,r=`#4FA890`;e.add(H(t.box(.42,.16,.42,n),0,.08,0)),e.add(H(t.box(.3,.2,.3,n),0,.26,0)),e.add(H(t.cyl(.1,.15,.42,r,{seg:10}),0,.57,0)),e.add(H(t.box(.11,.1,.11,r),0,.83,0));for(let n=0;n<7;n++){let i=(n/6-.5)*Math.PI*1.1;e.add(H(t.cone(.012,.1,r,{seg:5}),Math.sin(i)*.1,.92,Math.cos(i)*.06-.02))}let i=H(t.cyl(.025,.03,.34,r,{seg:8}),.14,.98,0);i.rotation.z=.35,e.add(i),e.add(H(t.box(.06,.06,.06,r,{glow:`#ffd060`,glowDay:.6,glowNight:1.2}),.2,1.16,0)),e.add(H(t.cone(.04,.09,`#ffcf66`,{seg:6,glow:`#ffd060`,glowDay:.7,glowNight:1.3}),.2,1.24,0))},eiffel(e,t){let n=`#6E5C4C`,r=[[.2,0],[.13,.16],[.085,.33],[.055,.5],[.035,.66],[.02,.85],[0,.92]];e.add(t.lathe(r,n,{seg:4}));let i=t.lathe(r,n,{seg:4});i.rotation.y=Math.PI/4,e.add(i),e.add(H(t.box(.26,.025,.26,n),0,.33,0)),e.add(H(t.box(.14,.02,.14,n),0,.66,0)),e.add(H(t.cone(.01,.1,n,{seg:6}),0,.97,0))},arcDeTriomphe(e,t){let n=`#D9D0C1`,r=.58,i=.5,a=.34,o=new m;o.moveTo(-.58/2,0),o.lineTo(r/2,0),o.lineTo(r/2,i),o.lineTo(-.58/2,i),o.lineTo(-.58/2,0);let s=new g,c=.15,l=.22;s.moveTo(-.15,0),s.lineTo(-.15,l),s.absarc(0,l,c,Math.PI,0,!0),s.lineTo(c,0),s.lineTo(-.15,0),o.holes.push(s);let u=new _e(o,{depth:a,bevelEnabled:!1});u.translate(0,0,-.34/2),u.computeVertexNormals(),e.add(new I(u,V(new v({color:n,flatShading:!0}),{color:n}))),e.add(H(t.box(r*1.06,.08,a*1.06,n),0,.54,0))},sacreCoeur(e,t){let n=`#F1EEE6`;e.add(H(t.box(.5,.26,.4,n),0,.13,0));let r=(r,i,a,o)=>{e.add(H(t.cyl(a*.9,a,i,n,{seg:12}),r,o,0));let s=H(t.sphere(a,n,{seg:12}),r,o+i/2,0);s.scale.y=1.5,e.add(s)};r(0,.22,.15,.4),r(-.2,.1,.07,.33),r(.2,.1,.07,.33)},tokyoTower(e,t){let n=`#F25822`,r=`#EDEDED`,i=0;for(let a=0;a<9;a++){let o=a/9,s=(a+1)/9,c=.19*(1-o)+.03*o,l=.19*(1-s)+.03*s,u=.085,d=a%2?r:n;e.add(H(t.cyl(l,c,u,d,{seg:4,glow:n,glowDay:0,glowNight:.7}),0,i+u/2,0)),i+=u}e.add(H(t.box(.22,.02,.22,n,{glow:n,glowNight:.7}),0,.28,0)),e.add(H(t.box(.12,.02,.12,r),0,.5,0)),e.add(H(t.cone(.012,.16,r,{seg:6,glow:`#ff6a2a`,glowNight:.9}),0,i+.08,0))},pagoda(e,t){let n=0;for(let r=0;r<5;r++){let i=.42-r*.06,a=.11;e.add(H(t.box(i,a,i,`#B23A2C`,{windows:r<4}),0,n+a/2,0)),e.add(H(t.box(i*1.34,.03,i*1.34,`#7A3B2A`),0,n+a+.015,0)),n+=.16999999999999998}e.add(H(t.cyl(.012,.012,.1,`#E0C040`,{seg:6}),0,n+.05,0)),e.add(H(t.sphere(.03,`#E0C040`,{seg:8,glow:`#ffe680`,glowNight:.8}),0,n+.12,0))},neonBillboard(e,t){let n=`#20242C`;e.add(H(t.box(.3,1,.3,n,{windows:!0}),0,.5,0));let r=[`#5AE8E0`,`#E85AA0`,`#E8E06A`],i=(n,r,i,a,o,s,c)=>{let l=H(t.box(n,r,.02,i,{glow:i,glowDay:.6,glowNight:1.1}),a,o,s);l.rotation.y=c,e.add(l)};i(.22,.34,r[0],0,.75,.16,0),i(.16,.5,r[1],.16,.5,0,Math.PI/2),i(.2,.22,r[2],0,.34,-.16,0),e.add(H(t.cone(.01,.14,n,{seg:6,glow:`#E85AA0`,glowDay:.4,glowNight:1}),0,1.08,0))}};function zt(e,t){let n=new C;return Rt[e](n,It(t)),n}var Bt=``+new URL(`building-skyscraper-d-CapD2Zqe.glb`,import.meta.url).href,Vt=``+new URL(`building-n-hdv8kKtN.glb`,import.meta.url).href,Ht=``+new URL(`building-g-CsTB1qH9.glb`,import.meta.url).href,Ut=``+new URL(`colormap-CK8fW2HB.png`,import.meta.url).href,Wt={skyscraper:{url:Bt,color:`#9cc1dd`,fill:.92},midrise:{url:Vt,color:`#c9a07a`,fill:.96},setback:{url:Ht,color:`#d9c7a0`,fill:.9}};function Gt({windowGlow:e}){let t=new y;t.setURLModifier(e=>e.includes(`colormap.png`)?Ut:e);let n=new de(t),r={},i=!1,a=Promise.all(Object.entries(Wt).map(async([e,t])=>{r[e]=(await n.loadAsync(t.url)).scene})).then(()=>{i=!0,window.__landmarksReady=!0}).catch(e=>console.error(`landmark models failed:`,e)),o=9e3;function s(t,n,i={}){let a,s;if(Pt.includes(t))a=zt(t,{windowGlow:e,winColors:i.winColors,litFrac:i.litFrac,id:()=>++o}),s=1;else{let e=r[t],n=Wt[t];if(!e||!n)return null;a=e.clone(!0),s=n.fill}a.updateMatrixWorld(!0);let c=new ue().setFromObject(a).getSize(new z);a.scale.setScalar(n.h*s/c.y),a.updateMatrixWorld(!0);let l=new ue().setFromObject(a),u=l.getCenter(new z);return a.position.x+=n.x-u.x,a.position.z+=n.z-u.z,a.position.y+=n.plinthTop-l.min.y,Pt.includes(t)?a.traverse(e=>{e.isMesh&&(e.castShadow=!1,e.raycast=()=>{})}):a.traverse(n=>{if(!n.isMesh)return;n.castShadow=!1,n.raycast=()=>{};let r=n=>Xe(n.clone(),{color:Wt[t].color,id:++o,windowGlow:e,winColors:i.winColors,litFrac:i.litFrac});n.material=Array.isArray(n.material)?n.material.map(r):r(n.material)}),a}return{make:s,whenReady:a,heightFactor:e=>Ft[e]??1,get ready(){return i}}}var Kt=[`video/mp4;codecs=avc1.42E01E`,`video/mp4`,`video/webm;codecs=vp9`,`video/webm`];function qt({renderer:e,rig:t,sunRig:n,poke:r,getState:i,office:a={}}){let o=e.domElement,s=new URLSearchParams(window.location.search),c=e=>{let t=i();return`lgr-${t.lesson}-${String(t.clock||``).replace(`:`,``)}-${t.style}.${e}`},l=(e,t)=>{let n=URL.createObjectURL(e),r=document.createElement(`a`);r.href=n,r.download=t,document.body.appendChild(r),r.click(),r.remove(),setTimeout(()=>URL.revokeObjectURL(n),1e3)};function u(){o.toBlob(e=>{e&&(l(e,c(`png`)),window.__lastStill=e.size)},`image/png`)}let d=()=>Kt.find(e=>window.MediaRecorder&&MediaRecorder.isTypeSupported(e))||``,f=Jt(),p=null,m=[],h=!1;function g(){if(h)return;let e=d(),t=o.captureStream(60);p=new MediaRecorder(t,e?{mimeType:e,videoBitsPerSecond:12e6}:{}),m=[],p.ondataavailable=e=>{e.data&&e.data.size&&m.push(e.data)},p.onstop=()=>{let e=new Blob(m,{type:p.mimeType});l(e,c(p.mimeType.includes(`mp4`)?`mp4`:`webm`)),window.__lastVideo=e.size},p.start(),h=!0,window.__recording=!0,f.show()}function _(){h&&(p.stop(),h=!1,window.__recording=!1,f.hide())}let v=()=>h?_():g(),y=e=>new Promise(t=>setTimeout(t,e)),b=e=>window.dispatchEvent(new KeyboardEvent(`keydown`,{key:e}));async function x(){let e=o.clientWidth,t=o.clientHeight,n=e*.26,i=t*.74;for(let t=0;t<=10;t++)r.at(n+t*e*.028,i+Math.sin(t*.7)*16),await y(100);r.stop()}async function S(e){if(e.keys)for(let t of e.keys)b(t),await y(70);e.zoom&&t.zoomBy(e.zoom),e.orbit&&t.orbit(e.orbit[0],e.orbit[1]),e.timeTo!==void 0&&n.goTo(e.timeTo),e.office&&a[e.office]?.(),e.ripple&&await x(),e.waitMs&&await y(e.waitMs)}let C={tour:[{keys:[`6`,`0`],waitMs:600},{zoom:.72,waitMs:1700},{ripple:!0,waitMs:2400},{orbit:[.55,0],waitMs:1700},{timeTo:0,waitMs:3e3},{timeTo:.5,waitMs:1500},{keys:[`7`],waitMs:1e3},{zoom:1.5,waitMs:1400},{keys:[`B`],waitMs:2e3},{keys:[`B`],waitMs:2e3},{keys:[`B`],waitMs:2e3},{keys:[`B`],waitMs:2e3},{keys:[`B`],waitMs:2e3},{keys:[`8`],waitMs:900},{zoom:.65,waitMs:1200},{ripple:!0,waitMs:2600},{keys:[`7`],waitMs:700},{keys:[`B`],waitMs:300},{keys:[`B`],waitMs:900},{zoom:1.4,waitMs:2600}],daycycle:[{keys:[`6`,`0`],waitMs:700},{timeTo:.75,waitMs:2600},{timeTo:1,waitMs:2600},{timeTo:1.25,waitMs:2600},{timeTo:1.5,waitMs:2600},{timeTo:1.5,waitMs:800}],office:[{keys:[`o`],waitMs:1700},{office:`pet`,waitMs:1300},{office:`feed`,waitMs:1700},{office:`travel`,waitMs:1700},{keys:[`W`,`W`,`W`],waitMs:1800},{timeTo:0,waitMs:2400},{office:`laptop`,waitMs:800},{office:`closeLaptop`,waitMs:300},{timeTo:.5,waitMs:900},{keys:[`W`],waitMs:200},{keys:[`o`],waitMs:1500}],cities:[{keys:[`6`,`0`],waitMs:500},{timeTo:.78,waitMs:2800},{keys:[`C`],waitMs:3e3},{keys:[`C`],waitMs:3e3},{keys:[`C`],waitMs:2e3}],water:[{keys:[`6`,`0`],waitMs:600},{zoom:1.35,waitMs:2800},{orbit:[.7,0],waitMs:2600},{ripple:!0,waitMs:2200},{timeTo:0,waitMs:3200},{timeTo:.5,waitMs:1500},{orbit:[-.5,0],waitMs:2200}],morph:[{keys:[`6`,`3`],waitMs:700},{zoom:.55,waitMs:1800},{zoom:2.3,waitMs:1700},{zoom:1.26,waitMs:1700},{zoom:1.16,waitMs:1900},{zoom:.3,waitMs:2200}],skin:[{keys:[`o`],waitMs:1800},{keys:[`j`],waitMs:2e3},{keys:[`j`],waitMs:2e3},{timeTo:0,waitMs:2600},{timeTo:.5,waitMs:1500},{keys:[`u`],waitMs:2e3},{keys:[`j`],waitMs:1400},{keys:[`o`],waitMs:1500}]};async function w(e){let t=C[e];if(t){window.__director=e;for(let e of t)await S(e);window.__director=null}}async function T(e){await y(1600),g(),await w(e),await y(400),_(),window.__captureDone=!0}window.addEventListener(`keydown`,e=>{(e.key===`s`||e.key===`S`)&&u(),(e.key===`r`||e.key===`R`)&&v()});let E=s.get(`capture`);return E&&C[E]&&T(E),window.__capture={still:u,toggleRec:v,run:w,sequences:Object.keys(C)},window.__capture}function Jt(){let e=document.createElement(`div`);return e.textContent=`● REC`,e.style.cssText=`position:fixed;top:14px;right:16px;z-index:2;font:bold 12px ui-monospace,monospace;color:#ff3b30;letter-spacing:.12em;text-shadow:0 1px 3px #000;display:none;`,document.body.appendChild(e),{show:()=>{e.style.display=`block`},hide:()=>{e.style.display=`none`}}}var Yt=`
.vui { position: fixed; left: 50%; bottom: 16px; transform: translateX(-50%); z-index: 3;
  display: flex; gap: 8px; align-items: center; padding: 7px 9px; border-radius: 14px;
  background: rgba(16,18,24,0.72); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
  box-shadow: 0 6px 24px rgba(0,0,0,0.4); font: 600 12px/1 ui-monospace, monospace;
  color: #d8dde6; pointer-events: auto; user-select: none; max-width: calc(100vw - 24px);
  flex-wrap: wrap; justify-content: center; }
.vui button { min-width: 44px; min-height: 44px; padding: 0 12px; border: 0; border-radius: 10px;
  background: rgba(255,255,255,0.07); color: inherit; font: inherit; cursor: pointer;
  letter-spacing: .04em; transition: background .12s; }
.vui button:hover { background: rgba(255,255,255,0.16); }
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
`;function Xt({controls:e,state:t,show:n,coarse:r}){if(typeof document>`u`)return;let i=document.createElement(`style`);i.textContent=Yt,document.head.appendChild(i);let a=document.createElement(`div`);a.className=`vui`;let o=document.createElement(`div`);o.className=`vui-info`,o.innerHTML=`KEYS · 4/5/6 cam · 0 vector · 7/8 pixel/toon · B era · T time · [ ] scrub · 9 auto · C city · G shuffle · W weather · K season · click a building / O office · J office skin · U painted props · Esc exit · M hide UI · S still · R rec · H shadows · P theme · drag water to ripple`;let s=(e,t,n)=>{let r=document.createElement(`button`);return r.textContent=e,n&&(r.title=n),r.addEventListener(`click`,t),r},c=e=>{let t=document.createElement(`div`);return t.className=`seg`,{seg:t,btns:e.map(([n,r])=>{let i=s(n,()=>e.find(e=>e[1]===r)[2](),n);return i.dataset.val=r,t.appendChild(i),i})}},l=s(`City`,()=>e.city(),`Next city profile (C)`),u=s(`Shuffle`,()=>e.shuffle(),`New random seed (G)`),d={clear:`Clear`,rain:`Rain`,snow:`Snow`,fog:`Fog`},f=[`Spring`,`Summer`,`Autumn`,`Winter`],p=s(`Clear`,()=>e.weather(),`Cycle weather: clear→rain→snow→fog (W)`),m=s(`Spring`,()=>e.season(),`Cycle season: spring→summer→autumn→winter (K)`),h=s(`Office`,()=>e.office(),`Dive into / exit the office (O · Esc)`),g={"3d":`3D`,smooth:`Smooth`,charm:`Charm`},_=s(`Skin`,()=>e.officeSkin(),`Office look: 3D → smooth → charm diffusion (J)`),v={painted:`Painted`,"3d":`Live 3D`},y=s(`Props`,()=>e.officeProps(),`Office props: painted (cohesive) ↔ live 3D (animated) — under a skin (U)`),b=c([[`Auto`,`auto`,()=>e.style(`auto`)],[`Vector`,`vector`,()=>e.style(`vector`)],[`Pixel`,`pixel`,()=>e.style(`pixel`)],[`Toon`,`toon`,()=>e.style(`toon`)]]);b.btns[0].title=`AUTO: zoom morphs the style (toon → 16-bit → 8-bit → Game Boy)`;let x={native:`Era`,gb:`GB`,"8-bit":`8-bit`,"16-bit":`16-bit`,modern:`Modern`,"1-bit":`1-bit`},S=s(`Era`,()=>e.era(),`Cycle the pixel era (B): native → GB → 8-bit → 16-bit → Modern`),C=document.createElement(`input`);C.type=`range`,C.min=`0`,C.max=`1`,C.step=`0.01`,C.title=`Time of day`;let w=!1;C.addEventListener(`pointerdown`,()=>{w=!0}),C.addEventListener(`pointerup`,()=>{w=!1}),C.addEventListener(`input`,()=>e.time(parseFloat(C.value)));let T=s(`▶`,()=>e.auto(),`Play/pause day cycle (9)`),E=document.createElement(`div`);E.style.cssText=`display:flex;align-items:center;gap:6px;`;let ee=document.createElement(`span`);ee.className=`lbl`,ee.textContent=`Day`,E.append(ee,C,T);let D=c([[`Iso`,`iso`,()=>e.cam(`iso`)],[`Dim`,`dimetric`,()=>e.cam(`dimetric`)],[`3D`,`persp`,()=>e.cam(`persp`)]]),te=s(`ⓘ`,()=>o.classList.toggle(`open`),`All keys`),O=s(`⌄`,()=>F(!0),`Hide controls — watch unobstructed (M)`),k=document.createElement(`div`);k.className=`vui-more`;let ne=s(`More`,()=>k.classList.toggle(`open`),`More controls`);if(r){a.append(l,u,h,T,b.seg,ne,O);let e=document.createElement(`div`);e.style.cssText=`display:flex;align-items:center;gap:6px;`,e.append(ee,C),k.append(p,m,_,y,S,D.seg,e)}else a.append(l,u,oe(),p,m,h,_,y,oe(),b.seg,S,oe(),E,oe(),D.seg,te,oe(),O);let A=document.createElement(`button`);A.className=`vui-show`,A.innerHTML=`⌃ Controls`,A.title=`Show controls (M)`,A.addEventListener(`click`,()=>F(!1));let j=document.createElement(`div`);j.className=`vui-style`,document.body.append(o,k,a,A,j);let re=n,M=!1;F(r);function N(){let e=t();b.btns.forEach(t=>t.classList.toggle(`on`,t.dataset.val===e.style)),D.btns.forEach(t=>t.classList.toggle(`on`,t.dataset.val===e.cam)),p.textContent=d[e.weather]||`Clear`,p.classList.toggle(`on`,e.weather!==`clear`),m.textContent=f[e.season]||`Spring`,m.classList.toggle(`on`,(e.season||0)>0),h.textContent=e.office?`Exit`:`Office`,h.classList.toggle(`on`,!!e.office),_.textContent=g[e.officeSkin]||`Skin`,_.classList.toggle(`on`,e.officeSkin&&e.officeSkin!==`3d`),y.textContent=v[e.officeProps]||`Props`,y.classList.toggle(`on`,e.officeProps===`painted`&&e.officeSkin&&e.officeSkin!==`3d`),T.textContent=e.auto?`❚❚`:`▶`,T.classList.toggle(`on`,e.auto),S.textContent=x[e.era]||`Era`,S.classList.toggle(`on`,e.era&&e.era!==`native`),w||(C.value=String(e.t))}N();let P=setInterval(N,200);function F(e){if(!re){a.style.display=`none`,A.classList.remove(`on`),o.classList.remove(`open`),k.classList.remove(`open`),j.classList.remove(`on`);return}M=e,a.style.display=e?`none`:`flex`,A.classList.toggle(`on`,e),e&&(o.classList.remove(`open`),k.classList.remove(`open`),j.classList.remove(`on`))}function I(){F(!M)}let L=null,ie=null;function ae(e){if(!re||M){j.classList.remove(`on`),L=null;return}if(!e){j.classList.remove(`on`),L=``;return}e!==L&&(L=e,j.textContent=e,j.classList.add(`on`),clearTimeout(ie),ie=setTimeout(()=>j.classList.remove(`on`),2e3))}return{toggle:I,setHidden:F,refresh:N,setStyleHint:ae,destroy(){clearInterval(P),a.remove(),o.remove(),k.remove(),A.remove(),j.remove(),i.remove(),clearTimeout(ie)}};function oe(){let e=document.createElement(`div`);return e.className=`sep`,e}}var Zt=[`clear`,`rain`,`snow`,`fog`];function Qt({extent:e=7}={}){let t=new C;t.raycast=()=>{};let n=e+2,r=.25,i=(e,t)=>e+Math.random()*(t-e),a=new w(new ve(.015,.5),new _({color:`#a9bdd6`,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),600);a.frustumCulled=!1,a.raycast=()=>{};let o=new Float32Array(600*3),s=new Float32Array(600);for(let e=0;e<600;e++)o[e*3]=i(-n,n),o[e*3+1]=i(r,11),o[e*3+2]=i(-n,n),s[e]=i(9,14);let c=new w(new ve(.07,.07),new _({color:`#f3f7ff`,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),700);c.frustumCulled=!1,c.raycast=()=>{};let l=new Float32Array(700*3),d=new Float32Array(700),f=new Float32Array(700);for(let e=0;e<700;e++)l[e*3]=i(-n,n),l[e*3+1]=i(r,11),l[e*3+2]=i(-n,n),d[e]=i(0,6.28),f[e]=i(.6,1.2);t.add(a,c);let p=Array.from({length:8},()=>new z),m=0,h=`clear`,g=0,v=0,y=0,b=0,x=0,S=new u,T=(e,t,n,r)=>e+(t-e)*Math.min(1,n*r);function E(e){Zt.includes(e)&&(h=e)}function ee(){h=Zt[(Zt.indexOf(h)+1)%Zt.length]}function D(e,t){let u=h===`rain`,_=h===`snow`,C=h===`fog`,w=h!==`clear`;g=T(g,+!!w,e,1.4),v=T(v,+!!w,e,1.2),y=T(y,+!!C,e,.9),x=T(x,w&&!C?1:0,e,1),b=T(b,+!!_,e,_?.22:.5);let E=u?g:0,ee=Math.round(600*E);for(let t=0;t<600;t++){if(t>=ee){S.position.set(0,-50,0),S.scale.setScalar(0),S.updateMatrix(),a.setMatrixAt(t,S.matrix);continue}o[t*3+1]-=s[t]*e,o[t*3]+=e*1.1,o[t*3+1]<r&&(o[t*3]=i(-n,n),o[t*3+1]=11,o[t*3+2]=i(-n,n)),S.position.set(o[t*3],o[t*3+1],o[t*3+2]),S.rotation.set(0,0,0),S.scale.set(1,1,1),S.updateMatrix(),a.setMatrixAt(t,S.matrix)}a.instanceMatrix.needsUpdate=!0,a.material.opacity=.55*E,m=u?Math.round(8*g):0;for(let e=0;e<m;e++)p[e].set(Math.random(),Math.random(),.05*g);let D=Math.round(700*(_?g:0));for(let a=0;a<700;a++){if(a>=D){S.position.set(0,-50,0),S.scale.setScalar(0),S.updateMatrix(),c.setMatrixAt(a,S.matrix);continue}l[a*3+1]-=f[a]*e;let o=Math.sin(t*1.5+d[a])*.5;l[a*3+1]<r&&(l[a*3]=i(-n,n),l[a*3+1]=11,l[a*3+2]=i(-n,n)),S.position.set(l[a*3]+o,l[a*3+1],l[a*3+2]),S.rotation.set(0,0,0),S.scale.setScalar(1),S.updateMatrix(),c.setMatrixAt(a,S.matrix)}c.instanceMatrix.needsUpdate=!0,c.material.opacity=.9*(_?g:0)}return{group:t,update:D,cycle:ee,setKind:E,rainDrops:p,get kind(){return h},get intensity(){return g},get overcast(){return v},get fog(){return y},get snow(){return b},get cloud(){return x},get rainDropCount(){return m},poolCounts:{rain:600,snow:700}}}var $t=``+new URL(`office-smooth-DEluvd7o.png`,import.meta.url).href,en=``+new URL(`office-charm-D7t90SkH.png`,import.meta.url).href;function U(e,t,n,r,{rough:i=.62,metal:a=0,x:o=0,y:s=0,z:c=0,emissive:l=null,emissiveIntensity:u=1}={}){let d=new I(new P(e,t,n),new v({color:r,roughness:i,metalness:a,...l?{emissive:l,emissiveIntensity:u}:{}}));return d.position.set(o,s,c),d}function tn({tier:e=`corner`}={}){let t=new h,n=new S(43,1,.1,100),r=new z(0,1.62,4.35);n.position.copy(r),n.lookAt(0,1.12,-1);let i=new C;t.add(i);let a=new C,s=new C,c=new C,l=new C,u=new C;i.add(a,s,c,l,u);let f=[],p=`#3a2618`,m=`#5b3d27`,g=`#5a5650`;a.add(U(11,.2,11,`#3c2a1c`,{rough:.5,y:-.1})),a.add(U(11,.2,11,`#241a13`,{rough:.9,y:3}));function y(e){let t=new C;t.add(U(.2,3.2,8,`#4a3322`,{rough:.7,x:e*3.6,y:1.5,z:0}));for(let n of[.9,2.1])t.add(U(.22,.06,8,p,{x:e*3.59,y:n,z:0}));let n=new I(new ve(1.5,1),new v({map:un(e),roughness:.8}));return n.position.set(e*3.49,1.7,.4),n.rotation.y=-e*Math.PI/2,t.add(U(.06,1.18,1.68,`#2a1c10`,{x:e*3.52,y:1.7,z:.4}),n),t}a.add(y(-1),y(1));let b=new ve(3,2.5),w=new _({color:`#ffffff`,toneMapped:!1}),T=new _({color:`#ffffff`,toneMapped:!1}),E=1.55,ee=new I(b,w);ee.position.set(-1.06,E,-2.64),ee.rotation.y=Math.PI/4;let te=new I(b,T);te.position.set(1.06,E,-2.64),te.rotation.y=-Math.PI/4,c.add(ee,te),a.add(U(.08,2.7,.08,p,{x:0,y:E,z:-2.2}));for(let[e,t,n]of[[-1.06,-2.64,Math.PI/4],[1.06,-2.64,-Math.PI/4]]){let r=new C;r.add(U(3.05,.09,.09,p,{y:1.3})),r.add(U(3.05,.09,.09,p,{y:-1.25})),r.add(U(.09,2.6,.09,p,{x:-1.5})),r.position.set(e,E,t),r.rotation.y=n,a.add(r)}a.add(U(5.4,.5,.3,m,{x:0,y:.25,z:-2.1500000000000004})),a.add(U(.4,.06,.4,`#1a130c`,{y:2.94,z:1.3}));let k=new I(new pe(.16,20),new _({color:`#ffe6b0`,toneMapped:!1}));k.position.set(0,2.9,1.3),k.rotation.x=Math.PI/2,a.add(k),a.add(rn(f,{x:-3.46,y:2.15,z:.2,ry:Math.PI/2,face:`#efe2c8`,rim:`#2a1c10`})),s.add(U(11,.2,11,`#403d38`,{rough:.85,y:-.1})),s.add(U(11,.2,11,`#1c1a17`,{rough:.95,y:2.8})),s.add(U(7,3,.2,g,{rough:.92,x:0,y:1.4,z:-2.9})),s.add(U(.2,3,6,g,{rough:.92,x:-3.2,y:1.4,z:-.2})),s.add(U(.2,3,6,g,{rough:.92,x:3.2,y:1.4,z:-.2}));for(let e of[-1.6,-.4]){let t=new I(new ae(.07,.07,6,10),new v({color:`#6b6258`,roughness:.6,metalness:.4}));t.rotation.z=Math.PI/2,t.position.set(0,2.62,e),s.add(t)}let ne=new _({color:`#ffffff`,toneMapped:!1}),A=new I(new ve(1.9,1.2),ne);A.position.set(0,1.5,-2.79),s.add(A),s.add(U(2.06,1.36,.06,`#241a12`,{x:0,y:1.5,z:-2.83})),s.add(U(.04,.34,.04,`#1a1410`,{x:-.1,y:2.45,z:-.4}));let j=new I(new pe(.1,16),new _({color:`#ffdb8a`,toneMapped:!1}));j.position.set(-.1,2.26,-.4),j.rotation.x=Math.PI/2,s.add(j);let N=new C;N.add(U(1.3,.05,.32,`#3a2c1e`,{x:0,y:0,z:0}));let F=[`#7a3a2a`,`#2a4a6a`,`#b08a3a`,`#3a5a3a`,`#6a2a4a`];for(let e=0;e<8;e++)N.add(U(.12,.34,.24,F[e%F.length],{x:-.55+e*.14,y:.2,z:0}));N.position.set(-2.3,1.5,-2.66),s.add(N);let ie=new C;ie.add(U(.34,.34,.34,`#7a4a2a`,{y:.17}));let oe=new C;for(let e=0;e<6;e++){let t=U(.05,.5,.14,`#3a7a3a`,{rough:.7});t.geometry.translate(0,.25,0),t.rotation.z=(e/6-.5)*1.2,t.rotation.x=Math.sin(e)*.25,oe.add(t)}oe.position.y=.34,ie.add(oe),ie.position.set(2.45,0,-1.4),s.add(ie),s.add(rn(f,{x:1.9,y:2.1,z:-2.78,ry:0,face:`#d8d2c4`,rim:`#1a130c`}));let R=new C;R.add(U(3.4,.12,1.5,`#6e4a30`,{rough:.32,y:.86,z:1.5})),R.add(U(3.2,.78,1.36,m,{y:.46,z:1.5}));for(let e of[.66,.4,.14])R.add(U(.9,.2,.04,`#4a3120`,{x:1.05,y:e,z:2.2}));R.add(U(.12,.04,.04,`#caa15a`,{x:1.05,y:.66,z:2.23,metal:.6})),i.add(R);let se=new C;se.add(U(.06,.5,.06,`#2a1c10`,{x:-1.15,y:1.15,z:1.6}));let le=new I(new ce(.22,.26,16,1,!0),new v({color:`#c2802e`,roughness:.5,side:2,emissive:`#3a2208`,emissiveIntensity:.6}));le.position.set(-1.15,1.42,1.6),se.add(le);let ue=new o(`#ffb15a`,7,7,1.8);ue.position.set(-1.15,1.34,1.6),se.add(ue),i.add(se);let B=new C;B.add(U(.62,.03,.42,`#1c1c20`,{y:.93,z:1.5,metal:.4,rough:.4}));let de=new I(new P(.62,.4,.025),new v({color:`#0a0c10`,emissive:`#2a4a6a`,emissiveIntensity:.7,roughness:.3}));de.position.set(0,1.14,1.31),de.rotation.x=-.32,B.add(de),B.userData.role=`laptop`,i.add(B);let fe=new C;fe.add(U(.26,.07,.34,`#15151a`,{x:1,y:.93,z:1.5})),fe.add(U(.3,.06,.08,`#101015`,{x:1,y:1,z:1.34})),fe.userData.role=`phone`,i.add(fe);let me=new he(`#6a5238`,`#140d08`,.55);t.add(me);let ge=new D(`#ffd9a0`,9,9,.7,.5,1.2);ge.position.set(0,2.95,1.3),ge.target.position.set(0,.86,1.5),t.add(ge,ge.target);let _e=an(!1),ye=an(!0),be=.62,xe=1.32,Se=1.22,Ce=1.78,we=new O(new x({map:_e,transparent:!0,depthWrite:!1}));we.scale.set(be,be,1),we.position.set(xe,Se,Ce),we.userData.role=`cat`,i.add(we);let Te=new O(new x({map:sn(),transparent:!0,depthWrite:!1,opacity:0}));Te.scale.set(.3,.3,1),Te.raycast=()=>{},i.add(Te);let Ee=0;function De(){Ee=1.3}let Oe=.62,ke=.42,Ae=.34,je=new C;je.position.set(-.78,1.06,1.95),je.add(U(Oe,.05,Ae,`#3a3026`,{y:-.19}));let Me=new I(new P(Oe-.04,ke-.08,Ae-.04),new v({color:`#1f9fc0`,transparent:!0,opacity:.26,roughness:.1,emissive:`#0a3a4a`,emissiveIntensity:.4,depthWrite:!1}));Me.position.y=.02,je.add(Me);for(let e of[-1,1])for(let t of[-1,1])je.add(U(.03,ke,.03,`#20262c`,{x:e*(Oe/2-.015),z:t*(Ae/2-.015),metal:.5}));let Ne=new I(new P(Oe,ke,Ae),new _({visible:!1}));Ne.userData.role=`tank`,je.add(Ne);let Pe=new o(`#5fd8ff`,0,3,2);je.add(Pe);let Fe=[cn(`#e8a23c`),cn(`#d85a6a`),cn(`#6cc0e0`)],Ie=[],Le=ke/2-.12;for(let e=0;e<3;e++){let t=new O(new x({map:Fe[e],transparent:!0,depthWrite:!1})),n=.15-e*.015;t.userData={sz:n,sp:.6+e*.22,ph:e*2.1,ax:.21*(.7+.1*e),ay:Le,az:.09000000000000001,prevx:0},t.scale.set(n,n,1),Ie.push(t),je.add(t)}let Re=ln(),ze=[];for(let e=0;e<5;e++){let t=new O(new x({map:Re,color:`#cfeffb`,transparent:!0,opacity:.5,depthWrite:!1}));t.userData={ph:e/5,sp:.16+Math.random()*.06,x:-.1+e%3*.07},t.scale.setScalar(.03+e%2*.015),t.raycast=()=>{},ze.push(t),je.add(t)}let Be=new O(new x({map:Re,color:`#c8a24a`,transparent:!0,opacity:0,depthWrite:!1}));Be.scale.setScalar(.04),Be.raycast=()=>{},je.add(Be);let Ve=0;function He(){Ve=3,Be.position.set(-.05,Le,0),Be.material.opacity=1}i.add(je);let Ue=new C;for(let e=0;e<8;e++){let t=new O(new x({map:Re,color:`#ffd9a0`,transparent:!0,opacity:0,depthWrite:!1,blending:2}));t.scale.setScalar(.018),t.userData={ph:e*.9,sp:.1+e%3*.04,r:.1+e%4*.03},t.raycast=()=>{},Ue.add(t)}Ue.position.set(-1.15,1.2,1.6),i.add(Ue),[R,se,B,fe,we,je,Ue].forEach(e=>l.add(e));function We(e,t,n,r,i,a,o){let s=new I(new P(t,n,r),new _({visible:!1}));s.position.set(i,a,o),s.userData.role=e,u.add(s)}We(`laptop`,.95,.6,.7,0,1.05,1.4),We(`phone`,.5,.4,.5,1,.98,1.42),We(`cat`,.62,.74,.5,xe,Se,Ce);let Ge=nn(),Ke={smooth:new re().load($t),charm:new re().load(en)};for(let e of[`smooth`,`charm`]){let t=Ke[e];t.colorSpace=d,t.repeat.set(1,.86),t.offset.set(0,.14),t.needsUpdate=!0}let qe=new I(new ve(1,1),new _({map:Ke.smooth,toneMapped:!1}));qe.position.set(0,1.45,-5),qe.visible=!1,qe.raycast=()=>{},t.add(qe);let Je=`3d`,Ye=`painted`;function Xe(){let e=it===`corner`,t=Je!==`3d`,n=t&&Ye===`painted`;a.visible=e&&!t,s.visible=!e&&!t,c.visible=t||e,qe.visible=t,l.visible=!n}function V(e){return Je=e===`smooth`||e===`charm`?e:`3d`,Je!==`3d`&&(qe.material.map=Ke[Je],qe.material.needsUpdate=!0),Xe(),Je}function Ze(e){return Ye=e===`3d`?`3d`:`painted`,Xe(),Ye}let Qe=ue.intensity,$e=de.material.emissiveIntensity,et=new M;function tt(e,t,i){let a=i?i.windowGlow:0,o=a>.55;we.material.map=o?ye:_e,Ee>0&&(Ee=Math.max(0,Ee-e));let s=Ee>0?Math.sin((1.3-Ee)/1.3*Math.PI):0,c=o?.012*Math.sin(t*1.2):.03*Math.sin(t*2.4);we.scale.set(be,be*(1+c+.12*s),1),we.position.y=Se+.06*s,Te.material.opacity=s,Te.position.set(xe,1.72+.5*(1-Ee/1.3),Ce),Te.scale.setScalar(.22+.1*s),Ve>0&&(Ve=Math.max(0,Ve-e),Be.position.y=Math.max(-.09,Be.position.y-e*.06),Be.material.opacity=Ve>.3?1:Ve/.3);for(let e of Ie){let n=e.userData,r=Math.sin(t*n.sp+n.ph)*n.ax,i=Math.sin(t*n.sp*.8+n.ph*1.7)*n.ay*.7,a=Math.cos(t*n.sp*.6+n.ph)*n.az,o=Ve>0?Be.position.x:r,s=Ve>0?Be.position.y:i,c=Ve>0?Be.position.z:a,l=Ve>0?.05:.1;e.position.x+=(o-e.position.x)*l,e.position.y+=(s-e.position.y)*l,e.position.z+=(c-e.position.z)*l,e.scale.x=(e.position.x>=n.prevx?1:-1)*n.sz,n.prevx=e.position.x}for(let e of ze){let n=(t*e.userData.sp+e.userData.ph)%1;e.position.set(e.userData.x+Math.sin(t*2+e.userData.ph*9)*.015,-.09+2*Le*n,.02),e.material.opacity=.5*Math.sin(n*Math.PI)}Pe.intensity=2.6*a,Me.material.emissiveIntensity=.4+.9*a,ue.intensity=Qe*(.97+.03*Math.sin(t*7)*Math.sin(t*2.3)),de.material.emissiveIntensity=$e*(.85+.15*Math.sin(t*3.1+1)),et.setRGB(1,.85,.62),Ue.children.forEach((e,n)=>{let r=e.userData,i=(t*r.sp+r.ph)%1;e.position.set(Math.cos(t*.5+r.ph*5)*r.r,-.15+i*.45,Math.sin(t*.4+r.ph*5)*r.r),e.material.opacity=(.1+.18*a)*Math.sin(i*Math.PI)}),oe.rotation.z=Math.sin(t*.8)*.05,oe.rotation.x=Math.sin(t*.6+1)*.04;let l=i?i.t%1:0;for(let e of f)e.rotation.z=-l*Math.PI*2;if(Ge.update(e),qe.visible){let e=n.position.z-qe.position.z,t=2*Math.tan(L.degToRad(n.fov)*.5)*e*1.18;qe.scale.set(t*n.aspect,t,1);let r=.55+.45*(1-a);qe.material.color.setRGB(r,r*.97,r*.92)}n.position.set(r.x+Math.sin(t*.5)*.04,r.y+Math.sin(t*.7)*.02,r.z),n.lookAt(0,1.12,-1)}function nt(e){w.map=e,T.map=e,w.needsUpdate=!0,T.needsUpdate=!0}function rt(e){ne.map=e,ne.needsUpdate=!0}let it=e;function at(e){it=e===`basement`?`basement`:`corner`;let t=it===`corner`;return Xe(),ge.intensity=t?9:3.2,me.intensity=t?.55:.78,me.color.set(t?`#6a5238`:`#7a5a34`),it}return at(it),{scene:t,camera:n,update:tt,setCityTexture:nt,setVignetteTexture:rt,setFitout:at,setSkin:V,setProps:Ze,petCat:De,feedFish:He,vignette:Ge,get interactables(){return Je!==`3d`&&Ye===`painted`?u.children:[B,fe,we,Ne]},get tier(){return it},get skin(){return Je},get props(){return Ye}}}function nn(){let e=new h;e.background=new M(`#7fb0dd`);let t=new p(-1.4,1.4,.9,-.9,0,10);t.position.set(0,0,5);let n=(e,t={})=>new _({color:e,toneMapped:!1,...t}),r=(e,t,r,i,a,o,s)=>{let c=new I(new ve(e,t),n(o,s));return c.position.set(r,i,a),c};e.add(r(3.2,.9,.5,-.95,1,`#2a4a30`)),e.add(r(3.2,.7,-.7,-1.05,2,`#1d3724`)),e.add(r(.06,.3,-.95,-.55,3,`#3a2a1a`));let i=new I(new pe(.22,18),n(`#234a2a`));i.position.set(-.95,-.32,3),e.add(i),e.add(r(.04,.55,.9,-.55,3,`#20242a`));let a=new I(new pe(.1,16),n(`#ffd98a`,{transparent:!0,opacity:0}));a.position.set(.9,-.26,3.1),e.add(a);let o=new I(new pe(.16,24),n(`#fff4d8`));e.add(o);let s=[];for(let[t,r]of[[-1,.5],[-.6,.7],[.2,.6],[.7,.72],[1.05,.45],[-.2,.78],[.45,.4]]){let i=new I(new pe(.015,8),n(`#ffffff`,{transparent:!0,opacity:0}));i.position.set(t,r,.5),s.push(i),e.add(i)}let c=new M(`#141d33`),l=new M(`#7fb6e0`),u=new M(`#d6824a`),d=new M(`#fff0cc`),f=new M(`#cdd8ef`),m=.34;function g(t){m=(m+t*.04)%1;let n=m*Math.PI*2,r=-Math.cos(n);o.position.set(Math.sin(n)*1.15,r*.66+.06,0);let i=L.smoothstep(r,-.18,.5),p=L.smoothstep(.32,0,Math.abs(r));e.background.copy(c).lerp(l,i).lerp(u,p*.45),o.material.color.copy(r>0?d:f),a.material.opacity=1-i;let h=(1-i)*.85;for(let e of s)e.material.opacity=h}return{scene:e,camera:t,update:g}}function rn(e,{x:t,y:n,z:r,ry:i=0,face:a=`#efe2c8`,rim:o=`#2a1c10`}){let s=new C,c=new I(new pe(.2,28),new v({color:o,roughness:.6})),l=new I(new pe(.17,28),new v({color:a,roughness:.7}));l.position.z=.01;let u=new I(new ve(.018,.14),new v({color:`#1a130c`,roughness:.5}));return u.geometry.translate(0,.05,0),u.position.z=.02,e.push(u),s.add(c,l,u),s.position.set(t,n,r),s.rotation.y=i,s}function an(e){let t=document.createElement(`canvas`);t.width=t.height=128;let n=t.getContext(`2d`),r=`#e08a3c`,i=`#b96a26`,a=`#3a2410`;if(n.lineJoin=`round`,e){n.fillStyle=r,n.beginPath(),n.ellipse(64,78,44,26,0,0,7),n.fill(),n.fillStyle=i,n.beginPath(),n.ellipse(64,86,44,16,0,0,7),n.fill(),n.fillStyle=r,n.beginPath(),n.arc(36,70,20,0,7),n.fill(),n.fillStyle=r,on(n,24,56,34,44,42,58),on(n,40,54,50,44,54,60),n.strokeStyle=i,n.lineWidth=7,n.lineCap=`round`,n.beginPath(),n.moveTo(100,70),n.quadraticCurveTo(112,90,88,96),n.stroke(),n.strokeStyle=a,n.lineWidth=2.5,n.beginPath(),n.arc(30,70,5,.1,Math.PI-.1),n.stroke(),n.strokeStyle=i,n.lineWidth=3;for(let e of[60,74,88])n.beginPath(),n.moveTo(e,58),n.lineTo(e,70),n.stroke()}else{n.fillStyle=r,n.beginPath(),n.ellipse(64,86,30,34,0,0,7),n.fill(),n.fillStyle=`#f3c98a`,n.beginPath(),n.ellipse(64,92,14,22,0,0,7),n.fill(),n.strokeStyle=i,n.lineWidth=8,n.lineCap=`round`,n.beginPath(),n.moveTo(92,100),n.quadraticCurveTo(116,86,104,60),n.stroke(),n.fillStyle=r,n.beginPath(),n.arc(64,48,24,0,7),n.fill(),n.fillStyle=r,on(n,44,34,50,18,60,34),on(n,84,34,78,18,68,34),n.fillStyle=`#f0b0c0`,on(n,47,30,50,22,56,32),on(n,81,30,78,22,72,32),n.fillStyle=a,n.beginPath(),n.arc(55,47,3.4,0,7),n.arc(73,47,3.4,0,7),n.fill(),n.fillStyle=`#e06a7a`,on(n,61,54,67,54,64,58),n.strokeStyle=a,n.lineWidth=1.6;for(let e of[-2,3])n.beginPath(),n.moveTo(50,55+e),n.lineTo(34,53+e),n.moveTo(78,55+e),n.lineTo(94,53+e),n.stroke();n.strokeStyle=i,n.lineWidth=3;for(let e of[78,90,102])n.beginPath(),n.moveTo(50,e),n.lineTo(78,e),n.stroke()}let o=new B(t);return o.colorSpace=d,o}function on(e,t,n,r,i,a,o){e.beginPath(),e.moveTo(t,n),e.lineTo(r,i),e.lineTo(a,o),e.closePath(),e.fill()}function sn(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`);t.fillStyle=`#ff5a8a`,t.beginPath(),t.moveTo(32,52),t.bezierCurveTo(6,32,14,10,32,24),t.bezierCurveTo(50,10,58,32,32,52),t.fill();let n=new B(e);return n.colorSpace=d,n}function cn(e){let t=document.createElement(`canvas`);t.width=t.height=64;let n=t.getContext(`2d`);n.fillStyle=e,n.beginPath(),n.ellipse(30,32,18,11,0,0,7),n.fill(),n.beginPath(),n.moveTo(46,32),n.lineTo(60,22),n.lineTo(60,42),n.closePath(),n.fill(),n.fillStyle=`rgba(255,255,255,0.35)`,n.beginPath(),n.ellipse(28,36,12,5,0,0,7),n.fill(),n.fillStyle=`#15212a`,n.beginPath(),n.arc(20,30,2.6,0,7),n.fill();let r=new B(t);return r.colorSpace=d,r}function ln(){let e=document.createElement(`canvas`);e.width=e.height=32;let t=e.getContext(`2d`),n=t.createRadialGradient(16,16,0,16,16,16);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.6,`rgba(255,255,255,0.7)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.beginPath(),t.arc(16,16,16,0,7),t.fill();let r=new B(e);return r.colorSpace=d,r}function un(e){let t=document.createElement(`canvas`);t.width=t.height=256;let n=t.getContext(`2d`),r=n.createLinearGradient(0,0,256,256);e<0?(r.addColorStop(0,`#6a3b1c`),r.addColorStop(1,`#caa15a`)):(r.addColorStop(0,`#3a4a6a`),r.addColorStop(1,`#a86a3a`)),n.fillStyle=r,n.fillRect(0,0,256,256),n.globalAlpha=.5;for(let e=0;e<5;e++)n.fillStyle=e%2?`#2a1c10`:`#e0c080`,n.fillRect(30+e*36,40+e%3*30,26,150);let i=new B(t);return i.colorSpace=d,i}function dn(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=(e,n,r)=>{let i=t.createRadialGradient(e,n,0,e,n,r);i.addColorStop(0,`rgba(255,255,255,0.95)`),i.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=i,t.beginPath(),t.arc(e,n,r,0,7),t.fill()};n(128*.42,128*.56,128*.26),n(128*.6,128*.5,128*.3),n(128*.5,128*.46,128*.22),n(128*.34,128*.54,128*.18),n(128*.7,128*.58,128*.18);let r=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5],i=t.getImageData(0,0,128,128),a=i.data;for(let e=0;e<128;e++)for(let t=0;t<128;t++){let n=(e*128+t)*4,i=a[n+3]/255,o=(r[e%4*4+t%4]+.5)/16-.5;a[n+3]=Math.max(0,Math.min(1,Math.floor(i*5+.5+o)/5))*255}t.putImageData(i,0,0);let o=new B(e);return o.colorSpace=d,o}function fn({extent:e=8,count:t=16}={}){let n=new C;n.raycast=()=>{};let r=dn(),i=e+6,a=(e,t)=>e+Math.random()*(t-e),o=[];for(let e=0;e<t;e++){let e=new x({map:r,transparent:!0,depthWrite:!1,opacity:0,fog:!0}),t=new O(e),s={sp:t,mat:e,wisp:Math.random(),x:a(-i,i),z:a(-i,i),hiY:a(4,6.8),loY:a(.6,2.2),w:a(3,5.6),h:a(1.7,3),speed:a(.25,.7),op:a(.6,1)};t.raycast=()=>{},o.push(s),n.add(t)}let s=new M,c=new M(`#ffffff`),l=new M(`#5b626e`);function u(e,t,n,r){let u=r?r.cloud:0,d=r?r.fog:0,f=Math.min(1,.4+.6*u+.5*d);s.copy(n.sky).lerp(c,.62),s.lerp(l,.6*u);for(let n=0;n<o.length;n++){let r=o[n],c=n/o.length<f;r.x+=r.speed*e*(.6+.8*u),r.x>i&&(r.x=-i,r.z=a(-i,i));let l=Math.min(pn(r.x,-i,-i+3),1-pn(r.x,i-3,i)),p=r.hiY*(1-d)+r.loY*d,m=1-.5*r.wisp,h=.72*Math.max(0,1-d-u)+1*u+.42*d,g=c?Math.max(0,h)*r.op*m*l:0;r.mat.opacity+=(g-r.mat.opacity)*Math.min(1,e*2.5),r.mat.color.copy(s);let _=r.w*(1+.6*d)*(1+.4*r.wisp),v=r.h*(1-.35*d);r.sp.scale.set(_,v,1),r.sp.position.set(r.x,p+Math.sin(t*.3+n)*.15,r.z)}}function d(e){r=e;for(let t of o)t.mat.map=e,t.mat.needsUpdate=!0}return{group:n,update:u,setTexture:d,get count(){return o.length}}}function pn(e,t,n){let r=Math.max(0,Math.min(1,(e-t)/(n-t)));return r*r*(3-2*r)}var mn=`varying vec2 vUv;

void main() {
  
  
  
  vUv = uv;

  
  
  
  
  
  
  
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,hn=`precision highp float;

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
}`,gn=`precision highp float;

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
}`,_n=`precision highp float;

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
}`,vn=`precision highp float;

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
}`,yn=`const float CA_STRENGTH   = 0.0030;  
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
}`,bn=`const float DITHER = 0.55;   

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
}`,xn=`precision highp float;

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
}`,Sn=`precision highp float;

varying vec2 vUv;
uniform sampler2D uToon;   
uniform sampler2D uPixel;  
uniform float     uBlend;  

void main() {
  vec3 t = texture2D(uToon, vUv).rgb;
  vec3 p = texture2D(uPixel, vUv).rgb;
  gl_FragColor = vec4(mix(t, p, uBlend), 1.0);
}`,Cn=`precision highp float;

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
}`,wn=220,Tn=new URLSearchParams(window.location.search),En=Tn.get(`demo`)===`1`||Tn.has(`capture`);window.__demo=En;var Dn={night:[`#0A0C16`,`#1C2236`,`#3A3A52`,`#5A5A78`,`#8A92B0`],dawn:[`#1A1008`,`#43281A`,`#7A4A30`,`#B07A4E`,`#E8A86A`],noon:[`#16100A`,`#3A2F1E`,`#6B563A`,`#937B54`,`#B89968`],dusk:[`#140A0A`,`#3E1E1A`,`#7A3828`,`#B85A36`,`#F0884A`]},On={night:[`#020604`,`#06180E`,`#10401E`,`#1E9040`,`#7FE0FF`],dawn:[`#060603`,`#1A2410`,`#3A6B22`,`#6CC040`,`#FFC060`],noon:[`#050805`,`#0E2912`,`#1E6B2F`,`#3CF06A`,`#FFB000`],dusk:[`#080402`,`#241408`,`#6B4A12`,`#E0A030`,`#FF7030`]},W=new oe({antialias:!0,preserveDrawingBuffer:!0});W.shadowMap.enabled=!0,W.shadowMap.type=1,W.setPixelRatio(Math.min(window.devicePixelRatio,2)),W.setSize(window.innerWidth,window.innerHeight),W.setClearColor(920327,1),document.body.appendChild(W.domElement);var G=W.getDrawingBufferSize(new R),K=new h;K.fog=new ge(10465470,0);var kn=new M(`#aeb6c0`),An=.062,jn=new M(`#74508f`),Mn=new M,q=Fe({aspect:window.innerWidth/window.innerHeight}),J=bt({t:.5}),Nn=256,Pn={type:s,format:T,minFilter:b,magFilter:b,wrapS:j,wrapT:j,depthBuffer:!1,stencilBuffer:!1},Fn=[new F(Nn,Nn,Pn),new F(Nn,Nn,Pn),new F(Nn,Nn,Pn)];for(let e of Fn)W.setRenderTarget(e),W.clear();W.setRenderTarget(null);var In=new h,Ln=new p(-1,1,1,-1,0,1),Rn=new le({vertexShader:r,fragmentShader:gn,uniforms:{uCurr:{value:null},uPrev:{value:null},uTexel:{value:new R(1/Nn,1/Nn)},uMouse:{value:new R(-1,-1)},uMouseStrength:{value:0},uC2:{value:.25},uDamping:{value:.992},uRainCount:{value:0},uRainDrops:{value:Array.from({length:8},()=>new z)},uWakeCount:{value:0},uWakeDrops:{value:Array.from({length:8},()=>new z)}}});In.add(new I(new ve(2,2),Rn));var zn=new F(G.x,G.y,{minFilter:c,magFilter:c,depthBuffer:!0,stencilBuffer:!1});function Bn(e){let t=document.createElement(`canvas`);t.width=t.height=1024;let n=t.getContext(`2d`);n.fillStyle=e?`#0c1418`:`#15110b`,n.fillRect(0,0,1024,1024),n.strokeStyle=e?`rgba(120,150,170,0.22)`:`rgba(184,153,104,0.30)`,n.lineWidth=2;for(let e=0;e<=1024;e+=64)n.beginPath(),n.moveTo(e,0),n.lineTo(e,1024),n.stroke(),n.beginPath(),n.moveTo(0,e),n.lineTo(1024,e),n.stroke();e||(n.fillStyle=`#B89968`,n.font=`bold 360px Georgia, serif`,n.textAlign=`center`,n.textBaseline=`middle`,n.fillText(`LGR`,512,470),n.font=`600 64px ui-monospace, monospace`,n.fillText(`WEB · STUDIO`,512,720));let r=new B(t);return r.colorSpace=d,r}var Vn=28,Hn=new I(new ve(Vn,Vn),new _({map:Bn(En)}));Hn.rotation.x=-Math.PI/2,Hn.position.y=-.35,K.add(Hn);var Un=new I(new ve(40,24),new le({depthWrite:!1,vertexShader:mn,fragmentShader:hn,uniforms:{uTime:{value:0},uInk:{value:J.horizon},uGold:{value:J.sky},uFogColor:{value:Mn},uFogAmt:{value:0},uFogCharm:He}}));Un.position.set(0,3,-8),K.add(Un);var Wn=new le({vertexShader:_n,fragmentShader:vn,uniforms:{uHeight:{value:null},uScene:{value:zn.texture},uTexel:{value:new R(1/Nn,1/Nn)},uResolution:{value:new R(G.x,G.y)},uDisplace:{value:.42},uNormalStrength:{value:22},uRefractStrength:{value:.06},uChromaScale:{value:1},uNormalMatrix:{value:new a},uLightDir:{value:J.sunDir},uInk:{value:new M(`#2A2218`)},uGold:{value:new M(`#B89968`)},uVector:Ie,uVecWater:{value:new M(`#1fb8d8`)},uVecTint:{value:Le}}}),Gn=new I(new ve(Vn,Vn,Nn-1,Nn-1),Wn);Gn.rotation.x=-Math.PI/2,Gn.updateMatrixWorld(!0),Wn.uniforms.uNormalMatrix.value.getNormalMatrix(Gn.matrixWorld),K.add(Gn);var Kn={value:0},qn=new URLSearchParams(window.location.search),Jn=(qn.get(`city`)?Number(qn.get(`city`)):0)||Math.random()*1e9|0,Yn=Math.max(0,et.indexOf(qn.get(`profile`)||`manhattan`)),Xn=Gt({windowGlow:Kn}),Y=ft({seed:Jn,profileIndex:Yn,landmarkFactory:Xn,windowGlow:Kn});K.add(Y.group);var Zn=Tt({plinthTop:.3,extent:Y.extent,profile:Y.state.profile});K.add(Zn.group);var Qn=jt({extent:Y.extent,waterSize:Vn,plinthTop:.3});K.add(Qn.group),Rn.uniforms.uWakeDrops.value=Qn.wakeDrops;var $n=Nt({extent:Y.extent,plinthTop:.3});K.add($n.group);var X=Qt({extent:Y.extent});K.add(X.group),Rn.uniforms.uRainDrops.value=X.rainDrops;var er=fn({extent:Y.extent});K.add(er.group);var tr=[0,.33,.66,1],nr=0;window.__season=tr[nr],Y.group.remove(Y.key),K.add(Y.key),Y.key.castShadow=!0,Y.key.shadow.mapSize.set(2048,2048),Y.key.shadow.bias=-18e-5,Y.key.shadow.normalBias=.028,K.add(Y.key.target);function rr(){let e=Y.key.shadow.camera,t=Y.extent+4.5;e.left=-t,e.right=t,e.top=t,e.bottom=-t,e.near=1,e.far=ir*2,e.updateProjectionMatrix()}var ir=24;rr();var ar=!0;window.__shadows=ar;function or(){Y.generate(Jn,Yn),Wn.uniforms.uVecWater.value.set(Y.waterColor),Zn.setProfile(Y.state.profile),rr(),Gi()}Xn.whenReady.then(()=>{or(),window.__cityReady=!0}),Wn.uniforms.uVecWater.value.set(Y.waterColor);var sr=new N(G.x,G.y),cr=new F(G.x,G.y,{minFilter:c,magFilter:c,depthBuffer:!0,stencilBuffer:!1,depthTexture:sr}),lr=new F(G.x,G.y,{minFilter:c,magFilter:c,depthBuffer:!1,stencilBuffer:!1}),ur=new F(G.x,G.y,{minFilter:c,magFilter:c,depthBuffer:!1,stencilBuffer:!1}),dr=new F(G.x,G.y,{minFilter:c,magFilter:c,depthBuffer:!1,stencilBuffer:!1}),fr=new h,pr=new p(-1,1,1,-1,0,1),mr=new I(new ve(2,2));fr.add(mr);var hr=new le({vertexShader:r,fragmentShader:yn,uniforms:{uScene:{value:cr.texture},uTime:{value:0},uResolution:{value:new R(G.x,G.y)},uGrain:{value:1},uChroma:{value:1},uExposure:{value:1}}}),gr=5,_r=e=>{let t=e.map(e=>new M(e));for(;t.length<8;)t.push(new M(0,0,0));return t},vr=[`night`,`dawn`,`noon`,`dusk`],yr={inkgold:vr.map(e=>_r(Dn[e])),terminal:vr.map(e=>_r(On[e]))},br=new le({vertexShader:r,fragmentShader:bn,uniforms:{uScene:{value:lr.texture},uResolution:{value:new R(G.x,G.y)},uPixelSize:{value:wn},uPalette:{value:yr.inkgold[2]},uPaletteB:{value:yr.inkgold[2]},uPaletteBlend:{value:0},uPaletteSize:{value:gr}}});function xr(e){let t=di?yr.terminal:yr.inkgold,n=e%1*4,r=Math.floor(n)%4;br.uniforms.uPalette.value=t[r],br.uniforms.uPaletteB.value=t[(r+1)%4],br.uniforms.uPaletteBlend.value=n-Math.floor(n)}var Sr=new le({vertexShader:r,fragmentShader:t,uniforms:{uScene:{value:lr.texture},uResolution:{value:new R(G.x,G.y)},uGridWidth:{value:160},uDither:{value:.55},uPalette:{value:e(i[`8-bit`].palette)},uPaletteSize:{value:1},uUsePalette:{value:1}}}),Cr={};for(let t of n)Cr[t]=i[t].palette?e(i[t].palette):null;var wr=[`native`,...n],Tr=`native`;window.__era=Tr;function Er(e){let t=i[e];t&&(Sr.uniforms.uGridWidth.value=t.gridWidth,Sr.uniforms.uDither.value=t.dither,Sr.uniforms.uUsePalette.value=+!!t.palette,t.palette&&(Sr.uniforms.uPalette.value=Cr[e],Sr.uniforms.uPaletteSize.value=t.palette.length))}function Dr(){Tr!==`native`&&Er(Tr)}var Or=()=>Tr===`native`?br:Sr,kr=new le({vertexShader:r,fragmentShader:xn,uniforms:{uScene:{value:lr.texture},uDepth:{value:sr},uResolution:{value:new R(G.x,G.y)},uBands:{value:4},uToonGain:{value:1.7},uToonGamma:{value:.6},uToonFloor:{value:J.toonFloor},uOutline:{value:J.outline},uNear:{value:.1},uFar:{value:100},uIsPerspective:{value:1}}}),Ar=new le({vertexShader:r,fragmentShader:Sn,uniforms:{uToon:{value:ur.texture},uPixel:{value:dr.texture},uBlend:{value:0}}});function jr(e,t){mr.material=e,W.setRenderTarget(t),W.render(fr,pr)}var Z=tn({tier:`corner`});Z.camera.aspect=window.innerWidth/window.innerHeight,Z.camera.updateProjectionMatrix();var Mr=new S(55,1.4,.1,100);Mr.position.set(2.2,3.4,11.5),Mr.lookAt(0,2,0);var Nr=new F(1024,720,{minFilter:c,magFilter:c,depthBuffer:!0,stencilBuffer:!1});Z.setCityTexture(Nr.texture);var Pr=new F(512,320,{minFilter:c,magFilter:c,depthBuffer:!0,stencilBuffer:!1});Z.setVignetteTexture(Pr.texture);var Fr=new F(G.x,G.y,{minFilter:c,magFilter:c,depthBuffer:!1,stencilBuffer:!1}),Ir=new F(G.x,G.y,{minFilter:c,magFilter:c,depthBuffer:!1,stencilBuffer:!1}),Lr=new le({vertexShader:r,fragmentShader:Cn,uniforms:{uCity:{value:Fr.texture},uOffice:{value:Ir.texture},uT:{value:0},uFocus:{value:new R(.5,.5)}}}),Q=`city`,Rr=0,zr=4.6;window.__scene=Q;var Br=null;function Vr(e){Q===`city`&&(Lr.uniforms.uFocus.value.copy(e||new R(.5,.5)),Q=`diving-in`,window.__scene=Q)}function Hr(){Q!==`office`&&Q!==`diving-in`||(Q=`diving-out`,window.__scene=Q)}function Ur(){Q===`city`&&(Q=`hoard`,window.__scene=Q,$n.setActive(!0),q.setMode(Se.DIMETRIC),q.setZoom(3.1,!0),q.setTarget($n.player.x,.6,$n.player.z,!0))}function Wr(){Q===`hoard`&&($n.setActive(!1),Q=`city`,window.__scene=Q,q.setTarget(0,.8,0))}var Gr=!1,Kr=(()=>{if(typeof document>`u`)return{showLap(){},toast(){},flash(){}};let e=document.createElement(`style`);e.textContent=`
  .lap { position: fixed; inset: 0; z-index: 5; display:flex; align-items:center; justify-content:center;
    background: rgba(6,8,12,0.55); opacity:0; pointer-events:none; transition: opacity .25s; }
  .lap.on { opacity:1; pointer-events:auto; }
  .lap-win { width:min(560px,90vw); border-radius:14px; overflow:hidden; background:#0e1016;
    border:1px solid #2a2f3a; box-shadow:0 20px 60px rgba(0,0,0,.6); font:13px/1.5 ui-monospace,monospace; color:#cdd3dc; }
  .lap-bar { display:flex; align-items:center; justify-content:space-between; padding:10px 14px; background:#161a22; border-bottom:1px solid #2a2f3a; }
  .lap-bar b { letter-spacing:.08em; color:#7fd0ff; }
  .lap-x { cursor:pointer; border:0; background:#222833; color:#cdd3dc; min-width:44px;height:44px;border-radius:8px; font:inherit; }
  .lap-body { padding:18px; }
  .lap-body .row { display:flex; gap:8px; margin-top:12px; flex-wrap:wrap; }
  .lap-body button.stub { padding:9px 13px; border-radius:8px; border:1px solid #2a2f3a; background:#1a1f29; color:#cdd3dc; cursor:pointer; }
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
    </div></div>`;let n=document.createElement(`div`);n.className=`otoast`;let r=document.createElement(`div`);r.className=`oflash`,document.body.append(t,n,r),t.querySelector(`.lap-x`).addEventListener(`click`,()=>Jr()),t.addEventListener(`click`,e=>{e.target===t&&Jr()});let i=0;return{showLap(e){t.classList.toggle(`on`,e)},toast(e){n.textContent=e,n.classList.add(`on`),clearTimeout(i),i=setTimeout(()=>n.classList.remove(`on`),1400)},flash(){r.style.transition=`none`,r.style.opacity=`0.85`,requestAnimationFrame(()=>{r.style.transition=`opacity .55s`,r.style.opacity=`0`})}}})();function qr(){Gr=!0,Kr.showLap(!0)}function Jr(){Gr=!1,Kr.showLap(!1)}function Yr(){Yn=(Yn+1)%$e.length,Kr.flash(),or(),Kr.toast(`✈  `+Y.state.profile.name),window.__profile=Y.state.profile.key}function Xr(e){let t=Z.setFitout(e);return Kr.toast(t===`basement`?`🏚  Basement office`:`🏙  Corner office`),window.__tier=t,t}function Zr(){return Xr(Z.tier===`corner`?`basement`:`corner`)}window.__tier=Z.tier;var Qr=[`3d`,`smooth`,`charm`],$r={"3d":`🧊  Stylized 3D office`,smooth:`🖼  Smooth diffusion skin`,charm:`🕹  Charm diffusion skin`};function ei(e){let t=Z.setSkin(e);return window.__officeSkin=t,Q!==`city`&&Kr.toast($r[t]),t}function ti(){return ei(Qr[(Qr.indexOf(Z.skin)+1)%Qr.length])}window.__officeSkin=Z.skin;var ni={painted:`🎨  Painted props (cohesive)`,"3d":`🧊  Live 3D props (animated)`};function ri(e){let t=Z.setProps(e);return window.__officeProps=t,Q!==`city`&&Z.skin!==`3d`&&Kr.toast(ni[t]),t}function ii(){return ri(Z.props===`painted`?`3d`:`painted`)}window.__officeProps=Z.props;function ai(e,t){Gn.visible=!1,W.setRenderTarget(zn),W.render(K,e),Gn.visible=!0,W.setRenderTarget(t),W.render(K,e)}function oi(e,t){if(Gn.visible=!1,W.setRenderTarget(zn),W.render(K,q.camera),Gn.visible=!0,$===1||fi&&$!==7&&$!==8)W.setRenderTarget(t),W.render(K,q.camera);else if(W.setRenderTarget(cr),W.render(K,q.camera),$===2)hr.uniforms.uGrain.value=1,hr.uniforms.uChroma.value=1,jr(hr,t);else{hr.uniforms.uGrain.value=0,hr.uniforms.uChroma.value=0,jr(hr,lr);let n=q.camera;kr.uniforms.uNear.value=n.near,kr.uniforms.uFar.value=n.far,kr.uniforms.uIsPerspective.value=+!!n.isPerspectiveCamera;let r=e.era?(Er(e.era),Sr):Or();e.kind===`pixel`?(jr(r,t),window.__style=`pixel`):e.kind===`toon`?(jr(kr,t),window.__style=`toon`):(jr(kr,ur),jr(r,dr),Ar.uniforms.uBlend.value=e.blend,jr(Ar,t),window.__style=`blend`)}}var si=.3,ci=.46,li=.62,ui=.8,$=3,di=!1,fi=!1;window.__mode=$,window.__camMode=q.mode,window.__vector=fi,window.addEventListener(`keydown`,e=>{(e.key===`1`||e.key===`2`||e.key===`3`)&&($=Number(e.key),window.__mode=$),(e.key===`7`||e.key===`8`)&&($=Number(e.key),window.__mode=$),e.key===`4`&&(q.setMode(Se.PERSPECTIVE),window.__camMode=q.mode),e.key===`5`&&(q.setMode(Se.ISOMETRIC),window.__camMode=q.mode),e.key===`6`&&(q.setMode(Se.DIMETRIC),window.__camMode=q.mode),e.key===`ArrowLeft`&&(q.pan(-1,0),e.preventDefault()),e.key===`ArrowRight`&&(q.pan(1,0),e.preventDefault()),e.key===`ArrowUp`&&(q.pan(0,1),e.preventDefault()),e.key===`ArrowDown`&&(q.pan(0,-1),e.preventDefault()),e.key===`0`&&(fi=!fi,Ie.value=+!!fi,window.__vector=fi),(e.key===`w`||e.key===`W`)&&(X.cycle(),window.__weather=X.kind),(e.key===`k`||e.key===`K`)&&(nr=(nr+1)%tr.length,window.__season=tr[nr]),(e.key===`g`||e.key===`G`)&&(Jn=Math.random()*1e9|0,or()),(e.key===`c`||e.key===`C`)&&(Yn=(Yn+1)%$e.length,or()),(e.key===`h`||e.key===`H`)&&(ar=!ar,window.__shadows=ar),(e.key===`p`||e.key===`P`)&&(di=!di),(e.key===`b`||e.key===`B`)&&(Tr=wr[(wr.indexOf(Tr)+1)%wr.length],window.__era=Tr,Dr()),(e.key===`t`||e.key===`T`)&&J.cyclePreset(),e.key===`[`&&J.nudge(-.5),e.key===`]`&&J.nudge(.5),e.key===`9`&&(J.toggleAuto(),window.__auto=J.auto),e.key===`Escape`&&(Gr?Jr():Q===`hoard`?Wr():Hr()),(e.key===`o`||e.key===`O`)&&(Q===`city`?Vr():Hr()),(e.key===`x`||e.key===`X`)&&(Q===`hoard`?Wr():Q===`city`&&Ur()),(e.key===`f`||e.key===`F`)&&Q!==`city`&&Zr(),(e.key===`j`||e.key===`J`)&&ti(),(e.key===`u`||e.key===`U`)&&ii(),(e.key===`m`||e.key===`M`)&&Br&&Br.toggle()});var pi=window.matchMedia(`(prefers-reduced-motion: reduce)`);J.setReducedMotion(pi.matches),pi.addEventListener(`change`,e=>J.setReducedMotion(e.matches));var mi=new ee,hi=new R,gi=!1,_i=!1,vi=0,yi=0,bi=.005,xi=(e,t)=>{hi.x=e/window.innerWidth*2-1,hi.y=-(t/window.innerHeight)*2+1},Si=0,Ci=0,wi=0;function Ti(){return mi.setFromCamera(hi,q.camera),mi.intersectObject(Y.group,!0)[0]?new R(hi.x*.5+.5,hi.y*.5+.5):null}function Ei(){mi.setFromCamera(hi,Z.camera);let e=mi.intersectObjects(Z.interactables,!0)[0];if(!e)return null;let t=e.object;for(;t&&!t.userData.role;)t=t.parent;return t?t.userData.role:null}W.domElement.addEventListener(`contextmenu`,e=>e.preventDefault()),W.domElement.addEventListener(`mousedown`,e=>{e.button===0&&(gi=Q===`city`,xi(e.clientX,e.clientY),Si=e.clientX,Ci=e.clientY,wi=performance.now()),e.button===2&&(_i=!0,vi=e.clientX,yi=e.clientY)}),window.addEventListener(`mousemove`,e=>{gi&&xi(e.clientX,e.clientY),_i?(q.orbit(-(e.clientX-vi)*bi,-(e.clientY-yi)*bi),vi=e.clientX,yi=e.clientY):Q===`city`&&!gi?(xi(e.clientX,e.clientY),W.domElement.style.cursor=Ti()?`pointer`:`default`):Q===`office`&&(xi(e.clientX,e.clientY),W.domElement.style.cursor=Ei()?`pointer`:`default`)}),window.addEventListener(`mouseup`,e=>{let t=Math.hypot(e.clientX-Si,e.clientY-Ci)<6&&performance.now()-wi<350;if(gi&&Q===`city`&&t){xi(e.clientX,e.clientY);let t=Ti();t&&Vr(t)}else if(Q===`office`&&t&&!Gr){xi(e.clientX,e.clientY);let t=Ei();t===`laptop`?qr():t===`phone`?Yr():t===`cat`?Z.petCat():t===`tank`&&Z.feedFish()}gi=!1,_i=!1}),W.domElement.addEventListener(`wheel`,e=>{e.preventDefault(),q.zoomBy(Math.exp(e.deltaY*.0015))},{passive:!1});var Di=0,Oi=(e,t)=>[(e.clientX+t.clientX)/2,(e.clientY+t.clientY)/2],ki=(e,t)=>Math.hypot(e.clientX-t.clientX,e.clientY-t.clientY),Ai=!1;W.domElement.addEventListener(`touchstart`,e=>{e.touches.length===1&&(gi=Q===`city`,xi(e.touches[0].clientX,e.touches[0].clientY),Si=e.touches[0].clientX,Ci=e.touches[0].clientY,wi=performance.now(),Ai=!1),e.touches.length===2&&(gi=!1,_i=!0,[vi,yi]=Oi(e.touches[0],e.touches[1]),Di=ki(e.touches[0],e.touches[1]))},{passive:!1}),W.domElement.addEventListener(`touchmove`,e=>{if(e.preventDefault(),e.touches.length===1)xi(e.touches[0].clientX,e.touches[0].clientY),Math.hypot(e.touches[0].clientX-Si,e.touches[0].clientY-Ci)>8&&(Ai=!0);else if(e.touches.length===2){let[t,n]=Oi(e.touches[0],e.touches[1]);q.orbit(-(t-vi)*bi,-(n-yi)*bi),vi=t,yi=n;let r=ki(e.touches[0],e.touches[1]);Di>0&&q.zoomBy(Di/r),Di=r}},{passive:!1}),window.addEventListener(`touchend`,e=>{if(!Ai&&performance.now()-wi<350&&(!e.touches||e.touches.length===0)){if(Q===`city`){let e=Ti();e&&Vr(e)}else if(Q===`office`&&!Gr){let e=Ei();e===`laptop`?qr():e===`phone`?Yr():e===`cat`?Z.petCat():e===`tank`&&Z.feedFish()}}gi=!1,_i=!1,Di=0,e.touches&&e.touches.length===1&&(gi=!0)});var ji=new fe;ji.connect(document);var Mi=0,Ni=performance.now();function Pi(){if($===1||$===2)return{kind:`none`};if($===7)return{kind:`pixel`};if($===8)return{kind:`toon`};let e=q.styleT;return window.__styleT=e,e<=si?{kind:`toon`}:e>=ci?{kind:`pixel`,era:e<li?`16-bit`:e<ui?`8-bit`:`gb`}:{kind:`blend`,blend:L.smoothstep(e,si,ci),era:`16-bit`}}var Fi={"16-bit":`16-bit`,"8-bit":`8-bit`,gb:`Game Boy`,modern:`Modern`,native:`Pixel`,"1-bit":`1-bit`};function Ii(e){return $===1||$===2?``:fi&&$!==7&&$!==8?`Vector`:e.kind===`toon`?`Toon`:e.kind===`pixel`?Fi[e.era||Tr]||`Pixel`:e.kind===`blend`?`Toon → `+(Fi[e.era]||`Pixel`):``}var Li=Tn.get(`ui`)!==`0`&&!Tn.has(`capture`),Ri=!!(window.matchMedia&&window.matchMedia(`(pointer: coarse)`).matches),zi=En||!Li||Ri,Bi=zi?null:document.querySelector(`.hint`);if(zi){let e=document.querySelector(`.hint`);e&&(e.style.display=`none`)}var Vi=Bi?Bi.textContent:``,Hi=``,Ui=``;function Wi(e){!Bi||e===Hi||(Hi=e,Bi.textContent=`${Vi} · ${Ui} · ${e}`)}function Gi(){Ui=`seed ${Y.state.seed} · ${Y.state.profile.name}`,window.__profile=Y.state.profile.key,Hi=``}Gi();function Ki(){ji.update();let e=Math.min(ji.getDelta(),.1);Q===`hoard`&&($n.setAzimuth(q.azimuth),$n.update(e,ji.getElapsed(),J),q.setTarget($n.player.x,.6,$n.player.z)),q.update(e),Un.material.uniforms.uTime.value=ji.getElapsed(),hr.uniforms.uTime.value=ji.getElapsed(),J.update(e),Y.key.position.copy(J.sunDir).multiplyScalar(ir),Y.key.color.copy(J.sunColor),Y.key.intensity=J.sunIntensity,Y.fill.color.copy(J.hemiSky),Y.fill.groundColor.copy(J.hemiGround),Kn.value=J.windowGlow;let t=X.overcast;Y.key.intensity*=1-.5*t,Y.key.color.lerp(kn,.45*t),Y.fill.intensity=1+.7*t;let n=L.smoothstep(J.sunDir.y,.06,.34),r=L.lerp(.28,1,1-J.windowGlow),i=ar?n*r:0;Y.key.shadow.intensity=.72*i,Re.value=.52*i;let a=1-J.windowGlow;Le.setRGB(L.lerp(.46,1,a),L.lerp(.52,1,a),L.lerp(.74,1,a)),hr.uniforms.uExposure.value=J.exposure,kr.uniforms.uToonGain.value=J.toonGain,W.setClearColor(J.horizon,1),xr(J.t),Wi(J.clock),window.__t=J.t,Zn.update(e,ji.getElapsed(),J),Y.update(ji.getElapsed()),Qn.update(e,ji.getElapsed(),J),Rn.uniforms.uWakeCount.value=Qn.wakeCount,X.update(e,ji.getElapsed()),Rn.uniforms.uRainCount.value=X.rainDropCount;let o=X.fog*(1-a);K.fog.density=X.fog*An,Mn.copy(J.horizon).lerp(jn,.85*o),K.fog.color.copy(Mn),W.setClearColor(Mn,1),He.value=X.fog,Un.material.uniforms.uFogAmt.value=.7*X.fog,ze.value=X.snow,Be.value=X.cloud*.55,Ve.x+=e*.018,Ve.y+=e*.009,Ue.value+=(tr[nr]-Ue.value)*Math.min(1,e*1.5),er.update(e,ji.getElapsed(),J,X);let s=Pi(),c=s.kind===`toon`?1:s.kind===`blend`?1-s.blend:0;Wn.uniforms.uChromaScale.value=L.lerp(1,.5,c),Br&&Br.setStyleHint(Q===`city`?Ii(s):``),Mi++;let l=performance.now();l-Ni>=1e3&&(window.__fps=Mi,Mi=0,Ni=l);let u=0;if(gi&&Q===`city`){mi.setFromCamera(hi,q.camera);let e=mi.intersectObject(Gn)[0];e&&e.uv&&(Rn.uniforms.uMouse.value.copy(e.uv),u=.06)}Rn.uniforms.uMouseStrength.value=u;let[d,f,p]=Fn;Rn.uniforms.uPrev.value=d.texture,Rn.uniforms.uCurr.value=f.texture,W.setRenderTarget(p),W.render(In,Ln),Fn=[f,p,d],Wn.uniforms.uHeight.value=Fn[1].texture,Rr+=(+(Q===`office`||Q===`diving-in`)-Rr)*Math.min(1,e*zr),Q===`diving-in`&&Rr>.992&&(Rr=1,Q=`office`,window.__scene=Q),Q===`diving-out`&&Rr<.008&&(Rr=0,Q=`city`,window.__scene=Q),Q===`city`||Q===`hoard`?oi(s,null):(Z.update(e,ji.getElapsed(),J),Z.tier===`basement`?(W.setRenderTarget(Pr),W.render(Z.vignette.scene,Z.vignette.camera)):ai(Mr,Nr),Q===`office`?(W.setRenderTarget(null),W.render(Z.scene,Z.camera)):(oi(s,Fr),W.setRenderTarget(Ir),W.render(Z.scene,Z.camera),Lr.uniforms.uT.value=Rr,jr(Lr,null))),requestAnimationFrame(Ki)}var qi={at:(e,t)=>{xi(e,t),gi=!0},stop:()=>{gi=!1}};function Ji(){let e=window.__style||($===1?`raw`:$===2?`filmic`:`auto`);return{lesson:23,clock:J.clock,style:(fi?`vec-`:``)+e,profile:Y.state.profile.key,weather:X.kind,scene:Q}}qt({renderer:W,rig:q,sunRig:J,poke:qi,getState:Ji,office:{pet:()=>Z.petCat(),feed:()=>Z.feedFish(),laptop:()=>qr(),closeLaptop:()=>Jr(),travel:()=>Yr(),fitout:()=>Zr()}});var Yi=e=>window.dispatchEvent(new KeyboardEvent(`keydown`,{key:e})),Xi={cam:e=>Yi({iso:`5`,dimetric:`6`,persp:`4`}[e]),style:e=>{e===`auto`?(Yi(`3`),fi&&Yi(`0`)):e===`vector`?(fi||Yi(`0`),($===7||$===8)&&Yi(`2`)):e===`pixel`?Yi(`7`):e===`toon`&&Yi(`8`)},era:()=>Yi(`b`),city:()=>Yi(`C`),shuffle:()=>Yi(`G`),weather:()=>Yi(`W`),season:()=>Yi(`K`),office:()=>Yi(`o`),officeSkin:()=>Yi(`j`),officeProps:()=>Yi(`u`),time:e=>J.goTo(e),auto:()=>Yi(`9`)};Br=Xt({controls:Xi,state:()=>({cam:{4:`persp`,5:`iso`,6:`dimetric`}[q.mode],style:$===7?`pixel`:$===8?`toon`:fi?`vector`:`auto`,era:Tr,auto:J.auto,t:J.t,weather:X.kind,season:nr,office:Q!==`city`,officeSkin:Z.skin,officeProps:Z.props}),show:Tn.get(`ui`)!==`0`&&!Tn.has(`capture`),coarse:window.matchMedia&&window.matchMedia(`(pointer: coarse)`).matches});var Zi=Tn.get(`cam`);Zi&&[`iso`,`dimetric`,`persp`].includes(Zi)&&Xi.cam(Zi);var Qi=Tn.get(`style`);[`vector`,`pixel`,`toon`].includes(Qi)&&Xi.style(Qi);var $i=Tn.get(`t`);$i!==null&&$i!==``&&!Number.isNaN(parseFloat($i))&&J.goTo(parseFloat($i));var ea=Tn.get(`time`);ea&&J.goTo({dawn:.25,noon:.5,dusk:.75,night:0}[ea]??.5);var ta=Tn.get(`weather`);[`clear`,`rain`,`snow`,`fog`].includes(ta)&&(X.setKind(ta),window.__weather=X.kind);var na=Tn.get(`officeskin`);[`3d`,`smooth`,`charm`].includes(na)&&ei(na);var ra=Tn.get(`officeprops`);[`painted`,`3d`].includes(ra)&&ri(ra);var ia=Tn.get(`office`);(ia===`1`||ia===`corner`||ia===`basement`)&&(ia===`basement`&&Xr(`basement`),Q=`office`,Rr=1,window.__scene=Q),Tn.get(`hoard`)===`1`&&Ur(),Ki(),window.addEventListener(`resize`,()=>{q.setViewport(window.innerWidth,window.innerHeight),W.setSize(window.innerWidth,window.innerHeight);let e=W.getDrawingBufferSize(new R);zn.setSize(e.x,e.y),cr.setSize(e.x,e.y),lr.setSize(e.x,e.y),ur.setSize(e.x,e.y),dr.setSize(e.x,e.y),Fr.setSize(e.x,e.y),Ir.setSize(e.x,e.y),Z.camera.aspect=window.innerWidth/window.innerHeight,Z.camera.updateProjectionMatrix(),Wn.uniforms.uResolution.value.set(e.x,e.y),hr.uniforms.uResolution.value.set(e.x,e.y),br.uniforms.uResolution.value.set(e.x,e.y),Sr.uniforms.uResolution.value.set(e.x,e.y),kr.uniforms.uResolution.value.set(e.x,e.y)});