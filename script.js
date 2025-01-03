const camasirMakineleri = document.getElementById('camasir');
const categoriesBar = document.getElementById('categories-bar');
const subcategoriesBar = document.getElementById('subcategories-bar');
const subcategoriesBarMobilya = document.getElementById('subcategories-bar-mobilya');
const mainImage = document.getElementById('main_image');
const subeler = document.getElementById("home");
const hakkimizda = document.getElementById('hakkimizda');
const bulasikMak = document.getElementById("bulasik");
const buzdolabiSection = document.getElementById('buzdolabi');
const galery = document.getElementById("galleryCarousel");
const kurutmalik = document.getElementById("kurutma");
const mobilyaResim = document.getElementById("galleryMobilya");
const yatakResim = document.getElementById("galleryYatak");
const dolapResim = document.getElementById("galleryDolap");
const info = document.getElementById('contact-info');
function iconClicked(){
  document.getElementById('contact-info').classList.add('active');
  info.scrollIntoView({ behavior: 'smooth', block: 'end' });
} 

function closeInfoBox () {
    document.getElementById('contact-info').classList.remove('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
function toggleCategories (){
    categoriesBar.classList.toggle('hidden');
}
function closeCategories(){
    categoriesBar.classList.add('hidden');
}
function showSubcategories(){
    subcategoriesBar.classList.remove('hidden');
}
function showMobilya(){
    subcategoriesBarMobilya.classList.remove("hidden");
}
function closeMobilya(){
    subcategoriesBarMobilya.classList.add("hidden");
}
function closeSubcategories(){
    subcategoriesBar.classList.add('hidden');
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
    mobilyaResim.style.display="none";
    yatakResim.style.display = "none";
    dolapResim.style.display = "none";
    window.scrollTo({ top: 0, behavior: 'smooth' });

}
function showBuzdolabi() {
    buzdolabiSection.style.display = 'flex';
    categoriesBar.classList.add('hidden');
    subcategoriesBar.classList.add('hidden');
    mainImage.classList.add('hidden');
    subeler.classList.add("hidden");
    bulasikMak.style.display = "none";
    camasirMakineleri.style.display = "none";
    hakkimizda.style.display = "none";
    galery.classList.add('hidden');
    kurutmalik.style.display = "none";
    mobilyaResim.style.display="none";
    yatakResim.style.display = "none";
    dolapResim.style.display = "none";
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
    mobilyaResim.style.display="none";
    yatakResim.style.display = "none";
    dolapResim.style.display = "none";
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
    mobilyaResim.style.display="none";
    yatakResim.style.display = "none";
    dolapResim.style.display = "none";
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
    mobilyaResim.style.display="none";
    yatakResim.style.display = "none";
    dolapResim.style.display = "none";
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
    mobilyaResim.style.display="none";
    yatakResim.style.display = "none";
    dolapResim.style.display = "none";
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
function showMobilyaResim(){
    bulasikMak.style.display = "none";
    categoriesBar.classList.add('hidden');
    subcategoriesBar.classList.add('hidden');
    subcategoriesBarMobilya.classList.add("hidden");
    mainImage.classList.add('hidden');
    subeler.classList.add("hidden");
    camasirMakineleri.style.display = "none";
    buzdolabiSection.style.display = 'none'; 
    hakkimizda.style.display = "none";
    galery.classList.add('hidden');
    kurutmalik.style.display = "none";
    mobilyaResim.style.display = "flex";
    yatakResim.style.display = "none";
    dolapResim.style.display = "none";
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
function showYatakResim(){
    bulasikMak.style.display = "none";
    categoriesBar.classList.add('hidden');
    subcategoriesBar.classList.add('hidden');
    subcategoriesBarMobilya.classList.add("hidden");
    mainImage.classList.add('hidden');
    subeler.classList.add("hidden");
    camasirMakineleri.style.display = "none";
    buzdolabiSection.style.display = 'none'; 
    hakkimizda.style.display = "none";
    galery.classList.add('hidden');
    kurutmalik.style.display = "none";
    mobilyaResim.style.display = "none";
    yatakResim.style.display = "flex";
    dolapResim.style.display = "none";
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
function showDolapResim(){
    bulasikMak.style.display = "none";
    categoriesBar.classList.add('hidden');
    subcategoriesBar.classList.add('hidden');
    subcategoriesBarMobilya.classList.add("hidden");
    mainImage.classList.add('hidden');
    subeler.classList.add("hidden");
    camasirMakineleri.style.display = "none";
    buzdolabiSection.style.display = 'none'; 
    hakkimizda.style.display = "none";
    galery.classList.add('hidden');
    kurutmalik.style.display = "none";
    mobilyaResim.style.display = "none";
    yatakResim.style.display = "none";
    dolapResim.style.display = "flex";
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
