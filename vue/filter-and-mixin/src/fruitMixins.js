export const fruitMixins = {
  data() {
    return {
      text: 'Hello there!',
      fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
      filterText: ''
    }
  },
  computed: {
    filteredFuits() {
      return this.fruits.filter(fruit => fruit.match(this.filterText))
    }
  }
}
