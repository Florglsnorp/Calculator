var tempNum = "0"

var num1 = 0
var num2 = 0
var check = false
var operator = "set"

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
    tempNum = "0"
    document.getElementById("steve").innerHTML = tempNum
}

function operation(x)
{
    if (check == false)
    {
        if (x != "=")
        {
            num1 = Number(tempNum)
            tempNum = "0"
            document.getElementById("steve").innerHTML = tempNum
            check = true
            operator = x
        }
    }
    else
    {
        if (operator == "+")
        {
            console.log(num1 + (Number(tempNum)))
            document.getElementById("steve").innerHTML = (num1 + (Number(tempNum)))
            num2 = num1 + (Number(tempNum))
            tempNum = "0"
            operator = ""
        }
        else if (operator == "-")
        {
            document.getElementById("steve").innerHTML = (num1 - (Number(tempNum)))
            num2 = num1 - (Number(tempNum))
            tempNum = "0"
            operator = ""
        }
        else if (operator == "x")
        {
            document.getElementById("steve").innerHTML = (num1 * (Number(tempNum)))
            num2 = num1 * (Number(tempNum))
            tempNum = "0"
            operator = ""
        }
        else if (operator == "÷")
        {
            document.getElementById("steve").innerHTML = (num1 / (Number(tempNum)))
            num2 = num1 / (Number(tempNum))
            tempNum = "0"
            operator = ""
        }
        check = false
    }
}