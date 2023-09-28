# Zoo Project

Logic and classes to support a zoo in JavaScript where each animal species in the zoo has lots
of different, particular, behaviors, but all animals talk to each other in a similar
way. Specifically, they all implement a speak method, the output of which is the
arbitrary input string interspersed with an "animal sound" that is particular to that
type of animal.

## Project Structure :rocket:

- `zoo-excercise/`: Contains the source code for the project.
  - `zoo/`: Houses all animal-related classes.
    - `animals/`: Houses all animal-related classes.
      - `Animal.js`: The base class for all animal types.
      - `Lion.js`: A class representing lions.
      - `Tiger.js`: A class representing tigers.
      - `Elephant.js`: A class representing elephants.
      - ... 
    - `zoo.js`: A class for the zoo representation.
  - `index.js`: main project file.
  - `test/`: Contains unit tests for the project.
    - `test.js`: The unit test file for testing the zoo and animal classes.
  - `package.json`: Project metadata and dependencies.


## Usage

  **Zoo Class**:

  The Zoo class represents the overall zoo and is responsible for managing the animals within the zoo.
  It could have methods for adding animals, removing animals, and performing actions involving the animals.

  **Animal Class (Base Class)**:

  The Animal class is an abstract or base class that serves as the blueprint for all animal species in the zoo.
  It can define common properties and behaviors that all animals share
    
  **Lion Class (Subclass of Animal)**:

  The Lion class is a subclass of the Animal class, representing a specific species in the zoo (in this case, lions).
  It can inherit properties and methods from the Animal class and add its own unique characteristics, such as a specific sound.
  The Lion class might override the makeSound method to provide the lion's distinctive roar.

Here's an example of how to use the zoo in your JavaScript code:

```javascript
// Import the Zoo class
import Zoo from "./zoo/zoo.js";

// Create a new zoo instance
const myZoo = new Zoo();

// Make lion speak
myZoo.lion.speak();

// Make tiger speak
myZoo.lion.speak();

```
## Tests

A Unit tests is included:

- npm install
- npm test
