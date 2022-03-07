const container = document.querySelector(".container");
window.addEventListener("keydown", function (event) {
  container.innerHTML = ` <div class="key">
    <small>Key</small>
    <div class="btn">${event.key === " " ? "Space" : event.key}</div>
    </div>
    <div class="key">
    <small>keyCode</small>
    <div class="btn">${event.keyCode}</div>
    </div>
    <div class="key">
    <small>Code</small>
    <div class="btn">${event.code}</div>
    </div>`;
});
