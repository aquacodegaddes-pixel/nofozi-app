/* ===== i18n ===== */
const T={fa:{app:'محاسبات نفوذ آب در خاک',sub:'طراحی سیستم آبیاری سطحی',newc:'شروع محاسبه‌ی جدید',myp:'پروژه‌های من',guide:'راهنما',
 bc_home:'صفحه‌ی اصلی',bc_types:'محاسبه‌ی جدید',bc_model:'مدل و روش',bc_input:'ورود داده‌ها',bc_results:'نتایج',bc_report:'گزارش',bc_projects:'پروژه‌های من',bc_guide:'راهنما',
 pickType:'نوع محاسبه را انتخاب کنید',infil:'نفوذ خاک',chooseModel:'مدل نفوذ',chooseMethod:'روش محاسبه',known:'پارامترها معلوم‌اند',fit:'تخمین پارامترها از داده‌ها',cont:'ادامه',back:'بازگشت',
 units:'واحدها',tU:'زمان',dU:'عمق',rU:'نرخ نفوذ',times:'زمان‌های موردنظر',timesH:'با فاصله یا ویرگول جدا کنید، مثلاً 5, 15, 60',obsType:'نوع داده‌ی ورودی',obsZ:'عمق تجمعی نفوذ',obsI:'نرخ نفوذ',
 dataH:'حداقل دو مشاهده با زمان‌های متفاوت',add:'افزودن ردیف',rowT:'زمان',rowV:'مقدار',range:'بازه‌ی نمودار',t0:'شروع',t1:'پایان',n:'تعداد نقاط',
 check:'بررسی',calc:'محاسبه',ready:'داده‌ها آماده‌ی محاسبه‌اند',nData:'تعداد داده‌ها',method:'روش',
 e_num:'عدد معتبر وارد کنید.',e_row:'در ردیف‌ها زمان باید مثبت و مقدار عددی باشد.',e_min2:'حداقل دو مشاهده لازم است.',e_dist:'زمان‌ها باید متفاوت باشند.',e_time:'زمان‌ها باید اعداد مثبت باشند.',e_range:'بازه معتبر نیست (شروع > 0 و پایان بزرگ‌تر).',e_n:'تعداد نقاط: عدد صحیح بین 2 و 500.',
 e_pos:'مقادیر (پس از کسر c) باید مثبت باشند، چون از لگاریتم استفاده می‌شود.',e_det:'داده‌ها برای تخمین کافی یا مستقل نیستند.',e_b0:'توان برابر صفر شد؛ داده‌ها با این فرم سازگار نیستند.',e_inf:'در این بازه مقدار نامعتبر به‌دست آمد.',
 mainRes:'نتیجه‌ی اصلی',par:'پارامتر',val:'مقدار',unit:'واحد',charts:'نمودارها',table:'جدول نتایج',steps:'مشاهده‌ی مراحل محاسبه',
 print:'چاپ گزارش / ذخیره PDF',printOnly:'چاپ / ذخیره PDF',edit:'ویرایش ورودی‌ها',newCalc:'محاسبه‌ی جدید',save:'ذخیره در پروژه',nameP:'نام پروژه',saved:'ذخیره شد.',noProj:'هنوز پروژه‌ای ذخیره نشده است.',open:'باز کردن',del:'حذف',backRes:'بازگشت به نتایج',
 rep:'گزارش محاسبات نفوذ آب در خاک',date:'تاریخ',mExact:'روش: حل دقیق با دو مشاهده.',mLS:'روش: کمترین مربعات',onLog:'در فضای لگاریتمی',onLin:'خطی',obsN:'مشاهده',obsData:'داده‌های ورودی',
 mod:'منحنی مدل',obs:'داده‌های آزمایشگاهی',timeAx:'زمان',rateT:'نرخ نفوذ بر حسب زمان',depthT:'عمق تجمعی بر حسب زمان',depAx:'عمق تجمعی',rateAx:'نرخ نفوذ',atT:'در زمان',
 st1:'۱. ورودی‌ها به واحد پایه (ساعت، میلی‌متر) تبدیل و پس از محاسبه به واحد انتخابی برگردانده می‌شوند.',st2:'۲. معادله‌ها: ',st3:'۳. پارامترها در جدول بالا و مقادیر جدول نتایج با همین معادله‌ها به‌دست آمده‌اند.',
 note_scs:'فرم SCS مطابق تعریف شما پیاده‌سازی شده؛ با جزوه‌ی استاد تطبیق دهید.',note_phil:'زمان صفر مجاز نیست.',note_kos:'نرخ نفوذ مشتق عمق تجمعی است.',
 p_a:'a — ضریب',p_b:'b — توان',p_c:'c — عمق ثابت (معلوم)',p_S:'S — ضریب جذب (sorptivity)',p_A:'A — جمله‌ی خطی',p_k:'k — ضریب',p_al:'α — توان',
 gd:['در «شروع محاسبه‌ی جدید» نوع محاسبه، مدل و روش را انتخاب کنید.','«پارامترها معلوم‌اند»: ضرایب را وارد کنید و نرخ و عمق نفوذ را در زمان‌های دلخواه بگیرید.','«تخمین پارامترها»: داده‌های آزمایشگاهی را وارد کنید؛ با دو نقطه حل دقیق و با بیشتر از دو نقطه برازش انجام می‌شود.','ضرایب بر حسب واحدهای زمان و عمقی که انتخاب می‌کنید تعریف می‌شوند.','در «پروژه‌های من» محاسبه‌های ذخیره‌شده (در همین مرورگر) را می‌بینید.']},
en:{app:'Soil Infiltration Calculator',sub:'Surface irrigation system design',newc:'Start new calculation',myp:'My projects',guide:'Guide',
 bc_home:'Home',bc_types:'New calculation',bc_model:'Model & method',bc_input:'Data entry',bc_results:'Results',bc_report:'Report',bc_projects:'My projects',bc_guide:'Guide',
 pickType:'Choose the calculation type',infil:'Soil infiltration',chooseModel:'Infiltration model',chooseMethod:'Calculation method',known:'Known parameters',fit:'Estimate parameters from data',cont:'Continue',back:'Back',
 units:'Units',tU:'Time',dU:'Depth',rU:'Infiltration rate',times:'Times of interest',timesH:'Separate with spaces or commas, e.g. 5, 15, 60',obsType:'Input data type',obsZ:'Cumulative infiltration',obsI:'Infiltration rate',
 dataH:'At least two observations at different times',add:'Add row',rowT:'Time',rowV:'Value',range:'Chart range',t0:'Start',t1:'End',n:'Points',
 check:'Check',calc:'Calculate',ready:'Data are ready to calculate',nData:'Data points',method:'Method',
 e_num:'Enter a valid number.',e_row:'Each row needs a positive time and a numeric value.',e_min2:'At least two observations are required.',e_dist:'Times must be different.',e_time:'Times must be positive numbers.',e_range:'Invalid range (start > 0, end greater).',e_n:'Points: an integer between 2 and 500.',
 e_pos:'Values (after subtracting c) must be positive because logarithms are used.',e_det:'The data are insufficient or not independent.',e_b0:'The exponent came out as zero; the data do not fit this form.',e_inf:'An invalid value occurred in this range.',
 mainRes:'Main result',par:'Parameter',val:'Value',unit:'Unit',charts:'Charts',table:'Results table',steps:'Show calculation steps',
 print:'Print report / Save PDF',printOnly:'Print / Save PDF',edit:'Edit inputs',newCalc:'New calculation',save:'Save to project',nameP:'Project name',saved:'Saved.',noProj:'No saved projects yet.',open:'Open',del:'Delete',backRes:'Back to results',
 rep:'Soil Infiltration Calculation Report',date:'Date',mExact:'Method: exact solution from two observations.',mLS:'Method: least squares',onLog:'in log space',onLin:'linear',obsN:'observations',obsData:'Input data',
 mod:'Model curve',obs:'Laboratory data',timeAx:'Time',rateT:'Infiltration rate vs. time',depthT:'Cumulative infiltration vs. time',depAx:'Cumulative infiltration',rateAx:'Infiltration rate',atT:'At time',
 st1:'1. Inputs are converted to base units (hours, millimetres) and the results converted back to your chosen units.',st2:'2. Equations: ',st3:'3. Parameters in the table above and the values in the results table come from these equations.',
 note_scs:'The SCS form follows your definition; check it against the course notes.',note_phil:'Zero time is not allowed.',note_kos:'Infiltration rate is the derivative of cumulative infiltration.',
 p_a:'a — coefficient',p_b:'b — exponent',p_c:'c — constant depth (known)',p_S:'S — sorptivity',p_A:'A — linear term',p_k:'k — coefficient',p_al:'α — exponent',
 gd:['Under “Start new calculation” choose the calculation type, model and method.','“Known parameters”: enter the coefficients and get rate and depth at the times you need.','“Estimate parameters”: enter lab data; two points give an exact solution, more points a least-squares fit.','Coefficients are defined with the time and depth units you select.','“My projects” lists calculations saved in this browser.']}};
