import './index.css'

const ThumbnailImage = props => {
  const {eachList, onEachThumbnail} = props
  const {thumbnailUrl, id} = eachList
  const onClickThumbnailImage = () => {
    onEachThumbnail(id)
  }
  return (
    <li className="list-button-thumbnail">
      <button
        type="button"
        className="button-thumbnail"
        onClick={onClickThumbnailImage}
      >
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-image" />
      </button>
    </li>
  )
}

export default ThumbnailImage
