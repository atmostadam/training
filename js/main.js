window.addEventListener("load", function () {
    console.log("Starting Application...");
    const canvas = document.getElementById("game-canvas");
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "green";
    ctx.fillRect(200, 100, 500, 500);

});