Object.assign(T.fa,{pn:'پروژه‌ی جدید',wfl:'جبهه‌ی رطوبت (نمایشی)',close:'بستن',inst:'نصب برنامه',need:'ابتدا مراحل قبل را کامل کنید.'});
Object.assign(T.en,{pn:'New project',wfl:'Wetting front (illustrative)',close:'Close',inst:'Install app',need:'Complete the previous steps first.'});
let lang='fa';try{lang=localStorage.getItem('lang')||'fa'}catch(e){}
const t=k=>T[lang][k]??k;
/* ===== helpers & state ===== */
const B=document.body,$=s=>document.querySelector(s),TM=(f,m)=>setTimeout(f,m),NS='http://www.w3.org/2000/svg',R=Math.random;
const norm=s=>String(s).replace(/[۰-۹]/g,d=>'۰۱۲۳۴۵۶۷۸۹'.indexOf(d)).replace(/[٠-٩]/g,d=>'٠١٢٣٤٥٦٧٨٩'.indexOf(d)).replace(/٫/g,'.');
const num=s=>{s=norm(s).trim();return s===''?NaN:Number(s)};
const fmt=x=>String(Number(x.toPrecision(5)));
const S0=()=>({model:null,method:null,tu:'min',du:'mm',ru:'mm/h',p:{},times:'',ot:'Z',rows:[{t:'',v:''},{t:'',v:''},{t:'',v:''}],t0:'1',t1:'240',n:'25',err:{},snap:null});
let S=S0(),busy=false,cur=0,dp=null;
const PS=[...document.querySelectorAll('.pn')],DEP=['0–10','10–20','20–30','30–40'];
function prep(){
 const m=M[S.model],fit=S.method==='fit',E={},tf=TU[S.tu],df=DU[S.du],rf=RU[S.ru];
 const toR=v=>v*df/tf/rf,fromR=v=>v*rf*tf/df,p={};
 for(const k of(fit?m.X:m.P.concat(m.X))){const v=num(S.p[k]??'');if(!isFinite(v))E['p_'+k]=t('e_num');else p[k]=v}
 let obs=[],raw=[],tl=[];
 if(fit){S.rows.forEach(r=>{if(r.t===''&&r.v==='')return;const a=num(r.t),b=num(r.v);if(!(a>0)||!isFinite(b)){E.data=t('e_row');return}obs.push({t:a,v:S.ot==='I'?fromR(b):b});raw.push([a,b])});
  if(!E.data&&obs.length<2)E.data=t('e_min2');else if(!E.data&&new Set(obs.map(o=>o.t)).size<2)E.data=t('e_dist')}
 else{tl=norm(S.times).split(/[\s;,،]+/).filter(Boolean).map(Number);if(tl.some(x=>!(x>0)))E.times=t('e_time')}
 const t0=num(S.t0),t1=num(S.t1),n=num(S.n);
 if(!(t0>0)||!(t1>t0))E.t0=t('e_range');if(!Number.isInteger(n)||n<2||n>500)E.n=t('e_n');
 if(Object.keys(E).length){S.err=E;return null}
 let fi=null;
 try{if(fit){Object.assign(p,m.fit(S.ot,obs,p));
   const f=S.ot==='Z'?m.Z:m.I,sse=obs.reduce((s,o)=>s+(o.v-f(o.t,p))**2,0),N=obs.length,mean=obs.reduce((s,o)=>s+o.v,0)/N,sst=obs.reduce((s,o)=>s+(o.v-mean)**2,0),rm=Math.sqrt(sse/N);
   fi={n:N,rmse:S.ot==='I'?fmt(toR(rm))+' '+S.ru:fmt(rm)+' '+S.du,r2:sst>0?fmt(1-sse/sst):'—'}}
  if(!Object.values(p).every(isFinite))throw new Error('e_det');
  const ev=x=>({t:x,I:toR(m.I(x,p)),Z:m.Z(x,p)}),curve=[];
  for(let i=0;i<n;i++)curve.push(ev(t0+(t1-t0)*i/(n-1)));
  const rows=tl.length?tl.map(ev):curve;
  if(curve.concat(rows).some(r=>!isFinite(r.I)||!isFinite(r.Z)))throw new Error('e_inf');
  const inp=JSON.parse(JSON.stringify({model:S.model,method:S.method,tu:S.tu,du:S.du,ru:S.ru,p:S.p,times:S.times,ot:S.ot,rows:S.rows,t0:S.t0,t1:S.t1,n:S.n}));
  return{model:S.model,method:S.method,tu:S.tu,du:S.du,ru:S.ru,ot:S.ot,p,fi,raw,obs:obs.map(o=>({t:o.t,v:o.v})),curve,rows,date:new Date().toISOString(),inp}
 }catch(x){S.err={data:t(x.message)};return null}}

