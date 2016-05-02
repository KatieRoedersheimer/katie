var box=document.getElementById('display');
var x;

function addtoscreen(x) {
	box.value +=x;

	if(x=='c')

	{
		box.value='';
	}
}

function answer()
{
	x=box.value;
	x=eval(x);
	box.value= x;

}

function backspace()
{
	var number=box.value;
	var len=number.length-1;
	var newnumber=number.substring(0,len);
	box.value=newnumber;
}

/* Shake will talk about the power function */
function power(y) {
    x=box.value;
    x=Math.pow(x,y);
    box.value=x;
}


