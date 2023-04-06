const getTip = (amount)=>{

    if(typeof amount === 'number'){
       return amount * .15 
    }else{
        throw Error('Argument must be a number')
    }
}

try {
    const result = getTip(10)
    console.log(result)
}catch(err){
    console.log("ERROR", err)
}

