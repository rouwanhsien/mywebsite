/* ==========================================================================
   中華歷史時光長廊 - 腳本邏輯 (script.js)
   功能：頁面切換、數據渲染、過濾搜尋、互動測驗與學習進度管理
   ========================================================================== */

// 歷史朝代資料庫
const DYNASTIES_DATA = {
  "shang-zhou": {
    id: "shang-zhou",
    title: "夏商周時代",
    years: "約前2070 - 前256年",
    eraTag: "早期文明",
    bgImage: "assets/shang_zhou.jpg",
    desc: "中華文明的曙光與青銅器鼎盛時期，奠定禮樂制度、甲骨文體系與春秋戰國百家爭鳴的思想黃金時代。",
    tags: ["青銅器", "甲骨文", "禮樂制度", "百家爭鳴"],
    capital: "鎬京 / 洛邑 / 殷",
    duration: "約1800年",
    overview: `夏商周是中華文明的早期階段。夏朝開啟「家天下」時代；商朝以發達的青銅文化與甲骨文著稱；周朝則建立起嚴密的「封建親戚，以藩屏周」宗法禮樂制度。
    到了春秋戰國時期，王室衰微，諸侯割據，激發了極大的思想活力，孔子、老子、墨子、韓非子等思想家輩出，形成了影響深遠的「百家爭鳴」。`,
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
  }
};

// 趣味歷史小知識庫
const HISTORICAL_TRIVIA = [
  "💡 **你不知道的歷史小知識**：秦始皇統一文字時所採用的標準字體是「小篆」，後來為了書寫快速，民間逐漸流行更簡便的「隸書」。",
  "💡 **你不知道的歷史小知識**：唐朝長安城實行嚴格的「坊市制」，居民區（坊）與商業區（市）分開，且晚上有宵禁制度！",
  "💡 **你不知道的歷史小知識**：北宋時期四川商人因為鐵錢太重不便攜帶，聯合創立了世界第一張紙幣「交子」。",
  "💡 **你不知道的歷史小知識**：著名的「萬里長城」並非單一朝代建成，秦、漢、明等朝代都大規模修築過長城，我們今天看到最完好的是明長城！",
  "💡 **你不知道的歷史小知識**：古代科舉考試中的「連中三元」，指的是在鄉試、會試、殿試中連續奪得第一名（解元、會元、狀元）。"
];

// App 狀態管理
let state = {
  currentDynastyId: null,
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

// DOM 載入後初始化
document.addEventListener('DOMContentLoaded', () => {
  initUI();
  bindEvents();
  renderCatalog();
  updateProgressDisplay();
  showRandomTrivia();
});

// 監聽網址 Hash 變化 (例如 #sui-tang)
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

// 綁定事件監聽
function bindEvents() {
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
    const matchFilter = state.activeFilter === 'all' || dynasty.eraTag === state.activeFilter;
    const matchSearch = !state.searchQuery || 
      dynasty.title.toLowerCase().includes(state.searchQuery) ||
      dynasty.desc.toLowerCase().includes(state.searchQuery) ||
      dynasty.tags.some(t => t.toLowerCase().includes(state.searchQuery));

    return matchFilter && matchSearch;
  });

  if (filtered.length === 0) {
    gridContainer.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
        <p style="font-size: 1.2rem; margin-bottom: 0.5rem;">🔍 查無符合條件的歷史內容</p>
        <p style="font-size: 0.9rem;">請嘗試更換搜尋關鍵字或選擇其他分類。</p>
      </div>
    `;
    return;
  }

  filtered.forEach(dynasty => {
    const isCompleted = state.completedDynasties.includes(dynasty.id);
    const cardHtml = `
      <div class="dynasty-card" onclick="openDynastyView('${dynasty.id}')" style="cursor: pointer;">
        <div class="card-banner" style="background-image: url('${dynasty.bgImage}')">
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

  // 切換頁面顯示
  document.getElementById('catalog-view').style.display = 'none';
  const detailView = document.getElementById('dynasty-detail-view');
  detailView.classList.add('active');

  // 滾動回頂部
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // 渲染朝代標頭資訊
  document.getElementById('detail-title').textContent = data.title;
  document.getElementById('detail-subtitle').textContent = `${data.years} · 首都：${data.capital} · 歷時：${data.duration}`;
  document.getElementById('detail-breadcrumb-current').textContent = data.title;
  
  const headerCard = document.getElementById('dynasty-header-bg');
  if (headerCard) {
    headerCard.style.backgroundImage = `url('${data.bgImage}')`;
  }

  // 渲染各個 Tab 內容
  renderOverviewPanel(data);
  renderTimelinePanel(data);
  renderFiguresPanel(data);
  renderQuizPanel(data);

  // 初始化 Tab 按鈕處理
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
            📊 朝代檔案庫
          </h4>
          <div class="stat-item">
            <span class="stat-label">朝代名稱</span>
            <span class="stat-val">${data.title}</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">歷史時期</span>
            <span class="stat-val">${data.years}</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">都城所在地</span>
            <span class="stat-val">${data.capital}</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">時代特色</span>
            <span class="stat-val">${data.eraTag}</span>
          </div>
        </div>

        <div class="sidebar-card" style="text-align: center; background: linear-gradient(135deg, rgba(168, 46, 46, 0.15), rgba(212, 175, 55, 0.1));">
          <h4 style="color: var(--primary-gold); margin-bottom: 0.5rem;">🎯 課後學習小挑戰</h4>
          <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1rem;">完成該朝代 3 道知識題即可標記學習完成！</p>
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
