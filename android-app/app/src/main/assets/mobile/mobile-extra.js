const API_BASE_URL = "https://mirror-muse.onrender.com";

const STYLE_PROFILES = {
  quietLuxury: {
    name: "静奢通勤",
    shortText: "会先给一套更稳妥的日常方案，再给一套更有造型感的升级方案。",
    narrative: "先稳住主单品，再拉开两套方案之间的风格差异。",
    palette: ["奶油白", "烟灰", "深咖"],
    paletteText: "配色重点不是抢戏，而是托住上衣，让两套方案既有区分，也保持高级感。",
    looks: {
      commute: [
        { title: "高腰烟管裤 + 尖头浅口鞋", bottom: "高腰烟管裤", shoes: "尖头浅口鞋", accessory: "金属耳饰", hat: "无帽 / 发夹替代", note: "适合上班、见客户和直接通勤，整体干净完整。" },
        { title: "垂感直筒裤 + 皮面乐福鞋", bottom: "垂感直筒裤", shoes: "皮面乐福鞋", accessory: "结构托特包", hat: "小檐礼帽", note: "在不破坏稳重感的前提下，把气场再往上提一点。" },
      ],
      casual: [
        { title: "直筒牛仔裤 + 干净乐福鞋", bottom: "直筒牛仔裤", shoes: "干净乐福鞋", accessory: "细金属项链", hat: "低调棒球帽", note: "轻松但不显得太随便，适合周末和见朋友。" },
        { title: "奶灰阔腿裤 + 方头穆勒鞋", bottom: "奶灰阔腿裤", shoes: "方头穆勒鞋", accessory: "皮质腋下包", hat: "丝巾发带", note: "保留松弛感，但整体更像认真搭过。" },
      ],
      date: [
        { title: "缎面半裙 + 细带凉鞋", bottom: "缎面半裙", shoes: "细带凉鞋", accessory: "珍珠耳钉", hat: "无帽 / 发夹替代", note: "更柔和、亲近，也更容易出片。" },
        { title: "修身长裤 + 小猫跟鞋", bottom: "修身长裤", shoes: "小猫跟鞋", accessory: "金属手镯", hat: "小礼帽", note: "保留女性感，但更利落也更显质感。" },
      ],
      street: [
        { title: "深色直筒裤 + 皮面低帮鞋", bottom: "深色直筒裤", shoes: "皮面低帮鞋", accessory: "方正单肩包", hat: "极简鸭舌帽", note: "让上衣在街头场景里也不松散。" },
        { title: "廓形西裤 + 厚底乐福鞋", bottom: "廓形西裤", shoes: "厚底乐福鞋", accessory: "金属链条包", hat: "宽檐帽", note: "把原本偏稳的风格拉出更强的城市造型感。" },
      ],
      travel: [
        { title: "弹力直筒裤 + 软底便鞋", bottom: "弹力直筒裤", shoes: "软底便鞋", accessory: "大容量斜挎包", hat: "轻薄遮阳帽", note: "长时间走动也不累，适合机场和移动场景。" },
        { title: "轻薄阔腿裤 + 皮面凉拖", bottom: "轻薄阔腿裤", shoes: "皮面凉拖", accessory: "墨镜 + 大包", hat: "编织礼帽", note: "更像旅行写真风，松弛但体面。" },
      ],
      party: [
        { title: "垂感西装裤 + 漆皮短跟鞋", bottom: "垂感西装裤", shoes: "漆皮短跟鞋", accessory: "金属手包", hat: "无帽 / 低盘发", note: "适合偏成熟的晚间聚会，稳妥不失精致。" },
        { title: "缎光长裙裤 + 尖头高跟鞋", bottom: "缎光长裙裤", shoes: "尖头高跟鞋", accessory: "小号手提包", hat: "网纱小礼帽", note: "更有晚间氛围，适合正式一点的聚会场景。" },
      ],
      campus: [
        { title: "九分直筒裤 + 简洁运动鞋", bottom: "九分直筒裤", shoes: "简洁运动鞋", accessory: "帆布托特包", hat: "棒球帽", note: "学生感清爽耐看，不会太用力。" },
        { title: "百褶半裙 + 复古乐福鞋", bottom: "百褶半裙", shoes: "复古乐福鞋", accessory: "细框眼镜", hat: "贝雷帽", note: "保留学院气质，但更有搭配完成度。" },
      ],
    },
  },
  sweetDate: {
    name: "甜感约会",
    shortText: "会先给一套柔和亲近的方案，再给一套更精致、更上镜的版本。",
    narrative: "先让人觉得轻盈和温柔，再把精致感一层层补上去。",
    palette: ["珍珠白", "雾粉", "豆沙棕"],
    paletteText: "用柔和颜色把距离拉近，让主单品更亲和，也更容易显脸亮。",
    looks: {
      commute: [
        { title: "A 字中裙 + 玛丽珍鞋", bottom: "A 字中裙", shoes: "玛丽珍鞋", accessory: "细链项链", hat: "蝴蝶结发箍", note: "适合轻甜感办公风，温和但不幼态。" },
        { title: "高腰长裙裤 + 尖头平底鞋", bottom: "高腰长裙裤", shoes: "尖头平底鞋", accessory: "小珍珠耳饰", hat: "丝带发绳", note: "把甜感处理得更成熟，适合通勤也适合聚会。" },
      ],
      casual: [
        { title: "高腰短裙 + 芭蕾平底鞋", bottom: "高腰短裙", shoes: "芭蕾平底鞋", accessory: "小号腋下包", hat: "无帽 / 发夹替代", note: "轻盈活泼，适合周末和下午茶。" },
        { title: "微喇牛仔裤 + 方头单鞋", bottom: "微喇牛仔裤", shoes: "方头单鞋", accessory: "串珠耳环", hat: "贝雷帽", note: "更像法式甜感，不会太用力。" },
      ],
      date: [
        { title: "缎面长裙 + 细跟鞋", bottom: "缎面长裙", shoes: "细跟鞋", accessory: "锁骨链", hat: "蝴蝶结发带", note: "这套最有约会氛围，也最容易出片。" },
        { title: "收腰半裙 + 小猫跟鞋", bottom: "收腰半裙", shoes: "小猫跟鞋", accessory: "花朵耳钉", hat: "小礼帽", note: "更精致，也更像认真打扮过的第二套答案。" },
      ],
      street: [
        { title: "低腰工装裤 + 厚底短靴", bottom: "低腰工装裤", shoes: "厚底短靴", accessory: "链条小包", hat: "棒球帽", note: "把甜感和一点酷感拼在一起，更年轻。" },
        { title: "短百褶裙 + 高筒靴", bottom: "短百褶裙", shoes: "高筒靴", accessory: "亮面耳圈", hat: "贝雷帽", note: "更偏拍照造型，风格更明显。" },
      ],
      travel: [
        { title: "针织半裙 + 软底单鞋", bottom: "针织半裙", shoes: "软底单鞋", accessory: "小号托特包", hat: "宽边草帽", note: "适合轻旅行和城市漫游，舒服又有氛围。" },
        { title: "高腰短裤 + 绑带凉鞋", bottom: "高腰短裤", shoes: "绑带凉鞋", accessory: "编织包", hat: "编织礼帽", note: "更适合度假照片和夏日场景。" },
      ],
      party: [
        { title: "亮面短裙 + 细带高跟鞋", bottom: "亮面短裙", shoes: "细带高跟鞋", accessory: "水钻耳饰", hat: "无帽 / 发饰", note: "甜感和小性感兼顾，适合轻派对。" },
        { title: "羽感半裙 + 尖头高跟鞋", bottom: "羽感半裙", shoes: "尖头高跟鞋", accessory: "珠光手包", hat: "小网纱帽", note: "更适合出片和夜晚灯光环境。" },
      ],
      campus: [
        { title: "百褶短裙 + 小白鞋", bottom: "百褶短裙", shoes: "小白鞋", accessory: "帆布包", hat: "发箍", note: "少女感很足，适合校园氛围。" },
        { title: "针织长裙 + 玛丽珍鞋", bottom: "针织长裙", shoes: "玛丽珍鞋", accessory: "珍珠耳夹", hat: "贝雷帽", note: "更文静也更有完成度。" },
      ],
    },
  },
  streetCool: {
    name: "街头酷感",
    shortText: "会先给你一套更能日常出门的街头版，再给一套轮廓更强、拍照更有态度的版本。",
    narrative: "轮廓和记忆点比细碎精致更重要，整套必须有态度。",
    palette: ["炭黑", "牛仔蓝", "冷白"],
    paletteText: "颜色要有对比，但不能让上衣失去主角位置。",
    looks: {
      commute: [
        { title: "廓形西裤 + 厚底乐福鞋", bottom: "廓形西裤", shoes: "厚底乐福鞋", accessory: "方盒斜挎包", hat: "无帽 / 墨镜替代", note: "保留街头感，但压回到可通勤的范围。" },
        { title: "工装阔腿裤 + 复古跑鞋", bottom: "工装阔腿裤", shoes: "复古跑鞋", accessory: "金属链条包", hat: "棒球帽", note: "轮廓更满，更偏城市造型派。" },
      ],
      casual: [
        { title: "工装直筒裤 + 板鞋", bottom: "工装直筒裤", shoes: "板鞋", accessory: "斜挎胸包", hat: "棒球帽", note: "很适合日常逛街、见朋友和出门拍照。" },
        { title: "低腰宽裤 + 厚底运动鞋", bottom: "低腰宽裤", shoes: "厚底运动鞋", accessory: "耳圈 + 皮带", hat: "冷帽", note: "更强调比例和街头态度，整体更抓眼。" },
      ],
      date: [
        { title: "低腰工装裤 + 厚底短靴", bottom: "低腰工装裤", shoes: "厚底短靴", accessory: "金属项链", hat: "皮质鸭舌帽", note: "更有酷感情侣感，不走传统甜路线。" },
        { title: "短皮裙 + 长靴", bottom: "短皮裙", shoes: "长靴", accessory: "亮面单肩包", hat: "贝雷帽", note: "更偏夜晚出片和风格化表达。" },
      ],
      street: [
        { title: "阔腿牛仔裤 + 复古跑鞋", bottom: "阔腿牛仔裤", shoes: "复古跑鞋", accessory: "链条包", hat: "棒球帽", note: "最稳定的街头组合，轻松但有态度。" },
        { title: "超宽工装裤 + 厚底靴", bottom: "超宽工装裤", shoes: "厚底靴", accessory: "金属腰链", hat: "冷帽", note: "Look B 会更夸张，更适合拍造型图。" },
      ],
      travel: [
        { title: "束脚工装裤 + 轻量跑鞋", bottom: "束脚工装裤", shoes: "轻量跑鞋", accessory: "功能斜挎包", hat: "运动帽", note: "机动性最好，适合移动和走很多路。" },
        { title: "尼龙阔腿裤 + 厚底板鞋", bottom: "尼龙阔腿裤", shoes: "厚底板鞋", accessory: "多口袋包", hat: "渔夫帽", note: "更有旅行街拍感。" },
      ],
      party: [
        { title: "皮质直筒裤 + 漆皮短靴", bottom: "皮质直筒裤", shoes: "漆皮短靴", accessory: "金属手拿包", hat: "冷帽", note: "适合有点音乐现场感的聚会。" },
        { title: "亮面迷你裙 + 高筒靴", bottom: "亮面迷你裙", shoes: "高筒靴", accessory: "铆钉单肩包", hat: "皮帽", note: "更有夜晚街头大片感。" },
      ],
      campus: [
        { title: "直筒牛仔裤 + 厚底帆布鞋", bottom: "直筒牛仔裤", shoes: "厚底帆布鞋", accessory: "邮差包", hat: "棒球帽", note: "保留酷感但更适合校园日常。" },
        { title: "宽松运动裤 + 机能跑鞋", bottom: "宽松运动裤", shoes: "机能跑鞋", accessory: "耳圈", hat: "冷帽", note: "更潮一点，适合学生街头风。" },
      ],
    },
  },
  cleanMinimal: {
    name: "极简清冷",
    shortText: "会先给你非常干净的基础答案，再给一套更有线条感和秩序感的升级搭法。",
    narrative: "不追热闹，而是用线条和秩序把高级感做出来。",
    palette: ["冷白", "浅灰", "墨蓝"],
    paletteText: "主色尽量简洁，让轮廓和面料成为记忆点。",
    looks: {
      commute: [
        { title: "直线感西裤 + 方头低跟鞋", bottom: "直线感西裤", shoes: "方头低跟鞋", accessory: "细框眼镜", hat: "无帽", note: "非常适合办公室和低调高级感路线。" },
        { title: "墨灰长裙裤 + 尖头浅口鞋", bottom: "墨灰长裙裤", shoes: "尖头浅口鞋", accessory: "结构手提包", hat: "极简小礼帽", note: "第二套会更利落，也更偏视觉编辑感。" },
      ],
      casual: [
        { title: "浅灰直筒裤 + 极简穆勒鞋", bottom: "浅灰直筒裤", shoes: "极简穆勒鞋", accessory: "银色戒指", hat: "无帽", note: "舒服、轻松，但依然很利落。" },
        { title: "奶白阔腿裤 + 皮面拖鞋", bottom: "奶白阔腿裤", shoes: "皮面拖鞋", accessory: "极简单肩包", hat: "窄檐渔夫帽", note: "更像松弛感高审美穿法。" },
      ],
      date: [
        { title: "极简长裙 + 尖头浅口鞋", bottom: "极简长裙", shoes: "尖头浅口鞋", accessory: "银色耳钉", hat: "无帽 / 发夹替代", note: "安静但很耐看，适合成熟感约会。" },
        { title: "修身长裤 + 小猫跟鞋", bottom: "修身长裤", shoes: "小猫跟鞋", accessory: "细链手包", hat: "小檐帽", note: "会更有镜头感，也更显身形。" },
      ],
      street: [
        { title: "深灰阔腿裤 + 低帮皮鞋", bottom: "深灰阔腿裤", shoes: "低帮皮鞋", accessory: "银色硬壳包", hat: "极简鸭舌帽", note: "清冷感街头，不靠堆叠取胜。" },
        { title: "尼龙长裙裤 + 厚底皮鞋", bottom: "尼龙长裙裤", shoes: "厚底皮鞋", accessory: "金属耳圈", hat: "窄檐渔夫帽", note: "更偏时装感和视觉感。" },
      ],
      travel: [
        { title: "柔软长裤 + 轻便便鞋", bottom: "柔软长裤", shoes: "轻便便鞋", accessory: "大托特包", hat: "遮阳帽", note: "轻松、耐走、干净，适合机场和移动场景。" },
        { title: "防皱长裙裤 + 皮面凉鞋", bottom: "防皱长裙裤", shoes: "皮面凉鞋", accessory: "大号墨镜", hat: "编织帽", note: "更适合度假感照片和慢节奏旅行。" },
      ],
      party: [
        { title: "深色修身裙裤 + 低跟凉鞋", bottom: "深色修身裙裤", shoes: "低跟凉鞋", accessory: "银色硬盒包", hat: "无帽 / 湿发造型", note: "低调但有精致张力。" },
        { title: "长开衩半裙 + 细带高跟鞋", bottom: "长开衩半裙", shoes: "细带高跟鞋", accessory: "金属耳圈", hat: "小网纱帽", note: "更适合夜晚与灯光环境。" },
      ],
      campus: [
        { title: "九分西裤 + 简洁乐福鞋", bottom: "九分西裤", shoes: "简洁乐福鞋", accessory: "帆布包", hat: "无帽", note: "学生感里带一点成熟审美。" },
        { title: "针织半裙 + 小白鞋", bottom: "针织半裙", shoes: "小白鞋", accessory: "细框眼镜", hat: "棒球帽", note: "更文静，氛围更清爽。" },
      ],
    },
  },
  frenchRelaxed: {
    name: "法式松弛",
    shortText: "会先给一套自然耐看的法式日常，再给一套更有慵懒氛围的延展版本。",
    narrative: "重点不是刻意精致，而是把松弛和质感同时保住。",
    palette: ["燕麦白", "焦糖棕", "海盐蓝"],
    paletteText: "法式路线最重要的是轻轻松松，但配色依然要有统一感。",
    looks: {
      commute: [
        { title: "直筒长裤 + 乐福鞋", bottom: "直筒长裤", shoes: "乐福鞋", accessory: "皮质托特包", hat: "贝雷帽", note: "适合带一点法式味道的通勤。" },
        { title: "高腰半裙 + 小猫跟鞋", bottom: "高腰半裙", shoes: "小猫跟鞋", accessory: "丝巾手袋", hat: "小檐礼帽", note: "更柔和，更像认真搭配后的版本。" },
      ],
      casual: [
        { title: "九分牛仔裤 + 芭蕾鞋", bottom: "九分牛仔裤", shoes: "芭蕾鞋", accessory: "藤编包", hat: "贝雷帽", note: "轻松、耐看，很适合咖啡店和周末散步。" },
        { title: "亚麻长裤 + 皮面凉鞋", bottom: "亚麻长裤", shoes: "皮面凉鞋", accessory: "大耳圈", hat: "丝巾发带", note: "更有慵懒假日感。" },
      ],
      date: [
        { title: "中长半裙 + 尖头单鞋", bottom: "中长半裙", shoes: "尖头单鞋", accessory: "锁骨链", hat: "无帽 / 发夹替代", note: "温柔、不费力，但看起来很会穿。" },
        { title: "收腰长裙裤 + 小猫跟鞋", bottom: "收腰长裙裤", shoes: "小猫跟鞋", accessory: "复古手提包", hat: "贝雷帽", note: "更成熟，也更适合餐厅和夜晚场景。" },
      ],
      street: [
        { title: "阔腿牛仔裤 + 低帮皮鞋", bottom: "阔腿牛仔裤", shoes: "低帮皮鞋", accessory: "法棍包", hat: "丝巾", note: "不靠夸张，靠细节和比例取胜。" },
        { title: "高腰西裤 + 尖头靴", bottom: "高腰西裤", shoes: "尖头靴", accessory: "硬挺单肩包", hat: "窄檐帽", note: "更有法式时装感。" },
      ],
      travel: [
        { title: "宽松长裤 + 平底凉鞋", bottom: "宽松长裤", shoes: "平底凉鞋", accessory: "草编包", hat: "宽边草帽", note: "非常适合慢旅行和阳光场景。" },
        { title: "轻垂长裙裤 + 皮拖", bottom: "轻垂长裙裤", shoes: "皮拖", accessory: "墨镜", hat: "编织礼帽", note: "更像海边或度假城市的照片感。" },
      ],
      party: [
        { title: "直线长裙 + 低跟凉鞋", bottom: "直线长裙", shoes: "低跟凉鞋", accessory: "金属耳圈", hat: "无帽 / 盘发", note: "低调又有风情，适合小型聚会。" },
        { title: "缎面开衩裙 + 细带高跟鞋", bottom: "缎面开衩裙", shoes: "细带高跟鞋", accessory: "迷你手包", hat: "小礼帽", note: "更有夜晚氛围和女人味。" },
      ],
      campus: [
        { title: "直筒牛仔裤 + 乐福鞋", bottom: "直筒牛仔裤", shoes: "乐福鞋", accessory: "帆布包", hat: "贝雷帽", note: "学生感里透着一点法式松弛。" },
        { title: "针织半裙 + 芭蕾鞋", bottom: "针织半裙", shoes: "芭蕾鞋", accessory: "细链手包", hat: "发带", note: "更安静，也更文艺。" },
      ],
    },
  },
  urbanOutdoor: {
    name: "城市机能",
    shortText: "会先给一套更实穿耐走的城市机能方案，再给一套更有轻户外层次感的版本。",
    narrative: "功能性、移动效率和利落感要同时成立。",
    palette: ["岩灰", "军绿", "沙米色"],
    paletteText: "配色会更偏功能感和户外感，但不会压住主上衣。",
    looks: {
      commute: [
        { title: "机能直筒裤 + 轻量跑鞋", bottom: "机能直筒裤", shoes: "轻量跑鞋", accessory: "多隔层斜挎包", hat: "防晒鸭舌帽", note: "适合移动多、通勤长的场景。" },
        { title: "尼龙阔腿裤 + 厚底工装鞋", bottom: "尼龙阔腿裤", shoes: "厚底工装鞋", accessory: "结构水桶包", hat: "窄檐渔夫帽", note: "更有城市轻户外层次。" },
      ],
      casual: [
        { title: "束脚工装裤 + 板鞋", bottom: "束脚工装裤", shoes: "板鞋", accessory: "胸前功能包", hat: "棒球帽", note: "轻松好穿，适合周末城市活动。" },
        { title: "防泼水短裤 + 越野跑鞋", bottom: "防泼水短裤", shoes: "越野跑鞋", accessory: "斜挎尼龙包", hat: "渔夫帽", note: "更偏户外风，但依然适合城市穿。" },
      ],
      date: [
        { title: "锥形长裤 + 皮面运动鞋", bottom: "锥形长裤", shoes: "皮面运动鞋", accessory: "极简腰包", hat: "无帽", note: "保留机能感，同时更整洁体面。" },
        { title: "尼龙半裙 + 厚底凉鞋", bottom: "尼龙半裙", shoes: "厚底凉鞋", accessory: "结构小包", hat: "窄檐帽", note: "让机能风在约会里更时髦一点。" },
      ],
      street: [
        { title: "工装阔腿裤 + 复古跑鞋", bottom: "工装阔腿裤", shoes: "复古跑鞋", accessory: "挂绳小包", hat: "棒球帽", note: "更偏年轻机能街头。" },
        { title: "双层口袋裤 + 徒步靴", bottom: "双层口袋裤", shoes: "徒步靴", accessory: "战术斜挎包", hat: "渔夫帽", note: "Look B 的存在感和结构感更强。" },
      ],
      travel: [
        { title: "弹力长裤 + 轻便跑鞋", bottom: "弹力长裤", shoes: "轻便跑鞋", accessory: "防泼水托特包", hat: "遮阳帽", note: "更适合赶路和长时间外出。" },
        { title: "快干宽裤 + 凉鞋", bottom: "快干宽裤", shoes: "凉鞋", accessory: "多功能腰包", hat: "大檐帽", note: "适合夏天旅行和户外混搭路线。" },
      ],
      party: [
        { title: "尼龙西裤 + 厚底皮鞋", bottom: "尼龙西裤", shoes: "厚底皮鞋", accessory: "金属挂件包", hat: "无帽", note: "用机能感做一点偏锋聚会风。" },
        { title: "黑色短裙裤 + 工装靴", bottom: "黑色短裙裤", shoes: "工装靴", accessory: "反光小包", hat: "冷帽", note: "夜晚造型感更明显。" },
      ],
      campus: [
        { title: "直筒运动裤 + 轻便板鞋", bottom: "直筒运动裤", shoes: "轻便板鞋", accessory: "双肩包", hat: "棒球帽", note: "适合校园里高频穿着。" },
        { title: "短工装裙 + 机能凉鞋", bottom: "短工装裙", shoes: "机能凉鞋", accessory: "挂绳小包", hat: "渔夫帽", note: "更有辨识度，也更活泼。" },
      ],
    },
  },
  retroAcademy: {
    name: "复古学院",
    shortText: "会先给一套更日常的学院派答案，再给一套更复古、更有书卷感的版本。",
    narrative: "整洁、文气和一点年代感会是这组风格的重点。",
    palette: ["燕麦卡其", "酒红", "墨绿"],
    paletteText: "学院风的配色要有层次，但仍然保持克制。",
    looks: {
      commute: [
        { title: "高腰西裤 + 乐福鞋", bottom: "高腰西裤", shoes: "乐福鞋", accessory: "细皮带", hat: "贝雷帽", note: "像认真工作的学院派穿法，稳妥又有气质。" },
        { title: "百褶中裙 + 玛丽珍鞋", bottom: "百褶中裙", shoes: "玛丽珍鞋", accessory: "复古手提包", hat: "小礼帽", note: "更偏文艺和精致感。" },
      ],
      casual: [
        { title: "直筒牛仔裤 + 乐福鞋", bottom: "直筒牛仔裤", shoes: "乐福鞋", accessory: "邮差包", hat: "贝雷帽", note: "轻松日常，但仍然有书卷气。" },
        { title: "针织半裙 + 牛津鞋", bottom: "针织半裙", shoes: "牛津鞋", accessory: "圆框眼镜", hat: "发带", note: "更像图书馆和咖啡馆路线。" },
      ],
      date: [
        { title: "A 字半裙 + 玛丽珍鞋", bottom: "A 字半裙", shoes: "玛丽珍鞋", accessory: "丝带耳饰", hat: "贝雷帽", note: "甜而不腻，带点老电影感。" },
        { title: "收腰长裙裤 + 小跟鞋", bottom: "收腰长裙裤", shoes: "小跟鞋", accessory: "锁扣手包", hat: "小礼帽", note: "更适合精致约会和拍照。" },
      ],
      street: [
        { title: "格纹西裤 + 厚底乐福鞋", bottom: "格纹西裤", shoes: "厚底乐福鞋", accessory: "皮质公文包", hat: "贝雷帽", note: "学院风也能有一点态度。" },
        { title: "短百褶裙 + 长袜皮鞋", bottom: "短百褶裙", shoes: "长袜皮鞋", accessory: "链条邮差包", hat: "鸭舌帽", note: "更年轻，也更像日杂造型。" },
      ],
      travel: [
        { title: "直筒灯芯绒裤 + 牛津鞋", bottom: "直筒灯芯绒裤", shoes: "牛津鞋", accessory: "帆布双肩包", hat: "报童帽", note: "适合城市旅行和慢节奏逛展。" },
        { title: "中长半裙 + 芭蕾鞋", bottom: "中长半裙", shoes: "芭蕾鞋", accessory: "复古挎包", hat: "贝雷帽", note: "更有旅拍氛围。" },
      ],
      party: [
        { title: "酒红长裙裤 + 乐福鞋", bottom: "酒红长裙裤", shoes: "乐福鞋", accessory: "珍珠耳饰", hat: "小礼帽", note: "偏文艺感聚会，很有气质。" },
        { title: "丝绒半裙 + 小猫跟鞋", bottom: "丝绒半裙", shoes: "小猫跟鞋", accessory: "锁扣手拿包", hat: "网纱帽", note: "更精致复古，适合晚间灯光。" },
      ],
      campus: [
        { title: "百褶短裙 + 乐福鞋", bottom: "百褶短裙", shoes: "乐福鞋", accessory: "双肩包", hat: "贝雷帽", note: "最标准的学院路线，青春感强。" },
        { title: "直筒长裤 + 牛津鞋", bottom: "直筒长裤", shoes: "牛津鞋", accessory: "圆框眼镜", hat: "发箍", note: "更安静，也更书卷气。" },
      ],
    },
  },
  resortChic: {
    name: "度假轻奢",
    shortText: "会先给一套轻松舒服的度假方案，再给一套更有氛围感和拍照感的版本。",
    narrative: "空气感、轻盈感和阳光感会是这组搭配的重点。",
    palette: ["海盐白", "沙滩米", "落日橘"],
    paletteText: "配色会更轻、更亮，也更适合夏日和旅行照片。",
    looks: {
      commute: [
        { title: "亚麻长裤 + 皮面凉鞋", bottom: "亚麻长裤", shoes: "皮面凉鞋", accessory: "编织托特包", hat: "宽檐草帽", note: "把度假感收敛一点，也能穿进城市。" },
        { title: "轻垂阔腿裤 + 方头拖鞋", bottom: "轻垂阔腿裤", shoes: "方头拖鞋", accessory: "金色耳环", hat: "丝巾", note: "更偏高级感旅行装束。" },
      ],
      casual: [
        { title: "高腰短裤 + 平底凉鞋", bottom: "高腰短裤", shoes: "平底凉鞋", accessory: "草编包", hat: "宽边草帽", note: "最轻松直接的夏日度假穿法。" },
        { title: "飘逸半裙 + 绑带凉鞋", bottom: "飘逸半裙", shoes: "绑带凉鞋", accessory: "贝壳耳饰", hat: "编织礼帽", note: "更有海边和拍照氛围。" },
      ],
      date: [
        { title: "缎感长裙 + 细带凉鞋", bottom: "缎感长裙", shoes: "细带凉鞋", accessory: "金色项链", hat: "无帽 / 发夹替代", note: "更适合海边餐厅和度假约会。" },
        { title: "高腰阔腿裤 + 小跟凉鞋", bottom: "高腰阔腿裤", shoes: "小跟凉鞋", accessory: "金属手包", hat: "丝巾发带", note: "更优雅，也更成熟。" },
      ],
      street: [
        { title: "宽松亚麻裤 + 凉拖", bottom: "宽松亚麻裤", shoes: "凉拖", accessory: "编织单肩包", hat: "草帽", note: "更像海岛城市街拍，轻松自然。" },
        { title: "短裙裤 + 罗马凉鞋", bottom: "短裙裤", shoes: "罗马凉鞋", accessory: "大耳环", hat: "宽檐帽", note: "更有视觉记忆点。" },
      ],
      travel: [
        { title: "轻薄长裤 + 平底凉鞋", bottom: "轻薄长裤", shoes: "平底凉鞋", accessory: "大托特包", hat: "草编遮阳帽", note: "很适合飞机落地直接穿去度假。" },
        { title: "长开衩半裙 + 编织凉鞋", bottom: "长开衩半裙", shoes: "编织凉鞋", accessory: "墨镜", hat: "大檐帽", note: "旅行照片会更好看。" },
      ],
      party: [
        { title: "光泽长裙裤 + 金属凉鞋", bottom: "光泽长裙裤", shoes: "金属凉鞋", accessory: "小号手包", hat: "无帽 / 湿发造型", note: "适合海边夜晚和度假派对。" },
        { title: "亮片半裙 + 细带高跟鞋", bottom: "亮片半裙", shoes: "细带高跟鞋", accessory: "珍珠耳饰", hat: "网纱帽", note: "更强调整体出片效果。" },
      ],
      campus: [
        { title: "亚麻短裤 + 帆布鞋", bottom: "亚麻短裤", shoes: "帆布鞋", accessory: "帆布包", hat: "草编帽", note: "偏夏日轻松路线，适合年轻感场景。" },
        { title: "轻纱长裙 + 平底凉鞋", bottom: "轻纱长裙", shoes: "平底凉鞋", accessory: "编织包", hat: "宽边草帽", note: "更有氛围，也更适合拍照。" },
      ],
    },
  },
};

