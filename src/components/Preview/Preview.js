import React,{Component} from 'react';
import './Preview.css';

class Preview extends Component{
    
    render(){
        return(

            <div className="Sec-Left">
                <img src={this.props.currentimg}  alt={this.props.previewstyle} title={this.props.previewstyle} className="productImg"/>
                
                {/* <img src={this.props.product.colorOptions[0].imageUrl}  alt={this.props.product.colorOptions[0].StyleName} className="productImg"/> */}
                                
                {
                    this.props.showHeartrateSection?
                    <div className="heartSection">
                        <p>78</p>
                    </div>
                    :
                    <div className="timeSection">
                        <p>12:12</p>
                    </div>
                }
            </div>
        )
    }
}

export default Preview;