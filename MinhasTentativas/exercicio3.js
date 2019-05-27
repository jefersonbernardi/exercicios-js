const array1 = [1,3,5,7,10]
const array2= [2,4,5,6,10]


array1.filter(function(param){
 if (param== array2.length){
     console.log(`Manter esse elemento ${param}`)
 } else if(param != array2.length){
     console.log(`Retirar esse elemento ${param}`)
 }
})

array2.forEach(function(param){
    if( param != array1.length){
        console.log(`Adicionar esse elemento ${param}`)
    }
})