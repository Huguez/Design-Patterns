
type Key = string;
type Value = string;

class ConfigManager {
   private config: Record<Key, Value> = {};

   public setConfig(key: Key, value: Value): void {
      this.config[key] = value;
   }

   public getConfig(key: Key): Value {
      return this.config[key]
   }

   public getAllConfig(){
      return { ...this.config };
   }
}

// this is our Singleton
export const configManager = new ConfigManager()