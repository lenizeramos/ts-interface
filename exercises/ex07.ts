interface Bird {
  type: "bird";
  breed: string;
}
interface Horse {
  type: "horse";
  breed: string;
}

type Animal2 = Bird | Horse;

function moveAnimal(animal: Animal2): void {
  switch (animal.type) {
    case "bird":
      console.log(`${animal.breed} fly`);
      break;

    case "horse":
      console.log(`${animal.breed} gallop`);
      break;
  }
}

const myBird: Bird = { type: "bird", breed: "Passaro" };
const myHorse: Horse = { type: "horse", breed: "Cavalo" };

moveAnimal(myBird);
moveAnimal(myHorse);
