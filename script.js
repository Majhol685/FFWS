document.addEventListener('DOMContentLoaded', function() {
    // Language switcher functionality
    const arBtn = document.getElementById('ar-btn');
    const enBtn = document.getElementById('en-btn');
    const arElements = document.querySelectorAll('.lang-ar');
    const enElements = document.querySelectorAll('.lang-en');
    
    arBtn.addEventListener('click', function() {
        arBtn.classList.add('active');
        enBtn.classList.remove('active');
        
        arElements.forEach(el => el.classList.remove('hidden'));
        enElements.forEach(el => el.classList.add('hidden'));
        
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.setAttribute('lang', 'ar');
    });
    
    enBtn.addEventListener('click', function() {
        enBtn.classList.add('active');
        arBtn.classList.remove('active');
        
        enElements.forEach(el => el.classList.remove('hidden'));
        arElements.forEach(el => el.classList.add('hidden'));
        
        document.documentElement.setAttribute('dir', 'ltr');
        document.documentElement.setAttribute('lang', 'en');
    });
    
    // Theme switcher functionality
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const moonIcon = themeToggle.querySelector('.fa-moon');
    const sunIcon = themeToggle.querySelector('.fa-sun');
    
    // Check for saved theme preference or use preferred color scheme
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'light' || (!savedTheme && !prefersDark)) {
        body.classList.add('light-theme');
        moonIcon.classList.add('hidden');
        sunIcon.classList.remove('hidden');
    }
    
    themeToggle.addEventListener('click', function() {
        body.classList.toggle('light-theme');
        
        if (body.classList.contains('light-theme')) {
            moonIcon.classList.add('hidden');
            sunIcon.classList.remove('hidden');
            localStorage.setItem('theme', 'light');
        } else {
            sunIcon.classList.add('hidden');
            moonIcon.classList.remove('hidden');
            localStorage.setItem('theme', 'dark');
        }
    });
    
    // Modal functionality
    const registerBtn = document.getElementById('register-btn');
    const registrationModal = document.getElementById('registration-modal');
    const successModal = document.getElementById('success-modal');
    const closeBtns = document.querySelectorAll('.close-btn, .ok-btn');
    
    registerBtn.addEventListener('click', function() {
        registrationModal.style.display = 'block';
    });
    
    closeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            registrationModal.style.display = 'none';
            successModal.style.display = 'none';
        });
    });
    
    window.addEventListener('click', function(event) {
        if (event.target === registrationModal) {
            registrationModal.style.display = 'none';
        }
        if (event.target === successModal) {
            successModal.style.display = 'none';
        }
    });
    
    // Form submission
    const registrationForm = document.getElementById('registration-form');
    
    registrationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const squadName = document.getElementById('squad-name').value;
        const leaderId = document.getElementById('leader-id').value;
        const player1Name = document.getElementById('player1-name').value;
        const player1Id = document.getElementById('player1-id').value;
        const player2Name = document.getElementById('player2-name').value;
        const player2Id = document.getElementById('player2-id').value;
        const player3Name = document.getElementById('player3-name').value;
        const player3Id = document.getElementById('player3-id').value;
        const player4Name = document.getElementById('player4-name').value;
        const player4Id = document.getElementById('player4-id').value;
        const countryCode = document.getElementById('country-code').value;
        const whatsappNumber = document.getElementById('whatsapp').value;
        
        // Validate WhatsApp number
        if (!validatePhoneNumber(whatsappNumber)) {
            alert(document.documentElement.lang === 'ar' ? 
                  'يرجى إدخال رقم واتساب صحيح' : 
                  'Please enter a valid WhatsApp number');
            return;
        }
        
        const whatsapp = countryCode + whatsappNumber;
        
        // Prepare Discord message
        const discordMessage = `📥 تسجيل جديد في البطولة:
📛 اسم السكواد: ${squadName}
🧑‍✈️ ID القائد: ${leaderId}
👥 اللاعب 1: ${player1Name} - ID: ${player1Id}
👥 اللاعب 2: ${player2Name} - ID: ${player2Id}
👥 اللاعب 3: ${player3Name} - ID: ${player3Id}
👥 اللاعب 4: ${player4Name} - ID: ${player4Id}
📱 رقم واتساب القائد: ${whatsapp}`;
        
        // Send data to Discord bot
        sendToDiscordBot(discordMessage);
        
        // Show success message
        registrationModal.style.display = 'none';
        successModal.style.display = 'block';
        
        // Reset form
        registrationForm.reset();
    });
    
    // Function to validate phone number
    function validatePhoneNumber(phone) {
        // Basic validation - at least 8 digits and only numbers
        const regex = /^\d{8,15}$/;
        return regex.test(phone);
    }
    
    // Function to send data to Discord bot
    function sendToDiscordBot(message) {
        const webhookURL = 'https://discordapp.com/api/webhooks/1397121011542921280/0emrdvcekCRofteODCbg47TsnDCznx5gD6qP4lvGyTW1rNm_5rzDj2q8z7lZSPuCUROO';
        
        fetch(webhookURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                content: message
            }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Success:', data);
        })
        .catch(error => {
            console.error('Error:', error);
            // Show error message to user
            alert(document.documentElement.lang === 'ar' ? 
                  'حدث خطأ أثناء إرسال التسجيل، يرجى المحاولة مرة أخرى' : 
                  'An error occurred while submitting, please try again');
        });
    }
    
    // Auto-select Algeria country code by default
    document.getElementById('country-code').value = '+213';
});