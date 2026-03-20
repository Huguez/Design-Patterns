
class DragonBall {

   private static instance: DragonBall;
   private ballsCollected: number;

   private constructor() {
      this.ballsCollected = 0;
   }


   public static getInstance(): DragonBall {
      if (!DragonBall.instance) {
         DragonBall.instance = new DragonBall();
      }

      return DragonBall.instance;
   }

   collectBall(): void {
      if (this.ballsCollected < 7) {
         this.ballsCollected++;
         console.log(`Pelota recolectada.\nTotal de esferas: ${this.ballsCollected}`);
         return
      }
   }

   summonShenlong(): void {
      if (this.ballsCollected === 7) {
         this.ballsCollected = 0;
         console.log( "\nDeseo concedido" );
         return
      }
      console.log( "Missing balls" );
   }

}

function goku(){
   const gokuDragonBalls = DragonBall.getInstance();
   gokuDragonBalls.collectBall();
   gokuDragonBalls.collectBall();
   gokuDragonBalls.collectBall();
   gokuDragonBalls.collectBall();
   gokuDragonBalls.collectBall();
   gokuDragonBalls.collectBall();
   gokuDragonBalls.collectBall();

   gokuDragonBalls.summonShenlong()
}

// goku();


class DatabaseConnection {
   private static instance: DatabaseConnection;
   private connected: boolean = false

   private constructor() {}

   public static getInstance(): DatabaseConnection {
      if ( !DatabaseConnection.instance ) {
         DatabaseConnection.instance = new DatabaseConnection()
         return DatabaseConnection.instance
      }
      return DatabaseConnection.instance
   }

   public connect(): void {
      if ( !this.connected ) {
         this.connected = true
         console.log( "DB connected" );
         return 
      }
      console.log( "DB is already Connected" );
   }
   
   public disconnect(): void {
      if ( this.connected ) {
         this.connected = false
         console.log( "DB disconnected" );
         return 
      }
      console.log( "DB is NOT Connected" );
   }

}

function runDB(){
   const db = DatabaseConnection.getInstance()
   const db2 = DatabaseConnection.getInstance()

   db2.disconnect()
   
   db.connect()

   db2.connect()

   db.disconnect()

}

runDB()