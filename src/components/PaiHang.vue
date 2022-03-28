<template>
    <div class="header">
        <div class="top">
            <img src="../assets/微博热搜.png" alt="">
        </div>
        <div class="back">
            <router-link to="/">
                <img src="../assets/左箭头.png" alt="">
            </router-link>
            <!-- <router-view></router-view> -->
        </div>
        <ul class="list">
            <li>
               <router-link to="/PaiHang/RB" active-class="a"><span>热搜榜</span></router-link> 
               <!-- <router-view></router-view> -->
            </li>
            <li>
               <router-link to="/PaiHang/WB" active-class="a"><span>文娱榜</span></router-link> 
               <!-- <router-view></router-view> -->
            </li>
            <li>
               <router-link to="/PaiHang/YB" active-class="a"><span>要闻榜</span></router-link> 
               <!-- <router-view></router-view> -->
            </li>
            <li>
               <router-link to="/PaiHang/TB" active-class="a"><span>同城榜</span></router-link> 
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
    export default ({
        name: "PaiHang",
        methods: {
            
        }
    })
</script>
<style scoped>
    *{padding:0;margin:0;border:0;}
    li {list-style:none}
    a {
        text-decoration:none;
    }
    .list li .a span{
        color:orange;
        border-bottom:3px solid orange;
    }
    .header {
        width:100%;
        height:16rem;
        font-size:.25rem;
        margin:0 auto;

        position:absolute;
        top:0;
    }
    .top img{
        width:100%;
        height:4.35rem;
    }
    .back {
        position:absolute;
        top:1rem;
        left:.3rem;
    }
    .back img {
        width:.5rem;
        height:.5rem;
    }
    .list {
        width:100%;
        height:.81rem;
        background:#fff;
        display:flex;
        align-items:center;
    }
    .list li {
        flex:1;
    }
    .list li span {
        
        padding-bottom:.1rem;
        /* color:#666; */
    }
</style>