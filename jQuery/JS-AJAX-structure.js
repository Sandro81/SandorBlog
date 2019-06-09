/*-- ------------------      sandorBlog(JS Ajax Structure        ---------------- -- */
   /*-- ------------------         www.sandrofioravanti.it          ---------------- -- */
   /*-- ------------------                 Modal                    ---------------- -- */  

    // Javascript function
    function ajaxFunction(action, event) {
        // Read the ID parameter from the element that triggered the event
        var id = event.target.id;
        // Prevent the default behavior of the element (E.g. open a page after clicking on a link)
        event.preventDefault();

        // Read the value from other DOM elements on the page
        var userName = document.getElementById("userName").value;
        var _token = document.getElementsByName("_token")[0].value;

        /* --- Initialize the HTTP request. --- */
        var XMLHttp = new XMLHttpRequest(),
            sendRequest = new FormData();

        /* --- Track the state changes of the request. --- */
        XMLHttp.onreadystatechange = function() {
            if(this.readyState == 4 && this.status == 200) {
                // .responseText value contains the answer from the server
                var genreContent = this.responseText;

                // With JSON.parse, data becomes a JavaScript object.
                var objs = JSON.parse(genreContent);

                // With the data from the server you can manipulate the DOM
                document.getElementById("ID").innerHTML = objs['ObjectElement'];
            } else {
                // You can handler the errors from the server here...
            }
        };

        /* --- Finalize the request data --- */
        // .append() data to the request
        sendRequest.append('userName', userName);
        sendRequest.append('action', action);
        sendRequest.append('_token', _token);
        // .open() Specifies the type of request 'POST', 'GET', url and Async/sync (should be sent asynchronously).
        XMLHttp.open('POST', 'http://www.url.com', true);
        // .send() Sends the request to the server
        XMLHttp.send(sendRequest);
    }
/* https://www.sandrofioravanti.com/post/javascript-ajax-in-a-nutshell */
