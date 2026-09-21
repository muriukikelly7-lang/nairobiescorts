const counties = [
  'Kiambu',
  'Kisumu',
  'Machakos',
  'Mombasa',
  'Nairobi',
  'Nakuru',
  'Baringo',
  'Bomet',
  'Bungoma',
  'Busia',
  'Elgeyo-Marakwet',
  'Embu',
  'Garissa',
  'Homa Bay',
  'Isiolo',
  'Kajiado',
  'Kakamega',
  'Kericho',
  'Kilifi',
  'Kirinyaga',
  'Kisii',
  'Kitui',
  'Kwale',
  'Laikipia',
  'Lamu',
  'Makueni',
  'Mandera',
  'Marsabit',
  'Meru',
  'Migori',
  "Murang'a",
  'Nandi',
  'Narok',
  'Nyamira',
  'Nyandarua',
  'Nyeri',
  'Samburu',
  'Siaya',
  'Taita-Taveta',
  'Tana River',
  'Tharaka-Nithi',
  'Trans Nzoia',
  'Turkana',
  'Uasin Gishu',
  'Vihiga',
  'Wajir',
  'West Pokot'
];

const towns = [
  'Kiambu',
  'Eldoret',
  'Kisumu',
  'Mombasa',
  'Nanyuki',
  'Naivasha',
  'Embu Town',
  'Kisii Town',
  'Nyeri Town',
  'Meru Town',
  'Nakuru',
  'Isiolo Town',
  'Wangige',
  'Narok town',
  'Kakamega Town',
  'Voi',
  'Machakos Town',
  'Bungoma Town',
  'Nyahururu',
  'Limuru',
  'Kitui Town',
  'Migori Town',
  "Murang'a Town",
  'Kericho Town',
  'Karatina',
  'Kitale',
  'Kilifi Town',
  'Kerugoya',
  'Chuka',
  'Bomet',
  'Kenol',
  'Diani',
  'Homa Bay Town',
  'Mwea',
  'Ol Kalou',
  'Bondo',
  'Rodi Kopany',
  'Kiambaa',
  'Likoni',
  'Kajiado Town',
  'Chogoria',
  'Sagana',
  'Ukunda',
  'Gatundu South',
  'Kabarnet'
];

const roads = [
  'Riara Road',
  'Magadi Road',
  'Argwings Kodhek Rd',
  'Old Malindi road',
  'Links road',
  'Malindi Road',
  'Nyali Road',
  'Ndundori Road',
  'Garissa Road',
  'James Gichuru Road',
  'Nairobi - Nyeri Highway',
  'Nyeri - Nanyuki Road',
  'Nyeri - Nyahuru Road',
  'Embu - Meru Highway',
  'Embu - Siakago Highway',
  'Embu - Nairobi Highway',
  'Southern Bypass',
  'Mwembe Road',
  'Kisii Jogoo Road',
  'Kisii Bomet Highway',
  'Gitanga Road',
  'Naivasha Road',
  'Northern Bypass',
  'Eastern Bypass',
  'Solai Road',
  'Manyanja Rd',
  'Waiyaki Way',
  'Kiambu Road',
  'Langata Road',
  'Outering Road',
  'Kangundo Road',
  'Ngong Road',
  'Kamiti Road',
  'Jogoo Road',
  'Mombasa Road',
  'Thika Road'
];

const popularCounties = counties.slice(0, 6);
const otherCounties = counties.slice(6);

