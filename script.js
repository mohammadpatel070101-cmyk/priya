// ---- CONFIG ----
const noMessages = [
  "Nahi? 🥺 Ek baar aur soch lo...",
  "Arrey Priya... dil pe mat lo yaar 🐾💔",
  "Pakka nahi? Main bahut pyaar karta hoon tumse... 🤎",
  "Yaar... please? Dekho kitna cute proposal hai 🐶🥺",
  "1 baar aur soch lo Priya... main wait karunga 💕"
];

// Letter texts (change after each no)
const letterTexts = [
  [
    "Meri pyaari Priya,",
    "Tumse milke laga jaise zindagi ne",
    "ek naya rang le liya... 🌸",
    "Tumhari hansi meri duniya hai,",
    "tumhari aankhein mera aasaman... 💫",
    "Tum mere sath rahogi?",
    "Meri girlfriend banogi? 🐾💕"
  ],
  [
    "Ek baar 'nahi' keh diya...",
    "par mera dil still tumhara hai 🥺",
    "Tumhari ek muskaan ke liye",
    "main kuch bhi kar sakta hoon... 🐶",
    "Please Priya, mujhe mauka do... 💕",
    "Tumhare bina sab adhoora lagta hai 🤎",
    "Hann bol do... please? 🥺"
  ],
  [
    "Do baar nahi... 💔",
    "par himmat nahi haari maine!",
    "Kyunki tum mere liye special ho Priya 🌸",
    "Har subah tumhare khayalon se shuru hoti hai,",
    "har raat tumhare sapno mein guzarti hai... 🌙",
    "Sirf tumhara hona chahta hoon main... 🐾",
    "Please hann keh do ab? 🥺💕"
  ],
  [
    "Teen baar... 🥺",
    "par yaar, main manta nahi abhi!",
    "Tumhare bina zindagi ka koi matlab nahi 💫",
    "Main wada karta hoon tumhein khush rakhunga,",
    "hamesha tumhare sath rahunga... 🐶🤎",
    "Sirf ek baar hann boldo Priya...",
    "Tumse bahut pyaar karta hoon... 💖"
  ],
  [
    "Chaar baar nahi... 😭",
    "Priya yaar! Main ro dunga pakka!",
    "Dekho ye chota sa 🐶 tumse ilteja kar raha hai...",
    "Meri duniya sirf tumse roshan hai,",
    "tumhare bagair sab andhera hai... 🌑",
    "Last chance Priya... please please please!",
    "Hann bol do... 🥺💕🐾"
  ]
];

let noCount = 0;
const maxNo = 5;

// YES button sizes
const yesSizes = [1, 1.2, 1.45, 1.75, 2.1, 2.5];

// ---- INIT ----
window.onload = function () {
  generateHearts();
  generateFloatingEmojis();
  setYesBtnSize(0);
};

// ---- GENERATE HEARTS ----
function generateHearts() {
  const bg = document.getElementById('heartsBg');
  const heartEmojis = ['💕', '💖', '🤎', '❤️', '💗', '💓', '🐾'];
  for (let i = 0; i < 22; i++) {
    const h = document.createElement('div');
    h.className = 'heart-particle';
    h.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
    h.style.left = Math.random() * 100 + '%';
    h.style.fontSize = (0.9 + Math.random() * 1.2) + 'rem';
    h.style.animationDuration = (6 + Math.random() * 10) + 's';
    h.style.animationDelay = (Math.random() * 8) + 's';
    h.style.opacity = 0.3 + Math.random() * 0.4;
    bg.appendChild(h);
  }
}

// ---- GENERATE FLOATING EMOJIS ----
function generateFloatingEmojis() {
  const container = document.getElementById('floatingEmojis');
  const emojis = ['🐶', '🤎', '🐾', '💕', '🌸', '💌', '✨', '🥺'];
  for (let i = 0; i < 12; i++) {
    const e = document.createElement('div');
    e.className = 'float-emoji';
    e.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    e.style.left = Math.random() * 95 + '%';
    e.style.top = Math.random() * 95 + '%';
    e.style.animationDuration = (4 + Math.random() * 5) + 's';
    e.style.animationDelay = (Math.random() * 4) + 's';
    e.style.fontSize = (1.5 + Math.random() * 1.5) + 'rem';
    container.appendChild(e);
  }
}

