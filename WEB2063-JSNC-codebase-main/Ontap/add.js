// const { default: axios } = require("axios");

const productId = location.search.split("=")[1];

async function detailProduct() {
    if(!productId) return;
    try{
        const res = axios.get(`http://localhost:3000/products/${productId}`);

        document.getElementById("title").value = res.data.title;
        document.getElementById("image").value = res.data.image;
        document.getElementById("price").value = res.data.price;
        document.getElementById("brand").value = res.data.brand;
        document.getElementById("ishot").checked = res.data.ishot;
    }catch(error){
        document.write(error);
    }
}
detailProduct();

async function submitProduct(event) {
    event.preventDefault();
    
    const addTitle = document.getElementById("title").value;
    const addImage = document.getElementById("image").value;
    const addPrice = document.getElementById("price").value;
    const addBrand = document.getElementById("brand").value;
    const addIshot = document.getElementById("ishot").checked;

    const data = {
        title: addTitle,
        image: addImage,
        price: addPrice,
        brand: addBrand,
        ishot: addIshot
    };

    if(!addTitle || !addImage || !addPrice){
        alert("Not blank !");
    }else if(addPrice < 1){
        alert("price must > 1");
    }else{
        try{
            if(productId){
                await axios.put(`http://localhost:3000/products/${productId}`,data);
            }else{
                await axios.post("http://localhost:3000/products",data);
            }
            location.href = "index.html";
            alert("correct !")
        }catch(error){
            console.log(error);
        }
    }
}