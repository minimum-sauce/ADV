
type Focus = number | null;
type State = {
    value: Array<number>,
    current: Focus,
    ref: Focus
}

export function insertion_sort(list: number[]): number[] {
    let current:Focus = null;
    let ref:Focus = null;
    //const save = () => saveFrame([...list], current, ref)
    //save();
    
    IndexIterator:
    for (let i = 1; i < list.length; i++) {
        const valueToSort = list[i];
        current = i;
        //save();
        InsertionIterator:
        for (let j = i - 1; j >= 0; j--) {
            ref = j;
            //save();
            if (valueToSort >= list[j]) {
                list[j + 1] = valueToSort;
                ref = null;
                //save();
                continue IndexIterator;
            } else {
                list[j + 1] = list[j];
                list[j] = valueToSort;
                ref = null;
                //save();
                current = current - 1;
                
                continue InsertionIterator;
            }
        }
    }
    return list;
};