// BamaEatz Recipe Builder - Main JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const app = document.getElementById('app');
    app.innerHTML = createHomePage();
    
    // Add event listeners for menu interactions
    setupEventListeners();
});

function createHomePage() {
    return `
        <div class="container-fluid">
            <!-- Banner -->
            <div class="banner text-center py-5 mb-4">
                <h1 class="display-3 fw-bold">BamaEatz Recipe Builder</h1>
                <p class="lead">Find amazing recipes based on your cuisine preferences and budget!</p>
            </div>
            
            <!-- Menu Section -->
            <div class="container">
                <div class="row g-4 justify-content-center">
                    <div class="col-lg-4 col-md-6">
                        <div class="card menu-card h-100 text-center p-4" onclick="showRecipeSearch()">
                            <div class="menu-icon">🔍</div>
                            <h3 class="card-title">Find Recipes</h3>
                            <p class="card-text">Get recipes based on cuisine and budget</p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="card menu-card h-100 text-center p-4" onclick="showSavedRecipes()">
                            <div class="menu-icon">❤️</div>
                            <h3 class="card-title">Saved Recipes</h3>
                            <p class="card-text">View your favorite saved recipes</p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="card menu-card h-100 text-center p-4" onclick="showBudgeting()">
                            <div class="menu-icon">💰</div>
                            <h3 class="card-title">Budgeting</h3>
                            <p class="card-text">Track costs and budget for your recipes</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function setupEventListeners() {
    // Event listeners will be added here as functionality is implemented
}

// Navigation function
function showHomePage() {
    const app = document.getElementById('app');
    app.innerHTML = createHomePage();
    setupEventListeners();
}

// Menu action functions

function showRecipeSearch() {
    const app = document.getElementById('app');
    app.innerHTML = createRecipeSearchPage();
    setupSearchEventListeners();
}

function createRecipeSearchPage() {
    return `
        <div class="container-fluid">
            <!-- Header with Back Button -->
            <div class="d-flex align-items-center py-3">
                <button class="btn btn-outline-secondary me-3" onclick="showHomePage()">
                    ← Back to Home
                </button>
                <h1 class="mb-0">Find Recipes</h1>
            </div>
            
            <!-- Recipe Search Form -->
            <div class="row mb-4">
                <div class="col-md-8">
                    <div class="card">
                        <div class="card-header">
                            <h5 class="mb-0">Get Recipe Recommendations</h5>
                        </div>
                        <div class="card-body">
                            <form id="searchForm">
                                <div class="row mb-3">
                                    <div class="col-md-6">
                                        <label for="cuisineSelect" class="form-label">Cuisine Type</label>
                                        <select class="form-select" id="cuisineSelect" required>
                                            <option value="">Select a cuisine...</option>
                                            <option value="italian">🍝 Italian</option>
                                            <option value="mexican">🌮 Mexican</option>
                                            <option value="american">🍔 American</option>
                                            <option value="sandwiches">🥪 Sandwiches</option>
                                            <option value="mediterranean">🥙 Mediterranean</option>
                                            <option value="indian">🍛 Indian</option>
                                            <option value="thai">🌶️ Thai</option>
                                            <option value="chinese">🥢 Chinese</option>
                                        </select>
                                </div>
                                    <div class="col-md-6">
                                        <label for="budgetSelect" class="form-label">Budget Range</label>
                                        <select class="form-select" id="budgetSelect" required>
                                            <option value="">Select budget...</option>
                                            <option value="15">$15 or less</option>
                                            <option value="25">$25 or less</option>
                                            <option value="30">$30 or less</option>
                                            <option value="40">$40 or less</option>
                                            <option value="50">$50 or less</option>
                                        </select>
                        </div>
                    </div>
                                <div class="d-flex gap-2">
                                    <button class="btn btn-primary" type="submit">Find Recipes</button>
                                    <button id="favoriteBtn" class="btn btn-outline-secondary" type="button" onclick="toggleFavoriteCurrentSelection()">🤍 Favorite Recipe</button>
                                </div>
                            </form>
                </div>
            </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-header">
                            <h6 class="mb-0">Quick Links</h6>
                        </div>
                        <div class="card-body">
                            <div class="d-grid gap-2">
                                <button class="btn btn-outline-primary btn-sm" onclick="quickRedirect('mexican', '15')">Mexican - $15</button>
                                <button class="btn btn-outline-primary btn-sm" onclick="quickRedirect('mexican', '30')">Mexican - $30</button>
                                <button class="btn btn-outline-primary btn-sm" onclick="quickRedirect('italian', '25')">Italian - $25</button>
                                <button class="btn btn-outline-primary btn-sm" onclick="quickRedirect('sandwiches', '20')">Sandwiches - $20</button>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    `;
}

function setupSearchEventListeners() {
    document.getElementById('searchForm').addEventListener('submit', function(e) {
        e.preventDefault();
        performRecipeSearch();
    });

    // Keep favorite button visual state in sync when selection changes
    const cuisineSelect = document.getElementById('cuisineSelect');
    const budgetSelect = document.getElementById('budgetSelect');
    [cuisineSelect, budgetSelect].forEach(el => el.addEventListener('change', updateFavoriteButtonState));
    // Initialize state on load
    updateFavoriteButtonState();
}

function showSavedRecipes() {
    const app = document.getElementById('app');
    app.innerHTML = createSavedRecipesPage();
    setupSavedRecipesEventListeners();
    loadSavedRecipes(); // Load saved recipes when page opens
}

function createSavedRecipesPage() {
    return `
        <div class="container-fluid">
            <!-- Header with Back Button -->
            <div class="d-flex align-items-center py-3">
                <button class="btn btn-outline-secondary me-3" onclick="showHomePage()">
                    ← Back to Home
                </button>
                <h1 class="mb-0">Saved Recipes</h1>
            </div>
            
            <!-- Saved Recipes Table -->
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header d-flex justify-content-between align-items-center">
                            <h5 class="mb-0">My Favorite Recipe Links</h5>
                            <button class="btn btn-sm btn-outline-primary" onclick="clearAllFavorites()">
                                Clear All
                            </button>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Recipe Name</th>
                                            <th>Cuisine</th>
                                            <th>Budget</th>
                                            <th>URL</th>
                                            <th>Type</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody id="savedRecipesTableBody">
                                        <tr>
                                            <td colspan="6" class="text-center text-muted">No saved recipes yet</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Add Recipe Link -->
            <div class="row mt-4">
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-header">
                            <h6 class="mb-0">Add Recipe Link</h6>
                        </div>
                        <div class="card-body">
                            <button class="btn btn-success" onclick="showAddRecipeModal()">
                                Add Recipe Link
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function setupSavedRecipesEventListeners() {
    // Event listeners for saved recipes functionality
}

function showBudgeting() {
    const app = document.getElementById('app');
    app.innerHTML = createBudgetingPage();
    setupBudgetingEventListeners();
}

function createBudgetingPage() {
    return `
        <div class="container-fluid">
            <!-- Header with Back Button -->
            <div class="d-flex align-items-center py-3">
                <button class="btn btn-outline-secondary me-3" onclick="showHomePage()">
                    ← Back to Home
                </button>
                <h1 class="mb-0">Budgeting</h1>
            </div>
            
            <!-- Budget Overview -->
            <div class="row mb-4">
                <div class="col-md-6">
                    <div class="card border-success">
                        <div class="card-header bg-success text-white">
                            <h5 class="mb-0">Current Budget</h5>
                        </div>
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-center">
                                <span class="fs-4">$<span id="currentBudget">100.00</span></span>
                                <button class="btn btn-outline-success btn-sm" onclick="editBudget()">
                                    Edit Budget
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card border-warning">
                        <div class="card-header bg-warning text-dark">
                            <h5 class="mb-0">Spent This Month</h5>
                        </div>
                        <div class="card-body">
                            <div class="fs-4">$<span id="spentAmount">0.00</span></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Budget Management -->
            <div class="row mb-4">
                <div class="col-md-8">
                    <div class="card">
                        <div class="card-header">
                            <h5 class="mb-0">Budget Management</h5>
                        </div>
                        <div class="card-body">
                            <form id="budgetForm" style="display: none;">
                                <div class="mb-3">
                                    <label for="newBudget" class="form-label">New Budget Amount ($)</label>
                                    <input type="number" class="form-control" id="newBudget" step="0.01" min="0" required>
                                </div>
                                <button type="submit" class="btn btn-success me-2">Save Budget</button>
                                <button type="button" class="btn btn-secondary" onclick="cancelEditBudget()">Cancel</button>
                            </form>
                            <div id="budgetInfo">
                                <p class="mb-3">Manage your monthly food budget and track spending on recipes.</p>
                                <div class="d-flex gap-2">
                                    <button class="btn btn-primary" onclick="editBudget()">Set Budget</button>
                                    <button class="btn btn-outline-primary" onclick="resetBudget()">Reset to Default</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Budget History -->
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <h5 class="mb-0">Budget History</h5>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Date</th>
                                            <th>Recipe/Item</th>
                                            <th>Amount</th>
                                            <th>Remaining Budget</th>
                                        </tr>
                                    </thead>
                                    <tbody id="budgetHistoryTableBody">
                                        <tr>
                                            <td colspan="4" class="text-center text-muted">No budget history yet</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function setupBudgetingEventListeners() {
    document.getElementById('budgetForm').addEventListener('submit', function(e) {
        e.preventDefault();
        saveBudget();
    });
}

// Supporting functions for all pages

function performRecipeSearch() {
    const cuisine = document.getElementById('cuisineSelect').value;
    const budget = document.getElementById('budgetSelect').value;
    
    if (!cuisine || !budget) {
        showToast('Please select both cuisine and budget!', 'warning');
        return;
    }
    
    // Get the URL for this combination
    const url = getRecipeUrl(cuisine, budget);
    
    if (url) {
        // Open the URL in a new tab
        window.open(url, '_blank');
        showToast(`Redirecting to ${cuisine} recipes for $${budget} budget!`, 'success');
    } else {
        showToast('No URL configured for this combination. Please set up URLs first.', 'warning');
    }
}

function quickRedirect(cuisine, budget) {
    const url = getRecipeUrl(cuisine, budget);
    
    if (url) {
        window.open(url, '_blank');
        showToast(`Redirecting to ${cuisine} recipes for $${budget} budget!`, 'success');
    } else {
        showToast('No URL configured for this combination.', 'warning');
    }
}

function isCurrentSelectionFavorited() {
    const cuisine = document.getElementById('cuisineSelect').value;
    const budget = document.getElementById('budgetSelect').value;
    if (!cuisine || !budget) return false;
    const url = getRecipeUrl(cuisine, budget);
    if (!url) return false;
    const savedRecipes = JSON.parse(localStorage.getItem('bamaeatz_saved_recipes') || '[]');
    return savedRecipes.some(r => r.cuisine === cuisine && String(r.budget) === String(budget) && r.url === url);
}

function updateFavoriteButtonState() {
    const btn = document.getElementById('favoriteBtn');
    if (!btn) return;
    const cuisine = document.getElementById('cuisineSelect').value;
    const budget = document.getElementById('budgetSelect').value;
    const url = cuisine && budget ? getRecipeUrl(cuisine, budget) : null;
    const isFavorited = url ? isCurrentSelectionFavorited() : false;
    if (!cuisine || !budget || !url) {
        btn.classList.remove('btn-danger');
        btn.classList.add('btn-outline-secondary');
        btn.textContent = '🤍 Favorite Recipe';
        btn.disabled = false;
        return;
    }
    if (isFavorited) {
        btn.classList.remove('btn-outline-secondary');
        btn.classList.add('btn-danger');
        btn.textContent = '❤️ Favorited';
    } else {
        btn.classList.remove('btn-danger');
        btn.classList.add('btn-outline-secondary');
        btn.textContent = '🤍 Favorite Recipe';
    }
}

function toggleFavoriteCurrentSelection() {
    const cuisine = document.getElementById('cuisineSelect').value;
    const budget = document.getElementById('budgetSelect').value;
    if (!cuisine || !budget) { showToast('Select cuisine and budget first.', 'warning'); return; }
    const url = getRecipeUrl(cuisine, budget);
    if (!url) { showToast('No URL configured for this selection.', 'warning'); return; }

    const title = `${cuisine.charAt(0).toUpperCase() + cuisine.slice(1)} - $${budget}`;
    let savedRecipes = JSON.parse(localStorage.getItem('bamaeatz_saved_recipes') || '[]');
    const idx = savedRecipes.findIndex(r => r.cuisine === cuisine && String(r.budget) === String(budget) && r.url === url);
    if (idx >= 0) {
        // Unfavorite
        savedRecipes.splice(idx, 1);
        localStorage.setItem('bamaeatz_saved_recipes', JSON.stringify(savedRecipes));
        showToast('Removed from favorites.', 'info');
    } else {
        // Favorite
        savedRecipes.push({ id: `${cuisine}_${budget}`, title, cuisine, budget, url, savedAt: new Date().toISOString() });
        localStorage.setItem('bamaeatz_saved_recipes', JSON.stringify(savedRecipes));
        showToast('Saved to favorites.', 'success');
    }

    if (document.getElementById('savedRecipesTableBody')) { loadSavedRecipes(); }
    updateFavoriteButtonState();
}

// Hardcoded Recipe URLs - Edit these to set your recipe links
const RECIPE_URLS = {
    // Mexican recipes
    'mexican_15': 'https://10buckdinners.com/baja-fresh-fish-tacos-with-spicy-cilantro-slaw/',
    'mexican_25': 'https://www.budgetbytes.com/chicken-enchiladas/?utm_source=chatgpt.com',
    'mexican_30': 'https://www.seriouseats.com/chicken-mole-recipe?utm_source=chatgpt.com',
    'mexican_40': 'https://rachaelray.com/blogs/recipes/white-chicken-mexican-lasagna-recipe?utm_source=chatgpt.com',
    'mexican_50': 'https://rachaelray.com/blogs/recipes/roasted-supper-mexican-chicken-or-fish?utm_source=chatgpt.com',
    
    // Italian recipes
    'italian_15': 'https://www.bowlofdelicious.com/quick-and-easy-spaghetti-and-meatballs/',
    'italian_25': 'https://www.budgetbytes.com/classic-baked-ziti/?utm_source=chatgpt.com',
    'italian_30': 'https://www.seriouseats.com/classic-italian-american-stuffed-shells?utm_source=chatgpt.com',
    'italian_40': 'https://www.seriouseats.com/chicken-scarpariello-sweet-and-sour-chicken-italian-recipe?utm_source=chatgpt.com',
    'italian_50': 'https://www.seriouseats.com/osso-buco-italian-braised-veal-shanks-recipe?utm_source=chatgpt.com',
    
    // American recipes
    'american_15': 'https://www.budgetbytes.com/classic-homemade-meatloaf/',
    'american_25': 'https://www.allrecipes.com/recipe/24264/sloppy-joes-ii/',
    'american_30': 'https://natashaskitchen.com/beef-stroganoff/',
    'american_40': 'https://www.allrecipes.com/recipe/233983/mamaws-chicken-and-rice-casserole/',
    'american_50': 'https://www.foodiecrush.com/lobster-rolls/',
    
    // Sandwich recipes
    'sandwiches_15': 'https://simply-delicious-food.com/easy-tomato-soup-recipe/',
    'sandwiches_25': 'https://www.culinaryhill.com/grilled-chicken-caesar-wrap/',
    'sandwiches_30': 'https://www.melskitchencafe.com/bbq-pulled-pork-sandwiches-slow-cooker/',
    'sandwiches_40': 'https://natashaskitchen.com/philly-cheesesteak/',
    'sandwiches_50': 'https://www.sipandfeast.com/the-best-steak-sandwich/',
    
    // Mediterranean recipes
    'mediterranean_15': 'https://www.mediterraneanliving.com/greek-omelette-with-zucchini-and-mint-crete/',
    'mediterranean_25': 'https://www.mediterraneanliving.com/mediterranean-bowl-with-hummus-and-feta/',
    'mediterranean_30': 'https://iamhomesteader.com/tuscan-white-bean-soup/',
    'mediterranean_40': 'https://www.goodhousekeeping.com/food-recipes/a65962088/harissa-cod-with-white-beans-recipe/',
    'mediterranean_50': 'https://www.recipetineats.com/moussaka-greek-eggplant-beef-bake/',
    
    // Indian recipes
    'indian_15': 'https://minimalistbaker.com/easy-chana-masala/',
    'indian_25': 'https://www.indianhealthyrecipes.com/aloo-gobi-recipe/',
    'indian_30': 'https://www.allrecipes.com/recipe/46822/indian-chicken-curry-ii/',
    'indian_40': 'https://www.indianhealthyrecipes.com/rogan-josh/',
    'indian_50': 'https://thebigmansworld.com/pulled-tandoori-chicken/',
    
    // Thai recipes
    'thai_15': 'https://www.recipetineats.com/tom-yum-soup-thai/',
    'thai_25': 'https://www.recipetineats.com/chicken-pad-thai/',
    'thai_30': 'https://feed-your-sole.com/thai-red-beef-curry/',
    'thai_40': 'https://www.allrecipes.com/recipe/257938/spicy-thai-basil-chicken-pad-krapow-gai/',
    'thai_50': 'https://www.recipetineats.com/thai-green-curry/',
    
    // Chinese recipes
    'chinese_15': 'https://www.allrecipes.com/recipe/23298/egg-fried-rice/',
    'chinese_25': 'https://www.momontimeout.com/easy-chicken-stir-fry-recipe/',
    'chinese_30': 'https://natashaskitchen.com/general-tsos-chicken/',
    'chinese_40': 'https://www.smalltownwoman.com/sweet-sour-chicken/',
    'chinese_50': 'https://www.simplyrecipes.com/recipes/shrimp_fried_rice/'
};

// URL Management Functions
function getRecipeUrl(cuisine, budget) {
    const key = `${cuisine}_${budget}`;
    return RECIPE_URLS[key] || null;
}

function getCurrentBudget() {
    const budgetElement = document.getElementById('currentBudget');
    return budgetElement ? parseFloat(budgetElement.textContent) : 50;
}

// Saved Recipes Functions (simplified)
function loadSavedRecipes() {
    const savedRecipes = JSON.parse(localStorage.getItem('bamaeatz_saved_recipes') || '[]');
    const tbody = document.getElementById('savedRecipesTableBody');
    
    if (savedRecipes.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" class="text-center text-muted">No saved recipes yet</td></tr>';
        return;
    }
    
    tbody.innerHTML = savedRecipes.map(recipe => `
        <tr>
            <td>${recipe.title}</td>
            <td>${recipe.cuisine || 'N/A'}</td>
            <td>${recipe.budget || 'N/A'}</td>
            <td>${recipe.url || 'N/A'}</td>
            <td><span class="badge bg-secondary">External Link</span></td>
            <td>
                <button class="btn btn-sm btn-outline-primary me-1" onclick="window.open('${recipe.url}', '_blank')">Visit</button>
                <button class="btn btn-sm btn-outline-danger" onclick="removeSavedRecipe('${recipe.id}')">Remove</button>
            </td>
        </tr>
    `).join('');
}

function removeSavedRecipe(recipeId) {
    if (confirm('Are you sure you want to remove this recipe from your saved list?')) {
        const savedRecipes = JSON.parse(localStorage.getItem('bamaeatz_saved_recipes') || '[]');
        const updatedRecipes = savedRecipes.filter(recipe => recipe.id !== recipeId);
        localStorage.setItem('bamaeatz_saved_recipes', JSON.stringify(updatedRecipes));
        
        // Refresh the saved recipes table
        loadSavedRecipes();
        showToast('Recipe removed from saved list', 'info');
    }
}

function showToast(message, type = 'info') {
    const toastHtml = `
        <div class="toast align-items-center text-white bg-${type === 'success' ? 'success' : type === 'error' ? 'danger' : 'info'} border-0" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="d-flex">
                <div class="toast-body">${message}</div>
                <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
            </div>
        </div>
    `;
    
    // Create toast container if it doesn't exist
    let toastContainer = document.getElementById('toastContainer');
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.id = 'toastContainer';
        toastContainer.className = 'toast-container position-fixed top-0 end-0 p-3';
        toastContainer.style.zIndex = '9999';
        document.body.appendChild(toastContainer);
    }
    
    toastContainer.insertAdjacentHTML('beforeend', toastHtml);
    
    // Show the toast
    const toastElement = toastContainer.lastElementChild;
    const toast = new bootstrap.Toast(toastElement);
    toast.show();
    
    // Remove toast element after it's hidden
    toastElement.addEventListener('hidden.bs.toast', () => {
        toastElement.remove();
    });
}

function showAddRecipeModal() {
    const modalHtml = `
        <div class="modal fade" id="addRecipeModal" tabindex="-1" aria-labelledby="addRecipeModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="addRecipeModalLabel">Add Recipe Link</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form id="addRecipeForm">
                            <div class="mb-3">
                                <label for="recipeName" class="form-label">Recipe Name</label>
                                <input type="text" class="form-control" id="recipeName" placeholder="e.g., Chicken Parmesan" required>
                            </div>
                            <div class="mb-3">
                                <label for="recipeCuisine" class="form-label">Cuisine</label>
                                <select class="form-select" id="recipeCuisine" required>
                                    <option value="">Select cuisine...</option>
                                    <option value="italian">Italian</option>
                                    <option value="mexican">Mexican</option>
                                    <option value="asian">Asian</option>
                                    <option value="american">American</option>
                                    <option value="sandwiches">Sandwiches</option>
                                    <option value="mediterranean">Mediterranean</option>
                                    <option value="indian">Indian</option>
                                    <option value="thai">Thai</option>
                                    <option value="chinese">Chinese</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label for="recipeBudget" class="form-label">Budget</label>
                                <input type="text" class="form-control" id="recipeBudget" placeholder="e.g., $25" required>
                            </div>
                            <div class="mb-3">
                                <label for="recipeUrl" class="form-label">Recipe URL</label>
                                <input type="url" class="form-control" id="recipeUrl" placeholder="https://example.com/recipe" required>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-primary" onclick="saveRecipeLink()">Save Recipe</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Remove existing modal if any
    const existingModal = document.getElementById('addRecipeModal');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Add modal to body
    document.body.insertAdjacentHTML('beforeend', modalHtml);
    
    // Show modal
    const modal = new bootstrap.Modal(document.getElementById('addRecipeModal'));
    modal.show();
}

function saveRecipeLink() {
    const name = document.getElementById('recipeName').value;
    const cuisine = document.getElementById('recipeCuisine').value;
    const budget = document.getElementById('recipeBudget').value;
    const url = document.getElementById('recipeUrl').value;
    
    if (!name || !cuisine || !budget || !url) {
        showToast('Please fill in all fields!', 'warning');
        return;
    }
    
    const savedRecipes = JSON.parse(localStorage.getItem('bamaeatz_saved_recipes') || '[]');
    
    // Add recipe to saved list
    savedRecipes.push({
        id: Date.now().toString(),
        title: name,
        cuisine: cuisine,
        budget: budget,
        url: url,
        savedAt: new Date().toISOString()
    });
    
    localStorage.setItem('bamaeatz_saved_recipes', JSON.stringify(savedRecipes));
    
    // Hide modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('addRecipeModal'));
    modal.hide();
    
    // Refresh the saved recipes table
    loadSavedRecipes();
    showToast('Recipe link saved successfully!', 'success');
}

function clearAllFavorites() {
    if (confirm('Are you sure you want to clear all saved recipes?')) {
        localStorage.removeItem('bamaeatz_saved_recipes');
        loadSavedRecipes();
        showToast('All saved recipes cleared!', 'info');
    }
}

function editBudget() {
    document.getElementById('budgetForm').style.display = 'block';
    document.getElementById('budgetInfo').style.display = 'none';
    document.getElementById('newBudget').focus();
}

function cancelEditBudget() {
    document.getElementById('budgetForm').style.display = 'none';
    document.getElementById('budgetInfo').style.display = 'block';
    document.getElementById('budgetForm').reset();
}

function saveBudget() {
    const newBudget = document.getElementById('newBudget').value;
    if (newBudget) {
        document.getElementById('currentBudget').textContent = parseFloat(newBudget).toFixed(2);
        document.getElementById('budgetForm').style.display = 'none';
        document.getElementById('budgetInfo').style.display = 'block';
        document.getElementById('budgetForm').reset();
    }
}

function resetBudget() {
    document.getElementById('currentBudget').textContent = '100.00';
    document.getElementById('spentAmount').textContent = '0.00';
}

