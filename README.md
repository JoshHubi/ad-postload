What is it?
=============
Library that allows post loading of content/ads after the entire page has loaded, thus saving overall loading time.

The problem
=============

Browsers render &lt;script&gt; element in the safe way - they don't know whether the loaded javscript will be required in the HTML following, so they STOP ALL RENDERING until the tag is finished.

If the ad delivery provider is slow, the page is slow. And they are often slow. Another problem is daisy chaining. This brings many more requests to previously unvisited servers, resulting in many DNS requests.

The solution
=============

Move the ads to the bottom, after all the content. We understand the ads must stay at the top, but why not load them at the bottom and then show them at the top?

How do use the code
=============

The solution is quite simple. Follow these steps:

1. Load in our small javascript library at the top of your header (We encourage you to look at the code as you might come up with something better and add on to our exsiting code.):
<pre>
&lt;script src=&quot;js/burst.postload.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;  
</pre>

2. In the place where you originally displayed the AD tags, display an empty DIV with specific ID. You can choose to hide it, or show it with the final dimensions - depends on your opinion what users like more - sudden displaying, or empty spaces.
<pre>
&lt;div id=&quot;banner_container_728x90&quot;&gt;&lt;/div&gt;
</pre>

3. in the footer of the page, after loading all you site's content and javascript and probably before statistics scripts (again a thing to think about), put the actual ad tags:
<pre>
&lt;div id=&quot;banner_data_728x90&quot;&gt;&lt;/div&gt;
</pre>

4. right after that, put the copying code
<pre>
&lt;script type=&quot;text/javascript&quot;&gt;
burst.ads.move(&#39;728x90&#39;);
&lt;/script&gt;
</pre>


Important: the actual moving of the ad is done by moving the enclosing DIV using DOM movement. This way the inner real ad elements are untouched, things don't happen twice etc.