let bikeOject = {
    vehicle: "Bike",
    imageUrl:
        "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmlrZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60",

    farePerKilo: 2,

    capacity: 2,

    description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga eligendi veritatis expedita, dicta aut eum itaque ut tempora alias laudantium?",

}
let carOject = {
    vehicle: "Car",
    imageUrl:
        "https://images.unsplash.com/photo-1494905998402-395d579af36f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",

    farePerKilo: 3,

    capacity: 4,

    description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga eligendi veritatis expedita, dicta aut eum itaque ut tempora alias laudantium?",

}
let busOject = {
    vehicle: "Bus",
    imageUrl:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",

    farePerKilo: 5,

    capacity: 30,

    description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga eligendi veritatis expedita, dicta aut eum itaque ut tempora alias laudantium?",

}


const sevicesArray = [bikeOject, carOject, busOject,]

function showServices(object) {
    const mainContainer = document.getElementById('main-container');
    const stringyfiedObject = JSON.stringify(object);
    const service = document.createElement("div");
    service.innerHTML =
        `
<div class="card mb-3 mx-auto" style="max-width: 800px;">
<div class="row g-0">
    <div class="col-md-5">
        <img src=${object.imageUrl}
            class="img-fluid rounded-start h-100" alt="...">
    </div>
    <div class="col-md-7">
        <div class="card-body">
            <h5 class="card-title">${object.vehicle}</h5>
            <p class="card-text">${object.description}</p>
            <p class="card-text"><small class="text-muted">Fare per kilo ${object.farePerKilo}  </small></p>
            <p class="card-text"><small class="text-muted">Capacity ${object.capacity}</small></p>
            <!-- Button trigger modal -->
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick='seeDetails(${stringyfiedObject})'>
               See Details
              </button>
        </div>
    </div>
</div>
</div>
`
    mainContainer.appendChild(service);

}

for (let i = 0; i < sevicesArray.length; i++) {
    showServices(sevicesArray[i])
}





function seeDetails(object) {
    const stringifiedObj = JSON.stringify(object);
    const modalBody = document.getElementById("modal-body");
    modalBody.innerHTML = `
    
    <div class="card mx-auto" style="width: 18rem;">
  <img src=${object.imageUrl} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Vehicle Mood : ${object.vehicle}</h5>
    <p class="card-text">${object.description}</p>
    <p class="card-text"><small class="text-muted">Fare per kilo ${object.farePerKilo}</small> <small class="text-muted">Capacity ${object.capacity}</small></p>
    <div class="d-flex flex-column" role="search">
     <p>Fare: <small class="text-muted" id="fare"></small > </p>
     <p>tax: <small class="text-muted" id="tax"></small > </p>
     <p>Total-cost: <small class="text-muted" id="total-cost"></small > </p>
    <input class="form-control m-2" id= "distance-input"  type="number" placeholder="Koto kilo jaba?" aria-label="Search"/>
    <input class="form-control m-2" type="number" id= "quantity-input" placeholder="koita gari lagbe?" aria-label="Search"/>
    <button class="btn btn-outline-success" id="search-btn" aria-label="type="submit" onclick='calculateCost(${stringifiedObj})'>Submit</button>
  </div>
  </div>
</div>
    
    `;

}

function calculateCost(obj) {
    // const stringifiedObj = JSON.stringify(object);
    const fare = document.getElementById("fare");
    const distance = document.getElementById("distance-input").value;
    const quantity = document.getElementById("quantity-input").value;
    fare.innerText = distance * obj.farePerKilo * quantity;
    // const totalCost = document.getElementById("total-cost");
    // // console.log(typeof totalCost)
    // totalCost.innerText = fare.innerText * quantity;
}

document.getElementById("search-btn").addEventListener('click', function () {
    const searchVehicle = document.getElementById("search-vehicle").value;

    for (let i = 0; i < sevicesArray.length; i++) {

        const showVehicle = sevicesArray[i];
        if (searchVehicle.toLowerCase() === showVehicle.vehicle.toLowerCase()) {

            document.getElementById("main-container").innerHTML = "";

            showServices(showVehicle);
            return;
        }

    }
    alert("nothing found with your input")

})