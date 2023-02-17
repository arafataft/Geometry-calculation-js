// console.log("Hello arafat")
// blog button 
document.getElementById("btn-blog").addEventListener('click', function () {
    window.location.href = 'blog.html'
    console.log("dfjkjfsdj")
})


// card 
let serial=0;
document.getElementById("first-card").addEventListener("click", function () {
    serial += 1;

    const firstValue=document.getElementById("triangleFirstInput").value;
    const secondValue=document.getElementById("triangleSecondInput").value;
    const name=document.getElementById("first-name").innerText;


    if (
        firstValue == "" ||
        secondValue == "" ||
        firstValue < 0 ||
        secondValue < 0 || 
        isNaN(firstValue)||
        isNaN(secondValue)
      ) {
        return alert("please enter any valid number");
      }
    const area=0.5*parseFloat(firstValue)*parseFloat(secondValue);
    // const area=0.5*areav;

    console.log(area);
    console.log(firstValue);
    console.log(secondValue);
    // display
    const container = document.getElementById("table-container");
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${serial+'.'}</td>
    <td>${name}</td>
    <td>${area+'cm<sup>2</sup>'}</td>
    <td>
    <button class="btn btn-primary ">covert to<span class="lowercase">m<sup>2</sup></span> </button>
    </td>
    
  `;
    container.appendChild(tr);
    document.getElementById("area-calculation").innerText = serial;
});