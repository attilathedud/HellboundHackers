###Javascript 1
Looking in the source reveals our straight-forward answer:
```
function pasuser(form){if(form.id.value=="partyhard2"){if(form.pass.value=="lifeisshort1"){location="index.php?user=partyhard2&pass=lifeisshort1"}
```

###Javascript 2
Simply stop the page while it is loading (or just disable alerts for the site), and browse the source to reveal:
```
<script language="JavaScript" src="level2script.js"></script>
```

Open up the script, and the answer is right there:
```
if (password=="level2done") {
```