const OCCASION_LABELS = {
  commute: "通勤上班",
  casual: "日常出门",
  date: "约会出片",
  street: "街头造型",
  travel: "旅行轻便",
  party: "聚会晚间",
  campus: "校园休闲",
};

const MODE_PROFILES = {
  balanced: { name: "稳妥不出错", text: "Look A 会更日常好穿，Look B 会在同一方向上再往前走一步，方便你直接做选择。" },
  camera: { name: "更上镜出片", text: "两套方案都会保留上镜感，尤其 Look B 会更像拍照时会选的那一套。" },
  slimming: { name: "更显高显瘦", text: "两套都会优先处理比例，尽量拉高腰线、收紧线条、减少拖沓感。" },
  comfort: { name: "更轻松好穿", text: "Look A 最容易直接穿出门，Look B 则是在舒适前提下做一点升级。" },
  statement: { name: "更有造型感", text: "Look A 保持可落地，Look B 会明显更有视觉记忆点和风格表达。" },
  luxury: { name: "更精致贵气", text: "两套都强调材质、配饰和完成度，Look B 会更像高级场合的升级版。" },
  youthful: { name: "更年轻活力", text: "整体会更轻快、更显精神，Look B 可以再多一点潮流感。" },
};

const COLOR_PROFILES = {
  toneOnTone: { name: "顺色延伸", text: "整体顺色更容易显高级，也更能托住主单品。" },
  lightContrast: { name: "轻对比提亮", text: "通过轻微对比把重点提出来，但不会让画面太吵。" },
  softLuxury: { name: "低饱和高级感", text: "颜色控制在低饱和区间，让面料和轮廓更突出。" },
  seasonal: { name: "季节氛围配色", text: "让配色更有当季氛围，但仍然围绕上衣组织。" },
  cleanNeutrals: { name: "干净中性色", text: "尽量用米、灰、黑、白这类中性色做更耐看的搭配。" },
  accentPop: { name: "一点亮色点题", text: "用少量亮色做点题，让第二套尤其更有记忆点。" },
};

