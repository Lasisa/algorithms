/*
https://github.com/iksergey/algorithms-start/blob/main/part.205/ex01_quickSort.js
*/

const quickSort = (arr, left, right) => {
    if (arr.length <= 1) {
      return arr;
    }
  
    if (left < right) {
      // Выбираем опорный элемент, обычно средний элемент
      const pivotIndex = partition(arr, left, right);
  
      // Рекурсивно сортируем левую и правую части
      quickSort(arr, left, pivotIndex - 1);
      quickSort(arr, pivotIndex, right);
    }
  
    return arr;
  };
  
  const partition = (arr, left, right) => {
    // Выбираем опорный элемент (средний элемент)
    const pivot = arr[Math.floor((left + right) / 2)];
  
    let i = left;
    let j = right;
  
    while (i <= j) {
      while (arr[i] < pivot) {
        i++;
      }
  
      while (arr[j] > pivot) {
        j--;
      }
  
      if (i <= j) {
        // Меняем местами элементы, чтобы меньшие были слева, а большие справа от опорного элемента
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
      }
    }
  
    return i;
  };
  
  const random = (max = 10) => Math.floor(Math.random() * max);
  
  const n = 10;
  let col = Array(n).fill(0).map(e => random());
  
  console.log(`${col}`);
  console.log(`${col.slice().sort((x, y) => x - y)} << Ожидаемый результат сортировки`);
  
  quickSort(col, 0, col.length - 1);
  console.log(`${col} << Результат Quick Sort`);
  















