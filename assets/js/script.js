// Array to store the questions for the quiz
const quizQuestionData = [
    {
        continent: "americas",
        initialAnswerPhrase: "Colombia is the country that borders Panama, Venezuela, Brazil, Peru and Ecuador.",
        funFact: "Colombia is also the only country in South America to have beaches in both the Pacific Ocean and the caribbean Sea.",
        hint:  {
            hintText: "Take a look at this map which labels the border countries. See if you know the country in question by its location",
            hintImg: ""
        },
        quiz:  {
            question: "Which country has Panama, Venezuela, Brazil, Peru and Ecuador as its bordering neighbors?",
            a: "Argentina",
            b: "Colombia",
            c: "Bolivia",
            d: "Chile",
            correct: "Colombia"
        }
    },
    {
        continent: "americas",
        initialAnswerPhrase: "The Missouri River is the longest river in North America.",
        funFact: "The Missouri river flows into North America’s second largest river, the Mississippi river. When combined, these two make up the world’s fourth largest river system",
        hint: {
            hintText: "Take a look at this Map and compare the rivers you see!",
            hintImg: ""
        },
        quiz: {
            question: "What is the longest river in North America?",
            a: "Missouri River",
            b: "Mississippi River",
            c: "Colorado River",
            d: "Yukon River",
            correct: "Missouri River"
        }

    },
    {
        continent: "americas",
        initialAnswerPhrase: "The highest mountain in the americas is Aconcagua in Mendoza, Argentina.",
        funFact: "Not only is Aconcagua the highest mountain in the Americas, it is also the highest mountain outside Asia. Its summit is at an elevation of 6,961 meters (22,838 ft)",
        hint: {
            hintText: "Look around this map and see if you can discern where the highest mountain might be.",
            hintImg: ""
        },
        quiz: {
            question: "Where is the highest mountain in the Americas?",
            a: "Colorado, USA",
            b: "Mendoza, Argentina",
            c: "Alaska, USA",
            d: "Yungay, Peru",
            correct: "Mendoza, Argentina"
        }
    },
    {
        continent: "europe",
        initialAnswerPhrase: "Slovenia, Austria and Switzerland all share borders with Italy, but Germany does not!",
        funFact: "",
        hint: {
            hintText: "Look at this map and see if you can discern which country doesn’t share a border with Italy",
            hintImg: ""
        },
        quiz: {
            question: "Which country does not share a border with Italy?",
            a: "Slovenia",
            b: "Switzerland",
            c: "Austria",
            d: "Germany",
            correct: "Germany"
        }
    },
    {
        continent: "europe",
        initialAnswerPhrase: "The body of water east of Sardinia is the Tyrrhenian Sea.",
        funFact: "The Tyrrhenian sea is named after the legendary figure, Tyrrhenus, who, according to Herodotus, led the people of Lydia (modern day southern Türkiye) to the area of Etruria on the west coast of Italy.",
        hint: {
            hintText: "If you can remember which island Sardinia is, this map will tell you the answer!",
            hintImg: ""
        },
        quiz: {
            question: "What is the name of the body of water east of island of Sardinia?",
            a: "Tyrrhenian Sea",
            b: "Ionian Sea",
            c: "Adriatic Sea",
            d: "Ligurian Sea",
            correct: "Tyrrhenian Sea"
        }
    },
    {
        continent: "europe",
        initialAnswerPhrase: "Mulhacén is located in the Sierra Nevada, in the Baetic Mountain Range.",
        funFact: "The Baetic Mountain range connects to the Rif mountain range in northern Morocco. It is theorised that 5.3 million years ago these two ranges were connected and the Mediterranean was a dry basin. When the Atlantic Ocean broke through these mountains (an event called the Zanclean flood), the Mediterranean basin was filled with water rushing at 3.5 billion cubic feet per second.",
        hint: {
            hintText: "Look at this map and see if you can discern where the highest mountain is.",
            hintImg: ""
        },
        quiz: {
            question: "In which mountain is Mulhacén, the highest mountain on mainland Spain?",
            a: "Iberian Range",
            b: "Cantabrian Range",
            c: "Baetic Range",
            d: "Pyrennes",
            correct: "Baetic Range"
        }
    },
    {
        continent: "africa",
        initialAnswerPhrase: "Lesotho is situated inside of South Africa",
        funFact: "Lesotho is one of three countries in the world that are entirely encircled by another country. The other two are San Marino and the Vatican, both in Italy.",
        hint: {
            hintText: "Look at this map. If you can remember the name of country inside South Africa, you will know the answer.",
            hintImg: ""
        },
        quiz: {
            question: "Which country in Africa is situated inside another country?",
            a: "Lesotho",
            b: "Senegal",
            c: "Benin",
            d: "Rwanda",
            correct: "Lesotho"
        }
    },
    {
        continent: "africa",
        initialAnswerPhrase: "The second longest river in Africa is the Congo River.",
        funFact: "The Congo River, formerly called the Zaire River, is also the second largest river in the world (by water discharge volume; second only to the Amazon River in South America). It is, however, the deepest river in the world with certain areas being up to 219.5 m (720 ft) deep!",
        hint: {
            hintText: "Take a look at this Map and compare the rivers you see!",
            hintImg: ""
        },
        quiz: {
            question: "What is Africa’s second longest river?",
            a: "The Zambezi River",
            b: "The Congo River",
            c: "The Kasai River",
            d: "The Yellow River",
            correct: "The Congo River"
        }
    },
    {
        continent: "africa",
        initialAnswerPhrase: "The Simien mountains are located in Ethiopia",
        funFact: "The Simien mountains are one of the few places in Africa where snow regularly falls. Additionally, along with the Drakensberg mountains in South Africa, they have a geologically unique formation which makes them a unique appearance.",
        hint: {
            hintText: "If you can remember the name of this country on the map, then you will know the answer!",
            hintImg: ""
        },
        quiz: {
            question: "The Simien mountains are located in which country?",
            a: "Sudan",
            b: "Kenya",
            c: "Uganda",
            d: "Ethiopia",
            correct: "Ethiopia",
        }
    },
    {
        continent: "australasia",
        initialAnswerPhrase: "Bahrain is the the only island state in the Persian Gulf",
        funFact: "The island of Bahrain is also the site of the ancient Dilmun civilisation which the ancient Mesopotamians viewed as a sacred, paradisiac place. ",
        hint: {
            hintText: "If you can find the Persian Gulf on this map, then you can find the answer!",
            hintImg: ""
        },
        quiz: {
            question: "Which country in Asia is surrounded on all sides by the Persian Gulf (i.e., is an island in the Persian Gulf? ",
            a: "Qatar",
            b: "Kuwait",
            c: "Bahrain",
            d: "Oman",
            correct: "Bahrain"
        }
    },
    {
        continent: "australasia",
        initialAnswerPhrase: "Lake Baikal is in Russia.",
        funFact: "Not only is Lake Baikal the world’s deepest lake (up to 1,642 m or 5,387 ft deep), it’s also the world’s largest freshwater lake by water volume (22-23% of the world’s fresh surface water) and the world’s oldest lake (25-30 million years old). Additionally, the way it freezes in the winter is very stunning! ",
        hint: {
            hintText: "Look at this map and, if you can remember where the listed countries are on a map, you will find the answer!",
            hintImg: ""
        },
        quiz: {
            question: "In which country is Lake Baikal, the world’s deepest lake?",
            a: "Mongolia",
            b: "Russia",
            c: "China",
            d: "Kazakhstan",
            correct: "Russia"
        }
    },
    {
        continent: "australasia",
        initialAnswerPhrase: "The Southern Alps span New Zealand’s South Island.",
        funFact: "The Māori name for the range is Kā Tiritiri o te Moana which means 'the Mirage of the Ocean'. This mountain range is also one of the film locations for the Lord of the Rings trilogy.",
        hint: {
            hintText: "",
            hintImg: ""
        },
        quiz: {
            question: "Which mountain range spans New Zealand’s South Island?",
            a: "Southern Alps",
            b: "The Snowy Mountains",
            c: "Blue Mountains",
            d: "Tararua Range",
            correct: "Southern Alps"
        }
    }
];

