window.onload = () => {
    loadStats();
};

function updateCounters() {
    achievedSpan.textContent = `PASS: ${achieved}`;
    failedSpan.textContent = `FAILED: ${failed}`;
    totalSpan.textContent = `PRESCRIPTS: ${total}`;
}

document.getElementById("resetStatsBtn").onclick = () => {
    achieved = 0;
    failed = 0;
    total = 0;
    saveStats();
    updateCounters();
};

function showPlayButton() {
    buttonContainer.innerHTML = `<button id="startBtn">Next</button>`;
    document.getElementById("startBtn").addEventListener("click", handlePlayClick);
}

function showResultText(text) {
    canResolve = false;
    scrambleReveal(text, 0.3, 0.8, t => display.textContent = t, showPlayButton);
}

function showResultTextIntro(text) {
    scrambleReveal(text, 0.3, 0.8,t => display.textContent = t,);
}

function showResultButtons() {
    canResolve = false;

    buttonContainer.innerHTML = `
        <button id="achievedBtn" disabled>Pass</button>
        <button id="failedBtn" disabled>Failed</button>
    `;

    document.getElementById("achievedBtn").onclick = () => {
        if (!canResolve) return;
        achieved++; total++;
        updateCounters();
        saveStats();
        clearLastMessageId();
        showResultText("CLEAR");
    };

    document.getElementById("failedBtn").onclick = () => {
        if (!canResolve) return;
        failed++; total++;
        updateCounters();
        saveStats();
        clearLastMessageId();
        showResultText("FAIL");
    };
}
function redirect(url, newTab = true) {
    if (newTab) {
        window.open(url, "_blank", "noopener,noreferrer");
    } else {
        window.location.href = url;
    }
}