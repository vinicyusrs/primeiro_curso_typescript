// declara returno não explicito
const sum = (x: number, y: number) => {
  return x + y;
};

// declara returno explicito
const sum1 = (x: number, y: number): number => {
  return x + y;
};

// declara returno explicito
const sum2 = (x: number, y: number): string => {
  // conversão de Tipagem
  return (x + y).toString();
};

// declara returno explicito // Intersections
const sum3 = (x: number, y: number): string | number => {
  // conversão de Tipagem
  return (x + y).toString();
};

// declara returno void
const log = (message: string) => {
  // conversão de Tipagem
  console.log(message);
};

// declara returno void
const log2 = (message: string): void => {
  // conversão de Tipagem
  console.log(message);
};

const value = sum(2, 3);

// objects em funções, interface com funções
interface MathFunc1 {
  // toda função que chamar a interface tem que enviar dois parametros e receber um
  (x: number, y: number): number;
}

const sum4: MathFunc1 = (x: number, y: number): number => {
  // conversão de Tipagem
  return x + y;
};

const sub: MathFunc1 = (x: number, y: number) => {
  return x - y;
};
