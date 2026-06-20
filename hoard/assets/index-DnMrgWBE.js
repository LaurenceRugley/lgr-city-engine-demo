import{$ as e,A as t,B as n,C as r,D as i,E as a,F as o,G as s,H as c,I as l,J as u,K as d,L as f,M as p,N as m,O as h,P as g,Q as _,R as v,S as y,T as b,U as x,V as S,W as C,X as w,Y as T,Z as E,_ as D,a as O,at as k,b as A,c as j,ct as M,d as N,dt as P,et as ee,f as te,ft as F,g as ne,h as I,i as re,it as L,j as R,k as z,l as ie,lt as B,m as ae,n as V,nt as H,o as oe,ot as se,p as ce,q as le,r as ue,rt as de,s as U,st as fe,t as pe,tt as me,u as he,ut as W,v as ge,w as _e,x as ve,y as ye,z as be}from"./three-C1iWrYku.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var xe=Math.atan(1/Math.SQRT2),Se=Math.atan(.5),Ce=Math.PI/4,we={PERSPECTIVE:4,ISOMETRIC:5,DIMETRIC:6},Te=.12,Ee=1.45,De=4,Oe=40,ke=1.5,Ae=16,je=6,Me=22,Ne=3.5,Pe=11,Fe=(e,t,n)=>e+(t-e)*(1-Math.exp(-8*n)),G=(e,t)=>e+Math.PI*2*Math.round((t-e)/(Math.PI*2));function Ie({aspect:e,fov:t=48,near:n=.1,far:r=100,target:i=new P(0,.8,0),azimuth:a=Ce,elevation:o=.52,distance:s=12,zoom:c=5.5}={}){let l=new u(t,e,n,r),f=new d(-1,1,1,-1,n,r),p=we.PERSPECTIVE,m=e,h={azimuth:a,elevation:o,distance:s,zoom:c,target:i.clone()},g={azimuth:a,elevation:o,distance:s,zoom:c,target:i.clone()},_=!1,y=null,b=new P,x=()=>p===we.PERSPECTIVE?l:f;function S(e){e!==p&&(p=e,p===we.ISOMETRIC||p===we.DIMETRIC?(h.elevation=p===we.ISOMETRIC?xe:Se,h.azimuth=G(Ce,g.azimuth),_=!0):_=!1)}function C(e,t){h.azimuth+=e,_||(h.elevation=v.clamp(h.elevation+t,Te,Ee))}function w(e){p===we.PERSPECTIVE?h.distance=v.clamp(h.distance*e,De,Oe):h.zoom=v.clamp(h.zoom*e,ke,Ae)}function T(e,t){let n=h.azimuth,r=p===we.PERSPECTIVE?h.distance*.04:h.zoom*.08,i=new P(Math.cos(n),0,-Math.sin(n)),a=new P(-Math.sin(n),0,-Math.cos(n));h.target.addScaledVector(i,e*r),h.target.addScaledVector(a,t*r)}function E(e,t){m=e/t,l.aspect=m,l.updateProjectionMatrix()}function D(e){y&&(y(b),h.target.copy(b)),g.azimuth=Fe(g.azimuth,h.azimuth,e),g.elevation=Fe(g.elevation,h.elevation,e),g.distance=Fe(g.distance,h.distance,e),g.zoom=Fe(g.zoom,h.zoom,e),g.target.x=Fe(g.target.x,h.target.x,e),g.target.y=Fe(g.target.y,h.target.y,e),g.target.z=Fe(g.target.z,h.target.z,e);let t=Math.cos(g.elevation),n=Math.sin(g.elevation),r=Math.cos(g.azimuth),i=Math.sin(g.azimuth),a=x();if(a.position.set(g.target.x+g.distance*t*i,g.target.y+g.distance*n,g.target.z+g.distance*t*r),a.lookAt(g.target),a.isOrthographicCamera){let e=g.zoom,t=e*m;a.left=-t,a.right=t,a.top=e,a.bottom=-e,a.updateProjectionMatrix()}}function O(e,t,n,r=!1){h.target.set(e,t,n),r&&g.target.copy(h.target)}function k(e,t=!1){h.zoom=v.clamp(e,ke,Ae),t&&(g.zoom=h.zoom)}function A(e,{frame:t,snap:n=!1}={}){y=e,n&&(y(b),h.target.copy(b),g.target.copy(b)),t!=null&&(p===we.PERSPECTIVE?h.distance=v.clamp(t,De,Oe):h.zoom=v.clamp(t,ke,Ae))}function j(){y=null}return{get camera(){return x()},get mode(){return p},get azimuth(){return g.azimuth},get following(){return!!y},setTarget:O,setZoom:k,setFollow:A,clearFollow:j,get styleT(){return p===we.PERSPECTIVE?v.clamp((g.distance-je)/(Me-je),0,1):v.clamp((g.zoom-Ne)/(Pe-Ne),0,1)},setMode:S,orbit:C,zoomBy:w,pan:T,setViewport:E,update:D}}var Le={value:0},Re=new I(`#ffffff`),ze={value:0},Be={value:0},Ve={value:0},He=new W,Ue={value:0},We={value:0},Ge=`
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
`;function Ke(e){e.uniforms.uVector=Le,e.uniforms.uVecTint={value:Re},e.uniforms.uVecShadow=ze,e.uniforms.uSnow=Be,e.uniforms.uCloud=Ve,e.uniforms.uCloudOff={value:He},e.uniforms.uFogCharm=Ue}function qe(e){return e.replace(`#include <fog_fragment>`,`
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
  `)}function Je(e){return e.replace(`#include <common>`,`#include <common>
varying vec3 vVecN;
varying vec3 vVecP;
varying vec2 vWorldXZ;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
  vVecN = normal;
  vVecP = position;
  vWorldXZ = (modelMatrix * vec4(position, 1.0)).xz;`)}function Ye(e){return e.replace(`#include <shadowmap_pars_fragment>`,`#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>`)}var Xe=`col *= mix(1.0, getShadowMask(), uVecShadow);`;function K(e,{color:t,id:n,windowGlow:r,winColors:i=[`#ffb852`,`#8cd9ff`],litFrac:a=.55}={}){let o=[0,1,2].map(e=>new I(i[e]??i[i.length-1]));return e.customProgramCacheKey=()=>`lgr-vec-tower`,e.onBeforeCompile=e=>{Ke(e),e.uniforms.uWindowGlow=r,e.uniforms.uWinId={value:n},e.uniforms.uVecColor={value:new I(t)},e.uniforms.uWinA={value:o[0]},e.uniforms.uWinB={value:o[1]},e.uniforms.uWinC={value:o[2]},e.uniforms.uWinLit={value:a},e.vertexShader=Je(e.vertexShader),e.fragmentShader=qe(Ye(e.fragmentShader.replace(`#include <common>`,`#include <common>
        uniform float uWindowGlow;
        uniform float uWinId;
        uniform vec3  uVecColor;
        uniform vec3  uWinA; uniform vec3 uWinB; uniform vec3 uWinC;
        uniform float uWinLit;
        ${Ge}
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
          ${Xe}                                  // the sun's shadow darkens the body
          vec3 wcol; vec2 w = winTerms(wcol);
          vec3 glass = vec3(0.17, 0.23, 0.34);          // dark glass-blue panes (day)
          col = mix(col, glass, w.x * 0.85);
          col += w.x * w.y * wcol * uWindowGlow * 1.5;  // …windows EMIT (unshadowed) at night
          gl_FragColor = vec4(col, diffuseColor.a);
        }`)))},e}function q(e,{color:t=null,glow:n=null,glowDay:r=0,glowNight:i=1,windowGlow:a=null,season:o=!1}={}){let s=t===null,c=n!==null&&a!==null;return e.customProgramCacheKey=()=>`lgr-vec|`+(s?`d`:`c`)+(c?`g`:``)+(o?`s`:``),e.onBeforeCompile=e=>{Ke(e),s||(e.uniforms.uVecColor={value:new I(t)}),c&&(e.uniforms.uGlow={value:new I(n)},e.uniforms.uGlowDay={value:r},e.uniforms.uGlowNight={value:i},e.uniforms.uWindowGlow=a),o&&(e.uniforms.uSeason=We),e.vertexShader=Je(e.vertexShader);let l=s?`diffuseColor.rgb`:`uVecColor`,u=o?`seasonShift(${l})`:l,d=(s?``:`uniform vec3 uVecColor;
