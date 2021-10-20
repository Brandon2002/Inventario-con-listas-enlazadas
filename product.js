export default class Product{
    constructor(codigo, nombre, cantidad, costo){
        this._codigo = codigo;
        this._nombre = nombre;
        this._cantidad = cantidad;
        this._costo = costo;
        this._next = null;
    }

    getCod(){
        return Number(this._codigo);
    }
    getName(){
        return this._nombre;
    }
    getCan(){
        return this._cantidad;
    }
    getCos(){
        return this._costo;
    }
    
    getTotal(){
        let tot = this._costo * this._cantidad;
        return Number(tot);
    }

    listarProd(){
        return `Código: ${this._codigo}, Nombre: ${this._nombre}, Cantidad: ${this._cantidad}, Costo: ${this._costo}, Siguiente:  `
        
    }


    
}