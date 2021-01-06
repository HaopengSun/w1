const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

const companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

const calculateSalesTax = function(salesData, taxRates) {
  const result = {};
  for (const person of salesData){
    const total = totalSalesNum(person.sales);
    const tax = whichProvince(person.province, taxRates) * total;
    // if in the result, there is no key named person.name, create one
    if (!result[person.name]){
      result[person.name] = {totalSales: 0, totalTaxes: 0};
    }
    result[person.name].totalSales += total;
    result[person.name].totalTaxes += tax;
  }
  return result;
}
// return a number type tax rate based on the province the person lives
const whichProvince = function(province, taxRates){
  for (const rate in taxRates){
    if (province === rate){
      return Number(taxRates[province]);
    }
  }
}
// return a number type total sale number
const totalSalesNum = function(arr){
  let total = 0;
  for (const element of arr){
    total += element;
  }
  return total;
}

console.log(calculateSalesTax(companySalesData, salesTaxRates));