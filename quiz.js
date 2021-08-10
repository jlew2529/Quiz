// List of questions that will be on the quiz
var questions = [{
    "question": "Which player has the most NBA championships?",
    "option1": "Bill Russell",
    "option2": "Michael Jordan",
    "option3": "Earvin Magic Johnson",
    "option4": "Kareem Abdul-Jabbar",
    "answer": "1"
}, {
    "question": "Which NBA franchise has the most championships?",
    "option1": "Chicago Bulls",
    "option2": "Los Angeles Lakers",
    "option3": "Boston Celtics",
    "option4": "Golden State Warriors",
    "answer": "3"
}, {
    "question": "Who has won the most NBA Dunk Contests?",
    "option1": "Jason Richardson",
    "option2": "Dominique Wilkins",
    "option3": "Michael Jordan",
    "option4": "Nate Robinson",
    "answer": "4"
}, {
    "question": "Who is the all time scoring leader in NBA history?",
    "option1": "Lebron James",
    "option2": "Kareem Abdul-Jabbar",
    "option3": "Kobe Bryant",
    "option4": "Karl Malone",
    "answer": "2"
}, {
    "question": "Who has scored the most 3pt baskets in NBA history?",
    "option1": "Kyle Korver",
    "option2": "Steph Curry",
    "option3": "Ray Allen",
    "option4": "Reggie Miller",
    "answer": "3"
}, {
    "question": "Which player has the most rebounds in NBA history?",
    "option1": "Bill Russell",
    "option2": "Wilt Chamberlain",
    "option3": "Elvin Hayes",
    "option4": "Kareem Abdul-Jabbar",
    "answer": "2"
}, {
    "question": "Who has the most steals in NBA history?",
    "option1": "John Stockton",
    "option2": "Jason Kidd",
    "option3": "Michael Jordan",
    "option4": "Gary Payton",
    "answer": "1"
}, {
    "question": "Which player has the most blocks in NBA history?",
    "option1": "Dikembe Mutombo",
    "option2": "Kareem Abdul-Jabbar",
    "option3": "Mark Eaton",
    "option4": "Hakeem Olajuwon",
    "answer": "4"
}, {
    "question": "Who is the greatest dunker of all time?",
    "option1": "Michael Jordan",
    "option2": "LeBron James",
    "option3": "Vince Carter",
    "option4": "Dominique Wilkins",
    "answer": "3"
}, {
    "question": "Who is the greatest player of all time?",
    "option1": "LeBron James",
    "option2": "Michael Jordan",
    "option3": "Kobe Bryant",
    "option4": "Kareem Abdul-Jabbar",
    "answer": "2"
}]

var startQuiz = document.querySelector(".start");
var timeEl = document.querySelector(".time");
var questionEl = document.querySelector("#question");
var opt1 = document.querySelector("#opt1");
var opt2 = document.querySelector("#opt2");
var opt3 = document.querySelector("#opt3");
var opt4 = document.querySelector("#opt4");
var currentQuestion = 0;
var secondsLeft = 60;

startQuiz.addEventListener("click", function() {
    console.log("Quiz Started!");
    function setTime() {
        var timerInterval = setInterval(function() {
            secondsLeft--;
            timeEl.textContent = "Time: " + secondsLeft;

            if(secondsLeft === 0) {
                clearInterval(timerInterval);
                alert("Time is up!!!");
            }
        }, 1000);
    }
    setTime();

    function loadQuestion(event) {
        var q = questions[event];
        questionEl.textContent = (event + 1) + ". " + q.question;
        opt1.textContent = q.option1;
        opt2.textContent = q.option2;
        opt3.textContent = q.option3;
        opt4.textContent = q.option4;
    }
    loadQuestion(currentQuestion);
});