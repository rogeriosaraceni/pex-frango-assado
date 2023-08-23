"use strict";

/** ////////////////////////////////////////////////////////////////////
 * Form JS
 *
 * - convertToFloatNumber
 * - formataMascara
 * - FormataValor
 * - numberFormat
 * - stringToNumber
 * - somenteNumero
 * -
 *
--------------------------------------------------------------------- */

/** --------------------------------------------------------------------
 * convertToFloatNumber
--------------------------------------------------------------------- */
var convertToFloatNumber = function (value) {
    value = value.toString();
    if (value.indexOf(".") !== -1 && value.indexOf(",") !== -1) {
        if (value.indexOf(".") < value.indexOf(",")) {
            //inglês
            return parseFloat(value.split(".").join("").split(",").join("."));
        } else {
            //português
            return parseFloat(value.split(",").join("."));
        }
    } else {
        return parseFloat(value.split(",").join("."));
    }
};

/** --------------------------------------------------------------------
 * formataMascara
--------------------------------------------------------------------- */
var formataMascara = function (value, casas) {
    value = value.toString();
    if (value.indexOf(".") !== -1 && value.indexOf(",") !== -1) {
        if (value.indexOf(".") < value.indexOf(",")) {
            //inglês
            return parseFloat(value.split(".").join("").split(",").join("."));
        } else {
            //português
            return parseFloat(value.split(",").join("."));
        }
    } else {
        return parseFloat(value.split(",").join("."));
    }
};

/** --------------------------------------------------------------------
 * FormataValor
--------------------------------------------------------------------- */
function FormataValor(objeto, teclapres, tammax, decimais) {
    if (teclapres.which == 13) {
        mudaInput(objeto);
        teclapres.preventDefault();
        return;
    }

    var milhar = ".";
    var decimal = ",";

    var tecla = teclapres.keyCode;
    var tamanhoObjeto = objeto.value.length;
    var ctrlDown = teclapres.ctrlKey || teclapres.metaKey;

    if (tecla == 8 && tamanhoObjeto == tammax) {
        tamanhoObjeto = tamanhoObjeto - 1;
    }

    if (tecla == 109 || tecla == 189) {
        vr = objeto.value;
        if (vr.indexOf("-") == -1) {
            vr = "-" + vr;
        } else {
            vr = vr.replace("-", "");
        }
        objeto.value = vr;
    }
    if (
        (tecla == 8 ||
            tecla == 88 ||
            (tecla >= 48 && tecla <= 57) ||
            (tecla >= 96 && tecla <= 105)) &&
        tamanhoObjeto + 1 <= tammax
    ) {
        vr = objeto.value;

        negativo = false;
        if (vr.indexOf("-") != -1) negativo = true;

        vr = vr.replace("-", "");
        vr = vr.replace("/", "");
        vr = vr.replace("/", "");
        vr = vr.replace(",", "");
        vr = vr.replace(".", "");
        vr = vr.replace(".", "");
        vr = vr.replace(".", "");
        vr = vr.replace(".", "");
        vr = vr.replace(".", "");
        vr = vr.replace(".", "");

        tam = vr.length;
        if (tam < tammax && tecla != 8) {
            tam = vr.length + 1;
        }
        if (tecla == 8 && tam > 1) {
            tam = tam - 1;
            vr = objeto.value;
            vr = vr.replace("-", "");
            vr = vr.replace("/", "");
            vr = vr.replace("/", "");
            vr = vr.replace(",", "");
            vr = vr.replace(".", "");
            vr = vr.replace(".", "");
            vr = vr.replace(".", "");
            vr = vr.replace(".", "");
        }
        if (
            tecla == 8 ||
            (tecla >= 48 && tecla <= 57) ||
            (tecla >= 96 && tecla <= 105)
        ) {

			retorno = "";

			if ( window.getSelection().toString().length == objeto.value.length ){
				retorno = "0,00";
				window.event.preventDefault();
				window.event.stopPropagation();
			}else{
				if (decimais > 0) {
					if (tam <= decimais) {
						retorno = "0," + vr;
					}
					if (tam == decimais + 1 && tecla == 8) {
						retorno =
							vr.substr(0, tam - decimais) +
							decimal +
							vr.substr(tam - decimais, tam);
					}
					if (
						tam > decimais + 1 &&
						tam <= decimais + 3 &&
						vr.substr(0, 1) == "0"
					) {
						retorno =
							vr.substr(1, tam - (decimais + 1)) +
							decimal +
							vr.substr(tam - decimais, tam);
					}
					if (
						tam > decimais + 1 &&
						tam <= decimais + 3 &&
						vr.substr(0, 1) != "0"
					) {
						retorno =
							vr.substr(0, tam - decimais) +
							decimal +
							vr.substr(tam - decimais, tam);
					}
					if (tam >= decimais + 4 && tam <= decimais + 6) {
						retorno =
							vr.substr(0, tam - (decimais + 3)) +
							milhar +
							vr.substr(tam - (decimais + 3), 3) +
							decimal +
							vr.substr(tam - decimais, tam);
					}
					if (tam >= decimais + 7 && tam <= decimais + 9) {
						retorno =
							vr.substr(0, tam - (decimais + 6)) +
							milhar +
							vr.substr(tam - (decimais + 6), 3) +
							milhar +
							vr.substr(tam - (decimais + 3), 3) +
							decimal +
							vr.substr(tam - decimais, tam);
					}
					if (tam >= decimais + 10 && tam <= decimais + 12) {
						retorno =
							vr.substr(0, tam - (decimais + 9)) +
							milhar +
							vr.substr(tam - (decimais + 9), 3) +
							milhar +
							vr.substr(tam - (decimais + 6), 3) +
							milhar +
							vr.substr(tam - (decimais + 3), 3) +
							decimal +
							vr.substr(tam - decimais, tam);
					}
					if (tam >= decimais + 13 && tam <= decimais + 15) {
						retorno =
							vr.substr(0, tam - (decimais + 12)) +
							milhar +
							vr.substr(tam - (decimais + 12), 3) +
							milhar +
							vr.substr(tam - (decimais + 9), 3) +
							milhar +
							vr.substr(tam - (decimais + 6), 3) +
							milhar +
							vr.substr(tam - (decimais + 3), 3) +
							decimal +
							vr.substr(tam - decimais, tam);
					}
				} else if (decimais == 0) {
					if (tam <= 3) {
						retorno = vr;
					}
					if (tam >= 4 && tam <= 6) {
						if (tecla == 8) {
							retorno = vr.substr(0, tam);

							if (negativo) retorno = "-" + retorno;
							objeto.value = retorno;

							window.event.cancelBubble = true;
							window.event.returnValue = false;
						}
						retorno = vr.substr(0, tam - 3) + milhar + vr.substr(tam - 3, 3);
					}
					if (tam >= 7 && tam <= 9) {
						if (tecla == 8) {
							retorno = vr.substr(0, tam);

							if (negativo) retorno = "-" + retorno;
							objeto.value = retorno;

							window.event.cancelBubble = true;
							window.event.returnValue = false;
						}
						retorno =
							vr.substr(0, tam - 6) +
							milhar +
							vr.substr(tam - 6, 3) +
							milhar +
							vr.substr(tam - 3, 3);
					}
					if (tam >= 10 && tam <= 12) {
						if (tecla == 8) {
							retorno = vr.substr(0, tam);

							if (negativo) retorno = "-" + retorno;
							objeto.value = retorno;

							window.event.cancelBubble = true;
							window.event.returnValue = false;
						}
						retorno =
							vr.substr(0, tam - 9) +
							milhar +
							vr.substr(tam - 9, 3) +
							milhar +
							vr.substr(tam - 6, 3) +
							milhar +
							vr.substr(tam - 3, 3);
					}

					if (tam >= 13 && tam <= 15) {
						if (tecla == 8) {
							retorno = vr.substr(0, tam);

							if (negativo) retorno = "-" + retorno;
							objeto.value = retorno;

							window.event.cancelBubble = true;
							window.event.returnValue = false;
						}
						retorno =
							vr.substr(0, tam - 12) +
							milhar +
							vr.substr(tam - 12, 3) +
							milhar +
							vr.substr(tam - 9, 3) +
							milhar +
							vr.substr(tam - 6, 3) +
							milhar +
							vr.substr(tam - 3, 3);
					}
				}

			}

            if (negativo) retorno = "-" + retorno;
            objeto.value = retorno;
        }
    } else if ( tecla == 46 ){
			if ( window.getSelection().toString().length == objeto.value.length ){
				objeto.value = "0,00";
				window.event.preventDefault();
				window.event.stopPropagation();
			}
	}else if (
        window.event.keyCode != 8 &&
        window.event.keyCode != 9 &&
        window.event.keyCode != 13 &&
        window.event.keyCode != 35 &&
        window.event.keyCode != 36 &&
        window.event.keyCode != 46
    ) {
        if (!(ctrlDown && window.event.keyCode == 86)) {
            window.event.cancelBubble = true;
            window.event.returnValue = false;
        } else {
            objeto.value = "";
        }
    }
}

