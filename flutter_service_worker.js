'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "bb36a2ae1d69efd15f1dce0020791ee4",
".git/config": "d2190a1f934da5dda15b404a6d67e685",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "8e6b0fabf78f526eacee256c215d829e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "8360f810606718eb1a7c623ca052dbe6",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "44e62fc9f0e9a1bbdcaa1e9d0ebdf558",
".git/logs/refs/heads/main": "44e62fc9f0e9a1bbdcaa1e9d0ebdf558",
".git/logs/refs/remotes/origin/main": "b4b3e8cb472aa1cc4a5339f8c8b24d52",
".git/objects/00/62d916a5490cfcf371d1cbca4ffa836e62d007": "164b41234212978bd4188a1c6eabbdf4",
".git/objects/00/76ec77c3fbf65a897df3de20ba6de77796d009": "7d9c1ee71b7e3422040996a7bcb049ff",
".git/objects/01/7a40ba3fcad0ae183792630655f2e864201f78": "781aeee761714d0f40b99406b1045d84",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/03/0c03403428f00abf5ffbe8a8ede6bf6007e723": "02bb1ed1eeaa785cdb19f6602694bb4d",
".git/objects/03/5919c882d9627e62dd61992df37c1f27e9b5c5": "9bd74f8293b1eea089396c4704e0e18f",
".git/objects/04/8e1cfb7937a17007d77b122f836f9dba547246": "8891e3ffa460f6533629867b55b21a74",
".git/objects/05/39ca1f712a07475682c3cb063a17365a2b5721": "39bca0f69604eee338b4ebf47013bef3",
".git/objects/05/98ae0bcfea136917fba57af7a3244a609a8621": "5080ba2c8387d783f90d25a4ab51bfe6",
".git/objects/06/1b01d2663b328421967c819401674c0cbfb988": "f1c52feac454939dbef834c9a92f6961",
".git/objects/06/ba091a1ec2e362e0daad750ade60b66fb66cbc": "de586c77871ddc76a8a6510b34d9aed6",
".git/objects/06/e1b45b00b274881d8e8bd055d8029f0a2ab900": "768ed1342bd5e78f2f740c105b71adb1",
".git/objects/07/15d0fe51ef015830ed6641c7a8e67e254e052d": "e24d70d0103438b72cb357f198c0ca37",
".git/objects/07/30a2e24b04f8d266c2c9864c2b8438e5ff53da": "c70391e7cc7924173e21529a757b1c43",
".git/objects/07/3ff61ec9a21d718cab0a5c3963c2475a3377a3": "0573d7079f52a2089e8412952dad6da6",
".git/objects/08/6a1e03b1ad95d643e61bbcf650a3a39b667d97": "67420f55761a4deeaf34f40580c8a9bb",
".git/objects/09/5f6909fb30be05eb88cc39a9a292a3fa523c2f": "dccdaec7a6a623218cf6018564d5e1cc",
".git/objects/09/b78fd567899f7dfe910640ad3c3b8c4f4d5e96": "b6f5e21c2cc4a22d4175c79e2c36dbe5",
".git/objects/09/ccdb9bbcdaedd749f394f987d9095c70ac83a2": "fd1274f32841eac1a3a09fddf558d69e",
".git/objects/0a/64058b2af1e866760cc5f0dab5f62d5458ca59": "f7f53b0040a0e7b48e2e34f4c1c4a393",
".git/objects/0a/736da746b3f39e4f904da2d49c196f2a947bc4": "0e79b9ebd1ebde93d00e4a425e214933",
".git/objects/0c/883859c98d1b9881ec5999d19102aecf90d61f": "411b05c86e1ccd2284395a44464865c8",
".git/objects/0c/c11d2c756e9ddf387001ed539d604b940c1a74": "6ab16a7f74ceb5d14b6031db96c0f483",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0e/c3a709acd4ad1e4b7b4c958c58abc10bc4033b": "5821928b0e8c602b45d0466f9edae89a",
".git/objects/0f/72cc808bc1d89eebc4f70fa82a64ac2b3ceb2c": "cab3ba22ad01f199f0b7459496283deb",
".git/objects/10/ae95f207dc1acede0c8bd4fdc0e6f62cc8c508": "2e79753c8397011e46538e8b0989ea36",
".git/objects/11/2db608349228d645657c13d106a6293c3b1c1d": "0a48ba80cb7f692ce167408ba29d90cb",
".git/objects/11/324433190f64ea6a258b3bbac551b0263e53e8": "03381826ece00340daebfa99193ff753",
".git/objects/13/fcf191a76d9fffb2c6d5e7f91833d73bca63f0": "93f23422d79183901e979c00c5befc27",
".git/objects/17/5251b8165e16450cef34aecb7edb89fe822b2c": "1b2f84801aa2c64165c90b2f5f35cf60",
".git/objects/18/817ca7d0837ea328b7acfbdbadf7a1b95dcfe1": "b508980cef18cc1952bb830b35cc9ff9",
".git/objects/19/1c23c29f9388fab4bf9e45a79aa4c9bb3aac73": "8a66180980caef493314939399a98b51",
".git/objects/19/4ff9f0fa764329d7dac57d9cf10a45f84d78d0": "56d9c87d10fc843fc48fb8a21a917aad",
".git/objects/19/caae1f63293a9998fc7038da80f698f6f09f68": "61a7c08464d028763604c51d0d093d7c",
".git/objects/1b/f7a23f8df5bbfdb227c8c181bb7a29c2f3938b": "ba7c11ebbcd35ea11bf2a164bab721a9",
".git/objects/1d/bcb2daae864f533717b1c62416d7928e62e884": "a51da8cf15ef9767b89949c24c3bfa7f",
".git/objects/1e/cb93ba6c0b0f46f6fe4954a49d0d12acb8e50b": "ad54d6d4790c97b829c0209edf1a6d18",
".git/objects/1e/da1a136b832b57241109bd7686745cd1df4947": "d4b0e1f162f56cc261fecb2d019bc428",
".git/objects/1e/eeb2a20006c6162e3a139bc00d16914a855b8c": "dd2441cde7e74ffd7e42f8ded8c39f71",
".git/objects/21/dd5b6dbba2f80d996ccd4e334d4c13a32f818c": "6c688981ffda08657d3fc90cfbdc60f6",
".git/objects/22/2cf5e3ed7b418c69f69bed81774d6ae72cddbb": "e236e5767c508b4d44ea9434666c2f6e",
".git/objects/24/9501a17bb7a12bff9bd840000bf2e5ebc37b0f": "13c0be461b8551ddc241f7bc4b57d74a",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/24/dd88aa3e7bb1a04eb5f3a4954af914ca8b6138": "2dcdb521aa688038deef5d5c3047d0e1",
".git/objects/26/b01070ff3d0b1ff688fff84bcee70d55df5fd8": "d0abf27cdfb683f3404ca53ba23c5e76",
".git/objects/27/8f22196bdcfb93b38af46692be75e2de4305d7": "0dae2ec0f6ccb83969c0b23815f80639",
".git/objects/2a/a6cd2ccd258bd9e5ed631c4409cf78ea88bf00": "3be450ef271789f9ea640dcaa7700a98",
".git/objects/2b/0183a253c3bd8694cab164f1fe862929995ed9": "a8fbd1f0a585c35aac20accf9a5de36f",
".git/objects/2b/2d98e22b9c21bb45b211b923366b8d2f9a51dd": "da57ba59db9c64e0b21f4770a014ac75",
".git/objects/2c/794b929f9a245dd20b9da321365877eefe6dce": "2c98090e038d6ff9b616dd45d1625ff8",
".git/objects/2c/973c1eaee8d53853c54d78909a605057c75ea6": "f99a1bd0e2908b97586cfc4ff5cacdda",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2d/fd675da2a320174f35bcb62e4c317477bfe564": "a6fec5a7d31f9222e5897b1af080b47f",
".git/objects/2e/8cce5b654feb793d582d19900a5a8fcb4295e9": "4db1caea1bbbc33946ee7bcbfa2bfa2f",
".git/objects/2f/841e6777abe0c88962ba5c23d07e64041fd86f": "39ba403bf3479427dd2a5300c0646698",
".git/objects/34/ecf8eb0a660734a53d413c5bb42b36e32a048d": "bc226efc1a319cbb956247df34c7c292",
".git/objects/35/7dd17d0b1372363cd622c140d7635e66d63781": "a44a11ccac399666f45d3047c3edcf0d",
".git/objects/35/abf790afff09d2fde48351be2ccb319d27c5ca": "3175f80f088686e91e98ff3af6f3f539",
".git/objects/37/1c50333886cbddce2226d493df050846af36b1": "9d437479be66839c61a4038077ba3311",
".git/objects/38/1311bdd6608583bf3fdcddedcd1ee0c3dc4b21": "4058e022d87736f0c8d8bee4ac98a914",
".git/objects/38/59909aa7063bebd4267b3f3b0fb8ba4ebce0ce": "cf809d35d1674cf86916213357f89763",
".git/objects/38/94f31e047cc4c80925419f3e48d076f5984f51": "4a6df9c19b67efa2a88cefb8b5f432e2",
".git/objects/39/f02e35977690e1f4f1ed6522b3cf863fc59a71": "c8bc0d1facc72f54ff3f97a8326aaffe",
".git/objects/3a/2ebb44beeb70dbe2351ce0a7b444cf4b467912": "02c3452371bbdab16ece22c2d123d6a2",
".git/objects/3a/be811104aa295c5a789741fd371602ef90a0b0": "4d4bb1b3650f7490eef1508c49182f1f",
".git/objects/3b/6fdb66b017476f2f89b5d51b6b3d657b4c8cd3": "d0dd305d4e70ed9db070e27462b5e1de",
".git/objects/3c/ac42b46d0813c96150efedb739cbfc236ca7e9": "1bc1e036f154252dd9c7c5fdc08e8e55",
".git/objects/3c/b14549b1ed6b86617787b998d8c9399f2e93a4": "0ce8f09f9653f1c1d98c0f9e16e89c6a",
".git/objects/3f/074fabbda2617e70988e1ac82c0a0024a0acfb": "34c7e5bdaf7c87cb09f98b78b96e478e",
".git/objects/3f/e90db3bec997b22f092cae07df760fc83e4b45": "4be4832402948480623942896d4f4186",
".git/objects/40/8ececba5a49446a2312a3f5ecd486df7386ab6": "1bb0026a664caacd37ce65ea55680a12",
".git/objects/42/6ac409ca6cc141bbe9fe3762ba90b6a52f66c7": "c4a06277f81afdad8ecd748f4059069f",
".git/objects/43/27f4bfc9fdd9c09fb5d196abe243c09625d4a4": "6d3c634506b4957a4be961175e94dd77",
".git/objects/43/77cefdb3efb27f38ed905e535245394fb52c05": "117e8ab4ea4e45e70e9569681e392ee0",
".git/objects/45/19080b109059dd3ac836d79708adfb47e6825a": "8bb1a91f5187070f6dc2f95105369353",
".git/objects/45/a867b1acdb6a9d09a1cf7b16daf8883e49a9a5": "9f1659c3264a8e59fadc40ae490a92f9",
".git/objects/45/adfba768e51fc448e9a4ab30d7ddc465a39980": "14e02ebb69cb7e1739581351dd44b87e",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/5176319ce04e555d2c202f5f554e6e4cbda518": "c5556fa95357209db2b5611c2c701535",
".git/objects/48/e926796b14ca95a1d6738e60d66a1584bf6e9d": "710695e4190ab58f8499d31dc44cc0d4",
".git/objects/49/0124602a0a0f9f1e1c76a1e1820f5c6b429ce5": "ec41e2f000da7700cc4b4ee168ee78b4",
".git/objects/4a/5fe0e9564a5d7a414f031d1b7f31caeb75e634": "875fc8fd71ad38fe94a23d8c423d589c",
".git/objects/4b/3411e11235a6f69c3d1774d33ced7635acdd91": "622b19d8929725c94ea20c244ceeda2a",
".git/objects/4b/501132b8917692ae6b4b35f4d3dbafb3b3a3a2": "985e7b2f91a7af3c03e31b676488258b",
".git/objects/4b/7801ab505b2de93b705221651ba301e7c31957": "40293460eed5ae358ad5857d0a6a9ed1",
".git/objects/4b/7a27c6a3da5f9205445c4a4a643367f4e93a60": "183fd66c9741472d22a46bd2aea886a5",
".git/objects/4b/d8fcfba3332d4825c961c76d3fe162e5f391b6": "c376c1f4c52f9dfc0542dbef1d18ce6c",
".git/objects/4c/b344add8fc8a7f967c327052cb90d82e8f9c61": "36d3a44e0409edc4d75c70fe53076c71",
".git/objects/4e/284bdc2abd2eafaecdb4e92d0763f0b833f022": "a191137ad4ca2d7e10eeef1478039e61",
".git/objects/4e/78146240ba51ed2c6b4a09e2579572dad61aaa": "a88dfb8176cf7f0660ecc9673657e0df",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/50/2194a4b03c7342a48066eca1e8e54a439c4cb4": "b7173b0eaa56aac351c02fa758108e1e",
".git/objects/51/f3cf91af1adedf63e1ef9ce315270fbb3f803e": "bdcfe5f674b2459a49ed2a58e03a7934",
".git/objects/52/d516bfa7b664f2892f9ae45723ea4cb8e81e68": "cbe61de12863147cf91c91c8cfa641ab",
".git/objects/54/81c2926fc9bc6c6a6eb15ddd679d2d2f14165e": "8f42840fa6e96fc4dc96d51aa3942fd5",
".git/objects/55/7dbff5e2de9ef67de9ba45cf1d19b430936326": "08d06fe9150db9bded7463051937e827",
".git/objects/55/bdf3ba5bade83934afe3a64f1dd6b0e567fc82": "c892e88f5b40601f9fc68eaaaa407509",
".git/objects/57/d68aef44d525328540b71b09ac7a778f673c98": "bd7529c6ee578d95970bbf9c5c2c98df",
".git/objects/58/ba80014afa1a012102e2ca9e7a946b94ced1bb": "f6850ac57b694fc5f954b6ebdd7640a0",
".git/objects/59/d409491f1e0eda5a6cb7c5a3b00841aacad672": "5e9a9143c9d32060a7d35a5edebf9724",
".git/objects/5a/67527c33610ef34158c754bebf0a7876e71485": "510950d47cd9a9a8d6f446ebae2fbfa6",
".git/objects/5b/4c97d5a5339dabb577fe792b08bea00ba471ea": "eb481de7ef4deacde675f1af327bae93",
".git/objects/5b/53b324ee7a88e7a49e4b3fb0f2c0fc33768fd7": "ec7d98390167d2d4d285b4b05fa458ab",
".git/objects/5b/ee8a250e3720279dc9018cd7212e4a29c5d348": "b7599a1d6e43b967fb52da8b3b041dc4",
".git/objects/5c/30fbfe6c2540b703612e74eb482f0cd579556b": "27b34c3c7305751f77008fe16eb02258",
".git/objects/5d/4c9542744d6b6a43984297f59bf5eb654faadd": "cf0b57b8a11b78041bfd4ccd5ebebfa7",
".git/objects/5d/6bb3082e696aa9831f99ae0bf5ef8b7dc8df9c": "6e5d2faee1576be564c44e2de4cae138",
".git/objects/5d/c8e97b2ee6287ab712097d674a5f9af53f5909": "09b0f99360de4718b0c07d05b8743073",
".git/objects/5e/86fcf0a48e68a882f149617d4b4a3875d23045": "192c4673e08ebac9d7e47cf73a29e30d",
".git/objects/5f/6d8a5e87c61c9f4131934278e8f9ba35c33367": "dadc07841f1cfa59203936fc01f85d07",
".git/objects/60/505cf0097cdfbe857348d0e0e19d15617eb19a": "cc630b6ea8134466e6a9a192f54a8af1",
".git/objects/60/7cf150e4ee1ce5eeb6ffb30f375f80ec20cf23": "a742b21e3526181293ed8c46894bb497",
".git/objects/60/ae953019c700384b59274b2701e4720ae937b7": "1b64aed9f5dca7c747424220de7db21e",
".git/objects/62/33bfa4d863eb1bbd0f37ea561df2ad1ba424e7": "726e33128e1c05d6946eb468dc3d8753",
".git/objects/62/5cff30f5839068415a2abd6029e8027d27582c": "8cae9bcdfeb9c0fa5aa689d9d4b7572a",
".git/objects/65/03b2d1c59e3366d2184d5ad2dc8d81eb9bf4d8": "60d89ad89ae9c7d95c73503d35ca2261",
".git/objects/66/f069a14195cec1610f54c63b2a231a91430272": "90ac5961770f31a2d7bed913c95db41a",
".git/objects/68/82f37ddc696363f9a2a95547e706c3e6f50c62": "128400c67c45d582e21c5dc36827333b",
".git/objects/69/1f252b31c75b304d816fe8fec29cbe08be3897": "7086cc0b5bbc53469f1061e2833c83fc",
".git/objects/69/736a9e4cac34b5da1363997af8c0c9632621bd": "5c49996e79a280c18461547e9cb07f1a",
".git/objects/6b/01d32e35abb69e2a9fa3ac625ca5507709c9d4": "30b956279daf0d34476453f6d1e546c0",
".git/objects/6d/c50a0b09a28215053d8c7b8c0da77b2179f16d": "e3ffde252ce197ffccc0a7c291672b16",
".git/objects/6d/ff87a6740e4a04f183e2bc44fbcebb9a7a62ad": "8c12c2216cf694eeee030f1b7bd87cc6",
".git/objects/6e/2197f73ea40798b24abab0190b32f3be0fda86": "eeded92d758f81ef101d0b30f04127fa",
".git/objects/6e/aaa8224bc3396c3972afbd6bbe64ead95f22e6": "91f447b19da4f988002c9fc4a34d3212",
".git/objects/6e/f7f5463d2913e1e311ce23c6cbafa6b39f2f6f": "e949bde2b45b5218713aca79136b91d7",
".git/objects/6e/ffb14c68ea79793c3bb5b4ed25801086f3679f": "f299ccf430cea67eadb2e57038f94623",
".git/objects/6f/0e7609609a4c2b08efbb86fd686566b1f2d0af": "239ee4a93d20cba452fa7b9b5276684f",
".git/objects/70/50afea9b9d1b2b33e0d749c1d24ab17151b9f0": "6657419b3412404eff0b4654b738bbbd",
".git/objects/73/53f5922b631d1cfe70e8645c16ff828a9c8ce3": "58ab9517651eacdaf0b9751bbdf03e07",
".git/objects/74/87560b7eb611f6f5f2474514e8098e550b4e6c": "1448bc02e235ecb76346888deb7dd3dd",
".git/objects/74/8d07dd3349d621e0ce90858046862699fd771a": "b61c772bb6e98452692a5165ed88d8fd",
".git/objects/74/efbaf5b933d42d08282932b728f57759380578": "470cd1ced1d32153f4200bcac312e34a",
".git/objects/75/1625e95d7a13c4bdf0d82e0612e9bbe88aaf6f": "eff8e5dfa56e47848d424d505f1ff2ab",
".git/objects/75/41d51fad01fef3bea85ba5a9fc0bf0f69c5923": "a78450ff8757716fe3c30fb0ffd1a610",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/77/21112d2aa957be8e86ffa98fab752411c9c3a7": "6a29c7d87c60f0e395a9f803e6371d42",
".git/objects/77/8b947d6fd8d9a590a5a0cfc05eae1c12b41382": "a7aaed89dd203558216f943ab768b372",
".git/objects/77/d3b73080e1bb6ef5b4e03a62b1087ada4b85cd": "bfa63e0ff144c607c37a71a1a7c29a9b",
".git/objects/77/dcdede1606a9b137deaf2573f779ed8cb4a48f": "8bb1b9e329f3a48d75f032623900dfd2",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/d79359d5293ce38134206736c4f82cfe658d27": "b8ded98b5de3f20c61d58daaf897e3d9",
".git/objects/7c/c317872f34d04aeb138cdb5f0ef76439196dca": "e7c070bbd53678bdb921c8f9584561ba",
".git/objects/7d/961423465a0f5735c86e14ce1477dc9630f20f": "bfdae72ff8c4041b9474637fafc83bbe",
".git/objects/7e/22cd6f2733f6f0a6c5dfba5276d653d139404d": "c8471ac6f17a3f69c50829bd3e0dff53",
".git/objects/7e/ae14895bdc7fb5e5896cbff931c4c4ea5d3d78": "f2a2f0a9d678e71b92c7e3f40000f2e0",
".git/objects/7e/b87fd1b97e354c88ecc3b8f31f390f6df423c8": "cc054994b039c8ce64b52350677c572e",
".git/objects/7e/c9fc501fd1c9ba384f7c741d05f3597c2fb8f8": "541f822399b34bb8908029464a1ed80a",
".git/objects/7f/3e2098f4e0ed6f47b318d321ce6304909d7eb7": "d88d1fc4fb26256be68d711de3fa70a9",
".git/objects/7f/6c7e345d8b177c2daa34061229d77df9e78d94": "4fe6528ab7c5af4695a441275b405b8f",
".git/objects/80/b97e9e50b8440335eb86080968569a01c1cb32": "8dd03fddfaf5dfab3dfd54e292f079a5",
".git/objects/81/35bab6b9aec8fe359cc5541857225bd74d74ab": "d87f675d422fc846659fcc4e094a489b",
".git/objects/81/39c5d074e4ea3d72e9f242b66514c8102c8b0a": "9432b04b5dbf9238649902b34c437057",
".git/objects/83/c181df94b3b9c21ae1c0b34be9c93a9b27bbb5": "7f6c1e0d99ad759649df998d670057f9",
".git/objects/84/0455ba1c34c5e7a8f2971410c807105288d83f": "dd950d58b1e3920f4bb03f50d289153d",
".git/objects/84/4eee1806c231a246ad4615cc47d4028d5a8532": "07c745527f3dade127b9fb789aa3ef7d",
".git/objects/86/abd02ff5320bdd036dc262179b2a50b902e901": "dc66c1a744546ad173bfbe6648e56d52",
".git/objects/87/989f58df03658142d388b8a275c5aa69aa36bc": "fcc921e8fd6f92d44481d18a806b2fa0",
".git/objects/88/30eb89877786196221fb20d59240a6caf9fb9f": "bebabc8c9c4eabad06b7fe34dffad473",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/5d5aaf47d9ad6c92f2e13662c0c9eee7e58f94": "a5184de743d1e942c94cd56fca33e209",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/d6214be43bdef4cfba4fc0397ad69a05913a6f": "eb64e5816719a55b6e0722ea79afa59b",
".git/objects/8d/7cc74897d3f89515dff079c0da69bcc92d074c": "1a02f1ce5ffe4f96fca7d78ea892f9a1",
".git/objects/8d/b5ae44c9bffa4e838aeb5a149d2cdd696ae457": "8a35983e194b0bb8019659add4d1b671",
".git/objects/8d/f38d19dfd5bbcf02092b9e30e4d90bdb267740": "5bf25418b5fa832f8dacd35e9536561d",
".git/objects/8e/6044a79fd4522c03de227fd38a43b41a2a8566": "366467ec6ed4f37e272e7e61d26e855e",
".git/objects/8e/7ffdbb8909e43bab87ffc78f9cbb1be2ae53b4": "c3d606b2166b2998b3ef51e4b91f963f",
".git/objects/8e/8040a367830dc2cb5de08791259a771a248619": "f3fdb2a00c90a04a2ae2579929b5ed89",
".git/objects/8e/86d6287a44444f90c3f3dc360a24601d0f174e": "5d6b171edf75536e8c4908f52e814412",
".git/objects/8e/fc626c4dab693d3034c3467f53db9d32cc20e8": "db6f7751e90726f1a08e2561a51a7bc2",
".git/objects/8f/48c10bb2e13a09a15a3311828b8a208743ee71": "405f2bc242d068bd1e759b3f3aeb962d",
".git/objects/90/895d4b8da0ff646dcca50ba034a5dd162207cd": "8fe5ced8bc842746bad4d8bcb70b34c4",
".git/objects/91/e8a27845393c3b29c76e7f86d7f990757bde6c": "7c6f261d98d24bec20a50968a69e1b06",
".git/objects/98/418c933842f3180bc58c7680b84d379c928027": "c9c811aae8834e36e2d6ec5965718420",
".git/objects/98/d23d8d7dd6551891fa2267a640c8e5f819ff41": "a05a93a69fe18737baa5693b383b763f",
".git/objects/9a/71e2cb1255b9213ef25a8f0900312f92a29ef9": "f803e2e35ab0b2377859050ee5ec2682",
".git/objects/9a/ab1894e9a012d732936256dfdf88a66c4c58c9": "4d92cf0ed643aa1a7b0752c42d94d125",
".git/objects/9a/b6161551400da1df18e2a43533a0ca151e0279": "23067628af2a3777de2eed726ff42800",
".git/objects/9d/2e065bb54e525c548dda8e47fc43d064e83ef0": "c4278bb9ea4b18904afb87595e2f3b54",
".git/objects/9d/ce1b51f5afab632c0cc6fe334612cd7b4a8510": "e64e282dd4380918ca017c5274aaad5e",
".git/objects/9e/52ec0ead5dc4dfe551c4350095a918b6c2043d": "e8ad1255873758f1c3b3bf90f7a8dd2f",
".git/objects/9f/d91a1fa2e8faa6bec018b296a85f510041321f": "789371c78b408fc1889527cab8ae5541",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/8147ad08748f1078a0d909e1b96629dd7c3c81": "de46e8c922a78640acb6066b5753895d",
".git/objects/a1/90e3a98a8c17f57fba2aaa73d93f07aa6d8c0c": "8fe4026546c89db1e77f6260ecbc742c",
".git/objects/a3/3f2808eb18492cd32f838a3cc3be72e5a83569": "aef0aaedaf526f6cfc8fd18f02a8b1c7",
".git/objects/a3/52860aa80addb8b39ad69e014ae7b08bc852f3": "ad9c5d1f9b44b2c1971eacd2ac711087",
".git/objects/a3/ce05b648c3da4667c4f902479d15dff1240325": "e48c519281d3d562c2765a93732b821f",
".git/objects/a4/f550f2417fd0662b0a34b96ec700519f10569c": "5d66869c74e7b08fea9ddeb98c04bcef",
".git/objects/a7/0d740e39517f4d682fd5a509e2d00a5e739a90": "03764ce8d884fc93b0d7e1db64bb27c2",
".git/objects/a7/f371c1a1b1053da76e789f4f50361241d4d3df": "998943752e02bac21194cfa8e35995ff",
".git/objects/a8/1b6aa102b13ac87d25984439deac92b5ce71b4": "a5f24ad2492686cb3df21f9cd9e59232",
".git/objects/a8/4668b84e1cca72880efe4ae928999d71d80c27": "baa98ea95cc3bd027e9accd09b444e44",
".git/objects/a9/12a49e93dc92af27764c41abaecefa35f89669": "271215f89728c3156bb119e55e370c2c",
".git/objects/aa/3414cdf52963d19fd0cd892086a466f3bea9b0": "d00dbadb898a6e08a2e24070374a5e63",
".git/objects/aa/4098fb69ace9d9da9a450f8e463e522c1f9d54": "01ccf17ebc74eb154061bcc2abbc90aa",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/48c75df148431f0c691730fc4c1dcfe31d4a1a": "ff772d6a5a350bf75ad3eae31453111d",
".git/objects/ab/74dd0dbc2c29d108421736306a41b5925636b6": "68875b3b24b05d04da01464687fc2cdc",
".git/objects/ab/d63f62332223ea5452cb10242baaff3f1ec80b": "4d060d6ac477319f6439be2eeb920a32",
".git/objects/ad/1dc4740502b073db1ce51a723da611e8edd50a": "9b21b87bbf94cc1e443398d07cbc25df",
".git/objects/ad/81df635ad6b64e7944b1fc1ab4eae1c9c2bd6b": "cdd446364b91e487f20b416e35ec5a7f",
".git/objects/ae/1e570d6a1927788ad944457c71e10b13513080": "fde3cafee84c05c40f89759f52aae0b3",
".git/objects/ae/f9d9b9306b05a448114769a5ed3bd511b78d7c": "53c07e96b682cee1157089e4183e8f13",
".git/objects/b0/87d3127aad6251c2a7bc22810ff28973b6c93f": "4bbe9e2f935900d22a00108d9c779f23",
".git/objects/b3/d4152b6196ad80658690c14fa9050e65a726f4": "156c465fdd3e92acb0da9390c52a6560",
".git/objects/b4/f9bc8a51e6c3721333dedb2c33afd8e2ae18af": "409b82373d491f6943caafb1f27681b1",
".git/objects/b5/0862b49e4bffb6e3967f596a65c81729a93c80": "759f162bd88cbf3ade56dadce0842589",
".git/objects/b5/98a01730fa64bc50093d3b20623be8fe3aa777": "902f8fcfc360d32173d645cfa2f750b9",
".git/objects/b5/f899f4dbb5841f0727b38fd07433a0c92e5faf": "0bc4bd34d5f9f6ed489c6b703bec2d90",
".git/objects/b6/26fea39b05172bbe0f51715249159d8fe95d53": "09d392d6602dc9af8143c4dafb911965",
".git/objects/b6/7eafb6b218eff2fda59b3127cd48aef59f0a7e": "22ee5052388a634916209dc4e68b3e50",
".git/objects/b6/acbb397e7184511ca405021accf204bf8418b9": "0e5c39f151dc83689d99ced71b10ad7a",
".git/objects/b6/fc988109fc3f57a8b8051250a38db5505ccb25": "fe99e867bd5ef4b0c39e7852db66d94a",
".git/objects/b7/18610c39c8058bf2af80609df3cdf5bf57dce2": "7351928d99960fb32bede07943d845fd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/227e9180e42e24e7836f06617df37e4ed701b6": "6bc16cd2445b46762013a7a67e5d8a2b",
".git/objects/b8/38cef77f6a5f1ba1322132bb3a47fdfd868c47": "5364e86a7d9f7f8c76ff72694feb0769",
".git/objects/b8/59e83fbae088cabf33471bb6737064525178cd": "432dfdc724212fa49c57638f73789c7e",
".git/objects/b8/5a2f1ee73fd0e54ed649e321990c68e7123e02": "0dcf87801dabca9340fc39993c0f2d0c",
".git/objects/b8/ba98f34232f20c490ef24a7b9ba2107d7f95c8": "eb169a968833384853311239df5568af",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/64ea9e575a19b50e42aba508f9a0e3c893cb91": "0752e6eb5d5d6dc5e83f4f6916389ca5",
".git/objects/bb/91842be820384e46241c038561403ab10ff389": "e933b8423b5639c5c490397043e994aa",
".git/objects/bc/016f5cb8d2c239d14f19e708486bd09d8150a1": "04ec45f782491afe0311995fa7a638c9",
".git/objects/bc/fb51b386bb313e7b363cbf11f04e45c63ca7bf": "116984280aed181354fcc047aa2553a9",
".git/objects/bd/26e60e76b3998844db9678ffcb7137bf3e3aff": "44ed845cf8a0ca3e69cdf5697a29491a",
".git/objects/c0/6751586d1d5a604a63f1054155bb24ccfd6b39": "2fcb4d03c97689725279e60f0bb1061d",
".git/objects/c1/5ae4f4d7ff8739fcef5654010d7136c2ba9be5": "ca06940d4c25520066af82f05ceaeaa1",
".git/objects/c4/48273a8db8c14b23bded7c88175f2d3d7fbe72": "de73cde6b2efb25cbb76fd9954325bec",
".git/objects/c6/72ae38e85a57de4c0c1f9db57af93e5e1ed130": "f5f82ef0d7587d75dfe6f8d1b082875d",
".git/objects/c6/eb0092228d07b4b71e6428cd81c756db3c04a1": "9bb8871cd639aafbe8e132e1d5a0ce57",
".git/objects/c7/07349b4da174e4512e57bf7dd78134d9ea5b99": "88fb6c622bd996384e9dc0e08f93fdc4",
".git/objects/c8/8a7865e696e55df8cc052d53980e24d57af2b3": "879674017eadab4a47ef098b7ce66e74",
".git/objects/c8/d78305079264574661e39ce48b834a092009d3": "450ed1b1e0e485ed27dd071ce097123c",
".git/objects/c9/ed384cf6f03d2cd89397d5f95073838178f877": "547f0afd80629ea3db9b6cde15fda78b",
".git/objects/ca/5e5d54a2de9511e6ee3cf24291284a07b727fc": "583d4b6af17b5bc1d380b6ed2fb5ad14",
".git/objects/ca/fb273ce32755a26d06d6be3de2207f39b8d2ca": "83870929dc625f939ca0e0ccd2516ba3",
".git/objects/cb/8b4dbd6379fbdedc677a709aa0c36f2bc1444f": "5535fe7bbf8b21de8db69338419cb4b9",
".git/objects/cb/f15765cf9733aeb154a1cf64e1cf9e2ba73913": "fa1bb21f392182935fdefff49d122ac8",
".git/objects/cb/feb50c34822fb961a6a303c207870094ebb70f": "a7a5c617e30748d051a6bfd23565b34e",
".git/objects/cc/2c158b6b13ce5f8b53a1644febdf162e0cdfd9": "e6654af6aa354f1bd72e9ba9bb0511c5",
".git/objects/cc/9492dd3df748862e30e4e1591338406657577d": "546d4630a14cb0b20205d2dcbcaa2b06",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d0/b16c3333e5324c624749ae70b105bed186cb03": "447a2c9d47c84e29b8320d9e8f969ba6",
".git/objects/d2/70c1071f06f54d33867aa94a226eb35bcdfa69": "7014b5a2da41fb8b40db721a54b72e87",
".git/objects/d3/6949c54813165fa87ab29f39f0f9925524da54": "1bb6c1e3a2891c5adc1a4d0f8a031d2e",
".git/objects/d4/082e4d741534e785be6ec683ac733ce5fe5696": "c690ae9cd5593f581c7338b316ca553e",
".git/objects/d4/fe93689467131ceb241bce3d467aa01bd85b49": "33b3e7de9dbe9568fd6eaa725f07bbd7",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/cafa0c7d88d5159d8c52aa1f8a611d348d1734": "b7b19f4295d4a6781a0fcaf08e71513a",
".git/objects/da/9b63d5ff1db27dbb58ce1cf1aa47b25ec4bc42": "2f85a25f76d83d3cc63d71fb130693ed",
".git/objects/dc/08f5227aea2c09ebd870b2ae8ff4e4bd445e82": "01aae11048a2f875e2caee842fdd1904",
".git/objects/dc/eb9284214cc2f32594853d910bac5dd1383e69": "8299399ee98eed0096dde04bf89f4728",
".git/objects/dd/3be6d43e647c92410c24b23fe07f792c341c08": "06fe2e8d04afc424be334c3a25a5d13f",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/db5fc82d4aed6c40172ee7cadff90e146e3a2f": "49db13f07ef1763998046dc8d72008ea",
".git/objects/df/45da81a6984923ad96d737bff01836c5e2c16f": "9ca0ed8ead4e4d913bd8a1cc266e761b",
".git/objects/df/658b2a87ad8f11783fc5a8151d723038ec2ab7": "48c3f3c4120df79681f37d2d4678c33b",
".git/objects/df/a9aa6c65a31de41758f0c89caa64c6b13106bd": "aa10199a2f1854e8eeb106abde8f0916",
".git/objects/e2/225c72b8cab3b14febce13b548a96380018e22": "97630e10c0eb3a1df9898b443ff4cdce",
".git/objects/e2/ce3948b6779b01490644fd45455314eb7780e9": "f231c102d2df13218f18e3d99ba229ec",
".git/objects/e2/e456d0da7183c4a7f57e3f95d7f7cc9bea5209": "48e15589d26423a05e6fcd28b2528aaa",
".git/objects/e3/ca23cce339510b97cf49b4e3aa466bdc167cbe": "e5b4457389072079d953ba0cadc4e2f6",
".git/objects/e3/feb84c15a982bc70dd4cee84414984b6c30d25": "6236043c46baea028b1e806e3fe6598c",
".git/objects/e4/3a6dea1069074ef46010a8414226874e457001": "d11e39115465bdcad93a9a17eedb5ab0",
".git/objects/e4/9a056d5fa560c9b7615f66e1102430819421dc": "a04ffc1b3462ed7bd7a45b45947eca10",
".git/objects/e4/c5001a2b16fa27287cd34887c39ec7bb077c30": "3604806ee127b38fce36ba8416bcaed4",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/e5a4fb82ad3f9029c6701133140c59f8a44881": "315c05033b0d15fe98f249b5ae0c9bc2",
".git/objects/e9/03fc4e9c26b50ad15d97d80774446858e43970": "e52525f6b99d9125deb47741bb874295",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/039fb48547a6218ab316465f3dc1a7445a5424": "b911acbf48ade9c019a19100537a8dfe",
".git/objects/ed/f05cc72b35a5b6a1f1021448e4ac299cfedec3": "7800a96982c52656faef9ba2579ed864",
".git/objects/ee/75edd0feec330519d2d834e85e13c7a0defc72": "9e36142808fb718201ad0265a6c6911f",
".git/objects/f0/05b1214760e01e24a6259d809bc0a0bb792782": "f30d0821794cd8913b4e1e736ad8f421",
".git/objects/f1/51ec7d08e962530cf18451e1810ee0341d16bc": "7a0ed61bf0b9562b8587405eca6c3245",
".git/objects/f3/0754c03f47b1fcb6ecfc7be6b6463097950bd6": "e24b5b7341257502746b7d95f4aedca2",
".git/objects/f3/f9c0d7b2962d6f97ebed514319a0d74eb59c60": "ece267c37fad98476bfacb7684c3ced1",
".git/objects/f3/fa06530e32bd843cfeb4a3a0beae75e9ea3b43": "a792c91e53067b30530e396a5792f864",
".git/objects/f4/b1e4899543ffdf51b355bc3069a2e7c974f86d": "ea454f216edb927f81de237647687984",
".git/objects/f6/1e95ac69e3f2d7a5d499e6b2f5dfb8e07c14f8": "e46ebda957130797ba379fc6a143fd21",
".git/objects/fa/9cea0594cff6bd207b35c38599c323390b402f": "11b6011cfccc7c27d804db79c822c60f",
".git/objects/fa/c3ffe9eeed218fa936c0a84423af710f391084": "1e1ed55b3adcd1ed5a5bf7e799582d5e",
".git/objects/fe/b24bfbd53b4ca2c706048de5e872df3da9b11f": "04151025acd2ef0173fe5eeda6a0d718",
".git/ORIG_HEAD": "2a9feb1596d23332d0da90cdacafb92c",
".git/refs/heads/main": "2a9feb1596d23332d0da90cdacafb92c",
".git/refs/remotes/origin/main": "2a9feb1596d23332d0da90cdacafb92c",
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
"index.html": "f075d2ba50ca0298c969c5399e51d8f8",
"/": "f075d2ba50ca0298c969c5399e51d8f8",
"main.dart.js": "7cf7b9fbdc3b45ea8d4ef2568c39db02",
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
