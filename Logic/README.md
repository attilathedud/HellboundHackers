## Logic 7
There are 8 combinations of A, B, C:
A = true
B = true
C = true

A = true
B = false
C = true

A = true
B = true
C = false

A = true
B = false
C = false

A = false
B = true
C = true

A = false
B = true
C = false

A = false
B = false
C = true

A = false
B = false
C = false

The conditional can be expressed as a Javascript conditional: 
(a || b || c) && (a || !b || c) && (a || b || !c) && (a || !b || !c) && (!a || b || c) && (!a || !b || c) && (!a || b || !c) && (!a || !b || !c)

We can go through each combination and let a computer evaluate it. It always evaluates false. Two ways of simplifying it:
1. FALSE
2. (A && !A)