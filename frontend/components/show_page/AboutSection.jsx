import React from "react";

class AboutSection extends React.Component {

  render() {
    const {game} = this.props;

    return (
      <div className="about-container">
        <h2 className="about-title">
          ABOUT THIS GAME
        </h2>
        <p className="about-body">
          {game.extended_about}
        </p>
      </div>
    )
  }
}

export default AboutSection;