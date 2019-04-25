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
    //
    return (

        <div class="card-group container">

<div class="card">

  <div class="view overlay">
    <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/food.jpg" alt="Card image cap" />
    <a>
      <div class="mask rgba-white-slight"></div>
    </a>
  </div>

  <a class="btn-floating btn-action ml-auto mr-4 mdb-color lighten-3"><i class="fas fa-chevron-right pl-1"></i></a>

  <div class="card-body">

    <h4 class="card-title">Card title</h4>
    <hr>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

  </div>

  <div class="rounded-bottom mdb-color lighten-3 text-center pt-3">
    <ul class="list-unstyled list-inline font-small">
      <li class="list-inline-item pr-2 white-text"><i class="far fa-clock pr-1"></i>05/10/2015</li>
      <li class="list-inline-item pr-2"><a href="#" class="white-text"><i class="far fa-comments pr-1"></i>12</a></li>
      <li class="list-inline-item pr-2"><a href="#" class="white-text"><i class="fab fa-facebook-f pr-1"> </i>21</a></li>
      <li class="list-inline-item"><a href="#" class="white-text"><i class="fab fa-twitter pr-1"> </i>5</a></li>
    </ul>
  </div>

</div></div>

        {
          this.userReviews.map(entry =>
             <div class="card col-sm col-md-4 col-xs-12">
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
