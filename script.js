const styleProfiles = {
  quietLuxury: {
    name: "静奢通勤",
    shortText: "系统会先给你一套更稳妥的日常方案，再给你一套更有造型感的升级方案。",
    narrative: "先稳住主单品，再拉开两套方案之间的层次差异。",
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
        { title: "缎面半裙 + 细带凉鞋", bottom: "缎面半裙", shoes: "细带凉鞋", accessory: "珍珠耳钉", hat: "无帽 / 发夹替代", note: "更柔和、亲近、也更容易出片。" },
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
    shortText: "这组会先给你一套柔和亲近的方案，再给一套更精致、更上镜的版本。",
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
        { title: "缎面长裙 + 细跟鞋", bottom: "缎面长裙", shoes: "细跟鞋", accessory: "锁骨链", hat: "蝴蝶结发带", note: "这套会最有约会氛围，也最容易出片。" },
        { title: "收腰半裙 + 小猫跟鞋", bottom: "收腰半裙", shoes: "小猫跟鞋", accessory: "花朵耳钉", hat: "小礼帽", note: "更精致，也更像认真打扮过的第二套答案。" },
      ],
      street: [
        { title: "低腰工装裙 + 厚底短靴", bottom: "低腰工装裙", shoes: "厚底短靴", accessory: "链条小包", hat: "棒球帽", note: "把甜感和一点酷感拼在一起，更年轻。" },
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
    shortText: "这组会给你一套更能日常出门的街头版，再给一套轮廓更强、拍照更有态度的版本。",
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
        { title: "低腰工装裙 + 厚底短靴", bottom: "低腰工装裙", shoes: "厚底短靴", accessory: "金属项链", hat: "皮质鸭舌帽", note: "更有酷感情侣感，不走传统甜路线。" },
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
    shortText: "这组会先给你非常干净的基础答案，再给一套更有线条感和秩序感的升级搭法。",
    narrative: "不追热闹，而是用线条和秩序把高级感做出来。",
    palette: ["冷白", "浅灰", "墨蓝"],
    paletteText: "主色尽量简洁，让轮廓和面料成为记忆点。",
    looks: {
      commute: [
        { title: "直线感西裤 + 方头低跟鞋", bottom: "直线感西裤", shoes: "方头低跟鞋", accessory: "细框眼镜", hat: "无帽", note: "非常适合办公室和低调高级感路线。" },
        { title: "墨灰长裙裤 + 尖头浅口鞋", bottom: "墨灰长裙裤", shoes: "尖头浅口鞋", accessory: "结构手提包", hat: "极简小礼帽", note: "第二套会更利落，也更偏视觉编辑感。" },
      ],
      casual: [
        { title: "浅灰直筒裤 + 极简穆勒鞋", bottom: "浅灰直筒裤", shoes: "极简穆勒鞋", accessory: "银色戒指", hat: "无帽", note: "舒服、轻松，但仍然很利落。" },
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
    shortText: "这组会先给你一套自然耐看的法式日常，再给一套更有慵懒氛围的延展版本。",
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
        { title: "阔腿牛仔裤 + 低帮皮鞋", bottom: "阔腿牛仔裤", shoes: "低帮皮鞋", accessory: "复古腋下包", hat: "贝雷帽", note: "把法式松弛做得更城市一点。" },
        { title: "皮质半裙 + 长靴", bottom: "皮质半裙", shoes: "长靴", accessory: "耳圈 + 丝巾", hat: "小礼帽", note: "更有照片感，更像时装杂志版本。" },
      ],
      travel: [
        { title: "亚麻阔腿裤 + 软底凉鞋", bottom: "亚麻阔腿裤", shoes: "软底凉鞋", accessory: "编织托特包", hat: "宽边草帽", note: "度假、旅行、海边都非常合适。" },
        { title: "针织长裙 + 皮拖鞋", bottom: "针织长裙", shoes: "皮拖鞋", accessory: "墨镜 + 编织包", hat: "草编礼帽", note: "更适合慢节奏旅行图和氛围照片。" },
      ],
      party: [
        { title: "丝质长裙裤 + 细跟鞋", bottom: "丝质长裙裤", shoes: "细跟鞋", accessory: "古金耳饰", hat: "贝雷帽", note: "轻法式夜晚感，很耐看。" },
        { title: "开衩长裙 + 绑带高跟鞋", bottom: "开衩长裙", shoes: "绑带高跟鞋", accessory: "小号手拿包", hat: "网纱发饰", note: "更适合夜晚聚会和精致照片。" },
      ],
      campus: [
        { title: "高腰牛仔裤 + 芭蕾鞋", bottom: "高腰牛仔裤", shoes: "芭蕾鞋", accessory: "帆布包", hat: "贝雷帽", note: "文艺又自然，校园里很耐看。" },
        { title: "百褶长裙 + 玛丽珍鞋", bottom: "百褶长裙", shoes: "玛丽珍鞋", accessory: "细项链", hat: "丝巾发带", note: "更温柔，也更有法式少女感。" },
      ],
    },
  },
  urbanOutdoor: {
    name: "城市机能",
    shortText: "这组会先给你一套更实穿的轻户外方案，再给一套更有层次的城市机能版本。",
    narrative: "把实穿、轻量和层次感放在一起，让上衣也能进入机能路线。",
    palette: ["岩灰", "军绿", "雾黑"],
    paletteText: "颜色不需要太花，但要能撑起结构感和功能感。",
    looks: {
      commute: [
        { title: "锥形工装裤 + 轻量跑鞋", bottom: "锥形工装裤", shoes: "轻量跑鞋", accessory: "功能托特包", hat: "运动帽", note: "适合城市移动和通勤场景，舒服又不邋遢。" },
        { title: "尼龙长裙裤 + 厚底徒步鞋", bottom: "尼龙长裙裤", shoes: "厚底徒步鞋", accessory: "机能斜挎包", hat: "渔夫帽", note: "更有层次，也更像当下流行的城市机能穿法。" },
      ],
      casual: [
        { title: "束脚裤 + 越野跑鞋", bottom: "束脚裤", shoes: "越野跑鞋", accessory: "胸前小包", hat: "棒球帽", note: "轻松、好动，非常适合周末。" },
        { title: "宽松尼龙裤 + 厚底凉鞋", bottom: "宽松尼龙裤", shoes: "厚底凉鞋", accessory: "多口袋挎包", hat: "渔夫帽", note: "更偏造型一点，适合逛展和城市散步。" },
      ],
      date: [
        { title: "机能裙裤 + 干净短靴", bottom: "机能裙裤", shoes: "干净短靴", accessory: "结构小包", hat: "运动帽", note: "把机能感压得更精致一点，不会太硬。" },
        { title: "修长工装裤 + 厚底长靴", bottom: "修长工装裤", shoes: "厚底长靴", accessory: "银色耳圈", hat: "冷帽", note: "更适合夜晚和强风格拍照。" },
      ],
      street: [
        { title: "宽工装裤 + 徒步鞋", bottom: "宽工装裤", shoes: "徒步鞋", accessory: "机能胸包", hat: "渔夫帽", note: "最稳的机能街头组合，易穿又出效果。" },
        { title: "拼接长裙裤 + 厚底短靴", bottom: "拼接长裙裤", shoes: "厚底短靴", accessory: "多功能小包", hat: "冷帽", note: "第二套会更时装，也更有未来感。" },
      ],
      travel: [
        { title: "速干长裤 + 轻量跑鞋", bottom: "速干长裤", shoes: "轻量跑鞋", accessory: "登机斜挎包", hat: "遮阳帽", note: "最适合长时间移动和旅行日程。" },
        { title: "尼龙短裤 + 抓地凉鞋", bottom: "尼龙短裤", shoes: "抓地凉鞋", accessory: "防泼水背包", hat: "宽边遮阳帽", note: "偏轻户外和夏日旅行路线。" },
      ],
      party: [
        { title: "机能长裙裤 + 结构短靴", bottom: "机能长裙裤", shoes: "结构短靴", accessory: "小号机能包", hat: "冷帽", note: "适合更先锋一点的聚会场景。" },
        { title: "亮面工装裙 + 厚底长靴", bottom: "亮面工装裙", shoes: "厚底长靴", accessory: "金属扣单肩包", hat: "皮质渔夫帽", note: "夜晚更有视觉冲击力。" },
      ],
      campus: [
        { title: "束脚运动裤 + 跑鞋", bottom: "束脚运动裤", shoes: "跑鞋", accessory: "双肩包", hat: "棒球帽", note: "很适合校园通勤，轻便又清爽。" },
        { title: "拼接口袋裤 + 厚底运动鞋", bottom: "拼接口袋裤", shoes: "厚底运动鞋", accessory: "胸包", hat: "冷帽", note: "更潮一点，适合年轻机能路线。" },
      ],
    },
  },
  retroAcademy: {
    name: "复古学院",
    shortText: "这组会先给你一套清爽文艺的学院搭法，再给一套更有复古氛围的风格版。",
    narrative: "保留书卷气和干净感，再把复古层次慢慢加进去。",
    palette: ["奶茶棕", "墨绿", "米白"],
    paletteText: "学院风适合低调温和的配色，让上衣看起来更耐看。",
    looks: {
      commute: [
        { title: "九分西裤 + 乐福鞋", bottom: "九分西裤", shoes: "乐福鞋", accessory: "皮质公文包", hat: "贝雷帽", note: "文气但不幼态，适合轻通勤。" },
        { title: "格纹半裙 + 小跟鞋", bottom: "格纹半裙", shoes: "小跟鞋", accessory: "复古手提包", hat: "报童帽", note: "更有旧电影气质，风格更明显。" },
      ],
      casual: [
        { title: "直筒牛仔裤 + 帆布鞋", bottom: "直筒牛仔裤", shoes: "帆布鞋", accessory: "帆布托特包", hat: "棒球帽", note: "最适合图书馆、咖啡店和日常出门。" },
        { title: "百褶半裙 + 玛丽珍鞋", bottom: "百褶半裙", shoes: "玛丽珍鞋", accessory: "细框眼镜", hat: "贝雷帽", note: "更文艺，也更有学院感完成度。" },
      ],
      date: [
        { title: "针织中裙 + 乐福鞋", bottom: "针织中裙", shoes: "乐福鞋", accessory: "锁骨链", hat: "贝雷帽", note: "温柔、干净，适合轻文艺约会。" },
        { title: "格纹长裙 + 小猫跟鞋", bottom: "格纹长裙", shoes: "小猫跟鞋", accessory: "复古耳饰", hat: "小礼帽", note: "更有复古电影感，适合拍照。" },
      ],
      street: [
        { title: "灯芯绒长裤 + 厚底乐福鞋", bottom: "灯芯绒长裤", shoes: "厚底乐福鞋", accessory: "斜挎邮差包", hat: "报童帽", note: "学院感里带一点城市酷感。" },
        { title: "短百褶裙 + 长袜短靴", bottom: "短百褶裙", shoes: "长袜短靴", accessory: "链条包", hat: "贝雷帽", note: "更适合风格化拍摄。" },
      ],
      travel: [
        { title: "直筒卡其裤 + 帆布鞋", bottom: "直筒卡其裤", shoes: "帆布鞋", accessory: "双肩包", hat: "棒球帽", note: "实穿耐看，适合城市旅行。" },
        { title: "针织长裙 + 玛丽珍鞋", bottom: "针织长裙", shoes: "玛丽珍鞋", accessory: "复古手提包", hat: "草编帽", note: "更偏氛围感旅拍。" },
      ],
      party: [
        { title: "丝绒长裤 + 乐福鞋", bottom: "丝绒长裤", shoes: "乐福鞋", accessory: "古铜耳饰", hat: "贝雷帽", note: "复古但克制，适合小型聚会。" },
        { title: "格纹长裙 + 绑带高跟鞋", bottom: "格纹长裙", shoes: "绑带高跟鞋", accessory: "小号手拿包", hat: "网纱礼帽", note: "更有戏剧感和复古感。" },
      ],
      campus: [
        { title: "百褶裙 + 小白鞋", bottom: "百褶裙", shoes: "小白鞋", accessory: "双肩包", hat: "发箍", note: "最标准的学院休闲穿法。" },
        { title: "针织长裙 + 乐福鞋", bottom: "针织长裙", shoes: "乐福鞋", accessory: "细框眼镜", hat: "贝雷帽", note: "更文艺，也更适合拍氛围照。" },
      ],
    },
  },
  resortChic: {
    name: "度假轻奢",
    shortText: "这组会先给你一套轻松好穿的度假方案，再给一套更适合旅行照片和氛围感输出的版本。",
    narrative: "让上衣在松弛场景里也显得精致，而不是随便。",
    palette: ["沙滩米", "海盐蓝", "日光金"],
    paletteText: "度假路线适合明亮但不刺眼的颜色，让整体更有空气感。",
    looks: {
      commute: [
        { title: "轻亚麻阔腿裤 + 皮面凉鞋", bottom: "轻亚麻阔腿裤", shoes: "皮面凉鞋", accessory: "编织托特包", hat: "草编帽", note: "适合度假酒店或海边城市通勤。" },
        { title: "垂感长裙裤 + 金属凉鞋", bottom: "垂感长裙裤", shoes: "金属凉鞋", accessory: "珍珠手包", hat: "宽檐帽", note: "更有轻奢氛围，也更适合拍照。" },
      ],
      casual: [
        { title: "棉麻短裤 + 平底拖鞋", bottom: "棉麻短裤", shoes: "平底拖鞋", accessory: "编织包", hat: "草帽", note: "最轻松的假日穿法，适合晒太阳和散步。" },
        { title: "轻纱半裙 + 绑带凉鞋", bottom: "轻纱半裙", shoes: "绑带凉鞋", accessory: "金色耳饰", hat: "宽边草帽", note: "更适合旅行氛围照。" },
      ],
      date: [
        { title: "开衩长裙 + 细带凉鞋", bottom: "开衩长裙", shoes: "细带凉鞋", accessory: "珍珠耳饰", hat: "无帽 / 卷发造型", note: "有轻松浪漫的度假约会感。" },
        { title: "缎感长裙裤 + 高跟凉鞋", bottom: "缎感长裙裤", shoes: "高跟凉鞋", accessory: "小号手包", hat: "宽檐礼帽", note: "更适合晚餐和海边夜景。" },
      ],
      street: [
        { title: "白色长裤 + 皮拖鞋", bottom: "白色长裤", shoes: "皮拖鞋", accessory: "编织单肩包", hat: "草帽", note: "适合旅行城市中的日常街拍。" },
        { title: "印花长裙 + 金属凉鞋", bottom: "印花长裙", shoes: "金属凉鞋", accessory: "亮面手包", hat: "大檐帽", note: "更有时装感和旅行大片感。" },
      ],
      travel: [
        { title: "速干短裤 + 软底凉鞋", bottom: "速干短裤", shoes: "软底凉鞋", accessory: "托特包", hat: "遮阳帽", note: "非常适合海边、岛屿和热带旅行。" },
        { title: "亚麻长裙裤 + 绑带凉鞋", bottom: "亚麻长裙裤", shoes: "绑带凉鞋", accessory: "草编包", hat: "宽檐草帽", note: "第二套更适合旅拍和发图。" },
      ],
      party: [
        { title: "亮面半裙 + 细跟凉鞋", bottom: "亮面半裙", shoes: "细跟凉鞋", accessory: "珍珠手包", hat: "发饰", note: "适合度假酒店晚间聚会。" },
        { title: "流光长裙 + 金色高跟鞋", bottom: "流光长裙", shoes: "金色高跟鞋", accessory: "珠光耳坠", hat: "小礼帽", note: "更有灯光和夜晚的轻奢感。" },
      ],
      campus: [
        { title: "棉麻短裙 + 帆布鞋", bottom: "棉麻短裙", shoes: "帆布鞋", accessory: "帆布包", hat: "草编帽", note: "偏夏日轻松路线，适合年轻感场景。" },
        { title: "轻纱长裙 + 平底凉鞋", bottom: "轻纱长裙", shoes: "平底凉鞋", accessory: "编织包", hat: "宽边草帽", note: "更有氛围，也更适合拍照。" },
      ],
    },
  },
};

