// Declaracion de clases

class Vehicle{
    constructor(brandIn, modelIn, colorIn, priceIn){
        this.brand = brandIn;
        this.model = modelIn;
        this.color = colorIn;
        this.price = priceIn;
    }

    getColor(){
        return this.color;
    }

    setColor(color){
        this.color = color;
    }

    getPriceWithTaxes(tax){
        return this.price + this.price*tax;
    }
}

let vehicle1 = new Vehicle('Reanault', 'Megane', 'Gris', 16000);
console.log(vehicle1.getPriceWithTaxes(2));