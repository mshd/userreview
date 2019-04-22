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
  return fetch('data/userreview.json')
  .then(response => response.json())
  .then(data => {
    this.userReviews = data;
  });
  
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
  var style= 'width:'+percent+'%;color:'+color+';';
  return <span title={ score } class="stars-container"><span class="stars-over" style={ style }>★★★★★</span>★★★★★</span>;
}

  render() {

    console.log(this.userReviews);
    //for()
    //
    return (

        <div class="card-group container">

        {
          this.userReviews.map(entry =>
             <div class="card">
                 <div class="card-body">
                     <h4 class="card-title">{ entry.name ? entry.name : "untitled" }</h4>
                     {  this.stars(entry.reviewRating.ratingValue,0,entry.reviewRating.bestRating) } 
                     <p class="card-text">- { entry.author.name } ({ entry.publisher.name })</p>
                     <a href="" class="btn btn-success" target="_blank">Go to </a>
                 </div>
             </div>
         )
         }

         </div>

      );
  }
}
