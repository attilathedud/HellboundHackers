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
