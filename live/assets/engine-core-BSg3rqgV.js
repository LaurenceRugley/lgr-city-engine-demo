import{$ as e,B as t,C as n,D as r,E as i,F as a,H as o,I as s,K as c,L as l,M as u,N as d,O as f,P as p,Q as m,R as h,S as g,T as _,V as v,W as y,Y as b,_ as x,a as S,at as C,c as w,dt as T,et as E,f as D,g as O,h as k,i as A,it as j,j as M,l as N,lt as P,m as ee,n as F,nt as I,o as te,p as L,q as ne,s as re,t as R,tt as z,u as B,ut as V,v as ie,w as ae,x as H,z as oe}from"./three-fx94vX-a.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var se=Math.atan(1/Math.SQRT2),U=Math.atan(.5),ce=Math.PI/4,W={PERSPECTIVE:4,ISOMETRIC:5,DIMETRIC:6},le=.12,ue=1.45,de=4,fe=40,pe=1.5,me=16,he=6,ge=22,G=3.5,_e=11,ve=(e,t,n)=>e+(t-e)*(1-Math.exp(-8*n)),ye=(e,t)=>e+Math.PI*2*Math.round((t-e)/(Math.PI*2));function be({aspect:e,fov:n=48,near:r=.1,far:i=100,target:a=new V(0,.8,0),azimuth:s=ce,elevation:c=.52,distance:l=12,zoom:u=5.5}={}){let f=new o(n,e,r,i),p=new t(-1,1,1,-1,r,i),m=W.PERSPECTIVE,h=e,g={azimuth:s,elevation:c,distance:l,zoom:u,target:a.clone()},_={azimuth:s,elevation:c,distance:l,zoom:u,target:a.clone()},v=!1,y=()=>m===W.PERSPECTIVE?f:p;function b(e){e!==m&&(m=e,m===W.ISOMETRIC||m===W.DIMETRIC?(g.elevation=m===W.ISOMETRIC?se:U,g.azimuth=ye(ce,_.azimuth),v=!0):v=!1)}function x(e,t){g.azimuth+=e,v||(g.elevation=d.clamp(g.elevation+t,le,ue))}function S(e){m===W.PERSPECTIVE?g.distance=d.clamp(g.distance*e,de,fe):g.zoom=d.clamp(g.zoom*e,pe,me)}function C(e,t){let n=g.azimuth,r=m===W.PERSPECTIVE?g.distance*.04:g.zoom*.08,i=new V(Math.cos(n),0,-Math.sin(n)),a=new V(-Math.sin(n),0,-Math.cos(n));g.target.addScaledVector(i,e*r),g.target.addScaledVector(a,t*r)}function w(e,t){h=e/t,f.aspect=h,f.updateProjectionMatrix()}function T(e){_.azimuth=ve(_.azimuth,g.azimuth,e),_.elevation=ve(_.elevation,g.elevation,e),_.distance=ve(_.distance,g.distance,e),_.zoom=ve(_.zoom,g.zoom,e),_.target.x=ve(_.target.x,g.target.x,e),_.target.y=ve(_.target.y,g.target.y,e),_.target.z=ve(_.target.z,g.target.z,e);let t=Math.cos(_.elevation),n=Math.sin(_.elevation),r=Math.cos(_.azimuth),i=Math.sin(_.azimuth),a=y();if(a.position.set(_.target.x+_.distance*t*i,_.target.y+_.distance*n,_.target.z+_.distance*t*r),a.lookAt(_.target),a.isOrthographicCamera){let e=_.zoom,t=e*h;a.left=-t,a.right=t,a.top=e,a.bottom=-e,a.updateProjectionMatrix()}}function E(e,t,n,r=!1){g.target.set(e,t,n),r&&_.target.copy(g.target)}function D(e,t=!1){g.zoom=d.clamp(e,pe,me),t&&(_.zoom=g.zoom)}return{get camera(){return y()},get mode(){return m},get azimuth(){return _.azimuth},setTarget:E,setZoom:D,get styleT(){return m===W.PERSPECTIVE?d.clamp((_.distance-he)/(ge-he),0,1):d.clamp((_.zoom-G)/(_e-G),0,1)},setMode:b,orbit:x,zoomBy:S,pan:C,setViewport:w,update:T}}var xe={value:0},Se=new L(`#ffffff`),Ce={value:0},we={value:0},Te={value:0},Ee=new P,De={value:0},Oe={value:0},ke=`
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
`;function K(e){e.uniforms.uVector=xe,e.uniforms.uVecTint={value:Se},e.uniforms.uVecShadow=Ce,e.uniforms.uSnow=we,e.uniforms.uCloud=Te,e.uniforms.uCloudOff={value:Ee},e.uniforms.uFogCharm=De}function Ae(e){return e.replace(`#include <fog_fragment>`,`
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
  `)}function je(e){return e.replace(`#include <common>`,`#include <common>
varying vec3 vVecN;
varying vec3 vVecP;
varying vec2 vWorldXZ;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
  vVecN = normal;
  vVecP = position;
  vWorldXZ = (modelMatrix * vec4(position, 1.0)).xz;`)}function Me(e){return e.replace(`#include <shadowmap_pars_fragment>`,`#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>`)}var Ne=`col *= mix(1.0, getShadowMask(), uVecShadow);`;function Pe(e,{color:t,id:n,windowGlow:r,winColors:i=[`#ffb852`,`#8cd9ff`],litFrac:a=.55}={}){let o=[0,1,2].map(e=>new L(i[e]??i[i.length-1]));return e.customProgramCacheKey=()=>`lgr-vec-tower`,e.onBeforeCompile=e=>{K(e),e.uniforms.uWindowGlow=r,e.uniforms.uWinId={value:n},e.uniforms.uVecColor={value:new L(t)},e.uniforms.uWinA={value:o[0]},e.uniforms.uWinB={value:o[1]},e.uniforms.uWinC={value:o[2]},e.uniforms.uWinLit={value:a},e.vertexShader=je(e.vertexShader),e.fragmentShader=Ae(Me(e.fragmentShader.replace(`#include <common>`,`#include <common>
        uniform float uWindowGlow;
        uniform float uWinId;
        uniform vec3  uVecColor;
        uniform vec3  uWinA; uniform vec3 uWinB; uniform vec3 uWinC;
        uniform float uWinLit;
        ${ke}
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
          ${Ne}                                  // the sun's shadow darkens the body
          vec3 wcol; vec2 w = winTerms(wcol);
          vec3 glass = vec3(0.17, 0.23, 0.34);          // dark glass-blue panes (day)
          col = mix(col, glass, w.x * 0.85);
          col += w.x * w.y * wcol * uWindowGlow * 1.5;  // …windows EMIT (unshadowed) at night
          gl_FragColor = vec4(col, diffuseColor.a);
        }`)))},e}function q(e,{color:t=null,glow:n=null,glowDay:r=0,glowNight:i=1,windowGlow:a=null,season:o=!1}={}){let s=t===null,c=n!==null&&a!==null;return e.customProgramCacheKey=()=>`lgr-vec|`+(s?`d`:`c`)+(c?`g`:``)+(o?`s`:``),e.onBeforeCompile=e=>{K(e),s||(e.uniforms.uVecColor={value:new L(t)}),c&&(e.uniforms.uGlow={value:new L(n)},e.uniforms.uGlowDay={value:r},e.uniforms.uGlowNight={value:i},e.uniforms.uWindowGlow=a),o&&(e.uniforms.uSeason=Oe),e.vertexShader=je(e.vertexShader);let l=s?`diffuseColor.rgb`:`uVecColor`,u=o?`seasonShift(${l})`:l,d=(s?``:`uniform vec3 uVecColor;
