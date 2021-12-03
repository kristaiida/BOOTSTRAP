let courses = [];

document.querySelector("button").addEventListener("click", addCourse);

document.getElementById("tulosta").addEventListener("click", showAll);

function addCourse() {
    let cname = document.getElementById("nimi").value;
    let sNum = document.getElementById("osallistujat").value;

    let course = { 
    name: cname,
    participants: sNum
}

courses.push(course);
}

function showAll() {
    courses.forEach(course => {
        let li = document.create("li");
        li.textContent = "Course " + course.cname + " has " + course.sNum + " students registered."

        document.querySelector("ul").appendChild(li);
    });
}