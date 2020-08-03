/*
    Typescript介面(陸：接口)：
        行為的抽象。具體行為需要由類去實現(介面抽象出來的內容)。相當於定義類型的描述。

        1.介面：約束user這個物件，必須和介面一致屬性，一般皆口的首字母大寫，且屬性不可多寫，也不可少寫。
            interface Person{
                name:string;
                age:number;
            }

            let user:Person = {
                name:'DL',
                age:30, // 不可少寫，會報錯
                // height:187 // 不可多寫，會報錯
            }

        2.介面屬性可選：?，可寫可不寫，但屬性不可多寫。
            interface Student{
                name:string;
                age?:number;
            }

            let s1:Student = {
                name:'DL',
                // height:187 // 屬性不可多寫，會報錯
            }

        3.介面可定義任意的屬性：
            interface Teacher{
                name:string;
                age:number;
                [propName:string]:any;
            }

            let t1:Teacher = {
                name:'DL',
                age:30,
                height:187
            }

        4.介面只讀屬性：只能進行一次賦值，後面不可在修改，只能讀取屬性。
            interface Cat{
                readonly name:string;
                color:string;
                age:number;
            }

            let cat1:Cat = {
                name:'胖子',
                color:'橘白色',
                age:10
            }

            cat1.name = '秘密'; // 會報錯

        5.介面(Cat)限制在類裡面：
            class SmartCat implememts Cat{
                name:'秘密',
                color:'黑白色',
                age:7

                constructor(){

                }
            }

*/

// 1.介面寫法：
interface Person{
    name:string;
    age:number;
}

let user:Person = {
    name:'DL',
    age:30, // 不可少寫，會報錯
    // height:187 // 不可多寫，會報錯
}

// 2.介面屬性可選：
interface Student{
    name:string;
    age?:number;
}

let s1:Student = {
    name:'DL',
    // age:30 // 可寫可不寫
    // height:187 // 屬性不可多寫，會報錯
}

// 3.介面可定義任意的屬性：
interface Teacher{
    name:string;
    age:number;
    [propName:string]:any;
}

let t1:Teacher = {
    name:'DL',
    age:30,
    height:187
}

// 4.介面只讀屬性：，只能進行一次賦值，後面不可在修改，只能讀取屬性。
interface Cat{
    readonly name:string;
    color:string;
    age:number;
}

let cat1:Cat = {
    name:'胖子',
    color:'橘白色',
    age:30
}

// cat1.name = '秘密'; // 只能讀取，不可修改，會報錯。
console.log(cat1.name);

// 5.介面(Cat)限制在類裡面：
class SmallCat implements Cat{
    name:string = '秘密';
    color:string = '黑白色';
    age:number = 7;

    constructor(){

    }
}

let c2 = new SmallCat();
console.log(c2.name);


