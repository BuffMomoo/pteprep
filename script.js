/* ============================== DATA ============================== */
const VOCAB=[
 {w:"Meticulous",p:"/məˈtɪk.jə.ləs/ — adjective",d:"Showing great attention to detail; very careful and precise in one's work.",e:"The candidate gave a meticulous response, covering every aspect of the question.",syn:["Precise","Thorough","Painstaking","Scrupulous"],forms:{Adverb:"meticulously",Noun:"meticulousness"},lv:"C1",quiz:{correct:"He kept meticulous records of every transaction.",wrong:["She was meticulous and fell asleep during the lecture.","The meticulous weather made the journey difficult."]}},
 {w:"Ubiquitous",p:"/juːˈbɪk.wɪ.təs/ — adjective",d:"Present, appearing, or found everywhere.",e:"Smartphones have become ubiquitous in modern society.",syn:["Omnipresent","Pervasive","Widespread","Universal"],forms:{Adverb:"ubiquitously",Noun:"ubiquity"},lv:"C1",quiz:{correct:"Free wifi is now ubiquitous in cafes and airports.",wrong:["The ubiquitous rock sat alone in the empty field.","She felt ubiquitous after the long flight."]}},
 {w:"Exacerbate",p:"/ɪɡˈzæs.ə.beɪt/ — verb",d:"To make a problem, bad situation, or negative feeling worse.",e:"The drought was exacerbated by unusually high temperatures.",syn:["Worsen","Aggravate","Intensify","Compound"],forms:{Noun:"exacerbation",Adjective:"exacerbated"},lv:"C1",quiz:{correct:"The committee's decision will exacerbate existing tensions between the two departments.",wrong:["Regular exercise can exacerbate your overall health and wellbeing.","The team worked together to exacerbate the project deadline."]}},
 {w:"Proliferate",p:"/prəˈlɪf.ər.eɪt/ — verb",d:"To grow or increase rapidly in number.",e:"Social media platforms have proliferated rapidly over two decades.",syn:["Multiply","Expand","Burgeon","Mushroom"],forms:{Noun:"proliferation",Adjective:"proliferating"},lv:"B2",quiz:{correct:"Fake news stories have proliferated across social media in recent years.",wrong:["The company proliferated its workforce by ten employees last month.","She proliferated quietly to avoid waking the baby."]}},
 {w:"Ambiguous",p:"/æmˈbɪɡ.ju.əs/ — adjective",d:"Open to more than one interpretation; not having one obvious meaning.",e:"The policy statement was deliberately ambiguous.",syn:["Unclear","Vague","Equivocal","Uncertain"],forms:{Adverb:"ambiguously",Noun:"ambiguity"},lv:"B2",quiz:{correct:"The professor's instructions were ambiguous, leaving students unsure how to proceed.",wrong:["The mathematical proof was completely ambiguous and left no room for doubt.","He gave an ambiguous high-five to celebrate the win."]}},
 {w:"Facilitate",p:"/fəˈsɪl.ɪ.teɪt/ — verb",d:"To make an action or process easier or more achievable.",e:"Technology can facilitate access to education in remote regions.",syn:["Enable","Assist","Ease","Promote"],forms:{Noun:"facilitation",Collocation:"facilitate a discussion / process"},lv:"B2",quiz:{correct:"Online tools can facilitate communication between remote teams.",wrong:["The locked door facilitated his entry into the building.","She facilitated her lunch quickly before the meeting."]}},
 {w:"Mitigate",p:"/ˈmɪt.ɪ.ɡeɪt/ — verb",d:"To make something less severe, serious, or painful.",e:"Governments are investing in technology to mitigate the effects of climate change.",syn:["Reduce","Alleviate","Ease","Lessen"],forms:{Noun:"mitigation",Adjective:"mitigating"},lv:"C1",quiz:{correct:"The new flood barriers were designed to mitigate the risk of property damage.",wrong:["The award ceremony mitigated everyone's excitement about the results.","He mitigated the cake into equal slices for the guests."]}},
 {w:"Cohesive",p:"/kəʊˈhiː.sɪv/ — adjective",d:"Forming a unified whole; closely connected.",e:"A cohesive team with shared goals tends to outperform talented individuals working in isolation.",syn:["Unified","Integrated","Consistent","Coherent"],forms:{Adverb:"cohesively",Noun:"cohesion"},lv:"B2",quiz:{correct:"The essay lacked a cohesive structure, jumping between unrelated ideas.",wrong:["The shattered glass formed a cohesive pile on the floor.","He felt cohesive after running the marathon."]}},
 {w:"Plausible",p:"/ˈplɔː.zə.bəl/ — adjective",d:"Seeming reasonable or probable.",e:"Although the explanation seemed plausible, investigators wanted further evidence.",syn:["Credible","Believable","Reasonable","Feasible"],forms:{Adverb:"plausibly",Noun:"plausibility"},lv:"B2",quiz:{correct:"The witness gave a plausible account of what happened that evening.",wrong:["The plausible theory was immediately dismissed as impossible by every scientist.","She plausible her way through the test by guessing."]}},
 {w:"Conducive",p:"/kənˈdjuː.sɪv/ — adjective",d:"Making a certain situation or outcome likely or possible.",e:"Natural light and minimal noise create an environment that is conducive to concentration.",syn:["Favourable","Beneficial","Helpful","Supportive"],forms:{Collocation:"conducive to (something)"},lv:"C1",quiz:{correct:"A quiet, well-lit room is conducive to effective studying.",wrong:["Loud construction noise outside is highly conducive to concentration.","He conducive the meeting to a close after two hours."]}}
];