const occasionLabels = {
  commute: "通勤上班",
  casual: "日常出门",
  date: "约会出片",
  street: "街头造型",
  travel: "旅行轻便",
  party: "聚会夜晚",
  campus: "校园休闲",
};

const modeProfiles = {
  balanced: {
    name: "稳妥不出错",
    text: "Look A 会更日常好穿，Look B 会在同一方向上再往前走一步，方便你直接做选择。",
    prompt: "Prioritize real-life wearability, balanced silhouettes, and easy coordination.",
  },
  camera: {
    name: "更上镜出片",
    text: "两套方案都要保留上镜感，尤其 Look B 要更像拍照时会选的那一套。",
    prompt: "Prioritize photogenic styling, flattering silhouettes, and editorial polish.",
  },
  slimming: {
    name: "更显高显瘦",
    text: "两套都优先处理比例，尽量拉高腰线、收紧线条、减少拖沓感。",
    prompt: "Prioritize elongating proportions, cleaner vertical lines, and slimming balance.",
  },
  comfort: {
    name: "更轻松好穿",
    text: "Look A 要最容易直接穿出门，Look B 则是在舒适前提下做一点升级。",
    prompt: "Prioritize comfort, movement, softness, and all-day wearability.",
  },
  statement: {
    name: "更有造型感",
    text: "Look A 保持可落地，Look B 需要明显更有视觉记忆点和风格表达。",
    prompt: "Prioritize shape, contrast, styling impact, and strong visual identity.",
  },
  luxury: {
    name: "更精致贵气",
    text: "两套都强调材质、配饰和完成度，Look B 会更像高级场合的升级版。",
    prompt: "Prioritize premium detailing, luxurious materials, and elevated finishing.",
  },
  youthful: {
    name: "更年轻活力",
    text: "整体要更轻快、更显精神，Look B 可以更有一点潮流感。",
    prompt: "Prioritize freshness, energy, youthfulness, and lively styling details.",
  },
};

