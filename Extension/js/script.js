function updateBackground() {
  document.body.style.backgroundImage = `url('assets/modern.png')`;
}

function updateClock() {
  const now = new Date();
  const clock = document.getElementById("clock");
  clock.textContent = now.toLocaleTimeString("ko-KR", { hour12: true });
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
  const interfaceElements = document.querySelectorAll(".sidebar, .todo-box, .footer");

  if (!username) {
    popup.style.display = "flex";
    interfaceElements.forEach(el => el.style.display = "none");
    updateGreeting(); // greeting 초기화
  } else {
    popup.style.display = "none";
    interfaceElements.forEach(el => el.style.display = "");
    updateGreeting(); // greeting 갱신
  }
}

document.addEventListener("DOMContentLoaded", () => {
  updateBackground();
  updateClock();
  setInterval(updateClock, 1000);        // 시계 매초 업데이트
  checkUsername();

  const saveBtn = document.getElementById("saveUsername");
  const changeUserBtn = document.getElementById("changeUserBtn");

  // 사용자 이름 저장 버튼
  saveBtn.addEventListener("click", () => {
    const input = document.getElementById("usernameInput").value.trim();
    if (input !== "") {
      localStorage.setItem("username", input);
      checkUsername(); // greeting 및 UI 업데이트
    }
  });

  // 사용자 변경 버튼 클릭 시
  changeUserBtn.addEventListener("click", (e) => {
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
