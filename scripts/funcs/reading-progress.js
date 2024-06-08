export function readingProgress() {
  if (window.ResizeObserver) {
    const progress = document.getElementById("reading-progress");

    let timeOfLastScroll = 0;
    let requestedAniFrame = false;
    function scroll() {
      if (!requestedAniFrame) {
        requestAnimationFrame(updateProgress);
        requestedAniFrame = true;
      }
      timeOfLastScroll = Date.now();
    }
    addEventListener("scroll", scroll);

    let winHeight = 1000;
    let bottom = 10000;
    function updateProgress() {
      requestedAniFrame = false;
      const percent = Math.min(
        (document.scrollingElement.scrollTop / (bottom - winHeight)) * 100,
        100,
      );
      if (progress) {
        progress.style.transform = `translate(-${100 - percent}vw, 0)`;
      }
      if (Date.now() - timeOfLastScroll < 3000) {
        requestAnimationFrame(updateProgress);
        requestedAniFrame = true;
      }
    }

    new ResizeObserver(() => {
      bottom =
        document.scrollingElement.scrollTop +
        document.querySelector("#comments,footer").getBoundingClientRect().top;
      winHeight = window.innerHeight;
      scroll();
    }).observe(document.body);
  }
}
