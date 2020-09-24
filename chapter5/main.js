// 子コンポーネント
Vue.component('comp-child', {
    template: '<button v-on:click="handleClick">イベント発火</button>',
    methods: {
        // ボタンのクリックイベントのハンドラでchilds-eventを発火する
        handleClick: function () {
            this.$emit('childs-event')
        }
    }
})

// 親コンポーネント
new Vue({
    el: '#app',
    methods: {
        // childs-event が発火した！
        parentsMethod: function() {
            alert('イベントをキャッチ！')
        }
    }
})