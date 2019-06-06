// initial variable
var name = "";
var role = "";
var startDate = "";
var monthlyRate = "";

// firebase database

var firebaseConfig = {
    apiKey: "AIzaSyBPwgeQEwZQ8aBTY0OSXrtpNbs_cvt2aFE",
    authDomain: "new-proj-75126.firebaseapp.com",
    databaseURL: "https://new-proj-75126.firebaseio.com",
    projectId: "new-proj-75126",
    storageBucket: "new-proj-75126.appspot.com",
    messagingSenderId: "492114462647",
    appId: "1:492114462647:web:14e3bc1b1f55be5e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //firebase reference

  var database = firebase.database();

//CREATE A BUTTON .on('click') EVENT TO ADD A USER WHEN THE USER HITS SUBMIT
$("#submit").on("click", function(event) {
    event.preventDefault();

//event.preventDefault(); 
//USE THE VARIABLES CREATED ON LINE 2-5 TO SELECT THE VALUE OF HTML INPUTS. MAKE SURE TO TRIM ANY EXTRA SPACES 
    name = $("#employee").val().trim();
    role = $("#role").val().trim();
    startDate = $("#date").val().trim();
    monthlyRate = $("#rate").val().trim();

    console.log(name);
    console.log(role);
    console.log(startDate);
    console.log(monthlyRate);

    database.ref().set({

        userName:name,
        userRole:role,
        userStartDate:startDate,
        userMonthlyRate:monthlyRate
    })
})

database.ref().on("value", function(snapshot){
    $("#empl-display").text(snapshot.val().name);
    $("#empl-display").text(snapshot.val().name);
    $("#empl-display").text(snapshot.val().name);
    $("#empl-display").text(snapshot.val().name);
})
// GOOGLE JQUERY SELECTORS

