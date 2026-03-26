
interface State {
   name: string;
   insertMoney():   void;
   selectProduct(): void;
   dispenseProduct(): void;
}

class VendingMachine {
   private state: State

   constructor(){
      this.state = new WaiterMoney( this )
   }
   
   insertMoney(): void {
      this.state.insertMoney()
   }
   
   selectProduct(): void {
      this.state.selectProduct()
   }
   
   dispenseProduct(): void {
      this.state.dispenseProduct()
   }

   setState(state: State){
      console.log(`%cEl State (${ state.name }) changed!!`, "color: lightblue");
      this.state = state;
   }

   getStateName(): string {
      return this.state.name
   }

}

class WaiterMoney  implements State {

   name: string = "Esperanding for money";
   
   constructor(
      private vendingMachine: VendingMachine
   ){}

   insertMoney(): void {
      console.log("%cDinero insertado: Ahora puedes seleccionar un producto.", "color: green;");
      this.vendingMachine.setState( new ProductSelected(this.vendingMachine) )
   }

   selectProduct(): void {
      console.log( "%cPrimero debes insertar la feria", "color: red;" );
   }

   dispenseProduct(): void {
      console.log( "%cPrimero debes de insertar la feria, vato!!", "color: red;" );
   }

}

class ProductSelected implements State {

   name: string = "Seleccionando producto";
   
   constructor(
      private vendingMachine: VendingMachine
   ){}

   insertMoney(): void {
      console.log("%cPor favor selecciona un producto - dinero ya insertado.", "color: red;");
   }

   selectProduct(): void {
      console.log("%cProducto seleccionado", "color: green;");
      this.vendingMachine.setState( new DispatcherProduct( this.vendingMachine ) )
   }

   dispenseProduct(): void {
      console.log("%cPor favor selecciona un producto - antes de despacharlo",  "color: red;");
   }

}

class DispatcherProduct implements State {

   name: string = "despachando producto";
   
   constructor(
      private vendingMachine: VendingMachine
   ){}

   insertMoney(): void {
      console.log("%cPor favor espere a despachar producto ", "color: red;");
   }

   selectProduct(): void {
      console.log("Producto ya seleccionado listo para despachar", "color: red;");
   }
   
   dispenseProduct(): void {
      console.log("%cEntregando el Producto", "color: green;");
      this.vendingMachine.setState( new WaiterMoney(this.vendingMachine) )
   }

}

const vm = new VendingMachine();

const wm = new WaiterMoney(vm);
wm.insertMoney();
wm.selectProduct();
wm.dispenseProduct();
console.log("\n");

const ps = new ProductSelected(vm)
ps.insertMoney();
ps.selectProduct();
ps.dispenseProduct();
console.log("\n");

const dp = new DispatcherProduct(vm);
dp.insertMoney()
dp.selectProduct()
dp.dispenseProduct()
console.log("\n");