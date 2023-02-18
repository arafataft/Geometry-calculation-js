
// function to get input field value
function getValue(firstValue,secondValue,name){
    const fValue=document.getElementById(firstValue).value;
    const sValue=document.getElementById(secondValue).value;
    const cardName=document.getElementById(name).innerText;
    // validation check
    if (
        fValue == "" ||
        sValue == "" ||
        fValue < 0 ||
        sValue < 0 || 
        isNaN(fValue)||
        isNaN(sValue)
      ) {
        return alert("please enter any valid number");
      }

    const nameValue={
        firstValue: fValue,
        secondValue: sValue,
        name: cardName,
    };
    return nameValue;
}



// function to get inner Text value 


function getInnerInfo(firstValue,secondValue,name){
    const fValue=document.getElementById(firstValue).innerText;
    const sValue=document.getElementById(secondValue).innerText;
    const cardName=document.getElementById(name).innerText;
    // validation check 
    if (
        fValue == "" ||
        sValue == "" ||
        fValue < 0 ||
        sValue < 0 || 
        isNaN(fValue)||
        isNaN(sValue)
      ) {
        return alert("please enter any valid number");
      }

    const nameValue={
        firstValue: fValue,
        secondValue: sValue,
        name: cardName,
    };
    return nameValue;
}


// function to display area calculation 

function display(serial,name,area){
    const container = document.getElementById("table-container");
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${serial+'.'}</td>
    <td>${name}</td>
    <td>${area+'cm<sup>2</sup>'}</td>
    <td>
    <button class="btn btn-primary normal-case"><span>Covert to m<sup>2</sup> </span> </button>
    </td>
    
  `;
    container.appendChild(tr);
    document.getElementById("area-calculation").innerText = serial;
}