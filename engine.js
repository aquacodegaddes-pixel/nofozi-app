/* ===== Calculation engine (no UI) ===== */
const TU={s:1/3600,min:1/60,h:1},DU={mm:1,cm:10,m:1000},RU={'mm/h':1,'cm/h':10,'m/s':3.6e6};
function lin(rows,fs){let a=0,b=0,c=0,d=0,e=0;for(const r of rows){const[u,v]=fs(r.x);a+=u*u;b+=u*v;c+=v*v;d+=u*r.y;e+=v*r.y}
 const det=a*c-b*b;if(!isFinite(det)||Math.abs(det)<1e-12*a*c)throw new Error('e_det');return[(d*c-e*b)/det,(a*e-b*d)/det]}
function pw(d,ys){if(ys.some(y=>!(y>0)))throw new Error('e_pos');
 const[l,q]=lin(d.map((o,k)=>({x:Math.log(o.t),y:Math.log(ys[k])})),x=>[1,x]);return[Math.exp(l),q]}
const M={
scs:{n:'SCS',P:['a','b'],X:['c'],eqZ:'Z(t) = a·t<sup>b</sup> + c',eqI:'i(t) = a·b·t<sup>b−1</sup>',ls:'log',
 u:(d,t)=>({a:`${d}/${t}<sup>b</sup>`,b:'—',c:d}),
 Z:(t,p)=>p.a*t**p.b+p.c,I:(t,p)=>p.a*p.b*t**(p.b-1),
 fit(ot,d,p){if(ot==='Z'){const[P,q]=pw(d,d.map(o=>o.v-p.c));return{a:P,b:q}}
  const[P,q]=pw(d,d.map(o=>o.v)),b=q+1;if(Math.abs(b)<1e-9)throw new Error('e_b0');return{a:P/b,b}}},
phil:{n:'Philip',P:['S','A'],X:[],eqZ:'Z(t) = S·√t + A·t',eqI:'i(t) = S / (2√t) + A',ls:'lin',
 u:(d,t)=>({S:`${d}/${t}<sup>1/2</sup>`,A:`${d}/${t}`}),
 Z:(t,p)=>p.S*Math.sqrt(t)+p.A*t,I:(t,p)=>p.S/(2*Math.sqrt(t))+p.A,
 fit(ot,d){const[S,A]=lin(d.map(o=>({x:o.t,y:o.v})),ot==='Z'?t=>[Math.sqrt(t),t]:t=>[1/(2*Math.sqrt(t)),1]);return{S,A}}},
kos:{n:'Kostiakov',P:['k','al'],X:[],eqZ:'Z(t) = k·t<sup>α</sup>',eqI:'i(t) = k·α·t<sup>α−1</sup>',ls:'log',
 u:(d,t)=>({k:`${d}/${t}<sup>α</sup>`,al:'—'}),
 Z:(t,p)=>p.k*t**p.al,I:(t,p)=>p.k*p.al*t**(p.al-1),
 fit(ot,d){if(ot==='Z'){const[P,q]=pw(d,d.map(o=>o.v));return{k:P,al:q}}
  const[P,q]=pw(d,d.map(o=>o.v)),al=q+1;if(Math.abs(al)<1e-9)throw new Error('e_b0');return{k:P/al,al}}}};
const SYM={a:'a',b:'b',c:'c',S:'S',A:'A',k:'k',al:'α'};
if(typeof module!=='undefined')module.exports={TU,DU,RU,lin,pw,M,SYM};
