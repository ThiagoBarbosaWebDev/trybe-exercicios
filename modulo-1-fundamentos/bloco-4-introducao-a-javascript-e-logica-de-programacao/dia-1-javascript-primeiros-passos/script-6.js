let peca = "kiNg"

switch (peca.toLowerCase()){
  case "pawn": 
  console.log("moves ahead one square, first turn moves two");
  break;

  case "rook": 
  console.log("moves one direction vertically or horizontally, fowards or backwards, as many squares as desired");
  break;

  case "knight": 
  console.log("moves in 'L' shaped movements, in any direction");
  break;

  case "bishop": 
  console.log("moves diagonally, fowards and backwards, as many squares as desired");
  break;

  case "queen": 
  console.log("moves horizontally, vertically, diagonally, as many squares as desired");
  break;

  case "king": 
  console.log("moves one square in any direction");
  break;

  default: 
  console.log("ERROR: PIECE IS INVALID")
}