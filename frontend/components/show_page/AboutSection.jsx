import React from "react";

class AboutSection extends React.Component {

  
  render() {

    const {game} = this.props;
    
    if (!game.extended_about) {
      return null
    }
    
    const spaceText = (text) => {
      return text.split('\n');
    }

    const paragraphs = spaceText(game.extended_about)

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