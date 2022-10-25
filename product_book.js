/**
 * @param {Book} book
 * @param {Number} discount
 * @param {Number} tax
 */

function countPrice(book, discount, tax){
    let result = 0;
    if(book && book.price){
        const price = book.price;
        const totaldiscount = price * (discount/100);
        const priceAfterDiscount = price - totaldiscount;
        const totaltax = priceAfterDiscount * (tax/100);
        const priceAfterTax = priceAfterDiscount + totaltax;
        result += priceAfterTax;
        
        console.group();
        console.log('------------------------------------')
        console.log('Harga Asli \t\t: Rp.', price);
        console.log('Total Diskon \t\t: Rp.', totaldiscount);
        console.log('Harga setelah Diskon: Rp.', priceAfterDiscount);
        console.log('Total Pajak \t\t: Rp.', totaltax);
        console.log('Total setelah Pajak: Rp.', priceAfterTax)
        console.log()
        console.groupEnd();
    }
    return 0;
}
countPrice({tittle: "Album 1", price:5000, publish: true}, 50, 10);
countPrice({tittle: "Album 2", price:10000, publish: false}, 50, 10);
countPrice({tittle: "Album 3", price:15000, publish: true}, 50, 10);