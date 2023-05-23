# Welcome to C.

## A simple hello world

``` C
#include <stdio.h>

int main() {
  // output a line
  printf("Hello World!\n");
}
```

Let’s go through the code line by line to see what is happening. You don’t need to understand everything right away, this is just a first look.
  
- **#include <stdio.h>:** This line is needed to run the line of code that starts with printf.
  
- **int main(){ }:** This is the starting point of the code. All the code inside the curly braces {} runs first.
  
- **// output a line:** This is a comment. It is not a line of code but a message we can add to code to tell ourselves or others what the code does. When the code is run this line will be ignored.
  
- **printf("Hello World!");:** This line of code prints, or outputs, the text “Hello World!” to the console. Printing text to the console is one way for a program to communicate with the user.
  

## Escape Sequence 

``` C
#include <stdio.h>

int main() {
  // Simple Recipe
  printf("2 Cups: All Purpose Flour\n");
  printf("1 Cups: Unsalted Butter(Room Temperature)");
  
}
```
```shell
2 Cups: All Purpose Flour
1 Cups: Unsalted Butter(Room Temperature)
```

What about the \n at the end of the string? Good question! This is called an escape sequence and is used to add a non-visual character within a string.

In this case, \n adds a new line to the end of the string.

