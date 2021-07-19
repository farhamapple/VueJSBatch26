console.log('-- Soal 1--')

const luasPersegiPanjang = (panjang, lebar) => {
    //function

    return panjang * lebar;
}

const kelilingPersegiPanjang = (panjang, lebar) => {
    //function

    return 2 * (panjang + lebar);
}
console.log(luasPersegiPanjang(4, 5));
console.log(kelilingPersegiPanjang(4, 5));

console.log('-- Soal 2 --')

const newFunction = function literal(firstName, lastName){
  return {
    firstName: firstName,
    lastName: lastName,
    fullName: function(){
      console.log(firstName + " " + lastName)
    }
  }
}
 
//Driver Code 
newFunction("William", "Imoh").fullName() 

const newFunction2 = function(firstName, lastName){

	const gabung = {
		firstName, 
		lastName, 
		fullName: function(){
	      console.log(firstName + " " + lastName)
	    }
	}

	return gabung
}

newFunction2("Farham", "Harvianto").fullName();

console.log('-- Soal 3 --')

const newObject = {
  firstName: "Muhammad",
  lastName: "Iqbal Mubarok",
  address: "Jalan Ranamanyar",
  hobby: "playing football",
}


// const firstName = newObject.firstName;
// const lastName = newObject.lastName;
// const address = newObject.address;
// const hobby = newObject.hobby;

const{firstName, lastName, address, hobby} = newObject;

console.log(firstName, lastName, address, hobby)

console.log('-- Soal 4 --')

const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]

//const combined = west.concat(east)

const combinedArray = [...west, ...east]

//Driver Code
console.log(combinedArray)

console.log('-- Soal 5 --')

const planet = "earth" 
const view = "glass" 
var before = 'Lorem ' + view + 'dolor sit amet, ' + 'consectetur adipiscing elit,' + planet 
let after = `Lorem ${view} dolor sit amet consectetur adipiscing elit,${planet}`

console.log(after);