const state = {
  garmentFile: null,
  garmentPreviewUrl: "",
  style: "quietLuxury",
  occasion: "commute",
  mode: "balanced",
  colorStrategy: "toneOnTone",
  generated: false,
  lastError: "",
  isAuthorized: false,
  authChecked: false,
  pendingGeneration: false,
};

const garmentInput = document.querySelector("#garmentInput");
const garmentThumb = document.querySelector("#garmentThumb");
const garmentPlaceholder = document.querySelector("#garmentPlaceholder");
const garmentStatus = document.querySelector("#garmentStatus");
const occasionInput = document.querySelector("#occasionInput");
const modeInput = document.querySelector("#modeInput");
const colorStrategyInput = document.querySelector("#colorStrategyInput");
const styleGrid = document.querySelector("#styleGrid");
const generateButton = document.querySelector("#generateButton");
const resetButton = document.querySelector("#resetButton");
const lookForm = document.querySelector("#lookForm");
const previewCard = document.querySelector(".preview-card");

const selectedStyleName = document.querySelector("#selectedStyleName");
const selectedStyleText = document.querySelector("#selectedStyleText");
const previewState = document.querySelector("#previewState");
const previewHeadline = document.querySelector("#previewHeadline");
const previewCopy = document.querySelector("#previewCopy");
const resultIntro = document.querySelector("#resultIntro");
const resultVibe = document.querySelector("#resultVibe");
const resultNarrative = document.querySelector("#resultNarrative");
const resultPaletteText = document.querySelector("#resultPaletteText");
const paletteRow = document.querySelector("#paletteRow");
const modeTitle = document.querySelector("#modeTitle");
const modeNarrative = document.querySelector("#modeNarrative");

