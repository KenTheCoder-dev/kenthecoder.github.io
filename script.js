document.addEventListener("DOMContentLoaded", function() {
    const fadeElements = document.querySelectorAll(".fade-in");

    function handleScroll() {
        fadeElements.forEach(element => {
            if (element.getBoundingClientRect().top < window.innerHeight * 0.9) {
                element.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();
});

document.addEventListener("DOMContentLoaded", () => {
    const typingText =
    document.querySelector(".typed-text");
    typingText.textContent = "BSIT Student, Future Front-End Dev. (Only Yours Janey!)";
})

document.addEventListener("DOMContentLoaded", function() {
    const text = "Aspiring Web Designer | Dreamer.";
    const target = document.querySelector(".typing-text");
    type();
  });