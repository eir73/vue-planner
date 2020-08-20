<template>
    <div>
        <div class="add">
            <button
                
            >
                Add day
            </button>
        </div>
        <Day />
    </div>
</template>

<script>
import Day from '@/components/Day'
export default {
    data: () => ({
        days: [
            
        ],
    }),
    async mounted() {

    },
    components: {
        Day
    }
}
</script>