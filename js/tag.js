
function save() {
    var new_tagData = document.getElementById('Input').value;
  
    if (localStorage.getItem('tagData') == null) {
      localStorage.setItem('tagData', '[]');
    }
    var old_tagData = JSON.parse(localStorage.getItem('tagData'));
    old_tagData.push(new_tagData);
  
    localStorage.setItem('tagData', JSON.stringify(old_tagData));
    call();
    document.getElementById('form').reset()
  }

  
  function call() {
    var tagDataArray = JSON.parse(localStorage.getItem('tagData'));
    var formattedtagData = tagDataArray.map((item, index) => `
    
      <div class="cat_button " data-index="${index}" value="${item}" onclick="toggleSelection(this)">
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
  
    document.getElementById('add_cat').innerHTML = formattedtagData;
  }
  if (localStorage.getItem('tagData') != null) {
    call();
  }
  
  
  function remove(index) {
    var tagDataArray = JSON.parse(localStorage.getItem('tagData'));
  
    // Check if the index is valid
    if (index >= 0 && index < tagDataArray.length) {
      tagDataArray.splice(index, 1); // Remove the item at the specified index
      localStorage.setItem('tagData', JSON.stringify(tagDataArray)); // Update local storage
      call(); // Update the displayed tagData
      
    }
  }
  
  function edit(index) {
    var tagDataArray = JSON.parse(localStorage.getItem('tagData'));
    var editedValue = document.getElementById(`editInput-${index}`).value;
  
    if (tagDataArray && tagDataArray.length > index) {
      tagDataArray[index] = editedValue;
      localStorage.setItem('tagData', JSON.stringify(tagDataArray));
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
  
  if (localStorage.getItem('tagData') != null) {
    call();
  }
  
  
  
  function savetagData() {
    var selectedDivs = document.querySelectorAll('.selected');
    var selectedtagData = [];
    
    selectedDivs.forEach(function (div) {
      selectedtagData.push(div.getAttribute('value'));
    });
  
    if (selectedtagData.length > 0) {
      localStorage.setItem('SavedtagData', JSON.stringify(selectedtagData));
      var joinedtagData = selectedtagData.join(' , '); // Join the array elements
      Swal.fire("tagData saved: " + joinedtagData).then(function() {
        // Redirect to another page after the alert is closed
        window.location.href = 'tabl.html'; // Change this to the desired URL
      });
    } else {
      localStorage.removeItem('SavedtagData');
      Swal.fire("No items are selected.");
    }
  }