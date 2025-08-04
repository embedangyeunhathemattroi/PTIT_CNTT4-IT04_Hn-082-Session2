const insertArrayAt=(arr1,arr2,index)=> {
    if (index < 0 || index > arr1.length) {
        console.log("index khong hop le");
        return arr1;
    }

    const newArr = arr1.slice(0, index).concat(arr2).concat(arr1.slice(index));
    return newArr;
};

const arr1 = [1, 2, 3, 4, 5];
const arr2=[4,5,6];
const position=3;
console.log(insertArrayAt(arr1,arr2,position));


const arr3=["a","b","c","d"];
const arr4=["e","f","g","h"];
const position1=2;
console.log(insertArrayAt(arr3,arr4,position1));
