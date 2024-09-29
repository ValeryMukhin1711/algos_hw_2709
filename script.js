// У вас есть список из n элементов, которые представляют собой оценки студентов по математике. Вам нужно отсортировать этот список в порядке убывания оценок с использованием алгоритма сортировки Merge sort.
// Для решения этой задачи напишите функцию, которая принимает на вход список оценок и возвращает новый список, отсортированный в порядке убывания.
// {3, 8, 1, 9, 4, 2, 7, 6, 5 };


function mergeFunction(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++; 
        } else {
            result.push(right[rightIndex]);
            rightIndex++; 
        }
    }

    
    while (leftIndex < left.length) {
        result.push(left[leftIndex]);
        leftIndex++;
    }

    
    while (rightIndex < right.length) {
        result.push(right[rightIndex]);
        rightIndex++;
    }

    return result;
}


function sortFunction(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    
    return mergeFunction(sortFunction(left), sortFunction(right));
}


const array = [5, 3, 8, 4, 2, 7, 1, 6];
const sortedArray = sortFunction(array);

console.log(sortedArray);






// Level 2
// Дан массив объектов типа Person, который содержит поля name (тип String) и age (тип int). Необходимо отсортировать этот массив по возрасту в порядке убывания, используя алгоритм Merge sort.


// JAVA
// JAVA SCRIPT
// Person[] people = {
//     new Person("Alice", 25),
//     new Person("Bob", 20),
//     new Person("Charlie", 30),
//     new Person("David", 35),
//     new Person("Eve", 28)
// };
// let people = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 20 },
//     { name: "Charlie", age: 30 },
//     { name: "David", age: 35 },
//     { name: "Eve", age: 28 }
// ];


