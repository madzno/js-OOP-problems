let animal = {
  name: 'Pumbaa',
  species: 'Phacochoerus africanus',
};

let menagerie = {
  warthog: animal,
};

animal = {
  name: 'Timon',
  species: 'Suricata suricatta',
};

menagerie.meerkat = animal;

menagerie.warthog === animal; // false
menagerie.meerkat === animal; // true

/*
On line 10 we are re-assigning animal to a new object rather
than mutating the original value of animal. Thus the warthog
property still points to the original animal object initialized on
line 1, not its new re-assigned object. Thus the warthog property
of menangerie and the animal object point to two different objects
and line 17 returns false.

*/
