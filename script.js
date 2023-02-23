const questions = [
    {
      question: "Who is the only indian to have won the United Nations Award in the field of human rights?",
      answers: [
        { text: "Baba Amte", correct: true },
        { text: "Ela Bhatt", correct: false },
        { text: "Kannshi Ram", correct: false },
        { text: "Verghese Kurien", correct: false }
      ]
    },
    {
      question: "Garo-Khasi range is located in which Indian state?",
      answers: [
        { text: "Mizoram", correct: false },
        { text: "Meghalaya", correct: true },
        { text: "Sikkim", correct: false },
        { text: "Odisha", correct: false }
      ]
    },
    {
      question: "In which year did UNESCO include Yoga in its Intangible Cultural Heritage list?",
      answers: [
        { text: "2019", correct: false },
        { text: "2011", correct: false },
        { text: "2014", correct: false },
        { text: "2016", correct: true }
      ]
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionEl = document.getElementById("question");
  const answerEls = Array.from(document.getElementsByClassName("answer"));
  const progressEl = document.getElementById("progress");
  const scoreEl = document.getElementById("score");
  const correctAnswerEl = document.getElementById("correct-answer");
  
  showQuestion();
  
  answerEls.forEach(answerEl => {
    answerEl.addEventListener("click", e => {
      const selectedAnswer = questions[currentQuestion].answers.find(
        answer => answer.text === e.target.innerText
      );
      if (selectedAnswer.correct) {
        score++;
      }
      if (currentQuestion + 1 === questions.length) {
        scoreEl.innerText = `Score: ${score}/${questions.length}`;
        scoreEl.style.display = "block";
        // Show the correct answers for each question
        for (let i = 0; i < questions.length; i++) {
          const correctAnswer = questions[i].answers.find(answer => answer.correct).text;
          correctAnswerEl.innerText += `Question ${i + 1}: ${correctAnswer}\n`;
        }
        correctAnswerEl.style.display = "block";
      } else {
        currentQuestion++;
        showQuestion();
      }
    });
  });
  
  function showQuestion() {
    const currentQuestionData = questions[currentQuestion];
    questionEl.innerText = currentQuestionData.question;
    answerEls.forEach((answerEl, index) => {
      answerEl.innerText = currentQuestionData.answers[index].text;
    });
    progressEl.innerText = `Question ${currentQuestion + 1} of ${
      questions.length
    }`;
  }