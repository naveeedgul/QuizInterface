const Questions = [
  {
    question: "What does HTML stand for?",
    a: "Hyper Text Markup Language",
    b: "Hyper Transfer Markup Language",
    c: "High Text Markup Language",
    d: "Hyperlink and Text Markup Language",
    correctOption: "a",
  },
  {
    question: "Which of the following is a programming language?",
    a: "HTML",
    b: "CSS",
    c: "JavaScript",
    d: "XML",
    correctOption: "c",
  },
  {
    question: "What does CSS stand for?",

    a: "Counter Style Sheet",
    b: "Computer Style Sheet",
    c: "Colorful Style Sheet",
    d: "Cascading Style Sheet",
    correctOption: "d",
  },
  {
    question: "Which of the following is not a JavaScript framework/library?",

    a: "React",
    b: "Angular",
    c: "Vue",
    d: "Bootstrap",
    correctOption: "d",
  },
  {
    question: "What is the purpose of the alt attribute in an HTML image tag?",

    a: "To provide alternative text for browsers that cannot display the image",
    b: "To set the alignment of the image",
    c: "To define the source of the image",
    d: "To specify the width of the image",
    correctOption: "a",
  },
  {
    question: "What is the latest version of HTML as of 2022?",

    a: "HTML4",
    b: "HTML5",
    c: "XHTML",
    d: "HTML2022",
    correctOption: "b",
  },
  {
    question:
      "Which of the following is used for version control in software development?",

    a: "Git",
    b: "SVN",
    c: "Mercurial",
    d: "All of the above",
    correctOption: "d",
  },
  {
    question: "What does API stand for?",

    a: "Application Programming Interface",
    b: "Advanced Programming Interface",
    c: "Automated Programming Interface",
    d: "Application Process Integration",
    correctOption: "a",
  },
  {
    question:
      "In CSS, which property is used to control the spacing between elements?",

    a: "margin",
    b: "padding",
    c: "border",
    d: "spacing",
    correctOption: "a",
  },
  {
    question:
      "Which of the following is NOT a valid color representation in CSS?",

    a: "#ff0000",
    b: "rgb(255, 255, 0)",
    c: "hsl(120, 100%, 50%)",
    d: "color: red",
    correctOption: "d",
  },
];
const questionLabel = document.querySelector(".question");
const options = document.querySelectorAll(".opts");
const score = document.getElementById("totalScore");
const quesBox = document.getElementsByClassName("quiz-container");
const submitBtn = document.getElementById("submitBtn");
let quesLen = Questions.length;
console.log(quesBox);
console.log(options);
let counter = 0;
let totalScore = 0;
let correct = 0;
const startQuizBtn = document.getElementById("startQuizBtn");
const quizContainer = document.getElementById("quiz-Container");

startQuizBtn.addEventListener("click", function () {
  startQuizBtn.style.display = "none";
  quizContainer.style.display = "block";
  loadQuestion();
});

const removeOptionStyling = () => {
  options.forEach((option) => {
    option.parentElement.style.backgroundColor = "";
  });
};
const loadQuestion = () => {
  removeOptionStyling();
  if (counter == quesLen) {
    return endQuiz();
  }
  score.textContent = `Your score: ${totalScore}`;

  resetAll();
  const quest = Questions[counter];
  questionLabel.firstElementChild.innerHTML = `Q${counter + 1}) ${
    quest.question
  }`;
  options[0].nextElementSibling.textContent = quest.a;
  options[1].nextElementSibling.textContent = quest.b;
  options[2].nextElementSibling.textContent = quest.c;
  options[3].nextElementSibling.textContent = quest.d;
};
const endQuiz = () => {
  quesBox[0].innerHTML = `
  <div>
            <h3>You've got ${correct} out of ${quesLen} correct </h3>
            <h3>And your percentage of Correct Answer is ${
              (totalScore / 100) * 100
            }</h3>
  </div>
  `;
};

const answerCheck = () => {
  let selectedOption;
  options.forEach((option) => {
    if (option.checked) {
      selectedOption = option;
    }
  });

  if (selectedOption) {
    const data = Questions[counter];
    if (selectedOption.value === data.correctOption) {
      selectedOption.parentElement.style.backgroundColor = "rgba(0,255,0,0.5)";
    } else {
      selectedOption.parentElement.style.backgroundColor = "rgba(255,0,0,0.5)";
    }
  }

  return selectedOption ? selectedOption.value : null;
};
const resetAll = () => {
  options.forEach((inputEl) => {
    inputEl.checked = false;
  });
};
submitBtn.addEventListener("click", function () {
  console.log("Clicked");
  let ans = answerCheck();
  const data = Questions[counter];
  if (ans == data.correctOption) {
    correct += 1;
    totalScore += 10;
  }
  counter++;
  console.log(counter);
  setTimeout(loadQuestion, 600);
});

loadQuestion();