const FITB_READING=[
 {parts:["Urban environments are becoming increasingly ",{opts:["dense","sparse","vacant"],a:"dense"}," as rural populations migrate to cities. This ",{opts:["decline","phenomenon","obstacle"],a:"phenomenon"}," places growing pressure on infrastructure and public services. Researchers argue that sustainable urban planning is now ",{opts:["optional","irrelevant","essential"],a:"essential"}," for managing this transition effectively."]},
 {parts:["Despite significant investment, many renewable energy projects remain ",{opts:["dependent","independent","redundant"],a:"dependent"}," on government subsidies to stay commercially viable. Critics argue that this ",{opts:["reliance","abundance","shortage"],a:"reliance"}," distorts the energy market, while supporters maintain that early-stage support is ",{opts:["unnecessary","harmful","justified"],a:"justified"}," given the long-term environmental benefits."]},
 {parts:["The ",{opts:["proliferation","scarcity","rejection"],a:"proliferation"}," of online learning platforms has transformed how students access education. While some educators ",{opts:["welcome","dismiss","ignore"],a:"welcome"}," this shift as a democratising force, others caution that it may ",{opts:["enhance","replace","exacerbate"],a:"exacerbate"}," existing inequalities in access to technology."]}
];

const FITB_LISTENING=[
 {parts:["Many researchers now believe that multitasking is largely a ",{opts:["myth","skill","requirement"],a:"myth"},"; the brain ",{opts:["excels","struggles","refuses"],a:"struggles"}," to focus on two complex tasks simultaneously, and switching between them ",{opts:["improves","reduces","eliminates"],a:"reduces"}," overall efficiency."]},
 {parts:["The lecture explained that first impressions are formed within ",{opts:["hours","seconds","days"],a:"seconds"}," of meeting someone, and that these initial judgements can be remarkably ",{opts:["inaccurate","persistent","irrelevant"],a:"persistent"}," even when later evidence ",{opts:["confirms","contradicts","ignores"],a:"contradicts"}," them."]}
];

const MCQ_READING=[
 {passage:"The introduction of microplastics into marine ecosystems has accelerated dramatically over the past three decades. Studies indicate that seabirds, fish, and marine mammals are ingesting these particles regularly, which bioaccumulate up the food chain. Researchers remain cautious, however, noting that controlled laboratory conditions differ significantly from open-ocean scenarios.",
  q:"Why do researchers urge caution in interpreting the findings?",
  opts:["Because microplastics have no proven effect on marine life","Because the study was conducted only on freshwater species","Because lab conditions may not reflect real ocean environments","Because the sample size of the study was too large"],a:2},
 {passage:"A recent study examined the effects of afternoon napping on cognitive performance among university students. Participants who napped for twenty minutes showed significant improvements in memory recall tasks compared to those who remained awake. However, naps exceeding thirty minutes were associated with grogginess and reduced alertness immediately afterward, an effect researchers termed 'sleep inertia'.",
  q:"According to the passage, what was the effect of naps longer than thirty minutes?",
  opts:["They produced no measurable effect on alertness","They improved memory recall more than shorter naps","They caused temporary grogginess and lower alertness","They were associated with long-term memory loss"],a:2},
 {passage:"Linguists have observed that children acquiring a second language in immersive environments often reach conversational fluency faster than adult learners receiving formal instruction. This has led some researchers to propose a 'critical period' for language acquisition, although the existence and exact boundaries of this period remain contested within the field.",
  q:"What does the passage suggest about the 'critical period' hypothesis?",
  opts:["It has been universally accepted by linguists","It applies only to adult learners","Its existence is still debated among researchers","It has been proven false by recent studies"],a:2}
];

const RO_SETS=[
 [{t:"Scientists have long studied the migratory patterns of birds.",i:0},{t:"These journeys, often spanning thousands of kilometres, rely on magnetic fields.",i:1},{t:"Recent research has revealed that light pollution disrupts this navigation.",i:2},{t:"As a result, conservation groups are calling for stricter lighting regulations.",i:3}],
 [{t:"Sleep has traditionally been viewed as a passive state of rest.",i:0},{t:"However, neuroscientists now understand it as an active period of brain consolidation.",i:1},{t:"During deep sleep, the brain transfers information from short-term to long-term memory.",i:2},{t:"This explains why students who sleep well after studying retain material more effectively.",i:3}]
];

const SUM_PASSAGES=[
 "Remote work has fundamentally altered the relationship between employees and organisations. While initial concerns focused on productivity, longitudinal studies now suggest that remote workers often demonstrate higher output over sustained periods. However, isolation and reduced team cohesion remain persistent challenges that organisations must address through deliberate culture-building strategies and regular in-person touchpoints.",
 "Urban green spaces, such as parks and community gardens, have traditionally been valued primarily for their recreational and aesthetic benefits. However, a growing body of research now links access to green spaces with measurable improvements in mental health, air quality, and even local biodiversity. Despite this evidence, many fast-growing cities continue to prioritise commercial and residential development over green areas, often citing land scarcity and high property values as justification."
];

const ESSAY_PROMPTS=[
 "Some people believe that social media has had a negative impact on society. Others argue that its benefits outweigh its drawbacks. Discuss both perspectives and give your own view.",
 "Some people think that universities should focus on providing academic skills, while others believe universities should prepare students for their future careers. Discuss both views and give your opinion."
];

const RA_TEXTS=[
 "The development of artificial intelligence has raised significant questions about the future of employment. While automation may eliminate certain routine tasks, economists suggest that new categories of work will emerge, requiring higher-order cognitive skills and adaptability from the modern workforce.",
 "Renewable energy is now the fastest-growing sector in the global economy. Solar and wind installations have increased dramatically, driven by falling costs and supportive government policies.",
 "Urban planning must balance economic development with environmental sustainability. Green infrastructure, including parks and permeable surfaces, plays a critical role in managing climate impacts.",
 "Advances in medical imaging technology have transformed the early detection of diseases. Scans now allow physicians to identify abnormalities that would have remained undetected only a generation ago, significantly improving patient outcomes.",
 "Global supply chains have become increasingly interconnected, meaning a disruption in one region can have ripple effects across multiple industries worldwide. This has prompted many companies to reconsider strategies that prioritise efficiency over resilience."
];

const RS_TEXTS=[
 "The government announced a new policy aimed at reducing carbon emissions by 2035.",
 "Students who read regularly tend to develop stronger critical thinking and vocabulary skills.",
 "The conference was attended by delegates from over fifty different countries worldwide.",
 "Researchers discovered that the ancient settlement had been continuously inhabited for over four thousand years.",
 "The committee will review all submitted proposals before announcing its final decision next month."
];

