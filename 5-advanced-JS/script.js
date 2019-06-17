/*// Function constructor

let john = {
	name: 'John',
	yearOfBirth: 1990,
	job: 'teacher',
};

let Person = function(name, yearOfBirth, job) {
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
};

Person.prototype.calculateAge = function () {
		console.log(2019-this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';

//let john = new Person('John', 1990, 'teacher');

let jane = new Person('Jane', 1992, 'designer');

let mark = new Person ('Mark', 1985, 'fireman');

//jane.calculateAge();
mark.calculateAge();

//console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);


// Object.create

let personProto = {
	calculateAge: function() {
		console.log(2019-this.yearOfBirth);
	}
};

let john = Object.create(personProto);

let jenny = Object.create(personProto, 
{
	name: { value: 'Jenny' },
	yearOfBirth: {value: 1960 },
	job: { value: 'nurse' }
});


// Primitives vs objects

let a = 23;
let b = a;
a = 46;

console.log(a);
console.log(b);


// objects
let obj1 = {
	name: 'John',
	age: 26
}

let obj2 = obj1;
obj1.age = 30;

console.log(obj1.age);
console.log(obj2.age);

// functions

let age = 27;
let obj = {
	name: 'Jonas',
	city: 'Lisbon'
};

function change(a, b) {
	a = 30;
	b.city = 'San Francisco';
}

change(age, obj);
console.log(age);
console.log(obj.city)

// Passing functions as arguments

let years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
	let  arrRes  = [];
	for (let i = 0; i < arr.length; i++) {
		arrRes.push(fn(arr[i]));
	}
	return arrRes;
}

function calculateAge(el) {
	return 2019 - el;
}

function isFullAge(el) {
	return el >= 18
}

function maxHeartAge(el) {
	if (el >= 18 && el <= 81) {
		return Math.round(206.9 - (0.67 * el));
	} else {
		return -1;
	}
}

let ages = arrayCalc(years, calculateAge);
let fullAges = arrayCalc(ages, isFullAge);
let rates = arrayCalc(ages, maxHeartAge);

console.log(ages);
console.log(fullAges);
console.log(rates);

// functions returning functions

function interviewQuestion(job) {
	if (job === 'designer') {
		return function(name) {
			console.log(name + ', can you please explain what UX design is?')
		}
	} else if (job === 'teacher') {
		return function(name) {
			console.log('What subject do you teach, ' + name + '?')
		}
	} else {
		return function(name) {
			console.log('Hello ' + name + ', what do you do?')
		}
	}
}

let teacherQuestion = interviewQuestion('teacher');
let designerQuestion = interviewQuestion('designer');

teacherQuestion('John');
designerQuestion('John');

interviewQuestion('teacher')('Mark');


// IIFE

/*function game() {
	let score = Math.random() *10;
	console.log(score >= 5);
}

game();

(function () {
	let score = Math.random() *10;
	console.log(score >= 5);
})();

//console.log(score);


(function (goodLuck) {
	let score = Math.random() *10;
	console.log(score >= 5 - goodLuck);
})(5);

// closures


function retirement(retirementAge) {
	let a = ' years left until retirement.'
	return function(yearOfBirth) {
		let age = 2019 - yearOfBirth;
		console.log((retirementAge - age) + a)
	}
}

let retirementUS = retirement(66);
retirementUS(1990);

//retirement(66)(1990);

let retirementGermany = retirement(65);
let retirementIceland = retirement(67);


retirementGermany(1990);
retirementIceland(1990);

/*
function interviewQuestion(job) {
	if (job === 'designer') {
		return function(name) {
			console.log(name + ', can you please explain what UX design is?')
		}
	} else if (job === 'teacher') {
		return function(name) {
			console.log('What subject do you teach, ' + name + '?')
		}
	} else {
		return function(name) {
			console.log('Hello ' + name + ', what do you do?')
		}
	}
}



function interviewQuestion(job) {
	return function(name) {
		if (job === 'designer'){
			console.log(name + ', can you please explain what UX design is?');
		} else if (job === 'teacher') {
			console.log('What subject do you teach, ' + name + '?')
		}
	}
}


interviewQuestion('teacher')('John');

let interviewQuestionDesigner = interviewQuestion('designer');
interviewQuestionDesigner('Mary');
*/

// Bind, call and apply

/*
let jeremy = {
	name: 'Jeremy',
	age: 25,
	job: 'teacher',
	presentation: function(style, timeOfDay) {
		if (style === 'formal') {
			console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' + this.name + ' I\'m a ' + this.job + ', and I\'m ' + this.age + ' years old')
		} else if (style === 'friendly') {
			console.log('Hi, what\'s up? I\'m ' + this.name + ' I\'m a ' + this.job + ', and I\'m ' + this.age + ' years old Have a nice ' +timeOfDay)
		}
	}
}


jeremy.presentation('formal', 'morning');

let emily = {
	name: 'Emily',
	age: 35,
	job: 'designer'
}

jeremy.presentation.call(emily, 'friendly', 'morning');
//jeremy.presentation.apply(emily, ['friendly', 'afternoon']);

let jeremyFriendly = jeremy.presentation.bind(jeremy, 'friendly');
jeremyFriendly('afternoon');

let emilyFormal = jeremy.presentation.bind(emily, 'formal');

emilyFormal('morning');




let years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
	let  arrRes  = [];
	for (let i = 0; i < arr.length; i++) {
		arrRes.push(fn(arr[i]));
	}
	return arrRes;
}

function calculateAge(el) {
	return 2019 - el;
}

function isFullAge(limit, el) {
	return el >= limit;
}

let ages = arrayCalc(years, calculateAge);

let fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));

console.log(fullJapan);
console.log(ages);
*/

//////////////////////
// CODING CHALLANGE 7



/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/


function Question(question, answers, correct) {
	this.question = question;
	this.answers = answers;
	this.correct = correct;

};

Question.prototype.displayQuestion = function() {
	console.log(this.question);

	for (let i = 0; i < this.answers.length; i++) {
		console.log(i + ': ' +this.answers[i]);
	}
}

let question1 = new Question('Dokad noca tupta jez?',
							['Do lasu','Na jagody'],
							0);

let question2 = new Question('Czy pingwiny maja kolana?',
							['Tak', 'Nie', 'Tylko kostki'],
							1);
let question3 = new Question('What is love?', 
							['A chemical reaction', 'Baby don\'t hurt me, don\'t hurt me, no more'],
							1);
	
let questions = [question1, question2, question3];


let questionNumber = Math.floor(Math.random() * questions.length);

questions[questionNumber].displayQuestion();
