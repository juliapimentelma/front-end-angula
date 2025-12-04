import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})

export class Products {

  listaProdutos = [
    {
      nome: 'case nuvem',
      imagem: '../../imagens/001.png',
      categoria: 'case'
    },
    {
      nome: 'case costela',
      imagem: '../../imagens/bg2.png',
      categoria: 'case'
    },
    {
      nome: 'case sailor moon',
      imagem: '../../imagens/003.png',
      categoria: 'case'
    }
  ];

}
