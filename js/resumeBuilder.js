var bio = {
    "name": "Dexter Campbell",
    "role": "Web Developer",
    "contacts": {
        "mobile": "(646)592-1157",
        "email": "dextercampbell@dextercampbell.com",
        "githubUserName": "D3xC",
        "githubLink": "https://github.com/D3xC",
        "location": "Plantation, FL"
    },
    "biopic": "images/fry.jpg",
    "welcomeMessage": "This is my Welcome Message!",
    "skills": ["HTML", "CSS", "Javascript", "jQuery", "SQL"],
    "display": function () {
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.githubUserName);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
        var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedSkills, skill;
        $("#header").prepend(formattedRole).prepend(formattedName);
        $("#header").append(formattedBioPic);
        $("#header").append(formattedWelcome);
        $("#header").append(HTMLskillsStart);
        $("#topContacts").append(formattedMobile);
        $("#topContacts").append(formattedEmail);
        $("#topContacts").append(formattedGithub);
        $("#topContacts").append(formattedLocation);
        for (skill in bio.skills) {
            formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
            $("#skills").append(formattedSkills);
        }
    }
};

var work = {
    "jobs": [{
        "employer": "Epiq Bankruptcy Services",
        "title": "Data Analyst",
        "location": "New York, NY",
        "dates": "2001 - 2004, 2008 – Present",
        "description": "Created and maintained client databases throughout entire life cycle of bankruptcy proceedings. Improved efficiency of department’s data management processes. Prepared custom reports from analysis of client data. Managed generation and integrity of claimant notification mailing lists. Prepared claimant settlement checks. Maintained client Chapter 11 webpages. Provided technical support for legacy applications."
    }, {
        "employer": "The Cameron Law Group",
        "title": "Consultant",
        "location": "Plantation, FL",
        "dates": "8/2012 – 7/2014",
        "description": ""
    }, {
        "employer": "Atrium Staffing/NY Public Library",
        "title": "Temp Network Monitor – Data Center Relocation Project",
        "location": "New York, NY",
        "dates": "9/2008 – 10/20084",
        "description": "Monitored system performance, initialized backup processes and rebooted servers on request."
    }, {
        "employer": "Ted’s Montana Grill",
        "title": "Head Bartender",
        "location": "New York, NY",
        "dates": "2005 – 2008",
        "description": "Provided service to customers seated at the bar and surrounding bar tables. Filled drink orders for the dining room. Received and logged wine and liquor deliveries. Trained new staff members. Successfully established and maintained a regular clientele base. Identified inconsistencies in pricing structure."
    }, {
        "employer": "Shop ' N' Chek, Inc.",
        "title": "Programmer/Analyst",
        "location": "Atlanta, GA",
        "dates": "1997 – 2000",
        "description": "Converted and verified integrity of client data. Designed, tested  and maintained data entry applications for call center. Created customized reports based on complex database queries."
    }, {
        "employer": "Environmental Engineering Construction, Inc.",
        "title": "Accounting, Payroll and Data Entry Clerk",
        "location": "Conyers, GA",
        "dates": "1993 – 1997",
        "description": ""
    }],
    "display": function () {
        //Build the Work Experience Section
        for (job in this.jobs) {
            $("#workExperience").append(HTMLworkStart);
            var formattedPosition = HTMLworkEmployer.replace("%data%", this.jobs[job].employer) + HTMLworkTitle.replace("%data%", this.jobs[job].title);
            var formattedWorkDates = HTMLworkDates.replace("%data%", this.jobs[job].dates);
            var formattedLocation = HTMLworkLocation.replace("%data%", this.jobs[job].location);
            var formattedDescription = HTMLworkDescription.replace("%data%", this.jobs[job].description);
            $(".work-entry:last").append(formattedPosition);
            $(".work-entry:last").append(formattedWorkDates);
            $(".work-entry:last").append(formattedLocation);
            $(".work-entry:last").append(formattedDescription);
        }
    }
};
var education = {
    "schools": [{
        "name": "Emory University",
        "location": "Atlanta, GA",
        "majors": "Math & Computer Science",
        "dates": "1988 - 1992",
        "url": ""
    }],
    "onlineCourses": [{
        "title": "Intro to HTML and CSS",
        "school": "Udacity",
        "date": "2015",
        "url": "https://www.udacity.com/course/viewer#!/c-ud304-nd"
    }, {
        "title": "Responsive Web Design Fundamentals",
        "school": "Udacity",
        "date": "2015",
        "url": "https://www.udacity.com/course/viewer#!/c-ud893-nd"
    }, {
        "title": "Responsive Images",
        "school": "Udacity",
        "date": "2015",
        "url": "https://www.udacity.com/course/viewer#!/c-ud882-nd"
    }],
    "display": function () {
        //Build the Eductaion Section
        // Schools
        for (var school in this.schools) {
            var formattedSchool = HTMLschoolName.replace("%data%", this.schools[school].name);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", this.schools[school].dates);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", this.schools[school].location);
            var formattedMajor = HTMLschoolMajor.replace("%data%", this.schools[school].majors);
            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(formattedSchool);
            $(".education-entry:last").append(formattedSchoolDates);
            $(".education-entry:last").append(formattedSchoolLocation);
            $(".education-entry:last").append(formattedMajor);
        }
        //Online Courses
        $("#education").append(HTMLonlineClasses);
        for (var course in this.onlineCourses) {
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", this.onlineCourses[course].title);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", this.onlineCourses[course].school);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", this.onlineCourses[course].date);
            var formattedOnlineUrl = HTMLonlineURL.replace("%data%", this.onlineCourses[course].url);
            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
            $(".education-entry:last").append(formattedOnlineDates);
            $(".education-entry:last").append(formattedOnlineUrl);
        }
    }
};

var projects = {
    "projects": [{
        "title": "Project 1",
        "dates": "2015",
        "description": "This was my very first project ever. As you can see it is fake. But I will have a real one soon.",
        "images": []
    }, {
        "title": "Project 2",
        "dates": "2015",
        "description": "This was my 2nd project. Still fake. But this wll also change.",
        "images": []
    }],
    "display": function () {
        for (var project in this.projects) {
            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", this.projects[project].title);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", this.projects[project].dates);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", this.projects[project].description);
            $("#projects").append(HTMLprojectStart);
            $(".project-entry:last").append(formattedProjectTitle);
            $(".project-entry:last").append(formattedProjectDates);
            $(".project-entry:last").append(formattedProjectDescription);
        }
    }
};


bio.display()
work.display();
education.display();
projects.display();
$("#mapDiv").append(googleMap);
