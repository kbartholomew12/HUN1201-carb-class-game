const QUESTIONS = [
  {
    round: 'Round 1 • Hormone Wars',
    shortRound: 'Hormone Wars',
    points: 2,
    icon: 'hormone',
    graphic: 'meterUp',
    question: 'You eat a large bowl of sugary cereal. Blood glucose rises quickly. Which hormone should increase, and what is its overall effect on blood glucose?',
    answer: 'Insulin increases. It promotes glucose uptake by cells and encourages storage, lowering blood glucose.',
    scoring: '1 point for insulin • 1 point for explaining that blood glucose is lowered through uptake and/or storage.'
  },
  {
    round: 'Round 1 • Hormone Wars',
    shortRound: 'Hormone Wars',
    points: 2,
    icon: 'hormone',
    graphic: 'meterDown',
    question: 'It has been several hours since lunch and blood glucose begins to fall. Which hormone should increase, and what does it do?',
    answer: 'Glucagon increases. It raises blood glucose, primarily by stimulating breakdown of liver glycogen.',
    scoring: '1 point for glucagon • 1 point for raising blood glucose / stimulating liver glycogen breakdown.'
  },
  {
    round: 'Round 1 • Hormone Wars',
    shortRound: 'Hormone Wars',
    points: 2,
    icon: 'hormone',
    graphic: 'pancreas',
    question: 'Which pancreatic cell type releases insulin: alpha cells or beta cells?',
    answer: 'Beta cells release insulin.',
    scoring: '2 points for beta cells.'
  },
  {
    round: 'Round 2 • Where Does It Go?',
    shortRound: 'Where Does It Go?',
    points: 3,
    icon: 'storage',
    graphic: 'pathways',
    question: 'After a carbohydrate-containing meal, glucose is absorbed into the blood. Name three major places or pathways that glucose can go next.',
    answer: 'Glucose can be used immediately by cells for energy, stored as glycogen in liver or muscle, or converted to fat when excess remains.',
    scoring: '1 point for immediate fuel • 1 point for glycogen storage • 1 point for fat storage.'
  },
  {
    round: 'Round 2 • Where Does It Go?',
    shortRound: 'Where Does It Go?',
    points: 2,
    icon: 'storage',
    graphic: 'muscleVsLiver',
    question: 'A student says: “Muscle glycogen can be broken down and sent into the blood to feed the brain.” Correct or incorrect?',
    answer: 'Incorrect. Muscle glycogen is used locally by that muscle. Liver glycogen can help maintain blood glucose for other tissues.',
    scoring: '1 point for incorrect • 1 point for explaining muscle glycogen versus liver glycogen.'
  },
  {
    round: 'Round 2 • Where Does It Go?',
    shortRound: 'Where Does It Go?',
    points: 2,
    icon: 'storage',
    graphic: 'fatStorage',
    question: 'You have already met immediate energy needs and glycogen stores are full. What happens to excess glucose?',
    answer: 'Excess glucose can be converted to fat through lipogenesis.',
    scoring: '1 point for fat storage • 1 point for naming lipogenesis.'
  },
  {
    round: 'Round 3 • The Fast',
    shortRound: 'The Fast',
    points: 3,
    icon: 'fast',
    graphic: 'liver',
    question: 'You have not eaten for several hours. Blood glucose is dropping, but liver glycogen is still available. What pathway is used first to help raise blood glucose?',
    answer: 'Glycogenolysis. Liver glycogen is broken down and glucose is released into the blood.',
    scoring: '1 point for glycogenolysis • 1 point for liver glycogen • 1 point for raising blood glucose.'
  },
  {
    round: 'Round 3 • The Fast',
    shortRound: 'The Fast',
    points: 3,
    icon: 'fast',
    graphic: 'gluconeogenesis',
    question: 'Fasting continues and glycogen stores are running low. Name the process that makes new glucose from non-carbohydrate sources.',
    answer: 'Gluconeogenesis. The body can use glucogenic amino acids, glycerol, and lactate to help make glucose.',
    scoring: '1 point for gluconeogenesis • 1 point for non-carbohydrate source • 1 point for one correct example such as amino acids, glycerol, or lactate.'
  },
  {
    round: 'Round 3 • The Fast',
    shortRound: 'The Fast',
    points: 2,
    icon: 'fast',
    graphic: 'ketones',
    question: 'During prolonged very-low-carbohydrate intake, the liver begins making an alternative fuel from fatty acids. Name the process and the fuel produced.',
    answer: 'Ketogenesis produces ketones.',
    scoring: '1 point for ketogenesis • 1 point for ketones.'
  },
  {
    round: 'Round 4 • Glycemic Response',
    shortRound: 'Glycemic Response',
    points: 3,
    icon: 'glycemic',
    graphic: 'breadCompare',
    question: 'Which is more likely to cause a rapid blood-glucose spike: white bread alone or whole-grain bread with peanut butter? Explain why.',
    answer: 'White bread alone is more likely to spike blood glucose rapidly. Fiber and protein in the second meal slow digestion and glucose absorption.',
    scoring: '1 point for white bread alone • 1 point for fiber/protein • 1 point for slower absorption or a smaller glucose spike.'
  },
  {
    round: 'Round 4 • Glycemic Response',
    shortRound: 'Glycemic Response',
    points: 2,
    icon: 'glycemic',
    graphic: 'fruitJuice',
    question: 'Why can whole fruit have a different blood-glucose effect than fruit juice even when both contain natural sugar?',
    answer: 'Whole fruit contains fiber, which slows absorption and produces a more gradual glucose response. Juice contains little fiber.',
    scoring: '1 point for the fiber difference • 1 point for slower glucose absorption / more gradual rise.'
  },
  {
    round: 'Round 5 • Final Boss',
    shortRound: 'Final Boss',
    points: 5,
    icon: 'boss',
    graphic: 'boss',
    question: 'Jordan eats pancakes, syrup, and orange juice at 8:00 a.m., then eats nothing for the rest of the day. Describe what happens first after breakfast and what changes as the fast continues. Include hormones and at least two metabolic pathways.',
    answer: 'Soon after breakfast, blood glucose rises and insulin increases. Glucose is used for immediate energy and stored as glycogen; excess may be stored as fat. As fasting continues, insulin falls and glucagon rises. Liver glycogen is broken down through glycogenolysis. As glycogen becomes limited, gluconeogenesis increases, and with prolonged low carbohydrate availability, ketogenesis also increases.',
    scoring: 'Up to 5 points: insulin response • glucose use/storage • glucagon response • glycogenolysis • gluconeogenesis and/or ketogenesis.'
  }
];

