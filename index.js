



document.querySelectorAll('.card').forEach(card => {
  let count = 0;
  const countDisplay = card.querySelector('.count');
  const decreaseBtn = card.querySelector('.decrease');
  const increaseBtn = card.querySelector('.increase');
  const buyBtn = card.querySelector('.buy');

  function updateDisplay() {
    countDisplay.textContent = count;
  }

  increaseBtn.addEventListener('click', () => {
    count++;
    updateDisplay();
  });

  decreaseBtn.addEventListener('click', () => {
    if (count > 0) {
      count--;
      updateDisplay();
      decreaseBtn.classList.remove("error");
    } else {
      decreaseBtn.classList.add("error");
      setTimeout(() => {
        decreaseBtn.classList.remove("error");
      }, 300);
    }
  });

  buyBtn.addEventListener('click', () => {
    if (count === 0) {
      alert("Вы ещё не выбрали товар!");
      return;
    }

    const payment = prompt("Оплата: карта или наличка?").toLowerCase();

    if (payment === "карта") {
      const card = prompt("Введите номер карты:");
      if (card && card.length >= 8) {
        alert("Оплата прошла ✅");
      } else {
        alert("Неверный номер карты.");
      }
    } else if (payment === "наличка") {
      alert("Ваш заказ оформлен ✅");
    } else {
      alert("Вы не выбрали способ оплаты!");
    }

    count = 0;
    updateDisplay();
  });
});