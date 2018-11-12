<!doctype html>
<html lang="en">
  <head>
    <title>firebase authentication</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css" integrity="sha384-Smlep5jCw/wG7hdkwQ/Z5nLIefveQRIY9nfy6xoR1uRYBtpZgI6339F5dgvm/e9B" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css">
    <link href="https://fonts.googleapis.com/css?family=Black+And+White+Picture|Comfortaa|Raleway" rel="stylesheet">
 <link rel="stylesheet" href="../css/style.css">
  </head>
  <body>
    
    
<!--navbar-->

<nav id="navbar" class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#"><i class="fas fa-fire"></i> firebase to do's</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <!--<input class="form-control mr-sm-2" type="search" placeholder="Search">-->
      <button id="logout" class="btn btn-secondary">Logout</button>
    </form>
  </div>
</nav>

<!--end of navbar-->
    
    
    
    <div class="container mx-auto">
        <div class="jumbotron mt-3 col-sm-10 col-md-8 col-lg-7 mx-auto">
    
        <!-- Content here -->
<!-- form -->

<!--new form-->
<h2 class="text-center title"><i class="fas fa-lock"></i> Login to your account</h2>
<hr/>
<form id="sign-in-form">
  <div class="form-group col-sm-6  mx-auto">
    <label for="sign-in-email"><i class="fas fa-at"></i> Email address</label>
    <input type="email" class="form-control" id="sign-in-email" aria-describedby="emailHelp" placeholder="Enter email" required>
    
  </div>
  <div class="form-group col-sm-6 mx-auto">
    <label for="sign-in-password"><i class="fas fa-key"></i> Password</label>
    <input type="password" class="form-control" id="sign-in-password" placeholder="Password" required>
  </div>
  <!--<div class="form-group form-check col-sm-6 mx-auto">-->
  <!--  <input type="checkbox" class="form-check-input" id="exampleCheck1">-->
  <!--  <label class="form-check-label" for="exampleCheck1">Check me out</label>-->
  <!--</div>-->
  
  <div class=" col-sm-6 mx-auto">
  <button id="sign-in-button" type="submit" class="btn btn-primary col-sm-12 mx-auto">Submit</button>
  </div>
  <div class=" col-sm-6 mx-auto mt-3 text-center">Don't have an Account?<a href="../../index.html"> Sign Up</a></div>
  <!--<div class=" col-sm-6 mx-auto">Already have an Account?<a href="signIn.html"> Login here</a></div>-->
  
</form>
<!--end of new form-->

<div class="text-center mx-auto">
<div class="welcome-message text-center mx-auto animated zoomOutUp delay-2s"></div>



<!--<div class="col-auto">-->
<!--            <button id="logout" class="btn btn-secondary mb-2 text-center mx-auto">Logout</button>-->
<!--        </div>-->
        </div>
        
        
        <!-- Authorization -->
        <div class="container">
    <div id="to-do-list" class="dashed-container">
      

      <form id="add-item-form">
        <h3>To Do's</h3>
        <input type="text" id="item" class="form-control col-sm-6" placeholder="to do item" required>
        <button type="submit" class="btn btn-dark mt-3">Add item</button>
      </form>

      <div class="mt-2" id="to-do-list-items"></div>

    </div>
    </div>
    <hr/>
        
        
</div>
<!--end of jumbotron-->
</div>

    
    
    <script src="https://www.gstatic.com/firebasejs/5.5.8/firebase.js"></script>
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/js/bootstrap.min.js" integrity="sha384-o+RDsa0aLu++PJvFqy8fFScvbHFLtbvScb8AjopnFD+iEQ7wo/CG0xlczd+2O/em" crossorigin="anonymous"></script>
    <script src="../javascript/app.js"></script>
  </body>
</html>