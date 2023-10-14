var toggleVariable=0;
//0 means dropdown list is close and 1 means open
function toggle(){
    var element=document.getElementById("dropdown")
    if(toggleVariable == 0)
    {
        toggleVariable=1;
        element.style.display="block"; 
    }
    else{
        toggleVariable=0
        element.style.display="none"; 
    }
}

var preScrollpos=window.pageYOffset
window.onscroll=function(){
    var curScrollpos=window.pageYOffset
    if(preScrollpos > curScrollpos)
    {
        document.getElementById("scrolling-header").style.top="0px"

    }
    else
    {
        document.getElementById("scrolling-header").style.top="-232px"
    }
    preScrollpos=curScrollpos
}

function addToCartOpen()
{
    document.getElementById("add-to-cart").style.left="1152px";
    document.getElementById("body").style.overflow="hidden"

}

function addToCartClose()
{
    document.getElementById("add-to-cart").style.left="1528px";
    document.getElementById("body").style.overflow="scroll"
}