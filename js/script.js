// display_none
$('#home').on('click',function(){
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
$('#contactus').on('click',function(){
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
$('#footer').on('click',function(){
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
