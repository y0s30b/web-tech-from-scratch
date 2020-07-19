const {positive, negative, zero} = require('./var');

function checkSign(val){
    // val이 number라는 것을 가정
    if(val > 0){
        return `${val}은 ${positive}.`;
    }
    else if(val == 0){
        return `${val}은 ${zero}.`;
    }
    else {
        return `${val}은 ${negative}.`;
    }
}

module.exports = checkSign;