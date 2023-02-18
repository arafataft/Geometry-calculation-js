
// function to get input field value
function getValue(firstValue, secondValue, name) {
    const fValue = document.getElementById(firstValue).value;
    const sValue = document.getElementById(secondValue).value;
    const cardName = document.getElementById(name).innerText;
    // validation check
    if (
        fValue == "" ||
        sValue == "" ||
        fValue < 0 ||
        sValue < 0 ||
        isNaN(fValue) ||
        isNaN(sValue)
    ) {
        return alert("please enter any valid number");
    }

    const nameValue = {
        firstValue: fValue,
        secondValue: sValue,
        name: cardName,
    };
    return nameValue;
}



// function to get inner Text value 


function getInnerInfo(firstValue, secondValue, name) {
    const fValue = document.getElementById(firstValue).innerText;
    const sValue = document.getElementById(secondValue).innerText;
    const cardName = document.getElementById(name).innerText;
    // validation check 
    if (
        fValue == "" ||
        sValue == "" ||
        fValue < 0 ||
        sValue < 0 ||
        isNaN(fValue) ||
        isNaN(sValue)
    ) {
        return alert("please enter any valid number");
    }

    const nameValue = {
        firstValue: fValue,
        secondValue: sValue,
        name: cardName,
    };
    return nameValue;
}


// function to display area calculation 

function display(serial, name, area) {
    const container = document.getElementById("table-container");
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${serial + '.'}</td>
    <td>${name}</td>
    <td>${area + 'cm<sup>2</sup>'}</td>
    <td>
    <button class="btn btn-sm btn-primary normal-case"><span>Covert to m<sup>2</sup> </span> </button>
    </td>
    <td>
    <button id="delete-btn" class="btn btn-xs btn-circle">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-3 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6   6l12 12" /></svg>
    </button>
    </td>
    
  `;
    container.appendChild(tr);
    document.getElementById("area-calculation").innerText = serial;

    // delete button 
    document.getElementById("delete-btn").addEventListener("click",function(e){
        let parentNoded= this.parentNode.parentNode;
        parentNoded.remove();
      });
}

