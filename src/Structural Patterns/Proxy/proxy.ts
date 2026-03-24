
class Player {
   constructor(
      public name: string,
      public level: number,
   ){}
}

interface Room {
   enter( player: Player ): void;
}

class SecretRoom implements Room {
   
   constructor(){}

   enter(player: Player): void {
      console.log( `Player ${player.name} step into to secret room` );
   }
}

class MagicalPortal implements Room {

   constructor(
      private secretRoom: SecretRoom,
   ){}

   enter(player: Player): void {
      if (player.level >= 10) {
         this.secretRoom.enter( player )
         return;
      }

      console.log( `el player ${ player.name } tiene un nivel muy bajo` );
   }

}

const blackMamba: Player = new Player( "kobe", 24 )
const isaias: Player = new Player( "isaias", 2 )

const secretRoom: SecretRoom = new SecretRoom()
const portal: MagicalPortal = new MagicalPortal( secretRoom )

portal.enter( blackMamba )
portal.enter( isaias )