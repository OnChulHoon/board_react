import React, { Component } from 'react';


class BoardDetail extends Component {



    render(){

        const contentDetail = this.props;

        return(
            <div>
                {contentDetail}
            </div>
        );
    }
}

export default BoardDetail;