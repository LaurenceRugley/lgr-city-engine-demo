import{i as e,o as t,r as n,s as r,t as i}from"./pixelkit-D63EwDii.js";import{A as a,B as o,C as s,D as c,E as l,F as u,G as d,H as f,I as p,K as m,L as h,M as g,N as _,O as v,P as y,R as b,S as x,T as S,V as C,W as ee,_ as w,a as T,b as E,c as D,d as O,h as k,i as A,j as te,k as ne,l as j,m as re,n as ie,o as ae,p as oe,q as M,r as se,s as ce,t as le,u as ue,v as de,w as N,x as fe,y as pe,z as P}from"./three-KxJj4d3c.js";var me=Math.atan(1/Math.SQRT2),he=Math.atan(.5),ge=Math.PI/4,F={PERSPECTIVE:4,ISOMETRIC:5,DIMETRIC:6},_e=.12,ve=1.45,ye=4,be=40,xe=1.5,Se=16,Ce=6,we=22,Te=3.5,Ee=11,I=(e,t,n)=>e+(t-e)*(1-Math.exp(-8*n)),De=(e,t)=>e+Math.PI*2*Math.round((t-e)/(Math.PI*2));function Oe({aspect:e,fov:t=48,near:n=.1,far:r=100,target:i=new m(0,.8,0),azimuth:a=ge,elevation:o=.52,distance:s=12,zoom:c=5.5}={}){let l=new _(t,e,n,r),u=new te(-1,1,1,-1,n,r),d=F.PERSPECTIVE,f=e,p={azimuth:a,elevation:o,distance:s,zoom:c,target:i.clone()},h={azimuth:a,elevation:o,distance:s,zoom:c,target:i.clone()},g=!1,v=()=>d===F.PERSPECTIVE?l:u;function y(e){e!==d&&(d=e,d===F.ISOMETRIC||d===F.DIMETRIC?(p.elevation=d===F.ISOMETRIC?me:he,p.azimuth=De(ge,h.azimuth),g=!0):g=!1)}function b(e,t){p.azimuth+=e,g||(p.elevation=N.clamp(p.elevation+t,_e,ve))}function x(e){d===F.PERSPECTIVE?p.distance=N.clamp(p.distance*e,ye,be):p.zoom=N.clamp(p.zoom*e,xe,Se)}function S(e,t){let n=p.azimuth,r=d===F.PERSPECTIVE?p.distance*.04:p.zoom*.08,i=new m(Math.cos(n),0,-Math.sin(n)),a=new m(-Math.sin(n),0,-Math.cos(n));p.target.addScaledVector(i,e*r),p.target.addScaledVector(a,t*r)}function C(e,t){f=e/t,l.aspect=f,l.updateProjectionMatrix()}function ee(e){h.azimuth=I(h.azimuth,p.azimuth,e),h.elevation=I(h.elevation,p.elevation,e),h.distance=I(h.distance,p.distance,e),h.zoom=I(h.zoom,p.zoom,e),h.target.x=I(h.target.x,p.target.x,e),h.target.y=I(h.target.y,p.target.y,e),h.target.z=I(h.target.z,p.target.z,e);let t=Math.cos(h.elevation),n=Math.sin(h.elevation),r=Math.cos(h.azimuth),i=Math.sin(h.azimuth),a=v();if(a.position.set(h.target.x+h.distance*t*i,h.target.y+h.distance*n,h.target.z+h.distance*t*r),a.lookAt(h.target),a.isOrthographicCamera){let e=h.zoom,t=e*f;a.left=-t,a.right=t,a.top=e,a.bottom=-e,a.updateProjectionMatrix()}}return{get camera(){return v()},get mode(){return d},get styleT(){return d===F.PERSPECTIVE?N.clamp((h.distance-Ce)/(we-Ce),0,1):N.clamp((h.zoom-Te)/(Ee-Te),0,1)},setMode:y,orbit:b,zoomBy:x,pan:S,setViewport:C,update:ee}}var ke={value:0},Ae=new j(`#ffffff`),je=`
  varying vec3 vVecN;
  varying vec3 vVecP;
  uniform float uVector;
  uniform vec3  uVecTint;
  vec3 vecShade(vec3 base){
    vec3 n = normalize(vVecN);
    float up  = step(0.5, n.y);                         // up-facing → top tier
    vec3  sun = normalize(vec3(0.55, 0.0, -0.83));      // fixed, art-directed "sun side"
    float lit = step(0.25, dot(normalize(vec3(n.x, 0.0, n.z) + 1e-4), sun));
    float tier = mix(0.58, 0.82, lit);                  // shade vs sun-side
    tier = mix(tier, 1.0, up);                          // top overrides → brightest
    return base * tier * uVecTint;
  }
`;function Me(e){e.uniforms.uVector=ke,e.uniforms.uVecTint={value:Ae}}function Ne(e){return e.replace(`#include <common>`,`#include <common>
varying vec3 vVecN;
varying vec3 vVecP;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
  vVecN = normal;
  vVecP = position;`)}function Pe(e,{color:t,id:n,windowGlow:r,winColors:i=[`#ffb852`,`#8cd9ff`],litFrac:a=.55}={}){let o=[0,1,2].map(e=>new j(i[e]??i[i.length-1]));return e.onBeforeCompile=e=>{Me(e),e.uniforms.uWindowGlow=r,e.uniforms.uWinId={value:n},e.uniforms.uVecColor={value:new j(t)},e.uniforms.uWinA={value:o[0]},e.uniforms.uWinB={value:o[1]},e.uniforms.uWinC={value:o[2]},e.uniforms.uWinLit={value:a},e.vertexShader=Ne(e.vertexShader),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
        uniform float uWindowGlow;
        uniform float uWinId;
        uniform vec3  uVecColor;
        uniform vec3  uWinA; uniform vec3 uWinB; uniform vec3 uWinC;
        uniform float uWinLit;
        ${je}
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
          vec3 wcol; vec2 w = winTerms(wcol);
          vec3 glass = vec3(0.17, 0.23, 0.34);          // dark glass-blue panes (day)
          col = mix(col, glass, w.x * 0.85);
          col += w.x * w.y * wcol * uWindowGlow * 1.5;  // …and they light up at night
          gl_FragColor = vec4(col, diffuseColor.a);
        }`)},e}function L(e,{color:t=null,glow:n=null,glowDay:r=0,glowNight:i=1,windowGlow:a=null}={}){let o=t===null,s=n!==null&&a!==null;return e.onBeforeCompile=e=>{Me(e),o||(e.uniforms.uVecColor={value:new j(t)}),s&&(e.uniforms.uGlow={value:new j(n)},e.uniforms.uGlowDay={value:r},e.uniforms.uGlowNight={value:i},e.uniforms.uWindowGlow=a),e.vertexShader=Ne(e.vertexShader);let c=o?`diffuseColor.rgb`:`uVecColor`,l=(o?``:`uniform vec3 uVecColor;
`)+(s?`uniform vec3 uGlow; uniform float uGlowDay; uniform float uGlowNight; uniform float uWindowGlow;
`:``),u=s?`uGlow * mix(uGlowDay, uGlowNight, uWindowGlow)`:`vec3(0.0)`,d=e.fragmentShader.replace(`#include <common>`,`#include <common>
`+l+je).replace(`#include <opaque_fragment>`,`#include <opaque_fragment>
        if (uVector > 0.5) gl_FragColor = vec4(vecShade(${c}) + ${u}, diffuseColor.a);`);s&&(d=d.replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>\n  totalEmissiveRadiance += ${u};`)),e.fragmentShader=d},e}function Fe(e){let t=e>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Ie(e){let t=Fe(e);return{next:t,range:(e,n)=>e+(n-e)*t(),int:(e,n)=>e+Math.floor(t()*(n-e+1)),pick:e=>e[Math.floor(t()*e.length)],chance:e=>t()<e}}var Le=[{key:`manhattan`,name:`Manhattan`,towers:[`#EDE3C8`,`#D9B98A`,`#B5562F`,`#A8C8E8`,`#2E3F5C`],ground:`#7CC455`,street:`#9AA0A6`,sidewalk:`#C8CCD0`,park:`#5DB347`,water:`#29A8D8`,shopfronts:[`#C04A3A`,`#3A7AC0`,`#C09A2A`],glass:`#7FA8CC`,winColors:[`#ffd27a`,`#9ad6ff`],hMax:4.6,sigma:.36,roofRate:.35,pSplit:.6,nightLit:.55,roofTint:null,landmarks:[`empireState`,`chrysler`,`liberty`]},{key:`paris`,name:`Paris`,towers:[`#E8DCC0`,`#F2EAD6`,`#E0D2B4`],ground:`#8CC46A`,street:`#A8A29A`,sidewalk:`#D4CEC2`,park:`#6DB35A`,water:`#3FA8C8`,shopfronts:[`#C04A3A`,`#3A6B5A`,`#7A5AC0`],glass:`#5A6B7A`,winColors:[`#ffdca0`,`#ffcaa0`],hMax:1.5,sigma:.9,roofRate:.15,pSplit:.75,nightLit:.45,roofTint:`#6A7886`,landmarks:[`eiffel`,`arcDeTriomphe`,`sacreCoeur`]},{key:`neoTokyo`,name:`Neo-Tokyo`,towers:[`#2A3038`,`#3A4250`,`#252B36`,`#4A4456`],ground:`#3A4A42`,street:`#5A6068`,sidewalk:`#7A8088`,park:`#2E5E46`,water:`#0E6878`,shopfronts:[`#E8483A`,`#5AE8E0`,`#E85AA0`],glass:`#5AE8E0`,winColors:[`#5AE8E0`,`#E85AA0`,`#E8E06A`],hMax:5.2,sigma:.42,roofRate:.6,pSplit:.6,nightLit:.7,roofTint:null,landmarks:[`tokyoTower`,`pagoda`,`neonBillboard`]}],Re=Le.map(e=>e.key),R=.3,ze=1.9,Be=2.45,Ve=.12,He=.6;function Ue(e){(Array.isArray(e)?e:[e]).forEach(e=>e&&e.dispose&&e.dispose())}function We({seed:e=1,profileIndex:t=0,landmarkFactory:n=null,windowGlow:r}){let i=new w,a=new w,o=new w;a.raycast=()=>{},o.raycast=()=>{},i.add(a,o);let s=new re(16773594,3);s.position.set(.45,.6,-.65).multiplyScalar(10);let u=new pe(7313331,2762272,1);i.add(s,u);let d=0,p=[],m={seed:e,profileIndex:t,profile:Le[t],extent:0,meshCount:0};function h(e,t,n,r){let i=new l(new A(e,.04,t),L(new v({color:r,roughness:.95,flatShading:!0}),{color:r}));return i.position.y=n,i}function g(e,t){for(let e of a.children)e.geometry&&e.geometry.dispose(),Ue(e.material);a.clear();for(let e of o.children)e.traverse(e=>{e.isMesh&&Ue(e.material)});o.clear(),p.length=0,d=0;let r=Ie(e),i=Le[t],s=4/2*Be,c=6.45;m={seed:e,profileIndex:t,profile:i,extent:c,meshCount:0};let u=c*2,f=new l(new A(u,2,u),L(new v({color:i.ground,roughness:.9,flatShading:!0}),{color:i.ground}));f.position.y=R-1,a.add(f),a.add(h(u-He,u-He,.32,i.street));let g=[];for(let e=0;e<5;e++)for(let t=0;t<5;t++)g.push([e,t]);let S=new Set,C=Math.max(1,Math.round(g.length*.08));for(;S.size<C;)S.add(r.int(0,g.length-1));let ee=r.range(-2.45*.6,Be*.6),w=r.range(-2.45*.6,Be*.6),T=Math.hypot(s,s),E=[];if(g.forEach(([e,t],n)=>{let o=(e-4/2)*Be,s=(t-4/2)*Be;if(a.add(h(ze,ze,.32999999999999996,i.sidewalk).translateX(o).translateZ(s)),S.has(n)){a.add(h(ze-Ve*2,ze-Ve*2,.35,i.park).translateX(o).translateZ(s));let e=r.int(3,5);for(let t=0;t<e;t++)x(o+r.range(-.6,.6),s+r.range(-.6,.6),i,r);return}let c=ze-Ve*2,l=r.chance(i.pSplit)?2:1,u=r.chance(i.pSplit)?2:1,d=c/l,f=c/u;for(let e=0;e<l;e++)for(let t=0;t<u;t++){let n=o-c/2+d*(e+.5),a=s-c/2+f*(t+.5),l=Math.max(.6,d-.1),u=Math.max(.6,f-.1),p=Math.hypot(n-ee,a-w)/T,m=Math.exp(-(p*p)/(2*i.sigma*i.sigma)),h=Math.max(.5,.5+(i.hMax-.5)*m*r.range(.75,1.25));h>i.hMax*.5&&Math.min(l,u)>=.7&&E.push({lx:n,lz:a,fw:l,fd:u,h,r:p}),_(n,a,l,u,h,i,r)}}),n&&n.ready){E.sort((e,t)=>e.r-t.r);let e=[],t=i.landmarks;for(let r=0;r<t.length&&E.length;r++){let a=null;for(let t of E)if(e.every(e=>Math.hypot(e.lx-t.lx,e.lz-t.lz)>Be*.9)){a=t;break}a||=E[0],e.push(a),y(a.lx,a.lz);let s=i.hMax*n.heightFactor(t[r]),c=n.make(t[r],{x:a.lx,z:a.lz,w:a.fw,d:a.fd,h:s,plinthTop:R});if(c){o.add(c);let e=new se().setFromObject(c);b(e.min.x-.15,e.max.x+.15,e.min.z-.15,e.max.z+.15)}}}m.meshCount=a.children.length+o.children.length;let D=0;for(let e of a.children){let t=e.position;D=(Math.imul(D,16777619)^(Math.round(t.x*100)*2654435761^Math.round(t.y*100)*40503^Math.round(t.z*100)*2246822519))>>>0}m.sig=D,window.__city={seed:e,profile:i.key,meshes:m.meshCount,sig:D}}function _(e,t,n,i,o,s,u){let m=Pe(new v({flatShading:!0,roughness:.7,metalness:.05}),{color:u.pick(s.towers),id:++d,windowGlow:r,winColors:s.winColors,litFrac:s.nightLit}),h=new l(new A(n,o,i),m);if(h.position.set(e,R+o/2,t),h.userData.lot=[e,t],a.add(h),s.roofTint){let r=L(new v({color:s.roofTint,roughness:.85,flatShading:!0}),{color:s.roofTint}),c=new l(new A(n*1.02,.08,i*1.02),r);c.position.set(e,R+o+.04,t),c.userData.lot=[e,t],a.add(c)}if(o<1.4){let r=u.pick(s.shopfronts),o=new l(new A(n*1.04,.18,i*1.04),L(new v({color:r,roughness:.8,flatShading:!0}),{color:r}));o.position.set(e,.39,t),o.userData.lot=[e,t],a.add(o)}if(o>s.hMax*.45&&u.chance(s.roofRate)){let r=u.chance(.5)?new l(new A(n*.4,.18,i*.4),L(new v({color:`#9a9a9a`,flatShading:!0}),{color:`#9a9a9a`})):new l(new O(n*.18,n*.18,.22,10),L(new v({color:`#b9bec4`,flatShading:!0}),{color:`#b9bec4`}));if(r.position.set(e+u.range(-.1,.1),R+o+.11,t+u.range(-.1,.1)),r.userData.lot=[e,t],a.add(r),u.chance(.25)){let n=new l(new f(.05,6,5),new c({color:`#ff3b30`,transparent:!0,opacity:1}));n.position.set(e,R+o+.26,t),n.userData.lot=[e,t],n.raycast=()=>{},a.add(n),p.push({mesh:n,phase:u.range(0,6.28)})}}}function y(e,t){for(let n=a.children.length-1;n>=0;n--){let r=a.children[n];r.userData.lot&&Math.abs(r.userData.lot[0]-e)<1e-4&&Math.abs(r.userData.lot[1]-t)<1e-4&&(r.geometry&&r.geometry.dispose(),Ue(r.material),a.remove(r))}for(let e=p.length-1;e>=0;e--)p[e].mesh.parent||p.splice(e,1)}function b(e,t,n,r){for(let i=a.children.length-1;i>=0;i--){let o=a.children[i];o.userData.lot&&o.position.x>=e&&o.position.x<=t&&o.position.z>=n&&o.position.z<=r&&(o.geometry&&o.geometry.dispose(),Ue(o.material),a.remove(o))}}function x(e,t,n,r){let i=new j(n.park),o=(n,o)=>{let s=i.clone().offsetHSL(0,0,r.range(-.06,.06)).getStyle(),c=new l(new f(n,7,6),L(new v({color:s,flatShading:!0}),{color:s}));c.scale.y=.7,c.position.set(e,R+o,t),c.userData.lot=null,a.add(c)},s=new l(new A(.05,.18,.05),L(new v({color:`#6b4a2a`,flatShading:!0}),{color:`#6b4a2a`}));s.position.set(e,.39,t),a.add(s),o(.22,.28),o(.16,.46)}function S(e){for(let t of p)t.mesh.material.opacity=.35+.65*(.5+.5*Math.sin(e*3+t.phase))}return g(e,t),{group:i,key:s,fill:u,update:S,generate:g,get state(){return m},get extent(){return m.extent},get waterColor(){return m.profile.water},profiles:Le}}var Ge=Math.PI*2,Ke=.7,qe=90,Je=[{name:`night`,sun:`#4a6f9e`,intensity:.35,hemiSky:`#26344f`,hemiGround:`#0c1018`,horizon:`#1e2942`,sky:`#36486e`,exposure:.95,outline:`#101a30`,window:1,toonGain:2.6},{name:`dawn`,sun:`#ff9e54`,intensity:2.4,hemiSky:`#8a7686`,hemiGround:`#2a1f1a`,horizon:`#b8512c`,sky:`#ffb070`,exposure:1.05,outline:`#241826`,window:.3,toonGain:2},{name:`noon`,sun:`#fff4e0`,intensity:4.6,hemiSky:`#9cb8cc`,hemiGround:`#33302a`,horizon:`#5e7689`,sky:`#aacadd`,exposure:1.18,outline:`#0b0a08`,window:0,toonGain:1.7},{name:`dusk`,sun:`#ff6b35`,intensity:2,hemiSky:`#7a566a`,hemiGround:`#281a18`,horizon:`#b0432a`,sky:`#ff8a5a`,exposure:1.05,outline:`#1f1420`,window:.4,toonGain:2}],Ye=e=>e-Math.floor(e),Xe=(e,t,n)=>e+(t-e)*n,Ze=(e,t,n)=>e+(t-e)*(1-Math.exp(-6*n));function Qe({t:e=.5}={}){let t=e,n=e,r=!1,i=!1,a=Je.map(e=>({name:e.name,sun:new j(e.sun),hemiSky:new j(e.hemiSky),hemiGround:new j(e.hemiGround),horizon:new j(e.horizon),sky:new j(e.sky),outline:new j(e.outline),intensity:e.intensity,exposure:e.exposure,window:e.window,toonGain:e.toonGain})),o=new m(0,1,0),s=new j(`#fff4e0`),c=new j(`#6f97b3`),l=new j(`#2a2620`),u=new j(`#3a4a57`),d=new j(`#7da3bd`),f=new j(`#0b0a08`),p=new j(`#000000`),h=3,g=1,_=0,v=1.7,y=new m;function b(e){let t=Ye(e)*4,n=Math.floor(t)%4,r=(n+1)%4,i=t-Math.floor(t),m=a[n],b=a[r];s.lerpColors(m.sun,b.sun,i),c.lerpColors(m.hemiSky,b.hemiSky,i),l.lerpColors(m.hemiGround,b.hemiGround,i),u.lerpColors(m.horizon,b.horizon,i),d.lerpColors(m.sky,b.sky,i),f.lerpColors(m.outline,b.outline,i),h=Xe(m.intensity,b.intensity,i),g=Xe(m.exposure,b.exposure,i),_=Xe(m.window,b.window,i),v=Xe(m.toonGain,b.toonGain,i),p.setRGB(.045*_,.075*_,.14*_);let x=Ye(e)*Ge-Math.PI/2,S=Math.cos(x),C=Math.sin(x);y.set(S,C*Math.cos(Ke),C*Math.sin(Ke)),y.y>=0?o.copy(y):o.copy(y).negate()}return b(t),{sunDir:o,sunColor:s,hemiSky:c,hemiGround:l,horizon:u,sky:d,outline:f,toonFloor:p,get sunIntensity(){return h},get exposure(){return g},get windowGlow(){return _},get toonGain(){return v},get t(){return Ye(t)},get auto(){return r},get clock(){let e=Math.round(Ye(t)*24*60)%1440;return`${String(Math.floor(e/60)).padStart(2,`0`)}:${String(e%60).padStart(2,`0`)}`},cyclePreset(){n=(Math.floor(t*4+1e-4)+1)/4},nudge(e){n+=e/24},goTo(e){n=e},toggleAuto(){r=!r},setReducedMotion(e){i=e},update(e){r&&!i&&(n+=e/qe),t=Ze(t,n,e),b(t)}}}function $e(e,t){let n=[];for(let r=0;r<16;r++){let i=r/16*Math.PI*2;n.push(new m(Math.cos(i)*e,t,Math.sin(i)*e))}return new ce(n,!0,`catmullrom`,.5)}function et(e,t){let n=new o;return n.moveTo(-e+t,-e),n.lineTo(e-t,-e),n.quadraticCurveTo(e,-e,e,-e+t),n.lineTo(e,e-t),n.quadraticCurveTo(e,e,e-t,e),n.lineTo(-e+t,e),n.quadraticCurveTo(-e,e,-e,e-t),n.lineTo(-e,-e+t),n.quadraticCurveTo(-e,-e,-e+t,-e),n}function tt(e,t,n){let r=et(e,t).getSpacedPoints(40).map(e=>new m(e.x,n,e.y));return r.pop(),new ce(r,!0,`catmullrom`,.5)}function nt(e){let t=(t,n)=>Math.exp(-((e-t)*(e-t))/(2*n*n)),n=Math.max(t(.33,.05),t(.75,.06)),r=N.smoothstep(e,.24,.3)*(1-N.smoothstep(e,.8,.88));return N.clamp(.15+.55*r+.45*n,.12,1)}function rt(e,t){let n=(e/8.5+t*.43)%1;return n<.66?1:n<.72?1-(n-.66)/.06:n<.95?0:(n-.95)/.05}function it({plinthTop:e=.3,extent:t=4}={}){let n=new w,r=e,i=et(t-.05,.7);i.holes.push(et(t-.78,.45));let o=new l(new C(i),L(new v({color:`#1b1d22`,roughness:.95,metalness:0}),{color:`#bcc0c6`}));o.rotation.x=-Math.PI/2,o.position.y=r+.01,n.add(o);let s=[tt(t-.28,.6,r+.02),tt(t-.5,.55,r+.02)],u=[0,0],d=new E(new A(.42,.32,.86),L(new v({flatShading:!0,roughness:.45,metalness:.35})),7);d.castShadow=!1,d.frustumCulled=!1,d.raycast=()=>{};let f={taxi:`#f4c430`,bus:`#c0392b`,civ1:`#d8dde2`,civ2:`#9aa7b4`,civ3:`#6b7785`},p=[];for(let e=0;e<7;e++){let t=e===1,n=e===0;p.push({lane:e%2,phase:e/7,speed:t?.55:.85+e%3*.12,lenZ:t?1.5:1,color:n?f.taxi:t?f.bus:[f.civ1,f.civ2,f.civ3][e%3]})}let h=new j;p.forEach((e,t)=>d.setColorAt(t,h.set(e.color)));let g=new E(new ae(.04,.1,3,6),L(new v({flatShading:!0,roughness:.8})),16);g.frustumCulled=!1,g.raycast=()=>{};let _=$e(t-.72,e),b=[];for(let e=0;e<16;e++)b.push({phase:e/16,speed:.12+e%4*.02,dir:e%2?1:-1});let x=new j;b.forEach((e,t)=>g.setColorAt(t,x.set([`#caa`,`#9ab`,`#bba`,`#ab9`][t%4])));let S=new y(1,.6),ee=new c({color:`#fff0c0`,transparent:!0,opacity:1,blending:2,depthWrite:!1}),T=new E(S,ee,7);T.frustumCulled=!1,T.raycast=()=>{},n.add(d,g,T);let D=new a,O=new m,k=new m;function te(t,n,i){let a=i?i.t:.5,o=i?i.windowGlow:0;for(let e=0;e<s.length;e++)u[e]+=t*rt(n,e);let c=Math.max(1,Math.round(nt(a)*7));for(let e=0;e<7;e++){let t=p[e];if(e>=c){D.scale.setScalar(0),D.position.set(0,-50,0),D.updateMatrix(),d.setMatrixAt(e,D.matrix),T.setMatrixAt(e,D.matrix);continue}let n=t.lane===0?1:-1,i=(t.phase+n*t.speed*u[t.lane]*.12+1e3)%1;s[t.lane].getPointAt(i,O),s[t.lane].getTangentAt(i,k);let a=Math.atan2(k.x*n,k.z*n);D.position.set(O.x,O.y+.16,O.z),D.rotation.set(0,a,0),D.scale.set(1,1,t.lenZ),D.updateMatrix(),d.setMatrixAt(e,D.matrix),s[t.lane].getPointAt((i+n*.012+1)%1,O),D.position.set(O.x,r+.04,O.z),D.rotation.set(-Math.PI/2,0,a),D.scale.setScalar(+(o>.05)),D.updateMatrix(),T.setMatrixAt(e,D.matrix)}d.instanceMatrix.needsUpdate=!0,T.instanceMatrix.needsUpdate=!0,ee.opacity=N.clamp(o*1.7,0,1);let l=Math.max(2,Math.round(nt(a)*16));for(let t=0;t<16;t++){let r=b[t];if(t>=l){D.scale.setScalar(0),D.position.set(0,-50,0),D.updateMatrix(),g.setMatrixAt(t,D.matrix);continue}let i=(r.phase+r.dir*r.speed*n*.02+1e3)%1;_.getPointAt(i,O),_.getTangentAt(i,k);let a=Math.sin(n*6+r.phase*30)*.015;D.position.set(O.x,e+.09+a,O.z),D.rotation.set(0,Math.atan2(k.x*r.dir,k.z*r.dir),Math.sin(n*6+r.phase*30)*.06),D.scale.setScalar(1),D.updateMatrix(),g.setMatrixAt(t,D.matrix)}g.instanceMatrix.needsUpdate=!0}return{group:n,update:te}}var at=[`empireState`,`chrysler`,`liberty`,`eiffel`,`arcDeTriomphe`,`sacreCoeur`,`tokyoTower`,`pagoda`,`neonBillboard`],ot={empireState:1.25,chrysler:1.1,liberty:.55,eiffel:3.2,arcDeTriomphe:1.5,sacreCoeur:1.75,tokyoTower:1.35,pagoda:.5,neonBillboard:.9};function st(e){let t=()=>new v({flatShading:!0,roughness:.7,metalness:.1}),n=(n,r={})=>r.windows?Pe(t(),{color:n,id:e.id(),windowGlow:e.windowGlow,winColors:e.winColors,litFrac:e.litFrac}):L(t(),{color:n,glow:r.glow??null,glowDay:r.glowDay??0,glowNight:r.glowNight??1,windowGlow:r.glow?e.windowGlow:null});return{box:(e,t,r,i,a={})=>new l(new A(e,t,r),n(i,a)),cyl:(e,t,r,i,a={})=>new l(new O(e,t,r,a.seg||12),n(i,a)),cone:(e,t,r,i={})=>new l(new ue(e,t,i.seg||8),n(r,i)),sphere:(e,t,r={})=>new l(new f(e,r.seg||12,r.seg2||8),n(t,r)),lathe:(e,t,r={})=>new l(new fe(e.map(e=>new d(e[0],e[1])),r.seg||4),n(t,r))}}var z=(e,t,n,r)=>(e.position.set(t,n,r),e),ct=[`#7FB0E0`,`#E07FB0`,`#7FE0A0`,`#E0C97F`,`#9FE07F`,`#7FE0E0`,`#FF8C42`,`#E0E07F`,`#C97FE0`,`#E07F7F`,`#7F9FE0`,`#E0483A`],lt={empireState(e,t){let n=`#E8E0CF`;e.add(z(t.box(.42,.18,.42,n,{windows:!0}),0,.09,0)),e.add(z(t.box(.34,.16,.34,n,{windows:!0}),0,.26,0)),e.add(z(t.box(.26,.14,.26,n,{windows:!0}),0,.41,0)),e.add(z(t.box(.19,.34,.19,n,{windows:!0}),0,.65,0)),e.add(z(t.box(.13,.06,.13,n,{windows:!0}),0,.85,0));let r=ct[new Date().getMonth()];e.add(z(t.cyl(.03,.045,.12,n,{seg:10,glow:r,glowNight:1.85}),0,.94,0)),e.add(z(t.cone(.012,.07,n,{seg:8}),0,1.04,0))},chrysler(e,t){let n=`#C9CED4`;e.add(z(t.box(.22,.55,.22,`#9AA7B4`,{windows:!0}),0,.275,0));let r=.55;for(let i=0;i<5;i++){let a=.14-i*.024,o=.07;e.add(z(t.cyl(a*.7,a,o,n,{seg:8,glow:`#dfeaff`,glowNight:.5}),0,r+o/2,0)),r+=o}e.add(z(t.cone(.018,.16,n,{seg:8}),0,r+.08,0))},liberty(e,t){let n=`#B9B4A6`,r=`#4FA890`;e.add(z(t.box(.42,.16,.42,n),0,.08,0)),e.add(z(t.box(.3,.2,.3,n),0,.26,0)),e.add(z(t.cyl(.1,.15,.42,r,{seg:10}),0,.57,0)),e.add(z(t.box(.11,.1,.11,r),0,.83,0));for(let n=0;n<7;n++){let i=(n/6-.5)*Math.PI*1.1;e.add(z(t.cone(.012,.1,r,{seg:5}),Math.sin(i)*.1,.92,Math.cos(i)*.06-.02))}let i=z(t.cyl(.025,.03,.34,r,{seg:8}),.14,.98,0);i.rotation.z=.35,e.add(i),e.add(z(t.box(.06,.06,.06,r,{glow:`#ffd060`,glowDay:.6,glowNight:1.2}),.2,1.16,0)),e.add(z(t.cone(.04,.09,`#ffcf66`,{seg:6,glow:`#ffd060`,glowDay:.7,glowNight:1.3}),.2,1.24,0))},eiffel(e,t){let n=`#6E5C4C`,r=[[.2,0],[.13,.16],[.085,.33],[.055,.5],[.035,.66],[.02,.85],[0,.92]];e.add(t.lathe(r,n,{seg:4}));let i=t.lathe(r,n,{seg:4});i.rotation.y=Math.PI/4,e.add(i),e.add(z(t.box(.26,.025,.26,n),0,.33,0)),e.add(z(t.box(.14,.02,.14,n),0,.66,0)),e.add(z(t.cone(.01,.1,n,{seg:6}),0,.97,0))},arcDeTriomphe(e,t){let n=`#D9D0C1`,r=.58,i=.5,a=.34,s=new o;s.moveTo(-.58/2,0),s.lineTo(r/2,0),s.lineTo(r/2,i),s.lineTo(-.58/2,i),s.lineTo(-.58/2,0);let c=new g,u=.15,d=.22;c.moveTo(-.15,0),c.lineTo(-.15,d),c.absarc(0,d,u,Math.PI,0,!0),c.lineTo(u,0),c.lineTo(-.15,0),s.holes.push(c);let f=new k(s,{depth:a,bevelEnabled:!1});f.translate(0,0,-.34/2),f.computeVertexNormals(),e.add(new l(f,L(new v({color:n,flatShading:!0}),{color:n}))),e.add(z(t.box(r*1.06,.08,a*1.06,n),0,.54,0))},sacreCoeur(e,t){let n=`#F1EEE6`;e.add(z(t.box(.5,.26,.4,n),0,.13,0));let r=(r,i,a,o)=>{e.add(z(t.cyl(a*.9,a,i,n,{seg:12}),r,o,0));let s=z(t.sphere(a,n,{seg:12}),r,o+i/2,0);s.scale.y=1.5,e.add(s)};r(0,.22,.15,.4),r(-.2,.1,.07,.33),r(.2,.1,.07,.33)},tokyoTower(e,t){let n=`#F25822`,r=`#EDEDED`,i=0;for(let a=0;a<9;a++){let o=a/9,s=(a+1)/9,c=.19*(1-o)+.03*o,l=.19*(1-s)+.03*s,u=.085,d=a%2?r:n;e.add(z(t.cyl(l,c,u,d,{seg:4,glow:n,glowDay:0,glowNight:.7}),0,i+u/2,0)),i+=u}e.add(z(t.box(.22,.02,.22,n,{glow:n,glowNight:.7}),0,.28,0)),e.add(z(t.box(.12,.02,.12,r),0,.5,0)),e.add(z(t.cone(.012,.16,r,{seg:6,glow:`#ff6a2a`,glowNight:.9}),0,i+.08,0))},pagoda(e,t){let n=0;for(let r=0;r<5;r++){let i=.42-r*.06,a=.11;e.add(z(t.box(i,a,i,`#B23A2C`,{windows:r<4}),0,n+a/2,0)),e.add(z(t.box(i*1.34,.03,i*1.34,`#7A3B2A`),0,n+a+.015,0)),n+=.16999999999999998}e.add(z(t.cyl(.012,.012,.1,`#E0C040`,{seg:6}),0,n+.05,0)),e.add(z(t.sphere(.03,`#E0C040`,{seg:8,glow:`#ffe680`,glowNight:.8}),0,n+.12,0))},neonBillboard(e,t){let n=`#20242C`;e.add(z(t.box(.3,1,.3,n,{windows:!0}),0,.5,0));let r=[`#5AE8E0`,`#E85AA0`,`#E8E06A`],i=(n,r,i,a,o,s,c)=>{let l=z(t.box(n,r,.02,i,{glow:i,glowDay:.6,glowNight:1.1}),a,o,s);l.rotation.y=c,e.add(l)};i(.22,.34,r[0],0,.75,.16,0),i(.16,.5,r[1],.16,.5,0,Math.PI/2),i(.2,.22,r[2],0,.34,-.16,0),e.add(z(t.cone(.01,.14,n,{seg:6,glow:`#E85AA0`,glowDay:.4,glowNight:1}),0,1.08,0))}};function ut(e,t){let n=new w;return lt[e](n,st(t)),n}var dt=``+new URL(`building-skyscraper-d-CapD2Zqe.glb`,import.meta.url).href,ft=``+new URL(`building-n-hdv8kKtN.glb`,import.meta.url).href,pt=``+new URL(`building-g-CsTB1qH9.glb`,import.meta.url).href,mt=``+new URL(`colormap-CK8fW2HB.png`,import.meta.url).href,ht={skyscraper:{url:dt,color:`#9cc1dd`,fill:.92},midrise:{url:ft,color:`#c9a07a`,fill:.96},setback:{url:pt,color:`#d9c7a0`,fill:.9}};function gt({windowGlow:e}){let t=new s;t.setURLModifier(e=>e.includes(`colormap.png`)?mt:e);let n=new le(t),r={},i=!1,a=Promise.all(Object.entries(ht).map(async([e,t])=>{r[e]=(await n.loadAsync(t.url)).scene})).then(()=>{i=!0,window.__landmarksReady=!0}).catch(e=>console.error(`landmark models failed:`,e)),o=9e3;function c(t,n,i={}){let a,s;if(at.includes(t))a=ut(t,{windowGlow:e,winColors:i.winColors,litFrac:i.litFrac,id:()=>++o}),s=1;else{let e=r[t],n=ht[t];if(!e||!n)return null;a=e.clone(!0),s=n.fill}a.updateMatrixWorld(!0);let c=new se().setFromObject(a).getSize(new m);a.scale.setScalar(n.h*s/c.y),a.updateMatrixWorld(!0);let l=new se().setFromObject(a),u=l.getCenter(new m);return a.position.x+=n.x-u.x,a.position.z+=n.z-u.z,a.position.y+=n.plinthTop-l.min.y,at.includes(t)?a.traverse(e=>{e.isMesh&&(e.castShadow=!1,e.raycast=()=>{})}):a.traverse(n=>{if(!n.isMesh)return;n.castShadow=!1,n.raycast=()=>{};let r=n=>Pe(n.clone(),{color:ht[t].color,id:++o,windowGlow:e,winColors:i.winColors,litFrac:i.litFrac});n.material=Array.isArray(n.material)?n.material.map(r):r(n.material)}),a}return{make:c,whenReady:a,heightFactor:e=>ot[e]??1,get ready(){return i}}}var _t=[`video/mp4;codecs=avc1.42E01E`,`video/mp4`,`video/webm;codecs=vp9`,`video/webm`];function vt({renderer:e,rig:t,sunRig:n,poke:r,getState:i}){let a=e.domElement,o=new URLSearchParams(window.location.search),s=e=>{let t=i();return`lgr-${t.lesson}-${String(t.clock||``).replace(`:`,``)}-${t.style}.${e}`},c=(e,t)=>{let n=URL.createObjectURL(e),r=document.createElement(`a`);r.href=n,r.download=t,document.body.appendChild(r),r.click(),r.remove(),setTimeout(()=>URL.revokeObjectURL(n),1e3)};function l(){a.toBlob(e=>{e&&(c(e,s(`png`)),window.__lastStill=e.size)},`image/png`)}let u=()=>_t.find(e=>window.MediaRecorder&&MediaRecorder.isTypeSupported(e))||``,d=yt(),f=null,p=[],m=!1;function h(){if(m)return;let e=u(),t=a.captureStream(60);f=new MediaRecorder(t,e?{mimeType:e,videoBitsPerSecond:12e6}:{}),p=[],f.ondataavailable=e=>{e.data&&e.data.size&&p.push(e.data)},f.onstop=()=>{let e=new Blob(p,{type:f.mimeType});c(e,s(f.mimeType.includes(`mp4`)?`mp4`:`webm`)),window.__lastVideo=e.size},f.start(),m=!0,window.__recording=!0,d.show()}function g(){m&&(f.stop(),m=!1,window.__recording=!1,d.hide())}let _=()=>m?g():h(),v=e=>new Promise(t=>setTimeout(t,e)),y=e=>window.dispatchEvent(new KeyboardEvent(`keydown`,{key:e}));async function b(){let e=a.clientWidth,t=a.clientHeight,n=e*.26,i=t*.74;for(let t=0;t<=10;t++)r.at(n+t*e*.028,i+Math.sin(t*.7)*16),await v(100);r.stop()}async function x(e){if(e.keys)for(let t of e.keys)y(t),await v(70);e.zoom&&t.zoomBy(e.zoom),e.orbit&&t.orbit(e.orbit[0],e.orbit[1]),e.timeTo!==void 0&&n.goTo(e.timeTo),e.ripple&&await b(),e.waitMs&&await v(e.waitMs)}let S={tour:[{keys:[`6`,`0`],waitMs:600},{zoom:.72,waitMs:1700},{ripple:!0,waitMs:2400},{orbit:[.55,0],waitMs:1700},{timeTo:0,waitMs:3e3},{timeTo:.5,waitMs:1500},{keys:[`7`],waitMs:1e3},{zoom:1.5,waitMs:1400},{keys:[`B`],waitMs:2e3},{keys:[`B`],waitMs:2e3},{keys:[`B`],waitMs:2e3},{keys:[`B`],waitMs:2e3},{keys:[`B`],waitMs:2e3},{keys:[`8`],waitMs:900},{zoom:.65,waitMs:1200},{ripple:!0,waitMs:2600},{keys:[`7`],waitMs:700},{keys:[`B`],waitMs:300},{keys:[`B`],waitMs:900},{zoom:1.4,waitMs:2600}],daycycle:[{keys:[`6`,`0`],waitMs:700},{timeTo:.75,waitMs:2600},{timeTo:1,waitMs:2600},{timeTo:1.25,waitMs:2600},{timeTo:1.5,waitMs:2600},{timeTo:1.5,waitMs:800}],cities:[{keys:[`6`,`0`],waitMs:500},{timeTo:.78,waitMs:2800},{keys:[`C`],waitMs:3e3},{keys:[`C`],waitMs:3e3},{keys:[`C`],waitMs:2e3}]};async function C(e){let t=S[e];if(t){window.__director=e;for(let e of t)await x(e);window.__director=null}}async function ee(e){await v(1600),h(),await C(e),await v(400),g(),window.__captureDone=!0}window.addEventListener(`keydown`,e=>{(e.key===`s`||e.key===`S`)&&l(),(e.key===`r`||e.key===`R`)&&_()});let w=o.get(`capture`);return w&&S[w]&&ee(w),window.__capture={still:l,toggleRec:_,run:C,sequences:Object.keys(S)},window.__capture}function yt(){let e=document.createElement(`div`);return e.textContent=`● REC`,e.style.cssText=`position:fixed;top:14px;right:16px;z-index:2;font:bold 12px ui-monospace,monospace;color:#ff3b30;letter-spacing:.12em;text-shadow:0 1px 3px #000;display:none;`,document.body.appendChild(e),{show:()=>{e.style.display=`block`},hide:()=>{e.style.display=`none`}}}var bt=`varying vec2 vUv;

void main() {
  
  
  
  vUv = uv;

  
  
  
  
  
  
  
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,xt=`precision highp float;

varying vec2 vUv;

uniform float uTime;
uniform vec3  uInk;
uniform vec3  uGold;

void main() {
  
  
  float wave = 0.5 + 0.5 * sin(vUv.x * 3.0 + vUv.y * 2.0 + uTime * 0.3);

  
  
  wave *= 0.6 + 0.4 * sin(vUv.y * 4.0 - uTime * 0.15);

  
  
  vec3 colour = mix(uInk, uGold * 0.5, wave * 0.45);

  gl_FragColor = vec4(colour, 1.0); 
}`,St=`precision highp float;

varying vec2 vUv;

uniform sampler2D uCurr;          
uniform sampler2D uPrev;          
uniform vec2  uTexel;             
uniform vec2  uMouse;             
uniform float uMouseStrength;     
uniform float uC2;                
uniform float uDamping;           

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

  
  gl_FragColor = vec4(next, 0.0, 0.0, 1.0);
}`,Ct=`precision highp float;

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
}`,wt=`precision highp float;

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
}`,Tt=`const float CA_STRENGTH   = 0.0030;  
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
}`,Et=`const float DITHER = 0.55;   

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
}`,Dt=`precision highp float;

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
}`,Ot=`precision highp float;

