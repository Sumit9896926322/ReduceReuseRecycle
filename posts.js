const name = document.querySelector(".itemName");
const brand = document.querySelector(".itemBrand");
const desc = document.querySelector(".itemDesc");
const price = document.querySelector(".itemPrice");
const postImg = document.querySelector(".itemFile");
const postbtn = document.querySelector(".postBtn");
let posts = [];
let dataUrl;
postImg.addEventListener("change",()=>{
 const reader = new FileReader();
 reader.readAsDataURL(postImg.files[0]);

 reader.addEventListener("load",()=>{
     dataUrl = reader.result;
 })
})


postbtn.addEventListener("click",(e)=>{
    e.preventDefault();
    const post = {
      name:name.value,
      brand:brand.value,
      desc:desc.value,
      price:price.value,
      imageUrl:dataUrl,
    }

    let posts_serialized = JSON.stringify(post);
    console.log(post);
    if(localStorage.getItem("posts")!= null){
console.log(1);
        let prevposts =JSON.parse(localStorage.getItem("posts"));
        prevposts.push(posts_serialized);
        localStorage.setItem("posts",JSON.stringify(prevposts));
    
    }else{
        console.log(2);
        let newpost=[];
        newpost.push(posts_serialized);
        console.log(typeof(newpost));
        localStorage.setItem("posts",JSON.stringify(newpost));
    }
    console.log(JSON.parse(localStorage.getItem("posts")));
    window.location.href = "./products.html";
});




bootstrapValidate('.itemName', 'min:3:Enter a valid item name or Item name');
bootstrapValidate('.itemBrand', 'min:3:Enter a valid brand name or full name');
bootstrapValidate('.itemDesc', 'min:30:Less than 30 words of description is not acceptable');
bootstrapValidate('.itemPrice', 'regex:^[0-9]*[0-9][0-9]*$:Only numeric values allowed');