const colorProfiles = {
  toneOnTone: {
    name: "顺色延伸",
    text: "整体顺色更容易显高级，也更能托住主单品。",
    prompt: "Use tonal or adjacent colors for a cohesive, elevated result.",
  },
  lightContrast: {
    name: "轻对比提亮",
    text: "通过轻微对比把重点提出来，但不要让画面太吵。",
    prompt: "Use light contrast to brighten the outfits while staying refined.",
  },
  softLuxury: {
    name: "低饱和高级感",
    text: "颜色控制在低饱和区间，让面料和轮廓更突出。",
    prompt: "Use low-saturation, premium-feeling colors with restrained contrast.",
  },
  seasonal: {
    name: "季节氛围配色",
    text: "让配色更有当季氛围，但仍然围绕上衣组织。",
    prompt: "Use a seasonal color story while keeping the uploaded top as the anchor piece.",
  },
  cleanNeutrals: {
    name: "干净中性色",
    text: "尽量用米、灰、黑、白这类中性色来做更耐看的搭配。",
    prompt: "Use clean neutrals and timeless shades for a polished, minimal look.",
  },
  accentPop: {
    name: "一点亮色点题",
    text: "用少量亮色做点题，让第二套尤其更有记忆点。",
    prompt: "Add a controlled accent color to create a memorable but wearable focal point.",
  },
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
};

