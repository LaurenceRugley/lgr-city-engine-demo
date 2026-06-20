import{$ as e,A as t,B as n,C as r,D as i,E as a,F as o,G as s,H as c,I as l,J as u,K as d,L as f,M as p,N as m,O as h,P as g,Q as _,R as v,S as y,T as b,U as x,V as S,W as C,X as w,Y as T,Z as E,_ as D,a as O,at as k,b as ee,c as A,ct as j,d as M,dt as te,et as N,f as P,ft as F,g as ne,h as I,i as re,it as L,j as R,k as ie,l as ae,lt as z,m as oe,mt as B,n as se,nt as ce,o as le,ot as ue,p as de,pt as V,q as fe,r as pe,rt as me,s as H,st as he,t as ge,tt as _e,u as U,ut as ve,v as W,w as G,x as ye,y as be,z as xe}from"./three-rdIRqpE-.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var Se=Math.atan(1/Math.SQRT2),Ce=Math.atan(.5),we=Math.PI/4,Te={PERSPECTIVE:4,ISOMETRIC:5,DIMETRIC:6},Ee=.12,De=1.45,Oe=4,ke=40,Ae=1.5,je=16,Me=6,Ne=22,Pe=3.5,Fe=11,Ie=(e,t,n)=>e+(t-e)*(1-Math.exp(-8*n)),Le=(e,t)=>e+Math.PI*2*Math.round((t-e)/(Math.PI*2));function Re({aspect:e,fov:t=48,near:n=.1,far:r=100,target:i=new V(0,.8,0),azimuth:a=we,elevation:o=.52,distance:c=12,zoom:l=5.5}={}){let u=new fe(t,e,n,r),d=new s(-1,1,1,-1,n,r),p=Te.PERSPECTIVE,m=e,h={azimuth:a,elevation:o,distance:c,zoom:l,target:i.clone()},g={azimuth:a,elevation:o,distance:c,zoom:l,target:i.clone()},_=!1,v=null,y=new V,b=()=>p===Te.PERSPECTIVE?u:d;function x(e){e!==p&&(p=e,p===Te.ISOMETRIC||p===Te.DIMETRIC?(h.elevation=p===Te.ISOMETRIC?Se:Ce,h.azimuth=Le(we,g.azimuth),_=!0):_=!1)}function S(e,t){h.azimuth+=e,_||(h.elevation=f.clamp(h.elevation+t,Ee,De))}function C(e){p===Te.PERSPECTIVE?h.distance=f.clamp(h.distance*e,Oe,ke):h.zoom=f.clamp(h.zoom*e,Ae,je)}function w(e,t){let n=h.azimuth,r=p===Te.PERSPECTIVE?h.distance*.04:h.zoom*.08,i=new V(Math.cos(n),0,-Math.sin(n)),a=new V(-Math.sin(n),0,-Math.cos(n));h.target.addScaledVector(i,e*r),h.target.addScaledVector(a,t*r)}function T(e,t){m=e/t,u.aspect=m,u.updateProjectionMatrix()}function E(e){v&&(v(y),h.target.copy(y)),g.azimuth=Ie(g.azimuth,h.azimuth,e),g.elevation=Ie(g.elevation,h.elevation,e),g.distance=Ie(g.distance,h.distance,e),g.zoom=Ie(g.zoom,h.zoom,e),g.target.x=Ie(g.target.x,h.target.x,e),g.target.y=Ie(g.target.y,h.target.y,e),g.target.z=Ie(g.target.z,h.target.z,e);let t=Math.cos(g.elevation),n=Math.sin(g.elevation),r=Math.cos(g.azimuth),i=Math.sin(g.azimuth),a=b();if(a.position.set(g.target.x+g.distance*t*i,g.target.y+g.distance*n,g.target.z+g.distance*t*r),a.lookAt(g.target),a.isOrthographicCamera){let e=g.zoom,t=e*m;a.left=-t,a.right=t,a.top=e,a.bottom=-e,a.updateProjectionMatrix()}}function D(e,t,n,r=!1){h.target.set(e,t,n),r&&g.target.copy(h.target)}function O(e,t=!1){h.zoom=f.clamp(e,Ae,je),t&&(g.zoom=h.zoom)}function k(e,{frame:t,snap:n=!1}={}){v=e,n&&(v(y),h.target.copy(y),g.target.copy(y)),t!=null&&(p===Te.PERSPECTIVE?h.distance=f.clamp(t,Oe,ke):h.zoom=f.clamp(t,Ae,je))}function ee(){v=null}return{get camera(){return b()},get mode(){return p},get azimuth(){return g.azimuth},get following(){return!!v},setTarget:D,setZoom:O,setFollow:k,clearFollow:ee,get styleT(){return p===Te.PERSPECTIVE?f.clamp((g.distance-Me)/(Ne-Me),0,1):f.clamp((g.zoom-Pe)/(Fe-Pe),0,1)},setMode:x,orbit:S,zoomBy:C,pan:w,setViewport:T,update:E}}var ze={value:0},Be=new I(`#ffffff`),Ve={value:0},He={value:0},Ue={value:0},We=new F,Ge={value:0},Ke={value:0},qe=`
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
`;function Je(e){e.uniforms.uVector=ze,e.uniforms.uVecTint={value:Be},e.uniforms.uVecShadow=Ve,e.uniforms.uSnow=He,e.uniforms.uCloud=Ue,e.uniforms.uCloudOff={value:We},e.uniforms.uFogCharm=Ge}function Ye(e){return e.replace(`#include <fog_fragment>`,`
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
  `)}function K(e){return e.replace(`#include <common>`,`#include <common>
