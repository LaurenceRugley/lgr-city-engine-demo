import{$ as e,A as t,B as n,C as r,D as i,E as a,F as o,G as s,H as c,I as l,J as u,K as d,L as f,M as p,N as m,O as h,P as g,Q as _,R as v,S as y,T as b,U as x,V as S,W as C,X as w,Y as T,Z as E,_ as D,a as O,at as k,b as ee,c as A,d as j,et as M,f as N,g as P,h as te,i as ne,it as F,j as I,k as re,l as ie,m as ae,n as oe,nt as se,o as L,ot as ce,p as R,q as z,r as B,rt as V,s as le,t as ue,tt as de,u as fe,v as pe,w as H,x as me,y as he,z as ge}from"./three-BoVXBq6m.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var _e=Math.atan(1/Math.SQRT2),ve=Math.atan(.5),ye=Math.PI/4,be={PERSPECTIVE:4,ISOMETRIC:5,DIMETRIC:6},xe=.12,Se=1.45,Ce=4,we=40,Te=1.5,Ee=16,U=6,W=22,De=3.5,G=11,Oe=(e,t,n)=>e+(t-e)*(1-Math.exp(-8*n)),K=(e,t)=>e+Math.PI*2*Math.round((t-e)/(Math.PI*2));function ke({aspect:e,fov:t=48,near:n=.1,far:r=100,target:i=new k(0,.8,0),azimuth:a=ye,elevation:o=.52,distance:s=12,zoom:c=5.5}={}){let l=new x(t,e,n,r),u=new S(-1,1,1,-1,n,r),d=be.PERSPECTIVE,f=e,p={azimuth:a,elevation:o,distance:s,zoom:c,target:i.clone()},m={azimuth:a,elevation:o,distance:s,zoom:c,target:i.clone()},h=!1,_=null,v=new k,y=()=>d===be.PERSPECTIVE?l:u;function b(e){e!==d&&(d=e,d===be.ISOMETRIC||d===be.DIMETRIC?(p.elevation=d===be.ISOMETRIC?_e:ve,p.azimuth=K(ye,m.azimuth),h=!0):h=!1)}function C(e,t){p.azimuth+=e,h||(p.elevation=g.clamp(p.elevation+t,xe,Se))}function w(e){d===be.PERSPECTIVE?p.distance=g.clamp(p.distance*e,Ce,we):p.zoom=g.clamp(p.zoom*e,Te,Ee)}function T(e,t){let n=p.azimuth,r=d===be.PERSPECTIVE?p.distance*.04:p.zoom*.08,i=new k(Math.cos(n),0,-Math.sin(n)),a=new k(-Math.sin(n),0,-Math.cos(n));p.target.addScaledVector(i,e*r),p.target.addScaledVector(a,t*r)}function E(e,t){f=e/t,l.aspect=f,l.updateProjectionMatrix()}function D(e){_&&(_(v),p.target.copy(v)),m.azimuth=Oe(m.azimuth,p.azimuth,e),m.elevation=Oe(m.elevation,p.elevation,e),m.distance=Oe(m.distance,p.distance,e),m.zoom=Oe(m.zoom,p.zoom,e),m.target.x=Oe(m.target.x,p.target.x,e),m.target.y=Oe(m.target.y,p.target.y,e),m.target.z=Oe(m.target.z,p.target.z,e);let t=Math.cos(m.elevation),n=Math.sin(m.elevation),r=Math.cos(m.azimuth),i=Math.sin(m.azimuth),a=y();if(a.position.set(m.target.x+m.distance*t*i,m.target.y+m.distance*n,m.target.z+m.distance*t*r),a.lookAt(m.target),a.isOrthographicCamera){let e=m.zoom,t=e*f;a.left=-t,a.right=t,a.top=e,a.bottom=-e,a.updateProjectionMatrix()}}function O(e,t,n,r=!1){p.target.set(e,t,n),r&&m.target.copy(p.target)}function ee(e,t=!1){p.zoom=g.clamp(e,Te,Ee),t&&(m.zoom=p.zoom)}function A(e,{frame:t,snap:n=!1}={}){_=e,n&&(_(v),p.target.copy(v),m.target.copy(v)),t!=null&&(d===be.PERSPECTIVE?p.distance=g.clamp(t,Ce,we):p.zoom=g.clamp(t,Te,Ee))}function j(){_=null}return{get camera(){return y()},get mode(){return d},get azimuth(){return m.azimuth},get following(){return!!_},setTarget:O,setZoom:ee,setFollow:A,clearFollow:j,get styleT(){return d===be.PERSPECTIVE?g.clamp((m.distance-U)/(W-U),0,1):g.clamp((m.zoom-De)/(G-De),0,1)},setMode:b,orbit:C,zoomBy:w,pan:T,setViewport:E,update:D}}var Ae={value:0},je=new R(`#ffffff`),Me={value:0},Ne={value:0},Pe={value:0},Fe=new F,Ie={value:0},Le={value:0},q=`
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
`;function J(e){e.uniforms.uVector=Ae,e.uniforms.uVecTint={value:je},e.uniforms.uVecShadow=Me,e.uniforms.uSnow=Ne,e.uniforms.uCloud=Pe,e.uniforms.uCloudOff={value:Fe},e.uniforms.uFogCharm=Ie}function Y(e){return e.replace(`#include <fog_fragment>`,`
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
  `)}function Re(e){return e.replace(`#include <common>`,`#include <common>
varying vec3 vVecN;
varying vec3 vVecP;
varying vec2 vWorldXZ;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
  vVecN = normal;
  vVecP = position;
  vWorldXZ = (modelMatrix * vec4(position, 1.0)).xz;`)}function ze(e){return e.replace(`#include <shadowmap_pars_fragment>`,`#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>`)}var Be=`col *= mix(1.0, getShadowMask(), uVecShadow);`;function Ve(e,{color:t,id:n,windowGlow:r,winColors:i=[`#ffb852`,`#8cd9ff`],litFrac:a=.55}={}){let o=[0,1,2].map(e=>new R(i[e]??i[i.length-1]));return e.customProgramCacheKey=()=>`lgr-vec-tower`,e.onBeforeCompile=e=>{J(e),e.uniforms.uWindowGlow=r,e.uniforms.uWinId={value:n},e.uniforms.uVecColor={value:new R(t)},e.uniforms.uWinA={value:o[0]},e.uniforms.uWinB={value:o[1]},e.uniforms.uWinC={value:o[2]},e.uniforms.uWinLit={value:a},e.vertexShader=Re(e.vertexShader),e.fragmentShader=Y(ze(e.fragmentShader.replace(`#include <common>`,`#include <common>
        uniform float uWindowGlow;
        uniform float uWinId;
        uniform vec3  uVecColor;
        uniform vec3  uWinA; uniform vec3 uWinB; uniform vec3 uWinC;
        uniform float uWinLit;
        ${q}
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
          ${Be}                                  // the sun's shadow darkens the body
          vec3 wcol; vec2 w = winTerms(wcol);
          vec3 glass = vec3(0.17, 0.23, 0.34);          // dark glass-blue panes (day)
          col = mix(col, glass, w.x * 0.85);
          col += w.x * w.y * wcol * uWindowGlow * 1.5;  // …windows EMIT (unshadowed) at night
          gl_FragColor = vec4(col, diffuseColor.a);
        }`)))},e}function X(e,{color:t=null,glow:n=null,glowDay:r=0,glowNight:i=1,windowGlow:a=null,season:o=!1}={}){let s=t===null,c=n!==null&&a!==null;return e.customProgramCacheKey=()=>`lgr-vec|`+(s?`d`:`c`)+(c?`g`:``)+(o?`s`:``),e.onBeforeCompile=e=>{J(e),s||(e.uniforms.uVecColor={value:new R(t)}),c&&(e.uniforms.uGlow={value:new R(n)},e.uniforms.uGlowDay={value:r},e.uniforms.uGlowNight={value:i},e.uniforms.uWindowGlow=a),o&&(e.uniforms.uSeason=Le),e.vertexShader=Re(e.vertexShader);let l=s?`diffuseColor.rgb`:`uVecColor`,u=o?`seasonShift(${l})`:l,d=(s?``:`uniform vec3 uVecColor;
