const quizData = [
    {
        question: "Koji je glavni grad Azerbejdzana?",
        a: "Kambera",
        b: "Minsk",
        c: "Jemen",
        d: "Baku",
        correct: "d",
    },
    {
        question: "Koja je oznaka za otpornost u elektricnom kolu",
        a: "P",
        b: "C",
        c: "R",
        d: "E",
        correct: "c",
    },
    {
        question: "Koja od navedenih nije osnovna boja?",
        a: "Crvena",
        b: "Zelena",
        c: "Plava",
        d: "Zuta",
        correct: "b",
    },
    {
        question: "Koja drzava je poslednja kapitulirala u Drugom svjetskom ratu?",
        a: "Njemacka",
        b: "Japan",
        c: "Madjarska",
        d: "Italija",
        correct: "b",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const nextBtn = document.getElementById("next");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

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
        if (answer === quizData[currentQuiz].correct) {
            score += 5;
        }
        else
            score -= 2;

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>Your score is ${score} out of 20.</h2>
                
                <button onclick="location.reload()">Reload</button>
               
            `

            document.getElementById("pravila").style.display = "none";
        }
    }
});


nextBtn.addEventListener("click", () => {
    // next
    currentQuiz++;
    if (currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        quiz.innerHTML = `
                <h2>Your score is ${score} out of 20.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `
            
            document.getElementById("pravila").style.display = "none";
            ;
    }

});