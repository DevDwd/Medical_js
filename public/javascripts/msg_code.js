var socket = io.connect('http://localhost:3000');
// On demande le pseudo au visiteur...
    var pseudo = prompt('Bienvenu sur AloDocteur \n Quel est votre pseudo ?');
// Et on l'envoie avec le signal "petit_nouveau" (pour le différencier de "message")
    socket.emit('petit_nouveau', pseudo);
    //$('#author').html(pseudo);

     socket.on('get_all_talker',function (data) {
    	 /* body... */
    	
    	 for (variable in data) {
    	 	// statement
    	 	$('#message-row').append('<tr><td>'+ data[variable] + '</td><td>online</td></tr>');
    	 }
    	 
    });
    socket.on('new_talker',function (data) {
    	 /* body... */
    	 $('#message-row').append('<tr><td>'+ pseudo + '</td><td>online</td></tr>');
    });
    socket.on('message', function (data) {
		 		 /* body... script pour ajouter une nouvelle div*/ 
		 		 if(data.author == "null")
		 		 {
		 		 	$('#preview').append('<div><span>'+ inconnu + ':</span><br/><p style="text-indent:3em;">' + data.content+'</p><span class="pull-right">'+ data.date +'</span></div><br/>');
		 		 $('#form-in-li').before('<li class="user-message-row"><div><span>'+ inconnu + ':</span><br/><p style="text-indent:3em;">' + data.content+'</p><span class="pull-right">'+ data.date +'</span></div><br/></li>');
		 		 }else {
		 		 	$('#preview').append('<div><span>'+ data.author + ':</span><br/><p style="text-indent:3em;">' + data.content+'</p><span class="pull-right">'+ data.date +'</span></div><br/>');
		 		 $('#form-in-li').before('<li class="user-message-row"><div><span>'+ data.author + ':</span><br/><p style="text-indent:3em;">' + data.content+'</p><span class="pull-right">'+ data.date +'</span></div><br/></li>');
		 		 }
		 		 
		 		 //alert(data);
		 	} );
	function fonction()
		{

	        var task = {
	        	'content': 'content',
	        };

	        console.log(task);
	        task.content = document.getElementById('msg-content').value;

		 	socket.emit('fill', task);


		}
	function function_2 () {
		 // body...  
		  var task = {
	        	'content': 'content',
	        };

	        //task.title = document.getElementById("title").value;
	        task.content = document.getElementById('msg-content-2').value;

		 	socket.emit('fill', task);
	}

	$('#msg-submit-2').on('click', function(event) {
		event.preventDefault();
		function_2();

	});
	$("#msg-content-2").keypress(function(event) {
    if (event.which == 13) {
        event.preventDefault();
        function_2();
    }
});
	$("#msg-content").keypress(function(event) {
    if (event.which == 13) {
        event.preventDefault();
        fonction();
    }
});
	$('#msg-submit').on('click', function(event) {
		event.preventDefault();
		fonction();
		console.log('voila');
		/* Act on the event */
	});