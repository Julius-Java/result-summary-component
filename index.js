fetch("./data.json")
    .then(response => response.json())
    .then(data => {
        const pointElements = document.querySelectorAll(".point")
        const scoreElements = document.querySelectorAll(".score-info p")
        const scoreIcon = document.querySelectorAll(".score-info img")

        // console.log(pointElements);
        pointElements.forEach((elem, index) => {
            elem.textContent = data[index].score
        })

        // console.log(scoreElements);
        scoreElements.forEach((elem, index) => {
            elem.textContent = data[index].category
        })

        // console.log(scoreIcon);
        scoreIcon.forEach((elem, index) => {
            elem.src = data[index].icon
        })
    })