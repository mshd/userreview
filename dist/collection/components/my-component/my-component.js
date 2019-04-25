//import { format } from '../../utils/utils';
export class MyComponent {
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
    componentWillLoad() {
        console.log("fetch data");
        return fetch('data/userreview.json')
            .then(response => response.json())
            .then(data => {
            this.userReviews = data;
        });
    }
    stars(score, start, end) {
        //if(score){var title = ' title="'.$title.'"';}
        if (score == "n/a" || score == "#N/A" || score == null || score == "") {
            return "&empty;";
        }
        //if(is_string($score)) {return "Invalid";}
        var percent = (score - start) * (100 / (end - start));
        var color;
        if (percent > 85) {
            color = "#007f4e";
        }
        else if (percent > 70) {
            color = "#73b143";
        }
        else if (percent > 50) {
            color = "#f8cc18";
        }
        else if (percent > 30) {
            color = "#f47324";
        }
        else {
            color = "#e22027";
        }
        //var emoji = "★★★★★";//"&#9733;&#9733;&#9733;&#9733;&#9733;";//
        const mainStyle = {
            width: percent + "%",
            color: color,
            height: "22px"
        };
        return h("span", { title: score, class: "stars-container" },
            h("span", { class: "stars-over", style: mainStyle }, "\u2605\u2605\u2605\u2605\u2605"),
            "\u2605\u2605\u2605\u2605\u2605");
    }
    render() {
        console.log(this.userReviews);
        //for()
        //
        return (h("div", { class: "card-group container" },
            h("div", { class: "card" },
                h("div", { class: "view overlay" },
                    h("img", { class: "card-img-top", src: "https://mdbootstrap.com/img/Photos/Others/food.jpg", alt: "Card image cap" }),
                    h("a", null,
                        h("div", { class: "mask rgba-white-slight" }))),
                h("a", { class: "btn-floating btn-action ml-auto mr-4 mdb-color lighten-3" },
                    h("i", { class: "fas fa-chevron-right pl-1" })),
                h("div", { class: "card-body" },
                    h("h4", { class: "card-title" }, "Card title"),
                    h("hr", null,
                        h("p", { class: "card-text" }, "Some quick example text to build on the card title and make up the bulk of the card's content.")),
                    h("div", { class: "rounded-bottom mdb-color lighten-3 text-center pt-3" },
                        h("ul", { class: "list-unstyled list-inline font-small" },
                            h("li", { class: "list-inline-item pr-2 white-text" },
                                h("i", { class: "far fa-clock pr-1" }),
                                "05/10/2015"),
                            h("li", { class: "list-inline-item pr-2" },
                                h("a", { href: "#", class: "white-text" },
                                    h("i", { class: "far fa-comments pr-1" }),
                                    "12")),
                            h("li", { class: "list-inline-item pr-2" },
                                h("a", { href: "#", class: "white-text" },
                                    h("i", { class: "fab fa-facebook-f pr-1" }, " "),
                                    "21")),
                            h("li", { class: "list-inline-item" },
                                h("a", { href: "#", class: "white-text" },
                                    h("i", { class: "fab fa-twitter pr-1" }, " "),
                                    "5")))))),
            this.userReviews.map(entry => h("div", { class: "card col-sm col-md-4 col-xs-12" },
                h("div", { class: "card-body" },
                    h("h4", { class: "card-title" }, entry.name ? entry.name : "untitled"),
                    this.stars(entry.reviewRating.ratingValue, 0, entry.reviewRating.bestRating),
                    h("p", { class: "card-text" },
                        "- ",
                        entry.author.name,
                        " (",
                        entry.publisher.name,
                        ")"),
                    h("a", { href: "", class: "btn btn-success", target: "_blank" }, "Go to "))))));
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
        },
        "userReviews": {
            "state": true
        }
    }; }
    static get style() { return "/**style-placeholder:my-component:**/"; }
}
