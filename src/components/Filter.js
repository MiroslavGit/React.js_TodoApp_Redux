import React from 'react';

class Filter extends React.Component {
    render() {
        return (
            <div className="filter">
                <button id="add" onClick={this.filterAll} >All |</button>
                <button id="add" onClick={this.filterActive} >Active |</button>
                <button id="add" onClick={this.filterDone}>Already Done</button>  
            </div>           
        )
    }


    filterAll = () => {
        this.setState(state => {
    
          let items = state.items;  
    
          items.map(i => {
            return (
                i.status != true ? i.status = true : i.status = true  
             )
          })
    
          return {
            items
          }
    
      });
    }
    
    filterActive = () => {
        this.setState(state => {
    
          let items = state.items;  
    
          items.map(i => {
            return (
                i.class == "done" ? i.status = false : i.status = true
             )
          })
    
          return {
            items
          }
    
      });
    }
    
    
    filterDone = () => {
          this.setState(state => {
      
            let items = state.items;  
      
            items.map(i => {
              return (
                  i.class != "done" ? i.status = false : i.status = true   
               )
            })
      
            return {
              items
            }
      
        });
    }



}

export default Filter 