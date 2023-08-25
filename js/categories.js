
function save() {
  var new_data = document.getElementById('Input').value;

  if (localStorage.getItem('data') == null) {
    localStorage.setItem('data', '[]');
  }
  var old_data = JSON.parse(localStorage.getItem('data'));
  old_data.push(new_data);

  localStorage.setItem('data', JSON.stringify(old_data));
  call();
  document.getElementById('form').reset()
}

// function save(){
//   if(localStorage.getItem('data')!=null){
//     document.getElementById('add_cat').innerHTML = JSON.parse(localStorage.getItem('data'));
//   }
// }


function call() {
  var dataArray = JSON.parse(localStorage.getItem('data'));
  var formattedData = dataArray.map((item, index) => `
  
    <div  class="cat_button " data-index="${index}" value="${item}" onclick="toggleSelection(this)">
    ${item}
    <i class="fa-sharp fa-solid fa-xmark  close_btn"  onclick="remove(${index})"></i>
    <img src="images/editImage.png" class="btn_checked" data-toggle="modal" data-target="#modal-${index}" onclick="openEditModal(${index})">
 
    </div>

    <div class="modal fade" id="modal-${index}" data-backdrop="false" >
    <div class="modal-dialog" style =" z-index: 1040 !important;">
      <div class="modal-content" style = "margin: 2px auto;
      z-index: 1100 !important;">
  
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">Edit Category</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
  
        <!-- Modal Body -->
        <div class="modal-body">
          <input type="text"  id="editInput-${index}" value="${item}" class="form-control" placeholder="Enter data" required>
        </div>
  
        <!-- Modal Footer -->
        <div class="modal-footer">
          <button type="button" class="btn btn-success" data-dismiss="modal" onclick="edit(${index})">Update</button>
          <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
        </div>
  
      </div>
    </div>
  </div> 
 
    `).join('');

  document.getElementById('add_cat').innerHTML = formattedData;
}
if (localStorage.getItem('data') != null) {
  call();
}


function remove(index) {
  var dataArray = JSON.parse(localStorage.getItem('data'));

  // Check if the index is valid
  if (index >= 0 && index < dataArray.length) {
    dataArray.splice(index, 1); // Remove the item at the specified index
    localStorage.setItem('data', JSON.stringify(dataArray)); // Update local storage
    call(); // Update the displayed data
    
  }
}

function edit(index) {
  var dataArray = JSON.parse(localStorage.getItem('data'));
  var editedValue = document.getElementById(`editInput-${index}`).value;

  if (dataArray && dataArray.length > index) {
    dataArray[index] = editedValue;
    localStorage.setItem('data', JSON.stringify(dataArray));
    call();
  }
}



function toggleSelection(div) {
  div.classList.toggle('selected');
  applySelectionStyles();
}

function toggleSelection(div) {
  div.classList.toggle('selected');
  applySelectionStyles();
}

function applySelectionStyles() {
  var selectedDivs = document.querySelectorAll('.selected');
  var allDivs = document.querySelectorAll('.cat_buttom');

  allDivs.forEach(function (div) {
    div.classList.remove('selected');
  });

  selectedDivs.forEach(function (div) {
    div.classList.add('selected');
  });
}

if (localStorage.getItem('data') != null) {
  call();
}



function saveData() {
  var selectedDivs = document.querySelectorAll('.selected');
  var selectedData = [];
  
  selectedDivs.forEach(function (div) {
    selectedData.push(div.getAttribute('value'));
  });

  if (selectedData.length > 0) {
    localStorage.setItem('SavedData', JSON.stringify(selectedData));
    var joinedData = selectedData.join(' , '); // Join the array elements
    Swal.fire("Data saved: " + joinedData).then(function() {
      // Redirect to another page after the alert is closed
      window.location.href = 'tag.html'; // Change this to the desired URL
    });
  } else {
    localStorage.removeItem('SavedData');
    Swal.fire("No items are selected.");
  }
}