class NegociacaoController {
  constructor() {
      let $ = document.querySelector.bind(document);
      this._inputData = $('#data');
      this._inputQuantidade = $('#quantidade');
      this._inputValor = $('#valor');
      this._listaDeNegociacoes = new ListaDeNegociacoes();

      this._tabelaDeNegociacoes = new NegociacoesView($('#tabela-negociacoes'));
      this._tabelaDeNegociacoes.update(this._listaDeNegociacoes);

      this._mensagem = new Mensagem();
      this._mensagemView = new MensagemView($('#mensagem-view'));
      this._mensagemView.update(this._mensagem);

  }
  adiciona(event){

    event.preventDefault(event);
    this._listaDeNegociacoes.adiciona(this._criaNegociacao());
    this._tabelaDeNegociacoes.update(this._listaDeNegociacoes);

    this._mensagem.texto = "<strong>Informações cadastradas com sucesso!</strong>"
    this._mensagemView.update(this._mensagem);
    this._limpaForm();
  }

  _criaNegociacao(){
    return new Negociacao(
      DateHelper.textoParaData(this._inputData.value),
      this._inputValor.value,
      this._inputQuantidade.value
    );
  }

  _limpaForm(){
    this._inputData.value = "";
    this._inputQuantidade.value = 1;
    this._inputValor.value = 0.0;

    this._inputData.focus();
  }
}
