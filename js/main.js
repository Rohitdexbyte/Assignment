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
 
  
  const warningDiv=document.getElementById("error");
  const warningDiv1=document.getElementById("error1");
  const warningDiv2=document.getElementById("error2");
  const warningDiv3=document.getElementById("error3");
  const warningDiv4=document.getElementById("error4");
  const warningDiv6=document.getElementById("error6");

  if (evTitle==="" || inputStartDate===''|| inputEndDate ===''||inputStartTime===''|| inputEndTime==='' || inputInfo==='') {
    warningDiv.textContent = "Title can not be empty , please try again ";
    warningDiv1.textContent = "Please Select Start Date";
    warningDiv2.textContent = "Please Select End Date ";
    warningDiv3.textContent = "Select Start Time";
    warningDiv4.textContent = "Select End Time";
    warningDiv6.textContent = "Enter the Genral Information ";
    return;
  }else{
    warningDiv.textContent = "";
    warningDiv1.textContent = "";
    warningDiv2.textContent = "";
    warningDiv3.textContent = "";
    warningDiv4.textContent = "";
    warningDiv6.textContent = "";
  }

// if (inputStartDate==='') {
//     warningDiv1.textContent = "Please Select Start Date";
//     return;
// }
//  if (inputEndDate ==='') {
//     warningDiv2.textContent = "Please Select End Date ";
//     return;
// }
// if (inputStartTime==='') {
//     warningDiv3.textContent = "Select Start Time";
//     return;
// }
// if (inputEndTime==='') {
//     warningDiv4.textContent = "Select End Time";
//     return
// }

// if (inputInfo==='') {
//     warningDiv6.textContent = "Enter the Genral Information ";
//     return
// }

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
