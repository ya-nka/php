let minValue = parseInt(prompt('Минимальное знание числа для игры', '0')) || 0;
let maxValue = parseInt(prompt('Максимальное знание числа для игры', '100')) || 100;
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber = Math.floor((minValue + maxValue) / 2);
let orderNumber = 0;
let gameRun = true;

minValue < -999 ? (minValue = -999) : minValue;
maxValue > 999 ? (maxValue = 999) : maxValue;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber}?`;

document.getElementById('btnRetry').addEventListener('click', function () {
  minValue = parseInt(prompt('Минимальное знание числа для игры', '0')) || 0;
  maxValue = parseInt(prompt('Максимальное знание числа для игры', '100')) || 100;
  alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
  answerNumber = Math.floor((minValue + maxValue) / 2);
  orderNumber = 1;

  minValue < -999 ? (minValue = -999) : minValue;
  maxValue > 999 ? (maxValue = 999) : maxValue;

  gameRun = true;
  orderNumberField.innerText = orderNumber;
  const phraseRandom = Math.round(Math.random() * 2);
  const answerPhrase =
    phraseRandom === 1
      ? `Вы загадали число`
      : phraseRandom === 2
      ? `Наверное это`
      : `я думаю это число`;
  answerField.innerText = answerPhrase + ` ${answerNumber}?`;
});

document.getElementById('btnOver').addEventListener('click', function () {
  if (gameRun) {
    if (minValue === maxValue) {
      const phraseRandom = Math.round(Math.random());
      const answerPhrase =
        phraseRandom === 1 ? `Вы загадали неправильное число!\n\u{1F914}` : `Я сдаюсь..\n\u{1F92F}`;

      answerField.innerText = answerPhrase;
      gameRun = false;
    } else {
      minValue = answerNumber + 1;

      answerNumber = Math.floor((minValue + maxValue) / 2);
      orderNumber++;
      orderNumberField.innerText = orderNumber;
      answerField.innerText = `Вы загадали число ${answerNumber}?`;
    }
  }
});

document.getElementById('btnLess').addEventListener('click', function () {
  if (gameRun) {
    if (minValue === maxValue) {
      const phraseRandom = Math.round(Math.random());
      const answerPhrase =
        phraseRandom === 1 ? `Вы загадали неправильное число!\n\u{1F914}` : `Я сдаюсь..\n\u{1F92F}`;

      answerField.innerText = answerPhrase;
      gameRun = false;
    } else {
      minValue = answerNumber + 1;
      answerNumber = Math.floor((maxValue - minValue) / 2);
      orderNumber++;
      orderNumberField.innerText = orderNumber;
      answerField.innerText = `Вы загадали число ${answerNumber}?`;
    }
  }
});

document.getElementById('btnEqual').addEventListener('click', function () {
  if (gameRun) {
    const phraseRandom = Math.round(Math.random() * 2);
    const answerPhrase =
      phraseRandom === 1
        ? `Я всегда угадываю\n\u{1F60E}`
        : phraseRandom === 2
        ? `Я молодец`
        : `я волшебник`;
    answerField.innerText = answerPhrase;
    gameRun = false;
  }
});
