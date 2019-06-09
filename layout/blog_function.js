var rootLocation = window.location.protocol+'//'+window.location.hostname;


document.addEventListener('DOMContentLoaded', function () {


    $('document').ready(function(){
        myAlert();
        openALoginModal()
        pixelArtLogo();
        time = setInterval(function() {
            pixelArtLogo();
        }, 1200);
    });

    $('document').ready(function(){
        var pixelColor = Math.floor((Math.random() * 4)+1);
        //console.log(pixelColor);

        time = setInterval(function() {
            pixelArtLogoLoading(pixelColor);
        }, 50);
    });



});


function myAlert(){
    $(".myAlert-bottom").show();
    setTimeout(function(){
        $('.myAlert-bottom').addClass("fadeOut");
    }, 10000);
}





function pixelArtLogoLoading(pattern){
    var r, g, b;
    switch (pattern) {

        case 1:
             r = Math.floor((Math.random() * 255));
             g = Math.floor((Math.random() * 255));
             b = Math.floor((Math.random() * 255));
            break;
        case 2:
             r = 0;
             g = 0;
             b = Math.floor((Math.random() * 255));
            break;
        case 3:
             r = Math.floor((Math.random() * 255));
             g = 0;
             b = 0;
            break;
        case 4:
             r = 0;
             g = Math.floor((Math.random() * 255));
             b = 0;
            break;

    }



    var a = Math.random()+0.5;
    //var a = 0.6;
    var id = Math.floor((Math.random() * 100));
    //console.log(r+' - '+g+' - '+b);
    var whitePXL = [13, 14, 15, 16, 17, 23, 24, 32, 33, 34, 43, 44, 45, 46, 55, 56, 57, 66, 67, 73, 75, 76, 77, 82, 83, 84, 85, 86];
    var ok = true;
    for(var i = 0; i < whitePXL.length; i++){

        if(whitePXL[i] == id){
            ok = false;
        }


    }
    if(ok == true){
        $('#PxL-'+id).attr('style', 'background-color: rgba('+r+', '+g+', '+b+', '+a+')');
    }

}



function pixelArtLogo(){
    var _token =  document.getElementsByName("_token")[0].value;
    var route = rootLocation+'/pixel/getDivPixelList';
    var XMLHttp = new XMLHttpRequest(),
        sendRequest = new FormData();

    XMLHttp.onload = function () {
        var genreContent = this.responseText;
        var divArray = JSON.parse(genreContent);

        if(genreContent != 'not'){
            $("#boxPx").remove();
            var div = $("<div></div>").attr("class", "boxPx");
            div.attr("id", "boxPx");
            $("#upBoxer").append(div);

            for (var i = 0; i < divArray.length; i++) {
                $("#boxPx").append(divArray[i]);
                var num = (i+1)%10;
                if(num == 0 ){
                    var br = $("<br>"); // Create with jQuery
                    $("#boxPx").append(br);

                }
            }
        }
    };

    //sendRequest.append('id', id);
    sendRequest.append('_token', _token);
    //sendRequest.append('action', action);

    XMLHttp.open('POST', route);
    XMLHttp.send(sendRequest);
}



function openALoginModal(){
    var location = window.location.href;
    // console.log(location);
    var login = location.split('/')[3];
    //console.log(login);
    if(login == 'login'){
        $('#loginModalButton').click();
    }

}


function serchRedirect(event) {
    var navSearchInput = document.getElementById('navSearchInput').value;
    event.preventDefault();
    // Simulate an HTTP redirect:
    window.location.replace(rootLocation+'/?navSearchInput='+navSearchInput);

    //  console.log(rootLocation);
   //console.log(navSearchInput);

}