// Global Variables

let currentQuiz = 0;

// Functions

document.addEventListener("DOMContentLoaded", function() {
    loadQuestion();
    checkAnswer();
});


/**
 * Loads the question and hint data of the current question to the game html page
 */
function loadQuestion() {
    let currentQuestion = quizQuestionData[currentQuiz].quiz.question;
    let currentOptions = quizQuestionData[currentQuiz].quiz;

    document.getElementById('game-question').innerHTML = currentQuestion;
    document.getElementById('answer-option-1').innerHTML = currentOptions.a;
    document.getElementById('answer-option-2').innerHTML = currentOptions.b;
    document.getElementById('answer-option-3').innerHTML = currentOptions.c;
    document.getElementById('answer-option-4').innerHTML = currentOptions.d;
}

/**
 * Adds event listeners to answer boxes. Then checks whether the selected answer is correct or not
 */
function checkAnswer() {
    let answers = document.getElementsByClassName('answer-container');

    for (let answer of answers) {
        answer.addEventListener('click', function() {
            if (this.children[1].innerHTML === quizQuestionData[currentQuiz].quiz.correct) {
                incrementScore();
                document.getElementById('solution-head').innerHTML = 'Congratulations!';
                document.getElementById('solution-statement-1').innerHTML = 'Your answer is correct!';
                document.getElementById('solution-statement-2').innerHTML = quizQuestionData[currentQuiz].initialAnswerPhrase;
                document.getElementById('fun-fact').innerHTML = quizQuestionData[currentQuiz].funFact;
            } else {
                document.getElementById('solution-head').innerHTML = 'Sorry!';
                document.getElementById('solution-statement-1').innerHTML = 'Your answer is incorrect.';
                document.getElementById('solution-statement-2').innerHTML = quizQuestionData[currentQuiz].initialAnswerPhrase;
                document.getElementById('fun-fact').innerHTML = quizQuestionData[currentQuiz].funFact;
            }
        })
    }
}

