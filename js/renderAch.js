$(document).ready(function(e){


let navData = {

	navElements : ["ACHIEVEMENTS","B","C"]
    
};

let achData = {
	text : [ {text:"BLAH", link:"./media/RecruitmentProgram_2018.png"}]
};


/* Custom helpers */

Handlebars.registerHelper('ch', function(context, options) {
	
  let ret = "";
  let data;

   if (options.data) 
    data = Handlebars.createFrame(options.data);
    	

  for(let i=0, j=context.length; i<j; i++) {

  	if (data) 
      		data.index = i;
  	if(i%3==0&&i)
    	ret+="</div></div>";
  	if(i%3==0)
  		if(i%2==0)
  			ret+="<div class='achievements-container odd-section'> <div class='container'>";
  		else
  			ret+="<div class='achievements-container even-section'> <div class='container'>";

    ret = ret+options.fn(context[i], { data: data });
 }

	if(context.length%3!=0)  ret+="</div></div>";
		console.log(ret);
  	return ret;

});


Handlebars.registerHelper('if1', function(index, options) {

	if(index%2==0)
		return options.fn(this);
	else
		return options.inverse(this);
});




/* Rendering required templates */

$.get('templates.html', function(templates) {
    let navbarSource = $(templates).filter('#navbar_template').html();
    let achSource = $(templates).filter("#ach_template").html();
    let contactSource = $(templates).filter("#contact_template1").html();
    let templateNav = Handlebars.compile(navbarSource);
    let templateAch = Handlebars.compile(achSource);
    let templateContact = Handlebars.compile(contactSource);
    let htmlAch = templateAch(achData);
    let htmlNav = templateNav(navData);
    let htmlContact = templateContact();
    html = htmlNav + htmlAch + htmlContact;
    $(".main-container").append(html);
});


});