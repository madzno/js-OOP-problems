let message = 'Hello from the global scope!';

function func(message) {
  message = 'Hello from the function scope!';
  console.log(message);
}

func(message);
console.log(message);

/*
Line 8 will log 'Hello from the function scope!'
Line 9 will log 'Hello from the global scope!'

We call `func` on line 8 and pass message as an argument,
in turn the message local variable on line 3 has an initial value
of 'hello from the global scope!'. However, since message contains
a string and a string is a primitive type, the global scoped message
variable passed as an argument on line 8 and the local scoped message
variable defined as a parameter to the func function contain two
different strings at two different places in memory.

on line 4 we re-assign the local message variable to 'Hello from the function scope!'
Thus on linle 5 when we log its value this logs 'Hello from the function scope!' to the
screen.

This re-assignment has *no effect* on the globally scoped message variable and
thus on line 9 when we log its value 'Hello from the global scope!' is output.
*/
