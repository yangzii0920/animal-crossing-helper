<script>
import { fishService } from "@/services/FishService.ts";
import { seaCreatureService } from "@/services/SeaCreatureService.ts";
import { bugService } from "@/services/BugService.ts";

export default {
  data() {
    return {
        list: [],
        activeInput: ""
    }
  },
  created() {
    const storedItems = localStorage.getItem('items')
    if (storedItems !== null) {
        this.list = JSON.parse(storedItems)
    }
  },
  methods: {
    updateLocalStorage() {
        if (this.list.length >= 0)
            localStorage.setItem('items', JSON.stringify(this.list))
        else
            localStorage.removeItem('items')
    },
    add() {
        let find = fishService.findFish(this.activeInput)
        if (typeof find !== 'undefined') {
            this.list.push({"name": this.activeInput, "price": find["price"]})
            this.updateLocalStorage()
            this.activeInput = ""
            return
        }
        find = seaCreatureService.findSeaCreature(this.activeInput)
        if (typeof find !== 'undefined') {
            this.list.push({"name": this.activeInput, "price": find["price"]})
            this.updateLocalStorage()
            this.activeInput = ""
            return
        }
        find = bugService.findBug(this.activeInput)
        if (typeof find !== 'undefined') {
            this.list.push({"name": this.activeInput, "price": find["price"]})
            this.updateLocalStorage()
            this.activeInput = ""
            return
        }

        alert(`can't find item ${this.activeInput}`)
    },
    remove(i) {
        this.list.splice(i, 1);
        this.updateLocalStorage()
    },
    sort() {
        this.list.sort((item1, item2) => {
            if (item1.price > item2.price)
                return 1
            if (item1.price < item2.price)
                return -1
            if (item1.name > item2.price)
                return 1
            else return -1
        });
    },
    reset() {
        this.list = [];
        this.updateLocalStorage()
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
        <button @click="reset">Reset</button>
    </p>
    <br/>
    <button @click="sort">Sort</button>
    <br/>

</template>