`)+(c?`uniform vec3 uGlow; uniform float uGlowDay; uniform float uGlowNight; uniform float uWindowGlow;
`:``)+(o?`uniform float uSeason;
vec3 seasonShift(vec3 c){
  c = mix(c, vec3(0.86, 0.46, 0.13), smoothstep(0.40, 0.70, uSeason));   // → autumn orange
  c = mix(c, vec3(0.46, 0.33, 0.20), smoothstep(0.75, 1.00, uSeason));   // → bare brown
  return c;
}
`:``),f=c?`uGlow * mix(uGlowDay, uGlowNight, uWindowGlow)`:`vec3(0.0)`,p=Y(ze(e.fragmentShader.replace(`#include <common>`,`#include <common>
`+d+q).replace(`#include <opaque_fragment>`,`#include <opaque_fragment>
        if (uVector > 0.5) {
          vec3 col = vecShade(${u});
          ${Be}                            // the sun's shadow darkens the flat tier…
          gl_FragColor = vec4(col + ${f}, diffuseColor.a);  // …but the night glow stays lit
        }`)));c&&(p=p.replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>\n  totalEmissiveRadiance += ${f};`)),e.fragmentShader=p},e}function He(e){let t=e>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Ue(e){let t=He(e);return{next:t,range:(e,n)=>e+(n-e)*t(),int:(e,n)=>e+Math.floor(t()*(n-e+1)),pick:e=>e[Math.floor(t()*e.length)],chance:e=>t()<e}}var Z=[{key:`manhattan`,name:`Manhattan`,towers:[`#EDE3C8`,`#D9B98A`,`#B5562F`,`#A8C8E8`,`#2E3F5C`],ground:`#7CC455`,street:`#9AA0A6`,sidewalk:`#C8CCD0`,park:`#5DB347`,water:`#29A8D8`,shopfronts:[`#C04A3A`,`#3A7AC0`,`#C09A2A`],glass:`#7FA8CC`,winColors:[`#ffd27a`,`#9ad6ff`],hMax:4.6,sigma:.36,roofRate:.35,pSplit:.6,nightLit:.55,roofTint:null,coast:{base:.55,out:1,in:.6,jag:1.05},landmarks:[`empireState`,`chrysler`,`liberty`]},{key:`paris`,name:`Paris`,towers:[`#E8DCC0`,`#F2EAD6`,`#E0D2B4`],ground:`#8CC46A`,street:`#A8A29A`,sidewalk:`#D4CEC2`,park:`#6DB35A`,water:`#3FA8C8`,shopfronts:[`#C04A3A`,`#3A6B5A`,`#7A5AC0`],glass:`#5A6B7A`,winColors:[`#ffdca0`,`#ffcaa0`],hMax:1.5,sigma:.9,roofRate:.15,pSplit:.75,nightLit:.45,roofTint:`#6A7886`,coast:{base:1.05,out:.55,in:.3,jag:.5},landmarks:[`eiffel`,`arcDeTriomphe`,`sacreCoeur`]},{key:`neoTokyo`,name:`Neo-Tokyo`,towers:[`#2A3038`,`#3A4250`,`#252B36`,`#4A4456`],ground:`#3A4A42`,street:`#5A6068`,sidewalk:`#7A8088`,park:`#2E5E46`,water:`#0E6878`,shopfronts:[`#E8483A`,`#5AE8E0`,`#E85AA0`],glass:`#5AE8E0`,winColors:[`#5AE8E0`,`#E85AA0`,`#E8E06A`],hMax:5.2,sigma:.42,roofRate:.6,pSplit:.6,nightLit:.7,roofTint:null,coast:{base:.7,out:1.05,in:.62,jag:1.7},landmarks:[`tokyoTower`,`pagoda`,`neonBillboard`]}];Z.map(e=>e.key);var We=.3,Ge=1.9,Ke=.55,qe=2.45,Je=.12,Ye=.6,Xe=6,Q={BASE:.7,OUT:.95,IN:.55,JAG:1,SAMPLES_PER_EDGE:28,HARBOR_DEPTH:.55,HARBOR_WIDTH:.26},Ze={PLINTH_TOP:We,BLOCK:Ge,STREET:Ke,PITCH:qe,SIDEWALK:Je,SHORE:Ye,N:Xe,COAST:Q};function Qe(e,t,n){let r=n?.base??Q.BASE,i=n?.out??Q.OUT,a=n?.in??Q.IN,o=n?.jag??Q.JAG,s=t+r,c=Ue((e^789079)>>>0),l=[2,3,5,8,11,13].map(e=>({k:e,amp:1/e*o**((e-2)/6),phase:c.range(0,Math.PI*2)})),u=l.reduce((e,t)=>e+t.amp,0),d=e=>{let t=0;for(let n of l)t+=n.amp*Math.sin(n.k*e*Math.PI*2+n.phase);return Math.max(-1,Math.min(1,t/(u*.6)))},f=[{fix:+s,nx:1,nz:0,sign:1},{fix:+s,nx:0,nz:1,sign:-1},{fix:-s,nx:-1,nz:0,sign:-1},{fix:-s,nx:0,nz:-1,sign:1}],p=t+.22,m=Q.SAMPLES_PER_EDGE,h=4*m,g=[],_=0;for(let e=0;e<4;e++){let t=f[e];for(let n=0;n<m;n++,_++){let o=n/m,c=_/h,l=(-s+2*s*o)*t.sign,u=d(c),f=u>=0?u*i:u*a;if(e===0){let e=Math.abs(o-.5);if(e<Q.HARBOR_WIDTH){let t=.5+.5*Math.cos(e/Q.HARBOR_WIDTH*Math.PI);f-=(r+Q.HARBOR_DEPTH)*t}}let v,y;t.nx===0?(y=t.fix+t.nz*f,v=l,y=t.nz>0?Math.max(y,p):Math.min(y,-p)):(v=t.fix+t.nx*f,y=l,v=t.nx>0?Math.max(v,p):Math.min(v,-p)),g.push(new F(v,y))}}return{points:g,B:s,maxR:s+i,harborX:p}}function $e(e){(Array.isArray(e)?e:[e]).forEach(e=>e&&e.dispose&&e.dispose())}function et({seed:t=1,profileIndex:n=0,landmarkFactory:r=null,windowGlow:i}){let o=new H,s=new H,c=new H;s.raycast=()=>{},c.raycast=()=>{},o.add(s,c);let u=new pe(16773594,3);u.position.set(.45,.6,-.65).multiplyScalar(10);let d=new a(7313331,2762272,1);o.add(u,d);let p=0,m=[],h={seed:t,profileIndex:n,profile:Z[n],extent:0,meshCount:0};function g(e,t,n,r){let i=new l(new O(e,.04,t),X(new v({color:r,roughness:.95,flatShading:!0}),{color:r}));return i.position.y=n,i.userData.ground=!0,i}function _(t,n){for(let e of s.children)e.geometry&&e.geometry.dispose(),$e(e.material);s.clear();for(let e of c.children)e.traverse(e=>{e.isMesh&&$e(e.material)});c.clear(),m.length=0,p=0;let i=Ue(t),a=Z[n],o=(Xe-1)/2*qe,u=7.075;h={seed:t,profileIndex:n,profile:a,extent:u+(a.coast?.base??Q.BASE),meshCount:0};let d=Qe(t,u,a.coast);h.coast=d;let f=new e;d.points.forEach((e,t)=>t?f.lineTo(e.x,e.y):f.moveTo(e.x,e.y)),f.closePath();let _=new l(new ee(f,{depth:2,bevelEnabled:!1,steps:1}),X(new v({color:a.ground,roughness:.9,flatShading:!0,side:2}),{color:a.ground}));_.rotation.x=-Math.PI/2,_.position.y=We-2,_.userData.ground=!0,s.add(_);let w=2*7.195;s.add(g(w,w,.32,a.street)),S(d.harborX,a);let T=[];for(let e=0;e<Xe;e++)for(let t=0;t<Xe;t++)T.push([e,t]);let E=new Set,D=Math.max(1,Math.round(T.length*.08));for(;E.size<D;)E.add(i.int(0,T.length-1));let O=i.range(-2.45*.6,qe*.6),k=i.range(-2.45*.6,qe*.6),A=Math.hypot(o,o),j=[];if(T.forEach(([e,t],n)=>{let r=(e-(Xe-1)/2)*qe,o=(t-(Xe-1)/2)*qe;if(s.add(g(Ge,Ge,.32999999999999996,a.sidewalk).translateX(r).translateZ(o)),E.has(n)){s.add(g(Ge-Je*2,Ge-Je*2,.35,a.park).translateX(r).translateZ(o));let e=i.int(3,5);for(let t=0;t<e;t++)C(r+i.range(-.6,.6),o+i.range(-.6,.6),a,i);return}let c=Ge-Je*2,l=i.chance(a.pSplit)?2:1,u=i.chance(a.pSplit)?2:1,d=c/l,f=c/u;for(let e=0;e<l;e++)for(let t=0;t<u;t++){let n=r-c/2+d*(e+.5),s=o-c/2+f*(t+.5),l=Math.max(.6,d-.1),u=Math.max(.6,f-.1),p=Math.hypot(n-O,s-k)/A,m=Math.exp(-(p*p)/(2*a.sigma*a.sigma)),h=Math.max(.5,.5+(a.hMax-.5)*m*i.range(.75,1.25));h>a.hMax*.5&&Math.min(l,u)>=.7&&j.push({lx:n,lz:s,fw:l,fd:u,h,r:p}),y(n,s,l,u,h,a,i)}}),r&&r.ready){j.sort((e,t)=>e.r-t.r);let e=[],t=a.landmarks;for(let n=0;n<t.length&&j.length;n++){let i=null;for(let t of j)if(e.every(e=>Math.hypot(e.lx-t.lx,e.lz-t.lz)>qe*.9)){i=t;break}i||=j[0],e.push(i),b(i.lx,i.lz);let o=a.hMax*r.heightFactor(t[n]),s=r.make(t[n],{x:i.lx,z:i.lz,w:i.fw,d:i.fd,h:o,plinthTop:We});if(s){c.add(s);let e=new ne().setFromObject(s);x(e.min.x-.15,e.max.x+.15,e.min.z-.15,e.max.z+.15)}}}s.traverse(e=>{e.isMesh&&(e.userData.ground?(e.castShadow=!1,e.receiveShadow=!0):e.material&&e.material.isMeshBasicMaterial?(e.castShadow=!1,e.receiveShadow=!1):(e.castShadow=!0,e.receiveShadow=!0))}),c.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),h.meshCount=s.children.length+c.children.length;let M=0;for(let e of s.children){let t=e.position;M=(Math.imul(M,16777619)^(Math.round(t.x*100)*2654435761^Math.round(t.y*100)*40503^Math.round(t.z*100)*2246822519))>>>0}for(let e of h.coast.points)M=(Math.imul(M,16777619)^(Math.round(e.x*100)*2654435761^Math.round(e.y*100)*40503))>>>0;h.sig=M,window.__city={seed:t,profile:a.key,meshes:h.meshCount,sig:M}}function y(e,t,n,r,a,o,c){let u=Ve(new v({flatShading:!0,roughness:.7,metalness:.05}),{color:c.pick(o.towers),id:++p,windowGlow:i,winColors:o.winColors,litFrac:o.nightLit}),d=new l(new O(n,a,r),u);if(d.position.set(e,We+a/2,t),d.userData.lot=[e,t],s.add(d),o.roofTint){let i=X(new v({color:o.roofTint,roughness:.85,flatShading:!0}),{color:o.roofTint}),c=new l(new O(n*1.02,.08,r*1.02),i);c.position.set(e,We+a+.04,t),c.userData.lot=[e,t],s.add(c)}if(a<1.4){let i=c.pick(o.shopfronts),a=new l(new O(n*1.04,.18,r*1.04),X(new v({color:i,roughness:.8,flatShading:!0}),{color:i}));a.position.set(e,.39,t),a.userData.lot=[e,t],s.add(a)}let h=We+a,g=n,_=r;if(a>o.hMax*.5&&c.chance(.55)){let u=n*c.range(.5,.72),d=r*c.range(.5,.72),f=a*c.range(.18,.4),m=new l(new O(u,f,d),Ve(new v({flatShading:!0,roughness:.7,metalness:.05}),{color:c.pick(o.towers),id:++p,windowGlow:i,winColors:o.winColors,litFrac:o.nightLit}));m.position.set(e,We+a+f/2,t),m.userData.lot=[e,t],s.add(m),h=We+a+f,g=u,_=d}if(a>o.hMax*.45&&c.chance(o.roofRate)){let n=c.chance(.5)?new l(new O(g*.4,.18,_*.4),X(new v({color:`#9a9a9a`,flatShading:!0}),{color:`#9a9a9a`})):new l(new te(g*.18,g*.18,.22,10),X(new v({color:`#b9bec4`,flatShading:!0}),{color:`#b9bec4`}));if(n.position.set(e+c.range(-.1,.1),h+.11,t+c.range(-.1,.1)),n.userData.lot=[e,t],s.add(n),c.chance(.25)){let n=new l(new M(.05,6,5),new f({color:`#ff3b30`,transparent:!0,opacity:1}));n.position.set(e,h+.15,t),n.userData.lot=[e,t],n.raycast=()=>{},s.add(n),m.push({mesh:n,phase:c.range(0,6.28)})}}if(a>o.hMax*.7&&c.chance(.35)){let n=a*c.range(.18,.34),r=new l(new te(.018,.05,n,6),X(new v({color:`#c8ccd2`,flatShading:!0}),{color:`#c8ccd2`}));r.position.set(e,h+n/2,t),r.userData.lot=[e,t],r.raycast=()=>{},s.add(r)}}function b(e,t){for(let n=s.children.length-1;n>=0;n--){let r=s.children[n];r.userData.lot&&Math.abs(r.userData.lot[0]-e)<1e-4&&Math.abs(r.userData.lot[1]-t)<1e-4&&(r.geometry&&r.geometry.dispose(),$e(r.material),s.remove(r))}for(let e=m.length-1;e>=0;e--)m[e].mesh.parent||m.splice(e,1)}function x(e,t,n,r){for(let i=s.children.length-1;i>=0;i--){let a=s.children[i];a.userData.lot&&a.position.x>=e&&a.position.x<=t&&a.position.z>=n&&a.position.z<=r&&(a.geometry&&a.geometry.dispose(),$e(a.material),s.remove(a))}}function S(e,t){let n=X(new v({color:`#7a5634`,roughness:.95,flatShading:!0}),{color:`#7a5634`}),r=(e,t,r,i)=>{let a=new l(new O(e,.06,t),n);a.position.set(r,We-.16,i),s.add(a)};r(.24,2,e+.02,0),r(1.3,.22,e+.7,-.72),r(1.3,.22,e+.7,.72)}function C(e,t,n,r){let i=new R(n.park),a=(n,a)=>{let o=i.clone().offsetHSL(0,0,r.range(-.06,.06)).getStyle(),c=new l(new M(n,7,6),X(new v({color:o,flatShading:!0}),{color:o,season:!0}));c.scale.y=.7,c.position.set(e,We+a,t),c.userData.lot=null,s.add(c)},o=new l(new O(.05,.18,.05),X(new v({color:`#6b4a2a`,flatShading:!0}),{color:`#6b4a2a`}));o.position.set(e,.39,t),s.add(o),a(.22,.28),a(.16,.46)}function w(e){for(let t of m)t.mesh.material.opacity=.35+.65*(.5+.5*Math.sin(e*3+t.phase))}return _(t,n),{group:o,key:u,fill:d,update:w,generate:_,get state(){return h},get extent(){return h.extent},get waterColor(){return h.profile.water},profiles:Z}}var tt=Math.PI*2,nt=.7,rt=90,it=[{name:`night`,sun:`#4a6f9e`,intensity:.35,hemiSky:`#26344f`,hemiGround:`#0c1018`,horizon:`#1e2942`,sky:`#36486e`,exposure:.95,outline:`#101a30`,window:1,toonGain:2.6},{name:`dawn`,sun:`#ff9e54`,intensity:2.4,hemiSky:`#8a7686`,hemiGround:`#2a1f1a`,horizon:`#b8512c`,sky:`#ffb070`,exposure:1.05,outline:`#241826`,window:.3,toonGain:2},{name:`noon`,sun:`#fff4e0`,intensity:4.6,hemiSky:`#9cb8cc`,hemiGround:`#33302a`,horizon:`#5e7689`,sky:`#aacadd`,exposure:1.18,outline:`#0b0a08`,window:0,toonGain:1.7},{name:`dusk`,sun:`#ff6b35`,intensity:2,hemiSky:`#7a566a`,hemiGround:`#281a18`,horizon:`#b0432a`,sky:`#ff8a5a`,exposure:1.05,outline:`#1f1420`,window:.4,toonGain:2}],at=e=>e-Math.floor(e),ot=(e,t,n)=>e+(t-e)*n,st=(e,t,n)=>e+(t-e)*(1-Math.exp(-6*n));function ct({t:e=.5}={}){let t=e,n=e,r=!1,i=!1,a=it.map(e=>({name:e.name,sun:new R(e.sun),hemiSky:new R(e.hemiSky),hemiGround:new R(e.hemiGround),horizon:new R(e.horizon),sky:new R(e.sky),outline:new R(e.outline),intensity:e.intensity,exposure:e.exposure,window:e.window,toonGain:e.toonGain})),o=new k(0,1,0),s=new R(`#fff4e0`),c=new R(`#6f97b3`),l=new R(`#2a2620`),u=new R(`#3a4a57`),d=new R(`#7da3bd`),f=new R(`#0b0a08`),p=new R(`#000000`),m=3,h=1,g=0,_=1.7,v=new k;function y(e){let t=at(e)*4,n=Math.floor(t)%4,r=(n+1)%4,i=t-Math.floor(t),y=a[n],b=a[r];s.lerpColors(y.sun,b.sun,i),c.lerpColors(y.hemiSky,b.hemiSky,i),l.lerpColors(y.hemiGround,b.hemiGround,i),u.lerpColors(y.horizon,b.horizon,i),d.lerpColors(y.sky,b.sky,i),f.lerpColors(y.outline,b.outline,i),m=ot(y.intensity,b.intensity,i),h=ot(y.exposure,b.exposure,i),g=ot(y.window,b.window,i),_=ot(y.toonGain,b.toonGain,i),p.setRGB(.045*g,.075*g,.14*g);let x=at(e)*tt-Math.PI/2,S=Math.cos(x),C=Math.sin(x);v.set(S,C*Math.cos(nt),C*Math.sin(nt)),v.y>=0?o.copy(v):o.copy(v).negate()}return y(t),{sunDir:o,sunColor:s,hemiSky:c,hemiGround:l,horizon:u,sky:d,outline:f,toonFloor:p,sunArc:v,get sunIntensity(){return m},get exposure(){return h},get windowGlow(){return g},get toonGain(){return _},get t(){return at(t)},get auto(){return r},get clock(){let e=Math.round(at(t)*24*60)%1440;return`${String(Math.floor(e/60)).padStart(2,`0`)}:${String(e%60).padStart(2,`0`)}`},cyclePreset(){n=(Math.floor(t*4+1e-4)+1)/4},nudge(e){n+=e/24},goTo(e){n=e},toggleAuto(){r=!r},setReducedMotion(e){i=e},update(e){r&&!i&&(n+=e/rt),t=st(t,n,e),y(t)}}}function lt(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.35,`rgba(255,255,255,0.55)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new A(e);return r.colorSpace=w,r}function ut(e,t){let n=[];for(let r=0;r<16;r++){let i=r/16*Math.PI*2;n.push(new k(Math.cos(i)*e,t,Math.sin(i)*e))}return new fe(n,!0,`catmullrom`,.5)}function dt(e){let t=(t,n)=>Math.exp(-((e-t)*(e-t))/(2*n*n)),n=Math.max(t(.33,.05),t(.75,.06)),r=g.smoothstep(e,.24,.3)*(1-g.smoothstep(e,.8,.88));return g.clamp(.15+.55*r+.45*n,.12,1)}function ft(){let{PITCH:e,N:t,PLINTH_TOP:n}=Ze,r=t+1,i=n+.04,a=n=>(n-t/2)*e,o=t/2,s=[],c=(e,t)=>t*r+e;for(let e=0;e<r;e++)for(let t=0;t<r;t++)s.push({x:a(t),z:a(e),i:t,j:e,edges:[]});let l=[],u=(t,n)=>{let r=(s[t].i===o||s[t].j===o)&&(s[n].i===o||s[n].j===o),i=l.length;l.push({a:t,b:n,len:e,main:r}),s[t].edges.push(i),s[n].edges.push(i)};for(let e=0;e<r;e++)for(let t=0;t<r;t++)t<r-1&&u(c(t,e),c(t+1,e)),e<r-1&&u(c(t,e),c(t,e+1));return{nodes:s,edges:l,y:i,mid:o}}function pt({plinthTop:e=.3,extent:t=4,profile:r=null}={}){let a=new H,o=ft(),{nodes:s,edges:c}=o,l=o.y,u=.34,p=0;{let e=Ze.PITCH-u*2;p=Math.max(1,Math.floor((e+.26)/.56))}let m=new f({color:`#e8c84a`,fog:!0}),h=new i(new O(.05,.012,.3),m,c.length*p);h.frustumCulled=!1,h.raycast=()=>{},h.receiveShadow=!1,h.castShadow=!1,a.add(h);{let e=new n,t=0;for(let n of c){let r=s[n.a],i=s[n.b],a=i.x-r.x,o=i.z-r.z,c=Math.hypot(a,o),d=a/c,f=o/c,m=Math.atan2(d,f),g=c-u*2;for(let n=0;n<p;n++){let i=u+(p===1?g/2:g*n/(p-1));e.position.set(r.x+d*i,l,r.z+f*i),e.rotation.set(0,m,0),e.updateMatrix(),h.setMatrixAt(t++,e.matrix)}}h.instanceMatrix.needsUpdate=!0}let _=new i(new O(.34,.26,.74),X(new v({flatShading:!0,roughness:.5,metalness:.3})),12);_.castShadow=!0,_.receiveShadow=!1,_.frustumCulled=!1,_.raycast=()=>{};let y=new le,b=new Float32Array(72),x=new Float32Array(72),S=new R(`#fff0c0`),C=new R(`#ff3528`);for(let e=0;e<12;e++)S.toArray(x,e*3),C.toArray(x,(12+e)*3),b[e*3+1]=-50,b[(12+e)*3+1]=-50;y.setAttribute(`position`,new L(b,3)),y.setAttribute(`color`,new L(x,3));let w=new z({size:.72,sizeAttenuation:!0,map:lt(),vertexColors:!0,transparent:!0,opacity:0,blending:2,depthWrite:!1}),T=new d(y,w);T.frustumCulled=!1,T.raycast=()=>{},a.add(_,T);let E=[`#f4c430`,`#c0392b`,`#d8dde2`,`#9aa7b4`,`#6b7785`,`#5a7d9a`],D=He(2403557),ee=c.map((e,t)=>t).filter(e=>c[e].main),A=[];for(let e=0;e<12;e++){let t=e<4&&ee.length?ee[D()*ee.length|0]:D()*c.length|0,n=e===1;A.push({edge:t,fwd:D()<.5,s:D()*c[t].len,speed:n?.5:.78+e%3*.1,lenZ:n?1.45:1,color:E[n?1:e===0?0:2+e%4],rng:He(12648430+e*2654435761),isBus:n,pos:new k,dirX:0,dirZ:1,active:!1})}let j=new R;A.forEach((e,t)=>_.setColorAt(t,j.set(e.color)));function M(e,t,n){let r=s[e],i=r.edges.filter(e=>e!==t);if(i.length===0)return t;let a=c[t],o=a.a===e?a.b:a.a,l=r.x-s[o].x,u=r.z-s[o].z,d=Math.hypot(l,u)||1,f=i[0],p=-2;for(let t of i){let n=c[t],i=n.a===e?n.b:n.a,a=s[i].x-r.x,o=s[i].z-r.z,m=Math.hypot(a,o)||1,h=l/d*(a/m)+u/d*(o/m);h>p&&(p=h,f=t)}return n()<.65?f:i[n()*i.length|0]}let N=M,P=new n,te=(e,t)=>{P.position.set(0,-50,0),P.scale.setScalar(0),P.updateMatrix(),e.setMatrixAt(t,P.matrix)},ne=.085,F=Ze.PLINTH_TOP+.02+.13,I=new i(new ie(.04,.1,3,6),X(new v({flatShading:!0,roughness:.8})),14);I.castShadow=!0,I.receiveShadow=!1,I.frustumCulled=!1,I.raycast=()=>{};let re=ut(t-.72,e),ae=[];for(let e=0;e<14;e++)ae.push({phase:e/14,speed:.12+e%4*.02,dir:e%2?1:-1,pos:new k,active:!1});let oe=new k,se=new k,ce=new R;ae.forEach((e,t)=>I.setColorAt(t,ce.set([`#caa`,`#9ab`,`#bba`,`#ab9`][t%4]))),a.add(I);let B={manhattan:`#e8c84a`,paris:`#dcd2bc`,neoTokyo:`#5ae8e0`};function V(e){e&&m.color.set(B[e.key]||`#e8c84a`)}V(r);function ue(t,n,r){let i=r?r.t:.5,a=r?r.windowGlow:0,o=Math.max(2,Math.round(dt(i)*12)),l=a>.05;for(let e=0;e<12;e++){if(e>=o){te(_,e),A[e].active=!1,b[e*3+1]=-50,b[(12+e)*3+1]=-50;continue}let n=A[e];n.s+=t*n.speed;let r=0;for(;n.s>=c[n.edge].len&&r++<4;){n.s-=c[n.edge].len;let e=n.fwd?c[n.edge].b:c[n.edge].a,t=N(e,n.edge,n.rng);n.edge=t,n.fwd=c[t].a===e}let i=c[n.edge],a=n.fwd?s[i.a]:s[i.b],u=n.fwd?s[i.b]:s[i.a],d=u.x-a.x,f=u.z-a.z,p=Math.hypot(d,f)||1,m=d/p,h=f/p,g=-h,v=m,y=a.x+m*n.s+g*ne,x=a.z+h*n.s+v*ne,S=Math.atan2(m,h);P.position.set(y,F,x),P.rotation.set(0,S,0),P.scale.set(1,1,n.lenZ),P.updateMatrix(),_.setMatrixAt(e,P.matrix),n.pos.set(y,F,x),n.dirX=m,n.dirZ=h,n.active=!0;let C=.74*n.lenZ*.5,w=F+.06,T=e*3,E=(12+e)*3;l?(b[T]=y+m*(C+.04),b[T+1]=w,b[T+2]=x+h*(C+.04),b[E]=y-m*(C+.02),b[E+1]=w,b[E+2]=x-h*(C+.02)):(b[T+1]=-50,b[E+1]=-50)}_.instanceMatrix.needsUpdate=!0,y.attributes.position.needsUpdate=!0,w.opacity=g.clamp(a*1.8,0,1);let u=Math.max(2,Math.round(dt(i)*14));for(let t=0;t<14;t++){if(t>=u){te(I,t),ae[t].active=!1;continue}let r=ae[t],i=(r.phase+r.dir*r.speed*n*.02+1e3)%1;re.getPointAt(i,oe),re.getTangentAt(i,se);let a=Math.sin(n*6+r.phase*30)*.015;P.position.set(oe.x,e+.09+a,oe.z),P.rotation.set(0,Math.atan2(se.x*r.dir,se.z*r.dir),Math.sin(n*6+r.phase*30)*.06),P.scale.setScalar(1),P.updateMatrix(),I.setMatrixAt(t,P.matrix),r.pos.set(oe.x,e+.09,oe.z),r.active=!0}I.instanceMatrix.needsUpdate=!0}let de=[...A.map((e,t)=>({kind:`car`,label:e.isBus?`bus`:`car ${t+1}`,getWorldPos:t=>t.copy(e.pos),active:()=>e.active,info:()=>`${e.isBus?`bus`:`car`} · ${c[e.edge].main?`main avenue`:`side street`} → heading ${mt(e.dirX,e.dirZ)}`})),...ae.map((e,t)=>({kind:`person`,label:`person ${t+1}`,getWorldPos:t=>t.copy(e.pos),active:()=>e.active,info:()=>`person · strolling the waterfront promenade`}))];function fe(){return de}return{group:a,update:ue,setProfile:V,getFollowables:fe,graph:o,setRouter(e){N=e||M}}}function mt(e,t){return[`N`,`NE`,`E`,`SE`,`S`,`SW`,`W`,`NW`][(Math.round(Math.atan2(e,t)/(Math.PI/4))%8+8)%8]}function ht({frames:e,fps:t=8,cols:n,rows:r=1}={}){let i=n||e||4,a=r||1,o=e||i*a,s=typeof window<`u`&&window.matchMedia?window.matchMedia(`(prefers-reduced-motion: reduce)`):null;function c(e,t){let n=t%i,r=Math.floor(t/i);e.offset.x=n/i,e.offset.y=1-(r+1)/a}function l(e){let t=e.clone();return t.needsUpdate=!0,t.repeat.set(1/i,1/a),c(t,0),t}function u(e,n,r=0){if(s&&s.matches)return c(e,0),0;let i=(Math.floor(n*t+r)%o+o)%o;return c(e,i),i}function d(e,t){let n=(Math.round(t)%o+o)%o;return c(e,n),n}return{frames:o,fps:t,cols:i,rows:a,makeInstanceTexture:l,step:u,setFrame:d}}function gt(e){if(typeof document>`u`||!e||!e.image)return e;let t=e.image,n=t.width||t.naturalWidth,r=t.height||t.naturalHeight,i=document.createElement(`canvas`);i.width=n,i.height=r;let a=i.getContext(`2d`,{willReadFrequently:!0});a.drawImage(t,0,0,n,r);let o=a.getImageData(0,0,n,r),s=o.data;for(let e=0;e<s.length;e+=4){let t=s[e]*.299+s[e+1]*.587+s[e+2]*.114|0;s[e]=s[e+1]=s[e+2]=t}a.putImageData(o,0,0);let c=new A(i);return c.colorSpace=e.colorSpace||`srgb`,c}function _t({url:e,fallback:t,luminance:n=!1,onReady:r}={}){let i=n?gt(t):t;return e&&typeof window<`u`&&new V().load(e,e=>{e.colorSpace=w,r&&r(n?gt(e):e)},void 0,()=>{}),i}var vt=``+new URL(`gull_diffusion_sheet-BMlUTLhu.png`,import.meta.url).href;function yt(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.4,`rgba(255,255,255,0.5)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new A(e);return r.colorSpace=w,r}function bt(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64*.62,0,64/2,64*.62,64*.5);n.addColorStop(0,`rgba(240,250,255,0.95)`),n.addColorStop(1,`rgba(240,250,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new A(e);return r.colorSpace=w,r}function xt(){let e=document.createElement(`canvas`);e.width=256,e.height=64;let t=e.getContext(`2d`);t.strokeStyle=`#ffffff`,t.lineWidth=6,t.lineCap=`round`,t.lineJoin=`round`;let n=[14,24,36,24];for(let e=0;e<4;e++){let r=e*64,i=n[e];t.beginPath(),t.moveTo(r+8,40),t.quadraticCurveTo(r+24,i,r+32,36),t.quadraticCurveTo(r+40,i,r+56,40),t.stroke()}let r=new A(e);return r.colorSpace=w,r}function St(e,t,n=18){let r=[];for(let i=0;i<n;i++){let a=i/n*Math.PI*2;r.push(new k(Math.cos(a)*e,t,Math.sin(a)*e))}return new fe(r,!0,`catmullrom`,.5)}function Ct(e,t,n){let r=e-t,i=[],a=(e,t)=>i.push(new k(e,n,t)),o=(e,n,r,i,o=4)=>{for(let s=1;s<=o;s++){let c=r+(i-r)*(s/o);a(e+Math.cos(c)*t,n+Math.sin(c)*t)}};for(let t=0;t<4;t++)a(e,-r+2*r*t/4);o(r,r,0,Math.PI/2);for(let t=0;t<4;t++)a(r-2*r*t/4,e);o(-r,r,Math.PI/2,Math.PI);for(let t=0;t<4;t++)a(-e,r-2*r*t/4);o(-r,-r,Math.PI,1.5*Math.PI);for(let t=0;t<4;t++)a(-r+2*r*t/4,-e);return o(r,-r,1.5*Math.PI,2*Math.PI),new fe(i,!0,`catmullrom`,.5)}function wt({extent:e=8,waterSize:t=28,plinthTop:n=.3}={}){let r=new H;r.raycast=()=>{};let i=.06,a=(e,n,r)=>r.set(e/t+.5,-n/t+.5,0),o=[Ct(9.5,3,i),St(12.7,i),new fe([new k(8.4,i,0),new k(11,i,-3.6),new k(13,i,0),new k(11,i,3.6)],!0,`catmullrom`,.5)],s=o.map(e=>e.getLength());function c({scale:e=1,hull:t=`#6b7785`,cabin:n=`#e7ecf2`}){let r=new H,i=new l(new O(.46*e,.2*e,1.1*e),X(new v({color:t,roughness:.6,metalness:.2,flatShading:!0}),{color:t}));i.position.y=.02;let a=new l(new O(.3*e,.22*e,.42*e),X(new v({color:n,roughness:.7,flatShading:!0}),{color:n}));return a.position.set(0,.18*e,.08*e),r.add(i,a),r.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!1),e.raycast=()=>{}}),r.userData.halfLen=.55*e,r}let u=[{laneIndex:0,dir:1,speed:.5,wake:.024,scale:1,hull:`#5a6675`,cabin:`#e7ecf2`},{laneIndex:1,dir:-1,speed:.42,wake:.022,scale:1,hull:`#7a5b46`,cabin:`#d9c3a6`},{laneIndex:0,dir:1,speed:.56,wake:.024,scale:.9,hull:`#456079`,cabin:`#cfe0ee`},{laneIndex:2,dir:1,speed:.34,wake:.03,scale:1.35,hull:`#39505f`,cabin:`#e2b85a`}];u.forEach((e,t)=>{e.mesh=c(e),e.u=t*.27%1,e.phase=t*1.7,e.isFerry=e.laneIndex===2,r.add(e.mesh)});let f=u.length,p=f*2,m=new le,h=new Float32Array(p*3).fill(-50),_=new Float32Array(p*3),y=new R(`#fff0c0`),b=new R(`#ff3528`);for(let e=0;e<f;e++)y.toArray(_,e*3),b.toArray(_,(f+e)*3);m.setAttribute(`position`,new L(h,3)),m.setAttribute(`color`,new L(_,3));let x=new d(m,new z({size:.6,sizeAttenuation:!0,map:yt(),vertexColors:!0,transparent:!0,opacity:0,blending:2,depthWrite:!1}));x.frustumCulled=!1,x.raycast=()=>{},r.add(x);function S(e,t){let n=new l(new M(e,9,7),X(new v({color:t,roughness:.5,flatShading:!0}),{color:t}));return n.scale.set(.55,.5,1),n.castShadow=!1,n.receiveShadow=!1,n.raycast=()=>{},n.position.y=-5,n}let C=[{x:-9.5,z:6,size:.18,color:`#5b6f86`,period:11,arcH:.55,span:1.1,whale:!1},{x:7.5,z:-9.5,size:.16,color:`#4a6076`,period:14,arcH:.5,span:1,whale:!1},{x:-7,z:-8.5,size:.2,color:`#607089`,period:9,arcH:.6,span:1.2,whale:!1},{x:10.5,z:7,size:.62,color:`#3a4350`,period:38,arcH:.9,span:2.6,whale:!0}];C.forEach((e,t)=>{e.mesh=S(e.size,e.color),e.heading=Math.atan2(-e.x,-e.z),e.t=t/C.length*e.period,e.splashed=!1,r.add(e.mesh),e.whale&&(e.spout=new de(new se({map:bt(),transparent:!0,opacity:0,depthWrite:!1,fog:!0})),e.spout.scale.set(.6,1.1,1),e.spout.position.set(e.x,-5,e.z),r.add(e.spout))});let w=ht({frames:4,fps:7}),T=[`#ffffff`,`#cfd4da`,`#c8a06a`],E=[],D=_t({url:vt,fallback:xt(),luminance:!0,onReady:e=>{D=e;for(let t of E){let n=t.sp.material.map;t.sp.material.map=w.makeInstanceTexture(e),t.sp.material.needsUpdate=!0,n&&n.dispose()}typeof window<`u`&&(window.__gullSheet=`diffusion`)}});for(let e=0;e<4;e++){let t=new de(new se({map:w.makeInstanceTexture(D),color:new R(T[e%T.length]),transparent:!0,opacity:0,depthWrite:!1,fog:!0}));t.scale.setScalar(.5),E.push({sp:t,r:8.6+e*.5,y:1.1+e%2*.5,speed:(.18+e*.03)*(e%2?-1:1),phase:e*1.9}),r.add(t)}typeof window<`u`&&(window.__gullSheet=window.__gullSheet||`procedural`,window.__gullAnim={frames:w.frames,variants:T.length,fps:w.fps});let ee=C.length,A=Array.from({length:f+ee},()=>new k),j=e=>e.laneIndex,N=new k,P=new k,te=new k;function ne(e,t,n){let r=n?n.windowGlow:0,c=1-r;for(let n=0;n<f;n++){let c=u[n],l=o[c.laneIndex],d=s[c.laneIndex],p=c.isFerry?.45+.55*Math.min(1,Math.abs((c.u+.5)%1-.5)*3):1,m=c.u;c.u=(c.u+c.dir*e*c.speed*p/d+1)%1,(c.dir>0?c.u<m:c.u>m)&&(c.laneIndex=j(c)),l.getPointAt(c.u,N),l.getTangentAt(c.u,P);let g=P.x*c.dir,_=P.z*c.dir,v=Math.atan2(g,_),y=Math.sin(t*1.1+c.phase)*.025;c.mesh.position.set(N.x,i+y,N.z),c.mesh.rotation.set(Math.sin(t*.9+c.phase)*.04,v,0);let b=c.mesh.userData.halfLen;a(N.x-g*b,N.z-_*b,te),A[n].set(te.x,te.y,c.wake);let x=n*3,S=(f+n)*3;if(r>.05){let e=.18;h[x]=N.x+g*(b+.05),h[x+1]=e,h[x+2]=N.z+_*(b+.05),h[S]=N.x-g*(b+.02),h[S+1]=e,h[S+2]=N.z-_*(b+.02)}else h[x+1]=-50,h[S+1]=-50}F(),x.material.opacity=g.clamp(r*1.8,0,1);for(let t=0;t<ee;t++){let n=C[t];n.t+=e;let r=f+t,o=n.whale?3.2:1.3;if(n.t>=n.period){let e=(n.t-n.period)/o;if(e>=1){n.t=0,n.splashed=!1,n.mesh.position.y=-5,n.spout&&(n.spout.material.opacity=0),A[r].set(0,0,0);continue}let t=Math.sin(Math.PI*e),s=(e-.5)*n.span,c=n.x+Math.sin(n.heading)*s,l=n.z+Math.cos(n.heading)*s;n.mesh.position.set(c,i-.1+t*n.arcH,l),n.mesh.rotation.set(Math.cos(Math.PI*e)*.9,n.heading,0);let u=e<.16||e>.84;if(a(c,l,te),A[r].set(te.x,te.y,u?n.whale?.07:.05:0),n.spout){let t=g.clamp((e-.15)*3,0,1)*(1-e);n.spout.position.set(c,.56+t*.6,l),n.spout.material.opacity=t*.9}}else n.mesh.position.y=-5,A[r].set(0,0,0),n.spout&&(n.spout.material.opacity=0)}for(let e=0;e<4;e++){let n=E[e],r=n.phase+t*n.speed*.25;n.sp.position.set(Math.cos(r)*n.r,n.y+Math.sin(t*1.4+n.phase)*.12,Math.sin(r)*n.r),n.sp.material.opacity=g.clamp(c*.9-.05,0,.85);let i=w.step(n.sp.material.map,t,n.phase);e===0&&typeof window<`u`&&(window.__gullFrame=i)}if(typeof window<`u`){let e=0;for(let t of C)t.mesh.position.y>i&&e++;window.__waterLife={boats:f,breaching:e,gulls:+E[0].sp.material.opacity.toFixed(2),lights:+x.material.opacity.toFixed(2)}}}function F(){m.attributes.position.needsUpdate=!0}function I(){return A.length}let re=[...u.map((e,t)=>({kind:`boat`,label:e.isFerry?`ferry`:`boat ${t+1}`,getWorldPos:t=>t.copy(e.mesh.position),info:()=>e.isFerry?`boat · harbor ferry → docks`:`boat · open-water lane ${e.laneIndex}`})),...E.map((e,t)=>({kind:`gull`,label:`gull ${t+1}`,getWorldPos:t=>t.copy(e.sp.position),active:()=>e.sp.material.opacity>.05,info:()=>`gull · circling the coast`})),...C.map((e,t)=>({kind:`fish`,label:e.whale?`whale`:`fish ${t+1}`,getWorldPos:t=>t.copy(e.mesh.position),active:()=>e.mesh.position.y>i-.3,info:()=>e.mesh.position.y>i?e.whale?`whale · breaching!`:`fish · breaching!`:`fish · below the surface`}))];function ie(){return re}return{group:r,update:ne,getFollowables:ie,wakeDrops:A,get wakeCount(){return I()},lanes:o,setRouter(e){j=e||(e=>e.laneIndex)}}}var Tt=[`empireState`,`chrysler`,`liberty`,`eiffel`,`arcDeTriomphe`,`sacreCoeur`,`tokyoTower`,`pagoda`,`neonBillboard`],Et={empireState:1.25,chrysler:1.1,liberty:.55,eiffel:3.2,arcDeTriomphe:1.5,sacreCoeur:1.75,tokyoTower:1.35,pagoda:.5,neonBillboard:.9};function Dt(e){let t=()=>new v({flatShading:!0,roughness:.7,metalness:.1}),n=(n,r={})=>r.windows?Ve(t(),{color:n,id:e.id(),windowGlow:e.windowGlow,winColors:e.winColors,litFrac:e.litFrac}):X(t(),{color:n,glow:r.glow??null,glowDay:r.glowDay??0,glowNight:r.glowNight??1,windowGlow:r.glow?e.windowGlow:null});return{box:(e,t,r,i,a={})=>new l(new O(e,t,r),n(i,a)),cyl:(e,t,r,i,a={})=>new l(new te(e,t,r,a.seg||12),n(i,a)),cone:(e,t,r,i={})=>new l(new ae(e,t,i.seg||8),n(r,i)),sphere:(e,t,r={})=>new l(new M(e,r.seg||12,r.seg2||8),n(t,r)),lathe:(e,t,r={})=>new l(new h(e.map(e=>new F(e[0],e[1])),r.seg||4),n(t,r))}}var $=(e,t,n,r)=>(e.position.set(t,n,r),e),Ot=[`#7FB0E0`,`#E07FB0`,`#7FE0A0`,`#E0C97F`,`#9FE07F`,`#7FE0E0`,`#FF8C42`,`#E0E07F`,`#C97FE0`,`#E07F7F`,`#7F9FE0`,`#E0483A`],kt={empireState(e,t){let n=`#E8E0CF`;e.add($(t.box(.42,.18,.42,n,{windows:!0}),0,.09,0)),e.add($(t.box(.34,.16,.34,n,{windows:!0}),0,.26,0)),e.add($(t.box(.26,.14,.26,n,{windows:!0}),0,.41,0)),e.add($(t.box(.19,.34,.19,n,{windows:!0}),0,.65,0)),e.add($(t.box(.13,.06,.13,n,{windows:!0}),0,.85,0));let r=Ot[new Date().getMonth()];e.add($(t.cyl(.03,.045,.12,n,{seg:10,glow:r,glowNight:1.85}),0,.94,0)),e.add($(t.cone(.012,.07,n,{seg:8}),0,1.04,0))},chrysler(e,t){let n=`#C9CED4`;e.add($(t.box(.22,.55,.22,`#9AA7B4`,{windows:!0}),0,.275,0));let r=.55;for(let i=0;i<5;i++){let a=.14-i*.024,o=.07;e.add($(t.cyl(a*.7,a,o,n,{seg:8,glow:`#dfeaff`,glowNight:.5}),0,r+o/2,0)),r+=o}e.add($(t.cone(.018,.16,n,{seg:8}),0,r+.08,0))},liberty(e,t){let n=`#B9B4A6`,r=`#4FA890`;e.add($(t.box(.42,.16,.42,n),0,.08,0)),e.add($(t.box(.3,.2,.3,n),0,.26,0)),e.add($(t.cyl(.1,.15,.42,r,{seg:10}),0,.57,0)),e.add($(t.box(.11,.1,.11,r),0,.83,0));for(let n=0;n<7;n++){let i=(n/6-.5)*Math.PI*1.1;e.add($(t.cone(.012,.1,r,{seg:5}),Math.sin(i)*.1,.92,Math.cos(i)*.06-.02))}let i=$(t.cyl(.025,.03,.34,r,{seg:8}),.14,.98,0);i.rotation.z=.35,e.add(i),e.add($(t.box(.06,.06,.06,r,{glow:`#ffd060`,glowDay:.6,glowNight:1.2}),.2,1.16,0)),e.add($(t.cone(.04,.09,`#ffcf66`,{seg:6,glow:`#ffd060`,glowDay:.7,glowNight:1.3}),.2,1.24,0))},eiffel(e,t){let n=`#6E5C4C`,r=[[.2,0],[.13,.16],[.085,.33],[.055,.5],[.035,.66],[.02,.85],[0,.92]];e.add(t.lathe(r,n,{seg:4}));let i=t.lathe(r,n,{seg:4});i.rotation.y=Math.PI/4,e.add(i),e.add($(t.box(.26,.025,.26,n),0,.33,0)),e.add($(t.box(.14,.02,.14,n),0,.66,0)),e.add($(t.cone(.01,.1,n,{seg:6}),0,.97,0))},arcDeTriomphe(t,n){let r=`#D9D0C1`,i=.58,a=.5,o=.34,s=new e;s.moveTo(-.58/2,0),s.lineTo(i/2,0),s.lineTo(i/2,a),s.lineTo(-.58/2,a),s.lineTo(-.58/2,0);let u=new c,d=.15,f=.22;u.moveTo(-.15,0),u.lineTo(-.15,f),u.absarc(0,f,d,Math.PI,0,!0),u.lineTo(d,0),u.lineTo(-.15,0),s.holes.push(u);let p=new ee(s,{depth:o,bevelEnabled:!1});p.translate(0,0,-.34/2),p.computeVertexNormals(),t.add(new l(p,X(new v({color:r,flatShading:!0}),{color:r}))),t.add($(n.box(i*1.06,.08,o*1.06,r),0,.54,0))},sacreCoeur(e,t){let n=`#F1EEE6`;e.add($(t.box(.5,.26,.4,n),0,.13,0));let r=(r,i,a,o)=>{e.add($(t.cyl(a*.9,a,i,n,{seg:12}),r,o,0));let s=$(t.sphere(a,n,{seg:12}),r,o+i/2,0);s.scale.y=1.5,e.add(s)};r(0,.22,.15,.4),r(-.2,.1,.07,.33),r(.2,.1,.07,.33)},tokyoTower(e,t){let n=`#F25822`,r=`#EDEDED`,i=0;for(let a=0;a<9;a++){let o=a/9,s=(a+1)/9,c=.19*(1-o)+.03*o,l=.19*(1-s)+.03*s,u=.085,d=a%2?r:n;e.add($(t.cyl(l,c,u,d,{seg:4,glow:n,glowDay:0,glowNight:.7}),0,i+u/2,0)),i+=u}e.add($(t.box(.22,.02,.22,n,{glow:n,glowNight:.7}),0,.28,0)),e.add($(t.box(.12,.02,.12,r),0,.5,0)),e.add($(t.cone(.012,.16,r,{seg:6,glow:`#ff6a2a`,glowNight:.9}),0,i+.08,0))},pagoda(e,t){let n=0;for(let r=0;r<5;r++){let i=.42-r*.06,a=.11;e.add($(t.box(i,a,i,`#B23A2C`,{windows:r<4}),0,n+a/2,0)),e.add($(t.box(i*1.34,.03,i*1.34,`#7A3B2A`),0,n+a+.015,0)),n+=.16999999999999998}e.add($(t.cyl(.012,.012,.1,`#E0C040`,{seg:6}),0,n+.05,0)),e.add($(t.sphere(.03,`#E0C040`,{seg:8,glow:`#ffe680`,glowNight:.8}),0,n+.12,0))},neonBillboard(e,t){let n=`#20242C`;e.add($(t.box(.3,1,.3,n,{windows:!0}),0,.5,0));let r=[`#5AE8E0`,`#E85AA0`,`#E8E06A`],i=(n,r,i,a,o,s,c)=>{let l=$(t.box(n,r,.02,i,{glow:i,glowDay:.6,glowNight:1.1}),a,o,s);l.rotation.y=c,e.add(l)};i(.22,.34,r[0],0,.75,.16,0),i(.16,.5,r[1],.16,.5,0,Math.PI/2),i(.2,.22,r[2],0,.34,-.16,0),e.add($(t.cone(.01,.14,n,{seg:6,glow:`#E85AA0`,glowDay:.4,glowNight:1}),0,1.08,0))}};function At(e,t){let n=new H;return kt[e](n,Dt(t)),n}var jt=``+new URL(`building-skyscraper-d-CapD2Zqe.glb`,import.meta.url).href,Mt=``+new URL(`building-n-hdv8kKtN.glb`,import.meta.url).href,Nt=``+new URL(`building-g-CsTB1qH9.glb`,import.meta.url).href,Pt=``+new URL(`colormap-CK8fW2HB.png`,import.meta.url).href,Ft={skyscraper:{url:jt,color:`#9cc1dd`,fill:.92},midrise:{url:Mt,color:`#c9a07a`,fill:.96},setback:{url:Nt,color:`#d9c7a0`,fill:.9}};function It({windowGlow:e}){let t=new m;t.setURLModifier(e=>e.includes(`colormap.png`)?Pt:e);let n=new ue(t),r={},i=!1,a=Promise.all(Object.entries(Ft).map(async([e,t])=>{r[e]=(await n.loadAsync(t.url)).scene})).then(()=>{i=!0,window.__landmarksReady=!0}).catch(e=>console.error(`landmark models failed:`,e)),o=9e3;function s(t,n,i={}){let a,s;if(Tt.includes(t))a=At(t,{windowGlow:e,winColors:i.winColors,litFrac:i.litFrac,id:()=>++o}),s=1;else{let e=r[t],n=Ft[t];if(!e||!n)return null;a=e.clone(!0),s=n.fill}a.updateMatrixWorld(!0);let c=new ne().setFromObject(a).getSize(new k);a.scale.setScalar(n.h*s/c.y),a.updateMatrixWorld(!0);let l=new ne().setFromObject(a),u=l.getCenter(new k);return a.position.x+=n.x-u.x,a.position.z+=n.z-u.z,a.position.y+=n.plinthTop-l.min.y,Tt.includes(t)?a.traverse(e=>{e.isMesh&&(e.castShadow=!1,e.raycast=()=>{})}):a.traverse(n=>{if(!n.isMesh)return;n.castShadow=!1,n.raycast=()=>{};let r=n=>Ve(n.clone(),{color:Ft[t].color,id:++o,windowGlow:e,winColors:i.winColors,litFrac:i.litFrac});n.material=Array.isArray(n.material)?n.material.map(r):r(n.material)}),a}return{make:s,whenReady:a,heightFactor:e=>Et[e]??1,get ready(){return i}}}var Lt=[`clear`,`rain`,`snow`,`fog`];function Rt({extent:e=7}={}){let t=new H;t.raycast=()=>{};let r=e+2,a=.25,o=(e,t)=>e+Math.random()*(t-e),c=new i(new s(.015,.5),new f({color:`#a9bdd6`,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),600);c.frustumCulled=!1,c.raycast=()=>{};let l=new Float32Array(600*3),u=new Float32Array(600);for(let e=0;e<600;e++)l[e*3]=o(-r,r),l[e*3+1]=o(a,11),l[e*3+2]=o(-r,r),u[e]=o(9,14);let d=new i(new s(.07,.07),new f({color:`#f3f7ff`,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),700);d.frustumCulled=!1,d.raycast=()=>{};let p=new Float32Array(700*3),m=new Float32Array(700),h=new Float32Array(700);for(let e=0;e<700;e++)p[e*3]=o(-r,r),p[e*3+1]=o(a,11),p[e*3+2]=o(-r,r),m[e]=o(0,6.28),h[e]=o(.6,1.2);t.add(c,d);let g=Array.from({length:8},()=>new k),_=0,v=`clear`,y=0,b=0,x=0,S=0,C=0,w=new n,T=(e,t,n,r)=>e+(t-e)*Math.min(1,n*r);function E(e){Lt.includes(e)&&(v=e)}function D(){v=Lt[(Lt.indexOf(v)+1)%Lt.length]}function O(e,t){let n=v===`rain`,i=v===`snow`,s=v===`fog`,f=v!==`clear`;y=T(y,+!!f,e,1.4),b=T(b,+!!f,e,1.2),x=T(x,+!!s,e,.9),C=T(C,f&&!s?1:0,e,1),S=T(S,+!!i,e,i?.22:.5);let E=n?y:0,D=Math.round(600*E);for(let t=0;t<600;t++){if(t>=D){w.position.set(0,-50,0),w.scale.setScalar(0),w.updateMatrix(),c.setMatrixAt(t,w.matrix);continue}l[t*3+1]-=u[t]*e,l[t*3]+=e*1.1,l[t*3+1]<a&&(l[t*3]=o(-r,r),l[t*3+1]=11,l[t*3+2]=o(-r,r)),w.position.set(l[t*3],l[t*3+1],l[t*3+2]),w.rotation.set(0,0,0),w.scale.set(1,1,1),w.updateMatrix(),c.setMatrixAt(t,w.matrix)}c.instanceMatrix.needsUpdate=!0,c.material.opacity=.55*E,_=n?Math.round(8*y):0;for(let e=0;e<_;e++)g[e].set(Math.random(),Math.random(),.05*y);let O=Math.round(700*(i?y:0));for(let n=0;n<700;n++){if(n>=O){w.position.set(0,-50,0),w.scale.setScalar(0),w.updateMatrix(),d.setMatrixAt(n,w.matrix);continue}p[n*3+1]-=h[n]*e;let i=Math.sin(t*1.5+m[n])*.5;p[n*3+1]<a&&(p[n*3]=o(-r,r),p[n*3+1]=11,p[n*3+2]=o(-r,r)),w.position.set(p[n*3]+i,p[n*3+1],p[n*3+2]),w.rotation.set(0,0,0),w.scale.setScalar(1),w.updateMatrix(),d.setMatrixAt(n,w.matrix)}d.instanceMatrix.needsUpdate=!0,d.material.opacity=.9*(i?y:0)}return{group:t,update:O,cycle:D,setKind:E,rainDrops:g,get kind(){return v},get intensity(){return y},get overcast(){return b},get fog(){return x},get snow(){return S},get cloud(){return C},get rainDropCount(){return _},poolCounts:{rain:600,snow:700}}}function zt(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=(e,n,r)=>{let i=t.createRadialGradient(e,n,0,e,n,r);i.addColorStop(0,`rgba(255,255,255,0.95)`),i.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=i,t.beginPath(),t.arc(e,n,r,0,7),t.fill()};n(128*.42,128*.56,128*.26),n(128*.6,128*.5,128*.3),n(128*.5,128*.46,128*.22),n(128*.34,128*.54,128*.18),n(128*.7,128*.58,128*.18);let r=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5],i=t.getImageData(0,0,128,128),a=i.data;for(let e=0;e<128;e++)for(let t=0;t<128;t++){let n=(e*128+t)*4,i=a[n+3]/255,o=(r[e%4*4+t%4]+.5)/16-.5;a[n+3]=Math.max(0,Math.min(1,Math.floor(i*5+.5+o)/5))*255}t.putImageData(i,0,0);let o=new A(e);return o.colorSpace=w,o}function Bt({extent:e=8,count:t=16}={}){let n=new H;n.raycast=()=>{};let r=zt(),i=e+6,a=(e,t)=>e+Math.random()*(t-e),o=[];for(let e=0;e<t;e++){let e=new se({map:r,transparent:!0,depthWrite:!1,opacity:0,fog:!0}),t=new de(e),s={sp:t,mat:e,wisp:Math.random(),x:a(-i,i),z:a(-i,i),hiY:a(4,6.8),loY:a(.6,2.2),w:a(3,5.6),h:a(1.7,3),speed:a(.25,.7),op:a(.6,1)};t.raycast=()=>{},o.push(s),n.add(t)}let s=new R,c=new R(`#ffffff`),l=new R(`#5b626e`);function u(e,t,n,r){let u=r?r.cloud:0,d=r?r.fog:0,f=Math.min(1,.4+.6*u+.5*d);s.copy(n.sky).lerp(c,.62),s.lerp(l,.6*u);for(let n=0;n<o.length;n++){let r=o[n],c=n/o.length<f;r.x+=r.speed*e*(.6+.8*u),r.x>i&&(r.x=-i,r.z=a(-i,i));let l=Math.min(Vt(r.x,-i,-i+3),1-Vt(r.x,i-3,i)),p=r.hiY*(1-d)+r.loY*d,m=1-.5*r.wisp,h=.72*Math.max(0,1-d-u)+1*u+.42*d,g=c?Math.max(0,h)*r.op*m*l:0;r.mat.opacity+=(g-r.mat.opacity)*Math.min(1,e*2.5),r.mat.color.copy(s);let _=r.w*(1+.6*d)*(1+.4*r.wisp),v=r.h*(1-.35*d);r.sp.scale.set(_,v,1),r.sp.position.set(r.x,p+Math.sin(t*.3+n)*.15,r.z)}}function d(e){r=e;for(let t of o)t.mat.map=e,t.mat.needsUpdate=!0}let f=o.map((e,t)=>({kind:`cloud`,label:`cloud ${t+1}`,getWorldPos:t=>t.copy(e.sp.position),active:()=>e.mat.opacity>.06,info:()=>`cloud · ${e.wisp>.6?`wispy`:`puffy`} · drifting east${e.sp.position.y<3?` (low mist)`:``}`}));function p(){return f}return{group:n,update:u,setTexture:d,getFollowables:p,get count(){return o.length}}}function Vt(e,t,n){let r=Math.max(0,Math.min(1,(e-t)/(n-t)));return r*r*(3-2*r)}var Ht={person:4.5,car:6,gull:6,fish:8,boat:9,cloud:16};function Ut({rig:e,getCamera:t,sources:n=[]}){let r=null,i=new k,a=new k,o=()=>{let e=[];for(let t of n)if(t&&t.getFollowables){let n=t.getFollowables();n&&e.push(...n)}return e},s=e=>!e.active||e.active();function c(t){return t?(r=t,e.setFollow(e=>t.getWorldPos(e),{frame:t.frame??Ht[t.kind]??8}),t):null}function l(){r=null,e.clearFollow()}function u(e,n,r=.14){let l=t(),u=null,d=r;for(let t of o()){if(!s(t)||(t.getWorldPos(i),a.copy(i).project(l),a.z>1||a.z<-1))continue;let r=Math.hypot(a.x-e,a.y-n);r<d&&(d=r,u=t)}return u?c(u):null}function d(e=1,t=null){let n=o().filter(e=>(!t||e.kind===t)&&s(e));if(t||(n=Wt(n)),!n.length)return null;let i=r?n.indexOf(r):-1;return i=((i+e)%n.length+n.length)%n.length,c(n[i])}function f(){r&&r.active&&!r.active()&&l()}return{pickAt:u,cycle:d,follow:c,release:l,prune:f,get focus(){return r},get count(){return o().length},get readout(){return r?{kind:r.kind,label:r.label,info:r.info?r.info():``}:null}}}function Wt(e){let t=new Map;for(let n of e)t.has(n.kind)||t.set(n.kind,[]),t.get(n.kind).push(n);let n=[...t.values()],r=[];for(let e=0,t=!0;t;e++){t=!1;for(let i of n)e<i.length&&(r.push(i[e]),t=!0)}return r}var Gt=`attribute float aSize;
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
}`,Kt=`precision highp float;

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
}`,qt={realistic:0,charm:0,pixel:2,vector:1},Jt={realistic:1,charm:1,pixel:1.9,vector:1.2};function Yt({seed:e=1517,count:n=340,spreadX:r=21,yLo:i=3,yHi:a=18,zBase:o=7.2}={}){let s=new H;s.raycast=()=>{};let c=He(e>>>0),l=new Float32Array(n*3),u=new Float32Array(n),f=new Float32Array(n),p=new Float32Array(n),m=[];for(let e=0;e<n;e++){let t=(c()*2-1)*r,n=i+c()*(a-i),s=-o-c()*.7;l[e*3]=t,l[e*3+1]=n,l[e*3+2]=s;let d=.35+c()*.65;f[e]=d,u[e]=1.6+c()*2.8+(d>.85?2.2:0),p[e]=c()*Math.PI*2,d>.82&&m.push([t,n,s])}let h=new le;h.setAttribute(`position`,new L(l,3)),h.setAttribute(`aSize`,new L(u,1)),h.setAttribute(`aBright`,new L(f,1)),h.setAttribute(`aPhase`,new L(p,1));let g=new _({vertexShader:Gt,fragmentShader:Kt,uniforms:{uTime:{value:0},uTwinkle:{value:1},uSizeScale:{value:1},uColor:{value:new R(`#eaf0ff`)},uNight:{value:0},uMode:{value:0}},transparent:!0,depthWrite:!1,blending:2,fog:!1,toneMapped:!1}),v=new d(h,g);v.raycast=()=>{},v.frustumCulled=!1,s.add(v);let y=[];if(m.length>6)for(let e=0;e<3;e++){let e=Math.floor(c()*m.length);for(let t=0;t<3;t++){let t=m[e],n=m[(e+1+Math.floor(c()*2))%m.length];y.push(t[0],t[1],t[2],n[0],n[1],n[2]),e=(e+1)%m.length}}let b=[[[0,2],[0,0]],[[0,0],[.7,0]],[[2.1,2],[1.4,2]],[[1.4,2],[1.4,0]],[[1.4,0],[2.1,0]],[[2.1,0],[2.1,1]],[[2.1,1],[1.7,1]],[[2.8,0],[2.8,2]],[[2.8,2],[3.5,2]],[[3.5,2],[3.5,1]],[[3.5,1],[2.8,1]],[[2.8,1],[3.6,0]]],x=-o-.4,S=.62;for(let[[e,t],[n,r]]of b)y.push(-3+e*S,12+t*S,x,-3+n*S,12+r*S,x);let C=new le;C.setAttribute(`position`,new me(y,3));let w=new I(C,new t({color:`#9fb6e8`,transparent:!0,opacity:0,depthWrite:!1,fog:!1,toneMapped:!1}));w.raycast=()=>{},w.frustumCulled=!1,s.add(w);let T=new de(new se({map:Xt(),transparent:!0,opacity:0,depthWrite:!1,blending:2,fog:!1,toneMapped:!1}));T.raycast=()=>{},T.scale.set(r*2.4,r*.95,1),T.position.set(2,12,-o-.7),T.material.rotation=-.5,T.renderOrder=-3,s.add(T);let E=-1;function D(e,t=`realistic`,n=0,r=!1){g.uniforms.uTime.value=n,g.uniforms.uTwinkle.value=+!r,g.uniforms.uNight.value=e;let i=qt[t]??0;i!==E&&(g.uniforms.uMode.value=i,E=i),g.uniforms.uSizeScale.value=Jt[t]??1,w.material.opacity=e*.5,T.material.opacity=e*.32,s.visible=e>.001}return{group:s,update:D}}function Xt(){let e=document.createElement(`canvas`);e.width=e.height=256;let t=e.getContext(`2d`),n=t.createRadialGradient(256/2,256/2,0,256/2,256/2,256/2);n.addColorStop(0,`rgba(150,170,230,0.5)`),n.addColorStop(.4,`rgba(120,130,200,0.22)`),n.addColorStop(1,`rgba(90,100,160,0)`),t.fillStyle=n,t.fillRect(0,0,256,256);let r=He(20145);for(let e=0;e<7;e++){let e=40+r()*176,n=70+r()*116,i=14+r()*30,a=t.createRadialGradient(e,n,0,e,n,i);a.addColorStop(0,`rgba(200,210,255,0.18)`),a.addColorStop(1,`rgba(200,210,255,0)`),t.fillStyle=a,t.beginPath(),t.arc(e,n,i,0,Math.PI*2),t.fill()}let i=new A(e);return i.colorSpace=w,i}var Zt=Math.PI*2;function Qt(e){let t=document.createElement(`canvas`);t.width=t.height=128;let n=t.getContext(`2d`),r=n.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return r.addColorStop(0,`#ffffff`),r.addColorStop(.34,`#fffaf0`),r.addColorStop(.66,e),r.addColorStop(.86,e),r.addColorStop(1,`rgba(255,255,255,0)`),n.fillStyle=r,n.beginPath(),n.arc(128/2,128/2,128/2,0,Zt),n.fill(),on(t,!0)}function $t(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);n.addColorStop(0,`#ffffff`),n.addColorStop(.4,`#eef3ff`),n.addColorStop(.82,`#c4cee6`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,128/2,0,Zt),t.fill(),t.globalAlpha=.14,t.fillStyle=`#8b97b4`;for(let[e,n,r]of[[54,50,9],[78,66,7],[60,82,5]])t.beginPath(),t.arc(e,n,r,0,Zt),t.fill();return on(e,!0)}function en(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`);t.translate(128/2,128/2),t.fillStyle=`rgba(255,210,120,0.9)`;for(let e=0;e<12;e++)t.rotate(Zt/12),t.beginPath(),t.moveTo(0,-28),t.lineTo(7,-54),t.lineTo(-7,-54),t.closePath(),t.fill();let n=t.createRadialGradient(0,0,0,0,0,32);return n.addColorStop(0,`#ffffff`),n.addColorStop(.4,`#fff1c8`),n.addColorStop(.8,`#ffb24a`),n.addColorStop(1,`#ff8a2a`),t.fillStyle=n,t.beginPath(),t.arc(0,0,32,0,Zt),t.fill(),on(e,!0)}function tn(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,46);n.addColorStop(0,`#ffffff`),n.addColorStop(.5,`#e6ecfb`),n.addColorStop(1,`#c2cce4`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,46,0,Zt),t.fill(),t.fillStyle=`#aab6d2`;for(let[e,n,r]of[[52,48,11],[80,62,8],[58,82,7],[40,66,5]])t.beginPath(),t.arc(e,n,r,0,Zt),t.fill();return on(e,!0)}function nn(e,t,n){let r=document.createElement(`canvas`);r.width=r.height=144;let i=r.getContext(`2d`),a=17/2,o=18/2-.5;for(let r=0;r<18;r++)for(let s=0;s<18;s++){let c=Math.hypot(s-a,r-a);c>o||(i.fillStyle=c<o*.45?e:c<o*.78?t:n,i.fillRect(Math.round(s*8),Math.round(r*8),8,8))}return on(r,!1)}function rn(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return n.addColorStop(0,`rgba(255,255,255,0.9)`),n.addColorStop(.38,`rgba(255,255,255,0.3)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,128/2,0,Zt),t.fill(),on(e,!0)}function an(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2),r=`20,30,48`;return n.addColorStop(0,`rgba(${r},0)`),n.addColorStop(.42,`rgba(${r},0)`),n.addColorStop(.6,`rgba(${r},0.6)`),n.addColorStop(1,`rgba(${r},0)`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,128/2,0,Zt),t.fill(),on(e,!0)}function on(e,t){let n=new A(e);return n.colorSpace=w,t||(n.magFilter=ge,n.minFilter=ge),n}var sn=(e,t,n)=>{let r=Math.max(0,Math.min(1,(e-t)/(n-t)));return r*r*(3-2*r)};function cn({skyW:e=15,skyY0:t=3.4,skyH:n=3.8,z:r=-7.8,biasX:i=4.5,sunSize:a=4.6,moonSize:o=4}={}){let s=new H;s.raycast=()=>{};let c=(e,t)=>{let n=new de(new se({map:e,transparent:!0,depthWrite:!1,fog:!1,toneMapped:!1,...t?{blending:2}:{}}));return n.raycast=()=>{},n},l={realistic:Qt(`#ffcf8a`),charm:en(),pixel:nn(`#fff6e0`,`#ffc24a`,`#ff8a2a`)},u={realistic:$t(),charm:tn(),pixel:nn(`#ffffff`,`#cdd6ee`,`#9aa6c6`)},d=rn(),f=c(an(),!1),p=c(d,!0),m=c(l.realistic),h=c(d,!0),g=c(u.realistic);f.renderOrder=-2,p.renderOrder=-1,s.add(f,p,m,h,g);let _=Yt({});_.group.renderOrder=-4,s.add(_.group);let v=typeof window<`u`&&window.matchMedia?window.matchMedia(`(prefers-reduced-motion: reduce)`):null,y={realistic:{sunGlow:3,sunGlowOp:.7,moonGlow:2.6,moonGlowOp:.5,sizeMul:1,sunHaloOp:.85},charm:{sunGlow:2.2,sunGlowOp:.55,moonGlow:2.1,moonGlowOp:.42,sizeMul:1.08,sunHaloOp:.7},pixel:{sunGlow:1.7,sunGlowOp:.4,moonGlow:1.7,moonGlowOp:.32,sizeMul:1,sunHaloOp:.6}},b=`realistic`;function x(e){e===b||!y[e]||(b=e,m.material.map=l[e],m.material.needsUpdate=!0,g.material.map=u[e],g.material.needsUpdate=!0)}new R;let S=new R(`#fff3df`),C=new R(`#ffb060`),w=new R(`#ff6a2a`),T=new R(`#eef2ff`),E=new R(`#9fbcff`);function D(s,c,l,u,d=`realistic`){x(d);let D=y[b],O=l.sunArc,k=u?Math.min(1,(u.cloud||0)*.85+(u.fog||0)*.7):0,ee=O.y,A=sn(ee,-.04,.1)*(1-.7*k),j=1-sn(Math.abs(ee),.02,.5);m.position.set(O.x*e+i,t+O.y*n,r),p.position.copy(m.position);let M=a*D.sizeMul*(1+.55*j);m.scale.setScalar(M),p.scale.setScalar(M*D.sunGlow),m.material.color.copy(S),p.material.color.copy(C).lerp(w,j),m.material.opacity=A,p.material.opacity=A*D.sunGlowOp*(.7+.5*j),f.position.copy(m.position),f.scale.setScalar(M*1.7),f.material.opacity=A*(1-j)*D.sunHaloOp;let N=sn(-O.y,-.04,.1)*(1-.65*k);g.position.set(-O.x*e+i,t+-O.y*n,r),h.position.copy(g.position);let P=o*D.sizeMul;g.scale.setScalar(P),h.scale.setScalar(P*D.moonGlow),g.material.color.copy(T),h.material.color.copy(E),g.material.opacity=N,h.material.opacity=N*D.moonGlowOp;let te=sn(-O.y,-.05,.18)*(1-.85*k);_.update(te,d,c,!!(v&&v.matches))}return{group:s,update:D}}var ln=`varying vec2 vUv;

