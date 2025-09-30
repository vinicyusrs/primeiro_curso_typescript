// generics
const returnValue = <T>(value: T) => value;
const returnValue2 = <T>(value: T): T => value; // retorno explicito

const returnValue3 = <T, X, Z>(value: T): T => value; // retorno explicito

const message = returnValue<string>("Hello World");
const message2 = returnValue3<string, boolean, number>("Hello World");

const count = returnValue<number>(5);

// function
function getFirstValueFromArray<Type>(array: Type[]) {
  return array[0];
}

// const firstValueFromStringArray = getFirstValueFromArray<string[]>(["1", "dedc"]); passa o Array ao chamar é possivel
// const firstValueFromNumberArray = getFirstValueFromArray<number[]>([1, 2]);
const firstValueFromStringArray = getFirstValueFromArray<string>(["1", "dedc"]);
const firstValueFromNumberArray = getFirstValueFromArray([1, 2]);

// Promises, promessa que retorna tem operação .then() é o que você faz quando a promessa se cumpre. .catch() é o que você faz quando a promessa falha. e pending é retornando quando a promessa não acabou
const returnPromise = async () => {
  return 5;
};

const returnPromise2 = async (): Promise<string> => {
  return "dffdff";
};

// Class com generics
class GenericNumber<T> {
  zeroValue: T;
  sum: (x: T, y: T) => T;
  constructor(zeroValue: T, sum: (x: T, y: T) => T) {
    this.zeroValue = zeroValue;
    this.sum = sum;
  }
}

const myGenericNumber = new GenericNumber<number>(0, (x: number, y: number) => {
  return x + y;
});
