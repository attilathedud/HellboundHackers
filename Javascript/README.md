## Javascript 1
Looking in the source reveals our straight-forward answer:
```
function pasuser(form){if(form.id.value=="partyhard2"){if(form.pass.value=="lifeisshort1"){location="index.php?user=partyhard2&pass=lifeisshort1"}
```

## Javascript 2
Simply stop the page while it is loading (or just disable alerts for the site), and browse the source to reveal:
```
<script language="JavaScript" src="level2script.js"></script>
```

Open up the script, and the answer is right there:
```
if (password=="level2done") {
```

## Javascript 3
Looking at the source reveals a load of encoding javascript - simply pop it into a url decoder to reveal our function:
```
function pasuser(form) {
var text2='lolage'
var text4='hahaomgz'
  if (form.text1.value==text2) { 
    if (form.text3.value==text4) {              
      location="index.php?text1=lol&text3=haha" 
    }
    else {
      alert("Invalid Password")
    }
  }
  else {
    alert("Invalid UserID")
  }
}
```

There seems to be an odd bug where pressing login doesn't work but hitting enter does. It may have something to due with the url location not properly reflecting our variables, but just hit enter to avoid it.

## Javascript 4
Hitting the Use This button reveals that the value of the button is POSTed. Since we know we need to use Javascript to access the cookie, we can insert some code inside the value of that button:
```
<input type="submit" name="submit" value="<script>alert(document.cookie)</script>">
```

When the page loads, this will be injected and reveal our cookie.

## Javascript 5
Kill the dialogue and look in the source to reveal script5.js:
```
date = new Date();
  year = date.getYear();
    b = year+12;
```

Evaluate this in the console and you will get your answer: 127.

## Javascript 6
Opening the script reveals our password:
```
Location="js6-"+"window.open"+".php"
```

This evaluates to "js6-window.open.php" which is our password.

## Javascript 7
First things first, kill the page while it is loading and grab our level's script; put through a nicifier, we get the following:
```
function password() {
  var part;
  var charsetPart;
  var BACKSPACE;
  var DEL;
  var key;
  /** @type {string} */
  part = window.document.bgColor;
  /** @type {string} */
  charsetPart = window.document.linkColor;
  /** @type {string} */
  BACKSPACE = part.substring(6, 9) + charsetPart.substring(2, 8);
  /** @type {string} */
  DEL = BACKSPACE.toUpperCase();
  /** @type {(null|string)} */
  key = prompt("Password:", "");
  if (key != BACKSPACE && key != DEL) {
    alert("Wrong!");
    /** @type {string} */
    window.location.href = "../index.php";
  } else {
    /** @type {string} */
    window.location.href = BACKSPACE + ".php";
  }
}
;
```

Easiest way forward from here is slightly reworking our function to alert the background color and then execute it in the page via our console:
```
function password() {
  var part;
  var charsetPart;
  var BACKSPACE;
  var DEL;
  var key;
  /** @type {string} */
  part = window.document.bgColor;
  /** @type {string} */
  charsetPart = window.document.linkColor;
  /** @type {string} */
  BACKSPACE = part.substring(6, 9) + charsetPart.substring(2, 8);
  /** @type {string} */
  DEL = BACKSPACE.toUpperCase();
  
  alert(BACKSPACE);
}
;
```

The alert will reveal our password.

## Javascript 8
Pop open the source to reveal:
```
document.cookie="secret=dd 3b 21 5f 23 9a 63 3f a6 ae 3c 31 64 3f 60 2e ea 3f 72 51 cf fd f0 fe"
```

This should flag you pretty quickly as hex; use a converter to translate it to ascii and you will get your password:
```
Ý;!_#šc?¦®<1d?`.ê?rQÏýðþ
```

## Javascript 9
The source reveals the variable holding our timer:
```
var c=34200;
```

Simply use the console to set this to a low value and the challenge solves itself.

## Javascript 10
Ripping the code from the checkpass() function, we can simply evaluate it in the console to get our answer:
```
rawr = unescape("%61%68%6f%79");
  string = "llama llama duck!";
  a = string.charCodeAt(1);
  b = string.charCodeAt(7);
  c = string.charCodeAt(4);
  schloob = (60 * 50 / 3 * a - b * c) / 2 / 5 + b;
  asdf = rawr + "_" + schloob;
```

## Javascript 11
Same idea as the last challenge:
```
var s = "Llama llama chicken duck, schloob mcfroob, moo asdf qwerty zxcv. Rawr llama kinasd, [insert random crap here]It's hammer on the keyboard time: sfsdfoashdfy78sdfysdfs67dftsdf 6tsdf76as tfa. Well I'm bored, so if you're still reading this I advise you to stop because you are wasting your time....dumbarse :)";
var asd = s.charCodeAt(14);
var fdsa = s.charCodeAt(42);
var sadfasf = s.charCodeAt(4);
var moo = s.charCodeAt(43);
var teeep = s.charCodeAt(32);
var asdf = asd + fdsa + sadfasf + moo + teeep;
```

## Javascript 12
Again, same idea:
```
z=2;x=z*1.5;v=z*2;w=v*1.75;y=v*1.25;abc=(((y*v*y*x+z)*x+w)*z+y)*v+w;
```

## Javascript 13
Finally, something different; immediate idea is to check our cookies - you should see a very obvious authorized cookie sitting there.

## Javascript 14
Opening the source reveals our function:
```
<script>a=screen.width;if(a!=800)
{alert('Sorry you do not have the right parameters!');}else{window.location='/challenges/js/js14/index.php?ans=9489d5f8e29b773dd6252dbb95e4f3c9'}</script>
```

Realistically we are supposed to set our screen width to 800, but it is far easier to just manually navigate to the window location noted.

## Javascript 15
Opening the source reveals an obfuscated function:
```
function checkpassword()
{
	password = document.password.password.value;
  var a = password.charAt(9)
	var c = password.charAt(4)
	var b = password.charAt(10)
	var d = password.charAt(7)
	var f = password.charAt(6)
	var e = password.charAt(1)
	var g = password.charAt(3)
	var i = password.charAt(0)
	var h = password.charAt(8)
	var j = password.charAt(13)
	var l = password.charAt(5)
	var k = password.charAt(6)
	var m = password.charAt(11)
	var o = password.charAt(12)
	var n = password.charAt(2)
	var riddle = "query test mess";

	if (a+b+c+d+e+f+g+h+i+j+k+l+m+n+o == riddle && password.length == 14)
	{
		alert("Congratulations!");
	}
}
```
The easiest way to reverse this is to place it in the web console and change the function to accept a parameter:
```
function checkpassword(password) {
  ...
}
```
From there, place each of the variable declarations in order, and then start with the test string:
```
checkpassword("01234567890123")
```
Starting with a, change "9" to "q", the first letter in the riddle. Proceed to do that for all the other letters until you get the correct answer.