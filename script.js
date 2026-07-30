/* ==========================================================================
   中華與西方歷史長廊 - 核心控制腳本 (script.js)
   功能：中西歷史區域切換、朝代資料庫、搜尋過濾、互動測驗與學習進度管理
   ========================================================================== */

// 歷史資料庫 (包含中華歷史與西方歷史)
const DYNASTIES_DATA = {
  // === 中華歷史 (Chinese History) ===
  "shang-zhou": {
    id: "shang-zhou",
    region: "chinese",
    title: "夏商周時代",
    years: "約前2070 - 前256年",
    eraTag: "早期文明",
    bgImage: "assets/shang_zhou.jpg",
    desc: "中華文明的曙光與青銅器鼎盛時期，奠定禮樂制度、甲骨文體系與春秋戰國百家爭鳴的思想黃金時代。",
    tags: ["青銅器", "甲骨文", "禮樂制度", "百家爭鳴"],
    capital: "鎬京 / 洛邑 / 殷",
    duration: "約1800年",
    overview: `夏商周是中華文明的早期階段。夏朝開啟「家天下」時代；商朝以發達的青銅文化與甲骨文著稱；周朝則建立起嚴密的「封建親戚，以藩屏周」宗法禮樂制度。
    到了春秋戰國時期，王室衰微，諸候割據，激發了極大的思想活力，孔子、老子、墨子、韓非子等思想家輩出，形成了影響深遠的「百家爭鳴」。`,
    highlight: "「周公吐哺，天下歸心。」禮樂制度的建立奠定了中國傳統社會的道德規範與秩序基礎。",
    timeline: [
      { year: "約前2070年", title: "夏朝建立", desc: "禹傳子啟，標誌著「公天下」轉變為「家天下」。" },
      { year: "約前1600年", title: "商湯滅夏", desc: "商朝建立，盤庚遷殷後政治趨於穩定，青銅文明達到頂峰。" },
      { year: "約前1046年", title: "武王克商（牧野之戰）", desc: "周武王建立西周，實行分封制與宗法禮樂制度。" },
      { year: "前770年", title: "平王東遷", desc: "周平王遷都洛邑，開啟春秋戰國時期，諸侯割據爭霸。" },
      { year: "前221年", title: "百家爭鳴終局", desc: "儒、道、法、墨等思想集大成，秦國最終統一六國。" }
    ],
    figures: [
      { name: "大禹", role: "夏朝奠基者", icon: "🌊", desc: "親自率領民眾治水，三過家門而不入，尊為夏朝創始人。" },
      { name: "周公旦", role: "西周政治家", icon: "📜", desc: "制定禮樂制度，輔佐成王，被後世尊為「元聖」與儒家精神源頭。" },
      { name: "孔子", role: "儒家學派創始人", icon: "🎓", desc: "創立儒家學說，提倡「仁」與「禮」，開創私人講學風氣，尊為萬世師表。" },
      { name: "老子", role: "道家學派創始人", icon: "☯️", desc: "著《道德經》，提倡「無為而治」與「道法自然」的思想哲學。" }
    ],
    achievements: [
      "🏛️ **甲骨文**: 中國目前已知最早的系統性成熟文字，記載商代卜辭。",
      "🏆 **司母戊鼎 (后母戊鼎)**: 世界已出土最大、重達832.84公斤的青銅禮器。",
      "🎵 **韶樂與編鐘**: 完美的禮樂制度與聲學工藝，反映極高的藝術水準。"
    ],
    quiz: [
      {
        question: "中國歷史上第一個實行「家天下」王位世襲制的朝代是？",
        options: ["A. 夏朝", "B. 商朝", "C. 周朝", "D. 秦朝"],
        answer: 0,
        explanation: "夏朝大禹死後，其子啟繼位，打破了禪讓制，開啟了王位世襲的「家天下」時代。"
      },
      {
        question: "提倡「仁」與「禮」，被尊稱為「萬世師表」的思想家是？",
        options: ["A. 老子", "B. 孔子", "C. 墨子", "D. 韓非子"],
        answer: 1,
        explanation: "孔子是儒家學派創始人，倡導「仁者愛人」與「克己復禮」。"
      },
      {
        question: "商朝用於占卜並刻寫在龜甲獸骨上的成熟文字被稱作？",
        options: ["A. 金文", "B. 小篆", "C. 甲骨文", "D. 隸書"],
        answer: 2,
        explanation: "甲骨文主要盛行於商代晚期，是中國成熟文字體系的開端。"
      }
    ]
  },
  "qin-han": {
    id: "qin-han",
    region: "chinese",
    title: "秦漢帝國",
    years: "前221 - 公元220年",
    eraTag: "帝國奠基",
    bgImage: "assets/hero.jpg",
    desc: "大一統帝國的開創與奠基，廢分封立郡縣，統一書軌，開闢絲綢之路，獨尊儒術影響後世兩千年。",
    tags: ["大一統", "萬里長城", "絲綢之路", "造紙術"],
    capital: "咸陽 / 長安 / 洛陽",
    duration: "441年",
    overview: `秦始皇消滅六國，建立中國歷史上第一個中央集權的大一統帝國。秦朝實行「書同文、車同軌、統一度量衡」，奠定了中國政治體制的基本架構。
    漢朝（西漢與東漢）承襲秦制並加以完善。漢武帝「罷黜百家，獨尊儒術」，並派遣張騫出使西域開闢「絲綢之路」，東漢蔡倫改進造紙術，使漢朝成為當時世界上最強盛的帝國之一。`,
    highlight: "「漢秉秦跡」，秦漢時期確立的大一統體制與絲綢之路，決定了東亞文明格局。",
    timeline: [
      { year: "前221年", title: "秦始皇統一六國", desc: "建立秦朝，廢分封改郡縣，自稱「始皇帝」。" },
      { year: "前206年", title: "楚漢相爭與西漢建立", desc: "劉邦擊敗項羽，建立漢朝，定都長安。" },
      { year: "前138年", title: "張騫首次出使西域", desc: "漢武帝派張騫通西域，開闢溝通歐亞的「絲綢之路」。" },
      { year: "公元105年", title: "蔡倫改進造紙術", desc: "蔡倫向漢和帝獻「蔡侯紙」，極大推動文化傳播與知識普及。" },
      { year: "公元220年", title: "曹丕篡漢", desc: "東漢滅亡，三國時代開啟。" }
    ],
    figures: [
      { name: "秦始皇 (嬴政)", role: "千古一帝", icon: "👑", desc: "統一中國，創立皇帝制度，興建萬里長城與兵馬俑。" },
      { name: "漢武帝 (劉徹)", role: "漢朝鼎盛帝王", icon: "⚔️", desc: "開疆拓土，實行推恩令，開闢絲綢之路，獨尊儒術。" },
      { name: "張騫", role: "絲路先鋒", icon: "🐪", desc: "兩度出使西域，鑿空西域，促進東西方經濟文化交流。" },
      { name: "司馬遷", role: "太史公", icon: "🖊️", desc: "忍辱負重撰寫中國第一部紀傳體通史《史記》，被譽為「史家之絕唱」。" }
    ],
    achievements: [
      "📜 **蔡侯紙 (造紙術)**: 中國四大發明之一，傳播至全球改寫人類文明進程。",
      "🗿 **秦始皇兵馬俑**: 被譽為「世界第八大奇蹟」，展現極高的雕塑藝術與軍事陣容。",
      "🌍 **絲綢之路**: 連接歐亞大陸的世界最早貿易與文化交流大通道。"
    ],
    quiz: [
      {
        question: "中國歷史上第一個中央集權的大一統封建帝國是？",
        options: ["A. 夏朝", "B. 秦朝", "C. 漢朝", "D. 唐朝"],
        answer: 1,
        explanation: "秦始皇於公元前221年消滅六國，建立了第一個大一統帝國。"
      },
      {
        question: "兩度出使西域，開闢溝通歐亞大陸「絲綢之路」的歷史人物是？",
        options: ["A. 班超", "B. 張騫", "C. 鄭和", "D. 玄奘"],
        answer: 1,
        explanation: "漢武帝時期張騫出使西域，成功建立了中原與西域諸國的交流通道。"
      },
      {
        question: "被魯迅譽為「史家之絕唱，無韻之離騷」的紀傳體通史著作是？",
        options: ["A. 《資治通鑑》", "B. 《漢書》", "C. 《史記》", "D. 《三國志》"],
        answer: 2,
        explanation: "司馬遷所著《史記》創立了紀傳體史書結構，具有極高文學與歷史價值。"
      }
    ]
  },
  "wei-jin": {
    id: "wei-jin",
    region: "chinese",
    title: "魏晉南北朝",
    years: "公元220 - 589年",
    eraTag: "割據與融合",
    bgImage: "assets/shang_zhou.jpg",
    desc: "政權頻繁更迭與民族大融合的時期。玄學興起、魏晉風骨獨具魅力，石窟藝術與佛教文化達到新高峰。",
    tags: ["三國鼎立", "民族融合", "魏晉風骨", "石窟藝術"],
    capital: "建康 / 洛陽 / 平城",
    duration: "369年",
    overview: `魏晉南北朝經歷了三國鼎立、西晉短暫統一、東晉與十六國以及南北朝對峙。儘管政治動盪，卻是民族大融合與文化藝術極度自由蓬勃發展的時代。
    北魏孝文帝推行漢化改革，推動了北方各民族的交流。書法藝術家王羲之、田園詩人陶淵明、圓周率推算者祖沖之皆誕生於此時期。`,
    highlight: "「采菊東籬下，悠然見南山。」動盪年代孕育出對個體生命與自然美學的深度覺醒。",
    timeline: [
      { year: "208年", title: "赤壁之戰", desc: "孫劉聯軍大敗曹操，奠定三國鼎立基礎。" },
      { year: "220年", title: "三國時代開啟", desc: "魏、蜀、吳三國先後稱帝建國。" },
      { year: "317年", title: "衣冠南渡與東晉成立", desc: "北方戰亂，中原世族南遷建康，開發江南地區。" },
      { year: "494年", title: "北魏孝文帝遷都洛陽", desc: "推行禁胡服、說漢語、改漢姓等全面漢化改革。" },
      { year: "589年", title: "隋滅陳", desc: "結束近四百年的分裂割據局面。" }
    ],
    figures: [
      { name: "諸葛亮", role: "蜀漢丞相", icon: "🪶", desc: "鞠躬盡瘁，死而後已，被譽為智慧與忠臣的化身。" },
      { name: "王羲之", role: "書聖", icon: "🖌️", desc: "代表作《蘭亭集序》被譽為「天下第一行書」，將中國書法帶入藝術巔峰。" },
      { name: "北魏孝文帝", role: "改革帝王", icon: "🏛️", desc: "力排眾議推行深度漢化改革，極大地促進了民族大融合。" },
      { name: "祖沖之", role: "傑出科學家", icon: "📐", desc: "將圓周率精確推算至小數點後第七位，領先世界近千年。" }
    ],
    achievements: [
      "🎨 **雲岡與龍門石窟**: 融合中原與西域風格的佛教石窟雕刻藝術精華。",
      "📖 **《齊民要術》**: 賈思勰所著，中國現存最早最完整的農學名著。",
      "🖋️ **《蘭亭集序》**: 王羲之行書代表作，極具魏晉飄逸美學。"
    ],
    quiz: [
      {
        question: "推行「說漢語、穿漢服、改漢姓」等深度漢化改革的北魏帝王是？",
        options: ["A. 魏文帝", "B. 北魏孝文帝", "C. 晉武帝", "D. 梁武帝"],
        answer: 1,
        explanation: "北魏孝文帝遷都洛陽並推行全面漢化改革，促進了民族融合。"
      },
      {
        question: "被後世尊稱為「書聖」，代表作為《蘭亭集序》的書法家是？",
        options: ["A. 顏真卿", "B. 柳公權", "C. 王羲之", "D. 歐陽詢"],
        answer: 2,
        explanation: "王羲之書法飄逸遒勁，其《蘭亭集序》被稱為「天下第一行書」。"
      },
      {
        question: "將圓周率精確計算到 3.1415926 至 3.1415927 之間的魏晉南北朝科學家是？",
        options: ["A. 張衡", "B. 祖沖之", "C. 郭守敬", "D. 沈括"],
        answer: 1,
        explanation: "祖沖之精確計算圓周率，這一成果在世界上保持領先地位長達上千年。"
      }
    ]
  },
  "sui-tang": {
    id: "sui-tang",
    region: "chinese",
    title: "隋唐盛世",
    years: "公元581 - 907年",
    eraTag: "萬國來朝",
    bgImage: "assets/tang.jpg",
    desc: "封建社會的黃金時代。開鑿京杭大運河，創立科舉制度，貞觀之治與開元盛世萬國來朝，唐詩燦爛輝煌。",
    tags: ["大運河", "科舉制度", "唐詩", "萬國來朝"],
    capital: "長安 / 洛陽",
    duration: "326年",
    overview: `隋朝雖然短暫，但開鑿的大運河貫通南北經濟，創立的科舉制度成為後世選拔人才的主要方式。
    唐朝則代表了中國古代文明的鼎盛巔峰。「貞觀之治」與「開元盛世」政治清明、經濟繁榮，首都長安是當時世界最大的國際大都市。詩仙李白、詩聖杜甫將唐詩藝術推向不可超越的高度。`,
    highlight: "「九天闓闔開宮殿，萬國衣冠拜冕旒。」唐朝以開闊包容的胸懷迎接到訪的世界各國使臣與留學生。",
    timeline: [
      { year: "581年", title: "隋朝建立", desc: "隋文帝楊堅建立隋朝，開創開皇之治。" },
      { year: "605年", title: "開鑿京杭大運河 & 創科舉", desc: "隋煬帝貫通大運河，開創進士科選拔人才。" },
      { year: "626年", title: "貞觀之治", desc: "唐太宗李世民即位，虛心納諫，輕徭薄賦，國力大振。" },
      { year: "690年", title: "武則天稱帝", desc: "改國號為周，成為中國歷史上唯一的合法女皇帝。" },
      { year: "755年", title: "安史之亂爆發", desc: "安祿山與史思明叛亂，唐朝由盛轉衰。" }
    ],
    figures: [
      { name: "唐太宗 (李世民)", role: "貞觀英主", icon: "👑", desc: "開創貞觀之治，被北方各民族尊稱為「天可汗」。" },
      { name: "武則天", role: "一代女皇", icon: "💃", desc: "中國唯一女皇帝，重視科舉，獎勵農桑，政啟開元治宏貞觀。" },
      { name: "李白", role: "詩仙", icon: "🍷", desc: "浪漫主義詩歌代表，詩風雄奇豪放，飄逸灑脫。" },
      { name: "玄奘", role: "三藏法師", icon: "🏯", desc: "孤身前往天竺取經，歷時17載帶回大批佛經，著《大唐西域記》。" }
    ],
    achievements: [
      "🌊 **京杭大運河**: 世界上最長的人工運河，縱貫南北推動經濟整合。",
      "📚 **科舉制度**: 打破世家大族壟斷，為平民提供公平入仕升遷的管道。",
      "📖 **雕版印刷術**: 唐代發明成熟雕版印刷，《金剛經》為世界現存最早標有明確日期的印刷品。"
    ],
    quiz: [
      {
        question: "開創「貞觀之治」，被北方各少數民族尊稱為「天可汗」的帝王是？",
        options: ["A. 隋文帝", "B. 唐太宗", "C. 唐玄宗", "D. 武則天"],
        answer: 1,
        explanation: "唐太宗李世民虛懷若谷、政治清明，尊稱為「天可汗」。"
      },
      {
        question: "中國歷史上唯一得到正式承認的女皇帝是？",
        options: ["A. 慈禧太后", "B. 呂后", "C. 武則天", "D. 蕭太后"],
        answer: 2,
        explanation: "武則天於公元690年自立為帝，改國號為周。"
      },
      {
        question: "隋朝創立並影響後世千年的官吏選拔制度是？",
        options: ["A. 九品中正制", "B. 察舉制", "C. 科舉制", "D. 世卿世祿制"],
        answer: 2,
        explanation: "隋朝廢除九品中正制，設進士科開啟科舉考試制度。"
      }
    ]
  },
  "song-yuan": {
    id: "song-yuan",
    region: "chinese",
    title: "宋元時期",
    years: "公元960 - 1368年",
    eraTag: "科技與版圖",
    bgImage: "assets/song.jpg",
    desc: "經濟文化高度發達與草原帝國興起。四大發明全面應用於實踐，宋詞元曲爭輝，蒙古帝國橫跨歐亞。",
    tags: ["四大發明", "清明上河圖", "宋詞元曲", "蒙古帝國"],
    capital: "東京(開封) / 臨安(杭州) / 大都(北京)",
    duration: "408年",
    overview: `宋朝（北宋與南宋）雖在軍事上相對弱勢，但經濟、商業、科技與文化卻達到古代極致。世界上最早的紙幣「交子」誕生於此，活字印刷術與指南針廣泛應用。
    元朝由蒙古族忽必烈建立，消滅南宋統一全國，開創了極其遼闊的帝國版圖，並設立行省制度影響至今。`,
    highlight: "「華夏民族之文化，歷數千載之演進，造極於趙宋之世。」（陳寅恪語）",
    timeline: [
      { year: "960年", title: "陳橋兵變與北宋建立", desc: "趙匡胤黃袍加身建立宋朝，定都開封。" },
      { year: "1040年代", title: "畢昇發明活字印刷術", desc: "膠泥活字印刷術發明，大為提高印書效率。" },
      { year: "1127年", title: "靖康之變與南宋建立", desc: "金軍攻破開封，趙構在臨安（杭州）建立南宋。" },
      { year: "1206年", title: "成吉思汗統一蒙古", desc: "鐵木真建立蒙古汗國，展開橫跨歐亞的西征。" },
      { year: "1279年", title: "崖山海戰與元朝統一", desc: "元軍滅南宋，忽必烈確立行省制度。" }
    ],
    figures: [
      { name: "宋太祖 (趙匡胤)", role: "宋朝開國皇帝", icon: "👑", desc: "杯酒釋兵權，確立重文輕武國策，奠定宋朝文治風貌。" },
      { name: "蘇軾 (東坡)", role: "全才文豪", icon: "🍶", desc: "宋詞豪放派代表，詩詞散文書法繪畫皆為一代大師。" },
      { name: "成吉思汗", role: "一代天驕", icon: "🏹", desc: "統一蒙古各部，建立跨歐亞的大蒙古國。" },
      { name: "忽必烈", role: "元世祖", icon: "🏰", desc: "建國號為元，定都大都（北京），建立行省制度。" }
    ],
    achievements: [
      "🧩 **活字印刷術**: 畢昇發明，出版與思想傳播技術的里程碑。",
      "🧭 **指南針與航海**: 北宋時期指南針廣泛應用於海上航行。",
      "💵 **交子 (紙幣)**: 北宋四川地區出現的世界最早紙幣。"
    ],
    quiz: [
      {
        question: "北宋時期發明膠泥活字印刷術，極大推動文化傳播的工匠是？",
        options: ["A. 蔡倫", "B. 畢昇", "C. 魯班", "D. 張衡"],
        answer: 1,
        explanation: "畢昇於北宋慶曆年間發明活字印刷術。"
      },
      {
        question: "世界歷史上最早出現的紙幣「交子」誕生於哪個朝代？",
        options: ["A. 唐朝", "B. 北宋", "C. 元朝", "D. 明朝"],
        answer: 1,
        explanation: "北宋四川地區商品經濟繁榮，誕生了世界最早紙幣交子。"
      },
      {
        question: "建立元朝，並設立行省制度統一全國的帝王是？",
        options: ["A. 成吉思汗", "B. 拔都", "C. 忽必烈", "D. 努爾哈赤"],
        answer: 2,
        explanation: "元世祖忽必烈於1271年定國號為「大元」，1279年統一全國。"
      }
    ]
  },
  "ming-qing": {
    id: "ming-qing",
    region: "chinese",
    title: "明清時代",
    years: "公元1368 - 1912年",
    eraTag: "近現代轉折",
    bgImage: "assets/hero.jpg",
    desc: "君主集權鼎盛與遠洋航海傳奇。紫禁城恢弘壯麗，康乾盛世國力強盛，後面對西方列強衝擊，走向近現代變局。",
    tags: ["紫禁城", "鄭和下西洋", "康乾盛世", "辛亥革命"],
    capital: "應天(南京) / 北京",
    duration: "544年",
    overview: `明朝驅逐蒙元重興漢族政權，明成祖興建紫禁城並派鄭和七下西洋，展現強大海上力量。
    清朝作為中國最後一個封建王朝，康熙、雍正、乾隆三朝締造了「康乾盛世」，奠定了現代中國的疆域版圖。然而到了晚清，面對工業革命後的西方列強，清政府保守落後，最終在1911年辛亥革命中結束了兩千多年的帝制。`,
    highlight: "「封建帝制終結，近現代文明轉折。」明清承載著古代輝煌與近代陣痛的雙重歷史命題。",
    timeline: [
      { year: "1368年", title: "明朝建立", desc: "朱元璋在南京稱帝，滅元朝。" },
      { year: "1405 - 1433年", title: "鄭和七下西洋", desc: "率領當時世界規模最大的船隊遠航亞非30多國。" },
      { year: "1420年", title: "北京紫禁城竣工", desc: "明成祖遷都北京，紫禁城成為帝國政治中心。" },
      { year: "1644年", title: "清軍入關", desc: "李自成攻破北京明亡，清朝順治帝遷都北京。" },
      { year: "1911 - 1912年", title: "辛亥革命與帝制終結", desc: "武昌起義爆發，宣統帝退位，結束兩千年君主帝制。" }
    ],
    figures: [
      { name: "明太祖 (朱元璋)", role: "洪武大帝", icon: "👑", desc: "從布衣乞丐到開國帝王，強化中央集權，廢除丞相。" },
      { name: "鄭和", role: "三寶太監", icon: "⛵", desc: "偉大的航海家，七下西洋開創人類大規模遠洋航行紀錄。" },
      { name: "康熙帝", role: "清聖祖", icon: "🐎", desc: "執政61年，平定三藩、統一台灣、簽訂《尼布楚條約》，奠定清朝盛世。" },
      { name: "林則徐", role: "民族英雄", icon: "📜", desc: "主導虎門銷煙，展現捍衛國家尊嚴與反抗侵略的決心。" }
    ],
    achievements: [
      "🏯 **北京紫禁城 (故宮)**: 世界上現存規模最大、保存最完整的木質結構宮殿建築群。",
      "📖 **《本草綱目》**: 李時珍歷時27年完成的中國古代藥學百科全書。",
      "🏺 **景德鎮青花瓷**: 明清時期外銷全球的中國瓷器頂峰代表。"
    ],
    quiz: [
      {
        question: "明朝時期率領龐大船隊七下西洋，訪問亞非30多個國家和地區的航海家是？",
        options: ["A. 麥哲倫", "B. 鄭和", "C. 哥倫布", "D. 戚繼光"],
        answer: 1,
        explanation: "鄭和於1405至1433年間七下西洋，為世界航海史上的偉大壯舉。"
      },
      {
        question: "世界上現存規模最大、保存最完整的木質結構古建築群是？",
        options: ["A. 頤和園", "B. 布達拉宮", "C. 北京紫禁城（故宮）", "D. 阿房宮"],
        answer: 2,
        explanation: "紫禁城始建於明永樂年間，為明清兩代的皇家宮殿。"
      },
      {
        question: "1911年爆發並最終推翻清朝統治、結束中國兩千多年君主帝制的革命是？",
        options: ["A. 太平天國運動", "B. 戊戌變法", "C. 辛亥革命", "D. 義和團運動"],
        answer: 2,
        explanation: "辛亥革命成功推翻了清王朝，建立了亞洲第一個共和國。"
      }
    ]
  },

  // === 西方歷史 (Western History) ===
  "egypt-meso": {
    id: "egypt-meso",
    region: "western",
    title: "古埃及與美索不達米亞",
    years: "約前3100 - 前539年",
    eraTag: "大河文明",
    bgImage: "assets/western_hero.jpg",
    desc: "兩河流域與尼羅河孕育出的燦爛古文明，誕生了世界最早的楔形文字、金字塔建築與《漢摩拉比法典》。",
    tags: ["金字塔", "漢摩拉比法典", "楔形文字", "尼羅河"],
    capital: "孟菲斯 / 巴比倫 / 烏爾",
    duration: "約2500年",
    overview: `在底格里斯河與幼發拉底河交會的美索不達米亞（兩河流域），蘇美卡人發明了人類最早的楔形文字，古巴比倫王國頒布了著名的《漢摩拉比法典》。
    與此同時，尼羅河流域的古埃及文明建立了龐大的法老專制國家，建造了矗立千年的金字塔與獅身人面像，並發展出太陽曆與象形文字。`,
    highlight: "「以眼還眼，以牙還牙。」《漢摩拉比法典》是世界上第一部比較完備的成文法典。",
    timeline: [
      { year: "約前3500年", title: "蘇美文字誕生", desc: "發明楔形文字，人類正式進入有文字記載的歷史。" },
      { year: "約前3100年", title: "古埃及統一", desc: "美尼斯統一上下埃及，建立第一王朝。" },
      { year: "約前2560年", title: "吉薩大金字塔建造", desc: "胡夫法老興建世界上最大、最著名的石造建築金字塔。" },
      { year: "約前1750年", title: "《漢摩拉比法典》頒布", desc: "古巴比倫國王漢摩拉比刻寫成文法典於玄武岩石碑上。" }
    ],
    figures: [
      { name: "漢摩拉比", role: "古巴比倫帝王", icon: "⚖️", desc: "統一兩河流域，頒布著名的成文法典《漢摩拉比法典》。" },
      { name: "胡夫", role: "古埃及法老", icon: "🔺", desc: "興建吉薩大金字塔，展現古埃及極致的建築技術與法老權力。" },
      { name: "圖坦卡門", role: "埃及著名法老", icon: "👑", desc: "其黃金面具與保存完好的陵墓成為古埃及文明的極致代表。" }
    ],
    achievements: [
      "🔺 **吉薩大金字塔**: 世界七大奇蹟中唯一保存至今的古代巨石建築。",
      "📜 **楔形文字 & 象形文字**: 人類歷史上最早的成熟書寫體系。",
      "⚖️ **《漢摩拉比法典》**: 刻在石碑上的古老成文法典，奠定法律文明體系。"
    ],
    quiz: [
      {
        question: "世界上已知最早的成文法典之一，奉行「以眼還眼」原則的是？",
        options: ["A. 《十二銅表法》", "B. 《漢摩拉比法典》", "C. 《拿破崙法典》", "D. 《查士丁尼法典》"],
        answer: 1,
        explanation: "《漢摩拉比法典》由古巴比倫國王漢摩拉比頒布，刻於石碑之上。"
      },
      {
        question: "蘇美人在美索不達米亞地區發明的世界上最早的文字體系被稱為？",
        options: ["A. 象形文字", "B. 梵文", "C. 楔形文字", "D. 拉丁文"],
        answer: 2,
        explanation: "蘇美人用削尖的蘆葦桿在泥板上壓印文字，筆劃形似木楔，故稱楔形文字。"
      },
      {
        question: "孕育出古埃及金字塔與法老文明的偉大河流是？",
        options: ["A. 尼羅河", "B. 底格里斯河", "C. 亞馬遜河", "D. 多瑙河"],
        answer: 0,
        explanation: "古希臘歷史學家希羅多德曾說：「埃及是尼羅河的贈禮。」"
      }
    ]
  },

  "greece": {
    id: "greece",
    region: "western",
    title: "古希臘文明",
    years: "約前800 - 前146年",
    eraTag: "古典搖籃",
    bgImage: "assets/western_greece_rome.jpg",
    desc: "西方文明與民主政治的搖籃。雅典城邦開創公民民主，蘇格拉底等哲學三哲與奧林匹克運動會影響後世至今。",
    tags: ["雅典民主", "奧林匹克", "哲學三哲", "亞歷山大"],
    capital: "雅典 / 斯巴達 / 馬其頓",
    duration: "約650年",
    overview: `古希臘由許多獨立的城邦組成，其中以追求民主與藝術的「雅典」和強調軍事紀律的「斯巴達」最著名。
    雅典伯里克利時代將公民民主政治推向高峰。蘇格拉底、柏拉圖、亞里斯多德「哲學三哲」奠定了西洋哲學體系，亞歷山大大帝的東征則將希臘文化擴散至歐亞非廣袤土地。`,
    highlight: "「未經審視的人生是不值得過的。」（蘇格拉底）希臘文明開啟了人類理性思考與民主探索。",
    timeline: [
      { year: "前776年", title: "第一屆古代奧林匹克運動會", desc: "在奧林匹亞舉辦競技大會，各城邦停戰和平競技。" },
      { year: "前490年", title: "馬拉松戰役", desc: "雅典軍隊擊敗波斯帝國侵略，信使長跑傳捷報誕生馬拉松運動。" },
      { year: "前431年", title: "伯羅奔尼撒戰爭爆發", desc: "雅典同盟與斯巴達同盟爆發內戰，希臘城邦逐漸走向衰落。" },
      { year: "前334年", title: "亞歷山大大帝東征", desc: "建立橫跨歐亞非的龐大帝國，開創希臘化時代。" }
    ],
    figures: [
      { name: "蘇格拉底", role: "哲學宗師", icon: "🏛️", desc: "倡導詰問法與理性思考，被譽為西方哲學的奠基人。" },
      { name: "亞歷山大大帝", role: "馬基頓國王", icon: "⚔️", desc: "軍事奇才，創立龐大帝國，將希臘文化推廣至東方。" },
      { name: "伯里克利", role: "雅典政治家", icon: "🗳️", desc: "推動雅典黃金時代，將城邦民主政治發展至鼎盛。" }
    ],
    achievements: [
      "🏛️ **帕德嫩神廟**: 希臘古典建築最高成就，展現黃金比例美學。",
      "🗳️ **雅典公民民主**: 人類歷史上最早的直接民主政治實驗。",
      "🏅 **古代奧林匹克**: 現代奧林匹克運動會的精神與體育歷史源頭。"
    ],
    quiz: [
      {
        question: "被譽為西方哲學奠基人，因倡導理性詰問而被雅典城邦判處飲鴆身亡的哲學家是？",
        options: ["A. 柏拉圖", "B. 亞里斯多德", "C. 蘇格拉底", "D. 畢達哥拉斯"],
        answer: 2,
        explanation: "蘇格拉底是希臘哲學三哲之首，主張「認識你自己」。"
      },
      {
        question: "開創雅典黃金時代，使直接民主政治達到極致的雅典領袖是？",
        options: ["A. 伯里克利", "B. 亞歷山大", "C. 庇西特拉圖", "D. 梭倫"],
        answer: 0,
        explanation: "伯里克利執政期間發放津貼鼓勵公民參政，建造了帕德嫩神廟。"
      },
      {
        question: "古代奧林匹克運動會最早發源於哪個國家/地區？",
        options: ["A. 古羅馬", "B. 古希臘", "C. 古埃及", "D. 波斯帝國"],
        answer: 1,
        explanation: "公元前776年在古希臘奧林匹亞舉辦了第一屆古代奧運會。"
      }
    ]
  },

  "rome": {
    id: "rome",
    region: "western",
    title: "古羅馬帝國",
    years: "前753 - 公元476年",
    eraTag: "超級強權",
    bgImage: "assets/western_greece_rome.jpg",
    desc: "從台伯河畔城邦演變為橫跨歐亞非的超級帝國。健全的羅馬法體系、圓頂拱門工程與拉丁文影響深遠。",
    tags: ["羅馬共和", "凱撒大帝", "羅馬競技場", "十二銅表法"],
    capital: "羅馬 / 君士坦丁堡",
    duration: "約1200年",
    overview: `羅馬經歷了王政、共和與帝國三個時期。共和時期設立執政官與元老院，並頒布《十二銅表法》。
    凱撒大帝奠定獨裁基礎，其養子屋大維（奧古斯都）開創「羅馬和平」盛世。帝國橫跨地中海，建築如羅馬競技場與高架渠宏偉壯觀。476年西羅馬帝國滅亡，標誌著歐洲中世紀的開始。`,
    highlight: "「條條大路通羅馬。」羅馬的法律制度、道路工程與軍事管理深刻塑造了近代歐洲文明。",
    timeline: [
      { year: "前450年", title: "《十二銅表法》頒布", desc: "羅馬第一部成文法典，打破貴族對法律的壟斷。" },
      { year: "前44年", title: "凱撒大帝被刺身亡", desc: "凱撒實行終身獨裁，在元老院遭刺殺，共和體制瓦解。" },
      { year: "前27年", title: "屋大維建立羅馬帝國", desc: "獲尊稱「奧古斯都」，開啟兩百年的「羅馬和平」。" },
      { year: "公元313年", title: "《米蘭敕令》頒布", desc: "君士坦丁大帝承認基督教合法地位，後成為國教。" },
      { year: "公元476年", title: "西羅馬帝國滅亡", desc: "日耳曼將領廢黜西羅馬最後一位皇帝，古代歐洲終結。" }
    ],
    figures: [
      { name: "凱撒大帝", role: "羅馬終身獨裁官", icon: "👑", desc: "傑出軍事家與政治家，征服高盧，奠定帝國基礎。" },
      { name: "屋大維 (奧古斯都)", role: "羅馬第一位皇帝", icon: "🏛️", desc: "開創羅馬帝國，締造和平繁榮的「奧古斯都時代」。" },
      { name: "西塞羅", role: "羅馬演說家與哲學家", icon: "🗣️", desc: "共和制度堅定捍衛者，將希臘哲學翻譯引進拉丁世界。" }
    ],
    achievements: [
      "🏟️ **羅馬圓形競技場**: 可容納五萬人的水泥拱門巨型競技場。",
      "⚖️ **羅馬法體系**: 包含《十二銅表法》與民法大典，現代大陸法系的基礎。",
      "🛣️ **羅馬高架渠與大道**: 精湛的土木工程，建造了貫通帝國數萬公里的石板大道。"
    ],
    quiz: [
      {
        question: "羅馬帝國第一位獲尊稱為「奧古斯都」的皇帝是？",
        options: ["A. 凱撒", "B. 屋大維", "C. 暴君尼祿", "D. 君士坦丁"],
        answer: 1,
        explanation: "屋大維於公元前27年接受元老院授予的「奧古斯都」（神聖尊貴者）稱號。"
      },
      {
        question: "現代許多國家法律體系的基石，發源於古羅馬的哪一項法律成果？",
        options: ["A. 漢摩拉比法典", "B. 羅馬法 (十二銅表法)", "C. 拿破崙法典", "D. 大憲章"],
        answer: 1,
        explanation: "羅馬法（包含民法大全與十二銅表法）奠定了現代大陸法系的架構。"
      },
      {
        question: "標誌著歐洲古代歷史結束、中世紀開始的重大事件是？",
        options: ["A. 亞歷山大帝國崩解", "B. 布匿戰爭爆發", "C. 西羅馬帝國滅亡", "D. 東羅馬帝國滅亡"],
        answer: 2,
        explanation: "公元476年西羅馬帝國滅亡，歐洲進入了漫長的中世紀時期。"
      }
    ]
  },

  "medieval": {
    id: "medieval",
    region: "western",
    title: "中世紀歐洲",
    years: "公元476 - 1453年",
    eraTag: "信仰與騎士",
    bgImage: "assets/western_hero.jpg",
    desc: "采邑封建制度與天主教信仰交織的千年中世紀。騎士精神盛行，經歷十字軍東征、哥德式教堂興建與黑死病打擊。",
    tags: ["騎士精神", "十字軍東征", "哥德式建築", "黑死病"],
    capital: "君士坦丁堡 / 亞琛 / 巴黎",
    duration: "約1000年",
    overview: `西羅馬滅亡後，日耳曼人在歐洲建立了許多王國，其中法蘭克王國的查理曼大帝建立了龐大帝國。
    中世紀社會以「采邑封建制」與「天主教會」為雙重核心。十字軍東征促進了東西方貿易交流；哥德式教堂（如巴黎聖母院）尖拱與彩色玻璃窗直指天空；14世紀的黑死病雖然摧殘人口，卻也推動了社會變革。`,
    highlight: "「主是我堅固保障。」天主教會與騎士精神構成了中世紀歐洲社會的精神支柱。",
    timeline: [
      { year: "800年", title: "查理曼加冕為帝", desc: "教皇利奧三世為查理曼加冕，法蘭克帝國達鼎盛。" },
      { year: "1096年", title: "第一次十字軍東征", desc: "教皇烏爾班二世號召東征，攻佔耶路撒冷。" },
      { year: "1347 - 1351年", title: "黑死病大流行", desc: "鼠疫橫掃歐洲，造成三分之一人口死亡，震撼封建秩序。" },
      { year: "1453年", title: "拜占庭帝國滅亡", desc: "鄂圖曼帝國攻陷君士坦丁堡，東羅馬帝國滅亡。" }
    ],
    figures: [
      { name: "查理曼大帝", role: "法蘭克國王", icon: "👑", desc: "統一西歐大部分地區，推動「查理曼文藝復興」。" },
      { name: "聖女貞德", role: "法國民族英雄", icon: "⚔️", desc: "在英法百年戰爭中率領法軍擊敗英軍，奉獻生命的愛國少女。" },
      { name: "獅心王理查", role: "英格蘭國王", icon: "🛡️", desc: "第三次十字軍東征的傳奇騎士領袖。" }
    ],
    achievements: [
      "🏰 **哥德式大教堂**: 如巴黎聖母院與科隆大教堂，具飛扶壁與彩色花窗玻璃。",
      "🎓 **歐洲早期大學誕生**: 如牛津大學、劍橋大學與波隆那大學建立。",
      "🛡️ **騎士文學與法典**: 尊崇勇敢、忠誠、榮譽與保護弱者的騎士道精神。"
    ],
    quiz: [
      {
        question: "中世紀歐洲建築樣式中，以高聳尖拱、飛扶壁與巨大彩色玻璃花窗為特徵的是？",
        options: ["A. 羅曼式", "B. 巴洛克式", "C. 哥德式", "D. 洛可可式"],
        answer: 2,
        explanation: "哥德式建築追求向天空延伸的高聳感，光線透過彩色玻璃帶來神聖氛圍。"
      },
      {
        question: "在英法百年戰爭中率領法軍解救奧爾良，成為法國民族英雄的少女是？",
        options: ["A. 伊莉莎白一世", "B. 聖女貞德", "C. 瑪麗安娜", "D. 克麗奧佩脫拉"],
        answer: 1,
        explanation: "聖女貞德以堅定信仰率軍抗英，被尊為法國英雄。"
      },
      {
        question: "14世紀橫掃歐洲，造成約三分之一人口死亡並震撼封建社會的大爆發傳染病是？",
        options: ["A. 天花", "B. 黑死病 (鼠疫)", "C. 霍亂", "D. 西班牙流感"],
        answer: 1,
        explanation: "黑死病引發了深遠的經濟與社會變革，加速了中世紀的結束。"
      }
    ]
  },

  "renaissance": {
    id: "renaissance",
    region: "western",
    title: "文藝復興與大航海時代",
    years: "14 - 17世紀",
    eraTag: "理性與探索",
    bgImage: "assets/western_hero.jpg",
    desc: "思想藝術的大覺醒與地理大發現。人文主義打破神學枷鎖，哥倫布與麥哲倫航向海洋開創全球化新時代。",
    tags: ["達芬奇", "人文主義", "哥倫布發現新大陸", "日心說"],
    capital: "佛羅倫斯 / 威尼斯 / 里斯本",
    duration: "約300年",
    overview: `文藝復興發源於義大利佛羅倫斯，提倡以人為本的「人文主義」，復興古典希臘羅馬文化。達芬奇、米開朗基羅創造了無與倫比的藝術傑作。
    與此同時，哥倫布橫渡大西洋到達美洲，麥哲倫船隊完成人類首次環球航行。哥白尼與伽利略提出「日心說」，開啟了現代科學革命。`,
    highlight: "「知識就是力量。」文藝復興與地理大發現將人類視野拉開至全球文明階段。",
    timeline: [
      { year: "1492年", title: "哥倫布發現美洲新大陸", desc: "率領西班牙船隊橫渡大西洋，開啟大航海時代。" },
      { year: "1503 - 1519年", title: "達芬奇創作《蒙娜麗莎》", desc: "文藝復興全才大師達芬奇繪製永恆傳世名畫。" },
      { year: "1519 - 1522年", title: "麥哲倫船隊環球航行", desc: "證實地球是圓的，全球航線首次貫通。" },
      { year: "1543年", title: "哥白尼發表《天體運行論》", desc: "提出「日心說」，震撼天主教會地心說宇宙觀。" }
    ],
    figures: [
      { name: "達芬奇", role: "文藝復興全才大師", icon: "🎨", desc: "畫家、雕塑家、發明家與解剖學家，代表作《蒙娜麗莎》與《最後的晚餐》。" },
      { name: "哥倫布", role: "大航海家", icon: "⛵", desc: "橫渡大西洋發現新大陸，連結新舊大陸的文明交流。" },
      { name: "莎士比亞", role: "英國劇作家", icon: "🎭", desc: "文學巨擘，創作《哈姆雷特》、《羅密歐與茱麗葉》等不朽名劇。" },
      { name: "伽利略", role: "近代物理學之父", icon: "🔭", desc: "使用望遠鏡觀察天體，支持哥白尼日心說，奠定實驗科學精神。" }
    ],
    achievements: [
      "🖼️ **《蒙娜麗莎》與《大衛像》**: 人文主義藝術高峰傑作。",
      "🌍 **麥哲倫環球航行**: 人類歷史上首次完成環繞地球一周的航海壯舉。",
      "🔭 **日心說與現代科學法**: 擺脫神學束縛，建立以觀察與實驗為基礎的科學範式。"
    ],
    quiz: [
      {
        question: "創作《蒙娜麗莎》與《最後的晚餐》，被譽為文藝復興全才巨匠的大師是？",
        options: ["A. 拉斐爾", "B. 米開朗基羅", "C. 達芬奇 (列奧納多·達文西)", "D. 提香"],
        answer: 2,
        explanation: "達芬奇在藝術、科學、工程領域均有卓越貢獻。"
      },
      {
        question: "1492年率領西班牙船隊橫渡大西洋，發現美洲新大陸的大航海家是？",
        options: ["A. 麥哲倫", "B. 哥倫布", "C. 達伽馬", "D. 迪亞士"],
        answer: 1,
        explanation: "哥倫布首航美洲開啟了歐美之間的地理大發現時代。"
      },
      {
        question: "提出了打破天主教會「地心說」統治、認為太陽才是宇宙中心的科學家是？",
        options: ["A. 牛頓", "B. 達爾文", "C. 哥白尼", "D. 愛因斯坦"],
        answer: 2,
        explanation: "哥白尼於1543年出版《天體運行論》提出太陽中心說。"
      }
    ]
  },

  "modern-west": {
    id: "modern-west",
    region: "western",
    title: "工業革命與近現代",
    years: "18 - 20世紀",
    eraTag: "科技與變革",
    bgImage: "assets/western_hero.jpg",
    desc: "蒸汽機引爆工業革命，啟蒙運動倡導民主自由。科技爆發與兩次世界大戰重塑現代全球秩序。",
    tags: ["蒸汽機", "啟蒙運動", "法國大革命", "現代科技"],
    capital: "倫敦 / 巴黎 / 華盛頓",
    duration: "約250年",
    overview: `18世紀瓦特改良蒸汽機，開啟了機器生產替代手工勞動的「工業革命」，鐵路與工廠深刻改變了人類的生活型態。
    啟蒙運動的思想家（伏爾泰、孟德斯鳩、盧梭）提出了自由、平等、三權分立的民主理念，引發了美國獨立戰爭與法國大革命。20世紀科技進步神速，經歷了兩次世界大戰後，人類邁入資訊時代與太空探索領域。`,
    highlight: "「人人生而平等。」民主政治理念與科學技術創新，共同驅動了現代人類社會的飛躍發展。",
    timeline: [
      { year: "1769年", title: "瓦特改良蒸汽機", desc: "獲得蒸汽機專利，揭開第一次工業革命序幕。" },
      { year: "1776年", title: "美國《獨立宣言》發表", desc: "宣示人人人權與獨立，建立近代第一個民主共和國。" },
      { year: "1789年", title: "法國大革命爆發", desc: "攻占巴士底監獄，頒布《人權宣言》，摧毀封建專制。" },
      { year: "1969年", title: "阿波羅11號登月", desc: "阿姆斯壯踩下人類在月球上的第一個腳印。" }
    ],
    figures: [
      { name: "詹姆斯·瓦特", role: "工業革命先驅", icon: "⚙️", desc: "改良萬能蒸汽機，為工業化提供源源不絕的動力。" },
      { name: "拿破崙", role: "法蘭西第一帝國皇帝", icon: "⚔️", desc: "軍事天才，頒布《拿破崙法典》，將大革命思想播撒至全歐洲。" },
      { name: "牛頓", role: "物理學巨擘", icon: "🍎", desc: "發現萬有引力定律與三大運動定律，奠定古典物理學基石。" },
      { name: "愛因斯坦", role: "現代物理學之父", icon: "💡", desc: "提出相對論，開創了質能等價方程式 (E=mc²)。" }
    ],
    achievements: [
      "🚂 **蒸汽機與鐵路網路**: 大幅提升交通運輸與工業生產效率。",
      "🏛️ **三權分立與民主憲政**: 現代民主國家的政治制衡典範。",
      "🚀 **相對論與太空探索**: 拓展人類對宇宙本質與空間時間的認識。"
    ],
    quiz: [
      {
        question: "改良萬能蒸汽機，為第一次工業革命提供強大動力的發明家是？",
        options: ["A. 愛迪生", "B. 瓦特", "C. 史蒂芬生", "D. 特斯拉"],
        answer: 1,
        explanation: "瓦特改良蒸汽機是工業革命最核心的技術突破。"
      },
      {
        question: "1789年爆發並頒布《人權宣言》，喊出「自由、平等、博愛」口號的革命是？",
        options: ["A. 英國光榮革命", "B. 美國獨立戰爭", "C. 法國大革命", "D. 俄國十月革命"],
        answer: 2,
        explanation: "法國大革命極大打擊了歐洲封建勢力，傳播了民主自由思想。"
      },
      {
        question: "發現萬有引力定律與三大運動定律，奠定古典物理學體系的科學家是？",
        options: ["A. 愛因斯坦", "B. 伽利略", "C. 居禮夫人", "D. 牛頓"],
        answer: 3,
        explanation: "艾薩克·牛頓出版《自然哲學的數學原理》，建立了物理學經典體系。"
      }
    ]
  }
};

