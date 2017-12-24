$(document).ready(function() {
  document.addEventListener("finishedLoading", function(e) {
    $("#typetext").typed({
      strings: ["Columbia University Undergraduate",
                "Operations Research Major",
                "Music Business Consultant",
                "Human-Centered Designer",
                "Award-Winning Composer"],
      typeSpeed: 80,
      backDelay: 1200,
      loop: true
    });
  });
})