const ROUND_INFO = [
  { name: 'Hormone Wars', meta: 'Q1-Q3 • insulin, glucagon, alpha vs beta cells', icon: 'hormone' },
  { name: 'Where Does It Go?', meta: 'Q4-Q6 • fuel, glycogen, fat storage', icon: 'storage' },
  { name: 'The Fast', meta: 'Q7-Q9 • glycogenolysis, gluconeogenesis, ketogenesis', icon: 'fast' },
  { name: 'Glycemic Response', meta: 'Q10-Q11 • fiber, protein, glucose spikes', icon: 'glycemic' },
  { name: 'Final Boss', meta: 'Q12 • full-sequence synthesis', icon: 'boss' }
];

const state = {
  index: 0,
  reveal: false,
  timerDuration: 45,
  timerRemaining: 45,
  timerInterval: null,
  scores: JSON.parse(localStorage.getItem('bsb-scores') || 'null') || [
    { name: 'Team A', score: 0 },
    { name: 'Team B', score: 0 },
    { name: 'Team C', score: 0 },
    { name: 'Team D', score: 0 },
  ]
};

const els = {
  heroCard: document.getElementById('heroCard'),
  questionWrap: document.getElementById('questionWrap'),
  endCard: document.getElementById('endCard'),
  roundLabel: document.getElementById('roundLabel'),
  questionCounter: document.getElementById('questionCounter'),
  pointsPill: document.getElementById('pointsPill'),
  questionText: document.getElementById('questionText'),
  answerText: document.getElementById('answerText'),
  scoringText: document.getElementById('scoringText'),
  answerPanel: document.getElementById('answerPanel'),
  revealBtn: document.getElementById('revealBtn'),
  prevBtn: document.getElementById('prevBtn'),
  nextBtn: document.getElementById('nextBtn'),
  startBtn: document.getElementById('startBtn'),
  playAgainBtn: document.getElementById('playAgainBtn'),
  resetGameBtn: document.getElementById('resetGameBtn'),
  fullscreenBtn: document.getElementById('fullscreenBtn'),
  timerDisplay: document.getElementById('timerDisplay'),
  timerStartBtn: document.getElementById('timerStartBtn'),
  timerResetBtn: document.getElementById('timerResetBtn'),
  timerSetBtns: [...document.querySelectorAll('.timer-set')],
  scenarioGraphic: document.getElementById('scenarioGraphic'),
  roundList: document.getElementById('roundList'),
  scoreboard: document.getElementById('scoreboard'),
  scoreResetBtn: document.getElementById('scoreResetBtn')
};

