###Basic 1
Similiar to HTS 1, looking in the source reveals the following comment: `<!-- When you pet me, I purr. -->` From there, the solution is pretty obvious.

###Basic 2
For this challenge, we are asked to find the source of an iframe - lucky for us, iframes have a "src" element that lables their origin. If you inspect the element, we find the following code:
`<iframe border="0" height="250" width="500" align="center" name="content" src="../basic1/b2/index.php" frameborder="0" scrolling="yes"></iframe>`

###Basic 3
In a nice break, this challenge says exactly what it is looking for:`Wrong user_agent, bwh3_user_agent wasn't found` Easiest way to tackle this is to download a user-agent switching extension and set your user agent as requested.

###Basic 4
This challenge requires a bit of guess-work - we know we are looking for a htpasswd file, but that it is not in basic4's directory. First thought is to maybe scan in either direction: basic3 returns a 404, but https://www.hellboundhackers.org/challenges/basic5/htpasswd.php gives us our challenge's password.

###Basic 5
I've read the introduction like six fucking times and have no fucking idea what it is trying to say. It's something with a wildcard. Remember the username is an email address. Just fuck this challenge, here is the answer I got after a lot of trial and error:
```
*@*:*
```

###Basic 6
First we need to find the location of these files - I used DirBuster but any url fuzzer will work. It should find a logs/ directory with logs.txt and track_logs.php.

For the commands, make sure you place a space between $ and the actually command. In addition, use a+x for chmod, not the number representation. For the rm commands, -f is not required.

###Basic 7
Looking at our cookies, we see we have two cookies: username = sam, and password = jillisdead. According to the challenge, "he decrypted it from ASCII encryption." I'm not sure what ASCII encrpytion is, but I guessed it meant we needed to change our username cookie. I initially tried converting 'sam' to hex, but it ends up being binary that is the correct encryption.

Once we get past that, the password we can break with a simple SQL injection:
```
' or 1=1--
```

