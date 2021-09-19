import React,{Component} from 'react';
import './Main.css';
import Header from '../Header/Header';
import Preview from '../Preview/Preview';
import Details from '../Detail/Details';
import Footer from '../Footer/Footer';
import ProdData from '../ProductData';


class Main extends Component {
  constructor(){
    super();

    this.state = {
        product : ProdData,
        showHeartrateSection: false,
        previewImage: "https://imgur.com/xSIK4M8.png",
        previewstyle: "Purple Strap"
    }
   
  };

  oncoloroptionclick = (Indx) => {
    const updatedimg = this.state.product.colorOptions[Indx].imageUrl;
    const updatedstyle = this.state.product.colorOptions[Indx].StyleName;
    this.setState({previewImage : updatedimg, previewstyle : updatedstyle});
  };


  onfeatureitemclick = (pos) => {
    let updatedvalue = false;
    if(pos === 1){
      updatedvalue =true;
    }
    this.setState({showHeartrateSection: updatedvalue})
  };



//   render() {
//     return (
//       <div className="MAIN">
//        {this.state.product.title} <br/>
//        {this.state.product.description} <br/>
//        <img src={this.state.product.colorOptions[2].imageUrl}  alt={this.state.product.colorOptions[2].StyleName} className="productImg"/>
//         <br/>
//        {this.state.product.colorOptions[1].StyleName}
//       </div>
//     );
//   }

// Template 

render(){
    return(
        <div className="MAIN Container">
            <Header />

            <Preview product={this.state.product} showHeartrateSection= {this.state.showHeartrateSection} currentstyle = {this.state.previewstyle} currentimg = {this.state.previewImage} />
                
            <Details product={this.state.product} onfeatureitemclick={this.onfeatureitemclick} oncoloroptionclick={this.oncoloroptionclick}/>

            <Footer />

        </div>
    )
}
}

export default Main;