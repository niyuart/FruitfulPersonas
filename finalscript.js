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
    image: "Images/background.webp",
    answers: {
      F: {
        text: "Working on home projects, crafting, or trying something new",
        scores: [results.Apple, results.Apple, results.Strawberry],
      },
      T: {
        text: "Relaxing with a good book, movie, or learning something interesting",
        scores: [results.Pear, results.Peach, results.Cherry],
      },
      S: {
        text: "Spending quality time with friends or family",
        scores: [results.Cherry, results.Cherry, results.Pear, results.Peach],
      },
    },
  },
  {
    question: "2. What makes you feel most appreciated in a relationship?",
    image: "Images/background.webp",
    answers: {
      J: {
        text: "When someone openly shares their feelings about me",
        scores: [results.Peach, results.Peach, results.Cherry, results.Apple],
      },
      P: {
        text: "When someone encourages my goals and supports my dreams",
        scores: [results.Orange, results.Orange, results.Strawberry, results.Pear],
      },
      S: {
        text: "When someone shows care through thoughtful gestures or actions",
        scores: [results.Apple, results.Strawberry, results.Cherry],
      },
    },
  },
  {
    question: "3. How do you typically express love to someone?",
    image: "Images/background.webp",
    answers: {
      S: {
        text: "By planning special surprises or experiences for them",
        scores: [results.Cherry, results.Orange, results.Strawberry],
      },
      N: {
        text: "By giving compliments or encouraging words",
        scores: [results.Apple, results.Peach, results.Pear, results.Peach],
      },
      T: {
        text: "By spending quality time and being present together",
        scores: [results.Pear, results.Strawberry, results.Cherry],
      },
    },
  },
  {
    question: "4. What is your preferred way to celebrate a special occasion?",
    image: "Images/background.webp",
    answers: {
      F: {
        text: "Organizing a fun, eventful outing with friends or family",
        scores: [results.Cherry, results.Orange, results.Peach],
      },
      T: {
        text: "Keeping it low-key and intimate with loved ones",
        scores: [results.Apple, results.Strawberry, results.Pear],
      },
      S: {
        text: "Doing something unique and memorable",
        scores: [results.Peach, results.Orange, results.Apple],
      },
    },
  },
  {
    question: "5. How do you handle disagreements with others?",
    image: "Images/background.webp",
    answers: {
      P: {
        text: "Facing the issue head-on and working together to solve it",
        scores: [results.Apple, results.Orange, results.Orange, results.Peach],
      },
      J: {
        text: "Focusing on keeping the peace and finding middle ground",
        scores: [results.Cherry, results.Strawberry, results.Strawberry],
      },
      S: {
        text: "Taking a step back to let things settle before addressing it",
        scores: [results.Apple, results.Strawberry, results.Pear, results.Pear],
      },
    },
  },
  {
    question:
      "6. When you're feeling low, what kind of support do you appreciate most?",
    image: "Images/background.webp",
    answers: {
      I: {
        text: "Thoughtful gestures or small gifts that show they care",
        scores: [results.Strawberry, results.Strawberry, results.Orange],
      },
      E: {
        text: "Having someone there to cheer you up and spend time with",
        scores: [results.Cherry, results.Pear, results.Peach],
      },
      T: {
        text: "Giving space to relax and recharge on my own",
        scores: [results.Pear, results.Strawberry, results.Apple],
      },
    },
  },
  {
    question: "7. What type of work environment do you find most appealing?",
    image: "Images/background.webp",
    answers: {
      S: {
        text: "A hands-on space where I can focus on getting things done",
        scores: [results.Apple, results.Strawberry, results.Apple],
      },
      N: {
        text: "A creative setting where new ideas and collaboration flow",
        scores: [results.Cherry, results.Pear, results.Peach, results.Peach],
      },
      T: {
        text: "A team-oriented environment where everyone works together",
        scores: [results.Cherry, results.Orange, results.Peach],
      },
    },
  },
  {
    question: "8. What kind of vacation would you prefer?",
    image: "Images/background.webp",
    answers: {
      J: {
        text: "An adventurous outdoor trip full of activities",
        scores: [results.Orange, results.Orange, results.Cherry, results.Peach],
      },
      P: {
        text: "A peaceful retreat for relaxation and rejuvenation",
        scores: [results.Pear, results.Strawberry, results.Apple],
      },
      S: {
        text: "A trip to explore a new city and experience the culture",
        scores: [results.Strawberry, results.Cherry, results.Peach],
      },
    },
  },
  {
    question: "9. What are your thoughts on surprises?",
    image: "Images/background.webp",
    answers: {
      F: {
        text: "I enjoy exciting surprises that create memorable experiences",
        scores: [results.Orange, results.Cherry, results.Peach],
      },
      T: {
        text: "I prefer to know what's coming to prepare myself",
        scores: [results.Apple, results.Strawberry, results.Pear],
      },
      S: {
        text: "I appreciate small surprises that show thoughtfulness",
        scores: [results.Apple, results.Strawberry, results.Cherry],
      },
    },
  },
  {
    question: "10. When faced with a challenge, what do you rely on most?",
    image: "Images/background.webp",
    answers: {
      S: {
        text: "My practical skills to figure things out",
        scores: [results.Apple, results.Apple, results.Strawberry, results.Orange],
      },
      N: {
        text: "My creativity to find unique solutions",
        scores: [results.Cherry, results.Pear, results.Peach, results.Peach],
      },
      T: {
        text: "My ability to analyze and plan the best approach",
        scores: [results.Pear, results.Apple, results.Peach],
      },
    },
  },
  {
    question: "11. How do you generally approach group projects?",
    image: "Images/background.webp",
    answers: {
      I: {
        text: "Motivating everyone to share ideas and collaborate",
        scores: [results.Cherry, results.Cherry, results.Peach],
      },
      E: {
        text: "Doing my part and trusting others to do theirs",
        scores: [results.Apple, results.Strawberry, results.Strawberry, results.Pear],
      },
      S: {
        text: "Taking charge to lead the group toward the goal",
        scores: [results.Orange, results.Orange, results.Apple, results.Peach],
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
      html += `<img src="${question.image}" alt="Question ${
        currentQuestion + 1
      }">`;
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

  const category = Object.keys(results).find(
    (key) => results[key] === answer.scores
  );

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

  const result = Object.keys(userAnswers).reduce((a, b) =>
    userAnswers[a] > userAnswers[b] ? a : b
  );

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

document
  .getElementById("restart-button")
  .addEventListener("click", restartQuiz);

displayQuestion();