varying vec2 vUv;
uniform sampler2D uToon;   
uniform sampler2D uPixel;  
uniform float     uBlend;  

void main() {
  vec3 t = texture2D(uToon, vUv).rgb;
  vec3 p = texture2D(uPixel, vUv).rgb;
  gl_FragColor = vec4(mix(t, p, uBlend), 1.0);
}`,kt=220,At=new URLSearchParams(window.location.search),jt=At.get(`demo`)===`1`||At.has(`capture`);window.__demo=jt;var Mt={night:[`#0A0C16`,`#1C2236`,`#3A3A52`,`#5A5A78`,`#8A92B0`],dawn:[`#1A1008`,`#43281A`,`#7A4A30`,`#B07A4E`,`#E8A86A`],noon:[`#16100A`,`#3A2F1E`,`#6B563A`,`#937B54`,`#B89968`],dusk:[`#140A0A`,`#3E1E1A`,`#7A3828`,`#B85A36`,`#F0884A`]},Nt={night:[`#020604`,`#06180E`,`#10401E`,`#1E9040`,`#7FE0FF`],dawn:[`#060603`,`#1A2410`,`#3A6B22`,`#6CC040`,`#FFC060`],noon:[`#050805`,`#0E2912`,`#1E6B2F`,`#3CF06A`,`#FFB000`],dusk:[`#080402`,`#241408`,`#6B4A12`,`#E0A030`,`#FF7030`]},B=new ie({antialias:!0,preserveDrawingBuffer:!0});B.setPixelRatio(Math.min(window.devicePixelRatio,2)),B.setSize(window.innerWidth,window.innerHeight),B.setClearColor(920327,1),document.body.appendChild(B.domElement);var V=B.getDrawingBufferSize(new d),H=new b,U=Oe({aspect:window.innerWidth/window.innerHeight}),W=Qe({t:.5}),G=256,Pt={type:de,format:u,minFilter:ne,magFilter:ne,wrapS:D,wrapT:D,depthBuffer:!1,stencilBuffer:!1},Ft=[new M(G,G,Pt),new M(G,G,Pt),new M(G,G,Pt)];for(let e of Ft)B.setRenderTarget(e),B.clear();B.setRenderTarget(null);var It=new b,Lt=new te(-1,1,1,-1,0,1),Rt=new P({vertexShader:r,fragmentShader:St,uniforms:{uCurr:{value:null},uPrev:{value:null},uTexel:{value:new d(1/G,1/G)},uMouse:{value:new d(-1,-1)},uMouseStrength:{value:0},uC2:{value:.25},uDamping:{value:.992}}});It.add(new l(new y(2,2),Rt));var zt=new M(V.x,V.y,{minFilter:x,magFilter:x,depthBuffer:!0,stencilBuffer:!1});function Bt(e){let t=document.createElement(`canvas`);t.width=t.height=1024;let n=t.getContext(`2d`);n.fillStyle=e?`#0c1418`:`#15110b`,n.fillRect(0,0,1024,1024),n.strokeStyle=e?`rgba(120,150,170,0.22)`:`rgba(184,153,104,0.30)`,n.lineWidth=2;for(let e=0;e<=1024;e+=64)n.beginPath(),n.moveTo(e,0),n.lineTo(e,1024),n.stroke(),n.beginPath(),n.moveTo(0,e),n.lineTo(1024,e),n.stroke();e||(n.fillStyle=`#B89968`,n.font=`bold 360px Georgia, serif`,n.textAlign=`center`,n.textBaseline=`middle`,n.fillText(`LGR`,512,470),n.font=`600 64px ui-monospace, monospace`,n.fillText(`WEB · STUDIO`,512,720));let r=new T(t);return r.colorSpace=h,r}var Vt=new l(new y(16,16),new c({map:Bt(jt)}));Vt.rotation.x=-Math.PI/2,Vt.position.y=-.35,H.add(Vt);var Ht=new l(new y(40,24),new P({depthWrite:!1,vertexShader:bt,fragmentShader:xt,uniforms:{uTime:{value:0},uInk:{value:W.horizon},uGold:{value:W.sky}}}));Ht.position.set(0,3,-8),H.add(Ht);var K=new P({vertexShader:Ct,fragmentShader:wt,uniforms:{uHeight:{value:null},uScene:{value:zt.texture},uTexel:{value:new d(1/G,1/G)},uResolution:{value:new d(V.x,V.y)},uDisplace:{value:.42},uNormalStrength:{value:22},uRefractStrength:{value:.06},uChromaScale:{value:1},uNormalMatrix:{value:new S},uLightDir:{value:W.sunDir},uInk:{value:new j(`#2A2218`)},uGold:{value:new j(`#B89968`)},uVector:ke,uVecWater:{value:new j(`#1fb8d8`)},uVecTint:{value:Ae}}}),q=new l(new y(16,16,G-1,G-1),K);q.rotation.x=-Math.PI/2,q.updateMatrixWorld(!0),K.uniforms.uNormalMatrix.value.getNormalMatrix(q.matrixWorld),H.add(q);var Ut={value:0},Wt=new URLSearchParams(window.location.search),Gt=(Wt.get(`city`)?Number(Wt.get(`city`)):0)||Math.random()*1e9|0,Kt=Math.max(0,Re.indexOf(Wt.get(`profile`)||`manhattan`)),qt=gt({windowGlow:Ut}),J=We({seed:Gt,profileIndex:Kt,landmarkFactory:qt,windowGlow:Ut});H.add(J.group);var Jt=it({plinthTop:.3,extent:J.extent});H.add(Jt.group);function Yt(){J.generate(Gt,Kt),K.uniforms.uVecWater.value.set(J.waterColor),Hn()}qt.whenReady.then(()=>{Yt(),window.__cityReady=!0}),K.uniforms.uVecWater.value.set(J.waterColor);var Xt=new oe(V.x,V.y),Zt=new M(V.x,V.y,{minFilter:x,magFilter:x,depthBuffer:!0,stencilBuffer:!1,depthTexture:Xt}),Qt=new M(V.x,V.y,{minFilter:x,magFilter:x,depthBuffer:!1,stencilBuffer:!1}),$t=new M(V.x,V.y,{minFilter:x,magFilter:x,depthBuffer:!1,stencilBuffer:!1}),en=new M(V.x,V.y,{minFilter:x,magFilter:x,depthBuffer:!1,stencilBuffer:!1}),tn=new b,nn=new te(-1,1,1,-1,0,1),rn=new l(new y(2,2));tn.add(rn);var Y=new P({vertexShader:r,fragmentShader:Tt,uniforms:{uScene:{value:Zt.texture},uTime:{value:0},uResolution:{value:new d(V.x,V.y)},uGrain:{value:1},uChroma:{value:1},uExposure:{value:1}}}),an=5,on=e=>{let t=e.map(e=>new j(e));for(;t.length<8;)t.push(new j(0,0,0));return t},sn=[`night`,`dawn`,`noon`,`dusk`],cn={inkgold:sn.map(e=>on(Mt[e])),terminal:sn.map(e=>on(Nt[e]))},ln=new P({vertexShader:r,fragmentShader:Et,uniforms:{uScene:{value:Qt.texture},uResolution:{value:new d(V.x,V.y)},uPixelSize:{value:kt},uPalette:{value:cn.inkgold[2]},uPaletteB:{value:cn.inkgold[2]},uPaletteBlend:{value:0},uPaletteSize:{value:an}}});function un(e){let t=bn?cn.terminal:cn.inkgold,n=e%1*4,r=Math.floor(n)%4;ln.uniforms.uPalette.value=t[r],ln.uniforms.uPaletteB.value=t[(r+1)%4],ln.uniforms.uPaletteBlend.value=n-Math.floor(n)}var X=new P({vertexShader:r,fragmentShader:t,uniforms:{uScene:{value:Qt.texture},uResolution:{value:new d(V.x,V.y)},uGridWidth:{value:160},uDither:{value:.55},uPalette:{value:e(i[`8-bit`].palette)},uPaletteSize:{value:1},uUsePalette:{value:1}}}),dn={};for(let t of n)dn[t]=i[t].palette?e(i[t].palette):null;var fn=[`native`,...n],Z=`native`;window.__era=Z;function pn(){if(Z===`native`)return;let e=i[Z];X.uniforms.uGridWidth.value=e.gridWidth,X.uniforms.uDither.value=e.dither,X.uniforms.uUsePalette.value=+!!e.palette,e.palette&&(X.uniforms.uPalette.value=dn[Z],X.uniforms.uPaletteSize.value=e.palette.length)}var mn=()=>Z===`native`?ln:X,hn=new P({vertexShader:r,fragmentShader:Dt,uniforms:{uScene:{value:Qt.texture},uDepth:{value:Xt},uResolution:{value:new d(V.x,V.y)},uBands:{value:4},uToonGain:{value:1.7},uToonGamma:{value:.6},uToonFloor:{value:W.toonFloor},uOutline:{value:W.outline},uNear:{value:.1},uFar:{value:100},uIsPerspective:{value:1}}}),gn=new P({vertexShader:r,fragmentShader:Ot,uniforms:{uToon:{value:$t.texture},uPixel:{value:en.texture},uBlend:{value:0}}});function _n(e,t){rn.material=e,B.setRenderTarget(t),B.render(tn,nn)}var vn=.45,yn=.65,Q=3,bn=!1,xn=!1;window.__mode=Q,window.__camMode=U.mode,window.__vector=xn,window.addEventListener(`keydown`,e=>{(e.key===`1`||e.key===`2`||e.key===`3`)&&(Q=Number(e.key),window.__mode=Q),(e.key===`7`||e.key===`8`)&&(Q=Number(e.key),window.__mode=Q),e.key===`4`&&(U.setMode(F.PERSPECTIVE),window.__camMode=U.mode),e.key===`5`&&(U.setMode(F.ISOMETRIC),window.__camMode=U.mode),e.key===`6`&&(U.setMode(F.DIMETRIC),window.__camMode=U.mode),e.key===`ArrowLeft`&&(U.pan(-1,0),e.preventDefault()),e.key===`ArrowRight`&&(U.pan(1,0),e.preventDefault()),e.key===`ArrowUp`&&(U.pan(0,1),e.preventDefault()),e.key===`ArrowDown`&&(U.pan(0,-1),e.preventDefault()),e.key===`0`&&(xn=!xn,ke.value=+!!xn,window.__vector=xn),(e.key===`g`||e.key===`G`)&&(Gt=Math.random()*1e9|0,Yt()),(e.key===`c`||e.key===`C`)&&(Kt=(Kt+1)%Le.length,Yt()),(e.key===`p`||e.key===`P`)&&(bn=!bn),(e.key===`b`||e.key===`B`)&&(Z=fn[(fn.indexOf(Z)+1)%fn.length],window.__era=Z,pn()),(e.key===`t`||e.key===`T`)&&W.cyclePreset(),e.key===`[`&&W.nudge(-.5),e.key===`]`&&W.nudge(.5),e.key===`9`&&(W.toggleAuto(),window.__auto=W.auto)});var Sn=window.matchMedia(`(prefers-reduced-motion: reduce)`);W.setReducedMotion(Sn.matches),Sn.addEventListener(`change`,e=>W.setReducedMotion(e.matches));var Cn=new p,wn=new d,$=!1,Tn=!1,En=0,Dn=0,On=.005,kn=(e,t)=>{wn.x=e/window.innerWidth*2-1,wn.y=-(t/window.innerHeight)*2+1};B.domElement.addEventListener(`contextmenu`,e=>e.preventDefault()),B.domElement.addEventListener(`mousedown`,e=>{e.button===0&&($=!0,kn(e.clientX,e.clientY)),e.button===2&&(Tn=!0,En=e.clientX,Dn=e.clientY)}),window.addEventListener(`mousemove`,e=>{$&&kn(e.clientX,e.clientY),Tn&&(U.orbit(-(e.clientX-En)*On,-(e.clientY-Dn)*On),En=e.clientX,Dn=e.clientY)}),window.addEventListener(`mouseup`,()=>{$=!1,Tn=!1}),B.domElement.addEventListener(`wheel`,e=>{e.preventDefault(),U.zoomBy(Math.exp(e.deltaY*.0015))},{passive:!1});var An=0,jn=(e,t)=>[(e.clientX+t.clientX)/2,(e.clientY+t.clientY)/2],Mn=(e,t)=>Math.hypot(e.clientX-t.clientX,e.clientY-t.clientY);B.domElement.addEventListener(`touchstart`,e=>{e.touches.length===1&&($=!0,kn(e.touches[0].clientX,e.touches[0].clientY)),e.touches.length===2&&($=!1,Tn=!0,[En,Dn]=jn(e.touches[0],e.touches[1]),An=Mn(e.touches[0],e.touches[1]))},{passive:!1}),B.domElement.addEventListener(`touchmove`,e=>{if(e.preventDefault(),e.touches.length===1&&$)kn(e.touches[0].clientX,e.touches[0].clientY);else if(e.touches.length===2){let[t,n]=jn(e.touches[0],e.touches[1]);U.orbit(-(t-En)*On,-(n-Dn)*On),En=t,Dn=n;let r=Mn(e.touches[0],e.touches[1]);An>0&&U.zoomBy(An/r),An=r}},{passive:!1}),window.addEventListener(`touchend`,e=>{$=!1,Tn=!1,An=0,e.touches&&e.touches.length===1&&($=!0)});var Nn=new ee;Nn.connect(document);var Pn=0,Fn=performance.now();function In(){if(Q===1||Q===2)return{kind:`none`};if(Q===7)return{kind:`pixel`};if(Q===8)return{kind:`toon`};let e=U.styleT;return window.__styleT=e,e>=yn?{kind:`pixel`}:e<=vn?{kind:`toon`}:{kind:`blend`,blend:N.smoothstep(e,vn,yn)}}var Ln=jt?null:document.querySelector(`.hint`);if(jt){let e=document.querySelector(`.hint`);e&&(e.style.display=`none`)}var Rn=Ln?Ln.textContent:``,zn=``,Bn=``;function Vn(e){!Ln||e===zn||(zn=e,Ln.textContent=`${Rn} · ${Bn} · ${e}`)}function Hn(){Bn=`seed ${J.state.seed} · ${J.state.profile.name}`,window.__profile=J.state.profile.key,zn=``}Hn();function Un(){Nn.update();let e=Math.min(Nn.getDelta(),.1);U.update(e),Ht.material.uniforms.uTime.value=Nn.getElapsed(),Y.uniforms.uTime.value=Nn.getElapsed(),W.update(e),J.key.position.copy(W.sunDir).multiplyScalar(10),J.key.color.copy(W.sunColor),J.key.intensity=W.sunIntensity,J.fill.color.copy(W.hemiSky),J.fill.groundColor.copy(W.hemiGround),Ut.value=W.windowGlow;let t=1-W.windowGlow;Ae.setRGB(N.lerp(.46,1,t),N.lerp(.52,1,t),N.lerp(.74,1,t)),Y.uniforms.uExposure.value=W.exposure,hn.uniforms.uToonGain.value=W.toonGain,B.setClearColor(W.horizon,1),un(W.t),Vn(W.clock),window.__t=W.t,Jt.update(e,Nn.getElapsed(),W),J.update(Nn.getElapsed());let n=In(),r=n.kind===`toon`?1:n.kind===`blend`?1-n.blend:0;K.uniforms.uChromaScale.value=N.lerp(1,.5,r),Pn++;let i=performance.now();i-Fn>=1e3&&(window.__fps=Pn,Pn=0,Fn=i);let a=0;if($){Cn.setFromCamera(wn,U.camera);let e=Cn.intersectObject(q)[0];e&&e.uv&&(Rt.uniforms.uMouse.value.copy(e.uv),a=.06)}Rt.uniforms.uMouseStrength.value=a;let[o,s,c]=Ft;if(Rt.uniforms.uPrev.value=o.texture,Rt.uniforms.uCurr.value=s.texture,B.setRenderTarget(c),B.render(It,Lt),Ft=[s,c,o],K.uniforms.uHeight.value=Ft[1].texture,q.visible=!1,B.setRenderTarget(zt),B.render(H,U.camera),q.visible=!0,Q===1||xn&&Q!==7&&Q!==8)B.setRenderTarget(null),B.render(H,U.camera);else if(B.setRenderTarget(Zt),B.render(H,U.camera),Q===2)Y.uniforms.uGrain.value=1,Y.uniforms.uChroma.value=1,_n(Y,null);else{Y.uniforms.uGrain.value=0,Y.uniforms.uChroma.value=0,_n(Y,Qt);let e=U.camera;hn.uniforms.uNear.value=e.near,hn.uniforms.uFar.value=e.far,hn.uniforms.uIsPerspective.value=+!!e.isPerspectiveCamera,n.kind===`pixel`?(_n(mn(),null),window.__style=`pixel`):n.kind===`toon`?(_n(hn,null),window.__style=`toon`):(_n(hn,$t),_n(mn(),en),gn.uniforms.uBlend.value=n.blend,_n(gn,null),window.__style=`blend`)}requestAnimationFrame(Un)}var Wn={at:(e,t)=>{kn(e,t),$=!0},stop:()=>{$=!1}};function Gn(){let e=window.__style||(Q===1?`raw`:Q===2?`filmic`:`auto`);return{lesson:15,clock:W.clock,style:(xn?`vec-`:``)+e,profile:J.state.profile.key}}vt({renderer:B,rig:U,sunRig:W,poke:Wn,getState:Gn}),Un(),window.addEventListener(`resize`,()=>{U.setViewport(window.innerWidth,window.innerHeight),B.setSize(window.innerWidth,window.innerHeight);let e=B.getDrawingBufferSize(new d);zt.setSize(e.x,e.y),Zt.setSize(e.x,e.y),Qt.setSize(e.x,e.y),$t.setSize(e.x,e.y),en.setSize(e.x,e.y),K.uniforms.uResolution.value.set(e.x,e.y),Y.uniforms.uResolution.value.set(e.x,e.y),ln.uniforms.uResolution.value.set(e.x,e.y),X.uniforms.uResolution.value.set(e.x,e.y),hn.uniforms.uResolution.value.set(e.x,e.y)});