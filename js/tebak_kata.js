const words = [
  {
    word: "proklamasi",
    hint: "Deklarasi penting pada tanggal 17 Agustus 1945.",
  },
  {
    word: "Pancasila",
    hint: "Filsafat dasar resmi negara Indonesia.",
  },
  {
    word: "Tri Tunggal",
    hint: "Tiga komponen Pancasila: Ketuhanan Yang Maha Esa, Kemanusiaan yang Adil dan Beradab, Persatuan Indonesia.",
  },
  {
    word: "merah putih",
    hint: "Warna-warna bendera nasional Indonesia.",
  },
  {
    word: "pahlawan",
    hint: "Orang yang berjuang untuk kemerdekaan Indonesia.",
  },
  {
    word: "bangkit",
    hint: "Tindakan untuk melawan penjajah dan mencapai kemerdekaan.",
  },
  {
    word: "bersatu",
    hint: "Kunci untuk mencapai tujuan kemerdekaan.",
  },
  {
    word: "juang",
    hint: "Semangat perlawanan dan perjuangan untuk meraih kemerdekaan.",
  },
  {
    word: "monas",
    hint: "Patung lambang kemerdekaan di Jakarta.",
  },
  {
    word: "trisakti",
    hint: "Asas yang terdiri dari politik, ekonomi, dan sosial.",
  },
  {
    word: "perang",
    hint: "Situasi konflik dalam usaha meraih kemerdekaan.",
  },
  {
    word: "merdeka",
    hint: "Tujuan akhir perjuangan rakyat Indonesia.",
  },
  {
    word: "kemerdekaan",
    hint: "Keadaan bebas dari penjajahan.",
  },
  {
    word: "asean",
    hint: "Organisasi kerjasama negara-negara di kawasan Asia Tenggara.",
  },
  {
    word: "soekarno",
    hint: "Presiden pertama Republik Indonesia.",
  },
  {
    word: "garuda",
    hint: "Lambang negara Indonesia yang berbentuk burung elang.",
  },
  {
    word: "gotong royong",
    hint: "Semangat bekerja sama dan tolong-menolong dalam masyarakat Indonesia.",
  },
  {
    word: "batik",
    hint: "Kain tradisional Indonesia yang diakui sebagai warisan budaya dunia.",
  },
  {
    word: "independensi",
    hint: "Kebebasan dan kemandirian suatu negara.",
  },
  {
    word: "1945",
    hint: "Tahun di mana Indonesia memproklamirkan kemerdekaannya.",
  },
  {
    word: "bhinneka",
    hint: "Motto nasional yang berarti 'berbeda-beda tetapi tetap satu juga.'",
  },
];

const WordText = document.getElementById("word");
const HintText = document.querySelector("#hint span");
const Timer = document.querySelector("#time b");
const input = document.querySelector("input");

const refresh = document.getElementById("refresh-word");
const cek = document.getElementById("check-word");

let currentWordIndex = 0;
let timeLeft = 30;
let timer;

let score = 0;
let answeredQuestions = 0;

// fungsi untuk mengacak array words
function shuffleArray(words) {
  for (let i = words.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [words[i], words[j]] = [words[j], words[i]];
  }
}

// Mengacak array words
shuffleArray(words);

// Menampilkan 10 soal pertama dari array yang sudah diacak
const selectedWords = words.slice(0, 10);

function shuffleString(str) {
  const shuffledArray = str
    .toUpperCase()
    .split("")
    .sort(() => Math.random() - 0.5);
  return shuffledArray.join("  ");
}

function displayWord() {
  WordText.textContent = shuffleString(selectedWords[currentWordIndex].word);
  HintText.textContent = selectedWords[currentWordIndex].hint;
  Timer.textContent = timeLeft;
}

function countdown() {
  if (timeLeft > 0) {
    timeLeft--;
    Timer.textContent = timeLeft;
  } else {
    clearInterval(timer);
    const continueGame = confirm(
      "Waktu habis! Klik OK untuk melanjutkan dengan soal berikutnya."
    );
    if (continueGame) {
      nextWord();
    }
  }
}

function nextWord() {
  currentWordIndex = (currentWordIndex + 1) % selectedWords.length;
  timeLeft = 30;
  displayWord();
  timer = setInterval(countdown, 1000);
}

displayWord();
timer = setInterval(countdown, 1000);

function checkWord() {
  const userInput = input.value.toLowerCase();
  const actualWord = selectedWords[currentWordIndex].word.toLowerCase();

  answeredQuestions++;

  if (userInput == actualWord) {
    clearInterval(timer);
    alert("Selamat, jawaban Anda benar!");
    score++;
  } else {
    clearInterval(timer);
    alert(
      "Jawaban Anda salah. \nJawabannya adalah " +
        selectedWords[currentWordIndex].word
    );
  }

  if (answeredQuestions === selectedWords.length) {
    clearInterval(timer);
    const scoreCard = document.getElementById("score-card");
    const scoreText = document.getElementById("score-text");
    scoreText.textContent = `Skor Anda: ${score} dari ${selectedWords.length}`;
    scoreCard.style.display = "block";
  } else {
    nextWord();
  }

  input.value = "";
}

refresh.addEventListener("click", function () {
  clearInterval(timer);
  nextWord();
});

cek.addEventListener("click", function () {
  clearInterval(timer);
  checkWord();
});
