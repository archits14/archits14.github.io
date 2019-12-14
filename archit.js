
new WOW().init();
    $(function(){
        $('[data-toggle="popover"]').popover()
    });

    // https://script.google.com/macros/s/AKfycbzdf8AG4utXnyrIZRURWeDxV26Jk7mPdGZTI61cnAIYc0tJm0Hd/exec

    function submitForm() {
      // Get the first form with the name
      // Usually the form name is not repeated
      // but duplicate names are possible in HTML
      // Therefore to work around the issue, enforce the correct index
      var frm = document.getElementsByName('contact-form')[0];
      frm.submit(); // Submit the form
      frm.reset();  // Reset all form data
      return false; // Prevent page refresh
   }