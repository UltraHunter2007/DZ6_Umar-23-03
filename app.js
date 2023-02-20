const decrementBtn = document.getElementById('decrement')
const incrementBtn = document.getElementById('increment')
const counterInput = document.getElementById('counter')

decrementBtn.addEventListener('click', () => {
    if (counterInput.value > -10) {
        counterInput.value--
    }
})

incrementBtn.addEventListener('click', () => {
    if (counterInput.value < 10) {
        counterInput.value++
    }
})