`)+(c?`uniform vec3 uGlow; uniform float uGlowDay; uniform float uGlowNight; uniform float uWindowGlow;
`:``)+(o?`uniform float uSeason;
vec3 seasonShift(vec3 c){
  c = mix(c, vec3(0.86, 0.46, 0.13), smoothstep(0.40, 0.70, uSeason));   // → autumn orange
  c = mix(c, vec3(0.46, 0.33, 0.20), smoothstep(0.75, 1.00, uSeason));   // → bare brown
  return c;
}
`:``),f=c?`uGlow * mix(uGlowDay, uGlowNight, uWindowGlow)`:`vec3(0.0)`,p=qe(Ye(e.fragmentShader.replace(`#include <common>`,`#include <common>
`+d+Ge).replace(`#include <opaque_fragment>`,`#include <opaque_fragment>
        if (uVector > 0.5) {
          vec3 col = vecShade(${u});
          ${Xe}                            // the sun's shadow darkens the flat tier…
          gl_FragColor = vec4(col + ${f}, diffuseColor.a);  // …but the night glow stays lit
        }`)));c&&(p=p.replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>\n  totalEmissiveRadiance += ${f};`)),e.fragmentShader=p},e}function Ze(e){let t=e>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Qe(e){let t=Ze(e);return{next:t,range:(e,n)=>e+(n-e)*t(),int:(e,n)=>e+Math.floor(t()*(n-e+1)),pick:e=>e[Math.floor(t()*e.length)],chance:e=>t()<e}}var $e=[{key:`manhattan`,name:`Manhattan`,towers:[`#EDE3C8`,`#D9B98A`,`#B5562F`,`#A8C8E8`,`#2E3F5C`],ground:`#7CC455`,street:`#9AA0A6`,sidewalk:`#C8CCD0`,park:`#5DB347`,water:`#29A8D8`,shopfronts:[`#C04A3A`,`#3A7AC0`,`#C09A2A`],glass:`#7FA8CC`,winColors:[`#ffd27a`,`#9ad6ff`],hMax:4.6,sigma:.36,roofRate:.35,pSplit:.6,nightLit:.55,roofTint:null,coast:{base:.55,out:1,in:.6,jag:1.05},landmarks:[`empireState`,`chrysler`,`liberty`]},{key:`paris`,name:`Paris`,towers:[`#E8DCC0`,`#F2EAD6`,`#E0D2B4`],ground:`#8CC46A`,street:`#A8A29A`,sidewalk:`#D4CEC2`,park:`#6DB35A`,water:`#3FA8C8`,shopfronts:[`#C04A3A`,`#3A6B5A`,`#7A5AC0`],glass:`#5A6B7A`,winColors:[`#ffdca0`,`#ffcaa0`],hMax:1.5,sigma:.9,roofRate:.15,pSplit:.75,nightLit:.45,roofTint:`#6A7886`,coast:{base:1.05,out:.55,in:.3,jag:.5},landmarks:[`eiffel`,`arcDeTriomphe`,`sacreCoeur`]},{key:`neoTokyo`,name:`Neo-Tokyo`,towers:[`#2A3038`,`#3A4250`,`#252B36`,`#4A4456`],ground:`#3A4A42`,street:`#5A6068`,sidewalk:`#7A8088`,park:`#2E5E46`,water:`#0E6878`,shopfronts:[`#E8483A`,`#5AE8E0`,`#E85AA0`],glass:`#5AE8E0`,winColors:[`#5AE8E0`,`#E85AA0`,`#E8E06A`],hMax:5.2,sigma:.42,roofRate:.6,pSplit:.6,nightLit:.7,roofTint:null,coast:{base:.7,out:1.05,in:.62,jag:1.7},landmarks:[`tokyoTower`,`pagoda`,`neonBillboard`]}];$e.map(e=>e.key);var et=.3,J=1.9,tt=.55,Y=2.45,nt=.12,rt=.6,it=6,X={BASE:.7,OUT:.95,IN:.55,JAG:1,SAMPLES_PER_EDGE:28,HARBOR_DEPTH:.55,HARBOR_WIDTH:.26},at={PLINTH_TOP:et,BLOCK:J,STREET:tt,PITCH:Y,SIDEWALK:nt,SHORE:rt,N:it,COAST:X};function Z(e,t,n){let r=n?.base??X.BASE,i=n?.out??X.OUT,a=n?.in??X.IN,o=n?.jag??X.JAG,s=t+r,c=Qe((e^789079)>>>0),l=[2,3,5,8,11,13].map(e=>({k:e,amp:1/e*o**((e-2)/6),phase:c.range(0,Math.PI*2)})),u=l.reduce((e,t)=>e+t.amp,0),d=e=>{let t=0;for(let n of l)t+=n.amp*Math.sin(n.k*e*Math.PI*2+n.phase);return Math.max(-1,Math.min(1,t/(u*.6)))},f=[{fix:+s,nx:1,nz:0,sign:1},{fix:+s,nx:0,nz:1,sign:-1},{fix:-s,nx:-1,nz:0,sign:-1},{fix:-s,nx:0,nz:-1,sign:1}],p=t+.22,m=X.SAMPLES_PER_EDGE,h=4*m,g=[],_=0;for(let e=0;e<4;e++){let t=f[e];for(let n=0;n<m;n++,_++){let o=n/m,c=_/h,l=(-s+2*s*o)*t.sign,u=d(c),f=u>=0?u*i:u*a;if(e===0){let e=Math.abs(o-.5);if(e<X.HARBOR_WIDTH){let t=.5+.5*Math.cos(e/X.HARBOR_WIDTH*Math.PI);f-=(r+X.HARBOR_DEPTH)*t}}let v,y;t.nx===0?(y=t.fix+t.nz*f,v=l,y=t.nz>0?Math.max(y,p):Math.min(y,-p)):(v=t.fix+t.nx*f,y=l,v=t.nx>0?Math.max(v,p):Math.min(v,-p)),g.push(new W(v,y))}}return{points:g,B:s,maxR:s+i,harborX:p}}function Q(e){(Array.isArray(e)?e:[e]).forEach(e=>e&&e.dispose&&e.dispose())}function ot({seed:e=1,profileIndex:t=0,landmarkFactory:n=null,windowGlow:r}){let i=new a,o=new a,s=new a;o.raycast=()=>{},s.raycast=()=>{},i.add(o,s);let l=new A(16773594,3);l.position.set(.45,.6,-.65).multiplyScalar(10);let u=new h(7313331,2762272,1);i.add(l,u);let d=0,f=[],p={seed:e,profileIndex:t,profile:$e[t],extent:0,meshCount:0};function m(e,t,n,r){let i=new S(new U(e,.04,t),q(new x({color:r,roughness:.95,flatShading:!0}),{color:r}));return i.position.y=n,i.userData.ground=!0,i}function g(e,t){for(let e of o.children)e.geometry&&e.geometry.dispose(),Q(e.material);o.clear();for(let e of s.children)e.traverse(e=>{e.isMesh&&Q(e.material)});s.clear(),f.length=0,d=0;let r=Qe(e),i=$e[t],a=(it-1)/2*Y,c=7.075;p={seed:e,profileIndex:t,profile:i,extent:c+(i.coast?.base??X.BASE),meshCount:0};let l=Z(e,c,i.coast);p.coast=l;let u=new k;l.points.forEach((e,t)=>t?u.lineTo(e.x,e.y):u.moveTo(e.x,e.y)),u.closePath();let h=new S(new y(u,{depth:2,bevelEnabled:!1,steps:1}),q(new x({color:i.ground,roughness:.9,flatShading:!0,side:2}),{color:i.ground}));h.rotation.x=-Math.PI/2,h.position.y=et-2,h.userData.ground=!0,o.add(h);let g=2*7.195;o.add(m(g,g,.32,i.street)),C(l.harborX,i);let T=[];for(let e=0;e<it;e++)for(let t=0;t<it;t++)T.push([e,t]);let E=new Set,D=Math.max(1,Math.round(T.length*.08));for(;E.size<D;)E.add(r.int(0,T.length-1));let O=r.range(-2.45*.6,Y*.6),A=r.range(-2.45*.6,Y*.6),j=Math.hypot(a,a),M=[];if(T.forEach(([e,t],n)=>{let a=(e-(it-1)/2)*Y,s=(t-(it-1)/2)*Y;if(o.add(m(J,J,.32999999999999996,i.sidewalk).translateX(a).translateZ(s)),E.has(n)){o.add(m(J-nt*2,J-nt*2,.35,i.park).translateX(a).translateZ(s));let e=r.int(3,5);for(let t=0;t<e;t++)w(a+r.range(-.6,.6),s+r.range(-.6,.6),i,r);return}let c=J-nt*2,l=r.chance(i.pSplit)?2:1,u=r.chance(i.pSplit)?2:1,d=c/l,f=c/u;for(let e=0;e<l;e++)for(let t=0;t<u;t++){let n=a-c/2+d*(e+.5),o=s-c/2+f*(t+.5),l=Math.max(.6,d-.1),u=Math.max(.6,f-.1),p=Math.hypot(n-O,o-A)/j,m=Math.exp(-(p*p)/(2*i.sigma*i.sigma)),h=Math.max(.5,.5+(i.hMax-.5)*m*r.range(.75,1.25));h>i.hMax*.5&&Math.min(l,u)>=.7&&M.push({lx:n,lz:o,fw:l,fd:u,h,r:p}),_(n,o,l,u,h,i,r)}}),n&&n.ready){M.sort((e,t)=>e.r-t.r);let e=[],t=i.landmarks;for(let r=0;r<t.length&&M.length;r++){let a=null;for(let t of M)if(e.every(e=>Math.hypot(e.lx-t.lx,e.lz-t.lz)>Y*.9)){a=t;break}a||=M[0],e.push(a),v(a.lx,a.lz);let o=i.hMax*n.heightFactor(t[r]),c=n.make(t[r],{x:a.lx,z:a.lz,w:a.fw,d:a.fd,h:o,plinthTop:et});if(c){s.add(c);let e=new oe().setFromObject(c);b(e.min.x-.15,e.max.x+.15,e.min.z-.15,e.max.z+.15)}}}o.traverse(e=>{e.isMesh&&(e.userData.ground?(e.castShadow=!1,e.receiveShadow=!0):e.material&&e.material.isMeshBasicMaterial?(e.castShadow=!1,e.receiveShadow=!1):(e.castShadow=!0,e.receiveShadow=!0))}),s.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),p.meshCount=o.children.length+s.children.length;let N=0;for(let e of o.children){let t=e.position;N=(Math.imul(N,16777619)^(Math.round(t.x*100)*2654435761^Math.round(t.y*100)*40503^Math.round(t.z*100)*2246822519))>>>0}for(let e of p.coast.points)N=(Math.imul(N,16777619)^(Math.round(e.x*100)*2654435761^Math.round(e.y*100)*40503))>>>0;p.sig=N,window.__city={seed:e,profile:i.key,meshes:p.meshCount,sig:N}}function _(e,t,n,i,a,s,l){let u=K(new x({flatShading:!0,roughness:.7,metalness:.05}),{color:l.pick(s.towers),id:++d,windowGlow:r,winColors:s.winColors,litFrac:s.nightLit}),p=new S(new U(n,a,i),u);if(p.position.set(e,et+a/2,t),p.userData.lot=[e,t],o.add(p),s.roofTint){let r=q(new x({color:s.roofTint,roughness:.85,flatShading:!0}),{color:s.roofTint}),c=new S(new U(n*1.02,.08,i*1.02),r);c.position.set(e,et+a+.04,t),c.userData.lot=[e,t],o.add(c)}if(a<1.4){let r=l.pick(s.shopfronts),a=new S(new U(n*1.04,.18,i*1.04),q(new x({color:r,roughness:.8,flatShading:!0}),{color:r}));a.position.set(e,.39,t),a.userData.lot=[e,t],o.add(a)}let m=et+a,h=n,g=i;if(a>s.hMax*.5&&l.chance(.55)){let c=n*l.range(.5,.72),u=i*l.range(.5,.72),f=a*l.range(.18,.4),p=new S(new U(c,f,u),K(new x({flatShading:!0,roughness:.7,metalness:.05}),{color:l.pick(s.towers),id:++d,windowGlow:r,winColors:s.winColors,litFrac:s.nightLit}));p.position.set(e,et+a+f/2,t),p.userData.lot=[e,t],o.add(p),m=et+a+f,h=c,g=u}if(a>s.hMax*.45&&l.chance(s.roofRate)){let n=l.chance(.5)?new S(new U(h*.4,.18,g*.4),q(new x({color:`#9a9a9a`,flatShading:!0}),{color:`#9a9a9a`})):new S(new D(h*.18,h*.18,.22,10),q(new x({color:`#b9bec4`,flatShading:!0}),{color:`#b9bec4`}));if(n.position.set(e+l.range(-.1,.1),m+.11,t+l.range(-.1,.1)),n.userData.lot=[e,t],o.add(n),l.chance(.25)){let n=new S(new se(.05,6,5),new c({color:`#ff3b30`,transparent:!0,opacity:1}));n.position.set(e,m+.15,t),n.userData.lot=[e,t],n.raycast=()=>{},o.add(n),f.push({mesh:n,phase:l.range(0,6.28)})}}if(a>s.hMax*.7&&l.chance(.35)){let n=a*l.range(.18,.34),r=new S(new D(.018,.05,n,6),q(new x({color:`#c8ccd2`,flatShading:!0}),{color:`#c8ccd2`}));r.position.set(e,m+n/2,t),r.userData.lot=[e,t],r.raycast=()=>{},o.add(r)}}function v(e,t){for(let n=o.children.length-1;n>=0;n--){let r=o.children[n];r.userData.lot&&Math.abs(r.userData.lot[0]-e)<1e-4&&Math.abs(r.userData.lot[1]-t)<1e-4&&(r.geometry&&r.geometry.dispose(),Q(r.material),o.remove(r))}for(let e=f.length-1;e>=0;e--)f[e].mesh.parent||f.splice(e,1)}function b(e,t,n,r){for(let i=o.children.length-1;i>=0;i--){let a=o.children[i];a.userData.lot&&a.position.x>=e&&a.position.x<=t&&a.position.z>=n&&a.position.z<=r&&(a.geometry&&a.geometry.dispose(),Q(a.material),o.remove(a))}}function C(e,t){let n=q(new x({color:`#7a5634`,roughness:.95,flatShading:!0}),{color:`#7a5634`}),r=(e,t,r,i)=>{let a=new S(new U(e,.06,t),n);a.position.set(r,et-.16,i),o.add(a)};r(.24,2,e+.02,0),r(1.3,.22,e+.7,-.72),r(1.3,.22,e+.7,.72)}function w(e,t,n,r){let i=new I(n.park),a=(n,a)=>{let s=i.clone().offsetHSL(0,0,r.range(-.06,.06)).getStyle(),c=new S(new se(n,7,6),q(new x({color:s,flatShading:!0}),{color:s,season:!0}));c.scale.y=.7,c.position.set(e,et+a,t),c.userData.lot=null,o.add(c)},s=new S(new U(.05,.18,.05),q(new x({color:`#6b4a2a`,flatShading:!0}),{color:`#6b4a2a`}));s.position.set(e,.39,t),o.add(s),a(.22,.28),a(.16,.46)}function T(e){for(let t of f)t.mesh.material.opacity=.35+.65*(.5+.5*Math.sin(e*3+t.phase))}return g(e,t),{group:i,key:l,fill:u,update:T,generate:g,get state(){return p},get extent(){return p.extent},get waterColor(){return p.profile.water},profiles:$e}}var st=Math.PI*2,ct=.7,lt=90,ut=[{name:`night`,sun:`#4a6f9e`,intensity:.35,hemiSky:`#26344f`,hemiGround:`#0c1018`,horizon:`#1e2942`,sky:`#36486e`,exposure:.95,outline:`#101a30`,window:1,toonGain:2.6,turbidity:3,rayleigh:1,mie:.004,mieG:.75,gradeTint:`#cfd8ec`,gradeSat:.84,gradeLift:`#05070e`},{name:`dawn`,sun:`#ff9e54`,intensity:2.4,hemiSky:`#8a7686`,hemiGround:`#2a1f1a`,horizon:`#b8512c`,sky:`#ffb070`,exposure:1.05,outline:`#241826`,window:.3,toonGain:2,turbidity:6,rayleigh:3,mie:.025,mieG:.86,gradeTint:`#ffe6cf`,gradeSat:1.05,gradeLift:`#0a0603`},{name:`noon`,sun:`#fff4e0`,intensity:4.6,hemiSky:`#9cb8cc`,hemiGround:`#33302a`,horizon:`#5e7689`,sky:`#aacadd`,exposure:1.18,outline:`#0b0a08`,window:0,toonGain:1.7,turbidity:1.5,rayleigh:3,mie:.005,mieG:.78,gradeTint:`#c2d2e6`,gradeSat:1.14,gradeLift:`#000000`},{name:`dusk`,sun:`#ff6b35`,intensity:2,hemiSky:`#7a566a`,hemiGround:`#281a18`,horizon:`#b0432a`,sky:`#ff8a5a`,exposure:1.05,outline:`#1f1420`,window:.4,toonGain:2,turbidity:7,rayleigh:3.2,mie:.028,mieG:.87,gradeTint:`#ffdcc0`,gradeSat:1.06,gradeLift:`#0c0604`}],dt=e=>e-Math.floor(e),ft=(e,t,n)=>e+(t-e)*n,pt=(e,t,n)=>e+(t-e)*(1-Math.exp(-6*n));function mt({t:e=.5}={}){let t=e,n=e,r=!1,i=!1,a=ut.map(e=>({name:e.name,sun:new I(e.sun),hemiSky:new I(e.hemiSky),hemiGround:new I(e.hemiGround),horizon:new I(e.horizon),sky:new I(e.sky),outline:new I(e.outline),intensity:e.intensity,exposure:e.exposure,window:e.window,toonGain:e.toonGain,turbidity:e.turbidity,rayleigh:e.rayleigh,mie:e.mie,mieG:e.mieG,gradeTint:new I(e.gradeTint),gradeLift:new I(e.gradeLift),gradeSat:e.gradeSat})),o=new P(0,1,0),s=new I(`#fff4e0`),c=new I(`#6f97b3`),l=new I(`#2a2620`),u=new I(`#3a4a57`),d=new I(`#7da3bd`),f=new I(`#0b0a08`),p=new I(`#000000`),m=3,h=1,g=0,_=1.7,v={turbidity:2.2,rayleigh:1.3,mie:.005,mieG:.78},y={tint:new I(`#fafdff`),lift:new I(`#000000`),sat:1.08},b=new P;function x(e){let t=dt(e)*4,n=Math.floor(t)%4,r=(n+1)%4,i=t-Math.floor(t),x=a[n],S=a[r];s.lerpColors(x.sun,S.sun,i),c.lerpColors(x.hemiSky,S.hemiSky,i),l.lerpColors(x.hemiGround,S.hemiGround,i),u.lerpColors(x.horizon,S.horizon,i),d.lerpColors(x.sky,S.sky,i),f.lerpColors(x.outline,S.outline,i),m=ft(x.intensity,S.intensity,i),h=ft(x.exposure,S.exposure,i),g=ft(x.window,S.window,i),_=ft(x.toonGain,S.toonGain,i),v.turbidity=ft(x.turbidity,S.turbidity,i),v.rayleigh=ft(x.rayleigh,S.rayleigh,i),v.mie=ft(x.mie,S.mie,i),v.mieG=ft(x.mieG,S.mieG,i),y.tint.lerpColors(x.gradeTint,S.gradeTint,i),y.lift.lerpColors(x.gradeLift,S.gradeLift,i),y.sat=ft(x.gradeSat,S.gradeSat,i),p.setRGB(.045*g,.075*g,.14*g);let C=dt(e)*st-Math.PI/2,w=Math.cos(C),T=Math.sin(C);b.set(w,T*Math.cos(ct),T*Math.sin(ct)),b.y>=0?o.copy(b):o.copy(b).negate()}return x(t),{sunDir:o,sunColor:s,hemiSky:c,hemiGround:l,horizon:u,sky:d,outline:f,toonFloor:p,skyParams:v,grade:y,sunArc:b,get sunIntensity(){return m},get exposure(){return h},get windowGlow(){return g},get toonGain(){return _},get t(){return dt(t)},get auto(){return r},get clock(){let e=Math.round(dt(t)*24*60)%1440;return`${String(Math.floor(e/60)).padStart(2,`0`)}:${String(e%60).padStart(2,`0`)}`},cyclePreset(){n=(Math.floor(t*4+1e-4)+1)/4},nudge(e){n+=e/24},goTo(e){n=e},toggleAuto(){r=!r},setReducedMotion(e){i=e},update(e){r&&!i&&(n+=e/lt),t=pt(t,n,e),x(t)}}}function ht(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.35,`rgba(255,255,255,0.55)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new he(e);return r.colorSpace=H,r}function gt(e,t){let n=[];for(let r=0;r<16;r++){let i=r/16*Math.PI*2;n.push(new P(Math.cos(i)*e,t,Math.sin(i)*e))}return new te(n,!0,`catmullrom`,.5)}function _t(e){let t=(t,n)=>Math.exp(-((e-t)*(e-t))/(2*n*n)),n=Math.max(t(.33,.05),t(.75,.06)),r=v.smoothstep(e,.24,.3)*(1-v.smoothstep(e,.8,.88));return v.clamp(.15+.55*r+.45*n,.12,1)}function vt(){let{PITCH:e,N:t,PLINTH_TOP:n}=at,r=t+1,i=n+.04,a=n=>(n-t/2)*e,o=t/2,s=[],c=(e,t)=>t*r+e;for(let e=0;e<r;e++)for(let t=0;t<r;t++)s.push({x:a(t),z:a(e),i:t,j:e,edges:[]});let l=[],u=(t,n)=>{let r=(s[t].i===o||s[t].j===o)&&(s[n].i===o||s[n].j===o),i=l.length;l.push({a:t,b:n,len:e,main:r}),s[t].edges.push(i),s[n].edges.push(i)};for(let e=0;e<r;e++)for(let t=0;t<r;t++)t<r-1&&u(c(t,e),c(t+1,e)),e<r-1&&u(c(t,e),c(t,e+1));return{nodes:s,edges:l,y:i,mid:o}}function yt({plinthTop:e=.3,extent:t=4,profile:n=null}={}){let r=new a,i=vt(),{nodes:o,edges:l}=i,u=i.y,d=.34,f=0;{let e=at.PITCH-d*2;f=Math.max(1,Math.floor((e+.26)/.56))}let p=new c({color:`#e8c84a`,fog:!0}),m=new R(new U(.05,.012,.3),p,l.length*f);m.frustumCulled=!1,m.raycast=()=>{},m.receiveShadow=!1,m.castShadow=!1,r.add(m);{let e=new s,t=0;for(let n of l){let r=o[n.a],i=o[n.b],a=i.x-r.x,s=i.z-r.z,c=Math.hypot(a,s),l=a/c,p=s/c,h=Math.atan2(l,p),g=c-d*2;for(let n=0;n<f;n++){let i=d+(f===1?g/2:g*n/(f-1));e.position.set(r.x+l*i,u,r.z+p*i),e.rotation.set(0,h,0),e.updateMatrix(),m.setMatrixAt(t++,e.matrix)}}m.instanceMatrix.needsUpdate=!0}let h=new R(new U(.34,.26,.74),q(new x({flatShading:!0,roughness:.5,metalness:.3})),12);h.castShadow=!0,h.receiveShadow=!1,h.frustumCulled=!1,h.raycast=()=>{};let g=new ie,y=new Float32Array(72),b=new Float32Array(72),S=new I(`#fff0c0`),C=new I(`#ff3528`);for(let e=0;e<12;e++)S.toArray(b,e*3),C.toArray(b,(12+e)*3),y[e*3+1]=-50,y[(12+e)*3+1]=-50;g.setAttribute(`position`,new j(y,3)),g.setAttribute(`color`,new j(b,3));let w=new _({size:.72,sizeAttenuation:!0,map:ht(),vertexColors:!0,transparent:!0,opacity:0,blending:2,depthWrite:!1}),T=new E(g,w);T.frustumCulled=!1,T.raycast=()=>{},r.add(h,T);let D=[`#f4c430`,`#c0392b`,`#d8dde2`,`#9aa7b4`,`#6b7785`,`#5a7d9a`],O=Ze(2403557),k=l.map((e,t)=>t).filter(e=>l[e].main),A=[];for(let e=0;e<12;e++){let t=e<4&&k.length?k[O()*k.length|0]:O()*l.length|0,n=e===1;A.push({edge:t,fwd:O()<.5,s:O()*l[t].len,speed:n?.5:.78+e%3*.1,lenZ:n?1.45:1,color:D[n?1:e===0?0:2+e%4],rng:Ze(12648430+e*2654435761),isBus:n,pos:new P,dirX:0,dirZ:1,active:!1})}let M=new I;A.forEach((e,t)=>h.setColorAt(t,M.set(e.color)));function ee(e,t,n){let r=o[e],i=r.edges.filter(e=>e!==t);if(i.length===0)return t;let a=l[t],s=a.a===e?a.b:a.a,c=r.x-o[s].x,u=r.z-o[s].z,d=Math.hypot(c,u)||1,f=i[0],p=-2;for(let t of i){let n=l[t],i=n.a===e?n.b:n.a,a=o[i].x-r.x,s=o[i].z-r.z,m=Math.hypot(a,s)||1,h=c/d*(a/m)+u/d*(s/m);h>p&&(p=h,f=t)}return n()<.65?f:i[n()*i.length|0]}let te=ee,F=new s,ne=(e,t)=>{F.position.set(0,-50,0),F.scale.setScalar(0),F.updateMatrix(),e.setMatrixAt(t,F.matrix)},re=.085,L=at.PLINTH_TOP+.02+.13,z=new R(new N(.04,.1,3,6),q(new x({flatShading:!0,roughness:.8})),14);z.castShadow=!0,z.receiveShadow=!1,z.frustumCulled=!1,z.raycast=()=>{};let B=gt(t-.72,e),ae=[];for(let e=0;e<14;e++)ae.push({phase:e/14,speed:.12+e%4*.02,dir:e%2?1:-1,pos:new P,active:!1});let V=new P,H=new P,oe=new I;ae.forEach((e,t)=>z.setColorAt(t,oe.set([`#caa`,`#9ab`,`#bba`,`#ab9`][t%4]))),r.add(z);let se={manhattan:`#e8c84a`,paris:`#dcd2bc`,neoTokyo:`#5ae8e0`};function ce(e){e&&p.color.set(se[e.key]||`#e8c84a`)}ce(n);function le(t,n,r){let i=r?r.t:.5,a=r?r.windowGlow:0,s=Math.max(2,Math.round(_t(i)*12)),c=a>.05;for(let e=0;e<12;e++){if(e>=s){ne(h,e),A[e].active=!1,y[e*3+1]=-50,y[(12+e)*3+1]=-50;continue}let n=A[e];n.s+=t*n.speed;let r=0;for(;n.s>=l[n.edge].len&&r++<4;){n.s-=l[n.edge].len;let e=n.fwd?l[n.edge].b:l[n.edge].a,t=te(e,n.edge,n.rng);n.edge=t,n.fwd=l[t].a===e}let i=l[n.edge],a=n.fwd?o[i.a]:o[i.b],u=n.fwd?o[i.b]:o[i.a],d=u.x-a.x,f=u.z-a.z,p=Math.hypot(d,f)||1,m=d/p,g=f/p,_=-g,v=m,b=a.x+m*n.s+_*re,x=a.z+g*n.s+v*re,S=Math.atan2(m,g);F.position.set(b,L,x),F.rotation.set(0,S,0),F.scale.set(1,1,n.lenZ),F.updateMatrix(),h.setMatrixAt(e,F.matrix),n.pos.set(b,L,x),n.dirX=m,n.dirZ=g,n.active=!0;let C=.74*n.lenZ*.5,w=L+.06,T=e*3,E=(12+e)*3;c?(y[T]=b+m*(C+.04),y[T+1]=w,y[T+2]=x+g*(C+.04),y[E]=b-m*(C+.02),y[E+1]=w,y[E+2]=x-g*(C+.02)):(y[T+1]=-50,y[E+1]=-50)}h.instanceMatrix.needsUpdate=!0,g.attributes.position.needsUpdate=!0,w.opacity=v.clamp(a*1.8,0,1);let u=Math.max(2,Math.round(_t(i)*14));for(let t=0;t<14;t++){if(t>=u){ne(z,t),ae[t].active=!1;continue}let r=ae[t],i=(r.phase+r.dir*r.speed*n*.02+1e3)%1;B.getPointAt(i,V),B.getTangentAt(i,H);let a=Math.sin(n*6+r.phase*30)*.015;F.position.set(V.x,e+.09+a,V.z),F.rotation.set(0,Math.atan2(H.x*r.dir,H.z*r.dir),Math.sin(n*6+r.phase*30)*.06),F.scale.setScalar(1),F.updateMatrix(),z.setMatrixAt(t,F.matrix),r.pos.set(V.x,e+.09,V.z),r.active=!0}z.instanceMatrix.needsUpdate=!0}let ue=[...A.map((e,t)=>({kind:`car`,label:e.isBus?`bus`:`car ${t+1}`,getWorldPos:t=>t.copy(e.pos),active:()=>e.active,info:()=>`${e.isBus?`bus`:`car`} · ${l[e.edge].main?`main avenue`:`side street`} → heading ${bt(e.dirX,e.dirZ)}`})),...ae.map((e,t)=>({kind:`person`,label:`person ${t+1}`,getWorldPos:t=>t.copy(e.pos),active:()=>e.active,info:()=>`person · strolling the waterfront promenade`}))];function de(){return ue}return{group:r,update:le,setProfile:ce,getFollowables:de,graph:i,setRouter(e){te=e||ee}}}function bt(e,t){return[`N`,`NE`,`E`,`SE`,`S`,`SW`,`W`,`NW`][(Math.round(Math.atan2(e,t)/(Math.PI/4))%8+8)%8]}function xt({frames:e,fps:t=8,cols:n,rows:r=1}={}){let i=n||e||4,a=r||1,o=e||i*a,s=typeof window<`u`&&window.matchMedia?window.matchMedia(`(prefers-reduced-motion: reduce)`):null;function c(e,t){let n=t%i,r=Math.floor(t/i);e.offset.x=n/i,e.offset.y=1-(r+1)/a}function l(e){let t=e.clone();return t.needsUpdate=!0,t.repeat.set(1/i,1/a),c(t,0),t}function u(e,n,r=0){if(s&&s.matches)return c(e,0),0;let i=(Math.floor(n*t+r)%o+o)%o;return c(e,i),i}function d(e,t){let n=(Math.round(t)%o+o)%o;return c(e,n),n}return{frames:o,fps:t,cols:i,rows:a,makeInstanceTexture:l,step:u,setFrame:d}}function St(e){if(typeof document>`u`||!e||!e.image)return e;let t=e.image,n=t.width||t.naturalWidth,r=t.height||t.naturalHeight,i=document.createElement(`canvas`);i.width=n,i.height=r;let a=i.getContext(`2d`,{willReadFrequently:!0});a.drawImage(t,0,0,n,r);let o=a.getImageData(0,0,n,r),s=o.data;for(let e=0;e<s.length;e+=4){let t=s[e]*.299+s[e+1]*.587+s[e+2]*.114|0;s[e]=s[e+1]=s[e+2]=t}a.putImageData(o,0,0);let c=new he(i);return c.colorSpace=e.colorSpace||`srgb`,c}function Ct({url:e,fallback:t,luminance:n=!1,onReady:r}={}){let i=n?St(t):t;return e&&typeof window<`u`&&new B().load(e,e=>{e.colorSpace=H,r&&r(n?St(e):e)},void 0,()=>{}),i}var wt=``+new URL(`gull_diffusion_sheet-BMlUTLhu.png`,import.meta.url).href;function Tt(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.4,`rgba(255,255,255,0.5)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new he(e);return r.colorSpace=H,r}function Et(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64*.62,0,64/2,64*.62,64*.5);n.addColorStop(0,`rgba(240,250,255,0.95)`),n.addColorStop(1,`rgba(240,250,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new he(e);return r.colorSpace=H,r}function Dt(){let e=document.createElement(`canvas`);e.width=256,e.height=64;let t=e.getContext(`2d`);t.strokeStyle=`#ffffff`,t.lineWidth=6,t.lineCap=`round`,t.lineJoin=`round`;let n=[14,24,36,24];for(let e=0;e<4;e++){let r=e*64,i=n[e];t.beginPath(),t.moveTo(r+8,40),t.quadraticCurveTo(r+24,i,r+32,36),t.quadraticCurveTo(r+40,i,r+56,40),t.stroke()}let r=new he(e);return r.colorSpace=H,r}function Ot(e,t,n=18){let r=[];for(let i=0;i<n;i++){let a=i/n*Math.PI*2;r.push(new P(Math.cos(a)*e,t,Math.sin(a)*e))}return new te(r,!0,`catmullrom`,.5)}function kt(e,t,n){let r=e-t,i=[],a=(e,t)=>i.push(new P(e,n,t)),o=(e,n,r,i,o=4)=>{for(let s=1;s<=o;s++){let c=r+(i-r)*(s/o);a(e+Math.cos(c)*t,n+Math.sin(c)*t)}};for(let t=0;t<4;t++)a(e,-r+2*r*t/4);o(r,r,0,Math.PI/2);for(let t=0;t<4;t++)a(r-2*r*t/4,e);o(-r,r,Math.PI/2,Math.PI);for(let t=0;t<4;t++)a(-e,r-2*r*t/4);o(-r,-r,Math.PI,1.5*Math.PI);for(let t=0;t<4;t++)a(-r+2*r*t/4,-e);return o(r,-r,1.5*Math.PI,2*Math.PI),new te(i,!0,`catmullrom`,.5)}function At({extent:e=8,waterSize:t=28,plinthTop:n=.3}={}){let r=new a;r.raycast=()=>{};let i=.06,o=(e,n,r)=>r.set(e/t+.5,-n/t+.5,0),s=[kt(9.5,3,i),Ot(12.7,i),new te([new P(8.4,i,0),new P(11,i,-3.6),new P(13,i,0),new P(11,i,3.6)],!0,`catmullrom`,.5)],c=s.map(e=>e.getLength());function l({scale:e=1,hull:t=`#6b7785`,cabin:n=`#e7ecf2`}){let r=new a,i=new S(new U(.46*e,.2*e,1.1*e),q(new x({color:t,roughness:.6,metalness:.2,flatShading:!0}),{color:t}));i.position.y=.02;let o=new S(new U(.3*e,.22*e,.42*e),q(new x({color:n,roughness:.7,flatShading:!0}),{color:n}));return o.position.set(0,.18*e,.08*e),r.add(i,o),r.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!1),e.raycast=()=>{}}),r.userData.halfLen=.55*e,r}let u=[{laneIndex:0,dir:1,speed:.5,wake:.024,scale:1,hull:`#5a6675`,cabin:`#e7ecf2`},{laneIndex:1,dir:-1,speed:.42,wake:.022,scale:1,hull:`#7a5b46`,cabin:`#d9c3a6`},{laneIndex:0,dir:1,speed:.56,wake:.024,scale:.9,hull:`#456079`,cabin:`#cfe0ee`},{laneIndex:2,dir:1,speed:.34,wake:.03,scale:1.35,hull:`#39505f`,cabin:`#e2b85a`}];u.forEach((e,t)=>{e.mesh=l(e),e.u=t*.27%1,e.phase=t*1.7,e.isFerry=e.laneIndex===2,r.add(e.mesh)});let d=u.length,f=d*2,p=new ie,m=new Float32Array(f*3).fill(-50),h=new Float32Array(f*3),g=new I(`#fff0c0`),y=new I(`#ff3528`);for(let e=0;e<d;e++)g.toArray(h,e*3),y.toArray(h,(d+e)*3);p.setAttribute(`position`,new j(m,3)),p.setAttribute(`color`,new j(h,3));let b=new E(p,new _({size:.6,sizeAttenuation:!0,map:Tt(),vertexColors:!0,transparent:!0,opacity:0,blending:2,depthWrite:!1}));b.frustumCulled=!1,b.raycast=()=>{},r.add(b);function C(e,t){let n=new S(new se(e,9,7),q(new x({color:t,roughness:.5,flatShading:!0}),{color:t}));return n.scale.set(.55,.5,1),n.castShadow=!1,n.receiveShadow=!1,n.raycast=()=>{},n.position.y=-5,n}let w=[{x:-9.5,z:6,size:.18,color:`#5b6f86`,period:11,arcH:.55,span:1.1,whale:!1},{x:7.5,z:-9.5,size:.16,color:`#4a6076`,period:14,arcH:.5,span:1,whale:!1},{x:-7,z:-8.5,size:.2,color:`#607089`,period:9,arcH:.6,span:1.2,whale:!1},{x:10.5,z:7,size:.62,color:`#3a4350`,period:38,arcH:.9,span:2.6,whale:!0}];w.forEach((e,t)=>{e.mesh=C(e.size,e.color),e.heading=Math.atan2(-e.x,-e.z),e.t=t/w.length*e.period,e.splashed=!1,r.add(e.mesh),e.whale&&(e.spout=new fe(new M({map:Et(),transparent:!0,opacity:0,depthWrite:!1,fog:!0})),e.spout.scale.set(.6,1.1,1),e.spout.position.set(e.x,-5,e.z),r.add(e.spout))});let T=xt({frames:4,fps:7}),D=[`#ffffff`,`#cfd4da`,`#c8a06a`],O=[],k=Ct({url:wt,fallback:Dt(),luminance:!0,onReady:e=>{k=e;for(let t of O){let n=t.sp.material.map;t.sp.material.map=T.makeInstanceTexture(e),t.sp.material.needsUpdate=!0,n&&n.dispose()}typeof window<`u`&&(window.__gullSheet=`diffusion`)}});for(let e=0;e<4;e++){let t=new fe(new M({map:T.makeInstanceTexture(k),color:new I(D[e%D.length]),transparent:!0,opacity:0,depthWrite:!1,fog:!0}));t.scale.setScalar(.5),O.push({sp:t,r:8.6+e*.5,y:1.1+e%2*.5,speed:(.18+e*.03)*(e%2?-1:1),phase:e*1.9}),r.add(t)}typeof window<`u`&&(window.__gullSheet=window.__gullSheet||`procedural`,window.__gullAnim={frames:T.frames,variants:D.length,fps:T.fps});let A=w.length,N=Array.from({length:d+A},()=>new P),ee=e=>e.laneIndex,F=new P,ne=new P,re=new P;function L(e,t,n){let r=n?n.windowGlow:0,a=1-r;for(let n=0;n<d;n++){let a=u[n],l=s[a.laneIndex],f=c[a.laneIndex],p=a.isFerry?.45+.55*Math.min(1,Math.abs((a.u+.5)%1-.5)*3):1,h=a.u;a.u=(a.u+a.dir*e*a.speed*p/f+1)%1,(a.dir>0?a.u<h:a.u>h)&&(a.laneIndex=ee(a)),l.getPointAt(a.u,F),l.getTangentAt(a.u,ne);let g=ne.x*a.dir,_=ne.z*a.dir,v=Math.atan2(g,_),y=Math.sin(t*1.1+a.phase)*.025;a.mesh.position.set(F.x,i+y,F.z),a.mesh.rotation.set(Math.sin(t*.9+a.phase)*.04,v,0);let b=a.mesh.userData.halfLen;o(F.x-g*b,F.z-_*b,re),N[n].set(re.x,re.y,a.wake);let x=n*3,S=(d+n)*3;if(r>.05){let e=.18;m[x]=F.x+g*(b+.05),m[x+1]=e,m[x+2]=F.z+_*(b+.05),m[S]=F.x-g*(b+.02),m[S+1]=e,m[S+2]=F.z-_*(b+.02)}else m[x+1]=-50,m[S+1]=-50}R(),b.material.opacity=v.clamp(r*1.8,0,1);for(let t=0;t<A;t++){let n=w[t];n.t+=e;let r=d+t,a=n.whale?3.2:1.3;if(n.t>=n.period){let e=(n.t-n.period)/a;if(e>=1){n.t=0,n.splashed=!1,n.mesh.position.y=-5,n.spout&&(n.spout.material.opacity=0),N[r].set(0,0,0);continue}let t=Math.sin(Math.PI*e),s=(e-.5)*n.span,c=n.x+Math.sin(n.heading)*s,l=n.z+Math.cos(n.heading)*s;n.mesh.position.set(c,i-.1+t*n.arcH,l),n.mesh.rotation.set(Math.cos(Math.PI*e)*.9,n.heading,0);let u=e<.16||e>.84;if(o(c,l,re),N[r].set(re.x,re.y,u?n.whale?.07:.05:0),n.spout){let t=v.clamp((e-.15)*3,0,1)*(1-e);n.spout.position.set(c,.56+t*.6,l),n.spout.material.opacity=t*.9}}else n.mesh.position.y=-5,N[r].set(0,0,0),n.spout&&(n.spout.material.opacity=0)}for(let e=0;e<4;e++){let n=O[e],r=n.phase+t*n.speed*.25;n.sp.position.set(Math.cos(r)*n.r,n.y+Math.sin(t*1.4+n.phase)*.12,Math.sin(r)*n.r),n.sp.material.opacity=v.clamp(a*.9-.05,0,.85);let i=T.step(n.sp.material.map,t,n.phase);e===0&&typeof window<`u`&&(window.__gullFrame=i)}if(typeof window<`u`){let e=0;for(let t of w)t.mesh.position.y>i&&e++;window.__waterLife={boats:d,breaching:e,gulls:+O[0].sp.material.opacity.toFixed(2),lights:+b.material.opacity.toFixed(2)}}}function R(){p.attributes.position.needsUpdate=!0}function z(){return N.length}let B=[...u.map((e,t)=>({kind:`boat`,label:e.isFerry?`ferry`:`boat ${t+1}`,getWorldPos:t=>t.copy(e.mesh.position),info:()=>e.isFerry?`boat · harbor ferry → docks`:`boat · open-water lane ${e.laneIndex}`})),...O.map((e,t)=>({kind:`gull`,label:`gull ${t+1}`,getWorldPos:t=>t.copy(e.sp.position),active:()=>e.sp.material.opacity>.05,info:()=>`gull · circling the coast`})),...w.map((e,t)=>({kind:`fish`,label:e.whale?`whale`:`fish ${t+1}`,getWorldPos:t=>t.copy(e.mesh.position),active:()=>e.mesh.position.y>i-.3,info:()=>e.mesh.position.y>i?e.whale?`whale · breaching!`:`fish · breaching!`:`fish · below the surface`}))];function ae(){return B}return{group:r,update:L,getFollowables:ae,wakeDrops:N,get wakeCount(){return z()},lanes:s,setRouter(e){ee=e||(e=>e.laneIndex)}}}var jt=[`empireState`,`chrysler`,`liberty`,`eiffel`,`arcDeTriomphe`,`sacreCoeur`,`tokyoTower`,`pagoda`,`neonBillboard`],Mt={empireState:1.25,chrysler:1.1,liberty:.55,eiffel:3.2,arcDeTriomphe:1.5,sacreCoeur:1.75,tokyoTower:1.35,pagoda:.5,neonBillboard:.9};function Nt(e){let t=()=>new x({flatShading:!0,roughness:.7,metalness:.1}),n=(n,r={})=>r.windows?K(t(),{color:n,id:e.id(),windowGlow:e.windowGlow,winColors:e.winColors,litFrac:e.litFrac}):q(t(),{color:n,glow:r.glow??null,glowDay:r.glowDay??0,glowNight:r.glowNight??1,windowGlow:r.glow?e.windowGlow:null});return{box:(e,t,r,i,a={})=>new S(new U(e,t,r),n(i,a)),cyl:(e,t,r,i,a={})=>new S(new D(e,t,r,a.seg||12),n(i,a)),cone:(e,t,r,i={})=>new S(new ne(e,t,i.seg||8),n(r,i)),sphere:(e,t,r={})=>new S(new se(e,r.seg||12,r.seg2||8),n(t,r)),lathe:(e,t,r={})=>new S(new p(e.map(e=>new W(e[0],e[1])),r.seg||4),n(t,r))}}var $=(e,t,n,r)=>(e.position.set(t,n,r),e),Pt=[`#7FB0E0`,`#E07FB0`,`#7FE0A0`,`#E0C97F`,`#9FE07F`,`#7FE0E0`,`#FF8C42`,`#E0E07F`,`#C97FE0`,`#E07F7F`,`#7F9FE0`,`#E0483A`],Ft={empireState(e,t){let n=`#E8E0CF`;e.add($(t.box(.42,.18,.42,n,{windows:!0}),0,.09,0)),e.add($(t.box(.34,.16,.34,n,{windows:!0}),0,.26,0)),e.add($(t.box(.26,.14,.26,n,{windows:!0}),0,.41,0)),e.add($(t.box(.19,.34,.19,n,{windows:!0}),0,.65,0)),e.add($(t.box(.13,.06,.13,n,{windows:!0}),0,.85,0));let r=Pt[new Date().getMonth()];e.add($(t.cyl(.03,.045,.12,n,{seg:10,glow:r,glowNight:1.85}),0,.94,0)),e.add($(t.cone(.012,.07,n,{seg:8}),0,1.04,0))},chrysler(e,t){let n=`#C9CED4`;e.add($(t.box(.22,.55,.22,`#9AA7B4`,{windows:!0}),0,.275,0));let r=.55;for(let i=0;i<5;i++){let a=.14-i*.024,o=.07;e.add($(t.cyl(a*.7,a,o,n,{seg:8,glow:`#dfeaff`,glowNight:.5}),0,r+o/2,0)),r+=o}e.add($(t.cone(.018,.16,n,{seg:8}),0,r+.08,0))},liberty(e,t){let n=`#B9B4A6`,r=`#4FA890`;e.add($(t.box(.42,.16,.42,n),0,.08,0)),e.add($(t.box(.3,.2,.3,n),0,.26,0)),e.add($(t.cyl(.1,.15,.42,r,{seg:10}),0,.57,0)),e.add($(t.box(.11,.1,.11,r),0,.83,0));for(let n=0;n<7;n++){let i=(n/6-.5)*Math.PI*1.1;e.add($(t.cone(.012,.1,r,{seg:5}),Math.sin(i)*.1,.92,Math.cos(i)*.06-.02))}let i=$(t.cyl(.025,.03,.34,r,{seg:8}),.14,.98,0);i.rotation.z=.35,e.add(i),e.add($(t.box(.06,.06,.06,r,{glow:`#ffd060`,glowDay:.6,glowNight:1.2}),.2,1.16,0)),e.add($(t.cone(.04,.09,`#ffcf66`,{seg:6,glow:`#ffd060`,glowDay:.7,glowNight:1.3}),.2,1.24,0))},eiffel(e,t){let n=`#6E5C4C`,r=[[.2,0],[.13,.16],[.085,.33],[.055,.5],[.035,.66],[.02,.85],[0,.92]];e.add(t.lathe(r,n,{seg:4}));let i=t.lathe(r,n,{seg:4});i.rotation.y=Math.PI/4,e.add(i),e.add($(t.box(.26,.025,.26,n),0,.33,0)),e.add($(t.box(.14,.02,.14,n),0,.66,0)),e.add($(t.cone(.01,.1,n,{seg:6}),0,.97,0))},arcDeTriomphe(e,t){let n=`#D9D0C1`,r=.58,i=.5,a=.34,o=new k;o.moveTo(-.58/2,0),o.lineTo(r/2,0),o.lineTo(r/2,i),o.lineTo(-.58/2,i),o.lineTo(-.58/2,0);let s=new le,c=.15,l=.22;s.moveTo(-.15,0),s.lineTo(-.15,l),s.absarc(0,l,c,Math.PI,0,!0),s.lineTo(c,0),s.lineTo(-.15,0),o.holes.push(s);let u=new y(o,{depth:a,bevelEnabled:!1});u.translate(0,0,-.34/2),u.computeVertexNormals(),e.add(new S(u,q(new x({color:n,flatShading:!0}),{color:n}))),e.add($(t.box(r*1.06,.08,a*1.06,n),0,.54,0))},sacreCoeur(e,t){let n=`#F1EEE6`;e.add($(t.box(.5,.26,.4,n),0,.13,0));let r=(r,i,a,o)=>{e.add($(t.cyl(a*.9,a,i,n,{seg:12}),r,o,0));let s=$(t.sphere(a,n,{seg:12}),r,o+i/2,0);s.scale.y=1.5,e.add(s)};r(0,.22,.15,.4),r(-.2,.1,.07,.33),r(.2,.1,.07,.33)},tokyoTower(e,t){let n=`#F25822`,r=`#EDEDED`,i=0;for(let a=0;a<9;a++){let o=a/9,s=(a+1)/9,c=.19*(1-o)+.03*o,l=.19*(1-s)+.03*s,u=.085,d=a%2?r:n;e.add($(t.cyl(l,c,u,d,{seg:4,glow:n,glowDay:0,glowNight:.7}),0,i+u/2,0)),i+=u}e.add($(t.box(.22,.02,.22,n,{glow:n,glowNight:.7}),0,.28,0)),e.add($(t.box(.12,.02,.12,r),0,.5,0)),e.add($(t.cone(.012,.16,r,{seg:6,glow:`#ff6a2a`,glowNight:.9}),0,i+.08,0))},pagoda(e,t){let n=0;for(let r=0;r<5;r++){let i=.42-r*.06,a=.11;e.add($(t.box(i,a,i,`#B23A2C`,{windows:r<4}),0,n+a/2,0)),e.add($(t.box(i*1.34,.03,i*1.34,`#7A3B2A`),0,n+a+.015,0)),n+=.16999999999999998}e.add($(t.cyl(.012,.012,.1,`#E0C040`,{seg:6}),0,n+.05,0)),e.add($(t.sphere(.03,`#E0C040`,{seg:8,glow:`#ffe680`,glowNight:.8}),0,n+.12,0))},neonBillboard(e,t){let n=`#20242C`;e.add($(t.box(.3,1,.3,n,{windows:!0}),0,.5,0));let r=[`#5AE8E0`,`#E85AA0`,`#E8E06A`],i=(n,r,i,a,o,s,c)=>{let l=$(t.box(n,r,.02,i,{glow:i,glowDay:.6,glowNight:1.1}),a,o,s);l.rotation.y=c,e.add(l)};i(.22,.34,r[0],0,.75,.16,0),i(.16,.5,r[1],.16,.5,0,Math.PI/2),i(.2,.22,r[2],0,.34,-.16,0),e.add($(t.cone(.01,.14,n,{seg:6,glow:`#E85AA0`,glowDay:.4,glowNight:1}),0,1.08,0))}};function It(e,t){let n=new a;return Ft[e](n,Nt(t)),n}var Lt=``+new URL(`building-skyscraper-d-CapD2Zqe.glb`,import.meta.url).href,Rt=``+new URL(`building-n-hdv8kKtN.glb`,import.meta.url).href,zt=``+new URL(`building-g-CsTB1qH9.glb`,import.meta.url).href,Bt=``+new URL(`colormap-CK8fW2HB.png`,import.meta.url).href,Vt={skyscraper:{url:Lt,color:`#9cc1dd`,fill:.92},midrise:{url:Rt,color:`#c9a07a`,fill:.96},setback:{url:zt,color:`#d9c7a0`,fill:.9}};function Ht({windowGlow:e}){let t=new f;t.setURLModifier(e=>e.includes(`colormap.png`)?Bt:e);let n=new V(t),r={},i=!1,a=Promise.all(Object.entries(Vt).map(async([e,t])=>{r[e]=(await n.loadAsync(t.url)).scene})).then(()=>{i=!0,window.__landmarksReady=!0}).catch(e=>console.error(`landmark models failed:`,e)),o=9e3;function s(t,n,i={}){let a,s;if(jt.includes(t))a=It(t,{windowGlow:e,winColors:i.winColors,litFrac:i.litFrac,id:()=>++o}),s=1;else{let e=r[t],n=Vt[t];if(!e||!n)return null;a=e.clone(!0),s=n.fill}a.updateMatrixWorld(!0);let c=new oe().setFromObject(a).getSize(new P);a.scale.setScalar(n.h*s/c.y),a.updateMatrixWorld(!0);let l=new oe().setFromObject(a),u=l.getCenter(new P);return a.position.x+=n.x-u.x,a.position.z+=n.z-u.z,a.position.y+=n.plinthTop-l.min.y,jt.includes(t)?a.traverse(e=>{e.isMesh&&(e.castShadow=!1,e.raycast=()=>{})}):a.traverse(n=>{if(!n.isMesh)return;n.castShadow=!1,n.raycast=()=>{};let r=n=>K(n.clone(),{color:Vt[t].color,id:++o,windowGlow:e,winColors:i.winColors,litFrac:i.litFrac});n.material=Array.isArray(n.material)?n.material.map(r):r(n.material)}),a}return{make:s,whenReady:a,heightFactor:e=>Mt[e]??1,get ready(){return i}}}var Ut=[`clear`,`rain`,`snow`,`fog`];function Wt({extent:e=7}={}){let t=new a;t.raycast=()=>{};let n=e+2,r=.25,i=(e,t)=>e+Math.random()*(t-e),o=new R(new w(.015,.5),new c({color:`#a9bdd6`,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),600);o.frustumCulled=!1,o.raycast=()=>{};let l=new Float32Array(600*3),u=new Float32Array(600);for(let e=0;e<600;e++)l[e*3]=i(-n,n),l[e*3+1]=i(r,11),l[e*3+2]=i(-n,n),u[e]=i(9,14);let d=new R(new w(.07,.07),new c({color:`#f3f7ff`,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),700);d.frustumCulled=!1,d.raycast=()=>{};let f=new Float32Array(700*3),p=new Float32Array(700),m=new Float32Array(700);for(let e=0;e<700;e++)f[e*3]=i(-n,n),f[e*3+1]=i(r,11),f[e*3+2]=i(-n,n),p[e]=i(0,6.28),m[e]=i(.6,1.2);t.add(o,d);let h=Array.from({length:8},()=>new P),g=0,_=`clear`,v=0,y=0,b=0,x=0,S=0,C=new s,T=(e,t,n,r)=>e+(t-e)*Math.min(1,n*r);function E(e){Ut.includes(e)&&(_=e)}function D(){_=Ut[(Ut.indexOf(_)+1)%Ut.length]}function O(e,t){let a=_===`rain`,s=_===`snow`,c=_===`fog`,w=_!==`clear`;v=T(v,+!!w,e,1.4),y=T(y,+!!w,e,1.2),b=T(b,+!!c,e,.9),S=T(S,w&&!c?1:0,e,1),x=T(x,+!!s,e,s?.22:.5);let E=a?v:0,D=Math.round(600*E);for(let t=0;t<600;t++){if(t>=D){C.position.set(0,-50,0),C.scale.setScalar(0),C.updateMatrix(),o.setMatrixAt(t,C.matrix);continue}l[t*3+1]-=u[t]*e,l[t*3]+=e*1.1,l[t*3+1]<r&&(l[t*3]=i(-n,n),l[t*3+1]=11,l[t*3+2]=i(-n,n)),C.position.set(l[t*3],l[t*3+1],l[t*3+2]),C.rotation.set(0,0,0),C.scale.set(1,1,1),C.updateMatrix(),o.setMatrixAt(t,C.matrix)}o.instanceMatrix.needsUpdate=!0,o.material.opacity=.55*E,g=a?Math.round(8*v):0;for(let e=0;e<g;e++)h[e].set(Math.random(),Math.random(),.05*v);let O=Math.round(700*(s?v:0));for(let a=0;a<700;a++){if(a>=O){C.position.set(0,-50,0),C.scale.setScalar(0),C.updateMatrix(),d.setMatrixAt(a,C.matrix);continue}f[a*3+1]-=m[a]*e;let o=Math.sin(t*1.5+p[a])*.5;f[a*3+1]<r&&(f[a*3]=i(-n,n),f[a*3+1]=11,f[a*3+2]=i(-n,n)),C.position.set(f[a*3]+o,f[a*3+1],f[a*3+2]),C.rotation.set(0,0,0),C.scale.setScalar(1),C.updateMatrix(),d.setMatrixAt(a,C.matrix)}d.instanceMatrix.needsUpdate=!0,d.material.opacity=.9*(s?v:0)}return{group:t,update:O,cycle:D,setKind:E,rainDrops:h,get kind(){return _},get intensity(){return v},get overcast(){return y},get fog(){return b},get snow(){return x},get cloud(){return S},get rainDropCount(){return g},poolCounts:{rain:600,snow:700}}}function Gt(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=(e,n,r)=>{let i=t.createRadialGradient(e,n,0,e,n,r);i.addColorStop(0,`rgba(255,255,255,0.95)`),i.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=i,t.beginPath(),t.arc(e,n,r,0,7),t.fill()};n(128*.42,128*.56,128*.26),n(128*.6,128*.5,128*.3),n(128*.5,128*.46,128*.22),n(128*.34,128*.54,128*.18),n(128*.7,128*.58,128*.18);let r=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5],i=t.getImageData(0,0,128,128),a=i.data;for(let e=0;e<128;e++)for(let t=0;t<128;t++){let n=(e*128+t)*4,i=a[n+3]/255,o=(r[e%4*4+t%4]+.5)/16-.5;a[n+3]=Math.max(0,Math.min(1,Math.floor(i*5+.5+o)/5))*255}t.putImageData(i,0,0);let o=new he(e);return o.colorSpace=H,o}function Kt({extent:e=8,count:t=16}={}){let n=new a;n.raycast=()=>{};let r=Gt(),i=e+6,o=(e,t)=>e+Math.random()*(t-e),s=[];for(let e=0;e<t;e++){let e=new M({map:r,transparent:!0,depthWrite:!1,opacity:0,fog:!0}),t=new fe(e),a={sp:t,mat:e,wisp:Math.random(),x:o(-i,i),z:o(-i,i),hiY:o(4,6.8),loY:o(.6,2.2),w:o(3,5.6),h:o(1.7,3),speed:o(.25,.7),op:o(.6,1)};t.raycast=()=>{},s.push(a),n.add(t)}let c=new I,l=new I(`#ffffff`),u=new I(`#5b626e`);function d(e,t,n,r){let a=r?r.cloud:0,d=r?r.fog:0,f=Math.min(1,.4+.6*a+.5*d);c.copy(n.sky).lerp(l,.62),c.lerp(u,.6*a);for(let n=0;n<s.length;n++){let r=s[n],l=n/s.length<f;r.x+=r.speed*e*(.6+.8*a),r.x>i&&(r.x=-i,r.z=o(-i,i));let u=Math.min(qt(r.x,-i,-i+3),1-qt(r.x,i-3,i)),p=r.hiY*(1-d)+r.loY*d,m=1-.5*r.wisp,h=.72*Math.max(0,1-d-a)+1*a+.42*d,g=l?Math.max(0,h)*r.op*m*u:0;r.mat.opacity+=(g-r.mat.opacity)*Math.min(1,e*2.5),r.mat.color.copy(c);let _=r.w*(1+.6*d)*(1+.4*r.wisp),v=r.h*(1-.35*d);r.sp.scale.set(_,v,1),r.sp.position.set(r.x,p+Math.sin(t*.3+n)*.15,r.z)}}function f(e){r=e;for(let t of s)t.mat.map=e,t.mat.needsUpdate=!0}let p=s.map((e,t)=>({kind:`cloud`,label:`cloud ${t+1}`,getWorldPos:t=>t.copy(e.sp.position),active:()=>e.mat.opacity>.06,info:()=>`cloud · ${e.wisp>.6?`wispy`:`puffy`} · drifting east${e.sp.position.y<3?` (low mist)`:``}`}));function m(){return p}return{group:n,update:d,setTexture:f,getFollowables:m,get count(){return s.length}}}function qt(e,t,n){let r=Math.max(0,Math.min(1,(e-t)/(n-t)));return r*r*(3-2*r)}var Jt={person:4.5,car:6,gull:6,fish:8,boat:9,cloud:16};function Yt({rig:e,getCamera:t,sources:n=[]}){let r=null,i=new P,a=new P,o=()=>{let e=[];for(let t of n)if(t&&t.getFollowables){let n=t.getFollowables();n&&e.push(...n)}return e},s=e=>!e.active||e.active();function c(t){return t?(r=t,e.setFollow(e=>t.getWorldPos(e),{frame:t.frame??Jt[t.kind]??8}),t):null}function l(){r=null,e.clearFollow()}function u(e,n,r=.14){let l=t(),u=null,d=r;for(let t of o()){if(!s(t)||(t.getWorldPos(i),a.copy(i).project(l),a.z>1||a.z<-1))continue;let r=Math.hypot(a.x-e,a.y-n);r<d&&(d=r,u=t)}return u?c(u):null}function d(e=1,t=null){let n=o().filter(e=>(!t||e.kind===t)&&s(e));if(t||(n=Xt(n)),!n.length)return null;let i=r?n.indexOf(r):-1;return i=((i+e)%n.length+n.length)%n.length,c(n[i])}function f(){r&&r.active&&!r.active()&&l()}return{pickAt:u,cycle:d,follow:c,release:l,prune:f,get focus(){return r},get count(){return o().length},get readout(){return r?{kind:r.kind,label:r.label,info:r.info?r.info():``}:null}}}function Xt(e){let t=new Map;for(let n of e)t.has(n.kind)||t.set(n.kind,[]),t.get(n.kind).push(n);let n=[...t.values()],r=[];for(let e=0,t=!0;t;e++){t=!1;for(let i of n)e<i.length&&(r.push(i[e]),t=!0)}return r}function Zt(e){let t=Ze(e>>>0),n=new Uint8Array(256);for(let e=0;e<256;e++)n[e]=e;for(let e=255;e>0;e--){let r=t()*(e+1)|0,i=n[e];n[e]=n[r],n[r]=i}let r=new Uint8Array(512);for(let e=0;e<512;e++)r[e]=n[e&255];let i=e=>e*e*e*(e*(e*6-15)+10),a=(e,t,n)=>e+(t-e)*n,o=(e,t,n)=>{let r=e&4?n:t,i=e&4?t:n;return(e&1?-r:r)+(e&2?-i:i)};return(e,t)=>{let n=Math.floor(e)&255,s=Math.floor(t)&255,c=e-Math.floor(e),l=t-Math.floor(t),u=i(c),d=i(l),f=r[r[n]+s],p=r[r[n]+s+1],m=r[r[n+1]+s],h=r[r[n+1]+s+1];return a(a(o(f,c,l),o(m,c-1,l),u),a(o(p,c,l-1),o(h,c-1,l-1),u),d)}}function Qt(e,t,n,r,i,a){let o=.5,s=1,c=0,l=0;for(let u=0;u<r;u++)c+=o*e(t*s,n*s),l+=o,o*=a,s*=i;return c/l}function $t(e,t,n,r,i,a){let o=.5,s=1,c=0,l=0;for(let u=0;u<r;u++){let r=1-Math.abs(e(t*s,n*s));r*=r,c+=o*r,l+=o,o*=a,s*=i}return c/l}var en=(e,t,n)=>(n=Math.max(0,Math.min(1,(n-e)/(t-e))),n*n*(3-2*n)),tn=[{key:`ocean`,color:`#2a5b7a`},{key:`beach`,color:`#d8c89a`},{key:`grassland`,color:`#6f9a4e`},{key:`forest`,color:`#3f6b3a`},{key:`hills`,color:`#8a8a55`},{key:`rock`,color:`#7d7468`},{key:`snow`,color:`#eef2f6`}],nn=Object.fromEntries(tn.map((e,t)=>[e.key,t]));function rn(e,t,n){if(e<n-.015)return nn.ocean;if(e<n+.02)return nn.beach;let r=(e-n)/(1-n);return r>.82?nn.snow:r>.6?nn.rock:r>.34?t>.45?nn.forest:nn.hills:t>.55?nn.forest:nn.grassland}var an={valley:{freq:2.3,mtnMask:.3,mtnGain:.55,sea:.3,relief:7.5,warp:.9},archipelago:{freq:3.4,mtnMask:.18,mtnGain:.4,sea:.5,relief:6,warp:1.3},mountains:{freq:2,mtnMask:.62,mtnGain:.85,sea:.26,relief:11,warp:.8},plains:{freq:1.8,mtnMask:.12,mtnGain:.3,sea:.28,relief:4.5,warp:.7}},on=Object.keys(an);function sn({seed:e=1,size:t=160,preset:n=`valley`,params:r=null}={}){let i=r||an[n]||an.valley,a=Zt(e*2+1),o=Zt(e*5+9),s=Zt(e*7+13),c=Zt(e*3+5),l=new Float32Array(t*t),u=new Uint8Array(t*t),d=1/0,f=-1/0;for(let e=0;e<t;e++)for(let n=0;n<t;n++){let r=(n/t-.5)*i.freq,p=(e/t-.5)*i.freq,m=r+i.warp*Qt(c,r+5.2,p+1.3,4,2,.5),h=p+i.warp*Qt(c,r+9.7,p+4.1,4,2,.5),g=Qt(a,m,h,6,2,.5)*.5+.5,_=en(.45,.75,Qt(o,r*.5,p*.5,3,2,.5)*.5+.5),v=$t(a,m*1.7+11,h*1.7+7,5,2,.5);g=g*(1-_*i.mtnMask)+v*(_*i.mtnMask*(.6+i.mtnGain));let y=n/t-.5,b=e/t-.5,x=Math.sqrt(y*y+b*b)*2;g-=en(.62,1,x)*.55,g=Math.max(0,Math.min(1,g));let S=Qt(s,r*.8+3,p*.8+8,4,2,.5)*.5+.5,C=e*t+n;l[C]=g,u[C]=rn(g,S,i.sea),g<d&&(d=g),g>f&&(f=g)}return{size:t,height:l,biome:u,sea:i.sea,relief:i.relief,minH:d,maxH:f,params:i,seed:e,preset:n}}function cn(e,{worldSize:t=26,baseY:n=0,chunks:r=4}={}){let{size:i,height:o,biome:s,sea:c,relief:l}=e,u=new a,d=new I,f=tn.map(e=>new I(e.color)),p=t/(i-1),m=t/2,h=e=>e*p-m,g=e=>e*p-m,_=e=>n+(e-c)*l,v=Math.ceil((i-1)/r),y=new P,b=new P,C=new P;for(let e=0;e<r;e++)for(let t=0;t<r;t++){let n=t*v,r=e*v,a=Math.min(n+v,i-1),c=Math.min(r+v,i-1);if(a<=n||c<=r)continue;let l=(a-n)*(c-r)*6,p=new Float32Array(l*3),m=new Float32Array(l*3),w=new Float32Array(l*3),T=0,E=(e,t,n,r,i,a,o)=>{p[T*3]=e,p[T*3+1]=t,p[T*3+2]=n,m[T*3]=r,m[T*3+1]=i,m[T*3+2]=a,w[T*3]=o.r,w[T*3+1]=o.g,w[T*3+2]=o.b,T++},D=(e,t,n,r,i,a,o,s,c,l)=>{y.set(r-e,i-t,a-n),b.set(o-e,s-t,c-n),C.crossVectors(y,b).normalize(),E(e,t,n,C.x,C.y,C.z,l),E(r,i,a,C.x,C.y,C.z,l),E(o,s,c,C.x,C.y,C.z,l)};for(let e=r;e<c;e++)for(let t=n;t<a;t++){let n=o[e*i+t],r=o[e*i+t+1],a=o[(e+1)*i+t],c=o[(e+1)*i+t+1],l=h(t),u=h(t+1),p=g(e),m=g(e+1),v=_(n),y=_(r),b=_(a),x=_(c),S=f[s[e*i+t]],C=f[s[(e+1)*i+t+1]];D(l,v,p,l,b,m,u,y,p,d.copy(S)),D(u,y,p,l,b,m,u,x,m,d.copy(C))}let O=new ie;O.setAttribute(`position`,new j(p,3)),O.setAttribute(`normal`,new j(m,3)),O.setAttribute(`color`,new j(w,3));let k=new S(O,new x({vertexColors:!0,roughness:.92,metalness:0,flatShading:!0}));k.castShadow=!0,k.receiveShadow=!0,k.raycast=()=>{},u.add(k)}return u.userData.dispose=()=>u.traverse(e=>{e.isMesh&&(e.geometry.dispose(),e.material.dispose())}),u}var ln={beach:[{type:`rock`,density:.05,maxSlope:1.4}],grassland:[{type:`tree`,density:.1,maxSlope:.7},{type:`tuft`,density:.3,maxSlope:.9}],forest:[{type:`tree`,density:.62,maxSlope:.8},{type:`rock`,density:.03,maxSlope:1.2}],hills:[{type:`tree`,density:.14,maxSlope:.7},{type:`rock`,density:.16,maxSlope:1.6}],rock:[{type:`rock`,density:.22,maxSlope:2}]};function un({terrain:e,seed:t=1,worldSize:n=26,baseY:r=0,biomeKeys:i,density:a=1,max:o=9e3}={}){let{size:s,height:c,biome:l,sea:u,relief:d}=e,f=Ze((t^97155048)>>>0),p=n/(s-1),m=n/2,h=e=>r+(e-u)*d,g=(e,t)=>{let n=Math.max(1,Math.min(s-2,e)),r=Math.max(1,Math.min(s-2,t)),i=(c[r*s+n+1]-c[r*s+n-1])*d/(2*p),a=(c[(r+1)*s+n]-c[(r-1)*s+n])*d/(2*p);return Math.hypot(i,a)},_={tree:[],rock:[],tuft:[]};for(let e=1;e<s-1;e+=2)for(let t=1;t<s-1;t+=2){let n=e*s+t,r=c[n];if(r<u+.005)continue;let d=ln[i[l[n]]];if(!d)continue;let v=g(t,e);for(let n of d){let i=f();if(v>n.maxSlope||i>n.density*a)continue;let s=_[n.type];if(s.length>=o)continue;let c=(f()-.5)*p*2,l=(f()-.5)*p*2,u=t*p-m+c,d=e*p-m+l;s.push({x:u,y:h(r),z:d,s:.7+f()*.6,r:f()*Math.PI*2,t:.82+f()*.36})}}return{placements:_,counts:{tree:_.tree.length,rock:_.rock.length,tuft:_.tuft.length}}}function dn(e,t){let n=new I(t),r=e.attributes.position.count,i=new Float32Array(r*3);for(let e=0;e<r;e++)i[e*3]=n.r,i[e*3+1]=n.g,i[e*3+2]=n.b;return e.setAttribute(`color`,new j(i,3)),e}function fn(e){let t=0;for(let n of e)t+=n.attributes.position.count;let n=new Float32Array(t*3),r=new Float32Array(t*3),i=new Float32Array(t*3),a=0;for(let t of e)n.set(t.attributes.position.array,a*3),r.set(t.attributes.normal.array,a*3),i.set(t.attributes.color.array,a*3),a+=t.attributes.position.count;let o=new ie;return o.setAttribute(`position`,new j(n,3)),o.setAttribute(`normal`,new j(r,3)),o.setAttribute(`color`,new j(i,3)),o}function pn(){return fn([dn(new D(.045,.06,.34,6).translate(0,.17,0).toNonIndexed(),`#5b3f28`),dn(new ne(.3,.55,7).translate(0,.55,0).toNonIndexed(),`#3f7d3a`),dn(new ne(.22,.42,7).translate(0,.85,0).toNonIndexed(),`#4f9046`)])}function mn(){let e=new z(.18,0).toNonIndexed(),t=e.attributes.position,n=Ze(3098);for(let e=0;e<t.count;e++){let r=.78+n()*.5;t.setXYZ(e,t.getX(e)*r,t.getY(e)*r*.8,t.getZ(e)*r)}return e.computeVertexNormals(),dn(e,`#7d7468`)}function hn(){return dn(new ne(.06,.16,4).translate(0,.08,0).toNonIndexed(),`#6f9a4e`)}function gn(r){let i=new a;i.raycast=()=>{};let o={tree:pn(),rock:mn(),tuft:hn()},s={tree:0,rock:-.05,tuft:0},c=new n,l=new e,u=new P,d=new P,f=new P(0,1,0),p=new I;for(let e of[`tree`,`rock`,`tuft`]){let n=r[e];if(!n||!n.length)continue;let a=new x({vertexColors:!0,roughness:.9,metalness:0,flatShading:!0}),m=new R(o[e],a,n.length);m.castShadow=!0,m.receiveShadow=!1,m.frustumCulled=!0,m.raycast=()=>{},m.instanceColor=new t(new Float32Array(n.length*3),3);for(let t=0;t<n.length;t++){let r=n[t];u.set(r.x,r.y+s[e],r.z),l.setFromAxisAngle(f,r.r),d.setScalar(r.s),c.compose(u,l,d),m.setMatrixAt(t,c),m.setColorAt(t,p.setScalar(r.t))}m.instanceMatrix.needsUpdate=!0,m.instanceColor&&(m.instanceColor.needsUpdate=!0),i.add(m)}return i.userData.dispose=()=>i.traverse(e=>{e.isInstancedMesh&&(e.geometry.dispose(),e.material.dispose())}),i}function _n({terrain:e,seed:t,worldSize:n,baseY:r,biomeKeys:i,density:a,max:o}){let{placements:s,counts:c}=un({terrain:e,seed:t,worldSize:n,baseY:r,biomeKeys:i,density:a,max:o}),l=gn(s);return l.userData.counts=c,l}function vn(e,{worldSize:t=26,baseY:n=0,maxLakes:r=3}={}){let{size:i,height:a,sea:o,relief:s,maxH:c}=e,l=Math.floor((i-1)/3),u=t/(i-1),d=t/2,f=(e,t)=>a[t*3*i+e*3],p=e=>e*3*u-d,m=e=>e*3*u-d,h=e=>e>o+.02,g=o+.55*Math.max(.001,c-o),_=[];for(let e=2;e<l-2;e++)for(let t=2;t<l-2;t++){let n=f(t,e);if(!h(n)||n>g)continue;let r=!0;for(let i=-1;i<=1&&r;i++)for(let a=-1;a<=1;a++)if((a||i)&&f(t+a,e+i)<n){r=!1;break}r&&_.push({gi:t,gj:e,h:n})}_.sort((e,t)=>e.h-t.h);let v=new Uint8Array(l*l),y=[];for(let e of _){if(y.length>=r)break;if(v[e.gj*l+e.gi])continue;let t=e.h+.045,i=[[e.gi,e.gj]],a=new Set,c=!0,d=0,h=0,g=0,_=[];for(;i.length;){let[e,n]=i.pop(),r=n*l+e;if(a.has(r))continue;if(a.add(r),e<=0||e>=l-1||n<=0||n>=l-1){c=!1;continue}let s=f(e,n);if(s<o){c=!1;continue}if(!(s>=t)){if(_.push(r),d+=e,h+=n,g++,g>520){c=!1;break}i.push([e+1,n],[e-1,n],[e,n+1],[e,n-1])}}if(!c||g<5)continue;for(let e of _)v[e]=1;let b=d/g,x=h/g,S=3*u,C=g*S*S,w=.82*Math.sqrt(C/Math.PI);y.push({cx:p(b),cz:m(x),y:n+(t-o)*s,radius:w,area:C})}return y}function yn(e,{material:t}={}){let n=new a;n.raycast=()=>{};let r=t||new x({color:`#3f6f8c`,roughness:.08,metalness:.35,transparent:!0,opacity:.88});for(let t of e){let e=new S(new ce(t.radius,28),r);e.rotation.x=-Math.PI/2,e.position.set(t.cx,t.y+.012,t.cz),e.receiveShadow=!1,e.castShadow=!1,e.raycast=()=>{},n.add(e)}return n.userData.dispose=()=>n.traverse(e=>{e.isMesh&&e.geometry.dispose()}),n.userData.count=e.length,n}function bn(e,t={}){let n=vn(e,t),r=yn(n,t);return r.userData.lakes=n,r}function xn({scale:e=90}={}){let t=new pe;t.scale.setScalar(e),t.frustumCulled=!1,t.raycast=()=>{},t.visible=!1;let n=t.material.uniforms;n.turbidity.value=2.2,n.rayleigh.value=1.3,n.mieCoefficient.value=.005,n.mieDirectionalG.value=.78;function r(e){n.sunPosition.value.copy(e)}function i(e){e&&(e.turbidity!=null&&(n.turbidity.value=e.turbidity),e.rayleigh!=null&&(n.rayleigh.value=e.rayleigh),e.mie!=null&&(n.mieCoefficient.value=e.mie),e.mieG!=null&&(n.mieDirectionalG.value=e.mieG))}let a=null,o=null,s=null,c=null;function l(t){if(typeof document>`u`||!t)return null;a||(a=new ue(t),o=new de,s=new pe,s.scale.setScalar(e),o.add(s));let r=s.material.uniforms;return r.turbidity.value=n.turbidity.value,r.rayleigh.value=n.rayleigh.value,r.mieCoefficient.value=n.mieCoefficient.value,r.mieDirectionalG.value=n.mieDirectionalG.value,r.sunPosition.value.copy(n.sunPosition.value),c&&c.dispose(),c=a.fromScene(o),c.texture}return{mesh:t,setSun:r,setParams:i,buildEnv:l,get material(){return t.material}}}var Sn=`attribute float aSize;
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
}`,Cn=`precision highp float;

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
}`,wn={realistic:0,charm:0,pixel:2,vector:1},Tn={realistic:1,charm:1,pixel:1.9,vector:1.2};function En({seed:e=1517,count:t=340,spreadX:n=21,yLo:i=3,yHi:s=18,zBase:c=7.2}={}){let l=new a;l.raycast=()=>{};let u=Ze(e>>>0),d=new Float32Array(t*3),f=new Float32Array(t),p=new Float32Array(t),m=new Float32Array(t),h=[];for(let e=0;e<t;e++){let t=(u()*2-1)*n,r=i+u()*(s-i),a=-c-u()*.7;d[e*3]=t,d[e*3+1]=r,d[e*3+2]=a;let o=.35+u()*.65;p[e]=o,f[e]=1.6+u()*2.8+(o>.85?2.2:0),m[e]=u()*Math.PI*2,o>.82&&h.push([t,r,a])}let _=new ie;_.setAttribute(`position`,new j(d,3)),_.setAttribute(`aSize`,new j(f,1)),_.setAttribute(`aBright`,new j(p,1)),_.setAttribute(`aPhase`,new j(m,1));let v=new L({vertexShader:Sn,fragmentShader:Cn,uniforms:{uTime:{value:0},uTwinkle:{value:1},uSizeScale:{value:1},uColor:{value:new I(`#eaf0ff`)},uNight:{value:0},uMode:{value:0}},transparent:!0,depthWrite:!1,blending:2,fog:!1,toneMapped:!1}),y=new E(_,v);y.raycast=()=>{},y.frustumCulled=!1,l.add(y);let b=[];if(h.length>6)for(let e=0;e<3;e++){let e=Math.floor(u()*h.length);for(let t=0;t<3;t++){let t=h[e],n=h[(e+1+Math.floor(u()*2))%h.length];b.push(t[0],t[1],t[2],n[0],n[1],n[2]),e=(e+1)%h.length}}let x=[[[0,2],[0,0]],[[0,0],[.7,0]],[[2.1,2],[1.4,2]],[[1.4,2],[1.4,0]],[[1.4,0],[2.1,0]],[[2.1,0],[2.1,1]],[[2.1,1],[1.7,1]],[[2.8,0],[2.8,2]],[[2.8,2],[3.5,2]],[[3.5,2],[3.5,1]],[[3.5,1],[2.8,1]],[[2.8,1],[3.6,0]]],S=-c-.4,C=.62;for(let[[e,t],[n,r]]of x)b.push(-3+e*C,12+t*C,S,-3+n*C,12+r*C,S);let w=new ie;w.setAttribute(`position`,new r(b,3));let T=new o(w,new g({color:`#9fb6e8`,transparent:!0,opacity:0,depthWrite:!1,fog:!1,toneMapped:!1}));T.raycast=()=>{},T.frustumCulled=!1,l.add(T);let D=new fe(new M({map:Dn(),transparent:!0,opacity:0,depthWrite:!1,blending:2,fog:!1,toneMapped:!1}));D.raycast=()=>{},D.scale.set(n*2.4,n*.95,1),D.position.set(2,12,-c-.7),D.material.rotation=-.5,D.renderOrder=-3,l.add(D);let O=-1;function k(e,t=`realistic`,n=0,r=!1){v.uniforms.uTime.value=n,v.uniforms.uTwinkle.value=+!r,v.uniforms.uNight.value=e;let i=wn[t]??0;i!==O&&(v.uniforms.uMode.value=i,O=i),v.uniforms.uSizeScale.value=Tn[t]??1,T.material.opacity=e*.5,D.material.opacity=e*.32,l.visible=e>.001}return{group:l,update:k}}function Dn(){let e=document.createElement(`canvas`);e.width=e.height=256;let t=e.getContext(`2d`),n=t.createRadialGradient(256/2,256/2,0,256/2,256/2,256/2);n.addColorStop(0,`rgba(150,170,230,0.5)`),n.addColorStop(.4,`rgba(120,130,200,0.22)`),n.addColorStop(1,`rgba(90,100,160,0)`),t.fillStyle=n,t.fillRect(0,0,256,256);let r=Ze(20145);for(let e=0;e<7;e++){let e=40+r()*176,n=70+r()*116,i=14+r()*30,a=t.createRadialGradient(e,n,0,e,n,i);a.addColorStop(0,`rgba(200,210,255,0.18)`),a.addColorStop(1,`rgba(200,210,255,0)`),t.fillStyle=a,t.beginPath(),t.arc(e,n,i,0,Math.PI*2),t.fill()}let i=new he(e);return i.colorSpace=H,i}var On=Math.PI*2;function kn(e){let t=document.createElement(`canvas`);t.width=t.height=128;let n=t.getContext(`2d`),r=n.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return r.addColorStop(0,`#ffffff`),r.addColorStop(.34,`#fffaf0`),r.addColorStop(.66,e),r.addColorStop(.86,e),r.addColorStop(1,`rgba(255,255,255,0)`),n.fillStyle=r,n.beginPath(),n.arc(128/2,128/2,128/2,0,On),n.fill(),In(t,!0)}function An(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);n.addColorStop(0,`#ffffff`),n.addColorStop(.4,`#eef3ff`),n.addColorStop(.82,`#c4cee6`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,128/2,0,On),t.fill(),t.globalAlpha=.14,t.fillStyle=`#8b97b4`;for(let[e,n,r]of[[54,50,9],[78,66,7],[60,82,5]])t.beginPath(),t.arc(e,n,r,0,On),t.fill();return In(e,!0)}function jn(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`);t.translate(128/2,128/2),t.fillStyle=`rgba(255,210,120,0.9)`;for(let e=0;e<12;e++)t.rotate(On/12),t.beginPath(),t.moveTo(0,-28),t.lineTo(7,-54),t.lineTo(-7,-54),t.closePath(),t.fill();let n=t.createRadialGradient(0,0,0,0,0,32);return n.addColorStop(0,`#ffffff`),n.addColorStop(.4,`#fff1c8`),n.addColorStop(.8,`#ffb24a`),n.addColorStop(1,`#ff8a2a`),t.fillStyle=n,t.beginPath(),t.arc(0,0,32,0,On),t.fill(),In(e,!0)}function Mn(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,46);n.addColorStop(0,`#ffffff`),n.addColorStop(.5,`#e6ecfb`),n.addColorStop(1,`#c2cce4`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,46,0,On),t.fill(),t.fillStyle=`#aab6d2`;for(let[e,n,r]of[[52,48,11],[80,62,8],[58,82,7],[40,66,5]])t.beginPath(),t.arc(e,n,r,0,On),t.fill();return In(e,!0)}function Nn(e,t,n){let r=document.createElement(`canvas`);r.width=r.height=144;let i=r.getContext(`2d`),a=17/2,o=18/2-.5;for(let r=0;r<18;r++)for(let s=0;s<18;s++){let c=Math.hypot(s-a,r-a);c>o||(i.fillStyle=c<o*.45?e:c<o*.78?t:n,i.fillRect(Math.round(s*8),Math.round(r*8),8,8))}return In(r,!1)}function Pn(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return n.addColorStop(0,`rgba(255,255,255,0.9)`),n.addColorStop(.38,`rgba(255,255,255,0.3)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,128/2,0,On),t.fill(),In(e,!0)}function Fn(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2),r=`20,30,48`;return n.addColorStop(0,`rgba(${r},0)`),n.addColorStop(.42,`rgba(${r},0)`),n.addColorStop(.6,`rgba(${r},0.6)`),n.addColorStop(1,`rgba(${r},0)`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,128/2,0,On),t.fill(),In(e,!0)}function In(e,t){let n=new he(e);return n.colorSpace=H,t||(n.magFilter=C,n.minFilter=C),n}var Ln=(e,t,n)=>{let r=Math.max(0,Math.min(1,(e-t)/(n-t)));return r*r*(3-2*r)};function Rn({skyW:e=15,skyY0:t=3.4,skyH:n=3.8,z:r=-7.8,biasX:i=4.5,sunSize:o=4.6,moonSize:s=4}={}){let c=new a;c.raycast=()=>{};let l=(e,t)=>{let n=new fe(new M({map:e,transparent:!0,depthWrite:!1,fog:!1,toneMapped:!1,...t?{blending:2}:{}}));return n.raycast=()=>{},n},u={realistic:kn(`#ffcf8a`),charm:jn(),pixel:Nn(`#fff6e0`,`#ffc24a`,`#ff8a2a`)},d={realistic:An(),charm:Mn(),pixel:Nn(`#ffffff`,`#cdd6ee`,`#9aa6c6`)},f=Pn(),p=l(Fn(),!1),m=l(f,!0),h=l(u.realistic),g=l(f,!0),_=l(d.realistic);p.renderOrder=-2,m.renderOrder=-1,c.add(p,m,h,g,_);let v=En({});v.group.renderOrder=-4,c.add(v.group);let y=typeof window<`u`&&window.matchMedia?window.matchMedia(`(prefers-reduced-motion: reduce)`):null,b={realistic:{sunGlow:3,sunGlowOp:.7,moonGlow:2.6,moonGlowOp:.5,sizeMul:1,sunHaloOp:.85},charm:{sunGlow:2.2,sunGlowOp:.55,moonGlow:2.1,moonGlowOp:.42,sizeMul:1.08,sunHaloOp:.7},pixel:{sunGlow:1.7,sunGlowOp:.4,moonGlow:1.7,moonGlowOp:.32,sizeMul:1,sunHaloOp:.6}},x=`realistic`;function S(e){e===x||!b[e]||(x=e,h.material.map=u[e],h.material.needsUpdate=!0,_.material.map=d[e],_.material.needsUpdate=!0)}new I;let C=new I(`#fff3df`),w=new I(`#ffb060`),T=new I(`#ff6a2a`),E=new I(`#eef2ff`),D=new I(`#9fbcff`);function O(a,c,l,u,d=`realistic`){S(d);let f=b[x],O=l.sunArc,k=u?Math.min(1,(u.cloud||0)*.85+(u.fog||0)*.7):0,A=O.y,j=Ln(A,-.04,.1)*(1-.7*k),M=1-Ln(Math.abs(A),.02,.5);h.position.set(O.x*e+i,t+O.y*n,r),m.position.copy(h.position);let N=o*f.sizeMul*(1+.55*M);h.scale.setScalar(N),m.scale.setScalar(N*f.sunGlow),h.material.color.copy(C),m.material.color.copy(w).lerp(T,M),h.material.opacity=j,m.material.opacity=j*f.sunGlowOp*(.7+.5*M),p.position.copy(h.position),p.scale.setScalar(N*1.7),p.material.opacity=j*(1-M)*f.sunHaloOp;let P=Ln(-O.y,-.04,.1)*(1-.65*k);_.position.set(-O.x*e+i,t+-O.y*n,r),g.position.copy(_.position);let ee=s*f.sizeMul;_.scale.setScalar(ee),g.scale.setScalar(ee*f.moonGlow),_.material.color.copy(E),g.material.color.copy(D),_.material.opacity=P,g.material.opacity=P*f.moonGlowOp;let te=Ln(-O.y,-.05,.18)*(1-.85*k);v.update(te,d,c,!!(y&&y.matches))}return{group:c,update:O}}var zn=`varying vec2 vUv;

