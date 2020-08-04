const separador = "========================================="
const jsonVehiculos = [
    {
        "tipo": "auto" ,
        "marca": "Peugeot",
        "modelo": "206",
        "puertas": 4,
        "precio": "200000.00"
    },
    {
        "tipo": "moto",
        "marca": "Honda",
        "modelo": "Titan",
        "cilindrada": "125 cc" ,
        "precio": "60000.00"
    },
    {
        "tipo": "auto",
        "marca": "Peugeot",
        "modelo": "208",
        "puertas": 5,
        "precio": "250000.00"
    },
    {
        "tipo": "moto",
        "marca": "Yamaha",
        "modelo": "YBR",
        "cilindrada": "160 cc" ,
        "precio": "80500.50"
    }
]
class Vehiculo{
    constructor(marca, modelo, precio){
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
    }
    vehiculoToString(){
        return ""
    }
}
class Auto extends Vehiculo{
    constructor (marca, modelo, puertas, precio){
        super(marca, modelo, precio);
        this.puertas = puertas;       
    }
    vehiculoToString(){
        const retorno = `Marca: ${this.marca} // Modelo: ${this.modelo} // Puertas: ${this.puertas} // Precio: $${this.precio}`
        return retorno
    } 
  }

class Moto extends Vehiculo{
    constructor (marca, modelo, cilindrada, precio){
        super(marca, modelo, precio);
        this.cilindrada = cilindrada;       
    }
    vehiculoToString(){
        const retorno = `Marca: ${this.marca} // Modelo: ${this.modelo} // cilindrada: ${this.cilindrada} // Precio: $${this.precio}`
        return retorno
    } 
}
    let arrayVehiculos = []
jsonVehiculos.forEach(item => {
    let vehiculos = ""
    if(item.puertas){
        vehiculos = new Auto(item.marca, item.modelo, item.puertas, item.precio)
    }else{
        vehiculos = new Moto(item.marca, item.modelo, item.cilindrada, item.precio)
    }
    arrayVehiculos.push(vehiculos)
})
arrayVehiculos.forEach(item =>{
    console.log(item.vehiculoToString())
})
const ordenados = arrayVehiculos.sort((a,b)=>{return b.precio-a.precio});
const n = ordenados.length - 1 

console.log(separador)
console.log(`Vehiculo más caro: ${ordenados[0].marca} ${ordenados[0].modelo}`)
console.log(`Vehiculo más barato: ${ordenados[n].marca} ${ordenados[n].modelo}`)

arrayVehiculos.forEach(item => {
    if(item.modelo.includes('Y')){
        console.log(`Vehiculo que contiene en el modelo la letra 'Y': ${item.modelo}`)
    }
})

console.log(separador)
console.log("Vehiculos ordenados por precio de mayor a menor:")

ordenados.forEach(item=>{
    console.log(`${item.marca} ${item.modelo}`)
})
