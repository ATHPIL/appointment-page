$(document).ready(function(){
  var bookingDetails = {}; // Object to store booking details

  // Function to display receipt with booking details
  function displayReceipt() {
    // Check if booking details are available
    if (Object.keys(bookingDetails).length > 0) {
      // Create a message with the booking details
      var receiptMessage = "Booking Details:<br><br>";
      receiptMessage += "Full Name: " + bookingDetails.fullName + "<br>";
      receiptMessage += "Email: " + bookingDetails.email + "<br>";
      receiptMessage += "Phone: " + bookingDetails.phone + "<br>";
      receiptMessage += "Appointment Date: " + bookingDetails.appointmentDate + "<br>";
      receiptMessage += "Doctor: " + bookingDetails.doctor + "<br>";

      // Display the booking details in the receipt <div> element
      $('#receiptMessage').html(receiptMessage).show();
    } else {
      // If booking details are not available, display an error message
      $('#receiptMessage').html('<p class="text-danger">No booking details available.</p>').show();
    }
  }

  $('#appointmentForm').submit(function(event){
    event.preventDefault(); // Prevent default form submission behavior
    
    // Get form input values
    var fullName = $('#fullName').val().trim();
    var email = $('#email').val().trim();
    var phone = $('#phone').val().trim();
    var appointmentDate = $('#appointmentDate').val().trim();
    var doctor = $('#doctor option:selected').text().trim(); // Get the selected doctor's text

    // Check if any field is empty
    if (!fullName || !email || !phone || !appointmentDate || !doctor) {
      // Display error message for incomplete details
      $('#message').html('<p class="text-danger">Please fill out all fields correctly.</p>').show();
    } else {
      // Store booking details in the object
      bookingDetails.fullName = fullName;
      bookingDetails.email = email;
      bookingDetails.phone = phone;
      bookingDetails.appointmentDate = appointmentDate;
      bookingDetails.doctor = doctor;

      // Simulate successful booking
      $('#message').html('<p class="text-success">Appointment booked successfully!</p>').show();
      // Reset the form after successful booking
      $('#appointmentForm')[0].reset();
      // Show the Receipt button
      $('#receiptButton').show();
    }

    // Return false to prevent form submission and page reload
    return false;
  });

  // Handle click event of the Receipt button
  $('#receiptButton').click(displayReceipt);
});
