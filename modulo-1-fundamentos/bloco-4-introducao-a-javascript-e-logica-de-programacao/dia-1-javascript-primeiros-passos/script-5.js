const a = 40;
const b = 60;
const c = 80;
const triangle = 180

if (a+b+c===triangle) {
  console.log(true)
} else if (a+b+c<0) {
  console.log("ERROR - triangle angles sum must be >0")
}
else {console.log(false)}