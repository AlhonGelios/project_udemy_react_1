
import './app-filter.css'

const AppFilter = (props) => {

    const filter = [
        {label: 'Все сотрудники', name: 'all'},
        {label: 'На повышение', name: 'rise'},
        {label: 'З/П больше 1000$', name: 'moreThen1000'},
    ]

    const btns = filter.map(({name, label}) => {
        const active = props.activeFilter === name
        const clazz = active ? 'btn-light' : 'btn-outline-light'

        return(
            <button
                className={`btn ${clazz}`}
                tupe='button'
                onClick={() => props.onUpdateFilter(name)}
                key={name}
            >
                    {label}
            </button>
        )
    })

    return (
        <div className='btn-group'>
            {btns}
        </div>

    )
}

export default AppFilter