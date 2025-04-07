class PackageDTO {
  constructor(pkg) {
    this.id = pkg.id;
    this.name = pkg.name;
    this.price = pkg.price;
    this.description = pkg.description;

    //Get sp cua package
    if (pkg.Products || pkg.products) {
      this.products = (pkg.Products || pkg.products).map((p) => ({
        img: p.img,
      }));
    }
  }
}
module.exports = PackageDTO;