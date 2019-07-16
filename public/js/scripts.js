function carregarPagina( event, pagina ){

    event.preventDefault();

    $( "#conteudo" ).load( pagina );
}

function init(){
    $( "header#header" ).load( 'header.html' );
    $( "footer#footer" ).load( 'footer.html' );
    $( "#banner" ).load( 'banner.html' );
    $( "#aside-menu-left" ).load( 'aside-menu-left.html' );
}



$(document).ready(function()
{
    var images = new Array ('images/banner03.jpg','images/banner02.jpg', 'images/banner01.jpg');
    var index = 1;

    function rotateImage()
    {
        $('#myImage').fadeOut('slow', function()
        {
            $(this).attr('src', images[index]);

            $(this).fadeIn('fast', function()
            {
            if (index == images.length-1)
            {
                index = 0;
            }
            else
            {
                index++;
            }
            });
        });
    }

    setInterval (rotateImage, 3000);
});