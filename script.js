function searchContent() {
    let input = document.getElementById("searchInput");
    if (!input) return;

    let filter = input.value.toLowerCase();

    let cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        let text = card.innerText.toLowerCase();
        if (text.includes(filter)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });

    let rows = document.querySelectorAll("table tr");
    rows.forEach((row, index) => {
        if (index === 0) return; // header row
        let text = row.innerText.toLowerCase();
        if (text.includes(filter)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
}

function animateNumbers() {
    let numbers = document.querySelectorAll(".count");

    numbers.forEach(num => {
        let target = parseInt(num.getAttribute("data-target"));
        if (isNaN(target)) return;

        let count = 0;
        let speed = Math.max(10, Math.floor(target / 100));

        let update = () => {
            if (count < target) {
                count += speed;
                if (count > target) count = target;
                num.innerText = count.toLocaleString();
                setTimeout(update, 20);
            }
        };

        update();
    });
}

window.onload = animateNumbers;