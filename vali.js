
 // code fragment
// the form id is myForm
$('#myForm').on('submit', function(event) {
    event.preventDefault(); // prevent reload
    
    var formData = new FormData(this);
    formData.append('service_id', 'service_xqhflf5');
    formData.append('template_id', 'template_9394pbk');
    formData.append('user_id', 'A2TS5ySuEHmMbnLAd');
 
    $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
        type: 'POST',
        data: formData,
        contentType: false, // auto-detection
        processData: false // no need to parse formData to string
    }).done(function() {
    }).fail(function(error) {
       
    });
});
// code fragment