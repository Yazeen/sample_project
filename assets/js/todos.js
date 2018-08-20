$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

$("ul").on("click", "span", function( event ) {
	event.stopPropagation();
	$(this).parent().fadeOut( 500, function() {
		$(this).remove();
	}); 	
});

$("input[type='text']").keypress( function( e ) {
	if( e.which == 13 ) {
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + $(this).val() + "</li>");
		$(this).val("");	
	}
});

$(".fa-plus-square").on("click", function() {
	$("input[type='text']").fadeToggle(500);
});


//cd <dir>                             		       //Navigate.
//git init 										   //Set the folder as git.
//git status                                	   //View files inside of the git folder.
//git add <filename>                         	   //Add files to backup staging part. (-A <filename> to add all files)
//git commit -m "message"                     	   //Commit and save changes.
//git checkout -- .                           	   //Replace current files/folders (if any) with the backed up commited files/folders.
//git clone https://github.com/<link>/project.git  //Download and set current directory as git init from the given link's files.
//git remote -v                                    //Check the fetch and push url of git.
//git remote set-url origin <link>                 //Set the url of ur github directory.
//git push origin master                           //Upload the files and folders to your github page.
//git remote add origin <link>                     //add link to set github.

//node <filename.js>                        
//npm install <filename> -save 
//npm init

