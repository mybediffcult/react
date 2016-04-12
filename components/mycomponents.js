var TlileLabel=React.createClass({
	handleChange:function(){
    this.props.onUserInput(
       this.refs.filterTextInput.value,
    	);
	},
	render: function(){
		return (
         <header>
         <section>
           <label>  HelloWorld!!! </label>
           <input 
            type='text' 
            placeholder='添加ToDo' 
            required='required' 
            autoComplete="on" 
            value={this.props.filterText}
            ref="filterTextInput"
            onChange={this.handleChange}
            />
         </section>
         </header>
	    );
	}
});
var  Donething=React.createClass({
	handleChange:function(){
     this.props.onUserInput(
      this.refs.inStockOnlyInput.checked,
      this.refs.filterTextInput.value,
     	);
	},
	render:function(){
		return(
         <li draggable='true'>
         <input type='checkbox' onchange={this.handleChange} ref="inStockOnlyInput" checked={this.props.inStockOnly}>{''}
         <p /**id='p-"+i+"'*/ onclick={this.handleChange} ref="filterTextInput">
			);
	}
});
var Todothing=React.createClass({
	render:function(){
		return(
		<li draggable='true'><input type='checkbox' onchange='update("+i+",\"done\",true)' />"
				+"<p id='p-"+i+"' onclick='edit("+i+")'>"+data[i].title+"</p>"
				+"<a class='dcircle' href='javascript:remove("+i+")'> - </a></li>
				);
	}
})
 var Load=React.createClass({
 	render:function(){
 	var collection=localStorage.getItem("todo");
	if(collection!=null){
		var data=JSON.parse(collection);
		var todoCount=0;
		var doneCount=0;
		var todoString="";
		var doneString="";
		for (var i = data.length - 1; i >= 0; i--) {
			if(data[i].done){
				doneString+="<Donething />";
				doneCount++;
			}
			else{
				todoString+="<Todothing />";
				todoCount++;
			}
		}
		todocount.innerHTML=todoCount;
		todolist.innerHTML=todoString;
		donecount.innerHTML=doneCount;
		donelist.innerHTML=doneString;
	}
	else{
		todocount.innerHTML=0;
		todolist.innerHTML="";
		donecount.innerHTML=0;
		donelist.innerHTML="";
	}
 	}
 });
 var ListName=React.createClass({
    render:function(){
	   var list1=[];
	   var list2=[];
	   var todo=localStorage.getItem("todo");
	   if (this.props.todo.done) {
	   	list1.push(<Donething />);
	   }
       else{
       	list2.push(<Todothing />);
       	}
		return(
			<div>
            <h2 onClick="save">正在进行<span id="todocount"><span></h2>
            <ol id="todolist">
            {list2}
            </ol>
            <h2 onClick="save">已经完成<span id="donecount"></span></h2>
            <ul id="donelist">
            {list1}
            </ul>
            </div>
			);
	}
});
 var Todolist=React.createClass({
    render:function(){
    	return(
         <div>
         <TlileLabel />
         <ListName />
         <Clear /> 
         <footer>made by liaojianjun,2016/4/5</footer>
         </div>
    		);
    }
 });
ReactDOM.render(
	<Todolist />,
	document.getElementById("example")
);