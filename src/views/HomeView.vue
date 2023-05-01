<template>
    <div class="container">
        <div class="left-side">
            <CatsNames :items="listImages" @clickItem="showItem" />
        </div>
        <div class="right-side">
            <CatDetails :item="selectedCat"/>
        </div>
    </div>
</template>
<script>
import CatsNames from '@/components/CatsNames.vue'
import CatDetails from '@/components/CatDetails.vue'
import { images } from '@/api';

export default {
    name: 'HomeView',
    components: {
        CatsNames,
        CatDetails
    },
    data() {
        return {
            listImages: [],
            selectedCat: {}
        }
    },
    methods: {
        async fetchListImages() {
            const list = await images.list();
            let listCats = list.map((item) => {return {id: item.id, url: item.url, timesClicked: 0}})
            this.$set(this, 'listImages', listCats)
        },
        showItem(item) {
            this.$set(this, 'selectedCat', item);
        },

    },

    mounted() {
        this.fetchListImages();
    }
}

</script>