const lookOneTitle = document.querySelector("#lookOneTitle");
const lookOneNarrative = document.querySelector("#lookOneNarrative");
const lookOneBottom = document.querySelector("#lookOneBottom");
const lookOneShoes = document.querySelector("#lookOneShoes");
const lookOneAccessory = document.querySelector("#lookOneAccessory");
const lookOneHat = document.querySelector("#lookOneHat");

const lookTwoTitle = document.querySelector("#lookTwoTitle");
const lookTwoNarrative = document.querySelector("#lookTwoNarrative");
const lookTwoBottom = document.querySelector("#lookTwoBottom");
const lookTwoShoes = document.querySelector("#lookTwoShoes");
const lookTwoAccessory = document.querySelector("#lookTwoAccessory");
const lookTwoHat = document.querySelector("#lookTwoHat");

const generatedImage = document.querySelector("#generatedImage");
const previewPlaceholder = document.querySelector("#previewPlaceholder");
const authModal = document.querySelector("#authModal");
const authBackdrop = document.querySelector("#authBackdrop");
const authForm = document.querySelector("#authForm");
const authCloseButton = document.querySelector("#authCloseButton");
const authCancelButton = document.querySelector("#authCancelButton");
const accessCodeInput = document.querySelector("#accessCodeInput");
const authFeedback = document.querySelector("#authFeedback");
const authSubmitButton = document.querySelector("#authSubmitButton");

