
var arrayProd:any = new Array();
var contador:any = 0;

function enterButton(event:any){
    var btnGuardar:any = document.getElementById("btnGuardar");
    var btnModificar:any = document.getElementById("btnModificar");

    if (event.keyCode == 13) {
        if(btnGuardar.classList.contains("noShow")){
            btnModificar.click(); 
        }
        else{
            btnGuardar.click(); 
        }
        event.returnValue = false;
    }
}


function guardarProd(){
    var txtProd:any = document.getElementById("iProducte").value;

    if(txtProd == ""){
        missatgeInfo("noValue", null);
    }
    else{
        var divPare:any = document.getElementById("divPare");
    
        var newDiv:any = document.createElement("div");
        var newP:any = document.createElement("p");
        var newClose:any = document.createElement("span");
        var newEdit:any = document.createElement("span");
        
        var txtP:any = document.createTextNode(txtProd);
        newP.appendChild(txtP);
    
        newDiv.classList.add("divProd");
        newClose.classList.add("bx");
        newClose.classList.add("bx-x");
        newClose.classList.add("icono");
        newClose.classList.add("iElim")
        newEdit.classList.add("bx");
        newEdit.classList.add("bxs-edit");
        newEdit.classList.add("icono");
        newEdit.classList.add("iEdit");

        newDiv.id = "div"+contador;
        newP.id = "prod"+contador;
    
        newDiv.appendChild(newP);
        newDiv.appendChild(newEdit);
        newDiv.appendChild(newClose);
    
        divPare.appendChild(newDiv);
        document.getElementById("iProducte").value = "";

        newClose.onclick = function(){eliminarProducte(this)};
        newEdit.onclick = function(){modificarProducte(this)};
    
        contador++;

        missatgeInfo("producteAfegit", null);
        document.getElementById("eliminar")?.style.display = "grid";
    }
}

var divSuperior:any;

function eliminarProducte(info:any){
    divSuperior = info.parentNode;
    var divPare:any = document.getElementById("divPare");
    var btnEliminar:any = document.getElementById("eliminar");
    var inputProd:any = document.getElementById("iProducte");
    var producte:any = divSuperior.firstChild.innerHTML;
    var btnGuardar:any = document.getElementById("btnGuardar");
    var btnModificar:any = document.getElementById("btnModificar");

    while (divSuperior.firstChild) {
        divSuperior.removeChild(divSuperior.firstChild);
    }

    divPare.removeChild(divSuperior);
    
    if(!divPare.hasChildNodes()){
        btnEliminar.style.display = "none";
    }

    if(btnGuardar.classList.contains("noShow")){
        if(producte == inputProd.value){
            btnGuardar.classList.remove("noShow");
            btnGuardar.classList.add("show");
            btnModificar.classList.remove("show");
            btnModificar.classList.add("noShow");
            inputProd.value = "";
        }
    }

    missatgeInfo("prodEliminat", producte);

}

function modificarProducte(info:any){
    divSuperior = info.parentNode;
    var btnGuardar:any = document.getElementById("btnGuardar");
    var btnModificar:any = document.getElementById("btnModificar");
    var inputProd:any = document.getElementById("iProducte");
    var producte:any = divSuperior.firstChild.innerHTML;

    inputProd.value = producte;

    btnModificar.classList.remove("noShow");
    btnModificar.classList.add("show");
    btnGuardar.classList.remove("show");
    btnGuardar.classList.add("noShow");

}

function guardarModProd(){
    var modProd:any = document.getElementById("iProducte");
    var btnGuardar:any = document.getElementById("btnGuardar");
    var btnModificar:any = document.getElementById("btnModificar");
    var anteriorNom:any = divSuperior.firstChild.innerHTML;
    divSuperior.firstChild.innerHTML = modProd.value;
    
    modProd.value = "";
    
    btnModificar.classList.add("noShow");
    btnModificar.classList.remove("show");
    btnGuardar.classList.remove("noShow");
    btnGuardar.classList.add("show");
    
    missatgeInfo("prodModificat", anteriorNom);
}

function eliminarTot(){
    var divPare:any = document.getElementById("divPare");
    var btnEliminar:any = document.getElementById("eliminar");
    var inputProd:any = document.getElementById("iProducte");
    var btnGuardar:any = document.getElementById("btnGuardar");
    var btnModificar:any = document.getElementById("btnModificar");

    while (divPare.firstChild) {
        divPare.removeChild(divPare.firstChild);
    }

    if(btnGuardar.classList.contains("noShow")){
        btnGuardar.classList.remove("noShow");
        btnGuardar.classList.add("show");
        btnModificar.classList.remove("show");
        btnModificar.classList.add("noShow");
    }

    inputProd.value = "";
    missatgeInfo("totEliminat", null);
    btnEliminar.style.display = "none";

}

function missatgeInfo(missatge:string, textMostrar:any){
    //Posar cooldown de botons

    switch (missatge) {
        case "noValue":
            document.getElementById("resposta")?.style.visibility = "visible";
            document.getElementById("resposta")?.innerHTML = "No puedes crear un producto en blanco";
            document.getElementById("resposta")?.style.backgroundColor = "#E98E8E";
            setTimeout(eliminarText, 1000);
            break;
        case "producteAfegit":
            document.getElementById("resposta")?.style.visibility = "visible";
            document.getElementById("resposta")?.innerHTML = "Producto añadido a la lista";
            document.getElementById("resposta")?.style.backgroundColor = "#a7cfa7";
            setTimeout(eliminarText, 1000);
            break;
        case "totEliminat":
            document.getElementById("resposta")?.style.visibility = "visible";
            document.getElementById("resposta")?.innerHTML = "Todos los productos eliminados";
            document.getElementById("resposta")?.style.backgroundColor = "#E7BBC5";
            setTimeout(eliminarText, 1000);
            break;
        case "prodEliminat":
            document.getElementById("resposta")?.style.visibility = "visible";
            document.getElementById("resposta")?.innerHTML = textMostrar +  " eliminado";
            document.getElementById("resposta")?.style.backgroundColor = "#EFE0E4";
            setTimeout(eliminarText, 1000);
            break;
        case "prodModificat":
            document.getElementById("resposta")?.style.visibility = "visible";
            document.getElementById("resposta")?.innerHTML = textMostrar +  " modificado correctamente";
            document.getElementById("resposta")?.style.backgroundColor = "#a6b9e5";
            setTimeout(eliminarText, 1000);
            break;
        default:
            break;
    }

}

function eliminarText(){
    document.getElementById("resposta")?.innerHTML = "";
    document.getElementById("resposta")?.style.backgroundColor = "white";
    document.getElementById("resposta")?.style.visibility = "hidden";
}