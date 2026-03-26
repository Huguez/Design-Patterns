
interface MovementStrategy {
   move(): void;
}

class Swimmer implements MovementStrategy {

   constructor() { }

   move(): void {
      console.log("%cEl dude swimming so well, vato", "color: #02D8E9;");
   }
}

class Flyer implements MovementStrategy {

   constructor() { }

   move(): void {
      console.log("%cflying as superman, thug", "color: lightblue;");
   }
}

class Walker implements MovementStrategy {

   constructor() { }

   move(): void {
      console.log("%cwalking a la velocity of light", "color: green;");
   }
}

class Duck {

   constructor(
      private name: string,
      private movementStrategy: MovementStrategy,
   ) {
      console.log(`${name} listo para competir`);
   }

   performMove() {
      console.log(`${this.name} se prepara para moverse jeje `);
      this.movementStrategy.move()
      
   }
   setMovementStrategy(strategy: MovementStrategy) {
      this.movementStrategy = strategy;
      console.log(`%c${this.name} cambio de estragegia.`, "color: yellow;");
   }
   
}

const patricio1 = new Duck("Pato1", new Swimmer())
patricio1.performMove()
patricio1.setMovementStrategy( new Flyer() )
patricio1.performMove()
console.log("\n");

const patricio2 = new Duck("Pato2", new Flyer())
patricio2.performMove()
patricio2.setMovementStrategy( new Walker() )
patricio2.performMove()
console.log("\n");

const patricio3 = new Duck("Pato3", new Walker())
patricio3.performMove()

