$(function() {

    $(".text1").hide();
    $(".text2").hide();
    $(".text3").hide();
    $(".text4").hide();
    $(".text5").hide();
    $(".text6").hide();
    $(".text7").hide();
    $(".text8").hide();
    $(".text9").hide();
    $(".text10").hide();

    $(".moreInfo1").on('click', function() {
        $(".text1").toggle("slow")
        $(this).text(function(i, text) {
            return text === "Klicka här för att dölja info" ? "Klicka här för mer info" : "Klicka här för att dölja info";
        })
    })
    
    $(".moreInfo2").on('click', function() {
        $(".text2").toggle("slow")
        $(this).text(function(i, text) {
            return text === "Klicka här för att dölja info" ? "Klicka här för mer info" : "Klicka här för att dölja info";
        })
    })

    $(".moreInfo3").on('click', function() {
        $(".text3").toggle("slow")
        $(this).text(function(i, text) {
            return text === "Klicka här för att dölja info" ? "Klicka här för mer info" : "Klicka här för att dölja info";
        })
    })

    $(".moreInfo4").on('click', function() {
        $(".text4").toggle("slow")
        $(this).text(function(i, text) {
            return text === "Klicka här för att dölja info" ? "Klicka här för mer info" : "Klicka här för att dölja info";
        })
    })

    $(".moreInfo5").on('click', function() {
        $(".text5").toggle("slow")
        $(this).text(function(i, text) {
            return text === "Klicka här för att dölja info" ? "Klicka här för mer info" : "Klicka här för att dölja info";
        })
    })

    $(".moreInfo6").on('click', function() {
        $(".text6").toggle("slow")
        $(this).text(function(i, text) {
            return text === "Klicka här för att dölja info" ? "Klicka här för mer info" : "Klicka här för att dölja info";
        })
    })

    $(".moreInfo7").on('click', function() {
        $(".text7").toggle("slow")
        $(this).text(function(i, text) {
            return text === "Klicka här för att dölja info" ? "Klicka här för mer info" : "Klicka här för att dölja info";
        })
    })

    $(".moreInfo8").on('click', function() {
        $(".text8").toggle("slow")
        $(this).text(function(i, text) {
            return text === "Klicka här för att dölja info" ? "Klicka här för mer info" : "Klicka här för att dölja info";
        })
    })

    $(".moreInfo9").on('click', function() {
        $(".text9").toggle("slow")
        $(this).text(function(i, text) {
            return text === "Klicka här för att dölja info" ? "Klicka här för mer info" : "Klicka här för att dölja info";
        })
    })

    $(".moreInfo10").on('click', function() {
        $(".text10").toggle("slow")
        $(this).text(function(i, text) {
            return text === "Klicka här för att dölja info" ? "Klicka här för mer info" : "Klicka här för att dölja info";
        })
    })

        
    $("#submitButton").on('click', function(){
            
        $('.contact')
        .text("Tack för ditt meddelande. Vi återkopplar så fort vi kan")
      });


    $("#createButton").on('click', function(){
            
        $('.container')
        .text("Ditt event är nu skapat!")
      });

})


