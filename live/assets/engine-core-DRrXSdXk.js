import{A as e,B as t,D as n,E as r,G as i,H as a,I as o,J as s,K as c,L as l,M as u,N as d,O as f,P as p,Q as m,R as h,T as g,U as _,V as v,W as y,X as b,Y as x,_ as S,b as C,bt as w,c as T,ct as E,d as D,dt as O,et as ee,f as k,g as A,gt as j,i as te,j as ne,k as re,l as ie,lt as M,m as ae,mt as N,n as P,nt as F,o as oe,p as se,pt as I,q as ce,r as le,rt as ue,s as L,st as de,t as fe,tt as pe,u as R,ut as me,v as he,vt as z,w as ge,x as _e,y as ve,yt as B,z as ye}from"./three-xswymbn-.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var be=Math.atan(1/Math.SQRT2),xe=Math.atan(.5),V=Math.PI/4,H={PERSPECTIVE:4,ISOMETRIC:5,DIMETRIC:6},Se=.12,U=1.45,Ce=4,W=40,G=1.5,we=16,Te=6,Ee=22,De=3.5,Oe=11,ke=(e,t,n)=>e+(t-e)*(1-Math.exp(-8*n)),Ae=(e,t)=>e+Math.PI*2*Math.round((t-e)/(Math.PI*2));function je({aspect:e,fov:n=48,near:r=.1,far:i=100,target:a=new B(0,.8,0),azimuth:o=V,elevation:c=.52,distance:l=12,zoom:u=5.5}={}){let d=new b(n,e,r,i),f=new s(-1,1,1,-1,r,i),p=H.PERSPECTIVE,m=e,h={azimuth:o,elevation:c,distance:l,zoom:u,target:a.clone()},g={azimuth:o,elevation:c,distance:l,zoom:u,target:a.clone()},_=!1,v=null,y=new B,x=()=>p===H.PERSPECTIVE?d:f;function S(e){e!==p&&(p=e,p===H.ISOMETRIC||p===H.DIMETRIC?(h.elevation=p===H.ISOMETRIC?be:xe,h.azimuth=Ae(V,g.azimuth),_=!0):_=!1)}function C(e,n){h.azimuth+=e,_||(h.elevation=t.clamp(h.elevation+n,Se,U))}function w(e){p===H.PERSPECTIVE?h.distance=t.clamp(h.distance*e,Ce,W):h.zoom=t.clamp(h.zoom*e,G,we)}function T(e,t){let n=h.azimuth,r=p===H.PERSPECTIVE?h.distance*.04:h.zoom*.08,i=new B(Math.cos(n),0,-Math.sin(n)),a=new B(-Math.sin(n),0,-Math.cos(n));h.target.addScaledVector(i,e*r),h.target.addScaledVector(a,t*r)}function E(e,t){m=e/t,d.aspect=m,d.updateProjectionMatrix()}function D(e){v&&(v(y),h.target.copy(y)),g.azimuth=ke(g.azimuth,h.azimuth,e),g.elevation=ke(g.elevation,h.elevation,e),g.distance=ke(g.distance,h.distance,e),g.zoom=ke(g.zoom,h.zoom,e),g.target.x=ke(g.target.x,h.target.x,e),g.target.y=ke(g.target.y,h.target.y,e),g.target.z=ke(g.target.z,h.target.z,e);let t=Math.cos(g.elevation),n=Math.sin(g.elevation),r=Math.cos(g.azimuth),i=Math.sin(g.azimuth),a=x();if(a.position.set(g.target.x+g.distance*t*i,g.target.y+g.distance*n,g.target.z+g.distance*t*r),a.lookAt(g.target),a.isOrthographicCamera){let e=g.zoom,t=e*m;a.left=-t,a.right=t,a.top=e,a.bottom=-e,a.updateProjectionMatrix()}}function O(e,t,n,r=!1){h.target.set(e,t,n),r&&g.target.copy(h.target)}function ee(e,n=!1){h.zoom=t.clamp(e,G,we),n&&(g.zoom=h.zoom)}function k(e,{frame:n,snap:r=!1}={}){v=e,r&&(v(y),h.target.copy(y),g.target.copy(y)),n!=null&&(p===H.PERSPECTIVE?h.distance=t.clamp(n,Ce,W):h.zoom=t.clamp(n,G,we))}function A(){v=null}return{get camera(){return x()},get mode(){return p},get azimuth(){return g.azimuth},get following(){return!!v},setTarget:O,setZoom:ee,setFollow:k,clearFollow:A,get styleT(){return p===H.PERSPECTIVE?t.clamp((g.distance-Te)/(Ee-Te),0,1):t.clamp((g.zoom-De)/(Oe-De),0,1)},setMode:S,orbit:C,zoomBy:w,pan:T,setViewport:E,update:D}}var Me={value:0},Ne=new A(`#ffffff`),Pe={value:0},Fe={value:0},Ie={value:0},Le=new z,Re={value:0},ze={value:0},K=`
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
`;function Be(e){e.uniforms.uVector=Me,e.uniforms.uVecTint={value:Ne},e.uniforms.uVecShadow=Pe,e.uniforms.uSnow=Fe,e.uniforms.uCloud=Ie,e.uniforms.uCloudOff={value:Le},e.uniforms.uFogCharm=Re}function Ve(e){return e.replace(`#include <fog_fragment>`,`
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
#include <shadowmask_pars_fragment>`)}var We=`col *= mix(1.0, getShadowMask(), uVecShadow);`;function Ge(e,{color:t,id:n,windowGlow:r,winColors:i=[`#ffb852`,`#8cd9ff`],litFrac:a=.55}={}){let o=[0,1,2].map(e=>new A(i[e]??i[i.length-1]));return e.customProgramCacheKey=()=>`lgr-vec-tower`,e.onBeforeCompile=e=>{Be(e),e.uniforms.uWindowGlow=r,e.uniforms.uWinId={value:n},e.uniforms.uVecColor={value:new A(t)},e.uniforms.uWinA={value:o[0]},e.uniforms.uWinB={value:o[1]},e.uniforms.uWinC={value:o[2]},e.uniforms.uWinLit={value:a},e.vertexShader=He(e.vertexShader),e.fragmentShader=Ve(Ue(e.fragmentShader.replace(`#include <common>`,`#include <common>
        uniform float uWindowGlow;
        uniform float uWinId;
        uniform vec3  uVecColor;
        uniform vec3  uWinA; uniform vec3 uWinB; uniform vec3 uWinC;
        uniform float uWinLit;
        ${K}
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
        }`)))},e}function q(e,{color:t=null,glow:n=null,glowDay:r=0,glowNight:i=1,windowGlow:a=null,season:o=!1}={}){let s=t===null,c=n!==null&&a!==null;return e.customProgramCacheKey=()=>`lgr-vec|`+(s?`d`:`c`)+(c?`g`:``)+(o?`s`:``),e.onBeforeCompile=e=>{Be(e),s||(e.uniforms.uVecColor={value:new A(t)}),c&&(e.uniforms.uGlow={value:new A(n)},e.uniforms.uGlowDay={value:r},e.uniforms.uGlowNight={value:i},e.uniforms.uWindowGlow=a),o&&(e.uniforms.uSeason=ze),e.vertexShader=He(e.vertexShader);let l=s?`diffuseColor.rgb`:`uVecColor`,u=o?`seasonShift(${l})`:l,d=(s?``:`uniform vec3 uVecColor;