const DI_CHARTS=[
 {title:"Bar chart (simulated)",unit:"Renewable energy output (GW)",bars:[{label:"2021",h:60},{label:"2022",h:80},{label:"2023",h:55},{label:"2024",h:95}]},
 {title:"Bar chart (simulated)",unit:"Online course enrolments (millions)",bars:[{label:"2020",h:31},{label:"2021",h:50},{label:"2022",h:69},{label:"2023",h:85},{label:"2024",h:100}]}
];

const LST_PASSAGES=[
 "Today I want to discuss the concept of neuroplasticity — the brain's remarkable ability to reorganise itself by forming new neural connections. For decades scientists believed the adult brain was fixed. We now know that learning new skills, physical exercise, and even sleep can strengthen neural pathways significantly. This has major implications for education and rehabilitation medicine.",
 "Today's topic is the economics of public transit. Many cities subsidise public transportation not because it is profitable, but because the broader benefits — reduced traffic congestion, lower emissions, and better access to employment — outweigh the direct costs. Economists often call this a positive externality: a benefit to society that isn't captured in the price of the service itself."
];

/* ============================== STORAGE ============================== */
const STORAGE_KEY='pte-hub-progress-v1';
const defaultProgress=()=>({streak:0,lastActive:null,weekStart:null,sessionsThisWeek:0,totalSessions:0,
  vocab:{saved:[],mastery:{},custom:[],flashIdx:0},reading:{correct:0,total:0},
  scores:{writing:[],listening:[]},speakingSessions:0});
let progress=defaultProgress();
const hasStorage=!!(window.storage&&typeof window.storage.get==='function');

async function loadProgress(){
  if(!hasStorage)return;
  try{
    const res=await window.storage.get(STORAGE_KEY);
    if(res&&res.value){
      const p=JSON.parse(res.value);
      progress={...defaultProgress(),...p,
        vocab:{...defaultProgress().vocab,...(p.vocab||{})},
        reading:{...defaultProgress().reading,...(p.reading||{})},
        scores:{...defaultProgress().scores,...(p.scores||{})}};
    }
  }catch(e){/* no saved progress yet */}
}
async function saveProgress(){
  if(!hasStorage)return;
  try{await window.storage.set(STORAGE_KEY,JSON.stringify(progress));}catch(e){console.error('Could not save progress',e);}
}

function pad2(n){return String(n).padStart(2,'0');}
function todayStr(){const d=new Date();return d.getFullYear()+'-'+pad2(d.getMonth()+1)+'-'+pad2(d.getDate());}
function addDays(str,n){const d=new Date(str+'T00:00:00');d.setDate(d.getDate()+n);return d.getFullYear()+'-'+pad2(d.getMonth()+1)+'-'+pad2(d.getDate());}
function getWeekStart(today){const d=new Date(today+'T00:00:00');const day=d.getDay();const diff=(day===0?6:day-1);d.setDate(d.getDate()-diff);return d.getFullYear()+'-'+pad2(d.getMonth()+1)+'-'+pad2(d.getDate());}
function dayOfYear(){const now=new Date();const start=new Date(now.getFullYear(),0,0);return Math.floor((now-start)/864e5);}

function touchActivity(){
  const today=todayStr();
  if(progress.lastActive!==today){
    progress.streak=(progress.lastActive===addDays(today,-1))?progress.streak+1:1;
    progress.lastActive=today;
  }
  const ws=getWeekStart(today);
  if(progress.weekStart!==ws){progress.weekStart=ws;progress.sessionsThisWeek=0;}
}
function recordSession(){progress.sessionsThisWeek++;progress.totalSessions++;saveProgress();renderDashboard();}
function recordReading(correct,total){progress.reading.correct+=correct;progress.reading.total+=total;recordSession();}
function recordScore(category,score){const arr=progress.scores[category];arr.push(score);if(arr.length>10)arr.shift();recordSession();}
function recordSpeaking(){progress.speakingSessions++;recordSession();}

