
 // code fragment
// the form id is myForm
$('#myForm').on('submit', function(event) {
    event.preventDefault(); // prevent reload
    
    var formData = new FormData(this);
    formData.append('service_id', 'service_pf9fryg');
    formData.append('template_id', 'template_emrdcxa');
    formData.append('user_id', '8m0G0Hqn8M2U5jWD_');
 
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