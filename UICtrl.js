const UICtrl = (function () {
  // declare private variables and functions
  const _addBtn = document.getElementById('add');
  let _tableBody = document.querySelector('tbody');
  let _tableFooter = document.querySelector('tfoot');
  //Display cost line >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  function displayTable() {
    let _costTotal = 0;
    let _tableRow = '';
    let _dataFromLs = [];
    _dataFromLs = JSON.parse(localStorage.getItem('data'));
    if (_dataFromLs) {
      _dataFromLs.forEach(function (cost) {
        _tableRow += `
        <tr>
          <td>${_dataFromLs.indexOf(cost) + 1}</td>
          <td>${cost.date}</td>
          <td>${cost.description}</td>
          <td>${Number(cost.amount).toFixed(2)} £</td>
          <td><a href="#"><img class="delete" id="${_dataFromLs.indexOf(cost)}" src="/icons/icons8-delete-trash-24.png"></a></td>
        </tr>
      `;
        //footer
        // _costTotal += Math.abs(parseInt(cost.amount));
        _costTotal += Number(cost.amount);
      })
      _tableFooter.innerHTML = `
    <td></td>
    <td></td>
    <td style="font-weight: bold;">Total :</td>
    <td style="font-weight: bold;">${_costTotal.toFixed(2)} £</td>
    <td></td>
    `;
      _tableBody.innerHTML = _tableRow;


    }
  };
  //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  // Delete cost line
  function showAlert(msg) {
    msg.style.display = 'block'
    setTimeout(function () { msg.style.display = 'none' }, 2000)
  };
  //expose what i want only
  return {
    showAlert: showAlert,
    displayTable: displayTable,
    _addBtn: _addBtn,
    _tableBody: _tableBody

  }
})();






