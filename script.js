const toggle = document.getElementById("theme-toggle");
toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

 const form = document.querySelector(".contact-form");

  form.addEventListener("submit", function (e) {
      e.preventDefault();
      
      fetch(form.action, {
          method: "POST",
          body: new FormData(form)
      })
      .then(() => {
          alert("Message sent successfully!");
          form.reset();
      })
      .catch(() => {
          alert("Something went wrong. Please try again.");
      });
  });