const cards = document.querySelectorAll('.card')
let hasflippedCard = false;
let firstCard, secondCard;
let lockBoard = false;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');
  if (!hasflippedCard) {
    hasflippedCard = true;
    firstCard = this;
    return;
  }
  secondCard = this;
  hasflippedCard = false;
  checkForMath();
}

function checkForMath() {
  if (firstCard.dataset.card === secondCard.dataset.card) {
    disableCards();
    return;
  }

  unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

function unflipCards() {
  lockBoard = true

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard ();
  }, 1500);
}

function resetBoard () {
  [hasflippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null]
}

(function shufle() {
  cards.forEach((card)=>{
    let ramdomPosition = Math.floor(Math.random() * 12);
    card.style.order = ramdomPosition;
  })
})();

cards.forEach(card => {
  card.addEventListener('click', flipCard)
});