/* ===== charts & results ===== */
function chart(sn,key,ti,yl,pts){const W=460,H=250,L=58,Rr=14,Tp=28,Bt=42,xs=sn.curve.map(r=>r.t),x0=xs[0],x1=xs[xs.length-1];
 pts=(pts||[]).filter(p=>p.x>=x0&&p.x<=x1);const ymax=Math.max(...sn.curve.map(r=>r[key]),...pts.map(p=>p.y),1e-9)*1.08;
 const X=v=>L+(v-x0)/(x1-x0)*(W-L-Rr),Y=v=>H-Bt-v/ymax*(H-Bt-Tp);let g='';
 for(let i=0;i<=4;i++){const vy=ymax*i/4,vx=x0+(x1-x0)*i/4;g+=`<path class="gd" d="M${L} ${Y(vy)}H${W-Rr}"/><text x="${L-6}" y="${Y(vy)+4}" text-anchor="end">${fmt(vy)}</text><text x="${X(vx)}" y="${H-Bt+16}" text-anchor="middle">${fmt(vx)}</text>`}
 return `<svg class="chart" viewBox="0 0 ${W} ${H}" role="img" aria-label="${ti}" style="direction:ltr"><text x="${W/2}" y="14" text-anchor="middle" style="font-weight:700">${ti}</text>${g}<path class="ax" d="M${L} ${Tp}V${H-Bt}H${W-Rr}" fill="none"/><polyline class="cv" points="${sn.curve.map(r=>X(r.t).toFixed(1)+','+Y(r[key]).toFixed(1)).join(' ')}"/>${pts.map(p=>`<circle class="pt" cx="${X(p.x).toFixed(1)}" cy="${Y(p.y).toFixed(1)}" r="4.5"/>`).join('')}<text x="${(L+W-Rr)/2}" y="${H-6}" text-anchor="middle">${t('timeAx')} (${sn.tu})</text><text x="8" y="${Tp-8}">${yl}</text></svg>`}
