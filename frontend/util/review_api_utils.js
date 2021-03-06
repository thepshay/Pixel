export const fetchAllReviews = (gameId) => {
  return $.ajax({
    method: 'GET',
    url: 'api/reviews',
    data: { game_id: gameId }
  })
}

export const postReview = (review) => {
  return $.ajax({
    method: 'POST',
    url: 'api/reviews',
    data: { review }
  })
}

export const updateReview = (review) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/reviews/${review.id}`,
    data: {review}
  })
}

export const deleteReview = (reviewId, gameId) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/reviews/${reviewId}`,
    data: { game_id: gameId }
  })
}