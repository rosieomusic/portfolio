<template>
    <div>
        <h2>
            <div id="title">
        <a :href="htmlUrl" target="_blank">{{ title }}</a>
    </div>
    <div id="img">
        <img :src="getImage" alt="image">   
    </div>

</h2>
</div>
</template>

<script>
export default{
    props: {
        title: String,
        htmlUrl: String
    },
    computed: {
        getImage() {
            return new URL (`../assets/images/${this.title}.png`, import.meta.url);

        }
    }
}

</script>
<style scoped>
img{
    width: 300px;
    height: 300px;
    display: flex;
}

</style>