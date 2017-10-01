angular.module('DiscountCalcApp', [])
    .controller('DiscountCalculatorController', function() {
        var discount_calc = this;

        discount_calc.generate_keywords = function() {

            cur_fee = discount_calc.fee;
            refer_std_count = discount_calc.referred;
            discount = discount_calc.disc || 10;

            for(count = 1; count <= refer_std_count; count++){
               cur_fee = cur_fee - cur_fee*discount/100;
            }

            discount_calc.discounted_fee = parseInt(cur_fee)
        };
    });
