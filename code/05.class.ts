// Javascript的class的靜態方法(新的)：
class Animal{
    static isAnimal(a){
        return a instanceof Animal;
    }
}
let dog = new Animal();
Animal.isAnimal(dog);


// Typescript的class的靜態屬性：
class Dog{
    static age = 20;
}
console.log(Dog.age);

// ※ 靜態是跟class(類)有關，與實例無關。


// 定義類屬性(舊寫法)：
class Abc{
    constructor(a,b,c){
        this.a = a;
        this.b = b;
        this.c = c;
    }
}

let aa = new Abc(1,2,3);

// 定義類屬性(新寫法)：
class Cba{
    a = 1;
    b = 3;
    c = 5;

    // 修改值
    constructor(){
        this.a = 2;
        this.b = 4;
        this.c = 6;
    }
}

/*
    ※ class屬性有三種訪問的修飾符可進行修飾：
        1.public：公有的，任何地方都可以訪問，默認所有屬性為public。
        2.private：私有的，只能再類內部訪問，外面無法訪問。
        3.protect：受保護的，可以在子類訪問 (private不允許)，外面無法訪問。

        例一：private
            class Bannana{
                private name
                public constructor(name){
                    this.name = name;
                }
            }

            let banna = new Banana('海南香蕉');
            console.log(banna.name); // 報錯，因name為私有屬性，不能獲取/訪問。
            banna.name = '巴黎香蕉'; // 報錯，因name是私有屬性，不能修改/訪問。

        例二：protect：
        class Apple{
            protected name;
            constructor(name){
                this.name = name;
            }
        }

        class BigApple extends Apple{
            constructor(name){
                super(name);
                console.log(this.name); // protect在子類中允許訪問
            }
        }

    ● 例三：如果構造函數是私有的(private)不能實例化
        class MiddApple extends Apple{
            private contructor(name){
                super(name);
                console.log(this.name);
            }
        }

        let apple = new MiddApple('test'); // 報錯，如果構造函數是私有的將不能實例化

*/
// private：私有的，只能再類內部訪問，外面無法訪問。
class Bannana{
    private name;
    public constructor(name) {
        this.name = name;
    }
}

let banna = new Bannana('海南香蕉');
// console.log(banna.name); // 報錯，因name為私有屬性，不能獲取/訪問。
// banna.name = '巴黎香蕉'; // 報錯，因name是私有屬性，不能修改/訪問。


// protect：受保護的，可以在【子類訪問】 (private不允許)，外面無法訪問。
class Apple{
    protectd name;
    constructor(name){
        this.name = name;
    }
}

class BigApple extends Apple{
    constructor(name){
        super(name);
        console.log(this.name); //  子類可以訪問
    }
}
let bigApple = new BigApple('加州');


// 如果構造函數是私有的(private)不能實例化
class MiddApple extends Apple{
    private constructor(name){
        super(name);
    }
}
// let middApple = new MiddApple('日本'); // 報錯，構造函數是私有的(private)不能實例化


/*
    抽象類：抽象類不允許實例化，一般用於繼承實現。
    abstract class PinkPig{
        public name;
        constructor(name){
            this.name = name;
        }

        // 只定義，不實現
        public abstract sayHi();
    }

    class SmallPinkPig extends Pinkpig{
        sayHi(){
            console.log('Hello World');
        }
    }
*/
// 抽象類：只定義，不實現
class PinkPig{
    public name;
    constructor(name){
        this.name;
    }
    public abstract sayHi(); // 只定義
}

class SmallPinkPig extends PinkPig{
    sayHi(){
        console.log('Hell World!'); // 繼承實現
    }
}
