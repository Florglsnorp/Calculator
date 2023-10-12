var tempNum = "0"

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