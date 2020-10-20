            const options = {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric"
            };
            const year = new Date();
            document.getElementById("datetime").textContent = new Date().toDateString("en-us", options);
            document.getElementById("year").innerHTML = year.getFullYear()