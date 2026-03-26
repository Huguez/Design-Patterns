
interface Visitor {
   visitorRollerCoaster( rollerCoaster: RollerCoaster ): void;
   visitorHauntedHouse( hauntedHouse: HauntedHouse ): void;
   visitorFerrisWheel( ferrisWheel: FerrisWheel ): void;
}

interface Attraction {
   accept( visitor: Visitor ): void;
}

class RollerCoaster implements Attraction {
   private price: number = 50;

   getPrice(){
      return this.price;
   }

   accept(visitor: Visitor): void {
      visitor.visitorRollerCoaster( this );
   }
}

class HauntedHouse implements Attraction {
   private price: number = 25;

   getPrice(){
      return this.price;
   }

   accept(visitor: Visitor): void {
      visitor.visitorHauntedHouse( this );
   }

}

class FerrisWheel implements Attraction {
   private price: number = 85;

   getPrice(){
      return this.price;
   }

   accept(visitor: Visitor): void {
      visitor.visitorFerrisWheel( this );
   }

}

class ChildVisitor implements Visitor {

   visitorRollerCoaster(rollerCoaster: RollerCoaster): ChildVisitor {
      console.log( `kid en mount rusinsky: Precio con descuento de ${ rollerCoaster.getPrice()*0.80 } ` );
      return this
   }
   
   visitorHauntedHouse(hauntedHouse: HauntedHouse): ChildVisitor {
      console.log( `kid in espantos house: Precio con off de ${ hauntedHouse.getPrice() } ` );
      return this
   }
   
   visitorFerrisWheel(ferrisWheel: FerrisWheel): ChildVisitor {
      console.log( `kid in la rueda of fortune: Precio with descuento is ${ ferrisWheel.getPrice()*0.70 } ` );
      return this
   }

}

const morro = new ChildVisitor()

const attractions = [
   new FerrisWheel(),
   new HauntedHouse(),
   new RollerCoaster()
]

attractions.forEach( att => {
   att.accept( morro );
} )


