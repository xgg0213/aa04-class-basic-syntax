// Your code here 
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  introduce() {
    console.log(`Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`) // should alwasy put this., this here refers to the instance
  }

  static introducePeople(persons) { // why cannot use ...persons here?  when doing ...persons, it does not iterate through an array
                                      // person1 = new Person (), person2 .... Person.introducePeople([person1, person2...])
    if (!Array.isArray(persons)) {
      throw new Error("introducePeople only takes an array as an argument.");
      return;
    }
    // else {
      for (let person of persons) {
        if (!(person instanceof Person)) {
          throw new Error("All items in array must be Person class instances.");
          return;
        }
      

      // }

    }

    for (let person of persons) {
      person.introduce();
    }
    // (!persons instanceof Person) return Error("All items in array must be Person class instances.");
    // else introduce();
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}
