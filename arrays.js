<<<<<<< HEAD
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

=======
>>>>>>> fe95de353ec2752177255116409cd07f86daf172
function addElementToBeginningOfArray(array, element) {
  var newArray = [element, ...array]
  return newArray
}

function destructivelyAddElementToBeginningOfArray(array, element) {
<<<<<<< HEAD
  array.unshift(element)
  return array
=======
  return array.unshift(element)
>>>>>>> fe95de353ec2752177255116409cd07f86daf172
}

function addElementToEndOfArray(array, element) {
  var newArray = [...array, element]
  return newArray
}

function destructivelyAddElementToEndOfArray(array, element) {
<<<<<<< HEAD
  array.push(element)
  return array
=======
  return array.push(element)
>>>>>>> fe95de353ec2752177255116409cd07f86daf172
}

function accessElementInArray(array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
<<<<<<< HEAD
  array.shift()
  return array
=======
  return array.shift()
>>>>>>> fe95de353ec2752177255116409cd07f86daf172
}

function removeElementFromBeginningOfArray(array) {
  newArray = array.slice(1)
  return newArray
}

function destructivelyRemoveElementFromEndOfArray(array) {
<<<<<<< HEAD
  array.pop()
  return array
=======
  return array.pop()
>>>>>>> fe95de353ec2752177255116409cd07f86daf172
}

function removeElementFromEndOfArray(array) {
  newArray = array.slice(0, array.length -1)
  return newArray
}
