let myObj = { message: 'Greetings from the global scope!' };

function func(obj) {
  obj.message = 'Greetings from the function scope!';
  console.log(obj.message);
}

func(myObj);

console.log(myObj.message);

/*
Lines 8 and 9 will log 'Greetings from the function scope!'

This output demonstrates that when we pass a reference type
to a function, operations inside the function can mutate that
reference types contents.

On line 8 when we pass the myObj object as an argument to func
the obj local variable points *to the same* object that the myObj
global variable points to.

Thus on linle 4 when we re-assign the message property to the string
'Greetings from the function scope!' this change is seen across
all variables that reference the object which includes `obj` local
variable and the `myObj` global variable.

*/
