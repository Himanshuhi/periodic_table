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


function buildQuiz() {
	
	var output = "";

	
	questions.forEach((question, questionNumber) => {
		
		var choices = "";

		// himanshu
		question.choices.forEach((choice, choiceNumber) => {
			
			choices += `
				<label>
					<input type="radio" name="question${questionNumber}" value="${choice}">
					${choice}
				</label>
			`;
		});

		
		output += `
			<div class="question">
				<h3>${question.question}</h3>
				${choices}
			</div>
		`;
	});

	
	document.getElementById("quiz").innerHTML = output;
}

function calculateScore() {
	
	var score = 0;

	
	questions.forEach((question, questionNumber) => {
		
		var answer = document.querySelector(`input[name="question${questionNumber}"]:checked`).value;

		if (answer === question.answer) {
			
			score++;
		}
	});

	
	document.getElementById("result").innerHTML = `You scored ${score} out of ${questions.length}`;
}

buildQuiz();

document.getElementById("submit").addEventListener("click", calculateScore);
