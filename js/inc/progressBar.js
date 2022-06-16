const bars = document.querySelectorAll(".bar");
const progress = document.querySelectorAll(".progress");

export function progressBars(pbar,end = 100, start = 0) {
  if (start == 0) {
    start = 1;
    const elem = document.getElementById(pbar);
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= end) {
        clearInterval(id);
        start = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}
