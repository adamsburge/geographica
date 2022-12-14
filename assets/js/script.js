// Array to store the questions for the quiz
const quizQuestionData = [
    {
        continent: "americas", // declares the continent which is used below to reveal the continent images in the progress bar
        initialAnswerPhrase: "Colombia is the country that borders Panama, Venezuela, Brazil, Peru and Ecuador.", // Provides the phrase used in the solution area after the user is told whether they answered correctly or incorrectly
        funFact: "<a href=\"https://en.wikipedia.org/wiki/Colombia\" target=\"_blank\">Colombia</a> is also the only country in South America to have beaches in both the Pacific Ocean and the Caribbean Sea.", //provides the html text to fill the Fun Fact area of the solution page
        hintText: "If you can remember where Panama is, you'll find the answer!", // Provides the hint text for the hint modal popup
        quiz:  { // details the quiz question, possible answers and the correct answer
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
        funFact: "<a href=\"https://en.wikipedia.org/wiki/Missouri_River\" target=\"_blank\">The Missouri River</a> flows into North America’s second largest river, the Mississippi river. When combined, these two make up the world’s fourth largest river system.",
        hintText: "Compare the rivers in North America!",
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
        initialAnswerPhrase: "The highest mountain in the Americas is <a href=\"https://en.wikipedia.org/wiki/Aconcagua\" target=\"_blank\">Aconcagua</a> in Mendoza, Argentina.",
        funFact: "Not only is Aconcagua the highest mountain in the Americas, it is also the highest mountain outside Asia. Its summit is at an elevation of 6,961 meters (22,838 ft).",
        hintText: "See if you can discern where the highest mountain in the Americas might be.",
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
        funFact: "The Italian peninsula was not <a href=\"https://en.wikipedia.org/wiki/Unification_of_Italy\" target=\"_blank\">unified into a single state</a>  until 1861! Prior to that, the region was composed of various city-states, republics and kingdoms.",
        hintText: "See if you can discern which country doesn’t share a border with Italy",
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
        funFact: "<a href=\"https://en.wikipedia.org/wiki/Tyrrhenian_Sea\" target=\"_blank\">The Tyrrhenian Sea</a> is named after the legendary figure, Tyrrhenus, who, according to Herodotus, led the people of Lydia (modern day southern Türkiye) to the area of Etruria on the west coast of Italy.",
        hintText: "If you can remember where the island of Sardinia is, this map will tell you the answer!",
        quiz: {
            question: "What is the name of the body of water east of the island of Sardinia?",
            a: "Tyrrhenian Sea",
            b: "Ionian Sea",
            c: "Adriatic Sea",
            d: "Ligurian Sea",
            correct: "Tyrrhenian Sea"
        }
    },
    {
        continent: "europe",
        initialAnswerPhrase: "<a href=\"https://en.wikipedia.org/wiki/Mulhac%C3%A9n\" target=\"_blank\">Mulhacén</a> is located in the Sierra Nevada, which is inside the larger Baetic Mountain Range.",
        funFact: "<a href=\"https://en.wikipedia.org/wiki/Baetic_System\" target=\"_blank\">The Baetic Mountain Range</a> connects to the Rif Mountain Range in northern Morocco. It is theorised that 5.3 million years ago these two ranges were connected and the Mediterranean was a dry basin. When the Atlantic Ocean broke through these mountains (an event called <a href=\"https://en.wikipedia.org/wiki/Zanclean_flood\" target=\"_blank\">the Zanclean flood</a>), the Mediterranean basin was filled with water rushing at 3.5 billion cubic feet per second.",
        hintText: "See if you can discern where the highest mountain is.",
        quiz: {
            question: "In which mountain range is Mulhacén, the highest mountain on mainland Spain?",
            a: "Iberian Range",
            b: "Sierra Morena",
            c: "Sierra Nevada",
            d: "Pyrennes",
            correct: "Sierra Nevada"
        }
    },
    {
        continent: "africa",
        initialAnswerPhrase: "Lesotho is situated inside of South Africa.",
        funFact: "Lesotho is one of three countries in the world that are <a href=\"https://en.wikipedia.org/wiki/Enclave_and_exclave\" target=\"_blank\">entirely encircled by another country</a>. The other two are San Marino and the Vatican, both in Italy.",
        hintText: "Look at this map and see if you can find the answer!",
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
        funFact: "<a href=\"https://en.wikipedia.org/wiki/Congo_River\" target=\"_blank\">The Congo River</a>, formerly called the Zaire River, is also the second largest river in the world (by water discharge volume; second only to the Amazon River in South America). It is, however, the deepest river in the world with certain areas being up to 219.5 m (720 ft) deep!",
        hintText: "Compare the rivers you see in Africa!",
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
        initialAnswerPhrase: "The Simien mountains are located in Ethiopia.",
        funFact: "<a href=\"https://en.wikipedia.org/wiki/Simien_Mountains\" target=\"_blank\">The Simien Mountains</a> are one of the few places in Africa where snow regularly falls. Additionally, along with the Drakensberg Mountains in South Africa, they have a geologically unique formation which gives them a unique appearance.",
        hintText: "Compare the mountainous countries in Africa!",
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
        initialAnswerPhrase: "Bahrain is the the only island state in the Persian Gulf.",
        funFact: "<a href=\"https://en.wikipedia.org/wiki/Bahrain\" target=\"_blank\">The island of Bahrain</a> is also the site of <a href=\"https://en.wikipedia.org/wiki/Dilmun\" target=\"_blank\">the ancient Dilmun civilisation</a> which the ancient Mesopotamians viewed as a sacred, paradisal place. ",
        hintText: "If you can find the Persian Gulf on this map, then you can find the answer!",
        quiz: {
            question: "Which country in Asia is surrounded on all sides by the Persian Gulf (i.e., an island in the Persian Gulf?)",
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
        funFact: "Not only is <a href=\"https://en.wikipedia.org/wiki/Lake_Baikal\" target=\"_blank\">Lake Baikal</a> the world’s deepest lake (up to 1,642 m or 5,387 ft deep), it’s also the world’s largest freshwater lake by water volume (22–23% of the world’s fresh surface water) and the world’s oldest lake (25–30 million years old). Additionally, <a href=\"https://www.google.com/search?q=lake+baikal+frozen&tbm=isch&ved=2ahUKEwiWi4nuyLf5AhV_g84BHWu9A8oQ2-cCegQIABAA&oq=lake+baikal+frozen&gs_lcp=CgNpbWcQAzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgYIABAeEAUyBggAEB4QCDIGCAAQHhAIMgYIABAeEAgyBggAEB4QCDoECCMQJzoECAAQQ1D2CVi7HWCqIWgAcAB4AIABZogBiASSAQM3LjGYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=Di3xYpbMHf-Gur4P6_qO0Aw&bih=986&biw=2525\" target=\"_blank\">the way it freezes</a> in the winter is very stunning! ",
        hintText: "If you can remember where the listed countries are on a map, you will find the answer!",
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
        initialAnswerPhrase: "<a href=\"https://en.wikipedia.org/wiki/Southern_Alps\" target=\"_blank\">The Southern Alps</a> span New Zealand’s South Island.",
        funFact: "The Māori name for the range is Kā Tiritiri o te Moana which means 'the Mirage of the Ocean'. This mountain range is also one of the film locations for the Lord of the Rings trilogy.",
        hintText: "If you can remember where New Zealand is, you'll find the answer!",
        quiz: {
            question: "Which mountain range spans New Zealand’s South Island?",
            a: "Southern Alps",
            b: "Snowy Mountains",
            c: "Blue Mountains",
            d: "Tararua Range",
            correct: "Southern Alps"
        }
    }
];

// Global Variables

let currentQuiz = 0; // Sets the current Quiz number to 0. This number is then incremented below and used as a reference to help cycle through the question data above

// Functions

document.addEventListener("DOMContentLoaded", function() { // This loads the three functions needed to make the game work. All the other functions for niche interactivity are nested inside these functions (detailed below)
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

    // Fill Current Question Data
    document.getElementById('game-question').innerHTML = currentQuestion;
    document.getElementById('answer-option-1').innerHTML = currentOptions.a;
    document.getElementById('answer-option-2').innerHTML = currentOptions.b;
    document.getElementById('answer-option-3').innerHTML = currentOptions.c;
    document.getElementById('answer-option-4').innerHTML = currentOptions.d;
    document.getElementById('hint-content').innerHTML = curQuiz.hintText;
    
    // Loads the various interactive components of the game such as loading the progress bar, adjusting the hint button to be the next quesiton button and opening and closing the hint modal
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

    // Use a for loop paired with an event listener to get the user's selected answer. Then use an if statement to compare the selected answer to the correct answer and display the solution page according to the user's answer
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
        });
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
 * the current question number and runs the loadQuestion function.
 * If the quiz is on the last question, then change the Next Question
 * Button to say 'See Result'. Then, upon click, fill the solution space 
 * with the final score results content and a feedback response based on
 * the user's final score
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
        } );

        if (parseInt(document.getElementById('score').innerText) > 1600) {
            document.getElementById('solution-head').innerHTML = 'Okay, Sacagawea...';
            document.getElementById('solution-statement-1').innerHTML = `You answered ${finalScore}/12 questions correctly.`;
            document.getElementById('solution-statement-2').innerHTML = "It looks like you know your geography! Well done!";
            document.getElementById('fun-fact').innerHTML = "<a href=\"https://en.wikipedia.org/wiki/Sacagawea\" target=\"_blank\">Sacagawea</a>, the Lemhi Shoshone woman who served as a guide and interpreter on the Lewis and Clark Expedition, gave birth to her son while on the expedition and carried him along for the duration of the adventure. Clark and the other corps on the expedition nicknamed the young boy 'Pompy'.";
        } else if (parseInt(document.getElementById('score').innerText) > 800) {
            document.getElementById('solution-head').innerHTML = "Well, you're no Guugu Yimithirr...";
            document.getElementById('solution-statement-1').innerHTML = `You answered ${finalScore}/12 questions correctly.`;
            document.getElementById('solution-statement-2').innerHTML = "Time and practice will make you a truly great geographer.";
            document.getElementById('fun-fact').innerHTML = "<a href=\"https://en.wikipedia.org/wiki/Guugu_Yimithirr_people\" target=\"_blank\">Guugu Yimithirr</a>, the language spoken by the aboriginal Guugu Yimithirr people, is unique in that it uses cardinal directions (north, south, etc.) instead of egocentric directions (left, right, in front of, etc.). This has given the people a very acute sense of direction since, to do a simple task like asking for the salt, they would have to say 'Pass the salt, it's to the northeast of you'.";
        } else {
            document.getElementById('solution-head').innerHTML = "You know, you should probably pick up a map every once in a while...";
            document.getElementById('solution-statement-1').innerHTML = `You answered ${finalScore}/12 questions correctly.`;
            document.getElementById('solution-statement-2').innerHTML = "Not too shabby for a cat at a computer.";
            document.getElementById('fun-fact-head').innerHTML = "Top Tip:";
            document.getElementById('fun-fact').innerHTML = "Whenever you hear about something in global news, look that country up, read up on its history and spend time looking at maps of it. You'll be surprised at how fascinating it can be!";
        }
    }
    });
}

/**
 * Adds event listener to the 'hint' button to display hint text
 */
 function showHint() {
    document.querySelector('#hint').addEventListener('click', function() {
        document.querySelector('#hint-modal-container').classList.remove('hidden');
    });
}

/**
 * Adds event listener to the 'hint close' button to hide hint text
 */
 function closeHint() {
    document.querySelector('#hint-close').addEventListener('click', function() {
        document.querySelector('#hint-modal-container').classList.add('hidden');
    });
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