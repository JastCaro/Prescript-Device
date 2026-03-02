const messages = [

  // COMMON
  { text: "CLEAN A SMALL AREA FOR 10 MINUTES", weight: 35, tier: "common" },
  { text: "READ 5 PAGES OF ANY BOOK", weight: 40, tier: "common" },
  { text: "DO 20 PUSH-UPS TOTAL (ANY SETS)", weight: 35, tier: "common" },
  { text: "ORGANIZE 10 FILES ON YOUR PHONE OR PC", weight: 40, tier: "common" },
  { text: "DRINK 2 GLASSES OF WATER NOW", weight: 40, tier: "common" },
  { text: "STRETCH YOUR BODY FOR 5 MINUTES", weight: 30, tier: "common" },
  { text: "WRITE ONE PARAGRAPH ABOUT YOUR DAY", weight: 35, tier: "common" },
  { text: "DELETE 5 USELESS PHOTOS", weight: 40, tier: "common" },
  { text: "MAKE YOUR BED PROPERLY", weight: 40, tier: "common" },
  { text: "READ ONE ARTICLE ABOUT ANY TOPIC", weight: 35, tier: "common" },
  { text: "DO 30 SQUATS TOTAL", weight: 35, tier: "common" },
  { text: "WRITE 3 THINGS YOU ARE GRATEFUL FOR", weight: 40, tier: "common" },
  { text: "RESPOND TO ONE PENDING MESSAGE", weight: 35, tier: "common" },

  // UNCOMMON
  { text: "READ FOR 20 MINUTES WITHOUT DISTRACTIONS", weight: 30, tier: "uncommon" },
  { text: "CLEAN AN ENTIRE ROOM SECTION", weight: 25, tier: "uncommon" },
  { text: "DO A 15 MINUTE BODYWEIGHT WORKOUT", weight: 25, tier: "uncommon" },
  { text: "PLAN YOUR NEXT WEEK IN WRITING", weight: 20, tier: "uncommon" },
  { text: "LEARN SOMETHING NEW FOR 25 MINUTES", weight: 20, tier: "uncommon" },
  { text: "ORGANIZE YOUR DESK COMPLETELY", weight: 20, tier: "uncommon" },
  { text: "WRITE 10 IDEAS ABOUT ANY TOPIC", weight: 20, tier: "uncommon" },
  { text: "READ 15 PAGES OF A BOOK", weight: 25, tier: "uncommon" },
  { text: "CLEAN YOUR COMPUTER DESKTOP COMPLETELY", weight: 20, tier: "uncommon" },
  { text: "WATCH AN EDUCATIONAL VIDEO AND TAKE NOTES", weight: 20, tier: "uncommon" },
  { text: "PREPARE A HEALTHY SNACK YOURSELF", weight: 25, tier: "uncommon" },
  { text: "DO A 10 MINUTE CORE WORKOUT", weight: 25, tier: "uncommon" },
  { text: "WRITE A SHORT JOURNAL ENTRY", weight: 25, tier: "uncommon" },
  { text: "ORGANIZE YOUR BACKPACK OR BAG", weight: 20, tier: "uncommon" },

  // RARE
  { text: "DO A FULL 30 MINUTE DEEP CLEAN", weight: 15, tier: "rare" },
  { text: "READ 30 PAGES TODAY", weight: 10, tier: "rare" },
  { text: "GO FOR A 15 MINUTE WALK WITHOUT PHONE", weight: 15, tier: "rare" },
  { text: "COMPLETE A 30 MINUTE INTENSE WORKOUT", weight: 10, tier: "rare" },
  { text: "FINISH A TASK YOU HAVE BEEN AVOIDING", weight: 8, tier: "rare" },
  { text: "NO SOCIAL MEDIA FOR THE NEXT 2 HOURS", weight: 10, tier: "rare" },
  { text: "WRITE A FULL PAGE REFLECTION", weight: 12, tier: "rare" },
  { text: "REARRANGE A PART OF YOUR ROOM", weight: 8, tier: "rare" },
  { text: "DO 100 TOTAL REPS OF ANY EXERCISE", weight: 10, tier: "rare" },
  { text: "CLEAN YOUR ENTIRE DESK AREA", weight: 15, tier: "rare" },
  { text: "READ FOR 45 MINUTES STRAIGHT", weight: 10, tier: "rare" },
  { text: "DO A 25 MINUTE HIIT WORKOUT", weight: 10, tier: "rare" },
  { text: "REMOVE 20 UNNECESSARY FILES OR PHOTOS", weight: 12, tier: "rare" },
  { text: "WRITE A LETTER TO YOUR FUTURE SELF", weight: 8, tier: "rare" },
  { text: "LEARN A NEW SKILL FOR 40 MINUTES", weight: 10, tier: "rare" },

  // VERY RARE
  { text: "SPEND 1 FULL HOUR ON A SINGLE TASK", weight: 5, tier: "veryRare" },
  { text: "CLEAN EVERYTHING YOU SEE OUT OF PLACE", weight: 4, tier: "veryRare" },
  { text: "READ FOR 1 HOUR STRAIGHT", weight: 5, tier: "veryRare" },
  { text: "COMPLETE A WORKOUT UNTIL FAILURE", weight: 4, tier: "veryRare" },
  { text: "WRITE YOUR 1 YEAR MASTER PLAN", weight: 3, tier: "veryRare" },
  { text: "DEEP CLEAN YOUR ENTIRE ROOM TODAY", weight: 2, tier: "veryRare" },
  { text: "NO ENTERTAINMENT FOR THE REST OF THE DAY", weight: 1, tier: "veryRare" },
  { text: "NO PHONE FOR THE NEXT 3 HOURS", weight: 1, tier: "veryRare" },
  { text: "DEEP ORGANIZE YOUR ENTIRE CLOSET", weight: 2, tier: "veryRare" },
  { text: "READ 50 PAGES TODAY", weight: 3, tier: "veryRare" },
  { text: "COMPLETE A 45 MINUTE NON-STOP WORK SESSION", weight: 3, tier: "veryRare" }

];

const tierChances = {
    common: 50,
    uncommon: 25,
    rare: 15,
    veryRare: 10
};

function rollTier() {
    const total = Object.values(tierChances).reduce((a, b) => a + b, 0);
    let roll = Math.random() * total;

    for (const tier in tierChances) {
        roll -= tierChances[tier];
        if (roll <= 0) {
            return tier;
        }
    }
}

function pickMessage() {

    clickCount++;

    const selectedTier = rollTier();

    const tierMessages = messages.filter(m => m.tier === selectedTier);

    const totalWeight = tierMessages.reduce((s, m) => s + m.weight, 0);
    let roll = Math.random() * totalWeight;

    for (const m of tierMessages) {
        roll -= m.weight;
        if (roll <= 0) {
            return m;
        }
    }

    return null;
}
