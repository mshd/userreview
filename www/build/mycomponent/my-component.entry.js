const h = window.mycomponent.h;

//import { format } from '../../utils/utils';
class MyComponent {
    //@State() cardsPerRow: number;
    //@Listen('window:resize')
    /*
      private getText(): string {
        return format(this.first, this.middle, this.last);
      }
    
      private getCards(): string {
        var html = "";
        for(var i=0;i<4;i++){
    
        }
      }
    */
    render() {
        var cards = [{
                "@context": "https://schema.org/",
                "@type": "Review",
                "itemReviewed": {
                    "@type": "Thing",
                    "name": "Super Book"
                },
                "author": {
                    "@type": "Person",
                    "name": "Joe"
                },
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "7",
                    "bestRating": "10"
                },
                "publisher": {
                    "@type": "Organization",
                    "name": "Washington Times"
                }
            },
            {
                "@context": "https://schema.org/",
                "@type": "Review",
                "itemReviewed": {
                    "@type": "Thing",
                    "name": "Super Book2"
                },
                "author": {
                    "@type": "Person",
                    "name": "Joe"
                },
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "9",
                    "bestRating": "10"
                },
                "publisher": {
                    "@type": "Organization",
                    "name": "Washington Times"
                }
            }];
        //require('./data/userreview.json');
        //JSON.parse(window.localStorage.getItem("data/userreview.json"))
        console.log(cards);
        //for()
        //
        return (
        //  <div>Hello, World! I'm {this.getText()}</div>
        //);
        //                 <a href={ entry.url } target="_blank"><img class="card-img-top" src={ entry.imageUrl }/></a>
        h("div", null, cards.map(entry => h("div", { class: "col-lg-3 col-md-6 col-sd-12" },
            h("div", { class: "card" },
                h("div", { class: "card-body" },
                    h("h4", { class: "card-title" },
                        entry.author.name,
                        " (",
                        entry.publisher.name,
                        ")"),
                    h("p", { class: "card-text" },
                        entry.reviewRating.ratingValue,
                        "/",
                        entry.reviewRating.bestRating),
                    h("a", { href: "", class: "btn btn-success", target: "_blank" }, "Go to ")))))));
    }
    static get is() { return "my-component"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "columns": {
            "type": String,
            "attr": "columns"
        },
        "first": {
            "type": String,
            "attr": "first"
        },
        "last": {
            "type": String,
            "attr": "last"
        },
        "middle": {
            "type": String,
            "attr": "middle"
        }
    }; }
    static get style() { return ""; }
}

export { MyComponent };
