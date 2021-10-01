"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sorter_1 = require("./sorter");
var CharactersCollection_1 = require("./CharactersCollection");
// const numberCollection = new NumbersCollection([-10, 3, -5, 0]);
// const sorter = new Sorter(numberCollection);
// sorter.sort();
// console.log(numberCollection.data)
var charactiersCollection = new CharactersCollection_1.CharactersColelction('cba');
var sorter = new sorter_1.Sorter(charactiersCollection);
sorter.sort();
console.log(charactiersCollection.data);
