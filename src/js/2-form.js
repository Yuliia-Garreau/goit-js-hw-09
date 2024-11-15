// Оголоси поза будь - якими функціями об’єкт formData з полями
// email та message, які спочатку мають порожні рядки як
// значення: { email: "", message: "" }.

let formData = { email: '', message: '' };

// Використовуй метод делегування для відстеження змін у
// формі через подію input.Зберігай актуальні дані з полів
//  email та message у formData та записуй цей об’єкт у
//  локальне сховище.Використовуй ключ "feedback-form-state"
//  для зберігання даних у сховищі.
const key = 'feedback-form-state';
document
  .querySelector('.feedback-form')
  .addEventListener('input', function (event) {
    if (
      event.target.tagName === 'INPUT' ||
      event.target.tagName === 'TEXTAREA'
    ) {
      formData[event.target.name] = event.target.value;
      localStorage.setItem(key, JSON.stringify(formData));
    }
    console.log(formData);
  });

// При завантаженні сторінки перевір, чи є дані у локальному
// сховищі.Якщо так, використовуй їх для заповнення форми та
// об'єкта formData. Якщо ні, залиш поля форми порожніми.
let savedFormData = JSON.parse(localStorage.getItem(key));
if (savedFormData) {
  formData = savedFormData;
  document.querySelector('input[name="email"]').value = formData.email;
  document.querySelector('textarea[name="message"]').value = formData.message;
}

// Перед відправленням форми переконайся, що обидва поля
// форми заповнені.Якщо будь - яке з полів(властивостей
// об’єкта formData) порожнє, показуй сповіщення з
// текстом «Fill please all fields». Якщо всі поля заповнені,
// виведи у консоль об’єкт formData з актуальними значеннями,
// очисти локальне сховище, об’єкт formData і поля форми.
document
  .querySelector('.feedback-form')
  .addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  if (formData.email.trim() === '' || formData.message.trim() === '') {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    localStorage.removeItem(key);
    formData = { email: '', message: '' };
    document.querySelector('input[name="email"]').value = '';
    document.querySelector('textarea[name="message"]').value = '';
  }
}
