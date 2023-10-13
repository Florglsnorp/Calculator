var tempNum = "0"
var number1 = ""
var number2 = ""
var operator = ""
var answer = ""

function addNum(x)
{
    if (tempNum[0] == 0)
    {
        if (tempNum[1] == ".")
        {
            tempNum += x
            document.getElementById("steve").innerHTML = tempNum
        }
        else
        {
            tempNum = tempNum.substring(0, tempNum[0])
            tempNum += x
            document.getElementById("steve").innerHTML = tempNum
        }
    }
    else
    {
        tempNum += x
        document.getElementById("steve").innerHTML = tempNum
    }
}

function backspace()
{
    if (tempNum.length == 0)
    {
        tempNum = "0"
        document.getElementById("steve").innerHTML = tempNum
    }
    else
    {
        tempNum = tempNum.substring(0, tempNum.length - 1)
        if (tempNum.length == 0)
        {
            tempNum = "0"
            document.getElementById("steve").innerHTML = tempNum
        }
        else
        {
            document.getElementById("steve").innerHTML = tempNum
        }
    }
    return result
}

function saveNum(op){
    if(number1 == ""){
        number1 = tempNum
        tempNum = "0"
        console.log(number1)
    }else if(number2 == ""){
        number2 = tempNum
        tempNum = "0"
        console.log(number2)
    }
    if(number1 != "" && number2 != ""){
        calculate()
        number1 = answer
        number2 = ""
    }
    operator = op
}

function calculate(){
    if(operator == "+"){
        answer = Number(number1) + Number(number2)
    }else if(operator == "-"){
        answer = Number(number1) - Number(number2)
    }else if(operator == "*"){
        answer = Number(number1) * Number(number2)
    }else{
        answer = Number(number1) / Number(number2)
    }
    document.getElementById("steve").innerHTML = answer
    number2 = ""
    number1 = ""
    operator = ""
}

function decimal()
{
    if (tempNum.indexOf(".") == -1)
    {
        tempNum += "."
    }
    document.getElementById("steve").innerHTML = tempNum
}

function clearNums()
{
    number1 = ""
    number2 = ""
    operator = ""
    tempNum = "0"
    document.getElementById("steve").innerHTML = tempNum
}