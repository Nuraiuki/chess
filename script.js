document.addEventListener("DOMContentLoaded", function () {
    var chessboard = document.getElementById("chessboard");

    var pieceMoves = {
        "королева": "Ходит по вертикали, горизонтали и диагонали",
        "король": "Ходит на одну клетку в любом направлении",
        "пешка": "Ходит вперёд на одну клетку, а в первом ходу может сходить на две клетки; бьёт по диагонали",
        "рыцарь": "Делает 'букву L': две клетки в одном направлении и одну в перпендикулярном направлении",
        "слон": "Ходит по диагонали",
        "ладья": "Ходит по вертикали или горизонтали"
    };

    chessboard.addEventListener("click", function (event) {
        var target = event.target;

        if (target.tagName === "IMG") {
            var pieceName = target.alt.toLowerCase();

            if (pieceMoves.hasOwnProperty(pieceName)) {
                alert("Информация о ходах " + pieceName + ": " + pieceMoves[pieceName]);
            } else {
                alert("Информация о ходах для данной фигуры отсутствует.");
            }
        }
    });
});