function resultHTML(sn,rep){const m=M[sn.model],u=m.u(sn.du,sn.tu),fit=sn.method==='fit',r0=sn.rows[0];
 const toR=v=>v*DU[sn.du]/TU[sn.tu]/RU[sn.ru];
 const tiles=fit?m.P.map(k=>`<div><small>${SYM[k]}</small><b>${fmt(sn.p[k])}</b></div>`).join(''):`<div><small>${t('atT')} (${sn.tu})</small><b>${fmt(r0.t)}</b></div><div><small>i (${sn.ru})</small><b>${fmt(r0.I)}</b></div><div><small>Z (${sn.du})</small><b>${fmt(r0.Z)}</b></div>`;
 const info=!fit?'':sn.fi.n===2?`<p class="note">${t('mExact')}</p>`:`<p class="note">${t('mLS')} (${t(m.ls==='log'?'onLog':'onLin')}) · ${sn.fi.n} ${t('obsN')} · RMSE = ${sn.fi.rmse} · R² = ${sn.fi.r2}</p>`;
 const pr=m.P.concat(m.X).map(k=>`<tr><td>${t('p_'+k)}</td><td class="eq">${fmt(sn.p[k])}</td><td class="eq">${u[k]}</td></tr>`).join('');
 const od=fit?`<h3>${t('obsData')} — ${t(sn.ot==='Z'?'obsZ':'obsI')}</h3><table><tr><th>${t('rowT')} (${sn.tu})</th><th>${t('rowV')} (${sn.ot==='Z'?sn.du:sn.ru})</th></tr>${sn.raw.map(r=>`<tr><td>${fmt(r[0])}</td><td>${fmt(r[1])}</td></tr>`).join('')}</table>`:'';
 const po=fit?sn.obs.map(o=>({x:o.t,y:sn.ot==='I'?toR(o.v):o.v})):null;
 return `<div class="tiles">${tiles}</div><div class="eq">${m.eqZ}<br>${m.eqI}</div><table><tr><th>${t('par')}</th><th>${t('val')}</th><th>${t('unit')}</th></tr>${pr}</table>${info}${od}
 ${chart(sn,'I',t('rateT'),`${t('rateAx')} (${sn.ru})`,fit&&sn.ot==='I'?po:null)}${chart(sn,'Z',t('depthT'),`${t('depAx')} (${sn.du})`,fit&&sn.ot==='Z'?po:null)}
 <details${rep?' open':''}><summary>${t('table')}</summary><div class="wrap"><table><tr><th>${t('timeAx')} (${sn.tu})</th><th>i (${sn.ru})</th><th>Z (${sn.du})</th></tr>${sn.rows.map(r=>`<tr><td>${fmt(r.t)}</td><td>${fmt(r.I)}</td><td>${fmt(r.Z)}</td></tr>`).join('')}</table></div></details>
 <details${rep?' open':''}><summary>${t('steps')}</summary><p>${t('st1')}</p><p>${t('st2')}</p><div class="eq">${m.eqZ}<br>${m.eqI}</div><p>${t('st3')}</p></details>`}
