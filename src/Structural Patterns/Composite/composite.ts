
interface FileSystemComponent {
   showDetails( indent?: string ): void;
}

class FileComponent implements FileSystemComponent {

   private name: string;

   constructor(name: string){
      this.name = name;
   }

   showDetails(indent: string  = "\t" ): void {
      console.log(  `${ indent } - ${ this.name } ` );
   }

}

class Folder implements FileSystemComponent {
   
   private contents: FileSystemComponent[] = [];

   constructor(
      private name: string
   ){}

   addFile( file: FileSystemComponent ){
      this.contents.push( file );
   }

   showDetails(indent: string = "" ): void {
      console.log( indent+`+ ${ this.name }` );   
      this.contents.forEach( c => {
         c.showDetails( indent+"\t " )  
      } )
   } 
}

const newfile1 = new FileComponent("file 1")
const newfile2 = new FileComponent("file 2")
const newfile3 = new FileComponent("file 3")
const newfile4 = new FileComponent("file 4")

const folder1 = new Folder("carpeta 1");
folder1.addFile( newfile1 );
folder1.addFile( newfile2 );

const folder2 = new Folder("carpeta 2");
folder2.addFile( newfile3 );

const folder4 = new Folder("carpeta 4");
folder4.addFile( newfile4 );

const folder3 = new Folder("carpeta 3");
folder3.addFile( folder2 )
folder3.addFile( folder4 )

const folder0 = new Folder("carpeta 0");

folder0.addFile( folder1 )
folder0.addFile( folder2 )
folder0.addFile( folder3 )
folder0.addFile( folder4 )

folder0.showDetails()