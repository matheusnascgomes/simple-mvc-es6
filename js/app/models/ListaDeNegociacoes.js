class ListaDeNegociacoes {
  constructor() {
    this._negociacao = [];
  }
  adiciona(negociacao){
    this._negociacao.push(negociacao);
  }
  get negociacoes() {

    return [].concat(this._negociacao);
  }
}
