var userId="shivakrishnaerumalla@gmail.com"
var pass="5217"
function logintohomepage()
{
    var userGivenID=document.getElementById("usid").value
    var userGivenPass=document.getElementById("pass").value
    if (userId==userGivenID&& pass==userGivenPass)
    {
        var fom=document.forms
        fom[0].action="./html/carpage.html"
        fom[0].elements[2].type="submit"
    }
    else if(userId==userGivenID&&pass!=userGivenPass)
    {
        document.getElementById("result").innerHTML="Wrong password Entered"
        document.getElementById("passdiv").style.borderColor="red"
        document.getElementById("emailDiv").style.borderColor="royalblue"
        document.body.style.backgroundImage="linear-gradient(75deg,rgb(255,0,162),red)"
    }
    else if(userId!=userGivenID&& pass==userGivenPass)
    {
        document.getElementById("result").innerHTML="Wrong UserId Entered"
        document.getElementById("passdiv").style.borderColor="royalblue"
        document.getElementById("emailDiv").style.borderColor="red"
        document.body.style.backgroundImage="linear-gradient(75deg,red,purple)"
    }
    else{
        document.getElementById("result").innerHTML="Wrong UserId and password"
        document.getElementById("emailDiv").style.borderColor="red"
        document.getElementById("passdiv").style.borderColor="red"
        document.body.style.backgroundImage="none"
        document.body.style.backgroundColor="red"
    }
}
function passvis()
{
    document.getElementById("pass").removeAttribute("type")
    document.getElementById("visible").setAttribute("src","./asset/open.png")
    document.getElementById("visible").style.transform="rotateY(360deg)"
    document.getElementById("visible").style.transition="transform 0.3s"
}
function passhide()
{
    document.getElementById("pass").setAttribute("type","password")
    document.getElementById("visible").setAttribute("src","./asset/close.png")
    document.getElementById("visible").style.transform="rotateY(-360deg)"
    document.getElementById("visible").style.transition="transform 0.3s"
}