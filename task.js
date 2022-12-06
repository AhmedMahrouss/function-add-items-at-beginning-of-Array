const add = (arr, newVal) => {   //by arrow Function
    for(let i = arr.length; i > 0; i--) {
        arr[i] = arr[i - 1];  
    }
    arr[0] = newVal;
    return arr.length-1;
}
arry=["ahmed","mahrous"]
add(arry,"sinio",);
console.log(arry)

function add(arr,newVal){  //by decleration function
    for(let i= arr.length; i>0; i--){
     arr[i]=arr[i-1]; // array[3]=array[2]
                      // array[2]=array[1]
                      // array[1]=array[0]
    }arr[0]=newVal;
    return arr.length-1;
}
array =[1,2,3]
add(array,0)
console.log(array)
console.log(add(array,0,4))