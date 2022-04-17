let Array = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"];

let longestName = Array.sort((a, b) => b.length - a.length);

console.log(longestName[0]);
