let message = 'Hello from the global scope!';

function func() {
  message = 'Hello from the function scope!';
  console.log(message);
}

func();
console.log(message);

/*
Lines 8 and 9 will log 'Hello from the function scope!'

On line 1 we declare a variable message in the global scope
and initialize it to the string 'Hello from the global scope!'

On line 8 we invoke the func() function, inside the func() function
body on line 4 we re-assign the global message variable to a different
string 'Hello from the function scope!'.

The value of the message variable is logged on line 5 thus 'Hello from the
function scope!' is logged to the screen. The value of the message variable
is logged again on line 9 and 'Hello from the function scope!' is logged
a second time.

*/
