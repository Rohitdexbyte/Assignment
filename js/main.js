function formEvent(event) {
  event.preventDefault();
  var evTitle = document.getElementById("eventitle").value;
  var inputStartDate = document.getElementById("starting_date").value;
  var inputEndDate = document.getElementById("end_date").value;
  var inputStartTime = document.getElementById("start_time").value;
  var inputEndTime = document.getElementById("end_time").value;
  var inputUrl = document.getElementById("url").value;
  var inputInfo = document.getElementById("gen_info").value;

  localStorage.setItem("Input Event", evTitle);
  localStorage.setItem("State Event", inputStartDate);
  localStorage.setItem("End date", inputEndDate);
  localStorage.setItem("State timing", inputStartTime);
  localStorage.setItem("End timing", inputEndTime);
  localStorage.setItem("URL", inputUrl);
  localStorage.setItem("Information", inputInfo);

  // Display the stored data in an alert
  var storedData = `
 Input Event: ${localStorage.getItem("Input Event")}
  State Event: ${localStorage.getItem("State Event")}
  End Event: ${localStorage.getItem("End Event")}
 State timing: ${localStorage.getItem("State timing")}
  End timing: ${localStorage.getItem("End timing")}
  URL: ${localStorage.getItem("URL")}
  Information: ${localStorage.getItem("Information")}
  `;


  Swal.fire({
    html:storedData,
    timer:10000,
  })
  .then(() => {

    window.location.href = "categories.html";
});
}



CKEDITOR.replace('general_info');
