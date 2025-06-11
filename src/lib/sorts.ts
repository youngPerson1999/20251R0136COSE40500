export interface SortResult {
  results: number[];
  comparisonCount: number;
  swapCount: number;
}

const bubbleSort = (arr: number[]): SortResult => {
  const n = arr.length;
  let swapped: boolean;
  let comparisonCount = 0;
  let swapCount = 0;

  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      comparisonCount++;
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapCount++;
        swapped = true;
      }
    }
  } while (swapped);

  return { results: arr, comparisonCount, swapCount };
};

const selectionSort = (arr: number[]): SortResult => {
  const n = arr.length;
  let comparisonCount = 0;
  let swapCount = 0;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      comparisonCount++;
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      swapCount++;
    }
  }

  return { results: arr, comparisonCount, swapCount };
};

const insertionSort = (arr: number[]): SortResult => {
  const n = arr.length;
  let comparisonCount = 0;
  let swapCount = 0;

  for (let i = 1; i < n; i++) {
    const key = arr[i];
    let j = i - 1;
    while (j >= 0) {
      comparisonCount++;
      if (arr[j] > key) {
        arr[j + 1] = arr[j];
        swapCount++;
        j--;
      } else {
        break;
      }
    }
    arr[j + 1] = key;
  }

  return { results: arr, comparisonCount, swapCount };
};

const mergeSort = (arr: number[]): SortResult => {
  let comparisonCount = 0;

  const merge = (
    left: number[],
    right: number[]
  ): { merged: number[]; comparisons: number } => {
    const result: number[] = [];
    let i = 0,
      j = 0;
    let comparisons = 0;
    while (i < left.length && j < right.length) {
      comparisons++;
      if (left[i] < right[j]) {
        result.push(left[i++]);
      } else {
        result.push(right[j++]);
      }
    }
    return {
      merged: result.concat(left.slice(i)).concat(right.slice(j)),
      comparisons,
    };
  };

  const mergeSortRecursive = (
    subArr: number[]
  ): { sorted: number[]; comparisons: number } => {
    if (subArr.length <= 1) return { sorted: subArr, comparisons: 0 };

    const mid = Math.floor(subArr.length / 2);
    const left = mergeSortRecursive(subArr.slice(0, mid));
    const right = mergeSortRecursive(subArr.slice(mid));
    const merged = merge(left.sorted, right.sorted);

    return {
      sorted: merged.merged,
      comparisons: left.comparisons + right.comparisons + merged.comparisons,
    };
  };

  const { sorted, comparisons } = mergeSortRecursive(arr);
  comparisonCount = comparisons;

  return { results: sorted, comparisonCount, swapCount: 0 };
};

const quickSort = (arr: number[]): SortResult => {
  let comparisonCount = 0;

  const quickSortRecursive = (subArr: number[]): number[] => {
    if (subArr.length <= 1) return subArr;

    const pivot = subArr[subArr.length - 1];
    const left: number[] = [];
    const right: number[] = [];

    for (let i = 0; i < subArr.length - 1; i++) {
      comparisonCount++;
      if (subArr[i] < pivot) {
        left.push(subArr[i]);
      } else {
        right.push(subArr[i]);
      }
    }

    return [...quickSortRecursive(left), pivot, ...quickSortRecursive(right)];
  };

  const sorted = quickSortRecursive(arr);
  return { results: sorted, comparisonCount, swapCount: 0 };
};

const heapSort = (arr: number[]): SortResult => {
  const n = arr.length;
  let comparisonCount = 0;
  let swapCount = 0;

  const heapify = (n: number, i: number) => {
    let largest = i;
    const l = 2 * i + 1;
    const r = 2 * i + 2;

    if (l < n) {
      comparisonCount++;
      if (arr[l] > arr[largest]) largest = l;
    }

    if (r < n) {
      comparisonCount++;
      if (arr[r] > arr[largest]) largest = r;
    }

    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      swapCount++;
      heapify(n, largest);
    }
  };

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) heapify(n, i);

  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    swapCount++;
    heapify(i, 0);
  }

  return { results: arr, comparisonCount, swapCount };
};

const shellSort = (arr: number[]): SortResult => {
  const n = arr.length;
  let gap = Math.floor(n / 2);
  let comparisonCount = 0;
  let swapCount = 0;

  while (gap > 0) {
    for (let i = gap; i < n; i++) {
      const temp = arr[i];
      let j = i;
      while (j >= gap) {
        comparisonCount++;
        if (arr[j - gap] > temp) {
          arr[j] = arr[j - gap];
          swapCount++;
          j -= gap;
        } else {
          break;
        }
      }
      arr[j] = temp;
    }
    gap = Math.floor(gap / 2);
  }

  return { results: arr, comparisonCount, swapCount };
};

const countingSort = (arr: number[]): SortResult => {
  if (arr.length === 0)
    return { results: arr, comparisonCount: 0, swapCount: 0 };

  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const count = new Array(max - min + 1).fill(0);

  for (const num of arr) {
    count[num - min]++;
  }

  let idx = 0;
  for (let i = 0; i < count.length; i++) {
    while (count[i] > 0) {
      arr[idx++] = i + min;
      count[i]--;
    }
  }

  return { results: arr, comparisonCount: 0, swapCount: 0 };
};

const sorts = {
  bubbleSort,
  selectionSort,
  insertionSort,
  mergeSort,
  quickSort,
  heapSort,
  shellSort,
  countingSort,
};

export { sorts };
