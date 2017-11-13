const canvas = document.getElementById('tetris');
const context = canvas.getContext('2d');
let W = canvas.width;
let H = canvas.height;

context.scale(20, 20);

const matrix = [
    [0, 0, 0],
    [1, 1, 1],
    [0, 1, 0]
];

function draw() {
    context.fillStyle = "#000";
    context.fillRect(0, 0, W, H);
    drawMatrix(player.matrix, player.position);
}

function drawMatrix(matrix, offset) {
    matrix.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value !== 0) {
                context.fillStyle = "red";
                context.fillRect(x + offset.x, y + offset.y, 1, 1);
            }
        });
    });
}

function update() {
    draw();
    requestAnimationFrame(update);

}

const player = {
    position: {x:5, y:5},
    matrix: matrix
};

update();