
document.getElementById("hero").style.paddingTop = `${navbar.offsetHeight}px`;

$('#page-navbar').bind('click', 'ul li a', function(event) {
    event.preventDefault();
    var location = $(event.target.hash).offset().top;
    $('html, body').animate({
        scrollTop: location
    }, 500);
});

function visitLink(link) {
    console.log("Visiting " + link);
    location.href=link;
}
// updateNavbar();

