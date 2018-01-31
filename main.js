/*Work with a partner to create a monkey object, which has the following properties:
* name
* species
* foodsEaten
And the following methods:
* eatSomething(thingAsString)
* introduce: producers a string introducing itself, including its name, species, and what it's eaten.
Create 3 monkeys total. Make sure all 3 monkeys have all properties set and methods defined.
Exercise your monkeys by retrieving their properties and using their methods. Practice using both syntaxes
for retrieving properties (dot notation and brackets).
*/






//constructor function - it declares monkey to be an object with properties//
var Monkey = function(name, breed, foodsEaten) {
	this.name = name
	this.species = breed
	this.foodsEaten = []
	//invoking the properties of the monkey//
	this.eatSomething = function(foods) {
		this.foodsEaten.push(foods)


	}
	this.introduce = function() {
		console.log('I am', this.name,'.', 'I am a', this.species,'.', 'I like to eat', this.foodsEaten,'.')
	}

}
var gibbon = new Monkey('Gibbon', 'titi', 'foodsEaten')
gibbon.eatSomething('bananas')
gibbon.eatSomething('nuts')
gibbon.eatSomething('eggplant')
console.log(gibbon.foodsEaten)

gibbon.introduce()

// var jerrid = new Monkey('Jerrid', 'bonobos', 'tamales')

// jerrid.introduce()

// var pacozimbabwe = new Monkey('Pacozimbabwe', 'capuchin', 'capuccinos')

// pacozimbabwe.introduce()
