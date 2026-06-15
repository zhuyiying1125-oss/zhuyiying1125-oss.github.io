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