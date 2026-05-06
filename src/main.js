import './style.css';

const app = document.getElementById('app');
if (!app) {
    throw new Error('App root element not found');
}

app.innerHTML = `
  <div class="page-container">
    <button id="openFormBtn" class="open-btn">Open Registration Form</button>

    <div id="popupOverlay" class="popup-overlay">
      <div class="popup-card">
        <button id="closePopup" class="close-btn" aria-label="Close popup">×</button>
        <h1>Registration Form</h1>
        <div id="popupMessage" class="popup-message"></div>

        <form id="registrationForm" class="registration-form">
          <div class="form-field">
            <label for="name">Name</label>
            <input id="name" name="name" type="text" placeholder="Enter your full name" required>
          </div>
          <div class="form-field">
            <label for="email">Email</label>
            <input id="email" name="email" type="email" placeholder="Enter your email address" required>
          </div>
          <div class="form-field">
            <label for="password">Password</label>
            <input id="password" name="password" type="password" placeholder="Create a strong password" required>
          </div>
          <div class="form-field">
            <label for="confirmPassword">Confirm Password</label>
            <input id="confirmPassword" name="confirmPassword" type="password" placeholder="Re-enter your password" required>
          </div>
          <div class="form-field">
            <label for="address">Address</label>
            <input id="address" name="address" type="text" placeholder="Enter your full address" required>
          </div>
          <div class="form-field">
            <label for="phone">Phone Number</label>
            <input id="phone" name="phone" type="tel" placeholder="Enter your phone number" required>
          </div>

          <button type="submit" class="submit-btn">Register</button>
        </form>
      </div>
    </div>
  </div>
`;

const openFormBtn = document.getElementById('openFormBtn');
const popupOverlay = document.getElementById('popupOverlay');
const closePopup = document.getElementById('closePopup');
const registrationForm = document.getElementById('registrationForm');
const popupMessage = document.getElementById('popupMessage');

if (!openFormBtn || !popupOverlay || !closePopup || !registrationForm || !popupMessage) {
    throw new Error('Required popup elements not found');
}

const setPopupMessage = (text, type = 'success') => {
    popupMessage.textContent = text;
    popupMessage.className = `popup-message ${type}`;
};

const getInputValue = (id) => {
    const input = document.getElementById(id);
    return input ? input.value.trim() : '';
};

const showPopup = () => {
    setPopupMessage('', '');
    popupOverlay.classList.add('show');
};

const hidePopup = () => {
    popupOverlay.classList.remove('show');
};

openFormBtn.addEventListener('click', showPopup);
closePopup.addEventListener('click', hidePopup);
popupOverlay.addEventListener('click', (event) => {
    if (event.target === popupOverlay) {
        hidePopup();
    }
});

registrationForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const password = getInputValue('password');
    const confirmPassword = getInputValue('confirmPassword');

    if (password !== confirmPassword) {
        setPopupMessage('Passwords do not match!', 'error');
        return;
    }

    setPopupMessage('Registration successful!', 'success');
    alert('Registration successful!');

    setTimeout(() => {
        hidePopup();
        registrationForm.reset();
    }, 1000);
});
