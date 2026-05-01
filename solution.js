function solution(arrayA, arrayB, arrayC) {
    let indexA =0
    let indexB = -1
    let indexC =-1
    let maxArrayB =0
    let maxArrayC =0
    let summed
    
    let endgame = false
    
    let index =0
    while(index < arrayA.length && endgame !=true) {
    //   Hop A->B
        indexB=arrayA[indexA] 
        if(indexB>= arrayB.length) {endgame=true}
        
        if(arrayB[indexB] > maxArrayB) {
            maxArrayB = arrayB[indexB]
        }
    //   Hop B->A
        indexA=arrayB[indexB]
        if(indexA>= arrayA.length) {endgame=true}
    //   Hop A->C
        indexC= arrayA[indexA]
        if(indexA >= arrayA.length) {endgame=true}

        if(arrayC[indexC] > maxArrayC) {
            maxArrayC = arrayC[indexC]
        }
    //   Hop C->A
        indexA=arrayC[indexC]
        if(indexA>= arrayA.length) {endgame=true}
        index++
    }
    summed = maxArrayB+maxArrayC
    console.log(summed)
    return summed

}

module.exports = { solution };
