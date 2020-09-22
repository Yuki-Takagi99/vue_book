new Vue({
    el: '#app',
    data: {
        width: 800
    },
    computed: {
        // 算出プロパティhalfWidthを定義
        halfwidth: function () {
            return this.width / 2
        }
    }
})