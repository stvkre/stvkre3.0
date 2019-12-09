const parallax = document.getElementById("main");
window.addEventListener("scroll", function()
{

  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * 0.05 + "px";
})
