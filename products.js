const products = document.querySelector(".product-container");
const status =document.querySelector(".product-status");



const divColumn2 = ()=>{
    let div = document.createElement("div");
    div.classList.add("col-2");
    return div;
}

const divColumn3 = ()=>{
    let div = document.createElement("div");
    div.classList.add("col-3");
    return div;
}

const divRow = ()=>{
    let divrow = document.createElement("div");
    divrow.classList.add("row");
    divrow.classList.add("my-5");
    divrow.classList.add("border");
    divrow.classList.add("border-success");
    divrow.classList.add("py-3");
    return divrow;
}




document.addEventListener("DOMContentLoaded",()=>{
    console.log("helllo");
    let post_collection = JSON.parse(localStorage.getItem("posts"));
    console.log(post_collection);

    if(post_collection != null){
    post_collection.map((post)=>{
        const divrow = divRow();
        
     
        post = JSON.parse(post);
        const product = `
           
                    <div class="col-3">
                    <img class = "shadow-lg text-lg bg-white rounded" src=${post.imageUrl} height = "200px" width = "200px"/>
                    </div>
                    <div class="col-2  text-lg text-center">${post.name}</div>
                    <div class="col-2  text-lg text-center">${post.brand}</div>
                    <div class="col-3  text-lg text-center">${post.desc}</div>
                    <div class="col-2  text-lg text-center">${post.price}</div>
                            
            </div>`;
            divrow.innerHTML = product;
        products.appendChild(divrow);
    })
    }
//  if(localStorage.getItem("posts")!=null){
//         let post_collection = JSON.parse(localStorage.getItem("posts"));

//         post_collection.map((post)=>{
//             let divrow = document.createElement("div");
//             divrow.classList.add("row");

//         })
//  }else{
//     status.innerText = "No products to show";
//  }
});