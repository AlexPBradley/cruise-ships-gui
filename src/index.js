
let listCounter = 0;
let shipItinerary = [];
let tester;

const itineraryInput = document.getElementById('portName');
const shipInput = document.getElementById('shipName');

//listens to itinerary input for enter keypress
itineraryInput.addEventListener("keypress", function(event){
    if(event.key === "Enter" && itineraryInput.value !== ""){
        addPortToItinerary();
    };
});

//add input to itinerary list
function addPortToItinerary(){
    if(itineraryInput.value !== ""){
        shipItinerary.push(new Port(itineraryInput.value));
        const newPara = document.createElement("p");
        newPara.innerText = document.getElementById("portName").value;
        const list = document.getElementsByClassName("itinerary")[0];
        document.getElementsByClassName("itinerary")[0].insertBefore(newPara, list.children[listCounter]);
        itineraryInput.value = "";
        listCounter++;
    };
};

//create and name ship
shipInput.addEventListener("keypress", function(event){
    if(event.key === "Enter" && shipInput.value !== ""){
        const itinerary = new Itinerary(shipItinerary);
        tester = new Ship(itinerary);
        shipInput.value = "";
    }
});