const garmentInput = document.querySelector("#garmentInput");
const garmentStatus = document.querySelector("#garmentStatus");
const occasionInput = document.querySelector("#occasionInput");
const modeInput = document.querySelector("#modeInput");
const colorStrategyInput = document.querySelector("#colorStrategyInput");
const styleGrid = document.querySelector("#styleGrid");
const generateButton = document.querySelector("#generateButton");
const resetButton = document.querySelector("#resetButton");
const lookForm = document.querySelector("#lookForm");

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

garmentInput.addEventListener("change", (event) => loadGarment(event.target.files?.[0]));
occasionInput.addEventListener("change", () => updateState("occasion", occasionInput.value));
modeInput.addEventListener("change", () => updateState("mode", modeInput.value));
colorStrategyInput.addEventListener("change", () => updateState("colorStrategy", colorStrategyInput.value));
styleGrid.addEventListener("click", onStylePick);
generateButton.addEventListener("click", generateLookImage);
resetButton.addEventListener("click", resetAll);

syncUI();

function updateState(key, value) {
  state[key] = value;
  clearGenerationState();
  syncUI();
}

function loadGarment(file) {
  if (!file) {
    return;
  }

  if (state.garmentPreviewUrl) {
    URL.revokeObjectURL(state.garmentPreviewUrl);
  }

  state.garmentFile = file;
  state.garmentPreviewUrl = URL.createObjectURL(file);
  garmentStatus.textContent = file.name;
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

  lookForm.classList.add("is-loading");
  state.lastError = "";
  previewState.textContent = "生成中";
  previewHeadline.textContent = "正在生成双套穿搭图";
  previewCopy.textContent = "这次会围绕同一件上衣，同时给出 Look A 和 Look B 两种完整方向。";

  try {
    const garmentDataUrl = await readFileAsDataUrl(state.garmentFile);
    const response = await fetch("/api/generate-look", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
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
  }
}

function resetAll() {
  garmentInput.value = "";
  garmentStatus.textContent = "未选择";
  occasionInput.value = "commute";
  modeInput.value = "balanced";
  colorStrategyInput.value = "toneOnTone";

  if (state.garmentPreviewUrl) {
    URL.revokeObjectURL(state.garmentPreviewUrl);
  }

  state.garmentFile = null;
  state.garmentPreviewUrl = "";
  state.style = "quietLuxury";
  state.occasion = "commute";
  state.mode = "balanced";
  state.colorStrategy = "toneOnTone";
  clearGenerationState();
  resetImageStage();

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
  const profile = styleProfiles[state.style];
  const looks = getLooks();
  const modeProfile = modeProfiles[state.mode];
  const colorProfile = colorProfiles[state.colorStrategy];

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
    ? `已根据上传上衣、${profile.name}风格、${occasionLabels[state.occasion]}场景，以及 ${modeProfile.name} 模式生成两套建议与图片。`
    : "同一件上衣，不只给一个答案，而是给你两种完整穿法。";

  generateButton.textContent = state.lastError ? "重新生成两套穿搭图" : "生成两套穿搭图";

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
  const profile = styleProfiles[state.style];
  const lookPair = profile.looks[state.occasion] || profile.looks.commute;
  return lookPair;
}

function toUserError(payload) {
  const message = payload?.error || "图片生成失败。";

  if (/No available compatible accounts/i.test(message)) {
    return "当前图像中转通道暂时没有可用账号，页面本身正常，但这一刻无法出图。请稍后重试。";
  }

  if (/temporarily unavailable|upstream/i.test(message)) {
    return "图像服务上游暂时不可用。你可以点击“重新生成两套穿搭图”再试一次。";
  }

  if (/missing image_api_key|relay provider is not configured/i.test(message)) {
    return "服务器还没有配置图像 Key，请先在部署平台补上环境变量。";
  }

  if (/quota|rate limit|resource exhausted/i.test(message)) {
    return "当前生图通道额度不足或触发限流，请稍后再试。";
  }

  return `${message} 你可以点击“重新生成两套穿搭图”再试一次。`;
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error("读取图片失败。"));
    reader.readAsDataURL(file);
  });
}
