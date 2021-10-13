//Caching the element IDs
var Banner = Banner || {}, addListeners, exitHandler, mainClick = document.getElementById('main-click'), cta = document.getElementById('cta');

Banner.init = function(){
	//Add the listeners for the clicks, and start the animation
	addListeners();
	Banner.animate();
};

Banner.animate = function(){
	let d = 0.4;
	let d_arrow = 0.2;
	let tl = gsap.timeline();
	tl
		.to('#copy-1', {x:-35, opacity:0, duration: d},"+=1.6")

		.to('#copy-2', {x:65, opacity:1, duration: d})
		.to('#copy-2', {x:0, opacity:0, duration: d}, "+=2")

		.to('#copy-3', {x:65, opacity:1, duration: d})
		.to('#copy-3', {x:0,opacity:0, duration: d}, "+=2")

		.to('#bg',{opacity:0, duration:d})
		.to('#bg2',{opacity:1, duration:d},"<")
		.from('#logo', {x:35,y:-30,scale:.75},"<")

		.to('#copy-4', {x:65,opacity:1, duration: d},"<")
		.to('#copy-4', {x:0,opacity:0, duration: d}, "+=2")

		.to('#copy-5', {x:65,opacity:1, duration: d})
		.to('#cta', {x:65, opacity:1, duration:d},"+=0.4")
		.to('#arrow', {x:100, duration: d_arrow},"+=0.3")
		.to('#arrow', {x:0, duration: d_arrow})
		.to('#arrow', {x:100, duration: d_arrow})
		.to('#arrow', {x:0, duration: d_arrow});
};

//Add Event Listeners
addListeners = function() {
	mainClick.addEventListener('click', exitHandler, false);
	cta.addEventListener('click', exitHandler, false);
};

exitHandler = function(e) {
	var exit = e.target.id;
	switch(exit){
		case 'backup':
			//Just to show that clicks events are working
			Enabler.exit('BACKUP_EXIT', 'test_pages/backup_exit.html');
		break;
		case 'cta':
			//Enabler.exit('CTA_EXIT');
			Enabler.exit('CTA_EXIT', 'test_pages/cta_exit.html');
		break;
		case 'main-click':
		default:
			//Enabler.exit('DEFAULT_EXIT');
			Enabler.exit('DEFAULT_EXIT', 'test_pages/main_exit.html');
		break;
	}
};
