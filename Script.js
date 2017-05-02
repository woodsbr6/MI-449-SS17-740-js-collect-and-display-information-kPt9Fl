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
  var AllInfo =
    '<h1> Hi, my name is <strong>' + firstName + '</strong> </h1>' +
    '<strong>' + lastName + '!</strong> <strong>' + discription + '!</strong>' +
    'If you\'re interested in a date, you can email me at <strong>' + email +
    '</strong> or give me a call at <strong>' + phone + '</strong>'
  previewParagraph.innerHTML = AllInfo
  var paragraph = document.getElementById('my-paragraph')
  paragraph.textContent = AllInfo
}

firstNameInput.addEventListener('input', updatepreview)
lastNameInput.addEventListener('input', updatepreview)
discriptionInput.addEventListener('input', updatepreview)
emailInput.addEventListener('input', updatepreview)
phoneInput.addEventListener('input', updatepreview)
