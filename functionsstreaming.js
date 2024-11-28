// Handle Language Switcher
const languageSwitcher = document.querySelector('.language-switcher');
const currentLanguage = languageSwitcher?.querySelector('span');
const languageLinks = languageSwitcher?.querySelectorAll('.dropdown a');

if (languageSwitcher && currentLanguage && languageLinks.length) {
    // Toggle dropdown visibility on click
    languageSwitcher.addEventListener('click', (e) => {
        e.stopPropagation();
        languageSwitcher.classList.toggle('open');
    });

    // Update selected language and close dropdown
    languageLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const selectedLanguage = link.dataset.lang;
            currentLanguage.textContent = selectedLanguage.toUpperCase();

            // Save to localStorage
            localStorage.setItem('selectedLanguage', selectedLanguage);

            // Close dropdown
            languageSwitcher.classList.remove('open');

            console.log(`Language switched to: ${selectedLanguage}`);
        });
    });
}

// Handle Timezone Dropdown
const timezoneDropdown = document.querySelector('.timezone-dropdown');
const timezoneLinks = timezoneDropdown?.querySelectorAll('.dropdown-menu a');
const dropdownButton = timezoneDropdown?.querySelector('.dropdown-button');

if (timezoneDropdown && dropdownButton && timezoneLinks.length) {
    // Toggle dropdown visibility on button click
    dropdownButton.addEventListener('click', (e) => {
        e.stopPropagation();
        timezoneDropdown.classList.toggle('open');
    });

    // Update button text and log selected timezone
    timezoneLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const selectedTimezone = link.dataset.tz;
            dropdownButton.textContent = link.textContent;

            // Save to localStorage
            localStorage.setItem('selectedTimezone', selectedTimezone);

            // Close dropdown
            timezoneDropdown.classList.remove('open');

            console.log(`Timezone selected: ${selectedTimezone}`);
        });
    });
}

// Close dropdowns on outside click
document.addEventListener('click', () => {
    if (languageSwitcher) languageSwitcher.classList.remove('open');
    if (timezoneDropdown) timezoneDropdown.classList.remove('open');
});

// Load saved settings on page load
document.addEventListener('DOMContentLoaded', () => {
    // Load saved language
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage && currentLanguage) {
        currentLanguage.textContent = savedLanguage.toUpperCase();
    }

    // Load saved timezone
    const savedTimezone = localStorage.getItem('selectedTimezone');
    if (savedTimezone && timezoneLinks.length) {
        const matchingLink = Array.from(timezoneLinks).find(
            link => link.dataset.tz === savedTimezone
        );
        if (matchingLink && dropdownButton) {
            dropdownButton.textContent = matchingLink.textContent;
        }
    }

    // Add current date dynamically
    const currentDateElement = document.createElement('h2');
    const formattedDate = new Date().toLocaleDateString(undefined, {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
    currentDateElement.textContent = formattedDate;
    document.body.insertBefore(currentDateElement, document.querySelector('main'));

    // Team Stats Interaction
    const statRows = document.querySelectorAll('.team-stats tbody tr');
    statRows.forEach(row => {
        row.addEventListener('mouseover', () => {
            row.style.backgroundColor = '#f9f9f9';
        });
        row.addEventListener('mouseout', () => {
            row.style.backgroundColor = '';
        });
    });
});
