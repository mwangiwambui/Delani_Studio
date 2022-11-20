$(document).ready(function(){
    $("#work").mouseover(function(){
        $("#overlay").show();
      }).mouseout(function(){
        $("#overlay").hide();
      });

    $("#design-image").click(function(){
        $("#design-image").slideDown('1500').hide('1000');
        $("#design").show('1500');
      });
      $("#design").click(function(){
        $("#design").slideUp('1500');
        $("#design-image").slideDown('1500');
      });

      $("#development-image").click(function(){
        $("#development-image").slideDown('1500').hide('1000');
        $("#development").show('1500');
      });
      $("#development").click(function(){
        $("#development").slideUp('1500');
        $("#development-image").slideDown('1500');
      });

      $("#product-image").click(function(){
        $("#product-image").slideDown('1500').hide('1000');
        $("#product").show('1500');
      });
      $("#product").click(function(){
        $("#product").slideUp('1500');
        $("#product-image").slideDown('1500');
      });

      $("form#form-contact").submit(function(event){
        // event.preventDefault();
        var name = $("input#name").val();
        var email = $("input#email").val();
        var message = $("textarea#comment").val();
        if ($("input#name").val() && $("input#email").val()){
          alert (name + ", we have received your message. Thank you for reaching out to us.");
        }
        else {
          alert("Please enter your name and email!");
        }
        
      });
    
});

