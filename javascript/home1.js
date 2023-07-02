const page = {
  width: 1714,
  height: 1024
}
const resizePage = () => {
  const viewWidth = window.innerWidth
  const container = document.getElementById('container')
  const scale = viewWidth / page.width
  const displayHeight = page.height * scale || 0
  document.body.style.paddingTop = displayHeight + 'px'
  container.style.transform = 'scale(' + scale + ')'
  container.style.display = 'block'
}
resizePage();
(function () {
  var throttle = function (type, name, obj) {
    obj = obj || window;
    var running = false;
    var func = function () {
      if (running) { return; }
      running = true;
      requestAnimationFrame(function () {
        obj.dispatchEvent(new CustomEvent(name));
        running = false;
      });
    };
    obj.addEventListener(type, func);
  };
  throttle("resize", "optimizedResize");
})();
window.addEventListener("optimizedResize", resizePage);