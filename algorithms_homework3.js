// Функция для решения задачи Ханойской башни итеративным методом
function hanoiIterative(n, source, auxiliary, target) {
    // Создаем стек для хранения состояний
    const stack = [];
    // Изначально добавляем начальное состояние в стек
    stack.push({ n, source, auxiliary, target });
  
    // Пока стек не пуст
    while (stack.length > 0) {
      // Извлекаем текущее состояние из стека
      const { n, source, auxiliary, target } = stack.pop();
  
      // Если это перемещение одного диска
      if (n === 1) {
        // Выводим информацию о перемещении диска
        console.log(`Move disk 1 from ${source} to ${target}`);
      } else {
        // Помещаем следующую итерацию в стек для будущего выполнения
        stack.push({ n: n - 1, source, auxiliary, target });
        stack.push({ n: 1, source, auxiliary, target });
        stack.push({ n: n - 1, source: auxiliary, auxiliary: target, target });
      }
    }
  }
  
  // Пример использования
  const numberOfDisks = 3;
  hanoiIterative(numberOfDisks, 'Left', 'Middle', 'Right');

  




  