garmentInput.addEventListener("change", (event) => loadGarment(event.target.files?.[0]));
occasionInput.addEventListener("change", () => updateState("occasion", occasionInput.value));
modeInput.addEventListener("change", () => updateState("mode", modeInput.value));
colorStrategyInput.addEventListener("change", () => updateState("colorStrategy", colorStrategyInput.value));
styleGrid.addEventListener("click", onStylePick);
generateButton.addEventListener("click", generateLookImage);
resetButton.addEventListener("click", resetAll);
authForm.addEventListener("submit", submitAccessCode);
authBackdrop.addEventListener("click", closeAuthModal);
authCloseButton.addEventListener("click", closeAuthModal);
authCancelButton.addEventListener("click", closeAuthModal);

syncUI();
bootstrapAuthState();

function updateState(key, value) {
  state[key] = value;
  clearGenerationState();
  syncUI();
}

function loadGarment(file) {
  if (!file) {
    clearGarmentPreview();
    return;
  }

  if (state.garmentPreviewUrl) {
    URL.revokeObjectURL(state.garmentPreviewUrl);
  }

  state.garmentFile = file;
  state.garmentPreviewUrl = URL.createObjectURL(file);
  garmentThumb.src = state.garmentPreviewUrl;
  garmentThumb.classList.remove("hidden");
  garmentPlaceholder.classList.add("hidden");
  garmentStatus.textContent = file.name;
  clearGenerationState();
  resetImageStage();
  syncUI();
}

