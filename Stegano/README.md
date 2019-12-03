## Stegano 1
If you examine the picture in a hex editor, you will notice the occasionally 0A in a sea of 20's. Open the picture up and play with the contrast and highlighting to reveal the text.

## Stegano 2
If you examine the picture in a hex editor, the password will jump out at you at the bottom of the picture's data.

## Stegano 3
Looking at the picture, we see a curious string of letters in the bathtub:
```
0110o010011101o101100o10
   o1100o10o1101100
   011o01o101110o11
```

Definitely looks like binary - just convert the 'o's to '0's and you will get your answer after converting to ascii.

## Stegano 4
This is based off another simple method. Take the third letter in each word to get your answer. The site expects spaces inbetween words when submitting the answer.

## Stegano 5
Use GIMP to export the image as an HTML table. Replace the white boxes with 0's and the black boxes with 1. Paste it into a binary converter. 

## Stegano 6
Same as stegano 2. Open it up in a hexeditor or text editor and find the readable ascii sequence.

## Stegano 7
This is a marker based problem. Each important word is marked with a comma after it. Combine them together for the answer.

## Stegano 8
Had to get help with this due to poor eyesight. Answer is c.

## Stegano 9
This might be bugged for me. The answer displays for a second before being hidden by a white layer.