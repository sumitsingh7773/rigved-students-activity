class Calci {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    addition() {
        return (this.x + this.y);
    }
    findMin(...i) {
        let temp = i[0]; // temp = -4
        i.forEach((item) => {
            if(item < temp) { // item = 70 < 20
                temp = item;
            }
        });
        return temp;
    }
}
let c1 = new Calci(525, 223);
let r = c1.addition();
console.log(`Result = ${r}`);
let min = c1.findMin(40, -3, -8, 95);
console.log(`Min value is: ${min}`);