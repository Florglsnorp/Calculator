var tempNum = "0"
var number1 = "0"
var number2 = "0"
var operator = ""
var answer = ""

var paul = document.createElement("h1")
paul.setAttribute = ("id", "steve")

function addNum(x)
{
    if (tempNum[0] == 0)
    {
        if (tempNum[1] == ".")
        {
            tempNum += x
            paul.innerHTML = tempNum
            document.getElementById("steve").replaceWith(paul)
        }
        else
        {
            tempNum = tempNum.substring(0, tempNum[0])
            tempNum += x
            paul.innerHTML = tempNum
            document.getElementById("steve").replaceWith(paul)
        }
    }
    else
    {
        tempNum += x
        paul.innerHTML = tempNum
        document.getElementById("steve").replaceWith(paul)
    }
}

function backspace()
{
    if (tempNum.length == 0)
    {
        tempNum = "0"
        paul.innerHTML = tempNum
        document.getElementById("steve").replaceWith(paul)
    }
    else
    {
        tempNum = tempNum.substring(0, tempNum.length - 1)
        if (tempNum.length == 0)
        {
            tempNum = "0"
            paul.innerHTML = tempNum
            document.getElementById("steve").replaceWith(paul)
        }
        else
        {
            paul.innerHTML = tempNum
            document.getElementById("steve").replaceWith(paul)
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
        calculate()
        number1 = answer
        console.log(number1)
    }else if(operator = "-"){
        calculate()
        number1 = answer
        console.log(number1)
    }else if(operator = "*"){
        calculate()
        number1 = answer
        console.log(number1)
    }else{
        calculate()
        number1 = answer
        console.log(number1)
    }
}

function calculate(){
    number2 = tempNum
    tempNum = "0"

    if(operator == "+"){
        answer = Number(number1) + Number(number2)
    }else if(operator == "-"){
        answer = Number(number1) - Number(number2)
    }else if(operator == "*"){
        answer = Number(number1) * Number(number2)
    }else{
        answer = Number(number1) / Number(number2)
    }
    console.log(answer)
    return answer
}

function decimal()
{
    if (tempNum.indexOf(".") == -1)
    {
        tempNum += "."
    }
    paul.innerHTML = tempNum
    document.getElementById("steve").replaceWith(paul)
}

function clearNums()
{
    tempNum = "0"
    paul.innerHTML = tempNum
    document.getElementById("steve").replaceWith(paul)
}