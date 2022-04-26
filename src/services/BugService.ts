import axios from "axios";

const bugApi = "https://acnhapi.com/v1a/bugs";

class BugService {

    bugData = [];

    constructor() {
        axios.get(bugApi).then(success => {
            const res = success.data;
            this.bugData = res.map(bug => {
                return {"name": bug["name"]["name-USen"], "price": bug["price"]};
            });
        }).catch(error => {
            console.error(error);
        });
    }

    findBug(name: string) {
        return this.bugData.find(f => f["name"] === name);
    }
}

export const bugService = new BugService();