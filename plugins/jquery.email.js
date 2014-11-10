/**
 * Email plugin for jQuery
 * Please use as you wish at your own risk.
 * @version 1.0
 * @author Sonia Ross
 */
(function($)
{
	$.fn.email = function(userName, domain, topLevelDomain)
	{
		e =  userName + '@' + domain + '.' + topLevelDomain;
		
		// append email address to all elements
		this.each(function() 
		{
			$(this).append('<a href="mailto:' + e + '" title="' + e + '">' + e + '</a>');
		});
		
		// allow jQuery chaining  
		return this;
	};	
})(jQuery);