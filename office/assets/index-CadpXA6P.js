import{$ as e,A as t,B as n,C as r,D as i,E as a,F as o,G as s,H as c,I as l,J as u,K as d,L as f,M as p,N as m,O as h,P as g,Q as _,R as v,S as y,T as b,U as x,V as S,W as C,X as w,Y as T,Z as E,_ as D,a as O,at as ee,b as te,c as k,ct as A,d as j,et as M,f as N,g as ne,h as re,i as ie,it as P,j as F,k as I,l as ae,lt as oe,m as se,n as ce,nt as L,o as le,ot as ue,p as R,q as z,r as de,rt as B,s as fe,st as V,t as pe,tt as me,u as he,v as H,w as U,x as ge,y as _e,z as ve}from"./three-kwVHJjHS.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var ye=Math.atan(1/Math.SQRT2),be=Math.atan(.5),xe=Math.PI/4,Se={PERSPECTIVE:4,ISOMETRIC:5,DIMETRIC:6},Ce=.12,we=1.45,Te=4,Ee=40,De=1.5,W=16,Oe=6,G=22,K=3.5,ke=11,q=(e,t,n)=>e+(t-e)*(1-Math.exp(-8*n)),Ae=(e,t)=>e+Math.PI*2*Math.round((t-e)/(Math.PI*2));function je({aspect:e,fov:t=48,near:r=.1,far:i=100,target:a=new A(0,.8,0),azimuth:o=xe,elevation:s=.52,distance:l=12,zoom:u=5.5}={}){let d=new c(t,e,r,i),f=new n(-1,1,1,-1,r,i),p=Se.PERSPECTIVE,h=e,g={azimuth:o,elevation:s,distance:l,zoom:u,target:a.clone()},_={azimuth:o,elevation:s,distance:l,zoom:u,target:a.clone()},v=!1,y=()=>p===Se.PERSPECTIVE?d:f;function b(e){e!==p&&(p=e,p===Se.ISOMETRIC||p===Se.DIMETRIC?(g.elevation=p===Se.ISOMETRIC?ye:be,g.azimuth=Ae(xe,_.azimuth),v=!0):v=!1)}function x(e,t){g.azimuth+=e,v||(g.elevation=m.clamp(g.elevation+t,Ce,we))}function S(e){p===Se.PERSPECTIVE?g.distance=m.clamp(g.distance*e,Te,Ee):g.zoom=m.clamp(g.zoom*e,De,W)}function C(e,t){let n=g.azimuth,r=p===Se.PERSPECTIVE?g.distance*.04:g.zoom*.08,i=new A(Math.cos(n),0,-Math.sin(n)),a=new A(-Math.sin(n),0,-Math.cos(n));g.target.addScaledVector(i,e*r),g.target.addScaledVector(a,t*r)}function w(e,t){h=e/t,d.aspect=h,d.updateProjectionMatrix()}function T(e){_.azimuth=q(_.azimuth,g.azimuth,e),_.elevation=q(_.elevation,g.elevation,e),_.distance=q(_.distance,g.distance,e),_.zoom=q(_.zoom,g.zoom,e),_.target.x=q(_.target.x,g.target.x,e),_.target.y=q(_.target.y,g.target.y,e),_.target.z=q(_.target.z,g.target.z,e);let t=Math.cos(_.elevation),n=Math.sin(_.elevation),r=Math.cos(_.azimuth),i=Math.sin(_.azimuth),a=y();if(a.position.set(_.target.x+_.distance*t*i,_.target.y+_.distance*n,_.target.z+_.distance*t*r),a.lookAt(_.target),a.isOrthographicCamera){let e=_.zoom,t=e*h;a.left=-t,a.right=t,a.top=e,a.bottom=-e,a.updateProjectionMatrix()}}function E(e,t,n,r=!1){g.target.set(e,t,n),r&&_.target.copy(g.target)}function D(e,t=!1){g.zoom=m.clamp(e,De,W),t&&(_.zoom=g.zoom)}return{get camera(){return y()},get mode(){return p},get azimuth(){return _.azimuth},setTarget:E,setZoom:D,get styleT(){return p===Se.PERSPECTIVE?m.clamp((_.distance-Oe)/(G-Oe),0,1):m.clamp((_.zoom-K)/(ke-K),0,1)},setMode:b,orbit:x,zoomBy:S,pan:C,setViewport:w,update:T}}var Me={value:0},Ne=new R(`#ffffff`),Pe={value:0},Fe={value:0},Ie={value:0},Le=new V,Re={value:0},ze={value:0},Be=`
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
#include <shadowmask_pars_fragment>`)}var Ge=`col *= mix(1.0, getShadowMask(), uVecShadow);`;function J(e,{color:t,id:n,windowGlow:r,winColors:i=[`#ffb852`,`#8cd9ff`],litFrac:a=.55}={}){let o=[0,1,2].map(e=>new R(i[e]??i[i.length-1]));return e.customProgramCacheKey=()=>`lgr-vec-tower`,e.onBeforeCompile=e=>{Ve(e),e.uniforms.uWindowGlow=r,e.uniforms.uWinId={value:n},e.uniforms.uVecColor={value:new R(t)},e.uniforms.uWinA={value:o[0]},e.uniforms.uWinB={value:o[1]},e.uniforms.uWinC={value:o[2]},e.uniforms.uWinLit={value:a},e.vertexShader=Ue(e.vertexShader),e.fragmentShader=He(We(e.fragmentShader.replace(`#include <common>`,`#include <common>
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
        }`)))},e}function Y(e,{color:t=null,glow:n=null,glowDay:r=0,glowNight:i=1,windowGlow:a=null,season:o=!1}={}){let s=t===null,c=n!==null&&a!==null;return e.customProgramCacheKey=()=>`lgr-vec|`+(s?`d`:`c`)+(c?`g`:``)+(o?`s`:``),e.onBeforeCompile=e=>{Ve(e),s||(e.uniforms.uVecColor={value:new R(t)}),c&&(e.uniforms.uGlow={value:new R(n)},e.uniforms.uGlowDay={value:r},e.uniforms.uGlowNight={value:i},e.uniforms.uWindowGlow=a),o&&(e.uniforms.uSeason=ze),e.vertexShader=Ue(e.vertexShader);let l=s?`diffuseColor.rgb`:`uVecColor`,u=o?`seasonShift(${l})`:l,d=(s?``:`uniform vec3 uVecColor;
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
        }`)));c&&(p=p.replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>\n  totalEmissiveRadiance += ${f};`)),e.fragmentShader=p},e}function Ke(e){let t=e>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function qe(e){let t=Ke(e);return{next:t,range:(e,n)=>e+(n-e)*t(),int:(e,n)=>e+Math.floor(t()*(n-e+1)),pick:e=>e[Math.floor(t()*e.length)],chance:e=>t()<e}}var Je=[{key:`manhattan`,name:`Manhattan`,towers:[`#EDE3C8`,`#D9B98A`,`#B5562F`,`#A8C8E8`,`#2E3F5C`],ground:`#7CC455`,street:`#9AA0A6`,sidewalk:`#C8CCD0`,park:`#5DB347`,water:`#29A8D8`,shopfronts:[`#C04A3A`,`#3A7AC0`,`#C09A2A`],glass:`#7FA8CC`,winColors:[`#ffd27a`,`#9ad6ff`],hMax:4.6,sigma:.36,roofRate:.35,pSplit:.6,nightLit:.55,roofTint:null,coast:{base:.55,out:1,in:.6,jag:1.05},landmarks:[`empireState`,`chrysler`,`liberty`]},{key:`paris`,name:`Paris`,towers:[`#E8DCC0`,`#F2EAD6`,`#E0D2B4`],ground:`#8CC46A`,street:`#A8A29A`,sidewalk:`#D4CEC2`,park:`#6DB35A`,water:`#3FA8C8`,shopfronts:[`#C04A3A`,`#3A6B5A`,`#7A5AC0`],glass:`#5A6B7A`,winColors:[`#ffdca0`,`#ffcaa0`],hMax:1.5,sigma:.9,roofRate:.15,pSplit:.75,nightLit:.45,roofTint:`#6A7886`,coast:{base:1.05,out:.55,in:.3,jag:.5},landmarks:[`eiffel`,`arcDeTriomphe`,`sacreCoeur`]},{key:`neoTokyo`,name:`Neo-Tokyo`,towers:[`#2A3038`,`#3A4250`,`#252B36`,`#4A4456`],ground:`#3A4A42`,street:`#5A6068`,sidewalk:`#7A8088`,park:`#2E5E46`,water:`#0E6878`,shopfronts:[`#E8483A`,`#5AE8E0`,`#E85AA0`],glass:`#5AE8E0`,winColors:[`#5AE8E0`,`#E85AA0`,`#E8E06A`],hMax:5.2,sigma:.42,roofRate:.6,pSplit:.6,nightLit:.7,roofTint:null,coast:{base:.7,out:1.05,in:.62,jag:1.7},landmarks:[`tokyoTower`,`pagoda`,`neonBillboard`]}];Je.map(e=>e.key);var X=.3,Ye=1.9,Xe=.55,Ze=2.45,Qe=.12,$e=.6,et=6,tt={BASE:.7,OUT:.95,IN:.55,JAG:1,SAMPLES_PER_EDGE:28,HARBOR_DEPTH:.55,HARBOR_WIDTH:.26},nt={PLINTH_TOP:X,BLOCK:Ye,STREET:Xe,PITCH:Ze,SIDEWALK:Qe,SHORE:$e,N:et,COAST:tt};function rt(e,t,n){let r=n?.base??tt.BASE,i=n?.out??tt.OUT,a=n?.in??tt.IN,o=n?.jag??tt.JAG,s=t+r,c=qe((e^789079)>>>0),l=[2,3,5,8,11,13].map(e=>({k:e,amp:1/e*o**((e-2)/6),phase:c.range(0,Math.PI*2)})),u=l.reduce((e,t)=>e+t.amp,0),d=e=>{let t=0;for(let n of l)t+=n.amp*Math.sin(n.k*e*Math.PI*2+n.phase);return Math.max(-1,Math.min(1,t/(u*.6)))},f=[{fix:+s,nx:1,nz:0,sign:1},{fix:+s,nx:0,nz:1,sign:-1},{fix:-s,nx:-1,nz:0,sign:-1},{fix:-s,nx:0,nz:-1,sign:1}],p=t+.22,m=tt.SAMPLES_PER_EDGE,h=4*m,g=[],_=0;for(let e=0;e<4;e++){let t=f[e];for(let n=0;n<m;n++,_++){let o=n/m,c=_/h,l=(-s+2*s*o)*t.sign,u=d(c),f=u>=0?u*i:u*a;if(e===0){let e=Math.abs(o-.5);if(e<tt.HARBOR_WIDTH){let t=.5+.5*Math.cos(e/tt.HARBOR_WIDTH*Math.PI);f-=(r+tt.HARBOR_DEPTH)*t}}let v,y;t.nx===0?(y=t.fix+t.nz*f,v=l,y=t.nz>0?Math.max(y,p):Math.min(y,-p)):(v=t.fix+t.nx*f,y=l,v=t.nx>0?Math.max(v,p):Math.min(v,-p)),g.push(new V(v,y))}}return{points:g,B:s,maxR:s+i,harborX:p}}function it(e){(Array.isArray(e)?e:[e]).forEach(e=>e&&e.dispose&&e.dispose())}function at({seed:e=1,profileIndex:t=0,landmarkFactory:n=null,windowGlow:r}){let i=new U,s=new U,c=new U;s.raycast=()=>{},c.raycast=()=>{},i.add(s,c);let u=new H(16773594,3);u.position.set(.45,.6,-.65).multiplyScalar(10);let d=new a(7313331,2762272,1);i.add(u,d);let p=0,m=[],h={seed:e,profileIndex:t,profile:Je[t],extent:0,meshCount:0};function g(e,t,n,r){let i=new o(new O(e,.04,t),Y(new f({color:r,roughness:.95,flatShading:!0}),{color:r}));return i.position.y=n,i.userData.ground=!0,i}function _(e,t){for(let e of s.children)e.geometry&&e.geometry.dispose(),it(e.material);s.clear();for(let e of c.children)e.traverse(e=>{e.isMesh&&it(e.material)});c.clear(),m.length=0,p=0;let r=qe(e),i=Je[t],a=(et-1)/2*Ze,l=7.075;h={seed:e,profileIndex:t,profile:i,extent:l+(i.coast?.base??tt.BASE),meshCount:0};let u=rt(e,l,i.coast);h.coast=u;let d=new M;u.points.forEach((e,t)=>t?d.lineTo(e.x,e.y):d.moveTo(e.x,e.y)),d.closePath();let _=new o(new te(d,{depth:2,bevelEnabled:!1,steps:1}),Y(new f({color:i.ground,roughness:.9,flatShading:!0,side:2}),{color:i.ground}));_.rotation.x=-Math.PI/2,_.position.y=X-2,_.userData.ground=!0,s.add(_);let C=2*7.195;s.add(g(C,C,.32,i.street)),x(u.harborX,i);let w=[];for(let e=0;e<et;e++)for(let t=0;t<et;t++)w.push([e,t]);let T=new Set,E=Math.max(1,Math.round(w.length*.08));for(;T.size<E;)T.add(r.int(0,w.length-1));let D=r.range(-2.45*.6,Ze*.6),O=r.range(-2.45*.6,Ze*.6),ee=Math.hypot(a,a),k=[];if(w.forEach(([e,t],n)=>{let a=(e-(et-1)/2)*Ze,o=(t-(et-1)/2)*Ze;if(s.add(g(Ye,Ye,.32999999999999996,i.sidewalk).translateX(a).translateZ(o)),T.has(n)){s.add(g(Ye-Qe*2,Ye-Qe*2,.35,i.park).translateX(a).translateZ(o));let e=r.int(3,5);for(let t=0;t<e;t++)S(a+r.range(-.6,.6),o+r.range(-.6,.6),i,r);return}let c=Ye-Qe*2,l=r.chance(i.pSplit)?2:1,u=r.chance(i.pSplit)?2:1,d=c/l,f=c/u;for(let e=0;e<l;e++)for(let t=0;t<u;t++){let n=a-c/2+d*(e+.5),s=o-c/2+f*(t+.5),l=Math.max(.6,d-.1),u=Math.max(.6,f-.1),p=Math.hypot(n-D,s-O)/ee,m=Math.exp(-(p*p)/(2*i.sigma*i.sigma)),h=Math.max(.5,.5+(i.hMax-.5)*m*r.range(.75,1.25));h>i.hMax*.5&&Math.min(l,u)>=.7&&k.push({lx:n,lz:s,fw:l,fd:u,h,r:p}),v(n,s,l,u,h,i,r)}}),n&&n.ready){k.sort((e,t)=>e.r-t.r);let e=[],t=i.landmarks;for(let r=0;r<t.length&&k.length;r++){let a=null;for(let t of k)if(e.every(e=>Math.hypot(e.lx-t.lx,e.lz-t.lz)>Ze*.9)){a=t;break}a||=k[0],e.push(a),y(a.lx,a.lz);let o=i.hMax*n.heightFactor(t[r]),s=n.make(t[r],{x:a.lx,z:a.lz,w:a.fw,d:a.fd,h:o,plinthTop:X});if(s){c.add(s);let e=new ie().setFromObject(s);b(e.min.x-.15,e.max.x+.15,e.min.z-.15,e.max.z+.15)}}}s.traverse(e=>{e.isMesh&&(e.userData.ground?(e.castShadow=!1,e.receiveShadow=!0):e.material&&e.material.isMeshBasicMaterial?(e.castShadow=!1,e.receiveShadow=!1):(e.castShadow=!0,e.receiveShadow=!0))}),c.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),h.meshCount=s.children.length+c.children.length;let A=0;for(let e of s.children){let t=e.position;A=(Math.imul(A,16777619)^(Math.round(t.x*100)*2654435761^Math.round(t.y*100)*40503^Math.round(t.z*100)*2246822519))>>>0}for(let e of h.coast.points)A=(Math.imul(A,16777619)^(Math.round(e.x*100)*2654435761^Math.round(e.y*100)*40503))>>>0;h.sig=A,window.__city={seed:e,profile:i.key,meshes:h.meshCount,sig:A}}function v(e,t,n,i,a,c,u){let d=J(new f({flatShading:!0,roughness:.7,metalness:.05}),{color:u.pick(c.towers),id:++p,windowGlow:r,winColors:c.winColors,litFrac:c.nightLit}),h=new o(new O(n,a,i),d);if(h.position.set(e,X+a/2,t),h.userData.lot=[e,t],s.add(h),c.roofTint){let r=Y(new f({color:c.roofTint,roughness:.85,flatShading:!0}),{color:c.roofTint}),l=new o(new O(n*1.02,.08,i*1.02),r);l.position.set(e,X+a+.04,t),l.userData.lot=[e,t],s.add(l)}if(a<1.4){let r=u.pick(c.shopfronts),a=new o(new O(n*1.04,.18,i*1.04),Y(new f({color:r,roughness:.8,flatShading:!0}),{color:r}));a.position.set(e,.39,t),a.userData.lot=[e,t],s.add(a)}let g=X+a,_=n,v=i;if(a>c.hMax*.5&&u.chance(.55)){let l=n*u.range(.5,.72),d=i*u.range(.5,.72),m=a*u.range(.18,.4),h=new o(new O(l,m,d),J(new f({flatShading:!0,roughness:.7,metalness:.05}),{color:u.pick(c.towers),id:++p,windowGlow:r,winColors:c.winColors,litFrac:c.nightLit}));h.position.set(e,X+a+m/2,t),h.userData.lot=[e,t],s.add(h),g=X+a+m,_=l,v=d}if(a>c.hMax*.45&&u.chance(c.roofRate)){let n=u.chance(.5)?new o(new O(_*.4,.18,v*.4),Y(new f({color:`#9a9a9a`,flatShading:!0}),{color:`#9a9a9a`})):new o(new re(_*.18,_*.18,.22,10),Y(new f({color:`#b9bec4`,flatShading:!0}),{color:`#b9bec4`}));if(n.position.set(e+u.range(-.1,.1),g+.11,t+u.range(-.1,.1)),n.userData.lot=[e,t],s.add(n),u.chance(.25)){let n=new o(new me(.05,6,5),new l({color:`#ff3b30`,transparent:!0,opacity:1}));n.position.set(e,g+.15,t),n.userData.lot=[e,t],n.raycast=()=>{},s.add(n),m.push({mesh:n,phase:u.range(0,6.28)})}}if(a>c.hMax*.7&&u.chance(.35)){let n=a*u.range(.18,.34),r=new o(new re(.018,.05,n,6),Y(new f({color:`#c8ccd2`,flatShading:!0}),{color:`#c8ccd2`}));r.position.set(e,g+n/2,t),r.userData.lot=[e,t],r.raycast=()=>{},s.add(r)}}function y(e,t){for(let n=s.children.length-1;n>=0;n--){let r=s.children[n];r.userData.lot&&Math.abs(r.userData.lot[0]-e)<1e-4&&Math.abs(r.userData.lot[1]-t)<1e-4&&(r.geometry&&r.geometry.dispose(),it(r.material),s.remove(r))}for(let e=m.length-1;e>=0;e--)m[e].mesh.parent||m.splice(e,1)}function b(e,t,n,r){for(let i=s.children.length-1;i>=0;i--){let a=s.children[i];a.userData.lot&&a.position.x>=e&&a.position.x<=t&&a.position.z>=n&&a.position.z<=r&&(a.geometry&&a.geometry.dispose(),it(a.material),s.remove(a))}}function x(e,t){let n=Y(new f({color:`#7a5634`,roughness:.95,flatShading:!0}),{color:`#7a5634`}),r=(e,t,r,i)=>{let a=new o(new O(e,.06,t),n);a.position.set(r,X-.16,i),s.add(a)};r(.24,2,e+.02,0),r(1.3,.22,e+.7,-.72),r(1.3,.22,e+.7,.72)}function S(e,t,n,r){let i=new R(n.park),a=(n,a)=>{let c=i.clone().offsetHSL(0,0,r.range(-.06,.06)).getStyle(),l=new o(new me(n,7,6),Y(new f({color:c,flatShading:!0}),{color:c,season:!0}));l.scale.y=.7,l.position.set(e,X+a,t),l.userData.lot=null,s.add(l)},c=new o(new O(.05,.18,.05),Y(new f({color:`#6b4a2a`,flatShading:!0}),{color:`#6b4a2a`}));c.position.set(e,.39,t),s.add(c),a(.22,.28),a(.16,.46)}function C(e){for(let t of m)t.mesh.material.opacity=.35+.65*(.5+.5*Math.sin(e*3+t.phase))}return _(e,t),{group:i,key:u,fill:d,update:C,generate:_,get state(){return h},get extent(){return h.extent},get waterColor(){return h.profile.water},profiles:Je}}var ot=Math.PI*2,st=.7,ct=90,lt=[{name:`night`,sun:`#4a6f9e`,intensity:.35,hemiSky:`#26344f`,hemiGround:`#0c1018`,horizon:`#1e2942`,sky:`#36486e`,exposure:.95,outline:`#101a30`,window:1,toonGain:2.6},{name:`dawn`,sun:`#ff9e54`,intensity:2.4,hemiSky:`#8a7686`,hemiGround:`#2a1f1a`,horizon:`#b8512c`,sky:`#ffb070`,exposure:1.05,outline:`#241826`,window:.3,toonGain:2},{name:`noon`,sun:`#fff4e0`,intensity:4.6,hemiSky:`#9cb8cc`,hemiGround:`#33302a`,horizon:`#5e7689`,sky:`#aacadd`,exposure:1.18,outline:`#0b0a08`,window:0,toonGain:1.7},{name:`dusk`,sun:`#ff6b35`,intensity:2,hemiSky:`#7a566a`,hemiGround:`#281a18`,horizon:`#b0432a`,sky:`#ff8a5a`,exposure:1.05,outline:`#1f1420`,window:.4,toonGain:2}],ut=e=>e-Math.floor(e),dt=(e,t,n)=>e+(t-e)*n,ft=(e,t,n)=>e+(t-e)*(1-Math.exp(-6*n));function pt({t:e=.5}={}){let t=e,n=e,r=!1,i=!1,a=lt.map(e=>({name:e.name,sun:new R(e.sun),hemiSky:new R(e.hemiSky),hemiGround:new R(e.hemiGround),horizon:new R(e.horizon),sky:new R(e.sky),outline:new R(e.outline),intensity:e.intensity,exposure:e.exposure,window:e.window,toonGain:e.toonGain})),o=new A(0,1,0),s=new R(`#fff4e0`),c=new R(`#6f97b3`),l=new R(`#2a2620`),u=new R(`#3a4a57`),d=new R(`#7da3bd`),f=new R(`#0b0a08`),p=new R(`#000000`),m=3,h=1,g=0,_=1.7,v=new A;function y(e){let t=ut(e)*4,n=Math.floor(t)%4,r=(n+1)%4,i=t-Math.floor(t),y=a[n],b=a[r];s.lerpColors(y.sun,b.sun,i),c.lerpColors(y.hemiSky,b.hemiSky,i),l.lerpColors(y.hemiGround,b.hemiGround,i),u.lerpColors(y.horizon,b.horizon,i),d.lerpColors(y.sky,b.sky,i),f.lerpColors(y.outline,b.outline,i),m=dt(y.intensity,b.intensity,i),h=dt(y.exposure,b.exposure,i),g=dt(y.window,b.window,i),_=dt(y.toonGain,b.toonGain,i),p.setRGB(.045*g,.075*g,.14*g);let x=ut(e)*ot-Math.PI/2,S=Math.cos(x),C=Math.sin(x);v.set(S,C*Math.cos(st),C*Math.sin(st)),v.y>=0?o.copy(v):o.copy(v).negate()}return y(t),{sunDir:o,sunColor:s,hemiSky:c,hemiGround:l,horizon:u,sky:d,outline:f,toonFloor:p,sunArc:v,get sunIntensity(){return m},get exposure(){return h},get windowGlow(){return g},get toonGain(){return _},get t(){return ut(t)},get auto(){return r},get clock(){let e=Math.round(ut(t)*24*60)%1440;return`${String(Math.floor(e/60)).padStart(2,`0`)}:${String(e%60).padStart(2,`0`)}`},cyclePreset(){n=(Math.floor(t*4+1e-4)+1)/4},nudge(e){n+=e/24},goTo(e){n=e},toggleAuto(){r=!r},setReducedMotion(e){i=e},update(e){r&&!i&&(n+=e/ct),t=ft(t,n,e),y(t)}}}function mt(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.35,`rgba(255,255,255,0.55)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new k(e);return r.colorSpace=E,r}function ht(e,t){let n=[];for(let r=0;r<16;r++){let i=r/16*Math.PI*2;n.push(new A(Math.cos(i)*e,t,Math.sin(i)*e))}return new he(n,!0,`catmullrom`,.5)}function gt(e){let t=(t,n)=>Math.exp(-((e-t)*(e-t))/(2*n*n)),n=Math.max(t(.33,.05),t(.75,.06)),r=m.smoothstep(e,.24,.3)*(1-m.smoothstep(e,.8,.88));return m.clamp(.15+.55*r+.45*n,.12,1)}function _t(){let{PITCH:e,N:t,PLINTH_TOP:n}=nt,r=t+1,i=n+.04,a=n=>(n-t/2)*e,o=t/2,s=[],c=(e,t)=>t*r+e;for(let e=0;e<r;e++)for(let t=0;t<r;t++)s.push({x:a(t),z:a(e),i:t,j:e,edges:[]});let l=[],u=(t,n)=>{let r=(s[t].i===o||s[t].j===o)&&(s[n].i===o||s[n].j===o),i=l.length;l.push({a:t,b:n,len:e,main:r}),s[t].edges.push(i),s[n].edges.push(i)};for(let e=0;e<r;e++)for(let t=0;t<r;t++)t<r-1&&u(c(t,e),c(t+1,e)),e<r-1&&u(c(t,e),c(t,e+1));return{nodes:s,edges:l,y:i,mid:o}}function vt({plinthTop:e=.3,extent:t=4,profile:n=null}={}){let r=new U,a=_t(),{nodes:o,edges:c}=a,u=a.y,p=.34,h=0;{let e=nt.PITCH-p*2;h=Math.max(1,Math.floor((e+.26)/.56))}let g=new l({color:`#e8c84a`,fog:!0}),_=new i(new O(.05,.012,.3),g,c.length*h);_.frustumCulled=!1,_.raycast=()=>{},_.receiveShadow=!1,_.castShadow=!1,r.add(_);{let e=new ve,t=0;for(let n of c){let r=o[n.a],i=o[n.b],a=i.x-r.x,s=i.z-r.z,c=Math.hypot(a,s),l=a/c,d=s/c,f=Math.atan2(l,d),m=c-p*2;for(let n=0;n<h;n++){let i=p+(h===1?m/2:m*n/(h-1));e.position.set(r.x+l*i,u,r.z+d*i),e.rotation.set(0,f,0),e.updateMatrix(),_.setMatrixAt(t++,e.matrix)}}_.instanceMatrix.needsUpdate=!0}let v=new i(new O(.34,.26,.74),Y(new f({flatShading:!0,roughness:.5,metalness:.3})),12);v.castShadow=!0,v.receiveShadow=!1,v.frustumCulled=!1,v.raycast=()=>{};let y=new fe,b=new Float32Array(72),x=new Float32Array(72),S=new R(`#fff0c0`),C=new R(`#ff3528`);for(let e=0;e<12;e++)S.toArray(x,e*3),C.toArray(x,(12+e)*3),b[e*3+1]=-50,b[(12+e)*3+1]=-50;y.setAttribute(`position`,new le(b,3)),y.setAttribute(`color`,new le(x,3));let w=new d({size:.72,sizeAttenuation:!0,map:mt(),vertexColors:!0,transparent:!0,opacity:0,blending:2,depthWrite:!1}),T=new s(y,w);T.frustumCulled=!1,T.raycast=()=>{},r.add(v,T);let E=[`#f4c430`,`#c0392b`,`#d8dde2`,`#9aa7b4`,`#6b7785`,`#5a7d9a`],D=Ke(2403557),ee=c.map((e,t)=>t).filter(e=>c[e].main),te=[];for(let e=0;e<12;e++){let t=e<4&&ee.length?ee[D()*ee.length|0]:D()*c.length|0,n=e===1;te.push({edge:t,fwd:D()<.5,s:D()*c[t].len,speed:n?.5:.78+e%3*.1,lenZ:n?1.45:1,color:E[n?1:e===0?0:2+e%4],rng:Ke(12648430+e*2654435761)})}let k=new R;te.forEach((e,t)=>v.setColorAt(t,k.set(e.color)));function j(e,t,n){let r=o[e],i=r.edges.filter(e=>e!==t);if(i.length===0)return t;let a=c[t],s=a.a===e?a.b:a.a,l=r.x-o[s].x,u=r.z-o[s].z,d=Math.hypot(l,u)||1,f=i[0],p=-2;for(let t of i){let n=c[t],i=n.a===e?n.b:n.a,a=o[i].x-r.x,s=o[i].z-r.z,m=Math.hypot(a,s)||1,h=l/d*(a/m)+u/d*(s/m);h>p&&(p=h,f=t)}return n()<.65?f:i[n()*i.length|0]}let M=j,N=new ve,ne=(e,t)=>{N.position.set(0,-50,0),N.scale.setScalar(0),N.updateMatrix(),e.setMatrixAt(t,N.matrix)},re=.085,ie=nt.PLINTH_TOP+.02+.13,P=new i(new ae(.04,.1,3,6),Y(new f({flatShading:!0,roughness:.8})),14);P.castShadow=!0,P.receiveShadow=!1,P.frustumCulled=!1,P.raycast=()=>{};let F=ht(t-.72,e),I=[];for(let e=0;e<14;e++)I.push({phase:e/14,speed:.12+e%4*.02,dir:e%2?1:-1});let oe=new A,se=new A,ce=new R;I.forEach((e,t)=>P.setColorAt(t,ce.set([`#caa`,`#9ab`,`#bba`,`#ab9`][t%4]))),r.add(P);let L={manhattan:`#e8c84a`,paris:`#dcd2bc`,neoTokyo:`#5ae8e0`};function ue(e){e&&g.color.set(L[e.key]||`#e8c84a`)}ue(n);function z(t,n,r){let i=r?r.t:.5,a=r?r.windowGlow:0,s=Math.max(2,Math.round(gt(i)*12)),l=a>.05;for(let e=0;e<12;e++){if(e>=s){ne(v,e),b[e*3+1]=-50,b[(12+e)*3+1]=-50;continue}let n=te[e];n.s+=t*n.speed;let r=0;for(;n.s>=c[n.edge].len&&r++<4;){n.s-=c[n.edge].len;let e=n.fwd?c[n.edge].b:c[n.edge].a,t=M(e,n.edge,n.rng);n.edge=t,n.fwd=c[t].a===e}let i=c[n.edge],a=n.fwd?o[i.a]:o[i.b],u=n.fwd?o[i.b]:o[i.a],d=u.x-a.x,f=u.z-a.z,p=Math.hypot(d,f)||1,m=d/p,h=f/p,g=-h,_=m,y=a.x+m*n.s+g*re,x=a.z+h*n.s+_*re,S=Math.atan2(m,h);N.position.set(y,ie,x),N.rotation.set(0,S,0),N.scale.set(1,1,n.lenZ),N.updateMatrix(),v.setMatrixAt(e,N.matrix);let C=.74*n.lenZ*.5,w=ie+.06,T=e*3,E=(12+e)*3;l?(b[T]=y+m*(C+.04),b[T+1]=w,b[T+2]=x+h*(C+.04),b[E]=y-m*(C+.02),b[E+1]=w,b[E+2]=x-h*(C+.02)):(b[T+1]=-50,b[E+1]=-50)}v.instanceMatrix.needsUpdate=!0,y.attributes.position.needsUpdate=!0,w.opacity=m.clamp(a*1.8,0,1);let u=Math.max(2,Math.round(gt(i)*14));for(let t=0;t<14;t++){if(t>=u){ne(P,t);continue}let r=I[t],i=(r.phase+r.dir*r.speed*n*.02+1e3)%1;F.getPointAt(i,oe),F.getTangentAt(i,se);let a=Math.sin(n*6+r.phase*30)*.015;N.position.set(oe.x,e+.09+a,oe.z),N.rotation.set(0,Math.atan2(se.x*r.dir,se.z*r.dir),Math.sin(n*6+r.phase*30)*.06),N.scale.setScalar(1),N.updateMatrix(),P.setMatrixAt(t,N.matrix)}P.instanceMatrix.needsUpdate=!0}return{group:r,update:z,setProfile:ue,graph:a,setRouter(e){M=e||j}}}function yt({frames:e,fps:t=8,cols:n,rows:r=1}={}){let i=n||e||4,a=r||1,o=e||i*a,s=typeof window<`u`&&window.matchMedia?window.matchMedia(`(prefers-reduced-motion: reduce)`):null;function c(e,t){let n=t%i,r=Math.floor(t/i);e.offset.x=n/i,e.offset.y=1-(r+1)/a}function l(e){let t=e.clone();return t.needsUpdate=!0,t.repeat.set(1/i,1/a),c(t,0),t}function u(e,n,r=0){if(s&&s.matches)return c(e,0),0;let i=(Math.floor(n*t+r)%o+o)%o;return c(e,i),i}function d(e,t){let n=(Math.round(t)%o+o)%o;return c(e,n),n}return{frames:o,fps:t,cols:i,rows:a,makeInstanceTexture:l,step:u,setFrame:d}}function bt(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.4,`rgba(255,255,255,0.5)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new k(e);return r.colorSpace=E,r}function xt(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64*.62,0,64/2,64*.62,64*.5);n.addColorStop(0,`rgba(240,250,255,0.95)`),n.addColorStop(1,`rgba(240,250,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new k(e);return r.colorSpace=E,r}function St(){let e=document.createElement(`canvas`);e.width=256,e.height=64;let t=e.getContext(`2d`);t.strokeStyle=`#ffffff`,t.lineWidth=6,t.lineCap=`round`,t.lineJoin=`round`;let n=[14,24,36,24];for(let e=0;e<4;e++){let r=e*64,i=n[e];t.beginPath(),t.moveTo(r+8,40),t.quadraticCurveTo(r+24,i,r+32,36),t.quadraticCurveTo(r+40,i,r+56,40),t.stroke()}let r=new k(e);return r.colorSpace=E,r}function Ct(e,t,n=18){let r=[];for(let i=0;i<n;i++){let a=i/n*Math.PI*2;r.push(new A(Math.cos(a)*e,t,Math.sin(a)*e))}return new he(r,!0,`catmullrom`,.5)}function wt(e,t,n){let r=e-t,i=[],a=(e,t)=>i.push(new A(e,n,t)),o=(e,n,r,i,o=4)=>{for(let s=1;s<=o;s++){let c=r+(i-r)*(s/o);a(e+Math.cos(c)*t,n+Math.sin(c)*t)}};for(let t=0;t<4;t++)a(e,-r+2*r*t/4);o(r,r,0,Math.PI/2);for(let t=0;t<4;t++)a(r-2*r*t/4,e);o(-r,r,Math.PI/2,Math.PI);for(let t=0;t<4;t++)a(-e,r-2*r*t/4);o(-r,-r,Math.PI,1.5*Math.PI);for(let t=0;t<4;t++)a(-r+2*r*t/4,-e);return o(r,-r,1.5*Math.PI,2*Math.PI),new he(i,!0,`catmullrom`,.5)}function Tt({extent:e=8,waterSize:t=28,plinthTop:n=.3}={}){let r=new U;r.raycast=()=>{};let i=.06,a=(e,n,r)=>r.set(e/t+.5,-n/t+.5,0),c=[wt(9.5,3,i),Ct(12.7,i),new he([new A(8.4,i,0),new A(11,i,-3.6),new A(13,i,0),new A(11,i,3.6)],!0,`catmullrom`,.5)],l=c.map(e=>e.getLength());function u({scale:e=1,hull:t=`#6b7785`,cabin:n=`#e7ecf2`}){let r=new U,i=new o(new O(.46*e,.2*e,1.1*e),Y(new f({color:t,roughness:.6,metalness:.2,flatShading:!0}),{color:t}));i.position.y=.02;let a=new o(new O(.3*e,.22*e,.42*e),Y(new f({color:n,roughness:.7,flatShading:!0}),{color:n}));return a.position.set(0,.18*e,.08*e),r.add(i,a),r.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!1),e.raycast=()=>{}}),r.userData.halfLen=.55*e,r}let p=[{laneIndex:0,dir:1,speed:.5,wake:.024,scale:1,hull:`#5a6675`,cabin:`#e7ecf2`},{laneIndex:1,dir:-1,speed:.42,wake:.022,scale:1,hull:`#7a5b46`,cabin:`#d9c3a6`},{laneIndex:0,dir:1,speed:.56,wake:.024,scale:.9,hull:`#456079`,cabin:`#cfe0ee`},{laneIndex:2,dir:1,speed:.34,wake:.03,scale:1.35,hull:`#39505f`,cabin:`#e2b85a`}];p.forEach((e,t)=>{e.mesh=u(e),e.u=t*.27%1,e.phase=t*1.7,e.isFerry=e.laneIndex===2,r.add(e.mesh)});let h=p.length,g=h*2,_=new fe,v=new Float32Array(g*3).fill(-50),y=new Float32Array(g*3),b=new R(`#fff0c0`),x=new R(`#ff3528`);for(let e=0;e<h;e++)b.toArray(y,e*3),x.toArray(y,(h+e)*3);_.setAttribute(`position`,new le(v,3)),_.setAttribute(`color`,new le(y,3));let S=new s(_,new d({size:.6,sizeAttenuation:!0,map:bt(),vertexColors:!0,transparent:!0,opacity:0,blending:2,depthWrite:!1}));S.frustumCulled=!1,S.raycast=()=>{},r.add(S);function C(e,t){let n=new o(new me(e,9,7),Y(new f({color:t,roughness:.5,flatShading:!0}),{color:t}));return n.scale.set(.55,.5,1),n.castShadow=!1,n.receiveShadow=!1,n.raycast=()=>{},n.position.y=-5,n}let w=[{x:-9.5,z:6,size:.18,color:`#5b6f86`,period:11,arcH:.55,span:1.1,whale:!1},{x:7.5,z:-9.5,size:.16,color:`#4a6076`,period:14,arcH:.5,span:1,whale:!1},{x:-7,z:-8.5,size:.2,color:`#607089`,period:9,arcH:.6,span:1.2,whale:!1},{x:10.5,z:7,size:.62,color:`#3a4350`,period:38,arcH:.9,span:2.6,whale:!0}];w.forEach((e,t)=>{e.mesh=C(e.size,e.color),e.heading=Math.atan2(-e.x,-e.z),e.t=t/w.length*e.period,e.splashed=!1,r.add(e.mesh),e.whale&&(e.spout=new B(new P({map:xt(),transparent:!0,opacity:0,depthWrite:!1,fog:!0})),e.spout.scale.set(.6,1.1,1),e.spout.position.set(e.x,-5,e.z),r.add(e.spout))});let T=St(),E=yt({frames:4,fps:7}),D=[`#ffffff`,`#cfd4da`,`#c8a06a`],ee=[];for(let e=0;e<4;e++){let t=new B(new P({map:E.makeInstanceTexture(T),color:new R(D[e%D.length]),transparent:!0,opacity:0,depthWrite:!1,fog:!0}));t.scale.setScalar(.5),ee.push({sp:t,r:8.6+e*.5,y:1.1+e%2*.5,speed:(.18+e*.03)*(e%2?-1:1),phase:e*1.9}),r.add(t)}typeof window<`u`&&(window.__gullAnim={frames:E.frames,variants:D.length,fps:E.fps});let te=w.length,k=Array.from({length:h+te},()=>new A),j=e=>e.laneIndex,M=new A,N=new A,ne=new A;function re(e,t,n){let r=n?n.windowGlow:0,o=1-r;for(let n=0;n<h;n++){let o=p[n],s=c[o.laneIndex],u=l[o.laneIndex],d=o.isFerry?.45+.55*Math.min(1,Math.abs((o.u+.5)%1-.5)*3):1,f=o.u;o.u=(o.u+o.dir*e*o.speed*d/u+1)%1,(o.dir>0?o.u<f:o.u>f)&&(o.laneIndex=j(o)),s.getPointAt(o.u,M),s.getTangentAt(o.u,N);let m=N.x*o.dir,g=N.z*o.dir,_=Math.atan2(m,g),y=Math.sin(t*1.1+o.phase)*.025;o.mesh.position.set(M.x,i+y,M.z),o.mesh.rotation.set(Math.sin(t*.9+o.phase)*.04,_,0);let b=o.mesh.userData.halfLen;a(M.x-m*b,M.z-g*b,ne),k[n].set(ne.x,ne.y,o.wake);let x=n*3,S=(h+n)*3;if(r>.05){let e=.18;v[x]=M.x+m*(b+.05),v[x+1]=e,v[x+2]=M.z+g*(b+.05),v[S]=M.x-m*(b+.02),v[S+1]=e,v[S+2]=M.z-g*(b+.02)}else v[x+1]=-50,v[S+1]=-50}ie(),S.material.opacity=m.clamp(r*1.8,0,1);for(let t=0;t<te;t++){let n=w[t];n.t+=e;let r=h+t,o=n.whale?3.2:1.3;if(n.t>=n.period){let e=(n.t-n.period)/o;if(e>=1){n.t=0,n.splashed=!1,n.mesh.position.y=-5,n.spout&&(n.spout.material.opacity=0),k[r].set(0,0,0);continue}let t=Math.sin(Math.PI*e),s=(e-.5)*n.span,c=n.x+Math.sin(n.heading)*s,l=n.z+Math.cos(n.heading)*s;n.mesh.position.set(c,i-.1+t*n.arcH,l),n.mesh.rotation.set(Math.cos(Math.PI*e)*.9,n.heading,0);let u=e<.16||e>.84;if(a(c,l,ne),k[r].set(ne.x,ne.y,u?n.whale?.07:.05:0),n.spout){let t=m.clamp((e-.15)*3,0,1)*(1-e);n.spout.position.set(c,.56+t*.6,l),n.spout.material.opacity=t*.9}}else n.mesh.position.y=-5,k[r].set(0,0,0),n.spout&&(n.spout.material.opacity=0)}for(let e=0;e<4;e++){let n=ee[e],r=n.phase+t*n.speed*.25;n.sp.position.set(Math.cos(r)*n.r,n.y+Math.sin(t*1.4+n.phase)*.12,Math.sin(r)*n.r),n.sp.material.opacity=m.clamp(o*.9-.05,0,.85);let i=E.step(n.sp.material.map,t,n.phase);e===0&&typeof window<`u`&&(window.__gullFrame=i)}if(typeof window<`u`){let e=0;for(let t of w)t.mesh.position.y>i&&e++;window.__waterLife={boats:h,breaching:e,gulls:+ee[0].sp.material.opacity.toFixed(2),lights:+S.material.opacity.toFixed(2)}}}function ie(){_.attributes.position.needsUpdate=!0}function F(){return k.length}return{group:r,update:re,wakeDrops:k,get wakeCount(){return F()},lanes:c,setRouter(e){j=e||(e=>e.laneIndex)}}}var Et=[`empireState`,`chrysler`,`liberty`,`eiffel`,`arcDeTriomphe`,`sacreCoeur`,`tokyoTower`,`pagoda`,`neonBillboard`],Dt={empireState:1.25,chrysler:1.1,liberty:.55,eiffel:3.2,arcDeTriomphe:1.5,sacreCoeur:1.75,tokyoTower:1.35,pagoda:.5,neonBillboard:.9};function Ot(e){let t=()=>new f({flatShading:!0,roughness:.7,metalness:.1}),n=(n,r={})=>r.windows?J(t(),{color:n,id:e.id(),windowGlow:e.windowGlow,winColors:e.winColors,litFrac:e.litFrac}):Y(t(),{color:n,glow:r.glow??null,glowDay:r.glowDay??0,glowNight:r.glowNight??1,windowGlow:r.glow?e.windowGlow:null});return{box:(e,t,r,i,a={})=>new o(new O(e,t,r),n(i,a)),cyl:(e,t,r,i,a={})=>new o(new re(e,t,r,a.seg||12),n(i,a)),cone:(e,t,r,i={})=>new o(new se(e,t,i.seg||8),n(r,i)),sphere:(e,t,r={})=>new o(new me(e,r.seg||12,r.seg2||8),n(t,r)),lathe:(e,t,r={})=>new o(new h(e.map(e=>new V(e[0],e[1])),r.seg||4),n(t,r))}}var Z=(e,t,n,r)=>(e.position.set(t,n,r),e),kt=[`#7FB0E0`,`#E07FB0`,`#7FE0A0`,`#E0C97F`,`#9FE07F`,`#7FE0E0`,`#FF8C42`,`#E0E07F`,`#C97FE0`,`#E07F7F`,`#7F9FE0`,`#E0483A`],At={empireState(e,t){let n=`#E8E0CF`;e.add(Z(t.box(.42,.18,.42,n,{windows:!0}),0,.09,0)),e.add(Z(t.box(.34,.16,.34,n,{windows:!0}),0,.26,0)),e.add(Z(t.box(.26,.14,.26,n,{windows:!0}),0,.41,0)),e.add(Z(t.box(.19,.34,.19,n,{windows:!0}),0,.65,0)),e.add(Z(t.box(.13,.06,.13,n,{windows:!0}),0,.85,0));let r=kt[new Date().getMonth()];e.add(Z(t.cyl(.03,.045,.12,n,{seg:10,glow:r,glowNight:1.85}),0,.94,0)),e.add(Z(t.cone(.012,.07,n,{seg:8}),0,1.04,0))},chrysler(e,t){let n=`#C9CED4`;e.add(Z(t.box(.22,.55,.22,`#9AA7B4`,{windows:!0}),0,.275,0));let r=.55;for(let i=0;i<5;i++){let a=.14-i*.024,o=.07;e.add(Z(t.cyl(a*.7,a,o,n,{seg:8,glow:`#dfeaff`,glowNight:.5}),0,r+o/2,0)),r+=o}e.add(Z(t.cone(.018,.16,n,{seg:8}),0,r+.08,0))},liberty(e,t){let n=`#B9B4A6`,r=`#4FA890`;e.add(Z(t.box(.42,.16,.42,n),0,.08,0)),e.add(Z(t.box(.3,.2,.3,n),0,.26,0)),e.add(Z(t.cyl(.1,.15,.42,r,{seg:10}),0,.57,0)),e.add(Z(t.box(.11,.1,.11,r),0,.83,0));for(let n=0;n<7;n++){let i=(n/6-.5)*Math.PI*1.1;e.add(Z(t.cone(.012,.1,r,{seg:5}),Math.sin(i)*.1,.92,Math.cos(i)*.06-.02))}let i=Z(t.cyl(.025,.03,.34,r,{seg:8}),.14,.98,0);i.rotation.z=.35,e.add(i),e.add(Z(t.box(.06,.06,.06,r,{glow:`#ffd060`,glowDay:.6,glowNight:1.2}),.2,1.16,0)),e.add(Z(t.cone(.04,.09,`#ffcf66`,{seg:6,glow:`#ffd060`,glowDay:.7,glowNight:1.3}),.2,1.24,0))},eiffel(e,t){let n=`#6E5C4C`,r=[[.2,0],[.13,.16],[.085,.33],[.055,.5],[.035,.66],[.02,.85],[0,.92]];e.add(t.lathe(r,n,{seg:4}));let i=t.lathe(r,n,{seg:4});i.rotation.y=Math.PI/4,e.add(i),e.add(Z(t.box(.26,.025,.26,n),0,.33,0)),e.add(Z(t.box(.14,.02,.14,n),0,.66,0)),e.add(Z(t.cone(.01,.1,n,{seg:6}),0,.97,0))},arcDeTriomphe(e,t){let n=`#D9D0C1`,r=.58,i=.5,a=.34,s=new M;s.moveTo(-.58/2,0),s.lineTo(r/2,0),s.lineTo(r/2,i),s.lineTo(-.58/2,i),s.lineTo(-.58/2,0);let c=new S,l=.15,u=.22;c.moveTo(-.15,0),c.lineTo(-.15,u),c.absarc(0,u,l,Math.PI,0,!0),c.lineTo(l,0),c.lineTo(-.15,0),s.holes.push(c);let d=new te(s,{depth:a,bevelEnabled:!1});d.translate(0,0,-.34/2),d.computeVertexNormals(),e.add(new o(d,Y(new f({color:n,flatShading:!0}),{color:n}))),e.add(Z(t.box(r*1.06,.08,a*1.06,n),0,.54,0))},sacreCoeur(e,t){let n=`#F1EEE6`;e.add(Z(t.box(.5,.26,.4,n),0,.13,0));let r=(r,i,a,o)=>{e.add(Z(t.cyl(a*.9,a,i,n,{seg:12}),r,o,0));let s=Z(t.sphere(a,n,{seg:12}),r,o+i/2,0);s.scale.y=1.5,e.add(s)};r(0,.22,.15,.4),r(-.2,.1,.07,.33),r(.2,.1,.07,.33)},tokyoTower(e,t){let n=`#F25822`,r=`#EDEDED`,i=0;for(let a=0;a<9;a++){let o=a/9,s=(a+1)/9,c=.19*(1-o)+.03*o,l=.19*(1-s)+.03*s,u=.085,d=a%2?r:n;e.add(Z(t.cyl(l,c,u,d,{seg:4,glow:n,glowDay:0,glowNight:.7}),0,i+u/2,0)),i+=u}e.add(Z(t.box(.22,.02,.22,n,{glow:n,glowNight:.7}),0,.28,0)),e.add(Z(t.box(.12,.02,.12,r),0,.5,0)),e.add(Z(t.cone(.012,.16,r,{seg:6,glow:`#ff6a2a`,glowNight:.9}),0,i+.08,0))},pagoda(e,t){let n=0;for(let r=0;r<5;r++){let i=.42-r*.06,a=.11;e.add(Z(t.box(i,a,i,`#B23A2C`,{windows:r<4}),0,n+a/2,0)),e.add(Z(t.box(i*1.34,.03,i*1.34,`#7A3B2A`),0,n+a+.015,0)),n+=.16999999999999998}e.add(Z(t.cyl(.012,.012,.1,`#E0C040`,{seg:6}),0,n+.05,0)),e.add(Z(t.sphere(.03,`#E0C040`,{seg:8,glow:`#ffe680`,glowNight:.8}),0,n+.12,0))},neonBillboard(e,t){let n=`#20242C`;e.add(Z(t.box(.3,1,.3,n,{windows:!0}),0,.5,0));let r=[`#5AE8E0`,`#E85AA0`,`#E8E06A`],i=(n,r,i,a,o,s,c)=>{let l=Z(t.box(n,r,.02,i,{glow:i,glowDay:.6,glowNight:1.1}),a,o,s);l.rotation.y=c,e.add(l)};i(.22,.34,r[0],0,.75,.16,0),i(.16,.5,r[1],.16,.5,0,Math.PI/2),i(.2,.22,r[2],0,.34,-.16,0),e.add(Z(t.cone(.01,.14,n,{seg:6,glow:`#E85AA0`,glowDay:.4,glowNight:1}),0,1.08,0))}};function jt(e,t){let n=new U;return At[e](n,Ot(t)),n}var Mt=``+new URL(`building-skyscraper-d-CapD2Zqe.glb`,import.meta.url).href,Nt=``+new URL(`building-n-hdv8kKtN.glb`,import.meta.url).href,Pt=``+new URL(`building-g-CsTB1qH9.glb`,import.meta.url).href,Ft=``+new URL(`colormap-CK8fW2HB.png`,import.meta.url).href,It={skyscraper:{url:Mt,color:`#9cc1dd`,fill:.92},midrise:{url:Nt,color:`#c9a07a`,fill:.96},setback:{url:Pt,color:`#d9c7a0`,fill:.9}};function Lt({windowGlow:e}){let t=new p;t.setURLModifier(e=>e.includes(`colormap.png`)?Ft:e);let n=new pe(t),r={},i=!1,a=Promise.all(Object.entries(It).map(async([e,t])=>{r[e]=(await n.loadAsync(t.url)).scene})).then(()=>{i=!0,window.__landmarksReady=!0}).catch(e=>console.error(`landmark models failed:`,e)),o=9e3;function s(t,n,i={}){let a,s;if(Et.includes(t))a=jt(t,{windowGlow:e,winColors:i.winColors,litFrac:i.litFrac,id:()=>++o}),s=1;else{let e=r[t],n=It[t];if(!e||!n)return null;a=e.clone(!0),s=n.fill}a.updateMatrixWorld(!0);let c=new ie().setFromObject(a).getSize(new A);a.scale.setScalar(n.h*s/c.y),a.updateMatrixWorld(!0);let l=new ie().setFromObject(a),u=l.getCenter(new A);return a.position.x+=n.x-u.x,a.position.z+=n.z-u.z,a.position.y+=n.plinthTop-l.min.y,Et.includes(t)?a.traverse(e=>{e.isMesh&&(e.castShadow=!1,e.raycast=()=>{})}):a.traverse(n=>{if(!n.isMesh)return;n.castShadow=!1,n.raycast=()=>{};let r=n=>J(n.clone(),{color:It[t].color,id:++o,windowGlow:e,winColors:i.winColors,litFrac:i.litFrac});n.material=Array.isArray(n.material)?n.material.map(r):r(n.material)}),a}return{make:s,whenReady:a,heightFactor:e=>Dt[e]??1,get ready(){return i}}}var Rt=[`clear`,`rain`,`snow`,`fog`];function zt({extent:e=7}={}){let t=new U;t.raycast=()=>{};let n=e+2,r=.25,a=(e,t)=>e+Math.random()*(t-e),o=new i(new x(.015,.5),new l({color:`#a9bdd6`,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),600);o.frustumCulled=!1,o.raycast=()=>{};let s=new Float32Array(600*3),c=new Float32Array(600);for(let e=0;e<600;e++)s[e*3]=a(-n,n),s[e*3+1]=a(r,11),s[e*3+2]=a(-n,n),c[e]=a(9,14);let u=new i(new x(.07,.07),new l({color:`#f3f7ff`,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),700);u.frustumCulled=!1,u.raycast=()=>{};let d=new Float32Array(700*3),f=new Float32Array(700),p=new Float32Array(700);for(let e=0;e<700;e++)d[e*3]=a(-n,n),d[e*3+1]=a(r,11),d[e*3+2]=a(-n,n),f[e]=a(0,6.28),p[e]=a(.6,1.2);t.add(o,u);let m=Array.from({length:8},()=>new A),h=0,g=`clear`,_=0,v=0,y=0,b=0,S=0,C=new ve,w=(e,t,n,r)=>e+(t-e)*Math.min(1,n*r);function T(e){Rt.includes(e)&&(g=e)}function E(){g=Rt[(Rt.indexOf(g)+1)%Rt.length]}function D(e,t){let i=g===`rain`,l=g===`snow`,x=g===`fog`,T=g!==`clear`;_=w(_,+!!T,e,1.4),v=w(v,+!!T,e,1.2),y=w(y,+!!x,e,.9),S=w(S,T&&!x?1:0,e,1),b=w(b,+!!l,e,l?.22:.5);let E=i?_:0,D=Math.round(600*E);for(let t=0;t<600;t++){if(t>=D){C.position.set(0,-50,0),C.scale.setScalar(0),C.updateMatrix(),o.setMatrixAt(t,C.matrix);continue}s[t*3+1]-=c[t]*e,s[t*3]+=e*1.1,s[t*3+1]<r&&(s[t*3]=a(-n,n),s[t*3+1]=11,s[t*3+2]=a(-n,n)),C.position.set(s[t*3],s[t*3+1],s[t*3+2]),C.rotation.set(0,0,0),C.scale.set(1,1,1),C.updateMatrix(),o.setMatrixAt(t,C.matrix)}o.instanceMatrix.needsUpdate=!0,o.material.opacity=.55*E,h=i?Math.round(8*_):0;for(let e=0;e<h;e++)m[e].set(Math.random(),Math.random(),.05*_);let O=Math.round(700*(l?_:0));for(let i=0;i<700;i++){if(i>=O){C.position.set(0,-50,0),C.scale.setScalar(0),C.updateMatrix(),u.setMatrixAt(i,C.matrix);continue}d[i*3+1]-=p[i]*e;let o=Math.sin(t*1.5+f[i])*.5;d[i*3+1]<r&&(d[i*3]=a(-n,n),d[i*3+1]=11,d[i*3+2]=a(-n,n)),C.position.set(d[i*3]+o,d[i*3+1],d[i*3+2]),C.rotation.set(0,0,0),C.scale.setScalar(1),C.updateMatrix(),u.setMatrixAt(i,C.matrix)}u.instanceMatrix.needsUpdate=!0,u.material.opacity=.9*(l?_:0)}return{group:t,update:D,cycle:E,setKind:T,rainDrops:m,get kind(){return g},get intensity(){return _},get overcast(){return v},get fog(){return y},get snow(){return b},get cloud(){return S},get rainDropCount(){return h},poolCounts:{rain:600,snow:700}}}function Bt(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=(e,n,r)=>{let i=t.createRadialGradient(e,n,0,e,n,r);i.addColorStop(0,`rgba(255,255,255,0.95)`),i.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=i,t.beginPath(),t.arc(e,n,r,0,7),t.fill()};n(128*.42,128*.56,128*.26),n(128*.6,128*.5,128*.3),n(128*.5,128*.46,128*.22),n(128*.34,128*.54,128*.18),n(128*.7,128*.58,128*.18);let r=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5],i=t.getImageData(0,0,128,128),a=i.data;for(let e=0;e<128;e++)for(let t=0;t<128;t++){let n=(e*128+t)*4,i=a[n+3]/255,o=(r[e%4*4+t%4]+.5)/16-.5;a[n+3]=Math.max(0,Math.min(1,Math.floor(i*5+.5+o)/5))*255}t.putImageData(i,0,0);let o=new k(e);return o.colorSpace=E,o}function Vt({extent:e=8,count:t=16}={}){let n=new U;n.raycast=()=>{};let r=Bt(),i=e+6,a=(e,t)=>e+Math.random()*(t-e),o=[];for(let e=0;e<t;e++){let e=new P({map:r,transparent:!0,depthWrite:!1,opacity:0,fog:!0}),t=new B(e),s={sp:t,mat:e,wisp:Math.random(),x:a(-i,i),z:a(-i,i),hiY:a(4,6.8),loY:a(.6,2.2),w:a(3,5.6),h:a(1.7,3),speed:a(.25,.7),op:a(.6,1)};t.raycast=()=>{},o.push(s),n.add(t)}let s=new R,c=new R(`#ffffff`),l=new R(`#5b626e`);function u(e,t,n,r){let u=r?r.cloud:0,d=r?r.fog:0,f=Math.min(1,.4+.6*u+.5*d);s.copy(n.sky).lerp(c,.62),s.lerp(l,.6*u);for(let n=0;n<o.length;n++){let r=o[n],c=n/o.length<f;r.x+=r.speed*e*(.6+.8*u),r.x>i&&(r.x=-i,r.z=a(-i,i));let l=Math.min(Ht(r.x,-i,-i+3),1-Ht(r.x,i-3,i)),p=r.hiY*(1-d)+r.loY*d,m=1-.5*r.wisp,h=.72*Math.max(0,1-d-u)+1*u+.42*d,g=c?Math.max(0,h)*r.op*m*l:0;r.mat.opacity+=(g-r.mat.opacity)*Math.min(1,e*2.5),r.mat.color.copy(s);let _=r.w*(1+.6*d)*(1+.4*r.wisp),v=r.h*(1-.35*d);r.sp.scale.set(_,v,1),r.sp.position.set(r.x,p+Math.sin(t*.3+n)*.15,r.z)}}function d(e){r=e;for(let t of o)t.mat.map=e,t.mat.needsUpdate=!0}return{group:n,update:u,setTexture:d,get count(){return o.length}}}function Ht(e,t,n){let r=Math.max(0,Math.min(1,(e-t)/(n-t)));return r*r*(3-2*r)}var Ut=`attribute float aSize;
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
}`,Wt=`precision highp float;

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
}`,Gt={realistic:0,charm:0,pixel:2,vector:1},Kt={realistic:1,charm:1,pixel:1.9,vector:1.2};function qt({seed:n=1517,count:r=340,spreadX:i=21,yLo:a=3,yHi:o=18,zBase:c=7.2}={}){let l=new U;l.raycast=()=>{};let u=Ke(n>>>0),d=new Float32Array(r*3),f=new Float32Array(r),p=new Float32Array(r),m=new Float32Array(r),h=[];for(let e=0;e<r;e++){let t=(u()*2-1)*i,n=a+u()*(o-a),r=-c-u()*.7;d[e*3]=t,d[e*3+1]=n,d[e*3+2]=r;let s=.35+u()*.65;p[e]=s,f[e]=1.6+u()*2.8+(s>.85?2.2:0),m[e]=u()*Math.PI*2,s>.82&&h.push([t,n,r])}let g=new fe;g.setAttribute(`position`,new le(d,3)),g.setAttribute(`aSize`,new le(f,1)),g.setAttribute(`aBright`,new le(p,1)),g.setAttribute(`aPhase`,new le(m,1));let _=new e({vertexShader:Ut,fragmentShader:Wt,uniforms:{uTime:{value:0},uTwinkle:{value:1},uSizeScale:{value:1},uColor:{value:new R(`#eaf0ff`)},uNight:{value:0},uMode:{value:0}},transparent:!0,depthWrite:!1,blending:2,fog:!1,toneMapped:!1}),v=new s(g,_);v.raycast=()=>{},v.frustumCulled=!1,l.add(v);let y=[];if(h.length>6)for(let e=0;e<3;e++){let e=Math.floor(u()*h.length);for(let t=0;t<3;t++){let t=h[e],n=h[(e+1+Math.floor(u()*2))%h.length];y.push(t[0],t[1],t[2],n[0],n[1],n[2]),e=(e+1)%h.length}}let b=[[[0,2],[0,0]],[[0,0],[.7,0]],[[2.1,2],[1.4,2]],[[1.4,2],[1.4,0]],[[1.4,0],[2.1,0]],[[2.1,0],[2.1,1]],[[2.1,1],[1.7,1]],[[2.8,0],[2.8,2]],[[2.8,2],[3.5,2]],[[3.5,2],[3.5,1]],[[3.5,1],[2.8,1]],[[2.8,1],[3.6,0]]],x=-c-.4,S=.62;for(let[[e,t],[n,r]]of b)y.push(-3+e*S,12+t*S,x,-3+n*S,12+r*S,x);let C=new fe;C.setAttribute(`position`,new ge(y,3));let w=new t(C,new I({color:`#9fb6e8`,transparent:!0,opacity:0,depthWrite:!1,fog:!1,toneMapped:!1}));w.raycast=()=>{},w.frustumCulled=!1,l.add(w);let T=new B(new P({map:Jt(),transparent:!0,opacity:0,depthWrite:!1,blending:2,fog:!1,toneMapped:!1}));T.raycast=()=>{},T.scale.set(i*2.4,i*.95,1),T.position.set(2,12,-c-.7),T.material.rotation=-.5,T.renderOrder=-3,l.add(T);let E=-1;function D(e,t=`realistic`,n=0,r=!1){_.uniforms.uTime.value=n,_.uniforms.uTwinkle.value=+!r,_.uniforms.uNight.value=e;let i=Gt[t]??0;i!==E&&(_.uniforms.uMode.value=i,E=i),_.uniforms.uSizeScale.value=Kt[t]??1,w.material.opacity=e*.5,T.material.opacity=e*.32,l.visible=e>.001}return{group:l,update:D}}function Jt(){let e=document.createElement(`canvas`);e.width=e.height=256;let t=e.getContext(`2d`),n=t.createRadialGradient(256/2,256/2,0,256/2,256/2,256/2);n.addColorStop(0,`rgba(150,170,230,0.5)`),n.addColorStop(.4,`rgba(120,130,200,0.22)`),n.addColorStop(1,`rgba(90,100,160,0)`),t.fillStyle=n,t.fillRect(0,0,256,256);let r=Ke(20145);for(let e=0;e<7;e++){let e=40+r()*176,n=70+r()*116,i=14+r()*30,a=t.createRadialGradient(e,n,0,e,n,i);a.addColorStop(0,`rgba(200,210,255,0.18)`),a.addColorStop(1,`rgba(200,210,255,0)`),t.fillStyle=a,t.beginPath(),t.arc(e,n,i,0,Math.PI*2),t.fill()}let i=new k(e);return i.colorSpace=E,i}var Yt=Math.PI*2;function Xt(e){let t=document.createElement(`canvas`);t.width=t.height=128;let n=t.getContext(`2d`),r=n.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return r.addColorStop(0,`#ffffff`),r.addColorStop(.34,`#fffaf0`),r.addColorStop(.66,e),r.addColorStop(.86,e),r.addColorStop(1,`rgba(255,255,255,0)`),n.fillStyle=r,n.beginPath(),n.arc(128/2,128/2,128/2,0,Yt),n.fill(),rn(t,!0)}function Zt(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);n.addColorStop(0,`#ffffff`),n.addColorStop(.4,`#eef3ff`),n.addColorStop(.82,`#c4cee6`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,128/2,0,Yt),t.fill(),t.globalAlpha=.14,t.fillStyle=`#8b97b4`;for(let[e,n,r]of[[54,50,9],[78,66,7],[60,82,5]])t.beginPath(),t.arc(e,n,r,0,Yt),t.fill();return rn(e,!0)}function Qt(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`);t.translate(128/2,128/2),t.fillStyle=`rgba(255,210,120,0.9)`;for(let e=0;e<12;e++)t.rotate(Yt/12),t.beginPath(),t.moveTo(0,-28),t.lineTo(7,-54),t.lineTo(-7,-54),t.closePath(),t.fill();let n=t.createRadialGradient(0,0,0,0,0,32);return n.addColorStop(0,`#ffffff`),n.addColorStop(.4,`#fff1c8`),n.addColorStop(.8,`#ffb24a`),n.addColorStop(1,`#ff8a2a`),t.fillStyle=n,t.beginPath(),t.arc(0,0,32,0,Yt),t.fill(),rn(e,!0)}function $t(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,46);n.addColorStop(0,`#ffffff`),n.addColorStop(.5,`#e6ecfb`),n.addColorStop(1,`#c2cce4`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,46,0,Yt),t.fill(),t.fillStyle=`#aab6d2`;for(let[e,n,r]of[[52,48,11],[80,62,8],[58,82,7],[40,66,5]])t.beginPath(),t.arc(e,n,r,0,Yt),t.fill();return rn(e,!0)}function en(e,t,n){let r=document.createElement(`canvas`);r.width=r.height=144;let i=r.getContext(`2d`),a=17/2,o=18/2-.5;for(let r=0;r<18;r++)for(let s=0;s<18;s++){let c=Math.hypot(s-a,r-a);c>o||(i.fillStyle=c<o*.45?e:c<o*.78?t:n,i.fillRect(Math.round(s*8),Math.round(r*8),8,8))}return rn(r,!1)}function tn(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return n.addColorStop(0,`rgba(255,255,255,0.9)`),n.addColorStop(.38,`rgba(255,255,255,0.3)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,128/2,0,Yt),t.fill(),rn(e,!0)}function nn(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2),r=`20,30,48`;return n.addColorStop(0,`rgba(${r},0)`),n.addColorStop(.42,`rgba(${r},0)`),n.addColorStop(.6,`rgba(${r},0.6)`),n.addColorStop(1,`rgba(${r},0)`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,128/2,0,Yt),t.fill(),rn(e,!0)}function rn(e,t){let n=new k(e);return n.colorSpace=E,t||(n.magFilter=v,n.minFilter=v),n}var an=(e,t,n)=>{let r=Math.max(0,Math.min(1,(e-t)/(n-t)));return r*r*(3-2*r)};function on({skyW:e=15,skyY0:t=3.4,skyH:n=3.8,z:r=-7.8,biasX:i=4.5,sunSize:a=4.6,moonSize:o=4}={}){let s=new U;s.raycast=()=>{};let c=(e,t)=>{let n=new B(new P({map:e,transparent:!0,depthWrite:!1,fog:!1,toneMapped:!1,...t?{blending:2}:{}}));return n.raycast=()=>{},n},l={realistic:Xt(`#ffcf8a`),charm:Qt(),pixel:en(`#fff6e0`,`#ffc24a`,`#ff8a2a`)},u={realistic:Zt(),charm:$t(),pixel:en(`#ffffff`,`#cdd6ee`,`#9aa6c6`)},d=tn(),f=c(nn(),!1),p=c(d,!0),m=c(l.realistic),h=c(d,!0),g=c(u.realistic);f.renderOrder=-2,p.renderOrder=-1,s.add(f,p,m,h,g);let _=qt({});_.group.renderOrder=-4,s.add(_.group);let v=typeof window<`u`&&window.matchMedia?window.matchMedia(`(prefers-reduced-motion: reduce)`):null,y={realistic:{sunGlow:3,sunGlowOp:.7,moonGlow:2.6,moonGlowOp:.5,sizeMul:1,sunHaloOp:.85},charm:{sunGlow:2.2,sunGlowOp:.55,moonGlow:2.1,moonGlowOp:.42,sizeMul:1.08,sunHaloOp:.7},pixel:{sunGlow:1.7,sunGlowOp:.4,moonGlow:1.7,moonGlowOp:.32,sizeMul:1,sunHaloOp:.6}},b=`realistic`;function x(e){e===b||!y[e]||(b=e,m.material.map=l[e],m.material.needsUpdate=!0,g.material.map=u[e],g.material.needsUpdate=!0)}new R;let S=new R(`#fff3df`),C=new R(`#ffb060`),w=new R(`#ff6a2a`),T=new R(`#eef2ff`),E=new R(`#9fbcff`);function D(s,c,l,u,d=`realistic`){x(d);let D=y[b],O=l.sunArc,ee=u?Math.min(1,(u.cloud||0)*.85+(u.fog||0)*.7):0,te=O.y,k=an(te,-.04,.1)*(1-.7*ee),A=1-an(Math.abs(te),.02,.5);m.position.set(O.x*e+i,t+O.y*n,r),p.position.copy(m.position);let j=a*D.sizeMul*(1+.55*A);m.scale.setScalar(j),p.scale.setScalar(j*D.sunGlow),m.material.color.copy(S),p.material.color.copy(C).lerp(w,A),m.material.opacity=k,p.material.opacity=k*D.sunGlowOp*(.7+.5*A),f.position.copy(m.position),f.scale.setScalar(j*1.7),f.material.opacity=k*(1-A)*D.sunHaloOp;let M=an(-O.y,-.04,.1)*(1-.65*ee);g.position.set(-O.x*e+i,t+-O.y*n,r),h.position.copy(g.position);let N=o*D.sizeMul;g.scale.setScalar(N),h.scale.setScalar(N*D.moonGlow),g.material.color.copy(T),h.material.color.copy(E),g.material.opacity=M,h.material.opacity=M*D.moonGlowOp;let ne=an(-O.y,-.05,.18)*(1-.85*ee);_.update(ne,d,c,!!(v&&v.matches))}return{group:s,update:D}}var sn=`varying vec2 vUv;

