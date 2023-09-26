export default class Character {
    constructor(name, type, health, level, attack, defence) {
      this.name = name;
      this.type = type;
      this.health = 100;
      this.level = 1;
      this.attack = attack;
      this.defence = defence; 
      }
    }

    export let mag = new Character('Маг', 'Magician')
    export let man = new Character('Джон', 'Bowman')