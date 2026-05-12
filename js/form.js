const EmailJS_ServiceID = "service_7m52pm6";
const EmailJS_TemplateID = "template_gaa43ld";
const EmailJS_PublicKey = "bKfKuYOVABHSQCjU2";

emailjs.init({ publicKey: EmailJS_PublicKey });

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

  setErr('err-name',    name.value.trim().length < 2          ? '> NAME REQUIRED'         : '');
  setErr('err-email',   !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim()) ? '> VALID EMAIL REQUIRED' : '');
  setErr('err-subject', subject.value.trim().length < 3       ? '> SUBJECT REQUIRED'      : '');
  setErr('err-message', message.value.trim().length < 10      ? '> MESSAGE TOO SHORT'     : '');

  // stop if invalid
  if (!valid) return;
  
  const payload = {
    from_name:  name.value.trim(),
    from_email: email.value.trim(),
    subject:    subject.value.trim(),
    message:    message.value.trim(),
  };

  emailjs.send(EmailJS_ServiceID, EmailJS_TemplateID, payload)
    .then(() => {
      const successEl = document.getElementById('form-success');
      successEl.style.display = 'block';
      [name, email, subject, message].forEach(f => f.value = '');
      setTimeout(() => { successEl.style.display = 'none'; }, 4000);
    })
    .catch((err) => {
      console.error('EmailJS error:', err);
    });
}
