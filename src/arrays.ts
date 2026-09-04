/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let newArray: number[] = [];
    if (numbers.length === 0) return newArray;
    numbers.length === 1 ?
        (newArray = [...numbers, ...numbers])
    :   newArray.push(numbers[0], numbers[numbers.length - 1]);
    return newArray;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    let newArray: number[] = numbers.map((num: number): number => num * 3);
    return newArray;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    let newArray: number[] = numbers.map((str) => {
        let parsed = parseInt(str, 10);
        return isNaN(parsed) ? 0 : parsed;
    });
    return newArray;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    return amounts.map((str) => {
        const cleanStr = str.startsWith("$") ? str.slice(1) : str;
        const parsed = parseInt(cleanStr);
        return isNaN(parsed) ? 0 : parsed;
    });
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    return messages
        .filter((str) => !str.endsWith("?"))
        .map((str) => (str.endsWith("!") ? str.toUpperCase() : str));
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    //const shorts: string[] = words.filter((str) => str.length < 4);
    //return shorts.length;
    const shortsCount = words.reduce(
        (total: number, str: string) => (str.length < 4 ? (total += 1) : total),
        0,
    );
    return shortsCount;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const goodColors: string[] = ["red", "blue", "green"];
    if (colors.length === 0) return true;
    return colors.every((color: string): boolean => goodColors.includes(color));
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    let total: number;
    if (addends.length === 0) {
        return "0=0";
    }
    total = addends.reduce((total: number, num: number) => (total += num), 0);

    return total + "=" + addends.join("+");
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const result = [...values];
    const indexFirstNeg = result.findIndex((num: number): boolean => num < 0);
    const sliceEnd = indexFirstNeg === -1 ? result.length : indexFirstNeg;
    const insertIndex =
        indexFirstNeg === -1 ? result.length : indexFirstNeg + 1;
    const sum = result.slice(0, sliceEnd).reduce((acc, num) => acc + num, 0);
    result.splice(insertIndex, 0, sum);
    return result;
}
