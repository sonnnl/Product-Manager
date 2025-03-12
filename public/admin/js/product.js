const statusChangingButtons = document.querySelectorAll(
  "[button-change-status]"
);
if (statusChangingButtons.length > 0) {
  statusChangingButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      let formStatus = document.querySelector("[form-change-status]");
      let dataPath = formStatus.getAttribute("data-path");
      let dataStatus = btn.getAttribute("data-status");
      let changedStatus = dataStatus === "active" ? "inactive" : "active";
      let dataID = btn.getAttribute("data-id");
      formStatus.action = `${dataPath}/${changedStatus}/${dataID}?_method=PATCH`;
      formStatus.submit();
    });
  });
}
