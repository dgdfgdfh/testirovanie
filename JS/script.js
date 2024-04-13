// Массив с вопросами, вариантами ответов и правильными ответами
let questions = [
    {
        question: "Какая столица Швеции?",
        options: ["Стокгольм", "Кёльн", "Париж", "Москва"],
        correctAnswer: "Стокгольм"
    },
    {
        question: "На каком языке говорят в Швеции?",
        options: ["Русский", "Английский", "Китайский", "Шведский"],
        correctAnswer: "Шведский"
    },
    {
        question: "Чем знамента Швеция?",
        options: ["Водкой", "Яблоками", "Клавиатурами", "Мебелью из ИКЕИ"],
        correctAnswer: "Мебелью из ИКЕИ"
    },
];

let currentQuestion = 0
let correctAnswers = 0

function displayQuestion() {
    let questionElement = document.getElementById("question");
    questionElement.textContent = `Вопрос ${currentQuestion + 1}:${questions[currentQuestion].question}`
    let optionsElement = document.getElementById("options")
    optionsElement.innerHTML = "";
    let optionsArray = questions[currentQuestion].options;
    optionsArray.forEach((option) => {
        let button = document.createElement("button")
        optionsElement.append(button);
        button.textContent = option;
    })

};

displayQuestion()