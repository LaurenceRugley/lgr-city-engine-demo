import{i as e,o as t,r as n,s as r,t as i}from"./pixelkit-C6RsSUI5.js";import{A as a,B as o,C as s,D as c,E as l,F as u,G as d,H as f,I as p,J as m,K as h,L as g,M as _,N as v,O as y,P as b,R as x,S,T as C,U as w,V as T,W as E,X as D,Y as O,Z as k,a as ee,b as te,c as ne,d as re,f as ie,g as ae,h as oe,i as A,j as se,k as ce,l as le,m as ue,n as de,o as fe,r as pe,s as me,t as he,u as j,v as ge,w as M,x as _e,y as N,z as ve}from"./three-CChHE1DI.js";var ye=Math.atan(1/Math.SQRT2),be=Math.atan(.5),xe=Math.PI/4,P={PERSPECTIVE:4,ISOMETRIC:5,DIMETRIC:6},Se=.12,Ce=1.45,we=4,Te=40,Ee=1.5,De=16,Oe=6,ke=22,Ae=3.5,je=11,Me=(e,t,n)=>e+(t-e)*(1-Math.exp(-8*n)),Ne=(e,t)=>e+Math.PI*2*Math.round((t-e)/(Math.PI*2));function Pe({aspect:e,fov:t=48,near:n=.1,far:r=100,target:i=new D(0,.8,0),azimuth:a=xe,elevation:o=.52,distance:s=12,zoom:c=5.5}={}){let d=new u(t,e,n,r),f=new v(-1,1,1,-1,n,r),p=P.PERSPECTIVE,m=e,h={azimuth:a,elevation:o,distance:s,zoom:c,target:i.clone()},g={azimuth:a,elevation:o,distance:s,zoom:c,target:i.clone()},_=!1,y=()=>p===P.PERSPECTIVE?d:f;function b(e){e!==p&&(p=e,p===P.ISOMETRIC||p===P.DIMETRIC?(h.elevation=p===P.ISOMETRIC?ye:be,h.azimuth=Ne(xe,g.azimuth),_=!0):_=!1)}function x(e,t){h.azimuth+=e,_||(h.elevation=l.clamp(h.elevation+t,Se,Ce))}function S(e){p===P.PERSPECTIVE?h.distance=l.clamp(h.distance*e,we,Te):h.zoom=l.clamp(h.zoom*e,Ee,De)}function C(e,t){let n=h.azimuth,r=p===P.PERSPECTIVE?h.distance*.04:h.zoom*.08,i=new D(Math.cos(n),0,-Math.sin(n)),a=new D(-Math.sin(n),0,-Math.cos(n));h.target.addScaledVector(i,e*r),h.target.addScaledVector(a,t*r)}function w(e,t){m=e/t,d.aspect=m,d.updateProjectionMatrix()}function T(e){g.azimuth=Me(g.azimuth,h.azimuth,e),g.elevation=Me(g.elevation,h.elevation,e),g.distance=Me(g.distance,h.distance,e),g.zoom=Me(g.zoom,h.zoom,e),g.target.x=Me(g.target.x,h.target.x,e),g.target.y=Me(g.target.y,h.target.y,e),g.target.z=Me(g.target.z,h.target.z,e);let t=Math.cos(g.elevation),n=Math.sin(g.elevation),r=Math.cos(g.azimuth),i=Math.sin(g.azimuth),a=y();if(a.position.set(g.target.x+g.distance*t*i,g.target.y+g.distance*n,g.target.z+g.distance*t*r),a.lookAt(g.target),a.isOrthographicCamera){let e=g.zoom,t=e*m;a.left=-t,a.right=t,a.top=e,a.bottom=-e,a.updateProjectionMatrix()}}return{get camera(){return y()},get mode(){return p},get styleT(){return p===P.PERSPECTIVE?l.clamp((g.distance-Oe)/(ke-Oe),0,1):l.clamp((g.zoom-Ae)/(je-Ae),0,1)},setMode:b,orbit:x,zoomBy:S,pan:C,setViewport:w,update:T}}var Fe={value:0},Ie=new j(`#ffffff`),Le={value:0},Re={value:0},ze={value:0},Be=new O,Ve={value:0},He=`
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
#include <shadowmask_pars_fragment>`)}var Ke=`col *= mix(1.0, getShadowMask(), uVecShadow);`;function qe(e,{color:t,id:n,windowGlow:r,winColors:i=[`#ffb852`,`#8cd9ff`],litFrac:a=.55}={}){let o=[0,1,2].map(e=>new j(i[e]??i[i.length-1]));return e.customProgramCacheKey=()=>`lgr-vec-tower`,e.onBeforeCompile=e=>{Ue(e),e.uniforms.uWindowGlow=r,e.uniforms.uWinId={value:n},e.uniforms.uVecColor={value:new j(t)},e.uniforms.uWinA={value:o[0]},e.uniforms.uWinB={value:o[1]},e.uniforms.uWinC={value:o[2]},e.uniforms.uWinLit={value:a},e.vertexShader=We(e.vertexShader),e.fragmentShader=Ge(e.fragmentShader.replace(`#include <common>`,`#include <common>
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
        }`))},e}function F(e,{color:t=null,glow:n=null,glowDay:r=0,glowNight:i=1,windowGlow:a=null,season:o=!1}={}){let s=t===null,c=n!==null&&a!==null;return e.customProgramCacheKey=()=>`lgr-vec|`+(s?`d`:`c`)+(c?`g`:``)+(o?`s`:``),e.onBeforeCompile=e=>{Ue(e),s||(e.uniforms.uVecColor={value:new j(t)}),c&&(e.uniforms.uGlow={value:new j(n)},e.uniforms.uGlowDay={value:r},e.uniforms.uGlowNight={value:i},e.uniforms.uWindowGlow=a),o&&(e.uniforms.uSeason=Ve),e.vertexShader=We(e.vertexShader);let l=s?`diffuseColor.rgb`:`uVecColor`,u=o?`seasonShift(${l})`:l,d=(s?``:`uniform vec3 uVecColor;
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
        }`));c&&(p=p.replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>\n  totalEmissiveRadiance += ${f};`)),e.fragmentShader=p},e}function Je(e){let t=e>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Ye(e){let t=Je(e);return{next:t,range:(e,n)=>e+(n-e)*t(),int:(e,n)=>e+Math.floor(t()*(n-e+1)),pick:e=>e[Math.floor(t()*e.length)],chance:e=>t()<e}}var Xe=[{key:`manhattan`,name:`Manhattan`,towers:[`#EDE3C8`,`#D9B98A`,`#B5562F`,`#A8C8E8`,`#2E3F5C`],ground:`#7CC455`,street:`#9AA0A6`,sidewalk:`#C8CCD0`,park:`#5DB347`,water:`#29A8D8`,shopfronts:[`#C04A3A`,`#3A7AC0`,`#C09A2A`],glass:`#7FA8CC`,winColors:[`#ffd27a`,`#9ad6ff`],hMax:4.6,sigma:.36,roofRate:.35,pSplit:.6,nightLit:.55,roofTint:null,landmarks:[`empireState`,`chrysler`,`liberty`]},{key:`paris`,name:`Paris`,towers:[`#E8DCC0`,`#F2EAD6`,`#E0D2B4`],ground:`#8CC46A`,street:`#A8A29A`,sidewalk:`#D4CEC2`,park:`#6DB35A`,water:`#3FA8C8`,shopfronts:[`#C04A3A`,`#3A6B5A`,`#7A5AC0`],glass:`#5A6B7A`,winColors:[`#ffdca0`,`#ffcaa0`],hMax:1.5,sigma:.9,roofRate:.15,pSplit:.75,nightLit:.45,roofTint:`#6A7886`,landmarks:[`eiffel`,`arcDeTriomphe`,`sacreCoeur`]},{key:`neoTokyo`,name:`Neo-Tokyo`,towers:[`#2A3038`,`#3A4250`,`#252B36`,`#4A4456`],ground:`#3A4A42`,street:`#5A6068`,sidewalk:`#7A8088`,park:`#2E5E46`,water:`#0E6878`,shopfronts:[`#E8483A`,`#5AE8E0`,`#E85AA0`],glass:`#5AE8E0`,winColors:[`#5AE8E0`,`#E85AA0`,`#E8E06A`],hMax:5.2,sigma:.42,roofRate:.6,pSplit:.6,nightLit:.7,roofTint:null,landmarks:[`tokyoTower`,`pagoda`,`neonBillboard`]}],Ze=Xe.map(e=>e.key),Qe=.3,$e=1.9,et=2.45,tt=.12,nt=.6;function rt(e){(Array.isArray(e)?e:[e]).forEach(e=>e&&e.dispose&&e.dispose())}function it({seed:e=1,profileIndex:t=0,landmarkFactory:n=null,windowGlow:r}){let i=new N,o=new N,s=new N;o.raycast=()=>{},s.raycast=()=>{},i.add(o,s);let c=new oe(16773594,3);c.position.set(.45,.6,-.65).multiplyScalar(10);let l=new _e(7313331,2762272,1);i.add(c,l);let u=0,f=[],p={seed:e,profileIndex:t,profile:Xe[t],extent:0,meshCount:0};function m(e,t,n,r){let i=new y(new A(e,.04,t),F(new a({color:r,roughness:.95,flatShading:!0}),{color:r}));return i.position.y=n,i.userData.ground=!0,i}function h(e,t){for(let e of o.children)e.geometry&&e.geometry.dispose(),rt(e.material);o.clear();for(let e of s.children)e.traverse(e=>{e.isMesh&&rt(e.material)});s.clear(),f.length=0,u=0;let r=Ye(e),i=Xe[t],c=4/2*et,l=6.45;p={seed:e,profileIndex:t,profile:i,extent:l,meshCount:0};let d=l*2,h=new y(new A(d,2,d),F(new a({color:i.ground,roughness:.9,flatShading:!0}),{color:i.ground}));h.position.y=Qe-1,h.userData.ground=!0,o.add(h),o.add(m(d-nt,d-nt,.32,i.street));let x=[];for(let e=0;e<5;e++)for(let t=0;t<5;t++)x.push([e,t]);let S=new Set,C=Math.max(1,Math.round(x.length*.08));for(;S.size<C;)S.add(r.int(0,x.length-1));let w=r.range(-2.45*.6,et*.6),T=r.range(-2.45*.6,et*.6),E=Math.hypot(c,c),D=[];if(x.forEach(([e,t],n)=>{let a=(e-4/2)*et,s=(t-4/2)*et;if(o.add(m($e,$e,.32999999999999996,i.sidewalk).translateX(a).translateZ(s)),S.has(n)){o.add(m($e-tt*2,$e-tt*2,.35,i.park).translateX(a).translateZ(s));let e=r.int(3,5);for(let t=0;t<e;t++)b(a+r.range(-.6,.6),s+r.range(-.6,.6),i,r);return}let c=$e-tt*2,l=r.chance(i.pSplit)?2:1,u=r.chance(i.pSplit)?2:1,d=c/l,f=c/u;for(let e=0;e<l;e++)for(let t=0;t<u;t++){let n=a-c/2+d*(e+.5),o=s-c/2+f*(t+.5),l=Math.max(.6,d-.1),u=Math.max(.6,f-.1),p=Math.hypot(n-w,o-T)/E,m=Math.exp(-(p*p)/(2*i.sigma*i.sigma)),h=Math.max(.5,.5+(i.hMax-.5)*m*r.range(.75,1.25));h>i.hMax*.5&&Math.min(l,u)>=.7&&D.push({lx:n,lz:o,fw:l,fd:u,h,r:p}),g(n,o,l,u,h,i,r)}}),n&&n.ready){D.sort((e,t)=>e.r-t.r);let e=[],t=i.landmarks;for(let r=0;r<t.length&&D.length;r++){let a=null;for(let t of D)if(e.every(e=>Math.hypot(e.lx-t.lx,e.lz-t.lz)>et*.9)){a=t;break}a||=D[0],e.push(a),_(a.lx,a.lz);let o=i.hMax*n.heightFactor(t[r]),c=n.make(t[r],{x:a.lx,z:a.lz,w:a.fw,d:a.fd,h:o,plinthTop:Qe});if(c){s.add(c);let e=new pe().setFromObject(c);v(e.min.x-.15,e.max.x+.15,e.min.z-.15,e.max.z+.15)}}}o.traverse(e=>{e.isMesh&&(e.userData.ground?(e.castShadow=!1,e.receiveShadow=!0):e.material&&e.material.isMeshBasicMaterial?(e.castShadow=!1,e.receiveShadow=!1):(e.castShadow=!0,e.receiveShadow=!0))}),s.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),p.meshCount=o.children.length+s.children.length;let O=0;for(let e of o.children){let t=e.position;O=(Math.imul(O,16777619)^(Math.round(t.x*100)*2654435761^Math.round(t.y*100)*40503^Math.round(t.z*100)*2246822519))>>>0}p.sig=O,window.__city={seed:e,profile:i.key,meshes:p.meshCount,sig:O}}function g(e,t,n,i,s,c,l){let p=qe(new a({flatShading:!0,roughness:.7,metalness:.05}),{color:l.pick(c.towers),id:++u,windowGlow:r,winColors:c.winColors,litFrac:c.nightLit}),m=new y(new A(n,s,i),p);if(m.position.set(e,Qe+s/2,t),m.userData.lot=[e,t],o.add(m),c.roofTint){let r=F(new a({color:c.roofTint,roughness:.85,flatShading:!0}),{color:c.roofTint}),l=new y(new A(n*1.02,.08,i*1.02),r);l.position.set(e,Qe+s+.04,t),l.userData.lot=[e,t],o.add(l)}if(s<1.4){let r=l.pick(c.shopfronts),s=new y(new A(n*1.04,.18,i*1.04),F(new a({color:r,roughness:.8,flatShading:!0}),{color:r}));s.position.set(e,.39,t),s.userData.lot=[e,t],o.add(s)}if(s>c.hMax*.45&&l.chance(c.roofRate)){let r=l.chance(.5)?new y(new A(n*.4,.18,i*.4),F(new a({color:`#9a9a9a`,flatShading:!0}),{color:`#9a9a9a`})):new y(new ie(n*.18,n*.18,.22,10),F(new a({color:`#b9bec4`,flatShading:!0}),{color:`#b9bec4`}));if(r.position.set(e+l.range(-.1,.1),Qe+s+.11,t+l.range(-.1,.1)),r.userData.lot=[e,t],o.add(r),l.chance(.25)){let n=new y(new d(.05,6,5),new ce({color:`#ff3b30`,transparent:!0,opacity:1}));n.position.set(e,Qe+s+.26,t),n.userData.lot=[e,t],n.raycast=()=>{},o.add(n),f.push({mesh:n,phase:l.range(0,6.28)})}}}function _(e,t){for(let n=o.children.length-1;n>=0;n--){let r=o.children[n];r.userData.lot&&Math.abs(r.userData.lot[0]-e)<1e-4&&Math.abs(r.userData.lot[1]-t)<1e-4&&(r.geometry&&r.geometry.dispose(),rt(r.material),o.remove(r))}for(let e=f.length-1;e>=0;e--)f[e].mesh.parent||f.splice(e,1)}function v(e,t,n,r){for(let i=o.children.length-1;i>=0;i--){let a=o.children[i];a.userData.lot&&a.position.x>=e&&a.position.x<=t&&a.position.z>=n&&a.position.z<=r&&(a.geometry&&a.geometry.dispose(),rt(a.material),o.remove(a))}}function b(e,t,n,r){let i=new j(n.park),s=(n,s)=>{let c=i.clone().offsetHSL(0,0,r.range(-.06,.06)).getStyle(),l=new y(new d(n,7,6),F(new a({color:c,flatShading:!0}),{color:c,season:!0}));l.scale.y=.7,l.position.set(e,Qe+s,t),l.userData.lot=null,o.add(l)},c=new y(new A(.05,.18,.05),F(new a({color:`#6b4a2a`,flatShading:!0}),{color:`#6b4a2a`}));c.position.set(e,.39,t),o.add(c),s(.22,.28),s(.16,.46)}function x(e){for(let t of f)t.mesh.material.opacity=.35+.65*(.5+.5*Math.sin(e*3+t.phase))}return h(e,t),{group:i,key:c,fill:l,update:x,generate:h,get state(){return p},get extent(){return p.extent},get waterColor(){return p.profile.water},profiles:Xe}}var at=Math.PI*2,ot=.7,st=90,ct=[{name:`night`,sun:`#4a6f9e`,intensity:.35,hemiSky:`#26344f`,hemiGround:`#0c1018`,horizon:`#1e2942`,sky:`#36486e`,exposure:.95,outline:`#101a30`,window:1,toonGain:2.6},{name:`dawn`,sun:`#ff9e54`,intensity:2.4,hemiSky:`#8a7686`,hemiGround:`#2a1f1a`,horizon:`#b8512c`,sky:`#ffb070`,exposure:1.05,outline:`#241826`,window:.3,toonGain:2},{name:`noon`,sun:`#fff4e0`,intensity:4.6,hemiSky:`#9cb8cc`,hemiGround:`#33302a`,horizon:`#5e7689`,sky:`#aacadd`,exposure:1.18,outline:`#0b0a08`,window:0,toonGain:1.7},{name:`dusk`,sun:`#ff6b35`,intensity:2,hemiSky:`#7a566a`,hemiGround:`#281a18`,horizon:`#b0432a`,sky:`#ff8a5a`,exposure:1.05,outline:`#1f1420`,window:.4,toonGain:2}],lt=e=>e-Math.floor(e),ut=(e,t,n)=>e+(t-e)*n,dt=(e,t,n)=>e+(t-e)*(1-Math.exp(-6*n));function ft({t:e=.5}={}){let t=e,n=e,r=!1,i=!1,a=ct.map(e=>({name:e.name,sun:new j(e.sun),hemiSky:new j(e.hemiSky),hemiGround:new j(e.hemiGround),horizon:new j(e.horizon),sky:new j(e.sky),outline:new j(e.outline),intensity:e.intensity,exposure:e.exposure,window:e.window,toonGain:e.toonGain})),o=new D(0,1,0),s=new j(`#fff4e0`),c=new j(`#6f97b3`),l=new j(`#2a2620`),u=new j(`#3a4a57`),d=new j(`#7da3bd`),f=new j(`#0b0a08`),p=new j(`#000000`),m=3,h=1,g=0,_=1.7,v=new D;function y(e){let t=lt(e)*4,n=Math.floor(t)%4,r=(n+1)%4,i=t-Math.floor(t),y=a[n],b=a[r];s.lerpColors(y.sun,b.sun,i),c.lerpColors(y.hemiSky,b.hemiSky,i),l.lerpColors(y.hemiGround,b.hemiGround,i),u.lerpColors(y.horizon,b.horizon,i),d.lerpColors(y.sky,b.sky,i),f.lerpColors(y.outline,b.outline,i),m=ut(y.intensity,b.intensity,i),h=ut(y.exposure,b.exposure,i),g=ut(y.window,b.window,i),_=ut(y.toonGain,b.toonGain,i),p.setRGB(.045*g,.075*g,.14*g);let x=lt(e)*at-Math.PI/2,S=Math.cos(x),C=Math.sin(x);v.set(S,C*Math.cos(ot),C*Math.sin(ot)),v.y>=0?o.copy(v):o.copy(v).negate()}return y(t),{sunDir:o,sunColor:s,hemiSky:c,hemiGround:l,horizon:u,sky:d,outline:f,toonFloor:p,get sunIntensity(){return m},get exposure(){return h},get windowGlow(){return g},get toonGain(){return _},get t(){return lt(t)},get auto(){return r},get clock(){let e=Math.round(lt(t)*24*60)%1440;return`${String(Math.floor(e/60)).padStart(2,`0`)}:${String(e%60).padStart(2,`0`)}`},cyclePreset(){n=(Math.floor(t*4+1e-4)+1)/4},nudge(e){n+=e/24},goTo(e){n=e},toggleAuto(){r=!r},setReducedMotion(e){i=e},update(e){r&&!i&&(n+=e/st),t=dt(t,n,e),y(t)}}}function pt(e,t){let n=[];for(let r=0;r<16;r++){let i=r/16*Math.PI*2;n.push(new D(Math.cos(i)*e,t,Math.sin(i)*e))}return new me(n,!0,`catmullrom`,.5)}function mt(e,t){let n=new w;return n.moveTo(-e+t,-e),n.lineTo(e-t,-e),n.quadraticCurveTo(e,-e,e,-e+t),n.lineTo(e,e-t),n.quadraticCurveTo(e,e,e-t,e),n.lineTo(-e+t,e),n.quadraticCurveTo(-e,e,-e,e-t),n.lineTo(-e,-e+t),n.quadraticCurveTo(-e,-e,-e+t,-e),n}function ht(e,t,n){let r=mt(e,t).getSpacedPoints(40).map(e=>new D(e.x,n,e.y));return r.pop(),new me(r,!0,`catmullrom`,.5)}function gt(e){let t=(t,n)=>Math.exp(-((e-t)*(e-t))/(2*n*n)),n=Math.max(t(.33,.05),t(.75,.06)),r=l.smoothstep(e,.24,.3)*(1-l.smoothstep(e,.8,.88));return l.clamp(.15+.55*r+.45*n,.12,1)}function _t(e,t){let n=(e/8.5+t*.43)%1;return n<.66?1:n<.72?1-(n-.66)/.06:n<.95?0:(n-.95)/.05}function vt({plinthTop:e=.3,extent:t=4}={}){let n=new N,r=e,i=mt(t-.05,.7);i.holes.push(mt(t-.78,.45));let o=new y(new E(i),F(new a({color:`#1b1d22`,roughness:.95,metalness:0}),{color:`#bcc0c6`}));o.rotation.x=-Math.PI/2,o.position.y=r+.01,o.receiveShadow=!0,n.add(o);let s=[ht(t-.28,.6,r+.02),ht(t-.5,.55,r+.02)],c=[0,0],u=new S(new A(.42,.32,.86),F(new a({flatShading:!0,roughness:.45,metalness:.35})),7);u.castShadow=!0,u.receiveShadow=!1,u.frustumCulled=!1,u.raycast=()=>{};let d={taxi:`#f4c430`,bus:`#c0392b`,civ1:`#d8dde2`,civ2:`#9aa7b4`,civ3:`#6b7785`},f=[];for(let e=0;e<7;e++){let t=e===1,n=e===0;f.push({lane:e%2,phase:e/7,speed:t?.55:.85+e%3*.12,lenZ:t?1.5:1,color:n?d.taxi:t?d.bus:[d.civ1,d.civ2,d.civ3][e%3]})}let m=new j;f.forEach((e,t)=>u.setColorAt(t,m.set(e.color)));let h=new S(new fe(.04,.1,3,6),F(new a({flatShading:!0,roughness:.8})),16);h.castShadow=!0,h.receiveShadow=!1,h.frustumCulled=!1,h.raycast=()=>{};let g=pt(t-.72,e),v=[];for(let e=0;e<16;e++)v.push({phase:e/16,speed:.12+e%4*.02,dir:e%2?1:-1});let b=new j;v.forEach((e,t)=>h.setColorAt(t,b.set([`#caa`,`#9ab`,`#bba`,`#ab9`][t%4])));let x=new p(1,.6),C=new ce({color:`#fff0c0`,transparent:!0,opacity:1,blending:2,depthWrite:!1}),w=new S(x,C,7);w.frustumCulled=!1,w.raycast=()=>{},n.add(u,h,w);let T=new _,O=new D,k=new D;function ee(t,n,i){let a=i?i.t:.5,o=i?i.windowGlow:0;for(let e=0;e<s.length;e++)c[e]+=t*_t(n,e);let d=Math.max(1,Math.round(gt(a)*7));for(let e=0;e<7;e++){let t=f[e];if(e>=d){T.scale.setScalar(0),T.position.set(0,-50,0),T.updateMatrix(),u.setMatrixAt(e,T.matrix),w.setMatrixAt(e,T.matrix);continue}let n=t.lane===0?1:-1,i=(t.phase+n*t.speed*c[t.lane]*.12+1e3)%1;s[t.lane].getPointAt(i,O),s[t.lane].getTangentAt(i,k);let a=Math.atan2(k.x*n,k.z*n);T.position.set(O.x,O.y+.16,O.z),T.rotation.set(0,a,0),T.scale.set(1,1,t.lenZ),T.updateMatrix(),u.setMatrixAt(e,T.matrix),s[t.lane].getPointAt((i+n*.012+1)%1,O),T.position.set(O.x,r+.04,O.z),T.rotation.set(-Math.PI/2,0,a),T.scale.setScalar(+(o>.05)),T.updateMatrix(),w.setMatrixAt(e,T.matrix)}u.instanceMatrix.needsUpdate=!0,w.instanceMatrix.needsUpdate=!0,C.opacity=l.clamp(o*1.7,0,1);let p=Math.max(2,Math.round(gt(a)*16));for(let t=0;t<16;t++){let r=v[t];if(t>=p){T.scale.setScalar(0),T.position.set(0,-50,0),T.updateMatrix(),h.setMatrixAt(t,T.matrix);continue}let i=(r.phase+r.dir*r.speed*n*.02+1e3)%1;g.getPointAt(i,O),g.getTangentAt(i,k);let a=Math.sin(n*6+r.phase*30)*.015;T.position.set(O.x,e+.09+a,O.z),T.rotation.set(0,Math.atan2(k.x*r.dir,k.z*r.dir),Math.sin(n*6+r.phase*30)*.06),T.scale.setScalar(1),T.updateMatrix(),h.setMatrixAt(t,T.matrix)}h.instanceMatrix.needsUpdate=!0}return{group:n,update:ee}}var yt=[`empireState`,`chrysler`,`liberty`,`eiffel`,`arcDeTriomphe`,`sacreCoeur`,`tokyoTower`,`pagoda`,`neonBillboard`],bt={empireState:1.25,chrysler:1.1,liberty:.55,eiffel:3.2,arcDeTriomphe:1.5,sacreCoeur:1.75,tokyoTower:1.35,pagoda:.5,neonBillboard:.9};function xt(e){let t=()=>new a({flatShading:!0,roughness:.7,metalness:.1}),n=(n,r={})=>r.windows?qe(t(),{color:n,id:e.id(),windowGlow:e.windowGlow,winColors:e.winColors,litFrac:e.litFrac}):F(t(),{color:n,glow:r.glow??null,glowDay:r.glowDay??0,glowNight:r.glowNight??1,windowGlow:r.glow?e.windowGlow:null});return{box:(e,t,r,i,a={})=>new y(new A(e,t,r),n(i,a)),cyl:(e,t,r,i,a={})=>new y(new ie(e,t,r,a.seg||12),n(i,a)),cone:(e,t,r,i={})=>new y(new re(e,t,i.seg||8),n(r,i)),sphere:(e,t,r={})=>new y(new d(e,r.seg||12,r.seg2||8),n(t,r)),lathe:(e,t,r={})=>new y(new s(e.map(e=>new O(e[0],e[1])),r.seg||4),n(t,r))}}var I=(e,t,n,r)=>(e.position.set(t,n,r),e),St=[`#7FB0E0`,`#E07FB0`,`#7FE0A0`,`#E0C97F`,`#9FE07F`,`#7FE0E0`,`#FF8C42`,`#E0E07F`,`#C97FE0`,`#E07F7F`,`#7F9FE0`,`#E0483A`],Ct={empireState(e,t){let n=`#E8E0CF`;e.add(I(t.box(.42,.18,.42,n,{windows:!0}),0,.09,0)),e.add(I(t.box(.34,.16,.34,n,{windows:!0}),0,.26,0)),e.add(I(t.box(.26,.14,.26,n,{windows:!0}),0,.41,0)),e.add(I(t.box(.19,.34,.19,n,{windows:!0}),0,.65,0)),e.add(I(t.box(.13,.06,.13,n,{windows:!0}),0,.85,0));let r=St[new Date().getMonth()];e.add(I(t.cyl(.03,.045,.12,n,{seg:10,glow:r,glowNight:1.85}),0,.94,0)),e.add(I(t.cone(.012,.07,n,{seg:8}),0,1.04,0))},chrysler(e,t){let n=`#C9CED4`;e.add(I(t.box(.22,.55,.22,`#9AA7B4`,{windows:!0}),0,.275,0));let r=.55;for(let i=0;i<5;i++){let a=.14-i*.024,o=.07;e.add(I(t.cyl(a*.7,a,o,n,{seg:8,glow:`#dfeaff`,glowNight:.5}),0,r+o/2,0)),r+=o}e.add(I(t.cone(.018,.16,n,{seg:8}),0,r+.08,0))},liberty(e,t){let n=`#B9B4A6`,r=`#4FA890`;e.add(I(t.box(.42,.16,.42,n),0,.08,0)),e.add(I(t.box(.3,.2,.3,n),0,.26,0)),e.add(I(t.cyl(.1,.15,.42,r,{seg:10}),0,.57,0)),e.add(I(t.box(.11,.1,.11,r),0,.83,0));for(let n=0;n<7;n++){let i=(n/6-.5)*Math.PI*1.1;e.add(I(t.cone(.012,.1,r,{seg:5}),Math.sin(i)*.1,.92,Math.cos(i)*.06-.02))}let i=I(t.cyl(.025,.03,.34,r,{seg:8}),.14,.98,0);i.rotation.z=.35,e.add(i),e.add(I(t.box(.06,.06,.06,r,{glow:`#ffd060`,glowDay:.6,glowNight:1.2}),.2,1.16,0)),e.add(I(t.cone(.04,.09,`#ffcf66`,{seg:6,glow:`#ffd060`,glowDay:.7,glowNight:1.3}),.2,1.24,0))},eiffel(e,t){let n=`#6E5C4C`,r=[[.2,0],[.13,.16],[.085,.33],[.055,.5],[.035,.66],[.02,.85],[0,.92]];e.add(t.lathe(r,n,{seg:4}));let i=t.lathe(r,n,{seg:4});i.rotation.y=Math.PI/4,e.add(i),e.add(I(t.box(.26,.025,.26,n),0,.33,0)),e.add(I(t.box(.14,.02,.14,n),0,.66,0)),e.add(I(t.cone(.01,.1,n,{seg:6}),0,.97,0))},arcDeTriomphe(e,t){let n=`#D9D0C1`,r=.58,i=.5,o=.34,s=new w;s.moveTo(-.58/2,0),s.lineTo(r/2,0),s.lineTo(r/2,i),s.lineTo(-.58/2,i),s.lineTo(-.58/2,0);let c=new b,l=.15,u=.22;c.moveTo(-.15,0),c.lineTo(-.15,u),c.absarc(0,u,l,Math.PI,0,!0),c.lineTo(l,0),c.lineTo(-.15,0),s.holes.push(c);let d=new ae(s,{depth:o,bevelEnabled:!1});d.translate(0,0,-.34/2),d.computeVertexNormals(),e.add(new y(d,F(new a({color:n,flatShading:!0}),{color:n}))),e.add(I(t.box(r*1.06,.08,o*1.06,n),0,.54,0))},sacreCoeur(e,t){let n=`#F1EEE6`;e.add(I(t.box(.5,.26,.4,n),0,.13,0));let r=(r,i,a,o)=>{e.add(I(t.cyl(a*.9,a,i,n,{seg:12}),r,o,0));let s=I(t.sphere(a,n,{seg:12}),r,o+i/2,0);s.scale.y=1.5,e.add(s)};r(0,.22,.15,.4),r(-.2,.1,.07,.33),r(.2,.1,.07,.33)},tokyoTower(e,t){let n=`#F25822`,r=`#EDEDED`,i=0;for(let a=0;a<9;a++){let o=a/9,s=(a+1)/9,c=.19*(1-o)+.03*o,l=.19*(1-s)+.03*s,u=.085,d=a%2?r:n;e.add(I(t.cyl(l,c,u,d,{seg:4,glow:n,glowDay:0,glowNight:.7}),0,i+u/2,0)),i+=u}e.add(I(t.box(.22,.02,.22,n,{glow:n,glowNight:.7}),0,.28,0)),e.add(I(t.box(.12,.02,.12,r),0,.5,0)),e.add(I(t.cone(.012,.16,r,{seg:6,glow:`#ff6a2a`,glowNight:.9}),0,i+.08,0))},pagoda(e,t){let n=0;for(let r=0;r<5;r++){let i=.42-r*.06,a=.11;e.add(I(t.box(i,a,i,`#B23A2C`,{windows:r<4}),0,n+a/2,0)),e.add(I(t.box(i*1.34,.03,i*1.34,`#7A3B2A`),0,n+a+.015,0)),n+=.16999999999999998}e.add(I(t.cyl(.012,.012,.1,`#E0C040`,{seg:6}),0,n+.05,0)),e.add(I(t.sphere(.03,`#E0C040`,{seg:8,glow:`#ffe680`,glowNight:.8}),0,n+.12,0))},neonBillboard(e,t){let n=`#20242C`;e.add(I(t.box(.3,1,.3,n,{windows:!0}),0,.5,0));let r=[`#5AE8E0`,`#E85AA0`,`#E8E06A`],i=(n,r,i,a,o,s,c)=>{let l=I(t.box(n,r,.02,i,{glow:i,glowDay:.6,glowNight:1.1}),a,o,s);l.rotation.y=c,e.add(l)};i(.22,.34,r[0],0,.75,.16,0),i(.16,.5,r[1],.16,.5,0,Math.PI/2),i(.2,.22,r[2],0,.34,-.16,0),e.add(I(t.cone(.01,.14,n,{seg:6,glow:`#E85AA0`,glowDay:.4,glowNight:1}),0,1.08,0))}};function wt(e,t){let n=new N;return Ct[e](n,xt(t)),n}var Tt=``+new URL(`building-skyscraper-d-CapD2Zqe.glb`,import.meta.url).href,Et=``+new URL(`building-n-hdv8kKtN.glb`,import.meta.url).href,Dt=``+new URL(`building-g-CsTB1qH9.glb`,import.meta.url).href,Ot=``+new URL(`colormap-CK8fW2HB.png`,import.meta.url).href,kt={skyscraper:{url:Tt,color:`#9cc1dd`,fill:.92},midrise:{url:Et,color:`#c9a07a`,fill:.96},setback:{url:Dt,color:`#d9c7a0`,fill:.9}};function At({windowGlow:e}){let t=new C;t.setURLModifier(e=>e.includes(`colormap.png`)?Ot:e);let n=new he(t),r={},i=!1,a=Promise.all(Object.entries(kt).map(async([e,t])=>{r[e]=(await n.loadAsync(t.url)).scene})).then(()=>{i=!0,window.__landmarksReady=!0}).catch(e=>console.error(`landmark models failed:`,e)),o=9e3;function s(t,n,i={}){let a,s;if(yt.includes(t))a=wt(t,{windowGlow:e,winColors:i.winColors,litFrac:i.litFrac,id:()=>++o}),s=1;else{let e=r[t],n=kt[t];if(!e||!n)return null;a=e.clone(!0),s=n.fill}a.updateMatrixWorld(!0);let c=new pe().setFromObject(a).getSize(new D);a.scale.setScalar(n.h*s/c.y),a.updateMatrixWorld(!0);let l=new pe().setFromObject(a),u=l.getCenter(new D);return a.position.x+=n.x-u.x,a.position.z+=n.z-u.z,a.position.y+=n.plinthTop-l.min.y,yt.includes(t)?a.traverse(e=>{e.isMesh&&(e.castShadow=!1,e.raycast=()=>{})}):a.traverse(n=>{if(!n.isMesh)return;n.castShadow=!1,n.raycast=()=>{};let r=n=>qe(n.clone(),{color:kt[t].color,id:++o,windowGlow:e,winColors:i.winColors,litFrac:i.litFrac});n.material=Array.isArray(n.material)?n.material.map(r):r(n.material)}),a}return{make:s,whenReady:a,heightFactor:e=>bt[e]??1,get ready(){return i}}}var jt=[`video/mp4;codecs=avc1.42E01E`,`video/mp4`,`video/webm;codecs=vp9`,`video/webm`];function Mt({renderer:e,rig:t,sunRig:n,poke:r,getState:i}){let a=e.domElement,o=new URLSearchParams(window.location.search),s=e=>{let t=i();return`lgr-${t.lesson}-${String(t.clock||``).replace(`:`,``)}-${t.style}.${e}`},c=(e,t)=>{let n=URL.createObjectURL(e),r=document.createElement(`a`);r.href=n,r.download=t,document.body.appendChild(r),r.click(),r.remove(),setTimeout(()=>URL.revokeObjectURL(n),1e3)};function l(){a.toBlob(e=>{e&&(c(e,s(`png`)),window.__lastStill=e.size)},`image/png`)}let u=()=>jt.find(e=>window.MediaRecorder&&MediaRecorder.isTypeSupported(e))||``,d=Nt(),f=null,p=[],m=!1;function h(){if(m)return;let e=u(),t=a.captureStream(60);f=new MediaRecorder(t,e?{mimeType:e,videoBitsPerSecond:12e6}:{}),p=[],f.ondataavailable=e=>{e.data&&e.data.size&&p.push(e.data)},f.onstop=()=>{let e=new Blob(p,{type:f.mimeType});c(e,s(f.mimeType.includes(`mp4`)?`mp4`:`webm`)),window.__lastVideo=e.size},f.start(),m=!0,window.__recording=!0,d.show()}function g(){m&&(f.stop(),m=!1,window.__recording=!1,d.hide())}let _=()=>m?g():h(),v=e=>new Promise(t=>setTimeout(t,e)),y=e=>window.dispatchEvent(new KeyboardEvent(`keydown`,{key:e}));async function b(){let e=a.clientWidth,t=a.clientHeight,n=e*.26,i=t*.74;for(let t=0;t<=10;t++)r.at(n+t*e*.028,i+Math.sin(t*.7)*16),await v(100);r.stop()}async function x(e){if(e.keys)for(let t of e.keys)y(t),await v(70);e.zoom&&t.zoomBy(e.zoom),e.orbit&&t.orbit(e.orbit[0],e.orbit[1]),e.timeTo!==void 0&&n.goTo(e.timeTo),e.ripple&&await b(),e.waitMs&&await v(e.waitMs)}let S={tour:[{keys:[`6`,`0`],waitMs:600},{zoom:.72,waitMs:1700},{ripple:!0,waitMs:2400},{orbit:[.55,0],waitMs:1700},{timeTo:0,waitMs:3e3},{timeTo:.5,waitMs:1500},{keys:[`7`],waitMs:1e3},{zoom:1.5,waitMs:1400},{keys:[`B`],waitMs:2e3},{keys:[`B`],waitMs:2e3},{keys:[`B`],waitMs:2e3},{keys:[`B`],waitMs:2e3},{keys:[`B`],waitMs:2e3},{keys:[`8`],waitMs:900},{zoom:.65,waitMs:1200},{ripple:!0,waitMs:2600},{keys:[`7`],waitMs:700},{keys:[`B`],waitMs:300},{keys:[`B`],waitMs:900},{zoom:1.4,waitMs:2600}],daycycle:[{keys:[`6`,`0`],waitMs:700},{timeTo:.75,waitMs:2600},{timeTo:1,waitMs:2600},{timeTo:1.25,waitMs:2600},{timeTo:1.5,waitMs:2600},{timeTo:1.5,waitMs:800}],cities:[{keys:[`6`,`0`],waitMs:500},{timeTo:.78,waitMs:2800},{keys:[`C`],waitMs:3e3},{keys:[`C`],waitMs:3e3},{keys:[`C`],waitMs:2e3}]};async function C(e){let t=S[e];if(t){window.__director=e;for(let e of t)await x(e);window.__director=null}}async function w(e){await v(1600),h(),await C(e),await v(400),g(),window.__captureDone=!0}window.addEventListener(`keydown`,e=>{(e.key===`s`||e.key===`S`)&&l(),(e.key===`r`||e.key===`R`)&&_()});let T=o.get(`capture`);return T&&S[T]&&w(T),window.__capture={still:l,toggleRec:_,run:C,sequences:Object.keys(S)},window.__capture}function Nt(){let e=document.createElement(`div`);return e.textContent=`● REC`,e.style.cssText=`position:fixed;top:14px;right:16px;z-index:2;font:bold 12px ui-monospace,monospace;color:#ff3b30;letter-spacing:.12em;text-shadow:0 1px 3px #000;display:none;`,document.body.appendChild(e),{show:()=>{e.style.display=`block`},hide:()=>{e.style.display=`none`}}}var Pt=`
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
`;function Ft({controls:e,state:t,show:n,coarse:r}){if(typeof document>`u`)return;let i=document.createElement(`style`);i.textContent=Pt,document.head.appendChild(i);let a=document.createElement(`div`);a.className=`vui`;let o=document.createElement(`div`);o.className=`vui-info`,o.innerHTML=`KEYS · 4/5/6 cam · 0 vector · 7/8 pixel/toon · B era · T time · [ ] scrub · 9 auto · C city · G shuffle · W weather · K season · click a building / O office · Esc exit · S still · R rec · H shadows · P theme · drag water to ripple`;let s=(e,t,n)=>{let r=document.createElement(`button`);return r.textContent=e,n&&(r.title=n),r.addEventListener(`click`,t),r},c=e=>{let t=document.createElement(`div`);return t.className=`seg`,{seg:t,btns:e.map(([n,r])=>{let i=s(n,()=>e.find(e=>e[1]===r)[2](),n);return i.dataset.val=r,t.appendChild(i),i})}};a.appendChild(s(`City`,()=>e.city(),`Next city profile (C)`)),a.appendChild(s(`Shuffle`,()=>e.shuffle(),`New random seed (G)`)),a.appendChild(w());let l={clear:`Clear`,rain:`Rain`,snow:`Snow`,fog:`Fog`},u=[`Spring`,`Summer`,`Autumn`,`Winter`],d=s(`Clear`,()=>e.weather(),`Cycle weather: clear→rain→snow→fog (W)`),f=s(`Spring`,()=>e.season(),`Cycle season: spring→summer→autumn→winter (K)`),p=s(`Office`,()=>e.office(),`Dive into / exit the office (O · Esc)`);a.append(d,f,p,w());let m=c([[`Vector`,`vector`,()=>e.style(`vector`)],[`Pixel`,`pixel`,()=>e.style(`pixel`)],[`Toon`,`toon`,()=>e.style(`toon`)]]);a.appendChild(m.seg),a.appendChild(w());let h=document.createElement(`input`);h.type=`range`,h.min=`0`,h.max=`1`,h.step=`0.01`,h.title=`Time of day`;let g=!1;h.addEventListener(`pointerdown`,()=>{g=!0}),h.addEventListener(`pointerup`,()=>{g=!1}),h.addEventListener(`input`,()=>e.time(parseFloat(h.value)));let _=s(`▶`,()=>e.auto(),`Play/pause day cycle (9)`),v=document.createElement(`div`);v.style.cssText=`display:flex;align-items:center;gap:6px;`;let y=document.createElement(`span`);y.className=`lbl`,y.textContent=`Day`,v.append(y,h,_),a.appendChild(v),a.appendChild(w());let b=c([[`Iso`,`iso`,()=>e.cam(`iso`)],[`Dim`,`dimetric`,()=>e.cam(`dimetric`)],[`3D`,`persp`,()=>e.cam(`persp`)]]);a.appendChild(b.seg),a.appendChild(s(`ⓘ`,()=>o.classList.toggle(`open`),`All keys`)),document.body.append(o,a),C(n);function x(){let e=t();m.btns.forEach(t=>t.classList.toggle(`on`,t.dataset.val===e.style)),b.btns.forEach(t=>t.classList.toggle(`on`,t.dataset.val===e.cam)),d.textContent=l[e.weather]||`Clear`,d.classList.toggle(`on`,e.weather!==`clear`),f.textContent=u[e.season]||`Spring`,f.classList.toggle(`on`,(e.season||0)>0),p.textContent=e.office?`Exit`:`Office`,p.classList.toggle(`on`,!!e.office),_.textContent=e.auto?`❚❚`:`▶`,_.classList.toggle(`on`,e.auto),g||(h.value=String(e.t))}x();let S=setInterval(x,200);function C(e){a.style.display=e?`flex`:`none`,e||o.classList.remove(`open`)}return{setVisible:C,refresh:x,destroy(){clearInterval(S),a.remove(),o.remove(),i.remove()}};function w(){let e=document.createElement(`div`);return e.className=`sep`,e}}var It=[`clear`,`rain`,`snow`,`fog`];function Lt({extent:e=7}={}){let t=new N;t.raycast=()=>{};let n=e+2,r=.25,i=(e,t)=>e+Math.random()*(t-e),a=new S(new p(.015,.5),new ce({color:`#a9bdd6`,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),600);a.frustumCulled=!1,a.raycast=()=>{};let o=new Float32Array(600*3),s=new Float32Array(600);for(let e=0;e<600;e++)o[e*3]=i(-n,n),o[e*3+1]=i(r,11),o[e*3+2]=i(-n,n),s[e]=i(9,14);let c=new S(new p(.07,.07),new ce({color:`#f3f7ff`,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),700);c.frustumCulled=!1,c.raycast=()=>{};let l=new Float32Array(700*3),u=new Float32Array(700),d=new Float32Array(700);for(let e=0;e<700;e++)l[e*3]=i(-n,n),l[e*3+1]=i(r,11),l[e*3+2]=i(-n,n),u[e]=i(0,6.28),d[e]=i(.6,1.2);t.add(a,c);let f=Array.from({length:8},()=>new D),m=0,h=`clear`,g=0,v=0,y=0,b=0,x=0,C=new _,w=(e,t,n,r)=>e+(t-e)*Math.min(1,n*r);function T(e){It.includes(e)&&(h=e)}function E(){h=It[(It.indexOf(h)+1)%It.length]}function O(e,t){let p=h===`rain`,_=h===`snow`,S=h===`fog`,T=h!==`clear`;g=w(g,+!!T,e,1.4),v=w(v,+!!T,e,1.2),y=w(y,+!!S,e,.9),x=w(x,T&&!S?1:0,e,1),b=w(b,+!!_,e,_?.22:.5);let E=p?g:0,D=Math.round(600*E);for(let t=0;t<600;t++){if(t>=D){C.position.set(0,-50,0),C.scale.setScalar(0),C.updateMatrix(),a.setMatrixAt(t,C.matrix);continue}o[t*3+1]-=s[t]*e,o[t*3]+=e*1.1,o[t*3+1]<r&&(o[t*3]=i(-n,n),o[t*3+1]=11,o[t*3+2]=i(-n,n)),C.position.set(o[t*3],o[t*3+1],o[t*3+2]),C.rotation.set(0,0,0),C.scale.set(1,1,1),C.updateMatrix(),a.setMatrixAt(t,C.matrix)}a.instanceMatrix.needsUpdate=!0,a.material.opacity=.55*E,m=p?Math.round(8*g):0;for(let e=0;e<m;e++)f[e].set(Math.random(),Math.random(),.05*g);let O=Math.round(700*(_?g:0));for(let a=0;a<700;a++){if(a>=O){C.position.set(0,-50,0),C.scale.setScalar(0),C.updateMatrix(),c.setMatrixAt(a,C.matrix);continue}l[a*3+1]-=d[a]*e;let o=Math.sin(t*1.5+u[a])*.5;l[a*3+1]<r&&(l[a*3]=i(-n,n),l[a*3+1]=11,l[a*3+2]=i(-n,n)),C.position.set(l[a*3]+o,l[a*3+1],l[a*3+2]),C.rotation.set(0,0,0),C.scale.setScalar(1),C.updateMatrix(),c.setMatrixAt(a,C.matrix)}c.instanceMatrix.needsUpdate=!0,c.material.opacity=.9*(_?g:0)}return{group:t,update:O,cycle:E,setKind:T,rainDrops:f,get kind(){return h},get intensity(){return g},get overcast(){return v},get fog(){return y},get snow(){return b},get cloud(){return x},get rainDropCount(){return m},poolCounts:{rain:600,snow:700}}}function L(e,t,n,r,{rough:i=.62,metal:o=0,x:s=0,y:c=0,z:l=0}={}){let u=new y(new A(e,t,n),new a({color:r,roughness:i,metalness:o}));return u.position.set(s,c,l),u}function Rt({tier:e=`corner`}={}){let t=new T,n=new u(43,1,.1,100),r=new D(0,1.62,4.35);n.position.copy(r),n.lookAt(0,1.12,-1);let i=new N;t.add(i);let o=`#3a2618`,s=`#5b3d27`,c=L(11,.2,11,`#3c2a1c`,{rough:.5,y:-.1});i.add(c);let l=L(11,.2,11,`#241a13`,{rough:.9,y:3});i.add(l);function d(e){let t=new N,n=L(.2,3.2,8,`#4a3322`,{rough:.7,x:e*3.6,y:1.5,z:0});t.add(n);for(let n of[.9,2.1])t.add(L(.22,.06,8,o,{x:e*3.59,y:n,z:0}));let r=new y(new p(1.5,1),new a({map:zt(e),roughness:.8}));r.position.set(e*3.49,1.7,.4),r.rotation.y=-e*Math.PI/2;let i=L(.06,1.18,1.68,`#2a1c10`,{x:e*3.52,y:1.7,z:.4});return t.add(i,r),t}i.add(d(-1),d(1));let f=new p(3,2.5),m=new ce({color:`#ffffff`,toneMapped:!1}),_=new ce({color:`#ffffff`,toneMapped:!1}),v=1.55,b=new y(f,m);b.position.set(-1.06,v,-2.64),b.rotation.y=Math.PI/4;let x=new y(f,_);x.position.set(1.06,v,-2.64),x.rotation.y=-Math.PI/4,i.add(b,x),i.add(L(.08,2.7,.08,o,{x:0,y:v,z:-2.2}));for(let[e,t,n]of[[-1.06,-2.64,Math.PI/4],[1.06,-2.64,-Math.PI/4]]){let r=new N;r.add(L(3.05,.09,.09,o,{y:1.3})),r.add(L(3.05,.09,.09,o,{y:-1.25})),r.add(L(.09,2.6,.09,o,{x:-1.5})),r.position.set(e,v,t),r.rotation.y=n,i.add(r)}i.add(L(5.4,.5,.3,s,{x:0,y:.25,z:-2.1500000000000004}));let S=new N;S.add(L(3.4,.12,1.5,`#6e4a30`,{rough:.32,y:.86,z:1.5})),S.add(L(3.2,.78,1.36,s,{y:.46,z:1.5}));for(let e of[.66,.4,.14])S.add(L(.9,.2,.04,`#4a3120`,{x:1.05,y:e,z:2.2}));S.add(L(.12,.04,.04,`#caa15a`,{x:1.05,y:.66,z:2.23,metal:.6})),i.add(S);let C=new N;C.add(L(.06,.5,.06,`#2a1c10`,{x:-1.15,y:1.15,z:1.6}));let w=new y(new re(.22,.26,16,1,!0),new a({color:`#c2802e`,roughness:.5,side:2,emissive:`#3a2208`,emissiveIntensity:.6}));w.position.set(-1.15,1.42,1.6),C.add(w);let E=new g(`#ffb15a`,7,7,1.8);E.position.set(-1.15,1.34,1.6),C.add(E),i.add(C);let O=new N;O.add(L(.62,.03,.42,`#1c1c20`,{y:.93,z:1.5,metal:.4,rough:.4}));let k=new y(new A(.62,.4,.025),new a({color:`#0a0c10`,emissive:`#2a4a6a`,emissiveIntensity:.7,roughness:.3}));k.position.set(0,1.14,1.31),k.rotation.x=-.32,O.add(k),O.userData.role=`laptop`,i.add(O);let ee=new N;ee.add(L(.26,.07,.34,`#15151a`,{x:1,y:.93,z:1.5})),ee.add(L(.3,.06,.08,`#101015`,{x:1,y:1,z:1.34})),ee.userData.role=`phone`,i.add(ee);let te=new _e(`#6a5238`,`#140d08`,.55);t.add(te);let ie=new h(`#ffd9a0`,9,9,.7,.5,1.2);ie.position.set(0,2.95,1.3),ie.target.position.set(0,.86,1.5),t.add(ie,ie.target),i.add(L(.4,.06,.4,`#1a130c`,{y:2.94,z:1.3}));let ae=new y(new ne(.16,20),new ce({color:`#ffe6b0`,toneMapped:!1}));ae.position.set(0,2.9,1.3),ae.rotation.x=Math.PI/2,i.add(ae);let oe=E.intensity;function se(e,t){E.intensity=oe*(.97+.03*Math.sin(t*7)*Math.sin(t*2.3)),n.position.set(r.x+Math.sin(t*.5)*.04,r.y+Math.sin(t*.7)*.02,r.z),n.lookAt(0,1.12,-1)}function le(e){m.map=e,_.map=e,m.needsUpdate=!0,_.needsUpdate=!0}return{scene:t,camera:n,update:se,setCityTexture:le,interactables:[O,ee],get tier(){return e}}}function zt(e){let t=document.createElement(`canvas`);t.width=t.height=256;let n=t.getContext(`2d`),r=n.createLinearGradient(0,0,256,256);e<0?(r.addColorStop(0,`#6a3b1c`),r.addColorStop(1,`#caa15a`)):(r.addColorStop(0,`#3a4a6a`),r.addColorStop(1,`#a86a3a`)),n.fillStyle=r,n.fillRect(0,0,256,256),n.globalAlpha=.5;for(let e=0;e<5;e++)n.fillStyle=e%2?`#2a1c10`:`#e0c080`,n.fillRect(30+e*36,40+e%3*30,26,150);let i=new ee(t);return i.colorSpace=o,i}var Bt=`varying vec2 vUv;

void main() {
  
  
  
  vUv = uv;

  
  
  
  
  
  
  
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,Vt=`precision highp float;

varying vec2 vUv;

uniform float uTime;
uniform vec3  uInk;
uniform vec3  uGold;

void main() {
  
  
  float wave = 0.5 + 0.5 * sin(vUv.x * 3.0 + vUv.y * 2.0 + uTime * 0.3);

  
  
  wave *= 0.6 + 0.4 * sin(vUv.y * 4.0 - uTime * 0.15);

  
  
  vec3 colour = mix(uInk, uGold * 0.5, wave * 0.45);

  gl_FragColor = vec4(colour, 1.0); 
}`,Ht=`precision highp float;

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
}`,Ut=`precision highp float;

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
}`,Wt=`precision highp float;

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
}`,Gt=`const float CA_STRENGTH   = 0.0030;  
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
}`,Kt=`const float DITHER = 0.55;   

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
}`,qt=`precision highp float;

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
}`,Jt=`precision highp float;

varying vec2 vUv;
uniform sampler2D uToon;   
uniform sampler2D uPixel;  
uniform float     uBlend;  

void main() {
  vec3 t = texture2D(uToon, vUv).rgb;
  vec3 p = texture2D(uPixel, vUv).rgb;
  gl_FragColor = vec4(mix(t, p, uBlend), 1.0);
}`,Yt=`precision highp float;

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
}`,Xt=220,R=new URLSearchParams(window.location.search),Zt=R.get(`demo`)===`1`||R.has(`capture`);window.__demo=Zt;var Qt={night:[`#0A0C16`,`#1C2236`,`#3A3A52`,`#5A5A78`,`#8A92B0`],dawn:[`#1A1008`,`#43281A`,`#7A4A30`,`#B07A4E`,`#E8A86A`],noon:[`#16100A`,`#3A2F1E`,`#6B563A`,`#937B54`,`#B89968`],dusk:[`#140A0A`,`#3E1E1A`,`#7A3828`,`#B85A36`,`#F0884A`]},$t={night:[`#020604`,`#06180E`,`#10401E`,`#1E9040`,`#7FE0FF`],dawn:[`#060603`,`#1A2410`,`#3A6B22`,`#6CC040`,`#FFC060`],noon:[`#050805`,`#0E2912`,`#1E6B2F`,`#3CF06A`,`#FFB000`],dusk:[`#080402`,`#241408`,`#6B4A12`,`#E0A030`,`#FF7030`]},z=new de({antialias:!0,preserveDrawingBuffer:!0});z.shadowMap.enabled=!0,z.shadowMap.type=1,z.setPixelRatio(Math.min(window.devicePixelRatio,2)),z.setSize(window.innerWidth,window.innerHeight),z.setClearColor(920327,1),document.body.appendChild(z.domElement);var B=z.getDrawingBufferSize(new O),V=new T;V.fog=new ge(10465470,0);var en=new j(`#aeb6c0`),H=Pe({aspect:window.innerWidth/window.innerHeight}),U=ft({t:.5}),W=256,tn={type:te,format:x,minFilter:se,magFilter:se,wrapS:le,wrapT:le,depthBuffer:!1,stencilBuffer:!1},nn=[new k(W,W,tn),new k(W,W,tn),new k(W,W,tn)];for(let e of nn)z.setRenderTarget(e),z.clear();z.setRenderTarget(null);var rn=new T,an=new v(-1,1,1,-1,0,1),on=new f({vertexShader:r,fragmentShader:Ht,uniforms:{uCurr:{value:null},uPrev:{value:null},uTexel:{value:new O(1/W,1/W)},uMouse:{value:new O(-1,-1)},uMouseStrength:{value:0},uC2:{value:.25},uDamping:{value:.992},uRainCount:{value:0},uRainDrops:{value:Array.from({length:8},()=>new D)}}});rn.add(new y(new p(2,2),on));var sn=new k(B.x,B.y,{minFilter:M,magFilter:M,depthBuffer:!0,stencilBuffer:!1});function cn(e){let t=document.createElement(`canvas`);t.width=t.height=1024;let n=t.getContext(`2d`);n.fillStyle=e?`#0c1418`:`#15110b`,n.fillRect(0,0,1024,1024),n.strokeStyle=e?`rgba(120,150,170,0.22)`:`rgba(184,153,104,0.30)`,n.lineWidth=2;for(let e=0;e<=1024;e+=64)n.beginPath(),n.moveTo(e,0),n.lineTo(e,1024),n.stroke(),n.beginPath(),n.moveTo(0,e),n.lineTo(1024,e),n.stroke();e||(n.fillStyle=`#B89968`,n.font=`bold 360px Georgia, serif`,n.textAlign=`center`,n.textBaseline=`middle`,n.fillText(`LGR`,512,470),n.font=`600 64px ui-monospace, monospace`,n.fillText(`WEB · STUDIO`,512,720));let r=new ee(t);return r.colorSpace=o,r}var ln=new y(new p(16,16),new ce({map:cn(Zt)}));ln.rotation.x=-Math.PI/2,ln.position.y=-.35,V.add(ln);var un=new y(new p(40,24),new f({depthWrite:!1,vertexShader:Bt,fragmentShader:Vt,uniforms:{uTime:{value:0},uInk:{value:U.horizon},uGold:{value:U.sky}}}));un.position.set(0,3,-8),V.add(un);var dn=new f({vertexShader:Ut,fragmentShader:Wt,uniforms:{uHeight:{value:null},uScene:{value:sn.texture},uTexel:{value:new O(1/W,1/W)},uResolution:{value:new O(B.x,B.y)},uDisplace:{value:.42},uNormalStrength:{value:22},uRefractStrength:{value:.06},uChromaScale:{value:1},uNormalMatrix:{value:new c},uLightDir:{value:U.sunDir},uInk:{value:new j(`#2A2218`)},uGold:{value:new j(`#B89968`)},uVector:Fe,uVecWater:{value:new j(`#1fb8d8`)},uVecTint:{value:Ie}}}),G=new y(new p(16,16,W-1,W-1),dn);G.rotation.x=-Math.PI/2,G.updateMatrixWorld(!0),dn.uniforms.uNormalMatrix.value.getNormalMatrix(G.matrixWorld),V.add(G);var fn={value:0},pn=new URLSearchParams(window.location.search),mn=(pn.get(`city`)?Number(pn.get(`city`)):0)||Math.random()*1e9|0,hn=Math.max(0,Ze.indexOf(pn.get(`profile`)||`manhattan`)),gn=At({windowGlow:fn}),K=it({seed:mn,profileIndex:hn,landmarkFactory:gn,windowGlow:fn});V.add(K.group);var _n=vt({plinthTop:.3,extent:K.extent});V.add(_n.group);var q=Lt({extent:K.extent});V.add(q.group),on.uniforms.uRainDrops.value=q.rainDrops;var vn=[0,.33,.66,1],yn=0;window.__season=vn[yn],K.group.remove(K.key),V.add(K.key),K.key.castShadow=!0,K.key.shadow.mapSize.set(2048,2048),K.key.shadow.bias=-18e-5,K.key.shadow.normalBias=.028,V.add(K.key.target);function bn(){let e=K.key.shadow.camera,t=K.extent+4.5;e.left=-t,e.right=t,e.top=t,e.bottom=-t,e.near=1,e.far=xn*2,e.updateProjectionMatrix()}var xn=24;bn();var Sn=!0;window.__shadows=Sn;function Cn(){K.generate(mn,hn),dn.uniforms.uVecWater.value.set(K.waterColor),bn(),Mr()}gn.whenReady.then(()=>{Cn(),window.__cityReady=!0}),dn.uniforms.uVecWater.value.set(K.waterColor);var wn=new ue(B.x,B.y),Tn=new k(B.x,B.y,{minFilter:M,magFilter:M,depthBuffer:!0,stencilBuffer:!1,depthTexture:wn}),En=new k(B.x,B.y,{minFilter:M,magFilter:M,depthBuffer:!1,stencilBuffer:!1}),Dn=new k(B.x,B.y,{minFilter:M,magFilter:M,depthBuffer:!1,stencilBuffer:!1}),On=new k(B.x,B.y,{minFilter:M,magFilter:M,depthBuffer:!1,stencilBuffer:!1}),kn=new T,An=new v(-1,1,1,-1,0,1),jn=new y(new p(2,2));kn.add(jn);var Mn=new f({vertexShader:r,fragmentShader:Gt,uniforms:{uScene:{value:Tn.texture},uTime:{value:0},uResolution:{value:new O(B.x,B.y)},uGrain:{value:1},uChroma:{value:1},uExposure:{value:1}}}),Nn=5,Pn=e=>{let t=e.map(e=>new j(e));for(;t.length<8;)t.push(new j(0,0,0));return t},Fn=[`night`,`dawn`,`noon`,`dusk`],In={inkgold:Fn.map(e=>Pn(Qt[e])),terminal:Fn.map(e=>Pn($t[e]))},Ln=new f({vertexShader:r,fragmentShader:Kt,uniforms:{uScene:{value:En.texture},uResolution:{value:new O(B.x,B.y)},uPixelSize:{value:Xt},uPalette:{value:In.inkgold[2]},uPaletteB:{value:In.inkgold[2]},uPaletteBlend:{value:0},uPaletteSize:{value:Nn}}});function Rn(e){let t=sr?In.terminal:In.inkgold,n=e%1*4,r=Math.floor(n)%4;Ln.uniforms.uPalette.value=t[r],Ln.uniforms.uPaletteB.value=t[(r+1)%4],Ln.uniforms.uPaletteBlend.value=n-Math.floor(n)}var zn=new f({vertexShader:r,fragmentShader:t,uniforms:{uScene:{value:En.texture},uResolution:{value:new O(B.x,B.y)},uGridWidth:{value:160},uDither:{value:.55},uPalette:{value:e(i[`8-bit`].palette)},uPaletteSize:{value:1},uUsePalette:{value:1}}}),Bn={};for(let t of n)Bn[t]=i[t].palette?e(i[t].palette):null;var Vn=[`native`,...n],Hn=`native`;window.__era=Hn;function Un(){if(Hn===`native`)return;let e=i[Hn];zn.uniforms.uGridWidth.value=e.gridWidth,zn.uniforms.uDither.value=e.dither,zn.uniforms.uUsePalette.value=+!!e.palette,e.palette&&(zn.uniforms.uPalette.value=Bn[Hn],zn.uniforms.uPaletteSize.value=e.palette.length)}var Wn=()=>Hn===`native`?Ln:zn,Gn=new f({vertexShader:r,fragmentShader:qt,uniforms:{uScene:{value:En.texture},uDepth:{value:wn},uResolution:{value:new O(B.x,B.y)},uBands:{value:4},uToonGain:{value:1.7},uToonGamma:{value:.6},uToonFloor:{value:U.toonFloor},uOutline:{value:U.outline},uNear:{value:.1},uFar:{value:100},uIsPerspective:{value:1}}}),Kn=new f({vertexShader:r,fragmentShader:Jt,uniforms:{uToon:{value:Dn.texture},uPixel:{value:On.texture},uBlend:{value:0}}});function qn(e,t){jn.material=e,z.setRenderTarget(t),z.render(kn,An)}var J=Rt({tier:`corner`});J.camera.aspect=window.innerWidth/window.innerHeight,J.camera.updateProjectionMatrix();var Jn=new u(55,1.4,.1,100);Jn.position.set(2.2,3.4,11.5),Jn.lookAt(0,2,0);var Yn=new k(1024,720,{minFilter:M,magFilter:M,depthBuffer:!0,stencilBuffer:!1});J.setCityTexture(Yn.texture);var Xn=new k(B.x,B.y,{minFilter:M,magFilter:M,depthBuffer:!1,stencilBuffer:!1}),Zn=new k(B.x,B.y,{minFilter:M,magFilter:M,depthBuffer:!1,stencilBuffer:!1}),Qn=new f({vertexShader:r,fragmentShader:Yt,uniforms:{uCity:{value:Xn.texture},uOffice:{value:Zn.texture},uT:{value:0},uFocus:{value:new O(.5,.5)}}}),Y=`city`,$n=0,er=4.6;window.__scene=Y;function tr(e){Y===`city`&&(Qn.uniforms.uFocus.value.copy(e||new O(.5,.5)),Y=`diving-in`,window.__scene=Y)}function nr(){Y!==`office`&&Y!==`diving-in`||(Y=`diving-out`,window.__scene=Y)}function rr(e,t){G.visible=!1,z.setRenderTarget(sn),z.render(V,e),G.visible=!0,z.setRenderTarget(t),z.render(V,e)}function ir(e,t){if(G.visible=!1,z.setRenderTarget(sn),z.render(V,H.camera),G.visible=!0,X===1||cr&&X!==7&&X!==8)z.setRenderTarget(t),z.render(V,H.camera);else if(z.setRenderTarget(Tn),z.render(V,H.camera),X===2)Mn.uniforms.uGrain.value=1,Mn.uniforms.uChroma.value=1,qn(Mn,t);else{Mn.uniforms.uGrain.value=0,Mn.uniforms.uChroma.value=0,qn(Mn,En);let n=H.camera;Gn.uniforms.uNear.value=n.near,Gn.uniforms.uFar.value=n.far,Gn.uniforms.uIsPerspective.value=+!!n.isPerspectiveCamera,e.kind===`pixel`?(qn(Wn(),t),window.__style=`pixel`):e.kind===`toon`?(qn(Gn,t),window.__style=`toon`):(qn(Gn,Dn),qn(Wn(),On),Kn.uniforms.uBlend.value=e.blend,qn(Kn,t),window.__style=`blend`)}}var ar=.45,or=.65,X=3,sr=!1,cr=!1;window.__mode=X,window.__camMode=H.mode,window.__vector=cr,window.addEventListener(`keydown`,e=>{(e.key===`1`||e.key===`2`||e.key===`3`)&&(X=Number(e.key),window.__mode=X),(e.key===`7`||e.key===`8`)&&(X=Number(e.key),window.__mode=X),e.key===`4`&&(H.setMode(P.PERSPECTIVE),window.__camMode=H.mode),e.key===`5`&&(H.setMode(P.ISOMETRIC),window.__camMode=H.mode),e.key===`6`&&(H.setMode(P.DIMETRIC),window.__camMode=H.mode),e.key===`ArrowLeft`&&(H.pan(-1,0),e.preventDefault()),e.key===`ArrowRight`&&(H.pan(1,0),e.preventDefault()),e.key===`ArrowUp`&&(H.pan(0,1),e.preventDefault()),e.key===`ArrowDown`&&(H.pan(0,-1),e.preventDefault()),e.key===`0`&&(cr=!cr,Fe.value=+!!cr,window.__vector=cr),(e.key===`w`||e.key===`W`)&&(q.cycle(),window.__weather=q.kind),(e.key===`k`||e.key===`K`)&&(yn=(yn+1)%vn.length,window.__season=vn[yn]),(e.key===`g`||e.key===`G`)&&(mn=Math.random()*1e9|0,Cn()),(e.key===`c`||e.key===`C`)&&(hn=(hn+1)%Xe.length,Cn()),(e.key===`h`||e.key===`H`)&&(Sn=!Sn,window.__shadows=Sn),(e.key===`p`||e.key===`P`)&&(sr=!sr),(e.key===`b`||e.key===`B`)&&(Hn=Vn[(Vn.indexOf(Hn)+1)%Vn.length],window.__era=Hn,Un()),(e.key===`t`||e.key===`T`)&&U.cyclePreset(),e.key===`[`&&U.nudge(-.5),e.key===`]`&&U.nudge(.5),e.key===`9`&&(U.toggleAuto(),window.__auto=U.auto),e.key===`Escape`&&nr(),(e.key===`o`||e.key===`O`)&&(Y===`city`?tr():nr())});var lr=window.matchMedia(`(prefers-reduced-motion: reduce)`);U.setReducedMotion(lr.matches),lr.addEventListener(`change`,e=>U.setReducedMotion(e.matches));var ur=new ve,dr=new O,Z=!1,fr=!1,pr=0,mr=0,hr=.005,gr=(e,t)=>{dr.x=e/window.innerWidth*2-1,dr.y=-(t/window.innerHeight)*2+1},_r=0,vr=0,yr=0;function br(){return ur.setFromCamera(dr,H.camera),ur.intersectObject(K.group,!0)[0]?new O(dr.x*.5+.5,dr.y*.5+.5):null}z.domElement.addEventListener(`contextmenu`,e=>e.preventDefault()),z.domElement.addEventListener(`mousedown`,e=>{e.button===0&&(Z=Y===`city`,gr(e.clientX,e.clientY),_r=e.clientX,vr=e.clientY,yr=performance.now()),e.button===2&&(fr=!0,pr=e.clientX,mr=e.clientY)}),window.addEventListener(`mousemove`,e=>{Z&&gr(e.clientX,e.clientY),fr?(H.orbit(-(e.clientX-pr)*hr,-(e.clientY-mr)*hr),pr=e.clientX,mr=e.clientY):Y===`city`&&!Z&&(gr(e.clientX,e.clientY),z.domElement.style.cursor=br()?`pointer`:`default`)}),window.addEventListener(`mouseup`,e=>{if(Z&&Y===`city`&&Math.hypot(e.clientX-_r,e.clientY-vr)<6&&performance.now()-yr<350){gr(e.clientX,e.clientY);let t=br();t&&tr(t)}Z=!1,fr=!1}),z.domElement.addEventListener(`wheel`,e=>{e.preventDefault(),H.zoomBy(Math.exp(e.deltaY*.0015))},{passive:!1});var xr=0,Sr=(e,t)=>[(e.clientX+t.clientX)/2,(e.clientY+t.clientY)/2],Cr=(e,t)=>Math.hypot(e.clientX-t.clientX,e.clientY-t.clientY);z.domElement.addEventListener(`touchstart`,e=>{e.touches.length===1&&(Z=!0,gr(e.touches[0].clientX,e.touches[0].clientY)),e.touches.length===2&&(Z=!1,fr=!0,[pr,mr]=Sr(e.touches[0],e.touches[1]),xr=Cr(e.touches[0],e.touches[1]))},{passive:!1}),z.domElement.addEventListener(`touchmove`,e=>{if(e.preventDefault(),e.touches.length===1&&Z)gr(e.touches[0].clientX,e.touches[0].clientY);else if(e.touches.length===2){let[t,n]=Sr(e.touches[0],e.touches[1]);H.orbit(-(t-pr)*hr,-(n-mr)*hr),pr=t,mr=n;let r=Cr(e.touches[0],e.touches[1]);xr>0&&H.zoomBy(xr/r),xr=r}},{passive:!1}),window.addEventListener(`touchend`,e=>{Z=!1,fr=!1,xr=0,e.touches&&e.touches.length===1&&(Z=!0)});var Q=new m;Q.connect(document);var wr=0,Tr=performance.now();function Er(){if(X===1||X===2)return{kind:`none`};if(X===7)return{kind:`pixel`};if(X===8)return{kind:`toon`};let e=H.styleT;return window.__styleT=e,e>=or?{kind:`pixel`}:e<=ar?{kind:`toon`}:{kind:`blend`,blend:l.smoothstep(e,ar,or)}}var Dr=Zt?null:document.querySelector(`.hint`);if(Zt){let e=document.querySelector(`.hint`);e&&(e.style.display=`none`)}var Or=Dr?Dr.textContent:``,kr=``,Ar=``;function jr(e){!Dr||e===kr||(kr=e,Dr.textContent=`${Or} · ${Ar} · ${e}`)}function Mr(){Ar=`seed ${K.state.seed} · ${K.state.profile.name}`,window.__profile=K.state.profile.key,kr=``}Mr();function Nr(){Q.update();let e=Math.min(Q.getDelta(),.1);H.update(e),un.material.uniforms.uTime.value=Q.getElapsed(),Mn.uniforms.uTime.value=Q.getElapsed(),U.update(e),K.key.position.copy(U.sunDir).multiplyScalar(xn),K.key.color.copy(U.sunColor),K.key.intensity=U.sunIntensity,K.fill.color.copy(U.hemiSky),K.fill.groundColor.copy(U.hemiGround),fn.value=U.windowGlow;let t=q.overcast;K.key.intensity*=1-.5*t,K.key.color.lerp(en,.45*t),K.fill.intensity=1+.7*t;let n=l.smoothstep(U.sunDir.y,.06,.34),r=l.lerp(.28,1,1-U.windowGlow),i=Sn?n*r:0;K.key.shadow.intensity=.72*i,Le.value=.52*i;let a=1-U.windowGlow;Ie.setRGB(l.lerp(.46,1,a),l.lerp(.52,1,a),l.lerp(.74,1,a)),Mn.uniforms.uExposure.value=U.exposure,Gn.uniforms.uToonGain.value=U.toonGain,z.setClearColor(U.horizon,1),Rn(U.t),jr(U.clock),window.__t=U.t,_n.update(e,Q.getElapsed(),U),K.update(Q.getElapsed()),q.update(e,Q.getElapsed()),on.uniforms.uRainCount.value=q.rainDropCount,V.fog.density=q.fog*.075,V.fog.color.copy(U.horizon),Re.value=q.snow,ze.value=q.cloud*.55,Be.x+=e*.018,Be.y+=e*.009,Ve.value+=(vn[yn]-Ve.value)*Math.min(1,e*1.5);let o=Er(),s=o.kind===`toon`?1:o.kind===`blend`?1-o.blend:0;dn.uniforms.uChromaScale.value=l.lerp(1,.5,s),wr++;let c=performance.now();c-Tr>=1e3&&(window.__fps=wr,wr=0,Tr=c);let u=0;if(Z&&Y===`city`){ur.setFromCamera(dr,H.camera);let e=ur.intersectObject(G)[0];e&&e.uv&&(on.uniforms.uMouse.value.copy(e.uv),u=.06)}on.uniforms.uMouseStrength.value=u;let[d,f,p]=nn;on.uniforms.uPrev.value=d.texture,on.uniforms.uCurr.value=f.texture,z.setRenderTarget(p),z.render(rn,an),nn=[f,p,d],dn.uniforms.uHeight.value=nn[1].texture,$n+=(+(Y===`office`||Y===`diving-in`)-$n)*Math.min(1,e*er),Y===`diving-in`&&$n>.992&&($n=1,Y=`office`,window.__scene=Y),Y===`diving-out`&&$n<.008&&($n=0,Y=`city`,window.__scene=Y),Y===`city`?ir(o,null):(J.update(e,Q.getElapsed()),rr(Jn,Yn),Y===`office`?(z.setRenderTarget(null),z.render(J.scene,J.camera)):(ir(o,Xn),z.setRenderTarget(Zn),z.render(J.scene,J.camera),Qn.uniforms.uT.value=$n,qn(Qn,null))),requestAnimationFrame(Nr)}var Pr={at:(e,t)=>{gr(e,t),Z=!0},stop:()=>{Z=!1}};function Fr(){let e=window.__style||(X===1?`raw`:X===2?`filmic`:`auto`);return{lesson:19,clock:U.clock,style:(cr?`vec-`:``)+e,profile:K.state.profile.key,weather:q.kind,scene:Y}}Mt({renderer:z,rig:H,sunRig:U,poke:Pr,getState:Fr});var $=e=>window.dispatchEvent(new KeyboardEvent(`keydown`,{key:e})),Ir={cam:e=>$({iso:`5`,dimetric:`6`,persp:`4`}[e]),style:e=>{e===`vector`?(cr||$(`0`),(X===7||X===8)&&$(`2`)):e===`pixel`?$(`7`):e===`toon`&&$(`8`)},city:()=>$(`C`),shuffle:()=>$(`G`),weather:()=>$(`W`),season:()=>$(`K`),office:()=>$(`o`),time:e=>U.goTo(e),auto:()=>$(`9`)};Ft({controls:Ir,state:()=>({cam:{4:`persp`,5:`iso`,6:`dimetric`}[H.mode],style:X===7?`pixel`:X===8?`toon`:`vector`,auto:U.auto,t:U.t,weather:q.kind,season:yn,office:Y!==`city`}),show:R.get(`ui`)!==`0`&&!R.has(`capture`),coarse:window.matchMedia&&window.matchMedia(`(pointer: coarse)`).matches});var Lr=R.get(`cam`);Lr&&[`iso`,`dimetric`,`persp`].includes(Lr)&&Ir.cam(Lr);var Rr=R.get(`style`);[`vector`,`pixel`,`toon`].includes(Rr)&&Ir.style(Rr);var zr=R.get(`t`);zr!==null&&zr!==``&&!Number.isNaN(parseFloat(zr))&&U.goTo(parseFloat(zr));var Br=R.get(`time`);Br&&U.goTo({dawn:.25,noon:.5,dusk:.75,night:0}[Br]??.5);var Vr=R.get(`weather`);[`clear`,`rain`,`snow`,`fog`].includes(Vr)&&(q.setKind(Vr),window.__weather=q.kind),R.get(`office`)===`1`&&(Y=`office`,$n=1,window.__scene=Y),Nr(),window.addEventListener(`resize`,()=>{H.setViewport(window.innerWidth,window.innerHeight),z.setSize(window.innerWidth,window.innerHeight);let e=z.getDrawingBufferSize(new O);sn.setSize(e.x,e.y),Tn.setSize(e.x,e.y),En.setSize(e.x,e.y),Dn.setSize(e.x,e.y),On.setSize(e.x,e.y),Xn.setSize(e.x,e.y),Zn.setSize(e.x,e.y),J.camera.aspect=window.innerWidth/window.innerHeight,J.camera.updateProjectionMatrix(),dn.uniforms.uResolution.value.set(e.x,e.y),Mn.uniforms.uResolution.value.set(e.x,e.y),Ln.uniforms.uResolution.value.set(e.x,e.y),zn.uniforms.uResolution.value.set(e.x,e.y),Gn.uniforms.uResolution.value.set(e.x,e.y)});