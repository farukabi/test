const camasirMakineleri = document.getElementById('camasir');
const categoriesBar = document.getElementById('categories-bar');
const subcategoriesBar = document.getElementById('subcategories-bar');
const mainImage = document.getElementById('main_image');
const subeler = document.getElementById("home");
const hakkimizda = document.getElementById('hakkimizda');
const bulasikMak = document.getElementById("bulasik");
const buzdolabiSection = document.getElementById('buzdolabi');
function iconClicked(iconName){
    if (iconName === 'Contact') {
        document.getElementById('contact-info').classList.add('active');
    } else{
        alert(iconName+ 'icon clicked');
    }
    
}
window.onload = function() {
    const welcomeMessage = document.getElementById('welcome-message');
    welcomeMessage.classList.remove('hidden'); // Mesajı görünür yap
    setTimeout(() => {
        welcomeMessage.classList.add('hidden'); // 5 saniye sonra gizle
    }, 2500);
}
function showHakkimizda(){
    hakkimizda.style.display = 'block';
    mainImage.classList.add("hidden");
    subeler.classList.add("hidden");
    buzdolabiSection.style.display = 'none'; 
    camasirMakineleri.style.display = "none";
    bulasikMak.style.display = "none";
}
function closeInfoBox () {
    document.getElementById('contact-info').classList.remove('active');
}
function toggleCategories (){
    const categoriesBar = document.getElementById('categories-bar');
    categoriesBar.classList.toggle('hidden');
}
function closeCategories(){
    const categoriesBar = document.getElementById('categories-bar');
    categoriesBar.classList.add('hidden');
}
function showSubcategories(){
    const subcategoriesBar = document.getElementById('subcategories-bar');
    subcategoriesBar.classList.remove('hidden');
}
function closeSubcategories(){
    const subcategoriesBar = document.getElementById('subcategories-bar');
    subcategoriesBar.classList.add('hidden');
}
function showBuzdolabi() {
    buzdolabiSection.style.display = 'flex'; // Show the section
    categoriesBar.classList.add('hidden');
    subcategoriesBar.classList.add('hidden');
    mainImage.classList.add('hidden');
    subeler.classList.add("hidden");
    bulasikMak.style.display = "none";
    camasirMakineleri.style.display = "none";
    hakkimizda.style.display = "none";

}
function showCamasir(){
    camasirMakineleri.style.display='flex';
    categoriesBar.classList.add('hidden');
    subcategoriesBar.classList.add('hidden');
    mainImage.classList.add("hidden");
    subeler.classList.add("hidden");
    buzdolabiSection.style.display = 'none'; 
    bulasikMak.style.display = "none";
    hakkimizda.style.display = "none";
}
function resetView(){
    buzdolabiSection.style.display = 'none'; 
    camasirMakineleri.style.display = "none";
    mainImage.classList.remove('hidden');
    hakkimizda.style.display = "none";
    bulasikMak.style.display = "none";
    subeler.classList.remove("hidden");
    
}
function showBulasik(){
    bulasikMak.style.display = "flex";
    categoriesBar.classList.add('hidden');
    subcategoriesBar.classList.add('hidden');
    mainImage.classList.add('hidden');
    subeler.classList.add("hidden");
    camasirMakineleri.style.display = "none";
    buzdolabiSection.style.display = 'none'; 
    hakkimizda.style.display = "none";
}


