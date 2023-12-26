window.addEventListener('scroll', setScrollVar);
window.addEventListener('resize', setScrollVar);
function setScrollVar() {
  const htmlElement = document.documentElement;

  console.log(Math.min(percentOfScreenHeightScrolled * 100, 100));

  const percentOfScreenHeightScrolled =
    htmlElement.scrollTop / htmlElement.clientHeight;
  htmlElement.style.setProperty(
    '--scroll',
    Math.min(percentOfScreenHeightScrolled * 100, 100)
  );
}

setScrollVar();
