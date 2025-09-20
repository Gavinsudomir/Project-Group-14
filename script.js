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
                <p class="lead">Create amazing recipes from your favorite ingredients!</p>
            </div>
            
            <!-- Menu Section -->
            <div class="container">
                <div class="row g-4 justify-content-center">
                    <div class="col-lg-3 col-md-6">
                        <div class="card menu-card h-100 text-center p-4" onclick="showAddIngredients()">
                            <div class="menu-icon">🥬</div>
                            <h3 class="card-title">Add Ingredients</h3>
                            <p class="card-text">Add your favorite ingredients to your pantry</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="card menu-card h-100 text-center p-4" onclick="showRecipeSearch()">
                            <div class="menu-icon">🔍</div>
                            <h3 class="card-title">Search Recipes</h3>
                            <p class="card-text">Find recipes based on your ingredients</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="card menu-card h-100 text-center p-4" onclick="showSavedRecipes()">
                            <div class="menu-icon">❤️</div>
                            <h3 class="card-title">Saved Recipes</h3>
                            <p class="card-text">View your favorite saved recipes</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
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

// Placeholder functions for menu actions
function showAddIngredients() {
    const app = document.getElementById('app');
    app.innerHTML = createAddIngredientsPage();
    setupIngredientsEventListeners();
    loadIngredientsFromStorage(); // Load saved ingredients when page opens
}

function createAddIngredientsPage() {
    return `
        <div class="container-fluid">
            <!-- Header with Back Button -->
            <div class="d-flex align-items-center py-3">
                <button class="btn btn-outline-secondary me-3" onclick="showHomePage()">
                    ← Back to Home
                </button>
                <h1 class="mb-0">Add Ingredients</h1>
            </div>
            
            <!-- Add New Ingredient Form -->
            <div class="row mb-4">
                <div class="col-md-8">
                    <div class="card">
                        <div class="card-header d-flex justify-content-between align-items-center">
                            <h5 class="mb-0">Add New Ingredient</h5>
                            <button class="btn btn-sm btn-outline-info" onclick="viewRawData()">
                                🔍 View Raw Data
                            </button>
                        </div>
                        <div class="card-body">
                            <form id="ingredientForm">
                                <div class="row">
                                    <div class="col-md-6 mb-3">
                                        <label for="ingredientName" class="form-label">Ingredient Name</label>
                                        <input type="text" class="form-control" id="ingredientName" required>
                                    </div>
                                    <div class="col-md-3 mb-3">
                                        <label for="ingredientPrice" class="form-label">Price ($)</label>
                                        <input type="number" class="form-control" id="ingredientPrice" step="0.01" min="0">
                                    </div>
                                    <div class="col-md-3 mb-3">
                                        <label for="ingredientUnit" class="form-label">Unit</label>
                                        <select class="form-select" id="ingredientUnit">
                                            <option value="lb">lb</option>
                                            <option value="oz">oz</option>
                                            <option value="cup">cup</option>
                                            <option value="tbsp">tbsp</option>
                                            <option value="tsp">tsp</option>
                                            <option value="each">each</option>
                                        </select>
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-primary">Add Ingredient</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Ingredients Table -->
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <h5 class="mb-0">My Ingredients</h5>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Price</th>
                                            <th>Unit</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody id="ingredientsTableBody">
                                        <tr>
                                            <td colspan="4" class="text-center text-muted">No ingredients added yet</td>
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

function setupIngredientsEventListeners() {
    document.getElementById('ingredientForm').addEventListener('submit', function(e) {
        e.preventDefault();
        addIngredient();
    });
}

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
                <h1 class="mb-0">Search Recipes</h1>
            </div>
            
            <!-- Search Section -->
            <div class="row mb-4">
                <div class="col-md-8">
                    <div class="card">
                        <div class="card-header">
                            <h5 class="mb-0">Find Recipes</h5>
                        </div>
                        <div class="card-body">
                            <form id="searchForm">
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" id="searchInput" placeholder="Search for recipes..." required>
                                    <button class="btn btn-primary" type="submit">Search</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Search History -->
            <div class="row">
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-header">
                            <h5 class="mb-0">Recent Searches</h5>
                        </div>
                        <div class="card-body">
                            <div id="searchHistory">
                                <p class="text-muted">No search history yet</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-header">
                            <h5 class="mb-0">Search Results</h5>
                        </div>
                        <div class="card-body">
                            <div id="searchResults">
                                <p class="text-muted">Enter a search term to find recipes</p>
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
        performSearch();
    });
}

function showSavedRecipes() {
    const app = document.getElementById('app');
    app.innerHTML = createSavedRecipesPage();
    setupSavedRecipesEventListeners();
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
                            <h5 class="mb-0">My Favorite Recipes</h5>
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
                                            <th>Prep Time</th>
                                            <th>Cook Time</th>
                                            <th>Difficulty</th>
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
            
            <!-- Quick Add Sample Recipe -->
            <div class="row mt-4">
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-header">
                            <h6 class="mb-0">Add Sample Recipe (Demo)</h6>
                        </div>
                        <div class="card-body">
                            <button class="btn btn-success" onclick="addSampleRecipe()">
                                Add Sample Recipe
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

// Local Storage functions for ingredients
function saveIngredientsToStorage() {
    const ingredients = [];
    const tbody = document.getElementById('ingredientsTableBody');
    const rows = tbody.querySelectorAll('tr');
    
    rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        if (cells.length === 4) { // Only process actual ingredient rows, not "No ingredients" message
            const name = cells[0].textContent;
            const price = cells[1].textContent.replace('$', '');
            const unit = cells[2].textContent;
            
            ingredients.push({ name, price, unit });
        }
    });
    
    localStorage.setItem('bamaeatz_ingredients', JSON.stringify(ingredients));
}

function loadIngredientsFromStorage() {
    const savedIngredients = localStorage.getItem('bamaeatz_ingredients');
    if (savedIngredients) {
        const ingredients = JSON.parse(savedIngredients);
        const tbody = document.getElementById('ingredientsTableBody');
        
        if (ingredients.length > 0) {
            tbody.innerHTML = ''; // Clear the "No ingredients" message
            
            ingredients.forEach(ingredient => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${ingredient.name}</td>
                    <td>$${ingredient.price}</td>
                    <td>${ingredient.unit}</td>
                    <td>
                        <button class="btn btn-sm btn-outline-danger" onclick="removeIngredient(this)">Remove</button>
                    </td>
                `;
                tbody.appendChild(row);
            });
        }
    }
}

