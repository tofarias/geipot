function selecionarTipoPessoa(el)
{
    var $form = $('form#frm-cadastro');
    var $this = $(el);

    if( $this.val() == 1 ){
        $form.find('.tipo-pessoa-juridica').hide();
        $form.find('.tipo-pessoa-fisica').show();
    }else{
        $form.find('.tipo-pessoa-juridica').show();
        $form.find('.tipo-pessoa-fisica').hide();
    }
}