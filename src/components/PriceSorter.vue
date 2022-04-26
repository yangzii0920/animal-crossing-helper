<script>
import { fishService } from "@/services/FishService.ts";

export default {
  data() {
    return {
        list: [],
        activeInput: ""
    }
  },
  methods: {
    add() {
        const find = fishService.findFish(this.activeInput)
        if (typeof find === 'undefined') {
            alert(`can't find item ${this.activeInput}`)
        } else {
            this.list.push({"name": this.activeInput, "price": find["price"]})
            this.activeInput = ""
        }
    },
    remove(i) {
        this.list.splice(i, 1);
    },
    sort() {
        this.list.sort((item1, item2) => {
            if (item1.price < item2.price)
                return 1
            if (item1.price > item2.price)
                return -1
            if (item1.name > item2.price)
                return 1
            else return -1
        });
    },
  }
}
</script>

<template>
    <p v-for="(item, index) of list">
        <input disabled v-model="item.name"> {{ item.price }}
        <button v-if="list.length > 0" @click="remove(index)">Remove</button>
    </p>
    <p v-if="list.length >= 0">
        <input v-model="activeInput">
        <button @click="add">Add</button>
    </p>
    <br/>
    <button @click="sort">Sort</button>
    <br/>

</template>
