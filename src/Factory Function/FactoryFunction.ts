
type Language = 'es' | 'en' | 'fr'

function createGreeter( lang: Language ){

   return function(name: string ){
      const message = {
         es: `Hola ${name}`,
         en: `Hello ${name}`,
         fr: `Bonjour ${name}`,
      }

      return console.log( message[lang] ); 
   }
}


const greeterEn = createGreeter( 'en' )
greeterEn( "Hacker D:" )

const greeterEs = createGreeter( 'es' )
greeterEs('vato !!');

const greeterFr = createGreeter( 'fr' )
greeterFr("Ulala y ya ")
