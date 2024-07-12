export default function formatPrice(number) {
    let numberStr = number.toString();

    let arrayFormatedNumber = [];
    
    for (let i = numberStr.length - 1; i >= 0; i--) {
        arrayFormatedNumber.unshift(numberStr[i]);
        
        if ((numberStr.length - i) % 3 === 0 && i !== 0) {
            arrayFormatedNumber.unshift('.');
        }
    }
    
    let formatedNumber = arrayFormatedNumber.join('');
    
    return formatedNumber;
};