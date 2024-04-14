const container_contenido = document.getElementById('container_contenido');

//Crear variables para cada uno de los items del menu
const item_menu_inicio = document.getElementById('item_menu_inicio');
const item_menu_productos = document.getElementById('item_menu_nuevos-producto');
const item_menu_pedido = document.getElementById('item_menu_pedido');
const item_menu_arreglos = document.getElementById('item_menu_arreglos');
const item_menu_precios = document.getElementById('item_menu_precios');
const item_menu_informacion = document.getElementById('item_menu_informacion');


//Inicio de Código que se va a ejecutar cuando haga clic en el
//menu-item del cliente
item_menu_cliente.addEventListener('click', (event) => {
  event.preventDefault(); // Evita que el enlace cargue una nueva página

  fetch('inicio.html')
    .then(response => response.text())
    .then(html => {
        container_contenido.innerHTML = html;
    });
}); ////Fin de código del menu-item del cliente


//Inicio de Código que se va a ejecutar cuando haga clic en el
//menu-item del producto
item_menu_producto.addEventListener('click', (event) => {
    event.preventDefault(); // Evita que el enlace cargue una nueva página
  
    fetch('nuevos-productos.html')
      .then(response => response.text())
      .then(html => {
          container_contenido.innerHTML = html;
      });
  });  ////Fin de código del menu-item del producto
  //Inicio de Código que se va a ejecutar cuando haga clic en el
//menu-item del cliente
item_menu_cliente.addEventListener('click', (event) => {
    event.preventDefault(); // Evita que el enlace cargue una nueva página
  
    fetch('pedido.html')
      .then(response => response.text())
      .then(html => {
          container_contenido.innerHTML = html;
      });
  }); ////Fin de código del menu-item del cliente
  //Inicio de Código que se va a ejecutar cuando haga clic en el
//menu-item del cliente
item_menu_cliente.addEventListener('click', (event) => {
    event.preventDefault(); // Evita que el enlace cargue una nueva página
  
    fetch('arreglos.html')
      .then(response => response.text())
      .then(html => {
          container_contenido.innerHTML = html;
      });
  }); ////Fin de código del menu-item del cliente
  //Inicio de Código que se va a ejecutar cuando haga clic en el
//menu-item del cliente
item_menu_cliente.addEventListener('click', (event) => {
    event.preventDefault(); // Evita que el enlace cargue una nueva página
  
    fetch('precios.html')
      .then(response => response.text())
      .then(html => {
          container_contenido.innerHTML = html;
      });
  }); ////Fin de código del menu-item del cliente
  //Inicio de Código que se va a ejecutar cuando haga clic en el
//menu-item del cliente
item_menu_cliente.addEventListener('click', (event) => {
    event.preventDefault(); // Evita que el enlace cargue una nueva página
  
    fetch('inicio.html')
      .then(response => response.text())
      .then(html => {
          container_contenido.innerHTML = html;
      });
  }); ////Fin de código del menu-item del cliente