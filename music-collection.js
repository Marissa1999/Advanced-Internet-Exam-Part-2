$(document).ready(function()
      {

	   $('button').click(function()
	   {
		
        $.get('cd_catalog.xml', function(data, status)
		{
			
	     console.log(data);
		
	
         $(data).find('CD').each(function()
		 {

            var cd = $(this); 
            var title = cd.find('TITLE').text();
		    var artist = cd.find('ARTIST').text();
			

            console.log(title);
			console.log(artist);
			
	
	        var table = "";
			
			
	            table += "<tr><th>" + title 
		        + "</th><th>" + artist + "</th></tr>";

				
			$('#demo').append(table);
			
         });
		
	  });
		
    });
	   
});