`)+(c?`uniform vec3 uGlow; uniform float uGlowDay; uniform float uGlowNight; uniform float uWindowGlow;
`:``)+(o?`uniform float uSeason;
vec3 seasonShift(vec3 c){
  c = mix(c, vec3(0.86, 0.46, 0.13), smoothstep(0.40, 0.70, uSeason));   // → autumn orange
  c = mix(c, vec3(0.46, 0.33, 0.20), smoothstep(0.75, 1.00, uSeason));   // → bare brown
  return c;
}
`:``),f=c?`uGlow * mix(uGlowDay, uGlowNight, uWindowGlow)`:`vec3(0.0)`,p=Ve(Ue(e.fragmentShader.replace(`#include <common>`,`#include <common>
`+d+K).replace(`#include <opaque_fragment>`,`#include <opaque_fragment>
        if (uVector > 0.5) {
          vec3 col = vecShade(${u});
          ${We}                            // the sun's shadow darkens the flat tier…
          gl_FragColor = vec4(col + ${f}, diffuseColor.a);  // …but the night glow stays lit
        }`)));c&&(p=p.replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>\n  totalEmissiveRadiance += ${f};`)),e.fragmentShader=p},e}function J(e){let t=e>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Y(e){let t=J(e);return{next:t,range:(e,n)=>e+(n-e)*t(),int:(e,n)=>e+Math.floor(t()*(n-e+1)),pick:e=>e[Math.floor(t()*e.length)],chance:e=>t()<e}}var Ke=[{key:`manhattan`,name:`Manhattan`,towers:[`#EDE3C8`,`#D9B98A`,`#B5562F`,`#A8C8E8`,`#2E3F5C`],ground:`#7CC455`,street:`#9AA0A6`,sidewalk:`#C8CCD0`,park:`#5DB347`,water:`#29A8D8`,shopfronts:[`#C04A3A`,`#3A7AC0`,`#C09A2A`],glass:`#7FA8CC`,winColors:[`#ffd27a`,`#9ad6ff`],hMax:4.6,sigma:.36,roofRate:.35,pSplit:.6,nightLit:.55,roofTint:null,coast:{base:.55,out:1,in:.6,jag:1.05},landmarks:[`empireState`,`chrysler`,`liberty`]},{key:`paris`,name:`Paris`,towers:[`#E8DCC0`,`#F2EAD6`,`#E0D2B4`],ground:`#8CC46A`,street:`#A8A29A`,sidewalk:`#D4CEC2`,park:`#6DB35A`,water:`#3FA8C8`,shopfronts:[`#C04A3A`,`#3A6B5A`,`#7A5AC0`],glass:`#5A6B7A`,winColors:[`#ffdca0`,`#ffcaa0`],hMax:1.5,sigma:.9,roofRate:.15,pSplit:.75,nightLit:.45,roofTint:`#6A7886`,coast:{base:1.05,out:.55,in:.3,jag:.5},landmarks:[`eiffel`,`arcDeTriomphe`,`sacreCoeur`]},{key:`neoTokyo`,name:`Neo-Tokyo`,towers:[`#2A3038`,`#3A4250`,`#252B36`,`#4A4456`],ground:`#3A4A42`,street:`#5A6068`,sidewalk:`#7A8088`,park:`#2E5E46`,water:`#0E6878`,shopfronts:[`#E8483A`,`#5AE8E0`,`#E85AA0`],glass:`#5AE8E0`,winColors:[`#5AE8E0`,`#E85AA0`,`#E8E06A`],hMax:5.2,sigma:.42,roofRate:.6,pSplit:.6,nightLit:.7,roofTint:null,coast:{base:.7,out:1.05,in:.62,jag:1.7},landmarks:[`tokyoTower`,`pagoda`,`neonBillboard`]}],qe=Ke.map(e=>e.key),Je=.3,Ye=1.9,Xe=.55,Ze=2.45,Qe=.12,$e=.6,et=6,tt={BASE:.7,OUT:.95,IN:.55,JAG:1,SAMPLES_PER_EDGE:28,HARBOR_DEPTH:.55,HARBOR_WIDTH:.26},nt={PLINTH_TOP:Je,BLOCK:Ye,STREET:Xe,PITCH:Ze,SIDEWALK:Qe,SHORE:$e,N:et,COAST:tt};function rt(e,t,n){let r=n?.base??tt.BASE,i=n?.out??tt.OUT,a=n?.in??tt.IN,o=n?.jag??tt.JAG,s=t+r,c=Y((e^789079)>>>0),l=[2,3,5,8,11,13].map(e=>({k:e,amp:1/e*o**((e-2)/6),phase:c.range(0,Math.PI*2)})),u=l.reduce((e,t)=>e+t.amp,0),d=e=>{let t=0;for(let n of l)t+=n.amp*Math.sin(n.k*e*Math.PI*2+n.phase);return Math.max(-1,Math.min(1,t/(u*.6)))},f=[{fix:+s,nx:1,nz:0,sign:1},{fix:+s,nx:0,nz:1,sign:-1},{fix:-s,nx:-1,nz:0,sign:-1},{fix:-s,nx:0,nz:-1,sign:1}],p=t+.22,m=tt.SAMPLES_PER_EDGE,h=4*m,g=[],_=0;for(let e=0;e<4;e++){let t=f[e];for(let n=0;n<m;n++,_++){let o=n/m,c=_/h,l=(-s+2*s*o)*t.sign,u=d(c),f=u>=0?u*i:u*a;if(e===0){let e=Math.abs(o-.5);if(e<tt.HARBOR_WIDTH){let t=.5+.5*Math.cos(e/tt.HARBOR_WIDTH*Math.PI);f-=(r+tt.HARBOR_DEPTH)*t}}let v,y;t.nx===0?(y=t.fix+t.nz*f,v=l,y=t.nz>0?Math.max(y,p):Math.min(y,-p)):(v=t.fix+t.nx*f,y=l,v=t.nx>0?Math.max(v,p):Math.min(v,-p)),g.push(new z(v,y))}}return{points:g,B:s,maxR:s+i,harborX:p}}function it(e){(Array.isArray(e)?e:[e]).forEach(e=>e&&e.dispose&&e.dispose())}function at({seed:t=1,profileIndex:n=0,landmarkFactory:r=null,windowGlow:a}){let o=new f,s=new f,c=new f;s.raycast=()=>{},c.raycast=()=>{},o.add(s,c);let l=new _e(16773594,3);l.position.set(.45,.6,-.65).multiplyScalar(10);let u=new e(7313331,2762272,1);o.add(l,u);let d=0,p=[],m={seed:t,profileIndex:n,profile:Ke[n],extent:0,meshCount:0};function h(e,t,n,r){let a=new _(new L(e,.04,t),q(new i({color:r,roughness:.95,flatShading:!0}),{color:r}));return a.position.y=n,a.userData.ground=!0,a}function g(e,t){for(let e of s.children)e.geometry&&e.geometry.dispose(),it(e.material);s.clear();for(let e of c.children)e.traverse(e=>{e.isMesh&&it(e.material)});c.clear(),p.length=0,d=0;let n=Y(e),a=Ke[t],o=(et-1)/2*Ze,l=7.075;m={seed:e,profileIndex:t,profile:a,extent:l+(a.coast?.base??tt.BASE),meshCount:0};let u=rt(e,l,a.coast);m.coast=u;let f=new me;u.points.forEach((e,t)=>t?f.lineTo(e.x,e.y):f.moveTo(e.x,e.y)),f.closePath();let g=new _(new ge(f,{depth:2,bevelEnabled:!1,steps:1}),q(new i({color:a.ground,roughness:.9,flatShading:!0,side:2}),{color:a.ground}));g.rotation.x=-Math.PI/2,g.position.y=Je-2,g.userData.ground=!0,s.add(g);let y=2*7.195;s.add(h(y,y,.32,a.street)),S(u.harborX,a);let w=[];for(let e=0;e<et;e++)for(let t=0;t<et;t++)w.push([e,t]);let T=new Set,E=Math.max(1,Math.round(w.length*.08));for(;T.size<E;)T.add(n.int(0,w.length-1));let D=n.range(-2.45*.6,Ze*.6),O=n.range(-2.45*.6,Ze*.6),ee=Math.hypot(o,o),k=[];if(w.forEach(([e,t],r)=>{let i=(e-(et-1)/2)*Ze,o=(t-(et-1)/2)*Ze;if(s.add(h(Ye,Ye,.32999999999999996,a.sidewalk).translateX(i).translateZ(o)),T.has(r)){s.add(h(Ye-Qe*2,Ye-Qe*2,.35,a.park).translateX(i).translateZ(o));let e=n.int(3,5);for(let t=0;t<e;t++)C(i+n.range(-.6,.6),o+n.range(-.6,.6),a,n);return}let c=Ye-Qe*2,l=n.chance(a.pSplit)?2:1,u=n.chance(a.pSplit)?2:1,d=c/l,f=c/u;for(let e=0;e<l;e++)for(let t=0;t<u;t++){let r=i-c/2+d*(e+.5),s=o-c/2+f*(t+.5),l=Math.max(.6,d-.1),u=Math.max(.6,f-.1),p=Math.hypot(r-D,s-O)/ee,m=Math.exp(-(p*p)/(2*a.sigma*a.sigma)),h=Math.max(.5,.5+(a.hMax-.5)*m*n.range(.75,1.25));h>a.hMax*.5&&Math.min(l,u)>=.7&&k.push({lx:r,lz:s,fw:l,fd:u,h,r:p}),v(r,s,l,u,h,a,n)}}),r&&r.ready){k.sort((e,t)=>e.r-t.r);let e=[],t=a.landmarks;for(let n=0;n<t.length&&k.length;n++){let i=null;for(let t of k)if(e.every(e=>Math.hypot(e.lx-t.lx,e.lz-t.lz)>Ze*.9)){i=t;break}i||=k[0],e.push(i),b(i.lx,i.lz);let o=a.hMax*r.heightFactor(t[n]),s=r.make(t[n],{x:i.lx,z:i.lz,w:i.fw,d:i.fd,h:o,plinthTop:Je});if(s){c.add(s);let e=new oe().setFromObject(s);x(e.min.x-.15,e.max.x+.15,e.min.z-.15,e.max.z+.15)}}}s.traverse(e=>{e.isMesh&&(e.userData.ground?(e.castShadow=!1,e.receiveShadow=!0):e.material&&e.material.isMeshBasicMaterial?(e.castShadow=!1,e.receiveShadow=!1):(e.castShadow=!0,e.receiveShadow=!0))}),c.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),m.meshCount=s.children.length+c.children.length;let A=0;for(let e of s.children){let t=e.position;A=(Math.imul(A,16777619)^(Math.round(t.x*100)*2654435761^Math.round(t.y*100)*40503^Math.round(t.z*100)*2246822519))>>>0}for(let e of m.coast.points)A=(Math.imul(A,16777619)^(Math.round(e.x*100)*2654435761^Math.round(e.y*100)*40503))>>>0;m.sig=A,window.__city={seed:e,profile:a.key,meshes:m.meshCount,sig:A}}function v(e,t,n,r,o,c,l){let u=Ge(new i({flatShading:!0,roughness:.7,metalness:.05}),{color:l.pick(c.towers),id:++d,windowGlow:a,winColors:c.winColors,litFrac:c.nightLit}),f=new _(new L(n,o,r),u);if(f.position.set(e,Je+o/2,t),f.userData.lot=[e,t],s.add(f),c.roofTint){let a=q(new i({color:c.roofTint,roughness:.85,flatShading:!0}),{color:c.roofTint}),l=new _(new L(n*1.02,.08,r*1.02),a);l.position.set(e,Je+o+.04,t),l.userData.lot=[e,t],s.add(l)}if(o<1.4){let a=l.pick(c.shopfronts),o=new _(new L(n*1.04,.18,r*1.04),q(new i({color:a,roughness:.8,flatShading:!0}),{color:a}));o.position.set(e,.39,t),o.userData.lot=[e,t],s.add(o)}let m=Je+o,h=n,g=r;if(o>c.hMax*.5&&l.chance(.55)){let u=n*l.range(.5,.72),f=r*l.range(.5,.72),p=o*l.range(.18,.4),v=new _(new L(u,p,f),Ge(new i({flatShading:!0,roughness:.7,metalness:.05}),{color:l.pick(c.towers),id:++d,windowGlow:a,winColors:c.winColors,litFrac:c.nightLit}));v.position.set(e,Je+o+p/2,t),v.userData.lot=[e,t],s.add(v),m=Je+o+p,h=u,g=f}if(o>c.hMax*.45&&l.chance(c.roofRate)){let n=l.chance(.5)?new _(new L(h*.4,.18,g*.4),q(new i({color:`#9a9a9a`,flatShading:!0}),{color:`#9a9a9a`})):new _(new he(h*.18,h*.18,.22,10),q(new i({color:`#b9bec4`,flatShading:!0}),{color:`#b9bec4`}));if(n.position.set(e+l.range(-.1,.1),m+.11,t+l.range(-.1,.1)),n.userData.lot=[e,t],s.add(n),l.chance(.25)){let n=new _(new O(.05,6,5),new y({color:`#ff3b30`,transparent:!0,opacity:1}));n.position.set(e,m+.15,t),n.userData.lot=[e,t],n.raycast=()=>{},s.add(n),p.push({mesh:n,phase:l.range(0,6.28)})}}if(o>c.hMax*.7&&l.chance(.35)){let n=o*l.range(.18,.34),r=new _(new he(.018,.05,n,6),q(new i({color:`#c8ccd2`,flatShading:!0}),{color:`#c8ccd2`}));r.position.set(e,m+n/2,t),r.userData.lot=[e,t],r.raycast=()=>{},s.add(r)}}function b(e,t){for(let n=s.children.length-1;n>=0;n--){let r=s.children[n];r.userData.lot&&Math.abs(r.userData.lot[0]-e)<1e-4&&Math.abs(r.userData.lot[1]-t)<1e-4&&(r.geometry&&r.geometry.dispose(),it(r.material),s.remove(r))}for(let e=p.length-1;e>=0;e--)p[e].mesh.parent||p.splice(e,1)}function x(e,t,n,r){for(let i=s.children.length-1;i>=0;i--){let a=s.children[i];a.userData.lot&&a.position.x>=e&&a.position.x<=t&&a.position.z>=n&&a.position.z<=r&&(a.geometry&&a.geometry.dispose(),it(a.material),s.remove(a))}}function S(e,t){let n=q(new i({color:`#7a5634`,roughness:.95,flatShading:!0}),{color:`#7a5634`}),r=(e,t,r,i)=>{let a=new _(new L(e,.06,t),n);a.position.set(r,Je-.16,i),s.add(a)};r(.24,2,e+.02,0),r(1.3,.22,e+.7,-.72),r(1.3,.22,e+.7,.72)}function C(e,t,n,r){let a=new A(n.park),o=(n,o)=>{let c=a.clone().offsetHSL(0,0,r.range(-.06,.06)).getStyle(),l=new _(new O(n,7,6),q(new i({color:c,flatShading:!0}),{color:c,season:!0}));l.scale.y=.7,l.position.set(e,Je+o,t),l.userData.lot=null,s.add(l)},c=new _(new L(.05,.18,.05),q(new i({color:`#6b4a2a`,flatShading:!0}),{color:`#6b4a2a`}));c.position.set(e,.39,t),s.add(c),o(.22,.28),o(.16,.46)}function w(e){for(let t of p)t.mesh.material.opacity=.35+.65*(.5+.5*Math.sin(e*3+t.phase))}return g(t,n),{group:o,key:l,fill:u,update:w,generate:g,get state(){return m},get extent(){return m.extent},get waterColor(){return m.profile.water},profiles:Ke}}var ot=Math.PI*2,st=.7,ct=90,lt=[{name:`night`,sun:`#4a6f9e`,intensity:.35,hemiSky:`#26344f`,hemiGround:`#0c1018`,horizon:`#1e2942`,sky:`#36486e`,exposure:.95,outline:`#101a30`,window:1,toonGain:2.6,turbidity:3,rayleigh:1,mie:.004,mieG:.75,gradeTint:`#cfd8ec`,gradeSat:.84,gradeLift:`#05070e`,gradeContrast:1},{name:`dawn`,sun:`#ff9e54`,intensity:2.4,hemiSky:`#8a7686`,hemiGround:`#2a1f1a`,horizon:`#b8512c`,sky:`#ffb070`,exposure:1.05,outline:`#241826`,window:.3,toonGain:2,turbidity:6,rayleigh:3,mie:.025,mieG:.86,gradeTint:`#ffe6cf`,gradeSat:1.05,gradeLift:`#0a0603`,gradeContrast:1.04},{name:`noon`,sun:`#fff4e0`,intensity:4.6,hemiSky:`#9cb8cc`,hemiGround:`#33302a`,horizon:`#5e7689`,sky:`#aacadd`,exposure:1.18,outline:`#0b0a08`,window:0,toonGain:1.7,turbidity:1.6,rayleigh:2.9,mie:.005,mieG:.78,gradeTint:`#d6e6f4`,gradeSat:1.34,gradeLift:`#000000`,gradeContrast:1.26},{name:`dusk`,sun:`#ff6b35`,intensity:2,hemiSky:`#7a566a`,hemiGround:`#281a18`,horizon:`#b0432a`,sky:`#ff8a5a`,exposure:1.05,outline:`#1f1420`,window:.4,toonGain:2,turbidity:7,rayleigh:3.2,mie:.028,mieG:.87,gradeTint:`#ffdcc0`,gradeSat:1.06,gradeLift:`#0c0604`,gradeContrast:1.05}],ut=e=>e-Math.floor(e),dt=(e,t,n)=>e+(t-e)*n,ft=(e,t,n)=>e+(t-e)*(1-Math.exp(-6*n));function pt({t:e=.5}={}){let t=e,n=e,r=!1,i=!1,a=lt.map(e=>({name:e.name,sun:new A(e.sun),hemiSky:new A(e.hemiSky),hemiGround:new A(e.hemiGround),horizon:new A(e.horizon),sky:new A(e.sky),outline:new A(e.outline),intensity:e.intensity,exposure:e.exposure,window:e.window,toonGain:e.toonGain,turbidity:e.turbidity,rayleigh:e.rayleigh,mie:e.mie,mieG:e.mieG,gradeTint:new A(e.gradeTint),gradeLift:new A(e.gradeLift),gradeSat:e.gradeSat,gradeContrast:e.gradeContrast})),o=new B(0,1,0),s=new A(`#fff4e0`),c=new A(`#6f97b3`),l=new A(`#2a2620`),u=new A(`#3a4a57`),d=new A(`#7da3bd`),f=new A(`#0b0a08`),p=new A(`#000000`),m=3,h=1,g=0,_=1.7,v={turbidity:2.2,rayleigh:1.3,mie:.005,mieG:.78},y={tint:new A(`#fafdff`),lift:new A(`#000000`),sat:1.08,contrast:1},b=new B;function x(e){let t=ut(e)*4,n=Math.floor(t)%4,r=(n+1)%4,i=t-Math.floor(t),x=a[n],S=a[r];s.lerpColors(x.sun,S.sun,i),c.lerpColors(x.hemiSky,S.hemiSky,i),l.lerpColors(x.hemiGround,S.hemiGround,i),u.lerpColors(x.horizon,S.horizon,i),d.lerpColors(x.sky,S.sky,i),f.lerpColors(x.outline,S.outline,i),m=dt(x.intensity,S.intensity,i),h=dt(x.exposure,S.exposure,i),g=dt(x.window,S.window,i),_=dt(x.toonGain,S.toonGain,i),v.turbidity=dt(x.turbidity,S.turbidity,i),v.rayleigh=dt(x.rayleigh,S.rayleigh,i),v.mie=dt(x.mie,S.mie,i),v.mieG=dt(x.mieG,S.mieG,i),y.tint.lerpColors(x.gradeTint,S.gradeTint,i),y.lift.lerpColors(x.gradeLift,S.gradeLift,i),y.sat=dt(x.gradeSat,S.gradeSat,i),y.contrast=dt(x.gradeContrast,S.gradeContrast,i),p.setRGB(.045*g,.075*g,.14*g);let C=ut(e)*ot-Math.PI/2,w=Math.cos(C),T=Math.sin(C);b.set(w,T*Math.cos(st),T*Math.sin(st)),b.y>=0?o.copy(b):o.copy(b).negate()}return x(t),{sunDir:o,sunColor:s,hemiSky:c,hemiGround:l,horizon:u,sky:d,outline:f,toonFloor:p,skyParams:v,grade:y,sunArc:b,get sunIntensity(){return m},get exposure(){return h},get windowGlow(){return g},get toonGain(){return _},get t(){return ut(t)},get auto(){return r},get clock(){let e=Math.round(ut(t)*24*60)%1440;return`${String(Math.floor(e/60)).padStart(2,`0`)}:${String(e%60).padStart(2,`0`)}`},cyclePreset(){n=(Math.floor(t*4+1e-4)+1)/4},nudge(e){n+=e/24},goTo(e){n=e},toggleAuto(){r=!r},setReducedMotion(e){i=e},update(e){r&&!i&&(n+=e/ct),t=ft(t,n,e),x(t)}}}function mt(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.35,`rgba(255,255,255,0.55)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new R(e);return r.colorSpace=de,r}function ht(e,t){let n=[];for(let r=0;r<16;r++){let i=r/16*Math.PI*2;n.push(new B(Math.cos(i)*e,t,Math.sin(i)*e))}return new k(n,!0,`catmullrom`,.5)}function gt(e){let n=(t,n)=>Math.exp(-((e-t)*(e-t))/(2*n*n)),r=Math.max(n(.33,.05),n(.75,.06)),i=t.smoothstep(e,.24,.3)*(1-t.smoothstep(e,.8,.88));return t.clamp(.15+.55*i+.45*r,.12,1)}function _t(){let{PITCH:e,N:t,PLINTH_TOP:n}=nt,r=t+1,i=n+.04,a=n=>(n-t/2)*e,o=t/2,s=[],c=(e,t)=>t*r+e;for(let e=0;e<r;e++)for(let t=0;t<r;t++)s.push({x:a(t),z:a(e),i:t,j:e,edges:[]});let l=[],u=(t,n)=>{let r=(s[t].i===o||s[t].j===o)&&(s[n].i===o||s[n].j===o),i=l.length;l.push({a:t,b:n,len:e,main:r}),s[t].edges.push(i),s[n].edges.push(i)};for(let e=0;e<r;e++)for(let t=0;t<r;t++)t<r-1&&u(c(t,e),c(t+1,e)),e<r-1&&u(c(t,e),c(t,e+1));return{nodes:s,edges:l,y:i,mid:o}}function vt({plinthTop:e=.3,extent:n=4,profile:r=null}={}){let a=new f,o=_t(),{nodes:s,edges:c}=o,l=o.y,u=.34,p=0;{let e=nt.PITCH-u*2;p=Math.max(1,Math.floor((e+.26)/.56))}let m=new y({color:`#e8c84a`,fog:!0}),h=new d(new L(.05,.012,.3),m,c.length*p);h.frustumCulled=!1,h.raycast=()=>{},h.receiveShadow=!1,h.castShadow=!1,a.add(h);{let e=new ce,t=0;for(let n of c){let r=s[n.a],i=s[n.b],a=i.x-r.x,o=i.z-r.z,c=Math.hypot(a,o),d=a/c,f=o/c,m=Math.atan2(d,f),g=c-u*2;for(let n=0;n<p;n++){let i=u+(p===1?g/2:g*n/(p-1));e.position.set(r.x+d*i,l,r.z+f*i),e.rotation.set(0,m,0),e.updateMatrix(),h.setMatrixAt(t++,e.matrix)}}h.instanceMatrix.needsUpdate=!0}let g=new d(new L(.34,.26,.74),q(new i({flatShading:!0,roughness:.5,metalness:.3})),12);g.castShadow=!0,g.receiveShadow=!1,g.frustumCulled=!1,g.raycast=()=>{};let _=new ie,v=new Float32Array(72),b=new Float32Array(72),x=new A(`#fff0c0`),S=new A(`#ff3528`);for(let e=0;e<12;e++)x.toArray(b,e*3),S.toArray(b,(12+e)*3),v[e*3+1]=-50,v[(12+e)*3+1]=-50;_.setAttribute(`position`,new T(v,3)),_.setAttribute(`color`,new T(b,3));let C=new pe({size:.72,sizeAttenuation:!0,map:mt(),vertexColors:!0,transparent:!0,opacity:0,blending:2,depthWrite:!1}),w=new ee(_,C);w.frustumCulled=!1,w.raycast=()=>{},a.add(g,w);let E=[`#f4c430`,`#c0392b`,`#d8dde2`,`#9aa7b4`,`#6b7785`,`#5a7d9a`],O=J(2403557),k=c.map((e,t)=>t).filter(e=>c[e].main),j=[];for(let e=0;e<12;e++){let t=e<4&&k.length?k[O()*k.length|0]:O()*c.length|0,n=e===1;j.push({edge:t,fwd:O()<.5,s:O()*c[t].len,speed:n?.5:.78+e%3*.1,lenZ:n?1.45:1,color:E[n?1:e===0?0:2+e%4],rng:J(12648430+e*2654435761),isBus:n,pos:new B,dirX:0,dirZ:1,active:!1})}let te=new A;j.forEach((e,t)=>g.setColorAt(t,te.set(e.color)));function ne(e,t,n){let r=s[e],i=r.edges.filter(e=>e!==t);if(i.length===0)return t;let a=c[t],o=a.a===e?a.b:a.a,l=r.x-s[o].x,u=r.z-s[o].z,d=Math.hypot(l,u)||1,f=i[0],p=-2;for(let t of i){let n=c[t],i=n.a===e?n.b:n.a,a=s[i].x-r.x,o=s[i].z-r.z,m=Math.hypot(a,o)||1,h=l/d*(a/m)+u/d*(o/m);h>p&&(p=h,f=t)}return n()<.65?f:i[n()*i.length|0]}let re=ne,M=new ce,ae=(e,t)=>{M.position.set(0,-50,0),M.scale.setScalar(0),M.updateMatrix(),e.setMatrixAt(t,M.matrix)},N=.085,P=nt.PLINTH_TOP+.02+.13,F=new d(new D(.04,.1,3,6),q(new i({flatShading:!0,roughness:.8})),14);F.castShadow=!0,F.receiveShadow=!1,F.frustumCulled=!1,F.raycast=()=>{};let oe=ht(n-.72,e),se=[];for(let e=0;e<14;e++)se.push({phase:e/14,speed:.12+e%4*.02,dir:e%2?1:-1,pos:new B,active:!1});let I=new B,le=new B,ue=new A;se.forEach((e,t)=>F.setColorAt(t,ue.set([`#caa`,`#9ab`,`#bba`,`#ab9`][t%4]))),a.add(F);let de={manhattan:`#e8c84a`,paris:`#dcd2bc`,neoTokyo:`#5ae8e0`};function fe(e){e&&m.color.set(de[e.key]||`#e8c84a`)}fe(r);function R(n,r,i){let a=i?i.t:.5,o=i?i.windowGlow:0,l=Math.max(2,Math.round(gt(a)*12)),u=o>.05;for(let e=0;e<12;e++){if(e>=l){ae(g,e),j[e].active=!1,v[e*3+1]=-50,v[(12+e)*3+1]=-50;continue}let t=j[e];t.s+=n*t.speed;let r=0;for(;t.s>=c[t.edge].len&&r++<4;){t.s-=c[t.edge].len;let e=t.fwd?c[t.edge].b:c[t.edge].a,n=re(e,t.edge,t.rng);t.edge=n,t.fwd=c[n].a===e}let i=c[t.edge],a=t.fwd?s[i.a]:s[i.b],o=t.fwd?s[i.b]:s[i.a],d=o.x-a.x,f=o.z-a.z,p=Math.hypot(d,f)||1,m=d/p,h=f/p,_=-h,y=m,b=a.x+m*t.s+_*N,x=a.z+h*t.s+y*N,S=Math.atan2(m,h);M.position.set(b,P,x),M.rotation.set(0,S,0),M.scale.set(1,1,t.lenZ),M.updateMatrix(),g.setMatrixAt(e,M.matrix),t.pos.set(b,P,x),t.dirX=m,t.dirZ=h,t.active=!0;let C=.74*t.lenZ*.5,w=P+.06,T=e*3,E=(12+e)*3;u?(v[T]=b+m*(C+.04),v[T+1]=w,v[T+2]=x+h*(C+.04),v[E]=b-m*(C+.02),v[E+1]=w,v[E+2]=x-h*(C+.02)):(v[T+1]=-50,v[E+1]=-50)}g.instanceMatrix.needsUpdate=!0,_.attributes.position.needsUpdate=!0,C.opacity=t.clamp(o*1.8,0,1);let d=Math.max(2,Math.round(gt(a)*14));for(let t=0;t<14;t++){if(t>=d){ae(F,t),se[t].active=!1;continue}let n=se[t],i=(n.phase+n.dir*n.speed*r*.02+1e3)%1;oe.getPointAt(i,I),oe.getTangentAt(i,le);let a=Math.sin(r*6+n.phase*30)*.015;M.position.set(I.x,e+.09+a,I.z),M.rotation.set(0,Math.atan2(le.x*n.dir,le.z*n.dir),Math.sin(r*6+n.phase*30)*.06),M.scale.setScalar(1),M.updateMatrix(),F.setMatrixAt(t,M.matrix),n.pos.set(I.x,e+.09,I.z),n.active=!0}F.instanceMatrix.needsUpdate=!0}let me=[...j.map((e,t)=>({kind:`car`,label:e.isBus?`bus`:`car ${t+1}`,getWorldPos:t=>t.copy(e.pos),active:()=>e.active,info:()=>`${e.isBus?`bus`:`car`} · ${c[e.edge].main?`main avenue`:`side street`} → heading ${yt(e.dirX,e.dirZ)}`})),...se.map((e,t)=>({kind:`person`,label:`person ${t+1}`,getWorldPos:t=>t.copy(e.pos),active:()=>e.active,info:()=>`person · strolling the waterfront promenade`}))];function he(){return me}return{group:a,update:R,setProfile:fe,getFollowables:he,graph:o,setRouter(e){re=e||ne}}}function yt(e,t){return[`N`,`NE`,`E`,`SE`,`S`,`SW`,`W`,`NW`][(Math.round(Math.atan2(e,t)/(Math.PI/4))%8+8)%8]}function bt({frames:e,fps:t=8,cols:n,rows:r=1}={}){let i=n||e||4,a=r||1,o=e||i*a,s=typeof window<`u`&&window.matchMedia?window.matchMedia(`(prefers-reduced-motion: reduce)`):null;function c(e,t){let n=t%i,r=Math.floor(t/i);e.offset.x=n/i,e.offset.y=1-(r+1)/a}function l(e){let t=e.clone();return t.needsUpdate=!0,t.repeat.set(1/i,1/a),c(t,0),t}function u(e,n,r=0){if(s&&s.matches)return c(e,0),0;let i=(Math.floor(n*t+r)%o+o)%o;return c(e,i),i}function d(e,t){let n=(Math.round(t)%o+o)%o;return c(e,n),n}return{frames:o,fps:t,cols:i,rows:a,makeInstanceTexture:l,step:u,setFrame:d}}function xt(e){if(typeof document>`u`||!e||!e.image)return e;let t=e.image,n=t.width||t.naturalWidth,r=t.height||t.naturalHeight,i=document.createElement(`canvas`);i.width=n,i.height=r;let a=i.getContext(`2d`,{willReadFrequently:!0});a.drawImage(t,0,0,n,r);let o=a.getImageData(0,0,n,r),s=o.data;for(let e=0;e<s.length;e+=4){let t=s[e]*.299+s[e+1]*.587+s[e+2]*.114|0;s[e]=s[e+1]=s[e+2]=t}a.putImageData(o,0,0);let c=new R(i);return c.colorSpace=e.colorSpace||`srgb`,c}function St({url:e,fallback:t,luminance:n=!1,onReady:r}={}){let i=n?xt(t):t;return e&&typeof window<`u`&&new j().load(e,e=>{e.colorSpace=de,r&&r(n?xt(e):e)},void 0,()=>{}),i}var Ct=``+new URL(`gull_diffusion_sheet-BMlUTLhu.png`,import.meta.url).href;function wt(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.4,`rgba(255,255,255,0.5)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new R(e);return r.colorSpace=de,r}function Tt(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64*.62,0,64/2,64*.62,64*.5);n.addColorStop(0,`rgba(240,250,255,0.95)`),n.addColorStop(1,`rgba(240,250,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new R(e);return r.colorSpace=de,r}function Et(){let e=document.createElement(`canvas`);e.width=256,e.height=64;let t=e.getContext(`2d`);t.strokeStyle=`#ffffff`,t.lineWidth=6,t.lineCap=`round`,t.lineJoin=`round`;let n=[14,24,36,24];for(let e=0;e<4;e++){let r=e*64,i=n[e];t.beginPath(),t.moveTo(r+8,40),t.quadraticCurveTo(r+24,i,r+32,36),t.quadraticCurveTo(r+40,i,r+56,40),t.stroke()}let r=new R(e);return r.colorSpace=de,r}function X(e,t,n=18){let r=[];for(let i=0;i<n;i++){let a=i/n*Math.PI*2;r.push(new B(Math.cos(a)*e,t,Math.sin(a)*e))}return new k(r,!0,`catmullrom`,.5)}function Dt(e,t,n){let r=e-t,i=[],a=(e,t)=>i.push(new B(e,n,t)),o=(e,n,r,i,o=4)=>{for(let s=1;s<=o;s++){let c=r+(i-r)*(s/o);a(e+Math.cos(c)*t,n+Math.sin(c)*t)}};for(let t=0;t<4;t++)a(e,-r+2*r*t/4);o(r,r,0,Math.PI/2);for(let t=0;t<4;t++)a(r-2*r*t/4,e);o(-r,r,Math.PI/2,Math.PI);for(let t=0;t<4;t++)a(-e,r-2*r*t/4);o(-r,-r,Math.PI,1.5*Math.PI);for(let t=0;t<4;t++)a(-r+2*r*t/4,-e);return o(r,-r,1.5*Math.PI,2*Math.PI),new k(i,!0,`catmullrom`,.5)}function Ot({extent:e=8,waterSize:n=28,plinthTop:r=.3}={}){let a=new f;a.raycast=()=>{};let o=.06,s=(e,t,r)=>r.set(e/n+.5,-t/n+.5,0),c=[Dt(9.5,3,o),X(12.7,o),new k([new B(8.4,o,0),new B(11,o,-3.6),new B(13,o,0),new B(11,o,3.6)],!0,`catmullrom`,.5)],l=c.map(e=>e.getLength());function u({scale:e=1,hull:t=`#6b7785`,cabin:n=`#e7ecf2`}){let r=new f,a=new _(new L(.46*e,.2*e,1.1*e),q(new i({color:t,roughness:.6,metalness:.2,flatShading:!0}),{color:t}));a.position.y=.02;let o=new _(new L(.3*e,.22*e,.42*e),q(new i({color:n,roughness:.7,flatShading:!0}),{color:n}));return o.position.set(0,.18*e,.08*e),r.add(a,o),r.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!1),e.raycast=()=>{}}),r.userData.halfLen=.55*e,r}let d=[{laneIndex:0,dir:1,speed:.5,wake:.024,scale:1,hull:`#5a6675`,cabin:`#e7ecf2`},{laneIndex:1,dir:-1,speed:.42,wake:.022,scale:1,hull:`#7a5b46`,cabin:`#d9c3a6`},{laneIndex:0,dir:1,speed:.56,wake:.024,scale:.9,hull:`#456079`,cabin:`#cfe0ee`},{laneIndex:2,dir:1,speed:.34,wake:.03,scale:1.35,hull:`#39505f`,cabin:`#e2b85a`}];d.forEach((e,t)=>{e.mesh=u(e),e.u=t*.27%1,e.phase=t*1.7,e.isFerry=e.laneIndex===2,a.add(e.mesh)});let p=d.length,m=p*2,h=new ie,g=new Float32Array(m*3).fill(-50),v=new Float32Array(m*3),y=new A(`#fff0c0`),b=new A(`#ff3528`);for(let e=0;e<p;e++)y.toArray(v,e*3),b.toArray(v,(p+e)*3);h.setAttribute(`position`,new T(g,3)),h.setAttribute(`color`,new T(v,3));let x=new ee(h,new pe({size:.6,sizeAttenuation:!0,map:wt(),vertexColors:!0,transparent:!0,opacity:0,blending:2,depthWrite:!1}));x.frustumCulled=!1,x.raycast=()=>{},a.add(x);function S(e,t){let n=new _(new O(e,9,7),q(new i({color:t,roughness:.5,flatShading:!0}),{color:t}));return n.scale.set(.55,.5,1),n.castShadow=!1,n.receiveShadow=!1,n.raycast=()=>{},n.position.y=-5,n}let C=[{x:-9.5,z:6,size:.18,color:`#5b6f86`,period:11,arcH:.55,span:1.1,whale:!1},{x:7.5,z:-9.5,size:.16,color:`#4a6076`,period:14,arcH:.5,span:1,whale:!1},{x:-7,z:-8.5,size:.2,color:`#607089`,period:9,arcH:.6,span:1.2,whale:!1},{x:10.5,z:7,size:.62,color:`#3a4350`,period:38,arcH:.9,span:2.6,whale:!0}];C.forEach((e,t)=>{e.mesh=S(e.size,e.color),e.heading=Math.atan2(-e.x,-e.z),e.t=t/C.length*e.period,e.splashed=!1,a.add(e.mesh),e.whale&&(e.spout=new I(new N({map:Tt(),transparent:!0,opacity:0,depthWrite:!1,fog:!0})),e.spout.scale.set(.6,1.1,1),e.spout.position.set(e.x,-5,e.z),a.add(e.spout))});let w=bt({frames:4,fps:7}),E=[`#ffffff`,`#cfd4da`,`#c8a06a`],D=[],j=St({url:Ct,fallback:Et(),luminance:!0,onReady:e=>{j=e;for(let t of D){let n=t.sp.material.map;t.sp.material.map=w.makeInstanceTexture(e),t.sp.material.needsUpdate=!0,n&&n.dispose()}typeof window<`u`&&(window.__gullSheet=`diffusion`)}});for(let e=0;e<4;e++){let t=new I(new N({map:w.makeInstanceTexture(j),color:new A(E[e%E.length]),transparent:!0,opacity:0,depthWrite:!1,fog:!0}));t.scale.setScalar(.5),D.push({sp:t,r:8.6+e*.5,y:1.1+e%2*.5,speed:(.18+e*.03)*(e%2?-1:1),phase:e*1.9}),a.add(t)}typeof window<`u`&&(window.__gullSheet=window.__gullSheet||`procedural`,window.__gullAnim={frames:w.frames,variants:E.length,fps:w.fps});let te=C.length,ne=Array.from({length:p+te},()=>new B),re=e=>e.laneIndex,M=new B,ae=new B,P=new B;function F(e,n,r){let i=r?r.windowGlow:0,a=1-i;for(let t=0;t<p;t++){let r=d[t],a=c[r.laneIndex],u=l[r.laneIndex],f=r.isFerry?.45+.55*Math.min(1,Math.abs((r.u+.5)%1-.5)*3):1,m=r.u;r.u=(r.u+r.dir*e*r.speed*f/u+1)%1,(r.dir>0?r.u<m:r.u>m)&&(r.laneIndex=re(r)),a.getPointAt(r.u,M),a.getTangentAt(r.u,ae);let h=ae.x*r.dir,_=ae.z*r.dir,v=Math.atan2(h,_),y=Math.sin(n*1.1+r.phase)*.025;r.mesh.position.set(M.x,o+y,M.z),r.mesh.rotation.set(Math.sin(n*.9+r.phase)*.04,v,0);let b=r.mesh.userData.halfLen;s(M.x-h*b,M.z-_*b,P),ne[t].set(P.x,P.y,r.wake);let x=t*3,S=(p+t)*3;if(i>.05){let e=.18;g[x]=M.x+h*(b+.05),g[x+1]=e,g[x+2]=M.z+_*(b+.05),g[S]=M.x-h*(b+.02),g[S+1]=e,g[S+2]=M.z-_*(b+.02)}else g[x+1]=-50,g[S+1]=-50}oe(),x.material.opacity=t.clamp(i*1.8,0,1);for(let n=0;n<te;n++){let r=C[n];r.t+=e;let i=p+n,a=r.whale?3.2:1.3;if(r.t>=r.period){let e=(r.t-r.period)/a;if(e>=1){r.t=0,r.splashed=!1,r.mesh.position.y=-5,r.spout&&(r.spout.material.opacity=0),ne[i].set(0,0,0);continue}let n=Math.sin(Math.PI*e),c=(e-.5)*r.span,l=r.x+Math.sin(r.heading)*c,u=r.z+Math.cos(r.heading)*c;r.mesh.position.set(l,o-.1+n*r.arcH,u),r.mesh.rotation.set(Math.cos(Math.PI*e)*.9,r.heading,0);let d=e<.16||e>.84;if(s(l,u,P),ne[i].set(P.x,P.y,d?r.whale?.07:.05:0),r.spout){let n=t.clamp((e-.15)*3,0,1)*(1-e);r.spout.position.set(l,.56+n*.6,u),r.spout.material.opacity=n*.9}}else r.mesh.position.y=-5,ne[i].set(0,0,0),r.spout&&(r.spout.material.opacity=0)}for(let e=0;e<4;e++){let r=D[e],i=r.phase+n*r.speed*.25;r.sp.position.set(Math.cos(i)*r.r,r.y+Math.sin(n*1.4+r.phase)*.12,Math.sin(i)*r.r),r.sp.material.opacity=t.clamp(a*.9-.05,0,.85);let o=w.step(r.sp.material.map,n,r.phase);e===0&&typeof window<`u`&&(window.__gullFrame=o)}if(typeof window<`u`){let e=0;for(let t of C)t.mesh.position.y>o&&e++;window.__waterLife={boats:p,breaching:e,gulls:+D[0].sp.material.opacity.toFixed(2),lights:+x.material.opacity.toFixed(2)}}}function oe(){h.attributes.position.needsUpdate=!0}function se(){return ne.length}let ce=[...d.map((e,t)=>({kind:`boat`,label:e.isFerry?`ferry`:`boat ${t+1}`,getWorldPos:t=>t.copy(e.mesh.position),info:()=>e.isFerry?`boat · harbor ferry → docks`:`boat · open-water lane ${e.laneIndex}`})),...D.map((e,t)=>({kind:`gull`,label:`gull ${t+1}`,getWorldPos:t=>t.copy(e.sp.position),active:()=>e.sp.material.opacity>.05,info:()=>`gull · circling the coast`})),...C.map((e,t)=>({kind:`fish`,label:e.whale?`whale`:`fish ${t+1}`,getWorldPos:t=>t.copy(e.mesh.position),active:()=>e.mesh.position.y>o-.3,info:()=>e.mesh.position.y>o?e.whale?`whale · breaching!`:`fish · breaching!`:`fish · below the surface`}))];function le(){return ce}return{group:a,update:F,getFollowables:le,wakeDrops:ne,get wakeCount(){return se()},lanes:c,setRouter(e){re=e||(e=>e.laneIndex)}}}var kt=[`empireState`,`chrysler`,`liberty`,`eiffel`,`arcDeTriomphe`,`sacreCoeur`,`tokyoTower`,`pagoda`,`neonBillboard`],At={empireState:1.25,chrysler:1.1,liberty:.55,eiffel:3.2,arcDeTriomphe:1.5,sacreCoeur:1.75,tokyoTower:1.35,pagoda:.5,neonBillboard:.9};function jt(e){let t=()=>new i({flatShading:!0,roughness:.7,metalness:.1}),n=(n,r={})=>r.windows?Ge(t(),{color:n,id:e.id(),windowGlow:e.windowGlow,winColors:e.winColors,litFrac:e.litFrac}):q(t(),{color:n,glow:r.glow??null,glowDay:r.glowDay??0,glowNight:r.glowNight??1,windowGlow:r.glow?e.windowGlow:null});return{box:(e,t,r,i,a={})=>new _(new L(e,t,r),n(i,a)),cyl:(e,t,r,i,a={})=>new _(new he(e,t,r,a.seg||12),n(i,a)),cone:(e,t,r,i={})=>new _(new S(e,t,i.seg||8),n(r,i)),sphere:(e,t,r={})=>new _(new O(e,r.seg||12,r.seg2||8),n(t,r)),lathe:(e,t,r={})=>new _(new p(e.map(e=>new z(e[0],e[1])),r.seg||4),n(t,r))}}var Z=(e,t,n,r)=>(e.position.set(t,n,r),e),Mt=[`#7FB0E0`,`#E07FB0`,`#7FE0A0`,`#E0C97F`,`#9FE07F`,`#7FE0E0`,`#FF8C42`,`#E0E07F`,`#C97FE0`,`#E07F7F`,`#7F9FE0`,`#E0483A`],Nt={empireState(e,t){let n=`#E8E0CF`;e.add(Z(t.box(.42,.18,.42,n,{windows:!0}),0,.09,0)),e.add(Z(t.box(.34,.16,.34,n,{windows:!0}),0,.26,0)),e.add(Z(t.box(.26,.14,.26,n,{windows:!0}),0,.41,0)),e.add(Z(t.box(.19,.34,.19,n,{windows:!0}),0,.65,0)),e.add(Z(t.box(.13,.06,.13,n,{windows:!0}),0,.85,0));let r=Mt[new Date().getMonth()];e.add(Z(t.cyl(.03,.045,.12,n,{seg:10,glow:r,glowNight:1.85}),0,.94,0)),e.add(Z(t.cone(.012,.07,n,{seg:8}),0,1.04,0))},chrysler(e,t){let n=`#C9CED4`;e.add(Z(t.box(.22,.55,.22,`#9AA7B4`,{windows:!0}),0,.275,0));let r=.55;for(let i=0;i<5;i++){let a=.14-i*.024,o=.07;e.add(Z(t.cyl(a*.7,a,o,n,{seg:8,glow:`#dfeaff`,glowNight:.5}),0,r+o/2,0)),r+=o}e.add(Z(t.cone(.018,.16,n,{seg:8}),0,r+.08,0))},liberty(e,t){let n=`#B9B4A6`,r=`#4FA890`;e.add(Z(t.box(.42,.16,.42,n),0,.08,0)),e.add(Z(t.box(.3,.2,.3,n),0,.26,0)),e.add(Z(t.cyl(.1,.15,.42,r,{seg:10}),0,.57,0)),e.add(Z(t.box(.11,.1,.11,r),0,.83,0));for(let n=0;n<7;n++){let i=(n/6-.5)*Math.PI*1.1;e.add(Z(t.cone(.012,.1,r,{seg:5}),Math.sin(i)*.1,.92,Math.cos(i)*.06-.02))}let i=Z(t.cyl(.025,.03,.34,r,{seg:8}),.14,.98,0);i.rotation.z=.35,e.add(i),e.add(Z(t.box(.06,.06,.06,r,{glow:`#ffd060`,glowDay:.6,glowNight:1.2}),.2,1.16,0)),e.add(Z(t.cone(.04,.09,`#ffcf66`,{seg:6,glow:`#ffd060`,glowDay:.7,glowNight:1.3}),.2,1.24,0))},eiffel(e,t){let n=`#6E5C4C`,r=[[.2,0],[.13,.16],[.085,.33],[.055,.5],[.035,.66],[.02,.85],[0,.92]];e.add(t.lathe(r,n,{seg:4}));let i=t.lathe(r,n,{seg:4});i.rotation.y=Math.PI/4,e.add(i),e.add(Z(t.box(.26,.025,.26,n),0,.33,0)),e.add(Z(t.box(.14,.02,.14,n),0,.66,0)),e.add(Z(t.cone(.01,.1,n,{seg:6}),0,.97,0))},arcDeTriomphe(e,t){let n=`#D9D0C1`,r=.58,a=.5,o=.34,s=new me;s.moveTo(-.58/2,0),s.lineTo(r/2,0),s.lineTo(r/2,a),s.lineTo(-.58/2,a),s.lineTo(-.58/2,0);let c=new x,l=.15,u=.22;c.moveTo(-.15,0),c.lineTo(-.15,u),c.absarc(0,u,l,Math.PI,0,!0),c.lineTo(l,0),c.lineTo(-.15,0),s.holes.push(c);let d=new ge(s,{depth:o,bevelEnabled:!1});d.translate(0,0,-.34/2),d.computeVertexNormals(),e.add(new _(d,q(new i({color:n,flatShading:!0}),{color:n}))),e.add(Z(t.box(r*1.06,.08,o*1.06,n),0,.54,0))},sacreCoeur(e,t){let n=`#F1EEE6`;e.add(Z(t.box(.5,.26,.4,n),0,.13,0));let r=(r,i,a,o)=>{e.add(Z(t.cyl(a*.9,a,i,n,{seg:12}),r,o,0));let s=Z(t.sphere(a,n,{seg:12}),r,o+i/2,0);s.scale.y=1.5,e.add(s)};r(0,.22,.15,.4),r(-.2,.1,.07,.33),r(.2,.1,.07,.33)},tokyoTower(e,t){let n=`#F25822`,r=`#EDEDED`,i=0;for(let a=0;a<9;a++){let o=a/9,s=(a+1)/9,c=.19*(1-o)+.03*o,l=.19*(1-s)+.03*s,u=.085,d=a%2?r:n;e.add(Z(t.cyl(l,c,u,d,{seg:4,glow:n,glowDay:0,glowNight:.7}),0,i+u/2,0)),i+=u}e.add(Z(t.box(.22,.02,.22,n,{glow:n,glowNight:.7}),0,.28,0)),e.add(Z(t.box(.12,.02,.12,r),0,.5,0)),e.add(Z(t.cone(.012,.16,r,{seg:6,glow:`#ff6a2a`,glowNight:.9}),0,i+.08,0))},pagoda(e,t){let n=0;for(let r=0;r<5;r++){let i=.42-r*.06,a=.11;e.add(Z(t.box(i,a,i,`#B23A2C`,{windows:r<4}),0,n+a/2,0)),e.add(Z(t.box(i*1.34,.03,i*1.34,`#7A3B2A`),0,n+a+.015,0)),n+=.16999999999999998}e.add(Z(t.cyl(.012,.012,.1,`#E0C040`,{seg:6}),0,n+.05,0)),e.add(Z(t.sphere(.03,`#E0C040`,{seg:8,glow:`#ffe680`,glowNight:.8}),0,n+.12,0))},neonBillboard(e,t){let n=`#20242C`;e.add(Z(t.box(.3,1,.3,n,{windows:!0}),0,.5,0));let r=[`#5AE8E0`,`#E85AA0`,`#E8E06A`],i=(n,r,i,a,o,s,c)=>{let l=Z(t.box(n,r,.02,i,{glow:i,glowDay:.6,glowNight:1.1}),a,o,s);l.rotation.y=c,e.add(l)};i(.22,.34,r[0],0,.75,.16,0),i(.16,.5,r[1],.16,.5,0,Math.PI/2),i(.2,.22,r[2],0,.34,-.16,0),e.add(Z(t.cone(.01,.14,n,{seg:6,glow:`#E85AA0`,glowDay:.4,glowNight:1}),0,1.08,0))}};function Pt(e,t){let n=new f;return Nt[e](n,jt(t)),n}var Ft=``+new URL(`building-skyscraper-d-CapD2Zqe.glb`,import.meta.url).href,It=``+new URL(`building-n-hdv8kKtN.glb`,import.meta.url).href,Lt=``+new URL(`building-g-CsTB1qH9.glb`,import.meta.url).href,Rt=``+new URL(`colormap-CK8fW2HB.png`,import.meta.url).href,zt={skyscraper:{url:Ft,color:`#9cc1dd`,fill:.92},midrise:{url:It,color:`#c9a07a`,fill:.96},setback:{url:Lt,color:`#d9c7a0`,fill:.9}};function Bt({windowGlow:e}){let t=new ye;t.setURLModifier(e=>e.includes(`colormap.png`)?Rt:e);let n=new P(t),r={},i=!1,a=Promise.all(Object.entries(zt).map(async([e,t])=>{r[e]=(await n.loadAsync(t.url)).scene})).then(()=>{i=!0,window.__landmarksReady=!0}).catch(e=>console.error(`landmark models failed:`,e)),o=9e3;function s(t,n,i={}){let a,s;if(kt.includes(t))a=Pt(t,{windowGlow:e,winColors:i.winColors,litFrac:i.litFrac,id:()=>++o}),s=1;else{let e=r[t],n=zt[t];if(!e||!n)return null;a=e.clone(!0),s=n.fill}a.updateMatrixWorld(!0);let c=new oe().setFromObject(a).getSize(new B);a.scale.setScalar(n.h*s/c.y),a.updateMatrixWorld(!0);let l=new oe().setFromObject(a),u=l.getCenter(new B);return a.position.x+=n.x-u.x,a.position.z+=n.z-u.z,a.position.y+=n.plinthTop-l.min.y,kt.includes(t)?a.traverse(e=>{e.isMesh&&(e.castShadow=!1,e.raycast=()=>{})}):a.traverse(n=>{if(!n.isMesh)return;n.castShadow=!1,n.raycast=()=>{};let r=n=>Ge(n.clone(),{color:zt[t].color,id:++o,windowGlow:e,winColors:i.winColors,litFrac:i.litFrac});n.material=Array.isArray(n.material)?n.material.map(r):r(n.material)}),a}return{make:s,whenReady:a,heightFactor:e=>At[e]??1,get ready(){return i}}}var Q=[`clear`,`rain`,`snow`,`fog`];function Vt({extent:e=7}={}){let t=new f;t.raycast=()=>{};let n=e+2,r=.25,i=(e,t)=>e+Math.random()*(t-e),a=new d(new m(.015,.5),new y({color:`#a9bdd6`,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),600);a.frustumCulled=!1,a.raycast=()=>{};let o=new Float32Array(600*3),s=new Float32Array(600);for(let e=0;e<600;e++)o[e*3]=i(-n,n),o[e*3+1]=i(r,11),o[e*3+2]=i(-n,n),s[e]=i(9,14);let c=new d(new m(.07,.07),new y({color:`#f3f7ff`,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),700);c.frustumCulled=!1,c.raycast=()=>{};let l=new Float32Array(700*3),u=new Float32Array(700),p=new Float32Array(700);for(let e=0;e<700;e++)l[e*3]=i(-n,n),l[e*3+1]=i(r,11),l[e*3+2]=i(-n,n),u[e]=i(0,6.28),p[e]=i(.6,1.2);t.add(a,c);let h=Array.from({length:8},()=>new B),g=0,_=`clear`,v=0,b=0,x=0,S=0,C=0,w=new ce,T=(e,t,n,r)=>e+(t-e)*Math.min(1,n*r);function E(e){Q.includes(e)&&(_=e)}function D(){_=Q[(Q.indexOf(_)+1)%Q.length]}function O(e,t){let d=_===`rain`,f=_===`snow`,m=_===`fog`,y=_!==`clear`;v=T(v,+!!y,e,1.4),b=T(b,+!!y,e,1.2),x=T(x,+!!m,e,.9),C=T(C,y&&!m?1:0,e,1),S=T(S,+!!f,e,f?.22:.5);let E=d?v:0,D=Math.round(600*E);for(let t=0;t<600;t++){if(t>=D){w.position.set(0,-50,0),w.scale.setScalar(0),w.updateMatrix(),a.setMatrixAt(t,w.matrix);continue}o[t*3+1]-=s[t]*e,o[t*3]+=e*1.1,o[t*3+1]<r&&(o[t*3]=i(-n,n),o[t*3+1]=11,o[t*3+2]=i(-n,n)),w.position.set(o[t*3],o[t*3+1],o[t*3+2]),w.rotation.set(0,0,0),w.scale.set(1,1,1),w.updateMatrix(),a.setMatrixAt(t,w.matrix)}a.instanceMatrix.needsUpdate=!0,a.material.opacity=.55*E,g=d?Math.round(8*v):0;for(let e=0;e<g;e++)h[e].set(Math.random(),Math.random(),.05*v);let O=Math.round(700*(f?v:0));for(let a=0;a<700;a++){if(a>=O){w.position.set(0,-50,0),w.scale.setScalar(0),w.updateMatrix(),c.setMatrixAt(a,w.matrix);continue}l[a*3+1]-=p[a]*e;let o=Math.sin(t*1.5+u[a])*.5;l[a*3+1]<r&&(l[a*3]=i(-n,n),l[a*3+1]=11,l[a*3+2]=i(-n,n)),w.position.set(l[a*3]+o,l[a*3+1],l[a*3+2]),w.rotation.set(0,0,0),w.scale.setScalar(1),w.updateMatrix(),c.setMatrixAt(a,w.matrix)}c.instanceMatrix.needsUpdate=!0,c.material.opacity=.9*(f?v:0)}return{group:t,update:O,cycle:D,setKind:E,rainDrops:h,get kind(){return _},get intensity(){return v},get overcast(){return b},get fog(){return x},get snow(){return S},get cloud(){return C},get rainDropCount(){return g},poolCounts:{rain:600,snow:700}}}function $(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=(e,n,r)=>{let i=t.createRadialGradient(e,n,0,e,n,r);i.addColorStop(0,`rgba(255,255,255,0.95)`),i.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=i,t.beginPath(),t.arc(e,n,r,0,7),t.fill()};n(128*.42,128*.56,128*.26),n(128*.6,128*.5,128*.3),n(128*.5,128*.46,128*.22),n(128*.34,128*.54,128*.18),n(128*.7,128*.58,128*.18);let r=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5],i=t.getImageData(0,0,128,128),a=i.data;for(let e=0;e<128;e++)for(let t=0;t<128;t++){let n=(e*128+t)*4,i=a[n+3]/255,o=(r[e%4*4+t%4]+.5)/16-.5;a[n+3]=Math.max(0,Math.min(1,Math.floor(i*5+.5+o)/5))*255}t.putImageData(i,0,0);let o=new R(e);return o.colorSpace=de,o}function Ht({extent:e=8,count:t=16}={}){let n=new f;n.raycast=()=>{};let r=$(),i=e+6,a=(e,t)=>e+Math.random()*(t-e),o=[];for(let e=0;e<t;e++){let e=new N({map:r,transparent:!0,depthWrite:!1,opacity:0,fog:!0}),t=new I(e),s={sp:t,mat:e,wisp:Math.random(),x:a(-i,i),z:a(-i,i),hiY:a(4,6.8),loY:a(.6,2.2),w:a(3,5.6),h:a(1.7,3),speed:a(.25,.7),op:a(.6,1)};t.raycast=()=>{},o.push(s),n.add(t)}let s=new A,c=new A(`#ffffff`),l=new A(`#5b626e`);function u(e,t,n,r){let u=r?r.cloud:0,d=r?r.fog:0,f=Math.min(1,.4+.6*u+.5*d);s.copy(n.sky).lerp(c,.62),s.lerp(l,.6*u);for(let n=0;n<o.length;n++){let r=o[n],c=n/o.length<f;r.x+=r.speed*e*(.6+.8*u),r.x>i&&(r.x=-i,r.z=a(-i,i));let l=Math.min(Ut(r.x,-i,-i+3),1-Ut(r.x,i-3,i)),p=r.hiY*(1-d)+r.loY*d,m=1-.5*r.wisp,h=.72*Math.max(0,1-d-u)+1*u+.42*d,g=c?Math.max(0,h)*r.op*m*l:0;r.mat.opacity+=(g-r.mat.opacity)*Math.min(1,e*2.5),r.mat.color.copy(s);let _=r.w*(1+.6*d)*(1+.4*r.wisp),v=r.h*(1-.35*d);r.sp.scale.set(_,v,1),r.sp.position.set(r.x,p+Math.sin(t*.3+n)*.15,r.z)}}function d(e){r=e;for(let t of o)t.mat.map=e,t.mat.needsUpdate=!0}let p=o.map((e,t)=>({kind:`cloud`,label:`cloud ${t+1}`,getWorldPos:t=>t.copy(e.sp.position),active:()=>e.mat.opacity>.06,info:()=>`cloud · ${e.wisp>.6?`wispy`:`puffy`} · drifting east${e.sp.position.y<3?` (low mist)`:``}`}));function m(){return p}return{group:n,update:u,setTexture:d,getFollowables:m,get count(){return o.length}}}function Ut(e,t,n){let r=Math.max(0,Math.min(1,(e-t)/(n-t)));return r*r*(3-2*r)}var Wt={person:4.5,car:6,gull:6,fish:8,boat:9,cloud:16};function Gt({rig:e,getCamera:t,sources:n=[]}){let r=null,i=new B,a=new B,o=()=>{let e=[];for(let t of n)if(t&&t.getFollowables){let n=t.getFollowables();n&&e.push(...n)}return e},s=e=>!e.active||e.active();function c(t){return t?(r=t,e.setFollow(e=>t.getWorldPos(e),{frame:t.frame??Wt[t.kind]??8}),t):null}function l(){r=null,e.clearFollow()}function u(e,n,r=.14){let l=t(),u=null,d=r;for(let t of o()){if(!s(t)||(t.getWorldPos(i),a.copy(i).project(l),a.z>1||a.z<-1))continue;let r=Math.hypot(a.x-e,a.y-n);r<d&&(d=r,u=t)}return u?c(u):null}function d(e=1,t=null){let n=o().filter(e=>(!t||e.kind===t)&&s(e));if(t||(n=Kt(n)),!n.length)return null;let i=r?n.indexOf(r):-1;return i=((i+e)%n.length+n.length)%n.length,c(n[i])}function f(){r&&r.active&&!r.active()&&l()}return{pickAt:u,cycle:d,follow:c,release:l,prune:f,get focus(){return r},get count(){return o().length},get readout(){return r?{kind:r.kind,label:r.label,info:r.info?r.info():``}:null}}}function Kt(e){let t=new Map;for(let n of e)t.has(n.kind)||t.set(n.kind,[]),t.get(n.kind).push(n);let n=[...t.values()],r=[];for(let e=0,t=!0;t;e++){t=!1;for(let i of n)e<i.length&&(r.push(i[e]),t=!0)}return r}function qt(){let e=document.createElement(`canvas`);e.width=256,e.height=64;let t=e.getContext(`2d`);t.strokeStyle=`#ffffff`,t.lineWidth=6,t.lineCap=`round`,t.lineJoin=`round`;let n=[14,24,36,24];for(let e=0;e<4;e++){let r=e*64,i=n[e];t.beginPath(),t.moveTo(r+8,40),t.quadraticCurveTo(r+24,i,r+32,36),t.quadraticCurveTo(r+40,i,r+56,40),t.stroke()}let r=new R(e);return r.colorSpace=de,r}function Jt(){let e=document.createElement(`canvas`);e.width=e.height=96;let t=e.getContext(`2d`),n=(e,n,r)=>{let i=t.createRadialGradient(e,n,0,e,n,r);i.addColorStop(0,`rgba(255,255,255,0.95)`),i.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=i,t.beginPath(),t.arc(e,n,r,0,7),t.fill()};n(96*.42,96*.56,96*.26),n(96*.6,96*.5,96*.3),n(96*.5,96*.46,96*.22),n(96*.7,96*.58,96*.18);let r=new R(e);return r.colorSpace=de,r}function Yt(){let e=new f,t=new _(new L(.46,.2,1.1),q(new i({color:`#5a6675`,roughness:.6,metalness:.2,flatShading:!0}),{color:`#5a6675`}));t.position.y=.02;let n=new _(new L(.3,.22,.42),q(new i({color:`#e7ecf2`,roughness:.7,flatShading:!0}),{color:`#e7ecf2`}));return n.position.set(0,.18,.08),e.add(t,n),e.traverse(e=>{e.isMesh&&(e.castShadow=!0),e.raycast=()=>{}}),e}function Xt(){let e=new _(new O(.18,9,7),q(new i({color:`#5b6f86`,roughness:.5,flatShading:!0}),{color:`#5b6f86`}));return e.scale.set(.55,.5,1),e.raycast=()=>{},e}function Zt(){let e=new f,t=new _(new L(.18,.34,.14),q(new i({color:`#3b6ea5`,roughness:.8,flatShading:!0}),{color:`#3b6ea5`}));t.position.y=.17;let n=new _(new L(.13,.13,.13),q(new i({color:`#e3b98c`,roughness:.8,flatShading:!0}),{color:`#e3b98c`}));return n.position.y=.41,e.add(t,n),e.traverse(e=>{e.isMesh&&(e.castShadow=!0),e.raycast=()=>{}}),e}function Qt({heightAt:e,seaSurfaceY:n=0,waterY:r=.06}={}){let i=new f;i.raycast=()=>{};let a=e||(()=>0),o=[],s=[],c={gull:0,boat:0,fish:0,cloud:0,person:0},l=bt({frames:4,fps:7}),u=qt(),d=Jt(),p=[`#ffffff`,`#cfd4da`,`#c8a06a`];function m(e,i,o,s){let f=(c[e]||0)*1.7+(s.phase||0);if(e===`gull`){let n=l.makeInstanceTexture(u),r=new I(new N({map:n,color:new A(p[c.gull%3]),transparent:!0,opacity:.9,depthWrite:!1,fog:!0}));r.scale.setScalar(.5),r.raycast=()=>{};let s=i,d=o,m=1.4+Math.random()*.6,h=a(i,o)+2.4,g=.5+Math.random()*.3;return{kind:e,obj:r,x:i,z:o,update(e,n,i){let a=f+n*g;r.position.set(s+Math.cos(a)*m,h+Math.sin(n*1.4+f)*.12,d+Math.sin(a)*m),l.step(r.material.map,n,f);let o=i?1-i.windowGlow:1;r.material.opacity=t.clamp(.25+o*.7,0,.95)},info:()=>`gull · circling`,dispose(){n.dispose()}}}if(e===`cloud`){let t=new I(new N({map:d,transparent:!0,opacity:.85,depthWrite:!1,fog:!0}));t.scale.set(3.4,1.9,1),t.raycast=()=>{};let n=i,r=o,a=5+Math.random()*1.4,s=.12+Math.random()*.1;return{kind:e,obj:t,x:i,z:o,update(e,i,o){t.position.set(n+Math.sin(i*.18+f)*1.2,a+Math.sin(i*.3+f)*.18,r+s*Math.cos(i*.1+f)),o&&o.sky&&t.material.color.copy(o.sky).lerp($t,.62)},info:()=>`cloud · drifting`}}if(e===`boat`){let t=Yt();t.position.set(i,r,o);let n=i,a=o,s=Math.random()*Math.PI*2;return{kind:e,obj:t,x:i,z:o,update(e,c){s+=Math.sin(c*.3+f)*.4*e;let l=.6;n+=Math.sin(s)*l*e,a+=Math.cos(s)*l*e,n+=(i-n)*.4*e,a+=(o-a)*.4*e;let u=Math.sin(c*1.1+f)*.025;t.position.set(n,r+u,a),t.rotation.set(Math.sin(c*.9+f)*.04,s,0)},info:()=>`boat · drifting`}}if(e===`fish`){let t=Xt();t.position.set(i,-5,o);let n=6+Math.random()*5,a=Math.random()*Math.PI*2,s=Math.random()*n,c={kind:e,obj:t,x:i,z:o,active:!0,update(e){if(s+=e,s>=n){let e=(s-n)/1.3;if(e>=1){s=0,t.position.set(i,-5,o),c.active=!1;return}let l=Math.sin(Math.PI*e);t.position.set(i+Math.sin(a)*(e-.5)*1,r-.1+l*.5,o+Math.cos(a)*(e-.5)*1),t.rotation.set(Math.cos(Math.PI*e)*.9,a,0),c.active=!0}else c.active=!1},info:()=>c.active?`fish · breaching!`:`fish · below`};return c}if(e===`person`){let t=Zt();t.position.set(i,a(i,o),o);let r=Math.random()*Math.PI*2;return{kind:e,obj:t,x:i,z:o,update(e,s){r+=(Math.random()-.5)*1.4*e;let c=.55,l=t.position.x+Math.sin(r)*c*e,u=t.position.z+Math.cos(r)*c*e,d=l+(i-l)*.25*e,f=u+(o-u)*.25*e;a(d,f)<n+.02&&(r+=Math.PI,d=t.position.x,f=t.position.z),t.position.set(d,a(d,f),f),t.rotation.y=r},info:()=>`person · wandering`}}return null}function h(e){return c[e]=(c[e]||0)+1,`${e} ${c[e]}`}function g(e,t,n,r={}){let a=m(e,t,n,r);if(!a)return null;a.opts=r,o.push(a),i.add(a.obj);let c={kind:e,label:h(e),getWorldPos:e=>e.copy(a.obj.position),active:()=>a.active!==!1,info:()=>a.info()};return a.followable=c,s.push(c),a}function _(e){if(!e)return!1;let t=o.indexOf(e);if(t<0)return!1;i.remove(e.obj),e.dispose&&e.dispose(),o.splice(t,1);let n=s.indexOf(e.followable);return n>=0&&s.splice(n,1),!0}function v(e,t,n=2.5){let r=null,i=n*n;for(let n of o){let a=n.obj.position.x-e,o=n.obj.position.z-t,s=a*a+o*o;s<i&&(i=s,r=n)}if(!r)return null;let a={kind:r.kind,x:r.x,z:r.z,opts:r.opts};return _(r),a}function y(e,t,n){for(let r=0;r<o.length;r++)o[r].update(e,t,n);typeof window<`u`&&(window.__placedLife=b())}function b(){let e={gull:0,boat:0,fish:0,cloud:0,person:0,total:o.length};for(let t of o)e[t.kind]++;return e}function x(){return s}function S(){return o.map(e=>({kind:e.kind,x:e.x,z:e.z,opts:e.opts}))}function C(){for(let e of[...o])_(e)}function w(e){if(C(),e)for(let t of e)g(t.kind,t.x,t.z,t.opts||{})}return{group:i,update:y,spawn:g,despawn:_,removeNear:v,getFollowables:x,snapshot:S,restore:w,clear:C,counts:b,get count(){return o.length}}}var $t=new A(`#ffffff`),en=[{id:`place`,label:`Place`,icon:`✚`,key:`1`},{id:`sculpt`,label:`Sculpt`,icon:`⛰`,key:`2`},{id:`paint`,label:`Paint`,icon:`🎨`,key:`3`},{id:`scatter`,label:`Objects`,icon:`🌲`,key:`4`},{id:`select`,label:`Select`,icon:`◳`,key:`5`}],tn=[`tree`,`rock`,`tuft`],nn=[`gull`,`boat`,`fish`,`cloud`,`person`],rn=(e,t,n)=>e<t?t:e>n?n:e;function an({world:e,catalog:t,inspector:n}={}){let r=`sculpt`,i=1,a=!1,o={radius:2.2,strength:.05,density:.6,dropN:1},s={biome:2,scatter:`tree`,entity:`gull`},c=null,l=!1;function u(e){return en.some(t=>t.id===e)&&(r=e),r}function d(e){let t=en.find(t=>t.key===e);return t&&(r=t.id),r}function f(){return i=-i,i}function p(e){return o.radius=rn(e,.8,6),o.radius}function m(e){return o.strength=rn(e,.01,.15),o.strength}function h(e){return o.density=rn(e,.1,1),o.density}function g(e){return o.dropN=[1,10,50].includes(e)?e:1,o.dropN}function _(e){return s.biome=e|0,s.biome}function v(e){return tn.includes(e)&&(s.scatter=e),s.scatter}function y(e){return nn.includes(e)&&(s.entity=e),s.entity}function b(e){let n=t&&t.get(e);return n?n.kind===`material`?_(n.defaults.colorIndex??s.biome):n.kind===`scatter`?v(n.defaults.geoKey):n.kind===`entity`?y(e.replace(`ent-`,``)):null:null}function x(t,n,r){let i=0;for(let a=0;a<r;a++){let r=Math.random()*Math.PI*2,a=Math.sqrt(Math.random())*o.radius;e.placeEntity(s.entity,t+Math.cos(r)*a,n+Math.sin(r)*a)&&i++}return i}function S(t,n,r){if(r<0){e.removeEntityNear(t,n,o.radius),c={x:t,z:n};return}if(o.dropN>1){l&&=(x(t,n,o.dropN),!1);return}(!c||Math.hypot(t-c.x,n-c.z)>=o.radius*.7)&&(e.placeEntity(s.entity,t,n),c={x:t,z:n})}function C(t,n,i){i!==0&&(r===`paint`?e.paintBiome(t,n,s.biome,o.radius):r===`scatter`?e.paintScatter(t,n,{type:s.scatter,density:o.density,radius:o.radius,erase:i<0}):r===`place`?S(t,n,i):r===`sculpt`&&e.sculpt(t,n,i,o.radius,o.strength))}let w=()=>r!==`select`;function T(){w()&&e.snapshot(),l=!0,c=null}function E(){c=null}function D(e,t){return n?n.pickAt(e,t):null}function O(){return e.undo()}function ee(){return e.snapshot()}function k(){return a=!a,e.setScatterHidden&&e.setScatterHidden(a),a}return{get tools(){return en},placeKinds:nn,get tool(){return r},setTool:u,setToolByKey:d,get dir(){return i},get raise(){return i>0},toggleDir:f,brush:o,setRadius:p,setStrength:m,setDensity:h,setDropN:g,get selection(){return{...s}},get material(){return s.biome},get scatterType(){return s.scatter},get entity(){return s.entity},setMaterial:_,setScatter:v,setEntity:y,select:b,applyAt:C,beginStroke:T,endStroke:E,pickAt:D,dropEntities:x,undo:O,snapshot:ee,get canUndo(){return e.canUndo},get scatterHidden(){return a},toggleHideScatter:k}}function on(e){let t=J(e>>>0),n=new Uint8Array(256);for(let e=0;e<256;e++)n[e]=e;for(let e=255;e>0;e--){let r=t()*(e+1)|0,i=n[e];n[e]=n[r],n[r]=i}let r=new Uint8Array(512);for(let e=0;e<512;e++)r[e]=n[e&255];let i=e=>e*e*e*(e*(e*6-15)+10),a=(e,t,n)=>e+(t-e)*n,o=(e,t,n)=>{let r=e&4?n:t,i=e&4?t:n;return(e&1?-r:r)+(e&2?-i:i)};return(e,t)=>{let n=Math.floor(e)&255,s=Math.floor(t)&255,c=e-Math.floor(e),l=t-Math.floor(t),u=i(c),d=i(l),f=r[r[n]+s],p=r[r[n]+s+1],m=r[r[n+1]+s],h=r[r[n+1]+s+1];return a(a(o(f,c,l),o(m,c-1,l),u),a(o(p,c,l-1),o(h,c-1,l-1),u),d)}}function sn(e,t,n,r,i,a){let o=.5,s=1,c=0,l=0;for(let u=0;u<r;u++)c+=o*e(t*s,n*s),l+=o,o*=a,s*=i;return c/l}function cn(e,t,n,r,i,a){let o=.5,s=1,c=0,l=0;for(let u=0;u<r;u++){let r=1-Math.abs(e(t*s,n*s));r*=r,c+=o*r,l+=o,o*=a,s*=i}return c/l}var ln=(e,t,n)=>(n=Math.max(0,Math.min(1,(n-e)/(t-e))),n*n*(3-2*n)),un=[{key:`ocean`,color:`#2a5b7a`},{key:`beach`,color:`#d8c89a`},{key:`grassland`,color:`#6f9a4e`},{key:`forest`,color:`#3f6b3a`},{key:`hills`,color:`#8a8a55`},{key:`rock`,color:`#7d7468`},{key:`snow`,color:`#eef2f6`}],dn=Object.fromEntries(un.map((e,t)=>[e.key,t]));function fn(e,t,n){if(e<n-.015)return dn.ocean;if(e<n+.02)return dn.beach;let r=(e-n)/(1-n);return r>.82?dn.snow:r>.6?dn.rock:r>.34?t>.45?dn.forest:dn.hills:t>.55?dn.forest:dn.grassland}var pn={valley:{freq:2.3,mtnMask:.3,mtnGain:.55,sea:.3,relief:7.5,warp:.9},archipelago:{freq:3.4,mtnMask:.18,mtnGain:.4,sea:.5,relief:6,warp:1.3},mountains:{freq:2,mtnMask:.62,mtnGain:.85,sea:.26,relief:11,warp:.8},plains:{freq:1.8,mtnMask:.12,mtnGain:.3,sea:.28,relief:4.5,warp:.7}},mn=Object.keys(pn);function hn({seed:e=1,size:t=160,preset:n=`valley`,params:r=null}={}){let i=r||pn[n]||pn.valley,a=on(e*2+1),o=on(e*5+9),s=on(e*7+13),c=on(e*3+5),l=new Float32Array(t*t),u=new Uint8Array(t*t),d=1/0,f=-1/0;for(let e=0;e<t;e++)for(let n=0;n<t;n++){let r=(n/t-.5)*i.freq,p=(e/t-.5)*i.freq,m=r+i.warp*sn(c,r+5.2,p+1.3,4,2,.5),h=p+i.warp*sn(c,r+9.7,p+4.1,4,2,.5),g=sn(a,m,h,6,2,.5)*.5+.5,_=ln(.45,.75,sn(o,r*.5,p*.5,3,2,.5)*.5+.5),v=cn(a,m*1.7+11,h*1.7+7,5,2,.5);g=g*(1-_*i.mtnMask)+v*(_*i.mtnMask*(.6+i.mtnGain));let y=n/t-.5,b=e/t-.5,x=Math.sqrt(y*y+b*b)*2;g-=ln(.62,1,x)*.55,g=Math.max(0,Math.min(1,g));let S=sn(s,r*.8+3,p*.8+8,4,2,.5)*.5+.5,C=e*t+n;l[C]=g,u[C]=fn(g,S,i.sea),g<d&&(d=g),g>f&&(f=g)}return{size:t,height:l,biome:u,sea:i.sea,relief:i.relief,minH:d,maxH:f,params:i,seed:e,preset:n}}var gn=un.map(e=>new A(e.color)),_n=new A,vn=new B,yn=new B,bn=new B;function xn(e,t,n,r,i,a,o){let{size:s,height:c,biome:l,sea:u,relief:d}=e,{cell:f,half:p,baseY:m}=t,h=e=>e*f-p,g=e=>e*f-p,_=e=>m+(e-u)*d,v=0,y=(e,t,n,s,c,l,u,d,f,p)=>{vn.set(s-e,c-t,l-n),yn.set(u-e,d-t,f-n),bn.crossVectors(vn,yn).normalize();for(let[m,h,g]of[[e,t,n],[s,c,l],[u,d,f]])r[v*3]=m,r[v*3+1]=h,r[v*3+2]=g,i[v*3]=bn.x,i[v*3+1]=bn.y,i[v*3+2]=bn.z,o&&(a[v*3]=p.r,a[v*3+1]=p.g,a[v*3+2]=p.b),v++};for(let e=n.j0;e<n.j1;e++)for(let t=n.i0;t<n.i1;t++){let n=h(t),r=h(t+1),i=g(e),a=g(e+1),o=_(c[e*s+t]),u=_(c[e*s+t+1]),d=_(c[(e+1)*s+t]),f=_(c[(e+1)*s+t+1]),p=gn[l[e*s+t]],m=gn[l[(e+1)*s+t+1]];y(n,o,i,n,d,a,r,u,i,_n.copy(p)),y(r,u,i,n,d,a,r,f,a,_n.copy(m))}}function Sn(e,{worldSize:t=26,baseY:n=0,chunks:r=4}={}){let{size:a}=e,o=new f,s={cell:t/(a-1),half:t/2,baseY:n};o.userData.world=s;let c=Math.ceil((a-1)/r);for(let t=0;t<r;t++)for(let n=0;n<r;n++){let r=n*c,l=t*c,u=Math.min(r+c,a-1),d=Math.min(l+c,a-1);if(u<=r||d<=l)continue;let f={i0:r,j0:l,i1:u,j1:d},p=(u-r)*(d-l)*6,m=new Float32Array(p*3),h=new Float32Array(p*3),g=new Float32Array(p*3);xn(e,s,f,m,h,g,!0);let v=new ie;v.setAttribute(`position`,new T(m,3)),v.setAttribute(`normal`,new T(h,3)),v.setAttribute(`color`,new T(g,3)),v.computeBoundingSphere();let y=new _(v,new i({vertexColors:!0,roughness:.92,metalness:0,flatShading:!0}));y.castShadow=!0,y.receiveShadow=!0,y.userData.chunk=f,o.add(y)}return o.userData.dispose=()=>o.traverse(e=>{e.isMesh&&(e.geometry.dispose(),e.material.dispose())}),o}function Cn(e,t,n,r=!1){let i=e.userData.world;for(let e of n){let n=e.geometry;xn(t,i,e.userData.chunk,n.attributes.position.array,n.attributes.normal.array,n.attributes.color.array,r),n.attributes.position.needsUpdate=!0,n.attributes.normal.needsUpdate=!0,r&&(n.attributes.color.needsUpdate=!0),n.computeBoundingSphere()}}var wn={beach:[{type:`rock`,density:.05,maxSlope:1.4}],grassland:[{type:`tree`,density:.1,maxSlope:.7},{type:`tuft`,density:.3,maxSlope:.9}],forest:[{type:`tree`,density:.62,maxSlope:.8},{type:`rock`,density:.03,maxSlope:1.2}],hills:[{type:`tree`,density:.14,maxSlope:.7},{type:`rock`,density:.16,maxSlope:1.6}],rock:[{type:`rock`,density:.22,maxSlope:2}]};function Tn({terrain:e,seed:t=1,worldSize:n=26,baseY:r=0,biomeKeys:i,density:a=1,max:o=9e3}={}){let{size:s,height:c,biome:l,sea:u,relief:d}=e,f=J((t^97155048)>>>0),p=n/(s-1),m=n/2,h=e=>r+(e-u)*d,g=(e,t)=>{let n=Math.max(1,Math.min(s-2,e)),r=Math.max(1,Math.min(s-2,t)),i=(c[r*s+n+1]-c[r*s+n-1])*d/(2*p),a=(c[(r+1)*s+n]-c[(r-1)*s+n])*d/(2*p);return Math.hypot(i,a)},_={tree:[],rock:[],tuft:[]};for(let e=1;e<s-1;e+=2)for(let t=1;t<s-1;t+=2){let n=e*s+t,r=c[n];if(r<u+.005)continue;let d=wn[i[l[n]]];if(!d)continue;let v=g(t,e);for(let n of d){let i=f();if(v>n.maxSlope||i>n.density*a)continue;let s=_[n.type];if(s.length>=o)continue;let c=(f()-.5)*p*2,l=(f()-.5)*p*2,u=t*p-m+c,d=e*p-m+l;s.push({x:u,y:h(r),z:d,s:.7+f()*.6,r:f()*Math.PI*2,t:.82+f()*.36})}}return{placements:_,counts:{tree:_.tree.length,rock:_.rock.length,tuft:_.tuft.length}}}function En(e,t){let n=new A(t),r=e.attributes.position.count,i=new Float32Array(r*3);for(let e=0;e<r;e++)i[e*3]=n.r,i[e*3+1]=n.g,i[e*3+2]=n.b;return e.setAttribute(`color`,new T(i,3)),e}function Dn(e){let t=0;for(let n of e)t+=n.attributes.position.count;let n=new Float32Array(t*3),r=new Float32Array(t*3),i=new Float32Array(t*3),a=0;for(let t of e)n.set(t.attributes.position.array,a*3),r.set(t.attributes.normal.array,a*3),i.set(t.attributes.color.array,a*3),a+=t.attributes.position.count;let o=new ie;return o.setAttribute(`position`,new T(n,3)),o.setAttribute(`normal`,new T(r,3)),o.setAttribute(`color`,new T(i,3)),o}function On(){return Dn([En(new he(.045,.06,.34,6).translate(0,.17,0).toNonIndexed(),`#5b3f28`),En(new S(.3,.55,7).translate(0,.55,0).toNonIndexed(),`#3f7d3a`),En(new S(.22,.42,7).translate(0,.85,0).toNonIndexed(),`#4f9046`)])}function kn(){let e=new ne(.18,0).toNonIndexed(),t=e.attributes.position,n=J(3098);for(let e=0;e<t.count;e++){let r=.78+n()*.5;t.setXYZ(e,t.getX(e)*r,t.getY(e)*r*.8,t.getZ(e)*r)}return e.computeVertexNormals(),En(e,`#7d7468`)}function An(){return En(new S(.06,.16,4).translate(0,.08,0).toNonIndexed(),`#6f9a4e`)}var jn=[`tree`,`rock`,`tuft`],Mn={tree:0,rock:-.05,tuft:0},Nn=new a,Pn=new F,Fn=new B,In=new B,Ln=new B(0,1,0),Rn=new A;function zn(e){let t=new f;t.raycast=()=>{};let n={tree:On(),rock:kn(),tuft:An()};for(let r of jn){let a=e[r]||(e[r]=[]),o=Math.max(a.length*2,512),s=new i({vertexColors:!0,roughness:.9,metalness:0,flatShading:!0}),c=new d(n[r],s,o);c.count=a.length,c.castShadow=!0,c.receiveShadow=!1,c.frustumCulled=!0,c.raycast=()=>{},c.userData.type=r,c.instanceColor=new u(new Float32Array(o*3),3);for(let e=0;e<a.length;e++)Bn(c,e,a[e],Mn[r]);c.instanceMatrix.needsUpdate=!0,c.instanceColor.needsUpdate=!0,t.add(c)}return t.userData.placements=e,t.userData.yoff=Mn,t.userData.dispose=()=>t.traverse(e=>{e.isInstancedMesh&&(e.geometry.dispose(),e.material.dispose())}),t}function Bn(e,t,n,r){Fn.set(n.x,n.y+(r||0),n.z),Pn.setFromAxisAngle(Ln,n.r),In.setScalar(n.s),e.setMatrixAt(t,Nn.compose(Fn,Pn,In)),e.setColorAt(t,Rn.setScalar(n.t))}var Vn=(e,t)=>e.children.find(e=>e.isInstancedMesh&&e.userData.type===t);function Hn(e,t){let n=t.instanceMatrix.count*2,r=new d(t.geometry,t.material,n);return r.count=t.count,r.castShadow=!0,r.receiveShadow=!1,r.frustumCulled=!0,r.raycast=()=>{},r.userData.type=t.userData.type,r.instanceColor=new u(new Float32Array(n*3),3),r.instanceMatrix.array.set(t.instanceMatrix.array.subarray(0,t.count*16)),r.instanceColor.array.set(t.instanceColor.array.subarray(0,t.count*3)),r.instanceMatrix.needsUpdate=!0,r.instanceColor.needsUpdate=!0,e.remove(t),e.add(r),r}function Un(e,t,n,r,i,a,o,s){let c=Vn(e,t);if(!c)return!1;let l=e.userData.placements[t];l.length>=c.instanceMatrix.count&&(c=Hn(e,c));let u=l.length;return l.push({x:n,y:r,z:i,s:a,r:o,t:s}),Bn(c,u,l[u],(e.userData.yoff||{})[t]||0),c.count=l.length,c.instanceMatrix.needsUpdate=!0,c.instanceColor.needsUpdate=!0,!0}function Wn(e,t,n,r,i){let a=t===`all`?jn:[t],o=i*i,s=0;for(let t of a){let i=Vn(e,t);if(!i)continue;let a=e.userData.placements[t],c=i.instanceMatrix.array,l=i.instanceColor&&i.instanceColor.array;for(let e=a.length-1;e>=0;e--){let t=a[e];if((t.x-n)*(t.x-n)+(t.z-r)*(t.z-r)>o)continue;let i=a.length-1;if(e!==i){a[e]=a[i];for(let t=0;t<16;t++)c[e*16+t]=c[i*16+t];if(l)for(let t=0;t<3;t++)l[e*3+t]=l[i*3+t]}a.pop(),s++}i.count=a.length,i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0)}return s}var Gn={tree:.85,rock:2,tuft:.95};function Kn(e,t,{worldSize:n=26,baseY:r=0}={}){let i=e.userData.placements,o=e.userData.yoff||{};if(!i)return;let{size:s,height:c,sea:l,relief:u}=t,d=n/(s-1),f=n/2,p=e=>e<0?0:e>=s?s-1:e,m=(e,t)=>c[p(Math.round((t+f)/d))*s+p(Math.round((e+f)/d))],h=(e,t)=>{let n=Math.max(1,Math.min(s-2,Math.round((e+f)/d))),r=Math.max(1,Math.min(s-2,Math.round((t+f)/d))),i=(c[r*s+n+1]-c[r*s+n-1])*u/(2*d),a=(c[(r+1)*s+n]-c[(r-1)*s+n])*u/(2*d);return Math.hypot(i,a)},g=new a,_=new F,v=new B,y=new B,b=new B(0,1,0),x=new A;for(let t of e.children){let e=t.userData.type,n=i[e];if(!n||!t.isInstancedMesh)continue;let a=Gn[e]??1.5,s=t.instanceMatrix.count,c=Math.min(n.length,s);t.count=c;for(let i=0;i<c;i++){let s=n[i],c=m(s.x,s.z),d=c<l+.005||h(s.x,s.z)>a;v.set(s.x,r+(c-l)*u+(o[e]||0),s.z),_.setFromAxisAngle(b,s.r),y.setScalar(d?0:s.s),g.compose(v,_,y),t.setMatrixAt(i,g),t.setColorAt(i,x.setScalar(s.t))}t.instanceMatrix.needsUpdate=!0,t.instanceColor&&(t.instanceColor.needsUpdate=!0)}}function qn({terrain:e,seed:t,worldSize:n,baseY:r,biomeKeys:i,density:a,max:o}){let{placements:s,counts:c}=Tn({terrain:e,seed:t,worldSize:n,baseY:r,biomeKeys:i,density:a,max:o}),l=zn(s);return l.userData.counts=c,l}function Jn(e,{worldSize:t=26,baseY:n=0,maxLakes:r=3}={}){let{size:i,height:a,sea:o,relief:s,maxH:c}=e,l=Math.floor((i-1)/3),u=t/(i-1),d=t/2,f=(e,t)=>a[t*3*i+e*3],p=e=>e*3*u-d,m=e=>e*3*u-d,h=e=>e>o+.02,g=o+.55*Math.max(.001,c-o),_=[];for(let e=2;e<l-2;e++)for(let t=2;t<l-2;t++){let n=f(t,e);if(!h(n)||n>g)continue;let r=!0;for(let i=-1;i<=1&&r;i++)for(let a=-1;a<=1;a++)if((a||i)&&f(t+a,e+i)<n){r=!1;break}r&&_.push({gi:t,gj:e,h:n})}_.sort((e,t)=>e.h-t.h);let v=new Uint8Array(l*l),y=[];for(let e of _){if(y.length>=r)break;if(v[e.gj*l+e.gi])continue;let t=e.h+.045,i=[[e.gi,e.gj]],a=new Set,c=!0,d=0,h=0,g=0,_=[];for(;i.length;){let[e,n]=i.pop(),r=n*l+e;if(a.has(r))continue;if(a.add(r),e<=0||e>=l-1||n<=0||n>=l-1){c=!1;continue}let s=f(e,n);if(s<o){c=!1;continue}if(!(s>=t)){if(_.push(r),d+=e,h+=n,g++,g>520){c=!1;break}i.push([e+1,n],[e-1,n],[e,n+1],[e,n-1])}}if(!c||g<5)continue;for(let e of _)v[e]=1;let b=d/g,x=h/g,S=3*u,C=g*S*S,w=.82*Math.sqrt(C/Math.PI);y.push({cx:p(b),cz:m(x),y:n+(t-o)*s,radius:w,area:C})}return y}function Yn(e,{material:t}={}){let n=new f;n.raycast=()=>{};let r=t||new i({color:`#3f6f8c`,roughness:.08,metalness:.35,transparent:!0,opacity:.88});for(let t of e){let e=new _(new se(t.radius,28),r);e.rotation.x=-Math.PI/2,e.position.set(t.cx,t.y+.012,t.cz),e.receiveShadow=!1,e.castShadow=!1,e.raycast=()=>{},n.add(e)}return n.userData.dispose=()=>n.traverse(e=>{e.isMesh&&e.geometry.dispose()}),n.userData.count=e.length,n}function Xn(e,t={}){let n=Jn(e,t),r=Yn(n,t);return r.userData.lakes=n,r}function Zn(){let e=new Map,t={register(n){return!n||!n.id?t:(n.art=n.art||{},n.defaults=n.defaults||{},e.set(n.id,n),t)},registerAll(e){for(let n of e)t.register(n);return t},get(t){return e.get(t)},byKind(t){return[...e.values()].filter(e=>e.kind===t)},byGroup(t){return[...e.values()].filter(e=>e.group===t)},all(){return[...e.values()]},setArt(n,r){let i=e.get(n);return i&&(i.art={...i.art,...r}),t},get size(){return e.size}};return t}function Qn(e=Zn()){return un.forEach((t,n)=>e.register({id:`mat-${t.key}`,label:$n(t.key),kind:`material`,group:`Terrain`,defaults:{colorIndex:n},art:{icon:t.color,placeholder:!0}})),e.registerAll([{id:`scatter-tree`,label:`Tree`,kind:`scatter`,group:`Vegetation`,defaults:{geoKey:`tree`,density:.4,maxSlope:.85},art:{icon:`🌲`,factory:null,placeholder:!0}},{id:`scatter-rock`,label:`Rock`,kind:`scatter`,group:`Rock`,defaults:{geoKey:`rock`,density:.2,maxSlope:2},art:{icon:`🪨`,factory:null,placeholder:!0}},{id:`scatter-tuft`,label:`Grass tuft`,kind:`scatter`,group:`Vegetation`,defaults:{geoKey:`tuft`,density:.3,maxSlope:.95},art:{icon:`🌱`,factory:null,placeholder:!0}}]),e.registerAll([{id:`ent-person`,label:`Person`,kind:`entity`,group:`Life`,defaults:{medium:`ground`},art:{icon:`🚶`,placeholder:!0}},{id:`ent-car`,label:`Car`,kind:`entity`,group:`Life`,defaults:{medium:`road`},art:{icon:`🚗`,placeholder:!0}},{id:`ent-boat`,label:`Boat`,kind:`entity`,group:`Life`,defaults:{medium:`water`},art:{icon:`⛵`,placeholder:!0}},{id:`ent-fish`,label:`Fish`,kind:`entity`,group:`Life`,defaults:{medium:`water`},art:{icon:`🐟`,placeholder:!0}},{id:`ent-gull`,label:`Gull`,kind:`entity`,group:`Life`,defaults:{medium:`air`},art:{icon:`🕊`,placeholder:!0}},{id:`ent-cloud`,label:`Cloud`,kind:`entity`,group:`Sky`,defaults:{medium:`air`},art:{icon:`☁️`,placeholder:!0}}]),e}var $n=e=>e.charAt(0).toUpperCase()+e.slice(1);function er({scale:e=90}={}){let t=new fe;t.scale.setScalar(e),t.frustumCulled=!1,t.raycast=()=>{},t.visible=!1;let n=t.material.uniforms;n.turbidity.value=2.2,n.rayleigh.value=1.3,n.mieCoefficient.value=.005,n.mieDirectionalG.value=.78;function r(e){n.sunPosition.value.copy(e)}function i(e){e&&(e.turbidity!=null&&(n.turbidity.value=e.turbidity),e.rayleigh!=null&&(n.rayleigh.value=e.rayleigh),e.mie!=null&&(n.mieCoefficient.value=e.mie),e.mieG!=null&&(n.mieDirectionalG.value=e.mieG))}let a=null,o=null,s=null,c=null;function l(t){if(typeof document>`u`||!t)return null;a||(a=new le(t),o=new E,s=new fe,s.scale.setScalar(e),o.add(s));let r=s.material.uniforms;return r.turbidity.value=n.turbidity.value,r.rayleigh.value=n.rayleigh.value,r.mieCoefficient.value=n.mieCoefficient.value,r.mieDirectionalG.value=n.mieDirectionalG.value,r.sunPosition.value.copy(n.sunPosition.value),c&&c.dispose(),c=a.fromScene(o),c.texture}return{mesh:t,setSun:r,setParams:i,buildEnv:l,get material(){return t.material}}}var tr=`attribute float aSize;
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
}`,nr=`precision highp float;

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
}`,rr={realistic:0,charm:0,pixel:2,vector:1},ir={realistic:1,charm:1,pixel:1.9,vector:1.2};function ar({seed:e=1517,count:t=340,spreadX:n=21,yLo:r=3,yHi:i=18,zBase:a=7.2}={}){let s=new f;s.raycast=()=>{};let c=J(e>>>0),u=new Float32Array(t*3),d=new Float32Array(t),p=new Float32Array(t),m=new Float32Array(t),h=[];for(let e=0;e<t;e++){let t=(c()*2-1)*n,o=r+c()*(i-r),s=-a-c()*.7;u[e*3]=t,u[e*3+1]=o,u[e*3+2]=s;let l=.35+c()*.65;p[e]=l,d[e]=1.6+c()*2.8+(l>.85?2.2:0),m[e]=c()*Math.PI*2,l>.82&&h.push([t,o,s])}let _=new ie;_.setAttribute(`position`,new T(u,3)),_.setAttribute(`aSize`,new T(d,1)),_.setAttribute(`aBright`,new T(p,1)),_.setAttribute(`aPhase`,new T(m,1));let v=new M({vertexShader:tr,fragmentShader:nr,uniforms:{uTime:{value:0},uTwinkle:{value:1},uSizeScale:{value:1},uColor:{value:new A(`#eaf0ff`)},uNight:{value:0},uMode:{value:0}},transparent:!0,depthWrite:!1,blending:2,fog:!1,toneMapped:!1}),y=new ee(_,v);y.raycast=()=>{},y.frustumCulled=!1,s.add(y);let b=[];if(h.length>6)for(let e=0;e<3;e++){let e=Math.floor(c()*h.length);for(let t=0;t<3;t++){let t=h[e],n=h[(e+1+Math.floor(c()*2))%h.length];b.push(t[0],t[1],t[2],n[0],n[1],n[2]),e=(e+1)%h.length}}let x=[[[0,2],[0,0]],[[0,0],[.7,0]],[[2.1,2],[1.4,2]],[[1.4,2],[1.4,0]],[[1.4,0],[2.1,0]],[[2.1,0],[2.1,1]],[[2.1,1],[1.7,1]],[[2.8,0],[2.8,2]],[[2.8,2],[3.5,2]],[[3.5,2],[3.5,1]],[[3.5,1],[2.8,1]],[[2.8,1],[3.6,0]]],S=-a-.4,C=.62;for(let[[e,t],[n,r]]of x)b.push(-3+e*C,12+t*C,S,-3+n*C,12+r*C,S);let w=new ie;w.setAttribute(`position`,new g(b,3));let E=new l(w,new o({color:`#9fb6e8`,transparent:!0,opacity:0,depthWrite:!1,fog:!1,toneMapped:!1}));E.raycast=()=>{},E.frustumCulled=!1,s.add(E);let D=new I(new N({map:or(),transparent:!0,opacity:0,depthWrite:!1,blending:2,fog:!1,toneMapped:!1}));D.raycast=()=>{},D.scale.set(n*2.4,n*.95,1),D.position.set(2,12,-a-.7),D.material.rotation=-.5,D.renderOrder=-3,s.add(D);let O=-1;function k(e,t=`realistic`,n=0,r=!1){v.uniforms.uTime.value=n,v.uniforms.uTwinkle.value=+!r,v.uniforms.uNight.value=e;let i=rr[t]??0;i!==O&&(v.uniforms.uMode.value=i,O=i),v.uniforms.uSizeScale.value=ir[t]??1,E.material.opacity=e*.5,D.material.opacity=e*.32,s.visible=e>.001}return{group:s,update:k}}function or(){let e=document.createElement(`canvas`);e.width=e.height=256;let t=e.getContext(`2d`),n=t.createRadialGradient(256/2,256/2,0,256/2,256/2,256/2);n.addColorStop(0,`rgba(150,170,230,0.5)`),n.addColorStop(.4,`rgba(120,130,200,0.22)`),n.addColorStop(1,`rgba(90,100,160,0)`),t.fillStyle=n,t.fillRect(0,0,256,256);let r=J(20145);for(let e=0;e<7;e++){let e=40+r()*176,n=70+r()*116,i=14+r()*30,a=t.createRadialGradient(e,n,0,e,n,i);a.addColorStop(0,`rgba(200,210,255,0.18)`),a.addColorStop(1,`rgba(200,210,255,0)`),t.fillStyle=a,t.beginPath(),t.arc(e,n,i,0,Math.PI*2),t.fill()}let i=new R(e);return i.colorSpace=de,i}var sr=Math.PI*2;function cr(e){let t=document.createElement(`canvas`);t.width=t.height=128;let n=t.getContext(`2d`),r=n.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return r.addColorStop(0,`#ffffff`),r.addColorStop(.34,`#fffaf0`),r.addColorStop(.66,e),r.addColorStop(.86,e),r.addColorStop(1,`rgba(255,255,255,0)`),n.fillStyle=r,n.beginPath(),n.arc(128/2,128/2,128/2,0,sr),n.fill(),hr(t,!0)}function lr(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);n.addColorStop(0,`#ffffff`),n.addColorStop(.4,`#eef3ff`),n.addColorStop(.82,`#c4cee6`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,128/2,0,sr),t.fill(),t.globalAlpha=.14,t.fillStyle=`#8b97b4`;for(let[e,n,r]of[[54,50,9],[78,66,7],[60,82,5]])t.beginPath(),t.arc(e,n,r,0,sr),t.fill();return hr(e,!0)}function ur(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`);t.translate(128/2,128/2),t.fillStyle=`rgba(255,210,120,0.9)`;for(let e=0;e<12;e++)t.rotate(sr/12),t.beginPath(),t.moveTo(0,-28),t.lineTo(7,-54),t.lineTo(-7,-54),t.closePath(),t.fill();let n=t.createRadialGradient(0,0,0,0,0,32);return n.addColorStop(0,`#ffffff`),n.addColorStop(.4,`#fff1c8`),n.addColorStop(.8,`#ffb24a`),n.addColorStop(1,`#ff8a2a`),t.fillStyle=n,t.beginPath(),t.arc(0,0,32,0,sr),t.fill(),hr(e,!0)}function dr(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,46);n.addColorStop(0,`#ffffff`),n.addColorStop(.5,`#e6ecfb`),n.addColorStop(1,`#c2cce4`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,46,0,sr),t.fill(),t.fillStyle=`#aab6d2`;for(let[e,n,r]of[[52,48,11],[80,62,8],[58,82,7],[40,66,5]])t.beginPath(),t.arc(e,n,r,0,sr),t.fill();return hr(e,!0)}function fr(e,t,n){let r=document.createElement(`canvas`);r.width=r.height=144;let i=r.getContext(`2d`),a=17/2,o=18/2-.5;for(let r=0;r<18;r++)for(let s=0;s<18;s++){let c=Math.hypot(s-a,r-a);c>o||(i.fillStyle=c<o*.45?e:c<o*.78?t:n,i.fillRect(Math.round(s*8),Math.round(r*8),8,8))}return hr(r,!1)}function pr(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return n.addColorStop(0,`rgba(255,255,255,0.9)`),n.addColorStop(.38,`rgba(255,255,255,0.3)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,128/2,0,sr),t.fill(),hr(e,!0)}function mr(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2),r=`20,30,48`;return n.addColorStop(0,`rgba(${r},0)`),n.addColorStop(.42,`rgba(${r},0)`),n.addColorStop(.6,`rgba(${r},0.6)`),n.addColorStop(1,`rgba(${r},0)`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,128/2,0,sr),t.fill(),hr(e,!0)}function hr(e,t){let n=new R(e);return n.colorSpace=de,t||(n.magFilter=c,n.minFilter=c),n}var gr=(e,t,n)=>{let r=Math.max(0,Math.min(1,(e-t)/(n-t)));return r*r*(3-2*r)};function _r({skyW:e=15,skyY0:t=3.4,skyH:n=3.8,z:r=-7.8,biasX:i=4.5,sunSize:a=4.6,moonSize:o=4}={}){let s=new f;s.raycast=()=>{};let c=(e,t)=>{let n=new I(new N({map:e,transparent:!0,depthWrite:!1,fog:!1,toneMapped:!1,...t?{blending:2}:{}}));return n.raycast=()=>{},n},l={realistic:cr(`#ffcf8a`),charm:ur(),pixel:fr(`#fff6e0`,`#ffc24a`,`#ff8a2a`)},u={realistic:lr(),charm:dr(),pixel:fr(`#ffffff`,`#cdd6ee`,`#9aa6c6`)},d=pr(),p=c(mr(),!1),m=c(d,!0),h=c(l.realistic),g=c(d,!0),_=c(u.realistic);p.renderOrder=-2,m.renderOrder=-1,s.add(p,m,h,g,_);let v=ar({});v.group.renderOrder=-4,s.add(v.group);let y=typeof window<`u`&&window.matchMedia?window.matchMedia(`(prefers-reduced-motion: reduce)`):null,b={realistic:{sunGlow:3,sunGlowOp:.7,moonGlow:2.6,moonGlowOp:.5,sizeMul:1,sunHaloOp:.85},charm:{sunGlow:2.2,sunGlowOp:.55,moonGlow:2.1,moonGlowOp:.42,sizeMul:1.08,sunHaloOp:.7},pixel:{sunGlow:1.7,sunGlowOp:.4,moonGlow:1.7,moonGlowOp:.32,sizeMul:1,sunHaloOp:.6}},x=`realistic`;function S(e){e===x||!b[e]||(x=e,h.material.map=l[e],h.material.needsUpdate=!0,_.material.map=u[e],_.material.needsUpdate=!0)}new A;let C=new A(`#fff3df`),w=new A(`#ffb060`),T=new A(`#ff6a2a`),E=new A(`#eef2ff`),D=new A(`#9fbcff`);function O(s,c,l,u,d=`realistic`){S(d);let f=b[x],O=l.sunArc,ee=u?Math.min(1,(u.cloud||0)*.85+(u.fog||0)*.7):0,k=O.y,A=gr(k,-.04,.1)*(1-.7*ee),j=1-gr(Math.abs(k),.02,.5);h.position.set(O.x*e+i,t+O.y*n,r),m.position.copy(h.position);let te=a*f.sizeMul*(1+.55*j);h.scale.setScalar(te),m.scale.setScalar(te*f.sunGlow),h.material.color.copy(C),m.material.color.copy(w).lerp(T,j),h.material.opacity=A,m.material.opacity=A*f.sunGlowOp*(.7+.5*j),p.position.copy(h.position),p.scale.setScalar(te*1.7),p.material.opacity=A*(1-j)*f.sunHaloOp;let ne=gr(-O.y,-.04,.1)*(1-.65*ee);_.position.set(-O.x*e+i,t+-O.y*n,r),g.position.copy(_.position);let re=o*f.sizeMul;_.scale.setScalar(re),g.scale.setScalar(re*f.moonGlow),_.material.color.copy(E),g.material.color.copy(D),_.material.opacity=ne,g.material.opacity=ne*f.moonGlowOp;let ie=gr(-O.y,-.05,.18)*(1-.85*ee);v.update(ie,d,c,!!(y&&y.matches))}return{group:s,update:O}}var vr=`varying vec2 vUv;

