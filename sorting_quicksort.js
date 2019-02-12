/*
  QuickSort. First it picks a pivot index. Then it compares all the numbers against the pivot number. If numbers are smaller than the pivot number, then the numbers go the left of the pivot, otherwise they go to the right of the pivot. This process continues with the left and the right array until the array becomes too small.

  So there is Recursion with QuickSort.

*/

function quickSort_Keon(arr){
   if(arr.length<2){
     return arr;
   }
   let pivot=arr[0]; //choosing first number as pivot
   let leftArr=[];
   let rightArr=[];

   for(let i=1; i<arr.length; i++){
      if(arr[i]<pivot){
         leftArr.push(arr[i]);
      }
      else{
        rightArr.push(arr[i]);
      }
   }

   //return [...quickSort(leftArr),pivot, ...quickSort(rightArr)];
   return quickSort_Keon(leftArr).concat(pivot,quickSort_Keon(rightArr));

}


function quickSort(arr){
  if(arr.length<2){
    return arr;
  }
  let pivot=arr[Math.floor(arr.length/2)]; //choosing first number as pivot
  let leftArr=[];
  let rightArr=[];

  for(let i=0; i<arr.length; i++){
     if(arr[i]<pivot){
        leftArr.push(arr[i]);
     }
     else if(arr[i]>pivot){
       rightArr.push(arr[i]);
     }
  }

  //return [...quickSort(leftArr),pivot, ...quickSort(rightArr)];
  return quickSort(leftArr).concat(pivot,quickSort(rightArr));

}


myTestArr=[];
for(let i=1000; i>=0; i--){
   //This is worse case array since it's descending order
   let random=Math.floor(Math.random()*i);
   myTestArr.push(random);
   //myTestArr.push(i);
}

let myTestArr_2=myTestArr.slice();


t1=performance.now();
console.log(quickSort_Keon(myTestArr));
t2=performance.now();
console.log('Quick Sort :',t2-t1);

console.log(myTestArr_2);

t1=performance.now();
myTestArr_2.sort(
    //THIS IS JS Internal Sort
    function(a,b){
        return a-b; // ascending 1,2,3,4,5 etc..
    }
);
t2=performance.now();
console.log('myTestArr_2',myTestArr_2);
console.log('JSSSSS SORT:',t2-t1);



