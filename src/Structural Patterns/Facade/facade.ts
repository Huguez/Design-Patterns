
class Proyector{

   turnOn(){
      console.log( "el proyector is On" );
   }

   turnOff(){
      console.log( "el proyector is Off" );
   }

}

class SoundSystem {
   on(){
      console.log( "el SoundSystem is ON" );
   }

   Off(){
      console.log( "el SoundSystem is OFF" );
   }
}

class VideoPlayer {
   on(){
      console.log( "el VideoPlayer is ON" );
   }
   
   play(){
      console.log( "el VideoPlayer is playing now" );
   }

   stop(){
      console.log( "el VideoPlayer is stopped" );
   }

   Off(){
      console.log( "el VideoPlayer is OFF" );
   }
}

class PopcornMarker {
   poppingPopcorn(){
      console.log("haciendo palomitas");
   }

   turnOffPoppingPopcorn(){
      console.log("NO mas palomitas");
   }

}

interface HomeTheaterFacadeOptions {
   proyector:     Proyector;
   soundSystem:   SoundSystem;
   videoPlayer:   VideoPlayer;
   popcornMarker: PopcornMarker;
}

class HomeTheaterFacade {

   private proyector:     Proyector;
   private soundSystem:   SoundSystem ;
   private videoPlayer:   VideoPlayer ;
   private popcornMarker: PopcornMarker;

   constructor({ proyector, soundSystem, videoPlayer, popcornMarker }: HomeTheaterFacadeOptions ){
      this.proyector = proyector
      this.soundSystem = soundSystem
      this.videoPlayer = videoPlayer
      this.popcornMarker = popcornMarker
   }

   watchMovie(){
      console.log( "Ver pelicula!!!" );
      this.proyector.turnOn()
      this.popcornMarker.poppingPopcorn()
      this.soundSystem.on()
      this.videoPlayer.on()
      console.log();
   }

   stopWatchMovie(){
      console.log( "\nse acabo la pelicula" );
      this.proyector.turnOff()
      this.popcornMarker.turnOffPoppingPopcorn()
      this.soundSystem.Off()
      this.videoPlayer.Off()
   }

   
}

const home = new HomeTheaterFacade( {
   proyector:     new Proyector(),
   soundSystem:   new SoundSystem(),
   videoPlayer:   new VideoPlayer(),
   popcornMarker: new PopcornMarker(),
} );

home.watchMovie()
home.stopWatchMovie()