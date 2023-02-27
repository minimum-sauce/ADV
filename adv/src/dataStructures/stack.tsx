function head<T, V>(pair: [T, V]): T {
    return pair[0]; 
}

function tail<T, V>(pair: [T, V]): V {
    return pair[1]; 
}

function is_null<T>(object: T | null): object is null {
    return object === null;
}

function pair<A, B>(head: A, tail: B): [A, B] {
    return [head, tail];
}


export type NonEmptyStack<T> = [T, Stack<T>];
export type Stack<T> = null | NonEmptyStack<T>;

export function stack_create_empty<T>(): Stack<T> {
    return null;
}

export function stack_add_item<T>(item: T, stack: Stack<T>): NonEmptyStack<T> {
    return pair(item, stack);
}

export function stack_pop_top<T>(stack: NonEmptyStack<T>): Stack<T> {
    return tail(stack);
}

export function stack_view_top<T>(stack: NonEmptyStack<T>): T {
    return head(stack);
}

export function stack_is_empty<T>(stack: Stack<T>): stack is null {
    return is_null(stack);
}

