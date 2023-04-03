let a = 10;
let obj = {
  a
}

let newObj = obj;
newObj.a += 10;

console.log(obj.a === a);
console.log(newObj.a === obj.a);

/*
Line 9 outputs false, on line 1 we declare
a variable a and initailze it to the Number 10, a primitive
value

On line 2 we declare a variable obj and initialize it to an
Object with one property a with a value that is the same value
as the local variable a on line 1, the Number 10. Even though
the obj a property and the a local variable contain numbers with
the same value, they point to different Numbers in memory.

on line 6 we initailizle a local variable newObj to the same object
that obj points to. On line 7 we increment the value of the a property
in newObj by 10 and re-assign it to the value, 20. Since obj and newObj
point to the same object, both newObj.a and obj.a 's values are 20, thus
line 10 returns true.

Since the re-assignment of the object a property to 20 has no effect on
the Number that the local variable a points to, a still points to 10 and line
9 returns false.
*/
