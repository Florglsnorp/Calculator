var tempNum = "0"
var number1 = "0"
var number2 = "0"
var operator = ""
var answer = ""

function addNum(x)
{
    if (tempNum[0] == 0)
    {
        tempNum = tempNum.substring(0, tempNum[0])
        tempNum += x
        console.log(tempNum)
    }
    else
    {
        tempNum += x
        console.log(tempNum)
    }
}

function backspace()
{
    if (tempNum.length == 0)
    {
        tempNum = "0"
        console.log(tempNum)
    }
    else
    {
        tempNum = tempNum.substring(0, tempNum.length - 1)
        if (tempNum.length == 0)
        {
            tempNum = "0"
            console.log(tempNum)
        }
        else
        {
            console.log(tempNum)
        }
    }
    return result
}

function op(symbol){
    if(operator == ""){
        number1 = tempNum
        tempNum = "0"
        operator = symbol
    }else if(operator = "+"){
        number2 = tempNum
        tempNum = "0"
        answer = calculate()
        number1 = answer
        console.log(number1)
    }
}

function calculate(){
    var result = 0
    if(operator == "+"){
        result = Number(number1) + Number(number2)
    }else if(operator == "-"){
        result = Number(number1) - Number(number2)
    }else if(operator == "*"){
        result = Number(number1) * Number(number2)
    }else{
        result = Number(number1) / Number(number2)
    }
    return result
}