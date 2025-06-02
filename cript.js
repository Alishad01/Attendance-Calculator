document.addEventListener('DOMContentLoaded', () => {
    let menu = document.querySelector('#menu-icon');
    let navlist = document.querySelector('.navlist');
    menu.onclick = () => {
        menu.classList.toggle('bx-x');
        navlist.classList.toggle('open');
    }

    // Smooth scroll to calculator section when Check Now is clicked
    document.getElementById("checkNowBtn").addEventListener("click", function (e) {
        e.preventDefault();
        document.getElementById("calculator").scrollIntoView({ behavior: "smooth" });
    });
    // Attendance Calculator logic
    function calculateAttendance() {
        let present = parseFloat(document.getElementById('presentLectures').value);
        let total = parseFloat(document.getElementById('totalLectures').value);
        let criteria = parseFloat(document.getElementById('attendanceCriteria').value);

        if (total > 0 && criteria > 0 && criteria <= 100) {
            let currentAttendance = (present / total) * 100;
            let resultText = `Your current attendance is ${currentAttendance.toFixed(2)}%.`;

            if (currentAttendance >= criteria) {
                let x = Math.floor((present - (criteria / 100) * total) / (criteria / 100));
                resultText += ` You can bunk ${x} more lecture${x !== 1 ? 's' : ''} to still meet the criteria.`;
            } else {
                let numerator = ((criteria / 100) * total) - present;
                let denominator = 1 - (criteria / 100);
                let x = Math.ceil(numerator / denominator);
                resultText += ` You need to attend ${x} more lecture${x !== 1 ? 's' : ''} without absence to meet the criteria.`;
            }

            document.getElementById('results').textContent = resultText;
        } else {
            alert("Total lectures and attendance criteria must be greater than zero, and criteria must be 100% or less.");
        }
    }
    // Get elements
    const aboutBtn = document.querySelector('.nav-btn'); // The "About" button
    const sidePanel = document.getElementById('sidePanel');
    const closePanelBtn = document.getElementById('closePanel');

    // Open the side panel on "About" click
    aboutBtn.addEventListener('click', () => {
        sidePanel.classList.add('open');
        overlay.style.display = 'block';
    });

    closePanelBtn.addEventListener('click', () => {
        sidePanel.classList.remove('open');
        overlay.style.display = 'none';
    });

    overlay.addEventListener('click', () => {
        sidePanel.classList.remove('open');
        overlay.style.display = 'none';
    });
});
