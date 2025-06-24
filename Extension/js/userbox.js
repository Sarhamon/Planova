document.addEventListener("DOMContentLoaded", () => {
  const STORAGE_KEYS = {
    username: "username",
    profileImage: "profileImage",
    firstAccess: "firstAccess",
  };

  const elements = {
    userIcon: document.getElementById("userIcon"),
    userPanel: document.getElementById("userPanel"),
    usernameDisplay: document.getElementById("usernameDisplay"),
    userFirstAccessDisplay: document.getElementById("userFirstAccess"),
    changeUserBtn: document.getElementById("changeUserBtn"),
    uploadProfileImageBtn: document.getElementById("uploadProfileImageBtn"),
    profileImageInput: document.getElementById("profileImageInput"),
    profileImage: document.getElementById("profileImage"),
    usernamePopup: document.getElementById("usernamePopup"),
    saveUsernameBtn: document.getElementById("saveUsername"),
    confirmUsernameBtn: document.getElementById("confirmUsernameBtn"),
    cancelUsernameBtn: document.getElementById("cancelUsernameBtn"),
    usernameInput: document.getElementById("usernameInput"),
    greetingText: document.getElementById("greeting"),
  };

  let isChangingUser = false;

  // 최초 접속일 설정
  function setInitialAccessDate() {
    let firstAccess = localStorage.getItem(STORAGE_KEYS.firstAccess);
    if (!firstAccess) {
      firstAccess = new Date().toLocaleDateString("ko-KR");
      localStorage.setItem(STORAGE_KEYS.firstAccess, firstAccess);
    }
    elements.userFirstAccessDisplay.textContent = firstAccess;
  }

  // 사용자 이름을 업데이트하는 함수
  function updateUsernameDisplay() {
    const username = localStorage.getItem(STORAGE_KEYS.username);
    if (username) {
      elements.usernameDisplay.textContent = username;
      elements.userPanel.classList.remove("show");
      elements.userIcon.style.display = "flex";
    } else {
      elements.usernameDisplay.textContent = "";
      elements.userPanel.classList.remove("show");
      elements.userIcon.style.display = "none";
    }
  }

  // 프로필 이미지 로드
  function loadProfileImage() {
    const storedImage = localStorage.getItem(STORAGE_KEYS.profileImage);
    elements.profileImage.src = storedImage || "assets/user.png";
  }

  // 사용자 이름 입력 팝업을 열고 변경/취소 버튼 설정
  function showUsernamePopup(isChange = false) {
    isChangingUser = isChange;
    elements.usernamePopup.style.display = "flex";
    elements.usernameInput.value = isChange ? localStorage.getItem(STORAGE_KEYS.username) || "" : "";
    elements.usernameInput.focus();

    elements.saveUsernameBtn.style.display = isChange ? "none" : "inline-block";
    elements.confirmUsernameBtn.style.display = isChange ? "inline-block" : "none";
    elements.cancelUsernameBtn.style.display = isChange ? "inline-block" : "none";
  }

  // 이벤트 핸들러 바인딩
  function bindEvents() {
    elements.userIcon.addEventListener("click", (e) => {
      e.stopPropagation();
      elements.userPanel.classList.toggle("show");
    });

    document.addEventListener("click", () => {
      elements.userPanel.classList.remove("show");
    });

    elements.changeUserBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      elements.userPanel.classList.remove("show");
      showUsernamePopup(true);
    });

    elements.uploadProfileImageBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      elements.profileImageInput.click();
    });

    elements.profileImageInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const dataUrl = event.target.result;
          localStorage.setItem(STORAGE_KEYS.profileImage, dataUrl);
          elements.profileImage.src = dataUrl;
        };
        reader.readAsDataURL(file);
      }
    });

    elements.saveUsernameBtn?.addEventListener("click", () => {
      const input = elements.usernameInput.value.trim();
      if (input) {
        localStorage.setItem(STORAGE_KEYS.username, input);
        updateUsernameDisplay();
        elements.usernamePopup.style.display = "none";
      }
    });

    elements.confirmUsernameBtn?.addEventListener("click", () => {
      const input = elements.usernameInput.value.trim();
      if (input) {
        localStorage.setItem(STORAGE_KEYS.username, input);
        updateUsernameDisplay();
        elements.usernamePopup.style.display = "none";
        updateGreeting();
      }
    });

    elements.cancelUsernameBtn?.addEventListener("click", () => {
      elements.usernamePopup.style.display = "none";
    });
  }

  // 초기화 함수
  function init() {
    elements.userIcon.style.display = "none";
    elements.userPanel.classList.remove("show");
    setInitialAccessDate();
    updateUsernameDisplay();
    loadProfileImage();

    const username = localStorage.getItem(STORAGE_KEYS.username);
    if (!username) {
      showUsernamePopup(false);
    } else {
      updateGreeting();
    }

    bindEvents();
  }

  init();
});
