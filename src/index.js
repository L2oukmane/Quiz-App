import './style.css';
const questionText =  document.getElementById('question');
const submitBtn = document.querySelector('.submit-btn');
const a_text = document.getElementById('a-text');
const b_text = document.getElementById('b-text');
const c_text = document.getElementById('c-text');
const d_text = document.getElementById('d-text');
const quizContainer = document.querySelector('.quiz-container');
const answerEls = document.querySelectorAll('.answer');

const quizData = [
    {
        question: 'What HTML stands for?',
        a:'Hypertext Transfer Protocol',
        b:'A JavaScript library',
        c:'HyperText Markup language',
        d:'none of the above',
        correct:'c'
    },
    {
        question: 'What is HTTP?',
        a:'Hypertext Transfer Protocol Secure ',
        b:'Programming language',
        c:'Hypertext Transfer Protocol',
        d:'Application interface framework',
        correct:'c'
    },
    {
        question: 'the most used programming language 2020',
        a:'C++',
        b:'JavaScript',
        c:'ruby',
        d:'Python',
        correct:'b'
    },
    {
        question: 'What is JavaScript used for?',
        a:'Adding interactive behavior to web pages',
        b:'Creating web and mobile apps/games ',
        c:'Building web servers and developing server applications',
        d:'All of the above',
        correct:'d'
    },
    {
        question: 'First appearance of javascript',
        a:'1995',
        b:'2015',
        c:'1996',
        d:'2020',
        correct:'a'
    },
    {
        question: 'what is webpack?',
        a:'Game development programming language',
        b:'JavaScript module bundler',
        c:'Cascading Style Sheets',
        d:'JavaScript linter',
        correct:'b'
    },
    {
        question: 'What is an API?',
        a:'Application Programming Interface',
        b:'Graphical operating system ',
        c:'Hypertext Transfer Protocol',
        d:'A JavaScript library',
        correct:'a'
    },

];

let quizCount = 0;
let score = 0;

function loadQuiz () {
    deselectAnswers()
const currentQuiz = quizData[quizCount];
const currentQuestion = currentQuiz.question

questionText.innerText = currentQuestion
a_text.innerText = currentQuiz.a
b_text.innerText = currentQuiz.b
c_text.innerText = currentQuiz.c
d_text.innerText = currentQuiz.d
}
loadQuiz();

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[quizCount].correct) {
            score++;
        }

        quizCount++;
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





