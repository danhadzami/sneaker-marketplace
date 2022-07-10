import { Sneakers, SneakersData } from "./sneakers"


//this function will show the sellers whether their sneakers are the lowest price or not
function aggregatePrice(sneakers: Sneakers){
    return new Promise((resolve, reject) => {
        let sneakersData = new SneakersData().sneakersData
        // This line is run in 1 method to reduce run time
        let result = sneakersData.filter((data, index) => data.name == sneakers.name && data.price < sneakers.price)
        resolve(result)
    })
}

//this function is called when sellers submit their sneakers to sell

function addSneakers(sneakers: Sneakers){
    aggregatePrice(sneakers).then((sneakersData:any) => {
        if (sneakersData.length == 0) {
            // the price is the lowest
            let result = {
                text: "Hey, you have the lowest price!",
                sneakers: sneakers
            }
            return result
        } else {
            //the price is not the lowest
            let result = {
                text: "You don't have the lowest price. Beat this price below and you'll be on the top of the list",
                sneakers: sneakersData[0]
            }
            return result
        }
    })
}