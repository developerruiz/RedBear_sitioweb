    $(document).ready(function () {

        $(document).on("scroll", onScroll);

    });

    function onScroll(event){
        var Desplazamiento_Actual = window.pageYOffset;
        if (Desplazamiento_Actual>900) {
            document.getElementById('navbar').style.background='rgba(33, 125, 48, 0.72)';
        }else{
            document.getElementById('navbar').style.background='rgba(255, 255, 255, 0)';
        }
        if (Desplazamiento_Actual>900) {
            var scrollPos = $(document).scrollTop();
            $('#nav a').each(function () {
                var currLink = $(this);
                var refElement = $(currLink.attr("href"));
                scrollPos=scrollPos-200;
                if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                    $('#nav ul li').removeClass("current");
                    $(currLink).parents('li').addClass('current');
                }else{
                    $(currLink).parents('li').removeClass("current");
                }
            });
        }else{
            $('li').removeClass("current");
            $('#_inicio').addClass("current");
        }
    }