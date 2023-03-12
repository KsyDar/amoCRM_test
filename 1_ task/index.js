const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
    return (seconds) => {
        let current = seconds;
        let date = new Date(current * 1000);

        timerEl.innerHTML = ("0" + date.getUTCHours()).slice(-2) + ":" +
            ("0" + date.getUTCMinutes()).slice(-2) + ":" +
            ("0" + date.getUTCSeconds()).slice(-2);
        let intervalId = setInterval(() => {
            current--;
            let date = new Date(current * 1000);

            timerEl.innerHTML = ("0" + date.getUTCHours()).slice(-2) + ":" +
                ("0" + date.getUTCMinutes()).slice(-2) + ":" +
                ("0" + date.getUTCSeconds()).slice(-2);
            if (current === 0) {
                timerEl.innerHTML = "hh:mm:ss"
                clearInterval(intervalId);
            }
        }, 1000)
    };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
    inputEl.value = inputEl.value.replace(/[^0-9]/g, '');
    console.log(inputEl.value)
});

buttonEl.addEventListener('click', () => {
    const seconds = Number(inputEl.value);

    animateTimer(seconds);

    inputEl.value = '';
});
