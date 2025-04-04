const statusChangingButtons = document.querySelectorAll(
  "[button-change-status]"
);
if (statusChangingButtons.length > 0) {
  statusChangingButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      let formStatus = document.querySelector("[form-change-status]"); //lay phan tu form change status
      let dataPath = formStatus.getAttribute("data-path"); // lay data path tu phan tu form
      let dataStatus = btn.getAttribute("data-status"); // lay status hien tai
      let changedStatus = dataStatus === "active" ? "inactive" : "active"; // doi status de day len api
      let dataID = btn.getAttribute("data-id"); // lay id cua product
      formStatus.action = `${dataPath}/${changedStatus}/${dataID}?_method=PATCH`; //cap nhat att action (attribute mac dinh cua form)
      formStatus.submit(); // ham goi api
    });
  });
}
const formChangeMulti = document.querySelector("form[form-change-multi]");
if (formChangeMulti) {
  formChangeMulti.addEventListener("submit", (e) => {
    e.preventDefault();
    const check = document.querySelectorAll(
      "input[checkbox_product_button]:checked"
    );
    if (check.length > 0) {
      let ids = [];
      check.forEach((item) => {
        ids.push(item.getAttribute("product-id"));
      });
      const changingInput = document.querySelector("input[name='ids']");
      changingInput.value = ids.join(", ");
      formChangeMulti.submit();
    }
  });
}