// Debug function to view raw localStorage data
function viewRawData() {
    const rawData = localStorage.getItem('bamaeatz_ingredients');
    console.log('Raw localStorage data:', rawData);
    console.log('Parsed data:', JSON.parse(rawData || '[]'));
    
    // Also show in an alert for easy viewing
    if (rawData) {
        alert('Raw Data:\n' + rawData + '\n\nParsed Data:\n' + JSON.stringify(JSON.parse(rawData), null, 2));
    } else {
        alert('No ingredients data found in localStorage');
    }
}

function addIngredient() {
    const name = document.getElementById('ingredientName').value;
    const price = document.getElementById('ingredientPrice').value;
    const unit = document.getElementById('ingredientUnit').value;
    
    if (name) {
        const tbody = document.getElementById('ingredientsTableBody');
        if (tbody.innerHTML.includes('No ingredients added yet')) {
            tbody.innerHTML = '';
        }
        
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${name}</td>
            <td>$${price || '0.00'}</td>
            <td>${unit}</td>
            <td>
                <button class="btn btn-sm btn-outline-danger" onclick="removeIngredient(this)">Remove</button>
            </td>
        `;
        tbody.appendChild(row);
        
        // Save to localStorage
        saveIngredientsToStorage();
        
        // Clear form
        document.getElementById('ingredientForm').reset();
    }
}

function removeIngredient(button) {
    button.closest('tr').remove();
    const tbody = document.getElementById('ingredientsTableBody');
    if (tbody.children.length === 0) {
        tbody.innerHTML = '<tr><td colspan="4" class="text-center text-muted">No ingredients added yet</td></tr>';
    }
    
    // Save to localStorage after removal
    saveIngredientsToStorage();
}

function performSearch() {
    const searchTerm = document.getElementById('searchInput').value;
    const searchResults = document.getElementById('searchResults');
    const searchHistory = document.getElementById('searchHistory');
    
    // Add to search history
    if (searchTerm) {
        let historyHtml = searchHistory.innerHTML;
        if (historyHtml.includes('No search history yet')) {
            historyHtml = '';
        }
        historyHtml += `<div class="mb-2"><span class="badge bg-secondary me-2">${searchTerm}</span></div>`;
        searchHistory.innerHTML = historyHtml;
        
        // Show search results (placeholder)
        searchResults.innerHTML = `
            <div class="alert alert-info">
                <strong>Searching for:</strong> "${searchTerm}"
                <br><small class="text-muted">This will connect to your recipe API in the future</small>
            </div>
        `;
        
        // Clear search input
        document.getElementById('searchInput').value = '';
    }
}

function addSampleRecipe() {
    const tbody = document.getElementById('savedRecipesTableBody');
    if (tbody.innerHTML.includes('No saved recipes yet')) {
        tbody.innerHTML = '';
    }
    
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>Chicken Parmesan</td>
        <td>Italian</td>
        <td>15 min</td>
        <td>25 min</td>
        <td><span class="badge bg-warning">Medium</span></td>
        <td>
            <button class="btn btn-sm btn-outline-danger" onclick="removeRecipe(this)">Remove</button>
        </td>
    `;
    tbody.appendChild(row);
}

function removeRecipe(button) {
    button.closest('tr').remove();
    const tbody = document.getElementById('savedRecipesTableBody');
    if (tbody.children.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" class="text-center text-muted">No saved recipes yet</td></tr>';
    }
}

function clearAllFavorites() {
    if (confirm('Are you sure you want to clear all saved recipes?')) {
        const tbody = document.getElementById('savedRecipesTableBody');
        tbody.innerHTML = '<tr><td colspan="6" class="text-center text-muted">No saved recipes yet</td></tr>';
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
