## Patching 1
The echo on line 8 is exploitable via XSS. Use `htmlentities` to escape the input.