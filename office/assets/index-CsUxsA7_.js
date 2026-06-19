import{$ as e,A as t,B as n,C as r,D as i,E as a,F as o,G as s,H as c,I as l,J as u,K as d,L as f,M as p,N as m,O as h,P as g,Q as _,R as v,S as y,T as b,U as x,V as S,W as C,X as w,Y as T,Z as E,_ as D,a as O,at as k,b as A,c as j,ct as M,d as N,et as P,f as F,g as ee,h as te,i as I,it as L,j as R,k as z,l as ne,lt as B,m as re,n as ie,nt as V,o as ae,ot as oe,p as H,q as se,r as ce,rt as U,s as le,st as W,t as ue,tt as de,u as fe,v as pe,w as G,x as me,y as he,z as ge}from"./three-kwVHJjHS.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var _e=Math.atan(1/Math.SQRT2),K=Math.atan(.5),ve=Math.PI/4,ye={PERSPECTIVE:4,ISOMETRIC:5,DIMETRIC:6},be=.12,xe=1.45,Se=4,Ce=40,we=1.5,Te=16,Ee=6,De=22,q=3.5,J=11,Oe=(e,t,n)=>e+(t-e)*(1-Math.exp(-8*n)),ke=(e,t)=>e+Math.PI*2*Math.round((t-e)/(Math.PI*2));function Ae({aspect:e,fov:t=48,near:r=.1,far:i=100,target:a=new M(0,.8,0),azimuth:o=ve,elevation:s=.52,distance:l=12,zoom:u=5.5}={}){let d=new c(t,e,r,i),f=new n(-1,1,1,-1,r,i),p=ye.PERSPECTIVE,h=e,g={azimuth:o,elevation:s,distance:l,zoom:u,target:a.clone()},_={azimuth:o,elevation:s,distance:l,zoom:u,target:a.clone()},v=!1,y=null,b=new M,x=()=>p===ye.PERSPECTIVE?d:f;function S(e){e!==p&&(p=e,p===ye.ISOMETRIC||p===ye.DIMETRIC?(g.elevation=p===ye.ISOMETRIC?_e:K,g.azimuth=ke(ve,_.azimuth),v=!0):v=!1)}function C(e,t){g.azimuth+=e,v||(g.elevation=m.clamp(g.elevation+t,be,xe))}function w(e){p===ye.PERSPECTIVE?g.distance=m.clamp(g.distance*e,Se,Ce):g.zoom=m.clamp(g.zoom*e,we,Te)}function T(e,t){let n=g.azimuth,r=p===ye.PERSPECTIVE?g.distance*.04:g.zoom*.08,i=new M(Math.cos(n),0,-Math.sin(n)),a=new M(-Math.sin(n),0,-Math.cos(n));g.target.addScaledVector(i,e*r),g.target.addScaledVector(a,t*r)}function E(e,t){h=e/t,d.aspect=h,d.updateProjectionMatrix()}function D(e){y&&(y(b),g.target.copy(b)),_.azimuth=Oe(_.azimuth,g.azimuth,e),_.elevation=Oe(_.elevation,g.elevation,e),_.distance=Oe(_.distance,g.distance,e),_.zoom=Oe(_.zoom,g.zoom,e),_.target.x=Oe(_.target.x,g.target.x,e),_.target.y=Oe(_.target.y,g.target.y,e),_.target.z=Oe(_.target.z,g.target.z,e);let t=Math.cos(_.elevation),n=Math.sin(_.elevation),r=Math.cos(_.azimuth),i=Math.sin(_.azimuth),a=x();if(a.position.set(_.target.x+_.distance*t*i,_.target.y+_.distance*n,_.target.z+_.distance*t*r),a.lookAt(_.target),a.isOrthographicCamera){let e=_.zoom,t=e*h;a.left=-t,a.right=t,a.top=e,a.bottom=-e,a.updateProjectionMatrix()}}function O(e,t,n,r=!1){g.target.set(e,t,n),r&&_.target.copy(g.target)}function k(e,t=!1){g.zoom=m.clamp(e,we,Te),t&&(_.zoom=g.zoom)}function A(e,{frame:t,snap:n=!1}={}){y=e,n&&(y(b),g.target.copy(b),_.target.copy(b)),t!=null&&(p===ye.PERSPECTIVE?g.distance=m.clamp(t,Se,Ce):g.zoom=m.clamp(t,we,Te))}function j(){y=null}return{get camera(){return x()},get mode(){return p},get azimuth(){return _.azimuth},get following(){return!!y},setTarget:O,setZoom:k,setFollow:A,clearFollow:j,get styleT(){return p===ye.PERSPECTIVE?m.clamp((_.distance-Ee)/(De-Ee),0,1):m.clamp((_.zoom-q)/(J-q),0,1)},setMode:S,orbit:C,zoomBy:w,pan:T,setViewport:E,update:D}}var je={value:0},Me=new H(`#ffffff`),Ne={value:0},Pe={value:0},Fe={value:0},Ie=new W,Le={value:0},Re={value:0},ze=`
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
`;function Be(e){e.uniforms.uVector=je,e.uniforms.uVecTint={value:Me},e.uniforms.uVecShadow=Ne,e.uniforms.uSnow=Pe,e.uniforms.uCloud=Fe,e.uniforms.uCloudOff={value:Ie},e.uniforms.uFogCharm=Le}function Ve(e){return e.replace(`#include <fog_fragment>`,`
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
  `)}function He(e){return e.replace(`#include <common>`,`#include <common>
varying vec3 vVecN;
varying vec3 vVecP;
varying vec2 vWorldXZ;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
  vVecN = normal;
  vVecP = position;
  vWorldXZ = (modelMatrix * vec4(position, 1.0)).xz;`)}function Ue(e){return e.replace(`#include <shadowmap_pars_fragment>`,`#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>`)}var We=`col *= mix(1.0, getShadowMask(), uVecShadow);`;function Ge(e,{color:t,id:n,windowGlow:r,winColors:i=[`#ffb852`,`#8cd9ff`],litFrac:a=.55}={}){let o=[0,1,2].map(e=>new H(i[e]??i[i.length-1]));return e.customProgramCacheKey=()=>`lgr-vec-tower`,e.onBeforeCompile=e=>{Be(e),e.uniforms.uWindowGlow=r,e.uniforms.uWinId={value:n},e.uniforms.uVecColor={value:new H(t)},e.uniforms.uWinA={value:o[0]},e.uniforms.uWinB={value:o[1]},e.uniforms.uWinC={value:o[2]},e.uniforms.uWinLit={value:a},e.vertexShader=He(e.vertexShader),e.fragmentShader=Ve(Ue(e.fragmentShader.replace(`#include <common>`,`#include <common>
        uniform float uWindowGlow;
        uniform float uWinId;
        uniform vec3  uVecColor;
        uniform vec3  uWinA; uniform vec3 uWinB; uniform vec3 uWinC;
        uniform float uWinLit;
        ${ze}
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
          ${We}                                  // the sun's shadow darkens the body
          vec3 wcol; vec2 w = winTerms(wcol);
          vec3 glass = vec3(0.17, 0.23, 0.34);          // dark glass-blue panes (day)
          col = mix(col, glass, w.x * 0.85);
          col += w.x * w.y * wcol * uWindowGlow * 1.5;  // …windows EMIT (unshadowed) at night
          gl_FragColor = vec4(col, diffuseColor.a);
        }`)))},e}function Y(e,{color:t=null,glow:n=null,glowDay:r=0,glowNight:i=1,windowGlow:a=null,season:o=!1}={}){let s=t===null,c=n!==null&&a!==null;return e.customProgramCacheKey=()=>`lgr-vec|`+(s?`d`:`c`)+(c?`g`:``)+(o?`s`:``),e.onBeforeCompile=e=>{Be(e),s||(e.uniforms.uVecColor={value:new H(t)}),c&&(e.uniforms.uGlow={value:new H(n)},e.uniforms.uGlowDay={value:r},e.uniforms.uGlowNight={value:i},e.uniforms.uWindowGlow=a),o&&(e.uniforms.uSeason=Re),e.vertexShader=He(e.vertexShader);let l=s?`diffuseColor.rgb`:`uVecColor`,u=o?`seasonShift(${l})`:l,d=(s?``:`uniform vec3 uVecColor;
