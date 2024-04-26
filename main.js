document.addEventListener("DOMContentLoaded", function() {
    const boxes = document.querySelectorAll(".box");

    boxes.forEach(function(box) {
        box.addEventListener("click", function() {
            const title = box.textContent.trim();
            alert("You clicked on " + title);
        });
    });
});
