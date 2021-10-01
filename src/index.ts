import { Sorter } from "./sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersColelction } from "./CharactersCollection";

const numberCollection = new NumbersCollection([-10, 3, -5, 0]);
numberCollection.sort();
console.log(numberCollection.data)

const charactiersCollection = new CharactersColelction('cba');
charactiersCollection.sort();
console.log(charactiersCollection.data);