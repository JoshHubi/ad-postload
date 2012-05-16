if (typeof burst == 'undefined')
{
	burst = {};
}

burst.ads = {
	
	active_part : 'basic',
	changed : false,
		
	move: function(banner_name)
	{
		var banner_system_name = "banner_container_" + banner_name;
		var banner_data_name = "banner_data_" + banner_name;

		try 
		{
			if (burst.ads.check(banner_data_name))
			{

				banner_system = document.getElementById(banner_system_name);
				banner_data = document.getElementById(banner_data_name);
				
				banner_system.appendChild(banner_data);
				banner_data.style.visibility = 'visible';
				banner_system.style.display = "block";
	
			}
		}
		
		catch(e)
		{
			//no client errors
		}
	},
	
	check: function(banner_id)
	{
			
		try
		{
			var oChildren = document.getElementById(banner_id).childNodes;
			var iChildren = oChildren.length;
			var is_banner = false;
			
			if (0 != iChildren)
			{
				for(i=0; i<=iChildren; i++)
				{
					if ((oChildren[i].tagName == 'A')
						||
						(oChildren[i].tagName == 'APPLET')
						||
						(oChildren[i].tagName == 'B')
						||
						(oChildren[i].tagName == 'CENTER')
						||
						(oChildren[i].tagName == 'DIV')
						||
						(oChildren[i].tagName == 'EMBED')
						||
						(oChildren[i].tagName == 'FONT')
						||
						(oChildren[i].tagName == 'IFRAME')
						||
						(oChildren[i].tagName == 'IMG')
						||
						(oChildren[i].tagName == 'OBJECT')
						||
						(oChildren[i].tagName == 'P')
						||
						(oChildren[i].tagName == 'PARAM')
						||
						(oChildren[i].tagName == 'SPAN')
						||
						(oChildren[i].tagName == 'TABLE')
						||
						(oChildren[i].tagName == 'SCRIPT')
					)
					{
							is_banner = true;
					}				
				}
				
			}
		}
		catch(err)
		{
			// no action
		}
		
		return is_banner;
	}
		
};