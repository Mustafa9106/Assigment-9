const softwareCompany = {
    name : 'Systems limited',
    founder: 'Aezaz Hussain',
    yearFounded: 1977,
    products: ['Mortgage', 'Apparel', 'BPO services']
}
console.log(`Name of the company is ${softwareCompany.name}`);
console.log(`Name of the founder is ${softwareCompany.founder}`);
console.log(`Company was founded in ${softwareCompany.yearFounded}`);
console.log(`Products offer by company are ${softwareCompany.products}`);


const Car = {
    brand: 'Mazda',
    model: 'RX8',
    year: 2012,
    drive: function() {
        console.log(`The ${this.year} ${this.brand} ${this.model} is being driven.`);
    }
};
Car.drive();