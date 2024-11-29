document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".form_control");
    const input = document.querySelector("#taskInput");
    const taskList = document.querySelector(".task_list");
    const deleteAllBtn = document.querySelector(".alldeletebtn");
    const popup = document.getElementById("popupMessage");

    function addTask(event) {
      event.preventDefault();

      const inputValue = input.value.trim();
      if (!inputValue) {
        // Show popup when the input is empty
        popup.style.display = "block";
        return; // Exit the function to prevent adding a blank task
      }

      // Create task list elements
      const listItem = document.createElement("li");
      listItem.classList.add("task_items");

      const listDiv = document.createElement("div");
      listDiv.classList.add("task_info");

      const check = document.createElement("input");
      check.type = "checkbox";

      const taskName = document.createElement("p");
      taskName.textContent = inputValue;

      const deleteBtn = document.createElement("button");
      deleteBtn.classList.add("delete");
      deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';

      // Append elements to the DOM
      taskList.appendChild(listItem);
      listItem.appendChild(listDiv);
      listDiv.appendChild(check);
      listDiv.appendChild(taskName);
      listItem.appendChild(deleteBtn);

      // Clear the input field after adding the task
      input.value = "";
      input.focus(); // Set focus back to the input field

      // Add delete functionality for this specific task
      deleteBtn.addEventListener("click", () => {
        listItem.remove();
      });

      // Toggle checkbox on double click of the list item
      listItem.addEventListener("dblclick", () => {
        check.checked = !check.checked;
      });
    }

    function deleteSelectedTasks() {
      const tasks = document.querySelectorAll(".task_items");
      tasks.forEach((task) => {
        const checkbox = task.querySelector("input[type='checkbox']");
        if (checkbox && checkbox.checked) {
          task.remove();
        }
      });
    }

    // Close popup function
    function closePopup() {
      popup.style.display = "none";
    }

    // Attach event listeners
    form.addEventListener("submit", addTask);
    deleteAllBtn.addEventListener("click", deleteSelectedTasks);

    // Add event listener to close button inside popup
    const closeButton = document.querySelector(".popup-close-btn");
    if (closeButton) {
      closeButton.addEventListener("click", closePopup);
    } else {
      console.error("Popup close button not found.");
    }
  });
