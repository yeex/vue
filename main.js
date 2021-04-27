// Vue.component('tabs', {
//     props: ['title', 'body'],

//     data() {
//         return {
//             isVisible: true
//         };
//     },
//     template: `
//         <article class="message" v-show="isVisible">
//         <div class="message-header">
//             {{ title }}
//             <button type="button" @click="hideModal">x</button>
//         </div>
//         <div class="message-body">
//             {{ body }}
//         </div>
//         </article>
//     `,

//     template: `
//         <div class="modal is-active">
//             <div class="modal-background">
            
//             </div>
//             <div class="modal-content">
//                 <div class="box">
//                     <slot></slot>
//                 </div>
//             </div>
//             <button class="modal-close" @click="$emit('close')"></button>
//         </div>
//     `,

//     data() {
//         return {
//             tasks: [
//                 {task: 'Go for a morning run', completed: true},
//                 {task: 'Work on my side-project', completed: false},
//                 {task: 'Have a round the world tour', completed: true}
//             ]
//         };
//     },

//     template: `
//         <div>
//             <div class="tabs">
//                 <ul>
//                     <li v-for="tab in tabs" :class="{ 'is-active': tab.isActive }">
//                         <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
//                     </li>
//                 </ul>
//             </div>

//             <div class="tabs-details">
//                 <slot></slot>
//             </div>
//         </div>
//     `,

//     data() {
//         return { tabs: [] };
//     },

//     created() {
//         this.tabs = this.$children;
//     },

//     mounted() {
//         console.log(this.$children);
//     },

//     methods: {
//         hideModal() {
//             this.isVisible = false;
//         },

//         selectTab(selectedTab) {
//             this.tabs.forEach(tab => {
//                 tab.isActive = (tab.name == selectedTab.name);
//             });
//         }
//     }
// });

// Vue.component('task', {
//     template: '<li><slot></slot></li>'
// });

// Vue.component('tab', {
//     template: `
//         <div v-show="isActive">
//             <slot></slot>
//         </div>
//     `,

//     props: {
//         name: { required: true},
//         selected: { default: false}
//     },

//     data() {
//         return {
//             isActive: false
//         }
//     },

//     computed: {
//         href() {
//             return '#' + this.name.toLowerCase().replace(/ /g, '-')
//         }
//     }
// });

// new Vue({
//     el: '#admin',

//     data: {
//         showModal: false
//     }
// });

// window.Event = new class {
//     constructor() {
//         this.vue = new Vue();
//     }

//     fire(event, data = null) {
//         this.vue.$emit(event, data);
//     }

//     listen(event, callback) {
//         this.vue.$on(event, callback);
//     }
// }

// Vue.component('coupon', {
//     template: '<input placeholder="Enter your coupon code" @blur="onCouponApplied">',

//     methods: {
//         onCouponApplied() {
//             Event.fire('applied');
//         }
//     }
// });

// new Vue({
//     el: '#admin',

//     data: {
//         couponApplied: false
//     },
//     created() {
//         Event.listen('applied', () => alert('Handling it!'));
//     }
// });

// Vue.component('modal', {
//     template: `
//     <div class="modal is-active">
//         <div class="modal-background"></div>
//             <div class="modal-card">
//             <header class="modal-card-head">
//                 <p class="modal-card-title">
//                     <slot name="header"></slot>
//                 </p>
//                 <button class="delete" aria-label="close"></button>
//             </header>
//             <section class="modal-card-body">
//                 <slot></slot>
//             </section>
//             <footer class="modal-card-foot">
//                 <slot name="footer"></slot>
//             </footer>
//         </div>
//     </div>
//     `
// })

Vue.component('progress-view', {
    data() {
        return { completionRate : 0 };
    }
});

new Vue({
    el: '#admin'
});