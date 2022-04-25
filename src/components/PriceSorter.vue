<script>
const fishApi = "https://acnhapi.com/v1a/fish";

export default {
  data() {
    return {
        list: [],
        fish: [],
        activeInput: ""
    }
  },
  created() {
    this.initFish()
  },
  methods: {
    add() {
        const find = this.fish.find(f => f["name"] === this.activeInput)
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
    async initFish() {
      this.fish = (await (await fetch(fishApi)).json()).map(f => {
            return {"name": f["name"]["name-USen"], "price": f["price"]}
        })
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
    item = {{ list }}
    <br/>
    fish = {{ fish }}
</template>