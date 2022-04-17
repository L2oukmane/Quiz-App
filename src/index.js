import './style.css';
const questionText =  document.getElementById('question');
const submitBtn = document.querySelector('.submit-btn');
const a_text = document.getElementById('a-text');
const b_text = document.getElementById('b-text');
const c_text = document.getElementById('c-text');
const d_text = document.getElementById('d-text');

const quizData = [
    {
        question: 'What HTML stands for?',
        a:'Hypertext Transfer Protocol',
        b:'A JavaScript library',
        c:'HyperText Markup language',
        d:'none of the above',
        answer:'c'
    },
    {
        question: 'What is HTTP?',
        a:'Hypertext Transfer Protocol Secure ',
        b:'Programming language',
        c:'Hypertext Transfer Protocol',
        d:'Application interface framework',
        answer:'c'
    },
    {
        question: 'the most used programming language 2020',
        a:'C++',
        b:'JavaScript',
        c:'ruby',
        d:'Python',
        answer:'b'
    },
    {
        question: 'What is JavaScript used for?',
        a:'Adding interactive behavior to web pages',
        b:'Creating web and mobile apps/games ',
        c:'Building web servers and developing server applications',
        d:'All of the above',
        answer:'d'
    },
    {
        question: 'First appearance of javascript',
        a:'1995',
        b:'2015',
        c:'1996',
        d:'2020',
        answer:'a'
    },
    {
        question: 'what is webpack?',
        a:'Game development programming language',
        b:'JavaScript module bundler',
        c:'Cascading Style Sheets',
        d:'JavaScript linter',
        answer:'b'
    },
    {
        question: 'What is an API?',
        a:'Application Programming Interface',
        b:'Graphical operating system ',
        c:'Hypertext Transfer Protocol',
        d:'A JavaScript library',
        answer:'a'
    },

];

let quizCount = 1;
loadQuiz();

function loadQuiz () {
const currentQuiz = quizData[quizCount];
const currentQuestion = currentQuiz.question

questionText.innerText = currentQuestion
a_text.innerText = currentQuiz.a
b_text.innerText = currentQuiz.b
c_text.innerText = currentQuiz.c
d_text.innerText = currentQuiz.d


}

submitBtn.addEventListener("click", () =>{
    quizCount++
    loadQuiz()
    
})

