function createContent(jsonInfo,id25ru){
// JSON file
const jsonData = jsonInfo;
// console.log(jsonData);

// const coins25ru =[
//   {
//     "img": "./../img/coins/russia/yubilee/25ru/2011/sochi.jpg",
//     "imgrev": "./../img/coins/russia/yubilee/25ru/2011/revers.jpg",
//     "md": "./../img/other/spmd-m.jpg",
//     "text": "Эмблема Игр",
//     "title": "25 рублей 2011",
//     "price": "139",
//     "count": "1",
//     "info": "В наличии",
//     "color": "card__on",
//     "dataseries": "series-5",
//     "datayear": "year-1",
//     "link": "https://cbr.ru/cash_circulation/memorable_coins/coins_base/ShowCoins/?cat_num=5015-0001"
//   },
//   {
//     "img": "./../img/coins/russia/yubilee/25ru/2011/sochicolor.jpg",
//     "imgrev": "./../img/coins/russia/yubilee/25ru/2011/revers.jpg",
//     "md": "./../img/other/spmd-m.jpg",
//     "text": "Эмблема Игр (цветная)",
//     "title": "25 рублей 2011",
//     "price": "890",
//     "count": "0",
//     "info": "Отсутствует",
//     "color": "card__off",
//     "dataseries": "series-5",
//     "datayear": "year-1",
//     "link": "https://cbr.ru/cash_circulation/memorable_coins/coins_base/ShowCoins/?cat_num=5015-0002"
//   },
//   {
//     "img": "./../img/coins/russia/yubilee/25ru/2012/talisman.jpg",
//     "imgrev": "./../img/coins/russia/yubilee/25ru/2012/revers.jpg",
//     "md": "./../img/other/spmd-m.jpg",
//     "text": "Талисманы и Эмблема Игр",
//     "title": "25 рублей 2012",
//     "price": "89",
//     "count": "1",
//     "info": "В наличии",
//     "color": "card__on",
//     "dataseries": "data-series = series-5",
//     "datayear": "data-year = year-2",
//     "link": "https://cbr.ru/cash_circulation/memorable_coins/coins_base/ShowCoins/?cat_num=5015-0003"
//   },
//   {
//     "img": "./../img/coins/russia/yubilee/25ru/2012/talismancolor.jpg",
//     "imgrev": "./../img/coins/russia/yubilee/25ru/2012/revers.jpg",
//     "md": "./../img/other/spmd-m.jpg",
//     "text": "Талисманы и Эмблема Игр (цветная)",
//     "title": "25 рублей 2012",
//     "price": "1240",
//     "count": "0",
//     "info": "Отсутствует",
//     "color": "card__off",
//     "data": "data-absent = absent",
//     "dataseries": "data-series = series-5",
//     "datayear": "data-year = year-2",
//     "link": "https://cbr.ru/cash_circulation/memorable_coins/coins_base/ShowCoins/?cat_num=5015-0004"
//   },
//   {
//     "img": "./../img/coins/russia/yubilee/25ru/2013/sochi.jpg",
//     "imgrev": "./../img/coins/russia/yubilee/25ru/2013/revers.jpg",
//     "md": "./../img/other/spmd-m.jpg",
//     "title": "25 рублей 2013",
//     "text": "Эмблема XXII Олимпийских зимних игр Сочи",
//     "price": "70",
//     "count": "0",
//     "info": "Отсутствует",
//     "color": "card__off",
//     "data": "data-absent = absent",
//     "dataseries": "data-series = series-5",
//     "datayear": "data-year = year-3",
//     "link": "https://cbr.ru/cash_circulation/memorable_coins/coins_base/ShowCoins/?cat_num=5015-0009"
//   },
//   {
//     "img": "./../img/coins/russia/yubilee/25ru/2013/talisman.jpg",
//     "imgrev": "./../img/coins/russia/yubilee/25ru/2013/revers.jpg",
//     "md": "./../img/other/spmd-m.jpg",
//     "title": "25 рублей 2013",
//     "text": "Талисманы и эмблема XXII Олимпийских зимних игр Сочи 2014",
//     "price": "90",
//     "count": "0",
//     "info": "Отсутствует",
//     "color": "card__off",
//     "data": "data-absent = absent",
//     "dataseries": "data-series = series-5",
//     "datayear": "data-year = year-3",
//     "link": "https://cbr.ru/cash_circulation/memorable_coins/coins_base/ShowCoins/?cat_num=5015-0010"
//   },
//   {
//     "img": "./../img/coins/russia/yubilee/25ru/2013/luchik.jpg",
//     "imgrev": "./../img/coins/russia/yubilee/25ru/2013/revers.jpg",
//     "md": "./../img/other/spmd-m.jpg",
//     "title": "25 рублей 2013",
//     "text": "Талисманы и логотип XI Паралимпийских зимних игр Сочи ",
//     "price": "70",
//     "count": "0",
//     "info": "Отсутствует",
//     "color": "card__off",
//     "data": "data-absent = absent",
//     "dataseries": "data-series = series-5",
//     "datayear": "data-year = year-3",
//     "link": "https://cbr.ru/cash_circulation/memorable_coins/coins_base/ShowCoins/?cat_num=5015-0011"
//   },
//   {
//     "img": "./../img/coins/russia/yubilee/25ru/2013/estafeta.jpg",
//     "imgrev": "./../img/coins/russia/yubilee/25ru/2013/revers.jpg",
//     "md": "./../img/other/spmd-m.jpg",
//     "title": "25 рублей 2013",
//     "text": "Эстафета Олимпийского огня Сочи",
//     "price": "70",
//     "count": "0",
//     "info": "Отсутствует",
//     "color": "card__off",
//     "data": "data-absent = absent",
//     "dataseries": "data-series = series-5",
//     "datayear": "data-year = year-3",
//     "link": "https://cbr.ru/cash_circulation/memorable_coins/coins_base/ShowCoins/?cat_num=5015-0007"
//   },
//   {
//     "img": "./../img/coins/russia/yubilee/25ru/2013/estafetacolor.jpg",
//     "imgrev": "./../img/coins/russia/yubilee/25ru/2013/revers.jpg",
//     "md": "./../img/other/spmd-m.jpg",
//     "title": "25 рублей 2013",
//     "text": "Эстафета Олимпийского огня Сочи",
//     "price": "950",
//     "count": "0",
//     "info": "Отсутствует",
//     "color": "card__off",
//     "data": "data-absent = absent",
//     "dataseries": "data-series = series-5",
//     "datayear": "data-year = year-3",
//     "link": "https://cbr.ru/cash_circulation/memorable_coins/coins_base/ShowCoins/?cat_num=5015-0008"
//   },
//   {
//     "img": "./../img/coins/russia/yubilee/25ru/2013/luchik2013.jpg",
//     "imgrev": "./../img/coins/russia/yubilee/25ru/2013/revers13.jpg",
//     "md": "./../img/other/spmd-m.jpg",
//     "title": "25 рублей 2013",
//     "text": "Талисманы и логотип XI Паралимпийских зимних игр Сочи",
//     "price": "70",
//     "count": "0",
//     "info": "Отсутствует",
//     "color": "card__off",
//     "data": "data-absent = absent",
//     "dataseries": "data-series = series-5",
//     "datayear": "data-year = year-3",
//     "link": "https://cbr.ru/cash_circulation/memorable_coins/coins_base/ShowCoins/?cat_num=5015-0005"
//   },
//   {
//     "img": "./../img/coins/russia/yubilee/25ru/2013/luchikcolor.jpg",
//     "imgrev": "./../img/coins/russia/yubilee/25ru/2013/revers13.jpg",
//     "md": "./../img/other/spmd-m.jpg",
//     "title": "25 рублей 2013",
//     "text": "Талисманы и логотип XI Паралимпийских зимних игр Сочи",
//     "price": "950",
//     "count": "0",
//     "info": "Отсутствует",
//     "color": "card__off",
//     "data": "data-absent = absent",
//     "dataseries": "data-series = series-5",
//     "datayear": "data-year = year-3",
//     "link": "https://cbr.ru/cash_circulation/memorable_coins/coins_base/ShowCoins/?cat_num=5015-0006"
//   },
//   {
//     "img": "./../img/coins/russia/yubilee/25ru/2016/worldcup.jpg",
//     "imgrev": "./../img/coins/russia/yubilee/25ru/2016/revers.jpg",
//     "md": "./../img/other/mmd.jpg",
//     "title": "25 рублей 2016",
//     "text": "Чемпионат мира по футболу FIFA 2018 в России",
//     "price": "50",
//     "count": "0",
//     "info": "Отсутствует",
//     "color": "card__off",
//     "data": "data-absent = absent",
//     "dataseries": "data-series = series-4",
//     "datayear": "data-year = year-4",
//     "link": "https://cbr.ru/cash_circulation/memorable_coins/coins_base/ShowCoins/?cat_num=5015-0013"
//   },
//   {
//     "img": "./../img/coins/russia/yubilee/25ru/2016/worldcupcolor.jpg",
//     "imgrev": "./../img/coins/russia/yubilee/25ru/2016/revers.jpg",
//     "md": "./../img/other/mmd.jpg",
//     "title": "25 рублей 2016",
//     "text": "Чемпионат мира по футболу FIFA 2018 в России",
//     "price": "1500",
//     "count": "0",
//     "info": "Отсутствует",
//     "color": "card__off",
//     "data": "data-absent = absent",
//     "dataseries": "data-series = series-4",
//     "datayear": "data-year = year-4",
//     "link": "https://cbr.ru/cash_circulation/memorable_coins/coins_base/ShowCoins/?cat_num=5015-0013"
//   },
//   {
//     "img": "./../img/coins/russia/yubilee/25ru/2017/children.jpg",
//     "imgrev": "./../img/coins/russia/yubilee/25ru/2017/revers.jpg",
//     "md": "./../img/other/mmd.jpg",
//     "title": "25 рублей 2017",
//     "text": "Дари добро детям",
//     "price": "400",
//     "count": "0",
//     "info": "Отсутствует",
//     "color": "card__off",
//     "data": "data-absent = absent",
//     "dataseries": "data-series = series-1",
//     "datayear": "data-year = year-5",
//     "link": "https://cbr.ru/cash_circulation/memorable_coins/coins_base/ShowCoins/?cat_num=5015-0017"
//   },
//   {
//     "img": "./../img/coins/russia/yubilee/25ru/2017/carabin.jpg",
//     "imgrev": "./../img/coins/russia/yubilee/25ru/2017/revers.jpg",
//     "md": "./../img/other/mmd.jpg",
//     "title": "25 рублей 2017",
//     "text": "Чемпионат мира по практической стрельбе из карабина",
//     "price": "5500",
//     "count": "0",
//     "info": "Отсутствует",
//     "color": "card__off",
//     "data": "data-absent = absent",
//     "dataseries": "data-series = series-1",
//     "datayear": "data-year = year-5",
//     "link": "https://cbr.ru/cash_circulation/memorable_coins/coins_base/ShowCoins/?cat_num=5015-0014"
//   },
//   {
//     "img": "./../img/coins/russia/yubilee/25ru/2017/puh.jpg",
//     "imgrev": "./../img/coins/russia/yubilee/25ru/2017/revers.jpg",
//     "md": "./../img/other/mmd.jpg",
//     "title": "25 рублей 2017",
//     "text": "Винни Пух",
//     "price": "2990",
//     "count": "0",
//     "info": "Отсутствует",
//     "color": "card__off",
//     "data": "data-absent = absent",
//     "dataseries": "data-series = series-2",
//     "datayear": "data-year = year-5",
//     "link": "https://cbr.ru/cash_circulation/memorable_coins/coins_base/ShowCoins/?cat_num=5015-0022"
//   },
//   {
//     "img": "./../img/coins/russia/yubilee/25ru/2017/puhcolor.jpg",
//     "imgrev": "./../img/coins/russia/yubilee/25ru/2017/revers.jpg",
//     "md": "./../img/other/mmd.jpg",
//     "title": "25 рублей 2017",
//     "text": "Винни Пух (в специальном исполнении)",
//     "price": "25000",
//     "count": "0",
//     "info": "Отсутствует",
//     "color": "card__off",
//     "data": "data-absent = absent",
//     "dataseries": "data-series = series-2",
//     "datayear": "data-year = year-5",
//     "link": "https://cbr.ru/cash_circulation/memorable_coins/coins_base/ShowCoins/?cat_num=5015-0023"
//   },
//   {
//     "img": "./../img/coins/russia/yubilee/25ru/2017/triwaior.jpg",
//     "imgrev": "./../img/coins/russia/yubilee/25ru/2017/revers.jpg",
//     "md": "./../img/other/mmd.jpg",
//     "title": "25 рублей 2017",
//     "text": "Три богатыря",
//     "price": "2990",
//     "count": "0",
//     "info": "Отсутствует",
//     "color": "card__off",
//     "data": "data-absent = absent",
//     "dataseries": "data-series = series-2",
//     "datayear": "data-year = year-5",
//     "link": "https://cbr.ru/cash_circulation/memorable_coins/coins_base/ShowCoins/?cat_num=5015-0020"
//   },
//   {
//     "img": "./../img/coins/russia/yubilee/25ru/2017/triwariorcolor.jpg",
//     "imgrev": "./../img/coins/russia/yubilee/25ru/2017/revers.jpg",
//     "md": "./../img/other/mmd.jpg",
//     "title": "25 рублей 2017",
//     "text": "Три богатыря (в специальном исполнении)",
//     "price": "27000",
//     "count": "0",
//     "info": "Отсутствует",
//     "color": "card__off",
//     "data": "data-absent = absent",
//     "dataseries": "data-series = series-2",
//     "datayear": "data-year = year-5",
//     "link": "https://cbr.ru/cash_circulation/memorable_coins/coins_base/ShowCoins/?cat_num=5015-0021"
//   },
//   {
//     "img": "./../img/coins/russia/yubilee/25ru/2017/zabivaka.jpg",
//     "imgrev": "./../img/coins/russia/yubilee/25ru/2017/revers18.jpg",
//     "md": "./../img/other/mmd.jpg",
//     "title": "25 рублей 2017",
//     "text": "Чемпионат мира по футболу FIFA 2018 в России",
//     "price": "70",
//     "count": "0",
//     "info": "Отсутствует",
//     "color": "card__off",
//     "data": "data-absent = absent",
//     "dataseries": "data-series = series-4",
//     "datayear": "data-year = year-5",
//     "link": "https://cbr.ru/cash_circulation/memorable_coins/coins_base/ShowCoins/?cat_num=5015-0018"
//   },
//   {
//     "img": "./../img/coins/russia/yubilee/25ru/2017/zabivakacolor.jpg",
//     "imgrev": "./../img/coins/russia/yubilee/25ru/2017/revers18.jpg",
//     "md": "./../img/other/mmd.jpg",
//     "title": "25 рублей 2017",
//     "text": "Чемпионат мира по футболу FIFA 2018 в России (в специальном исполнении)",
//     "price": "790",
//     "count": "0",
//     "info": "Отсутствует",
//     "color": "card__off",
//     "data": "data-absent = absent",
//     "dataseries": "data-series = series-4",
//     "datayear": "data-year = year-5",
//     "link": "https://cbr.ru/cash_circulation/memorable_coins/coins_base/ShowCoins/?cat_num=5015-0019"
//   },
//   {
//     "img": "./../img/coins/russia/yubilee/25ru/2017/worldcup.jpg",
//     "imgrev": "./../img/coins/russia/yubilee/25ru/2017/revers18.jpg",
//     "md": "./../img/other/mmd.jpg",
//     "title": "25 рублей 2017",
//     "text": "Чемпионат мира по футболу FIFA 2018 в России",
//     "price": "60",
//     "count": "0",
//     "info": "Отсутствует",
//     "color": "card__off",
//     "data": "data-absent = absent",
//     "dataseries": "data-series = series-4",
//     "datayear": "data-year = year-5",
//     "link": "https://cbr.ru/cash_circulation/memorable_coins/coins_base/ShowCoins/?cat_num=5015-0015"
//   },
//   {
//     "img": "./../img/coins/russia/yubilee/25ru/2017/worldcupcolor.jpg",
//     "imgrev": "./../img/coins/russia/yubilee/25ru/2017/revers18.jpg",
//     "md": "./../img/other/mmd.jpg",
//     "title": "25 рублей 2017",
//     "text": "Чемпионат мира по футболу FIFA 2018 в России (в специальном исполнении)",
//     "price": "990",
//     "count": "0",
//     "info": "Отсутствует",
//     "color": "card__off",
//     "data": "data-absent = absent",
//     "dataseries": "data-series = series-4",
//     "datayear": "data-year = year-5",
//     "link": "https://cbr.ru/cash_circulation/memorable_coins/coins_base/ShowCoins/?cat_num=5015-0016"
//   },
//   {
//     "img": "./../img/coins/russia/yubilee/25ru/2018/const.jpg",
//     "imgrev": "./../img/coins/russia/yubilee/25ru/2018/revers.jpg",
//     "md": "./../img/other/mmd.jpg",
//     "title": "25 рублей 2018",
//     "text": "25-летие принятия Конституции Российской Федерации",
//     "price": "150",
//     "count": "0",
//     "info": "Отсутствует",
//     "color": "card__off",
//     "data": "data-absent = absent",
//     "dataseries": "data-series = series-1",
//     "datayear": "data-year = year-6",
//     "link": "https://cbr.ru/cash_circulation/memorable_coins/coins_base/ShowCoins/?cat_num=5015-0027"
//   },
//   {
//     "img": "./../img/coins/russia/yubilee/25ru/2018/armygame.jpg",
//     "imgrev": "./../img/coins/russia/yubilee/25ru/2018/revers.jpg",
//     "md": "./../img/other/mmd.jpg",
//     "title": "25 рублей 2018",
//     "text": "Армейские международные игры",
//     "price": "490",
//     "count": "0",
//     "info": "Отсутствует",
//     "color": "card__off",
//     "data": "data-absent = absent",
//     "dataseries": "data-series = series-1",
//     "datayear": "data-year = year-6",
//     "link": "https://cbr.ru/cash_circulation/memorable_coins/coins_base/ShowCoins/?cat_num=5015-0024"
//   },
//   {
//     "img": "./../img/coins/russia/yubilee/25ru/2018/nupogodi.jpg",
//     "imgrev": "./../img/coins/russia/yubilee/25ru/2018/revers.jpg",
//     "md": "./../img/other/mmd.jpg",
//     "title": "25 рублей 2018",
//     "text": "Ну, погоди!",
//     "price": "3600",
//     "count": "0",
//     "info": "Отсутствует",
//     "color": "card__off",
//     "data": "data-absent = absent",
//     "dataseries": "data-series = series-2",
//     "datayear": "data-year = year-6",
//     "link": "https://cbr.ru/cash_circulation/memorable_coins/coins_base/ShowCoins/?cat_num=5015-0025"
//   },
//   {
//     "img": "./../img/coins/russia/yubilee/25ru/2018/nupogodicolor.jpg",
//     "imgrev": "./../img/coins/russia/yubilee/25ru/2018/revers.jpg",
//     "md": "./../img/other/mmd.jpg",
//     "title": "25 рублей 2018",
//     "text": "Ну, погоди! (специальное исполнение)",
//     "price": "25000",
//     "count": "0",
//     "info": "Отсутствует",
//     "color": "card__off",
//     "data": "data-absent = absent",
//     "dataseries": "data-series = series-2",
//     "datayear": "data-year = year-6",
//     "link": "https://cbr.ru/cash_circulation/memorable_coins/coins_base/ShowCoins/?cat_num=5015-0026"
//   },
//   {
//     "img": "./../img/coins/russia/yubilee/25ru/2019/leningrad.jpg",
//     "imgrev": "./../img/coins/russia/yubilee/25ru/2019/revers.jpg",
//     "md": "./../img/other/mmd.jpg",
//     "title": "25 рублей 2019",
//     "text": "75-летие полного освобождения Ленинграда от фашистской блокады",
//     "price": "150",
//     "count": "0",
//     "info": "Отсутствует",
//     "color": "card__off",
//     "data": "data-absent = absent",
//     "dataseries": "data-series = series-1",
//     "datayear": "data-year = year-7",
//     "link": "https://cbr.ru/cash_circulation/memorable_coins/coins_base/ShowCoins/?cat_num=5015-0028"
//   },
//   {
//     "img": "./../img/coins/russia/yubilee/25ru/2019/grabin.jpg",
//     "imgrev": "./../img/coins/russia/yubilee/25ru/2019/revers.jpg",
//     "md": "./../img/other/mmd.jpg",
//     "title": "25 рублей 2019",
//     "text": "Конструктор оружия В.Г. Грабин",
//     "price": "35",
//     "count": "0",
//     "info": "Отсутствует",
//     "color": "card__off",
//     "data": "data-absent = absent",
//     "dataseries": "data-series = series-3",
//     "datayear": "data-year = year-7",
//     "link": "https://cbr.ru/cash_circulation/memorable_coins/coins_base/ShowCoins/?cat_num=5015-0033"
//   },
//   {
//     "img": "./../img/coins/russia/yubilee/25ru/2019/kotin.jpg",
//     "imgrev": "./../img/coins/russia/yubilee/25ru/2019/revers.jpg",
//     "md": "./../img/other/mmd.jpg",
//     "title": "25 рублей 2019",
//     "text": "Конструктор оружия Ж.Я. Котин",
//     "price": "35",
//     "count": "0",
//     "info": "Отсутствует",
//     "color": "card__off",
//     "data": "data-absent = absent",
//     "dataseries": "data-series = series-3",
//     "datayear": "data-year = year-7",
//     "link": "https://cbr.ru/cash_circulation/memorable_coins/coins_base/ShowCoins/?cat_num=5015-0034"
//   },
//   {
//     "img": "./../img/coins/russia/yubilee/25ru/2019/koshkin.jpg",
//     "imgrev": "./../img/coins/russia/yubilee/25ru/2019/revers.jpg",
//     "md": "./../img/other/mmd.jpg",
//     "title": "25 рублей 2019",
//     "text": "Конструктор оружия М.И. Кошкин",
//     "price": "35",
//     "count": "0",
//     "info": "Отсутствует",
//     "color": "card__off",
//     "data": "data-absent = absent",
//     "dataseries": "data-series = series-3",
//     "datayear": "data-year = year-7",
//     "link": "https://cbr.ru/cash_circulation/memorable_coins/coins_base/ShowCoins/?cat_num=5015-0035"
//   },
//   {
//     "img": "./../img/coins/russia/yubilee/25ru/2019/malinin.jpg",
//     "imgrev": "./../img/coins/russia/yubilee/25ru/2019/revers.jpg",
//     "md": "./../img/other/mmd.jpg",
//     "title": "25 рублей 2019",
//     "text": "Конструктор оружия Б.М. Малинин",
//     "price": "35",
//     "count": "0",
//     "info": "Отсутствует",
//     "color": "card__off",
//     "data": "data-absent = absent",
//     "dataseries": "data-series = series-3",
//     "datayear": "data-year = year-7",
//     "link": "https://cbr.ru/cash_circulation/memorable_coins/coins_base/ShowCoins/?cat_num=5015-0036"
//   },
//   {
//     "img": "./../img/coins/russia/yubilee/25ru/2019/petlyakov.jpg",
//     "imgrev": "./../img/coins/russia/yubilee/25ru/2019/revers.jpg",
//     "md": "./../img/other/mmd.jpg",
//     "title": "25 рублей 2019",
//     "text": "Конструктор оружия В.М. Петляков",
//     "price": "35",
//     "count": "0",
//     "info": "Отсутствует",
//     "color": "card__off",
//     "data": "data-absent = absent",
//     "dataseries": "data-series = series-3",
//     "datayear": "data-year = year-7",
//     "link": "https://cbr.ru/cash_circulation/memorable_coins/coins_base/ShowCoins/?cat_num=5015-0037"
//   },
//   {
//     "img": "./../img/coins/russia/yubilee/25ru/2019/petrov.jpg",
//     "imgrev": "./../img/coins/russia/yubilee/25ru/2019/revers.jpg",
//     "md": "./../img/other/mmd.jpg",
//     "title": "25 рублей 2019",
//     "text": "Конструктор оружия Ф.Ф. Петров",
//     "price": "35",
//     "count": "0",
//     "info": "Отсутствует",
//     "color": "card__off",
//     "data": "data-absent = absent",
//     "dataseries": "data-series = series-3",
//     "datayear": "data-year = year-7",
//     "link": "https://cbr.ru/cash_circulation/memorable_coins/coins_base/ShowCoins/?cat_num=5015-0038"
//   },
//   {
//     "img": "./../img/coins/russia/yubilee/25ru/2019/polikarpov.jpg",
//     "imgrev": "./../img/coins/russia/yubilee/25ru/2019/revers.jpg",
//     "md": "./../img/other/mmd.jpg",
//     "title": "25 рублей 2019",
//     "text": "Конструктор оружия Н.Н. Поликарпов",
//     "price": "35",
//     "count": "0",
//     "info": "Отсутствует",
//     "color": "card__off",
//     "data": "data-absent = absent",
//     "dataseries": "data-series = series-3",
//     "datayear": "data-year = year-7",
//     "link": "https://cbr.ru/cash_circulation/memorable_coins/coins_base/ShowCoins/?cat_num=5015-0039"
//   },
//   {
//     "img": "./../img/coins/russia/yubilee/25ru/2019/simonov.jpg",
//     "imgrev": "./../img/coins/russia/yubilee/25ru/2019/revers.jpg",
//     "md": "./../img/other/mmd.jpg",
//     "title": "25 рублей 2019",
//     "text": "Конструктор оружия С.Г. Симонов",
//     "price": "35",
//     "count": "0",
//     "info": "Отсутствует",
//     "color": "card__off",
//     "data": "data-absent = absent",
//     "dataseries": "data-series = series-3",
//     "datayear": "data-year = year-7",
//     "link": "https://cbr.ru/cash_circulation/memorable_coins/coins_base/ShowCoins/?cat_num=5015-0040"
//   },
//   {
//     "img": "./../img/coins/russia/yubilee/25ru/2019/shpagin.jpg",
//     "imgrev": "./../img/coins/russia/yubilee/25ru/2019/revers.jpg",
//     "md": "./../img/other/mmd.jpg",
//     "title": "25 рублей 2019",
//     "text": "Конструктор оружия Г.С. Шпагин",
//     "price": "35",
//     "count": "0",
//     "info": "Отсутствует",
//     "color": "card__off",
//     "data": "data-absent = absent",
//     "dataseries": "data-series = series-3",
//     "datayear": "data-year = year-7",
//     "link": "https://cbr.ru/cash_circulation/memorable_coins/coins_base/ShowCoins/?cat_num=5015-0041"
//   },
//   {
//     "img": "./../img/coins/russia/yubilee/25ru/2019/moroz.jpg",
//     "imgrev": "./../img/coins/russia/yubilee/25ru/2019/revers.jpg",
//     "md": "./../img/other/mmd.jpg",
//     "title": "25 рублей 2019",
//     "text": "Дед Мороз и лето",
//     "price": "1390",
//     "count": "0",
//     "info": "Отсутствует",
//     "color": "card__off",
//     "data": "data-absent = absent",
//     "dataseries": "data-series = series-2",
//     "datayear": "data-year = year-7",
//     "link": "https://cbr.ru/cash_circulation/memorable_coins/coins_base/ShowCoins/?cat_num=5015-0031"
//   },
//   {
//     "img": "./../img/coins/russia/yubilee/25ru/2019/morozcolor.jpg",
//     "imgrev": "./../img/coins/russia/yubilee/25ru/2019/revers.jpg",
//     "md": "./../img/other/mmd.jpg",
//     "title": "25 рублей 2019",
//     "text": "Дед Мороз и лето(специальное издание)",
//     "price": "29700",
//     "count": "0",
//     "info": "Отсутствует",
//     "color": "card__off",
//     "data": "data-absent = absent",
//     "dataseries": "data-series = series-2",
//     "datayear": "data-year = year-7",
//     "link": "https://cbr.ru/cash_circulation/memorable_coins/coins_base/ShowCoins/?cat_num=5015-0032"
//   },
//   {
//     "img": "./../img/coins/russia/yubilee/25ru/2019/muzic.jpg",
//     "imgrev": "./../img/coins/russia/yubilee/25ru/2019/revers.jpg",
//     "md": "./../img/other/mmd.jpg",
//     "title": "25 рублей 2019",
//     "text": "Бременские музыканты",
//     "price": "1890",
//     "count": "0",
//     "info": "Отсутствует",
//     "color": "card__off",
//     "data": "data-absent = absent",
//     "dataseries": "data-series = series-2",
//     "datayear": "data-year = year-7",
//     "link": "https://cbr.ru/cash_circulation/memorable_coins/coins_base/ShowCoins/?cat_num=5015-0029"
//   },
//   {
//     "img": "./../img/coins/russia/yubilee/25ru/2019/miziccolor.jpg",
//     "imgrev": "./../img/coins/russia/yubilee/25ru/2019/revers.jpg",
//     "md": "./../img/other/mmd.jpg",
//     "title": "25 рублей 2019",
//     "text": "Бременские музыканты (специальное издание)",
//     "price": "29500",
//     "count": "0",
//     "info": "Отсутствует",
//     "color": "card__off",
//     "data": "data-absent = absent",
//     "dataseries": "data-series = series-2",
//     "datayear": "data-year = year-7",
//     "link": "https://cbr.ru/cash_circulation/memorable_coins/coins_base/ShowCoins/?cat_num=5015-0030"
//   },
//   {
//     "img": "./../img/coins/russia/yubilee/25ru/2020/25RU20-1.png",
//     "imgrev": "./../img/coins/russia/yubilee/25ru/2020/revers.png",
//     "md": "./../img/other/mmd.jpg",
//     "title": "25 рублей 2020",
//     "text": "Памятная монета, посвященная самоотверженному труду медицинских работников",
//     "price": "60",
//     "count": "0",
//     "info": "Отсутствует",
//     "color": "card__off",
//     "data": "data-absent = absent",
//     "dataseries": "data-series = series-1",
//     "datayear": "data-year = year-8",
//     "link": "https://cbr.ru/cash_circulation/memorable_coins/coins_base/ShowCoins/?cat_num=5015-0054"
//   },
//   {
//     "img": "./../img/coins/russia/yubilee/25ru/2020/25RU20-2.png",
//     "imgrev": "./../img/coins/russia/yubilee/25ru/2020/revers.png",
//     "md": "./../img/other/mmd.jpg",
//     "title": "25 рублей 2020",
//     "text": "Конструктор оружия С.В. Ильюшин",
//     "price": "190",
//     "count": "0",
//     "info": "Отсутствует",
//     "color": "card__off",
//     "data": "data-absent = absent",
//     "dataseries": "data-series = series-3",
//     "datayear": "data-year = year-8",
//     "link": "https://cbr.ru/cash_circulation/memorable_coins/coins_base/ShowCoins/?cat_num=5015-0047"
//   },
//   {
//     "img": "./../img/coins/russia/yubilee/25ru/2020/25RU20-3.png",
//     "imgrev": "./../img/coins/russia/yubilee/25ru/2020/revers.png",
//     "md": "./../img/other/mmd.jpg",
//     "title": "25 рублей 2020",
//     "text": "Конструктор оружия С.А. Лавочкин",
//     "price": "190",
//     "count": "0",
//     "info": "Отсутствует",
//     "color": "card__off",
//     "data": "data-absent = absent",
//     "dataseries": "data-series = series-3",
//     "datayear": "data-year = year-8",
//     "link": "https://cbr.ru/cash_circulation/memorable_coins/coins_base/ShowCoins/?cat_num=5015-0048"
//   },
//   {
//     "img": "./../img/coins/russia/yubilee/25ru/2020/25RU20-4.png",
//     "imgrev": "./../img/coins/russia/yubilee/25ru/2020/revers.png",
//     "md": "./../img/other/mmd.jpg",
//     "title": "25 рублей 2020",
//     "text": "Конструктор оружия М.Н. Логинов",
//     "price": "190",
//     "count": "0",
//     "info": "Отсутствует",
//     "color": "card__off",
//     "data": "data-absent = absent",
//     "dataseries": "data-series = series-3",
//     "datayear": "data-year = year-8",
//     "link": "https://cbr.ru/cash_circulation/memorable_coins/coins_base/ShowCoins/?cat_num=5015-0049"
//   },
//   {
//     "img": "./../img/coins/russia/yubilee/25ru/2020/25RU20-5.png",
//     "imgrev": "./../img/coins/russia/yubilee/25ru/2020/revers.png",
//     "md": "./../img/other/mmd.jpg",
//     "title": "25 рублей 2020",
//     "text": "Конструктор оружия А.Н. Туполев",
//     "price": "190",
//     "count": "0",
//     "info": "Отсутствует",
//     "color": "card__off",
//     "data": "data-absent = absent",
//     "dataseries": "data-series = series-3",
//     "datayear": "data-year = year-8",
//     "link": "https://cbr.ru/cash_circulation/memorable_coins/coins_base/ShowCoins/?cat_num=5015-0050"
//   },
//   {
//     "img": "./../img/coins/russia/yubilee/25ru/2020/25RU20-6.png",
//     "imgrev": "./../img/coins/russia/yubilee/25ru/2020/revers.png",
//     "md": "./../img/other/mmd.jpg",
//     "title": "25 рублей 2020",
//     "text": "Конструктор оружия А.С. Яковлев",
//     "price": "190",
//     "count": "0",
//     "info": "Отсутствует",
//     "color": "card__off",
//     "data": "data-absent = absent",
//     "dataseries": "data-series = series-3",
//     "datayear": "data-year = year-8",
//     "link": "https://cbr.ru/cash_circulation/memorable_coins/coins_base/ShowCoins/?cat_num=5015-0051"
//   },
//   {
//     "img": "./../img/coins/russia/yubilee/25ru/2020/25RU20-7.png",
//     "imgrev": "./../img/coins/russia/yubilee/25ru/2020/revers.png",
//     "md": "./../img/other/mmd.jpg",
//     "title": "25 рублей 2020",
//     "text": "Конструктор оружия П.М. Горюнов",
//     "price": "190",
//     "count": "0",
//     "info": "Отсутствует",
//     "color": "card__off",
//     "data": "data-absent = absent",
//     "dataseries": "data-series = series-3",
//     "datayear": "data-year = year-8",
//     "link": "https://cbr.ru/cash_circulation/memorable_coins/coins_base/ShowCoins/?cat_num=5015-0042"
//   },
//   {
//     "img": "./../img/coins/russia/yubilee/25ru/2020/25RU20-8.png",
//     "imgrev": "./../img/coins/russia/yubilee/25ru/2020/revers.png",
//     "md": "./../img/other/mmd.jpg",
//     "title": "25 рублей 2020",
//     "text": "Конструктор оружия Л.Л. Ермаш",
//     "price": "190",
//     "count": "0",
//     "info": "Отсутствует",
//     "color": "card__off",
//     "data": "data-absent = absent",
//     "dataseries": "data-series = series-3",
//     "datayear": "data-year = year-8",
//     "link": "https://cbr.ru/cash_circulation/memorable_coins/coins_base/ShowCoins/?cat_num=5015-0043"
//   },
//   {
//     "img": "./../img/coins/russia/yubilee/25ru/2020/25RU20-9.png",
//     "imgrev": "./../img/coins/russia/yubilee/25ru/2020/revers.png",
//     "md": "./../img/other/mmd.jpg",
//     "title": "25 рублей 2020",
//     "text": "Конструктор оружия А.И. Маслов",
//     "price": "190",
//     "count": "0",
//     "info": "Отсутствует",
//     "color": "card__off",
//     "data": "data-absent = absent",
//     "dataseries": "data-series = series-3",
//     "datayear": "data-year = year-8",
//     "link": "https://cbr.ru/cash_circulation/memorable_coins/coins_base/ShowCoins/?cat_num=5015-0044"
//   },
//   {
//     "img": "./../img/coins/russia/yubilee/25ru/2020/25RU20-10.png",
//     "imgrev": "./../img/coins/russia/yubilee/25ru/2020/revers.png",
//     "md": "./../img/other/mmd.jpg",
//     "title": "25 рублей 2020",
//     "text": "Конструктор оружия А.И. Судаев",
//     "price": "190",
//     "count": "0",
//     "info": "Отсутствует",
//     "color": "card__off",
//     "data": "data-absent = absent",
//     "dataseries": "data-series = series-3",
//     "datayear": "data-year = year-8",
//     "link": "https://cbr.ru/cash_circulation/memorable_coins/coins_base/ShowCoins/?cat_num=5015-0045"
//   },
//   {
//     "img": "./../img/coins/russia/yubilee/25ru/2020/25RU20-11.png",
//     "imgrev": "./../img/coins/russia/yubilee/25ru/2020/revers.png",
//     "md": "./../img/other/mmd.jpg",
//     "title": "25 рублей 2020",
//     "text": "Конструктор оружия Ф.В. Токарев",
//     "price": "190",
//     "count": "0",
//     "info": "Отсутствует",
//     "color": "card__off",
//     "data": "data-absent = absent",
//     "dataseries": "data-series = series-3",
//     "datayear": "data-year = year-8",
//     "link": "https://cbr.ru/cash_circulation/memorable_coins/coins_base/ShowCoins/?cat_num=5015-0046"
//   },
//   {
//     "img": "./../img/coins/russia/yubilee/25ru/2020/25RU20-12.png",
//     "imgrev": "./../img/coins/russia/yubilee/25ru/2020/revers.png",
//     "md": "./../img/other/mmd.jpg",
//     "title": "25 рублей 2020",
//     "text": "Крокодил Гена",
//     "price": "570",
//     "count": "0",
//     "info": "Отсутствует",
//     "color": "card__off",
//     "data": "data-absent = absent",
//     "dataseries": "data-series = series-2",
//     "datayear": "data-year = year-8",
//     "link": "https://cbr.ru/cash_circulation/memorable_coins/coins_base/ShowCoins/?cat_num=5015-0055"
//   },
//   {
//     "img": "./../img/coins/russia/yubilee/25ru/2020/25RU20-13.png",
//     "imgrev": "./../img/coins/russia/yubilee/25ru/2020/revers.png",
//     "md": "./../img/other/mmd.jpg",
//     "title": "25 рублей 2020",
//     "text": "Крокодил Гена (специальное издание)",
//     "price": "5700",
//     "count": "0",
//     "info": "Отсутствует",
//     "color": "card__off",
//     "data": "data-absent = absent",
//     "dataseries": "data-series = series-2",
//     "datayear": "data-year = year-8",
//     "link": "https://cbr.ru/cash_circulation/memorable_coins/coins_base/ShowCoins/?cat_num=5015-0056"
//   },
//   {
//     "img": "./../img/coins/russia/yubilee/25ru/2020/25RU20-14.png",
//     "imgrev": "./../img/coins/russia/yubilee/25ru/2020/revers.png",
//     "md": "./../img/other/mmd.jpg",
//     "title": "25 рублей 2020",
//     "text": "Барбоскины",
//     "price": "370",
//     "count": "0",
//     "info": "Отсутствует",
//     "color": "card__off",
//     "data": "data-absent = absent",
//     "dataseries": "data-series = series-2",
//     "datayear": "data-year = year-8",
//     "link": "https://cbr.ru/cash_circulation/memorable_coins/coins_base/ShowCoins/?cat_num=5015-0052"
//   },
//   {
//     "img": "./../img/coins/russia/yubilee/25ru/2020/25RU20-15.png",
//     "imgrev": "./../img/coins/russia/yubilee/25ru/2020/revers.png",
//     "md": "./../img/other/mmd.jpg",
//     "title": "25 рублей 2020",
//     "text": "Барбоскины (специальное издание)",
//     "price": "2600",
//     "count": "0",
//     "info": "Отсутствует",
//     "color": "card__off",
//     "data": "data-absent = absent",
//     "dataseries": "data-series = series-2",
//     "datayear": "data-year = year-8",
//     "link": "https://cbr.ru/cash_circulation/memorable_coins/coins_base/ShowCoins/?cat_num=5015-0052"
//   },
//   {
//     "img": "./../img/coins/russia/yubilee/25ru/2021/25RU21-1.png",
//     "imgrev": "./../img/coins/russia/yubilee/25ru/2021/revers.png",
//     "md": "./../img/other/mmd.jpg",
//     "title": "25 рублей 2021",
//     "text": "Творчество Юрия Никулина",
//     "price": "230",
//     "count": "0",
//     "info": "Отсутствует",
//     "color": "card__off",
//     "data": "data-absent = absent",
//     "dataseries": "data-series = series-1",
//     "datayear": "data-year = year-9",
//     "link": "https://cbr.ru/cash_circulation/memorable_coins/coins_base/ShowCoins/?cat_num=5015-0063"
//   },
//   {
//     "img": "./../img/coins/russia/yubilee/25ru/2021/25RU21-2.png",
//     "imgrev": "./../img/coins/russia/yubilee/25ru/2021/revers.png",
//     "md": "./../img/other/mmd.jpg",
//     "title": "25 рублей 2021",
//     "text": "Творчество Юрия Никулина (специальное издание)",
//     "price": "2590",
//     "count": "0",
//     "info": "Отсутствует",
//     "color": "card__off",
//     "data": "data-absent = absent",
//     "dataseries": "data-series = series-1",
//     "datayear": "data-year = year-9",
//     "link": "https://cbr.ru/cash_circulation/memorable_coins/coins_base/ShowCoins/?cat_num=5015-0064"
//   },
//   {
//     "img": "./../img/coins/russia/yubilee/25ru/2021/25RU21-3.png",
//     "imgrev": "./../img/coins/russia/yubilee/25ru/2021/revers.png",
//     "md": "./../img/other/mmd.jpg",
//     "title": "25 рублей 2021",
//     "text": "60-летие первого полета человека в космос",
//     "price": "450",
//     "count": "0",
//     "info": "Отсутствует",
//     "color": "card__off",
//     "data": "data-absent = absent",
//     "dataseries": "data-series = series-1",
//     "datayear": "data-year = year-9",
//     "link": "https://cbr.ru/cash_circulation/memorable_coins/coins_base/ShowCoins/?cat_num=5015-0057"
//   },
//   {
//     "img": "./../img/coins/russia/yubilee/25ru/2021/25RU21-4.png",
//     "imgrev": "./../img/coins/russia/yubilee/25ru/2021/revers.png",
//     "md": "./../img/other/mmd.jpg",
//     "title": "25 рублей 2021",
//     "text": "60-летие первого полета человека в космос (специальное издание)",
//     "price": "1760",
//     "count": "0",
//     "info": "Отсутствует",
//     "color": "card__off",
//     "data": "data-absent = absent",
//     "dataseries": "data-series = series-1",
//     "datayear": "data-year = year-9",
//     "link": "https://cbr.ru/cash_circulation/memorable_coins/coins_base/ShowCoins/?cat_num=5015-0058"
//   },
//   {
//     "img": "./../img/coins/russia/yubilee/25ru/2021/25RU21-5.png",
//     "imgrev": "./../img/coins/russia/yubilee/25ru/2021/revers.png",
//     "md": "./../img/other/mmd.jpg",
//     "title": "25 рублей 2021",
//     "text": "Маша и Медведь",
//     "price": "370",
//     "count": "0",
//     "info": "Отсутствует",
//     "color": "card__off",
//     "data": "data-absent = absent",
//     "dataseries": "data-series = series-2",
//     "datayear": "data-year = year-9",
//     "link": "https://cbr.ru/cash_circulation/memorable_coins/coins_base/ShowCoins/?cat_num=5015-0061"
//   },
//   {
//     "img": "./../img/coins/russia/yubilee/25ru/2021/25RU21-6.png",
//     "imgrev": "./../img/coins/russia/yubilee/25ru/2021/revers.png",
//     "md": "./../img/other/mmd.jpg",
//     "title": "25 рублей 2021",
//     "text": "Маша и Медведь (специальное издание)",
//     "price": "2990",
//     "count": "0",
//     "info": "Отсутствует",
//     "color": "card__off",
//     "data": "data-absent = absent",
//     "dataseries": "data-series = series-2",
//     "datayear": "data-year = year-9",
//     "link": "https://cbr.ru/cash_circulation/memorable_coins/coins_base/ShowCoins/?cat_num=5015-0062"
//   },
//   {
//     "img": "./../img/coins/russia/yubilee/25ru/2021/25RU21-7.png",
//     "imgrev": "./../img/coins/russia/yubilee/25ru/2021/revers.png",
//     "md": "./../img/other/mmd.jpg",
//     "title": "25 рублей 2021",
//     "text": "Умка",
//     "price": "340",
//     "count": "0",
//     "info": "Отсутствует",
//     "color": "card__off",
//     "data": "data-absent = absent",
//     "dataseries": "data-series = series-2",
//     "datayear": "data-year = year-9",
//     "link": "https://cbr.ru/cash_circulation/memorable_coins/coins_base/ShowCoins/?cat_num=5015-0059"
//   },
//   {
//     "img": "./../img/coins/russia/yubilee/25ru/2021/25RU21-8.png",
//     "imgrev": "./../img/coins/russia/yubilee/25ru/2021/revers.png",
//     "md": "./../img/other/mmd.jpg",
//     "title": "25 рублей 2021",
//     "text": "Умка (специальное издание)",
//     "price": "2850",
//     "count": "0",
//     "info": "Отсутствует",
//     "color": "card__off",
//     "data": "data-absent = absent",
//     "dataseries": "data-series = series-2",
//     "datayear": "data-year = year-9",
//     "link": "https://cbr.ru/cash_circulation/memorable_coins/coins_base/ShowCoins/?cat_num=5015-0060"
//   },
//   {
//     "img": "./../img/coins/russia/yubilee/25ru/2022/25RU22-1.png",
//     "imgrev": "./../img/coins/russia/yubilee/25ru/2022/revers.png",
//     "md": "./../img/other/mmd.jpg",
//     "title": "25 рублей 2022",
//     "text": "Веселая карусель № 1",
//     "price": "395",
//     "count": "0",
//     "info": "Отсутствует",
//     "color": "card__off",
//     "data": "data-absent = absent",
//     "dataseries": "data-series = series-2",
//     "datayear": "data-year = year-10",
//     "link": "https://cbr.ru/cash_circulation/memorable_coins/coins_base/ShowCoins/?cat_num=5015-0067"
//   },
//   {
//     "img": "./../img/coins/russia/yubilee/25ru/2022/25RU22-2.png",
//     "imgrev": "./../img/coins/russia/yubilee/25ru/2022/revers.png",
//     "md": "./../img/other/mmd.jpg",
//     "title": "25 рублей 2022",
//     "text": "Веселая карусель № 1(специальное издание)",
//     "price": "2490",
//     "count": "0",
//     "info": "Отсутствует",
//     "color": "card__off",
//     "data": "data-absent = absent",
//     "dataseries": "data-series = series-2",
//     "datayear": "data-year = year-10",
//     "link": "https://cbr.ru/cash_circulation/memorable_coins/coins_base/ShowCoins/?cat_num=5015-0068"
//   },
//   {
//     "img": "./../img/coins/russia/yubilee/25ru/2022/25RU22-3.png",
//     "imgrev": "./../img/coins/russia/yubilee/25ru/2022/revers.png",
//     "md": "./../img/other/mmd.jpg",
//     "title": "25 рублей 2022",
//     "text": "Иван Царевич и Серый Волк",
//     "price": "350",
//     "count": "0",
//     "info": "Отсутствует",
//     "color": "card__off",
//     "data": "data-absent = absent",
//     "dataseries": "data-series = series-2",
//     "datayear": "data-year = year-10",
//     "link": "https://cbr.ru/cash_circulation/memorable_coins/coins_base/ShowCoins/?cat_num=5015-0065"
//   },
//   {
//     "img": "./../img/coins/russia/yubilee/25ru/2022/25RU22-4.png",
//     "imgrev": "./../img/coins/russia/yubilee/25ru/2022/revers.png",
//     "md": "./../img/other/mmd.jpg",
//     "title": "25 рублей 2022",
//     "text": "Иван Царевич и Серый Волк (специальное издание)",
//     "price": "1990",
//     "count": "0",
//     "info": "Отсутствует",
//     "color": "card__off",
//     "data": "data-absent = absent",
//     "dataseries": "data-series = series-2",
//     "datayear": "data-year = year-10",
//     "link": "https://cbr.ru/cash_circulation/memorable_coins/coins_base/ShowCoins/?cat_num=5015-0066"
//   },
//   {
//     "img": "./../img/coins/russia/yubilee/25ru/2023/25RU23-1.png",
//     "imgrev": "./../img/coins/russia/yubilee/25ru/2023/revers.png",
//     "md": "./../img/other/mmd.jpg",
//     "title": "25 рублей 2023",
//     "text": "Аленький цветочек",
//     "price": "285",
//     "count": "0",
//     "info": "Отсутствует",
//     "color": "card__off",
//     "data": "data-absent = absent",
//     "dataseries": "data-series = series-2",
//     "datayear": "data-year = year-11",
//     "link": "https://cbr.ru/cash_circulation/memorable_coins/coins_base/ShowCoins/?cat_num=5715-0002"
//   },
//   {
//     "img": "./../img/coins/russia/yubilee/25ru/2023/25RU23-2.png",
//     "imgrev": "./../img/coins/russia/yubilee/25ru/2023/revers.png",
//     "md": "./../img/other/mmd.jpg",
//     "title": "25 рублей 2023",
//     "text": "Аленький цветочек (специальное издание)",
//     "price": "1850",
//     "count": "0",
//     "info": "Отсутствует",
//     "color": "card__off",
//     "data": "data-absent = absent",
//     "dataseries": "data-series = series-2",
//     "datayear": "data-year = year-11",
//     "link": "https://cbr.ru/cash_circulation/memorable_coins/coins_base/ShowCoins/?cat_num=5015-0070"
//   },
//   {
//     "img": "./../img/coins/russia/yubilee/25ru/2023/25RU23-3.png",
//     "imgrev": "./../img/coins/russia/yubilee/25ru/2023/revers.png",
//     "md": "./../img/other/mmd.jpg",
//     "title": "25 рублей 2023",
//     "text": "Смешарики",
//     "price": "300",
//     "count": "0",
//     "info": "Отсутствует",
//     "color": "card__off",
//     "data": "data-absent = absent",
//     "dataseries": "data-series = series-2",
//     "datayear": "data-year = year-11",
//     "link": "https://cbr.ru/cash_circulation/memorable_coins/coins_base/ShowCoins/?cat_num=5715-0001"
//   },
//   {
//     "img": "./../img/coins/russia/yubilee/25ru/2023/25RU23-4.png",
//     "imgrev": "./../img/coins/russia/yubilee/25ru/2023/revers.png",
//     "md": "./../img/other/mmd.jpg",
//     "title": "25 рублей 2023",
//     "text": "Смешарики (специальное издание)",
//     "price": "3690",
//     "count": "0",
//     "info": "Отсутствует",
//     "color": "card__off",
//     "data": "data-absent = absent",
//     "dataseries": "data-series = series-2",
//     "datayear": "data-year = year-11",
//     "link": "https://cbr.ru/cash_circulation/memorable_coins/coins_base/ShowCoins/?cat_num=5015-0069"
//   }

// ];

const userDataString = JSON.stringify(jsonData);
const parsUserData = JSON.parse(userDataString)

// находим контейнер для карточек
// const products = document.getElementById('25ru');
const products = id25ru;

for(let i=0;i<parsUserData.length;i++){
  
  if(!!products){
  // create card 
  let card = document.createElement('div');  
    // top card block
  let cardTop = document.createElement('div');
  // add children for products and add class card
  products.appendChild(card).className="card select";
  //add attribute for card
  card.setAttribute("data-series", parsUserData[i].dataseries);
  card.setAttribute("data-year", parsUserData[i].datayear);
  //add children cardTop for card and add class card__top
  card.appendChild(cardTop).className="card__top";
  //careate card status
  let cardStatus = document.createElement('div');
  // creat card count
  let cardCount = document.createElement('div');
  //add children for cardTop and add class card__count
  cardTop.appendChild(cardCount).className="card__count";
  // add number in count
  cardCount.innerHTML = i+1;
  // create card link
  let cardLink = document.createElement('a');
  //add children for card and add class card__link
  card.appendChild(cardLink).className="card__link";
  // add atributte href and target
  cardLink.setAttribute("href", parsUserData[i].link);
  cardLink.setAttribute("target", "_blank");
  // create card body
  let cardBody = document.createElement('div');
  // creat swiper
  let swiper=document.createElement('div');
  // creat swiper wrapper
  let swiperWrapper=document.createElement('div');
  // create swiper-slide
  let swiperSlideOne=document.createElement('div');
  // create swiper-slide
  let swiperSlideTwo=document.createElement('div');
  // create swiper-scrollbar
  let swiperScrollbar=document.createElement('div');
  // 
  swiper.appendChild(swiperScrollbar).className="swiper-scrollbar card__scrollbar";
  // add children swiper for card and class swiper card__swiper 
  cardBody.appendChild(swiper).className= "swiper card__swiper";
  // add children swiper wrappee for swiper and class swiper-wrapper
  swiper.appendChild(swiperWrapper).className="swiper-wrapper card__wrapper";
  // add children swiper-slide for swiper-wrapper and class swiper-slide
  swiperWrapper.appendChild(swiperSlideOne).className="swiper-slide card__slide";
  // add children swiper-slide for swiper-wrapper and class swiper-slide
  swiperWrapper.appendChild(swiperSlideTwo).className="swiper-slide card__slide";
  // add children cardBody for card and class card__body 
  card.appendChild(cardBody).className="card__body";
  // create card img
  let cardImg = document.createElement('img');
  // create card img revers
  let cardImgRevers = document.createElement('img');
  // 
  swiperSlideTwo.appendChild(cardImgRevers).className="card__img";
  // add children cardImg  for cardBody and class card__img
  swiperSlideOne.appendChild(cardImg).className="card__img";
  // add attribute src for card__img
  cardImgRevers.setAttribute("src", parsUserData[i].imgrev);
  // add attribute src for card__img
  cardImg.setAttribute("src", parsUserData[i].img);
  // create ImgSign
  let cardImgSign = document.createElement('img');
  // add img slide
  card.appendChild(cardImgSign).className="card__imgsign";
  // add children cardImgSign  for cardBody and class card__imgsign
  cardImgSign.setAttribute("src", parsUserData[i].md);
  // create card info
  let cardInfo = document.createElement('div');
  //add children for card and add class card__info
  card.appendChild(cardInfo).className="card__info";
  // create card info top
  let cardInfoTop = document.createElement('div');
  cardInfo.appendChild(cardInfoTop).className="card__info-top";
  // create title
  let cardTitle = document.createElement('h3');
  // add children for cardInfo and class card__title
  cardInfoTop.appendChild(cardTitle).className="card__title"
  // add content title
  cardTitle.innerText=parsUserData[i].title;
  // create description
  let cardDesc = document.createElement('div');
  // add children for cardInfo and class card__desc
  cardInfoTop.appendChild(cardDesc).className="card__desc";
  // add content desription
  cardDesc.innerText=parsUserData[i].text;

  // bottom
  let cardInfoBottom = document.createElement('div');
  cardInfo.appendChild(cardInfoBottom).className="card__info-bottom";  
  // create Box Items
  let cardBoxOne = document.createElement('div');
  let cardBoxTwo = document.createElement('div');
  let cardBoxThree = document.createElement('div');
  // add children for cardInfo and class card__box
  cardInfoBottom.appendChild(cardBoxOne).className="card__box";
  cardInfoBottom.appendChild(cardBoxTwo).className="card__box";
  cardInfoBottom.appendChild(cardBoxThree).className="card__box";
  // create price sale text
  let cardPriceSaleTxt = document.createElement('span');
  // add children for cardBoxOne and span
  cardBoxOne.appendChild(cardPriceSaleTxt);
  // add content cardPriceSaleTxt
  cardPriceSaleTxt.innerText="Стоимость:"
  // create price sale
  let cardPriceSale = document.createElement('div');
  // add children for cardBoxOne and class card__price
  cardBoxOne.appendChild(cardPriceSale).className="card__price";
  // add price sale
  cardPriceSale.innerHTML= parsUserData[i].price;
  // create span
  let cardPriceSaleSpan = document.createElement('span');
  // add span and content
  cardPriceSale.appendChild(cardPriceSaleSpan).innerText=" ₽";

  let cardPriceCountTxt = document.createElement('span');
  let cardPriceCount = document.createElement('div');
  let cardPriceCountSpan = document.createElement('span');

  cardBoxTwo.appendChild(cardPriceCountTxt).innerText="Количество:";
  cardBoxTwo.appendChild(cardPriceCount).innerHTML=parsUserData[i].count;
  cardPriceCount.appendChild(cardPriceCountSpan).innerText=" Шт";

  let cardPriceAllTxt = document.createElement('span');
  let cardPriceAll = document.createElement('div');
  let cardPriceAllSpan = document.createElement('span');

  cardBoxThree.appendChild(cardPriceAllTxt).innerText="За все:";
  cardBoxThree.appendChild(cardPriceAll).innerHTML=parsUserData[i].count*parsUserData[i].price;
  cardPriceAll.appendChild(cardPriceAllSpan).innerText=" ₽";

  // console.log(parsUserData25ru[i].count);
  let bool = Boolean(Number(parsUserData[i].count));
  // console.log(bool);
  
  if(bool){
    cardTop.appendChild(cardStatus).className="card__on";
    cardStatus.setAttribute("title", parsUserData[i].info);
  }else{
    cardTop.appendChild(cardStatus).className="card__off";
    cardStatus.setAttribute("title", parsUserData[i].info);
  }

  
  
  }
  
}

// 
const inYearBtn26 = document.getElementById('inyear-26');
// all cards
const cardAll = document.querySelectorAll('.card');
// button series-1
const seriesOneBtn = document.getElementById('series-1');
// кнопка series-2
const seriesTwoBtn = document.getElementById('series-2');
// кнопка series-3
const seriesThreeBtn = document.getElementById('series-3');
// кнопка series-4
const seriesFourBtn = document.getElementById('series-4');
// кнопка series-5
const seriesFiveBtn = document.getElementById('series-5');
// кнопка series-6
const seriesSixBtn = document.getElementById('series-6');
// кнопка series-7
const seriesSevenBtn = document.getElementById('series-7');
// кнопка series-8
const seriesEightBtn = document.getElementById('series-8');
// кнопка series-9
const seriesNineBtn = document.getElementById('series-9');
// кнопка series-10
const seriesTenBtn = document.getElementById('series-10');
const sideBar = document.querySelector('.sidebar');

if(!!seriesOneBtn){

    seriesOneBtn.addEventListener('click',function(event){
      sideBar.classList.remove('visible');
      sideBar.classList.remove('none');

      cardAll.forEach(function(item){
        item.classList.remove('select');
        item.classList.remove('select1');
        item.classList.remove('select2');
        item.classList.remove('select3');
        item.classList.remove('select4');
        item.classList.remove('select5');
        item.classList.remove('select6');
        item.classList.remove('select7');
        if(item.getAttribute("data-series") == "data-series = series-1" ){
          item.classList.remove("none");
        }else{
          item.classList.add("none");
        }
        
      })
    
      
    })

}

if(!!seriesTwoBtn){
  seriesTwoBtn.addEventListener('click',()=>{
    sideBar.classList.remove('visible');
    sideBar.classList.remove('none');
    cardAll.forEach((item)=>{
        item.classList.remove('select');
        item.classList.remove('select1');
        item.classList.remove('select2');
        item.classList.remove('select3');
        item.classList.remove('select4');
        item.classList.remove('select5');
        item.classList.remove('select6');
        item.classList.remove('select7');
        if(item.getAttribute("data-series") == "data-series = series-2"){
          item.classList.remove("none");
        }else{
          item.classList.add("none");
        }
    })
  })
}

if(!!seriesThreeBtn){
  seriesThreeBtn.addEventListener('click',()=>{
    sideBar.classList.remove('visible');
    sideBar.classList.remove('none');
    cardAll.forEach((item)=>{
        item.classList.remove('select');
        item.classList.remove('select1');
        item.classList.remove('select2');
        item.classList.remove('select3');
        item.classList.remove('select4');
        item.classList.remove('select5');
        item.classList.remove('select6');
        item.classList.remove('select7');
        if(item.getAttribute("data-series") == "data-series = series-3" ){
          item.classList.remove("none");
        }else{
          item.classList.add("none");
        }
    })
  })
}

if(!!seriesFourBtn){
  seriesFourBtn.addEventListener('click',()=>{
    sideBar.classList.remove('visible');
    sideBar.classList.remove('none');
    cardAll.forEach((item)=>{
        item.classList.remove('select');
        item.classList.remove('select1');
        item.classList.remove('select2');
        item.classList.remove('select3');
        item.classList.remove('select4');
        item.classList.remove('select5');
        item.classList.remove('select6');
        item.classList.remove('select7');
        if(item.getAttribute("data-series") == "data-series = series-4" ){
          item.classList.remove("none");
        }else{
          item.classList.add("none");
        }
    })
  })
}

if(!!seriesFiveBtn){
  seriesFiveBtn.addEventListener('click',()=>{
    sideBar.classList.remove('visible');
    sideBar.classList.remove('none');
    cardAll.forEach((item)=>{
        item.classList.remove('select');
        item.classList.remove('select1');
        item.classList.remove('select2');
        item.classList.remove('select3');
        item.classList.remove('select4');
        item.classList.remove('select5');
        item.classList.remove('select6');
        item.classList.remove('select7');
        if(item.getAttribute("data-series") == "data-series = series-5" ){
          item.classList.remove("none");
        }else{
          item.classList.add("none");
        }
    })
  })
}

if(!!seriesSixBtn){
  seriesSixBtn.addEventListener('click',()=>{
    sideBar.classList.remove('visible');
    sideBar.classList.remove('none');
    cardAll.forEach((item)=>{
        item.classList.remove('select');
        item.classList.remove('select1');
        item.classList.remove('select2');
        item.classList.remove('select3');
        item.classList.remove('select4');
        item.classList.remove('select5');
        item.classList.remove('select6');
        item.classList.remove('select7');
        if(item.getAttribute("data-series") == "data-series = series-6" ){
          item.classList.remove("none");
        }else{
          item.classList.add("none");
        }
    })
  })
}

if(!!seriesSevenBtn){
  seriesSevenBtn.addEventListener('click',()=>{
    sideBar.classList.remove('visible');
    sideBar.classList.remove('none');
    cardAll.forEach((item)=>{
        item.classList.remove('select');
        item.classList.remove('select1');
        item.classList.remove('select2');
        item.classList.remove('select3');
        item.classList.remove('select4');
        item.classList.remove('select5');
        item.classList.remove('select6');
        item.classList.remove('select7');
        if(item.getAttribute("data-series") == "data-series = series-7" ){
          item.classList.remove("none");
        }else{
          item.classList.add("none");
        }
    })
  })
}

if(!!seriesEightBtn){
  seriesEightBtn.addEventListener('click',()=>{
    sideBar.classList.remove('visible');
    sideBar.classList.remove('none');
    cardAll.forEach((item)=>{
        item.classList.remove('select');
        item.classList.remove('select1');
        item.classList.remove('select2');
        item.classList.remove('select3');
        item.classList.remove('select4');
        item.classList.remove('select5');
        item.classList.remove('select6');
        item.classList.remove('select7');
        if(item.getAttribute("data-series") == "data-series = series-8" ){
          item.classList.remove("none");
        }else{
          item.classList.add("none");
        }
    })
  })
}

if(!!seriesNineBtn){
  seriesNineBtn.addEventListener('click',()=>{
    sideBar.classList.remove('visible');
    sideBar.classList.remove('none');
    cardAll.forEach((item)=>{
        item.classList.remove('select');
        item.classList.remove('select1');
        item.classList.remove('select2');
        item.classList.remove('select3');
        item.classList.remove('select4');
        item.classList.remove('select5');
        item.classList.remove('select6');
        item.classList.remove('select7');
        if(item.getAttribute("data-series") == "data-series = series-9" ){
          item.classList.remove("none");
        }else{
          item.classList.add("none");
        }
    })
  })
}

if(!!seriesTenBtn){
  seriesTenBtn.addEventListener('click',()=>{
    sideBar.classList.remove('visible');
    sideBar.classList.remove('none');
    cardAll.forEach((item)=>{
          item.classList.remove("none");
          item.classList.remove('select');
          item.classList.remove('select1');
          item.classList.remove('select2');
          item.classList.remove('select3');
          item.classList.remove('select4');
          item.classList.remove('select5');
          item.classList.remove('select6');
          item.classList.remove('select7');
    })
  })
}

//кнопка year-1
const inYearBtn1 = document.getElementById('inyear-1');
//кнопка year-2
const inYearBtn2 = document.getElementById('inyear-2');
//кнопка year-3
const inYearBtn3 = document.getElementById('inyear-3');
//кнопка year-4
const inYearBtn4 = document.getElementById('inyear-4');
//кнопка year-5
const inYearBtn5 = document.getElementById('inyear-5');
//кнопка year-6
const inYearBtn6 = document.getElementById('inyear-6');
//кнопка year-7
const inYearBtn7 = document.getElementById('inyear-7');
//кнопка year-8
const inYearBtn8 = document.getElementById('inyear-8');
//кнопка year-9
const inYearBtn9 = document.getElementById('inyear-9');
//кнопка year-10
const inYearBtn10 = document.getElementById('inyear-10');
//кнопка year-11
const inYearBtn11 = document.getElementById('inyear-11');
//кнопка year-12
const inYearBtn12 = document.getElementById('inyear-12');
//кнопка year-13
const inYearBtn13 = document.getElementById('inyear-13');
//кнопка year-14
const inYearBtn14 = document.getElementById('inyear-14');
//кнопка year-15
const inYearBtn15 = document.getElementById('inyear-15');
//кнопка year-16
const inYearBtn16 = document.getElementById('inyear-16');
//кнопка year-17
const inYearBtn17 = document.getElementById('inyear-17');
//кнопка year-18
const inYearBtn18 = document.getElementById('inyear-18');
//кнопка year-19
const inYearBtn19 = document.getElementById('inyear-19');
//кнопка year-20
const inYearBtn20 = document.getElementById('inyear-20');
//кнопка year-21
const inYearBtn21 = document.getElementById('inyear-21');
//кнопка year-22
const inYearBtn22 = document.getElementById('inyear-22');
//кнопка year-23
const inYearBtn23 = document.getElementById('inyear-23');
//кнопка year-24
const inYearBtn24 = document.getElementById('inyear-24');
//кнопка year-25
const inYearBtn25 = document.getElementById('inyear-25');

  // console.log(inYearBtn1);
if(!!inYearBtn1){
   inYearBtn1.addEventListener('input',()=>{
    sideBar.classList.remove('visible');
    sideBar.classList.remove('none');
    cardAll.forEach(function(item){
      item.classList.remove('select');
      item.classList.remove('select1');
      item.classList.remove('select2');
      item.classList.remove('select3');
      item.classList.remove('select4');
      item.classList.remove('select5');
      item.classList.remove('select6');
      item.classList.remove('select7');
      if(item.getAttribute("data-year") == "data-year = year-1"){
        item.classList.remove("none");
      }else{
        item.classList.add("none");
      }
        
    })
      
  })
}

if(!!inYearBtn2){
   inYearBtn2.addEventListener('input',()=>{
    sideBar.classList.remove('visible');
    sideBar.classList.remove('none');
    cardAll.forEach(function(item){
      item.classList.remove('select');
      item.classList.remove('select1');
      item.classList.remove('select2');
      item.classList.remove('select3');
      item.classList.remove('select4');
      item.classList.remove('select5');
      item.classList.remove('select6');
      item.classList.remove('select7');
      if(item.getAttribute("data-year") == "data-year = year-2" ){
        item.classList.remove("none");
      }else{
        item.classList.add("none");
      }
        
    })
      
  })
}

if(!!inYearBtn3){
   inYearBtn3.addEventListener('input',()=>{
    sideBar.classList.remove('visible');
    sideBar.classList.remove('none');
    cardAll.forEach(function(item){
      item.classList.remove('select');
      item.classList.remove('select1');
      item.classList.remove('select2');
      item.classList.remove('select3');
      item.classList.remove('select4');
      item.classList.remove('select5');
      item.classList.remove('select6');
      item.classList.remove('select7');
      if(item.getAttribute("data-year") == "data-year = year-3" ){
        item.classList.remove("none");
      }else{
        item.classList.add("none");
      }
        
    })
      
  })
}

if(!!inYearBtn4){
   inYearBtn4.addEventListener('input',()=>{
    sideBar.classList.remove('visible');
    sideBar.classList.remove('none');
    cardAll.forEach(function(item){
      item.classList.remove('select');
      item.classList.remove('select1');
      item.classList.remove('select2');
      item.classList.remove('select3');
      item.classList.remove('select4');
      item.classList.remove('select5');
      item.classList.remove('select6');
      item.classList.remove('select7');
      if(item.getAttribute("data-year") == "data-year = year-4" ){
        item.classList.remove("none");
      }else{
        item.classList.add("none");
      }
        
    })
      
  })
}

if(!!inYearBtn5){
   inYearBtn5.addEventListener('input',()=>{
    sideBar.classList.remove('visible');
    sideBar.classList.remove('none');
    cardAll.forEach(function(item){
      item.classList.remove('select');
      item.classList.remove('select1');
      item.classList.remove('select2');
      item.classList.remove('select3');
      item.classList.remove('select4');
      item.classList.remove('select5');
      item.classList.remove('select6');
      item.classList.remove('select7');
      if(item.getAttribute("data-year") == "data-year = year-5" ){
        item.classList.remove("none");
      }else{
        item.classList.add("none");
      }
        
    })
      
  })
}

if(!!inYearBtn6){
   inYearBtn6.addEventListener('input',()=>{
    sideBar.classList.remove('visible');
    sideBar.classList.remove('none');
    cardAll.forEach(function(item){
      item.classList.remove('select');
      item.classList.remove('select1');
      item.classList.remove('select2');
      item.classList.remove('select3');
      item.classList.remove('select4');
      item.classList.remove('select5');
      item.classList.remove('select6');
      item.classList.remove('select7');
      if(item.getAttribute("data-year") == "data-year = year-6"){
        item.classList.remove("none");
      }else{
        item.classList.add("none");
      }
        
    })
      
  })
}

if(!!inYearBtn7){
   inYearBtn7.addEventListener('input',()=>{
    sideBar.classList.remove('visible');
    sideBar.classList.remove('none');
    cardAll.forEach(function(item){
      item.classList.remove('select');
      item.classList.remove('select1');
      item.classList.remove('select2');
      item.classList.remove('select3');
      item.classList.remove('select4');
      item.classList.remove('select5');
      item.classList.remove('select6');
      item.classList.remove('select7');
      if(item.getAttribute("data-year") == "data-year = year-7"){
        item.classList.remove("none");
      }else{
        item.classList.add("none");
      }
        
    })
      
  })
}

if(!!inYearBtn8){
   inYearBtn8.addEventListener('input',()=>{
    sideBar.classList.remove('visible');
    sideBar.classList.remove('none');
    cardAll.forEach(function(item){
      item.classList.remove('select');
      item.classList.remove('select1');
      item.classList.remove('select2');
      item.classList.remove('select3');
      item.classList.remove('select4');
      item.classList.remove('select5');
      item.classList.remove('select6');
      item.classList.remove('select7');      
      if(item.getAttribute("data-year") == "data-year = year-8"){
        item.classList.remove("none");
      }else{
        item.classList.add("none");
      }
        
    })
      
  })
}

if(!!inYearBtn9){
   inYearBtn9.addEventListener('input',()=>{
    sideBar.classList.remove('visible');
    sideBar.classList.remove('none');
    cardAll.forEach(function(item){
      item.classList.remove('select');
      item.classList.remove('select1');
      item.classList.remove('select2');
      item.classList.remove('select3');
      item.classList.remove('select4');
      item.classList.remove('select5');
      item.classList.remove('select6');
      item.classList.remove('select7');      
      if(item.getAttribute("data-year") == "data-year = year-9"){
        item.classList.remove("none");
      }else{
        item.classList.add("none");
      }
        
    })
      
  })
}

if(!!inYearBtn10){
   inYearBtn10.addEventListener('input',()=>{
    sideBar.classList.remove('visible');
    sideBar.classList.remove('none');
    cardAll.forEach(function(item){
      item.classList.remove('select');
      item.classList.remove('select1');
      item.classList.remove('select2');
      item.classList.remove('select3');
      item.classList.remove('select4');
      item.classList.remove('select5');
      item.classList.remove('select6');
      item.classList.remove('select7');      
      if(item.getAttribute("data-year") == "data-year = year-10"){
        item.classList.remove("none");
      }else{
        item.classList.add("none");
      }
        
    })
      
  })
}

if(!!inYearBtn11){
   inYearBtn11.addEventListener('input',()=>{
    sideBar.classList.remove('visible');
    sideBar.classList.remove('none');
    cardAll.forEach(function(item){
      item.classList.remove('select');
      item.classList.remove('select1');
      item.classList.remove('select2');
      item.classList.remove('select3');
      item.classList.remove('select4');
      item.classList.remove('select5');
      item.classList.remove('select6');
      item.classList.remove('select7');
      if(item.getAttribute("data-year") == "data-year = year-11"){
        item.classList.remove("none");
      }else{
        item.classList.add("none");
      }
        
    })
      
  })
}

if(!!inYearBtn12){
   inYearBtn12.addEventListener('input',()=>{
    sideBar.classList.remove('visible');
    sideBar.classList.remove('none');
    cardAll.forEach(function(item){
      item.classList.remove('select');
      item.classList.remove('select1');
      item.classList.remove('select2');
      item.classList.remove('select3');
      item.classList.remove('select4');
      item.classList.remove('select5');
      item.classList.remove('select6');
      item.classList.remove('select7');
      if(item.getAttribute("data-year") == "data-year = year-12"){
        item.classList.remove("none");
      }else{
        item.classList.add("none");
      }
        
    })
      
  })
}

if(!!inYearBtn13){
   inYearBtn13.addEventListener('input',()=>{
    sideBar.classList.remove('visible');
    sideBar.classList.remove('none');
    cardAll.forEach(function(item){
      item.classList.remove('select');
      item.classList.remove('select1');
      item.classList.remove('select2');
      item.classList.remove('select3');
      item.classList.remove('select4');
      item.classList.remove('select5');
      item.classList.remove('select6');
      item.classList.remove('select7');
      if(item.getAttribute("data-year") == "data-year = year-13"){
        item.classList.remove("none");
      }else{
        item.classList.add("none");
      }
        
    })
      
  })
}

if(!!inYearBtn14){
   inYearBtn14.addEventListener('input',()=>{
    sideBar.classList.remove('visible');
    sideBar.classList.remove('none');
    cardAll.forEach(function(item){
      item.classList.remove('select');
      item.classList.remove('select1');
      item.classList.remove('select2');
      item.classList.remove('select3');
      item.classList.remove('select4');
      item.classList.remove('select5');
      item.classList.remove('select6');
      item.classList.remove('select7');
      if(item.getAttribute("data-year") == "data-year = year-14"){
        item.classList.remove("none");
      }else{
        item.classList.add("none");
      }
        
    })
      
  })
}

if(!!inYearBtn15){
   inYearBtn15.addEventListener('input',()=>{
    sideBar.classList.remove('visible');
    sideBar.classList.remove('none');
    cardAll.forEach(function(item){
      item.classList.remove('select');
      item.classList.remove('select1');
      item.classList.remove('select2');
      item.classList.remove('select3');
      item.classList.remove('select4');
      item.classList.remove('select5');
      item.classList.remove('select6');
      item.classList.remove('select7');
      if(item.getAttribute("data-year") == "data-year = year-15"){
        item.classList.remove("none");
      }else{
        item.classList.add("none");
      }
        
    })
      
  })
}

if(!!inYearBtn16){
   inYearBtn16.addEventListener('input',()=>{
    sideBar.classList.remove('visible');
    sideBar.classList.remove('none');
    cardAll.forEach(function(item){
      item.classList.remove('select');
      item.classList.remove('select1');
      item.classList.remove('select2');
      item.classList.remove('select3');
      item.classList.remove('select4');
      item.classList.remove('select5');
      item.classList.remove('select6');
      item.classList.remove('select7');
      if(item.getAttribute("data-year") == "data-year = year-16"){
        item.classList.remove("none");
      }else{
        item.classList.add("none");
      }
        
    })
      
  })
}

if(!!inYearBtn17){
   inYearBtn17.addEventListener('input',()=>{
    sideBar.classList.remove('visible');
    sideBar.classList.remove('none');
    cardAll.forEach(function(item){
      item.classList.remove('select');
      item.classList.remove('select1');
      item.classList.remove('select2');
      item.classList.remove('select3');
      item.classList.remove('select4');
      item.classList.remove('select5');
      item.classList.remove('select6');
      item.classList.remove('select7');
      if(item.getAttribute("data-year") == "data-year = year-17"){
        item.classList.remove("none");
      }else{
        item.classList.add("none");
      }
        
    })
      
  })
}

if(!!inYearBtn18){
   inYearBtn18.addEventListener('input',()=>{
    sideBar.classList.remove('visible');
    sideBar.classList.remove('none');
    cardAll.forEach(function(item){
      item.classList.remove('select');
      item.classList.remove('select1');
      item.classList.remove('select2');
      item.classList.remove('select3');
      item.classList.remove('select4');
      item.classList.remove('select5');
      item.classList.remove('select6');
      item.classList.remove('select7');
      if(item.getAttribute("data-year") == "data-year = year-18"){
        item.classList.remove("none");
      }else{
        item.classList.add("none");
      }
        
    })
      
  })
}

if(!!inYearBtn19){
   inYearBtn19.addEventListener('input',()=>{
    sideBar.classList.remove('visible');
    sideBar.classList.remove('none');
    cardAll.forEach(function(item){
      item.classList.remove('select');
      item.classList.remove('select1');
      item.classList.remove('select2');
      item.classList.remove('select3');
      item.classList.remove('select4');
      item.classList.remove('select5');
      item.classList.remove('select6');
      item.classList.remove('select7');
      if(item.getAttribute("data-year") == "data-year = year-19"){
        item.classList.remove("none");
      }else{
        item.classList.add("none");
      }
        
    })
      
  })
}

if(!!inYearBtn20){
   inYearBtn20.addEventListener('input',()=>{
    sideBar.classList.remove('visible');
    sideBar.classList.remove('none');
    cardAll.forEach(function(item){
      item.classList.remove('select');
      item.classList.remove('select1');
      item.classList.remove('select2');
      item.classList.remove('select3');
      item.classList.remove('select4');
      item.classList.remove('select5');
      item.classList.remove('select6');
      item.classList.remove('select7');
      if(item.getAttribute("data-year") == "data-year = year-20"){
        item.classList.remove("none");
      }else{
        item.classList.add("none");
      }
        
    })
      
  })
}

if(!!inYearBtn21){
   inYearBtn21.addEventListener('input',()=>{
    sideBar.classList.remove('visible');
    sideBar.classList.remove('none');
    cardAll.forEach(function(item){
      item.classList.remove('select');
      item.classList.remove('select1');
      item.classList.remove('select2');
      item.classList.remove('select3');
      item.classList.remove('select4');
      item.classList.remove('select5');
      item.classList.remove('select6');
      item.classList.remove('select7');
      if(item.getAttribute("data-year") == "data-year = year-21"){
        item.classList.remove("none");
      }else{
        item.classList.add("none");
      }
        
    })
      
  })
}

if(!!inYearBtn22){
   inYearBtn22.addEventListener('input',()=>{
    sideBar.classList.remove('visible');
    sideBar.classList.remove('none');
    cardAll.forEach(function(item){
      item.classList.remove('select');
      item.classList.remove('select1');
      item.classList.remove('select2');
      item.classList.remove('select3');
      item.classList.remove('select4');
      item.classList.remove('select5');
      item.classList.remove('select6');
      item.classList.remove('select7');
      if(item.getAttribute("data-year") == "data-year = year-22"){
        item.classList.remove("none");
      }else{
        item.classList.add("none");
      }
        
    })
      
  })
}

if(!!inYearBtn23){
   inYearBtn23.addEventListener('input',()=>{
    sideBar.classList.remove('visible');
    sideBar.classList.remove('none');
    cardAll.forEach(function(item){
      item.classList.remove('select');
      item.classList.remove('select1');
      item.classList.remove('select2');
      item.classList.remove('select3');
      item.classList.remove('select4');
      item.classList.remove('select5');
      item.classList.remove('select6');
      item.classList.remove('select7');
      if(item.getAttribute("data-year") == "data-year = year-23"){
        item.classList.remove("none");
      }else{
        item.classList.add("none");
      }
        
    })
      
  })
}

if(!!inYearBtn24){
   inYearBtn24.addEventListener('input',()=>{
    sideBar.classList.remove('visible');
    sideBar.classList.remove('none');
    cardAll.forEach(function(item){
      item.classList.remove('select');
      item.classList.remove('select1');
      item.classList.remove('select2');
      item.classList.remove('select3');
      item.classList.remove('select4');
      item.classList.remove('select5');
      item.classList.remove('select6');
      item.classList.remove('select7');
      if(item.getAttribute("data-year") == "data-year = year-24"){
        item.classList.remove("none");
      }else{
        item.classList.add("none");
      }
        
    })
      
  })
}

if(!!inYearBtn25){
   inYearBtn25.addEventListener('input',()=>{
    sideBar.classList.remove('visible');
    sideBar.classList.remove('none');
    cardAll.forEach(function(item){
      item.classList.remove('select');
      item.classList.remove('select1');
      item.classList.remove('select2');
      item.classList.remove('select3');
      item.classList.remove('select4');
      item.classList.remove('select5');
      item.classList.remove('select6');
      item.classList.remove('select7');
      if(item.getAttribute("data-year") == "data-year = year-25"){
        item.classList.remove("none");
      }else{
        item.classList.add("none");
      }
        
    })
      
  })
}

if(!!inYearBtn26){
  inYearBtn26.checked = true;
  inYearBtn26.addEventListener('input',()=>{
    sideBar.classList.remove('visible');
    sideBar.classList.remove('none');
    cardAll.forEach((item)=>{
      item.classList.remove('select');
      item.classList.remove('select1');
      item.classList.remove('select2');
      item.classList.remove('select3');
      item.classList.remove('select4');
      item.classList.remove('select5');
      item.classList.remove('select6');
      item.classList.remove('select7');
      item.classList.remove("none");
    })
  })
    
  }
  // all buttons nav-pagination__btn
  const pagBtnAll=document.querySelectorAll('.nav-pagination__btn');
  // console.log(pagBtnAll);
  pagBtnAll.forEach((item)=>{
    if(!!item){
      // console.log('ИСТИНА');
      item.addEventListener('click',(event)=>{
        // console.log(event.target.id);
        console.log(event);
        
        if(event.target.id=="pgbtn-1"){
          // console.log('ИСТИНА');
          cardAll.forEach((item)=>{
            item.classList.remove('select1');
            item.classList.remove('select2');
            item.classList.remove('select3');
            item.classList.remove('select4');
            item.classList.remove('select5');
            item.classList.remove('select6');
          })
          cardAll.forEach((item)=>{
            item.classList.add('select');
          })
          pagBtnAll.forEach((item,index)=>{
            item.classList.remove('active');
            if(index==0){
              item.classList.add('active');
            }
          })
          
        }

        if(event.target.id=="pgbtn-2"){
          cardAll.forEach((item)=>{
            item.classList.remove('select');
            item.classList.remove('select2');
            item.classList.remove('select3');
            item.classList.remove('select4');
            item.classList.remove('select5');
            item.classList.remove('select6');
          })
          cardAll.forEach((item)=>{
            item.classList.add('select1');
          })

          pagBtnAll.forEach((item,index)=>{
            item.classList.remove('active');
            if(index==1){
              item.classList.add('active');
            }
          })

        }

        if(event.target.id=="pgbtn-3"){
          cardAll.forEach((item)=>{
            item.classList.remove('select');
            item.classList.remove('select1');
            item.classList.remove('select3');
            item.classList.remove('select4');
            item.classList.remove('select5');
            item.classList.remove('select6');
          })
          cardAll.forEach((item)=>{
            item.classList.add('select2');
          })

          pagBtnAll.forEach((item,index)=>{
            item.classList.remove('active');
            if(index==2){
              item.classList.add('active');
            }
          })

        }

        if(event.target.id=="pgbtn-4"){
          cardAll.forEach((item)=>{
            item.classList.remove('select');
            item.classList.remove('select1');
            item.classList.remove('select2');
            item.classList.remove('select4');
            item.classList.remove('select5');
            item.classList.remove('select6');
          })
          cardAll.forEach((item)=>{
            item.classList.add('select3');
          })

          pagBtnAll.forEach((item,index)=>{
            item.classList.remove('active');
            if(index==3){
              item.classList.add('active');
            }
          })

        }

        if(event.target.id=="pgbtn-5"){
          cardAll.forEach((item)=>{
            item.classList.remove('select');
            item.classList.remove('select1');
            item.classList.remove('select2');
            item.classList.remove('select3');
            item.classList.remove('select5');
            item.classList.remove('select6');
          })
          cardAll.forEach((item)=>{
            item.classList.add('select4');
          })

          pagBtnAll.forEach((item,index)=>{
            item.classList.remove('active');
            if(index==4){
              item.classList.add('active');
            }
          })

        }

        if(event.target.id=="pgbtn-6"){
          cardAll.forEach((item)=>{
            item.classList.remove('select');
            item.classList.remove('select1');
            item.classList.remove('select2');
            item.classList.remove('select4');
          })
          cardAll.forEach((item)=>{
            item.classList.add('select5');
          })

          pagBtnAll.forEach((item,index)=>{
            item.classList.remove('active');
            if(index==5){
              item.classList.add('active');
            }
          })

        }

        if(event.target.id=="pgbtn-7"){
          cardAll.forEach((item)=>{
            item.classList.remove('select');
            item.classList.remove('select1');
            item.classList.remove('select2');
            item.classList.remove('select4');
            item.classList.remove('select5');
          })
          cardAll.forEach((item)=>{
            item.classList.add('select6');
          })

          pagBtnAll.forEach((item,index)=>{
            item.classList.remove('active');
            if(index==6){
              item.classList.add('active');
            }
          })

        }
        
      })
      
    }

  })
  
}



export default createContent;