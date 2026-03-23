
interface Notificacion {
   send(msg: string): void;
}

class BasicNotificacion implements Notificacion {

   send(msg: string): void {
      console.log(`notificacion basica enviada (${msg})`);
   }

}

abstract class NotificationDecorator implements Notificacion {

   protected notificacion: Notificacion;

   constructor(notificacion: Notificacion) {
      this.notificacion = notificacion;
   }

   send(msg: string): void {
      this.notificacion.send(msg);
   }
}

class EmailDecorator extends NotificationDecorator {

   private sendEmail(msg: string) {
      console.log(`se mando email ( ${msg} )`);
   }

   override send(msg: string): void {
      super.send(msg)
      this.sendEmail(msg);
   }
}

class SMSDecorator extends NotificationDecorator {

   private sendSMS(msg: string) {
      console.log(`se mando SMS ( ${msg} )`);
   }

   override send(msg: string): void {
      super.send(msg)
      this.sendSMS(msg);
   }
}


let noti: Notificacion = new BasicNotificacion()
noti.send("wawa")

console.log( "" );
noti = new EmailDecorator(noti)
noti.send("wawa 2")

console.log( "" );
noti = new SMSDecorator(noti)
noti.send("wawa 3")