`)+(c?`uniform vec3 uGlow; uniform float uGlowDay; uniform float uGlowNight; uniform float uWindowGlow;
`:``)+(o?`uniform float uSeason;
vec3 seasonShift(vec3 c){
  c = mix(c, vec3(0.86, 0.46, 0.13), smoothstep(0.40, 0.70, uSeason));   // → autumn orange
  c = mix(c, vec3(0.46, 0.33, 0.20), smoothstep(0.75, 1.00, uSeason));   // → bare brown
  return c;
}
`:``),f=c?`uGlow * mix(uGlowDay, uGlowNight, uWindowGlow)`:`vec3(0.0)`,p=Ve(Ue(e.fragmentShader.replace(`#include <common>`,`#include <common>
`+d+ze).replace(`#include <opaque_fragment>`,`#include <opaque_fragment>
        if (uVector > 0.5) {
          vec3 col = vecShade(${u});
          ${We}                            // the sun's shadow darkens the flat tier…
          gl_FragColor = vec4(col + ${f}, diffuseColor.a);  // …but the night glow stays lit
        }`)));c&&(p=p.replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>\n  totalEmissiveRadiance += ${f};`)),e.fragmentShader=p},e}function Ke(e){let t=e>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function qe(e){let t=Ke(e);return{next:t,range:(e,n)=>e+(n-e)*t(),int:(e,n)=>e+Math.floor(t()*(n-e+1)),pick:e=>e[Math.floor(t()*e.length)],chance:e=>t()<e}}var Je=[{key:`manhattan`,name:`Manhattan`,towers:[`#EDE3C8`,`#D9B98A`,`#B5562F`,`#A8C8E8`,`#2E3F5C`],ground:`#7CC455`,street:`#9AA0A6`,sidewalk:`#C8CCD0`,park:`#5DB347`,water:`#29A8D8`,shopfronts:[`#C04A3A`,`#3A7AC0`,`#C09A2A`],glass:`#7FA8CC`,winColors:[`#ffd27a`,`#9ad6ff`],hMax:4.6,sigma:.36,roofRate:.35,pSplit:.6,nightLit:.55,roofTint:null,coast:{base:.55,out:1,in:.6,jag:1.05},landmarks:[`empireState`,`chrysler`,`liberty`]},{key:`paris`,name:`Paris`,towers:[`#E8DCC0`,`#F2EAD6`,`#E0D2B4`],ground:`#8CC46A`,street:`#A8A29A`,sidewalk:`#D4CEC2`,park:`#6DB35A`,water:`#3FA8C8`,shopfronts:[`#C04A3A`,`#3A6B5A`,`#7A5AC0`],glass:`#5A6B7A`,winColors:[`#ffdca0`,`#ffcaa0`],hMax:1.5,sigma:.9,roofRate:.15,pSplit:.75,nightLit:.45,roofTint:`#6A7886`,coast:{base:1.05,out:.55,in:.3,jag:.5},landmarks:[`eiffel`,`arcDeTriomphe`,`sacreCoeur`]},{key:`neoTokyo`,name:`Neo-Tokyo`,towers:[`#2A3038`,`#3A4250`,`#252B36`,`#4A4456`],ground:`#3A4A42`,street:`#5A6068`,sidewalk:`#7A8088`,park:`#2E5E46`,water:`#0E6878`,shopfronts:[`#E8483A`,`#5AE8E0`,`#E85AA0`],glass:`#5AE8E0`,winColors:[`#5AE8E0`,`#E85AA0`,`#E8E06A`],hMax:5.2,sigma:.42,roofRate:.6,pSplit:.6,nightLit:.7,roofTint:null,coast:{base:.7,out:1.05,in:.62,jag:1.7},landmarks:[`tokyoTower`,`pagoda`,`neonBillboard`]}];Je.map(e=>e.key);var Ye=.3,Xe=1.9,Ze=.55,Qe=2.45,$e=.12,et=.6,tt=6,X={BASE:.7,OUT:.95,IN:.55,JAG:1,SAMPLES_PER_EDGE:28,HARBOR_DEPTH:.55,HARBOR_WIDTH:.26},nt={PLINTH_TOP:Ye,BLOCK:Xe,STREET:Ze,PITCH:Qe,SIDEWALK:$e,SHORE:et,N:tt,COAST:X};function rt(e,t,n){let r=n?.base??X.BASE,i=n?.out??X.OUT,a=n?.in??X.IN,o=n?.jag??X.JAG,s=t+r,c=qe((e^789079)>>>0),l=[2,3,5,8,11,13].map(e=>({k:e,amp:1/e*o**((e-2)/6),phase:c.range(0,Math.PI*2)})),u=l.reduce((e,t)=>e+t.amp,0),d=e=>{let t=0;for(let n of l)t+=n.amp*Math.sin(n.k*e*Math.PI*2+n.phase);return Math.max(-1,Math.min(1,t/(u*.6)))},f=[{fix:+s,nx:1,nz:0,sign:1},{fix:+s,nx:0,nz:1,sign:-1},{fix:-s,nx:-1,nz:0,sign:-1},{fix:-s,nx:0,nz:-1,sign:1}],p=t+.22,m=X.SAMPLES_PER_EDGE,h=4*m,g=[],_=0;for(let e=0;e<4;e++){let t=f[e];for(let n=0;n<m;n++,_++){let o=n/m,c=_/h,l=(-s+2*s*o)*t.sign,u=d(c),f=u>=0?u*i:u*a;if(e===0){let e=Math.abs(o-.5);if(e<X.HARBOR_WIDTH){let t=.5+.5*Math.cos(e/X.HARBOR_WIDTH*Math.PI);f-=(r+X.HARBOR_DEPTH)*t}}let v,y;t.nx===0?(y=t.fix+t.nz*f,v=l,y=t.nz>0?Math.max(y,p):Math.min(y,-p)):(v=t.fix+t.nx*f,y=l,v=t.nx>0?Math.max(v,p):Math.min(v,-p)),g.push(new W(v,y))}}return{points:g,B:s,maxR:s+i,harborX:p}}function it(e){(Array.isArray(e)?e:[e]).forEach(e=>e&&e.dispose&&e.dispose())}function at({seed:e=1,profileIndex:t=0,landmarkFactory:n=null,windowGlow:r}){let i=new G,s=new G,c=new G;s.raycast=()=>{},c.raycast=()=>{},i.add(s,c);let u=new pe(16773594,3);u.position.set(.45,.6,-.65).multiplyScalar(10);let d=new a(7313331,2762272,1);i.add(u,d);let p=0,m=[],h={seed:e,profileIndex:t,profile:Je[t],extent:0,meshCount:0};function g(e,t,n,r){let i=new o(new O(e,.04,t),Y(new f({color:r,roughness:.95,flatShading:!0}),{color:r}));return i.position.y=n,i.userData.ground=!0,i}function _(e,t){for(let e of s.children)e.geometry&&e.geometry.dispose(),it(e.material);s.clear();for(let e of c.children)e.traverse(e=>{e.isMesh&&it(e.material)});c.clear(),m.length=0,p=0;let r=qe(e),i=Je[t],a=(tt-1)/2*Qe,l=7.075;h={seed:e,profileIndex:t,profile:i,extent:l+(i.coast?.base??X.BASE),meshCount:0};let u=rt(e,l,i.coast);h.coast=u;let d=new P;u.points.forEach((e,t)=>t?d.lineTo(e.x,e.y):d.moveTo(e.x,e.y)),d.closePath();let _=new o(new A(d,{depth:2,bevelEnabled:!1,steps:1}),Y(new f({color:i.ground,roughness:.9,flatShading:!0,side:2}),{color:i.ground}));_.rotation.x=-Math.PI/2,_.position.y=Ye-2,_.userData.ground=!0,s.add(_);let C=2*7.195;s.add(g(C,C,.32,i.street)),x(u.harborX,i);let w=[];for(let e=0;e<tt;e++)for(let t=0;t<tt;t++)w.push([e,t]);let T=new Set,E=Math.max(1,Math.round(w.length*.08));for(;T.size<E;)T.add(r.int(0,w.length-1));let D=r.range(-2.45*.6,Qe*.6),O=r.range(-2.45*.6,Qe*.6),k=Math.hypot(a,a),j=[];if(w.forEach(([e,t],n)=>{let a=(e-(tt-1)/2)*Qe,o=(t-(tt-1)/2)*Qe;if(s.add(g(Xe,Xe,.32999999999999996,i.sidewalk).translateX(a).translateZ(o)),T.has(n)){s.add(g(Xe-$e*2,Xe-$e*2,.35,i.park).translateX(a).translateZ(o));let e=r.int(3,5);for(let t=0;t<e;t++)S(a+r.range(-.6,.6),o+r.range(-.6,.6),i,r);return}let c=Xe-$e*2,l=r.chance(i.pSplit)?2:1,u=r.chance(i.pSplit)?2:1,d=c/l,f=c/u;for(let e=0;e<l;e++)for(let t=0;t<u;t++){let n=a-c/2+d*(e+.5),s=o-c/2+f*(t+.5),l=Math.max(.6,d-.1),u=Math.max(.6,f-.1),p=Math.hypot(n-D,s-O)/k,m=Math.exp(-(p*p)/(2*i.sigma*i.sigma)),h=Math.max(.5,.5+(i.hMax-.5)*m*r.range(.75,1.25));h>i.hMax*.5&&Math.min(l,u)>=.7&&j.push({lx:n,lz:s,fw:l,fd:u,h,r:p}),v(n,s,l,u,h,i,r)}}),n&&n.ready){j.sort((e,t)=>e.r-t.r);let e=[],t=i.landmarks;for(let r=0;r<t.length&&j.length;r++){let a=null;for(let t of j)if(e.every(e=>Math.hypot(e.lx-t.lx,e.lz-t.lz)>Qe*.9)){a=t;break}a||=j[0],e.push(a),y(a.lx,a.lz);let o=i.hMax*n.heightFactor(t[r]),s=n.make(t[r],{x:a.lx,z:a.lz,w:a.fw,d:a.fd,h:o,plinthTop:Ye});if(s){c.add(s);let e=new I().setFromObject(s);b(e.min.x-.15,e.max.x+.15,e.min.z-.15,e.max.z+.15)}}}s.traverse(e=>{e.isMesh&&(e.userData.ground?(e.castShadow=!1,e.receiveShadow=!0):e.material&&e.material.isMeshBasicMaterial?(e.castShadow=!1,e.receiveShadow=!1):(e.castShadow=!0,e.receiveShadow=!0))}),c.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),h.meshCount=s.children.length+c.children.length;let M=0;for(let e of s.children){let t=e.position;M=(Math.imul(M,16777619)^(Math.round(t.x*100)*2654435761^Math.round(t.y*100)*40503^Math.round(t.z*100)*2246822519))>>>0}for(let e of h.coast.points)M=(Math.imul(M,16777619)^(Math.round(e.x*100)*2654435761^Math.round(e.y*100)*40503))>>>0;h.sig=M,window.__city={seed:e,profile:i.key,meshes:h.meshCount,sig:M}}function v(e,t,n,i,a,c,u){let d=Ge(new f({flatShading:!0,roughness:.7,metalness:.05}),{color:u.pick(c.towers),id:++p,windowGlow:r,winColors:c.winColors,litFrac:c.nightLit}),h=new o(new O(n,a,i),d);if(h.position.set(e,Ye+a/2,t),h.userData.lot=[e,t],s.add(h),c.roofTint){let r=Y(new f({color:c.roofTint,roughness:.85,flatShading:!0}),{color:c.roofTint}),l=new o(new O(n*1.02,.08,i*1.02),r);l.position.set(e,Ye+a+.04,t),l.userData.lot=[e,t],s.add(l)}if(a<1.4){let r=u.pick(c.shopfronts),a=new o(new O(n*1.04,.18,i*1.04),Y(new f({color:r,roughness:.8,flatShading:!0}),{color:r}));a.position.set(e,.39,t),a.userData.lot=[e,t],s.add(a)}let g=Ye+a,_=n,v=i;if(a>c.hMax*.5&&u.chance(.55)){let l=n*u.range(.5,.72),d=i*u.range(.5,.72),m=a*u.range(.18,.4),h=new o(new O(l,m,d),Ge(new f({flatShading:!0,roughness:.7,metalness:.05}),{color:u.pick(c.towers),id:++p,windowGlow:r,winColors:c.winColors,litFrac:c.nightLit}));h.position.set(e,Ye+a+m/2,t),h.userData.lot=[e,t],s.add(h),g=Ye+a+m,_=l,v=d}if(a>c.hMax*.45&&u.chance(c.roofRate)){let n=u.chance(.5)?new o(new O(_*.4,.18,v*.4),Y(new f({color:`#9a9a9a`,flatShading:!0}),{color:`#9a9a9a`})):new o(new te(_*.18,_*.18,.22,10),Y(new f({color:`#b9bec4`,flatShading:!0}),{color:`#b9bec4`}));if(n.position.set(e+u.range(-.1,.1),g+.11,t+u.range(-.1,.1)),n.userData.lot=[e,t],s.add(n),u.chance(.25)){let n=new o(new de(.05,6,5),new l({color:`#ff3b30`,transparent:!0,opacity:1}));n.position.set(e,g+.15,t),n.userData.lot=[e,t],n.raycast=()=>{},s.add(n),m.push({mesh:n,phase:u.range(0,6.28)})}}if(a>c.hMax*.7&&u.chance(.35)){let n=a*u.range(.18,.34),r=new o(new te(.018,.05,n,6),Y(new f({color:`#c8ccd2`,flatShading:!0}),{color:`#c8ccd2`}));r.position.set(e,g+n/2,t),r.userData.lot=[e,t],r.raycast=()=>{},s.add(r)}}function y(e,t){for(let n=s.children.length-1;n>=0;n--){let r=s.children[n];r.userData.lot&&Math.abs(r.userData.lot[0]-e)<1e-4&&Math.abs(r.userData.lot[1]-t)<1e-4&&(r.geometry&&r.geometry.dispose(),it(r.material),s.remove(r))}for(let e=m.length-1;e>=0;e--)m[e].mesh.parent||m.splice(e,1)}function b(e,t,n,r){for(let i=s.children.length-1;i>=0;i--){let a=s.children[i];a.userData.lot&&a.position.x>=e&&a.position.x<=t&&a.position.z>=n&&a.position.z<=r&&(a.geometry&&a.geometry.dispose(),it(a.material),s.remove(a))}}function x(e,t){let n=Y(new f({color:`#7a5634`,roughness:.95,flatShading:!0}),{color:`#7a5634`}),r=(e,t,r,i)=>{let a=new o(new O(e,.06,t),n);a.position.set(r,Ye-.16,i),s.add(a)};r(.24,2,e+.02,0),r(1.3,.22,e+.7,-.72),r(1.3,.22,e+.7,.72)}function S(e,t,n,r){let i=new H(n.park),a=(n,a)=>{let c=i.clone().offsetHSL(0,0,r.range(-.06,.06)).getStyle(),l=new o(new de(n,7,6),Y(new f({color:c,flatShading:!0}),{color:c,season:!0}));l.scale.y=.7,l.position.set(e,Ye+a,t),l.userData.lot=null,s.add(l)},c=new o(new O(.05,.18,.05),Y(new f({color:`#6b4a2a`,flatShading:!0}),{color:`#6b4a2a`}));c.position.set(e,.39,t),s.add(c),a(.22,.28),a(.16,.46)}function C(e){for(let t of m)t.mesh.material.opacity=.35+.65*(.5+.5*Math.sin(e*3+t.phase))}return _(e,t),{group:i,key:u,fill:d,update:C,generate:_,get state(){return h},get extent(){return h.extent},get waterColor(){return h.profile.water},profiles:Je}}var ot=Math.PI*2,st=.7,ct=90,lt=[{name:`night`,sun:`#4a6f9e`,intensity:.35,hemiSky:`#26344f`,hemiGround:`#0c1018`,horizon:`#1e2942`,sky:`#36486e`,exposure:.95,outline:`#101a30`,window:1,toonGain:2.6},{name:`dawn`,sun:`#ff9e54`,intensity:2.4,hemiSky:`#8a7686`,hemiGround:`#2a1f1a`,horizon:`#b8512c`,sky:`#ffb070`,exposure:1.05,outline:`#241826`,window:.3,toonGain:2},{name:`noon`,sun:`#fff4e0`,intensity:4.6,hemiSky:`#9cb8cc`,hemiGround:`#33302a`,horizon:`#5e7689`,sky:`#aacadd`,exposure:1.18,outline:`#0b0a08`,window:0,toonGain:1.7},{name:`dusk`,sun:`#ff6b35`,intensity:2,hemiSky:`#7a566a`,hemiGround:`#281a18`,horizon:`#b0432a`,sky:`#ff8a5a`,exposure:1.05,outline:`#1f1420`,window:.4,toonGain:2}],ut=e=>e-Math.floor(e),dt=(e,t,n)=>e+(t-e)*n,ft=(e,t,n)=>e+(t-e)*(1-Math.exp(-6*n));function pt({t:e=.5}={}){let t=e,n=e,r=!1,i=!1,a=lt.map(e=>({name:e.name,sun:new H(e.sun),hemiSky:new H(e.hemiSky),hemiGround:new H(e.hemiGround),horizon:new H(e.horizon),sky:new H(e.sky),outline:new H(e.outline),intensity:e.intensity,exposure:e.exposure,window:e.window,toonGain:e.toonGain})),o=new M(0,1,0),s=new H(`#fff4e0`),c=new H(`#6f97b3`),l=new H(`#2a2620`),u=new H(`#3a4a57`),d=new H(`#7da3bd`),f=new H(`#0b0a08`),p=new H(`#000000`),m=3,h=1,g=0,_=1.7,v=new M;function y(e){let t=ut(e)*4,n=Math.floor(t)%4,r=(n+1)%4,i=t-Math.floor(t),y=a[n],b=a[r];s.lerpColors(y.sun,b.sun,i),c.lerpColors(y.hemiSky,b.hemiSky,i),l.lerpColors(y.hemiGround,b.hemiGround,i),u.lerpColors(y.horizon,b.horizon,i),d.lerpColors(y.sky,b.sky,i),f.lerpColors(y.outline,b.outline,i),m=dt(y.intensity,b.intensity,i),h=dt(y.exposure,b.exposure,i),g=dt(y.window,b.window,i),_=dt(y.toonGain,b.toonGain,i),p.setRGB(.045*g,.075*g,.14*g);let x=ut(e)*ot-Math.PI/2,S=Math.cos(x),C=Math.sin(x);v.set(S,C*Math.cos(st),C*Math.sin(st)),v.y>=0?o.copy(v):o.copy(v).negate()}return y(t),{sunDir:o,sunColor:s,hemiSky:c,hemiGround:l,horizon:u,sky:d,outline:f,toonFloor:p,sunArc:v,get sunIntensity(){return m},get exposure(){return h},get windowGlow(){return g},get toonGain(){return _},get t(){return ut(t)},get auto(){return r},get clock(){let e=Math.round(ut(t)*24*60)%1440;return`${String(Math.floor(e/60)).padStart(2,`0`)}:${String(e%60).padStart(2,`0`)}`},cyclePreset(){n=(Math.floor(t*4+1e-4)+1)/4},nudge(e){n+=e/24},goTo(e){n=e},toggleAuto(){r=!r},setReducedMotion(e){i=e},update(e){r&&!i&&(n+=e/ct),t=ft(t,n,e),y(t)}}}function mt(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.35,`rgba(255,255,255,0.55)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new j(e);return r.colorSpace=E,r}function ht(e,t){let n=[];for(let r=0;r<16;r++){let i=r/16*Math.PI*2;n.push(new M(Math.cos(i)*e,t,Math.sin(i)*e))}return new fe(n,!0,`catmullrom`,.5)}function gt(e){let t=(t,n)=>Math.exp(-((e-t)*(e-t))/(2*n*n)),n=Math.max(t(.33,.05),t(.75,.06)),r=m.smoothstep(e,.24,.3)*(1-m.smoothstep(e,.8,.88));return m.clamp(.15+.55*r+.45*n,.12,1)}function _t(){let{PITCH:e,N:t,PLINTH_TOP:n}=nt,r=t+1,i=n+.04,a=n=>(n-t/2)*e,o=t/2,s=[],c=(e,t)=>t*r+e;for(let e=0;e<r;e++)for(let t=0;t<r;t++)s.push({x:a(t),z:a(e),i:t,j:e,edges:[]});let l=[],u=(t,n)=>{let r=(s[t].i===o||s[t].j===o)&&(s[n].i===o||s[n].j===o),i=l.length;l.push({a:t,b:n,len:e,main:r}),s[t].edges.push(i),s[n].edges.push(i)};for(let e=0;e<r;e++)for(let t=0;t<r;t++)t<r-1&&u(c(t,e),c(t+1,e)),e<r-1&&u(c(t,e),c(t,e+1));return{nodes:s,edges:l,y:i,mid:o}}function vt({plinthTop:e=.3,extent:t=4,profile:n=null}={}){let r=new G,a=_t(),{nodes:o,edges:c}=a,u=a.y,p=.34,h=0;{let e=nt.PITCH-p*2;h=Math.max(1,Math.floor((e+.26)/.56))}let g=new l({color:`#e8c84a`,fog:!0}),_=new i(new O(.05,.012,.3),g,c.length*h);_.frustumCulled=!1,_.raycast=()=>{},_.receiveShadow=!1,_.castShadow=!1,r.add(_);{let e=new ge,t=0;for(let n of c){let r=o[n.a],i=o[n.b],a=i.x-r.x,s=i.z-r.z,c=Math.hypot(a,s),l=a/c,d=s/c,f=Math.atan2(l,d),m=c-p*2;for(let n=0;n<h;n++){let i=p+(h===1?m/2:m*n/(h-1));e.position.set(r.x+l*i,u,r.z+d*i),e.rotation.set(0,f,0),e.updateMatrix(),_.setMatrixAt(t++,e.matrix)}}_.instanceMatrix.needsUpdate=!0}let v=new i(new O(.34,.26,.74),Y(new f({flatShading:!0,roughness:.5,metalness:.3})),12);v.castShadow=!0,v.receiveShadow=!1,v.frustumCulled=!1,v.raycast=()=>{};let y=new le,b=new Float32Array(72),x=new Float32Array(72),S=new H(`#fff0c0`),C=new H(`#ff3528`);for(let e=0;e<12;e++)S.toArray(x,e*3),C.toArray(x,(12+e)*3),b[e*3+1]=-50,b[(12+e)*3+1]=-50;y.setAttribute(`position`,new ae(b,3)),y.setAttribute(`color`,new ae(x,3));let w=new d({size:.72,sizeAttenuation:!0,map:mt(),vertexColors:!0,transparent:!0,opacity:0,blending:2,depthWrite:!1}),T=new s(y,w);T.frustumCulled=!1,T.raycast=()=>{},r.add(v,T);let E=[`#f4c430`,`#c0392b`,`#d8dde2`,`#9aa7b4`,`#6b7785`,`#5a7d9a`],D=Ke(2403557),k=c.map((e,t)=>t).filter(e=>c[e].main),A=[];for(let e=0;e<12;e++){let t=e<4&&k.length?k[D()*k.length|0]:D()*c.length|0,n=e===1;A.push({edge:t,fwd:D()<.5,s:D()*c[t].len,speed:n?.5:.78+e%3*.1,lenZ:n?1.45:1,color:E[n?1:e===0?0:2+e%4],rng:Ke(12648430+e*2654435761),isBus:n,pos:new M,dirX:0,dirZ:1,active:!1})}let j=new H;A.forEach((e,t)=>v.setColorAt(t,j.set(e.color)));function N(e,t,n){let r=o[e],i=r.edges.filter(e=>e!==t);if(i.length===0)return t;let a=c[t],s=a.a===e?a.b:a.a,l=r.x-o[s].x,u=r.z-o[s].z,d=Math.hypot(l,u)||1,f=i[0],p=-2;for(let t of i){let n=c[t],i=n.a===e?n.b:n.a,a=o[i].x-r.x,s=o[i].z-r.z,m=Math.hypot(a,s)||1,h=l/d*(a/m)+u/d*(s/m);h>p&&(p=h,f=t)}return n()<.65?f:i[n()*i.length|0]}let P=N,F=new ge,ee=(e,t)=>{F.position.set(0,-50,0),F.scale.setScalar(0),F.updateMatrix(),e.setMatrixAt(t,F.matrix)},te=.085,I=nt.PLINTH_TOP+.02+.13,L=new i(new ne(.04,.1,3,6),Y(new f({flatShading:!0,roughness:.8})),14);L.castShadow=!0,L.receiveShadow=!1,L.frustumCulled=!1,L.raycast=()=>{};let R=ht(t-.72,e),z=[];for(let e=0;e<14;e++)z.push({phase:e/14,speed:.12+e%4*.02,dir:e%2?1:-1,pos:new M,active:!1});let B=new M,re=new M,ie=new H;z.forEach((e,t)=>L.setColorAt(t,ie.set([`#caa`,`#9ab`,`#bba`,`#ab9`][t%4]))),r.add(L);let V={manhattan:`#e8c84a`,paris:`#dcd2bc`,neoTokyo:`#5ae8e0`};function oe(e){e&&g.color.set(V[e.key]||`#e8c84a`)}oe(n);function se(t,n,r){let i=r?r.t:.5,a=r?r.windowGlow:0,s=Math.max(2,Math.round(gt(i)*12)),l=a>.05;for(let e=0;e<12;e++){if(e>=s){ee(v,e),A[e].active=!1,b[e*3+1]=-50,b[(12+e)*3+1]=-50;continue}let n=A[e];n.s+=t*n.speed;let r=0;for(;n.s>=c[n.edge].len&&r++<4;){n.s-=c[n.edge].len;let e=n.fwd?c[n.edge].b:c[n.edge].a,t=P(e,n.edge,n.rng);n.edge=t,n.fwd=c[t].a===e}let i=c[n.edge],a=n.fwd?o[i.a]:o[i.b],u=n.fwd?o[i.b]:o[i.a],d=u.x-a.x,f=u.z-a.z,p=Math.hypot(d,f)||1,m=d/p,h=f/p,g=-h,_=m,y=a.x+m*n.s+g*te,x=a.z+h*n.s+_*te,S=Math.atan2(m,h);F.position.set(y,I,x),F.rotation.set(0,S,0),F.scale.set(1,1,n.lenZ),F.updateMatrix(),v.setMatrixAt(e,F.matrix),n.pos.set(y,I,x),n.dirX=m,n.dirZ=h,n.active=!0;let C=.74*n.lenZ*.5,w=I+.06,T=e*3,E=(12+e)*3;l?(b[T]=y+m*(C+.04),b[T+1]=w,b[T+2]=x+h*(C+.04),b[E]=y-m*(C+.02),b[E+1]=w,b[E+2]=x-h*(C+.02)):(b[T+1]=-50,b[E+1]=-50)}v.instanceMatrix.needsUpdate=!0,y.attributes.position.needsUpdate=!0,w.opacity=m.clamp(a*1.8,0,1);let u=Math.max(2,Math.round(gt(i)*14));for(let t=0;t<14;t++){if(t>=u){ee(L,t),z[t].active=!1;continue}let r=z[t],i=(r.phase+r.dir*r.speed*n*.02+1e3)%1;R.getPointAt(i,B),R.getTangentAt(i,re);let a=Math.sin(n*6+r.phase*30)*.015;F.position.set(B.x,e+.09+a,B.z),F.rotation.set(0,Math.atan2(re.x*r.dir,re.z*r.dir),Math.sin(n*6+r.phase*30)*.06),F.scale.setScalar(1),F.updateMatrix(),L.setMatrixAt(t,F.matrix),r.pos.set(B.x,e+.09,B.z),r.active=!0}L.instanceMatrix.needsUpdate=!0}let ce=[...A.map((e,t)=>({kind:`car`,label:e.isBus?`bus`:`car ${t+1}`,getWorldPos:t=>t.copy(e.pos),active:()=>e.active,info:()=>`${e.isBus?`bus`:`car`} · ${c[e.edge].main?`main avenue`:`side street`} → heading ${yt(e.dirX,e.dirZ)}`})),...z.map((e,t)=>({kind:`person`,label:`person ${t+1}`,getWorldPos:t=>t.copy(e.pos),active:()=>e.active,info:()=>`person · strolling the waterfront promenade`}))];function U(){return ce}return{group:r,update:se,setProfile:oe,getFollowables:U,graph:a,setRouter(e){P=e||N}}}function yt(e,t){return[`N`,`NE`,`E`,`SE`,`S`,`SW`,`W`,`NW`][(Math.round(Math.atan2(e,t)/(Math.PI/4))%8+8)%8]}function bt({frames:e,fps:t=8,cols:n,rows:r=1}={}){let i=n||e||4,a=r||1,o=e||i*a,s=typeof window<`u`&&window.matchMedia?window.matchMedia(`(prefers-reduced-motion: reduce)`):null;function c(e,t){let n=t%i,r=Math.floor(t/i);e.offset.x=n/i,e.offset.y=1-(r+1)/a}function l(e){let t=e.clone();return t.needsUpdate=!0,t.repeat.set(1/i,1/a),c(t,0),t}function u(e,n,r=0){if(s&&s.matches)return c(e,0),0;let i=(Math.floor(n*t+r)%o+o)%o;return c(e,i),i}function d(e,t){let n=(Math.round(t)%o+o)%o;return c(e,n),n}return{frames:o,fps:t,cols:i,rows:a,makeInstanceTexture:l,step:u,setFrame:d}}function xt(e){if(typeof document>`u`||!e||!e.image)return e;let t=e.image,n=t.width||t.naturalWidth,r=t.height||t.naturalHeight,i=document.createElement(`canvas`);i.width=n,i.height=r;let a=i.getContext(`2d`,{willReadFrequently:!0});a.drawImage(t,0,0,n,r);let o=a.getImageData(0,0,n,r),s=o.data;for(let e=0;e<s.length;e+=4){let t=s[e]*.299+s[e+1]*.587+s[e+2]*.114|0;s[e]=s[e+1]=s[e+2]=t}a.putImageData(o,0,0);let c=new j(i);return c.colorSpace=e.colorSpace||`srgb`,c}function St({url:e,fallback:t,luminance:n=!1,onReady:r}={}){let i=n?xt(t):t;return e&&typeof window<`u`&&new k().load(e,e=>{e.colorSpace=E,r&&r(n?xt(e):e)},void 0,()=>{}),i}var Ct=``+new URL(`gull_diffusion_sheet-BMlUTLhu.png`,import.meta.url).href;function wt(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.4,`rgba(255,255,255,0.5)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new j(e);return r.colorSpace=E,r}function Tt(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64*.62,0,64/2,64*.62,64*.5);n.addColorStop(0,`rgba(240,250,255,0.95)`),n.addColorStop(1,`rgba(240,250,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new j(e);return r.colorSpace=E,r}function Et(){let e=document.createElement(`canvas`);e.width=256,e.height=64;let t=e.getContext(`2d`);t.strokeStyle=`#ffffff`,t.lineWidth=6,t.lineCap=`round`,t.lineJoin=`round`;let n=[14,24,36,24];for(let e=0;e<4;e++){let r=e*64,i=n[e];t.beginPath(),t.moveTo(r+8,40),t.quadraticCurveTo(r+24,i,r+32,36),t.quadraticCurveTo(r+40,i,r+56,40),t.stroke()}let r=new j(e);return r.colorSpace=E,r}function Dt(e,t,n=18){let r=[];for(let i=0;i<n;i++){let a=i/n*Math.PI*2;r.push(new M(Math.cos(a)*e,t,Math.sin(a)*e))}return new fe(r,!0,`catmullrom`,.5)}function Ot(e,t,n){let r=e-t,i=[],a=(e,t)=>i.push(new M(e,n,t)),o=(e,n,r,i,o=4)=>{for(let s=1;s<=o;s++){let c=r+(i-r)*(s/o);a(e+Math.cos(c)*t,n+Math.sin(c)*t)}};for(let t=0;t<4;t++)a(e,-r+2*r*t/4);o(r,r,0,Math.PI/2);for(let t=0;t<4;t++)a(r-2*r*t/4,e);o(-r,r,Math.PI/2,Math.PI);for(let t=0;t<4;t++)a(-e,r-2*r*t/4);o(-r,-r,Math.PI,1.5*Math.PI);for(let t=0;t<4;t++)a(-r+2*r*t/4,-e);return o(r,-r,1.5*Math.PI,2*Math.PI),new fe(i,!0,`catmullrom`,.5)}function kt({extent:e=8,waterSize:t=28,plinthTop:n=.3}={}){let r=new G;r.raycast=()=>{};let i=.06,a=(e,n,r)=>r.set(e/t+.5,-n/t+.5,0),c=[Ot(9.5,3,i),Dt(12.7,i),new fe([new M(8.4,i,0),new M(11,i,-3.6),new M(13,i,0),new M(11,i,3.6)],!0,`catmullrom`,.5)],l=c.map(e=>e.getLength());function u({scale:e=1,hull:t=`#6b7785`,cabin:n=`#e7ecf2`}){let r=new G,i=new o(new O(.46*e,.2*e,1.1*e),Y(new f({color:t,roughness:.6,metalness:.2,flatShading:!0}),{color:t}));i.position.y=.02;let a=new o(new O(.3*e,.22*e,.42*e),Y(new f({color:n,roughness:.7,flatShading:!0}),{color:n}));return a.position.set(0,.18*e,.08*e),r.add(i,a),r.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!1),e.raycast=()=>{}}),r.userData.halfLen=.55*e,r}let p=[{laneIndex:0,dir:1,speed:.5,wake:.024,scale:1,hull:`#5a6675`,cabin:`#e7ecf2`},{laneIndex:1,dir:-1,speed:.42,wake:.022,scale:1,hull:`#7a5b46`,cabin:`#d9c3a6`},{laneIndex:0,dir:1,speed:.56,wake:.024,scale:.9,hull:`#456079`,cabin:`#cfe0ee`},{laneIndex:2,dir:1,speed:.34,wake:.03,scale:1.35,hull:`#39505f`,cabin:`#e2b85a`}];p.forEach((e,t)=>{e.mesh=u(e),e.u=t*.27%1,e.phase=t*1.7,e.isFerry=e.laneIndex===2,r.add(e.mesh)});let h=p.length,g=h*2,_=new le,v=new Float32Array(g*3).fill(-50),y=new Float32Array(g*3),b=new H(`#fff0c0`),x=new H(`#ff3528`);for(let e=0;e<h;e++)b.toArray(y,e*3),x.toArray(y,(h+e)*3);_.setAttribute(`position`,new ae(v,3)),_.setAttribute(`color`,new ae(y,3));let S=new s(_,new d({size:.6,sizeAttenuation:!0,map:wt(),vertexColors:!0,transparent:!0,opacity:0,blending:2,depthWrite:!1}));S.frustumCulled=!1,S.raycast=()=>{},r.add(S);function C(e,t){let n=new o(new de(e,9,7),Y(new f({color:t,roughness:.5,flatShading:!0}),{color:t}));return n.scale.set(.55,.5,1),n.castShadow=!1,n.receiveShadow=!1,n.raycast=()=>{},n.position.y=-5,n}let w=[{x:-9.5,z:6,size:.18,color:`#5b6f86`,period:11,arcH:.55,span:1.1,whale:!1},{x:7.5,z:-9.5,size:.16,color:`#4a6076`,period:14,arcH:.5,span:1,whale:!1},{x:-7,z:-8.5,size:.2,color:`#607089`,period:9,arcH:.6,span:1.2,whale:!1},{x:10.5,z:7,size:.62,color:`#3a4350`,period:38,arcH:.9,span:2.6,whale:!0}];w.forEach((e,t)=>{e.mesh=C(e.size,e.color),e.heading=Math.atan2(-e.x,-e.z),e.t=t/w.length*e.period,e.splashed=!1,r.add(e.mesh),e.whale&&(e.spout=new U(new L({map:Tt(),transparent:!0,opacity:0,depthWrite:!1,fog:!0})),e.spout.scale.set(.6,1.1,1),e.spout.position.set(e.x,-5,e.z),r.add(e.spout))});let T=bt({frames:4,fps:7}),E=[`#ffffff`,`#cfd4da`,`#c8a06a`],D=[],k=St({url:Ct,fallback:Et(),luminance:!0,onReady:e=>{k=e;for(let t of D){let n=t.sp.material.map;t.sp.material.map=T.makeInstanceTexture(e),t.sp.material.needsUpdate=!0,n&&n.dispose()}typeof window<`u`&&(window.__gullSheet=`diffusion`)}});for(let e=0;e<4;e++){let t=new U(new L({map:T.makeInstanceTexture(k),color:new H(E[e%E.length]),transparent:!0,opacity:0,depthWrite:!1,fog:!0}));t.scale.setScalar(.5),D.push({sp:t,r:8.6+e*.5,y:1.1+e%2*.5,speed:(.18+e*.03)*(e%2?-1:1),phase:e*1.9}),r.add(t)}typeof window<`u`&&(window.__gullSheet=window.__gullSheet||`procedural`,window.__gullAnim={frames:T.frames,variants:E.length,fps:T.fps});let A=w.length,j=Array.from({length:h+A},()=>new M),N=e=>e.laneIndex,P=new M,F=new M,ee=new M;function te(e,t,n){let r=n?n.windowGlow:0,o=1-r;for(let n=0;n<h;n++){let o=p[n],s=c[o.laneIndex],u=l[o.laneIndex],d=o.isFerry?.45+.55*Math.min(1,Math.abs((o.u+.5)%1-.5)*3):1,f=o.u;o.u=(o.u+o.dir*e*o.speed*d/u+1)%1,(o.dir>0?o.u<f:o.u>f)&&(o.laneIndex=N(o)),s.getPointAt(o.u,P),s.getTangentAt(o.u,F);let m=F.x*o.dir,g=F.z*o.dir,_=Math.atan2(m,g),y=Math.sin(t*1.1+o.phase)*.025;o.mesh.position.set(P.x,i+y,P.z),o.mesh.rotation.set(Math.sin(t*.9+o.phase)*.04,_,0);let b=o.mesh.userData.halfLen;a(P.x-m*b,P.z-g*b,ee),j[n].set(ee.x,ee.y,o.wake);let x=n*3,S=(h+n)*3;if(r>.05){let e=.18;v[x]=P.x+m*(b+.05),v[x+1]=e,v[x+2]=P.z+g*(b+.05),v[S]=P.x-m*(b+.02),v[S+1]=e,v[S+2]=P.z-g*(b+.02)}else v[x+1]=-50,v[S+1]=-50}I(),S.material.opacity=m.clamp(r*1.8,0,1);for(let t=0;t<A;t++){let n=w[t];n.t+=e;let r=h+t,o=n.whale?3.2:1.3;if(n.t>=n.period){let e=(n.t-n.period)/o;if(e>=1){n.t=0,n.splashed=!1,n.mesh.position.y=-5,n.spout&&(n.spout.material.opacity=0),j[r].set(0,0,0);continue}let t=Math.sin(Math.PI*e),s=(e-.5)*n.span,c=n.x+Math.sin(n.heading)*s,l=n.z+Math.cos(n.heading)*s;n.mesh.position.set(c,i-.1+t*n.arcH,l),n.mesh.rotation.set(Math.cos(Math.PI*e)*.9,n.heading,0);let u=e<.16||e>.84;if(a(c,l,ee),j[r].set(ee.x,ee.y,u?n.whale?.07:.05:0),n.spout){let t=m.clamp((e-.15)*3,0,1)*(1-e);n.spout.position.set(c,.56+t*.6,l),n.spout.material.opacity=t*.9}}else n.mesh.position.y=-5,j[r].set(0,0,0),n.spout&&(n.spout.material.opacity=0)}for(let e=0;e<4;e++){let n=D[e],r=n.phase+t*n.speed*.25;n.sp.position.set(Math.cos(r)*n.r,n.y+Math.sin(t*1.4+n.phase)*.12,Math.sin(r)*n.r),n.sp.material.opacity=m.clamp(o*.9-.05,0,.85);let i=T.step(n.sp.material.map,t,n.phase);e===0&&typeof window<`u`&&(window.__gullFrame=i)}if(typeof window<`u`){let e=0;for(let t of w)t.mesh.position.y>i&&e++;window.__waterLife={boats:h,breaching:e,gulls:+D[0].sp.material.opacity.toFixed(2),lights:+S.material.opacity.toFixed(2)}}}function I(){_.attributes.position.needsUpdate=!0}function R(){return j.length}let z=[...p.map((e,t)=>({kind:`boat`,label:e.isFerry?`ferry`:`boat ${t+1}`,getWorldPos:t=>t.copy(e.mesh.position),info:()=>e.isFerry?`boat · harbor ferry → docks`:`boat · open-water lane ${e.laneIndex}`})),...D.map((e,t)=>({kind:`gull`,label:`gull ${t+1}`,getWorldPos:t=>t.copy(e.sp.position),active:()=>e.sp.material.opacity>.05,info:()=>`gull · circling the coast`})),...w.map((e,t)=>({kind:`fish`,label:e.whale?`whale`:`fish ${t+1}`,getWorldPos:t=>t.copy(e.mesh.position),active:()=>e.mesh.position.y>i-.3,info:()=>e.mesh.position.y>i?e.whale?`whale · breaching!`:`fish · breaching!`:`fish · below the surface`}))];function ne(){return z}return{group:r,update:te,getFollowables:ne,wakeDrops:j,get wakeCount(){return R()},lanes:c,setRouter(e){N=e||(e=>e.laneIndex)}}}var At=[`empireState`,`chrysler`,`liberty`,`eiffel`,`arcDeTriomphe`,`sacreCoeur`,`tokyoTower`,`pagoda`,`neonBillboard`],jt={empireState:1.25,chrysler:1.1,liberty:.55,eiffel:3.2,arcDeTriomphe:1.5,sacreCoeur:1.75,tokyoTower:1.35,pagoda:.5,neonBillboard:.9};function Mt(e){let t=()=>new f({flatShading:!0,roughness:.7,metalness:.1}),n=(n,r={})=>r.windows?Ge(t(),{color:n,id:e.id(),windowGlow:e.windowGlow,winColors:e.winColors,litFrac:e.litFrac}):Y(t(),{color:n,glow:r.glow??null,glowDay:r.glowDay??0,glowNight:r.glowNight??1,windowGlow:r.glow?e.windowGlow:null});return{box:(e,t,r,i,a={})=>new o(new O(e,t,r),n(i,a)),cyl:(e,t,r,i,a={})=>new o(new te(e,t,r,a.seg||12),n(i,a)),cone:(e,t,r,i={})=>new o(new re(e,t,i.seg||8),n(r,i)),sphere:(e,t,r={})=>new o(new de(e,r.seg||12,r.seg2||8),n(t,r)),lathe:(e,t,r={})=>new o(new h(e.map(e=>new W(e[0],e[1])),r.seg||4),n(t,r))}}var Z=(e,t,n,r)=>(e.position.set(t,n,r),e),Nt=[`#7FB0E0`,`#E07FB0`,`#7FE0A0`,`#E0C97F`,`#9FE07F`,`#7FE0E0`,`#FF8C42`,`#E0E07F`,`#C97FE0`,`#E07F7F`,`#7F9FE0`,`#E0483A`],Pt={empireState(e,t){let n=`#E8E0CF`;e.add(Z(t.box(.42,.18,.42,n,{windows:!0}),0,.09,0)),e.add(Z(t.box(.34,.16,.34,n,{windows:!0}),0,.26,0)),e.add(Z(t.box(.26,.14,.26,n,{windows:!0}),0,.41,0)),e.add(Z(t.box(.19,.34,.19,n,{windows:!0}),0,.65,0)),e.add(Z(t.box(.13,.06,.13,n,{windows:!0}),0,.85,0));let r=Nt[new Date().getMonth()];e.add(Z(t.cyl(.03,.045,.12,n,{seg:10,glow:r,glowNight:1.85}),0,.94,0)),e.add(Z(t.cone(.012,.07,n,{seg:8}),0,1.04,0))},chrysler(e,t){let n=`#C9CED4`;e.add(Z(t.box(.22,.55,.22,`#9AA7B4`,{windows:!0}),0,.275,0));let r=.55;for(let i=0;i<5;i++){let a=.14-i*.024,o=.07;e.add(Z(t.cyl(a*.7,a,o,n,{seg:8,glow:`#dfeaff`,glowNight:.5}),0,r+o/2,0)),r+=o}e.add(Z(t.cone(.018,.16,n,{seg:8}),0,r+.08,0))},liberty(e,t){let n=`#B9B4A6`,r=`#4FA890`;e.add(Z(t.box(.42,.16,.42,n),0,.08,0)),e.add(Z(t.box(.3,.2,.3,n),0,.26,0)),e.add(Z(t.cyl(.1,.15,.42,r,{seg:10}),0,.57,0)),e.add(Z(t.box(.11,.1,.11,r),0,.83,0));for(let n=0;n<7;n++){let i=(n/6-.5)*Math.PI*1.1;e.add(Z(t.cone(.012,.1,r,{seg:5}),Math.sin(i)*.1,.92,Math.cos(i)*.06-.02))}let i=Z(t.cyl(.025,.03,.34,r,{seg:8}),.14,.98,0);i.rotation.z=.35,e.add(i),e.add(Z(t.box(.06,.06,.06,r,{glow:`#ffd060`,glowDay:.6,glowNight:1.2}),.2,1.16,0)),e.add(Z(t.cone(.04,.09,`#ffcf66`,{seg:6,glow:`#ffd060`,glowDay:.7,glowNight:1.3}),.2,1.24,0))},eiffel(e,t){let n=`#6E5C4C`,r=[[.2,0],[.13,.16],[.085,.33],[.055,.5],[.035,.66],[.02,.85],[0,.92]];e.add(t.lathe(r,n,{seg:4}));let i=t.lathe(r,n,{seg:4});i.rotation.y=Math.PI/4,e.add(i),e.add(Z(t.box(.26,.025,.26,n),0,.33,0)),e.add(Z(t.box(.14,.02,.14,n),0,.66,0)),e.add(Z(t.cone(.01,.1,n,{seg:6}),0,.97,0))},arcDeTriomphe(e,t){let n=`#D9D0C1`,r=.58,i=.5,a=.34,s=new P;s.moveTo(-.58/2,0),s.lineTo(r/2,0),s.lineTo(r/2,i),s.lineTo(-.58/2,i),s.lineTo(-.58/2,0);let c=new S,l=.15,u=.22;c.moveTo(-.15,0),c.lineTo(-.15,u),c.absarc(0,u,l,Math.PI,0,!0),c.lineTo(l,0),c.lineTo(-.15,0),s.holes.push(c);let d=new A(s,{depth:a,bevelEnabled:!1});d.translate(0,0,-.34/2),d.computeVertexNormals(),e.add(new o(d,Y(new f({color:n,flatShading:!0}),{color:n}))),e.add(Z(t.box(r*1.06,.08,a*1.06,n),0,.54,0))},sacreCoeur(e,t){let n=`#F1EEE6`;e.add(Z(t.box(.5,.26,.4,n),0,.13,0));let r=(r,i,a,o)=>{e.add(Z(t.cyl(a*.9,a,i,n,{seg:12}),r,o,0));let s=Z(t.sphere(a,n,{seg:12}),r,o+i/2,0);s.scale.y=1.5,e.add(s)};r(0,.22,.15,.4),r(-.2,.1,.07,.33),r(.2,.1,.07,.33)},tokyoTower(e,t){let n=`#F25822`,r=`#EDEDED`,i=0;for(let a=0;a<9;a++){let o=a/9,s=(a+1)/9,c=.19*(1-o)+.03*o,l=.19*(1-s)+.03*s,u=.085,d=a%2?r:n;e.add(Z(t.cyl(l,c,u,d,{seg:4,glow:n,glowDay:0,glowNight:.7}),0,i+u/2,0)),i+=u}e.add(Z(t.box(.22,.02,.22,n,{glow:n,glowNight:.7}),0,.28,0)),e.add(Z(t.box(.12,.02,.12,r),0,.5,0)),e.add(Z(t.cone(.012,.16,r,{seg:6,glow:`#ff6a2a`,glowNight:.9}),0,i+.08,0))},pagoda(e,t){let n=0;for(let r=0;r<5;r++){let i=.42-r*.06,a=.11;e.add(Z(t.box(i,a,i,`#B23A2C`,{windows:r<4}),0,n+a/2,0)),e.add(Z(t.box(i*1.34,.03,i*1.34,`#7A3B2A`),0,n+a+.015,0)),n+=.16999999999999998}e.add(Z(t.cyl(.012,.012,.1,`#E0C040`,{seg:6}),0,n+.05,0)),e.add(Z(t.sphere(.03,`#E0C040`,{seg:8,glow:`#ffe680`,glowNight:.8}),0,n+.12,0))},neonBillboard(e,t){let n=`#20242C`;e.add(Z(t.box(.3,1,.3,n,{windows:!0}),0,.5,0));let r=[`#5AE8E0`,`#E85AA0`,`#E8E06A`],i=(n,r,i,a,o,s,c)=>{let l=Z(t.box(n,r,.02,i,{glow:i,glowDay:.6,glowNight:1.1}),a,o,s);l.rotation.y=c,e.add(l)};i(.22,.34,r[0],0,.75,.16,0),i(.16,.5,r[1],.16,.5,0,Math.PI/2),i(.2,.22,r[2],0,.34,-.16,0),e.add(Z(t.cone(.01,.14,n,{seg:6,glow:`#E85AA0`,glowDay:.4,glowNight:1}),0,1.08,0))}};function Ft(e,t){let n=new G;return Pt[e](n,Mt(t)),n}var It=``+new URL(`building-skyscraper-d-CapD2Zqe.glb`,import.meta.url).href,Lt=``+new URL(`building-n-hdv8kKtN.glb`,import.meta.url).href,Rt=``+new URL(`building-g-CsTB1qH9.glb`,import.meta.url).href,zt=``+new URL(`colormap-CK8fW2HB.png`,import.meta.url).href,Bt={skyscraper:{url:It,color:`#9cc1dd`,fill:.92},midrise:{url:Lt,color:`#c9a07a`,fill:.96},setback:{url:Rt,color:`#d9c7a0`,fill:.9}};function Vt({windowGlow:e}){let t=new p;t.setURLModifier(e=>e.includes(`colormap.png`)?zt:e);let n=new ue(t),r={},i=!1,a=Promise.all(Object.entries(Bt).map(async([e,t])=>{r[e]=(await n.loadAsync(t.url)).scene})).then(()=>{i=!0,window.__landmarksReady=!0}).catch(e=>console.error(`landmark models failed:`,e)),o=9e3;function s(t,n,i={}){let a,s;if(At.includes(t))a=Ft(t,{windowGlow:e,winColors:i.winColors,litFrac:i.litFrac,id:()=>++o}),s=1;else{let e=r[t],n=Bt[t];if(!e||!n)return null;a=e.clone(!0),s=n.fill}a.updateMatrixWorld(!0);let c=new I().setFromObject(a).getSize(new M);a.scale.setScalar(n.h*s/c.y),a.updateMatrixWorld(!0);let l=new I().setFromObject(a),u=l.getCenter(new M);return a.position.x+=n.x-u.x,a.position.z+=n.z-u.z,a.position.y+=n.plinthTop-l.min.y,At.includes(t)?a.traverse(e=>{e.isMesh&&(e.castShadow=!1,e.raycast=()=>{})}):a.traverse(n=>{if(!n.isMesh)return;n.castShadow=!1,n.raycast=()=>{};let r=n=>Ge(n.clone(),{color:Bt[t].color,id:++o,windowGlow:e,winColors:i.winColors,litFrac:i.litFrac});n.material=Array.isArray(n.material)?n.material.map(r):r(n.material)}),a}return{make:s,whenReady:a,heightFactor:e=>jt[e]??1,get ready(){return i}}}var Ht=[`clear`,`rain`,`snow`,`fog`];function Ut({extent:e=7}={}){let t=new G;t.raycast=()=>{};let n=e+2,r=.25,a=(e,t)=>e+Math.random()*(t-e),o=new i(new x(.015,.5),new l({color:`#a9bdd6`,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),600);o.frustumCulled=!1,o.raycast=()=>{};let s=new Float32Array(600*3),c=new Float32Array(600);for(let e=0;e<600;e++)s[e*3]=a(-n,n),s[e*3+1]=a(r,11),s[e*3+2]=a(-n,n),c[e]=a(9,14);let u=new i(new x(.07,.07),new l({color:`#f3f7ff`,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),700);u.frustumCulled=!1,u.raycast=()=>{};let d=new Float32Array(700*3),f=new Float32Array(700),p=new Float32Array(700);for(let e=0;e<700;e++)d[e*3]=a(-n,n),d[e*3+1]=a(r,11),d[e*3+2]=a(-n,n),f[e]=a(0,6.28),p[e]=a(.6,1.2);t.add(o,u);let m=Array.from({length:8},()=>new M),h=0,g=`clear`,_=0,v=0,y=0,b=0,S=0,C=new ge,w=(e,t,n,r)=>e+(t-e)*Math.min(1,n*r);function T(e){Ht.includes(e)&&(g=e)}function E(){g=Ht[(Ht.indexOf(g)+1)%Ht.length]}function D(e,t){let i=g===`rain`,l=g===`snow`,x=g===`fog`,T=g!==`clear`;_=w(_,+!!T,e,1.4),v=w(v,+!!T,e,1.2),y=w(y,+!!x,e,.9),S=w(S,T&&!x?1:0,e,1),b=w(b,+!!l,e,l?.22:.5);let E=i?_:0,D=Math.round(600*E);for(let t=0;t<600;t++){if(t>=D){C.position.set(0,-50,0),C.scale.setScalar(0),C.updateMatrix(),o.setMatrixAt(t,C.matrix);continue}s[t*3+1]-=c[t]*e,s[t*3]+=e*1.1,s[t*3+1]<r&&(s[t*3]=a(-n,n),s[t*3+1]=11,s[t*3+2]=a(-n,n)),C.position.set(s[t*3],s[t*3+1],s[t*3+2]),C.rotation.set(0,0,0),C.scale.set(1,1,1),C.updateMatrix(),o.setMatrixAt(t,C.matrix)}o.instanceMatrix.needsUpdate=!0,o.material.opacity=.55*E,h=i?Math.round(8*_):0;for(let e=0;e<h;e++)m[e].set(Math.random(),Math.random(),.05*_);let O=Math.round(700*(l?_:0));for(let i=0;i<700;i++){if(i>=O){C.position.set(0,-50,0),C.scale.setScalar(0),C.updateMatrix(),u.setMatrixAt(i,C.matrix);continue}d[i*3+1]-=p[i]*e;let o=Math.sin(t*1.5+f[i])*.5;d[i*3+1]<r&&(d[i*3]=a(-n,n),d[i*3+1]=11,d[i*3+2]=a(-n,n)),C.position.set(d[i*3]+o,d[i*3+1],d[i*3+2]),C.rotation.set(0,0,0),C.scale.setScalar(1),C.updateMatrix(),u.setMatrixAt(i,C.matrix)}u.instanceMatrix.needsUpdate=!0,u.material.opacity=.9*(l?_:0)}return{group:t,update:D,cycle:E,setKind:T,rainDrops:m,get kind(){return g},get intensity(){return _},get overcast(){return v},get fog(){return y},get snow(){return b},get cloud(){return S},get rainDropCount(){return h},poolCounts:{rain:600,snow:700}}}function Wt(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=(e,n,r)=>{let i=t.createRadialGradient(e,n,0,e,n,r);i.addColorStop(0,`rgba(255,255,255,0.95)`),i.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=i,t.beginPath(),t.arc(e,n,r,0,7),t.fill()};n(128*.42,128*.56,128*.26),n(128*.6,128*.5,128*.3),n(128*.5,128*.46,128*.22),n(128*.34,128*.54,128*.18),n(128*.7,128*.58,128*.18);let r=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5],i=t.getImageData(0,0,128,128),a=i.data;for(let e=0;e<128;e++)for(let t=0;t<128;t++){let n=(e*128+t)*4,i=a[n+3]/255,o=(r[e%4*4+t%4]+.5)/16-.5;a[n+3]=Math.max(0,Math.min(1,Math.floor(i*5+.5+o)/5))*255}t.putImageData(i,0,0);let o=new j(e);return o.colorSpace=E,o}function Gt({extent:e=8,count:t=16}={}){let n=new G;n.raycast=()=>{};let r=Wt(),i=e+6,a=(e,t)=>e+Math.random()*(t-e),o=[];for(let e=0;e<t;e++){let e=new L({map:r,transparent:!0,depthWrite:!1,opacity:0,fog:!0}),t=new U(e),s={sp:t,mat:e,wisp:Math.random(),x:a(-i,i),z:a(-i,i),hiY:a(4,6.8),loY:a(.6,2.2),w:a(3,5.6),h:a(1.7,3),speed:a(.25,.7),op:a(.6,1)};t.raycast=()=>{},o.push(s),n.add(t)}let s=new H,c=new H(`#ffffff`),l=new H(`#5b626e`);function u(e,t,n,r){let u=r?r.cloud:0,d=r?r.fog:0,f=Math.min(1,.4+.6*u+.5*d);s.copy(n.sky).lerp(c,.62),s.lerp(l,.6*u);for(let n=0;n<o.length;n++){let r=o[n],c=n/o.length<f;r.x+=r.speed*e*(.6+.8*u),r.x>i&&(r.x=-i,r.z=a(-i,i));let l=Math.min(Kt(r.x,-i,-i+3),1-Kt(r.x,i-3,i)),p=r.hiY*(1-d)+r.loY*d,m=1-.5*r.wisp,h=.72*Math.max(0,1-d-u)+1*u+.42*d,g=c?Math.max(0,h)*r.op*m*l:0;r.mat.opacity+=(g-r.mat.opacity)*Math.min(1,e*2.5),r.mat.color.copy(s);let _=r.w*(1+.6*d)*(1+.4*r.wisp),v=r.h*(1-.35*d);r.sp.scale.set(_,v,1),r.sp.position.set(r.x,p+Math.sin(t*.3+n)*.15,r.z)}}function d(e){r=e;for(let t of o)t.mat.map=e,t.mat.needsUpdate=!0}let f=o.map((e,t)=>({kind:`cloud`,label:`cloud ${t+1}`,getWorldPos:t=>t.copy(e.sp.position),active:()=>e.mat.opacity>.06,info:()=>`cloud · ${e.wisp>.6?`wispy`:`puffy`} · drifting east${e.sp.position.y<3?` (low mist)`:``}`}));function p(){return f}return{group:n,update:u,setTexture:d,getFollowables:p,get count(){return o.length}}}function Kt(e,t,n){let r=Math.max(0,Math.min(1,(e-t)/(n-t)));return r*r*(3-2*r)}var qt={person:4.5,car:6,gull:6,fish:8,boat:9,cloud:16};function Jt({rig:e,getCamera:t,sources:n=[]}){let r=null,i=new M,a=new M,o=()=>{let e=[];for(let t of n)if(t&&t.getFollowables){let n=t.getFollowables();n&&e.push(...n)}return e},s=e=>!e.active||e.active();function c(t){return t?(r=t,e.setFollow(e=>t.getWorldPos(e),{frame:t.frame??qt[t.kind]??8}),t):null}function l(){r=null,e.clearFollow()}function u(e,n,r=.14){let l=t(),u=null,d=r;for(let t of o()){if(!s(t)||(t.getWorldPos(i),a.copy(i).project(l),a.z>1||a.z<-1))continue;let r=Math.hypot(a.x-e,a.y-n);r<d&&(d=r,u=t)}return u?c(u):null}function d(e=1,t=null){let n=o().filter(e=>(!t||e.kind===t)&&s(e));if(t||(n=Yt(n)),!n.length)return null;let i=r?n.indexOf(r):-1;return i=((i+e)%n.length+n.length)%n.length,c(n[i])}function f(){r&&r.active&&!r.active()&&l()}return{pickAt:u,cycle:d,follow:c,release:l,prune:f,get focus(){return r},get count(){return o().length},get readout(){return r?{kind:r.kind,label:r.label,info:r.info?r.info():``}:null}}}function Yt(e){let t=new Map;for(let n of e)t.has(n.kind)||t.set(n.kind,[]),t.get(n.kind).push(n);let n=[...t.values()],r=[];for(let e=0,t=!0;t;e++){t=!1;for(let i of n)e<i.length&&(r.push(i[e]),t=!0)}return r}var Xt=`attribute float aSize;
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
}`,Zt=`precision highp float;

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
}`,Qt={realistic:0,charm:0,pixel:2,vector:1},$t={realistic:1,charm:1,pixel:1.9,vector:1.2};function en({seed:n=1517,count:r=340,spreadX:i=21,yLo:a=3,yHi:o=18,zBase:c=7.2}={}){let l=new G;l.raycast=()=>{};let u=Ke(n>>>0),d=new Float32Array(r*3),f=new Float32Array(r),p=new Float32Array(r),m=new Float32Array(r),h=[];for(let e=0;e<r;e++){let t=(u()*2-1)*i,n=a+u()*(o-a),r=-c-u()*.7;d[e*3]=t,d[e*3+1]=n,d[e*3+2]=r;let s=.35+u()*.65;p[e]=s,f[e]=1.6+u()*2.8+(s>.85?2.2:0),m[e]=u()*Math.PI*2,s>.82&&h.push([t,n,r])}let g=new le;g.setAttribute(`position`,new ae(d,3)),g.setAttribute(`aSize`,new ae(f,1)),g.setAttribute(`aBright`,new ae(p,1)),g.setAttribute(`aPhase`,new ae(m,1));let _=new e({vertexShader:Xt,fragmentShader:Zt,uniforms:{uTime:{value:0},uTwinkle:{value:1},uSizeScale:{value:1},uColor:{value:new H(`#eaf0ff`)},uNight:{value:0},uMode:{value:0}},transparent:!0,depthWrite:!1,blending:2,fog:!1,toneMapped:!1}),v=new s(g,_);v.raycast=()=>{},v.frustumCulled=!1,l.add(v);let y=[];if(h.length>6)for(let e=0;e<3;e++){let e=Math.floor(u()*h.length);for(let t=0;t<3;t++){let t=h[e],n=h[(e+1+Math.floor(u()*2))%h.length];y.push(t[0],t[1],t[2],n[0],n[1],n[2]),e=(e+1)%h.length}}let b=[[[0,2],[0,0]],[[0,0],[.7,0]],[[2.1,2],[1.4,2]],[[1.4,2],[1.4,0]],[[1.4,0],[2.1,0]],[[2.1,0],[2.1,1]],[[2.1,1],[1.7,1]],[[2.8,0],[2.8,2]],[[2.8,2],[3.5,2]],[[3.5,2],[3.5,1]],[[3.5,1],[2.8,1]],[[2.8,1],[3.6,0]]],x=-c-.4,S=.62;for(let[[e,t],[n,r]]of b)y.push(-3+e*S,12+t*S,x,-3+n*S,12+r*S,x);let C=new le;C.setAttribute(`position`,new me(y,3));let w=new t(C,new z({color:`#9fb6e8`,transparent:!0,opacity:0,depthWrite:!1,fog:!1,toneMapped:!1}));w.raycast=()=>{},w.frustumCulled=!1,l.add(w);let T=new U(new L({map:tn(),transparent:!0,opacity:0,depthWrite:!1,blending:2,fog:!1,toneMapped:!1}));T.raycast=()=>{},T.scale.set(i*2.4,i*.95,1),T.position.set(2,12,-c-.7),T.material.rotation=-.5,T.renderOrder=-3,l.add(T);let E=-1;function D(e,t=`realistic`,n=0,r=!1){_.uniforms.uTime.value=n,_.uniforms.uTwinkle.value=+!r,_.uniforms.uNight.value=e;let i=Qt[t]??0;i!==E&&(_.uniforms.uMode.value=i,E=i),_.uniforms.uSizeScale.value=$t[t]??1,w.material.opacity=e*.5,T.material.opacity=e*.32,l.visible=e>.001}return{group:l,update:D}}function tn(){let e=document.createElement(`canvas`);e.width=e.height=256;let t=e.getContext(`2d`),n=t.createRadialGradient(256/2,256/2,0,256/2,256/2,256/2);n.addColorStop(0,`rgba(150,170,230,0.5)`),n.addColorStop(.4,`rgba(120,130,200,0.22)`),n.addColorStop(1,`rgba(90,100,160,0)`),t.fillStyle=n,t.fillRect(0,0,256,256);let r=Ke(20145);for(let e=0;e<7;e++){let e=40+r()*176,n=70+r()*116,i=14+r()*30,a=t.createRadialGradient(e,n,0,e,n,i);a.addColorStop(0,`rgba(200,210,255,0.18)`),a.addColorStop(1,`rgba(200,210,255,0)`),t.fillStyle=a,t.beginPath(),t.arc(e,n,i,0,Math.PI*2),t.fill()}let i=new j(e);return i.colorSpace=E,i}var nn=Math.PI*2;function rn(e){let t=document.createElement(`canvas`);t.width=t.height=128;let n=t.getContext(`2d`),r=n.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return r.addColorStop(0,`#ffffff`),r.addColorStop(.34,`#fffaf0`),r.addColorStop(.66,e),r.addColorStop(.86,e),r.addColorStop(1,`rgba(255,255,255,0)`),n.fillStyle=r,n.beginPath(),n.arc(128/2,128/2,128/2,0,nn),n.fill(),dn(t,!0)}function an(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);n.addColorStop(0,`#ffffff`),n.addColorStop(.4,`#eef3ff`),n.addColorStop(.82,`#c4cee6`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,128/2,0,nn),t.fill(),t.globalAlpha=.14,t.fillStyle=`#8b97b4`;for(let[e,n,r]of[[54,50,9],[78,66,7],[60,82,5]])t.beginPath(),t.arc(e,n,r,0,nn),t.fill();return dn(e,!0)}function on(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`);t.translate(128/2,128/2),t.fillStyle=`rgba(255,210,120,0.9)`;for(let e=0;e<12;e++)t.rotate(nn/12),t.beginPath(),t.moveTo(0,-28),t.lineTo(7,-54),t.lineTo(-7,-54),t.closePath(),t.fill();let n=t.createRadialGradient(0,0,0,0,0,32);return n.addColorStop(0,`#ffffff`),n.addColorStop(.4,`#fff1c8`),n.addColorStop(.8,`#ffb24a`),n.addColorStop(1,`#ff8a2a`),t.fillStyle=n,t.beginPath(),t.arc(0,0,32,0,nn),t.fill(),dn(e,!0)}function sn(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,46);n.addColorStop(0,`#ffffff`),n.addColorStop(.5,`#e6ecfb`),n.addColorStop(1,`#c2cce4`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,46,0,nn),t.fill(),t.fillStyle=`#aab6d2`;for(let[e,n,r]of[[52,48,11],[80,62,8],[58,82,7],[40,66,5]])t.beginPath(),t.arc(e,n,r,0,nn),t.fill();return dn(e,!0)}function cn(e,t,n){let r=document.createElement(`canvas`);r.width=r.height=144;let i=r.getContext(`2d`),a=17/2,o=18/2-.5;for(let r=0;r<18;r++)for(let s=0;s<18;s++){let c=Math.hypot(s-a,r-a);c>o||(i.fillStyle=c<o*.45?e:c<o*.78?t:n,i.fillRect(Math.round(s*8),Math.round(r*8),8,8))}return dn(r,!1)}function ln(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return n.addColorStop(0,`rgba(255,255,255,0.9)`),n.addColorStop(.38,`rgba(255,255,255,0.3)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,128/2,0,nn),t.fill(),dn(e,!0)}function un(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2),r=`20,30,48`;return n.addColorStop(0,`rgba(${r},0)`),n.addColorStop(.42,`rgba(${r},0)`),n.addColorStop(.6,`rgba(${r},0.6)`),n.addColorStop(1,`rgba(${r},0)`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,128/2,0,nn),t.fill(),dn(e,!0)}function dn(e,t){let n=new j(e);return n.colorSpace=E,t||(n.magFilter=v,n.minFilter=v),n}var fn=(e,t,n)=>{let r=Math.max(0,Math.min(1,(e-t)/(n-t)));return r*r*(3-2*r)};function pn({skyW:e=15,skyY0:t=3.4,skyH:n=3.8,z:r=-7.8,biasX:i=4.5,sunSize:a=4.6,moonSize:o=4}={}){let s=new G;s.raycast=()=>{};let c=(e,t)=>{let n=new U(new L({map:e,transparent:!0,depthWrite:!1,fog:!1,toneMapped:!1,...t?{blending:2}:{}}));return n.raycast=()=>{},n},l={realistic:rn(`#ffcf8a`),charm:on(),pixel:cn(`#fff6e0`,`#ffc24a`,`#ff8a2a`)},u={realistic:an(),charm:sn(),pixel:cn(`#ffffff`,`#cdd6ee`,`#9aa6c6`)},d=ln(),f=c(un(),!1),p=c(d,!0),m=c(l.realistic),h=c(d,!0),g=c(u.realistic);f.renderOrder=-2,p.renderOrder=-1,s.add(f,p,m,h,g);let _=en({});_.group.renderOrder=-4,s.add(_.group);let v=typeof window<`u`&&window.matchMedia?window.matchMedia(`(prefers-reduced-motion: reduce)`):null,y={realistic:{sunGlow:3,sunGlowOp:.7,moonGlow:2.6,moonGlowOp:.5,sizeMul:1,sunHaloOp:.85},charm:{sunGlow:2.2,sunGlowOp:.55,moonGlow:2.1,moonGlowOp:.42,sizeMul:1.08,sunHaloOp:.7},pixel:{sunGlow:1.7,sunGlowOp:.4,moonGlow:1.7,moonGlowOp:.32,sizeMul:1,sunHaloOp:.6}},b=`realistic`;function x(e){e===b||!y[e]||(b=e,m.material.map=l[e],m.material.needsUpdate=!0,g.material.map=u[e],g.material.needsUpdate=!0)}new H;let S=new H(`#fff3df`),C=new H(`#ffb060`),w=new H(`#ff6a2a`),T=new H(`#eef2ff`),E=new H(`#9fbcff`);function D(s,c,l,u,d=`realistic`){x(d);let D=y[b],O=l.sunArc,k=u?Math.min(1,(u.cloud||0)*.85+(u.fog||0)*.7):0,A=O.y,j=fn(A,-.04,.1)*(1-.7*k),M=1-fn(Math.abs(A),.02,.5);m.position.set(O.x*e+i,t+O.y*n,r),p.position.copy(m.position);let N=a*D.sizeMul*(1+.55*M);m.scale.setScalar(N),p.scale.setScalar(N*D.sunGlow),m.material.color.copy(S),p.material.color.copy(C).lerp(w,M),m.material.opacity=j,p.material.opacity=j*D.sunGlowOp*(.7+.5*M),f.position.copy(m.position),f.scale.setScalar(N*1.7),f.material.opacity=j*(1-M)*D.sunHaloOp;let P=fn(-O.y,-.04,.1)*(1-.65*k);g.position.set(-O.x*e+i,t+-O.y*n,r),h.position.copy(g.position);let F=o*D.sizeMul;g.scale.setScalar(F),h.scale.setScalar(F*D.moonGlow),g.material.color.copy(T),h.material.color.copy(E),g.material.opacity=P,h.material.opacity=P*D.moonGlowOp;let ee=fn(-O.y,-.05,.18)*(1-.85*k);_.update(ee,d,c,!!(v&&v.matches))}return{group:s,update:D}}var mn=`varying vec2 vUv;

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
}`,gn=`varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0); 
}`,_n=`precision highp float;

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
}`,vn=`precision highp float;

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
}`,yn=`precision highp float;

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
}`,bn=`const float CA_STRENGTH   = 0.0030;  
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
}`,xn=`const float DITHER = 0.55;   

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
}`,Sn=`precision highp float;

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
}`,Cn=`precision highp float;

