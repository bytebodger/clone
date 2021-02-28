# clone
`clone` is a utility for creating deep clones of JavaScript objects and arrays.  The functions work recursively, so a massively-nested objecdt/array will still yield a clean "clone" - with no ties to its original.  This package was created to deal with this issue:

```javascript
const originalObject = {
   one: 'uno',
   two: [
      42,
      {
         three: 'tres',
         four: 'quatro',
      },
   ],
}

const copiedObject = originalObject;
copiedObject.two[1].four = 'vier';
console.log(originalObject.two[1].four); // 'vier'
/*
   Even though the updated value was set on copiedObject,
   the changes are reflected in originalObject, 
   because copiedObject holds a reference to originalObject.
 */
```

## Usage

After installation, import the package:

```javascript
import { clone } from '@toolz/clone';
```

## Methods

### .array()

```javascript
const API = {
   arguments: {
      sourceArray: {
         required,
         format: Array,
      },
   },
   returns: Array,
}
```

**Examples:**

```javascript
const bigHairyNestedArray = [
   'foo',
   1,
   null,
   {},
   [],
   true,
   {
      one: 'one',
      two: 'two',
      three: {
         a: null,
         b: {},
         c: 42,
         d: 3.14,
         e: [
            '1',
            '2',
            '3',
            4,
            null,
         ],
      },
   },
]

const clonedArray = clone.array(bigHairyNestedArray);
clonedArray[6].three.e[3] = 42;
console.log(bigHairyNestedArray[6].three.e[3]); // 4
/*
   clonedArray has all of the elements/levels present in
   bigHairyNestedArray, but changes to clonedArray are 
   not reflected in the source, because it's an independent
   clone
 */
```

### .object()

```javascript
const API = {
   arguments: {
      sourceObject: {
         required,
         format: Object,
      },
   },
   returns: Object,
}
```

```javascript
const bigHairyNestedObject = {
   a: 'foo',
   b: 1,
   c: null,
   d: {},
   e: [],
   f: true,
   g: {
      one: 'one',
      two: 'two',
      three: {
         a: null,
         b: {},
         c: 42,
         d: 3.14,
         e: [
            '1',
            '2',
            '3',
            4,
            null,
         ],
      },
   },
}

const clonedObject = clone.object(bigHairyNestedObject);
clonedObject.g.three.e[3] = 42;
console.log(bigHairyNestedObject.g.three.e[3]); // 4
/*
   clonedObject has all of the elements/levels present in
   bigHairyNestedObject, but changes to clonedObject are 
   not reflected in the source, because it's an independent
   clone
 */
```


