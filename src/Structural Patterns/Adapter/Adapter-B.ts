

interface LoggerAdapter {
   file: string;

   writeInfo: (_: string) => void;
   writeError: (_: string) => void;
   writeWarning: (_: string) => void;
}

export class MyLogger implements LoggerAdapter {
   file: string
   logger: any

   constructor(_file: string) {
      this.file = _file;
   }

   writeInfo = (msg: string): void => {
      console.log(`%c ${this.file} - ${msg}`, 'color: white; background-color: blue');
   }

   writeError = (msg: string): void => {
      console.error(`${this.file} - ${msg}`);
   }

   writeWarning = (msg: string): void => {
      console.warn(`${this.file} - ${msg}`);
   }
     
}