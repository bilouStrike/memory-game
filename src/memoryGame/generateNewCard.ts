import { GridItemT } from "./type";

const shuffle = (data: GridItemT[]) => data.sort(() => Math.random() - 0.5);
const data: string[] = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25"
];

const getRandomFromArray = (max: number) => {
    const items: string[] = [];
    while (max > 0) {
        const item = data[Math.floor(Math.random() * data.length)];
        if (!items.includes(item)) {
            items.push(item);
            max--;
        }
    }
    return items;
};

const generateNewCard = (dimension: number) => {
    const result:GridItemT[] = [];
    const randomItems = getRandomFromArray(dimension);
    for (let i=0; i < dimension; i++) {
        const randomItem1 = {
            id: Date.now(),
            value: randomItems[i],
            status: false
        };
        // the some item with different id
        const randomItem2 = {...randomItem1, id: Date.now()}
        result.push(randomItem1, randomItem2)
    }
    return shuffle(result);
}

export default generateNewCard;