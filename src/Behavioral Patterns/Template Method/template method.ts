
abstract class HotBeverage {

   prepare(): void {
      this.boilWater();
      this.addMainIngredient()
      this.pourInCup();
      this.addComplement();
   }

   private boilWater(){
      console.log( "Hirviendo agua" );
   }

   private pourInCup(){
      console.log( "Sirviendo en la taza" );
   }

   protected abstract addComplement(): void;

   protected abstract addMainIngredient(): void;

}

class Tea extends HotBeverage {

   protected override addComplement(): void {
      console.log("add sugar");
   }
   
   protected override addMainIngredient(): void {
      console.log( "Adding aromatic herbs" );
   }

}


class Coffee extends HotBeverage {

   protected override addComplement(): void {
      console.log("el cafe se toma negro, bastardo!!! . (a excepcion de la canela <3 )");
   }

   protected override addMainIngredient(): void {
      console.log( "Adding cafe para colar" );
   }

}

const tea = new Tea()
tea.prepare()
console.log("\n");

const coffee = new Coffee()
coffee.prepare()