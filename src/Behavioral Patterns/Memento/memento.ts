
class GameMemento {
   
   constructor(
      private _health: number,
      private _level: number,
      private _position: string,
   ){}

   get health(){
      return this._health
   }

   get level(){
      return this._level
   }

   get position(){
      return this._position
   }
}

class Game {
   private _health: number = 100;
   private _level: number = 1;
   private _position: string = "inicio";

   constructor(
   ){
      console.log( `Gaming\n level: ${ this.level } health: ${ this.health }  position: ${ this.position }` );
   }

   get health(){
      return this._health
   }

   get level(){
      return this._level
   }

   get position(){
      return this._position
   }

   save(): GameMemento {
      return new GameMemento( this._health, this._level, this._position )
   }

   play( health: number,level: number,position: string ){
      this._health = health;
      this._level = level;
      this._position = position;
      console.log(`player changed values\nlevel: ${ this.level } health: ${ this.health }  position: ${ this.position }`);
   }

   restore( memento: GameMemento ): void {
      this._health = memento.health
      this._level = memento.level
      this._position = memento.position

      console.log(`Restore\nlevel: ${ this.level } health: ${ this.health }  position: ${ this.position }`);
   }

}

class  GameHistory {
   private mementos: GameMemento[] = [];
   
   add( game: GameMemento ){
      this.mementos.push( game )
   }

   pop(): GameMemento | null {
      return this.mementos.pop() ?? null
   }

   isEmpty(): boolean {
      return this.mementos.length > 0;
   }

}

const game = new Game();
const historial = new GameHistory()

historial.add( game.save() )

game.play(2, 85, "Bosque mamalon terry")
historial.add( game.save() )

game.play(4, 50, "el castillo")
historial.add( game.save() )

game.play(17, 35, "el mar del marlin")
historial.add( game.save() )

const restoredValue : GameMemento | null = historial.pop()

if ( !!restoredValue ) {
   game.restore( restoredValue )
}

