async function modifyArrays(indices,modify){
    return new Promise(async resolve => {
    if(modify) boxpoint[indices[0]+1]=1;
    indices.shift()
    if (indices.length!=0){
        await fail(canvasArray[indices[0]],indices)
        resolve('resolved')
    }
    else{
        resolve('resolved')
    }
})
}