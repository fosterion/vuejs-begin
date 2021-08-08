var app1 = new Vue({
    el: '#wrapper',
    data: {
        message: 'Привет, Vue!',
        text: 'Insomnia have a great pleasure',
        status: true,
        num: 1,
        isActive: true,
        isDivDefault: true,
        height: 150
    }
});

var app2 = new Vue({
    el: '#datafunc',
    data: {
        list: ['one', 'two', 'three'],
        users: [
            { id: 1, name: 'Ivan' },
            { id: 2, name: 'Anton' },
            { id: 3, name: 'Vitaly' }
        ]
    },
    methods: {
        nameFunction1() {
            alert("nameFunction1");
        },
        nameFunction2: function() {
            alert("nameFunction2");
        }
    }
});

var app3 = new Vue({
    el: '#some',
    data: {
        counter: 1
    },
    created: function() {
       this.counter = 100;
       this.increaseCounter();
    },
    methods: {
        increaseCounter() {
            this.counter++;
        }
    }
});

var app3 = new Vue({
    el: '#api',
    data: {
        urls: {
            hashtags: 'https://dka-develop.ru/api?type=hashtag',
            cities: 'https://dka-develop.ru/api?type=city'
        },
        hashtags: [],
        cities: [],
        textSearch: ''
    },
    watch: {
        textSearch: function() {
            if (this.textSearch.length > 3) {
                this.textSearch = 'Спасибо, дальше я сам';
            }
        }
    },
    created: function() {
       
    },
    methods: {
        getHashtags() {
            axios.get(this.urls.hashtags).then((response) => {
                this.hashtags = response.data;
            });
        },
        getCities() {
            axios.get(this.urls.cities).then((response) => {
                this.cities = response.data;
            });
        }
    }
});