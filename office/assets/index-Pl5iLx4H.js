import{$ as e,A as t,B as n,C as r,D as i,E as a,F as o,G as s,H as c,I as l,J as u,K as d,L as f,M as p,N as m,O as h,P as g,Q as _,R as v,S as y,T as b,U as x,V as S,W as C,X as w,Y as T,Z as E,_ as ee,a as D,at as O,b as te,c as k,d as A,et as j,f as ne,g as re,h as ie,i as M,it as N,j as ae,k as P,l as oe,m as F,n as se,nt as ce,o as I,ot as L,p as R,q as le,r as ue,rt as z,s as de,t as fe,tt as B,u as pe,v as me,w as he,x as ge,y as _e,z as ve}from"./three-fWsc3c0P.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var V=Math.atan(1/Math.SQRT2),ye=Math.atan(.5),be=Math.PI/4,H={PERSPECTIVE:4,ISOMETRIC:5,DIMETRIC:6},xe=.12,Se=1.45,Ce=4,we=40,U=1.5,Te=16,Ee=6,De=22,W=3.5,Oe=11,G=(e,t,n)=>e+(t-e)*(1-Math.exp(-8*n)),K=(e,t)=>e+Math.PI*2*Math.round((t-e)/(Math.PI*2));function ke({aspect:e,fov:n=48,near:r=.1,far:i=100,target:a=new O(0,.8,0),azimuth:o=be,elevation:s=.52,distance:c=12,zoom:l=5.5}={}){let u=new ve(n,e,r,i),d=new f(-1,1,1,-1,r,i),p=H.PERSPECTIVE,m=e,h={azimuth:o,elevation:s,distance:c,zoom:l,target:a.clone()},g={azimuth:o,elevation:s,distance:c,zoom:l,target:a.clone()},_=!1,v=()=>p===H.PERSPECTIVE?u:d;function y(e){e!==p&&(p=e,p===H.ISOMETRIC||p===H.DIMETRIC?(h.elevation=p===H.ISOMETRIC?V:ye,h.azimuth=K(be,g.azimuth),_=!0):_=!1)}function b(e,n){h.azimuth+=e,_||(h.elevation=t.clamp(h.elevation+n,xe,Se))}function x(e){p===H.PERSPECTIVE?h.distance=t.clamp(h.distance*e,Ce,we):h.zoom=t.clamp(h.zoom*e,U,Te)}function S(e,t){let n=h.azimuth,r=p===H.PERSPECTIVE?h.distance*.04:h.zoom*.08,i=new O(Math.cos(n),0,-Math.sin(n)),a=new O(-Math.sin(n),0,-Math.cos(n));h.target.addScaledVector(i,e*r),h.target.addScaledVector(a,t*r)}function C(e,t){m=e/t,u.aspect=m,u.updateProjectionMatrix()}function w(e){g.azimuth=G(g.azimuth,h.azimuth,e),g.elevation=G(g.elevation,h.elevation,e),g.distance=G(g.distance,h.distance,e),g.zoom=G(g.zoom,h.zoom,e),g.target.x=G(g.target.x,h.target.x,e),g.target.y=G(g.target.y,h.target.y,e),g.target.z=G(g.target.z,h.target.z,e);let t=Math.cos(g.elevation),n=Math.sin(g.elevation),r=Math.cos(g.azimuth),i=Math.sin(g.azimuth),a=v();if(a.position.set(g.target.x+g.distance*t*i,g.target.y+g.distance*n,g.target.z+g.distance*t*r),a.lookAt(g.target),a.isOrthographicCamera){let e=g.zoom,t=e*m;a.left=-t,a.right=t,a.top=e,a.bottom=-e,a.updateProjectionMatrix()}}function T(e,t,n,r=!1){h.target.set(e,t,n),r&&g.target.copy(h.target)}function E(e,n=!1){h.zoom=t.clamp(e,U,Te),n&&(g.zoom=h.zoom)}return{get camera(){return v()},get mode(){return p},get azimuth(){return g.azimuth},setTarget:T,setZoom:E,get styleT(){return p===H.PERSPECTIVE?t.clamp((g.distance-Ee)/(De-Ee),0,1):t.clamp((g.zoom-W)/(Oe-W),0,1)},setMode:y,orbit:b,zoomBy:x,pan:S,setViewport:C,update:w}}var Ae={value:0},je=new R(`#ffffff`),Me={value:0},Ne={value:0},Pe={value:0},Fe=new N,Ie={value:0},Le={value:0},Re=`
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
`;function ze(e){e.uniforms.uVector=Ae,e.uniforms.uVecTint={value:je},e.uniforms.uVecShadow=Me,e.uniforms.uSnow=Ne,e.uniforms.uCloud=Pe,e.uniforms.uCloudOff={value:Fe},e.uniforms.uFogCharm=Ie}function Be(e){return e.replace(`#include <fog_fragment>`,`
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
  `)}function Ve(e){return e.replace(`#include <common>`,`#include <common>
varying vec3 vVecN;
varying vec3 vVecP;
varying vec2 vWorldXZ;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
  vVecN = normal;
  vVecP = position;
  vWorldXZ = (modelMatrix * vec4(position, 1.0)).xz;`)}function He(e){return e.replace(`#include <shadowmap_pars_fragment>`,`#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>`)}var Ue=`col *= mix(1.0, getShadowMask(), uVecShadow);`;function We(e,{color:t,id:n,windowGlow:r,winColors:i=[`#ffb852`,`#8cd9ff`],litFrac:a=.55}={}){let o=[0,1,2].map(e=>new R(i[e]??i[i.length-1]));return e.customProgramCacheKey=()=>`lgr-vec-tower`,e.onBeforeCompile=e=>{ze(e),e.uniforms.uWindowGlow=r,e.uniforms.uWinId={value:n},e.uniforms.uVecColor={value:new R(t)},e.uniforms.uWinA={value:o[0]},e.uniforms.uWinB={value:o[1]},e.uniforms.uWinC={value:o[2]},e.uniforms.uWinLit={value:a},e.vertexShader=Ve(e.vertexShader),e.fragmentShader=Be(He(e.fragmentShader.replace(`#include <common>`,`#include <common>
        uniform float uWindowGlow;
        uniform float uWinId;
        uniform vec3  uVecColor;
        uniform vec3  uWinA; uniform vec3 uWinB; uniform vec3 uWinC;
        uniform float uWinLit;
        ${Re}
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
          ${Ue}                                  // the sun's shadow darkens the body
          vec3 wcol; vec2 w = winTerms(wcol);
          vec3 glass = vec3(0.17, 0.23, 0.34);          // dark glass-blue panes (day)
          col = mix(col, glass, w.x * 0.85);
          col += w.x * w.y * wcol * uWindowGlow * 1.5;  // …windows EMIT (unshadowed) at night
          gl_FragColor = vec4(col, diffuseColor.a);
        }`)))},e}function q(e,{color:t=null,glow:n=null,glowDay:r=0,glowNight:i=1,windowGlow:a=null,season:o=!1}={}){let s=t===null,c=n!==null&&a!==null;return e.customProgramCacheKey=()=>`lgr-vec|`+(s?`d`:`c`)+(c?`g`:``)+(o?`s`:``),e.onBeforeCompile=e=>{ze(e),s||(e.uniforms.uVecColor={value:new R(t)}),c&&(e.uniforms.uGlow={value:new R(n)},e.uniforms.uGlowDay={value:r},e.uniforms.uGlowNight={value:i},e.uniforms.uWindowGlow=a),o&&(e.uniforms.uSeason=Le),e.vertexShader=Ve(e.vertexShader);let l=s?`diffuseColor.rgb`:`uVecColor`,u=o?`seasonShift(${l})`:l,d=(s?``:`uniform vec3 uVecColor;