// 趣味歷史小知識庫
const HISTORICAL_TRIVIA = [
  "💡 **歷史小常識**：秦始皇統一文字時所採用的標準字體是「小篆」，後來為了書寫快速，民間逐漸流行更簡便的「隸書」。",
  "💡 **歷史小常識**：古希臘的雅典曾經實行「陶片放逐制」，公民可以把心中威脅民主的政客名字刻在陶片上，票數過高者會被放逐10年！",
  "💡 **歷史小常識**：唐朝長安城實行嚴格的「坊市制」，居民區（坊）與商業區（市）分開，且晚上有宵禁制度！",
  "💡 **歷史小常識**：古羅馬的混凝土技術非常驚人，羅馬競技場與萬神殿使用了火山灰混凝土，歷經兩千年依然堅固！",
  "💡 **歷史小常識**：北宋時期四川商人因為鐵錢太重不便攜帶，聯合創立了世界第一張紙幣「交子」。",
  "💡 **歷史小常識**：文藝復興大師達芬奇習慣使用「鏡像字」（從右往左反向書寫）記錄自己的發明筆記，需要照鏡子才能正常閱讀！"
];

// App 狀態管理
let state = {
  currentDynastyId: null,
  activeRegion: 'all', // 'all', 'chinese', 'western'
  completedDynasties: JSON.parse(localStorage.getItem('history_completed') || '[]'),
  totalScore: parseInt(localStorage.getItem('history_score') || '0'),
  activeFilter: 'all',
  searchQuery: ''
};

