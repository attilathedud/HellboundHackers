var k = "string is:"
var m = document.body.innerText.substring(document.body.innerText.indexOf(k)+k.length + 1, document.body.innerText.indexOf("The sum") -1).trim();
var sum = 0;
var numbers = m.match(/[^\D]/g);
for(var i = 0; i < numbers.length; i++) {
    sum += parseInt(numbers[i]);
}
document.getElementsByName("ans")[0].value = sum;
