document.addEventListener("DOMContentLoaded", () => {
  const calendarAppIcon = document.getElementById("calendarAppIcon");
  const calendarOverlay = document.getElementById("calendarOverlay");

  if (calendarAppIcon && calendarOverlay) {
    calendarAppIcon.addEventListener("click", (e) => {
      e.stopPropagation();
      calendarOverlay.classList.remove("hidden");
      void calendarOverlay.offsetWidth;
      calendarOverlay.dispatchEvent(new CustomEvent("calendar:open"));
    });
  }
});
