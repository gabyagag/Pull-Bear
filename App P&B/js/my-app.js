// Initialize your app
var myApp = new Framework7({
	root:'#app',
	theme: 'ios', //ios, md, auto
    modalTitle: 'Framework7', 	//title for modals
	panel: {
    	swipe: 'left',
  	},
	cache:false,
	pushState:false,
	swipeBackPage:true,
	material: true,
	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/coats/',
    	url: 'coats.html',
    	name: 'coats',
  		},
		{
		path: '/account/',
    	url: 'account.html',
    	name: 'account',
  		},
		{
		path: '/Blouses-Shirts/',
    	url: 'Blouses-Shirts.html',
    	name: 'Blouses-Shirts',
  		},
		{
		path: '/basics/',
    	url: 'basics.html',
    	name: 'basics',
  		},
		{
		path: '/new/',
    	url: 'new.html',
    	name: 'new',
  		},
		{
		path: '/info-coats/',
    	url: 'info-coats',
    	name: 'info-coats',
  		},
	]

});

// Export selectors engine
var $$ = Dom7;





 

