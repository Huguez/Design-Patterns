
(()=>{
   interface Report {
      generate(): void;
   }
   
   class SalesReport implements Report {

      generate(): void {
         console.log( "Generando reportes de ventas" );
      }

   }

   class InventoryReport implements Report {

      generate(): void {
         console.log( "Generando reportes de inventario" );
      }

   }

   abstract class ReportFactory {
      
      protected abstract createReport(): Report

      generateReport(){
         const report = this.createReport()
         return report.generate()
      }
   }

   class SalesReportFactory extends ReportFactory {

      createReport(): Report {
         return new SalesReport();
      }

   }

   class InventoryReportFactory extends ReportFactory {

      createReport(): Report {
         return new InventoryReport()
      }

   }

   const salesReportFactory = new SalesReportFactory()
   salesReportFactory.generateReport()


   const inventoryReportFactory = new InventoryReportFactory()
   inventoryReportFactory.generateReport()
   
})();