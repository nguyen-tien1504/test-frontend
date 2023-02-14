const service = document.querySelectorAll("[data=list-service]");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
let currentList = 0;
service.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});
nextBtn.classList.add("serviceActive");
prevBtn.disabled = true;
nextBtn.addEventListener("click", () => {
  if (currentList == service.length - 2) {
    nextBtn.classList.remove("serviceActive");
    nextBtn.disabled = true;
  }

  serviceSpanBtn[currentList].classList.remove("serviceActive");
  currentList++;
  serviceSpanBtn[currentList].classList.add("serviceActive");
  prevBtn.disabled = false;
  prevBtn.classList.add("serviceActive");
  service.forEach((list, indx) => {
    list.style.transform = `translateX(${100 * (indx - currentList)}%)`;
  });
});
prevBtn.addEventListener("click", () => {
  if (currentList == 1) {
    prevBtn.disabled = true;
    prevBtn.classList.remove("serviceActive");
  }
  nextBtn.disabled = false;
  nextBtn.classList.add("serviceActive");
  serviceSpanBtn[currentList].classList.remove("serviceActive");
  currentList--;
  serviceSpanBtn[currentList].classList.add("serviceActive");
  service.forEach((list, indx) => {
    list.style.transform = `translateX(${100 * (indx - currentList)}%)`;
  });
});
const serviceSpanBtn = document.querySelectorAll("[data=list-service-btn]");
serviceSpanBtn[0].classList.add("serviceActive");
serviceSpanBtn.forEach((item, indx) => {
  item.addEventListener("click", () => {
    if (indx == 0) {
      prevBtn.disabled = true;
      prevBtn.classList.remove("serviceActive");
      nextBtn.classList.add("serviceActive");
    } else if (indx == service.length - 1) {
      nextBtn.disabled = true;
      prevBtn.disabled = false;
      nextBtn.classList.remove("serviceActive");
      prevBtn.classList.add("serviceActive");
    } else {
      nextBtn.classList.add("serviceActive");
      prevBtn.classList.add("serviceActive");
      prevBtn.disabled = false;
      nextBtn.disabled = false;
    }

    serviceSpanBtn[currentList].classList.remove("serviceActive");
    currentList = indx;
    serviceSpanBtn[currentList].classList.add("serviceActive");
    service.forEach((list, index) => {
      list.style.transform = `translateX(${100 * (index - currentList)}%)`;
    });
  });
});
