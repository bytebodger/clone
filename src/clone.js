import { allow } from '@toolz/allow';
import { isARegularObject } from '@toolz/is-a-regular-object';

const Clone = () => {
   allow.setFailureBehavior(allow.failureBehavior.WARN);
   
   const array = (sourceArray = []) => {
      allow.anArray(sourceArray);
      return sourceArray.map(element => {
         if (element !== null && element.hasOwnProperty('$$typeof'))
            return element;
         if (isARegularObject(element))
            return object(element);
         if (Array.isArray(element))
            return array(element);
         return element;
      });
   }
   
   const object = (sourceObject = {}) => {
      allow.anObject(sourceObject);
      let clonedObject = {};
      Object.entries(sourceObject).forEach(entry => {
         const [key, value] = entry;
         if (value !== null && value.hasOwnProperty('$$typeof'))
            clonedObject[key] = value;
         else if (isARegularObject(value))
            clonedObject[key] = object(value);
         else if (Array.isArray(value))
            clonedObject[key] = array(value);
         else
            clonedObject[key] = value;
      });
      return clonedObject;
   }
   
   return {
      array,
      object,
   }
}

export const clone = Clone();
