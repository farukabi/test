const camasirMakineleri = document.getElementById('camasir');
const categoriesBar = document.getElementById('categories-bar');
const subcategoriesBar = document.getElementById('subcategories-bar');
const mainImage = document.getElementById('main_image');
const subeler = document.getElementById("home");
const hakkimizda = document.getElementById('hakkimizda');
const bulasikMak = document.getElementById("bulasik");
const buzdolabiSection = document.getElementById('buzdolabi');
const galery = document.getElementById("galleryCarousel");
const kurutmalik = document.getElementById("kurutma");

function iconClicked(){
  document.getElementById('contact-info').classList.add('active');
} 
function showHakkimizda(){
    hakkimizda.style.display = 'block';
    mainImage.classList.add("hidden");
    subeler.classList.add("hidden");
    buzdolabiSection.style.display = 'none'; 
    camasirMakineleri.style.display = "none";
    bulasikMak.style.display = "none";
    galery.classList.add('hidden');
    kurutmalik.style.display = "none";
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
    galery.classList.add('hidden');
    kurutmalik.style.display = "none";
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
    galery.classList.add('hidden');
    kurutmalik.style.display = "none";
}
function resetView(){
    buzdolabiSection.style.display = 'none'; 
    camasirMakineleri.style.display = "none";
    mainImage.classList.remove('hidden');
    hakkimizda.style.display = "none";
    bulasikMak.style.display = "none";
    subeler.classList.remove("hidden");
    galery.classList.remove('hidden');
    kurutmalik.style.display = "none";
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
    kurutmalik.style.display = "none";
    galery.classList.add('hidden');
}
function showKurutma(){
    bulasikMak.style.display = "none";
    categoriesBar.classList.add('hidden');
    subcategoriesBar.classList.add('hidden');
    mainImage.classList.add('hidden');
    subeler.classList.add("hidden");
    camasirMakineleri.style.display = "none";
    buzdolabiSection.style.display = 'none'; 
    hakkimizda.style.display = "none";
    galery.classList.add('hidden');
    kurutmalik.style.display = "flex";
}
function flipCard(card) {
    card.classList.toggle('flipped'); // Kartı döndür
}


 
