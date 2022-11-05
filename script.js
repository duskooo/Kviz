quizData = [
    {
        question: "Koji se jezik se izvrsava u pregledacu?",
        a:"Java",
        b:"C",
        c:"Python",
        d:"JavaScript",
        correct:"d"
    },
    {
        question:"Od cega je CSS skraceno?",
        a:"Central Style Sheets",
        b:"Cascading Style Sheet",
        c:"Cascading Simple Sheet",
        d:"Coloring Style Sheet",
        correct:"b",
    },
    {
        question:"Od cega je HTML skraceno?",
        a:"Hypertext Markup Language",
        b:"Hypertext Markdown Language",
        c:"Hyperloop Machine Language",
        d:"Helicopter TERMINALS MOTORBOATS LAMBORGINIS",
        correct:"a",
    },
    {
        question:"Koje godine je nastao JavaScript",
        a:"1996",
        b:"1995",
        c:"1994",
        d:"nista od navedenog",
        correct:"b",
    }
]

quiz = document.getElementById('quiz')
answerEls = document.querySelectorAll('input')
questionEl = document.getElementById('question')
a_text = document.getElementById('a_text')
b_text = document.getElementById('b_text')
c_text = document.getElementById('c_text')
d_text = document.getElementById('d_text')
submitBtn = document.getElementById('submit')

currentQuestion = 0
score=0

loadQuiz()

function loadQuiz(){
    currentQuizData = quizData[currentQuestion]

    questionEl.innerText=currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function getSelectedAnswer(){
    answer=undefined
    answerEls.forEach(answerEls => {
        if(answerEls.checked)
        {
            answer = answerEl.id
        }
    });
    return answer
}

submitBtn.addEventListener('click',()=>{
    answer= getSelectedAnswer()
    if(answer != undefined){
        if(answer == quizData[currentQuestion].correct){
            score ++
        }
        currentQuestion++
        if(currentQuestion < quizData.length){
            loadQuiz()
        }else{
            quiz.innerHTML=
            `
            <h2>Odgovorili ste ${score}/${quizData.length} pitanja tacno</h2>
            <button onclick="location.reload()">Probaj ponovo</button>
            `
        }
    }else{
        alert('Niste oznacili nijedan odgovor!')
    }    
})