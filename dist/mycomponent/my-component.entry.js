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
        var style = 'width:' + percent + '%;color:' + color + ';';
        return h("span", { title: score, class: "stars-container" },
            h("span", { class: "stars-over", style: style }, "\u2605\u2605\u2605\u2605\u2605"),
            "\u2605\u2605\u2605\u2605\u2605");
    }
    render() {
        console.log(this.userReviews);
        //for()
        //
        return (h("div", { class: "card-group container" }, this.userReviews.map(entry => h("div", { class: "card" },
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
    static get style() { return "\@import url(\"https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css\");\n\@import url(\"https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.7.7/css/mdb.min.css\");\n\n.stars-container {\n    position: relative;\n    display: inline-block;\n    color: transparent;\n  }\n  \n  .stars-container:before{\n    position: absolute;\n    top: 0;\n    left: 0;\n    content: '★★★★★';\n    color:lightgray;\n  }\n  .stars-over {\n    position: absolute;\n    top: 0;\n    left: 0;\n    overflow: hidden;\n  }"; }
}

export { MyComponent };
