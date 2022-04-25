<script>
const fishApi = "https://acnhapi.com/v1a/fish";

export default {
  data() {
    return {
        list: [1],
        fish: [],
        price: -1
    }
  },
  created() {
    this.initFish()
  },
  methods: {
    add(){
        this.list.push(this.list.length + 1)
    },
    remove(i){
        this.list.splice(i, 1);
    },
    async initFish() {
      this.fish = (await (await fetch(fishApi)).json()).map(f => {
        return {"name": f["file-name"], "price": f["price"]}
      })

      const fi = this.fish.find(f => f["name"] === "bitterling")
      if (fi !== null) {
        this.price = JSON.parse(JSON.stringify(fi))["price"]
      }
    },

  }
}
</script>

<template>
    <p v-for="(item, index) of list">{{ index }}
        <input v-model="list[index]"> {{ item }}
        <button v-if="index + 1 == list.length" @click="add">Add</button>
        <button v-if="list.length > 1" @click="remove(index)">Remove</button>
    </p>
    <br/>
    price = {{ this.price }}
    <br/>
    fish = {{ fish }}

</template>