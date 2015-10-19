$(document).ready(function($) {
    $(".sign-in").on("click", function(e) {
        e.preventDefault();
        // $(".login-overlay").css("display","none");
        $(".login-overlay").addClass("overlay-hugeinc");
    });

    $(".toggle div[id]").click(function() {
        var toggleid = this.id;
        var num = toggleid.replace( /^\D+/g, '');
        $('#slider-button-'+num).html($('#slider-button-'+num).text() == 'ON' ? 'OFF' : 'ON');
        $( this ).toggleClass( "on", 50, "linear");
    });
    $('#switch-setup-1').click(function(){
        $('.simple-setup').slideToggle();
        $('.advanced-setup').slideToggle();
    });

    $("#show-notif").click(function() {
        $(".alert").show("fast");
    });
    $("#hide-notif").click(function() {
        $(".alert").hide("fast");
    });
    //$().alert()
});
