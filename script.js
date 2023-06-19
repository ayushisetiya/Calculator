function clearScreen()
{
  document.getElementById("result").value="";
}
function display(value)
{ var k=document.getElementById("result").value;
var ch=k[k.length-1]
if((ch==='/'||ch==='+'||ch==='-'||ch==='*')&&ch===value)
document.getElementById("result").value+="";
// console.log(k[k.length-1])
else
  document.getElementById("result").value +=value;
}
function calculate()
{
  var p=document.getElementById("result").value
  q=eval(p)
  document.getElementById("result").value=q;

}