export function getQuestions(data) {
    const size = data.length;
    console.log(size);
    let questions = [];
    for (let i = 0; i < 10; i++) {
        let randomCountries = [];
        for (let j = 0; j < 4; j++) {
            const randomIndex = Math.floor(Math.random() * (size - 1));
            if (randomCountries.indexOf(data[randomIndex]) === -1) {
                randomCountries.push(data[randomIndex]);
            }else{
                j--;
            }
        }

        const questionType = Math.floor(Math.random() * 2);

        if (questionType == 0) {
            // Guest the capital
            const capitals = randomCountries.map(
                (country) => country.name.common
            );
            const question = {
                type: 'capital',
                capital: randomCountries[0].capital[0],
                answer: randomCountries[0].name.common,
                options: capitals.sort((a, b) => 0.5 - Math.random()),
            };
            questions.push(question);
        } else {
            // Guess the flag
            const names = randomCountries.map((country) => country.name.common);
            const question = {
                type: 'flag',
                flag: randomCountries[0].flag,
                answer: randomCountries[0].name.common,
                options: names.sort((a, b) => 0.5 - Math.random()),
            };
            questions.push(question);
        }
    }
    return questions;
}