function renderRoundList() {
  els.roundList.innerHTML = ROUND_INFO.map((r, idx) => {
    const active = QUESTIONS[state.index] && QUESTIONS[state.index].shortRound === r.name;
    return `<div class="round-card ${active ? 'active' : ''}">
      <div class="round-icon">${iconSVG(r.icon)}</div>
      <div>
        <div class="round-name">${r.name}</div>
        <div class="round-meta">${r.meta}</div>
      </div>
    </div>`;
  }).join('');
}

function renderScoreboard() {
  els.scoreboard.innerHTML = state.scores.map((team, idx) => `
    <div class="team-row">
      <input aria-label="Team name ${idx + 1}" value="${escapeHtml(team.name)}" data-team-name="${idx}" />
      <div class="score-controls">
        <button class="score-btn" data-score-change="-1" data-team="${idx}">−</button>
        <div class="score-value">${team.score}</div>
        <button class="score-btn" data-score-change="1" data-team="${idx}">+</button>
      </div>
    </div>
  `).join('');

  els.scoreboard.querySelectorAll('[data-score-change]').forEach(btn => {
    btn.addEventListener('click', () => {
      const team = Number(btn.dataset.team);
      const change = Number(btn.dataset.scoreChange);
      state.scores[team].score = Math.max(0, state.scores[team].score + change);
      persistScores();
      renderScoreboard();
    });
  });

  els.scoreboard.querySelectorAll('[data-team-name]').forEach(input => {
    input.addEventListener('input', () => {
      state.scores[Number(input.dataset.teamName)].name = input.value;
      persistScores();
    });
  });
}

function persistScores() {
  localStorage.setItem('bsb-scores', JSON.stringify(state.scores));
}

function resetScores() {
  state.scores.forEach((team, idx) => {
    team.score = 0;
    team.name = `Team ${String.fromCharCode(65 + idx)}`;
  });
  persistScores();
  renderScoreboard();
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
}

function renderScreen() {
  const done = state.index >= QUESTIONS.length;
  els.heroCard.classList.toggle('hidden', true);
  els.questionWrap.classList.toggle('hidden', done);
  els.endCard.classList.toggle('hidden', !done);
  if (done) {
    stopTimer();
    return;
  }
  const q = QUESTIONS[state.index];
  els.roundLabel.textContent = q.round;
  els.questionCounter.textContent = `Question ${state.index + 1} of ${QUESTIONS.length}`;
  els.pointsPill.textContent = `${q.points} point${q.points > 1 ? 's' : ''}`;
  els.questionText.textContent = q.question;
  els.answerText.textContent = q.answer;
  els.scoringText.textContent = q.scoring;
  els.answerPanel.classList.toggle('hidden', !state.reveal);
  els.revealBtn.textContent = state.reveal ? 'Hide Answer' : 'Reveal Answer';
  els.prevBtn.disabled = state.index === 0;
  els.prevBtn.style.opacity = state.index === 0 ? '.45' : '1';
  els.nextBtn.textContent = state.index === QUESTIONS.length - 1 ? 'Finish' : 'Next';
  els.scenarioGraphic.innerHTML = graphicSVG(q.graphic);
  renderRoundList();
}

function startGame() {
  state.index = 0;
  state.reveal = false;
  els.heroCard.classList.add('hidden');
  els.questionWrap.classList.remove('hidden');
  els.endCard.classList.add('hidden');
  resetTimer(state.timerDuration);
  renderScreen();
}

function nextQuestion() {
  if (state.index < QUESTIONS.length - 1) {
    state.index += 1;
    state.reveal = false;
    resetTimer(state.timerDuration);
    renderScreen();
  } else {
    state.index = QUESTIONS.length;
    renderScreen();
  }
}

