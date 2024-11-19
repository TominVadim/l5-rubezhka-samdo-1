class ObjectValidator {
//   constructor() {
//     this.data = {};
//   }

  //   shape(data) {
  //     this.data = data;
  //     return this;
  //   }

  //   isValid(obj) {
  //     return Object.entries(this.data)
  //       .reduce((acc, [key, value]) => acc && obj[key].isValid(value), true);
  //   }

  shape(props) {
    this.options = { ...props }; // Сохраняем переданные параметры в объекте options
    return this; // Возвращаем текущий экземпляр для цепочечного вызова методов
  }

  // Метод для проверки валидности объекта пользователя
  isValid(obj) {
    // Итерируемся по каждому свойству объекта и проверяем его валидность
    return Object.entries(obj)
      .reduce((acc, [key, value]) => acc && this.options[key].isValid(value), true);
    // acc - аккумулятор, который хранит результат проверки
    // Если все проверки пройдены, возвращается true
  }
}

export default ObjectValidator;
