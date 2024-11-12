function getAllPhone(phone){
    return `
    <tr>
                    <th scope="row">${phone.id}</th>
                    <td>${phone.name}</td>
                    <td>${phone.price}</td>
                    <td>${phone.GB}</td>
                    <td>
                        <button onclick=deletePhone(${phone.id}) class="btn btn-danger">Delete</button>
                    </td>
                  </tr>
    `;
}

async function fetchPhone(){
    const res = await fetch("http://localhost:3000/phones");
    const data = await res.json();
    document.getElementById("listPhone").innerHTML = `
    <table class="table">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">GB</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  ${data.map(getAllPhone).join("")}
                </tbody>
              </table>
    `;
}
fetchPhone();

async function deletePhone(id) {
  try{
    if(confirm ('DeletePhone !')){
      const res = await fetch(`http://localhost:3000/phones/${id}`,{
        method: 'DELETE',
      });
    }
  }catch(error){
    console.error(error);
  }
}