export class Sneakers {

    name: string
    price: number
    id: string

    constructor(name: string, price: number, id: string){
        this.name = name
        this.price = price
        this.id = id
    }
    
}


export class SneakersData {
    sneakersData: Sneakers[] = [
        {
            name: "Air Jordan 1",
            id: "001",
            price: 250
        },
        {
            name: "Air Jordan 1",
            id: "002",
            price: 230
        },
        {
            name: "Air Jordan 1",
            id: "003",
            price: 200
        },
        {
            name: "Nike",
            id: "004",
            price: 140
        },
        {
            name: "Nike",
            id: "005",
            price: 150
        },
        {
            name: "Adidas",
            id: "006",
            price: 250
        }

    ]


}