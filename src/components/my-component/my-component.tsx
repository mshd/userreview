import { Component, Prop } from '@stencil/core';
//import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;
  @Prop() columns: string;
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


        <div>
           <div class="col-lg-3 col-md-6 col-sd-12">

        {
          cards.map(entry =>
             <div class="card">
                 <div class="card-body">
                     <h4 class="card-title">{ entry.author.name } ({ entry.publisher.name })</h4>
                     <p class="card-text">{ entry.reviewRating.ratingValue }/{ entry.reviewRating.bestRating }</p>
                     <a href="" class="btn btn-success" target="_blank">Go to </a>
                 </div>
             </div>
         )
         }
            </div>

         </div>

      );
  }
}