void main() {
  
  
  
  vUv = uv;

  
  
  
  
  
  
  
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,Bn=`precision highp float;

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
}`,Vn=`varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0); 
}`,Hn=`precision highp float;

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
}`,Un=`precision highp float;

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
}`,Wn=`precision highp float;

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
}`,Gn=`const float CA_STRENGTH   = 0.0030;  
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
  if (uAces > 0.5) col = aces(col);              

  /* L67 COLOUR GRADE (display-referred, AFTER ACES, beauty-tier only) — pulls every surface into ONE
     art-directed mood: a saturation tweak, a hue-tinted gain, and a small shadow lift. Keyframed by the
     SunRig (warm dawn/dusk, clean noon, cool-moody night). uGrade = 0 on the pixel/toon pre-pass → no-op. */
  if (uGrade > 0.5) {
    float l = dot(col, vec3(0.2126, 0.7152, 0.0722));     
    col = mix(vec3(l), col, uGradeSat);                   
    col = col * uGradeTint + uGradeLift * (1.0 - col);    
    col = clamp(col, 0.0, 1.0);
  }

  gl_FragColor = vec4(col, 1.0);
}`,Kn=`const float DITHER = 0.55;   

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
}`,qn=`precision highp float;

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
}`,Jn=`precision highp float;

varying vec2 vUv;
uniform sampler2D uToon;   
uniform sampler2D uPixel;  
uniform float     uBlend;  

void main() {
  vec3 t = texture2D(uToon, vUv).rgb;
  vec3 p = texture2D(uPixel, vUv).rgb;
  gl_FragColor = vec4(mix(t, p, uBlend), 1.0);
}`,Yn=`varying vec2 vUv;
uniform sampler2D uScene;
uniform float     uThreshold;   

void main() {
  vec3 c = texture2D(uScene, vUv).rgb;
  float l = dot(c, vec3(0.2126, 0.7152, 0.0722));        
  float k = smoothstep(uThreshold, uThreshold + 0.22, l); 
  gl_FragColor = vec4(c * k, 1.0);
}`,Xn=`varying vec2 vUv;
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
}`,Zn=`precision highp float;

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
}`,Qn={"1-bit":{gridWidth:110,dither:.6,palette:[`#15120c`,`#c8b486`]},gb:{gridWidth:130,dither:.4,palette:[`#0f380f`,`#306230`,`#8bac0f`,`#9bbc0f`]},"8-bit":{gridWidth:160,dither:.55,palette:[`#140c1c`,`#442434`,`#30346d`,`#4e4a4e`,`#854c30`,`#346524`,`#d04648`,`#757161`,`#597dce`,`#d27d2c`,`#8595a1`,`#6daa2c`,`#d2aa99`,`#6dc2ca`,`#dad45e`,`#deeed6`]},"16-bit":{gridWidth:280,dither:.3,palette:`#000000.#222034.#45283c.#663931.#8f563b.#df7126.#d9a066.#eec39a.#fbf236.#99e550.#6abe30.#37946e.#4b692f.#524b24.#323c39.#3f3f74.#306082.#5b6ee1.#639bff.#5fcde4.#cbdbfc.#ffffff.#9badb7.#847e87.#696a6a.#595652.#76428a.#ac3232.#d95763.#d77bba.#8f974a.#8a6f30`.split(`.`)},modern:{gridWidth:460,dither:.6,palette:null}},$n=[`gb`,`8-bit`,`16-bit`,`modern`];function er(e){let t=Math.max(e.length,1),n=new Float32Array(t*4);e.forEach((e,t)=>{let r=new I(e);n[t*4+0]=r.r,n[t*4+1]=r.g,n[t*4+2]=r.b,n[t*4+3]=1});let r=new ge(n,t,1,ee,_e);return r.minFilter=C,r.magFilter=C,r.needsUpdate=!0,r}var tr=220,nr={night:[`#0A0C16`,`#1C2236`,`#3A3A52`,`#5A5A78`,`#8A92B0`],dawn:[`#1A1008`,`#43281A`,`#7A4A30`,`#B07A4E`,`#E8A86A`],noon:[`#16100A`,`#3A2F1E`,`#6B563A`,`#937B54`,`#B89968`],dusk:[`#140A0A`,`#3E1E1A`,`#7A3828`,`#B85A36`,`#F0884A`]},rr={night:[`#020604`,`#06180E`,`#10401E`,`#1E9040`,`#7FE0FF`],dawn:[`#060603`,`#1A2410`,`#3A6B22`,`#6CC040`,`#FFC060`],noon:[`#050805`,`#0E2912`,`#1E6B2F`,`#3CF06A`,`#FFB000`],dusk:[`#080402`,`#241408`,`#6B4A12`,`#E0A030`,`#FF7030`]};function ir({demo:e=!1,citySeed:t=0,profileIndex:n=0}={}){let r=new re({antialias:!0,preserveDrawingBuffer:!0});r.shadowMap.enabled=!0,r.shadowMap.type=1,r.shadowMap.autoUpdate=!1,r.shadowMap.needsUpdate=!0;let a=!!(window.matchMedia&&window.matchMedia(`(pointer: coarse)`).matches);r.setPixelRatio(Math.min(window.devicePixelRatio,a?1.5:2)),r.setSize(window.innerWidth,window.innerHeight),r.setClearColor(920327,1),document.body.appendChild(r.domElement);let o=r.getDrawingBufferSize(new W),s=new de;s.fog=new b(10465470,0);let u=new I(`#aeb6c0`),f=.062,p=new I(`#74508f`),m=new I,h=Ie({aspect:window.innerWidth/window.innerHeight}),g=mt({t:.5}),_={type:i,format:ee,minFilter:C,magFilter:C,wrapS:ae,wrapT:ae,depthBuffer:!1,stencilBuffer:!1},y=[new F(256,256,_),new F(256,256,_),new F(256,256,_)];for(let e of y)r.setRenderTarget(e),r.clear();r.setRenderTarget(null);let T=new de,E=new d(-1,1,1,-1,0,1),D=new L({vertexShader:Vn,fragmentShader:Hn,uniforms:{uCurr:{value:null},uPrev:{value:null},uTexel:{value:new W(1/256,1/256)},uMouse:{value:new W(-1,-1)},uMouseStrength:{value:0},uC2:{value:.25},uDamping:{value:.992},uRainCount:{value:0},uRainDrops:{value:Array.from({length:8},()=>new P)},uWakeCount:{value:0},uWakeDrops:{value:Array.from({length:8},()=>new P)}}});T.add(new S(new w(2,2),D));let O=new F(o.x,o.y,{minFilter:l,magFilter:l,depthBuffer:!0,stencilBuffer:!1});function k(e){let t=document.createElement(`canvas`);t.width=t.height=1024;let n=t.getContext(`2d`);n.fillStyle=e?`#0c1418`:`#15110b`,n.fillRect(0,0,1024,1024),n.strokeStyle=e?`rgba(120,150,170,0.22)`:`rgba(184,153,104,0.30)`,n.lineWidth=2;for(let e=0;e<=1024;e+=64)n.beginPath(),n.moveTo(e,0),n.lineTo(e,1024),n.stroke(),n.beginPath(),n.moveTo(0,e),n.lineTo(1024,e),n.stroke();e||(n.fillStyle=`#B89968`,n.font=`bold 360px Georgia, serif`,n.textAlign=`center`,n.textBaseline=`middle`,n.fillText(`LGR`,512,470),n.font=`600 64px ui-monospace, monospace`,n.fillText(`WEB · STUDIO`,512,720));let r=new he(t);return r.colorSpace=H,r}let A=new S(new w(28,28),new c({map:k(e)}));A.rotation.x=-Math.PI/2,A.position.y=-.35,s.add(A);let j=new S(new w(40,24),new L({depthWrite:!1,vertexShader:zn,fragmentShader:Bn,uniforms:{uTime:{value:0},uInk:{value:g.horizon},uGold:{value:g.sky},uFogColor:{value:m},uFogAmt:{value:0},uFogCharm:Ue}}));j.position.set(0,3,-8),s.add(j);let M=new L({vertexShader:Un,fragmentShader:Wn,uniforms:{uHeight:{value:null},uScene:{value:O.texture},uTexel:{value:new W(1/256,1/256)},uResolution:{value:new W(o.x,o.y)},uDisplace:{value:.42},uNormalStrength:{value:22},uRefractStrength:{value:.06},uChromaScale:{value:1},uNormalMatrix:{value:new be},uLightDir:{value:g.sunDir},uInk:{value:new I(`#2A2218`)},uGold:{value:new I(`#B89968`)},uVector:Le,uVecWater:{value:new I(`#1fb8d8`)},uVecTint:{value:Re}}}),N=new S(new w(28,28,255,255),M);N.rotation.x=-Math.PI/2,N.updateMatrixWorld(!0),M.uniforms.uNormalMatrix.value.getNormalMatrix(N.matrixWorld),s.add(N);let te={value:0},ne=Ht({windowGlow:te}),R=ot({seed:t,profileIndex:n,landmarkFactory:ne,windowGlow:te});s.add(R.group);let z=yt({plinthTop:.3,extent:R.extent,profile:R.state.profile});s.add(z.group);let ie=At({extent:R.extent,waterSize:28,plinthTop:.3});s.add(ie.group),D.uniforms.uWakeDrops.value=ie.wakeDrops;let B=Wt({extent:R.extent});s.add(B.group),D.uniforms.uRainDrops.value=B.rainDrops;let V=Kt({extent:R.extent});s.add(V.group);let oe=Yt({rig:h,getCamera:()=>h.camera,sources:[z,ie,V]}),se=Rn();s.add(se.group);let ce=xn({scale:90});s.add(ce.mesh),s.environmentIntensity=.32;let le=!1;function ue(e){let t=e&&g.sunArc.y>-.04;t!==le&&(le=t,ce.mesh.visible=t,j.visible=!t)}let U=null,fe=-1;function pe(){let e=Math.floor(g.t%1*4)%4;return(e!==fe||!U)&&(fe=e,U=ce.buildEnv(r)),U}let me=null,ge=null,_e=null,ve=!1,xe=1234,Se=`valley`,Ce=tn.map(e=>e.key),we=new x({color:`#3f6f8c`,roughness:.07,metalness:.4,transparent:!0,opacity:.9}),Te=()=>[R.group,z.group,ie.group],Ee=()=>[me,ge,_e].filter(Boolean);function De(){for(let e of Ee())s.remove(e),e.userData.dispose?.();let e=sn({seed:xe,size:160,preset:Se});me=cn(e,{worldSize:26,baseY:0,chunks:6}),ge=_n({terrain:e,seed:xe,worldSize:26,baseY:0,biomeKeys:Ce}),_e=bn(e,{worldSize:26,baseY:0,maxLakes:3,material:we});for(let e of Ee())e.visible=ve,s.add(e);typeof window<`u`&&(window.__world={seed:xe,preset:Se,active:ve,chunks:me.children.length,scatter:ge.userData.counts,lakes:_e.userData.count})}let Oe=e=>{for(let t of Ee())t.visible=e},ke={enter(){me||De(),ve=!0,Oe(!0);for(let e of Te())e.visible=!1;window.__world&&(window.__world.active=!0)},exit(){ve=!1,Oe(!1);for(let e of Te())e.visible=!0;window.__world&&(window.__world.active=!1)},reroll(){return xe=Math.random()*1e9|0,De(),ke.enter(),xe},setPreset(e){return on.includes(e)&&(Se=e,De(),ke.enter()),Se},get active(){return ve},get seed(){return xe},get preset(){return Se},get presets(){return on}};R.group.remove(R.key),s.add(R.key),R.key.castShadow=!0,R.key.shadow.mapSize.set(2048,2048),R.key.shadow.bias=-18e-5,R.key.shadow.normalBias=.028,s.add(R.key.target);function Ae(){let e=R.key.shadow.camera,t=R.extent+4.5;e.left=-t,e.right=t,e.top=t,e.bottom=-t,e.near=1,e.far=48,e.updateProjectionMatrix(),r.shadowMap.needsUpdate=!0}Ae();let je=new ye(o.x,o.y),Me=new F(o.x,o.y,{minFilter:l,magFilter:l,depthBuffer:!0,stencilBuffer:!1,depthTexture:je}),Ne=new F(o.x,o.y,{minFilter:l,magFilter:l,depthBuffer:!1,stencilBuffer:!1}),Pe=new F(o.x,o.y,{minFilter:l,magFilter:l,depthBuffer:!1,stencilBuffer:!1}),Fe=new F(o.x,o.y,{minFilter:l,magFilter:l,depthBuffer:!1,stencilBuffer:!1}),G=Math.max(1,Math.floor(o.x/2)),Ge=Math.max(1,Math.floor(o.y/2)),Ke=new F(G,Ge,{minFilter:l,magFilter:l,depthBuffer:!1,stencilBuffer:!1}),qe=new F(G,Ge,{minFilter:l,magFilter:l,depthBuffer:!1,stencilBuffer:!1}),Je=new de,Ye=new d(-1,1,1,-1,0,1),Xe=new S(new w(2,2));Je.add(Xe);let K=new L({vertexShader:Vn,fragmentShader:Gn,uniforms:{uScene:{value:Me.texture},uTime:{value:0},uResolution:{value:new W(o.x,o.y)},uGrain:{value:1},uChroma:{value:1},uExposure:{value:1},uAces:{value:0},uBloom:{value:Ke.texture},uBloomStrength:{value:0},uGrade:{value:0},uGradeTint:{value:g.grade.tint},uGradeLift:{value:g.grade.lift},uGradeSat:{value:1}}}),q=new L({vertexShader:Vn,fragmentShader:Yn,uniforms:{uScene:{value:Me.texture},uThreshold:{value:.78}}}),Ze=new L({vertexShader:Vn,fragmentShader:Xn,uniforms:{uScene:{value:Ke.texture},uDir:{value:new W}}});function Qe(e){q.uniforms.uScene.value=e.texture,X(q,Ke),Ze.uniforms.uScene.value=Ke.texture,Ze.uniforms.uDir.value.set(1.6/G,0),X(Ze,qe),Ze.uniforms.uScene.value=qe.texture,Ze.uniforms.uDir.value.set(0,1.6/Ge),X(Ze,Ke),K.uniforms.uBloom.value=Ke.texture;let t=1-v.clamp(g.sunArc.y*2.2,0,1);K.uniforms.uBloomStrength.value=.85*(.7+.6*t)}let $e=e=>{let t=e.map(e=>new I(e));for(;t.length<8;)t.push(new I(0,0,0));return t},et=[`night`,`dawn`,`noon`,`dusk`],J={inkgold:et.map(e=>$e(nr[e])),terminal:et.map(e=>$e(rr[e]))},tt=new L({vertexShader:Vn,fragmentShader:Kn,uniforms:{uScene:{value:Ne.texture},uResolution:{value:new W(o.x,o.y)},uPixelSize:{value:tr},uPalette:{value:J.inkgold[2]},uPaletteB:{value:J.inkgold[2]},uPaletteBlend:{value:0},uPaletteSize:{value:5}}}),Y=new L({vertexShader:Vn,fragmentShader:Zn,uniforms:{uScene:{value:Ne.texture},uResolution:{value:new W(o.x,o.y)},uGridWidth:{value:160},uDither:{value:.55},uPalette:{value:er(Qn[`8-bit`].palette)},uPaletteSize:{value:1},uUsePalette:{value:1}}}),nt={};for(let e of $n)nt[e]=Qn[e].palette?er(Qn[e].palette):null;let rt=new L({vertexShader:Vn,fragmentShader:qn,uniforms:{uScene:{value:Ne.texture},uDepth:{value:je},uResolution:{value:new W(o.x,o.y)},uBands:{value:4},uToonGain:{value:1.7},uToonGamma:{value:.6},uToonFloor:{value:g.toonFloor},uOutline:{value:g.outline},uNear:{value:.1},uFar:{value:100},uIsPerspective:{value:1}}}),it=new L({vertexShader:Vn,fragmentShader:Jn,uniforms:{uToon:{value:Pe.texture},uPixel:{value:Fe.texture},uBlend:{value:0}}});function X(e,t){Xe.material=e,r.setRenderTarget(t),r.render(Je,Ye)}function at(){h.setViewport(window.innerWidth,window.innerHeight),r.setSize(window.innerWidth,window.innerHeight);let e=r.getDrawingBufferSize(new W);return O.setSize(e.x,e.y),Me.setSize(e.x,e.y),Ne.setSize(e.x,e.y),Pe.setSize(e.x,e.y),Fe.setSize(e.x,e.y),G=Math.max(1,e.x>>1),Ge=Math.max(1,e.y>>1),Ke.setSize(G,Ge),qe.setSize(G,Ge),M.uniforms.uResolution.value.set(e.x,e.y),K.uniforms.uResolution.value.set(e.x,e.y),tt.uniforms.uResolution.value.set(e.x,e.y),Y.uniforms.uResolution.value.set(e.x,e.y),rt.uniforms.uResolution.value.set(e.x,e.y),e}let Z=3,Q=!1,st=!1,ct=`native`,lt=.3,ut=.46,dt=[`native`,...$n],ft={"16-bit":`16-bit`,"8-bit":`8-bit`,gb:`Game Boy`,modern:`Modern`,native:`Pixel`,"1-bit":`1-bit`};typeof window<`u`&&(window.__mode=Z,window.__vector=Q,window.__era=ct);let pt=0,ht=performance.now(),gt=typeof window<`u`&&new URLSearchParams(window.location.search).has(`perf`);typeof window<`u`&&(window.__perf=gt),gt&&(r.info.autoReset=!1);let _t=null;typeof window<`u`&&(window.__loaded=!1);let vt=0,bt=new P(1,1,1),xt=!1;function St(e){let t=st?J.terminal:J.inkgold,n=e%1*4,r=Math.floor(n)%4;tt.uniforms.uPalette.value=t[r],tt.uniforms.uPaletteB.value=t[(r+1)%4],tt.uniforms.uPaletteBlend.value=n-Math.floor(n)}function Ct(e){let t=Qn[e];t&&(Y.uniforms.uGridWidth.value=t.gridWidth,Y.uniforms.uDither.value=t.dither,Y.uniforms.uUsePalette.value=+!!t.palette,t.palette&&(Y.uniforms.uPalette.value=nt[e],Y.uniforms.uPaletteSize.value=t.palette.length))}function wt(){ct!==`native`&&Ct(ct)}let Tt=()=>ct===`native`?tt:Y;function Et(e,t){ue(!0),s.environment=pe(),N.visible=!1,r.setRenderTarget(O),r.render(s,e),N.visible=!0,r.setRenderTarget(Me),r.render(s,e),Qe(Me),K.uniforms.uAces.value=1,K.uniforms.uGrade.value=1,K.uniforms.uGrain.value=0,K.uniforms.uChroma.value=0,X(K,t)}function Dt(e,t){let n=!Q&&(Z===1||Z===2);if(ue(n),s.environment=n?pe():null,K.uniforms.uBloomStrength.value=0,N.visible=!1,r.setRenderTarget(O),r.render(s,h.camera),N.visible=!0,Z===1&&!n)r.setRenderTarget(t),r.render(s,h.camera);else if(Z===1)r.setRenderTarget(Me),r.render(s,h.camera),Qe(Me),K.uniforms.uAces.value=1,K.uniforms.uGrade.value=1,K.uniforms.uGrain.value=0,K.uniforms.uChroma.value=0,X(K,t);else if(r.setRenderTarget(Me),r.render(s,h.camera),Z===2)n&&Qe(Me),K.uniforms.uAces.value=+!!n,K.uniforms.uGrade.value=+!!n,K.uniforms.uGrain.value=1,K.uniforms.uChroma.value=1,X(K,t);else{K.uniforms.uAces.value=0,K.uniforms.uGrade.value=0,K.uniforms.uGrain.value=0,K.uniforms.uChroma.value=0,X(K,Ne);let n=h.camera;rt.uniforms.uNear.value=n.near,rt.uniforms.uFar.value=n.far,rt.uniforms.uIsPerspective.value=+!!n.isPerspectiveCamera;let r=e.era?(Ct(e.era),Y):Tt();e.kind===`pixel`?(X(r,t),window.__style=`pixel`):e.kind===`toon`?(X(rt,t),window.__style=`toon`):(X(rt,Pe),X(r,Fe),it.uniforms.uBlend.value=e.blend,X(it,t),window.__style=`blend`)}}function Ot(){let e=kt(),t=e.kind===`toon`?1:e.kind===`blend`?1-e.blend:0;return M.uniforms.uChromaScale.value=v.lerp(1,.5,t),e}function kt(){if(Z===1||Z===2)return{kind:`none`};if(Z===7)return{kind:`pixel`};if(Z===8)return{kind:`toon`};let e=h.styleT;return window.__styleT=e,e<=lt?{kind:`toon`}:e>=ut?{kind:`pixel`,era:e<.62?`16-bit`:e<.8?`8-bit`:`gb`}:{kind:`blend`,blend:v.smoothstep(e,lt,ut),era:`16-bit`}}function jt(e){return Z===1||Z===2?``:Q&&Z!==7&&Z!==8?`Vector`:e.kind===`toon`?`Toon`:e.kind===`pixel`?ft[e.era||ct]||`Pixel`:e.kind===`blend`?`Toon → `+(ft[e.era]||`Pixel`):``}function Mt(e,t,{shadowsOn:n=!0,seasonTarget:i=0}={}){if(gt){let e=r.info;_t={calls:e.render.calls,tris:e.render.triangles,programs:e.programs?e.programs.length:0,geo:e.memory.geometries,tex:e.memory.textures},e.reset()}j.material.uniforms.uTime.value=t,K.uniforms.uTime.value=t,g.update(e),R.key.position.copy(g.sunDir).multiplyScalar(24),R.key.color.copy(g.sunColor),R.key.intensity=g.sunIntensity,R.fill.color.copy(g.hemiSky),R.fill.groundColor.copy(g.hemiGround),te.value=g.windowGlow,ce.setSun(g.sunArc),ce.setParams(g.skyParams),K.uniforms.uGradeSat.value=g.grade.sat,s.environmentIntensity=.34*(1-.6*v.clamp(g.sunArc.y*1.5,0,1));let a=B.overcast;R.key.intensity*=1-.5*a,R.key.color.lerp(u,.45*a),R.fill.intensity=1+.7*a;let o=v.smoothstep(g.sunDir.y,.06,.34),c=v.lerp(.28,1,1-g.windowGlow),l=n?o*c:0;R.key.shadow.intensity=.72*l,ze.value=.52*l,(n&&!xt||bt.distanceToSquared(g.sunDir)>2e-5)&&(r.shadowMap.needsUpdate=!0,bt.copy(g.sunDir)),xt=n;let d=1-g.windowGlow;Re.setRGB(v.lerp(.46,1,d),v.lerp(.52,1,d),v.lerp(.74,1,d)),K.uniforms.uExposure.value=g.exposure,rt.uniforms.uToonGain.value=g.toonGain,r.setClearColor(g.horizon,1),St(g.t),window.__t=g.t,z.update(e,t,g),R.update(t),ie.update(e,t,g),D.uniforms.uWakeCount.value=ie.wakeCount,B.update(e,t),D.uniforms.uRainCount.value=B.rainDropCount;let h=B.fog*(1-d);s.fog.density=B.fog*f,m.copy(g.horizon).lerp(p,.85*h),s.fog.color.copy(m),r.setClearColor(m,1),Ue.value=B.fog,j.material.uniforms.uFogAmt.value=.7*B.fog,Be.value=B.snow,Ve.value=B.cloud*.55,He.x+=e*.018,He.y+=e*.009,We.value+=(i-We.value)*Math.min(1,e*1.5),V.update(e,t,g,B);let _=kt(),b=_.kind===`pixel`||_.kind===`blend`?`pixel`:Q||_.kind===`toon`?`charm`:`realistic`;se.update(e,t,g,B,b),pt++;let x=performance.now();x-ht>=1e3&&(window.__fps=pt,gt&&_t&&(console.log(`[perf] ${pt} fps · ~${(1e3/Math.max(1,pt)).toFixed(2)} ms · calls ${_t.calls} · tris ${_t.tris} · programs ${_t.programs} · geo ${_t.geo} · tex ${_t.tex}`),window.__perfInfo={fps:pt,..._t}),pt=0,ht=x);let[S,C,w]=y;if(D.uniforms.uPrev.value=S.texture,D.uniforms.uCurr.value=C.texture,r.setRenderTarget(w),r.render(T,E),y=[C,w,S],M.uniforms.uHeight.value=y[1].texture,vt<2&&typeof document<`u`&&++vt===2){let e=document.getElementById(`lgr-loader`);e&&e.classList.add(`gone`),window.__loaded=!0}}function Nt(e){Z=e,window.__mode=Z}function $(){return Q=!Q,Le.value=+!!Q,window.__vector=Q,Q}function Pt(e){return Q=!!e,Le.value=+!!Q,window.__vector=Q,Q}function Ft(){return ct=dt[(dt.indexOf(ct)+1)%dt.length],window.__era=ct,wt(),ct}function It(){return st=!st,st}return{updateWorld:Mt,decideStyle:Ot,renderCityPipeline:Dt,renderCityBeautyTo:Et,styleHintName:jt,setPostMode:Nt,toggleVector:$,setVector:Pt,cycleEra:Ft,togglePalette:It,get mode(){return Z},get vector(){return Q},get sceneEra(){return ct},renderer:r,drawBuffer:o,scene:s,rig:h,sunRig:g,SIM:256,targets:y,simScene:T,simCamera:E,simMaterial:D,grabRT:O,card:A,backdrop:j,WATER_SIZE:28,water:N,waterMaterial:M,windowGlow:te,landmarkFactory:ne,city:R,cityLife:z,waterLife:ie,weatherRig:B,clouds:V,inspector:oe,world:ke,fitShadowFrustum:Ae,SHADOW_DIST:24,sceneDepth:je,sceneRT:Me,filmicRT:Ne,toonRT:Pe,pixelRT:Fe,postScene:Je,postCamera:Ye,postQuad:Xe,filmicMaterial:K,pixelMaterial:tt,pixelkitMaterial:Y,toonMaterial:rt,mixMaterial:it,PALCACHE:J,ERA_TEX:nt,runPass:X,OVERCAST_GREY:u,FOG_DENSITY:f,FOG_NIGHT_TINT:p,_fogColor:m,resize:at}}var ar=`lgr_hints_`,or=!1;function sr(){if(or||typeof document>`u`)return;or=!0;let e=document.createElement(`style`);e.textContent=`
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
  }`,document.head.appendChild(e)}function cr({key:e,title:t=`Tips`,tips:n=[],force:r=!1}={}){let i={key:e,shown:!1,dismissed:!1,seen:!1};if(typeof window<`u`&&(window.__hints=i),typeof document>`u`||!e)return{dismiss(){},el:null};let a=ar+e,o=!1;try{o=localStorage.getItem(a)===`1`}catch{}if(o&&!r)return i.seen=!0,{dismiss(){},el:null};sr();let s=!!(window.matchMedia&&window.matchMedia(`(prefers-reduced-motion: reduce)`).matches),c=document.createElement(`div`);c.className=`lgr-hints`,c.innerHTML=`<div class="lgr-hints-card">
    <div class="lgr-hints-h">${t}</div>
    <ul>${n.map(e=>`<li>${e}</li>`).join(``)}</ul>
    <button class="lgr-hints-ok">Got it</button>
    <button class="lgr-hints-x" title="Dismiss (Esc)" aria-label="Dismiss">✕</button>
  </div>`,document.body.appendChild(c),i.shown=!0,s?c.classList.add(`on`):requestAnimationFrame(()=>c.classList.add(`on`));let l=!1;function u(e=!0){if(!l){if(l=!0,e)try{localStorage.setItem(a,`1`)}catch{}i.dismissed=!0,window.removeEventListener(`keydown`,d),c.classList.remove(`on`),setTimeout(()=>c.remove(),s?0:300)}}function d(e){e.key===`Escape`&&u(!0)}return window.addEventListener(`keydown`,d),c.querySelector(`.lgr-hints-ok`).addEventListener(`click`,()=>{navigator.vibrate?.(10),u(!0)}),c.querySelector(`.lgr-hints-x`).addEventListener(`click`,()=>{navigator.vibrate?.(10),u(!0)}),{dismiss:u,el:c}}var lr=new Set([`w`,`a`,`s`,`d`,`arrowup`,`arrowdown`,`arrowleft`,`arrowright`,`shift`,` `]),ur={walker:{p:.6,hp:26,speed:.85,dmg:9,score:10,size:1,color:`#6f8a45`},runner:{p:.25,hp:12,speed:1.75,dmg:7,score:16,size:.82,color:`#a6d24c`},tank:{p:.15,hp:95,speed:.5,dmg:20,score:34,size:1.5,color:`#39492a`}};function dr(){let e=Math.random();return e<ur.walker.p?`walker`:e<ur.walker.p+ur.runner.p?`runner`:`tank`}var fr=new I(`#ffffff`),pr=new I(`#d83a2a`),mr={food:{name:`Food`,glyph:`🍖`,color:`#c8782e`,consumable:!0},water:{name:`Water`,glyph:`💧`,color:`#3aa6dc`,consumable:!0},bandage:{name:`Bandage`,glyph:`➕`,color:`#e8e2d6`,consumable:!0},scrap:{name:`Scrap`,glyph:`⚙️`,color:`#8a8f96`,consumable:!1},medkit:{name:`Medkit`,glyph:`✚`,color:`#e0524a`,consumable:!0},repairkit:{name:`Repair Kit`,glyph:`🔧`,color:`#caa05a`,consumable:!0}},hr=[{out:`medkit`,need:{bandage:2}},{out:`repairkit`,need:{scrap:3}}];function gr({extent:e=8,plinthTop:t=.3}={}){let n=new a;n.visible=!1,n.raycast=()=>{};let r=t+.02,i=Math.max(3,e-.7),o=typeof window<`u`&&window.matchMedia&&window.matchMedia(`(pointer: coarse)`).matches,l=1.25,u=4.4,d=1.4,f=new a,p=new S(new N(.16,.34,4,10),q(new x({color:`#3f7fd0`,roughness:.6,flatShading:!0}),{color:`#3f7fd0`}));p.position.y=.33;let h=new S(new se(.13,12,9),q(new x({color:`#e9caa1`,roughness:.75,flatShading:!0}),{color:`#e9caa1`}));h.position.y=.66;let _=new S(new U(.1,.1,.16),q(new x({color:`#ffd54a`,roughness:.5,flatShading:!0}),{color:`#ffd54a`}));_.position.set(0,.38,.18),f.add(p,h,_),f.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!1),e.raycast=()=>{}}),f.scale.setScalar(1.6),f.position.y=r,n.add(f);let y=new S(new ce(.95,16,-.9,1.8),new c({color:`#ffe08a`,transparent:!0,opacity:0,depthWrite:!1,side:2}));y.rotation.x=-Math.PI/2,y.position.y=r+.06,y.raycast=()=>{},n.add(y);let b=new ie().setFromPoints([new P,new P]),C=new m(b,new g({color:`#fff3c0`,transparent:!0,opacity:0,depthWrite:!1}));C.raycast=()=>{},n.add(C);let w={x:0,z:0,vx:0,vz:0,hp:100,stamina:100,hunger:100,thirst:100,facing:0,iframe:0},T=new R(new N(.15,.3,4,8),q(new x({roughness:.85,flatShading:!0})),48);T.castShadow=!0,T.receiveShadow=!1,T.frustumCulled=!1,T.raycast=()=>{},T.instanceMatrix.setUsage(ve),n.add(T);let E=[];for(let e=0;e<48;e++)E.push({x:0,z:0,vx:0,vz:0,alive:!1,in:!1,type:`walker`,hp:1,maxhp:1,speed:1,dmg:0,score:0,size:1,phase:0,flash:0});let D=new I,O=[],k=q(new x({color:`#7a5a36`,roughness:.9,flatShading:!0}),{color:`#7a5a36`});for(let e=0;e<8;e++){let t=e/8*Math.PI*2,i=new S(new U(2.1,.7,.24),k.clone());i.position.set(Math.cos(t)*u,r+.35,Math.sin(t)*u),i.rotation.y=-t+Math.PI/2,i.castShadow=!0,i.raycast=()=>{},n.add(i),O.push({mesh:i,ang:t,hp:150,alive:!0,baseColor:new I(`#7a5a36`)})}function A(e,t){let n=Math.atan2(t,e);return n<0&&(n+=Math.PI*2),O[Math.round(n/(Math.PI*2/8))%8]}let j=[];for(let e=0;e<14;e++){let e=new S(new U(.26,.26,.26),q(new x({roughness:.6,flatShading:!0})));e.castShadow=!0,e.visible=!1,e.raycast=()=>{},n.add(e),j.push({mesh:e,x:0,z:0,kind:`food`,active:!1})}let M=new I;function ee(){let e=Math.random();return e<.36?`food`:e<.72?`water`:e<.88?`bandage`:`scrap`}function te(e,t,n){let i=j.find(e=>!e.active);i&&(i.x=e,i.z=t,i.kind=n||ee(),i.active=!0,i.mesh.position.set(e,r+.18,t),i.mesh.visible=!0,i.mesh.material.color.copy(M.set(mr[i.kind].color)))}let F=[];function ne(e){let t=F.find(t=>t.id===e);return t?t.n:0}function re(e,t=1){let n=F.find(t=>t.id===e);return n?(n.n+=t,!0):F.length<8?(F.push({id:e,n:t}),!0):!1}function L(e,t){let n=F.find(t=>t.id===e);return!n||n.n<t?!1:(n.n-=t,n.n<=0&&F.splice(F.indexOf(n),1),!0)}function z(e){if(ne(e)<=0)return!1;if(e===`food`)w.hunger=Math.min(100,w.hunger+38);else if(e===`water`)w.thirst=Math.min(100,w.thirst+38);else if(e===`bandage`)w.hp=Math.min(100,w.hp+40);else if(e===`medkit`)w.hp=Math.min(100,w.hp+90);else if(e===`repairkit`){let e=null;for(let t of O)(!e||t.hp<e.hp)&&(e=t);e&&(e.hp=150,e.alive=!0)}else return!1;return L(e,1),Je(),!0}function B(e){for(let t in e.need)if(ne(t)<e.need[t])return!1;for(let t in e.need)L(t,e.need[t]);return re(e.out,1),Je(),!0}let ae=!1,V=!1,H=1,oe=0,le=0,ue=0,de=`spawning`,fe=0,pe=0,me=0,he=0,W=!1,ge=null;function _e(){for(let e=0;e<48;e++)if(!E[e].alive)return E[e];return null}function ye(e){let t=_e();if(!t)return;let n=ur[dr()];t.type=Object.keys(ur).find(e=>ur[e]===n)||`walker`;let r=Math.random()*Math.PI*2;t.x=Math.cos(r)*i,t.z=Math.sin(r)*i,t.vx=0,t.vz=0;let a=1+H*.08;t.maxhp=n.hp*a,t.hp=t.maxhp,t.speed=n.speed*(1+.4*e)*(1+H*.015)*(H===1?.85:1),t.dmg=n.dmg,t.score=n.score,t.size=n.size,t.phase=Math.random()*6.28,t.flash=0,t.in=!1,t.alive=!0}function be(){let e=null,t=1/0;for(let n of E){if(!n.alive)continue;let r=(n.x-w.x)**2+(n.z-w.z)**2;r<t&&(t=r,e=n)}return e}function xe(e){e.alive=!1,oe++,le+=e.score,Math.random()<.3&&te(e.x,e.z)}function Se(e,t){e.hp-=t,e.flash=.12,e.hp<=0&&xe(e)}function Ce(){if(V||me>0)return;me=.16;let e,t;if(ge)e=ge.x-w.x,t=ge.z-w.z;else{let n=be();n?(e=n.x-w.x,t=n.z-w.z):(e=Math.sin(w.facing),t=Math.cos(w.facing))}let n=Math.hypot(e,t)||1;e/=n,t/=n,w.facing=Math.atan2(e,t);let i=null,a=1/0;for(let n of E){if(!n.alive)continue;let r=n.x-w.x,o=n.z-w.z,s=r*e+o*t;s<0||s>9||Math.abs(r*t-o*e)<.7*(.4+.6*n.size)&&s<a&&(a=s,i=n)}let o=i?a:9,s=b.attributes.position;s.setXYZ(0,w.x,r+.5,w.z),s.setXYZ(1,w.x+e*o,r+.5,w.z+t*o),s.needsUpdate=!0,C.material.opacity=.95,i&&Se(i,16)}function we(){if(V||he>0)return;he=.42,y.material.opacity=.85;let e=Math.sin(w.facing),t=Math.cos(w.facing);for(let n of E){if(!n.alive)continue;let r=n.x-w.x,i=n.z-w.z,a=Math.hypot(r,i);a>1.05+n.size*.2||(r*e+i*t)/(a||1)>.2&&Se(n,34)}}let Te={},Ee={x:0,y:0};function De(e,t){if(!ae)return;let n=e.key.toLowerCase();if(t&&n===`i`){e.stopImmediatePropagation(),K();return}if(t&&n===`escape`&&Ve){e.stopImmediatePropagation(),Xe();return}if(lr.has(n)){if(e.stopImmediatePropagation(),n.startsWith(`arrow`)&&e.preventDefault(),n===` `){t&&we();return}Te[n]=t}}typeof window<`u`&&(window.addEventListener(`keydown`,e=>De(e,!0)),window.addEventListener(`keyup`,e=>De(e,!1)));let Oe=null,ke=null,Ae=null,je=null,Me=null,Ne=null,Pe=null,Fe=null,G=null,Ie=null,Le=null,Re=null,ze=null,Be=null,Ve=!1;if(typeof document<`u`){let e=document.createElement(`style`);e.textContent=`
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
    `,document.head.appendChild(e),Oe=document.createElement(`div`),Oe.className=`hoard-stick`,ke=document.createElement(`div`),ke.className=`knob`,Oe.appendChild(ke),document.body.appendChild(Oe);let t=!1,n=e=>{let t=Oe.getBoundingClientRect(),n=e.clientX-(t.left+t.width/2),r=e.clientY-(t.top+t.height/2),i=Math.hypot(n,r)||1;i>44&&(n*=44/i,r*=44/i),ke.style.transform=`translate(${n}px,${r}px)`,Ee.x=n/44,Ee.y=-r/44};Oe.addEventListener(`pointerdown`,e=>{t=!0,Oe.setPointerCapture(e.pointerId),n(e)}),Oe.addEventListener(`pointermove`,e=>{t&&n(e)});let r=()=>{t=!1,Ee.x=0,Ee.y=0,ke.style.transform=`translate(0,0)`};Oe.addEventListener(`pointerup`,r),Oe.addEventListener(`pointercancel`,r),Le=document.createElement(`button`),Le.className=`hoard-btn hoard-fire`,Le.textContent=`FIRE`,document.body.appendChild(Le),Re=document.createElement(`button`),Re.className=`hoard-btn hoard-melee`,Re.textContent=`MELEE`,document.body.appendChild(Re),Le.addEventListener(`pointerdown`,e=>{e.preventDefault(),navigator.vibrate?.(12),W=!0}),Le.addEventListener(`pointerup`,()=>{W=!1}),Le.addEventListener(`pointercancel`,()=>{W=!1}),Re.addEventListener(`pointerdown`,e=>{e.preventDefault(),navigator.vibrate?.(18),we()}),Ae=document.createElement(`div`),Ae.className=`hoard-hud`,Ae.innerHTML=`HP<div class="bar"><i style="background:#e0524a"></i></div>STAMINA<div class="bar"><i style="background:#4ad08a"></i></div>HUNGER<div class="bar"><i style="background:#d89a3a"></i></div>THIRST<div class="bar"><i style="background:#3aa6dc"></i></div><div class="stat"></div>`,document.body.appendChild(Ae);let i=Ae.querySelectorAll(`i`);je=i[0],Me=i[1],Ne=i[2],Pe=i[3],Fe=Ae.querySelector(`.stat`),G=document.createElement(`div`),G.className=`hoard-banner`,document.body.appendChild(G),Ie=document.createElement(`div`),Ie.className=`hoard-death`,Ie.innerHTML=`<h2>YOU DIED</h2><div class="ds"></div><button>RESTART</button>`,document.body.appendChild(Ie),Ie.querySelector(`button`).addEventListener(`click`,()=>$e());let a=document.createElement(`style`);a.textContent=`
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
    `,document.head.appendChild(a),ze=document.createElement(`button`),ze.className=`hoard-bagbtn`,ze.textContent=`🎒`,ze.title=`Inventory (I)`,document.body.appendChild(ze),ze.addEventListener(`click`,()=>K()),Be=document.createElement(`div`),Be.className=`hoard-bag`,document.body.appendChild(Be)}let He=0;function Ue(e,t=1.8){G&&(G.textContent=e,G.style.display=`block`),He=t}let We=Math.PI/4;function Ge(e){We=e}function Ke(e,t){ge={x:e,z:t}}function qe(e){W=e}function Je(){if(typeof window<`u`&&(window.__hoardBag=Object.fromEntries(F.map(e=>[e.id,e.n]))),!Be)return;let e=`<div class="panel"><h3>INVENTORY</h3><div class="slots">`;for(let t=0;t<8;t++){let n=F[t];n?e+=`<button class="slot" data-id="${n.id}" title="${mr[n.id].name}">${mr[n.id].glyph}<span class="n">${n.n}</span></button>`:e+=`<div class="slot empty"></div>`}e+=`</div><div class="craft">`,hr.forEach((t,n)=>{let r=Object.keys(t.need).every(e=>ne(e)>=t.need[e]),i=Object.entries(t.need).map(([e,t])=>`${t}${mr[e].glyph}`).join(`+`);e+=`<button data-rec="${n}" ${r?``:`disabled`}>Craft ${mr[t.out].name} (${i})</button>`}),e+=`</div><button class="close">CLOSE (I)</button></div>`,Be.innerHTML=e,Be.querySelectorAll(`.slot[data-id]`).forEach(e=>e.addEventListener(`click`,()=>{mr[e.dataset.id].consumable&&z(e.dataset.id)})),Be.querySelectorAll(`[data-rec]`).forEach(e=>e.addEventListener(`click`,()=>B(hr[+e.dataset.rec]))),Be.querySelector(`.close`).addEventListener(`click`,()=>Xe())}function Ye(){!ae||V||(Ve=!0,Be&&Be.classList.add(`open`),Je())}function Xe(){Ve=!1,Be&&Be.classList.remove(`open`)}function K(){Ve?Xe():Ye()}function Ze(e){H=e,pe=5+e*2,de=`spawning`}function Qe(){w.x=0,w.z=0,w.vx=0,w.vz=0,w.hp=100,w.stamina=100,w.hunger=100,w.thirst=100,w.facing=0,w.iframe=0;for(let e of E)e.alive=!1;oe=0,le=0,ue=0,V=!1,W=!1,ge=null;for(let e of O)e.hp=150,e.alive=!0,e.mesh.scale.set(1,1,1);for(let e of j)e.active=!1,e.mesh.visible=!1;F.length=0;let e=[`food`,`water`,`food`,`water`,`bandage`,`scrap`];for(let t=0;t<6;t++){let n=Math.random()*Math.PI*2,r=1.6+Math.random()*(i-2);te(Math.cos(n)*r,Math.sin(n)*r,e[t])}Ie&&(Ie.style.display=`none`),f.position.set(0,r,0),f.visible=!0,Ze(1),Je()}function $e(){Qe()}function et(e){ae=e,n.visible=e;let t=e&&o;Oe&&(Oe.style.display=t?`block`:`none`),Le&&(Le.style.display=t?`block`:`none`),Re&&(Re.style.display=t?`block`:`none`),Ae&&(Ae.style.display=e?`block`:`none`),G&&!e&&(G.style.display=`none`),Ie&&!e&&(Ie.style.display=`none`),ze&&(ze.style.display=e?`block`:`none`),Xe();for(let e in Te)Te[e]=!1;Ee.x=Ee.y=0,W=!1,e&&Qe()}let J=new s;function tt(e,t,n){if(!ae||Ve)return;let a=n?n.windowGlow:0;if(me=Math.max(0,me-e),he=Math.max(0,he-e),C.material.opacity=Math.max(0,C.material.opacity-e*8),y.material.opacity=Math.max(0,y.material.opacity-e*6),!V){ue+=e,w.iframe=Math.max(0,w.iframe-e);let n=(Te.d||Te.arrowright?1:0)-(Te.a||Te.arrowleft?1:0)+Ee.x,a=(Te.w||Te.arrowup?1:0)-(Te.s||Te.arrowdown?1:0)+Ee.y,o=Math.hypot(n,a);o>1&&(n/=o,a/=o);let s=o>.05,c=(Te.shift||Ee.y>.95)&&w.stamina>2&&s,l=Math.cos(We),p=Math.sin(We),m=l*n+-p*a,h=-p*n+-l*a,g=c?5.2:3,_=1-Math.exp(-14*e);w.vx+=(m*g-w.vx)*_,w.vz+=(h*g-w.vz)*_,w.x+=w.vx*e,w.z+=w.vz*e;let b=Math.hypot(w.x,w.z);b>i&&(w.x*=i/b,w.z*=i/b,w.vx=0,w.vz=0),s&&(w.facing=Math.atan2(m,h)),w.stamina=v.clamp(w.stamina+(c?-34:22)*e,0,100),w.hunger=Math.max(0,w.hunger-.9*e),w.thirst=Math.max(0,w.thirst-1.15*e),w.hunger<=0||w.thirst<=0?w.hp=Math.max(0,w.hp-3.5*e):w.hunger>55&&w.thirst>55&&w.hp<100&&(w.hp=Math.min(100,w.hp+2*e));for(let e of j)e.active&&(e.x-w.x)**2+(e.z-w.z)**2<.3&&re(e.kind)&&(e.active=!1,e.mesh.visible=!1,Je());for(let t of O){if(t.hp>=150)continue;let n=Math.cos(t.ang)*u,r=Math.sin(t.ang)*u;(n-w.x)**2+(r-w.z)**2<d*d&&(t.hp=Math.min(150,t.hp+30*e),t.hp>0&&(t.alive=!0))}w.hp<=0&&Y(),f.position.set(w.x,r,w.z),f.rotation.y=w.facing,f.visible=!(w.iframe>0&&Math.floor(t*20)%2==0),W&&Ce(),y.position.set(w.x,r+.06,w.z),y.rotation.z=-w.facing}let o=0;V||de===`spawning`&&(pe>0&&Math.random()<e*(H===1?3.5:6)&&(ye(a),pe--),pe<=0&&(de=`fighting`));let s=0,c=1/0;for(let n=0;n<48;n++){let i=E[n];if(!i.alive){J.position.set(0,-60,0),J.scale.setScalar(0),J.updateMatrix(),T.setMatrixAt(n,J.matrix);continue}o++;let a=w.x-i.x,d=w.z-i.z,f=Math.hypot(a,d)||1;if(f<c&&(c=f),!V){let t=a/f*i.speed,n=d/f*i.speed,r=1-Math.exp(-6*e);if(i.vx+=(t-i.vx)*r,i.vz+=(n-i.vz)*r,f>.52){let t=i.x+i.vx*e,n=i.z+i.vz*e,r=Math.hypot(i.x,i.z),a=Math.hypot(t,n);if(!i.in&&r>=u&&a<4.9){let r=A(t,n);if(r.alive){let i=Math.atan2(n,t),a=4.9;t=Math.cos(i)*a,n=Math.sin(i)*a,r.hp-=15*e,r.hp<=0&&(r.hp=0,r.alive=!1)}}a<u-.1&&(i.in=!0),i.x=t,i.z=n}else w.iframe<=0&&(s=Math.max(s,i.dmg))}i.flash=Math.max(0,i.flash-e);let p=Math.sin(t*6+i.phase)*.04;J.position.set(i.x,r+.3*i.size*l+p,i.z),J.rotation.set(0,Math.atan2(i.vx,i.vz),Math.sin(t*3+i.phase)*.12),J.scale.setScalar(i.size*l),J.updateMatrix(),T.setMatrixAt(n,J.matrix),D.set(ur[i.type].color),i.flash>0?D.lerp(fr,.7):D.lerp(pr,.35*(1-i.hp/i.maxhp)),T.setColorAt(n,D)}T.instanceMatrix.needsUpdate=!0,T.instanceColor&&(T.instanceColor.needsUpdate=!0);let p=0;for(let e of O){e.alive&&p++;let t=Math.max(0,e.hp/150);e.mesh.scale.y=e.alive?Math.max(.18,t):.12,e.mesh.position.y=r+.35*e.mesh.scale.y,e.mesh.material.color.copy(e.baseColor).lerp(pr,(1-t)*.55)}!V&&s>0&&(w.hp=Math.max(0,w.hp-s*(H===1?.5:1)),w.iframe=.6,w.hp<=0&&Y()),!V&&de===`fighting`&&o===0&&pe<=0&&(de=`complete`,fe=2.2,Ue(`WAVE ${H} CLEAR`,2)),!V&&de===`complete`&&(fe-=e,fe<=0&&(Ze(H+1),Ue(`WAVE ${H}`,1.4))),He>0&&(He-=e,He<=0&&G&&(G.style.display=`none`)),je&&(je.style.width=`${w.hp}%`),Me&&(Me.style.width=`${w.stamina}%`),Ne&&(Ne.style.width=`${w.hunger}%`),Pe&&(Pe.style.width=`${w.thirst}%`),Fe&&(Fe.textContent=`WAVE ${H}   KILLS ${oe}   SCORE ${le}`),typeof window<`u`&&(window.__hoard={active:ae,dead:V,paused:Ve,hp:Math.round(w.hp),stamina:Math.round(w.stamina),hunger:Math.round(w.hunger),thirst:Math.round(w.thirst),zombies:o,barriers:p,pickups:j.filter(e=>e.active).length,inv:Object.fromEntries(F.map(e=>[e.id,e.n])),wave:H,kills:oe,score:le,weapon:`gun`,znear:+c.toFixed(2),px:+w.x.toFixed(2),pz:+w.z.toFixed(2)})}function Y(){V=!0,W=!1,Ie&&(Ie.querySelector(`.ds`).innerHTML=`Wave reached: ${H}<br>Kills: ${oe}<br>Score: ${le}<br>Survived: ${ue.toFixed(0)}s`,Ie.style.display=`flex`)}return{group:n,update:tt,setActive:et,setAzimuth:Ge,setAim:Ke,setFiring:qe,melee:we,reset:Qe,restart:$e,openBag:Ye,closeBag:Xe,toggleBag:K,addItem:re,get player(){return w},get dead(){return V},get active(){return ae},get paused(){return Ve},get inv(){return F.map(e=>({...e}))},get nearestPickup(){let e=null,t=1e9;for(let n of j){if(!n.active)continue;let r=(n.x-w.x)**2+(n.z-w.z)**2;r<t&&(t=r,e=n)}return e?{x:e.x,z:e.z}:null},setTarget(){}}}var{Timer:_r}=O,vr=new URLSearchParams(window.location.search),yr=vr.get(`demo`)===`1`||vr.has(`capture`);window.__demo=yr;var br=(vr.get(`city`)?Number(vr.get(`city`)):0)||Math.random()*1e9|0,xr=0,Sr=ir({demo:yr,citySeed:br,profileIndex:xr}),{renderer:Cr,scene:wr,rig:Tr,sunRig:Er,city:Dr,landmarkFactory:Or}=Sr,kr=gr({extent:Dr.extent,plinthTop:.3});wr.add(kr.group),window.__hoardApi=kr;var Ar=!0;window.__shadows=Ar,window.__scene=`hoard`;var jr=new P,Mr=new Set,Nr=6.5;function Pr(e){Dr.group.traverse(t=>{!t.isMesh||t.userData.ground||!t.visible||(t.getWorldPosition(jr),Math.hypot(jr.x,jr.z)<e&&(t.visible=!1,Mr.add(t)))})}function Fr(){for(let e of Mr)e.visible=!0;Mr.clear()}var Ir=new me,Lr=new P,Rr=new P,zr=new Set;function Br(){for(let e of zr)e.material&&(e.material.opacity=1,e.material.transparent=!!e.userData._wasT,e.material.depthWrite=e.userData._wasDW!==!1);zr.clear()}function Vr(e){Br();let t=Tr.camera;for(let[n,r]of[[0,0],[.7,.4],[-.7,.4]]){Rr.set(e.x+n,.6,e.z+r),Lr.subVectors(Rr,t.position);let i=Lr.length();Ir.set(t.position,Lr.normalize()),Ir.far=i-.4;for(let e of Ir.intersectObject(Dr.group,!0)){let t=e.object;!t.material||t.userData.ground||zr.has(t)||(t.userData._wasT=t.material.transparent,t.userData._wasDW=t.material.depthWrite,t.material.transparent=!0,t.material.opacity=.16,t.material.depthWrite=!1,zr.add(t))}}}function Hr(){kr.setActive(!0),Pr(Nr),Tr.setMode(we.DIMETRIC),Tr.setZoom(2.8,!0),Tr.setTarget(kr.player.x,.6,kr.player.z,!0)}var Ur=new me,Wr=new W,Gr=new T(new P(0,1,0),-.32),Kr=new P,qr=window.matchMedia&&window.matchMedia(`(pointer: coarse)`).matches,Jr=!1,Yr=0,Xr=0,Zr=.005,Qr=(e,t)=>{Wr.x=e/window.innerWidth*2-1,Wr.y=-(t/window.innerHeight)*2+1};Cr.domElement.addEventListener(`contextmenu`,e=>e.preventDefault()),Cr.domElement.addEventListener(`mousedown`,e=>{e.button===0&&(Qr(e.clientX,e.clientY),kr.setFiring(!0)),e.button===2&&(Jr=!0,Yr=e.clientX,Xr=e.clientY)}),window.addEventListener(`mousemove`,e=>{Qr(e.clientX,e.clientY),Jr&&(Tr.orbit(-(e.clientX-Yr)*Zr,-(e.clientY-Xr)*Zr),Yr=e.clientX,Xr=e.clientY)}),window.addEventListener(`mouseup`,()=>{kr.setFiring(!1),Jr=!1}),Cr.domElement.addEventListener(`wheel`,e=>{e.preventDefault(),Tr.zoomBy(Math.exp(e.deltaY*.0015))},{passive:!1}),window.addEventListener(`keydown`,e=>{(e.key===`h`||e.key===`H`)&&(Ar=!Ar,window.__shadows=Ar)}),Or.whenReady.then(()=>{Dr.generate(br,xr),Sr.fitShadowFrustum(),Fr(),Pr(Nr),window.__cityReady=!0});var $r=new _r;$r.connect(document);function ei(){$r.update();let e=Math.min($r.getDelta(),.1);kr.setAzimuth(Tr.azimuth),qr||(Ur.setFromCamera(Wr,Tr.camera),Ur.ray.intersectPlane(Gr,Kr)&&kr.setAim(Kr.x,Kr.z)),kr.update(e,$r.getElapsed(),Er),Tr.setTarget(kr.player.x,.6,kr.player.z),Tr.update(e),Vr(kr.player),Sr.updateWorld(e,$r.getElapsed(),{shadowsOn:Ar,seasonTarget:0});let t=Sr.decideStyle();Sr.renderCityPipeline(t,null),requestAnimationFrame(ei)}Hr(),ei(),cr({key:`hoard`,title:`The Hoard`,tips:[`Move: WASD / arrows · on touch: the left thumb-stick`,`Aim: mouse / drag · Fire: hold click / the FIRE button · Melee: the MELEE button`,`Survive the waves · B: bag & crafting · Esc: exit`]}),window.addEventListener(`resize`,()=>{Sr.resize()});