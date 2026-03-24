
interface MyIterator<T> {
   next(): T | null;
   hasNext(): boolean;
   current(): T | null;
}

class Pokemon {
   constructor(
      private name: string,
      private type: string
   ) {}
}

class PokemonCollection {

   private pokemons: Pokemon[] = []
   
   constructor() {}

   addPokemon(pokemon: Pokemon){
      this.pokemons.push( pokemon )
   }

   getPokemonAt( index: number ): Pokemon | null {
      if ( index >= 0 && index < this.pokemons.length ) {
         return this.pokemons[index];
      }
      return null
   }

   getLength(): number {
      return this.pokemons.length
   }
   
   createIterator(): PokemonIterator  {
      return new PokemonIterator( this )
   }
}

class PokemonIterator implements MyIterator<Pokemon> {

   private position: number = 0;
   
   constructor(
      private collection: PokemonCollection,
   ){}

   next(): Pokemon | null {
      if ( !this.hasNext() ) {
         return null
      }
      
      return this.collection.getPokemonAt( ++this.position );
   }
   
   hasNext(): boolean {
      return this.position < this.collection.getLength()
   }

   current(): Pokemon | null {
      return this.collection.getPokemonAt( this.position );
   }

}

const pokedex = new PokemonCollection();

pokedex.addPokemon( new Pokemon("pokemon 1", "anonimo") )
pokedex.addPokemon( new Pokemon("pokemon 2", "anonimo") )
pokedex.addPokemon( new Pokemon("pokemon 3", "anonimo") )
pokedex.addPokemon( new Pokemon("pokemon 4", "anonimo") )
pokedex.addPokemon( new Pokemon("pokemon 5", "anonimo") )

const iterator = pokedex.createIterator()

while( iterator.hasNext() ){
   const aux =  iterator.current()
   console.log(aux);
   iterator.next()
}
