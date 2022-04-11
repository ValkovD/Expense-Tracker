const LSCtrl = (function () {
  const _description = document.getElementById('description');
  const _amount = document.getElementById('amount');
  let _date = new Date();
  let _num = 1;
  let data = [];
  //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  function checforNumbers() {
    if (!parseInt(_amount.value)) {
      _amount.value = '';
    }
  }
  //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  function pullDataFromLS() {
    if (localStorage.getItem('data') === null) {
      localStorage.clear()
    } else {
      data = JSON.parse(localStorage.getItem('data'));
    }
  };
  //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  function saveLs() {
    let costLine = {
      number: _num++, date: _date.toDateString(), description: _description.value, amount: _amount.value
    }

    data.push(costLine)
    _amount.value = '';
    _description.value = '';
    localStorage.setItem('data', JSON.stringify(data));
    // console.log(data)
  };
  //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  function delLs(e) {
    e.target.className === 'delete' ? data.splice(e.target.id, 1) : {}
    localStorage.setItem('data', JSON.stringify(data));

  }
  //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  function storageClear(e) {
    localStorage.clear();

  }
  //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  return {
    checforNumbers: checforNumbers,
    saveLs: saveLs,
    delLs: delLs,
    pullDataFromLS: pullDataFromLS,
    storageClear: storageClear,
    // data: data
    _description: _description,
    _amount: _amount
  }
})();

