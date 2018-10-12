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
        CleanFloor: dataPoints[2],
        CleanToilets: dataPoints[3],
        RefillSoap: dataPoints[4],
        RefillTP: dataPoints[5],
        RefillTowels: dataPoints[6]
    };

    firebase.database().ref('Data_Entries').push().set(dataObject)
        .then(function(snapshot) {
            success(); // some success method
        }, function(error) {
            console.log('error' + error);
            error(); // some error method
        });
}

function testingPull(){
    // Import Admin SDK
var admin = require("firebase-admin");

// Get a database reference to our posts
var db = admin.database();
var ref = db.ref("server/saving-data/fireblog/posts");

// Attach an asynchronous callback to read the data at our posts reference
ref.on("value", function(snapshot) {
  console.log(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});
}

if(window.location.search.includes("PACKET")){
    saveToFirebase(window.location.search.substr(1));
}