// ---- SET YES BUTTON SIZE ----
function setYesBtnSize(index) {
  const yesBtn = document.getElementById('yesBtn');
  const scale = yesSizes[Math.min(index, yesSizes.length - 1)];
  yesBtn.style.transform = `scale(${scale})`;
  yesBtn.style.fontSize = (1 + index * 0.08) + 'rem';
  yesBtn.style.padding = `${14 + index * 4}px ${30 + index * 8}px`;
  yesBtn.style.boxShadow = `0 ${6 + index * 4}px ${20 + index * 8}px rgba(224,51,107,${0.4 + index * 0.08})`;
}

// ---- SAY NO ----
function sayNo() {
  if (noCount >= maxNo) return;

  const card = document.getElementById('mainCard');
  const noBtn = document.getElementById('noBtn');
  const title = document.getElementById('mainTitle');
  const tryCount = document.getElementById('tryCount');
  const letter = document.getElementById('loveLetter');

  // Shake card
  card.classList.remove('shake');
  void card.offsetWidth;
  card.classList.add('shake');
  setTimeout(() => card.classList.remove('shake'), 600);

  noCount++;

  // Update title
  const titles = [
    "Priya... 🥺",
    "Arrey yaar! 😭",
    "Please na... 🥺💕",
    "Nahi mat kaho! 🐶",
    "Last chance!! 😭💖"
  ];
  title.textContent = titles[noCount - 1] || titles[titles.length - 1];
  title.classList.remove('msg-fade');
  void title.offsetWidth;
  title.classList.add('msg-fade');

  // Update letter
  updateLetter(noCount);

  // Update NO button text
  if (noCount < maxNo) {
    noBtn.textContent = noMessages[noCount - 1] || "Soch lo dobara...";
    noBtn.classList.remove('msg-fade');
    void noBtn.offsetWidth;
    noBtn.classList.add('msg-fade');
  } else {
    // Remove NO button after 5 tries
    noBtn.style.transition = 'all 0.5s ease';
    noBtn.style.opacity = '0';
    noBtn.style.transform = 'scale(0)';
    setTimeout(() => {
      noBtn.style.display = 'none';
    }, 500);
    tryCount.textContent = "Ab nahi option nahi hai... sirf hann bolna hai! 🥺💕";
    tryCount.style.color = '#e0336b';
    tryCount.style.fontWeight = '700';
    tryCount.style.fontSize = '0.9rem';
  }

  // Grow YES button
  setYesBtnSize(noCount);

  // Update try count
  if (noCount < maxNo) {
    tryCount.textContent = `(${noCount}/5 baar nahi keh diya... 😢)`;
  }
}

// ---- UPDATE LETTER ----
function updateLetter(index) {
  const letter = document.getElementById('loveLetter');
  const lines = letterTexts[Math.min(index, letterTexts.length - 1)];
  letter.innerHTML = '';
  lines.forEach((line, i) => {
    const p = document.createElement('p');
    p.className = 'letter-line';
    p.textContent = line;
    p.style.animationDelay = (i * 0.18) + 's';
    letter.appendChild(p);
  });
}

// ---- SAY YES ----
function sayYes() {
  // Burst hearts
  burstHearts();

  setTimeout(() => {
    const yesScreen = document.getElementById('yesScreen');
    yesScreen.classList.add('show');
  }, 400);
}

// ---- HEART BURST ----
function burstHearts() {
  const burst = document.getElementById('heartBurst');
  burst.style.display = 'block';
  const emojis = ['💕', '💖', '🤎', '🐾', '❤️', '💗', '🌸', '✨'];
  for (let i = 0; i < 20; i++) {
    const h = document.createElement('div');
    h.className = 'burst-heart';
    h.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    const angle = (i / 20) * 360;
    const dist = 80 + Math.random() * 160;
    const tx = Math.cos(angle * Math.PI / 180) * dist + 'px';
    const ty = Math.sin(angle * Math.PI / 180) * dist + 'px';
    h.style.setProperty('--tx', tx);
    h.style.setProperty('--ty', ty);
    h.style.animationDelay = Math.random() * 0.3 + 's';
    burst.appendChild(h);
  }
}
