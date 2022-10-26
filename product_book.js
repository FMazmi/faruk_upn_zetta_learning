/**
 * @param {Book} book
 * @param {Number} discount
 * @param {Number} tax
 * @param {Number} stock
 * @param {Number} totalOrder
 */

 function countPrice(book, discount, tax, stock, totalOrder){
    let totalPay = 0;
    let totalPrice = 0;
    let totalAfterDiscount = 0;
    let totalTax = 0;
    
    const price = book.price;
    const totaldiscount = price * (discount/100);
    const priceAfterDiscount = price - totaldiscount;
    const priceTax = priceAfterDiscount * (tax/100);
    const priceAfterTax = priceAfterDiscount + priceTax;

    for(let index = 0; index < totalOrder; index++){
        if(book && book.price && (index < stock)){
            totalPrice += book.price;
            totalAfterDiscount += priceAfterDiscount;
            totalTax += priceTax;
        }
        else{
            console.log('Stock has run Out!');
            break;
        }
    }
    totalPay = totalAfterDiscount + totalTax;
    if(book && book.price){
        
        console.group();
        console.log('------------------------------------');
        console.log(book.tittle);
        console.log('Harga Satuan \t\t: Rp.',price);
        console.log('Jumlah Order \t\t:', totalOrder);
        console.log('Total Harga \t\t: Rp.',totalPrice)
        console.log('Total Diskon \t\t: Rp.',totaldiscount);
        console.log('Harga setelah Diskon: Rp.',totalAfterDiscount);
        console.log('Biaya Pajak \t\t: Rp.',totalTax)
        console.log('Total Pembayaran \t: Rp.',totalPay)
        console.log('====================================');
        console.log('Stok yang tersedia:', stock - totalOrder);
        console.log();
        console.groupEnd();
    }
    return totalPay;
}
countPrice({tittle: "Album RedVelvet", price:5000, publish: true}, 50, 10, 10, 8);
countPrice({tittle: "Album Twice", price:10000, publish: false}, 50, 10, 5, 5);
countPrice({tittle: "Album NCT", price:15000, publish: true}, 50, 10, 5, 0);