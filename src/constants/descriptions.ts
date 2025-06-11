import { Language } from "@/lib/providers/LangProvider";
import { SortName } from "@/lib/sorts";

export interface SortDescription {
  text: {
    [K in Language]: string;
  };
  isBold?: boolean;
  isItalic?: boolean;
  isUnderline?: boolean;
}

export type SortDescriptions = {
  [K in SortName]: SortDescription[];
};

export const sortDescriptions: SortDescriptions = {
  bubbleSort: [
    {
      text: {
        en: "Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.\n",
        ko: "버블 정렬은 리스트를 반복적으로 순회하면서 인접한 요소를 비교하고, 순서가 잘못된 경우 교환하는 간단한 정렬 알고리즘입니다.\n",
      },
    },
    {
      text: {
        en: "It gets",
        ko: "작은 요소들이",
      },
      isBold: true,
    },
    {
      text: {
        en: "its name from the way smaller elements 'bubble' to the top of the list.\n",
        ko: "리스트의 위로 '버블'처럼 올라오는 방식에서 이름이 붙었습니다.\n",
      },
    },

    {
      text: {
        en: "The algorithm continues to pass through the list until no swaps are needed, indicating that the list is sorted.\n",
        ko: "더 이상 교환이 필요하지 않을 때까지 리스트를 순회하며 정렬을 완료합니다.\n",
      },
    },
  ],
  insertionSort: [
    {
      text: {
        en: "Insertion Sort builds a sorted array one element at a time by repeatedly taking an element from the input data and inserting it into the correct position in the already sorted part.\n",
        ko: "삽입 정렬은 입력 데이터에서 요소를 하나씩 가져와 이미 정렬된 부분의 올바른 위치에 삽입하여 정렬된 배열을 구축합니다.\n",
      },
    },
    {
      text: {
        en: "It works",
        ko: "손에 있는",
      },
      isBold: true,
    },
    {
      text: {
        en: "similarly to how you might sort playing cards in your hands.\n",
        ko: "카드를 정렬하는 방식과 유사하게 작동합니다.\n",
      },
    },
    {
      text: {
        en: "The algorithm",
        ko: "알고리즘은 모든",
      },
      isItalic: true,
    },
    {
      text: {
        en: "continues until all elements are sorted.\n",
        ko: "요소가 정렬될 때까지 계속됩니다.\n",
      },
    },
  ],
  mergeSort: [
    {
      text: {
        en: "Merge Sort is a divide-and-conquer algorithm that divides the input list into two halves, sorts each half, and then merges the sorted halves back together.\n",
        ko: "병합 정렬은 입력 리스트를 두 개의 절반으로 나누고, 각 절반을 정렬한 다음, 정렬된 절반을 다시 합치는 분할 정복 알고리즘입니다.\n",
      },
      isBold: false,
      isItalic: false,
      isUnderline: false,
    },
    {
      text: {
        en: "It recursively",
        ko: "각 서브리스트가",
      },
      isBold: true,
    },
    {
      text: {
        en: "splits the list until each sublist contains a single element, then merges them in sorted order.\n",
        ko: "단일 요소를 포함할 때까지 리스트를 재귀적으로 분할한 다음, 정렬된 순서로 병합합니다.\n",
      },
    },
    {
      text: {
        en: "This process",
        ko: "이 과정은",
      },
      isItalic: true,
    },
    {
      text: {
        en: "continues until the entire list is sorted.\n",
        ko: "전체 리스트가 정렬될 때까지 계속됩니다.\n",
      },
    },
  ],
  quickSort: [
    {
      text: {
        en: "Quick Sort is a highly efficient sorting algorithm that uses a divide-and-conquer approach.\n",
        ko: "퀵 정렬은 분할 정복 접근 방식을 사용하는 매우 효율적인 정렬 알고리즘입니다.\n",
      },
    },
    {
      text: {
        en: "It selects",
        ko: "리스트에서 '피벗'",
      },
      isBold: true,
    },
    {
      text: {
        en: "a 'pivot' element from the list and partitions the other elements into two sub-arrays according to whether they are less than or greater than the pivot.\n",
        ko: "요소를 선택하고, 다른 요소들을 피벗보다 작거나 큰지에 따라 두 개의 서브 배열로 분할합니다.\n",
      },
    },
    {
      text: {
        en: "The sub-arrays",
        ko: "서브 배열은",
      },
      isItalic: true,
    },
    {
      text: {
        en: "are then sorted recursively, and the final result is a sorted list.\n",
        ko: "재귀적으로 정렬되며, 최종 결과는 정렬된 리스트입니다.\n",
      },
    },
  ],
  heapSort: [
    {
      text: {
        en: "Heap Sort is a comparison-based sorting algorithm that uses a binary heap data structure.\n",
        ko: "힙 정렬은 이진 힙 데이터 구조를 사용하는 비교 기반 정렬 알고리즘입니다.\n",
      },
    },
    {
      text: {
        en: "It first",
        ko: "힙 정렬은",
      },
      isBold: true,
    },
    {
      text: {
        en: "builds a max heap from the input data, then repeatedly extracts the maximum element from the heap and rebuilds the heap until all elements are sorted.\n",
        ko: "먼저 입력 데이터에서 최대 힙을 구축한 다음, 힙에서 최대 요소를 반복적으로 추출하고 모든 요소가 정렬될 때까지 힙을 재구성합니다.\n",
      },
    },
    {
      text: {
        en: "This process",
        ko: "이 과정은",
      },
      isItalic: true,
    },
    {
      text: {
        en: "results in a sorted list.\n",
        ko: "정렬된 리스트를 생성합니다.\n",
      },
    },
  ],
  shellSort: [
    {
      text: {
        en: "Shell Sort is an optimization of insertion sort that allows the exchange of items that are far apart.\n",
        ko: "셸 정렬은 멀리 떨어진 항목의 교환을 허용하는 삽입 정렬의 최적화입니다.\n",
      },
    },
    {
      text: {
        en: "It works",
        ko: "특정 간격의",
      },
      isBold: true,
    },
    {
      text: {
        en: "by comparing elements at a certain gap and reducing the gap until it becomes 1, at which point it behaves like a regular insertion sort.\n",
        ko: "요소를 비교하고 간격을 줄여 1이 될 때까지 작동하며, 이 시점에서 일반 삽입 정렬처럼 동작합니다.\n",
      },
    },
    {
      text: {
        en: "This method can significantly reduce the number of comparisons and swaps needed to sort the list.\n",
        ko: "이 방법은 리스트를 정렬하는 데 필요한 비교 및 교환 횟수를 크게 줄일 수 있습니다.\n",
      },
    },
  ],
  selectionSort: [
    {
      text: {
        en: "Selection Sort is a simple comparison-based sorting algorithm that divides the input list into a sorted and unsorted region.\n",
        ko: "선택 정렬은 입력 리스트를 정렬된 영역과 정렬되지 않은 영역으로 나누는 간단한 비교 기반 정렬 알고리즘입니다.\n",
      },
    },
    {
      text: {
        en: "It repeatedly",
        ko: "정렬되지 않은",
      },
      isBold: true,
    },
    {
      text: {
        en: "selects the smallest (or largest) element from the unsorted region and moves it to the end of the sorted region.\n",
        ko: "영역에서 가장 작은(또는 가장 큰) 요소를 반복적으로 선택하여 정렬된 영역의 끝으로 이동시킵니다.\n",
      },
    },
    {
      text: {
        en: "This process",
        ko: "이 과정은",
      },
      isItalic: true,
    },
    {
      text: {
        en: "continues until the entire list is sorted.\n",
        ko: "전체 리스트가 정렬될 때까지 계속됩니다.\n",
      },
    },
  ],
  countingSort: [
    {
      text: {
        en: "Counting Sort is a non-comparison-based sorting algorithm that is particularly efficient for sorting integers within a known range.\n",
        ko: "카운팅 정렬은 알려진 범위 내에서 정수를 정렬하는 데 특히 효율적인 비교 기반 정렬 알고리즘입니다.\n",
      },
    },
    {
      text: {
        en: "It counts",
        ko: "입력 리스트에서",
      },
      isBold: true,
    },
    {
      text: {
        en: "the occurrences of each unique element in the input list and uses this information to place each element in its correct position in the sorted output.\n",
        ko: "각 고유 요소의 발생 횟수를 세고 이 정보를 사용하여 각 요소를 정렬된 출력의 올바른 위치에 배치합니다.\n",
      },
    },
    {
      text: {
        en: "This algorithm",
        ko: "이 알고리즘은",
      },
      isItalic: true,
    },
    {
      text: {
        en: "is not suitable for sorting floating-point numbers or strings, but it can be very efficient for sorting integers.\n",
        ko: "부동 소수점 숫자나 문자열을 정렬하는 데 적합하지 않지만, 정수를 정렬하는 데 매우 효율적일 수 있습니다.\n",
      },
    },
  ],
};