/** --------------------------------------------------------------------
 * numberFormat
--------------------------------------------------------------------- */
function numberFormat(number, decimals, dec_point, thousands_sep) {
    var n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = typeof thousands_sep === "undefined" ? "," : thousands_sep,
        dec = typeof dec_point === "undefined" ? "." : dec_point,
        toFixedFix = function (n, prec) {
            var k = Math.pow(10, prec);
            return Math.round(n * k) / k;
        },
        s = (prec ? toFixedFix(n, prec) : Math.round(n)).toString().split(".");
    if (s[0].length > 3) {
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || "").length < prec) {
        s[1] = s[1] || "";
        s[1] += new Array(prec - s[1].length + 1).join("0");
    }
    return s.join(dec);
}

/** --------------------------------------------------------------------
 * stringToNumber
--------------------------------------------------------------------- */

function stringToNumber(value) {
    if (typeof value === 'undefined') {
        return '';
    }

    value = value.toString().replace(/[%]/g, '');

    let temp = '';
    // console.log(value);
    if (value.indexOf('.') !== -1 && value.indexOf(',') !== -1) {
        if (value.indexOf('.') < value.indexOf(',')) {
            // inglês
            temp = parseFloat(value.split('.').join('').split(',').join('.'));
        } else {
            // português
            temp = parseFloat(value.split(',').join(''));
        }
    } else if (value.indexOf('.') !== -1) {
        temp = parseFloat(value);
    } else if (value.indexOf(',') !== -1) {
        temp = parseFloat(value.split(',').join('.'));
    } else {
        temp = parseFloat(value);
    }
    // console.log(temp);
    return Number.isNaN(temp) ? 0 : temp;
}

/** --------------------------------------------------------------------
 * somenteNumero
--------------------------------------------------------------------- */
function somenteNumero(e) {
    var i = window.evt ? evt.keyCode : e.which;
    return i > 47 && i < 58 || (8 == i || 0 == i || 45 == i)
}
