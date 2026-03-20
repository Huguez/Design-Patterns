
export class LocalLogger {

   constructor(private file: string) {
      console.group( file )
   }

   writeInfo(msg: string): void {
      console.log(`%c ${this.file} - ${msg}`, 'color: white; background-color: blue');
   }

   writeError(msg: string): void {
      console.error(`${this.file} - ${msg}`);
   }

   writeWarning(msg: string): void {
      console.warn(`${this.file} - ${msg}`);
   }

}

const logger = new LocalLogger("adapter.ts");

logger.writeInfo("Simon");

logger.writeWarning("algo no cuadra homs")

logger.writeError("Valio queso man D:")