function clearGarmentPreview() {
  if (state.garmentPreviewUrl) {
    URL.revokeObjectURL(state.garmentPreviewUrl);
  }

  state.garmentFile = null;
  state.garmentPreviewUrl = "";
  garmentThumb.removeAttribute("src");
  garmentThumb.classList.add("hidden");
  garmentPlaceholder.classList.remove("hidden");
  garmentStatus.textContent = "未选择";
  clearGenerationState();
  resetImageStage();
  syncUI();
}

function onStylePick(event) {
  const button = event.target.closest("[data-style]");
  if (!button) {
    return;
  }

  state.style = button.dataset.style;
  clearGenerationState();
  syncStyleSelection();
  syncUI();
}

async function generateLookImage() {
  if (!state.garmentFile) {
    state.lastError = "";
    previewState.textContent = "请先上传";
    previewHeadline.textContent = "先上传上衣图片";
    previewCopy.textContent = "没有主单品，系统无法围绕它生成两套穿搭图。";
    return;
  }

  if (!(await ensureAuthorized())) {
    return;
  }

  lookForm.classList.add("is-loading");
  generateButton.disabled = true;
  resetButton.disabled = true;
  state.lastError = "";
  previewState.textContent = "生成中";
  previewHeadline.textContent = "正在生成双套穿搭图";
  previewCopy.textContent = "这次会围绕同一件上衣，同时给出 Look A 和 Look B 两种完整方向。";
  previewCard?.scrollIntoView({ behavior: "smooth", block: "start" });

  try {
    const garmentDataUrl = await readFileAsDataUrl(state.garmentFile);
    const response = await fetch(`${API_BASE_URL}/api/generate-look`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        garmentDataUrl,
        style: state.style,
        occasion: state.occasion,
        mode: state.mode,
        colorStrategy: state.colorStrategy,
      }),
    });

    const payload = await response.json();
    if (!response.ok) {
      throw new Error(toUserError(payload));
    }

    const imageSrc = payload.imageDataUrl || payload.imageUrl;
    if (!imageSrc) {
      throw new Error("模型返回成功，但没有拿到图片结果。请重新生成再试一次。");
    }

    generatedImage.src = imageSrc;
    generatedImage.classList.remove("hidden");
    previewPlaceholder.classList.add("hidden");
    state.generated = true;
    state.lastError = "";
    previewState.textContent = "已生成";
    previewHeadline.textContent = "模型已经生成双套 look 图";
    previewCopy.textContent = "当前展示的是一张双方案穿搭图，方便你直接对比两套方向。";
    syncUI();
  } catch (error) {
    state.generated = false;
    state.lastError = error instanceof Error ? error.message : "请求失败，请稍后重试。";
    previewState.textContent = "生成失败";
    previewHeadline.textContent = "这次没有成功出图";
    previewCopy.textContent = state.lastError;
    syncUI();
  } finally {
    lookForm.classList.remove("is-loading");
    generateButton.disabled = false;
    resetButton.disabled = false;
  }
}

