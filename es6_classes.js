// Extends demonstration
class dog {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  says_his_name() {
    console.log(this['name'])
  }
}

class super_dog extends dog {
  constructor(name, age, superpower) {
    super(name, age)
    this.superpower = superpower
  }
  
  use_superpower() {
    console.log(this.name + ' used his superpower: ' + this.superpower)
  }
}

var fido = new super_dog("fido", 15, "immortality")

fido.use_superpower()