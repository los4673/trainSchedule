$(document).ready(function () {
    //Database Config
    var config = {
        apiKey: "AIzaSyCH_fUpyoMtL44rJegbNWgHqgZKuXnhdhg",
        authDomain: "demo1-55912.firebaseapp.com",
        databaseURL: "https://demo1-55912.firebaseio.com",
        projectId: "demo1-55912",
        storageBucket: "demo1-55912.appspot.com",
        messagingSenderId: "564545881702"
    };

    firebase.initializeApp(config);
    var database = firebase.database();

    //Adds Train to database
    $("#submit").on("click", function () {
        event.preventDefault();
        var newTrain = {
            name: $("#name-input").val().trim(),
            destination: $("#destination-Input").val().trim(),
            first: $("#first-input").val().trim(),
            frequency: $("#frequency-input").val().trim(),
        };
        database.ref().push(newTrain);
        $("#name-input").val("");
        $("#destination-input").val("");
        $("#first-input").val("");
        $("#frequency-input").val("");

    });

    //Updates listing of current trains on database
    database.ref().on("child_added", function (childSnapshot) {
        var name = childSnapshot.val().name;
        var destination = childSnapshot.val().destination;
        var first = childSnapshot.val().first;
        var frequency = childSnapshot.val().frequency;

        var newRow = $("<tr>").append(
            $("<td>").text(name),
            $("<td>").text(destination),
            $("<td>").text(first),
            $("<td>").text(frequency),
        );

        $("#trainList").append(newRow);
    })
})