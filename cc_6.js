// Task 1: Function Declaration
function calculateProfit(costPrice, sellingPrice, unitsSold) {
    const profit = (sellingPrice - costPrice) * unitsSold;
    console.log(`Total Profit: $${profit}`);
    return profit;
}


calculateProfit(20, 30, 100); 
calculateProfit(50, 70, 200); 
// Task 2: Function Expression
const calculateSalesTax = function(amount, taxRate) {
    const salesTax = amount * taxRate;
    console.log(`Sales Tax: $${salesTax}`);
    return salesTax;
};


calculateSalesTax(100, 0.07); 
calculateSalesTax(500, 0.1); 
// Task 3: Arrow Function
const calculateBonus = (salary, performanceRating) => {
    let bonusPercentage;
    switch (performanceRating) {
        case "Excellent":
            bonusPercentage = 0.2;
            break;
        case "Good":
            bonusPercentage = 0.1;
            break;
        case "Average":
            bonusPercentage = 0.05;
            break;
        default:
            bonusPercentage = 0;
    }
    const bonus = salary * bonusPercentage;
    console.log(`Bonus: $${bonus}`);
    return bonus;
};


calculateBonus(5000, "Excellent"); 
calculateBonus(7000, "Good");      