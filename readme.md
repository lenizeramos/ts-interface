### Interfaces TypeScript

Welcome to interfaces in TypeScript! In this exercise, you will practice your new skills in TypeScript!

### Configuration

1. Clone the repository to your local machine:

```bash
$ git clone https://your-repository-url.git
$ cd your-repository-directory
```

2. Once cloned, install the dependencies using npm:

```bash
npm install
```

3. Create a file for each exercise. For instance:

```bash
touch exercises/ex02.ts
```

4. Run the command bellow to create your TS configuration file:

```bash
npx tsc --init
```

5. Inside of the `tsconfig.json`, localize the `oudDir` property and add `./dist`:

```json
"outDir": "./dist"
```

This will create the compiled files in a separate folder.

6. Inside of the `tsconfig.json`, localize the `rootDir` property and add `./exercises`:

```json
"rootDir": "./exercises"
```

This will define the location of your source files.

7. You can run the compiler from the root using the command`tsc`. With the configuration that was defined.

The `tsc` will compile all the files inside of the root folder (`/exercises`), generating the `.js` compiled files in the `dist` folder.

You can also use the command bellow to compile all the files and watch changes:

```bash
npx tsc -w
```

If you want, you can compile the files individually, but be aware that this will bypass the configuration, meaning you need to indicate the outDir in the command:

```bash
npx tsc exercises/ex01.ts --outDir dist
```

8. After compiling the files, use `node` to run the files.

```bash
node dist/ex01.js
```

Happy codding! 🎉

### Interfaces TypeScript

1. **Exercise: Creating an Interface for a Triangle**

   - Create an interface named `Triangle` with properties: `sideA`, `sideB`, `sideC`. All the properties should be the type `number`.
   - Add three methods to the interface: `calculatePerimeter`, `calculateArea`, and `isTriangle`.
   - Define a variable using the interface `Triangle` and assign it an object.
   - Test the methods of the interface - reference the example below.

     ```ts
     const myTriangle = {
       sideA: 3,
       sideB: 4,
       sideC: 5
       // ...
     };

     console.log(myTriangle.calculatePerimeter()); // 12
     console.log(myTriangle.calculateArea()); // 6
     console.log(myTriangle.isTriangle()); // true
     ```

### Multiple Interfaces

2. **Exercise: Implementing Multiple Interfaces**

   - Create two interfaces:

   1. `Animal` with a `breed`(string) and `name` (string) properties;
   2. `SoundMaker` with a `makeSound` method.

   - Create a class `Pet` that implements both `Animal` and `SoundMaker`.
   - Instantiate a pet object and call the `makeSound` method to display the pet's sound.

     ```ts
     const myPet = new Pet("Labrador", "Buddy");
     myPet.makeSound(); // Buddy says: Woof!
     ```

3. **Exercise: Implementing Multiple Interfaces**

   - Let's make the `Triangle` interface reusable from the exercise above.
   - Create a new interface named `Shape` with the methods to calculate the perimeter and area: `calculatePerimeter`and `calculateArea`.
   - Implement the `Shape` interface in news interfaces (`extends`), like `Rectangle`, `Circle`, and `Square`.
   - Make the correct modifications in the methods to calculate the perimeter and area for each shape.

4. **Exercise: Type against Interface**

   - Define an type alias `Participant` with properties `name` (string) and `role` (string).
   - Define an interface `Event` with properties `date` (Date), `title` (string), and `participants` (array of Participant objects).
   - Create an object called `event1` using the Event interface.
   - Invert the exercise, using `Event` as a `type alias` and `participants` as an `interface`.
     > DO NOT GET STUCK HERE TOO LONG - max 5 mins
   - Did something change? Discuss with your classmates.

### Advanced Types

5. **Exercise: Creating Intersection Types**

   - Define types `Admin` and `Employee` with appropriate properties of your choice.
   - Create an intersection type `AdminEmployee` that combines properties from both `Admin` and `Employee`.
   - Instantiate an object using the `AdminEmployee` type and display the properties.

6. **Exercise: Using Type Guards**

   - Define a union type `StringOrNumber` that includes string and number.
   - Write a function `printInfo` that prints information based on the type of the argument (string or number).
   - Call the function with both a string and a number.

7. **Exercise: Implementing Discriminated Unions**

   - Create interfaces `Bird` and `Horse` with respective properties and a discriminated property `breed`.
   - Implement a function `moveAnimal` that print how animal moves based on animal (Bird or Horse) parameter received. `Eg:  bird fly, horse gallop.`

8. **Exercise: Type Casting**

   - Create an input element with id `user-input` in HTML.
   - Use type casting to access and modify the value of the input element.

9. **Exercise: Index Properties**

   - Create an interface `ErrorContainer` with an `index property` that holds error messages.
   - Define an object `errorBag` using the `ErrorContainer` interface and display the error messages.

10. **Exercise: Optional Chaining**

   - Create an interface `User`.
   - `User` has `address` that may not be defined, and `address` has `street`, and `zipCode`.
   - Create an object `user1` with nested property: `address`.
   - Use optional chaining to access the `zipCode` property to print with `console.log`.

11. **Exercise: Nullish Coalescing**

   - Create a variable `userInput` with a null value.
   - Use nullish coalescing to set a default value `Please enter something...` if `userInput` is null or undefined.
   - Display the resulting value.
