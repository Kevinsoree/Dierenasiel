// JavaScript source code
function OnReady() {
    console.log('Pagina geladen, DOM klaar voor gebruik.');

    $('#name').focus(focus_code);
    $('#name').blur(blur_code);
    $('#btn_submit').click(OnSubmit);
}
$(document).ready(OnReady);


function focus_code(idname , text) {
    $("#pop-up_name").text("* This field is required!");
}

function blur_code(idname) {
    $("#pop-up_name").text("");
}

function regnr_code() {
    $("#pop-up_regnr").text("* Your registration number needs to start with a 0.");
}

function blur_regnr_code() {
    $("#pop-up_regnr").text("");
}
function OnSubmit(event) {
    blur_regnr_code();
    var animal = {
        'species': $('input[name=species]:checked').val(),
        'name': $('#name').val(),
        'age': $('#age').val(),
        'regnr': $('#regnr').val(),
        'reserved': $('#reserved').is(':checked')
    };
    var error = false;
    var errormessage = "";

    if (!animal.name) {
        focus_code();
        console.log("Name is invalid.");
    }
    if (animal.age < 0) {
        console.log("Age is invalid.");
        error = true;
        errormessage = "Animal age is invalid. /n";
    }
    var firstregchar = animal.regnr.charAt(0);
    if (firstregchar !== "0") {
        console.log("First char of regnr is invalid");
        error = true;
        errormessage = "Animal registrationnumber is invalid. /n";
        regnr_code();
    }
    console.log(firstregchar);
    
    // finally..
    if (!error) {
        //submitsomething
    }
    if (error) {
        //insert error message
    }
    event.preventDefault();
}