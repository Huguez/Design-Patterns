
class User {

   constructor(
      private _email: string,
      private chatRoom: ChatRoom,
   ) {
      chatRoom.addUser(this)
   }

   get email() {
      return this._email
   }

   receivedMessage(message: string, sender: User) {
      console.log(`New Message\nUser: ${sender.email}\nmessage: ${message}`);
   }

   sendMessage(message: string) {
      console.log(`\n\n${this.email} send message`);
      this.chatRoom.sendMessage(this, message)
   }

}

class ChatRoom {
   private users: User[] = []

   constructor(
      public title: string,
   ) { }

   addUser(newUser: User): void {
      this.users.push(newUser);
   }

   sendMessage(sender: User, message: string): void {
      const userToSend = [...this.users.filter(user => user.email !== sender.email)]

      for (const user of userToSend) {
         user.receivedMessage(message, sender)
      }
   }

}

const chatRoom = new ChatRoom("los funados")

const user1 = new User("user 1", chatRoom);
const user2 = new User("user 2", chatRoom);
const user3 = new User("user 3", chatRoom);

user1.sendMessage("Holis a todes")
user2.sendMessage( "simon carnal" )
user3.sendMessage( "como chingan!!!" )