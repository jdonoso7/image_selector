<template>
  <div class="item-names">
    <h2>Items</h2>
    <ul>
      <li v-for="item in items" :key="item.id" @click="clickItem(item)">
        {{ item.id }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'CatsNames',
    props: {
      items: Array
    },
    methods: {
      clickItem(item) {
        this.$emit('clickItem', item);
      }
    }
}
</script>