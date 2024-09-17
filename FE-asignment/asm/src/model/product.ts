class Product {
    name: string;
    originalPrice: string;
    image: string;
    saleOffPrice?: string;
    category?: string;
    description?: string;
    shortDescription?: string;
    constructor(
        name: string,
        originalPrice: string,
        image: string,
        saleOffPrice?: string,
        category?: string,
        description?: string,
        shortDescription?: string
    ) {
        this.name = name;
        this.originalPrice = originalPrice;
        this.image = image;
        this.saleOffPrice = saleOffPrice;
        this.category = category;
        this.description = description;
        this.shortDescription = shortDescription;
    }
}

export default Product