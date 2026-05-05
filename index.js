  let currentDate = new Date()
        let selectedDate = ""

        function generateCalendar() {

            let cal = document.getElementById("calendar")
            cal.innerHTML = ""

            let year = currentDate.getFullYear()
            let month = currentDate.getMonth()

            document.getElementById("monthYear").innerHTML =
                currentDate.toLocaleString('default', { month: 'long' }) + " " + year

            let days = new Date(year, month + 1, 0).getDate()

            for (let i = 1; i <= days; i++) {

                let div = document.createElement("div")
                div.className = "day"
                div.innerHTML = i

                div.onclick = function () {
                    selectedDate = i + "/" + (month + 1) + "/" + year
                    localStorage.setItem("date", selectedDate)
                    alert("Selected: " + selectedDate)
                }

                cal.appendChild(div)
            }

        }

        function nextmonth() {
            currentDate.setMonth(currentDate.getMonth() + 1)
            generateCalendar()
        }

        function prevmonth() {
            currentDate.setMonth(currentDate.getMonth() - 1)
            generateCalendar()
        }

        function openTask() {

            let cat = document.getElementById("category").value
            if (cat == "") { alert("Select Category"); return }

            localStorage.setItem("category", cat)
            window.location = "task.html"

        }

        function openNotes() {
            window.location = "all_tasks.html"
        }

        generateCalendar()