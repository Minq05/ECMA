
function handleSubmit(event) {
    // Ngăn chặn trang tải lại
    event.preventDefault();
    const productName = document.getElementById("name").value;
    const productPrice = document.getElementById("price").value;
    const productSelect = document.getElementById("select").value;
    console.log("productName", productName);

    if(productName == "" || productPrice == ""){
        alert("Name or price blank !");
        location.href = "add.html";
      }else{
        try{
            axios.post("http://localhost:3000/products", {
                name: productName,
                price: productPrice,
                category: productSelect
              });
              location.href = "html.html";
              alert("Thanh cong !")
         }catch(error){
            console.error(error);   
         }
      }
     
  }



  