varying vec3 vVecN;
varying vec3 vVecP;
varying vec2 vWorldXZ;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
  vVecN = normal;
  vVecP = position;
  vWorldXZ = (modelMatrix * vec4(position, 1.0)).xz;`)}function Xe(e){return e.replace(`#include <shadowmap_pars_fragment>`,`#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>`)}var Ze=`col *= mix(1.0, getShadowMask(), uVecShadow);`;function Qe(e,{color:t,id:n,windowGlow:r,winColors:i=[`#ffb852`,`#8cd9ff`],litFrac:a=.55}={}){let o=[0,1,2].map(e=>new I(i[e]??i[i.length-1]));return e.customProgramCacheKey=()=>`lgr-vec-tower`,e.onBeforeCompile=e=>{Je(e),e.uniforms.uWindowGlow=r,e.uniforms.uWinId={value:n},e.uniforms.uVecColor={value:new I(t)},e.uniforms.uWinA={value:o[0]},e.uniforms.uWinB={value:o[1]},e.uniforms.uWinC={value:o[2]},e.uniforms.uWinLit={value:a},e.vertexShader=K(e.vertexShader),e.fragmentShader=Ye(Xe(e.fragmentShader.replace(`#include <common>`,`#include <common>
        uniform float uWindowGlow;
        uniform float uWinId;
        uniform vec3  uVecColor;
        uniform vec3  uWinA; uniform vec3 uWinB; uniform vec3 uWinC;
        uniform float uWinLit;
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
        }`).replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>
        {
          vec3 wcol; vec2 w = winTerms(wcol);
          totalEmissiveRadiance += w.x * w.y * wcol * uWindowGlow * 1.8;
        }`).replace(`#include <opaque_fragment>`,`#include <opaque_fragment>
        if (uVector > 0.5) {
          vec3 col = vecShade(uVecColor);
          ${Ze}                                  // the sun's shadow darkens the body
          vec3 wcol; vec2 w = winTerms(wcol);
          vec3 glass = vec3(0.17, 0.23, 0.34);          // dark glass-blue panes (day)
          col = mix(col, glass, w.x * 0.85);
          col += w.x * w.y * wcol * uWindowGlow * 1.5;  // …windows EMIT (unshadowed) at night
          gl_FragColor = vec4(col, diffuseColor.a);
        }`)))},e}function q(e,{color:t=null,glow:n=null,glowDay:r=0,glowNight:i=1,windowGlow:a=null,season:o=!1}={}){let s=t===null,c=n!==null&&a!==null;return e.customProgramCacheKey=()=>`lgr-vec|`+(s?`d`:`c`)+(c?`g`:``)+(o?`s`:``),e.onBeforeCompile=e=>{Je(e),s||(e.uniforms.uVecColor={value:new I(t)}),c&&(e.uniforms.uGlow={value:new I(n)},e.uniforms.uGlowDay={value:r},e.uniforms.uGlowNight={value:i},e.uniforms.uWindowGlow=a),o&&(e.uniforms.uSeason=Ke),e.vertexShader=K(e.vertexShader);let l=s?`diffuseColor.rgb`:`uVecColor`,u=o?`seasonShift(${l})`:l,d=(s?``:`uniform vec3 uVecColor;
`)+(c?`uniform vec3 uGlow; uniform float uGlowDay; uniform float uGlowNight; uniform float uWindowGlow;
`:``)+(o?`uniform float uSeason;
vec3 seasonShift(vec3 c){
  c = mix(c, vec3(0.86, 0.46, 0.13), smoothstep(0.40, 0.70, uSeason));   // → autumn orange
  c = mix(c, vec3(0.46, 0.33, 0.20), smoothstep(0.75, 1.00, uSeason));   // → bare brown
  return c;
}
`:``),f=c?`uGlow * mix(uGlowDay, uGlowNight, uWindowGlow)`:`vec3(0.0)`,p=Ye(Xe(e.fragmentShader.replace(`#include <common>`,`#include <common>
`+d+qe).replace(`#include <opaque_fragment>`,`#include <opaque_fragment>
        if (uVector > 0.5) {
          vec3 col = vecShade(${u});
          ${Ze}                            // the sun's shadow darkens the flat tier…
          gl_FragColor = vec4(col + ${f}, diffuseColor.a);  // …but the night glow stays lit
        }`)));c&&(p=p.replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>\n  totalEmissiveRadiance += ${f};`)),e.fragmentShader=p},e}function $e(e){let t=e>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function et(e){let t=$e(e);return{next:t,range:(e,n)=>e+(n-e)*t(),int:(e,n)=>e+Math.floor(t()*(n-e+1)),pick:e=>e[Math.floor(t()*e.length)],chance:e=>t()<e}}var tt=[{key:`manhattan`,name:`Manhattan`,towers:[`#EDE3C8`,`#D9B98A`,`#B5562F`,`#A8C8E8`,`#2E3F5C`],ground:`#7CC455`,street:`#9AA0A6`,sidewalk:`#C8CCD0`,park:`#5DB347`,water:`#29A8D8`,shopfronts:[`#C04A3A`,`#3A7AC0`,`#C09A2A`],glass:`#7FA8CC`,winColors:[`#ffd27a`,`#9ad6ff`],hMax:4.6,sigma:.36,roofRate:.35,pSplit:.6,nightLit:.55,roofTint:null,coast:{base:.55,out:1,in:.6,jag:1.05},landmarks:[`empireState`,`chrysler`,`liberty`]},{key:`paris`,name:`Paris`,towers:[`#E8DCC0`,`#F2EAD6`,`#E0D2B4`],ground:`#8CC46A`,street:`#A8A29A`,sidewalk:`#D4CEC2`,park:`#6DB35A`,water:`#3FA8C8`,shopfronts:[`#C04A3A`,`#3A6B5A`,`#7A5AC0`],glass:`#5A6B7A`,winColors:[`#ffdca0`,`#ffcaa0`],hMax:1.5,sigma:.9,roofRate:.15,pSplit:.75,nightLit:.45,roofTint:`#6A7886`,coast:{base:1.05,out:.55,in:.3,jag:.5},landmarks:[`eiffel`,`arcDeTriomphe`,`sacreCoeur`]},{key:`neoTokyo`,name:`Neo-Tokyo`,towers:[`#2A3038`,`#3A4250`,`#252B36`,`#4A4456`],ground:`#3A4A42`,street:`#5A6068`,sidewalk:`#7A8088`,park:`#2E5E46`,water:`#0E6878`,shopfronts:[`#E8483A`,`#5AE8E0`,`#E85AA0`],glass:`#5AE8E0`,winColors:[`#5AE8E0`,`#E85AA0`,`#E8E06A`],hMax:5.2,sigma:.42,roofRate:.6,pSplit:.6,nightLit:.7,roofTint:null,coast:{base:.7,out:1.05,in:.62,jag:1.7},landmarks:[`tokyoTower`,`pagoda`,`neonBillboard`]}];tt.map(e=>e.key);var nt=.3,rt=1.9,it=.55,J=2.45,at=.12,ot=.6,st=6,ct={BASE:.7,OUT:.95,IN:.55,JAG:1,SAMPLES_PER_EDGE:28,HARBOR_DEPTH:.55,HARBOR_WIDTH:.26},lt={PLINTH_TOP:nt,BLOCK:rt,STREET:it,PITCH:J,SIDEWALK:at,SHORE:ot,N:st,COAST:ct};function ut(e,t,n){let r=n?.base??ct.BASE,i=n?.out??ct.OUT,a=n?.in??ct.IN,o=n?.jag??ct.JAG,s=t+r,c=et((e^789079)>>>0),l=[2,3,5,8,11,13].map(e=>({k:e,amp:1/e*o**((e-2)/6),phase:c.range(0,Math.PI*2)})),u=l.reduce((e,t)=>e+t.amp,0),d=e=>{let t=0;for(let n of l)t+=n.amp*Math.sin(n.k*e*Math.PI*2+n.phase);return Math.max(-1,Math.min(1,t/(u*.6)))},f=[{fix:+s,nx:1,nz:0,sign:1},{fix:+s,nx:0,nz:1,sign:-1},{fix:-s,nx:-1,nz:0,sign:-1},{fix:-s,nx:0,nz:-1,sign:1}],p=t+.22,m=ct.SAMPLES_PER_EDGE,h=4*m,g=[],_=0;for(let e=0;e<4;e++){let t=f[e];for(let n=0;n<m;n++,_++){let o=n/m,c=_/h,l=(-s+2*s*o)*t.sign,u=d(c),f=u>=0?u*i:u*a;if(e===0){let e=Math.abs(o-.5);if(e<ct.HARBOR_WIDTH){let t=.5+.5*Math.cos(e/ct.HARBOR_WIDTH*Math.PI);f-=(r+ct.HARBOR_DEPTH)*t}}let v,y;t.nx===0?(y=t.fix+t.nz*f,v=l,y=t.nz>0?Math.max(y,p):Math.min(y,-p)):(v=t.fix+t.nx*f,y=l,v=t.nx>0?Math.max(v,p):Math.min(v,-p)),g.push(new F(v,y))}}return{points:g,B:s,maxR:s+i,harborX:p}}function dt(e){(Array.isArray(e)?e:[e]).forEach(e=>e&&e.dispose&&e.dispose())}function ft({seed:e=1,profileIndex:t=0,landmarkFactory:r=null,windowGlow:i}){let o=new a,s=new a,l=new a;s.raycast=()=>{},l.raycast=()=>{},o.add(s,l);let u=new ee(16773594,3);u.position.set(.45,.6,-.65).multiplyScalar(10);let d=new h(7313331,2762272,1);o.add(u,d);let f=0,p=[],m={seed:e,profileIndex:t,profile:tt[t],extent:0,meshCount:0};function g(e,t,r,i){let a=new n(new H(e,.04,t),q(new c({color:i,roughness:.95,flatShading:!0}),{color:i}));return a.position.y=r,a.userData.ground=!0,a}function _(e,t){for(let e of s.children)e.geometry&&e.geometry.dispose(),dt(e.material);s.clear();for(let e of l.children)e.traverse(e=>{e.isMesh&&dt(e.material)});l.clear(),p.length=0,f=0;let i=et(e),a=tt[t],o=(st-1)/2*J,u=7.075;m={seed:e,profileIndex:t,profile:a,extent:u+(a.coast?.base??ct.BASE),meshCount:0};let d=ut(e,u,a.coast);m.coast=d;let h=new k;d.points.forEach((e,t)=>t?h.lineTo(e.x,e.y):h.moveTo(e.x,e.y)),h.closePath();let _=new n(new y(h,{depth:2,bevelEnabled:!1,steps:1}),q(new c({color:a.ground,roughness:.9,flatShading:!0,side:2}),{color:a.ground}));_.rotation.x=-Math.PI/2,_.position.y=nt-2,_.userData.ground=!0,s.add(_);let S=2*7.195;s.add(g(S,S,.32,a.street)),C(d.harborX,a);let T=[];for(let e=0;e<st;e++)for(let t=0;t<st;t++)T.push([e,t]);let E=new Set,D=Math.max(1,Math.round(T.length*.08));for(;E.size<D;)E.add(i.int(0,T.length-1));let O=i.range(-2.45*.6,J*.6),ee=i.range(-2.45*.6,J*.6),A=Math.hypot(o,o),j=[];if(T.forEach(([e,t],n)=>{let r=(e-(st-1)/2)*J,o=(t-(st-1)/2)*J;if(s.add(g(rt,rt,.32999999999999996,a.sidewalk).translateX(r).translateZ(o)),E.has(n)){s.add(g(rt-at*2,rt-at*2,.35,a.park).translateX(r).translateZ(o));let e=i.int(3,5);for(let t=0;t<e;t++)w(r+i.range(-.6,.6),o+i.range(-.6,.6),a,i);return}let c=rt-at*2,l=i.chance(a.pSplit)?2:1,u=i.chance(a.pSplit)?2:1,d=c/l,f=c/u;for(let e=0;e<l;e++)for(let t=0;t<u;t++){let n=r-c/2+d*(e+.5),s=o-c/2+f*(t+.5),l=Math.max(.6,d-.1),u=Math.max(.6,f-.1),p=Math.hypot(n-O,s-ee)/A,m=Math.exp(-(p*p)/(2*a.sigma*a.sigma)),h=Math.max(.5,.5+(a.hMax-.5)*m*i.range(.75,1.25));h>a.hMax*.5&&Math.min(l,u)>=.7&&j.push({lx:n,lz:s,fw:l,fd:u,h,r:p}),v(n,s,l,u,h,a,i)}}),r&&r.ready){j.sort((e,t)=>e.r-t.r);let e=[],t=a.landmarks;for(let n=0;n<t.length&&j.length;n++){let i=null;for(let t of j)if(e.every(e=>Math.hypot(e.lx-t.lx,e.lz-t.lz)>J*.9)){i=t;break}i||=j[0],e.push(i),b(i.lx,i.lz);let o=a.hMax*r.heightFactor(t[n]),s=r.make(t[n],{x:i.lx,z:i.lz,w:i.fw,d:i.fd,h:o,plinthTop:nt});if(s){l.add(s);let e=new le().setFromObject(s);x(e.min.x-.15,e.max.x+.15,e.min.z-.15,e.max.z+.15)}}}s.traverse(e=>{e.isMesh&&(e.userData.ground?(e.castShadow=!1,e.receiveShadow=!0):e.material&&e.material.isMeshBasicMaterial?(e.castShadow=!1,e.receiveShadow=!1):(e.castShadow=!0,e.receiveShadow=!0))}),l.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),m.meshCount=s.children.length+l.children.length;let M=0;for(let e of s.children){let t=e.position;M=(Math.imul(M,16777619)^(Math.round(t.x*100)*2654435761^Math.round(t.y*100)*40503^Math.round(t.z*100)*2246822519))>>>0}for(let e of m.coast.points)M=(Math.imul(M,16777619)^(Math.round(e.x*100)*2654435761^Math.round(e.y*100)*40503))>>>0;m.sig=M,window.__city={seed:e,profile:a.key,meshes:m.meshCount,sig:M}}function v(e,t,r,a,o,l,u){let d=Qe(new c({flatShading:!0,roughness:.7,metalness:.05}),{color:u.pick(l.towers),id:++f,windowGlow:i,winColors:l.winColors,litFrac:l.nightLit}),m=new n(new H(r,o,a),d);if(m.position.set(e,nt+o/2,t),m.userData.lot=[e,t],s.add(m),l.roofTint){let i=q(new c({color:l.roofTint,roughness:.85,flatShading:!0}),{color:l.roofTint}),u=new n(new H(r*1.02,.08,a*1.02),i);u.position.set(e,nt+o+.04,t),u.userData.lot=[e,t],s.add(u)}if(o<1.4){let i=u.pick(l.shopfronts),o=new n(new H(r*1.04,.18,a*1.04),q(new c({color:i,roughness:.8,flatShading:!0}),{color:i}));o.position.set(e,.39,t),o.userData.lot=[e,t],s.add(o)}let h=nt+o,g=r,_=a;if(o>l.hMax*.5&&u.chance(.55)){let d=r*u.range(.5,.72),p=a*u.range(.5,.72),m=o*u.range(.18,.4),v=new n(new H(d,m,p),Qe(new c({flatShading:!0,roughness:.7,metalness:.05}),{color:u.pick(l.towers),id:++f,windowGlow:i,winColors:l.winColors,litFrac:l.nightLit}));v.position.set(e,nt+o+m/2,t),v.userData.lot=[e,t],s.add(v),h=nt+o+m,g=d,_=p}if(o>l.hMax*.45&&u.chance(l.roofRate)){let r=u.chance(.5)?new n(new H(g*.4,.18,_*.4),q(new c({color:`#9a9a9a`,flatShading:!0}),{color:`#9a9a9a`})):new n(new D(g*.18,g*.18,.22,10),q(new c({color:`#b9bec4`,flatShading:!0}),{color:`#b9bec4`}));if(r.position.set(e+u.range(-.1,.1),h+.11,t+u.range(-.1,.1)),r.userData.lot=[e,t],s.add(r),u.chance(.25)){let r=new n(new ue(.05,6,5),new S({color:`#ff3b30`,transparent:!0,opacity:1}));r.position.set(e,h+.15,t),r.userData.lot=[e,t],r.raycast=()=>{},s.add(r),p.push({mesh:r,phase:u.range(0,6.28)})}}if(o>l.hMax*.7&&u.chance(.35)){let r=o*u.range(.18,.34),i=new n(new D(.018,.05,r,6),q(new c({color:`#c8ccd2`,flatShading:!0}),{color:`#c8ccd2`}));i.position.set(e,h+r/2,t),i.userData.lot=[e,t],i.raycast=()=>{},s.add(i)}}function b(e,t){for(let n=s.children.length-1;n>=0;n--){let r=s.children[n];r.userData.lot&&Math.abs(r.userData.lot[0]-e)<1e-4&&Math.abs(r.userData.lot[1]-t)<1e-4&&(r.geometry&&r.geometry.dispose(),dt(r.material),s.remove(r))}for(let e=p.length-1;e>=0;e--)p[e].mesh.parent||p.splice(e,1)}function x(e,t,n,r){for(let i=s.children.length-1;i>=0;i--){let a=s.children[i];a.userData.lot&&a.position.x>=e&&a.position.x<=t&&a.position.z>=n&&a.position.z<=r&&(a.geometry&&a.geometry.dispose(),dt(a.material),s.remove(a))}}function C(e,t){let r=q(new c({color:`#7a5634`,roughness:.95,flatShading:!0}),{color:`#7a5634`}),i=(e,t,i,a)=>{let o=new n(new H(e,.06,t),r);o.position.set(i,nt-.16,a),s.add(o)};i(.24,2,e+.02,0),i(1.3,.22,e+.7,-.72),i(1.3,.22,e+.7,.72)}function w(e,t,r,i){let a=new I(r.park),o=(r,o)=>{let l=a.clone().offsetHSL(0,0,i.range(-.06,.06)).getStyle(),u=new n(new ue(r,7,6),q(new c({color:l,flatShading:!0}),{color:l,season:!0}));u.scale.y=.7,u.position.set(e,nt+o,t),u.userData.lot=null,s.add(u)},l=new n(new H(.05,.18,.05),q(new c({color:`#6b4a2a`,flatShading:!0}),{color:`#6b4a2a`}));l.position.set(e,.39,t),s.add(l),o(.22,.28),o(.16,.46)}function T(e){for(let t of p)t.mesh.material.opacity=.35+.65*(.5+.5*Math.sin(e*3+t.phase))}return _(e,t),{group:o,key:u,fill:d,update:T,generate:_,get state(){return m},get extent(){return m.extent},get waterColor(){return m.profile.water},profiles:tt}}var pt=Math.PI*2,mt=.7,ht=90,gt=[{name:`night`,sun:`#4a6f9e`,intensity:.35,hemiSky:`#26344f`,hemiGround:`#0c1018`,horizon:`#1e2942`,sky:`#36486e`,exposure:.95,outline:`#101a30`,window:1,toonGain:2.6,turbidity:3,rayleigh:1,mie:.004,mieG:.75,gradeTint:`#cfd8ec`,gradeSat:.84,gradeLift:`#05070e`,gradeContrast:1},{name:`dawn`,sun:`#ff9e54`,intensity:2.4,hemiSky:`#8a7686`,hemiGround:`#2a1f1a`,horizon:`#b8512c`,sky:`#ffb070`,exposure:1.05,outline:`#241826`,window:.3,toonGain:2,turbidity:6,rayleigh:3,mie:.025,mieG:.86,gradeTint:`#ffe6cf`,gradeSat:1.05,gradeLift:`#0a0603`,gradeContrast:1.04},{name:`noon`,sun:`#fff4e0`,intensity:4.6,hemiSky:`#9cb8cc`,hemiGround:`#33302a`,horizon:`#5e7689`,sky:`#aacadd`,exposure:1.18,outline:`#0b0a08`,window:0,toonGain:1.7,turbidity:1.6,rayleigh:2.9,mie:.005,mieG:.78,gradeTint:`#d6e6f4`,gradeSat:1.34,gradeLift:`#000000`,gradeContrast:1.26},{name:`dusk`,sun:`#ff6b35`,intensity:2,hemiSky:`#7a566a`,hemiGround:`#281a18`,horizon:`#b0432a`,sky:`#ff8a5a`,exposure:1.05,outline:`#1f1420`,window:.4,toonGain:2,turbidity:7,rayleigh:3.2,mie:.028,mieG:.87,gradeTint:`#ffdcc0`,gradeSat:1.06,gradeLift:`#0c0604`,gradeContrast:1.05}],Y=e=>e-Math.floor(e),_t=(e,t,n)=>e+(t-e)*n,vt=(e,t,n)=>e+(t-e)*(1-Math.exp(-6*n));function yt({t:e=.5}={}){let t=e,n=e,r=!1,i=!1,a=gt.map(e=>({name:e.name,sun:new I(e.sun),hemiSky:new I(e.hemiSky),hemiGround:new I(e.hemiGround),horizon:new I(e.horizon),sky:new I(e.sky),outline:new I(e.outline),intensity:e.intensity,exposure:e.exposure,window:e.window,toonGain:e.toonGain,turbidity:e.turbidity,rayleigh:e.rayleigh,mie:e.mie,mieG:e.mieG,gradeTint:new I(e.gradeTint),gradeLift:new I(e.gradeLift),gradeSat:e.gradeSat,gradeContrast:e.gradeContrast})),o=new V(0,1,0),s=new I(`#fff4e0`),c=new I(`#6f97b3`),l=new I(`#2a2620`),u=new I(`#3a4a57`),d=new I(`#7da3bd`),f=new I(`#0b0a08`),p=new I(`#000000`),m=3,h=1,g=0,_=1.7,v={turbidity:2.2,rayleigh:1.3,mie:.005,mieG:.78},y={tint:new I(`#fafdff`),lift:new I(`#000000`),sat:1.08,contrast:1},b=new V;function x(e){let t=Y(e)*4,n=Math.floor(t)%4,r=(n+1)%4,i=t-Math.floor(t),x=a[n],S=a[r];s.lerpColors(x.sun,S.sun,i),c.lerpColors(x.hemiSky,S.hemiSky,i),l.lerpColors(x.hemiGround,S.hemiGround,i),u.lerpColors(x.horizon,S.horizon,i),d.lerpColors(x.sky,S.sky,i),f.lerpColors(x.outline,S.outline,i),m=_t(x.intensity,S.intensity,i),h=_t(x.exposure,S.exposure,i),g=_t(x.window,S.window,i),_=_t(x.toonGain,S.toonGain,i),v.turbidity=_t(x.turbidity,S.turbidity,i),v.rayleigh=_t(x.rayleigh,S.rayleigh,i),v.mie=_t(x.mie,S.mie,i),v.mieG=_t(x.mieG,S.mieG,i),y.tint.lerpColors(x.gradeTint,S.gradeTint,i),y.lift.lerpColors(x.gradeLift,S.gradeLift,i),y.sat=_t(x.gradeSat,S.gradeSat,i),y.contrast=_t(x.gradeContrast,S.gradeContrast,i),p.setRGB(.045*g,.075*g,.14*g);let C=Y(e)*pt-Math.PI/2,w=Math.cos(C),T=Math.sin(C);b.set(w,T*Math.cos(mt),T*Math.sin(mt)),b.y>=0?o.copy(b):o.copy(b).negate()}return x(t),{sunDir:o,sunColor:s,hemiSky:c,hemiGround:l,horizon:u,sky:d,outline:f,toonFloor:p,skyParams:v,grade:y,sunArc:b,get sunIntensity(){return m},get exposure(){return h},get windowGlow(){return g},get toonGain(){return _},get t(){return Y(t)},get auto(){return r},get clock(){let e=Math.round(Y(t)*24*60)%1440;return`${String(Math.floor(e/60)).padStart(2,`0`)}:${String(e%60).padStart(2,`0`)}`},cyclePreset(){n=(Math.floor(t*4+1e-4)+1)/4},nudge(e){n+=e/24},goTo(e){n=e},toggleAuto(){r=!r},setReducedMotion(e){i=e},update(e){r&&!i&&(n+=e/ht),t=vt(t,n,e),x(t)}}}function bt(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.35,`rgba(255,255,255,0.55)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new U(e);return r.colorSpace=ce,r}function xt(e,t){let n=[];for(let r=0;r<16;r++){let i=r/16*Math.PI*2;n.push(new V(Math.cos(i)*e,t,Math.sin(i)*e))}return new P(n,!0,`catmullrom`,.5)}function X(e){let t=(t,n)=>Math.exp(-((e-t)*(e-t))/(2*n*n)),n=Math.max(t(.33,.05),t(.75,.06)),r=f.smoothstep(e,.24,.3)*(1-f.smoothstep(e,.8,.88));return f.clamp(.15+.55*r+.45*n,.12,1)}function St(){let{PITCH:e,N:t,PLINTH_TOP:n}=lt,r=t+1,i=n+.04,a=n=>(n-t/2)*e,o=t/2,s=[],c=(e,t)=>t*r+e;for(let e=0;e<r;e++)for(let t=0;t<r;t++)s.push({x:a(t),z:a(e),i:t,j:e,edges:[]});let l=[],u=(t,n)=>{let r=(s[t].i===o||s[t].j===o)&&(s[n].i===o||s[n].j===o),i=l.length;l.push({a:t,b:n,len:e,main:r}),s[t].edges.push(i),s[n].edges.push(i)};for(let e=0;e<r;e++)for(let t=0;t<r;t++)t<r-1&&u(c(t,e),c(t+1,e)),e<r-1&&u(c(t,e),c(t,e+1));return{nodes:s,edges:l,y:i,mid:o}}function Ct({plinthTop:e=.3,extent:t=4,profile:n=null}={}){let r=new a,i=St(),{nodes:o,edges:s}=i,l=i.y,u=.34,d=0;{let e=lt.PITCH-u*2;d=Math.max(1,Math.floor((e+.26)/.56))}let p=new S({color:`#e8c84a`,fog:!0}),m=new R(new H(.05,.012,.3),p,s.length*d);m.frustumCulled=!1,m.raycast=()=>{},m.receiveShadow=!1,m.castShadow=!1,r.add(m);{let e=new C,t=0;for(let n of s){let r=o[n.a],i=o[n.b],a=i.x-r.x,s=i.z-r.z,c=Math.hypot(a,s),f=a/c,p=s/c,h=Math.atan2(f,p),g=c-u*2;for(let n=0;n<d;n++){let i=u+(d===1?g/2:g*n/(d-1));e.position.set(r.x+f*i,l,r.z+p*i),e.rotation.set(0,h,0),e.updateMatrix(),m.setMatrixAt(t++,e.matrix)}}m.instanceMatrix.needsUpdate=!0}let h=new R(new H(.34,.26,.74),q(new c({flatShading:!0,roughness:.5,metalness:.3})),12);h.castShadow=!0,h.receiveShadow=!1,h.frustumCulled=!1,h.raycast=()=>{};let g=new ae,_=new Float32Array(72),v=new Float32Array(72),y=new I(`#fff0c0`),b=new I(`#ff3528`);for(let e=0;e<12;e++)y.toArray(v,e*3),b.toArray(v,(12+e)*3),_[e*3+1]=-50,_[(12+e)*3+1]=-50;g.setAttribute(`position`,new A(_,3)),g.setAttribute(`color`,new A(v,3));let x=new E({size:.72,sizeAttenuation:!0,map:bt(),vertexColors:!0,transparent:!0,opacity:0,blending:2,depthWrite:!1}),T=new w(g,x);T.frustumCulled=!1,T.raycast=()=>{},r.add(h,T);let D=[`#f4c430`,`#c0392b`,`#d8dde2`,`#9aa7b4`,`#6b7785`,`#5a7d9a`],O=$e(2403557),k=s.map((e,t)=>t).filter(e=>s[e].main),ee=[];for(let e=0;e<12;e++){let t=e<4&&k.length?k[O()*k.length|0]:O()*s.length|0,n=e===1;ee.push({edge:t,fwd:O()<.5,s:O()*s[t].len,speed:n?.5:.78+e%3*.1,lenZ:n?1.45:1,color:D[n?1:e===0?0:2+e%4],rng:$e(12648430+e*2654435761),isBus:n,pos:new V,dirX:0,dirZ:1,active:!1})}let j=new I;ee.forEach((e,t)=>h.setColorAt(t,j.set(e.color)));function te(e,t,n){let r=o[e],i=r.edges.filter(e=>e!==t);if(i.length===0)return t;let a=s[t],c=a.a===e?a.b:a.a,l=r.x-o[c].x,u=r.z-o[c].z,d=Math.hypot(l,u)||1,f=i[0],p=-2;for(let t of i){let n=s[t],i=n.a===e?n.b:n.a,a=o[i].x-r.x,c=o[i].z-r.z,m=Math.hypot(a,c)||1,h=l/d*(a/m)+u/d*(c/m);h>p&&(p=h,f=t)}return n()<.65?f:i[n()*i.length|0]}let N=te,P=new C,F=(e,t)=>{P.position.set(0,-50,0),P.scale.setScalar(0),P.updateMatrix(),e.setMatrixAt(t,P.matrix)},ne=.085,re=lt.PLINTH_TOP+.02+.13,L=new R(new M(.04,.1,3,6),q(new c({flatShading:!0,roughness:.8})),14);L.castShadow=!0,L.receiveShadow=!1,L.frustumCulled=!1,L.raycast=()=>{};let ie=xt(t-.72,e),z=[];for(let e=0;e<14;e++)z.push({phase:e/14,speed:.12+e%4*.02,dir:e%2?1:-1,pos:new V,active:!1});let oe=new V,B=new V,se=new I;z.forEach((e,t)=>L.setColorAt(t,se.set([`#caa`,`#9ab`,`#bba`,`#ab9`][t%4]))),r.add(L);let ce={manhattan:`#e8c84a`,paris:`#dcd2bc`,neoTokyo:`#5ae8e0`};function le(e){e&&p.color.set(ce[e.key]||`#e8c84a`)}le(n);function ue(t,n,r){let i=r?r.t:.5,a=r?r.windowGlow:0,c=Math.max(2,Math.round(X(i)*12)),l=a>.05;for(let e=0;e<12;e++){if(e>=c){F(h,e),ee[e].active=!1,_[e*3+1]=-50,_[(12+e)*3+1]=-50;continue}let n=ee[e];n.s+=t*n.speed;let r=0;for(;n.s>=s[n.edge].len&&r++<4;){n.s-=s[n.edge].len;let e=n.fwd?s[n.edge].b:s[n.edge].a,t=N(e,n.edge,n.rng);n.edge=t,n.fwd=s[t].a===e}let i=s[n.edge],a=n.fwd?o[i.a]:o[i.b],u=n.fwd?o[i.b]:o[i.a],d=u.x-a.x,f=u.z-a.z,p=Math.hypot(d,f)||1,m=d/p,g=f/p,v=-g,y=m,b=a.x+m*n.s+v*ne,x=a.z+g*n.s+y*ne,S=Math.atan2(m,g);P.position.set(b,re,x),P.rotation.set(0,S,0),P.scale.set(1,1,n.lenZ),P.updateMatrix(),h.setMatrixAt(e,P.matrix),n.pos.set(b,re,x),n.dirX=m,n.dirZ=g,n.active=!0;let C=.74*n.lenZ*.5,w=re+.06,T=e*3,E=(12+e)*3;l?(_[T]=b+m*(C+.04),_[T+1]=w,_[T+2]=x+g*(C+.04),_[E]=b-m*(C+.02),_[E+1]=w,_[E+2]=x-g*(C+.02)):(_[T+1]=-50,_[E+1]=-50)}h.instanceMatrix.needsUpdate=!0,g.attributes.position.needsUpdate=!0,x.opacity=f.clamp(a*1.8,0,1);let u=Math.max(2,Math.round(X(i)*14));for(let t=0;t<14;t++){if(t>=u){F(L,t),z[t].active=!1;continue}let r=z[t],i=(r.phase+r.dir*r.speed*n*.02+1e3)%1;ie.getPointAt(i,oe),ie.getTangentAt(i,B);let a=Math.sin(n*6+r.phase*30)*.015;P.position.set(oe.x,e+.09+a,oe.z),P.rotation.set(0,Math.atan2(B.x*r.dir,B.z*r.dir),Math.sin(n*6+r.phase*30)*.06),P.scale.setScalar(1),P.updateMatrix(),L.setMatrixAt(t,P.matrix),r.pos.set(oe.x,e+.09,oe.z),r.active=!0}L.instanceMatrix.needsUpdate=!0}let de=[...ee.map((e,t)=>({kind:`car`,label:e.isBus?`bus`:`car ${t+1}`,getWorldPos:t=>t.copy(e.pos),active:()=>e.active,info:()=>`${e.isBus?`bus`:`car`} · ${s[e.edge].main?`main avenue`:`side street`} → heading ${wt(e.dirX,e.dirZ)}`})),...z.map((e,t)=>({kind:`person`,label:`person ${t+1}`,getWorldPos:t=>t.copy(e.pos),active:()=>e.active,info:()=>`person · strolling the waterfront promenade`}))];function fe(){return de}return{group:r,update:ue,setProfile:le,getFollowables:fe,graph:i,setRouter(e){N=e||te}}}function wt(e,t){return[`N`,`NE`,`E`,`SE`,`S`,`SW`,`W`,`NW`][(Math.round(Math.atan2(e,t)/(Math.PI/4))%8+8)%8]}function Tt({frames:e,fps:t=8,cols:n,rows:r=1}={}){let i=n||e||4,a=r||1,o=e||i*a,s=typeof window<`u`&&window.matchMedia?window.matchMedia(`(prefers-reduced-motion: reduce)`):null;function c(e,t){let n=t%i,r=Math.floor(t/i);e.offset.x=n/i,e.offset.y=1-(r+1)/a}function l(e){let t=e.clone();return t.needsUpdate=!0,t.repeat.set(1/i,1/a),c(t,0),t}function u(e,n,r=0){if(s&&s.matches)return c(e,0),0;let i=(Math.floor(n*t+r)%o+o)%o;return c(e,i),i}function d(e,t){let n=(Math.round(t)%o+o)%o;return c(e,n),n}return{frames:o,fps:t,cols:i,rows:a,makeInstanceTexture:l,step:u,setFrame:d}}function Et(e){if(typeof document>`u`||!e||!e.image)return e;let t=e.image,n=t.width||t.naturalWidth,r=t.height||t.naturalHeight,i=document.createElement(`canvas`);i.width=n,i.height=r;let a=i.getContext(`2d`,{willReadFrequently:!0});a.drawImage(t,0,0,n,r);let o=a.getImageData(0,0,n,r),s=o.data;for(let e=0;e<s.length;e+=4){let t=s[e]*.299+s[e+1]*.587+s[e+2]*.114|0;s[e]=s[e+1]=s[e+2]=t}a.putImageData(o,0,0);let c=new U(i);return c.colorSpace=e.colorSpace||`srgb`,c}function Dt({url:e,fallback:t,luminance:n=!1,onReady:r}={}){let i=n?Et(t):t;return e&&typeof window<`u`&&new ve().load(e,e=>{e.colorSpace=ce,r&&r(n?Et(e):e)},void 0,()=>{}),i}var Ot=``+new URL(`gull_diffusion_sheet-BMlUTLhu.png`,import.meta.url).href;function kt(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.4,`rgba(255,255,255,0.5)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new U(e);return r.colorSpace=ce,r}function At(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64*.62,0,64/2,64*.62,64*.5);n.addColorStop(0,`rgba(240,250,255,0.95)`),n.addColorStop(1,`rgba(240,250,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new U(e);return r.colorSpace=ce,r}function jt(){let e=document.createElement(`canvas`);e.width=256,e.height=64;let t=e.getContext(`2d`);t.strokeStyle=`#ffffff`,t.lineWidth=6,t.lineCap=`round`,t.lineJoin=`round`;let n=[14,24,36,24];for(let e=0;e<4;e++){let r=e*64,i=n[e];t.beginPath(),t.moveTo(r+8,40),t.quadraticCurveTo(r+24,i,r+32,36),t.quadraticCurveTo(r+40,i,r+56,40),t.stroke()}let r=new U(e);return r.colorSpace=ce,r}function Mt(e,t,n=18){let r=[];for(let i=0;i<n;i++){let a=i/n*Math.PI*2;r.push(new V(Math.cos(a)*e,t,Math.sin(a)*e))}return new P(r,!0,`catmullrom`,.5)}function Nt(e,t,n){let r=e-t,i=[],a=(e,t)=>i.push(new V(e,n,t)),o=(e,n,r,i,o=4)=>{for(let s=1;s<=o;s++){let c=r+(i-r)*(s/o);a(e+Math.cos(c)*t,n+Math.sin(c)*t)}};for(let t=0;t<4;t++)a(e,-r+2*r*t/4);o(r,r,0,Math.PI/2);for(let t=0;t<4;t++)a(r-2*r*t/4,e);o(-r,r,Math.PI/2,Math.PI);for(let t=0;t<4;t++)a(-e,r-2*r*t/4);o(-r,-r,Math.PI,1.5*Math.PI);for(let t=0;t<4;t++)a(-r+2*r*t/4,-e);return o(r,-r,1.5*Math.PI,2*Math.PI),new P(i,!0,`catmullrom`,.5)}function Pt({extent:e=8,waterSize:t=28,plinthTop:r=.3}={}){let i=new a;i.raycast=()=>{};let o=.06,s=(e,n,r)=>r.set(e/t+.5,-n/t+.5,0),l=[Nt(9.5,3,o),Mt(12.7,o),new P([new V(8.4,o,0),new V(11,o,-3.6),new V(13,o,0),new V(11,o,3.6)],!0,`catmullrom`,.5)],u=l.map(e=>e.getLength());function d({scale:e=1,hull:t=`#6b7785`,cabin:r=`#e7ecf2`}){let i=new a,o=new n(new H(.46*e,.2*e,1.1*e),q(new c({color:t,roughness:.6,metalness:.2,flatShading:!0}),{color:t}));o.position.y=.02;let s=new n(new H(.3*e,.22*e,.42*e),q(new c({color:r,roughness:.7,flatShading:!0}),{color:r}));return s.position.set(0,.18*e,.08*e),i.add(o,s),i.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!1),e.raycast=()=>{}}),i.userData.halfLen=.55*e,i}let p=[{laneIndex:0,dir:1,speed:.5,wake:.024,scale:1,hull:`#5a6675`,cabin:`#e7ecf2`},{laneIndex:1,dir:-1,speed:.42,wake:.022,scale:1,hull:`#7a5b46`,cabin:`#d9c3a6`},{laneIndex:0,dir:1,speed:.56,wake:.024,scale:.9,hull:`#456079`,cabin:`#cfe0ee`},{laneIndex:2,dir:1,speed:.34,wake:.03,scale:1.35,hull:`#39505f`,cabin:`#e2b85a`}];p.forEach((e,t)=>{e.mesh=d(e),e.u=t*.27%1,e.phase=t*1.7,e.isFerry=e.laneIndex===2,i.add(e.mesh)});let m=p.length,h=m*2,g=new ae,_=new Float32Array(h*3).fill(-50),v=new Float32Array(h*3),y=new I(`#fff0c0`),b=new I(`#ff3528`);for(let e=0;e<m;e++)y.toArray(v,e*3),b.toArray(v,(m+e)*3);g.setAttribute(`position`,new A(_,3)),g.setAttribute(`color`,new A(v,3));let x=new w(g,new E({size:.6,sizeAttenuation:!0,map:kt(),vertexColors:!0,transparent:!0,opacity:0,blending:2,depthWrite:!1}));x.frustumCulled=!1,x.raycast=()=>{},i.add(x);function S(e,t){let r=new n(new ue(e,9,7),q(new c({color:t,roughness:.5,flatShading:!0}),{color:t}));return r.scale.set(.55,.5,1),r.castShadow=!1,r.receiveShadow=!1,r.raycast=()=>{},r.position.y=-5,r}let C=[{x:-9.5,z:6,size:.18,color:`#5b6f86`,period:11,arcH:.55,span:1.1,whale:!1},{x:7.5,z:-9.5,size:.16,color:`#4a6076`,period:14,arcH:.5,span:1,whale:!1},{x:-7,z:-8.5,size:.2,color:`#607089`,period:9,arcH:.6,span:1.2,whale:!1},{x:10.5,z:7,size:.62,color:`#3a4350`,period:38,arcH:.9,span:2.6,whale:!0}];C.forEach((e,t)=>{e.mesh=S(e.size,e.color),e.heading=Math.atan2(-e.x,-e.z),e.t=t/C.length*e.period,e.splashed=!1,i.add(e.mesh),e.whale&&(e.spout=new j(new z({map:At(),transparent:!0,opacity:0,depthWrite:!1,fog:!0})),e.spout.scale.set(.6,1.1,1),e.spout.position.set(e.x,-5,e.z),i.add(e.spout))});let T=Tt({frames:4,fps:7}),D=[`#ffffff`,`#cfd4da`,`#c8a06a`],O=[],k=Dt({url:Ot,fallback:jt(),luminance:!0,onReady:e=>{k=e;for(let t of O){let n=t.sp.material.map;t.sp.material.map=T.makeInstanceTexture(e),t.sp.material.needsUpdate=!0,n&&n.dispose()}typeof window<`u`&&(window.__gullSheet=`diffusion`)}});for(let e=0;e<4;e++){let t=new j(new z({map:T.makeInstanceTexture(k),color:new I(D[e%D.length]),transparent:!0,opacity:0,depthWrite:!1,fog:!0}));t.scale.setScalar(.5),O.push({sp:t,r:8.6+e*.5,y:1.1+e%2*.5,speed:(.18+e*.03)*(e%2?-1:1),phase:e*1.9}),i.add(t)}typeof window<`u`&&(window.__gullSheet=window.__gullSheet||`procedural`,window.__gullAnim={frames:T.frames,variants:D.length,fps:T.fps});let ee=C.length,M=Array.from({length:m+ee},()=>new V),te=e=>e.laneIndex,N=new V,F=new V,ne=new V;function re(e,t,n){let r=n?n.windowGlow:0,i=1-r;for(let n=0;n<m;n++){let i=p[n],a=l[i.laneIndex],c=u[i.laneIndex],d=i.isFerry?.45+.55*Math.min(1,Math.abs((i.u+.5)%1-.5)*3):1,f=i.u;i.u=(i.u+i.dir*e*i.speed*d/c+1)%1,(i.dir>0?i.u<f:i.u>f)&&(i.laneIndex=te(i)),a.getPointAt(i.u,N),a.getTangentAt(i.u,F);let h=F.x*i.dir,g=F.z*i.dir,v=Math.atan2(h,g),y=Math.sin(t*1.1+i.phase)*.025;i.mesh.position.set(N.x,o+y,N.z),i.mesh.rotation.set(Math.sin(t*.9+i.phase)*.04,v,0);let b=i.mesh.userData.halfLen;s(N.x-h*b,N.z-g*b,ne),M[n].set(ne.x,ne.y,i.wake);let x=n*3,S=(m+n)*3;if(r>.05){let e=.18;_[x]=N.x+h*(b+.05),_[x+1]=e,_[x+2]=N.z+g*(b+.05),_[S]=N.x-h*(b+.02),_[S+1]=e,_[S+2]=N.z-g*(b+.02)}else _[x+1]=-50,_[S+1]=-50}L(),x.material.opacity=f.clamp(r*1.8,0,1);for(let t=0;t<ee;t++){let n=C[t];n.t+=e;let r=m+t,i=n.whale?3.2:1.3;if(n.t>=n.period){let e=(n.t-n.period)/i;if(e>=1){n.t=0,n.splashed=!1,n.mesh.position.y=-5,n.spout&&(n.spout.material.opacity=0),M[r].set(0,0,0);continue}let t=Math.sin(Math.PI*e),a=(e-.5)*n.span,c=n.x+Math.sin(n.heading)*a,l=n.z+Math.cos(n.heading)*a;n.mesh.position.set(c,o-.1+t*n.arcH,l),n.mesh.rotation.set(Math.cos(Math.PI*e)*.9,n.heading,0);let u=e<.16||e>.84;if(s(c,l,ne),M[r].set(ne.x,ne.y,u?n.whale?.07:.05:0),n.spout){let t=f.clamp((e-.15)*3,0,1)*(1-e);n.spout.position.set(c,.56+t*.6,l),n.spout.material.opacity=t*.9}}else n.mesh.position.y=-5,M[r].set(0,0,0),n.spout&&(n.spout.material.opacity=0)}for(let e=0;e<4;e++){let n=O[e],r=n.phase+t*n.speed*.25;n.sp.position.set(Math.cos(r)*n.r,n.y+Math.sin(t*1.4+n.phase)*.12,Math.sin(r)*n.r),n.sp.material.opacity=f.clamp(i*.9-.05,0,.85);let a=T.step(n.sp.material.map,t,n.phase);e===0&&typeof window<`u`&&(window.__gullFrame=a)}if(typeof window<`u`){let e=0;for(let t of C)t.mesh.position.y>o&&e++;window.__waterLife={boats:m,breaching:e,gulls:+O[0].sp.material.opacity.toFixed(2),lights:+x.material.opacity.toFixed(2)}}}function L(){g.attributes.position.needsUpdate=!0}function R(){return M.length}let ie=[...p.map((e,t)=>({kind:`boat`,label:e.isFerry?`ferry`:`boat ${t+1}`,getWorldPos:t=>t.copy(e.mesh.position),info:()=>e.isFerry?`boat · harbor ferry → docks`:`boat · open-water lane ${e.laneIndex}`})),...O.map((e,t)=>({kind:`gull`,label:`gull ${t+1}`,getWorldPos:t=>t.copy(e.sp.position),active:()=>e.sp.material.opacity>.05,info:()=>`gull · circling the coast`})),...C.map((e,t)=>({kind:`fish`,label:e.whale?`whale`:`fish ${t+1}`,getWorldPos:t=>t.copy(e.mesh.position),active:()=>e.mesh.position.y>o-.3,info:()=>e.mesh.position.y>o?e.whale?`whale · breaching!`:`fish · breaching!`:`fish · below the surface`}))];function oe(){return ie}return{group:i,update:re,getFollowables:oe,wakeDrops:M,get wakeCount(){return R()},lanes:l,setRouter(e){te=e||(e=>e.laneIndex)}}}var Ft=[`empireState`,`chrysler`,`liberty`,`eiffel`,`arcDeTriomphe`,`sacreCoeur`,`tokyoTower`,`pagoda`,`neonBillboard`],It={empireState:1.25,chrysler:1.1,liberty:.55,eiffel:3.2,arcDeTriomphe:1.5,sacreCoeur:1.75,tokyoTower:1.35,pagoda:.5,neonBillboard:.9};function Lt(e){let t=()=>new c({flatShading:!0,roughness:.7,metalness:.1}),r=(n,r={})=>r.windows?Qe(t(),{color:n,id:e.id(),windowGlow:e.windowGlow,winColors:e.winColors,litFrac:e.litFrac}):q(t(),{color:n,glow:r.glow??null,glowDay:r.glowDay??0,glowNight:r.glowNight??1,windowGlow:r.glow?e.windowGlow:null});return{box:(e,t,i,a,o={})=>new n(new H(e,t,i),r(a,o)),cyl:(e,t,i,a,o={})=>new n(new D(e,t,i,o.seg||12),r(a,o)),cone:(e,t,i,a={})=>new n(new ne(e,t,a.seg||8),r(i,a)),sphere:(e,t,i={})=>new n(new ue(e,i.seg||12,i.seg2||8),r(t,i)),lathe:(e,t,i={})=>new n(new p(e.map(e=>new F(e[0],e[1])),i.seg||4),r(t,i))}}var Z=(e,t,n,r)=>(e.position.set(t,n,r),e),Rt=[`#7FB0E0`,`#E07FB0`,`#7FE0A0`,`#E0C97F`,`#9FE07F`,`#7FE0E0`,`#FF8C42`,`#E0E07F`,`#C97FE0`,`#E07F7F`,`#7F9FE0`,`#E0483A`],zt={empireState(e,t){let n=`#E8E0CF`;e.add(Z(t.box(.42,.18,.42,n,{windows:!0}),0,.09,0)),e.add(Z(t.box(.34,.16,.34,n,{windows:!0}),0,.26,0)),e.add(Z(t.box(.26,.14,.26,n,{windows:!0}),0,.41,0)),e.add(Z(t.box(.19,.34,.19,n,{windows:!0}),0,.65,0)),e.add(Z(t.box(.13,.06,.13,n,{windows:!0}),0,.85,0));let r=Rt[new Date().getMonth()];e.add(Z(t.cyl(.03,.045,.12,n,{seg:10,glow:r,glowNight:1.85}),0,.94,0)),e.add(Z(t.cone(.012,.07,n,{seg:8}),0,1.04,0))},chrysler(e,t){let n=`#C9CED4`;e.add(Z(t.box(.22,.55,.22,`#9AA7B4`,{windows:!0}),0,.275,0));let r=.55;for(let i=0;i<5;i++){let a=.14-i*.024,o=.07;e.add(Z(t.cyl(a*.7,a,o,n,{seg:8,glow:`#dfeaff`,glowNight:.5}),0,r+o/2,0)),r+=o}e.add(Z(t.cone(.018,.16,n,{seg:8}),0,r+.08,0))},liberty(e,t){let n=`#B9B4A6`,r=`#4FA890`;e.add(Z(t.box(.42,.16,.42,n),0,.08,0)),e.add(Z(t.box(.3,.2,.3,n),0,.26,0)),e.add(Z(t.cyl(.1,.15,.42,r,{seg:10}),0,.57,0)),e.add(Z(t.box(.11,.1,.11,r),0,.83,0));for(let n=0;n<7;n++){let i=(n/6-.5)*Math.PI*1.1;e.add(Z(t.cone(.012,.1,r,{seg:5}),Math.sin(i)*.1,.92,Math.cos(i)*.06-.02))}let i=Z(t.cyl(.025,.03,.34,r,{seg:8}),.14,.98,0);i.rotation.z=.35,e.add(i),e.add(Z(t.box(.06,.06,.06,r,{glow:`#ffd060`,glowDay:.6,glowNight:1.2}),.2,1.16,0)),e.add(Z(t.cone(.04,.09,`#ffcf66`,{seg:6,glow:`#ffd060`,glowDay:.7,glowNight:1.3}),.2,1.24,0))},eiffel(e,t){let n=`#6E5C4C`,r=[[.2,0],[.13,.16],[.085,.33],[.055,.5],[.035,.66],[.02,.85],[0,.92]];e.add(t.lathe(r,n,{seg:4}));let i=t.lathe(r,n,{seg:4});i.rotation.y=Math.PI/4,e.add(i),e.add(Z(t.box(.26,.025,.26,n),0,.33,0)),e.add(Z(t.box(.14,.02,.14,n),0,.66,0)),e.add(Z(t.cone(.01,.1,n,{seg:6}),0,.97,0))},arcDeTriomphe(e,t){let r=`#D9D0C1`,i=.58,a=.5,o=.34,s=new k;s.moveTo(-.58/2,0),s.lineTo(i/2,0),s.lineTo(i/2,a),s.lineTo(-.58/2,a),s.lineTo(-.58/2,0);let l=new d,u=.15,f=.22;l.moveTo(-.15,0),l.lineTo(-.15,f),l.absarc(0,f,u,Math.PI,0,!0),l.lineTo(u,0),l.lineTo(-.15,0),s.holes.push(l);let p=new y(s,{depth:o,bevelEnabled:!1});p.translate(0,0,-.34/2),p.computeVertexNormals(),e.add(new n(p,q(new c({color:r,flatShading:!0}),{color:r}))),e.add(Z(t.box(i*1.06,.08,o*1.06,r),0,.54,0))},sacreCoeur(e,t){let n=`#F1EEE6`;e.add(Z(t.box(.5,.26,.4,n),0,.13,0));let r=(r,i,a,o)=>{e.add(Z(t.cyl(a*.9,a,i,n,{seg:12}),r,o,0));let s=Z(t.sphere(a,n,{seg:12}),r,o+i/2,0);s.scale.y=1.5,e.add(s)};r(0,.22,.15,.4),r(-.2,.1,.07,.33),r(.2,.1,.07,.33)},tokyoTower(e,t){let n=`#F25822`,r=`#EDEDED`,i=0;for(let a=0;a<9;a++){let o=a/9,s=(a+1)/9,c=.19*(1-o)+.03*o,l=.19*(1-s)+.03*s,u=.085,d=a%2?r:n;e.add(Z(t.cyl(l,c,u,d,{seg:4,glow:n,glowDay:0,glowNight:.7}),0,i+u/2,0)),i+=u}e.add(Z(t.box(.22,.02,.22,n,{glow:n,glowNight:.7}),0,.28,0)),e.add(Z(t.box(.12,.02,.12,r),0,.5,0)),e.add(Z(t.cone(.012,.16,r,{seg:6,glow:`#ff6a2a`,glowNight:.9}),0,i+.08,0))},pagoda(e,t){let n=0;for(let r=0;r<5;r++){let i=.42-r*.06,a=.11;e.add(Z(t.box(i,a,i,`#B23A2C`,{windows:r<4}),0,n+a/2,0)),e.add(Z(t.box(i*1.34,.03,i*1.34,`#7A3B2A`),0,n+a+.015,0)),n+=.16999999999999998}e.add(Z(t.cyl(.012,.012,.1,`#E0C040`,{seg:6}),0,n+.05,0)),e.add(Z(t.sphere(.03,`#E0C040`,{seg:8,glow:`#ffe680`,glowNight:.8}),0,n+.12,0))},neonBillboard(e,t){let n=`#20242C`;e.add(Z(t.box(.3,1,.3,n,{windows:!0}),0,.5,0));let r=[`#5AE8E0`,`#E85AA0`,`#E8E06A`],i=(n,r,i,a,o,s,c)=>{let l=Z(t.box(n,r,.02,i,{glow:i,glowDay:.6,glowNight:1.1}),a,o,s);l.rotation.y=c,e.add(l)};i(.22,.34,r[0],0,.75,.16,0),i(.16,.5,r[1],.16,.5,0,Math.PI/2),i(.2,.22,r[2],0,.34,-.16,0),e.add(Z(t.cone(.01,.14,n,{seg:6,glow:`#E85AA0`,glowDay:.4,glowNight:1}),0,1.08,0))}};function Bt(e,t){let n=new a;return zt[e](n,Lt(t)),n}var Vt=``+new URL(`building-skyscraper-d-CapD2Zqe.glb`,import.meta.url).href,Ht=``+new URL(`building-n-hdv8kKtN.glb`,import.meta.url).href,Ut=``+new URL(`building-g-CsTB1qH9.glb`,import.meta.url).href,Wt=``+new URL(`colormap-CK8fW2HB.png`,import.meta.url).href,Gt={skyscraper:{url:Vt,color:`#9cc1dd`,fill:.92},midrise:{url:Ht,color:`#c9a07a`,fill:.96},setback:{url:Ut,color:`#d9c7a0`,fill:.9}};function Kt({windowGlow:e}){let t=new l;t.setURLModifier(e=>e.includes(`colormap.png`)?Wt:e);let n=new se(t),r={},i=!1,a=Promise.all(Object.entries(Gt).map(async([e,t])=>{r[e]=(await n.loadAsync(t.url)).scene})).then(()=>{i=!0,window.__landmarksReady=!0}).catch(e=>console.error(`landmark models failed:`,e)),o=9e3;function s(t,n,i={}){let a,s;if(Ft.includes(t))a=Bt(t,{windowGlow:e,winColors:i.winColors,litFrac:i.litFrac,id:()=>++o}),s=1;else{let e=r[t],n=Gt[t];if(!e||!n)return null;a=e.clone(!0),s=n.fill}a.updateMatrixWorld(!0);let c=new le().setFromObject(a).getSize(new V);a.scale.setScalar(n.h*s/c.y),a.updateMatrixWorld(!0);let l=new le().setFromObject(a),u=l.getCenter(new V);return a.position.x+=n.x-u.x,a.position.z+=n.z-u.z,a.position.y+=n.plinthTop-l.min.y,Ft.includes(t)?a.traverse(e=>{e.isMesh&&(e.castShadow=!1,e.raycast=()=>{})}):a.traverse(n=>{if(!n.isMesh)return;n.castShadow=!1,n.raycast=()=>{};let r=n=>Qe(n.clone(),{color:Gt[t].color,id:++o,windowGlow:e,winColors:i.winColors,litFrac:i.litFrac});n.material=Array.isArray(n.material)?n.material.map(r):r(n.material)}),a}return{make:s,whenReady:a,heightFactor:e=>It[e]??1,get ready(){return i}}}var qt=[`clear`,`rain`,`snow`,`fog`];function Jt({extent:e=7}={}){let t=new a;t.raycast=()=>{};let n=e+2,r=.25,i=(e,t)=>e+Math.random()*(t-e),o=new R(new u(.015,.5),new S({color:`#a9bdd6`,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),600);o.frustumCulled=!1,o.raycast=()=>{};let s=new Float32Array(600*3),c=new Float32Array(600);for(let e=0;e<600;e++)s[e*3]=i(-n,n),s[e*3+1]=i(r,11),s[e*3+2]=i(-n,n),c[e]=i(9,14);let l=new R(new u(.07,.07),new S({color:`#f3f7ff`,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),700);l.frustumCulled=!1,l.raycast=()=>{};let d=new Float32Array(700*3),f=new Float32Array(700),p=new Float32Array(700);for(let e=0;e<700;e++)d[e*3]=i(-n,n),d[e*3+1]=i(r,11),d[e*3+2]=i(-n,n),f[e]=i(0,6.28),p[e]=i(.6,1.2);t.add(o,l);let m=Array.from({length:8},()=>new V),h=0,g=`clear`,_=0,v=0,y=0,b=0,x=0,w=new C,T=(e,t,n,r)=>e+(t-e)*Math.min(1,n*r);function E(e){qt.includes(e)&&(g=e)}function D(){g=qt[(qt.indexOf(g)+1)%qt.length]}function O(e,t){let a=g===`rain`,u=g===`snow`,S=g===`fog`,C=g!==`clear`;_=T(_,+!!C,e,1.4),v=T(v,+!!C,e,1.2),y=T(y,+!!S,e,.9),x=T(x,C&&!S?1:0,e,1),b=T(b,+!!u,e,u?.22:.5);let E=a?_:0,D=Math.round(600*E);for(let t=0;t<600;t++){if(t>=D){w.position.set(0,-50,0),w.scale.setScalar(0),w.updateMatrix(),o.setMatrixAt(t,w.matrix);continue}s[t*3+1]-=c[t]*e,s[t*3]+=e*1.1,s[t*3+1]<r&&(s[t*3]=i(-n,n),s[t*3+1]=11,s[t*3+2]=i(-n,n)),w.position.set(s[t*3],s[t*3+1],s[t*3+2]),w.rotation.set(0,0,0),w.scale.set(1,1,1),w.updateMatrix(),o.setMatrixAt(t,w.matrix)}o.instanceMatrix.needsUpdate=!0,o.material.opacity=.55*E,h=a?Math.round(8*_):0;for(let e=0;e<h;e++)m[e].set(Math.random(),Math.random(),.05*_);let O=Math.round(700*(u?_:0));for(let a=0;a<700;a++){if(a>=O){w.position.set(0,-50,0),w.scale.setScalar(0),w.updateMatrix(),l.setMatrixAt(a,w.matrix);continue}d[a*3+1]-=p[a]*e;let o=Math.sin(t*1.5+f[a])*.5;d[a*3+1]<r&&(d[a*3]=i(-n,n),d[a*3+1]=11,d[a*3+2]=i(-n,n)),w.position.set(d[a*3]+o,d[a*3+1],d[a*3+2]),w.rotation.set(0,0,0),w.scale.setScalar(1),w.updateMatrix(),l.setMatrixAt(a,w.matrix)}l.instanceMatrix.needsUpdate=!0,l.material.opacity=.9*(u?_:0)}return{group:t,update:O,cycle:D,setKind:E,rainDrops:m,get kind(){return g},get intensity(){return _},get overcast(){return v},get fog(){return y},get snow(){return b},get cloud(){return x},get rainDropCount(){return h},poolCounts:{rain:600,snow:700}}}function Yt(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=(e,n,r)=>{let i=t.createRadialGradient(e,n,0,e,n,r);i.addColorStop(0,`rgba(255,255,255,0.95)`),i.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=i,t.beginPath(),t.arc(e,n,r,0,7),t.fill()};n(128*.42,128*.56,128*.26),n(128*.6,128*.5,128*.3),n(128*.5,128*.46,128*.22),n(128*.34,128*.54,128*.18),n(128*.7,128*.58,128*.18);let r=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5],i=t.getImageData(0,0,128,128),a=i.data;for(let e=0;e<128;e++)for(let t=0;t<128;t++){let n=(e*128+t)*4,i=a[n+3]/255,o=(r[e%4*4+t%4]+.5)/16-.5;a[n+3]=Math.max(0,Math.min(1,Math.floor(i*5+.5+o)/5))*255}t.putImageData(i,0,0);let o=new U(e);return o.colorSpace=ce,o}function Xt({extent:e=8,count:t=16}={}){let n=new a;n.raycast=()=>{};let r=Yt(),i=e+6,o=(e,t)=>e+Math.random()*(t-e),s=[];for(let e=0;e<t;e++){let e=new z({map:r,transparent:!0,depthWrite:!1,opacity:0,fog:!0}),t=new j(e),a={sp:t,mat:e,wisp:Math.random(),x:o(-i,i),z:o(-i,i),hiY:o(4,6.8),loY:o(.6,2.2),w:o(3,5.6),h:o(1.7,3),speed:o(.25,.7),op:o(.6,1)};t.raycast=()=>{},s.push(a),n.add(t)}let c=new I,l=new I(`#ffffff`),u=new I(`#5b626e`);function d(e,t,n,r){let a=r?r.cloud:0,d=r?r.fog:0,f=Math.min(1,.4+.6*a+.5*d);c.copy(n.sky).lerp(l,.62),c.lerp(u,.6*a);for(let n=0;n<s.length;n++){let r=s[n],l=n/s.length<f;r.x+=r.speed*e*(.6+.8*a),r.x>i&&(r.x=-i,r.z=o(-i,i));let u=Math.min(Zt(r.x,-i,-i+3),1-Zt(r.x,i-3,i)),p=r.hiY*(1-d)+r.loY*d,m=1-.5*r.wisp,h=.72*Math.max(0,1-d-a)+1*a+.42*d,g=l?Math.max(0,h)*r.op*m*u:0;r.mat.opacity+=(g-r.mat.opacity)*Math.min(1,e*2.5),r.mat.color.copy(c);let _=r.w*(1+.6*d)*(1+.4*r.wisp),v=r.h*(1-.35*d);r.sp.scale.set(_,v,1),r.sp.position.set(r.x,p+Math.sin(t*.3+n)*.15,r.z)}}function f(e){r=e;for(let t of s)t.mat.map=e,t.mat.needsUpdate=!0}let p=s.map((e,t)=>({kind:`cloud`,label:`cloud ${t+1}`,getWorldPos:t=>t.copy(e.sp.position),active:()=>e.mat.opacity>.06,info:()=>`cloud · ${e.wisp>.6?`wispy`:`puffy`} · drifting east${e.sp.position.y<3?` (low mist)`:``}`}));function m(){return p}return{group:n,update:d,setTexture:f,getFollowables:m,get count(){return s.length}}}function Zt(e,t,n){let r=Math.max(0,Math.min(1,(e-t)/(n-t)));return r*r*(3-2*r)}var Qt={person:4.5,car:6,gull:6,fish:8,boat:9,cloud:16};function $t({rig:e,getCamera:t,sources:n=[]}){let r=null,i=new V,a=new V,o=()=>{let e=[];for(let t of n)if(t&&t.getFollowables){let n=t.getFollowables();n&&e.push(...n)}return e},s=e=>!e.active||e.active();function c(t){return t?(r=t,e.setFollow(e=>t.getWorldPos(e),{frame:t.frame??Qt[t.kind]??8}),t):null}function l(){r=null,e.clearFollow()}function u(e,n,r=.14){let l=t(),u=null,d=r;for(let t of o()){if(!s(t)||(t.getWorldPos(i),a.copy(i).project(l),a.z>1||a.z<-1))continue;let r=Math.hypot(a.x-e,a.y-n);r<d&&(d=r,u=t)}return u?c(u):null}function d(e=1,t=null){let n=o().filter(e=>(!t||e.kind===t)&&s(e));if(t||(n=en(n)),!n.length)return null;let i=r?n.indexOf(r):-1;return i=((i+e)%n.length+n.length)%n.length,c(n[i])}function f(){r&&r.active&&!r.active()&&l()}return{pickAt:u,cycle:d,follow:c,release:l,prune:f,get focus(){return r},get count(){return o().length},get readout(){return r?{kind:r.kind,label:r.label,info:r.info?r.info():``}:null}}}function en(e){let t=new Map;for(let n of e)t.has(n.kind)||t.set(n.kind,[]),t.get(n.kind).push(n);let n=[...t.values()],r=[];for(let e=0,t=!0;t;e++){t=!1;for(let i of n)e<i.length&&(r.push(i[e]),t=!0)}return r}function tn(e){let t=$e(e>>>0),n=new Uint8Array(256);for(let e=0;e<256;e++)n[e]=e;for(let e=255;e>0;e--){let r=t()*(e+1)|0,i=n[e];n[e]=n[r],n[r]=i}let r=new Uint8Array(512);for(let e=0;e<512;e++)r[e]=n[e&255];let i=e=>e*e*e*(e*(e*6-15)+10),a=(e,t,n)=>e+(t-e)*n,o=(e,t,n)=>{let r=e&4?n:t,i=e&4?t:n;return(e&1?-r:r)+(e&2?-i:i)};return(e,t)=>{let n=Math.floor(e)&255,s=Math.floor(t)&255,c=e-Math.floor(e),l=t-Math.floor(t),u=i(c),d=i(l),f=r[r[n]+s],p=r[r[n]+s+1],m=r[r[n+1]+s],h=r[r[n+1]+s+1];return a(a(o(f,c,l),o(m,c-1,l),u),a(o(p,c,l-1),o(h,c-1,l-1),u),d)}}function nn(e,t,n,r,i,a){let o=.5,s=1,c=0,l=0;for(let u=0;u<r;u++)c+=o*e(t*s,n*s),l+=o,o*=a,s*=i;return c/l}function rn(e,t,n,r,i,a){let o=.5,s=1,c=0,l=0;for(let u=0;u<r;u++){let r=1-Math.abs(e(t*s,n*s));r*=r,c+=o*r,l+=o,o*=a,s*=i}return c/l}var an=(e,t,n)=>(n=Math.max(0,Math.min(1,(n-e)/(t-e))),n*n*(3-2*n)),on=[{key:`ocean`,color:`#2a5b7a`},{key:`beach`,color:`#d8c89a`},{key:`grassland`,color:`#6f9a4e`},{key:`forest`,color:`#3f6b3a`},{key:`hills`,color:`#8a8a55`},{key:`rock`,color:`#7d7468`},{key:`snow`,color:`#eef2f6`}],sn=Object.fromEntries(on.map((e,t)=>[e.key,t]));function cn(e,t,n){if(e<n-.015)return sn.ocean;if(e<n+.02)return sn.beach;let r=(e-n)/(1-n);return r>.82?sn.snow:r>.6?sn.rock:r>.34?t>.45?sn.forest:sn.hills:t>.55?sn.forest:sn.grassland}var ln={valley:{freq:2.3,mtnMask:.3,mtnGain:.55,sea:.3,relief:7.5,warp:.9},archipelago:{freq:3.4,mtnMask:.18,mtnGain:.4,sea:.5,relief:6,warp:1.3},mountains:{freq:2,mtnMask:.62,mtnGain:.85,sea:.26,relief:11,warp:.8},plains:{freq:1.8,mtnMask:.12,mtnGain:.3,sea:.28,relief:4.5,warp:.7}},un=Object.keys(ln);function dn({seed:e=1,size:t=160,preset:n=`valley`,params:r=null}={}){let i=r||ln[n]||ln.valley,a=tn(e*2+1),o=tn(e*5+9),s=tn(e*7+13),c=tn(e*3+5),l=new Float32Array(t*t),u=new Uint8Array(t*t),d=1/0,f=-1/0;for(let e=0;e<t;e++)for(let n=0;n<t;n++){let r=(n/t-.5)*i.freq,p=(e/t-.5)*i.freq,m=r+i.warp*nn(c,r+5.2,p+1.3,4,2,.5),h=p+i.warp*nn(c,r+9.7,p+4.1,4,2,.5),g=nn(a,m,h,6,2,.5)*.5+.5,_=an(.45,.75,nn(o,r*.5,p*.5,3,2,.5)*.5+.5),v=rn(a,m*1.7+11,h*1.7+7,5,2,.5);g=g*(1-_*i.mtnMask)+v*(_*i.mtnMask*(.6+i.mtnGain));let y=n/t-.5,b=e/t-.5,x=Math.sqrt(y*y+b*b)*2;g-=an(.62,1,x)*.55,g=Math.max(0,Math.min(1,g));let S=nn(s,r*.8+3,p*.8+8,4,2,.5)*.5+.5,C=e*t+n;l[C]=g,u[C]=cn(g,S,i.sea),g<d&&(d=g),g>f&&(f=g)}return{size:t,height:l,biome:u,sea:i.sea,relief:i.relief,minH:d,maxH:f,params:i,seed:e,preset:n}}var fn=on.map(e=>new I(e.color)),pn=new I,mn=new V,hn=new V,gn=new V;function _n(e,t,n,r,i,a,o){let{size:s,height:c,biome:l,sea:u,relief:d}=e,{cell:f,half:p,baseY:m}=t,h=e=>e*f-p,g=e=>e*f-p,_=e=>m+(e-u)*d,v=0,y=(e,t,n,s,c,l,u,d,f,p)=>{mn.set(s-e,c-t,l-n),hn.set(u-e,d-t,f-n),gn.crossVectors(mn,hn).normalize();for(let[m,h,g]of[[e,t,n],[s,c,l],[u,d,f]])r[v*3]=m,r[v*3+1]=h,r[v*3+2]=g,i[v*3]=gn.x,i[v*3+1]=gn.y,i[v*3+2]=gn.z,o&&(a[v*3]=p.r,a[v*3+1]=p.g,a[v*3+2]=p.b),v++};for(let e=n.j0;e<n.j1;e++)for(let t=n.i0;t<n.i1;t++){let n=h(t),r=h(t+1),i=g(e),a=g(e+1),o=_(c[e*s+t]),u=_(c[e*s+t+1]),d=_(c[(e+1)*s+t]),f=_(c[(e+1)*s+t+1]),p=fn[l[e*s+t]],m=fn[l[(e+1)*s+t+1]];y(n,o,i,n,d,a,r,u,i,pn.copy(p)),y(r,u,i,n,d,a,r,f,a,pn.copy(m))}}function vn(e,{worldSize:t=26,baseY:r=0,chunks:i=4}={}){let{size:o}=e,s=new a,l={cell:t/(o-1),half:t/2,baseY:r};s.userData.world=l;let u=Math.ceil((o-1)/i);for(let t=0;t<i;t++)for(let r=0;r<i;r++){let i=r*u,a=t*u,d=Math.min(i+u,o-1),f=Math.min(a+u,o-1);if(d<=i||f<=a)continue;let p={i0:i,j0:a,i1:d,j1:f},m=(d-i)*(f-a)*6,h=new Float32Array(m*3),g=new Float32Array(m*3),_=new Float32Array(m*3);_n(e,l,p,h,g,_,!0);let v=new ae;v.setAttribute(`position`,new A(h,3)),v.setAttribute(`normal`,new A(g,3)),v.setAttribute(`color`,new A(_,3)),v.computeBoundingSphere();let y=new n(v,new c({vertexColors:!0,roughness:.92,metalness:0,flatShading:!0}));y.castShadow=!0,y.receiveShadow=!0,y.userData.chunk=p,s.add(y)}return s.userData.dispose=()=>s.traverse(e=>{e.isMesh&&(e.geometry.dispose(),e.material.dispose())}),s}function yn(e,t,n){let r=e.userData.world;for(let e of n){let n=e.geometry;_n(t,r,e.userData.chunk,n.attributes.position.array,n.attributes.normal.array,null,!1),n.attributes.position.needsUpdate=!0,n.attributes.normal.needsUpdate=!0,n.computeBoundingSphere()}}var bn={beach:[{type:`rock`,density:.05,maxSlope:1.4}],grassland:[{type:`tree`,density:.1,maxSlope:.7},{type:`tuft`,density:.3,maxSlope:.9}],forest:[{type:`tree`,density:.62,maxSlope:.8},{type:`rock`,density:.03,maxSlope:1.2}],hills:[{type:`tree`,density:.14,maxSlope:.7},{type:`rock`,density:.16,maxSlope:1.6}],rock:[{type:`rock`,density:.22,maxSlope:2}]};function xn({terrain:e,seed:t=1,worldSize:n=26,baseY:r=0,biomeKeys:i,density:a=1,max:o=9e3}={}){let{size:s,height:c,biome:l,sea:u,relief:d}=e,f=$e((t^97155048)>>>0),p=n/(s-1),m=n/2,h=e=>r+(e-u)*d,g=(e,t)=>{let n=Math.max(1,Math.min(s-2,e)),r=Math.max(1,Math.min(s-2,t)),i=(c[r*s+n+1]-c[r*s+n-1])*d/(2*p),a=(c[(r+1)*s+n]-c[(r-1)*s+n])*d/(2*p);return Math.hypot(i,a)},_={tree:[],rock:[],tuft:[]};for(let e=1;e<s-1;e+=2)for(let t=1;t<s-1;t+=2){let n=e*s+t,r=c[n];if(r<u+.005)continue;let d=bn[i[l[n]]];if(!d)continue;let v=g(t,e);for(let n of d){let i=f();if(v>n.maxSlope||i>n.density*a)continue;let s=_[n.type];if(s.length>=o)continue;let c=(f()-.5)*p*2,l=(f()-.5)*p*2,u=t*p-m+c,d=e*p-m+l;s.push({x:u,y:h(r),z:d,s:.7+f()*.6,r:f()*Math.PI*2,t:.82+f()*.36})}}return{placements:_,counts:{tree:_.tree.length,rock:_.rock.length,tuft:_.tuft.length}}}function Sn(e,t){let n=new I(t),r=e.attributes.position.count,i=new Float32Array(r*3);for(let e=0;e<r;e++)i[e*3]=n.r,i[e*3+1]=n.g,i[e*3+2]=n.b;return e.setAttribute(`color`,new A(i,3)),e}function Cn(e){let t=0;for(let n of e)t+=n.attributes.position.count;let n=new Float32Array(t*3),r=new Float32Array(t*3),i=new Float32Array(t*3),a=0;for(let t of e)n.set(t.attributes.position.array,a*3),r.set(t.attributes.normal.array,a*3),i.set(t.attributes.color.array,a*3),a+=t.attributes.position.count;let o=new ae;return o.setAttribute(`position`,new A(n,3)),o.setAttribute(`normal`,new A(r,3)),o.setAttribute(`color`,new A(i,3)),o}function wn(){return Cn([Sn(new D(.045,.06,.34,6).translate(0,.17,0).toNonIndexed(),`#5b3f28`),Sn(new ne(.3,.55,7).translate(0,.55,0).toNonIndexed(),`#3f7d3a`),Sn(new ne(.22,.42,7).translate(0,.85,0).toNonIndexed(),`#4f9046`)])}function Tn(){let e=new ie(.18,0).toNonIndexed(),t=e.attributes.position,n=$e(3098);for(let e=0;e<t.count;e++){let r=.78+n()*.5;t.setXYZ(e,t.getX(e)*r,t.getY(e)*r*.8,t.getZ(e)*r)}return e.computeVertexNormals(),Sn(e,`#7d7468`)}function En(){return Sn(new ne(.06,.16,4).translate(0,.08,0).toNonIndexed(),`#6f9a4e`)}function Dn(e){let n=new a;n.raycast=()=>{};let r={tree:wn(),rock:Tn(),tuft:En()},i={tree:0,rock:-.05,tuft:0},o=new xe,s=new _,l=new V,u=new V,d=new V(0,1,0),f=new I;for(let a of[`tree`,`rock`,`tuft`]){let p=e[a];if(!p||!p.length)continue;let m=new c({vertexColors:!0,roughness:.9,metalness:0,flatShading:!0}),h=new R(r[a],m,p.length);h.castShadow=!0,h.receiveShadow=!1,h.frustumCulled=!0,h.raycast=()=>{},h.userData.type=a,h.instanceColor=new t(new Float32Array(p.length*3),3);for(let e=0;e<p.length;e++){let t=p[e];l.set(t.x,t.y+i[a],t.z),s.setFromAxisAngle(d,t.r),u.setScalar(t.s),o.compose(l,s,u),h.setMatrixAt(e,o),h.setColorAt(e,f.setScalar(t.t))}h.instanceMatrix.needsUpdate=!0,h.instanceColor&&(h.instanceColor.needsUpdate=!0),n.add(h)}return n.userData.placements=e,n.userData.yoff=i,n.userData.dispose=()=>n.traverse(e=>{e.isInstancedMesh&&(e.geometry.dispose(),e.material.dispose())}),n}var On={tree:.85,rock:2,tuft:.95};function kn(e,t,{worldSize:n=26,baseY:r=0}={}){let i=e.userData.placements,a=e.userData.yoff||{};if(!i)return;let{size:o,height:s,sea:c,relief:l}=t,u=n/(o-1),d=n/2,f=e=>e<0?0:e>=o?o-1:e,p=(e,t)=>s[f(Math.round((t+d)/u))*o+f(Math.round((e+d)/u))],m=(e,t)=>{let n=Math.max(1,Math.min(o-2,Math.round((e+d)/u))),r=Math.max(1,Math.min(o-2,Math.round((t+d)/u))),i=(s[r*o+n+1]-s[r*o+n-1])*l/(2*u),a=(s[(r+1)*o+n]-s[(r-1)*o+n])*l/(2*u);return Math.hypot(i,a)},h=new xe,g=new _,v=new V,y=new V,b=new V(0,1,0);for(let t of e.children){let e=t.userData.type,n=i[e];if(!n||!t.isInstancedMesh)continue;let o=On[e]??1.5;for(let i=0;i<n.length;i++){let s=n[i],u=p(s.x,s.z),d=u<c+.005||m(s.x,s.z)>o;v.set(s.x,r+(u-c)*l+(a[e]||0),s.z),g.setFromAxisAngle(b,s.r),y.setScalar(d?0:s.s),h.compose(v,g,y),t.setMatrixAt(i,h)}t.instanceMatrix.needsUpdate=!0}}function An({terrain:e,seed:t,worldSize:n,baseY:r,biomeKeys:i,density:a,max:o}){let{placements:s,counts:c}=xn({terrain:e,seed:t,worldSize:n,baseY:r,biomeKeys:i,density:a,max:o}),l=Dn(s);return l.userData.counts=c,l}function jn(e,{worldSize:t=26,baseY:n=0,maxLakes:r=3}={}){let{size:i,height:a,sea:o,relief:s,maxH:c}=e,l=Math.floor((i-1)/3),u=t/(i-1),d=t/2,f=(e,t)=>a[t*3*i+e*3],p=e=>e*3*u-d,m=e=>e*3*u-d,h=e=>e>o+.02,g=o+.55*Math.max(.001,c-o),_=[];for(let e=2;e<l-2;e++)for(let t=2;t<l-2;t++){let n=f(t,e);if(!h(n)||n>g)continue;let r=!0;for(let i=-1;i<=1&&r;i++)for(let a=-1;a<=1;a++)if((a||i)&&f(t+a,e+i)<n){r=!1;break}r&&_.push({gi:t,gj:e,h:n})}_.sort((e,t)=>e.h-t.h);let v=new Uint8Array(l*l),y=[];for(let e of _){if(y.length>=r)break;if(v[e.gj*l+e.gi])continue;let t=e.h+.045,i=[[e.gi,e.gj]],a=new Set,c=!0,d=0,h=0,g=0,_=[];for(;i.length;){let[e,n]=i.pop(),r=n*l+e;if(a.has(r))continue;if(a.add(r),e<=0||e>=l-1||n<=0||n>=l-1){c=!1;continue}let s=f(e,n);if(s<o){c=!1;continue}if(!(s>=t)){if(_.push(r),d+=e,h+=n,g++,g>520){c=!1;break}i.push([e+1,n],[e-1,n],[e,n+1],[e,n-1])}}if(!c||g<5)continue;for(let e of _)v[e]=1;let b=d/g,x=h/g,S=3*u,C=g*S*S,w=.82*Math.sqrt(C/Math.PI);y.push({cx:p(b),cz:m(x),y:n+(t-o)*s,radius:w,area:C})}return y}function Mn(e,{material:t}={}){let r=new a;r.raycast=()=>{};let i=t||new c({color:`#3f6f8c`,roughness:.08,metalness:.35,transparent:!0,opacity:.88});for(let t of e){let e=new n(new de(t.radius,28),i);e.rotation.x=-Math.PI/2,e.position.set(t.cx,t.y+.012,t.cz),e.receiveShadow=!1,e.castShadow=!1,e.raycast=()=>{},r.add(e)}return r.userData.dispose=()=>r.traverse(e=>{e.isMesh&&e.geometry.dispose()}),r.userData.count=e.length,r}function Nn(e,t={}){let n=jn(e,t),r=Mn(n,t);return r.userData.lakes=n,r}function Pn({scale:e=90}={}){let t=new ge;t.scale.setScalar(e),t.frustumCulled=!1,t.raycast=()=>{},t.visible=!1;let n=t.material.uniforms;n.turbidity.value=2.2,n.rayleigh.value=1.3,n.mieCoefficient.value=.005,n.mieDirectionalG.value=.78;function r(e){n.sunPosition.value.copy(e)}function i(e){e&&(e.turbidity!=null&&(n.turbidity.value=e.turbidity),e.rayleigh!=null&&(n.rayleigh.value=e.rayleigh),e.mie!=null&&(n.mieCoefficient.value=e.mie),e.mieG!=null&&(n.mieDirectionalG.value=e.mieG))}let a=null,o=null,s=null,c=null;function l(t){if(typeof document>`u`||!t)return null;a||(a=new pe(t),o=new me,s=new ge,s.scale.setScalar(e),o.add(s));let r=s.material.uniforms;return r.turbidity.value=n.turbidity.value,r.rayleigh.value=n.rayleigh.value,r.mieCoefficient.value=n.mieCoefficient.value,r.mieDirectionalG.value=n.mieDirectionalG.value,r.sunPosition.value.copy(n.sunPosition.value),c&&c.dispose(),c=a.fromScene(o),c.texture}return{mesh:t,setSun:r,setParams:i,buildEnv:l,get material(){return t.material}}}var Fn=`attribute float aSize;
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
}`,In=`precision highp float;

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
}`,Ln={realistic:0,charm:0,pixel:2,vector:1},Rn={realistic:1,charm:1,pixel:1.9,vector:1.2};function zn({seed:e=1517,count:t=340,spreadX:n=21,yLo:i=3,yHi:o=18,zBase:s=7.2}={}){let c=new a;c.raycast=()=>{};let l=$e(e>>>0),u=new Float32Array(t*3),d=new Float32Array(t),f=new Float32Array(t),p=new Float32Array(t),h=[];for(let e=0;e<t;e++){let t=(l()*2-1)*n,r=i+l()*(o-i),a=-s-l()*.7;u[e*3]=t,u[e*3+1]=r,u[e*3+2]=a;let c=.35+l()*.65;f[e]=c,d[e]=1.6+l()*2.8+(c>.85?2.2:0),p[e]=l()*Math.PI*2,c>.82&&h.push([t,r,a])}let _=new ae;_.setAttribute(`position`,new A(u,3)),_.setAttribute(`aSize`,new A(d,1)),_.setAttribute(`aBright`,new A(f,1)),_.setAttribute(`aPhase`,new A(p,1));let v=new L({vertexShader:Fn,fragmentShader:In,uniforms:{uTime:{value:0},uTwinkle:{value:1},uSizeScale:{value:1},uColor:{value:new I(`#eaf0ff`)},uNight:{value:0},uMode:{value:0}},transparent:!0,depthWrite:!1,blending:2,fog:!1,toneMapped:!1}),y=new w(_,v);y.raycast=()=>{},y.frustumCulled=!1,c.add(y);let b=[];if(h.length>6)for(let e=0;e<3;e++){let e=Math.floor(l()*h.length);for(let t=0;t<3;t++){let t=h[e],n=h[(e+1+Math.floor(l()*2))%h.length];b.push(t[0],t[1],t[2],n[0],n[1],n[2]),e=(e+1)%h.length}}let x=[[[0,2],[0,0]],[[0,0],[.7,0]],[[2.1,2],[1.4,2]],[[1.4,2],[1.4,0]],[[1.4,0],[2.1,0]],[[2.1,0],[2.1,1]],[[2.1,1],[1.7,1]],[[2.8,0],[2.8,2]],[[2.8,2],[3.5,2]],[[3.5,2],[3.5,1]],[[3.5,1],[2.8,1]],[[2.8,1],[3.6,0]]],S=-s-.4,C=.62;for(let[[e,t],[n,r]]of x)b.push(-3+e*C,12+t*C,S,-3+n*C,12+r*C,S);let T=new ae;T.setAttribute(`position`,new r(b,3));let E=new g(T,new m({color:`#9fb6e8`,transparent:!0,opacity:0,depthWrite:!1,fog:!1,toneMapped:!1}));E.raycast=()=>{},E.frustumCulled=!1,c.add(E);let D=new j(new z({map:Bn(),transparent:!0,opacity:0,depthWrite:!1,blending:2,fog:!1,toneMapped:!1}));D.raycast=()=>{},D.scale.set(n*2.4,n*.95,1),D.position.set(2,12,-s-.7),D.material.rotation=-.5,D.renderOrder=-3,c.add(D);let O=-1;function k(e,t=`realistic`,n=0,r=!1){v.uniforms.uTime.value=n,v.uniforms.uTwinkle.value=+!r,v.uniforms.uNight.value=e;let i=Ln[t]??0;i!==O&&(v.uniforms.uMode.value=i,O=i),v.uniforms.uSizeScale.value=Rn[t]??1,E.material.opacity=e*.5,D.material.opacity=e*.32,c.visible=e>.001}return{group:c,update:k}}function Bn(){let e=document.createElement(`canvas`);e.width=e.height=256;let t=e.getContext(`2d`),n=t.createRadialGradient(256/2,256/2,0,256/2,256/2,256/2);n.addColorStop(0,`rgba(150,170,230,0.5)`),n.addColorStop(.4,`rgba(120,130,200,0.22)`),n.addColorStop(1,`rgba(90,100,160,0)`),t.fillStyle=n,t.fillRect(0,0,256,256);let r=$e(20145);for(let e=0;e<7;e++){let e=40+r()*176,n=70+r()*116,i=14+r()*30,a=t.createRadialGradient(e,n,0,e,n,i);a.addColorStop(0,`rgba(200,210,255,0.18)`),a.addColorStop(1,`rgba(200,210,255,0)`),t.fillStyle=a,t.beginPath(),t.arc(e,n,i,0,Math.PI*2),t.fill()}let i=new U(e);return i.colorSpace=ce,i}var Vn=Math.PI*2;function Hn(e){let t=document.createElement(`canvas`);t.width=t.height=128;let n=t.getContext(`2d`),r=n.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return r.addColorStop(0,`#ffffff`),r.addColorStop(.34,`#fffaf0`),r.addColorStop(.66,e),r.addColorStop(.86,e),r.addColorStop(1,`rgba(255,255,255,0)`),n.fillStyle=r,n.beginPath(),n.arc(128/2,128/2,128/2,0,Vn),n.fill(),Yn(t,!0)}function Un(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);n.addColorStop(0,`#ffffff`),n.addColorStop(.4,`#eef3ff`),n.addColorStop(.82,`#c4cee6`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,128/2,0,Vn),t.fill(),t.globalAlpha=.14,t.fillStyle=`#8b97b4`;for(let[e,n,r]of[[54,50,9],[78,66,7],[60,82,5]])t.beginPath(),t.arc(e,n,r,0,Vn),t.fill();return Yn(e,!0)}function Wn(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`);t.translate(128/2,128/2),t.fillStyle=`rgba(255,210,120,0.9)`;for(let e=0;e<12;e++)t.rotate(Vn/12),t.beginPath(),t.moveTo(0,-28),t.lineTo(7,-54),t.lineTo(-7,-54),t.closePath(),t.fill();let n=t.createRadialGradient(0,0,0,0,0,32);return n.addColorStop(0,`#ffffff`),n.addColorStop(.4,`#fff1c8`),n.addColorStop(.8,`#ffb24a`),n.addColorStop(1,`#ff8a2a`),t.fillStyle=n,t.beginPath(),t.arc(0,0,32,0,Vn),t.fill(),Yn(e,!0)}function Gn(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,46);n.addColorStop(0,`#ffffff`),n.addColorStop(.5,`#e6ecfb`),n.addColorStop(1,`#c2cce4`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,46,0,Vn),t.fill(),t.fillStyle=`#aab6d2`;for(let[e,n,r]of[[52,48,11],[80,62,8],[58,82,7],[40,66,5]])t.beginPath(),t.arc(e,n,r,0,Vn),t.fill();return Yn(e,!0)}function Kn(e,t,n){let r=document.createElement(`canvas`);r.width=r.height=144;let i=r.getContext(`2d`),a=17/2,o=18/2-.5;for(let r=0;r<18;r++)for(let s=0;s<18;s++){let c=Math.hypot(s-a,r-a);c>o||(i.fillStyle=c<o*.45?e:c<o*.78?t:n,i.fillRect(Math.round(s*8),Math.round(r*8),8,8))}return Yn(r,!1)}function qn(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return n.addColorStop(0,`rgba(255,255,255,0.9)`),n.addColorStop(.38,`rgba(255,255,255,0.3)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,128/2,0,Vn),t.fill(),Yn(e,!0)}function Jn(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2),r=`20,30,48`;return n.addColorStop(0,`rgba(${r},0)`),n.addColorStop(.42,`rgba(${r},0)`),n.addColorStop(.6,`rgba(${r},0.6)`),n.addColorStop(1,`rgba(${r},0)`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,128/2,0,Vn),t.fill(),Yn(e,!0)}function Yn(e,t){let n=new U(e);return n.colorSpace=ce,t||(n.magFilter=x,n.minFilter=x),n}var Xn=(e,t,n)=>{let r=Math.max(0,Math.min(1,(e-t)/(n-t)));return r*r*(3-2*r)};function Zn({skyW:e=15,skyY0:t=3.4,skyH:n=3.8,z:r=-7.8,biasX:i=4.5,sunSize:o=4.6,moonSize:s=4}={}){let c=new a;c.raycast=()=>{};let l=(e,t)=>{let n=new j(new z({map:e,transparent:!0,depthWrite:!1,fog:!1,toneMapped:!1,...t?{blending:2}:{}}));return n.raycast=()=>{},n},u={realistic:Hn(`#ffcf8a`),charm:Wn(),pixel:Kn(`#fff6e0`,`#ffc24a`,`#ff8a2a`)},d={realistic:Un(),charm:Gn(),pixel:Kn(`#ffffff`,`#cdd6ee`,`#9aa6c6`)},f=qn(),p=l(Jn(),!1),m=l(f,!0),h=l(u.realistic),g=l(f,!0),_=l(d.realistic);p.renderOrder=-2,m.renderOrder=-1,c.add(p,m,h,g,_);let v=zn({});v.group.renderOrder=-4,c.add(v.group);let y=typeof window<`u`&&window.matchMedia?window.matchMedia(`(prefers-reduced-motion: reduce)`):null,b={realistic:{sunGlow:3,sunGlowOp:.7,moonGlow:2.6,moonGlowOp:.5,sizeMul:1,sunHaloOp:.85},charm:{sunGlow:2.2,sunGlowOp:.55,moonGlow:2.1,moonGlowOp:.42,sizeMul:1.08,sunHaloOp:.7},pixel:{sunGlow:1.7,sunGlowOp:.4,moonGlow:1.7,moonGlowOp:.32,sizeMul:1,sunHaloOp:.6}},x=`realistic`;function S(e){e===x||!b[e]||(x=e,h.material.map=u[e],h.material.needsUpdate=!0,_.material.map=d[e],_.material.needsUpdate=!0)}new I;let C=new I(`#fff3df`),w=new I(`#ffb060`),T=new I(`#ff6a2a`),E=new I(`#eef2ff`),D=new I(`#9fbcff`);function O(a,c,l,u,d=`realistic`){S(d);let f=b[x],O=l.sunArc,k=u?Math.min(1,(u.cloud||0)*.85+(u.fog||0)*.7):0,ee=O.y,A=Xn(ee,-.04,.1)*(1-.7*k),j=1-Xn(Math.abs(ee),.02,.5);h.position.set(O.x*e+i,t+O.y*n,r),m.position.copy(h.position);let M=o*f.sizeMul*(1+.55*j);h.scale.setScalar(M),m.scale.setScalar(M*f.sunGlow),h.material.color.copy(C),m.material.color.copy(w).lerp(T,j),h.material.opacity=A,m.material.opacity=A*f.sunGlowOp*(.7+.5*j),p.position.copy(h.position),p.scale.setScalar(M*1.7),p.material.opacity=A*(1-j)*f.sunHaloOp;let te=Xn(-O.y,-.04,.1)*(1-.65*k);_.position.set(-O.x*e+i,t+-O.y*n,r),g.position.copy(_.position);let N=s*f.sizeMul;_.scale.setScalar(N),g.scale.setScalar(N*f.moonGlow),_.material.color.copy(E),g.material.color.copy(D),_.material.opacity=te,g.material.opacity=te*f.moonGlowOp;let P=Xn(-O.y,-.05,.18)*(1-.85*k);v.update(P,d,c,!!(y&&y.matches))}return{group:c,update:O}}var Qn=`varying vec2 vUv;

void main() {
  
  
  
  vUv = uv;

  
  
  
  
  
  
  
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,$n=`precision highp float;

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
}`,er=`varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0); 
}`,tr=`precision highp float;

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
}`,nr=`precision highp float;

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
}`,rr=`precision highp float;

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
}`,ir=`const float CA_STRENGTH   = 0.0030;  
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
    col = (col - 0.5) * uGradeContrast + 0.5;             
    col = clamp(col, 0.0, 1.0);
  }

  gl_FragColor = vec4(col, 1.0);
}`,ar=`const float DITHER = 0.55;   

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
}`,or=`precision highp float;

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
}`,sr=`precision highp float;

varying vec2 vUv;
uniform sampler2D uToon;   
uniform sampler2D uPixel;  
uniform float     uBlend;  

void main() {
  vec3 t = texture2D(uToon, vUv).rgb;
  vec3 p = texture2D(uPixel, vUv).rgb;
  gl_FragColor = vec4(mix(t, p, uBlend), 1.0);
}`,cr=`varying vec2 vUv;
uniform sampler2D uScene;
uniform float     uThreshold;   

void main() {
  vec3 c = texture2D(uScene, vUv).rgb;
  float l = dot(c, vec3(0.2126, 0.7152, 0.0722));        
  float k = smoothstep(uThreshold, uThreshold + 0.22, l); 
  gl_FragColor = vec4(c * k, 1.0);
}`,lr=`varying vec2 vUv;
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
}`,ur=`precision highp float;

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
}`,dr={"1-bit":{gridWidth:110,dither:.6,palette:[`#15120c`,`#c8b486`]},gb:{gridWidth:130,dither:.4,palette:[`#0f380f`,`#306230`,`#8bac0f`,`#9bbc0f`]},"8-bit":{gridWidth:160,dither:.55,palette:[`#140c1c`,`#442434`,`#30346d`,`#4e4a4e`,`#854c30`,`#346524`,`#d04648`,`#757161`,`#597dce`,`#d27d2c`,`#8595a1`,`#6daa2c`,`#d2aa99`,`#6dc2ca`,`#dad45e`,`#deeed6`]},"16-bit":{gridWidth:280,dither:.3,palette:`#000000.#222034.#45283c.#663931.#8f563b.#df7126.#d9a066.#eec39a.#fbf236.#99e550.#6abe30.#37946e.#4b692f.#524b24.#323c39.#3f3f74.#306082.#5b6ee1.#639bff.#5fcde4.#cbdbfc.#ffffff.#9badb7.#847e87.#696a6a.#595652.#76428a.#ac3232.#d95763.#d77bba.#8f974a.#8a6f30`.split(`.`)},modern:{gridWidth:460,dither:.6,palette:null}},fr=[`gb`,`8-bit`,`16-bit`,`modern`];function pr(t){let n=Math.max(t.length,1),r=new Float32Array(n*4);t.forEach((e,t)=>{let n=new I(e);r[t*4+0]=n.r,r[t*4+1]=n.g,r[t*4+2]=n.b,r[t*4+3]=1});let i=new W(r,n,1,e,G);return i.minFilter=x,i.magFilter=x,i.needsUpdate=!0,i}var mr=220,hr={night:[`#0A0C16`,`#1C2236`,`#3A3A52`,`#5A5A78`,`#8A92B0`],dawn:[`#1A1008`,`#43281A`,`#7A4A30`,`#B07A4E`,`#E8A86A`],noon:[`#16100A`,`#3A2F1E`,`#6B563A`,`#937B54`,`#B89968`],dusk:[`#140A0A`,`#3E1E1A`,`#7A3828`,`#B85A36`,`#F0884A`]},gr={night:[`#020604`,`#06180E`,`#10401E`,`#1E9040`,`#7FE0FF`],dawn:[`#060603`,`#1A2410`,`#3A6B22`,`#6CC040`,`#FFC060`],noon:[`#050805`,`#0E2912`,`#1E6B2F`,`#3CF06A`,`#FFB000`],dusk:[`#080402`,`#241408`,`#6B4A12`,`#E0A030`,`#FF7030`]};function _r({demo:t=!1,citySeed:r=0,profileIndex:a=0}={}){let l=new re({antialias:!0,preserveDrawingBuffer:!0});l.shadowMap.enabled=!0,l.shadowMap.type=1,l.shadowMap.autoUpdate=!1,l.shadowMap.needsUpdate=!0;let d=!!(window.matchMedia&&window.matchMedia(`(pointer: coarse)`).matches);l.setPixelRatio(Math.min(window.devicePixelRatio,d?1.5:2)),l.setSize(window.innerWidth,window.innerHeight),l.setClearColor(920327,1),document.body.appendChild(l.domElement);let p=l.getDrawingBufferSize(new F),m=new me;m.fog=new b(10465470,0);let h=new I(`#aeb6c0`),g=.062,_=new I(`#74508f`),y=new I,C=Re({aspect:window.innerWidth/window.innerHeight}),w=yt({t:.5}),T={type:i,format:e,minFilter:x,magFilter:x,wrapS:oe,wrapT:oe,depthBuffer:!1,stencilBuffer:!1},E=[new B(256,256,T),new B(256,256,T),new B(256,256,T)];for(let e of E)l.setRenderTarget(e),l.clear();l.setRenderTarget(null);let D=new me,O=new s(-1,1,1,-1,0,1),k=new L({vertexShader:er,fragmentShader:tr,uniforms:{uCurr:{value:null},uPrev:{value:null},uTexel:{value:new F(1/256,1/256)},uMouse:{value:new F(-1,-1)},uMouseStrength:{value:0},uC2:{value:.25},uDamping:{value:.992},uRainCount:{value:0},uRainDrops:{value:Array.from({length:8},()=>new V)},uWakeCount:{value:0},uWakeDrops:{value:Array.from({length:8},()=>new V)}}});D.add(new n(new u(2,2),k));let ee=new B(p.x,p.y,{minFilter:o,magFilter:o,depthBuffer:!0,stencilBuffer:!1});function A(e){let t=document.createElement(`canvas`);t.width=t.height=1024;let n=t.getContext(`2d`);n.fillStyle=e?`#0c1418`:`#15110b`,n.fillRect(0,0,1024,1024),n.strokeStyle=e?`rgba(120,150,170,0.22)`:`rgba(184,153,104,0.30)`,n.lineWidth=2;for(let e=0;e<=1024;e+=64)n.beginPath(),n.moveTo(e,0),n.lineTo(e,1024),n.stroke(),n.beginPath(),n.moveTo(0,e),n.lineTo(1024,e),n.stroke();e||(n.fillStyle=`#B89968`,n.font=`bold 360px Georgia, serif`,n.textAlign=`center`,n.textBaseline=`middle`,n.fillText(`LGR`,512,470),n.font=`600 64px ui-monospace, monospace`,n.fillText(`WEB · STUDIO`,512,720));let r=new U(t);return r.colorSpace=ce,r}let j=new n(new u(28,28),new S({map:A(t)}));j.rotation.x=-Math.PI/2,j.position.y=-.35,m.add(j);let M=new n(new u(40,24),new L({depthWrite:!1,vertexShader:Qn,fragmentShader:$n,uniforms:{uTime:{value:0},uInk:{value:w.horizon},uGold:{value:w.sky},uFogColor:{value:y},uFogAmt:{value:0},uFogCharm:Ge}}));M.position.set(0,3,-8),m.add(M);let te=new L({vertexShader:nr,fragmentShader:rr,uniforms:{uHeight:{value:null},uScene:{value:ee.texture},uTexel:{value:new F(1/256,1/256)},uResolution:{value:new F(p.x,p.y)},uDisplace:{value:.42},uNormalStrength:{value:22},uRefractStrength:{value:.06},uChromaScale:{value:1},uNormalMatrix:{value:new v},uLightDir:{value:w.sunDir},uInk:{value:new I(`#2A2218`)},uGold:{value:new I(`#B89968`)},uVector:ze,uVecWater:{value:new I(`#1fb8d8`)},uVecTint:{value:Be}}}),N=new n(new u(28,28,255,255),te);N.rotation.x=-Math.PI/2,N.updateMatrixWorld(!0),te.uniforms.uNormalMatrix.value.getNormalMatrix(N.matrixWorld),m.add(N);let P={value:0},ne=Kt({windowGlow:P}),R=ft({seed:r,profileIndex:a,landmarkFactory:ne,windowGlow:P});m.add(R.group);let ie=Ct({plinthTop:.3,extent:R.extent,profile:R.state.profile});m.add(ie.group);let ae=Pt({extent:R.extent,waterSize:28,plinthTop:.3});m.add(ae.group),k.uniforms.uWakeDrops.value=ae.wakeDrops;let z=Jt({extent:R.extent});m.add(z.group),k.uniforms.uRainDrops.value=z.rainDrops;let se=Xt({extent:R.extent});m.add(se.group);let le=$t({rig:C,getCamera:()=>C.camera,sources:[ie,ae,se]}),ue=Zn();m.add(ue.group);let de=Pn({scale:90});m.add(de.mesh),m.environmentIntensity=.32;let fe=!1;function pe(e){let t=e&&w.sunArc.y>-.04;t!==fe&&(fe=t,de.mesh.visible=t,M.visible=!t)}let H=null,he=-1;function ge(){let e=Math.floor(w.t%1*4)%4;return(e!==he||!H)&&(he=e,H=de.buildEnv(l)),H}let _e=null,ve=null,W=null,G=null,ye=!1,xe=1234,Se=`valley`,Ce=on.map(e=>e.key),we=new c({color:`#3f6f8c`,roughness:.07,metalness:.4,transparent:!0,opacity:.9}),Te=()=>[R.group,ie.group,ae.group],Ee=()=>[_e,ve,W].filter(Boolean);function De(){for(let e of Ee())m.remove(e),e.userData.dispose?.();let e=dn({seed:xe,size:160,preset:Se});G=e,_e=vn(e,{worldSize:26,baseY:0,chunks:6}),ve=An({terrain:e,seed:xe,worldSize:26,baseY:0,biomeKeys:Ce}),W=Nn(e,{worldSize:26,baseY:0,maxLakes:3,material:we});for(let e of Ee())e.visible=ye,m.add(e);typeof window<`u`&&(window.__world={seed:xe,preset:Se,active:ye,chunks:_e.children.length,scatter:ve.userData.counts,lakes:W.userData.count})}let Oe=e=>{for(let t of Ee())t.visible=e},ke=null,Ae=new Set;function je(){!G||!W||(m.remove(W),W.userData.dispose?.(),W=Nn(G,{worldSize:26,baseY:0,maxLakes:3,material:we}),W.visible=ye,m.add(W),window.__world&&(window.__world.lakes=W.userData.count))}function Me(){je(),ve&&kn(ve,G,{worldSize:26,baseY:0})}function Ne(){_e&&yn(_e,G,_e.children)}function Pe(e,t,n=1,r=2.2,i=.05){if(!G||!_e)return;let a=G.size,o=26/(a-1),s=(e+13)/o,c=(t+13)/o,l=r/o,u=Math.max(0,Math.floor(s-l)),d=Math.min(a-1,Math.ceil(s+l)),f=Math.max(0,Math.floor(c-l)),p=Math.min(a-1,Math.ceil(c+l)),m=G.height,h=l*.5*2*(l*.5);for(let e=f;e<=p;e++)for(let t=u;t<=d;t++){let r=(t-s)*(t-s)+(e-c)*(e-c);if(r>l*l)continue;let o=m[e*a+t]+n*i*Math.exp(-r/h);m[e*a+t]=o<0?0:o>1?1:o}Ae.clear();for(let e of _e.children){let t=e.userData.chunk;t&&t.i0<=d&&t.i1>=u-1&&t.j0<=p&&t.j1>=f-1&&Ae.add(e)}yn(_e,G,Ae),ke&&clearTimeout(ke),ke=setTimeout(Me,140)}let Fe=[];function Ie(){G&&(Fe.push(G.height.slice()),Fe.length>10&&Fe.shift())}function Le(){return!G||!Fe.length?!1:(G.height.set(Fe.pop()),Ne(),Me(),!0)}let qe={enter(){_e||De(),ye=!0,Oe(!0);for(let e of Te())e.visible=!1;window.__world&&(window.__world.active=!0)},exit(){ye=!1,Oe(!1);for(let e of Te())e.visible=!0;window.__world&&(window.__world.active=!1)},reroll(){return xe=Math.random()*1e9|0,Fe.length=0,De(),qe.enter(),xe},reset(){return Fe.length=0,De(),qe.enter(),xe},setPreset(e){return un.includes(e)&&(Se=e,Fe.length=0,De(),qe.enter()),Se},sculpt:Pe,repoolWater:je,snapshot:Ie,undo:Le,get terrainGroup(){return _e},get canUndo(){return Fe.length>0},get active(){return ye},get seed(){return xe},get preset(){return Se},get presets(){return un}};R.group.remove(R.key),m.add(R.key),R.key.castShadow=!0,R.key.shadow.mapSize.set(2048,2048),R.key.shadow.bias=-18e-5,R.key.shadow.normalBias=.028,m.add(R.key.target);function Je(){let e=R.key.shadow.camera,t=R.extent+4.5;e.left=-t,e.right=t,e.top=t,e.bottom=-t,e.near=1,e.far=48,e.updateProjectionMatrix(),l.shadowMap.needsUpdate=!0}Je();let Ye=new be(p.x,p.y),K=new B(p.x,p.y,{minFilter:o,magFilter:o,depthBuffer:!0,stencilBuffer:!1,depthTexture:Ye}),Xe=new B(p.x,p.y,{minFilter:o,magFilter:o,depthBuffer:!1,stencilBuffer:!1}),Ze=new B(p.x,p.y,{minFilter:o,magFilter:o,depthBuffer:!1,stencilBuffer:!1}),Qe=new B(p.x,p.y,{minFilter:o,magFilter:o,depthBuffer:!1,stencilBuffer:!1}),q=Math.max(1,Math.floor(p.x/2)),$e=Math.max(1,Math.floor(p.y/2)),et=new B(q,$e,{minFilter:o,magFilter:o,depthBuffer:!1,stencilBuffer:!1}),tt=new B(q,$e,{minFilter:o,magFilter:o,depthBuffer:!1,stencilBuffer:!1}),nt=new me,rt=new s(-1,1,1,-1,0,1),it=new n(new u(2,2));nt.add(it);let J=new L({vertexShader:er,fragmentShader:ir,uniforms:{uScene:{value:K.texture},uTime:{value:0},uResolution:{value:new F(p.x,p.y)},uGrain:{value:1},uChroma:{value:1},uExposure:{value:1},uAces:{value:0},uBloom:{value:et.texture},uBloomStrength:{value:0},uGrade:{value:0},uGradeTint:{value:w.grade.tint},uGradeLift:{value:w.grade.lift},uGradeSat:{value:1},uGradeContrast:{value:1}}}),at=new L({vertexShader:er,fragmentShader:cr,uniforms:{uScene:{value:K.texture},uThreshold:{value:.78}}}),ot=new L({vertexShader:er,fragmentShader:lr,uniforms:{uScene:{value:et.texture},uDir:{value:new F}}});function st(e){at.uniforms.uScene.value=e.texture,Y(at,et),ot.uniforms.uScene.value=et.texture,ot.uniforms.uDir.value.set(1.6/q,0),Y(ot,tt),ot.uniforms.uScene.value=tt.texture,ot.uniforms.uDir.value.set(0,1.6/$e),Y(ot,et),J.uniforms.uBloom.value=et.texture;let t=1-f.clamp(w.sunArc.y*2.2,0,1);J.uniforms.uBloomStrength.value=.85*(.32+.95*t)}let ct=e=>{let t=e.map(e=>new I(e));for(;t.length<8;)t.push(new I(0,0,0));return t},lt=[`night`,`dawn`,`noon`,`dusk`],ut={inkgold:lt.map(e=>ct(hr[e])),terminal:lt.map(e=>ct(gr[e]))},dt=new L({vertexShader:er,fragmentShader:ar,uniforms:{uScene:{value:Xe.texture},uResolution:{value:new F(p.x,p.y)},uPixelSize:{value:mr},uPalette:{value:ut.inkgold[2]},uPaletteB:{value:ut.inkgold[2]},uPaletteBlend:{value:0},uPaletteSize:{value:5}}}),pt=new L({vertexShader:er,fragmentShader:ur,uniforms:{uScene:{value:Xe.texture},uResolution:{value:new F(p.x,p.y)},uGridWidth:{value:160},uDither:{value:.55},uPalette:{value:pr(dr[`8-bit`].palette)},uPaletteSize:{value:1},uUsePalette:{value:1}}}),mt={};for(let e of fr)mt[e]=dr[e].palette?pr(dr[e].palette):null;let ht=new L({vertexShader:er,fragmentShader:or,uniforms:{uScene:{value:Xe.texture},uDepth:{value:Ye},uResolution:{value:new F(p.x,p.y)},uBands:{value:4},uToonGain:{value:1.7},uToonGamma:{value:.6},uToonFloor:{value:w.toonFloor},uOutline:{value:w.outline},uNear:{value:.1},uFar:{value:100},uIsPerspective:{value:1}}}),gt=new L({vertexShader:er,fragmentShader:sr,uniforms:{uToon:{value:Ze.texture},uPixel:{value:Qe.texture},uBlend:{value:0}}});function Y(e,t){it.material=e,l.setRenderTarget(t),l.render(nt,rt)}function _t(){C.setViewport(window.innerWidth,window.innerHeight),l.setSize(window.innerWidth,window.innerHeight);let e=l.getDrawingBufferSize(new F);return ee.setSize(e.x,e.y),K.setSize(e.x,e.y),Xe.setSize(e.x,e.y),Ze.setSize(e.x,e.y),Qe.setSize(e.x,e.y),q=Math.max(1,e.x>>1),$e=Math.max(1,e.y>>1),et.setSize(q,$e),tt.setSize(q,$e),te.uniforms.uResolution.value.set(e.x,e.y),J.uniforms.uResolution.value.set(e.x,e.y),dt.uniforms.uResolution.value.set(e.x,e.y),pt.uniforms.uResolution.value.set(e.x,e.y),ht.uniforms.uResolution.value.set(e.x,e.y),e}let vt=3,bt=!1,xt=!1,X=`native`,St=.3,wt=.46,Tt=[`native`,...fr],Et={"16-bit":`16-bit`,"8-bit":`8-bit`,gb:`Game Boy`,modern:`Modern`,native:`Pixel`,"1-bit":`1-bit`};typeof window<`u`&&(window.__mode=vt,window.__vector=bt,window.__era=X);let Dt=0,Ot=performance.now(),kt=typeof window<`u`&&new URLSearchParams(window.location.search).has(`perf`);typeof window<`u`&&(window.__perf=kt),kt&&(l.info.autoReset=!1);let At=null;typeof window<`u`&&(window.__loaded=!1);let jt=0,Mt=new V(1,1,1),Nt=!1;function Ft(e){let t=xt?ut.terminal:ut.inkgold,n=e%1*4,r=Math.floor(n)%4;dt.uniforms.uPalette.value=t[r],dt.uniforms.uPaletteB.value=t[(r+1)%4],dt.uniforms.uPaletteBlend.value=n-Math.floor(n)}function It(e){let t=dr[e];t&&(pt.uniforms.uGridWidth.value=t.gridWidth,pt.uniforms.uDither.value=t.dither,pt.uniforms.uUsePalette.value=+!!t.palette,t.palette&&(pt.uniforms.uPalette.value=mt[e],pt.uniforms.uPaletteSize.value=t.palette.length))}function Lt(){X!==`native`&&It(X)}let Z=()=>X===`native`?dt:pt;function Rt(e,t){pe(!0),m.environment=ge(),N.visible=!1,l.setRenderTarget(ee),l.render(m,e),N.visible=!0,l.setRenderTarget(K),l.render(m,e),st(K),J.uniforms.uAces.value=1,J.uniforms.uGrade.value=1,J.uniforms.uGrain.value=0,J.uniforms.uChroma.value=0,Y(J,t)}function zt(e,t){let n=!bt&&(vt===1||vt===2);if(pe(n),m.environment=n?ge():null,J.uniforms.uBloomStrength.value=0,N.visible=!1,l.setRenderTarget(ee),l.render(m,C.camera),N.visible=!0,vt===1&&!n)l.setRenderTarget(t),l.render(m,C.camera);else if(vt===1)l.setRenderTarget(K),l.render(m,C.camera),st(K),J.uniforms.uAces.value=1,J.uniforms.uGrade.value=1,J.uniforms.uGrain.value=0,J.uniforms.uChroma.value=0,Y(J,t);else if(l.setRenderTarget(K),l.render(m,C.camera),vt===2)n&&st(K),J.uniforms.uAces.value=+!!n,J.uniforms.uGrade.value=+!!n,J.uniforms.uGrain.value=1,J.uniforms.uChroma.value=1,Y(J,t);else{J.uniforms.uAces.value=0,J.uniforms.uGrade.value=0,J.uniforms.uGrain.value=0,J.uniforms.uChroma.value=0,Y(J,Xe);let n=C.camera;ht.uniforms.uNear.value=n.near,ht.uniforms.uFar.value=n.far,ht.uniforms.uIsPerspective.value=+!!n.isPerspectiveCamera;let r=e.era?(It(e.era),pt):Z();e.kind===`pixel`?(Y(r,t),window.__style=`pixel`):e.kind===`toon`?(Y(ht,t),window.__style=`toon`):(Y(ht,Ze),Y(r,Qe),gt.uniforms.uBlend.value=e.blend,Y(gt,t),window.__style=`blend`)}}function Bt(){let e=Vt(),t=e.kind===`toon`?1:e.kind===`blend`?1-e.blend:0;return te.uniforms.uChromaScale.value=f.lerp(1,.5,t),e}function Vt(){if(vt===1||vt===2)return{kind:`none`};if(vt===7)return{kind:`pixel`};if(vt===8)return{kind:`toon`};let e=C.styleT;return window.__styleT=e,e<=St?{kind:`toon`}:e>=wt?{kind:`pixel`,era:e<.62?`16-bit`:e<.8?`8-bit`:`gb`}:{kind:`blend`,blend:f.smoothstep(e,St,wt),era:`16-bit`}}function Ht(e){return vt===1||vt===2?``:bt&&vt!==7&&vt!==8?`Vector`:e.kind===`toon`?`Toon`:e.kind===`pixel`?Et[e.era||X]||`Pixel`:e.kind===`blend`?`Toon → `+(Et[e.era]||`Pixel`):``}function Ut(e,t,{shadowsOn:n=!0,seasonTarget:r=0}={}){if(kt){let e=l.info;At={calls:e.render.calls,tris:e.render.triangles,programs:e.programs?e.programs.length:0,geo:e.memory.geometries,tex:e.memory.textures},e.reset()}M.material.uniforms.uTime.value=t,J.uniforms.uTime.value=t,w.update(e),R.key.position.copy(w.sunDir).multiplyScalar(24),R.key.color.copy(w.sunColor),R.key.intensity=w.sunIntensity,R.fill.color.copy(w.hemiSky),R.fill.groundColor.copy(w.hemiGround),P.value=w.windowGlow,de.setSun(w.sunArc),de.setParams(w.skyParams),J.uniforms.uGradeSat.value=w.grade.sat,J.uniforms.uGradeContrast.value=w.grade.contrast,m.environmentIntensity=.34*(1-.6*f.clamp(w.sunArc.y*1.5,0,1));let i=z.overcast;R.key.intensity*=1-.5*i,R.key.color.lerp(h,.45*i),R.fill.intensity=1+.7*i;let a=f.smoothstep(w.sunDir.y,.06,.34),o=f.lerp(.28,1,1-w.windowGlow),s=n?a*o:0;R.key.shadow.intensity=.72*s,Ve.value=.52*s,(n&&!Nt||Mt.distanceToSquared(w.sunDir)>2e-5)&&(l.shadowMap.needsUpdate=!0,Mt.copy(w.sunDir)),Nt=n;let c=1-w.windowGlow;Be.setRGB(f.lerp(.46,1,c),f.lerp(.52,1,c),f.lerp(.74,1,c)),J.uniforms.uExposure.value=w.exposure,ht.uniforms.uToonGain.value=w.toonGain,l.setClearColor(w.horizon,1),Ft(w.t),window.__t=w.t,ie.update(e,t,w),R.update(t),ae.update(e,t,w),k.uniforms.uWakeCount.value=ae.wakeCount,z.update(e,t),k.uniforms.uRainCount.value=z.rainDropCount;let u=z.fog*(1-c);m.fog.density=z.fog*g,y.copy(w.horizon).lerp(_,.85*u),m.fog.color.copy(y),l.setClearColor(y,1),Ge.value=z.fog,M.material.uniforms.uFogAmt.value=.7*z.fog,He.value=z.snow,Ue.value=z.cloud*.55,We.x+=e*.018,We.y+=e*.009,Ke.value+=(r-Ke.value)*Math.min(1,e*1.5),se.update(e,t,w,z);let d=Vt(),p=d.kind===`pixel`||d.kind===`blend`?`pixel`:bt||d.kind===`toon`?`charm`:`realistic`;ue.update(e,t,w,z,p),Dt++;let v=performance.now();v-Ot>=1e3&&(window.__fps=Dt,kt&&At&&(console.log(`[perf] ${Dt} fps · ~${(1e3/Math.max(1,Dt)).toFixed(2)} ms · calls ${At.calls} · tris ${At.tris} · programs ${At.programs} · geo ${At.geo} · tex ${At.tex}`),window.__perfInfo={fps:Dt,...At}),Dt=0,Ot=v);let[b,x,S]=E;if(k.uniforms.uPrev.value=b.texture,k.uniforms.uCurr.value=x.texture,l.setRenderTarget(S),l.render(D,O),E=[x,S,b],te.uniforms.uHeight.value=E[1].texture,jt<2&&typeof document<`u`&&++jt===2){let e=document.getElementById(`lgr-loader`);e&&e.classList.add(`gone`),window.__loaded=!0}}function Wt(e){vt=e,window.__mode=vt}function Gt(){return bt=!bt,ze.value=+!!bt,window.__vector=bt,bt}function qt(e){return bt=!!e,ze.value=+!!bt,window.__vector=bt,bt}function Yt(){return X=Tt[(Tt.indexOf(X)+1)%Tt.length],window.__era=X,Lt(),X}function Zt(){return xt=!xt,xt}return{updateWorld:Ut,decideStyle:Bt,renderCityPipeline:zt,renderCityBeautyTo:Rt,styleHintName:Ht,setPostMode:Wt,toggleVector:Gt,setVector:qt,cycleEra:Yt,togglePalette:Zt,get mode(){return vt},get vector(){return bt},get sceneEra(){return X},renderer:l,drawBuffer:p,scene:m,rig:C,sunRig:w,SIM:256,targets:E,simScene:D,simCamera:O,simMaterial:k,grabRT:ee,card:j,backdrop:M,WATER_SIZE:28,water:N,waterMaterial:te,windowGlow:P,landmarkFactory:ne,city:R,cityLife:ie,waterLife:ae,weatherRig:z,clouds:se,inspector:le,world:qe,fitShadowFrustum:Je,SHADOW_DIST:24,sceneDepth:Ye,sceneRT:K,filmicRT:Xe,toonRT:Ze,pixelRT:Qe,postScene:nt,postCamera:rt,postQuad:it,filmicMaterial:J,pixelMaterial:dt,pixelkitMaterial:pt,toonMaterial:ht,mixMaterial:gt,PALCACHE:ut,ERA_TEX:mt,runPass:Y,OVERCAST_GREY:h,FOG_DENSITY:g,FOG_NIGHT_TINT:_,_fogColor:y,resize:_t}}var vr=`lgr_hints_`,yr=!1;function br(){if(yr||typeof document>`u`)return;yr=!0;let e=document.createElement(`style`);e.textContent=`
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
  }`,document.head.appendChild(e)}function xr({key:e,title:t=`Tips`,tips:n=[],force:r=!1}={}){let i={key:e,shown:!1,dismissed:!1,seen:!1};if(typeof window<`u`&&(window.__hints=i),typeof document>`u`||!e)return{dismiss(){},el:null};let a=vr+e,o=!1;try{o=localStorage.getItem(a)===`1`}catch{}if(o&&!r)return i.seen=!0,{dismiss(){},el:null};br();let s=!!(window.matchMedia&&window.matchMedia(`(prefers-reduced-motion: reduce)`).matches),c=document.createElement(`div`);c.className=`lgr-hints`,c.innerHTML=`<div class="lgr-hints-card">
    <div class="lgr-hints-h">${t}</div>
    <ul>${n.map(e=>`<li>${e}</li>`).join(``)}</ul>
    <button class="lgr-hints-ok">Got it</button>
    <button class="lgr-hints-x" title="Dismiss (Esc)" aria-label="Dismiss">✕</button>
  </div>`,document.body.appendChild(c),i.shown=!0,s?c.classList.add(`on`):requestAnimationFrame(()=>c.classList.add(`on`));let l=!1;function u(e=!0){if(!l){if(l=!0,e)try{localStorage.setItem(a,`1`)}catch{}i.dismissed=!0,window.removeEventListener(`keydown`,d),c.classList.remove(`on`),setTimeout(()=>c.remove(),s?0:300)}}function d(e){e.key===`Escape`&&u(!0)}return window.addEventListener(`keydown`,d),c.querySelector(`.lgr-hints-ok`).addEventListener(`click`,()=>{navigator.vibrate?.(10),u(!0)}),c.querySelector(`.lgr-hints-x`).addEventListener(`click`,()=>{navigator.vibrate?.(10),u(!0)}),{dismiss:u,el:c}}var Sr=null;function Cr(){if(Sr)return Sr;let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return n.addColorStop(0,`rgba(0,0,0,0.60)`),n.addColorStop(.55,`rgba(0,0,0,0.32)`),n.addColorStop(1,`rgba(0,0,0,0.0)`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,128/2,0,Math.PI*2),t.fill(),Sr=new U(e),Sr.colorSpace=ce,Sr}function wr({w:e=.6,d:t=.6,x:r=0,y:i=.002,z:a=0,opacity:o=.5,rotation:s=0}={}){let c=new n(new u(e,t),new S({map:Cr(),transparent:!0,opacity:o,depthWrite:!1,toneMapped:!1}));return c.rotation.x=-Math.PI/2,c.rotation.z=s,c.position.set(r,i,a),c.renderOrder=-1,c.raycast=()=>{},c}function Tr({yawLimit:e=80,pitchUp:t=32,pitchDown:n=20,sensitivity:r=.16,keySpeed:i=70,damp:a=9}={}){let o=Math.PI/180,s=(e,t,n)=>e<t?t:e>n?n:e,c=0,l=0,u=0,d=0;return{addDrag(i,a){u=s(u-i*r,-e,e),d=s(d-a*r,-n,t)},addKeys(r,{left:a,right:o,up:c,down:l}){let f=i*r;a&&(u=s(u+f,-e,e)),o&&(u=s(u-f,-e,e)),c&&(d=s(d+f,-n,t)),l&&(d=s(d-f,-n,t))},recenter(){u=0,d=0},update(e){let t=1-Math.exp(-a*e);c+=(u-c)*t,l+=(d-l)*t},get yaw(){return c*o},get pitch(){return l*o},get active(){return Math.abs(c)>.05||Math.abs(l)>.05}}}var Er=null;function Dr(){if(Er)return Er;let e=document.createElement(`canvas`);e.width=e.height=256;let t=e.getContext(`2d`),n=t.createRadialGradient(256/2,256/2,256*.32,256/2,256/2,256*.72);return n.addColorStop(0,`rgba(0,0,0,0)`),n.addColorStop(1,`rgba(0,0,0,1)`),t.fillStyle=n,t.fillRect(0,0,256,256),Er=new U(e),Er.colorSpace=ce,Er}function Or({strength:e=.55,dist:t=.5}={}){let r=new n(new u(1,1),new S({map:Dr(),transparent:!0,opacity:e,depthTest:!1,depthWrite:!1,toneMapped:!1}));r.renderOrder=9999,r.raycast=()=>{},r.frustumCulled=!1;let i=new V;return r.fit=e=>{e.getWorldDirection(i),r.position.copy(e.position).addScaledVector(i,t),r.quaternion.copy(e.quaternion);let n=2*Math.tan(f.degToRad(e.fov)*.5)*t*1.05;r.scale.set(n*e.aspect,n,1)},r}var kr=``+new URL(`office-dressed2-CNZL1Pge.png`,import.meta.url).href,Ar=``+new URL(`office-night2-Tdv47G8J.png`,import.meta.url).href,jr=``+new URL(`office-modern-CQqt-EK1.png`,import.meta.url).href,Mr=``+new URL(`office-charm2-qAn3JlVo.png`,import.meta.url).href;function Nr(){let e=document.createElement(`canvas`);e.width=e.height=256;let t=e.getContext(`2d`);t.fillStyle=`#6e4a2c`,t.fillRect(0,0,256,256);for(let e=0;e<150;e++){let e=Math.random()*256,n=.7+Math.random()*.7;t.strokeStyle=`rgba(${Math.round(110*n)},${Math.round(74*n)},${Math.round(44*n)},${.16+Math.random()*.28})`,t.lineWidth=.5+Math.random()*1.6,t.beginPath(),t.moveTo(e,0);for(let n=0;n<=256;n+=14)t.lineTo(e+Math.sin(n*.05+e)*3,n);t.stroke()}t.strokeStyle=`rgba(30,18,8,0.5)`,t.lineWidth=2;for(let e of[256*.34,256*.67])t.beginPath(),t.moveTo(0,e),t.lineTo(256,e),t.stroke();let n=new U(e);return n.colorSpace=ce,n.wrapS=n.wrapT=_e,n}function Q(e,t,r,i,{rough:a=.62,metal:o=0,x:s=0,y:l=0,z:u=0,emissive:d=null,emissiveIntensity:f=1,map:p=null,mapRepeat:m=null}={}){let h=p;p&&m&&(h=p.clone(),h.needsUpdate=!0,h.wrapS=h.wrapT=_e,h.repeat.set(m[0],m[1]));let g=new n(new H(e,t,r),new c({color:h?`#ffffff`:i,roughness:a,metalness:o,...h?{map:h}:{},...d?{emissive:d,emissiveIntensity:f}:{}}));return g.position.set(s,l,u),g}function Pr(){let e=document.createElement(`canvas`);e.width=512,e.height=304;let t=e.getContext(`2d`);t.fillStyle=`#fff`,t.fillRect(0,0,512,304);let n=.13*512,r=.87*512,i=.1*304,a=.66*304;return t.filter=`blur(7px)`,t.fillStyle=`#000`,t.beginPath(),t.moveTo(80.56,i),t.arcTo(r,i,r,a,14),t.arcTo(r,a,n,a,14),t.arcTo(n,a,n,i,14),t.arcTo(n,i,r,i,14),t.closePath(),t.fill(),t.filter=`none`,new U(e)}function Fr({tier:e=`corner`,layout:t=`straight-on`}={}){let r=new me,i=new fe(43,1,.1,100),o=new V(0,1.62,4.35),s=new V(0,1.12,-1);i.position.copy(o),i.lookAt(s);let l=Tr({yawLimit:80,pitchUp:34,pitchDown:20}),d=new ye(0,0,0,`YXZ`),p=new _,m=new a;r.add(m);let g=new a,v=new a,y=new a,b=new a,x=new a;m.add(g,v,y,b,x);let C=[],w=`#4a3322`,E=`#3a2618`,O=`#5b3d27`,k=`#6e4a30`,ee=`#5a5650`,A=Nr();g.add(Q(11,.2,11,`#3c2a1c`,{rough:.5,y:-.1,map:A,mapRepeat:[5,5]})),g.add(Q(11,.2,11,`#3a2a1d`,{rough:.9,y:3,map:A,mapRepeat:[4,4]}));for(let e of[-2.4,0,2.4])g.add(Q(.18,.16,7.4,E,{rough:.7,x:e,y:2.9,z:0,map:A,mapRepeat:[1,4]}));for(let e of[-2,.4])g.add(Q(7.4,.16,.18,E,{rough:.7,x:0,y:2.88,z:e,map:A,mapRepeat:[4,1]}));function M(e){let t=new a;t.add(Q(.2,3.2,8,w,{rough:.7,x:e*3.6,y:1.5,z:0,map:A,mapRepeat:[3,1.4]}));let r=e*3.45;t.add(Q(.06,.22,8,E,{x:r,y:.13,z:0})),t.add(Q(.08,.16,8,E,{x:r,y:2.84,z:0})),t.add(Q(.05,.05,8,E,{x:r,y:1,z:0}));for(let e of[-2.6,-1.3,1.3,2.6])t.add(Q(.05,1.6,.06,E,{x:r,y:1.95,z:e}));for(let e of[-2.6,-1.3,1.3,2.6])t.add(Q(.05,.7,.06,E,{x:r,y:.6,z:e}));let i=new n(new u(1.5,1),new c({map:Ur(e),roughness:.8}));i.position.set(e*3.49,1.7,.4),i.rotation.y=-e*Math.PI/2,t.add(Q(.06,1.18,1.68,`#2a1c10`,{x:e*3.52,y:1.7,z:.4}),i);let o=new n(new u(1,1.3),new c({map:Ur(-e),roughness:.8}));o.position.set(e*3.49,1.78,-2),o.rotation.y=-e*Math.PI/2,t.add(Q(.06,1.46,1.16,`#2a1c10`,{x:e*3.52,y:1.78,z:-2}),o),t.add(Q(.12,.3,.16,`#2a1c10`,{x:e*3.4,y:2.2,z:2.2}));let s=new j(new z({map:Hr(),color:`#ffcf8a`,transparent:!0,opacity:.5,depthWrite:!1,blending:2}));return s.scale.set(.6,.75,1),s.position.set(e*3.32,2.34,2.2),s.raycast=()=>{},t.add(s),t}g.add(M(-1),M(1));let N=new a;N.add(Q(.3,1.9,1.5,O,{rough:.5,y:.95}));for(let e of[.4,.95,1.5])N.add(Q(.3,.04,1.46,`#3a2c1e`,{y:e}));let P=[`#7a3a2a`,`#2a4a6a`,`#b08a3a`,`#3a5a3a`,`#6a2a4a`,`#8a5a2a`];for(let e of[.6,1.15,1.7])for(let t=0;t<7;t++)N.add(Q(.18,.3,.11,P[(t+Math.round(e))%P.length],{x:.02,y:e-.06,z:-.6+t*.17}));N.position.set(-3.34,0,-1.9),g.add(N),g.add(wr({w:1,d:1.8,x:-3.2,y:.02,z:-1.9,opacity:.4}));let F=new a;F.add(Q(.5,.1,.5,`#4a3526`,{rough:.7,y:.45})),F.add(Q(.5,.55,.08,`#4a3526`,{rough:.7,y:.72,z:-.21}));for(let[e,t]of[[-.2,-.2],[.2,-.2],[-.2,.2],[.2,.2]])F.add(Q(.05,.45,.05,`#2a1c10`,{x:e,y:.22,z:t}));F.position.set(2.7,0,2.6),F.rotation.y=-.5,g.add(F),g.add(wr({w:.7,d:.7,x:2.7,y:.02,z:2.6,opacity:.42}));let re=new u(3,2.5),L=new u(3,2.5),R=new S({color:`#ffffff`,toneMapped:!1}),ie=new S({color:`#ffffff`,toneMapped:!1}),ae=-3.7,oe=1.55,B=f.degToRad(30),se=3/2*Math.cos(B),le=ae+3/2*Math.sin(B),ue=new n(re,R);ue.position.set(-se,oe,le),ue.rotation.y=B;let pe=new n(L,ie);pe.position.set(se,oe,le),pe.rotation.y=-B;let ge=new S({color:`#ffffff`,toneMapped:!1}),_e=new n(new u(5.4,2.6),ge);_e.position.set(0,oe,-3.5500000000000003),_e.visible=!1,y.add(ue,pe,_e);let U=new a;U.add(Q(.08,2.7,.08,E,{x:0,y:oe,z:le+3/2*Math.sin(B)+.02}));for(let[e,t,n]of[[-se,le,B],[se,le,-B]]){let r=new a;r.add(Q(3.05,.09,.09,E,{y:1.3})),r.add(Q(3.05,.09,.09,E,{y:-1.25})),r.add(Q(.09,2.6,.09,E,{x:-1.5})),r.position.set(e,oe,t),r.rotation.y=n,U.add(r)}U.add(Q(5.4,.5,.3,O,{x:0,y:.25,z:le+.5})),g.add(U);let W=new a;W.add(Q(11,3.2,.2,w,{rough:.7,x:0,y:1.5,z:ae-.05,map:A,mapRepeat:[4,1.4]})),W.add(Q(5.8,.14,.12,E,{x:0,y:2.9000000000000004,z:-3.5})),W.add(Q(5.8,.14,.12,E,{x:0,y:oe-1.35,z:-3.5})),W.add(Q(.14,2.84,.12,E,{x:-2.8,y:oe,z:-3.5})),W.add(Q(.14,2.84,.12,E,{x:2.8,y:oe,z:-3.5})),W.add(Q(.09,2.6,.09,E,{x:0,y:oe,z:-3.49})),W.add(Q(5.4,.5,.3,O,{x:0,y:.25,z:-3.35}));let G=new a;G.add(Q(2.4,.9,.55,O,{rough:.42,y:.45,z:0})),G.add(Q(2.46,.06,.58,k,{rough:.3,y:.91,z:0}));for(let e of[-.62,0,.62])G.add(Q(.66,.72,.03,`#4a3120`,{x:e,y:.45,z:.285}));for(let e of[-.62,0,.62])G.add(Q(.05,.04,.05,`#caa15a`,{x:e+.2,y:.45,z:.31,metal:.6}));let be=[`#7a3a2a`,`#2a4a6a`,`#b08a3a`,`#3a5a3a`];for(let e=0;e<4;e++)G.add(Q(.1,.26+e%2*.05,.2,be[e],{x:-.95+e*.13,y:1.07,z:-.06}));G.add(Q(.04,.34,.42,`#241a12`,{x:.7,y:1.12,z:-.02})),G.position.set(-3.9,0,-3.25),W.add(G),W.add(wr({w:2.8,d:.95,x:-3.9,y:.02,z:-3.25,opacity:.45}));for(let[e,t]of[[-3.55,-1],[3.55,1]]){let r=new a,i=new n(new u(.78,.98),new c({map:Ur(t),roughness:.82}));i.position.z=.05,r.add(Q(.06,1.12,.92,`#241a10`,{}),i),r.position.set(e,1.45,-3.5700000000000003),W.add(r)}for(let e of[-3.55,3.55]){W.add(Q(.16,.32,.13,`#2a1c10`,{x:e,y:2.35,z:-3.5}));let t=new j(new z({map:Hr(),color:`#ffcf8a`,transparent:!0,opacity:.5,depthWrite:!1,blending:2}));t.scale.set(.55,.7,1),t.position.set(e,2.5,-3.42),t.raycast=()=>{},W.add(t)}W.visible=!1,g.add(W),g.add(Q(.4,.06,.4,`#1a130c`,{y:2.94,z:1.3}));let xe=new n(new de(.16,20),new S({color:`#ffe6b0`,toneMapped:!1}));xe.position.set(0,2.9,1.3),xe.rotation.x=Math.PI/2,g.add(xe);for(let[e,t]of[[-1.6,-1],[1.6,-1],[-1.6,-2.6],[1.6,-2.6],[0,-2.6]]){g.add(Q(.28,.05,.28,`#1a130c`,{y:2.95,x:e,z:t}));let r=new n(new de(.1,16),new S({color:`#ffe6b0`,toneMapped:!1}));r.position.set(e,2.915,t),r.rotation.x=Math.PI/2,r.raycast=()=>{},g.add(r)}g.add(Lr(C,{x:-3.46,y:2.15,z:.2,ry:Math.PI/2,face:`#efe2c8`,rim:`#2a1c10`})),g.add(Q(3.4,.03,2.4,`#3a1410`,{rough:.98,x:0,y:.012,z:1.95})),g.add(Q(3,.04,2,`#6e2a26`,{rough:.96,x:0,y:.02,z:1.95}));let Se=new a;Se.add(Q(.32,.32,.32,`#7a4a2a`,{rough:.8,y:.16}));for(let e=0;e<6;e++){let t=Q(.05,.55,.13,`#356a32`,{rough:.7,y:.32});t.geometry.translate(0,.27,0),t.rotation.z=(e/6-.5)*1.1,t.rotation.x=Math.sin(e*1.3)*.22,Se.add(t)}Se.position.set(2.7,0,.4),g.add(Se),g.add(wr({w:.7,d:.7,x:2.7,y:.03,z:.4,opacity:.45})),v.add(Q(11,.2,11,`#403d38`,{rough:.85,y:-.1})),v.add(Q(11,.2,11,`#1c1a17`,{rough:.95,y:2.8})),v.add(Q(7,3,.2,ee,{rough:.92,x:0,y:1.4,z:-2.9})),v.add(Q(.2,3,6,ee,{rough:.92,x:-3.2,y:1.4,z:-.2})),v.add(Q(.2,3,6,ee,{rough:.92,x:3.2,y:1.4,z:-.2}));for(let e of[-1.6,-.4]){let t=new n(new D(.07,.07,6,10),new c({color:`#6b6258`,roughness:.6,metalness:.4}));t.rotation.z=Math.PI/2,t.position.set(0,2.62,e),v.add(t)}let Ce=new S({color:`#ffffff`,toneMapped:!1}),we=new n(new u(1.9,1.2),Ce);we.position.set(0,1.5,-2.79),v.add(we),v.add(Q(2.06,1.36,.06,`#241a12`,{x:0,y:1.5,z:-2.83})),v.add(Q(.04,.34,.04,`#1a1410`,{x:-.1,y:2.45,z:-.4}));let Te=new n(new de(.1,16),new S({color:`#ffdb8a`,toneMapped:!1}));Te.position.set(-.1,2.26,-.4),Te.rotation.x=Math.PI/2,v.add(Te);let Ee=new a;Ee.add(Q(1.3,.05,.32,`#3a2c1e`,{x:0,y:0,z:0}));let De=[`#7a3a2a`,`#2a4a6a`,`#b08a3a`,`#3a5a3a`,`#6a2a4a`];for(let e=0;e<8;e++)Ee.add(Q(.12,.34,.24,De[e%De.length],{x:-.55+e*.14,y:.2,z:0}));Ee.position.set(-2.3,1.5,-2.66),v.add(Ee);let Oe=new a;Oe.add(Q(.34,.34,.34,`#7a4a2a`,{y:.17}));let ke=new a;for(let e=0;e<6;e++){let t=Q(.05,.5,.14,`#3a7a3a`,{rough:.7});t.geometry.translate(0,.25,0),t.rotation.z=(e/6-.5)*1.2,t.rotation.x=Math.sin(e)*.25,ke.add(t)}ke.position.y=.34,Oe.add(ke),Oe.position.set(2.45,0,-1.4),v.add(Oe),v.add(Lr(C,{x:1.9,y:2.1,z:-2.78,ry:0,face:`#d8d2c4`,rim:`#1a130c`}));let Ae=new a;Ae.add(Q(3.4,.12,1.5,k,{rough:.32,y:.86,z:1.5,map:A,mapRepeat:[3,1.4]})),Ae.add(Q(3.2,.78,1.36,O,{y:.46,z:1.5,map:A,mapRepeat:[3,1]}));for(let e of[.66,.4,.14])Ae.add(Q(.9,.2,.04,`#4a3120`,{x:1.05,y:e,z:2.2}));Ae.add(Q(.12,.04,.04,`#caa15a`,{x:1.05,y:.66,z:2.23,metal:.6}));let je=new n(new D(.05,.045,.1,16),new c({color:`#d8cbb4`,roughness:.6}));je.position.set(-.55,.97,1.95);let Me=new n(new te(.035,.012,8,14),new c({color:`#d8cbb4`,roughness:.6}));Me.position.set(-.61,.97,1.95),Me.rotation.y=Math.PI/2,Ae.add(je,Me);let Ne=new j(new z({map:Hr(),color:`#fff4e0`,transparent:!0,opacity:0,depthWrite:!1,blending:2}));Ne.scale.set(.12,.18,1),Ne.position.set(-.55,1.05,1.95),Ne.raycast=()=>{},Ae.add(Ne),Ae.add(Q(.26,.03,.34,`#efe7d4`,{rough:.85,x:.5,y:.935,z:1.9})),m.add(Ae);let Pe=new a;Pe.add(Q(.06,.5,.06,`#2a1c10`,{x:-1.15,y:1.15,z:1.6}));let Fe=new n(new ne(.22,.26,16,1,!0),new c({color:`#c2802e`,roughness:.5,side:2,emissive:`#3a2208`,emissiveIntensity:.6}));Fe.position.set(-1.15,1.42,1.6),Pe.add(Fe);let Ie=new T(`#ffb15a`,7,7,1.8);Ie.position.set(-1.15,1.34,1.6),Pe.add(Ie);let Le=new j(new z({map:Hr(),color:`#ffcf8a`,transparent:!0,opacity:.55,depthWrite:!1,blending:2}));Le.scale.set(.85,.85,1),Le.position.set(-1.15,1.35,1.6),Le.raycast=()=>{},Pe.add(Le),Pe.position.x=-.3,m.add(Pe);let Re=new a;Re.add(Q(.62,.03,.42,`#1c1c20`,{y:.93,z:1.5,metal:.4,rough:.4}));let ze=new n(new H(.62,.4,.025),new c({color:`#0a0c10`,emissive:`#2a4a6a`,emissiveIntensity:.7,roughness:.3}));ze.position.set(0,1.14,1.31),ze.rotation.x=-.32,Re.add(ze),Re.userData.role=`laptop`,m.add(Re);let Be=new a;Be.add(Q(.26,.07,.34,`#15151a`,{x:1,y:.93,z:1.5}));let Ve=Q(.3,.06,.08,`#101015`,{x:1,y:1,z:1.34,emissive:`#234a6a`,emissiveIntensity:.4});Be.add(Ve),Be.userData.role=`phone`,m.add(Be);let He=new h(`#8a6a42`,`#1c130a`,.78);r.add(He);let Ue=new he(`#ffd9a0`,9,9,.7,.5,1.2);Ue.position.set(0,2.95,1.3),Ue.target.position.set(0,.86,1.5),r.add(Ue,Ue.target);let We=Rr(!1),Ge=Rr(!0),Ke=.62,qe=1.32,Je=1.22,Ye=1.78,K=new j(new z({map:We,transparent:!0,depthWrite:!1}));K.scale.set(Ke,Ke,1),K.position.set(qe,Je,Ye),K.userData.role=`cat`,m.add(K);let Xe=new j(new z({map:Br(),transparent:!0,depthWrite:!1,opacity:0}));Xe.scale.set(.3,.3,1),Xe.raycast=()=>{},m.add(Xe);let Ze=0;function Qe(){Ze=1.3}let q=-.95,$e=1.06,et=1.95,tt=.62,nt=.42,rt=.34,it=new a;it.position.set(q,$e,et),it.add(Q(tt,.05,rt,`#3a3026`,{y:-.19}));let J=new n(new H(tt-.04,nt-.08,rt-.04),new c({color:`#1f9fc0`,transparent:!0,opacity:.26,roughness:.1,emissive:`#0a3a4a`,emissiveIntensity:.4,depthWrite:!1}));J.position.y=.02,it.add(J);for(let e of[-1,1])for(let t of[-1,1])it.add(Q(.03,nt,.03,`#20262c`,{x:e*(tt/2-.015),z:t*(rt/2-.015),metal:.5}));let at=new n(new H(tt,nt,rt),new S({visible:!1}));at.userData.role=`tank`,it.add(at);let ot=new T(`#5fd8ff`,0,3,2);it.add(ot);let st=[Vr(`#e8a23c`),Vr(`#d85a6a`),Vr(`#6cc0e0`)],ct=[],lt=nt/2-.12;for(let e=0;e<3;e++){let t=new j(new z({map:st[e],transparent:!0,depthWrite:!1})),n=.15-e*.015;t.userData={sz:n,sp:.6+e*.22,ph:e*2.1,ax:.21*(.7+.1*e),ay:lt,az:.09000000000000001,prevx:0},t.scale.set(n,n,1),ct.push(t),it.add(t)}let ut=Hr(),dt=[];for(let e=0;e<5;e++){let t=new j(new z({map:ut,color:`#cfeffb`,transparent:!0,opacity:.5,depthWrite:!1}));t.userData={ph:e/5,sp:.16+Math.random()*.06,x:-.1+e%3*.07},t.scale.setScalar(.03+e%2*.015),t.raycast=()=>{},dt.push(t),it.add(t)}let ft=new j(new z({map:ut,color:`#c8a24a`,transparent:!0,opacity:0,depthWrite:!1}));ft.scale.setScalar(.04),ft.raycast=()=>{},it.add(ft);let pt=0;function mt(){pt=3,ft.position.set(-.05,lt,0),ft.material.opacity=1}m.add(it);let ht=new a;for(let e=0;e<8;e++){let t=new j(new z({map:ut,color:`#ffd9a0`,transparent:!0,opacity:0,depthWrite:!1,blending:2}));t.scale.setScalar(.018),t.userData={ph:e*.9,sp:.1+e%3*.04,r:.1+e%4*.03},t.raycast=()=>{},ht.add(t)}ht.position.set(-1.45,1.2,1.6),m.add(ht);let gt=new a,Y=.925;gt.add(wr({w:4,d:2,x:0,y:.045,z:1.55,opacity:.5})),gt.add(wr({w:.95,d:.62,x:0,y:Y,z:1.42,opacity:.42})),gt.add(wr({w:.3,d:.3,x:-.55,y:Y,z:1.95,opacity:.4})),gt.add(wr({w:.42,d:.46,x:.5,y:Y,z:1.9,opacity:.35})),gt.add(wr({w:.42,d:.46,x:1,y:Y,z:1.5,opacity:.42})),gt.add(wr({w:.7,d:.42,x:q,y:Y,z:1.95,opacity:.42})),gt.add(wr({w:.55,d:.4,x:1.32,y:Y,z:1.78,opacity:.4})),gt.add(wr({w:.34,d:.34,x:-1.45,y:Y,z:1.6,opacity:.35})),m.add(gt),[Ae,Pe,Re,Be,K,it,ht,gt].forEach(e=>b.add(e));function _t(e,t,r,i,a,o,s){let c=new n(new H(t,r,i),new S({visible:!1}));c.position.set(a,o,s),c.userData.role=e,x.add(c)}_t(`laptop`,.95,.6,.7,0,1.05,1.4),_t(`phone`,.5,.4,.5,1,.98,1.42),_t(`cat`,.62,.74,.5,qe,Je,Ye),_t(`tank`,tt,nt,.5,q,$e,et);let vt=Ir(),yt={dressed2:new ve().load(kr),night2:new ve().load(Ar),modern:new ve().load(jr),charm:new ve().load(Mr)},bt=[`dressed2`,`night2`,`modern`,`charm`];for(let e of bt)yt[e].colorSpace=ce;let xt=Pr(),X=new n(new u(1,1),new S({map:yt.dressed2,alphaMap:xt,transparent:!0,toneMapped:!1}));X.position.set(0,1.45,-5),X.visible=!1,X.raycast=()=>{},r.add(X);let St=Or({strength:.5});r.add(St);let Ct=`3d`,wt=`painted`;function Tt(){let e=Z===`corner`,t=Ct!==`3d`,n=t&&wt===`painted`;g.visible=e&&!t,v.visible=!e&&!t,y.visible=t||e,X.visible=t,b.visible=!n,Ft()}function Et(e){return Ct=bt.includes(e)?e:`3d`,Ct!==`3d`&&(X.material.map=yt[Ct],X.material.needsUpdate=!0),Tt(),Ct}function Dt(e){return wt=e===`3d`?`3d`:`painted`,Tt(),wt}let Ot=Ie.intensity,kt=ze.material.emissiveIntensity,At=new I;function jt(e,t,n){let r=n?n.windowGlow:0,a=r>.55;K.material.map=a?Ge:We,Ze>0&&(Ze=Math.max(0,Ze-e));let c=Ze>0?Math.sin((1.3-Ze)/1.3*Math.PI):0,u=a?.012*Math.sin(t*1.2):.03*Math.sin(t*2.4);K.scale.set(Ke,Ke*(1+u+.12*c),1),K.position.y=Je+.06*c,Xe.material.opacity=c,Xe.position.set(qe,1.72+.5*(1-Ze/1.3),Ye),Xe.scale.setScalar(.22+.1*c),pt>0&&(pt=Math.max(0,pt-e),ft.position.y=Math.max(-.09,ft.position.y-e*.06),ft.material.opacity=pt>.3?1:pt/.3);for(let e of ct){let n=e.userData,r=Math.sin(t*n.sp+n.ph)*n.ax,i=Math.sin(t*n.sp*.8+n.ph*1.7)*n.ay*.7,a=Math.cos(t*n.sp*.6+n.ph)*n.az,o=pt>0?ft.position.x:r,s=pt>0?ft.position.y:i,c=pt>0?ft.position.z:a,l=pt>0?.05:.1;e.position.x+=(o-e.position.x)*l,e.position.y+=(s-e.position.y)*l,e.position.z+=(c-e.position.z)*l,e.scale.x=(e.position.x>=n.prevx?1:-1)*n.sz,n.prevx=e.position.x}for(let e of dt){let n=(t*e.userData.sp+e.userData.ph)%1;e.position.set(e.userData.x+Math.sin(t*2+e.userData.ph*9)*.015,-.09+2*lt*n,.02),e.material.opacity=.5*Math.sin(n*Math.PI)}ot.intensity=2.6*r,J.material.emissiveIntensity=.4+.9*r,Ie.intensity=Ot*(.97+.03*Math.sin(t*7)*Math.sin(t*2.3)),ze.material.emissiveIntensity=kt*(.85+.15*Math.sin(t*3.1+1)),Ve.material.emissiveIntensity=.4*(.65+.35*Math.sin(t*2.2)),At.setRGB(1,.85,.62),ht.children.forEach((e,n)=>{let i=e.userData,a=(t*i.sp+i.ph)%1;e.position.set(Math.cos(t*.5+i.ph*5)*i.r,-.15+a*.45,Math.sin(t*.4+i.ph*5)*i.r),e.material.opacity=(.1+.18*r)*Math.sin(a*Math.PI)});let m=t*.4%1;Ne.position.y=1.04+m*.22,Ne.position.x=-.55+Math.sin(t*1.5)*.02,Ne.material.opacity=.26*Math.sin(m*Math.PI),Ne.scale.set(.1+m*.08,.16+m*.12,1),ke.rotation.z=Math.sin(t*.8)*.05,ke.rotation.x=Math.sin(t*.6+1)*.04;let h=n?n.t%1:0;for(let e of C)e.rotation.z=-h*Math.PI*2;if(vt.update(e),X.visible){let e=i.position.z-X.position.z,t=2*Math.tan(f.degToRad(i.fov)*.5)*e*1.18;X.scale.set(t*i.aspect,t,1);let n=.55+.45*(1-r);X.material.color.setRGB(n,n*.97,n*.92)}i.position.set(o.x+Math.sin(t*.5)*.04,o.y+Math.sin(t*.7)*.02,o.z),i.lookAt(s),l.update(e),d.set(l.pitch,l.yaw,0,`YXZ`),i.quaternion.multiply(p.setFromEuler(d)),St.fit(i)}function Mt(e,t=e){R.map=e,ie.map=t,R.needsUpdate=!0,ie.needsUpdate=!0}function Nt(e){ge.map=e,ge.needsUpdate=!0}let Pt=`corner`;function Ft(){let e=Pt===`corner`;ue.visible=pe.visible=e,_e.visible=!e||Ct!==`3d`,U.visible=e,W.visible=!e}function It(e){return Pt=e===`straight-on`?`straight-on`:`corner`,Ft(),Pt}function Lt(e){Ce.map=e,Ce.needsUpdate=!0}let Z=e;function Rt(e){Z=e===`basement`?`basement`:`corner`;let t=Z===`corner`;return Tt(),Ue.intensity=t?9:3.2,He.intensity=t?.78:.82,He.color.set(t?`#6a5238`:`#7a5a34`),Z}return Rt(Z),It(t),{scene:r,camera:i,update:jt,setCityTexture:Mt,setStraightCityTexture:Nt,setVignetteTexture:Lt,setFitout:Rt,setSkin:Et,setProps:Dt,setLayout:It,petCat:Qe,feedFish:mt,look:l,vignette:vt,get interactables(){return Ct!==`3d`&&wt===`painted`?x.children:[Re,Be,K,at]},get tier(){return Z},get skin(){return Ct},get props(){return wt},get layout(){return Pt}}}function Ir(){let e=new me;e.background=new I(`#7fb0dd`);let t=new s(-1.4,1.4,.9,-.9,0,10);t.position.set(0,0,5);let r=(e,t={})=>new S({color:e,toneMapped:!1,...t}),i=(e,t,i,a,o,s,c)=>{let l=new n(new u(e,t),r(s,c));return l.position.set(i,a,o),l};e.add(i(3.2,.9,.5,-.95,1,`#2a4a30`)),e.add(i(3.2,.7,-.7,-1.05,2,`#1d3724`)),e.add(i(.06,.3,-.95,-.55,3,`#3a2a1a`));let a=new n(new de(.22,18),r(`#234a2a`));a.position.set(-.95,-.32,3),e.add(a),e.add(i(.04,.55,.9,-.55,3,`#20242a`));let o=new n(new de(.1,16),r(`#ffd98a`,{transparent:!0,opacity:0}));o.position.set(.9,-.26,3.1),e.add(o);let c=new n(new de(.16,24),r(`#fff4d8`));e.add(c);let l=[];for(let[t,i]of[[-1,.5],[-.6,.7],[.2,.6],[.7,.72],[1.05,.45],[-.2,.78],[.45,.4]]){let a=new n(new de(.015,8),r(`#ffffff`,{transparent:!0,opacity:0}));a.position.set(t,i,.5),l.push(a),e.add(a)}let d=new I(`#141d33`),p=new I(`#7fb6e0`),m=new I(`#d6824a`),h=new I(`#fff0cc`),g=new I(`#cdd8ef`),_=.34;function v(t){_=(_+t*.04)%1;let n=_*Math.PI*2,r=-Math.cos(n);c.position.set(Math.sin(n)*1.15,r*.66+.06,0);let i=f.smoothstep(r,-.18,.5),a=f.smoothstep(.32,0,Math.abs(r));e.background.copy(d).lerp(p,i).lerp(m,a*.45),c.material.color.copy(r>0?h:g),o.material.opacity=1-i;let s=(1-i)*.85;for(let e of l)e.material.opacity=s}return{scene:e,camera:t,update:v}}function Lr(e,{x:t,y:r,z:i,ry:o=0,face:s=`#efe2c8`,rim:l=`#2a1c10`}){let d=new a,f=new n(new de(.2,28),new c({color:l,roughness:.6})),p=new n(new de(.17,28),new c({color:s,roughness:.7}));p.position.z=.01;let m=new n(new u(.018,.14),new c({color:`#1a130c`,roughness:.5}));return m.geometry.translate(0,.05,0),m.position.z=.02,e.push(m),d.add(f,p,m),d.position.set(t,r,i),d.rotation.y=o,d}function Rr(e){let t=document.createElement(`canvas`);t.width=t.height=128;let n=t.getContext(`2d`),r=`#e08a3c`,i=`#b96a26`,a=`#3a2410`;if(n.lineJoin=`round`,e){n.fillStyle=r,n.beginPath(),n.ellipse(64,78,44,26,0,0,7),n.fill(),n.fillStyle=i,n.beginPath(),n.ellipse(64,86,44,16,0,0,7),n.fill(),n.fillStyle=r,n.beginPath(),n.arc(36,70,20,0,7),n.fill(),n.fillStyle=r,zr(n,24,56,34,44,42,58),zr(n,40,54,50,44,54,60),n.strokeStyle=i,n.lineWidth=7,n.lineCap=`round`,n.beginPath(),n.moveTo(100,70),n.quadraticCurveTo(112,90,88,96),n.stroke(),n.strokeStyle=a,n.lineWidth=2.5,n.beginPath(),n.arc(30,70,5,.1,Math.PI-.1),n.stroke(),n.strokeStyle=i,n.lineWidth=3;for(let e of[60,74,88])n.beginPath(),n.moveTo(e,58),n.lineTo(e,70),n.stroke()}else{n.fillStyle=r,n.beginPath(),n.ellipse(64,86,30,34,0,0,7),n.fill(),n.fillStyle=`#f3c98a`,n.beginPath(),n.ellipse(64,92,14,22,0,0,7),n.fill(),n.strokeStyle=i,n.lineWidth=8,n.lineCap=`round`,n.beginPath(),n.moveTo(92,100),n.quadraticCurveTo(116,86,104,60),n.stroke(),n.fillStyle=r,n.beginPath(),n.arc(64,48,24,0,7),n.fill(),n.fillStyle=r,zr(n,44,34,50,18,60,34),zr(n,84,34,78,18,68,34),n.fillStyle=`#f0b0c0`,zr(n,47,30,50,22,56,32),zr(n,81,30,78,22,72,32),n.fillStyle=a,n.beginPath(),n.arc(55,47,3.4,0,7),n.arc(73,47,3.4,0,7),n.fill(),n.fillStyle=`#e06a7a`,zr(n,61,54,67,54,64,58),n.strokeStyle=a,n.lineWidth=1.6;for(let e of[-2,3])n.beginPath(),n.moveTo(50,55+e),n.lineTo(34,53+e),n.moveTo(78,55+e),n.lineTo(94,53+e),n.stroke();n.strokeStyle=i,n.lineWidth=3;for(let e of[78,90,102])n.beginPath(),n.moveTo(50,e),n.lineTo(78,e),n.stroke()}let o=new U(t);return o.colorSpace=ce,o}function zr(e,t,n,r,i,a,o){e.beginPath(),e.moveTo(t,n),e.lineTo(r,i),e.lineTo(a,o),e.closePath(),e.fill()}function Br(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`);t.fillStyle=`#ff5a8a`,t.beginPath(),t.moveTo(32,52),t.bezierCurveTo(6,32,14,10,32,24),t.bezierCurveTo(50,10,58,32,32,52),t.fill();let n=new U(e);return n.colorSpace=ce,n}function Vr(e){let t=document.createElement(`canvas`);t.width=t.height=64;let n=t.getContext(`2d`);n.fillStyle=e,n.beginPath(),n.ellipse(30,32,18,11,0,0,7),n.fill(),n.beginPath(),n.moveTo(46,32),n.lineTo(60,22),n.lineTo(60,42),n.closePath(),n.fill(),n.fillStyle=`rgba(255,255,255,0.35)`,n.beginPath(),n.ellipse(28,36,12,5,0,0,7),n.fill(),n.fillStyle=`#15212a`,n.beginPath(),n.arc(20,30,2.6,0,7),n.fill();let r=new U(t);return r.colorSpace=ce,r}function Hr(){let e=document.createElement(`canvas`);e.width=e.height=32;let t=e.getContext(`2d`),n=t.createRadialGradient(16,16,0,16,16,16);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.6,`rgba(255,255,255,0.7)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.beginPath(),t.arc(16,16,16,0,7),t.fill();let r=new U(e);return r.colorSpace=ce,r}function Ur(e){let t=document.createElement(`canvas`);t.width=t.height=256;let n=t.getContext(`2d`),r=n.createLinearGradient(0,0,256,256);e<0?(r.addColorStop(0,`#6a3b1c`),r.addColorStop(1,`#caa15a`)):(r.addColorStop(0,`#3a4a6a`),r.addColorStop(1,`#a86a3a`)),n.fillStyle=r,n.fillRect(0,0,256,256),n.globalAlpha=.5;for(let e=0;e<5;e++)n.fillStyle=e%2?`#2a1c10`:`#e0c080`,n.fillRect(30+e*36,40+e%3*30,26,150);let i=new U(t);return i.colorSpace=ce,i}var{Timer:Wr}=O,Gr=new URLSearchParams(window.location.search),Kr=Gr.get(`demo`)===`1`||Gr.has(`capture`);window.__demo=Kr;var qr=(Gr.get(`city`)?Number(Gr.get(`city`)):0)||Math.random()*1e9|0,Jr=0,Yr=_r({demo:Kr,citySeed:qr,profileIndex:Jr}),{renderer:Xr,rig:Zr,sunRig:Qr,city:$r,cityLife:ei,waterMaterial:ti,fitShadowFrustum:ni,landmarkFactory:ri,renderCityBeautyTo:ii}=Yr,$=Fr({tier:`corner`});typeof window<`u`&&(window.__office=$),$.camera.aspect=window.innerWidth/window.innerHeight,$.camera.updateProjectionMatrix();var ai=!0;window.__shadows=ai,window.__scene=`office`;var oi={minFilter:o,magFilter:o,depthBuffer:!0,stencilBuffer:!1},si=new V(2.2,3.4,11.5),ci=new V(0,2,0).sub(si),li=new V(0,1,0),ui=30,di=384/320,fi=f.radToDeg(2*Math.atan(Math.tan(f.degToRad(ui))/di));function pi(e){let t=new fe(fi,di,.1,100);t.position.copy(si);let n=ci.clone().applyAxisAngle(li,f.degToRad(e));return t.lookAt(si.clone().add(n)),t}var mi=pi(30),hi=pi(-30),gi=new B(384,320,oi),_i=new B(384,320,oi);$.setCityTexture(gi.texture,_i.texture);var vi=new fe(52,540/320,.1,100);vi.position.copy(si),vi.lookAt(si.clone().add(ci));var yi=new B(540,320,oi);$.setStraightCityTexture(yi.texture);var bi=0,xi=3,Si=new B(512,320,{minFilter:o,magFilter:o,depthBuffer:!0,stencilBuffer:!1});$.setVignetteTexture(Si.texture);var Ci=!1,wi=(()=>{if(typeof document>`u`)return{showLap(){},toast(){},flash(){}};let e=document.createElement(`style`);e.textContent=`
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
    </div></div>`;let n=document.createElement(`div`);n.className=`otoast`;let r=document.createElement(`div`);r.className=`oflash`,document.body.append(t,n,r),t.querySelector(`.lap-x`).addEventListener(`click`,()=>Ei()),t.addEventListener(`click`,e=>{e.target===t&&Ei()}),t.addEventListener(`click`,e=>{e.target.closest(`button`)&&navigator.vibrate?.(10)});let i=0;return{showLap(e){t.classList.toggle(`on`,e)},toast(e){n.textContent=e,n.classList.add(`on`),clearTimeout(i),i=setTimeout(()=>n.classList.remove(`on`),1400)},flash(){r.style.transition=`none`,r.style.opacity=`0.85`,requestAnimationFrame(()=>{r.style.transition=`opacity .55s`,r.style.opacity=`0`})}}})();function Ti(){Ci=!0,wi.showLap(!0)}function Ei(){Ci=!1,wi.showLap(!1)}function Di(){Jr=(Jr+1)%tt.length,wi.flash(),$r.generate(qr,Jr),ti.uniforms.uVecWater.value.set($r.waterColor),ei.setProfile($r.state.profile),ni(),wi.toast(`✈  `+$r.state.profile.name),window.__profile=$r.state.profile.key}function Oi(e){let t=$.setFitout(e);return wi.toast(t===`basement`?`🏚  Basement office`:`🏙  Corner office`),window.__tier=t,t}function ki(){return Oi($.tier===`corner`?`basement`:`corner`)}window.__tier=$.tier;var Ai=[`3d`,`dressed2`,`night2`,`modern`,`charm`],ji={"3d":`🧊  Stylized 3D office`,dressed2:`📚  Dressed office (day)`,night2:`🌙  Night office`,modern:`🏙  Modern office (day)`,charm:`🎨  Charm office`};function Mi(e){let t=$.setSkin(e);return window.__officeSkin=t,wi.toast(ji[t]),t}function Ni(){return Mi(Ai[(Ai.indexOf($.skin)+1)%Ai.length])}window.__officeSkin=$.skin;var Pi={painted:`🎨  Painted props (cohesive)`,"3d":`🧊  Live 3D props (animated)`};function Fi(e){let t=$.setProps(e);return window.__officeProps=t,$.skin!==`3d`&&wi.toast(Pi[t]),t}function Ii(){return Fi($.props===`painted`?`3d`:`painted`)}window.__officeProps=$.props;var Li={corner:`🏙  Corner window`,"straight-on":`🖼  Straight-on window`};function Ri(e){let t=$.setLayout(e);return window.__officeLayout=t,wi.toast(Li[t]),t}function zi(){return Ri($.layout===`corner`?`straight-on`:`corner`)}window.__officeLayout=$.layout;var Bi=new N,Vi=new F,Hi=(e,t)=>{Vi.x=e/window.innerWidth*2-1,Vi.y=-(t/window.innerHeight)*2+1};function Ui(){Bi.setFromCamera(Vi,$.camera);let e=Bi.intersectObjects($.interactables,!0)[0];if(!e)return null;let t=e.object;for(;t&&!t.userData.role;)t=t.parent;return t?t.userData.role:null}function Wi(e){e===`laptop`?Ti():e===`phone`?Di():e===`cat`?$.petCat():e===`tank`&&$.feedFish()}var Gi=6,Ki=0,qi=0,Ji=0,Yi=0,Xi=0,Zi=!1,Qi=!1;Xr.domElement.style.cursor=`grab`,Xr.domElement.addEventListener(`mousedown`,e=>{Zi=!0,Qi=!1,Ki=Yi=e.clientX,qi=Xi=e.clientY,Ji=performance.now()}),window.addEventListener(`mousemove`,e=>{Zi?(!Qi&&Math.hypot(e.clientX-Ki,e.clientY-qi)>Gi&&(Qi=!0),Qi&&($.look.addDrag(e.clientX-Yi,e.clientY-Xi),Xr.domElement.style.cursor=`grabbing`),Yi=e.clientX,Xi=e.clientY):(Hi(e.clientX,e.clientY),Xr.domElement.style.cursor=Ui()?`pointer`:`grab`)}),window.addEventListener(`mouseup`,e=>{if(Zi&&!Qi&&!Ci){Hi(e.clientX,e.clientY);let t=Ui();t&&Wi(t)}Zi=!1,Qi=!1,Xr.domElement.style.cursor=`grab`});var $i=!1;Xr.domElement.addEventListener(`touchstart`,e=>{e.touches.length===1&&(Ki=Yi=e.touches[0].clientX,qi=Xi=e.touches[0].clientY,Ji=performance.now(),$i=!1)},{passive:!0}),Xr.domElement.addEventListener(`touchmove`,e=>{if(e.touches.length!==1)return;let t=e.touches[0].clientX,n=e.touches[0].clientY;!$i&&Math.hypot(t-Ki,n-qi)>8&&($i=!0),$i&&$.look.addDrag(t-Yi,n-Xi),Yi=t,Xi=n},{passive:!0}),window.addEventListener(`touchend`,e=>{if(!$i&&performance.now()-Ji<350&&(!e.touches||e.touches.length===0)&&!Ci){let e=Ui();e&&Wi(e)}$i=!1});var ea={left:!1,right:!1,up:!1,down:!1},ta={ArrowLeft:`left`,ArrowRight:`right`,ArrowUp:`up`,ArrowDown:`down`};window.addEventListener(`keydown`,e=>{if(ta[e.key]){ea[ta[e.key]]=!0,e.preventDefault();return}e.key===`Escape`&&(Ci?Ei():$.look.recenter()),(e.key===`f`||e.key===`F`)&&ki(),(e.key===`j`||e.key===`J`)&&Ni(),(e.key===`u`||e.key===`U`)&&Ii(),(e.key===`t`||e.key===`T`)&&Qr.cyclePreset(),(e.key===`h`||e.key===`H`)&&(ai=!ai,window.__shadows=ai),(e.key===`w`||e.key===`W`)&&zi()}),window.addEventListener(`keyup`,e=>{ta[e.key]&&(ea[ta[e.key]]=!1)}),ri.whenReady.then(()=>{$r.generate(qr,Jr),ni(),window.__cityReady=!0}),Gr.get(`office`)===`basement`&&Oi(`basement`);var na=Gr.get(`officeskin`);Ai.includes(na)&&Mi(na);var ra=Gr.get(`officeprops`);[`painted`,`3d`].includes(ra)&&Fi(ra);var ia=Gr.get(`officelayout`);[`corner`,`straight-on`].includes(ia)&&Ri(ia);var aa=new Wr;aa.connect(document);function oa(){aa.update();let e=Math.min(aa.getDelta(),.1);Zr.update(e),Yr.updateWorld(e,aa.getElapsed(),{shadowsOn:ai,seasonTarget:0}),$.look.addKeys(e,ea),$.update(e,aa.getElapsed(),Qr),window.__lookYaw=$.look.yaw,window.__lookPitch=$.look.pitch,$.tier===`basement`?(Xr.setRenderTarget(Si),Xr.render($.vignette.scene,$.vignette.camera)):bi%xi===0&&($.layout===`straight-on`?ii(vi,yi):(ii(mi,gi),ii(hi,_i),$.skin!==`3d`&&ii(vi,yi))),bi++,Xr.setRenderTarget(null),Xr.render($.scene,$.camera),requestAnimationFrame(oa)}oa(),xr({key:`office`,title:`The Office`,tips:[`Drag to look around the office (or use the arrow keys)`,`Click / tap the LAPTOP to open the game panel`,`Tap the PHONE to travel to another city · pet the CAT · feed the FISH`,`Esc exits · F fitout · J skin · U props · W window · T time`]}),window.addEventListener(`resize`,()=>{Yr.resize(),$.camera.aspect=window.innerWidth/window.innerHeight,$.camera.updateProjectionMatrix()});