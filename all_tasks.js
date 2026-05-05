  let tasks = JSON.parse(localStorage.getItem("tasks")) || []

        let list = document.getElementById("taskList")

        tasks.forEach((t, index) => {

            let li = document.createElement("li")
            li.className = "task-item"

            li.innerHTML = `
<div>
<input type="checkbox" onclick="completeTask(this)">
<span>${t.date} - ${t.task}</span>
</div>

<button class="btn btn-sm btn-danger" onclick="deleteTask(${index})">
🗑
</button>
`

            list.appendChild(li)

        })

        function deleteTask(index) {
            tasks.splice(index, 1)
            localStorage.setItem("tasks", JSON.stringify(tasks))

            document.querySelectorAll(".task-item")[index].style.transform = "scale(0)"
            setTimeout(() => location.reload(), 300)
        }

        function completeTask(box) {
            box.nextElementSibling.classList.toggle("completed")
        }

        function goBack() {
            window.location = "index.html"
        }