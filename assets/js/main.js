const inputsCheckbox = document.querySelectorAll('.container-custom-checkbox input'),
  ingredients = document.querySelectorAll('.current-book-item'),
  drinks = document.querySelectorAll('.select-drink-item'),
  totalAmount = document.querySelector('.total-amount>.summa'),
  totalReg = document.querySelector('.total-reg>.summa'),
  orderBtn = document.querySelector('.typical-btn'),
  modalWindow = document.querySelector('.modal-window'),
  book = document.querySelector('.book__insert--img');
cover = document.querySelector('.cover');
coverKoj = document.querySelector('.cover__koj');
submitBtn = document.querySelector('.modal-window__submit-btn');

const subject = document.querySelector('.modal-window__subject'),
  ingredientsSpan = document.querySelector('.modal-window__ingredients'),
  drinksSpan = document.querySelector('.modal-window__drinks');

/* Add ingredients to pizza*/

const addIngredients = checkboxes => {
  const nodesArray = Array.from(checkboxes);
  const ingredientsArray = Array.from(ingredients);
  ingredientsArray.splice(0, 2);



  for (let node of checkboxes) {
    node.addEventListener('click', event => {
      event.target.parentNode.classList.toggle('active');
      const index = nodesArray.indexOf(event.target);
      if (index === 5) {
        book.classList.toggle('radius');
        cover.classList.toggle('radius');
        coverKoj.classList.toggle('radius');
      }
      ingredientsArray[index].classList.toggle('active');
      calculateOrder();
    })
  }
}

addIngredients(inputsCheckbox);

/* Add drinks */

const addDrinks = drinkItems => {
  for (let item of drinkItems) {
    item.addEventListener('click', event => {
      event.target.parentNode.classList.toggle('active');
      calculateOrder();
    })
  }
}

addDrinks(drinks);

/* Calculate order */

const calculateOrder = () => {
  const ingredients = document.querySelectorAll('.container-custom-checkbox.active'),
    drinks = document.querySelectorAll('.select-drink-item.active');


  const startPrice = 0,
    ingredientsPrice = ingredients.length * 25,
    drinksPrice = drinks.length * 95;

  total = startPrice + ingredientsPrice + drinksPrice;
  totalAmount.innerHTML = `${total}₽`;
  let summaryDiscount = (total) * 0.2;
  totalReg.innerHTML = `${total - summaryDiscount}₽`;
};

/* Modal window for order */


window.addEventListener('click', event => {
  if (event.target === modalWindow) {
    modalWindow.classList.add('none');
  }
});

submitBtn.addEventListener('click', () => {
  modalWindow.classList.add('none');
  inputsCheckbox.forEach(item => {
    item.checked = false;
  })
  window.location.reload();
});

const prepareWindowModalContent = () => {
  subject.innerHTML = '';
  ingredientsSpan.innerHTML = '';
  drinksSpan.innerHTML = '';

  const addedIngredients = document.querySelectorAll('.container-custom-checkbox.active'),
    addedDrinks = document.querySelectorAll('.select-drink-item.active');

  let ingredientsList = [];
  if (addedIngredients) {
    for (let ingredient of addedIngredients) {
      ingredientsList.push(ingredient.innerText);
    }
  };

  let drinksList = [];
  if (addedDrinks) {
    for (let drink of addedDrinks) {
      drinksList.push(drink.dataset.name);
    }
  };

  const totalIngredients = ingredientsList.join(', ') || 'нет требуется';
  const totalText = `Вы заказали книгу, с параметрами: '${totalIngredients}'.С Вас ${totalAmount.innerHTML}`;

  subject.innerHTML = totalText;
}


orderBtn.addEventListener('click', () => {
  modalWindow.classList.remove('none');
  prepareWindowModalContent();
});