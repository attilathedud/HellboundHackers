###Flash 1
With a flash decompiler, these challenges are pretty easy. First we browse the source code of the page to find the swf to download. A search for ".swf" reveals:
```
<embed src="flashmis1.swf" width="300" height="300">
```

Download the swf, throw it in a decompiler, and you will see there are two text elements with no code. The second text reveals our password:
```
Text://Well Done You Managed To Work Out The Noob Test. Password is  FLaShDeecompiling767 
```

###Flash 2
Same process as the first challenge - scanning through the text elements reveals the string we want:
```
Correct - Password is gettingharder
```

###Flash 3
Given that we have a weird sound playing, we can probably assume we have some mp3 tinkering we need to do. Download the swf and open up the script to see what sound we are loading:
```
loopTune.loadSound("cooltune.mp3", false);
```

Download cooltune.mp3 and just for kicks, run it through a sound reverser since that is what most sound challenges do; when you do, the password is revealed:
`65hijkl`

###Flash 4
A rather annoying challenge, if only for how the solution hides in plain sight. Downloading the swf reveals that text is being read from a text directory:
```
loadVariables("text/text1.txt", "_root");
```

Navigate to https://www.hellboundhackers.org/challenges/flash/flash4/text/ and three files should be revealed: welcome.txt, text1.txt, and text2.txt. From here I was convinced we had a hidden password file somewhere on the server, and ran a couple url fuzzers to try and find it to no avail.
Defeated, I then started looking at the text and image files to look for any hidden passwords (e.g., UNICODE that doesn't display on the flash). On the bottom of text2.txt, there is this hidden gem:
```
&pass=LS0gQ29uZ3JhdHMsIFdvcmtlZCBvdXQgTG9hZFZhcmlibGVzIHRoZW4uIFlvdXIgUGFzc3dvcmQgaXMgTG9hZF9WYXIgLS0=
```

The = at the end gives away it is a base64 encoded string; decode it, and we get our answer: 
```
-- Congrats, Worked out LoadVaribles then. Your Password is Load_Var --
```