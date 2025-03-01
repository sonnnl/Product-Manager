const xpMenuBar = document.querySelector(".xp-menubar");
xpMenuBar.addEventListener("click", () => {
  document.querySelector("#sidebar").classList.toggle("active");
  document.querySelector("#content").classList.toggle("active");
});
document.querySelectorAll(".xp-menubar,.body-overlay").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector("#sidebar").classList.toggle("show-nav");
    document.querySelector(".body-overlay").classList.toggle("show-nav");
  });
});

// Bo loc san pham
// const statusButton = document.querySelector("#filterButton");

// if (statusButton) {
//   let url = new URL(window.location.href);

//   // Đặt giá trị mặc định khi load lại trang dựa vào URL
//   const params = new URLSearchParams(window.location.search);
//   const currentStatus = params.get("status") || ""; // Lấy giá trị status hoặc "" nếu không có

//   statusButton.value = currentStatus; // Set giá trị cho select

//   statusButton.addEventListener("change", (e) => {
//     const status = e.target.value;

//     if (status === "") {
//       url.searchParams.delete("status"); // Xóa param khỏi URL
//     } else {
//       url.searchParams.set("status", status);
//     }

//     window.location.href = url.href; // Reload trang với URL mới
//   });
// }

//bo loc 2
const filterButtons = document.querySelectorAll("[product-status]");
if (filterButtons.length > 0) {
  let url = new URL(window.location.href);
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      let status = btn.getAttribute("product-status");
      if (status === "") {
        url.searchParams.delete("status");
      } else {
        url.searchParams.set("status", status);
      }
      window.location.href = url.href;
    });
  });
}
