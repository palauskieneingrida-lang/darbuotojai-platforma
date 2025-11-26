// Pridėkite šį kodą, kad išsaugotumėte profilius
function saveProfiles() {
    localStorage.setItem('workerProfiles', JSON.stringify(profiles));
}

// Ir šį, kad užkrautumėte išsaugotus profilius
function loadProfiles() {
    const saved = localStorage.getItem('workerProfiles');
    if (saved) {
        profiles = JSON.parse(saved);
        displayProfiles(profiles);
    }
}