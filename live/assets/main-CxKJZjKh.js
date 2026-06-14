import{i as e,o as t,r as n,s as r,t as i}from"./pixelkit-BWx556hK.js";import{$ as a,A as o,B as s,C as c,D as l,E as u,F as d,G as f,H as p,I as m,J as h,K as g,L as _,M as v,N as y,O as b,P as x,R as S,S as C,T as w,U as T,V as E,W as D,X as O,Y as ee,Z as k,_ as A,a as te,b as j,c as M,d as ne,et as N,f as P,g as re,i as F,j as ie,k as I,l as ae,m as oe,n as se,nt as L,o as ce,p as le,q as ue,r as de,s as fe,t as pe,tt as R,u as me,v as he,w as ge,x as z,z as _e}from"./three-DlGTpswt.js";var ve=Math.atan(1/Math.SQRT2),ye=Math.atan(.5),be=Math.PI/4,B={PERSPECTIVE:4,ISOMETRIC:5,DIMETRIC:6},xe=.12,Se=1.45,Ce=4,we=40,Te=1.5,Ee=16,De=6,Oe=22,ke=3.5,Ae=11,je=(e,t,n)=>e+(t-e)*(1-Math.exp(-8*n)),Me=(e,t)=>e+Math.PI*2*Math.round((t-e)/(Math.PI*2));function Ne({aspect:e,fov:t=48,near:n=.1,far:r=100,target:i=new R(0,.8,0),azimuth:a=be,elevation:o=.52,distance:s=12,zoom:c=5.5}={}){let l=new _(t,e,n,r),u=new d(-1,1,1,-1,n,r),f=B.PERSPECTIVE,p=e,m={azimuth:a,elevation:o,distance:s,zoom:c,target:i.clone()},h={azimuth:a,elevation:o,distance:s,zoom:c,target:i.clone()},g=!1,v=()=>f===B.PERSPECTIVE?l:u;function y(e){e!==f&&(f=e,f===B.ISOMETRIC||f===B.DIMETRIC?(m.elevation=f===B.ISOMETRIC?ve:ye,m.azimuth=Me(be,h.azimuth),g=!0):g=!1)}function x(e,t){m.azimuth+=e,g||(m.elevation=b.clamp(m.elevation+t,xe,Se))}function S(e){f===B.PERSPECTIVE?m.distance=b.clamp(m.distance*e,Ce,we):m.zoom=b.clamp(m.zoom*e,Te,Ee)}function C(e,t){let n=m.azimuth,r=f===B.PERSPECTIVE?m.distance*.04:m.zoom*.08,i=new R(Math.cos(n),0,-Math.sin(n)),a=new R(-Math.sin(n),0,-Math.cos(n));m.target.addScaledVector(i,e*r),m.target.addScaledVector(a,t*r)}function w(e,t){p=e/t,l.aspect=p,l.updateProjectionMatrix()}function T(e){h.azimuth=je(h.azimuth,m.azimuth,e),h.elevation=je(h.elevation,m.elevation,e),h.distance=je(h.distance,m.distance,e),h.zoom=je(h.zoom,m.zoom,e),h.target.x=je(h.target.x,m.target.x,e),h.target.y=je(h.target.y,m.target.y,e),h.target.z=je(h.target.z,m.target.z,e);let t=Math.cos(h.elevation),n=Math.sin(h.elevation),r=Math.cos(h.azimuth),i=Math.sin(h.azimuth),a=v();if(a.position.set(h.target.x+h.distance*t*i,h.target.y+h.distance*n,h.target.z+h.distance*t*r),a.lookAt(h.target),a.isOrthographicCamera){let e=h.zoom,t=e*p;a.left=-t,a.right=t,a.top=e,a.bottom=-e,a.updateProjectionMatrix()}}return{get camera(){return v()},get mode(){return f},get styleT(){return f===B.PERSPECTIVE?b.clamp((h.distance-De)/(Oe-De),0,1):b.clamp((h.zoom-ke)/(Ae-ke),0,1)},setMode:y,orbit:x,zoomBy:S,pan:C,setViewport:w,update:T}}var Pe={value:0},Fe=new P(`#ffffff`),Ie={value:0},Le={value:0},Re={value:0},ze=new N,Be={value:0},Ve={value:0},He=`
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
`;function Ue(e){e.uniforms.uVector=Pe,e.uniforms.uVecTint={value:Fe},e.uniforms.uVecShadow=Ie,e.uniforms.uSnow=Le,e.uniforms.uCloud=Re,e.uniforms.uCloudOff={value:ze},e.uniforms.uFogCharm=Be}function We(e){return e.replace(`#include <fog_fragment>`,`
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
  `)}function Ge(e){return e.replace(`#include <common>`,`#include <common>
varying vec3 vVecN;
varying vec3 vVecP;
varying vec2 vWorldXZ;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
  vVecN = normal;
  vVecP = position;
  vWorldXZ = (modelMatrix * vec4(position, 1.0)).xz;`)}function Ke(e){return e.replace(`#include <shadowmap_pars_fragment>`,`#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>`)}var qe=`col *= mix(1.0, getShadowMask(), uVecShadow);`;function Je(e,{color:t,id:n,windowGlow:r,winColors:i=[`#ffb852`,`#8cd9ff`],litFrac:a=.55}={}){let o=[0,1,2].map(e=>new P(i[e]??i[i.length-1]));return e.customProgramCacheKey=()=>`lgr-vec-tower`,e.onBeforeCompile=e=>{Ue(e),e.uniforms.uWindowGlow=r,e.uniforms.uWinId={value:n},e.uniforms.uVecColor={value:new P(t)},e.uniforms.uWinA={value:o[0]},e.uniforms.uWinB={value:o[1]},e.uniforms.uWinC={value:o[2]},e.uniforms.uWinLit={value:a},e.vertexShader=Ge(e.vertexShader),e.fragmentShader=We(Ke(e.fragmentShader.replace(`#include <common>`,`#include <common>
        uniform float uWindowGlow;
        uniform float uWinId;
        uniform vec3  uVecColor;
        uniform vec3  uWinA; uniform vec3 uWinB; uniform vec3 uWinC;
        uniform float uWinLit;
        ${He}
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
          ${qe}                                  // the sun's shadow darkens the body
          vec3 wcol; vec2 w = winTerms(wcol);
          vec3 glass = vec3(0.17, 0.23, 0.34);          // dark glass-blue panes (day)
          col = mix(col, glass, w.x * 0.85);
          col += w.x * w.y * wcol * uWindowGlow * 1.5;  // …windows EMIT (unshadowed) at night
          gl_FragColor = vec4(col, diffuseColor.a);
        }`)))},e}function V(e,{color:t=null,glow:n=null,glowDay:r=0,glowNight:i=1,windowGlow:a=null,season:o=!1}={}){let s=t===null,c=n!==null&&a!==null;return e.customProgramCacheKey=()=>`lgr-vec|`+(s?`d`:`c`)+(c?`g`:``)+(o?`s`:``),e.onBeforeCompile=e=>{Ue(e),s||(e.uniforms.uVecColor={value:new P(t)}),c&&(e.uniforms.uGlow={value:new P(n)},e.uniforms.uGlowDay={value:r},e.uniforms.uGlowNight={value:i},e.uniforms.uWindowGlow=a),o&&(e.uniforms.uSeason=Ve),e.vertexShader=Ge(e.vertexShader);let l=s?`diffuseColor.rgb`:`uVecColor`,u=o?`seasonShift(${l})`:l,d=(s?``:`uniform vec3 uVecColor;
`)+(c?`uniform vec3 uGlow; uniform float uGlowDay; uniform float uGlowNight; uniform float uWindowGlow;
`:``)+(o?`uniform float uSeason;
vec3 seasonShift(vec3 c){
  c = mix(c, vec3(0.86, 0.46, 0.13), smoothstep(0.40, 0.70, uSeason));   // → autumn orange
  c = mix(c, vec3(0.46, 0.33, 0.20), smoothstep(0.75, 1.00, uSeason));   // → bare brown
  return c;
}
`:``),f=c?`uGlow * mix(uGlowDay, uGlowNight, uWindowGlow)`:`vec3(0.0)`,p=We(Ke(e.fragmentShader.replace(`#include <common>`,`#include <common>
`+d+He).replace(`#include <opaque_fragment>`,`#include <opaque_fragment>
        if (uVector > 0.5) {
          vec3 col = vecShade(${u});
          ${qe}                            // the sun's shadow darkens the flat tier…
          gl_FragColor = vec4(col + ${f}, diffuseColor.a);  // …but the night glow stays lit
        }`)));c&&(p=p.replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>\n  totalEmissiveRadiance += ${f};`)),e.fragmentShader=p},e}function Ye(e){let t=e>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Xe(e){let t=Ye(e);return{next:t,range:(e,n)=>e+(n-e)*t(),int:(e,n)=>e+Math.floor(t()*(n-e+1)),pick:e=>e[Math.floor(t()*e.length)],chance:e=>t()<e}}var Ze=[{key:`manhattan`,name:`Manhattan`,towers:[`#EDE3C8`,`#D9B98A`,`#B5562F`,`#A8C8E8`,`#2E3F5C`],ground:`#7CC455`,street:`#9AA0A6`,sidewalk:`#C8CCD0`,park:`#5DB347`,water:`#29A8D8`,shopfronts:[`#C04A3A`,`#3A7AC0`,`#C09A2A`],glass:`#7FA8CC`,winColors:[`#ffd27a`,`#9ad6ff`],hMax:4.6,sigma:.36,roofRate:.35,pSplit:.6,nightLit:.55,roofTint:null,coast:{base:.55,out:1,in:.6,jag:1.05},landmarks:[`empireState`,`chrysler`,`liberty`]},{key:`paris`,name:`Paris`,towers:[`#E8DCC0`,`#F2EAD6`,`#E0D2B4`],ground:`#8CC46A`,street:`#A8A29A`,sidewalk:`#D4CEC2`,park:`#6DB35A`,water:`#3FA8C8`,shopfronts:[`#C04A3A`,`#3A6B5A`,`#7A5AC0`],glass:`#5A6B7A`,winColors:[`#ffdca0`,`#ffcaa0`],hMax:1.5,sigma:.9,roofRate:.15,pSplit:.75,nightLit:.45,roofTint:`#6A7886`,coast:{base:1.05,out:.55,in:.3,jag:.5},landmarks:[`eiffel`,`arcDeTriomphe`,`sacreCoeur`]},{key:`neoTokyo`,name:`Neo-Tokyo`,towers:[`#2A3038`,`#3A4250`,`#252B36`,`#4A4456`],ground:`#3A4A42`,street:`#5A6068`,sidewalk:`#7A8088`,park:`#2E5E46`,water:`#0E6878`,shopfronts:[`#E8483A`,`#5AE8E0`,`#E85AA0`],glass:`#5AE8E0`,winColors:[`#5AE8E0`,`#E85AA0`,`#E8E06A`],hMax:5.2,sigma:.42,roofRate:.6,pSplit:.6,nightLit:.7,roofTint:null,coast:{base:.7,out:1.05,in:.62,jag:1.7},landmarks:[`tokyoTower`,`pagoda`,`neonBillboard`]}],Qe=Ze.map(e=>e.key),$e=.3,et=1.9,tt=.55,nt=2.45,rt=.12,it=.6,at=6,ot={BASE:.7,OUT:.95,IN:.55,JAG:1,SAMPLES_PER_EDGE:28,HARBOR_DEPTH:.55,HARBOR_WIDTH:.26},st={PLINTH_TOP:$e,BLOCK:et,STREET:tt,PITCH:nt,SIDEWALK:rt,SHORE:it,N:at,COAST:ot};function ct(e,t,n){let r=n?.base??ot.BASE,i=n?.out??ot.OUT,a=n?.in??ot.IN,o=n?.jag??ot.JAG,s=t+r,c=Xe((e^789079)>>>0),l=[2,3,5,8,11,13].map(e=>({k:e,amp:1/e*o**((e-2)/6),phase:c.range(0,Math.PI*2)})),u=l.reduce((e,t)=>e+t.amp,0),d=e=>{let t=0;for(let n of l)t+=n.amp*Math.sin(n.k*e*Math.PI*2+n.phase);return Math.max(-1,Math.min(1,t/(u*.6)))},f=[{fix:+s,nx:1,nz:0,sign:1},{fix:+s,nx:0,nz:1,sign:-1},{fix:-s,nx:-1,nz:0,sign:-1},{fix:-s,nx:0,nz:-1,sign:1}],p=t+.22,m=ot.SAMPLES_PER_EDGE,h=4*m,g=[],_=0;for(let e=0;e<4;e++){let t=f[e];for(let n=0;n<m;n++,_++){let o=n/m,c=_/h,l=(-s+2*s*o)*t.sign,u=d(c),f=u>=0?u*i:u*a;if(e===0){let e=Math.abs(o-.5);if(e<ot.HARBOR_WIDTH){let t=.5+.5*Math.cos(e/ot.HARBOR_WIDTH*Math.PI);f-=(r+ot.HARBOR_DEPTH)*t}}let v,y;t.nx===0?(y=t.fix+t.nz*f,v=l,y=t.nz>0?Math.max(y,p):Math.min(y,-p)):(v=t.fix+t.nx*f,y=l,v=t.nx>0?Math.max(v,p):Math.min(v,-p)),g.push(new N(v,y))}}return{points:g,B:s,maxR:s+i,harborX:p}}function lt(e){(Array.isArray(e)?e:[e]).forEach(e=>e&&e.dispose&&e.dispose())}function ut({seed:e=1,profileIndex:t=0,landmarkFactory:n=null,windowGlow:r}){let i=new z,a=new z,s=new z;a.raycast=()=>{},s.raycast=()=>{},i.add(a,s);let l=new A(16773594,3);l.position.set(.45,.6,-.65).multiplyScalar(10);let u=new c(7313331,2762272,1);i.add(l,u);let d=0,f=[],p={seed:e,profileIndex:t,profile:Ze[t],extent:0,meshCount:0};function m(e,t,n,r){let i=new o(new F(e,.04,t),V(new v({color:r,roughness:.95,flatShading:!0}),{color:r}));return i.position.y=n,i.userData.ground=!0,i}function g(e,t){for(let e of a.children)e.geometry&&e.geometry.dispose(),lt(e.material);a.clear();for(let e of s.children)e.traverse(e=>{e.isMesh&&lt(e.material)});s.clear(),f.length=0,d=0;let r=Xe(e),i=Ze[t],c=(at-1)/2*nt,l=7.075;p={seed:e,profileIndex:t,profile:i,extent:l+(i.coast?.base??ot.BASE),meshCount:0};let u=ct(e,l,i.coast);p.coast=u;let h=new ue;u.points.forEach((e,t)=>t?h.lineTo(e.x,e.y):h.moveTo(e.x,e.y)),h.closePath();let g=new o(new he(h,{depth:2,bevelEnabled:!1,steps:1}),V(new v({color:i.ground,roughness:.9,flatShading:!0,side:2}),{color:i.ground}));g.rotation.x=-Math.PI/2,g.position.y=$e-2,g.userData.ground=!0,a.add(g);let C=2*7.195;a.add(m(C,C,.32,i.street)),x(u.harborX,i);let w=[];for(let e=0;e<at;e++)for(let t=0;t<at;t++)w.push([e,t]);let T=new Set,E=Math.max(1,Math.round(w.length*.08));for(;T.size<E;)T.add(r.int(0,w.length-1));let D=r.range(-2.45*.6,nt*.6),O=r.range(-2.45*.6,nt*.6),ee=Math.hypot(c,c),k=[];if(w.forEach(([e,t],n)=>{let o=(e-(at-1)/2)*nt,s=(t-(at-1)/2)*nt;if(a.add(m(et,et,.32999999999999996,i.sidewalk).translateX(o).translateZ(s)),T.has(n)){a.add(m(et-rt*2,et-rt*2,.35,i.park).translateX(o).translateZ(s));let e=r.int(3,5);for(let t=0;t<e;t++)S(o+r.range(-.6,.6),s+r.range(-.6,.6),i,r);return}let c=et-rt*2,l=r.chance(i.pSplit)?2:1,u=r.chance(i.pSplit)?2:1,d=c/l,f=c/u;for(let e=0;e<l;e++)for(let t=0;t<u;t++){let n=o-c/2+d*(e+.5),a=s-c/2+f*(t+.5),l=Math.max(.6,d-.1),u=Math.max(.6,f-.1),p=Math.hypot(n-D,a-O)/ee,m=Math.exp(-(p*p)/(2*i.sigma*i.sigma)),h=Math.max(.5,.5+(i.hMax-.5)*m*r.range(.75,1.25));h>i.hMax*.5&&Math.min(l,u)>=.7&&k.push({lx:n,lz:a,fw:l,fd:u,h,r:p}),_(n,a,l,u,h,i,r)}}),n&&n.ready){k.sort((e,t)=>e.r-t.r);let e=[],t=i.landmarks;for(let r=0;r<t.length&&k.length;r++){let a=null;for(let t of k)if(e.every(e=>Math.hypot(e.lx-t.lx,e.lz-t.lz)>nt*.9)){a=t;break}a||=k[0],e.push(a),y(a.lx,a.lz);let o=i.hMax*n.heightFactor(t[r]),c=n.make(t[r],{x:a.lx,z:a.lz,w:a.fw,d:a.fd,h:o,plinthTop:$e});if(c){s.add(c);let e=new de().setFromObject(c);b(e.min.x-.15,e.max.x+.15,e.min.z-.15,e.max.z+.15)}}}a.traverse(e=>{e.isMesh&&(e.userData.ground?(e.castShadow=!1,e.receiveShadow=!0):e.material&&e.material.isMeshBasicMaterial?(e.castShadow=!1,e.receiveShadow=!1):(e.castShadow=!0,e.receiveShadow=!0))}),s.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),p.meshCount=a.children.length+s.children.length;let A=0;for(let e of a.children){let t=e.position;A=(Math.imul(A,16777619)^(Math.round(t.x*100)*2654435761^Math.round(t.y*100)*40503^Math.round(t.z*100)*2246822519))>>>0}for(let e of p.coast.points)A=(Math.imul(A,16777619)^(Math.round(e.x*100)*2654435761^Math.round(e.y*100)*40503))>>>0;p.sig=A,window.__city={seed:e,profile:i.key,meshes:p.meshCount,sig:A}}function _(e,t,n,i,s,c,l){let u=Je(new v({flatShading:!0,roughness:.7,metalness:.05}),{color:l.pick(c.towers),id:++d,windowGlow:r,winColors:c.winColors,litFrac:c.nightLit}),p=new o(new F(n,s,i),u);if(p.position.set(e,$e+s/2,t),p.userData.lot=[e,t],a.add(p),c.roofTint){let r=V(new v({color:c.roofTint,roughness:.85,flatShading:!0}),{color:c.roofTint}),l=new o(new F(n*1.02,.08,i*1.02),r);l.position.set(e,$e+s+.04,t),l.userData.lot=[e,t],a.add(l)}if(s<1.4){let r=l.pick(c.shopfronts),s=new o(new F(n*1.04,.18,i*1.04),V(new v({color:r,roughness:.8,flatShading:!0}),{color:r}));s.position.set(e,.39,t),s.userData.lot=[e,t],a.add(s)}if(s>c.hMax*.45&&l.chance(c.roofRate)){let r=l.chance(.5)?new o(new F(n*.4,.18,i*.4),V(new v({color:`#9a9a9a`,flatShading:!0}),{color:`#9a9a9a`})):new o(new oe(n*.18,n*.18,.22,10),V(new v({color:`#b9bec4`,flatShading:!0}),{color:`#b9bec4`}));if(r.position.set(e+l.range(-.1,.1),$e+s+.11,t+l.range(-.1,.1)),r.userData.lot=[e,t],a.add(r),l.chance(.25)){let n=new o(new h(.05,6,5),new ie({color:`#ff3b30`,transparent:!0,opacity:1}));n.position.set(e,$e+s+.26,t),n.userData.lot=[e,t],n.raycast=()=>{},a.add(n),f.push({mesh:n,phase:l.range(0,6.28)})}}}function y(e,t){for(let n=a.children.length-1;n>=0;n--){let r=a.children[n];r.userData.lot&&Math.abs(r.userData.lot[0]-e)<1e-4&&Math.abs(r.userData.lot[1]-t)<1e-4&&(r.geometry&&r.geometry.dispose(),lt(r.material),a.remove(r))}for(let e=f.length-1;e>=0;e--)f[e].mesh.parent||f.splice(e,1)}function b(e,t,n,r){for(let i=a.children.length-1;i>=0;i--){let o=a.children[i];o.userData.lot&&o.position.x>=e&&o.position.x<=t&&o.position.z>=n&&o.position.z<=r&&(o.geometry&&o.geometry.dispose(),lt(o.material),a.remove(o))}}function x(e,t){let n=V(new v({color:`#7a5634`,roughness:.95,flatShading:!0}),{color:`#7a5634`}),r=(e,t,r,i)=>{let s=new o(new F(e,.06,t),n);s.position.set(r,$e-.16,i),a.add(s)};r(.24,2,e+.02,0),r(1.3,.22,e+.7,-.72),r(1.3,.22,e+.7,.72)}function S(e,t,n,r){let i=new P(n.park),s=(n,s)=>{let c=i.clone().offsetHSL(0,0,r.range(-.06,.06)).getStyle(),l=new o(new h(n,7,6),V(new v({color:c,flatShading:!0}),{color:c,season:!0}));l.scale.y=.7,l.position.set(e,$e+s,t),l.userData.lot=null,a.add(l)},c=new o(new F(.05,.18,.05),V(new v({color:`#6b4a2a`,flatShading:!0}),{color:`#6b4a2a`}));c.position.set(e,.39,t),a.add(c),s(.22,.28),s(.16,.46)}function C(e){for(let t of f)t.mesh.material.opacity=.35+.65*(.5+.5*Math.sin(e*3+t.phase))}return g(e,t),{group:i,key:l,fill:u,update:C,generate:g,get state(){return p},get extent(){return p.extent},get waterColor(){return p.profile.water},profiles:Ze}}var dt=Math.PI*2,ft=.7,pt=90,mt=[{name:`night`,sun:`#4a6f9e`,intensity:.35,hemiSky:`#26344f`,hemiGround:`#0c1018`,horizon:`#1e2942`,sky:`#36486e`,exposure:.95,outline:`#101a30`,window:1,toonGain:2.6},{name:`dawn`,sun:`#ff9e54`,intensity:2.4,hemiSky:`#8a7686`,hemiGround:`#2a1f1a`,horizon:`#b8512c`,sky:`#ffb070`,exposure:1.05,outline:`#241826`,window:.3,toonGain:2},{name:`noon`,sun:`#fff4e0`,intensity:4.6,hemiSky:`#9cb8cc`,hemiGround:`#33302a`,horizon:`#5e7689`,sky:`#aacadd`,exposure:1.18,outline:`#0b0a08`,window:0,toonGain:1.7},{name:`dusk`,sun:`#ff6b35`,intensity:2,hemiSky:`#7a566a`,hemiGround:`#281a18`,horizon:`#b0432a`,sky:`#ff8a5a`,exposure:1.05,outline:`#1f1420`,window:.4,toonGain:2}],ht=e=>e-Math.floor(e),gt=(e,t,n)=>e+(t-e)*n,_t=(e,t,n)=>e+(t-e)*(1-Math.exp(-6*n));function vt({t:e=.5}={}){let t=e,n=e,r=!1,i=!1,a=mt.map(e=>({name:e.name,sun:new P(e.sun),hemiSky:new P(e.hemiSky),hemiGround:new P(e.hemiGround),horizon:new P(e.horizon),sky:new P(e.sky),outline:new P(e.outline),intensity:e.intensity,exposure:e.exposure,window:e.window,toonGain:e.toonGain})),o=new R(0,1,0),s=new P(`#fff4e0`),c=new P(`#6f97b3`),l=new P(`#2a2620`),u=new P(`#3a4a57`),d=new P(`#7da3bd`),f=new P(`#0b0a08`),p=new P(`#000000`),m=3,h=1,g=0,_=1.7,v=new R;function y(e){let t=ht(e)*4,n=Math.floor(t)%4,r=(n+1)%4,i=t-Math.floor(t),y=a[n],b=a[r];s.lerpColors(y.sun,b.sun,i),c.lerpColors(y.hemiSky,b.hemiSky,i),l.lerpColors(y.hemiGround,b.hemiGround,i),u.lerpColors(y.horizon,b.horizon,i),d.lerpColors(y.sky,b.sky,i),f.lerpColors(y.outline,b.outline,i),m=gt(y.intensity,b.intensity,i),h=gt(y.exposure,b.exposure,i),g=gt(y.window,b.window,i),_=gt(y.toonGain,b.toonGain,i),p.setRGB(.045*g,.075*g,.14*g);let x=ht(e)*dt-Math.PI/2,S=Math.cos(x),C=Math.sin(x);v.set(S,C*Math.cos(ft),C*Math.sin(ft)),v.y>=0?o.copy(v):o.copy(v).negate()}return y(t),{sunDir:o,sunColor:s,hemiSky:c,hemiGround:l,horizon:u,sky:d,outline:f,toonFloor:p,get sunIntensity(){return m},get exposure(){return h},get windowGlow(){return g},get toonGain(){return _},get t(){return ht(t)},get auto(){return r},get clock(){let e=Math.round(ht(t)*24*60)%1440;return`${String(Math.floor(e/60)).padStart(2,`0`)}:${String(e%60).padStart(2,`0`)}`},cyclePreset(){n=(Math.floor(t*4+1e-4)+1)/4},nudge(e){n+=e/24},goTo(e){n=e},toggleAuto(){r=!r},setReducedMotion(e){i=e},update(e){r&&!i&&(n+=e/pt),t=_t(t,n,e),y(t)}}}function yt(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.35,`rgba(255,255,255,0.55)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new fe(e);return r.colorSpace=D,r}function bt(e,t){let n=[];for(let r=0;r<16;r++){let i=r/16*Math.PI*2;n.push(new R(Math.cos(i)*e,t,Math.sin(i)*e))}return new ae(n,!0,`catmullrom`,.5)}function xt(e){let t=(t,n)=>Math.exp(-((e-t)*(e-t))/(2*n*n)),n=Math.max(t(.33,.05),t(.75,.06)),r=b.smoothstep(e,.24,.3)*(1-b.smoothstep(e,.8,.88));return b.clamp(.15+.55*r+.45*n,.12,1)}function St(){let{PITCH:e,N:t,PLINTH_TOP:n}=st,r=t+1,i=n+.04,a=n=>(n-t/2)*e,o=t/2,s=[],c=(e,t)=>t*r+e;for(let e=0;e<r;e++)for(let t=0;t<r;t++)s.push({x:a(t),z:a(e),i:t,j:e,edges:[]});let l=[],u=(t,n)=>{let r=(s[t].i===o||s[t].j===o)&&(s[n].i===o||s[n].j===o),i=l.length;l.push({a:t,b:n,len:e,main:r}),s[t].edges.push(i),s[n].edges.push(i)};for(let e=0;e<r;e++)for(let t=0;t<r;t++)t<r-1&&u(c(t,e),c(t+1,e)),e<r-1&&u(c(t,e),c(t,e+1));return{nodes:s,edges:l,y:i,mid:o}}function Ct({plinthTop:e=.3,extent:t=4,profile:n=null}={}){let r=new z,i=St(),{nodes:a,edges:o}=i,c=i.y,l=.34,u=0;{let e=st.PITCH-l*2;u=Math.max(1,Math.floor((e+.26)/.56))}let d=new ie({color:`#e8c84a`,fog:!0}),f=new ge(new F(.05,.012,.3),d,o.length*u);f.frustumCulled=!1,f.raycast=()=>{},f.receiveShadow=!1,f.castShadow=!1,r.add(f);{let e=new x,t=0;for(let n of o){let r=a[n.a],i=a[n.b],o=i.x-r.x,s=i.z-r.z,d=Math.hypot(o,s),p=o/d,m=s/d,h=Math.atan2(p,m),g=d-l*2;for(let n=0;n<u;n++){let i=l+(u===1?g/2:g*n/(u-1));e.position.set(r.x+p*i,c,r.z+m*i),e.rotation.set(0,h,0),e.updateMatrix(),f.setMatrixAt(t++,e.matrix)}}f.instanceMatrix.needsUpdate=!0}let p=new ge(new F(.34,.26,.74),V(new v({flatShading:!0,roughness:.5,metalness:.3})),12);p.castShadow=!0,p.receiveShadow=!1,p.frustumCulled=!1,p.raycast=()=>{};let m=new ce,h=new Float32Array(72),g=new Float32Array(72),_=new P(`#fff0c0`),y=new P(`#ff3528`);for(let e=0;e<12;e++)_.toArray(g,e*3),y.toArray(g,(12+e)*3),h[e*3+1]=-50,h[(12+e)*3+1]=-50;m.setAttribute(`position`,new te(h,3)),m.setAttribute(`color`,new te(g,3));let S=new E({size:.72,sizeAttenuation:!0,map:yt(),vertexColors:!0,transparent:!0,opacity:0,blending:2,depthWrite:!1}),C=new s(m,S);C.frustumCulled=!1,C.raycast=()=>{},r.add(p,C);let w=[`#f4c430`,`#c0392b`,`#d8dde2`,`#9aa7b4`,`#6b7785`,`#5a7d9a`],T=Ye(2403557),D=o.map((e,t)=>t).filter(e=>o[e].main),O=[];for(let e=0;e<12;e++){let t=e<4&&D.length?D[T()*D.length|0]:T()*o.length|0,n=e===1;O.push({edge:t,fwd:T()<.5,s:T()*o[t].len,speed:n?.5:.78+e%3*.1,lenZ:n?1.45:1,color:w[n?1:e===0?0:2+e%4],rng:Ye(12648430+e*2654435761)})}let ee=new P;O.forEach((e,t)=>p.setColorAt(t,ee.set(e.color)));function k(e,t,n){let r=a[e],i=r.edges.filter(e=>e!==t);if(i.length===0)return t;let s=o[t],c=s.a===e?s.b:s.a,l=r.x-a[c].x,u=r.z-a[c].z,d=Math.hypot(l,u)||1,f=i[0],p=-2;for(let t of i){let n=o[t],i=n.a===e?n.b:n.a,s=a[i].x-r.x,c=a[i].z-r.z,m=Math.hypot(s,c)||1,h=l/d*(s/m)+u/d*(c/m);h>p&&(p=h,f=t)}return n()<.65?f:i[n()*i.length|0]}let A=k,j=new x,ne=(e,t)=>{j.position.set(0,-50,0),j.scale.setScalar(0),j.updateMatrix(),e.setMatrixAt(t,j.matrix)},N=.085,re=st.PLINTH_TOP+.02+.13,I=new ge(new M(.04,.1,3,6),V(new v({flatShading:!0,roughness:.8})),14);I.castShadow=!0,I.receiveShadow=!1,I.frustumCulled=!1,I.raycast=()=>{};let ae=bt(t-.72,e),oe=[];for(let e=0;e<14;e++)oe.push({phase:e/14,speed:.12+e%4*.02,dir:e%2?1:-1});let se=new R,L=new R,le=new P;oe.forEach((e,t)=>I.setColorAt(t,le.set([`#caa`,`#9ab`,`#bba`,`#ab9`][t%4]))),r.add(I);let ue={manhattan:`#e8c84a`,paris:`#dcd2bc`,neoTokyo:`#5ae8e0`};function de(e){e&&d.color.set(ue[e.key]||`#e8c84a`)}de(n);function fe(t,n,r){let i=r?r.t:.5,s=r?r.windowGlow:0,c=Math.max(2,Math.round(xt(i)*12)),l=s>.05;for(let e=0;e<12;e++){if(e>=c){ne(p,e),h[e*3+1]=-50,h[(12+e)*3+1]=-50;continue}let n=O[e];n.s+=t*n.speed;let r=0;for(;n.s>=o[n.edge].len&&r++<4;){n.s-=o[n.edge].len;let e=n.fwd?o[n.edge].b:o[n.edge].a,t=A(e,n.edge,n.rng);n.edge=t,n.fwd=o[t].a===e}let i=o[n.edge],s=n.fwd?a[i.a]:a[i.b],u=n.fwd?a[i.b]:a[i.a],d=u.x-s.x,f=u.z-s.z,m=Math.hypot(d,f)||1,g=d/m,_=f/m,v=-_,y=g,b=s.x+g*n.s+v*N,x=s.z+_*n.s+y*N,S=Math.atan2(g,_);j.position.set(b,re,x),j.rotation.set(0,S,0),j.scale.set(1,1,n.lenZ),j.updateMatrix(),p.setMatrixAt(e,j.matrix);let C=.74*n.lenZ*.5,w=re+.06,T=e*3,E=(12+e)*3;l?(h[T]=b+g*(C+.04),h[T+1]=w,h[T+2]=x+_*(C+.04),h[E]=b-g*(C+.02),h[E+1]=w,h[E+2]=x-_*(C+.02)):(h[T+1]=-50,h[E+1]=-50)}p.instanceMatrix.needsUpdate=!0,m.attributes.position.needsUpdate=!0,S.opacity=b.clamp(s*1.8,0,1);let u=Math.max(2,Math.round(xt(i)*14));for(let t=0;t<14;t++){if(t>=u){ne(I,t);continue}let r=oe[t],i=(r.phase+r.dir*r.speed*n*.02+1e3)%1;ae.getPointAt(i,se),ae.getTangentAt(i,L);let a=Math.sin(n*6+r.phase*30)*.015;j.position.set(se.x,e+.09+a,se.z),j.rotation.set(0,Math.atan2(L.x*r.dir,L.z*r.dir),Math.sin(n*6+r.phase*30)*.06),j.scale.setScalar(1),j.updateMatrix(),I.setMatrixAt(t,j.matrix)}I.instanceMatrix.needsUpdate=!0}return{group:r,update:fe,setProfile:de,graph:i,setRouter(e){A=e||k}}}function wt(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.4,`rgba(255,255,255,0.5)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new fe(e);return r.colorSpace=D,r}function Tt(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64*.62,0,64/2,64*.62,64*.5);n.addColorStop(0,`rgba(240,250,255,0.95)`),n.addColorStop(1,`rgba(240,250,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new fe(e);return r.colorSpace=D,r}function Et(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`);t.strokeStyle=`rgba(40,46,54,0.9)`,t.lineWidth=6,t.lineCap=`round`,t.beginPath(),t.moveTo(8,40),t.quadraticCurveTo(24,18,32,34),t.quadraticCurveTo(40,18,56,40),t.stroke();let n=new fe(e);return n.colorSpace=D,n}function Dt(e,t,n=18){let r=[];for(let i=0;i<n;i++){let a=i/n*Math.PI*2;r.push(new R(Math.cos(a)*e,t,Math.sin(a)*e))}return new ae(r,!0,`catmullrom`,.5)}function Ot(e,t,n){let r=e-t,i=[],a=(e,t)=>i.push(new R(e,n,t)),o=(e,n,r,i,o=4)=>{for(let s=1;s<=o;s++){let c=r+(i-r)*(s/o);a(e+Math.cos(c)*t,n+Math.sin(c)*t)}};for(let t=0;t<4;t++)a(e,-r+2*r*t/4);o(r,r,0,Math.PI/2);for(let t=0;t<4;t++)a(r-2*r*t/4,e);o(-r,r,Math.PI/2,Math.PI);for(let t=0;t<4;t++)a(-e,r-2*r*t/4);o(-r,-r,Math.PI,1.5*Math.PI);for(let t=0;t<4;t++)a(-r+2*r*t/4,-e);return o(r,-r,1.5*Math.PI,2*Math.PI),new ae(i,!0,`catmullrom`,.5)}function kt({extent:e=8,waterSize:t=28,plinthTop:n=.3}={}){let r=new z;r.raycast=()=>{};let i=.06,a=(e,n,r)=>r.set(e/t+.5,-n/t+.5,0),c=[Ot(9.5,3,i),Dt(12.7,i),new ae([new R(8.4,i,0),new R(11,i,-3.6),new R(13,i,0),new R(11,i,3.6)],!0,`catmullrom`,.5)],l=c.map(e=>e.getLength());function u({scale:e=1,hull:t=`#6b7785`,cabin:n=`#e7ecf2`}){let r=new z,i=new o(new F(.46*e,.2*e,1.1*e),V(new v({color:t,roughness:.6,metalness:.2,flatShading:!0}),{color:t}));i.position.y=.02;let a=new o(new F(.3*e,.22*e,.42*e),V(new v({color:n,roughness:.7,flatShading:!0}),{color:n}));return a.position.set(0,.18*e,.08*e),r.add(i,a),r.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!1),e.raycast=()=>{}}),r.userData.halfLen=.55*e,r}let d=[{laneIndex:0,dir:1,speed:.5,wake:.024,scale:1,hull:`#5a6675`,cabin:`#e7ecf2`},{laneIndex:1,dir:-1,speed:.42,wake:.022,scale:1,hull:`#7a5b46`,cabin:`#d9c3a6`},{laneIndex:0,dir:1,speed:.56,wake:.024,scale:.9,hull:`#456079`,cabin:`#cfe0ee`},{laneIndex:2,dir:1,speed:.34,wake:.03,scale:1.35,hull:`#39505f`,cabin:`#e2b85a`}];d.forEach((e,t)=>{e.mesh=u(e),e.u=t*.27%1,e.phase=t*1.7,e.isFerry=e.laneIndex===2,r.add(e.mesh)});let f=d.length,p=f*2,m=new ce,g=new Float32Array(p*3).fill(-50),_=new Float32Array(p*3),y=new P(`#fff0c0`),x=new P(`#ff3528`);for(let e=0;e<f;e++)y.toArray(_,e*3),x.toArray(_,(f+e)*3);m.setAttribute(`position`,new te(g,3)),m.setAttribute(`color`,new te(_,3));let S=new s(m,new E({size:.6,sizeAttenuation:!0,map:wt(),vertexColors:!0,transparent:!0,opacity:0,blending:2,depthWrite:!1}));S.frustumCulled=!1,S.raycast=()=>{},r.add(S);function C(e,t){let n=new o(new h(e,9,7),V(new v({color:t,roughness:.5,flatShading:!0}),{color:t}));return n.scale.set(.55,.5,1),n.castShadow=!1,n.receiveShadow=!1,n.raycast=()=>{},n.position.y=-5,n}let w=[{x:-9.5,z:6,size:.18,color:`#5b6f86`,period:11,arcH:.55,span:1.1,whale:!1},{x:7.5,z:-9.5,size:.16,color:`#4a6076`,period:14,arcH:.5,span:1,whale:!1},{x:-7,z:-8.5,size:.2,color:`#607089`,period:9,arcH:.6,span:1.2,whale:!1},{x:10.5,z:7,size:.62,color:`#3a4350`,period:38,arcH:.9,span:2.6,whale:!0}];w.forEach((e,t)=>{e.mesh=C(e.size,e.color),e.heading=Math.atan2(-e.x,-e.z),e.t=t/w.length*e.period,e.splashed=!1,r.add(e.mesh),e.whale&&(e.spout=new O(new k({map:Tt(),transparent:!0,opacity:0,depthWrite:!1,fog:!0})),e.spout.scale.set(.6,1.1,1),e.spout.position.set(e.x,-5,e.z),r.add(e.spout))});let T=Et(),D=[];for(let e=0;e<4;e++){let t=new O(new k({map:T,transparent:!0,opacity:0,depthWrite:!1,fog:!0}));t.scale.setScalar(.5),D.push({sp:t,r:8.6+e*.5,y:1.1+e%2*.5,speed:(.18+e*.03)*(e%2?-1:1),phase:e*1.9}),r.add(t)}let ee=w.length,A=Array.from({length:f+ee},()=>new R),j=e=>e.laneIndex,M=new R,ne=new R,N=new R;function re(e,t,n){let r=n?n.windowGlow:0,o=1-r;for(let n=0;n<f;n++){let o=d[n],s=c[o.laneIndex],u=l[o.laneIndex],p=o.isFerry?.45+.55*Math.min(1,Math.abs((o.u+.5)%1-.5)*3):1,m=o.u;o.u=(o.u+o.dir*e*o.speed*p/u+1)%1,(o.dir>0?o.u<m:o.u>m)&&(o.laneIndex=j(o)),s.getPointAt(o.u,M),s.getTangentAt(o.u,ne);let h=ne.x*o.dir,_=ne.z*o.dir,v=Math.atan2(h,_),y=Math.sin(t*1.1+o.phase)*.025;o.mesh.position.set(M.x,i+y,M.z),o.mesh.rotation.set(Math.sin(t*.9+o.phase)*.04,v,0);let b=o.mesh.userData.halfLen;a(M.x-h*b,M.z-_*b,N),A[n].set(N.x,N.y,o.wake);let x=n*3,S=(f+n)*3;if(r>.05){let e=.18;g[x]=M.x+h*(b+.05),g[x+1]=e,g[x+2]=M.z+_*(b+.05),g[S]=M.x-h*(b+.02),g[S+1]=e,g[S+2]=M.z-_*(b+.02)}else g[x+1]=-50,g[S+1]=-50}ie(),S.material.opacity=b.clamp(r*1.8,0,1);for(let t=0;t<ee;t++){let n=w[t];n.t+=e;let r=f+t,o=n.whale?3.2:1.3;if(n.t>=n.period){let e=(n.t-n.period)/o;if(e>=1){n.t=0,n.splashed=!1,n.mesh.position.y=-5,n.spout&&(n.spout.material.opacity=0),A[r].set(0,0,0);continue}let t=Math.sin(Math.PI*e),s=(e-.5)*n.span,c=n.x+Math.sin(n.heading)*s,l=n.z+Math.cos(n.heading)*s;n.mesh.position.set(c,i-.1+t*n.arcH,l),n.mesh.rotation.set(Math.cos(Math.PI*e)*.9,n.heading,0);let u=e<.16||e>.84;if(a(c,l,N),A[r].set(N.x,N.y,u?n.whale?.07:.05:0),n.spout){let t=b.clamp((e-.15)*3,0,1)*(1-e);n.spout.position.set(c,.56+t*.6,l),n.spout.material.opacity=t*.9}}else n.mesh.position.y=-5,A[r].set(0,0,0),n.spout&&(n.spout.material.opacity=0)}for(let e=0;e<4;e++){let n=D[e],r=n.phase+t*n.speed*.25;n.sp.position.set(Math.cos(r)*n.r,n.y+Math.sin(t*1.4+n.phase)*.12,Math.sin(r)*n.r),n.sp.material.opacity=b.clamp(o*.9-.05,0,.85)}if(typeof window<`u`){let e=0;for(let t of w)t.mesh.position.y>i&&e++;window.__waterLife={boats:f,breaching:e,gulls:+D[0].sp.material.opacity.toFixed(2),lights:+S.material.opacity.toFixed(2)}}}function ie(){m.attributes.position.needsUpdate=!0}function I(){return A.length}return{group:r,update:re,wakeDrops:A,get wakeCount(){return I()},lanes:c,setRouter(e){j=e||(e=>e.laneIndex)}}}var At=[`empireState`,`chrysler`,`liberty`,`eiffel`,`arcDeTriomphe`,`sacreCoeur`,`tokyoTower`,`pagoda`,`neonBillboard`],jt={empireState:1.25,chrysler:1.1,liberty:.55,eiffel:3.2,arcDeTriomphe:1.5,sacreCoeur:1.75,tokyoTower:1.35,pagoda:.5,neonBillboard:.9};function Mt(e){let t=()=>new v({flatShading:!0,roughness:.7,metalness:.1}),n=(n,r={})=>r.windows?Je(t(),{color:n,id:e.id(),windowGlow:e.windowGlow,winColors:e.winColors,litFrac:e.litFrac}):V(t(),{color:n,glow:r.glow??null,glowDay:r.glowDay??0,glowNight:r.glowNight??1,windowGlow:r.glow?e.windowGlow:null});return{box:(e,t,r,i,a={})=>new o(new F(e,t,r),n(i,a)),cyl:(e,t,r,i,a={})=>new o(new oe(e,t,r,a.seg||12),n(i,a)),cone:(e,t,r,i={})=>new o(new le(e,t,i.seg||8),n(r,i)),sphere:(e,t,r={})=>new o(new h(e,r.seg||12,r.seg2||8),n(t,r)),lathe:(e,t,r={})=>new o(new w(e.map(e=>new N(e[0],e[1])),r.seg||4),n(t,r))}}var H=(e,t,n,r)=>(e.position.set(t,n,r),e),Nt=[`#7FB0E0`,`#E07FB0`,`#7FE0A0`,`#E0C97F`,`#9FE07F`,`#7FE0E0`,`#FF8C42`,`#E0E07F`,`#C97FE0`,`#E07F7F`,`#7F9FE0`,`#E0483A`],Pt={empireState(e,t){let n=`#E8E0CF`;e.add(H(t.box(.42,.18,.42,n,{windows:!0}),0,.09,0)),e.add(H(t.box(.34,.16,.34,n,{windows:!0}),0,.26,0)),e.add(H(t.box(.26,.14,.26,n,{windows:!0}),0,.41,0)),e.add(H(t.box(.19,.34,.19,n,{windows:!0}),0,.65,0)),e.add(H(t.box(.13,.06,.13,n,{windows:!0}),0,.85,0));let r=Nt[new Date().getMonth()];e.add(H(t.cyl(.03,.045,.12,n,{seg:10,glow:r,glowNight:1.85}),0,.94,0)),e.add(H(t.cone(.012,.07,n,{seg:8}),0,1.04,0))},chrysler(e,t){let n=`#C9CED4`;e.add(H(t.box(.22,.55,.22,`#9AA7B4`,{windows:!0}),0,.275,0));let r=.55;for(let i=0;i<5;i++){let a=.14-i*.024,o=.07;e.add(H(t.cyl(a*.7,a,o,n,{seg:8,glow:`#dfeaff`,glowNight:.5}),0,r+o/2,0)),r+=o}e.add(H(t.cone(.018,.16,n,{seg:8}),0,r+.08,0))},liberty(e,t){let n=`#B9B4A6`,r=`#4FA890`;e.add(H(t.box(.42,.16,.42,n),0,.08,0)),e.add(H(t.box(.3,.2,.3,n),0,.26,0)),e.add(H(t.cyl(.1,.15,.42,r,{seg:10}),0,.57,0)),e.add(H(t.box(.11,.1,.11,r),0,.83,0));for(let n=0;n<7;n++){let i=(n/6-.5)*Math.PI*1.1;e.add(H(t.cone(.012,.1,r,{seg:5}),Math.sin(i)*.1,.92,Math.cos(i)*.06-.02))}let i=H(t.cyl(.025,.03,.34,r,{seg:8}),.14,.98,0);i.rotation.z=.35,e.add(i),e.add(H(t.box(.06,.06,.06,r,{glow:`#ffd060`,glowDay:.6,glowNight:1.2}),.2,1.16,0)),e.add(H(t.cone(.04,.09,`#ffcf66`,{seg:6,glow:`#ffd060`,glowDay:.7,glowNight:1.3}),.2,1.24,0))},eiffel(e,t){let n=`#6E5C4C`,r=[[.2,0],[.13,.16],[.085,.33],[.055,.5],[.035,.66],[.02,.85],[0,.92]];e.add(t.lathe(r,n,{seg:4}));let i=t.lathe(r,n,{seg:4});i.rotation.y=Math.PI/4,e.add(i),e.add(H(t.box(.26,.025,.26,n),0,.33,0)),e.add(H(t.box(.14,.02,.14,n),0,.66,0)),e.add(H(t.cone(.01,.1,n,{seg:6}),0,.97,0))},arcDeTriomphe(e,t){let n=`#D9D0C1`,r=.58,i=.5,a=.34,s=new ue;s.moveTo(-.58/2,0),s.lineTo(r/2,0),s.lineTo(r/2,i),s.lineTo(-.58/2,i),s.lineTo(-.58/2,0);let c=new m,l=.15,u=.22;c.moveTo(-.15,0),c.lineTo(-.15,u),c.absarc(0,u,l,Math.PI,0,!0),c.lineTo(l,0),c.lineTo(-.15,0),s.holes.push(c);let d=new he(s,{depth:a,bevelEnabled:!1});d.translate(0,0,-.34/2),d.computeVertexNormals(),e.add(new o(d,V(new v({color:n,flatShading:!0}),{color:n}))),e.add(H(t.box(r*1.06,.08,a*1.06,n),0,.54,0))},sacreCoeur(e,t){let n=`#F1EEE6`;e.add(H(t.box(.5,.26,.4,n),0,.13,0));let r=(r,i,a,o)=>{e.add(H(t.cyl(a*.9,a,i,n,{seg:12}),r,o,0));let s=H(t.sphere(a,n,{seg:12}),r,o+i/2,0);s.scale.y=1.5,e.add(s)};r(0,.22,.15,.4),r(-.2,.1,.07,.33),r(.2,.1,.07,.33)},tokyoTower(e,t){let n=`#F25822`,r=`#EDEDED`,i=0;for(let a=0;a<9;a++){let o=a/9,s=(a+1)/9,c=.19*(1-o)+.03*o,l=.19*(1-s)+.03*s,u=.085,d=a%2?r:n;e.add(H(t.cyl(l,c,u,d,{seg:4,glow:n,glowDay:0,glowNight:.7}),0,i+u/2,0)),i+=u}e.add(H(t.box(.22,.02,.22,n,{glow:n,glowNight:.7}),0,.28,0)),e.add(H(t.box(.12,.02,.12,r),0,.5,0)),e.add(H(t.cone(.012,.16,r,{seg:6,glow:`#ff6a2a`,glowNight:.9}),0,i+.08,0))},pagoda(e,t){let n=0;for(let r=0;r<5;r++){let i=.42-r*.06,a=.11;e.add(H(t.box(i,a,i,`#B23A2C`,{windows:r<4}),0,n+a/2,0)),e.add(H(t.box(i*1.34,.03,i*1.34,`#7A3B2A`),0,n+a+.015,0)),n+=.16999999999999998}e.add(H(t.cyl(.012,.012,.1,`#E0C040`,{seg:6}),0,n+.05,0)),e.add(H(t.sphere(.03,`#E0C040`,{seg:8,glow:`#ffe680`,glowNight:.8}),0,n+.12,0))},neonBillboard(e,t){let n=`#20242C`;e.add(H(t.box(.3,1,.3,n,{windows:!0}),0,.5,0));let r=[`#5AE8E0`,`#E85AA0`,`#E8E06A`],i=(n,r,i,a,o,s,c)=>{let l=H(t.box(n,r,.02,i,{glow:i,glowDay:.6,glowNight:1.1}),a,o,s);l.rotation.y=c,e.add(l)};i(.22,.34,r[0],0,.75,.16,0),i(.16,.5,r[1],.16,.5,0,Math.PI/2),i(.2,.22,r[2],0,.34,-.16,0),e.add(H(t.cone(.01,.14,n,{seg:6,glow:`#E85AA0`,glowDay:.4,glowNight:1}),0,1.08,0))}};function Ft(e,t){let n=new z;return Pt[e](n,Mt(t)),n}var It=``+new URL(`building-skyscraper-d-CapD2Zqe.glb`,import.meta.url).href,Lt=``+new URL(`building-n-hdv8kKtN.glb`,import.meta.url).href,Rt=``+new URL(`building-g-CsTB1qH9.glb`,import.meta.url).href,zt=``+new URL(`colormap-CK8fW2HB.png`,import.meta.url).href,Bt={skyscraper:{url:It,color:`#9cc1dd`,fill:.92},midrise:{url:Lt,color:`#c9a07a`,fill:.96},setback:{url:Rt,color:`#d9c7a0`,fill:.9}};function Vt({windowGlow:e}){let t=new l;t.setURLModifier(e=>e.includes(`colormap.png`)?zt:e);let n=new pe(t),r={},i=!1,a=Promise.all(Object.entries(Bt).map(async([e,t])=>{r[e]=(await n.loadAsync(t.url)).scene})).then(()=>{i=!0,window.__landmarksReady=!0}).catch(e=>console.error(`landmark models failed:`,e)),o=9e3;function s(t,n,i={}){let a,s;if(At.includes(t))a=Ft(t,{windowGlow:e,winColors:i.winColors,litFrac:i.litFrac,id:()=>++o}),s=1;else{let e=r[t],n=Bt[t];if(!e||!n)return null;a=e.clone(!0),s=n.fill}a.updateMatrixWorld(!0);let c=new de().setFromObject(a).getSize(new R);a.scale.setScalar(n.h*s/c.y),a.updateMatrixWorld(!0);let l=new de().setFromObject(a),u=l.getCenter(new R);return a.position.x+=n.x-u.x,a.position.z+=n.z-u.z,a.position.y+=n.plinthTop-l.min.y,At.includes(t)?a.traverse(e=>{e.isMesh&&(e.castShadow=!1,e.raycast=()=>{})}):a.traverse(n=>{if(!n.isMesh)return;n.castShadow=!1,n.raycast=()=>{};let r=n=>Je(n.clone(),{color:Bt[t].color,id:++o,windowGlow:e,winColors:i.winColors,litFrac:i.litFrac});n.material=Array.isArray(n.material)?n.material.map(r):r(n.material)}),a}return{make:s,whenReady:a,heightFactor:e=>jt[e]??1,get ready(){return i}}}var Ht=[`video/mp4;codecs=avc1.42E01E`,`video/mp4`,`video/webm;codecs=vp9`,`video/webm`];function Ut({renderer:e,rig:t,sunRig:n,poke:r,getState:i,office:a={}}){let o=e.domElement,s=new URLSearchParams(window.location.search),c=e=>{let t=i();return`lgr-${t.lesson}-${String(t.clock||``).replace(`:`,``)}-${t.style}.${e}`},l=(e,t)=>{let n=URL.createObjectURL(e),r=document.createElement(`a`);r.href=n,r.download=t,document.body.appendChild(r),r.click(),r.remove(),setTimeout(()=>URL.revokeObjectURL(n),1e3)};function u(){o.toBlob(e=>{e&&(l(e,c(`png`)),window.__lastStill=e.size)},`image/png`)}let d=()=>Ht.find(e=>window.MediaRecorder&&MediaRecorder.isTypeSupported(e))||``,f=Wt(),p=null,m=[],h=!1;function g(){if(h)return;let e=d(),t=o.captureStream(60);p=new MediaRecorder(t,e?{mimeType:e,videoBitsPerSecond:12e6}:{}),m=[],p.ondataavailable=e=>{e.data&&e.data.size&&m.push(e.data)},p.onstop=()=>{let e=new Blob(m,{type:p.mimeType});l(e,c(p.mimeType.includes(`mp4`)?`mp4`:`webm`)),window.__lastVideo=e.size},p.start(),h=!0,window.__recording=!0,f.show()}function _(){h&&(p.stop(),h=!1,window.__recording=!1,f.hide())}let v=()=>h?_():g(),y=e=>new Promise(t=>setTimeout(t,e)),b=e=>window.dispatchEvent(new KeyboardEvent(`keydown`,{key:e}));async function x(){let e=o.clientWidth,t=o.clientHeight,n=e*.26,i=t*.74;for(let t=0;t<=10;t++)r.at(n+t*e*.028,i+Math.sin(t*.7)*16),await y(100);r.stop()}async function S(e){if(e.keys)for(let t of e.keys)b(t),await y(70);e.zoom&&t.zoomBy(e.zoom),e.orbit&&t.orbit(e.orbit[0],e.orbit[1]),e.timeTo!==void 0&&n.goTo(e.timeTo),e.office&&a[e.office]?.(),e.ripple&&await x(),e.waitMs&&await y(e.waitMs)}let C={tour:[{keys:[`6`,`0`],waitMs:600},{zoom:.72,waitMs:1700},{ripple:!0,waitMs:2400},{orbit:[.55,0],waitMs:1700},{timeTo:0,waitMs:3e3},{timeTo:.5,waitMs:1500},{keys:[`7`],waitMs:1e3},{zoom:1.5,waitMs:1400},{keys:[`B`],waitMs:2e3},{keys:[`B`],waitMs:2e3},{keys:[`B`],waitMs:2e3},{keys:[`B`],waitMs:2e3},{keys:[`B`],waitMs:2e3},{keys:[`8`],waitMs:900},{zoom:.65,waitMs:1200},{ripple:!0,waitMs:2600},{keys:[`7`],waitMs:700},{keys:[`B`],waitMs:300},{keys:[`B`],waitMs:900},{zoom:1.4,waitMs:2600}],daycycle:[{keys:[`6`,`0`],waitMs:700},{timeTo:.75,waitMs:2600},{timeTo:1,waitMs:2600},{timeTo:1.25,waitMs:2600},{timeTo:1.5,waitMs:2600},{timeTo:1.5,waitMs:800}],office:[{keys:[`o`],waitMs:1700},{office:`pet`,waitMs:1300},{office:`feed`,waitMs:1700},{office:`travel`,waitMs:1700},{keys:[`W`,`W`,`W`],waitMs:1800},{timeTo:0,waitMs:2400},{office:`laptop`,waitMs:800},{office:`closeLaptop`,waitMs:300},{timeTo:.5,waitMs:900},{keys:[`W`],waitMs:200},{keys:[`o`],waitMs:1500}],cities:[{keys:[`6`,`0`],waitMs:500},{timeTo:.78,waitMs:2800},{keys:[`C`],waitMs:3e3},{keys:[`C`],waitMs:3e3},{keys:[`C`],waitMs:2e3}],water:[{keys:[`6`,`0`],waitMs:600},{zoom:1.35,waitMs:2800},{orbit:[.7,0],waitMs:2600},{ripple:!0,waitMs:2200},{timeTo:0,waitMs:3200},{timeTo:.5,waitMs:1500},{orbit:[-.5,0],waitMs:2200}],morph:[{keys:[`6`,`3`],waitMs:700},{zoom:.55,waitMs:1800},{zoom:2.3,waitMs:1700},{zoom:1.26,waitMs:1700},{zoom:1.16,waitMs:1900},{zoom:.3,waitMs:2200}]};async function w(e){let t=C[e];if(t){window.__director=e;for(let e of t)await S(e);window.__director=null}}async function T(e){await y(1600),g(),await w(e),await y(400),_(),window.__captureDone=!0}window.addEventListener(`keydown`,e=>{(e.key===`s`||e.key===`S`)&&u(),(e.key===`r`||e.key===`R`)&&v()});let E=s.get(`capture`);return E&&C[E]&&T(E),window.__capture={still:u,toggleRec:v,run:w,sequences:Object.keys(C)},window.__capture}function Wt(){let e=document.createElement(`div`);return e.textContent=`● REC`,e.style.cssText=`position:fixed;top:14px;right:16px;z-index:2;font:bold 12px ui-monospace,monospace;color:#ff3b30;letter-spacing:.12em;text-shadow:0 1px 3px #000;display:none;`,document.body.appendChild(e),{show:()=>{e.style.display=`block`},hide:()=>{e.style.display=`none`}}}var Gt=`
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
`;function Kt({controls:e,state:t,show:n,coarse:r}){if(typeof document>`u`)return;let i=document.createElement(`style`);i.textContent=Gt,document.head.appendChild(i);let a=document.createElement(`div`);a.className=`vui`;let o=document.createElement(`div`);o.className=`vui-info`,o.innerHTML=`KEYS · 4/5/6 cam · 0 vector · 7/8 pixel/toon · B era · T time · [ ] scrub · 9 auto · C city · G shuffle · W weather · K season · click a building / O office · Esc exit · M hide UI · S still · R rec · H shadows · P theme · drag water to ripple`;let s=(e,t,n)=>{let r=document.createElement(`button`);return r.textContent=e,n&&(r.title=n),r.addEventListener(`click`,t),r},c=e=>{let t=document.createElement(`div`);return t.className=`seg`,{seg:t,btns:e.map(([n,r])=>{let i=s(n,()=>e.find(e=>e[1]===r)[2](),n);return i.dataset.val=r,t.appendChild(i),i})}};a.appendChild(s(`City`,()=>e.city(),`Next city profile (C)`)),a.appendChild(s(`Shuffle`,()=>e.shuffle(),`New random seed (G)`)),a.appendChild(M());let l={clear:`Clear`,rain:`Rain`,snow:`Snow`,fog:`Fog`},u=[`Spring`,`Summer`,`Autumn`,`Winter`],d=s(`Clear`,()=>e.weather(),`Cycle weather: clear→rain→snow→fog (W)`),f=s(`Spring`,()=>e.season(),`Cycle season: spring→summer→autumn→winter (K)`),p=s(`Office`,()=>e.office(),`Dive into / exit the office (O · Esc)`);a.append(d,f,p,M());let m=c([[`Auto`,`auto`,()=>e.style(`auto`)],[`Vector`,`vector`,()=>e.style(`vector`)],[`Pixel`,`pixel`,()=>e.style(`pixel`)],[`Toon`,`toon`,()=>e.style(`toon`)]]);m.btns[0].title=`AUTO: zoom morphs the style (toon → 16-bit → 8-bit → Game Boy)`;let h={native:`Era`,gb:`GB`,"8-bit":`8-bit`,"16-bit":`16-bit`,modern:`Modern`,"1-bit":`1-bit`},g=s(`Era`,()=>e.era(),`Cycle the pixel era (B): native → GB → 8-bit → 16-bit → Modern`);a.appendChild(m.seg),a.appendChild(g),a.appendChild(M());let _=document.createElement(`input`);_.type=`range`,_.min=`0`,_.max=`1`,_.step=`0.01`,_.title=`Time of day`;let v=!1;_.addEventListener(`pointerdown`,()=>{v=!0}),_.addEventListener(`pointerup`,()=>{v=!1}),_.addEventListener(`input`,()=>e.time(parseFloat(_.value)));let y=s(`▶`,()=>e.auto(),`Play/pause day cycle (9)`),b=document.createElement(`div`);b.style.cssText=`display:flex;align-items:center;gap:6px;`;let x=document.createElement(`span`);x.className=`lbl`,x.textContent=`Day`,b.append(x,_,y),a.appendChild(b),a.appendChild(M());let S=c([[`Iso`,`iso`,()=>e.cam(`iso`)],[`Dim`,`dimetric`,()=>e.cam(`dimetric`)],[`3D`,`persp`,()=>e.cam(`persp`)]]);a.appendChild(S.seg),a.appendChild(s(`ⓘ`,()=>o.classList.toggle(`open`),`All keys`)),a.appendChild(M()),a.appendChild(s(`⌄`,()=>ee(!0),`Hide controls — watch unobstructed (M)`));let C=document.createElement(`button`);C.className=`vui-show`,C.innerHTML=`⌃ Controls`,C.title=`Show controls (M)`,C.addEventListener(`click`,()=>ee(!1));let w=document.createElement(`div`);w.className=`vui-style`,document.body.append(o,a,C,w);let T=n,E=!1;ee(!1);function D(){let e=t();m.btns.forEach(t=>t.classList.toggle(`on`,t.dataset.val===e.style)),S.btns.forEach(t=>t.classList.toggle(`on`,t.dataset.val===e.cam)),d.textContent=l[e.weather]||`Clear`,d.classList.toggle(`on`,e.weather!==`clear`),f.textContent=u[e.season]||`Spring`,f.classList.toggle(`on`,(e.season||0)>0),p.textContent=e.office?`Exit`:`Office`,p.classList.toggle(`on`,!!e.office),y.textContent=e.auto?`❚❚`:`▶`,y.classList.toggle(`on`,e.auto),g.textContent=h[e.era]||`Era`,g.classList.toggle(`on`,e.era&&e.era!==`native`),v||(_.value=String(e.t))}D();let O=setInterval(D,200);function ee(e){if(!T){a.style.display=`none`,C.classList.remove(`on`),o.classList.remove(`open`),w.classList.remove(`on`);return}E=e,a.style.display=e?`none`:`flex`,C.classList.toggle(`on`,e),e&&(o.classList.remove(`open`),w.classList.remove(`on`))}function k(){ee(!E)}let A=null,te=null;function j(e){if(!T||E){w.classList.remove(`on`),A=null;return}if(!e){w.classList.remove(`on`),A=``;return}e!==A&&(A=e,w.textContent=e,w.classList.add(`on`),clearTimeout(te),te=setTimeout(()=>w.classList.remove(`on`),2e3))}return{toggle:k,setHidden:ee,refresh:D,setStyleHint:j,destroy(){clearInterval(O),a.remove(),o.remove(),C.remove(),w.remove(),i.remove(),clearTimeout(te)}};function M(){let e=document.createElement(`div`);return e.className=`sep`,e}}var qt=[`clear`,`rain`,`snow`,`fog`];function Jt({extent:e=7}={}){let t=new z;t.raycast=()=>{};let n=e+2,r=.25,i=(e,t)=>e+Math.random()*(t-e),a=new ge(new S(.015,.5),new ie({color:`#a9bdd6`,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),600);a.frustumCulled=!1,a.raycast=()=>{};let o=new Float32Array(600*3),s=new Float32Array(600);for(let e=0;e<600;e++)o[e*3]=i(-n,n),o[e*3+1]=i(r,11),o[e*3+2]=i(-n,n),s[e]=i(9,14);let c=new ge(new S(.07,.07),new ie({color:`#f3f7ff`,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),700);c.frustumCulled=!1,c.raycast=()=>{};let l=new Float32Array(700*3),u=new Float32Array(700),d=new Float32Array(700);for(let e=0;e<700;e++)l[e*3]=i(-n,n),l[e*3+1]=i(r,11),l[e*3+2]=i(-n,n),u[e]=i(0,6.28),d[e]=i(.6,1.2);t.add(a,c);let f=Array.from({length:8},()=>new R),p=0,m=`clear`,h=0,g=0,_=0,v=0,y=0,b=new x,C=(e,t,n,r)=>e+(t-e)*Math.min(1,n*r);function w(e){qt.includes(e)&&(m=e)}function T(){m=qt[(qt.indexOf(m)+1)%qt.length]}function E(e,t){let x=m===`rain`,S=m===`snow`,w=m===`fog`,T=m!==`clear`;h=C(h,+!!T,e,1.4),g=C(g,+!!T,e,1.2),_=C(_,+!!w,e,.9),y=C(y,T&&!w?1:0,e,1),v=C(v,+!!S,e,S?.22:.5);let E=x?h:0,D=Math.round(600*E);for(let t=0;t<600;t++){if(t>=D){b.position.set(0,-50,0),b.scale.setScalar(0),b.updateMatrix(),a.setMatrixAt(t,b.matrix);continue}o[t*3+1]-=s[t]*e,o[t*3]+=e*1.1,o[t*3+1]<r&&(o[t*3]=i(-n,n),o[t*3+1]=11,o[t*3+2]=i(-n,n)),b.position.set(o[t*3],o[t*3+1],o[t*3+2]),b.rotation.set(0,0,0),b.scale.set(1,1,1),b.updateMatrix(),a.setMatrixAt(t,b.matrix)}a.instanceMatrix.needsUpdate=!0,a.material.opacity=.55*E,p=x?Math.round(8*h):0;for(let e=0;e<p;e++)f[e].set(Math.random(),Math.random(),.05*h);let O=Math.round(700*(S?h:0));for(let a=0;a<700;a++){if(a>=O){b.position.set(0,-50,0),b.scale.setScalar(0),b.updateMatrix(),c.setMatrixAt(a,b.matrix);continue}l[a*3+1]-=d[a]*e;let o=Math.sin(t*1.5+u[a])*.5;l[a*3+1]<r&&(l[a*3]=i(-n,n),l[a*3+1]=11,l[a*3+2]=i(-n,n)),b.position.set(l[a*3]+o,l[a*3+1],l[a*3+2]),b.rotation.set(0,0,0),b.scale.setScalar(1),b.updateMatrix(),c.setMatrixAt(a,b.matrix)}c.instanceMatrix.needsUpdate=!0,c.material.opacity=.9*(S?h:0)}return{group:t,update:E,cycle:T,setKind:w,rainDrops:f,get kind(){return m},get intensity(){return h},get overcast(){return g},get fog(){return _},get snow(){return v},get cloud(){return y},get rainDropCount(){return p},poolCounts:{rain:600,snow:700}}}function U(e,t,n,r,{rough:i=.62,metal:a=0,x:s=0,y:c=0,z:l=0,emissive:u=null,emissiveIntensity:d=1}={}){let f=new o(new F(e,t,n),new v({color:r,roughness:i,metalness:a,...u?{emissive:u,emissiveIntensity:d}:{}}));return f.position.set(s,c,l),f}function Yt({tier:e=`corner`}={}){let t=new f,n=new _(43,1,.1,100),r=new R(0,1.62,4.35);n.position.copy(r),n.lookAt(0,1.12,-1);let i=new z;t.add(i);let a=new z,s=new z;i.add(a,s);let l=[],u=`#3a2618`,d=`#5b3d27`,p=`#5a5650`;a.add(U(11,.2,11,`#3c2a1c`,{rough:.5,y:-.1})),a.add(U(11,.2,11,`#241a13`,{rough:.9,y:3}));function m(e){let t=new z;t.add(U(.2,3.2,8,`#4a3322`,{rough:.7,x:e*3.6,y:1.5,z:0}));for(let n of[.9,2.1])t.add(U(.22,.06,8,u,{x:e*3.59,y:n,z:0}));let n=new o(new S(1.5,1),new v({map:rn(e),roughness:.8}));return n.position.set(e*3.49,1.7,.4),n.rotation.y=-e*Math.PI/2,t.add(U(.06,1.18,1.68,`#2a1c10`,{x:e*3.52,y:1.7,z:.4}),n),t}a.add(m(-1),m(1));let h=new S(3,2.5),g=new ie({color:`#ffffff`,toneMapped:!1}),y=new ie({color:`#ffffff`,toneMapped:!1}),b=1.55,x=new o(h,g);x.position.set(-1.06,b,-2.64),x.rotation.y=Math.PI/4;let C=new o(h,y);C.position.set(1.06,b,-2.64),C.rotation.y=-Math.PI/4,a.add(x,C),a.add(U(.08,2.7,.08,u,{x:0,y:b,z:-2.2}));for(let[e,t,n]of[[-1.06,-2.64,Math.PI/4],[1.06,-2.64,-Math.PI/4]]){let r=new z;r.add(U(3.05,.09,.09,u,{y:1.3})),r.add(U(3.05,.09,.09,u,{y:-1.25})),r.add(U(.09,2.6,.09,u,{x:-1.5})),r.position.set(e,b,t),r.rotation.y=n,a.add(r)}a.add(U(5.4,.5,.3,d,{x:0,y:.25,z:-2.1500000000000004})),a.add(U(.4,.06,.4,`#1a130c`,{y:2.94,z:1.3}));let w=new o(new me(.16,20),new ie({color:`#ffe6b0`,toneMapped:!1}));w.position.set(0,2.9,1.3),w.rotation.x=Math.PI/2,a.add(w),a.add(Zt(l,{x:-3.46,y:2.15,z:.2,ry:Math.PI/2,face:`#efe2c8`,rim:`#2a1c10`})),s.add(U(11,.2,11,`#403d38`,{rough:.85,y:-.1})),s.add(U(11,.2,11,`#1c1a17`,{rough:.95,y:2.8})),s.add(U(7,3,.2,p,{rough:.92,x:0,y:1.4,z:-2.9})),s.add(U(.2,3,6,p,{rough:.92,x:-3.2,y:1.4,z:-.2})),s.add(U(.2,3,6,p,{rough:.92,x:3.2,y:1.4,z:-.2}));for(let e of[-1.6,-.4]){let t=new o(new oe(.07,.07,6,10),new v({color:`#6b6258`,roughness:.6,metalness:.4}));t.rotation.z=Math.PI/2,t.position.set(0,2.62,e),s.add(t)}let T=new ie({color:`#ffffff`,toneMapped:!1}),E=new o(new S(1.9,1.2),T);E.position.set(0,1.5,-2.79),s.add(E),s.add(U(2.06,1.36,.06,`#241a12`,{x:0,y:1.5,z:-2.83})),s.add(U(.04,.34,.04,`#1a1410`,{x:-.1,y:2.45,z:-.4}));let D=new o(new me(.1,16),new ie({color:`#ffdb8a`,toneMapped:!1}));D.position.set(-.1,2.26,-.4),D.rotation.x=Math.PI/2,s.add(D);let A=new z;A.add(U(1.3,.05,.32,`#3a2c1e`,{x:0,y:0,z:0}));let te=[`#7a3a2a`,`#2a4a6a`,`#b08a3a`,`#3a5a3a`,`#6a2a4a`];for(let e=0;e<8;e++)A.add(U(.12,.34,.24,te[e%te.length],{x:-.55+e*.14,y:.2,z:0}));A.position.set(-2.3,1.5,-2.66),s.add(A);let j=new z;j.add(U(.34,.34,.34,`#7a4a2a`,{y:.17}));let M=new z;for(let e=0;e<6;e++){let t=U(.05,.5,.14,`#3a7a3a`,{rough:.7});t.geometry.translate(0,.25,0),t.rotation.z=(e/6-.5)*1.2,t.rotation.x=Math.sin(e)*.25,M.add(t)}M.position.y=.34,j.add(M),j.position.set(2.45,0,-1.4),s.add(j),s.add(Zt(l,{x:1.9,y:2.1,z:-2.78,ry:0,face:`#d8d2c4`,rim:`#1a130c`}));let ne=new z;ne.add(U(3.4,.12,1.5,`#6e4a30`,{rough:.32,y:.86,z:1.5})),ne.add(U(3.2,.78,1.36,d,{y:.46,z:1.5}));for(let e of[.66,.4,.14])ne.add(U(.9,.2,.04,`#4a3120`,{x:1.05,y:e,z:2.2}));ne.add(U(.12,.04,.04,`#caa15a`,{x:1.05,y:.66,z:2.23,metal:.6})),i.add(ne);let N=new z;N.add(U(.06,.5,.06,`#2a1c10`,{x:-1.15,y:1.15,z:1.6}));let re=new o(new le(.22,.26,16,1,!0),new v({color:`#c2802e`,roughness:.5,side:2,emissive:`#3a2208`,emissiveIntensity:.6}));re.position.set(-1.15,1.42,1.6),N.add(re);let I=new _e(`#ffb15a`,7,7,1.8);I.position.set(-1.15,1.34,1.6),N.add(I),i.add(N);let ae=new z;ae.add(U(.62,.03,.42,`#1c1c20`,{y:.93,z:1.5,metal:.4,rough:.4}));let se=new o(new F(.62,.4,.025),new v({color:`#0a0c10`,emissive:`#2a4a6a`,emissiveIntensity:.7,roughness:.3}));se.position.set(0,1.14,1.31),se.rotation.x=-.32,ae.add(se),ae.userData.role=`laptop`,i.add(ae);let L=new z;L.add(U(.26,.07,.34,`#15151a`,{x:1,y:.93,z:1.5})),L.add(U(.3,.06,.08,`#101015`,{x:1,y:1,z:1.34})),L.userData.role=`phone`,i.add(L);let ce=new c(`#6a5238`,`#140d08`,.55);t.add(ce);let ue=new ee(`#ffd9a0`,9,9,.7,.5,1.2);ue.position.set(0,2.95,1.3),ue.target.position.set(0,.86,1.5),t.add(ue,ue.target);let de=Qt(!1),fe=Qt(!0),pe=.62,he=1.32,ge=1.22,ve=1.78,ye=new O(new k({map:de,transparent:!0,depthWrite:!1}));ye.scale.set(pe,pe,1),ye.position.set(he,ge,ve),ye.userData.role=`cat`,i.add(ye);let be=new O(new k({map:en(),transparent:!0,depthWrite:!1,opacity:0}));be.scale.set(.3,.3,1),be.raycast=()=>{},i.add(be);let B=0;function xe(){B=1.3}let Se=.62,Ce=.42,we=.34,Te=new z;Te.position.set(-.78,1.06,1.95),Te.add(U(Se,.05,we,`#3a3026`,{y:-.19}));let Ee=new o(new F(Se-.04,Ce-.08,we-.04),new v({color:`#1f9fc0`,transparent:!0,opacity:.26,roughness:.1,emissive:`#0a3a4a`,emissiveIntensity:.4,depthWrite:!1}));Ee.position.y=.02,Te.add(Ee);for(let e of[-1,1])for(let t of[-1,1])Te.add(U(.03,Ce,.03,`#20262c`,{x:e*(Se/2-.015),z:t*(we/2-.015),metal:.5}));let De=new o(new F(Se,Ce,we),new ie({visible:!1}));De.userData.role=`tank`,Te.add(De);let Oe=new _e(`#5fd8ff`,0,3,2);Te.add(Oe);let ke=[tn(`#e8a23c`),tn(`#d85a6a`),tn(`#6cc0e0`)],Ae=[],je=Ce/2-.12;for(let e=0;e<3;e++){let t=new O(new k({map:ke[e],transparent:!0,depthWrite:!1})),n=.15-e*.015;t.userData={sz:n,sp:.6+e*.22,ph:e*2.1,ax:.21*(.7+.1*e),ay:je,az:.09000000000000001,prevx:0},t.scale.set(n,n,1),Ae.push(t),Te.add(t)}let Me=nn(),Ne=[];for(let e=0;e<5;e++){let t=new O(new k({map:Me,color:`#cfeffb`,transparent:!0,opacity:.5,depthWrite:!1}));t.userData={ph:e/5,sp:.16+Math.random()*.06,x:-.1+e%3*.07},t.scale.setScalar(.03+e%2*.015),t.raycast=()=>{},Ne.push(t),Te.add(t)}let Pe=new O(new k({map:Me,color:`#c8a24a`,transparent:!0,opacity:0,depthWrite:!1}));Pe.scale.setScalar(.04),Pe.raycast=()=>{},Te.add(Pe);let Fe=0;function Ie(){Fe=3,Pe.position.set(-.05,je,0),Pe.material.opacity=1}i.add(Te);let Le=new z;for(let e=0;e<8;e++){let t=new O(new k({map:Me,color:`#ffd9a0`,transparent:!0,opacity:0,depthWrite:!1,blending:2}));t.scale.setScalar(.018),t.userData={ph:e*.9,sp:.1+e%3*.04,r:.1+e%4*.03},t.raycast=()=>{},Le.add(t)}Le.position.set(-1.15,1.2,1.6),i.add(Le);let Re=Xt(),ze=I.intensity,Be=se.material.emissiveIntensity,Ve=new P;function He(e,t,i){let a=i?i.windowGlow:0,o=a>.55;ye.material.map=o?fe:de,B>0&&(B=Math.max(0,B-e));let s=B>0?Math.sin((1.3-B)/1.3*Math.PI):0,c=o?.012*Math.sin(t*1.2):.03*Math.sin(t*2.4);ye.scale.set(pe,pe*(1+c+.12*s),1),ye.position.y=ge+.06*s,be.material.opacity=s,be.position.set(he,1.72+.5*(1-B/1.3),ve),be.scale.setScalar(.22+.1*s),Fe>0&&(Fe=Math.max(0,Fe-e),Pe.position.y=Math.max(-.09,Pe.position.y-e*.06),Pe.material.opacity=Fe>.3?1:Fe/.3);for(let e of Ae){let n=e.userData,r=Math.sin(t*n.sp+n.ph)*n.ax,i=Math.sin(t*n.sp*.8+n.ph*1.7)*n.ay*.7,a=Math.cos(t*n.sp*.6+n.ph)*n.az,o=Fe>0?Pe.position.x:r,s=Fe>0?Pe.position.y:i,c=Fe>0?Pe.position.z:a,l=Fe>0?.05:.1;e.position.x+=(o-e.position.x)*l,e.position.y+=(s-e.position.y)*l,e.position.z+=(c-e.position.z)*l,e.scale.x=(e.position.x>=n.prevx?1:-1)*n.sz,n.prevx=e.position.x}for(let e of Ne){let n=(t*e.userData.sp+e.userData.ph)%1;e.position.set(e.userData.x+Math.sin(t*2+e.userData.ph*9)*.015,-.09+2*je*n,.02),e.material.opacity=.5*Math.sin(n*Math.PI)}Oe.intensity=2.6*a,Ee.material.emissiveIntensity=.4+.9*a,I.intensity=ze*(.97+.03*Math.sin(t*7)*Math.sin(t*2.3)),se.material.emissiveIntensity=Be*(.85+.15*Math.sin(t*3.1+1)),Ve.setRGB(1,.85,.62),Le.children.forEach((e,n)=>{let r=e.userData,i=(t*r.sp+r.ph)%1;e.position.set(Math.cos(t*.5+r.ph*5)*r.r,-.15+i*.45,Math.sin(t*.4+r.ph*5)*r.r),e.material.opacity=(.1+.18*a)*Math.sin(i*Math.PI)}),M.rotation.z=Math.sin(t*.8)*.05,M.rotation.x=Math.sin(t*.6+1)*.04;let u=i?i.t%1:0;for(let e of l)e.rotation.z=-u*Math.PI*2;Re.update(e),n.position.set(r.x+Math.sin(t*.5)*.04,r.y+Math.sin(t*.7)*.02,r.z),n.lookAt(0,1.12,-1)}function Ue(e){g.map=e,y.map=e,g.needsUpdate=!0,y.needsUpdate=!0}function We(e){T.map=e,T.needsUpdate=!0}let Ge=e;function Ke(e){Ge=e===`basement`?`basement`:`corner`;let t=Ge===`corner`;return a.visible=t,s.visible=!t,ue.intensity=t?9:3.2,ce.intensity=t?.55:.78,ce.color.set(t?`#6a5238`:`#7a5a34`),Ge}return Ke(Ge),{scene:t,camera:n,update:He,setCityTexture:Ue,setVignetteTexture:We,setFitout:Ke,petCat:xe,feedFish:Ie,vignette:Re,interactables:[ae,L,ye,De],get tier(){return Ge}}}function Xt(){let e=new f;e.background=new P(`#7fb0dd`);let t=new d(-1.4,1.4,.9,-.9,0,10);t.position.set(0,0,5);let n=(e,t={})=>new ie({color:e,toneMapped:!1,...t}),r=(e,t,r,i,a,s,c)=>{let l=new o(new S(e,t),n(s,c));return l.position.set(r,i,a),l};e.add(r(3.2,.9,.5,-.95,1,`#2a4a30`)),e.add(r(3.2,.7,-.7,-1.05,2,`#1d3724`)),e.add(r(.06,.3,-.95,-.55,3,`#3a2a1a`));let i=new o(new me(.22,18),n(`#234a2a`));i.position.set(-.95,-.32,3),e.add(i),e.add(r(.04,.55,.9,-.55,3,`#20242a`));let a=new o(new me(.1,16),n(`#ffd98a`,{transparent:!0,opacity:0}));a.position.set(.9,-.26,3.1),e.add(a);let s=new o(new me(.16,24),n(`#fff4d8`));e.add(s);let c=[];for(let[t,r]of[[-1,.5],[-.6,.7],[.2,.6],[.7,.72],[1.05,.45],[-.2,.78],[.45,.4]]){let i=new o(new me(.015,8),n(`#ffffff`,{transparent:!0,opacity:0}));i.position.set(t,r,.5),c.push(i),e.add(i)}let l=new P(`#141d33`),u=new P(`#7fb6e0`),p=new P(`#d6824a`),m=new P(`#fff0cc`),h=new P(`#cdd8ef`),g=.34;function _(t){g=(g+t*.04)%1;let n=g*Math.PI*2,r=-Math.cos(n);s.position.set(Math.sin(n)*1.15,r*.66+.06,0);let i=b.smoothstep(r,-.18,.5),o=b.smoothstep(.32,0,Math.abs(r));e.background.copy(l).lerp(u,i).lerp(p,o*.45),s.material.color.copy(r>0?m:h),a.material.opacity=1-i;let d=(1-i)*.85;for(let e of c)e.material.opacity=d}return{scene:e,camera:t,update:_}}function Zt(e,{x:t,y:n,z:r,ry:i=0,face:a=`#efe2c8`,rim:s=`#2a1c10`}){let c=new z,l=new o(new me(.2,28),new v({color:s,roughness:.6})),u=new o(new me(.17,28),new v({color:a,roughness:.7}));u.position.z=.01;let d=new o(new S(.018,.14),new v({color:`#1a130c`,roughness:.5}));return d.geometry.translate(0,.05,0),d.position.z=.02,e.push(d),c.add(l,u,d),c.position.set(t,n,r),c.rotation.y=i,c}function Qt(e){let t=document.createElement(`canvas`);t.width=t.height=128;let n=t.getContext(`2d`),r=`#e08a3c`,i=`#b96a26`,a=`#3a2410`;if(n.lineJoin=`round`,e){n.fillStyle=r,n.beginPath(),n.ellipse(64,78,44,26,0,0,7),n.fill(),n.fillStyle=i,n.beginPath(),n.ellipse(64,86,44,16,0,0,7),n.fill(),n.fillStyle=r,n.beginPath(),n.arc(36,70,20,0,7),n.fill(),n.fillStyle=r,$t(n,24,56,34,44,42,58),$t(n,40,54,50,44,54,60),n.strokeStyle=i,n.lineWidth=7,n.lineCap=`round`,n.beginPath(),n.moveTo(100,70),n.quadraticCurveTo(112,90,88,96),n.stroke(),n.strokeStyle=a,n.lineWidth=2.5,n.beginPath(),n.arc(30,70,5,.1,Math.PI-.1),n.stroke(),n.strokeStyle=i,n.lineWidth=3;for(let e of[60,74,88])n.beginPath(),n.moveTo(e,58),n.lineTo(e,70),n.stroke()}else{n.fillStyle=r,n.beginPath(),n.ellipse(64,86,30,34,0,0,7),n.fill(),n.fillStyle=`#f3c98a`,n.beginPath(),n.ellipse(64,92,14,22,0,0,7),n.fill(),n.strokeStyle=i,n.lineWidth=8,n.lineCap=`round`,n.beginPath(),n.moveTo(92,100),n.quadraticCurveTo(116,86,104,60),n.stroke(),n.fillStyle=r,n.beginPath(),n.arc(64,48,24,0,7),n.fill(),n.fillStyle=r,$t(n,44,34,50,18,60,34),$t(n,84,34,78,18,68,34),n.fillStyle=`#f0b0c0`,$t(n,47,30,50,22,56,32),$t(n,81,30,78,22,72,32),n.fillStyle=a,n.beginPath(),n.arc(55,47,3.4,0,7),n.arc(73,47,3.4,0,7),n.fill(),n.fillStyle=`#e06a7a`,$t(n,61,54,67,54,64,58),n.strokeStyle=a,n.lineWidth=1.6;for(let e of[-2,3])n.beginPath(),n.moveTo(50,55+e),n.lineTo(34,53+e),n.moveTo(78,55+e),n.lineTo(94,53+e),n.stroke();n.strokeStyle=i,n.lineWidth=3;for(let e of[78,90,102])n.beginPath(),n.moveTo(50,e),n.lineTo(78,e),n.stroke()}let o=new fe(t);return o.colorSpace=D,o}function $t(e,t,n,r,i,a,o){e.beginPath(),e.moveTo(t,n),e.lineTo(r,i),e.lineTo(a,o),e.closePath(),e.fill()}function en(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`);t.fillStyle=`#ff5a8a`,t.beginPath(),t.moveTo(32,52),t.bezierCurveTo(6,32,14,10,32,24),t.bezierCurveTo(50,10,58,32,32,52),t.fill();let n=new fe(e);return n.colorSpace=D,n}function tn(e){let t=document.createElement(`canvas`);t.width=t.height=64;let n=t.getContext(`2d`);n.fillStyle=e,n.beginPath(),n.ellipse(30,32,18,11,0,0,7),n.fill(),n.beginPath(),n.moveTo(46,32),n.lineTo(60,22),n.lineTo(60,42),n.closePath(),n.fill(),n.fillStyle=`rgba(255,255,255,0.35)`,n.beginPath(),n.ellipse(28,36,12,5,0,0,7),n.fill(),n.fillStyle=`#15212a`,n.beginPath(),n.arc(20,30,2.6,0,7),n.fill();let r=new fe(t);return r.colorSpace=D,r}function nn(){let e=document.createElement(`canvas`);e.width=e.height=32;let t=e.getContext(`2d`),n=t.createRadialGradient(16,16,0,16,16,16);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.6,`rgba(255,255,255,0.7)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.beginPath(),t.arc(16,16,16,0,7),t.fill();let r=new fe(e);return r.colorSpace=D,r}function rn(e){let t=document.createElement(`canvas`);t.width=t.height=256;let n=t.getContext(`2d`),r=n.createLinearGradient(0,0,256,256);e<0?(r.addColorStop(0,`#6a3b1c`),r.addColorStop(1,`#caa15a`)):(r.addColorStop(0,`#3a4a6a`),r.addColorStop(1,`#a86a3a`)),n.fillStyle=r,n.fillRect(0,0,256,256),n.globalAlpha=.5;for(let e=0;e<5;e++)n.fillStyle=e%2?`#2a1c10`:`#e0c080`,n.fillRect(30+e*36,40+e%3*30,26,150);let i=new fe(t);return i.colorSpace=D,i}function an(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=(e,n,r)=>{let i=t.createRadialGradient(e,n,0,e,n,r);i.addColorStop(0,`rgba(255,255,255,0.95)`),i.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=i,t.beginPath(),t.arc(e,n,r,0,7),t.fill()};n(128*.42,128*.56,128*.26),n(128*.6,128*.5,128*.3),n(128*.5,128*.46,128*.22),n(128*.34,128*.54,128*.18),n(128*.7,128*.58,128*.18);let r=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5],i=t.getImageData(0,0,128,128),a=i.data;for(let e=0;e<128;e++)for(let t=0;t<128;t++){let n=(e*128+t)*4,i=a[n+3]/255,o=(r[e%4*4+t%4]+.5)/16-.5;a[n+3]=Math.max(0,Math.min(1,Math.floor(i*5+.5+o)/5))*255}t.putImageData(i,0,0);let o=new fe(e);return o.colorSpace=D,o}function on({extent:e=8,count:t=16}={}){let n=new z;n.raycast=()=>{};let r=an(),i=e+6,a=(e,t)=>e+Math.random()*(t-e),o=[];for(let e=0;e<t;e++){let e=new k({map:r,transparent:!0,depthWrite:!1,opacity:0,fog:!0}),t=new O(e),s={sp:t,mat:e,wisp:Math.random(),x:a(-i,i),z:a(-i,i),hiY:a(4,6.8),loY:a(.6,2.2),w:a(3,5.6),h:a(1.7,3),speed:a(.25,.7),op:a(.6,1)};t.raycast=()=>{},o.push(s),n.add(t)}let s=new P,c=new P(`#ffffff`),l=new P(`#5b626e`);function u(e,t,n,r){let u=r?r.cloud:0,d=r?r.fog:0,f=Math.min(1,.4+.6*u+.5*d);s.copy(n.sky).lerp(c,.62),s.lerp(l,.6*u);for(let n=0;n<o.length;n++){let r=o[n],c=n/o.length<f;r.x+=r.speed*e*(.6+.8*u),r.x>i&&(r.x=-i,r.z=a(-i,i));let l=Math.min(sn(r.x,-i,-i+3),1-sn(r.x,i-3,i)),p=r.hiY*(1-d)+r.loY*d,m=1-.5*r.wisp,h=.72*Math.max(0,1-d-u)+1*u+.42*d,g=c?Math.max(0,h)*r.op*m*l:0;r.mat.opacity+=(g-r.mat.opacity)*Math.min(1,e*2.5),r.mat.color.copy(s);let _=r.w*(1+.6*d)*(1+.4*r.wisp),v=r.h*(1-.35*d);r.sp.scale.set(_,v,1),r.sp.position.set(r.x,p+Math.sin(t*.3+n)*.15,r.z)}}function d(e){r=e;for(let t of o)t.mat.map=e,t.mat.needsUpdate=!0}return{group:n,update:u,setTexture:d,get count(){return o.length}}}function sn(e,t,n){let r=Math.max(0,Math.min(1,(e-t)/(n-t)));return r*r*(3-2*r)}var cn=`varying vec2 vUv;

void main() {
  
  
  
  vUv = uv;

  
  
  
  
  
  
  
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,ln=`precision highp float;

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
}`,vn=220,yn=new URLSearchParams(window.location.search),bn=yn.get(`demo`)===`1`||yn.has(`capture`);window.__demo=bn;var xn={night:[`#0A0C16`,`#1C2236`,`#3A3A52`,`#5A5A78`,`#8A92B0`],dawn:[`#1A1008`,`#43281A`,`#7A4A30`,`#B07A4E`,`#E8A86A`],noon:[`#16100A`,`#3A2F1E`,`#6B563A`,`#937B54`,`#B89968`],dusk:[`#140A0A`,`#3E1E1A`,`#7A3828`,`#B85A36`,`#F0884A`]},Sn={night:[`#020604`,`#06180E`,`#10401E`,`#1E9040`,`#7FE0FF`],dawn:[`#060603`,`#1A2410`,`#3A6B22`,`#6CC040`,`#FFC060`],noon:[`#050805`,`#0E2912`,`#1E6B2F`,`#3CF06A`,`#FFB000`],dusk:[`#080402`,`#241408`,`#6B4A12`,`#E0A030`,`#FF7030`]},W=new se({antialias:!0,preserveDrawingBuffer:!0});W.shadowMap.enabled=!0,W.shadowMap.type=1,W.setPixelRatio(Math.min(window.devicePixelRatio,2)),W.setSize(window.innerWidth,window.innerHeight),W.setClearColor(920327,1),document.body.appendChild(W.domElement);var G=W.getDrawingBufferSize(new N),K=new f;K.fog=new j(10465470,0);var Cn=new P(`#aeb6c0`),wn=.062,Tn=new P(`#74508f`),En=new P,q=Ne({aspect:window.innerWidth/window.innerHeight}),J=vt({t:.5}),Dn=256,On={type:C,format:p,minFilter:y,magFilter:y,wrapS:ne,wrapT:ne,depthBuffer:!1,stencilBuffer:!1},kn=[new L(Dn,Dn,On),new L(Dn,Dn,On),new L(Dn,Dn,On)];for(let e of kn)W.setRenderTarget(e),W.clear();W.setRenderTarget(null);var An=new f,jn=new d(-1,1,1,-1,0,1),Mn=new g({vertexShader:r,fragmentShader:un,uniforms:{uCurr:{value:null},uPrev:{value:null},uTexel:{value:new N(1/Dn,1/Dn)},uMouse:{value:new N(-1,-1)},uMouseStrength:{value:0},uC2:{value:.25},uDamping:{value:.992},uRainCount:{value:0},uRainDrops:{value:Array.from({length:8},()=>new R)},uWakeCount:{value:0},uWakeDrops:{value:Array.from({length:8},()=>new R)}}});An.add(new o(new S(2,2),Mn));var Nn=new L(G.x,G.y,{minFilter:u,magFilter:u,depthBuffer:!0,stencilBuffer:!1});function Pn(e){let t=document.createElement(`canvas`);t.width=t.height=1024;let n=t.getContext(`2d`);n.fillStyle=e?`#0c1418`:`#15110b`,n.fillRect(0,0,1024,1024),n.strokeStyle=e?`rgba(120,150,170,0.22)`:`rgba(184,153,104,0.30)`,n.lineWidth=2;for(let e=0;e<=1024;e+=64)n.beginPath(),n.moveTo(e,0),n.lineTo(e,1024),n.stroke(),n.beginPath(),n.moveTo(0,e),n.lineTo(1024,e),n.stroke();e||(n.fillStyle=`#B89968`,n.font=`bold 360px Georgia, serif`,n.textAlign=`center`,n.textBaseline=`middle`,n.fillText(`LGR`,512,470),n.font=`600 64px ui-monospace, monospace`,n.fillText(`WEB · STUDIO`,512,720));let r=new fe(t);return r.colorSpace=D,r}var Fn=28,In=new o(new S(Fn,Fn),new ie({map:Pn(bn)}));In.rotation.x=-Math.PI/2,In.position.y=-.35,K.add(In);var Ln=new o(new S(40,24),new g({depthWrite:!1,vertexShader:cn,fragmentShader:ln,uniforms:{uTime:{value:0},uInk:{value:J.horizon},uGold:{value:J.sky},uFogColor:{value:En},uFogAmt:{value:0},uFogCharm:Be}}));Ln.position.set(0,3,-8),K.add(Ln);var Rn=new g({vertexShader:dn,fragmentShader:fn,uniforms:{uHeight:{value:null},uScene:{value:Nn.texture},uTexel:{value:new N(1/Dn,1/Dn)},uResolution:{value:new N(G.x,G.y)},uDisplace:{value:.42},uNormalStrength:{value:22},uRefractStrength:{value:.06},uChromaScale:{value:1},uNormalMatrix:{value:new I},uLightDir:{value:J.sunDir},uInk:{value:new P(`#2A2218`)},uGold:{value:new P(`#B89968`)},uVector:Pe,uVecWater:{value:new P(`#1fb8d8`)},uVecTint:{value:Fe}}}),zn=new o(new S(Fn,Fn,Dn-1,Dn-1),Rn);zn.rotation.x=-Math.PI/2,zn.updateMatrixWorld(!0),Rn.uniforms.uNormalMatrix.value.getNormalMatrix(zn.matrixWorld),K.add(zn);var Bn={value:0},Vn=new URLSearchParams(window.location.search),Hn=(Vn.get(`city`)?Number(Vn.get(`city`)):0)||Math.random()*1e9|0,Un=Math.max(0,Qe.indexOf(Vn.get(`profile`)||`manhattan`)),Wn=Vt({windowGlow:Bn}),Y=ut({seed:Hn,profileIndex:Un,landmarkFactory:Wn,windowGlow:Bn});K.add(Y.group);var Gn=Ct({plinthTop:.3,extent:Y.extent,profile:Y.state.profile});K.add(Gn.group);var Kn=kt({extent:Y.extent,waterSize:Fn,plinthTop:.3});K.add(Kn.group),Mn.uniforms.uWakeDrops.value=Kn.wakeDrops;var X=Jt({extent:Y.extent});K.add(X.group),Mn.uniforms.uRainDrops.value=X.rainDrops;var qn=on({extent:Y.extent});K.add(qn.group);var Jn=[0,.33,.66,1],Yn=0;window.__season=Jn[Yn],Y.group.remove(Y.key),K.add(Y.key),Y.key.castShadow=!0,Y.key.shadow.mapSize.set(2048,2048),Y.key.shadow.bias=-18e-5,Y.key.shadow.normalBias=.028,K.add(Y.key.target);function Xn(){let e=Y.key.shadow.camera,t=Y.extent+4.5;e.left=-t,e.right=t,e.top=t,e.bottom=-t,e.near=1,e.far=Zn*2,e.updateProjectionMatrix()}var Zn=24;Xn();var Qn=!0;window.__shadows=Qn;function $n(){Y.generate(Hn,Un),Rn.uniforms.uVecWater.value.set(Y.waterColor),Gn.setProfile(Y.state.profile),Xn(),Ei()}Wn.whenReady.then(()=>{$n(),window.__cityReady=!0}),Rn.uniforms.uVecWater.value.set(Y.waterColor);var er=new re(G.x,G.y),tr=new L(G.x,G.y,{minFilter:u,magFilter:u,depthBuffer:!0,stencilBuffer:!1,depthTexture:er}),nr=new L(G.x,G.y,{minFilter:u,magFilter:u,depthBuffer:!1,stencilBuffer:!1}),rr=new L(G.x,G.y,{minFilter:u,magFilter:u,depthBuffer:!1,stencilBuffer:!1}),ir=new L(G.x,G.y,{minFilter:u,magFilter:u,depthBuffer:!1,stencilBuffer:!1}),ar=new f,or=new d(-1,1,1,-1,0,1),sr=new o(new S(2,2));ar.add(sr);var cr=new g({vertexShader:r,fragmentShader:pn,uniforms:{uScene:{value:tr.texture},uTime:{value:0},uResolution:{value:new N(G.x,G.y)},uGrain:{value:1},uChroma:{value:1},uExposure:{value:1}}}),lr=5,ur=e=>{let t=e.map(e=>new P(e));for(;t.length<8;)t.push(new P(0,0,0));return t},dr=[`night`,`dawn`,`noon`,`dusk`],fr={inkgold:dr.map(e=>ur(xn[e])),terminal:dr.map(e=>ur(Sn[e]))},pr=new g({vertexShader:r,fragmentShader:mn,uniforms:{uScene:{value:nr.texture},uResolution:{value:new N(G.x,G.y)},uPixelSize:{value:vn},uPalette:{value:fr.inkgold[2]},uPaletteB:{value:fr.inkgold[2]},uPaletteBlend:{value:0},uPaletteSize:{value:lr}}});function mr(e){let t=Yr?fr.terminal:fr.inkgold,n=e%1*4,r=Math.floor(n)%4;pr.uniforms.uPalette.value=t[r],pr.uniforms.uPaletteB.value=t[(r+1)%4],pr.uniforms.uPaletteBlend.value=n-Math.floor(n)}var hr=new g({vertexShader:r,fragmentShader:t,uniforms:{uScene:{value:nr.texture},uResolution:{value:new N(G.x,G.y)},uGridWidth:{value:160},uDither:{value:.55},uPalette:{value:e(i[`8-bit`].palette)},uPaletteSize:{value:1},uUsePalette:{value:1}}}),gr={};for(let t of n)gr[t]=i[t].palette?e(i[t].palette):null;var _r=[`native`,...n],vr=`native`;window.__era=vr;function yr(e){let t=i[e];t&&(hr.uniforms.uGridWidth.value=t.gridWidth,hr.uniforms.uDither.value=t.dither,hr.uniforms.uUsePalette.value=+!!t.palette,t.palette&&(hr.uniforms.uPalette.value=gr[e],hr.uniforms.uPaletteSize.value=t.palette.length))}function br(){vr!==`native`&&yr(vr)}var xr=()=>vr===`native`?pr:hr,Sr=new g({vertexShader:r,fragmentShader:hn,uniforms:{uScene:{value:nr.texture},uDepth:{value:er},uResolution:{value:new N(G.x,G.y)},uBands:{value:4},uToonGain:{value:1.7},uToonGamma:{value:.6},uToonFloor:{value:J.toonFloor},uOutline:{value:J.outline},uNear:{value:.1},uFar:{value:100},uIsPerspective:{value:1}}}),Cr=new g({vertexShader:r,fragmentShader:gn,uniforms:{uToon:{value:rr.texture},uPixel:{value:ir.texture},uBlend:{value:0}}});function wr(e,t){sr.material=e,W.setRenderTarget(t),W.render(ar,or)}var Z=Yt({tier:`corner`});Z.camera.aspect=window.innerWidth/window.innerHeight,Z.camera.updateProjectionMatrix();var Tr=new _(55,1.4,.1,100);Tr.position.set(2.2,3.4,11.5),Tr.lookAt(0,2,0);var Er=new L(1024,720,{minFilter:u,magFilter:u,depthBuffer:!0,stencilBuffer:!1});Z.setCityTexture(Er.texture);var Dr=new L(512,320,{minFilter:u,magFilter:u,depthBuffer:!0,stencilBuffer:!1});Z.setVignetteTexture(Dr.texture);var Or=new L(G.x,G.y,{minFilter:u,magFilter:u,depthBuffer:!1,stencilBuffer:!1}),kr=new L(G.x,G.y,{minFilter:u,magFilter:u,depthBuffer:!1,stencilBuffer:!1}),Ar=new g({vertexShader:r,fragmentShader:_n,uniforms:{uCity:{value:Or.texture},uOffice:{value:kr.texture},uT:{value:0},uFocus:{value:new N(.5,.5)}}}),Q=`city`,jr=0,Mr=4.6;window.__scene=Q;var Nr=null;function Pr(e){Q===`city`&&(Ar.uniforms.uFocus.value.copy(e||new N(.5,.5)),Q=`diving-in`,window.__scene=Q)}function Fr(){Q!==`office`&&Q!==`diving-in`||(Q=`diving-out`,window.__scene=Q)}var Ir=!1,Lr=(()=>{if(typeof document>`u`)return{showLap(){},toast(){},flash(){}};let e=document.createElement(`style`);e.textContent=`
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
    </div></div>`;let n=document.createElement(`div`);n.className=`otoast`;let r=document.createElement(`div`);r.className=`oflash`,document.body.append(t,n,r),t.querySelector(`.lap-x`).addEventListener(`click`,()=>zr()),t.addEventListener(`click`,e=>{e.target===t&&zr()});let i=0;return{showLap(e){t.classList.toggle(`on`,e)},toast(e){n.textContent=e,n.classList.add(`on`),clearTimeout(i),i=setTimeout(()=>n.classList.remove(`on`),1400)},flash(){r.style.transition=`none`,r.style.opacity=`0.85`,requestAnimationFrame(()=>{r.style.transition=`opacity .55s`,r.style.opacity=`0`})}}})();function Rr(){Ir=!0,Lr.showLap(!0)}function zr(){Ir=!1,Lr.showLap(!1)}function Br(){Un=(Un+1)%Ze.length,Lr.flash(),$n(),Lr.toast(`✈  `+Y.state.profile.name),window.__profile=Y.state.profile.key}function Vr(e){let t=Z.setFitout(e);return Lr.toast(t===`basement`?`🏚  Basement office`:`🏙  Corner office`),window.__tier=t,t}function Hr(){return Vr(Z.tier===`corner`?`basement`:`corner`)}window.__tier=Z.tier;function Ur(e,t){zn.visible=!1,W.setRenderTarget(Nn),W.render(K,e),zn.visible=!0,W.setRenderTarget(t),W.render(K,e)}function Wr(e,t){if(zn.visible=!1,W.setRenderTarget(Nn),W.render(K,q.camera),zn.visible=!0,$===1||Xr&&$!==7&&$!==8)W.setRenderTarget(t),W.render(K,q.camera);else if(W.setRenderTarget(tr),W.render(K,q.camera),$===2)cr.uniforms.uGrain.value=1,cr.uniforms.uChroma.value=1,wr(cr,t);else{cr.uniforms.uGrain.value=0,cr.uniforms.uChroma.value=0,wr(cr,nr);let n=q.camera;Sr.uniforms.uNear.value=n.near,Sr.uniforms.uFar.value=n.far,Sr.uniforms.uIsPerspective.value=+!!n.isPerspectiveCamera;let r=e.era?(yr(e.era),hr):xr();e.kind===`pixel`?(wr(r,t),window.__style=`pixel`):e.kind===`toon`?(wr(Sr,t),window.__style=`toon`):(wr(Sr,rr),wr(r,ir),Cr.uniforms.uBlend.value=e.blend,wr(Cr,t),window.__style=`blend`)}}var Gr=.3,Kr=.46,qr=.62,Jr=.8,$=3,Yr=!1,Xr=!1;window.__mode=$,window.__camMode=q.mode,window.__vector=Xr,window.addEventListener(`keydown`,e=>{(e.key===`1`||e.key===`2`||e.key===`3`)&&($=Number(e.key),window.__mode=$),(e.key===`7`||e.key===`8`)&&($=Number(e.key),window.__mode=$),e.key===`4`&&(q.setMode(B.PERSPECTIVE),window.__camMode=q.mode),e.key===`5`&&(q.setMode(B.ISOMETRIC),window.__camMode=q.mode),e.key===`6`&&(q.setMode(B.DIMETRIC),window.__camMode=q.mode),e.key===`ArrowLeft`&&(q.pan(-1,0),e.preventDefault()),e.key===`ArrowRight`&&(q.pan(1,0),e.preventDefault()),e.key===`ArrowUp`&&(q.pan(0,1),e.preventDefault()),e.key===`ArrowDown`&&(q.pan(0,-1),e.preventDefault()),e.key===`0`&&(Xr=!Xr,Pe.value=+!!Xr,window.__vector=Xr),(e.key===`w`||e.key===`W`)&&(X.cycle(),window.__weather=X.kind),(e.key===`k`||e.key===`K`)&&(Yn=(Yn+1)%Jn.length,window.__season=Jn[Yn]),(e.key===`g`||e.key===`G`)&&(Hn=Math.random()*1e9|0,$n()),(e.key===`c`||e.key===`C`)&&(Un=(Un+1)%Ze.length,$n()),(e.key===`h`||e.key===`H`)&&(Qn=!Qn,window.__shadows=Qn),(e.key===`p`||e.key===`P`)&&(Yr=!Yr),(e.key===`b`||e.key===`B`)&&(vr=_r[(_r.indexOf(vr)+1)%_r.length],window.__era=vr,br()),(e.key===`t`||e.key===`T`)&&J.cyclePreset(),e.key===`[`&&J.nudge(-.5),e.key===`]`&&J.nudge(.5),e.key===`9`&&(J.toggleAuto(),window.__auto=J.auto),e.key===`Escape`&&(Ir?zr():Fr()),(e.key===`o`||e.key===`O`)&&(Q===`city`?Pr():Fr()),(e.key===`f`||e.key===`F`)&&Q!==`city`&&Hr(),(e.key===`m`||e.key===`M`)&&Nr&&Nr.toggle()});var Zr=window.matchMedia(`(prefers-reduced-motion: reduce)`);J.setReducedMotion(Zr.matches),Zr.addEventListener(`change`,e=>J.setReducedMotion(e.matches));var Qr=new T,$r=new N,ei=!1,ti=!1,ni=0,ri=0,ii=.005,ai=(e,t)=>{$r.x=e/window.innerWidth*2-1,$r.y=-(t/window.innerHeight)*2+1},oi=0,si=0,ci=0;function li(){return Qr.setFromCamera($r,q.camera),Qr.intersectObject(Y.group,!0)[0]?new N($r.x*.5+.5,$r.y*.5+.5):null}function ui(){Qr.setFromCamera($r,Z.camera);let e=Qr.intersectObjects(Z.interactables,!0)[0];if(!e)return null;let t=e.object;for(;t&&!t.userData.role;)t=t.parent;return t?t.userData.role:null}W.domElement.addEventListener(`contextmenu`,e=>e.preventDefault()),W.domElement.addEventListener(`mousedown`,e=>{e.button===0&&(ei=Q===`city`,ai(e.clientX,e.clientY),oi=e.clientX,si=e.clientY,ci=performance.now()),e.button===2&&(ti=!0,ni=e.clientX,ri=e.clientY)}),window.addEventListener(`mousemove`,e=>{ei&&ai(e.clientX,e.clientY),ti?(q.orbit(-(e.clientX-ni)*ii,-(e.clientY-ri)*ii),ni=e.clientX,ri=e.clientY):Q===`city`&&!ei?(ai(e.clientX,e.clientY),W.domElement.style.cursor=li()?`pointer`:`default`):Q===`office`&&(ai(e.clientX,e.clientY),W.domElement.style.cursor=ui()?`pointer`:`default`)}),window.addEventListener(`mouseup`,e=>{let t=Math.hypot(e.clientX-oi,e.clientY-si)<6&&performance.now()-ci<350;if(ei&&Q===`city`&&t){ai(e.clientX,e.clientY);let t=li();t&&Pr(t)}else if(Q===`office`&&t&&!Ir){ai(e.clientX,e.clientY);let t=ui();t===`laptop`?Rr():t===`phone`?Br():t===`cat`?Z.petCat():t===`tank`&&Z.feedFish()}ei=!1,ti=!1}),W.domElement.addEventListener(`wheel`,e=>{e.preventDefault(),q.zoomBy(Math.exp(e.deltaY*.0015))},{passive:!1});var di=0,fi=(e,t)=>[(e.clientX+t.clientX)/2,(e.clientY+t.clientY)/2],pi=(e,t)=>Math.hypot(e.clientX-t.clientX,e.clientY-t.clientY),mi=!1;W.domElement.addEventListener(`touchstart`,e=>{e.touches.length===1&&(ei=Q===`city`,ai(e.touches[0].clientX,e.touches[0].clientY),oi=e.touches[0].clientX,si=e.touches[0].clientY,ci=performance.now(),mi=!1),e.touches.length===2&&(ei=!1,ti=!0,[ni,ri]=fi(e.touches[0],e.touches[1]),di=pi(e.touches[0],e.touches[1]))},{passive:!1}),W.domElement.addEventListener(`touchmove`,e=>{if(e.preventDefault(),e.touches.length===1)ai(e.touches[0].clientX,e.touches[0].clientY),Math.hypot(e.touches[0].clientX-oi,e.touches[0].clientY-si)>8&&(mi=!0);else if(e.touches.length===2){let[t,n]=fi(e.touches[0],e.touches[1]);q.orbit(-(t-ni)*ii,-(n-ri)*ii),ni=t,ri=n;let r=pi(e.touches[0],e.touches[1]);di>0&&q.zoomBy(di/r),di=r}},{passive:!1}),window.addEventListener(`touchend`,e=>{if(!mi&&performance.now()-ci<350&&(!e.touches||e.touches.length===0)){if(Q===`city`){let e=li();e&&Pr(e)}else if(Q===`office`&&!Ir){let e=ui();e===`laptop`?Rr():e===`phone`?Br():e===`cat`?Z.petCat():e===`tank`&&Z.feedFish()}}ei=!1,ti=!1,di=0,e.touches&&e.touches.length===1&&(ei=!0)});var hi=new a;hi.connect(document);var gi=0,_i=performance.now();function vi(){if($===1||$===2)return{kind:`none`};if($===7)return{kind:`pixel`};if($===8)return{kind:`toon`};let e=q.styleT;return window.__styleT=e,e<=Gr?{kind:`toon`}:e>=Kr?{kind:`pixel`,era:e<qr?`16-bit`:e<Jr?`8-bit`:`gb`}:{kind:`blend`,blend:b.smoothstep(e,Gr,Kr),era:`16-bit`}}var yi={"16-bit":`16-bit`,"8-bit":`8-bit`,gb:`Game Boy`,modern:`Modern`,native:`Pixel`,"1-bit":`1-bit`};function bi(e){return $===1||$===2?``:Xr&&$!==7&&$!==8?`Vector`:e.kind===`toon`?`Toon`:e.kind===`pixel`?yi[e.era||vr]||`Pixel`:e.kind===`blend`?`Toon → `+(yi[e.era]||`Pixel`):``}var xi=bn?null:document.querySelector(`.hint`);if(bn){let e=document.querySelector(`.hint`);e&&(e.style.display=`none`)}var Si=xi?xi.textContent:``,Ci=``,wi=``;function Ti(e){!xi||e===Ci||(Ci=e,xi.textContent=`${Si} · ${wi} · ${e}`)}function Ei(){wi=`seed ${Y.state.seed} · ${Y.state.profile.name}`,window.__profile=Y.state.profile.key,Ci=``}Ei();function Di(){hi.update();let e=Math.min(hi.getDelta(),.1);q.update(e),Ln.material.uniforms.uTime.value=hi.getElapsed(),cr.uniforms.uTime.value=hi.getElapsed(),J.update(e),Y.key.position.copy(J.sunDir).multiplyScalar(Zn),Y.key.color.copy(J.sunColor),Y.key.intensity=J.sunIntensity,Y.fill.color.copy(J.hemiSky),Y.fill.groundColor.copy(J.hemiGround),Bn.value=J.windowGlow;let t=X.overcast;Y.key.intensity*=1-.5*t,Y.key.color.lerp(Cn,.45*t),Y.fill.intensity=1+.7*t;let n=b.smoothstep(J.sunDir.y,.06,.34),r=b.lerp(.28,1,1-J.windowGlow),i=Qn?n*r:0;Y.key.shadow.intensity=.72*i,Ie.value=.52*i;let a=1-J.windowGlow;Fe.setRGB(b.lerp(.46,1,a),b.lerp(.52,1,a),b.lerp(.74,1,a)),cr.uniforms.uExposure.value=J.exposure,Sr.uniforms.uToonGain.value=J.toonGain,W.setClearColor(J.horizon,1),mr(J.t),Ti(J.clock),window.__t=J.t,Gn.update(e,hi.getElapsed(),J),Y.update(hi.getElapsed()),Kn.update(e,hi.getElapsed(),J),Mn.uniforms.uWakeCount.value=Kn.wakeCount,X.update(e,hi.getElapsed()),Mn.uniforms.uRainCount.value=X.rainDropCount;let o=X.fog*(1-a);K.fog.density=X.fog*wn,En.copy(J.horizon).lerp(Tn,.85*o),K.fog.color.copy(En),W.setClearColor(En,1),Be.value=X.fog,Ln.material.uniforms.uFogAmt.value=.7*X.fog,Le.value=X.snow,Re.value=X.cloud*.55,ze.x+=e*.018,ze.y+=e*.009,Ve.value+=(Jn[Yn]-Ve.value)*Math.min(1,e*1.5),qn.update(e,hi.getElapsed(),J,X);let s=vi(),c=s.kind===`toon`?1:s.kind===`blend`?1-s.blend:0;Rn.uniforms.uChromaScale.value=b.lerp(1,.5,c),Nr&&Nr.setStyleHint(Q===`city`?bi(s):``),gi++;let l=performance.now();l-_i>=1e3&&(window.__fps=gi,gi=0,_i=l);let u=0;if(ei&&Q===`city`){Qr.setFromCamera($r,q.camera);let e=Qr.intersectObject(zn)[0];e&&e.uv&&(Mn.uniforms.uMouse.value.copy(e.uv),u=.06)}Mn.uniforms.uMouseStrength.value=u;let[d,f,p]=kn;Mn.uniforms.uPrev.value=d.texture,Mn.uniforms.uCurr.value=f.texture,W.setRenderTarget(p),W.render(An,jn),kn=[f,p,d],Rn.uniforms.uHeight.value=kn[1].texture,jr+=(+(Q===`office`||Q===`diving-in`)-jr)*Math.min(1,e*Mr),Q===`diving-in`&&jr>.992&&(jr=1,Q=`office`,window.__scene=Q),Q===`diving-out`&&jr<.008&&(jr=0,Q=`city`,window.__scene=Q),Q===`city`?Wr(s,null):(Z.update(e,hi.getElapsed(),J),Z.tier===`basement`?(W.setRenderTarget(Dr),W.render(Z.vignette.scene,Z.vignette.camera)):Ur(Tr,Er),Q===`office`?(W.setRenderTarget(null),W.render(Z.scene,Z.camera)):(Wr(s,Or),W.setRenderTarget(kr),W.render(Z.scene,Z.camera),Ar.uniforms.uT.value=jr,wr(Ar,null))),requestAnimationFrame(Di)}var Oi={at:(e,t)=>{ai(e,t),ei=!0},stop:()=>{ei=!1}};function ki(){let e=window.__style||($===1?`raw`:$===2?`filmic`:`auto`);return{lesson:23,clock:J.clock,style:(Xr?`vec-`:``)+e,profile:Y.state.profile.key,weather:X.kind,scene:Q}}Ut({renderer:W,rig:q,sunRig:J,poke:Oi,getState:ki,office:{pet:()=>Z.petCat(),feed:()=>Z.feedFish(),laptop:()=>Rr(),closeLaptop:()=>zr(),travel:()=>Br(),fitout:()=>Hr()}});var Ai=e=>window.dispatchEvent(new KeyboardEvent(`keydown`,{key:e})),ji={cam:e=>Ai({iso:`5`,dimetric:`6`,persp:`4`}[e]),style:e=>{e===`auto`?(Ai(`3`),Xr&&Ai(`0`)):e===`vector`?(Xr||Ai(`0`),($===7||$===8)&&Ai(`2`)):e===`pixel`?Ai(`7`):e===`toon`&&Ai(`8`)},era:()=>Ai(`b`),city:()=>Ai(`C`),shuffle:()=>Ai(`G`),weather:()=>Ai(`W`),season:()=>Ai(`K`),office:()=>Ai(`o`),time:e=>J.goTo(e),auto:()=>Ai(`9`)};Nr=Kt({controls:ji,state:()=>({cam:{4:`persp`,5:`iso`,6:`dimetric`}[q.mode],style:$===7?`pixel`:$===8?`toon`:Xr?`vector`:`auto`,era:vr,auto:J.auto,t:J.t,weather:X.kind,season:Yn,office:Q!==`city`}),show:yn.get(`ui`)!==`0`&&!yn.has(`capture`),coarse:window.matchMedia&&window.matchMedia(`(pointer: coarse)`).matches});var Mi=yn.get(`cam`);Mi&&[`iso`,`dimetric`,`persp`].includes(Mi)&&ji.cam(Mi);var Ni=yn.get(`style`);[`vector`,`pixel`,`toon`].includes(Ni)&&ji.style(Ni);var Pi=yn.get(`t`);Pi!==null&&Pi!==``&&!Number.isNaN(parseFloat(Pi))&&J.goTo(parseFloat(Pi));var Fi=yn.get(`time`);Fi&&J.goTo({dawn:.25,noon:.5,dusk:.75,night:0}[Fi]??.5);var Ii=yn.get(`weather`);[`clear`,`rain`,`snow`,`fog`].includes(Ii)&&(X.setKind(Ii),window.__weather=X.kind);var Li=yn.get(`office`);(Li===`1`||Li===`corner`||Li===`basement`)&&(Li===`basement`&&Vr(`basement`),Q=`office`,jr=1,window.__scene=Q),Di(),window.addEventListener(`resize`,()=>{q.setViewport(window.innerWidth,window.innerHeight),W.setSize(window.innerWidth,window.innerHeight);let e=W.getDrawingBufferSize(new N);Nn.setSize(e.x,e.y),tr.setSize(e.x,e.y),nr.setSize(e.x,e.y),rr.setSize(e.x,e.y),ir.setSize(e.x,e.y),Or.setSize(e.x,e.y),kr.setSize(e.x,e.y),Z.camera.aspect=window.innerWidth/window.innerHeight,Z.camera.updateProjectionMatrix(),Rn.uniforms.uResolution.value.set(e.x,e.y),cr.uniforms.uResolution.value.set(e.x,e.y),pr.uniforms.uResolution.value.set(e.x,e.y),hr.uniforms.uResolution.value.set(e.x,e.y),Sr.uniforms.uResolution.value.set(e.x,e.y)});