let cart = document.getElementById("tb1");
let mcd = document.getElementById("mcd");
let bk = document.getElementById("bk");
let hb = document.getElementById("hb");
let ram = document.getElementById("ram");
let freshments = document.getElementById("freshments");
let juice = document.getElementById("juice");
let buttons = document.querySelectorAll(".btn");
let pop_up = document.querySelector(".pop-up");
let overlay = document.querySelector(".overlay")
let orders = [];
let total = 0;
buttons.forEach((btn,index)=>{
    btn.addEventListener("click",()=>{
        pop_up.style.display="block";
        overlay.style.display='block';
        let item = document.querySelectorAll(".card-title")[index].textContent;
        orders.push(item);
        alert(orders);
        let item_price = Number(document.querySelectorAll(".freshments")[index].textContent);
        total+=item_price;
        let tr = document.createElement("tr");
        tr.innerHTML=`<td>${orders.length}</td>
                      <td >${item}</td>
                      <td>${orders.length}</td>
                      <td>${item_price}</td>
                      <td>RM${total}</td>`
        cart.appendChild(tr);
    })
})
function to_close(){
    pop_up.style.display="none";
    overlay.style.display='none';
}
function to_checkout(){
    alert("You've successfully purchased the items!Make Sure you will come again")
    pop_up.style.display="none";
    overlay.style.display='none';
}