function addNewWeField(){
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add("mt-2")
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter Here");

    let weOb=document.getElementById("we");
    let weAddButtonOb=document.getElementById('weAddButton');

    weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewEQField(){
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('eqField');
    newNode.classList.add("mt-2")
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter Here");

    let eqOb=document.getElementById("eq");
    let eqAddButtonOb=document.getElementById('eqAddButton');

    eqOb.insertBefore(newNode, eqAddButtonOb);
}

function addNewSkillField(){
    let newNode=document.createElement('input');
    newNode.classList.add('form-control');
    newNode.classList.add('skField');
    newNode.classList.add("mt-2")
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter Here");

    let skOb=document.getElementById("sk");
    let skAddButtonOb=document.getElementById('skAddButton');

    skOb.insertBefore(newNode, skAddButtonOb);
}

// Generating resume
function generateResume(){
    let nameField = document.getElementById("nameField").value;
    let nameT1 = document.getElementById("nameT1");

    nameT1.innerHTML=nameField;

    //direct
    document.getElementById("nameT2").innerHTML = nameField;

    //contact
    document.getElementById("contactT").innerHTML=document.getElementById("contactField").value;

    //address
    document.getElementById("addressT").innerHTML=document.getElementById("addressField").value;

    //links
    let gitField = document.getElementById("gitField").value;
    document.getElementById("gitT").setAttribute("href", gitField);


    let linkedField = document.getElementById("linkedField").value;
    document.getElementById("linkedT").setAttribute("href", linkedField);

    let instaField = document.getElementById("instaField").value;
    document.getElementById("instaT").setAttribute("href", instaField);

    //objective
    document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value;

    //work experience
    let wes = document.getElementsByClassName("weField");
    let str ="";
    for(let e of wes){
        str = str + `<li> ${e.value} </li>`;
    }
    document.getElementById("weT").innerHTML = str;

    //Skills
    let sks = document.getElementsByClassName("skField");
    let str2 ="";
    for(let e of sks){
        str2 = str2 + `<li> ${e.value} </li>`;
    }
    document.getElementById("skT").innerHTML = str2;

    //Academic Qualifications
    let eqs = document.getElementsByClassName("eqField");
    let str3 ="";
    for(let e of eqs){
        str3 = str3 + `<li> ${e.value} </li>`;
    }
    document.getElementById("eqT").innerHTML = str3;

    //code for setting image
    let file = document.getElementById("imgField").files[0];

    let reader = new FileReader();

    reader.readAsDataURL(file);

    //set the image to template
     reader.onloadend = function(){
        document.getElementById("imgTemplate").src = reader.result;
     }

    document.getElementById("res-form").style.display="none";
    document.getElementById("res-template").style.display="block";

}

//print resume
function printResume(){
    window.document.getElementById("prnt").style.display="none";
    window.print()
    // window.document.getElementById("prnt").style.display="none";

}