function solution(A) {
    const sums = new Map();

    for (let i = 0 ; i < A.length - 1; i++) {
        let s = A[i] + A[i + 1];
        if (!sums.has(s)) {
            sums.set(s,[]);
        }
        sums.get(s).push(i);
    }

    let maxCount = 0;
    
    for (let [b,c] of sums) {
        let count = 0;
        let lastUsed = -2;
        for (let ind of c ) {
            if (ind >= lastUsed + 2) {
                count ++;
                lastUsed = ind;
            }
        }
        if (count > maxCount) {
            maxCount = count;
        }
    }
    return maxCount;
}

console.log(solution([10,1,3,1,2,2,1,0,4])); 
console.log(solution([5,3,1,3,2,3]));        
console.log(solution([9,9,9,9]));            
console.log(solution([1,5,2,4,3,3])); 