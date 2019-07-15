function carregarPagina( event, pagina ){

    event.preventDefault();

    $( "#conteudo" ).load( pagina );
}