const dataQuiz = [
  {
    question: "Siapakah presiden pertama Indonesia?",
    a: "Megawati",
    b: "Ir. Soekarno",
    c: "Joko Widodo",
    d: "Soeharto",
    correct: "b",
  },
  {
    question: "Apa ibu kota Indonesia?",
    a: "Surabaya",
    b: "Medan",
    c: "Jakarta",
    d: "Bandung",
    correct: "c",
  },
  {
    question: "Berapa banyak provinsi yang ada di Indonesia?",
    a: "32",
    b: "34",
    c: "36",
    d: "38",
    correct: "b",
  },
  {
    question: "Apa warna bendera Indonesia?",
    a: "Merah Putih",
    b: "Biru Putih",
    c: "Hijau Merah",
    d: "Putih Merah",
    correct: "a",
  },
  {
    question: "Apa nama lagu kebangsaan Indonesia?",
    a: "Indonesia Raya",
    b: "Halo-Halo Bandung",
    c: "Bengawan Solo",
    d: "Ayo Mama",
    correct: "a",
  },
  {
    question: "Apa lambang negara Indonesia?",
    a: "Burung Elang",
    b: "Harimau Sumatera",
    c: "Banteng Jawa",
    d: "Garuda Pancasila",
    correct: "d",
  },
  {
    question: "Pada tanggal berapa Indonesia merayakan hari kemerdekaan?",
    a: "15 Agustus",
    b: "16 Agustus",
    c: "17 Agustus",
    d: "18 Agustus",
    correct: "c",
  },
  {
    question: "Siapa yang memproklamasikan kemerdekaan Indonesia?",
    a: "Soeharto",
    b: "Soekarno",
    c: "Jokowi",
    d: "Megawati",
    correct: "b",
  },
  {
    question: "Kapan Indonesia merdeka?",
    a: "17 Agustus 1945",
    b: "20 Oktober 1945",
    c: "25 Desember 1945",
    d: "1 Januari 1946",
    correct: "a",
  },
  {
    question: "Apa yang terjadi pada 30 September 1965?",
    a: "Pengunduran Soekarno",
    b: "Proklamasi Kemerdekaan",
    c: "Kudeta militer",
    d: "Gempa bumi besar",
    correct: "c",
  },
  {
    question:
      "Siapakah pahlawan nasional yang dikenal sebagai Bapak Koperasi Indonesia?",
    a: "Ki Hajar Dewantara",
    b: "Soekarno",
    c: "Hatta",
    d: "Soepomo",
    correct: "c",
  },
  {
    question: "Apa makna sila pertama dalam Pancasila?",
    a: "Keadilan",
    b: "Ketuhanan Yang Maha Esa",
    c: "Kemanusiaan yang Adil dan Beradab",
    d: "Persatuan Indonesia",
    correct: "b",
  },
  {
    question: "Apa nama naskah proklamasi kemerdekaan Indonesia?",
    a: "Proklamasi Juang",
    b: "Proklamasi Merah Putih",
    c: "Proklamasi Pancasila",
    d: "Proklamasi Kemerdekaan",
    correct: "d",
  },
  {
    question:
      "Siapakah pahlawan nasional yang dikenal sebagai Bapak Tani Indonesia?",
    a: "Soekarno",
    b: "Hatta",
    c: "Soedirman",
    d: "Ki Hajar Dewantara",
    correct: "c",
  },
  {
    question: "Apa nama monumen nasional yang terletak di Jakarta?",
    a: "Monumen Merdeka",
    b: "Monumen Proklamasi",
    c: "Monumen Pancasila",
    d: "Monumen Nasional (Monas)",
    correct: "d",
  },
  {
    question: "Berapa jumlah pulau yang ada di Indonesia?",
    a: "Lebih dari 5.000",
    b: "Lebih dari 10.000",
    c: "Lebih dari 15.000",
    d: "Lebih dari 20.000",
    correct: "b",
  },
  {
    question: "Apa nama pertunjukan tradisional seni tari dari Bali?",
    a: "Tari Kecak",
    b: "Tari Jaipong",
    c: "Tari Piring",
    d: "Tari Legong",
    correct: "d",
  },
  {
    question: "Apa nama senjata tradisional dari Minangkabau?",
    a: "Keris",
    b: "Rencong",
    c: "Parang",
    d: "Badik",
    correct: "b",
  },
  {
    question: "Siapakah yang dikenal sebagai 'Pahlawan Pendidikan' Indonesia?",
    a: "Ki Hajar Dewantara",
    b: "Soekarno",
    c: "Sultan Agung",
    d: "Sisingamangaraja XII",
    correct: "a",
  },
  {
    question: "Apa nama mata uang resmi Indonesia?",
    a: "Dollar Indonesia",
    b: "Rupiah",
    c: "Ringgit",
    d: "Baht",
    correct: "b",
  },
  {
    question:
      "Siapakah penemu angklung, alat musik tradisional dari Jawa Barat?",
    a: "Ki Hajar Dewantara",
    b: "Pakubuwono",
    c: "Daeng Soetigna",
    d: "Pangeran Diponegoro",
    correct: "c",
  },
  {
    question: "Apa nama patung yang terletak di Kota Semarang?",
    a: "Patung Pancasila",
    b: "Patung Sisingamangaraja",
    c: "Patung Soekarno",
    d: "Patung Jenderal Sudirman",
    correct: "d",
  },
  {
    question: "Apa yang diperingati pada tanggal 1 Juni di Indonesia?",
    a: "Hari Bumi",
    b: "Hari Kartini",
    c: "Hari Kemerdekaan",
    d: "Hari Buruh",
    correct: "a",
  },
  {
    question: "Apa nama tari tradisional yang berasal dari Sumatera Barat?",
    a: "Tari Saman",
    b: "Tari Piring",
    c: "Tari Jaipong",
    d: "Tari Minangkabau",
    correct: "b",
  },
  {
    question: "Apa nama gunung tertinggi di Indonesia?",
    a: "Gunung Merapi",
    b: "Gunung Semeru",
    c: "Gunung Rinjani",
    d: "Gunung Jaya Wijaya (Carstensz Pyramid)",
    correct: "d",
  },
  {
    question:
      "Siapakah pelukis terkenal Indonesia yang dikenal dengan gaya 'Affandi'?",
    a: "S. Sudjojono",
    b: "Raden Saleh",
    c: "Basoeki Abdullah",
    d: "Affandi",
    correct: "d",
  },
  {
    question: "Apa nama danau terbesar di Indonesia?",
    a: "Danau Toba",
    b: "Danau Singkarak",
    c: "Danau Maninjau",
    d: "Danau Sentani",
    correct: "a",
  },
  {
    question: "Apa nama bahasa resmi Indonesia?",
    a: "Bahasa Jawa",
    b: "Bahasa Sunda",
    c: "Bahasa Betawi",
    d: "Bahasa Indonesia",
    correct: "d",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const labelA = document.getElementById("labelA");
const labelB = document.getElementById("labelB");
const labelC = document.getElementById("labelC");
const labelD = document.getElementById("labelD");

const nextButton = document.getElementById("nextButton");

let currentQuiz = 0;
let score = 0;

const numberQuestionToDisplay = 10;
let selectedQuestions = getRandomQuestions(dataQuiz, numberQuestionToDisplay);

loadQuiz();

function getRandomQuestions(data, number) {
  const shuffledData = data.sort(() => Math.random() - 0.5);
  return shuffledData.slice(0, number);
}

function loadQuiz() {
  if (currentQuiz < numberQuestionToDisplay) {
    // deselectAnswer();
    const currentQuizData = selectedQuestions[currentQuiz];
    questionEl.innerText = `${currentQuiz + 1}. ${currentQuizData.question}`;
    labelA.innerText = "A. " + currentQuizData.a;
    labelB.innerText = "B. " + currentQuizData.b;
    labelC.innerText = "C. " + currentQuizData.c;
    labelD.innerText = "D. " + currentQuizData.d;
  } else {
    showResult();
  }
}

function deselectAnswer() {
  answerEls.forEach((answer) => (answer.checked = false));
}

function getSelected() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

nextButton.addEventListener("click", () => {
  const answer = getSelected();
  console.log(answer);
  if (answer) {
    const currentQuizData = selectedQuestions[currentQuiz];
    if (answer == currentQuizData.correct) {
      score++;
    }
    currentQuiz++;
    loadQuiz();
  } else {
    alert("Pilih salah satu jawaban sebelum melanjutkan.");
  }
});

function showResult() {
  quiz.innerHTML = `
    <h2>Kamu Menjawab ${score}/${numberQuestionToDisplay} Jawaban Benar</h2>
    ${
      score === numberQuestionToDisplay
        ? "<p>Selamat! Kamu menjawab semua pertanyaan dengan benar!</p>"
        : "<p>Tetap semangat! Kamu sudah selesai mengerjakan kuis.</p>"
    }

    <div>
        <button id="restartButton" class="btn btn-danger" onclick="location.reload()">Main Lagi?<i class="fas fa-solid fa-rotate-right"></i></button>
    </div>
  `;

  const restartButton = document.getElementById("restartButton");
  restartButton.addEventListener("click", () => {
    currentQuiz = 0;
    score = 0;
    selectedQuestions = getRandomQuestions(dataQuiz, numberQuestionToDisplay);
    loadQuiz();
  });
}
