import { title } from "process";

class Strings {
    title: string;
    content: string;
    constructor(title:string,content:string) {
        this.title = title;
        this.content = content;
    }
}

const card1 = new Strings("Sobre mim","This will generate a random Lorem Ipsum text with the specified number of paragraphs, sentence length, and formatting. You can adjust the parameters according to your needs.");
const card2 = new Strings("Stacks","This will generate a random Lorem Ipsum text with the specified number of paragraphs, sentence length, and formatting. You can adjust the parameters according to your needs.");
const card3 = new Strings("Ainda nao sei","This will generate a random Lorem Ipsum text with the specified number of paragraphs, sentence length, and formatting. You can adjust the parameters according to your needs.This will generate a random Lorem Ipsum text with the specified number of paragraphs, sentence length, and formatting. You can adjust the parameters according to your needs.");


export { card1, card2, card3 };