/**
 * Used to increment the score if the user selected answer is correct
 * This code is taken from the Code Institute Love Maths project and 
 * adjusted to fit this project
 */
function incrementScore() {
    let oldScore = parseInt(document.getElementById('score').innerText);
    document.getElementById('score').innerText = oldScore + 200;
}

/**
 * Loads the appropriate content to the solution area depending on
 * whether the user answer is correct or incorrect
 */
function loadSolution() {

}

/**
 * Adds the class 'hidden' to the solution area of the game html
 * so that the solution area is not displayed
 */
function hideSolutionArea() {

}

/**
 * Removes the class 'hidden' from the solution area of the game html
 * so that the solution area is displayed
 */
function revealSolutionArea() {

}

/**
 * Adds the class 'hidden' to the question area of the game html
 * so that the question area is not displayed
 */
function hideQuestionArea() {

}

/**
 * Removes the class 'hidden' from the question area of the game html
 * so that the question area is displayed
 */
function revealQuestionArea() {

}

/**
 * Adds event listener to the 'Next Question' button that increments
 * the current question number and runs the loadQuestion function
 */
function nextQuestion() {

}

/**
 * Targets the subject icons at the bottom of the screen and
 * changes their colors to green or red depending on whether the 
 * user answer is correct or incorrect
 */
function incrementProgressBar() {

}

/**
 * Targets the continent icons at the bottom of the screen and
 * turns the continent of the current question to a different color
 */
function highlightCurrentContinent() {

}

/**
 * Adds event listener to the hint button which loads the hint modal box
 */
function loadHintModal() {

}