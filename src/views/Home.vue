<template>
    <div class="btnbox">
        <router-link to="/EchartsMap">
            <button>Echarts魁拔世界地图</button>
        </router-link>
        <router-link to="/Relation">
            <button>魁拔人物关系图</button>
        </router-link>
        <router-link to="/AnychartMap">
            <button>Anychart魁拔世界地图</button>
        </router-link>
    </div>
</template>
<style>
.btnbox{
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    padding: 0;
}
</style>
<script>
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'Home',
    components: {
    },
    data: () => {
        return {
        }
    },
})
</script>
