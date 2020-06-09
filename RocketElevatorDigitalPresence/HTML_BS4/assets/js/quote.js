// Exemple made by Mathieu Lortie to start our Submission Form
// drop down menu inside submit.html to choose Residential, Commercial, Corporate or Hybrid Form
// Shared by Thomas Simoneau (3rd June 2020) @slack @genesis

$(document).ready(function () {
    $('.building_type').hide();
    
    $('#selectMe').change(function () {
        $('.building_type').hide();
        $('#'+$(this).val()).show();
    })
});
