
var bio = {
	"name": "Jason Casares",
	"role": "Web Developer",
	"contacts": {
		"mobile": "714-222-2498",
		"email": "jasonc@csdrafting.com",
		"github": "jasoncasares",
		"location": "Rancho Santa Margarita, California"
	},
	"welcomeMessage": "Early to bed and early to rise makes a man healthy, wealthy and wise. -Benjamin Franklin",
	"skills": ["Adventurer", "Entrepreneur", "AutoCAD"],
	"bioPic": "images/FullSizeRender.jpg"
};

var work = {
	"jobs": [
		{
			"title": "Owner",
			"employer": "CS Drafting",
			"dates": "2013-2016",
			"location": "Rancho Santa Margarita, CA",
			"description": "A drafting/design company offering services across various disciplines including architectural, design, and structural engineering systems."
		},
		{
			"title": "Co-Owner",
			"employer": "Hapai",
			"dates": "2015-2016",
			"location": "Rancho Santa Margarita, CA",
			"description": "An e-commerce baby carrier company set out to create the softest, easiest, and most comfortable baby wraps ever."		
		}
	]
};

var education = {
	"schools": [
		{
			"name": "",
			"degree": "",
			"dates": "",
			"location": "",
			"major": ""
		}],

	"onlineCourses": [
		{
			"title": "Front End Web Developer Nanodegree",
			"school": "Udacity",
			"dates": "2016",
			"url": "https://www.udacity.com"
		}]
};

var projects = {
	"projects": [
		{
			"title": "Project 1",
			"dates": "2016",
			"images": ["images/app.jpg"],
			"description": "Project Description"
		},
		{
			"title": "Project 2",
			"dates": "2016",
			"images": ["images/app.jpg"],
			"description": "Project Description"
		}]
};

bio.display = function () {
	var name = "Jason Casares";
	var formattedName = HTMLheaderName.replace("%data%", name);

	var role = "Front End Web Developer";
	var formattedRole = HTMLheaderRole.replace("%data%", role);

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	var newMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(newMobile);
	var newEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(newEmail);
	var newGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(newGithub);
	var newLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(newLocation);

	var newMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#footerContacts").append(newMobile);
	var newEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#footerContacts").append(newEmail);
	var newGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#footerContacts").append(newGithub);
	var newLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#footerContacts").append(newLocation);

	var newPic = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").append(newPic);

	var newMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(newMessage);
};

bio.skills.display = function() {
	if (bio.skills.length > 0) {

        $("#header").append(HTMLskillsStart);

        var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
        $("#header").append(formattedSkill);
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
        $("#header").append(formattedSkill);
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
        $("#header").append(formattedSkill);
    }
};

function displayWork() {
	for (job in work.jobs) {

		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(
			formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
		}
};

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			
		}
	}
};

education.display = function () {
	for (course in education.onlineCourses) {
		$("#education").append(HTMLonlineClasses);

		$("#education").append(HTMLschoolStart);
		var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		var formattedtitleSchool = formattedonlineTitle + formattedonlineSchool;
		$(".education-entry:last").append(formattedtitleSchool);

		var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
		$(".education-entry:last").append(formattedonlineDates);

		var formattedonlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
		$(".education-entry:last").append(formattedonlineUrl);
	}	
};

bio.display();
bio.skills.display();
displayWork();
projects.display();
education.display();

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
  // your code goes here
  	logClicks(x,y);
});

// you want to see a map? here's a map.
$("#mapDiv").append(googleMap);
