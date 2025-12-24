
// Sample recipes for top of Home
const sampleRecipes = [
{
id: "sample1",
name: "Classic Margherita Pizza",
image: "images/pizza.jpg",
ingredients: [
"2 pizza bases","1/2 cup pizza sauce","1 cup mozzarella",
"8-10 basil leaves","Olive oil","Salt to taste"
],
steps: [
"Preheat oven to 220°C.",
"Spread sauce on base and add cheese.",
"Top with basil; drizzle olive oil.",
"Bake for 10–12 minutes."
]
},
{
id: "sample2",
name: "Paneer Butter Masala",
image: "images/Panner butter masala.jpg",
ingredients: [
"200 g paneer","2 tomatoes (pureed)","1 onion",
"2 tbsp butter","1 tsp garam masala","1/2 cup cream"
],
steps: [
"Sauté onion in butter till golden.",
"Add tomato puree and cook till oil separates.",
"Add spices and cream, then paneer.",
"Simmer for 5 minutes."
]
},
{
id: "sample3",
name: "Chocolate Brownie",
image: "images/Brownie.jpg",
ingredients: [
"1/2 cup melted butter","1 cup sugar","2 eggs",
"1/3 cup cocoa powder","1/2 cup flour","1 tsp vanilla"
],
steps: [
"Preheat oven to 180°C.",
"Mix wet ingredients, then add dry.",
"Pour into tin and bake 20–25 minutes.",
"Cool, cut and serve."
]
},
{
id: "sample4",
name: "Velvety Butter Chicken Bliss",
image: "images/butter chicken.jpg",
ingredients: ["1.5 lbs chicken breast, cubed", "2 tbsp butter", "1 onion, finely chopped", "2 garlic cloves, minced", "1 tbsp ginger paste", "1 cup tomato sauce", "1 cup heavy cream", "1 tsp garam masala", "1 tsp tandoori masala", "Salt and cayenne to taste"
],
steps: [
"Melt butter, caramelize onion, garlic, and ginger (15 mins).", "Add tomato sauce, cream, spices; simmer 30 mins.", "Bake chicken coated in oil and tandoori masala at 375°F for 20 mins, then mix into sauce."
]
},
{
id: "sample5",
name: "Crispy Veg Manchurian Magic",
image: "images/manchurian.jpeg",
ingredients: ["1¼ cups cabbage, chopped", "½ cup carrot, grated", "¼ cup spring onions, chopped", "2 tbsp bell peppers, minced", "1 tsp ginger-garlic paste", "2 tbsp cornstarch", "Oil for frying", "Sauce: 1 tbsp soy sauce, 1 tsp vinegar, 1 tsp chili sauce"
],
steps: [
"Mix veggies, ginger-garlic, cornstarch; form balls and deep-fry until crisp.", "Sauté onions, garlic for sauce; add soy, vinegar, cornstarch slurry, and water; thicken.", "Toss fried balls in sauce just before serving."
]
},
{
id: "sample6",
name: "Silky Paneer Tikka Masala",
image: "images/panner tikka.jpeg",
ingredients: ["250g paneer, cubed", "½ cup Greek yogurt", "1 tsp ginger-garlic paste", "½ tsp garam masala", "¼ tsp red chili powder", "1 onion, 2 tomatoes, pureed", "¼ cup cream", "Kasuri methi for garnish"
],
steps: [
"Marinate paneer in yogurt, spices, ginger-garlic (30 mins).", "Grill paneer until charred; set aside.", "Sauté puree with spices, add cream and grilled paneer; simmer 10 mins."
]
},
{
id: "sample7",
name: "Luscious Creamy Garlic Chicken",
image: "images/Garlic chicken.jpeg",
ingredients: ["2 chicken breasts, sliced thin", "2 tbsp oil", "4-6 garlic cloves, minced", "¾ cup heavy cream", "½ cup chicken broth", "½ tsp dried parsley", "Salt and pepper"
],
steps: [
"Season and sear chicken 3-4 mins per side.", "Add garlic, cook 1 min; pour in cream, broth, parsley.", "Simmer 5-8 mins until thickened and chicken hits 165°F."
]
},
{
id: "sample8",
name: "Fluffy Scrambled Egg Paradise",
image: "images/Egg paradise.jpg",
ingredients: ["4 eggs", "2 tbsp milk", "1 tbsp butter", "Salt and pepper", "Optional: cheese, herbs"
],
steps: [
"Whisk eggs, milk, salt, pepper.", "Melt butter in pan over low heat.", "Pour eggs, stir gently until soft curds form (3-5 mins)."
]
},
{
id: "sample9",
name: "Golden Grilled Cheese Dream",
image: "images/Grilled cheese.jpg",
ingredients: ["2 bread slices", "2 cheese slices", "1 tbsp butter", "Optional: tomato slices"
],
steps: [
"Butter bread outsides; layer cheese inside.", "Grill medium heat, 2-3 mins per side until golden.", "Press for crispiness."
]
},
{
id: "sample10",
name: "Decadent Chocolate Lava Cake",
image: "images/Lava cake.jpg",
ingredients: ["½ cup chocolate, chopped", "½ cup butter", "½ cup sugar", "2 eggs + 2 yolks", "¼ cup flour", "Cocoa for dusting"
],
steps: [
"Melt chocolate-butter; whisk in sugar, eggs.", "Fold in flour; pour into ramekins.", "Bake 12 mins at 425°F for gooey centers."
]
},

];

