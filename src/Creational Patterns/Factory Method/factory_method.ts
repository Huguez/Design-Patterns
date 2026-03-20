
(() => {

   interface Burger {
      prepare(): void
   }

   class ChickenBurger implements Burger {

      prepare(): void {
         console.log("Prepare chicken burger");
      }
   }

   class BeefBurger implements Burger {

      prepare(): void {
         console.log("Prepare Beef burger");
      }
   }

   class BeanBurger implements Burger {
      prepare(): void {
         console.log("Prepare Bean burger");
      }
   }

   abstract class Restaurant {

      protected abstract createBurger(): Burger;

      orderBurger(): void {
         const burger = this.createBurger();
         burger.prepare()
      }
   }

   class ChickenRestaurant extends Restaurant {
      override createBurger(): Burger {
         return new ChickenBurger()
      }
   }

   const chickenRestaurant = new ChickenRestaurant()

   chickenRestaurant.orderBurger()


   class BeefRestaurant extends Restaurant {
      override createBurger(): Burger {
         return new BeefBurger()
      }
   }

   class BeanRestaurant extends Restaurant {
      override createBurger(): Burger {
         return new BeanBurger()
      }
   }

   const beefRestaurant = new BeefRestaurant()

   beefRestaurant.orderBurger()

   let restaurant: Restaurant;

   const burgerType = prompt("what burger, dude ?");
   
   switch( burgerType ){
      case 'beef':
         restaurant = new BeefRestaurant()
         break;
      case 'chicken':
         restaurant = new ChickenRestaurant()
         break;
      case 'bean':
         restaurant = new BeanRestaurant()
         break;
      default:
         throw new Error("nelson")
   }

   restaurant.orderBurger()

})();