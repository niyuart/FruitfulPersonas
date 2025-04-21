const results = {
  Apple: 1,
  Pear: 2,
  Peach: 3,
  Cherry: 4,
  Orange: 5,
  Strawberry: 6,
};

const questions = [
  {
    question: "1. How do you prefer to spend your weekends?",
    image: "Images/1.gif",
    answers: {
      F: {
        text: "Working on home projects, cooking, or crafting",
        scores: [results.Apple, results.Peach, results.Orange],
      },
      T: {
        text: "Reading a good book or binging a show or movie",
        scores: [results.Pear, results.Peach, results.Strawberry],
      },
      S: {
        text: "Spending quality time with friends or family",
        scores: [results.Cherry, results.Pear, results.Peach],
      },
    },
  },
  {
    question: "2. What makes you feel most appreciated in a relationship?",
    image: "Images/2.gif",
    answers: {
      J: {
        text: "When someone shares their feelings and verbally expresses their appreciation",
        scores: [results.Peach, results.Cherry, results.Strawberry],
      },
      P: {
        text: "When someone encourages my goals and supports my dreams",
        scores: [results.Peach, results.Pear, results.Orange],
      },
      S: {
        text: "When someone shows they care through thoughtful gestures or actions",
        scores: [results.Apple, results.Strawberry, results.Cherry],
      },
    },
  },
  {
    question: "3. How do you typically express love to someone?",
    image: "Images/3.gif",
    answers: {
      S: {
        text: "By planning special surprises or experiences for them",
        scores: [results.Cherry, results.Orange, results.Apple],
      },
      N: {
        text: "By giving compliments or encouraging words",
        scores: [results.Apple, results.Peach, results.Pear],
      },
      T: {
        text: "By spending quality time and being present together",
        scores: [results.Pear, results.Orange, results.Cherry],
      },
    },
  },
  {
    question: "4. What is your preferred way to celebrate a special occasion?",
    image: "Images/4.gif",
    answers: {
      F: {
        text: "Organizing a fun, eventful outing with friends or family",
        scores: [results.Cherry, results.Orange, results.Peach],
      },
      T: {
        text: "Keeping it low-key and intimate with a few loved ones",
        scores: [results.Apple, results.Strawberry, results.Pear, results.Cherry],
      },
      S: {
        text: "Planning a creative and memorable activity or experience",
        scores: [results.Peach, results.Cherry, results.Orange],
      },
    },
  },
  {
    question: "5. How do you handle disagreements with others?",
    image: "Images/5.gif",
    answers: {
      P: {
        text: "Facing the issue head-on and working together to solve it",
        scores: [results.Apple, results.Orange, results.Strawberry],
      },
      J: {
        text: "Focusing on keeping the peace and finding middle ground",
        scores: [results.Strawberry, results.Pear, results.Peach],
      },
      S: {
        text: "Taking a step back to let things settle before addressing it",
        scores: [results.Apple, results.Pear, results.Cherry],
      },
    },
  },
  {
    question: "6. When you're feeling low, what kind of support do you appreciate most?",
    image: "Images/6.gif",
    answers: {
      I: {
        text: "Thoughtful gestures or small gifts that show they care",
        scores: [results.Strawberry, results.Cherry, results.Apple],
      },
      E: {
        text: "Having someone there to cheer you up and spend time with",
        scores: [results.Cherry, results.Pear, results.Peach, results.Orange],
      },
      T: {
        text: "Giving space to relax and recharge on my own",
        scores: [results.Pear, results.Strawberry, results.Apple],
      },
    },
  },
  {
    question: "7. What type of work environment do you find most appealing?",
    image: "Images/7.gif",
    answers: {
      S: {
        text: "A hands-on space where I can focus on getting things done by myself",
        scores: [results.Apple, results.Pear, results.Strawberry, results.Orange],
      },
      N: {
        text: "A creative setting where new ideas can flow freely",
        scores: [results.Cherry, results.Apple, results.Peach],
      },
      T: {
        text: "A team-oriented environment where everyone works together",
        scores: [results.Cherry, results.Orange, results.Peach],
      },
    },
  },
  {
    question: "8. What kind of vacation would you prefer?",
    image: "Images/8.gif",
    answers: {
      J: {
        text: "An adventurous outdoor trip full of activities",
        scores: [results.Orange, results.Peach, results.Cherry],
      },
      P: {
        text: "A peaceful retreat for relaxation and rejuvenation",
        scores: [results.Pear, results.Strawberry, results.Apple],
      },
      S: {
        text: "A trip to explore a new city and experience the culture",
        scores: [results.Orange, results.Cherry, results.Peach],
      },
    },
  },
  {
    question: "9. What are your thoughts on surprises?",
    image: "Images/9.gif",
    answers: {
      F: {
        text: "I enjoy exciting surprises that create memorable experiences",
        scores: [results.Orange, results.Cherry, results.Peach, results.Apple],
      },
      T: {
        text: "I prefer to know what's coming to prepare myself",
        scores: [results.Apple, results.Strawberry, results.Pear],
      },
      S: {
        text: "I appreciate small surprises that show thoughtfulness",
        scores: [results.Pear, results.Strawberry, results.Cherry],
      },
    },
  },
  {
    question: "10. When faced with a challenge, what do you rely on most?",
    image: "Images/10.gif",
    answers: {
      S: {
        text: "My practical skills to figure things out",
        scores: [results.Apple, results.Apple, results.Strawberry, results.Orange],
      },
      N: {
        text: "My creativity to find unique solutions",
        scores: [results.Cherry, results.Pear, results.Peach],
      },
      T: {
        text: "My ability to analyze and plan the best approach",
        scores: [results.Pear, results.Strawberry, results.Orange],
      },
    },
  },
  {
    question: "11. How do you generally approach group projects?",
    image: "Images/11.gif",
    answers: {
      I: {
        text: "Motivating everyone to share ideas and collaborate",
        scores: [results.Cherry, results.Peach, results.Orange],
      },
      E: {
        text: "Doing my part and trusting others to do theirs",
        scores: [results.Apple, results.Strawberry, results.Pear],
      },
      S: {
        text: "Taking charge to lead the group toward the goal",
        scores: [results.Orange, results.Apple, results.Peach],
      },
    },
  },
];

