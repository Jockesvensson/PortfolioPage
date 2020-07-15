export default {
    created() {
        this.$root.$on("defocusApp", this.closeDialogues);
    },
    methods: {
        closeDialogues() {
            this.isDialbogueOpen = false;
        }
    }
}