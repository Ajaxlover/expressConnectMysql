<template>
    <div>
        <h3>获取到的远程服务器数据库中的数据</h3>
        <div v-for="(item,index) in stu"  :key="index">
            姓名:{{item.name}}<br>年龄:{{item.age}}
        </div>
    </div>
</template>

<script>
// 导入 axios
import axios from 'axios'
export default {
   data() {
       return {
           stu:[]
       }
   },
    async created() {
       let res = await axios({
                url: 'api/abc',
                method: 'GET'
            })
            console.log(res);
           this.stu = res.data;
    },
}
</script>

<style>

</style>