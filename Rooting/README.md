## Rooting 1
These challenges have some serious limitations and flat-out incorrect syntax. Try to forget everything you actually know from rooting boxes.

Type "help" to see your commands. Unlike actually doing this, don't provide options to nmap, simply do:
```
nmap 69.13.37.42
```
This will show that the ftp port is open. Don't provide the ip to the ftp command, like you normally would. Instead do:
```
$ ftp
ftp> open
to> 69.13.37.42
```
Modern linux systems do not store passwords in /etc/passwd. They store hashes. Regardless, the challenge wants you to view /etc/passwd. Unfortunately, you can't do `cat /etc/passwd` like any other system. Instead, you must manually navigate to the `etc` directory via:
```
cd ..
cd ..
cd etc
```
Only then can you `cat` the passwd file.

## Rooting 2
Same dynamic, limited commands. Normally you would use `find` and then `grep` the results. Logs are normally stored in `/var/log`. However, in this challenge, navigate to the `home` directory and then start looking manually through the admin's and grey's folders. Delete anything that seems remotely related. Complete the challenge.

## Rooting 3
This challenge has two parts:
1. Find the extract program
2. Run it against the SAM

Follow the advice in the tip and enter everything lowercase, except SAM. Go through every directory until you find a program called extract.exe. Run it. Then navigate to `C:\Windows\system32\config\` and find the SAM file. Run the program against it to get a hash.

Plug this hash into an online md5 decryptor and get your password.