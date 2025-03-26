class PackageDTO {
    constructor(packageData) {
        this.id = packageData.id;
        this.name = packageData.name;
        this.price = packageData.price;
        this.description = packageData.description;
    }
}

module.exports = PackageDTO;   