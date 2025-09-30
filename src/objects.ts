// Type, Interface, não são classes, são objetos em type script

type Orders = {
  productId: string;
  price: number;
};
type User = {
  firstName: string;
  age: number;
  email: string;
  password?: string; // o ? deixa a variavel opcional no objeto
  orders: Orders[];
};

const user: User = {
  firstName: "vinicyus",
  age: 4,
  email: "vinicyus@gmail",
  orders: [
    {
      productId: "cdsc",
      price: 3,
    },
  ],
};

const user1: User = {
  firstName: "vinicyus",
  age: 4,
  email: "vinicyus@gmail",
  password: "dskmv",
  orders: [
    {
      productId: "cdsc",
      price: 3,
    },
  ],
};

// o metado tbm tem que ser opcional ? para funcionar, pois é String | undefined
const logg = (message?: string) => {};

logg(user.password);

// retirar o ? Opcional da variavel podendo atribuir a metado sem ?
logg(user.password!);

// Unions
type Author = {
  book: string[];
};

const author: Author & User = {
  age: 2,
  book: ["1"],
  email: "author@gmail.com",
  firstName: "Vinicyus",
  orders: [],
};

// interfaces são parecidas com tyep com funçõpes diferentes
interface UserInterface {
  readonly firstName: string; // com readonly não é possivel alterar após criar o Objeto
  email: string;
}

const emailUser: UserInterface = {
  firstName: "Felipe", // após criar o objeto com readonly não vai alterar o valor mais
  email: "vinicyus@gmail.com",
};

interface AuthorInterface {
  books: string[];
}

const newAuthor: UserInterface & AuthorInterface = {
  email: "author@gmailcom",
  firstName: "Vinicyus",
  books: ["vknkd"],
};

// coisas diferentes do type e interface, interface não é possivel inserie intersetions ou '|'
// const grade: number | string = 1

// se colocar interface ao inves de type vai da erro
type Grand = number | string;
const grade: Grand = 1;

// Objeto com função tanto type quanto interface
type User2 = {
  firstName: string;
  age: number;
  email: string;
  password?: string; // o ? deixa a variavel opcional no objeto
  orders: Orders[];
  register(): string; // é possivel teixar opcional tambem  register?(): string;
};
const user2: User2 = {
  firstName: "vinicyus",
  age: 4,
  email: "vinicyus@gmail",
  orders: [
    {
      productId: "cdsc",
      price: 3,
    },
  ],
  register() {
    return "retornando aqui";
  },
};
