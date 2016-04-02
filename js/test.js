jQuery(document).ready(function() {
    jQuery('.tab').hide();
    jQuery('.active').show();
    jQuery('.tab-container .nav a').on('click', function(e)  {
        var currentAttrValue = jQuery(this).attr('href');
        jQuery('.tab-container ' + currentAttrValue).show().siblings().hide();
        jQuery(this).parent('li').addClass('active').siblings().removeClass('active');
        e.preventDefault();
    });
});