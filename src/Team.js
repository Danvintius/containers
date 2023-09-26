export default class Team {
    constructor() {
        this.members = new Set();
    }
    
    add(character) {
            if (this.members.has(character)) {
                    throw new Error("Этот персонаж уже есть");
            } else {
                this.members.add(character);
            }
        
}

    addAll(...characters) {
        this.members.add(...characters)
}

     toArray(characters) {
	    let arr = Array.from(characters);
	    return arr;
}
}