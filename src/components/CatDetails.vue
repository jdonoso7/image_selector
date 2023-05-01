<template>
  <div class="item-details" v-if="item && item.id">
    <h2>{{ item.id }}</h2>
    <img :src="item.url" @click="(incrementClicks(item))" />
    <p>Clicks: {{ item.timesClicked }}</p>
  </div>
  <div class="no-item-selected" v-else>
    <p>No item selected</p>
  </div>
</template>

<script>
export default {
    name:'CatDetails',
    props: {
        item: Object
    },
    methods: {
        incrementClicks(item) {
            item.timesClicked = item.timesClicked +1;
        }
    }
}
</script>