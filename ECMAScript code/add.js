
function handleSubmit(event) {
    // Ngăn chặn trang tải lại
    event.preventDefault();
    const productName = document.getElementById("name").value;
    const productPrice = document.getElementById("price").value;
    console.log("productName", productName);

     try{
        axios.post("http://localhost:3000/products", {
            name: productName,
            price: productPrice,
          });
          location.href = "html.html";
          alert("Thanh cong !")
     }catch(error){
        console.error(error);   
     }
  }

