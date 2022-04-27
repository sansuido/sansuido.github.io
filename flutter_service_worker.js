'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "bfe3e62da0cad13cdf7d8f59d55bb1c6",
"assets/assets/Config.exe": "1e52c9cc6e46cbfefd1ac5d6e45471a7",
"assets/assets/Data/BasicData/AutoBackup1/CDataBase.dat": "a39660d46a36708e075041ff28e2a83a",
"assets/assets/Data/BasicData/AutoBackup1/CommonEvent.dat": "46730bdd90231ea326be1b10fc406192",
"assets/assets/Data/BasicData/AutoBackup1/DataBase.dat": "591ed8dc8b1e850a6ebf7f9f6f8a3acc",
"assets/assets/Data/BasicData/AutoBackup1/Game.dat": "27dcc9bcb1380d1841aa9f2159d9f572",
"assets/assets/Data/BasicData/AutoBackup1/MapTree.dat": "129f208fdc5d934c6fbc1c495063f13b",
"assets/assets/Data/BasicData/AutoBackup1/MapTreeOpenStatus.dat": "feb0a5806d6c10f9d248f82cc3122522",
"assets/assets/Data/BasicData/AutoBackup1/SysDatabase.dat": "75e32628626d5cfc283b62f4275cd58d",
"assets/assets/Data/BasicData/AutoBackup1/SysDataBaseBasic.dat": "c83aad387006b1e6b78564c03efefbcf",
"assets/assets/Data/BasicData/AutoBackup1/TileSetData.dat": "b8a7e4d9f0b021145745da34dd6844c5",
"assets/assets/Data/BasicData/AutoBackup2/CDataBase.dat": "a39660d46a36708e075041ff28e2a83a",
"assets/assets/Data/BasicData/AutoBackup2/CommonEvent.dat": "46730bdd90231ea326be1b10fc406192",
"assets/assets/Data/BasicData/AutoBackup2/DataBase.dat": "591ed8dc8b1e850a6ebf7f9f6f8a3acc",
"assets/assets/Data/BasicData/AutoBackup2/Game.dat": "27dcc9bcb1380d1841aa9f2159d9f572",
"assets/assets/Data/BasicData/AutoBackup2/MapTree.dat": "129f208fdc5d934c6fbc1c495063f13b",
"assets/assets/Data/BasicData/AutoBackup2/MapTreeOpenStatus.dat": "feb0a5806d6c10f9d248f82cc3122522",
"assets/assets/Data/BasicData/AutoBackup2/SysDatabase.dat": "75e32628626d5cfc283b62f4275cd58d",
"assets/assets/Data/BasicData/AutoBackup2/SysDataBaseBasic.dat": "c83aad387006b1e6b78564c03efefbcf",
"assets/assets/Data/BasicData/AutoBackup2/TileSetData.dat": "b8a7e4d9f0b021145745da34dd6844c5",
"assets/assets/Data/BasicData/AutoBackup3/CDataBase.dat": "a39660d46a36708e075041ff28e2a83a",
"assets/assets/Data/BasicData/AutoBackup3/CommonEvent.dat": "46730bdd90231ea326be1b10fc406192",
"assets/assets/Data/BasicData/AutoBackup3/DataBase.dat": "591ed8dc8b1e850a6ebf7f9f6f8a3acc",
"assets/assets/Data/BasicData/AutoBackup3/Game.dat": "27dcc9bcb1380d1841aa9f2159d9f572",
"assets/assets/Data/BasicData/AutoBackup3/MapTree.dat": "129f208fdc5d934c6fbc1c495063f13b",
"assets/assets/Data/BasicData/AutoBackup3/MapTreeOpenStatus.dat": "feb0a5806d6c10f9d248f82cc3122522",
"assets/assets/Data/BasicData/AutoBackup3/SysDatabase.dat": "75e32628626d5cfc283b62f4275cd58d",
"assets/assets/Data/BasicData/AutoBackup3/SysDataBaseBasic.dat": "c83aad387006b1e6b78564c03efefbcf",
"assets/assets/Data/BasicData/AutoBackup3/TileSetData.dat": "b8a7e4d9f0b021145745da34dd6844c5",
"assets/assets/Data/BasicData/CDataBase.dat": "a39660d46a36708e075041ff28e2a83a",
"assets/assets/Data/BasicData/CDataBase.project": "28a98be600b0cc0e219a597f4054b434",
"assets/assets/Data/BasicData/CommonEvent.dat": "46730bdd90231ea326be1b10fc406192",
"assets/assets/Data/BasicData/DataBase.dat": "591ed8dc8b1e850a6ebf7f9f6f8a3acc",
"assets/assets/Data/BasicData/DataBase.project": "bf3c0683aefd6951b06e9fd0094e78a0",
"assets/assets/Data/BasicData/Game.dat": "27dcc9bcb1380d1841aa9f2159d9f572",
"assets/assets/Data/BasicData/icon000.png": "6e96829aafd19aa42c9cf24da911a4bf",
"assets/assets/Data/BasicData/icon001.png": "81e861b11478c446adcfcfc91a84d903",
"assets/assets/Data/BasicData/icon002.png": "daadeb25b8cb99cb2ef712592b1417eb",
"assets/assets/Data/BasicData/icon003.png": "cecfbf2cb6b1a73d58bcd102cec80058",
"assets/assets/Data/BasicData/icon004.png": "2334973200da9e00b4aa7c43cce730e2",
"assets/assets/Data/BasicData/icon005.png": "b0e4ebd3d190c23f4934b336e586a6f4",
"assets/assets/Data/BasicData/icon006.png": "1ca8236bd8a01c511d44d9d44afb1f16",
"assets/assets/Data/BasicData/icon007.png": "82806847ae7651c524d05e09034cf5cb",
"assets/assets/Data/BasicData/icon008.png": "88284b07d56c2204add3d6d013f57408",
"assets/assets/Data/BasicData/icon009.png": "ff93e2659ee894ea13a1d253fe44dd99",
"assets/assets/Data/BasicData/icon010.png": "439690afb3055afe26311de2ab31e77b",
"assets/assets/Data/BasicData/icon011.png": "b8f7691cf8a25ae2fa35cbf9d31a01cd",
"assets/assets/Data/BasicData/icon012.png": "37c2dc07591622e22d9271b268a4433f",
"assets/assets/Data/BasicData/icon013.png": "ff839ff28e00fb83f34d4fb329708c26",
"assets/assets/Data/BasicData/icon014.png": "1efa6c139ac2899035ac6aaf98d61061",
"assets/assets/Data/BasicData/icon015.png": "7e396daffa412f531ec760b5b2f4a021",
"assets/assets/Data/BasicData/icon016.png": "087a26636c9ee0a525d7cc95ec92a57e",
"assets/assets/Data/BasicData/icon017.png": "140df4df1fafd57198409d1965054a79",
"assets/assets/Data/BasicData/icon018.png": "c90de068219ed30baaa52fbc4f192b41",
"assets/assets/Data/BasicData/icon019.png": "8072c8ae92e90d06e8450b5934c0ab0d",
"assets/assets/Data/BasicData/icon020.png": "858cb1c8257fe69faeeec5a2cf077ed9",
"assets/assets/Data/BasicData/icon021.png": "81a82b82b047912e7e254a49cc7f6d5d",
"assets/assets/Data/BasicData/icon022.png": "49ac75f4308255c74407664ca019f1fa",
"assets/assets/Data/BasicData/icon023.png": "d4cd44802e4afe044f7c31a2d5bbc40b",
"assets/assets/Data/BasicData/icon024.png": "16adf6d70597fb389950ee1a21129914",
"assets/assets/Data/BasicData/icon025.png": "09fc0e63b374964be003ad83b7f12a13",
"assets/assets/Data/BasicData/icon026.png": "6c9c7d6b2f8a3c46d8e9ab6e096103fe",
"assets/assets/Data/BasicData/icon027.png": "37681d940d30538033f792420f996186",
"assets/assets/Data/BasicData/icon028.png": "4a6c203832cdfe0cafc346c149322241",
"assets/assets/Data/BasicData/icon029.png": "e141d43d9b05412d40952b3fd7f00971",
"assets/assets/Data/BasicData/icon030.png": "678b9b315cf0a8d142057981936033fe",
"assets/assets/Data/BasicData/icon031.png": "75785507cccdec6e45519d7456109feb",
"assets/assets/Data/BasicData/icon032.png": "30143e796a5147d67259b39f8930b9d4",
"assets/assets/Data/BasicData/icon033.png": "51f5ef1990fa68858d36a19a5784e708",
"assets/assets/Data/BasicData/icon034.png": "0ce7c43ebc377ee81af7ae69a607390f",
"assets/assets/Data/BasicData/icon035.png": "065a334b8475477d3ad1c54a1aa17299",
"assets/assets/Data/BasicData/icon036.png": "56ba17d7161a9ccd9c72352f5ebaadcf",
"assets/assets/Data/BasicData/icon037.png": "dec535e449a6e165e85b5978ebdf8d69",
"assets/assets/Data/BasicData/icon038.png": "f8fb34a674e4ff4c242b4baa215986a0",
"assets/assets/Data/BasicData/icon039.png": "90cb376762d442411369948213bb4671",
"assets/assets/Data/BasicData/icon040.png": "f9e9a447e806a51e9618aa50d46a648d",
"assets/assets/Data/BasicData/icon041.png": "3f26b2be0ad7cc3418f2a79b1d772557",
"assets/assets/Data/BasicData/icon042.png": "cd92e4e12723b3664420a01ad96e2238",
"assets/assets/Data/BasicData/icon043.png": "f2c3964813f96dfcd9eaedf03c094844",
"assets/assets/Data/BasicData/icon044.png": "0e4856c54065ae0c9ce69b72aa9f2845",
"assets/assets/Data/BasicData/icon045.png": "07c1de5daf0dcb0939e18dbe688ae74b",
"assets/assets/Data/BasicData/icon046.png": "0acb344f288bc652b413f272196da111",
"assets/assets/Data/BasicData/icon047.png": "42b05c4a794494ec334b712195002063",
"assets/assets/Data/BasicData/icon048.png": "86acf4f5f5595ce72b088b3d64409f67",
"assets/assets/Data/BasicData/icon049.png": "4ab1a548910d9b3e03b6e55e5d24aa9f",
"assets/assets/Data/BasicData/icon050.png": "c77aae74e3ac9443092da8f2502f107a",
"assets/assets/Data/BasicData/icon051.png": "e1d80a682ba3f43ccf2bcc54388b2896",
"assets/assets/Data/BasicData/icon052.png": "8c62e7bc5970fcf249fbd92021accca6",
"assets/assets/Data/BasicData/icon053.png": "88c0a1f5a7042f45ad6de66fe865ba8b",
"assets/assets/Data/BasicData/icon054.png": "ce75801be715b6e3f529082c8c198850",
"assets/assets/Data/BasicData/icon055.png": "4d031e5b9f0b43f0dc9ba71f04c4ff2b",
"assets/assets/Data/BasicData/icon056.png": "1bf7979700fbd98cbcba0b0edafeeb64",
"assets/assets/Data/BasicData/icon057.png": "b2ed04d791012e13f767f4e051582b79",
"assets/assets/Data/BasicData/icon058.png": "f1773bfe19ce2163a7f1e2dbcc21ab75",
"assets/assets/Data/BasicData/icon059.png": "acb0e1b781071be3301d8c8c401db263",
"assets/assets/Data/BasicData/icon060.png": "d9bd5f012d1bc8bebcd383db77a1b048",
"assets/assets/Data/BasicData/icon061.png": "60363cf172958ca82e312c3290322c14",
"assets/assets/Data/BasicData/icon062.png": "7f413494b7f1395c0b7efe8c2dcb73b8",
"assets/assets/Data/BasicData/icon063.png": "ecc8a5d6d2045454f4b0ef052478b3e7",
"assets/assets/Data/BasicData/icon064.png": "0f2ad82d4653f312545bf5f8f2a63b94",
"assets/assets/Data/BasicData/icon065.png": "48ecafab285e567912c9b6f0dfe3280c",
"assets/assets/Data/BasicData/icon066.png": "15d4b1b25b2d6a97d9e74b23627a407c",
"assets/assets/Data/BasicData/icon067.png": "5b3b4a318b5cb521810dcf6db49a88c5",
"assets/assets/Data/BasicData/icon068.png": "2170a69c3445f3dcb6dc961a9a84be81",
"assets/assets/Data/BasicData/icon069.png": "aa6f7657a62aea73e131d29526c2d301",
"assets/assets/Data/BasicData/icon070.png": "51e8d4b7dd64268dc1e51e27f4d58e8c",
"assets/assets/Data/BasicData/icon071.png": "6ca691bd5403256172f869cc54df2f15",
"assets/assets/Data/BasicData/icon072.png": "b0e0d0e1922d4c817351470d4f89eded",
"assets/assets/Data/BasicData/icon073.png": "c699bccb9b300178b18c59c7320192cd",
"assets/assets/Data/BasicData/icon074.png": "aacc6f6ee43d5180b9bea88a1cccee50",
"assets/assets/Data/BasicData/icon075.png": "dd2fbe853481b10f53e69c8899edf5bd",
"assets/assets/Data/BasicData/icon076.png": "00bbe86478e6f2057dc02434cf748224",
"assets/assets/Data/BasicData/icon077.png": "548d6cb239ca8ac9519c7a047695125c",
"assets/assets/Data/BasicData/icon078.png": "fc8ae83dd8e35b11c797775d4bb3cf0e",
"assets/assets/Data/BasicData/icon079.png": "05e7134d82df0c5026c44b263292db23",
"assets/assets/Data/BasicData/icon080.png": "eb6b39c249ee173cbe2623940a438d79",
"assets/assets/Data/BasicData/icon081.png": "b6a07e31f422a633a6702ae3cdd328ca",
"assets/assets/Data/BasicData/icon082.png": "cede6cc047e048d665e77276a511c742",
"assets/assets/Data/BasicData/icon083.png": "9d57f98538f7fe4cdc1bdbcf5b02f948",
"assets/assets/Data/BasicData/icon084.png": "65f493b8a9bf5d68941e9c9b5678dc34",
"assets/assets/Data/BasicData/icon085.png": "7ab6335f45a3a65d47c4e7d7017d32e9",
"assets/assets/Data/BasicData/icon086.png": "e289683989c4db2ca1988bc176d487e8",
"assets/assets/Data/BasicData/icon087.png": "4633cca72383a79a8ee1eeb0a3830451",
"assets/assets/Data/BasicData/icon088.png": "b7dd25c0e4158727e496855d28b110d3",
"assets/assets/Data/BasicData/icon089.png": "b9b3d3c155cbd31a5a0c36800271c1bf",
"assets/assets/Data/BasicData/icon090.png": "ad63443e374974b5916a9efc9a4b3517",
"assets/assets/Data/BasicData/icon091.png": "a9a7886a28cdc0b26e2f7440edf2eb8a",
"assets/assets/Data/BasicData/icon092.png": "e77d87d1585358c5433d3f1a3f072e60",
"assets/assets/Data/BasicData/icon093.png": "b356242f6cc847cf1e646ee951f392e5",
"assets/assets/Data/BasicData/icon094.png": "d92c47ba0d70665d61664cc3e840f3c5",
"assets/assets/Data/BasicData/icon095.png": "8b95227501311ab09bb816e1aa4b9930",
"assets/assets/Data/BasicData/icon096.png": "d91af303d6037566beeabec80259b6a0",
"assets/assets/Data/BasicData/icon097.png": "6726e70e8b2cf11d54421e5f2e7d7500",
"assets/assets/Data/BasicData/icon098.png": "695974502e65426ad69c86447ffffada",
"assets/assets/Data/BasicData/icon099.png": "161afa57d19c0a0e9584653b44722c09",
"assets/assets/Data/BasicData/icon100.png": "7e0c8d189a22746d23073147e1687642",
"assets/assets/Data/BasicData/icon101.png": "73fc96bcd32e562ddded31799cb2062a",
"assets/assets/Data/BasicData/icon102.png": "41af5749b85dbcf4e93e2641af2b00ff",
"assets/assets/Data/BasicData/icon103.png": "4ab12d1f06f0950df310b6bebf396462",
"assets/assets/Data/BasicData/icon104.png": "8742ecd31f80241f7dd616c467dfa493",
"assets/assets/Data/BasicData/icon105.png": "dee87c3060b94b4a898bb7354397ef62",
"assets/assets/Data/BasicData/icon106.png": "a277057203c35fdec8b34c63ba2bec6b",
"assets/assets/Data/BasicData/icon107.png": "ef071028febbf678f1bb2e931862510b",
"assets/assets/Data/BasicData/icon108.png": "2a2629e7d87651c3778cfe8bcbc30525",
"assets/assets/Data/BasicData/icon109.png": "303dadd697fc18d000b976a3beebf3aa",
"assets/assets/Data/BasicData/icon110.png": "c3b2f3b47b24819575ebacf4e39e0a0b",
"assets/assets/Data/BasicData/icon111.png": "1d251428fefedd958e3b2d22e0864807",
"assets/assets/Data/BasicData/icon112.png": "29d0f2af0aa4ec502425bf691c6abbe2",
"assets/assets/Data/BasicData/icon113.png": "16123f8716cdc17672862657c9e9e241",
"assets/assets/Data/BasicData/icon114.png": "a53982dd0c410cb8b4c58e312112a1df",
"assets/assets/Data/BasicData/icon115.png": "a8b6e1d9b89dfd42017aeacaab43f8a7",
"assets/assets/Data/BasicData/icon116.png": "e96bffb2bcd6a82ba59e7de5afd7e077",
"assets/assets/Data/BasicData/icon117.png": "2fbc94b5f852503694f0a48fe0cb717b",
"assets/assets/Data/BasicData/icon118.png": "11309592ed59ef9016ae378f242e2255",
"assets/assets/Data/BasicData/icon119.png": "7dc67f26416f9e77574a15b79cd412d7",
"assets/assets/Data/BasicData/icon120.png": "cfdbf48d4badef9b93af3bd1ac24ceb7",
"assets/assets/Data/BasicData/icon121.png": "7225f41210e77c4922657857c5ac0134",
"assets/assets/Data/BasicData/icon122.png": "08b7779f905d8e716cff4ac2bca995c5",
"assets/assets/Data/BasicData/icon123.png": "8a3bb1b6856d86fc32f82a4225e82f96",
"assets/assets/Data/BasicData/icon124.png": "b909bb3744dd56b71740038eca845b5f",
"assets/assets/Data/BasicData/icon125.png": "2e8b2c7d341e2595bd79ba6cc005a469",
"assets/assets/Data/BasicData/MapTree.dat": "129f208fdc5d934c6fbc1c495063f13b",
"assets/assets/Data/BasicData/MapTreeOpenStatus.dat": "feb0a5806d6c10f9d248f82cc3122522",
"assets/assets/Data/BasicData/SysDatabase.dat": "75e32628626d5cfc283b62f4275cd58d",
"assets/assets/Data/BasicData/SysDatabase.project": "e40824f224b02516a8d66d54758538b3",
"assets/assets/Data/BasicData/SysDataBaseBasic.dat": "c83aad387006b1e6b78564c03efefbcf",
"assets/assets/Data/BasicData/SysDataBaseBasic.project": "6a85b0c6ed65e1a4ea44a21d664ebe72",
"assets/assets/Data/BasicData/TileSetData.dat": "b8a7e4d9f0b021145745da34dd6844c5",
"assets/assets/Data/MapChip/%255BA%255DDirt1-Dirt2_pipo.png": "f0a9499645ae2ac983c3578d033b696a",
"assets/assets/Data/MapChip/%255BA%255DDirt1-Dirt3_pipo.png": "67a59fa8fdda3b597b2eb5f49f372700",
"assets/assets/Data/MapChip/%255BA%255DDirt1-Dirt4_pipo.png": "908768b33d7474bfa6751425e9caf57b",
"assets/assets/Data/MapChip/%255BA%255DDirt1_pipo.png": "113c79d44060f90a0da56c7bf8ff13ae",
"assets/assets/Data/MapChip/%255BA%255DDirt2_pipo.png": "92ffd3f2d452302f5c86fd70fc0f1bfe",
"assets/assets/Data/MapChip/%255BA%255DDirt3_pipo.png": "034f7cb54c00064ca83bb5a054332043",
"assets/assets/Data/MapChip/%255BA%255DDirt4_pipo.png": "6f849da7c1170b7e83f02ec4482a9336",
"assets/assets/Data/MapChip/%255BA%255DFlower_pipo.png": "fd10f5c7b6a3646508d306c9103d2686",
"assets/assets/Data/MapChip/%255BA%255DGrass1-Dirt1_pipo.png": "5898bd2bd537612700454ce94fc41d32",
"assets/assets/Data/MapChip/%255BA%255DGrass1-Dirt2_pipo.png": "dcd6df6011a44a44acfc7ad35268303b",
"assets/assets/Data/MapChip/%255BA%255DGrass1-Dirt3_pipo.png": "9d37f01886e9860a2813e0d1b99c7c61",
"assets/assets/Data/MapChip/%255BA%255DGrass1-Dirt4_pipo.png": "47d8309c5aecde70a35d532c86dfc8e8",
"assets/assets/Data/MapChip/%255BA%255DGrass1-Grass2_pipo.png": "01c81afb94d0b00bb4896820a27ac5a9",
"assets/assets/Data/MapChip/%255BA%255DGrass1-Grass3_pipo.png": "30358f4a8c7fdf721f64d4a459d18893",
"assets/assets/Data/MapChip/%255BA%255DGrass1-Grass4_pipo.png": "3e010ab1d5f12864954208bde183d9b7",
"assets/assets/Data/MapChip/%255BA%255DGrass1_pipo.png": "75dbd3850fa28c66c8723fbac6789c58",
"assets/assets/Data/MapChip/%255BA%255DGrass2_pipo.png": "2d71bcf7e6fe80f64d95431d8bf15cda",
"assets/assets/Data/MapChip/%255BA%255DGrass3_pipo.png": "8ab09c876be1ac34706b8fb9903eef60",
"assets/assets/Data/MapChip/%255BA%255DGrass4_pipo.png": "b88ee5a1914b025488f2218446e1f915",
"assets/assets/Data/MapChip/%255BA%255DIce1_pipo.png": "f36a230b43a76946352271932ed6e496",
"assets/assets/Data/MapChip/%255BA%255DIce2_pipo.png": "c74e47aeb46bff11fda1bc1fe23f7dad",
"assets/assets/Data/MapChip/%255BA%255DLava_pipo.png": "78de713c7053d2ad448a8719105bed1d",
"assets/assets/Data/MapChip/%255BA%255DMoss_pipo.png": "24df34c1968b557a62d70daf545a7701",
"assets/assets/Data/MapChip/%255BA%255DSnow_Dirt2_pipo.png": "8b03eea7ade3ac515deef9a5e95369bc",
"assets/assets/Data/MapChip/%255BA%255DSnow_Dirt4_pipo.png": "f8c8419b79819f85955344a9b73e5d0f",
"assets/assets/Data/MapChip/%255BA%255DSnow_Grass1_pipo.png": "e77e42efef32c551f5ed4a60f75fd2b0",
"assets/assets/Data/MapChip/%255BA%255DSnow_Grass4_pipo.png": "bef2bfa845a28104083ae9b9c9ee6afc",
"assets/assets/Data/MapChip/%255BA%255DSnow_pipo.png": "764d72a0ddcd02c1ca3686c783840225",
"assets/assets/Data/MapChip/%255BA%255DWall-Up1_pipo.png": "dcf4202d97da8c9a693d2132906fa65a",
"assets/assets/Data/MapChip/%255BA%255DWall-Up2_pipo.png": "74356afb682dc7643e7096327e1bb717",
"assets/assets/Data/MapChip/%255BA%255DWall-Up_Cave1_pipo.png": "e61d407f39906a20dcb0f69b4cb2d096",
"assets/assets/Data/MapChip/%255BA%255DWall-Up_Cave2_pipo.png": "021bb44b413ef59456ab3e139b5ae3e2",
"assets/assets/Data/MapChip/%255BA%255DWall-Up_Cave3_pipo.png": "3b483d98fd0e4ac546cdaacd0994182c",
"assets/assets/Data/MapChip/%255BA%255DWall-Up_Cave4_pipo.png": "7afa9b50094409764d30ad6134d69105",
"assets/assets/Data/MapChip/%255BA%255DWall-Up_Cave5_pipo.png": "6f2ba1a1f9f5f1f7db8fe9552078f83d",
"assets/assets/Data/MapChip/%255BA%255DWall-Up_Dungeon1_pipo.png": "a7d4305e3e4e7636a9ff9dd937257924",
"assets/assets/Data/MapChip/%255BA%255DWall-Up_Dungeon2_pipo.png": "2af56bd425d29b80d139a7879e12f8c8",
"assets/assets/Data/MapChip/%255BA%255DWall-Up_Forest1_pipo.png": "9e44e09a283fb7a237501954fa509c64",
"assets/assets/Data/MapChip/%255BA%255DWall-Up_Forest2_pipo.png": "f484bd062d0280abf2b0e486fdc2adad",
"assets/assets/Data/MapChip/%255BA%255DWall-Up_Snow_pipo.png": "850e95dafeb188f588b3f90f36887b25",
"assets/assets/Data/MapChip/%255BA%255DWater1_Cave1_pipo.png": "f4fd4ea5f13a39e40caa6ebc99eb19d9",
"assets/assets/Data/MapChip/%255BA%255DWater1_Cave2_pipo.png": "f8f93a542b1b461e3181f5dd68d6b12c",
"assets/assets/Data/MapChip/%255BA%255DWater1_Cave3_pipo.png": "498e98690c7d040caadd51d9383e8ddc",
"assets/assets/Data/MapChip/%255BA%255DWater1_Cave4_pipo.png": "1b6af66e8759510333d9af6c58c0f724",
"assets/assets/Data/MapChip/%255BA%255DWater1_Cave5_pipo.png": "acd74f97b38de5d07c6307cad115a1f1",
"assets/assets/Data/MapChip/%255BA%255DWater1_pipo.png": "5d731e8977636614eea586c7578336b0",
"assets/assets/Data/MapChip/%255BA%255DWater2_Cave1_pipo.png": "97e7579348765cd0e2dedadc57ea74cb",
"assets/assets/Data/MapChip/%255BA%255DWater2_Cave2_pipo.png": "90f031fc5dc698c8996096d8a26c841b",
"assets/assets/Data/MapChip/%255BA%255DWater2_Cave3_pipo.png": "233c73503aa75c67f26b6538ed22ef9c",
"assets/assets/Data/MapChip/%255BA%255DWater2_Cave4_pipo.png": "559e766ad6c3ef8e5d8254d1a265e362",
"assets/assets/Data/MapChip/%255BA%255DWater2_Cave5_pipo.png": "a2b34bf1c3df81c736e90255bcc377dc",
"assets/assets/Data/MapChip/%255BA%255DWater2_pipo.png": "40aa34916c19a2a27533e99935c46be2",
"assets/assets/Data/MapChip/%255BA%255DWater3_Cave1_pipo.png": "10ffc6c3e8303976cde6072805203687",
"assets/assets/Data/MapChip/%255BA%255DWater3_Cave2_pipo.png": "88c66b55fe019ce40e5a0a88e5fa7559",
"assets/assets/Data/MapChip/%255BA%255DWater3_Cave3_pipo.png": "3ee34e1203b221a8d7f2ade870673937",
"assets/assets/Data/MapChip/%255BA%255DWater3_Cave4_pipo.png": "d33f3707739c1b270ed5e11ece1688f6",
"assets/assets/Data/MapChip/%255BA%255DWater3_Cave5_pipo.png": "1bff17f851fe47ab71de380cbe81d445",
"assets/assets/Data/MapChip/%255BA%255DWater3_pipo.png": "09bdedce0c2e04d94f0e5e88a96f3354",
"assets/assets/Data/MapChip/%255BA%255DWater4_pipo.png": "aa91a6cbbd51133652b3ee4436aaf81a",
"assets/assets/Data/MapChip/%255BA%255DWater5_pipo.png": "e2b79195d4dca71b04778a8fd9f55c16",
"assets/assets/Data/MapChip/%255BA%255DWater6_pipo.png": "58f35a12f73670be00efcd9790d04a94",
"assets/assets/Data/MapChip/%255BA%255DWater7_pipo.png": "434d3f4b523228e6d900ef64260c56cb",
"assets/assets/Data/MapChip/%255BA%255DWaterFall1_pipo.png": "f68b13b52f1cc88f037853fb962c75f3",
"assets/assets/Data/MapChip/%255BA%255DWaterFall2_pipo.png": "b205bceeab00e9bf5f59e64ca82094dc",
"assets/assets/Data/MapChip/%255BA%255DWaterFall3_pipo.png": "0dfd4a9abb2918987289a0e7aa0c6987",
"assets/assets/Data/MapChip/%255BA%255DWorld_Forest-Snow_pipo.png": "d0cd204a9e59cdb6f56463b1418b8d59",
"assets/assets/Data/MapChip/%255BA%255DWorld_Forest_Die_pipo.png": "e457126232918b22d4edc3ca7c270306",
"assets/assets/Data/MapChip/%255BA%255DWorld_Forest_pipo.png": "8f8ff3d314f44d06055c2523dd4c9ac2",
"assets/assets/Data/MapChip/%255BA%255DWorld_Grass-Dirt_pipo.png": "c083d6ab36300571f43c0056f283b51c",
"assets/assets/Data/MapChip/%255BA%255DWorld_Grass-Grass_pipo.png": "513088008834f00ee08b09d413b2aa4e",
"assets/assets/Data/MapChip/%255BA%255DWorld_Grass-Road_pipo.png": "1da37916e5701483d702d66dc95e0b53",
"assets/assets/Data/MapChip/%255BA%255DWorld_Grass-Sand_pipo.png": "1342c22062676221c6080bd2562764fd",
"assets/assets/Data/MapChip/%255BA%255DWorld_Grass-Snow_pipo.png": "89956460a122b32c63da074826cbba5d",
"assets/assets/Data/MapChip/%255BA%255DWorld_Grass-Swamp_pipo.png": "6c0ebc77696d895a7e530dcdecdb5cf6",
"assets/assets/Data/MapChip/%255BA%255DWorld_Mountain1-Snow_pipo.png": "bd34dc49963e950e479a88c01baf2a12",
"assets/assets/Data/MapChip/%255BA%255DWorld_Mountain1_pipo.png": "5a648f27b019fce527cad25bc77d153f",
"assets/assets/Data/MapChip/%255BA%255DWorld_Mountain2-Snow_pipo.png": "dc3fcf279d621485de24aa87b5e42834",
"assets/assets/Data/MapChip/%255BA%255DWorld_Mountain2_pipo.png": "4c9400f4bbbc71d8c6d98d1d47276d6b",
"assets/assets/Data/MapChip/%255BA%255DWorld_Sand_Dirt_pipo.png": "39c3292e74471472c263f9ea190f2041",
"assets/assets/Data/MapChip/%255BA%255DWorld_Sea1_pipo.png": "56b4eebdcedeb05b1814c3af0ba78a1b",
"assets/assets/Data/MapChip/%255BA%255DWorld_Sea2_pipo.png": "77664994469be14b759297d434adddb3",
"assets/assets/Data/MapChip/%255BA%255DWorld_Sea3_pipo.png": "901873513727f17b7440a7c06b343827",
"assets/assets/Data/MapChip/%255BA%255DWorld_Sea4_pipo.png": "88f0046f427d98f0e4a7529a220b4bfb",
"assets/assets/Data/MapChip/%255BA%255DWorld_Snow-Dirt_pipo.png": "c5e742b510268625bfd4b6e7300ce26f",
"assets/assets/Data/MapChip/%255BA%255DWorld_Snow_pipo.png": "c6ec44f1402efa1afd682000e22a6fab",
"assets/assets/Data/MapChip/%255BBase%255D640x480_SampleChip_pipo.png": "7cdf8558861edd3b0bedb8150dc97e00",
"assets/assets/Data/MapChip/%255BBase%255D800x600_SampleChip_Takezo.png": "f003ecfe613b20a7f5b74723af6270ed",
"assets/assets/Data/MapChip/%255BBase%255DBaseChip_pipo.png": "f7088461e7fca921d88f0ff5f1cfaae6",
"assets/assets/Data/MapChip/%255BBase%255DWorldMap_pipo.png": "485ac0df790cd2360d875275dcfccf4b",
"assets/assets/Data/MapData/Dungeon.mps": "3bc8a062650ce284cf6cb47770298481",
"assets/assets/Data/MapData/SampleMapA.mps": "c89d1ea9ac2ab4c74a1a927d5e4e8472",
"assets/assets/Data/MapData/SampleMapB.mps": "740cc430498fcce6d1d01aa208a8d32f",
"assets/assets/Data/MapData/TitleMap.mps": "21f6057235faa451ec400d8a1d97656e",
"assets/assets/DebugLog.txt": "1d2ba5e454351964db71bc58f5769fb8",
"assets/assets/Editor.exe": "dad09455fe1039460b4e5d6da2aa2525",
"assets/assets/Editor.ini": "76cb2f7fa2897d6739f20dda50e00beb",
"assets/assets/EditorGraphic.dat": "881b52b3bb599769c2edd987f79e311f",
"assets/assets/Game.exe": "85ba11518891dd904c109880e7406222",
"assets/assets/Game.ini": "7928d1660e59e741ecd2fdad0fdec122",
"assets/assets/GdiPlus.dll": "4721ab485e0c29cd1617a5f296b9cc47",
"assets/assets/GuruGuruSMF4.dll": "528ac7e063e57562df810a91d6b74cb0",
"assets/assets/images/checkbox.bmp": "9dd8fb34457d5d3178508ccb1fc247b5",
"assets/assets/images/checkbox.png": "867f788229c75c7a0d4d5a89f47176dc",
"assets/assets/images/tool_icons.png": "4f40dcbd645762e6ac11bfbbd1e4f884",
"assets/assets/Log.txt": "d8b32aae33b1bd3663c7214875c74127",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "b95f923b2e551eb32a44539818c234f2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b117ab41a44db957be40bf3845e19610",
"/": "b117ab41a44db957be40bf3845e19610",
"main.dart.js": "12c497f88b01714011ef1b744815ad93",
"manifest.json": "cc837b28487d1b65c3f0e7ce4bd26680",
"version.json": "57a7318938166e394a6b1b742fbbf082"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
