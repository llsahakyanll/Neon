console.log("Hello");
$('#contactus').on('click',function(){
    $('.section_home').removeClass('section_home_active');
    $('.section_contact').addClass('section_contact_active');
    // $('.hsin_posa').toggleClass('hsin_posa_active')
})
$('#home').on('click',function(){
    $('.section_home').addClass('section_home_active');
    $('.section_contact').removeClass('section_contact_active');
    // $('.hsin_posa').toggleClass('hsin_posa_active')
})