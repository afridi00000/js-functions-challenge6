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
// Task 4: Parameters and Arguments
function calculateSubscriptionCost(plan, months, discount = 0) {
    let monthlyCost;
    switch (plan) {
        case "Basic":
            monthlyCost = 10;
            break;
        case "Premium":
            monthlyCost = 20;
            break;
        case "Enterprise":
            monthlyCost = 50;
            break;
        default:
            monthlyCost = 0;
    }
    const totalCost = monthlyCost * months * (1 - discount / 100);
    console.log(`Total Cost: $${totalCost}`);
    return totalCost;
}


calculateSubscriptionCost("Basic", 6, 10); 
calculateSubscriptionCost("Premium", 12, 0); 
// Task 5: Returning Values
function convertCurrency(amount, exchangeRate) {
    const convertedAmount = amount * exchangeRate;
    console.log(`Converted Amount: $${convertedAmount.toFixed(2)}`);
    return convertedAmount;
}


convertCurrency(100, 1.1); 
convertCurrency(250, 0.85); 
// Task 6: Higher-Order Functions
function applyBulkDiscount(orders, discountFunction) {
    const discountedOrders = orders.map(discountFunction);
    console.log(discountedOrders);
    return discountedOrders;
}


let orders = [200, 600, 1200, 450, 800];
applyBulkDiscount(orders, amount => amount > 500 ? amount * 0.9 : amount);

// Task 7: Closures
function createExpenseTracker() {
    let totalExpenses = 0;
    return function(expense) {
        totalExpenses += expense;
        console.log(`Total Expenses: $${totalExpenses}`);
        return totalExpenses;
    };
}

let tracker = createExpenseTracker();
console.log(tracker(200)); 
console.log(tracker(150)); 