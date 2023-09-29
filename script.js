const city1 = {
name: "Brovary",
population:"108 349",
country: "Ukraine",
toString: function () {
    return `City1: ${this.name}, Population: ${this.population}, Country: ${this.country}`;
},
CompareToObject: function (city2) {
    return JSON.stringify(this) === JSON.stringify(city2);
}
}
console.log(city1.toString())

const city2 = {
name: "Brovary",
population:"108 349",
country: "Ukraine",
toString: function () {
    return `City2: ${this.name}, Population: ${this.population}, Country: ${this.country}`;
}
}
console.log(city2.toString())

const city3 = {
    name: "Brovary",
    population:"108 349",
    country: "Ukraine",
    toString: function () {
        return `City3: ${this.name}, Population: ${this.population}, Country: ${this.country}`;
    },
}
console.log("Порівняння city1, city2:", city1.CompareToObject(city2));

console.log("Порівняння city1, city2 та city3:", city1.CompareToObject(city2, city3)); 
