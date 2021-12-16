import './app-info.css'

const AppInfo = (props) => {
    const {totalItem, totalIncrease} = props
    return(
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {totalItem}</h2>
            <h2>Премию получат: {totalIncrease}</h2>
        </div>
    )
}

export default AppInfo