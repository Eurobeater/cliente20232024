import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private articulos:Array<any> = []     //la lista de del carrito donde se guardan los articulos

  constructor() { }

  getCarrito() {
    return this.articulos
  }

  addCarrito(articulo:any) {      //oblitarrio pasar el array 'articulos' como parametro para que pueda identificarlo en la funcion
    articulo.unidades = 1      //para que a la hora de multiplicar los productos sea por defecto uno. al darle al boton de añadir otro producto igual se aumentara por uno el valor y se multiplicara de nuevo por ese nuevo valor
    this.articulos.push(articulo)     //hace que el articulo sea añadido a la lista del carrito (articulos) cuando esta funcion es llamada
    console.log(this.articulos)
  }

  isInCarrito(articulo:any) {         //recibe un articulo como parametro de tipo any
    return this.articulos.includes(articulo)        //devuelve true o false si el articulo esta en la lista con el metodo includes()
  }

  addUnidades(articulo:any, newUnidades:number = 1) {     //recibe como parametro un articulo de tipo any. recibe como parametro la variable newUnidades y su valor es 1 para que ya no se tome en cuenta 'articulo.unidades' del metodo addCarrito. esto se usa para que al presionar el boton de incrementar unidades, se cambie el numero de unidades para asi multiplicar su nuevo valor
    let art = this.articulos.find( a => a.id == articulo.id)      //crea una variable llamada 'art', que es igual a al primer elemento de 'articulos'.  si articulo.id coincide con algún id de los elementos en el array articulos, la variable art se asigna al primer elemento en el array que cumple esa condición. Si no hay ningún elemento en el array articulos que cumpla esa condición, entonces art será undefined.
    if (art) {                                                    //si encuentra el objeto 'articulo' incrementa el valor 'unidades' en 1 (suma 1)
      art.unidades += newUnidades           //art.uniddes = art.unidades + newUnidades
      console.log(this.articulos)            
    }
  }

  decUnidades(articulo:any, unidades:number = 1) {      //recibe como parametro un articulo de tipo any. recibe como parametro la variable unidades y su valor es 1 para que ya no se tome en cuenta 'articulo.unidades' del metodo addCarrito. esto se usa para que al presionar el boton de decrementar unidades, se cambie el numero de unidades para asi multiplicar su nuevo valor
    let art = this.articulos.find(a => a.id == articulo.id)       //crea una variable llamada 'art', que es igual a al primer elemento de 'articulos'.  si articulo.id coincide con algún id de los elementos en el array articulos, la variable art se asigna al primer elemento en el array que cumple esa condición. Si no hay ningún elemento en el array articulos que cumpla esa condición, entonces art será undefined.
    if (art.unidades >= unidades) {                       //si el numero de unidades del articulo en el carrito es mayor o igual a la cantidad de unidades que se quieren disminuir, resta la cantidad de unidades al articulo. si no, se establece la cantidad de unidades en 0
      art.unidades -= unidades              //art.uniddes = art.unidades - unidades
    } else 
      art.unidades = 0
  }

  public delUnidades(articulo:string) {                 //aqui articulo es de tipo string es porque esta funcion solo necesita el id del articulo para eliminarlo del carrito. no es necesario acceder a todas las propiedades del articulo y/o porque id es de tipo string.
    let posicion = this.articulos.findIndex((a) => a.id == articulo)
    this.articulos.splice(posicion, 1)          //el 1 es para eliminar un elemento
  }
          //la funcion es public porque es la unica que se llama desde fuera dela clase CarritoService. se espera que se llame desde otro componente o servicio que tenga acceso al servicio CarritoService
}
