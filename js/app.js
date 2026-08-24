let slides = { leaderboard: [], comparison: [] };
let currentType = 'leaderboard';
let currentIndex = 0;

// Load both JSON files
async function loadData() {
    const lb = await fetch('data/leaderboard.json').then(r => r.json());
    const comp = await fetch('data/comparison.json').then(r => r.json());
    slides.leaderboard = lb;
    slides.comparison = comp;
    showSlide();
}

function showSlide() {
    const data = slides[currentType];
    const item = data[currentIndex] || {};
    document.getElementById('slide-title').textContent = item.title || item.name || 'Slide';
    // Customize this render based on your data structure!
    document.getElementById('slide-content').innerHTML = JSON.stringify(item);
}

function nextSlide() {
    if (currentIndex < slides[currentType].length - 1) currentIndex++;
    showSlide();
}
function prevSlide() {
    if (currentIndex > 0) currentIndex--;
    showSlide();
}

// Admin save functions (writes back to JSON - requires server, but works locally)
function saveLeaderboard() {
    const val = document.getElementById('leaderboard-input').value;
    // In a real app, this would POST to a server.
    alert('Saved leaderboard! (Check console for data)');
    console.log(val);
}

loadData();
