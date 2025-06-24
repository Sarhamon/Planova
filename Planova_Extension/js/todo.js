document.addEventListener("DOMContentLoaded", () => {
  const dateInput = document.getElementById("todoDate");
  const textInput = document.getElementById("todoText");
  const addBtn = document.getElementById("addTodo");
  const toggleBtn = document.getElementById("toggleTodos");
  const itemList = document.getElementById("todoItems");

  let todos = JSON.parse(localStorage.getItem("todos") || "[]");

  function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  function renderTodos() {
    itemList.innerHTML = "";
    todos.sort((a, b) => new Date(a.date) - new Date(b.date));
    todos.forEach((todo, index) => {
      const li = document.createElement("li");
      li.textContent = `${todo.date} - ${todo.text}`;
      const delBtn = document.createElement("button");
      delBtn.textContent = "❌";
      delBtn.style.marginLeft = "10px";
      delBtn.onclick = () => {
        todos.splice(index, 1);
        saveTodos();
        renderTodos();
      };
      li.appendChild(delBtn);
      itemList.appendChild(li);
    });
  }

  addBtn.addEventListener("click", () => {
    const date = dateInput.value;
    const text = textInput.value.trim();
    if (date && text) {
      todos.push({ date, text });
      saveTodos();
      renderTodos();
      textInput.value = "";
    }
  });

  toggleBtn.addEventListener("click", (e) => {
    // Prevent event bubbling to avoid unintended closing
    e.stopPropagation();
    if (itemList.style.display === "none" || itemList.style.display === "") {
      itemList.style.display = "block";
      toggleBtn.innerHTML = "▲";
      toggleBtn.title = "일정 목록 숨기기";
    } else {
      itemList.style.display = "none";
      toggleBtn.innerHTML = "◀";
      toggleBtn.title = "일정 목록 보기";
    }
  });

  renderTodos();
});
