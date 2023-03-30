$(document).ready(()=>
{
    var nav_aboutme = $("[id='nav_aboutme']");
    var nav_educaiton = $("[id='nav_education']");
    var nav_languages = $("[id='nav_languages']");
    var nav_competence = $("[id='nav_competence']");
    var nav_experience = $("[id='nav_experience']");

    var nav_hambugermenu = $("#open-mobile-menu");
    var nav_hambugermenu_container = $('#mobile-menu-container');

    getFile("../pages/aboutme.html", (content)=> draw("#info", content));
    
    nav_aboutme.on("click", function()
    {
        console.log(nav_aboutme);
        getFile("../pages/aboutme.html", (content)=> draw("#info", content));
    });

    nav_educaiton.on("click", function()
    {
        console.log(nav_aboutme);
        getFile("../pages/education.html", (content)=> draw("#info", content));
    });
    
    nav_languages.on("click", function()
    {
        console.log(nav_aboutme);
        getFile("../pages/languages.html", (content)=> draw("#info", content));
    });
    
    nav_competence.on("click", function()
    {
        console.log(nav_aboutme);
        getFile("../pages/competence.html", (content)=> draw("#info", content));
    });
    
    nav_experience.on("click", function()
    {
        console.log(nav_aboutme);
        getFile("../pages/experience.html", (content)=> draw("#info", content));
    });

    window.addEventListener('popstate', ()=>
    {
        $("#mobile-menu-container").css("visibility", "hidden")
        $("body").css("overflow", "unset");
    })
    
    nav_hambugermenu_container.click(()=>
    {
        $("#mobile-menu-container").css("visibility", "hidden")
        $("body").css("overflow", "unset");
    });

    nav_hambugermenu.click(()=>
    {
        $("#mobile-menu-container").css("visibility", "visible")
        $("body").css("overflow", "hidden");
    });
})

function draw(innerhtml, content)
{
     $(innerhtml).fadeOut(100, function()
     {
        $(innerhtml).html(content).fadeIn();
     });
}

function append(innerhtml, content)
{
    $(innerhtml).append(content).fadeIn();
}

function checkScreenChange(onMobile, onComputer)
{
    if($(window).width() < 800)
    {
        onMobile();
    }
    else
    {
        onComputer();
    }
}
