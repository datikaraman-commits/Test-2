const menu=document.querySelector(".menu"), links=document.querySelector(".links");
if(menu) menu.addEventListener("click",()=>{links.classList.toggle("open")});
document.querySelectorAll(".form").forEach(f=>f.addEventListener("submit",e=>{e.preventDefault();alert("Thanks! Your message has been received by ᴢʏʟᴏʀᴅᴄʟᴏᴜᴅ.");f.reset()}));
document.querySelectorAll(".buy").forEach(b=>b.addEventListener("click",e=>{e.preventDefault();alert("Order flow is frontend-only. Connect your payment/order system here.");}));
