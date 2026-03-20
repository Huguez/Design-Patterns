
class CodeEditorState {
   
   constructor(
      readonly content: string,
      readonly cursorPosition: number,
      readonly unsaveChanges: boolean,
   ){}

   displayState(){
      console.log( "Editor State" );
      console.log( `
         content: ${ this.content }
         cursorPosition: ${ this.cursorPosition }
         unsaveChanges: ${ this.unsaveChanges }
      ` );      
   }  

   copyWith({ content, cursorPosition, unsaveChanges }: Partial<CodeEditorState>){
      return new CodeEditorState(content ?? this.content, cursorPosition ?? this.cursorPosition, unsaveChanges ?? this.unsaveChanges )
   }

}

class CodeEditorStateHistory {
   private history: CodeEditorState[] = []
   private currentIndex: number = -1;

   save( state: CodeEditorState ): void {

      if (this.currentIndex < this.history.length -1) {
         this.history.slice( 0, this.currentIndex+1 )
      }

      this.history.push( state )
      this.currentIndex++;
   }

   undo(): CodeEditorState | null {

      if ( this.currentIndex > 0 ) {
         this.currentIndex--;
         return this.history[this.currentIndex];
      }

      return null
   }

   redo(): CodeEditorState | null {
      if (this.currentIndex < this.history.length -1) {
         this.currentIndex++

         return  this.history[this.currentIndex]
      }

      return null
   }

}

function immutable(){
   const history = new CodeEditorStateHistory()
   
   let editorState = new CodeEditorState("console.log( 'Hi nigga' );",25 ,false )

   history.save( editorState )
   
   editorState = editorState.copyWith({
      content: "nothing",
      unsaveChanges: true,
   })
   
   history.save( editorState )

   editorState.displayState()
}

immutable()