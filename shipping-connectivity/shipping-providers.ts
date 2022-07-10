export class ShippingProviders {

    providers: ShippingProvider[] = [
        {
            name: "UPS",
            url: "https://ups.com"
        },
        {
            name: "USPS",
            url: "https://usps.com"
        },
        {
            name: "FedEx",
            url: "https://fedex.com"
        }
    ]

}

export class ShippingProvider {

    name: string
    url: string
    result?: any
    status?: string

}