interface Coordinate {
   x: number;
   y: number;
}

interface ILocation {
   display( coordinates: Coordinate): void;
}

class LocationIcon implements ILocation {

   constructor(
      private type: string,
      private iconImage: string
   ){}

   display(coordinates: Coordinate): void {
      console.log( `type: ${ this.type } => coordinates: [${ coordinates.x }, ${ coordinates.y }]`,  );
   }

}

class LocationFactory {
   private icons: Record<string, ILocation>;

   constructor( icons: Record<string, ILocation> = {} ){
      this.icons = icons;
   }

   getLocation( type: string ): ILocation {
      if ( !this.icons[type] ) {
         const iconImage = `image_${ Math.round( Math.random()*1000+1 )  }_${ type.toLowerCase() }.png`
         this.icons[type] = new LocationIcon(type, iconImage)
      }
      return this.icons[type]
   }
}

class MapLocation {
   
   constructor(
      private coordinates: Coordinate,
      private icon: ILocation
   ){}

   display(){
      this.icon.display( this.coordinates );
   }  
}


const factory = new LocationFactory()

const locacion = [
   new MapLocation({x: 10, y: 10}, factory.getLocation("hospital") )
]

locacion.forEach( l => {
   l.display()
} )