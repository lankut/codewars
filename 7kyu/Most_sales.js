const products = ["Computer", "Cell Phones", "Vacuum Cleaner"]
const amounts = [3, 24, 8]
const prices = [199, 299, 399]


function top3(products, amounts, prices) {
    let revenue = []
    for (let i = 0; i < amounts.length; i++) {
        let element = amounts[i] * prices[i];
        revenue.push({ product: products[i], totalRevenue: element })
    }

    revenue.sort((a, b) => b.totalRevenue - a.totalRevenue)
    const topProducts = revenue.slice(0, 3).map(item => item.product)
    return topProducts
}

console.log(top3(products, amounts, prices));