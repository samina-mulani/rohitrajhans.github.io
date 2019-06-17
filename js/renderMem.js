$(document).ready(function(e){
	
let navData = {

	navElements : ["ACHIEVEMENTS","B","C"]
    
};
let memData = {
	"postholders" : [{"post": "Chair", "name": "ABC","linkp":"./media/members/anmol_singhal"},{"post":"Vice-Chair", "name": "DEF","linkp":"./media/members/anmol_singhal"}],
	"members": [{"name" : "HIJ","linkm":"./media/members/aarjav_jain.jpg"}]
};

/* Rendering required templates */

$.get('templates.html', function(templates) {
    let navbarSource = $(templates).filter('#navbar_template').html();
    let memSource = $(templates).filter("#mem_template").html();
    let contactSource = $(templates).filter("#contact_template2").html();
    let templateNav = Handlebars.compile(navbarSource);
    let templateMem = Handlebars.compile(memSource);
    let templateContact = Handlebars.compile(contactSource);
    let htmlMem = templateMem(memData);
    let htmlNav = templateNav(navData);
    let htmlContact = templateContact();
    html = htmlNav + htmlMem + htmlContact;
    console.log(html);
    $(".main-container").append(html);
});

});