const updateCards = (timeframe) => {
  fetch("/src/data/data.json")
    .then((response) => response.json())
    .then((data) => {
      const cards = document.querySelectorAll("article");

      cards.forEach((card) => {
        const title = card.getAttribute("data-title");
        const timeData = data.find((item) => item.title === title);

        if (timeData) {
          const currentElement = card.querySelector("[data-current]");
          const previousElement = card.querySelector("[data-previous]");

          if (currentElement && previousElement) {
            const current = timeData.timeframes[timeframe].current;
            const previous = timeData.timeframes[timeframe].previous;

            currentElement.textContent = `${current}hrs`;
            previousElement.textContent = `Last Week - ${previous}hrs`;
          }
        }
      });
    })
    .catch((error) => {
      console.error("Failed to fetch data.json:", error);
    });
};

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("button[data-timeframe]");
  const dailyButton = document.querySelector('button[data-timeframe="daily"]');

  if (dailyButton) {
    dailyButton.dataset.active = "true";
  }

  updateCards("daily");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const timeframe = button.dataset.timeframe;
      if (timeframe) {
        buttons.forEach((b) => delete b.dataset.active);
        button.dataset.active = "true";
        updateCards(timeframe);
      }
    });
  });
});