/* ===== panels ===== */
const er=k=>S.err[k]?`<div class="err">${S.err[k]}</div>`:'';
const hd=i=>`<div class="eb">${'ABCD'[i]} · ${DEP[i]} cm · ${t('wfl')} <span class="wfv">${i*10}.0</span> cm</div>`;
const sel=(k,o)=>`<select onchange="setU('${k}',this.value)">${o.map(x=>`<option${x===S[k]?' selected':''}>${x}</option>`).join('')}</select>`;
const fld=k=>`<div><label>${t('p_'+k)} <small>[${M[S.model].u(S.du,S.tu)[k]}]</small></label><input value="${S.p[k]??''}" inputmode="decimal" oninput="S.p['${k}']=this.value">${er('p_'+k)}</div>`;
const back=n=>`<button class="bk" onclick="${n}">${t('back')}</button>`;
function cardA(){return hd(0)+`<h2>${t('chooseModel')}</h2>`+Object.keys(M).map(k=>`<button class="opt" onclick="pickM('${k}')"><b>${M[k].n}</b><div class="eq">${M[k].eqZ}</div></button>`).join('')+back('home()')}
function cardB(){return hd(1)+`<h2>${t('chooseMethod')}</h2>`+['known','fit'].map(k=>`<button class="opt" onclick="pickR('${k}')"><b>${t(k)}</b></button>`).join('')+back('set(0)')}
function cardC(){const m=M[S.model];if(!m||!S.method)return hd(2)+`<h2>${t('bc_input')}</h2><p>${t('need')}</p>`+back('set(1)');
 const fit=S.method==='fit';let h=hd(2)+`<h2>${m.n} · ${t(S.method)}</h2><div class="eq">${m.eqZ}<br>${m.eqI}</div><p class="note">${t('note_'+S.model)}</p>
 <div class="g3"><div><label>${t('tU')}</label>${sel('tu',Object.keys(TU))}</div><div><label>${t('dU')}</label>${sel('du',Object.keys(DU))}</div><div><label>${t('rU')}</label>${sel('ru',Object.keys(RU))}</div></div>
 <div class="g2">${(fit?m.X:m.P.concat(m.X)).map(fld).join('')}</div>`;
 if(!fit)h+=`<label>${t('times')} (${S.tu})</label><input value="${S.times}" placeholder="5, 15, 60" oninput="S.times=this.value"><div class="note">${t('timesH')}</div>${er('times')}`;
 else h+=`<label>${t('obsType')}</label><select onchange="S.ot=this.value;renderC()"><option value="Z"${S.ot==='Z'?' selected':''}>${t('obsZ')} (${S.du})</option><option value="I"${S.ot==='I'?' selected':''}>${t('obsI')} (${S.ru})</option></select><label>${t('dataH')}</label><table><tr><th>${t('rowT')} (${S.tu})</th><th>${t('rowV')} (${S.ot==='Z'?S.du:S.ru})</th><th></th></tr>${S.rows.map((r,i)=>`<tr><td><input value="${r.t}" inputmode="decimal" oninput="S.rows[${i}].t=this.value"></td><td><input value="${r.v}" inputmode="decimal" oninput="S.rows[${i}].v=this.value"></td><td><button class="x" aria-label="×" onclick="S.rows.splice(${i},1);renderC()">×</button></td></tr>`).join('')}</table>${er('data')}<button class="bk" onclick="S.rows.push({t:'',v:''});renderC()">+ ${t('add')}</button>`;
 h+=`<details${S.err.t0||S.err.n?' open':''}><summary>${t('range')}</summary><div class="g3"><div><label>${t('t0')} (${S.tu})</label><input value="${S.t0}" inputmode="decimal" oninput="S.t0=this.value">${er('t0')}</div><div><label>${t('t1')}</label><input value="${S.t1}" inputmode="decimal" oninput="S.t1=this.value"></div><div><label>${t('n')}</label><input value="${S.n}" inputmode="numeric" oninput="S.n=this.value">${er('n')}</div></div></details>${!fit?er('data'):''}
 <div class="row"><button class="bk" onclick="set(1)">${t('back')}</button><button class="btn p" onclick="calc()">${t('calc')}</button></div>`;return h}
