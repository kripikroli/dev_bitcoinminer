<!DOCTYPE html>
<html>
	<head>
		<title>Bitcoin Mine </title>

		<link href='https://fonts.googleapis.com/css?family=Merriweather:400,300,700|Lato:400,900' rel='stylesheet' type='text/css'>
		<link href='/css/style.css' rel='stylesheet' type='text/css'>

		<!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
		<!--[if lt IE 9]>
	      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
	      <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
	    <![endif]-->
	</head>
	<body>
		<header>
			<a href="/">
				<h1>Bitcoin Mine</h1>
			</a>
			<nav>
				<a href="/">Home</a>
				<a href="/blog">Blog</a>
				<a href="/review">Reviews</a>
				<a href="/build">Builds</a>
				<a href="/guide">Guides</a>
			</nav>
		</header>

		<section>
			var qs = (function(a) {
    if (a == "") return {};
    var b = {};
    for (var i = 0; i < a.length; ++i)
    {
        var p=a[i].split('=');
        if (p.length != 2) continue;
        b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
    }
    return b;
})(window.location.search.substr(1).split('&'));
var categoryId = qs['category'];
var threadName = $("<div>"+qs['thread']+"</div>").text();

// Set the Disqus Variables
var disqus_shortname = 'bitcoinmine'; 
var disqus_identifier = threadName;
var disqus_title = threadName;
var disqus_category_id = categoryId;
var disqus_url = 'https://www.bitcoinmine.com/thread.html?thread=' + encodeURIComponent(qs['thread']) + '&category=' + categoryId;

// Update the page based on the thread
document.title = threadName + ' | ' + document.title;
$('.thread-title').html(threadName);

// Include the Disqus Component
(function() {
    var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
    dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
})();

//Get the category data
$.ajax({
	type: 'GET',
	url: "/categories.json",
	cache: false,
	dataType: "json",
	success: function (categories) {
		var category = categories[categoryId];
		$('.category-link').html(category.title);
		$('.category-link').attr('href', category.url);
	}
});
		</section>

		<footer>
			<p><a href="https://github.com/sunnankar/bitcoinmine" target="_blank">GitHub</a></p>
		</footer>
		
		<script>
		  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

		  ga('create', 'UA-72183261-1', 'auto');
		  ga('send', 'pageview');
		</script>
		<script src="https://code.jquery.com/jquery-1.10.2.min.js"></script>
		 
	</body>
</html>