var k = "random string:"
var m = document.body.innerText.substring(document.body.innerText.indexOf(k)+k.length + 1, document.body.innerText.indexOf("==") + 2);
window.location = "https://www.hellboundhackers.org/challenges/timed/timed1/index.php?b64=" + atob( m );
