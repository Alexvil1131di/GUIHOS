<template>
    <div>
        <Navigation />
        <nuxt />
        <Footer />
    </div>
</template>
<script>
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
export default {
    components: {
        Navigation,
        Footer
    }
}
</script>