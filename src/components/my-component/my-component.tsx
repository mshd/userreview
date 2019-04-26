import { Component, Prop } from '@stencil/core';

import { State } from '@stencil/core';
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
  @State() userReviews: Array<any>;
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
  this.userReviews = this.items();
  return;// this.items();
  /*
  return fetch('data/userreview.json')
  .then(response => response.json())
  .then(data => {
    this.userReviews = data;
  });
  */
}
items(){
  return [{
    "@context": "https://schema.org/",
    "@type": "Review",
    "itemReviewed": {
      "@type": "Thing",
      "name": "Super Book"
    },
    "author": {
      "@type": "Person",
      "name": "John Doe"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "7",
      "bestRating": "10"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Washington Times"
    },
    "image": "https://upload.wikimedia.org/wikipedia/en/3/32/Rye_catcher.jpg"
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
      "name": "Jane Doey"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "9",
      "bestRating": "10"
  
    },
    "name": "The phone is superb",
  
    "reviewBody": "The seafood is great.",
    "datePublished": "2006-05-04",
  
    "publisher": {
      "@type": "Organization",
      "name": "New York Times"
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
      "name": "Jane Doey"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "9",
      "bestRating": "10"
  
    },
    "name": "मोबाइल राम्रो छ",
  
    "reviewBody": "धेरै राम्रो",
    "datePublished": "2006-05-04",
  
    "publisher": {
      "@type": "Organization",
      "name": "New York Times"
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
      "name": "Jane Doey"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "9",
      "bestRating": "10"
  
    },
    "name": "Телефон превосходный",
  
    "reviewBody": "The seafood is great.",
    "datePublished": "2006-05-04",
  
    "publisher": {
      "@type": "Organization",
      "name": "New York Times"
    }
  }];

}
 stars(score,start,end){
  //if(score){var title = ' title="'.$title.'"';}
  if(score=="n/a" || score=="#N/A"|| score==null || score==""){return "&empty;";}
  //if(is_string($score)) {return "Invalid";}
  var percent = (score-start)*(100/(end-start));
  var color;
  if(percent>85){
    color = "#007f4e";
  }else if(percent>70){
    color = "#73b143";
  }else if(percent>50){
    color = "#f8cc18";
  }else if(percent>30){
    color = "#f47324";
  }else{
    color = "#e22027";
  }
  //var emoji = "★★★★★";//"&#9733;&#9733;&#9733;&#9733;&#9733;";//
  const mainStyle = {
    width: percent + "%",
    color: color,
    height: "22px"
  };
  return <span title={ score } class="stars-container"><span class="stars-over" style={ mainStyle }>★★★★★</span>★★★★★</span>;
}

  render() {

    console.log(this.userReviews);
    //for()
    //col-sm col-md-4 col-xs-12
    //                     <!-- <a href="" class="btn btn-success" target="_blank">Go to </a> -->

    return (

        <div class="card-columns">


        {
          this.userReviews.map(entry =>
             <div class="card ">
                  { entry.image ? <img class="card-img-top" src={ entry.image } alt="Card image cap" /> : "" }
                 <div class="card-body">
                     <h4 class="card-title">{ entry.name ? entry.name : "untitled" }</h4>
                     {  this.stars(entry.reviewRating.ratingValue,0,entry.reviewRating.bestRating) } 
                     <p class="card-text">{ entry.reviewBody } - { entry.author.name } ({ entry.publisher.name })</p>
                 </div>

             </div>
         )
         }

         </div>

      );
  }
}
