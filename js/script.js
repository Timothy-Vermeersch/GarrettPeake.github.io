function success(){
    console.log("succesfully wrote data to firebase");
}

function error(){
    console.log("failed to write data to firebase");
}

function saveToFirebase(data) {
    var dataPoints = data.split("_");
    var dataObject = {
        BathroomID: dataPoints[1],
        RefillTP: : dataPoints[2],
        RefillSoap: : dataPoints[3],
        RefillTowels: : dataPoints[4],
        CleanToilets: dataPoints[5],
        CleanFloor: dataPoints[6],
    };

    firebase.database().ref('Data_Entries').push().set(dataObject)
        .then(function(snapshot) {
            success(); // some success method
        }, function(error) {
            console.log('error' + error);
            error(); // some error method
        });
}

if(window.location.search.includes("PACKET")){
    saveToFirebase(window.location.search.substr(1));
}
