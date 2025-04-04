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

const searchProductButton = document.querySelector("#form-search");
if (searchProductButton) {
  searchProductButton.addEventListener("submit", (e) => {
    e.preventDefault();
    let url = new URL(window.location.href);
    let keyword = e.target[0].value;
    if (keyword === "") {
      url.searchParams.delete("keyword");
    } else {
      url.searchParams.set("keyword", keyword);
    }
    window.location.href = url.href;
  });
}
//Pagination Start
const paginationButtons = document.querySelectorAll(".page-link-number");
if (paginationButtons.length > 0) {
  paginationButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      let url = new URL(window.location.href);
      let page = btn.innerHTML;
      url.searchParams.set("page", page);
      window.location.href = url.href;
    });
  });
}
const pageNavigationButtons = document.querySelectorAll(
  ".page-link-navigation"
);
if (pageNavigationButtons.length > 0) {
  pageNavigationButtons.forEach((btn) => {
    const url = new URL(window.location.href);
    const page = parseInt(url.searchParams.get("page"));
    btn.addEventListener("click", () => {
      if (btn.innerHTML === "Previous") {
        url.searchParams.set("page", page - 1);
      } else {
        url.searchParams.set("page", page + 1);
      }
      window.location.href = url.href;
    });
  });
}

//Pagination end

//select all product
const checkingAllButton = document.querySelector("input[select-all-checkbox]");
const checkingButtons = document.querySelectorAll(
  "input[checkbox_product_button]"
);
if (checkingAllButton) {
  checkingAllButton.addEventListener("click", () => {
    if (checkingButtons) {
      if (checkingAllButton.checked) {
        checkingButtons.forEach((item) => {
          item.checked = true;
        });
      } else {
        checkingButtons.forEach((item) => {
          item.checked = false;
        });
      }
    }
  });
}
if (checkingButtons) {
  const checkingAllButton = document.querySelector(
    "input[select-all-checkbox]"
  );
  checkingButtons.forEach((item) => {
    item.addEventListener("click", () => {
      let cnt = document.querySelectorAll(
        "input[checkbox_product_button]:checked"
      ).length;
      if (cnt === checkingButtons.length) {
        checkingAllButton.checked = true;
      } else {
        checkingAllButton.checked = false;
      }
    });
  });
}
