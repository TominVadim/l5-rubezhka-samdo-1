class ObjectValidator {
  // Метод shape принимает объект с описанием схемы валидации.
  // Схема валидации - это объект, где ключи соответствуют проверяемым полям,
  // а значения - валидаторы, которые будут применяться к этим полям.
  shape(props) {
    // Сохраняем переданные параметры в объекте options, чтобы использовать их
    // позже при валидации. Используем оператор spread, чтобы создать копию
    // props и не изменять исходный объект.
    this.options = { ...props };
    // Возвращаем текущий экземпляр для поддержания цепочечного вызова методов.
    return this;
  }

  // Метод isValid проверяет, соответствует ли переданный объект obj заданной схеме валидации.
  isValid(obj) {
    // Используем Object.entries для получения массива пар [ключ, значение] из объекта options.
    // Метод every проверяет, удовлетворяют ли все элементы массива заданному условию.
    return Object.entries(this.options).every(([key, validator]) => {
      // Получаем значение из проверяемого объекта obj по ключу key.
      const value = obj[key];

      // Проверяем, является ли значение объектом, но не массивом.
      // Если да, то предполагаем, что оно соответствует вложенной структуре, и
      // создаем новый экземпляр ObjectValidator для проверки вложенного объекта.
      if (typeof value === 'object' && (!Array.isArray(value))) {
        // Рекурсивно создаем новый ObjectValidator и применяем к нему
        // текущий валидатор (переданный для вложенного объекта).
        return (new this.constructor()).shape(validator).isValid(value);
      }

      // Если значение не объект или не вложенный объект, применяем к нему
      // текущий валидатор. Метод isValid вызывается у валидатора, который
      // должен быть передан в shape и соответствовать полю key.
      return validator.isValid(value);
    });
  }
}

export default ObjectValidator;
