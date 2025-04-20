const pizzas = [
  { id: 1, nombre: "pizza de Muzzarella", precio: 500, ingredientes: ["Muzzarella", "Tomate", "Aceitunas"] },
  { id: 2, nombre: "pizza de Cebolla", precio: 1500, ingredientes: ["Muzzarella", "Tomate", "Cebolla"] },
  { id: 3, nombre: "pizza Napolitana", precio: 1350, ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"] },
  { id: 4, nombre: "pizza 4 Quesos", precio: 1380, ingredientes: [ "Muzzarella", "Tomate", "Queso Azul", "Parmesano", "Roquefort" ] },
  { id: 5, nombre: "pizza Especial", precio: 1000, ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"] },
  { id: 6, nombre: "pizza con Anana", precio: 600, ingredientes: ["Muzzarella", "Tomate", "Anana"] },
];


function pizzasImpares () {
  for(let i = 0; i < pizzas.length; i++) {
    if (pizzas[i].id % 2 != 0) console.log("Pizza numero: ", pizzas[i].id, "es de: ", pizzas[i].nombre);
  }
};

pizzasImpares();

function checkPizzaPrecio () {
  for(let i = 0; i < pizzas.length; i++) {
    if (pizzas[i].precio < 600) console.log("La", pizzas[i].nombre, "cuesta menos de $600");
  }
};

checkPizzaPrecio();

function zapis () {
  for(let i = 0; i < pizzas.length; i++) {
    console.log("La", pizzas[i].nombre, "cuesta $", pizzas[i].precio);
  }
};

zapis();

function pizzasConIngredientes () {
  for(let i = 0; i < pizzas.length; i++) {
    console.log("La", pizzas[i].nombre, "contiene: ");
    let arrDeIngredientes = pizzas[i].ingredientes;
    for (let j = 0; j < arrDeIngredientes.length; j++) {
      console.log(" -", arrDeIngredientes[j]);
    }
  }
};

pizzasConIngredientes();