// 全局暴露控制函數 (確保 inline onclick 可調用)
window.openDynastyView = openDynastyView;
window.backToCatalog = backToCatalog;
window.checkAnswer = checkAnswer;
window.resetQuiz = resetQuiz;
window.switchToQuizTab = switchToQuizTab;
window.setRegionFilter = setRegionFilter;

// DOM 載入後初始化
document.addEventListener('DOMContentLoaded', () => {
  initUI();
  bindEvents();
  renderCatalog();
  updateProgressDisplay();
  showRandomTrivia();
});

// 監聽網址 Hash 變化
window.addEventListener('hashchange', () => {
  const hash = window.location.hash.replace('#', '');
  if (hash && DYNASTIES_DATA[hash]) {
    openDynastyView(hash);
  } else if (!hash) {
    backToCatalog();
  }
});

// 初始化與 Hash 檢查
function initUI() {
  const hash = window.location.hash.replace('#', '');
  if (hash && DYNASTIES_DATA[hash]) {
    openDynastyView(hash);
  }
}

// 切換中西方歷史大區
function setRegionFilter(region) {
  state.activeRegion = region;
  document.querySelectorAll('.region-tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.region === region);
  });
  renderCatalog();
}

// 綁定事件監聽
function bindEvents() {
  // 區域切換頁籤 (全部/中華歷史/西方歷史)
  document.querySelectorAll('.region-tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
      setRegionFilter(e.target.dataset.region);
    });
  });

  // 搜尋列輸入
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value.trim().toLowerCase();
      renderCatalog();
    });
  }

  // 朝代類別過濾按鈕
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      state.activeFilter = e.target.dataset.filter;
      renderCatalog();
    });
  });

  // 時間軸導覽點擊
  document.querySelectorAll('.timeline-node').forEach(node => {
    node.addEventListener('click', () => {
      const dynastyId = node.dataset.dynasty;
      if (dynastyId && DYNASTIES_DATA[dynastyId]) {
        openDynastyView(dynastyId);
      }
    });
  });

  // 返回目錄按鈕
  const btnBack = document.getElementById('btn-back-catalog');
  if (btnBack) {
    btnBack.addEventListener('click', backToCatalog);
  }

  // Logo 點擊返回首頁
  const logoArea = document.querySelector('.logo-area');
  if (logoArea) {
    logoArea.addEventListener('click', backToCatalog);
  }

  // 隨機知識按鈕
  const btnTrivia = document.getElementById('btn-next-trivia');
  if (btnTrivia) {
    btnTrivia.addEventListener('click', showRandomTrivia);
  }
}

