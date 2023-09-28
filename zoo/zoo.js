import Lion from './animals/Lion.js';
import Tiger from './animals/Tiger.js';
import Elephant from './animals/Elephant.js';
import Coati from './animals/Coati.js';


class Zoo {
  constructor() {
    // Create instances of various animal types 
    // since this is an excercise we are just instantiating some animals in the Zoo constructor , 
    // but for real project we might consider a collection of animals and methods to manage the animal collection
    this.lion = new Lion();
    this.tiger = new Tiger();
    this.elephant = new Elephant();
    this.coati = new Coati();
    // Add other animal instances as needed 
  }
  // Here we can define other methods or functionality to manage the zoo
}

export default Zoo;