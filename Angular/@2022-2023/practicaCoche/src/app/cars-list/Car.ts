export class Car {
  maker:string = ""
  model:string = ""
  price:number = 0
  stock:number = 0
  image:string = ""

  constructor(maker:string, model:string, price:number, stock:number, image:string) {
    this.maker = maker
    this.model = model
    this.price = price
    this.stock = stock
    this.image = image
  }
}
