$(document).ready(function () {
   
    $('.image-gallery img').click(function () {
        let gatesImage = $(this).data('gates');
        $(this).attr('src', gatesImage);
    });
});