const LS_KEY = "recipes";
let recipes = loadRecipes();
let currentImageDataForEdit = null;
const PLACEHOLDER_IMG =
"https://via.placeholder.com/400x250/ffe0e0/ff6b6b?text=No+Image";

function loadRecipes() {
try {
const data = localStorage.getItem(LS_KEY);
return data ? JSON.parse(data) : [];
} catch {
return [];
}
}
function saveRecipes() {
localStorage.setItem(LS_KEY, JSON.stringify(recipes));
}
function generateId() {
return Date.now().toString();
}

// Tabs
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");
tabButtons.forEach((btn) => {
btn.addEventListener("click", () => {
const target = btn.dataset.tab;
tabButtons.forEach((b)=>b.classList.remove("active"));
tabContents.forEach((c)=>c.classList.remove("active"));
btn.classList.add("active");
document.getElementById(target).classList.add("active");
if (target === "home") renderHome();
if (target === "list") renderList();
});
});

// Form
const form = document.getElementById("recipe-form");
const idInput = document.getElementById("recipe-id");
const nameInput = document.getElementById("recipe-name");
const ingInput = document.getElementById("recipe-ingredients");
const stepsInput = document.getElementById("recipe-steps");
const imgInput = document.getElementById("recipe-image");
const submitBtn = document.getElementById("submit-btn");

form.addEventListener("submit", (e) => {
e.preventDefault();
const name = nameInput.value.trim();
const ingredientsText = ingInput.value.trim();
const stepsText = stepsInput.value.trim();
if (!name || !ingredientsText || !stepsText) {
alert("Please fill all required fields.");
return;
}
const ingredients = ingredientsText.split("\n").map(l=>l.trim()).filter(Boolean);
const steps = stepsText.split("\n").map(l=>l.trim()).filter(Boolean);
const file = imgInput.files[0];

const handleSave = (imageData) => {
const existingId = idInput.value;
if (existingId) {
const idx = recipes.findIndex(r=>r.id===existingId);
if (idx !== -1) {
recipes[idx] = {
...recipes[idx],
name,
ingredients,
steps,
image: imageData || currentImageDataForEdit || PLACEHOLDER_IMG
};
}
alert("Recipe updated.");
} else {
const newRecipe = {
id: generateId(),
name,
ingredients,
steps,
image: imageData || PLACEHOLDER_IMG,
createdAt: new Date().toISOString()
};
recipes.push(newRecipe);
alert("Recipe added.");
}
saveRecipes();
clearForm();
renderHome();
renderList();
};

if (file) {
const reader = new FileReader();
reader.onload = (ev)=>handleSave(ev.target.result);
reader.readAsDataURL(file);
} else {
handleSave(null);
}
});

document.getElementById("clear-btn").addEventListener("click", clearForm);
function clearForm() {
idInput.value = "";
nameInput.value = "";
ingInput.value = "";
stepsInput.value = "";
imgInput.value = "";
currentImageDataForEdit = null;
submitBtn.textContent = "Add Recipe";
}

function loadRecipeIntoForm(recipe) {
idInput.value = recipe.id;
nameInput.value = recipe.name;
ingInput.value = recipe.ingredients.join("\n");
stepsInput.value = recipe.steps.join("\n");
imgInput.value = "";
currentImageDataForEdit = recipe.image;
submitBtn.textContent = "Update Recipe";
tabButtons.forEach((b)=>b.classList.remove("active"));
tabContents.forEach((c)=>c.classList.remove("active"));
document.querySelector('.tab-btn[data-tab="add"]').classList.add("active");
document.getElementById("add").classList.add("active");
}

// Render
const homeSampleContainer = document.getElementById("home-sample");
const homeUserContainer = document.getElementById("home-user");
const homeUserEmpty = document.getElementById("home-user-empty");
const listContainer = document.getElementById("all-recipes");
const noRecipesMsg = document.getElementById("no-recipes-msg");

