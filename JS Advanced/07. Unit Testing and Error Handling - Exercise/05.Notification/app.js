function notify(message) {
  let notification = document.getElementById('notification');
  notification.style.display = 'block';
  notification.textContent = message;

  notification.addEventListener('click', () => {
    notification.style.display = 'none';
  });
}