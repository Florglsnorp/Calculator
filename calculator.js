var tempNum = "0"



function addNum(x)
{
    if (tempNum[0] == 0)
    {
        if (tempNum[1] == ".")
        {
            tempNum += x
            console.log(tempNum)
        }
        else
        {
            tempNum = tempNum.substring(0, tempNum[0])
            tempNum += x
            console.log(tempNum)
        }
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
}

function decimal()
{
    if (tempNum.indexOf(".") == -1)
    {
        tempNum += "."
    }
    console.log(tempNum)
}

function clearNums()
{
    tempNum = "0"
    console.log(tempNum)
}