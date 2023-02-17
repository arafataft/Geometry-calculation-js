// console.log("Hello arafat")
// blog button 
document.getElementById("btn-blog").addEventListener('click', function () {
    window.location.href = 'blog.html'
    console.log("dfjkjfsdj")
})


// card 
let serial=0;
// common function 

function getValue(firstValue,secondValue,name){
    const firsValue=document.getElementById(firstValue).value;
    const sValue=document.getElementById(secondValue).value;
    const Nname=document.getElementById(name).innerText;

    if (
        firsValue == "" ||
        sValue == "" ||
        firsValue < 0 ||
        sValue < 0 || 
        isNaN(firsValue)||
        isNaN(sValue)
      ) {
        return alert("please enter any valid number");
      }

    const nameValue={
        firstValue: firsValue,
        secondValue: sValue,
        name: Nname,
    };
    return nameValue;
}

function getInnerInfo(firstValue,secondValue,name){
    const firsValue=document.getElementById(firstValue).innerText;
    const sValue=document.getElementById(secondValue).innerText;
    const Nname=document.getElementById(name).innerText;

    if (
        firsValue == "" ||
        sValue == "" ||
        firsValue < 0 ||
        sValue < 0 || 
        isNaN(firsValue)||
        isNaN(sValue)
      ) {
        return alert("please enter any valid number");
      }

    const nameValue={
        firstValue: firsValue,
        secondValue: sValue,
        name: Nname,
    };
    return nameValue;
}


function display(serial,name,area){
    const container = document.getElementById("table-container");
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${serial+'.'}</td>
    <td>${name}</td>
    <td>${area+'cm<sup>2</sup>'}</td>
    <td>
    <button class="btn btn-primary ">covert to <span class="lowercase">m<sup>2</sup></span> </button>
    </td>
    
  `;
    container.appendChild(tr);
    document.getElementById("area-calculation").innerText = serial;
}

// 1st card 
document.getElementById("first-card").addEventListener("click", function () {
    serial += 1;
    
    const nameValue=getValue("triangleFirstInput","triangleSecondInput","first-name");
    
    const area=0.5*parseFloat(nameValue.firstValue)*parseFloat(nameValue.secondValue);

    display(serial,nameValue.name,area);

});

// 2nd card 
document.getElementById("second-card").addEventListener("click", function () {
    serial += 1;
    
    const nameValue=getValue("rectangleFirstInput","rectangleSecondInput","second-name");
    
    const area=parseFloat(nameValue.firstValue)*parseFloat(nameValue.secondValue);

    display(serial,nameValue.name,area);

});


// 3rd card 

document.getElementById("third-card").addEventListener("click", function () {
    serial += 1;
    
    const nameValue=getInnerInfo("parallelogramFirstValue","parallelogramSecondValue","third-name");
    
    const area=0.5*parseFloat(nameValue.firstValue)*parseFloat(nameValue.secondValue);

    display(serial,nameValue.name,area);

});