$(document).ready(function () {
    $(".slick-dots").addClass("clearfix");

    //sliders

    //single item slide
    $(".single-slide").slick({
        autoplay: true,
        autoplaySpeed: 1000,
        dots: true,
        fade: true,
        cssEase: "linear",
    });

    //multiple items slide
    $(".multiple-slide").slick({
        slidesToScroll: 2,
        slidesToShow: 2,
        dots: true,
        autoplay: true,
        autoplaySpeed: 1500,
    });

    //variable width slide
    $(".vw-slide").slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
    });

    //adaptive height slide
    $(".adth-slide").slick({
        dots: true,
        slidesToShow: 1,
        adaptiveHeight: true,
    });

    //responsive slide
    $(".res-slide").slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false,
                },
            },
        ],
    });

    //data attribute slide
    $(".data-slide").slick();

    //center mode
    $(".center-slide").slick({
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });

    //add-remove
    let slideIndex = 1;
    $(".add-remove-slide").slick({
        slidesToScroll: 2,
        slidesToShow: 2,
    });
    $("#addBtn").on("click", function () {
        slideIndex++;
        $(".add-remove-slide").slick(
            "slickAdd",
            "<div class='slide-item num-blk'><p>" + slideIndex + "</p></div>"
        );
    });
    $("#removeBtn").on("click", function () {
        $(".add-remove-slide").slick("slickRemove", slideIndex - 1);
        if (slideIndex !== 0) {
            slideIndex--;
        } else {
            alert("There's no slide to remove!");
        }
    });

    //filter slide
    let filtered = false;
    $(".filter-slide").slick({
        slidesToScroll: 3,
        slidesToShow: 3,
        dots: true,
    });
    $("#filterBtn").on("click", function () {
        if (filtered === false) {
            $(".filter-slide").slick("slickFilter", ":odd");
            $(this).text("Unfilter Slides");
            filtered = true;
        } else {
            $(".filter-slide").slick("slickUnfilter");
            $(this).text("Filter Slides");
            filtered = false;
        }
    });

    //reverse slide
    $(".reverse-slide").slick({
        rtl: true,
        dots: true,
    });

    //lazy-slide
    $(".lazy-slide").slick({
        lazyLoad: "ondemand",
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
    });

    //destroy slider
    window.addEventListener("resize", function () {
        if (this.window.innerWidth < 640) {
            $(".limit-slide").slick("unslick");
        } else {
            $(".limit-slide").slick({
                infinite: true,
                slidesToScroll: 1,
                dots: true,
            });
        }
    });

    //thumbsnail slider
    $(".main-slide").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: ".nav-slide",
        autoplay: true,
        autoplaySpeed: 2500,
    });
    $(".nav-slide").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: ".main-slide",
        centerMode: true,
        arrows: false,
        focusOnSelect: true,
    });
});
s;
