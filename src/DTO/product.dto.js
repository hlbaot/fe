class ProductDto{
    constructor(productData){
        this.id = productData.id;
        this.img = productData.img;
        this.package_id = productData.package_id;
    }
};

module.exports = ProductDto;