function resetAll() {
  garmentInput.value = "";
  occasionInput.value = "commute";
  modeInput.value = "balanced";
  colorStrategyInput.value = "toneOnTone";

  state.style = "quietLuxury";
  state.occasion = "commute";
  state.mode = "balanced";
  state.colorStrategy = "toneOnTone";
  state.pendingGeneration = false;
  clearGarmentPreview();
  syncStyleSelection();
  syncUI();
}

function clearGenerationState() {
  state.generated = false;
  state.lastError = "";
}

function resetImageStage() {
  generatedImage.classList.add("hidden");
  generatedImage.removeAttribute("src");
  previewPlaceholder.classList.remove("hidden");
}

function syncStyleSelection() {
  document.querySelectorAll("[data-style]").forEach((node) => {
    node.classList.toggle("is-active", node.dataset.style === state.style);
  });
}

function syncUI() {
  const profile = STYLE_PROFILES[state.style];
  const looks = getLooks();
  const modeProfile = MODE_PROFILES[state.mode];
  const colorProfile = COLOR_PROFILES[state.colorStrategy];

  syncStyleSelection();

  selectedStyleName.textContent = profile.name;
  selectedStyleText.textContent = profile.shortText;
  resultVibe.textContent = profile.name;
  resultNarrative.textContent = profile.narrative;
  resultPaletteText.textContent = `${profile.paletteText} 当前配色策略：${colorProfile.name}。${colorProfile.text}`;
  modeTitle.textContent = modeProfile.name;
  modeNarrative.textContent = modeProfile.text;

  fillLookCard("one", looks[0]);
  fillLookCard("two", looks[1]);

  resultIntro.textContent = state.generated
    ? `已根据上传上衣、${profile.name}风格、${OCCASION_LABELS[state.occasion]}场景，以及 ${modeProfile.name} 模式生成两套建议与图片。`
    : "同一件上衣，不只给一个答案，而是给你两种完整穿法。";

  generateButton.textContent = state.lastError ? "重新生成双套穿搭图" : "生成双套穿搭图";

  if (!state.generated) {
    if (state.lastError) {
      previewState.textContent = "生成失败";
      previewHeadline.textContent = "这次没有成功出图";
      previewCopy.textContent = state.lastError;
    } else {
      previewState.textContent = state.garmentFile ? "等待生成" : "等待上传";
      previewHeadline.textContent = state.garmentFile
        ? "先上传上衣，再生成两套完整 look"
        : "先上传一张上衣图片";
      previewCopy.textContent = state.garmentFile
        ? `系统会围绕同一件上衣，同时设计 Look A 和 Look B，并按照 ${modeProfile.name} 与 ${colorProfile.name} 来控制两套方向。`
        : "图片会先发到后端，再由后端安全调用真实图像模型生成结果。";
    }
  }

  paletteRow.innerHTML = profile.palette.map((item) => `<span>${item}</span>`).join("");
}