void main() {
  
  
  
  vUv = uv;

  
  
  
  
  
  
  
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,cn=`precision highp float;

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
}`,ln=`varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0); 
}`,un=`precision highp float;

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
}`,dn=`precision highp float;

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
}`,fn=`precision highp float;

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
}`,pn=`const float CA_STRENGTH   = 0.0030;  
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
}`,mn=`const float DITHER = 0.55;   

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
}`,hn=`precision highp float;

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
}`,gn=`precision highp float;

varying vec2 vUv;
uniform sampler2D uToon;   
uniform sampler2D uPixel;  
uniform float     uBlend;  

void main() {
  vec3 t = texture2D(uToon, vUv).rgb;
  vec3 p = texture2D(uPixel, vUv).rgb;
  gl_FragColor = vec4(mix(t, p, uBlend), 1.0);
}`,_n=`precision highp float;

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
}`,vn={"1-bit":{gridWidth:110,dither:.6,palette:[`#15120c`,`#c8b486`]},gb:{gridWidth:130,dither:.4,palette:[`#0f380f`,`#306230`,`#8bac0f`,`#9bbc0f`]},"8-bit":{gridWidth:160,dither:.55,palette:[`#140c1c`,`#442434`,`#30346d`,`#4e4a4e`,`#854c30`,`#346524`,`#d04648`,`#757161`,`#597dce`,`#d27d2c`,`#8595a1`,`#6daa2c`,`#d2aa99`,`#6dc2ca`,`#dad45e`,`#deeed6`]},"16-bit":{gridWidth:280,dither:.3,palette:`#000000.#222034.#45283c.#663931.#8f563b.#df7126.#d9a066.#eec39a.#fbf236.#99e550.#6abe30.#37946e.#4b692f.#524b24.#323c39.#3f3f74.#306082.#5b6ee1.#639bff.#5fcde4.#cbdbfc.#ffffff.#9badb7.#847e87.#696a6a.#595652.#76428a.#ac3232.#d95763.#d77bba.#8f974a.#8a6f30`.split(`.`)},modern:{gridWidth:460,dither:.6,palette:null}},yn=[`gb`,`8-bit`,`16-bit`,`modern`];function bn(e){let t=Math.max(e.length,1),n=new Float32Array(t*4);e.forEach((e,t)=>{let r=new R(e);n[t*4+0]=r.r,n[t*4+1]=r.g,n[t*4+2]=r.b,n[t*4+3]=1});let r=new ne(n,t,1,u,y);return r.minFilter=v,r.magFilter=v,r.needsUpdate=!0,r}var xn=220,Sn={night:[`#0A0C16`,`#1C2236`,`#3A3A52`,`#5A5A78`,`#8A92B0`],dawn:[`#1A1008`,`#43281A`,`#7A4A30`,`#B07A4E`,`#E8A86A`],noon:[`#16100A`,`#3A2F1E`,`#6B563A`,`#937B54`,`#B89968`],dusk:[`#140A0A`,`#3E1E1A`,`#7A3828`,`#B85A36`,`#F0884A`]},Cn={night:[`#020604`,`#06180E`,`#10401E`,`#1E9040`,`#7FE0FF`],dawn:[`#060603`,`#1A2410`,`#3A6B22`,`#6CC040`,`#FFC060`],noon:[`#050805`,`#0E2912`,`#1E6B2F`,`#3CF06A`,`#FFB000`],dusk:[`#080402`,`#241408`,`#6B4A12`,`#E0A030`,`#FF7030`]};function wn({demo:t=!1,citySeed:i=0,profileIndex:a=0}={}){let s=new ce({antialias:!0,preserveDrawingBuffer:!0});s.shadowMap.enabled=!0,s.shadowMap.type=1,s.shadowMap.autoUpdate=!1,s.shadowMap.needsUpdate=!0;let c=!!(window.matchMedia&&window.matchMedia(`(pointer: coarse)`).matches);s.setPixelRatio(Math.min(window.devicePixelRatio,c?1.5:2)),s.setSize(window.innerWidth,window.innerHeight),s.setClearColor(920327,1),document.body.appendChild(s.domElement);let d=s.getDrawingBufferSize(new V),f=new _;f.fog=new r(10465470,0);let p=new R(`#aeb6c0`),h=.062,y=new R(`#74508f`),S=new R,C=je({aspect:window.innerWidth/window.innerHeight}),w=pt({t:.5}),T={type:b,format:u,minFilter:v,magFilter:v,wrapS:N,wrapT:N,depthBuffer:!1,stencilBuffer:!1},O=[new oe(256,256,T),new oe(256,256,T),new oe(256,256,T)];for(let e of O)s.setRenderTarget(e),s.clear();s.setRenderTarget(null);let ee=new _,te=new n(-1,1,1,-1,0,1),j=new e({vertexShader:ln,fragmentShader:un,uniforms:{uCurr:{value:null},uPrev:{value:null},uTexel:{value:new V(1/256,1/256)},uMouse:{value:new V(-1,-1)},uMouseStrength:{value:0},uC2:{value:.25},uDamping:{value:.992},uRainCount:{value:0},uRainDrops:{value:Array.from({length:8},()=>new A)},uWakeCount:{value:0},uWakeDrops:{value:Array.from({length:8},()=>new A)}}});ee.add(new o(new x(2,2),j));let M=new oe(d.x,d.y,{minFilter:F,magFilter:F,depthBuffer:!0,stencilBuffer:!1});function ne(e){let t=document.createElement(`canvas`);t.width=t.height=1024;let n=t.getContext(`2d`);n.fillStyle=e?`#0c1418`:`#15110b`,n.fillRect(0,0,1024,1024),n.strokeStyle=e?`rgba(120,150,170,0.22)`:`rgba(184,153,104,0.30)`,n.lineWidth=2;for(let e=0;e<=1024;e+=64)n.beginPath(),n.moveTo(e,0),n.lineTo(e,1024),n.stroke(),n.beginPath(),n.moveTo(0,e),n.lineTo(1024,e),n.stroke();e||(n.fillStyle=`#B89968`,n.font=`bold 360px Georgia, serif`,n.textAlign=`center`,n.textBaseline=`middle`,n.fillText(`LGR`,512,470),n.font=`600 64px ui-monospace, monospace`,n.fillText(`WEB · STUDIO`,512,720));let r=new k(t);return r.colorSpace=E,r}let re=new o(new x(28,28),new l({map:ne(t)}));re.rotation.x=-Math.PI/2,re.position.y=-.35,f.add(re);let ie=new o(new x(40,24),new e({depthWrite:!1,vertexShader:sn,fragmentShader:cn,uniforms:{uTime:{value:0},uInk:{value:w.horizon},uGold:{value:w.sky},uFogColor:{value:S},uFogAmt:{value:0},uFogCharm:Re}}));ie.position.set(0,3,-8),f.add(ie);let P=new e({vertexShader:dn,fragmentShader:fn,uniforms:{uHeight:{value:null},uScene:{value:M.texture},uTexel:{value:new V(1/256,1/256)},uResolution:{value:new V(d.x,d.y)},uDisplace:{value:.42},uNormalStrength:{value:22},uRefractStrength:{value:.06},uChromaScale:{value:1},uNormalMatrix:{value:new g},uLightDir:{value:w.sunDir},uInk:{value:new R(`#2A2218`)},uGold:{value:new R(`#B89968`)},uVector:Me,uVecWater:{value:new R(`#1fb8d8`)},uVecTint:{value:Ne}}}),I=new o(new x(28,28,255,255),P);I.rotation.x=-Math.PI/2,I.updateMatrixWorld(!0),P.uniforms.uNormalMatrix.value.getNormalMatrix(I.matrixWorld),f.add(I);let ae={value:0},se=Lt({windowGlow:ae}),L=at({seed:i,profileIndex:a,landmarkFactory:se,windowGlow:ae});f.add(L.group);let le=vt({plinthTop:.3,extent:L.extent,profile:L.state.profile});f.add(le.group);let ue=Tt({extent:L.extent,waterSize:28,plinthTop:.3});f.add(ue.group),j.uniforms.uWakeDrops.value=ue.wakeDrops;let z=zt({extent:L.extent});f.add(z.group),j.uniforms.uRainDrops.value=z.rainDrops;let de=Vt({extent:L.extent});f.add(de.group);let B=on();f.add(B.group),L.group.remove(L.key),f.add(L.key),L.key.castShadow=!0,L.key.shadow.mapSize.set(2048,2048),L.key.shadow.bias=-18e-5,L.key.shadow.normalBias=.028,f.add(L.key.target);function fe(){let e=L.key.shadow.camera,t=L.extent+4.5;e.left=-t,e.right=t,e.top=t,e.bottom=-t,e.near=1,e.far=48,e.updateProjectionMatrix(),s.shadowMap.needsUpdate=!0}fe();let pe=new D(d.x,d.y),me=new oe(d.x,d.y,{minFilter:F,magFilter:F,depthBuffer:!0,stencilBuffer:!1,depthTexture:pe}),he=new oe(d.x,d.y,{minFilter:F,magFilter:F,depthBuffer:!1,stencilBuffer:!1}),H=new oe(d.x,d.y,{minFilter:F,magFilter:F,depthBuffer:!1,stencilBuffer:!1}),U=new oe(d.x,d.y,{minFilter:F,magFilter:F,depthBuffer:!1,stencilBuffer:!1}),ge=new _,_e=new n(-1,1,1,-1,0,1),ve=new o(new x(2,2));ge.add(ve);let ye=new e({vertexShader:ln,fragmentShader:pn,uniforms:{uScene:{value:me.texture},uTime:{value:0},uResolution:{value:new V(d.x,d.y)},uGrain:{value:1},uChroma:{value:1},uExposure:{value:1}}}),be=e=>{let t=e.map(e=>new R(e));for(;t.length<8;)t.push(new R(0,0,0));return t},xe=[`night`,`dawn`,`noon`,`dusk`],Se={inkgold:xe.map(e=>be(Sn[e])),terminal:xe.map(e=>be(Cn[e]))},Ce=new e({vertexShader:ln,fragmentShader:mn,uniforms:{uScene:{value:he.texture},uResolution:{value:new V(d.x,d.y)},uPixelSize:{value:xn},uPalette:{value:Se.inkgold[2]},uPaletteB:{value:Se.inkgold[2]},uPaletteBlend:{value:0},uPaletteSize:{value:5}}}),we=new e({vertexShader:ln,fragmentShader:_n,uniforms:{uScene:{value:he.texture},uResolution:{value:new V(d.x,d.y)},uGridWidth:{value:160},uDither:{value:.55},uPalette:{value:bn(vn[`8-bit`].palette)},uPaletteSize:{value:1},uUsePalette:{value:1}}}),Te={};for(let e of yn)Te[e]=vn[e].palette?bn(vn[e].palette):null;let Ee=new e({vertexShader:ln,fragmentShader:hn,uniforms:{uScene:{value:he.texture},uDepth:{value:pe},uResolution:{value:new V(d.x,d.y)},uBands:{value:4},uToonGain:{value:1.7},uToonGamma:{value:.6},uToonFloor:{value:w.toonFloor},uOutline:{value:w.outline},uNear:{value:.1},uFar:{value:100},uIsPerspective:{value:1}}}),De=new e({vertexShader:ln,fragmentShader:gn,uniforms:{uToon:{value:H.texture},uPixel:{value:U.texture},uBlend:{value:0}}});function W(e,t){ve.material=e,s.setRenderTarget(t),s.render(ge,_e)}function Oe(){C.setViewport(window.innerWidth,window.innerHeight),s.setSize(window.innerWidth,window.innerHeight);let e=s.getDrawingBufferSize(new V);return M.setSize(e.x,e.y),me.setSize(e.x,e.y),he.setSize(e.x,e.y),H.setSize(e.x,e.y),U.setSize(e.x,e.y),P.uniforms.uResolution.value.set(e.x,e.y),ye.uniforms.uResolution.value.set(e.x,e.y),Ce.uniforms.uResolution.value.set(e.x,e.y),we.uniforms.uResolution.value.set(e.x,e.y),Ee.uniforms.uResolution.value.set(e.x,e.y),e}let G=3,K=!1,ke=!1,q=`native`,Ae=.3,Be=.46,Ve=[`native`,...yn],He={"16-bit":`16-bit`,"8-bit":`8-bit`,gb:`Game Boy`,modern:`Modern`,native:`Pixel`,"1-bit":`1-bit`};typeof window<`u`&&(window.__mode=G,window.__vector=K,window.__era=q);let Ue=0,We=performance.now(),Ge=typeof window<`u`&&new URLSearchParams(window.location.search).has(`perf`);typeof window<`u`&&(window.__perf=Ge),Ge&&(s.info.autoReset=!1);let J=null;typeof window<`u`&&(window.__loaded=!1);let Y=0,Ke=new A(1,1,1),qe=!1;function Je(e){let t=ke?Se.terminal:Se.inkgold,n=e%1*4,r=Math.floor(n)%4;Ce.uniforms.uPalette.value=t[r],Ce.uniforms.uPaletteB.value=t[(r+1)%4],Ce.uniforms.uPaletteBlend.value=n-Math.floor(n)}function X(e){let t=vn[e];t&&(we.uniforms.uGridWidth.value=t.gridWidth,we.uniforms.uDither.value=t.dither,we.uniforms.uUsePalette.value=+!!t.palette,t.palette&&(we.uniforms.uPalette.value=Te[e],we.uniforms.uPaletteSize.value=t.palette.length))}function Ye(){q!==`native`&&X(q)}let Xe=()=>q===`native`?Ce:we;function Ze(e,t){I.visible=!1,s.setRenderTarget(M),s.render(f,e),I.visible=!0,s.setRenderTarget(t),s.render(f,e)}function Qe(e,t){if(I.visible=!1,s.setRenderTarget(M),s.render(f,C.camera),I.visible=!0,G===1)s.setRenderTarget(t),s.render(f,C.camera);else if(s.setRenderTarget(me),s.render(f,C.camera),G===2)ye.uniforms.uGrain.value=1,ye.uniforms.uChroma.value=1,W(ye,t);else{ye.uniforms.uGrain.value=0,ye.uniforms.uChroma.value=0,W(ye,he);let n=C.camera;Ee.uniforms.uNear.value=n.near,Ee.uniforms.uFar.value=n.far,Ee.uniforms.uIsPerspective.value=+!!n.isPerspectiveCamera;let r=e.era?(X(e.era),we):Xe();e.kind===`pixel`?(W(r,t),window.__style=`pixel`):e.kind===`toon`?(W(Ee,t),window.__style=`toon`):(W(Ee,H),W(r,U),De.uniforms.uBlend.value=e.blend,W(De,t),window.__style=`blend`)}}function $e(){let e=et(),t=e.kind===`toon`?1:e.kind===`blend`?1-e.blend:0;return P.uniforms.uChromaScale.value=m.lerp(1,.5,t),e}function et(){if(G===1||G===2)return{kind:`none`};if(G===7)return{kind:`pixel`};if(G===8)return{kind:`toon`};let e=C.styleT;return window.__styleT=e,e<=Ae?{kind:`toon`}:e>=Be?{kind:`pixel`,era:e<.62?`16-bit`:e<.8?`8-bit`:`gb`}:{kind:`blend`,blend:m.smoothstep(e,Ae,Be),era:`16-bit`}}function tt(e){return G===1||G===2?``:K&&G!==7&&G!==8?`Vector`:e.kind===`toon`?`Toon`:e.kind===`pixel`?He[e.era||q]||`Pixel`:e.kind===`blend`?`Toon → `+(He[e.era]||`Pixel`):``}function nt(e,t,{shadowsOn:n=!0,seasonTarget:r=0}={}){if(Ge){let e=s.info;J={calls:e.render.calls,tris:e.render.triangles,programs:e.programs?e.programs.length:0,geo:e.memory.geometries,tex:e.memory.textures},e.reset()}ie.material.uniforms.uTime.value=t,ye.uniforms.uTime.value=t,w.update(e),L.key.position.copy(w.sunDir).multiplyScalar(24),L.key.color.copy(w.sunColor),L.key.intensity=w.sunIntensity,L.fill.color.copy(w.hemiSky),L.fill.groundColor.copy(w.hemiGround),ae.value=w.windowGlow;let i=z.overcast;L.key.intensity*=1-.5*i,L.key.color.lerp(p,.45*i),L.fill.intensity=1+.7*i;let a=m.smoothstep(w.sunDir.y,.06,.34),o=m.lerp(.28,1,1-w.windowGlow),c=n?a*o:0;L.key.shadow.intensity=.72*c,Pe.value=.52*c,(n&&!qe||Ke.distanceToSquared(w.sunDir)>2e-5)&&(s.shadowMap.needsUpdate=!0,Ke.copy(w.sunDir)),qe=n;let l=1-w.windowGlow;Ne.setRGB(m.lerp(.46,1,l),m.lerp(.52,1,l),m.lerp(.74,1,l)),ye.uniforms.uExposure.value=w.exposure,Ee.uniforms.uToonGain.value=w.toonGain,s.setClearColor(w.horizon,1),Je(w.t),window.__t=w.t,le.update(e,t,w),L.update(t),ue.update(e,t,w),j.uniforms.uWakeCount.value=ue.wakeCount,z.update(e,t),j.uniforms.uRainCount.value=z.rainDropCount;let u=z.fog*(1-l);f.fog.density=z.fog*h,S.copy(w.horizon).lerp(y,.85*u),f.fog.color.copy(S),s.setClearColor(S,1),Re.value=z.fog,ie.material.uniforms.uFogAmt.value=.7*z.fog,Fe.value=z.snow,Ie.value=z.cloud*.55,Le.x+=e*.018,Le.y+=e*.009,ze.value+=(r-ze.value)*Math.min(1,e*1.5),de.update(e,t,w,z);let d=et(),g=d.kind===`pixel`||d.kind===`blend`?`pixel`:K||d.kind===`toon`?`charm`:`realistic`;B.update(e,t,w,z,g),Ue++;let _=performance.now();_-We>=1e3&&(window.__fps=Ue,Ge&&J&&(console.log(`[perf] ${Ue} fps · ~${(1e3/Math.max(1,Ue)).toFixed(2)} ms · calls ${J.calls} · tris ${J.tris} · programs ${J.programs} · geo ${J.geo} · tex ${J.tex}`),window.__perfInfo={fps:Ue,...J}),Ue=0,We=_);let[v,b,x]=O;if(j.uniforms.uPrev.value=v.texture,j.uniforms.uCurr.value=b.texture,s.setRenderTarget(x),s.render(ee,te),O=[b,x,v],P.uniforms.uHeight.value=O[1].texture,Y<2&&typeof document<`u`&&++Y===2){let e=document.getElementById(`lgr-loader`);e&&e.classList.add(`gone`),window.__loaded=!0}}function rt(e){G=e,window.__mode=G}function it(){return K=!K,Me.value=+!!K,window.__vector=K,K}function ot(e){return K=!!e,Me.value=+!!K,window.__vector=K,K}function st(){return q=Ve[(Ve.indexOf(q)+1)%Ve.length],window.__era=q,Ye(),q}function ct(){return ke=!ke,ke}return{updateWorld:nt,decideStyle:$e,renderCityPipeline:Qe,renderCityBeautyTo:Ze,styleHintName:tt,setPostMode:rt,toggleVector:it,setVector:ot,cycleEra:st,togglePalette:ct,get mode(){return G},get vector(){return K},get sceneEra(){return q},renderer:s,drawBuffer:d,scene:f,rig:C,sunRig:w,SIM:256,targets:O,simScene:ee,simCamera:te,simMaterial:j,grabRT:M,card:re,backdrop:ie,WATER_SIZE:28,water:I,waterMaterial:P,windowGlow:ae,landmarkFactory:se,city:L,cityLife:le,waterLife:ue,weatherRig:z,clouds:de,fitShadowFrustum:fe,SHADOW_DIST:24,sceneDepth:pe,sceneRT:me,filmicRT:he,toonRT:H,pixelRT:U,postScene:ge,postCamera:_e,postQuad:ve,filmicMaterial:ye,pixelMaterial:Ce,pixelkitMaterial:we,toonMaterial:Ee,mixMaterial:De,PALCACHE:Se,ERA_TEX:Te,runPass:W,OVERCAST_GREY:p,FOG_DENSITY:h,FOG_NIGHT_TINT:y,_fogColor:S,resize:Oe}}var Tn=`lgr_hints_`,En=!1;function Dn(){if(En||typeof document>`u`)return;En=!0;let e=document.createElement(`style`);e.textContent=`
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
  }`,document.head.appendChild(e)}function On({key:e,title:t=`Tips`,tips:n=[],force:r=!1}={}){let i={key:e,shown:!1,dismissed:!1,seen:!1};if(typeof window<`u`&&(window.__hints=i),typeof document>`u`||!e)return{dismiss(){},el:null};let a=Tn+e,o=!1;try{o=localStorage.getItem(a)===`1`}catch{}if(o&&!r)return i.seen=!0,{dismiss(){},el:null};Dn();let s=!!(window.matchMedia&&window.matchMedia(`(prefers-reduced-motion: reduce)`).matches),c=document.createElement(`div`);c.className=`lgr-hints`,c.innerHTML=`<div class="lgr-hints-card">
    <div class="lgr-hints-h">${t}</div>
    <ul>${n.map(e=>`<li>${e}</li>`).join(``)}</ul>
    <button class="lgr-hints-ok">Got it</button>
    <button class="lgr-hints-x" title="Dismiss (Esc)" aria-label="Dismiss">✕</button>
  </div>`,document.body.appendChild(c),i.shown=!0,s?c.classList.add(`on`):requestAnimationFrame(()=>c.classList.add(`on`));let l=!1;function u(e=!0){if(!l){if(l=!0,e)try{localStorage.setItem(a,`1`)}catch{}i.dismissed=!0,window.removeEventListener(`keydown`,d),c.classList.remove(`on`),setTimeout(()=>c.remove(),s?0:300)}}function d(e){e.key===`Escape`&&u(!0)}return window.addEventListener(`keydown`,d),c.querySelector(`.lgr-hints-ok`).addEventListener(`click`,()=>{navigator.vibrate?.(10),u(!0)}),c.querySelector(`.lgr-hints-x`).addEventListener(`click`,()=>{navigator.vibrate?.(10),u(!0)}),{dismiss:u,el:c}}var kn=null;function An(){if(kn)return kn;let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return n.addColorStop(0,`rgba(0,0,0,0.60)`),n.addColorStop(.55,`rgba(0,0,0,0.32)`),n.addColorStop(1,`rgba(0,0,0,0.0)`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,128/2,0,Math.PI*2),t.fill(),kn=new k(e),kn.colorSpace=E,kn}function jn({w:e=.6,d:t=.6,x:n=0,y:r=.002,z:i=0,opacity:a=.5,rotation:s=0}={}){let c=new o(new x(e,t),new l({map:An(),transparent:!0,opacity:a,depthWrite:!1,toneMapped:!1}));return c.rotation.x=-Math.PI/2,c.rotation.z=s,c.position.set(n,r,i),c.renderOrder=-1,c.raycast=()=>{},c}function Mn({yawLimit:e=80,pitchUp:t=32,pitchDown:n=20,sensitivity:r=.16,keySpeed:i=70,damp:a=9}={}){let o=Math.PI/180,s=(e,t,n)=>e<t?t:e>n?n:e,c=0,l=0,u=0,d=0;return{addDrag(i,a){u=s(u-i*r,-e,e),d=s(d-a*r,-n,t)},addKeys(r,{left:a,right:o,up:c,down:l}){let f=i*r;a&&(u=s(u+f,-e,e)),o&&(u=s(u-f,-e,e)),c&&(d=s(d+f,-n,t)),l&&(d=s(d-f,-n,t))},recenter(){u=0,d=0},update(e){let t=1-Math.exp(-a*e);c+=(u-c)*t,l+=(d-l)*t},get yaw(){return c*o},get pitch(){return l*o},get active(){return Math.abs(c)>.05||Math.abs(l)>.05}}}var Nn=null;function Pn(){if(Nn)return Nn;let e=document.createElement(`canvas`);e.width=e.height=256;let t=e.getContext(`2d`),n=t.createRadialGradient(256/2,256/2,256*.32,256/2,256/2,256*.72);return n.addColorStop(0,`rgba(0,0,0,0)`),n.addColorStop(1,`rgba(0,0,0,1)`),t.fillStyle=n,t.fillRect(0,0,256,256),Nn=new k(e),Nn.colorSpace=E,Nn}function Fn({strength:e=.55,dist:t=.5}={}){let n=new o(new x(1,1),new l({map:Pn(),transparent:!0,opacity:e,depthTest:!1,depthWrite:!1,toneMapped:!1}));n.renderOrder=9999,n.raycast=()=>{},n.frustumCulled=!1;let r=new A;return n.fit=e=>{e.getWorldDirection(r),n.position.copy(e.position).addScaledVector(r,t),n.quaternion.copy(e.quaternion);let i=2*Math.tan(m.degToRad(e.fov)*.5)*t*1.05;n.scale.set(i*e.aspect,i,1)},n}var In=``+new URL(`office-smooth-DEluvd7o.png`,import.meta.url).href,Ln=``+new URL(`office-charm-D7t90SkH.png`,import.meta.url).href;function Rn(){let e=document.createElement(`canvas`);e.width=e.height=256;let t=e.getContext(`2d`);t.fillStyle=`#6e4a2c`,t.fillRect(0,0,256,256);for(let e=0;e<150;e++){let e=Math.random()*256,n=.7+Math.random()*.7;t.strokeStyle=`rgba(${Math.round(110*n)},${Math.round(74*n)},${Math.round(44*n)},${.16+Math.random()*.28})`,t.lineWidth=.5+Math.random()*1.6,t.beginPath(),t.moveTo(e,0);for(let n=0;n<=256;n+=14)t.lineTo(e+Math.sin(n*.05+e)*3,n);t.stroke()}t.strokeStyle=`rgba(30,18,8,0.5)`,t.lineWidth=2;for(let e of[256*.34,256*.67])t.beginPath(),t.moveTo(0,e),t.lineTo(256,e),t.stroke();let n=new k(e);return n.colorSpace=E,n.wrapS=n.wrapT=w,n}function Q(e,t,n,r,{rough:i=.62,metal:a=0,x:s=0,y:c=0,z:l=0,emissive:u=null,emissiveIntensity:d=1,map:p=null,mapRepeat:m=null}={}){let h=p;p&&m&&(h=p.clone(),h.needsUpdate=!0,h.wrapS=h.wrapT=w,h.repeat.set(m[0],m[1]));let g=new o(new O(e,t,n),new f({color:h?`#ffffff`:r,roughness:i,metalness:a,...h?{map:h}:{},...u?{emissive:u,emissiveIntensity:d}:{}}));return g.position.set(s,c,l),g}function zn({tier:e=`corner`,layout:t=`straight-on`}={}){let n=new _,r=new c(43,1,.1,100),i=new A(0,1.62,4.35),s=new A(0,1.12,-1);r.position.copy(i),r.lookAt(s);let u=Mn({yawLimit:80,pitchUp:34,pitchDown:20}),d=new _e(0,0,0,`YXZ`),p=new z,h=new U;n.add(h);let g=new U,v=new U,y=new U,b=new U,S=new U;h.add(g,v,y,b,S);let w=[],T=`#4a3322`,D=`#3a2618`,te=`#5b3d27`,k=`#6e4a30`,M=`#5a5650`,N=Rn();g.add(Q(11,.2,11,`#3c2a1c`,{rough:.5,y:-.1,map:N,mapRepeat:[5,5]})),g.add(Q(11,.2,11,`#3a2a1d`,{rough:.9,y:3,map:N,mapRepeat:[4,4]}));for(let e of[-2.4,0,2.4])g.add(Q(.18,.16,7.4,D,{rough:.7,x:e,y:2.9,z:0,map:N,mapRepeat:[1,4]}));for(let e of[-2,.4])g.add(Q(7.4,.16,.18,D,{rough:.7,x:0,y:2.88,z:e,map:N,mapRepeat:[4,1]}));function ne(e){let t=new U;t.add(Q(.2,3.2,8,T,{rough:.7,x:e*3.6,y:1.5,z:0,map:N,mapRepeat:[3,1.4]}));let n=e*3.45;t.add(Q(.06,.22,8,D,{x:n,y:.13,z:0})),t.add(Q(.08,.16,8,D,{x:n,y:2.84,z:0})),t.add(Q(.05,.05,8,D,{x:n,y:1,z:0}));for(let e of[-2.6,-1.3,1.3,2.6])t.add(Q(.05,1.6,.06,D,{x:n,y:1.95,z:e}));for(let e of[-2.6,-1.3,1.3,2.6])t.add(Q(.05,.7,.06,D,{x:n,y:.6,z:e}));let r=new o(new x(1.5,1),new f({map:qn(e),roughness:.8}));r.position.set(e*3.49,1.7,.4),r.rotation.y=-e*Math.PI/2,t.add(Q(.06,1.18,1.68,`#2a1c10`,{x:e*3.52,y:1.7,z:.4}),r);let i=new o(new x(1,1.3),new f({map:qn(-e),roughness:.8}));i.position.set(e*3.49,1.78,-2),i.rotation.y=-e*Math.PI/2,t.add(Q(.06,1.46,1.16,`#2a1c10`,{x:e*3.52,y:1.78,z:-2}),i),t.add(Q(.12,.3,.16,`#2a1c10`,{x:e*3.4,y:2.2,z:2.2}));let a=new B(new P({map:Kn(),color:`#ffcf8a`,transparent:!0,opacity:.5,depthWrite:!1,blending:2}));return a.scale.set(.6,.75,1),a.position.set(e*3.32,2.34,2.2),a.raycast=()=>{},t.add(a),t}g.add(ne(-1),ne(1));let ie=new U;ie.add(Q(.3,1.9,1.5,te,{rough:.5,y:.95}));for(let e of[.4,.95,1.5])ie.add(Q(.3,.04,1.46,`#3a2c1e`,{y:e}));let F=[`#7a3a2a`,`#2a4a6a`,`#b08a3a`,`#3a5a3a`,`#6a2a4a`,`#8a5a2a`];for(let e of[.6,1.15,1.7])for(let t=0;t<7;t++)ie.add(Q(.18,.3,.11,F[(t+Math.round(e))%F.length],{x:.02,y:e-.06,z:-.6+t*.17}));ie.position.set(-3.34,0,-1.9),g.add(ie),g.add(jn({w:1,d:1.8,x:-3.2,y:.02,z:-1.9,opacity:.4}));let I=new U;I.add(Q(.5,.1,.5,`#4a3526`,{rough:.7,y:.45})),I.add(Q(.5,.55,.08,`#4a3526`,{rough:.7,y:.72,z:-.21}));for(let[e,t]of[[-.2,-.2],[.2,-.2],[-.2,.2],[.2,.2]])I.add(Q(.05,.45,.05,`#2a1c10`,{x:e,y:.22,z:t}));I.position.set(2.7,0,2.6),I.rotation.y=-.5,g.add(I),g.add(jn({w:.7,d:.7,x:2.7,y:.02,z:2.6,opacity:.42}));let ae=new x(3,2.5),oe=new x(3,2.5),ce=new l({color:`#ffffff`,toneMapped:!1}),le=new l({color:`#ffffff`,toneMapped:!1}),de=1.55,fe=new o(ae,ce);fe.position.set(-1.06,de,-2.64),fe.rotation.y=Math.PI/4;let V=new o(oe,le);V.position.set(1.06,de,-2.64),V.rotation.y=-Math.PI/4;let pe=new l({color:`#ffffff`,toneMapped:!1}),me=new o(new x(5.4,2.6),pe);me.position.set(0,de,-3.5500000000000003),me.visible=!1,y.add(fe,V,me);let he=new U;he.add(Q(.08,2.7,.08,D,{x:0,y:de,z:-2.2}));for(let[e,t,n]of[[-1.06,-2.64,Math.PI/4],[1.06,-2.64,-Math.PI/4]]){let r=new U;r.add(Q(3.05,.09,.09,D,{y:1.3})),r.add(Q(3.05,.09,.09,D,{y:-1.25})),r.add(Q(.09,2.6,.09,D,{x:-1.5})),r.position.set(e,de,t),r.rotation.y=n,he.add(r)}he.add(Q(5.4,.5,.3,te,{x:0,y:.25,z:-2.1500000000000004})),g.add(he);let H=new U;H.add(Q(11,3.2,.2,T,{rough:.7,x:0,y:1.5,z:-3.75,map:N,mapRepeat:[4,1.4]})),H.add(Q(5.8,.14,.12,D,{x:0,y:2.9000000000000004,z:-3.5})),H.add(Q(5.8,.14,.12,D,{x:0,y:de-1.35,z:-3.5})),H.add(Q(.14,2.84,.12,D,{x:-2.8,y:de,z:-3.5})),H.add(Q(.14,2.84,.12,D,{x:2.8,y:de,z:-3.5})),H.add(Q(.09,2.6,.09,D,{x:0,y:de,z:-3.49})),H.add(Q(5.4,.5,.3,te,{x:0,y:.25,z:-3.35}));let ge=new U;ge.add(Q(2.4,.9,.55,te,{rough:.42,y:.45,z:0})),ge.add(Q(2.46,.06,.58,k,{rough:.3,y:.91,z:0}));for(let e of[-.62,0,.62])ge.add(Q(.66,.72,.03,`#4a3120`,{x:e,y:.45,z:.285}));for(let e of[-.62,0,.62])ge.add(Q(.05,.04,.05,`#caa15a`,{x:e+.2,y:.45,z:.31,metal:.6}));let ve=[`#7a3a2a`,`#2a4a6a`,`#b08a3a`,`#3a5a3a`];for(let e=0;e<4;e++)ge.add(Q(.1,.26+e%2*.05,.2,ve[e],{x:-.95+e*.13,y:1.07,z:-.06}));ge.add(Q(.04,.34,.42,`#241a12`,{x:.7,y:1.12,z:-.02})),ge.position.set(-3.9,0,-3.25),H.add(ge),H.add(jn({w:2.8,d:.95,x:-3.9,y:.02,z:-3.25,opacity:.45}));for(let[e,t]of[[-3.55,-1],[3.55,1]]){let n=new U,r=new o(new x(.78,.98),new f({map:qn(t),roughness:.82}));r.position.z=.05,n.add(Q(.06,1.12,.92,`#241a10`,{}),r),n.position.set(e,1.45,-3.5700000000000003),H.add(n)}for(let e of[-3.55,3.55]){H.add(Q(.16,.32,.13,`#2a1c10`,{x:e,y:2.35,z:-3.5}));let t=new B(new P({map:Kn(),color:`#ffcf8a`,transparent:!0,opacity:.5,depthWrite:!1,blending:2}));t.scale.set(.55,.7,1),t.position.set(e,2.5,-3.42),t.raycast=()=>{},H.add(t)}H.visible=!1,g.add(H),g.add(Q(.4,.06,.4,`#1a130c`,{y:2.94,z:1.3}));let ye=new o(new j(.16,20),new l({color:`#ffe6b0`,toneMapped:!1}));ye.position.set(0,2.9,1.3),ye.rotation.x=Math.PI/2,g.add(ye);for(let[e,t]of[[-1.6,-1],[1.6,-1],[-1.6,-2.6],[1.6,-2.6],[0,-2.6]]){g.add(Q(.28,.05,.28,`#1a130c`,{y:2.95,x:e,z:t}));let n=new o(new j(.1,16),new l({color:`#ffe6b0`,toneMapped:!1}));n.position.set(e,2.915,t),n.rotation.x=Math.PI/2,n.raycast=()=>{},g.add(n)}g.add(Vn(w,{x:-3.46,y:2.15,z:.2,ry:Math.PI/2,face:`#efe2c8`,rim:`#2a1c10`})),g.add(Q(3.4,.03,2.4,`#3a1410`,{rough:.98,x:0,y:.012,z:1.95})),g.add(Q(3,.04,2,`#6e2a26`,{rough:.96,x:0,y:.02,z:1.95}));let be=new U;be.add(Q(.32,.32,.32,`#7a4a2a`,{rough:.8,y:.16}));for(let e=0;e<6;e++){let t=Q(.05,.55,.13,`#356a32`,{rough:.7,y:.32});t.geometry.translate(0,.27,0),t.rotation.z=(e/6-.5)*1.1,t.rotation.x=Math.sin(e*1.3)*.22,be.add(t)}be.position.set(2.7,0,.4),g.add(be),g.add(jn({w:.7,d:.7,x:2.7,y:.03,z:.4,opacity:.45})),v.add(Q(11,.2,11,`#403d38`,{rough:.85,y:-.1})),v.add(Q(11,.2,11,`#1c1a17`,{rough:.95,y:2.8})),v.add(Q(7,3,.2,M,{rough:.92,x:0,y:1.4,z:-2.9})),v.add(Q(.2,3,6,M,{rough:.92,x:-3.2,y:1.4,z:-.2})),v.add(Q(.2,3,6,M,{rough:.92,x:3.2,y:1.4,z:-.2}));for(let e of[-1.6,-.4]){let t=new o(new re(.07,.07,6,10),new f({color:`#6b6258`,roughness:.6,metalness:.4}));t.rotation.z=Math.PI/2,t.position.set(0,2.62,e),v.add(t)}let xe=new l({color:`#ffffff`,toneMapped:!1}),Se=new o(new x(1.9,1.2),xe);Se.position.set(0,1.5,-2.79),v.add(Se),v.add(Q(2.06,1.36,.06,`#241a12`,{x:0,y:1.5,z:-2.83})),v.add(Q(.04,.34,.04,`#1a1410`,{x:-.1,y:2.45,z:-.4}));let Ce=new o(new j(.1,16),new l({color:`#ffdb8a`,toneMapped:!1}));Ce.position.set(-.1,2.26,-.4),Ce.rotation.x=Math.PI/2,v.add(Ce);let we=new U;we.add(Q(1.3,.05,.32,`#3a2c1e`,{x:0,y:0,z:0}));let Te=[`#7a3a2a`,`#2a4a6a`,`#b08a3a`,`#3a5a3a`,`#6a2a4a`];for(let e=0;e<8;e++)we.add(Q(.12,.34,.24,Te[e%Te.length],{x:-.55+e*.14,y:.2,z:0}));we.position.set(-2.3,1.5,-2.66),v.add(we);let Ee=new U;Ee.add(Q(.34,.34,.34,`#7a4a2a`,{y:.17}));let De=new U;for(let e=0;e<6;e++){let t=Q(.05,.5,.14,`#3a7a3a`,{rough:.7});t.geometry.translate(0,.25,0),t.rotation.z=(e/6-.5)*1.2,t.rotation.x=Math.sin(e)*.25,De.add(t)}De.position.y=.34,Ee.add(De),Ee.position.set(2.45,0,-1.4),v.add(Ee),v.add(Vn(w,{x:1.9,y:2.1,z:-2.78,ry:0,face:`#d8d2c4`,rim:`#1a130c`}));let W=new U;W.add(Q(3.4,.12,1.5,k,{rough:.32,y:.86,z:1.5,map:N,mapRepeat:[3,1.4]})),W.add(Q(3.2,.78,1.36,te,{y:.46,z:1.5,map:N,mapRepeat:[3,1]}));for(let e of[.66,.4,.14])W.add(Q(.9,.2,.04,`#4a3120`,{x:1.05,y:e,z:2.2}));W.add(Q(.12,.04,.04,`#caa15a`,{x:1.05,y:.66,z:2.23,metal:.6}));let Oe=new o(new re(.05,.045,.1,16),new f({color:`#d8cbb4`,roughness:.6}));Oe.position.set(-.55,.97,1.95);let G=new o(new ue(.035,.012,8,14),new f({color:`#d8cbb4`,roughness:.6}));G.position.set(-.61,.97,1.95),G.rotation.y=Math.PI/2,W.add(Oe,G);let K=new B(new P({map:Kn(),color:`#fff4e0`,transparent:!0,opacity:0,depthWrite:!1,blending:2}));K.scale.set(.12,.18,1),K.position.set(-.55,1.05,1.95),K.raycast=()=>{},W.add(K),W.add(Q(.26,.03,.34,`#efe7d4`,{rough:.85,x:.5,y:.935,z:1.9})),h.add(W);let ke=new U;ke.add(Q(.06,.5,.06,`#2a1c10`,{x:-1.15,y:1.15,z:1.6}));let q=new o(new se(.22,.26,16,1,!0),new f({color:`#c2802e`,roughness:.5,side:2,emissive:`#3a2208`,emissiveIntensity:.6}));q.position.set(-1.15,1.42,1.6),ke.add(q);let Ae=new C(`#ffb15a`,7,7,1.8);Ae.position.set(-1.15,1.34,1.6),ke.add(Ae);let je=new B(new P({map:Kn(),color:`#ffcf8a`,transparent:!0,opacity:.55,depthWrite:!1,blending:2}));je.scale.set(.85,.85,1),je.position.set(-1.15,1.35,1.6),je.raycast=()=>{},ke.add(je),h.add(ke);let Me=new U;Me.add(Q(.62,.03,.42,`#1c1c20`,{y:.93,z:1.5,metal:.4,rough:.4}));let Ne=new o(new O(.62,.4,.025),new f({color:`#0a0c10`,emissive:`#2a4a6a`,emissiveIntensity:.7,roughness:.3}));Ne.position.set(0,1.14,1.31),Ne.rotation.x=-.32,Me.add(Ne),Me.userData.role=`laptop`,h.add(Me);let Pe=new U;Pe.add(Q(.26,.07,.34,`#15151a`,{x:1,y:.93,z:1.5}));let Fe=Q(.3,.06,.08,`#101015`,{x:1,y:1,z:1.34,emissive:`#234a6a`,emissiveIntensity:.4});Pe.add(Fe),Pe.userData.role=`phone`,h.add(Pe);let Ie=new a(`#8a6a42`,`#1c130a`,.78);n.add(Ie);let Le=new L(`#ffd9a0`,9,9,.7,.5,1.2);Le.position.set(0,2.95,1.3),Le.target.position.set(0,.86,1.5),n.add(Le,Le.target);let Re=Hn(!1),ze=Hn(!0),Be=.62,Ve=1.32,He=1.22,Ue=1.78,We=new B(new P({map:Re,transparent:!0,depthWrite:!1}));We.scale.set(Be,Be,1),We.position.set(Ve,He,Ue),We.userData.role=`cat`,h.add(We);let Ge=new B(new P({map:Wn(),transparent:!0,depthWrite:!1,opacity:0}));Ge.scale.set(.3,.3,1),Ge.raycast=()=>{},h.add(Ge);let J=0;function Y(){J=1.3}let Ke=.62,qe=.42,Je=.34,X=new U;X.position.set(-.78,1.06,1.95),X.add(Q(Ke,.05,Je,`#3a3026`,{y:-.19}));let Ye=new o(new O(Ke-.04,qe-.08,Je-.04),new f({color:`#1f9fc0`,transparent:!0,opacity:.26,roughness:.1,emissive:`#0a3a4a`,emissiveIntensity:.4,depthWrite:!1}));Ye.position.y=.02,X.add(Ye);for(let e of[-1,1])for(let t of[-1,1])X.add(Q(.03,qe,.03,`#20262c`,{x:e*(Ke/2-.015),z:t*(Je/2-.015),metal:.5}));let Xe=new o(new O(Ke,qe,Je),new l({visible:!1}));Xe.userData.role=`tank`,X.add(Xe);let Ze=new C(`#5fd8ff`,0,3,2);X.add(Ze);let Qe=[Gn(`#e8a23c`),Gn(`#d85a6a`),Gn(`#6cc0e0`)],$e=[],et=qe/2-.12;for(let e=0;e<3;e++){let t=new B(new P({map:Qe[e],transparent:!0,depthWrite:!1})),n=.15-e*.015;t.userData={sz:n,sp:.6+e*.22,ph:e*2.1,ax:.21*(.7+.1*e),ay:et,az:.09000000000000001,prevx:0},t.scale.set(n,n,1),$e.push(t),X.add(t)}let tt=Kn(),nt=[];for(let e=0;e<5;e++){let t=new B(new P({map:tt,color:`#cfeffb`,transparent:!0,opacity:.5,depthWrite:!1}));t.userData={ph:e/5,sp:.16+Math.random()*.06,x:-.1+e%3*.07},t.scale.setScalar(.03+e%2*.015),t.raycast=()=>{},nt.push(t),X.add(t)}let rt=new B(new P({map:tt,color:`#c8a24a`,transparent:!0,opacity:0,depthWrite:!1}));rt.scale.setScalar(.04),rt.raycast=()=>{},X.add(rt);let it=0;function at(){it=3,rt.position.set(-.05,et,0),rt.material.opacity=1}h.add(X);let ot=new U;for(let e=0;e<8;e++){let t=new B(new P({map:tt,color:`#ffd9a0`,transparent:!0,opacity:0,depthWrite:!1,blending:2}));t.scale.setScalar(.018),t.userData={ph:e*.9,sp:.1+e%3*.04,r:.1+e%4*.03},t.raycast=()=>{},ot.add(t)}ot.position.set(-1.15,1.2,1.6),h.add(ot);let st=new U,ct=.925;st.add(jn({w:4,d:2,x:0,y:.045,z:1.55,opacity:.5})),st.add(jn({w:.95,d:.62,x:0,y:ct,z:1.42,opacity:.42})),st.add(jn({w:.3,d:.3,x:-.55,y:ct,z:1.95,opacity:.4})),st.add(jn({w:.42,d:.46,x:.5,y:ct,z:1.9,opacity:.35})),st.add(jn({w:.42,d:.46,x:1,y:ct,z:1.5,opacity:.42})),st.add(jn({w:.7,d:.42,x:-.78,y:ct,z:1.95,opacity:.42})),st.add(jn({w:.55,d:.4,x:1.32,y:ct,z:1.78,opacity:.4})),st.add(jn({w:.34,d:.34,x:-1.15,y:ct,z:1.6,opacity:.35})),h.add(st),[W,ke,Me,Pe,We,X,ot,st].forEach(e=>b.add(e));function lt(e,t,n,r,i,a,s){let c=new o(new O(t,n,r),new l({visible:!1}));c.position.set(i,a,s),c.userData.role=e,S.add(c)}lt(`laptop`,.95,.6,.7,0,1.05,1.4),lt(`phone`,.5,.4,.5,1,.98,1.42),lt(`cat`,.62,.74,.5,Ve,He,Ue);let ut=Bn(),dt={smooth:new ee().load(In),charm:new ee().load(Ln)};for(let e of[`smooth`,`charm`]){let t=dt[e];t.colorSpace=E,t.repeat.set(1,.86),t.offset.set(0,.14),t.needsUpdate=!0}let ft=new o(new x(1,1),new l({map:dt.smooth,toneMapped:!1}));ft.position.set(0,1.45,-5),ft.visible=!1,ft.raycast=()=>{},n.add(ft);let pt=Fn({strength:.5});n.add(pt);let mt=`3d`,ht=`painted`;function gt(){let e=Ot===`corner`,t=mt!==`3d`,n=t&&ht===`painted`;g.visible=e&&!t,v.visible=!e&&!t,y.visible=t||e,ft.visible=t,b.visible=!n}function _t(e){return mt=e===`smooth`||e===`charm`?e:`3d`,mt!==`3d`&&(ft.material.map=dt[mt],ft.material.needsUpdate=!0),gt(),mt}function vt(e){return ht=e===`3d`?`3d`:`painted`,gt(),ht}let yt=Ae.intensity,bt=Ne.material.emissiveIntensity,xt=new R;function St(e,t,n){let a=n?n.windowGlow:0,o=a>.55;We.material.map=o?ze:Re,J>0&&(J=Math.max(0,J-e));let c=J>0?Math.sin((1.3-J)/1.3*Math.PI):0,l=o?.012*Math.sin(t*1.2):.03*Math.sin(t*2.4);We.scale.set(Be,Be*(1+l+.12*c),1),We.position.y=He+.06*c,Ge.material.opacity=c,Ge.position.set(Ve,1.72+.5*(1-J/1.3),Ue),Ge.scale.setScalar(.22+.1*c),it>0&&(it=Math.max(0,it-e),rt.position.y=Math.max(-.09,rt.position.y-e*.06),rt.material.opacity=it>.3?1:it/.3);for(let e of $e){let n=e.userData,r=Math.sin(t*n.sp+n.ph)*n.ax,i=Math.sin(t*n.sp*.8+n.ph*1.7)*n.ay*.7,a=Math.cos(t*n.sp*.6+n.ph)*n.az,o=it>0?rt.position.x:r,s=it>0?rt.position.y:i,c=it>0?rt.position.z:a,l=it>0?.05:.1;e.position.x+=(o-e.position.x)*l,e.position.y+=(s-e.position.y)*l,e.position.z+=(c-e.position.z)*l,e.scale.x=(e.position.x>=n.prevx?1:-1)*n.sz,n.prevx=e.position.x}for(let e of nt){let n=(t*e.userData.sp+e.userData.ph)%1;e.position.set(e.userData.x+Math.sin(t*2+e.userData.ph*9)*.015,-.09+2*et*n,.02),e.material.opacity=.5*Math.sin(n*Math.PI)}Ze.intensity=2.6*a,Ye.material.emissiveIntensity=.4+.9*a,Ae.intensity=yt*(.97+.03*Math.sin(t*7)*Math.sin(t*2.3)),Ne.material.emissiveIntensity=bt*(.85+.15*Math.sin(t*3.1+1)),Fe.material.emissiveIntensity=.4*(.65+.35*Math.sin(t*2.2)),xt.setRGB(1,.85,.62),ot.children.forEach((e,n)=>{let r=e.userData,i=(t*r.sp+r.ph)%1;e.position.set(Math.cos(t*.5+r.ph*5)*r.r,-.15+i*.45,Math.sin(t*.4+r.ph*5)*r.r),e.material.opacity=(.1+.18*a)*Math.sin(i*Math.PI)});let f=t*.4%1;K.position.y=1.04+f*.22,K.position.x=-.55+Math.sin(t*1.5)*.02,K.material.opacity=.26*Math.sin(f*Math.PI),K.scale.set(.1+f*.08,.16+f*.12,1),De.rotation.z=Math.sin(t*.8)*.05,De.rotation.x=Math.sin(t*.6+1)*.04;let h=n?n.t%1:0;for(let e of w)e.rotation.z=-h*Math.PI*2;if(ut.update(e),ft.visible){let e=r.position.z-ft.position.z,t=2*Math.tan(m.degToRad(r.fov)*.5)*e*1.18;ft.scale.set(t*r.aspect,t,1);let n=.55+.45*(1-a);ft.material.color.setRGB(n,n*.97,n*.92)}r.position.set(i.x+Math.sin(t*.5)*.04,i.y+Math.sin(t*.7)*.02,i.z),r.lookAt(s),u.update(e),d.set(u.pitch,u.yaw,0,`YXZ`),r.quaternion.multiply(p.setFromEuler(d)),pt.fit(r)}function Ct(e,t=e){ce.map=e,le.map=t,ce.needsUpdate=!0,le.needsUpdate=!0}function wt(e){pe.map=e,pe.needsUpdate=!0}let Tt=`corner`;function Et(e){Tt=e===`straight-on`?`straight-on`:`corner`;let t=Tt===`corner`;return fe.visible=V.visible=t,me.visible=!t,he.visible=t,H.visible=!t,Tt}function Dt(e){xe.map=e,xe.needsUpdate=!0}let Ot=e;function Z(e){Ot=e===`basement`?`basement`:`corner`;let t=Ot===`corner`;return gt(),Le.intensity=t?9:3.2,Ie.intensity=t?.78:.82,Ie.color.set(t?`#6a5238`:`#7a5a34`),Ot}return Z(Ot),Et(t),{scene:n,camera:r,update:St,setCityTexture:Ct,setStraightCityTexture:wt,setVignetteTexture:Dt,setFitout:Z,setSkin:_t,setProps:vt,setLayout:Et,petCat:Y,feedFish:at,look:u,vignette:ut,get interactables(){return mt!==`3d`&&ht===`painted`?S.children:[Me,Pe,We,Xe]},get tier(){return Ot},get skin(){return mt},get props(){return ht},get layout(){return Tt}}}function Bn(){let e=new _;e.background=new R(`#7fb0dd`);let t=new n(-1.4,1.4,.9,-.9,0,10);t.position.set(0,0,5);let r=(e,t={})=>new l({color:e,toneMapped:!1,...t}),i=(e,t,n,i,a,s,c)=>{let l=new o(new x(e,t),r(s,c));return l.position.set(n,i,a),l};e.add(i(3.2,.9,.5,-.95,1,`#2a4a30`)),e.add(i(3.2,.7,-.7,-1.05,2,`#1d3724`)),e.add(i(.06,.3,-.95,-.55,3,`#3a2a1a`));let a=new o(new j(.22,18),r(`#234a2a`));a.position.set(-.95,-.32,3),e.add(a),e.add(i(.04,.55,.9,-.55,3,`#20242a`));let s=new o(new j(.1,16),r(`#ffd98a`,{transparent:!0,opacity:0}));s.position.set(.9,-.26,3.1),e.add(s);let c=new o(new j(.16,24),r(`#fff4d8`));e.add(c);let u=[];for(let[t,n]of[[-1,.5],[-.6,.7],[.2,.6],[.7,.72],[1.05,.45],[-.2,.78],[.45,.4]]){let i=new o(new j(.015,8),r(`#ffffff`,{transparent:!0,opacity:0}));i.position.set(t,n,.5),u.push(i),e.add(i)}let d=new R(`#141d33`),f=new R(`#7fb6e0`),p=new R(`#d6824a`),h=new R(`#fff0cc`),g=new R(`#cdd8ef`),v=.34;function y(t){v=(v+t*.04)%1;let n=v*Math.PI*2,r=-Math.cos(n);c.position.set(Math.sin(n)*1.15,r*.66+.06,0);let i=m.smoothstep(r,-.18,.5),a=m.smoothstep(.32,0,Math.abs(r));e.background.copy(d).lerp(f,i).lerp(p,a*.45),c.material.color.copy(r>0?h:g),s.material.opacity=1-i;let o=(1-i)*.85;for(let e of u)e.material.opacity=o}return{scene:e,camera:t,update:y}}function Vn(e,{x:t,y:n,z:r,ry:i=0,face:a=`#efe2c8`,rim:s=`#2a1c10`}){let c=new U,l=new o(new j(.2,28),new f({color:s,roughness:.6})),u=new o(new j(.17,28),new f({color:a,roughness:.7}));u.position.z=.01;let d=new o(new x(.018,.14),new f({color:`#1a130c`,roughness:.5}));return d.geometry.translate(0,.05,0),d.position.z=.02,e.push(d),c.add(l,u,d),c.position.set(t,n,r),c.rotation.y=i,c}function Hn(e){let t=document.createElement(`canvas`);t.width=t.height=128;let n=t.getContext(`2d`),r=`#e08a3c`,i=`#b96a26`,a=`#3a2410`;if(n.lineJoin=`round`,e){n.fillStyle=r,n.beginPath(),n.ellipse(64,78,44,26,0,0,7),n.fill(),n.fillStyle=i,n.beginPath(),n.ellipse(64,86,44,16,0,0,7),n.fill(),n.fillStyle=r,n.beginPath(),n.arc(36,70,20,0,7),n.fill(),n.fillStyle=r,Un(n,24,56,34,44,42,58),Un(n,40,54,50,44,54,60),n.strokeStyle=i,n.lineWidth=7,n.lineCap=`round`,n.beginPath(),n.moveTo(100,70),n.quadraticCurveTo(112,90,88,96),n.stroke(),n.strokeStyle=a,n.lineWidth=2.5,n.beginPath(),n.arc(30,70,5,.1,Math.PI-.1),n.stroke(),n.strokeStyle=i,n.lineWidth=3;for(let e of[60,74,88])n.beginPath(),n.moveTo(e,58),n.lineTo(e,70),n.stroke()}else{n.fillStyle=r,n.beginPath(),n.ellipse(64,86,30,34,0,0,7),n.fill(),n.fillStyle=`#f3c98a`,n.beginPath(),n.ellipse(64,92,14,22,0,0,7),n.fill(),n.strokeStyle=i,n.lineWidth=8,n.lineCap=`round`,n.beginPath(),n.moveTo(92,100),n.quadraticCurveTo(116,86,104,60),n.stroke(),n.fillStyle=r,n.beginPath(),n.arc(64,48,24,0,7),n.fill(),n.fillStyle=r,Un(n,44,34,50,18,60,34),Un(n,84,34,78,18,68,34),n.fillStyle=`#f0b0c0`,Un(n,47,30,50,22,56,32),Un(n,81,30,78,22,72,32),n.fillStyle=a,n.beginPath(),n.arc(55,47,3.4,0,7),n.arc(73,47,3.4,0,7),n.fill(),n.fillStyle=`#e06a7a`,Un(n,61,54,67,54,64,58),n.strokeStyle=a,n.lineWidth=1.6;for(let e of[-2,3])n.beginPath(),n.moveTo(50,55+e),n.lineTo(34,53+e),n.moveTo(78,55+e),n.lineTo(94,53+e),n.stroke();n.strokeStyle=i,n.lineWidth=3;for(let e of[78,90,102])n.beginPath(),n.moveTo(50,e),n.lineTo(78,e),n.stroke()}let o=new k(t);return o.colorSpace=E,o}function Un(e,t,n,r,i,a,o){e.beginPath(),e.moveTo(t,n),e.lineTo(r,i),e.lineTo(a,o),e.closePath(),e.fill()}function Wn(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`);t.fillStyle=`#ff5a8a`,t.beginPath(),t.moveTo(32,52),t.bezierCurveTo(6,32,14,10,32,24),t.bezierCurveTo(50,10,58,32,32,52),t.fill();let n=new k(e);return n.colorSpace=E,n}function Gn(e){let t=document.createElement(`canvas`);t.width=t.height=64;let n=t.getContext(`2d`);n.fillStyle=e,n.beginPath(),n.ellipse(30,32,18,11,0,0,7),n.fill(),n.beginPath(),n.moveTo(46,32),n.lineTo(60,22),n.lineTo(60,42),n.closePath(),n.fill(),n.fillStyle=`rgba(255,255,255,0.35)`,n.beginPath(),n.ellipse(28,36,12,5,0,0,7),n.fill(),n.fillStyle=`#15212a`,n.beginPath(),n.arc(20,30,2.6,0,7),n.fill();let r=new k(t);return r.colorSpace=E,r}function Kn(){let e=document.createElement(`canvas`);e.width=e.height=32;let t=e.getContext(`2d`),n=t.createRadialGradient(16,16,0,16,16,16);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.6,`rgba(255,255,255,0.7)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.beginPath(),t.arc(16,16,16,0,7),t.fill();let r=new k(e);return r.colorSpace=E,r}function qn(e){let t=document.createElement(`canvas`);t.width=t.height=256;let n=t.getContext(`2d`),r=n.createLinearGradient(0,0,256,256);e<0?(r.addColorStop(0,`#6a3b1c`),r.addColorStop(1,`#caa15a`)):(r.addColorStop(0,`#3a4a6a`),r.addColorStop(1,`#a86a3a`)),n.fillStyle=r,n.fillRect(0,0,256,256),n.globalAlpha=.5;for(let e=0;e<5;e++)n.fillStyle=e%2?`#2a1c10`:`#e0c080`,n.fillRect(30+e*36,40+e%3*30,26,150);let i=new k(t);return i.colorSpace=E,i}var{Timer:Jn}=de,Yn=new URLSearchParams(window.location.search),Xn=Yn.get(`demo`)===`1`||Yn.has(`capture`);window.__demo=Xn;var Zn=(Yn.get(`city`)?Number(Yn.get(`city`)):0)||Math.random()*1e9|0,Qn=0,$n=wn({demo:Xn,citySeed:Zn,profileIndex:Qn}),{renderer:er,rig:tr,sunRig:nr,city:rr,cityLife:ir,waterMaterial:ar,fitShadowFrustum:or,landmarkFactory:sr,renderCityBeautyTo:cr}=$n,$=zn({tier:`corner`});typeof window<`u`&&(window.__office=$),$.camera.aspect=window.innerWidth/window.innerHeight,$.camera.updateProjectionMatrix();var lr=!0;window.__shadows=lr,window.__scene=`office`;var ur={minFilter:F,magFilter:F,depthBuffer:!0,stencilBuffer:!1},dr=new A(2.2,3.4,11.5),fr=new A(0,2,0).sub(dr),pr=new A(0,1,0);function mr(e){let t=new c(80,384/320,.1,100);t.position.copy(dr);let n=fr.clone().applyAxisAngle(pr,m.degToRad(e));return t.lookAt(dr.clone().add(n)),t}var hr=mr(45),gr=mr(-45),_r=new oe(384,320,ur),vr=new oe(384,320,ur);$.setCityTexture(_r.texture,vr.texture);var yr=new c(52,540/320,.1,100);yr.position.copy(dr),yr.lookAt(dr.clone().add(fr));var br=new oe(540,320,ur);$.setStraightCityTexture(br.texture);var xr=0,Sr=3,Cr=new oe(512,320,{minFilter:F,magFilter:F,depthBuffer:!0,stencilBuffer:!1});$.setVignetteTexture(Cr.texture);var wr=!1,Tr=(()=>{if(typeof document>`u`)return{showLap(){},toast(){},flash(){}};let e=document.createElement(`style`);e.textContent=`
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
    </div></div>`;let n=document.createElement(`div`);n.className=`otoast`;let r=document.createElement(`div`);r.className=`oflash`,document.body.append(t,n,r),t.querySelector(`.lap-x`).addEventListener(`click`,()=>Dr()),t.addEventListener(`click`,e=>{e.target===t&&Dr()}),t.addEventListener(`click`,e=>{e.target.closest(`button`)&&navigator.vibrate?.(10)});let i=0;return{showLap(e){t.classList.toggle(`on`,e)},toast(e){n.textContent=e,n.classList.add(`on`),clearTimeout(i),i=setTimeout(()=>n.classList.remove(`on`),1400)},flash(){r.style.transition=`none`,r.style.opacity=`0.85`,requestAnimationFrame(()=>{r.style.transition=`opacity .55s`,r.style.opacity=`0`})}}})();function Er(){wr=!0,Tr.showLap(!0)}function Dr(){wr=!1,Tr.showLap(!1)}function Or(){Qn=(Qn+1)%Je.length,Tr.flash(),rr.generate(Zn,Qn),ar.uniforms.uVecWater.value.set(rr.waterColor),ir.setProfile(rr.state.profile),or(),Tr.toast(`✈  `+rr.state.profile.name),window.__profile=rr.state.profile.key}function kr(e){let t=$.setFitout(e);return Tr.toast(t===`basement`?`🏚  Basement office`:`🏙  Corner office`),window.__tier=t,t}function Ar(){return kr($.tier===`corner`?`basement`:`corner`)}window.__tier=$.tier;var jr=[`3d`,`smooth`,`charm`],Mr={"3d":`🧊  Stylized 3D office`,smooth:`🖼  Smooth diffusion skin`,charm:`🕹  Charm diffusion skin`};function Nr(e){let t=$.setSkin(e);return window.__officeSkin=t,Tr.toast(Mr[t]),t}function Pr(){return Nr(jr[(jr.indexOf($.skin)+1)%jr.length])}window.__officeSkin=$.skin;var Fr={painted:`🎨  Painted props (cohesive)`,"3d":`🧊  Live 3D props (animated)`};function Ir(e){let t=$.setProps(e);return window.__officeProps=t,$.skin!==`3d`&&Tr.toast(Fr[t]),t}function Lr(){return Ir($.props===`painted`?`3d`:`painted`)}window.__officeProps=$.props;var Rr={corner:`🏙  Corner window`,"straight-on":`🖼  Straight-on window`};function zr(e){let t=$.setLayout(e);return window.__officeLayout=t,Tr.toast(Rr[t]),t}function Br(){return zr($.layout===`corner`?`straight-on`:`corner`)}window.__officeLayout=$.layout;var Vr=new T,Hr=new V,Ur=(e,t)=>{Hr.x=e/window.innerWidth*2-1,Hr.y=-(t/window.innerHeight)*2+1};function Wr(){Vr.setFromCamera(Hr,$.camera);let e=Vr.intersectObjects($.interactables,!0)[0];if(!e)return null;let t=e.object;for(;t&&!t.userData.role;)t=t.parent;return t?t.userData.role:null}function Gr(e){e===`laptop`?Er():e===`phone`?Or():e===`cat`?$.petCat():e===`tank`&&$.feedFish()}var Kr=6,qr=0,Jr=0,Yr=0,Xr=0,Zr=0,Qr=!1,$r=!1;er.domElement.style.cursor=`grab`,er.domElement.addEventListener(`mousedown`,e=>{Qr=!0,$r=!1,qr=Xr=e.clientX,Jr=Zr=e.clientY,Yr=performance.now()}),window.addEventListener(`mousemove`,e=>{Qr?(!$r&&Math.hypot(e.clientX-qr,e.clientY-Jr)>Kr&&($r=!0),$r&&($.look.addDrag(e.clientX-Xr,e.clientY-Zr),er.domElement.style.cursor=`grabbing`),Xr=e.clientX,Zr=e.clientY):(Ur(e.clientX,e.clientY),er.domElement.style.cursor=Wr()?`pointer`:`grab`)}),window.addEventListener(`mouseup`,e=>{if(Qr&&!$r&&!wr){Ur(e.clientX,e.clientY);let t=Wr();t&&Gr(t)}Qr=!1,$r=!1,er.domElement.style.cursor=`grab`});var ei=!1;er.domElement.addEventListener(`touchstart`,e=>{e.touches.length===1&&(qr=Xr=e.touches[0].clientX,Jr=Zr=e.touches[0].clientY,Yr=performance.now(),ei=!1)},{passive:!0}),er.domElement.addEventListener(`touchmove`,e=>{if(e.touches.length!==1)return;let t=e.touches[0].clientX,n=e.touches[0].clientY;!ei&&Math.hypot(t-qr,n-Jr)>8&&(ei=!0),ei&&$.look.addDrag(t-Xr,n-Zr),Xr=t,Zr=n},{passive:!0}),window.addEventListener(`touchend`,e=>{if(!ei&&performance.now()-Yr<350&&(!e.touches||e.touches.length===0)&&!wr){let e=Wr();e&&Gr(e)}ei=!1});var ti={left:!1,right:!1,up:!1,down:!1},ni={ArrowLeft:`left`,ArrowRight:`right`,ArrowUp:`up`,ArrowDown:`down`};window.addEventListener(`keydown`,e=>{if(ni[e.key]){ti[ni[e.key]]=!0,e.preventDefault();return}e.key===`Escape`&&(wr?Dr():$.look.recenter()),(e.key===`f`||e.key===`F`)&&Ar(),(e.key===`j`||e.key===`J`)&&Pr(),(e.key===`u`||e.key===`U`)&&Lr(),(e.key===`t`||e.key===`T`)&&nr.cyclePreset(),(e.key===`h`||e.key===`H`)&&(lr=!lr,window.__shadows=lr),(e.key===`w`||e.key===`W`)&&Br()}),window.addEventListener(`keyup`,e=>{ni[e.key]&&(ti[ni[e.key]]=!1)}),sr.whenReady.then(()=>{rr.generate(Zn,Qn),or(),window.__cityReady=!0}),Yn.get(`office`)===`basement`&&kr(`basement`);var ri=Yn.get(`officeskin`);[`3d`,`smooth`,`charm`].includes(ri)&&Nr(ri);var ii=Yn.get(`officeprops`);[`painted`,`3d`].includes(ii)&&Ir(ii);var ai=Yn.get(`officelayout`);[`corner`,`straight-on`].includes(ai)&&zr(ai);var oi=new Jn;oi.connect(document);function si(){oi.update();let e=Math.min(oi.getDelta(),.1);tr.update(e),$n.updateWorld(e,oi.getElapsed(),{shadowsOn:lr,seasonTarget:0}),$.look.addKeys(e,ti),$.update(e,oi.getElapsed(),nr),window.__lookYaw=$.look.yaw,window.__lookPitch=$.look.pitch,$.tier===`basement`?(er.setRenderTarget(Cr),er.render($.vignette.scene,$.vignette.camera)):xr%Sr===0&&($.layout===`straight-on`?cr(yr,br):(cr(hr,_r),cr(gr,vr))),xr++,er.setRenderTarget(null),er.render($.scene,$.camera),requestAnimationFrame(si)}si(),On({key:`office`,title:`The Office`,tips:[`Drag to look around the office (or use the arrow keys)`,`Click / tap the LAPTOP to open the game panel`,`Tap the PHONE to travel to another city · pet the CAT · feed the FISH`,`Esc exits · F fitout · J skin · U props · W window · T time`]}),window.addEventListener(`resize`,()=>{$n.resize(),$.camera.aspect=window.innerWidth/window.innerHeight,$.camera.updateProjectionMatrix()});