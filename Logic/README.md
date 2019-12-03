## Logic 1
Arrange the bags from left to right in a single line. Starting from the left, number the bags from 1 to 5. From each of the bags, withdraw the following amount of beads: 
Bag 1: 1 bead
Bag 2: 2 beads
Bag 3: 3 beads
Bag 4: 4 beads
Bag 5: 5 beads

Weigh the beads withdrawn above on the scale. If all the bags were the same, the weight should be 150. The distance from this number represents which bag weighs less. For example, if the amount is 147, the unequal bag is bag 3. The following equation shows why this is the case: 10 + 20 + 27 + 40 + 50 = 147. If the weight is 145, bag 5 is the unequal bag, as 10 + 20 + 30 + 40 + 45 = 145.

## Logic 2
The most simple solution is person 1 sees two identical hats in front of him (blue+blue or red+red) and therefore knows he must be wearing the opposite color. If person 1 doesn't speak up, person 2 knows that his hat and person 3's hat must be opposite, so he shouts the opposite of person 3. This can be verified by looking at the all the possible combinations of hats:
brr
rbb

brb
bbr 
rrb
rbr

## Logic 5
This is similiar to the lightbulb in the closet riddle. Basically, do the following:

1. Make sure the switches are all on the on position before going downstairs.
2. Turn on fase a. Wait a few minutes.
3. Turn off fuse a. Turn on fuse b. Instantly go upstiars.

If the lights are on, it's fuse b. If the lights are off, but warm to the touch, it was fuse a. If neither, fuse c.

## Logic 6
Just use the classic water displacement method you learn in elementary science class. With your pencil, mark the level of the water in the glass. Then add the rock. Make another mark at the new water level. Using the ruler, measure the distance between the two lines in milliliters. 1 milliliter = 1 cubic centimeter.

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