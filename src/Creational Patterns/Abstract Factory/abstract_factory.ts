
interface Burger {
   prepare(): void;
}

interface Drink {
   pour(): void;
}

class ChickenBurger implements Burger {

   prepare(): void {
      console.log("Preparing ChickenBurger");
   }

}

class BeefBurger implements Burger {

   prepare(): void {
      console.log("Preparing BeefBurger");
   }

}

class Water implements Drink{

   pour(): void {
      console.log( "pouring Water" );
   }
   
}

class Soda implements Drink {
   pour(): void {
      console.log( "pouring Soda" );
      
   } 

}

interface RestaurantFactory {
   createBurger(): Burger
   createDrink(): Drink
}

class FastFoodFactory implements RestaurantFactory {

   createBurger(): Burger {
      return new BeefBurger();
   }
   createDrink(): Drink {
      return new Soda();
   }

}


class HealthyFoodFactory implements RestaurantFactory {

   createBurger(): Burger {
      return new ChickenBurger();
   }
   createDrink(): Drink {
      return new Water();
   }

}

const main = ( restaurant: RestaurantFactory)=>{

   const burger = restaurant.createBurger();
   const drink = restaurant.createDrink();

   burger.prepare()
   drink.pour()
   
}


console.log("\n   FastFoodFactory   ");
main( new FastFoodFactory() )

console.log( "\n\n   HealthyFoodFactory   " );
main( new HealthyFoodFactory() )