const regionPaths = {
  Kiambu: 'kiambu-county-escorts-and-call-girls-from-kiambu-county/',
  Kisumu: 'kisumu-escorts-and-call-girls-offering-hot-massage-and-escorts-services/',
  Machakos: 'machakos-escorts-and-call-girls-in-ukambani/',
  Mombasa: 'mombasa-county-escorts-and-call-girls-from-mombasa-county/',
  Nairobi: 'nairobi-county-escorts-and-call-girls-from-nairobi-county/',
  Nakuru: 'nakuru-county-escorts-and-call-girls-from-nakuru-county/',
  Baringo: 'baringo-county-escorts-and-call-girls-from-baringo-county/',
  Bomet: 'bomet-escorts-and-call-girls-from-bomet/',
  Bungoma: 'bungoma-escorts/',
  Busia: 'busia-escorts/',
  'Elgeyo-Marakwet': 'elgeyo-marakwet-county-escorts-and-call-girls-from-elgeyo-marakwet-county/',
  Embu: 'embu-escorts/',
  Garissa: 'garissa-escorts-and-call-girls-from-garissa/',
  'Homa Bay': 'homa-bay-county-escorts-and-call-girls-from-homa-bay-county/',
  Isiolo: 'isiolo-escorts-and-call-girls-from-isiolo/',
  Kajiado: 'kajiado-county-escorts-and-call-girls-from-kajiado-county/',
  Kakamega: 'kakamega-escorts-and-call-girls-in-kakamega/',
  Kericho: 'kericho-escorts/',
  Kilifi: 'hookup-with-kilifi-escorts-today-the-best-escorts-and-call-girls-in-kilifi-county/',
  Kirinyaga: 'kirinyaga-escorts-and-call-girls-from-kirinyaga/',
  Kisii: 'kisii-escorts/',
  Kitui: 'kitui-escorts-and-call-girls-from-kitui/',
  Kwale: 'kwale-county-escorts-and-call-girls-from-kwale-county/',
  Laikipia: 'laikipia-county-escorts-and-call-girls-from-laikipia-county/',
  Lamu: 'lamu-county-escorts-and-call-girls-from-lamu-county/',
  Makueni: 'makueni-escorts-and-call-girls-from-makueni/',
  Mandera: 'mandera-county-escorts-and-call-girls-from-mandera-county/',
  Marsabit: 'marsabit-county-escorts-and-call-girls-from-marsabit-county/',
  Meru: 'meru-escorts-escorts-and-call-girls-from-meru-land/',
  Migori: 'migori-escorts-and-call-girls-in-migori-county/',
  "Murang'a": 'muranga-escorts/',
  Nandi: 'nandi-county-escorts-and-call-girls-from-nandi-county/',
  Narok: 'narok-escorts-and-call-girls-offering-erotic-massage-and-escorts-services/',
  Nyamira: 'nyamira-escorts-and-call-girls-from-nyamira-county/',
  Nyandarua: 'nyandarua-county-escorts-and-call-girls-from-nyandarua-county/',
  Nyeri: 'nyeri-escorts-fuck-hot-kenyan-escorts-in-nyeri/',
  Samburu: 'samburu-county-escorts-and-call-girls-from-samburu-county/',
  Siaya: 'siaya-escorts-and-call-girls-from-siaya-county/',
  'Taita-Taveta': 'taita-taveta-county-escorts-and-call-girls-from-taita-taveta-county/',
  'Tana River': 'tana-river-county-escorts-and-call-girls-from-tana-river-county/',
  'Tharaka-Nithi': 'tharaka-nithi-escorts-and-call-girls-from-tharaka-nithi-county/',
  'Trans Nzoia': 'trans-nzoia-county-escorts-and-call-girls-from-trans-nzoia-county/',
  Turkana: 'turkana-county-escorts-and-call-girls-from-turkana-county/',
  'Uasin Gishu': 'uasin-gishu-county-escorts-and-call-girls-from-uasin-gishu-county/',
  Vihiga: 'vihiga-county-escorts-and-call-girls-from-vihiga-county/',
  Wajir: 'wajir-county-escorts-and-call-girls-from-wajir-county/',
  'West Pokot': 'west-pokot-escorts-and-call-girls-from-west-pokot-county/',
  Eldoret: 'eldoret-raha/',
  Juja: 'juja-escorts-juja-call-girls/',
  'Embu Town': 'embu-escorts/',
  'Kisii Town': 'kisii-escorts/',
  'Nyeri Town': 'nyeri-escorts-fuck-hot-kenyan-escorts-in-nyeri/',
  'Meru Town': 'meru-escorts-escorts-and-call-girls-from-meru-land/',
  'Isiolo Town': 'isiolo-escorts-and-call-girls-from-isiolo/',
  'Narok town': 'narok-escorts-and-call-girls-offering-erotic-massage-and-escorts-services/',
  'Kakamega Town': 'kakamega-escorts-and-call-girls-in-kakamega/',
  'Machakos Town': 'machakos-escorts-and-call-girls-in-ukambani/',
  'Bungoma Town': 'bungoma-escorts/',
  'Kitui Town': 'kitui-escorts-and-call-girls-from-kitui/',
  'Migori Town': 'migori-escorts-and-call-girls-in-migori-county/',
  "Murang'a Town": 'muranga-escorts/',
  'Kericho Town': 'kericho-escorts/',
  'Kilifi Town': 'hookup-with-kilifi-escorts-today-the-best-escorts-and-call-girls-in-kilifi-county/',
  'Homa Bay Town': 'homa-bay-county-escorts-and-call-girls-from-homa-bay-county/',
  'Kajiado Town': 'kajiado-county-escorts-and-call-girls-from-kajiado-county/',
  Kabarnet: 'baringo-county-escorts-and-call-girls-from-baringo-county/',
  Kilimani: 'kilimani-escorts/',
  Mwea: 'mwea-escorts-and-call-girls-from-mwea-in-kirinyaga-county/',
  'Nairobi Town': 'exotic-escorts-in-nairobi/',
  Naivasha: 'naivasha-escorts/',
  Nanyuki: 'nanyuki-escorts-nanyuki-call-girls/',
  Ngong: 'ngong-escorts/',
  'Ol Kalou': 'ol-kalou-escorts-and-call-girls-from-ol-kalou/',
  'Ongata Rongai': 'rongai-escorts/',
  Roysambu: 'roysambu-escort-call-girls/',
  Ruiru: 'ruiru-escorts/',
  Thika: 'thika-escorts/',
  Voi: 'voi-escorts-fuck-hot-kenyan-escorts-in-voi/',
  Westlands: 'west-lands-escorts/',
  'Riara Road': 'riara-road-escorts-and-call-girls-from-riara-road/',
  'Magadi Road': 'magadi-road-escorts-and-call-girls-from-magadi-rd/',
  'Argwings Kodhek Rd': 'argwings-kodhek-road-escorts-and-call-girls/',
  'Old Malindi road': 'old-malindi-road-escorts-and-call-girls-from-old-malindi-road-in-mombasa-county/',
  'Links road': 'links-road-escorts-and-call-girls-along-links-road-in-mombasa/',
  'Malindi Road': 'malindi-road-escorts-and-call-girls-from-malindi-road-in-mombasa/',
  'Nyali Road': 'nyali-road-escorts-and-call-girls-along-nyali-road-in-mombasa/',
  'Ndundori Road': 'ndundori-road-escorts-and-call-girls-from-ndundori-road-in-nakuru/',
  'Garissa Road': 'garissa-road-escorts-and-call-girls-from-garissa-road/',
  'James Gichuru Road': 'james-gichuru-road-escorts-and-call-girls-from-james-gichuru-rd/',
  'Nairobi - Nyeri Highway': 'nairobi-nyeri-highway-escorts-and-call-girls/',
  'Nyeri - Nanyuki Road': 'nyeri-nanyuki-road-escorts-and-call-girls/',
  'Nyeri - Nyahuru Road': 'nyeri-nyahuru-road-escorts-and-call-girls/',
  'Embu - Meru Highway': 'embu-meru-highway-escorts-and-call-girls/',
  'Embu - Siakago Highway': 'embu-siakago-highway-escorts-and-call-girls/',
  'Embu - Nairobi Highway': 'embu-nairobi-highway-escorts-and-call-girls/',
  'Southern Bypass': 'southern-bypass-escorts-and-call-girls-from-southern-bypass/',
  'Mwembe Road': 'mwembe-road-escorts-and-call-girls-from-kisii/',
  'Kisii Jogoo Road': 'kisii-jogoo-road-escorts-and-call-girls/',
  'Kisii Bomet Highway': 'kisii-bomet-highway-escorts/',
  'Gitanga Road': 'gitanga-road-escorts-and-call-girls-from-gitanga-road/',
  'Naivasha Road': 'naivasha-road-escorts/',
  'Northern Bypass': 'northern-bypass-escorts-and-call-girls/',
  'Eastern Bypass': 'eastern-bypass-escorts-and-call-girls-nairobi-raha-bypass-escorts/',
  'Solai Road': 'solai-road-escorts-and-call-girls-from-solai-road-nakuru/',
  'Manyanja Rd': 'manyanja-road-escorts-and-call-girls-from-manyanja-road/',
  'Waiyaki Way': 'waiyaki-way-escorts/',
  'Kiambu Road': 'kiambu-road-escorts/',
  'Langata Road': 'langata-road-escorts/',
  'Outering Road': 'outering-road-escorts/',
  'Kangundo Road': 'kangundo-road-escorts-2/',
  'Ngong Road': 'ngong-road-escorts-call-girls/',
  'Kamiti Road': 'kamiti-road-escorts-and-call-girls-along-kamiti-road-offering-massage-and-escorts-services/',
  'Jogoo Road': 'jogoo-road/',
  'Mombasa Road': 'mombasa-road-escorts/',
  'Thika Road': 'thika-road-escorts/'
};

