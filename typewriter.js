$(document).ready(function() {
  document.addEventListener("finishedLoading", function(e) {
    $("#typetext").typed({
      strings: ["MechE Student",
                "Social Thinker",
                "Researcher",
                "Award-Winning Composer"],
      typeSpeed: 80,
      backDelay: 1200,
      loop: true
    });
  });
})
