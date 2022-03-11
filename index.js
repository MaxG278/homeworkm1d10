x = "John"
y = "Doe"
console.log("John <> Doe")

const person = {
    name: "";
    surname: "";
    email: "";
}
delete person.email
console.log(person)

let myArray = ["1","2","3","4","5","6","7","8","9","10"]
console.log(myArray(i)) // not sure

/////////////////////////////////////////////////////////////////////
var arr = [2, 3, 5, 10, 2, -9, 3];

alert("Max value is " + arrayMaxMin(arr, "Max"));
alert("Min value is " + arrayMaxMin(arr, "Min"));

function arrayMaxMin(array, selector) {

  var val = array[0];   // variable to hold the current max/min value.

  for (var i = 1; i < array.length; i++) {
    if (selector == "Min") {
      if (array[i] < val) {
        val = array[i];
      }
    } else if (selector == "Max") {
      if (array[i] > val) {
        val = array[i];
      }
    }

  }
  return val;
}
/////////////////////////////////////////////////////////////////////////////////////////////

// 28-30

document.getElementById("container")

document.querySelectorAll("td")

// 33

function changeHeading() {
    let heading = document.querySelector("h1")
    heading.innerText = "changed Heading"

}

function addTr() {
    let trNode = document.getElementsByTagName(table)
    trNode.innerHtml = "<tr></tr>"

}
// fuck this is so wrong xD

function addClass() {
    let addClassNode = document.querySelectorAll("tr")
    addClassNode.classlist.add("test")

}
