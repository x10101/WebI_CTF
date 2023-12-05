function enterDoor0() {
    document.getElementById("door0").style.display = "none";
    document.getElementById("door101").style.display = "block";
    document.getElementById("door102").style.display = "block";
}

function enterDoor101() {
    document.getElementById("door101").style.display = "none";
    document.getElementById("door102").style.display = "none";
    document.getElementById("door201").style.display = "block";
    document.getElementById("door202").style.display = "block";
}

function enterDoor102() {
    document.getElementById("door101").style.display = "none";
    document.getElementById("door102").style.display = "none";
    document.getElementById("door203").style.display = "block";
    document.getElementById("door204").style.display = "block";
}

function enterDoor201() {
    document.getElementById("door201").style.display = "none";
    document.getElementById("door202").style.display = "none";
    document.getElementById("nothing").style.display = "block";
    document.getElementById("exit_332").style.display = "block";
}

function enterDoor202() {
    document.getElementById("door201").style.display = "none";
    document.getElementById("door202").style.display = "none";
    document.getElementById("door203").style.display = "block";
    document.getElementById("door204").style.display = "block";
}

function enterDoor203() {
    document.getElementById("door203").style.display = "none";
    document.getElementById("door204").style.display = "none";
    document.getElementById("door304").style.display = "block";
    document.getElementById("door305").style.display = "block";
}

function enterDoor204() {
    document.getElementById("door203").style.display = "none";
    document.getElementById("door204").style.display = "none";
    document.getElementById("door301").style.display = "block";
    document.getElementById("door302").style.display = "block";
}

function enterDoor301() {
    document.getElementById("door301").style.display = "none";
    document.getElementById("door302").style.display = "none";
    document.getElementById("door304").style.display = "block";
    document.getElementById("door305").style.display = "block";
}

function enterDoor302() {
    document.getElementById("door301").style.display = "none";
    document.getElementById("door302").style.display = "none";
    document.getElementById("door403").style.display = "block";
    document.getElementById("door404").style.display = "block";
}

function enterDoor304() {
    document.getElementById("door304").style.display = "none";
    document.getElementById("door305").style.display = "none";
    document.getElementById("door201").style.display = "block";
    document.getElementById("door202").style.display = "block";
}

function enterDoor305() {
    document.getElementById("door304").style.display = "none";
    document.getElementById("door305").style.display = "none";
    document.getElementById("door301").style.display = "block";
    document.getElementById("door302").style.display = "block";
}

function enterDoor404() {
    document.getElementById("door403").style.display = "none";
    document.getElementById("door404").style.display = "none";
    document.getElementById("nothing").style.display = "block";
    document.getElementById("exit_334").style.display = "block";
}

function enterDoor403() {
    document.getElementById("door403").style.display = "none";
    document.getElementById("door404").style.display = "none";
    document.getElementById("door101").style.display = "block";
    document.getElementById("door102").style.display = "block";
}

function exit_332() {
    document.getElementById("nothing").style.display = "none";
    document.getElementById("exit_332").style.display = "none";
    document.getElementById("door201").style.display = "block";
    document.getElementById("door202").style.display = "block";
}

function exit_334() {
    document.getElementById("nothing").style.display = "none";
    document.getElementById("exit_334").style.display = "none";
    document.getElementById("door403").style.display = "block";
    document.getElementById("door404").style.display = "block";
}

function Flag() {
   alert("NISRA{H3r3_i5_a_s3cr3t_5pac3}");
}