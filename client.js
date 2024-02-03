document.addEventListener('DOMContentLoaded', () => {
  const socket = io();

  const form = document.getElementById('form');
  const input = document.getElementById('input');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (input.value) {
      socket.emit('chat message', input.value);
      input.value = '';
    }
  });

  socket.on('chat message', (msg) => {
    const item = document.createElement('li');
    item.textContent = msg;
    document.getElementById('messages').appendChild(item);
  });
});

document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const input = document.getElementById('input');
  const usernameInput = document.getElementById('username');
  if (input.value && usernameInput.value) {
    socket.emit('chat message', { username: usernameInput.value, message: input.value });
    input.value = '';
  }
});
