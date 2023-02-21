<script>
    import Me from "../components/me.svelte";
    import MainText from "../components/mainText.svelte";
    import Contact from "../components/contact.svelte";
</script>

<div id = "home">
    <MainText/>
    <Me/>
</div>
<div id = "contact">
    <Contact/>
</div>

<style>
    #home{
        padding-top: 10vh;
        padding-bottom: 10vh;
    }
    #contact{
        padding-top: 10vh;
        padding-bottom: 10vh;
    }
</style>