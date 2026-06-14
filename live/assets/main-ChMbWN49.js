import{i as e,o as t,r as n,s as r,t as i}from"./pixelkit-BlarzZMc.js";import{$ as a,A as o,B as s,C as c,D as l,E as u,F as d,G as f,H as p,I as m,J as h,K as g,L as _,M as v,N as y,O as b,P as x,R as S,S as C,T as w,U as T,V as E,W as D,X as O,Y as ee,Z as k,_ as A,a as te,b as j,c as M,d as ne,et as N,f as P,g as re,i as F,j as ie,k as ae,l as oe,m as se,n as ce,nt as I,o as le,p as ue,q as de,r as fe,rt as L,s as R,t as pe,tt as z,u as me,v as he,w as ge,x as B,z as _e}from"./three-B1bbA2jA.js";var ve=Math.atan(1/Math.SQRT2),ye=Math.atan(.5),be=Math.PI/4,xe={PERSPECTIVE:4,ISOMETRIC:5,DIMETRIC:6},Se=.12,Ce=1.45,we=4,Te=40,Ee=1.5,De=16,Oe=6,ke=22,Ae=3.5,je=11,Me=(e,t,n)=>e+(t-e)*(1-Math.exp(-8*n)),Ne=(e,t)=>e+Math.PI*2*Math.round((t-e)/(Math.PI*2));function Pe({aspect:e,fov:t=48,near:n=.1,far:r=100,target:i=new I(0,.8,0),azimuth:a=be,elevation:o=.52,distance:s=12,zoom:c=5.5}={}){let l=new _(t,e,n,r),u=new d(-1,1,1,-1,n,r),f=xe.PERSPECTIVE,p=e,m={azimuth:a,elevation:o,distance:s,zoom:c,target:i.clone()},h={azimuth:a,elevation:o,distance:s,zoom:c,target:i.clone()},g=!1,v=()=>f===xe.PERSPECTIVE?l:u;function y(e){e!==f&&(f=e,f===xe.ISOMETRIC||f===xe.DIMETRIC?(m.elevation=f===xe.ISOMETRIC?ve:ye,m.azimuth=Ne(be,h.azimuth),g=!0):g=!1)}function x(e,t){m.azimuth+=e,g||(m.elevation=b.clamp(m.elevation+t,Se,Ce))}function S(e){f===xe.PERSPECTIVE?m.distance=b.clamp(m.distance*e,we,Te):m.zoom=b.clamp(m.zoom*e,Ee,De)}function C(e,t){let n=m.azimuth,r=f===xe.PERSPECTIVE?m.distance*.04:m.zoom*.08,i=new I(Math.cos(n),0,-Math.sin(n)),a=new I(-Math.sin(n),0,-Math.cos(n));m.target.addScaledVector(i,e*r),m.target.addScaledVector(a,t*r)}function w(e,t){p=e/t,l.aspect=p,l.updateProjectionMatrix()}function T(e){h.azimuth=Me(h.azimuth,m.azimuth,e),h.elevation=Me(h.elevation,m.elevation,e),h.distance=Me(h.distance,m.distance,e),h.zoom=Me(h.zoom,m.zoom,e),h.target.x=Me(h.target.x,m.target.x,e),h.target.y=Me(h.target.y,m.target.y,e),h.target.z=Me(h.target.z,m.target.z,e);let t=Math.cos(h.elevation),n=Math.sin(h.elevation),r=Math.cos(h.azimuth),i=Math.sin(h.azimuth),a=v();if(a.position.set(h.target.x+h.distance*t*i,h.target.y+h.distance*n,h.target.z+h.distance*t*r),a.lookAt(h.target),a.isOrthographicCamera){let e=h.zoom,t=e*p;a.left=-t,a.right=t,a.top=e,a.bottom=-e,a.updateProjectionMatrix()}}return{get camera(){return v()},get mode(){return f},get styleT(){return f===xe.PERSPECTIVE?b.clamp((h.distance-Oe)/(ke-Oe),0,1):b.clamp((h.zoom-Ae)/(je-Ae),0,1)},setMode:y,orbit:x,zoomBy:S,pan:C,setViewport:w,update:T}}var Fe={value:0},Ie=new P(`#ffffff`),Le={value:0},Re={value:0},ze={value:0},Be=new z,Ve={value:0},He={value:0},Ue=`
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
`;function We(e){e.uniforms.uVector=Fe,e.uniforms.uVecTint={value:Ie},e.uniforms.uVecShadow=Le,e.uniforms.uSnow=Re,e.uniforms.uCloud=ze,e.uniforms.uCloudOff={value:Be},e.uniforms.uFogCharm=Ve}function Ge(e){return e.replace(`#include <fog_fragment>`,`
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
  `)}function Ke(e){return e.replace(`#include <common>`,`#include <common>
varying vec3 vVecN;
varying vec3 vVecP;
varying vec2 vWorldXZ;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
  vVecN = normal;
  vVecP = position;
  vWorldXZ = (modelMatrix * vec4(position, 1.0)).xz;`)}function qe(e){return e.replace(`#include <shadowmap_pars_fragment>`,`#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>`)}var Je=`col *= mix(1.0, getShadowMask(), uVecShadow);`;function Ye(e,{color:t,id:n,windowGlow:r,winColors:i=[`#ffb852`,`#8cd9ff`],litFrac:a=.55}={}){let o=[0,1,2].map(e=>new P(i[e]??i[i.length-1]));return e.customProgramCacheKey=()=>`lgr-vec-tower`,e.onBeforeCompile=e=>{We(e),e.uniforms.uWindowGlow=r,e.uniforms.uWinId={value:n},e.uniforms.uVecColor={value:new P(t)},e.uniforms.uWinA={value:o[0]},e.uniforms.uWinB={value:o[1]},e.uniforms.uWinC={value:o[2]},e.uniforms.uWinLit={value:a},e.vertexShader=Ke(e.vertexShader),e.fragmentShader=Ge(qe(e.fragmentShader.replace(`#include <common>`,`#include <common>
        uniform float uWindowGlow;
        uniform float uWinId;
        uniform vec3  uVecColor;
        uniform vec3  uWinA; uniform vec3 uWinB; uniform vec3 uWinC;
        uniform float uWinLit;
        ${Ue}
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
          ${Je}                                  // the sun's shadow darkens the body
          vec3 wcol; vec2 w = winTerms(wcol);
          vec3 glass = vec3(0.17, 0.23, 0.34);          // dark glass-blue panes (day)
          col = mix(col, glass, w.x * 0.85);
          col += w.x * w.y * wcol * uWindowGlow * 1.5;  // …windows EMIT (unshadowed) at night
          gl_FragColor = vec4(col, diffuseColor.a);
        }`)))},e}function V(e,{color:t=null,glow:n=null,glowDay:r=0,glowNight:i=1,windowGlow:a=null,season:o=!1}={}){let s=t===null,c=n!==null&&a!==null;return e.customProgramCacheKey=()=>`lgr-vec|`+(s?`d`:`c`)+(c?`g`:``)+(o?`s`:``),e.onBeforeCompile=e=>{We(e),s||(e.uniforms.uVecColor={value:new P(t)}),c&&(e.uniforms.uGlow={value:new P(n)},e.uniforms.uGlowDay={value:r},e.uniforms.uGlowNight={value:i},e.uniforms.uWindowGlow=a),o&&(e.uniforms.uSeason=He),e.vertexShader=Ke(e.vertexShader);let l=s?`diffuseColor.rgb`:`uVecColor`,u=o?`seasonShift(${l})`:l,d=(s?``:`uniform vec3 uVecColor;
`)+(c?`uniform vec3 uGlow; uniform float uGlowDay; uniform float uGlowNight; uniform float uWindowGlow;
`:``)+(o?`uniform float uSeason;
vec3 seasonShift(vec3 c){
  c = mix(c, vec3(0.86, 0.46, 0.13), smoothstep(0.40, 0.70, uSeason));   // → autumn orange
  c = mix(c, vec3(0.46, 0.33, 0.20), smoothstep(0.75, 1.00, uSeason));   // → bare brown
  return c;
}
`:``),f=c?`uGlow * mix(uGlowDay, uGlowNight, uWindowGlow)`:`vec3(0.0)`,p=Ge(qe(e.fragmentShader.replace(`#include <common>`,`#include <common>
`+d+Ue).replace(`#include <opaque_fragment>`,`#include <opaque_fragment>
        if (uVector > 0.5) {
          vec3 col = vecShade(${u});
          ${Je}                            // the sun's shadow darkens the flat tier…
          gl_FragColor = vec4(col + ${f}, diffuseColor.a);  // …but the night glow stays lit
        }`)));c&&(p=p.replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>\n  totalEmissiveRadiance += ${f};`)),e.fragmentShader=p},e}function Xe(e){let t=e>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Ze(e){let t=Xe(e);return{next:t,range:(e,n)=>e+(n-e)*t(),int:(e,n)=>e+Math.floor(t()*(n-e+1)),pick:e=>e[Math.floor(t()*e.length)],chance:e=>t()<e}}var Qe=[{key:`manhattan`,name:`Manhattan`,towers:[`#EDE3C8`,`#D9B98A`,`#B5562F`,`#A8C8E8`,`#2E3F5C`],ground:`#7CC455`,street:`#9AA0A6`,sidewalk:`#C8CCD0`,park:`#5DB347`,water:`#29A8D8`,shopfronts:[`#C04A3A`,`#3A7AC0`,`#C09A2A`],glass:`#7FA8CC`,winColors:[`#ffd27a`,`#9ad6ff`],hMax:4.6,sigma:.36,roofRate:.35,pSplit:.6,nightLit:.55,roofTint:null,coast:{base:.55,out:1,in:.6,jag:1.05},landmarks:[`empireState`,`chrysler`,`liberty`]},{key:`paris`,name:`Paris`,towers:[`#E8DCC0`,`#F2EAD6`,`#E0D2B4`],ground:`#8CC46A`,street:`#A8A29A`,sidewalk:`#D4CEC2`,park:`#6DB35A`,water:`#3FA8C8`,shopfronts:[`#C04A3A`,`#3A6B5A`,`#7A5AC0`],glass:`#5A6B7A`,winColors:[`#ffdca0`,`#ffcaa0`],hMax:1.5,sigma:.9,roofRate:.15,pSplit:.75,nightLit:.45,roofTint:`#6A7886`,coast:{base:1.05,out:.55,in:.3,jag:.5},landmarks:[`eiffel`,`arcDeTriomphe`,`sacreCoeur`]},{key:`neoTokyo`,name:`Neo-Tokyo`,towers:[`#2A3038`,`#3A4250`,`#252B36`,`#4A4456`],ground:`#3A4A42`,street:`#5A6068`,sidewalk:`#7A8088`,park:`#2E5E46`,water:`#0E6878`,shopfronts:[`#E8483A`,`#5AE8E0`,`#E85AA0`],glass:`#5AE8E0`,winColors:[`#5AE8E0`,`#E85AA0`,`#E8E06A`],hMax:5.2,sigma:.42,roofRate:.6,pSplit:.6,nightLit:.7,roofTint:null,coast:{base:.7,out:1.05,in:.62,jag:1.7},landmarks:[`tokyoTower`,`pagoda`,`neonBillboard`]}],$e=Qe.map(e=>e.key),et=.3,tt=1.9,nt=.55,rt=2.45,it=.12,at=.6,ot=6,st={BASE:.7,OUT:.95,IN:.55,JAG:1,SAMPLES_PER_EDGE:28,HARBOR_DEPTH:.55,HARBOR_WIDTH:.26},ct={PLINTH_TOP:et,BLOCK:tt,STREET:nt,PITCH:rt,SIDEWALK:it,SHORE:at,N:ot,COAST:st};function lt(e,t,n){let r=n?.base??st.BASE,i=n?.out??st.OUT,a=n?.in??st.IN,o=n?.jag??st.JAG,s=t+r,c=Ze((e^789079)>>>0),l=[2,3,5,8,11,13].map(e=>({k:e,amp:1/e*o**((e-2)/6),phase:c.range(0,Math.PI*2)})),u=l.reduce((e,t)=>e+t.amp,0),d=e=>{let t=0;for(let n of l)t+=n.amp*Math.sin(n.k*e*Math.PI*2+n.phase);return Math.max(-1,Math.min(1,t/(u*.6)))},f=[{fix:+s,nx:1,nz:0,sign:1},{fix:+s,nx:0,nz:1,sign:-1},{fix:-s,nx:-1,nz:0,sign:-1},{fix:-s,nx:0,nz:-1,sign:1}],p=t+.22,m=st.SAMPLES_PER_EDGE,h=4*m,g=[],_=0;for(let e=0;e<4;e++){let t=f[e];for(let n=0;n<m;n++,_++){let o=n/m,c=_/h,l=(-s+2*s*o)*t.sign,u=d(c),f=u>=0?u*i:u*a;if(e===0){let e=Math.abs(o-.5);if(e<st.HARBOR_WIDTH){let t=.5+.5*Math.cos(e/st.HARBOR_WIDTH*Math.PI);f-=(r+st.HARBOR_DEPTH)*t}}let v,y;t.nx===0?(y=t.fix+t.nz*f,v=l,y=t.nz>0?Math.max(y,p):Math.min(y,-p)):(v=t.fix+t.nx*f,y=l,v=t.nx>0?Math.max(v,p):Math.min(v,-p)),g.push(new z(v,y))}}return{points:g,B:s,maxR:s+i,harborX:p}}function ut(e){(Array.isArray(e)?e:[e]).forEach(e=>e&&e.dispose&&e.dispose())}function dt({seed:e=1,profileIndex:t=0,landmarkFactory:n=null,windowGlow:r}){let i=new B,a=new B,s=new B;a.raycast=()=>{},s.raycast=()=>{},i.add(a,s);let l=new A(16773594,3);l.position.set(.45,.6,-.65).multiplyScalar(10);let u=new c(7313331,2762272,1);i.add(l,u);let d=0,f=[],p={seed:e,profileIndex:t,profile:Qe[t],extent:0,meshCount:0};function m(e,t,n,r){let i=new o(new F(e,.04,t),V(new v({color:r,roughness:.95,flatShading:!0}),{color:r}));return i.position.y=n,i.userData.ground=!0,i}function g(e,t){for(let e of a.children)e.geometry&&e.geometry.dispose(),ut(e.material);a.clear();for(let e of s.children)e.traverse(e=>{e.isMesh&&ut(e.material)});s.clear(),f.length=0,d=0;let r=Ze(e),i=Qe[t],c=(ot-1)/2*rt,l=7.075;p={seed:e,profileIndex:t,profile:i,extent:l+(i.coast?.base??st.BASE),meshCount:0};let u=lt(e,l,i.coast);p.coast=u;let h=new de;u.points.forEach((e,t)=>t?h.lineTo(e.x,e.y):h.moveTo(e.x,e.y)),h.closePath();let g=new o(new he(h,{depth:2,bevelEnabled:!1,steps:1}),V(new v({color:i.ground,roughness:.9,flatShading:!0,side:2}),{color:i.ground}));g.rotation.x=-Math.PI/2,g.position.y=et-2,g.userData.ground=!0,a.add(g);let C=2*7.195;a.add(m(C,C,.32,i.street)),x(u.harborX,i);let w=[];for(let e=0;e<ot;e++)for(let t=0;t<ot;t++)w.push([e,t]);let T=new Set,E=Math.max(1,Math.round(w.length*.08));for(;T.size<E;)T.add(r.int(0,w.length-1));let D=r.range(-2.45*.6,rt*.6),O=r.range(-2.45*.6,rt*.6),ee=Math.hypot(c,c),k=[];if(w.forEach(([e,t],n)=>{let o=(e-(ot-1)/2)*rt,s=(t-(ot-1)/2)*rt;if(a.add(m(tt,tt,.32999999999999996,i.sidewalk).translateX(o).translateZ(s)),T.has(n)){a.add(m(tt-it*2,tt-it*2,.35,i.park).translateX(o).translateZ(s));let e=r.int(3,5);for(let t=0;t<e;t++)S(o+r.range(-.6,.6),s+r.range(-.6,.6),i,r);return}let c=tt-it*2,l=r.chance(i.pSplit)?2:1,u=r.chance(i.pSplit)?2:1,d=c/l,f=c/u;for(let e=0;e<l;e++)for(let t=0;t<u;t++){let n=o-c/2+d*(e+.5),a=s-c/2+f*(t+.5),l=Math.max(.6,d-.1),u=Math.max(.6,f-.1),p=Math.hypot(n-D,a-O)/ee,m=Math.exp(-(p*p)/(2*i.sigma*i.sigma)),h=Math.max(.5,.5+(i.hMax-.5)*m*r.range(.75,1.25));h>i.hMax*.5&&Math.min(l,u)>=.7&&k.push({lx:n,lz:a,fw:l,fd:u,h,r:p}),_(n,a,l,u,h,i,r)}}),n&&n.ready){k.sort((e,t)=>e.r-t.r);let e=[],t=i.landmarks;for(let r=0;r<t.length&&k.length;r++){let a=null;for(let t of k)if(e.every(e=>Math.hypot(e.lx-t.lx,e.lz-t.lz)>rt*.9)){a=t;break}a||=k[0],e.push(a),y(a.lx,a.lz);let o=i.hMax*n.heightFactor(t[r]),c=n.make(t[r],{x:a.lx,z:a.lz,w:a.fw,d:a.fd,h:o,plinthTop:et});if(c){s.add(c);let e=new fe().setFromObject(c);b(e.min.x-.15,e.max.x+.15,e.min.z-.15,e.max.z+.15)}}}a.traverse(e=>{e.isMesh&&(e.userData.ground?(e.castShadow=!1,e.receiveShadow=!0):e.material&&e.material.isMeshBasicMaterial?(e.castShadow=!1,e.receiveShadow=!1):(e.castShadow=!0,e.receiveShadow=!0))}),s.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),p.meshCount=a.children.length+s.children.length;let A=0;for(let e of a.children){let t=e.position;A=(Math.imul(A,16777619)^(Math.round(t.x*100)*2654435761^Math.round(t.y*100)*40503^Math.round(t.z*100)*2246822519))>>>0}for(let e of p.coast.points)A=(Math.imul(A,16777619)^(Math.round(e.x*100)*2654435761^Math.round(e.y*100)*40503))>>>0;p.sig=A,window.__city={seed:e,profile:i.key,meshes:p.meshCount,sig:A}}function _(e,t,n,i,s,c,l){let u=Ye(new v({flatShading:!0,roughness:.7,metalness:.05}),{color:l.pick(c.towers),id:++d,windowGlow:r,winColors:c.winColors,litFrac:c.nightLit}),p=new o(new F(n,s,i),u);if(p.position.set(e,et+s/2,t),p.userData.lot=[e,t],a.add(p),c.roofTint){let r=V(new v({color:c.roofTint,roughness:.85,flatShading:!0}),{color:c.roofTint}),l=new o(new F(n*1.02,.08,i*1.02),r);l.position.set(e,et+s+.04,t),l.userData.lot=[e,t],a.add(l)}if(s<1.4){let r=l.pick(c.shopfronts),s=new o(new F(n*1.04,.18,i*1.04),V(new v({color:r,roughness:.8,flatShading:!0}),{color:r}));s.position.set(e,.39,t),s.userData.lot=[e,t],a.add(s)}if(s>c.hMax*.45&&l.chance(c.roofRate)){let r=l.chance(.5)?new o(new F(n*.4,.18,i*.4),V(new v({color:`#9a9a9a`,flatShading:!0}),{color:`#9a9a9a`})):new o(new se(n*.18,n*.18,.22,10),V(new v({color:`#b9bec4`,flatShading:!0}),{color:`#b9bec4`}));if(r.position.set(e+l.range(-.1,.1),et+s+.11,t+l.range(-.1,.1)),r.userData.lot=[e,t],a.add(r),l.chance(.25)){let n=new o(new h(.05,6,5),new ie({color:`#ff3b30`,transparent:!0,opacity:1}));n.position.set(e,et+s+.26,t),n.userData.lot=[e,t],n.raycast=()=>{},a.add(n),f.push({mesh:n,phase:l.range(0,6.28)})}}}function y(e,t){for(let n=a.children.length-1;n>=0;n--){let r=a.children[n];r.userData.lot&&Math.abs(r.userData.lot[0]-e)<1e-4&&Math.abs(r.userData.lot[1]-t)<1e-4&&(r.geometry&&r.geometry.dispose(),ut(r.material),a.remove(r))}for(let e=f.length-1;e>=0;e--)f[e].mesh.parent||f.splice(e,1)}function b(e,t,n,r){for(let i=a.children.length-1;i>=0;i--){let o=a.children[i];o.userData.lot&&o.position.x>=e&&o.position.x<=t&&o.position.z>=n&&o.position.z<=r&&(o.geometry&&o.geometry.dispose(),ut(o.material),a.remove(o))}}function x(e,t){let n=V(new v({color:`#7a5634`,roughness:.95,flatShading:!0}),{color:`#7a5634`}),r=(e,t,r,i)=>{let s=new o(new F(e,.06,t),n);s.position.set(r,et-.16,i),a.add(s)};r(.24,2,e+.02,0),r(1.3,.22,e+.7,-.72),r(1.3,.22,e+.7,.72)}function S(e,t,n,r){let i=new P(n.park),s=(n,s)=>{let c=i.clone().offsetHSL(0,0,r.range(-.06,.06)).getStyle(),l=new o(new h(n,7,6),V(new v({color:c,flatShading:!0}),{color:c,season:!0}));l.scale.y=.7,l.position.set(e,et+s,t),l.userData.lot=null,a.add(l)},c=new o(new F(.05,.18,.05),V(new v({color:`#6b4a2a`,flatShading:!0}),{color:`#6b4a2a`}));c.position.set(e,.39,t),a.add(c),s(.22,.28),s(.16,.46)}function C(e){for(let t of f)t.mesh.material.opacity=.35+.65*(.5+.5*Math.sin(e*3+t.phase))}return g(e,t),{group:i,key:l,fill:u,update:C,generate:g,get state(){return p},get extent(){return p.extent},get waterColor(){return p.profile.water},profiles:Qe}}var ft=Math.PI*2,pt=.7,mt=90,ht=[{name:`night`,sun:`#4a6f9e`,intensity:.35,hemiSky:`#26344f`,hemiGround:`#0c1018`,horizon:`#1e2942`,sky:`#36486e`,exposure:.95,outline:`#101a30`,window:1,toonGain:2.6},{name:`dawn`,sun:`#ff9e54`,intensity:2.4,hemiSky:`#8a7686`,hemiGround:`#2a1f1a`,horizon:`#b8512c`,sky:`#ffb070`,exposure:1.05,outline:`#241826`,window:.3,toonGain:2},{name:`noon`,sun:`#fff4e0`,intensity:4.6,hemiSky:`#9cb8cc`,hemiGround:`#33302a`,horizon:`#5e7689`,sky:`#aacadd`,exposure:1.18,outline:`#0b0a08`,window:0,toonGain:1.7},{name:`dusk`,sun:`#ff6b35`,intensity:2,hemiSky:`#7a566a`,hemiGround:`#281a18`,horizon:`#b0432a`,sky:`#ff8a5a`,exposure:1.05,outline:`#1f1420`,window:.4,toonGain:2}],gt=e=>e-Math.floor(e),_t=(e,t,n)=>e+(t-e)*n,vt=(e,t,n)=>e+(t-e)*(1-Math.exp(-6*n));function yt({t:e=.5}={}){let t=e,n=e,r=!1,i=!1,a=ht.map(e=>({name:e.name,sun:new P(e.sun),hemiSky:new P(e.hemiSky),hemiGround:new P(e.hemiGround),horizon:new P(e.horizon),sky:new P(e.sky),outline:new P(e.outline),intensity:e.intensity,exposure:e.exposure,window:e.window,toonGain:e.toonGain})),o=new I(0,1,0),s=new P(`#fff4e0`),c=new P(`#6f97b3`),l=new P(`#2a2620`),u=new P(`#3a4a57`),d=new P(`#7da3bd`),f=new P(`#0b0a08`),p=new P(`#000000`),m=3,h=1,g=0,_=1.7,v=new I;function y(e){let t=gt(e)*4,n=Math.floor(t)%4,r=(n+1)%4,i=t-Math.floor(t),y=a[n],b=a[r];s.lerpColors(y.sun,b.sun,i),c.lerpColors(y.hemiSky,b.hemiSky,i),l.lerpColors(y.hemiGround,b.hemiGround,i),u.lerpColors(y.horizon,b.horizon,i),d.lerpColors(y.sky,b.sky,i),f.lerpColors(y.outline,b.outline,i),m=_t(y.intensity,b.intensity,i),h=_t(y.exposure,b.exposure,i),g=_t(y.window,b.window,i),_=_t(y.toonGain,b.toonGain,i),p.setRGB(.045*g,.075*g,.14*g);let x=gt(e)*ft-Math.PI/2,S=Math.cos(x),C=Math.sin(x);v.set(S,C*Math.cos(pt),C*Math.sin(pt)),v.y>=0?o.copy(v):o.copy(v).negate()}return y(t),{sunDir:o,sunColor:s,hemiSky:c,hemiGround:l,horizon:u,sky:d,outline:f,toonFloor:p,get sunIntensity(){return m},get exposure(){return h},get windowGlow(){return g},get toonGain(){return _},get t(){return gt(t)},get auto(){return r},get clock(){let e=Math.round(gt(t)*24*60)%1440;return`${String(Math.floor(e/60)).padStart(2,`0`)}:${String(e%60).padStart(2,`0`)}`},cyclePreset(){n=(Math.floor(t*4+1e-4)+1)/4},nudge(e){n+=e/24},goTo(e){n=e},toggleAuto(){r=!r},setReducedMotion(e){i=e},update(e){r&&!i&&(n+=e/mt),t=vt(t,n,e),y(t)}}}function bt(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.35,`rgba(255,255,255,0.55)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new R(e);return r.colorSpace=D,r}function xt(e,t){let n=[];for(let r=0;r<16;r++){let i=r/16*Math.PI*2;n.push(new I(Math.cos(i)*e,t,Math.sin(i)*e))}return new oe(n,!0,`catmullrom`,.5)}function St(e){let t=(t,n)=>Math.exp(-((e-t)*(e-t))/(2*n*n)),n=Math.max(t(.33,.05),t(.75,.06)),r=b.smoothstep(e,.24,.3)*(1-b.smoothstep(e,.8,.88));return b.clamp(.15+.55*r+.45*n,.12,1)}function Ct(){let{PITCH:e,N:t,PLINTH_TOP:n}=ct,r=t+1,i=n+.04,a=n=>(n-t/2)*e,o=t/2,s=[],c=(e,t)=>t*r+e;for(let e=0;e<r;e++)for(let t=0;t<r;t++)s.push({x:a(t),z:a(e),i:t,j:e,edges:[]});let l=[],u=(t,n)=>{let r=(s[t].i===o||s[t].j===o)&&(s[n].i===o||s[n].j===o),i=l.length;l.push({a:t,b:n,len:e,main:r}),s[t].edges.push(i),s[n].edges.push(i)};for(let e=0;e<r;e++)for(let t=0;t<r;t++)t<r-1&&u(c(t,e),c(t+1,e)),e<r-1&&u(c(t,e),c(t,e+1));return{nodes:s,edges:l,y:i,mid:o}}function wt({plinthTop:e=.3,extent:t=4,profile:n=null}={}){let r=new B,i=Ct(),{nodes:a,edges:o}=i,c=i.y,l=.34,u=0;{let e=ct.PITCH-l*2;u=Math.max(1,Math.floor((e+.26)/.56))}let d=new ie({color:`#e8c84a`,fog:!0}),f=new ge(new F(.05,.012,.3),d,o.length*u);f.frustumCulled=!1,f.raycast=()=>{},f.receiveShadow=!1,f.castShadow=!1,r.add(f);{let e=new x,t=0;for(let n of o){let r=a[n.a],i=a[n.b],o=i.x-r.x,s=i.z-r.z,d=Math.hypot(o,s),p=o/d,m=s/d,h=Math.atan2(p,m),g=d-l*2;for(let n=0;n<u;n++){let i=l+(u===1?g/2:g*n/(u-1));e.position.set(r.x+p*i,c,r.z+m*i),e.rotation.set(0,h,0),e.updateMatrix(),f.setMatrixAt(t++,e.matrix)}}f.instanceMatrix.needsUpdate=!0}let p=new ge(new F(.34,.26,.74),V(new v({flatShading:!0,roughness:.5,metalness:.3})),12);p.castShadow=!0,p.receiveShadow=!1,p.frustumCulled=!1,p.raycast=()=>{};let m=new le,h=new Float32Array(72),g=new Float32Array(72),_=new P(`#fff0c0`),y=new P(`#ff3528`);for(let e=0;e<12;e++)_.toArray(g,e*3),y.toArray(g,(12+e)*3),h[e*3+1]=-50,h[(12+e)*3+1]=-50;m.setAttribute(`position`,new te(h,3)),m.setAttribute(`color`,new te(g,3));let S=new E({size:.72,sizeAttenuation:!0,map:bt(),vertexColors:!0,transparent:!0,opacity:0,blending:2,depthWrite:!1}),C=new s(m,S);C.frustumCulled=!1,C.raycast=()=>{},r.add(p,C);let w=[`#f4c430`,`#c0392b`,`#d8dde2`,`#9aa7b4`,`#6b7785`,`#5a7d9a`],T=Xe(2403557),D=o.map((e,t)=>t).filter(e=>o[e].main),O=[];for(let e=0;e<12;e++){let t=e<4&&D.length?D[T()*D.length|0]:T()*o.length|0,n=e===1;O.push({edge:t,fwd:T()<.5,s:T()*o[t].len,speed:n?.5:.78+e%3*.1,lenZ:n?1.45:1,color:w[n?1:e===0?0:2+e%4],rng:Xe(12648430+e*2654435761)})}let ee=new P;O.forEach((e,t)=>p.setColorAt(t,ee.set(e.color)));function k(e,t,n){let r=a[e],i=r.edges.filter(e=>e!==t);if(i.length===0)return t;let s=o[t],c=s.a===e?s.b:s.a,l=r.x-a[c].x,u=r.z-a[c].z,d=Math.hypot(l,u)||1,f=i[0],p=-2;for(let t of i){let n=o[t],i=n.a===e?n.b:n.a,s=a[i].x-r.x,c=a[i].z-r.z,m=Math.hypot(s,c)||1,h=l/d*(s/m)+u/d*(c/m);h>p&&(p=h,f=t)}return n()<.65?f:i[n()*i.length|0]}let A=k,j=new x,ne=(e,t)=>{j.position.set(0,-50,0),j.scale.setScalar(0),j.updateMatrix(),e.setMatrixAt(t,j.matrix)},N=.085,re=ct.PLINTH_TOP+.02+.13,ae=new ge(new M(.04,.1,3,6),V(new v({flatShading:!0,roughness:.8})),14);ae.castShadow=!0,ae.receiveShadow=!1,ae.frustumCulled=!1,ae.raycast=()=>{};let oe=xt(t-.72,e),se=[];for(let e=0;e<14;e++)se.push({phase:e/14,speed:.12+e%4*.02,dir:e%2?1:-1});let ce=new I,ue=new I,de=new P;se.forEach((e,t)=>ae.setColorAt(t,de.set([`#caa`,`#9ab`,`#bba`,`#ab9`][t%4]))),r.add(ae);let fe={manhattan:`#e8c84a`,paris:`#dcd2bc`,neoTokyo:`#5ae8e0`};function L(e){e&&d.color.set(fe[e.key]||`#e8c84a`)}L(n);function R(t,n,r){let i=r?r.t:.5,s=r?r.windowGlow:0,c=Math.max(2,Math.round(St(i)*12)),l=s>.05;for(let e=0;e<12;e++){if(e>=c){ne(p,e),h[e*3+1]=-50,h[(12+e)*3+1]=-50;continue}let n=O[e];n.s+=t*n.speed;let r=0;for(;n.s>=o[n.edge].len&&r++<4;){n.s-=o[n.edge].len;let e=n.fwd?o[n.edge].b:o[n.edge].a,t=A(e,n.edge,n.rng);n.edge=t,n.fwd=o[t].a===e}let i=o[n.edge],s=n.fwd?a[i.a]:a[i.b],u=n.fwd?a[i.b]:a[i.a],d=u.x-s.x,f=u.z-s.z,m=Math.hypot(d,f)||1,g=d/m,_=f/m,v=-_,y=g,b=s.x+g*n.s+v*N,x=s.z+_*n.s+y*N,S=Math.atan2(g,_);j.position.set(b,re,x),j.rotation.set(0,S,0),j.scale.set(1,1,n.lenZ),j.updateMatrix(),p.setMatrixAt(e,j.matrix);let C=.74*n.lenZ*.5,w=re+.06,T=e*3,E=(12+e)*3;l?(h[T]=b+g*(C+.04),h[T+1]=w,h[T+2]=x+_*(C+.04),h[E]=b-g*(C+.02),h[E+1]=w,h[E+2]=x-_*(C+.02)):(h[T+1]=-50,h[E+1]=-50)}p.instanceMatrix.needsUpdate=!0,m.attributes.position.needsUpdate=!0,S.opacity=b.clamp(s*1.8,0,1);let u=Math.max(2,Math.round(St(i)*14));for(let t=0;t<14;t++){if(t>=u){ne(ae,t);continue}let r=se[t],i=(r.phase+r.dir*r.speed*n*.02+1e3)%1;oe.getPointAt(i,ce),oe.getTangentAt(i,ue);let a=Math.sin(n*6+r.phase*30)*.015;j.position.set(ce.x,e+.09+a,ce.z),j.rotation.set(0,Math.atan2(ue.x*r.dir,ue.z*r.dir),Math.sin(n*6+r.phase*30)*.06),j.scale.setScalar(1),j.updateMatrix(),ae.setMatrixAt(t,j.matrix)}ae.instanceMatrix.needsUpdate=!0}return{group:r,update:R,setProfile:L,graph:i,setRouter(e){A=e||k}}}function Tt(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.4,`rgba(255,255,255,0.5)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new R(e);return r.colorSpace=D,r}function Et(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64*.62,0,64/2,64*.62,64*.5);n.addColorStop(0,`rgba(240,250,255,0.95)`),n.addColorStop(1,`rgba(240,250,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new R(e);return r.colorSpace=D,r}function Dt(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`);t.strokeStyle=`rgba(40,46,54,0.9)`,t.lineWidth=6,t.lineCap=`round`,t.beginPath(),t.moveTo(8,40),t.quadraticCurveTo(24,18,32,34),t.quadraticCurveTo(40,18,56,40),t.stroke();let n=new R(e);return n.colorSpace=D,n}function Ot(e,t,n=18){let r=[];for(let i=0;i<n;i++){let a=i/n*Math.PI*2;r.push(new I(Math.cos(a)*e,t,Math.sin(a)*e))}return new oe(r,!0,`catmullrom`,.5)}function kt(e,t,n){let r=e-t,i=[],a=(e,t)=>i.push(new I(e,n,t)),o=(e,n,r,i,o=4)=>{for(let s=1;s<=o;s++){let c=r+(i-r)*(s/o);a(e+Math.cos(c)*t,n+Math.sin(c)*t)}};for(let t=0;t<4;t++)a(e,-r+2*r*t/4);o(r,r,0,Math.PI/2);for(let t=0;t<4;t++)a(r-2*r*t/4,e);o(-r,r,Math.PI/2,Math.PI);for(let t=0;t<4;t++)a(-e,r-2*r*t/4);o(-r,-r,Math.PI,1.5*Math.PI);for(let t=0;t<4;t++)a(-r+2*r*t/4,-e);return o(r,-r,1.5*Math.PI,2*Math.PI),new oe(i,!0,`catmullrom`,.5)}function At({extent:e=8,waterSize:t=28,plinthTop:n=.3}={}){let r=new B;r.raycast=()=>{};let i=.06,a=(e,n,r)=>r.set(e/t+.5,-n/t+.5,0),c=[kt(9.5,3,i),Ot(12.7,i),new oe([new I(8.4,i,0),new I(11,i,-3.6),new I(13,i,0),new I(11,i,3.6)],!0,`catmullrom`,.5)],l=c.map(e=>e.getLength());function u({scale:e=1,hull:t=`#6b7785`,cabin:n=`#e7ecf2`}){let r=new B,i=new o(new F(.46*e,.2*e,1.1*e),V(new v({color:t,roughness:.6,metalness:.2,flatShading:!0}),{color:t}));i.position.y=.02;let a=new o(new F(.3*e,.22*e,.42*e),V(new v({color:n,roughness:.7,flatShading:!0}),{color:n}));return a.position.set(0,.18*e,.08*e),r.add(i,a),r.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!1),e.raycast=()=>{}}),r.userData.halfLen=.55*e,r}let d=[{laneIndex:0,dir:1,speed:.5,wake:.024,scale:1,hull:`#5a6675`,cabin:`#e7ecf2`},{laneIndex:1,dir:-1,speed:.42,wake:.022,scale:1,hull:`#7a5b46`,cabin:`#d9c3a6`},{laneIndex:0,dir:1,speed:.56,wake:.024,scale:.9,hull:`#456079`,cabin:`#cfe0ee`},{laneIndex:2,dir:1,speed:.34,wake:.03,scale:1.35,hull:`#39505f`,cabin:`#e2b85a`}];d.forEach((e,t)=>{e.mesh=u(e),e.u=t*.27%1,e.phase=t*1.7,e.isFerry=e.laneIndex===2,r.add(e.mesh)});let f=d.length,p=f*2,m=new le,g=new Float32Array(p*3).fill(-50),_=new Float32Array(p*3),y=new P(`#fff0c0`),x=new P(`#ff3528`);for(let e=0;e<f;e++)y.toArray(_,e*3),x.toArray(_,(f+e)*3);m.setAttribute(`position`,new te(g,3)),m.setAttribute(`color`,new te(_,3));let S=new s(m,new E({size:.6,sizeAttenuation:!0,map:Tt(),vertexColors:!0,transparent:!0,opacity:0,blending:2,depthWrite:!1}));S.frustumCulled=!1,S.raycast=()=>{},r.add(S);function C(e,t){let n=new o(new h(e,9,7),V(new v({color:t,roughness:.5,flatShading:!0}),{color:t}));return n.scale.set(.55,.5,1),n.castShadow=!1,n.receiveShadow=!1,n.raycast=()=>{},n.position.y=-5,n}let w=[{x:-9.5,z:6,size:.18,color:`#5b6f86`,period:11,arcH:.55,span:1.1,whale:!1},{x:7.5,z:-9.5,size:.16,color:`#4a6076`,period:14,arcH:.5,span:1,whale:!1},{x:-7,z:-8.5,size:.2,color:`#607089`,period:9,arcH:.6,span:1.2,whale:!1},{x:10.5,z:7,size:.62,color:`#3a4350`,period:38,arcH:.9,span:2.6,whale:!0}];w.forEach((e,t)=>{e.mesh=C(e.size,e.color),e.heading=Math.atan2(-e.x,-e.z),e.t=t/w.length*e.period,e.splashed=!1,r.add(e.mesh),e.whale&&(e.spout=new O(new k({map:Et(),transparent:!0,opacity:0,depthWrite:!1,fog:!0})),e.spout.scale.set(.6,1.1,1),e.spout.position.set(e.x,-5,e.z),r.add(e.spout))});let T=Dt(),D=[];for(let e=0;e<4;e++){let t=new O(new k({map:T,transparent:!0,opacity:0,depthWrite:!1,fog:!0}));t.scale.setScalar(.5),D.push({sp:t,r:8.6+e*.5,y:1.1+e%2*.5,speed:(.18+e*.03)*(e%2?-1:1),phase:e*1.9}),r.add(t)}let ee=w.length,A=Array.from({length:f+ee},()=>new I),j=e=>e.laneIndex,M=new I,ne=new I,N=new I;function re(e,t,n){let r=n?n.windowGlow:0,o=1-r;for(let n=0;n<f;n++){let o=d[n],s=c[o.laneIndex],u=l[o.laneIndex],p=o.isFerry?.45+.55*Math.min(1,Math.abs((o.u+.5)%1-.5)*3):1,m=o.u;o.u=(o.u+o.dir*e*o.speed*p/u+1)%1,(o.dir>0?o.u<m:o.u>m)&&(o.laneIndex=j(o)),s.getPointAt(o.u,M),s.getTangentAt(o.u,ne);let h=ne.x*o.dir,_=ne.z*o.dir,v=Math.atan2(h,_),y=Math.sin(t*1.1+o.phase)*.025;o.mesh.position.set(M.x,i+y,M.z),o.mesh.rotation.set(Math.sin(t*.9+o.phase)*.04,v,0);let b=o.mesh.userData.halfLen;a(M.x-h*b,M.z-_*b,N),A[n].set(N.x,N.y,o.wake);let x=n*3,S=(f+n)*3;if(r>.05){let e=.18;g[x]=M.x+h*(b+.05),g[x+1]=e,g[x+2]=M.z+_*(b+.05),g[S]=M.x-h*(b+.02),g[S+1]=e,g[S+2]=M.z-_*(b+.02)}else g[x+1]=-50,g[S+1]=-50}ie(),S.material.opacity=b.clamp(r*1.8,0,1);for(let t=0;t<ee;t++){let n=w[t];n.t+=e;let r=f+t,o=n.whale?3.2:1.3;if(n.t>=n.period){let e=(n.t-n.period)/o;if(e>=1){n.t=0,n.splashed=!1,n.mesh.position.y=-5,n.spout&&(n.spout.material.opacity=0),A[r].set(0,0,0);continue}let t=Math.sin(Math.PI*e),s=(e-.5)*n.span,c=n.x+Math.sin(n.heading)*s,l=n.z+Math.cos(n.heading)*s;n.mesh.position.set(c,i-.1+t*n.arcH,l),n.mesh.rotation.set(Math.cos(Math.PI*e)*.9,n.heading,0);let u=e<.16||e>.84;if(a(c,l,N),A[r].set(N.x,N.y,u?n.whale?.07:.05:0),n.spout){let t=b.clamp((e-.15)*3,0,1)*(1-e);n.spout.position.set(c,.56+t*.6,l),n.spout.material.opacity=t*.9}}else n.mesh.position.y=-5,A[r].set(0,0,0),n.spout&&(n.spout.material.opacity=0)}for(let e=0;e<4;e++){let n=D[e],r=n.phase+t*n.speed*.25;n.sp.position.set(Math.cos(r)*n.r,n.y+Math.sin(t*1.4+n.phase)*.12,Math.sin(r)*n.r),n.sp.material.opacity=b.clamp(o*.9-.05,0,.85)}if(typeof window<`u`){let e=0;for(let t of w)t.mesh.position.y>i&&e++;window.__waterLife={boats:f,breaching:e,gulls:+D[0].sp.material.opacity.toFixed(2),lights:+S.material.opacity.toFixed(2)}}}function ie(){m.attributes.position.needsUpdate=!0}function ae(){return A.length}return{group:r,update:re,wakeDrops:A,get wakeCount(){return ae()},lanes:c,setRouter(e){j=e||(e=>e.laneIndex)}}}var jt=[`empireState`,`chrysler`,`liberty`,`eiffel`,`arcDeTriomphe`,`sacreCoeur`,`tokyoTower`,`pagoda`,`neonBillboard`],Mt={empireState:1.25,chrysler:1.1,liberty:.55,eiffel:3.2,arcDeTriomphe:1.5,sacreCoeur:1.75,tokyoTower:1.35,pagoda:.5,neonBillboard:.9};function Nt(e){let t=()=>new v({flatShading:!0,roughness:.7,metalness:.1}),n=(n,r={})=>r.windows?Ye(t(),{color:n,id:e.id(),windowGlow:e.windowGlow,winColors:e.winColors,litFrac:e.litFrac}):V(t(),{color:n,glow:r.glow??null,glowDay:r.glowDay??0,glowNight:r.glowNight??1,windowGlow:r.glow?e.windowGlow:null});return{box:(e,t,r,i,a={})=>new o(new F(e,t,r),n(i,a)),cyl:(e,t,r,i,a={})=>new o(new se(e,t,r,a.seg||12),n(i,a)),cone:(e,t,r,i={})=>new o(new ue(e,t,i.seg||8),n(r,i)),sphere:(e,t,r={})=>new o(new h(e,r.seg||12,r.seg2||8),n(t,r)),lathe:(e,t,r={})=>new o(new w(e.map(e=>new z(e[0],e[1])),r.seg||4),n(t,r))}}var H=(e,t,n,r)=>(e.position.set(t,n,r),e),Pt=[`#7FB0E0`,`#E07FB0`,`#7FE0A0`,`#E0C97F`,`#9FE07F`,`#7FE0E0`,`#FF8C42`,`#E0E07F`,`#C97FE0`,`#E07F7F`,`#7F9FE0`,`#E0483A`],Ft={empireState(e,t){let n=`#E8E0CF`;e.add(H(t.box(.42,.18,.42,n,{windows:!0}),0,.09,0)),e.add(H(t.box(.34,.16,.34,n,{windows:!0}),0,.26,0)),e.add(H(t.box(.26,.14,.26,n,{windows:!0}),0,.41,0)),e.add(H(t.box(.19,.34,.19,n,{windows:!0}),0,.65,0)),e.add(H(t.box(.13,.06,.13,n,{windows:!0}),0,.85,0));let r=Pt[new Date().getMonth()];e.add(H(t.cyl(.03,.045,.12,n,{seg:10,glow:r,glowNight:1.85}),0,.94,0)),e.add(H(t.cone(.012,.07,n,{seg:8}),0,1.04,0))},chrysler(e,t){let n=`#C9CED4`;e.add(H(t.box(.22,.55,.22,`#9AA7B4`,{windows:!0}),0,.275,0));let r=.55;for(let i=0;i<5;i++){let a=.14-i*.024,o=.07;e.add(H(t.cyl(a*.7,a,o,n,{seg:8,glow:`#dfeaff`,glowNight:.5}),0,r+o/2,0)),r+=o}e.add(H(t.cone(.018,.16,n,{seg:8}),0,r+.08,0))},liberty(e,t){let n=`#B9B4A6`,r=`#4FA890`;e.add(H(t.box(.42,.16,.42,n),0,.08,0)),e.add(H(t.box(.3,.2,.3,n),0,.26,0)),e.add(H(t.cyl(.1,.15,.42,r,{seg:10}),0,.57,0)),e.add(H(t.box(.11,.1,.11,r),0,.83,0));for(let n=0;n<7;n++){let i=(n/6-.5)*Math.PI*1.1;e.add(H(t.cone(.012,.1,r,{seg:5}),Math.sin(i)*.1,.92,Math.cos(i)*.06-.02))}let i=H(t.cyl(.025,.03,.34,r,{seg:8}),.14,.98,0);i.rotation.z=.35,e.add(i),e.add(H(t.box(.06,.06,.06,r,{glow:`#ffd060`,glowDay:.6,glowNight:1.2}),.2,1.16,0)),e.add(H(t.cone(.04,.09,`#ffcf66`,{seg:6,glow:`#ffd060`,glowDay:.7,glowNight:1.3}),.2,1.24,0))},eiffel(e,t){let n=`#6E5C4C`,r=[[.2,0],[.13,.16],[.085,.33],[.055,.5],[.035,.66],[.02,.85],[0,.92]];e.add(t.lathe(r,n,{seg:4}));let i=t.lathe(r,n,{seg:4});i.rotation.y=Math.PI/4,e.add(i),e.add(H(t.box(.26,.025,.26,n),0,.33,0)),e.add(H(t.box(.14,.02,.14,n),0,.66,0)),e.add(H(t.cone(.01,.1,n,{seg:6}),0,.97,0))},arcDeTriomphe(e,t){let n=`#D9D0C1`,r=.58,i=.5,a=.34,s=new de;s.moveTo(-.58/2,0),s.lineTo(r/2,0),s.lineTo(r/2,i),s.lineTo(-.58/2,i),s.lineTo(-.58/2,0);let c=new m,l=.15,u=.22;c.moveTo(-.15,0),c.lineTo(-.15,u),c.absarc(0,u,l,Math.PI,0,!0),c.lineTo(l,0),c.lineTo(-.15,0),s.holes.push(c);let d=new he(s,{depth:a,bevelEnabled:!1});d.translate(0,0,-.34/2),d.computeVertexNormals(),e.add(new o(d,V(new v({color:n,flatShading:!0}),{color:n}))),e.add(H(t.box(r*1.06,.08,a*1.06,n),0,.54,0))},sacreCoeur(e,t){let n=`#F1EEE6`;e.add(H(t.box(.5,.26,.4,n),0,.13,0));let r=(r,i,a,o)=>{e.add(H(t.cyl(a*.9,a,i,n,{seg:12}),r,o,0));let s=H(t.sphere(a,n,{seg:12}),r,o+i/2,0);s.scale.y=1.5,e.add(s)};r(0,.22,.15,.4),r(-.2,.1,.07,.33),r(.2,.1,.07,.33)},tokyoTower(e,t){let n=`#F25822`,r=`#EDEDED`,i=0;for(let a=0;a<9;a++){let o=a/9,s=(a+1)/9,c=.19*(1-o)+.03*o,l=.19*(1-s)+.03*s,u=.085,d=a%2?r:n;e.add(H(t.cyl(l,c,u,d,{seg:4,glow:n,glowDay:0,glowNight:.7}),0,i+u/2,0)),i+=u}e.add(H(t.box(.22,.02,.22,n,{glow:n,glowNight:.7}),0,.28,0)),e.add(H(t.box(.12,.02,.12,r),0,.5,0)),e.add(H(t.cone(.012,.16,r,{seg:6,glow:`#ff6a2a`,glowNight:.9}),0,i+.08,0))},pagoda(e,t){let n=0;for(let r=0;r<5;r++){let i=.42-r*.06,a=.11;e.add(H(t.box(i,a,i,`#B23A2C`,{windows:r<4}),0,n+a/2,0)),e.add(H(t.box(i*1.34,.03,i*1.34,`#7A3B2A`),0,n+a+.015,0)),n+=.16999999999999998}e.add(H(t.cyl(.012,.012,.1,`#E0C040`,{seg:6}),0,n+.05,0)),e.add(H(t.sphere(.03,`#E0C040`,{seg:8,glow:`#ffe680`,glowNight:.8}),0,n+.12,0))},neonBillboard(e,t){let n=`#20242C`;e.add(H(t.box(.3,1,.3,n,{windows:!0}),0,.5,0));let r=[`#5AE8E0`,`#E85AA0`,`#E8E06A`],i=(n,r,i,a,o,s,c)=>{let l=H(t.box(n,r,.02,i,{glow:i,glowDay:.6,glowNight:1.1}),a,o,s);l.rotation.y=c,e.add(l)};i(.22,.34,r[0],0,.75,.16,0),i(.16,.5,r[1],.16,.5,0,Math.PI/2),i(.2,.22,r[2],0,.34,-.16,0),e.add(H(t.cone(.01,.14,n,{seg:6,glow:`#E85AA0`,glowDay:.4,glowNight:1}),0,1.08,0))}};function It(e,t){let n=new B;return Ft[e](n,Nt(t)),n}var Lt=``+new URL(`building-skyscraper-d-CapD2Zqe.glb`,import.meta.url).href,Rt=``+new URL(`building-n-hdv8kKtN.glb`,import.meta.url).href,zt=``+new URL(`building-g-CsTB1qH9.glb`,import.meta.url).href,Bt=``+new URL(`colormap-CK8fW2HB.png`,import.meta.url).href,Vt={skyscraper:{url:Lt,color:`#9cc1dd`,fill:.92},midrise:{url:Rt,color:`#c9a07a`,fill:.96},setback:{url:zt,color:`#d9c7a0`,fill:.9}};function Ht({windowGlow:e}){let t=new l;t.setURLModifier(e=>e.includes(`colormap.png`)?Bt:e);let n=new pe(t),r={},i=!1,a=Promise.all(Object.entries(Vt).map(async([e,t])=>{r[e]=(await n.loadAsync(t.url)).scene})).then(()=>{i=!0,window.__landmarksReady=!0}).catch(e=>console.error(`landmark models failed:`,e)),o=9e3;function s(t,n,i={}){let a,s;if(jt.includes(t))a=It(t,{windowGlow:e,winColors:i.winColors,litFrac:i.litFrac,id:()=>++o}),s=1;else{let e=r[t],n=Vt[t];if(!e||!n)return null;a=e.clone(!0),s=n.fill}a.updateMatrixWorld(!0);let c=new fe().setFromObject(a).getSize(new I);a.scale.setScalar(n.h*s/c.y),a.updateMatrixWorld(!0);let l=new fe().setFromObject(a),u=l.getCenter(new I);return a.position.x+=n.x-u.x,a.position.z+=n.z-u.z,a.position.y+=n.plinthTop-l.min.y,jt.includes(t)?a.traverse(e=>{e.isMesh&&(e.castShadow=!1,e.raycast=()=>{})}):a.traverse(n=>{if(!n.isMesh)return;n.castShadow=!1,n.raycast=()=>{};let r=n=>Ye(n.clone(),{color:Vt[t].color,id:++o,windowGlow:e,winColors:i.winColors,litFrac:i.litFrac});n.material=Array.isArray(n.material)?n.material.map(r):r(n.material)}),a}return{make:s,whenReady:a,heightFactor:e=>Mt[e]??1,get ready(){return i}}}var Ut=[`video/mp4;codecs=avc1.42E01E`,`video/mp4`,`video/webm;codecs=vp9`,`video/webm`];function Wt({renderer:e,rig:t,sunRig:n,poke:r,getState:i,office:a={}}){let o=e.domElement,s=new URLSearchParams(window.location.search),c=e=>{let t=i();return`lgr-${t.lesson}-${String(t.clock||``).replace(`:`,``)}-${t.style}.${e}`},l=(e,t)=>{let n=URL.createObjectURL(e),r=document.createElement(`a`);r.href=n,r.download=t,document.body.appendChild(r),r.click(),r.remove(),setTimeout(()=>URL.revokeObjectURL(n),1e3)};function u(){o.toBlob(e=>{e&&(l(e,c(`png`)),window.__lastStill=e.size)},`image/png`)}let d=()=>Ut.find(e=>window.MediaRecorder&&MediaRecorder.isTypeSupported(e))||``,f=Gt(),p=null,m=[],h=!1;function g(){if(h)return;let e=d(),t=o.captureStream(60);p=new MediaRecorder(t,e?{mimeType:e,videoBitsPerSecond:12e6}:{}),m=[],p.ondataavailable=e=>{e.data&&e.data.size&&m.push(e.data)},p.onstop=()=>{let e=new Blob(m,{type:p.mimeType});l(e,c(p.mimeType.includes(`mp4`)?`mp4`:`webm`)),window.__lastVideo=e.size},p.start(),h=!0,window.__recording=!0,f.show()}function _(){h&&(p.stop(),h=!1,window.__recording=!1,f.hide())}let v=()=>h?_():g(),y=e=>new Promise(t=>setTimeout(t,e)),b=e=>window.dispatchEvent(new KeyboardEvent(`keydown`,{key:e}));async function x(){let e=o.clientWidth,t=o.clientHeight,n=e*.26,i=t*.74;for(let t=0;t<=10;t++)r.at(n+t*e*.028,i+Math.sin(t*.7)*16),await y(100);r.stop()}async function S(e){if(e.keys)for(let t of e.keys)b(t),await y(70);e.zoom&&t.zoomBy(e.zoom),e.orbit&&t.orbit(e.orbit[0],e.orbit[1]),e.timeTo!==void 0&&n.goTo(e.timeTo),e.office&&a[e.office]?.(),e.ripple&&await x(),e.waitMs&&await y(e.waitMs)}let C={tour:[{keys:[`6`,`0`],waitMs:600},{zoom:.72,waitMs:1700},{ripple:!0,waitMs:2400},{orbit:[.55,0],waitMs:1700},{timeTo:0,waitMs:3e3},{timeTo:.5,waitMs:1500},{keys:[`7`],waitMs:1e3},{zoom:1.5,waitMs:1400},{keys:[`B`],waitMs:2e3},{keys:[`B`],waitMs:2e3},{keys:[`B`],waitMs:2e3},{keys:[`B`],waitMs:2e3},{keys:[`B`],waitMs:2e3},{keys:[`8`],waitMs:900},{zoom:.65,waitMs:1200},{ripple:!0,waitMs:2600},{keys:[`7`],waitMs:700},{keys:[`B`],waitMs:300},{keys:[`B`],waitMs:900},{zoom:1.4,waitMs:2600}],daycycle:[{keys:[`6`,`0`],waitMs:700},{timeTo:.75,waitMs:2600},{timeTo:1,waitMs:2600},{timeTo:1.25,waitMs:2600},{timeTo:1.5,waitMs:2600},{timeTo:1.5,waitMs:800}],office:[{keys:[`o`],waitMs:1700},{office:`pet`,waitMs:1300},{office:`feed`,waitMs:1700},{office:`travel`,waitMs:1700},{keys:[`W`,`W`,`W`],waitMs:1800},{timeTo:0,waitMs:2400},{office:`laptop`,waitMs:800},{office:`closeLaptop`,waitMs:300},{timeTo:.5,waitMs:900},{keys:[`W`],waitMs:200},{keys:[`o`],waitMs:1500}],cities:[{keys:[`6`,`0`],waitMs:500},{timeTo:.78,waitMs:2800},{keys:[`C`],waitMs:3e3},{keys:[`C`],waitMs:3e3},{keys:[`C`],waitMs:2e3}],water:[{keys:[`6`,`0`],waitMs:600},{zoom:1.35,waitMs:2800},{orbit:[.7,0],waitMs:2600},{ripple:!0,waitMs:2200},{timeTo:0,waitMs:3200},{timeTo:.5,waitMs:1500},{orbit:[-.5,0],waitMs:2200}],morph:[{keys:[`6`,`3`],waitMs:700},{zoom:.55,waitMs:1800},{zoom:2.3,waitMs:1700},{zoom:1.26,waitMs:1700},{zoom:1.16,waitMs:1900},{zoom:.3,waitMs:2200}]};async function w(e){let t=C[e];if(t){window.__director=e;for(let e of t)await S(e);window.__director=null}}async function T(e){await y(1600),g(),await w(e),await y(400),_(),window.__captureDone=!0}window.addEventListener(`keydown`,e=>{(e.key===`s`||e.key===`S`)&&u(),(e.key===`r`||e.key===`R`)&&v()});let E=s.get(`capture`);return E&&C[E]&&T(E),window.__capture={still:u,toggleRec:v,run:w,sequences:Object.keys(C)},window.__capture}function Gt(){let e=document.createElement(`div`);return e.textContent=`● REC`,e.style.cssText=`position:fixed;top:14px;right:16px;z-index:2;font:bold 12px ui-monospace,monospace;color:#ff3b30;letter-spacing:.12em;text-shadow:0 1px 3px #000;display:none;`,document.body.appendChild(e),{show:()=>{e.style.display=`block`},hide:()=>{e.style.display=`none`}}}var Kt=`
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
.vui .seg button { min-width: 40px; padding: 0 9px; border-radius: 9px; }
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
@media (pointer: coarse) { .vui { bottom: 20px; padding: 9px 11px; } .vui button { font-size: 13px; }
  .vui-show { bottom: 20px; } }
`;function qt({controls:e,state:t,show:n,coarse:r}){if(typeof document>`u`)return;let i=document.createElement(`style`);i.textContent=Kt,document.head.appendChild(i);let a=document.createElement(`div`);a.className=`vui`;let o=document.createElement(`div`);o.className=`vui-info`,o.innerHTML=`KEYS · 4/5/6 cam · 0 vector · 7/8 pixel/toon · B era · T time · [ ] scrub · 9 auto · C city · G shuffle · W weather · K season · click a building / O office · J office skin · Esc exit · M hide UI · S still · R rec · H shadows · P theme · drag water to ripple`;let s=(e,t,n)=>{let r=document.createElement(`button`);return r.textContent=e,n&&(r.title=n),r.addEventListener(`click`,t),r},c=e=>{let t=document.createElement(`div`);return t.className=`seg`,{seg:t,btns:e.map(([n,r])=>{let i=s(n,()=>e.find(e=>e[1]===r)[2](),n);return i.dataset.val=r,t.appendChild(i),i})}};a.appendChild(s(`City`,()=>e.city(),`Next city profile (C)`)),a.appendChild(s(`Shuffle`,()=>e.shuffle(),`New random seed (G)`)),a.appendChild(N());let l={clear:`Clear`,rain:`Rain`,snow:`Snow`,fog:`Fog`},u=[`Spring`,`Summer`,`Autumn`,`Winter`],d=s(`Clear`,()=>e.weather(),`Cycle weather: clear→rain→snow→fog (W)`),f=s(`Spring`,()=>e.season(),`Cycle season: spring→summer→autumn→winter (K)`),p=s(`Office`,()=>e.office(),`Dive into / exit the office (O · Esc)`),m={"3d":`3D`,smooth:`Smooth`,charm:`Charm`},h=s(`Skin`,()=>e.officeSkin(),`Office look: 3D → smooth → charm diffusion (J)`);a.append(d,f,p,h,N());let g=c([[`Auto`,`auto`,()=>e.style(`auto`)],[`Vector`,`vector`,()=>e.style(`vector`)],[`Pixel`,`pixel`,()=>e.style(`pixel`)],[`Toon`,`toon`,()=>e.style(`toon`)]]);g.btns[0].title=`AUTO: zoom morphs the style (toon → 16-bit → 8-bit → Game Boy)`;let _={native:`Era`,gb:`GB`,"8-bit":`8-bit`,"16-bit":`16-bit`,modern:`Modern`,"1-bit":`1-bit`},v=s(`Era`,()=>e.era(),`Cycle the pixel era (B): native → GB → 8-bit → 16-bit → Modern`);a.appendChild(g.seg),a.appendChild(v),a.appendChild(N());let y=document.createElement(`input`);y.type=`range`,y.min=`0`,y.max=`1`,y.step=`0.01`,y.title=`Time of day`;let b=!1;y.addEventListener(`pointerdown`,()=>{b=!0}),y.addEventListener(`pointerup`,()=>{b=!1}),y.addEventListener(`input`,()=>e.time(parseFloat(y.value)));let x=s(`▶`,()=>e.auto(),`Play/pause day cycle (9)`),S=document.createElement(`div`);S.style.cssText=`display:flex;align-items:center;gap:6px;`;let C=document.createElement(`span`);C.className=`lbl`,C.textContent=`Day`,S.append(C,y,x),a.appendChild(S),a.appendChild(N());let w=c([[`Iso`,`iso`,()=>e.cam(`iso`)],[`Dim`,`dimetric`,()=>e.cam(`dimetric`)],[`3D`,`persp`,()=>e.cam(`persp`)]]);a.appendChild(w.seg),a.appendChild(s(`ⓘ`,()=>o.classList.toggle(`open`),`All keys`)),a.appendChild(N()),a.appendChild(s(`⌄`,()=>A(!0),`Hide controls — watch unobstructed (M)`));let T=document.createElement(`button`);T.className=`vui-show`,T.innerHTML=`⌃ Controls`,T.title=`Show controls (M)`,T.addEventListener(`click`,()=>A(!1));let E=document.createElement(`div`);E.className=`vui-style`,document.body.append(o,a,T,E);let D=n,O=!1;A(!1);function ee(){let e=t();g.btns.forEach(t=>t.classList.toggle(`on`,t.dataset.val===e.style)),w.btns.forEach(t=>t.classList.toggle(`on`,t.dataset.val===e.cam)),d.textContent=l[e.weather]||`Clear`,d.classList.toggle(`on`,e.weather!==`clear`),f.textContent=u[e.season]||`Spring`,f.classList.toggle(`on`,(e.season||0)>0),p.textContent=e.office?`Exit`:`Office`,p.classList.toggle(`on`,!!e.office),h.textContent=m[e.officeSkin]||`Skin`,h.classList.toggle(`on`,e.officeSkin&&e.officeSkin!==`3d`),x.textContent=e.auto?`❚❚`:`▶`,x.classList.toggle(`on`,e.auto),v.textContent=_[e.era]||`Era`,v.classList.toggle(`on`,e.era&&e.era!==`native`),b||(y.value=String(e.t))}ee();let k=setInterval(ee,200);function A(e){if(!D){a.style.display=`none`,T.classList.remove(`on`),o.classList.remove(`open`),E.classList.remove(`on`);return}O=e,a.style.display=e?`none`:`flex`,T.classList.toggle(`on`,e),e&&(o.classList.remove(`open`),E.classList.remove(`on`))}function te(){A(!O)}let j=null,M=null;function ne(e){if(!D||O){E.classList.remove(`on`),j=null;return}if(!e){E.classList.remove(`on`),j=``;return}e!==j&&(j=e,E.textContent=e,E.classList.add(`on`),clearTimeout(M),M=setTimeout(()=>E.classList.remove(`on`),2e3))}return{toggle:te,setHidden:A,refresh:ee,setStyleHint:ne,destroy(){clearInterval(k),a.remove(),o.remove(),T.remove(),E.remove(),i.remove(),clearTimeout(M)}};function N(){let e=document.createElement(`div`);return e.className=`sep`,e}}var Jt=[`clear`,`rain`,`snow`,`fog`];function Yt({extent:e=7}={}){let t=new B;t.raycast=()=>{};let n=e+2,r=.25,i=(e,t)=>e+Math.random()*(t-e),a=new ge(new S(.015,.5),new ie({color:`#a9bdd6`,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),600);a.frustumCulled=!1,a.raycast=()=>{};let o=new Float32Array(600*3),s=new Float32Array(600);for(let e=0;e<600;e++)o[e*3]=i(-n,n),o[e*3+1]=i(r,11),o[e*3+2]=i(-n,n),s[e]=i(9,14);let c=new ge(new S(.07,.07),new ie({color:`#f3f7ff`,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),700);c.frustumCulled=!1,c.raycast=()=>{};let l=new Float32Array(700*3),u=new Float32Array(700),d=new Float32Array(700);for(let e=0;e<700;e++)l[e*3]=i(-n,n),l[e*3+1]=i(r,11),l[e*3+2]=i(-n,n),u[e]=i(0,6.28),d[e]=i(.6,1.2);t.add(a,c);let f=Array.from({length:8},()=>new I),p=0,m=`clear`,h=0,g=0,_=0,v=0,y=0,b=new x,C=(e,t,n,r)=>e+(t-e)*Math.min(1,n*r);function w(e){Jt.includes(e)&&(m=e)}function T(){m=Jt[(Jt.indexOf(m)+1)%Jt.length]}function E(e,t){let x=m===`rain`,S=m===`snow`,w=m===`fog`,T=m!==`clear`;h=C(h,+!!T,e,1.4),g=C(g,+!!T,e,1.2),_=C(_,+!!w,e,.9),y=C(y,T&&!w?1:0,e,1),v=C(v,+!!S,e,S?.22:.5);let E=x?h:0,D=Math.round(600*E);for(let t=0;t<600;t++){if(t>=D){b.position.set(0,-50,0),b.scale.setScalar(0),b.updateMatrix(),a.setMatrixAt(t,b.matrix);continue}o[t*3+1]-=s[t]*e,o[t*3]+=e*1.1,o[t*3+1]<r&&(o[t*3]=i(-n,n),o[t*3+1]=11,o[t*3+2]=i(-n,n)),b.position.set(o[t*3],o[t*3+1],o[t*3+2]),b.rotation.set(0,0,0),b.scale.set(1,1,1),b.updateMatrix(),a.setMatrixAt(t,b.matrix)}a.instanceMatrix.needsUpdate=!0,a.material.opacity=.55*E,p=x?Math.round(8*h):0;for(let e=0;e<p;e++)f[e].set(Math.random(),Math.random(),.05*h);let O=Math.round(700*(S?h:0));for(let a=0;a<700;a++){if(a>=O){b.position.set(0,-50,0),b.scale.setScalar(0),b.updateMatrix(),c.setMatrixAt(a,b.matrix);continue}l[a*3+1]-=d[a]*e;let o=Math.sin(t*1.5+u[a])*.5;l[a*3+1]<r&&(l[a*3]=i(-n,n),l[a*3+1]=11,l[a*3+2]=i(-n,n)),b.position.set(l[a*3]+o,l[a*3+1],l[a*3+2]),b.rotation.set(0,0,0),b.scale.setScalar(1),b.updateMatrix(),c.setMatrixAt(a,b.matrix)}c.instanceMatrix.needsUpdate=!0,c.material.opacity=.9*(S?h:0)}return{group:t,update:E,cycle:T,setKind:w,rainDrops:f,get kind(){return m},get intensity(){return h},get overcast(){return g},get fog(){return _},get snow(){return v},get cloud(){return y},get rainDropCount(){return p},poolCounts:{rain:600,snow:700}}}var Xt=``+new URL(`office-smooth-DEluvd7o.png`,import.meta.url).href,Zt=``+new URL(`office-charm-D7t90SkH.png`,import.meta.url).href;function U(e,t,n,r,{rough:i=.62,metal:a=0,x:s=0,y:c=0,z:l=0,emissive:u=null,emissiveIntensity:d=1}={}){let f=new o(new F(e,t,n),new v({color:r,roughness:i,metalness:a,...u?{emissive:u,emissiveIntensity:d}:{}}));return f.position.set(s,c,l),f}function Qt({tier:e=`corner`}={}){let t=new f,n=new _(43,1,.1,100),r=new I(0,1.62,4.35);n.position.copy(r),n.lookAt(0,1.12,-1);let i=new B;t.add(i);let s=new B,l=new B,u=new B;i.add(s,l,u);let d=[],p=`#3a2618`,m=`#5b3d27`,h=`#5a5650`;s.add(U(11,.2,11,`#3c2a1c`,{rough:.5,y:-.1})),s.add(U(11,.2,11,`#241a13`,{rough:.9,y:3}));function g(e){let t=new B;t.add(U(.2,3.2,8,`#4a3322`,{rough:.7,x:e*3.6,y:1.5,z:0}));for(let n of[.9,2.1])t.add(U(.22,.06,8,p,{x:e*3.59,y:n,z:0}));let n=new o(new S(1.5,1),new v({map:sn(e),roughness:.8}));return n.position.set(e*3.49,1.7,.4),n.rotation.y=-e*Math.PI/2,t.add(U(.06,1.18,1.68,`#2a1c10`,{x:e*3.52,y:1.7,z:.4}),n),t}s.add(g(-1),g(1));let y=new S(3,2.5),x=new ie({color:`#ffffff`,toneMapped:!1}),C=new ie({color:`#ffffff`,toneMapped:!1}),w=1.55,T=new o(y,x);T.position.set(-1.06,w,-2.64),T.rotation.y=Math.PI/4;let E=new o(y,C);E.position.set(1.06,w,-2.64),E.rotation.y=-Math.PI/4,u.add(T,E),s.add(U(.08,2.7,.08,p,{x:0,y:w,z:-2.2}));for(let[e,t,n]of[[-1.06,-2.64,Math.PI/4],[1.06,-2.64,-Math.PI/4]]){let r=new B;r.add(U(3.05,.09,.09,p,{y:1.3})),r.add(U(3.05,.09,.09,p,{y:-1.25})),r.add(U(.09,2.6,.09,p,{x:-1.5})),r.position.set(e,w,t),r.rotation.y=n,s.add(r)}s.add(U(5.4,.5,.3,m,{x:0,y:.25,z:-2.1500000000000004})),s.add(U(.4,.06,.4,`#1a130c`,{y:2.94,z:1.3}));let A=new o(new me(.16,20),new ie({color:`#ffe6b0`,toneMapped:!1}));A.position.set(0,2.9,1.3),A.rotation.x=Math.PI/2,s.add(A),s.add(en(d,{x:-3.46,y:2.15,z:.2,ry:Math.PI/2,face:`#efe2c8`,rim:`#2a1c10`})),l.add(U(11,.2,11,`#403d38`,{rough:.85,y:-.1})),l.add(U(11,.2,11,`#1c1a17`,{rough:.95,y:2.8})),l.add(U(7,3,.2,h,{rough:.92,x:0,y:1.4,z:-2.9})),l.add(U(.2,3,6,h,{rough:.92,x:-3.2,y:1.4,z:-.2})),l.add(U(.2,3,6,h,{rough:.92,x:3.2,y:1.4,z:-.2}));for(let e of[-1.6,-.4]){let t=new o(new se(.07,.07,6,10),new v({color:`#6b6258`,roughness:.6,metalness:.4}));t.rotation.z=Math.PI/2,t.position.set(0,2.62,e),l.add(t)}let te=new ie({color:`#ffffff`,toneMapped:!1}),j=new o(new S(1.9,1.2),te);j.position.set(0,1.5,-2.79),l.add(j),l.add(U(2.06,1.36,.06,`#241a12`,{x:0,y:1.5,z:-2.83})),l.add(U(.04,.34,.04,`#1a1410`,{x:-.1,y:2.45,z:-.4}));let M=new o(new me(.1,16),new ie({color:`#ffdb8a`,toneMapped:!1}));M.position.set(-.1,2.26,-.4),M.rotation.x=Math.PI/2,l.add(M);let ne=new B;ne.add(U(1.3,.05,.32,`#3a2c1e`,{x:0,y:0,z:0}));let N=[`#7a3a2a`,`#2a4a6a`,`#b08a3a`,`#3a5a3a`,`#6a2a4a`];for(let e=0;e<8;e++)ne.add(U(.12,.34,.24,N[e%N.length],{x:-.55+e*.14,y:.2,z:0}));ne.position.set(-2.3,1.5,-2.66),l.add(ne);let re=new B;re.add(U(.34,.34,.34,`#7a4a2a`,{y:.17}));let ae=new B;for(let e=0;e<6;e++){let t=U(.05,.5,.14,`#3a7a3a`,{rough:.7});t.geometry.translate(0,.25,0),t.rotation.z=(e/6-.5)*1.2,t.rotation.x=Math.sin(e)*.25,ae.add(t)}ae.position.y=.34,re.add(ae),re.position.set(2.45,0,-1.4),l.add(re),l.add(en(d,{x:1.9,y:2.1,z:-2.78,ry:0,face:`#d8d2c4`,rim:`#1a130c`}));let oe=new B;oe.add(U(3.4,.12,1.5,`#6e4a30`,{rough:.32,y:.86,z:1.5})),oe.add(U(3.2,.78,1.36,m,{y:.46,z:1.5}));for(let e of[.66,.4,.14])oe.add(U(.9,.2,.04,`#4a3120`,{x:1.05,y:e,z:2.2}));oe.add(U(.12,.04,.04,`#caa15a`,{x:1.05,y:.66,z:2.23,metal:.6})),i.add(oe);let ce=new B;ce.add(U(.06,.5,.06,`#2a1c10`,{x:-1.15,y:1.15,z:1.6}));let le=new o(new ue(.22,.26,16,1,!0),new v({color:`#c2802e`,roughness:.5,side:2,emissive:`#3a2208`,emissiveIntensity:.6}));le.position.set(-1.15,1.42,1.6),ce.add(le);let de=new _e(`#ffb15a`,7,7,1.8);de.position.set(-1.15,1.34,1.6),ce.add(de),i.add(ce);let fe=new B;fe.add(U(.62,.03,.42,`#1c1c20`,{y:.93,z:1.5,metal:.4,rough:.4}));let L=new o(new F(.62,.4,.025),new v({color:`#0a0c10`,emissive:`#2a4a6a`,emissiveIntensity:.7,roughness:.3}));L.position.set(0,1.14,1.31),L.rotation.x=-.32,fe.add(L),fe.userData.role=`laptop`,i.add(fe);let R=new B;R.add(U(.26,.07,.34,`#15151a`,{x:1,y:.93,z:1.5})),R.add(U(.3,.06,.08,`#101015`,{x:1,y:1,z:1.34})),R.userData.role=`phone`,i.add(R);let pe=new c(`#6a5238`,`#140d08`,.55);t.add(pe);let z=new ee(`#ffd9a0`,9,9,.7,.5,1.2);z.position.set(0,2.95,1.3),z.target.position.set(0,.86,1.5),t.add(z,z.target);let he=tn(!1),ge=tn(!0),ve=.62,ye=1.32,be=1.22,xe=1.78,Se=new O(new k({map:he,transparent:!0,depthWrite:!1}));Se.scale.set(ve,ve,1),Se.position.set(ye,be,xe),Se.userData.role=`cat`,i.add(Se);let Ce=new O(new k({map:rn(),transparent:!0,depthWrite:!1,opacity:0}));Ce.scale.set(.3,.3,1),Ce.raycast=()=>{},i.add(Ce);let we=0;function Te(){we=1.3}let Ee=.62,De=.42,Oe=.34,ke=new B;ke.position.set(-.78,1.06,1.95),ke.add(U(Ee,.05,Oe,`#3a3026`,{y:-.19}));let Ae=new o(new F(Ee-.04,De-.08,Oe-.04),new v({color:`#1f9fc0`,transparent:!0,opacity:.26,roughness:.1,emissive:`#0a3a4a`,emissiveIntensity:.4,depthWrite:!1}));Ae.position.y=.02,ke.add(Ae);for(let e of[-1,1])for(let t of[-1,1])ke.add(U(.03,De,.03,`#20262c`,{x:e*(Ee/2-.015),z:t*(Oe/2-.015),metal:.5}));let je=new o(new F(Ee,De,Oe),new ie({visible:!1}));je.userData.role=`tank`,ke.add(je);let Me=new _e(`#5fd8ff`,0,3,2);ke.add(Me);let Ne=[an(`#e8a23c`),an(`#d85a6a`),an(`#6cc0e0`)],Pe=[],Fe=De/2-.12;for(let e=0;e<3;e++){let t=new O(new k({map:Ne[e],transparent:!0,depthWrite:!1})),n=.15-e*.015;t.userData={sz:n,sp:.6+e*.22,ph:e*2.1,ax:.21*(.7+.1*e),ay:Fe,az:.09000000000000001,prevx:0},t.scale.set(n,n,1),Pe.push(t),ke.add(t)}let Ie=on(),Le=[];for(let e=0;e<5;e++){let t=new O(new k({map:Ie,color:`#cfeffb`,transparent:!0,opacity:.5,depthWrite:!1}));t.userData={ph:e/5,sp:.16+Math.random()*.06,x:-.1+e%3*.07},t.scale.setScalar(.03+e%2*.015),t.raycast=()=>{},Le.push(t),ke.add(t)}let Re=new O(new k({map:Ie,color:`#c8a24a`,transparent:!0,opacity:0,depthWrite:!1}));Re.scale.setScalar(.04),Re.raycast=()=>{},ke.add(Re);let ze=0;function Be(){ze=3,Re.position.set(-.05,Fe,0),Re.material.opacity=1}i.add(ke);let Ve=new B;for(let e=0;e<8;e++){let t=new O(new k({map:Ie,color:`#ffd9a0`,transparent:!0,opacity:0,depthWrite:!1,blending:2}));t.scale.setScalar(.018),t.userData={ph:e*.9,sp:.1+e%3*.04,r:.1+e%4*.03},t.raycast=()=>{},Ve.add(t)}Ve.position.set(-1.15,1.2,1.6),i.add(Ve);let He=$t(),Ue={smooth:new a().load(Xt),charm:new a().load(Zt)};for(let e of[`smooth`,`charm`]){let t=Ue[e];t.colorSpace=D,t.repeat.set(1,.86),t.offset.set(0,.14),t.needsUpdate=!0}let We=new o(new S(1,1),new ie({map:Ue.smooth,toneMapped:!1}));We.position.set(0,1.45,-5),We.visible=!1,We.raycast=()=>{},t.add(We);let Ge=`3d`;function Ke(){let e=$e===`corner`,t=Ge!==`3d`;s.visible=e&&!t,l.visible=!e&&!t,u.visible=t||e,We.visible=t}function qe(e){return Ge=e===`smooth`||e===`charm`?e:`3d`,Ge!==`3d`&&(We.material.map=Ue[Ge],We.material.needsUpdate=!0),Ke(),Ge}let Je=de.intensity,Ye=L.material.emissiveIntensity,V=new P;function Xe(e,t,i){let a=i?i.windowGlow:0,o=a>.55;Se.material.map=o?ge:he,we>0&&(we=Math.max(0,we-e));let s=we>0?Math.sin((1.3-we)/1.3*Math.PI):0,c=o?.012*Math.sin(t*1.2):.03*Math.sin(t*2.4);Se.scale.set(ve,ve*(1+c+.12*s),1),Se.position.y=be+.06*s,Ce.material.opacity=s,Ce.position.set(ye,1.72+.5*(1-we/1.3),xe),Ce.scale.setScalar(.22+.1*s),ze>0&&(ze=Math.max(0,ze-e),Re.position.y=Math.max(-.09,Re.position.y-e*.06),Re.material.opacity=ze>.3?1:ze/.3);for(let e of Pe){let n=e.userData,r=Math.sin(t*n.sp+n.ph)*n.ax,i=Math.sin(t*n.sp*.8+n.ph*1.7)*n.ay*.7,a=Math.cos(t*n.sp*.6+n.ph)*n.az,o=ze>0?Re.position.x:r,s=ze>0?Re.position.y:i,c=ze>0?Re.position.z:a,l=ze>0?.05:.1;e.position.x+=(o-e.position.x)*l,e.position.y+=(s-e.position.y)*l,e.position.z+=(c-e.position.z)*l,e.scale.x=(e.position.x>=n.prevx?1:-1)*n.sz,n.prevx=e.position.x}for(let e of Le){let n=(t*e.userData.sp+e.userData.ph)%1;e.position.set(e.userData.x+Math.sin(t*2+e.userData.ph*9)*.015,-.09+2*Fe*n,.02),e.material.opacity=.5*Math.sin(n*Math.PI)}Me.intensity=2.6*a,Ae.material.emissiveIntensity=.4+.9*a,de.intensity=Je*(.97+.03*Math.sin(t*7)*Math.sin(t*2.3)),L.material.emissiveIntensity=Ye*(.85+.15*Math.sin(t*3.1+1)),V.setRGB(1,.85,.62),Ve.children.forEach((e,n)=>{let r=e.userData,i=(t*r.sp+r.ph)%1;e.position.set(Math.cos(t*.5+r.ph*5)*r.r,-.15+i*.45,Math.sin(t*.4+r.ph*5)*r.r),e.material.opacity=(.1+.18*a)*Math.sin(i*Math.PI)}),ae.rotation.z=Math.sin(t*.8)*.05,ae.rotation.x=Math.sin(t*.6+1)*.04;let l=i?i.t%1:0;for(let e of d)e.rotation.z=-l*Math.PI*2;if(He.update(e),We.visible){let e=n.position.z-We.position.z,t=2*Math.tan(b.degToRad(n.fov)*.5)*e*1.18;We.scale.set(t*n.aspect,t,1);let r=.55+.45*(1-a);We.material.color.setRGB(r,r*.97,r*.92)}n.position.set(r.x+Math.sin(t*.5)*.04,r.y+Math.sin(t*.7)*.02,r.z),n.lookAt(0,1.12,-1)}function Ze(e){x.map=e,C.map=e,x.needsUpdate=!0,C.needsUpdate=!0}function Qe(e){te.map=e,te.needsUpdate=!0}let $e=e;function et(e){$e=e===`basement`?`basement`:`corner`;let t=$e===`corner`;return Ke(),z.intensity=t?9:3.2,pe.intensity=t?.55:.78,pe.color.set(t?`#6a5238`:`#7a5a34`),$e}return et($e),{scene:t,camera:n,update:Xe,setCityTexture:Ze,setVignetteTexture:Qe,setFitout:et,setSkin:qe,petCat:Te,feedFish:Be,vignette:He,interactables:[fe,R,Se,je],get tier(){return $e},get skin(){return Ge}}}function $t(){let e=new f;e.background=new P(`#7fb0dd`);let t=new d(-1.4,1.4,.9,-.9,0,10);t.position.set(0,0,5);let n=(e,t={})=>new ie({color:e,toneMapped:!1,...t}),r=(e,t,r,i,a,s,c)=>{let l=new o(new S(e,t),n(s,c));return l.position.set(r,i,a),l};e.add(r(3.2,.9,.5,-.95,1,`#2a4a30`)),e.add(r(3.2,.7,-.7,-1.05,2,`#1d3724`)),e.add(r(.06,.3,-.95,-.55,3,`#3a2a1a`));let i=new o(new me(.22,18),n(`#234a2a`));i.position.set(-.95,-.32,3),e.add(i),e.add(r(.04,.55,.9,-.55,3,`#20242a`));let a=new o(new me(.1,16),n(`#ffd98a`,{transparent:!0,opacity:0}));a.position.set(.9,-.26,3.1),e.add(a);let s=new o(new me(.16,24),n(`#fff4d8`));e.add(s);let c=[];for(let[t,r]of[[-1,.5],[-.6,.7],[.2,.6],[.7,.72],[1.05,.45],[-.2,.78],[.45,.4]]){let i=new o(new me(.015,8),n(`#ffffff`,{transparent:!0,opacity:0}));i.position.set(t,r,.5),c.push(i),e.add(i)}let l=new P(`#141d33`),u=new P(`#7fb6e0`),p=new P(`#d6824a`),m=new P(`#fff0cc`),h=new P(`#cdd8ef`),g=.34;function _(t){g=(g+t*.04)%1;let n=g*Math.PI*2,r=-Math.cos(n);s.position.set(Math.sin(n)*1.15,r*.66+.06,0);let i=b.smoothstep(r,-.18,.5),o=b.smoothstep(.32,0,Math.abs(r));e.background.copy(l).lerp(u,i).lerp(p,o*.45),s.material.color.copy(r>0?m:h),a.material.opacity=1-i;let d=(1-i)*.85;for(let e of c)e.material.opacity=d}return{scene:e,camera:t,update:_}}function en(e,{x:t,y:n,z:r,ry:i=0,face:a=`#efe2c8`,rim:s=`#2a1c10`}){let c=new B,l=new o(new me(.2,28),new v({color:s,roughness:.6})),u=new o(new me(.17,28),new v({color:a,roughness:.7}));u.position.z=.01;let d=new o(new S(.018,.14),new v({color:`#1a130c`,roughness:.5}));return d.geometry.translate(0,.05,0),d.position.z=.02,e.push(d),c.add(l,u,d),c.position.set(t,n,r),c.rotation.y=i,c}function tn(e){let t=document.createElement(`canvas`);t.width=t.height=128;let n=t.getContext(`2d`),r=`#e08a3c`,i=`#b96a26`,a=`#3a2410`;if(n.lineJoin=`round`,e){n.fillStyle=r,n.beginPath(),n.ellipse(64,78,44,26,0,0,7),n.fill(),n.fillStyle=i,n.beginPath(),n.ellipse(64,86,44,16,0,0,7),n.fill(),n.fillStyle=r,n.beginPath(),n.arc(36,70,20,0,7),n.fill(),n.fillStyle=r,nn(n,24,56,34,44,42,58),nn(n,40,54,50,44,54,60),n.strokeStyle=i,n.lineWidth=7,n.lineCap=`round`,n.beginPath(),n.moveTo(100,70),n.quadraticCurveTo(112,90,88,96),n.stroke(),n.strokeStyle=a,n.lineWidth=2.5,n.beginPath(),n.arc(30,70,5,.1,Math.PI-.1),n.stroke(),n.strokeStyle=i,n.lineWidth=3;for(let e of[60,74,88])n.beginPath(),n.moveTo(e,58),n.lineTo(e,70),n.stroke()}else{n.fillStyle=r,n.beginPath(),n.ellipse(64,86,30,34,0,0,7),n.fill(),n.fillStyle=`#f3c98a`,n.beginPath(),n.ellipse(64,92,14,22,0,0,7),n.fill(),n.strokeStyle=i,n.lineWidth=8,n.lineCap=`round`,n.beginPath(),n.moveTo(92,100),n.quadraticCurveTo(116,86,104,60),n.stroke(),n.fillStyle=r,n.beginPath(),n.arc(64,48,24,0,7),n.fill(),n.fillStyle=r,nn(n,44,34,50,18,60,34),nn(n,84,34,78,18,68,34),n.fillStyle=`#f0b0c0`,nn(n,47,30,50,22,56,32),nn(n,81,30,78,22,72,32),n.fillStyle=a,n.beginPath(),n.arc(55,47,3.4,0,7),n.arc(73,47,3.4,0,7),n.fill(),n.fillStyle=`#e06a7a`,nn(n,61,54,67,54,64,58),n.strokeStyle=a,n.lineWidth=1.6;for(let e of[-2,3])n.beginPath(),n.moveTo(50,55+e),n.lineTo(34,53+e),n.moveTo(78,55+e),n.lineTo(94,53+e),n.stroke();n.strokeStyle=i,n.lineWidth=3;for(let e of[78,90,102])n.beginPath(),n.moveTo(50,e),n.lineTo(78,e),n.stroke()}let o=new R(t);return o.colorSpace=D,o}function nn(e,t,n,r,i,a,o){e.beginPath(),e.moveTo(t,n),e.lineTo(r,i),e.lineTo(a,o),e.closePath(),e.fill()}function rn(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`);t.fillStyle=`#ff5a8a`,t.beginPath(),t.moveTo(32,52),t.bezierCurveTo(6,32,14,10,32,24),t.bezierCurveTo(50,10,58,32,32,52),t.fill();let n=new R(e);return n.colorSpace=D,n}function an(e){let t=document.createElement(`canvas`);t.width=t.height=64;let n=t.getContext(`2d`);n.fillStyle=e,n.beginPath(),n.ellipse(30,32,18,11,0,0,7),n.fill(),n.beginPath(),n.moveTo(46,32),n.lineTo(60,22),n.lineTo(60,42),n.closePath(),n.fill(),n.fillStyle=`rgba(255,255,255,0.35)`,n.beginPath(),n.ellipse(28,36,12,5,0,0,7),n.fill(),n.fillStyle=`#15212a`,n.beginPath(),n.arc(20,30,2.6,0,7),n.fill();let r=new R(t);return r.colorSpace=D,r}function on(){let e=document.createElement(`canvas`);e.width=e.height=32;let t=e.getContext(`2d`),n=t.createRadialGradient(16,16,0,16,16,16);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.6,`rgba(255,255,255,0.7)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.beginPath(),t.arc(16,16,16,0,7),t.fill();let r=new R(e);return r.colorSpace=D,r}function sn(e){let t=document.createElement(`canvas`);t.width=t.height=256;let n=t.getContext(`2d`),r=n.createLinearGradient(0,0,256,256);e<0?(r.addColorStop(0,`#6a3b1c`),r.addColorStop(1,`#caa15a`)):(r.addColorStop(0,`#3a4a6a`),r.addColorStop(1,`#a86a3a`)),n.fillStyle=r,n.fillRect(0,0,256,256),n.globalAlpha=.5;for(let e=0;e<5;e++)n.fillStyle=e%2?`#2a1c10`:`#e0c080`,n.fillRect(30+e*36,40+e%3*30,26,150);let i=new R(t);return i.colorSpace=D,i}function cn(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=(e,n,r)=>{let i=t.createRadialGradient(e,n,0,e,n,r);i.addColorStop(0,`rgba(255,255,255,0.95)`),i.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=i,t.beginPath(),t.arc(e,n,r,0,7),t.fill()};n(128*.42,128*.56,128*.26),n(128*.6,128*.5,128*.3),n(128*.5,128*.46,128*.22),n(128*.34,128*.54,128*.18),n(128*.7,128*.58,128*.18);let r=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5],i=t.getImageData(0,0,128,128),a=i.data;for(let e=0;e<128;e++)for(let t=0;t<128;t++){let n=(e*128+t)*4,i=a[n+3]/255,o=(r[e%4*4+t%4]+.5)/16-.5;a[n+3]=Math.max(0,Math.min(1,Math.floor(i*5+.5+o)/5))*255}t.putImageData(i,0,0);let o=new R(e);return o.colorSpace=D,o}function ln({extent:e=8,count:t=16}={}){let n=new B;n.raycast=()=>{};let r=cn(),i=e+6,a=(e,t)=>e+Math.random()*(t-e),o=[];for(let e=0;e<t;e++){let e=new k({map:r,transparent:!0,depthWrite:!1,opacity:0,fog:!0}),t=new O(e),s={sp:t,mat:e,wisp:Math.random(),x:a(-i,i),z:a(-i,i),hiY:a(4,6.8),loY:a(.6,2.2),w:a(3,5.6),h:a(1.7,3),speed:a(.25,.7),op:a(.6,1)};t.raycast=()=>{},o.push(s),n.add(t)}let s=new P,c=new P(`#ffffff`),l=new P(`#5b626e`);function u(e,t,n,r){let u=r?r.cloud:0,d=r?r.fog:0,f=Math.min(1,.4+.6*u+.5*d);s.copy(n.sky).lerp(c,.62),s.lerp(l,.6*u);for(let n=0;n<o.length;n++){let r=o[n],c=n/o.length<f;r.x+=r.speed*e*(.6+.8*u),r.x>i&&(r.x=-i,r.z=a(-i,i));let l=Math.min(un(r.x,-i,-i+3),1-un(r.x,i-3,i)),p=r.hiY*(1-d)+r.loY*d,m=1-.5*r.wisp,h=.72*Math.max(0,1-d-u)+1*u+.42*d,g=c?Math.max(0,h)*r.op*m*l:0;r.mat.opacity+=(g-r.mat.opacity)*Math.min(1,e*2.5),r.mat.color.copy(s);let _=r.w*(1+.6*d)*(1+.4*r.wisp),v=r.h*(1-.35*d);r.sp.scale.set(_,v,1),r.sp.position.set(r.x,p+Math.sin(t*.3+n)*.15,r.z)}}function d(e){r=e;for(let t of o)t.mat.map=e,t.mat.needsUpdate=!0}return{group:n,update:u,setTexture:d,get count(){return o.length}}}function un(e,t,n){let r=Math.max(0,Math.min(1,(e-t)/(n-t)));return r*r*(3-2*r)}var dn=`varying vec2 vUv;

void main() {
  
  
  
  vUv = uv;

  
  
  
  
  
  
  
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,fn=`precision highp float;

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
}`,pn=`precision highp float;

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
}`,mn=`precision highp float;

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
}`,hn=`precision highp float;

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
}`,gn=`const float CA_STRENGTH   = 0.0030;  
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
}`,_n=`const float DITHER = 0.55;   

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
}`,vn=`precision highp float;

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
}`,yn=`precision highp float;

varying vec2 vUv;
uniform sampler2D uToon;   
uniform sampler2D uPixel;  
uniform float     uBlend;  

void main() {
  vec3 t = texture2D(uToon, vUv).rgb;
  vec3 p = texture2D(uPixel, vUv).rgb;
  gl_FragColor = vec4(mix(t, p, uBlend), 1.0);
}`,bn=`precision highp float;

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
}`,xn=220,Sn=new URLSearchParams(window.location.search),Cn=Sn.get(`demo`)===`1`||Sn.has(`capture`);window.__demo=Cn;var wn={night:[`#0A0C16`,`#1C2236`,`#3A3A52`,`#5A5A78`,`#8A92B0`],dawn:[`#1A1008`,`#43281A`,`#7A4A30`,`#B07A4E`,`#E8A86A`],noon:[`#16100A`,`#3A2F1E`,`#6B563A`,`#937B54`,`#B89968`],dusk:[`#140A0A`,`#3E1E1A`,`#7A3828`,`#B85A36`,`#F0884A`]},Tn={night:[`#020604`,`#06180E`,`#10401E`,`#1E9040`,`#7FE0FF`],dawn:[`#060603`,`#1A2410`,`#3A6B22`,`#6CC040`,`#FFC060`],noon:[`#050805`,`#0E2912`,`#1E6B2F`,`#3CF06A`,`#FFB000`],dusk:[`#080402`,`#241408`,`#6B4A12`,`#E0A030`,`#FF7030`]},W=new ce({antialias:!0,preserveDrawingBuffer:!0});W.shadowMap.enabled=!0,W.shadowMap.type=1,W.setPixelRatio(Math.min(window.devicePixelRatio,2)),W.setSize(window.innerWidth,window.innerHeight),W.setClearColor(920327,1),document.body.appendChild(W.domElement);var G=W.getDrawingBufferSize(new z),K=new f;K.fog=new j(10465470,0);var En=new P(`#aeb6c0`),Dn=.062,On=new P(`#74508f`),kn=new P,q=Pe({aspect:window.innerWidth/window.innerHeight}),J=yt({t:.5}),An=256,jn={type:C,format:p,minFilter:y,magFilter:y,wrapS:ne,wrapT:ne,depthBuffer:!1,stencilBuffer:!1},Mn=[new L(An,An,jn),new L(An,An,jn),new L(An,An,jn)];for(let e of Mn)W.setRenderTarget(e),W.clear();W.setRenderTarget(null);var Nn=new f,Pn=new d(-1,1,1,-1,0,1),Fn=new g({vertexShader:r,fragmentShader:pn,uniforms:{uCurr:{value:null},uPrev:{value:null},uTexel:{value:new z(1/An,1/An)},uMouse:{value:new z(-1,-1)},uMouseStrength:{value:0},uC2:{value:.25},uDamping:{value:.992},uRainCount:{value:0},uRainDrops:{value:Array.from({length:8},()=>new I)},uWakeCount:{value:0},uWakeDrops:{value:Array.from({length:8},()=>new I)}}});Nn.add(new o(new S(2,2),Fn));var In=new L(G.x,G.y,{minFilter:u,magFilter:u,depthBuffer:!0,stencilBuffer:!1});function Ln(e){let t=document.createElement(`canvas`);t.width=t.height=1024;let n=t.getContext(`2d`);n.fillStyle=e?`#0c1418`:`#15110b`,n.fillRect(0,0,1024,1024),n.strokeStyle=e?`rgba(120,150,170,0.22)`:`rgba(184,153,104,0.30)`,n.lineWidth=2;for(let e=0;e<=1024;e+=64)n.beginPath(),n.moveTo(e,0),n.lineTo(e,1024),n.stroke(),n.beginPath(),n.moveTo(0,e),n.lineTo(1024,e),n.stroke();e||(n.fillStyle=`#B89968`,n.font=`bold 360px Georgia, serif`,n.textAlign=`center`,n.textBaseline=`middle`,n.fillText(`LGR`,512,470),n.font=`600 64px ui-monospace, monospace`,n.fillText(`WEB · STUDIO`,512,720));let r=new R(t);return r.colorSpace=D,r}var Rn=28,zn=new o(new S(Rn,Rn),new ie({map:Ln(Cn)}));zn.rotation.x=-Math.PI/2,zn.position.y=-.35,K.add(zn);var Bn=new o(new S(40,24),new g({depthWrite:!1,vertexShader:dn,fragmentShader:fn,uniforms:{uTime:{value:0},uInk:{value:J.horizon},uGold:{value:J.sky},uFogColor:{value:kn},uFogAmt:{value:0},uFogCharm:Ve}}));Bn.position.set(0,3,-8),K.add(Bn);var Vn=new g({vertexShader:mn,fragmentShader:hn,uniforms:{uHeight:{value:null},uScene:{value:In.texture},uTexel:{value:new z(1/An,1/An)},uResolution:{value:new z(G.x,G.y)},uDisplace:{value:.42},uNormalStrength:{value:22},uRefractStrength:{value:.06},uChromaScale:{value:1},uNormalMatrix:{value:new ae},uLightDir:{value:J.sunDir},uInk:{value:new P(`#2A2218`)},uGold:{value:new P(`#B89968`)},uVector:Fe,uVecWater:{value:new P(`#1fb8d8`)},uVecTint:{value:Ie}}}),Hn=new o(new S(Rn,Rn,An-1,An-1),Vn);Hn.rotation.x=-Math.PI/2,Hn.updateMatrixWorld(!0),Vn.uniforms.uNormalMatrix.value.getNormalMatrix(Hn.matrixWorld),K.add(Hn);var Un={value:0},Wn=new URLSearchParams(window.location.search),Gn=(Wn.get(`city`)?Number(Wn.get(`city`)):0)||Math.random()*1e9|0,Kn=Math.max(0,$e.indexOf(Wn.get(`profile`)||`manhattan`)),qn=Ht({windowGlow:Un}),Y=dt({seed:Gn,profileIndex:Kn,landmarkFactory:qn,windowGlow:Un});K.add(Y.group);var Jn=wt({plinthTop:.3,extent:Y.extent,profile:Y.state.profile});K.add(Jn.group);var Yn=At({extent:Y.extent,waterSize:Rn,plinthTop:.3});K.add(Yn.group),Fn.uniforms.uWakeDrops.value=Yn.wakeDrops;var X=Yt({extent:Y.extent});K.add(X.group),Fn.uniforms.uRainDrops.value=X.rainDrops;var Xn=ln({extent:Y.extent});K.add(Xn.group);var Zn=[0,.33,.66,1],Qn=0;window.__season=Zn[Qn],Y.group.remove(Y.key),K.add(Y.key),Y.key.castShadow=!0,Y.key.shadow.mapSize.set(2048,2048),Y.key.shadow.bias=-18e-5,Y.key.shadow.normalBias=.028,K.add(Y.key.target);function $n(){let e=Y.key.shadow.camera,t=Y.extent+4.5;e.left=-t,e.right=t,e.top=t,e.bottom=-t,e.near=1,e.far=er*2,e.updateProjectionMatrix()}var er=24;$n();var tr=!0;window.__shadows=tr;function nr(){Y.generate(Gn,Kn),Vn.uniforms.uVecWater.value.set(Y.waterColor),Jn.setProfile(Y.state.profile),$n(),Ni()}qn.whenReady.then(()=>{nr(),window.__cityReady=!0}),Vn.uniforms.uVecWater.value.set(Y.waterColor);var rr=new re(G.x,G.y),ir=new L(G.x,G.y,{minFilter:u,magFilter:u,depthBuffer:!0,stencilBuffer:!1,depthTexture:rr}),ar=new L(G.x,G.y,{minFilter:u,magFilter:u,depthBuffer:!1,stencilBuffer:!1}),or=new L(G.x,G.y,{minFilter:u,magFilter:u,depthBuffer:!1,stencilBuffer:!1}),sr=new L(G.x,G.y,{minFilter:u,magFilter:u,depthBuffer:!1,stencilBuffer:!1}),cr=new f,lr=new d(-1,1,1,-1,0,1),ur=new o(new S(2,2));cr.add(ur);var dr=new g({vertexShader:r,fragmentShader:gn,uniforms:{uScene:{value:ir.texture},uTime:{value:0},uResolution:{value:new z(G.x,G.y)},uGrain:{value:1},uChroma:{value:1},uExposure:{value:1}}}),fr=5,pr=e=>{let t=e.map(e=>new P(e));for(;t.length<8;)t.push(new P(0,0,0));return t},mr=[`night`,`dawn`,`noon`,`dusk`],hr={inkgold:mr.map(e=>pr(wn[e])),terminal:mr.map(e=>pr(Tn[e]))},gr=new g({vertexShader:r,fragmentShader:_n,uniforms:{uScene:{value:ar.texture},uResolution:{value:new z(G.x,G.y)},uPixelSize:{value:xn},uPalette:{value:hr.inkgold[2]},uPaletteB:{value:hr.inkgold[2]},uPaletteBlend:{value:0},uPaletteSize:{value:fr}}});function _r(e){let t=ni?hr.terminal:hr.inkgold,n=e%1*4,r=Math.floor(n)%4;gr.uniforms.uPalette.value=t[r],gr.uniforms.uPaletteB.value=t[(r+1)%4],gr.uniforms.uPaletteBlend.value=n-Math.floor(n)}var vr=new g({vertexShader:r,fragmentShader:t,uniforms:{uScene:{value:ar.texture},uResolution:{value:new z(G.x,G.y)},uGridWidth:{value:160},uDither:{value:.55},uPalette:{value:e(i[`8-bit`].palette)},uPaletteSize:{value:1},uUsePalette:{value:1}}}),yr={};for(let t of n)yr[t]=i[t].palette?e(i[t].palette):null;var br=[`native`,...n],xr=`native`;window.__era=xr;function Sr(e){let t=i[e];t&&(vr.uniforms.uGridWidth.value=t.gridWidth,vr.uniforms.uDither.value=t.dither,vr.uniforms.uUsePalette.value=+!!t.palette,t.palette&&(vr.uniforms.uPalette.value=yr[e],vr.uniforms.uPaletteSize.value=t.palette.length))}function Cr(){xr!==`native`&&Sr(xr)}var wr=()=>xr===`native`?gr:vr,Tr=new g({vertexShader:r,fragmentShader:vn,uniforms:{uScene:{value:ar.texture},uDepth:{value:rr},uResolution:{value:new z(G.x,G.y)},uBands:{value:4},uToonGain:{value:1.7},uToonGamma:{value:.6},uToonFloor:{value:J.toonFloor},uOutline:{value:J.outline},uNear:{value:.1},uFar:{value:100},uIsPerspective:{value:1}}}),Er=new g({vertexShader:r,fragmentShader:yn,uniforms:{uToon:{value:or.texture},uPixel:{value:sr.texture},uBlend:{value:0}}});function Dr(e,t){ur.material=e,W.setRenderTarget(t),W.render(cr,lr)}var Z=Qt({tier:`corner`});Z.camera.aspect=window.innerWidth/window.innerHeight,Z.camera.updateProjectionMatrix();var Or=new _(55,1.4,.1,100);Or.position.set(2.2,3.4,11.5),Or.lookAt(0,2,0);var kr=new L(1024,720,{minFilter:u,magFilter:u,depthBuffer:!0,stencilBuffer:!1});Z.setCityTexture(kr.texture);var Ar=new L(512,320,{minFilter:u,magFilter:u,depthBuffer:!0,stencilBuffer:!1});Z.setVignetteTexture(Ar.texture);var jr=new L(G.x,G.y,{minFilter:u,magFilter:u,depthBuffer:!1,stencilBuffer:!1}),Mr=new L(G.x,G.y,{minFilter:u,magFilter:u,depthBuffer:!1,stencilBuffer:!1}),Nr=new g({vertexShader:r,fragmentShader:bn,uniforms:{uCity:{value:jr.texture},uOffice:{value:Mr.texture},uT:{value:0},uFocus:{value:new z(.5,.5)}}}),Q=`city`,Pr=0,Fr=4.6;window.__scene=Q;var Ir=null;function Lr(e){Q===`city`&&(Nr.uniforms.uFocus.value.copy(e||new z(.5,.5)),Q=`diving-in`,window.__scene=Q)}function Rr(){Q!==`office`&&Q!==`diving-in`||(Q=`diving-out`,window.__scene=Q)}var zr=!1,Br=(()=>{if(typeof document>`u`)return{showLap(){},toast(){},flash(){}};let e=document.createElement(`style`);e.textContent=`
  .lap { position: fixed; inset: 0; z-index: 5; display:flex; align-items:center; justify-content:center;
    background: rgba(6,8,12,0.55); opacity:0; pointer-events:none; transition: opacity .25s; }
  .lap.on { opacity:1; pointer-events:auto; }
  .lap-win { width:min(560px,90vw); border-radius:14px; overflow:hidden; background:#0e1016;
    border:1px solid #2a2f3a; box-shadow:0 20px 60px rgba(0,0,0,.6); font:13px/1.5 ui-monospace,monospace; color:#cdd3dc; }
  .lap-bar { display:flex; align-items:center; justify-content:space-between; padding:10px 14px; background:#161a22; border-bottom:1px solid #2a2f3a; }
  .lap-bar b { letter-spacing:.08em; color:#7fd0ff; }
  .lap-x { cursor:pointer; border:0; background:#222833; color:#cdd3dc; min-width:34px;height:34px;border-radius:8px; font:inherit; }
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
    </div></div>`;let n=document.createElement(`div`);n.className=`otoast`;let r=document.createElement(`div`);r.className=`oflash`,document.body.append(t,n,r),t.querySelector(`.lap-x`).addEventListener(`click`,()=>Hr()),t.addEventListener(`click`,e=>{e.target===t&&Hr()});let i=0;return{showLap(e){t.classList.toggle(`on`,e)},toast(e){n.textContent=e,n.classList.add(`on`),clearTimeout(i),i=setTimeout(()=>n.classList.remove(`on`),1400)},flash(){r.style.transition=`none`,r.style.opacity=`0.85`,requestAnimationFrame(()=>{r.style.transition=`opacity .55s`,r.style.opacity=`0`})}}})();function Vr(){zr=!0,Br.showLap(!0)}function Hr(){zr=!1,Br.showLap(!1)}function Ur(){Kn=(Kn+1)%Qe.length,Br.flash(),nr(),Br.toast(`✈  `+Y.state.profile.name),window.__profile=Y.state.profile.key}function Wr(e){let t=Z.setFitout(e);return Br.toast(t===`basement`?`🏚  Basement office`:`🏙  Corner office`),window.__tier=t,t}function Gr(){return Wr(Z.tier===`corner`?`basement`:`corner`)}window.__tier=Z.tier;var Kr=[`3d`,`smooth`,`charm`],qr={"3d":`🧊  Stylized 3D office`,smooth:`🖼  Smooth diffusion skin`,charm:`🕹  Charm diffusion skin`};function Jr(e){let t=Z.setSkin(e);return window.__officeSkin=t,Q!==`city`&&Br.toast(qr[t]),t}function Yr(){return Jr(Kr[(Kr.indexOf(Z.skin)+1)%Kr.length])}window.__officeSkin=Z.skin;function Xr(e,t){Hn.visible=!1,W.setRenderTarget(In),W.render(K,e),Hn.visible=!0,W.setRenderTarget(t),W.render(K,e)}function Zr(e,t){if(Hn.visible=!1,W.setRenderTarget(In),W.render(K,q.camera),Hn.visible=!0,$===1||ri&&$!==7&&$!==8)W.setRenderTarget(t),W.render(K,q.camera);else if(W.setRenderTarget(ir),W.render(K,q.camera),$===2)dr.uniforms.uGrain.value=1,dr.uniforms.uChroma.value=1,Dr(dr,t);else{dr.uniforms.uGrain.value=0,dr.uniforms.uChroma.value=0,Dr(dr,ar);let n=q.camera;Tr.uniforms.uNear.value=n.near,Tr.uniforms.uFar.value=n.far,Tr.uniforms.uIsPerspective.value=+!!n.isPerspectiveCamera;let r=e.era?(Sr(e.era),vr):wr();e.kind===`pixel`?(Dr(r,t),window.__style=`pixel`):e.kind===`toon`?(Dr(Tr,t),window.__style=`toon`):(Dr(Tr,or),Dr(r,sr),Er.uniforms.uBlend.value=e.blend,Dr(Er,t),window.__style=`blend`)}}var Qr=.3,$r=.46,ei=.62,ti=.8,$=3,ni=!1,ri=!1;window.__mode=$,window.__camMode=q.mode,window.__vector=ri,window.addEventListener(`keydown`,e=>{(e.key===`1`||e.key===`2`||e.key===`3`)&&($=Number(e.key),window.__mode=$),(e.key===`7`||e.key===`8`)&&($=Number(e.key),window.__mode=$),e.key===`4`&&(q.setMode(xe.PERSPECTIVE),window.__camMode=q.mode),e.key===`5`&&(q.setMode(xe.ISOMETRIC),window.__camMode=q.mode),e.key===`6`&&(q.setMode(xe.DIMETRIC),window.__camMode=q.mode),e.key===`ArrowLeft`&&(q.pan(-1,0),e.preventDefault()),e.key===`ArrowRight`&&(q.pan(1,0),e.preventDefault()),e.key===`ArrowUp`&&(q.pan(0,1),e.preventDefault()),e.key===`ArrowDown`&&(q.pan(0,-1),e.preventDefault()),e.key===`0`&&(ri=!ri,Fe.value=+!!ri,window.__vector=ri),(e.key===`w`||e.key===`W`)&&(X.cycle(),window.__weather=X.kind),(e.key===`k`||e.key===`K`)&&(Qn=(Qn+1)%Zn.length,window.__season=Zn[Qn]),(e.key===`g`||e.key===`G`)&&(Gn=Math.random()*1e9|0,nr()),(e.key===`c`||e.key===`C`)&&(Kn=(Kn+1)%Qe.length,nr()),(e.key===`h`||e.key===`H`)&&(tr=!tr,window.__shadows=tr),(e.key===`p`||e.key===`P`)&&(ni=!ni),(e.key===`b`||e.key===`B`)&&(xr=br[(br.indexOf(xr)+1)%br.length],window.__era=xr,Cr()),(e.key===`t`||e.key===`T`)&&J.cyclePreset(),e.key===`[`&&J.nudge(-.5),e.key===`]`&&J.nudge(.5),e.key===`9`&&(J.toggleAuto(),window.__auto=J.auto),e.key===`Escape`&&(zr?Hr():Rr()),(e.key===`o`||e.key===`O`)&&(Q===`city`?Lr():Rr()),(e.key===`f`||e.key===`F`)&&Q!==`city`&&Gr(),(e.key===`j`||e.key===`J`)&&Yr(),(e.key===`m`||e.key===`M`)&&Ir&&Ir.toggle()});var ii=window.matchMedia(`(prefers-reduced-motion: reduce)`);J.setReducedMotion(ii.matches),ii.addEventListener(`change`,e=>J.setReducedMotion(e.matches));var ai=new T,oi=new z,si=!1,ci=!1,li=0,ui=0,di=.005,fi=(e,t)=>{oi.x=e/window.innerWidth*2-1,oi.y=-(t/window.innerHeight)*2+1},pi=0,mi=0,hi=0;function gi(){return ai.setFromCamera(oi,q.camera),ai.intersectObject(Y.group,!0)[0]?new z(oi.x*.5+.5,oi.y*.5+.5):null}function _i(){ai.setFromCamera(oi,Z.camera);let e=ai.intersectObjects(Z.interactables,!0)[0];if(!e)return null;let t=e.object;for(;t&&!t.userData.role;)t=t.parent;return t?t.userData.role:null}W.domElement.addEventListener(`contextmenu`,e=>e.preventDefault()),W.domElement.addEventListener(`mousedown`,e=>{e.button===0&&(si=Q===`city`,fi(e.clientX,e.clientY),pi=e.clientX,mi=e.clientY,hi=performance.now()),e.button===2&&(ci=!0,li=e.clientX,ui=e.clientY)}),window.addEventListener(`mousemove`,e=>{si&&fi(e.clientX,e.clientY),ci?(q.orbit(-(e.clientX-li)*di,-(e.clientY-ui)*di),li=e.clientX,ui=e.clientY):Q===`city`&&!si?(fi(e.clientX,e.clientY),W.domElement.style.cursor=gi()?`pointer`:`default`):Q===`office`&&(fi(e.clientX,e.clientY),W.domElement.style.cursor=_i()?`pointer`:`default`)}),window.addEventListener(`mouseup`,e=>{let t=Math.hypot(e.clientX-pi,e.clientY-mi)<6&&performance.now()-hi<350;if(si&&Q===`city`&&t){fi(e.clientX,e.clientY);let t=gi();t&&Lr(t)}else if(Q===`office`&&t&&!zr){fi(e.clientX,e.clientY);let t=_i();t===`laptop`?Vr():t===`phone`?Ur():t===`cat`?Z.petCat():t===`tank`&&Z.feedFish()}si=!1,ci=!1}),W.domElement.addEventListener(`wheel`,e=>{e.preventDefault(),q.zoomBy(Math.exp(e.deltaY*.0015))},{passive:!1});var vi=0,yi=(e,t)=>[(e.clientX+t.clientX)/2,(e.clientY+t.clientY)/2],bi=(e,t)=>Math.hypot(e.clientX-t.clientX,e.clientY-t.clientY),xi=!1;W.domElement.addEventListener(`touchstart`,e=>{e.touches.length===1&&(si=Q===`city`,fi(e.touches[0].clientX,e.touches[0].clientY),pi=e.touches[0].clientX,mi=e.touches[0].clientY,hi=performance.now(),xi=!1),e.touches.length===2&&(si=!1,ci=!0,[li,ui]=yi(e.touches[0],e.touches[1]),vi=bi(e.touches[0],e.touches[1]))},{passive:!1}),W.domElement.addEventListener(`touchmove`,e=>{if(e.preventDefault(),e.touches.length===1)fi(e.touches[0].clientX,e.touches[0].clientY),Math.hypot(e.touches[0].clientX-pi,e.touches[0].clientY-mi)>8&&(xi=!0);else if(e.touches.length===2){let[t,n]=yi(e.touches[0],e.touches[1]);q.orbit(-(t-li)*di,-(n-ui)*di),li=t,ui=n;let r=bi(e.touches[0],e.touches[1]);vi>0&&q.zoomBy(vi/r),vi=r}},{passive:!1}),window.addEventListener(`touchend`,e=>{if(!xi&&performance.now()-hi<350&&(!e.touches||e.touches.length===0)){if(Q===`city`){let e=gi();e&&Lr(e)}else if(Q===`office`&&!zr){let e=_i();e===`laptop`?Vr():e===`phone`?Ur():e===`cat`?Z.petCat():e===`tank`&&Z.feedFish()}}si=!1,ci=!1,vi=0,e.touches&&e.touches.length===1&&(si=!0)});var Si=new N;Si.connect(document);var Ci=0,wi=performance.now();function Ti(){if($===1||$===2)return{kind:`none`};if($===7)return{kind:`pixel`};if($===8)return{kind:`toon`};let e=q.styleT;return window.__styleT=e,e<=Qr?{kind:`toon`}:e>=$r?{kind:`pixel`,era:e<ei?`16-bit`:e<ti?`8-bit`:`gb`}:{kind:`blend`,blend:b.smoothstep(e,Qr,$r),era:`16-bit`}}var Ei={"16-bit":`16-bit`,"8-bit":`8-bit`,gb:`Game Boy`,modern:`Modern`,native:`Pixel`,"1-bit":`1-bit`};function Di(e){return $===1||$===2?``:ri&&$!==7&&$!==8?`Vector`:e.kind===`toon`?`Toon`:e.kind===`pixel`?Ei[e.era||xr]||`Pixel`:e.kind===`blend`?`Toon → `+(Ei[e.era]||`Pixel`):``}var Oi=Cn?null:document.querySelector(`.hint`);if(Cn){let e=document.querySelector(`.hint`);e&&(e.style.display=`none`)}var ki=Oi?Oi.textContent:``,Ai=``,ji=``;function Mi(e){!Oi||e===Ai||(Ai=e,Oi.textContent=`${ki} · ${ji} · ${e}`)}function Ni(){ji=`seed ${Y.state.seed} · ${Y.state.profile.name}`,window.__profile=Y.state.profile.key,Ai=``}Ni();function Pi(){Si.update();let e=Math.min(Si.getDelta(),.1);q.update(e),Bn.material.uniforms.uTime.value=Si.getElapsed(),dr.uniforms.uTime.value=Si.getElapsed(),J.update(e),Y.key.position.copy(J.sunDir).multiplyScalar(er),Y.key.color.copy(J.sunColor),Y.key.intensity=J.sunIntensity,Y.fill.color.copy(J.hemiSky),Y.fill.groundColor.copy(J.hemiGround),Un.value=J.windowGlow;let t=X.overcast;Y.key.intensity*=1-.5*t,Y.key.color.lerp(En,.45*t),Y.fill.intensity=1+.7*t;let n=b.smoothstep(J.sunDir.y,.06,.34),r=b.lerp(.28,1,1-J.windowGlow),i=tr?n*r:0;Y.key.shadow.intensity=.72*i,Le.value=.52*i;let a=1-J.windowGlow;Ie.setRGB(b.lerp(.46,1,a),b.lerp(.52,1,a),b.lerp(.74,1,a)),dr.uniforms.uExposure.value=J.exposure,Tr.uniforms.uToonGain.value=J.toonGain,W.setClearColor(J.horizon,1),_r(J.t),Mi(J.clock),window.__t=J.t,Jn.update(e,Si.getElapsed(),J),Y.update(Si.getElapsed()),Yn.update(e,Si.getElapsed(),J),Fn.uniforms.uWakeCount.value=Yn.wakeCount,X.update(e,Si.getElapsed()),Fn.uniforms.uRainCount.value=X.rainDropCount;let o=X.fog*(1-a);K.fog.density=X.fog*Dn,kn.copy(J.horizon).lerp(On,.85*o),K.fog.color.copy(kn),W.setClearColor(kn,1),Ve.value=X.fog,Bn.material.uniforms.uFogAmt.value=.7*X.fog,Re.value=X.snow,ze.value=X.cloud*.55,Be.x+=e*.018,Be.y+=e*.009,He.value+=(Zn[Qn]-He.value)*Math.min(1,e*1.5),Xn.update(e,Si.getElapsed(),J,X);let s=Ti(),c=s.kind===`toon`?1:s.kind===`blend`?1-s.blend:0;Vn.uniforms.uChromaScale.value=b.lerp(1,.5,c),Ir&&Ir.setStyleHint(Q===`city`?Di(s):``),Ci++;let l=performance.now();l-wi>=1e3&&(window.__fps=Ci,Ci=0,wi=l);let u=0;if(si&&Q===`city`){ai.setFromCamera(oi,q.camera);let e=ai.intersectObject(Hn)[0];e&&e.uv&&(Fn.uniforms.uMouse.value.copy(e.uv),u=.06)}Fn.uniforms.uMouseStrength.value=u;let[d,f,p]=Mn;Fn.uniforms.uPrev.value=d.texture,Fn.uniforms.uCurr.value=f.texture,W.setRenderTarget(p),W.render(Nn,Pn),Mn=[f,p,d],Vn.uniforms.uHeight.value=Mn[1].texture,Pr+=(+(Q===`office`||Q===`diving-in`)-Pr)*Math.min(1,e*Fr),Q===`diving-in`&&Pr>.992&&(Pr=1,Q=`office`,window.__scene=Q),Q===`diving-out`&&Pr<.008&&(Pr=0,Q=`city`,window.__scene=Q),Q===`city`?Zr(s,null):(Z.update(e,Si.getElapsed(),J),Z.tier===`basement`?(W.setRenderTarget(Ar),W.render(Z.vignette.scene,Z.vignette.camera)):Xr(Or,kr),Q===`office`?(W.setRenderTarget(null),W.render(Z.scene,Z.camera)):(Zr(s,jr),W.setRenderTarget(Mr),W.render(Z.scene,Z.camera),Nr.uniforms.uT.value=Pr,Dr(Nr,null))),requestAnimationFrame(Pi)}var Fi={at:(e,t)=>{fi(e,t),si=!0},stop:()=>{si=!1}};function Ii(){let e=window.__style||($===1?`raw`:$===2?`filmic`:`auto`);return{lesson:23,clock:J.clock,style:(ri?`vec-`:``)+e,profile:Y.state.profile.key,weather:X.kind,scene:Q}}Wt({renderer:W,rig:q,sunRig:J,poke:Fi,getState:Ii,office:{pet:()=>Z.petCat(),feed:()=>Z.feedFish(),laptop:()=>Vr(),closeLaptop:()=>Hr(),travel:()=>Ur(),fitout:()=>Gr()}});var Li=e=>window.dispatchEvent(new KeyboardEvent(`keydown`,{key:e})),Ri={cam:e=>Li({iso:`5`,dimetric:`6`,persp:`4`}[e]),style:e=>{e===`auto`?(Li(`3`),ri&&Li(`0`)):e===`vector`?(ri||Li(`0`),($===7||$===8)&&Li(`2`)):e===`pixel`?Li(`7`):e===`toon`&&Li(`8`)},era:()=>Li(`b`),city:()=>Li(`C`),shuffle:()=>Li(`G`),weather:()=>Li(`W`),season:()=>Li(`K`),office:()=>Li(`o`),officeSkin:()=>Li(`j`),time:e=>J.goTo(e),auto:()=>Li(`9`)};Ir=qt({controls:Ri,state:()=>({cam:{4:`persp`,5:`iso`,6:`dimetric`}[q.mode],style:$===7?`pixel`:$===8?`toon`:ri?`vector`:`auto`,era:xr,auto:J.auto,t:J.t,weather:X.kind,season:Qn,office:Q!==`city`,officeSkin:Z.skin}),show:Sn.get(`ui`)!==`0`&&!Sn.has(`capture`),coarse:window.matchMedia&&window.matchMedia(`(pointer: coarse)`).matches});var zi=Sn.get(`cam`);zi&&[`iso`,`dimetric`,`persp`].includes(zi)&&Ri.cam(zi);var Bi=Sn.get(`style`);[`vector`,`pixel`,`toon`].includes(Bi)&&Ri.style(Bi);var Vi=Sn.get(`t`);Vi!==null&&Vi!==``&&!Number.isNaN(parseFloat(Vi))&&J.goTo(parseFloat(Vi));var Hi=Sn.get(`time`);Hi&&J.goTo({dawn:.25,noon:.5,dusk:.75,night:0}[Hi]??.5);var Ui=Sn.get(`weather`);[`clear`,`rain`,`snow`,`fog`].includes(Ui)&&(X.setKind(Ui),window.__weather=X.kind);var Wi=Sn.get(`officeskin`);[`3d`,`smooth`,`charm`].includes(Wi)&&Jr(Wi);var Gi=Sn.get(`office`);(Gi===`1`||Gi===`corner`||Gi===`basement`)&&(Gi===`basement`&&Wr(`basement`),Q=`office`,Pr=1,window.__scene=Q),Pi(),window.addEventListener(`resize`,()=>{q.setViewport(window.innerWidth,window.innerHeight),W.setSize(window.innerWidth,window.innerHeight);let e=W.getDrawingBufferSize(new z);In.setSize(e.x,e.y),ir.setSize(e.x,e.y),ar.setSize(e.x,e.y),or.setSize(e.x,e.y),sr.setSize(e.x,e.y),jr.setSize(e.x,e.y),Mr.setSize(e.x,e.y),Z.camera.aspect=window.innerWidth/window.innerHeight,Z.camera.updateProjectionMatrix(),Vn.uniforms.uResolution.value.set(e.x,e.y),dr.uniforms.uResolution.value.set(e.x,e.y),gr.uniforms.uResolution.value.set(e.x,e.y),vr.uniforms.uResolution.value.set(e.x,e.y),Tr.uniforms.uResolution.value.set(e.x,e.y)});