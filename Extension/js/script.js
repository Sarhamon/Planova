function getBackgroundFile(hour) {
  if (hour >= 6 && hour < 11) return "morning.png";
  if (hour >= 11 && hour < 13) return "noon.png";
  if (hour >= 13 && hour < 20) return "evening.png";
  return "night.png"; // 20:00–05:59
}

let currentBackgroundFile = null;
function updateBackground() {
  const file = getBackgroundFile(new Date().getHours());
  if (file === currentBackgroundFile) return;
  currentBackgroundFile = file;
  const stage = document.getElementById("stage");
  if (stage) {
    stage.style.backgroundImage = `url('assets/${file}')`;
  }
}

function updateGreeting() {
  const username = localStorage.getItem("username") || "";
  const hour = new Date().getHours();
  let greeting = "";

  if (hour >= 6 && hour < 12) greeting = "좋은 아침입니다!";
  else if (hour >= 12 && hour < 18) greeting = "좋은 오후입니다!";
  else if (hour >= 18 && hour < 20) greeting = "좋은 저녁입니다!";
  else greeting = "좋은 밤 되세요!";

  const greetingElement = document.getElementById("greeting");
  if (greetingElement) {
    greetingElement.textContent = `${greeting} ${username}님!`;
  }
}

function checkUsername() {
  const username = localStorage.getItem("username");
  const popup = document.getElementById("usernamePopup");
  popup.style.display = username ? "none" : "flex";
  updateGreeting();
}

document.addEventListener("DOMContentLoaded", () => {
  updateBackground();
  setInterval(updateBackground, 60_000); // 1분마다 시간대 경계 재체크
  checkUsername();

  const copyrightYearEl = document.getElementById("copyrightYear");
  if (copyrightYearEl) {
    copyrightYearEl.textContent = new Date().getFullYear();
  }

  const saveBtn = document.getElementById("saveUsername");
  const changeUserBtn = document.getElementById("changeUserBtn");

  // 사용자 이름 저장 버튼
  saveBtn?.addEventListener("click", () => {
    const input = document.getElementById("usernameInput").value.trim();
    if (input !== "") {
      localStorage.setItem("username", input);
      checkUsername();
    }
  });

  // 사용자 변경 버튼 (사용자 박스 비활성화 시에는 존재하지 않음)
  changeUserBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    const usernamePopup = document.getElementById("usernamePopup");
    usernamePopup.style.display = "flex";

    const usernameInput = document.getElementById("usernameInput");
    const storedUsername = localStorage.getItem("username");
    if (usernameInput && storedUsername) {
      usernameInput.value = storedUsername;
    }
  });
});
