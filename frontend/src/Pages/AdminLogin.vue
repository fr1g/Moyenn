<template>
<div class="p-5 container w-full mx-auto default-height grid justify-center justify-items-center align-middle items-center">
    <div class="p-5 bg-zinc-500 bg-opacity-60 hover:bg-opacity-70 shadow hover:shadow-xl transition-all rounded-xl border border-transparent" >
        <form>
            <h1 class="text-2xl p-1 font-bold">Login into the Admin system.<br></h1>
            <h1 class="text-lg p-1.5 opacity-90">If forgot the Passcode, please reset at the node named "m.code" and restart the backend. this requires you have access to the backend. <br></h1>
            <div class="my-5">
                <label for="pwd" class="text-lg">Mot de passe: </label>
                <input type="password" required id="pwd" v-model="this.pwd" class="bg-zinc-400 bg-opacity-30 hover:bg-opacity-50 focus:bg-opacity-90 text-zinc-100 px-1.5 mx-2 text-lg p-1 transition-all border border-zinc-600 rounded-lg shadow hover:shadow-md " />

                <div class="w-1/2 rounded-lg mx-auto mt-8 p-2.5 font-semibold bg-lime-200 bg-opacity-30 hover:bg-opacity-40 active:bg-opacity-20 shadow-sm hover:shadow-md active:shadow-lg transition-all">
                    Login
                </div>
            </div>
        </form>
    </div>

</div>
</template>
<script> // @code
export default {
    name: 'ALogin',
    data () {
        return {
            pwd: '',
        }
    }
}
</script>