$(document).ready(function () {
    $( "#work1" ).hover(
        function() {
            $("#overlay1").show();
        }, function() {
            $("#overlay1").hide();
        }
      );

    $("#work2").mouseenter(function () {
        $("#overlay2").show();
    }).mouseleave(function () {
        $("#overlay2").hide();
    });

    $("#work3").mouseenter(function () {
        $("#overlay3").show();
    }).mouseleave(function () {
        $("#overlay3").hide();
    });

    $("#work4").mouseenter(function () {
        $("#overlay4").show();
    }).mouseleave(function () {
        $("#overlay4").hide();
    });

    $("#work5").mouseenter(function () {
        $("#overlay5").show();
    }).mouseleave(function () {
        $("#overlay5").hide();
    });

    $("#work6").mouseenter(function () {
        $("#overlay6").show();
    }).mouseleave(function () {
        $("#overlay6").hide();
    });


    $("#work7").mouseenter(function () {
        $("#overlay7").show();
    }).mouseleave(function () {
        $("#overlay7").hide();
    });

    $("#work8").mouseenter(function () {
        $("#overlay8").show();
    }).mouseleave(function () {
        $("#overlay8").hide();
    });


    $("#design-image").click(function () {
        $("#design-image").slideDown('1500').hide('1000');
        $("#design").show('1500');
    });
    $("#design").click(function () {
        $("#design").slideUp('1500');
        $("#design-image").slideDown('1500');
    });

    $("#development-image").click(function () {
        $("#development-image").slideDown('1500').hide('1000');
        $("#development").show('1500');
    });
    $("#development").click(function () {
        $("#development").slideUp('1500');
        $("#development-image").slideDown('1500');
    });

    $("#product-image").click(function () {
        $("#product-image").slideDown('1500').hide('1000');
        $("#product").show('1500');
    });
    $("#product").click(function () {
        $("#product").slideUp('1500');
        $("#product-image").slideDown('1500');
    });

    $("form#form-contact").submit(function (event) {
        // event.preventDefault();
        var name = $("input#name").val();
        var email = $("input#email").val();
        var message = $("textarea#comment").val();
        if ($("input#name").val() && $("input#email").val()) {
            alert(name + ", we have received your message. Thank you for reaching out to us.");
        }
        else {
            alert("Please enter your name and email!");
        }

    });

});

