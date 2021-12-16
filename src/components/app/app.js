import { Component } from 'react'

import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import EmployessList from '../employees-list/employees-list'
import EmployeesAddForm from '../employess-add-form/employees-add-form'

import './app.css'

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [
                {name: "John C.", salary: 800, increase: false, like: true, id: 1},
                {name: "Alex M.", salary: 3000, increase: true, like: false, id: 2},
                {name: "Carl W.", salary: 5000, increase: false, like: false, id: 3},
            ],
            term: ''
        }
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (newItem) => {
        this.setState(({data}) => {
            const newArr = [...data, newItem]
            return {
                data: newArr
            }
        })
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item
            })
        }))
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term})
    }

    render() {
        const {data, term} = this.state
        const totalIncrease = data.filter(item => item.increase).length
        const visibleData = this.searchEmp(data, term)

        return (
            <div className="app">
                <AppInfo
                    totalItem = {data.length}
                    totalIncrease = {totalIncrease}
                />

                <div className="search-panel">
                    <SearchPanel
                        onUpdateSearch = {this.onUpdateSearch}
                    />
                    <AppFilter/>
                </div>

                <EmployessList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                />
                <EmployeesAddForm
                    addEmployees={this.addItem}
                />
            </div>
        )
    }

}

export default App