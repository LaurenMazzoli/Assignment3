$(document).ready(function () { 
    var cells = $(".cell");
    var colorCount = 0;

    var selectedCell = "";
    var pastBackgroundColor = "";

    for (var i = 0; i < cells.length; i++) {
        var cell = $(cells[i]);
        var isDark = colorCount % 2 == 0;
        var isNextRow = (i + 1) % 8 == 0;
        colorCount += isNextRow ? 2 : 1;
        cell.css("background-color", isDark ? "navy" : "white");

        $(cell).click(function () {
            var currentCell = $(this);
            currentCellClass = currentCell.attr("class");
            if (selectedCell.length > 0) {
                if (currentCellClass.indexOf("selected") < 0) { // cells are different - move piece
                    currentCell.attr("class", selectedCell.attr("class"));
                    selectedCell.attr("class", "cell"); // remove old piece
                }
                currentCell.removeClass("selected"); // clear selection
                selectedCell.css("background-color", pastBackgroundColor);
                pastBackgroundColor = "";
                selectedCell = "";
            }
            else {
                if (currentCellClass.length > 4) {
                    pastBackgroundColor = currentCell.css("background-color");
                    currentCell.css("background-color", "lime");
                    currentCell.addClass("selected");
                    selectedCell = currentCell;
                }
            }
        });
    }
});