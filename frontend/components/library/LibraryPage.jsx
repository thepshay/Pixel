import React from "react";
import LibraryHeader from "./LibraryHeader";
import LibraryList from "./LibraryList";

class LibraryPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.userId);
    this.props.fetchAllLibraryItems(this.props.userId)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.userId !== this.props.userId) {
      this.props.fetchAllLibraryItems(this.props.userId)
      this.props.fetchUser(this.props.userId);
    }
  }

  render() {
    const { library,user } = this.props;
    
    return (
      <div className="library-page">
        <div className="library-main-content">
          <LibraryHeader 
            user={user}
          />
          <LibraryList
            library={library}
          />
        </div>
      </div>
    )
  }
}

export default LibraryPage;