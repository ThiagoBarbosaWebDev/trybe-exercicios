
const resolveBetStateHandler = (betNum) => {
  let result = Math.ceil(Math.random()*5);
  if (betNum === result) {return `${"Parabéns você ganhou"}`} else {return "Tente novamente"} 
}

const sorteio = (numApostado, resolveBetStateHandler) => resolveBetStateHandler(numApostado)
