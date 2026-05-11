function submitForm() {
  const name    = document.getElementById('cf-name');
  const email   = document.getElementById('cf-email');
  const subject = document.getElementById('cf-subject');
  const message = document.getElementById('cf-message');
  let valid = true;

  function setErr(id, msg) {
    document.getElementById(id).textContent = msg;
    if (msg) valid = false;
  }

  setErr('err-name',    name.value.trim().length < 2 ? '> NAME REQUIRED' : '');

  const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  setErr('err-email',   !emailRx.test(email.value.trim()) ? '> VALID EMAIL REQUIRED' : '');

  setErr('err-subject', subject.value.trim().length < 3 ? '> SUBJECT REQUIRED' : '');
  setErr('err-message', message.value.trim().length < 10 ? '> MESSAGE TOO SHORT' : '');

  if (valid) {
    const successEl = document.getElementById('form-success');
    successEl.style.display = 'block';
    [name, email, subject, message].forEach(f => f.value = '');
    setTimeout(() => { successEl.style.display = 'none'; }, 4000);
  }
}