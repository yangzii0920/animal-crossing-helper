import axios from "axios";

const fishApi = "https://acnhapi.com/v1a/fish";

class FishService {

    fishData = [];

    constructor() {
        axios.get(fishApi).then(success => {
            const res = success.data;
            this.fishData = res.map(fish => {
                return {"name": fish["name"]["name-USen"], "price": fish["price"]};
            });
        }).catch(error => {
            console.error(error);
        });
    }

    findFish(name: string) {
        return this.fishData.find(f => f["name"] === name);
    }
}

export const fishService = new FishService();