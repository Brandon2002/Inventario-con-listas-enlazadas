import Inventario from './inventario.js';
import Product from './product.js'

/*let p1 = new Product(1, 'Leche', 2, 30);
let p2 = new Product(2, 'lala', 2, 15);
let p3 = new Product(4, 'Salsa', 1, 20);



in1.añadir(p1);
in1.añadir(p2);
in1.añadir(p3);
in1.eliminar(p1);

console.log(in1.listar());*/
let in1 = new Inventario();


//Nueva parte

const btnAdd = document.getElementById('btnAdd');
btnAdd.addEventListener('click',()=>{
    let labId = document.getElementById('code');
    let labNombre = document.getElementById('name');
    let labCantidad = document.getElementById('quantity');
    let labCosto = document.getElementById('cost');

    let id = Number(labId.value);
    let nombre = labNombre.value;
    let costo = Number(labCosto.value);
    let cantidad = Number(labCantidad.value);

    if(id && nombre && cantidad && costo){
        labId.value = '';
        labNombre.value = '';
        labCantidad.value = '';
        labCosto.value = '';

        let producto = new Product(id, nombre, cantidad, costo);
        in1.añadir(producto);
        
    }

 
});

const btnB = document.getElementById('btnB');
btnB.addEventListener('click',()=>{
    let labId = document.getElementById('code');

    let id = Number(labId.value);

    if(id){
        labId.value = '';
    
        let producto = id;
        in1.buscar(producto);
        
    }});

const btnE = document.getElementById('btnE');
btnE.addEventListener('click',()=>{
    let labId = document.getElementById('code');
    
    let id = Number(labId.value);
    
    if(id){
        labId.value = '';
        
        let producto = id;
        in1.eliminar(producto);
            
    }});

const btnR = document.getElementById('btnR');
btnR.addEventListener('click',()=>{

    

});

// function limpiar(){
//     const array = document.getElementsByClassName('productosHtml');
//     while(array.length > 0){
//         array[0].parentNode.removeChild(array[0]);
//         }
//         return;
// }
    
