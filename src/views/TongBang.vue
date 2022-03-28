<template>
    <div>
    <h2>实时热点,每5分钟更新一次</h2>
        <div class="header">  
            <dl v-for="(item,index) in arr" :key="index">
                <dd><i>{{index+1}}</i>{{item}}</dd>
            </dl>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default ({
        name: "TongBang",
        data(){
            return {
                arr:null
            }
        },
        methods: {
            async getContent(){
                let {data} = await axios.get('/api/PaiHang/TongBang')
                this.arr = data
            }
        },
        created(){
            this.getContent()
        }
    })
</script>
<style scoped>
    *{padding:0;margin:0;border:0;}
    li {list-style:none}
    h2 {
        font-size:.25rem;
        text-align:left;
        height:.85rem;
        line-height:.85rem;
        width:100%;
        background:#f0eeef;
        color:#ccc;
        padding-left:.5rem;
    }
    .header {
        width:100%;
        height:16rem;
        font-size:.25rem;
        margin:0 auto;
        background:#fff;
        padding-left:.3rem;
        box-sizing:border-box;
    }
    i {
        font-style:normal;
        padding:0 .2rem;
        font-weight:bold;
        color:orange;
        font-size:.35rem;
    }
    dl dd {
        padding:.3rem 0;
        text-align:left;
        width:7rem;
        border-bottom:1px solid #ccc;
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
    }
</style>