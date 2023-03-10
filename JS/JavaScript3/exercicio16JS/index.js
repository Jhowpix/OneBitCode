class book {
    contructor(title){
    this.title = title;
    this.published = false;
    }
    publish(){
        this.published = true;
    }
}

const eragon = new book("Erogon");
const eldest = new book("Eldest");

eragon.publish();

console.log(eragon);
console.log(eldest);

console.log(eragon instanceof book )