`)+(c?`uniform vec3 uGlow; uniform float uGlowDay; uniform float uGlowNight; uniform float uWindowGlow;
`:``)+(o?`uniform float uSeason;
vec3 seasonShift(vec3 c){
  c = mix(c, vec3(0.86, 0.46, 0.13), smoothstep(0.40, 0.70, uSeason));   // → autumn orange
  c = mix(c, vec3(0.46, 0.33, 0.20), smoothstep(0.75, 1.00, uSeason));   // → bare brown
  return c;
}
`:``),f=c?`uGlow * mix(uGlowDay, uGlowNight, uWindowGlow)`:`vec3(0.0)`,p=Be(He(e.fragmentShader.replace(`#include <common>`,`#include <common>
`+d+Re).replace(`#include <opaque_fragment>`,`#include <opaque_fragment>
        if (uVector > 0.5) {
          vec3 col = vecShade(${u});
          ${Ue}                            // the sun's shadow darkens the flat tier…
          gl_FragColor = vec4(col + ${f}, diffuseColor.a);  // …but the night glow stays lit
        }`)));c&&(p=p.replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>\n  totalEmissiveRadiance += ${f};`)),e.fragmentShader=p},e}function Ge(e){let t=e>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function J(e){let t=Ge(e);return{next:t,range:(e,n)=>e+(n-e)*t(),int:(e,n)=>e+Math.floor(t()*(n-e+1)),pick:e=>e[Math.floor(t()*e.length)],chance:e=>t()<e}}var Ke=[{key:`manhattan`,name:`Manhattan`,towers:[`#EDE3C8`,`#D9B98A`,`#B5562F`,`#A8C8E8`,`#2E3F5C`],ground:`#7CC455`,street:`#9AA0A6`,sidewalk:`#C8CCD0`,park:`#5DB347`,water:`#29A8D8`,shopfronts:[`#C04A3A`,`#3A7AC0`,`#C09A2A`],glass:`#7FA8CC`,winColors:[`#ffd27a`,`#9ad6ff`],hMax:4.6,sigma:.36,roofRate:.35,pSplit:.6,nightLit:.55,roofTint:null,coast:{base:.55,out:1,in:.6,jag:1.05},landmarks:[`empireState`,`chrysler`,`liberty`]},{key:`paris`,name:`Paris`,towers:[`#E8DCC0`,`#F2EAD6`,`#E0D2B4`],ground:`#8CC46A`,street:`#A8A29A`,sidewalk:`#D4CEC2`,park:`#6DB35A`,water:`#3FA8C8`,shopfronts:[`#C04A3A`,`#3A6B5A`,`#7A5AC0`],glass:`#5A6B7A`,winColors:[`#ffdca0`,`#ffcaa0`],hMax:1.5,sigma:.9,roofRate:.15,pSplit:.75,nightLit:.45,roofTint:`#6A7886`,coast:{base:1.05,out:.55,in:.3,jag:.5},landmarks:[`eiffel`,`arcDeTriomphe`,`sacreCoeur`]},{key:`neoTokyo`,name:`Neo-Tokyo`,towers:[`#2A3038`,`#3A4250`,`#252B36`,`#4A4456`],ground:`#3A4A42`,street:`#5A6068`,sidewalk:`#7A8088`,park:`#2E5E46`,water:`#0E6878`,shopfronts:[`#E8483A`,`#5AE8E0`,`#E85AA0`],glass:`#5AE8E0`,winColors:[`#5AE8E0`,`#E85AA0`,`#E8E06A`],hMax:5.2,sigma:.42,roofRate:.6,pSplit:.6,nightLit:.7,roofTint:null,coast:{base:.7,out:1.05,in:.62,jag:1.7},landmarks:[`tokyoTower`,`pagoda`,`neonBillboard`]}];Ke.map(e=>e.key);var qe=.3,Je=1.9,Ye=.55,Y=2.45,Xe=.12,Ze=.6,Qe=6,$e={BASE:.7,OUT:.95,IN:.55,JAG:1,SAMPLES_PER_EDGE:28,HARBOR_DEPTH:.55,HARBOR_WIDTH:.26},et={PLINTH_TOP:qe,BLOCK:Je,STREET:Ye,PITCH:Y,SIDEWALK:Xe,SHORE:Ze,N:Qe,COAST:$e};function tt(e,t,n){let r=n?.base??$e.BASE,i=n?.out??$e.OUT,a=n?.in??$e.IN,o=n?.jag??$e.JAG,s=t+r,c=J((e^789079)>>>0),l=[2,3,5,8,11,13].map(e=>({k:e,amp:1/e*o**((e-2)/6),phase:c.range(0,Math.PI*2)})),u=l.reduce((e,t)=>e+t.amp,0),d=e=>{let t=0;for(let n of l)t+=n.amp*Math.sin(n.k*e*Math.PI*2+n.phase);return Math.max(-1,Math.min(1,t/(u*.6)))},f=[{fix:+s,nx:1,nz:0,sign:1},{fix:+s,nx:0,nz:1,sign:-1},{fix:-s,nx:-1,nz:0,sign:-1},{fix:-s,nx:0,nz:-1,sign:1}],p=t+.22,m=$e.SAMPLES_PER_EDGE,h=4*m,g=[],_=0;for(let e=0;e<4;e++){let t=f[e];for(let n=0;n<m;n++,_++){let o=n/m,c=_/h,l=(-s+2*s*o)*t.sign,u=d(c),f=u>=0?u*i:u*a;if(e===0){let e=Math.abs(o-.5);if(e<$e.HARBOR_WIDTH){let t=.5+.5*Math.cos(e/$e.HARBOR_WIDTH*Math.PI);f-=(r+$e.HARBOR_DEPTH)*t}}let v,y;t.nx===0?(y=t.fix+t.nz*f,v=l,y=t.nz>0?Math.max(y,p):Math.min(y,-p)):(v=t.fix+t.nx*f,y=l,v=t.nx>0?Math.max(v,p):Math.min(v,-p)),g.push(new N(v,y))}}return{points:g,B:s,maxR:s+i,harborX:p}}function nt(e){(Array.isArray(e)?e:[e]).forEach(e=>e&&e.dispose&&e.dispose())}function rt({seed:e=1,profileIndex:t=0,landmarkFactory:n=null,windowGlow:i}){let a=new r,o=new r,s=new r;o.raycast=()=>{},s.raycast=()=>{},a.add(o,s);let c=new me(16773594,3);c.position.set(.45,.6,-.65).multiplyScalar(10);let l=new b(7313331,2762272,1);a.add(c,l);let u=0,d=[],f={seed:e,profileIndex:t,profile:Ke[t],extent:0,meshCount:0};function h(e,t,n,r){let i=new p(new D(e,.04,t),q(new g({color:r,roughness:.95,flatShading:!0}),{color:r}));return i.position.y=n,i.userData.ground=!0,i}function v(e,t){for(let e of o.children)e.geometry&&e.geometry.dispose(),nt(e.material);o.clear();for(let e of s.children)e.traverse(e=>{e.isMesh&&nt(e.material)});s.clear(),d.length=0,u=0;let r=J(e),i=Ke[t],a=(Qe-1)/2*Y,c=7.075;f={seed:e,profileIndex:t,profile:i,extent:c+(i.coast?.base??$e.BASE),meshCount:0};let l=tt(e,c,i.coast);f.coast=l;let m=new E;l.points.forEach((e,t)=>t?m.lineTo(e.x,e.y):m.moveTo(e.x,e.y)),m.closePath();let _=new p(new te(m,{depth:2,bevelEnabled:!1,steps:1}),q(new g({color:i.ground,roughness:.9,flatShading:!0,side:2}),{color:i.ground}));_.rotation.x=-Math.PI/2,_.position.y=qe-2,_.userData.ground=!0,o.add(_);let v=2*7.195;o.add(h(v,v,.32,i.street)),C(l.harborX,i);let b=[];for(let e=0;e<Qe;e++)for(let t=0;t<Qe;t++)b.push([e,t]);let T=new Set,ee=Math.max(1,Math.round(b.length*.08));for(;T.size<ee;)T.add(r.int(0,b.length-1));let D=r.range(-2.45*.6,Y*.6),O=r.range(-2.45*.6,Y*.6),k=Math.hypot(a,a),A=[];if(b.forEach(([e,t],n)=>{let a=(e-(Qe-1)/2)*Y,s=(t-(Qe-1)/2)*Y;if(o.add(h(Je,Je,.32999999999999996,i.sidewalk).translateX(a).translateZ(s)),T.has(n)){o.add(h(Je-Xe*2,Je-Xe*2,.35,i.park).translateX(a).translateZ(s));let e=r.int(3,5);for(let t=0;t<e;t++)w(a+r.range(-.6,.6),s+r.range(-.6,.6),i,r);return}let c=Je-Xe*2,l=r.chance(i.pSplit)?2:1,u=r.chance(i.pSplit)?2:1,d=c/l,f=c/u;for(let e=0;e<l;e++)for(let t=0;t<u;t++){let n=a-c/2+d*(e+.5),o=s-c/2+f*(t+.5),l=Math.max(.6,d-.1),u=Math.max(.6,f-.1),p=Math.hypot(n-D,o-O)/k,m=Math.exp(-(p*p)/(2*i.sigma*i.sigma)),h=Math.max(.5,.5+(i.hMax-.5)*m*r.range(.75,1.25));h>i.hMax*.5&&Math.min(l,u)>=.7&&A.push({lx:n,lz:o,fw:l,fd:u,h,r:p}),y(n,o,l,u,h,i,r)}}),n&&n.ready){A.sort((e,t)=>e.r-t.r);let e=[],t=i.landmarks;for(let r=0;r<t.length&&A.length;r++){let a=null;for(let t of A)if(e.every(e=>Math.hypot(e.lx-t.lx,e.lz-t.lz)>Y*.9)){a=t;break}a||=A[0],e.push(a),x(a.lx,a.lz);let o=i.hMax*n.heightFactor(t[r]),c=n.make(t[r],{x:a.lx,z:a.lz,w:a.fw,d:a.fd,h:o,plinthTop:qe});if(c){s.add(c);let e=new M().setFromObject(c);S(e.min.x-.15,e.max.x+.15,e.min.z-.15,e.max.z+.15)}}}o.traverse(e=>{e.isMesh&&(e.userData.ground?(e.castShadow=!1,e.receiveShadow=!0):e.material&&e.material.isMeshBasicMaterial?(e.castShadow=!1,e.receiveShadow=!1):(e.castShadow=!0,e.receiveShadow=!0))}),s.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),f.meshCount=o.children.length+s.children.length;let j=0;for(let e of o.children){let t=e.position;j=(Math.imul(j,16777619)^(Math.round(t.x*100)*2654435761^Math.round(t.y*100)*40503^Math.round(t.z*100)*2246822519))>>>0}for(let e of f.coast.points)j=(Math.imul(j,16777619)^(Math.round(e.x*100)*2654435761^Math.round(e.y*100)*40503))>>>0;f.sig=j,window.__city={seed:e,profile:i.key,meshes:f.meshCount,sig:j}}function y(e,t,n,r,a,s,c){let l=We(new g({flatShading:!0,roughness:.7,metalness:.05}),{color:c.pick(s.towers),id:++u,windowGlow:i,winColors:s.winColors,litFrac:s.nightLit}),f=new p(new D(n,a,r),l);if(f.position.set(e,qe+a/2,t),f.userData.lot=[e,t],o.add(f),s.roofTint){let i=q(new g({color:s.roofTint,roughness:.85,flatShading:!0}),{color:s.roofTint}),c=new p(new D(n*1.02,.08,r*1.02),i);c.position.set(e,qe+a+.04,t),c.userData.lot=[e,t],o.add(c)}if(a<1.4){let i=c.pick(s.shopfronts),a=new p(new D(n*1.04,.18,r*1.04),q(new g({color:i,roughness:.8,flatShading:!0}),{color:i}));a.position.set(e,.39,t),a.userData.lot=[e,t],o.add(a)}if(a>s.hMax*.45&&c.chance(s.roofRate)){let i=c.chance(.5)?new p(new D(n*.4,.18,r*.4),q(new g({color:`#9a9a9a`,flatShading:!0}),{color:`#9a9a9a`})):new p(new ie(n*.18,n*.18,.22,10),q(new g({color:`#b9bec4`,flatShading:!0}),{color:`#b9bec4`}));if(i.position.set(e+c.range(-.1,.1),qe+a+.11,t+c.range(-.1,.1)),i.userData.lot=[e,t],o.add(i),c.chance(.25)){let n=new p(new _(.05,6,5),new m({color:`#ff3b30`,transparent:!0,opacity:1}));n.position.set(e,qe+a+.26,t),n.userData.lot=[e,t],n.raycast=()=>{},o.add(n),d.push({mesh:n,phase:c.range(0,6.28)})}}}function x(e,t){for(let n=o.children.length-1;n>=0;n--){let r=o.children[n];r.userData.lot&&Math.abs(r.userData.lot[0]-e)<1e-4&&Math.abs(r.userData.lot[1]-t)<1e-4&&(r.geometry&&r.geometry.dispose(),nt(r.material),o.remove(r))}for(let e=d.length-1;e>=0;e--)d[e].mesh.parent||d.splice(e,1)}function S(e,t,n,r){for(let i=o.children.length-1;i>=0;i--){let a=o.children[i];a.userData.lot&&a.position.x>=e&&a.position.x<=t&&a.position.z>=n&&a.position.z<=r&&(a.geometry&&a.geometry.dispose(),nt(a.material),o.remove(a))}}function C(e,t){let n=q(new g({color:`#7a5634`,roughness:.95,flatShading:!0}),{color:`#7a5634`}),r=(e,t,r,i)=>{let a=new p(new D(e,.06,t),n);a.position.set(r,qe-.16,i),o.add(a)};r(.24,2,e+.02,0),r(1.3,.22,e+.7,-.72),r(1.3,.22,e+.7,.72)}function w(e,t,n,r){let i=new R(n.park),a=(n,a)=>{let s=i.clone().offsetHSL(0,0,r.range(-.06,.06)).getStyle(),c=new p(new _(n,7,6),q(new g({color:s,flatShading:!0}),{color:s,season:!0}));c.scale.y=.7,c.position.set(e,qe+a,t),c.userData.lot=null,o.add(c)},s=new p(new D(.05,.18,.05),q(new g({color:`#6b4a2a`,flatShading:!0}),{color:`#6b4a2a`}));s.position.set(e,.39,t),o.add(s),a(.22,.28),a(.16,.46)}function T(e){for(let t of d)t.mesh.material.opacity=.35+.65*(.5+.5*Math.sin(e*3+t.phase))}return v(e,t),{group:a,key:c,fill:l,update:T,generate:v,get state(){return f},get extent(){return f.extent},get waterColor(){return f.profile.water},profiles:Ke}}var it=Math.PI*2,at=.7,ot=90,st=[{name:`night`,sun:`#4a6f9e`,intensity:.35,hemiSky:`#26344f`,hemiGround:`#0c1018`,horizon:`#1e2942`,sky:`#36486e`,exposure:.95,outline:`#101a30`,window:1,toonGain:2.6},{name:`dawn`,sun:`#ff9e54`,intensity:2.4,hemiSky:`#8a7686`,hemiGround:`#2a1f1a`,horizon:`#b8512c`,sky:`#ffb070`,exposure:1.05,outline:`#241826`,window:.3,toonGain:2},{name:`noon`,sun:`#fff4e0`,intensity:4.6,hemiSky:`#9cb8cc`,hemiGround:`#33302a`,horizon:`#5e7689`,sky:`#aacadd`,exposure:1.18,outline:`#0b0a08`,window:0,toonGain:1.7},{name:`dusk`,sun:`#ff6b35`,intensity:2,hemiSky:`#7a566a`,hemiGround:`#281a18`,horizon:`#b0432a`,sky:`#ff8a5a`,exposure:1.05,outline:`#1f1420`,window:.4,toonGain:2}],X=e=>e-Math.floor(e),ct=(e,t,n)=>e+(t-e)*n,lt=(e,t,n)=>e+(t-e)*(1-Math.exp(-6*n));function ut({t:e=.5}={}){let t=e,n=e,r=!1,i=!1,a=st.map(e=>({name:e.name,sun:new R(e.sun),hemiSky:new R(e.hemiSky),hemiGround:new R(e.hemiGround),horizon:new R(e.horizon),sky:new R(e.sky),outline:new R(e.outline),intensity:e.intensity,exposure:e.exposure,window:e.window,toonGain:e.toonGain})),o=new O(0,1,0),s=new R(`#fff4e0`),c=new R(`#6f97b3`),l=new R(`#2a2620`),u=new R(`#3a4a57`),d=new R(`#7da3bd`),f=new R(`#0b0a08`),p=new R(`#000000`),m=3,h=1,g=0,_=1.7,v=new O;function y(e){let t=X(e)*4,n=Math.floor(t)%4,r=(n+1)%4,i=t-Math.floor(t),y=a[n],b=a[r];s.lerpColors(y.sun,b.sun,i),c.lerpColors(y.hemiSky,b.hemiSky,i),l.lerpColors(y.hemiGround,b.hemiGround,i),u.lerpColors(y.horizon,b.horizon,i),d.lerpColors(y.sky,b.sky,i),f.lerpColors(y.outline,b.outline,i),m=ct(y.intensity,b.intensity,i),h=ct(y.exposure,b.exposure,i),g=ct(y.window,b.window,i),_=ct(y.toonGain,b.toonGain,i),p.setRGB(.045*g,.075*g,.14*g);let x=X(e)*it-Math.PI/2,S=Math.cos(x),C=Math.sin(x);v.set(S,C*Math.cos(at),C*Math.sin(at)),v.y>=0?o.copy(v):o.copy(v).negate()}return y(t),{sunDir:o,sunColor:s,hemiSky:c,hemiGround:l,horizon:u,sky:d,outline:f,toonFloor:p,sunArc:v,get sunIntensity(){return m},get exposure(){return h},get windowGlow(){return g},get toonGain(){return _},get t(){return X(t)},get auto(){return r},get clock(){let e=Math.round(X(t)*24*60)%1440;return`${String(Math.floor(e/60)).padStart(2,`0`)}:${String(e%60).padStart(2,`0`)}`},cyclePreset(){n=(Math.floor(t*4+1e-4)+1)/4},nudge(e){n+=e/24},goTo(e){n=e},toggleAuto(){r=!r},setReducedMotion(e){i=e},update(e){r&&!i&&(n+=e/ot),t=lt(t,n,e),y(t)}}}function dt(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.35,`rgba(255,255,255,0.55)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new k(e);return r.colorSpace=u,r}function ft(e,t){let n=[];for(let r=0;r<16;r++){let i=r/16*Math.PI*2;n.push(new O(Math.cos(i)*e,t,Math.sin(i)*e))}return new pe(n,!0,`catmullrom`,.5)}function pt(e){let n=(t,n)=>Math.exp(-((e-t)*(e-t))/(2*n*n)),r=Math.max(n(.33,.05),n(.75,.06)),i=t.smoothstep(e,.24,.3)*(1-t.smoothstep(e,.8,.88));return t.clamp(.15+.55*i+.45*r,.12,1)}function mt(){let{PITCH:e,N:t,PLINTH_TOP:n}=et,r=t+1,i=n+.04,a=n=>(n-t/2)*e,o=t/2,s=[],c=(e,t)=>t*r+e;for(let e=0;e<r;e++)for(let t=0;t<r;t++)s.push({x:a(t),z:a(e),i:t,j:e,edges:[]});let l=[],u=(t,n)=>{let r=(s[t].i===o||s[t].j===o)&&(s[n].i===o||s[n].j===o),i=l.length;l.push({a:t,b:n,len:e,main:r}),s[t].edges.push(i),s[n].edges.push(i)};for(let e=0;e<r;e++)for(let t=0;t<r;t++)t<r-1&&u(c(t,e),c(t+1,e)),e<r-1&&u(c(t,e),c(t,e+1));return{nodes:s,edges:l,y:i,mid:o}}function ht({plinthTop:e=.3,extent:n=4,profile:i=null}={}){let o=new r,s=mt(),{nodes:u,edges:d}=s,f=s.y,p=.34,h=0;{let e=et.PITCH-p*2;h=Math.max(1,Math.floor((e+.26)/.56))}let _=new m({color:`#e8c84a`,fog:!0}),v=new a(new D(.05,.012,.3),_,d.length*h);v.frustumCulled=!1,v.raycast=()=>{},v.receiveShadow=!1,v.castShadow=!1,o.add(v);{let e=new l,t=0;for(let n of d){let r=u[n.a],i=u[n.b],a=i.x-r.x,o=i.z-r.z,s=Math.hypot(a,o),c=a/s,l=o/s,d=Math.atan2(c,l),m=s-p*2;for(let n=0;n<h;n++){let i=p+(h===1?m/2:m*n/(h-1));e.position.set(r.x+c*i,f,r.z+l*i),e.rotation.set(0,d,0),e.updateMatrix(),v.setMatrixAt(t++,e.matrix)}}v.instanceMatrix.needsUpdate=!0}let y=new a(new D(.34,.26,.74),q(new g({flatShading:!0,roughness:.5,metalness:.3})),12);y.castShadow=!0,y.receiveShadow=!1,y.frustumCulled=!1,y.raycast=()=>{};let b=new de,S=new Float32Array(72),C=new Float32Array(72),w=new R(`#fff0c0`),T=new R(`#ff3528`);for(let e=0;e<12;e++)w.toArray(C,e*3),T.toArray(C,(12+e)*3),S[e*3+1]=-50,S[(12+e)*3+1]=-50;b.setAttribute(`position`,new I(S,3)),b.setAttribute(`color`,new I(C,3));let E=new x({size:.72,sizeAttenuation:!0,map:dt(),vertexColors:!0,transparent:!0,opacity:0,blending:2,depthWrite:!1}),ee=new c(b,E);ee.frustumCulled=!1,ee.raycast=()=>{},o.add(y,ee);let te=[`#f4c430`,`#c0392b`,`#d8dde2`,`#9aa7b4`,`#6b7785`,`#5a7d9a`],k=Ge(2403557),A=d.map((e,t)=>t).filter(e=>d[e].main),j=[];for(let e=0;e<12;e++){let t=e<4&&A.length?A[k()*A.length|0]:k()*d.length|0,n=e===1;j.push({edge:t,fwd:k()<.5,s:k()*d[t].len,speed:n?.5:.78+e%3*.1,lenZ:n?1.45:1,color:te[n?1:e===0?0:2+e%4],rng:Ge(12648430+e*2654435761)})}let ne=new R;j.forEach((e,t)=>y.setColorAt(t,ne.set(e.color)));function re(e,t,n){let r=u[e],i=r.edges.filter(e=>e!==t);if(i.length===0)return t;let a=d[t],o=a.a===e?a.b:a.a,s=r.x-u[o].x,c=r.z-u[o].z,l=Math.hypot(s,c)||1,f=i[0],p=-2;for(let t of i){let n=d[t],i=n.a===e?n.b:n.a,a=u[i].x-r.x,o=u[i].z-r.z,m=Math.hypot(a,o)||1,h=s/l*(a/m)+c/l*(o/m);h>p&&(p=h,f=t)}return n()<.65?f:i[n()*i.length|0]}let ie=re,M=new l,N=(e,t)=>{M.position.set(0,-50,0),M.scale.setScalar(0),M.updateMatrix(),e.setMatrixAt(t,M.matrix)},ae=.085,P=et.PLINTH_TOP+.02+.13,F=new a(new oe(.04,.1,3,6),q(new g({flatShading:!0,roughness:.8})),14);F.castShadow=!0,F.receiveShadow=!1,F.frustumCulled=!1,F.raycast=()=>{};let se=ft(n-.72,e),ce=[];for(let e=0;e<14;e++)ce.push({phase:e/14,speed:.12+e%4*.02,dir:e%2?1:-1});let L=new O,le=new O,ue=new R;ce.forEach((e,t)=>F.setColorAt(t,ue.set([`#caa`,`#9ab`,`#bba`,`#ab9`][t%4]))),o.add(F);let z={manhattan:`#e8c84a`,paris:`#dcd2bc`,neoTokyo:`#5ae8e0`};function fe(e){e&&_.color.set(z[e.key]||`#e8c84a`)}fe(i);function B(n,r,i){let a=i?i.t:.5,o=i?i.windowGlow:0,s=Math.max(2,Math.round(pt(a)*12)),c=o>.05;for(let e=0;e<12;e++){if(e>=s){N(y,e),S[e*3+1]=-50,S[(12+e)*3+1]=-50;continue}let t=j[e];t.s+=n*t.speed;let r=0;for(;t.s>=d[t.edge].len&&r++<4;){t.s-=d[t.edge].len;let e=t.fwd?d[t.edge].b:d[t.edge].a,n=ie(e,t.edge,t.rng);t.edge=n,t.fwd=d[n].a===e}let i=d[t.edge],a=t.fwd?u[i.a]:u[i.b],o=t.fwd?u[i.b]:u[i.a],l=o.x-a.x,f=o.z-a.z,p=Math.hypot(l,f)||1,m=l/p,h=f/p,g=-h,_=m,v=a.x+m*t.s+g*ae,b=a.z+h*t.s+_*ae,x=Math.atan2(m,h);M.position.set(v,P,b),M.rotation.set(0,x,0),M.scale.set(1,1,t.lenZ),M.updateMatrix(),y.setMatrixAt(e,M.matrix);let C=.74*t.lenZ*.5,w=P+.06,T=e*3,E=(12+e)*3;c?(S[T]=v+m*(C+.04),S[T+1]=w,S[T+2]=b+h*(C+.04),S[E]=v-m*(C+.02),S[E+1]=w,S[E+2]=b-h*(C+.02)):(S[T+1]=-50,S[E+1]=-50)}y.instanceMatrix.needsUpdate=!0,b.attributes.position.needsUpdate=!0,E.opacity=t.clamp(o*1.8,0,1);let l=Math.max(2,Math.round(pt(a)*14));for(let t=0;t<14;t++){if(t>=l){N(F,t);continue}let n=ce[t],i=(n.phase+n.dir*n.speed*r*.02+1e3)%1;se.getPointAt(i,L),se.getTangentAt(i,le);let a=Math.sin(r*6+n.phase*30)*.015;M.position.set(L.x,e+.09+a,L.z),M.rotation.set(0,Math.atan2(le.x*n.dir,le.z*n.dir),Math.sin(r*6+n.phase*30)*.06),M.scale.setScalar(1),M.updateMatrix(),F.setMatrixAt(t,M.matrix)}F.instanceMatrix.needsUpdate=!0}return{group:o,update:B,setProfile:fe,graph:s,setRouter(e){ie=e||re}}}function gt({frames:e=4,fps:t=8}={}){function n(t){let n=t.clone();return n.needsUpdate=!0,n.repeat.set(1/e,1),n.offset.set(0,0),n}function r(n,r,i=0){let a=(Math.floor(r*t+i)%e+e)%e;return n.offset.x=a/e,a}return{frames:e,fps:t,makeInstanceTexture:n,step:r}}function _t(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.4,`rgba(255,255,255,0.5)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new k(e);return r.colorSpace=u,r}function vt(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64*.62,0,64/2,64*.62,64*.5);n.addColorStop(0,`rgba(240,250,255,0.95)`),n.addColorStop(1,`rgba(240,250,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new k(e);return r.colorSpace=u,r}function yt(){let e=document.createElement(`canvas`);e.width=256,e.height=64;let t=e.getContext(`2d`);t.strokeStyle=`#ffffff`,t.lineWidth=6,t.lineCap=`round`,t.lineJoin=`round`;let n=[14,24,36,24];for(let e=0;e<4;e++){let r=e*64,i=n[e];t.beginPath(),t.moveTo(r+8,40),t.quadraticCurveTo(r+24,i,r+32,36),t.quadraticCurveTo(r+40,i,r+56,40),t.stroke()}let r=new k(e);return r.colorSpace=u,r}function bt(e,t,n=18){let r=[];for(let i=0;i<n;i++){let a=i/n*Math.PI*2;r.push(new O(Math.cos(a)*e,t,Math.sin(a)*e))}return new pe(r,!0,`catmullrom`,.5)}function xt(e,t,n){let r=e-t,i=[],a=(e,t)=>i.push(new O(e,n,t)),o=(e,n,r,i,o=4)=>{for(let s=1;s<=o;s++){let c=r+(i-r)*(s/o);a(e+Math.cos(c)*t,n+Math.sin(c)*t)}};for(let t=0;t<4;t++)a(e,-r+2*r*t/4);o(r,r,0,Math.PI/2);for(let t=0;t<4;t++)a(r-2*r*t/4,e);o(-r,r,Math.PI/2,Math.PI);for(let t=0;t<4;t++)a(-e,r-2*r*t/4);o(-r,-r,Math.PI,1.5*Math.PI);for(let t=0;t<4;t++)a(-r+2*r*t/4,-e);return o(r,-r,1.5*Math.PI,2*Math.PI),new pe(i,!0,`catmullrom`,.5)}function St({extent:e=8,waterSize:n=28,plinthTop:i=.3}={}){let a=new r;a.raycast=()=>{};let o=.06,s=(e,t,r)=>r.set(e/n+.5,-t/n+.5,0),l=[xt(9.5,3,o),bt(12.7,o),new pe([new O(8.4,o,0),new O(11,o,-3.6),new O(13,o,0),new O(11,o,3.6)],!0,`catmullrom`,.5)],u=l.map(e=>e.getLength());function d({scale:e=1,hull:t=`#6b7785`,cabin:n=`#e7ecf2`}){let i=new r,a=new p(new D(.46*e,.2*e,1.1*e),q(new g({color:t,roughness:.6,metalness:.2,flatShading:!0}),{color:t}));a.position.y=.02;let o=new p(new D(.3*e,.22*e,.42*e),q(new g({color:n,roughness:.7,flatShading:!0}),{color:n}));return o.position.set(0,.18*e,.08*e),i.add(a,o),i.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!1),e.raycast=()=>{}}),i.userData.halfLen=.55*e,i}let f=[{laneIndex:0,dir:1,speed:.5,wake:.024,scale:1,hull:`#5a6675`,cabin:`#e7ecf2`},{laneIndex:1,dir:-1,speed:.42,wake:.022,scale:1,hull:`#7a5b46`,cabin:`#d9c3a6`},{laneIndex:0,dir:1,speed:.56,wake:.024,scale:.9,hull:`#456079`,cabin:`#cfe0ee`},{laneIndex:2,dir:1,speed:.34,wake:.03,scale:1.35,hull:`#39505f`,cabin:`#e2b85a`}];f.forEach((e,t)=>{e.mesh=d(e),e.u=t*.27%1,e.phase=t*1.7,e.isFerry=e.laneIndex===2,a.add(e.mesh)});let m=f.length,h=m*2,v=new de,y=new Float32Array(h*3).fill(-50),b=new Float32Array(h*3),S=new R(`#fff0c0`),C=new R(`#ff3528`);for(let e=0;e<m;e++)S.toArray(b,e*3),C.toArray(b,(m+e)*3);v.setAttribute(`position`,new I(y,3)),v.setAttribute(`color`,new I(b,3));let w=new c(v,new x({size:.6,sizeAttenuation:!0,map:_t(),vertexColors:!0,transparent:!0,opacity:0,blending:2,depthWrite:!1}));w.frustumCulled=!1,w.raycast=()=>{},a.add(w);function T(e,t){let n=new p(new _(e,9,7),q(new g({color:t,roughness:.5,flatShading:!0}),{color:t}));return n.scale.set(.55,.5,1),n.castShadow=!1,n.receiveShadow=!1,n.raycast=()=>{},n.position.y=-5,n}let E=[{x:-9.5,z:6,size:.18,color:`#5b6f86`,period:11,arcH:.55,span:1.1,whale:!1},{x:7.5,z:-9.5,size:.16,color:`#4a6076`,period:14,arcH:.5,span:1,whale:!1},{x:-7,z:-8.5,size:.2,color:`#607089`,period:9,arcH:.6,span:1.2,whale:!1},{x:10.5,z:7,size:.62,color:`#3a4350`,period:38,arcH:.9,span:2.6,whale:!0}];E.forEach((e,t)=>{e.mesh=T(e.size,e.color),e.heading=Math.atan2(-e.x,-e.z),e.t=t/E.length*e.period,e.splashed=!1,a.add(e.mesh),e.whale&&(e.spout=new j(new B({map:vt(),transparent:!0,opacity:0,depthWrite:!1,fog:!0})),e.spout.scale.set(.6,1.1,1),e.spout.position.set(e.x,-5,e.z),a.add(e.spout))});let ee=yt(),te=gt({frames:4,fps:7}),k=[`#ffffff`,`#cfd4da`,`#c8a06a`],A=[];for(let e=0;e<4;e++){let t=new j(new B({map:te.makeInstanceTexture(ee),color:new R(k[e%k.length]),transparent:!0,opacity:0,depthWrite:!1,fog:!0}));t.scale.setScalar(.5),A.push({sp:t,r:8.6+e*.5,y:1.1+e%2*.5,speed:(.18+e*.03)*(e%2?-1:1),phase:e*1.9}),a.add(t)}typeof window<`u`&&(window.__gullAnim={frames:te.frames,variants:k.length,fps:te.fps});let ne=E.length,re=Array.from({length:m+ne},()=>new O),ie=e=>e.laneIndex,M=new O,N=new O,ae=new O;function P(e,n,r){let i=r?r.windowGlow:0,a=1-i;for(let t=0;t<m;t++){let r=f[t],a=l[r.laneIndex],c=u[r.laneIndex],d=r.isFerry?.45+.55*Math.min(1,Math.abs((r.u+.5)%1-.5)*3):1,p=r.u;r.u=(r.u+r.dir*e*r.speed*d/c+1)%1,(r.dir>0?r.u<p:r.u>p)&&(r.laneIndex=ie(r)),a.getPointAt(r.u,M),a.getTangentAt(r.u,N);let h=N.x*r.dir,g=N.z*r.dir,_=Math.atan2(h,g),v=Math.sin(n*1.1+r.phase)*.025;r.mesh.position.set(M.x,o+v,M.z),r.mesh.rotation.set(Math.sin(n*.9+r.phase)*.04,_,0);let b=r.mesh.userData.halfLen;s(M.x-h*b,M.z-g*b,ae),re[t].set(ae.x,ae.y,r.wake);let x=t*3,S=(m+t)*3;if(i>.05){let e=.18;y[x]=M.x+h*(b+.05),y[x+1]=e,y[x+2]=M.z+g*(b+.05),y[S]=M.x-h*(b+.02),y[S+1]=e,y[S+2]=M.z-g*(b+.02)}else y[x+1]=-50,y[S+1]=-50}oe(),w.material.opacity=t.clamp(i*1.8,0,1);for(let n=0;n<ne;n++){let r=E[n];r.t+=e;let i=m+n,a=r.whale?3.2:1.3;if(r.t>=r.period){let e=(r.t-r.period)/a;if(e>=1){r.t=0,r.splashed=!1,r.mesh.position.y=-5,r.spout&&(r.spout.material.opacity=0),re[i].set(0,0,0);continue}let n=Math.sin(Math.PI*e),c=(e-.5)*r.span,l=r.x+Math.sin(r.heading)*c,u=r.z+Math.cos(r.heading)*c;r.mesh.position.set(l,o-.1+n*r.arcH,u),r.mesh.rotation.set(Math.cos(Math.PI*e)*.9,r.heading,0);let d=e<.16||e>.84;if(s(l,u,ae),re[i].set(ae.x,ae.y,d?r.whale?.07:.05:0),r.spout){let n=t.clamp((e-.15)*3,0,1)*(1-e);r.spout.position.set(l,.56+n*.6,u),r.spout.material.opacity=n*.9}}else r.mesh.position.y=-5,re[i].set(0,0,0),r.spout&&(r.spout.material.opacity=0)}for(let e=0;e<4;e++){let r=A[e],i=r.phase+n*r.speed*.25;r.sp.position.set(Math.cos(i)*r.r,r.y+Math.sin(n*1.4+r.phase)*.12,Math.sin(i)*r.r),r.sp.material.opacity=t.clamp(a*.9-.05,0,.85);let o=te.step(r.sp.material.map,n,r.phase);e===0&&typeof window<`u`&&(window.__gullFrame=o)}if(typeof window<`u`){let e=0;for(let t of E)t.mesh.position.y>o&&e++;window.__waterLife={boats:m,breaching:e,gulls:+A[0].sp.material.opacity.toFixed(2),lights:+w.material.opacity.toFixed(2)}}}function oe(){v.attributes.position.needsUpdate=!0}function F(){return re.length}return{group:a,update:P,wakeDrops:re,get wakeCount(){return F()},lanes:l,setRouter(e){ie=e||(e=>e.laneIndex)}}}var Ct=[`empireState`,`chrysler`,`liberty`,`eiffel`,`arcDeTriomphe`,`sacreCoeur`,`tokyoTower`,`pagoda`,`neonBillboard`],wt={empireState:1.25,chrysler:1.1,liberty:.55,eiffel:3.2,arcDeTriomphe:1.5,sacreCoeur:1.75,tokyoTower:1.35,pagoda:.5,neonBillboard:.9};function Tt(e){let t=()=>new g({flatShading:!0,roughness:.7,metalness:.1}),n=(n,r={})=>r.windows?We(t(),{color:n,id:e.id(),windowGlow:e.windowGlow,winColors:e.winColors,litFrac:e.litFrac}):q(t(),{color:n,glow:r.glow??null,glowDay:r.glowDay??0,glowNight:r.glowNight??1,windowGlow:r.glow?e.windowGlow:null});return{box:(e,t,r,i,a={})=>new p(new D(e,t,r),n(i,a)),cyl:(e,t,r,i,a={})=>new p(new ie(e,t,r,a.seg||12),n(i,a)),cone:(e,t,r,i={})=>new p(new F(e,t,i.seg||8),n(r,i)),sphere:(e,t,r={})=>new p(new _(e,r.seg||12,r.seg2||8),n(t,r)),lathe:(e,t,r={})=>new p(new i(e.map(e=>new N(e[0],e[1])),r.seg||4),n(t,r))}}var Z=(e,t,n,r)=>(e.position.set(t,n,r),e),Et=[`#7FB0E0`,`#E07FB0`,`#7FE0A0`,`#E0C97F`,`#9FE07F`,`#7FE0E0`,`#FF8C42`,`#E0E07F`,`#C97FE0`,`#E07F7F`,`#7F9FE0`,`#E0483A`],Dt={empireState(e,t){let n=`#E8E0CF`;e.add(Z(t.box(.42,.18,.42,n,{windows:!0}),0,.09,0)),e.add(Z(t.box(.34,.16,.34,n,{windows:!0}),0,.26,0)),e.add(Z(t.box(.26,.14,.26,n,{windows:!0}),0,.41,0)),e.add(Z(t.box(.19,.34,.19,n,{windows:!0}),0,.65,0)),e.add(Z(t.box(.13,.06,.13,n,{windows:!0}),0,.85,0));let r=Et[new Date().getMonth()];e.add(Z(t.cyl(.03,.045,.12,n,{seg:10,glow:r,glowNight:1.85}),0,.94,0)),e.add(Z(t.cone(.012,.07,n,{seg:8}),0,1.04,0))},chrysler(e,t){let n=`#C9CED4`;e.add(Z(t.box(.22,.55,.22,`#9AA7B4`,{windows:!0}),0,.275,0));let r=.55;for(let i=0;i<5;i++){let a=.14-i*.024,o=.07;e.add(Z(t.cyl(a*.7,a,o,n,{seg:8,glow:`#dfeaff`,glowNight:.5}),0,r+o/2,0)),r+=o}e.add(Z(t.cone(.018,.16,n,{seg:8}),0,r+.08,0))},liberty(e,t){let n=`#B9B4A6`,r=`#4FA890`;e.add(Z(t.box(.42,.16,.42,n),0,.08,0)),e.add(Z(t.box(.3,.2,.3,n),0,.26,0)),e.add(Z(t.cyl(.1,.15,.42,r,{seg:10}),0,.57,0)),e.add(Z(t.box(.11,.1,.11,r),0,.83,0));for(let n=0;n<7;n++){let i=(n/6-.5)*Math.PI*1.1;e.add(Z(t.cone(.012,.1,r,{seg:5}),Math.sin(i)*.1,.92,Math.cos(i)*.06-.02))}let i=Z(t.cyl(.025,.03,.34,r,{seg:8}),.14,.98,0);i.rotation.z=.35,e.add(i),e.add(Z(t.box(.06,.06,.06,r,{glow:`#ffd060`,glowDay:.6,glowNight:1.2}),.2,1.16,0)),e.add(Z(t.cone(.04,.09,`#ffcf66`,{seg:6,glow:`#ffd060`,glowDay:.7,glowNight:1.3}),.2,1.24,0))},eiffel(e,t){let n=`#6E5C4C`,r=[[.2,0],[.13,.16],[.085,.33],[.055,.5],[.035,.66],[.02,.85],[0,.92]];e.add(t.lathe(r,n,{seg:4}));let i=t.lathe(r,n,{seg:4});i.rotation.y=Math.PI/4,e.add(i),e.add(Z(t.box(.26,.025,.26,n),0,.33,0)),e.add(Z(t.box(.14,.02,.14,n),0,.66,0)),e.add(Z(t.cone(.01,.1,n,{seg:6}),0,.97,0))},arcDeTriomphe(e,t){let n=`#D9D0C1`,r=.58,i=.5,a=.34,o=new E;o.moveTo(-.58/2,0),o.lineTo(r/2,0),o.lineTo(r/2,i),o.lineTo(-.58/2,i),o.lineTo(-.58/2,0);let s=new v,c=.15,l=.22;s.moveTo(-.15,0),s.lineTo(-.15,l),s.absarc(0,l,c,Math.PI,0,!0),s.lineTo(c,0),s.lineTo(-.15,0),o.holes.push(s);let u=new te(o,{depth:a,bevelEnabled:!1});u.translate(0,0,-.34/2),u.computeVertexNormals(),e.add(new p(u,q(new g({color:n,flatShading:!0}),{color:n}))),e.add(Z(t.box(r*1.06,.08,a*1.06,n),0,.54,0))},sacreCoeur(e,t){let n=`#F1EEE6`;e.add(Z(t.box(.5,.26,.4,n),0,.13,0));let r=(r,i,a,o)=>{e.add(Z(t.cyl(a*.9,a,i,n,{seg:12}),r,o,0));let s=Z(t.sphere(a,n,{seg:12}),r,o+i/2,0);s.scale.y=1.5,e.add(s)};r(0,.22,.15,.4),r(-.2,.1,.07,.33),r(.2,.1,.07,.33)},tokyoTower(e,t){let n=`#F25822`,r=`#EDEDED`,i=0;for(let a=0;a<9;a++){let o=a/9,s=(a+1)/9,c=.19*(1-o)+.03*o,l=.19*(1-s)+.03*s,u=.085,d=a%2?r:n;e.add(Z(t.cyl(l,c,u,d,{seg:4,glow:n,glowDay:0,glowNight:.7}),0,i+u/2,0)),i+=u}e.add(Z(t.box(.22,.02,.22,n,{glow:n,glowNight:.7}),0,.28,0)),e.add(Z(t.box(.12,.02,.12,r),0,.5,0)),e.add(Z(t.cone(.012,.16,r,{seg:6,glow:`#ff6a2a`,glowNight:.9}),0,i+.08,0))},pagoda(e,t){let n=0;for(let r=0;r<5;r++){let i=.42-r*.06,a=.11;e.add(Z(t.box(i,a,i,`#B23A2C`,{windows:r<4}),0,n+a/2,0)),e.add(Z(t.box(i*1.34,.03,i*1.34,`#7A3B2A`),0,n+a+.015,0)),n+=.16999999999999998}e.add(Z(t.cyl(.012,.012,.1,`#E0C040`,{seg:6}),0,n+.05,0)),e.add(Z(t.sphere(.03,`#E0C040`,{seg:8,glow:`#ffe680`,glowNight:.8}),0,n+.12,0))},neonBillboard(e,t){let n=`#20242C`;e.add(Z(t.box(.3,1,.3,n,{windows:!0}),0,.5,0));let r=[`#5AE8E0`,`#E85AA0`,`#E8E06A`],i=(n,r,i,a,o,s,c)=>{let l=Z(t.box(n,r,.02,i,{glow:i,glowDay:.6,glowNight:1.1}),a,o,s);l.rotation.y=c,e.add(l)};i(.22,.34,r[0],0,.75,.16,0),i(.16,.5,r[1],.16,.5,0,Math.PI/2),i(.2,.22,r[2],0,.34,-.16,0),e.add(Z(t.cone(.01,.14,n,{seg:6,glow:`#E85AA0`,glowDay:.4,glowNight:1}),0,1.08,0))}};function Ot(e,t){let n=new r;return Dt[e](n,Tt(t)),n}var kt=``+new URL(`building-skyscraper-d-CapD2Zqe.glb`,import.meta.url).href,At=``+new URL(`building-n-hdv8kKtN.glb`,import.meta.url).href,jt=``+new URL(`building-g-CsTB1qH9.glb`,import.meta.url).href,Mt=``+new URL(`colormap-CK8fW2HB.png`,import.meta.url).href,Nt={skyscraper:{url:kt,color:`#9cc1dd`,fill:.92},midrise:{url:At,color:`#c9a07a`,fill:.96},setback:{url:jt,color:`#d9c7a0`,fill:.9}};function Pt({windowGlow:e}){let t=new P;t.setURLModifier(e=>e.includes(`colormap.png`)?Mt:e);let n=new fe(t),r={},i=!1,a=Promise.all(Object.entries(Nt).map(async([e,t])=>{r[e]=(await n.loadAsync(t.url)).scene})).then(()=>{i=!0,window.__landmarksReady=!0}).catch(e=>console.error(`landmark models failed:`,e)),o=9e3;function s(t,n,i={}){let a,s;if(Ct.includes(t))a=Ot(t,{windowGlow:e,winColors:i.winColors,litFrac:i.litFrac,id:()=>++o}),s=1;else{let e=r[t],n=Nt[t];if(!e||!n)return null;a=e.clone(!0),s=n.fill}a.updateMatrixWorld(!0);let c=new M().setFromObject(a).getSize(new O);a.scale.setScalar(n.h*s/c.y),a.updateMatrixWorld(!0);let l=new M().setFromObject(a),u=l.getCenter(new O);return a.position.x+=n.x-u.x,a.position.z+=n.z-u.z,a.position.y+=n.plinthTop-l.min.y,Ct.includes(t)?a.traverse(e=>{e.isMesh&&(e.castShadow=!1,e.raycast=()=>{})}):a.traverse(n=>{if(!n.isMesh)return;n.castShadow=!1,n.raycast=()=>{};let r=n=>We(n.clone(),{color:Nt[t].color,id:++o,windowGlow:e,winColors:i.winColors,litFrac:i.litFrac});n.material=Array.isArray(n.material)?n.material.map(r):r(n.material)}),a}return{make:s,whenReady:a,heightFactor:e=>wt[e]??1,get ready(){return i}}}var Ft=[`clear`,`rain`,`snow`,`fog`];function It({extent:e=7}={}){let t=new r;t.raycast=()=>{};let i=e+2,o=.25,s=(e,t)=>e+Math.random()*(t-e),c=new a(new n(.015,.5),new m({color:`#a9bdd6`,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),600);c.frustumCulled=!1,c.raycast=()=>{};let u=new Float32Array(600*3),d=new Float32Array(600);for(let e=0;e<600;e++)u[e*3]=s(-i,i),u[e*3+1]=s(o,11),u[e*3+2]=s(-i,i),d[e]=s(9,14);let f=new a(new n(.07,.07),new m({color:`#f3f7ff`,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),700);f.frustumCulled=!1,f.raycast=()=>{};let p=new Float32Array(700*3),h=new Float32Array(700),g=new Float32Array(700);for(let e=0;e<700;e++)p[e*3]=s(-i,i),p[e*3+1]=s(o,11),p[e*3+2]=s(-i,i),h[e]=s(0,6.28),g[e]=s(.6,1.2);t.add(c,f);let _=Array.from({length:8},()=>new O),v=0,y=`clear`,b=0,x=0,S=0,C=0,w=0,T=new l,E=(e,t,n,r)=>e+(t-e)*Math.min(1,n*r);function ee(e){Ft.includes(e)&&(y=e)}function D(){y=Ft[(Ft.indexOf(y)+1)%Ft.length]}function te(e,t){let n=y===`rain`,r=y===`snow`,a=y===`fog`,l=y!==`clear`;b=E(b,+!!l,e,1.4),x=E(x,+!!l,e,1.2),S=E(S,+!!a,e,.9),w=E(w,l&&!a?1:0,e,1),C=E(C,+!!r,e,r?.22:.5);let m=n?b:0,ee=Math.round(600*m);for(let t=0;t<600;t++){if(t>=ee){T.position.set(0,-50,0),T.scale.setScalar(0),T.updateMatrix(),c.setMatrixAt(t,T.matrix);continue}u[t*3+1]-=d[t]*e,u[t*3]+=e*1.1,u[t*3+1]<o&&(u[t*3]=s(-i,i),u[t*3+1]=11,u[t*3+2]=s(-i,i)),T.position.set(u[t*3],u[t*3+1],u[t*3+2]),T.rotation.set(0,0,0),T.scale.set(1,1,1),T.updateMatrix(),c.setMatrixAt(t,T.matrix)}c.instanceMatrix.needsUpdate=!0,c.material.opacity=.55*m,v=n?Math.round(8*b):0;for(let e=0;e<v;e++)_[e].set(Math.random(),Math.random(),.05*b);let D=Math.round(700*(r?b:0));for(let n=0;n<700;n++){if(n>=D){T.position.set(0,-50,0),T.scale.setScalar(0),T.updateMatrix(),f.setMatrixAt(n,T.matrix);continue}p[n*3+1]-=g[n]*e;let r=Math.sin(t*1.5+h[n])*.5;p[n*3+1]<o&&(p[n*3]=s(-i,i),p[n*3+1]=11,p[n*3+2]=s(-i,i)),T.position.set(p[n*3]+r,p[n*3+1],p[n*3+2]),T.rotation.set(0,0,0),T.scale.setScalar(1),T.updateMatrix(),f.setMatrixAt(n,T.matrix)}f.instanceMatrix.needsUpdate=!0,f.material.opacity=.9*(r?b:0)}return{group:t,update:te,cycle:D,setKind:ee,rainDrops:_,get kind(){return y},get intensity(){return b},get overcast(){return x},get fog(){return S},get snow(){return C},get cloud(){return w},get rainDropCount(){return v},poolCounts:{rain:600,snow:700}}}function Lt(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=(e,n,r)=>{let i=t.createRadialGradient(e,n,0,e,n,r);i.addColorStop(0,`rgba(255,255,255,0.95)`),i.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=i,t.beginPath(),t.arc(e,n,r,0,7),t.fill()};n(128*.42,128*.56,128*.26),n(128*.6,128*.5,128*.3),n(128*.5,128*.46,128*.22),n(128*.34,128*.54,128*.18),n(128*.7,128*.58,128*.18);let r=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5],i=t.getImageData(0,0,128,128),a=i.data;for(let e=0;e<128;e++)for(let t=0;t<128;t++){let n=(e*128+t)*4,i=a[n+3]/255,o=(r[e%4*4+t%4]+.5)/16-.5;a[n+3]=Math.max(0,Math.min(1,Math.floor(i*5+.5+o)/5))*255}t.putImageData(i,0,0);let o=new k(e);return o.colorSpace=u,o}function Rt({extent:e=8,count:t=16}={}){let n=new r;n.raycast=()=>{};let i=Lt(),a=e+6,o=(e,t)=>e+Math.random()*(t-e),s=[];for(let e=0;e<t;e++){let e=new B({map:i,transparent:!0,depthWrite:!1,opacity:0,fog:!0}),t=new j(e),r={sp:t,mat:e,wisp:Math.random(),x:o(-a,a),z:o(-a,a),hiY:o(4,6.8),loY:o(.6,2.2),w:o(3,5.6),h:o(1.7,3),speed:o(.25,.7),op:o(.6,1)};t.raycast=()=>{},s.push(r),n.add(t)}let c=new R,l=new R(`#ffffff`),u=new R(`#5b626e`);function d(e,t,n,r){let i=r?r.cloud:0,d=r?r.fog:0,f=Math.min(1,.4+.6*i+.5*d);c.copy(n.sky).lerp(l,.62),c.lerp(u,.6*i);for(let n=0;n<s.length;n++){let r=s[n],l=n/s.length<f;r.x+=r.speed*e*(.6+.8*i),r.x>a&&(r.x=-a,r.z=o(-a,a));let u=Math.min(zt(r.x,-a,-a+3),1-zt(r.x,a-3,a)),p=r.hiY*(1-d)+r.loY*d,m=1-.5*r.wisp,h=.72*Math.max(0,1-d-i)+1*i+.42*d,g=l?Math.max(0,h)*r.op*m*u:0;r.mat.opacity+=(g-r.mat.opacity)*Math.min(1,e*2.5),r.mat.color.copy(c);let _=r.w*(1+.6*d)*(1+.4*r.wisp),v=r.h*(1-.35*d);r.sp.scale.set(_,v,1),r.sp.position.set(r.x,p+Math.sin(t*.3+n)*.15,r.z)}}function f(e){i=e;for(let t of s)t.mat.map=e,t.mat.needsUpdate=!0}return{group:n,update:d,setTexture:f,get count(){return s.length}}}function zt(e,t,n){let r=Math.max(0,Math.min(1,(e-t)/(n-t)));return r*r*(3-2*r)}var Bt=Math.PI*2;function Vt(e){let t=document.createElement(`canvas`);t.width=t.height=128;let n=t.getContext(`2d`),r=n.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return r.addColorStop(0,`#ffffff`),r.addColorStop(.34,`#fffaf0`),r.addColorStop(.66,e),r.addColorStop(.86,e),r.addColorStop(1,`rgba(255,255,255,0)`),n.fillStyle=r,n.beginPath(),n.arc(128/2,128/2,128/2,0,Bt),n.fill(),qt(t,!0)}function Ht(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);n.addColorStop(0,`#ffffff`),n.addColorStop(.4,`#eef3ff`),n.addColorStop(.82,`#c4cee6`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,128/2,0,Bt),t.fill(),t.globalAlpha=.14,t.fillStyle=`#8b97b4`;for(let[e,n,r]of[[54,50,9],[78,66,7],[60,82,5]])t.beginPath(),t.arc(e,n,r,0,Bt),t.fill();return qt(e,!0)}function Ut(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`);t.translate(128/2,128/2),t.fillStyle=`rgba(255,210,120,0.9)`;for(let e=0;e<12;e++)t.rotate(Bt/12),t.beginPath(),t.moveTo(0,-28),t.lineTo(7,-54),t.lineTo(-7,-54),t.closePath(),t.fill();let n=t.createRadialGradient(0,0,0,0,0,32);return n.addColorStop(0,`#ffffff`),n.addColorStop(.4,`#fff1c8`),n.addColorStop(.8,`#ffb24a`),n.addColorStop(1,`#ff8a2a`),t.fillStyle=n,t.beginPath(),t.arc(0,0,32,0,Bt),t.fill(),qt(e,!0)}function Wt(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,46);n.addColorStop(0,`#ffffff`),n.addColorStop(.5,`#e6ecfb`),n.addColorStop(1,`#c2cce4`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,46,0,Bt),t.fill(),t.fillStyle=`#aab6d2`;for(let[e,n,r]of[[52,48,11],[80,62,8],[58,82,7],[40,66,5]])t.beginPath(),t.arc(e,n,r,0,Bt),t.fill();return qt(e,!0)}function Gt(e,t,n){let r=document.createElement(`canvas`);r.width=r.height=144;let i=r.getContext(`2d`),a=17/2,o=18/2-.5;for(let r=0;r<18;r++)for(let s=0;s<18;s++){let c=Math.hypot(s-a,r-a);c>o||(i.fillStyle=c<o*.45?e:c<o*.78?t:n,i.fillRect(Math.round(s*8),Math.round(r*8),8,8))}return qt(r,!1)}function Kt(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return n.addColorStop(0,`rgba(255,255,255,0.9)`),n.addColorStop(.38,`rgba(255,255,255,0.3)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,128/2,0,Bt),t.fill(),qt(e,!0)}function qt(e,t){let n=new k(e);return n.colorSpace=u,t||(n.magFilter=o,n.minFilter=o),n}var Jt=(e,t,n)=>{let r=Math.max(0,Math.min(1,(e-t)/(n-t)));return r*r*(3-2*r)};function Yt({skyW:e=15,skyY0:t=3.4,skyH:n=3.8,z:i=-7.8,biasX:a=4.5,sunSize:o=4.6,moonSize:s=4}={}){let c=new r;c.raycast=()=>{};let l=(e,t)=>{let n=new j(new B({map:e,transparent:!0,depthWrite:!1,fog:!1,toneMapped:!1,...t?{blending:2}:{}}));return n.raycast=()=>{},n},u={realistic:Vt(`#ffcf8a`),charm:Ut(),pixel:Gt(`#fff6e0`,`#ffc24a`,`#ff8a2a`)},d={realistic:Ht(),charm:Wt(),pixel:Gt(`#ffffff`,`#cdd6ee`,`#9aa6c6`)},f=Kt(),p=l(f,!0),m=l(u.realistic),h=l(f,!0),g=l(d.realistic);c.add(p,m,h,g);let _={realistic:{sunGlow:3,sunGlowOp:.7,moonGlow:2.6,moonGlowOp:.5,sizeMul:1},charm:{sunGlow:2.2,sunGlowOp:.55,moonGlow:2.1,moonGlowOp:.42,sizeMul:1.08},pixel:{sunGlow:1.7,sunGlowOp:.4,moonGlow:1.7,moonGlowOp:.32,sizeMul:1}},v=`realistic`;function y(e){e===v||!_[e]||(v=e,m.material.map=u[e],m.material.needsUpdate=!0,g.material.map=d[e],g.material.needsUpdate=!0)}new R;let b=new R(`#fff3df`),x=new R(`#ffb060`),S=new R(`#ff6a2a`),C=new R(`#eef2ff`),w=new R(`#9fbcff`);function T(r,c,l,u,d=`realistic`){y(d);let f=_[v],T=l.sunArc,E=u?Math.min(1,(u.cloud||0)*.85+(u.fog||0)*.7):0,ee=T.y,D=Jt(ee,-.04,.1)*(1-.7*E),O=1-Jt(Math.abs(ee),.02,.5);m.position.set(T.x*e+a,t+T.y*n,i),p.position.copy(m.position);let te=o*f.sizeMul*(1+.55*O);m.scale.setScalar(te),p.scale.setScalar(te*f.sunGlow),m.material.color.copy(b),p.material.color.copy(x).lerp(S,O),m.material.opacity=D,p.material.opacity=D*f.sunGlowOp*(.7+.5*O);let k=Jt(-T.y,-.04,.1)*(1-.65*E);g.position.set(-T.x*e+a,t+-T.y*n,i),h.position.copy(g.position);let A=s*f.sizeMul;g.scale.setScalar(A),h.scale.setScalar(A*f.moonGlow),g.material.color.copy(C),h.material.color.copy(w),g.material.opacity=k,h.material.opacity=k*f.moonGlowOp}return{group:c,update:T}}var Xt=`varying vec2 vUv;

void main() {
  
  
  
  vUv = uv;

  
  
  
  
  
  
  
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,Zt=`precision highp float;

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
}`,Qt=`varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0); 
}`,$t=`precision highp float;

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
}`,en=`precision highp float;

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
}`,tn=`precision highp float;

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
}`,nn=`const float CA_STRENGTH   = 0.0030;  
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
}`,rn=`const float DITHER = 0.55;   

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
}`,an=`precision highp float;

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
}`,on=`precision highp float;

varying vec2 vUv;
uniform sampler2D uToon;   
uniform sampler2D uPixel;  
uniform float     uBlend;  

void main() {
  vec3 t = texture2D(uToon, vUv).rgb;
  vec3 p = texture2D(uPixel, vUv).rgb;
  gl_FragColor = vec4(mix(t, p, uBlend), 1.0);
}`,sn=`precision highp float;

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
}`,cn={"1-bit":{gridWidth:110,dither:.6,palette:[`#15120c`,`#c8b486`]},gb:{gridWidth:130,dither:.4,palette:[`#0f380f`,`#306230`,`#8bac0f`,`#9bbc0f`]},"8-bit":{gridWidth:160,dither:.55,palette:[`#140c1c`,`#442434`,`#30346d`,`#4e4a4e`,`#854c30`,`#346524`,`#d04648`,`#757161`,`#597dce`,`#d27d2c`,`#8595a1`,`#6daa2c`,`#d2aa99`,`#6dc2ca`,`#dad45e`,`#deeed6`]},"16-bit":{gridWidth:280,dither:.3,palette:`#000000.#222034.#45283c.#663931.#8f563b.#df7126.#d9a066.#eec39a.#fbf236.#99e550.#6abe30.#37946e.#4b692f.#524b24.#323c39.#3f3f74.#306082.#5b6ee1.#639bff.#5fcde4.#cbdbfc.#ffffff.#9badb7.#847e87.#696a6a.#595652.#76428a.#ac3232.#d95763.#d77bba.#8f974a.#8a6f30`.split(`.`)},modern:{gridWidth:460,dither:.6,palette:null}},ln=[`gb`,`8-bit`,`16-bit`,`modern`];function un(e){let t=Math.max(e.length,1),n=new Float32Array(t*4);e.forEach((e,t)=>{let r=new R(e);n[t*4+0]=r.r,n[t*4+1]=r.g,n[t*4+2]=r.b,n[t*4+3]=1});let r=new re(n,t,1,s,ge);return r.minFilter=o,r.magFilter=o,r.needsUpdate=!0,r}var dn=220,fn={night:[`#0A0C16`,`#1C2236`,`#3A3A52`,`#5A5A78`,`#8A92B0`],dawn:[`#1A1008`,`#43281A`,`#7A4A30`,`#B07A4E`,`#E8A86A`],noon:[`#16100A`,`#3A2F1E`,`#6B563A`,`#937B54`,`#B89968`],dusk:[`#140A0A`,`#3E1E1A`,`#7A3828`,`#B85A36`,`#F0884A`]},pn={night:[`#020604`,`#06180E`,`#10401E`,`#1E9040`,`#7FE0FF`],dawn:[`#060603`,`#1A2410`,`#3A6B22`,`#6CC040`,`#FFC060`],noon:[`#050805`,`#0E2912`,`#1E6B2F`,`#3CF06A`,`#FFB000`],dusk:[`#080402`,`#241408`,`#6B4A12`,`#E0A030`,`#FF7030`]};function mn({demo:e=!1,citySeed:r=0,profileIndex:i=0}={}){let a=new se({antialias:!0,preserveDrawingBuffer:!0});a.shadowMap.enabled=!0,a.shadowMap.type=1,a.shadowMap.autoUpdate=!1,a.shadowMap.needsUpdate=!0;let c=!!(window.matchMedia&&window.matchMedia(`(pointer: coarse)`).matches);a.setPixelRatio(Math.min(window.devicePixelRatio,c?1.5:2)),a.setSize(window.innerWidth,window.innerHeight),a.setClearColor(920327,1),document.body.appendChild(a.domElement);let l=a.getDrawingBufferSize(new N),d=new T;d.fog=new y(10465470,0);let g=new R(`#aeb6c0`),_=.062,v=new R(`#74508f`),b=new R,x=ke({aspect:window.innerWidth/window.innerHeight}),S=ut({t:.5}),C={type:he,format:s,minFilter:o,magFilter:o,wrapS:ne,wrapT:ne,depthBuffer:!1,stencilBuffer:!1},E=[new L(256,256,C),new L(256,256,C),new L(256,256,C)];for(let e of E)a.setRenderTarget(e),a.clear();a.setRenderTarget(null);let D=new T,te=new f(-1,1,1,-1,0,1),A=new w({vertexShader:Qt,fragmentShader:$t,uniforms:{uCurr:{value:null},uPrev:{value:null},uTexel:{value:new N(1/256,1/256)},uMouse:{value:new N(-1,-1)},uMouseStrength:{value:0},uC2:{value:.25},uDamping:{value:.992},uRainCount:{value:0},uRainDrops:{value:Array.from({length:8},()=>new O)},uWakeCount:{value:0},uWakeDrops:{value:Array.from({length:8},()=>new O)}}});D.add(new p(new n(2,2),A));let j=new L(l.x,l.y,{minFilter:h,magFilter:h,depthBuffer:!0,stencilBuffer:!1});function re(e){let t=document.createElement(`canvas`);t.width=t.height=1024;let n=t.getContext(`2d`);n.fillStyle=e?`#0c1418`:`#15110b`,n.fillRect(0,0,1024,1024),n.strokeStyle=e?`rgba(120,150,170,0.22)`:`rgba(184,153,104,0.30)`,n.lineWidth=2;for(let e=0;e<=1024;e+=64)n.beginPath(),n.moveTo(e,0),n.lineTo(e,1024),n.stroke(),n.beginPath(),n.moveTo(0,e),n.lineTo(1024,e),n.stroke();e||(n.fillStyle=`#B89968`,n.font=`bold 360px Georgia, serif`,n.textAlign=`center`,n.textBaseline=`middle`,n.fillText(`LGR`,512,470),n.font=`600 64px ui-monospace, monospace`,n.fillText(`WEB · STUDIO`,512,720));let r=new k(t);return r.colorSpace=u,r}let ie=new p(new n(28,28),new m({map:re(e)}));ie.rotation.x=-Math.PI/2,ie.position.y=-.35,d.add(ie);let M=new p(new n(40,24),new w({depthWrite:!1,vertexShader:Xt,fragmentShader:Zt,uniforms:{uTime:{value:0},uInk:{value:S.horizon},uGold:{value:S.sky},uFogColor:{value:b},uFogAmt:{value:0},uFogCharm:Ie}}));M.position.set(0,3,-8),d.add(M);let P=new w({vertexShader:en,fragmentShader:tn,uniforms:{uHeight:{value:null},uScene:{value:j.texture},uTexel:{value:new N(1/256,1/256)},uResolution:{value:new N(l.x,l.y)},uDisplace:{value:.42},uNormalStrength:{value:22},uRefractStrength:{value:.06},uChromaScale:{value:1},uNormalMatrix:{value:new ae},uLightDir:{value:S.sunDir},uInk:{value:new R(`#2A2218`)},uGold:{value:new R(`#B89968`)},uVector:Ae,uVecWater:{value:new R(`#1fb8d8`)},uVecTint:{value:je}}}),oe=new p(new n(28,28,255,255),P);oe.rotation.x=-Math.PI/2,oe.updateMatrixWorld(!0),P.uniforms.uNormalMatrix.value.getNormalMatrix(oe.matrixWorld),d.add(oe);let F={value:0},ce=Pt({windowGlow:F}),I=rt({seed:r,profileIndex:i,landmarkFactory:ce,windowGlow:F});d.add(I.group);let le=ht({plinthTop:.3,extent:I.extent,profile:I.state.profile});d.add(le.group);let ue=St({extent:I.extent,waterSize:28,plinthTop:.3});d.add(ue.group),A.uniforms.uWakeDrops.value=ue.wakeDrops;let z=It({extent:I.extent});d.add(z.group),A.uniforms.uRainDrops.value=z.rainDrops;let de=Rt({extent:I.extent});d.add(de.group);let fe=Yt();d.add(fe.group),I.group.remove(I.key),d.add(I.key),I.key.castShadow=!0,I.key.shadow.mapSize.set(2048,2048),I.key.shadow.bias=-18e-5,I.key.shadow.normalBias=.028,d.add(I.key.target);function B(){let e=I.key.shadow.camera,t=I.extent+4.5;e.left=-t,e.right=t,e.top=t,e.bottom=-t,e.near=1,e.far=48,e.updateProjectionMatrix(),a.shadowMap.needsUpdate=!0}B();let pe=new ee(l.x,l.y),me=new L(l.x,l.y,{minFilter:h,magFilter:h,depthBuffer:!0,stencilBuffer:!1,depthTexture:pe}),ge=new L(l.x,l.y,{minFilter:h,magFilter:h,depthBuffer:!1,stencilBuffer:!1}),_e=new L(l.x,l.y,{minFilter:h,magFilter:h,depthBuffer:!1,stencilBuffer:!1}),ve=new L(l.x,l.y,{minFilter:h,magFilter:h,depthBuffer:!1,stencilBuffer:!1}),V=new T,ye=new f(-1,1,1,-1,0,1),be=new p(new n(2,2));V.add(be);let H=new w({vertexShader:Qt,fragmentShader:nn,uniforms:{uScene:{value:me.texture},uTime:{value:0},uResolution:{value:new N(l.x,l.y)},uGrain:{value:1},uChroma:{value:1},uExposure:{value:1}}}),xe=e=>{let t=e.map(e=>new R(e));for(;t.length<8;)t.push(new R(0,0,0));return t},Se=[`night`,`dawn`,`noon`,`dusk`],Ce={inkgold:Se.map(e=>xe(fn[e])),terminal:Se.map(e=>xe(pn[e]))},we=new w({vertexShader:Qt,fragmentShader:rn,uniforms:{uScene:{value:ge.texture},uResolution:{value:new N(l.x,l.y)},uPixelSize:{value:dn},uPalette:{value:Ce.inkgold[2]},uPaletteB:{value:Ce.inkgold[2]},uPaletteBlend:{value:0},uPaletteSize:{value:5}}}),U=new w({vertexShader:Qt,fragmentShader:sn,uniforms:{uScene:{value:ge.texture},uResolution:{value:new N(l.x,l.y)},uGridWidth:{value:160},uDither:{value:.55},uPalette:{value:un(cn[`8-bit`].palette)},uPaletteSize:{value:1},uUsePalette:{value:1}}}),Te={};for(let e of ln)Te[e]=cn[e].palette?un(cn[e].palette):null;let Ee=new w({vertexShader:Qt,fragmentShader:an,uniforms:{uScene:{value:ge.texture},uDepth:{value:pe},uResolution:{value:new N(l.x,l.y)},uBands:{value:4},uToonGain:{value:1.7},uToonGamma:{value:.6},uToonFloor:{value:S.toonFloor},uOutline:{value:S.outline},uNear:{value:.1},uFar:{value:100},uIsPerspective:{value:1}}}),De=new w({vertexShader:Qt,fragmentShader:on,uniforms:{uToon:{value:_e.texture},uPixel:{value:ve.texture},uBlend:{value:0}}});function W(e,t){be.material=e,a.setRenderTarget(t),a.render(V,ye)}function Oe(){x.setViewport(window.innerWidth,window.innerHeight),a.setSize(window.innerWidth,window.innerHeight);let e=a.getDrawingBufferSize(new N);return j.setSize(e.x,e.y),me.setSize(e.x,e.y),ge.setSize(e.x,e.y),_e.setSize(e.x,e.y),ve.setSize(e.x,e.y),P.uniforms.uResolution.value.set(e.x,e.y),H.uniforms.uResolution.value.set(e.x,e.y),we.uniforms.uResolution.value.set(e.x,e.y),U.uniforms.uResolution.value.set(e.x,e.y),Ee.uniforms.uResolution.value.set(e.x,e.y),e}let G=3,K=!1,Re=!1,ze=`native`,Be=.3,Ve=.46,He=[`native`,...ln],Ue={"16-bit":`16-bit`,"8-bit":`8-bit`,gb:`Game Boy`,modern:`Modern`,native:`Pixel`,"1-bit":`1-bit`};typeof window<`u`&&(window.__mode=G,window.__vector=K,window.__era=ze);let We=0,q=performance.now(),Ge=typeof window<`u`&&new URLSearchParams(window.location.search).has(`perf`);typeof window<`u`&&(window.__perf=Ge),Ge&&(a.info.autoReset=!1);let J=null;typeof window<`u`&&(window.__loaded=!1);let Ke=0,qe=new O(1,1,1),Je=!1;function Ye(e){let t=Re?Ce.terminal:Ce.inkgold,n=e%1*4,r=Math.floor(n)%4;we.uniforms.uPalette.value=t[r],we.uniforms.uPaletteB.value=t[(r+1)%4],we.uniforms.uPaletteBlend.value=n-Math.floor(n)}function Y(e){let t=cn[e];t&&(U.uniforms.uGridWidth.value=t.gridWidth,U.uniforms.uDither.value=t.dither,U.uniforms.uUsePalette.value=+!!t.palette,t.palette&&(U.uniforms.uPalette.value=Te[e],U.uniforms.uPaletteSize.value=t.palette.length))}function Xe(){ze!==`native`&&Y(ze)}let Ze=()=>ze===`native`?we:U;function Qe(e,t){oe.visible=!1,a.setRenderTarget(j),a.render(d,e),oe.visible=!0,a.setRenderTarget(t),a.render(d,e)}function $e(e,t){if(oe.visible=!1,a.setRenderTarget(j),a.render(d,x.camera),oe.visible=!0,G===1)a.setRenderTarget(t),a.render(d,x.camera);else if(a.setRenderTarget(me),a.render(d,x.camera),G===2)H.uniforms.uGrain.value=1,H.uniforms.uChroma.value=1,W(H,t);else{H.uniforms.uGrain.value=0,H.uniforms.uChroma.value=0,W(H,ge);let n=x.camera;Ee.uniforms.uNear.value=n.near,Ee.uniforms.uFar.value=n.far,Ee.uniforms.uIsPerspective.value=+!!n.isPerspectiveCamera;let r=e.era?(Y(e.era),U):Ze();e.kind===`pixel`?(W(r,t),window.__style=`pixel`):e.kind===`toon`?(W(Ee,t),window.__style=`toon`):(W(Ee,_e),W(r,ve),De.uniforms.uBlend.value=e.blend,W(De,t),window.__style=`blend`)}}function et(){let e=tt(),n=e.kind===`toon`?1:e.kind===`blend`?1-e.blend:0;return P.uniforms.uChromaScale.value=t.lerp(1,.5,n),e}function tt(){if(G===1||G===2)return{kind:`none`};if(G===7)return{kind:`pixel`};if(G===8)return{kind:`toon`};let e=x.styleT;return window.__styleT=e,e<=Be?{kind:`toon`}:e>=Ve?{kind:`pixel`,era:e<.62?`16-bit`:e<.8?`8-bit`:`gb`}:{kind:`blend`,blend:t.smoothstep(e,Be,Ve),era:`16-bit`}}function nt(e){return G===1||G===2?``:K&&G!==7&&G!==8?`Vector`:e.kind===`toon`?`Toon`:e.kind===`pixel`?Ue[e.era||ze]||`Pixel`:e.kind===`blend`?`Toon → `+(Ue[e.era]||`Pixel`):``}function it(e,n,{shadowsOn:r=!0,seasonTarget:i=0}={}){if(Ge){let e=a.info;J={calls:e.render.calls,tris:e.render.triangles,programs:e.programs?e.programs.length:0,geo:e.memory.geometries,tex:e.memory.textures},e.reset()}M.material.uniforms.uTime.value=n,H.uniforms.uTime.value=n,S.update(e),I.key.position.copy(S.sunDir).multiplyScalar(24),I.key.color.copy(S.sunColor),I.key.intensity=S.sunIntensity,I.fill.color.copy(S.hemiSky),I.fill.groundColor.copy(S.hemiGround),F.value=S.windowGlow;let o=z.overcast;I.key.intensity*=1-.5*o,I.key.color.lerp(g,.45*o),I.fill.intensity=1+.7*o;let s=t.smoothstep(S.sunDir.y,.06,.34),c=t.lerp(.28,1,1-S.windowGlow),l=r?s*c:0;I.key.shadow.intensity=.72*l,Me.value=.52*l,(r&&!Je||qe.distanceToSquared(S.sunDir)>2e-5)&&(a.shadowMap.needsUpdate=!0,qe.copy(S.sunDir)),Je=r;let u=1-S.windowGlow;je.setRGB(t.lerp(.46,1,u),t.lerp(.52,1,u),t.lerp(.74,1,u)),H.uniforms.uExposure.value=S.exposure,Ee.uniforms.uToonGain.value=S.toonGain,a.setClearColor(S.horizon,1),Ye(S.t),window.__t=S.t,le.update(e,n,S),I.update(n),ue.update(e,n,S),A.uniforms.uWakeCount.value=ue.wakeCount,z.update(e,n),A.uniforms.uRainCount.value=z.rainDropCount;let f=z.fog*(1-u);d.fog.density=z.fog*_,b.copy(S.horizon).lerp(v,.85*f),d.fog.color.copy(b),a.setClearColor(b,1),Ie.value=z.fog,M.material.uniforms.uFogAmt.value=.7*z.fog,Ne.value=z.snow,Pe.value=z.cloud*.55,Fe.x+=e*.018,Fe.y+=e*.009,Le.value+=(i-Le.value)*Math.min(1,e*1.5),de.update(e,n,S,z);let p=tt(),m=p.kind===`pixel`||p.kind===`blend`?`pixel`:K||p.kind===`toon`?`charm`:`realistic`;fe.update(e,n,S,z,m),We++;let h=performance.now();h-q>=1e3&&(window.__fps=We,Ge&&J&&(console.log(`[perf] ${We} fps · ~${(1e3/Math.max(1,We)).toFixed(2)} ms · calls ${J.calls} · tris ${J.tris} · programs ${J.programs} · geo ${J.geo} · tex ${J.tex}`),window.__perfInfo={fps:We,...J}),We=0,q=h);let[y,x,C]=E;if(A.uniforms.uPrev.value=y.texture,A.uniforms.uCurr.value=x.texture,a.setRenderTarget(C),a.render(D,te),E=[x,C,y],P.uniforms.uHeight.value=E[1].texture,Ke<2&&typeof document<`u`&&++Ke===2){let e=document.getElementById(`lgr-loader`);e&&e.classList.add(`gone`),window.__loaded=!0}}function at(e){G=e,window.__mode=G}function ot(){return K=!K,Ae.value=+!!K,window.__vector=K,K}function st(e){return K=!!e,Ae.value=+!!K,window.__vector=K,K}function X(){return ze=He[(He.indexOf(ze)+1)%He.length],window.__era=ze,Xe(),ze}function ct(){return Re=!Re,Re}return{updateWorld:it,decideStyle:et,renderCityPipeline:$e,renderCityBeautyTo:Qe,styleHintName:nt,setPostMode:at,toggleVector:ot,setVector:st,cycleEra:X,togglePalette:ct,get mode(){return G},get vector(){return K},get sceneEra(){return ze},renderer:a,drawBuffer:l,scene:d,rig:x,sunRig:S,SIM:256,targets:E,simScene:D,simCamera:te,simMaterial:A,grabRT:j,card:ie,backdrop:M,WATER_SIZE:28,water:oe,waterMaterial:P,windowGlow:F,landmarkFactory:ce,city:I,cityLife:le,waterLife:ue,weatherRig:z,clouds:de,fitShadowFrustum:B,SHADOW_DIST:24,sceneDepth:pe,sceneRT:me,filmicRT:ge,toonRT:_e,pixelRT:ve,postScene:V,postCamera:ye,postQuad:be,filmicMaterial:H,pixelMaterial:we,pixelkitMaterial:U,toonMaterial:Ee,mixMaterial:De,PALCACHE:Ce,ERA_TEX:Te,runPass:W,OVERCAST_GREY:g,FOG_DENSITY:_,FOG_NIGHT_TINT:v,_fogColor:b,resize:Oe}}var hn=`lgr_hints_`,gn=!1;function _n(){if(gn||typeof document>`u`)return;gn=!0;let e=document.createElement(`style`);e.textContent=`
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
  }`,document.head.appendChild(e)}function vn({key:e,title:t=`Tips`,tips:n=[],force:r=!1}={}){let i={key:e,shown:!1,dismissed:!1,seen:!1};if(typeof window<`u`&&(window.__hints=i),typeof document>`u`||!e)return{dismiss(){},el:null};let a=hn+e,o=!1;try{o=localStorage.getItem(a)===`1`}catch{}if(o&&!r)return i.seen=!0,{dismiss(){},el:null};_n();let s=!!(window.matchMedia&&window.matchMedia(`(prefers-reduced-motion: reduce)`).matches),c=document.createElement(`div`);c.className=`lgr-hints`,c.innerHTML=`<div class="lgr-hints-card">
    <div class="lgr-hints-h">${t}</div>
    <ul>${n.map(e=>`<li>${e}</li>`).join(``)}</ul>
    <button class="lgr-hints-ok">Got it</button>
    <button class="lgr-hints-x" title="Dismiss (Esc)" aria-label="Dismiss">✕</button>
  </div>`,document.body.appendChild(c),i.shown=!0,s?c.classList.add(`on`):requestAnimationFrame(()=>c.classList.add(`on`));let l=!1;function u(e=!0){if(!l){if(l=!0,e)try{localStorage.setItem(a,`1`)}catch{}i.dismissed=!0,window.removeEventListener(`keydown`,d),c.classList.remove(`on`),setTimeout(()=>c.remove(),s?0:300)}}function d(e){e.key===`Escape`&&u(!0)}return window.addEventListener(`keydown`,d),c.querySelector(`.lgr-hints-ok`).addEventListener(`click`,()=>{navigator.vibrate?.(10),u(!0)}),c.querySelector(`.lgr-hints-x`).addEventListener(`click`,()=>{navigator.vibrate?.(10),u(!0)}),{dismiss:u,el:c}}var yn=null;function bn(){if(yn)return yn;let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return n.addColorStop(0,`rgba(0,0,0,0.60)`),n.addColorStop(.55,`rgba(0,0,0,0.32)`),n.addColorStop(1,`rgba(0,0,0,0.0)`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,128/2,0,Math.PI*2),t.fill(),yn=new k(e),yn.colorSpace=u,yn}function xn({w:e=.6,d:t=.6,x:r=0,y:i=.002,z:a=0,opacity:o=.5,rotation:s=0}={}){let c=new p(new n(e,t),new m({map:bn(),transparent:!0,opacity:o,depthWrite:!1,toneMapped:!1}));return c.rotation.x=-Math.PI/2,c.rotation.z=s,c.position.set(r,i,a),c.renderOrder=-1,c.raycast=()=>{},c}function Sn({yawLimit:e=80,pitchUp:t=32,pitchDown:n=20,sensitivity:r=.16,keySpeed:i=70,damp:a=9}={}){let o=Math.PI/180,s=(e,t,n)=>e<t?t:e>n?n:e,c=0,l=0,u=0,d=0;return{addDrag(i,a){u=s(u-i*r,-e,e),d=s(d-a*r,-n,t)},addKeys(r,{left:a,right:o,up:c,down:l}){let f=i*r;a&&(u=s(u+f,-e,e)),o&&(u=s(u-f,-e,e)),c&&(d=s(d+f,-n,t)),l&&(d=s(d-f,-n,t))},recenter(){u=0,d=0},update(e){let t=1-Math.exp(-a*e);c+=(u-c)*t,l+=(d-l)*t},get yaw(){return c*o},get pitch(){return l*o},get active(){return Math.abs(c)>.05||Math.abs(l)>.05}}}var Cn=null;function wn(){if(Cn)return Cn;let e=document.createElement(`canvas`);e.width=e.height=256;let t=e.getContext(`2d`),n=t.createRadialGradient(256/2,256/2,256*.32,256/2,256/2,256*.72);return n.addColorStop(0,`rgba(0,0,0,0)`),n.addColorStop(1,`rgba(0,0,0,1)`),t.fillStyle=n,t.fillRect(0,0,256,256),Cn=new k(e),Cn.colorSpace=u,Cn}function Tn({strength:e=.55,dist:r=.5}={}){let i=new p(new n(1,1),new m({map:wn(),transparent:!0,opacity:e,depthTest:!1,depthWrite:!1,toneMapped:!1}));i.renderOrder=9999,i.raycast=()=>{},i.frustumCulled=!1;let a=new O;return i.fit=e=>{e.getWorldDirection(a),i.position.copy(e.position).addScaledVector(a,r),i.quaternion.copy(e.quaternion);let n=2*Math.tan(t.degToRad(e.fov)*.5)*r*1.05;i.scale.set(n*e.aspect,n,1)},i}var En=``+new URL(`office-smooth-DEluvd7o.png`,import.meta.url).href,Dn=``+new URL(`office-charm-D7t90SkH.png`,import.meta.url).href;function On(){let e=document.createElement(`canvas`);e.width=e.height=256;let t=e.getContext(`2d`);t.fillStyle=`#6e4a2c`,t.fillRect(0,0,256,256);for(let e=0;e<150;e++){let e=Math.random()*256,n=.7+Math.random()*.7;t.strokeStyle=`rgba(${Math.round(110*n)},${Math.round(74*n)},${Math.round(44*n)},${.16+Math.random()*.28})`,t.lineWidth=.5+Math.random()*1.6,t.beginPath(),t.moveTo(e,0);for(let n=0;n<=256;n+=14)t.lineTo(e+Math.sin(n*.05+e)*3,n);t.stroke()}t.strokeStyle=`rgba(30,18,8,0.5)`,t.lineWidth=2;for(let e of[256*.34,256*.67])t.beginPath(),t.moveTo(0,e),t.lineTo(256,e),t.stroke();let n=new k(e);return n.colorSpace=u,n.wrapS=n.wrapT=le,n}function Q(e,t,n,r,{rough:i=.62,metal:a=0,x:o=0,y:s=0,z:c=0,emissive:l=null,emissiveIntensity:u=1,map:d=null,mapRepeat:f=null}={}){let m=d;d&&f&&(m=d.clone(),m.needsUpdate=!0,m.wrapS=m.wrapT=le,m.repeat.set(f[0],f[1]));let h=new p(new D(e,t,n),new g({color:m?`#ffffff`:r,roughness:i,metalness:a,...m?{map:m}:{},...l?{emissive:l,emissiveIntensity:u}:{}}));return h.position.set(o,s,c),h}function kn({tier:i=`corner`,layout:a=`straight-on`}={}){let o=new T,s=new ve(43,1,.1,100),c=new O(0,1.62,4.35),l=new O(0,1.12,-1);s.position.copy(c),s.lookAt(l);let d=Sn({yawLimit:80,pitchUp:34,pitchDown:20}),f=new _e(0,0,0,`YXZ`),h=new C,_=new r;o.add(_);let v=new r,y=new r,x=new r,w=new r,E=new r;_.add(v,y,x,w,E);let ee=[],te=`#4a3322`,k=`#3a2618`,ne=`#5b3d27`,re=`#6e4a30`,M=`#5a5650`,N=On();v.add(Q(11,.2,11,`#3c2a1c`,{rough:.5,y:-.1,map:N,mapRepeat:[5,5]})),v.add(Q(11,.2,11,`#3a2a1d`,{rough:.9,y:3,map:N,mapRepeat:[4,4]}));for(let e of[-2.4,0,2.4])v.add(Q(.18,.16,7.4,k,{rough:.7,x:e,y:2.9,z:0,map:N,mapRepeat:[1,4]}));for(let e of[-2,.4])v.add(Q(7.4,.16,.18,k,{rough:.7,x:0,y:2.88,z:e,map:N,mapRepeat:[4,1]}));function ae(e){let t=new r;t.add(Q(.2,3.2,8,te,{rough:.7,x:e*3.6,y:1.5,z:0,map:N,mapRepeat:[3,1.4]}));let i=e*3.45;t.add(Q(.06,.22,8,k,{x:i,y:.13,z:0})),t.add(Q(.08,.16,8,k,{x:i,y:2.84,z:0})),t.add(Q(.05,.05,8,k,{x:i,y:1,z:0}));for(let e of[-2.6,-1.3,1.3,2.6])t.add(Q(.05,1.6,.06,k,{x:i,y:1.95,z:e}));for(let e of[-2.6,-1.3,1.3,2.6])t.add(Q(.05,.7,.06,k,{x:i,y:.6,z:e}));let a=new p(new n(1.5,1),new g({map:Ln(e),roughness:.8}));a.position.set(e*3.49,1.7,.4),a.rotation.y=-e*Math.PI/2,t.add(Q(.06,1.18,1.68,`#2a1c10`,{x:e*3.52,y:1.7,z:.4}),a);let o=new p(new n(1,1.3),new g({map:Ln(-e),roughness:.8}));o.position.set(e*3.49,1.78,-2),o.rotation.y=-e*Math.PI/2,t.add(Q(.06,1.46,1.16,`#2a1c10`,{x:e*3.52,y:1.78,z:-2}),o),t.add(Q(.12,.3,.16,`#2a1c10`,{x:e*3.4,y:2.2,z:2.2}));let s=new j(new B({map:In(),color:`#ffcf8a`,transparent:!0,opacity:.5,depthWrite:!1,blending:2}));return s.scale.set(.6,.75,1),s.position.set(e*3.32,2.34,2.2),s.raycast=()=>{},t.add(s),t}v.add(ae(-1),ae(1));let P=new r;P.add(Q(.3,1.9,1.5,ne,{rough:.5,y:.95}));for(let e of[.4,.95,1.5])P.add(Q(.3,.04,1.46,`#3a2c1e`,{y:e}));let oe=[`#7a3a2a`,`#2a4a6a`,`#b08a3a`,`#3a5a3a`,`#6a2a4a`,`#8a5a2a`];for(let e of[.6,1.15,1.7])for(let t=0;t<7;t++)P.add(Q(.18,.3,.11,oe[(t+Math.round(e))%oe.length],{x:.02,y:e-.06,z:-.6+t*.17}));P.position.set(-3.34,0,-1.9),v.add(P),v.add(xn({w:1,d:1.8,x:-3.2,y:.02,z:-1.9,opacity:.4}));let se=new r;se.add(Q(.5,.1,.5,`#4a3526`,{rough:.7,y:.45})),se.add(Q(.5,.55,.08,`#4a3526`,{rough:.7,y:.72,z:-.21}));for(let[e,t]of[[-.2,-.2],[.2,-.2],[-.2,.2],[.2,.2]])se.add(Q(.05,.45,.05,`#2a1c10`,{x:e,y:.22,z:t}));se.position.set(2.7,0,2.6),se.rotation.y=-.5,v.add(se),v.add(xn({w:.7,d:.7,x:2.7,y:.02,z:2.6,opacity:.42}));let I=new n(3,2.5),L=new n(3,2.5),le=new m({color:`#ffffff`,toneMapped:!1}),ue=new m({color:`#ffffff`,toneMapped:!1}),de=1.55,fe=new p(I,le);fe.position.set(-1.06,de,-2.64),fe.rotation.y=Math.PI/4;let pe=new p(L,ue);pe.position.set(1.06,de,-2.64),pe.rotation.y=-Math.PI/4;let me=new m({color:`#ffffff`,toneMapped:!1}),he=new p(new n(5.4,2.6),me);he.position.set(0,de,-3.5500000000000003),he.visible=!1,x.add(fe,pe,he);let ge=new r;ge.add(Q(.08,2.7,.08,k,{x:0,y:de,z:-2.2}));for(let[e,t,n]of[[-1.06,-2.64,Math.PI/4],[1.06,-2.64,-Math.PI/4]]){let i=new r;i.add(Q(3.05,.09,.09,k,{y:1.3})),i.add(Q(3.05,.09,.09,k,{y:-1.25})),i.add(Q(.09,2.6,.09,k,{x:-1.5})),i.position.set(e,de,t),i.rotation.y=n,ge.add(i)}ge.add(Q(5.4,.5,.3,ne,{x:0,y:.25,z:-2.1500000000000004})),v.add(ge);let V=new r;V.add(Q(11,3.2,.2,te,{rough:.7,x:0,y:1.5,z:-3.75,map:N,mapRepeat:[4,1.4]})),V.add(Q(5.8,.14,.12,k,{x:0,y:2.9000000000000004,z:-3.5})),V.add(Q(5.8,.14,.12,k,{x:0,y:de-1.35,z:-3.5})),V.add(Q(.14,2.84,.12,k,{x:-2.8,y:de,z:-3.5})),V.add(Q(.14,2.84,.12,k,{x:2.8,y:de,z:-3.5})),V.add(Q(.09,2.6,.09,k,{x:0,y:de,z:-3.49})),V.add(Q(5.4,.5,.3,ne,{x:0,y:.25,z:-3.35}));let ye=new r;ye.add(Q(2.4,.9,.55,ne,{rough:.42,y:.45,z:0})),ye.add(Q(2.46,.06,.58,re,{rough:.3,y:.91,z:0}));for(let e of[-.62,0,.62])ye.add(Q(.66,.72,.03,`#4a3120`,{x:e,y:.45,z:.285}));for(let e of[-.62,0,.62])ye.add(Q(.05,.04,.05,`#caa15a`,{x:e+.2,y:.45,z:.31,metal:.6}));let be=[`#7a3a2a`,`#2a4a6a`,`#b08a3a`,`#3a5a3a`];for(let e=0;e<4;e++)ye.add(Q(.1,.26+e%2*.05,.2,be[e],{x:-.95+e*.13,y:1.07,z:-.06}));ye.add(Q(.04,.34,.42,`#241a12`,{x:.7,y:1.12,z:-.02})),ye.position.set(-3.9,0,-3.25),V.add(ye),V.add(xn({w:2.8,d:.95,x:-3.9,y:.02,z:-3.25,opacity:.45}));for(let[e,t]of[[-3.55,-1],[3.55,1]]){let i=new r,a=new p(new n(.78,.98),new g({map:Ln(t),roughness:.82}));a.position.z=.05,i.add(Q(.06,1.12,.92,`#241a10`,{}),a),i.position.set(e,1.45,-3.5700000000000003),V.add(i)}for(let e of[-3.55,3.55]){V.add(Q(.16,.32,.13,`#2a1c10`,{x:e,y:2.35,z:-3.5}));let t=new j(new B({map:In(),color:`#ffcf8a`,transparent:!0,opacity:.5,depthWrite:!1,blending:2}));t.scale.set(.55,.7,1),t.position.set(e,2.5,-3.42),t.raycast=()=>{},V.add(t)}V.visible=!1,v.add(V),v.add(Q(.4,.06,.4,`#1a130c`,{y:2.94,z:1.3}));let H=new p(new A(.16,20),new m({color:`#ffe6b0`,toneMapped:!1}));H.position.set(0,2.9,1.3),H.rotation.x=Math.PI/2,v.add(H);for(let[e,t]of[[-1.6,-1],[1.6,-1],[-1.6,-2.6],[1.6,-2.6],[0,-2.6]]){v.add(Q(.28,.05,.28,`#1a130c`,{y:2.95,x:e,z:t}));let n=new p(new A(.1,16),new m({color:`#ffe6b0`,toneMapped:!1}));n.position.set(e,2.915,t),n.rotation.x=Math.PI/2,n.raycast=()=>{},v.add(n)}v.add(jn(ee,{x:-3.46,y:2.15,z:.2,ry:Math.PI/2,face:`#efe2c8`,rim:`#2a1c10`})),v.add(Q(3.4,.03,2.4,`#3a1410`,{rough:.98,x:0,y:.012,z:1.95})),v.add(Q(3,.04,2,`#6e2a26`,{rough:.96,x:0,y:.02,z:1.95}));let xe=new r;xe.add(Q(.32,.32,.32,`#7a4a2a`,{rough:.8,y:.16}));for(let e=0;e<6;e++){let t=Q(.05,.55,.13,`#356a32`,{rough:.7,y:.32});t.geometry.translate(0,.27,0),t.rotation.z=(e/6-.5)*1.1,t.rotation.x=Math.sin(e*1.3)*.22,xe.add(t)}xe.position.set(2.7,0,.4),v.add(xe),v.add(xn({w:.7,d:.7,x:2.7,y:.03,z:.4,opacity:.45})),y.add(Q(11,.2,11,`#403d38`,{rough:.85,y:-.1})),y.add(Q(11,.2,11,`#1c1a17`,{rough:.95,y:2.8})),y.add(Q(7,3,.2,M,{rough:.92,x:0,y:1.4,z:-2.9})),y.add(Q(.2,3,6,M,{rough:.92,x:-3.2,y:1.4,z:-.2})),y.add(Q(.2,3,6,M,{rough:.92,x:3.2,y:1.4,z:-.2}));for(let e of[-1.6,-.4]){let t=new p(new ie(.07,.07,6,10),new g({color:`#6b6258`,roughness:.6,metalness:.4}));t.rotation.z=Math.PI/2,t.position.set(0,2.62,e),y.add(t)}let Se=new m({color:`#ffffff`,toneMapped:!1}),Ce=new p(new n(1.9,1.2),Se);Ce.position.set(0,1.5,-2.79),y.add(Ce),y.add(Q(2.06,1.36,.06,`#241a12`,{x:0,y:1.5,z:-2.83})),y.add(Q(.04,.34,.04,`#1a1410`,{x:-.1,y:2.45,z:-.4}));let we=new p(new A(.1,16),new m({color:`#ffdb8a`,toneMapped:!1}));we.position.set(-.1,2.26,-.4),we.rotation.x=Math.PI/2,y.add(we);let U=new r;U.add(Q(1.3,.05,.32,`#3a2c1e`,{x:0,y:0,z:0}));let Te=[`#7a3a2a`,`#2a4a6a`,`#b08a3a`,`#3a5a3a`,`#6a2a4a`];for(let e=0;e<8;e++)U.add(Q(.12,.34,.24,Te[e%Te.length],{x:-.55+e*.14,y:.2,z:0}));U.position.set(-2.3,1.5,-2.66),y.add(U);let Ee=new r;Ee.add(Q(.34,.34,.34,`#7a4a2a`,{y:.17}));let De=new r;for(let e=0;e<6;e++){let t=Q(.05,.5,.14,`#3a7a3a`,{rough:.7});t.geometry.translate(0,.25,0),t.rotation.z=(e/6-.5)*1.2,t.rotation.x=Math.sin(e)*.25,De.add(t)}De.position.y=.34,Ee.add(De),Ee.position.set(2.45,0,-1.4),y.add(Ee),y.add(jn(ee,{x:1.9,y:2.1,z:-2.78,ry:0,face:`#d8d2c4`,rim:`#1a130c`}));let W=new r;W.add(Q(3.4,.12,1.5,re,{rough:.32,y:.86,z:1.5,map:N,mapRepeat:[3,1.4]})),W.add(Q(3.2,.78,1.36,ne,{y:.46,z:1.5,map:N,mapRepeat:[3,1]}));for(let e of[.66,.4,.14])W.add(Q(.9,.2,.04,`#4a3120`,{x:1.05,y:e,z:2.2}));W.add(Q(.12,.04,.04,`#caa15a`,{x:1.05,y:.66,z:2.23,metal:.6}));let Oe=new p(new ie(.05,.045,.1,16),new g({color:`#d8cbb4`,roughness:.6}));Oe.position.set(-.55,.97,1.95);let G=new p(new z(.035,.012,8,14),new g({color:`#d8cbb4`,roughness:.6}));G.position.set(-.61,.97,1.95),G.rotation.y=Math.PI/2,W.add(Oe,G);let K=new j(new B({map:In(),color:`#fff4e0`,transparent:!0,opacity:0,depthWrite:!1,blending:2}));K.scale.set(.12,.18,1),K.position.set(-.55,1.05,1.95),K.raycast=()=>{},W.add(K),W.add(Q(.26,.03,.34,`#efe7d4`,{rough:.85,x:.5,y:.935,z:1.9})),_.add(W);let ke=new r;ke.add(Q(.06,.5,.06,`#2a1c10`,{x:-1.15,y:1.15,z:1.6}));let Ae=new p(new F(.22,.26,16,1,!0),new g({color:`#c2802e`,roughness:.5,side:2,emissive:`#3a2208`,emissiveIntensity:.6}));Ae.position.set(-1.15,1.42,1.6),ke.add(Ae);let je=new S(`#ffb15a`,7,7,1.8);je.position.set(-1.15,1.34,1.6),ke.add(je);let Me=new j(new B({map:In(),color:`#ffcf8a`,transparent:!0,opacity:.55,depthWrite:!1,blending:2}));Me.scale.set(.85,.85,1),Me.position.set(-1.15,1.35,1.6),Me.raycast=()=>{},ke.add(Me),_.add(ke);let Ne=new r;Ne.add(Q(.62,.03,.42,`#1c1c20`,{y:.93,z:1.5,metal:.4,rough:.4}));let Pe=new p(new D(.62,.4,.025),new g({color:`#0a0c10`,emissive:`#2a4a6a`,emissiveIntensity:.7,roughness:.3}));Pe.position.set(0,1.14,1.31),Pe.rotation.x=-.32,Ne.add(Pe),Ne.userData.role=`laptop`,_.add(Ne);let Fe=new r;Fe.add(Q(.26,.07,.34,`#15151a`,{x:1,y:.93,z:1.5}));let Ie=Q(.3,.06,.08,`#101015`,{x:1,y:1,z:1.34,emissive:`#234a6a`,emissiveIntensity:.4});Fe.add(Ie),Fe.userData.role=`phone`,_.add(Fe);let Le=new b(`#8a6a42`,`#1c130a`,.78);o.add(Le);let Re=new e(`#ffd9a0`,9,9,.7,.5,1.2);Re.position.set(0,2.95,1.3),Re.target.position.set(0,.86,1.5),o.add(Re,Re.target);let ze=Mn(!1),Be=Mn(!0),Ve=.62,He=1.32,Ue=1.22,We=1.78,q=new j(new B({map:ze,transparent:!0,depthWrite:!1}));q.scale.set(Ve,Ve,1),q.position.set(He,Ue,We),q.userData.role=`cat`,_.add(q);let Ge=new j(new B({map:Pn(),transparent:!0,depthWrite:!1,opacity:0}));Ge.scale.set(.3,.3,1),Ge.raycast=()=>{},_.add(Ge);let J=0;function Ke(){J=1.3}let qe=.62,Je=.42,Ye=.34,Y=new r;Y.position.set(-.78,1.06,1.95),Y.add(Q(qe,.05,Ye,`#3a3026`,{y:-.19}));let Xe=new p(new D(qe-.04,Je-.08,Ye-.04),new g({color:`#1f9fc0`,transparent:!0,opacity:.26,roughness:.1,emissive:`#0a3a4a`,emissiveIntensity:.4,depthWrite:!1}));Xe.position.y=.02,Y.add(Xe);for(let e of[-1,1])for(let t of[-1,1])Y.add(Q(.03,Je,.03,`#20262c`,{x:e*(qe/2-.015),z:t*(Ye/2-.015),metal:.5}));let Ze=new p(new D(qe,Je,Ye),new m({visible:!1}));Ze.userData.role=`tank`,Y.add(Ze);let Qe=new S(`#5fd8ff`,0,3,2);Y.add(Qe);let $e=[Fn(`#e8a23c`),Fn(`#d85a6a`),Fn(`#6cc0e0`)],et=[],tt=Je/2-.12;for(let e=0;e<3;e++){let t=new j(new B({map:$e[e],transparent:!0,depthWrite:!1})),n=.15-e*.015;t.userData={sz:n,sp:.6+e*.22,ph:e*2.1,ax:.21*(.7+.1*e),ay:tt,az:.09000000000000001,prevx:0},t.scale.set(n,n,1),et.push(t),Y.add(t)}let nt=In(),rt=[];for(let e=0;e<5;e++){let t=new j(new B({map:nt,color:`#cfeffb`,transparent:!0,opacity:.5,depthWrite:!1}));t.userData={ph:e/5,sp:.16+Math.random()*.06,x:-.1+e%3*.07},t.scale.setScalar(.03+e%2*.015),t.raycast=()=>{},rt.push(t),Y.add(t)}let it=new j(new B({map:nt,color:`#c8a24a`,transparent:!0,opacity:0,depthWrite:!1}));it.scale.setScalar(.04),it.raycast=()=>{},Y.add(it);let at=0;function ot(){at=3,it.position.set(-.05,tt,0),it.material.opacity=1}_.add(Y);let st=new r;for(let e=0;e<8;e++){let t=new j(new B({map:nt,color:`#ffd9a0`,transparent:!0,opacity:0,depthWrite:!1,blending:2}));t.scale.setScalar(.018),t.userData={ph:e*.9,sp:.1+e%3*.04,r:.1+e%4*.03},t.raycast=()=>{},st.add(t)}st.position.set(-1.15,1.2,1.6),_.add(st);let X=new r,ct=.925;X.add(xn({w:4,d:2,x:0,y:.045,z:1.55,opacity:.5})),X.add(xn({w:.95,d:.62,x:0,y:ct,z:1.42,opacity:.42})),X.add(xn({w:.3,d:.3,x:-.55,y:ct,z:1.95,opacity:.4})),X.add(xn({w:.42,d:.46,x:.5,y:ct,z:1.9,opacity:.35})),X.add(xn({w:.42,d:.46,x:1,y:ct,z:1.5,opacity:.42})),X.add(xn({w:.7,d:.42,x:-.78,y:ct,z:1.95,opacity:.42})),X.add(xn({w:.55,d:.4,x:1.32,y:ct,z:1.78,opacity:.4})),X.add(xn({w:.34,d:.34,x:-1.15,y:ct,z:1.6,opacity:.35})),_.add(X),[W,ke,Ne,Fe,q,Y,st,X].forEach(e=>w.add(e));function lt(e,t,n,r,i,a,o){let s=new p(new D(t,n,r),new m({visible:!1}));s.position.set(i,a,o),s.userData.role=e,E.add(s)}lt(`laptop`,.95,.6,.7,0,1.05,1.4),lt(`phone`,.5,.4,.5,1,.98,1.42),lt(`cat`,.62,.74,.5,He,Ue,We);let ut=An(),dt={smooth:new ce().load(En),charm:new ce().load(Dn)};for(let e of[`smooth`,`charm`]){let t=dt[e];t.colorSpace=u,t.repeat.set(1,.86),t.offset.set(0,.14),t.needsUpdate=!0}let ft=new p(new n(1,1),new m({map:dt.smooth,toneMapped:!1}));ft.position.set(0,1.45,-5),ft.visible=!1,ft.raycast=()=>{},o.add(ft);let pt=Tn({strength:.5});o.add(pt);let mt=`3d`,ht=`painted`;function gt(){let e=Dt===`corner`,t=mt!==`3d`,n=t&&ht===`painted`;v.visible=e&&!t,y.visible=!e&&!t,x.visible=t||e,ft.visible=t,w.visible=!n}function _t(e){return mt=e===`smooth`||e===`charm`?e:`3d`,mt!==`3d`&&(ft.material.map=dt[mt],ft.material.needsUpdate=!0),gt(),mt}function vt(e){return ht=e===`3d`?`3d`:`painted`,gt(),ht}let yt=je.intensity,bt=Pe.material.emissiveIntensity,xt=new R;function St(e,n,r){let i=r?r.windowGlow:0,a=i>.55;q.material.map=a?Be:ze,J>0&&(J=Math.max(0,J-e));let o=J>0?Math.sin((1.3-J)/1.3*Math.PI):0,u=a?.012*Math.sin(n*1.2):.03*Math.sin(n*2.4);q.scale.set(Ve,Ve*(1+u+.12*o),1),q.position.y=Ue+.06*o,Ge.material.opacity=o,Ge.position.set(He,1.72+.5*(1-J/1.3),We),Ge.scale.setScalar(.22+.1*o),at>0&&(at=Math.max(0,at-e),it.position.y=Math.max(-.09,it.position.y-e*.06),it.material.opacity=at>.3?1:at/.3);for(let e of et){let t=e.userData,r=Math.sin(n*t.sp+t.ph)*t.ax,i=Math.sin(n*t.sp*.8+t.ph*1.7)*t.ay*.7,a=Math.cos(n*t.sp*.6+t.ph)*t.az,o=at>0?it.position.x:r,s=at>0?it.position.y:i,c=at>0?it.position.z:a,l=at>0?.05:.1;e.position.x+=(o-e.position.x)*l,e.position.y+=(s-e.position.y)*l,e.position.z+=(c-e.position.z)*l,e.scale.x=(e.position.x>=t.prevx?1:-1)*t.sz,t.prevx=e.position.x}for(let e of rt){let t=(n*e.userData.sp+e.userData.ph)%1;e.position.set(e.userData.x+Math.sin(n*2+e.userData.ph*9)*.015,-.09+2*tt*t,.02),e.material.opacity=.5*Math.sin(t*Math.PI)}Qe.intensity=2.6*i,Xe.material.emissiveIntensity=.4+.9*i,je.intensity=yt*(.97+.03*Math.sin(n*7)*Math.sin(n*2.3)),Pe.material.emissiveIntensity=bt*(.85+.15*Math.sin(n*3.1+1)),Ie.material.emissiveIntensity=.4*(.65+.35*Math.sin(n*2.2)),xt.setRGB(1,.85,.62),st.children.forEach((e,t)=>{let r=e.userData,a=(n*r.sp+r.ph)%1;e.position.set(Math.cos(n*.5+r.ph*5)*r.r,-.15+a*.45,Math.sin(n*.4+r.ph*5)*r.r),e.material.opacity=(.1+.18*i)*Math.sin(a*Math.PI)});let p=n*.4%1;K.position.y=1.04+p*.22,K.position.x=-.55+Math.sin(n*1.5)*.02,K.material.opacity=.26*Math.sin(p*Math.PI),K.scale.set(.1+p*.08,.16+p*.12,1),De.rotation.z=Math.sin(n*.8)*.05,De.rotation.x=Math.sin(n*.6+1)*.04;let m=r?r.t%1:0;for(let e of ee)e.rotation.z=-m*Math.PI*2;if(ut.update(e),ft.visible){let e=s.position.z-ft.position.z,n=2*Math.tan(t.degToRad(s.fov)*.5)*e*1.18;ft.scale.set(n*s.aspect,n,1);let r=.55+.45*(1-i);ft.material.color.setRGB(r,r*.97,r*.92)}s.position.set(c.x+Math.sin(n*.5)*.04,c.y+Math.sin(n*.7)*.02,c.z),s.lookAt(l),d.update(e),f.set(d.pitch,d.yaw,0,`YXZ`),s.quaternion.multiply(h.setFromEuler(f)),pt.fit(s)}function Ct(e,t=e){le.map=e,ue.map=t,le.needsUpdate=!0,ue.needsUpdate=!0}function wt(e){me.map=e,me.needsUpdate=!0}let Tt=`corner`;function Z(e){Tt=e===`straight-on`?`straight-on`:`corner`;let t=Tt===`corner`;return fe.visible=pe.visible=t,he.visible=!t,ge.visible=t,V.visible=!t,Tt}function Et(e){Se.map=e,Se.needsUpdate=!0}let Dt=i;function Ot(e){Dt=e===`basement`?`basement`:`corner`;let t=Dt===`corner`;return gt(),Re.intensity=t?9:3.2,Le.intensity=t?.78:.82,Le.color.set(t?`#6a5238`:`#7a5a34`),Dt}return Ot(Dt),Z(a),{scene:o,camera:s,update:St,setCityTexture:Ct,setStraightCityTexture:wt,setVignetteTexture:Et,setFitout:Ot,setSkin:_t,setProps:vt,setLayout:Z,petCat:Ke,feedFish:ot,look:d,vignette:ut,get interactables(){return mt!==`3d`&&ht===`painted`?E.children:[Ne,Fe,q,Ze]},get tier(){return Dt},get skin(){return mt},get props(){return ht},get layout(){return Tt}}}function An(){let e=new T;e.background=new R(`#7fb0dd`);let r=new f(-1.4,1.4,.9,-.9,0,10);r.position.set(0,0,5);let i=(e,t={})=>new m({color:e,toneMapped:!1,...t}),a=(e,t,r,a,o,s,c)=>{let l=new p(new n(e,t),i(s,c));return l.position.set(r,a,o),l};e.add(a(3.2,.9,.5,-.95,1,`#2a4a30`)),e.add(a(3.2,.7,-.7,-1.05,2,`#1d3724`)),e.add(a(.06,.3,-.95,-.55,3,`#3a2a1a`));let o=new p(new A(.22,18),i(`#234a2a`));o.position.set(-.95,-.32,3),e.add(o),e.add(a(.04,.55,.9,-.55,3,`#20242a`));let s=new p(new A(.1,16),i(`#ffd98a`,{transparent:!0,opacity:0}));s.position.set(.9,-.26,3.1),e.add(s);let c=new p(new A(.16,24),i(`#fff4d8`));e.add(c);let l=[];for(let[t,n]of[[-1,.5],[-.6,.7],[.2,.6],[.7,.72],[1.05,.45],[-.2,.78],[.45,.4]]){let r=new p(new A(.015,8),i(`#ffffff`,{transparent:!0,opacity:0}));r.position.set(t,n,.5),l.push(r),e.add(r)}let u=new R(`#141d33`),d=new R(`#7fb6e0`),h=new R(`#d6824a`),g=new R(`#fff0cc`),_=new R(`#cdd8ef`),v=.34;function y(n){v=(v+n*.04)%1;let r=v*Math.PI*2,i=-Math.cos(r);c.position.set(Math.sin(r)*1.15,i*.66+.06,0);let a=t.smoothstep(i,-.18,.5),o=t.smoothstep(.32,0,Math.abs(i));e.background.copy(u).lerp(d,a).lerp(h,o*.45),c.material.color.copy(i>0?g:_),s.material.opacity=1-a;let f=(1-a)*.85;for(let e of l)e.material.opacity=f}return{scene:e,camera:r,update:y}}function jn(e,{x:t,y:i,z:a,ry:o=0,face:s=`#efe2c8`,rim:c=`#2a1c10`}){let l=new r,u=new p(new A(.2,28),new g({color:c,roughness:.6})),d=new p(new A(.17,28),new g({color:s,roughness:.7}));d.position.z=.01;let f=new p(new n(.018,.14),new g({color:`#1a130c`,roughness:.5}));return f.geometry.translate(0,.05,0),f.position.z=.02,e.push(f),l.add(u,d,f),l.position.set(t,i,a),l.rotation.y=o,l}function Mn(e){let t=document.createElement(`canvas`);t.width=t.height=128;let n=t.getContext(`2d`),r=`#e08a3c`,i=`#b96a26`,a=`#3a2410`;if(n.lineJoin=`round`,e){n.fillStyle=r,n.beginPath(),n.ellipse(64,78,44,26,0,0,7),n.fill(),n.fillStyle=i,n.beginPath(),n.ellipse(64,86,44,16,0,0,7),n.fill(),n.fillStyle=r,n.beginPath(),n.arc(36,70,20,0,7),n.fill(),n.fillStyle=r,Nn(n,24,56,34,44,42,58),Nn(n,40,54,50,44,54,60),n.strokeStyle=i,n.lineWidth=7,n.lineCap=`round`,n.beginPath(),n.moveTo(100,70),n.quadraticCurveTo(112,90,88,96),n.stroke(),n.strokeStyle=a,n.lineWidth=2.5,n.beginPath(),n.arc(30,70,5,.1,Math.PI-.1),n.stroke(),n.strokeStyle=i,n.lineWidth=3;for(let e of[60,74,88])n.beginPath(),n.moveTo(e,58),n.lineTo(e,70),n.stroke()}else{n.fillStyle=r,n.beginPath(),n.ellipse(64,86,30,34,0,0,7),n.fill(),n.fillStyle=`#f3c98a`,n.beginPath(),n.ellipse(64,92,14,22,0,0,7),n.fill(),n.strokeStyle=i,n.lineWidth=8,n.lineCap=`round`,n.beginPath(),n.moveTo(92,100),n.quadraticCurveTo(116,86,104,60),n.stroke(),n.fillStyle=r,n.beginPath(),n.arc(64,48,24,0,7),n.fill(),n.fillStyle=r,Nn(n,44,34,50,18,60,34),Nn(n,84,34,78,18,68,34),n.fillStyle=`#f0b0c0`,Nn(n,47,30,50,22,56,32),Nn(n,81,30,78,22,72,32),n.fillStyle=a,n.beginPath(),n.arc(55,47,3.4,0,7),n.arc(73,47,3.4,0,7),n.fill(),n.fillStyle=`#e06a7a`,Nn(n,61,54,67,54,64,58),n.strokeStyle=a,n.lineWidth=1.6;for(let e of[-2,3])n.beginPath(),n.moveTo(50,55+e),n.lineTo(34,53+e),n.moveTo(78,55+e),n.lineTo(94,53+e),n.stroke();n.strokeStyle=i,n.lineWidth=3;for(let e of[78,90,102])n.beginPath(),n.moveTo(50,e),n.lineTo(78,e),n.stroke()}let o=new k(t);return o.colorSpace=u,o}function Nn(e,t,n,r,i,a,o){e.beginPath(),e.moveTo(t,n),e.lineTo(r,i),e.lineTo(a,o),e.closePath(),e.fill()}function Pn(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`);t.fillStyle=`#ff5a8a`,t.beginPath(),t.moveTo(32,52),t.bezierCurveTo(6,32,14,10,32,24),t.bezierCurveTo(50,10,58,32,32,52),t.fill();let n=new k(e);return n.colorSpace=u,n}function Fn(e){let t=document.createElement(`canvas`);t.width=t.height=64;let n=t.getContext(`2d`);n.fillStyle=e,n.beginPath(),n.ellipse(30,32,18,11,0,0,7),n.fill(),n.beginPath(),n.moveTo(46,32),n.lineTo(60,22),n.lineTo(60,42),n.closePath(),n.fill(),n.fillStyle=`rgba(255,255,255,0.35)`,n.beginPath(),n.ellipse(28,36,12,5,0,0,7),n.fill(),n.fillStyle=`#15212a`,n.beginPath(),n.arc(20,30,2.6,0,7),n.fill();let r=new k(t);return r.colorSpace=u,r}function In(){let e=document.createElement(`canvas`);e.width=e.height=32;let t=e.getContext(`2d`),n=t.createRadialGradient(16,16,0,16,16,16);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.6,`rgba(255,255,255,0.7)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.beginPath(),t.arc(16,16,16,0,7),t.fill();let r=new k(e);return r.colorSpace=u,r}function Ln(e){let t=document.createElement(`canvas`);t.width=t.height=256;let n=t.getContext(`2d`),r=n.createLinearGradient(0,0,256,256);e<0?(r.addColorStop(0,`#6a3b1c`),r.addColorStop(1,`#caa15a`)):(r.addColorStop(0,`#3a4a6a`),r.addColorStop(1,`#a86a3a`)),n.fillStyle=r,n.fillRect(0,0,256,256),n.globalAlpha=.5;for(let e=0;e<5;e++)n.fillStyle=e%2?`#2a1c10`:`#e0c080`,n.fillRect(30+e*36,40+e%3*30,26,150);let i=new k(t);return i.colorSpace=u,i}var{Timer:Rn}=ue,zn=new URLSearchParams(window.location.search),Bn=zn.get(`demo`)===`1`||zn.has(`capture`);window.__demo=Bn;var Vn=(zn.get(`city`)?Number(zn.get(`city`)):0)||Math.random()*1e9|0,Hn=0,Un=mn({demo:Bn,citySeed:Vn,profileIndex:Hn}),{renderer:Wn,rig:Gn,sunRig:Kn,city:qn,cityLife:Jn,waterMaterial:Yn,fitShadowFrustum:Xn,landmarkFactory:Zn,renderCityBeautyTo:Qn}=Un,$=kn({tier:`corner`});$.camera.aspect=window.innerWidth/window.innerHeight,$.camera.updateProjectionMatrix();var $n=!0;window.__shadows=$n,window.__scene=`office`;var er={minFilter:h,magFilter:h,depthBuffer:!0,stencilBuffer:!1},tr=new O(2.2,3.4,11.5),nr=new O(0,2,0).sub(tr),rr=new O(0,1,0);function ir(e){let n=new ve(58,384/320,.1,100);n.position.copy(tr);let r=nr.clone().applyAxisAngle(rr,t.degToRad(e));return n.lookAt(tr.clone().add(r)),n}var ar=ir(45),or=ir(-45),sr=new L(384,320,er),cr=new L(384,320,er);$.setCityTexture(sr.texture,cr.texture);var lr=new ve(52,540/320,.1,100);lr.position.copy(tr),lr.lookAt(tr.clone().add(nr));var ur=new L(540,320,er);$.setStraightCityTexture(ur.texture);var dr=0,fr=3,pr=new L(512,320,{minFilter:h,magFilter:h,depthBuffer:!0,stencilBuffer:!1});$.setVignetteTexture(pr.texture);var mr=!1,hr=(()=>{if(typeof document>`u`)return{showLap(){},toast(){},flash(){}};let e=document.createElement(`style`);e.textContent=`
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
    </div></div>`;let n=document.createElement(`div`);n.className=`otoast`;let r=document.createElement(`div`);r.className=`oflash`,document.body.append(t,n,r),t.querySelector(`.lap-x`).addEventListener(`click`,()=>_r()),t.addEventListener(`click`,e=>{e.target===t&&_r()}),t.addEventListener(`click`,e=>{e.target.closest(`button`)&&navigator.vibrate?.(10)});let i=0;return{showLap(e){t.classList.toggle(`on`,e)},toast(e){n.textContent=e,n.classList.add(`on`),clearTimeout(i),i=setTimeout(()=>n.classList.remove(`on`),1400)},flash(){r.style.transition=`none`,r.style.opacity=`0.85`,requestAnimationFrame(()=>{r.style.transition=`opacity .55s`,r.style.opacity=`0`})}}})();function gr(){mr=!0,hr.showLap(!0)}function _r(){mr=!1,hr.showLap(!1)}function vr(){Hn=(Hn+1)%Ke.length,hr.flash(),qn.generate(Vn,Hn),Yn.uniforms.uVecWater.value.set(qn.waterColor),Jn.setProfile(qn.state.profile),Xn(),hr.toast(`✈  `+qn.state.profile.name),window.__profile=qn.state.profile.key}function yr(e){let t=$.setFitout(e);return hr.toast(t===`basement`?`🏚  Basement office`:`🏙  Corner office`),window.__tier=t,t}function br(){return yr($.tier===`corner`?`basement`:`corner`)}window.__tier=$.tier;var xr=[`3d`,`smooth`,`charm`],Sr={"3d":`🧊  Stylized 3D office`,smooth:`🖼  Smooth diffusion skin`,charm:`🕹  Charm diffusion skin`};function Cr(e){let t=$.setSkin(e);return window.__officeSkin=t,hr.toast(Sr[t]),t}function wr(){return Cr(xr[(xr.indexOf($.skin)+1)%xr.length])}window.__officeSkin=$.skin;var Tr={painted:`🎨  Painted props (cohesive)`,"3d":`🧊  Live 3D props (animated)`};function Er(e){let t=$.setProps(e);return window.__officeProps=t,$.skin!==`3d`&&hr.toast(Tr[t]),t}function Dr(){return Er($.props===`painted`?`3d`:`painted`)}window.__officeProps=$.props;var Or={corner:`🏙  Corner window`,"straight-on":`🖼  Straight-on window`};function kr(e){let t=$.setLayout(e);return window.__officeLayout=t,hr.toast(Or[t]),t}function Ar(){return kr($.layout===`corner`?`straight-on`:`corner`)}window.__officeLayout=$.layout;var jr=new d,Mr=new N,Nr=(e,t)=>{Mr.x=e/window.innerWidth*2-1,Mr.y=-(t/window.innerHeight)*2+1};function Pr(){jr.setFromCamera(Mr,$.camera);let e=jr.intersectObjects($.interactables,!0)[0];if(!e)return null;let t=e.object;for(;t&&!t.userData.role;)t=t.parent;return t?t.userData.role:null}function Fr(e){e===`laptop`?gr():e===`phone`?vr():e===`cat`?$.petCat():e===`tank`&&$.feedFish()}var Ir=6,Lr=0,Rr=0,zr=0,Br=0,Vr=0,Hr=!1,Ur=!1;Wn.domElement.style.cursor=`grab`,Wn.domElement.addEventListener(`mousedown`,e=>{Hr=!0,Ur=!1,Lr=Br=e.clientX,Rr=Vr=e.clientY,zr=performance.now()}),window.addEventListener(`mousemove`,e=>{Hr?(!Ur&&Math.hypot(e.clientX-Lr,e.clientY-Rr)>Ir&&(Ur=!0),Ur&&($.look.addDrag(e.clientX-Br,e.clientY-Vr),Wn.domElement.style.cursor=`grabbing`),Br=e.clientX,Vr=e.clientY):(Nr(e.clientX,e.clientY),Wn.domElement.style.cursor=Pr()?`pointer`:`grab`)}),window.addEventListener(`mouseup`,e=>{if(Hr&&!Ur&&!mr){Nr(e.clientX,e.clientY);let t=Pr();t&&Fr(t)}Hr=!1,Ur=!1,Wn.domElement.style.cursor=`grab`});var Wr=!1;Wn.domElement.addEventListener(`touchstart`,e=>{e.touches.length===1&&(Lr=Br=e.touches[0].clientX,Rr=Vr=e.touches[0].clientY,zr=performance.now(),Wr=!1)},{passive:!0}),Wn.domElement.addEventListener(`touchmove`,e=>{if(e.touches.length!==1)return;let t=e.touches[0].clientX,n=e.touches[0].clientY;!Wr&&Math.hypot(t-Lr,n-Rr)>8&&(Wr=!0),Wr&&$.look.addDrag(t-Br,n-Vr),Br=t,Vr=n},{passive:!0}),window.addEventListener(`touchend`,e=>{if(!Wr&&performance.now()-zr<350&&(!e.touches||e.touches.length===0)&&!mr){let e=Pr();e&&Fr(e)}Wr=!1});var Gr={left:!1,right:!1,up:!1,down:!1},Kr={ArrowLeft:`left`,ArrowRight:`right`,ArrowUp:`up`,ArrowDown:`down`};window.addEventListener(`keydown`,e=>{if(Kr[e.key]){Gr[Kr[e.key]]=!0,e.preventDefault();return}e.key===`Escape`&&(mr?_r():$.look.recenter()),(e.key===`f`||e.key===`F`)&&br(),(e.key===`j`||e.key===`J`)&&wr(),(e.key===`u`||e.key===`U`)&&Dr(),(e.key===`t`||e.key===`T`)&&Kn.cyclePreset(),(e.key===`h`||e.key===`H`)&&($n=!$n,window.__shadows=$n),(e.key===`w`||e.key===`W`)&&Ar()}),window.addEventListener(`keyup`,e=>{Kr[e.key]&&(Gr[Kr[e.key]]=!1)}),Zn.whenReady.then(()=>{qn.generate(Vn,Hn),Xn(),window.__cityReady=!0}),zn.get(`office`)===`basement`&&yr(`basement`);var qr=zn.get(`officeskin`);[`3d`,`smooth`,`charm`].includes(qr)&&Cr(qr);var Jr=zn.get(`officeprops`);[`painted`,`3d`].includes(Jr)&&Er(Jr);var Yr=zn.get(`officelayout`);[`corner`,`straight-on`].includes(Yr)&&kr(Yr);var Xr=new Rn;Xr.connect(document);function Zr(){Xr.update();let e=Math.min(Xr.getDelta(),.1);Gn.update(e),Un.updateWorld(e,Xr.getElapsed(),{shadowsOn:$n,seasonTarget:0}),$.look.addKeys(e,Gr),$.update(e,Xr.getElapsed(),Kn),window.__lookYaw=$.look.yaw,window.__lookPitch=$.look.pitch,$.tier===`basement`?(Wn.setRenderTarget(pr),Wn.render($.vignette.scene,$.vignette.camera)):dr%fr===0&&($.layout===`straight-on`?Qn(lr,ur):(Qn(ar,sr),Qn(or,cr))),dr++,Wn.setRenderTarget(null),Wn.render($.scene,$.camera),requestAnimationFrame(Zr)}Zr(),vn({key:`office`,title:`The Office`,tips:[`Drag to look around the office (or use the arrow keys)`,`Click / tap the LAPTOP to open the game panel`,`Tap the PHONE to travel to another city · pet the CAT · feed the FISH`,`Esc exits · F fitout · J skin · U props · W window · T time`]}),window.addEventListener(`resize`,()=>{Un.resize(),$.camera.aspect=window.innerWidth/window.innerHeight,$.camera.updateProjectionMatrix()});