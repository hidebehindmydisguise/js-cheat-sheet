// задача 1 конвертація валют (map) 
const prisesPLN = [1600, 450, 3200, 150]

const prisesUAH = prisesPLN.map (value => value * 10);

console.log(prisesUAH);

// задача 2 будівельний контроль (filter)
const pipeLengths = [2.5, 4.2, 1.8, 6.0, 3.0, 2.9];

const validPipes = pipeLengths.filter(pipe => pipe >= 3.0);

console.log(validPipes);

// задача 3 пошук заліза (find)

const processorsInStock = ["Ryzen 5 7600", "Core i5 13400F", "Ryzen 7 7800X3D", "Core i9 14900K"];

const targetCpu = processorsInStock.find (cpu => cpu === "Ryzen 7 7800X3D");

console.log(targetCpu);