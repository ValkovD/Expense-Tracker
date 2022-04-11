(function app() {
  const _descMisMsg = document.getElementById('desc-miss');
  const _amountMisMsg = document.getElementById('amount-miss');
  const _successAddedMsg = document.getElementById('added');
  const _removedMsg = document.getElementById('removed');
  const _lsClearedMsg = document.getElementById('ls-cleared');
  const _storageResetBtn = document.getElementById('storage-reset');
  window.addEventListener('DOMContentLoaded', startApp);
  LSCtrl._amount.addEventListener('keyup', LSCtrl.checforNumbers)

  UICtrl._addBtn.addEventListener('click', addCost);

  UICtrl._tableBody.addEventListener('click', removeCost);

  _storageResetBtn.addEventListener('click', backendClear)
  function startApp() {
    LSCtrl.pullDataFromLS();
    UICtrl.displayTable();
  };

  function addCost() {
    if (LSCtrl._description.value == '') {
      UICtrl.showAlert(_descMisMsg)

    }
    if (LSCtrl._amount.value == '') {
      UICtrl.showAlert(_amountMisMsg)
    }
    if (LSCtrl._description.value != '' && LSCtrl._amount.value != '') {
      LSCtrl.saveLs();
      UICtrl.displayTable();
      UICtrl.showAlert(_successAddedMsg)
    }
  };

  function removeCost(e) {
    LSCtrl.delLs(e);
    UICtrl.displayTable();
    if (e.target.className === 'delete') {
      UICtrl.showAlert(_removedMsg);
    }
  };

  function backendClear() {
    LSCtrl.storageClear()
    UICtrl.showAlert(_lsClearedMsg)
  };


})();