function cardD(){const sn=S.snap;if(!sn)return hd(3)+`<h2>${t('mainRes')}</h2><p>${t('need')}</p>`+back('set(2)');
 return hd(3)+`<h2>${t('mainRes')}</h2>`+resultHTML(sn,false)+`<div class="row"><button class="btn p" onclick="openReport()">${t('print')}</button><button class="btn" onclick="set(2)">${t('edit')}</button></div><div class="row" style="margin-top:10px"><input id="pnm" placeholder="${t('nameP')}"><button class="btn" onclick="saveProj()">${t('save')}</button></div><div id="pm" class="note"></div><button class="bk" onclick="newProj()">${t('pn')}</button>`}
const renderC=()=>{$('#cd2').innerHTML=cardC()},renderD=()=>{$('#cd3').innerHTML=cardD()};
function renderPanels(){$('#cd0').innerHTML=cardA();$('#cd1').innerHTML=cardB();renderC();renderD()}
function pickM(k){S.model=k;S.p={};S.snap=null;renderC();renderD();set(1)}
function pickR(m){S.method=m;S.snap=null;renderC();renderD();set(2)}
function setU(k,v){S[k]=v;renderC()}
function calc(){S.err={};const sn=prep();if(!sn){renderC();return}S.snap=sn;renderD();set(3)}
/* ===== projects, report, overlays ===== */
const loadProj=()=>{try{return JSON.parse(localStorage.getItem('infil_projects')||'[]')}catch(e){return[]}};
function saveProj(){const n=($('#pnm').value||'').trim()||M[S.snap.model].n;try{const l=loadProj();l.unshift({id:Date.now(),name:n,snap:S.snap});localStorage.setItem('infil_projects',JSON.stringify(l.slice(0,50)));$('#pm').textContent=t('saved')}catch(e){$('#pm').textContent='⚠'}}
function renderProj(){const l=loadProj();$('#plist').innerHTML=l.length?l.map(x=>`<div class="pi"><div><b>${x.name.replace(/</g,'&lt;')}</b><div class="note">${M[x.snap.model].n} · ${new Date(x.snap.date).toLocaleDateString(lang==='fa'?'fa-IR':'en-GB')}</div></div><div><button class="bk" onclick="openProj(${x.id})">${t('open')}</button><button class="bk" onclick="delProj(${x.id})">${t('del')}</button></div></div>`).join(''):`<p>${t('noProj')}</p>`}
function delProj(id){try{localStorage.setItem('infil_projects',JSON.stringify(loadProj().filter(x=>x.id!==id)))}catch(e){}renderProj()}
function jump(n){B.classList.add('nt','fl','op1','op2','op3','in','gone');void B.offsetWidth;B.classList.remove('nt');mark(n);act(n)}
function openProj(id){const it=loadProj().find(x=>x.id===id);if(!it)return;S=Object.assign(S0(),JSON.parse(JSON.stringify(it.snap.inp)),{snap:it.snap});renderPanels();closeOv();B.classList.contains('in')?set(3):jump(3)}
function openOv(id){if(id==='ovp')renderProj();else{$('#glist').innerHTML=t('gd').map(x=>`<li>${x}</li>`).join('')}$('#'+id).classList.add('on')}
function closeOv(){document.querySelectorAll('.ov').forEach(o=>o.classList.remove('on'))}
function openReport(){const sn=S.snap;if(!sn)return;$('#report').innerHTML=`<div class="noprint row"><button class="btn p" onclick="print()">${t('printOnly')}</button><button class="btn" onclick="closeReport()">${t('backRes')}</button></div><h1>${t('rep')}</h1><p class="note">${t('date')}: ${new Date(sn.date).toLocaleDateString(lang==='fa'?'fa-IR':'en-GB')} · ${M[sn.model].n} · ${t(sn.method)} · ${sn.tu} / ${sn.du} / ${sn.ru}</p>`+resultHTML(sn,true);$('#report').classList.add('on');B.classList.add('pr')}
function closeReport(){$('#report').classList.remove('on');B.classList.remove('pr')}
/* ===== language ===== */
function applyLang(){document.documentElement.lang=lang;document.documentElement.dir=lang==='fa'?'rtl':'ltr';document.title=t('app');
 document.querySelectorAll('[data-t]').forEach(e=>e.textContent=t(e.dataset.t));document.querySelectorAll('[data-al]').forEach(e=>e.setAttribute('aria-label',t(e.dataset.al)));
 document.querySelectorAll('.lang button').forEach(b=>b.classList.toggle('on',b.dataset.l===lang));renderPanels();renderProj();if($('#report').classList.contains('on'))openReport()}