void main() {
  
  
  
  vUv = uv;

  
  
  
  
  
  
  
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,un=`precision highp float;

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
}`,dn=`varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0); 
}`,fn=`precision highp float;

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
}`,pn=`precision highp float;

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
}`,mn=`precision highp float;

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
}`,hn=`const float CA_STRENGTH   = 0.0030;  
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
}`,gn=`const float DITHER = 0.55;   

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
}`,_n=`precision highp float;

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
}`,vn=`precision highp float;

varying vec2 vUv;
uniform sampler2D uToon;   
uniform sampler2D uPixel;  
uniform float     uBlend;  

void main() {
  vec3 t = texture2D(uToon, vUv).rgb;
  vec3 p = texture2D(uPixel, vUv).rgb;
  gl_FragColor = vec4(mix(t, p, uBlend), 1.0);
}`,yn=`precision highp float;

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
}`,bn={"1-bit":{gridWidth:110,dither:.6,palette:[`#15120c`,`#c8b486`]},gb:{gridWidth:130,dither:.4,palette:[`#0f380f`,`#306230`,`#8bac0f`,`#9bbc0f`]},"8-bit":{gridWidth:160,dither:.55,palette:[`#140c1c`,`#442434`,`#30346d`,`#4e4a4e`,`#854c30`,`#346524`,`#d04648`,`#757161`,`#597dce`,`#d27d2c`,`#8595a1`,`#6daa2c`,`#d2aa99`,`#6dc2ca`,`#dad45e`,`#deeed6`]},"16-bit":{gridWidth:280,dither:.3,palette:`#000000.#222034.#45283c.#663931.#8f563b.#df7126.#d9a066.#eec39a.#fbf236.#99e550.#6abe30.#37946e.#4b692f.#524b24.#323c39.#3f3f74.#306082.#5b6ee1.#639bff.#5fcde4.#cbdbfc.#ffffff.#9badb7.#847e87.#696a6a.#595652.#76428a.#ac3232.#d95763.#d77bba.#8f974a.#8a6f30`.split(`.`)},modern:{gridWidth:460,dither:.6,palette:null}},xn=[`gb`,`8-bit`,`16-bit`,`modern`];function Sn(e){let t=Math.max(e.length,1),n=new Float32Array(t*4);e.forEach((e,t)=>{let r=new R(e);n[t*4+0]=r.r,n[t*4+1]=r.g,n[t*4+2]=r.b,n[t*4+3]=1});let r=new P(n,t,1,u,y);return r.minFilter=ge,r.magFilter=ge,r.needsUpdate=!0,r}var Cn=220,wn={night:[`#0A0C16`,`#1C2236`,`#3A3A52`,`#5A5A78`,`#8A92B0`],dawn:[`#1A1008`,`#43281A`,`#7A4A30`,`#B07A4E`,`#E8A86A`],noon:[`#16100A`,`#3A2F1E`,`#6B563A`,`#937B54`,`#B89968`],dusk:[`#140A0A`,`#3E1E1A`,`#7A3828`,`#B85A36`,`#F0884A`]},Tn={night:[`#020604`,`#06180E`,`#10401E`,`#1E9040`,`#7FE0FF`],dawn:[`#060603`,`#1A2410`,`#3A6B22`,`#6CC040`,`#FFC060`],noon:[`#050805`,`#0E2912`,`#1E6B2F`,`#3CF06A`,`#FFB000`],dusk:[`#080402`,`#241408`,`#6B4A12`,`#E0A030`,`#FF7030`]};function En({demo:e=!1,citySeed:t=0,profileIndex:n=0}={}){let i=new oe({antialias:!0,preserveDrawingBuffer:!0});i.shadowMap.enabled=!0,i.shadowMap.type=1,i.shadowMap.autoUpdate=!1,i.shadowMap.needsUpdate=!0;let a=!!(window.matchMedia&&window.matchMedia(`(pointer: coarse)`).matches);i.setPixelRatio(Math.min(window.devicePixelRatio,a?1.5:2)),i.setSize(window.innerWidth,window.innerHeight),i.setClearColor(920327,1),document.body.appendChild(i.domElement);let c=i.getDrawingBufferSize(new F),d=new E;d.fog=new r(10465470,0);let m=new R(`#aeb6c0`),h=.062,v=new R(`#74508f`),y=new R,x=ke({aspect:window.innerWidth/window.innerHeight}),C=ct({t:.5}),T={type:b,format:u,minFilter:ge,magFilter:ge,wrapS:N,wrapT:N,depthBuffer:!1,stencilBuffer:!1},O=[new ce(256,256,T),new ce(256,256,T),new ce(256,256,T)];for(let e of O)i.setRenderTarget(e),i.clear();i.setRenderTarget(null);let ee=new E,j=new S(-1,1,1,-1,0,1),M=new _({vertexShader:dn,fragmentShader:fn,uniforms:{uCurr:{value:null},uPrev:{value:null},uTexel:{value:new F(1/256,1/256)},uMouse:{value:new F(-1,-1)},uMouseStrength:{value:0},uC2:{value:.25},uDamping:{value:.992},uRainCount:{value:0},uRainDrops:{value:Array.from({length:8},()=>new k)},uWakeCount:{value:0},uWakeDrops:{value:Array.from({length:8},()=>new k)}}});ee.add(new l(new s(2,2),M));let P=new ce(c.x,c.y,{minFilter:p,magFilter:p,depthBuffer:!0,stencilBuffer:!1});function te(e){let t=document.createElement(`canvas`);t.width=t.height=1024;let n=t.getContext(`2d`);n.fillStyle=e?`#0c1418`:`#15110b`,n.fillRect(0,0,1024,1024),n.strokeStyle=e?`rgba(120,150,170,0.22)`:`rgba(184,153,104,0.30)`,n.lineWidth=2;for(let e=0;e<=1024;e+=64)n.beginPath(),n.moveTo(e,0),n.lineTo(e,1024),n.stroke(),n.beginPath(),n.moveTo(0,e),n.lineTo(1024,e),n.stroke();e||(n.fillStyle=`#B89968`,n.font=`bold 360px Georgia, serif`,n.textAlign=`center`,n.textBaseline=`middle`,n.fillText(`LGR`,512,470),n.font=`600 64px ui-monospace, monospace`,n.fillText(`WEB · STUDIO`,512,720));let r=new A(t);return r.colorSpace=w,r}let ne=new l(new s(28,28),new f({map:te(e)}));ne.rotation.x=-Math.PI/2,ne.position.y=-.35,d.add(ne);let I=new l(new s(40,24),new _({depthWrite:!1,vertexShader:ln,fragmentShader:un,uniforms:{uTime:{value:0},uInk:{value:C.horizon},uGold:{value:C.sky},uFogColor:{value:y},uFogAmt:{value:0},uFogCharm:Ie}}));I.position.set(0,3,-8),d.add(I);let re=new _({vertexShader:pn,fragmentShader:mn,uniforms:{uHeight:{value:null},uScene:{value:P.texture},uTexel:{value:new F(1/256,1/256)},uResolution:{value:new F(c.x,c.y)},uDisplace:{value:.42},uNormalStrength:{value:22},uRefractStrength:{value:.06},uChromaScale:{value:1},uNormalMatrix:{value:new o},uLightDir:{value:C.sunDir},uInk:{value:new R(`#2A2218`)},uGold:{value:new R(`#B89968`)},uVector:Ae,uVecWater:{value:new R(`#1fb8d8`)},uVecTint:{value:je}}}),ie=new l(new s(28,28,255,255),re);ie.rotation.x=-Math.PI/2,ie.updateMatrixWorld(!0),re.uniforms.uNormalMatrix.value.getNormalMatrix(ie.matrixWorld),d.add(ie);let ae={value:0},se=It({windowGlow:ae}),L=et({seed:t,profileIndex:n,landmarkFactory:se,windowGlow:ae});d.add(L.group);let z=pt({plinthTop:.3,extent:L.extent,profile:L.state.profile});d.add(z.group);let B=wt({extent:L.extent,waterSize:28,plinthTop:.3});d.add(B.group),M.uniforms.uWakeDrops.value=B.wakeDrops;let V=Rt({extent:L.extent});d.add(V.group),M.uniforms.uRainDrops.value=V.rainDrops;let le=Bt({extent:L.extent});d.add(le.group);let ue=Ut({rig:x,getCamera:()=>x.camera,sources:[z,B,le]}),de=cn();d.add(de.group),L.group.remove(L.key),d.add(L.key),L.key.castShadow=!0,L.key.shadow.mapSize.set(2048,2048),L.key.shadow.bias=-18e-5,L.key.shadow.normalBias=.028,d.add(L.key.target);function fe(){let e=L.key.shadow.camera,t=L.extent+4.5;e.left=-t,e.right=t,e.top=t,e.bottom=-t,e.near=1,e.far=48,e.updateProjectionMatrix(),i.shadowMap.needsUpdate=!0}fe();let pe=new D(c.x,c.y),H=new ce(c.x,c.y,{minFilter:p,magFilter:p,depthBuffer:!0,stencilBuffer:!1,depthTexture:pe}),me=new ce(c.x,c.y,{minFilter:p,magFilter:p,depthBuffer:!1,stencilBuffer:!1}),he=new ce(c.x,c.y,{minFilter:p,magFilter:p,depthBuffer:!1,stencilBuffer:!1}),_e=new ce(c.x,c.y,{minFilter:p,magFilter:p,depthBuffer:!1,stencilBuffer:!1}),ve=new E,ye=new S(-1,1,1,-1,0,1),be=new l(new s(2,2));ve.add(be);let xe=new _({vertexShader:dn,fragmentShader:hn,uniforms:{uScene:{value:H.texture},uTime:{value:0},uResolution:{value:new F(c.x,c.y)},uGrain:{value:1},uChroma:{value:1},uExposure:{value:1}}}),Se=e=>{let t=e.map(e=>new R(e));for(;t.length<8;)t.push(new R(0,0,0));return t},Ce=[`night`,`dawn`,`noon`,`dusk`],we={inkgold:Ce.map(e=>Se(wn[e])),terminal:Ce.map(e=>Se(Tn[e]))},Te=new _({vertexShader:dn,fragmentShader:gn,uniforms:{uScene:{value:me.texture},uResolution:{value:new F(c.x,c.y)},uPixelSize:{value:Cn},uPalette:{value:we.inkgold[2]},uPaletteB:{value:we.inkgold[2]},uPaletteBlend:{value:0},uPaletteSize:{value:5}}}),Ee=new _({vertexShader:dn,fragmentShader:yn,uniforms:{uScene:{value:me.texture},uResolution:{value:new F(c.x,c.y)},uGridWidth:{value:160},uDither:{value:.55},uPalette:{value:Sn(bn[`8-bit`].palette)},uPaletteSize:{value:1},uUsePalette:{value:1}}}),U={};for(let e of xn)U[e]=bn[e].palette?Sn(bn[e].palette):null;let W=new _({vertexShader:dn,fragmentShader:_n,uniforms:{uScene:{value:me.texture},uDepth:{value:pe},uResolution:{value:new F(c.x,c.y)},uBands:{value:4},uToonGain:{value:1.7},uToonGamma:{value:.6},uToonFloor:{value:C.toonFloor},uOutline:{value:C.outline},uNear:{value:.1},uFar:{value:100},uIsPerspective:{value:1}}}),De=new _({vertexShader:dn,fragmentShader:vn,uniforms:{uToon:{value:he.texture},uPixel:{value:_e.texture},uBlend:{value:0}}});function G(e,t){be.material=e,i.setRenderTarget(t),i.render(ve,ye)}function Oe(){x.setViewport(window.innerWidth,window.innerHeight),i.setSize(window.innerWidth,window.innerHeight);let e=i.getDrawingBufferSize(new F);return P.setSize(e.x,e.y),H.setSize(e.x,e.y),me.setSize(e.x,e.y),he.setSize(e.x,e.y),_e.setSize(e.x,e.y),re.uniforms.uResolution.value.set(e.x,e.y),xe.uniforms.uResolution.value.set(e.x,e.y),Te.uniforms.uResolution.value.set(e.x,e.y),Ee.uniforms.uResolution.value.set(e.x,e.y),W.uniforms.uResolution.value.set(e.x,e.y),e}let K=3,q=!1,J=!1,Y=`native`,Re=.3,ze=.46,Be=[`native`,...xn],Ve={"16-bit":`16-bit`,"8-bit":`8-bit`,gb:`Game Boy`,modern:`Modern`,native:`Pixel`,"1-bit":`1-bit`};typeof window<`u`&&(window.__mode=K,window.__vector=q,window.__era=Y);let X=0,He=performance.now(),Ue=typeof window<`u`&&new URLSearchParams(window.location.search).has(`perf`);typeof window<`u`&&(window.__perf=Ue),Ue&&(i.info.autoReset=!1);let Z=null;typeof window<`u`&&(window.__loaded=!1);let We=0,Ge=new k(1,1,1),Ke=!1;function qe(e){let t=J?we.terminal:we.inkgold,n=e%1*4,r=Math.floor(n)%4;Te.uniforms.uPalette.value=t[r],Te.uniforms.uPaletteB.value=t[(r+1)%4],Te.uniforms.uPaletteBlend.value=n-Math.floor(n)}function Je(e){let t=bn[e];t&&(Ee.uniforms.uGridWidth.value=t.gridWidth,Ee.uniforms.uDither.value=t.dither,Ee.uniforms.uUsePalette.value=+!!t.palette,t.palette&&(Ee.uniforms.uPalette.value=U[e],Ee.uniforms.uPaletteSize.value=t.palette.length))}function Ye(){Y!==`native`&&Je(Y)}let Xe=()=>Y===`native`?Te:Ee;function Q(e,t){ie.visible=!1,i.setRenderTarget(P),i.render(d,e),ie.visible=!0,i.setRenderTarget(t),i.render(d,e)}function Ze(e,t){if(ie.visible=!1,i.setRenderTarget(P),i.render(d,x.camera),ie.visible=!0,K===1)i.setRenderTarget(t),i.render(d,x.camera);else if(i.setRenderTarget(H),i.render(d,x.camera),K===2)xe.uniforms.uGrain.value=1,xe.uniforms.uChroma.value=1,G(xe,t);else{xe.uniforms.uGrain.value=0,xe.uniforms.uChroma.value=0,G(xe,me);let n=x.camera;W.uniforms.uNear.value=n.near,W.uniforms.uFar.value=n.far,W.uniforms.uIsPerspective.value=+!!n.isPerspectiveCamera;let r=e.era?(Je(e.era),Ee):Xe();e.kind===`pixel`?(G(r,t),window.__style=`pixel`):e.kind===`toon`?(G(W,t),window.__style=`toon`):(G(W,he),G(r,_e),De.uniforms.uBlend.value=e.blend,G(De,t),window.__style=`blend`)}}function Qe(){let e=$e(),t=e.kind===`toon`?1:e.kind===`blend`?1-e.blend:0;return re.uniforms.uChromaScale.value=g.lerp(1,.5,t),e}function $e(){if(K===1||K===2)return{kind:`none`};if(K===7)return{kind:`pixel`};if(K===8)return{kind:`toon`};let e=x.styleT;return window.__styleT=e,e<=Re?{kind:`toon`}:e>=ze?{kind:`pixel`,era:e<.62?`16-bit`:e<.8?`8-bit`:`gb`}:{kind:`blend`,blend:g.smoothstep(e,Re,ze),era:`16-bit`}}function tt(e){return K===1||K===2?``:q&&K!==7&&K!==8?`Vector`:e.kind===`toon`?`Toon`:e.kind===`pixel`?Ve[e.era||Y]||`Pixel`:e.kind===`blend`?`Toon → `+(Ve[e.era]||`Pixel`):``}function nt(e,t,{shadowsOn:n=!0,seasonTarget:r=0}={}){if(Ue){let e=i.info;Z={calls:e.render.calls,tris:e.render.triangles,programs:e.programs?e.programs.length:0,geo:e.memory.geometries,tex:e.memory.textures},e.reset()}I.material.uniforms.uTime.value=t,xe.uniforms.uTime.value=t,C.update(e),L.key.position.copy(C.sunDir).multiplyScalar(24),L.key.color.copy(C.sunColor),L.key.intensity=C.sunIntensity,L.fill.color.copy(C.hemiSky),L.fill.groundColor.copy(C.hemiGround),ae.value=C.windowGlow;let a=V.overcast;L.key.intensity*=1-.5*a,L.key.color.lerp(m,.45*a),L.fill.intensity=1+.7*a;let o=g.smoothstep(C.sunDir.y,.06,.34),s=g.lerp(.28,1,1-C.windowGlow),c=n?o*s:0;L.key.shadow.intensity=.72*c,Me.value=.52*c,(n&&!Ke||Ge.distanceToSquared(C.sunDir)>2e-5)&&(i.shadowMap.needsUpdate=!0,Ge.copy(C.sunDir)),Ke=n;let l=1-C.windowGlow;je.setRGB(g.lerp(.46,1,l),g.lerp(.52,1,l),g.lerp(.74,1,l)),xe.uniforms.uExposure.value=C.exposure,W.uniforms.uToonGain.value=C.toonGain,i.setClearColor(C.horizon,1),qe(C.t),window.__t=C.t,z.update(e,t,C),L.update(t),B.update(e,t,C),M.uniforms.uWakeCount.value=B.wakeCount,V.update(e,t),M.uniforms.uRainCount.value=V.rainDropCount;let u=V.fog*(1-l);d.fog.density=V.fog*h,y.copy(C.horizon).lerp(v,.85*u),d.fog.color.copy(y),i.setClearColor(y,1),Ie.value=V.fog,I.material.uniforms.uFogAmt.value=.7*V.fog,Ne.value=V.snow,Pe.value=V.cloud*.55,Fe.x+=e*.018,Fe.y+=e*.009,Le.value+=(r-Le.value)*Math.min(1,e*1.5),le.update(e,t,C,V);let f=$e(),p=f.kind===`pixel`||f.kind===`blend`?`pixel`:q||f.kind===`toon`?`charm`:`realistic`;de.update(e,t,C,V,p),X++;let _=performance.now();_-He>=1e3&&(window.__fps=X,Ue&&Z&&(console.log(`[perf] ${X} fps · ~${(1e3/Math.max(1,X)).toFixed(2)} ms · calls ${Z.calls} · tris ${Z.tris} · programs ${Z.programs} · geo ${Z.geo} · tex ${Z.tex}`),window.__perfInfo={fps:X,...Z}),X=0,He=_);let[b,x,S]=O;if(M.uniforms.uPrev.value=b.texture,M.uniforms.uCurr.value=x.texture,i.setRenderTarget(S),i.render(ee,j),O=[x,S,b],re.uniforms.uHeight.value=O[1].texture,We<2&&typeof document<`u`&&++We===2){let e=document.getElementById(`lgr-loader`);e&&e.classList.add(`gone`),window.__loaded=!0}}function rt(e){K=e,window.__mode=K}function it(){return q=!q,Ae.value=+!!q,window.__vector=q,q}function at(e){return q=!!e,Ae.value=+!!q,window.__vector=q,q}function ot(){return Y=Be[(Be.indexOf(Y)+1)%Be.length],window.__era=Y,Ye(),Y}function st(){return J=!J,J}return{updateWorld:nt,decideStyle:Qe,renderCityPipeline:Ze,renderCityBeautyTo:Q,styleHintName:tt,setPostMode:rt,toggleVector:it,setVector:at,cycleEra:ot,togglePalette:st,get mode(){return K},get vector(){return q},get sceneEra(){return Y},renderer:i,drawBuffer:c,scene:d,rig:x,sunRig:C,SIM:256,targets:O,simScene:ee,simCamera:j,simMaterial:M,grabRT:P,card:ne,backdrop:I,WATER_SIZE:28,water:ie,waterMaterial:re,windowGlow:ae,landmarkFactory:se,city:L,cityLife:z,waterLife:B,weatherRig:V,clouds:le,inspector:ue,fitShadowFrustum:fe,SHADOW_DIST:24,sceneDepth:pe,sceneRT:H,filmicRT:me,toonRT:he,pixelRT:_e,postScene:ve,postCamera:ye,postQuad:be,filmicMaterial:xe,pixelMaterial:Te,pixelkitMaterial:Ee,toonMaterial:W,mixMaterial:De,PALCACHE:we,ERA_TEX:U,runPass:G,OVERCAST_GREY:m,FOG_DENSITY:h,FOG_NIGHT_TINT:v,_fogColor:y,resize:Oe}}var Dn=`lgr_hints_`,On=!1;function kn(){if(On||typeof document>`u`)return;On=!0;let e=document.createElement(`style`);e.textContent=`
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
  }`,document.head.appendChild(e)}function An({key:e,title:t=`Tips`,tips:n=[],force:r=!1}={}){let i={key:e,shown:!1,dismissed:!1,seen:!1};if(typeof window<`u`&&(window.__hints=i),typeof document>`u`||!e)return{dismiss(){},el:null};let a=Dn+e,o=!1;try{o=localStorage.getItem(a)===`1`}catch{}if(o&&!r)return i.seen=!0,{dismiss(){},el:null};kn();let s=!!(window.matchMedia&&window.matchMedia(`(prefers-reduced-motion: reduce)`).matches),c=document.createElement(`div`);c.className=`lgr-hints`,c.innerHTML=`<div class="lgr-hints-card">
    <div class="lgr-hints-h">${t}</div>
    <ul>${n.map(e=>`<li>${e}</li>`).join(``)}</ul>
    <button class="lgr-hints-ok">Got it</button>
    <button class="lgr-hints-x" title="Dismiss (Esc)" aria-label="Dismiss">✕</button>
  </div>`,document.body.appendChild(c),i.shown=!0,s?c.classList.add(`on`):requestAnimationFrame(()=>c.classList.add(`on`));let l=!1;function u(e=!0){if(!l){if(l=!0,e)try{localStorage.setItem(a,`1`)}catch{}i.dismissed=!0,window.removeEventListener(`keydown`,d),c.classList.remove(`on`),setTimeout(()=>c.remove(),s?0:300)}}function d(e){e.key===`Escape`&&u(!0)}return window.addEventListener(`keydown`,d),c.querySelector(`.lgr-hints-ok`).addEventListener(`click`,()=>{navigator.vibrate?.(10),u(!0)}),c.querySelector(`.lgr-hints-x`).addEventListener(`click`,()=>{navigator.vibrate?.(10),u(!0)}),{dismiss:u,el:c}}var jn=new Set([`w`,`a`,`s`,`d`,`arrowup`,`arrowdown`,`arrowleft`,`arrowright`,`shift`,` `]),Mn={walker:{p:.6,hp:26,speed:.85,dmg:9,score:10,size:1,color:`#6f8a45`},runner:{p:.25,hp:12,speed:1.75,dmg:7,score:16,size:.82,color:`#a6d24c`},tank:{p:.15,hp:95,speed:.5,dmg:20,score:34,size:1.5,color:`#39492a`}};function Nn(){let e=Math.random();return e<Mn.walker.p?`walker`:e<Mn.walker.p+Mn.runner.p?`runner`:`tank`}var Pn=new R(`#ffffff`),Fn=new R(`#d83a2a`),In={food:{name:`Food`,glyph:`🍖`,color:`#c8782e`,consumable:!0},water:{name:`Water`,glyph:`💧`,color:`#3aa6dc`,consumable:!0},bandage:{name:`Bandage`,glyph:`➕`,color:`#e8e2d6`,consumable:!0},scrap:{name:`Scrap`,glyph:`⚙️`,color:`#8a8f96`,consumable:!1},medkit:{name:`Medkit`,glyph:`✚`,color:`#e0524a`,consumable:!0},repairkit:{name:`Repair Kit`,glyph:`🔧`,color:`#caa05a`,consumable:!0}},Ln=[{out:`medkit`,need:{bandage:2}},{out:`repairkit`,need:{scrap:3}}];function Rn({extent:e=8,plinthTop:r=.3}={}){let a=new H;a.visible=!1,a.raycast=()=>{};let o=r+.02,s=Math.max(3,e-.7),c=typeof window<`u`&&window.matchMedia&&window.matchMedia(`(pointer: coarse)`).matches,u=1.25,d=4.4,p=1.4,m=new H,h=new l(new ie(.16,.34,4,10),X(new v({color:`#3f7fd0`,roughness:.6,flatShading:!0}),{color:`#3f7fd0`}));h.position.y=.33;let _=new l(new M(.13,12,9),X(new v({color:`#e9caa1`,roughness:.75,flatShading:!0}),{color:`#e9caa1`}));_.position.y=.66;let y=new l(new O(.1,.1,.16),X(new v({color:`#ffd54a`,roughness:.5,flatShading:!0}),{color:`#ffd54a`}));y.position.set(0,.38,.18),m.add(h,_,y),m.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!1),e.raycast=()=>{}}),m.scale.setScalar(1.6),m.position.y=o,a.add(m);let b=new l(new j(.95,16,-.9,1.8),new f({color:`#ffe08a`,transparent:!0,opacity:0,depthWrite:!1,side:2}));b.rotation.x=-Math.PI/2,b.position.y=o+.06,b.raycast=()=>{},a.add(b);let x=new le().setFromPoints([new k,new k]),S=new re(x,new t({color:`#fff3c0`,transparent:!0,opacity:0,depthWrite:!1}));S.raycast=()=>{},a.add(S);let C={x:0,z:0,vx:0,vz:0,hp:100,stamina:100,hunger:100,thirst:100,facing:0,iframe:0},w=new i(new ie(.15,.3,4,8),X(new v({roughness:.85,flatShading:!0})),48);w.castShadow=!0,w.receiveShadow=!1,w.frustumCulled=!1,w.raycast=()=>{},w.instanceMatrix.setUsage(he),a.add(w);let T=[];for(let e=0;e<48;e++)T.push({x:0,z:0,vx:0,vz:0,alive:!1,in:!1,type:`walker`,hp:1,maxhp:1,speed:1,dmg:0,score:0,size:1,phase:0,flash:0});let E=new R,D=[],ee=X(new v({color:`#7a5a36`,roughness:.9,flatShading:!0}),{color:`#7a5a36`});for(let e=0;e<8;e++){let t=e/8*Math.PI*2,n=new l(new O(2.1,.7,.24),ee.clone());n.position.set(Math.cos(t)*d,o+.35,Math.sin(t)*d),n.rotation.y=-t+Math.PI/2,n.castShadow=!0,n.raycast=()=>{},a.add(n),D.push({mesh:n,ang:t,hp:150,alive:!0,baseColor:new R(`#7a5a36`)})}function A(e,t){let n=Math.atan2(t,e);return n<0&&(n+=Math.PI*2),D[Math.round(n/(Math.PI*2/8))%8]}let N=[];for(let e=0;e<14;e++){let e=new l(new O(.26,.26,.26),X(new v({roughness:.6,flatShading:!0})));e.castShadow=!0,e.visible=!1,e.raycast=()=>{},a.add(e),N.push({mesh:e,x:0,z:0,kind:`food`,active:!1})}let P=new R;function te(){let e=Math.random();return e<.36?`food`:e<.72?`water`:e<.88?`bandage`:`scrap`}function ne(e,t,n){let r=N.find(e=>!e.active);r&&(r.x=e,r.z=t,r.kind=n||te(),r.active=!0,r.mesh.position.set(e,o+.18,t),r.mesh.visible=!0,r.mesh.material.color.copy(P.set(In[r.kind].color)))}let F=[];function I(e){let t=F.find(t=>t.id===e);return t?t.n:0}function ae(e,t=1){let n=F.find(t=>t.id===e);return n?(n.n+=t,!0):F.length<8?(F.push({id:e,n:t}),!0):!1}function oe(e,t){let n=F.find(t=>t.id===e);return!n||n.n<t?!1:(n.n-=t,n.n<=0&&F.splice(F.indexOf(n),1),!0)}function se(e){if(I(e)<=0)return!1;if(e===`food`)C.hunger=Math.min(100,C.hunger+38);else if(e===`water`)C.thirst=Math.min(100,C.thirst+38);else if(e===`bandage`)C.hp=Math.min(100,C.hp+40);else if(e===`medkit`)C.hp=Math.min(100,C.hp+90);else if(e===`repairkit`){let e=null;for(let t of D)(!e||t.hp<e.hp)&&(e=t);e&&(e.hp=150,e.alive=!0)}else return!1;return oe(e,1),Z(),!0}function L(e){for(let t in e.need)if(I(t)<e.need[t])return!1;for(let t in e.need)oe(t,e.need[t]);return ae(e.out,1),Z(),!0}let ce=!1,z=!1,B=1,V=0,ue=0,de=0,fe=`spawning`,pe=0,me=0,ge=0,_e=0,ve=!1,ye=null;function be(){for(let e=0;e<48;e++)if(!T[e].alive)return T[e];return null}function xe(e){let t=be();if(!t)return;let n=Mn[Nn()];t.type=Object.keys(Mn).find(e=>Mn[e]===n)||`walker`;let r=Math.random()*Math.PI*2;t.x=Math.cos(r)*s,t.z=Math.sin(r)*s,t.vx=0,t.vz=0;let i=1+B*.08;t.maxhp=n.hp*i,t.hp=t.maxhp,t.speed=n.speed*(1+.4*e)*(1+B*.015)*(B===1?.85:1),t.dmg=n.dmg,t.score=n.score,t.size=n.size,t.phase=Math.random()*6.28,t.flash=0,t.in=!1,t.alive=!0}function Se(){let e=null,t=1/0;for(let n of T){if(!n.alive)continue;let r=(n.x-C.x)**2+(n.z-C.z)**2;r<t&&(t=r,e=n)}return e}function Ce(e){e.alive=!1,V++,ue+=e.score,Math.random()<.3&&ne(e.x,e.z)}function we(e,t){e.hp-=t,e.flash=.12,e.hp<=0&&Ce(e)}function Te(){if(z||ge>0)return;ge=.16;let e,t;if(ye)e=ye.x-C.x,t=ye.z-C.z;else{let n=Se();n?(e=n.x-C.x,t=n.z-C.z):(e=Math.sin(C.facing),t=Math.cos(C.facing))}let n=Math.hypot(e,t)||1;e/=n,t/=n,C.facing=Math.atan2(e,t);let r=null,i=1/0;for(let n of T){if(!n.alive)continue;let a=n.x-C.x,o=n.z-C.z,s=a*e+o*t;s<0||s>9||Math.abs(a*t-o*e)<.7*(.4+.6*n.size)&&s<i&&(i=s,r=n)}let a=r?i:9,s=x.attributes.position;s.setXYZ(0,C.x,o+.5,C.z),s.setXYZ(1,C.x+e*a,o+.5,C.z+t*a),s.needsUpdate=!0,S.material.opacity=.95,r&&we(r,16)}function Ee(){if(z||_e>0)return;_e=.42,b.material.opacity=.85;let e=Math.sin(C.facing),t=Math.cos(C.facing);for(let n of T){if(!n.alive)continue;let r=n.x-C.x,i=n.z-C.z,a=Math.hypot(r,i);a>1.05+n.size*.2||(r*e+i*t)/(a||1)>.2&&we(n,34)}}let U={},W={x:0,y:0};function De(e,t){if(!ce)return;let n=e.key.toLowerCase();if(t&&n===`i`){e.stopImmediatePropagation(),Ke();return}if(t&&n===`escape`&&Y){e.stopImmediatePropagation(),Ge();return}if(jn.has(n)){if(e.stopImmediatePropagation(),n.startsWith(`arrow`)&&e.preventDefault(),n===` `){t&&Ee();return}U[n]=t}}typeof window<`u`&&(window.addEventListener(`keydown`,e=>De(e,!0)),window.addEventListener(`keyup`,e=>De(e,!1)));let G=null,Oe=null,K=null,ke=null,Ae=null,je=null,Me=null,Ne=null,Pe=null,Fe=null,Ie=null,Le=null,q=null,J=null,Y=!1;if(typeof document<`u`){let e=document.createElement(`style`);e.textContent=`
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
    `,document.head.appendChild(e),G=document.createElement(`div`),G.className=`hoard-stick`,Oe=document.createElement(`div`),Oe.className=`knob`,G.appendChild(Oe),document.body.appendChild(G);let t=!1,n=e=>{let t=G.getBoundingClientRect(),n=e.clientX-(t.left+t.width/2),r=e.clientY-(t.top+t.height/2),i=Math.hypot(n,r)||1;i>44&&(n*=44/i,r*=44/i),Oe.style.transform=`translate(${n}px,${r}px)`,W.x=n/44,W.y=-r/44};G.addEventListener(`pointerdown`,e=>{t=!0,G.setPointerCapture(e.pointerId),n(e)}),G.addEventListener(`pointermove`,e=>{t&&n(e)});let r=()=>{t=!1,W.x=0,W.y=0,Oe.style.transform=`translate(0,0)`};G.addEventListener(`pointerup`,r),G.addEventListener(`pointercancel`,r),Ie=document.createElement(`button`),Ie.className=`hoard-btn hoard-fire`,Ie.textContent=`FIRE`,document.body.appendChild(Ie),Le=document.createElement(`button`),Le.className=`hoard-btn hoard-melee`,Le.textContent=`MELEE`,document.body.appendChild(Le),Ie.addEventListener(`pointerdown`,e=>{e.preventDefault(),navigator.vibrate?.(12),ve=!0}),Ie.addEventListener(`pointerup`,()=>{ve=!1}),Ie.addEventListener(`pointercancel`,()=>{ve=!1}),Le.addEventListener(`pointerdown`,e=>{e.preventDefault(),navigator.vibrate?.(18),Ee()}),K=document.createElement(`div`),K.className=`hoard-hud`,K.innerHTML=`HP<div class="bar"><i style="background:#e0524a"></i></div>STAMINA<div class="bar"><i style="background:#4ad08a"></i></div>HUNGER<div class="bar"><i style="background:#d89a3a"></i></div>THIRST<div class="bar"><i style="background:#3aa6dc"></i></div><div class="stat"></div>`,document.body.appendChild(K);let i=K.querySelectorAll(`i`);ke=i[0],Ae=i[1],je=i[2],Me=i[3],Ne=K.querySelector(`.stat`),Pe=document.createElement(`div`),Pe.className=`hoard-banner`,document.body.appendChild(Pe),Fe=document.createElement(`div`),Fe.className=`hoard-death`,Fe.innerHTML=`<h2>YOU DIED</h2><div class="ds"></div><button>RESTART</button>`,document.body.appendChild(Fe),Fe.querySelector(`button`).addEventListener(`click`,()=>Ye());let a=document.createElement(`style`);a.textContent=`
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
    `,document.head.appendChild(a),q=document.createElement(`button`),q.className=`hoard-bagbtn`,q.textContent=`🎒`,q.title=`Inventory (I)`,document.body.appendChild(q),q.addEventListener(`click`,()=>Ke()),J=document.createElement(`div`),J.className=`hoard-bag`,document.body.appendChild(J)}let Re=0;function ze(e,t=1.8){Pe&&(Pe.textContent=e,Pe.style.display=`block`),Re=t}let Be=Math.PI/4;function Ve(e){Be=e}function He(e,t){ye={x:e,z:t}}function Ue(e){ve=e}function Z(){if(typeof window<`u`&&(window.__hoardBag=Object.fromEntries(F.map(e=>[e.id,e.n]))),!J)return;let e=`<div class="panel"><h3>INVENTORY</h3><div class="slots">`;for(let t=0;t<8;t++){let n=F[t];n?e+=`<button class="slot" data-id="${n.id}" title="${In[n.id].name}">${In[n.id].glyph}<span class="n">${n.n}</span></button>`:e+=`<div class="slot empty"></div>`}e+=`</div><div class="craft">`,Ln.forEach((t,n)=>{let r=Object.keys(t.need).every(e=>I(e)>=t.need[e]),i=Object.entries(t.need).map(([e,t])=>`${t}${In[e].glyph}`).join(`+`);e+=`<button data-rec="${n}" ${r?``:`disabled`}>Craft ${In[t.out].name} (${i})</button>`}),e+=`</div><button class="close">CLOSE (I)</button></div>`,J.innerHTML=e,J.querySelectorAll(`.slot[data-id]`).forEach(e=>e.addEventListener(`click`,()=>{In[e.dataset.id].consumable&&se(e.dataset.id)})),J.querySelectorAll(`[data-rec]`).forEach(e=>e.addEventListener(`click`,()=>L(Ln[+e.dataset.rec]))),J.querySelector(`.close`).addEventListener(`click`,()=>Ge())}function We(){!ce||z||(Y=!0,J&&J.classList.add(`open`),Z())}function Ge(){Y=!1,J&&J.classList.remove(`open`)}function Ke(){Y?Ge():We()}function qe(e){B=e,me=5+e*2,fe=`spawning`}function Je(){C.x=0,C.z=0,C.vx=0,C.vz=0,C.hp=100,C.stamina=100,C.hunger=100,C.thirst=100,C.facing=0,C.iframe=0;for(let e of T)e.alive=!1;V=0,ue=0,de=0,z=!1,ve=!1,ye=null;for(let e of D)e.hp=150,e.alive=!0,e.mesh.scale.set(1,1,1);for(let e of N)e.active=!1,e.mesh.visible=!1;F.length=0;let e=[`food`,`water`,`food`,`water`,`bandage`,`scrap`];for(let t=0;t<6;t++){let n=Math.random()*Math.PI*2,r=1.6+Math.random()*(s-2);ne(Math.cos(n)*r,Math.sin(n)*r,e[t])}Fe&&(Fe.style.display=`none`),m.position.set(0,o,0),m.visible=!0,qe(1),Z()}function Ye(){Je()}function Xe(e){ce=e,a.visible=e;let t=e&&c;G&&(G.style.display=t?`block`:`none`),Ie&&(Ie.style.display=t?`block`:`none`),Le&&(Le.style.display=t?`block`:`none`),K&&(K.style.display=e?`block`:`none`),Pe&&!e&&(Pe.style.display=`none`),Fe&&!e&&(Fe.style.display=`none`),q&&(q.style.display=e?`block`:`none`),Ge();for(let e in U)U[e]=!1;W.x=W.y=0,ve=!1,e&&Je()}let Q=new n;function Ze(e,t,n){if(!ce||Y)return;let r=n?n.windowGlow:0;if(ge=Math.max(0,ge-e),_e=Math.max(0,_e-e),S.material.opacity=Math.max(0,S.material.opacity-e*8),b.material.opacity=Math.max(0,b.material.opacity-e*6),!z){de+=e,C.iframe=Math.max(0,C.iframe-e);let n=(U.d||U.arrowright?1:0)-(U.a||U.arrowleft?1:0)+W.x,r=(U.w||U.arrowup?1:0)-(U.s||U.arrowdown?1:0)+W.y,i=Math.hypot(n,r);i>1&&(n/=i,r/=i);let a=i>.05,c=(U.shift||W.y>.95)&&C.stamina>2&&a,l=Math.cos(Be),u=Math.sin(Be),f=l*n+-u*r,h=-u*n+-l*r,_=c?5.2:3,v=1-Math.exp(-14*e);C.vx+=(f*_-C.vx)*v,C.vz+=(h*_-C.vz)*v,C.x+=C.vx*e,C.z+=C.vz*e;let y=Math.hypot(C.x,C.z);y>s&&(C.x*=s/y,C.z*=s/y,C.vx=0,C.vz=0),a&&(C.facing=Math.atan2(f,h)),C.stamina=g.clamp(C.stamina+(c?-34:22)*e,0,100),C.hunger=Math.max(0,C.hunger-.9*e),C.thirst=Math.max(0,C.thirst-1.15*e),C.hunger<=0||C.thirst<=0?C.hp=Math.max(0,C.hp-3.5*e):C.hunger>55&&C.thirst>55&&C.hp<100&&(C.hp=Math.min(100,C.hp+2*e));for(let e of N)e.active&&(e.x-C.x)**2+(e.z-C.z)**2<.3&&ae(e.kind)&&(e.active=!1,e.mesh.visible=!1,Z());for(let t of D){if(t.hp>=150)continue;let n=Math.cos(t.ang)*d,r=Math.sin(t.ang)*d;(n-C.x)**2+(r-C.z)**2<p*p&&(t.hp=Math.min(150,t.hp+30*e),t.hp>0&&(t.alive=!0))}C.hp<=0&&Qe(),m.position.set(C.x,o,C.z),m.rotation.y=C.facing,m.visible=!(C.iframe>0&&Math.floor(t*20)%2==0),ve&&Te(),b.position.set(C.x,o+.06,C.z),b.rotation.z=-C.facing}let i=0;z||fe===`spawning`&&(me>0&&Math.random()<e*(B===1?3.5:6)&&(xe(r),me--),me<=0&&(fe=`fighting`));let a=0,c=1/0;for(let n=0;n<48;n++){let r=T[n];if(!r.alive){Q.position.set(0,-60,0),Q.scale.setScalar(0),Q.updateMatrix(),w.setMatrixAt(n,Q.matrix);continue}i++;let s=C.x-r.x,l=C.z-r.z,f=Math.hypot(s,l)||1;if(f<c&&(c=f),!z){let t=s/f*r.speed,n=l/f*r.speed,i=1-Math.exp(-6*e);if(r.vx+=(t-r.vx)*i,r.vz+=(n-r.vz)*i,f>.52){let t=r.x+r.vx*e,n=r.z+r.vz*e,i=Math.hypot(r.x,r.z),a=Math.hypot(t,n);if(!r.in&&i>=d&&a<4.9){let r=A(t,n);if(r.alive){let i=Math.atan2(n,t),a=4.9;t=Math.cos(i)*a,n=Math.sin(i)*a,r.hp-=15*e,r.hp<=0&&(r.hp=0,r.alive=!1)}}a<d-.1&&(r.in=!0),r.x=t,r.z=n}else C.iframe<=0&&(a=Math.max(a,r.dmg))}r.flash=Math.max(0,r.flash-e);let p=Math.sin(t*6+r.phase)*.04;Q.position.set(r.x,o+.3*r.size*u+p,r.z),Q.rotation.set(0,Math.atan2(r.vx,r.vz),Math.sin(t*3+r.phase)*.12),Q.scale.setScalar(r.size*u),Q.updateMatrix(),w.setMatrixAt(n,Q.matrix),E.set(Mn[r.type].color),r.flash>0?E.lerp(Pn,.7):E.lerp(Fn,.35*(1-r.hp/r.maxhp)),w.setColorAt(n,E)}w.instanceMatrix.needsUpdate=!0,w.instanceColor&&(w.instanceColor.needsUpdate=!0);let l=0;for(let e of D){e.alive&&l++;let t=Math.max(0,e.hp/150);e.mesh.scale.y=e.alive?Math.max(.18,t):.12,e.mesh.position.y=o+.35*e.mesh.scale.y,e.mesh.material.color.copy(e.baseColor).lerp(Fn,(1-t)*.55)}!z&&a>0&&(C.hp=Math.max(0,C.hp-a*(B===1?.5:1)),C.iframe=.6,C.hp<=0&&Qe()),!z&&fe===`fighting`&&i===0&&me<=0&&(fe=`complete`,pe=2.2,ze(`WAVE ${B} CLEAR`,2)),!z&&fe===`complete`&&(pe-=e,pe<=0&&(qe(B+1),ze(`WAVE ${B}`,1.4))),Re>0&&(Re-=e,Re<=0&&Pe&&(Pe.style.display=`none`)),ke&&(ke.style.width=`${C.hp}%`),Ae&&(Ae.style.width=`${C.stamina}%`),je&&(je.style.width=`${C.hunger}%`),Me&&(Me.style.width=`${C.thirst}%`),Ne&&(Ne.textContent=`WAVE ${B}   KILLS ${V}   SCORE ${ue}`),typeof window<`u`&&(window.__hoard={active:ce,dead:z,paused:Y,hp:Math.round(C.hp),stamina:Math.round(C.stamina),hunger:Math.round(C.hunger),thirst:Math.round(C.thirst),zombies:i,barriers:l,pickups:N.filter(e=>e.active).length,inv:Object.fromEntries(F.map(e=>[e.id,e.n])),wave:B,kills:V,score:ue,weapon:`gun`,znear:+c.toFixed(2),px:+C.x.toFixed(2),pz:+C.z.toFixed(2)})}function Qe(){z=!0,ve=!1,Fe&&(Fe.querySelector(`.ds`).innerHTML=`Wave reached: ${B}<br>Kills: ${V}<br>Score: ${ue}<br>Survived: ${de.toFixed(0)}s`,Fe.style.display=`flex`)}return{group:a,update:Ze,setActive:Xe,setAzimuth:Ve,setAim:He,setFiring:Ue,melee:Ee,reset:Je,restart:Ye,openBag:We,closeBag:Ge,toggleBag:Ke,addItem:ae,get player(){return C},get dead(){return z},get active(){return ce},get paused(){return Y},get inv(){return F.map(e=>({...e}))},get nearestPickup(){let e=null,t=1e9;for(let n of N){if(!n.active)continue;let r=(n.x-C.x)**2+(n.z-C.z)**2;r<t&&(t=r,e=n)}return e?{x:e.x,z:e.z}:null},setTarget(){}}}var{Timer:zn}=B,Bn=new URLSearchParams(window.location.search),Vn=Bn.get(`demo`)===`1`||Bn.has(`capture`);window.__demo=Vn;var Hn=(Bn.get(`city`)?Number(Bn.get(`city`)):0)||Math.random()*1e9|0,Un=0,Wn=En({demo:Vn,citySeed:Hn,profileIndex:Un}),{renderer:Gn,scene:Kn,rig:qn,sunRig:Jn,city:Yn,landmarkFactory:Xn}=Wn,Zn=Rn({extent:Yn.extent,plinthTop:.3});Kn.add(Zn.group),window.__hoardApi=Zn;var Qn=!0;window.__shadows=Qn,window.__scene=`hoard`;var $n=new k,er=new Set,tr=6.5;function nr(e){Yn.group.traverse(t=>{!t.isMesh||t.userData.ground||!t.visible||(t.getWorldPosition($n),Math.hypot($n.x,$n.z)<e&&(t.visible=!1,er.add(t)))})}function rr(){for(let e of er)e.visible=!0;er.clear()}var ir=new T,ar=new k,or=new k,sr=new Set;function cr(){for(let e of sr)e.material&&(e.material.opacity=1,e.material.transparent=!!e.userData._wasT,e.material.depthWrite=e.userData._wasDW!==!1);sr.clear()}function lr(e){cr();let t=qn.camera;for(let[n,r]of[[0,0],[.7,.4],[-.7,.4]]){or.set(e.x+n,.6,e.z+r),ar.subVectors(or,t.position);let i=ar.length();ir.set(t.position,ar.normalize()),ir.far=i-.4;for(let e of ir.intersectObject(Yn.group,!0)){let t=e.object;!t.material||t.userData.ground||sr.has(t)||(t.userData._wasT=t.material.transparent,t.userData._wasDW=t.material.depthWrite,t.material.transparent=!0,t.material.opacity=.16,t.material.depthWrite=!1,sr.add(t))}}}function ur(){Zn.setActive(!0),nr(tr),qn.setMode(be.DIMETRIC),qn.setZoom(2.8,!0),qn.setTarget(Zn.player.x,.6,Zn.player.z,!0)}var dr=new T,fr=new F,pr=new C(new k(0,1,0),-.32),mr=new k,hr=window.matchMedia&&window.matchMedia(`(pointer: coarse)`).matches,gr=!1,_r=0,vr=0,yr=.005,br=(e,t)=>{fr.x=e/window.innerWidth*2-1,fr.y=-(t/window.innerHeight)*2+1};Gn.domElement.addEventListener(`contextmenu`,e=>e.preventDefault()),Gn.domElement.addEventListener(`mousedown`,e=>{e.button===0&&(br(e.clientX,e.clientY),Zn.setFiring(!0)),e.button===2&&(gr=!0,_r=e.clientX,vr=e.clientY)}),window.addEventListener(`mousemove`,e=>{br(e.clientX,e.clientY),gr&&(qn.orbit(-(e.clientX-_r)*yr,-(e.clientY-vr)*yr),_r=e.clientX,vr=e.clientY)}),window.addEventListener(`mouseup`,()=>{Zn.setFiring(!1),gr=!1}),Gn.domElement.addEventListener(`wheel`,e=>{e.preventDefault(),qn.zoomBy(Math.exp(e.deltaY*.0015))},{passive:!1}),window.addEventListener(`keydown`,e=>{(e.key===`h`||e.key===`H`)&&(Qn=!Qn,window.__shadows=Qn)}),Xn.whenReady.then(()=>{Yn.generate(Hn,Un),Wn.fitShadowFrustum(),rr(),nr(tr),window.__cityReady=!0});var xr=new zn;xr.connect(document);function Sr(){xr.update();let e=Math.min(xr.getDelta(),.1);Zn.setAzimuth(qn.azimuth),hr||(dr.setFromCamera(fr,qn.camera),dr.ray.intersectPlane(pr,mr)&&Zn.setAim(mr.x,mr.z)),Zn.update(e,xr.getElapsed(),Jn),qn.setTarget(Zn.player.x,.6,Zn.player.z),qn.update(e),lr(Zn.player),Wn.updateWorld(e,xr.getElapsed(),{shadowsOn:Qn,seasonTarget:0});let t=Wn.decideStyle();Wn.renderCityPipeline(t,null),requestAnimationFrame(Sr)}ur(),Sr(),An({key:`hoard`,title:`The Hoard`,tips:[`Move: WASD / arrows · on touch: the left thumb-stick`,`Aim: mouse / drag · Fire: hold click / the FIRE button · Melee: the MELEE button`,`Survive the waves · B: bag & crafting · Esc: exit`]}),window.addEventListener(`resize`,()=>{Wn.resize()});