import { NoAccessMissingMemberRule } from 'codelyzer';
import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

const faker = require('faker/locale/es_MX');

@Component({
  selector: 'app-precios',
  templateUrl: './precios.component.html',
  styles: []
})
export class PreciosComponent implements OnInit {

  item = {
    nombre: String,
    precio: Number,
  };


  // items = [{ nombre: '' }, { nombre: '' }, { nombre: '' }, { nombre: '' }, { nombre: '' }, { nombre: '' }];

  precios = new Array(100, 200, 300, 400, 450, 7654, 55555, 7889);

  productos = [
    {
      precio: faker.commerce.price(),
      nombre: faker.commerce.productName(),
      desc: faker.lorem.sentences(3, 3)
    },
    {
      precio: faker.commerce.price(),
      nombre: faker.commerce.productName(),
      desc: faker.lorem.sentences(3, 3)
    }, {
      precio: faker.commerce.price(),
      nombre: faker.commerce.productName(),
      desc: faker.lorem.sentences(3, 3)
    }, {
      precio: faker.commerce.price(),
      nombre: faker.commerce.productName(),
      desc: faker.lorem.sentences(3, 3)
    }, {
      precio: faker.commerce.price(),
      nombre: faker.commerce.productName(),
      desc: faker.lorem.sentences(3, 3)
    }, {
      precio: faker.commerce.price(),
      nombre: faker.commerce.productName(),
      desc: faker.lorem.sentences(3, 3)
    }, {
      precio: faker.commerce.price(),
      nombre: faker.commerce.productName(),
      desc: faker.lorem.sentences(3, 3)
    }, {
      precio: faker.commerce.price(),
      nombre: faker.commerce.productName(),
      desc: faker.lorem.sentences(3, 3)
    }, {
      precio: faker.commerce.price(),
      nombre: faker.commerce.productName(),
      desc: faker.lorem.sentences(3, 3)
    }, {
      precio: faker.commerce.price(),
      nombre: faker.commerce.productName(),
      desc: faker.lorem.sentences(3, 3)
    }, {
      precio: faker.commerce.price(),
      nombre: faker.commerce.productName(),
      desc: faker.lorem.sentences(3, 3)
    },
  ];

  constructor(  ) {
   }

  ngOnInit() {
  }

  makeid(): String {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 30; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    }

    return text;
  }


  getRandomInt() {
    const vmin = 1000;
    const vmax = 50000;
    return Math.floor(Math.random() * (vmax - vmin + 1)) + vmin;
  }


}
