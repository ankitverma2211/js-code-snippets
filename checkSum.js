//O(n)

function checkSum(array,sum){
    let sumMap = {};
    let result = false;
    for(let i = 0; i<array.length;i++){
        let diffFromSum = sum-array[i];
        if(sumMap[diffFromSum]){
            result=true;
        }
        else{
            sumMap[array[i]] =  diffFromSum;
        }
    }
    return result;
}


