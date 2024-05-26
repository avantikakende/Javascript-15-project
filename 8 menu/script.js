const allBtn=document.getElementById("all-btn");
const breakfastBtn=document.getElementById("B-btn");
const LunchBtn=document.getElementById("L-btn");
const ShakeBtn=document.getElementById("S-btn");
const DinnerBtn=document.getElementById("D-btn");
const itemBtn=document.getElementById("center")
const menuItem= document.getElementsByClassName("menu");


allBtn.addEventListener("click",()=>{
    Array.from(document.getElementsByClassName("menu")).forEach(item =>{
        item.style.display="flex";
    });
});


breakfastBtn.addEventListener("click",()=>{
    Array.from(document.getElementsByClassName("menu")).forEach(item=>{
        if(item.dataset.category === 'Breakfast'){
            item.style.display="flex";
        }
        else{
            item.style.display="none";
        }
    })
})

LunchBtn.addEventListener("click",()=>{
    Array.from(document.getElementsByClassName("menu")).forEach(item=>{
        if(item.dataset.category === 'Lunch'){
            item.style.display="flex";
        }
        else{
            item.style.display="none";
        }
    })
})

ShakeBtn.addEventListener("click",()=>{
    Array.from(document.getElementsByClassName("menu")).forEach(item=>{
        if(item.dataset.category === 'Shakes'){
            item.style.display="flex";
        }
        else{
            item.style.display="none";
        }
    })
})

DinnerBtn.addEventListener("click",()=>{
    Array.from(document.getElementsByClassName("menu")).forEach(item=>{
        if(item.dataset.category === 'Dinner'){
            item.style.display="flex";
        }
        else{
            item.style.display="none";
        }
    })
})