function setLang(l){lang=l;try{localStorage.setItem('lang',l)}catch(e){}applyLang()}
/* ===== scene flow & motion ===== */
function mark(n){cur=n;$('#tr').style.setProperty('--i',n);document.querySelectorAll('.rail i').forEach((e,i)=>e.classList.toggle('a',i===n));$('#dpl').textContent=DEP[n]+' cm'}
function act(n){PS.forEach(p=>p.classList.remove('act'));TM(()=>{void B.offsetWidth;PS[n].classList.add('act')},700)}
function set(n){mark(n);act(n);const d=$('#drip');d.classList.remove('go');void d.offsetWidth;d.classList.add('go')}
function start(){if(busy)return;busy=true;mark(0);B.classList.add('fl','op1');TM(()=>B.classList.add('sp'),800);TM(()=>B.classList.add('op2'),2100);TM(()=>B.classList.add('op3'),3200);TM(()=>{B.classList.add('in');act(0)},3900);TM(()=>{B.classList.add('gone');busy=false},4600)}
function home(){if(busy)return;busy=true;PS.forEach(p=>p.classList.remove('act'));B.classList.remove('in');TM(()=>{B.classList.add('nt');B.classList.remove('gone','op1','op2','op3','sp','fl');void B.offsetWidth;B.classList.remove('nt');busy=false},750)}
function newProj(){S=S0();renderPanels();home()}
const sp=$('#spray');for(let i=0;i<64;i++){const sx=362+R()*76,dx=(R()*2-1)*330,land=Math.abs(sx+dx-400)<205?645:962,e=document.createElementNS(NS,'ellipse');e.setAttribute('cx',sx);e.setAttribute('cy',176);e.setAttribute('rx',2);e.setAttribute('ry',5);e.style.setProperty('--dx',dx+'px');e.style.setProperty('--dy',(land-176)+'px');e.style.setProperty('--t',(1.1+R()*.6)+'s');e.style.animationDelay=(R()*1.4)+'s';sp.appendChild(e)}
document.querySelectorAll('.fr').forEach(f=>{for(let i=0;i<18;i++){const b=document.createElement('i');b.className='bb';b.style.cssText='left:'+(5+R()*90)+'%;top:'+(R()*80)+'%;--s:'+(4+R()*5)+'px;--d:'+(20+R()*25)+'vh;animation-duration:'+(14+R()*14)+'s;animation-delay:-'+(R()*20)+'s';f.appendChild(b)}for(let i=0;i<9;i++){const b=document.createElement('b');b.className='sk';b.style.cssText='left:'+(4+R()*92)+'%;top:'+(40+R()*50)+'%;height:'+(10+R()*16)+'vh;animation-duration:'+(18+R()*10)+'s;animation-delay:-'+(R()*20)+'s';f.appendChild(b)}});
document.querySelectorAll('.wet').forEach(w=>{for(let i=0;i<4;i++){const d=document.createElement('i');d.className='fd';d.style.cssText='left:'+(34+R()*32)+'%;animation-delay:'+(i*.9)+'s';w.appendChild(d)}});
setInterval(()=>{PS.forEach((p,i)=>{const v=p.querySelector('.wfv');if(!v)return;let f=0;if(p.classList.contains('act')){const m=new DOMMatrixReadOnly(getComputedStyle(p.querySelector('.fr')).transform);f=Math.min(10,Math.max(0,m.f/p.clientHeight*10))}v.textContent=(i*10+f).toFixed(1)})},500);
/* ===== boot ===== */
addEventListener('beforeinstallprompt',e=>{e.preventDefault();dp=e;$('#inst').style.display='inline-block'});
document.querySelectorAll('.lang button').forEach(b=>b.onclick=()=>setLang(b.dataset.l));
$('#inst').onclick=()=>{if(dp)dp.prompt()};
addEventListener('keydown',e=>{if(e.key==='Escape'){closeOv();closeReport()}});
mark(0);applyLang();
if('serviceWorker' in navigator&&/^https?:/.test(location.protocol))navigator.serviceWorker.register('sw.js').catch(()=>{});
