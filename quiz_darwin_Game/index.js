const mainDiv = document.getElementById("container");
const divForQuestions = document.getElementById("questionsDiv");
const DivForOptions = document.getElementById("options");
const nextBtn = document.getElementById("next");
const previousBtn = document.getElementById("previous");
const submitBtn = document.getElementById("submitAnswer");
const startBtn = document.getElementById("start");
const restart = document.getElementById("restart");

let index = 0;
let score = 0;
let answerArry = [];

const questionsArry = [
    {
        id: 0,
        question: "what is my name ?",
        options: {
            A: "ajay",
            B: "suresh",
            C: "Prakash",
            D: "divya"
        },
        Answer: "C.Prakash"

    },
    {
        id: 1,
        question: "what is my surname ?",
        options: {
            A: "ajay",
            B: "suresh",
            C: "Prajapat",
            D: "divya"
        },
        Answer: "C.Prajapat"

    },
    {
        id: 2,
        question: "what is my wife name?",
        options: {
            A: "ajayi",
            B: "sureshui",
            C: "vijaya",
            D: "none"
        },
        Answer: "D.none"

    }
]
// console.log()

startBtn.style.display = "block";
nextBtn.style.display = "none";
previousBtn.style.display = "none";
submitBtn.style.display = "none"
// restart.style.display="none";

startBtn.addEventListener("click", startQuiz);



function startQuiz() {
    startBtn.style.display = "none";
    const optionObject = questionsArry[index].options

    divForQuestions.innerHTML = `<p>${questionsArry[index].question}</p>`;
    for (const key in optionObject) {
        DivForOptions.innerHTML += `
        <label>
        <input type="radio" name="option" oninput="inputAnswer(questionsArry[index].id)" value=${key + "." + optionObject[key]} >
        <div class="options">${key + "."}${optionObject[key]}<div>
        <label>
            `
    }

    nextBtn.style.display = "block";


}

function FornextQuestions() {
    index++;
    divForQuestions.innerHTML = "";
    DivForOptions.innerHTML = "";
    previousBtn.style.display = "block"

    if (index === questionsArry.length - 1) {
        submitBtn.style.display = "block";
        nextBtn.style.display = "none";

    }
    if (index <= (questionsArry.length - 1)) {
        const optionObject = questionsArry[index].options

        divForQuestions.innerHTML = `<p>${questionsArry[index].question}</p>`;
        for (const key in optionObject) {
            DivForOptions.innerHTML += `
            <label>
            <input type="radio" name="option" oninput="inputAnswer(questionsArry[index].id)" value=${key + "." + optionObject[key]}>
            <div class="options">${key + "." + optionObject[key]}<div>
            <label>`
        }
    }
}

function forpreviosQuestions() {
    index--;
    if (index === 0) {
        previousBtn.style.display = "none";
    }
    if (index < questionsArry.length - 1) {
        submitBtn.style.display = "none";
        nextBtn.style.display = "block";
    }
    if (index >= 0) {
        const optionObject = questionsArry[index].options
        divForQuestions.innerHTML = "";
        DivForOptions.innerHTML = "";
        divForQuestions.innerHTML = `<p>${questionsArry[index].question}</p>`;
        const value = answerArry[index].split('.');
        console.log(value);
        for (const key in optionObject) {
            
            if(optionObject[key] === value[1]){
            console.log("hello");
            DivForOptions.innerHTML += `
            <label>
            <input type="radio" name="option" oninput="inputAnswer(questionsArry[index].id)" value=${key + "." + optionObject[key]} checked>
            <div class="options" checked>${key + "." + optionObject[key]}<div>
            <label>`
            }else{
            DivForOptions.innerHTML += `
            <label>
            <input type="radio" name="option" oninput="inputAnswer(questionsArry[index].id)" value=${key + "." + optionObject[key]}>
            <div class="options">${key + "." + optionObject[key]}<div>
            <label>`
            }
            
            
        }

    }

}

function inputAnswer(id) {
    answerArry[id] = document.querySelector('input[name="option"]:checked').value;
}

function submitAnswer() {
    answerArry.forEach((data, index) => {
        console.log(data);
        if (data === questionsArry[index].Answer) {
            score = score + 10;
            console.log(score);
        }
    })

    mainDiv.innerHTML = "";
    mainDiv.innerHTML =
        `
        <p>Your Score<p>
        <h3>${score}</h3>
        <button type="submit" id="restart" onclick="startQuiz()">restart</button>
        `


}