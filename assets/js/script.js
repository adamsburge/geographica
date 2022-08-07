// Array to store the questions for the quiz
const quizQuestionData = [
    {
        continent: "americas",
        initialAnswerPhrase: "Colombia is the country that borders Panama, Venezuela, Brazil, Peru and Ecuador.",
        funFact: "Colombia is also the only country in South America to have beaches in both the Pacific Ocean and the caribbean Sea.",
        hint:  {
            hintText: "If you can remember where Panama is, you'll find the answer!",
            hintMap: "https://api.mapbox.com/styles/v1/asb216/cl6dsdffm001815pma2y79oqr.html?title=view&access_token=pk.eyJ1IjoiYXNiMjE2IiwiYSI6ImNsNmRpMWMxczA1cHozZHFvOTZtdjlhOTkifQ.Q9M87flmP65q3vUGLiuvmQ&zoomwheel=true&fresh=true#4.59/40.53/5.27/19.2/51"
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
            hintText: "Compare the rivers in North America!",
            hintMap: "https://api.mapbox.com/styles/v1/asb216/cl6jisxaw001614oejdq4etp7.html?title=view&access_token=pk.eyJ1IjoiYXNiMjE2IiwiYSI6ImNsNmRpMWMxczA1cHozZHFvOTZtdjlhOTkifQ.Q9M87flmP65q3vUGLiuvmQ&zoomwheel=true&fresh=true#3.34/49.08/90.67/21.6/48"
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
            hintText: "See if you can discern where the highest mountain in the Americas might be.",
            hintMap: "https://api.mapbox.com/styles/v1/asb216/cl6dsrk7a001716nzw4c2byj9.html?title=view&access_token=pk.eyJ1IjoiYXNiMjE2IiwiYSI6ImNsNmRpMWMxczA1cHozZHFvOTZtdjlhOTkifQ.Q9M87flmP65q3vUGLiuvmQ&zoomwheel=true&fresh=true#4.21/32.62/-98.01/21.6/48"
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
            hintText: "See if you can discern which country doesn’t share a border with Italy",
            hintMap: "https://api.mapbox.com/styles/v1/asb216/cl6dsdffm001815pma2y79oqr.html?title=view&access_token=pk.eyJ1IjoiYXNiMjE2IiwiYSI6ImNsNmRpMWMxczA1cHozZHFvOTZtdjlhOTkifQ.Q9M87flmP65q3vUGLiuvmQ&zoomwheel=true&fresh=true#4.59/40.53/5.27/19.2/51"
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
            hintText: "If you can remember where the island of Sardinia is, this map will tell you the answer!",
            hintMap: "https://api.mapbox.com/styles/v1/asb216/cl6jisxaw001614oejdq4etp7.html?title=view&access_token=pk.eyJ1IjoiYXNiMjE2IiwiYSI6ImNsNmRpMWMxczA1cHozZHFvOTZtdjlhOTkifQ.Q9M87flmP65q3vUGLiuvmQ&zoomwheel=true&fresh=true#3.34/49.08/90.67/21.6/48"
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
        initialAnswerPhrase: "Mulhacén is located in the Sierra Nevada, which is inside the larger Baetic Mountain Range.",
        funFact: "The Baetic Mountain range connects to the Rif mountain range in northern Morocco. It is theorised that 5.3 million years ago these two ranges were connected and the Mediterranean was a dry basin. When the Atlantic Ocean broke through these mountains (an event called the Zanclean flood), the Mediterranean basin was filled with water rushing at 3.5 billion cubic feet per second.",
        hint: {
            hintText: "See if you can discern where the highest mountain is.",
            hintMap: "https://api.mapbox.com/styles/v1/asb216/cl6dsrk7a001716nzw4c2byj9.html?title=view&access_token=pk.eyJ1IjoiYXNiMjE2IiwiYSI6ImNsNmRpMWMxczA1cHozZHFvOTZtdjlhOTkifQ.Q9M87flmP65q3vUGLiuvmQ&zoomwheel=true&fresh=true#4.21/32.62/-98.01/21.6/48"
        },
        quiz: {
            question: "In which mountain is Mulhacén, the highest mountain on mainland Spain?",
            a: "Iberian Range",
            b: "Sierra Morena",
            c: "Sierra Nevada",
            d: "Pyrennes",
            correct: "Sierra Nevada"
        }
    },
    {
        continent: "africa",
        initialAnswerPhrase: "Lesotho is situated inside of South Africa",
        funFact: "Lesotho is one of three countries in the world that are entirely encircled by another country. The other two are San Marino and the Vatican, both in Italy.",
        hint: {
            hintText: "Look at this map and see if you can find the answer!",
            hintMap: "https://api.mapbox.com/styles/v1/asb216/cl6dsdffm001815pma2y79oqr.html?title=view&access_token=pk.eyJ1IjoiYXNiMjE2IiwiYSI6ImNsNmRpMWMxczA1cHozZHFvOTZtdjlhOTkifQ.Q9M87flmP65q3vUGLiuvmQ&zoomwheel=true&fresh=true#4.59/40.53/5.27/19.2/51"
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
            hintText: "Compare the rivers you see in Africa!",
            hintMap: "https://api.mapbox.com/styles/v1/asb216/cl6jisxaw001614oejdq4etp7.html?title=view&access_token=pk.eyJ1IjoiYXNiMjE2IiwiYSI6ImNsNmRpMWMxczA1cHozZHFvOTZtdjlhOTkifQ.Q9M87flmP65q3vUGLiuvmQ&zoomwheel=true&fresh=true#3.34/49.08/90.67/21.6/48"
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
            hintText: "Compare the mountainous countries in Africa!",
            hintMap: "https://api.mapbox.com/styles/v1/asb216/cl6dsrk7a001716nzw4c2byj9.html?title=view&access_token=pk.eyJ1IjoiYXNiMjE2IiwiYSI6ImNsNmRpMWMxczA1cHozZHFvOTZtdjlhOTkifQ.Q9M87flmP65q3vUGLiuvmQ&zoomwheel=true&fresh=true#4.21/32.62/-98.01/21.6/48"
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
            hintMap: "https://api.mapbox.com/styles/v1/asb216/cl6dsdffm001815pma2y79oqr.html?title=view&access_token=pk.eyJ1IjoiYXNiMjE2IiwiYSI6ImNsNmRpMWMxczA1cHozZHFvOTZtdjlhOTkifQ.Q9M87flmP65q3vUGLiuvmQ&zoomwheel=true&fresh=true#4.59/40.53/5.27/19.2/51"
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
            hintText: "If you can remember where the listed countries are on a map, you will find the answer!",
            hintMap: "https://api.mapbox.com/styles/v1/asb216/cl6jisxaw001614oejdq4etp7.html?title=view&access_token=pk.eyJ1IjoiYXNiMjE2IiwiYSI6ImNsNmRpMWMxczA1cHozZHFvOTZtdjlhOTkifQ.Q9M87flmP65q3vUGLiuvmQ&zoomwheel=true&fresh=true#3.34/49.08/90.67/21.6/48"
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
            hintText: "If you can remember where New Zealand is, you'll find the answer!",
            hintMap: "https://api.mapbox.com/styles/v1/asb216/cl6dsrk7a001716nzw4c2byj9.html?title=view&access_token=pk.eyJ1IjoiYXNiMjE2IiwiYSI6ImNsNmRpMWMxczA1cHozZHFvOTZtdjlhOTkifQ.Q9M87flmP65q3vUGLiuvmQ&zoomwheel=true&fresh=true#4.21/32.62/-98.01/21.6/48"
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
    nextQuestion();
});


/**
 * Loads the question and hint data of the current question to the game html page
 */
function loadQuestion() {
    let currentQuestion = quizQuestionData[currentQuiz].quiz.question;
    let currentOptions = quizQuestionData[currentQuiz].quiz;
    let curQuiz = quizQuestionData[currentQuiz];

    document.getElementById('game-question').innerHTML = currentQuestion;
    document.getElementById('answer-option-1').innerHTML = currentOptions.a;
    document.getElementById('answer-option-2').innerHTML = currentOptions.b;
    document.getElementById('answer-option-3').innerHTML = currentOptions.c;
    document.getElementById('answer-option-4').innerHTML = currentOptions.d;
    document.getElementById('hint-content').innerHTML = curQuiz.hint.hintText;
    document.getElementById('hint-map').src = curQuiz.hint.hintMap;
    highlightCurrentContinent();
    resultsButton();
    showHint();
    closeHint();
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
                hideQuestionArea();
                revealSolutionArea();
                document.getElementsByClassName('progress-icon')[currentQuiz].classList.add('green-image');
            } else {
                document.getElementById('solution-head').innerHTML = 'Sorry!';
                document.getElementById('solution-statement-1').innerHTML = 'Your answer is incorrect.';
                document.getElementById('solution-statement-2').innerHTML = quizQuestionData[currentQuiz].initialAnswerPhrase;
                document.getElementById('fun-fact').innerHTML = quizQuestionData[currentQuiz].funFact;
                hideQuestionArea();
                revealSolutionArea();
                document.getElementsByClassName('progress-icon')[currentQuiz].classList.add('red-image');
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
 * Adds the class 'hidden' to the solution area of the game html
 * so that the solution area is not displayed
 */
function hideSolutionArea() {
    document.querySelector('.solution-space').classList.add("hidden");
    document.querySelector('#next').classList.add("hidden");
}

/**
 * Removes the class 'hidden' from the solution area of the game html
 * so that the solution area is displayed
 */
function revealSolutionArea() {
    document.querySelector('.solution-space').classList.remove("hidden");
    document.querySelector('#next').classList.remove("hidden");
}

/**
 * Adds the class 'hidden' to the question area of the game html
 * so that the question area is not displayed
 */
function hideQuestionArea() {
    document.querySelector('.game-space').classList.add("hidden");
    document.querySelector('#hint').classList.add("hidden");
}

/**
 * Removes the class 'hidden' from the question area of the game html
 * so that the question area is displayed
 */
function revealQuestionArea() {
    document.querySelector('.game-space').classList.remove("hidden");
    document.querySelector('#hint').classList.remove("hidden");
}

/**
 * Adds event listener to the 'Next Question' button that increments
 * the current question number and runs the loadQuestion function
 */
function nextQuestion() {
    document.querySelector('#next').addEventListener('click', function() {
        if (currentQuiz < quizQuestionData.length - 1) {
        currentQuiz++;
        loadQuestion();
        incrementProgressBar();
        hideSolutionArea();
        revealQuestionArea();
    } else {
        let finalScore = document.getElementById('score').innerText / 200;
        document.querySelector('#next').classList.add('hidden');
        document.querySelector('#redo').classList.remove('hidden');
        document.querySelector('#redo').addEventListener('click', function() {
            location.reload();
        } )

        if (parseInt(document.getElementById('score').innerText) > 1600) {
            document.getElementById('solution-head').innerHTML = 'Okay, Sacagawea...';
            document.getElementById('solution-statement-1').innerHTML = `You answered ${finalScore}/12 questions correctly.`;
            document.getElementById('solution-statement-2').innerHTML = "It looks like you know your geography! Well done!";
            document.getElementById('fun-fact').innerHTML = "Sacagawea, the Lemhi Shoshone woman who served as a guide and interpreter on the Lewis and Clark Expedition, gave birth to her son while on the expedition and carried him along for the duration of the adventure. Clark and the other corps on the expedition nicknamed the young boy 'Pompy'.";
        } else if (parseInt(document.getElementById('score').innerText) > 800) {
            document.getElementById('solution-head').innerHTML = "Well, you're no Guugu Yimithirr...";
            document.getElementById('solution-statement-1').innerHTML = `You answered ${finalScore}/12 questions correctly.`;
            document.getElementById('solution-statement-2').innerHTML = "Time and practice will make you a truly great geographer.";
            document.getElementById('fun-fact').innerHTML = "The Guugu Yimithirr people are an Australian aboriginal people who speak the Guugu Yimithirr language. This language is unique among languages in that it uses absolute cardinal directions (north, south, etc.) instead of egocentric direction (left, right, in front of, etc.). This has given the people an extremely acute sense of direction since, to do something as simple as ask for the salt, they would have to say 'Pass the salt, it's to the northeast of you'.";
        } else {
            document.getElementById('solution-head').innerHTML = "You know, you should probably pick up a map every once in a while...";
            document.getElementById('solution-statement-1').innerHTML = `You answered ${finalScore}/12 questions correctly.`;
            document.getElementById('solution-statement-2').innerHTML = "Not too shabby for a cat at a computer.";
            document.getElementById('fun-fact-head').innerHTML = "Top Tip:";
            document.getElementById('fun-fact').innerHTML = "Whenever you hear about something in global news, look that country up, read up on its history and spend time looking at maps of it. You'll be surprised at how fascinating it can be!";
        }
    }
    })
}

/**
 * Adds event listener to the 'hint' button to display hint text
 */
 function showHint() {
    document.querySelector('#hint').addEventListener('click', function() {
        document.querySelector('#hint-modal-container').classList.remove('hidden');
    })
}

/**
 * Adds event listener to the 'hint close' button to hide hint text
 */
 function closeHint() {
    document.querySelector('#hint-close').addEventListener('click', function() {
        document.querySelector('#hint-modal-container').classList.add('hidden');
    })
}

/**
 * Changes the text of the next-question button to say 
 * 'see results' on the last question
 */
 function resultsButton() {
    if (currentQuiz > 10 ) {
        document.getElementById('next-question').innerHTML = "See Results";
    } 
}

/**
 * Targets the subject icons at the bottom of the screen and
 * adds a new icon to the progress bar
 */
function incrementProgressBar() {
    document.getElementsByClassName('progress-icon')[currentQuiz].classList.remove('clear');
}

/**
 * Targets the continent icons at the bottom of the screen and
 * adds a continent icon when the questions reach that category
 */
function highlightCurrentContinent() {
    if (quizQuestionData[currentQuiz].continent === "europe") {
        document.querySelector('#europe-img').classList.remove("clear");
    } else if (quizQuestionData[currentQuiz].continent === "africa") {
        document.querySelector('#africa-img').classList.remove("clear");
    } else if (quizQuestionData[currentQuiz].continent === "australasia") {
        document.querySelector('#australasia-img').classList.remove("clear");
    }
}