/*
    設定陣列的類型：
        若陣列未聲明類型，且都是數值，類型推斷為數值類型。
        若陣列未聲明類型，有數值有字符串，類型推斷為any。

        let arr = [1,2,3,'4'];

        arr.push('4'); // 數值類型報錯、any可以
        arr.push(4);

        ● 設定陣列類型的方式一：較常用
            let arr2:number[] = [1,2,3];
            arr2.push(4);
            arr2.push('4'); // 會報錯


        ● 設定陣列類型的方式二：較常用
            let arr3:Array<number> = [1,2,3];
            arr3.push(4);
            arr3.push('4'); // 會報錯

        ● 介面表示陣列類型(不常使用)：
            interface NumberArray{
                [index:number]:number
            }

            let arr4:NunberArray = [1,2,3];
            arr4.push(4); // 會報錯
            arr4.push('4'); // 會報錯
*/
let arr = [1,/*'2'*/ 2,3];
// 若陣列未聲明類型，且都是數值，類型推斷為數值類型。
// 若陣列未聲明類型，有數值有字符串，類型推斷為any。

// arr.push('4'); // 數值類型報錯、any可以
arr.push(4);


// 設定陣列類型：
// 1.方式一：較常用
let arr2:number[] = [1,2,3];
arr2.push(4);
// arr2.push('4'); // 會報錯

// 2.方式二：較常用
let arr3:Array<number> = [1,2,3];
arr3.push(4);
// arr3.push('4'); // 會報錯

// 3.介面表示陣列類型(不常使用)：
interface NumberArray{
    [index:number]:number;
}

let arr4:NumberArray = [1,2,3];
arr4 = [4];
// arr4.push(4); // 會報錯
// arr4.push('4'); // 會報錯
