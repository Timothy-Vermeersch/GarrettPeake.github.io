function success(){
    console.log("succesfully wrote data to firebase");
}

function error(){
    console.log("failed to write data to firebase");
}

function saveToFirebase(email) {
    var emailObject = {
        email: email
    };

    firebase.database().ref('subscription-entries').push().set(emailObject)
        .then(function(snapshot) {
            success(); // some success method
        }, function(error) {
            console.log('error' + error);
            error(); // some error method
        });
}

saveToFirebase("Test data");