async function bootstrapAuthState() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/access/session`, {
      method: "GET",
      credentials: "include",
    });
    const payload = await response.json();
    state.isAuthorized = Boolean(payload?.authorized);
  } catch (_error) {
    state.isAuthorized = false;
  } finally {
    state.authChecked = true;
  }
}

async function ensureAuthorized() {
  if (!state.authChecked) {
    await bootstrapAuthState();
  }

  if (state.isAuthorized) {
    return true;
  }

  state.pendingGeneration = true;
  openAuthModal();
  return false;
}

function openAuthModal() {
  authModal.classList.remove("hidden");
  authModal.setAttribute("aria-hidden", "false");
  authFeedback.textContent = "输入正确访问码后即可开始生成。";
  authFeedback.classList.remove("is-error", "is-success");
  accessCodeInput.value = "";
  setTimeout(() => accessCodeInput.focus(), 0);
}

function closeAuthModal() {
  authModal.classList.add("hidden");
  authModal.setAttribute("aria-hidden", "true");
  authSubmitButton.disabled = false;
}

async function submitAccessCode(event) {
  event.preventDefault();

  const code = accessCodeInput.value.trim();
  if (!/^\d{4}$/.test(code)) {
    authFeedback.textContent = "请输入 4 位数字访问码。";
    authFeedback.classList.add("is-error");
    authFeedback.classList.remove("is-success");
    return;
  }

  authSubmitButton.disabled = true;
  authFeedback.textContent = "正在验证访问码...";
  authFeedback.classList.remove("is-error", "is-success");

  try {
    const response = await fetch(`${API_BASE_URL}/api/access/verify`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ code }),
    });

    const payload = await response.json();
    if (!response.ok) {
      throw new Error(payload?.error || "访问码验证失败。");
    }

    state.isAuthorized = true;
    state.authChecked = true;
    authFeedback.textContent = "访问码验证成功，正在继续生成。";
    authFeedback.classList.remove("is-error");
    authFeedback.classList.add("is-success");

    const shouldResume = state.pendingGeneration;
    state.pendingGeneration = false;
    closeAuthModal();

    if (shouldResume) {
      await generateLookImage();
    }
  } catch (error) {
    authSubmitButton.disabled = false;
    authFeedback.textContent = error instanceof Error ? error.message : "访问码验证失败，请重试。";
    authFeedback.classList.add("is-error");
    authFeedback.classList.remove("is-success");
  }
}

function fillLookCard(slot, look) {
  const titleNode = slot === "one" ? lookOneTitle : lookTwoTitle;
  const narrativeNode = slot === "one" ? lookOneNarrative : lookTwoNarrative;
  const bottomNode = slot === "one" ? lookOneBottom : lookTwoBottom;
  const shoesNode = slot === "one" ? lookOneShoes : lookTwoShoes;
  const accessoryNode = slot === "one" ? lookOneAccessory : lookTwoAccessory;
  const hatNode = slot === "one" ? lookOneHat : lookTwoHat;

  titleNode.textContent = look.title;
  narrativeNode.textContent = look.note;
  bottomNode.textContent = `裤子：${look.bottom}`;
  shoesNode.textContent = `鞋子：${look.shoes}`;
  accessoryNode.textContent = `配饰：${look.accessory}`;
  hatNode.textContent = `帽子：${look.hat}`;
}

function getLooks() {
  const profile = STYLE_PROFILES[state.style];
  return profile.looks[state.occasion] || profile.looks.commute;
}

function toUserError(payload) {
  const message = payload?.error || "图片生成失败。";

  if (/No available compatible accounts/i.test(message)) {
    return "当前图像中转通道暂时没有可用账号，页面本身正常，但这一刻无法出图。请稍后重试。";
  }

  if (/Image generation is not enabled for this group/i.test(message)) {
    return "当前中转站账号组没有开通图像生成权限，所以现在不能出图。请更换支持生图的 Key。";
  }

  if (/temporarily unavailable|upstream/i.test(message)) {
    return "图像服务上游暂时不可用。你可以点击“重新生成双套穿搭图”再试一次。";
  }

  if (/missing image_api_key|relay provider is not configured/i.test(message)) {
    return "服务器还没有配置图像 Key，请先在部署平台补上环境变量。";
  }

  if (/quota|rate limit|resource exhausted/i.test(message)) {
    return "当前生图通道额度不足或触发限流，请稍后再试。";
  }

  return `${message} 你可以点击“重新生成双套穿搭图”再试一次。`;
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error("读取图片失败。"));
    reader.readAsDataURL(file);
  });
}
