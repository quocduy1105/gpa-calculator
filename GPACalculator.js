class GPACalculator {

    static calculateGPA(subjects) {

        let totalScore = 0;
        let totalCredit = 0;

        subjects.forEach(subject => {
            totalScore += subject.score * subject.credit;
            totalCredit += subject.credit;
        });

        if (totalCredit === 0) return 0;

        return (totalScore / totalCredit).toFixed(2);
    }

    static getRank(gpa) {

        if (gpa >= 9) return "Xuất sắc";
        if (gpa >= 8) return "Giỏi";
        if (gpa >= 6.5) return "Khá";
        if (gpa >= 5) return "Trung bình";
        return "Yếu";
    }

}