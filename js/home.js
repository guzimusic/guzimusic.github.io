$(function() {
    $('.hd-nav li').click(function() {
        $(this).addClass('blue').siblings().removeClass('blue');
        var link = $(this).attr("data-link");
        $('html, body').animate({
            scrollTop: $(link).offset().top - 72
        },
        700);
        return false
    });
    $('.hanBao').click(function(event) {
        $(this).hasClass('glyphicon-headphones') ? $(this).removeClass('glyphicon-headphones').addClass('glyphicon-remove') : $(this).removeClass('glyphicon-remove').addClass('glyphicon-headphones');
        $('.slider').css("display") == "none" ? ($('.slider').slideDown(400)) : ($('.slider').slideUp(400))
    });
    $('.slider li').click(function(event) {
        var lin = $(this).attr("data-link");
        $('.hanBao').click();
        $('html, body').animate({
            scrollTop: $(lin).offset().top - 72
        },
        700);
        return false
    })
})