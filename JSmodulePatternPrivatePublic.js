/*Module Pattern allows the concept of having private and
public data, JS natively doesn't support the concept found
in a traditional way you could find in Java and other
programming languages, but utilizes the lexical scope
mechanism to create that ability */
function createPerson(){
  var firstName = "Jose";
  var lastName = "Santana";
  var returnPersonObject = {
    getFirstName: function(){
      return firstName;
    },
    getLastName: function(){
      return lastName;
    },
    setFirstName: function(name){
      firstName = name;
    },
    setLastName: function(name){
      lastName = name;
    }
  };
  return returnPersonObject;
}
var person = createPerson();
console.log(person); //can't see firstName and lastName
console.log(person.firstName); //can't retrieve firstName, which results in undefined
console.log(person.getFirstName());
person.setFirstName("Andy");
console.log(person.getFirstName());
