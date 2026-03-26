
interface Observer {
   notify( videoTitle: string ): void;
}

class YoutubeChannel {
   private subscribers: Observer[] = []
   
   constructor(
      private name: string
   ){}

   subscribe(obs: Observer): YoutubeChannel {
      this.subscribers.push( obs )
      console.log( `new Subcriber added to ${ this.name }` );
      return this
   }

   unsubscribe(obs: Observer): void {
      this.subscribers = [ ...this.subscribers.filter( sub => sub !== obs ) ]
      console.log( `%ca subscriber minus`, "color: red;" );
   }

   uploadVideo( videoTitle: string ): void {
      console.log( `%cChannel ${ this.name } has been uploaded a new video '${ videoTitle }'`, "color: green;" );

      for( const subs of this.subscribers ){
         subs.notify( videoTitle );
      }
   }

}

class Subscriber implements Observer {

   constructor(
      private name: string,
   ){}

   notify(videoTitle: string): void {
      console.log( `%cel dude ${ this.name } is already watching the video '${videoTitle}', vato!!`, "color: lightblue;" );
   }

}

const channel  = new YoutubeChannel("Cafeciendo con El Huguez");

const juan = new Subscriber("juan")
const paco = new Subscriber("paco")
const pedro = new Subscriber("pedro")

channel.subscribe(juan).subscribe( paco ).subscribe(pedro)

channel.uploadVideo( "como hacer un cappuccino" )

channel.unsubscribe( pedro );

channel.uploadVideo( "how to make a macchiato" )