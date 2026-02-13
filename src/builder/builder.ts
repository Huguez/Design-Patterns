(() => {

   class Computer {
      public cpu: string = "cpu - not defined";
      public ram: string = "ram - not defined";
      public storage: string = "storage - not defined";
      public gpu?: string = "gpu - not defined";

      displayConfiguration() {
         console.log(`PC Configuration:
            cpu: ${this.cpu}
            ram: ${this.ram}
            storage: ${this.storage}
            gpu: ${this.gpu}
         ` );
      }
   }

   class ComputerBuilder {

      private computer: Computer;

      constructor() {
         this.computer = new Computer()
      }

      setCpu(cpu: string) {
         this.computer.cpu = cpu
         return this
      }

      setStorage(storage: string) {
         this.computer.storage = storage
         return this
      }

      setGpu(gpu: string) {
         this.computer.gpu = gpu
         return this
      }

      setRam(ram: string) {
         this.computer.ram = ram
         return this
      }

      buildComputer() {
         return this.computer
      }

   }

   const basicComputer = new ComputerBuilder()
      .setCpu("Intel Core i7")
      .setStorage("2 TB SSD")
      .setRam("32 GB DDR5")
      .buildComputer()

   basicComputer.displayConfiguration()

   console.log("\n\n");

   const basicComputer2 = new ComputerBuilder()
      .setCpu("Intel Core i9")
      .setStorage("1 TB SSD")
      .setRam("64 GB DDR5")
      .setGpu("MSI NVIDIA GeForce RTX 5070 Ti")
      .buildComputer()

   basicComputer2.displayConfiguration()

   console.log("another good example is QueryBuilder");

})();