// options = { isSample: bool, showActions: bool }
function createCard(recipe, options = {}) {
const { isSample = false, showActions = true } = options;

const card = document.createElement("div");
card.className = "card";

const img = document.createElement("img");
img.src = recipe.image || PLACEHOLDER_IMG;
img.alt = recipe.name;
card.appendChild(img);

const body = document.createElement("div");
body.className = "card-body";
card.appendChild(body);

const title = document.createElement("div");
title.className = "card-title card-click";
title.textContent = recipe.name;
body.appendChild(title);

const preview = document.createElement("div");
preview.className = "card-text card-click";
const ingPreview = recipe.ingredients.slice(0, 3).join(", ");
preview.textContent = "Ingredients: " + ingPreview +
(recipe.ingredients.length>3 ? "..." : "");
body.appendChild(preview);

const actions = document.createElement("div");
actions.className = "card-actions";
body.appendChild(actions);

const left = document.createElement("div");
left.className = "card-actions-left";
actions.appendChild(left);

// Only show Edit/Delete on non-sample recipes when showActions = true
if (!isSample && showActions) {
const editBtn = document.createElement("button");
editBtn.className = "btn btn-small";
editBtn.textContent = "Edit";
editBtn.addEventListener("click",(e)=>{
e.stopPropagation();
loadRecipeIntoForm(recipe);
});
left.appendChild(editBtn);

const delBtn = document.createElement("button");
delBtn.className = "btn btn-danger btn-small";
delBtn.textContent = "Delete";
delBtn.addEventListener("click",(e)=>{
e.stopPropagation();
if (confirm("Delete this recipe?")) {
recipes = recipes.filter(r=>r.id!==recipe.id);
saveRecipes();
renderHome();
renderList();
}
});
left.appendChild(delBtn);
}

const viewBtn = document.createElement("button");
viewBtn.className = "btn btn-secondary btn-small";
viewBtn.textContent = "View";
viewBtn.addEventListener("click",(e)=>{
e.stopPropagation();
openDetail(recipe);
});
actions.appendChild(viewBtn);

title.addEventListener("click",()=>openDetail(recipe));
preview.addEventListener("click",()=>openDetail(recipe));

return card;
}

function renderHome() {
// sample on top
homeSampleContainer.innerHTML = "";
sampleRecipes.forEach(r =>
homeSampleContainer.appendChild(createCard(r, { isSample: true, showActions: false }))
);

// latest user recipes (no Edit/Delete on home)
homeUserContainer.innerHTML = "";
if (!recipes.length) {
homeUserEmpty.style.display = "block";
} else {
homeUserEmpty.style.display = "none";
const sorted = [...recipes].sort(
(a,b)=> new Date(b.createdAt||0) - new Date(a.createdAt||0)
);
sorted.slice(0,9).forEach(r=>{
homeUserContainer.appendChild(createCard(r, { isSample: false, showActions: false }));
});
}
}

function renderList(filtered=null) {
const data = filtered || recipes;
listContainer.innerHTML = "";
if (!data.length) {
noRecipesMsg.style.display = "block";
return;
}
noRecipesMsg.style.display = "none";
const sorted = [...data].sort(
(a,b)=> new Date(b.createdAt||0) - new Date(a.createdAt||0)
);
// In All Recipes, show Edit/Delete
sorted.forEach(r=>{
listContainer.appendChild(createCard(r, { isSample: false, showActions: true }));
});
}

// Search
const searchInput = document.getElementById("search-input");
const clearSearchBtn = document.getElementById("clear-search");
searchInput.addEventListener("input", ()=>{
const q = searchInput.value.toLowerCase();
const filtered = recipes.filter(r=>{
const nm = r.name.toLowerCase().includes(q);
const ing = r.ingredients.some(i=>i.toLowerCase().includes(q));
return nm || ing;
});
renderList(filtered);
});
clearSearchBtn.addEventListener("click",()=>{
searchInput.value = "";
renderList();
});

// Modal
const modalBackdrop = document.getElementById("detail-modal");
const modalImg = document.getElementById("detail-img");
const modalTitle = document.getElementById("detail-title");
const modalIng = document.getElementById("detail-ingredients");
const modalSteps = document.getElementById("detail-steps");
const modalClose = document.getElementById("modal-close");

function openDetail(recipe) {
modalImg.src = recipe.image || PLACEHOLDER_IMG;
modalTitle.textContent = recipe.name;

modalIng.innerHTML = "";
recipe.ingredients.forEach(i=>{
const li = document.createElement("li");
li.textContent = i;
modalIng.appendChild(li);
});

modalSteps.innerHTML = "";
recipe.steps.forEach(s=>{
const li = document.createElement("li");
li.textContent = s;
modalSteps.appendChild(li);
});

modalBackdrop.classList.add("active");
}
function closeDetail(){ modalBackdrop.classList.remove("active"); }
modalClose.addEventListener("click",closeDetail);
modalBackdrop.addEventListener("click",(e)=>{
if (e.target===modalBackdrop) closeDetail();
});
document.addEventListener("keydown",(e)=>{
if (e.key==="Escape") closeDetail();
});

// Initial render
renderHome();
renderList();
