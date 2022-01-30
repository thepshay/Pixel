import React from "react";

class AboutSection extends React.Component {

  spaceText = (text) => {
    return text.split('\n');
  }

  render() {
    const {game} = this.props;

    const paragraphs = this.spaceText(game.extended_about)

    return (
      <div className="about-container">
        <h2 className="about-title">
          ABOUT THIS GAME
        </h2>
        <div className="about-body">
          {paragraphs.map((paragraph, index) => {
            return (
              <div key={index}>
                <p className="paragraph">{paragraph}</p>
                <br/>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default AboutSection;