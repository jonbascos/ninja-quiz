const correctAnswers = ['B', 'B', 'B', 'B']
const form = document.querySelector('.quiz-form')
const scoreSection = document.querySelector('.score-section')
const scoreboard = document.querySelector('.scoreboard')

form.addEventListener('submit', e => {    
    e.preventDefault()
    let score = 0

    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value]
    userAnswers.forEach((answer, index) => {
        if(answer == correctAnswers[index]) {
            score += 25
        }
    })
    
    // Animate the scoreboard

    scoreSection.style.display = 'block';
    let counter = 0
   
    const timer = setInterval( () => {
        if(counter > score) {
            clearInterval(timer)
        } else {
            scoreboard.textContent = `${counter}`

            counter++
        }
    }, 10)
})
