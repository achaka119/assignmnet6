$(document).ready(function () {
    console.log("jQuery is ready!");
  
    $("h1").css("color", "#2563eb");
    $("#greeting").text("Hello! Welcome to my portfolio.");
    $(".intro").css("line-height", "1.8");
  
    $("#change-text").click(function () {
      $("#greeting").text("I am learning jQuery!");
    });
  
    const sections = `
    .profile-card,
    .about-section,
    .gallery-section,
    .favorites-section,
    .skills-section,
    .social-section,
    .form-section`;

    $("#light-theme").click(function () {
      $("body").css({
        "background-color": "#f2f4f8",
        color: "#222"
      });
  
      $(sections).css({
        "background-color": "white",
        color: "#222"
      });
    });
  
    $("#dark-theme").click(function () {
      $("body").css({
        "background-color": "#222",
        color: "white"
      });
  
      $(sections).css({
        "background-color": "#333",
        color: "white"
      });
    });

    $("#hide-button").click(function () {
        $("#status, #fun-facts").hide();
      });
    
    $("#show-button").click(function () {
        $("#status, #fun-facts").show();
    });
    
    $("#toggle-button").click(function () {
        $("#status, #fun-facts").toggle();
    });

    $("#fade-in-button").click(function () {
        $(".gallery-image").fadeIn(200);
    });
    
    $("#fade-out-button").click(function () {
        $(".gallery-image").fadeOut(200);
    });
    
    $("#fade-toggle-button").click(function () {
        $(".gallery-image").fadeToggle(200);
    });

    $(".slide-heading").click(function () {
        $(this).next(".slide-panel").slideToggle(400);
    });

    $("#open-panels").click(function () {
        $(".slide-panel").slideDown(400);
    });

    $("#close-panels").click(function () {
        $(".slide-panel").slideUp(400);
    });

    $("#add-skill-button").click(function () {
      const skill = $("#skill-input").val().trim();
  
      if (skill === "") {
        $("#skill-message").text("Please enter a skill.");
        return;
      }
      const newSkill = $("<li>").text(skill);
      $("#skill-list").append(newSkill);
      $("#skill-input").val("");
      $("#skill-message").text("Skill added to the end.");
    });
  
    $("#prepend-skill-button").click(function () {
      const skill = $("#skill-input").val().trim();
  
      if (skill === "") {
        $("#skill-message").text("Please enter a skill.");
        return;
      }
      const newSkill = $("<li>").text(skill);
      $("#skill-list").prepend(newSkill);
      $("#skill-input").val("");
      $("#skill-message").text("Skill added to the beginning.");
    });
  
    $("#remove-skill-button").click(function () {
      $("#skill-list li").last().remove();
      $("#skill-message").text("The last skill was removed.");
    });
    
    let isGithubLink = true;
    $("#change-link-button").click(function () {
      if (isGithubLink) {
        $("#social-link")
          .attr("href", "https://www.linkedin.com/")
          .text("Visit LinkedIn");

        isGithubLink = false;
      } else {
        $("#social-link")
          .attr("href", "https://github.com/achaka119")
          .text("Visit my GitHub");
  
        isGithubLink = true;
      }
    });

    $("#profile-form").on("submit", function (event) {
      event.preventDefault();
    });
  
    $("#name-input, #email-input").on("input", function () {
      const name = $("#name-input").val();
      const email = $("#email-input").val();
  
      $("#live-name").text(name);
      $("#live-email").text(email);
    });

    let skillsAreAnimated = false;

    $("#animate-skills-button").click(function () {
      if (skillsAreAnimated === false) {
        $("#html-bar").animate({ width: "90%" }, 1000);
        $("#css-bar").animate({ width: "75%" }, 1000);
        $("#javascript-bar").animate({ width: "60%" }, 1000);
  
        skillsAreAnimated = true;
      } else {
        $(".skill-fill").animate({ width: "0%" }, 1000);
  
        skillsAreAnimated = false;
      }
    });
  });