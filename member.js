function skillsMember(){
    var member = document.getElementById("member");
    member.classList.add("active");
    var skills = document.getElementById("skills");
    skills.classList.remove("active");
    var projects = document.getElementById("projects");
    projects.classList.remove("active");
    var contact = document.getElementById("contact");
    contact.classList.remove("active");
    var about = document.getElementById("about");
    about.classList.remove("active");
    var home = document.getElementById("home");
    home.classList.remove("active");
}