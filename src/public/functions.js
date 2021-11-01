
// ----------- Para mostrar el mensaje de guardado -----------------
let alertPlaceholder = document.getElementById('liveAlertPlaceholder');
let alertTrigger = document.getElementById('btnGuardar');
    
function alert(message, type) {
    let wrapper = document.createElement('div')
    wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
    alertPlaceholder.append(wrapper)
    };
    
if (alertTrigger) {
    alertTrigger.addEventListener('click', function () {
    alert('Datos guardados en base de datos!', 'success')
})};
// ---------------------------------------------------------------

function fnExcelReport(){
    // let tab_text="<table border='2px'><tr bgcolor='#87AFC6'>";
    let tab_text="<table border='2px'>";
    let textRange; 
    let j=0;
    tab = document.getElementById('table'); // id of table

    for(j = 0 ; j < tab.rows.length ; j++) {     
        tab_text = tab_text+tab.rows[j].innerHTML+"</tr>";
        //tab_text=tab_text+"</tr>";
    }

    tab_text = tab_text + "</table>";
    tab_text = tab_text.replace(/<A[^>]*>|<\/A>/g, "");//remove if u want links in your table
    tab_text = tab_text.replace(/<img[^>]*>/gi,""); // remove if u want images in your table
    tab_text = tab_text.replace(/<input[^>]*>|<\/input>/gi, ""); // removes input params

    let ua = window.navigator.userAgent;
    let msie = ua.indexOf("MSIE "); 

    // If Internet Explorer
    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)){
        txtArea1.document.open("txt/html","replace");
        txtArea1.document.write(tab_text);
        txtArea1.document.close();
        txtArea1.focus(); 
        sa=txtArea1.document.execCommand("SaveAs", true, "Libro.xls");
    }  
    else                 //other browser not tested on IE 11
        sa = window.open('data:application/vnd.ms-excel,' + encodeURIComponent(tab_text)); 
    return (sa);
}

if (document.getElementById('btnExport')){
    const btnExport = document.getElementById('btnExport').addEventListener('click', ()=>{
        fnExcelReport();
    });
};


function diferencia(){
    let orden = Number(document.getElementById("orden").value);
    let pagado = Number(document.getElementById("pagado").innerText);
    let diferencia = pagado - orden;
    document.getElementById("diferencia").innerText = diferencia;
    if (diferencia < 0) {
        document.getElementById("diferencia").style.color = 'red';
    }
    if (diferencia > 0) {
        document.getElementById("diferencia").style.color = 'green';
    }
};

if (document.getElementById('btnBorrarCuenta')){
    let btnBorrarCuenta = document.getElementById('btnBorrarCuenta').addEventListener('click', ()=>{
        document.getElementById('pagado').innerText = 0
        diferencia();
    });
};

if(document.getElementById("btnM20")){
    let btnM20 = document.getElementById("btnM20").addEventListener('click', ()=>{
        let pagado = Number(document.getElementById('pagado').innerText);
        pagado = pagado + 20;
        document.getElementById('pagado').innerText = pagado;
        diferencia();
    });
};

if(document.getElementById("btnM50")){
    let btnM50 = document.getElementById("btnM50").addEventListener('click', ()=>{
        let pagado = Number(document.getElementById('pagado').innerText);
        pagado = pagado + 50;
        document.getElementById('pagado').innerText = pagado;
        diferencia();
    });
};

if(document.getElementById("btnM100")){
    let btnM100 = document.getElementById("btnM100").addEventListener('click', ()=>{
        let pagado = Number(document.getElementById('pagado').innerText);
        pagado = pagado + 100;
        document.getElementById('pagado').innerText = pagado;
        diferencia();
    });
};

if(document.getElementById("btnM200")){
    let btnM200 = document.getElementById("btnM200").addEventListener('click', ()=>{
        let pagado = Number(document.getElementById('pagado').innerText);
        pagado = pagado + 200;
        document.getElementById('pagado').innerText = pagado;
        diferencia();
    });
};

if(document.getElementById("btnM500")){
    let btnM500 = document.getElementById("btnM500").addEventListener('click', ()=>{
        let pagado = Number(document.getElementById('pagado').innerText);
        pagado = pagado + 500;
        document.getElementById('pagado').innerText = pagado;
    diferencia();
    });
};

if(document.getElementById("btnM1k")){
    let btnM1k = document.getElementById("btnM1k").addEventListener('click', ()=>{
        let pagado = Number(document.getElementById('pagado').innerText);
        pagado = pagado + 1000;
        document.getElementById('pagado').innerText = pagado;
        diferencia();
    });
};

if(document.getElementById("btn1k")){
    let btn1k = document.getElementById("btn1k").addEventListener('click', ()=>{
        let pagado = Number(document.getElementById('pagado').innerText);
        pagado = pagado + 1000;
        document.getElementById('pagado').innerText = pagado;
        diferencia();
    });
};

if(document.getElementById("btn2k")){
    let btn2k = document.getElementById("btn2k").addEventListener('click', ()=>{
        let pagado = Number(document.getElementById('pagado').innerText);
        pagado = pagado + 2000;
        document.getElementById('pagado').innerText = pagado;
        diferencia();
    });
};

if(document.getElementById("btn5k")){
    let btn5k = document.getElementById("btn5k").addEventListener('click', ()=>{
        let pagado = Number(document.getElementById('pagado').innerText);
        pagado = pagado + 5000;
        document.getElementById('pagado').innerText = pagado;
        diferencia();
    });
};

if(document.getElementById("btn10k")){
    let btn10k = document.getElementById("btn10k").addEventListener('click', ()=>{
        let pagado = Number(document.getElementById('pagado').innerText);
        pagado = pagado + 10000;
        document.getElementById('pagado').innerText = pagado;
        diferencia();
    });
};

if(document.getElementById("btn20k")){
    let btn20k = document.getElementById("btn20k").addEventListener('click', ()=>{
        let pagado = Number(document.getElementById('pagado').innerText);
        pagado = pagado + 20000;
        document.getElementById('pagado').innerText = pagado;
        diferencia();
    });
};

if(document.getElementById("btn50k")){
    let btn50k = document.getElementById("btn50k").addEventListener('click', ()=>{
        let pagado = Number(document.getElementById('pagado').innerText);
        pagado = pagado + 50000;
        document.getElementById('pagado').innerText = pagado;
        diferencia();
    });
};

if(document.getElementById("btn100k")){
    let btn100k = document.getElementById("btn100k").addEventListener('click', ()=>{
        let pagado = Number(document.getElementById('pagado').innerText);
        pagado = pagado + 100000;
        document.getElementById('pagado').innerText = pagado;
        diferencia();
    });
};





