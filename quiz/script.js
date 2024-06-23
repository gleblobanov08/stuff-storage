const answers = ["arsenal", "aston villa", "birmingham", "blackburn", "blackpool",
    "bolton", "bournemouth", "bradford", "brentford", "brighton", "burnley", "cardiff", 
    "charlton", "chelsea", "coventry", "crystal palace", "derby county", "everton", 
    "fulham", "huddersfield", "hull", "ipswich", "leeds", "leicester", "liverpool", 
    "luton", "man city", "man united", "middlesbrough", "newcastle", "nottingham forest", 
    "norwich", "portsmouth", "qpr", "reading", "sheffield", "southampton", "stoke", 
    "sunderland", "swansea", "tottenham", "watford", "west ham", "west brom", "wigan", "wolverhampton"];
const answerInput = document.getElementById("answer-input");
const answersContainer = document.getElementById("answers-container");
const prog = document.getElementById("progress");
let counter = 0;
prog.innerText = "0/46";

const answerElements = answers.map(answer => {
    const answerElement = document.createElement("div");
    answerElement.className = "answer";
    answerElement.textContent = answer;
    answersContainer.appendChild(answerElement);
    return answerElement;
});

const revealedAnswers = new Set();

answerInput.addEventListener("input", () => {
    const userInput = answerInput.value.trim().toLowerCase().replace(/\s+/g, "");
    if (userInput) {
        const matchingAnswerIndex = answers.findIndex(answer => 
            answer.toLowerCase().replace(/\s+/g, "") === userInput && !revealedAnswers.has(answer)
        );
        if (matchingAnswerIndex !== -1) {
            answerElements[matchingAnswerIndex].classList.add("revealed");
            revealedAnswers.add(answers[matchingAnswerIndex]);
            answerInput.value = "";
            counter++;
          prog.innerText = counter + "/46";
        }
    }
});