$(function(){
    $('#birthday').pickadate({ format: 'd mmmm' });
    $('.form-check-input').each(function () {
        $(this).prop('checked', false);
    });
    $('.form-check-input').on('change', function () {
        // make the image visible
        $('#' + this.id + 'Img').css('visibility', 'visible')
        // animate balloon in/out based on checkbox
        $(this).is(':checked') ?
            $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown'):
            $('#' + this.id + 'Img').addClass('animate__animated animate__bounceOutUp');
    });
    var arr = ['bounce','pulse','flash','swing','tada','jello','wobble'];
    var randomarr = arr[Math.floor(Math.random()*arr.length)];
    $('#happybday').removeClass().addClass('animate__animated animate__' + randomarr);
    $('#submit').on('click', function() {
        var isChecked = false;
        $('.form-check-input').each(function () {
            if ($(this).prop('checked')){
                isChecked = true;
            }
        });
        if (!isChecked) {
            $('#liveToast').toast({ autohide: false }).toast('show');
        }
    });
    $('#checkall').click(function(){
        $('input[type=checkbox]').prop("checked",$('#checkall').is(':checked'));
        $('.form-check-input').each(function () {
            if($(this).is(':checked')) {
                $('#' + this.id + 'Img').css('visibility', 'visible');
                $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown');
            }
            else {
                $('#' + this.id + 'Img').css('visibility', 'visible');
                $('#' + this.id + 'Img').addClass('animate__animated animate__bounceOutUp');
            }
        });
    });
    $('.form-check-label').hover(
        function () {
            var colorname = $(this).attr("for");
            $('h1').css({"color": colorname});
        },
        function(){
            $('h1').css({"color": "black"});
        }
    );

});