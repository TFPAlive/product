const customSelect = document.querySelector(".custom-sort"),
      selectBtn = document.querySelector(".select-button"),
      selectedValue = document.querySelector(".selected-value"),
      optionsList = document.querySelectorAll(".select-dropdown li");

function activate() {
  customSelect.classList.toggle("active");
  selectBtn.setAttribute(
    "aria-expanded",
    selectBtn.getAttribute("aria-expanded") === "true" ? "false" : "true"
  );
};
optionsList.forEach((option) => {
  function handler(e) {
    if (e.type === "click" && e.clientX !== 0 && e.clientY !== 0) {
      if (selectedValue.textContent === "Remove") {
        selectedValue.textContent = "Rating";
      }
      else {
        selectedValue.textContent = this.children[1].textContent;
      }
      customSelect.classList.remove("active");
    }
    if (e.key === "Enter") {
      selectedValue.textContent = this.textContent;
       customSelect.classList.remove("active");
    }
  }
  option.addEventListener("keyup", handler);
  option.addEventListener("click", handler);
});