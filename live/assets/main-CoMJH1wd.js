import{i as e,o as t,r as n,s as r,t as i}from"./pixelkit-CCtX23sd.js";import{$ as a,A as o,B as s,C as c,D as l,E as u,F as d,G as f,H as p,I as m,J as h,K as g,L as _,M as v,N as y,O as b,P as x,Q as S,R as C,S as w,T,U as E,V as D,W as ee,X as O,Y as te,Z as k,_ as A,a as ne,at as j,c as re,d as M,et as N,f as P,g as ie,i as F,it as ae,j as I,k as L,l as oe,m as se,n as ce,o as le,ot as R,p as ue,q as z,r as de,rt as fe,s as B,st as pe,t as me,tt as he,u as ge,v as _e,w as ve,x as ye,y as be,z as xe}from"./three-C3htDmZ3.js";var Se=Math.atan(1/Math.SQRT2),Ce=Math.atan(.5),we=Math.PI/4,Te={PERSPECTIVE:4,ISOMETRIC:5,DIMETRIC:6},Ee=.12,De=1.45,Oe=4,ke=40,Ae=1.5,je=16,Me=6,Ne=22,Pe=3.5,Fe=11,Ie=(e,t,n)=>e+(t-e)*(1-Math.exp(-8*n)),Le=(e,t)=>e+Math.PI*2*Math.round((t-e)/(Math.PI*2));function Re({aspect:e,fov:t=48,near:n=.1,far:r=100,target:i=new R(0,.8,0),azimuth:a=we,elevation:o=.52,distance:c=12,zoom:l=5.5}={}){let u=new s(t,e,n,r),d=new C(-1,1,1,-1,n,r),f=Te.PERSPECTIVE,p=e,m={azimuth:a,elevation:o,distance:c,zoom:l,target:i.clone()},h={azimuth:a,elevation:o,distance:c,zoom:l,target:i.clone()},g=!1,_=()=>f===Te.PERSPECTIVE?u:d;function v(e){e!==f&&(f=e,f===Te.ISOMETRIC||f===Te.DIMETRIC?(m.elevation=f===Te.ISOMETRIC?Se:Ce,m.azimuth=Le(we,h.azimuth),g=!0):g=!1)}function y(e,t){m.azimuth+=e,g||(m.elevation=I.clamp(m.elevation+t,Ee,De))}function b(e){f===Te.PERSPECTIVE?m.distance=I.clamp(m.distance*e,Oe,ke):m.zoom=I.clamp(m.zoom*e,Ae,je)}function x(e,t){let n=m.azimuth,r=f===Te.PERSPECTIVE?m.distance*.04:m.zoom*.08,i=new R(Math.cos(n),0,-Math.sin(n)),a=new R(-Math.sin(n),0,-Math.cos(n));m.target.addScaledVector(i,e*r),m.target.addScaledVector(a,t*r)}function S(e,t){p=e/t,u.aspect=p,u.updateProjectionMatrix()}function w(e){h.azimuth=Ie(h.azimuth,m.azimuth,e),h.elevation=Ie(h.elevation,m.elevation,e),h.distance=Ie(h.distance,m.distance,e),h.zoom=Ie(h.zoom,m.zoom,e),h.target.x=Ie(h.target.x,m.target.x,e),h.target.y=Ie(h.target.y,m.target.y,e),h.target.z=Ie(h.target.z,m.target.z,e);let t=Math.cos(h.elevation),n=Math.sin(h.elevation),r=Math.cos(h.azimuth),i=Math.sin(h.azimuth),a=_();if(a.position.set(h.target.x+h.distance*t*i,h.target.y+h.distance*n,h.target.z+h.distance*t*r),a.lookAt(h.target),a.isOrthographicCamera){let e=h.zoom,t=e*p;a.left=-t,a.right=t,a.top=e,a.bottom=-e,a.updateProjectionMatrix()}}function T(e,t,n,r=!1){m.target.set(e,t,n),r&&h.target.copy(m.target)}function E(e,t=!1){m.zoom=I.clamp(e,Ae,je),t&&(h.zoom=m.zoom)}return{get camera(){return _()},get mode(){return f},get azimuth(){return h.azimuth},setTarget:T,setZoom:E,get styleT(){return f===Te.PERSPECTIVE?I.clamp((h.distance-Me)/(Ne-Me),0,1):I.clamp((h.zoom-Pe)/(Fe-Pe),0,1)},setMode:v,orbit:y,zoomBy:b,pan:x,setViewport:S,update:w}}var ze={value:0},V=new P(`#ffffff`),H={value:0},Be={value:0},Ve={value:0},He=new j,Ue={value:0},We={value:0},Ge=`
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
`;function Ke(e){e.uniforms.uVector=ze,e.uniforms.uVecTint={value:V},e.uniforms.uVecShadow=H,e.uniforms.uSnow=Be,e.uniforms.uCloud=Ve,e.uniforms.uCloudOff={value:He},e.uniforms.uFogCharm=Ue}function qe(e){return e.replace(`#include <fog_fragment>`,`
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
#include <shadowmask_pars_fragment>`)}var Xe=`col *= mix(1.0, getShadowMask(), uVecShadow);`;function Ze(e,{color:t,id:n,windowGlow:r,winColors:i=[`#ffb852`,`#8cd9ff`],litFrac:a=.55}={}){let o=[0,1,2].map(e=>new P(i[e]??i[i.length-1]));return e.customProgramCacheKey=()=>`lgr-vec-tower`,e.onBeforeCompile=e=>{Ke(e),e.uniforms.uWindowGlow=r,e.uniforms.uWinId={value:n},e.uniforms.uVecColor={value:new P(t)},e.uniforms.uWinA={value:o[0]},e.uniforms.uWinB={value:o[1]},e.uniforms.uWinC={value:o[2]},e.uniforms.uWinLit={value:a},e.vertexShader=Je(e.vertexShader),e.fragmentShader=qe(Ye(e.fragmentShader.replace(`#include <common>`,`#include <common>
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
        }`)))},e}function U(e,{color:t=null,glow:n=null,glowDay:r=0,glowNight:i=1,windowGlow:a=null,season:o=!1}={}){let s=t===null,c=n!==null&&a!==null;return e.customProgramCacheKey=()=>`lgr-vec|`+(s?`d`:`c`)+(c?`g`:``)+(o?`s`:``),e.onBeforeCompile=e=>{Ke(e),s||(e.uniforms.uVecColor={value:new P(t)}),c&&(e.uniforms.uGlow={value:new P(n)},e.uniforms.uGlowDay={value:r},e.uniforms.uGlowNight={value:i},e.uniforms.uWindowGlow=a),o&&(e.uniforms.uSeason=We),e.vertexShader=Je(e.vertexShader);let l=s?`diffuseColor.rgb`:`uVecColor`,u=o?`seasonShift(${l})`:l,d=(s?``:`uniform vec3 uVecColor;
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
        }`)));c&&(p=p.replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>\n  totalEmissiveRadiance += ${f};`)),e.fragmentShader=p},e}function Qe(e){let t=e>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function $e(e){let t=Qe(e);return{next:t,range:(e,n)=>e+(n-e)*t(),int:(e,n)=>e+Math.floor(t()*(n-e+1)),pick:e=>e[Math.floor(t()*e.length)],chance:e=>t()<e}}var et=[{key:`manhattan`,name:`Manhattan`,towers:[`#EDE3C8`,`#D9B98A`,`#B5562F`,`#A8C8E8`,`#2E3F5C`],ground:`#7CC455`,street:`#9AA0A6`,sidewalk:`#C8CCD0`,park:`#5DB347`,water:`#29A8D8`,shopfronts:[`#C04A3A`,`#3A7AC0`,`#C09A2A`],glass:`#7FA8CC`,winColors:[`#ffd27a`,`#9ad6ff`],hMax:4.6,sigma:.36,roofRate:.35,pSplit:.6,nightLit:.55,roofTint:null,coast:{base:.55,out:1,in:.6,jag:1.05},landmarks:[`empireState`,`chrysler`,`liberty`]},{key:`paris`,name:`Paris`,towers:[`#E8DCC0`,`#F2EAD6`,`#E0D2B4`],ground:`#8CC46A`,street:`#A8A29A`,sidewalk:`#D4CEC2`,park:`#6DB35A`,water:`#3FA8C8`,shopfronts:[`#C04A3A`,`#3A6B5A`,`#7A5AC0`],glass:`#5A6B7A`,winColors:[`#ffdca0`,`#ffcaa0`],hMax:1.5,sigma:.9,roofRate:.15,pSplit:.75,nightLit:.45,roofTint:`#6A7886`,coast:{base:1.05,out:.55,in:.3,jag:.5},landmarks:[`eiffel`,`arcDeTriomphe`,`sacreCoeur`]},{key:`neoTokyo`,name:`Neo-Tokyo`,towers:[`#2A3038`,`#3A4250`,`#252B36`,`#4A4456`],ground:`#3A4A42`,street:`#5A6068`,sidewalk:`#7A8088`,park:`#2E5E46`,water:`#0E6878`,shopfronts:[`#E8483A`,`#5AE8E0`,`#E85AA0`],glass:`#5AE8E0`,winColors:[`#5AE8E0`,`#E85AA0`,`#E8E06A`],hMax:5.2,sigma:.42,roofRate:.6,pSplit:.6,nightLit:.7,roofTint:null,coast:{base:.7,out:1.05,in:.62,jag:1.7},landmarks:[`tokyoTower`,`pagoda`,`neonBillboard`]}],tt=et.map(e=>e.key),nt=.3,rt=1.9,it=.55,at=2.45,ot=.12,st=.6,ct=6,lt={BASE:.7,OUT:.95,IN:.55,JAG:1,SAMPLES_PER_EDGE:28,HARBOR_DEPTH:.55,HARBOR_WIDTH:.26},ut={PLINTH_TOP:nt,BLOCK:rt,STREET:it,PITCH:at,SIDEWALK:ot,SHORE:st,N:ct,COAST:lt};function dt(e,t,n){let r=n?.base??lt.BASE,i=n?.out??lt.OUT,a=n?.in??lt.IN,o=n?.jag??lt.JAG,s=t+r,c=$e((e^789079)>>>0),l=[2,3,5,8,11,13].map(e=>({k:e,amp:1/e*o**((e-2)/6),phase:c.range(0,Math.PI*2)})),u=l.reduce((e,t)=>e+t.amp,0),d=e=>{let t=0;for(let n of l)t+=n.amp*Math.sin(n.k*e*Math.PI*2+n.phase);return Math.max(-1,Math.min(1,t/(u*.6)))},f=[{fix:+s,nx:1,nz:0,sign:1},{fix:+s,nx:0,nz:1,sign:-1},{fix:-s,nx:-1,nz:0,sign:-1},{fix:-s,nx:0,nz:-1,sign:1}],p=t+.22,m=lt.SAMPLES_PER_EDGE,h=4*m,g=[],_=0;for(let e=0;e<4;e++){let t=f[e];for(let n=0;n<m;n++,_++){let o=n/m,c=_/h,l=(-s+2*s*o)*t.sign,u=d(c),f=u>=0?u*i:u*a;if(e===0){let e=Math.abs(o-.5);if(e<lt.HARBOR_WIDTH){let t=.5+.5*Math.cos(e/lt.HARBOR_WIDTH*Math.PI);f-=(r+lt.HARBOR_DEPTH)*t}}let v,y;t.nx===0?(y=t.fix+t.nz*f,v=l,y=t.nz>0?Math.max(y,p):Math.min(y,-p)):(v=t.fix+t.nx*f,y=l,v=t.nx>0?Math.max(v,p):Math.min(v,-p)),g.push(new j(v,y))}}return{points:g,B:s,maxR:s+i,harborX:p}}function ft(e){(Array.isArray(e)?e:[e]).forEach(e=>e&&e.dispose&&e.dispose())}function pt({seed:e=1,profileIndex:t=0,landmarkFactory:n=null,windowGlow:r}){let i=new w,a=new w,o=new w;a.raycast=()=>{},o.raycast=()=>{},i.add(a,o);let s=new A(16773594,3);s.position.set(.45,.6,-.65).multiplyScalar(10);let c=new ve(7313331,2762272,1);i.add(s,c);let l=0,u=[],f={seed:e,profileIndex:t,profile:et[t],extent:0,meshCount:0};function p(e,t,n,r){let i=new y(new F(e,.04,t),U(new d({color:r,roughness:.95,flatShading:!0}),{color:r}));return i.position.y=n,i.userData.ground=!0,i}function m(e,t){for(let e of a.children)e.geometry&&e.geometry.dispose(),ft(e.material);a.clear();for(let e of o.children)e.traverse(e=>{e.isMesh&&ft(e.material)});o.clear(),u.length=0,l=0;let r=$e(e),i=et[t],s=(ct-1)/2*at,c=7.075;f={seed:e,profileIndex:t,profile:i,extent:c+(i.coast?.base??lt.BASE),meshCount:0};let m=dt(e,c,i.coast);f.coast=m;let x=new k;m.points.forEach((e,t)=>t?x.lineTo(e.x,e.y):x.moveTo(e.x,e.y)),x.closePath();let S=new y(new be(x,{depth:2,bevelEnabled:!1,steps:1}),U(new d({color:i.ground,roughness:.9,flatShading:!0,side:2}),{color:i.ground}));S.rotation.x=-Math.PI/2,S.position.y=nt-2,S.userData.ground=!0,a.add(S);let C=2*7.195;a.add(p(C,C,.32,i.street)),v(m.harborX,i);let w=[];for(let e=0;e<ct;e++)for(let t=0;t<ct;t++)w.push([e,t]);let T=new Set,E=Math.max(1,Math.round(w.length*.08));for(;T.size<E;)T.add(r.int(0,w.length-1));let D=r.range(-2.45*.6,at*.6),ee=r.range(-2.45*.6,at*.6),O=Math.hypot(s,s),te=[];if(w.forEach(([e,t],n)=>{let o=(e-(ct-1)/2)*at,s=(t-(ct-1)/2)*at;if(a.add(p(rt,rt,.32999999999999996,i.sidewalk).translateX(o).translateZ(s)),T.has(n)){a.add(p(rt-ot*2,rt-ot*2,.35,i.park).translateX(o).translateZ(s));let e=r.int(3,5);for(let t=0;t<e;t++)b(o+r.range(-.6,.6),s+r.range(-.6,.6),i,r);return}let c=rt-ot*2,l=r.chance(i.pSplit)?2:1,u=r.chance(i.pSplit)?2:1,d=c/l,f=c/u;for(let e=0;e<l;e++)for(let t=0;t<u;t++){let n=o-c/2+d*(e+.5),a=s-c/2+f*(t+.5),l=Math.max(.6,d-.1),u=Math.max(.6,f-.1),p=Math.hypot(n-D,a-ee)/O,m=Math.exp(-(p*p)/(2*i.sigma*i.sigma)),g=Math.max(.5,.5+(i.hMax-.5)*m*r.range(.75,1.25));g>i.hMax*.5&&Math.min(l,u)>=.7&&te.push({lx:n,lz:a,fw:l,fd:u,h:g,r:p}),h(n,a,l,u,g,i,r)}}),n&&n.ready){te.sort((e,t)=>e.r-t.r);let e=[],t=i.landmarks;for(let r=0;r<t.length&&te.length;r++){let a=null;for(let t of te)if(e.every(e=>Math.hypot(e.lx-t.lx,e.lz-t.lz)>at*.9)){a=t;break}a||=te[0],e.push(a),g(a.lx,a.lz);let s=i.hMax*n.heightFactor(t[r]),c=n.make(t[r],{x:a.lx,z:a.lz,w:a.fw,d:a.fd,h:s,plinthTop:nt});if(c){o.add(c);let e=new de().setFromObject(c);_(e.min.x-.15,e.max.x+.15,e.min.z-.15,e.max.z+.15)}}}a.traverse(e=>{e.isMesh&&(e.userData.ground?(e.castShadow=!1,e.receiveShadow=!0):e.material&&e.material.isMeshBasicMaterial?(e.castShadow=!1,e.receiveShadow=!1):(e.castShadow=!0,e.receiveShadow=!0))}),o.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),f.meshCount=a.children.length+o.children.length;let A=0;for(let e of a.children){let t=e.position;A=(Math.imul(A,16777619)^(Math.round(t.x*100)*2654435761^Math.round(t.y*100)*40503^Math.round(t.z*100)*2246822519))>>>0}for(let e of f.coast.points)A=(Math.imul(A,16777619)^(Math.round(e.x*100)*2654435761^Math.round(e.y*100)*40503))>>>0;f.sig=A,window.__city={seed:e,profile:i.key,meshes:f.meshCount,sig:A}}function h(e,t,n,i,o,s,c){let f=Ze(new d({flatShading:!0,roughness:.7,metalness:.05}),{color:c.pick(s.towers),id:++l,windowGlow:r,winColors:s.winColors,litFrac:s.nightLit}),p=new y(new F(n,o,i),f);if(p.position.set(e,nt+o/2,t),p.userData.lot=[e,t],a.add(p),s.roofTint){let r=U(new d({color:s.roofTint,roughness:.85,flatShading:!0}),{color:s.roofTint}),c=new y(new F(n*1.02,.08,i*1.02),r);c.position.set(e,nt+o+.04,t),c.userData.lot=[e,t],a.add(c)}if(o<1.4){let r=c.pick(s.shopfronts),o=new y(new F(n*1.04,.18,i*1.04),U(new d({color:r,roughness:.8,flatShading:!0}),{color:r}));o.position.set(e,.39,t),o.userData.lot=[e,t],a.add(o)}if(o>s.hMax*.45&&c.chance(s.roofRate)){let r=c.chance(.5)?new y(new F(n*.4,.18,i*.4),U(new d({color:`#9a9a9a`,flatShading:!0}),{color:`#9a9a9a`})):new y(new se(n*.18,n*.18,.22,10),U(new d({color:`#b9bec4`,flatShading:!0}),{color:`#b9bec4`}));if(r.position.set(e+c.range(-.1,.1),nt+o+.11,t+c.range(-.1,.1)),r.userData.lot=[e,t],a.add(r),c.chance(.25)){let n=new y(new S(.05,6,5),new x({color:`#ff3b30`,transparent:!0,opacity:1}));n.position.set(e,nt+o+.26,t),n.userData.lot=[e,t],n.raycast=()=>{},a.add(n),u.push({mesh:n,phase:c.range(0,6.28)})}}}function g(e,t){for(let n=a.children.length-1;n>=0;n--){let r=a.children[n];r.userData.lot&&Math.abs(r.userData.lot[0]-e)<1e-4&&Math.abs(r.userData.lot[1]-t)<1e-4&&(r.geometry&&r.geometry.dispose(),ft(r.material),a.remove(r))}for(let e=u.length-1;e>=0;e--)u[e].mesh.parent||u.splice(e,1)}function _(e,t,n,r){for(let i=a.children.length-1;i>=0;i--){let o=a.children[i];o.userData.lot&&o.position.x>=e&&o.position.x<=t&&o.position.z>=n&&o.position.z<=r&&(o.geometry&&o.geometry.dispose(),ft(o.material),a.remove(o))}}function v(e,t){let n=U(new d({color:`#7a5634`,roughness:.95,flatShading:!0}),{color:`#7a5634`}),r=(e,t,r,i)=>{let o=new y(new F(e,.06,t),n);o.position.set(r,nt-.16,i),a.add(o)};r(.24,2,e+.02,0),r(1.3,.22,e+.7,-.72),r(1.3,.22,e+.7,.72)}function b(e,t,n,r){let i=new P(n.park),o=(n,o)=>{let s=i.clone().offsetHSL(0,0,r.range(-.06,.06)).getStyle(),c=new y(new S(n,7,6),U(new d({color:s,flatShading:!0}),{color:s,season:!0}));c.scale.y=.7,c.position.set(e,nt+o,t),c.userData.lot=null,a.add(c)},s=new y(new F(.05,.18,.05),U(new d({color:`#6b4a2a`,flatShading:!0}),{color:`#6b4a2a`}));s.position.set(e,.39,t),a.add(s),o(.22,.28),o(.16,.46)}function C(e){for(let t of u)t.mesh.material.opacity=.35+.65*(.5+.5*Math.sin(e*3+t.phase))}return m(e,t),{group:i,key:s,fill:c,update:C,generate:m,get state(){return f},get extent(){return f.extent},get waterColor(){return f.profile.water},profiles:et}}var mt=Math.PI*2,ht=.7,gt=90,_t=[{name:`night`,sun:`#4a6f9e`,intensity:.35,hemiSky:`#26344f`,hemiGround:`#0c1018`,horizon:`#1e2942`,sky:`#36486e`,exposure:.95,outline:`#101a30`,window:1,toonGain:2.6},{name:`dawn`,sun:`#ff9e54`,intensity:2.4,hemiSky:`#8a7686`,hemiGround:`#2a1f1a`,horizon:`#b8512c`,sky:`#ffb070`,exposure:1.05,outline:`#241826`,window:.3,toonGain:2},{name:`noon`,sun:`#fff4e0`,intensity:4.6,hemiSky:`#9cb8cc`,hemiGround:`#33302a`,horizon:`#5e7689`,sky:`#aacadd`,exposure:1.18,outline:`#0b0a08`,window:0,toonGain:1.7},{name:`dusk`,sun:`#ff6b35`,intensity:2,hemiSky:`#7a566a`,hemiGround:`#281a18`,horizon:`#b0432a`,sky:`#ff8a5a`,exposure:1.05,outline:`#1f1420`,window:.4,toonGain:2}],vt=e=>e-Math.floor(e),yt=(e,t,n)=>e+(t-e)*n,bt=(e,t,n)=>e+(t-e)*(1-Math.exp(-6*n));function xt({t:e=.5}={}){let t=e,n=e,r=!1,i=!1,a=_t.map(e=>({name:e.name,sun:new P(e.sun),hemiSky:new P(e.hemiSky),hemiGround:new P(e.hemiGround),horizon:new P(e.horizon),sky:new P(e.sky),outline:new P(e.outline),intensity:e.intensity,exposure:e.exposure,window:e.window,toonGain:e.toonGain})),o=new R(0,1,0),s=new P(`#fff4e0`),c=new P(`#6f97b3`),l=new P(`#2a2620`),u=new P(`#3a4a57`),d=new P(`#7da3bd`),f=new P(`#0b0a08`),p=new P(`#000000`),m=3,h=1,g=0,_=1.7,v=new R;function y(e){let t=vt(e)*4,n=Math.floor(t)%4,r=(n+1)%4,i=t-Math.floor(t),y=a[n],b=a[r];s.lerpColors(y.sun,b.sun,i),c.lerpColors(y.hemiSky,b.hemiSky,i),l.lerpColors(y.hemiGround,b.hemiGround,i),u.lerpColors(y.horizon,b.horizon,i),d.lerpColors(y.sky,b.sky,i),f.lerpColors(y.outline,b.outline,i),m=yt(y.intensity,b.intensity,i),h=yt(y.exposure,b.exposure,i),g=yt(y.window,b.window,i),_=yt(y.toonGain,b.toonGain,i),p.setRGB(.045*g,.075*g,.14*g);let x=vt(e)*mt-Math.PI/2,S=Math.cos(x),C=Math.sin(x);v.set(S,C*Math.cos(ht),C*Math.sin(ht)),v.y>=0?o.copy(v):o.copy(v).negate()}return y(t),{sunDir:o,sunColor:s,hemiSky:c,hemiGround:l,horizon:u,sky:d,outline:f,toonFloor:p,get sunIntensity(){return m},get exposure(){return h},get windowGlow(){return g},get toonGain(){return _},get t(){return vt(t)},get auto(){return r},get clock(){let e=Math.round(vt(t)*24*60)%1440;return`${String(Math.floor(e/60)).padStart(2,`0`)}:${String(e%60).padStart(2,`0`)}`},cyclePreset(){n=(Math.floor(t*4+1e-4)+1)/4},nudge(e){n+=e/24},goTo(e){n=e},toggleAuto(){r=!r},setReducedMotion(e){i=e},update(e){r&&!i&&(n+=e/gt),t=bt(t,n,e),y(t)}}}function St(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.35,`rgba(255,255,255,0.55)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new B(e);return r.colorSpace=h,r}function Ct(e,t){let n=[];for(let r=0;r<16;r++){let i=r/16*Math.PI*2;n.push(new R(Math.cos(i)*e,t,Math.sin(i)*e))}return new oe(n,!0,`catmullrom`,.5)}function wt(e){let t=(t,n)=>Math.exp(-((e-t)*(e-t))/(2*n*n)),n=Math.max(t(.33,.05),t(.75,.06)),r=I.smoothstep(e,.24,.3)*(1-I.smoothstep(e,.8,.88));return I.clamp(.15+.55*r+.45*n,.12,1)}function Tt(){let{PITCH:e,N:t,PLINTH_TOP:n}=ut,r=t+1,i=n+.04,a=n=>(n-t/2)*e,o=t/2,s=[],c=(e,t)=>t*r+e;for(let e=0;e<r;e++)for(let t=0;t<r;t++)s.push({x:a(t),z:a(e),i:t,j:e,edges:[]});let l=[],u=(t,n)=>{let r=(s[t].i===o||s[t].j===o)&&(s[n].i===o||s[n].j===o),i=l.length;l.push({a:t,b:n,len:e,main:r}),s[t].edges.push(i),s[n].edges.push(i)};for(let e=0;e<r;e++)for(let t=0;t<r;t++)t<r-1&&u(c(t,e),c(t+1,e)),e<r-1&&u(c(t,e),c(t,e+1));return{nodes:s,edges:l,y:i,mid:o}}function Et({plinthTop:e=.3,extent:t=4,profile:n=null}={}){let r=new w,i=Tt(),{nodes:a,edges:o}=i,s=i.y,c=.34,l=0;{let e=ut.PITCH-c*2;l=Math.max(1,Math.floor((e+.26)/.56))}let u=new x({color:`#e8c84a`,fog:!0}),p=new T(new F(.05,.012,.3),u,o.length*l);p.frustumCulled=!1,p.raycast=()=>{},p.receiveShadow=!1,p.castShadow=!1,r.add(p);{let e=new _,t=0;for(let n of o){let r=a[n.a],i=a[n.b],o=i.x-r.x,u=i.z-r.z,d=Math.hypot(o,u),f=o/d,m=u/d,h=Math.atan2(f,m),g=d-c*2;for(let n=0;n<l;n++){let i=c+(l===1?g/2:g*n/(l-1));e.position.set(r.x+f*i,s,r.z+m*i),e.rotation.set(0,h,0),e.updateMatrix(),p.setMatrixAt(t++,e.matrix)}}p.instanceMatrix.needsUpdate=!0}let m=new T(new F(.34,.26,.74),U(new d({flatShading:!0,roughness:.5,metalness:.3})),12);m.castShadow=!0,m.receiveShadow=!1,m.frustumCulled=!1,m.raycast=()=>{};let h=new le,g=new Float32Array(72),v=new Float32Array(72),y=new P(`#fff0c0`),b=new P(`#ff3528`);for(let e=0;e<12;e++)y.toArray(v,e*3),b.toArray(v,(12+e)*3),g[e*3+1]=-50,g[(12+e)*3+1]=-50;h.setAttribute(`position`,new ne(g,3)),h.setAttribute(`color`,new ne(v,3));let S=new f({size:.72,sizeAttenuation:!0,map:St(),vertexColors:!0,transparent:!0,opacity:0,blending:2,depthWrite:!1}),C=new ee(h,S);C.frustumCulled=!1,C.raycast=()=>{},r.add(m,C);let E=[`#f4c430`,`#c0392b`,`#d8dde2`,`#9aa7b4`,`#6b7785`,`#5a7d9a`],D=Qe(2403557),O=o.map((e,t)=>t).filter(e=>o[e].main),te=[];for(let e=0;e<12;e++){let t=e<4&&O.length?O[D()*O.length|0]:D()*o.length|0,n=e===1;te.push({edge:t,fwd:D()<.5,s:D()*o[t].len,speed:n?.5:.78+e%3*.1,lenZ:n?1.45:1,color:E[n?1:e===0?0:2+e%4],rng:Qe(12648430+e*2654435761)})}let k=new P;te.forEach((e,t)=>m.setColorAt(t,k.set(e.color)));function A(e,t,n){let r=a[e],i=r.edges.filter(e=>e!==t);if(i.length===0)return t;let s=o[t],c=s.a===e?s.b:s.a,l=r.x-a[c].x,u=r.z-a[c].z,d=Math.hypot(l,u)||1,f=i[0],p=-2;for(let t of i){let n=o[t],i=n.a===e?n.b:n.a,s=a[i].x-r.x,c=a[i].z-r.z,m=Math.hypot(s,c)||1,h=l/d*(s/m)+u/d*(c/m);h>p&&(p=h,f=t)}return n()<.65?f:i[n()*i.length|0]}let j=A,M=new _,N=(e,t)=>{M.position.set(0,-50,0),M.scale.setScalar(0),M.updateMatrix(),e.setMatrixAt(t,M.matrix)},ie=.085,ae=ut.PLINTH_TOP+.02+.13,L=new T(new re(.04,.1,3,6),U(new d({flatShading:!0,roughness:.8})),14);L.castShadow=!0,L.receiveShadow=!1,L.frustumCulled=!1,L.raycast=()=>{};let oe=Ct(t-.72,e),se=[];for(let e=0;e<14;e++)se.push({phase:e/14,speed:.12+e%4*.02,dir:e%2?1:-1});let ce=new R,ue=new R,z=new P;se.forEach((e,t)=>L.setColorAt(t,z.set([`#caa`,`#9ab`,`#bba`,`#ab9`][t%4]))),r.add(L);let de={manhattan:`#e8c84a`,paris:`#dcd2bc`,neoTokyo:`#5ae8e0`};function fe(e){e&&u.color.set(de[e.key]||`#e8c84a`)}fe(n);function B(t,n,r){let i=r?r.t:.5,s=r?r.windowGlow:0,c=Math.max(2,Math.round(wt(i)*12)),l=s>.05;for(let e=0;e<12;e++){if(e>=c){N(m,e),g[e*3+1]=-50,g[(12+e)*3+1]=-50;continue}let n=te[e];n.s+=t*n.speed;let r=0;for(;n.s>=o[n.edge].len&&r++<4;){n.s-=o[n.edge].len;let e=n.fwd?o[n.edge].b:o[n.edge].a,t=j(e,n.edge,n.rng);n.edge=t,n.fwd=o[t].a===e}let i=o[n.edge],s=n.fwd?a[i.a]:a[i.b],u=n.fwd?a[i.b]:a[i.a],d=u.x-s.x,f=u.z-s.z,p=Math.hypot(d,f)||1,h=d/p,_=f/p,v=-_,y=h,b=s.x+h*n.s+v*ie,x=s.z+_*n.s+y*ie,S=Math.atan2(h,_);M.position.set(b,ae,x),M.rotation.set(0,S,0),M.scale.set(1,1,n.lenZ),M.updateMatrix(),m.setMatrixAt(e,M.matrix);let C=.74*n.lenZ*.5,w=ae+.06,T=e*3,E=(12+e)*3;l?(g[T]=b+h*(C+.04),g[T+1]=w,g[T+2]=x+_*(C+.04),g[E]=b-h*(C+.02),g[E+1]=w,g[E+2]=x-_*(C+.02)):(g[T+1]=-50,g[E+1]=-50)}m.instanceMatrix.needsUpdate=!0,h.attributes.position.needsUpdate=!0,S.opacity=I.clamp(s*1.8,0,1);let u=Math.max(2,Math.round(wt(i)*14));for(let t=0;t<14;t++){if(t>=u){N(L,t);continue}let r=se[t],i=(r.phase+r.dir*r.speed*n*.02+1e3)%1;oe.getPointAt(i,ce),oe.getTangentAt(i,ue);let a=Math.sin(n*6+r.phase*30)*.015;M.position.set(ce.x,e+.09+a,ce.z),M.rotation.set(0,Math.atan2(ue.x*r.dir,ue.z*r.dir),Math.sin(n*6+r.phase*30)*.06),M.scale.setScalar(1),M.updateMatrix(),L.setMatrixAt(t,M.matrix)}L.instanceMatrix.needsUpdate=!0}return{group:r,update:B,setProfile:fe,graph:i,setRouter(e){j=e||A}}}function Dt(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.4,`rgba(255,255,255,0.5)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new B(e);return r.colorSpace=h,r}function Ot(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64*.62,0,64/2,64*.62,64*.5);n.addColorStop(0,`rgba(240,250,255,0.95)`),n.addColorStop(1,`rgba(240,250,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new B(e);return r.colorSpace=h,r}function kt(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`);t.strokeStyle=`rgba(40,46,54,0.9)`,t.lineWidth=6,t.lineCap=`round`,t.beginPath(),t.moveTo(8,40),t.quadraticCurveTo(24,18,32,34),t.quadraticCurveTo(40,18,56,40),t.stroke();let n=new B(e);return n.colorSpace=h,n}function At(e,t,n=18){let r=[];for(let i=0;i<n;i++){let a=i/n*Math.PI*2;r.push(new R(Math.cos(a)*e,t,Math.sin(a)*e))}return new oe(r,!0,`catmullrom`,.5)}function jt(e,t,n){let r=e-t,i=[],a=(e,t)=>i.push(new R(e,n,t)),o=(e,n,r,i,o=4)=>{for(let s=1;s<=o;s++){let c=r+(i-r)*(s/o);a(e+Math.cos(c)*t,n+Math.sin(c)*t)}};for(let t=0;t<4;t++)a(e,-r+2*r*t/4);o(r,r,0,Math.PI/2);for(let t=0;t<4;t++)a(r-2*r*t/4,e);o(-r,r,Math.PI/2,Math.PI);for(let t=0;t<4;t++)a(-e,r-2*r*t/4);o(-r,-r,Math.PI,1.5*Math.PI);for(let t=0;t<4;t++)a(-r+2*r*t/4,-e);return o(r,-r,1.5*Math.PI,2*Math.PI),new oe(i,!0,`catmullrom`,.5)}function Mt({extent:e=8,waterSize:t=28,plinthTop:n=.3}={}){let r=new w;r.raycast=()=>{};let i=.06,a=(e,n,r)=>r.set(e/t+.5,-n/t+.5,0),o=[jt(9.5,3,i),At(12.7,i),new oe([new R(8.4,i,0),new R(11,i,-3.6),new R(13,i,0),new R(11,i,3.6)],!0,`catmullrom`,.5)],s=o.map(e=>e.getLength());function c({scale:e=1,hull:t=`#6b7785`,cabin:n=`#e7ecf2`}){let r=new w,i=new y(new F(.46*e,.2*e,1.1*e),U(new d({color:t,roughness:.6,metalness:.2,flatShading:!0}),{color:t}));i.position.y=.02;let a=new y(new F(.3*e,.22*e,.42*e),U(new d({color:n,roughness:.7,flatShading:!0}),{color:n}));return a.position.set(0,.18*e,.08*e),r.add(i,a),r.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!1),e.raycast=()=>{}}),r.userData.halfLen=.55*e,r}let l=[{laneIndex:0,dir:1,speed:.5,wake:.024,scale:1,hull:`#5a6675`,cabin:`#e7ecf2`},{laneIndex:1,dir:-1,speed:.42,wake:.022,scale:1,hull:`#7a5b46`,cabin:`#d9c3a6`},{laneIndex:0,dir:1,speed:.56,wake:.024,scale:.9,hull:`#456079`,cabin:`#cfe0ee`},{laneIndex:2,dir:1,speed:.34,wake:.03,scale:1.35,hull:`#39505f`,cabin:`#e2b85a`}];l.forEach((e,t)=>{e.mesh=c(e),e.u=t*.27%1,e.phase=t*1.7,e.isFerry=e.laneIndex===2,r.add(e.mesh)});let u=l.length,p=u*2,m=new le,h=new Float32Array(p*3).fill(-50),g=new Float32Array(p*3),_=new P(`#fff0c0`),v=new P(`#ff3528`);for(let e=0;e<u;e++)_.toArray(g,e*3),v.toArray(g,(u+e)*3);m.setAttribute(`position`,new ne(h,3)),m.setAttribute(`color`,new ne(g,3));let b=new ee(m,new f({size:.6,sizeAttenuation:!0,map:Dt(),vertexColors:!0,transparent:!0,opacity:0,blending:2,depthWrite:!1}));b.frustumCulled=!1,b.raycast=()=>{},r.add(b);function x(e,t){let n=new y(new S(e,9,7),U(new d({color:t,roughness:.5,flatShading:!0}),{color:t}));return n.scale.set(.55,.5,1),n.castShadow=!1,n.receiveShadow=!1,n.raycast=()=>{},n.position.y=-5,n}let C=[{x:-9.5,z:6,size:.18,color:`#5b6f86`,period:11,arcH:.55,span:1.1,whale:!1},{x:7.5,z:-9.5,size:.16,color:`#4a6076`,period:14,arcH:.5,span:1,whale:!1},{x:-7,z:-8.5,size:.2,color:`#607089`,period:9,arcH:.6,span:1.2,whale:!1},{x:10.5,z:7,size:.62,color:`#3a4350`,period:38,arcH:.9,span:2.6,whale:!0}];C.forEach((e,t)=>{e.mesh=x(e.size,e.color),e.heading=Math.atan2(-e.x,-e.z),e.t=t/C.length*e.period,e.splashed=!1,r.add(e.mesh),e.whale&&(e.spout=new N(new he({map:Ot(),transparent:!0,opacity:0,depthWrite:!1,fog:!0})),e.spout.scale.set(.6,1.1,1),e.spout.position.set(e.x,-5,e.z),r.add(e.spout))});let T=kt(),E=[];for(let e=0;e<4;e++){let t=new N(new he({map:T,transparent:!0,opacity:0,depthWrite:!1,fog:!0}));t.scale.setScalar(.5),E.push({sp:t,r:8.6+e*.5,y:1.1+e%2*.5,speed:(.18+e*.03)*(e%2?-1:1),phase:e*1.9}),r.add(t)}let D=C.length,O=Array.from({length:u+D},()=>new R),te=e=>e.laneIndex,k=new R,A=new R,j=new R;function re(e,t,n){let r=n?n.windowGlow:0,c=1-r;for(let n=0;n<u;n++){let c=l[n],d=o[c.laneIndex],f=s[c.laneIndex],p=c.isFerry?.45+.55*Math.min(1,Math.abs((c.u+.5)%1-.5)*3):1,m=c.u;c.u=(c.u+c.dir*e*c.speed*p/f+1)%1,(c.dir>0?c.u<m:c.u>m)&&(c.laneIndex=te(c)),d.getPointAt(c.u,k),d.getTangentAt(c.u,A);let g=A.x*c.dir,_=A.z*c.dir,v=Math.atan2(g,_),y=Math.sin(t*1.1+c.phase)*.025;c.mesh.position.set(k.x,i+y,k.z),c.mesh.rotation.set(Math.sin(t*.9+c.phase)*.04,v,0);let b=c.mesh.userData.halfLen;a(k.x-g*b,k.z-_*b,j),O[n].set(j.x,j.y,c.wake);let x=n*3,S=(u+n)*3;if(r>.05){let e=.18;h[x]=k.x+g*(b+.05),h[x+1]=e,h[x+2]=k.z+_*(b+.05),h[S]=k.x-g*(b+.02),h[S+1]=e,h[S+2]=k.z-_*(b+.02)}else h[x+1]=-50,h[S+1]=-50}M(),b.material.opacity=I.clamp(r*1.8,0,1);for(let t=0;t<D;t++){let n=C[t];n.t+=e;let r=u+t,o=n.whale?3.2:1.3;if(n.t>=n.period){let e=(n.t-n.period)/o;if(e>=1){n.t=0,n.splashed=!1,n.mesh.position.y=-5,n.spout&&(n.spout.material.opacity=0),O[r].set(0,0,0);continue}let t=Math.sin(Math.PI*e),s=(e-.5)*n.span,c=n.x+Math.sin(n.heading)*s,l=n.z+Math.cos(n.heading)*s;n.mesh.position.set(c,i-.1+t*n.arcH,l),n.mesh.rotation.set(Math.cos(Math.PI*e)*.9,n.heading,0);let u=e<.16||e>.84;if(a(c,l,j),O[r].set(j.x,j.y,u?n.whale?.07:.05:0),n.spout){let t=I.clamp((e-.15)*3,0,1)*(1-e);n.spout.position.set(c,.56+t*.6,l),n.spout.material.opacity=t*.9}}else n.mesh.position.y=-5,O[r].set(0,0,0),n.spout&&(n.spout.material.opacity=0)}for(let e=0;e<4;e++){let n=E[e],r=n.phase+t*n.speed*.25;n.sp.position.set(Math.cos(r)*n.r,n.y+Math.sin(t*1.4+n.phase)*.12,Math.sin(r)*n.r),n.sp.material.opacity=I.clamp(c*.9-.05,0,.85)}if(typeof window<`u`){let e=0;for(let t of C)t.mesh.position.y>i&&e++;window.__waterLife={boats:u,breaching:e,gulls:+E[0].sp.material.opacity.toFixed(2),lights:+b.material.opacity.toFixed(2)}}}function M(){m.attributes.position.needsUpdate=!0}function ie(){return O.length}return{group:r,update:re,wakeDrops:O,get wakeCount(){return ie()},lanes:o,setRouter(e){te=e||(e=>e.laneIndex)}}}var Nt=new Set([`w`,`a`,`s`,`d`,`arrowup`,`arrowdown`,`arrowleft`,`arrowright`,`shift`,` `]),Pt={walker:{p:.6,hp:26,speed:.85,dmg:9,score:10,size:1,color:`#6f8a45`},runner:{p:.25,hp:12,speed:1.75,dmg:7,score:16,size:.82,color:`#a6d24c`},tank:{p:.15,hp:95,speed:.5,dmg:20,score:34,size:1.5,color:`#39492a`}};function Ft(){let e=Math.random();return e<Pt.walker.p?`walker`:e<Pt.walker.p+Pt.runner.p?`runner`:`tank`}var It=new P(`#ffffff`),Lt=new P(`#d83a2a`),Rt={food:{name:`Food`,glyph:`🍖`,color:`#c8782e`,consumable:!0},water:{name:`Water`,glyph:`💧`,color:`#3aa6dc`,consumable:!0},bandage:{name:`Bandage`,glyph:`➕`,color:`#e8e2d6`,consumable:!0},scrap:{name:`Scrap`,glyph:`⚙️`,color:`#8a8f96`,consumable:!1},medkit:{name:`Medkit`,glyph:`✚`,color:`#e0524a`,consumable:!0},repairkit:{name:`Repair Kit`,glyph:`🔧`,color:`#caa05a`,consumable:!0}},zt=[{out:`medkit`,need:{bandage:2}},{out:`repairkit`,need:{scrap:3}}];function Bt({extent:e=8,plinthTop:t=.3}={}){let n=new w;n.visible=!1,n.raycast=()=>{};let r=t+.02,i=Math.max(3,e-.7),a=typeof window<`u`&&window.matchMedia&&window.matchMedia(`(pointer: coarse)`).matches,o=1.25,s=4.4,c=1.4,u=new w,f=new y(new re(.16,.34,4,10),U(new d({color:`#3f7fd0`,roughness:.6,flatShading:!0}),{color:`#3f7fd0`}));f.position.y=.33;let p=new y(new S(.13,12,9),U(new d({color:`#e9caa1`,roughness:.75,flatShading:!0}),{color:`#e9caa1`}));p.position.y=.66;let m=new y(new F(.1,.1,.16),U(new d({color:`#ffd54a`,roughness:.5,flatShading:!0}),{color:`#ffd54a`}));m.position.set(0,.38,.18),u.add(f,p,m),u.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!1),e.raycast=()=>{}}),u.scale.setScalar(1.6),u.position.y=r,n.add(u);let h=new y(new ge(.95,16,-.9,1.8),new x({color:`#ffe08a`,transparent:!0,opacity:0,depthWrite:!1,side:2}));h.rotation.x=-Math.PI/2,h.position.y=r+.06,h.raycast=()=>{},n.add(h);let g=new le().setFromPoints([new R,new R]),v=new l(g,new b({color:`#fff3c0`,transparent:!0,opacity:0,depthWrite:!1}));v.raycast=()=>{},n.add(v);let C={x:0,z:0,vx:0,vz:0,hp:100,stamina:100,hunger:100,thirst:100,facing:0,iframe:0},E=new T(new re(.15,.3,4,8),U(new d({roughness:.85,flatShading:!0})),48);E.castShadow=!0,E.receiveShadow=!1,E.frustumCulled=!1,E.raycast=()=>{},E.instanceMatrix.setUsage(_e),n.add(E);let D=[];for(let e=0;e<48;e++)D.push({x:0,z:0,vx:0,vz:0,alive:!1,in:!1,type:`walker`,hp:1,maxhp:1,speed:1,dmg:0,score:0,size:1,phase:0,flash:0});let ee=new P,O=[],te=U(new d({color:`#7a5a36`,roughness:.9,flatShading:!0}),{color:`#7a5a36`});for(let e=0;e<8;e++){let t=e/8*Math.PI*2,i=new y(new F(2.1,.7,.24),te.clone());i.position.set(Math.cos(t)*s,r+.35,Math.sin(t)*s),i.rotation.y=-t+Math.PI/2,i.castShadow=!0,i.raycast=()=>{},n.add(i),O.push({mesh:i,ang:t,hp:150,alive:!0,baseColor:new P(`#7a5a36`)})}function k(e,t){let n=Math.atan2(t,e);return n<0&&(n+=Math.PI*2),O[Math.round(n/(Math.PI*2/8))%8]}let A=[];for(let e=0;e<14;e++){let e=new y(new F(.26,.26,.26),U(new d({roughness:.6,flatShading:!0})));e.castShadow=!0,e.visible=!1,e.raycast=()=>{},n.add(e),A.push({mesh:e,x:0,z:0,kind:`food`,active:!1})}let ne=new P;function j(){let e=Math.random();return e<.36?`food`:e<.72?`water`:e<.88?`bandage`:`scrap`}function M(e,t,n){let i=A.find(e=>!e.active);i&&(i.x=e,i.z=t,i.kind=n||j(),i.active=!0,i.mesh.position.set(e,r+.18,t),i.mesh.visible=!0,i.mesh.material.color.copy(ne.set(Rt[i.kind].color)))}let N=[];function ie(e){let t=N.find(t=>t.id===e);return t?t.n:0}function ae(e,t=1){let n=N.find(t=>t.id===e);return n?(n.n+=t,!0):N.length<8?(N.push({id:e,n:t}),!0):!1}function L(e,t){let n=N.find(t=>t.id===e);return!n||n.n<t?!1:(n.n-=t,n.n<=0&&N.splice(N.indexOf(n),1),!0)}function oe(e){if(ie(e)<=0)return!1;if(e===`food`)C.hunger=Math.min(100,C.hunger+38);else if(e===`water`)C.thirst=Math.min(100,C.thirst+38);else if(e===`bandage`)C.hp=Math.min(100,C.hp+40);else if(e===`medkit`)C.hp=Math.min(100,C.hp+90);else if(e===`repairkit`){let e=null;for(let t of O)(!e||t.hp<e.hp)&&(e=t);e&&(e.hp=150,e.alive=!0)}else return!1;return L(e,1),Ze(),!0}function se(e){for(let t in e.need)if(ie(t)<e.need[t])return!1;for(let t in e.need)L(t,e.need[t]);return ae(e.out,1),Ze(),!0}let ce=!1,ue=!1,z=1,de=0,fe=0,B=0,pe=`spawning`,me=0,he=0,ve=0,ye=0,be=!1,xe=null;function Se(){for(let e=0;e<48;e++)if(!D[e].alive)return D[e];return null}function Ce(e){let t=Se();if(!t)return;let n=Pt[Ft()];t.type=Object.keys(Pt).find(e=>Pt[e]===n)||`walker`;let r=Math.random()*Math.PI*2;t.x=Math.cos(r)*i,t.z=Math.sin(r)*i,t.vx=0,t.vz=0;let a=1+z*.08;t.maxhp=n.hp*a,t.hp=t.maxhp,t.speed=n.speed*(1+.4*e)*(1+z*.015)*(z===1?.85:1),t.dmg=n.dmg,t.score=n.score,t.size=n.size,t.phase=Math.random()*6.28,t.flash=0,t.in=!1,t.alive=!0}function we(){let e=null,t=1/0;for(let n of D){if(!n.alive)continue;let r=(n.x-C.x)**2+(n.z-C.z)**2;r<t&&(t=r,e=n)}return e}function Te(e){e.alive=!1,de++,fe+=e.score,Math.random()<.3&&M(e.x,e.z)}function Ee(e,t){e.hp-=t,e.flash=.12,e.hp<=0&&Te(e)}function De(){if(ue||ve>0)return;ve=.16;let e,t;if(xe)e=xe.x-C.x,t=xe.z-C.z;else{let n=we();n?(e=n.x-C.x,t=n.z-C.z):(e=Math.sin(C.facing),t=Math.cos(C.facing))}let n=Math.hypot(e,t)||1;e/=n,t/=n,C.facing=Math.atan2(e,t);let i=null,a=1/0;for(let n of D){if(!n.alive)continue;let r=n.x-C.x,o=n.z-C.z,s=r*e+o*t;s<0||s>9||Math.abs(r*t-o*e)<.7*(.4+.6*n.size)&&s<a&&(a=s,i=n)}let o=i?a:9;g.setFromPoints([new R(C.x,r+.5,C.z),new R(C.x+e*o,r+.5,C.z+t*o)]),g.attributes.position.needsUpdate=!0,v.material.opacity=.95,i&&Ee(i,16)}function Oe(){if(ue||ye>0)return;ye=.42,h.material.opacity=.85;let e=Math.sin(C.facing),t=Math.cos(C.facing);for(let n of D){if(!n.alive)continue;let r=n.x-C.x,i=n.z-C.z,a=Math.hypot(r,i);a>1.05+n.size*.2||(r*e+i*t)/(a||1)>.2&&Ee(n,34)}}let ke={},Ae={x:0,y:0};function je(e,t){if(!ce)return;let n=e.key.toLowerCase();if(t&&n===`i`){e.stopImmediatePropagation(),et();return}if(t&&n===`escape`&&We){e.stopImmediatePropagation(),$e();return}if(Nt.has(n)){if(e.stopImmediatePropagation(),n.startsWith(`arrow`)&&e.preventDefault(),n===` `){t&&Oe();return}ke[n]=t}}typeof window<`u`&&(window.addEventListener(`keydown`,e=>je(e,!0)),window.addEventListener(`keyup`,e=>je(e,!1)));let Me=null,Ne=null,Pe=null,Fe=null,Ie=null,Le=null,Re=null,ze=null,V=null,H=null,Be=null,Ve=null,He=null,Ue=null,We=!1;if(typeof document<`u`){let e=document.createElement(`style`);e.textContent=`
      .hoard-stick{position:fixed;left:22px;bottom:22px;width:124px;height:124px;border-radius:50%;
        background:rgba(16,18,24,0.5);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);
        border:1px solid rgba(255,255,255,0.18);z-index:4;display:none;touch-action:none;pointer-events:auto;}
      .hoard-stick .knob{position:absolute;left:50%;top:50%;width:54px;height:54px;margin:-27px 0 0 -27px;
        border-radius:50%;background:rgba(120,160,220,0.85);box-shadow:0 3px 12px rgba(0,0,0,0.4);}
      .hoard-btn{position:fixed;z-index:4;display:none;width:84px;height:84px;border-radius:50%;border:0;
        color:#fff;font:800 13px/1 ui-monospace,monospace;letter-spacing:.08em;pointer-events:auto;
        box-shadow:0 4px 16px rgba(0,0,0,0.4);touch-action:none;}
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
    `,document.head.appendChild(e),Me=document.createElement(`div`),Me.className=`hoard-stick`,Ne=document.createElement(`div`),Ne.className=`knob`,Me.appendChild(Ne),document.body.appendChild(Me);let t=!1,n=e=>{let t=Me.getBoundingClientRect(),n=e.clientX-(t.left+t.width/2),r=e.clientY-(t.top+t.height/2),i=Math.hypot(n,r)||1;i>44&&(n*=44/i,r*=44/i),Ne.style.transform=`translate(${n}px,${r}px)`,Ae.x=n/44,Ae.y=-r/44};Me.addEventListener(`pointerdown`,e=>{t=!0,Me.setPointerCapture(e.pointerId),n(e)}),Me.addEventListener(`pointermove`,e=>{t&&n(e)});let r=()=>{t=!1,Ae.x=0,Ae.y=0,Ne.style.transform=`translate(0,0)`};Me.addEventListener(`pointerup`,r),Me.addEventListener(`pointercancel`,r),Be=document.createElement(`button`),Be.className=`hoard-btn hoard-fire`,Be.textContent=`FIRE`,document.body.appendChild(Be),Ve=document.createElement(`button`),Ve.className=`hoard-btn hoard-melee`,Ve.textContent=`MELEE`,document.body.appendChild(Ve),Be.addEventListener(`pointerdown`,e=>{e.preventDefault(),be=!0}),Be.addEventListener(`pointerup`,()=>{be=!1}),Be.addEventListener(`pointercancel`,()=>{be=!1}),Ve.addEventListener(`pointerdown`,e=>{e.preventDefault(),Oe()}),Pe=document.createElement(`div`),Pe.className=`hoard-hud`,Pe.innerHTML=`HP<div class="bar"><i style="background:#e0524a"></i></div>STAMINA<div class="bar"><i style="background:#4ad08a"></i></div>HUNGER<div class="bar"><i style="background:#d89a3a"></i></div>THIRST<div class="bar"><i style="background:#3aa6dc"></i></div><div class="stat"></div>`,document.body.appendChild(Pe);let i=Pe.querySelectorAll(`i`);Fe=i[0],Ie=i[1],Le=i[2],Re=i[3],ze=Pe.querySelector(`.stat`),V=document.createElement(`div`),V.className=`hoard-banner`,document.body.appendChild(V),H=document.createElement(`div`),H.className=`hoard-death`,H.innerHTML=`<h2>YOU DIED</h2><div class="ds"></div><button>RESTART</button>`,document.body.appendChild(H),H.querySelector(`button`).addEventListener(`click`,()=>rt());let a=document.createElement(`style`);a.textContent=`
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
    `,document.head.appendChild(a),He=document.createElement(`button`),He.className=`hoard-bagbtn`,He.textContent=`🎒`,He.title=`Inventory (I)`,document.body.appendChild(He),He.addEventListener(`click`,()=>et()),Ue=document.createElement(`div`),Ue.className=`hoard-bag`,document.body.appendChild(Ue)}let Ge=0;function Ke(e,t=1.8){V&&(V.textContent=e,V.style.display=`block`),Ge=t}let qe=Math.PI/4;function Je(e){qe=e}function Ye(e,t){xe={x:e,z:t}}function Xe(e){be=e}function Ze(){if(typeof window<`u`&&(window.__hoardBag=Object.fromEntries(N.map(e=>[e.id,e.n]))),!Ue)return;let e=`<div class="panel"><h3>INVENTORY</h3><div class="slots">`;for(let t=0;t<8;t++){let n=N[t];n?e+=`<button class="slot" data-id="${n.id}" title="${Rt[n.id].name}">${Rt[n.id].glyph}<span class="n">${n.n}</span></button>`:e+=`<div class="slot empty"></div>`}e+=`</div><div class="craft">`,zt.forEach((t,n)=>{let r=Object.keys(t.need).every(e=>ie(e)>=t.need[e]),i=Object.entries(t.need).map(([e,t])=>`${t}${Rt[e].glyph}`).join(`+`);e+=`<button data-rec="${n}" ${r?``:`disabled`}>Craft ${Rt[t.out].name} (${i})</button>`}),e+=`</div><button class="close">CLOSE (I)</button></div>`,Ue.innerHTML=e,Ue.querySelectorAll(`.slot[data-id]`).forEach(e=>e.addEventListener(`click`,()=>{Rt[e.dataset.id].consumable&&oe(e.dataset.id)})),Ue.querySelectorAll(`[data-rec]`).forEach(e=>e.addEventListener(`click`,()=>se(zt[+e.dataset.rec]))),Ue.querySelector(`.close`).addEventListener(`click`,()=>$e())}function Qe(){!ce||ue||(We=!0,Ue&&Ue.classList.add(`open`),Ze())}function $e(){We=!1,Ue&&Ue.classList.remove(`open`)}function et(){We?$e():Qe()}function tt(e){z=e,he=5+e*2,pe=`spawning`}function nt(){C.x=0,C.z=0,C.vx=0,C.vz=0,C.hp=100,C.stamina=100,C.hunger=100,C.thirst=100,C.facing=0,C.iframe=0;for(let e of D)e.alive=!1;de=0,fe=0,B=0,ue=!1,be=!1,xe=null;for(let e of O)e.hp=150,e.alive=!0,e.mesh.scale.set(1,1,1);for(let e of A)e.active=!1,e.mesh.visible=!1;N.length=0;let e=[`food`,`water`,`food`,`water`,`bandage`,`scrap`];for(let t=0;t<6;t++){let n=Math.random()*Math.PI*2,r=1.6+Math.random()*(i-2);M(Math.cos(n)*r,Math.sin(n)*r,e[t])}H&&(H.style.display=`none`),u.position.set(0,r,0),u.visible=!0,tt(1),Ze()}function rt(){nt()}function it(e){ce=e,n.visible=e;let t=e&&a;Me&&(Me.style.display=t?`block`:`none`),Be&&(Be.style.display=t?`block`:`none`),Ve&&(Ve.style.display=t?`block`:`none`),Pe&&(Pe.style.display=e?`block`:`none`),V&&!e&&(V.style.display=`none`),H&&!e&&(H.style.display=`none`),He&&(He.style.display=e?`block`:`none`),$e();for(let e in ke)ke[e]=!1;Ae.x=Ae.y=0,be=!1,e&&nt()}let at=new _;function ot(e,t,n){if(!ce||We)return;let a=n?n.windowGlow:0;if(ve=Math.max(0,ve-e),ye=Math.max(0,ye-e),v.material.opacity=Math.max(0,v.material.opacity-e*8),h.material.opacity=Math.max(0,h.material.opacity-e*6),!ue){B+=e,C.iframe=Math.max(0,C.iframe-e);let n=(ke.d||ke.arrowright?1:0)-(ke.a||ke.arrowleft?1:0)+Ae.x,a=(ke.w||ke.arrowup?1:0)-(ke.s||ke.arrowdown?1:0)+Ae.y,o=Math.hypot(n,a);o>1&&(n/=o,a/=o);let l=o>.05,d=(ke.shift||Ae.y>.95)&&C.stamina>2&&l,f=Math.cos(qe),p=Math.sin(qe),m=f*n+-p*a,g=-p*n+-f*a,_=d?5.2:3,v=1-Math.exp(-14*e);C.vx+=(m*_-C.vx)*v,C.vz+=(g*_-C.vz)*v,C.x+=C.vx*e,C.z+=C.vz*e;let y=Math.hypot(C.x,C.z);y>i&&(C.x*=i/y,C.z*=i/y,C.vx=0,C.vz=0),l&&(C.facing=Math.atan2(m,g)),C.stamina=I.clamp(C.stamina+(d?-34:22)*e,0,100),C.hunger=Math.max(0,C.hunger-.9*e),C.thirst=Math.max(0,C.thirst-1.15*e),C.hunger<=0||C.thirst<=0?C.hp=Math.max(0,C.hp-3.5*e):C.hunger>55&&C.thirst>55&&C.hp<100&&(C.hp=Math.min(100,C.hp+2*e));for(let e of A)e.active&&(e.x-C.x)**2+(e.z-C.z)**2<.3&&ae(e.kind)&&(e.active=!1,e.mesh.visible=!1,Ze());for(let t of O){if(t.hp>=150)continue;let n=Math.cos(t.ang)*s,r=Math.sin(t.ang)*s;(n-C.x)**2+(r-C.z)**2<c*c&&(t.hp=Math.min(150,t.hp+30*e),t.hp>0&&(t.alive=!0))}C.hp<=0&&st(),u.position.set(C.x,r,C.z),u.rotation.y=C.facing,u.visible=!(C.iframe>0&&Math.floor(t*20)%2==0),be&&De(),h.position.set(C.x,r+.06,C.z),h.rotation.z=-C.facing}let l=0;ue||pe===`spawning`&&(he>0&&Math.random()<e*(z===1?3.5:6)&&(Ce(a),he--),he<=0&&(pe=`fighting`));let d=0,f=1/0;for(let n=0;n<48;n++){let i=D[n];if(!i.alive){at.position.set(0,-60,0),at.scale.setScalar(0),at.updateMatrix(),E.setMatrixAt(n,at.matrix);continue}l++;let a=C.x-i.x,c=C.z-i.z,u=Math.hypot(a,c)||1;if(u<f&&(f=u),!ue){let t=a/u*i.speed,n=c/u*i.speed,r=1-Math.exp(-6*e);if(i.vx+=(t-i.vx)*r,i.vz+=(n-i.vz)*r,u>.52){let t=i.x+i.vx*e,n=i.z+i.vz*e,r=Math.hypot(i.x,i.z),a=Math.hypot(t,n);if(!i.in&&r>=s&&a<4.9){let r=k(t,n);if(r.alive){let i=Math.atan2(n,t),a=4.9;t=Math.cos(i)*a,n=Math.sin(i)*a,r.hp-=15*e,r.hp<=0&&(r.hp=0,r.alive=!1)}}a<s-.1&&(i.in=!0),i.x=t,i.z=n}else C.iframe<=0&&(d=Math.max(d,i.dmg))}i.flash=Math.max(0,i.flash-e);let p=Math.sin(t*6+i.phase)*.04;at.position.set(i.x,r+.3*i.size*o+p,i.z),at.rotation.set(0,Math.atan2(i.vx,i.vz),Math.sin(t*3+i.phase)*.12),at.scale.setScalar(i.size*o),at.updateMatrix(),E.setMatrixAt(n,at.matrix),ee.set(Pt[i.type].color),i.flash>0?ee.lerp(It,.7):ee.lerp(Lt,.35*(1-i.hp/i.maxhp)),E.setColorAt(n,ee)}E.instanceMatrix.needsUpdate=!0,E.instanceColor&&(E.instanceColor.needsUpdate=!0);let p=0;for(let e of O){e.alive&&p++;let t=Math.max(0,e.hp/150);e.mesh.scale.y=e.alive?Math.max(.18,t):.12,e.mesh.position.y=r+.35*e.mesh.scale.y,e.mesh.material.color.copy(e.baseColor).lerp(Lt,(1-t)*.55)}!ue&&d>0&&(C.hp=Math.max(0,C.hp-d*(z===1?.5:1)),C.iframe=.6,C.hp<=0&&st()),!ue&&pe===`fighting`&&l===0&&he<=0&&(pe=`complete`,me=2.2,Ke(`WAVE ${z} CLEAR`,2)),!ue&&pe===`complete`&&(me-=e,me<=0&&(tt(z+1),Ke(`WAVE ${z}`,1.4))),Ge>0&&(Ge-=e,Ge<=0&&V&&(V.style.display=`none`)),Fe&&(Fe.style.width=`${C.hp}%`),Ie&&(Ie.style.width=`${C.stamina}%`),Le&&(Le.style.width=`${C.hunger}%`),Re&&(Re.style.width=`${C.thirst}%`),ze&&(ze.textContent=`WAVE ${z}   KILLS ${de}   SCORE ${fe}`),typeof window<`u`&&(window.__hoard={active:ce,dead:ue,paused:We,hp:Math.round(C.hp),stamina:Math.round(C.stamina),hunger:Math.round(C.hunger),thirst:Math.round(C.thirst),zombies:l,barriers:p,pickups:A.filter(e=>e.active).length,inv:Object.fromEntries(N.map(e=>[e.id,e.n])),wave:z,kills:de,score:fe,weapon:`gun`,znear:+f.toFixed(2),px:+C.x.toFixed(2),pz:+C.z.toFixed(2)})}function st(){ue=!0,be=!1,H&&(H.querySelector(`.ds`).innerHTML=`Wave reached: ${z}<br>Kills: ${de}<br>Score: ${fe}<br>Survived: ${B.toFixed(0)}s`,H.style.display=`flex`)}return{group:n,update:ot,setActive:it,setAzimuth:Je,setAim:Ye,setFiring:Xe,melee:Oe,reset:nt,restart:rt,openBag:Qe,closeBag:$e,toggleBag:et,addItem:ae,get player(){return C},get dead(){return ue},get active(){return ce},get paused(){return We},get inv(){return N.map(e=>({...e}))},get nearestPickup(){let e=null,t=1e9;for(let n of A){if(!n.active)continue;let r=(n.x-C.x)**2+(n.z-C.z)**2;r<t&&(t=r,e=n)}return e?{x:e.x,z:e.z}:null},setTarget(){}}}var Vt=[`empireState`,`chrysler`,`liberty`,`eiffel`,`arcDeTriomphe`,`sacreCoeur`,`tokyoTower`,`pagoda`,`neonBillboard`],Ht={empireState:1.25,chrysler:1.1,liberty:.55,eiffel:3.2,arcDeTriomphe:1.5,sacreCoeur:1.75,tokyoTower:1.35,pagoda:.5,neonBillboard:.9};function Ut(e){let t=()=>new d({flatShading:!0,roughness:.7,metalness:.1}),n=(n,r={})=>r.windows?Ze(t(),{color:n,id:e.id(),windowGlow:e.windowGlow,winColors:e.winColors,litFrac:e.litFrac}):U(t(),{color:n,glow:r.glow??null,glowDay:r.glowDay??0,glowNight:r.glowNight??1,windowGlow:r.glow?e.windowGlow:null});return{box:(e,t,r,i,a={})=>new y(new F(e,t,r),n(i,a)),cyl:(e,t,r,i,a={})=>new y(new se(e,t,r,a.seg||12),n(i,a)),cone:(e,t,r,i={})=>new y(new ue(e,t,i.seg||8),n(r,i)),sphere:(e,t,r={})=>new y(new S(e,r.seg||12,r.seg2||8),n(t,r)),lathe:(e,t,r={})=>new y(new u(e.map(e=>new j(e[0],e[1])),r.seg||4),n(t,r))}}var W=(e,t,n,r)=>(e.position.set(t,n,r),e),Wt=[`#7FB0E0`,`#E07FB0`,`#7FE0A0`,`#E0C97F`,`#9FE07F`,`#7FE0E0`,`#FF8C42`,`#E0E07F`,`#C97FE0`,`#E07F7F`,`#7F9FE0`,`#E0483A`],Gt={empireState(e,t){let n=`#E8E0CF`;e.add(W(t.box(.42,.18,.42,n,{windows:!0}),0,.09,0)),e.add(W(t.box(.34,.16,.34,n,{windows:!0}),0,.26,0)),e.add(W(t.box(.26,.14,.26,n,{windows:!0}),0,.41,0)),e.add(W(t.box(.19,.34,.19,n,{windows:!0}),0,.65,0)),e.add(W(t.box(.13,.06,.13,n,{windows:!0}),0,.85,0));let r=Wt[new Date().getMonth()];e.add(W(t.cyl(.03,.045,.12,n,{seg:10,glow:r,glowNight:1.85}),0,.94,0)),e.add(W(t.cone(.012,.07,n,{seg:8}),0,1.04,0))},chrysler(e,t){let n=`#C9CED4`;e.add(W(t.box(.22,.55,.22,`#9AA7B4`,{windows:!0}),0,.275,0));let r=.55;for(let i=0;i<5;i++){let a=.14-i*.024,o=.07;e.add(W(t.cyl(a*.7,a,o,n,{seg:8,glow:`#dfeaff`,glowNight:.5}),0,r+o/2,0)),r+=o}e.add(W(t.cone(.018,.16,n,{seg:8}),0,r+.08,0))},liberty(e,t){let n=`#B9B4A6`,r=`#4FA890`;e.add(W(t.box(.42,.16,.42,n),0,.08,0)),e.add(W(t.box(.3,.2,.3,n),0,.26,0)),e.add(W(t.cyl(.1,.15,.42,r,{seg:10}),0,.57,0)),e.add(W(t.box(.11,.1,.11,r),0,.83,0));for(let n=0;n<7;n++){let i=(n/6-.5)*Math.PI*1.1;e.add(W(t.cone(.012,.1,r,{seg:5}),Math.sin(i)*.1,.92,Math.cos(i)*.06-.02))}let i=W(t.cyl(.025,.03,.34,r,{seg:8}),.14,.98,0);i.rotation.z=.35,e.add(i),e.add(W(t.box(.06,.06,.06,r,{glow:`#ffd060`,glowDay:.6,glowNight:1.2}),.2,1.16,0)),e.add(W(t.cone(.04,.09,`#ffcf66`,{seg:6,glow:`#ffd060`,glowDay:.7,glowNight:1.3}),.2,1.24,0))},eiffel(e,t){let n=`#6E5C4C`,r=[[.2,0],[.13,.16],[.085,.33],[.055,.5],[.035,.66],[.02,.85],[0,.92]];e.add(t.lathe(r,n,{seg:4}));let i=t.lathe(r,n,{seg:4});i.rotation.y=Math.PI/4,e.add(i),e.add(W(t.box(.26,.025,.26,n),0,.33,0)),e.add(W(t.box(.14,.02,.14,n),0,.66,0)),e.add(W(t.cone(.01,.1,n,{seg:6}),0,.97,0))},arcDeTriomphe(e,t){let n=`#D9D0C1`,r=.58,i=.5,a=.34,o=new k;o.moveTo(-.58/2,0),o.lineTo(r/2,0),o.lineTo(r/2,i),o.lineTo(-.58/2,i),o.lineTo(-.58/2,0);let s=new xe,c=.15,l=.22;s.moveTo(-.15,0),s.lineTo(-.15,l),s.absarc(0,l,c,Math.PI,0,!0),s.lineTo(c,0),s.lineTo(-.15,0),o.holes.push(s);let u=new be(o,{depth:a,bevelEnabled:!1});u.translate(0,0,-.34/2),u.computeVertexNormals(),e.add(new y(u,U(new d({color:n,flatShading:!0}),{color:n}))),e.add(W(t.box(r*1.06,.08,a*1.06,n),0,.54,0))},sacreCoeur(e,t){let n=`#F1EEE6`;e.add(W(t.box(.5,.26,.4,n),0,.13,0));let r=(r,i,a,o)=>{e.add(W(t.cyl(a*.9,a,i,n,{seg:12}),r,o,0));let s=W(t.sphere(a,n,{seg:12}),r,o+i/2,0);s.scale.y=1.5,e.add(s)};r(0,.22,.15,.4),r(-.2,.1,.07,.33),r(.2,.1,.07,.33)},tokyoTower(e,t){let n=`#F25822`,r=`#EDEDED`,i=0;for(let a=0;a<9;a++){let o=a/9,s=(a+1)/9,c=.19*(1-o)+.03*o,l=.19*(1-s)+.03*s,u=.085,d=a%2?r:n;e.add(W(t.cyl(l,c,u,d,{seg:4,glow:n,glowDay:0,glowNight:.7}),0,i+u/2,0)),i+=u}e.add(W(t.box(.22,.02,.22,n,{glow:n,glowNight:.7}),0,.28,0)),e.add(W(t.box(.12,.02,.12,r),0,.5,0)),e.add(W(t.cone(.012,.16,r,{seg:6,glow:`#ff6a2a`,glowNight:.9}),0,i+.08,0))},pagoda(e,t){let n=0;for(let r=0;r<5;r++){let i=.42-r*.06,a=.11;e.add(W(t.box(i,a,i,`#B23A2C`,{windows:r<4}),0,n+a/2,0)),e.add(W(t.box(i*1.34,.03,i*1.34,`#7A3B2A`),0,n+a+.015,0)),n+=.16999999999999998}e.add(W(t.cyl(.012,.012,.1,`#E0C040`,{seg:6}),0,n+.05,0)),e.add(W(t.sphere(.03,`#E0C040`,{seg:8,glow:`#ffe680`,glowNight:.8}),0,n+.12,0))},neonBillboard(e,t){let n=`#20242C`;e.add(W(t.box(.3,1,.3,n,{windows:!0}),0,.5,0));let r=[`#5AE8E0`,`#E85AA0`,`#E8E06A`],i=(n,r,i,a,o,s,c)=>{let l=W(t.box(n,r,.02,i,{glow:i,glowDay:.6,glowNight:1.1}),a,o,s);l.rotation.y=c,e.add(l)};i(.22,.34,r[0],0,.75,.16,0),i(.16,.5,r[1],.16,.5,0,Math.PI/2),i(.2,.22,r[2],0,.34,-.16,0),e.add(W(t.cone(.01,.14,n,{seg:6,glow:`#E85AA0`,glowDay:.4,glowNight:1}),0,1.08,0))}};function Kt(e,t){let n=new w;return Gt[e](n,Ut(t)),n}var qt=``+new URL(`building-skyscraper-d-CapD2Zqe.glb`,import.meta.url).href,Jt=``+new URL(`building-n-hdv8kKtN.glb`,import.meta.url).href,Yt=``+new URL(`building-g-CsTB1qH9.glb`,import.meta.url).href,Xt=``+new URL(`colormap-CK8fW2HB.png`,import.meta.url).href,Zt={skyscraper:{url:qt,color:`#9cc1dd`,fill:.92},midrise:{url:Jt,color:`#c9a07a`,fill:.96},setback:{url:Yt,color:`#d9c7a0`,fill:.9}};function Qt({windowGlow:e}){let t=new o;t.setURLModifier(e=>e.includes(`colormap.png`)?Xt:e);let n=new me(t),r={},i=!1,a=Promise.all(Object.entries(Zt).map(async([e,t])=>{r[e]=(await n.loadAsync(t.url)).scene})).then(()=>{i=!0,window.__landmarksReady=!0}).catch(e=>console.error(`landmark models failed:`,e)),s=9e3;function c(t,n,i={}){let a,o;if(Vt.includes(t))a=Kt(t,{windowGlow:e,winColors:i.winColors,litFrac:i.litFrac,id:()=>++s}),o=1;else{let e=r[t],n=Zt[t];if(!e||!n)return null;a=e.clone(!0),o=n.fill}a.updateMatrixWorld(!0);let c=new de().setFromObject(a).getSize(new R);a.scale.setScalar(n.h*o/c.y),a.updateMatrixWorld(!0);let l=new de().setFromObject(a),u=l.getCenter(new R);return a.position.x+=n.x-u.x,a.position.z+=n.z-u.z,a.position.y+=n.plinthTop-l.min.y,Vt.includes(t)?a.traverse(e=>{e.isMesh&&(e.castShadow=!1,e.raycast=()=>{})}):a.traverse(n=>{if(!n.isMesh)return;n.castShadow=!1,n.raycast=()=>{};let r=n=>Ze(n.clone(),{color:Zt[t].color,id:++s,windowGlow:e,winColors:i.winColors,litFrac:i.litFrac});n.material=Array.isArray(n.material)?n.material.map(r):r(n.material)}),a}return{make:c,whenReady:a,heightFactor:e=>Ht[e]??1,get ready(){return i}}}var $t=[`video/mp4;codecs=avc1.42E01E`,`video/mp4`,`video/webm;codecs=vp9`,`video/webm`];function en({renderer:e,rig:t,sunRig:n,poke:r,getState:i,office:a={}}){let o=e.domElement,s=new URLSearchParams(window.location.search),c=e=>{let t=i();return`lgr-${t.lesson}-${String(t.clock||``).replace(`:`,``)}-${t.style}.${e}`},l=(e,t)=>{let n=URL.createObjectURL(e),r=document.createElement(`a`);r.href=n,r.download=t,document.body.appendChild(r),r.click(),r.remove(),setTimeout(()=>URL.revokeObjectURL(n),1e3)};function u(){o.toBlob(e=>{e&&(l(e,c(`png`)),window.__lastStill=e.size)},`image/png`)}let d=()=>$t.find(e=>window.MediaRecorder&&MediaRecorder.isTypeSupported(e))||``,f=tn(),p=null,m=[],h=!1;function g(){if(h)return;let e=d(),t=o.captureStream(60);p=new MediaRecorder(t,e?{mimeType:e,videoBitsPerSecond:12e6}:{}),m=[],p.ondataavailable=e=>{e.data&&e.data.size&&m.push(e.data)},p.onstop=()=>{let e=new Blob(m,{type:p.mimeType});l(e,c(p.mimeType.includes(`mp4`)?`mp4`:`webm`)),window.__lastVideo=e.size},p.start(),h=!0,window.__recording=!0,f.show()}function _(){h&&(p.stop(),h=!1,window.__recording=!1,f.hide())}let v=()=>h?_():g(),y=e=>new Promise(t=>setTimeout(t,e)),b=e=>window.dispatchEvent(new KeyboardEvent(`keydown`,{key:e}));async function x(){let e=o.clientWidth,t=o.clientHeight,n=e*.26,i=t*.74;for(let t=0;t<=10;t++)r.at(n+t*e*.028,i+Math.sin(t*.7)*16),await y(100);r.stop()}async function S(e){if(e.keys)for(let t of e.keys)b(t),await y(70);e.zoom&&t.zoomBy(e.zoom),e.orbit&&t.orbit(e.orbit[0],e.orbit[1]),e.timeTo!==void 0&&n.goTo(e.timeTo),e.office&&a[e.office]?.(),e.ripple&&await x(),e.waitMs&&await y(e.waitMs)}let C={tour:[{keys:[`6`,`0`],waitMs:600},{zoom:.72,waitMs:1700},{ripple:!0,waitMs:2400},{orbit:[.55,0],waitMs:1700},{timeTo:0,waitMs:3e3},{timeTo:.5,waitMs:1500},{keys:[`7`],waitMs:1e3},{zoom:1.5,waitMs:1400},{keys:[`B`],waitMs:2e3},{keys:[`B`],waitMs:2e3},{keys:[`B`],waitMs:2e3},{keys:[`B`],waitMs:2e3},{keys:[`B`],waitMs:2e3},{keys:[`8`],waitMs:900},{zoom:.65,waitMs:1200},{ripple:!0,waitMs:2600},{keys:[`7`],waitMs:700},{keys:[`B`],waitMs:300},{keys:[`B`],waitMs:900},{zoom:1.4,waitMs:2600}],daycycle:[{keys:[`6`,`0`],waitMs:700},{timeTo:.75,waitMs:2600},{timeTo:1,waitMs:2600},{timeTo:1.25,waitMs:2600},{timeTo:1.5,waitMs:2600},{timeTo:1.5,waitMs:800}],office:[{keys:[`o`],waitMs:1700},{office:`pet`,waitMs:1300},{office:`feed`,waitMs:1700},{office:`travel`,waitMs:1700},{keys:[`W`,`W`,`W`],waitMs:1800},{timeTo:0,waitMs:2400},{office:`laptop`,waitMs:800},{office:`closeLaptop`,waitMs:300},{timeTo:.5,waitMs:900},{keys:[`W`],waitMs:200},{keys:[`o`],waitMs:1500}],cities:[{keys:[`6`,`0`],waitMs:500},{timeTo:.78,waitMs:2800},{keys:[`C`],waitMs:3e3},{keys:[`C`],waitMs:3e3},{keys:[`C`],waitMs:2e3}],water:[{keys:[`6`,`0`],waitMs:600},{zoom:1.35,waitMs:2800},{orbit:[.7,0],waitMs:2600},{ripple:!0,waitMs:2200},{timeTo:0,waitMs:3200},{timeTo:.5,waitMs:1500},{orbit:[-.5,0],waitMs:2200}],morph:[{keys:[`6`,`3`],waitMs:700},{zoom:.55,waitMs:1800},{zoom:2.3,waitMs:1700},{zoom:1.26,waitMs:1700},{zoom:1.16,waitMs:1900},{zoom:.3,waitMs:2200}],skin:[{keys:[`o`],waitMs:1800},{keys:[`j`],waitMs:2e3},{keys:[`j`],waitMs:2e3},{timeTo:0,waitMs:2600},{timeTo:.5,waitMs:1500},{keys:[`u`],waitMs:2e3},{keys:[`j`],waitMs:1400},{keys:[`o`],waitMs:1500}]};async function w(e){let t=C[e];if(t){window.__director=e;for(let e of t)await S(e);window.__director=null}}async function T(e){await y(1600),g(),await w(e),await y(400),_(),window.__captureDone=!0}window.addEventListener(`keydown`,e=>{(e.key===`s`||e.key===`S`)&&u(),(e.key===`r`||e.key===`R`)&&v()});let E=s.get(`capture`);return E&&C[E]&&T(E),window.__capture={still:u,toggleRec:v,run:w,sequences:Object.keys(C)},window.__capture}function tn(){let e=document.createElement(`div`);return e.textContent=`● REC`,e.style.cssText=`position:fixed;top:14px;right:16px;z-index:2;font:bold 12px ui-monospace,monospace;color:#ff3b30;letter-spacing:.12em;text-shadow:0 1px 3px #000;display:none;`,document.body.appendChild(e),{show:()=>{e.style.display=`block`},hide:()=>{e.style.display=`none`}}}var nn=`
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
`;function rn({controls:e,state:t,show:n,coarse:r}){if(typeof document>`u`)return;let i=document.createElement(`style`);i.textContent=nn,document.head.appendChild(i);let a=document.createElement(`div`);a.className=`vui`;let o=document.createElement(`div`);o.className=`vui-info`,o.innerHTML=`KEYS · 4/5/6 cam · 0 vector · 7/8 pixel/toon · B era · T time · [ ] scrub · 9 auto · C city · G shuffle · W weather · K season · click a building / O office · J office skin · U painted props · Esc exit · M hide UI · S still · R rec · H shadows · P theme · drag water to ripple`;let s=(e,t,n)=>{let r=document.createElement(`button`);return r.textContent=e,n&&(r.title=n),r.addEventListener(`click`,t),r},c=e=>{let t=document.createElement(`div`);return t.className=`seg`,{seg:t,btns:e.map(([n,r])=>{let i=s(n,()=>e.find(e=>e[1]===r)[2](),n);return i.dataset.val=r,t.appendChild(i),i})}},l=s(`City`,()=>e.city(),`Next city profile (C)`),u=s(`Shuffle`,()=>e.shuffle(),`New random seed (G)`),d={clear:`Clear`,rain:`Rain`,snow:`Snow`,fog:`Fog`},f=[`Spring`,`Summer`,`Autumn`,`Winter`],p=s(`Clear`,()=>e.weather(),`Cycle weather: clear→rain→snow→fog (W)`),m=s(`Spring`,()=>e.season(),`Cycle season: spring→summer→autumn→winter (K)`),h=s(`Office`,()=>e.office(),`Dive into / exit the office (O · Esc)`),g={"3d":`3D`,smooth:`Smooth`,charm:`Charm`},_=s(`Skin`,()=>e.officeSkin(),`Office look: 3D → smooth → charm diffusion (J)`),v={painted:`Painted`,"3d":`Live 3D`},y=s(`Props`,()=>e.officeProps(),`Office props: painted (cohesive) ↔ live 3D (animated) — under a skin (U)`),b=c([[`Auto`,`auto`,()=>e.style(`auto`)],[`Vector`,`vector`,()=>e.style(`vector`)],[`Pixel`,`pixel`,()=>e.style(`pixel`)],[`Toon`,`toon`,()=>e.style(`toon`)]]);b.btns[0].title=`AUTO: zoom morphs the style (toon → 16-bit → 8-bit → Game Boy)`;let x={native:`Era`,gb:`GB`,"8-bit":`8-bit`,"16-bit":`16-bit`,modern:`Modern`,"1-bit":`1-bit`},S=s(`Era`,()=>e.era(),`Cycle the pixel era (B): native → GB → 8-bit → 16-bit → Modern`),C=document.createElement(`input`);C.type=`range`,C.min=`0`,C.max=`1`,C.step=`0.01`,C.title=`Time of day`;let w=!1;C.addEventListener(`pointerdown`,()=>{w=!0}),C.addEventListener(`pointerup`,()=>{w=!1}),C.addEventListener(`input`,()=>e.time(parseFloat(C.value)));let T=s(`▶`,()=>e.auto(),`Play/pause day cycle (9)`),E=document.createElement(`div`);E.style.cssText=`display:flex;align-items:center;gap:6px;`;let D=document.createElement(`span`);D.className=`lbl`,D.textContent=`Day`,E.append(D,C,T);let ee=c([[`Iso`,`iso`,()=>e.cam(`iso`)],[`Dim`,`dimetric`,()=>e.cam(`dimetric`)],[`3D`,`persp`,()=>e.cam(`persp`)]]),O=s(`ⓘ`,()=>o.classList.toggle(`open`),`All keys`),te=s(`⌄`,()=>ie(!0),`Hide controls — watch unobstructed (M)`),k=document.createElement(`div`);k.className=`vui-more`;let A=s(`More`,()=>k.classList.toggle(`open`),`More controls`);if(r){a.append(l,u,h,T,b.seg,A,te);let e=document.createElement(`div`);e.style.cssText=`display:flex;align-items:center;gap:6px;`,e.append(D,C),k.append(p,m,_,y,S,ee.seg,e)}else a.append(l,u,oe(),p,m,h,_,y,oe(),b.seg,S,oe(),E,oe(),ee.seg,O,oe(),te);let ne=document.createElement(`button`);ne.className=`vui-show`,ne.innerHTML=`⌃ Controls`,ne.title=`Show controls (M)`,ne.addEventListener(`click`,()=>ie(!1));let j=document.createElement(`div`);j.className=`vui-style`,document.body.append(o,k,a,ne,j);let re=n,M=!1;ie(r);function N(){let e=t();b.btns.forEach(t=>t.classList.toggle(`on`,t.dataset.val===e.style)),ee.btns.forEach(t=>t.classList.toggle(`on`,t.dataset.val===e.cam)),p.textContent=d[e.weather]||`Clear`,p.classList.toggle(`on`,e.weather!==`clear`),m.textContent=f[e.season]||`Spring`,m.classList.toggle(`on`,(e.season||0)>0),h.textContent=e.office?`Exit`:`Office`,h.classList.toggle(`on`,!!e.office),_.textContent=g[e.officeSkin]||`Skin`,_.classList.toggle(`on`,e.officeSkin&&e.officeSkin!==`3d`),y.textContent=v[e.officeProps]||`Props`,y.classList.toggle(`on`,e.officeProps===`painted`&&e.officeSkin&&e.officeSkin!==`3d`),T.textContent=e.auto?`❚❚`:`▶`,T.classList.toggle(`on`,e.auto),S.textContent=x[e.era]||`Era`,S.classList.toggle(`on`,e.era&&e.era!==`native`),w||(C.value=String(e.t))}N();let P=setInterval(N,200);function ie(e){if(!re){a.style.display=`none`,ne.classList.remove(`on`),o.classList.remove(`open`),k.classList.remove(`open`),j.classList.remove(`on`);return}M=e,a.style.display=e?`none`:`flex`,ne.classList.toggle(`on`,e),e&&(o.classList.remove(`open`),k.classList.remove(`open`),j.classList.remove(`on`))}function F(){ie(!M)}let ae=null,I=null;function L(e){if(!re||M){j.classList.remove(`on`),ae=null;return}if(!e){j.classList.remove(`on`),ae=``;return}e!==ae&&(ae=e,j.textContent=e,j.classList.add(`on`),clearTimeout(I),I=setTimeout(()=>j.classList.remove(`on`),2e3))}return{toggle:F,setHidden:ie,refresh:N,setStyleHint:L,destroy(){clearInterval(P),a.remove(),o.remove(),k.remove(),ne.remove(),j.remove(),i.remove(),clearTimeout(I)}};function oe(){let e=document.createElement(`div`);return e.className=`sep`,e}}var an=[`clear`,`rain`,`snow`,`fog`];function on({extent:e=7}={}){let t=new w;t.raycast=()=>{};let n=e+2,r=.25,i=(e,t)=>e+Math.random()*(t-e),a=new T(new p(.015,.5),new x({color:`#a9bdd6`,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),600);a.frustumCulled=!1,a.raycast=()=>{};let o=new Float32Array(600*3),s=new Float32Array(600);for(let e=0;e<600;e++)o[e*3]=i(-n,n),o[e*3+1]=i(r,11),o[e*3+2]=i(-n,n),s[e]=i(9,14);let c=new T(new p(.07,.07),new x({color:`#f3f7ff`,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),700);c.frustumCulled=!1,c.raycast=()=>{};let l=new Float32Array(700*3),u=new Float32Array(700),d=new Float32Array(700);for(let e=0;e<700;e++)l[e*3]=i(-n,n),l[e*3+1]=i(r,11),l[e*3+2]=i(-n,n),u[e]=i(0,6.28),d[e]=i(.6,1.2);t.add(a,c);let f=Array.from({length:8},()=>new R),m=0,h=`clear`,g=0,v=0,y=0,b=0,S=0,C=new _,E=(e,t,n,r)=>e+(t-e)*Math.min(1,n*r);function D(e){an.includes(e)&&(h=e)}function ee(){h=an[(an.indexOf(h)+1)%an.length]}function O(e,t){let p=h===`rain`,_=h===`snow`,x=h===`fog`,w=h!==`clear`;g=E(g,+!!w,e,1.4),v=E(v,+!!w,e,1.2),y=E(y,+!!x,e,.9),S=E(S,w&&!x?1:0,e,1),b=E(b,+!!_,e,_?.22:.5);let T=p?g:0,D=Math.round(600*T);for(let t=0;t<600;t++){if(t>=D){C.position.set(0,-50,0),C.scale.setScalar(0),C.updateMatrix(),a.setMatrixAt(t,C.matrix);continue}o[t*3+1]-=s[t]*e,o[t*3]+=e*1.1,o[t*3+1]<r&&(o[t*3]=i(-n,n),o[t*3+1]=11,o[t*3+2]=i(-n,n)),C.position.set(o[t*3],o[t*3+1],o[t*3+2]),C.rotation.set(0,0,0),C.scale.set(1,1,1),C.updateMatrix(),a.setMatrixAt(t,C.matrix)}a.instanceMatrix.needsUpdate=!0,a.material.opacity=.55*T,m=p?Math.round(8*g):0;for(let e=0;e<m;e++)f[e].set(Math.random(),Math.random(),.05*g);let ee=Math.round(700*(_?g:0));for(let a=0;a<700;a++){if(a>=ee){C.position.set(0,-50,0),C.scale.setScalar(0),C.updateMatrix(),c.setMatrixAt(a,C.matrix);continue}l[a*3+1]-=d[a]*e;let o=Math.sin(t*1.5+u[a])*.5;l[a*3+1]<r&&(l[a*3]=i(-n,n),l[a*3+1]=11,l[a*3+2]=i(-n,n)),C.position.set(l[a*3]+o,l[a*3+1],l[a*3+2]),C.rotation.set(0,0,0),C.scale.setScalar(1),C.updateMatrix(),c.setMatrixAt(a,C.matrix)}c.instanceMatrix.needsUpdate=!0,c.material.opacity=.9*(_?g:0)}return{group:t,update:O,cycle:ee,setKind:D,rainDrops:f,get kind(){return h},get intensity(){return g},get overcast(){return v},get fog(){return y},get snow(){return b},get cloud(){return S},get rainDropCount(){return m},poolCounts:{rain:600,snow:700}}}var sn=``+new URL(`office-smooth-DEluvd7o.png`,import.meta.url).href,cn=``+new URL(`office-charm-D7t90SkH.png`,import.meta.url).href;function G(e,t,n,r,{rough:i=.62,metal:a=0,x:o=0,y:s=0,z:c=0,emissive:l=null,emissiveIntensity:u=1}={}){let f=new y(new F(e,t,n),new d({color:r,roughness:i,metalness:a,...l?{emissive:l,emissiveIntensity:u}:{}}));return f.position.set(o,s,c),f}function ln({tier:e=`corner`}={}){let t=new te,n=new s(43,1,.1,100),r=new R(0,1.62,4.35);n.position.copy(r),n.lookAt(0,1.12,-1);let i=new w;t.add(i);let o=new w,c=new w,l=new w,u=new w,f=new w;i.add(o,c,l,u,f);let m=[],g=`#3a2618`,_=`#5b3d27`,v=`#5a5650`;o.add(G(11,.2,11,`#3c2a1c`,{rough:.5,y:-.1})),o.add(G(11,.2,11,`#241a13`,{rough:.9,y:3}));function b(e){let t=new w;t.add(G(.2,3.2,8,`#4a3322`,{rough:.7,x:e*3.6,y:1.5,z:0}));for(let n of[.9,2.1])t.add(G(.22,.06,8,g,{x:e*3.59,y:n,z:0}));let n=new y(new p(1.5,1),new d({map:_n(e),roughness:.8}));return n.position.set(e*3.49,1.7,.4),n.rotation.y=-e*Math.PI/2,t.add(G(.06,1.18,1.68,`#2a1c10`,{x:e*3.52,y:1.7,z:.4}),n),t}o.add(b(-1),b(1));let S=new p(3,2.5),C=new x({color:`#ffffff`,toneMapped:!1}),T=new x({color:`#ffffff`,toneMapped:!1}),D=1.55,ee=new y(S,C);ee.position.set(-1.06,D,-2.64),ee.rotation.y=Math.PI/4;let O=new y(S,T);O.position.set(1.06,D,-2.64),O.rotation.y=-Math.PI/4,l.add(ee,O),o.add(G(.08,2.7,.08,g,{x:0,y:D,z:-2.2}));for(let[e,t,n]of[[-1.06,-2.64,Math.PI/4],[1.06,-2.64,-Math.PI/4]]){let r=new w;r.add(G(3.05,.09,.09,g,{y:1.3})),r.add(G(3.05,.09,.09,g,{y:-1.25})),r.add(G(.09,2.6,.09,g,{x:-1.5})),r.position.set(e,D,t),r.rotation.y=n,o.add(r)}o.add(G(5.4,.5,.3,_,{x:0,y:.25,z:-2.1500000000000004})),o.add(G(.4,.06,.4,`#1a130c`,{y:2.94,z:1.3}));let k=new y(new ge(.16,20),new x({color:`#ffe6b0`,toneMapped:!1}));k.position.set(0,2.9,1.3),k.rotation.x=Math.PI/2,o.add(k),o.add(dn(m,{x:-3.46,y:2.15,z:.2,ry:Math.PI/2,face:`#efe2c8`,rim:`#2a1c10`})),c.add(G(11,.2,11,`#403d38`,{rough:.85,y:-.1})),c.add(G(11,.2,11,`#1c1a17`,{rough:.95,y:2.8})),c.add(G(7,3,.2,v,{rough:.92,x:0,y:1.4,z:-2.9})),c.add(G(.2,3,6,v,{rough:.92,x:-3.2,y:1.4,z:-.2})),c.add(G(.2,3,6,v,{rough:.92,x:3.2,y:1.4,z:-.2}));for(let e of[-1.6,-.4]){let t=new y(new se(.07,.07,6,10),new d({color:`#6b6258`,roughness:.6,metalness:.4}));t.rotation.z=Math.PI/2,t.position.set(0,2.62,e),c.add(t)}let A=new x({color:`#ffffff`,toneMapped:!1}),ne=new y(new p(1.9,1.2),A);ne.position.set(0,1.5,-2.79),c.add(ne),c.add(G(2.06,1.36,.06,`#241a12`,{x:0,y:1.5,z:-2.83})),c.add(G(.04,.34,.04,`#1a1410`,{x:-.1,y:2.45,z:-.4}));let j=new y(new ge(.1,16),new x({color:`#ffdb8a`,toneMapped:!1}));j.position.set(-.1,2.26,-.4),j.rotation.x=Math.PI/2,c.add(j);let re=new w;re.add(G(1.3,.05,.32,`#3a2c1e`,{x:0,y:0,z:0}));let M=[`#7a3a2a`,`#2a4a6a`,`#b08a3a`,`#3a5a3a`,`#6a2a4a`];for(let e=0;e<8;e++)re.add(G(.12,.34,.24,M[e%M.length],{x:-.55+e*.14,y:.2,z:0}));re.position.set(-2.3,1.5,-2.66),c.add(re);let ie=new w;ie.add(G(.34,.34,.34,`#7a4a2a`,{y:.17}));let ae=new w;for(let e=0;e<6;e++){let t=G(.05,.5,.14,`#3a7a3a`,{rough:.7});t.geometry.translate(0,.25,0),t.rotation.z=(e/6-.5)*1.2,t.rotation.x=Math.sin(e)*.25,ae.add(t)}ae.position.y=.34,ie.add(ae),ie.position.set(2.45,0,-1.4),c.add(ie),c.add(dn(m,{x:1.9,y:2.1,z:-2.78,ry:0,face:`#d8d2c4`,rim:`#1a130c`}));let L=new w;L.add(G(3.4,.12,1.5,`#6e4a30`,{rough:.32,y:.86,z:1.5})),L.add(G(3.2,.78,1.36,_,{y:.46,z:1.5}));for(let e of[.66,.4,.14])L.add(G(.9,.2,.04,`#4a3120`,{x:1.05,y:e,z:2.2}));L.add(G(.12,.04,.04,`#caa15a`,{x:1.05,y:.66,z:2.23,metal:.6})),i.add(L);let oe=new w;oe.add(G(.06,.5,.06,`#2a1c10`,{x:-1.15,y:1.15,z:1.6}));let ce=new y(new ue(.22,.26,16,1,!0),new d({color:`#c2802e`,roughness:.5,side:2,emissive:`#3a2208`,emissiveIntensity:.6}));ce.position.set(-1.15,1.42,1.6),oe.add(ce);let le=new E(`#ffb15a`,7,7,1.8);le.position.set(-1.15,1.34,1.6),oe.add(le),i.add(oe);let z=new w;z.add(G(.62,.03,.42,`#1c1c20`,{y:.93,z:1.5,metal:.4,rough:.4}));let de=new y(new F(.62,.4,.025),new d({color:`#0a0c10`,emissive:`#2a4a6a`,emissiveIntensity:.7,roughness:.3}));de.position.set(0,1.14,1.31),de.rotation.x=-.32,z.add(de),z.userData.role=`laptop`,i.add(z);let B=new w;B.add(G(.26,.07,.34,`#15151a`,{x:1,y:.93,z:1.5})),B.add(G(.3,.06,.08,`#101015`,{x:1,y:1,z:1.34})),B.userData.role=`phone`,i.add(B);let pe=new ve(`#6a5238`,`#140d08`,.55);t.add(pe);let me=new a(`#ffd9a0`,9,9,.7,.5,1.2);me.position.set(0,2.95,1.3),me.target.position.set(0,.86,1.5),t.add(me,me.target);let _e=fn(!1),ye=fn(!0),be=.62,xe=1.32,Se=1.22,Ce=1.78,we=new N(new he({map:_e,transparent:!0,depthWrite:!1}));we.scale.set(be,be,1),we.position.set(xe,Se,Ce),we.userData.role=`cat`,i.add(we);let Te=new N(new he({map:mn(),transparent:!0,depthWrite:!1,opacity:0}));Te.scale.set(.3,.3,1),Te.raycast=()=>{},i.add(Te);let Ee=0;function De(){Ee=1.3}let Oe=.62,ke=.42,Ae=.34,je=new w;je.position.set(-.78,1.06,1.95),je.add(G(Oe,.05,Ae,`#3a3026`,{y:-.19}));let Me=new y(new F(Oe-.04,ke-.08,Ae-.04),new d({color:`#1f9fc0`,transparent:!0,opacity:.26,roughness:.1,emissive:`#0a3a4a`,emissiveIntensity:.4,depthWrite:!1}));Me.position.y=.02,je.add(Me);for(let e of[-1,1])for(let t of[-1,1])je.add(G(.03,ke,.03,`#20262c`,{x:e*(Oe/2-.015),z:t*(Ae/2-.015),metal:.5}));let Ne=new y(new F(Oe,ke,Ae),new x({visible:!1}));Ne.userData.role=`tank`,je.add(Ne);let Pe=new E(`#5fd8ff`,0,3,2);je.add(Pe);let Fe=[hn(`#e8a23c`),hn(`#d85a6a`),hn(`#6cc0e0`)],Ie=[],Le=ke/2-.12;for(let e=0;e<3;e++){let t=new N(new he({map:Fe[e],transparent:!0,depthWrite:!1})),n=.15-e*.015;t.userData={sz:n,sp:.6+e*.22,ph:e*2.1,ax:.21*(.7+.1*e),ay:Le,az:.09000000000000001,prevx:0},t.scale.set(n,n,1),Ie.push(t),je.add(t)}let Re=gn(),ze=[];for(let e=0;e<5;e++){let t=new N(new he({map:Re,color:`#cfeffb`,transparent:!0,opacity:.5,depthWrite:!1}));t.userData={ph:e/5,sp:.16+Math.random()*.06,x:-.1+e%3*.07},t.scale.setScalar(.03+e%2*.015),t.raycast=()=>{},ze.push(t),je.add(t)}let V=new N(new he({map:Re,color:`#c8a24a`,transparent:!0,opacity:0,depthWrite:!1}));V.scale.setScalar(.04),V.raycast=()=>{},je.add(V);let H=0;function Be(){H=3,V.position.set(-.05,Le,0),V.material.opacity=1}i.add(je);let Ve=new w;for(let e=0;e<8;e++){let t=new N(new he({map:Re,color:`#ffd9a0`,transparent:!0,opacity:0,depthWrite:!1,blending:2}));t.scale.setScalar(.018),t.userData={ph:e*.9,sp:.1+e%3*.04,r:.1+e%4*.03},t.raycast=()=>{},Ve.add(t)}Ve.position.set(-1.15,1.2,1.6),i.add(Ve),[L,oe,z,B,we,je,Ve].forEach(e=>u.add(e));function He(e,t,n,r,i,a,o){let s=new y(new F(t,n,r),new x({visible:!1}));s.position.set(i,a,o),s.userData.role=e,f.add(s)}He(`laptop`,.95,.6,.7,0,1.05,1.4),He(`phone`,.5,.4,.5,1,.98,1.42),He(`cat`,.62,.74,.5,xe,Se,Ce);let Ue=un(),We={smooth:new fe().load(sn),charm:new fe().load(cn)};for(let e of[`smooth`,`charm`]){let t=We[e];t.colorSpace=h,t.repeat.set(1,.86),t.offset.set(0,.14),t.needsUpdate=!0}let Ge=new y(new p(1,1),new x({map:We.smooth,toneMapped:!1}));Ge.position.set(0,1.45,-5),Ge.visible=!1,Ge.raycast=()=>{},t.add(Ge);let Ke=`3d`,qe=`painted`;function Je(){let e=nt===`corner`,t=Ke!==`3d`,n=t&&qe===`painted`;o.visible=e&&!t,c.visible=!e&&!t,l.visible=t||e,Ge.visible=t,u.visible=!n}function Ye(e){return Ke=e===`smooth`||e===`charm`?e:`3d`,Ke!==`3d`&&(Ge.material.map=We[Ke],Ge.material.needsUpdate=!0),Je(),Ke}function Xe(e){return qe=e===`3d`?`3d`:`painted`,Je(),qe}let Ze=le.intensity,U=de.material.emissiveIntensity,Qe=new P;function $e(e,t,i){let a=i?i.windowGlow:0,o=a>.55;we.material.map=o?ye:_e,Ee>0&&(Ee=Math.max(0,Ee-e));let s=Ee>0?Math.sin((1.3-Ee)/1.3*Math.PI):0,c=o?.012*Math.sin(t*1.2):.03*Math.sin(t*2.4);we.scale.set(be,be*(1+c+.12*s),1),we.position.y=Se+.06*s,Te.material.opacity=s,Te.position.set(xe,1.72+.5*(1-Ee/1.3),Ce),Te.scale.setScalar(.22+.1*s),H>0&&(H=Math.max(0,H-e),V.position.y=Math.max(-.09,V.position.y-e*.06),V.material.opacity=H>.3?1:H/.3);for(let e of Ie){let n=e.userData,r=Math.sin(t*n.sp+n.ph)*n.ax,i=Math.sin(t*n.sp*.8+n.ph*1.7)*n.ay*.7,a=Math.cos(t*n.sp*.6+n.ph)*n.az,o=H>0?V.position.x:r,s=H>0?V.position.y:i,c=H>0?V.position.z:a,l=H>0?.05:.1;e.position.x+=(o-e.position.x)*l,e.position.y+=(s-e.position.y)*l,e.position.z+=(c-e.position.z)*l,e.scale.x=(e.position.x>=n.prevx?1:-1)*n.sz,n.prevx=e.position.x}for(let e of ze){let n=(t*e.userData.sp+e.userData.ph)%1;e.position.set(e.userData.x+Math.sin(t*2+e.userData.ph*9)*.015,-.09+2*Le*n,.02),e.material.opacity=.5*Math.sin(n*Math.PI)}Pe.intensity=2.6*a,Me.material.emissiveIntensity=.4+.9*a,le.intensity=Ze*(.97+.03*Math.sin(t*7)*Math.sin(t*2.3)),de.material.emissiveIntensity=U*(.85+.15*Math.sin(t*3.1+1)),Qe.setRGB(1,.85,.62),Ve.children.forEach((e,n)=>{let r=e.userData,i=(t*r.sp+r.ph)%1;e.position.set(Math.cos(t*.5+r.ph*5)*r.r,-.15+i*.45,Math.sin(t*.4+r.ph*5)*r.r),e.material.opacity=(.1+.18*a)*Math.sin(i*Math.PI)}),ae.rotation.z=Math.sin(t*.8)*.05,ae.rotation.x=Math.sin(t*.6+1)*.04;let l=i?i.t%1:0;for(let e of m)e.rotation.z=-l*Math.PI*2;if(Ue.update(e),Ge.visible){let e=n.position.z-Ge.position.z,t=2*Math.tan(I.degToRad(n.fov)*.5)*e*1.18;Ge.scale.set(t*n.aspect,t,1);let r=.55+.45*(1-a);Ge.material.color.setRGB(r,r*.97,r*.92)}n.position.set(r.x+Math.sin(t*.5)*.04,r.y+Math.sin(t*.7)*.02,r.z),n.lookAt(0,1.12,-1)}function et(e){C.map=e,T.map=e,C.needsUpdate=!0,T.needsUpdate=!0}function tt(e){A.map=e,A.needsUpdate=!0}let nt=e;function rt(e){nt=e===`basement`?`basement`:`corner`;let t=nt===`corner`;return Je(),me.intensity=t?9:3.2,pe.intensity=t?.55:.78,pe.color.set(t?`#6a5238`:`#7a5a34`),nt}return rt(nt),{scene:t,camera:n,update:$e,setCityTexture:et,setVignetteTexture:tt,setFitout:rt,setSkin:Ye,setProps:Xe,petCat:De,feedFish:Be,vignette:Ue,get interactables(){return Ke!==`3d`&&qe===`painted`?f.children:[z,B,we,Ne]},get tier(){return nt},get skin(){return Ke},get props(){return qe}}}function un(){let e=new te;e.background=new P(`#7fb0dd`);let t=new C(-1.4,1.4,.9,-.9,0,10);t.position.set(0,0,5);let n=(e,t={})=>new x({color:e,toneMapped:!1,...t}),r=(e,t,r,i,a,o,s)=>{let c=new y(new p(e,t),n(o,s));return c.position.set(r,i,a),c};e.add(r(3.2,.9,.5,-.95,1,`#2a4a30`)),e.add(r(3.2,.7,-.7,-1.05,2,`#1d3724`)),e.add(r(.06,.3,-.95,-.55,3,`#3a2a1a`));let i=new y(new ge(.22,18),n(`#234a2a`));i.position.set(-.95,-.32,3),e.add(i),e.add(r(.04,.55,.9,-.55,3,`#20242a`));let a=new y(new ge(.1,16),n(`#ffd98a`,{transparent:!0,opacity:0}));a.position.set(.9,-.26,3.1),e.add(a);let o=new y(new ge(.16,24),n(`#fff4d8`));e.add(o);let s=[];for(let[t,r]of[[-1,.5],[-.6,.7],[.2,.6],[.7,.72],[1.05,.45],[-.2,.78],[.45,.4]]){let i=new y(new ge(.015,8),n(`#ffffff`,{transparent:!0,opacity:0}));i.position.set(t,r,.5),s.push(i),e.add(i)}let c=new P(`#141d33`),l=new P(`#7fb6e0`),u=new P(`#d6824a`),d=new P(`#fff0cc`),f=new P(`#cdd8ef`),m=.34;function h(t){m=(m+t*.04)%1;let n=m*Math.PI*2,r=-Math.cos(n);o.position.set(Math.sin(n)*1.15,r*.66+.06,0);let i=I.smoothstep(r,-.18,.5),p=I.smoothstep(.32,0,Math.abs(r));e.background.copy(c).lerp(l,i).lerp(u,p*.45),o.material.color.copy(r>0?d:f),a.material.opacity=1-i;let h=(1-i)*.85;for(let e of s)e.material.opacity=h}return{scene:e,camera:t,update:h}}function dn(e,{x:t,y:n,z:r,ry:i=0,face:a=`#efe2c8`,rim:o=`#2a1c10`}){let s=new w,c=new y(new ge(.2,28),new d({color:o,roughness:.6})),l=new y(new ge(.17,28),new d({color:a,roughness:.7}));l.position.z=.01;let u=new y(new p(.018,.14),new d({color:`#1a130c`,roughness:.5}));return u.geometry.translate(0,.05,0),u.position.z=.02,e.push(u),s.add(c,l,u),s.position.set(t,n,r),s.rotation.y=i,s}function fn(e){let t=document.createElement(`canvas`);t.width=t.height=128;let n=t.getContext(`2d`),r=`#e08a3c`,i=`#b96a26`,a=`#3a2410`;if(n.lineJoin=`round`,e){n.fillStyle=r,n.beginPath(),n.ellipse(64,78,44,26,0,0,7),n.fill(),n.fillStyle=i,n.beginPath(),n.ellipse(64,86,44,16,0,0,7),n.fill(),n.fillStyle=r,n.beginPath(),n.arc(36,70,20,0,7),n.fill(),n.fillStyle=r,pn(n,24,56,34,44,42,58),pn(n,40,54,50,44,54,60),n.strokeStyle=i,n.lineWidth=7,n.lineCap=`round`,n.beginPath(),n.moveTo(100,70),n.quadraticCurveTo(112,90,88,96),n.stroke(),n.strokeStyle=a,n.lineWidth=2.5,n.beginPath(),n.arc(30,70,5,.1,Math.PI-.1),n.stroke(),n.strokeStyle=i,n.lineWidth=3;for(let e of[60,74,88])n.beginPath(),n.moveTo(e,58),n.lineTo(e,70),n.stroke()}else{n.fillStyle=r,n.beginPath(),n.ellipse(64,86,30,34,0,0,7),n.fill(),n.fillStyle=`#f3c98a`,n.beginPath(),n.ellipse(64,92,14,22,0,0,7),n.fill(),n.strokeStyle=i,n.lineWidth=8,n.lineCap=`round`,n.beginPath(),n.moveTo(92,100),n.quadraticCurveTo(116,86,104,60),n.stroke(),n.fillStyle=r,n.beginPath(),n.arc(64,48,24,0,7),n.fill(),n.fillStyle=r,pn(n,44,34,50,18,60,34),pn(n,84,34,78,18,68,34),n.fillStyle=`#f0b0c0`,pn(n,47,30,50,22,56,32),pn(n,81,30,78,22,72,32),n.fillStyle=a,n.beginPath(),n.arc(55,47,3.4,0,7),n.arc(73,47,3.4,0,7),n.fill(),n.fillStyle=`#e06a7a`,pn(n,61,54,67,54,64,58),n.strokeStyle=a,n.lineWidth=1.6;for(let e of[-2,3])n.beginPath(),n.moveTo(50,55+e),n.lineTo(34,53+e),n.moveTo(78,55+e),n.lineTo(94,53+e),n.stroke();n.strokeStyle=i,n.lineWidth=3;for(let e of[78,90,102])n.beginPath(),n.moveTo(50,e),n.lineTo(78,e),n.stroke()}let o=new B(t);return o.colorSpace=h,o}function pn(e,t,n,r,i,a,o){e.beginPath(),e.moveTo(t,n),e.lineTo(r,i),e.lineTo(a,o),e.closePath(),e.fill()}function mn(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`);t.fillStyle=`#ff5a8a`,t.beginPath(),t.moveTo(32,52),t.bezierCurveTo(6,32,14,10,32,24),t.bezierCurveTo(50,10,58,32,32,52),t.fill();let n=new B(e);return n.colorSpace=h,n}function hn(e){let t=document.createElement(`canvas`);t.width=t.height=64;let n=t.getContext(`2d`);n.fillStyle=e,n.beginPath(),n.ellipse(30,32,18,11,0,0,7),n.fill(),n.beginPath(),n.moveTo(46,32),n.lineTo(60,22),n.lineTo(60,42),n.closePath(),n.fill(),n.fillStyle=`rgba(255,255,255,0.35)`,n.beginPath(),n.ellipse(28,36,12,5,0,0,7),n.fill(),n.fillStyle=`#15212a`,n.beginPath(),n.arc(20,30,2.6,0,7),n.fill();let r=new B(t);return r.colorSpace=h,r}function gn(){let e=document.createElement(`canvas`);e.width=e.height=32;let t=e.getContext(`2d`),n=t.createRadialGradient(16,16,0,16,16,16);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.6,`rgba(255,255,255,0.7)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.beginPath(),t.arc(16,16,16,0,7),t.fill();let r=new B(e);return r.colorSpace=h,r}function _n(e){let t=document.createElement(`canvas`);t.width=t.height=256;let n=t.getContext(`2d`),r=n.createLinearGradient(0,0,256,256);e<0?(r.addColorStop(0,`#6a3b1c`),r.addColorStop(1,`#caa15a`)):(r.addColorStop(0,`#3a4a6a`),r.addColorStop(1,`#a86a3a`)),n.fillStyle=r,n.fillRect(0,0,256,256),n.globalAlpha=.5;for(let e=0;e<5;e++)n.fillStyle=e%2?`#2a1c10`:`#e0c080`,n.fillRect(30+e*36,40+e%3*30,26,150);let i=new B(t);return i.colorSpace=h,i}function vn(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=(e,n,r)=>{let i=t.createRadialGradient(e,n,0,e,n,r);i.addColorStop(0,`rgba(255,255,255,0.95)`),i.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=i,t.beginPath(),t.arc(e,n,r,0,7),t.fill()};n(128*.42,128*.56,128*.26),n(128*.6,128*.5,128*.3),n(128*.5,128*.46,128*.22),n(128*.34,128*.54,128*.18),n(128*.7,128*.58,128*.18);let r=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5],i=t.getImageData(0,0,128,128),a=i.data;for(let e=0;e<128;e++)for(let t=0;t<128;t++){let n=(e*128+t)*4,i=a[n+3]/255,o=(r[e%4*4+t%4]+.5)/16-.5;a[n+3]=Math.max(0,Math.min(1,Math.floor(i*5+.5+o)/5))*255}t.putImageData(i,0,0);let o=new B(e);return o.colorSpace=h,o}function yn({extent:e=8,count:t=16}={}){let n=new w;n.raycast=()=>{};let r=vn(),i=e+6,a=(e,t)=>e+Math.random()*(t-e),o=[];for(let e=0;e<t;e++){let e=new he({map:r,transparent:!0,depthWrite:!1,opacity:0,fog:!0}),t=new N(e),s={sp:t,mat:e,wisp:Math.random(),x:a(-i,i),z:a(-i,i),hiY:a(4,6.8),loY:a(.6,2.2),w:a(3,5.6),h:a(1.7,3),speed:a(.25,.7),op:a(.6,1)};t.raycast=()=>{},o.push(s),n.add(t)}let s=new P,c=new P(`#ffffff`),l=new P(`#5b626e`);function u(e,t,n,r){let u=r?r.cloud:0,d=r?r.fog:0,f=Math.min(1,.4+.6*u+.5*d);s.copy(n.sky).lerp(c,.62),s.lerp(l,.6*u);for(let n=0;n<o.length;n++){let r=o[n],c=n/o.length<f;r.x+=r.speed*e*(.6+.8*u),r.x>i&&(r.x=-i,r.z=a(-i,i));let l=Math.min(bn(r.x,-i,-i+3),1-bn(r.x,i-3,i)),p=r.hiY*(1-d)+r.loY*d,m=1-.5*r.wisp,h=.72*Math.max(0,1-d-u)+1*u+.42*d,g=c?Math.max(0,h)*r.op*m*l:0;r.mat.opacity+=(g-r.mat.opacity)*Math.min(1,e*2.5),r.mat.color.copy(s);let _=r.w*(1+.6*d)*(1+.4*r.wisp),v=r.h*(1-.35*d);r.sp.scale.set(_,v,1),r.sp.position.set(r.x,p+Math.sin(t*.3+n)*.15,r.z)}}function d(e){r=e;for(let t of o)t.mat.map=e,t.mat.needsUpdate=!0}return{group:n,update:u,setTexture:d,get count(){return o.length}}}function bn(e,t,n){let r=Math.max(0,Math.min(1,(e-t)/(n-t)));return r*r*(3-2*r)}var xn=`varying vec2 vUv;

