
interface Command {
   execute(): void;
}

class Light {
   turnOn(): void {
      console.log( "la luz is ON" );
   }

   turnOff(){
      console.log("la luz is OFF");
   }
}

class Fan {
   on(): void {
      console.log( "el ventilador esta fanning" );
   }

   off(): void {
      console.log("El ventilador dejo de estar fanning");
   }
}

class LightOnCommand implements Command {

   constructor(
      private light: Light
   ){}

   execute(): void {
      this.light.turnOn()
   }

}

class LightOffCommand implements Command {

   constructor(
      private light: Light
   ){}

   execute(): void {
      this.light.turnOff()
   }

}


class FanOnCommand implements Command{
   constructor(
      private fan: Fan
   ){}

   execute(): void {
      this.fan.on()
   }
}

class FanOffCommand implements Command{
   constructor(
      private fan: Fan
   ){}

   execute(): void {
      this.fan.off()
   }
}

type Commands = Record<string, Command>;

class RemoteControl {
   
   private commands: Commands = {};

   setCommand( button: string, command: Command ){
      this.commands[button] = command
   }

   pressButton( button: string ): void {
      if ( !this.commands[button] ) {
         console.log( `Command "${ button }" don't exist` );
         return;
      }

      this.commands[button].execute()
   }
}



const remote = new RemoteControl()

const light = new Light()
const fan = new Fan()

const lightOnCommand = new LightOnCommand( light );
const lightOffCommand = new LightOffCommand( light );

const fanOnCommand = new FanOnCommand(fan)
const fanOffCommand = new FanOffCommand(fan)

remote.setCommand( "LightOnCommand", lightOnCommand )
remote.setCommand( "LightOffCommand", lightOffCommand )

remote.setCommand( "FanOnCommand", fanOnCommand )
remote.setCommand( "FanOffCommand", fanOffCommand )


remote.pressButton( "LightOnCommand" )
remote.pressButton( "FanOnCommand" )

console.log("");

remote.pressButton( "LightOffCommand" )
remote.pressButton( "FanOffCommand" )

remote.pressButton( "wawa" )