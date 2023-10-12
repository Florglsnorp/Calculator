var tempNum = "0"
var number1 = "0"
var number2 = "0"
var operator = ""

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

function clear(){
    tempNum = "0"
    console.log(tempNum)
    console.log("test")
}

function calculate(){
    var result = 0
    if(operator == "+"){
        result = num1 + num2
    }else if(operator == "-"){
        result = num1 - num2
    }else if(operator == "*"){
        result = num1 * num2
    }else{
        result = num1 / num2
    }
    return result
}