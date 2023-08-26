const CATEGORIES = [
  {
    id: 1,
    label: "General",
    value: "general",
  },
  {
    id: 2,
    label: "Business",
    value: "business",
  },
  {
    id: 3,
    label: "Entertainment",
    value: "entertainment",
  },
  {
    id: 4,
    label: "Health",
    value: "health",
  },
  {
    id: 5,
    label: "Science",
    value: "science",
  },
  {
    id: 6,
    label: "Sports",
    value: "sports",
  },
  {
    id: 7,
    label: "Technology",
    value: "technology",
  },
];

const COUNTRIES = [
  {
    name: "United Arab Emirates",
    code: "ae",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/23px-Flag_of_the_United_Arab_Emirates.svg.png",
  },
  {
    name: "Argentina",
    code: "ar",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/23px-Flag_of_Argentina.svg.png",
  },
  {
    name: "Austria",
    code: "at",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_Austria.svg/23px-Flag_of_Austria.svg.png",
  },
  {
    name: "Australia",
    code: "au",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/23px-Flag_of_Australia_%28converted%29.svg.png",
  },
  {
    name: "Belgium",
    code: "be",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_Belgium_%28civil%29.svg/23px-Flag_of_Belgium_%28civil%29.svg.png",
  },
  {
    name: "Bulgaria",
    code: "bg",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Bulgaria.svg/23px-Flag_of_Bulgaria.svg.png",
  },
  {
    name: "Brazil",
    code: "br",
    flag: "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/22px-Flag_of_Brazil.svg.png",
  },
  {
    name: "Canada",
    code: "ca",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/23px-Flag_of_Canada_%28Pantone%29.svg.png",
  },
  {
    name: "Switzerland",
    code: "ch",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Flag_of_Switzerland_%28Pantone%29.svg/16px-Flag_of_Switzerland_%28Pantone%29.svg.png",
  },
  {
    name: "China",
    code: "cn",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/23px-Flag_of_the_People%27s_Republic_of_China.svg.png",
  },
  {
    name: "Colombia",
    code: "co",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/23px-Flag_of_Colombia.svg.png",
  },
  {
    name: "Cuba",
    code: "cu",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Flag_of_Cuba.svg/23px-Flag_of_Cuba.svg.png",
  },
  {
    name: "Czech Republic",
    code: "cz",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Czech_Republic.svg/23px-Flag_of_the_Czech_Republic.svg.png",
  },
  {
    name: "Germany",
    code: "de",
    flag: "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/23px-Flag_of_Germany.svg.png",
  },
  {
    name: "Egypt",
    code: "eg",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/23px-Flag_of_Egypt.svg.png",
  },
  {
    name: "France",
    code: "fr",
    flag: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/23px-Flag_of_France.svg.png",
  },
  {
    name: "Great Britain",
    code: "gb",
    flag: "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/23px-Flag_of_the_United_Kingdom.svg.png",
  },
  {
    name: "Greece",
    code: "gr",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/23px-Flag_of_Greece.svg.png",
  },
  {
    name: "Hong Kong",
    code: "hk",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Flag_of_Hong_Kong.svg/23px-Flag_of_Hong_Kong.svg.png",
  },
  {
    name: "Hungary",
    code: "hu",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Flag_of_Hungary.svg/23px-Flag_of_Hungary.svg.png",
  },
  {
    name: "Indonesia",
    code: "id",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/23px-Flag_of_Indonesia.svg.png",
  },
  {
    name: "Ireland",
    code: "ie",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Flag_of_Ireland.svg/23px-Flag_of_Ireland.svg.png",
  },
  {
    name: "Israel",
    code: "il",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Israel.svg/21px-Flag_of_Israel.svg.png",
  },
  {
    name: "India",
    code: "in",
    flag: "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/23px-Flag_of_India.svg.png",
  },
  {
    name: "Italy",
    code: "it",
    flag: "https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/23px-Flag_of_Italy.svg.png",
  },
  {
    name: "Japan",
    code: "jp",
    flag: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/23px-Flag_of_Japan.svg.png",
  },
  {
    name: "South Korea",
    code: "kr",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/23px-Flag_of_South_Korea.svg.png",
  },
  {
    name: "Lithuania",
    code: "lt",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Flag_of_Lithuania.svg/23px-Flag_of_Lithuania.svg.png",
  },
  {
    name: "Latvia",
    code: "lv",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Latvia.svg/23px-Flag_of_Latvia.svg.png",
  },
  {
    name: "Morocco",
    code: "ma",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Morocco.svg/23px-Flag_of_Morocco.svg.png",
  },
  {
    name: "Mexico",
    code: "mx",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/23px-Flag_of_Mexico.svg.png",
  },
  {
    name: "Malaysia",
    code: "my",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Flag_of_Malaysia.svg/23px-Flag_of_Malaysia.svg.png",
  },
  {
    name: "Nigeria",
    code: "ng",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_Nigeria.svg/23px-Flag_of_Nigeria.svg.png",
  },
  {
    name: "Netherlands",
    code: "nl",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/23px-Flag_of_the_Netherlands.svg.png",
  },
  {
    name: "Norway",
    code: "no",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/21px-Flag_of_Norway.svg.png",
  },
  {
    name: "New Zealand",
    code: "nz",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_New_Zealand.svg/23px-Flag_of_New_Zealand.svg.png",
  },
  {
    name: "Philippines",
    code: "ph",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_the_Philippines.svg/23px-Flag_of_the_Philippines.svg.png",
  },
  {
    name: "Poland",
    code: "pl",
    flag: "https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Flag_of_Poland.svg/23px-Flag_of_Poland.svg.png",
  },
  {
    name: "Portugal",
    code: "pt",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/23px-Flag_of_Portugal.svg.png",
  },
  {
    name: "Romania",
    code: "ro",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Romania.svg/23px-Flag_of_Romania.svg.png",
  },
  {
    name: "Serbia",
    code: "rs",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Flag_of_Serbia.svg/23px-Flag_of_Serbia.svg.png",
  },
  {
    name: "Russia",
    code: "ru",
    flag: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/23px-Flag_of_Russia.svg.png",
  },
  {
    name: "Saudi Arabia",
    code: "sa",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/23px-Flag_of_Saudi_Arabia.svg.png",
  },
  {
    name: "Sweden",
    code: "se",
    flag: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Flag_of_Sweden.svg/23px-Flag_of_Sweden.svg.png",
  },
  {
    name: "Singapore",
    code: "sg",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Singapore.svg/23px-Flag_of_Singapore.svg.png",
  },
  {
    name: "Slovenia",
    code: "si",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Flag_of_Slovenia.svg/23px-Flag_of_Slovenia.svg.png",
  },
  {
    name: "Slovakia",
    code: "sk",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_of_Slovakia.svg/23px-Flag_of_Slovakia.svg.png",
  },
  {
    name: "Thailand",
    code: "th",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Thailand.svg/23px-Flag_of_Thailand.svg.png",
  },
  {
    name: "Turkey",
    code: "tr",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/23px-Flag_of_Turkey.svg.png",
  },
  {
    name: "Taiwan",
    code: "tw",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Flag_of_the_Republic_of_China.svg/23px-Flag_of_the_Republic_of_China.svg.png",
  },
  {
    name: "Ukraine",
    code: "ua",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/23px-Flag_of_Ukraine.svg.png",
  },
  {
    name: "United States",
    code: "us",
    flag: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/23px-Flag_of_the_United_States.svg.png",
  },
  {
    name: "Venezuela",
    code: "ve",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Flag_of_Venezuela_%28state%29.svg/23px-Flag_of_Venezuela_%28state%29.svg.png",
  },
  {
    name: "South Africa",
    code: "za",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Flag_of_South_Africa.svg/23px-Flag_of_South_Africa.svg.png",
  },
];

export { CATEGORIES, COUNTRIES };
