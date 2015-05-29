

var formattedSkills, skill;



for (i = 0; i < bio.skills.length; i++) {
    skill = HTMLskills.replace("%data%",bio.skills[i]);
    formattedSkills = formattedSkills ? formattedSkills+skill : skill;
}



$("#header").append(HTMLskillsStart).append(formattedSkills);

//Build the Work Experience Section
$("#workExperience").append(HTMLworkStart);
$(".work-entry").append(formattedPosition);

