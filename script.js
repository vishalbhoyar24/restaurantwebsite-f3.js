// function for getting menu as soon as page is loaded on the  console.
let menuList = document.querySelector(".menu-list");
window.addEventListener("load", getMenu);
async function getMenu(){
    try{
        const response = await fetch(`https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json`);
        let data = await response.json();


        // adding 3 items to the first page
        for(let i = 0; i < 3; i++){
            let div = document.createElement("div");
            div.classList.add("menu-item");
            div.innerHTML = 
            `<div class="menu-image">
                <img src="${data[i]["imgSrc"]}" alt="menu-image">
                </div>
                    <div class="price">
                    <div class="name">
                    <p>${data[i]["name"]}</p>
                    <p>${data[i]["price"]}/-</p>
                    </div>
                    <div class="plus-icon">
                        <img src="./plus (1) 1.svg" alt="plus Icon">
                </div>
            </div>`;
        menuList.append(div);
        }

        // adding full menu items to the second page
        let menuBtn = document.querySelector(".menu-btn");
        menuBtn.addEventListener('click', function(){
            let mainImage = document.querySelector(".main-image");
            mainImage.remove();
            for(let i = 3; i < data.length; i++){
                let div = document.createElement("div");
                div.classList.add("menu-item");
                div.innerHTML = 
                `<div class="menu-image">
                    <img src="${data[i]["imgSrc"]}" alt="menu-image">
                    </div>
                        <div class="price">
                        <div class="name">
                        <p>${data[i]["name"]}</p>
                        <p>${data[i]["price"]}/-</p>
                        </div>
                        <div class="plus-icon">
                            <img src="./plus (1) 1.svg" alt="plus Icon">
                    </div>
                </div>`;
            menuList.append(div);
            }
        });

        // performing other operations by calling startProcess function
        startProcess();

    }catch(error){
        console.log('There was an error', error);
    }
}

// user ordering and adding three burgers in the object
function takeOrder(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>resolve({"orderOne" : "Burger Mania", "orderTwo" : "Chicken Burger", "orderThree":"Burger Buzz"}), 2500);
    });
}

 // function for showing order is preparing
 function orderPrep(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>resolve({"order_status":true, "paid":false}), 1500);
    });
}

// function showing status for paying order
function payOrder(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>resolve({"order_status":true, "paid":true}), 1000);
    });
}

// function for showing thank messages
function thankyouFnc(){
    alert(" thankyou for eating with us today!");
}


async function startProcess(){
    let order =  await takeOrder();
    console.log("order : ", order);
    let prepStatus = await orderPrep();
    console.log("orderStatus : ", prepStatus);
    let paymentStatus = await payOrder();
    console.log("paymentStatus : ", paymentStatus);
    thankyouFnc();
}