import React , {Component} from  'react';
class Welome extends Component{
 render(){
    return <h1>Hello ,{this.props.name} {this.props.lastname}</h1>
 }
}

export default Welome;