/**
 * Clash Royale Web Engine v26.0 - النسخة المحسنة مع الأسماء العربية
 */

const PROXY_BASE = "https://Anaswah20011.pythonanywhere.com";

const GOLD_LADDER = [0, 0, 5, 20, 50, 150, 400, 1000, 2000, 4000, 8000, 15000, 25000, 40000, 60000, 90000, 120000];
const MAX_LEVEL = GOLD_LADDER.length - 1;

const CARD_LADDER = {
  "common":     [0, 1, 2, 4, 10, 20, 50, 100, 200, 400, 800, 1000, 1500, 2500, 3500, 5500, 7500],
  "rare":       [0, 0, 0, 1, 2, 4, 10, 20, 50, 100, 200, 300, 400, 550, 750, 1000, 1400],
  "epic":       [0, 0, 0, 0, 0, 0, 1, 2, 4, 10, 20, 30, 50, 70, 100, 130, 180],
  "legendary":  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 4, 6, 9, 12, 14, 20],
  "champion":   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 5, 8, 11, 15]
};

const UPGRADE_XP_REWARD = [0, 0, 4, 5, 6, 10, 25, 50, 100, 200, 400, 600, 800, 1600, 2000, 50000, 200000];

const XP_LADDER = [
  0, 20, 50, 50, 50, 80, 120, 125, 130, 145, 200,
  220, 280, 300, 350, 450, 550, 650, 800, 1200, 1400,
  1600, 2000, 2300, 2700, 3000, 4000, 4600, 5400, 6000, 7000,
  8000, 9000, 11000, 12500, 12500, 12500, 12500, 15000, 18000, 22000,
  25000, 25000, 25000, 25000, 25000, 25000, 25000, 25000, 25000, 25000,
  40000, 55000, 70000, 85000, 100000, 115000, 130000, 145000, 160000, 180000,
  200000, 220000, 240000, 260000, 280000, 300000, 320000, 340000, 360000, 390000,
  420000, 450000, 550000, 600000, 700000, 800000, 900000, 1000000, 1100000, 1200000,
  1300000, 1400000, 1500000, 1600000, 1700000, 1800000, 1900000, 2000000, 2100000, 2200000
];

const START_LVL = { "common": 1, "rare": 3, "epic": 6, "legendary": 9, "champion": 11 };
const RARITY_RANK = { "champion": 1, "legendary": 2, "epic": 3, "rare": 4, "common": 5 };
const CHAMPION_NAMES = ["Skeleton King", "Golden Knight", "Archer Queen", "Mighty Miner", "Monk", "Little Prince", "Goblinstein", "Boss Bandit"];

// ===== خريطة الترجمة العربية للبطاقات =====
const CARD_NAME_AR = {
  // القوات العادية
  "Knight": "الفارس",
  "Archers": "راميات السهام",
  "Goblins": "غيلان",
  "Giant": "العملاق",
  "P.E.K.K.A": "بيكا",
  "Minions": "كائنات المينيون",
  "Balloon": "بالون",
  "Witch": "ساحرة",
  "Barbarians": "برابرة",
  "Golem": "جولم",
  "Skeletons": "هياكل عظمية",
  "Valkyrie": "فالكيري",
  "Skeleton Army": "جيش الهياكل العظمية",
  "Bomber": "مفجر",
  "Musketeer": "الفارسة",
  "Baby Dragon": "التنين الصغير",
  "Prince": "الأمير",
  "Wizard": "الساحر",
  "Mini P.E.K.K.A": "بيكا صغير",
  "Spear Goblins": "غيلان الرمح",
  "Giant Skeleton": "هيكل عظمي عملاق",
  "Hog Rider": "راكب الخنزير",
  "Minion Horde": "حشد المينيون",
  "Ice Wizard": "الساحر الجليدي",
  "Royal Giant": "العملاق الملكي",
  "Guards": "الحراس",
  "Princess": "الأميرة",
  "Dark Prince": "أمير الظلام",
  "Three Musketeers": "الفارسات الثلاث",
  "Lava Hound": "كلب الحمم",
  "Ice Spirit": "الروح الجليدية",
  "Fire Spirit": "الروح النارية",
  "Miner": "عامل منجم",
  "Sparky": "سباركي",
  "Bowler": "باولر",
  "Lumberjack": "الحطّاب",
  "Battle Ram": "مدق المعركة",
  "Inferno Dragon": "تنين الجحيم",
  "Ice Golem": "جولم الجليد",
  "Mega Minion": "مينيون عملاق",
  "Dart Goblin": "غول نفخ السهام",
  "Goblin Gang": "عصابة الغيلان",
  "Electro Wizard": "الساحر الكهربائي",
  "Elite Barbarians": "البرابرة المميزون",
  "Hunter": "الصياد",
  "Executioner": "السياف",
  "Bandit": "قاطعة الطريق",
  "Royal Recruits": "المجندون الملكيون",
  "Night Witch": "ساحرة الليل",
  "Bats": "خفافيش",
  "Royal Ghost": "شبح ملكي",
  "Ram Rider": "راكبة الكباش",
  "Zappies": "الصواعق الصغيرة",
  "Rascals": "الأشقياء",
  "Cannon Cart": "عربة المدفع",
  "Mega Knight": "الفارس العملاق",
  "Skeleton Barrel": "برميل الهياكل العظمية",
  "Flying Machine": "الآلة الطائرة",
  "Wall Breakers": "مدمرا الجدران",
  "Royal Hogs": "الخنازير الملكية",
  "Goblin Giant": "الغول العملاق",
  "Fisherman": "الصياد",
  "Magic Archer": "رامي السهام السحري",
  "Electro Dragon": "التنين الكهربائي",
  "Firecracker": "رامية المفرقعات",
  "Mighty Miner": "عامل المنجم العظيم",
  "Elixir Golem": "جولم الإكسير",
  "Battle Healer": "المعالجة القتالية",
  "Skeleton King": "ملك الهياكل العظمية",
  "Archer Queen": "ملكة رامية السهام",
  "Golden Knight": "الفارس الذهبي",
  "Monk": "الناسك",
  "Skeleton Dragons": "التنانين العظمية",
  "Mother Witch": "ساحرة الأم",
  "Electro Spirit": "الروح الكهربائية",
  "Electro Giant": "العملاق الكهربائي",
  "Phoenix": "العنقاء",
  "Little Prince": "الأمير الصغير",
  "Goblin Demolisher": "الغول المدمر",
  "Goblin Machine": "آلة الغوبلن",
  "Suspicious Bush": "الشجيرة المريبة",
  "Goblinstein": "غوبلنشتاين",
  "Rune Giant": "عملاق التمائم",
  "Berserker": "المحاربة البرسركية",
  "Boss Bandit": "زعيمة قطاع الطرق",
  // الأبراج
  "Tower Princess": "أميرة البرج",
  "Cannoneer": "مدفعي",
  "Dagger Duchess": "دوقة الخناجر",
  "Royal Chef": "الطاهي الملكي",
  // التعاويذ والبناءات
  "Cannon": "مدفع",
  "Goblin Hut": "كوخ الغيلان",
  "Mortar": "مدفع الهاون",
  "Inferno Tower": "برج الجحيم",
  "Bomb Tower": "برج القنبلة",
  "Barbarian Hut": "كوخ البرابرة",
  "Tesla": "تسلا",
  "Elixir Collector": "جامع الإكسير",
  "X-Bow": "القوس",
  "Tombstone": "شاهد القبر",
  "Furnace": "الفرن",
  "Goblin Cage": "قفص الغيلان",
  "Goblin Drill": "حفار الغيلان",
  "Fireball": "الكرة النارية",
  "Arrows": "سهام",
  "Rage": "الغضب",
  "Rocket": "الصاروخ",
  "Goblin Barrel": "برميل الغيلان",
  "Freeze": "تجميد",
  "Mirror": "مرآة",
  "Lightning": "برق",
  "Zap": "الصاعق",
  "Poison": "السم",
  "Graveyard": "المقبرة",
  "The Log": "الجذع",
  "Tornado": "إعصار",
  "Clone": "استنساخ",
  "Earthquake": "الزلزال",
  "Barbarian Barrel": "برميل البرابرة",
  "Heal Spirit": "روح الشفاء",
  "Giant Snowball": "كرة الثلج العملاقة",
  "Royal Delivery": "الطرد الملكي",
  "Void": "العدم",
  "Goblin Curse": "لعنة الغيلان",
  "Spirit Empress": "إمبراطورة الأرواح",
  "Vines": "اللبلاب"
};

