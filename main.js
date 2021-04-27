Vue.component('tabs', {
    props: ['title', 'body'],

    data() {
        return {
            isVisible: true
        };
    },
    // template: `
    //     <article class="message" v-show="isVisible">
    //     <div class="message-header">
    //         {{ title }}
    //         <button type="button" @click="hideModal">x</button>
    //     </div>
    //     <div class="message-body">
    //         {{ body }}
    //     </div>
    //     </article>
    // `,

    // template: `
    //     <div class="modal is-active">
    //         <div class="modal-background">
            
    //         </div>
    //         <div class="modal-content">
    //             <div class="box">
    //                 <slot></slot>
    //             </div>
    //         </div>
    //         <button class="modal-close" @click="$emit('close')"></button>
    //     </div>
    // `,

    // data() {
    //     return {
    //         tasks: [
    //             {task: 'Go for a morning run', completed: true},
    //             {task: 'Work on my side-project', completed: false},
    //             {task: 'Have a round the world tour', completed: true}
    //         ]
    //     };
    // },

    template: `
        <div>
            <div class="tabs">
                <ul>
                    <li v-for="tab in tabs" :class="{ 'is-active': tab.isActive }">
                        <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
                    </li>
                </ul>
            </div>

            <div class="tabs-details">
                <slot></slot>
            </div>
        </div>
    `,

    data() {
        return { tabs: [] };
    },

    created() {
        this.tabs = this.$children;
    },

    // mounted() {
    //     console.log(this.$children);
    // },

    methods: {
        // hideModal() {
        //     this.isVisible = false;
        // }

        selectTab(selectedTab) {
            this.tabs.forEach(tab => {
                tab.isActive = (tab.name == selectedTab.name);
            });
        }
    }
});

// Vue.component('task', {
//     template: '<li><slot></slot></li>'
// });

Vue.component('tab', {
    template: `
        <div v-show="isActive">
            <slot></slot>
        </div>
    `,

    props: {
        name: { required: true},
        selected: { default: false}
    },

    data() {
        return {
            isActive: false
        }
    },

    computed: {
        href() {
            return '#' + this.name.toLowerCase().replace(/ /g, '-')
        }
    }
});

new Vue({
    el: '#admin',

    data: {
        showModal: false
    }
});