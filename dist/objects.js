"use strict";
// Type
Object.defineProperty(exports, "__esModule", { value: true });
const user = {
    firstName: 'vinicyus',
    age: 4,
    email: 'vinicyus@gmail',
    orders: [{
            productId: 'cdsc',
            price: 3
        }]
};
const user1 = {
    firstName: 'vinicyus',
    age: 4,
    email: 'vinicyus@gmail',
    password: 'dskmv',
    orders: [{
            productId: 'cdsc',
            price: 3
        }]
};
// o metado tbm tem que ser opcional ? para funcionar, pois é String | undefined
const logg = (message) => {
};
logg(user.password);
// retirar o ? Opcional da variavel podendo atribuir a metado sem ?
logg(user.password);
//# sourceMappingURL=objects.js.map