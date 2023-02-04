$('#openMenu').click(() => {
    $('#menu').toggleClass('hidden');
    $('#menu').toggleClass(`bg-[url('assets/img/bg4.png')]`);
    if($('#openMenu').find('img').attr('src') == 'assets/img/menu.svg') {
        $('#openMenu').find('img').attr('src', 'assets/img/menuB.svg');
    } else {
        $('#openMenu').find('img').attr('src', 'assets/img/menu.svg');
    }
    $('.text').toggleClass('text-[#3C3D41]');
    $('.text').toggleClass('font-semibold');
});

$('input[name="tour"]').click((e) => {
    if($(e.target).data('filter') == "solo") {
        $('.filter').each((i, el) => {
            if($(el).data('path') == "solo") {
                $(el).removeClass('hidden');
            } else {
                $(el).addClass('hidden');
            }
        });
    } else {
        $('.filter').each((i, el) => {
            if($(el).data('path') == "group") {
                $(el).removeClass('hidden');
            } else {
                $(el).addClass('hidden');
            }
        });
    }
});