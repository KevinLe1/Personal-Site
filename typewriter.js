$(document).ready(function() {
  document.addEventListener("finishedLoading", function(e) {
    $("#typetext").typed({
      strings: ["Operations Research Student",
                "Columbia University Undergraduate",
                "Programmer and Builder",
                "Award-Winning Composer"],
      typeSpeed: 80,
      backDelay: 1200,
      loop: true
    });
  });
})
