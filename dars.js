class Person {
  //   planet = "earth";
  //   country = "Uzbek";
  //   region; //undefined

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  set() {
    console.log("Ем...");
  }
  sleep() {
    console.log("Сплю..");
  }

  //   logAge() {
  //     console.log(this.age);
  //   }
}

// const firstUser = new User("Alisher", 15)
// const secondUser = new User("Misha", 5)

// firstUser.logAge()
// secondUser.logAge()

// firstUser.city = 'Urgench'
// console.log(firstUser.city);

const example = new Person("Alisher", 15);

class Developer extends Person {
    constructor(name , age , expirence){
        super(name , age)
    }
}

const exampleDeveloper = new Developer("Misha", 5);

exampleDeveloper.code();