void main() {
  
  
  
  vUv = uv;

  
  
  
  
  
  
  
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,Sn=`precision highp float;

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
}`,Cn=`precision highp float;

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
}`,wn=`precision highp float;

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
}`,Tn=`precision highp float;

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
}`,En=`const float CA_STRENGTH   = 0.0030;  
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
}`,Dn=`const float DITHER = 0.55;   

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
}`,On=`precision highp float;

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
}`,kn=`precision highp float;

varying vec2 vUv;
uniform sampler2D uToon;   
uniform sampler2D uPixel;  
uniform float     uBlend;  

void main() {
  vec3 t = texture2D(uToon, vUv).rgb;
  vec3 p = texture2D(uPixel, vUv).rgb;
  gl_FragColor = vec4(mix(t, p, uBlend), 1.0);
}`,An=`precision highp float;

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
}`,jn=220,Mn=new URLSearchParams(window.location.search),Nn=Mn.get(`demo`)===`1`||Mn.has(`capture`);window.__demo=Nn;var Pn={night:[`#0A0C16`,`#1C2236`,`#3A3A52`,`#5A5A78`,`#8A92B0`],dawn:[`#1A1008`,`#43281A`,`#7A4A30`,`#B07A4E`,`#E8A86A`],noon:[`#16100A`,`#3A2F1E`,`#6B563A`,`#937B54`,`#B89968`],dusk:[`#140A0A`,`#3E1E1A`,`#7A3828`,`#B85A36`,`#F0884A`]},Fn={night:[`#020604`,`#06180E`,`#10401E`,`#1E9040`,`#7FE0FF`],dawn:[`#060603`,`#1A2410`,`#3A6B22`,`#6CC040`,`#FFC060`],noon:[`#050805`,`#0E2912`,`#1E6B2F`,`#3CF06A`,`#FFB000`],dusk:[`#080402`,`#241408`,`#6B4A12`,`#E0A030`,`#FF7030`]},K=new ce({antialias:!0,preserveDrawingBuffer:!0});K.shadowMap.enabled=!0,K.shadowMap.type=1,K.setPixelRatio(Math.min(window.devicePixelRatio,2)),K.setSize(window.innerWidth,window.innerHeight),K.setClearColor(920327,1),document.body.appendChild(K.domElement);var q=K.getDrawingBufferSize(new j),In=new te;In.fog=new ye(10465470,0);var Ln=new P(`#aeb6c0`),Rn=.062,zn=new P(`#74508f`),Bn=new P,J=Re({aspect:window.innerWidth/window.innerHeight}),Y=xt({t:.5}),Vn=256,Hn={type:c,format:g,minFilter:m,magFilter:m,wrapS:M,wrapT:M,depthBuffer:!1,stencilBuffer:!1},Un=[new pe(Vn,Vn,Hn),new pe(Vn,Vn,Hn),new pe(Vn,Vn,Hn)];for(let e of Un)K.setRenderTarget(e),K.clear();K.setRenderTarget(null);var Wn=new te,Gn=new C(-1,1,1,-1,0,1),Kn=new O({vertexShader:r,fragmentShader:Cn,uniforms:{uCurr:{value:null},uPrev:{value:null},uTexel:{value:new j(1/Vn,1/Vn)},uMouse:{value:new j(-1,-1)},uMouseStrength:{value:0},uC2:{value:.25},uDamping:{value:.992},uRainCount:{value:0},uRainDrops:{value:Array.from({length:8},()=>new R)},uWakeCount:{value:0},uWakeDrops:{value:Array.from({length:8},()=>new R)}}});Wn.add(new y(new p(2,2),Kn));var qn=new pe(q.x,q.y,{minFilter:L,magFilter:L,depthBuffer:!0,stencilBuffer:!1});function Jn(e){let t=document.createElement(`canvas`);t.width=t.height=1024;let n=t.getContext(`2d`);n.fillStyle=e?`#0c1418`:`#15110b`,n.fillRect(0,0,1024,1024),n.strokeStyle=e?`rgba(120,150,170,0.22)`:`rgba(184,153,104,0.30)`,n.lineWidth=2;for(let e=0;e<=1024;e+=64)n.beginPath(),n.moveTo(e,0),n.lineTo(e,1024),n.stroke(),n.beginPath(),n.moveTo(0,e),n.lineTo(1024,e),n.stroke();e||(n.fillStyle=`#B89968`,n.font=`bold 360px Georgia, serif`,n.textAlign=`center`,n.textBaseline=`middle`,n.fillText(`LGR`,512,470),n.font=`600 64px ui-monospace, monospace`,n.fillText(`WEB · STUDIO`,512,720));let r=new B(t);return r.colorSpace=h,r}var Yn=28,Xn=new y(new p(Yn,Yn),new x({map:Jn(Nn)}));Xn.rotation.x=-Math.PI/2,Xn.position.y=-.35,In.add(Xn);var Zn=new y(new p(40,24),new O({depthWrite:!1,vertexShader:xn,fragmentShader:Sn,uniforms:{uTime:{value:0},uInk:{value:Y.horizon},uGold:{value:Y.sky},uFogColor:{value:Bn},uFogAmt:{value:0},uFogCharm:Ue}}));Zn.position.set(0,3,-8),In.add(Zn);var Qn=new O({vertexShader:wn,fragmentShader:Tn,uniforms:{uHeight:{value:null},uScene:{value:qn.texture},uTexel:{value:new j(1/Vn,1/Vn)},uResolution:{value:new j(q.x,q.y)},uDisplace:{value:.42},uNormalStrength:{value:22},uRefractStrength:{value:.06},uChromaScale:{value:1},uNormalMatrix:{value:new v},uLightDir:{value:Y.sunDir},uInk:{value:new P(`#2A2218`)},uGold:{value:new P(`#B89968`)},uVector:ze,uVecWater:{value:new P(`#1fb8d8`)},uVecTint:{value:V}}}),$n=new y(new p(Yn,Yn,Vn-1,Vn-1),Qn);$n.rotation.x=-Math.PI/2,$n.updateMatrixWorld(!0),Qn.uniforms.uNormalMatrix.value.getNormalMatrix($n.matrixWorld),In.add($n);var er={value:0},tr=new URLSearchParams(window.location.search),nr=(tr.get(`city`)?Number(tr.get(`city`)):0)||Math.random()*1e9|0,rr=Math.max(0,tt.indexOf(tr.get(`profile`)||`manhattan`)),ir=Qt({windowGlow:er}),X=pt({seed:nr,profileIndex:rr,landmarkFactory:ir,windowGlow:er});In.add(X.group);var ar=Et({plinthTop:.3,extent:X.extent,profile:X.state.profile});In.add(ar.group);var or=Mt({extent:X.extent,waterSize:Yn,plinthTop:.3});In.add(or.group),Kn.uniforms.uWakeDrops.value=or.wakeDrops;var sr=Bt({extent:X.extent,plinthTop:.3});In.add(sr.group),typeof window<`u`&&(window.__hoardApi=sr);var cr=on({extent:X.extent});In.add(cr.group),Kn.uniforms.uRainDrops.value=cr.rainDrops;var lr=yn({extent:X.extent});In.add(lr.group);var ur=[0,.33,.66,1],dr=0;window.__season=ur[dr],X.group.remove(X.key),In.add(X.key),X.key.castShadow=!0,X.key.shadow.mapSize.set(2048,2048),X.key.shadow.bias=-18e-5,X.key.shadow.normalBias=.028,In.add(X.key.target);function fr(){let e=X.key.shadow.camera,t=X.extent+4.5;e.left=-t,e.right=t,e.top=t,e.bottom=-t,e.near=1,e.far=pr*2,e.updateProjectionMatrix()}var pr=24;fr();var mr=!0;window.__shadows=mr;function hr(){X.generate(nr,rr),Qn.uniforms.uVecWater.value.set(X.waterColor),ar.setProfile(X.state.profile),fr(),pa(),Q===`hoard`&&(Vi(),Bi(zi))}ir.whenReady.then(()=>{hr(),window.__cityReady=!0}),Qn.uniforms.uVecWater.value.set(X.waterColor);var gr=new ie(q.x,q.y),_r=new pe(q.x,q.y,{minFilter:L,magFilter:L,depthBuffer:!0,stencilBuffer:!1,depthTexture:gr}),vr=new pe(q.x,q.y,{minFilter:L,magFilter:L,depthBuffer:!1,stencilBuffer:!1}),yr=new pe(q.x,q.y,{minFilter:L,magFilter:L,depthBuffer:!1,stencilBuffer:!1}),br=new pe(q.x,q.y,{minFilter:L,magFilter:L,depthBuffer:!1,stencilBuffer:!1}),xr=new te,Sr=new C(-1,1,1,-1,0,1),Cr=new y(new p(2,2));xr.add(Cr);var wr=new O({vertexShader:r,fragmentShader:En,uniforms:{uScene:{value:_r.texture},uTime:{value:0},uResolution:{value:new j(q.x,q.y)},uGrain:{value:1},uChroma:{value:1},uExposure:{value:1}}}),Tr=5,Er=e=>{let t=e.map(e=>new P(e));for(;t.length<8;)t.push(new P(0,0,0));return t},Dr=[`night`,`dawn`,`noon`,`dusk`],Or={inkgold:Dr.map(e=>Er(Pn[e])),terminal:Dr.map(e=>Er(Fn[e]))},kr=new O({vertexShader:r,fragmentShader:Dn,uniforms:{uScene:{value:vr.texture},uResolution:{value:new j(q.x,q.y)},uPixelSize:{value:jn},uPalette:{value:Or.inkgold[2]},uPaletteB:{value:Or.inkgold[2]},uPaletteBlend:{value:0},uPaletteSize:{value:Tr}}});function Ar(e){let t=bi?Or.terminal:Or.inkgold,n=e%1*4,r=Math.floor(n)%4;kr.uniforms.uPalette.value=t[r],kr.uniforms.uPaletteB.value=t[(r+1)%4],kr.uniforms.uPaletteBlend.value=n-Math.floor(n)}var jr=new O({vertexShader:r,fragmentShader:t,uniforms:{uScene:{value:vr.texture},uResolution:{value:new j(q.x,q.y)},uGridWidth:{value:160},uDither:{value:.55},uPalette:{value:e(i[`8-bit`].palette)},uPaletteSize:{value:1},uUsePalette:{value:1}}}),Mr={};for(let t of n)Mr[t]=i[t].palette?e(i[t].palette):null;var Nr=[`native`,...n],Pr=`native`;window.__era=Pr;function Fr(e){let t=i[e];t&&(jr.uniforms.uGridWidth.value=t.gridWidth,jr.uniforms.uDither.value=t.dither,jr.uniforms.uUsePalette.value=+!!t.palette,t.palette&&(jr.uniforms.uPalette.value=Mr[e],jr.uniforms.uPaletteSize.value=t.palette.length))}function Ir(){Pr!==`native`&&Fr(Pr)}var Lr=()=>Pr===`native`?kr:jr,Rr=new O({vertexShader:r,fragmentShader:On,uniforms:{uScene:{value:vr.texture},uDepth:{value:gr},uResolution:{value:new j(q.x,q.y)},uBands:{value:4},uToonGain:{value:1.7},uToonGamma:{value:.6},uToonFloor:{value:Y.toonFloor},uOutline:{value:Y.outline},uNear:{value:.1},uFar:{value:100},uIsPerspective:{value:1}}}),zr=new O({vertexShader:r,fragmentShader:kn,uniforms:{uToon:{value:yr.texture},uPixel:{value:br.texture},uBlend:{value:0}}});function Br(e,t){Cr.material=e,K.setRenderTarget(t),K.render(xr,Sr)}var Z=ln({tier:`corner`});Z.camera.aspect=window.innerWidth/window.innerHeight,Z.camera.updateProjectionMatrix();var Vr=new s(55,1.4,.1,100);Vr.position.set(2.2,3.4,11.5),Vr.lookAt(0,2,0);var Hr=new pe(1024,720,{minFilter:L,magFilter:L,depthBuffer:!0,stencilBuffer:!1});Z.setCityTexture(Hr.texture);var Ur=new pe(512,320,{minFilter:L,magFilter:L,depthBuffer:!0,stencilBuffer:!1});Z.setVignetteTexture(Ur.texture);var Wr=new pe(q.x,q.y,{minFilter:L,magFilter:L,depthBuffer:!1,stencilBuffer:!1}),Gr=new pe(q.x,q.y,{minFilter:L,magFilter:L,depthBuffer:!1,stencilBuffer:!1}),Kr=new O({vertexShader:r,fragmentShader:An,uniforms:{uCity:{value:Wr.texture},uOffice:{value:Gr.texture},uT:{value:0},uFocus:{value:new j(.5,.5)}}}),Q=`city`,qr=0,Jr=4.6;window.__scene=Q;var Yr=null;function Xr(e){Q===`city`&&(Kr.uniforms.uFocus.value.copy(e||new j(.5,.5)),Q=`diving-in`,window.__scene=Q)}function Zr(){Q!==`office`&&Q!==`diving-in`||(Q=`diving-out`,window.__scene=Q)}function Qr(){Q===`city`&&(Q=`hoard`,window.__scene=Q,sr.setActive(!0),Bi(zi),J.setMode(Te.DIMETRIC),J.setZoom(2.8,!0),J.setTarget(sr.player.x,.6,sr.player.z,!0))}function $r(){Q===`hoard`&&(sr.setActive(!1),Hi(),Vi(),Q=`city`,window.__scene=Q,J.setTarget(0,.8,0))}var ei=!1,ti=(()=>{if(typeof document>`u`)return{showLap(){},toast(){},flash(){}};let e=document.createElement(`style`);e.textContent=`
  .lap { position: fixed; inset: 0; z-index: 5; display:flex; align-items:center; justify-content:center;
    background: rgba(6,8,12,0.55); opacity:0; pointer-events:none; transition: opacity .25s; }
  .lap.on { opacity:1; pointer-events:auto; }
  .lap-win { width:min(560px,90vw); border-radius:14px; overflow:hidden; background:#0e1016;
    border:1px solid #2a2f3a; box-shadow:0 20px 60px rgba(0,0,0,.6); font:13px/1.5 ui-monospace,monospace; color:#cdd3dc; }
  .lap-bar { display:flex; align-items:center; justify-content:space-between; padding:10px 14px; background:#161a22; border-bottom:1px solid #2a2f3a; }
  .lap-bar b { letter-spacing:.08em; color:#7fd0ff; }
  .lap-x { cursor:pointer; border:0; background:#222833; color:#cdd3dc; min-width:44px;height:44px;border-radius:8px; font:inherit; }
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
    </div></div>`;let n=document.createElement(`div`);n.className=`otoast`;let r=document.createElement(`div`);r.className=`oflash`,document.body.append(t,n,r),t.querySelector(`.lap-x`).addEventListener(`click`,()=>ri()),t.addEventListener(`click`,e=>{e.target===t&&ri()});let i=0;return{showLap(e){t.classList.toggle(`on`,e)},toast(e){n.textContent=e,n.classList.add(`on`),clearTimeout(i),i=setTimeout(()=>n.classList.remove(`on`),1400)},flash(){r.style.transition=`none`,r.style.opacity=`0.85`,requestAnimationFrame(()=>{r.style.transition=`opacity .55s`,r.style.opacity=`0`})}}})();function ni(){ei=!0,ti.showLap(!0)}function ri(){ei=!1,ti.showLap(!1)}function ii(){rr=(rr+1)%et.length,ti.flash(),hr(),ti.toast(`✈  `+X.state.profile.name),window.__profile=X.state.profile.key}function ai(e){let t=Z.setFitout(e);return ti.toast(t===`basement`?`🏚  Basement office`:`🏙  Corner office`),window.__tier=t,t}function oi(){return ai(Z.tier===`corner`?`basement`:`corner`)}window.__tier=Z.tier;var si=[`3d`,`smooth`,`charm`],ci={"3d":`🧊  Stylized 3D office`,smooth:`🖼  Smooth diffusion skin`,charm:`🕹  Charm diffusion skin`};function li(e){let t=Z.setSkin(e);return window.__officeSkin=t,Q!==`city`&&ti.toast(ci[t]),t}function ui(){return li(si[(si.indexOf(Z.skin)+1)%si.length])}window.__officeSkin=Z.skin;var di={painted:`🎨  Painted props (cohesive)`,"3d":`🧊  Live 3D props (animated)`};function fi(e){let t=Z.setProps(e);return window.__officeProps=t,Q!==`city`&&Z.skin!==`3d`&&ti.toast(di[t]),t}function pi(){return fi(Z.props===`painted`?`3d`:`painted`)}window.__officeProps=Z.props;function mi(e,t){$n.visible=!1,K.setRenderTarget(qn),K.render(In,e),$n.visible=!0,K.setRenderTarget(t),K.render(In,e)}function hi(e,t){if($n.visible=!1,K.setRenderTarget(qn),K.render(In,J.camera),$n.visible=!0,$===1||xi&&$!==7&&$!==8)K.setRenderTarget(t),K.render(In,J.camera);else if(K.setRenderTarget(_r),K.render(In,J.camera),$===2)wr.uniforms.uGrain.value=1,wr.uniforms.uChroma.value=1,Br(wr,t);else{wr.uniforms.uGrain.value=0,wr.uniforms.uChroma.value=0,Br(wr,vr);let n=J.camera;Rr.uniforms.uNear.value=n.near,Rr.uniforms.uFar.value=n.far,Rr.uniforms.uIsPerspective.value=+!!n.isPerspectiveCamera;let r=e.era?(Fr(e.era),jr):Lr();e.kind===`pixel`?(Br(r,t),window.__style=`pixel`):e.kind===`toon`?(Br(Rr,t),window.__style=`toon`):(Br(Rr,yr),Br(r,br),zr.uniforms.uBlend.value=e.blend,Br(zr,t),window.__style=`blend`)}}var gi=.3,_i=.46,vi=.62,yi=.8,$=3,bi=!1,xi=!1;window.__mode=$,window.__camMode=J.mode,window.__vector=xi,window.addEventListener(`keydown`,e=>{(e.key===`1`||e.key===`2`||e.key===`3`)&&($=Number(e.key),window.__mode=$),(e.key===`7`||e.key===`8`)&&($=Number(e.key),window.__mode=$),e.key===`4`&&(J.setMode(Te.PERSPECTIVE),window.__camMode=J.mode),e.key===`5`&&(J.setMode(Te.ISOMETRIC),window.__camMode=J.mode),e.key===`6`&&(J.setMode(Te.DIMETRIC),window.__camMode=J.mode),e.key===`ArrowLeft`&&(J.pan(-1,0),e.preventDefault()),e.key===`ArrowRight`&&(J.pan(1,0),e.preventDefault()),e.key===`ArrowUp`&&(J.pan(0,1),e.preventDefault()),e.key===`ArrowDown`&&(J.pan(0,-1),e.preventDefault()),e.key===`0`&&(xi=!xi,ze.value=+!!xi,window.__vector=xi),(e.key===`w`||e.key===`W`)&&(cr.cycle(),window.__weather=cr.kind),(e.key===`k`||e.key===`K`)&&(dr=(dr+1)%ur.length,window.__season=ur[dr]),(e.key===`g`||e.key===`G`)&&Q!==`hoard`&&(nr=Math.random()*1e9|0,hr()),(e.key===`c`||e.key===`C`)&&Q!==`hoard`&&(rr=(rr+1)%et.length,hr()),(e.key===`h`||e.key===`H`)&&(mr=!mr,window.__shadows=mr),(e.key===`p`||e.key===`P`)&&(bi=!bi),(e.key===`b`||e.key===`B`)&&(Pr=Nr[(Nr.indexOf(Pr)+1)%Nr.length],window.__era=Pr,Ir()),(e.key===`t`||e.key===`T`)&&Y.cyclePreset(),e.key===`[`&&Y.nudge(-.5),e.key===`]`&&Y.nudge(.5),e.key===`9`&&(Y.toggleAuto(),window.__auto=Y.auto),e.key===`Escape`&&(ei?ri():Q===`hoard`?$r():Zr()),(e.key===`o`||e.key===`O`)&&(Q===`city`?Xr():Zr()),(e.key===`x`||e.key===`X`)&&(Q===`hoard`?$r():Q===`city`&&Qr()),(e.key===`f`||e.key===`F`)&&Q!==`city`&&oi(),(e.key===`j`||e.key===`J`)&&ui(),(e.key===`u`||e.key===`U`)&&pi(),(e.key===`m`||e.key===`M`)&&Yr&&Yr.toggle()});var Si=window.matchMedia(`(prefers-reduced-motion: reduce)`);Y.setReducedMotion(Si.matches),Si.addEventListener(`change`,e=>Y.setReducedMotion(e.matches));var Ci=new z,wi=new j,Ti=!1,Ei=!1,Di=0,Oi=0,ki=.005,Ai=(e,t)=>{wi.x=e/window.innerWidth*2-1,wi.y=-(t/window.innerHeight)*2+1},ji=new z,Mi=new D(new R(0,1,0),-.32),Ni=new R,Pi=new R,Fi=new R,Ii=new R,Li=new Set,Ri=new Set,zi=6.5;function Bi(e){X.group.traverse(t=>{!t.isMesh||t.userData.ground||!t.visible||(t.getWorldPosition(Ii),Math.hypot(Ii.x,Ii.z)<e&&(t.visible=!1,Ri.add(t)))})}function Vi(){for(let e of Ri)e.visible=!0;Ri.clear()}function Hi(){for(let e of Li)e.material&&(e.material.opacity=1,e.material.transparent=!!e.userData._wasT,e.material.depthWrite=e.userData._wasDW!==!1);Li.clear()}function Ui(e){Hi();let t=J.camera;for(let[n,r]of[[0,0],[.7,.4],[-.7,.4]]){Fi.set(e.x+n,.6,e.z+r),Pi.subVectors(Fi,t.position);let i=Pi.length();ji.set(t.position,Pi.normalize()),ji.far=i-.4;for(let e of ji.intersectObject(X.group,!0)){let t=e.object;!t.material||t.userData.ground||Li.has(t)||(t.userData._wasT=t.material.transparent,t.userData._wasDW=t.material.depthWrite,t.material.transparent=!0,t.material.opacity=.16,t.material.depthWrite=!1,Li.add(t))}}}var Wi=0,Gi=0,Ki=0;function qi(){return Ci.setFromCamera(wi,J.camera),Ci.intersectObject(X.group,!0)[0]?new j(wi.x*.5+.5,wi.y*.5+.5):null}function Ji(){Ci.setFromCamera(wi,Z.camera);let e=Ci.intersectObjects(Z.interactables,!0)[0];if(!e)return null;let t=e.object;for(;t&&!t.userData.role;)t=t.parent;return t?t.userData.role:null}K.domElement.addEventListener(`contextmenu`,e=>e.preventDefault()),K.domElement.addEventListener(`mousedown`,e=>{e.button===0&&(Ti=Q===`city`,Ai(e.clientX,e.clientY),Wi=e.clientX,Gi=e.clientY,Ki=performance.now(),Q===`hoard`&&sr.setFiring(!0)),e.button===2&&(Ei=!0,Di=e.clientX,Oi=e.clientY)}),window.addEventListener(`mousemove`,e=>{Ti&&Ai(e.clientX,e.clientY),Ei?(J.orbit(-(e.clientX-Di)*ki,-(e.clientY-Oi)*ki),Di=e.clientX,Oi=e.clientY):Q===`city`&&!Ti?(Ai(e.clientX,e.clientY),K.domElement.style.cursor=qi()?`pointer`:`default`):Q===`office`?(Ai(e.clientX,e.clientY),K.domElement.style.cursor=Ji()?`pointer`:`default`):Q===`hoard`&&Ai(e.clientX,e.clientY)}),window.addEventListener(`mouseup`,e=>{Q===`hoard`&&sr.setFiring(!1);let t=Math.hypot(e.clientX-Wi,e.clientY-Gi)<6&&performance.now()-Ki<350;if(Ti&&Q===`city`&&t){Ai(e.clientX,e.clientY);let t=qi();t&&Xr(t)}else if(Q===`office`&&t&&!ei){Ai(e.clientX,e.clientY);let t=Ji();t===`laptop`?ni():t===`phone`?ii():t===`cat`?Z.petCat():t===`tank`&&Z.feedFish()}Ti=!1,Ei=!1}),K.domElement.addEventListener(`wheel`,e=>{e.preventDefault(),J.zoomBy(Math.exp(e.deltaY*.0015))},{passive:!1});var Yi=0,Xi=(e,t)=>[(e.clientX+t.clientX)/2,(e.clientY+t.clientY)/2],Zi=(e,t)=>Math.hypot(e.clientX-t.clientX,e.clientY-t.clientY),Qi=!1;K.domElement.addEventListener(`touchstart`,e=>{e.touches.length===1&&(Ti=Q===`city`,Ai(e.touches[0].clientX,e.touches[0].clientY),Wi=e.touches[0].clientX,Gi=e.touches[0].clientY,Ki=performance.now(),Qi=!1),e.touches.length===2&&(Ti=!1,Ei=!0,[Di,Oi]=Xi(e.touches[0],e.touches[1]),Yi=Zi(e.touches[0],e.touches[1]))},{passive:!1}),K.domElement.addEventListener(`touchmove`,e=>{if(e.preventDefault(),e.touches.length===1)Ai(e.touches[0].clientX,e.touches[0].clientY),Math.hypot(e.touches[0].clientX-Wi,e.touches[0].clientY-Gi)>8&&(Qi=!0);else if(e.touches.length===2){let[t,n]=Xi(e.touches[0],e.touches[1]);J.orbit(-(t-Di)*ki,-(n-Oi)*ki),Di=t,Oi=n;let r=Zi(e.touches[0],e.touches[1]);Yi>0&&J.zoomBy(Yi/r),Yi=r}},{passive:!1}),window.addEventListener(`touchend`,e=>{if(!Qi&&performance.now()-Ki<350&&(!e.touches||e.touches.length===0)){if(Q===`city`){let e=qi();e&&Xr(e)}else if(Q===`office`&&!ei){let e=Ji();e===`laptop`?ni():e===`phone`?ii():e===`cat`?Z.petCat():e===`tank`&&Z.feedFish()}}Ti=!1,Ei=!1,Yi=0,e.touches&&e.touches.length===1&&(Ti=!0)});var $i=new ae;$i.connect(document);var ea=0,ta=performance.now();function na(){if($===1||$===2)return{kind:`none`};if($===7)return{kind:`pixel`};if($===8)return{kind:`toon`};let e=J.styleT;return window.__styleT=e,e<=gi?{kind:`toon`}:e>=_i?{kind:`pixel`,era:e<vi?`16-bit`:e<yi?`8-bit`:`gb`}:{kind:`blend`,blend:I.smoothstep(e,gi,_i),era:`16-bit`}}var ra={"16-bit":`16-bit`,"8-bit":`8-bit`,gb:`Game Boy`,modern:`Modern`,native:`Pixel`,"1-bit":`1-bit`};function ia(e){return $===1||$===2?``:xi&&$!==7&&$!==8?`Vector`:e.kind===`toon`?`Toon`:e.kind===`pixel`?ra[e.era||Pr]||`Pixel`:e.kind===`blend`?`Toon → `+(ra[e.era]||`Pixel`):``}var aa=Mn.get(`ui`)!==`0`&&!Mn.has(`capture`),oa=!!(window.matchMedia&&window.matchMedia(`(pointer: coarse)`).matches),sa=Nn||!aa||oa,ca=sa?null:document.querySelector(`.hint`);if(sa){let e=document.querySelector(`.hint`);e&&(e.style.display=`none`)}var la=ca?ca.textContent:``,ua=``,da=``;function fa(e){!ca||e===ua||(ua=e,ca.textContent=`${la} · ${da} · ${e}`)}function pa(){da=`seed ${X.state.seed} · ${X.state.profile.name}`,window.__profile=X.state.profile.key,ua=``}pa();function ma(){$i.update();let e=Math.min($i.getDelta(),.1);Q===`hoard`&&(sr.setAzimuth(J.azimuth),xa||(Ci.setFromCamera(wi,J.camera),Ci.ray.intersectPlane(Mi,Ni)&&sr.setAim(Ni.x,Ni.z)),sr.update(e,$i.getElapsed(),Y),J.setTarget(sr.player.x,.6,sr.player.z)),J.update(e),Q===`hoard`&&Ui(sr.player),Zn.material.uniforms.uTime.value=$i.getElapsed(),wr.uniforms.uTime.value=$i.getElapsed(),Y.update(e),X.key.position.copy(Y.sunDir).multiplyScalar(pr),X.key.color.copy(Y.sunColor),X.key.intensity=Y.sunIntensity,X.fill.color.copy(Y.hemiSky),X.fill.groundColor.copy(Y.hemiGround),er.value=Y.windowGlow;let t=cr.overcast;X.key.intensity*=1-.5*t,X.key.color.lerp(Ln,.45*t),X.fill.intensity=1+.7*t;let n=I.smoothstep(Y.sunDir.y,.06,.34),r=I.lerp(.28,1,1-Y.windowGlow),i=mr?n*r:0;X.key.shadow.intensity=.72*i,H.value=.52*i;let a=1-Y.windowGlow;V.setRGB(I.lerp(.46,1,a),I.lerp(.52,1,a),I.lerp(.74,1,a)),wr.uniforms.uExposure.value=Y.exposure,Rr.uniforms.uToonGain.value=Y.toonGain,K.setClearColor(Y.horizon,1),Ar(Y.t),fa(Y.clock),window.__t=Y.t,ar.update(e,$i.getElapsed(),Y),X.update($i.getElapsed()),or.update(e,$i.getElapsed(),Y),Kn.uniforms.uWakeCount.value=or.wakeCount,cr.update(e,$i.getElapsed()),Kn.uniforms.uRainCount.value=cr.rainDropCount;let o=cr.fog*(1-a);In.fog.density=cr.fog*Rn,Bn.copy(Y.horizon).lerp(zn,.85*o),In.fog.color.copy(Bn),K.setClearColor(Bn,1),Ue.value=cr.fog,Zn.material.uniforms.uFogAmt.value=.7*cr.fog,Be.value=cr.snow,Ve.value=cr.cloud*.55,He.x+=e*.018,He.y+=e*.009,We.value+=(ur[dr]-We.value)*Math.min(1,e*1.5),lr.update(e,$i.getElapsed(),Y,cr);let s=na(),c=s.kind===`toon`?1:s.kind===`blend`?1-s.blend:0;Qn.uniforms.uChromaScale.value=I.lerp(1,.5,c),Yr&&Yr.setStyleHint(Q===`city`?ia(s):``),ea++;let l=performance.now();l-ta>=1e3&&(window.__fps=ea,ea=0,ta=l);let u=0;if(Ti&&Q===`city`){Ci.setFromCamera(wi,J.camera);let e=Ci.intersectObject($n)[0];e&&e.uv&&(Kn.uniforms.uMouse.value.copy(e.uv),u=.06)}Kn.uniforms.uMouseStrength.value=u;let[d,f,p]=Un;Kn.uniforms.uPrev.value=d.texture,Kn.uniforms.uCurr.value=f.texture,K.setRenderTarget(p),K.render(Wn,Gn),Un=[f,p,d],Qn.uniforms.uHeight.value=Un[1].texture,qr+=(+(Q===`office`||Q===`diving-in`)-qr)*Math.min(1,e*Jr),Q===`diving-in`&&qr>.992&&(qr=1,Q=`office`,window.__scene=Q),Q===`diving-out`&&qr<.008&&(qr=0,Q=`city`,window.__scene=Q),Q===`city`||Q===`hoard`?hi(s,null):(Z.update(e,$i.getElapsed(),Y),Z.tier===`basement`?(K.setRenderTarget(Ur),K.render(Z.vignette.scene,Z.vignette.camera)):mi(Vr,Hr),Q===`office`?(K.setRenderTarget(null),K.render(Z.scene,Z.camera)):(hi(s,Wr),K.setRenderTarget(Gr),K.render(Z.scene,Z.camera),Kr.uniforms.uT.value=qr,Br(Kr,null))),requestAnimationFrame(ma)}var ha={at:(e,t)=>{Ai(e,t),Ti=!0},stop:()=>{Ti=!1}};function ga(){let e=window.__style||($===1?`raw`:$===2?`filmic`:`auto`);return{lesson:23,clock:Y.clock,style:(xi?`vec-`:``)+e,profile:X.state.profile.key,weather:cr.kind,scene:Q}}en({renderer:K,rig:J,sunRig:Y,poke:ha,getState:ga,office:{pet:()=>Z.petCat(),feed:()=>Z.feedFish(),laptop:()=>ni(),closeLaptop:()=>ri(),travel:()=>ii(),fitout:()=>oi()}});var _a=e=>window.dispatchEvent(new KeyboardEvent(`keydown`,{key:e})),va={cam:e=>_a({iso:`5`,dimetric:`6`,persp:`4`}[e]),style:e=>{e===`auto`?(_a(`3`),xi&&_a(`0`)):e===`vector`?(xi||_a(`0`),($===7||$===8)&&_a(`2`)):e===`pixel`?_a(`7`):e===`toon`&&_a(`8`)},era:()=>_a(`b`),city:()=>_a(`C`),shuffle:()=>_a(`G`),weather:()=>_a(`W`),season:()=>_a(`K`),office:()=>_a(`o`),officeSkin:()=>_a(`j`),officeProps:()=>_a(`u`),time:e=>Y.goTo(e),auto:()=>_a(`9`)},ya=()=>({cam:{4:`persp`,5:`iso`,6:`dimetric`}[J.mode],style:$===7?`pixel`:$===8?`toon`:xi?`vector`:`auto`,era:Pr,auto:Y.auto,t:Y.t,weather:cr.kind,season:dr,office:Q!==`city`,officeSkin:Z.skin,officeProps:Z.props}),ba=Mn.get(`ui`)!==`0`&&!Mn.has(`capture`),xa=window.matchMedia&&window.matchMedia(`(pointer: coarse)`).matches;Yr=rn({controls:va,state:ya,show:ba,coarse:xa});var Sa=Mn.get(`cam`);Sa&&[`iso`,`dimetric`,`persp`].includes(Sa)&&va.cam(Sa);var Ca=Mn.get(`style`);[`vector`,`pixel`,`toon`].includes(Ca)&&va.style(Ca);var wa=Mn.get(`t`);wa!==null&&wa!==``&&!Number.isNaN(parseFloat(wa))&&Y.goTo(parseFloat(wa));var Ta=Mn.get(`time`);Ta&&Y.goTo({dawn:.25,noon:.5,dusk:.75,night:0}[Ta]??.5);var Ea=Mn.get(`weather`);[`clear`,`rain`,`snow`,`fog`].includes(Ea)&&(cr.setKind(Ea),window.__weather=cr.kind);var Da=Mn.get(`officeskin`);[`3d`,`smooth`,`charm`].includes(Da)&&li(Da);var Oa=Mn.get(`officeprops`);[`painted`,`3d`].includes(Oa)&&fi(Oa);var ka=Mn.get(`office`);(ka===`1`||ka===`corner`||ka===`basement`)&&(ka===`basement`&&ai(`basement`),Q=`office`,qr=1,window.__scene=Q),Mn.get(`hoard`)===`1`&&Qr(),ma(),window.addEventListener(`resize`,()=>{J.setViewport(window.innerWidth,window.innerHeight),K.setSize(window.innerWidth,window.innerHeight);let e=K.getDrawingBufferSize(new j);qn.setSize(e.x,e.y),_r.setSize(e.x,e.y),vr.setSize(e.x,e.y),yr.setSize(e.x,e.y),br.setSize(e.x,e.y),Wr.setSize(e.x,e.y),Gr.setSize(e.x,e.y),Z.camera.aspect=window.innerWidth/window.innerHeight,Z.camera.updateProjectionMatrix(),Qn.uniforms.uResolution.value.set(e.x,e.y),wr.uniforms.uResolution.value.set(e.x,e.y),kr.uniforms.uResolution.value.set(e.x,e.y),jr.uniforms.uResolution.value.set(e.x,e.y),Rr.uniforms.uResolution.value.set(e.x,e.y)});