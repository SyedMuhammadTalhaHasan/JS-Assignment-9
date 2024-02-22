const softwareCompany = {
    name : 'TechGenius',
    founder: 'David Anderson',
    yearFounded: 2010,
    products: ['Operating Systems', 'Development Tools', 'Cloud Services']
}
console.log(`Name of the company is ${softwareCompany.name}`);
console.log(`Name of the founder of company is ${softwareCompany.founder}`);
console.log(`Company was founded in ${softwareCompany.yearFounded}`);
console.log(`Products of the company are ${softwareCompany.products}`);


const car = {
    brand: 'Bugatti',
    model: 'Chiron',
    year: 2022,
    drive: function() {
        console.log(`The ${this.year} ${this.brand} ${this.model} is being driven.`);
    }
};
car.drive();