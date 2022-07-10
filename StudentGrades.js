let studentsDetails = [
	{
		name: 'Tarun', marks: 80
	},
	{
		name: 'Arun', marks: 45
	},
	{
		name: 'Varun', marks: 56
	},
	{
		name: 'Karun', marks: 72
	},
	{
		name: 'Sarun', marks: 63
	}
];

const GRADES = {
	a: 'A',
	b: 'B',
	c: 'C',
	d: 'D',
	e: 'E'
}

let sumOfMarks = 0, average;
studentsDetails.forEach((detail) => {
	sumOfMarks += detail.marks;
});
average = sumOfMarks/studentsDetails.length;

studentsDetails.forEach((detail) => {
	detail.grade = getGrade(detail.marks);
});


function getGrade(marks) {
	if (marks >= 90) {
		return GRADES.a;
	} else if (marks >= 80) {
		return GRADES.b;
	} else if (marks >= 70) {
		return GRADES.c;
	} else if (marks >= 60) {
		return GRADES.d;
	} else {
		return GRADES.e;
	}
}
