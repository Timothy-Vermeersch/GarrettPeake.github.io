function success(){
    console.log("succesfully wrote data to firebase");
}

function error(){
    console.log("failed to write data to firebase");
}

function saveToFirebase(data) {
    var dataObject = {
        DATA: data
    };

    firebase.database().ref('Data_Entries').push().set(dataObject)
        .then(function(snapshot) {
            success(); // some success method
        }, function(error) {
            console.log('error' + error);
            error(); // some error method
        });
}

saveToFirebase("Test data");
