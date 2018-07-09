

var bob = {
  name: 'Bob',
  greet(){
    console.log(`My name is ${this.name}`)
  }
}
bob.greet()

var greetFn = bob.greet

greetFn = greetFn.bind(bob)

greetFn()
