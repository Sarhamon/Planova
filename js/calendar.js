let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth();

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("calendarGrid");
  const title = document.getElementById("calendarTitle");
  const closeBtn = document.getElementById("closeCalendar");
  const overlay = document.getElementById("calendarOverlay");
  const yearSelector = document.getElementById("yearSelector");
  const monthSelector = document.getElementById("monthSelector");

  const searchInput = document.getElementById("searchInput");

  if (searchInput) {
    searchInput.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        const keyword = this.value.trim().toLowerCase();
        handleSearch(keyword);
      }
    });
  }

  function pad(n) {
    return n.toString().padStart(2, "0");
  }

  function getTodosFor(dateStr, todos) {
    return todos.filter(todo => todo.date === dateStr);
  }

  function bindCalendarTitleEvents() {
    const yearEl = document.getElementById("calendarYear");
    const monthEl = document.getElementById("calendarMonth");

    if (yearEl) {
      yearEl.addEventListener("click", () => {
        yearSelector.innerHTML = "";
        yearSelector.classList.remove("hidden");
        const baseYear = 2000;
        const currentRealYear = new Date().getFullYear();
        const endYear = currentRealYear + 20;
        for (let y = baseYear; y <= endYear; y++) {
          const option = document.createElement("div");
          option.textContent = y;
          option.addEventListener("click", () => {
            renderCalendar(y, currentMonth);
            yearSelector.classList.add("hidden");
          });
          yearSelector.appendChild(option);
        }
      });
    }

    if (monthEl) {
      monthEl.addEventListener("click", () => {
        monthSelector.innerHTML = "";
        monthSelector.classList.remove("hidden");
        for (let m = 1; m <= 12; m++) {
          const option = document.createElement("div");
          option.textContent = `${m}월`;
          option.addEventListener("click", () => {
            renderCalendar(currentYear, m - 1);
            monthSelector.classList.add("hidden");
          });
          monthSelector.appendChild(option);
        }
      });
    }
  }

  function renderCalendar(year, month, keyword = "") {
    currentYear = year;
    currentMonth = month;
    grid.innerHTML = "";
  
    const now = new Date();
    const todayStr = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
  
    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();
    const prevLastDate = new Date(year, month, 0).getDate();
  
    const todos = JSON.parse(localStorage.getItem("todos") || "[]");
  
    title.innerHTML = `
      <span id="calendarYear" class="calendar-clickable">${year}년</span>
      <span id="calendarMonth" class="calendar-clickable">${month + 1}월</span>
    `;
    bindCalendarTitleEvents();
  
    const totalCells = 42;
    let dayCount = 1;
  
    for (let i = 0; i < totalCells; i++) {
      const cell = document.createElement("div");
      cell.classList.add("calendar-cell");
  
      const weekDay = i % 7;
      if (weekDay === 0) cell.classList.add("sunday");
      if (weekDay === 6) cell.classList.add("saturday");
  
      let dayNum, cellDate, isAdjacent = false;
  
      if (i < firstDay) {
        dayNum = prevLastDate - firstDay + i + 1;
        const prevMonth = new Date(year, month - 1, dayNum);
        cellDate = `${prevMonth.getFullYear()}-${pad(prevMonth.getMonth() + 1)}-${pad(dayNum)}`;
        isAdjacent = true;
      } else if (dayCount > lastDate) {
        const nextDay = i - firstDay - lastDate + 1;
        const nextMonth = new Date(year, month + 1, nextDay);
        dayNum = nextDay;
        cellDate = `${nextMonth.getFullYear()}-${pad(nextMonth.getMonth() + 1)}-${pad(nextDay)}`;
        isAdjacent = true;
      } else {
        dayNum = dayCount;
        cellDate = `${year}-${pad(month + 1)}-${pad(dayNum)}`;
        if (cellDate === todayStr) {
          cell.classList.add("today");
        }
        dayCount++;
      }
  
      const day = document.createElement("div");
      day.className = "day-number";
      day.textContent = dayNum;
      if (isAdjacent) day.classList.add("adjacent-month");
      cell.appendChild(day);
  
      const list = document.createElement("ul");
      list.className = "todo-list";
  
      const dayTodos = getTodosFor(cellDate, todos);
      dayTodos.forEach(todo => {
        const li = document.createElement("li");
        li.textContent = todo.text;
        list.appendChild(li);

        if (keyword && todo.text.toLowerCase().includes(keyword)) {
          cell.classList.add("highlight");
        }
      });
  
      cell.appendChild(list);
      grid.appendChild(cell);
    }
  }

  // 초기 렌더링
  renderCalendar(currentYear, currentMonth);

  // 닫기 버튼
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      overlay.classList.add("hidden");
    });
  }

  // 캘린더 외부 클릭 시 닫기
  if (overlay) {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        overlay.classList.add("hidden");
      }
    });
  }

  // 이전/다음 달 이동
  const prevBtn = document.getElementById("prevMonth");
  const nextBtn = document.getElementById("nextMonth");

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      currentMonth--;
      if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
      }
      renderCalendar(currentYear, currentMonth);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      currentMonth++;
      if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
      }
      renderCalendar(currentYear, currentMonth);
    });

    function handleSearch(keyword) {
      const todos = JSON.parse(localStorage.getItem("todos") || "[]");
      console.log("검색어:", keyword);
      console.log("전체 할 일:", todos);
    
      if (!keyword) {
        renderCalendar(currentYear, currentMonth);
        return;
      }
    
      const matchedTodo = todos.find(todo => todo.text.toLowerCase().includes(keyword));
      if (matchedTodo) {
        const targetDate = new Date(matchedTodo.date);
        renderCalendar(targetDate.getFullYear(), targetDate.getMonth(), keyword);
      } else {
        alert("일치하는 할 일이 없습니다.");
      }
    }
    
  }

  // 선택기 외부 클릭 시 닫기
  document.addEventListener("click", (e) => {
    const yearEl = document.getElementById("calendarYear");
    const monthEl = document.getElementById("calendarMonth");
    if (!yearSelector.contains(e.target) && e.target !== yearEl) {
      yearSelector.classList.add("hidden");
    }
    if (!monthSelector.contains(e.target) && e.target !== monthEl) {
      monthSelector.classList.add("hidden");
    }
  });
  const goTodayBtn = document.getElementById("goToday");
  if (goTodayBtn) {
    goTodayBtn.addEventListener("click", () => {
      const now = new Date();
      currentYear = now.getFullYear();
      currentMonth = now.getMonth();
      renderCalendar(currentYear, currentMonth);
    });
  }
});