// دالة ترجمة اسم البطاقة
function translateCardName(englishName) {
  if (!englishName) return "غير معروف";
  // التحقق من الخريطة
  if (CARD_NAME_AR[englishName]) {
    return CARD_NAME_AR[englishName];
  }
  // إذا لم يوجد، نعيد الاسم الأصلي (قد يكون بطاقة جديدة)
  return englishName;
}

const RARITY_DB = {
  "26000069": "champion", "26000074": "champion", "26000072": "champion", "26000065": "champion", 
  "26000077": "champion", "26000093": "champion", "26000099": "champion", "26000103": "champion",
  "159000000": "common", "159000001": "epic", "159000002": "legendary", "159000004": "legendary"
};

const BACKUP_TOWERS = [
  { id: 159000000, name: "Tower Princess", rarity: "common" },
  { id: 159000001, name: "Cannoneer", rarity: "epic" },
  { id: 159000002, name: "Dagger Duchess", rarity: "legendary" },
  { id: 159000004, name: "Royal Chef", rarity: "legendary" }
];

Chart.defaults.color = '#a1a1aa';
Chart.defaults.font.family = "'Inter', sans-serif";

let chartGold, chartCards, chartXp, chartLevels, chartWinLoss;
let globalResults = []; 
let globalMinLevel = 14;
let currentActiveFilter = 'all';

// ----- صورة تخزين مؤقت -----
const imageCache = new Map();
const CACHE_VERSION = 'v2';

async function getCachedImageUrl(url, cardName) {
    if (!url) return "";
    if (imageCache.has(url)) return imageCache.get(url);
    const cacheKey = `img_${CACHE_VERSION}_${cardName.replace(/[^a-z0-9]/gi, '_')}`;
    const cached = localStorage.getItem(cacheKey);
    if (cached) {
        imageCache.set(url, cached);
        return cached;
    }
    try {
        const res = await fetch(url);
        const blob = await res.blob();
        const dataUrl = await new Promise((resolve) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.readAsDataURL(blob);
        });
        try { localStorage.setItem(cacheKey, dataUrl); } catch(e) {}
        imageCache.set(url, dataUrl);
        return dataUrl;
    } catch (e) {
        console.warn(`فشل تحميل الصورة ${cardName}`, e);
        return url;
    }
}

async function loadImagesWithCache() {
    const images = document.querySelectorAll('.card-img');
    for (let img of images) {
        const originalSrc = img.getAttribute('data-original-src') || img.src;
        if (originalSrc && !originalSrc.startsWith('data:')) {
            const cardName = img.closest('.card-cell')?.querySelector('span')?.innerText || '';
            const cached = await getCachedImageUrl(originalSrc, cardName);
            if (cached !== originalSrc) {
                img.src = cached;
                img.setAttribute('data-original-src', originalSrc);
            }
        }
    }
}

function getCardImageUrl(cardName) {
    if (!cardName) return "";
    let cleanName = cardName.toLowerCase().replace(/\./g, '').replace(/\s+/g, '-');
    return `https://cdn.royaleapi.com/static/img/cards/${cleanName}.png`;
}

// ----- دوال مساعدة -----
function safeGetUpgradeXp(level) {
    if (level >= 1 && level < UPGRADE_XP_REWARD.length) return UPGRADE_XP_REWARD[level];
    return 0;
}

function calculateTotalXpToLevel(level) {
    let total = 0;
    for (let i = 1; i < level && i < XP_LADDER.length; i++) total += XP_LADDER[i];
    return total;
}

function openTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    let activeBtn = document.querySelector(`.tab-btn[onclick*="${tabId}"]`);
    if(activeBtn) activeBtn.classList.add('active');
}

function filterCards(filterType) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    let activeBtn = document.querySelector(`.filter-btn[onclick*="${filterType}"]`);
    if(activeBtn) activeBtn.classList.add('active');
    currentActiveFilter = filterType;
    renderMainTable(); 
    let tableContainer = document.querySelector('.table-container');
    if (tableContainer) tableContainer.scrollTop = 0;
}

document.addEventListener("DOMContentLoaded", () => {
    loadTagHistory();
    document.getElementById("playerTag").addEventListener("keypress", function(event) {
        if (event.key === "Enter") { event.preventDefault(); startAnalysis(); }
    });
});

function loadTagHistory() {
    let history = JSON.parse(localStorage.getItem("cr_tag_history")) || [];
    let datalist = document.getElementById("tagHistory");
    if(datalist) {
        datalist.innerHTML = "";
        history.forEach(tag => {
            let option = document.createElement("option"); option.value = tag; datalist.appendChild(option);
        });
    }
    if (!document.getElementById("playerTag").value && history.length > 0) {
        document.getElementById("playerTag").value = history[0];
    }
}

function saveTagToHistory(tag) {
    if(!tag) return;
    let history = JSON.parse(localStorage.getItem("cr_tag_history")) || [];
    history = history.filter(t => t !== tag);
    history.unshift(tag);
    if (history.length > 10) history.pop();
    localStorage.setItem("cr_tag_history", JSON.stringify(history));
    loadTagHistory();
}

async function fetchAllCards() {
    let cached = localStorage.getItem("cr_allcards");
    if (cached) return JSON.parse(cached);
    let res = await fetch(`${PROXY_BASE}/allcards`);
    if (!res.ok) throw new Error("فشل في جلب جميع البطاقات");
    let data = await res.json();
    localStorage.setItem("cr_allcards", JSON.stringify(data));
    return data;
}

function getProgressBar(pct, colorHex) {
    let pctVal = Math.min(100, Math.max(0, pct * 100));
    return `<div class="table-progress-bg">
                <div class="table-progress-fill" style="width:${pctVal}%; background-color:${colorHex};"></div>
                <span class="table-progress-text">${pctVal.toFixed(1)}%</span>
            </div>`;
}

