import { Component } from '@angular/core';
import { CarrinhoService, Produto } from './services/carrinho-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html'
})
export class App {

  produto: Produto = {
    id: 1,
    nome: 'Camiseta',
    preco: 50
  };

  constructor(public carrinho: CarrinhoService) {}

  adicionar() {
    this.carrinho.adicionarItem(this.produto);
  }

  aumentar() {
    this.carrinho.aumentarQuantidade(1);
  }

  diminuir() {
    this.carrinho.diminuirQuantidade(1);
  }

  remover() {
    this.carrinho.removerItem(1);
  }
}