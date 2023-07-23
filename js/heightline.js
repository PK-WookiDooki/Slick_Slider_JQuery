$(document).ready(function () {
    $(".box-one>p").heightLine();
    $(".box-two>p").heightLine({
        maxWidth: 640,
    });
    $(".box-three>p").heightLine({
        minWidth: 640,
    });
    $(".box-four>p").heightLine({
        minWidth: 500,
        maxWidth: 768,
    });
    $(".box-five>p").heightLine({
        fontSizeCheck: true,
    });

    window.addEventListener("resize", function () {
        if (this.window.innerWidth < 640) {
            $(".box-six>p").heightLine("destroy");
        } else {
            $(".box-six>p").heightLine();
        }
    });
});
