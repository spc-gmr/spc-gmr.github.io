alert("JS読み込まれてるよ");

function showMessage() {
  const messages = [
    "Valorantやってます!",
    "動画編集はDaVinci Resolveでやっています!",
    "一緒にゲームやりましょう!"
  ];

  const i = Math.floor(Math.random() * messages.length);
  const msg = document.getElementById("message");

  if (msg) {
    msg.textContent = messages[i];
  } else {
    console.log("messageが見つからない");
  }
}

function nameClick() {
  alert("見てくれてありがとう！");
}

let isDark = true;

function changeTheme() {
  if (isDark) {
    document.body.style.backgroundImage =
      "radial-gradient(circle at 20% 30%, #22c55e33 0%, transparent 40%)," +
      "radial-gradient(circle at 80% 70%, #f472b633 0%, transparent 40%)";

    document.body.style.backgroundColor = "#020617";

    document.body.style.color = "#22c55e";
    document.querySelector("h1").style.color = "#f472b6";

  } else {
    document.body.style.backgroundImage =
      "radial-gradient(circle at 20% 30%, #38bdf833 0%, transparent 40%)," +
      "radial-gradient(circle at 80% 70%, #a78bfa33 0%, transparent 40%)";

    document.body.style.backgroundColor = "#020617";

    document.body.style.color = "#e2e8f0";
    document.querySelector("h1").style.color = "#38bdf8";
  }

  isDark = !isDark;
}

function openModal(img) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modalImg");

  modal.style.display = "flex";
  modalImg.src = img.src;
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}
