let tasks =
            JSON.parse(
                localStorage.getItem("tasks")
            ) || []

        let date =
            localStorage.getItem("date")

        let cat =
            localStorage.getItem("category")

        document.getElementById("showDate")
            .innerHTML =
            date + " - " + cat

        /* LOAD TASKS */

        function loadTasks() {

            document.getElementById("taskList")
                .innerHTML = ""

            tasks.forEach(function (t, index) {

                let li =
                    document.createElement("li")

                /* FLEX FIX */

                li.className =
                    "list-group-item d-flex justify-content-between align-items-center"

                li.innerHTML =

                    `<span>${t.task}</span>

                    <div>

                        <button class="btn btn-sm btn-warning me-2"
                                onclick="editTask(${index})">

                            <i class="bi bi-pencil"></i>

                        </button>

                        <button class="btn btn-sm btn-danger"
                                onclick="deleteTask(${index})">

                            <i class="bi bi-trash"></i>

                        </button>

                    </div>`

                document.getElementById("taskList")
                    .appendChild(li)

            })

            updateCount()

        }

        /* ADD */

        function addTask() {

            let input =
                document.getElementById("taskInput")
                    .value

            if (input == "")
                return

            tasks.push({

                date: date,
                task: input

            })

            localStorage.setItem(
                "tasks",
                JSON.stringify(tasks)
            )

            document.getElementById("taskInput")
                .value = ""

            loadTasks()

        }

        /* DELETE */

        function deleteTask(index) {

            tasks.splice(index, 1)

            localStorage.setItem(
                "tasks",
                JSON.stringify(tasks)
            )

            loadTasks()

        }

        /* EDIT */

        function editTask(index) {

            let newTask =
                prompt(
                    "Edit your task",
                    tasks[index].task
                )

            if (
                newTask !== null &&
                newTask.trim() !== ""
            ) {

                tasks[index].task =
                    newTask

                localStorage.setItem(
                    "tasks",
                    JSON.stringify(tasks)
                )

                loadTasks()

            }

        }

        /* COUNT */

        function updateCount() {

            document.getElementById("taskCount")
                .innerText =
                "Total Tasks : "
                + tasks.length

        }

        /* SUBMIT */

        function submitTask() {

            alert(
                "Task Saved Successfully!"
            )

        }

        /* CLOSE */

        function closePage() {

            window.location =
                "index.html"

        }

        /* ENTER KEY */

        document
            .getElementById("taskInput")
            .addEventListener(
                "keypress",
                function (e) {

                    if (e.key === "Enter") {

                        addTask()

                    }

                })

        loadTasks()