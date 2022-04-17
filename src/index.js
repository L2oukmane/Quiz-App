import './style.css';

const questionText = document.getElementById('question');
const submitBtn = document.querySelector('.submit-btn');
const aText = document.getElementById('a-text');
const bText = document.getElementById('b-text');
const cText = document.getElementById('c-text');
const dText = document.getElementById('d-text');
const quizContainer = document.querySelector('.quiz-container');
const answerEls = document.querySelectorAll('.answer');

const quizData = [
  {
    question: 'What HTML stands for?',
    a: 'Hypertext Transfer Protocol',
    b: 'A JavaScript library',
    c: 'HyperText Markup language',
    d: 'none of the above',
    correct: 'c',
  },
  {
    question: 'What is HTTP?',
    a: 'Hypertext Transfer Protocol Secure ',
    b: 'Programming language',
    c: 'Hypertext Transfer Protocol',
    d: 'Application interface framework',
    correct: 'c',
  },
  {
    question: 'the most used programming language 2020',
    a: 'C++',
    b: 'JavaScript',
    c: 'ruby',
    d: 'Python',
    correct: 'b',
  },
  {
    question: 'What is JavaScript used for?',
    a: 'Adding interactive behavior to web pages',
    b: 'Creating web and mobile apps/games ',
    c: 'Building web servers and developing server applications',
    d: 'All of the above',
    correct: 'd',
  },
  {
    question: 'First appearance of javascript',
    a: '1995',
    b: '2015',
    c: '1996',
    d: '2020',
    correct: 'a',
  },
  {
    question: 'what is webpack?',
    a: 'Game development programming language',
    b: 'JavaScript module bundler',
    c: 'Cascading Style Sheets',
    d: 'JavaScript linter',
    correct: 'b',
  },
  {
    question: 'What is an API?',
    a: 'Application Programming Interface',
    b: 'Graphical operating system ',
    c: 'Hypertext Transfer Protocol',
    d: 'A JavaScript library',
    correct: 'a',
  },

];

let quizCount = 0;
let score = 0;

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

function loadQuiz() {
  deselectAnswers();
  const currentQuiz = quizData[quizCount];
  const currentQuestion = currentQuiz.question;

  questionText.innerText = currentQuestion;
  aText.innerText = currentQuiz.a;
  bText.innerText = currentQuiz.b;
  cText.innerText = currentQuiz.c;
  dText.innerText = currentQuiz.d;
}
loadQuiz();

function getSelected() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

submitBtn.addEventListener('click', () => {
  // check to see the answer
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[quizCount].correct) {
      score += 1;
    }

    quizCount += 1;
    if (quizCount < quizData.length) {
      loadQuiz();
    } else {
      quizContainer.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
    }
  }
});
