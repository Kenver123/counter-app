let count = 0;

const increaseButton = document.getElementsByClassName('increase')[0];
const decreaseButton = document.getElementsByClassName('decrease')[0];
const resetButton = document.getElementsByClassName('reset')[0];
const countText = document.getElementsByClassName('count')[0];

increaseButton.addEventListener('click', () => {
    count++
    countText.textContent = count
})

decreaseButton.addEventListener('click', () => {
    count = count < 1 ? 0 : count - 1
    countText.textContent = count
})

resetButton.addEventListener('click', () => {
    count = 0;
    countText.textContent = count
})
