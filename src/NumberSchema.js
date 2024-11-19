// Определяем класс NumberValidator
class NumberValidator {
  // Метод для проверки, является ли входные данные числом
  isNumber(data) {
    // Проверяем тип данных и возвращаем true, если это число, иначе false
    return typeof data === 'number';
  }

  // Метод для проверки валидности данных
  isValid(data) {
    // Вызываем метод isNumber для проверки, является ли data числом
    return this.isNumber(data);
  }
}

// Экспортируем класс для использования в других модулях
export default NumberValidator;