async function startAnalysis() {
    let rawTag = document.getElementById("playerTag").value.trim().toUpperCase();
    let tag = rawTag.startsWith("#") ? rawTag.substring(1) : rawTag;
    let statusMsg = document.getElementById("statusMessage");
    let dash = document.getElementById("dashboard");

    if (!tag) { statusMsg.innerText = "الرجاء إدخال وسم لاعب صحيح!"; return; }

    saveTagToHistory(tag);
    statusMsg.innerHTML = `<i class="fa-solid fa-circle-notch fa-spin"></i> جاري الاتصال بخوادم سوبرسل...`;
    statusMsg.style.color = "#3b82f6";
    dash.classList.remove("hidden"); 
    dash.style.opacity = "0.5"; 

    const fetchWithRetry = async (url, retries = 1) => {
        for (let i = 0; i <= retries; i++) {
            try {
                const res = await fetch(url, { cache: "no-store" });
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                return await res.json();
            } catch (err) {
                if (i === retries) throw err;
                await new Promise(r => setTimeout(r, 1000));
                statusMsg.innerHTML = `<i class="fa-solid fa-circle-notch fa-spin"></i> إعادة المحاولة (${i+1}/${retries})...`;
            }
        }
    };

    try {
        let pData = await fetchWithRetry(`${PROXY_BASE}/player?tag=${tag}&_t=${new Date().getTime()}`);
        
        statusMsg.innerHTML = `<i class="fa-solid fa-microchip fa-spin"></i> جاري معالجة بيانات اللعبة...`;
        let gCardsRaw = await fetchAllCards();

        let gCards = Array.isArray(gCardsRaw) ? gCardsRaw : [];
        let pCards = Array.isArray(pData.cards) ? pData.cards : [];
        let pSupport = Array.isArray(pData.supportCards) ? pData.supportCards : [];

        const existingIDs = new Set(gCards.map(c => c.id));
        pSupport.forEach(sc => { if (!existingIDs.has(sc.id)) { gCards.push({ id: sc.id, name: sc.name, rarity: sc.rarity }); existingIDs.add(sc.id); } });
        BACKUP_TOWERS.forEach(bt => { if (!existingIDs.has(bt.id)) { gCards.push(bt); existingIDs.add(bt.id); } });

        const pMap = {};
        [...pCards, ...pSupport].forEach(c => pMap[c.id] = c);

        let minAccountLevel = MAX_LEVEL;
        let spent = 0, rem = 0, maxedCount = 0, cardCollTotal = 0, cardReqTotal = 0;
        let missingByRarity = { "common": 0, "rare": 0, "epic": 0, "legendary": 0, "champion": 0 };
        let rarityStats = { "common": {gs:0, gr:0, cs:0, ct:0}, "rare": {gs:0, gr:0, cs:0, ct:0}, "epic": {gs:0, gr:0, cs:0, ct:0}, "legendary": {gs:0, gr:0, cs:0, ct:0}, "champion": {gs:0, gr:0, cs:0, ct:0} };
        let towerS = 0, towerR = 0, towerCS = 0, towerCT = 0;
        
        let levelCounts = Array(17).fill(0);
        
        let starPointsSpent = 0;
        [...pCards, ...pSupport].forEach(c => {
            if (c.starLevel) {
                if (c.starLevel >= 1) starPointsSpent += 10000;
                if (c.starLevel >= 2) starPointsSpent += 15000;
                if (c.starLevel >= 3) starPointsSpent += 20000;
            }
        });

        globalResults = gCards.map(gCard => {
            const pCard = pMap[gCard.id];
            const isOwned = !!pCard;
            let rarity = "common";
            if (RARITY_DB[gCard.id] || RARITY_DB[String(gCard.id)]) rarity = RARITY_DB[gCard.id] || RARITY_DB[String(gCard.id)];
            else if (CHAMPION_NAMES.includes(gCard.name)) rarity = "champion";
            else if (gCard.rarity) rarity = gCard.rarity.toLowerCase();

            const currentLvl = isOwned ? ((pCard.level || 0) + (START_LVL[rarity] - 1)) : 0;
            if (isOwned && currentLvl > 0 && currentLvl < minAccountLevel) minAccountLevel = currentLvl;
            if (isOwned && currentLvl > 0 && currentLvl <= 16) levelCounts[currentLvl]++;

            let goldSpent = 0, goldNeeded = 0, cardsInvested = 0, cardsTotalReq = 0, missingPerLevel = Array(MAX_LEVEL + 1).fill(0), tempStock = isOwned ? (pCard.count || 0) : 0;

            for (let l = START_LVL[rarity] + 1; l <= MAX_LEVEL; l++) {
              let cReq = CARD_LADDER[rarity] ? CARD_LADDER[rarity][l] || 0 : 0;
              cardsTotalReq += cReq;
              if (isOwned && l <= currentLvl) { goldSpent += GOLD_LADDER[l] || 0; cardsInvested += cReq; }
            }
            
            let cardsCollected = cardsInvested + tempStock;
            if(cardsCollected > cardsTotalReq) cardsCollected = cardsTotalReq; 

            const startCalc = isOwned ? currentLvl : (START_LVL[rarity] - 1);
            for (let targetLvl = startCalc + 1; targetLvl <= MAX_LEVEL; targetLvl++) {
              if (targetLvl > START_LVL[rarity]) goldNeeded += GOLD_LADDER[targetLvl] || 0;
              let req = CARD_LADDER[rarity] ? CARD_LADDER[rarity][targetLvl] || 0 : 0;
              if (tempStock >= req) tempStock -= req; else { missingPerLevel[targetLvl] = req - tempStock; tempStock = 0; }
            }

            const isTower = String(gCard.id).startsWith("15"); 
            let pctToMax = (cardsTotalReq > 0) ? (cardsCollected / cardsTotalReq) : 1;
            let pctToNext = 0; 
            if (currentLvl < MAX_LEVEL) {
               let nextReq = CARD_LADDER[rarity][currentLvl + 1] || 0;
               if (nextReq > 0) { pctToNext = Math.min(1, (isOwned ? (pCard.count || 0) : 0) / nextReq); }
            }

            spent += goldSpent; rem += goldNeeded; cardCollTotal += cardsCollected; cardReqTotal += cardsTotalReq;
            if(currentLvl === MAX_LEVEL) maxedCount++;
            let missingCards = cardsTotalReq - cardsCollected;
            if(missingCards > 0 && missingByRarity[rarity] !== undefined) missingByRarity[rarity] += missingCards;
            if (!isOwned && missingByRarity[rarity] !== undefined) missingByRarity[rarity] += cardsTotalReq;
            
            if(isTower) { towerS += goldSpent; towerR += goldNeeded; towerCS += cardsCollected; towerCT += cardsTotalReq; }
            if(rarityStats[rarity]) { rarityStats[rarity].gs += goldSpent; rarityStats[rarity].gr += goldNeeded; rarityStats[rarity].cs += cardsCollected; rarityStats[rarity].ct += cardsTotalReq; }

            // ترجمة اسم البطاقة للعربية
            const translatedName = translateCardName(gCard.name || "غير معروف");
            
            return { 
                id: gCard.id, 
                cleanName: translatedName,
                originalName: gCard.name || "غير معروف",
                imgUrl: getCardImageUrl(gCard.name), 
                rarity: rarity, 
                rarityKey: rarity, 
                actualLvl: currentLvl, 
                status: isOwned ? currentLvl : "غير مملوك", 
                stock: isOwned ? (pCard.count || 0) : 0, 
                spent: goldSpent, 
                rem: goldNeeded, 
                missingLevels: missingPerLevel, 
                isTower: isTower, 
                pctToMax: pctToMax, 
                pctToNext: pctToNext 
            };
        });

        globalMinLevel = minAccountLevel;
        const totalGold = spent + rem;
        const unownedCount = globalResults.filter(r => r.status === "غير مملوك").length;

        document.getElementById("playerGreeting").innerHTML = `<i class="fa-solid fa-user-astronaut" style="color: #3b82f6;"></i> مرحباً، <span style="color:var(--text-main);">${pData.name}</span>`;

        let daysPlayedRaw = 0;
        if(pData && pData.badges) { const badge = pData.badges.find(b => b.name === "YearsPlayed"); if(badge) daysPlayedRaw = badge.progress; }
        const today = new Date(); const creationDate = new Date(today.getTime() - (daysPlayedRaw * 24 * 60 * 60 * 1000));
        let years = today.getFullYear() - creationDate.getFullYear(); let months = today.getMonth() - creationDate.getMonth(); let days = today.getDate() - creationDate.getDate();
        if (days < 0) { months--; const prevMonthDate = new Date(today.getFullYear(), today.getMonth(), 0); days += prevMonthDate.getDate(); }
        if (months < 0) { years--; months += 12; }

        let currentExpLvl = pData.expLevel || 1;
        let currentExpPoints = pData.expPoints || 0;
        let isMaxLevelKing = (currentExpLvl >= 90);
        let totalXpOverall = calculateTotalXpToLevel(90);
        let playerTotalXp = calculateTotalXpToLevel(currentExpLvl) + currentExpPoints;
        if (playerTotalXp > totalXpOverall) playerTotalXp = totalXpOverall;
        let totalXpToMax = totalXpOverall - playerTotalXp;
        let nextLvlReq = isMaxLevelKing ? 0 : (currentExpLvl < XP_LADDER.length ? XP_LADDER[currentExpLvl] : 0);
        let xpNeededForNext = nextLvlReq - currentExpPoints;
        if (xpNeededForNext < 0) xpNeededForNext = 0;

        let xpPct = isMaxLevelKing ? 100 : (currentExpPoints / nextLvlReq) * 100;

        let ownedCards = globalResults.filter(r => r.status !== "غير مملوك" && r.actualLvl < MAX_LEVEL);
        let lowestLvl = MAX_LEVEL; ownedCards.forEach(c => { if(c.actualLvl < lowestLvl) lowestLvl = c.actualLvl; });
        let countLowest = ownedCards.filter(c => c.actualLvl === lowestLvl).length;
        let targetLvlForLowest = lowestLvl + 1;
        let xpPerUpgrade = safeGetUpgradeXp(targetLvlForLowest);
        let totalXpGain = xpPerUpgrade * countLowest;
        let totalGoldCostForMass = GOLD_LADDER[targetLvlForLowest] * countLowest;
        
        let simulatedExpPoints = currentExpPoints + totalXpGain;
        let simulatedLevel = currentExpLvl;
        while (simulatedLevel < 90 && simulatedExpPoints >= XP_LADDER[simulatedLevel]) {
            simulatedExpPoints -= XP_LADDER[simulatedLevel];
            simulatedLevel++;
        }

        let ladderXP = 0, ladderStrArr = [], xpNeededA = xpNeededForNext, lvlCounts = Array(MAX_LEVEL + 1).fill(0);
        ownedCards.forEach(c => { if(c.actualLvl < MAX_LEVEL) lvlCounts[c.actualLvl]++; });
        for (let l = 1; l < MAX_LEVEL; l++) {
            if (lvlCounts[l] > 0) {
                let xpPer = safeGetUpgradeXp(l + 1);
                if (xpPer <= 0) continue;
                let neededCards = Math.ceil(xpNeededA / xpPer), cardsToUse = Math.min(lvlCounts[l], neededCards);
                if(cardsToUse > 0) { ladderXP += cardsToUse * xpPer; xpNeededA -= cardsToUse * xpPer; ladderStrArr.push(`${cardsToUse} إلى المستوى ${l + 1}`); }
                if (xpNeededA <= 0) break;
            }
        }
        let ladderPlanStr = isMaxLevelKing ? "مكتمل!" : (ladderXP >= xpNeededForNext ? ladderStrArr.join("، ") : ladderStrArr.join("، ") + " (يحتاج المزيد)");

        let readyCards = ownedCards.filter(c => { let nextReq = CARD_LADDER[c.rarityKey][c.actualLvl + 1]; return nextReq > 0 && c.stock >= nextReq; });
        readyCards.forEach(c => { c.nextXp = safeGetUpgradeXp(c.actualLvl + 1); c.nextGold = GOLD_LADDER[c.actualLvl + 1] || 0; c.efficiency = c.nextGold > 0 ? (c.nextXp / c.nextGold) : 0; });
        readyCards.sort((a, b) => b.efficiency - a.efficiency); 
        let instantXP = 0, instantGold = 0, instantNames = [], xpNeededB = xpNeededForNext;
        for (let c of readyCards) { if (xpNeededB <= 0) break; instantXP += c.nextXp; instantGold += c.nextGold; instantNames.push(`${c.cleanName} (مستوى ${c.actualLvl + 1})`); xpNeededB -= c.nextXp; }
        let instantPlanStr = isMaxLevelKing ? "مكتمل!" : (instantXP >= xpNeededForNext ? (instantNames.length > 2 ? `${instantNames.slice(0, 2).join("، ")} +${instantNames.length - 2} بطاقات أخرى (${(instantGold/1000).toFixed(1)} ألف ذهب)` : `${instantNames.join("، ")} (${(instantGold/1000).toFixed(1)} ألف ذهب)`) : (instantXP > 0 ? `جميع الجاهزة تمنح ${instantXP} نقطة خبرة. غير كافية.` : "لا توجد بطاقات جاهزة."));

        let wins = pData.wins || 0;
        let losses = pData.losses || 0;
        let draws = Math.max(0, (pData.battleCount || 0) - wins - losses);
        
        let spAmount = pData.starPoints || 0;
        let isSpMax = spAmount === 5000000;
        let spDisplay = spAmount.toLocaleString() + (isSpMax ? ` <span class="star-max-badge">الأقصى <i class="fa-solid fa-check"></i></span>` : '');

        // تحديث DOM
        document.getElementById("legacyData").innerHTML = `
        <h3 style="color:var(--text-muted);"><i class="fa-solid fa-id-card"></i> الملف الشخصي</h3>
        <div class="cr-xp-wrapper">
            <div class="cr-xp-fill" style="width: ${xpPct}%;"></div>
            <div class="cr-xp-text">${isMaxLevelKing ? 'المستوى الأقصى' : currentExpPoints.toLocaleString() + ' / ' + nextLvlReq.toLocaleString()}</div>
            <div class="cr-xp-level"><span>${currentExpLvl}</span></div>
        </div>
        <div style="display: flex; justify-content: space-around; text-align: center; margin-top: 15px; background: rgba(0,0,0,0.2); border-radius:8px; padding:15px 5px;">
            <div><span style="font-size:20px; font-weight:700; color:var(--text-main);">${years}</span><br><span style="font-size:9px; color:var(--text-muted); letter-spacing:1px;">سنة</span></div>
            <div><span style="font-size:20px; font-weight:700; color:var(--text-main);">${String(months).padStart(2, '0')}</span><br><span style="font-size:9px; color:var(--text-muted); letter-spacing:1px;">شهر</span></div>
            <div><span style="font-size:20px; font-weight:700; color:var(--text-main);">${String(days).padStart(2, '0')}</span><br><span style="font-size:9px; color:var(--text-muted); letter-spacing:1px;">يوم</span></div>
        </div>`;
        
        document.getElementById("financialBox").innerHTML = `<h3><i class="fa-solid fa-coins" style="color:var(--accent-gold)"></i> الوضع المالي</h3>
        <table class="info-table">${'<tr><td>المنفق</td><td style="text-align:left;" class="green-text">' + spent.toLocaleString() + '</td><td style="text-align:left;">' + (spent/totalGold*100).toFixed(1) + '%</td></tr>' +
        '<tr><td>المتبقي</td><td style="text-align:left;" class="red-text">' + rem.toLocaleString() + '</td><td style="text-align:left;">' + (rem/totalGold*100).toFixed(1) + '%</td></tr>' +
        '<tr style="border-top: 1px solid var(--border-color);"><td><strong style="color:var(--text-main);">الإجمالي</strong></td><td style="text-align:left;" class="gold-text">' + totalGold.toLocaleString() + '</td><td style="text-align:left;">100%</td></tr>' + '</table>'}`;
        
        document.getElementById("collectionBox").innerHTML = `<h3><i class="fa-solid fa-layer-group" style="color:var(--accent-blue)"></i> مجموعة البطاقات</h3>
        <table class="info-table">${'<tr><td>المجمّع</td><td style="text-align:left;" class="green-text">' + cardCollTotal.toLocaleString() + '</td><td style="text-align:left;">' + (cardCollTotal/cardReqTotal*100).toFixed(1) + '%</td></tr>' +
        '<tr><td>المفقود</td><td style="text-align:left;" class="red-text">' + (cardReqTotal - cardCollTotal).toLocaleString() + '</td><td style="text-align:left;">' + ((cardReqTotal - cardCollTotal)/cardReqTotal*100).toFixed(1) + '%</td></tr>' +
        '<tr style="border-top: 1px solid var(--border-color);"><td><strong style="color:var(--text-main);">الإجمالي</strong></td><td style="text-align:left; color:var(--text-main); font-weight:bold;">' + cardReqTotal.toLocaleString() + '</td><td style="text-align:left;">100%</td></tr>' + '</table>'}`;
        
        document.getElementById("playerBox").innerHTML = `<h3><i class="fa-solid fa-chart-simple" style="color:var(--accent-purple)"></i> إحصائيات اللاعب</h3>
        <table class="info-table">
        <tr><td>النجوم</td><td style="text-align:left;" class="gold-text">${spDisplay}</td></tr>
        <tr><td>النجوم المنفقة</td><td style="text-align:left;" class="blue-text">${starPointsSpent.toLocaleString()}</td></tr>
        <tr><td>عدد البطاقات القصوى</td><td style="text-align:left;" class="green-text">${maxedCount} / ${globalResults.length}</td></tr>
        <tr><td>عدد البطاقات الغير مملوكة</td><td style="text-align:left;" class="red-text">${unownedCount}</td></tr>
        </table>`;

        let bdHTML = `<h3><i class="fa-solid fa-chart-pie"></i> توزيع الندرة</h3>
        <table class="info-table"><tr><th style="text-align:right; color:var(--text-muted); font-size:10px;">الندرة</th><th style="text-align:left; color:var(--text-muted); font-size:10px;">الذهب المنفق</th><th style="text-align:left; color:var(--text-muted); font-size:10px;">الذهب المتبقي</th><th style="text-align:left; color:var(--text-muted); font-size:10px;">% البطاقات</th></tr>`;
        const addRow = (label, obj) => { bdHTML += `<tr><td style="color:var(--text-main);">${label}</td><td style="text-align:left;">${obj.gs.toLocaleString()}</td><td style="text-align:left;">${obj.gr.toLocaleString()}</td><td style="text-align:left;">${(obj.cs/obj.ct*100).toFixed(1)}%</td></tr>`; };
        addRow("عادية", rarityStats.common); addRow("نادرة", rarityStats.rare); addRow("ممتازة", rarityStats.epic); addRow("أسطورية", rarityStats.legendary); addRow("أبطال", rarityStats.champion);
        bdHTML += `<tr style="border-top: 1px solid var(--border-color);"><td style="color:var(--accent-red); font-weight:bold;">الأبراج</td><td style="text-align:left; font-weight:bold;">${towerS.toLocaleString()}</td><td style="text-align:left; font-weight:bold;">${towerR.toLocaleString()}</td><td style="text-align:left; font-weight:bold;">${(towerCS/towerCT*100).toFixed(1)}%</td></tr></table>`;
        document.getElementById("breakdownData").innerHTML = bdHTML;

        document.getElementById("strategyData").innerHTML = `<table class="info-table">
        <tr><td>أدنى مستوى</td><td style="text-align:left;" class="gold-text">${lowestLvl}</td><td style="text-align:left;">(x${countLowest})</td></tr>
        <tr><td>المستوى المستهدف</td><td style="text-align:left;" class="gold-text">${targetLvlForLowest}</td><td style="text-align:left;"></td></tr>
        <tr><td>نقاط الخبرة المكتسبة</td><td style="text-align:left;" class="green-text">+${totalXpGain.toLocaleString()}</td><td style="text-align:left;"></td></tr>
        <tr><td>التكلفة الإجمالية</td><td style="text-align:left;" class="red-text">-${totalGoldCostForMass.toLocaleString()}</td><td style="text-align:left;"></td></tr>
        <tr style="border-top: 1px solid var(--border-color);"><td>محاكاة مستوى الملك</td><td style="text-align:left;" class="gold-text">مستوى ${simulatedLevel}</td><td style="text-align:left;"></td></tr></table>`;
        
        document.getElementById("ladderPlanText").innerText = ladderPlanStr;
        document.getElementById("instantPlanText").innerText = instantPlanStr;

        // أفضل تطويرات
        let upgradable = globalResults.filter(r => r.actualLvl < MAX_LEVEL && r.status !== "غير مملوك");
        upgradable.sort((a, b) => b.pctToNext - a.pctToNext);
        let upHTML = `
            <h3 style="color:var(--accent-green);"><i class="fa-solid fa-arrow-trend-up"></i> أفضل تطويرات 
                <div class="tooltip-container"><i class="fa-solid fa-circle-info tooltip-icon"></i><span class="tooltip-text">أقرب البطاقات لامتلاك العدد الكافي للتطوير للمستوى التالي.</span></div>
            </h3>
            <table class="info-table"><tr><th style="text-align:right; color:var(--text-muted); font-size:10px;">البطاقة</th><th style="text-align:center; color:var(--text-muted); font-size:10px;">المستوى</th><th style="text-align:left; color:var(--text-muted); font-size:10px;">التقدم</th><th style="text-align:left; color:var(--text-muted); font-size:10px;">التكلفة</th></tr>`;
        for(let i=0; i<3; i++) {
            if(upgradable[i]) { 
                let next = upgradable[i].actualLvl + 1; 
                upHTML += `<tr><td class="card-cell" style="min-width:auto; gap:8px;"><img src="${upgradable[i].imgUrl}" class="card-img" style="width:24px; height:28px;" onerror="this.style.display='none'"> <span>${upgradable[i].cleanName}</span></td><td style="text-align:center;">${next}</td><td style="text-align:left;">${getProgressBar(upgradable[i].pctToNext, '#22c55e')}</td><td style="text-align:left;" class="gold-text">${(GOLD_LADDER[next]/1000).toFixed(0)} ألف</td></tr>`; 
            } else { upHTML += `<tr><td>-</td><td style="text-align:center;">-</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr>`; }
        }
        document.getElementById("topUpgradesData").innerHTML = upHTML + `</table>`;

        // التشكيلة الحالية
        let deckIDs = new Set();
        if(pData.currentDeck) pData.currentDeck.forEach(c => deckIDs.add(c.id));
        if(pData.currentDeckSupportCards) pData.currentDeckSupportCards.forEach(c => deckIDs.add(c.id));

        let myDeckCards = globalResults.filter(r => deckIDs.has(r.id));
        let deckGoldNeeded = 0;
        myDeckCards.forEach(c => deckGoldNeeded += c.rem);
        
        let deckHTML = `<table class="info-table"><tr><td>الذهب المطلوب لتطوير التشكيله للاقصى</td><td style="text-align:left;" class="red-text">${deckGoldNeeded.toLocaleString()}</td><td style="text-align:left;"></td></tr></table>`;
        deckHTML += `<div style="margin-top:15px; display:flex; flex-wrap:wrap; gap:8px; justify-content:center;">`;
        for (let c of myDeckCards) {
            let borderColor = c.actualLvl === MAX_LEVEL ? "var(--accent-purple)" : "var(--border-color)";
            let lvlColor = c.actualLvl === MAX_LEVEL ? "color: transparent; background: linear-gradient(90deg, #fbcfe8, #d946ef); -webkit-background-clip: text; background-clip: text; font-weight:800;" : "color: var(--text-main);";
            deckHTML += `<div style="border:1px solid ${borderColor}; padding:8px 5px; border-radius:8px; text-align:center; width:65px; background: rgba(0,0,0,0.2);">
                <img src="${c.imgUrl}" style="width:35px; height:42px; object-fit:contain; filter: drop-shadow(0 2px 3px rgba(0,0,0,0.8));"><br>
                <span style="font-size:11px; font-weight:600; ${lvlColor}">مستوى ${c.actualLvl}</span>
            </div>`;
        }
        deckHTML += `</div>`;
        document.getElementById("deckData").innerHTML = deckHTML;

        // مستشار التشكيلة
        const isEpicSundayDeck = (new Date().getDay() === 0);
        let permittedDeckRarities = isEpicSundayDeck ? ["common", "rare", "epic"] : ["common", "rare"];

        let deckPriority = myDeckCards.filter(c => 
            c.actualLvl < MAX_LEVEL && permittedDeckRarities.includes(c.rarityKey) && c.pctToNext < 1
        ).sort((a,b) => {
            if (isEpicSundayDeck) {
                if (a.rarityKey === 'epic' && b.rarityKey !== 'epic') return -1;
                if (b.rarityKey === 'epic' && a.rarityKey !== 'epic') return 1;
            }
            if (a.actualLvl !== b.actualLvl) return a.actualLvl - b.actualLvl;
            return b.pctToNext - a.pctToNext;
        });
        
        let deckAdvisorBox = document.getElementById("deckAdvisorData");
        deckAdvisorBox.className = isEpicSundayDeck ? "epic-sunday-glow" : "";
        let daTitleColor = isEpicSundayDeck ? 'var(--accent-purple)' : 'var(--accent-red)';
        let daHTML = `<h3 style="color:${daTitleColor};"><i class="fa-solid fa-crosshairs"></i> مستشار التشكيلة <div class="tooltip-container"><i class="fa-solid fa-circle-info tooltip-icon"></i><span class="tooltip-text">أولوية طلب البطاقات من العشيرة. يراعي أحد البطاقات الممتازة!</span></div></h3>`;
        if (isEpicSundayDeck) daHTML += `<div class="epic-badge"><i class="fa-solid fa-wand-magic-sparkles"></i> أحد البطاقات الممتازة: الأولوية للبطاقات الممتازة!</div>`;
        daHTML += `<table class="info-table"><tr><th style="text-align:right; color:var(--text-muted); font-size:10px;">البطاقة</th><th style="text-align:center; color:var(--text-muted); font-size:10px;">المستوى</th><th style="text-align:left; color:var(--text-muted); font-size:10px;">المطلوب</th><th style="text-align:left; color:var(--text-muted); font-size:10px;">% الجاهزية</th></tr>`;
        for(let i=0; i<3; i++) {
             if(deckPriority[i]) {
                 daHTML += `<tr><td class="card-cell" style="min-width:auto; gap:8px;"><img src="${deckPriority[i].imgUrl}" class="card-img" style="width:24px; height:28px;"> <span>${deckPriority[i].cleanName}</span></td>
                 <td style="text-align:center;">${deckPriority[i].actualLvl}</td>
                 <td style="text-align:left;" class="gold-text">${deckPriority[i].rem > 0 ? (deckPriority[i].rem/1000).toFixed(0)+' ألف' : 'بطاقات'}</td>
                 <td style="text-align:left; width:80px;">${getProgressBar(deckPriority[i].pctToNext, '#3b82f6')}</td></tr>`;
             } else {
                 daHTML += `<tr><td style="color:var(--text-muted)">-</td><td style="text-align:center; color:var(--text-muted)">-</td><td style="text-align:left; color:var(--text-muted)">-</td><td style="text-align:left; color:var(--text-muted)">مكتمل</td></tr>`;
             }
        }
        deckAdvisorBox.innerHTML = daHTML + `</table>`;

        // مستشار الحساب
        const isEpicSunday = (new Date().getDay() === 0);
        const getScore = (r) => { let next = r.actualLvl + 1; if (next > MAX_LEVEL) return 0; let req = CARD_LADDER[r.rarityKey][next]; return req ? (r.stock / req) : 0; };
        let permittedRarities = isEpicSunday ? ["common", "rare", "epic"] : ["common", "rare"];
        let reqList = [];
        for (let l = lowestLvl; l < MAX_LEVEL; l++) {
            let potentialCards = globalResults.filter(r => r.status !== "غير مملوك" && r.actualLvl === l && permittedRarities.includes(r.rarityKey) && getScore(r) < 1);
            if (potentialCards.length > 0) {
                potentialCards.sort((a, b) => getScore(b) - getScore(a));
                if (isEpicSunday) { let sundayEpic = potentialCards.find(r => r.rarityKey === "epic"); if (sundayEpic) { reqList.push(sundayEpic); potentialCards = potentialCards.filter(r => r.id !== sundayEpic.id); } }
                while(reqList.length < 3 && potentialCards.length > 0) { reqList.push(potentialCards.shift()); }
                break; 
            }
        }
        
        let accountAdvisorBox = document.getElementById("advisorData");
        accountAdvisorBox.className = isEpicSunday ? "epic-sunday-glow" : "";
        let titleColor = isEpicSunday ? 'var(--accent-purple)' : 'var(--accent-blue)';
        let advHTML = `<h3 style="color:${titleColor};"><i class="fa-solid fa-lightbulb"></i> مستشار الحساب <div class="tooltip-container"><i class="fa-solid fa-circle-info tooltip-icon"></i><span class="tooltip-text">البحث عن البطاقات ذات المستوى الأدنى التي تحتاج نسخاً من العشيرة.</span></div></h3>`;
        if (isEpicSunday) advHTML += `<div class="epic-badge"><i class="fa-solid fa-wand-magic-sparkles"></i> أحد البطاقات الممتازة: الأولوية للبطاقات الممتازة!</div>`;
        advHTML += `<table class="info-table"><tr><th style="text-align:right; color:var(--text-muted); font-size:10px;">البطاقة</th><th style="text-align:center; color:var(--text-muted); font-size:10px;">المستوى</th><th style="text-align:left; color:var(--text-muted); font-size:10px;">المخزون</th><th style="text-align:left; color:var(--text-muted); font-size:10px;">% الجاهزية</th></tr>`;
        for(let i=0; i<3; i++) {
            if(reqList[i]) { 
                advHTML += `<tr><td class="card-cell" style="min-width:auto; gap:8px;"><img src="${reqList[i].imgUrl}" class="card-img" style="width:24px; height:28px;" onerror="this.style.display='none'"> <span>${reqList[i].cleanName}</span></td>
                <td style="text-align:center;">${reqList[i].actualLvl}</td>
                <td style="text-align:left;">${reqList[i].stock}</td>
                <td style="text-align:left; width:80px;">${getProgressBar(getScore(reqList[i]), '#3b82f6')}</td></tr>`; 
            } else { 
                advHTML += `<tr><td style="color:var(--text-muted)">-</td><td style="text-align:center; color:var(--text-muted)">-</td><td style="text-align:left; color:var(--text-muted)">-</td><td style="text-align:left; color:var(--text-muted)">جاهز</td></tr>`; 
            }
        }
        accountAdvisorBox.innerHTML = advHTML + `</table>`;

        // ===== تحديث الرسوم البيانية =====
        if(chartWinLoss) chartWinLoss.destroy();
        chartWinLoss = new Chart(document.getElementById('winLossChart'), { type: 'doughnut', data: { labels: ['فوز', 'خسارة', 'تعادل'], datasets: [{ data: [wins, losses, draws], backgroundColor: ['#22c55e', '#ef4444', '#94a3b8'], borderWidth: 0 }] }, options: { maintainAspectRatio: false, plugins: { title: { display: true, text: 'أداء المعارك', color: '#f4f4f5' }, legend: { display: false } }, cutout: '65%' } });
        
        let labelsLevel = []; let dataLevel = [];
        for (let i = 1; i <= 16; i++) { if (i >= Math.min(globalMinLevel, 10) || levelCounts[i] > 0) { labelsLevel.push("مستوى " + i); dataLevel.push(levelCounts[i]); } }
        if(chartLevels) chartLevels.destroy();
        chartLevels = new Chart(document.getElementById('levelChart'), {
            type: 'bar',
            data: { labels: labelsLevel, datasets: [{ label: 'البطاقات', data: dataLevel, backgroundColor: '#3b82f6', borderRadius: 4 }] },
            options: { maintainAspectRatio: false, responsive: true, plugins: { legend: { display: false } }, scales: { y: { ticks: { color: '#a1a1aa' }, grid: { color: '#27272a' } }, x: { ticks: { color: '#a1a1aa' }, grid: { display: false } } } }
        });

        if(chartGold) chartGold.destroy();
        chartGold = new Chart(document.getElementById('goldChart'), { type: 'pie', data: { labels: ['الذهب المنفق', 'الذهب المتبقي'], datasets: [{ data: [spent, rem], backgroundColor: ['#facc15', '#27272a'], borderWidth: 0 }] }, options: { maintainAspectRatio: false, plugins: { title: { display: true, text: 'تقدم الذهب', color: '#f4f4f5' }, legend: { display: false } } } });
        
        if(chartCards) chartCards.destroy();
        chartCards = new Chart(document.getElementById('cardsChart'), { type: 'doughnut', data: { labels: ['المجمّع', 'مفقود عادية', 'مفقود نادرة', 'مفقود ممتازة', 'مفقود أسطورية', 'مفقود أبطال'], datasets: [{ data: [cardCollTotal, missingByRarity.common, missingByRarity.rare, missingByRarity.epic, missingByRarity.legendary, missingByRarity.champion], backgroundColor: ['#3b82f6', '#94a3b8', '#f97316', '#a855f7', '#06b6d4', '#facc15'], borderWidth: 0 }] }, options: { maintainAspectRatio: false, plugins: { title: { display: true, text: 'مجموعة البطاقات', color: '#f4f4f5' }, legend: { display: false } }, cutout: '65%' } });
        
        // رحلة الملك - تعتمد على المستويات
        if(chartXp) chartXp.destroy();
        let currentLevel = currentExpLvl;
        let maxLevel = 90;
        let levelsCompleted = currentLevel - 1;
        let levelsRemaining = maxLevel - currentLevel;

        chartXp = new Chart(document.getElementById('xpChart'), {
            type: 'doughnut',
            data: {
                labels: ['مستويات مكتملة', 'مستويات متبقية'],
                datasets: [{
                    data: [levelsCompleted, levelsRemaining],
                    backgroundColor: ['#a855f7', '#27272a'],
                    borderWidth: 0
                }]
            },
            options: {
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: `المستوى ${currentLevel} من ${maxLevel}`,
                        color: '#f4f4f5',
                        font: { size: 14, weight: 'bold' }
                    },
                    legend: { display: false },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                let label = context.label || '';
                                let value = context.raw || 0;
                                return `${label}: ${value} مستوى`;
                            }
                        }
                    }
                },
                cutout: '65%'
            }
        });

        renderMainTable();
        statusMsg.innerHTML = `<i class="fa-solid fa-circle-check"></i> اكتمل التحليل!`;
        statusMsg.style.color = "#22c55e";
        dash.style.opacity = "1"; 
        openTab('overview'); 
        loadImagesWithCache();
    } catch (error) {
        console.error(error);
        statusMsg.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> خطأ: ${error.message}. تأكد من اتصال الإنترنت ووجود اللاعب.`;
        statusMsg.style.color = "#ef4444";
        dash.classList.add("hidden"); 
    }
}

function renderMainTable() {
    let filteredResults = globalResults.filter(r => {
        if (currentActiveFilter === 'all') return true;
        if (currentActiveFilter === 'tower') return r.isTower;
        return r.rarityKey === currentActiveFilter;
    });

    filteredResults.sort((a, b) => {
        if (a.isTower !== b.isTower) return b.isTower - a.isTower;
        if (a.isTower && b.isTower) {
            let aOwned = a.status !== "غير مملوك" ? 1 : 0; let bOwned = b.status !== "غير مملوك" ? 1 : 0;
            if (aOwned !== bOwned) return bOwned - aOwned; 
            if (RARITY_RANK[a.rarityKey] !== RARITY_RANK[b.rarityKey]) return RARITY_RANK[a.rarityKey] - RARITY_RANK[b.rarityKey];
        } else {
            if (RARITY_RANK[a.rarityKey] !== RARITY_RANK[b.rarityKey]) return RARITY_RANK[a.rarityKey] - RARITY_RANK[b.rarityKey];
            let aOwned = a.status !== "غير مملوك" ? 1 : 0; let bOwned = b.status !== "غير مملوك" ? 1 : 0;
            if (aOwned !== bOwned) return bOwned - aOwned; 
        }
        let aMaxed = (a.actualLvl === MAX_LEVEL) ? 1 : 0; let bMaxed = (b.actualLvl === MAX_LEVEL) ? 1 : 0;
        if (aMaxed !== bMaxed) return bMaxed - aMaxed;
        if (b.pctToNext !== a.pctToNext) return b.pctToNext - a.pctToNext;
        return b.actualLvl - a.actualLvl;
    });

    const startTargetLvl = Math.min(globalMinLevel + 1, MAX_LEVEL);
    let tableHTML = `<thead><tr><th style="text-align:right;">اسم البطاقة</th><th>الندرة</th><th>المستوى</th><th>المخزون</th><th style="min-width:100px;">% التالي</th><th style="min-width:100px;">% الأقصى</th>`;
    for (let i = startTargetLvl; i <= MAX_LEVEL; i++) tableHTML += `<th>للمستوى ${i}</th>`;
    tableHTML += `<th>الذهب المنفق</th><th>الذهب المتبقي</th></tr></thead><tbody>`;

    let currentCategoryKey = ""; 
    let colSpanCount = 8 + (MAX_LEVEL - startTargetLvl + 1);
    let hasTowersInCurrentFilter = filteredResults.some(r => r.isTower);

    filteredResults.forEach(r => {
        let newCategoryKey = ""; let shouldPrintLabel = false; let labelText = ""; let labelColor = "var(--text-main)";

        if (currentActiveFilter === 'all') {
            newCategoryKey = r.isTower ? "all_towers" : r.rarityKey;
            if (newCategoryKey !== currentCategoryKey) {
                shouldPrintLabel = true;
                if (newCategoryKey === "all_towers") { labelText = "قوات الأبراج"; labelColor = "var(--accent-red)"; }
                else if (r.rarityKey === "champion") { labelText = "الأبطال"; labelColor = "var(--accent-gold)"; }
                else if (r.rarityKey === "legendary") { labelText = "أسطورية"; labelColor = "#00cec9"; }
                else if (r.rarityKey === "epic") { labelText = "ممتازة"; labelColor = "var(--accent-purple)"; }
                else if (r.rarityKey === "rare") { labelText = "نادرة"; labelColor = "#e67e22"; }
                else if (r.rarityKey === "common") { labelText = "عادية"; labelColor = "#bdc3c7"; }
            }
        } else if (currentActiveFilter === 'tower') { shouldPrintLabel = false; } 
        else {
            newCategoryKey = r.isTower ? `tower_${r.rarityKey}` : `troop_${r.rarityKey}`;
            if (newCategoryKey !== currentCategoryKey && hasTowersInCurrentFilter) {
                shouldPrintLabel = true; let rarityDisplay = r.rarity === "common" ? "عادية" : (r.rarity === "rare" ? "نادرة" : (r.rarity === "epic" ? "ممتازة" : (r.rarity === "legendary" ? "أسطورية" : "بطل")));
                labelText = r.isTower ? `أبراج ${rarityDisplay}` : `قوات وتعاويذ ${rarityDisplay}`;
                if (r.rarityKey === "champion") labelColor = "var(--accent-gold)";
                else if (r.rarityKey === "legendary") labelColor = "#00cec9";
                else if (r.rarityKey === "epic") labelColor = "var(--accent-purple)";
                else if (r.rarityKey === "rare") labelColor = "#e67e22";
                else if (r.rarityKey === "common") labelColor = "#bdc3c7";
                if (r.isTower) labelColor = "var(--accent-red)"; 
            }
        }

        if (shouldPrintLabel && labelText !== "") { tableHTML += `<tr class="table-separator"><td colspan="${colSpanCount}" style="border-right: 4px solid ${labelColor};"><i class="fa-solid fa-layer-group" style="margin-left:8px;"></i> ${labelText}</td></tr>`; currentCategoryKey = newCategoryKey; } 
        else if (currentActiveFilter !== 'all') { currentCategoryKey = newCategoryKey; }

        let isElite = (r.actualLvl === MAX_LEVEL);
        let rowClass = isElite ? "class='elite-max-row'" : "";
        let nameStyle = isElite ? "class='elite-text'" : "";
        let rarityColor = r.rarityKey==='epic' ? 'var(--accent-purple)' : r.rarityKey==='legendary' ? '#00cec9' : r.rarityKey==='champion' ? 'var(--accent-gold)' : r.rarityKey==='rare' ? '#e67e22' : '#bdc3c7';
        let isLockedClass = (r.status === "غير مملوك") ? "locked-card" : "";
        
        let displayPctNext = r.status === "غير مملوك" ? "-" : getProgressBar(r.pctToNext, r.pctToNext >= 1 ? '#22c55e' : '#3b82f6');
        let displayPctMax = r.status === "غير مملوك" ? "-" : getProgressBar(r.pctToMax, isElite ? '#d946ef' : '#facc15');

        tableHTML += `<tr ${rowClass} data-rarity="${r.rarityKey}" data-istower="${r.isTower}">
            <td class="card-cell ${isLockedClass}"><img src="${r.imgUrl}" class="card-img" data-original-src="${r.imgUrl}" loading="lazy" onerror="this.style.display='none'"> <span ${nameStyle}>${r.cleanName}</span></td>
            <td style="text-transform: capitalize; color: ${rarityColor}; font-weight:700;" class="${isLockedClass}">${r.rarity === "common" ? "عادية" : (r.rarity === "rare" ? "نادرة" : (r.rarity === "epic" ? "ممتازة" : (r.rarity === "legendary" ? "أسطورية" : "بطل")))}</td>
            <td class="${isLockedClass}" ${isElite ? "style='font-weight:900;'" : ""}>${r.status}</td>
            <td class="${isLockedClass}">${r.stock.toLocaleString()}</td>
            <td class="${isLockedClass}">${displayPctNext}</td>
            <td class="${isLockedClass}">${displayPctMax}</td>`;
        for (let i = startTargetLvl; i <= MAX_LEVEL; i++) {
            let missing = r.missingLevels[i] || 0;
            if (r.actualLvl >= i) tableHTML += `<td style="color:var(--border-color)" class="${isLockedClass}">-</td>`;
            else if (missing === 0) tableHTML += `<td class="${isLockedClass}"><i class="fa-solid fa-check" style="color:var(--accent-green)"></i></td>`;
            else tableHTML += `<td class="red-text ${isLockedClass}">${missing.toLocaleString()}</td>`;
        }
        tableHTML += `<td class="green-text ${isLockedClass}">${r.spent.toLocaleString()}</td><td class="gold-text ${isLockedClass}">${r.rem.toLocaleString()}</td></tr>`;
    });
    tableHTML += `</tbody>`;
    document.getElementById("mainDataTable").innerHTML = tableHTML;

    setTimeout(() => loadImagesWithCache(), 100);
}