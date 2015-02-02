// Get The Hour of Day
var date = new Date();
var current_hour = date.getHours();

console.log(current_hour);



// If nighttime,
if (current_hour >= 17) {
	// Remove 'day' Class
	$('body').removeClass('day');
	// Add  'night' Class
	$('body').addClass('night');
};