const regionUrl = (item) => {
  const fallback = item.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  return `#region=${encodeURIComponent(regionPaths[item] || `${fallback}-escorts/`)}`;
};

const countiesGrid = document.getElementById('countiesGrid');
const popularCountiesGrid = document.getElementById('popularCountiesGrid');
const townsGrid = document.getElementById('townsGrid');
const roadsGrid = document.getElementById('roadsGrid');

const renderLinks = (container, items) => {
  if (!container) return;
  container.innerHTML = items
    .map((item) => `<a href="${regionUrl(item)}">${item}</a>`)
    .join('');
};

renderLinks(popularCountiesGrid, popularCounties);
renderLinks(countiesGrid, otherCounties);
renderLinks(townsGrid, towns);
renderLinks(roadsGrid, roads);

const pageTitle = document.querySelector('.page-title');
const regionLinks = document.querySelectorAll('.link-grid a');
const regionDetail = document.querySelector('.region-detail');
const regionDetailTitle = document.querySelector('.region-detail-title');
const regionName = document.querySelector('.region-name');
const regionAction = document.querySelector('.region-action');
const directorySections = document.querySelectorAll('.directory-block');

const showRegion = (link) => {
  const region = link.textContent.trim();
  if (!pageTitle || !region) return;
  if (region === 'HOME') {
    pageTitle.textContent = 'Nairobi Sex Girls - Hot Kenya Escorts - Nairobi Escorts Girls | Nairobi Hot';
    document.title = 'Nairobi Hot';
    regionDetail.hidden = true;
    directorySections.forEach((section) => { section.hidden = false; });
    regionLinks.forEach((item) => item.classList.remove('is-selected'));
    return;
  }
  pageTitle.textContent = `${region} Escorts - Hot Kenya Escorts - Nairobi Hot`;
  document.title = `${region} Escorts - Nairobi Hot`;
  regionDetailTitle.textContent = `Hook up with ${region} Escorts and Call Girls from ${region} Escorts in Nairobi`;
  regionName.textContent = `${region} Escorts and Call Girls from ${region}`;
  regionAction.textContent = region;
  regionAction.href = link.getAttribute('href');
  regionDetail.hidden = false;
  directorySections.forEach((section) => { section.hidden = true; });
  regionLinks.forEach((item) => item.classList.toggle('is-selected', item === link));
};

regionLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    window.history.pushState(null, '', link.getAttribute('href'));
    showRegion(link);
  });
});

const applyRegionFromHash = () => {
  const route = window.location.hash;
  if (!route.startsWith('#region=')) return;
  const link = [...regionLinks].find((item) => item.getAttribute('href') === route);
  if (link) showRegion(link);
};

window.addEventListener('hashchange', applyRegionFromHash);
applyRegionFromHash();

const menuToggle = document.querySelector('.burger');
const nav = document.querySelector('.primary-nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('is-open');
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => nav.classList.remove('is-open'));
  });
}
