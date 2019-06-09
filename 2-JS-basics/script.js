
/* CODING CHALLENGE 1
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
*/


const massMark = 65;
const massJohn = 92;
const heightMark = 1.69;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(BMIMark, BMIJohn);

let markHigherBMI = BMIMark > BMIJohn;
console.log('Is Mark\'s BMI higher than John\'s?' + markHigherBMI);


/* CODING CHALLENGE 2

John and Mike both play basketball in different teams. In the latest 3 games, 
John's team scored 89, 120 and 103 points, while Mike's team scored 116, 
94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the 
winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take 
into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 
points. Like before, log the average winner to the console. HINT: you will 
ed the && operator to take the decision. If you can't solve this one, just 
tch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping 
in mind there might be draws.

GOOD LUCK 😀
*/

const averageScoreJohn = (150 + 120 + 103) / 3;
const averageScoreMike = (150 + 120 + 103) / 3;
const averageScoreMary = (160 + 134 + 105) / 3;

console.log('John: ' + averageScoreJohn);
console.log('Mike: ' + averageScoreMike);
console.log('Mary: ' + averageScoreMary);

if (averageScoreJohn > averageScoreMike && averageScoreJohn > averageScoreMary) {
	console.log('John is a winner! Average score: ' + averageScoreJohn);
} else if (averageScoreMike > averageScoreJohn && averageScoreMike > averageScoreMary) {
	console.log('Mike is a winner! Average score: ' + averageScoreMike);
} else if (averageScoreMary > averageScoreJohn && averageScoreMary > averageScoreMike) {
	console.log('Mary is a winner! Average score: ' + averageScoreMary);
} else {
	console.log('It\'s a tie!')
}



/* CODING CHALLENGE 3

John and his family went on a holiday and went to 3 different restaurants. 
The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator 
(as a function). He likes to tip 20% of the bill when the bill is less than 
$50, 15% when the bill is between $50 and $200, and 10% if the bill is more 
than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/

function tipCalculator(bill) {
	let percentage;
	if (bill  < 50) {
		percentage = 0.2;
	} else if (bill < 200 && bill > 50) {
		percentage = 0.15;
	} else {
		percentage = 0.1;
	}
	return bill * percentage;
}

const bills = [124, 48, 268];

let tips = [Math.round(tipCalculator(bills[0])),
			Math.round(tipCalculator(bills[1])),
			Math.round(tipCalculator(bills[2]))
];

let totalBills = [bills[0] + tips[0],
				 bills[1] + tips[1],
				 bills[2] + tips[2],
];

console.log(tips, totalBills);

/* CODING CHALLENGE 4

Let's remember the first coding challenge where Mark and John compared 
their BMIs. Let's now implement the same functionality with objects and 
methods.
1. For each of them, create an object with properties for their full name, 
mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to 
the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with 
the full name and the respective BMI. Don't forget they might have the same 
BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg 
and height in meter).

GOOD LUCK 😀
*/

let john = {
	fullName: 'John Snow',
	mass: 95,
	height: 1.92,
	calculateBMI: function () {
		this.bmi = this.mass / (this.height * this.height);
		return this.bmi;
	}
};

let mark = {
	fullName: 'Mark Sunshine',
	mass: 80,
	height: 1.75,
	calculateBMI: function () {
		this.bmi = this.mass / (this.height * this.height);
		return this.bmi;
	}
};

//console.log(john.calculateBMI());
//console.log(mark.calculateBMI());
//console.log(john, mark);

if (john.calculateBMI() > mark.calculateBMI()) {
    console.log(john.fullName + ' has a higher BMI of ' + john.bmi);
} else if (mark.bmi > john.bmi) {
    console.log(mark.fullName + ' has a higher BMI of ' + mark.bmi);
} else {
    console.log('They have the same BMI');
};

/* CODING CHALLENGE 5

Remember the tip calculator challenge? Let's create a more advanced version using 
everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, 
48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*/

let johnSnow = {
	fullName: 'John Snow',
	bills: [124, 48, 268, 180, 42],
	calcTips: function () {
		this.tips = [];
		this.overallBills = [];

		for (let i = 0; i < this.bills.length; i++) {
			let percentage;
			let bill = this.bills[i];

			if (bill < 50) {
				percentage = 0.2;
			} else if (bill >= 50 && bill < 200) {
				percentage = 0.15
			} else {
				percentage = 0.1
			}
			this.tips[i]= Math.round(percentage * bill);
			this.overallBills[i] = bill + Math.round(percentage*bill);
		}
	}
}

johnSnow.calcTips();
//console.log(johnSnow);

let markSunshine = {
	fullName: 'Mark Sunshine',
	bills: [77, 375, 110, 45],
	calcTips: function () {
		this.tips = [];
		this.overallBills = [];

		for (let i = 0; i < this.bills.length; i++) {
			let percentage;
			let bill = this.bills[i];

			if (bill < 100) {
				percentage = 0.2;
			} else if (bill >= 100 && bill < 300) {
				percentage = 0.1
			} else {
				percentage = 0.25
			}
			this.tips[i]= Math.round(percentage * bill);
			this.overallBills[i] = bill + Math.round(percentage*bill);
		}
	}
}

markSunshine.calcTips();
//console.log(markSunshine);

function calculateAverageTip(tips) {
	let total = 0;
	total = tips.reduce((a, b) => a + b);
	return total / tips.length;
}

johnSnow.averageTip = calculateAverageTip(johnSnow.tips);
markSunshine.averageTip = calculateAverageTip(markSunshine.tips);

if (johnSnow.averageTip > markSunshine.averageTip) {
	console.log(johnSnow.fullName + ' pays higher tips. Average tip: ' + johnSnow.averageTip)
} else if (markSunshine.averageTip > johnSnow.averageTip) {
	console.log(markSunshine.fullName + ' pays higher tips. Average tip: ' + markSunshine.averageTip)
} else {
	console.log(johnSnow.fullName + '&' + markSunshine.fullName) + ' pay the same tips.'
}


console.log(johnSnow);
console.log(markSunshine);