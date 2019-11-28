/*================================================================================
	Item Name: Materialize - Material Design Admin Template
	Version: 4.0
	Author: PIXINVENT
	Author URL: https://themeforest.net/user/pixinvent/portfolio
================================================================================

NOTE:
------
PLACE HERE YOUR OWN JS CODES AND IF NEEDED.
WE WILL RELEASE FUTURE UPDATES SO IN ORDER TO NOT OVERWRITE YOUR CUSTOM SCRIPT IT'S BETTER LIKE THIS. */
var datavalley = null
$.getJSON("https://candyvalley.com.br/datavalley/data/20191126223250_public.json", function(json) {
    datavalley = json;
    console.log('datavalley',json); // this will show the info it in firebug console
});