class User {
  planet = "earth";
  country = "Uzbek";
  region; //undefined

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  logAge() {
    console.log(this.age);
  }
}

const firstUser = new User("Alisher", 15)
const secondUser = new User("Misha", 5)

firstUser.logAge()
secondUser.logAge()



