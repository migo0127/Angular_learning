/*
    一、Typescript 數據類型()：
        (一)、原始數據類型：布爾值、數值、字符串、null、nudefined。
            ※ 補充：void類型。

        (二)、任意值類型：any。
            ※ 補充：未聲明類型的變量。

        (三)、聯合類型：|。

        (一)、原始數據類型：布爾值、數值、字符串、null、nudefined。

            1.布爾值類型定義：
                let isDone:boolean = true;
                isDone = false;

                let isCheck:boolean = Boolean(1);

                ※ 錯誤方式：因為 new Boolean() 返回的是一個物件類型。
                let isOk:boolean = new Boolean(1);

            2.數值類型定義：
                let num:number = 1;
                let num16:number = 0xf00a;
                let notNum:number = NaN;
                let infNum:number = Infinity;

            3.字符串類型定義：
                let username:string = 'DL';
                let age:number = 28;
                let jizi:string = `我的年齡是${age}`;

            ※補充：void類型(空值)
                大部份情況下用於定義函數沒有返回值，一般不用於定義變量，因此一旦定義變量為void類型，
                那麼就只能賦值 undefined 或 null。

                function sayHey():void{
                    console.log("Hello World！");
                }

                let unable:void = undefined;
                unable = null;

                nuable = 123; // 報錯

            4.null 和 undefined 類型定義：意義不大。
                let unde:undefined = undefined;
                unde = null;

                let nul:null = null;
                nul = undefined;

                ※ 注意：
                    null 和 undefined 是【所有】類型的子類型，故都可以賦值，但是void的值雖然也是
                    null / undefined，但其類型是 void，故不可賦值給其他類型(布爾、數值、字符串)。

                    let name:string = 'AYG';
                    name = undefined;
                    name = null;

                    ● 可以：
                    let abc:undefined = undefined;
                    name = abc;

                    ● 錯誤：
                    let cba:void = undefined;
                    name = cba; // 報錯

        (二)、任意值類型：any。
            5.任意值類型：any 用來表示允許任意值類型賦值。
                let anything:any = 123;
                anything = 'test';
                anything = undefined;

                let vo:void = null;
                anything = void;

            ※ 補充：未聲明類型的變量。
                6-1.在聲明變量時【未定義類型】也【沒有賦值】，就會被定義為【任意值類型】。

                    let something;
                    something = 123;
                    something = 'abc';

                6-2.類型推斷：在聲明變量時【未定義類型】但【有賦值】，則Typescript有類型推斷規則，
                  會將賦值的類型定義成變量的類型。

                  let infer = 1; // 未聲明類型，但有賦值數值，故推斷為數值類型。
                  infer = 'change'; // 報錯

                  let infer2 = 'test'; // 未聲明類型，但有賦值字符，故推斷為字符串類型。
                  infer2 = 1; // 報錯。

        (三)、聯合類型：|。
            7.表示取值可以取多個類型：
                let joint:string|number;
                joint = 123;
                joint = 'test';

                let joint2:string|number = 'change';
                joint = 123;

*/
// 1.布爾值類型：
let isDone:boolean = true;
isDone = false;

let isCheck:boolean = Boolean(1);

// ※ 錯誤方式：因為 new Boolean() 返回的是一個物件類型。
// let isOk:boolean = new Boolean(1);


// 2.數據類型：
let num:number = 1;
let num16:number = 0xf00a;
let notNum:number = NaN;
let infNum:number = Infinity;


// 3.字符串類型：
let username:string = 'DL';
let age:number = 30;
let juzi:string = `我的年齡是${age}`;


// 補充：void類型(空值)：多用於定義函數沒有返回值，若定義於變量，只能賦值 undefined 或 null，故不使用。
function sayHey():void{
    console.log('Hello World');
}

let unable:void = undefined;
unable = null;
// unable = 123; // 報錯


// 4.null 和 undefined 類型：但定義為變量意義不大，故不使用。
let unde:undefined = undefined;
unde = null;

let nu:null = null;
nu = undefined;

/*
※ 注意：
    null 和 undefined 是【所有】類型的子類型，故都可以賦值，但是void的值雖然也是
    null / undefined，但其類型是 void，故不可賦值給其他類型(布爾、數值、字符串)。
*/
let names:string = 'AYG';
names = undefined;
names = null;

// 可以：
let abc:undefined = undefined;
names = abc;

// 錯誤：
let cba:void = undefined;
// names = cba; // 報錯


// 5.任意值類型：any
let anything:any = 123;
anything = 'test';
anything = undefined;

let vo:void = null;
anything = vo;

// ※ 補充：未聲明類型的變量。
// 6-1.未聲明變量的類型也未賦值。
let something;
something = 12;
something = 'test';

// 6-2.未聲明變量，但有賦值。
let infer = 'change'; // 類型推斷，typescript會自動推斷該變量為字符串類型。
// infer = 12; // 報錯


// 7.聯合類型：|
let joint:string|number;
joint = 123;
joint = 'test';

let joint2:string|number = 'change';
joint2 = 123;
