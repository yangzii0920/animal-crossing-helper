import axios from "axios";

const seaApi = "https://acnhapi.com/v1a/sea";

class SeaCreatureService {

    seaCreatureData = [];

    constructor() {
        axios.get(seaApi).then(success => {
            const res = success.data;
            this.seaCreatureData = res.map(fish => {
                return {"name": fish["name"]["name-USen"], "price": fish["price"]};
            });
        }).catch(error => {
            console.error(error);
        });
    }

    findSeaCreature(name: string) {
        return this.seaCreatureData.find(f => f["name"] === name);
    }
}

export const seaCreatureService = new SeaCreatureService();