import { Injectable, signal } from '@angular/core';

export type Produto = {
  id: number;
  nome: string;
  preco: number;
};

export type Item = {
  id: number;
  produto: Produto;
  quantidade: number;
};

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  itens = signal<Item[]>([]);

  adicionarItem(produto: Produto) {
    this.itens.update(itens => [
      ...itens,
      {
        id: produto.id,
        produto: produto,
        quantidade: 1
      }
    ]);
  }

  aumentarQuantidade(id: number) {
    const item = this.itens().find(item => item.id === id);

    if (item) {
      item.quantidade++;
    }
  }

  diminuirQuantidade(id: number) {
    const item = this.itens().find(item => item.id === id);

    if (item && item.quantidade > 1) {
      item.quantidade--;
    }
  }

  removerItem(id: number) {
    this.itens.update(itens =>
      itens.filter(item => item.id !== id)
    );
  }

  obterTotal() {
    let total = 0;

    for (const item of this.itens()) {
      total += item.produto.preco * item.quantidade;
    }

    return total;
  }
}