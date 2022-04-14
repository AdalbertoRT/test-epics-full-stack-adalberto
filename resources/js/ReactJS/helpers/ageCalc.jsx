function ageCalc(age) {
    const date = new Date(age);
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const birthdayThisYear = new Date(
        date.getDay(),
        date.getMonth(),
        currentYear
    );

    const yearsOld = currentYear - date.getFullYear();

    if (birthdayThisYear > currentDate) {
        yearsOld--;
    }
    return yearsOld;
}

export default ageCalc;
