console.log(window.location.search);
function saveToFirebase(data) {
    var dataObject = {
        DATA: data
    };

    firebase.database().ref('test').push().set(dataObject)
        .then(function(snapshot) {
        }, function(error) {
            console.log('error' + error);
        });
}

saveToFirebase("Test data");
