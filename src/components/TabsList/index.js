import './index.css'

const TabsList = props => {
  const {eachItemTab, onClickNamesItems, isActive} = props
  const {displayText, tabId} = eachItemTab

  const onClickTabItems = () => {
    onClickNamesItems(tabId)
  }

  const styleButton = isActive ? 'tab-style' : ''

  return (
    <li className="list-tab">
      <button
        type="button"
        className={`button-tab ${styleButton}`}
        onClick={onClickTabItems}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabsList
