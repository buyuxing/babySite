'use strict'
function onNavActive(e){
	var parent = $(e).parent()
	if(!parent.hasClass('active'))
	{
		parent.addClass('active')
	}
	var arr = parent.siblings()
	if(arr.hasClass('active'))
	{
		arr.removeClass('active')
	}
}