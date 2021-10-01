import { Sorter } from "./sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersColelction } from "./CharactersCollection";

// const numberCollection = new NumbersCollection([-10, 3, -5, 0]);
// const sorter = new Sorter(numberCollection);
// sorter.sort();
// console.log(numberCollection.data)

const charactiersCollection = new CharactersColelction('cba');
const sorter = new Sorter(charactiersCollection);
sorter.sort();
console.log(charactiersCollection.data);