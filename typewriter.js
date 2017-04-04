$(document).ready(function() {
  document.addEventListener("finishedLoading", function(e) {
    $("#typetext").typed({
      strings: ["Operations Research",
                "Engineering Management",
                "Social Thinker",
                "Award-Winning Composer"],
      typeSpeed: 80,
      backDelay: 1200,
      loop: true
    });
  });
})
