interface IPerson {
  id: number;
  sayMyName(): string;
}

class Person implements IPerson {
  readonly id: number;
  protected name: string; // só é acessado na classe ou subclasse igual java
  private age: number; // só na classe igual java

  constructor(id: number, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  sayMyName(): string {
    return this.name;
  }
}

class Employee extends Person {
  constructor(id: number, name: string, age: number) {
    super(id, name, age);
  }

  whoAmI() {
    return this.name;
  }
}

const person = new Person(1, "vinicyus", 1);
