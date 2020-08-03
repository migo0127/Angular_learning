/*
    一、Typescript：
        會對函數的輸入和輸出值有約束，輸入和輸出需要定義類型，參數傳入(參數定義類型)，返回值(定義類型)。

        ● Javascript：函數聲明寫法
            function fuSum(x,y){
                return x+y;
            }
                ↓
        ● Typescript：函數聲明寫法
            function fnSum(x:number,y:number):number{
                return x+y;
            }

        ● Javascript：函數表達式寫法
            let fnSum2 = function(x,y){
                return x+y;
            }

                ↓
        ● Typescript：函數表達式寫法(寫法比較麻煩)
            let fnSum:(x:number,y:number) => number = function(x:number,y:number):number{
                return x+y;
            }

        ※ 函數表達式中的【=>】：
            在Typescript中用於函數的定義(非箭頭函式)，左邊輸入類型，右邊輸出類型。

    二、Typescript中函數的參數是不能隨意傳【任意數量】的值：
            function sumName(firstname:string,lastname:string):string{
                return firstname+lastname;
            }

            sunName('D','L');
            sumName('D'); // 報錯
            sunName('D','L','L'); // 報錯

    三、Typescript中函數的可選參數寫法：
            可選參數必須放置在必須參數的後面，可選參數後面不允許放置必須參數。
                function sumName2(firstname:string,lastname?:string):string{
                    return firstname+lastname;
                }

                sunName2('D');

                function sunName3(lastname?:string,firstname:string):string{
                    return firstname+lastname;
                } // 報錯

    四、Typescript中函數的默認參數值寫法：
            function sumName4(firstname:string="D",lastname:string='L'):string{
                return firstname+lastname;
            }

            sumName4('A');
            sumName4('A','Y');
            sumName4('A','Y','G'); // 報錯

    五、Typescript中函數的剩餘參數寫法：
            ● Javascript ES6寫法：
                function sumPush(...items):{

                }
                    ↓
            ● Typescropt寫法：
                function sumPush2(...item:any[]):void{

                }

    六、重載：允許一個函數接收不同數量或者類型的參數
        function setAbc(x:number|string):number|string{
            return x;
        }

        function fnAbc(x:number):number{
            return x;
        }
        function fnAbc(x:string):string{
            return x;
        }
        function fnAbc(x:number|string):number|string{
            return x;
        }

*/

// Javascript函數聲明寫法：
function fnSum(x,y){
    return x+y;
}

// Typescript函數聲明寫法：
function fnSum2(x:number,y:number):number{
    return x+y;
}

// Javascript函數表達式寫法：
let  fnSum3 = function(x,y){
    return x+y;
}

// Typescript函數表達式寫法：
let fnSum4:(x:number,y:number) => number = function (x:number,y:number):number{
    return x+y;
}


// Typescript中函數的參數是不能隨意傳【任意數量】的值：
function sumName(firstname:string,lastname:string):string{
    return firstname+lastname;
}
sumName('D','L');
// sumName('D'); // 報錯
// sumName('D','L','L') // 報錯


// Typescript中函數的可選參數寫法：
function sumName2(firstname:string,lastname?:string):string{
    return firstname+lastname;
}
sumName2('D');
sumName2('D','L');
// sumName2('D','L','L'); // 報錯


// Typescript中函數的默認參數值寫法：
function sumName3(firstname:string='D',lastname:string='L'){
    return firstname+lastname;
}
sumName3('A');
sumName3('A','Y');
// sumName3('A','Y','G'); // 報錯


// Typescript中函數的剩餘參數寫法：
// Javascript ES6寫法：
function sumPush(...items){

}

// Typescript寫法；
function sumPush2(...items:any[]):void{

}


// 重載：允許一個函數接收不同數量或者類型的參數
function setAbc(x:number|string):number|string{
    return x;
}

