// Define the quiz questions and answers
var questions = [
	{
		question: "What is the atomic weight of carbon?",
		choices: ["12", "14", "16", "18"],
		answer: "12"
	},
	{
		question: "What is the symbol for gold?",
		choices: ["Au", "Ag", "Cu", "Fe"],
		answer: "Au"
	},
	{
		question: "What is the atomic number of oxygen?",
		choices: ["6", "7", "8", "9"],
		answer: "8"
	},
	{
		question: "What is the atomic weight of nitrogen?",
		choices: ["14", "16", "18", "20"],
		answer: "14"
	},
	{
		question: "What is the symbol for helium?",
		choices: ["He", "H", "Li", "Be"],
		answer: "He"
	}
];

// Function to create the quiz HTML
function buildQuiz() {
	// Variable to store the HTML output
	var output = "";

	// Loop through each question
	questions.forEach((question, questionNumber) => {
		// Variable to store the list of choices
		var choices = "";

		// Loop through each choice
		question.choices.forEach((choice, choiceNumber) => {
			// Create a radio button for each choice
			choices += `
				<label>
					<input type="radio" name="question${questionNumber}" value="${choice}">
					${choice}
				</label>
			`;
		});

		// Add this question and its choices to the output
		output += `
			<div class="question">
				<h3>${question.question}</h3>
				${choices}
			</div>
		`;
	});

	// Display the quiz HTML
	document.getElementById("quiz").innerHTML = output;
}

// Function to calculate the quiz score
function calculateScore() {
	// Variable to store the score
	var score = 0;

	// Loop through each question
	questions.forEach((question, questionNumber) => {
		// Get the selected answer for this question
		var answer = document.querySelector(`input[name="question${questionNumber}"]:checked`).value;

		// Check if the answer is correct
		if (answer === question.answer) {
			// Increment the score if the answer is correct
			score++;
		}
	});

	// Display the quiz score
	document.getElementById("result").innerHTML = `You scored ${score} out of ${questions.length}`;
}

// Call the buildQuiz function to create the quiz HTML
buildQuiz();

// Add an event listener to the submit button to calculate the score
document.getElementById("submit").addEventListener("click", calculateScore);
