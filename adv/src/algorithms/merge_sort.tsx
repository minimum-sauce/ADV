import React, { useState } from 'react';
import { random_permutation } from './random_permutation';
import '../style/MergeSort.css'

type States = Array<State>;
type State = {
  bottom_arr: number[],
  top_arr: number[],
  colour?: number
}


function save_state(history: States, bottom: number[], top: number[], colour?: number): void {
  history.push({
    bottom_arr: bottom,
    top_arr: top,
    colour: colour,
  });
}


export function merge_sort(arr: Array<number>, history: States): void {
  save_state(history, [], [...arr]);
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

