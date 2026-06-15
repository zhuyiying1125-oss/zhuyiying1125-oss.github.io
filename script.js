// 1. 中草药题库（可自行无限扩充）
const herbList = [
    {
        name: "人参",
        desc: "多年生草本，根部入药，大补元气，是知名滋补类中草药。",
        detail: "人参主产于东北，味甘、微苦，性微温。"
    },
    {
        name: "当归",
        desc: "素有‘补血第一药’之称，常用于调理气血、活血止痛。",
        detail: "当归主要产自甘肃、云南，女性调理常用药材。"
    },
    {
        name: "枸杞",
        desc: "果实入药，色泽鲜红，明目养肝，日常可泡水饮用。",
        detail: "枸杞主产宁夏，性平味甘，老少皆宜。"
    },
    {
        name: "黄芪",
        desc: "根部粗壮，擅长补气固表，增强人体抵抗力。",
        detail: "黄芪是补气经典药材，多地均有种植。"
    },
    {
        name: "金银花",
        desc: "花初开白色，后转为黄色，清热解毒，常用于风热感冒。",
        detail: "金银花又名忍冬，是常用清热凉茶原料。"
    },
    {
        name: "甘草",
        desc: "味道甘甜，调和诸药，多数中药方剂中都会搭配使用。",
        detail: "甘草性平，有‘国老’之称，应用极广。"
    },
    {
        name: "淫羊藿",
        desc: "叶片入药，传统补益类药材，常用于温肾强筋、祛风除湿。",
        detail: "淫羊藿又名仙灵脾，多生长于山野林下，是经典补益中草药。"
    },
    {
        name: "杜仲",
        desc: "取树皮入药，折断有细密银丝相连，擅长补肝肾、强筋骨。",
        detail: "杜仲树全身可利用，树皮是核心药用部位，日常也可泡茶饮用。"
    },
    {
        name: "巴戟天",
        desc: "肉质根入药，外观呈弯曲结节状，温补肾阳、强健筋骨。",
        detail: "巴戟天主产于南方山地，药性温和，是传统补益名药。"
    },
    {
        name: "紫河车",
        desc: "为人胎盘加工制成，传统滋补药材，可补气养血、温肾益精。",
        detail: "紫河车药性温和，古时被视作名贵补益药材，现使用有严格规范。"
    },
    {
        name: "朱砂",
        desc: "天然矿物类药材，色泽鲜红，主要用于安神定惊、清热解毒。",
        detail: "朱砂主要成分为硫化汞，有毒性，仅可遵医嘱外用或少量入丸散，不可久服、大量服用。"
    },
    {
        name: "琥珀",
        desc: "古树脂化石入药，质地轻盈通透，擅长镇惊安神、活血散瘀。",
        detail: "琥珀形成历经千万年，既是药材也是天然饰品，多研末冲服使用。"
    },    
    {
        name: "白石英",
        desc: "矿物类药材，色白通透，能温肺下气、安神镇惊。",
        detail: "白石英质地坚硬，主入肺、心经，传统多用于肺寒咳喘、心神不宁。"
    },
    {
        name: "紫石英",
        desc: "石英矿石，外表呈紫色，重镇安神、温肾助阳功效突出。",
        detail: "紫石英是常用矿物药，质地重坠，内服多需煅制后使用。"
    },
    {
        name: "五色石英",
        desc: "集多种色泽于一体的石英矿石，古时视为名贵药材，可镇心明目、安心定神。",
        detail: "五色石英产量稀少，古代多作药用与把玩，如今临床使用较少。"
    },
    {
        name: "珊瑚",
        desc: "海洋珊瑚骨骼入药，质地疏松，有安神镇惊、明目退翳的作用。",
        detail: "珊瑚多为红色，传统常用于惊痫、目生翳障，入药需研磨成粉使用。"
    },
    {
        name: "长石",
        desc: "天然矿物药材，性味甘温，主功效为温中散寒、益气明目。",
        detail: "长石质地坚硬，古时入药可调理脾胃虚寒，现代临床应用不多。"
    },
    {
        name: "方解石",
        desc: "碳酸盐类矿物，色白或微黄，能清热泻火、除烦止渴。",
        detail: "方解石性寒，擅长清泻气分实热，用法多为打碎煎汤或研末外用。"
    },
    {
        name: "雨水",
        desc: "自然降落的常规雨水，性味甘凉，可清热润养，古时常作为煎药用水。",
        detail: "本草记载雨水洁净平和，能调和药性，适宜多数补益、清热方剂使用。"
    },
    {
        name: "立春雨水",
        desc: "立春日收取的雨水，药性平和温润，尤宜调配补中益气类汤药。",
        detail: "古人认为立春雨水得天地生发之气，是古时备受推崇的药用水源。"
    },
    {
        name: "梅雨水",
        desc: "梅雨时节收集的雨水，性凉解毒，外用可改善皮肤疮疹、疥癣。",
        detail: "江南梅雨水湿气偏重，多作外用洗敷，一般不用于内服煎药。"
    },
    {
        name: "液雨水",
        desc: "秋冬雾露、霜雪融成之水，质地清寒，擅长清心降火、润燥生津。",
        detail: "凝结于草木间的液雨水纯净阴寒，多用于内热、口干燥渴等症。"
    },
    {
        name: "潦水",
        desc: "雨后地面流动的积水，性味甘寒，可清热、解毒、利湿。",
        detail: "古人取洁净潦水入药，多用于湿热病症，煎制清利湿热类方剂。"
    },
    {
        name: "露水",
        desc: "夜间凝结在草木上的水珠，甘平清润，润肺明目、安神生津。",
        detail: "清晨采集百草露水，古时认为滋养五脏，常用来调药、润目。"
    },
    {
        name: "甘露",
        desc: "天降祥瑞之水，性味甘美清和，清热润燥、调和脏腑。",
        detail: "古籍记载甘露质地纯良，自古被视作珍贵药用水，可滋养身心。"
    },
    {
        name: "甘露蜜",
        desc: "草木上凝结的甜润汁液，甘平无毒，益气补中、润燥止咳。",
        detail: "味甜滋养，多用于体虚肺燥、津液不足，是天然滋养之物。"
    },
    {
        name: "明水",
        desc: "月夜承接的洁净清水，性寒清透，清心安神、涤除烦热。",
        detail: "需于月下收集静置，古时专用来调制安神、清热类丹药汤药。"
    },
    {
        name: "冬霜",
        desc: "冬日凝结的白霜，性味大寒，清热解毒、消肿止痛。",
        detail: "多外用，敷治热毒疮肿、口舌生疮、皮肤红肿热痛。"
    },
    {
        name: "腊雪",
        desc: "腊月降下的积雪，甘寒无毒，清热解暑、解毒止渴。",
        detail: "腊雪水久存不易变质，古代常储存起来，夏季解暑、调制药膏。"
    },
    {
        name: "雹",
        desc: "空中降下的冰粒，性味苦寒，可清热泻火、解诸热毒。",
        detail: "冰雹性寒峻烈，古时仅临时取用治大热烦渴，极少常规入药。"
    },
    {
        name: "夏冰",
        desc: "夏季储存的冰块冰水，大寒之性，清热除烦、止渴消暑。",
        detail: "专解暑热、高热烦渴，仅作临时降温使用，脾胃虚寒者忌用。"
    },
    {
        name: "神水",
        desc: "洁净灵泉之水，性味甘凉，安神定志、清热除邪。",
        detail: "古人视名山古泉为神水，常用于煎制养生、安神类汤药。"
    },
    {
        name: "半天河",
        desc: "高空落下的雨水，又称天河水，甘凉清上焦之火、清心润肺。",
        detail: "取自高空未落地之水，古时认为清气居多，善治头面、心肺热症。"
    },
    {
        name: "屋漏水",
        desc: "从屋檐滴落的雨水，性味苦寒，解毒杀虫、外用治疮疥。",
        detail: "水质偏杂，古时仅作外用清洗皮肤顽癣、疮毒，不做内服。"
    },
    {
        name: "流水",
        desc: "常年流动不息的河水溪水，性味甘平，通利血脉、疏导气机。",
        detail: "流动之水活性较强，古人认为更易运化药力，多用于通络、行水方剂。"
    },
    {
        name: "千里水",
        desc: "流经千里以上的长流河水，甘淡清和，善于通利经络、疏导湿邪。",
        detail: "水流路程越远，药性越平和，古时常用于调理周身气血不畅。"
    },
    {
        name: "东流水",
        desc: "向东奔流的河水，性味清利，善走下行，利水渗湿、疏导郁结。",
        detail: "传统本草偏爱东流水煎药，认为其顺势而下，专攻水湿停聚之症。"
    },
    {
        name: "甘澜水",
        desc: "又名劳水，将清水反复扬搅至水面生沫而成，甘温调和，补益脾胃。",
        detail: "经反复搅动后水性改变，不助湿气，经典方剂中常用来煎煮补益药。"
    },
    {
        name: "井泉水",
        desc: "地下涌出的天然泉水，甘平无毒，调和脏腑、清热养津。",
        detail: "水质清冽洁净，是古代煎药最常用的水源，适用性极广。"
    },
    {
        name: "井华水",
        desc: "清晨第一时间汲取的井水，性味甘凉，安神润燥、清热除烦。",
        detail: "清晨井水沉淀一夜，杂质最少，古人视为上品药用水。"
    },
    {
        name: "新汲水",
        desc: "当场从井中现取的新鲜井水，寒凉清透，清热泻火、止渴解毒。",
        detail: "取水即使用，寒性纯正，多用于突发热症、中暑、口舌燥热。"
    },
    {
        name: "节气水",
        desc: "二十四节气当日收取的水，随节气不同药性略有差异，调和阴阳。",
        detail: "古人依节气采水，对应四时变化，用于顺应天时调理身体、煎制药汤。"
    },    
    {
        name: "立秋日五更井华水",
        desc: "立秋当日五更时分汲取的井水，性味清润，可调和肺气、润燥养阴。",
        detail: "顺应秋令之气，古人认为此水最宜秋季养生，煎服润肺调气类方药。"
    },
    {
        name: "重午日午时水",
        desc: "端午日正午收集的水，药性清烈，解毒辟秽、安神祛邪。",
        detail: "民俗与本草皆推崇此水，古时多储存外用洗疮、辟除秽气，也可调配药饵。"
    },
    {
        name: "小满、芒种、白露三节内水",
        desc: "小满、芒种、白露三个节气期间收取的水，利湿化浊、调和四时湿气。",
        detail: "三节湿气各有特点，这类水专用于调理湿邪困身、脾胃运化不佳等问题。"
    },
    {
        name: "醴泉",
        desc: "甘甜可口的天然泉水，性味甘平，滋养脏腑、调和气血。",
        detail: "醴泉水质甘美，古人视作祥瑞之水，常用来煎养生汤药。"
    },
    {
        name: "玉井水",
        desc: "玉石旁涌出的井水，清润甘和，益精养颜、安神固本。",
        detail: "长期受玉石浸润，本草认为此水兼具玉石之性，滋补作用更佳。"
    },
    {
        name: "乳穴水",
        desc: "钟乳石洞流出的泉水，色白温润，温肺补虚、强健筋骨。",
        detail: "泉水融有钟乳精华，药性偏温，适合体质虚寒人群调饮入药。"
    },
    {
        name: "温汤",
        desc: "天然温泉之水，温热流动，祛风除湿、舒筋活络、解毒止痒。",
        detail: "水温偏热，古时多用来沐浴浸洗，调理风湿痹痛、皮肤顽疾。"
    },
    {
        name: "碧海水",
        desc: "近海洁净海水，咸寒之性，清热泻火、杀虫解毒。",
        detail: "海水咸重，仅作外用清洗疮癣、毒虫咬伤，一般不内服。"
    },
    {
        name: "盐胆水",
        desc: "熬盐后余下的浓卤水，味极咸苦，解毒杀虫、腐蚀恶肉。",
        detail: "药性峻烈且有毒，仅限外用处理痈疽、顽疮，严禁内服。"
    },
    {
        name: "阿井水",
        desc: "传统名井之水，水质清冽醇厚，和中健脾、解毒调药。",
        detail: "自古便是知名药用水，煎制膏丹、丸散多选用此水。"
    },
    {
        name: "山岩泉水",
        desc: "山石间涌出的山泉，甘凉清利，清热生津、利水祛湿。",
        detail: "山林泉水杂质少、活性足，是山野间常用的天然煎药水源。"
    },
    {
        name: "古冢中水",
        desc: "古墓坑穴中积存的水，性寒有毒，仅外用杀虫解毒。",
        detail: "水质污浊且含秽气，本草记载只可外治虫疥恶疮，绝对不可内服。"
    },
    {
        name: "粮罂中水",
        desc: "储粮陶罐内积存的积水，甘平无毒，调理脾胃、消积化食。",
        detail: "长期与谷物相伴而生，药性温和，古时用来辅助调理积食腹胀。"
    },
    {
        name: "赤龙浴水",
        desc: "传说中蛟龙出没处的积水，性寒解毒，可涤除邪热、消肿。",
        detail: "多为山野深潭积水，传统仅作外用清热消肿，极少内服。"
    },
    {
        name: "车辙中水",
        desc: "车轮辙迹里积存的雨水，性味甘凉，清热解毒、利湿散瘀。",
        detail: "取自道路车辙，古时临时取用，多用于外敷热毒肿痛。"
    },
    {
        name: "地浆",
        desc: "黄土加水搅拌澄清后的泥水，甘寒解毒，可解诸毒、调理肠胃。",
        detail: "又名黄土浆，古时误食毒物、中暑吐泻常用，药性平和解毒力佳。"
    },
    {
        name: "热汤",
        desc: "煮沸的热水，性味甘热，温中散寒、通利血脉。",
        detail: "日常常用之水，外洗可散寒通络，内服能暖胃驱寒。"
    },
    {
        name: "生熟汤",
        desc: "冷水与沸水混合而成，调和阴阳、消食和胃。",
        detail: "一冷一热相杂，专治脾胃不和、饮食积滞、胸腹闷胀。"
    },
    {
        name: "齑水",
        desc: "腌制菜蔬所得的汁水，酸凉下气，开胃消食、清热化痰。",
        detail: "气味酸香，古时用来调理积食、胸膈痰热，多作辅助饮用。"
    },
    {
        name: "浆水",
        desc: "谷物发酵制成的酸浆，甘酸微凉，调中和胃、止渴除烦。",
        detail: "自古药食两用，能清暑开胃，缓解劳累烦闷与消化不良。"
    },
    {
        name: "甑气水",
        desc: "蒸煮食物时锅甑上凝结的水汽，甘润清和，润肺生津。",
        detail: "取自蒸汽凝结之水，质地轻柔，多用于咽喉干涩、肺燥不适。"
    },
    {
        name: "铜壶滴漏水",
        desc: "铜壶计时滴落之水，性凉清润，安神除烦、清热降火。",
        detail: "经铜器浸润，传统认为善清心火，适合心神不宁、虚烦不眠。"
    },
    {
        name: "三家洗碗水",
        desc: "三户人家用过的洗碗水，性味咸苦，外用解毒杀虫。",
        detail: "本草记载仅作外洗，医治皮肤疥癣、恶疮，严禁内服。"
    },
    {
        name: "磨刀水",
        desc: "磨刀时流下的浑水，性寒镇惊、解毒敛疮。",
        detail: "含铁质成分，古时外用治痈肿、烫伤、小儿惊热。"
    },
    {
        name: "浸蓝水",
        desc: "浸泡蓝草所得的汁水，苦寒清热、解毒杀虫。",
        detail: "多用于外治皮肤热疮、虫毒，染色之余亦作药用。"
    },
    {
        name: "猪槽中水",
        desc: "猪食槽内积存的水，味咸性寒，外用解毒治疮。",
        detail: "水质秽浊，仅限外洗顽疮、疥癣，绝对不可入口服用。"
    },
    {
        name: "市门溺坑水",
        desc: "市井路边污水坑积水，性寒有毒，仅作外用杀虫解毒。",
        detail: "污秽之水，古时只临时外治恶疮虫毒，不做内服使用。"
    },
    {
        name: "洗手足水",
        desc: "洗手、洗足后的废水，药性浊凉，外用散毒止痒。",
        detail: "仅民间临时外用调理皮肤瘙痒、轻微肿毒，无内服用法。"
    },
    {
        name: "洗儿汤",
        desc: "为新生儿洗浴后的汤水，传统记载可温散邪气、外治疮疹。",
        detail: "古时民俗入药，多作外用擦洗，现今基本不再药用。"
    },
    {
        name: "阳火",
        desc: "取自日光、晴天明火之类的阳性之火，性温热，助阳散寒、温通气血。",
        detail: "传统本草区分火性，阳火热力纯正，多用于熏烤、温灸驱寒。"
    },
    {
        name: "阴火",
        desc: "阴湿环境、幽隐之处所生之火，性偏寒凉，可散郁热、解阴毒。",
        detail: "阴火不似阳火燥热，古时多用于调理体内郁火、阴寒瘀滞之症。"
    },
    {
        name: "燧火",
        desc: "钻木取火所得火种，古称圣火，性味纯阳，辟邪温阳、调和药性。",
        detail: "上古取火之法，古人认为此火纯净，煎药、灸治皆为上品。"
    },
    {
        name: "桑柴火",
        desc: "桑木燃烧之火，火力平缓持久，助药力通行、温养脏腑。",
        detail: "历代本草推崇桑柴火煎药、熬膏，认为能引药入里，补益效力更佳。"
    },
    {
        name: "炭火",
        desc: "木炭燃烧之火，热力刚猛，温中散寒、除湿通络。",
        detail: "火力强劲，常用来烘烤取暖、温熨患处，驱散深层寒邪湿气。"
    },
    {
        name: "白炭",
        desc: "精制成的白木炭之火，火力洁净而温润，温而不燥。",
        detail: "质地疏松耐烧，熏烤、温敷皆宜，不易产生杂烟浊气。"
    },
    {
        name: "芦火、竹火",
        desc: "芦苇、竹枝燃烧之火，火势轻清，善清上焦风热、疏解肌表。",
        detail: "火势轻浮不烈，多用于熏治头面、体表风热病症。"
    },
    {
        name: "艾火",
        desc: "艾叶燃烧产生的火与烟气，温经散寒、活血止痛、辟邪祛湿。",
        detail: "中医艾灸专用火源，通行十二经络，是传统外治第一用火。"
    },
    {
        name: "神针火",
        desc: "特制药针引燃之火，借热力透入经络，祛风散寒、通络止痛。",
        detail: "属于传统火疗技法，专治顽固痹痛、筋骨拘挛。"
    },
    {
        name: "火针",
        desc: "烧红的特制医针，借火热之力温通经脉、散结消肿。",
        detail: "针法峻猛，用于寒凝结块、顽痹、痈疽顽疮，需专业操作。"
    },
    {
        name: "灯火",
        desc: "油灯燃烧之火，火势柔和，疏风定惊、开窍安神。",
        detail: "民间常用灯火淬灼疗法，调理小儿惊风、夜啼、目疾。"
    },
    {
        name: "灯花",
        desc: "油灯灯芯燃烧后结成的炭状花烬，性寒，清心泻火、敛疮解毒。",
        detail: "多研末外用，治口舌生疮、皮肤热疮，也可辅助清心除烦。"
    },
    {
        name: "烛烬",
        desc: "蜡烛燃烧后的残灰，药性收涩，解毒敛疮、止血止痒。",
        detail: "古时收集烛烬外用，处理外伤出血、皮肤溃烂、湿痒诸症。"
    },

];

