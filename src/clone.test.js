import { clone } from './clone';

const array = [
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
];

const object = {
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

test('deep clone of array', () => {
   const clonedArray = clone.array(array);
   expect(JSON.stringify(clonedArray)).toEqual(JSON.stringify(array));
   clonedArray[6].three.e[3] = 42;
   expect(array[6].three.e[3]).not.toEqual(42);
})

test('deep clone of object', () => {
   const clonedObject = clone.object(object);
   expect(JSON.stringify(clonedObject)).toEqual(JSON.stringify(object));
   clonedObject.g.three.e[3] = 42;
   expect(object.g.three.e[3]).not.toEqual(42);
})
