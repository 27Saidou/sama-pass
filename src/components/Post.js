import React,{Component} from 'react'
import {connect} from 'react-redux'
import {deletePost} from'../actions/postActions'
class Post extends Component{
    handleClick=()=>{
    this.props.detelePost(this.props.post.id);
    this.props.history.push('/');
    }
    render(){
        console.log(this.props)
        let post=this.props.post?(
            <div className="post">
                <h4 className="center">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <div className="center">
                <button className="btn grey" onClick={this.handleClick}>
                    Supprimer Article
                </button>
                </div>
            </div>
        ):(
            <div className="center">
                <h4>Chargement des articles...</h4>
            </div>
        )
        return(
        <div className="container">
            <h4>{post}</h4>
        </div>
        )
    }
}
const mapStateToProps = (state,ownProps)=>{
let id=ownProps.match.params.post_id;
return{
    post:state.posts.find(post=>post.id===id)
}
}
const mapDispatchToProps = (dispatch) => {
return{
  detelePost:(id)=>{dispatch(deletePost(id))}
}
}

 export default connect(mapStateToProps,mapDispatchToProps) (Post)