
type TypeRequest = 'Basic' | 'Moderated' | 'Advanced' | 'Unsolvable'

interface Handler {
   setNext(handler: Handler): Handler;
   handle(request: TypeRequest): void;
}

abstract class BaseHandler implements Handler {

   private nextHandler?: Handler;

   constructor() { }

   setNext(handler: Handler): Handler {
      this.nextHandler = handler
      return handler;
   }

   handle(request: TypeRequest): void {
      if (this.nextHandler) {
         this.nextHandler.handle(request);
      }
   }
}

class BasicSupport extends BaseHandler {
   override handle(request: TypeRequest): void {
      
      if ( request === 'Basic' ) {
         console.log( "%cBasic request solved, vato !!", "color:green;"  );
         return;
      }

      console.log("%cBasic support sending request to higher support",  "color:green;" );
      super.handle( request );

   }
}

class ModerateSupport extends BaseHandler {

   override handle(request: TypeRequest): void {
      if ( request === 'Moderated' ) {
         console.log( "%cModerated request solved, vato !!","color:yellow;"  );
         return;
      }

      console.log("%cModerated support sending request to higher support",  "color:yellow;" );
      super.handle( request );
   }
}

class AdvancedSupport extends BaseHandler {

   override handle(request: TypeRequest): void {

      if ( request === 'Advanced' ) {
         console.log( "%cAdvanced request solved, vato !!", "color:red;"  );
         return;
      }

      throw new Error("Advanced support couldn't solved this request");
      
   }
}


const basic: BasicSupport    = new BasicSupport();
const moderated: ModerateSupport = new ModerateSupport();
const advanced: AdvancedSupport = new AdvancedSupport();

basic.setNext( moderated ).setNext(advanced);


basic.handle( 'Basic' );
basic.handle('Moderated')
basic.handle('Advanced')

try {
   basic.handle('Unsolvable')
} catch (error) {
   console.error( error );
}