function prevQuestion() {
  if (state.index > 0) {
    state.index -= 1;
    state.reveal = false;
    resetTimer(state.timerDuration);
    renderScreen();
  }
}

function toggleReveal() {
  if (state.index >= QUESTIONS.length) return;
  state.reveal = !state.reveal;
  renderScreen();
}

function formatTime(seconds) {
  const m = String(Math.floor(seconds / 60)).padStart(2, '0');
  const s = String(seconds % 60).padStart(2, '0');
  return `${m}:${s}`;
}

function updateTimerDisplay() {
  els.timerDisplay.textContent = formatTime(state.timerRemaining);
  els.timerDisplay.classList.toggle('timer-warning', state.timerRemaining <= 10);
}

function startPauseTimer() {
  if (state.timerInterval) {
    stopTimer();
    return;
  }
  state.timerInterval = setInterval(() => {
    state.timerRemaining -= 1;
    updateTimerDisplay();
    if (state.timerRemaining <= 0) {
      stopTimer();
      state.timerRemaining = 0;
      updateTimerDisplay();
      flashTitle();
    }
  }, 1000);
  els.timerStartBtn.textContent = 'Pause';
}

function stopTimer() {
  if (state.timerInterval) {
    clearInterval(state.timerInterval);
    state.timerInterval = null;
  }
  els.timerStartBtn.textContent = 'Start';
}

function resetTimer(seconds = state.timerDuration) {
  stopTimer();
  state.timerRemaining = seconds;
  updateTimerDisplay();
}

function flashTitle() {
  const original = document.title;
  document.title = 'Time! Blood Sugar Battle';
  setTimeout(() => { document.title = original; }, 1500);
}

function setTimerDuration(seconds) {
  state.timerDuration = seconds;
  resetTimer(seconds);
  els.timerSetBtns.forEach(btn => btn.classList.toggle('active', Number(btn.dataset.seconds) === seconds));
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen?.();
  } else {
    document.exitFullscreen?.();
  }
}

function iconSVG(type) {
  const common = 'viewBox="0 0 24 24" fill="none" stroke="#24314f" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"';
  switch (type) {
    case 'hormone': return `<svg ${common}><circle cx="7" cy="12" r="3.5"></circle><circle cx="17" cy="8" r="2.7"></circle><circle cx="16" cy="17" r="3.2"></circle><path d="M10 11l4-2"></path><path d="M10 13l3 3"></path></svg>`;
    case 'storage': return `<svg ${common}><path d="M4 8h16v11H4z"></path><path d="M8 8V5h8v3"></path><path d="M8 13h8"></path></svg>`;
    case 'fast': return `<svg ${common}><path d="M12 3v6l4 2"></path><circle cx="12" cy="12" r="8.5"></circle></svg>`;
    case 'glycemic': return `<svg ${common}><path d="M4 17c3-6 5-8 8-8s5 2 8 8"></path><path d="M4 17h16"></path><path d="M10 7h4"></path></svg>`;
    case 'boss': return `<svg ${common}><path d="M12 3l2.3 4.7 5.2.8-3.8 3.7.9 5.2L12 15l-4.6 2.4.9-5.2L4.5 8.5l5.2-.8L12 3Z"></path></svg>`;
    default: return '';
  }
}

