import React, { Component } from "react"

class UserGrid extends Component {
  constructor () {
    super()
    this.state = {
      "data": [{
        "name": "Joe",
        "age": 24,
        "priority": 1,
        "category": "cat2"
      }, {
        "name": "Jane",
        "age": 76,
        "priority": 4,
        "category": "cat1"
      },
      {
        "name": "Kevin",
        "age": 32,
        "priority": 2,
        "category": "cat2"
      },
      {
        "name": "Lucy",
        "age": 54,
        "priority": 1,
        "category": "cat3"
      },
      {
        "name": "Colin",
        "age": 34,
        "priority": 3,
        "category": "cat1"
      },
      {
        "name": "Franny",
        "age": 36,
        "priority": 2,
        "category": "cat3"
      },
      {
        "name": "Neil",
        "age": 74,
        "priority": 4,
        "category": "cat2"
      },
      {
        "name": "Katy",
        "age": 55,
        "priority": 3,
        "category": "cat2"
      }
      ],
      "color": {
        1: 'Orange',
        2: 'Green',
        3: 'Blue',
        4: 'Purple'
      },
      "categories": [],
      "selectedFilter": '',
      "filteredData": [],
      "sortedData": [],
      "sortBy": 'featured'
    }

    this.handleFilterChange.bind(this)
    this.handleSortChange.bind(this)
  }

  componentDidMount () {
    let { categories, data } = this.state
    data.forEach((person) => {
      if (!categories.includes(person.category)) categories = [...categories, person.category]
    })

    this.setState({ categories, filteredData: data })
  }

  handleFilterChange = (evt) => {
    let { selectedFilter, data } = this.state
    selectedFilter = evt.target.value
    let filteredData = data.filter((person) => {
      return person.category === selectedFilter
    })

    this.setState({ selectedFilter, filteredData, sortBy: 'featured', sortedData: [...filteredData] })
  }

  handleSortChange = (evt) => {
    let { sortedData, filteredData } = this.state
    let sortBy = evt.target.value
    sortedData = [...filteredData]

    if (sortBy === 'A-Z') {
      sortedData.sort((a,b) => {
        let aName = a.name.toLowerCase()
        let bName = b.name.toLowerCase()
        if (aName < bName) return -1
        if (aName > bName) return 1
        return 0;
      })
    } else if (sortBy === 'priority') {
      sortedData.sort((a,b) => {
        return a.priority - b.priority
      })
    } else {
      sortedData = []
    }

    this.setState({ sortBy, sortedData })
  }

  render() {
    let { data, categories, color, selectedFilter, filteredData, sortBy, sortedData } = this.state
    let displayData = sortBy !== 'featured' ? sortedData : filteredData

    return (
      <div id="container-wrapper" className="container"> 
        <div className="row">
        <div className="col-12">
          <div className="filter">
            {
              categories.map((cat) => {
                return (
                <div className="form-check" key={cat}>
                  <input className="form-check-input" 
                    type="radio" 
                    name={cat} 
                    id={cat} 
                    value={cat} 
                    checked={selectedFilter === cat}
                    onChange={this.handleFilterChange}
                  />
                  <label className="form-check-label" htmlFor={cat}>
                    {cat}
                  </label>
                </div>)
              })
            }
            <button onClick={() => this.setState({ filteredData: data, selectedFilter: '', sortBy: 'featured' })}>
              Clear Filter
            </button>
          </div>
          <div className="sort">
            <select className="custom-select" value={ sortBy } onChange={ this.handleSortChange }>
              <option value="featured">Featured</option>
              <option value="A-Z">A-Z</option>
              <option value="priority">Priority</option>
            </select>
          </div>
        </div>
        {
          displayData.map((person, i) => {
            let bgColor = color[person.priority]
            return (
              <div key={i} className="card col-4" style={{backgroundColor: bgColor}}>
                <div className="card-body">
                  <h2 className="card-name">{person.name}</h2>
                  <p className="card-age">{person.age}</p>
                  <p className="card-cat">{person.category}</p>
                </div>
              </div>
            )
          })
        } 
        </div>
      </div>
    )
  }
}

export default UserGrid