// 游戏全局变量
let score = 0;
let level = 1;
let currentQuestion = null;
let answerChecked = false;

// DOM 元素
const scoreDom = document.getElementById("score");
const levelDom = document.getElementById("level");
const herbDescDom = document.getElementById("herb-desc");
const optionsDom = document.getElementById("options");
const tipDom = document.getElementById("tip");
const nextBtn = document.getElementById("nextBtn");

// 初始化游戏
function initGame() {
    score = 0;
    level = 1;
    updateInfo();
    createQuestion();
}

// 更新分数、关卡显示
function updateInfo() {
    scoreDom.innerText = score;
    levelDom.innerText = level;
}

// 随机生成一道题目 + 打乱选项
function createQuestion() {
    answerChecked = false;
    tipDom.innerText = "";
    nextBtn.disabled = true;

    // 随机选一道原题
    const randomIdx = Math.floor(Math.random() * herbList.length);
    currentQuestion = herbList[randomIdx];

    // 随机取3个干扰项
    let options = [currentQuestion.name];
    while (options.length < 4) {
        const rand = herbList[Math.floor(Math.random() * herbList.length)].name;
        if (!options.includes(rand)) {
            options.push(rand);
        }
    }

    // 打乱选项顺序
    options = shuffleArray(options);

    // 渲染题目描述
    herbDescDom.innerText = currentQuestion.desc;

    // 渲染选项按钮
    optionsDom.innerHTML = "";
    options.forEach(option => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.innerText = option;
        btn.addEventListener("click", () => selectAnswer(option, btn));
        optionsDom.appendChild(btn);
    });
}

// 选择答案
function selectAnswer(selectName, btn) {
    if (answerChecked) return;
    answerChecked = true;

    const allBtns = document.querySelectorAll(".option-btn");
    allBtns.forEach(b => b.disabled = true);

    if (selectName === currentQuestion.name) {
        // 答对
        btn.classList.add("right");
        tipDom.innerText = `✅ 回答正确！${currentQuestion.detail}`;
        score += 10;
    } else {
        // 答错
        btn.classList.add("wrong");
        // 标出正确答案
        allBtns.forEach(b => {
            if (b.innerText === currentQuestion.name) {
                b.classList.add("right");
            }
        });
        tipDom.innerText = `❌ 回答错误，正确答案是：${currentQuestion.name}。${currentQuestion.detail}`;
    }

    updateInfo();
    nextBtn.disabled = false;
}

// 数组随机打乱
function shuffleArray(arr) {
    const newArr = [...arr];
    for (let i = newArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
}

// 下一题
nextBtn.addEventListener("click", () => {
    level++;
    updateInfo();
    createQuestion();
});

// 启动游戏
window.onload = initGame;
