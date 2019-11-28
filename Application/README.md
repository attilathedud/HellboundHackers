## Application 1
Another idiot test; simply pull up the referenced text strings, and:
```
Text strings referenced in app1:.text, item 1
 Address=00403F17
 Disassembly=PUSH app1.0040380C
 Text string=UNICODE "g7*2+'&1,3"
```

should catch your eye. Entering it gives us our password:
```
frozenIce
```

## Application 2
The icon gives away that this is a flash-based executable. Using a flash decompiler, the following should jump out:
```
if(username == "reduced")
```

Entering it gives us our password:
```
suffix
```

## Application 3
Pulling up the list of referenced strings gives us the following:
```
Text strings referenced in App3:.text
Address    Disassembly                               Text string
00401FA0   PUSH App3.00401B6C                        UNICODE "icrackedit"
00401FF4   MOV DWORD PTR SS:[EBP-8C],App3.00401BD0   UNICODE "Welldone"
00402013   MOV DWORD PTR SS:[EBP-7C],App3.00401B88   UNICODE "Press ok to recieve the password"
00402072   MOV DWORD PTR SS:[EBP-7C],App3.00401BE8   UNICODE "Password"
004021E2   MOV EDX,App3.00401C00                     UNICODE "ihavnolife"
```

Since the application was nice enough to include a reference to icrackedit already, all we need to do is make it load in place of ihavnolife. Navigate to 004021E2 and change it to as follows:
```
004021E2   BA 6C1B4000      MOV EDX,App3.00401B6C                    ; UNICODE "icrackedit"
```

Copy the changes to the executable and start it up. Our text will be there ready to go. Our password for this challenge is:
```
88PARROT24
```

## Application 4
Scanning with PEiD reveals this is another VB application. Using a VB decompiler and navigating to the Command1_Click functions in turn then reveals our password:
```
  loc_0040BCD7: push 00407514h ; "livebox"
  loc_0040BCDC: call [0040104Ch] ; __vbaStrCmp
```

Entering it gives us our challenge password:
```
Atmosphere
```

## Application 5
Scanning with PEiD reveals this is another VB application. Using a VB decompiler will reveal the location of the form events. The one we are really interested in is the cmdValidate_Click call, which lives at 4020B0. Opening up the application the Olly and then navigating to the calling source will land us in the call list that is characteristic of VB applications. What we want to do is change the mousemove call to call our cmd click call to get around the disabled button:
```
00401A9F   E9 CC0A0000      JMP app5.00402570
```

to:
```
00401A9F   E9 CC0A0000      JMP app5.004020B0
```

Next we have to deal with the locked box; luckily, we can just fix it in the code. Scrolling through the validation function will reveal where our string is coming from:
```
00402188   . 68 E81C4000    PUSH app5.00401CE8                       ;  UNICODE "XXXXX-XXXXX-XXXXX"
```

So we can simply navigate to the dump location at 401CE8 and adjust our serial there. But to what - well the validate function has some nice references:
```
004020FB   . BA A01C4000    MOV EDX,app5.00401CA0                    ;  UNICODE "ASDTY-"
00402135   . BA B41C4000    MOV EDX,app5.00401CB4                    ;  UNICODE "XYXEW-"
0040213F   . BA C81C4000    MOV EDX,app5.00401CC8                    ;  UNICODE "NUPCY"
```

So we change our serial, hover over the button and get a "Nearly!" box; I have no idea why, easiest approach I found was to just follow the code up to the comparison jump and nop it:
```
004022F7   . 0F84 B3000000  JE app5.004023B0
```

Which gives us our password:
```
1013283
```

## Application 6
PEiD reveals another VB application; opening up in a decompiler reveals a pretty simple password:
```
  loc_0040AA18: push 00409354h ; "bah"
```

Of which entering it reveals our password:
```
regedit32
```

## Application 7
Same as the last few:
```
  loc_0040877C: push 004034D0h ; "jonn4y"
  ...
  loc_004087EC: push 004034E4h ; "vb6"
```

Our password:
```
screwdriver
```

## Application 8
The majority of this challenge comes down to disabling the message box. Use a decompiler to find the Timer code, which is at `00402880`. Disable the three message box calls at `00402907`, `00402919`, and `0040292D` by nopping them out. 

With that done, we now need to disable the MouseMove code that disables the button. Follow the reference from the Timer code to land at the VB code responsible for executing events at `401ac4`. Using the decompiler, modify the event that points at MouseMove and point it at the now empty Timer function. 

Next, use an enabler like Enable!/TurnItOn! to reenable the buttons. Set a breakpoint at the function responsible for checking the code (Button1_Click) at `402090`. Step through the code until you see the correct password placed in the register, or simply nop out the je at `402213`.

## Application 9
You are supposed to step through and see how it modifies your name to derive your code. However, by placing a breakpoint on `401411`, the application will load in the code it expects into the registers. Simply copy this code into the box and you will get the password.

## Application 11
Peid reveals this is a .NET executable. Drop it into dnSpy and set a breakpoint on the code in `Command1_Click_1` to see the generated password.

## Application 12
Search for string references in a debugger to find the conditional responsible for determining if your answer is correct. It is at `00401462`. It has a comparison to `14da8e`, which when converted to decimal, gives you the answer.

