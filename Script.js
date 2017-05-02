var firstNameInput = document.getElementById('firstName')
var lastNameInput = document.getElementById('lastName')
var discriptionInput = document.getElementById('discription')
var emailInput = document.getElementById('email')
var phoneInput = document.getElementById('phone')
var previewParagraph = document.getElementById('preview')

var updatepreview = function () {
  var firstName = firstNameInput.value
  var lastName = lastNameInput.value
  var discription = discriptionInput.value
  var email = emailInput.value
  var phone = phoneInput.value
  var allInfo =
    '<h1> Hi, my name is <strong>' + firstName + lastName + '!</strong> </h1>' +
    '<strong>' + discription + '</strong>' +
    'If you\'re interested in a date, you can email me at <a href="mailto:' + email + '"> <strong>' + email +
    '</strong></a> or give me a call at <a href="tel:' + phone + '"> <strong>' + phone +
    '</strong></a>'
  previewParagraph.innerHTML = allInfo
  var paragraph = document.getElementById('my-paragraph')
  paragraph.textContent = allInfo
}

firstNameInput.addEventListener('input', updatepreview)
lastNameInput.addEventListener('input', updatepreview)
discriptionInput.addEventListener('input', updatepreview)
emailInput.addEventListener('input', updatepreview)
phoneInput.addEventListener('input', updatepreview)
