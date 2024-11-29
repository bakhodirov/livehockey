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

// Handle Season Dropdown
const SeasonDropdown = document.querySelector('.season-dropdown');
const SeasonLinks = SeasonDropdown?.querySelectorAll('.dropdown-menu a');
const dropdownButton = SeasonDropdown?.querySelector('.dropdown-button');

if (SeasonDropdown && dropdownButton && SeasonLinks.length) {
    // Toggle dropdown visibility on button click
    dropdownButton.addEventListener('click', (e) => {
        e.stopPropagation();
        SeasonDropdown.classList.toggle('open');
    });

    // Update button text and log selected Season
    SeasonLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const selectedSeason = link.dataset.tz;
            dropdownButton.textContent = link.textContent;

            // Save to localStorage
            localStorage.setItem('selectedSeason', selectedSeason);

            // Close dropdown
            SeasonDropdown.classList.remove('open');

            console.log(`Season selected: ${selectedSeason}`);
        });
    });
}

// Close dropdowns on outside click
document.addEventListener('click', () => {
    if (languageSwitcher) languageSwitcher.classList.remove('open');
    if (SeasonDropdown) SeasonDropdown.classList.remove('open');
});

// Load saved settings on page load
document.addEventListener('DOMContentLoaded', () => {
    // Load saved language
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage && currentLanguage) {
        currentLanguage.textContent = savedLanguage.toUpperCase();
    }

    // Load saved Season
    const savedSeason = localStorage.getItem('selectedSeason');
    if (savedSeason && SeasonLinks.length) {
        const matchingLink = Array.from(SeasonLinks).find(
            link => link.dataset.tz === savedSeason
        );
        if (matchingLink && dropdownButton) {
            dropdownButton.textContent = matchingLink.textContent;
        }
    }

    // Add current date below games-buttons-row
    const currentDateElement = document.getElementById('current-date');
    if (currentDateElement) {
        const currentDate = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = currentDate.toLocaleDateString(undefined, options);

        currentDateElement.textContent = formattedDate;
    }
});
