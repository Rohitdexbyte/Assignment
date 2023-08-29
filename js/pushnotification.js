$(document).ready(function(){
    $("#exampleRadios1").click(function(){
      $(".formcontent").hide();
    });
    $("#exampleRadios2").click(function(){
      $(".formcontent").show();
    });
  });


  function clearData() {
    document.getElementById('form').reset()
    document.getElementById('id').value = ""
}

$(document).ready(function(){
    $('.search').on('keyup',function(){
        var searchTerm = $(this).val().toLowerCase();
        $('.cat_button').each(function(){
            var lineStr = $(this).text().toLowerCase();
            if(lineStr.indexOf(searchTerm) === -1){
                $(this).hide();
            }else{
                $(this).show();
            }
        });
    });
});

function pushDataNotification(event) {
  event.preventDefault();
  var notification_text = document.getElementById("notificationText").value;
  var notTime = document.getElementById("inputTime").value;
  var notDate = document.getElementById("inputDate").value;
  var inputGroup = document.getElementById("inputGroupSelect").value;
  var sendI = document.getElementById("ST").value;
  


localStorage.setItem("Notifications", notification_text);
localStorage.setItem("notificationTime", notTime);
localStorage.setItem("notificationDate", notDate);
localStorage.setItem("notificationGroup", inputGroup);
localStorage.setItem("sendI", sendI);
 
 
 
  var storedData = `
  Notifications: ${localStorage.getItem("Notifications")}

  notificationTime: ${localStorage.getItem("notificationTime")}
  notificationDate: ${localStorage.getItem("notificationDate")}
  notificationGroup: ${localStorage.getItem("notificationGroup")}

 
 `;
 Swal.fire({
   
   html: storedData,
   
 });

 
 }

function pushNotification() {
    var dataArray = JSON.parse(localStorage.getItem('tagData'));
    if (dataArray && dataArray.length > 0) {
      var formattedData = dataArray.map((item, index) =>`
        <div class="cat_button m-3" >
          ${item}
          <i class="fa-sharp fa-solid fa-xmark  close_btn"  onclick="remove(${index})"></i>
        </div>
     `).join('');
  
      document.getElementById('add_tag').innerHTML = formattedData;
      applySelectionStyles();
    } else {
      document.getElementById('add_tag').textContent = " No record found";
      document.getElementById('add_tag').style.cssText = "color:red";
    }
  }  
  
if (localStorage.getItem('tagData') != null) {
    pushNotification();
  }

