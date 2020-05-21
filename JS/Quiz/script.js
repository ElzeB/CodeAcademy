
const quiz = [
    {
        question: 'Kuri iš pateiktų reikšmių yra falsy, Javscript kalboje?',
        answers: [ '-', 0, 'Internet Explorer' ]
    },
    {
        question: "Pasirinkite teisingą atsakymą - '3' == 3",
        answers: [ 'true', 'false' ]
    },
    {
        question: "Kuris komentaro žymėjimas Javascript'e neteisingas?",
        answers: [ '/# /', '//', '/* */' ]
    },
    {
        question: 'Kuris nėra Javascript duomenų tipas?',
        answers: [ 'Symbol', 'Console', 'Number', 'String' ]
    },
    {
        question: 'Teisingas atsakymas - typeof(5)',
        answers: [ 'string', 'number', 'five', 'object' ]
    }            
]
const parent = document.getElementById('main');

quiz.forEach((a,bananas) => { 
    const question = document.createElement('p');
    question.setAttribute('id', 'question');
    parent.appendChild(question);
    question.innerHTML = a.question;

    a.answers.forEach(a => { 
    
        const input = document.createElement('input');
        input.setAttribute('type', 'radio');
        input.setAttribute('name', bananas);
        parent.appendChild(input);

        const label = document.createElement('label');
        label.innerHTML = a;
        parent.appendChild(label);

        const br = document.createElement('br');
        parent.appendChild(br);

    }); 
});


const button = document.createElement("button");
button.innerHTML = 'HELLO'
button.setAttribute("type", "button");
parent.appendChild(button)