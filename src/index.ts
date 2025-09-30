let age: number = 5;
const firstName: string = 'Felipe';
const isValid: boolean = true;
let idk: any = 5;

const ids: number[] = [1, 2, 3, 4];

// Tupla
const person: [number, string] = [1, '334'];

// Tupla lista
const people: [number, string][] = [
    [1, '334'],
    [1, 'redwfd'],
    [2, 'cdsc']];

// Intersections
const productId: string | number = '';

 // Enum
 enum Directions {
    Up = 1,
    Down = 2
 };

 const direction = Directions.Up;

 // Type Assertions
 const productName: any = 'Boné';

 let itemId: string;
let itemId2 ;
let itemId3 = <string> productName;
 itemId = productName;
// alterar tipo de variavel
itemId2 = productName as string;


console.log(direction);