function findKthSmallest(arr1, arr2, k) {
    let merged = [];
    let i = 0;
    let j = 0;
  
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        merged.push(arr1[i]);
        i++;
      } else {
        merged.push(arr2[j]);
        j++;
      }
    }
  
    while (i < arr1.length) {
      merged.push(arr1[i]);
      i++;
    }
  
    while (j < arr2.length) {
      merged.push(arr2[j]);
      j++;
    }
  
    return merged[k - 1];
  }
  
  const arr1 = [100, 112, 256, 349, 770];
  const arr2 = [72, 86, 113, 119, 265, 445, 892];
  const k = 6;
  
  const result = findKthSmallest(arr1, arr2, k);
  console.log(result); 
  






