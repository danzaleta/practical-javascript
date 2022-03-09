const validCodes = [
    {code: "DIS22", discount: 15},
    {code: "SUP22", discount: 30},
    {code: "ULT22", discount: 50}
];

function calcDiscount(price, discount){
    const percentToPay = 100 - discount;
    const totalToPay = (price*percentToPay)/100;

    return totalToPay;
}

function Discount() {
    const inputPrice = document.getElementById("input-price");
    const price = parseFloat(inputPrice.value);
    
    const inputDiscount = document.getElementById("input-discount");
    const codeValue = inputDiscount.value;

    const isValidCode = validCodes => validCodes.code === codeValue;
    const userCode = validCodes.find(isValidCode);

    if(!userCode){
        console.log(codeValue, validCodes.code);
        alert(`Code ${codeValue} is invalid`);
    }
    else
    {
        const discount = userCode.discount;
        const total = calcDiscount(price, discount);

        const result = document.getElementById("total");
        result.innerText = `Your discount is: ${discount}%. Total to pay: $${total}`;        
    }


    


}