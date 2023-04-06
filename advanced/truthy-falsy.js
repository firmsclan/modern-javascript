const products = [{name: 'Computer mouse'}]
const product = products[0]

//truthy - values that resolve to true in boolean context

//flasy values that resolve to false in boolean context

//falsy values = false, 0, empty string, null, undefined, NaN
product ? console.log('product found') : console.log('product not found')