varying vec2 vUv;
uniform sampler2D uToon;   
uniform sampler2D uPixel;  
uniform float     uBlend;  

void main() {
  vec3 t = texture2D(uToon, vUv).rgb;
  vec3 p = texture2D(uPixel, vUv).rgb;
  gl_FragColor = vec4(mix(t, p, uBlend), 1.0);
}`,wn=`precision highp float;

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
}`,Tn={"1-bit":{gridWidth:110,dither:.6,palette:[`#15120c`,`#c8b486`]},gb:{gridWidth:130,dither:.4,palette:[`#0f380f`,`#306230`,`#8bac0f`,`#9bbc0f`]},"8-bit":{gridWidth:160,dither:.55,palette:[`#140c1c`,`#442434`,`#30346d`,`#4e4a4e`,`#854c30`,`#346524`,`#d04648`,`#757161`,`#597dce`,`#d27d2c`,`#8595a1`,`#6daa2c`,`#d2aa99`,`#6dc2ca`,`#dad45e`,`#deeed6`]},"16-bit":{gridWidth:280,dither:.3,palette:`#000000.#222034.#45283c.#663931.#8f563b.#df7126.#d9a066.#eec39a.#fbf236.#99e550.#6abe30.#37946e.#4b692f.#524b24.#323c39.#3f3f74.#306082.#5b6ee1.#639bff.#5fcde4.#cbdbfc.#ffffff.#9badb7.#847e87.#696a6a.#595652.#76428a.#ac3232.#d95763.#d77bba.#8f974a.#8a6f30`.split(`.`)},modern:{gridWidth:460,dither:.6,palette:null}},En=[`gb`,`8-bit`,`16-bit`,`modern`];function Dn(e){let t=Math.max(e.length,1),n=new Float32Array(t*4);e.forEach((e,t)=>{let r=new H(e);n[t*4+0]=r.r,n[t*4+1]=r.g,n[t*4+2]=r.b,n[t*4+3]=1});let r=new ee(n,t,1,u,y);return r.minFilter=v,r.magFilter=v,r.needsUpdate=!0,r}var On=220,kn={night:[`#0A0C16`,`#1C2236`,`#3A3A52`,`#5A5A78`,`#8A92B0`],dawn:[`#1A1008`,`#43281A`,`#7A4A30`,`#B07A4E`,`#E8A86A`],noon:[`#16100A`,`#3A2F1E`,`#6B563A`,`#937B54`,`#B89968`],dusk:[`#140A0A`,`#3E1E1A`,`#7A3828`,`#B85A36`,`#F0884A`]},An={night:[`#020604`,`#06180E`,`#10401E`,`#1E9040`,`#7FE0FF`],dawn:[`#060603`,`#1A2410`,`#3A6B22`,`#6CC040`,`#FFC060`],noon:[`#050805`,`#0E2912`,`#1E6B2F`,`#3CF06A`,`#FFB000`],dusk:[`#080402`,`#241408`,`#6B4A12`,`#E0A030`,`#FF7030`]};function jn({demo:t=!1,citySeed:i=0,profileIndex:a=0}={}){let s=new ie({antialias:!0,preserveDrawingBuffer:!0});s.shadowMap.enabled=!0,s.shadowMap.type=1,s.shadowMap.autoUpdate=!1,s.shadowMap.needsUpdate=!0;let c=!!(window.matchMedia&&window.matchMedia(`(pointer: coarse)`).matches);s.setPixelRatio(Math.min(window.devicePixelRatio,c?1.5:2)),s.setSize(window.innerWidth,window.innerHeight),s.setClearColor(920327,1),document.body.appendChild(s.domElement);let d=s.getDrawingBufferSize(new W),f=new _;f.fog=new r(10465470,0);let p=new H(`#aeb6c0`),h=.062,y=new H(`#74508f`),S=new H,C=Ae({aspect:window.innerWidth/window.innerHeight}),w=pt({t:.5}),T={type:b,format:u,minFilter:v,magFilter:v,wrapS:F,wrapT:F,depthBuffer:!1,stencilBuffer:!1},O=[new B(256,256,T),new B(256,256,T),new B(256,256,T)];for(let e of O)s.setRenderTarget(e),s.clear();s.setRenderTarget(null);let k=new _,A=new n(-1,1,1,-1,0,1),N=new e({vertexShader:gn,fragmentShader:_n,uniforms:{uCurr:{value:null},uPrev:{value:null},uTexel:{value:new W(1/256,1/256)},uMouse:{value:new W(-1,-1)},uMouseStrength:{value:0},uC2:{value:.25},uDamping:{value:.992},uRainCount:{value:0},uRainDrops:{value:Array.from({length:8},()=>new M)},uWakeCount:{value:0},uWakeDrops:{value:Array.from({length:8},()=>new M)}}});k.add(new o(new x(2,2),N));let P=new B(d.x,d.y,{minFilter:R,magFilter:R,depthBuffer:!0,stencilBuffer:!1});function ee(e){let t=document.createElement(`canvas`);t.width=t.height=1024;let n=t.getContext(`2d`);n.fillStyle=e?`#0c1418`:`#15110b`,n.fillRect(0,0,1024,1024),n.strokeStyle=e?`rgba(120,150,170,0.22)`:`rgba(184,153,104,0.30)`,n.lineWidth=2;for(let e=0;e<=1024;e+=64)n.beginPath(),n.moveTo(e,0),n.lineTo(e,1024),n.stroke(),n.beginPath(),n.moveTo(0,e),n.lineTo(1024,e),n.stroke();e||(n.fillStyle=`#B89968`,n.font=`bold 360px Georgia, serif`,n.textAlign=`center`,n.textBaseline=`middle`,n.fillText(`LGR`,512,470),n.font=`600 64px ui-monospace, monospace`,n.fillText(`WEB · STUDIO`,512,720));let r=new j(t);return r.colorSpace=E,r}let te=new o(new x(28,28),new l({map:ee(t)}));te.rotation.x=-Math.PI/2,te.position.y=-.35,f.add(te);let I=new o(new x(40,24),new e({depthWrite:!1,vertexShader:mn,fragmentShader:hn,uniforms:{uTime:{value:0},uInk:{value:w.horizon},uGold:{value:w.sky},uFogColor:{value:S},uFogAmt:{value:0},uFogCharm:Le}}));I.position.set(0,3,-8),f.add(I);let L=new e({vertexShader:vn,fragmentShader:yn,uniforms:{uHeight:{value:null},uScene:{value:P.texture},uTexel:{value:new W(1/256,1/256)},uResolution:{value:new W(d.x,d.y)},uDisplace:{value:.42},uNormalStrength:{value:22},uRefractStrength:{value:.06},uChromaScale:{value:1},uNormalMatrix:{value:new g},uLightDir:{value:w.sunDir},uInk:{value:new H(`#2A2218`)},uGold:{value:new H(`#B89968`)},uVector:je,uVecWater:{value:new H(`#1fb8d8`)},uVecTint:{value:Me}}}),z=new o(new x(28,28,255,255),L);z.rotation.x=-Math.PI/2,z.updateMatrixWorld(!0),L.uniforms.uNormalMatrix.value.getNormalMatrix(z.matrixWorld),f.add(z);let ne={value:0},re=Vt({windowGlow:ne}),V=at({seed:i,profileIndex:a,landmarkFactory:re,windowGlow:ne});f.add(V.group);let ae=vt({plinthTop:.3,extent:V.extent,profile:V.state.profile});f.add(ae.group);let oe=kt({extent:V.extent,waterSize:28,plinthTop:.3});f.add(oe.group),N.uniforms.uWakeDrops.value=oe.wakeDrops;let se=Ut({extent:V.extent});f.add(se.group),N.uniforms.uRainDrops.value=se.rainDrops;let ce=Gt({extent:V.extent});f.add(ce.group);let U=Jt({rig:C,getCamera:()=>C.camera,sources:[ae,oe,ce]}),le=pn();f.add(le.group),V.group.remove(V.key),f.add(V.key),V.key.castShadow=!0,V.key.shadow.mapSize.set(2048,2048),V.key.shadow.bias=-18e-5,V.key.shadow.normalBias=.028,f.add(V.key.target);function ue(){let e=V.key.shadow.camera,t=V.extent+4.5;e.left=-t,e.right=t,e.top=t,e.bottom=-t,e.near=1,e.far=48,e.updateProjectionMatrix(),s.shadowMap.needsUpdate=!0}ue();let de=new D(d.x,d.y),fe=new B(d.x,d.y,{minFilter:R,magFilter:R,depthBuffer:!0,stencilBuffer:!1,depthTexture:de}),pe=new B(d.x,d.y,{minFilter:R,magFilter:R,depthBuffer:!1,stencilBuffer:!1}),G=new B(d.x,d.y,{minFilter:R,magFilter:R,depthBuffer:!1,stencilBuffer:!1}),me=new B(d.x,d.y,{minFilter:R,magFilter:R,depthBuffer:!1,stencilBuffer:!1}),he=new _,ge=new n(-1,1,1,-1,0,1),_e=new o(new x(2,2));he.add(_e);let K=new e({vertexShader:gn,fragmentShader:bn,uniforms:{uScene:{value:fe.texture},uTime:{value:0},uResolution:{value:new W(d.x,d.y)},uGrain:{value:1},uChroma:{value:1},uExposure:{value:1}}}),ve=e=>{let t=e.map(e=>new H(e));for(;t.length<8;)t.push(new H(0,0,0));return t},ye=[`night`,`dawn`,`noon`,`dusk`],be={inkgold:ye.map(e=>ve(kn[e])),terminal:ye.map(e=>ve(An[e]))},xe=new e({vertexShader:gn,fragmentShader:xn,uniforms:{uScene:{value:pe.texture},uResolution:{value:new W(d.x,d.y)},uPixelSize:{value:On},uPalette:{value:be.inkgold[2]},uPaletteB:{value:be.inkgold[2]},uPaletteBlend:{value:0},uPaletteSize:{value:5}}}),Se=new e({vertexShader:gn,fragmentShader:wn,uniforms:{uScene:{value:pe.texture},uResolution:{value:new W(d.x,d.y)},uGridWidth:{value:160},uDither:{value:.55},uPalette:{value:Dn(Tn[`8-bit`].palette)},uPaletteSize:{value:1},uUsePalette:{value:1}}}),Ce={};for(let e of En)Ce[e]=Tn[e].palette?Dn(Tn[e].palette):null;let we=new e({vertexShader:gn,fragmentShader:Sn,uniforms:{uScene:{value:pe.texture},uDepth:{value:de},uResolution:{value:new W(d.x,d.y)},uBands:{value:4},uToonGain:{value:1.7},uToonGamma:{value:.6},uToonFloor:{value:w.toonFloor},uOutline:{value:w.outline},uNear:{value:.1},uFar:{value:100},uIsPerspective:{value:1}}}),Te=new e({vertexShader:gn,fragmentShader:Cn,uniforms:{uToon:{value:G.texture},uPixel:{value:me.texture},uBlend:{value:0}}});function Ee(e,t){_e.material=e,s.setRenderTarget(t),s.render(he,ge)}function De(){C.setViewport(window.innerWidth,window.innerHeight),s.setSize(window.innerWidth,window.innerHeight);let e=s.getDrawingBufferSize(new W);return P.setSize(e.x,e.y),fe.setSize(e.x,e.y),pe.setSize(e.x,e.y),G.setSize(e.x,e.y),me.setSize(e.x,e.y),L.uniforms.uResolution.value.set(e.x,e.y),K.uniforms.uResolution.value.set(e.x,e.y),xe.uniforms.uResolution.value.set(e.x,e.y),Se.uniforms.uResolution.value.set(e.x,e.y),we.uniforms.uResolution.value.set(e.x,e.y),e}let q=3,J=!1,Oe=!1,ke=`native`,ze=.3,Be=.46,Ve=[`native`,...En],He={"16-bit":`16-bit`,"8-bit":`8-bit`,gb:`Game Boy`,modern:`Modern`,native:`Pixel`,"1-bit":`1-bit`};typeof window<`u`&&(window.__mode=q,window.__vector=J,window.__era=ke);let Ue=0,We=performance.now(),Ge=typeof window<`u`&&new URLSearchParams(window.location.search).has(`perf`);typeof window<`u`&&(window.__perf=Ge),Ge&&(s.info.autoReset=!1);let Y=null;typeof window<`u`&&(window.__loaded=!1);let Ke=0,qe=new M(1,1,1),Je=!1;function Ye(e){let t=Oe?be.terminal:be.inkgold,n=e%1*4,r=Math.floor(n)%4;xe.uniforms.uPalette.value=t[r],xe.uniforms.uPaletteB.value=t[(r+1)%4],xe.uniforms.uPaletteBlend.value=n-Math.floor(n)}function Xe(e){let t=Tn[e];t&&(Se.uniforms.uGridWidth.value=t.gridWidth,Se.uniforms.uDither.value=t.dither,Se.uniforms.uUsePalette.value=+!!t.palette,t.palette&&(Se.uniforms.uPalette.value=Ce[e],Se.uniforms.uPaletteSize.value=t.palette.length))}function Ze(){ke!==`native`&&Xe(ke)}let Qe=()=>ke===`native`?xe:Se;function $e(e,t){z.visible=!1,s.setRenderTarget(P),s.render(f,e),z.visible=!0,s.setRenderTarget(t),s.render(f,e)}function et(e,t){if(z.visible=!1,s.setRenderTarget(P),s.render(f,C.camera),z.visible=!0,q===1)s.setRenderTarget(t),s.render(f,C.camera);else if(s.setRenderTarget(fe),s.render(f,C.camera),q===2)K.uniforms.uGrain.value=1,K.uniforms.uChroma.value=1,Ee(K,t);else{K.uniforms.uGrain.value=0,K.uniforms.uChroma.value=0,Ee(K,pe);let n=C.camera;we.uniforms.uNear.value=n.near,we.uniforms.uFar.value=n.far,we.uniforms.uIsPerspective.value=+!!n.isPerspectiveCamera;let r=e.era?(Xe(e.era),Se):Qe();e.kind===`pixel`?(Ee(r,t),window.__style=`pixel`):e.kind===`toon`?(Ee(we,t),window.__style=`toon`):(Ee(we,G),Ee(r,me),Te.uniforms.uBlend.value=e.blend,Ee(Te,t),window.__style=`blend`)}}function tt(){let e=X(),t=e.kind===`toon`?1:e.kind===`blend`?1-e.blend:0;return L.uniforms.uChromaScale.value=m.lerp(1,.5,t),e}function X(){if(q===1||q===2)return{kind:`none`};if(q===7)return{kind:`pixel`};if(q===8)return{kind:`toon`};let e=C.styleT;return window.__styleT=e,e<=ze?{kind:`toon`}:e>=Be?{kind:`pixel`,era:e<.62?`16-bit`:e<.8?`8-bit`:`gb`}:{kind:`blend`,blend:m.smoothstep(e,ze,Be),era:`16-bit`}}function nt(e){return q===1||q===2?``:J&&q!==7&&q!==8?`Vector`:e.kind===`toon`?`Toon`:e.kind===`pixel`?He[e.era||ke]||`Pixel`:e.kind===`blend`?`Toon → `+(He[e.era]||`Pixel`):``}function rt(e,t,{shadowsOn:n=!0,seasonTarget:r=0}={}){if(Ge){let e=s.info;Y={calls:e.render.calls,tris:e.render.triangles,programs:e.programs?e.programs.length:0,geo:e.memory.geometries,tex:e.memory.textures},e.reset()}I.material.uniforms.uTime.value=t,K.uniforms.uTime.value=t,w.update(e),V.key.position.copy(w.sunDir).multiplyScalar(24),V.key.color.copy(w.sunColor),V.key.intensity=w.sunIntensity,V.fill.color.copy(w.hemiSky),V.fill.groundColor.copy(w.hemiGround),ne.value=w.windowGlow;let i=se.overcast;V.key.intensity*=1-.5*i,V.key.color.lerp(p,.45*i),V.fill.intensity=1+.7*i;let a=m.smoothstep(w.sunDir.y,.06,.34),o=m.lerp(.28,1,1-w.windowGlow),c=n?a*o:0;V.key.shadow.intensity=.72*c,Ne.value=.52*c,(n&&!Je||qe.distanceToSquared(w.sunDir)>2e-5)&&(s.shadowMap.needsUpdate=!0,qe.copy(w.sunDir)),Je=n;let l=1-w.windowGlow;Me.setRGB(m.lerp(.46,1,l),m.lerp(.52,1,l),m.lerp(.74,1,l)),K.uniforms.uExposure.value=w.exposure,we.uniforms.uToonGain.value=w.toonGain,s.setClearColor(w.horizon,1),Ye(w.t),window.__t=w.t,ae.update(e,t,w),V.update(t),oe.update(e,t,w),N.uniforms.uWakeCount.value=oe.wakeCount,se.update(e,t),N.uniforms.uRainCount.value=se.rainDropCount;let u=se.fog*(1-l);f.fog.density=se.fog*h,S.copy(w.horizon).lerp(y,.85*u),f.fog.color.copy(S),s.setClearColor(S,1),Le.value=se.fog,I.material.uniforms.uFogAmt.value=.7*se.fog,Pe.value=se.snow,Fe.value=se.cloud*.55,Ie.x+=e*.018,Ie.y+=e*.009,Re.value+=(r-Re.value)*Math.min(1,e*1.5),ce.update(e,t,w,se);let d=X(),g=d.kind===`pixel`||d.kind===`blend`?`pixel`:J||d.kind===`toon`?`charm`:`realistic`;le.update(e,t,w,se,g),Ue++;let _=performance.now();_-We>=1e3&&(window.__fps=Ue,Ge&&Y&&(console.log(`[perf] ${Ue} fps · ~${(1e3/Math.max(1,Ue)).toFixed(2)} ms · calls ${Y.calls} · tris ${Y.tris} · programs ${Y.programs} · geo ${Y.geo} · tex ${Y.tex}`),window.__perfInfo={fps:Ue,...Y}),Ue=0,We=_);let[v,b,x]=O;if(N.uniforms.uPrev.value=v.texture,N.uniforms.uCurr.value=b.texture,s.setRenderTarget(x),s.render(k,A),O=[b,x,v],L.uniforms.uHeight.value=O[1].texture,Ke<2&&typeof document<`u`&&++Ke===2){let e=document.getElementById(`lgr-loader`);e&&e.classList.add(`gone`),window.__loaded=!0}}function it(e){q=e,window.__mode=q}function ot(){return J=!J,je.value=+!!J,window.__vector=J,J}function st(e){return J=!!e,je.value=+!!J,window.__vector=J,J}function ct(){return ke=Ve[(Ve.indexOf(ke)+1)%Ve.length],window.__era=ke,Ze(),ke}function lt(){return Oe=!Oe,Oe}return{updateWorld:rt,decideStyle:tt,renderCityPipeline:et,renderCityBeautyTo:$e,styleHintName:nt,setPostMode:it,toggleVector:ot,setVector:st,cycleEra:ct,togglePalette:lt,get mode(){return q},get vector(){return J},get sceneEra(){return ke},renderer:s,drawBuffer:d,scene:f,rig:C,sunRig:w,SIM:256,targets:O,simScene:k,simCamera:A,simMaterial:N,grabRT:P,card:te,backdrop:I,WATER_SIZE:28,water:z,waterMaterial:L,windowGlow:ne,landmarkFactory:re,city:V,cityLife:ae,waterLife:oe,weatherRig:se,clouds:ce,inspector:U,fitShadowFrustum:ue,SHADOW_DIST:24,sceneDepth:de,sceneRT:fe,filmicRT:pe,toonRT:G,pixelRT:me,postScene:he,postCamera:ge,postQuad:_e,filmicMaterial:K,pixelMaterial:xe,pixelkitMaterial:Se,toonMaterial:we,mixMaterial:Te,PALCACHE:be,ERA_TEX:Ce,runPass:Ee,OVERCAST_GREY:p,FOG_DENSITY:h,FOG_NIGHT_TINT:y,_fogColor:S,resize:De}}var Mn=`lgr_hints_`,Nn=!1;function Pn(){if(Nn||typeof document>`u`)return;Nn=!0;let e=document.createElement(`style`);e.textContent=`
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
  }`,document.head.appendChild(e)}function Fn({key:e,title:t=`Tips`,tips:n=[],force:r=!1}={}){let i={key:e,shown:!1,dismissed:!1,seen:!1};if(typeof window<`u`&&(window.__hints=i),typeof document>`u`||!e)return{dismiss(){},el:null};let a=Mn+e,o=!1;try{o=localStorage.getItem(a)===`1`}catch{}if(o&&!r)return i.seen=!0,{dismiss(){},el:null};Pn();let s=!!(window.matchMedia&&window.matchMedia(`(prefers-reduced-motion: reduce)`).matches),c=document.createElement(`div`);c.className=`lgr-hints`,c.innerHTML=`<div class="lgr-hints-card">
    <div class="lgr-hints-h">${t}</div>
    <ul>${n.map(e=>`<li>${e}</li>`).join(``)}</ul>
    <button class="lgr-hints-ok">Got it</button>
    <button class="lgr-hints-x" title="Dismiss (Esc)" aria-label="Dismiss">✕</button>
  </div>`,document.body.appendChild(c),i.shown=!0,s?c.classList.add(`on`):requestAnimationFrame(()=>c.classList.add(`on`));let l=!1;function u(e=!0){if(!l){if(l=!0,e)try{localStorage.setItem(a,`1`)}catch{}i.dismissed=!0,window.removeEventListener(`keydown`,d),c.classList.remove(`on`),setTimeout(()=>c.remove(),s?0:300)}}function d(e){e.key===`Escape`&&u(!0)}return window.addEventListener(`keydown`,d),c.querySelector(`.lgr-hints-ok`).addEventListener(`click`,()=>{navigator.vibrate?.(10),u(!0)}),c.querySelector(`.lgr-hints-x`).addEventListener(`click`,()=>{navigator.vibrate?.(10),u(!0)}),{dismiss:u,el:c}}var In=null;function Ln(){if(In)return In;let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return n.addColorStop(0,`rgba(0,0,0,0.60)`),n.addColorStop(.55,`rgba(0,0,0,0.32)`),n.addColorStop(1,`rgba(0,0,0,0.0)`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,128/2,0,Math.PI*2),t.fill(),In=new j(e),In.colorSpace=E,In}function Rn({w:e=.6,d:t=.6,x:n=0,y:r=.002,z:i=0,opacity:a=.5,rotation:s=0}={}){let c=new o(new x(e,t),new l({map:Ln(),transparent:!0,opacity:a,depthWrite:!1,toneMapped:!1}));return c.rotation.x=-Math.PI/2,c.rotation.z=s,c.position.set(n,r,i),c.renderOrder=-1,c.raycast=()=>{},c}function zn({yawLimit:e=80,pitchUp:t=32,pitchDown:n=20,sensitivity:r=.16,keySpeed:i=70,damp:a=9}={}){let o=Math.PI/180,s=(e,t,n)=>e<t?t:e>n?n:e,c=0,l=0,u=0,d=0;return{addDrag(i,a){u=s(u-i*r,-e,e),d=s(d-a*r,-n,t)},addKeys(r,{left:a,right:o,up:c,down:l}){let f=i*r;a&&(u=s(u+f,-e,e)),o&&(u=s(u-f,-e,e)),c&&(d=s(d+f,-n,t)),l&&(d=s(d-f,-n,t))},recenter(){u=0,d=0},update(e){let t=1-Math.exp(-a*e);c+=(u-c)*t,l+=(d-l)*t},get yaw(){return c*o},get pitch(){return l*o},get active(){return Math.abs(c)>.05||Math.abs(l)>.05}}}var Bn=null;function Vn(){if(Bn)return Bn;let e=document.createElement(`canvas`);e.width=e.height=256;let t=e.getContext(`2d`),n=t.createRadialGradient(256/2,256/2,256*.32,256/2,256/2,256*.72);return n.addColorStop(0,`rgba(0,0,0,0)`),n.addColorStop(1,`rgba(0,0,0,1)`),t.fillStyle=n,t.fillRect(0,0,256,256),Bn=new j(e),Bn.colorSpace=E,Bn}function Hn({strength:e=.55,dist:t=.5}={}){let n=new o(new x(1,1),new l({map:Vn(),transparent:!0,opacity:e,depthTest:!1,depthWrite:!1,toneMapped:!1}));n.renderOrder=9999,n.raycast=()=>{},n.frustumCulled=!1;let r=new M;return n.fit=e=>{e.getWorldDirection(r),n.position.copy(e.position).addScaledVector(r,t),n.quaternion.copy(e.quaternion);let i=2*Math.tan(m.degToRad(e.fov)*.5)*t*1.05;n.scale.set(i*e.aspect,i,1)},n}var Un=``+new URL(`office-dressed2-CNZL1Pge.png`,import.meta.url).href,Wn=``+new URL(`office-night2-Tdv47G8J.png`,import.meta.url).href,Gn=``+new URL(`office-modern-CQqt-EK1.png`,import.meta.url).href,Kn=``+new URL(`office-charm2-qAn3JlVo.png`,import.meta.url).href;function qn(){let e=document.createElement(`canvas`);e.width=e.height=256;let t=e.getContext(`2d`);t.fillStyle=`#6e4a2c`,t.fillRect(0,0,256,256);for(let e=0;e<150;e++){let e=Math.random()*256,n=.7+Math.random()*.7;t.strokeStyle=`rgba(${Math.round(110*n)},${Math.round(74*n)},${Math.round(44*n)},${.16+Math.random()*.28})`,t.lineWidth=.5+Math.random()*1.6,t.beginPath(),t.moveTo(e,0);for(let n=0;n<=256;n+=14)t.lineTo(e+Math.sin(n*.05+e)*3,n);t.stroke()}t.strokeStyle=`rgba(30,18,8,0.5)`,t.lineWidth=2;for(let e of[256*.34,256*.67])t.beginPath(),t.moveTo(0,e),t.lineTo(256,e),t.stroke();let n=new j(e);return n.colorSpace=E,n.wrapS=n.wrapT=w,n}function Q(e,t,n,r,{rough:i=.62,metal:a=0,x:s=0,y:c=0,z:l=0,emissive:u=null,emissiveIntensity:d=1,map:p=null,mapRepeat:m=null}={}){let h=p;p&&m&&(h=p.clone(),h.needsUpdate=!0,h.wrapS=h.wrapT=w,h.repeat.set(m[0],m[1]));let g=new o(new O(e,t,n),new f({color:h?`#ffffff`:r,roughness:i,metalness:a,...h?{map:h}:{},...u?{emissive:u,emissiveIntensity:d}:{}}));return g.position.set(s,c,l),g}function Jn(){let e=document.createElement(`canvas`);e.width=512,e.height=304;let t=e.getContext(`2d`);t.fillStyle=`#fff`,t.fillRect(0,0,512,304);let n=.13*512,r=.87*512,i=.1*304,a=.66*304;return t.filter=`blur(7px)`,t.fillStyle=`#000`,t.beginPath(),t.moveTo(80.56,i),t.arcTo(r,i,r,a,14),t.arcTo(r,a,n,a,14),t.arcTo(n,a,n,i,14),t.arcTo(n,i,r,i,14),t.closePath(),t.fill(),t.filter=`none`,new j(e)}function Yn({tier:e=`corner`,layout:t=`straight-on`}={}){let n=new _,r=new c(43,1,.1,100),i=new M(0,1.62,4.35),s=new M(0,1.12,-1);r.position.copy(i),r.lookAt(s);let u=zn({yawLimit:80,pitchUp:34,pitchDown:20}),d=new he(0,0,0,`YXZ`),p=new se,h=new G;n.add(h);let g=new G,v=new G,y=new G,b=new G,S=new G;h.add(g,v,y,b,S);let w=[],T=`#4a3322`,D=`#3a2618`,A=`#5b3d27`,j=`#6e4a30`,P=`#5a5650`,F=qn();g.add(Q(11,.2,11,`#3c2a1c`,{rough:.5,y:-.1,map:F,mapRepeat:[5,5]})),g.add(Q(11,.2,11,`#3a2a1d`,{rough:.9,y:3,map:F,mapRepeat:[4,4]}));for(let e of[-2.4,0,2.4])g.add(Q(.18,.16,7.4,D,{rough:.7,x:e,y:2.9,z:0,map:F,mapRepeat:[1,4]}));for(let e of[-2,.4])g.add(Q(7.4,.16,.18,D,{rough:.7,x:0,y:2.88,z:e,map:F,mapRepeat:[4,1]}));function ee(e){let t=new G;t.add(Q(.2,3.2,8,T,{rough:.7,x:e*3.6,y:1.5,z:0,map:F,mapRepeat:[3,1.4]}));let n=e*3.45;t.add(Q(.06,.22,8,D,{x:n,y:.13,z:0})),t.add(Q(.08,.16,8,D,{x:n,y:2.84,z:0})),t.add(Q(.05,.05,8,D,{x:n,y:1,z:0}));for(let e of[-2.6,-1.3,1.3,2.6])t.add(Q(.05,1.6,.06,D,{x:n,y:1.95,z:e}));for(let e of[-2.6,-1.3,1.3,2.6])t.add(Q(.05,.7,.06,D,{x:n,y:.6,z:e}));let r=new o(new x(1.5,1),new f({map:rr(e),roughness:.8}));r.position.set(e*3.49,1.7,.4),r.rotation.y=-e*Math.PI/2,t.add(Q(.06,1.18,1.68,`#2a1c10`,{x:e*3.52,y:1.7,z:.4}),r);let i=new o(new x(1,1.3),new f({map:rr(-e),roughness:.8}));i.position.set(e*3.49,1.78,-2),i.rotation.y=-e*Math.PI/2,t.add(Q(.06,1.46,1.16,`#2a1c10`,{x:e*3.52,y:1.78,z:-2}),i),t.add(Q(.12,.3,.16,`#2a1c10`,{x:e*3.4,y:2.2,z:2.2}));let a=new U(new L({map:nr(),color:`#ffcf8a`,transparent:!0,opacity:.5,depthWrite:!1,blending:2}));return a.scale.set(.6,.75,1),a.position.set(e*3.32,2.34,2.2),a.raycast=()=>{},t.add(a),t}g.add(ee(-1),ee(1));let I=new G;I.add(Q(.3,1.9,1.5,A,{rough:.5,y:.95}));for(let e of[.4,.95,1.5])I.add(Q(.3,.04,1.46,`#3a2c1e`,{y:e}));let R=[`#7a3a2a`,`#2a4a6a`,`#b08a3a`,`#3a5a3a`,`#6a2a4a`,`#8a5a2a`];for(let e of[.6,1.15,1.7])for(let t=0;t<7;t++)I.add(Q(.18,.3,.11,R[(t+Math.round(e))%R.length],{x:.02,y:e-.06,z:-.6+t*.17}));I.position.set(-3.34,0,-1.9),g.add(I),g.add(Rn({w:1,d:1.8,x:-3.2,y:.02,z:-1.9,opacity:.4}));let z=new G;z.add(Q(.5,.1,.5,`#4a3526`,{rough:.7,y:.45})),z.add(Q(.5,.55,.08,`#4a3526`,{rough:.7,y:.72,z:-.21}));for(let[e,t]of[[-.2,-.2],[.2,-.2],[-.2,.2],[.2,.2]])z.add(Q(.05,.45,.05,`#2a1c10`,{x:e,y:.22,z:t}));z.position.set(2.7,0,2.6),z.rotation.y=-.5,g.add(z),g.add(Rn({w:.7,d:.7,x:2.7,y:.02,z:2.6,opacity:.42}));let ne=new x(3,2.5),B=new x(3,2.5),ie=new l({color:`#ffffff`,toneMapped:!1}),ae=new l({color:`#ffffff`,toneMapped:!1}),ce=-3.7,le=1.55,W=m.degToRad(30),ue=3/2*Math.cos(W),de=ce+3/2*Math.sin(W),fe=new o(ne,ie);fe.position.set(-ue,le,de),fe.rotation.y=W;let pe=new o(B,ae);pe.position.set(ue,le,de),pe.rotation.y=-W;let me=new l({color:`#ffffff`,toneMapped:!1}),ge=new o(new x(5.4,2.6),me);ge.position.set(0,le,-3.5500000000000003),ge.visible=!1,y.add(fe,pe,ge);let _e=new G;_e.add(Q(.08,2.7,.08,D,{x:0,y:le,z:de+3/2*Math.sin(W)+.02}));for(let[e,t,n]of[[-ue,de,W],[ue,de,-W]]){let r=new G;r.add(Q(3.05,.09,.09,D,{y:1.3})),r.add(Q(3.05,.09,.09,D,{y:-1.25})),r.add(Q(.09,2.6,.09,D,{x:-1.5})),r.position.set(e,le,t),r.rotation.y=n,_e.add(r)}_e.add(Q(5.4,.5,.3,A,{x:0,y:.25,z:de+.5})),g.add(_e);let K=new G;K.add(Q(11,3.2,.2,T,{rough:.7,x:0,y:1.5,z:ce-.05,map:F,mapRepeat:[4,1.4]})),K.add(Q(5.8,.14,.12,D,{x:0,y:2.9000000000000004,z:-3.5})),K.add(Q(5.8,.14,.12,D,{x:0,y:le-1.35,z:-3.5})),K.add(Q(.14,2.84,.12,D,{x:-2.8,y:le,z:-3.5})),K.add(Q(.14,2.84,.12,D,{x:2.8,y:le,z:-3.5})),K.add(Q(.09,2.6,.09,D,{x:0,y:le,z:-3.49})),K.add(Q(5.4,.5,.3,A,{x:0,y:.25,z:-3.35}));let ve=new G;ve.add(Q(2.4,.9,.55,A,{rough:.42,y:.45,z:0})),ve.add(Q(2.46,.06,.58,j,{rough:.3,y:.91,z:0}));for(let e of[-.62,0,.62])ve.add(Q(.66,.72,.03,`#4a3120`,{x:e,y:.45,z:.285}));for(let e of[-.62,0,.62])ve.add(Q(.05,.04,.05,`#caa15a`,{x:e+.2,y:.45,z:.31,metal:.6}));let ye=[`#7a3a2a`,`#2a4a6a`,`#b08a3a`,`#3a5a3a`];for(let e=0;e<4;e++)ve.add(Q(.1,.26+e%2*.05,.2,ye[e],{x:-.95+e*.13,y:1.07,z:-.06}));ve.add(Q(.04,.34,.42,`#241a12`,{x:.7,y:1.12,z:-.02})),ve.position.set(-3.9,0,-3.25),K.add(ve),K.add(Rn({w:2.8,d:.95,x:-3.9,y:.02,z:-3.25,opacity:.45}));for(let[e,t]of[[-3.55,-1],[3.55,1]]){let n=new G,r=new o(new x(.78,.98),new f({map:rr(t),roughness:.82}));r.position.z=.05,n.add(Q(.06,1.12,.92,`#241a10`,{}),r),n.position.set(e,1.45,-3.5700000000000003),K.add(n)}for(let e of[-3.55,3.55]){K.add(Q(.16,.32,.13,`#2a1c10`,{x:e,y:2.35,z:-3.5}));let t=new U(new L({map:nr(),color:`#ffcf8a`,transparent:!0,opacity:.5,depthWrite:!1,blending:2}));t.scale.set(.55,.7,1),t.position.set(e,2.5,-3.42),t.raycast=()=>{},K.add(t)}K.visible=!1,g.add(K),g.add(Q(.4,.06,.4,`#1a130c`,{y:2.94,z:1.3}));let be=new o(new N(.16,20),new l({color:`#ffe6b0`,toneMapped:!1}));be.position.set(0,2.9,1.3),be.rotation.x=Math.PI/2,g.add(be);for(let[e,t]of[[-1.6,-1],[1.6,-1],[-1.6,-2.6],[1.6,-2.6],[0,-2.6]]){g.add(Q(.28,.05,.28,`#1a130c`,{y:2.95,x:e,z:t}));let n=new o(new N(.1,16),new l({color:`#ffe6b0`,toneMapped:!1}));n.position.set(e,2.915,t),n.rotation.x=Math.PI/2,n.raycast=()=>{},g.add(n)}g.add(Zn(w,{x:-3.46,y:2.15,z:.2,ry:Math.PI/2,face:`#efe2c8`,rim:`#2a1c10`})),g.add(Q(3.4,.03,2.4,`#3a1410`,{rough:.98,x:0,y:.012,z:1.95})),g.add(Q(3,.04,2,`#6e2a26`,{rough:.96,x:0,y:.02,z:1.95}));let xe=new G;xe.add(Q(.32,.32,.32,`#7a4a2a`,{rough:.8,y:.16}));for(let e=0;e<6;e++){let t=Q(.05,.55,.13,`#356a32`,{rough:.7,y:.32});t.geometry.translate(0,.27,0),t.rotation.z=(e/6-.5)*1.1,t.rotation.x=Math.sin(e*1.3)*.22,xe.add(t)}xe.position.set(2.7,0,.4),g.add(xe),g.add(Rn({w:.7,d:.7,x:2.7,y:.03,z:.4,opacity:.45})),v.add(Q(11,.2,11,`#403d38`,{rough:.85,y:-.1})),v.add(Q(11,.2,11,`#1c1a17`,{rough:.95,y:2.8})),v.add(Q(7,3,.2,P,{rough:.92,x:0,y:1.4,z:-2.9})),v.add(Q(.2,3,6,P,{rough:.92,x:-3.2,y:1.4,z:-.2})),v.add(Q(.2,3,6,P,{rough:.92,x:3.2,y:1.4,z:-.2}));for(let e of[-1.6,-.4]){let t=new o(new te(.07,.07,6,10),new f({color:`#6b6258`,roughness:.6,metalness:.4}));t.rotation.z=Math.PI/2,t.position.set(0,2.62,e),v.add(t)}let Se=new l({color:`#ffffff`,toneMapped:!1}),Ce=new o(new x(1.9,1.2),Se);Ce.position.set(0,1.5,-2.79),v.add(Ce),v.add(Q(2.06,1.36,.06,`#241a12`,{x:0,y:1.5,z:-2.83})),v.add(Q(.04,.34,.04,`#1a1410`,{x:-.1,y:2.45,z:-.4}));let we=new o(new N(.1,16),new l({color:`#ffdb8a`,toneMapped:!1}));we.position.set(-.1,2.26,-.4),we.rotation.x=Math.PI/2,v.add(we);let Te=new G;Te.add(Q(1.3,.05,.32,`#3a2c1e`,{x:0,y:0,z:0}));let Ee=[`#7a3a2a`,`#2a4a6a`,`#b08a3a`,`#3a5a3a`,`#6a2a4a`];for(let e=0;e<8;e++)Te.add(Q(.12,.34,.24,Ee[e%Ee.length],{x:-.55+e*.14,y:.2,z:0}));Te.position.set(-2.3,1.5,-2.66),v.add(Te);let De=new G;De.add(Q(.34,.34,.34,`#7a4a2a`,{y:.17}));let q=new G;for(let e=0;e<6;e++){let t=Q(.05,.5,.14,`#3a7a3a`,{rough:.7});t.geometry.translate(0,.25,0),t.rotation.z=(e/6-.5)*1.2,t.rotation.x=Math.sin(e)*.25,q.add(t)}q.position.y=.34,De.add(q),De.position.set(2.45,0,-1.4),v.add(De),v.add(Zn(w,{x:1.9,y:2.1,z:-2.78,ry:0,face:`#d8d2c4`,rim:`#1a130c`}));let J=new G;J.add(Q(3.4,.12,1.5,j,{rough:.32,y:.86,z:1.5,map:F,mapRepeat:[3,1.4]})),J.add(Q(3.2,.78,1.36,A,{y:.46,z:1.5,map:F,mapRepeat:[3,1]}));for(let e of[.66,.4,.14])J.add(Q(.9,.2,.04,`#4a3120`,{x:1.05,y:e,z:2.2}));J.add(Q(.12,.04,.04,`#caa15a`,{x:1.05,y:.66,z:2.23,metal:.6}));let Oe=new o(new te(.05,.045,.1,16),new f({color:`#d8cbb4`,roughness:.6}));Oe.position.set(-.55,.97,1.95);let ke=new o(new oe(.035,.012,8,14),new f({color:`#d8cbb4`,roughness:.6}));ke.position.set(-.61,.97,1.95),ke.rotation.y=Math.PI/2,J.add(Oe,ke);let Ae=new U(new L({map:nr(),color:`#fff4e0`,transparent:!0,opacity:0,depthWrite:!1,blending:2}));Ae.scale.set(.12,.18,1),Ae.position.set(-.55,1.05,1.95),Ae.raycast=()=>{},J.add(Ae),J.add(Q(.26,.03,.34,`#efe7d4`,{rough:.85,x:.5,y:.935,z:1.9})),h.add(J);let je=new G;je.add(Q(.06,.5,.06,`#2a1c10`,{x:-1.15,y:1.15,z:1.6}));let Me=new o(new re(.22,.26,16,1,!0),new f({color:`#c2802e`,roughness:.5,side:2,emissive:`#3a2208`,emissiveIntensity:.6}));Me.position.set(-1.15,1.42,1.6),je.add(Me);let Ne=new C(`#ffb15a`,7,7,1.8);Ne.position.set(-1.15,1.34,1.6),je.add(Ne);let Pe=new U(new L({map:nr(),color:`#ffcf8a`,transparent:!0,opacity:.55,depthWrite:!1,blending:2}));Pe.scale.set(.85,.85,1),Pe.position.set(-1.15,1.35,1.6),Pe.raycast=()=>{},je.add(Pe),je.position.x=-.3,h.add(je);let Fe=new G;Fe.add(Q(.62,.03,.42,`#1c1c20`,{y:.93,z:1.5,metal:.4,rough:.4}));let Ie=new o(new O(.62,.4,.025),new f({color:`#0a0c10`,emissive:`#2a4a6a`,emissiveIntensity:.7,roughness:.3}));Ie.position.set(0,1.14,1.31),Ie.rotation.x=-.32,Fe.add(Ie),Fe.userData.role=`laptop`,h.add(Fe);let Le=new G;Le.add(Q(.26,.07,.34,`#15151a`,{x:1,y:.93,z:1.5}));let Re=Q(.3,.06,.08,`#101015`,{x:1,y:1,z:1.34,emissive:`#234a6a`,emissiveIntensity:.4});Le.add(Re),Le.userData.role=`phone`,h.add(Le);let ze=new a(`#8a6a42`,`#1c130a`,.78);n.add(ze);let Be=new V(`#ffd9a0`,9,9,.7,.5,1.2);Be.position.set(0,2.95,1.3),Be.target.position.set(0,.86,1.5),n.add(Be,Be.target);let Ve=Qn(!1),He=Qn(!0),Ue=.62,We=1.32,Ge=1.22,Y=1.78,Ke=new U(new L({map:Ve,transparent:!0,depthWrite:!1}));Ke.scale.set(Ue,Ue,1),Ke.position.set(We,Ge,Y),Ke.userData.role=`cat`,h.add(Ke);let qe=new U(new L({map:er(),transparent:!0,depthWrite:!1,opacity:0}));qe.scale.set(.3,.3,1),qe.raycast=()=>{},h.add(qe);let Je=0;function Ye(){Je=1.3}let Xe=-.95,Ze=1.06,Qe=1.95,$e=.62,et=.42,tt=.34,X=new G;X.position.set(Xe,Ze,Qe),X.add(Q($e,.05,tt,`#3a3026`,{y:-.19}));let nt=new o(new O($e-.04,et-.08,tt-.04),new f({color:`#1f9fc0`,transparent:!0,opacity:.26,roughness:.1,emissive:`#0a3a4a`,emissiveIntensity:.4,depthWrite:!1}));nt.position.y=.02,X.add(nt);for(let e of[-1,1])for(let t of[-1,1])X.add(Q(.03,et,.03,`#20262c`,{x:e*($e/2-.015),z:t*(tt/2-.015),metal:.5}));let rt=new o(new O($e,et,tt),new l({visible:!1}));rt.userData.role=`tank`,X.add(rt);let it=new C(`#5fd8ff`,0,3,2);X.add(it);let at=[tr(`#e8a23c`),tr(`#d85a6a`),tr(`#6cc0e0`)],ot=[],st=et/2-.12;for(let e=0;e<3;e++){let t=new U(new L({map:at[e],transparent:!0,depthWrite:!1})),n=.15-e*.015;t.userData={sz:n,sp:.6+e*.22,ph:e*2.1,ax:.21*(.7+.1*e),ay:st,az:.09000000000000001,prevx:0},t.scale.set(n,n,1),ot.push(t),X.add(t)}let ct=nr(),lt=[];for(let e=0;e<5;e++){let t=new U(new L({map:ct,color:`#cfeffb`,transparent:!0,opacity:.5,depthWrite:!1}));t.userData={ph:e/5,sp:.16+Math.random()*.06,x:-.1+e%3*.07},t.scale.setScalar(.03+e%2*.015),t.raycast=()=>{},lt.push(t),X.add(t)}let ut=new U(new L({map:ct,color:`#c8a24a`,transparent:!0,opacity:0,depthWrite:!1}));ut.scale.setScalar(.04),ut.raycast=()=>{},X.add(ut);let dt=0;function ft(){dt=3,ut.position.set(-.05,st,0),ut.material.opacity=1}h.add(X);let pt=new G;for(let e=0;e<8;e++){let t=new U(new L({map:ct,color:`#ffd9a0`,transparent:!0,opacity:0,depthWrite:!1,blending:2}));t.scale.setScalar(.018),t.userData={ph:e*.9,sp:.1+e%3*.04,r:.1+e%4*.03},t.raycast=()=>{},pt.add(t)}pt.position.set(-1.45,1.2,1.6),h.add(pt);let mt=new G,ht=.925;mt.add(Rn({w:4,d:2,x:0,y:.045,z:1.55,opacity:.5})),mt.add(Rn({w:.95,d:.62,x:0,y:ht,z:1.42,opacity:.42})),mt.add(Rn({w:.3,d:.3,x:-.55,y:ht,z:1.95,opacity:.4})),mt.add(Rn({w:.42,d:.46,x:.5,y:ht,z:1.9,opacity:.35})),mt.add(Rn({w:.42,d:.46,x:1,y:ht,z:1.5,opacity:.42})),mt.add(Rn({w:.7,d:.42,x:Xe,y:ht,z:1.95,opacity:.42})),mt.add(Rn({w:.55,d:.4,x:1.32,y:ht,z:1.78,opacity:.4})),mt.add(Rn({w:.34,d:.34,x:-1.45,y:ht,z:1.6,opacity:.35})),h.add(mt),[J,je,Fe,Le,Ke,X,pt,mt].forEach(e=>b.add(e));function gt(e,t,n,r,i,a,s){let c=new o(new O(t,n,r),new l({visible:!1}));c.position.set(i,a,s),c.userData.role=e,S.add(c)}gt(`laptop`,.95,.6,.7,0,1.05,1.4),gt(`phone`,.5,.4,.5,1,.98,1.42),gt(`cat`,.62,.74,.5,We,Ge,Y),gt(`tank`,$e,et,.5,Xe,Ze,Qe);let _t=Xn(),vt={dressed2:new k().load(Un),night2:new k().load(Wn),modern:new k().load(Gn),charm:new k().load(Kn)},yt=[`dressed2`,`night2`,`modern`,`charm`];for(let e of yt)vt[e].colorSpace=E;let bt=Jn(),xt=new o(new x(1,1),new l({map:vt.dressed2,alphaMap:bt,transparent:!0,toneMapped:!1}));xt.position.set(0,1.45,-5),xt.visible=!1,xt.raycast=()=>{},n.add(xt);let St=Hn({strength:.5});n.add(St);let Ct=`3d`,wt=`painted`;function Tt(){let e=Lt===`corner`,t=Ct!==`3d`,n=t&&wt===`painted`;g.visible=e&&!t,v.visible=!e&&!t,y.visible=t||e,xt.visible=t,b.visible=!n,Pt()}function Et(e){return Ct=yt.includes(e)?e:`3d`,Ct!==`3d`&&(xt.material.map=vt[Ct],xt.material.needsUpdate=!0),Tt(),Ct}function Dt(e){return wt=e===`3d`?`3d`:`painted`,Tt(),wt}let Ot=Ne.intensity,kt=Ie.material.emissiveIntensity,At=new H;function jt(e,t,n){let a=n?n.windowGlow:0,o=a>.55;Ke.material.map=o?He:Ve,Je>0&&(Je=Math.max(0,Je-e));let c=Je>0?Math.sin((1.3-Je)/1.3*Math.PI):0,l=o?.012*Math.sin(t*1.2):.03*Math.sin(t*2.4);Ke.scale.set(Ue,Ue*(1+l+.12*c),1),Ke.position.y=Ge+.06*c,qe.material.opacity=c,qe.position.set(We,1.72+.5*(1-Je/1.3),Y),qe.scale.setScalar(.22+.1*c),dt>0&&(dt=Math.max(0,dt-e),ut.position.y=Math.max(-.09,ut.position.y-e*.06),ut.material.opacity=dt>.3?1:dt/.3);for(let e of ot){let n=e.userData,r=Math.sin(t*n.sp+n.ph)*n.ax,i=Math.sin(t*n.sp*.8+n.ph*1.7)*n.ay*.7,a=Math.cos(t*n.sp*.6+n.ph)*n.az,o=dt>0?ut.position.x:r,s=dt>0?ut.position.y:i,c=dt>0?ut.position.z:a,l=dt>0?.05:.1;e.position.x+=(o-e.position.x)*l,e.position.y+=(s-e.position.y)*l,e.position.z+=(c-e.position.z)*l,e.scale.x=(e.position.x>=n.prevx?1:-1)*n.sz,n.prevx=e.position.x}for(let e of lt){let n=(t*e.userData.sp+e.userData.ph)%1;e.position.set(e.userData.x+Math.sin(t*2+e.userData.ph*9)*.015,-.09+2*st*n,.02),e.material.opacity=.5*Math.sin(n*Math.PI)}it.intensity=2.6*a,nt.material.emissiveIntensity=.4+.9*a,Ne.intensity=Ot*(.97+.03*Math.sin(t*7)*Math.sin(t*2.3)),Ie.material.emissiveIntensity=kt*(.85+.15*Math.sin(t*3.1+1)),Re.material.emissiveIntensity=.4*(.65+.35*Math.sin(t*2.2)),At.setRGB(1,.85,.62),pt.children.forEach((e,n)=>{let r=e.userData,i=(t*r.sp+r.ph)%1;e.position.set(Math.cos(t*.5+r.ph*5)*r.r,-.15+i*.45,Math.sin(t*.4+r.ph*5)*r.r),e.material.opacity=(.1+.18*a)*Math.sin(i*Math.PI)});let f=t*.4%1;Ae.position.y=1.04+f*.22,Ae.position.x=-.55+Math.sin(t*1.5)*.02,Ae.material.opacity=.26*Math.sin(f*Math.PI),Ae.scale.set(.1+f*.08,.16+f*.12,1),q.rotation.z=Math.sin(t*.8)*.05,q.rotation.x=Math.sin(t*.6+1)*.04;let h=n?n.t%1:0;for(let e of w)e.rotation.z=-h*Math.PI*2;if(_t.update(e),xt.visible){let e=r.position.z-xt.position.z,t=2*Math.tan(m.degToRad(r.fov)*.5)*e*1.18;xt.scale.set(t*r.aspect,t,1);let n=.55+.45*(1-a);xt.material.color.setRGB(n,n*.97,n*.92)}r.position.set(i.x+Math.sin(t*.5)*.04,i.y+Math.sin(t*.7)*.02,i.z),r.lookAt(s),u.update(e),d.set(u.pitch,u.yaw,0,`YXZ`),r.quaternion.multiply(p.setFromEuler(d)),St.fit(r)}function Mt(e,t=e){ie.map=e,ae.map=t,ie.needsUpdate=!0,ae.needsUpdate=!0}function Z(e){me.map=e,me.needsUpdate=!0}let Nt=`corner`;function Pt(){let e=Nt===`corner`;fe.visible=pe.visible=e,ge.visible=!e||Ct!==`3d`,_e.visible=e,K.visible=!e}function Ft(e){return Nt=e===`straight-on`?`straight-on`:`corner`,Pt(),Nt}function It(e){Se.map=e,Se.needsUpdate=!0}let Lt=e;function Rt(e){Lt=e===`basement`?`basement`:`corner`;let t=Lt===`corner`;return Tt(),Be.intensity=t?9:3.2,ze.intensity=t?.78:.82,ze.color.set(t?`#6a5238`:`#7a5a34`),Lt}return Rt(Lt),Ft(t),{scene:n,camera:r,update:jt,setCityTexture:Mt,setStraightCityTexture:Z,setVignetteTexture:It,setFitout:Rt,setSkin:Et,setProps:Dt,setLayout:Ft,petCat:Ye,feedFish:ft,look:u,vignette:_t,get interactables(){return Ct!==`3d`&&wt===`painted`?S.children:[Fe,Le,Ke,rt]},get tier(){return Lt},get skin(){return Ct},get props(){return wt},get layout(){return Nt}}}function Xn(){let e=new _;e.background=new H(`#7fb0dd`);let t=new n(-1.4,1.4,.9,-.9,0,10);t.position.set(0,0,5);let r=(e,t={})=>new l({color:e,toneMapped:!1,...t}),i=(e,t,n,i,a,s,c)=>{let l=new o(new x(e,t),r(s,c));return l.position.set(n,i,a),l};e.add(i(3.2,.9,.5,-.95,1,`#2a4a30`)),e.add(i(3.2,.7,-.7,-1.05,2,`#1d3724`)),e.add(i(.06,.3,-.95,-.55,3,`#3a2a1a`));let a=new o(new N(.22,18),r(`#234a2a`));a.position.set(-.95,-.32,3),e.add(a),e.add(i(.04,.55,.9,-.55,3,`#20242a`));let s=new o(new N(.1,16),r(`#ffd98a`,{transparent:!0,opacity:0}));s.position.set(.9,-.26,3.1),e.add(s);let c=new o(new N(.16,24),r(`#fff4d8`));e.add(c);let u=[];for(let[t,n]of[[-1,.5],[-.6,.7],[.2,.6],[.7,.72],[1.05,.45],[-.2,.78],[.45,.4]]){let i=new o(new N(.015,8),r(`#ffffff`,{transparent:!0,opacity:0}));i.position.set(t,n,.5),u.push(i),e.add(i)}let d=new H(`#141d33`),f=new H(`#7fb6e0`),p=new H(`#d6824a`),h=new H(`#fff0cc`),g=new H(`#cdd8ef`),v=.34;function y(t){v=(v+t*.04)%1;let n=v*Math.PI*2,r=-Math.cos(n);c.position.set(Math.sin(n)*1.15,r*.66+.06,0);let i=m.smoothstep(r,-.18,.5),a=m.smoothstep(.32,0,Math.abs(r));e.background.copy(d).lerp(f,i).lerp(p,a*.45),c.material.color.copy(r>0?h:g),s.material.opacity=1-i;let o=(1-i)*.85;for(let e of u)e.material.opacity=o}return{scene:e,camera:t,update:y}}function Zn(e,{x:t,y:n,z:r,ry:i=0,face:a=`#efe2c8`,rim:s=`#2a1c10`}){let c=new G,l=new o(new N(.2,28),new f({color:s,roughness:.6})),u=new o(new N(.17,28),new f({color:a,roughness:.7}));u.position.z=.01;let d=new o(new x(.018,.14),new f({color:`#1a130c`,roughness:.5}));return d.geometry.translate(0,.05,0),d.position.z=.02,e.push(d),c.add(l,u,d),c.position.set(t,n,r),c.rotation.y=i,c}function Qn(e){let t=document.createElement(`canvas`);t.width=t.height=128;let n=t.getContext(`2d`),r=`#e08a3c`,i=`#b96a26`,a=`#3a2410`;if(n.lineJoin=`round`,e){n.fillStyle=r,n.beginPath(),n.ellipse(64,78,44,26,0,0,7),n.fill(),n.fillStyle=i,n.beginPath(),n.ellipse(64,86,44,16,0,0,7),n.fill(),n.fillStyle=r,n.beginPath(),n.arc(36,70,20,0,7),n.fill(),n.fillStyle=r,$n(n,24,56,34,44,42,58),$n(n,40,54,50,44,54,60),n.strokeStyle=i,n.lineWidth=7,n.lineCap=`round`,n.beginPath(),n.moveTo(100,70),n.quadraticCurveTo(112,90,88,96),n.stroke(),n.strokeStyle=a,n.lineWidth=2.5,n.beginPath(),n.arc(30,70,5,.1,Math.PI-.1),n.stroke(),n.strokeStyle=i,n.lineWidth=3;for(let e of[60,74,88])n.beginPath(),n.moveTo(e,58),n.lineTo(e,70),n.stroke()}else{n.fillStyle=r,n.beginPath(),n.ellipse(64,86,30,34,0,0,7),n.fill(),n.fillStyle=`#f3c98a`,n.beginPath(),n.ellipse(64,92,14,22,0,0,7),n.fill(),n.strokeStyle=i,n.lineWidth=8,n.lineCap=`round`,n.beginPath(),n.moveTo(92,100),n.quadraticCurveTo(116,86,104,60),n.stroke(),n.fillStyle=r,n.beginPath(),n.arc(64,48,24,0,7),n.fill(),n.fillStyle=r,$n(n,44,34,50,18,60,34),$n(n,84,34,78,18,68,34),n.fillStyle=`#f0b0c0`,$n(n,47,30,50,22,56,32),$n(n,81,30,78,22,72,32),n.fillStyle=a,n.beginPath(),n.arc(55,47,3.4,0,7),n.arc(73,47,3.4,0,7),n.fill(),n.fillStyle=`#e06a7a`,$n(n,61,54,67,54,64,58),n.strokeStyle=a,n.lineWidth=1.6;for(let e of[-2,3])n.beginPath(),n.moveTo(50,55+e),n.lineTo(34,53+e),n.moveTo(78,55+e),n.lineTo(94,53+e),n.stroke();n.strokeStyle=i,n.lineWidth=3;for(let e of[78,90,102])n.beginPath(),n.moveTo(50,e),n.lineTo(78,e),n.stroke()}let o=new j(t);return o.colorSpace=E,o}function $n(e,t,n,r,i,a,o){e.beginPath(),e.moveTo(t,n),e.lineTo(r,i),e.lineTo(a,o),e.closePath(),e.fill()}function er(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`);t.fillStyle=`#ff5a8a`,t.beginPath(),t.moveTo(32,52),t.bezierCurveTo(6,32,14,10,32,24),t.bezierCurveTo(50,10,58,32,32,52),t.fill();let n=new j(e);return n.colorSpace=E,n}function tr(e){let t=document.createElement(`canvas`);t.width=t.height=64;let n=t.getContext(`2d`);n.fillStyle=e,n.beginPath(),n.ellipse(30,32,18,11,0,0,7),n.fill(),n.beginPath(),n.moveTo(46,32),n.lineTo(60,22),n.lineTo(60,42),n.closePath(),n.fill(),n.fillStyle=`rgba(255,255,255,0.35)`,n.beginPath(),n.ellipse(28,36,12,5,0,0,7),n.fill(),n.fillStyle=`#15212a`,n.beginPath(),n.arc(20,30,2.6,0,7),n.fill();let r=new j(t);return r.colorSpace=E,r}function nr(){let e=document.createElement(`canvas`);e.width=e.height=32;let t=e.getContext(`2d`),n=t.createRadialGradient(16,16,0,16,16,16);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.6,`rgba(255,255,255,0.7)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.beginPath(),t.arc(16,16,16,0,7),t.fill();let r=new j(e);return r.colorSpace=E,r}function rr(e){let t=document.createElement(`canvas`);t.width=t.height=256;let n=t.getContext(`2d`),r=n.createLinearGradient(0,0,256,256);e<0?(r.addColorStop(0,`#6a3b1c`),r.addColorStop(1,`#caa15a`)):(r.addColorStop(0,`#3a4a6a`),r.addColorStop(1,`#a86a3a`)),n.fillStyle=r,n.fillRect(0,0,256,256),n.globalAlpha=.5;for(let e=0;e<5;e++)n.fillStyle=e%2?`#2a1c10`:`#e0c080`,n.fillRect(30+e*36,40+e%3*30,26,150);let i=new j(t);return i.colorSpace=E,i}var{Timer:ir}=ce,ar=new URLSearchParams(window.location.search),or=ar.get(`demo`)===`1`||ar.has(`capture`);window.__demo=or;var sr=(ar.get(`city`)?Number(ar.get(`city`)):0)||Math.random()*1e9|0,cr=0,lr=jn({demo:or,citySeed:sr,profileIndex:cr}),{renderer:ur,rig:dr,sunRig:fr,city:pr,cityLife:mr,waterMaterial:hr,fitShadowFrustum:gr,landmarkFactory:_r,renderCityBeautyTo:vr}=lr,$=Yn({tier:`corner`});typeof window<`u`&&(window.__office=$),$.camera.aspect=window.innerWidth/window.innerHeight,$.camera.updateProjectionMatrix();var yr=!0;window.__shadows=yr,window.__scene=`office`;var br={minFilter:R,magFilter:R,depthBuffer:!0,stencilBuffer:!1},xr=new M(2.2,3.4,11.5),Sr=new M(0,2,0).sub(xr),Cr=new M(0,1,0),wr=30,Tr=384/320,Er=m.radToDeg(2*Math.atan(Math.tan(m.degToRad(wr))/Tr));function Dr(e){let t=new c(Er,Tr,.1,100);t.position.copy(xr);let n=Sr.clone().applyAxisAngle(Cr,m.degToRad(e));return t.lookAt(xr.clone().add(n)),t}var Or=Dr(30),kr=Dr(-30),Ar=new B(384,320,br),jr=new B(384,320,br);$.setCityTexture(Ar.texture,jr.texture);var Mr=new c(52,540/320,.1,100);Mr.position.copy(xr),Mr.lookAt(xr.clone().add(Sr));var Nr=new B(540,320,br);$.setStraightCityTexture(Nr.texture);var Pr=0,Fr=3,Ir=new B(512,320,{minFilter:R,magFilter:R,depthBuffer:!0,stencilBuffer:!1});$.setVignetteTexture(Ir.texture);var Lr=!1,Rr=(()=>{if(typeof document>`u`)return{showLap(){},toast(){},flash(){}};let e=document.createElement(`style`);e.textContent=`
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
    </div></div>`;let n=document.createElement(`div`);n.className=`otoast`;let r=document.createElement(`div`);r.className=`oflash`,document.body.append(t,n,r),t.querySelector(`.lap-x`).addEventListener(`click`,()=>Br()),t.addEventListener(`click`,e=>{e.target===t&&Br()}),t.addEventListener(`click`,e=>{e.target.closest(`button`)&&navigator.vibrate?.(10)});let i=0;return{showLap(e){t.classList.toggle(`on`,e)},toast(e){n.textContent=e,n.classList.add(`on`),clearTimeout(i),i=setTimeout(()=>n.classList.remove(`on`),1400)},flash(){r.style.transition=`none`,r.style.opacity=`0.85`,requestAnimationFrame(()=>{r.style.transition=`opacity .55s`,r.style.opacity=`0`})}}})();function zr(){Lr=!0,Rr.showLap(!0)}function Br(){Lr=!1,Rr.showLap(!1)}function Vr(){cr=(cr+1)%Je.length,Rr.flash(),pr.generate(sr,cr),hr.uniforms.uVecWater.value.set(pr.waterColor),mr.setProfile(pr.state.profile),gr(),Rr.toast(`✈  `+pr.state.profile.name),window.__profile=pr.state.profile.key}function Hr(e){let t=$.setFitout(e);return Rr.toast(t===`basement`?`🏚  Basement office`:`🏙  Corner office`),window.__tier=t,t}function Ur(){return Hr($.tier===`corner`?`basement`:`corner`)}window.__tier=$.tier;var Wr=[`3d`,`dressed2`,`night2`,`modern`,`charm`],Gr={"3d":`🧊  Stylized 3D office`,dressed2:`📚  Dressed office (day)`,night2:`🌙  Night office`,modern:`🏙  Modern office (day)`,charm:`🎨  Charm office`};function Kr(e){let t=$.setSkin(e);return window.__officeSkin=t,Rr.toast(Gr[t]),t}function qr(){return Kr(Wr[(Wr.indexOf($.skin)+1)%Wr.length])}window.__officeSkin=$.skin;var Jr={painted:`🎨  Painted props (cohesive)`,"3d":`🧊  Live 3D props (animated)`};function Yr(e){let t=$.setProps(e);return window.__officeProps=t,$.skin!==`3d`&&Rr.toast(Jr[t]),t}function Xr(){return Yr($.props===`painted`?`3d`:`painted`)}window.__officeProps=$.props;var Zr={corner:`🏙  Corner window`,"straight-on":`🖼  Straight-on window`};function Qr(e){let t=$.setLayout(e);return window.__officeLayout=t,Rr.toast(Zr[t]),t}function $r(){return Qr($.layout===`corner`?`straight-on`:`corner`)}window.__officeLayout=$.layout;var ei=new T,ti=new W,ni=(e,t)=>{ti.x=e/window.innerWidth*2-1,ti.y=-(t/window.innerHeight)*2+1};function ri(){ei.setFromCamera(ti,$.camera);let e=ei.intersectObjects($.interactables,!0)[0];if(!e)return null;let t=e.object;for(;t&&!t.userData.role;)t=t.parent;return t?t.userData.role:null}function ii(e){e===`laptop`?zr():e===`phone`?Vr():e===`cat`?$.petCat():e===`tank`&&$.feedFish()}var ai=6,oi=0,si=0,ci=0,li=0,ui=0,di=!1,fi=!1;ur.domElement.style.cursor=`grab`,ur.domElement.addEventListener(`mousedown`,e=>{di=!0,fi=!1,oi=li=e.clientX,si=ui=e.clientY,ci=performance.now()}),window.addEventListener(`mousemove`,e=>{di?(!fi&&Math.hypot(e.clientX-oi,e.clientY-si)>ai&&(fi=!0),fi&&($.look.addDrag(e.clientX-li,e.clientY-ui),ur.domElement.style.cursor=`grabbing`),li=e.clientX,ui=e.clientY):(ni(e.clientX,e.clientY),ur.domElement.style.cursor=ri()?`pointer`:`grab`)}),window.addEventListener(`mouseup`,e=>{if(di&&!fi&&!Lr){ni(e.clientX,e.clientY);let t=ri();t&&ii(t)}di=!1,fi=!1,ur.domElement.style.cursor=`grab`});var pi=!1;ur.domElement.addEventListener(`touchstart`,e=>{e.touches.length===1&&(oi=li=e.touches[0].clientX,si=ui=e.touches[0].clientY,ci=performance.now(),pi=!1)},{passive:!0}),ur.domElement.addEventListener(`touchmove`,e=>{if(e.touches.length!==1)return;let t=e.touches[0].clientX,n=e.touches[0].clientY;!pi&&Math.hypot(t-oi,n-si)>8&&(pi=!0),pi&&$.look.addDrag(t-li,n-ui),li=t,ui=n},{passive:!0}),window.addEventListener(`touchend`,e=>{if(!pi&&performance.now()-ci<350&&(!e.touches||e.touches.length===0)&&!Lr){let e=ri();e&&ii(e)}pi=!1});var mi={left:!1,right:!1,up:!1,down:!1},hi={ArrowLeft:`left`,ArrowRight:`right`,ArrowUp:`up`,ArrowDown:`down`};window.addEventListener(`keydown`,e=>{if(hi[e.key]){mi[hi[e.key]]=!0,e.preventDefault();return}e.key===`Escape`&&(Lr?Br():$.look.recenter()),(e.key===`f`||e.key===`F`)&&Ur(),(e.key===`j`||e.key===`J`)&&qr(),(e.key===`u`||e.key===`U`)&&Xr(),(e.key===`t`||e.key===`T`)&&fr.cyclePreset(),(e.key===`h`||e.key===`H`)&&(yr=!yr,window.__shadows=yr),(e.key===`w`||e.key===`W`)&&$r()}),window.addEventListener(`keyup`,e=>{hi[e.key]&&(mi[hi[e.key]]=!1)}),_r.whenReady.then(()=>{pr.generate(sr,cr),gr(),window.__cityReady=!0}),ar.get(`office`)===`basement`&&Hr(`basement`);var gi=ar.get(`officeskin`);Wr.includes(gi)&&Kr(gi);var _i=ar.get(`officeprops`);[`painted`,`3d`].includes(_i)&&Yr(_i);var vi=ar.get(`officelayout`);[`corner`,`straight-on`].includes(vi)&&Qr(vi);var yi=new ir;yi.connect(document);function bi(){yi.update();let e=Math.min(yi.getDelta(),.1);dr.update(e),lr.updateWorld(e,yi.getElapsed(),{shadowsOn:yr,seasonTarget:0}),$.look.addKeys(e,mi),$.update(e,yi.getElapsed(),fr),window.__lookYaw=$.look.yaw,window.__lookPitch=$.look.pitch,$.tier===`basement`?(ur.setRenderTarget(Ir),ur.render($.vignette.scene,$.vignette.camera)):Pr%Fr===0&&($.layout===`straight-on`?vr(Mr,Nr):(vr(Or,Ar),vr(kr,jr),$.skin!==`3d`&&vr(Mr,Nr))),Pr++,ur.setRenderTarget(null),ur.render($.scene,$.camera),requestAnimationFrame(bi)}bi(),Fn({key:`office`,title:`The Office`,tips:[`Drag to look around the office (or use the arrow keys)`,`Click / tap the LAPTOP to open the game panel`,`Tap the PHONE to travel to another city · pet the CAT · feed the FISH`,`Esc exits · F fitout · J skin · U props · W window · T time`]}),window.addEventListener(`resize`,()=>{lr.resize(),$.camera.aspect=window.innerWidth/window.innerHeight,$.camera.updateProjectionMatrix()});