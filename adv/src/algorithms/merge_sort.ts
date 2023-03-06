
/**
 * A record type that is used to store information about a specific point
 * in time while running merge_sort. 
*/
export type State = {
  bottom_arr: number[],
  top_arr: number[],
  colour?: number
}

export type States = Array<State>;

/**
 * A function that saves information in a State and pushes it to a given
 * Array.
 * @param history - An array where the State is to be stored.
 * @param bottom - An array that is to be displayed in the lower array.
 * @param top - An array that is to be displayed in the upper array.
 * @param colour - Index for an element that we want to be coloured.
 */
function save_state(history: States, bottom: Array<number>, top: Array<number>, colour?: number): void {
  history.push({
    bottom_arr: bottom,
    top_arr: top,
    colour: colour,
  });
}

/**
 * Sorts an array so that the smallest element is furthest to the left and the biggest to the right.
 * Also stores State from several points in the sorting process.
 * Provided by the course material and modified.
 * @param arr - Array to be sorted.
 * @param history - Array where State is stored.
 */
export function merge_sort(arr: Array<number>, history: States): void {
  save_state(history, [], [...arr]);
  /**
   * A helper function that splits a part of a provided array in two and uses wishful thinking to sort 
   * the two halves.
   * @param arr - Array to be sorted.
   * @param low - Start index of the part to be sorted.
   * @param high - End index of the part to be sorted.
   */
  function merge_sort_helper(arr: Array<number>, low: number, high: number): void {
    if (low < high) {
      const mid: number = Math.floor((low + high) / 2);
      const arr_left = arr.slice(low, mid + 1);
      const arr_right = arr.slice(mid + 1, high + 1);
      if (arr_left.length > 0) {
        save_state(history, arr_left, [...arr], low);
      }
      merge_sort_helper(arr, low, mid);
      if (arr_right.length > 0) {
        save_state(history, arr_right, [...arr], mid + 1);
      }
      merge_sort_helper(arr, mid + 1, high);
      merge(arr, low, mid, high);
    } else { }
  }
  /**
   * Merges two already sorted halves of part of an array so that the original array is now sorted.
   * @param arr - Input array where the first and second halves are already sorted.
   * @param low - Start index of the part to be merged.
   * @param mid - Middle of the part to be merged. 
   * @param high - End index of the part to be merged.
   */
  function merge(arr: Array<number>, low: number, mid: number, high: number): void {
    const b_arr: Array<number> = [];
    let left: number = low;
    let right: number = mid + 1;
    let b_index: number = 0;
    while (left <= mid && right <= high) {
      if (arr[left] <= arr[right]) {
        b_arr[b_index] = arr[left];
        left += 1;
      } else {
        b_arr[b_index] = arr[right];
        right += 1;
      }
      save_state(history, [...b_arr], [...arr], low);
      b_index += 1;
    }
    while (left <= mid) {
      b_arr[b_index] = arr[left];
      save_state(history, [...b_arr], [...arr], low);
      b_index += 1;
      left += 1;
    }
    while (right <= high) {
      b_arr[b_index] = arr[right];
      save_state(history, [...b_arr], [...arr], low);
      b_index += 1;
      right += 1;
    }
    for (let k = 0; k < high - low + 1; k += 1) {
      save_state(history, [...b_arr], [...arr], low + k);
      arr[low + k] = b_arr[k];
      save_state(history, [...b_arr], [...arr], low + k);
    }
    save_state(history, [...b_arr], [...arr]);
  }
  merge_sort_helper(arr, 0, arr.length - 1);
  save_state(history, [], [...arr]);
};

