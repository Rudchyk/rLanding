function sliderNav(settings, slide, winPos, count, navItem){
    slide.each(function(){
        var $el = $(this),
            $elIndex = $el.index(),
            $elPos = $el.offset().top,
            $elIndexNext = $elIndex;

        if ($elIndexNext > count - 1) {
            $elIndexNext = 0;
        };

        var $el2bl = slide.eq($elIndexNext),
            $el2Pos = $el2bl.offset().top,
            $elIndexVal = $elIndex - 1;

        if ($el2Pos == 0) {
            $el2Pos = $elPos * 2;
        };

        if (winPos >= $elPos && winPos < $el2Pos) {
            $('#'+settings.nav)
                .find(navItem).eq($elIndexVal)
                .addClass(settings.activeClass)
                .siblings().removeClass(settings.activeClass);
            settings.count = $elIndexVal;
        };
    });
};

$(function () {
    var settings = {
        container: '.container-wrap',
        slide: '.slide-wrapper',
        count: 0,
        key: true,
        nav: 'sidenav',
        navItem: 'linknav',
        bl: $('html'),
        activeClass: 'active',
        insertLinknav: '<i class="radio"></i>',
        keyPos: true,
        win: $(window),
        timer: null,
        anDuration: 600
    },
    $slide = $(settings.slide),
    $container = $(settings.container),
    $navItem = '.' + settings.navItem,
    slidesCount = $slide.length,
    blockPos = settings.bl.scrollTop(),
    navlist = $('<nav id="'+settings.nav+'"></nav>');

    $container.prepend(navlist);

    for (var i = 0, ilength = slidesCount; i < ilength; i++) {
        var $elBox = $slide.eq(i),
            $elBoxTitle = $elBox.data('tip'),
            $elBoxId = $elBox.attr('id'),
            $navContent = '<a class="'+settings.navItem+'" href="#'+$elBoxId+'" title="'+$elBoxTitle+'">'+settings.insertLinknav+'</a>';
        $('#'+settings.nav).append($navContent);
    };

    $('#'+settings.nav)
        .css('marginTop', -($('#'+settings.nav).height()/2))
        .fadeIn(1000);

    sliderNav(settings, $slide, blockPos, slidesCount, $navItem);

    settings.win.scroll(function(event) {
        event.preventDefault();
        var scroll = settings.win.scrollTop();
        sliderNav(settings, $slide, scroll, slidesCount, $navItem);
    });

    settings.bl.on('mousewheel', function(event, delta) {
        event.preventDefault();
        if (settings.key) {
            var $this = $(this);
            if (delta < 0) {
                ++settings.count;
            }
            else{
                --settings.count;
            }
            if (settings.count > slidesCount -1) {
                settings.count = slidesCount - 1;

            }
            else if (settings.count < 0){
                settings.count = 0;
            }
            var $eq = $slide.eq(settings.count).offset().top;
            settings.key = false;

            $this.animate( { scrollTop: $eq }, {
                    duration: settings.anDuration,
                    complete: function() {
                        settings.key = true;
                    }
                }
            );
        }
        else{
            return;
        }
    });

    $('#'+settings.nav).on('click', $navItem, function(event) {
        event.stopPropagation();
        var $this = $(this),
            $index = $this.index(),
            $el = $slide.eq($index),
            $indexCount = $index - 1;

        settings.count = $indexCount;
        settings.bl.animate({
            scrollTop: $el.offset().top
        }, settings.anDuration);

        return false;
    });
});