$(document).ready(() => {

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyDhh7ltx2_E4iQViobKonFTjsg3ioLVW50",
        authDomain: "signup-form-2d114.firebaseapp.com",
        databaseURL: "https://signup-form-2d114.firebaseio.com",
        projectId: "signup-form-2d114",
        storageBucket: "",
        messagingSenderId: "574957317259"
    };
    firebase.initializeApp(config);

    var database = firebase.database();
    var auth = firebase.auth();
    const signUpForm = $("#sign-up-form");
    const signUpEmail = $("#sign-up-email");
    const signUpPassword = $("#sign-up-password");
    const logOutBtn = $("#logout");
    const signInForm = $("#sign-in-form");
    const signInEmail = $("#sign-in-email");
    const signInPassword = $("#sign-in-password");
    const title = $(".title");
    const welcome = $(".welcome-message");
    const toDoList = $("#to-do-list");
    const addItemForm = $("#add-item-form");
    const navBar = $("#navbar");

    // for signing up new user
    signUpForm.on("submit", e => {
        e.preventDefault();
        const email = signUpEmail.val();
        const pass = signUpPassword.val();

        const promise = auth.createUserWithEmailAndPassword(email, pass);
        promise.catch(e => alert(e.message));
        $("#error-message").html("<h4>" + e.message + "</h4>")
        //need to show this to the page when email and pass is already registered

    });

    //sign in existing user
    signInForm.on("submit", e => {
        e.preventDefault();
        const signEmail = signInEmail.val();
        const signInPass = signInPassword.val();

        const promise = auth.signInWithEmailAndPassword(signEmail, signInPass);
        promise.catch(e => alert(e.message));
        $(".welcome-message").html("<h4>" + e.message + "</h4>")

    });


    logOutBtn.on("click", () => {

        auth.signOut().then( () => {
            // Sign-out successful.
            console.log("Signed Out");
        }).catch((error) => {
            // An error happened.
            console.log(error);
            
        });

    });

//for global access
let uid = "";
    firebase.auth().onAuthStateChanged(firebaseUser => {

        if (firebaseUser) {
            // console.log(firebaseUser);
            //hide signup for here
            navBar.show();
            signUpForm.hide();
            signInForm.hide();
            title.hide();
            welcome.show();
            logOutBtn.show();
            toDoList.show()
            uid = firebaseUser.uid;
            $(".welcome-message").html("<h4>" + "Welcome: " + firebaseUser.email + "</h4>")

// Use the UID to get authorized data
    database.ref('/to-do-list').orderByChild('uid').equalTo(uid).on("value", (snapshot) => {
      $('#to-do-list-items').empty()
      snapshot.forEach(data => {
        var p = $('<p>')
        p.text(data.val().item)
        var deleteButton = $("<button class='btn btn-danger mr-3 fa fa-eraser'>")
        // deleteButton.html('x')
        deleteButton.addClass('delete-button')
        deleteButton.attr('data', data.key)
        p.prepend(deleteButton)
        $('#to-do-list-items').append(p)
      })
    })

        }
        else {
            console.log("Not Logged In");
            //show signup or log in form here
            signUpForm.show()
            signInForm.show()
            logOutBtn.hide()
            title.show()
            welcome.hide()
            toDoList.hide()
            navBar.hide();
        }
    });
    
    // delete event
$(document).on('click', '.delete-button', function(){
  key = $(this).attr('data');
  database.ref('/to-do-list').child(key).remove();
  
});

// add event
$('#add-item-form').on('submit', (e) => {
  e.preventDefault()
  item = $('#item').val()
  database.ref('/to-do-list').push({
    item: item,
    uid: uid
  });
  addItemForm[0].reset();
});

});
