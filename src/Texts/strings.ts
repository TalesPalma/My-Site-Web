import { title } from "process";

class Strings {
    title: string;
    content: string;
    constructor(title:string,content:string) {
        this.title = title;
        this.content = content;
    }
}

const card1 = new Strings("Sobre mim","teste");
const card2 = new Strings("Stacks","teste");
const card3 = new Strings("Ainda nao sei","teste");


export { card1, card2, card3 };
