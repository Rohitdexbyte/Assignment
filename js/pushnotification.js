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