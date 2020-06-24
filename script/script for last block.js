$(document).ready(function(){
    $('.grid-item').hover(
        function () {
            $(this).find('.cover').fadeIn(300)
        },
        function () {
            $(this).find('.cover').fadeOut(100)
        }
    );
    let $grid = $('.grid').masonry({
        itemSelector: '.grid-column',
        percentPosition: true,
        columnWidth: '.grid-sizer',
    });

    $grid.imagesLoaded().progress( function() {
        $grid.masonry();
    });
});