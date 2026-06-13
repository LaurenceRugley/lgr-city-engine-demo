import{i as e,o as t,r as n,s as r,t as i}from"./pixelkit-B87CIF0K.js";import{A as a,B as o,C as s,D as c,E as l,F as u,G as d,H as f,I as p,J as m,K as h,L as g,M as _,N as v,O as y,P as b,R as x,S,T as C,U as w,V as T,_ as E,a as ee,b as te,c as ne,d as re,h as ie,i as D,j as ae,k as O,l as k,m as oe,n as se,o as ce,p as le,q as A,r as ue,s as de,t as fe,u as pe,v as me,w as he,x as ge,y as _e,z as ve}from"./three-NhHFZxvl.js";var ye=Math.atan(1/Math.SQRT2),be=Math.atan(.5),xe=Math.PI/4,j={PERSPECTIVE:4,ISOMETRIC:5,DIMETRIC:6},Se=.12,Ce=1.45,we=4,Te=40,Ee=1.5,De=16,Oe=6,ke=22,Ae=3.5,je=11,Me=(e,t,n)=>e+(t-e)*(1-Math.exp(-8*n)),Ne=(e,t)=>e+Math.PI*2*Math.round((t-e)/(Math.PI*2));function Pe({aspect:e,fov:t=48,near:n=.1,far:r=100,target:i=new A(0,.8,0),azimuth:a=xe,elevation:o=.52,distance:s=12,zoom:c=5.5}={}){let l=new b(t,e,n,r),u=new _(-1,1,1,-1,n,r),d=j.PERSPECTIVE,f=e,p={azimuth:a,elevation:o,distance:s,zoom:c,target:i.clone()},m={azimuth:a,elevation:o,distance:s,zoom:c,target:i.clone()},h=!1,g=()=>d===j.PERSPECTIVE?l:u;function v(e){e!==d&&(d=e,d===j.ISOMETRIC||d===j.DIMETRIC?(p.elevation=d===j.ISOMETRIC?ye:be,p.azimuth=Ne(xe,m.azimuth),h=!0):h=!1)}function y(e,t){p.azimuth+=e,h||(p.elevation=C.clamp(p.elevation+t,Se,Ce))}function x(e){d===j.PERSPECTIVE?p.distance=C.clamp(p.distance*e,we,Te):p.zoom=C.clamp(p.zoom*e,Ee,De)}function S(e,t){let n=p.azimuth,r=d===j.PERSPECTIVE?p.distance*.04:p.zoom*.08,i=new A(Math.cos(n),0,-Math.sin(n)),a=new A(-Math.sin(n),0,-Math.cos(n));p.target.addScaledVector(i,e*r),p.target.addScaledVector(a,t*r)}function w(e,t){f=e/t,l.aspect=f,l.updateProjectionMatrix()}function T(e){m.azimuth=Me(m.azimuth,p.azimuth,e),m.elevation=Me(m.elevation,p.elevation,e),m.distance=Me(m.distance,p.distance,e),m.zoom=Me(m.zoom,p.zoom,e),m.target.x=Me(m.target.x,p.target.x,e),m.target.y=Me(m.target.y,p.target.y,e),m.target.z=Me(m.target.z,p.target.z,e);let t=Math.cos(m.elevation),n=Math.sin(m.elevation),r=Math.cos(m.azimuth),i=Math.sin(m.azimuth),a=g();if(a.position.set(m.target.x+m.distance*t*i,m.target.y+m.distance*n,m.target.z+m.distance*t*r),a.lookAt(m.target),a.isOrthographicCamera){let e=m.zoom,t=e*f;a.left=-t,a.right=t,a.top=e,a.bottom=-e,a.updateProjectionMatrix()}}return{get camera(){return g()},get mode(){return d},get styleT(){return d===j.PERSPECTIVE?C.clamp((m.distance-Oe)/(ke-Oe),0,1):C.clamp((m.zoom-Ae)/(je-Ae),0,1)},setMode:v,orbit:y,zoomBy:x,pan:S,setViewport:w,update:T}}var Fe={value:0},Ie=new k(`#ffffff`),Le={value:0},Re={value:0},ze={value:0},Be=new h,Ve={value:0},He=`
  varying vec3 vVecN;
  varying vec3 vVecP;
  varying vec2 vWorldXZ;
  uniform float uVector;
  uniform vec3  uVecTint;
  uniform float uVecShadow;
  uniform float uSnow;        // white roof/ground accumulation
  uniform float uCloud;       // cloud-shadow strength
  uniform vec2  uCloudOff;    // cloud-shadow scroll (wind)
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
`;function Ue(e){e.uniforms.uVector=Fe,e.uniforms.uVecTint={value:Ie},e.uniforms.uVecShadow=Le,e.uniforms.uSnow=Re,e.uniforms.uCloud=ze,e.uniforms.uCloudOff={value:Be}}function We(e){return e.replace(`#include <common>`,`#include <common>
varying vec3 vVecN;
varying vec3 vVecP;
varying vec2 vWorldXZ;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
  vVecN = normal;
  vVecP = position;
  vWorldXZ = (modelMatrix * vec4(position, 1.0)).xz;`)}function Ge(e){return e.replace(`#include <shadowmap_pars_fragment>`,`#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>`)}var Ke=`col *= mix(1.0, getShadowMask(), uVecShadow);`;function qe(e,{color:t,id:n,windowGlow:r,winColors:i=[`#ffb852`,`#8cd9ff`],litFrac:a=.55}={}){let o=[0,1,2].map(e=>new k(i[e]??i[i.length-1]));return e.customProgramCacheKey=()=>`lgr-vec-tower`,e.onBeforeCompile=e=>{Ue(e),e.uniforms.uWindowGlow=r,e.uniforms.uWinId={value:n},e.uniforms.uVecColor={value:new k(t)},e.uniforms.uWinA={value:o[0]},e.uniforms.uWinB={value:o[1]},e.uniforms.uWinC={value:o[2]},e.uniforms.uWinLit={value:a},e.vertexShader=We(e.vertexShader),e.fragmentShader=Ge(e.fragmentShader.replace(`#include <common>`,`#include <common>
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
          ${Ke}                                  // the sun's shadow darkens the body
          vec3 wcol; vec2 w = winTerms(wcol);
          vec3 glass = vec3(0.17, 0.23, 0.34);          // dark glass-blue panes (day)
          col = mix(col, glass, w.x * 0.85);
          col += w.x * w.y * wcol * uWindowGlow * 1.5;  // …windows EMIT (unshadowed) at night
          gl_FragColor = vec4(col, diffuseColor.a);
        }`))},e}function M(e,{color:t=null,glow:n=null,glowDay:r=0,glowNight:i=1,windowGlow:a=null,season:o=!1}={}){let s=t===null,c=n!==null&&a!==null;return e.customProgramCacheKey=()=>`lgr-vec|`+(s?`d`:`c`)+(c?`g`:``)+(o?`s`:``),e.onBeforeCompile=e=>{Ue(e),s||(e.uniforms.uVecColor={value:new k(t)}),c&&(e.uniforms.uGlow={value:new k(n)},e.uniforms.uGlowDay={value:r},e.uniforms.uGlowNight={value:i},e.uniforms.uWindowGlow=a),o&&(e.uniforms.uSeason=Ve),e.vertexShader=We(e.vertexShader);let l=s?`diffuseColor.rgb`:`uVecColor`,u=o?`seasonShift(${l})`:l,d=(s?``:`uniform vec3 uVecColor;
`)+(c?`uniform vec3 uGlow; uniform float uGlowDay; uniform float uGlowNight; uniform float uWindowGlow;
`:``)+(o?`uniform float uSeason;
vec3 seasonShift(vec3 c){
  c = mix(c, vec3(0.86, 0.46, 0.13), smoothstep(0.40, 0.70, uSeason));   // → autumn orange
  c = mix(c, vec3(0.46, 0.33, 0.20), smoothstep(0.75, 1.00, uSeason));   // → bare brown
  return c;
}
`:``),f=c?`uGlow * mix(uGlowDay, uGlowNight, uWindowGlow)`:`vec3(0.0)`,p=Ge(e.fragmentShader.replace(`#include <common>`,`#include <common>
`+d+He).replace(`#include <opaque_fragment>`,`#include <opaque_fragment>
        if (uVector > 0.5) {
          vec3 col = vecShade(${u});
          ${Ke}                            // the sun's shadow darkens the flat tier…
          gl_FragColor = vec4(col + ${f}, diffuseColor.a);  // …but the night glow stays lit
        }`));c&&(p=p.replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>\n  totalEmissiveRadiance += ${f};`)),e.fragmentShader=p},e}function Je(e){let t=e>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Ye(e){let t=Je(e);return{next:t,range:(e,n)=>e+(n-e)*t(),int:(e,n)=>e+Math.floor(t()*(n-e+1)),pick:e=>e[Math.floor(t()*e.length)],chance:e=>t()<e}}var Xe=[{key:`manhattan`,name:`Manhattan`,towers:[`#EDE3C8`,`#D9B98A`,`#B5562F`,`#A8C8E8`,`#2E3F5C`],ground:`#7CC455`,street:`#9AA0A6`,sidewalk:`#C8CCD0`,park:`#5DB347`,water:`#29A8D8`,shopfronts:[`#C04A3A`,`#3A7AC0`,`#C09A2A`],glass:`#7FA8CC`,winColors:[`#ffd27a`,`#9ad6ff`],hMax:4.6,sigma:.36,roofRate:.35,pSplit:.6,nightLit:.55,roofTint:null,landmarks:[`empireState`,`chrysler`,`liberty`]},{key:`paris`,name:`Paris`,towers:[`#E8DCC0`,`#F2EAD6`,`#E0D2B4`],ground:`#8CC46A`,street:`#A8A29A`,sidewalk:`#D4CEC2`,park:`#6DB35A`,water:`#3FA8C8`,shopfronts:[`#C04A3A`,`#3A6B5A`,`#7A5AC0`],glass:`#5A6B7A`,winColors:[`#ffdca0`,`#ffcaa0`],hMax:1.5,sigma:.9,roofRate:.15,pSplit:.75,nightLit:.45,roofTint:`#6A7886`,landmarks:[`eiffel`,`arcDeTriomphe`,`sacreCoeur`]},{key:`neoTokyo`,name:`Neo-Tokyo`,towers:[`#2A3038`,`#3A4250`,`#252B36`,`#4A4456`],ground:`#3A4A42`,street:`#5A6068`,sidewalk:`#7A8088`,park:`#2E5E46`,water:`#0E6878`,shopfronts:[`#E8483A`,`#5AE8E0`,`#E85AA0`],glass:`#5AE8E0`,winColors:[`#5AE8E0`,`#E85AA0`,`#E8E06A`],hMax:5.2,sigma:.42,roofRate:.6,pSplit:.6,nightLit:.7,roofTint:null,landmarks:[`tokyoTower`,`pagoda`,`neonBillboard`]}],Ze=Xe.map(e=>e.key),Qe=.3,$e=1.9,et=2.45,tt=.12,nt=.6;function rt(e){(Array.isArray(e)?e:[e]).forEach(e=>e&&e.dispose&&e.dispose())}function it({seed:e=1,profileIndex:t=0,landmarkFactory:n=null,windowGlow:r}){let i=new me,a=new me,o=new me;a.raycast=()=>{},o.raycast=()=>{},i.add(a,o);let s=new oe(16773594,3);s.position.set(.45,.6,-.65).multiplyScalar(10);let l=new te(7313331,2762272,1);i.add(s,l);let u=0,d=[],f={seed:e,profileIndex:t,profile:Xe[t],extent:0,meshCount:0};function p(e,t,n,r){let i=new c(new D(e,.04,t),M(new O({color:r,roughness:.95,flatShading:!0}),{color:r}));return i.position.y=n,i.userData.ground=!0,i}function m(e,t){for(let e of a.children)e.geometry&&e.geometry.dispose(),rt(e.material);a.clear();for(let e of o.children)e.traverse(e=>{e.isMesh&&rt(e.material)});o.clear(),d.length=0,u=0;let r=Ye(e),i=Xe[t],s=4/2*et,l=6.45;f={seed:e,profileIndex:t,profile:i,extent:l,meshCount:0};let m=l*2,y=new c(new D(m,2,m),M(new O({color:i.ground,roughness:.9,flatShading:!0}),{color:i.ground}));y.position.y=Qe-1,y.userData.ground=!0,a.add(y),a.add(p(m-nt,m-nt,.32,i.street));let b=[];for(let e=0;e<5;e++)for(let t=0;t<5;t++)b.push([e,t]);let x=new Set,S=Math.max(1,Math.round(b.length*.08));for(;x.size<S;)x.add(r.int(0,b.length-1));let C=r.range(-2.45*.6,et*.6),w=r.range(-2.45*.6,et*.6),T=Math.hypot(s,s),E=[];if(b.forEach(([e,t],n)=>{let o=(e-4/2)*et,s=(t-4/2)*et;if(a.add(p($e,$e,.32999999999999996,i.sidewalk).translateX(o).translateZ(s)),x.has(n)){a.add(p($e-tt*2,$e-tt*2,.35,i.park).translateX(o).translateZ(s));let e=r.int(3,5);for(let t=0;t<e;t++)v(o+r.range(-.6,.6),s+r.range(-.6,.6),i,r);return}let c=$e-tt*2,l=r.chance(i.pSplit)?2:1,u=r.chance(i.pSplit)?2:1,d=c/l,f=c/u;for(let e=0;e<l;e++)for(let t=0;t<u;t++){let n=o-c/2+d*(e+.5),a=s-c/2+f*(t+.5),l=Math.max(.6,d-.1),u=Math.max(.6,f-.1),p=Math.hypot(n-C,a-w)/T,m=Math.exp(-(p*p)/(2*i.sigma*i.sigma)),g=Math.max(.5,.5+(i.hMax-.5)*m*r.range(.75,1.25));g>i.hMax*.5&&Math.min(l,u)>=.7&&E.push({lx:n,lz:a,fw:l,fd:u,h:g,r:p}),h(n,a,l,u,g,i,r)}}),n&&n.ready){E.sort((e,t)=>e.r-t.r);let e=[],t=i.landmarks;for(let r=0;r<t.length&&E.length;r++){let a=null;for(let t of E)if(e.every(e=>Math.hypot(e.lx-t.lx,e.lz-t.lz)>et*.9)){a=t;break}a||=E[0],e.push(a),g(a.lx,a.lz);let s=i.hMax*n.heightFactor(t[r]),c=n.make(t[r],{x:a.lx,z:a.lz,w:a.fw,d:a.fd,h:s,plinthTop:Qe});if(c){o.add(c);let e=new ue().setFromObject(c);_(e.min.x-.15,e.max.x+.15,e.min.z-.15,e.max.z+.15)}}}a.traverse(e=>{e.isMesh&&(e.userData.ground?(e.castShadow=!1,e.receiveShadow=!0):e.material&&e.material.isMeshBasicMaterial?(e.castShadow=!1,e.receiveShadow=!1):(e.castShadow=!0,e.receiveShadow=!0))}),o.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),f.meshCount=a.children.length+o.children.length;let ee=0;for(let e of a.children){let t=e.position;ee=(Math.imul(ee,16777619)^(Math.round(t.x*100)*2654435761^Math.round(t.y*100)*40503^Math.round(t.z*100)*2246822519))>>>0}f.sig=ee,window.__city={seed:e,profile:i.key,meshes:f.meshCount,sig:ee}}function h(e,t,n,i,o,s,l){let f=qe(new O({flatShading:!0,roughness:.7,metalness:.05}),{color:l.pick(s.towers),id:++u,windowGlow:r,winColors:s.winColors,litFrac:s.nightLit}),p=new c(new D(n,o,i),f);if(p.position.set(e,Qe+o/2,t),p.userData.lot=[e,t],a.add(p),s.roofTint){let r=M(new O({color:s.roofTint,roughness:.85,flatShading:!0}),{color:s.roofTint}),l=new c(new D(n*1.02,.08,i*1.02),r);l.position.set(e,Qe+o+.04,t),l.userData.lot=[e,t],a.add(l)}if(o<1.4){let r=l.pick(s.shopfronts),o=new c(new D(n*1.04,.18,i*1.04),M(new O({color:r,roughness:.8,flatShading:!0}),{color:r}));o.position.set(e,.39,t),o.userData.lot=[e,t],a.add(o)}if(o>s.hMax*.45&&l.chance(s.roofRate)){let r=l.chance(.5)?new c(new D(n*.4,.18,i*.4),M(new O({color:`#9a9a9a`,flatShading:!0}),{color:`#9a9a9a`})):new c(new re(n*.18,n*.18,.22,10),M(new O({color:`#b9bec4`,flatShading:!0}),{color:`#b9bec4`}));if(r.position.set(e+l.range(-.1,.1),Qe+o+.11,t+l.range(-.1,.1)),r.userData.lot=[e,t],a.add(r),l.chance(.25)){let n=new c(new w(.05,6,5),new y({color:`#ff3b30`,transparent:!0,opacity:1}));n.position.set(e,Qe+o+.26,t),n.userData.lot=[e,t],n.raycast=()=>{},a.add(n),d.push({mesh:n,phase:l.range(0,6.28)})}}}function g(e,t){for(let n=a.children.length-1;n>=0;n--){let r=a.children[n];r.userData.lot&&Math.abs(r.userData.lot[0]-e)<1e-4&&Math.abs(r.userData.lot[1]-t)<1e-4&&(r.geometry&&r.geometry.dispose(),rt(r.material),a.remove(r))}for(let e=d.length-1;e>=0;e--)d[e].mesh.parent||d.splice(e,1)}function _(e,t,n,r){for(let i=a.children.length-1;i>=0;i--){let o=a.children[i];o.userData.lot&&o.position.x>=e&&o.position.x<=t&&o.position.z>=n&&o.position.z<=r&&(o.geometry&&o.geometry.dispose(),rt(o.material),a.remove(o))}}function v(e,t,n,r){let i=new k(n.park),o=(n,o)=>{let s=i.clone().offsetHSL(0,0,r.range(-.06,.06)).getStyle(),l=new c(new w(n,7,6),M(new O({color:s,flatShading:!0}),{color:s,season:!0}));l.scale.y=.7,l.position.set(e,Qe+o,t),l.userData.lot=null,a.add(l)},s=new c(new D(.05,.18,.05),M(new O({color:`#6b4a2a`,flatShading:!0}),{color:`#6b4a2a`}));s.position.set(e,.39,t),a.add(s),o(.22,.28),o(.16,.46)}function b(e){for(let t of d)t.mesh.material.opacity=.35+.65*(.5+.5*Math.sin(e*3+t.phase))}return m(e,t),{group:i,key:s,fill:l,update:b,generate:m,get state(){return f},get extent(){return f.extent},get waterColor(){return f.profile.water},profiles:Xe}}var at=Math.PI*2,ot=.7,st=90,ct=[{name:`night`,sun:`#4a6f9e`,intensity:.35,hemiSky:`#26344f`,hemiGround:`#0c1018`,horizon:`#1e2942`,sky:`#36486e`,exposure:.95,outline:`#101a30`,window:1,toonGain:2.6},{name:`dawn`,sun:`#ff9e54`,intensity:2.4,hemiSky:`#8a7686`,hemiGround:`#2a1f1a`,horizon:`#b8512c`,sky:`#ffb070`,exposure:1.05,outline:`#241826`,window:.3,toonGain:2},{name:`noon`,sun:`#fff4e0`,intensity:4.6,hemiSky:`#9cb8cc`,hemiGround:`#33302a`,horizon:`#5e7689`,sky:`#aacadd`,exposure:1.18,outline:`#0b0a08`,window:0,toonGain:1.7},{name:`dusk`,sun:`#ff6b35`,intensity:2,hemiSky:`#7a566a`,hemiGround:`#281a18`,horizon:`#b0432a`,sky:`#ff8a5a`,exposure:1.05,outline:`#1f1420`,window:.4,toonGain:2}],lt=e=>e-Math.floor(e),ut=(e,t,n)=>e+(t-e)*n,dt=(e,t,n)=>e+(t-e)*(1-Math.exp(-6*n));function ft({t:e=.5}={}){let t=e,n=e,r=!1,i=!1,a=ct.map(e=>({name:e.name,sun:new k(e.sun),hemiSky:new k(e.hemiSky),hemiGround:new k(e.hemiGround),horizon:new k(e.horizon),sky:new k(e.sky),outline:new k(e.outline),intensity:e.intensity,exposure:e.exposure,window:e.window,toonGain:e.toonGain})),o=new A(0,1,0),s=new k(`#fff4e0`),c=new k(`#6f97b3`),l=new k(`#2a2620`),u=new k(`#3a4a57`),d=new k(`#7da3bd`),f=new k(`#0b0a08`),p=new k(`#000000`),m=3,h=1,g=0,_=1.7,v=new A;function y(e){let t=lt(e)*4,n=Math.floor(t)%4,r=(n+1)%4,i=t-Math.floor(t),y=a[n],b=a[r];s.lerpColors(y.sun,b.sun,i),c.lerpColors(y.hemiSky,b.hemiSky,i),l.lerpColors(y.hemiGround,b.hemiGround,i),u.lerpColors(y.horizon,b.horizon,i),d.lerpColors(y.sky,b.sky,i),f.lerpColors(y.outline,b.outline,i),m=ut(y.intensity,b.intensity,i),h=ut(y.exposure,b.exposure,i),g=ut(y.window,b.window,i),_=ut(y.toonGain,b.toonGain,i),p.setRGB(.045*g,.075*g,.14*g);let x=lt(e)*at-Math.PI/2,S=Math.cos(x),C=Math.sin(x);v.set(S,C*Math.cos(ot),C*Math.sin(ot)),v.y>=0?o.copy(v):o.copy(v).negate()}return y(t),{sunDir:o,sunColor:s,hemiSky:c,hemiGround:l,horizon:u,sky:d,outline:f,toonFloor:p,get sunIntensity(){return m},get exposure(){return h},get windowGlow(){return g},get toonGain(){return _},get t(){return lt(t)},get auto(){return r},get clock(){let e=Math.round(lt(t)*24*60)%1440;return`${String(Math.floor(e/60)).padStart(2,`0`)}:${String(e%60).padStart(2,`0`)}`},cyclePreset(){n=(Math.floor(t*4+1e-4)+1)/4},nudge(e){n+=e/24},goTo(e){n=e},toggleAuto(){r=!r},setReducedMotion(e){i=e},update(e){r&&!i&&(n+=e/st),t=dt(t,n,e),y(t)}}}function pt(e,t){let n=[];for(let r=0;r<16;r++){let i=r/16*Math.PI*2;n.push(new A(Math.cos(i)*e,t,Math.sin(i)*e))}return new de(n,!0,`catmullrom`,.5)}function mt(e,t){let n=new T;return n.moveTo(-e+t,-e),n.lineTo(e-t,-e),n.quadraticCurveTo(e,-e,e,-e+t),n.lineTo(e,e-t),n.quadraticCurveTo(e,e,e-t,e),n.lineTo(-e+t,e),n.quadraticCurveTo(-e,e,-e,e-t),n.lineTo(-e,-e+t),n.quadraticCurveTo(-e,-e,-e+t,-e),n}function ht(e,t,n){let r=mt(e,t).getSpacedPoints(40).map(e=>new A(e.x,n,e.y));return r.pop(),new de(r,!0,`catmullrom`,.5)}function gt(e){let t=(t,n)=>Math.exp(-((e-t)*(e-t))/(2*n*n)),n=Math.max(t(.33,.05),t(.75,.06)),r=C.smoothstep(e,.24,.3)*(1-C.smoothstep(e,.8,.88));return C.clamp(.15+.55*r+.45*n,.12,1)}function _t(e,t){let n=(e/8.5+t*.43)%1;return n<.66?1:n<.72?1-(n-.66)/.06:n<.95?0:(n-.95)/.05}function vt({plinthTop:e=.3,extent:t=4}={}){let n=new me,r=e,i=mt(t-.05,.7);i.holes.push(mt(t-.78,.45));let a=new c(new f(i),M(new O({color:`#1b1d22`,roughness:.95,metalness:0}),{color:`#bcc0c6`}));a.rotation.x=-Math.PI/2,a.position.y=r+.01,a.receiveShadow=!0,n.add(a);let o=[ht(t-.28,.6,r+.02),ht(t-.5,.55,r+.02)],s=[0,0],l=new ge(new D(.42,.32,.86),M(new O({flatShading:!0,roughness:.45,metalness:.35})),7);l.castShadow=!0,l.receiveShadow=!1,l.frustumCulled=!1,l.raycast=()=>{};let d={taxi:`#f4c430`,bus:`#c0392b`,civ1:`#d8dde2`,civ2:`#9aa7b4`,civ3:`#6b7785`},p=[];for(let e=0;e<7;e++){let t=e===1,n=e===0;p.push({lane:e%2,phase:e/7,speed:t?.55:.85+e%3*.12,lenZ:t?1.5:1,color:n?d.taxi:t?d.bus:[d.civ1,d.civ2,d.civ3][e%3]})}let m=new k;p.forEach((e,t)=>l.setColorAt(t,m.set(e.color)));let h=new ge(new ce(.04,.1,3,6),M(new O({flatShading:!0,roughness:.8})),16);h.castShadow=!0,h.receiveShadow=!1,h.frustumCulled=!1,h.raycast=()=>{};let g=pt(t-.72,e),_=[];for(let e=0;e<16;e++)_.push({phase:e/16,speed:.12+e%4*.02,dir:e%2?1:-1});let v=new k;_.forEach((e,t)=>h.setColorAt(t,v.set([`#caa`,`#9ab`,`#bba`,`#ab9`][t%4])));let b=new u(1,.6),x=new y({color:`#fff0c0`,transparent:!0,opacity:1,blending:2,depthWrite:!1}),S=new ge(b,x,7);S.frustumCulled=!1,S.raycast=()=>{},n.add(l,h,S);let w=new ae,T=new A,E=new A;function ee(t,n,i){let a=i?i.t:.5,c=i?i.windowGlow:0;for(let e=0;e<o.length;e++)s[e]+=t*_t(n,e);let u=Math.max(1,Math.round(gt(a)*7));for(let e=0;e<7;e++){let t=p[e];if(e>=u){w.scale.setScalar(0),w.position.set(0,-50,0),w.updateMatrix(),l.setMatrixAt(e,w.matrix),S.setMatrixAt(e,w.matrix);continue}let n=t.lane===0?1:-1,i=(t.phase+n*t.speed*s[t.lane]*.12+1e3)%1;o[t.lane].getPointAt(i,T),o[t.lane].getTangentAt(i,E);let a=Math.atan2(E.x*n,E.z*n);w.position.set(T.x,T.y+.16,T.z),w.rotation.set(0,a,0),w.scale.set(1,1,t.lenZ),w.updateMatrix(),l.setMatrixAt(e,w.matrix),o[t.lane].getPointAt((i+n*.012+1)%1,T),w.position.set(T.x,r+.04,T.z),w.rotation.set(-Math.PI/2,0,a),w.scale.setScalar(+(c>.05)),w.updateMatrix(),S.setMatrixAt(e,w.matrix)}l.instanceMatrix.needsUpdate=!0,S.instanceMatrix.needsUpdate=!0,x.opacity=C.clamp(c*1.7,0,1);let d=Math.max(2,Math.round(gt(a)*16));for(let t=0;t<16;t++){let r=_[t];if(t>=d){w.scale.setScalar(0),w.position.set(0,-50,0),w.updateMatrix(),h.setMatrixAt(t,w.matrix);continue}let i=(r.phase+r.dir*r.speed*n*.02+1e3)%1;g.getPointAt(i,T),g.getTangentAt(i,E);let a=Math.sin(n*6+r.phase*30)*.015;w.position.set(T.x,e+.09+a,T.z),w.rotation.set(0,Math.atan2(E.x*r.dir,E.z*r.dir),Math.sin(n*6+r.phase*30)*.06),w.scale.setScalar(1),w.updateMatrix(),h.setMatrixAt(t,w.matrix)}h.instanceMatrix.needsUpdate=!0}return{group:n,update:ee}}var yt=[`empireState`,`chrysler`,`liberty`,`eiffel`,`arcDeTriomphe`,`sacreCoeur`,`tokyoTower`,`pagoda`,`neonBillboard`],bt={empireState:1.25,chrysler:1.1,liberty:.55,eiffel:3.2,arcDeTriomphe:1.5,sacreCoeur:1.75,tokyoTower:1.35,pagoda:.5,neonBillboard:.9};function xt(e){let t=()=>new O({flatShading:!0,roughness:.7,metalness:.1}),n=(n,r={})=>r.windows?qe(t(),{color:n,id:e.id(),windowGlow:e.windowGlow,winColors:e.winColors,litFrac:e.litFrac}):M(t(),{color:n,glow:r.glow??null,glowDay:r.glowDay??0,glowNight:r.glowNight??1,windowGlow:r.glow?e.windowGlow:null});return{box:(e,t,r,i,a={})=>new c(new D(e,t,r),n(i,a)),cyl:(e,t,r,i,a={})=>new c(new re(e,t,r,a.seg||12),n(i,a)),cone:(e,t,r,i={})=>new c(new pe(e,t,i.seg||8),n(r,i)),sphere:(e,t,r={})=>new c(new w(e,r.seg||12,r.seg2||8),n(t,r)),lathe:(e,t,r={})=>new c(new S(e.map(e=>new h(e[0],e[1])),r.seg||4),n(t,r))}}var N=(e,t,n,r)=>(e.position.set(t,n,r),e),St=[`#7FB0E0`,`#E07FB0`,`#7FE0A0`,`#E0C97F`,`#9FE07F`,`#7FE0E0`,`#FF8C42`,`#E0E07F`,`#C97FE0`,`#E07F7F`,`#7F9FE0`,`#E0483A`],Ct={empireState(e,t){let n=`#E8E0CF`;e.add(N(t.box(.42,.18,.42,n,{windows:!0}),0,.09,0)),e.add(N(t.box(.34,.16,.34,n,{windows:!0}),0,.26,0)),e.add(N(t.box(.26,.14,.26,n,{windows:!0}),0,.41,0)),e.add(N(t.box(.19,.34,.19,n,{windows:!0}),0,.65,0)),e.add(N(t.box(.13,.06,.13,n,{windows:!0}),0,.85,0));let r=St[new Date().getMonth()];e.add(N(t.cyl(.03,.045,.12,n,{seg:10,glow:r,glowNight:1.85}),0,.94,0)),e.add(N(t.cone(.012,.07,n,{seg:8}),0,1.04,0))},chrysler(e,t){let n=`#C9CED4`;e.add(N(t.box(.22,.55,.22,`#9AA7B4`,{windows:!0}),0,.275,0));let r=.55;for(let i=0;i<5;i++){let a=.14-i*.024,o=.07;e.add(N(t.cyl(a*.7,a,o,n,{seg:8,glow:`#dfeaff`,glowNight:.5}),0,r+o/2,0)),r+=o}e.add(N(t.cone(.018,.16,n,{seg:8}),0,r+.08,0))},liberty(e,t){let n=`#B9B4A6`,r=`#4FA890`;e.add(N(t.box(.42,.16,.42,n),0,.08,0)),e.add(N(t.box(.3,.2,.3,n),0,.26,0)),e.add(N(t.cyl(.1,.15,.42,r,{seg:10}),0,.57,0)),e.add(N(t.box(.11,.1,.11,r),0,.83,0));for(let n=0;n<7;n++){let i=(n/6-.5)*Math.PI*1.1;e.add(N(t.cone(.012,.1,r,{seg:5}),Math.sin(i)*.1,.92,Math.cos(i)*.06-.02))}let i=N(t.cyl(.025,.03,.34,r,{seg:8}),.14,.98,0);i.rotation.z=.35,e.add(i),e.add(N(t.box(.06,.06,.06,r,{glow:`#ffd060`,glowDay:.6,glowNight:1.2}),.2,1.16,0)),e.add(N(t.cone(.04,.09,`#ffcf66`,{seg:6,glow:`#ffd060`,glowDay:.7,glowNight:1.3}),.2,1.24,0))},eiffel(e,t){let n=`#6E5C4C`,r=[[.2,0],[.13,.16],[.085,.33],[.055,.5],[.035,.66],[.02,.85],[0,.92]];e.add(t.lathe(r,n,{seg:4}));let i=t.lathe(r,n,{seg:4});i.rotation.y=Math.PI/4,e.add(i),e.add(N(t.box(.26,.025,.26,n),0,.33,0)),e.add(N(t.box(.14,.02,.14,n),0,.66,0)),e.add(N(t.cone(.01,.1,n,{seg:6}),0,.97,0))},arcDeTriomphe(e,t){let n=`#D9D0C1`,r=.58,i=.5,a=.34,o=new T;o.moveTo(-.58/2,0),o.lineTo(r/2,0),o.lineTo(r/2,i),o.lineTo(-.58/2,i),o.lineTo(-.58/2,0);let s=new v,l=.15,u=.22;s.moveTo(-.15,0),s.lineTo(-.15,u),s.absarc(0,u,l,Math.PI,0,!0),s.lineTo(l,0),s.lineTo(-.15,0),o.holes.push(s);let d=new ie(o,{depth:a,bevelEnabled:!1});d.translate(0,0,-.34/2),d.computeVertexNormals(),e.add(new c(d,M(new O({color:n,flatShading:!0}),{color:n}))),e.add(N(t.box(r*1.06,.08,a*1.06,n),0,.54,0))},sacreCoeur(e,t){let n=`#F1EEE6`;e.add(N(t.box(.5,.26,.4,n),0,.13,0));let r=(r,i,a,o)=>{e.add(N(t.cyl(a*.9,a,i,n,{seg:12}),r,o,0));let s=N(t.sphere(a,n,{seg:12}),r,o+i/2,0);s.scale.y=1.5,e.add(s)};r(0,.22,.15,.4),r(-.2,.1,.07,.33),r(.2,.1,.07,.33)},tokyoTower(e,t){let n=`#F25822`,r=`#EDEDED`,i=0;for(let a=0;a<9;a++){let o=a/9,s=(a+1)/9,c=.19*(1-o)+.03*o,l=.19*(1-s)+.03*s,u=.085,d=a%2?r:n;e.add(N(t.cyl(l,c,u,d,{seg:4,glow:n,glowDay:0,glowNight:.7}),0,i+u/2,0)),i+=u}e.add(N(t.box(.22,.02,.22,n,{glow:n,glowNight:.7}),0,.28,0)),e.add(N(t.box(.12,.02,.12,r),0,.5,0)),e.add(N(t.cone(.012,.16,r,{seg:6,glow:`#ff6a2a`,glowNight:.9}),0,i+.08,0))},pagoda(e,t){let n=0;for(let r=0;r<5;r++){let i=.42-r*.06,a=.11;e.add(N(t.box(i,a,i,`#B23A2C`,{windows:r<4}),0,n+a/2,0)),e.add(N(t.box(i*1.34,.03,i*1.34,`#7A3B2A`),0,n+a+.015,0)),n+=.16999999999999998}e.add(N(t.cyl(.012,.012,.1,`#E0C040`,{seg:6}),0,n+.05,0)),e.add(N(t.sphere(.03,`#E0C040`,{seg:8,glow:`#ffe680`,glowNight:.8}),0,n+.12,0))},neonBillboard(e,t){let n=`#20242C`;e.add(N(t.box(.3,1,.3,n,{windows:!0}),0,.5,0));let r=[`#5AE8E0`,`#E85AA0`,`#E8E06A`],i=(n,r,i,a,o,s,c)=>{let l=N(t.box(n,r,.02,i,{glow:i,glowDay:.6,glowNight:1.1}),a,o,s);l.rotation.y=c,e.add(l)};i(.22,.34,r[0],0,.75,.16,0),i(.16,.5,r[1],.16,.5,0,Math.PI/2),i(.2,.22,r[2],0,.34,-.16,0),e.add(N(t.cone(.01,.14,n,{seg:6,glow:`#E85AA0`,glowDay:.4,glowNight:1}),0,1.08,0))}};function wt(e,t){let n=new me;return Ct[e](n,xt(t)),n}var Tt=``+new URL(`building-skyscraper-d-CapD2Zqe.glb`,import.meta.url).href,Et=``+new URL(`building-n-hdv8kKtN.glb`,import.meta.url).href,Dt=``+new URL(`building-g-CsTB1qH9.glb`,import.meta.url).href,Ot=``+new URL(`colormap-CK8fW2HB.png`,import.meta.url).href,kt={skyscraper:{url:Tt,color:`#9cc1dd`,fill:.92},midrise:{url:Et,color:`#c9a07a`,fill:.96},setback:{url:Dt,color:`#d9c7a0`,fill:.9}};function At({windowGlow:e}){let t=new he;t.setURLModifier(e=>e.includes(`colormap.png`)?Ot:e);let n=new fe(t),r={},i=!1,a=Promise.all(Object.entries(kt).map(async([e,t])=>{r[e]=(await n.loadAsync(t.url)).scene})).then(()=>{i=!0,window.__landmarksReady=!0}).catch(e=>console.error(`landmark models failed:`,e)),o=9e3;function s(t,n,i={}){let a,s;if(yt.includes(t))a=wt(t,{windowGlow:e,winColors:i.winColors,litFrac:i.litFrac,id:()=>++o}),s=1;else{let e=r[t],n=kt[t];if(!e||!n)return null;a=e.clone(!0),s=n.fill}a.updateMatrixWorld(!0);let c=new ue().setFromObject(a).getSize(new A);a.scale.setScalar(n.h*s/c.y),a.updateMatrixWorld(!0);let l=new ue().setFromObject(a),u=l.getCenter(new A);return a.position.x+=n.x-u.x,a.position.z+=n.z-u.z,a.position.y+=n.plinthTop-l.min.y,yt.includes(t)?a.traverse(e=>{e.isMesh&&(e.castShadow=!1,e.raycast=()=>{})}):a.traverse(n=>{if(!n.isMesh)return;n.castShadow=!1,n.raycast=()=>{};let r=n=>qe(n.clone(),{color:kt[t].color,id:++o,windowGlow:e,winColors:i.winColors,litFrac:i.litFrac});n.material=Array.isArray(n.material)?n.material.map(r):r(n.material)}),a}return{make:s,whenReady:a,heightFactor:e=>bt[e]??1,get ready(){return i}}}var jt=[`video/mp4;codecs=avc1.42E01E`,`video/mp4`,`video/webm;codecs=vp9`,`video/webm`];function Mt({renderer:e,rig:t,sunRig:n,poke:r,getState:i}){let a=e.domElement,o=new URLSearchParams(window.location.search),s=e=>{let t=i();return`lgr-${t.lesson}-${String(t.clock||``).replace(`:`,``)}-${t.style}.${e}`},c=(e,t)=>{let n=URL.createObjectURL(e),r=document.createElement(`a`);r.href=n,r.download=t,document.body.appendChild(r),r.click(),r.remove(),setTimeout(()=>URL.revokeObjectURL(n),1e3)};function l(){a.toBlob(e=>{e&&(c(e,s(`png`)),window.__lastStill=e.size)},`image/png`)}let u=()=>jt.find(e=>window.MediaRecorder&&MediaRecorder.isTypeSupported(e))||``,d=Nt(),f=null,p=[],m=!1;function h(){if(m)return;let e=u(),t=a.captureStream(60);f=new MediaRecorder(t,e?{mimeType:e,videoBitsPerSecond:12e6}:{}),p=[],f.ondataavailable=e=>{e.data&&e.data.size&&p.push(e.data)},f.onstop=()=>{let e=new Blob(p,{type:f.mimeType});c(e,s(f.mimeType.includes(`mp4`)?`mp4`:`webm`)),window.__lastVideo=e.size},f.start(),m=!0,window.__recording=!0,d.show()}function g(){m&&(f.stop(),m=!1,window.__recording=!1,d.hide())}let _=()=>m?g():h(),v=e=>new Promise(t=>setTimeout(t,e)),y=e=>window.dispatchEvent(new KeyboardEvent(`keydown`,{key:e}));async function b(){let e=a.clientWidth,t=a.clientHeight,n=e*.26,i=t*.74;for(let t=0;t<=10;t++)r.at(n+t*e*.028,i+Math.sin(t*.7)*16),await v(100);r.stop()}async function x(e){if(e.keys)for(let t of e.keys)y(t),await v(70);e.zoom&&t.zoomBy(e.zoom),e.orbit&&t.orbit(e.orbit[0],e.orbit[1]),e.timeTo!==void 0&&n.goTo(e.timeTo),e.ripple&&await b(),e.waitMs&&await v(e.waitMs)}let S={tour:[{keys:[`6`,`0`],waitMs:600},{zoom:.72,waitMs:1700},{ripple:!0,waitMs:2400},{orbit:[.55,0],waitMs:1700},{timeTo:0,waitMs:3e3},{timeTo:.5,waitMs:1500},{keys:[`7`],waitMs:1e3},{zoom:1.5,waitMs:1400},{keys:[`B`],waitMs:2e3},{keys:[`B`],waitMs:2e3},{keys:[`B`],waitMs:2e3},{keys:[`B`],waitMs:2e3},{keys:[`B`],waitMs:2e3},{keys:[`8`],waitMs:900},{zoom:.65,waitMs:1200},{ripple:!0,waitMs:2600},{keys:[`7`],waitMs:700},{keys:[`B`],waitMs:300},{keys:[`B`],waitMs:900},{zoom:1.4,waitMs:2600}],daycycle:[{keys:[`6`,`0`],waitMs:700},{timeTo:.75,waitMs:2600},{timeTo:1,waitMs:2600},{timeTo:1.25,waitMs:2600},{timeTo:1.5,waitMs:2600},{timeTo:1.5,waitMs:800}],cities:[{keys:[`6`,`0`],waitMs:500},{timeTo:.78,waitMs:2800},{keys:[`C`],waitMs:3e3},{keys:[`C`],waitMs:3e3},{keys:[`C`],waitMs:2e3}]};async function C(e){let t=S[e];if(t){window.__director=e;for(let e of t)await x(e);window.__director=null}}async function w(e){await v(1600),h(),await C(e),await v(400),g(),window.__captureDone=!0}window.addEventListener(`keydown`,e=>{(e.key===`s`||e.key===`S`)&&l(),(e.key===`r`||e.key===`R`)&&_()});let T=o.get(`capture`);return T&&S[T]&&w(T),window.__capture={still:l,toggleRec:_,run:C,sequences:Object.keys(S)},window.__capture}function Nt(){let e=document.createElement(`div`);return e.textContent=`● REC`,e.style.cssText=`position:fixed;top:14px;right:16px;z-index:2;font:bold 12px ui-monospace,monospace;color:#ff3b30;letter-spacing:.12em;text-shadow:0 1px 3px #000;display:none;`,document.body.appendChild(e),{show:()=>{e.style.display=`block`},hide:()=>{e.style.display=`none`}}}var Pt=`
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
@media (pointer: coarse) { .vui { bottom: 20px; padding: 9px 11px; } .vui button { font-size: 13px; } }
`;function Ft({controls:e,state:t,show:n,coarse:r}){if(typeof document>`u`)return;let i=document.createElement(`style`);i.textContent=Pt,document.head.appendChild(i);let a=document.createElement(`div`);a.className=`vui`;let o=document.createElement(`div`);o.className=`vui-info`,o.innerHTML=`KEYS · 4/5/6 cam · 0 vector · 7/8 pixel/toon · B era · T time · [ ] scrub · 9 auto · C city · G shuffle · W weather · K season · S still · R rec · H shadows · P theme · drag water to ripple`;let s=(e,t,n)=>{let r=document.createElement(`button`);return r.textContent=e,n&&(r.title=n),r.addEventListener(`click`,t),r},c=e=>{let t=document.createElement(`div`);return t.className=`seg`,{seg:t,btns:e.map(([n,r])=>{let i=s(n,()=>e.find(e=>e[1]===r)[2](),n);return i.dataset.val=r,t.appendChild(i),i})}};a.appendChild(s(`City`,()=>e.city(),`Next city profile (C)`)),a.appendChild(s(`Shuffle`,()=>e.shuffle(),`New random seed (G)`)),a.appendChild(C());let l={clear:`Clear`,rain:`Rain`,snow:`Snow`,fog:`Fog`},u=[`Spring`,`Summer`,`Autumn`,`Winter`],d=s(`Clear`,()=>e.weather(),`Cycle weather: clear→rain→snow→fog (W)`),f=s(`Spring`,()=>e.season(),`Cycle season: spring→summer→autumn→winter (K)`);a.append(d,f,C());let p=c([[`Vector`,`vector`,()=>e.style(`vector`)],[`Pixel`,`pixel`,()=>e.style(`pixel`)],[`Toon`,`toon`,()=>e.style(`toon`)]]);a.appendChild(p.seg),a.appendChild(C());let m=document.createElement(`input`);m.type=`range`,m.min=`0`,m.max=`1`,m.step=`0.01`,m.title=`Time of day`;let h=!1;m.addEventListener(`pointerdown`,()=>{h=!0}),m.addEventListener(`pointerup`,()=>{h=!1}),m.addEventListener(`input`,()=>e.time(parseFloat(m.value)));let g=s(`▶`,()=>e.auto(),`Play/pause day cycle (9)`),_=document.createElement(`div`);_.style.cssText=`display:flex;align-items:center;gap:6px;`;let v=document.createElement(`span`);v.className=`lbl`,v.textContent=`Day`,_.append(v,m,g),a.appendChild(_),a.appendChild(C());let y=c([[`Iso`,`iso`,()=>e.cam(`iso`)],[`Dim`,`dimetric`,()=>e.cam(`dimetric`)],[`3D`,`persp`,()=>e.cam(`persp`)]]);a.appendChild(y.seg),a.appendChild(s(`ⓘ`,()=>o.classList.toggle(`open`),`All keys`)),document.body.append(o,a),S(n);function b(){let e=t();p.btns.forEach(t=>t.classList.toggle(`on`,t.dataset.val===e.style)),y.btns.forEach(t=>t.classList.toggle(`on`,t.dataset.val===e.cam)),d.textContent=l[e.weather]||`Clear`,d.classList.toggle(`on`,e.weather!==`clear`),f.textContent=u[e.season]||`Spring`,f.classList.toggle(`on`,(e.season||0)>0),g.textContent=e.auto?`❚❚`:`▶`,g.classList.toggle(`on`,e.auto),h||(m.value=String(e.t))}b();let x=setInterval(b,200);function S(e){a.style.display=e?`flex`:`none`,e||o.classList.remove(`open`)}return{setVisible:S,refresh:b,destroy(){clearInterval(x),a.remove(),o.remove(),i.remove()}};function C(){let e=document.createElement(`div`);return e.className=`sep`,e}}var It=[`clear`,`rain`,`snow`,`fog`];function Lt({extent:e=7}={}){let t=new me;t.raycast=()=>{};let n=e+2,r=.25,i=(e,t)=>e+Math.random()*(t-e),a=new ge(new u(.015,.5),new y({color:`#a9bdd6`,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),600);a.frustumCulled=!1,a.raycast=()=>{};let o=new Float32Array(600*3),s=new Float32Array(600);for(let e=0;e<600;e++)o[e*3]=i(-n,n),o[e*3+1]=i(r,11),o[e*3+2]=i(-n,n),s[e]=i(9,14);let c=new ge(new u(.07,.07),new y({color:`#f3f7ff`,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),700);c.frustumCulled=!1,c.raycast=()=>{};let l=new Float32Array(700*3),d=new Float32Array(700),f=new Float32Array(700);for(let e=0;e<700;e++)l[e*3]=i(-n,n),l[e*3+1]=i(r,11),l[e*3+2]=i(-n,n),d[e]=i(0,6.28),f[e]=i(.6,1.2);t.add(a,c);let p=Array.from({length:8},()=>new A),m=0,h=`clear`,g=0,_=0,v=0,b=0,x=0,S=new ae,C=(e,t,n,r)=>e+(t-e)*Math.min(1,n*r);function w(e){It.includes(e)&&(h=e)}function T(){h=It[(It.indexOf(h)+1)%It.length]}function E(e,t){let u=h===`rain`,y=h===`snow`,w=h===`fog`,T=h!==`clear`;g=C(g,+!!T,e,1.4),_=C(_,+!!T,e,1.2),v=C(v,+!!w,e,.9),x=C(x,T&&!w?1:0,e,1),b=C(b,+!!y,e,y?.22:.5);let E=u?g:0,ee=Math.round(600*E);for(let t=0;t<600;t++){if(t>=ee){S.position.set(0,-50,0),S.scale.setScalar(0),S.updateMatrix(),a.setMatrixAt(t,S.matrix);continue}o[t*3+1]-=s[t]*e,o[t*3]+=e*1.1,o[t*3+1]<r&&(o[t*3]=i(-n,n),o[t*3+1]=11,o[t*3+2]=i(-n,n)),S.position.set(o[t*3],o[t*3+1],o[t*3+2]),S.rotation.set(0,0,0),S.scale.set(1,1,1),S.updateMatrix(),a.setMatrixAt(t,S.matrix)}a.instanceMatrix.needsUpdate=!0,a.material.opacity=.55*E,m=u?Math.round(8*g):0;for(let e=0;e<m;e++)p[e].set(Math.random(),Math.random(),.05*g);let te=Math.round(700*(y?g:0));for(let a=0;a<700;a++){if(a>=te){S.position.set(0,-50,0),S.scale.setScalar(0),S.updateMatrix(),c.setMatrixAt(a,S.matrix);continue}l[a*3+1]-=f[a]*e;let o=Math.sin(t*1.5+d[a])*.5;l[a*3+1]<r&&(l[a*3]=i(-n,n),l[a*3+1]=11,l[a*3+2]=i(-n,n)),S.position.set(l[a*3]+o,l[a*3+1],l[a*3+2]),S.rotation.set(0,0,0),S.scale.setScalar(1),S.updateMatrix(),c.setMatrixAt(a,S.matrix)}c.instanceMatrix.needsUpdate=!0,c.material.opacity=.9*(y?g:0)}return{group:t,update:E,cycle:T,setKind:w,rainDrops:p,get kind(){return h},get intensity(){return g},get overcast(){return _},get fog(){return v},get snow(){return b},get cloud(){return x},get rainDropCount(){return m},poolCounts:{rain:600,snow:700}}}var Rt=`varying vec2 vUv;

void main() {
  
  
  
  vUv = uv;

  
  
  
  
  
  
  
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,zt=`precision highp float;

varying vec2 vUv;

uniform float uTime;
uniform vec3  uInk;
uniform vec3  uGold;

void main() {
  
  
  float wave = 0.5 + 0.5 * sin(vUv.x * 3.0 + vUv.y * 2.0 + uTime * 0.3);

  
  
  wave *= 0.6 + 0.4 * sin(vUv.y * 4.0 - uTime * 0.15);

  
  
  vec3 colour = mix(uInk, uGold * 0.5, wave * 0.45);

  gl_FragColor = vec4(colour, 1.0); 
}`,Bt=`precision highp float;

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

  
  gl_FragColor = vec4(next, 0.0, 0.0, 1.0);
}`,Vt=`precision highp float;

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
}`,Ht=`precision highp float;

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
}`,Ut=`const float CA_STRENGTH   = 0.0030;  
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
}`,Wt=`const float DITHER = 0.55;   

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
}`,Gt=`precision highp float;

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
}`,Kt=`precision highp float;

varying vec2 vUv;
uniform sampler2D uToon;   
uniform sampler2D uPixel;  
uniform float     uBlend;  

void main() {
  vec3 t = texture2D(uToon, vUv).rgb;
  vec3 p = texture2D(uPixel, vUv).rgb;
  gl_FragColor = vec4(mix(t, p, uBlend), 1.0);
}`,qt=220,P=new URLSearchParams(window.location.search),Jt=P.get(`demo`)===`1`||P.has(`capture`);window.__demo=Jt;var Yt={night:[`#0A0C16`,`#1C2236`,`#3A3A52`,`#5A5A78`,`#8A92B0`],dawn:[`#1A1008`,`#43281A`,`#7A4A30`,`#B07A4E`,`#E8A86A`],noon:[`#16100A`,`#3A2F1E`,`#6B563A`,`#937B54`,`#B89968`],dusk:[`#140A0A`,`#3E1E1A`,`#7A3828`,`#B85A36`,`#F0884A`]},Xt={night:[`#020604`,`#06180E`,`#10401E`,`#1E9040`,`#7FE0FF`],dawn:[`#060603`,`#1A2410`,`#3A6B22`,`#6CC040`,`#FFC060`],noon:[`#050805`,`#0E2912`,`#1E6B2F`,`#3CF06A`,`#FFB000`],dusk:[`#080402`,`#241408`,`#6B4A12`,`#E0A030`,`#FF7030`]},F=new se({antialias:!0,preserveDrawingBuffer:!0});F.shadowMap.enabled=!0,F.shadowMap.type=1,F.setPixelRatio(Math.min(window.devicePixelRatio,2)),F.setSize(window.innerWidth,window.innerHeight),F.setClearColor(920327,1),document.body.appendChild(F.domElement);var I=F.getDrawingBufferSize(new h),L=new ve;L.fog=new E(10465470,0);var Zt=new k(`#aeb6c0`),R=Pe({aspect:window.innerWidth/window.innerHeight}),z=ft({t:.5}),B=256,Qt={type:_e,format:p,minFilter:a,magFilter:a,wrapS:ne,wrapT:ne,depthBuffer:!1,stencilBuffer:!1},$t=[new m(B,B,Qt),new m(B,B,Qt),new m(B,B,Qt)];for(let e of $t)F.setRenderTarget(e),F.clear();F.setRenderTarget(null);var en=new ve,tn=new _(-1,1,1,-1,0,1),V=new o({vertexShader:r,fragmentShader:Bt,uniforms:{uCurr:{value:null},uPrev:{value:null},uTexel:{value:new h(1/B,1/B)},uMouse:{value:new h(-1,-1)},uMouseStrength:{value:0},uC2:{value:.25},uDamping:{value:.992},uRainCount:{value:0},uRainDrops:{value:Array.from({length:8},()=>new A)}}});en.add(new c(new u(2,2),V));var nn=new m(I.x,I.y,{minFilter:s,magFilter:s,depthBuffer:!0,stencilBuffer:!1});function rn(e){let t=document.createElement(`canvas`);t.width=t.height=1024;let n=t.getContext(`2d`);n.fillStyle=e?`#0c1418`:`#15110b`,n.fillRect(0,0,1024,1024),n.strokeStyle=e?`rgba(120,150,170,0.22)`:`rgba(184,153,104,0.30)`,n.lineWidth=2;for(let e=0;e<=1024;e+=64)n.beginPath(),n.moveTo(e,0),n.lineTo(e,1024),n.stroke(),n.beginPath(),n.moveTo(0,e),n.lineTo(1024,e),n.stroke();e||(n.fillStyle=`#B89968`,n.font=`bold 360px Georgia, serif`,n.textAlign=`center`,n.textBaseline=`middle`,n.fillText(`LGR`,512,470),n.font=`600 64px ui-monospace, monospace`,n.fillText(`WEB · STUDIO`,512,720));let r=new ee(t);return r.colorSpace=x,r}var an=new c(new u(16,16),new y({map:rn(Jt)}));an.rotation.x=-Math.PI/2,an.position.y=-.35,L.add(an);var on=new c(new u(40,24),new o({depthWrite:!1,vertexShader:Rt,fragmentShader:zt,uniforms:{uTime:{value:0},uInk:{value:z.horizon},uGold:{value:z.sky}}}));on.position.set(0,3,-8),L.add(on);var H=new o({vertexShader:Vt,fragmentShader:Ht,uniforms:{uHeight:{value:null},uScene:{value:nn.texture},uTexel:{value:new h(1/B,1/B)},uResolution:{value:new h(I.x,I.y)},uDisplace:{value:.42},uNormalStrength:{value:22},uRefractStrength:{value:.06},uChromaScale:{value:1},uNormalMatrix:{value:new l},uLightDir:{value:z.sunDir},uInk:{value:new k(`#2A2218`)},uGold:{value:new k(`#B89968`)},uVector:Fe,uVecWater:{value:new k(`#1fb8d8`)},uVecTint:{value:Ie}}}),U=new c(new u(16,16,B-1,B-1),H);U.rotation.x=-Math.PI/2,U.updateMatrixWorld(!0),H.uniforms.uNormalMatrix.value.getNormalMatrix(U.matrixWorld),L.add(U);var sn={value:0},cn=new URLSearchParams(window.location.search),ln=(cn.get(`city`)?Number(cn.get(`city`)):0)||Math.random()*1e9|0,un=Math.max(0,Ze.indexOf(cn.get(`profile`)||`manhattan`)),dn=At({windowGlow:sn}),W=it({seed:ln,profileIndex:un,landmarkFactory:dn,windowGlow:sn});L.add(W.group);var fn=vt({plinthTop:.3,extent:W.extent});L.add(fn.group);var G=Lt({extent:W.extent});L.add(G.group),V.uniforms.uRainDrops.value=G.rainDrops;var pn=[0,.33,.66,1],mn=0;window.__season=pn[mn],W.group.remove(W.key),L.add(W.key),W.key.castShadow=!0,W.key.shadow.mapSize.set(2048,2048),W.key.shadow.bias=-18e-5,W.key.shadow.normalBias=.028,L.add(W.key.target);function hn(){let e=W.key.shadow.camera,t=W.extent+4.5;e.left=-t,e.right=t,e.top=t,e.bottom=-t,e.near=1,e.far=gn*2,e.updateProjectionMatrix()}var gn=24;hn();var _n=!0;window.__shadows=_n;function vn(){W.generate(ln,un),H.uniforms.uVecWater.value.set(W.waterColor),hn(),cr()}dn.whenReady.then(()=>{vn(),window.__cityReady=!0}),H.uniforms.uVecWater.value.set(W.waterColor);var yn=new le(I.x,I.y),bn=new m(I.x,I.y,{minFilter:s,magFilter:s,depthBuffer:!0,stencilBuffer:!1,depthTexture:yn}),xn=new m(I.x,I.y,{minFilter:s,magFilter:s,depthBuffer:!1,stencilBuffer:!1}),Sn=new m(I.x,I.y,{minFilter:s,magFilter:s,depthBuffer:!1,stencilBuffer:!1}),Cn=new m(I.x,I.y,{minFilter:s,magFilter:s,depthBuffer:!1,stencilBuffer:!1}),wn=new ve,Tn=new _(-1,1,1,-1,0,1),En=new c(new u(2,2));wn.add(En);var K=new o({vertexShader:r,fragmentShader:Ut,uniforms:{uScene:{value:bn.texture},uTime:{value:0},uResolution:{value:new h(I.x,I.y)},uGrain:{value:1},uChroma:{value:1},uExposure:{value:1}}}),Dn=5,On=e=>{let t=e.map(e=>new k(e));for(;t.length<8;)t.push(new k(0,0,0));return t},kn=[`night`,`dawn`,`noon`,`dusk`],An={inkgold:kn.map(e=>On(Yt[e])),terminal:kn.map(e=>On(Xt[e]))},jn=new o({vertexShader:r,fragmentShader:Wt,uniforms:{uScene:{value:xn.texture},uResolution:{value:new h(I.x,I.y)},uPixelSize:{value:qt},uPalette:{value:An.inkgold[2]},uPaletteB:{value:An.inkgold[2]},uPaletteBlend:{value:0},uPaletteSize:{value:Dn}}});function Mn(e){let t=Hn?An.terminal:An.inkgold,n=e%1*4,r=Math.floor(n)%4;jn.uniforms.uPalette.value=t[r],jn.uniforms.uPaletteB.value=t[(r+1)%4],jn.uniforms.uPaletteBlend.value=n-Math.floor(n)}var q=new o({vertexShader:r,fragmentShader:t,uniforms:{uScene:{value:xn.texture},uResolution:{value:new h(I.x,I.y)},uGridWidth:{value:160},uDither:{value:.55},uPalette:{value:e(i[`8-bit`].palette)},uPaletteSize:{value:1},uUsePalette:{value:1}}}),Nn={};for(let t of n)Nn[t]=i[t].palette?e(i[t].palette):null;var Pn=[`native`,...n],J=`native`;window.__era=J;function Fn(){if(J===`native`)return;let e=i[J];q.uniforms.uGridWidth.value=e.gridWidth,q.uniforms.uDither.value=e.dither,q.uniforms.uUsePalette.value=+!!e.palette,e.palette&&(q.uniforms.uPalette.value=Nn[J],q.uniforms.uPaletteSize.value=e.palette.length)}var In=()=>J===`native`?jn:q,Ln=new o({vertexShader:r,fragmentShader:Gt,uniforms:{uScene:{value:xn.texture},uDepth:{value:yn},uResolution:{value:new h(I.x,I.y)},uBands:{value:4},uToonGain:{value:1.7},uToonGamma:{value:.6},uToonFloor:{value:z.toonFloor},uOutline:{value:z.outline},uNear:{value:.1},uFar:{value:100},uIsPerspective:{value:1}}}),Rn=new o({vertexShader:r,fragmentShader:Kt,uniforms:{uToon:{value:Sn.texture},uPixel:{value:Cn.texture},uBlend:{value:0}}});function zn(e,t){En.material=e,F.setRenderTarget(t),F.render(wn,Tn)}var Bn=.45,Vn=.65,Y=3,Hn=!1,X=!1;window.__mode=Y,window.__camMode=R.mode,window.__vector=X,window.addEventListener(`keydown`,e=>{(e.key===`1`||e.key===`2`||e.key===`3`)&&(Y=Number(e.key),window.__mode=Y),(e.key===`7`||e.key===`8`)&&(Y=Number(e.key),window.__mode=Y),e.key===`4`&&(R.setMode(j.PERSPECTIVE),window.__camMode=R.mode),e.key===`5`&&(R.setMode(j.ISOMETRIC),window.__camMode=R.mode),e.key===`6`&&(R.setMode(j.DIMETRIC),window.__camMode=R.mode),e.key===`ArrowLeft`&&(R.pan(-1,0),e.preventDefault()),e.key===`ArrowRight`&&(R.pan(1,0),e.preventDefault()),e.key===`ArrowUp`&&(R.pan(0,1),e.preventDefault()),e.key===`ArrowDown`&&(R.pan(0,-1),e.preventDefault()),e.key===`0`&&(X=!X,Fe.value=+!!X,window.__vector=X),(e.key===`w`||e.key===`W`)&&(G.cycle(),window.__weather=G.kind),(e.key===`k`||e.key===`K`)&&(mn=(mn+1)%pn.length,window.__season=pn[mn]),(e.key===`g`||e.key===`G`)&&(ln=Math.random()*1e9|0,vn()),(e.key===`c`||e.key===`C`)&&(un=(un+1)%Xe.length,vn()),(e.key===`h`||e.key===`H`)&&(_n=!_n,window.__shadows=_n),(e.key===`p`||e.key===`P`)&&(Hn=!Hn),(e.key===`b`||e.key===`B`)&&(J=Pn[(Pn.indexOf(J)+1)%Pn.length],window.__era=J,Fn()),(e.key===`t`||e.key===`T`)&&z.cyclePreset(),e.key===`[`&&z.nudge(-.5),e.key===`]`&&z.nudge(.5),e.key===`9`&&(z.toggleAuto(),window.__auto=z.auto)});var Un=window.matchMedia(`(prefers-reduced-motion: reduce)`);z.setReducedMotion(Un.matches),Un.addEventListener(`change`,e=>z.setReducedMotion(e.matches));var Wn=new g,Gn=new h,Z=!1,Kn=!1,qn=0,Jn=0,Yn=.005,Xn=(e,t)=>{Gn.x=e/window.innerWidth*2-1,Gn.y=-(t/window.innerHeight)*2+1};F.domElement.addEventListener(`contextmenu`,e=>e.preventDefault()),F.domElement.addEventListener(`mousedown`,e=>{e.button===0&&(Z=!0,Xn(e.clientX,e.clientY)),e.button===2&&(Kn=!0,qn=e.clientX,Jn=e.clientY)}),window.addEventListener(`mousemove`,e=>{Z&&Xn(e.clientX,e.clientY),Kn&&(R.orbit(-(e.clientX-qn)*Yn,-(e.clientY-Jn)*Yn),qn=e.clientX,Jn=e.clientY)}),window.addEventListener(`mouseup`,()=>{Z=!1,Kn=!1}),F.domElement.addEventListener(`wheel`,e=>{e.preventDefault(),R.zoomBy(Math.exp(e.deltaY*.0015))},{passive:!1});var Zn=0,Qn=(e,t)=>[(e.clientX+t.clientX)/2,(e.clientY+t.clientY)/2],$n=(e,t)=>Math.hypot(e.clientX-t.clientX,e.clientY-t.clientY);F.domElement.addEventListener(`touchstart`,e=>{e.touches.length===1&&(Z=!0,Xn(e.touches[0].clientX,e.touches[0].clientY)),e.touches.length===2&&(Z=!1,Kn=!0,[qn,Jn]=Qn(e.touches[0],e.touches[1]),Zn=$n(e.touches[0],e.touches[1]))},{passive:!1}),F.domElement.addEventListener(`touchmove`,e=>{if(e.preventDefault(),e.touches.length===1&&Z)Xn(e.touches[0].clientX,e.touches[0].clientY);else if(e.touches.length===2){let[t,n]=Qn(e.touches[0],e.touches[1]);R.orbit(-(t-qn)*Yn,-(n-Jn)*Yn),qn=t,Jn=n;let r=$n(e.touches[0],e.touches[1]);Zn>0&&R.zoomBy(Zn/r),Zn=r}},{passive:!1}),window.addEventListener(`touchend`,e=>{Z=!1,Kn=!1,Zn=0,e.touches&&e.touches.length===1&&(Z=!0)});var Q=new d;Q.connect(document);var er=0,tr=performance.now();function nr(){if(Y===1||Y===2)return{kind:`none`};if(Y===7)return{kind:`pixel`};if(Y===8)return{kind:`toon`};let e=R.styleT;return window.__styleT=e,e>=Vn?{kind:`pixel`}:e<=Bn?{kind:`toon`}:{kind:`blend`,blend:C.smoothstep(e,Bn,Vn)}}var rr=Jt?null:document.querySelector(`.hint`);if(Jt){let e=document.querySelector(`.hint`);e&&(e.style.display=`none`)}var ir=rr?rr.textContent:``,ar=``,or=``;function sr(e){!rr||e===ar||(ar=e,rr.textContent=`${ir} · ${or} · ${e}`)}function cr(){or=`seed ${W.state.seed} · ${W.state.profile.name}`,window.__profile=W.state.profile.key,ar=``}cr();function lr(){Q.update();let e=Math.min(Q.getDelta(),.1);R.update(e),on.material.uniforms.uTime.value=Q.getElapsed(),K.uniforms.uTime.value=Q.getElapsed(),z.update(e),W.key.position.copy(z.sunDir).multiplyScalar(gn),W.key.color.copy(z.sunColor),W.key.intensity=z.sunIntensity,W.fill.color.copy(z.hemiSky),W.fill.groundColor.copy(z.hemiGround),sn.value=z.windowGlow;let t=G.overcast;W.key.intensity*=1-.5*t,W.key.color.lerp(Zt,.45*t),W.fill.intensity=1+.7*t;let n=C.smoothstep(z.sunDir.y,.06,.34),r=C.lerp(.28,1,1-z.windowGlow),i=_n?n*r:0;W.key.shadow.intensity=.72*i,Le.value=.52*i;let a=1-z.windowGlow;Ie.setRGB(C.lerp(.46,1,a),C.lerp(.52,1,a),C.lerp(.74,1,a)),K.uniforms.uExposure.value=z.exposure,Ln.uniforms.uToonGain.value=z.toonGain,F.setClearColor(z.horizon,1),Mn(z.t),sr(z.clock),window.__t=z.t,fn.update(e,Q.getElapsed(),z),W.update(Q.getElapsed()),G.update(e,Q.getElapsed()),V.uniforms.uRainCount.value=G.rainDropCount,L.fog.density=G.fog*.075,L.fog.color.copy(z.horizon),Re.value=G.snow,ze.value=G.cloud*.55,Be.x+=e*.018,Be.y+=e*.009,Ve.value+=(pn[mn]-Ve.value)*Math.min(1,e*1.5);let o=nr(),s=o.kind===`toon`?1:o.kind===`blend`?1-o.blend:0;H.uniforms.uChromaScale.value=C.lerp(1,.5,s),er++;let c=performance.now();c-tr>=1e3&&(window.__fps=er,er=0,tr=c);let l=0;if(Z){Wn.setFromCamera(Gn,R.camera);let e=Wn.intersectObject(U)[0];e&&e.uv&&(V.uniforms.uMouse.value.copy(e.uv),l=.06)}V.uniforms.uMouseStrength.value=l;let[u,d,f]=$t;if(V.uniforms.uPrev.value=u.texture,V.uniforms.uCurr.value=d.texture,F.setRenderTarget(f),F.render(en,tn),$t=[d,f,u],H.uniforms.uHeight.value=$t[1].texture,U.visible=!1,F.setRenderTarget(nn),F.render(L,R.camera),U.visible=!0,Y===1||X&&Y!==7&&Y!==8)F.setRenderTarget(null),F.render(L,R.camera);else if(F.setRenderTarget(bn),F.render(L,R.camera),Y===2)K.uniforms.uGrain.value=1,K.uniforms.uChroma.value=1,zn(K,null);else{K.uniforms.uGrain.value=0,K.uniforms.uChroma.value=0,zn(K,xn);let e=R.camera;Ln.uniforms.uNear.value=e.near,Ln.uniforms.uFar.value=e.far,Ln.uniforms.uIsPerspective.value=+!!e.isPerspectiveCamera,o.kind===`pixel`?(zn(In(),null),window.__style=`pixel`):o.kind===`toon`?(zn(Ln,null),window.__style=`toon`):(zn(Ln,Sn),zn(In(),Cn),Rn.uniforms.uBlend.value=o.blend,zn(Rn,null),window.__style=`blend`)}requestAnimationFrame(lr)}var ur={at:(e,t)=>{Xn(e,t),Z=!0},stop:()=>{Z=!1}};function dr(){let e=window.__style||(Y===1?`raw`:Y===2?`filmic`:`auto`);return{lesson:18,clock:z.clock,style:(X?`vec-`:``)+e,profile:W.state.profile.key,weather:G.kind}}Mt({renderer:F,rig:R,sunRig:z,poke:ur,getState:dr});var $=e=>window.dispatchEvent(new KeyboardEvent(`keydown`,{key:e})),fr={cam:e=>$({iso:`5`,dimetric:`6`,persp:`4`}[e]),style:e=>{e===`vector`?(X||$(`0`),(Y===7||Y===8)&&$(`2`)):e===`pixel`?$(`7`):e===`toon`&&$(`8`)},city:()=>$(`C`),shuffle:()=>$(`G`),weather:()=>$(`W`),season:()=>$(`K`),time:e=>z.goTo(e),auto:()=>$(`9`)};Ft({controls:fr,state:()=>({cam:{4:`persp`,5:`iso`,6:`dimetric`}[R.mode],style:Y===7?`pixel`:Y===8?`toon`:`vector`,auto:z.auto,t:z.t,weather:G.kind,season:mn}),show:P.get(`ui`)!==`0`&&!P.has(`capture`),coarse:window.matchMedia&&window.matchMedia(`(pointer: coarse)`).matches});var pr=P.get(`cam`);pr&&[`iso`,`dimetric`,`persp`].includes(pr)&&fr.cam(pr);var mr=P.get(`style`);[`vector`,`pixel`,`toon`].includes(mr)&&fr.style(mr);var hr=P.get(`t`);hr!==null&&hr!==``&&!Number.isNaN(parseFloat(hr))&&z.goTo(parseFloat(hr));var gr=P.get(`time`);gr&&z.goTo({dawn:.25,noon:.5,dusk:.75,night:0}[gr]??.5);var _r=P.get(`weather`);[`clear`,`rain`,`snow`,`fog`].includes(_r)&&(G.setKind(_r),window.__weather=G.kind),lr(),window.addEventListener(`resize`,()=>{R.setViewport(window.innerWidth,window.innerHeight),F.setSize(window.innerWidth,window.innerHeight);let e=F.getDrawingBufferSize(new h);nn.setSize(e.x,e.y),bn.setSize(e.x,e.y),xn.setSize(e.x,e.y),Sn.setSize(e.x,e.y),Cn.setSize(e.x,e.y),H.uniforms.uResolution.value.set(e.x,e.y),K.uniforms.uResolution.value.set(e.x,e.y),jn.uniforms.uResolution.value.set(e.x,e.y),q.uniforms.uResolution.value.set(e.x,e.y),Ln.uniforms.uResolution.value.set(e.x,e.y)});