const quizDb = [
    {
        question: "Q1: What is the full form of CSE?",
        a: "Computer Science & Engine",
        b: "Computer social & Engineering",
        c: "Computer Science & Engineering",
        d: "Compute Science & Engineering",
        ans: "ans3"
    },
    {
        question: "Q2: What is the full form of CSS",
        a: "Cascading Style Sheet",
        b: "Cascading Style sheep",
        c: "Cartoon Style Sheets",
        d: "Cascading Style Sheets",
        ans: "ans4"
    },
    {
        question: "Q3: What is the full form of DLD?",
        a: "Digital Logic Design",
        b: "Design Logic Digital",
        c: "Digital Logic Device",
        d: "Digital Logic Designs",
        ans: "ans1"
    },
    {
        question: "Q4: What is full form of HTTP?",
        a: "HyperText Transfer Product",
        b: "HyperText Transfer Protocol",
        c: "Hi Transfer Protocol",
        d: "Hay Tum Tum pols",
        ans: "ans2"
    },
   

]


const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector("#showScore");

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
    const qList = quizDb[questionCount];

    question.innerText = qList.question;

    option1.innerText = qList.a;
    option2.innerText = qList.b;
    option3.innerText = qList.c;
    option4.innerText = qList.d;
}

loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElement) => {
        if (curAnsElement.checked) {
            answer = curAnsElement.id;
        }
       
    });
    return answer;
}
const deSelectAll = () => {
    answers.forEach((curAnsElement) => curAnsElement.checked = false);
}

submit.addEventListener("click", () => {
    const checkAnswer = getCheckAnswer();
    console.log(checkAnswer);

    if(checkAnswer ===  quizDb[questionCount].ans){
        score++;
    }

    questionCount++;

    deSelectAll()

    if(questionCount < quizDb.length) {
        loadQuestion();
    }
    else {
        showScore.style.display = "block";
        showScore.innerHTML = `
            <h3>You Scored : ${score}/${quizDb.length} ✌️ </h3>
            <button class="btn" onclick="location.reload()">Play Again</button>
        `
    }
    
})