let currentQuestion = 0;

function displayQuestion() {
  const quizElement = document.getElementById("quiz");
  const question = questions[currentQuestion];
  if (question) {
    let html = `<p>${question.question}</p>`;
    if (question.image) {
      html += `<img src="${question.image}" alt="Question ${currentQuestion + 1}">`;
    }
    for (const option in question.answers) {
      html += `<button class="large-rectangular" value="${option}" id="${option}">${question.answers[option].text}</button>`;
    }
    quizElement.innerHTML = html;
    attachButtonClickHandlers();
  } else {
  }
}

document.getElementById("start-button").addEventListener("click", function () {
  document.getElementById("start-page").style.display = "none";
  document.getElementById("quiz-page").style.display = "block";
  currentQuestion = 0;
  userAnswers = {};
  displayQuestion();
});

function attachButtonClickHandlers() {
  const choiceButtons = document.querySelectorAll(".large-rectangular");
  choiceButtons.forEach((button) => {
    button.addEventListener("click", handleAnswer);
  });
}
function handleAnswer(event) {
  const selectedOption = event.target;
  const answerKey = selectedOption.value;
  const question = questions[currentQuestion];
  const answer = question.answers[answerKey];

  const categories = answer.scores.map((score) => {
    return Object.keys(results).find((key) => results[key] === score);
  });

  const category = Object.keys(results).find((key) => results[key] === answer.scores);

  for (const category of categories) {
    if (!userAnswers[category]) {
      userAnswers[category] = 1;
    } else {
      userAnswers[category] += 1;
    }
  }

  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    displayQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  const resultElement = document.getElementById("result");
  const resultTextContainer = document.querySelector(".result-text");
  const resultImage = document.getElementById("result-image");
  const topLetters = {};

  const result = Object.keys(userAnswers).reduce((a, b) => (userAnswers[a] > userAnswers[b] ? a : b));

  resultTextContainer.innerHTML = `
          `;

  resultImage.src = `Images/FruitfulPersonas_${result}_Results.jpg`;
  resultImage.alt = `${result} Image`;

  document.getElementById("quiz").style.display = "none";
  document.getElementById("result").style.display = "block";
  document.getElementById("restart-button").style.display = "block";
}

function restartQuiz() {
  currentQuestion = 0;
  userAnswers = {};
  document.getElementById("result").style.display = "none";
  document.getElementById("quiz").style.display = "block";
  displayQuestion();
}

document.getElementById("restart-button").addEventListener("click", restartQuiz);

displayQuestion();
