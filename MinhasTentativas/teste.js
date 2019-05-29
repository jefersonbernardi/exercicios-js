const _ = require('lodash');
const catNova = require('./catNova')
const catVelha= require('./bancoDeDados')

var count= 0

    catVelha.forEach(x => {
        catNova.forEach(y => {
            if(x.id ==y.id){
                console.log(x)
                count++
            }
        });
    });
    console.log(count)