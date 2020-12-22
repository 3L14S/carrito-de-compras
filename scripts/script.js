let productos = [
  {
    nombre: "Harina",
    precio: 35
  },
  {
    nombre:"Pan",
    precio: 25
  },
  {
    nombre:"Papa",
    precio: 52
  },
  {
    nombre: "Palta",
    precio: 55
  },
  {
    nombre: "Fideos",
    precio: 85
  },
  {
    nombre:"Aceite",
    precio: 350
  },
  {
    nombre:"Sopa",
    precio: 86
  },
  {
    nombre:"Mermelada",
    precio: 108
  },
  {
    nombre:"Porotos",
    precio: 69
  },
  {
    nombre:"Lentejas",
    precio: 85
  },
  {
    nombre:"Mandarina",
    precio: 43
  },
  {
    nombre:"Banana",
    precio: 79
  },
  {
    nombre:"Leche de Almendras",
    precio: 145
  },
  {
    nombre:"Papel Higienico",
    precio: 147
  },
  {
    nombre:"Lavandina",
    precio: 55
  },
  {
    nombre:"Alcohol en gel",
    precio: 123
  },
  {
    nombre:"Shampoo",
    precio: 400
  },
  {
    nombre: "Arroz",
    precio:66 
  },
  {
    nombre:"Harina Leudante",
    precio: 35
  },
  {
    nombre:"Salsa de Tomate",
    precio: 35
  }
];

let carrito =[];
let sectionProducto =document.createElement("section");
sectionProducto.id="sectionProducto";
document.body.appendChild(sectionProducto);

for (let i = 0; i < productos.length; i++) {  
  let crearDiv = document.createElement("div");
  crearDiv.id=i;
  crearDiv.className= "divItems";
  
  let nombreDelProducto = document.createElement("h3");  
  nombreDelProducto.innerText= `${productos[i].nombre}`;
  
  let precioDelProducto = document.createElement("p");
  precioDelProducto.innerText= `$${productos[i].precio}`;
  
  
  let boton = document.createElement("button");  
  boton.innerText="Añadir al carrito";  
  boton.id=i;
  boton.className="btn";

  crearDiv.appendChild(nombreDelProducto);
  crearDiv.appendChild(precioDelProducto);
  crearDiv.appendChild(boton);
  sectionProducto.appendChild(crearDiv);  
};

let crearSectionCarrito = document.createElement("section");
crearSectionCarrito.id =("sectionCarrito");
document.body.appendChild(crearSectionCarrito);

let botonComprar= document.createElement("button");
botonComprar.id=("botonComprar");
botonComprar.innerText=("Comprar");
crearSectionCarrito.prepend(botonComprar);

let botonesDiv = document.getElementsByClassName("divItems");  

let crearDivCarrito =document.createElement("div");
crearDivCarrito.className="classDivCarrito";
crearSectionCarrito.append(crearDivCarrito);


let textoTotal = document.createElement("h3");
textoTotal.innerText="";
textoTotal.id= "tTotalId";
crearSectionCarrito.prepend(textoTotal);

// añade items al carrito si se apreta el boton, no permite añadir dos veces el mismo item
sectionProducto.addEventListener("click", (event) => {  
  textoTotal.innerText="";
  if (event.target.tagName === "BUTTON"){
    botonesDiv[event.target.id].style.background = "DarkGray";    
    if  (carrito.includes(productos[event.target.id]) == false) {
      carrito.push(productos[event.target.id]);  
      alert(`${productos[event.target.id].nombre} ha sido añadido al carrito! `);
      let agregarCarrito = document.createElement("p");
      agregarCarrito.className ="p-class"
      agregarCarrito.innerText=`${productos[event.target.id].nombre} $${productos[event.target.id].precio}`;
      crearDivCarrito.append(agregarCarrito);
    }else{
      alert("Usted no puede añadir dos veces el mismo producto");
    }
  };
});

// calcula el total a pagar, haciendo click en comprar, avisa si no se añadio nada.
botonComprar.addEventListener("click", () => {
  let total=0;
  let totalProductos = "";
  for (let i = 0; i < carrito.length; i++) {
    total += carrito[i].precio;
    totalProductos +=`, ${carrito[i].nombre}`;
  }
  if (carrito.length == 0) {
    textoTotal.innerText= "Usted no ha seleccionado nada para comprar.";
  }else{
    textoTotal.innerText =`El total a pagar es ${total} y usted ha comprado${totalProductos}.`;
  };
  alert("Gracias por comprar");
  carrito=[];
  for (let i = 0; i < botonesDiv.length; i++) {
    botonesDiv[i].style.background = "floralwhite";
  }
  
  while ((crearDivCarrito.firstChild)) {
    crearDivCarrito.removeChild(crearDivCarrito.firstChild);
  };
});