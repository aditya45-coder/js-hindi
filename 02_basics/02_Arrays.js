const marvel_Heros = ["Thor" , "Ironman" , "Spiderman"]
const dc_heros= ["Superman", "Flash" , "Batman"]

marvel_Heros.push(dc_heros)
console.log(marvel_Heros);
console.log(marvel_Heros[3][1]);

const allHeros = marvel_Heros.concat(dc_heros)
 console.log(allHeros);

 const all_new_heros = [...marvel_Heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("aditya"));
console.log(Array.from("aditya"));
console.log(Array.from({name : "aditya"}));  //interesting

let score1 =100
let score2 = 200 
let score3 = 300
console.log(Array.of(score1,score2,score3));



