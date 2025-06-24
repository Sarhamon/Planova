document.addEventListener("DOMContentLoaded", () => {
  // === Google’s 메뉴 토글 ===
  const googleMenu = document.querySelector('.google-menu');
  const googleIcons = googleMenu.querySelector('.google-icons');

  googleMenu.addEventListener('click', (e) => {
    // 클릭 시 다른 이벤트 전파를 차단
    e.stopPropagation();
    // 아이콘 메뉴 토글: 보이면 숨기고, 숨겨지면 보이게
    if (googleIcons.style.display === 'flex') {
      googleIcons.style.display = 'none';
    } else {
      googleIcons.style.display = 'flex';
    }
  });

  // 문서의 다른 부분 클릭 시 구글 아이콘 메뉴 숨기기
  document.addEventListener('click', () => {
    googleIcons.style.display = 'none';
  });

  // === 캘린더 오버레이 열기 ===
    const calendarMenuItem = document.querySelector(".menu-list li:first-child");
    const calendarOverlay = document.getElementById("calendarOverlay");
  
    if (calendarMenuItem && calendarOverlay) {
      calendarMenuItem.addEventListener("click", (e) => {
        e.stopPropagation();
        calendarOverlay.classList.remove("hidden");
  
        // 💡 강제 리플로우로 애니메이션 활성화
        void calendarOverlay.offsetWidth;
  
        if (typeof renderCalendar === "function") {
          renderCalendar();
        }
      });
    }
  
    const closeBtn = document.getElementById("closeCalendar");
    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        calendarOverlay.classList.add("hidden");
      });
    }
  });