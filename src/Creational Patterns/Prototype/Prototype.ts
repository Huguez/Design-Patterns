
class Documento {

   public title: string;
   public content: string;
   public author: string;

   constructor( title: string, content: string, author: string ){
      this.author = author
      this.content = content
      this.title = title
   }

   clone(){
      return new Documento( this.author, this.content, this.title )
   }

   displayInfo(){
      console.log( `Information
         author: ${ this.author }
         content: ${ this.content }
         title: ${ this.title }`
      );
   }
}

function prototype(){
   const doc1 = new Documento( "Cotazacion", "laptop", "Huguez" )
   console.log( { doc1 } );

   doc1.displayInfo();

   const doc2 = doc1.clone()
   console.log( { doc2 } );
   
   doc2.displayInfo();
}

prototype()