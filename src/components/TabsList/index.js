import './index.css'

const TabsList = props => {
  const {eachItemTab, onClickNamesItems} = props
  const {displayText, tabId} = eachItemTab

  const onClickTabItems = () => {
    onClickNamesItems(tabId)
  }

  return (
    <li className="list-tab">
      <button type="button" className="button-tab" onClick={onClickTabItems}>
        {displayText}
      </button>
    </li>
  )
}
export default TabsList
