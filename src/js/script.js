import "./components.js";
// Sign up form

const loginBox = document.querySelector(".login-box");
const modalOverlay = document.querySelector(".modal-overlay");

const signupBtn = document.querySelectorAll(".sign-up");

const closeModal = document.querySelector(".close-modal");

const form = document.querySelector("#signUpForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  loginBox.classList.add("hidden");
  modalOverlay.classList.add("hidden");
  const formData = new FormData(form);
  let formAlert = "";
  for (const [key, value] of formData.entries()) {
    formAlert += `${key}: ${value} \n`;
  }
  form.reset();

  alert(formAlert);
});

const submitBtn = document.querySelector(".submitBtn");
submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  form.requestSubmit();
});

closeModal &&
  closeModal.addEventListener("click", () => {
    loginBox.classList.add("hidden");
    modalOverlay.classList.add("hidden");
    form.reset();
  });
modalOverlay &&
  modalOverlay.addEventListener("click", () => {
    loginBox.classList.add("hidden");
    modalOverlay.classList.add("hidden");
    form.reset();
  });
loginBox &&
  loginBox.addEventListener("click", (e) => {
    e.stopPropagation();
  });
loginBox &&
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      loginBox.classList.add("hidden");
      modalOverlay.classList.add("hidden");
      form.reset();
    }
  });

signupBtn.forEach((btn) =>
  btn.addEventListener("click", () => {
    loginBox.classList.remove("hidden");
    modalOverlay.classList.remove("hidden");
  })
);

// Random recipe generator
let card = null;

function createMealCard() {
  fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then((response) => response.json())
    .then((data) => {
      const meal = data.meals[0];
      const banner = document.querySelector(".recipe-banner");

      // If the card element doesn't exist, create it
      if (!card) {
        card = document.createElement("div");
        card.classList.add("card", "recipe");
        card.innerHTML = `
  <div class="loader">
    <svg class="circular" viewBox="25 25 50 50">
      <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/>
    </svg>
  </div>
`;
        const btnContainer = document.createElement("div");
        btnContainer.classList.add("btn-container", "fa", "fa-refresh");
        btnContainer.addEventListener("click", () => {
          card.querySelector(".loader").classList.remove("hidden");
          createMealCard();
        });
        const label = document.createElement("h3");
        label.textContent = "Try A Random Recipe";
        label.classList.add("recipe-label");
        card.appendChild(label);
        const img = document.createElement("img");
        img.classList.add("recipe-image");
        card.appendChild(img);
        card.appendChild(btnContainer);
        banner && banner.appendChild(card);
      }
      const img = card.querySelector(".recipe-image");
      img.src = meal.strMealThumb;
      img.alt = meal.strMeal;
      img.addEventListener("load", () => {
        const cardBody =
          card.querySelector(".card-body") || document.createElement("div");
        cardBody.classList.add("card-body");
        card.appendChild(cardBody);

        const title =
          card.querySelector(".card-title") || document.createElement("h5");
        title.classList.add("card-title");
        title.textContent = meal.strMeal;
        cardBody.appendChild(title);

        const ingredients =
          card.querySelector(".ingredients") || document.createElement("ul");
        ingredients.classList.add("ingredients");
        cardBody.appendChild(ingredients);

        // Clear the ingredients list before adding new ones
        ingredients.innerHTML = "";

        for (let i = 1; i <= 20; i++) {
          if (meal[`strIngredient${i}`]) {
            const ingredient = `${meal[`strIngredient${i}`]} - ${
              meal[`strMeasure${i}`]
            }`;
            const ingredientItem = document.createElement("li");
            ingredientItem.textContent = ingredient;
            ingredients.appendChild(ingredientItem);
          }
        }

        const instructions =
          card.querySelector(".card-text:last-of-type") ||
          document.createElement("p");
        instructions.classList.add("card-text");
        instructions.textContent = meal.strInstructions;
        cardBody.appendChild(instructions);
        // remove the loader

        setTimeout(() => {
          card.querySelector(".loader").classList.add("hidden");
        }, 1000);
      });
    })
    .catch((error) => {
      console.error(error);
    });
}

createMealCard();

// savings calculator

const rangeInput = document.getElementById("range-input");
const rangeValue = document.getElementById("range-value");
const savingsValue = document.querySelector(".savings-value");
rangeInput &&
  rangeInput.addEventListener("input", function () {
    rangeValue.textContent = `$${rangeInput.value}`;
    let discount =
      rangeInput.value < 199
        ? 2.5
        : rangeInput.value < 499
        ? 5
        : rangeInput.value < 999
        ? 7.5
        : rangeInput.value >= 1000
        ? 10
        : 0;
    savingsValue.textContent =
      rangeInput.value < 100 ? "$0" : `$${(rangeInput.value * discount) / 100}`;
  });
