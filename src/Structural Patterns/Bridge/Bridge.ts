
interface Ability {
   use(): void;
}

class SwordAttack implements Ability {

   use(): void {
      console.log("Atacar con una espada mamalona!!");
   }

}

class MagicSpell implements Ability {
   use(): void {
      console.log("lanzar un hechizo chilo!!!");
   }
}

abstract class Character {
   protected ability: Ability;

   constructor( _ability: Ability ) {
      this.ability = _ability;
   }
   
   setAbility( _ability: Ability ): void {
      this.ability = _ability;
   }

   abstract performAbility(): void; 
}

class Warrior extends Character {

   override performAbility(): void {
      console.log( "activar habilidad de del guerrero" );
      this.ability.use()
   }

}


class Mage extends Character {

   override performAbility(): void {
      console.log( "activar habilidad de del Mage (jeje)" );
      this.ability.use();
   }

}

const vicente = new Warrior( new SwordAttack() )
const bruja = new Mage( new MagicSpell() )

vicente.performAbility();
bruja.performAbility();