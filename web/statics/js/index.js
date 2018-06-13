'use strict'
$(function(){
    $('a[href="/"]').trigger('onclick');
});
$(function(){
	function GetDateDiff(startDate,endDate)  
	{     
		var startDate = new Date();
		var endDate = new Date(2017,10,21);
	    var dates = Math.abs((startDate - endDate))/(1000*60*60*24);     
	    return  parseInt(dates);    
	}
	$('#leftday').text(GetDateDiff());
});