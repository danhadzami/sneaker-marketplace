import fetch from 'node-fetch'; //just pretend we installed node-fetch
import { ShippingProviders } from './shipping-providers';

async function fetchShippingRate(provider, sellerAddress){
    try {
        const response = await fetch(provider, {
            method: 'POST',
            body: {
                from: sellerAddress,
                to: 'Kicktronics'
            },
            headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'} });
        const data = await response.json();
        provider.status = "Success"
        provider.result = data
        return provider
    } catch {
        return provider.status = "Error"
    }    
}


//sneakers get sold and system automatically get sellers address and compare rates on different shipping providers
async function compareRates(sellerAddress){
    let providers = new ShippingProviders().providers
    var results: ShippingProviders[] = await Promise.all(providers.map(async (provider): Promise<ShippingProviders> => {
        let item = await fetchShippingRate(provider, sellerAddress);
        return item;
    }));
    return results
}