import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {
    index: 0,
  }

  clickLeftArrow = () => {
    this.setState(prevState =>
      prevState.index > 0
        ? {index: prevState.index - 1}
        : {index: prevState.index},
    )
  }

  clickRightArrow = () => {
    this.setState(prevState =>
      prevState.index < 3
        ? {index: prevState.index + 1}
        : {index: prevState.index},
    )
  }

  getFilterReviewList = (list, index) => {
    const updatedList = list[index]
    return updatedList
  }

  render() {
    const {reviewsList} = this.props
    const {index} = this.state
    const filteredList = this.getFilterReviewList(reviewsList, index)

    return (
      <div className="bg-container">
        <div className="profile-Container">
          <h1 className="heading">Reviews</h1>
          <img
            src={filteredList.imgUrl}
            alt={filteredList.username}
            className="profile-image"
          />
          <div className="carousel-container">
            <button
              type="button"
              data-testid="leftArrow"
              onClick={this.clickLeftArrow}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
                className="arrow-size"
              />
            </button>
            <p className="name">{filteredList.username}</p>
            <button
              type="button"
              data-testid="rightArrow"
              onClick={this.clickRightArrow}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
                className="arrow-size"
              />
            </button>
          </div>
          <p>{filteredList.companyName}</p>
          <p>{filteredList.description}</p>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
