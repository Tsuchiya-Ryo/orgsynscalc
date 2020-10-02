$(document).ready(function() {
    $("input[type=number]").on("focus", function() {
        $(this).on("keydown", function(event) {
            if (event.keyCode === 38 || event.keyCode === 40) {
                event.preventDefault();
            }
        });
    });

});


function Calculate() {
    if (document.getElementById("box").checked) {
        calc.mmol_A.value = (calc.mg_A.value * (calc.purity_A.value / 100) / calc.molwt_A.value);
    } else {
        calc.mg_A.value = (calc.molwt_A.value * calc.mmol_A.value / (calc.purity_A.value / 100));
    }

    calc.mL_A.value = (calc.mg_A.value / (1000 * calc.density_A.value));

    calc.mmol_B.value = (calc.eq_B.value / calc.eq_A.value * calc.mmol_A.value);
    calc.mg_B.value = (calc.molwt_B.value * calc.mmol_B.value / (calc.purity_B.value / 100));
    calc.mL_B.value = (calc.mg_B.value / (1000 * calc.density_B.value));

    calc.mmol_C.value = (calc.eq_C.value / calc.eq_A.value * calc.mmol_A.value);
    calc.mg_C.value = (calc.molwt_C.value * calc.mmol_C.value / (calc.purity_C.value / 100));
    calc.mL_C.value = (calc.mg_C.value / (1000 * calc.density_C.value));

    calc.mmol_D.value = (calc.eq_D.value / calc.eq_A.value * calc.mmol_A.value);
    calc.mg_D.value = (calc.molwt_D.value * calc.mmol_D.value / (calc.purity_D.value / 100));
    calc.mL_D.value = (calc.mg_D.value / (1000 * calc.density_D.value));

    calc.mmol_E.value = (calc.eq_E.value / calc.eq_A.value * calc.mmol_A.value);
    calc.mg_E.value = (calc.molwt_E.value * calc.mmol_E.value / (calc.purity_E.value / 100));
    calc.mL_E.value = (calc.mg_E.value / (1000 * calc.density_E.value));

    if (document.getElementById("switchM").checked){
        calc.conc_m.value = calc.mmol_A.value / calc.sol_mL_m.value;
    } else {
        calc.sol_mL_m.value = calc.mmol_A.value / calc.conc_m.value;
    }
    if (document.getElementById("switchW").checked){
        calc.conc_w.value = 100 * calc.mg_A.value / (calc.mg_A.value*1 + calc.sol_mg_w.value*1);
    } else {
        calc.sol_mg_w.value = calc.mg_A.value * (100 - calc.conc_w.value) / calc.conc_w.value;        
    }

    calc.vol1.value = calc.sol_mL_m.value * calc.ratio1.value*1 / (calc.ratio1.value*1 + calc.ratio2.value*1 + calc.ratio3.value*1);
    calc.vol2.value = calc.sol_mL_m.value * calc.ratio2.value*1 / (calc.ratio1.value*1 + calc.ratio2.value*1 + calc.ratio3.value*1);
    calc.vol3.value = calc.sol_mL_m.value * calc.ratio3.value*1 / (calc.ratio1.value*1 + calc.ratio2.value*1 + calc.ratio3.value*1);
}
