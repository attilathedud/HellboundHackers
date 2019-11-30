## Encryption 1
The encryption is simply binary - just slap it in a binary->ascii converter to get your answer.

## Encryption 2
Ignore the description entirely. This is a subsitution cipher. Subsitution ciphers work by subsitution in one letter for another consistently. For example, `ALL` might become `CNN`. To solve them, you need to look for patterns in language. 

The cipher text has .'s evenly spaced, so they are probably spaces. Since we need to represent 26 letters, take each two numbers. An example of the first "word" then:
```
05 17 16 06
```
Next, we can start to use common language patterns. For example, the following cipher text:
```
16'12
```
The most common English two-letter word with an apostrophe is "I'm". Knowing this, you can subsitute I for 16 and M for 12. Continue this trend until you build out the rest of the text.

The submission requires the first letter to be captialized along with any singular I.