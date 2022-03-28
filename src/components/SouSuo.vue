<template>
    <div class="header">
         <div class="top">
             <input type="text" placeholder="邓伦偷逃税被追微并罚款1.06亿元">
             <span @click="fn1">取消</span>
         </div>
         <div class="resou">
            <h3>微博热搜</h3>
            <div class="conent">
                <ul>
                    <li>香蜜沉沉烬如霜</li>
                    <li>音乐是张艺兴与喜剧人</li>
                    <li>爱尔眼科</li>
                    <li>冯潇霆说中国足球很牛逼</li>
                    <li>邓伦偷税漏税被形式</li>
                </ul>
                <ul>
                    <li>邓伦抖音账号被封</li>
                    <li>密室大逃脱</li>
                    <li>如何让明星偷税漏税她发的</li>
                    <li>夜旅人</li>
                    <li>
                    
                        <router-link to="/PaiHang/RB">更多热搜 ></router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default ({
        name: "SouSuo",
        methods: {
            fn1(){
                 this.$router.push({path:"/"})
            }
        }
    })
</script>
<style scoped>
    *{padding:0;margin:0;border:0;}
    li {list-style:none;}
    .header {
        width:100%;
        height:10rem;
        font-size:.26rem;
        margin:0 auto;
        position:absolute;
        top:.4rem;
    }
    .top input {
        width:6.25rem;
        height:.7rem;
        padding-left:.5rem;
        box-sizing:border-box;
        border-radius:.3rem;
        background:#ccc;
    }
    .header .top{
        width:100%;
        height:.8rem;
        display:flex;
        justify-content:space-around;
        align-items:center;
        background:#fff;
        padding-bottom:.1rem;
    }
    .top span {
        width:.8rem;
    }
    .resou h3 {
        width:2.5rem;
        margin-top:.35rem;
        font-weight:normal;
        margin-bottom:.1rem;
        padding-left:.2rem;
        background:url('../assets/放大镜.png') no-repeat .45rem;
        background-size:.38rem .38rem;
    }
    .resou .conent {
        display:flex;
    }
    .resou .conent img {
        width:.3rem;
        height:.28rem;
        vertical-align:middle;
    }
    .resou .conent ul {
        flex:1;
    }
    .resou .conent ul:last-child {
        border-left:1px solid #ccc;
    }
    .resou .conent ul li {
        margin:.15rem 0;
        width:3.25rem;
        padding:0 .5rem;
        box-sizing:border-box;
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
        text-align:left;
    }
    .conent ul:first-child li:nth-child(1){
        background:url('../assets/热.png') no-repeat 2.3rem .04rem;
        background-size:.3rem .29rem;
    }
    .conent ul:first-child li:nth-child(2){
        background:url('../assets/新.png') no-repeat 2.8rem .04rem;
        background-size:.3rem .29rem;
    }
    .conent ul:first-child li:nth-child(3){
        background:url('../assets/热.png') no-repeat 1.6rem .04rem;
        background-size:.3rem .29rem;
    }
    .conent ul:first-child li:nth-child(4){
        background:url('../assets/新.png') no-repeat 2.8rem .04rem;
        background-size:.3rem .29rem;
    }
    .conent ul:last-child li:nth-child(1){
        background:url('../assets/新.png') no-repeat 2.55rem .03rem;
        background-size:.3rem .29rem;
    }
    .conent ul:last-child li:nth-child(2){
        background:url('../assets/热.png') no-repeat 1.8rem .03rem;
        background-size:.3rem .29rem;
    }
    .conent ul:last-child li:nth-child(3){
        background:url('../assets/新.png') no-repeat 2.8rem .03rem;
        background-size:.3rem .29rem;
    }
    .conent ul:last-child li:nth-child(5) {
        color:orange;
    }
</style>