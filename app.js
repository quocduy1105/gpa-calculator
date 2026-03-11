function calculate() {

    const subjects = [
        {
            score: Number(document.getElementById("math").value),
            credit: Number(document.getElementById("mathCredit").value)
        },
        {
            score: Number(document.getElementById("physics").value),
            credit: Number(document.getElementById("physicsCredit").value)
        },
        {
            score: Number(document.getElementById("chemistry").value),
            credit: Number(document.getElementById("chemistryCredit").value)
        }
    ];

    const gpa = GPACalculator.calculateGPA(subjects);

    const rank = GPACalculator.getRank(gpa);

    document.getElementById("gpa").innerText = gpa;

    document.getElementById("rank").innerText = rank;

}