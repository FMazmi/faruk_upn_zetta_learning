/**
 * @param {Book} book
 * @param {Number} discount
 * @param {Number} tax
 * @param {Number} stock
 * @param {Number} totalOrder
 * @param {Number} credit
 */

 function countPrice(book, discount, tax, stock, totalOrder, credit){
    let totalPay = 0;
    let totalPrice = 0;
    let totalAfterDiscount = 0;
    let totalTax = 0;
    let priceInstallment = 0;
    
    const price = book.price;
    const totaldiscount = price * (discount/100);
    const priceAfterDiscount = price - totaldiscount;
    const priceTax = priceAfterDiscount * (tax/100);

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
        console.log('Harga setelah Diskon\t: Rp.',totalAfterDiscount);
        console.log('Biaya Pajak \t\t: Rp.',totalTax)
        console.log('Total Pembayaran \t: Rp.',totalPay)
        console.log('====================================');
        console.log('Stok yang tersedia:', stock - totalOrder);
        console.log();
        console.log('=> Anda melakukan cicilan sebanyak:', credit, 'kali')
        console.log();
        console.groupEnd();
    }
    priceInstallment = totalPay / credit;
    let installment = [];
    for (let index = 0; index < credit; index++){
        installment.push({
            Angsuran_Bulan_Ke: index + 1,
            Rp: priceInstallment
        })
    }
    console.log(Array.from(installment));
    return totalPay;
}
countPrice({tittle: "Album RedVelvet", price:5000000, publish: true}, 20, 10, 10, 8, 12);
countPrice({tittle: "Album Twice", price:1000000, publish: false}, 20, 10, 5, 5, 12);
countPrice({tittle: "Album NCT", price:1500000, publish: true}, 20, 10, 5, 0, 0);