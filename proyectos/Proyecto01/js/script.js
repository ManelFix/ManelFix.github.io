"use strict";
var arrayProd = new Array();
var contador = 0;
function enterButton(event) {
    var btnGuardar = document.getElementById("btnGuardar");
    var btnModificar = document.getElementById("btnModificar");
    if (event.keyCode == 13) {
        if (btnGuardar.classList.contains("noShow")) {
            btnModificar.click();
        }
        else {
            btnGuardar.click();
        }
        event.returnValue = false;
    }
}
function guardarProd() {
    var _a;
    var txtProd = document.getElementById("iProducte").value;
    if (txtProd == "") {
        missatgeInfo("noValue", null);
    }
    else {
        var divPare = document.getElementById("divPare");
        var newDiv = document.createElement("div");
        var newP = document.createElement("p");
        var newClose = document.createElement("span");
        var newEdit = document.createElement("span");
        var txtP = document.createTextNode(txtProd);
        newP.appendChild(txtP);
        newDiv.classList.add("divProd");
        newClose.classList.add("bx");
        newClose.classList.add("bx-x");
        newClose.classList.add("icono");
        newClose.classList.add("iElim");
        newEdit.classList.add("bx");
        newEdit.classList.add("bxs-edit");
        newEdit.classList.add("icono");
        newEdit.classList.add("iEdit");
        newDiv.id = "div" + contador;
        newP.id = "prod" + contador;
        newDiv.appendChild(newP);
        newDiv.appendChild(newEdit);
        newDiv.appendChild(newClose);
        divPare.appendChild(newDiv);
        document.getElementById("iProducte").value = "";
        newClose.onclick = function () { eliminarProducte(this); };
        newEdit.onclick = function () { modificarProducte(this); };
        contador++;
        missatgeInfo("producteAfegit", null);
        (_a = document.getElementById("eliminar")) === null || _a === void 0 ? void 0 : _a.style.display = "grid";
    }
}
var divSuperior;
function eliminarProducte(info) {
    divSuperior = info.parentNode;
    var divPare = document.getElementById("divPare");
    var btnEliminar = document.getElementById("eliminar");
    var inputProd = document.getElementById("iProducte");
    var producte = divSuperior.firstChild.innerHTML;
    var btnGuardar = document.getElementById("btnGuardar");
    var btnModificar = document.getElementById("btnModificar");
    while (divSuperior.firstChild) {
        divSuperior.removeChild(divSuperior.firstChild);
    }
    divPare.removeChild(divSuperior);
    if (!divPare.hasChildNodes()) {
        btnEliminar.style.display = "none";
    }
    if (btnGuardar.classList.contains("noShow")) {
        if (producte == inputProd.value) {
            btnGuardar.classList.remove("noShow");
            btnGuardar.classList.add("show");
            btnModificar.classList.remove("show");
            btnModificar.classList.add("noShow");
            inputProd.value = "";
        }
    }
    missatgeInfo("prodEliminat", producte);
}
function modificarProducte(info) {
    divSuperior = info.parentNode;
    var btnGuardar = document.getElementById("btnGuardar");
    var btnModificar = document.getElementById("btnModificar");
    var inputProd = document.getElementById("iProducte");
    var producte = divSuperior.firstChild.innerHTML;
    inputProd.value = producte;
    btnModificar.classList.remove("noShow");
    btnModificar.classList.add("show");
    btnGuardar.classList.remove("show");
    btnGuardar.classList.add("noShow");
}
function guardarModProd() {
    var modProd = document.getElementById("iProducte");
    var btnGuardar = document.getElementById("btnGuardar");
    var btnModificar = document.getElementById("btnModificar");
    var anteriorNom = divSuperior.firstChild.innerHTML;
    divSuperior.firstChild.innerHTML = modProd.value;
    modProd.value = "";
    btnModificar.classList.add("noShow");
    btnModificar.classList.remove("show");
    btnGuardar.classList.remove("noShow");
    btnGuardar.classList.add("show");
    missatgeInfo("prodModificat", anteriorNom);
}
function eliminarTot() {
    var divPare = document.getElementById("divPare");
    var btnEliminar = document.getElementById("eliminar");
    var inputProd = document.getElementById("iProducte");
    var btnGuardar = document.getElementById("btnGuardar");
    var btnModificar = document.getElementById("btnModificar");
    while (divPare.firstChild) {
        divPare.removeChild(divPare.firstChild);
    }
    if (btnGuardar.classList.contains("noShow")) {
        btnGuardar.classList.remove("noShow");
        btnGuardar.classList.add("show");
        btnModificar.classList.remove("show");
        btnModificar.classList.add("noShow");
    }
    inputProd.value = "";
    missatgeInfo("totEliminat", null);
    btnEliminar.style.display = "none";
}
function missatgeInfo(missatge, textMostrar) {
    //Posar cooldown de botons
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
    switch (missatge) {
        case "noValue":
            (_a = document.getElementById("resposta")) === null || _a === void 0 ? void 0 : _a.style.visibility = "visible";
            (_b = document.getElementById("resposta")) === null || _b === void 0 ? void 0 : _b.innerHTML = "No puedes crear un producto en blanco";
            (_c = document.getElementById("resposta")) === null || _c === void 0 ? void 0 : _c.style.backgroundColor = "#E98E8E";
            setTimeout(eliminarText, 1000);
            break;
        case "producteAfegit":
            (_d = document.getElementById("resposta")) === null || _d === void 0 ? void 0 : _d.style.visibility = "visible";
            (_e = document.getElementById("resposta")) === null || _e === void 0 ? void 0 : _e.innerHTML = "Producto añadido a la lista";
            (_f = document.getElementById("resposta")) === null || _f === void 0 ? void 0 : _f.style.backgroundColor = "#a7cfa7";
            setTimeout(eliminarText, 1000);
            break;
        case "totEliminat":
            (_g = document.getElementById("resposta")) === null || _g === void 0 ? void 0 : _g.style.visibility = "visible";
            (_h = document.getElementById("resposta")) === null || _h === void 0 ? void 0 : _h.innerHTML = "Todos los productos eliminados";
            (_j = document.getElementById("resposta")) === null || _j === void 0 ? void 0 : _j.style.backgroundColor = "#E7BBC5";
            setTimeout(eliminarText, 1000);
            break;
        case "prodEliminat":
            (_k = document.getElementById("resposta")) === null || _k === void 0 ? void 0 : _k.style.visibility = "visible";
            (_l = document.getElementById("resposta")) === null || _l === void 0 ? void 0 : _l.innerHTML = textMostrar + " eliminado";
            (_m = document.getElementById("resposta")) === null || _m === void 0 ? void 0 : _m.style.backgroundColor = "#EFE0E4";
            setTimeout(eliminarText, 1000);
            break;
        case "prodModificat":
            (_o = document.getElementById("resposta")) === null || _o === void 0 ? void 0 : _o.style.visibility = "visible";
            (_p = document.getElementById("resposta")) === null || _p === void 0 ? void 0 : _p.innerHTML = textMostrar + " modificado correctamente";
            (_q = document.getElementById("resposta")) === null || _q === void 0 ? void 0 : _q.style.backgroundColor = "#a6b9e5";
            setTimeout(eliminarText, 1000);
            break;
        default:
            break;
    }
}
function eliminarText() {
    var _a, _b, _c;
    (_a = document.getElementById("resposta")) === null || _a === void 0 ? void 0 : _a.innerHTML = "";
    (_b = document.getElementById("resposta")) === null || _b === void 0 ? void 0 : _b.style.backgroundColor = "white";
    (_c = document.getElementById("resposta")) === null || _c === void 0 ? void 0 : _c.style.visibility = "hidden";
}
