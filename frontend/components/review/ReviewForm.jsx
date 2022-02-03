import React from "react";

class ReviewForm extends React.Component {

  render() {
    console.log(this.props)
    return (
      <div>{this.props.title}</div>
    )
  }
}

export default ReviewForm;