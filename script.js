document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("popup");
  const playMusicBtn = document.getElementById("playMusicBtn");
  const toggleMusicBtn = document.getElementById("toggleMusicBtn");
  const toggleMusicImg = document.getElementById("toggleMusicImg");

  const audio = new Audio("./assets/mp3/korz.mp3");

  let isMusicPlaying = false;

  playMusicBtn.addEventListener("click", function () {
    audio.play();
    audio.volume = 0.1;
    popup.style.display = "none";
    isMusicPlaying = true;
    toggleMusicImg.src = "https://img.icons8.com/water-color/50/pause.png";
  });

  toggleMusicBtn.addEventListener("click", function () {
    if (isMusicPlaying) {
      audio.pause();
      toggleMusicImg.src = "https://img.icons8.com/nolan/64/play.png";
    } else {
      audio.play();
      toggleMusicImg.src = "https://img.icons8.com/water-color/50/pause.png";
    }
    isMusicPlaying = !isMusicPlaying;
  });

  popup.style.display = "flex";

  const aInput = document.getElementById("a");
  const bInput = document.getElementById("b");
  const cInput = document.getElementById("c");
  const equationP = document.getElementById("equation");

  const x1root = document.getElementById("root1");
  const x2root = document.getElementById("root2");

  function solveQuadratic(a, b, c) {
    var discriminant = b * b - 4 * a * c;
    if (discriminant < 0) {
      // "Уравнение не имеет реальных корней"
      return "?";
    } else if (discriminant === 0) {
      // Уравнение имеет один корень
      return [-b / (2 * a)];
    } else {
      var root1 = ((-b + Math.sqrt(discriminant)) / (2 * a)).toFixed(2);
      var root2 = ((-b - Math.sqrt(discriminant)) / (2 * a)).toFixed(2);
      return [root1, root2];
    }
  }

  function updateEquation() {
    const a = aInput.value || 0;
    const b = bInput.value || 0;
    const c = cInput.value || 0;
    equationP.textContent = `${a ? a : "a"}x^2 + ${b ? b : "b"}x + ${
      c ? c : "c"
    } = 0`;
  }

  function calculateRoots() {
    const a = parseFloat(aInput.value) || 0;
    const b = parseFloat(bInput.value) || 0;
    const c = parseFloat(cInput.value) || 0;

    updateEquation();

    if (a === 0) {
      x1root.textContent = "?";
      x2root.textContent = "?";
      return;
    }

    const result = solveQuadratic(a, b, c);
    x1root.textContent = result[0];
    x2root.textContent = result[1] ? result[1] : "?";
  }

  aInput.addEventListener("input", calculateRoots);
  bInput.addEventListener("input", calculateRoots);
  cInput.addEventListener("input", calculateRoots);

  calculateRoots();
});

// Дискриминант представляет собой многочлен, который составляется из коэффициентов квадратного трехчлена. С его помощью определяется количество корней уравнения и значение каждого из них. Дискриминант обозначается буквой D. Его значение для типового квадратного уравнения определяется по следующей формуле: D = b2 – 4ac.Если дискриминант больше нуля, корень вычисляется по формуле: х = -b +-корень из дискриминанта разделить на 2 а.
