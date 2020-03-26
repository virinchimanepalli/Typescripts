export {}
let msg = 'hello_world ra';
console.log(msg);
 
let x = 10;
const y =20;
const title ='coding is not easy'


let isBegginer: boolean = true;
let total: number = 0;
let name: string = 'virinchi';
let sentence: string = `my name is ${name} and i am very smart`;

console.log(sentence)

let isNew: boolean = null;
let myName: string = undefined;
 
let list1: number[] =[1,2,3];
let list2: Array<number> = [1,3,2];
let person1: [string,number] = ['vir',22] 
// fixed number of values and also order has to be match
console.log(person1)
enum color {Red,green,pink}
enum colora {Red,green,pink,orange = 10}

let c: color = color.green
let d: colora =colora.orange
console.log(c)
console.log(d)
// type any i can by any methon
let randomnum: unknown = 11
//  randomnum.name
//  randomnum ='true'
//  randomnum =true

  
// obj as parameter of type any and return name as string and name property exist in the object
function hasName(obj: any): obj is {name:string}{ 
    return !!obj&&
        typeof obj === "object" &&
        "name" in obj
}

if (hasName(randomnum)){
    console.log(randomnum)
}


 let m :number|boolean;
 m = 25;
 m = true;
 m = false;

//  anytype has no restrictions
 let n : any;
 n =25;
 n ="string"
 n = true
 n = false
 n = [1,2,4]
 console.log(n)

//  functions

// optional parameters(num?:) 
function added(num1:number, num2?:number): number{
    return num1 +num2;
}
added(1,3)
function add(num1:number, num2:number=10): number{
    return num1 +num2;
}
n = add(5,10)
console.log(n)
n = add(4);
console.log(n)


// interface
interface person{
    firstname: string;
    lastname: string;
    wifename?: number;
}

function list(name: person){
    console.log(`${name.firstname} ${name.lastname} ${name.wifename}`);
}

let p ={
    firstname: 'rishita',
    lastname:'manepalli',
    // wifename:143
}

list(p)

// classes
class office{
    public worker: string
    top:string

    constructor(wname: string){
        this.top = wname
        this.worker = wname
    }

    greet(){
        console.log(`good afternoon mr bloody work mr. ${this.worker}`)
    }
}
 
let obj =  new office('aakash');
console.log(obj.top)
obj.greet()
 
// to extend this class that mean to use the parameters in office class.

class manager extends office{
    constructor(k: string){
        super(k)
    }
    exnd(){
        console.log( `${this.worker} have to be prinde using extention`)
    }
}

let m1 = new manager("rahul")
m1.exnd()
m1.greet()


class employee extends office{
    constructor(l: string){
        super(l)
    }
    Test(){
        let carrot: string ="hello"
        console.log(`practice done`)
        console.log(carrot)
    
    }
}

let m2 = new employee("ravi is given")
m2.Test()
console.log( m2.top)