
function submitPhone(event){
    event.preventDefault();
    const namePhone = document.getElementById("name").value;
    const numberPrice = document.getElementById("price").value;
    const selectGB = document.getElementById("select").value;
    if(namePhone == "" || numberPrice == "" || selectGB == ""){
        alert("Please fill in all fields");
        location.href = "add1.html";
    }else if(numberPrice < 1){
        alert("Price can't < 1");
    }else{
        try{
            axios.post(`http://localhost:3000/phones`,{
                name: namePhone,
                price: numberPrice,
                GB: selectGB
            });
            location.href = "list&delete.html";
            alert("Thanh cong !");
        }catch(error){
            console.log(error);
        }
    }
}