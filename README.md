# wp-boilerplate
A simple, but efficient, way to start a WordPress project.

## Getting Started
To start using this boilerplate, you must build it with Gulp. Do to so, just install the required modules:
```cd /path/to/your/theme```
```npm install```
```gulp watch```


## Build tool
This boilerplate is currently using Gulp to compile the SASS and JS files. For more info, lookup ```gulpfile.js``` or <a href="https://gulpjs.com/" target="_blank">Gulp's official doc</a>.


## Animations
We use <a href="https://daneden.github.io/animate.css/" target="_blank">Animate.css</a> in conjunction with <a href="https://wowjs.uk/" target="_blank">Wow.js</a> to animate the content. Just build the JS and CSS files and start using Animate.css classes to activate the animation on page scroll.
<b>Example:</b> ```<h1 class="wow bounceInLeft">Title that bounce from the Left.</h1>```


## Theme Functions
The theme core functions are located in the ```functions``` folder and included in ```functions.php``` file. The WordPress Admin related files are located in the child folder ```admin```.
