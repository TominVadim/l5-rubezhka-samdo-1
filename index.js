import Validator from './src/Validator.js';

const v = new Validator();

const schema = v.object().shape({
  num: v.number(),
  obj: {
    array: v.array().allIntegers(),
    innerObj: {
      num: v.number(),
      deepestObj: {
        num: v.number()
      }
    }
  }
});

schema.isValid({ num: 54, obj: { array: [1, 2], innerObj: { num: 2, deepestObj: { num: 5 }}} }); // true

export default Validator;
