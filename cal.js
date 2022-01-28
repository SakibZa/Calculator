function dpl(val)
{
    
   document.getElementById('a').value+=val;
  
}
 
function Clear()
{
    document.getElementById('a').value="";
}
function Cal()
{

    var x=document.getElementById('a').value;
    if(x=="")
        {
            window.alert("Give Some Values");
           
        }
    else
        {
    var y=eval(x);
    document.getElementById('a').value=y;
        }
}
function Back()
{
    var x=document.getElementById('a').value.slice(0,-1);
    document.getElementById('a').value=x;
}
function Sqrt()
{
    var x=document.getElementById('a').value;
    if(x==""){
        
        window.alert("Give Some Values");
    }
    else
        {
    
    var y=Math.sqrt(x);
    document.getElementById('a').value=y;
        }
}
document.getElementById('one').onclick=function(){dpl('1');}
document.getElementById('two').onclick=function(){dpl('2');}
document.getElementById('three').onclick=function(){dpl('3');}
document.getElementById('four').onclick=function(){dpl('4');}
document.getElementById('five').onclick=function(){dpl('5');}
document.getElementById('six').onclick=function(){dpl('6');}
document.getElementById('seven').onclick=function(){dpl('7');}
document.getElementById('eight').onclick=function(){dpl('8');}
document.getElementById('nine').onclick=function(){dpl('9');}
document.getElementById('zero').onclick=function(){dpl('0');}



document.getElementById('plus').onclick=function(){dpl('+');}
document.getElementById('Sub').onclick=function(){dpl('-');}
document.getElementById('astric').onclick=function(){dpl('*');}
document.getElementById('divide').onclick=function(){dpl('/');}


document.getElementById('clear').onclick=function(){Clear();}
document.getElementById('cal').onclick=function(){Cal();}


document.getElementById('back').onclick=function(){Back();}

document.getElementById('Sqrt').onclick=function(){Sqrt();}

  document.getElementById('point').onclick=function(){dpl('.');}
  
  
  
  
  
  
  
  
  
  
  
   