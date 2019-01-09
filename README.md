# wp-boilerplate
A simple, but efficient, way to start a WordPress project.

## Getting Started
To start using this boilerplate, you must build it with Gulp. Do to so, just install the required modules:

Locate your theme: ```cd /path/to/your/theme```<br />
Install required node_modules: ```npm install```<br />
Build and watch Gulp tasks: ```gulp watch```<br />


## Build tool
This boilerplate is currently using Gulp to compile the SASS and JS files. For more info, lookup ```gulpfile.js``` or <a href="https://gulpjs.com/" target="_blank">Gulp's official doc</a>.


## Theme Functions
The theme core functions are located in the ```functions``` folder and included in ```functions.php``` file. The WordPress Admin related files are located in the child folder ```admin```.


## Animations
We use <a href="https://daneden.github.io/animate.css/" target="_blank">Animate.css</a> in conjunction with <a href="https://wowjs.uk/" target="_blank">Wow.js</a> to animate the content. Just build the JS and CSS files and start using Animate.css classes to activate the animation on page scroll.<br />
<b>Example:</b> ```<h1 class="wow bounceInLeft">Title that bounce from the Left.</h1>```


## Shortcodes

<b>Email Encoding</b>
Will return an encoded version of a mailto link.
```[email]your@email.com[/email]```

<b>Google Maps</b>
Will display a simple Google Map and include required scripts.
```[map api_key="INSERT YOUR API KEY" id="your-map" coords="53.339381, -6.260405" zoom="15" type="satellite"]```