// 渲染朝代目錄頁
function renderCatalog() {
  const gridContainer = document.getElementById('dynasty-grid');
  if (!gridContainer) return;

  gridContainer.innerHTML = '';

  const dynastiesList = Object.values(DYNASTIES_DATA);
  const filtered = dynastiesList.filter(dynasty => {
    // 中西區域過濾
    const matchRegion = state.activeRegion === 'all' || dynasty.region === state.activeRegion;
    // 類別過濾
    const matchFilter = state.activeFilter === 'all' || dynasty.eraTag === state.activeFilter;
    // 搜尋比對
    const matchSearch = !state.searchQuery || 
      dynasty.title.toLowerCase().includes(state.searchQuery) ||
      dynasty.desc.toLowerCase().includes(state.searchQuery) ||
      dynasty.tags.some(t => t.toLowerCase().includes(state.searchQuery));

    return matchRegion && matchFilter && matchSearch;
  });

  if (filtered.length === 0) {
    gridContainer.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
        <p style="font-size: 1.2rem; margin-bottom: 0.5rem;">🔍 查無符合條件的歷史內容</p>
        <p style="font-size: 0.9rem;">請嘗試切換「中華歷史 / 西方歷史」頁籤，或變更搜尋關鍵字。</p>
      </div>
    `;
    return;
  }

  filtered.forEach(dynasty => {
    const isCompleted = state.completedDynasties.includes(dynasty.id);
    const regionFlag = dynasty.region === 'chinese' ? '🇨🇳 中華' : '🏛️ 西方';
    const cardHtml = `
      <div class="dynasty-card" onclick="openDynastyView('${dynasty.id}')" style="cursor: pointer;">
        <div class="card-banner" style="background-image: url('${dynasty.bgImage}')">
          <span class="region-badge">${regionFlag}</span>
          <span class="era-badge">${dynasty.eraTag}</span>
        </div>
        <div class="dynasty-card-body">
          <div class="dynasty-card-title">
            <span>${dynasty.title}</span>
            <span class="dynasty-years">${dynasty.years}</span>
          </div>
          <p class="dynasty-desc">${dynasty.desc}</p>
          <div class="tag-list">
            ${dynasty.tags.map(t => `<span class="tag-item"># ${t}</span>`).join('')}
          </div>
          <div class="card-action">
            <div class="status-badge ${isCompleted ? 'completed' : ''}">
              ${isCompleted ? '✓ 已完成學習' : '📖 點擊開啟學習'}
            </div>
            <button class="btn-learn" onclick="event.stopPropagation(); openDynastyView('${dynasty.id}')">
              進入學習 →
            </button>
          </div>
        </div>
      </div>
    `;
    gridContainer.insertAdjacentHTML('beforeend', cardHtml);
  });
}

// 開啟指定朝代學習頁面
function openDynastyView(dynastyId) {
  const data = DYNASTIES_DATA[dynastyId];
  if (!data) return;

  state.currentDynastyId = dynastyId;
  window.location.hash = dynastyId;

  document.getElementById('catalog-view').style.display = 'none';
  const detailView = document.getElementById('dynasty-detail-view');
  detailView.classList.add('active');

  window.scrollTo({ top: 0, behavior: 'smooth' });

  document.getElementById('detail-title').textContent = data.title;
  document.getElementById('detail-subtitle').textContent = `${data.years} · 都城/中心：${data.capital} · 歷時/跨度：${data.duration}`;
  document.getElementById('detail-breadcrumb-current').textContent = data.title;
  
  const headerCard = document.getElementById('dynasty-header-bg');
  if (headerCard) {
    headerCard.style.backgroundImage = `url('${data.bgImage}')`;
  }

  renderOverviewPanel(data);
  renderTimelinePanel(data);
  renderFiguresPanel(data);
  renderQuizPanel(data);

  initTabs();
}

// 返回目錄頁面
function backToCatalog() {
  state.currentDynastyId = null;
  history.pushState("", document.title, window.location.pathname + window.location.search);

  document.getElementById('dynasty-detail-view').classList.remove('active');
  document.getElementById('catalog-view').style.display = 'block';

  renderCatalog();
  updateProgressDisplay();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Tab 切換處理
function initTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const panels = document.querySelectorAll('.tab-panel');

  tabBtns.forEach(btn => {
    btn.onclick = () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetPanel = document.getElementById(`panel-${btn.dataset.tab}`);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    };
  });
}

// 渲染概覽面板
function renderOverviewPanel(data) {
  const panel = document.getElementById('panel-overview');
  panel.innerHTML = `
    <div class="overview-grid">
      <div>
        <div class="content-block">
          <h3 class="block-title">📜 歷史發展與時代背景</h3>
          <p class="block-text">${data.overview.replace(/\n/g, '<br><br>')}</p>
          <div class="highlight-box">
            ${data.highlight}
          </div>
        </div>

        <div class="content-block">
          <h3 class="block-title">💡 重要文化與科技成就</h3>
          <ul style="list-style: none; padding: 0;">
            ${data.achievements.map(a => `<li style="margin-bottom: 0.8rem; font-size: 1rem; color: var(--text-sub);">${a}</li>`).join('')}
          </ul>
        </div>
      </div>

      <div>
        <div class="sidebar-card">
          <h4 style="color: var(--primary-gold); margin-bottom: 1rem; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 0.5rem;">
            📊 歷史檔案庫
          </h4>
          <div class="stat-item">
            <span class="stat-label">文明/朝代</span>
            <span class="stat-val">${data.title}</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">所屬區域</span>
            <span class="stat-val">${data.region === 'chinese' ? '🇨🇳 中華歷史' : '🏛️ 西方歷史'}</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">歷史時期</span>
            <span class="stat-val">${data.years}</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">中心都城</span>
            <span class="stat-val">${data.capital}</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">時代特色</span>
            <span class="stat-val">${data.eraTag}</span>
          </div>
        </div>

        <div class="sidebar-card" style="text-align: center; background: linear-gradient(135deg, rgba(168, 46, 46, 0.15), rgba(212, 175, 55, 0.1));">
          <h4 style="color: var(--primary-gold); margin-bottom: 0.5rem;">🎯 課後學習小挑戰</h4>
          <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1rem;">完成該單元 3 道知識題即可標記學習完成！</p>
          <button class="btn-learn" style="width: 100%;" onclick="switchToQuizTab()">立即開始測驗 ✍️</button>
        </div>
      </div>
    </div>
  `;
}

// 切換至測驗 Tab
function switchToQuizTab() {
  const quizTabBtn = document.querySelector('.tab-btn[data-tab="quiz"]');
  if (quizTabBtn) {
    quizTabBtn.click();
  }
}

// 渲染時間軸面板
function renderTimelinePanel(data) {
  const panel = document.getElementById('panel-timeline');
  panel.innerHTML = `
    <div class="content-block">
      <h3 class="block-title">⏳ ${data.title} 重大歷史事件時間軸</h3>
      <div class="timeline-vertical">
        ${data.timeline.map(ev => `
          <div class="event-card">
            <span class="event-year">${ev.year}</span>
            <h4 class="event-title">${ev.title}</h4>
            <p style="font-size: 0.92rem; color: var(--text-sub);">${ev.desc}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// 渲染人物面板
function renderFiguresPanel(data) {
  const panel = document.getElementById('panel-figures');
  panel.innerHTML = `
    <div class="content-block">
      <h3 class="block-title">👤 ${data.title} 關鍵歷史人物</h3>
      <div class="figure-grid" style="margin-top: 1.5rem;">
        ${data.figures.map(fig => `
          <div class="figure-card">
            <div class="figure-avatar">${fig.icon}</div>
            <h4 class="figure-name">${fig.name}</h4>
            <div class="figure-role">${fig.role}</div>
            <p class="figure-desc">${fig.desc}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// 渲染課後測驗面板
function renderQuizPanel(data) {
  const panel = document.getElementById('panel-quiz');

  let questionsHtml = data.quiz.map((q, qIndex) => `
    <div class="question-box" id="q-box-${qIndex}">
      <h4 class="question-title">問題 ${qIndex + 1}：${q.question}</h4>
      <div class="options-list">
        ${q.options.map((opt, oIndex) => `
          <button class="option-btn" onclick="checkAnswer('${data.id}', ${qIndex}, ${oIndex})">
            <span>${opt}</span>
            <span class="opt-status" id="opt-status-${qIndex}-${oIndex}"></span>
          </button>
        `).join('')}
      </div>
      <div class="quiz-feedback" id="feedback-${qIndex}"></div>
    </div>
  `).join('');

  panel.innerHTML = `
    <div class="quiz-container">
      <div class="quiz-header">
        <div>
          <h3 style="color: var(--primary-gold); font-size: 1.4rem;">✍️ ${data.title} 課後知識小考</h3>
          <p style="font-size: 0.88rem; color: var(--text-muted); margin-top: 0.2rem;">請點擊選項回答問題，系統將即時判定並計算成績。</p>
        </div>
        <div class="quiz-score-badge" id="quiz-score-display">完成問答即可獲得獎勵分數</div>
      </div>
      
      ${questionsHtml}

      <div class="quiz-actions">
        <button class="btn-catalog-back" onclick="resetQuiz('${data.id}')">🔄 重置測驗</button>
        <button class="btn-learn" onclick="backToCatalog()">完成並返回目錄 →</button>
      </div>
    </div>
  `;
}

// 測驗答題判定
function checkAnswer(dynastyId, qIndex, selectedOptIndex) {
  const data = DYNASTIES_DATA[dynastyId];
  const qData = data.quiz[qIndex];
  const qBox = document.getElementById(`q-box-${qIndex}`);
  const feedbackEl = document.getElementById(`feedback-${qIndex}`);

  if (qBox.classList.contains('answered')) return;
  qBox.classList.add('answered');

  const buttons = qBox.querySelectorAll('.option-btn');
  buttons.forEach((btn, idx) => {
    btn.style.pointerEvents = 'none';
    if (idx === qData.answer) {
      btn.classList.add('correct');
    } else if (idx === selectedOptIndex) {
      btn.classList.add('wrong');
    }
  });

  const isCorrect = selectedOptIndex === qData.answer;
  if (isCorrect) {
    feedbackEl.className = "quiz-feedback show correct-bg";
    feedbackEl.innerHTML = `🎉 答對了！ ${qData.explanation}`;
    state.totalScore += 10;
  } else {
    feedbackEl.className = "quiz-feedback show wrong-bg";
    feedbackEl.innerHTML = `❌ 答錯了。正確答案為 ${qData.options[qData.answer]}。<br>${qData.explanation}`;
  }

  checkDynastyCompletion(dynastyId);
  saveState();
  updateProgressDisplay();
}

// 檢查朝代學習完成
function checkDynastyCompletion(dynastyId) {
  if (!state.completedDynasties.includes(dynastyId)) {
    state.completedDynasties.push(dynastyId);
    saveState();
  }
}

// 重置測驗
function resetQuiz(dynastyId) {
  const data = DYNASTIES_DATA[dynastyId];
  renderQuizPanel(data);
}

// 更新頂部學習進度
function updateProgressDisplay() {
  const total = Object.keys(DYNASTIES_DATA).length;
  const completedCount = state.completedDynasties.length;
  
  const countEl = document.getElementById('completed-count');
  if (countEl) countEl.textContent = `${completedCount} / ${total}`;

  const scoreEl = document.getElementById('total-score');
  if (scoreEl) scoreEl.textContent = `${state.totalScore} 分`;
}

// 隨機歷史知識卡
function showRandomTrivia() {
  const triviaEl = document.getElementById('trivia-text');
  if (!triviaEl) return;
  const randomIndex = Math.floor(Math.random() * HISTORICAL_TRIVIA.length);
  triviaEl.innerHTML = HISTORICAL_TRIVIA[randomIndex];
}

// 保存狀態至 localStorage
function saveState() {
  localStorage.setItem('history_completed', JSON.stringify(state.completedDynasties));
  localStorage.setItem('history_score', state.totalScore.toString());
}
