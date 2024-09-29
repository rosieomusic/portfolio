<template>
    <div>
        <h2>Software Portfolio</h2>
        <div class="repos">
            <RepoComponent v-for="project in data" :key="project.id"
            :title="project.name"
            :htmlUrl="project.html_url"
            >

            </RepoComponent>

        </div>
    </div>
</template>

<script>
import githubService from '../services/GithubService'
import RepoComponent from '../components/RepoComponent.vue'
export default {
    components: { RepoComponent },
    data(){
        return {
            data: null
        }
    },
    created(){
        githubService.getRepos() //async communication
        .then((response) => {
            console.log(response.data);
            this.data = response.data.filter (project => {
                return (
                    project.name === 'pawswipe' ||
                    project.name === 'DB_TEST' ||
                    project.name === 'brat-calculator' ||
                    project.name === 'gig_tracker_cli'
                )
            })
        })


    }
}

</script>

<style scoped>

</style>