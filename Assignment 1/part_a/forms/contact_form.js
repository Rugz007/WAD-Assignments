$(document).ready(function () {
  $("#submit").click(function () {
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();
    var subject = $("#subject").val();
    $("#returnmessage").empty(); // To empty previous error/success message.
    // Checking for blank fields.
    if (name == "" || email == "" || contact == "") {
      alert("Please Fill Required Fields");
    } else {
      // Returns successful data submission message when the entered information is stored in database.
      console.log("data sending");
      alert("Message has been sent");
      $.post(
        "contact_form.php",
        {
          name1: name,
          email1: email,
          message1: message,
          subject1: subject,
        },
        function (data) {
          $("#returnmessage").append(data); // Append returned message to message paragraph.
          if (
            data == "Your Query has been received, We will contact you soon."
          ) {
            $("#form")[0].reset();
             // To reset form fields on success.
             console.log(data);
          }
        }
      );
      console.log("data send");
    }
  });
});
