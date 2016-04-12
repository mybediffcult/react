var Feed=React.createClass({
   getInitialState: function() {
    var row=[];
    return {
    	filterText:'',
    	haveDone:false
    };
  },

  handleUserInput: function(filterText) {
    this.setState({
      filterText: filterText,
      haveDone:false
    });
  },	
  onToggleForm:function(){
   this.setState({
    haveDone:!this.state.haveDone
   });
  },
   onNewItem:function(newItem){
      var newItems=this.state.row.concat([newItem]);
       this.setState({
       filterText:newItems,
        haveDone:false
        });
    },
  render:function(){
  	return(
         <div>
          <TitleTable 
          filterText={this.state.filterText} 
          haveDone={this.state.haveDone} 
          onUserInput={this.handleUserInput}
          onNewItem={this.onNewItem}
          />
          <br/>
          <TodoForm 
           filterText={this.state.filterText}
           haveDone={this.state.haveDone}
           onToggleForm={this.onToggleForm}
           onUserInput={this.handleUserInput}
          />
          <br />
          <br />
          <DoneForm 
           filterText={this.state.filterText}
           haveDone={this.state.haveDone}
           onToggleForm={this.onToggleForm}
           onUserInput={this.handleUserInput}
          />
         </div>
  		);
  }
});
var TitleTable=React.createClass({
  handleChange:function(){
    this.props.onUserInput(
     this.refs.filterTextInput.value
    );
  },

   render:function(){
   	return(
   		<header>
			<section >
				<label htmlFor="title">ToDoList</label>
				<input type="text" id="title" name="title" placeholder="添加ToDo" required="required"
                  value={this.props.filterText} ref="filterTextInput" 
                  onChange={this.handleChange}
				  />
			</section>
		</header>
   		);
   }
});
var TodoForm=React.createClass({
	render:function(){
    var row1=[];
    var count1=0;
    console.log();
    this.props.newItems.forEach(function(newItem){
       if (newItem.todoitems.indexof(this.props.filterText)==-1) {
        return ;
      }
      if(newItem.haveDone==false){
        row1.push(<TodoItem filterText={newItem.filterText}    onToggleForm={this.props.onToggleForm}    key={newItem.filterText}/>);
        count1++;
      }
    }.bind(this));
		return(
            <section>
                <h2 onclick="save()">正在进行 <span id="todocount">{count1}</span></h2>
		        <ol id="todolist" className="demo-box">
            {row1}
		        </ol>
            </section>
			);
	}
});
var DoneForm=React.createClass({
    render:function(){
      var row2=[],
          count2=0;
      this.props.newItems.forEach(function(){
        if (newItem.todoitems.indexof(this.props.filterText)==-1) {
          return ;
      }
        if(newItem.formDisplayed){
          row2.push(<DoneItem filterText={newItem.filterText} onToggleForm={this.props.onToggleForm}   key={newItem.filterText}/>);
          count2++;
        }
      }.bind(this));
    	return(
    		<section>
  			<h2>已经完成 <span id="donecount">{count2}</span></h2>
			<ul id="donelist">
      <DoneItem>{row2}</DoneItem>
			</ul>   
			</section>
    		);
    }
});
/*var Clear=React.createClass({
	render:function(){
		return(
        localStorage.clear();
        );
	}
});*/
var TodoItem=React.createClass({
  handleChange:function(){
    this.props.onUserInput(
     this.refs.filterTextInput.value
    );
  },
    render:function(){
      return(
        <li draggable='true'>
        <input type='checkbox' onChange={this.props.onToggleForm} checked='checked' />
        <p id='p-"+i+"' onclick={this.handleChange} value={this.props.filterText}  ref='filterTextInput'>{this.props.filterText}</p>
        <a class='dcircle' href='javascript:remove("+i+")'>-</a>
        </li>
        );
    }
});
var DoneItem=React.createClass({
 handleChange:function(){
    this.props.onUserInput(
     this.refs.filterTextInput.value
    );
  },
  render:function(){
    return(
      <li draggable='true'>
        <input type='checkbox' onChange={this.props.onToggleForm} checked='checked' />
        <p id='p-"+i+"' onclick={this.handleChange} value={this.props.filterText} ref='filterTextInput'>{this.props.filterText}</p>
        <a class='dcircle' >-</a>
        </li>
      );
  }
});
ReactDOM.render(
    <Feed />,
    document.getElementById('example')
	);