function graphicSVG(type) {
  const shellStart = `<svg class="icon" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">`;
  const shellEnd = `</svg>`;
  const bg = `<rect x="8" y="8" width="104" height="104" rx="24" fill="#f3f7ff"/><rect x="18" y="18" width="84" height="84" rx="20" fill="#ffffff"/>`;
  switch(type) {
    case 'meterUp': return `${shellStart}${bg}<circle cx="60" cy="62" r="25" fill="#eef4ff" stroke="#c4d4ff"/><path d="M60 62l16-11" stroke="#f34f71" stroke-width="5" stroke-linecap="round"/><circle cx="60" cy="62" r="4" fill="#f34f71"/><path d="M37 77c6 8 14 12 23 12 10 0 18-4 23-12" fill="none" stroke="#39b4ff" stroke-width="4" stroke-linecap="round"/><path d="M60 23v12" stroke="#24314f" stroke-width="4" stroke-linecap="round"/></svg>`;
    case 'meterDown': return `${shellStart}${bg}<circle cx="60" cy="62" r="25" fill="#eef4ff" stroke="#c4d4ff"/><path d="M60 62l-14-7" stroke="#2948ff" stroke-width="5" stroke-linecap="round"/><circle cx="60" cy="62" r="4" fill="#2948ff"/><path d="M37 77c6 8 14 12 23 12 10 0 18-4 23-12" fill="none" stroke="#ffb347" stroke-width="4" stroke-linecap="round"/><path d="M60 23v12" stroke="#24314f" stroke-width="4" stroke-linecap="round"/></svg>`;
    case 'pancreas': return `${shellStart}${bg}<path d="M22 63c10-16 29-26 57-16 7 3 16 3 19 8 6 10-4 25-17 26-12 1-16-5-26-5-12 0-24 8-33 4-8-3-7-11 0-17Z" fill="#ff9a8a" stroke="#ea745d" stroke-width="2"/><circle cx="44" cy="58" r="5" fill="#ffffff" stroke="#2948ff" stroke-width="2"/><circle cx="71" cy="70" r="5" fill="#ffffff" stroke="#f34f71" stroke-width="2"/><text x="44" y="60" text-anchor="middle" font-size="6" font-family="Arial" fill="#2948ff">α</text><text x="71" y="72" text-anchor="middle" font-size="6" font-family="Arial" fill="#f34f71">β</text></svg>`;
    case 'pathways': return `${shellStart}${bg}<circle cx="60" cy="34" r="10" fill="#ffb347"/><rect x="22" y="73" width="23" height="17" rx="6" fill="#39b4ff"/><rect x="49" y="73" width="23" height="17" rx="6" fill="#8a63ff"/><rect x="76" y="73" width="23" height="17" rx="6" fill="#f34f71"/><path d="M60 44v14" stroke="#24314f" stroke-width="3"/><path d="M60 58H34M60 58H61M60 58h26" stroke="#24314f" stroke-width="3"/><path d="M34 58v10M60 58v10M86 58v10" stroke="#24314f" stroke-width="3"/></svg>`;
    case 'muscleVsLiver': return `${shellStart}${bg}<path d="M24 42c6-8 17-10 26-6 4 2 8 3 15 0 9-4 20-2 26 6-4 12-14 20-26 20h-14c-12 0-22-8-27-20Z" fill="#b96d49"/><path d="M25 73c8-12 19-17 31-17 10 0 17 2 23 6" fill="none" stroke="#39b4ff" stroke-width="5" stroke-linecap="round"/><path d="M82 54c8 3 11 8 12 15" fill="none" stroke="#f34f71" stroke-width="5" stroke-linecap="round"/></svg>`;
    case 'fatStorage': return `${shellStart}${bg}<circle cx="44" cy="60" r="18" fill="#ffdb92" stroke="#f0b84c" stroke-width="2"/><circle cx="65" cy="49" r="15" fill="#ffd06d" stroke="#f0b84c" stroke-width="2"/><circle cx="74" cy="70" r="17" fill="#ffc75d" stroke="#f0b84c" stroke-width="2"/><path d="M21 28h24" stroke="#24314f" stroke-width="4" stroke-linecap="round"/><path d="M84 28h15" stroke="#24314f" stroke-width="4" stroke-linecap="round"/><path d="M48 28c9 0 17 0 32 0" stroke="#f34f71" stroke-width="4" stroke-linecap="round"/></svg>`;
    case 'liver': return `${shellStart}${bg}<path d="M20 58c5-19 24-29 49-29 20 0 32 10 32 22 0 18-18 33-42 33-19 0-36-11-39-26Z" fill="#b45151" stroke="#8d3838" stroke-width="2"/><path d="M53 47c10 2 18 8 23 17" stroke="#ffdb92" stroke-width="4" stroke-linecap="round"/></svg>`;
    case 'gluconeogenesis': return `${shellStart}${bg}<rect x="19" y="52" width="22" height="14" rx="7" fill="#39b4ff"/><rect x="50" y="52" width="22" height="14" rx="7" fill="#39b4ff"/><rect x="81" y="52" width="20" height="14" rx="7" fill="#39b4ff"/><path d="M40 59h10M72 59h9" stroke="#24314f" stroke-width="3"/><path d="M60 28v14" stroke="#24314f" stroke-width="4" stroke-linecap="round"/><path d="M50 36l10-10 10 10" fill="none" stroke="#f34f71" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
    case 'ketones': return `${shellStart}${bg}<path d="M44 29c8 15 4 23-4 36 14-7 26-4 38 5-4-17-9-29-34-41Z" fill="#ffb347"/><path d="M72 78c8 0 15-6 15-14s-7-14-15-14-15 6-15 14 7 14 15 14Z" fill="#2948ff" opacity=".14" stroke="#2948ff"/><text x="72" y="68" text-anchor="middle" font-size="10" font-family="Arial" fill="#2948ff">K</text></svg>`;
    case 'breadCompare': return `${shellStart}${bg}<rect x="19" y="40" width="32" height="35" rx="11" fill="#d4a574"/><rect x="69" y="40" width="32" height="35" rx="11" fill="#b98350"/><circle cx="85" cy="82" r="8" fill="#c89a4b"/><circle cx="96" cy="76" r="6" fill="#8c5a34"/><path d="M60 57h-5" stroke="#24314f" stroke-width="3" stroke-linecap="round"/><path d="M55 57l6-6M55 57l6 6" stroke="#f34f71" stroke-width="3" stroke-linecap="round"/></svg>`;
    case 'fruitJuice': return `${shellStart}${bg}<circle cx="39" cy="56" r="17" fill="#ff8a65"/><path d="M39 39c4-8 11-10 18-8" stroke="#51b37b" stroke-width="4" stroke-linecap="round"/><rect x="70" y="39" width="18" height="38" rx="5" fill="#ffe0b2" stroke="#f0b84c"/><rect x="72" y="49" width="14" height="24" rx="4" fill="#ffb347"/><path d="M88 42l6-8" stroke="#39b4ff" stroke-width="4" stroke-linecap="round"/></svg>`;
    case 'boss': return `${shellStart}<defs><linearGradient id="bossg" x1="0" x2="1"><stop offset="0%" stop-color="#f34f71"/><stop offset="100%" stop-color="#ffb347"/></linearGradient></defs><rect x="8" y="8" width="104" height="104" rx="24" fill="#101a35"/><path d="M24 79c10-29 27-41 48-41 9 0 17 2 24 7" fill="none" stroke="#5ed3ff" stroke-width="5" stroke-linecap="round"/><path d="M26 44h20" stroke="url(#bossg)" stroke-width="7" stroke-linecap="round"/><path d="M26 59h32" stroke="url(#bossg)" stroke-width="7" stroke-linecap="round"/><path d="M26 74h44" stroke="url(#bossg)" stroke-width="7" stroke-linecap="round"/><circle cx="83" cy="55" r="16" fill="#fff" opacity=".15"></circle><path d="M83 55l11-7" stroke="#ffb347" stroke-width="4" stroke-linecap="round"/><circle cx="83" cy="55" r="4" fill="#ffb347"/></svg>`;
    default: return '';
  }
}

els.startBtn.addEventListener('click', startGame);
els.playAgainBtn.addEventListener('click', startGame);
els.resetGameBtn.addEventListener('click', () => {
  state.index = 0;
  state.reveal = false;
  stopTimer();
  resetTimer(state.timerDuration);
  els.heroCard.classList.remove('hidden');
  els.questionWrap.classList.add('hidden');
  els.endCard.classList.add('hidden');
});
els.revealBtn.addEventListener('click', toggleReveal);
els.nextBtn.addEventListener('click', nextQuestion);
els.prevBtn.addEventListener('click', prevQuestion);
els.fullscreenBtn.addEventListener('click', toggleFullscreen);
els.timerStartBtn.addEventListener('click', startPauseTimer);
els.timerResetBtn.addEventListener('click', () => resetTimer(state.timerDuration));
els.timerSetBtns.forEach(btn => btn.addEventListener('click', () => setTimerDuration(Number(btn.dataset.seconds))));
els.scoreResetBtn.addEventListener('click', resetScores);

document.addEventListener('keydown', (e) => {
  if (e.target.matches('input')) return;
  if (e.key === 'ArrowRight') nextQuestion();
  if (e.key === 'ArrowLeft') prevQuestion();
  if (e.key.toLowerCase() === 'r') toggleReveal();
  if (e.key.toLowerCase() === 'f') toggleFullscreen();
  if (e.key.toLowerCase() === 't') startPauseTimer();
});

renderRoundList();
renderScoreboard();
resetTimer(state.timerDuration);
