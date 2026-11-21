// Source using: https://www.codexworld.com/how-to/get-current-year-to-display-dynamic-year-in-copyright-using-javascript/
document.getElementById("year").innerHTML = new Date().getFullYear();

// start.html checklist
// source using: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event
// source using: https://developer.mozilla.org/en-US/docs/Web/API/HTMLProgressElement/value
const checklist = document.getElementById("starting-checklist");

if (checklist) {
    const tasks = checklist.querySelectorAll('input[type="checkbox"]');
    const progress = document.getElementById("kickoff-progress");
    const progressText = document.getElementById("progress-text");
    const resetButton = document.getElementById("reset-checklist");

    function updateProgress() {
        let completed = 0;
        tasks.forEach(function(task) {
            if (task.checked) {
                completed++;
            }
        });
        progress.value = completed;
        progressText.textContent = completed + " of " + tasks.length + " tasks completed";
    }

    tasks.forEach(function(task) {
        task.checked = localStorage.getItem(task.id) === "true";
        task.addEventListener("change", function() {
            localStorage.setItem(task.id, task.checked);
            updateProgress();
        });
    });

    resetButton.addEventListener("click", function() {
        tasks.forEach(function(task) {
            task.checked = false;
            localStorage.removeItem(task.id);
        });

        updateProgress();
        tasks[0].focus();
    });

    updateProgress();
}