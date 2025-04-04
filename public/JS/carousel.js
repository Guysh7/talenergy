document.addEventListener("DOMContentLoaded", () => {
    const imageFiles = ["A.JPG", "B.jpg", "C.jpg"]; // שמות הקבצים בתיקיית images
    const carousel = document.querySelector(".carousel");
  
    // יצירת אלמנטים לקרוסלה
    imageFiles.forEach((file, index) => {
      const div = document.createElement("div");
      div.classList.add("carousel-item");
      if (index === 0) div.classList.add("active"); // הפוך את התמונה הראשונה לפעילה
      const img = document.createElement("img");
      img.src = `images/${file}`;
      img.alt = `תמונה ${index + 1}`;
      div.appendChild(img);
      carousel.appendChild(div);
    });
  
    const items = document.querySelectorAll(".carousel-item");
    let currentIndex = 0;
  
    function showSlide(index) {
      items[currentIndex].classList.remove("active");
      currentIndex = (index + items.length) % items.length; // מעגליות
      items[currentIndex].classList.add("active");
    }
  
    // מעבר אוטומטי כל 3 שניות
    setInterval(() => showSlide(currentIndex + 1), 3000);
  
    // פונקציונליות לחצים
    document
      .querySelector(".carousel-control.prev")
      .addEventListener("click", () => {
        showSlide(currentIndex - 1);
      });
  
    document
      .querySelector(".carousel-control.next")
      .addEventListener("click", () => {
        showSlide(currentIndex + 1);
      });
  });