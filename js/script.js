$('.home').on('click',function(){
    $('.section_home').removeClass('section_home_display_none');
    setTimeout(
        function() 
        {
            $('.section_home').addClass('section_home_active');
            $('.section_contact').removeClass('section_contact_active');
            $('.section_contact').addClass('section_contact_display_none');
            $('.section_footer').removeClass('section_footer_active');
        }, 25);
})
$('.contactus').on('click',function(){
    $('.section_contact').removeClass('section_contact_display_none')
    setTimeout(
        function() 
        {
            $('.section_contact').addClass('section_contact_active');
            $('.section_footer').addClass('section_footer_display_none')
            $('.section_footer').removeClass('section_footer_active')
            $('.section_home').removeClass('section_home_active');
            $('.section_home').addClass('section_home_display_none');
        }, 25);
})
$('.footer').on('click',function(){
    $('.section_footer').removeClass('section_footer_display_none');
    setTimeout(
        function() 
        {
            $('.section_footer').addClass('section_footer_active');
            $('.section_home').removeClass('section_home_active');
            $('.section_home').addClass('section_home_display_none');
            $('.section_contact').removeClass('section_contact_active');
            $('.section_contact').addClass('section_contact_display_none');
        }, 25);
})
const icons = document.querySelectorAll('.icon');
icons.forEach (icon => {  
  icon.addEventListener('click', (event) => {
    icon.classList.toggle("open");
  });
});

$('.nav-icon-5').on('click',function(){
    if (!($('.menu').hasClass('showMenu'))) {
        $('.menu').addClass('showMenu');
        $('.section_main').removeClass('section_main_active');
        $('.section_main').addClass('section_main_display_none');
    } else {
        $('.menu').removeClass('showMenu');
        $('.section_main').removeClass('section_main_display_none');
        setTimeout(
            function() 
            {
                $('.section_main').addClass('section_main_active');
            }, 25);
    }
})