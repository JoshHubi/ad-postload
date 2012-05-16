== How modern ads are loaded ==

<pre>
<!-- begin ad tag -->
<script language="JavaScript" type="text/javascript">

document.write('<script language="JavaScript" src="http://a.collective-media.net/adj/gr.gr_wow/ROS;tile=1;dcopt=ist;sz=728x90;ord=' + ord + '?" type="text/javascript"><\/script>');

</script>

<noscript>
    <a href="http://a.collective-media.net/jump/gr.gr_wow/ROS;tile=1;sz=728x90;ord=123456789?" target="_blank">
     <img src="http://a.collective-media.net/ad/gr.gr_wow/ROS;tile=1;sz=728x90;ord=123456789?" width="728" height="90" border="0" alt="">
    </a>
</noscript>
<!-- End ad tag -->
</pre>

this consists of 2 things:
* 1. the javascript [http://www.w3schools.com/htmldom/met_doc_write.asp document.write()] that actually writes the ad as HTML. Often this is another &lt;script&gt; element that loads another code etc.
** this redirection is called daisy chaining, if the provider called does not have ad for us, he'll send us to different provider
* 2. the noscript tag that does the fallback, if the user has javascript turned off. In that case, static image is usually inserted. Daisy chaining is possible using HTTP redirections to the final right image.


The conclusion is, using Javscript, the ad delivery provider can display ANYTHING on the website, including flash, images, and other javscripts.


== The problem ==
Browsers render &lt;script&gt; element in the safe way - they don't know whether the loadede javscript will be required in the HTML following, so they STOP ALL RENDERING until the tag is finished.

If the ad delivery provider is slow, the page is slow. And they are often slow. Another problem is daisy chaining. This brings many more requests to previously unvisited servers, resulting in many DNS requests.


== The solution ==
Move the ads to the bottom, after all the content!

Yeah, try to propose this to your sales department. So the ads must stay at the top. But why not load them at the bottom and then show them at the top?

Well, the sales don't like this neither, but it has too heavy good sides, so you'll convince them:
* the site is fast
* the user likes fast site, thus does not leave and the probablity of ad click goes up


== How to do it ==
The solution is quite simple. Follow these steps:
'''1.''' in the place where you originally displayed the AD tags, display an empty DIV with specific ID. You can choose to hide it, or show it with the final dimensions - depends on your opinion what users like more - sudden displaying, or empty spaces.
<pre>
<div id="banner_container_728x90"></div>
</pre>
'''2.''' in the footer of the page, after loading all you site's content and javascript and probably before statistics scripts (again a thing to think about), put the actual ad tags:
<pre>
<div id="banner_data_728x90"></div>
</pre>
'''3.''' right after that, put the copying code - we use a small library at [http://www.gameriot.com/lib/ads.js], but i encourage to look at the code and you might as well come up with something better.
<pre>
<script type="text/javascript">
gr.ads.move('728x90');
</script>
</pre>

'''Important''': the actual moving of the ad is done by moving the enclosing DIV using DOM movement. This way the inner real ad elements are untouched, things don't happen twice etc.