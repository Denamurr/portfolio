
document.getElementById('emailButton').addEventListener('click', function() {
  var email = 'denamurr@gmail.com';
  var subject = 'Subject of the email';
  var body = '';

  // Construct the mailto link
  var mailtoLink = 'mailto:' + email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);

  // Open the email client
  window.location.href = mailtoLink;
});



