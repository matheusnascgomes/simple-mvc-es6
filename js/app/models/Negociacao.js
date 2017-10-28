class Negociacao {

  constructor(data, quantidade, valor) {
      this._data = new Date(data.getTime());  // criando uma nova instância a partir do tempo de uma data
      this._quantidade = quantidade;
      this._valor = valor;

      Object.freeze(this); // Esta função congela a manipulacao
  }
  get obtemVolume(){
    return this._quantidade * this._valor;
  }

  get data(){
    return new Date(this._data.getTime());
  }

  get quantidade() {
    return this._quantidade;
  }

  get valor() {
    return this._valor;
  }


}
//
// class Pessoa {
//   constructor(nome, sobrenome) {
//     this.nome = nome;
//     this.sobrenome = sobrenome;
//   }
//
//   obtemNomeCompleto(){
//     return this.nome +' '+ this.sobrenome;
//   }
// }
//
// class Conta {
//   constructor(titular,conta) {
//     this._titular = titular;
//     this._conta = conta;
//     this._saldo = 0.0;
//   }
//   deposita(valor){
//     console.log("R$ "+ valor + " depositado nesta conta.");
//     this._saldo+=valor;
//     console.log("Saldo atual: R$ "+this._saldo);
//   }
//
//   get titular() {
//     return this._titular;
//   }
//   get conta() {
//     return this._conta;
//   }
//   get saldo() {
//     return this._saldo;
//   }
// }
