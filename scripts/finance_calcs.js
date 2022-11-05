// calculation to find 30% threshold for living accommodations
function calculate_housing_percentage(cost, gross_income) {
    percent_of_gross_income = (cost / gross_income) * 100;
    return percent_of_gross_income;
}

percent = (parseFloat(calculate_housing_percentage(900, 1800)).toFixed(0)+"%");
console.log(percent);
