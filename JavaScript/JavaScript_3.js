/**** PLANTS & HABITATS *****/

//Data Attribute Demo
function displayType(plant) {
    var plantType = plant.getAttribute("data-plant-type");
    alert(plantType + " is from the " + plant.innerHTML + " habitat!");
}