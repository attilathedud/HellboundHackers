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

## Stegano 8
Had to get help with this due to poor eyesight. Answer is c.
