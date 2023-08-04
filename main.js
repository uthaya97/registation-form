// name check
function validateForm() {
  var entername = document.forms["registration"]["fname"].value;
  var entermail = document.forms["registration"]["email"].value;
  var enterpassword = document.forms["registration"]["password"].value;
  var enterphone = document.forms["registration"]["phoneNumber"].value;
  var entergender = document.forms["registration"]["gender"].value;
  var enterdate = document.forms["registration"]["phonNumber"].value;

  // name alert
  if (entername == "") {
      document.getElementById('fn-span').style.display = 'block';
      return false;
  } else {
      document.getElementById('fn-span').style.display = 'none';
  }


  // mailcheck

  if (entermail == "") {
      document.getElementById('fn-email').style.display = 'block';
      return false;
  } else {
      document.getElementById('fn-email').style.display = 'none';
  }

  //  password check

  if (enterpassword == "") {
      document.getElementById('fn-password').style.display = 'block';
      return false;
  } else {
      document.getElementById('fn-password').style.display = 'none';
  }

  if (enterpassword.length < 8) {
      document.getElementById('pass').style.display = 'block';
      return false;
  } else {
      document.getElementById('pass').style.display = 'none';
  }




  //  phone number check

  if ((enterphone.length == "") || (isNaN(enterphone))) {
      document.getElementById("num").style.display = 'block';
      return false;

  } else {
      document.getElementById("num").style.display = 'none';
  }

  if (enterphone.length < 10) {
      document.getElementById('fn-num').style.display = 'block';
      return false;
  } else {
      document.getElementById('fn-num').style.display = 'none';
  }


  // gender

  if (entergender == "") {
      document.getElementById('choose').style.display = 'block';
      return false;
  } else {
      document.getElementById('choose').style.display = 'none';
  }


  //  date

  if (enterdate == "") {
      document.getElementById('fn-date').style.display = 'block';
      return false;
  } else {
      document.getElementById('fn-date').style.display = 'none';
  }




}