`)+(c?`uniform vec3 uGlow; uniform float uGlowDay; uniform float uGlowNight; uniform float uWindowGlow;
`:``)+(o?`uniform float uSeason;
vec3 seasonShift(vec3 c){
  c = mix(c, vec3(0.86, 0.46, 0.13), smoothstep(0.40, 0.70, uSeason));   // → autumn orange
  c = mix(c, vec3(0.46, 0.33, 0.20), smoothstep(0.75, 1.00, uSeason));   // → bare brown
  return c;
}
`:``),f=c?`uGlow * mix(uGlowDay, uGlowNight, uWindowGlow)`:`vec3(0.0)`,p=Ae(Me(e.fragmentShader.replace(`#include <common>`,`#include <common>
`+d+ke).replace(`#include <opaque_fragment>`,`#include <opaque_fragment>
        if (uVector > 0.5) {
          vec3 col = vecShade(${u});
          ${Ne}                            // the sun's shadow darkens the flat tier…
          gl_FragColor = vec4(col + ${f}, diffuseColor.a);  // …but the night glow stays lit
        }`)));c&&(p=p.replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>\n  totalEmissiveRadiance += ${f};`)),e.fragmentShader=p},e}function J(e){let t=e>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Fe(e){let t=J(e);return{next:t,range:(e,n)=>e+(n-e)*t(),int:(e,n)=>e+Math.floor(t()*(n-e+1)),pick:e=>e[Math.floor(t()*e.length)],chance:e=>t()<e}}var Y=[{key:`manhattan`,name:`Manhattan`,towers:[`#EDE3C8`,`#D9B98A`,`#B5562F`,`#A8C8E8`,`#2E3F5C`],ground:`#7CC455`,street:`#9AA0A6`,sidewalk:`#C8CCD0`,park:`#5DB347`,water:`#29A8D8`,shopfronts:[`#C04A3A`,`#3A7AC0`,`#C09A2A`],glass:`#7FA8CC`,winColors:[`#ffd27a`,`#9ad6ff`],hMax:4.6,sigma:.36,roofRate:.35,pSplit:.6,nightLit:.55,roofTint:null,coast:{base:.55,out:1,in:.6,jag:1.05},landmarks:[`empireState`,`chrysler`,`liberty`]},{key:`paris`,name:`Paris`,towers:[`#E8DCC0`,`#F2EAD6`,`#E0D2B4`],ground:`#8CC46A`,street:`#A8A29A`,sidewalk:`#D4CEC2`,park:`#6DB35A`,water:`#3FA8C8`,shopfronts:[`#C04A3A`,`#3A6B5A`,`#7A5AC0`],glass:`#5A6B7A`,winColors:[`#ffdca0`,`#ffcaa0`],hMax:1.5,sigma:.9,roofRate:.15,pSplit:.75,nightLit:.45,roofTint:`#6A7886`,coast:{base:1.05,out:.55,in:.3,jag:.5},landmarks:[`eiffel`,`arcDeTriomphe`,`sacreCoeur`]},{key:`neoTokyo`,name:`Neo-Tokyo`,towers:[`#2A3038`,`#3A4250`,`#252B36`,`#4A4456`],ground:`#3A4A42`,street:`#5A6068`,sidewalk:`#7A8088`,park:`#2E5E46`,water:`#0E6878`,shopfronts:[`#E8483A`,`#5AE8E0`,`#E85AA0`],glass:`#5AE8E0`,winColors:[`#5AE8E0`,`#E85AA0`,`#E8E06A`],hMax:5.2,sigma:.42,roofRate:.6,pSplit:.6,nightLit:.7,roofTint:null,coast:{base:.7,out:1.05,in:.62,jag:1.7},landmarks:[`tokyoTower`,`pagoda`,`neonBillboard`]}],Ie=Y.map(e=>e.key),Le=.3,Re=1.9,ze=.55,X=2.45,Be=.12,Ve=.6,Z=6,Q={BASE:.7,OUT:.95,IN:.55,JAG:1,SAMPLES_PER_EDGE:28,HARBOR_DEPTH:.55,HARBOR_WIDTH:.26},He={PLINTH_TOP:Le,BLOCK:Re,STREET:ze,PITCH:X,SIDEWALK:Be,SHORE:Ve,N:Z,COAST:Q};function Ue(e,t,n){let r=n?.base??Q.BASE,i=n?.out??Q.OUT,a=n?.in??Q.IN,o=n?.jag??Q.JAG,s=t+r,c=Fe((e^789079)>>>0),l=[2,3,5,8,11,13].map(e=>({k:e,amp:1/e*o**((e-2)/6),phase:c.range(0,Math.PI*2)})),u=l.reduce((e,t)=>e+t.amp,0),d=e=>{let t=0;for(let n of l)t+=n.amp*Math.sin(n.k*e*Math.PI*2+n.phase);return Math.max(-1,Math.min(1,t/(u*.6)))},f=[{fix:+s,nx:1,nz:0,sign:1},{fix:+s,nx:0,nz:1,sign:-1},{fix:-s,nx:-1,nz:0,sign:-1},{fix:-s,nx:0,nz:-1,sign:1}],p=t+.22,m=Q.SAMPLES_PER_EDGE,h=4*m,g=[],_=0;for(let e=0;e<4;e++){let t=f[e];for(let n=0;n<m;n++,_++){let o=n/m,c=_/h,l=(-s+2*s*o)*t.sign,u=d(c),f=u>=0?u*i:u*a;if(e===0){let e=Math.abs(o-.5);if(e<Q.HARBOR_WIDTH){let t=.5+.5*Math.cos(e/Q.HARBOR_WIDTH*Math.PI);f-=(r+Q.HARBOR_DEPTH)*t}}let v,y;t.nx===0?(y=t.fix+t.nz*f,v=l,y=t.nz>0?Math.max(y,p):Math.min(y,-p)):(v=t.fix+t.nx*f,y=l,v=t.nx>0?Math.max(v,p):Math.min(v,-p)),g.push(new P(v,y))}}return{points:g,B:s,maxR:s+i,harborX:p}}function We(e){(Array.isArray(e)?e:[e]).forEach(e=>e&&e.dispose&&e.dispose())}function Ge({seed:e=1,profileIndex:t=0,landmarkFactory:n=null,windowGlow:r}){let o=new ae,c=new ae,u=new ae;c.raycast=()=>{},u.raycast=()=>{},o.add(c,u);let d=new ie(16773594,3);d.position.set(.45,.6,-.65).multiplyScalar(10);let f=new i(7313331,2762272,1);o.add(d,f);let p=0,m=[],h={seed:e,profileIndex:t,profile:Y[t],extent:0,meshCount:0};function g(e,t,n,r){let i=new a(new S(e,.04,t),q(new l({color:r,roughness:.95,flatShading:!0}),{color:r}));return i.position.y=n,i.userData.ground=!0,i}function _(e,t){for(let e of c.children)e.geometry&&e.geometry.dispose(),We(e.material);c.clear();for(let e of u.children)e.traverse(e=>{e.isMesh&&We(e.material)});u.clear(),m.length=0,p=0;let r=Fe(e),i=Y[t],o=(Z-1)/2*X,s=7.075;h={seed:e,profileIndex:t,profile:i,extent:s+(i.coast?.base??Q.BASE),meshCount:0};let d=Ue(e,s,i.coast);h.coast=d;let f=new z;d.points.forEach((e,t)=>t?f.lineTo(e.x,e.y):f.moveTo(e.x,e.y)),f.closePath();let _=new a(new H(f,{depth:2,bevelEnabled:!1,steps:1}),q(new l({color:i.ground,roughness:.9,flatShading:!0,side:2}),{color:i.ground}));_.rotation.x=-Math.PI/2,_.position.y=Le-2,_.userData.ground=!0,c.add(_);let S=2*7.195;c.add(g(S,S,.32,i.street)),x(d.harborX,i);let w=[];for(let e=0;e<Z;e++)for(let t=0;t<Z;t++)w.push([e,t]);let T=new Set,E=Math.max(1,Math.round(w.length*.08));for(;T.size<E;)T.add(r.int(0,w.length-1));let D=r.range(-2.45*.6,X*.6),O=r.range(-2.45*.6,X*.6),k=Math.hypot(o,o),j=[];if(w.forEach(([e,t],n)=>{let a=(e-(Z-1)/2)*X,o=(t-(Z-1)/2)*X;if(c.add(g(Re,Re,.32999999999999996,i.sidewalk).translateX(a).translateZ(o)),T.has(n)){c.add(g(Re-Be*2,Re-Be*2,.35,i.park).translateX(a).translateZ(o));let e=r.int(3,5);for(let t=0;t<e;t++)C(a+r.range(-.6,.6),o+r.range(-.6,.6),i,r);return}let s=Re-Be*2,l=r.chance(i.pSplit)?2:1,u=r.chance(i.pSplit)?2:1,d=s/l,f=s/u;for(let e=0;e<l;e++)for(let t=0;t<u;t++){let n=a-s/2+d*(e+.5),c=o-s/2+f*(t+.5),l=Math.max(.6,d-.1),u=Math.max(.6,f-.1),p=Math.hypot(n-D,c-O)/k,m=Math.exp(-(p*p)/(2*i.sigma*i.sigma)),h=Math.max(.5,.5+(i.hMax-.5)*m*r.range(.75,1.25));h>i.hMax*.5&&Math.min(l,u)>=.7&&j.push({lx:n,lz:c,fw:l,fd:u,h,r:p}),v(n,c,l,u,h,i,r)}}),n&&n.ready){j.sort((e,t)=>e.r-t.r);let e=[],t=i.landmarks;for(let r=0;r<t.length&&j.length;r++){let a=null;for(let t of j)if(e.every(e=>Math.hypot(e.lx-t.lx,e.lz-t.lz)>X*.9)){a=t;break}a||=j[0],e.push(a),y(a.lx,a.lz);let o=i.hMax*n.heightFactor(t[r]),s=n.make(t[r],{x:a.lx,z:a.lz,w:a.fw,d:a.fd,h:o,plinthTop:Le});if(s){u.add(s);let e=new A().setFromObject(s);b(e.min.x-.15,e.max.x+.15,e.min.z-.15,e.max.z+.15)}}}c.traverse(e=>{e.isMesh&&(e.userData.ground?(e.castShadow=!1,e.receiveShadow=!0):e.material&&e.material.isMeshBasicMaterial?(e.castShadow=!1,e.receiveShadow=!1):(e.castShadow=!0,e.receiveShadow=!0))}),u.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),h.meshCount=c.children.length+u.children.length;let M=0;for(let e of c.children){let t=e.position;M=(Math.imul(M,16777619)^(Math.round(t.x*100)*2654435761^Math.round(t.y*100)*40503^Math.round(t.z*100)*2246822519))>>>0}for(let e of h.coast.points)M=(Math.imul(M,16777619)^(Math.round(e.x*100)*2654435761^Math.round(e.y*100)*40503))>>>0;h.sig=M,window.__city={seed:e,profile:i.key,meshes:h.meshCount,sig:M}}function v(e,t,n,i,o,u,d){let f=Pe(new l({flatShading:!0,roughness:.7,metalness:.05}),{color:d.pick(u.towers),id:++p,windowGlow:r,winColors:u.winColors,litFrac:u.nightLit}),h=new a(new S(n,o,i),f);if(h.position.set(e,Le+o/2,t),h.userData.lot=[e,t],c.add(h),u.roofTint){let r=q(new l({color:u.roofTint,roughness:.85,flatShading:!0}),{color:u.roofTint}),s=new a(new S(n*1.02,.08,i*1.02),r);s.position.set(e,Le+o+.04,t),s.userData.lot=[e,t],c.add(s)}if(o<1.4){let r=d.pick(u.shopfronts),o=new a(new S(n*1.04,.18,i*1.04),q(new l({color:r,roughness:.8,flatShading:!0}),{color:r}));o.position.set(e,.39,t),o.userData.lot=[e,t],c.add(o)}if(o>u.hMax*.45&&d.chance(u.roofRate)){let r=d.chance(.5)?new a(new S(n*.4,.18,i*.4),q(new l({color:`#9a9a9a`,flatShading:!0}),{color:`#9a9a9a`})):new a(new k(n*.18,n*.18,.22,10),q(new l({color:`#b9bec4`,flatShading:!0}),{color:`#b9bec4`}));if(r.position.set(e+d.range(-.1,.1),Le+o+.11,t+d.range(-.1,.1)),r.userData.lot=[e,t],c.add(r),d.chance(.25)){let n=new a(new I(.05,6,5),new s({color:`#ff3b30`,transparent:!0,opacity:1}));n.position.set(e,Le+o+.26,t),n.userData.lot=[e,t],n.raycast=()=>{},c.add(n),m.push({mesh:n,phase:d.range(0,6.28)})}}}function y(e,t){for(let n=c.children.length-1;n>=0;n--){let r=c.children[n];r.userData.lot&&Math.abs(r.userData.lot[0]-e)<1e-4&&Math.abs(r.userData.lot[1]-t)<1e-4&&(r.geometry&&r.geometry.dispose(),We(r.material),c.remove(r))}for(let e=m.length-1;e>=0;e--)m[e].mesh.parent||m.splice(e,1)}function b(e,t,n,r){for(let i=c.children.length-1;i>=0;i--){let a=c.children[i];a.userData.lot&&a.position.x>=e&&a.position.x<=t&&a.position.z>=n&&a.position.z<=r&&(a.geometry&&a.geometry.dispose(),We(a.material),c.remove(a))}}function x(e,t){let n=q(new l({color:`#7a5634`,roughness:.95,flatShading:!0}),{color:`#7a5634`}),r=(e,t,r,i)=>{let o=new a(new S(e,.06,t),n);o.position.set(r,Le-.16,i),c.add(o)};r(.24,2,e+.02,0),r(1.3,.22,e+.7,-.72),r(1.3,.22,e+.7,.72)}function C(e,t,n,r){let i=new L(n.park),o=(n,o)=>{let s=i.clone().offsetHSL(0,0,r.range(-.06,.06)).getStyle(),u=new a(new I(n,7,6),q(new l({color:s,flatShading:!0}),{color:s,season:!0}));u.scale.y=.7,u.position.set(e,Le+o,t),u.userData.lot=null,c.add(u)},s=new a(new S(.05,.18,.05),q(new l({color:`#6b4a2a`,flatShading:!0}),{color:`#6b4a2a`}));s.position.set(e,.39,t),c.add(s),o(.22,.28),o(.16,.46)}function w(e){for(let t of m)t.mesh.material.opacity=.35+.65*(.5+.5*Math.sin(e*3+t.phase))}return _(e,t),{group:o,key:d,fill:f,update:w,generate:_,get state(){return h},get extent(){return h.extent},get waterColor(){return h.profile.water},profiles:Y}}var Ke=Math.PI*2,qe=.7,Je=90,Ye=[{name:`night`,sun:`#4a6f9e`,intensity:.35,hemiSky:`#26344f`,hemiGround:`#0c1018`,horizon:`#1e2942`,sky:`#36486e`,exposure:.95,outline:`#101a30`,window:1,toonGain:2.6},{name:`dawn`,sun:`#ff9e54`,intensity:2.4,hemiSky:`#8a7686`,hemiGround:`#2a1f1a`,horizon:`#b8512c`,sky:`#ffb070`,exposure:1.05,outline:`#241826`,window:.3,toonGain:2},{name:`noon`,sun:`#fff4e0`,intensity:4.6,hemiSky:`#9cb8cc`,hemiGround:`#33302a`,horizon:`#5e7689`,sky:`#aacadd`,exposure:1.18,outline:`#0b0a08`,window:0,toonGain:1.7},{name:`dusk`,sun:`#ff6b35`,intensity:2,hemiSky:`#7a566a`,hemiGround:`#281a18`,horizon:`#b0432a`,sky:`#ff8a5a`,exposure:1.05,outline:`#1f1420`,window:.4,toonGain:2}],Xe=e=>e-Math.floor(e),Ze=(e,t,n)=>e+(t-e)*n,Qe=(e,t,n)=>e+(t-e)*(1-Math.exp(-6*n));function $e({t:e=.5}={}){let t=e,n=e,r=!1,i=!1,a=Ye.map(e=>({name:e.name,sun:new L(e.sun),hemiSky:new L(e.hemiSky),hemiGround:new L(e.hemiGround),horizon:new L(e.horizon),sky:new L(e.sky),outline:new L(e.outline),intensity:e.intensity,exposure:e.exposure,window:e.window,toonGain:e.toonGain})),o=new V(0,1,0),s=new L(`#fff4e0`),c=new L(`#6f97b3`),l=new L(`#2a2620`),u=new L(`#3a4a57`),d=new L(`#7da3bd`),f=new L(`#0b0a08`),p=new L(`#000000`),m=3,h=1,g=0,_=1.7,v=new V;function y(e){let t=Xe(e)*4,n=Math.floor(t)%4,r=(n+1)%4,i=t-Math.floor(t),y=a[n],b=a[r];s.lerpColors(y.sun,b.sun,i),c.lerpColors(y.hemiSky,b.hemiSky,i),l.lerpColors(y.hemiGround,b.hemiGround,i),u.lerpColors(y.horizon,b.horizon,i),d.lerpColors(y.sky,b.sky,i),f.lerpColors(y.outline,b.outline,i),m=Ze(y.intensity,b.intensity,i),h=Ze(y.exposure,b.exposure,i),g=Ze(y.window,b.window,i),_=Ze(y.toonGain,b.toonGain,i),p.setRGB(.045*g,.075*g,.14*g);let x=Xe(e)*Ke-Math.PI/2,S=Math.cos(x),C=Math.sin(x);v.set(S,C*Math.cos(qe),C*Math.sin(qe)),v.y>=0?o.copy(v):o.copy(v).negate()}return y(t),{sunDir:o,sunColor:s,hemiSky:c,hemiGround:l,horizon:u,sky:d,outline:f,toonFloor:p,get sunIntensity(){return m},get exposure(){return h},get windowGlow(){return g},get toonGain(){return _},get t(){return Xe(t)},get auto(){return r},get clock(){let e=Math.round(Xe(t)*24*60)%1440;return`${String(Math.floor(e/60)).padStart(2,`0`)}:${String(e%60).padStart(2,`0`)}`},cyclePreset(){n=(Math.floor(t*4+1e-4)+1)/4},nudge(e){n+=e/24},goTo(e){n=e},toggleAuto(){r=!r},setReducedMotion(e){i=e},update(e){r&&!i&&(n+=e/Je),t=Qe(t,n,e),y(t)}}}function et(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.35,`rgba(255,255,255,0.55)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new w(e);return r.colorSpace=m,r}function tt(e,t){let n=[];for(let r=0;r<16;r++){let i=r/16*Math.PI*2;n.push(new V(Math.cos(i)*e,t,Math.sin(i)*e))}return new B(n,!0,`catmullrom`,.5)}function nt(e){let t=(t,n)=>Math.exp(-((e-t)*(e-t))/(2*n*n)),n=Math.max(t(.33,.05),t(.75,.06)),r=d.smoothstep(e,.24,.3)*(1-d.smoothstep(e,.8,.88));return d.clamp(.15+.55*r+.45*n,.12,1)}function rt(){let{PITCH:e,N:t,PLINTH_TOP:n}=He,r=t+1,i=n+.04,a=n=>(n-t/2)*e,o=t/2,s=[],c=(e,t)=>t*r+e;for(let e=0;e<r;e++)for(let t=0;t<r;t++)s.push({x:a(t),z:a(e),i:t,j:e,edges:[]});let l=[],u=(t,n)=>{let r=(s[t].i===o||s[t].j===o)&&(s[n].i===o||s[n].j===o),i=l.length;l.push({a:t,b:n,len:e,main:r}),s[t].edges.push(i),s[n].edges.push(i)};for(let e=0;e<r;e++)for(let t=0;t<r;t++)t<r-1&&u(c(t,e),c(t+1,e)),e<r-1&&u(c(t,e),c(t,e+1));return{nodes:s,edges:l,y:i,mid:o}}function it({plinthTop:e=.3,extent:t=4,profile:n=null}={}){let i=new ae,a=rt(),{nodes:o,edges:u}=a,f=a.y,p=.34,m=0;{let e=He.PITCH-p*2;m=Math.max(1,Math.floor((e+.26)/.56))}let h=new s({color:`#e8c84a`,fog:!0}),g=new r(new S(.05,.012,.3),h,u.length*m);g.frustumCulled=!1,g.raycast=()=>{},g.receiveShadow=!1,g.castShadow=!1,i.add(g);{let e=new oe,t=0;for(let n of u){let r=o[n.a],i=o[n.b],a=i.x-r.x,s=i.z-r.z,c=Math.hypot(a,s),l=a/c,u=s/c,d=Math.atan2(l,u),h=c-p*2;for(let n=0;n<m;n++){let i=p+(m===1?h/2:h*n/(m-1));e.position.set(r.x+l*i,f,r.z+u*i),e.rotation.set(0,d,0),e.updateMatrix(),g.setMatrixAt(t++,e.matrix)}}g.instanceMatrix.needsUpdate=!0}let _=new r(new S(.34,.26,.74),q(new l({flatShading:!0,roughness:.5,metalness:.3})),12);_.castShadow=!0,_.receiveShadow=!1,_.frustumCulled=!1,_.raycast=()=>{};let v=new re,y=new Float32Array(72),b=new Float32Array(72),x=new L(`#fff0c0`),C=new L(`#ff3528`);for(let e=0;e<12;e++)x.toArray(b,e*3),C.toArray(b,(12+e)*3),y[e*3+1]=-50,y[(12+e)*3+1]=-50;v.setAttribute(`position`,new te(y,3)),v.setAttribute(`color`,new te(b,3));let w=new ne({size:.72,sizeAttenuation:!0,map:et(),vertexColors:!0,transparent:!0,opacity:0,blending:2,depthWrite:!1}),T=new c(v,w);T.frustumCulled=!1,T.raycast=()=>{},i.add(_,T);let E=[`#f4c430`,`#c0392b`,`#d8dde2`,`#9aa7b4`,`#6b7785`,`#5a7d9a`],D=J(2403557),O=u.map((e,t)=>t).filter(e=>u[e].main),k=[];for(let e=0;e<12;e++){let t=e<4&&O.length?O[D()*O.length|0]:D()*u.length|0,n=e===1;k.push({edge:t,fwd:D()<.5,s:D()*u[t].len,speed:n?.5:.78+e%3*.1,lenZ:n?1.45:1,color:E[n?1:e===0?0:2+e%4],rng:J(12648430+e*2654435761)})}let A=new L;k.forEach((e,t)=>_.setColorAt(t,A.set(e.color)));function j(e,t,n){let r=o[e],i=r.edges.filter(e=>e!==t);if(i.length===0)return t;let a=u[t],s=a.a===e?a.b:a.a,c=r.x-o[s].x,l=r.z-o[s].z,d=Math.hypot(c,l)||1,f=i[0],p=-2;for(let t of i){let n=u[t],i=n.a===e?n.b:n.a,a=o[i].x-r.x,s=o[i].z-r.z,m=Math.hypot(a,s)||1,h=c/d*(a/m)+l/d*(s/m);h>p&&(p=h,f=t)}return n()<.65?f:i[n()*i.length|0]}let M=j,P=new oe,ee=(e,t)=>{P.position.set(0,-50,0),P.scale.setScalar(0),P.updateMatrix(),e.setMatrixAt(t,P.matrix)},F=.085,I=He.PLINTH_TOP+.02+.13,R=new r(new N(.04,.1,3,6),q(new l({flatShading:!0,roughness:.8})),14);R.castShadow=!0,R.receiveShadow=!1,R.frustumCulled=!1,R.raycast=()=>{};let z=tt(t-.72,e),B=[];for(let e=0;e<14;e++)B.push({phase:e/14,speed:.12+e%4*.02,dir:e%2?1:-1});let ie=new V,H=new V,se=new L;B.forEach((e,t)=>R.setColorAt(t,se.set([`#caa`,`#9ab`,`#bba`,`#ab9`][t%4]))),i.add(R);let U={manhattan:`#e8c84a`,paris:`#dcd2bc`,neoTokyo:`#5ae8e0`};function ce(e){e&&h.color.set(U[e.key]||`#e8c84a`)}ce(n);function W(t,n,r){let i=r?r.t:.5,a=r?r.windowGlow:0,s=Math.max(2,Math.round(nt(i)*12)),c=a>.05;for(let e=0;e<12;e++){if(e>=s){ee(_,e),y[e*3+1]=-50,y[(12+e)*3+1]=-50;continue}let n=k[e];n.s+=t*n.speed;let r=0;for(;n.s>=u[n.edge].len&&r++<4;){n.s-=u[n.edge].len;let e=n.fwd?u[n.edge].b:u[n.edge].a,t=M(e,n.edge,n.rng);n.edge=t,n.fwd=u[t].a===e}let i=u[n.edge],a=n.fwd?o[i.a]:o[i.b],l=n.fwd?o[i.b]:o[i.a],d=l.x-a.x,f=l.z-a.z,p=Math.hypot(d,f)||1,m=d/p,h=f/p,g=-h,v=m,b=a.x+m*n.s+g*F,x=a.z+h*n.s+v*F,S=Math.atan2(m,h);P.position.set(b,I,x),P.rotation.set(0,S,0),P.scale.set(1,1,n.lenZ),P.updateMatrix(),_.setMatrixAt(e,P.matrix);let C=.74*n.lenZ*.5,w=I+.06,T=e*3,E=(12+e)*3;c?(y[T]=b+m*(C+.04),y[T+1]=w,y[T+2]=x+h*(C+.04),y[E]=b-m*(C+.02),y[E+1]=w,y[E+2]=x-h*(C+.02)):(y[T+1]=-50,y[E+1]=-50)}_.instanceMatrix.needsUpdate=!0,v.attributes.position.needsUpdate=!0,w.opacity=d.clamp(a*1.8,0,1);let l=Math.max(2,Math.round(nt(i)*14));for(let t=0;t<14;t++){if(t>=l){ee(R,t);continue}let r=B[t],i=(r.phase+r.dir*r.speed*n*.02+1e3)%1;z.getPointAt(i,ie),z.getTangentAt(i,H);let a=Math.sin(n*6+r.phase*30)*.015;P.position.set(ie.x,e+.09+a,ie.z),P.rotation.set(0,Math.atan2(H.x*r.dir,H.z*r.dir),Math.sin(n*6+r.phase*30)*.06),P.scale.setScalar(1),P.updateMatrix(),R.setMatrixAt(t,P.matrix)}R.instanceMatrix.needsUpdate=!0}return{group:i,update:W,setProfile:ce,graph:a,setRouter(e){M=e||j}}}function at({frames:e=4,fps:t=8}={}){function n(t){let n=t.clone();return n.needsUpdate=!0,n.repeat.set(1/e,1),n.offset.set(0,0),n}function r(n,r,i=0){let a=(Math.floor(r*t+i)%e+e)%e;return n.offset.x=a/e,a}return{frames:e,fps:t,makeInstanceTexture:n,step:r}}function ot(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.4,`rgba(255,255,255,0.5)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new w(e);return r.colorSpace=m,r}function st(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64*.62,0,64/2,64*.62,64*.5);n.addColorStop(0,`rgba(240,250,255,0.95)`),n.addColorStop(1,`rgba(240,250,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new w(e);return r.colorSpace=m,r}function ct(){let e=document.createElement(`canvas`);e.width=256,e.height=64;let t=e.getContext(`2d`);t.strokeStyle=`#ffffff`,t.lineWidth=6,t.lineCap=`round`,t.lineJoin=`round`;let n=[14,24,36,24];for(let e=0;e<4;e++){let r=e*64,i=n[e];t.beginPath(),t.moveTo(r+8,40),t.quadraticCurveTo(r+24,i,r+32,36),t.quadraticCurveTo(r+40,i,r+56,40),t.stroke()}let r=new w(e);return r.colorSpace=m,r}function lt(e,t,n=18){let r=[];for(let i=0;i<n;i++){let a=i/n*Math.PI*2;r.push(new V(Math.cos(a)*e,t,Math.sin(a)*e))}return new B(r,!0,`catmullrom`,.5)}function ut(e,t,n){let r=e-t,i=[],a=(e,t)=>i.push(new V(e,n,t)),o=(e,n,r,i,o=4)=>{for(let s=1;s<=o;s++){let c=r+(i-r)*(s/o);a(e+Math.cos(c)*t,n+Math.sin(c)*t)}};for(let t=0;t<4;t++)a(e,-r+2*r*t/4);o(r,r,0,Math.PI/2);for(let t=0;t<4;t++)a(r-2*r*t/4,e);o(-r,r,Math.PI/2,Math.PI);for(let t=0;t<4;t++)a(-e,r-2*r*t/4);o(-r,-r,Math.PI,1.5*Math.PI);for(let t=0;t<4;t++)a(-r+2*r*t/4,-e);return o(r,-r,1.5*Math.PI,2*Math.PI),new B(i,!0,`catmullrom`,.5)}function dt({extent:e=8,waterSize:t=28,plinthTop:n=.3}={}){let r=new ae;r.raycast=()=>{};let i=.06,o=(e,n,r)=>r.set(e/t+.5,-n/t+.5,0),s=[ut(9.5,3,i),lt(12.7,i),new B([new V(8.4,i,0),new V(11,i,-3.6),new V(13,i,0),new V(11,i,3.6)],!0,`catmullrom`,.5)],u=s.map(e=>e.getLength());function f({scale:e=1,hull:t=`#6b7785`,cabin:n=`#e7ecf2`}){let r=new ae,i=new a(new S(.46*e,.2*e,1.1*e),q(new l({color:t,roughness:.6,metalness:.2,flatShading:!0}),{color:t}));i.position.y=.02;let o=new a(new S(.3*e,.22*e,.42*e),q(new l({color:n,roughness:.7,flatShading:!0}),{color:n}));return o.position.set(0,.18*e,.08*e),r.add(i,o),r.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!1),e.raycast=()=>{}}),r.userData.halfLen=.55*e,r}let p=[{laneIndex:0,dir:1,speed:.5,wake:.024,scale:1,hull:`#5a6675`,cabin:`#e7ecf2`},{laneIndex:1,dir:-1,speed:.42,wake:.022,scale:1,hull:`#7a5b46`,cabin:`#d9c3a6`},{laneIndex:0,dir:1,speed:.56,wake:.024,scale:.9,hull:`#456079`,cabin:`#cfe0ee`},{laneIndex:2,dir:1,speed:.34,wake:.03,scale:1.35,hull:`#39505f`,cabin:`#e2b85a`}];p.forEach((e,t)=>{e.mesh=f(e),e.u=t*.27%1,e.phase=t*1.7,e.isFerry=e.laneIndex===2,r.add(e.mesh)});let m=p.length,h=m*2,g=new re,_=new Float32Array(h*3).fill(-50),v=new Float32Array(h*3),y=new L(`#fff0c0`),b=new L(`#ff3528`);for(let e=0;e<m;e++)y.toArray(v,e*3),b.toArray(v,(m+e)*3);g.setAttribute(`position`,new te(_,3)),g.setAttribute(`color`,new te(v,3));let x=new c(g,new ne({size:.6,sizeAttenuation:!0,map:ot(),vertexColors:!0,transparent:!0,opacity:0,blending:2,depthWrite:!1}));x.frustumCulled=!1,x.raycast=()=>{},r.add(x);function w(e,t){let n=new a(new I(e,9,7),q(new l({color:t,roughness:.5,flatShading:!0}),{color:t}));return n.scale.set(.55,.5,1),n.castShadow=!1,n.receiveShadow=!1,n.raycast=()=>{},n.position.y=-5,n}let T=[{x:-9.5,z:6,size:.18,color:`#5b6f86`,period:11,arcH:.55,span:1.1,whale:!1},{x:7.5,z:-9.5,size:.16,color:`#4a6076`,period:14,arcH:.5,span:1,whale:!1},{x:-7,z:-8.5,size:.2,color:`#607089`,period:9,arcH:.6,span:1.2,whale:!1},{x:10.5,z:7,size:.62,color:`#3a4350`,period:38,arcH:.9,span:2.6,whale:!0}];T.forEach((e,t)=>{e.mesh=w(e.size,e.color),e.heading=Math.atan2(-e.x,-e.z),e.t=t/T.length*e.period,e.splashed=!1,r.add(e.mesh),e.whale&&(e.spout=new j(new C({map:st(),transparent:!0,opacity:0,depthWrite:!1,fog:!0})),e.spout.scale.set(.6,1.1,1),e.spout.position.set(e.x,-5,e.z),r.add(e.spout))});let E=ct(),D=at({frames:4,fps:7}),O=[`#ffffff`,`#cfd4da`,`#c8a06a`],k=[];for(let e=0;e<4;e++){let t=new j(new C({map:D.makeInstanceTexture(E),color:new L(O[e%O.length]),transparent:!0,opacity:0,depthWrite:!1,fog:!0}));t.scale.setScalar(.5),k.push({sp:t,r:8.6+e*.5,y:1.1+e%2*.5,speed:(.18+e*.03)*(e%2?-1:1),phase:e*1.9}),r.add(t)}typeof window<`u`&&(window.__gullAnim={frames:D.frames,variants:O.length,fps:D.fps});let A=T.length,M=Array.from({length:m+A},()=>new V),N=e=>e.laneIndex,P=new V,ee=new V,F=new V;function R(e,t,n){let r=n?n.windowGlow:0,a=1-r;for(let n=0;n<m;n++){let a=p[n],c=s[a.laneIndex],l=u[a.laneIndex],d=a.isFerry?.45+.55*Math.min(1,Math.abs((a.u+.5)%1-.5)*3):1,f=a.u;a.u=(a.u+a.dir*e*a.speed*d/l+1)%1,(a.dir>0?a.u<f:a.u>f)&&(a.laneIndex=N(a)),c.getPointAt(a.u,P),c.getTangentAt(a.u,ee);let h=ee.x*a.dir,g=ee.z*a.dir,v=Math.atan2(h,g),y=Math.sin(t*1.1+a.phase)*.025;a.mesh.position.set(P.x,i+y,P.z),a.mesh.rotation.set(Math.sin(t*.9+a.phase)*.04,v,0);let b=a.mesh.userData.halfLen;o(P.x-h*b,P.z-g*b,F),M[n].set(F.x,F.y,a.wake);let x=n*3,S=(m+n)*3;if(r>.05){let e=.18;_[x]=P.x+h*(b+.05),_[x+1]=e,_[x+2]=P.z+g*(b+.05),_[S]=P.x-h*(b+.02),_[S+1]=e,_[S+2]=P.z-g*(b+.02)}else _[x+1]=-50,_[S+1]=-50}z(),x.material.opacity=d.clamp(r*1.8,0,1);for(let t=0;t<A;t++){let n=T[t];n.t+=e;let r=m+t,a=n.whale?3.2:1.3;if(n.t>=n.period){let e=(n.t-n.period)/a;if(e>=1){n.t=0,n.splashed=!1,n.mesh.position.y=-5,n.spout&&(n.spout.material.opacity=0),M[r].set(0,0,0);continue}let t=Math.sin(Math.PI*e),s=(e-.5)*n.span,c=n.x+Math.sin(n.heading)*s,l=n.z+Math.cos(n.heading)*s;n.mesh.position.set(c,i-.1+t*n.arcH,l),n.mesh.rotation.set(Math.cos(Math.PI*e)*.9,n.heading,0);let u=e<.16||e>.84;if(o(c,l,F),M[r].set(F.x,F.y,u?n.whale?.07:.05:0),n.spout){let t=d.clamp((e-.15)*3,0,1)*(1-e);n.spout.position.set(c,.56+t*.6,l),n.spout.material.opacity=t*.9}}else n.mesh.position.y=-5,M[r].set(0,0,0),n.spout&&(n.spout.material.opacity=0)}for(let e=0;e<4;e++){let n=k[e],r=n.phase+t*n.speed*.25;n.sp.position.set(Math.cos(r)*n.r,n.y+Math.sin(t*1.4+n.phase)*.12,Math.sin(r)*n.r),n.sp.material.opacity=d.clamp(a*.9-.05,0,.85);let i=D.step(n.sp.material.map,t,n.phase);e===0&&typeof window<`u`&&(window.__gullFrame=i)}if(typeof window<`u`){let e=0;for(let t of T)t.mesh.position.y>i&&e++;window.__waterLife={boats:m,breaching:e,gulls:+k[0].sp.material.opacity.toFixed(2),lights:+x.material.opacity.toFixed(2)}}}function z(){g.attributes.position.needsUpdate=!0}function ie(){return M.length}return{group:r,update:R,wakeDrops:M,get wakeCount(){return ie()},lanes:s,setRouter(e){N=e||(e=>e.laneIndex)}}}var ft=[`empireState`,`chrysler`,`liberty`,`eiffel`,`arcDeTriomphe`,`sacreCoeur`,`tokyoTower`,`pagoda`,`neonBillboard`],pt={empireState:1.25,chrysler:1.1,liberty:.55,eiffel:3.2,arcDeTriomphe:1.5,sacreCoeur:1.75,tokyoTower:1.35,pagoda:.5,neonBillboard:.9};function mt(e){let t=()=>new l({flatShading:!0,roughness:.7,metalness:.1}),n=(n,r={})=>r.windows?Pe(t(),{color:n,id:e.id(),windowGlow:e.windowGlow,winColors:e.winColors,litFrac:e.litFrac}):q(t(),{color:n,glow:r.glow??null,glowDay:r.glowDay??0,glowNight:r.glowNight??1,windowGlow:r.glow?e.windowGlow:null});return{box:(e,t,r,i,o={})=>new a(new S(e,t,r),n(i,o)),cyl:(e,t,r,i,o={})=>new a(new k(e,t,r,o.seg||12),n(i,o)),cone:(e,t,r,i={})=>new a(new ee(e,t,i.seg||8),n(r,i)),sphere:(e,t,r={})=>new a(new I(e,r.seg||12,r.seg2||8),n(t,r)),lathe:(e,t,r={})=>new a(new f(e.map(e=>new P(e[0],e[1])),r.seg||4),n(t,r))}}var $=(e,t,n,r)=>(e.position.set(t,n,r),e),ht=[`#7FB0E0`,`#E07FB0`,`#7FE0A0`,`#E0C97F`,`#9FE07F`,`#7FE0E0`,`#FF8C42`,`#E0E07F`,`#C97FE0`,`#E07F7F`,`#7F9FE0`,`#E0483A`],gt={empireState(e,t){let n=`#E8E0CF`;e.add($(t.box(.42,.18,.42,n,{windows:!0}),0,.09,0)),e.add($(t.box(.34,.16,.34,n,{windows:!0}),0,.26,0)),e.add($(t.box(.26,.14,.26,n,{windows:!0}),0,.41,0)),e.add($(t.box(.19,.34,.19,n,{windows:!0}),0,.65,0)),e.add($(t.box(.13,.06,.13,n,{windows:!0}),0,.85,0));let r=ht[new Date().getMonth()];e.add($(t.cyl(.03,.045,.12,n,{seg:10,glow:r,glowNight:1.85}),0,.94,0)),e.add($(t.cone(.012,.07,n,{seg:8}),0,1.04,0))},chrysler(e,t){let n=`#C9CED4`;e.add($(t.box(.22,.55,.22,`#9AA7B4`,{windows:!0}),0,.275,0));let r=.55;for(let i=0;i<5;i++){let a=.14-i*.024,o=.07;e.add($(t.cyl(a*.7,a,o,n,{seg:8,glow:`#dfeaff`,glowNight:.5}),0,r+o/2,0)),r+=o}e.add($(t.cone(.018,.16,n,{seg:8}),0,r+.08,0))},liberty(e,t){let n=`#B9B4A6`,r=`#4FA890`;e.add($(t.box(.42,.16,.42,n),0,.08,0)),e.add($(t.box(.3,.2,.3,n),0,.26,0)),e.add($(t.cyl(.1,.15,.42,r,{seg:10}),0,.57,0)),e.add($(t.box(.11,.1,.11,r),0,.83,0));for(let n=0;n<7;n++){let i=(n/6-.5)*Math.PI*1.1;e.add($(t.cone(.012,.1,r,{seg:5}),Math.sin(i)*.1,.92,Math.cos(i)*.06-.02))}let i=$(t.cyl(.025,.03,.34,r,{seg:8}),.14,.98,0);i.rotation.z=.35,e.add(i),e.add($(t.box(.06,.06,.06,r,{glow:`#ffd060`,glowDay:.6,glowNight:1.2}),.2,1.16,0)),e.add($(t.cone(.04,.09,`#ffcf66`,{seg:6,glow:`#ffd060`,glowDay:.7,glowNight:1.3}),.2,1.24,0))},eiffel(e,t){let n=`#6E5C4C`,r=[[.2,0],[.13,.16],[.085,.33],[.055,.5],[.035,.66],[.02,.85],[0,.92]];e.add(t.lathe(r,n,{seg:4}));let i=t.lathe(r,n,{seg:4});i.rotation.y=Math.PI/4,e.add(i),e.add($(t.box(.26,.025,.26,n),0,.33,0)),e.add($(t.box(.14,.02,.14,n),0,.66,0)),e.add($(t.cone(.01,.1,n,{seg:6}),0,.97,0))},arcDeTriomphe(e,t){let n=`#D9D0C1`,r=.58,i=.5,o=.34,s=new z;s.moveTo(-.58/2,0),s.lineTo(r/2,0),s.lineTo(r/2,i),s.lineTo(-.58/2,i),s.lineTo(-.58/2,0);let c=new v,u=.15,d=.22;c.moveTo(-.15,0),c.lineTo(-.15,d),c.absarc(0,d,u,Math.PI,0,!0),c.lineTo(u,0),c.lineTo(-.15,0),s.holes.push(c);let f=new H(s,{depth:o,bevelEnabled:!1});f.translate(0,0,-.34/2),f.computeVertexNormals(),e.add(new a(f,q(new l({color:n,flatShading:!0}),{color:n}))),e.add($(t.box(r*1.06,.08,o*1.06,n),0,.54,0))},sacreCoeur(e,t){let n=`#F1EEE6`;e.add($(t.box(.5,.26,.4,n),0,.13,0));let r=(r,i,a,o)=>{e.add($(t.cyl(a*.9,a,i,n,{seg:12}),r,o,0));let s=$(t.sphere(a,n,{seg:12}),r,o+i/2,0);s.scale.y=1.5,e.add(s)};r(0,.22,.15,.4),r(-.2,.1,.07,.33),r(.2,.1,.07,.33)},tokyoTower(e,t){let n=`#F25822`,r=`#EDEDED`,i=0;for(let a=0;a<9;a++){let o=a/9,s=(a+1)/9,c=.19*(1-o)+.03*o,l=.19*(1-s)+.03*s,u=.085,d=a%2?r:n;e.add($(t.cyl(l,c,u,d,{seg:4,glow:n,glowDay:0,glowNight:.7}),0,i+u/2,0)),i+=u}e.add($(t.box(.22,.02,.22,n,{glow:n,glowNight:.7}),0,.28,0)),e.add($(t.box(.12,.02,.12,r),0,.5,0)),e.add($(t.cone(.012,.16,r,{seg:6,glow:`#ff6a2a`,glowNight:.9}),0,i+.08,0))},pagoda(e,t){let n=0;for(let r=0;r<5;r++){let i=.42-r*.06,a=.11;e.add($(t.box(i,a,i,`#B23A2C`,{windows:r<4}),0,n+a/2,0)),e.add($(t.box(i*1.34,.03,i*1.34,`#7A3B2A`),0,n+a+.015,0)),n+=.16999999999999998}e.add($(t.cyl(.012,.012,.1,`#E0C040`,{seg:6}),0,n+.05,0)),e.add($(t.sphere(.03,`#E0C040`,{seg:8,glow:`#ffe680`,glowNight:.8}),0,n+.12,0))},neonBillboard(e,t){let n=`#20242C`;e.add($(t.box(.3,1,.3,n,{windows:!0}),0,.5,0));let r=[`#5AE8E0`,`#E85AA0`,`#E8E06A`],i=(n,r,i,a,o,s,c)=>{let l=$(t.box(n,r,.02,i,{glow:i,glowDay:.6,glowNight:1.1}),a,o,s);l.rotation.y=c,e.add(l)};i(.22,.34,r[0],0,.75,.16,0),i(.16,.5,r[1],.16,.5,0,Math.PI/2),i(.2,.22,r[2],0,.34,-.16,0),e.add($(t.cone(.01,.14,n,{seg:6,glow:`#E85AA0`,glowDay:.4,glowNight:1}),0,1.08,0))}};function _t(e,t){let n=new ae;return gt[e](n,mt(t)),n}var vt=``+new URL(`building-skyscraper-d-CapD2Zqe.glb`,import.meta.url).href,yt=``+new URL(`building-n-hdv8kKtN.glb`,import.meta.url).href,bt=``+new URL(`building-g-CsTB1qH9.glb`,import.meta.url).href,xt=``+new URL(`colormap-CK8fW2HB.png`,import.meta.url).href,St={skyscraper:{url:vt,color:`#9cc1dd`,fill:.92},midrise:{url:yt,color:`#c9a07a`,fill:.96},setback:{url:bt,color:`#d9c7a0`,fill:.9}};function Ct({windowGlow:e}){let t=new u;t.setURLModifier(e=>e.includes(`colormap.png`)?xt:e);let n=new R(t),r={},i=!1,a=Promise.all(Object.entries(St).map(async([e,t])=>{r[e]=(await n.loadAsync(t.url)).scene})).then(()=>{i=!0,window.__landmarksReady=!0}).catch(e=>console.error(`landmark models failed:`,e)),o=9e3;function s(t,n,i={}){let a,s;if(ft.includes(t))a=_t(t,{windowGlow:e,winColors:i.winColors,litFrac:i.litFrac,id:()=>++o}),s=1;else{let e=r[t],n=St[t];if(!e||!n)return null;a=e.clone(!0),s=n.fill}a.updateMatrixWorld(!0);let c=new A().setFromObject(a).getSize(new V);a.scale.setScalar(n.h*s/c.y),a.updateMatrixWorld(!0);let l=new A().setFromObject(a),u=l.getCenter(new V);return a.position.x+=n.x-u.x,a.position.z+=n.z-u.z,a.position.y+=n.plinthTop-l.min.y,ft.includes(t)?a.traverse(e=>{e.isMesh&&(e.castShadow=!1,e.raycast=()=>{})}):a.traverse(n=>{if(!n.isMesh)return;n.castShadow=!1,n.raycast=()=>{};let r=n=>Pe(n.clone(),{color:St[t].color,id:++o,windowGlow:e,winColors:i.winColors,litFrac:i.litFrac});n.material=Array.isArray(n.material)?n.material.map(r):r(n.material)}),a}return{make:s,whenReady:a,heightFactor:e=>pt[e]??1,get ready(){return i}}}var wt=[`clear`,`rain`,`snow`,`fog`];function Tt({extent:e=7}={}){let t=new ae;t.raycast=()=>{};let n=e+2,i=.25,a=(e,t)=>e+Math.random()*(t-e),o=new r(new y(.015,.5),new s({color:`#a9bdd6`,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),600);o.frustumCulled=!1,o.raycast=()=>{};let c=new Float32Array(600*3),l=new Float32Array(600);for(let e=0;e<600;e++)c[e*3]=a(-n,n),c[e*3+1]=a(i,11),c[e*3+2]=a(-n,n),l[e]=a(9,14);let u=new r(new y(.07,.07),new s({color:`#f3f7ff`,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),700);u.frustumCulled=!1,u.raycast=()=>{};let d=new Float32Array(700*3),f=new Float32Array(700),p=new Float32Array(700);for(let e=0;e<700;e++)d[e*3]=a(-n,n),d[e*3+1]=a(i,11),d[e*3+2]=a(-n,n),f[e]=a(0,6.28),p[e]=a(.6,1.2);t.add(o,u);let m=Array.from({length:8},()=>new V),h=0,g=`clear`,_=0,v=0,b=0,x=0,S=0,C=new oe,w=(e,t,n,r)=>e+(t-e)*Math.min(1,n*r);function T(e){wt.includes(e)&&(g=e)}function E(){g=wt[(wt.indexOf(g)+1)%wt.length]}function D(e,t){let r=g===`rain`,s=g===`snow`,y=g===`fog`,T=g!==`clear`;_=w(_,+!!T,e,1.4),v=w(v,+!!T,e,1.2),b=w(b,+!!y,e,.9),S=w(S,T&&!y?1:0,e,1),x=w(x,+!!s,e,s?.22:.5);let E=r?_:0,D=Math.round(600*E);for(let t=0;t<600;t++){if(t>=D){C.position.set(0,-50,0),C.scale.setScalar(0),C.updateMatrix(),o.setMatrixAt(t,C.matrix);continue}c[t*3+1]-=l[t]*e,c[t*3]+=e*1.1,c[t*3+1]<i&&(c[t*3]=a(-n,n),c[t*3+1]=11,c[t*3+2]=a(-n,n)),C.position.set(c[t*3],c[t*3+1],c[t*3+2]),C.rotation.set(0,0,0),C.scale.set(1,1,1),C.updateMatrix(),o.setMatrixAt(t,C.matrix)}o.instanceMatrix.needsUpdate=!0,o.material.opacity=.55*E,h=r?Math.round(8*_):0;for(let e=0;e<h;e++)m[e].set(Math.random(),Math.random(),.05*_);let O=Math.round(700*(s?_:0));for(let r=0;r<700;r++){if(r>=O){C.position.set(0,-50,0),C.scale.setScalar(0),C.updateMatrix(),u.setMatrixAt(r,C.matrix);continue}d[r*3+1]-=p[r]*e;let o=Math.sin(t*1.5+f[r])*.5;d[r*3+1]<i&&(d[r*3]=a(-n,n),d[r*3+1]=11,d[r*3+2]=a(-n,n)),C.position.set(d[r*3]+o,d[r*3+1],d[r*3+2]),C.rotation.set(0,0,0),C.scale.setScalar(1),C.updateMatrix(),u.setMatrixAt(r,C.matrix)}u.instanceMatrix.needsUpdate=!0,u.material.opacity=.9*(s?_:0)}return{group:t,update:D,cycle:E,setKind:T,rainDrops:m,get kind(){return g},get intensity(){return _},get overcast(){return v},get fog(){return b},get snow(){return x},get cloud(){return S},get rainDropCount(){return h},poolCounts:{rain:600,snow:700}}}function Et(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=(e,n,r)=>{let i=t.createRadialGradient(e,n,0,e,n,r);i.addColorStop(0,`rgba(255,255,255,0.95)`),i.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=i,t.beginPath(),t.arc(e,n,r,0,7),t.fill()};n(128*.42,128*.56,128*.26),n(128*.6,128*.5,128*.3),n(128*.5,128*.46,128*.22),n(128*.34,128*.54,128*.18),n(128*.7,128*.58,128*.18);let r=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5],i=t.getImageData(0,0,128,128),a=i.data;for(let e=0;e<128;e++)for(let t=0;t<128;t++){let n=(e*128+t)*4,i=a[n+3]/255,o=(r[e%4*4+t%4]+.5)/16-.5;a[n+3]=Math.max(0,Math.min(1,Math.floor(i*5+.5+o)/5))*255}t.putImageData(i,0,0);let o=new w(e);return o.colorSpace=m,o}function Dt({extent:e=8,count:t=16}={}){let n=new ae;n.raycast=()=>{};let r=Et(),i=e+6,a=(e,t)=>e+Math.random()*(t-e),o=[];for(let e=0;e<t;e++){let e=new C({map:r,transparent:!0,depthWrite:!1,opacity:0,fog:!0}),t=new j(e),s={sp:t,mat:e,wisp:Math.random(),x:a(-i,i),z:a(-i,i),hiY:a(4,6.8),loY:a(.6,2.2),w:a(3,5.6),h:a(1.7,3),speed:a(.25,.7),op:a(.6,1)};t.raycast=()=>{},o.push(s),n.add(t)}let s=new L,c=new L(`#ffffff`),l=new L(`#5b626e`);function u(e,t,n,r){let u=r?r.cloud:0,d=r?r.fog:0,f=Math.min(1,.4+.6*u+.5*d);s.copy(n.sky).lerp(c,.62),s.lerp(l,.6*u);for(let n=0;n<o.length;n++){let r=o[n],c=n/o.length<f;r.x+=r.speed*e*(.6+.8*u),r.x>i&&(r.x=-i,r.z=a(-i,i));let l=Math.min(Ot(r.x,-i,-i+3),1-Ot(r.x,i-3,i)),p=r.hiY*(1-d)+r.loY*d,m=1-.5*r.wisp,h=.72*Math.max(0,1-d-u)+1*u+.42*d,g=c?Math.max(0,h)*r.op*m*l:0;r.mat.opacity+=(g-r.mat.opacity)*Math.min(1,e*2.5),r.mat.color.copy(s);let _=r.w*(1+.6*d)*(1+.4*r.wisp),v=r.h*(1-.35*d);r.sp.scale.set(_,v,1),r.sp.position.set(r.x,p+Math.sin(t*.3+n)*.15,r.z)}}function d(e){r=e;for(let t of o)t.mat.map=e,t.mat.needsUpdate=!0}return{group:n,update:u,setTexture:d,get count(){return o.length}}}function Ot(e,t,n){let r=Math.max(0,Math.min(1,(e-t)/(n-t)));return r*r*(3-2*r)}var kt=`varying vec2 vUv;

void main() {
  
  
  
  vUv = uv;

  
  
  
  
  
  
  
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,At=`precision highp float;

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
}`,jt=`varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0); 
}`,Mt=`precision highp float;

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
}`,Nt=`precision highp float;

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
}`,Pt=`precision highp float;

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
}`,Ft=`const float CA_STRENGTH   = 0.0030;  
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
}`,It=`const float DITHER = 0.55;   

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
}`,Lt=`precision highp float;

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
}`,Rt=`precision highp float;

varying vec2 vUv;
uniform sampler2D uToon;   
uniform sampler2D uPixel;  
uniform float     uBlend;  

void main() {
  vec3 t = texture2D(uToon, vUv).rgb;
  vec3 p = texture2D(uPixel, vUv).rgb;
  gl_FragColor = vec4(mix(t, p, uBlend), 1.0);
}`,zt=`precision highp float;

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
}`,Bt={"1-bit":{gridWidth:110,dither:.6,palette:[`#15120c`,`#c8b486`]},gb:{gridWidth:130,dither:.4,palette:[`#0f380f`,`#306230`,`#8bac0f`,`#9bbc0f`]},"8-bit":{gridWidth:160,dither:.55,palette:[`#140c1c`,`#442434`,`#30346d`,`#4e4a4e`,`#854c30`,`#346524`,`#d04648`,`#757161`,`#597dce`,`#d27d2c`,`#8595a1`,`#6daa2c`,`#d2aa99`,`#6dc2ca`,`#dad45e`,`#deeed6`]},"16-bit":{gridWidth:280,dither:.3,palette:`#000000.#222034.#45283c.#663931.#8f563b.#df7126.#d9a066.#eec39a.#fbf236.#99e550.#6abe30.#37946e.#4b692f.#524b24.#323c39.#3f3f74.#306082.#5b6ee1.#639bff.#5fcde4.#cbdbfc.#ffffff.#9badb7.#847e87.#696a6a.#595652.#76428a.#ac3232.#d95763.#d77bba.#8f974a.#8a6f30`.split(`.`)},modern:{gridWidth:460,dither:.6,palette:null}},Vt=[`gb`,`8-bit`,`16-bit`,`modern`],Ht={"ink-gold (day)":[`#16100A`,`#3A2F1E`,`#6B563A`,`#937B54`,`#B89968`],"ink-gold (night)":[`#0A0C16`,`#1C2236`,`#3A3A52`,`#5A5A78`,`#8A92B0`],"terminal (day)":[`#050805`,`#0E2912`,`#1E6B2F`,`#3CF06A`,`#FFB000`],"terminal (night)":[`#020604`,`#06180E`,`#10401E`,`#1E9040`,`#7FE0FF`],"neutral (photoreal)":[`#1B1B1E`,`#3D3A3A`,`#5E5750`,`#867C70`,`#A99C8A`,`#C8BCAB`,`#E3DCCF`,`#F5F1E8`],"cool (noir)":[`#0A0E14`,`#16202E`,`#243447`,`#3A536B`,`#5A7D96`,`#86A6BD`,`#B6CDDA`,`#E6EEF2`],"warm (sunset)":[`#190B0A`,`#3B150F`,`#6E2A17`,`#A8421F`,`#DB702F`,`#F2A23E`,`#F9CF76`,`#FDF0C4`],"vibrant (pop)":[`#1A1A2E`,`#E43F5A`,`#F9A826`,`#FFE05D`,`#2EC4B6`,`#3A86FF`,`#8338EC`,`#FFFFFF`],"mono (ink)":[`#0C0C0C`,`#2A2A2A`,`#474747`,`#666666`,`#8A8A8A`,`#B0B0B0`,`#D6D6D6`,`#F5F5F5`]};function Ut(e){let t=Math.max(e.length,1),n=new Float32Array(t*4);e.forEach((e,t)=>{let r=new L(e);n[t*4+0]=r.r,n[t*4+1]=r.g,n[t*4+2]=r.b,n[t*4+3]=1});let r=new O(n,t,1,b,g);return r.minFilter=h,r.magFilter=h,r.needsUpdate=!0,r}function Wt(e,t){let n=[];for(let t=0;t+2<e.length;t+=3)n.push([e[t],e[t+1],e[t+2]]);if(n.length===0)return[`#000000`];let r=e=>{let t=[255,255,255],n=[0,0,0];for(let r of e)for(let e=0;e<3;e++)t[e]=Math.min(t[e],r[e]),n[e]=Math.max(n[e],r[e]);let r=[n[0]-t[0],n[1]-t[1],n[2]-t[2]],i=r[0]>=r[1]&&r[0]>=r[2]?0:r[1]>=r[2]?1:2;return{ax:i,range:r[i]}},i=[n];for(;i.length<t;){let e=-1,t=-1;if(i.forEach((n,i)=>{if(n.length>1){let{range:a}=r(n);a>t&&(t=a,e=i)}}),e<0)break;let n=i[e],{ax:a}=r(n);n.sort((e,t)=>e[a]-t[a]);let o=n.length>>1;i.splice(e,1,n.slice(0,o),n.slice(o))}return i.map(e=>{let t=[0,0,0];for(let n of e)for(let e=0;e<3;e++)t[e]+=n[e];return`#`+t.map(t=>Math.round(t/e.length)).map(e=>e.toString(16).padStart(2,`0`)).join(``)})}var Gt=220,Kt={night:[`#0A0C16`,`#1C2236`,`#3A3A52`,`#5A5A78`,`#8A92B0`],dawn:[`#1A1008`,`#43281A`,`#7A4A30`,`#B07A4E`,`#E8A86A`],noon:[`#16100A`,`#3A2F1E`,`#6B563A`,`#937B54`,`#B89968`],dusk:[`#140A0A`,`#3E1E1A`,`#7A3828`,`#B85A36`,`#F0884A`]},qt={night:[`#020604`,`#06180E`,`#10401E`,`#1E9040`,`#7FE0FF`],dawn:[`#060603`,`#1A2410`,`#3A6B22`,`#6CC040`,`#FFC060`],noon:[`#050805`,`#0E2912`,`#1E6B2F`,`#3CF06A`,`#FFB000`],dusk:[`#080402`,`#241408`,`#6B4A12`,`#E0A030`,`#FF7030`]};function Jt({demo:r=!1,citySeed:i=0,profileIndex:o=0}={}){let c=new F({antialias:!0,preserveDrawingBuffer:!0});c.shadowMap.enabled=!0,c.shadowMap.type=1,c.shadowMap.autoUpdate=!1,c.shadowMap.needsUpdate=!0;let l=!!(window.matchMedia&&window.matchMedia(`(pointer: coarse)`).matches);c.setPixelRatio(Math.min(window.devicePixelRatio,l?1.5:2)),c.setSize(window.innerWidth,window.innerHeight),c.setClearColor(920327,1),document.body.appendChild(c.domElement);let u=c.getDrawingBufferSize(new P),f=new e;f.fog=new n(10465470,0);let g=new L(`#aeb6c0`),v=.062,S=new L(`#74508f`),C=new L,O=be({aspect:window.innerWidth/window.innerHeight}),k=$e({t:.5}),A={type:_,format:b,minFilter:h,magFilter:h,wrapS:D,wrapT:D,depthBuffer:!1,stencilBuffer:!1},j=[new T(256,256,A),new T(256,256,A),new T(256,256,A)];for(let e of j)c.setRenderTarget(e),c.clear();c.setRenderTarget(null);let N=new e,ee=new t(-1,1,1,-1,0,1),I=new E({vertexShader:jt,fragmentShader:Mt,uniforms:{uCurr:{value:null},uPrev:{value:null},uTexel:{value:new P(1/256,1/256)},uMouse:{value:new P(-1,-1)},uMouseStrength:{value:0},uC2:{value:.25},uDamping:{value:.992},uRainCount:{value:0},uRainDrops:{value:Array.from({length:8},()=>new V)},uWakeCount:{value:0},uWakeDrops:{value:Array.from({length:8},()=>new V)}}});N.add(new a(new y(2,2),I));let te=new T(u.x,u.y,{minFilter:M,magFilter:M,depthBuffer:!0,stencilBuffer:!1});function ne(e){let t=document.createElement(`canvas`);t.width=t.height=1024;let n=t.getContext(`2d`);n.fillStyle=e?`#0c1418`:`#15110b`,n.fillRect(0,0,1024,1024),n.strokeStyle=e?`rgba(120,150,170,0.22)`:`rgba(184,153,104,0.30)`,n.lineWidth=2;for(let e=0;e<=1024;e+=64)n.beginPath(),n.moveTo(e,0),n.lineTo(e,1024),n.stroke(),n.beginPath(),n.moveTo(0,e),n.lineTo(1024,e),n.stroke();e||(n.fillStyle=`#B89968`,n.font=`bold 360px Georgia, serif`,n.textAlign=`center`,n.textBaseline=`middle`,n.fillText(`LGR`,512,470),n.font=`600 64px ui-monospace, monospace`,n.fillText(`WEB · STUDIO`,512,720));let r=new w(t);return r.colorSpace=m,r}let re=new a(new y(28,28),new s({map:ne(r)}));re.rotation.x=-Math.PI/2,re.position.y=-.35,f.add(re);let R=new a(new y(40,24),new E({depthWrite:!1,vertexShader:kt,fragmentShader:At,uniforms:{uTime:{value:0},uInk:{value:k.horizon},uGold:{value:k.sky},uFogColor:{value:C},uFogAmt:{value:0},uFogCharm:De}}));R.position.set(0,3,-8),f.add(R);let z=new E({vertexShader:Nt,fragmentShader:Pt,uniforms:{uHeight:{value:null},uScene:{value:te.texture},uTexel:{value:new P(1/256,1/256)},uResolution:{value:new P(u.x,u.y)},uDisplace:{value:.42},uNormalStrength:{value:22},uRefractStrength:{value:.06},uChromaScale:{value:1},uNormalMatrix:{value:new p},uLightDir:{value:k.sunDir},uInk:{value:new L(`#2A2218`)},uGold:{value:new L(`#B89968`)},uVector:xe,uVecWater:{value:new L(`#1fb8d8`)},uVecTint:{value:Se}}}),B=new a(new y(28,28,255,255),z);B.rotation.x=-Math.PI/2,B.updateMatrixWorld(!0),z.uniforms.uNormalMatrix.value.getNormalMatrix(B.matrixWorld),f.add(B);let ie={value:0},ae=Ct({windowGlow:ie}),H=Ge({seed:i,profileIndex:o,landmarkFactory:ae,windowGlow:ie});f.add(H.group);let oe=it({plinthTop:.3,extent:H.extent,profile:H.state.profile});f.add(oe.group);let se=dt({extent:H.extent,waterSize:28,plinthTop:.3});f.add(se.group),I.uniforms.uWakeDrops.value=se.wakeDrops;let U=Tt({extent:H.extent});f.add(U.group),I.uniforms.uRainDrops.value=U.rainDrops;let ce=Dt({extent:H.extent});f.add(ce.group),H.group.remove(H.key),f.add(H.key),H.key.castShadow=!0,H.key.shadow.mapSize.set(2048,2048),H.key.shadow.bias=-18e-5,H.key.shadow.normalBias=.028,f.add(H.key.target);function W(){let e=H.key.shadow.camera,t=H.extent+4.5;e.left=-t,e.right=t,e.top=t,e.bottom=-t,e.near=1,e.far=48,e.updateProjectionMatrix(),c.shadowMap.needsUpdate=!0}W();let le=new x(u.x,u.y),ue=new T(u.x,u.y,{minFilter:M,magFilter:M,depthBuffer:!0,stencilBuffer:!1,depthTexture:le}),de=new T(u.x,u.y,{minFilter:M,magFilter:M,depthBuffer:!1,stencilBuffer:!1}),fe=new T(u.x,u.y,{minFilter:M,magFilter:M,depthBuffer:!1,stencilBuffer:!1}),pe=new T(u.x,u.y,{minFilter:M,magFilter:M,depthBuffer:!1,stencilBuffer:!1}),me=new e,he=new t(-1,1,1,-1,0,1),ge=new a(new y(2,2));me.add(ge);let G=new E({vertexShader:jt,fragmentShader:Ft,uniforms:{uScene:{value:ue.texture},uTime:{value:0},uResolution:{value:new P(u.x,u.y)},uGrain:{value:1},uChroma:{value:1},uExposure:{value:1}}}),_e=e=>{let t=e.map(e=>new L(e));for(;t.length<8;)t.push(new L(0,0,0));return t},ve=[`night`,`dawn`,`noon`,`dusk`],ye={inkgold:ve.map(e=>_e(Kt[e])),terminal:ve.map(e=>_e(qt[e]))},ke=new E({vertexShader:jt,fragmentShader:It,uniforms:{uScene:{value:de.texture},uResolution:{value:new P(u.x,u.y)},uPixelSize:{value:Gt},uPalette:{value:ye.inkgold[2]},uPaletteB:{value:ye.inkgold[2]},uPaletteBlend:{value:0},uPaletteSize:{value:5}}}),K=new E({vertexShader:jt,fragmentShader:zt,uniforms:{uScene:{value:de.texture},uResolution:{value:new P(u.x,u.y)},uGridWidth:{value:160},uDither:{value:.55},uPalette:{value:Ut(Bt[`8-bit`].palette)},uPaletteSize:{value:1},uUsePalette:{value:1}}}),Ae={};for(let e of Vt)Ae[e]=Bt[e].palette?Ut(Bt[e].palette):null;let je=new E({vertexShader:jt,fragmentShader:Lt,uniforms:{uScene:{value:de.texture},uDepth:{value:le},uResolution:{value:new P(u.x,u.y)},uBands:{value:4},uToonGain:{value:1.7},uToonGamma:{value:.6},uToonFloor:{value:k.toonFloor},uOutline:{value:k.outline},uNear:{value:.1},uFar:{value:100},uIsPerspective:{value:1}}}),Me=new E({vertexShader:jt,fragmentShader:Rt,uniforms:{uToon:{value:fe.texture},uPixel:{value:pe.texture},uBlend:{value:0}}});function Ne(e,t){ge.material=e,c.setRenderTarget(t),c.render(me,he)}function Pe(){O.setViewport(window.innerWidth,window.innerHeight),c.setSize(window.innerWidth,window.innerHeight);let e=c.getDrawingBufferSize(new P);return te.setSize(e.x,e.y),ue.setSize(e.x,e.y),de.setSize(e.x,e.y),fe.setSize(e.x,e.y),pe.setSize(e.x,e.y),z.uniforms.uResolution.value.set(e.x,e.y),G.uniforms.uResolution.value.set(e.x,e.y),ke.uniforms.uResolution.value.set(e.x,e.y),K.uniforms.uResolution.value.set(e.x,e.y),je.uniforms.uResolution.value.set(e.x,e.y),e}let q=3,J=!1,Fe=!1,Y=`native`,Ie=.3,Le=.46,Re=[`native`,...Vt],ze={"16-bit":`16-bit`,"8-bit":`8-bit`,gb:`Game Boy`,modern:`Modern`,native:`Pixel`,"1-bit":`1-bit`};typeof window<`u`&&(window.__mode=q,window.__vector=J,window.__era=Y);let X=0,Be=performance.now(),Ve=typeof window<`u`&&new URLSearchParams(window.location.search).has(`perf`);typeof window<`u`&&(window.__perf=Ve),Ve&&(c.info.autoReset=!1);let Z=null;typeof window<`u`&&(window.__loaded=!1);let Q=0,He=new V(1,1,1),Ue=!1;function We(e){let t=Fe?ye.terminal:ye.inkgold,n=e%1*4,r=Math.floor(n)%4;ke.uniforms.uPalette.value=t[r],ke.uniforms.uPaletteB.value=t[(r+1)%4],ke.uniforms.uPaletteBlend.value=n-Math.floor(n)}function Ke(e){let t=Bt[e];t&&(K.uniforms.uGridWidth.value=t.gridWidth,K.uniforms.uDither.value=t.dither,K.uniforms.uUsePalette.value=+!!t.palette,t.palette&&(K.uniforms.uPalette.value=Ae[e],K.uniforms.uPaletteSize.value=t.palette.length))}function qe(){Y!==`native`&&Ke(Y)}let Je=()=>Y===`native`?ke:K;function Ye(e,t){B.visible=!1,c.setRenderTarget(te),c.render(f,e),B.visible=!0,c.setRenderTarget(t),c.render(f,e)}function Xe(e,t){if(B.visible=!1,c.setRenderTarget(te),c.render(f,O.camera),B.visible=!0,q===1||J&&q!==7&&q!==8)c.setRenderTarget(t),c.render(f,O.camera);else if(c.setRenderTarget(ue),c.render(f,O.camera),q===2)G.uniforms.uGrain.value=1,G.uniforms.uChroma.value=1,Ne(G,t);else{G.uniforms.uGrain.value=0,G.uniforms.uChroma.value=0,Ne(G,de);let n=O.camera;je.uniforms.uNear.value=n.near,je.uniforms.uFar.value=n.far,je.uniforms.uIsPerspective.value=+!!n.isPerspectiveCamera;let r=e.era?(Ke(e.era),K):Je();e.kind===`pixel`?(Ne(r,t),window.__style=`pixel`):e.kind===`toon`?(Ne(je,t),window.__style=`toon`):(Ne(je,fe),Ne(r,pe),Me.uniforms.uBlend.value=e.blend,Ne(Me,t),window.__style=`blend`)}}function Ze(){let e=Qe(),t=e.kind===`toon`?1:e.kind===`blend`?1-e.blend:0;return z.uniforms.uChromaScale.value=d.lerp(1,.5,t),e}function Qe(){if(q===1||q===2)return{kind:`none`};if(q===7)return{kind:`pixel`};if(q===8)return{kind:`toon`};let e=O.styleT;return window.__styleT=e,e<=Ie?{kind:`toon`}:e>=Le?{kind:`pixel`,era:e<.62?`16-bit`:e<.8?`8-bit`:`gb`}:{kind:`blend`,blend:d.smoothstep(e,Ie,Le),era:`16-bit`}}function et(e){return q===1||q===2?``:J&&q!==7&&q!==8?`Vector`:e.kind===`toon`?`Toon`:e.kind===`pixel`?ze[e.era||Y]||`Pixel`:e.kind===`blend`?`Toon → `+(ze[e.era]||`Pixel`):``}function tt(e,t,{shadowsOn:n=!0,seasonTarget:r=0}={}){if(Ve){let e=c.info;Z={calls:e.render.calls,tris:e.render.triangles,programs:e.programs?e.programs.length:0,geo:e.memory.geometries,tex:e.memory.textures},e.reset()}R.material.uniforms.uTime.value=t,G.uniforms.uTime.value=t,k.update(e),H.key.position.copy(k.sunDir).multiplyScalar(24),H.key.color.copy(k.sunColor),H.key.intensity=k.sunIntensity,H.fill.color.copy(k.hemiSky),H.fill.groundColor.copy(k.hemiGround),ie.value=k.windowGlow;let i=U.overcast;H.key.intensity*=1-.5*i,H.key.color.lerp(g,.45*i),H.fill.intensity=1+.7*i;let a=d.smoothstep(k.sunDir.y,.06,.34),o=d.lerp(.28,1,1-k.windowGlow),s=n?a*o:0;H.key.shadow.intensity=.72*s,Ce.value=.52*s,(n&&!Ue||He.distanceToSquared(k.sunDir)>2e-5)&&(c.shadowMap.needsUpdate=!0,He.copy(k.sunDir)),Ue=n;let l=1-k.windowGlow;Se.setRGB(d.lerp(.46,1,l),d.lerp(.52,1,l),d.lerp(.74,1,l)),G.uniforms.uExposure.value=k.exposure,je.uniforms.uToonGain.value=k.toonGain,c.setClearColor(k.horizon,1),We(k.t),window.__t=k.t,oe.update(e,t,k),H.update(t),se.update(e,t,k),I.uniforms.uWakeCount.value=se.wakeCount,U.update(e,t),I.uniforms.uRainCount.value=U.rainDropCount;let u=U.fog*(1-l);f.fog.density=U.fog*v,C.copy(k.horizon).lerp(S,.85*u),f.fog.color.copy(C),c.setClearColor(C,1),De.value=U.fog,R.material.uniforms.uFogAmt.value=.7*U.fog,we.value=U.snow,Te.value=U.cloud*.55,Ee.x+=e*.018,Ee.y+=e*.009,Oe.value+=(r-Oe.value)*Math.min(1,e*1.5),ce.update(e,t,k,U),X++;let p=performance.now();p-Be>=1e3&&(window.__fps=X,Ve&&Z&&(console.log(`[perf] ${X} fps · ~${(1e3/Math.max(1,X)).toFixed(2)} ms · calls ${Z.calls} · tris ${Z.tris} · programs ${Z.programs} · geo ${Z.geo} · tex ${Z.tex}`),window.__perfInfo={fps:X,...Z}),X=0,Be=p);let[m,h,_]=j;if(I.uniforms.uPrev.value=m.texture,I.uniforms.uCurr.value=h.texture,c.setRenderTarget(_),c.render(N,ee),j=[h,_,m],z.uniforms.uHeight.value=j[1].texture,Q<2&&typeof document<`u`&&++Q===2){let e=document.getElementById(`lgr-loader`);e&&e.classList.add(`gone`),window.__loaded=!0}}function nt(e){q=e,window.__mode=q}function rt(){return J=!J,xe.value=+!!J,window.__vector=J,J}function at(e){return J=!!e,xe.value=+!!J,window.__vector=J,J}function ot(){return Y=Re[(Re.indexOf(Y)+1)%Re.length],window.__era=Y,qe(),Y}function st(){return Fe=!Fe,Fe}return{updateWorld:tt,decideStyle:Ze,renderCityPipeline:Xe,renderCityBeautyTo:Ye,styleHintName:et,setPostMode:nt,toggleVector:rt,setVector:at,cycleEra:ot,togglePalette:st,get mode(){return q},get vector(){return J},get sceneEra(){return Y},renderer:c,drawBuffer:u,scene:f,rig:O,sunRig:k,SIM:256,targets:j,simScene:N,simCamera:ee,simMaterial:I,grabRT:te,card:re,backdrop:R,WATER_SIZE:28,water:B,waterMaterial:z,windowGlow:ie,landmarkFactory:ae,city:H,cityLife:oe,waterLife:se,weatherRig:U,clouds:ce,fitShadowFrustum:W,SHADOW_DIST:24,sceneDepth:le,sceneRT:ue,filmicRT:de,toonRT:fe,pixelRT:pe,postScene:me,postCamera:he,postQuad:ge,filmicMaterial:G,pixelMaterial:ke,pixelkitMaterial:K,toonMaterial:je,mixMaterial:Me,PALCACHE:ye,ERA_TEX:Ae,runPass:Ne,OVERCAST_GREY:g,FOG_DENSITY:v,FOG_NIGHT_TINT:S,_fogColor:C,resize:Pe}}var Yt=[`video/mp4;codecs=avc1.42E01E`,`video/mp4`,`video/webm;codecs=vp9`,`video/webm`];function Xt({renderer:e,rig:t,sunRig:n,poke:r,getState:i,office:a={}}){let o=e.domElement,s=new URLSearchParams(window.location.search),c=e=>{let t=i();return`lgr-${t.lesson}-${String(t.clock||``).replace(`:`,``)}-${t.style}.${e}`},l=(e,t)=>{let n=URL.createObjectURL(e),r=document.createElement(`a`);r.href=n,r.download=t,document.body.appendChild(r),r.click(),r.remove(),setTimeout(()=>URL.revokeObjectURL(n),1e3)};function u(){o.toBlob(e=>{e&&(l(e,c(`png`)),window.__lastStill=e.size)},`image/png`)}let d=()=>Yt.find(e=>window.MediaRecorder&&MediaRecorder.isTypeSupported(e))||``,f=Zt(),p=null,m=[],h=!1;function g(){if(h)return;let e=d(),t=o.captureStream(60);p=new MediaRecorder(t,e?{mimeType:e,videoBitsPerSecond:12e6}:{}),m=[],p.ondataavailable=e=>{e.data&&e.data.size&&m.push(e.data)},p.onstop=()=>{let e=new Blob(m,{type:p.mimeType});l(e,c(p.mimeType.includes(`mp4`)?`mp4`:`webm`)),window.__lastVideo=e.size},p.start(),h=!0,window.__recording=!0,f.show()}function _(){h&&(p.stop(),h=!1,window.__recording=!1,f.hide())}let v=()=>h?_():g(),y=e=>new Promise(t=>setTimeout(t,e)),b=e=>window.dispatchEvent(new KeyboardEvent(`keydown`,{key:e}));async function x(){let e=o.clientWidth,t=o.clientHeight,n=e*.26,i=t*.74;for(let t=0;t<=10;t++)r.at(n+t*e*.028,i+Math.sin(t*.7)*16),await y(100);r.stop()}async function S(e){if(e.keys)for(let t of e.keys)b(t),await y(70);e.zoom&&t.zoomBy(e.zoom),e.orbit&&t.orbit(e.orbit[0],e.orbit[1]),e.timeTo!==void 0&&n.goTo(e.timeTo),e.office&&a[e.office]?.(),e.ripple&&await x(),e.waitMs&&await y(e.waitMs)}let C={tour:[{keys:[`6`,`0`],waitMs:600},{zoom:.72,waitMs:1700},{ripple:!0,waitMs:2400},{orbit:[.55,0],waitMs:1700},{timeTo:0,waitMs:3e3},{timeTo:.5,waitMs:1500},{keys:[`7`],waitMs:1e3},{zoom:1.5,waitMs:1400},{keys:[`B`],waitMs:2e3},{keys:[`B`],waitMs:2e3},{keys:[`B`],waitMs:2e3},{keys:[`B`],waitMs:2e3},{keys:[`B`],waitMs:2e3},{keys:[`8`],waitMs:900},{zoom:.65,waitMs:1200},{ripple:!0,waitMs:2600},{keys:[`7`],waitMs:700},{keys:[`B`],waitMs:300},{keys:[`B`],waitMs:900},{zoom:1.4,waitMs:2600}],daycycle:[{keys:[`6`,`0`],waitMs:700},{timeTo:.75,waitMs:2600},{timeTo:1,waitMs:2600},{timeTo:1.25,waitMs:2600},{timeTo:1.5,waitMs:2600},{timeTo:1.5,waitMs:800}],office:[{keys:[`o`],waitMs:1700},{office:`pet`,waitMs:1300},{office:`feed`,waitMs:1700},{office:`travel`,waitMs:1700},{keys:[`W`,`W`,`W`],waitMs:1800},{timeTo:0,waitMs:2400},{office:`laptop`,waitMs:800},{office:`closeLaptop`,waitMs:300},{timeTo:.5,waitMs:900},{keys:[`W`],waitMs:200},{keys:[`o`],waitMs:1500}],cities:[{keys:[`6`,`0`],waitMs:500},{timeTo:.78,waitMs:2800},{keys:[`C`],waitMs:3e3},{keys:[`C`],waitMs:3e3},{keys:[`C`],waitMs:2e3}],water:[{keys:[`6`,`0`],waitMs:600},{zoom:1.35,waitMs:2800},{orbit:[.7,0],waitMs:2600},{ripple:!0,waitMs:2200},{timeTo:0,waitMs:3200},{timeTo:.5,waitMs:1500},{orbit:[-.5,0],waitMs:2200}],morph:[{keys:[`6`,`3`],waitMs:700},{zoom:.55,waitMs:1800},{zoom:2.3,waitMs:1700},{zoom:1.26,waitMs:1700},{zoom:1.16,waitMs:1900},{zoom:.3,waitMs:2200}],skin:[{keys:[`o`],waitMs:1800},{keys:[`j`],waitMs:2e3},{keys:[`j`],waitMs:2e3},{timeTo:0,waitMs:2600},{timeTo:.5,waitMs:1500},{keys:[`u`],waitMs:2e3},{keys:[`j`],waitMs:1400},{keys:[`o`],waitMs:1500}]};async function w(e){let t=C[e];if(t){window.__director=e;for(let e of t)await S(e);window.__director=null}}async function T(e){await y(1600),g(),await w(e),await y(400),_(),window.__captureDone=!0}window.addEventListener(`keydown`,e=>{(e.key===`s`||e.key===`S`)&&u(),(e.key===`r`||e.key===`R`)&&v()});let E=s.get(`capture`);return E&&C[E]&&T(E),window.__capture={still:u,toggleRec:v,run:w,sequences:Object.keys(C)},window.__capture}function Zt(){let e=document.createElement(`div`);return e.textContent=`● REC`,e.style.cssText=`position:fixed;top:14px;right:16px;z-index:2;font:bold 12px ui-monospace,monospace;color:#ff3b30;letter-spacing:.12em;text-shadow:0 1px 3px #000;display:none;`,document.body.appendChild(e),{show:()=>{e.style.display=`block`},hide:()=>{e.style.display=`none`}}}var Qt=`
.vui { position: fixed; left: 50%; bottom: 16px; transform: translateX(-50%); z-index: 3;
  display: flex; gap: 8px; align-items: center; padding: 7px 9px; border-radius: 14px;
  background: rgba(16,18,24,0.72); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
  box-shadow: 0 6px 24px rgba(0,0,0,0.4); font: 600 12px/1 ui-monospace, monospace;
  color: #d8dde6; pointer-events: auto; user-select: none; max-width: calc(100vw - 24px);
  flex-wrap: wrap; justify-content: center; }
.vui button { min-width: 44px; min-height: 44px; padding: 0 12px; border: 0; border-radius: 10px;
  background: rgba(255,255,255,0.07); color: inherit; font: inherit; cursor: pointer;
  letter-spacing: .04em; transition: background .12s, transform .08s ease; }
.vui button:hover { background: rgba(255,255,255,0.16); }
/* L41 BUTTON JUICE: a press scales down + flashes brighter so taps feel responsive (paired with a
   guarded haptic tick in JS). Reduced-motion users get the flash without the scale animation. */
.vui button:active { transform: scale(0.92); background: rgba(255,255,255,0.26); }
@media (prefers-reduced-motion: reduce) { .vui button { transition: background .12s; } .vui button:active { transform: none; } }
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
`;function $t({controls:e,state:t,show:n,coarse:r}){if(typeof document>`u`)return;let i=document.createElement(`style`);i.textContent=Qt,document.head.appendChild(i);let a=document.createElement(`div`);a.className=`vui`;let o=document.createElement(`div`);o.className=`vui-info`,o.innerHTML=`KEYS · 4/5/6 cam · 0 vector · 7/8 pixel/toon · B era · T time · [ ] scrub · 9 auto · C city · G shuffle · W weather · K season · click a building / O office · J office skin · U painted props · Esc exit · M hide UI · S still · R rec · H shadows · P theme · drag water to ripple`;let s=(e,t,n)=>{let r=document.createElement(`button`);return r.textContent=e,n&&(r.title=n),r.addEventListener(`click`,e=>{navigator.vibrate?.(10),t(e)}),r},c=e=>{let t=document.createElement(`div`);return t.className=`seg`,{seg:t,btns:e.map(([n,r])=>{let i=s(n,()=>e.find(e=>e[1]===r)[2](),n);return i.dataset.val=r,t.appendChild(i),i})}},l=s(`City`,()=>e.city(),`Next city profile (C)`),u=s(`Shuffle`,()=>e.shuffle(),`New random seed (G)`),d={clear:`Clear`,rain:`Rain`,snow:`Snow`,fog:`Fog`},f=[`Spring`,`Summer`,`Autumn`,`Winter`],p=s(`Clear`,()=>e.weather(),`Cycle weather: clear→rain→snow→fog (W)`),m=s(`Spring`,()=>e.season(),`Cycle season: spring→summer→autumn→winter (K)`),h=s(`Office`,()=>e.office(),`Dive into / exit the office (O · Esc)`),g={"3d":`3D`,smooth:`Smooth`,charm:`Charm`},_=s(`Skin`,()=>e.officeSkin(),`Office look: 3D → smooth → charm diffusion (J)`),v={painted:`Painted`,"3d":`Live 3D`},y=s(`Props`,()=>e.officeProps(),`Office props: painted (cohesive) ↔ live 3D (animated) — under a skin (U)`),b=c([[`Auto`,`auto`,()=>e.style(`auto`)],[`Vector`,`vector`,()=>e.style(`vector`)],[`Pixel`,`pixel`,()=>e.style(`pixel`)],[`Toon`,`toon`,()=>e.style(`toon`)]]);b.btns[0].title=`AUTO: zoom morphs the style (toon → 16-bit → 8-bit → Game Boy)`;let x={native:`Era`,gb:`GB`,"8-bit":`8-bit`,"16-bit":`16-bit`,modern:`Modern`,"1-bit":`1-bit`},S=s(`Era`,()=>e.era(),`Cycle the pixel era (B): native → GB → 8-bit → 16-bit → Modern`),C=document.createElement(`input`);C.type=`range`,C.min=`0`,C.max=`1`,C.step=`0.01`,C.title=`Time of day`;let w=!1;C.addEventListener(`pointerdown`,()=>{w=!0}),C.addEventListener(`pointerup`,()=>{w=!1}),C.addEventListener(`input`,()=>e.time(parseFloat(C.value)));let T=s(`▶`,()=>e.auto(),`Play/pause day cycle (9)`),E=document.createElement(`div`);E.style.cssText=`display:flex;align-items:center;gap:6px;`;let D=document.createElement(`span`);D.className=`lbl`,D.textContent=`Day`,E.append(D,C,T);let O=c([[`Iso`,`iso`,()=>e.cam(`iso`)],[`Dim`,`dimetric`,()=>e.cam(`dimetric`)],[`3D`,`persp`,()=>e.cam(`persp`)]]),k=s(`ⓘ`,()=>o.classList.toggle(`open`),`All keys`),A=s(`⌄`,()=>L(!0),`Hide controls — watch unobstructed (M)`),j=document.createElement(`div`);j.className=`vui-more`;let M=s(`More`,()=>j.classList.toggle(`open`),`More controls`);if(r){a.append(l,u,h,T,b.seg,M,A);let e=document.createElement(`div`);e.style.cssText=`display:flex;align-items:center;gap:6px;`,e.append(D,C),j.append(p,m,_,y,S,O.seg,e)}else a.append(l,u,B(),p,m,h,_,y,B(),b.seg,S,B(),E,B(),O.seg,k,B(),A);let N=document.createElement(`button`);N.className=`vui-show`,N.innerHTML=`⌃ Controls`,N.title=`Show controls (M)`,N.addEventListener(`click`,()=>L(!1));let P=document.createElement(`div`);P.className=`vui-style`,document.body.append(o,j,a,N,P);let ee=n,F=!1;L(r);function I(){let e=t();b.btns.forEach(t=>t.classList.toggle(`on`,t.dataset.val===e.style)),O.btns.forEach(t=>t.classList.toggle(`on`,t.dataset.val===e.cam)),p.textContent=d[e.weather]||`Clear`,p.classList.toggle(`on`,e.weather!==`clear`),m.textContent=f[e.season]||`Spring`,m.classList.toggle(`on`,(e.season||0)>0),h.textContent=e.office?`Exit`:`Office`,h.classList.toggle(`on`,!!e.office),_.textContent=g[e.officeSkin]||`Skin`,_.classList.toggle(`on`,e.officeSkin&&e.officeSkin!==`3d`),y.textContent=v[e.officeProps]||`Props`,y.classList.toggle(`on`,e.officeProps===`painted`&&e.officeSkin&&e.officeSkin!==`3d`),T.textContent=e.auto?`❚❚`:`▶`,T.classList.toggle(`on`,e.auto),S.textContent=x[e.era]||`Era`,S.classList.toggle(`on`,e.era&&e.era!==`native`),w||(C.value=String(e.t))}I();let te=setInterval(I,200);function L(e){if(!ee){a.style.display=`none`,N.classList.remove(`on`),o.classList.remove(`open`),j.classList.remove(`open`),P.classList.remove(`on`);return}F=e,a.style.display=e?`none`:`flex`,N.classList.toggle(`on`,e),e&&(o.classList.remove(`open`),j.classList.remove(`open`),P.classList.remove(`on`))}function ne(){L(!F)}let re=null,R=null;function z(e){if(!ee||F){P.classList.remove(`on`),re=null;return}if(!e){P.classList.remove(`on`),re=``;return}e!==re&&(re=e,P.textContent=e,P.classList.add(`on`),clearTimeout(R),R=setTimeout(()=>P.classList.remove(`on`),2e3))}return{toggle:ne,setHidden:L,refresh:I,setStyleHint:z,destroy(){clearInterval(te),a.remove(),o.remove(),j.remove(),N.remove(),P.remove(),i.remove(),clearTimeout(R)}};function B(){let e=document.createElement(`div`);return e.className=`sep`,e}}var en=`lgr_hints_`,tn=!1;function nn(){if(tn||typeof document>`u`)return;tn=!0;let e=document.createElement(`style`);e.textContent=`
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
  }`,document.head.appendChild(e)}function rn({key:e,title:t=`Tips`,tips:n=[],force:r=!1}={}){let i={key:e,shown:!1,dismissed:!1,seen:!1};if(typeof window<`u`&&(window.__hints=i),typeof document>`u`||!e)return{dismiss(){},el:null};let a=en+e,o=!1;try{o=localStorage.getItem(a)===`1`}catch{}if(o&&!r)return i.seen=!0,{dismiss(){},el:null};nn();let s=!!(window.matchMedia&&window.matchMedia(`(prefers-reduced-motion: reduce)`).matches),c=document.createElement(`div`);c.className=`lgr-hints`,c.innerHTML=`<div class="lgr-hints-card">
    <div class="lgr-hints-h">${t}</div>
    <ul>${n.map(e=>`<li>${e}</li>`).join(``)}</ul>
    <button class="lgr-hints-ok">Got it</button>
    <button class="lgr-hints-x" title="Dismiss (Esc)" aria-label="Dismiss">✕</button>
  </div>`,document.body.appendChild(c),i.shown=!0,s?c.classList.add(`on`):requestAnimationFrame(()=>c.classList.add(`on`));let l=!1;function u(e=!0){if(!l){if(l=!0,e)try{localStorage.setItem(a,`1`)}catch{}i.dismissed=!0,window.removeEventListener(`keydown`,d),c.classList.remove(`on`),setTimeout(()=>c.remove(),s?0:300)}}function d(e){e.key===`Escape`&&u(!0)}return window.addEventListener(`keydown`,d),c.querySelector(`.lgr-hints-ok`).addEventListener(`click`,()=>{navigator.vibrate?.(10),u(!0)}),c.querySelector(`.lgr-hints-x`).addEventListener(`click`,()=>{navigator.vibrate?.(10),u(!0)}),{dismiss:u,el:c}}var an=null;function on(){if(an)return an;let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return n.addColorStop(0,`rgba(0,0,0,0.60)`),n.addColorStop(.55,`rgba(0,0,0,0.32)`),n.addColorStop(1,`rgba(0,0,0,0.0)`),t.fillStyle=n,t.beginPath(),t.arc(128/2,128/2,128/2,0,Math.PI*2),t.fill(),an=new w(e),an.colorSpace=m,an}function sn({w:e=.6,d:t=.6,x:n=0,y:r=.002,z:i=0,opacity:o=.5,rotation:c=0}={}){let l=new a(new y(e,t),new s({map:on(),transparent:!0,opacity:o,depthWrite:!1,toneMapped:!1}));return l.rotation.x=-Math.PI/2,l.rotation.z=c,l.position.set(n,r,i),l.renderOrder=-1,l.raycast=()=>{},l}function cn({yawLimit:e=80,pitchUp:t=32,pitchDown:n=20,sensitivity:r=.16,keySpeed:i=70,damp:a=9}={}){let o=Math.PI/180,s=(e,t,n)=>e<t?t:e>n?n:e,c=0,l=0,u=0,d=0;return{addDrag(i,a){u=s(u-i*r,-e,e),d=s(d-a*r,-n,t)},addKeys(r,{left:a,right:o,up:c,down:l}){let f=i*r;a&&(u=s(u+f,-e,e)),o&&(u=s(u-f,-e,e)),c&&(d=s(d+f,-n,t)),l&&(d=s(d-f,-n,t))},recenter(){u=0,d=0},update(e){let t=1-Math.exp(-a*e);c+=(u-c)*t,l+=(d-l)*t},get yaw(){return c*o},get pitch(){return l*o},get active(){return Math.abs(c)>.05||Math.abs(l)>.05}}}var ln=null;function un(){if(ln)return ln;let e=document.createElement(`canvas`);e.width=e.height=256;let t=e.getContext(`2d`),n=t.createRadialGradient(256/2,256/2,256*.32,256/2,256/2,256*.72);return n.addColorStop(0,`rgba(0,0,0,0)`),n.addColorStop(1,`rgba(0,0,0,1)`),t.fillStyle=n,t.fillRect(0,0,256,256),ln=new w(e),ln.colorSpace=m,ln}function dn({strength:e=.55,dist:t=.5}={}){let n=new a(new y(1,1),new s({map:un(),transparent:!0,opacity:e,depthTest:!1,depthWrite:!1,toneMapped:!1}));n.renderOrder=9999,n.raycast=()=>{},n.frustumCulled=!1;let r=new V;return n.fit=e=>{e.getWorldDirection(r),n.position.copy(e.position).addScaledVector(r,t),n.quaternion.copy(e.quaternion);let i=2*Math.tan(d.degToRad(e.fov)*.5)*t*1.05;n.scale.set(i*e.aspect,i,1)},n}var fn=`precision highp float;

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
}`;export{q as _,rn as a,Jt as c,Ut as d,Wt as f,Ie as g,Y as h,dn as i,Bt as l,jt as m,cn as n,$t as o,zt as p,sn as r,Xt as s,fn as t,Ht as u,W as v};