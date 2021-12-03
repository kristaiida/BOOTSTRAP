// a
let sanat = ["one", "two", "three", "four", "five"];
sanat.array.forEach(sana => console.log(sana));

// b
let prices = [24, 50, 100, 68];
let discount = prices.map(price => 0.2*price);
console.log(discount);

// c
let names = ["John", "Jack", "Lisa", "John", "Sara"];
names = names.map(name => {
    if(name === "John") {
        return "Matt";
    }
    return name;
});

// tai
names = names.map(name => name === "John" ? "Matt" : name);

// d
let numbers = [1, 4, -3, -5, 4, 23];

let positives = numbers.filter(number => number >= 0);
console.log(positives);

// e
names ["Timo", "Sara", "Lasse", "Taavi", "Tinderella", "Timoteus-Mikkonen"];
let modnames = names.filter(name => name.length > 8 && name[0] === "T");
console.log(names);

// f
if(names.every(sana => sana.length > 0)) {
    let pituudet = names.map(sana => sana.length);
    let summa = pituudet.reduce((previous, current) => previous + current);
    console.log(summa);
}