/* ============================== HELPERS ============================== */
function esc(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function clampScore(n){return Math.max(0,Math.min(90,Math.round(n)));}
function shuffledIndices(n){const a=[...Array(n).keys()];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function avg(arr){return arr.length?Math.round(arr.reduce((a,b)=>a+b,0)/arr.length):null;}

/* ============================== NAV / SIDEBAR ============================== */
function nav(pg){
  document.querySelectorAll('.pg').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(n=>n.classList.remove('active'));
  document.getElementById('pg-'+pg).classList.add('active');
  document.querySelectorAll('.nav-btn').forEach(n=>{const oc=n.getAttribute('onclick');if(oc&&oc.includes("'"+pg+"'"))n.classList.add('active');});
  closeSidebar();
  document.querySelector('.main').scrollTop=0;
}
function openSidebar(){document.getElementById('sidebar').classList.add('open');document.getElementById('overlay').classList.add('show');}
function closeSidebar(){document.getElementById('sidebar').classList.remove('open');document.getElementById('overlay').classList.remove('show');}

/* ============================== DASHBOARD ============================== */
function renderDashboard(){
  document.getElementById('side-streak').textContent=progress.streak;
  document.getElementById('side-streak-label').textContent=progress.streak===1?'day':'days';
  document.getElementById('stat-streak').textContent=progress.streak;
  document.getElementById('stat-streak-label').textContent=progress.streak===1?'day':'days';
  document.getElementById('stat-streak-bar').style.width=Math.min(100,progress.streak/7*100)+'%';

  const saved=progress.vocab.saved.length;
  document.getElementById('stat-words').textContent=saved;
  document.getElementById('stat-words-bar').style.width=Math.min(100,saved/VOCAB.length*100)+'%';
  document.getElementById('stat-words-sub').textContent=saved+' of '+VOCAB.length+' core words saved';

  const sw=progress.sessionsThisWeek;
  document.getElementById('stat-sessions').textContent=sw;
  document.getElementById('stat-sessions-bar').style.width=Math.min(100,sw/15*100)+'%';

  const w=avg(progress.scores.writing),l=avg(progress.scores.listening);
  const rdTotal=progress.reading.total;
  const rd=rdTotal?Math.round(progress.reading.correct/rdTotal*100):null;
  const sp=progress.speakingSessions;

  setSkill('writing',w===null?'—':w+'/90',w===null?0:w/90*100);
  setSkill('listening',l===null?'—':l+'/90',l===null?0:l/90*100);
  setSkill('reading',rd===null?'—':rd+'%',rd===null?0:rd);
  setSkill('speaking',sp+(sp===1?' session':' sessions'),Math.min(100,sp*10));
}
function setSkill(id,label,pct){
  document.getElementById('skill-'+id+'-val').textContent=label;
  document.getElementById('skill-'+id+'-bar').style.width=pct+'%';
}

/* ============================== WORD OF THE DAY ============================== */
let wordIdx=dayOfYear()%VOCAB.length;
function renderWord(){
  const w=VOCAB[wordIdx];
  const isToday=wordIdx===(dayOfYear()%VOCAB.length);
  if(isToday){
    const d=new Date();
    const months=["January","February","March","April","May","June","July","August","September","October","November","December"];
    document.getElementById('w-label').textContent='PTE WORD OF THE DAY — '+months[d.getMonth()]+' '+d.getDate()+', '+d.getFullYear();
  }else{
    document.getElementById('w-label').textContent='BONUS VOCABULARY';
  }
  document.getElementById('w-word').textContent=w.w;
  document.getElementById('w-pron').textContent=w.p;
  document.getElementById('w-def').textContent=w.d;
  document.getElementById('w-ex').textContent='"'+w.e+'"';
  document.getElementById('w-lv').textContent=w.lv+' level';
  document.getElementById('w-syn').innerHTML=w.syn.map((s,i)=>'<span class="pill'+(i===0?' sel':'')+'">'+esc(s)+'</span>').join('');
  document.getElementById('w-forms').innerHTML=Object.keys(w.forms).map(k=>'<div style="display:flex;gap:8px"><span style="color:var(--color-text-secondary);width:84px;flex-shrink:0">'+esc(k)+'</span><span>'+esc(w.forms[k])+'</span></div>').join('');

  const opts=[w.quiz.correct,...w.quiz.wrong];
  const order=shuffledIndices(opts.length);
  document.getElementById('wod-quiz').innerHTML=order.map((oi,pos)=>{
    const letter=String.fromCharCode(65+pos);
    return '<button class="qopt" data-correct="'+(oi===0?'1':'0')+'" onclick="chkW(this)">'+letter+') '+esc(opts[oi])+'</button>';
  }).join('');
  updateSaveBtn();
  document.getElementById('w-save-note').style.display='none';
}
function chkW(el){
  const buttons=[...el.parentNode.children];
  buttons.forEach(b=>b.disabled=true);
  if(el.dataset.correct==='1'){el.classList.add('correct');}
  else{el.classList.add('wrong');const c=buttons.find(b=>b.dataset.correct==='1');if(c)c.classList.add('correct');}
}
function nextWord(){wordIdx=(wordIdx+1)%VOCAB.length;renderWord();}
function updateSaveBtn(){
  const w=VOCAB[wordIdx].w;
  const saved=progress.vocab.saved.includes(w);
  document.getElementById('w-save-btn').innerHTML=saved?'<i class="ti ti-bookmark-filled" aria-hidden="true"></i>Saved':'<i class="ti ti-bookmark" aria-hidden="true"></i>Save word';
}
function saveCurrentWord(){
  const w=VOCAB[wordIdx].w;
  const i=progress.vocab.saved.indexOf(w);
  let nowSaved;
  if(i===-1){progress.vocab.saved.push(w);nowSaved=true;}
  else{progress.vocab.saved.splice(i,1);nowSaved=false;}
  saveProgress();renderDashboard();updateSaveBtn();renderSavedVocab();
  const note=document.getElementById('w-save-note');
  note.style.display='inline-flex';
  note.innerHTML=nowSaved?'<i class="ti ti-check" aria-hidden="true"></i> Saved to your vocabulary':'<i class="ti ti-bookmark-off" aria-hidden="true"></i> Removed from saved';
  clearTimeout(window._saveNoteTmr);
  window._saveNoteTmr=setTimeout(()=>{note.style.display='none';},2500);
}

/* ============================== VOCABULARY ============================== */
function vtab(el,id){
  document.querySelectorAll('#pg-vocab .tabs .tab').forEach(t=>t.classList.remove('active'));el.classList.add('active');
  ['vq','vs','vl'].forEach(i=>document.getElementById(i).style.display='none');
  document.getElementById(id).style.display='';
  if(id==='vs')renderSavedVocab();
  if(id==='vl')renderWordListStats();
}
function renderFlashcard(){
  const idx=progress.vocab.flashIdx%VOCAB.length;
  const w=VOCAB[idx];
  document.getElementById('vq-count').textContent='CARD '+(idx+1)+' OF '+VOCAB.length+' — PTE Core vocabulary';
  document.getElementById('vq-word').textContent=w.w;
  document.getElementById('vq-pron').textContent=w.p;
  document.getElementById('vq-def').textContent=w.d+' Example: "'+w.e+'"';
  document.getElementById('vq-def').style.display='none';
  document.getElementById('vq-btn').style.display='inline-flex';
  document.getElementById('vq-rate').style.display='none';
  document.getElementById('vq-prog').style.width=(idx/VOCAB.length*100)+'%';
  document.getElementById('vq-count2').textContent=(idx+1)+' / '+VOCAB.length+' cards';
}
function flipV(){
  document.getElementById('vq-def').style.display='block';
  document.getElementById('vq-btn').style.display='none';
  document.getElementById('vq-rate').style.display='block';
}
function rateV(level){
  const idx=progress.vocab.flashIdx%VOCAB.length;
  progress.vocab.mastery[VOCAB[idx].w]=level;
  progress.vocab.flashIdx=(idx+1)%VOCAB.length;
  saveProgress();renderFlashcard();renderWordListStats();renderDashboard();
}
function renderSavedVocab(){
  const saved=progress.vocab.saved;
  const c=document.getElementById('vs-grid');
  if(!saved.length){
    c.innerHTML='<div class="empty"><i class="ti ti-bookmark-off" aria-hidden="true"></i><div class="empty-title">No saved words yet</div><div class="empty-sub">Save words from Word of the Day, or rate flashcards, to build your personal list here.</div></div>';
    return;
  }
  c.innerHTML=saved.map(word=>{
    const w=VOCAB.find(x=>x.w===word);
    const level=progress.vocab.mastery[word]||'new';
    const cls=level==='mastered'?'b-green':level==='review'?'b-amber':'b-blue';
    const txt=level==='mastered'?'Mastered':level==='review'?'Review':'New';
    return '<div class="card card-sm" style="display:flex;align-items:center;justify-content:space-between;gap:10px"><div><div style="font-size:14.5px;font-weight:500">'+esc(word)+'</div><div style="font-size:12px;color:var(--color-text-secondary);margin-top:2px">'+esc(w?w.d:'')+'</div></div><span class="badge '+cls+'">'+txt+'</span></div>';
  }).join('');
}
function renderWordListStats(){
  const total=VOCAB.length;
  const mastered=Object.values(progress.vocab.mastery).filter(v=>v==='mastered').length;
  const review=Object.values(progress.vocab.mastery).filter(v=>v==='review').length;
  document.getElementById('wl-bar').style.width=(mastered/total*100)+'%';
  document.getElementById('wl-count').textContent=mastered+' / '+total+' mastered'+(review?(', '+review+' marked for review'):'');
  const c=document.getElementById('custom-list');
  if(!progress.vocab.custom.length){
    c.innerHTML='<div style="font-size:12.5px;color:var(--color-text-tertiary)">No custom words yet — add words you want to remember above.</div>';
  }else{
    c.innerHTML=progress.vocab.custom.map((word,i)=>'<span class="cpill">'+esc(word)+'<button onclick="removeCustomWord('+i+')" aria-label="Remove '+esc(word)+'"><i class="ti ti-x" aria-hidden="true"></i></button></span>').join('');
  }
}
function addCustomWord(){
  const inp=document.getElementById('custom-inp');
  const val=inp.value.trim();
  if(!val)return;
  if(!progress.vocab.custom.includes(val)){progress.vocab.custom.push(val);saveProgress();renderWordListStats();}
  inp.value='';
}
function removeCustomWord(i){progress.vocab.custom.splice(i,1);saveProgress();renderWordListStats();}

/* ============================== FILES ============================== */
let files=[],fileFilter='all';
function doFiles(fl){for(const f of fl)files.push({name:f.name,size:f.size,type:f.type,url:URL.createObjectURL(f)});applyFilter();}
function doDrop(e){e.preventDefault();document.getElementById('drop-zone').style.borderColor='';doFiles(e.dataTransfer.files);}
function applyFilter(){
  const list=fileFilter==='all'?files:files.filter(f=>fileFilter==='img'?f.type.startsWith('image'):fileFilter==='pdf'?f.type.includes('pdf'):(f.type.includes('word')||f.name.endsWith('.docx')||f.name.endsWith('.txt')||f.name.endsWith('.doc')));
  renderFiles(list);
}
function renderFiles(list){
  document.getElementById('fc').textContent='('+files.length+')';
  const g=document.getElementById('fg');
  if(!list.length){
    g.innerHTML='<div class="empty"><i class="ti ti-folder-open" aria-hidden="true"></i><div class="empty-title">No files'+(files.length?' match this filter':' yet')+'</div><div class="empty-sub">'+(files.length?'Try a different filter above.':'Drop a screenshot, PDF or note above to keep it handy while you study.')+'</div></div>';
    return;
  }
  g.innerHTML=list.map(f=>{
    let ic='ti-file';
    if(f.type.startsWith('image'))ic='ti-photo';else if(f.type.includes('pdf'))ic='ti-file-type-pdf';else if(f.name.endsWith('.docx')||f.name.endsWith('.doc'))ic='ti-file-type-doc';
    const sz=f.size>1048576?(f.size/1048576).toFixed(1)+'MB':(f.size/1024).toFixed(0)+'KB';
    return '<div style="background:var(--color-background-primary);border:0.5px solid var(--color-border-tertiary);border-radius:var(--border-radius-md);padding:12px;text-align:center;cursor:pointer" onclick="window.open(\''+f.url+'\')"><i class="ti '+ic+'" style="font-size:28px;color:var(--accent);display:block;margin-bottom:7px" aria-hidden="true"></i><div style="font-size:12px;word-break:break-all;line-height:1.3">'+esc(f.name)+'</div><div style="font-size:11px;color:var(--color-text-tertiary);margin-top:3px">'+sz+'</div></div>';
  }).join('');
}
function filt(type,el){fileFilter=type;document.querySelectorAll('#pg-files .pill').forEach(p=>p.classList.remove('sel'));el.classList.add('sel');applyFilter();}
function clearFiles(){files.forEach(f=>URL.revokeObjectURL(f.url));files=[];applyFilter();}

/* ============================== READING ============================== */
function renderFITB(containerId,item,prefix){
  let html='',n=0;
  item.parts.forEach(part=>{
    if(typeof part==='string'){html+=esc(part);}
    else{
      html+='<select class="inp" style="width:auto;display:inline-block;padding:3px 8px" id="'+prefix+'-b'+n+'" data-ans="'+esc(part.a)+'"><option value="">___</option>'+part.opts.map(o=>'<option>'+esc(o)+'</option>').join('')+'</select>';
      n++;
    }
  });
  const c=document.getElementById(containerId);
  c.innerHTML=html;c.dataset.blanks=n;c.dataset.prefix=prefix;
}
function checkFITB(containerId,resultId,category){
  const c=document.getElementById(containerId);
  const n=parseInt(c.dataset.blanks,10),prefix=c.dataset.prefix;
  let correct=0;const answers=[];
  for(let i=0;i<n;i++){
    const sel=document.getElementById(prefix+'-b'+i);
    answers.push(sel.dataset.ans);
    if(sel.value===sel.dataset.ans)correct++;
  }
  const r=document.getElementById(resultId);
  r.style.display='block';
  r.className='result '+(correct===n?'good':'warn');
  r.textContent='You got '+correct+'/'+n+' correct. Correct answer'+(n>1?'s':'')+': '+answers.join(', ')+'.'+(correct===n?' Excellent work!':' Review the passage for context clues.');
  if(category==='reading')recordReading(correct,n);else recordSession();
}
let rfitbIdx=0;
function newReadingFITB(){rfitbIdx=(rfitbIdx+1)%FITB_READING.length;renderFITB('rfitb-text',FITB_READING[rfitbIdx],'rb');document.getElementById('rfitb-result').style.display='none';}
let lfitbIdx=0;
function newListeningFITB(){lfitbIdx=(lfitbIdx+1)%FITB_LISTENING.length;renderFITB('lfitb-text',FITB_LISTENING[lfitbIdx],'lb');document.getElementById('lfitb-result').style.display='none';}

let mcqIdx=0;
function renderMCQ(){
  const m=MCQ_READING[mcqIdx];
  document.getElementById('mcq-passage').textContent=m.passage;
  document.getElementById('mcq-q').textContent=m.q;
  document.getElementById('mcq-opts').innerHTML=m.opts.map((o,i)=>'<button class="qopt" data-correct="'+(i===m.a?'1':'0')+'" onclick="ansMCQ(this)">'+String.fromCharCode(65+i)+') '+esc(o)+'</button>').join('');
}
function ansMCQ(el){
  const buttons=[...el.parentNode.children];
  buttons.forEach(b=>b.disabled=true);
  if(el.dataset.correct==='1'){el.classList.add('correct');}
  else{el.classList.add('wrong');const c=buttons.find(b=>b.dataset.correct==='1');if(c)c.classList.add('correct');}
  recordReading(el.dataset.correct==='1'?1:0,1);
}
function newMCQ(){mcqIdx=(mcqIdx+1)%MCQ_READING.length;renderMCQ();}

let roBankIdx=0,roOrder=[];
function initRO(){
  const len=RO_SETS[roBankIdx].length;
  roOrder=shuffledIndices(len);
  while(roOrder.every((v,i)=>v===i))roOrder=shuffledIndices(len);
  renderRO();
}
function renderRO(){
  const bank=RO_SETS[roBankIdx];
  const list=document.getElementById('ro-list');
  list.innerHTML=roOrder.map(origIdx=>{
    const s=bank[origIdx];
    return '<div class="ro-item" draggable="true" data-idx="'+origIdx+'"><span class="ro-handle"><i class="ti ti-grip-vertical" aria-hidden="true"></i></span><span class="ro-text">'+esc(s.t)+'</span><span class="ro-controls"><button onclick="moveRO(this,-1)" aria-label="Move up"><i class="ti ti-chevron-up" aria-hidden="true"></i></button><button onclick="moveRO(this,1)" aria-label="Move down"><i class="ti ti-chevron-down" aria-hidden="true"></i></button></span></div>';
  }).join('');
  document.getElementById('ro-result').style.display='none';
  refreshROButtons();attachDrag();
}
function refreshROButtons(){
  const items=[...document.getElementById('ro-list').children];
  items.forEach((item,pos)=>{
    const btns=item.querySelectorAll('.ro-controls button');
    btns[0].disabled=pos===0;
    btns[1].disabled=pos===items.length-1;
  });
}
function moveRO(btn,dir){
  const item=btn.closest('.ro-item');const list=item.parentNode;
  if(dir===-1&&item.previousElementSibling)list.insertBefore(item,item.previousElementSibling);
  else if(dir===1&&item.nextElementSibling)list.insertBefore(item.nextElementSibling,item);
  refreshROButtons();
}
function attachDrag(){
  const list=document.getElementById('ro-list');let dragEl=null;
  [...list.children].forEach(item=>{
    item.addEventListener('dragstart',()=>{dragEl=item;item.classList.add('dragging');});
    item.addEventListener('dragend',()=>{item.classList.remove('dragging');refreshROButtons();});
    item.addEventListener('dragover',e=>{
      e.preventDefault();
      if(!dragEl||dragEl===item)return;
      const rect=item.getBoundingClientRect();
      const after=(e.clientY-rect.top)>rect.height/2;
      list.insertBefore(dragEl,after?item.nextSibling:item);
    });
  });
}
function checkRO(){
  const order=[...document.getElementById('ro-list').children].map(el=>parseInt(el.dataset.idx,10));
  const correct=order.every((v,i)=>v===i);
  const r=document.getElementById('ro-result');
  r.style.display='block';
  r.className='result '+(correct?'good':'warn');
  r.textContent=correct?'Correct order — the paragraph now flows logically from introduction to conclusion.':'Not quite. Think about which sentence introduces the topic, which adds supporting detail, and which gives the outcome or conclusion.';
  recordReading(correct?1:0,1);
}
function shuffleRO(){initRO();}
function newROSet(){roBankIdx=(roBankIdx+1)%RO_SETS.length;initRO();}

function rtab(el,id){
  document.querySelectorAll('#pg-read .tabs .tab').forEach(t=>t.classList.remove('active'));el.classList.add('active');
  ['rr-fitb','rr-mcq','rr-ro'].forEach(i=>document.getElementById(i).style.display='none');
  document.getElementById(id).style.display='';
}
function ltab(el,id){
  document.querySelectorAll('#pg-listen .tabs .tab').forEach(t=>t.classList.remove('active'));el.classList.add('active');
  ['ls-sum','ls-fitb'].forEach(i=>document.getElementById(i).style.display='none');
  document.getElementById(id).style.display='';
}

/* ============================== AI SCORING (Writing & Listening) ============================== */
async function callClaude(prompt,maxTokens){
  const r=await fetch('https://api.anthropic.com/v1/messages',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({model:'claude-sonnet-4-6',max_tokens:maxTokens,messages:[{role:'user',content:prompt}]})});
  if(!r.ok)throw new Error('Request failed: '+r.status);
  const data=await r.json();
  const block=(data.content||[]).find(b=>b.type==='text');
  if(!block)throw new Error('No text in response');
  return block.text;
}
function parseJSON(raw){
  let t=raw.trim().replace(/^```(?:json)?\s*/i,'').replace(/```\s*$/,'').trim();
  try{return JSON.parse(t);}catch(e){
    const m=t.match(/\{[\s\S]*\}/);
    if(m){try{return JSON.parse(m[0]);}catch(e2){}}
    return null;
  }
}
function showBoxMsg(box,msg,warn){
  box.style.display='block';
  box.className='fb-box'+(warn?' warn':'');
  box.textContent=msg;
}
function renderScoreFB(box,data,raw){
  box.style.display='block';box.className='fb-box';
  if(data&&typeof data.score==='number'){
    box.innerHTML='<div class="score-badge">Estimated score <b>'+clampScore(data.score)+'</b>/90</div><div style="margin-top:8px">'+esc(data.feedback||'')+'</div>';
  }else{box.textContent=raw;}
}
function renderEssayFB(box,data,raw){
  box.style.display='block';box.className='fb-box';
  if(data&&typeof data.score==='number'){
    let html='<div class="score-badge">Estimated score <b>'+clampScore(data.score)+'</b>/90</div>';
    if(Array.isArray(data.strengths)&&data.strengths.length)html+='<div class="fb-section-title">Strengths</div><ul class="fb-list">'+data.strengths.map(s=>'<li>'+esc(s)+'</li>').join('')+'</ul>';
    if(Array.isArray(data.improvements)&&data.improvements.length)html+='<div class="fb-section-title">To improve</div><ul class="fb-list">'+data.improvements.map(s=>'<li>'+esc(s)+'</li>').join('')+'</ul>';
    if(data.tip)html+='<div class="fb-section-title">Tip</div><div style="font-size:13.5px">'+esc(data.tip)+'</div>';
    box.innerHTML=html;
  }else{box.textContent=raw;}
}
async function withLoading(btn,fn){
  const original=btn.innerHTML;
  btn.disabled=true;btn.innerHTML='<i class="ti ti-loader-2 spin" aria-hidden="true"></i> Scoring…';
  try{await fn();}finally{btn.disabled=false;btn.innerHTML=original;}
}

/* ----- Summarise written text ----- */
let sumIdx=0;
function newSumPassage(){sumIdx=(sumIdx+1)%SUM_PASSAGES.length;document.getElementById('sum-passage').textContent=SUM_PASSAGES[sumIdx];document.getElementById('sum-fb').style.display='none';document.getElementById('sum-inp').value='';document.getElementById('sum-wc').textContent='0 words';}
async function getSumFeedback(btn){
  const text=document.getElementById('sum-inp').value.trim();
  const fb=document.getElementById('sum-fb');
  if(!text){showBoxMsg(fb,'Write your one-sentence summary first.',true);return;}
  await withLoading(btn,async()=>{
    try{
      const prompt='You are a PTE Academic examiner. Score this "Summarize Written Text" response on the 0-90 scale, considering: single-sentence form (5-75 words), coverage of the main idea and key points, and grammar.\n\nOriginal text:\n"""'+SUM_PASSAGES[sumIdx]+'"""\n\nStudent response:\n"""'+text+'"""\n\nRespond with ONLY valid JSON, no markdown or code fences, in exactly this shape:\n{"score": <integer 0-90>, "feedback": "<2-3 sentences of specific, encouraging feedback>"}';
      const raw=await callClaude(prompt,500);
      const data=parseJSON(raw);
      renderScoreFB(fb,data,raw);
      if(data&&typeof data.score==='number')recordScore('writing',clampScore(data.score));else recordSession();
    }catch(e){showBoxMsg(fb,'Could not reach the scoring service. Check your connection and try again.',true);}
  });
}

/* ----- Write essay ----- */
let essayIdx=0;
function newEssayPrompt(){essayIdx=(essayIdx+1)%ESSAY_PROMPTS.length;document.getElementById('essay-prompt').textContent=ESSAY_PROMPTS[essayIdx];document.getElementById('essay-fb').style.display='none';document.getElementById('essay-inp').value='';document.getElementById('essay-wc').textContent='0 words';}
async function getEssayFeedback(btn){
  const text=document.getElementById('essay-inp').value.trim();
  const wc=text?text.split(/\s+/).filter(Boolean).length:0;
  const fb=document.getElementById('essay-fb');
  if(wc<50){showBoxMsg(fb,'Write at least 50 words before requesting feedback — PTE essays are 200–300 words.',true);return;}
  await withLoading(btn,async()=>{
    try{
      const prompt='You are a PTE Academic examiner scoring a "Write Essay" task on the 0-90 scale, considering content, form (200-300 words), development & structure, grammar, and vocabulary.\n\nPrompt:\n"""'+ESSAY_PROMPTS[essayIdx]+'"""\n\nStudent essay ('+wc+' words):\n"""'+text+'"""\n\nRespond with ONLY valid JSON, no markdown or code fences, in exactly this shape:\n{"score": <integer 0-90>, "strengths": ["<point>","<point>"], "improvements": ["<point>","<point>"], "tip": "<one specific grammar or vocabulary tip>"}';
      const raw=await callClaude(prompt,700);
      const data=parseJSON(raw);
      renderEssayFB(fb,data,raw);
      if(data&&typeof data.score==='number')recordScore('writing',clampScore(data.score));else recordSession();
    }catch(e){showBoxMsg(fb,'Could not reach the scoring service. Check your connection and try again.',true);}
  });
}

/* ----- Listening: summarise spoken text ----- */
let lstIdx=0;
function newLstPassage(){lstIdx=(lstIdx+1)%LST_PASSAGES.length;document.getElementById('lst-passage').textContent=LST_PASSAGES[lstIdx];document.getElementById('lst-fb').style.display='none';document.getElementById('lst-inp').value='';document.getElementById('lst-wc').textContent='0 words';}
async function getLstFeedback(btn){
  const text=document.getElementById('lst-inp').value.trim();
  const fb=document.getElementById('lst-fb');
  if(!text){showBoxMsg(fb,'Write your summary first.',true);return;}
  const wc=text.split(/\s+/).filter(Boolean).length;
  await withLoading(btn,async()=>{
    try{
      const prompt='You are a PTE Academic examiner. Score this "Summarize Spoken Text" response on the 0-90 scale, considering: coverage of the main idea and key points from the lecture, length (50-70 words), grammar, and spelling.\n\nLecture transcript:\n"""'+LST_PASSAGES[lstIdx]+'"""\n\nStudent summary ('+wc+' words):\n"""'+text+'"""\n\nRespond with ONLY valid JSON, no markdown or code fences:\n{"score": <integer 0-90>, "feedback": "<2-3 sentences of specific feedback>"}';
      const raw=await callClaude(prompt,500);
      const data=parseJSON(raw);
      renderScoreFB(fb,data,raw);
      if(data&&typeof data.score==='number')recordScore('listening',clampScore(data.score));else recordSession();
    }catch(e){showBoxMsg(fb,'Could not reach the scoring service. Check your connection and try again.',true);}
  });
}

/* ============================== WRITING TABS ============================== */
function wtab(el,id){
  document.querySelectorAll('#pg-write .tabs .tab').forEach(t=>t.classList.remove('active'));el.classList.add('active');
  ['ww-sum','ww-essay'].forEach(i=>document.getElementById(i).style.display='none');
  document.getElementById(id).style.display='';
}

/* ============================== SPEAKING ============================== */
let raIdx=0;
function newRA(){raIdx=(raIdx+1)%RA_TEXTS.length;document.getElementById('ra-text').textContent=RA_TEXTS[raIdx];}
let rsIdx=0;
function newRS(){
  rsIdx=(rsIdx+1)%RS_TEXTS.length;
  const t=document.getElementById('rs-text');t.style.display='none';t.textContent='"'+RS_TEXTS[rsIdx]+'"';
  document.getElementById('rs-reveal-btn').style.display='inline-flex';
}
function revealRS(){
  document.getElementById('rs-text').style.display='block';
  document.getElementById('rs-reveal-btn').style.display='none';
  recordSpeaking();
}
let isRec=false,recTmr=null,recSec=0;
function toggleRec(){
  if(!isRec){
    isRec=true;recSec=0;
    document.getElementById('rec-lbl').textContent='Stop';
    document.getElementById('rec-ind').style.display='flex';
    document.getElementById('rec-t').textContent='00:00 — recording...';
    recTmr=setInterval(()=>{recSec++;const m=Math.floor(recSec/60),s=recSec%60;document.getElementById('rec-t').textContent=pad2(m)+':'+pad2(s)+' — recording...';},1000);
  }else{
    isRec=false;clearInterval(recTmr);
    document.getElementById('rec-lbl').textContent='Start recording';
    document.getElementById('rec-ind').style.display='none';
    document.getElementById('rec-t').textContent='Done! Review your pacing and stress patterns.';
    recordSpeaking();
  }
}
let diIdx=0,diTimer=null;
function renderDI(){
  const c=DI_CHARTS[diIdx];
  document.getElementById('di-chart-title').textContent=c.title;
  document.getElementById('di-unit').textContent=c.unit;
  document.getElementById('di-bars').innerHTML=c.bars.map(b=>'<div style="display:flex;flex-direction:column;align-items:center;gap:4px"><div style="width:30px;background:var(--accent);height:'+b.h+'px;border-radius:3px 3px 0 0"></div><span style="font-size:11px">'+esc(b.label)+'</span></div>').join('');
}
function newDI(){diIdx=(diIdx+1)%DI_CHARTS.length;renderDI();}
function startDIPractice(){
  const btn=document.getElementById('di-btn'),status=document.getElementById('di-status');
  if(diTimer)return;
  btn.disabled=true;let phase='study',t=25;
  status.textContent='Study the image — 00:'+pad2(t);
  diTimer=setInterval(()=>{
    t--;
    if(t<=0){
      if(phase==='study'){phase='describe';t=40;status.textContent='Describe the image now — 00:'+pad2(t);}
      else{clearInterval(diTimer);diTimer=null;status.textContent='Done! Review how clearly you covered the trend and key data points.';btn.disabled=false;recordSpeaking();return;}
    }else{
      status.textContent=(phase==='study'?'Study the image — ':'Describe the image now — ')+'00:'+pad2(t);
    }
  },1000);
}
function stab(el,id){
  document.querySelectorAll('#pg-speak .tabs .tab').forEach(t=>t.classList.remove('active'));el.classList.add('active');
  ['ss-ra','ss-rs','ss-di'].forEach(i=>document.getElementById(i).style.display='none');
  document.getElementById(id).style.display='';
}

/* ============================== WORD COUNTERS ============================== */
function wireWordCount(id,label){
  document.getElementById(id).addEventListener('input',function(){
    const n=this.value.trim()?this.value.trim().split(/\s+/).length:0;
    document.getElementById(label).textContent=n+' word'+(n===1?'':'s');
  });
}

/* ============================== INIT ============================== */
async function init(){
  await loadProgress();
  touchActivity();
  await saveProgress();

  renderDashboard();
  renderWord();
  renderFlashcard();
  renderWordListStats();

  renderFITB('rfitb-text',FITB_READING[0],'rb');
  renderFITB('lfitb-text',FITB_LISTENING[0],'lb');
  renderMCQ();
  initRO();

  document.getElementById('sum-passage').textContent=SUM_PASSAGES[0];
  document.getElementById('essay-prompt').textContent=ESSAY_PROMPTS[0];
  document.getElementById('lst-passage').textContent=LST_PASSAGES[0];
  document.getElementById('ra-text').textContent=RA_TEXTS[0];
  document.getElementById('rs-text').textContent='"'+RS_TEXTS[0]+'"';
  renderDI();

  wireWordCount('sum-inp','sum-wc');
  wireWordCount('essay-inp','essay-wc');
  wireWordCount('lst-inp','lst-wc');
}
init();
