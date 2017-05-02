var FirstNameInput = document.getElementById('FirstName')
var LastNameInput = document.getElementById('LastName')
var discriptionInput = document.getElementById('discription')
var emailInput = document.getElementById('email')
var phoneInput = document.getElementById('phone')
var previewParagraph = document.getElementById('preview')
var updatepreview = function () {
  var FirstName = FirstNameInput.value
  var LastName = LastNameInput.value
  var discription = discriptionInput.value
  var email = emailInput.value
  var phone = phoneInput.value
  var AllInfo = "<h1> Hi, my name is <strong>" + FirstName +'</strong> </h1> <strong>'+ LastName +'!</strong> <strong>' + discription + "!</strong> If you're interested in a date, you can email me at <strong>" + email +'</strong> or give me a call at <strong>' + phone + '</strong>'
  previewParagraph.innerHTML = AllInfo
  var paragraph = document.getElementById('my-paragraph')
  paragraph.textContent = AllInfo
}

FirstNameInput.addEventListener('input', updatepreview)
LastNameInput.addEventListener('input', updatepreview)
discriptionInput.addEventListener('input', updatepreview)
emailInput.addEventListener('input', updatepreview)
phoneInput.addEventListener('input', updatepreview)
