var a = Number(prompt('Input a'));
var b = Number(prompt('Input b'));
var c = Number(prompt('Input c'));  
var d = b * b - 4 * a * c;
var result1 = (-b + d) / 2 * a;
var result2 = (- b - d) / 2 * a;

function count(a, b, c, d) {
    if (d <= 0) {
            return 'False';
    } else if (d > 0) {
          return d;
    }
}
document.write(d);

/*var a = Number(prompt('Input a'));
var b = Number(prompt('Input b'));
var c = Number(prompt('Input c')); 

function answer()
{
var root = Math.pow(b, 2) - 4 * a * c;
var answer1 = (-b + Math.sqrt(root)) / 2*a;
var answer2 = (-b - Math.sqrt(root)) / 2*a;
     if(root<'0')
     {
     alert('This equation has no real solution.')
     }else{
              if(root=='0')
              {          
              quad.answerOne.value = answer1
              quad.answerTwo.value = 'No Second Answer'
              }else{
                   quad.answerOne.value = answer1
                   quad.answerTwo.value = answer2
                   }
          }
}*/