void main() {
  
  
  
  vUv = uv;

  
  
  
  
  
  
  
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,yr=`precision highp float;

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
}`,br=`varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0); 
}`,xr=`precision highp float;

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
}`,Sr=`precision highp float;

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
}`,Cr=`precision highp float;

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
}`,wr=`const float CA_STRENGTH   = 0.0030;  
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
}`,Tr=`const float DITHER = 0.55;   

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
}`,Er=`precision highp float;

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
}`,Dr=`precision highp float;

varying vec2 vUv;
uniform sampler2D uToon;   
uniform sampler2D uPixel;  
uniform float     uBlend;  

void main() {
  vec3 t = texture2D(uToon, vUv).rgb;
  vec3 p = texture2D(uPixel, vUv).rgb;
  gl_FragColor = vec4(mix(t, p, uBlend), 1.0);
}`,Or=`varying vec2 vUv;
uniform sampler2D uScene;
uniform float     uThreshold;   

void main() {
  vec3 c = texture2D(uScene, vUv).rgb;
  float l = dot(c, vec3(0.2126, 0.7152, 0.0722));        
  float k = smoothstep(uThreshold, uThreshold + 0.22, l); 
  gl_FragColor = vec4(c * k, 1.0);
}`,kr=`varying vec2 vUv;
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
}`,Ar=`precision highp float;

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
}`,jr={"1-bit":{gridWidth:110,dither:.6,palette:[`#15120c`,`#c8b486`]},gb:{gridWidth:130,dither:.4,palette:[`#0f380f`,`#306230`,`#8bac0f`,`#9bbc0f`]},"8-bit":{gridWidth:160,dither:.55,palette:[`#140c1c`,`#442434`,`#30346d`,`#4e4a4e`,`#854c30`,`#346524`,`#d04648`,`#757161`,`#597dce`,`#d27d2c`,`#8595a1`,`#6daa2c`,`#d2aa99`,`#6dc2ca`,`#dad45e`,`#deeed6`]},"16-bit":{gridWidth:280,dither:.3,palette:`#000000.#222034.#45283c.#663931.#8f563b.#df7126.#d9a066.#eec39a.#fbf236.#99e550.#6abe30.#37946e.#4b692f.#524b24.#323c39.#3f3f74.#306082.#5b6ee1.#639bff.#5fcde4.#cbdbfc.#ffffff.#9badb7.#847e87.#696a6a.#595652.#76428a.#ac3232.#d95763.#d77bba.#8f974a.#8a6f30`.split(`.`)},modern:{gridWidth:460,dither:.6,palette:null}},Mr=[`gb`,`8-bit`,`16-bit`,`modern`],Nr={"ink-gold (day)":[`#16100A`,`#3A2F1E`,`#6B563A`,`#937B54`,`#B89968`],"ink-gold (night)":[`#0A0C16`,`#1C2236`,`#3A3A52`,`#5A5A78`,`#8A92B0`],"terminal (day)":[`#050805`,`#0E2912`,`#1E6B2F`,`#3CF06A`,`#FFB000`],"terminal (night)":[`#020604`,`#06180E`,`#10401E`,`#1E9040`,`#7FE0FF`],"neutral (photoreal)":[`#1B1B1E`,`#3D3A3A`,`#5E5750`,`#867C70`,`#A99C8A`,`#C8BCAB`,`#E3DCCF`,`#F5F1E8`],"cool (noir)":[`#0A0E14`,`#16202E`,`#243447`,`#3A536B`,`#5A7D96`,`#86A6BD`,`#B6CDDA`,`#E6EEF2`],"warm (sunset)":[`#190B0A`,`#3B150F`,`#6E2A17`,`#A8421F`,`#DB702F`,`#F2A23E`,`#F9CF76`,`#FDF0C4`],"vibrant (pop)":[`#1A1A2E`,`#E43F5A`,`#F9A826`,`#FFE05D`,`#2EC4B6`,`#3A86FF`,`#8338EC`,`#FFFFFF`],"mono (ink)":[`#0C0C0C`,`#2A2A2A`,`#474747`,`#666666`,`#8A8A8A`,`#B0B0B0`,`#D6D6D6`,`#F5F5F5`]};function Pr(e){let t=Math.max(e.length,1),n=new Float32Array(t*4);e.forEach((e,t)=>{let r=new A(e);n[t*4+0]=r.r,n[t*4+1]=r.g,n[t*4+2]=r.b,n[t*4+3]=1});let i=new ve(n,t,1,ue,r);return i.minFilter=c,i.magFilter=c,i.needsUpdate=!0,i}function Fr(e,t){let n=[];for(let t=0;t+2<e.length;t+=3)n.push([e[t],e[t+1],e[t+2]]);if(n.length===0)return[`#000000`];let r=e=>{let t=[255,255,255],n=[0,0,0];for(let r of e)for(let e=0;e<3;e++)t[e]=Math.min(t[e],r[e]),n[e]=Math.max(n[e],r[e]);let r=[n[0]-t[0],n[1]-t[1],n[2]-t[2]],i=r[0]>=r[1]&&r[0]>=r[2]?0:r[1]>=r[2]?1:2;return{ax:i,range:r[i]}},i=[n];for(;i.length<t;){let e=-1,t=-1;if(i.forEach((n,i)=>{if(n.length>1){let{range:a}=r(n);a>t&&(t=a,e=i)}}),e<0)break;let n=i[e],{ax:a}=r(n);n.sort((e,t)=>e[a]-t[a]);let o=n.length>>1;i.splice(e,1,n.slice(0,o),n.slice(o))}return i.map(e=>{let t=[0,0,0];for(let n of e)for(let e=0;e<3;e++)t[e]+=n[e];return`#`+t.map(t=>Math.round(t/e.length)).map(e=>e.toString(16).padStart(2,`0`)).join(``)})}var Ir=220,Lr={night:[`#0A0C16`,`#1C2236`,`#3A3A52`,`#5A5A78`,`#8A92B0`],dawn:[`#1A1008`,`#43281A`,`#7A4A30`,`#B07A4E`,`#E8A86A`],noon:[`#16100A`,`#3A2F1E`,`#6B563A`,`#937B54`,`#B89968`],dusk:[`#140A0A`,`#3E1E1A`,`#7A3828`,`#B85A36`,`#F0884A`]},Rr={night:[`#020604`,`#06180E`,`#10401E`,`#1E9040`,`#7FE0FF`],dawn:[`#060603`,`#1A2410`,`#3A6B22`,`#6CC040`,`#FFC060`],noon:[`#050805`,`#0E2912`,`#1E6B2F`,`#3CF06A`,`#FFB000`],dusk:[`#080402`,`#241408`,`#6B4A12`,`#E0A030`,`#FF7030`]};function zr({demo:e=!1,citySeed:r=0,profileIndex:a=0}={}){let o=new te({antialias:!0,preserveDrawingBuffer:!0});o.shadowMap.enabled=!0,o.shadowMap.type=1,o.shadowMap.autoUpdate=!1,o.shadowMap.needsUpdate=!0;let l=!!(window.matchMedia&&window.matchMedia(`(pointer: coarse)`).matches);o.setPixelRatio(Math.min(window.devicePixelRatio,l?1.5:2)),o.setSize(window.innerWidth,window.innerHeight),o.setClearColor(920327,1),document.body.appendChild(o.domElement);let u=o.getDrawingBufferSize(new z),d=new E;d.fog=new n(10465470,0);let f=new A(`#aeb6c0`),p=.062,g=new A(`#74508f`),b=new A,x=je({aspect:window.innerWidth/window.innerHeight}),S=pt({t:.5}),T={type:re,format:ue,minFilter:c,magFilter:c,wrapS:ae,wrapT:ae,depthBuffer:!1,stencilBuffer:!1},D=[new w(256,256,T),new w(256,256,T),new w(256,256,T)];for(let e of D)o.setRenderTarget(e),o.clear();o.setRenderTarget(null);let O=new E,ee=new s(-1,1,1,-1,0,1),k=new M({vertexShader:br,fragmentShader:xr,uniforms:{uCurr:{value:null},uPrev:{value:null},uTexel:{value:new z(1/256,1/256)},uMouse:{value:new z(-1,-1)},uMouseStrength:{value:0},uC2:{value:.25},uDamping:{value:.992},uRainCount:{value:0},uRainDrops:{value:Array.from({length:8},()=>new B)},uWakeCount:{value:0},uWakeDrops:{value:Array.from({length:8},()=>new B)}}});O.add(new _(new m(2,2),k));let j=new w(u.x,u.y,{minFilter:h,magFilter:h,depthBuffer:!0,stencilBuffer:!1});function ne(e){let t=document.createElement(`canvas`);t.width=t.height=1024;let n=t.getContext(`2d`);n.fillStyle=e?`#0c1418`:`#15110b`,n.fillRect(0,0,1024,1024),n.strokeStyle=e?`rgba(120,150,170,0.22)`:`rgba(184,153,104,0.30)`,n.lineWidth=2;for(let e=0;e<=1024;e+=64)n.beginPath(),n.moveTo(e,0),n.lineTo(e,1024),n.stroke(),n.beginPath(),n.moveTo(0,e),n.lineTo(1024,e),n.stroke();e||(n.fillStyle=`#B89968`,n.font=`bold 360px Georgia, serif`,n.textAlign=`center`,n.textBaseline=`middle`,n.fillText(`LGR`,512,470),n.font=`600 64px ui-monospace, monospace`,n.fillText(`WEB · STUDIO`,512,720));let r=new R(t);return r.colorSpace=de,r}let ie=new _(new m(28,28),new y({map:ne(e)}));ie.rotation.x=-Math.PI/2,ie.position.y=-.35,d.add(ie);let N=new _(new m(40,24),new M({depthWrite:!1,vertexShader:vr,fragmentShader:yr,uniforms:{uTime:{value:0},uInk:{value:S.horizon},uGold:{value:S.sky},uFogColor:{value:b},uFogAmt:{value:0},uFogCharm:Re}}));N.position.set(0,3,-8),d.add(N);let P=new M({vertexShader:Sr,fragmentShader:Cr,uniforms:{uHeight:{value:null},uScene:{value:j.texture},uTexel:{value:new z(1/256,1/256)},uResolution:{value:new z(u.x,u.y)},uDisplace:{value:.42},uNormalStrength:{value:22},uRefractStrength:{value:.06},uChromaScale:{value:1},uNormalMatrix:{value:new v},uLightDir:{value:S.sunDir},uInk:{value:new A(`#2A2218`)},uGold:{value:new A(`#B89968`)},uVector:Me,uVecWater:{value:new A(`#1fb8d8`)},uVecTint:{value:Ne}}}),F=new _(new m(28,28,255,255),P);F.rotation.x=-Math.PI/2,F.updateMatrixWorld(!0),P.uniforms.uNormalMatrix.value.getNormalMatrix(F.matrixWorld),d.add(F);let oe={value:0},se=Bt({windowGlow:oe}),I=at({seed:r,profileIndex:a,landmarkFactory:se,windowGlow:oe});d.add(I.group);let ce=vt({plinthTop:.3,extent:I.extent,profile:I.state.profile});d.add(ce.group);let le=Ot({extent:I.extent,waterSize:28,plinthTop:.3});d.add(le.group),k.uniforms.uWakeDrops.value=le.wakeDrops;let L=Vt({extent:I.extent});d.add(L.group),k.uniforms.uRainDrops.value=L.rainDrops;let fe=Ht({extent:I.extent});d.add(fe.group);let pe=[ce,le,fe],me=Gt({rig:x,getCamera:()=>x.camera,sources:pe}),he=_r();d.add(he.group);let ge=er({scale:90});d.add(ge.mesh),d.environmentIntensity=.32;let _e=!1;function ve(e){let t=e&&S.sunArc.y>-.04;t!==_e&&(_e=t,ge.mesh.visible=t,N.visible=!t)}let ye=null,be=-1;function xe(){let e=Math.floor(S.t%1*4)%4;return(e!==be||!ye)&&(be=e,ye=ge.buildEnv(o)),ye}let V=null,H=null,Se=null,U=null,Ce=!1,W=1234,G=`valley`,we=un.map(e=>e.key),Te=new i({color:`#3f6f8c`,roughness:.07,metalness:.4,transparent:!0,opacity:.9}),Ee=()=>[I.group,ce.group,le.group],De=()=>[V,H,Se].filter(Boolean);function Oe(){for(let e of De())d.remove(e),e.userData.dispose?.();let e=hn({seed:W,size:160,preset:G});U=e,V=Sn(e,{worldSize:26,baseY:0,chunks:6}),H=qn({terrain:e,seed:W,worldSize:26,baseY:0,biomeKeys:we}),Se=Xn(e,{worldSize:26,baseY:0,maxLakes:3,material:Te});for(let e of De())e.visible=Ce,d.add(e);K!==void 0&&K&&K.clear(),typeof window<`u`&&(window.__world={seed:W,preset:G,active:Ce,chunks:V.children.length,scatter:H.userData.counts,lakes:Se.userData.count})}let ke=e=>{for(let t of De())t.visible=e};function Ae(e,t){if(!U)return 0;let{size:n,height:r,sea:i,relief:a}=U,o=26/(n-1),s=Math.round((e+13)/o),c=Math.round((t+13)/o),l=s<0?0:s>=n?n-1:s;return(r[(c<0?0:c>=n?n-1:c)*n+l]-i)*a}let K=Qt({heightAt:Ae,seaSurfaceY:0,waterY:.06});K.group.visible=!1,d.add(K.group),pe.push(K);let Be=null,Ve=new Set;function He(){!U||!Se||(d.remove(Se),Se.userData.dispose?.(),Se=Xn(U,{worldSize:26,baseY:0,maxLakes:3,material:Te}),Se.visible=Ce,d.add(Se),window.__world&&(window.__world.lakes=Se.userData.count))}function Ue(){He(),H&&Kn(H,U,{worldSize:26,baseY:0})}function We(e,t,n=1,r=2.2,i=.05){if(!U||!V)return;let a=U.size,o=26/(a-1),s=(e+13)/o,c=(t+13)/o,l=r/o,u=Math.max(0,Math.floor(s-l)),d=Math.min(a-1,Math.ceil(s+l)),f=Math.max(0,Math.floor(c-l)),p=Math.min(a-1,Math.ceil(c+l)),m=U.height,h=l*.5*2*(l*.5);for(let e=f;e<=p;e++)for(let t=u;t<=d;t++){let r=(t-s)*(t-s)+(e-c)*(e-c);if(r>l*l)continue;let o=m[e*a+t]+n*i*Math.exp(-r/h);m[e*a+t]=o<0?0:o>1?1:o}Ve.clear();for(let e of V.children){let t=e.userData.chunk;t&&t.i0<=d&&t.i1>=u-1&&t.j0<=p&&t.j1>=f-1&&Ve.add(e)}Cn(V,U,Ve),Be&&clearTimeout(Be),Be=setTimeout(Ue,140)}function Ge(e,t,n,r=2.2){if(!U||!V||n==null)return;let i=U.size,a=26/(i-1),o=(e+13)/a,s=(t+13)/a,c=r/a,l=c*c,u=Math.max(0,Math.floor(o-c)),d=Math.min(i-1,Math.ceil(o+c)),f=Math.max(0,Math.floor(s-c)),p=Math.min(i-1,Math.ceil(s+c)),m=U.biome;for(let e=f;e<=p;e++)for(let t=u;t<=d;t++)(t-o)*(t-o)+(e-s)*(e-s)<=l&&(m[e*i+t]=n);Ve.clear();for(let e of V.children){let t=e.userData.chunk;t&&t.i0<=d&&t.i1>=u-1&&t.j0<=p&&t.j1>=f-1&&Ve.add(e)}Cn(V,U,Ve,!0)}let q=[`tree`,`rock`,`tuft`];function J(e,t,{type:n=`tree`,density:r=.5,radius:i=2.2,erase:a=!1}={}){if(!U||!H)return 0;if(a)return Wn(H,n||`all`,e,t,i);let o=U.size,s=26/(o-1),c=U.height,l=U.sea,u=U.relief,d=e=>e<0?0:e>=o?o-1:e,f=(e,t)=>c[d(Math.round((t+13)/s))*o+d(Math.round((e+13)/s))],p=(e,t)=>{let n=Math.max(1,Math.min(o-2,Math.round((e+13)/s))),r=Math.max(1,Math.min(o-2,Math.round((t+13)/s))),i=(c[r*o+n+1]-c[r*o+n-1])*u/(2*s),a=(c[(r+1)*o+n]-c[(r-1)*o+n])*u/(2*s);return Math.hypot(i,a)},m=Gn[n]??1.2,h=Math.max(1,Math.round((r||.5)*6)),g=0;for(let r=0;r<h;r++){let r=Math.random()*Math.PI*2,a=Math.sqrt(Math.random())*i,o=e+Math.cos(r)*a,s=t+Math.sin(r)*a,c=f(o,s);if(c<l+.005||p(o,s)>m)continue;let d=(c-l)*u;Un(H,n,o,d,s,.7+Math.random()*.6,Math.random()*Math.PI*2,.82+Math.random()*.36)&&g++}if(window.__world&&H.userData.counts)for(let e of q)H.userData.counts[e]=(H.userData.placements[e]||[]).length;return g}let Y=[];function Ke(){if(!H)return null;let e=H.userData.placements,t={};for(let n of q)t[n]=(e[n]||[]).map(e=>({...e}));return t}function qe(){U&&(Y.push({h:U.height.slice(),b:U.biome.slice(),sc:Ke(),pl:K.snapshot()}),Y.length>12&&Y.shift())}function Je(){if(!U||!Y.length)return!1;let e=Y.pop();if(U.height.set(e.h),U.biome.set(e.b),e.sc&&H){let t=H.userData.placements;for(let n of q)t[n]=(e.sc[n]||[]).map(e=>({...e}))}return e.pl&&K.restore(e.pl),Cn(V,U,V.children,!0),Ue(),!0}let Ye=new Set([`boat`,`fish`]),Xe=new Set([`person`]);function Ze(e,t,n){if(!U)return null;let r=Ae(t,n)<0;return Ye.has(e)&&!r||Xe.has(e)&&r?null:K.spawn(e,t,n)}function Qe(e,t,n=2.5){return K.removeNear(e,t,n)}function $e(e){let t=``,n=32768;for(let r=0;r<e.length;r+=n)t+=String.fromCharCode.apply(null,e.subarray(r,Math.min(r+n,e.length)));return btoa(t)}function et(e){let t=atob(e),n=new Uint8Array(t.length);for(let e=0;e<t.length;e++)n[e]=t.charCodeAt(e);return n}let tt=e=>$e(new Uint8Array(e.buffer,e.byteOffset,e.byteLength)),nt=e=>$e(e);function rt(){let e=H?H.userData.placements:{},t={};for(let n of q)t[n]=(e[n]||[]).map(e=>({...e}));return t}function it(){return U?{v:1,seed:W,preset:G,size:U.size,height:tt(U.height),biome:nt(U.biome),scatter:rt(),entities:K.snapshot()}:null}function ot(){if(!U)return null;let e=hn({seed:W,size:160,preset:G}),t=U.height,n=U.biome,r=[],i=[];for(let n=0;n<t.length;n++)Math.abs(t[n]-e.height[n])>1e-6&&r.push(n,Math.round(t[n]*1e4)/1e4);for(let t=0;t<n.length;t++)n[t]!==e.biome[t]&&i.push(t,n[t]);return{v:1,c:1,seed:W,preset:G,hd:r,bd:i,entities:K.snapshot()}}function st(e){H&&(d.remove(H),H.userData.dispose?.()),H=zn(e||{tree:[],rock:[],tuft:[]}),H.userData.counts=q.reduce((e,t)=>(e[t]=(H.userData.placements[t]||[]).length,e),{}),H.visible=Ce,d.add(H)}function ct(e){if(!e||e.v!==1)return!1;W=e.seed|0,G=mn.includes(e.preset)?e.preset:G,Y.length=0,Oe(),Ce=!0,ke(!0),K.group.visible=!0;for(let e of Ee())e.visible=!1;if(window.__world&&(window.__world.active=!0),e.height&&e.biome){let t=et(e.height);U.height.set(new Float32Array(t.buffer,t.byteOffset,t.byteLength/4));let n=et(e.biome);U.biome.set(n.subarray(0,U.biome.length))}else if(e.hd||e.bd){let t=e.hd||[],n=e.bd||[];for(let e=0;e<t.length;e+=2)U.height[t[e]]=t[e+1];for(let e=0;e<n.length;e+=2)U.biome[n[e]]=n[e+1]}return Cn(V,U,V.children,!0),e.scatter&&st(e.scatter),He(),H&&Kn(H,U,{worldSize:26,baseY:0}),K.restore(e.entities),window.__world&&(window.__world.scatter=H.userData.counts,window.__world.seed=W,window.__world.preset=G),!0}let lt={enter(){V||Oe(),Ce=!0,ke(!0),K.group.visible=!0;for(let e of Ee())e.visible=!1;window.__world&&(window.__world.active=!0)},exit(){Ce=!1,ke(!1),K.group.visible=!1;for(let e of Ee())e.visible=!0;window.__world&&(window.__world.active=!1)},reroll(){return W=Math.random()*1e9|0,Y.length=0,Oe(),lt.enter(),W},reset(){return Y.length=0,Oe(),lt.enter(),W},setPreset(e){return mn.includes(e)&&(G=e,Y.length=0,Oe(),lt.enter()),G},sculpt:We,paintBiome:Ge,paintScatter:J,repoolWater:He,snapshot:qe,undo:Je,placeEntity:Ze,removeEntityNear:Qe,heightAt:Ae,serialize:it,serializeCompact:ot,deserialize:ct,get terrainGroup(){return V},get biomes(){return un},get scatterCounts(){return H?H.userData.placements&&q.reduce((e,t)=>(e[t]=(H.userData.placements[t]||[]).length,e),{}):null},get placedCounts(){return K.counts()},setScatterHidden(e){H&&(H.visible=!e)},get placedLife(){return K},get canUndo(){return Y.length>0},get active(){return Ce},get seed(){return W},get preset(){return G},get presets(){return mn}},ut=Qn(),dt=an({world:lt,catalog:ut,inspector:me});I.group.remove(I.key),d.add(I.key),I.key.castShadow=!0,I.key.shadow.mapSize.set(2048,2048),I.key.shadow.bias=-18e-5,I.key.shadow.normalBias=.028,d.add(I.key.target);function ft(){let e=I.key.shadow.camera,t=I.extent+4.5;e.left=-t,e.right=t,e.top=t,e.bottom=-t,e.near=1,e.far=48,e.updateProjectionMatrix(),o.shadowMap.needsUpdate=!0}ft();let mt=new C(u.x,u.y),ht=new w(u.x,u.y,{minFilter:h,magFilter:h,depthBuffer:!0,stencilBuffer:!1,depthTexture:mt}),gt=new w(u.x,u.y,{minFilter:h,magFilter:h,depthBuffer:!1,stencilBuffer:!1}),_t=new w(u.x,u.y,{minFilter:h,magFilter:h,depthBuffer:!1,stencilBuffer:!1}),yt=new w(u.x,u.y,{minFilter:h,magFilter:h,depthBuffer:!1,stencilBuffer:!1}),bt=Math.max(1,Math.floor(u.x/2)),xt=Math.max(1,Math.floor(u.y/2)),St=new w(bt,xt,{minFilter:h,magFilter:h,depthBuffer:!1,stencilBuffer:!1}),Ct=new w(bt,xt,{minFilter:h,magFilter:h,depthBuffer:!1,stencilBuffer:!1}),wt=new E,Tt=new s(-1,1,1,-1,0,1),Et=new _(new m(2,2));wt.add(Et);let X=new M({vertexShader:br,fragmentShader:wr,uniforms:{uScene:{value:ht.texture},uTime:{value:0},uResolution:{value:new z(u.x,u.y)},uGrain:{value:1},uChroma:{value:1},uExposure:{value:1},uAces:{value:0},uBloom:{value:St.texture},uBloomStrength:{value:0},uGrade:{value:0},uGradeTint:{value:S.grade.tint},uGradeLift:{value:S.grade.lift},uGradeSat:{value:1},uGradeContrast:{value:1}}}),Dt=new M({vertexShader:br,fragmentShader:Or,uniforms:{uScene:{value:ht.texture},uThreshold:{value:.78}}}),kt=new M({vertexShader:br,fragmentShader:kr,uniforms:{uScene:{value:St.texture},uDir:{value:new z}}});function At(e){Dt.uniforms.uScene.value=e.texture,Rt(Dt,St),kt.uniforms.uScene.value=St.texture,kt.uniforms.uDir.value.set(1.6/bt,0),Rt(kt,Ct),kt.uniforms.uScene.value=Ct.texture,kt.uniforms.uDir.value.set(0,1.6/xt),Rt(kt,St),X.uniforms.uBloom.value=St.texture;let n=1-t.clamp(S.sunArc.y*2.2,0,1);X.uniforms.uBloomStrength.value=.85*(.32+.95*n)}let jt=e=>{let t=e.map(e=>new A(e));for(;t.length<8;)t.push(new A(0,0,0));return t},Z=[`night`,`dawn`,`noon`,`dusk`],Mt={inkgold:Z.map(e=>jt(Lr[e])),terminal:Z.map(e=>jt(Rr[e]))},Nt=new M({vertexShader:br,fragmentShader:Tr,uniforms:{uScene:{value:gt.texture},uResolution:{value:new z(u.x,u.y)},uPixelSize:{value:Ir},uPalette:{value:Mt.inkgold[2]},uPaletteB:{value:Mt.inkgold[2]},uPaletteBlend:{value:0},uPaletteSize:{value:5}}}),Pt=new M({vertexShader:br,fragmentShader:Ar,uniforms:{uScene:{value:gt.texture},uResolution:{value:new z(u.x,u.y)},uGridWidth:{value:160},uDither:{value:.55},uPalette:{value:Pr(jr[`8-bit`].palette)},uPaletteSize:{value:1},uUsePalette:{value:1}}}),Ft={};for(let e of Mr)Ft[e]=jr[e].palette?Pr(jr[e].palette):null;let It=new M({vertexShader:br,fragmentShader:Er,uniforms:{uScene:{value:gt.texture},uDepth:{value:mt},uResolution:{value:new z(u.x,u.y)},uBands:{value:4},uToonGain:{value:1.7},uToonGamma:{value:.6},uToonFloor:{value:S.toonFloor},uOutline:{value:S.outline},uNear:{value:.1},uFar:{value:100},uIsPerspective:{value:1}}}),Lt=new M({vertexShader:br,fragmentShader:Dr,uniforms:{uToon:{value:_t.texture},uPixel:{value:yt.texture},uBlend:{value:0}}});function Rt(e,t){Et.material=e,o.setRenderTarget(t),o.render(wt,Tt)}function zt(){x.setViewport(window.innerWidth,window.innerHeight),o.setSize(window.innerWidth,window.innerHeight);let e=o.getDrawingBufferSize(new z);return j.setSize(e.x,e.y),ht.setSize(e.x,e.y),gt.setSize(e.x,e.y),_t.setSize(e.x,e.y),yt.setSize(e.x,e.y),bt=Math.max(1,e.x>>1),xt=Math.max(1,e.y>>1),St.setSize(bt,xt),Ct.setSize(bt,xt),P.uniforms.uResolution.value.set(e.x,e.y),X.uniforms.uResolution.value.set(e.x,e.y),Nt.uniforms.uResolution.value.set(e.x,e.y),Pt.uniforms.uResolution.value.set(e.x,e.y),It.uniforms.uResolution.value.set(e.x,e.y),e}let Q=3,$=!1,Ut=!1,Wt=`native`,Kt=.3,qt=.46,Jt=[`native`,...Mr],Yt={"16-bit":`16-bit`,"8-bit":`8-bit`,gb:`Game Boy`,modern:`Modern`,native:`Pixel`,"1-bit":`1-bit`};typeof window<`u`&&(window.__mode=Q,window.__vector=$,window.__era=Wt);let Xt=0,Zt=performance.now(),$t=typeof window<`u`&&new URLSearchParams(window.location.search).has(`perf`);typeof window<`u`&&(window.__perf=$t),$t&&(o.info.autoReset=!1);let en=null;typeof window<`u`&&(window.__loaded=!1);let tn=0,nn=new B(1,1,1),rn=!1;function on(e){let t=Ut?Mt.terminal:Mt.inkgold,n=e%1*4,r=Math.floor(n)%4;Nt.uniforms.uPalette.value=t[r],Nt.uniforms.uPaletteB.value=t[(r+1)%4],Nt.uniforms.uPaletteBlend.value=n-Math.floor(n)}function sn(e){let t=jr[e];t&&(Pt.uniforms.uGridWidth.value=t.gridWidth,Pt.uniforms.uDither.value=t.dither,Pt.uniforms.uUsePalette.value=+!!t.palette,t.palette&&(Pt.uniforms.uPalette.value=Ft[e],Pt.uniforms.uPaletteSize.value=t.palette.length))}function cn(){Wt!==`native`&&sn(Wt)}let ln=()=>Wt===`native`?Nt:Pt;function dn(e,t){ve(!0),d.environment=xe(),F.visible=!1,o.setRenderTarget(j),o.render(d,e),F.visible=!0,o.setRenderTarget(ht),o.render(d,e),At(ht),X.uniforms.uAces.value=1,X.uniforms.uGrade.value=1,X.uniforms.uGrain.value=0,X.uniforms.uChroma.value=0,Rt(X,t)}function fn(e,t){let n=!$&&(Q===1||Q===2);if(ve(n),d.environment=n?xe():null,X.uniforms.uBloomStrength.value=0,F.visible=!1,o.setRenderTarget(j),o.render(d,x.camera),F.visible=!0,Q===1&&!n)o.setRenderTarget(t),o.render(d,x.camera);else if(Q===1)o.setRenderTarget(ht),o.render(d,x.camera),At(ht),X.uniforms.uAces.value=1,X.uniforms.uGrade.value=1,X.uniforms.uGrain.value=0,X.uniforms.uChroma.value=0,Rt(X,t);else if(o.setRenderTarget(ht),o.render(d,x.camera),Q===2)n&&At(ht),X.uniforms.uAces.value=+!!n,X.uniforms.uGrade.value=+!!n,X.uniforms.uGrain.value=1,X.uniforms.uChroma.value=1,Rt(X,t);else{X.uniforms.uAces.value=0,X.uniforms.uGrade.value=0,X.uniforms.uGrain.value=0,X.uniforms.uChroma.value=0,Rt(X,gt);let n=x.camera;It.uniforms.uNear.value=n.near,It.uniforms.uFar.value=n.far,It.uniforms.uIsPerspective.value=+!!n.isPerspectiveCamera;let r=e.era?(sn(e.era),Pt):ln();e.kind===`pixel`?(Rt(r,t),window.__style=`pixel`):e.kind===`toon`?(Rt(It,t),window.__style=`toon`):(Rt(It,_t),Rt(r,yt),Lt.uniforms.uBlend.value=e.blend,Rt(Lt,t),window.__style=`blend`)}}function pn(){let e=gn(),n=e.kind===`toon`?1:e.kind===`blend`?1-e.blend:0;return P.uniforms.uChromaScale.value=t.lerp(1,.5,n),e}function gn(){if(Q===1||Q===2)return{kind:`none`};if(Q===7)return{kind:`pixel`};if(Q===8)return{kind:`toon`};let e=x.styleT;return window.__styleT=e,e<=Kt?{kind:`toon`}:e>=qt?{kind:`pixel`,era:e<.62?`16-bit`:e<.8?`8-bit`:`gb`}:{kind:`blend`,blend:t.smoothstep(e,Kt,qt),era:`16-bit`}}function _n(e){return Q===1||Q===2?``:$&&Q!==7&&Q!==8?`Vector`:e.kind===`toon`?`Toon`:e.kind===`pixel`?Yt[e.era||Wt]||`Pixel`:e.kind===`blend`?`Toon → `+(Yt[e.era]||`Pixel`):``}function vn(e,n,{shadowsOn:r=!0,seasonTarget:i=0}={}){if($t){let e=o.info;en={calls:e.render.calls,tris:e.render.triangles,programs:e.programs?e.programs.length:0,geo:e.memory.geometries,tex:e.memory.textures},e.reset()}N.material.uniforms.uTime.value=n,X.uniforms.uTime.value=n,S.update(e),I.key.position.copy(S.sunDir).multiplyScalar(24),I.key.color.copy(S.sunColor),I.key.intensity=S.sunIntensity,I.fill.color.copy(S.hemiSky),I.fill.groundColor.copy(S.hemiGround),oe.value=S.windowGlow,ge.setSun(S.sunArc),ge.setParams(S.skyParams),X.uniforms.uGradeSat.value=S.grade.sat,X.uniforms.uGradeContrast.value=S.grade.contrast,d.environmentIntensity=.34*(1-.6*t.clamp(S.sunArc.y*1.5,0,1));let a=L.overcast;I.key.intensity*=1-.5*a,I.key.color.lerp(f,.45*a),I.fill.intensity=1+.7*a;let s=t.smoothstep(S.sunDir.y,.06,.34),c=t.lerp(.28,1,1-S.windowGlow),l=r?s*c:0;I.key.shadow.intensity=.72*l,Pe.value=.52*l,(r&&!rn||nn.distanceToSquared(S.sunDir)>2e-5)&&(o.shadowMap.needsUpdate=!0,nn.copy(S.sunDir)),rn=r;let u=1-S.windowGlow;Ne.setRGB(t.lerp(.46,1,u),t.lerp(.52,1,u),t.lerp(.74,1,u)),X.uniforms.uExposure.value=S.exposure,It.uniforms.uToonGain.value=S.toonGain,o.setClearColor(S.horizon,1),on(S.t),window.__t=S.t,ce.update(e,n,S),I.update(n),le.update(e,n,S),k.uniforms.uWakeCount.value=le.wakeCount,L.update(e,n),k.uniforms.uRainCount.value=L.rainDropCount;let m=L.fog*(1-u);d.fog.density=L.fog*p,b.copy(S.horizon).lerp(g,.85*m),d.fog.color.copy(b),o.setClearColor(b,1),Re.value=L.fog,N.material.uniforms.uFogAmt.value=.7*L.fog,Fe.value=L.snow,Ie.value=L.cloud*.55,Le.x+=e*.018,Le.y+=e*.009,ze.value+=(i-ze.value)*Math.min(1,e*1.5),fe.update(e,n,S,L),Ce&&K.update(e,n,S);let h=gn(),_=h.kind===`pixel`||h.kind===`blend`?`pixel`:$||h.kind===`toon`?`charm`:`realistic`;he.update(e,n,S,L,_),Xt++;let v=performance.now();v-Zt>=1e3&&(window.__fps=Xt,$t&&en&&(console.log(`[perf] ${Xt} fps · ~${(1e3/Math.max(1,Xt)).toFixed(2)} ms · calls ${en.calls} · tris ${en.tris} · programs ${en.programs} · geo ${en.geo} · tex ${en.tex}`),window.__perfInfo={fps:Xt,...en}),Xt=0,Zt=v);let[y,x,C]=D;if(k.uniforms.uPrev.value=y.texture,k.uniforms.uCurr.value=x.texture,o.setRenderTarget(C),o.render(O,ee),D=[x,C,y],P.uniforms.uHeight.value=D[1].texture,tn<2&&typeof document<`u`&&++tn===2){let e=document.getElementById(`lgr-loader`);e&&e.classList.add(`gone`),window.__loaded=!0}}function yn(e){Q=e,window.__mode=Q}function bn(){return $=!$,Me.value=+!!$,window.__vector=$,$}function xn(e){return $=!!e,Me.value=+!!$,window.__vector=$,$}function wn(){return Wt=Jt[(Jt.indexOf(Wt)+1)%Jt.length],window.__era=Wt,cn(),Wt}function Tn(){return Ut=!Ut,Ut}return{updateWorld:vn,decideStyle:pn,renderCityPipeline:fn,renderCityBeautyTo:dn,styleHintName:_n,setPostMode:yn,toggleVector:bn,setVector:xn,cycleEra:wn,togglePalette:Tn,get mode(){return Q},get vector(){return $},get sceneEra(){return Wt},renderer:o,drawBuffer:u,scene:d,rig:x,sunRig:S,SIM:256,targets:D,simScene:O,simCamera:ee,simMaterial:k,grabRT:j,card:ie,backdrop:N,WATER_SIZE:28,water:F,waterMaterial:P,windowGlow:oe,landmarkFactory:se,city:I,cityLife:ce,waterLife:le,weatherRig:L,clouds:fe,inspector:me,world:lt,catalog:ut,editor:dt,fitShadowFrustum:ft,SHADOW_DIST:24,sceneDepth:mt,sceneRT:ht,filmicRT:gt,toonRT:_t,pixelRT:yt,postScene:wt,postCamera:Tt,postQuad:Et,filmicMaterial:X,pixelMaterial:Nt,pixelkitMaterial:Pt,toonMaterial:It,mixMaterial:Lt,PALCACHE:Mt,ERA_TEX:Ft,runPass:Rt,OVERCAST_GREY:f,FOG_DENSITY:p,FOG_NIGHT_TINT:g,_fogColor:b,resize:zt}}var Br=[`video/mp4;codecs=avc1.42E01E`,`video/mp4`,`video/webm;codecs=vp9`,`video/webm`];function Vr({renderer:e,rig:t,sunRig:n,poke:r,getState:i,office:a={}}){let o=e.domElement,s=new URLSearchParams(window.location.search),c=e=>{let t=i();return`lgr-${t.lesson}-${String(t.clock||``).replace(`:`,``)}-${t.style}.${e}`},l=(e,t)=>{let n=URL.createObjectURL(e),r=document.createElement(`a`);r.href=n,r.download=t,document.body.appendChild(r),r.click(),r.remove(),setTimeout(()=>URL.revokeObjectURL(n),1e3)};function u(){o.toBlob(e=>{e&&(l(e,c(`png`)),window.__lastStill=e.size)},`image/png`)}let d=()=>Br.find(e=>window.MediaRecorder&&MediaRecorder.isTypeSupported(e))||``,f=Hr(),p=null,m=[],h=!1;function g(){if(h)return;let e=d(),t=o.captureStream(60);p=new MediaRecorder(t,e?{mimeType:e,videoBitsPerSecond:12e6}:{}),m=[],p.ondataavailable=e=>{e.data&&e.data.size&&m.push(e.data)},p.onstop=()=>{let e=new Blob(m,{type:p.mimeType});l(e,c(p.mimeType.includes(`mp4`)?`mp4`:`webm`)),window.__lastVideo=e.size},p.start(),h=!0,window.__recording=!0,f.show()}function _(){h&&(p.stop(),h=!1,window.__recording=!1,f.hide())}let v=()=>h?_():g(),y=e=>new Promise(t=>setTimeout(t,e)),b=e=>window.dispatchEvent(new KeyboardEvent(`keydown`,{key:e}));async function x(){let e=o.clientWidth,t=o.clientHeight,n=e*.26,i=t*.74;for(let t=0;t<=10;t++)r.at(n+t*e*.028,i+Math.sin(t*.7)*16),await y(100);r.stop()}async function S(e){if(e.keys)for(let t of e.keys)b(t),await y(70);e.zoom&&t.zoomBy(e.zoom),e.orbit&&t.orbit(e.orbit[0],e.orbit[1]),e.timeTo!==void 0&&n.goTo(e.timeTo),e.office&&a[e.office]?.(),e.ripple&&await x(),e.waitMs&&await y(e.waitMs)}let C={tour:[{keys:[`6`,`0`],waitMs:600},{zoom:.72,waitMs:1700},{ripple:!0,waitMs:2400},{orbit:[.55,0],waitMs:1700},{timeTo:0,waitMs:3e3},{timeTo:.5,waitMs:1500},{keys:[`7`],waitMs:1e3},{zoom:1.5,waitMs:1400},{keys:[`B`],waitMs:2e3},{keys:[`B`],waitMs:2e3},{keys:[`B`],waitMs:2e3},{keys:[`B`],waitMs:2e3},{keys:[`B`],waitMs:2e3},{keys:[`8`],waitMs:900},{zoom:.65,waitMs:1200},{ripple:!0,waitMs:2600},{keys:[`7`],waitMs:700},{keys:[`B`],waitMs:300},{keys:[`B`],waitMs:900},{zoom:1.4,waitMs:2600}],daycycle:[{keys:[`6`,`0`],waitMs:700},{timeTo:.75,waitMs:2600},{timeTo:1,waitMs:2600},{timeTo:1.25,waitMs:2600},{timeTo:1.5,waitMs:2600},{timeTo:1.5,waitMs:800}],office:[{keys:[`o`],waitMs:1700},{office:`pet`,waitMs:1300},{office:`feed`,waitMs:1700},{office:`travel`,waitMs:1700},{keys:[`W`,`W`,`W`],waitMs:1800},{timeTo:0,waitMs:2400},{office:`laptop`,waitMs:800},{office:`closeLaptop`,waitMs:300},{timeTo:.5,waitMs:900},{keys:[`W`],waitMs:200},{keys:[`o`],waitMs:1500}],cities:[{keys:[`6`,`0`],waitMs:500},{timeTo:.78,waitMs:2800},{keys:[`C`],waitMs:3e3},{keys:[`C`],waitMs:3e3},{keys:[`C`],waitMs:2e3}],water:[{keys:[`6`,`0`],waitMs:600},{zoom:1.35,waitMs:2800},{orbit:[.7,0],waitMs:2600},{ripple:!0,waitMs:2200},{timeTo:0,waitMs:3200},{timeTo:.5,waitMs:1500},{orbit:[-.5,0],waitMs:2200}],morph:[{keys:[`6`,`3`],waitMs:700},{zoom:.55,waitMs:1800},{zoom:2.3,waitMs:1700},{zoom:1.26,waitMs:1700},{zoom:1.16,waitMs:1900},{zoom:.3,waitMs:2200}],skin:[{keys:[`o`],waitMs:1800},{keys:[`j`],waitMs:2e3},{keys:[`j`],waitMs:2e3},{timeTo:0,waitMs:2600},{timeTo:.5,waitMs:1500},{keys:[`u`],waitMs:2e3},{keys:[`j`],waitMs:1400},{keys:[`o`],waitMs:1500}]};async function w(e){let t=C[e];if(t){window.__director=e;for(let e of t)await S(e);window.__director=null}}async function T(e){await y(1600),g(),await w(e),await y(400),_(),window.__captureDone=!0}window.addEventListener(`keydown`,e=>{(e.key===`s`||e.key===`S`)&&u(),(e.key===`r`||e.key===`R`)&&v()});let E=s.get(`capture`);return E&&C[E]&&T(E),window.__capture={still:u,toggleRec:v,run:w,sequences:Object.keys(C)},window.__capture}function Hr(){let e=document.createElement(`div`);return e.textContent=`● REC`,e.style.cssText=`position:fixed;top:14px;right:16px;z-index:2;font:bold 12px ui-monospace,monospace;color:#ff3b30;letter-spacing:.12em;text-shadow:0 1px 3px #000;display:none;`,document.body.appendChild(e),{show:()=>{e.style.display=`block`},hide:()=>{e.style.display=`none`}}}var Ur=`
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
`;function Wr({controls:e,state:t,show:n,coarse:r}){if(typeof document>`u`)return;let i=document.createElement(`style`);i.textContent=Ur,document.head.appendChild(i);let a=document.createElement(`div`);a.className=`vui`;let o=document.createElement(`div`);o.className=`vui-info`,o.innerHTML=`KEYS · 4/5/6 cam · 0 vector · 7/8 pixel/toon · B era · T time · [ ] scrub · 9 auto · C city · G shuffle · W weather · K season · click a building / O office · J office skin · U painted props · Esc exit · M hide UI · S still · R rec · H shadows · P theme · drag water to ripple`;let s=(e,t,n)=>{let r=document.createElement(`button`);return r.textContent=e,n&&(r.title=n),r.addEventListener(`click`,e=>{navigator.vibrate?.(10),t(e)}),r},c=e=>{let t=document.createElement(`div`);return t.className=`seg`,{seg:t,btns:e.map(([n,r])=>{let i=s(n,()=>e.find(e=>e[1]===r)[2](),n);return i.dataset.val=r,t.appendChild(i),i})}},l=e=>{let t=document.createElement(`span`);return t.className=`clbl`,t.textContent=e,t},u=(e,t,n,r)=>{let i=document.createElement(`input`);return i.type=`range`,i.min=String(e),i.max=String(t),i.step=String(n),i.addEventListener(`input`,()=>r(parseFloat(i.value))),i},d=s(`City`,()=>e.city(),`Next city profile (C)`),f=s(`Shuffle`,()=>e.shuffle(),`New random seed (G)`),p={clear:`Clear`,rain:`Rain`,snow:`Snow`,fog:`Fog`},m=[`Spring`,`Summer`,`Autumn`,`Winter`],h=s(`Clear`,()=>e.weather(),`Cycle weather: clear→rain→snow→fog (W)`),g=s(`Spring`,()=>e.season(),`Cycle season: spring→summer→autumn→winter (K)`),_=s(`Office`,()=>e.office(),`Dive into / exit the office (O · Esc)`),v={"3d":`3D`,dressed2:`Dressed`,night2:`Night`,modern:`Modern`,charm:`Charm`},y=s(`Skin`,()=>e.officeSkin(),`Office look: 3D → dressed → night → modern → charm diffusion (J)`),b={painted:`Painted`,"3d":`Live 3D`},x=s(`Props`,()=>e.officeProps(),`Office props: painted (cohesive) ↔ live 3D (animated) — under a skin (U)`),S=s(`Inspect`,()=>e.inspect(),`Inspect: fly + click/tap any car·person·bird·boat·cloud to follow + watch its behaviour (I)`),C={valley:`Valley`,archipelago:`Archi`,mountains:`Mountains`,plains:`Plains`},w=s(`World`,()=>e.world(),`Generate + explore a procedural terrain world`),T=s(`🎲`,()=>e.worldReroll(),`New random world (seed) — G`),E=s(`Valley`,()=>e.worldPreset(),`Cycle biome preset: valley → archipelago → mountains → plains`),D=s(`✎ Edit`,()=>e.sculpt&&e.sculpt(),`World editor — brush the terrain (Sculpt to reshape, Paint to recolour)`),O=document.createElement(`div`);O.className=`vui-rail`;let ee=null;function k(t){ee||!t||(ee=t.map(t=>{let n=document.createElement(`button`);return n.dataset.id=t.id,n.title=`${t.label} (${t.key})`,n.innerHTML=`${t.icon}<span class="rk">${t.key}</span>`,n.addEventListener(`click`,()=>{navigator.vibrate?.(10),e.editTool&&e.editTool(t.id)}),O.appendChild(n),n}))}let A=document.createElement(`div`);A.className=`vui-card`;let j=document.createElement(`div`);j.className=`ct`;let te=document.createElement(`div`);te.className=`crow`;let ne=u(.8,6,.1,t=>e.brushSize&&e.brushSize(t));te.append(l(`Size`),ne);let re=document.createElement(`div`);re.className=`crow`;let ie=u(.01,.15,.005,t=>e.brushStrength&&e.brushStrength(t));re.append(l(`Force`),ie);let M=document.createElement(`div`);M.className=`crow`;let ae=u(.1,1,.05,t=>e.brushDensity&&e.brushDensity(t));M.append(l(`Density`),ae);let N=s(`↑ Raise`,()=>e.sculptDir&&e.sculptDir(),`Brush direction: raise ↔ lower / add ↔ erase / place ↔ delete`),P=s(`↶ Undo`,()=>e.worldUndo&&e.worldUndo(),`Undo the last edit (Z)`),F=s(`↺ Reset`,()=>e.worldReset&&e.worldReset(),`Reset to the generated world (discard edits) — same seed, NOT a reroll`),oe=s(`↺ Reset`,()=>e.worldReset&&e.worldReset(),`Reset the world (discard edits) — same seed`),se=s(`👁 Trees`,()=>e.hideScatter&&e.hideScatter(),`Hide the scatter (trees/rocks) to see the ground you are editing`),I=document.createElement(`div`);I.className=`seg`,I.style.display=`none`;let ce=null;function le(t){ce||!t||(ce=t.map((t,n)=>{let r=document.createElement(`button`);return r.title=t.key,r.style.cssText=`min-width:30px;padding:0;background:${t.color};border:0;border-radius:8px;`,r.addEventListener(`click`,()=>{navigator.vibrate?.(8),e.material&&e.material(n)}),I.appendChild(r),r}))}let ue=document.createElement(`div`);ue.className=`seg`,ue.style.display=`none`;let L=null;function de(t){L||!t||(L=t.map(t=>{let n=document.createElement(`button`);return n.dataset.key=t.key,n.textContent=t.icon,n.title=t.label,n.style.cssText=`min-width:30px;padding:4px 6px;`,n.addEventListener(`click`,()=>{navigator.vibrate?.(8),e.scatterType&&e.scatterType(t.key)}),ue.appendChild(n),n}))}let fe=document.createElement(`div`);fe.className=`seg`,fe.style.display=`none`;let pe=null;function R(t){pe||!t||(pe=t.map(t=>{let n=document.createElement(`button`);return n.dataset.key=t.key,n.textContent=t.icon,n.title=t.label,n.style.cssText=`min-width:30px;padding:4px 6px;`,n.addEventListener(`click`,()=>{navigator.vibrate?.(8),e.entity&&e.entity(t.key)}),fe.appendChild(n),n}))}let me=c([[`×1`,`1`,()=>e.dropN&&e.dropN(1)],[`×10`,`10`,()=>e.dropN&&e.dropN(10)],[`×50`,`50`,()=>e.dropN&&e.dropN(50)]]);me.seg.style.display=`none`,me.seg.title=`How many to drop per click (scattered in the ring)`;let he=document.createElement(`div`);he.className=`crow`,he.append(N,P,oe,se),A.append(j,te,re,I,ue,M,fe,me.seg,he);let z=document.createElement(`div`);z.className=`vui-save`;let ge=document.createElement(`div`);ge.className=`ct`,ge.textContent=`💾 Save / Load`;let _e=document.createElement(`input`);_e.type=`text`,_e.placeholder=`world name`,_e.value=`my-world`;let ve=document.createElement(`select`),B=``;ve.addEventListener(`change`,()=>{ve.value&&(_e.value=ve.value)});let ye=document.createElement(`input`);ye.type=`file`,ye.accept=`.json,application/json`,ye.style.display=`none`,ye.addEventListener(`change`,()=>{ye.files[0]&&(e.importWorld(ye.files[0]),ye.value=``)});let be=s(`💾 Save`,()=>e.saveWorld(_e.value.trim()),`Save to this device (a named slot)`),xe=s(`📂 Load`,()=>e.loadWorld(_e.value.trim()),`Load the named slot`),V=s(`🗑`,()=>e.deleteWorld(_e.value.trim()),`Delete the named slot`),H=s(`⬇ Export`,()=>e.exportWorld(_e.value.trim()),`Download the world as a JSON file (portable, lossless)`),Se=s(`⬆ Import`,()=>ye.click(),`Load a world from a JSON file`),U=s(`🔗 Link`,()=>e.shareLink(),`Copy a shareable link (light edits only — else use Export)`),Ce=document.createElement(`div`);Ce.className=`st`;let W=document.createElement(`div`);W.className=`srow`,W.append(_e);let G=document.createElement(`div`);G.className=`srow`,G.append(ve);let we=document.createElement(`div`);we.className=`srow`,we.append(be,xe,V);let Te=document.createElement(`div`);Te.className=`srow`,Te.append(H,Se,U),z.append(ge,W,G,we,Te,Ce,ye);let Ee=s(`✨ Realistic`,()=>e.realistic(),`Cinematic beauty look — atmospheric sky, glowing sun, colour-graded (showcase)`),De=c([[`Auto`,`auto`,()=>e.post(`auto`)],[`Pixel`,`pixel`,()=>e.post(`pixel`)],[`Toon`,`toon`,()=>e.post(`toon`)],[`None`,`none`,()=>e.post(`none`)]]);De.btns[0].title=`AUTO: zoom morphs the style (toon → 16-bit → 8-bit → Game Boy)`,De.btns[3].title=`NONE: raw beauty render, no post-crunch (clean flat-vector when Vector is on)`;let Oe=s(`Vector`,()=>e.vector(),`Flat-vector materials — LAYERS onto the post mode (Vector + Pixel/Toon/Auto). Toggle (0)`),ke={native:`Era`,gb:`GB`,"8-bit":`8-bit`,"16-bit":`16-bit`,modern:`Modern`,"1-bit":`1-bit`},Ae=s(`Era`,()=>e.era(),`Cycle the pixel era (B): native → GB → 8-bit → 16-bit → Modern`),je=document.createElement(`input`);je.type=`range`,je.min=`0`,je.max=`1`,je.step=`0.01`,je.title=`Time of day`;let Me=!1;je.addEventListener(`pointerdown`,()=>{Me=!0}),je.addEventListener(`pointerup`,()=>{Me=!1}),je.addEventListener(`input`,()=>e.time(parseFloat(je.value)));let Ne=s(`▶`,()=>e.auto(),`Play/pause day cycle (9)`),Pe=document.createElement(`div`);Pe.style.cssText=`display:flex;align-items:center;gap:6px;`;let Fe=document.createElement(`span`);Fe.className=`lbl`,Fe.textContent=`Day`,Pe.append(Fe,je,Ne);let Ie=c([[`Iso`,`iso`,()=>e.cam(`iso`)],[`Dim`,`dimetric`,()=>e.cam(`dimetric`)],[`3D`,`persp`,()=>e.cam(`persp`)]]),Le=s(`ⓘ`,()=>o.classList.toggle(`open`),`All keys`),Re=s(`⌄`,()=>Xe(!0),`Hide controls — watch unobstructed (M)`),ze=document.createElement(`div`);ze.className=`vui-more`;let K=s(`More`,()=>{ze.classList.toggle(`open`),Qe()},`More controls`);if(r){a.append(d,f,_,S,w,Ne,De.seg,K,Re);let e=document.createElement(`div`);e.style.cssText=`display:flex;align-items:center;gap:6px;`,e.append(Fe,je),ze.append(Ee,T,F,E,D,h,g,y,x,Oe,Ae,Ie.seg,e)}else a.append(d,f,at(),h,g,_,y,x,at(),S,w,T,F,E,D,at(),De.seg,Ee,Oe,Ae,at(),Pe,at(),Ie.seg,Le,at(),Re);let Be=document.createElement(`div`);Be.className=`vui-inspect`;let Ve=document.createElement(`div`);Ve.className=`ik`;let He=document.createElement(`div`);He.className=`it`;let Ue=document.createElement(`div`);Ue.className=`ii`;let We=document.createElement(`div`);We.className=`ir`;let Ge=s(`▸ Next`,()=>e.inspectNext&&e.inspectNext(),`Follow the next object (Tab)`),q=s(`✕`,()=>e.inspect(),`Exit inspect (Esc)`);We.append(Ge,q),Be.append(Ve,He,Ue,We);let J=document.createElement(`button`);J.className=`vui-show`,J.innerHTML=`⌃ Controls`,J.title=`Show controls (M)`,J.addEventListener(`click`,()=>Xe(!1));let Y=document.createElement(`div`);Y.className=`vui-style`,document.body.append(o,ze,a,J,Y,Be,O,A,z);let Ke=n,qe=!1;Xe(r);function Je(){let e=t();De.btns.forEach(t=>t.classList.toggle(`on`,t.dataset.val===e.post)),Oe.classList.toggle(`on`,!!e.vector),Ie.btns.forEach(t=>t.classList.toggle(`on`,t.dataset.val===e.cam)),h.textContent=p[e.weather]||`Clear`,h.classList.toggle(`on`,e.weather!==`clear`),g.textContent=m[e.season]||`Spring`,g.classList.toggle(`on`,(e.season||0)>0),_.textContent=e.office?`Exit`:`Office`,_.classList.toggle(`on`,!!e.office),y.textContent=v[e.officeSkin]||`Skin`,y.classList.toggle(`on`,e.officeSkin&&e.officeSkin!==`3d`),x.textContent=b[e.officeProps]||`Props`,x.classList.toggle(`on`,e.officeProps===`painted`&&e.officeSkin&&e.officeSkin!==`3d`),Ne.textContent=e.auto?`❚❚`:`▶`,Ne.classList.toggle(`on`,e.auto),Ae.textContent=ke[e.era]||`Era`,Ae.classList.toggle(`on`,e.era&&e.era!==`native`),S.textContent=e.inspect?`Exit`:`Inspect`,S.classList.toggle(`on`,!!e.inspect),w.textContent=e.world?`Exit`:`World`,w.classList.toggle(`on`,!!e.world),E.textContent=C[e.worldPreset]||`Valley`,T.style.display=e.world?``:`none`,F.style.display=e.world?``:`none`,E.style.display=e.world?``:`none`,D.style.display=e.world?``:`none`,D.classList.toggle(`on`,!!e.sculpt),k(e.tools),O.classList.toggle(`open`,!!e.sculpt),ee&&ee.forEach(t=>t.classList.toggle(`on`,t.dataset.id===e.editTool)),A.classList.toggle(`open`,!!e.sculpt);let n=e.editTool,r=n===`paint`,i=n===`scatter`,a=n===`place`,o=n===`sculpt`;j.textContent={place:`✚ Place`,sculpt:`⛰ Sculpt`,paint:`🎨 Paint`,scatter:`🌲 Objects`,select:`◳ Select`}[n]||`Editor`,te.style.display=n===`select`?`none`:``,re.style.display=o?``:`none`,M.style.display=i?``:`none`,le(e.materials),I.style.display=r?``:`none`,ce&&ce.forEach((t,n)=>t.classList.toggle(`on`,n===e.material)),de(e.scatterKinds),ue.style.display=i?``:`none`,L&&L.forEach(t=>t.classList.toggle(`on`,t.dataset.key===e.scatterType)),R(e.entityKinds),fe.style.display=a?``:`none`,pe&&pe.forEach(t=>t.classList.toggle(`on`,t.dataset.key===e.entityKind)),me.seg.style.display=a?``:`none`,me.btns.forEach(t=>t.classList.toggle(`on`,t.dataset.val===String(e.dropN))),N.style.display=i||a||o?``:`none`,N.textContent=a?e.sculptRaise?`➕ Place`:`🗑 Delete`:i?e.sculptRaise?`➕ Add`:`➖ Erase`:e.sculptRaise?`↑ Raise`:`↓ Lower`,P.disabled=!e.canUndo,P.style.opacity=e.canUndo?``:`0.45`,se.classList.toggle(`on`,!!e.scatterHidden),ne.value=String(e.brushRadius),ie.value=String(e.brushStrength),ae.value=String(e.brushDensity),z.classList.toggle(`open`,!!e.sculpt);let s=e.saveSlots||[],c=s.join(`,`);if(c!==B){B=c,ve.innerHTML=``;let e=document.createElement(`option`);e.value=``,e.textContent=s.length?`— ${s.length} saved —`:`— no saves —`,ve.append(e);for(let e of s){let t=document.createElement(`option`);t.value=e,t.textContent=e,ve.append(t)}}Ce.textContent=e.saveStatus||``,Ee.classList.toggle(`on`,!!e.realistic),Me||(je.value=String(e.t))}Je();let Ye=setInterval(Je,200);function Xe(e){if(!Ke){a.style.display=`none`,J.classList.remove(`on`),o.classList.remove(`open`),ze.classList.remove(`open`),Y.classList.remove(`on`);return}qe=e,a.style.display=e?`none`:`flex`,J.classList.toggle(`on`,e),e&&(o.classList.remove(`open`),ze.classList.remove(`open`),Y.classList.remove(`on`))}function Ze(){Xe(!qe)}function Qe(){if(!ze.classList.contains(`open`))return;let e=a.getBoundingClientRect();ze.style.bottom=Math.round(window.innerHeight-e.top+8)+`px`}let $e=()=>Qe();window.addEventListener(`resize`,$e);let et=null,tt=null;function nt(e){if(!Ke||qe){Y.classList.remove(`on`),et=null;return}if(!e){Y.classList.remove(`on`),et=``;return}e!==et&&(et=e,Y.textContent=e,Y.classList.add(`on`),clearTimeout(tt),tt=setTimeout(()=>Y.classList.remove(`on`),2e3))}let rt=null;function it(e){if(!Ke||!e){Be.classList.remove(`open`),rt=null;return}let t=e.hint?`hint:${e.hint}`:`${e.kind}|${e.info}`;t!==rt&&(rt=t,e.hint?(Ve.textContent=`INSPECT`,He.textContent=`Free-fly`,Ue.textContent=e.hint,Ge.style.display=``):(Ve.textContent=e.kind,He.textContent=e.label||e.kind,Ue.textContent=e.info||``,Ge.style.display=``),Be.classList.add(`open`))}return{toggle:Ze,setHidden:Xe,refresh:Je,setStyleHint:nt,setInspect:it,destroy(){clearInterval(Ye),window.removeEventListener(`resize`,$e),a.remove(),o.remove(),ze.remove(),J.remove(),Y.remove(),Be.remove(),O.remove(),A.remove(),z.remove(),i.remove(),clearTimeout(tt)}};function at(){let e=document.createElement(`div`);return e.className=`sep`,e}}var Gr=`lgr_hints_`,Kr=!1;function qr(){if(Kr||typeof document>`u`)return;Kr=!0;let e=document.createElement(`style`);e.textContent=`
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
  }`,document.head.appendChild(e)}function Jr({key:e,title:t=`Tips`,tips:n=[],force:r=!1}={}){let i={key:e,shown:!1,dismissed:!1,seen:!1};if(typeof window<`u`&&(window.__hints=i),typeof document>`u`||!e)return{dismiss(){},el:null};let a=Gr+e,o=!1;try{o=localStorage.getItem(a)===`1`}catch{}if(o&&!r)return i.seen=!0,{dismiss(){},el:null};qr();let s=!!(window.matchMedia&&window.matchMedia(`(prefers-reduced-motion: reduce)`).matches),c=document.createElement(`div`);c.className=`lgr-hints`,c.innerHTML=`<div class="lgr-hints-card">
    <div class="lgr-hints-h">${t}</div>
    <ul>${n.map(e=>`<li>${e}</li>`).join(``)}</ul>
    <button class="lgr-hints-ok">Got it</button>
    <button class="lgr-hints-x" title="Dismiss (Esc)" aria-label="Dismiss">✕</button>
  </div>`,document.body.appendChild(c),i.shown=!0,s?c.classList.add(`on`):requestAnimationFrame(()=>c.classList.add(`on`));let l=!1;function u(e=!0){if(!l){if(l=!0,e)try{localStorage.setItem(a,`1`)}catch{}i.dismissed=!0,window.removeEventListener(`keydown`,d),c.classList.remove(`on`),setTimeout(()=>c.remove(),s?0:300)}}function d(e){e.key===`Escape`&&u(!0)}return window.addEventListener(`keydown`,d),c.querySelector(`.lgr-hints-ok`).addEventListener(`click`,()=>{navigator.vibrate?.(10),u(!0)}),c.querySelector(`.lgr-hints-x`).addEventListener(`click`,()=>{navigator.vibrate?.(10),u(!0)}),{dismiss:u,el:c}}var Yr=`precision highp float;

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
}`;function Xr({rate:e=4.6}={}){let t=new M({vertexShader:br,fragmentShader:Yr,uniforms:{uA:{value:null},uB:{value:null},uT:{value:0},uFocus:{value:new z(.5,.5)}}}),n=`a`,r=0;function i(e,n){t.uniforms.uA.value=e,t.uniforms.uB.value=n}function a(e){return n===`a`?(e&&t.uniforms.uFocus.value.copy(e),n=`in`,!0):!1}function o(){return n!==`b`&&n!==`in`?!1:(n=`out`,!0)}function s(e){n=e===`b`?`b`:`a`,r=+(e===`b`),t.uniforms.uT.value=r}function c(i){return r+=(+(n===`b`||n===`in`)-r)*Math.min(1,i*e),n===`in`&&r>.992&&(r=1,n=`b`),n===`out`&&r<.008&&(r=0,n=`a`),t.uniforms.uT.value=r,n}return{material:t,setSources:i,enter:a,exit:o,update:c,snap:s,get mode(){return n},get t(){return r},get transitioning(){return n===`in`||n===`out`}}}var Zr=null;function Qr(){if(Zr)return Zr;let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return n.addColorStop(0,`rgba(0,0,0,0.60)`),n.addColorStop(.55,`rgba(0,0,0,0.32)`),n.addColorStop(1,`rgba(0,0,0,0.0)`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,128/2,0,Math.PI*2),t.fill(),Zr=new R(e),Zr.colorSpace=de,Zr}function $r({w:e=.6,d:t=.6,x:n=0,y:r=.002,z:i=0,opacity:a=.5,rotation:o=0}={}){let s=new _(new m(e,t),new y({map:Qr(),transparent:!0,opacity:a,depthWrite:!1,toneMapped:!1}));return s.rotation.x=-Math.PI/2,s.rotation.z=o,s.position.set(n,r,i),s.renderOrder=-1,s.raycast=()=>{},s}function ei({yawLimit:e=80,pitchUp:t=32,pitchDown:n=20,sensitivity:r=.16,keySpeed:i=70,damp:a=9}={}){let o=Math.PI/180,s=(e,t,n)=>e<t?t:e>n?n:e,c=0,l=0,u=0,d=0;return{addDrag(i,a){u=s(u-i*r,-e,e),d=s(d-a*r,-n,t)},addKeys(r,{left:a,right:o,up:c,down:l}){let f=i*r;a&&(u=s(u+f,-e,e)),o&&(u=s(u-f,-e,e)),c&&(d=s(d+f,-n,t)),l&&(d=s(d-f,-n,t))},recenter(){u=0,d=0},update(e){let t=1-Math.exp(-a*e);c+=(u-c)*t,l+=(d-l)*t},get yaw(){return c*o},get pitch(){return l*o},get active(){return Math.abs(c)>.05||Math.abs(l)>.05}}}var ti=null;function ni(){if(ti)return ti;let e=document.createElement(`canvas`);e.width=e.height=256;let t=e.getContext(`2d`),n=t.createRadialGradient(256/2,256/2,256*.32,256/2,256/2,256*.72);return n.addColorStop(0,`rgba(0,0,0,0)`),n.addColorStop(1,`rgba(0,0,0,1)`),t.fillStyle=n,t.fillRect(0,0,256,256),ti=new R(e),ti.colorSpace=de,ti}function ri({strength:e=.55,dist:n=.5}={}){let r=new _(new m(1,1),new y({map:ni(),transparent:!0,opacity:e,depthTest:!1,depthWrite:!1,toneMapped:!1}));r.renderOrder=9999,r.raycast=()=>{},r.frustumCulled=!1;let i=new B;return r.fit=e=>{e.getWorldDirection(i),r.position.copy(e.position).addScaledVector(i,n),r.quaternion.copy(e.quaternion);let a=2*Math.tan(t.degToRad(e.fov)*.5)*n*1.05;r.scale.set(a*e.aspect,a,1)},r}export{qe as _,Jr as a,zr as c,Pr as d,Fr as f,Ke as g,bt as h,Xr as i,jr as l,br as m,$r as n,Wr as o,Ar as p,ri as r,Vr as s,ei as t,Nr as u,q as v,H as y};