import React, { useState } from 'react'
const ToDoList = () => {
    const [list, setList] = useState([{
        id: 1, item: "Buying Groceries", checked: true
    },
    {
        id: 2, item: "Finish Assignments", checked: false
    },
    {
        id: 3, item: "Meet Friends", checked: false
    },
    ])
    const addItem = () => {
        var arr = [...list];
        arr.push({
            id: list.length + 1,
            item: document.getElementById("itemName").value,
            checked: false
        })
        setList([...arr]);
        document.getElementById("itemName").value = "";
    }
    const resetCheckBox = (e) => {
        debugger
        var id = e.target.getAttribute("check-box-for");
        var checkStatus = e.target.checked;
        const newlist = list.map(obj => {
            if (obj.id == id) {
                return { ...obj, checked: checkStatus };
            }
            return obj;
        });
        setList([...newlist]);
    }
   
    return (
        <>
            <div>
                <div className="inputDiv">
                    <input type="text" placeholder="Enter your ToDo Item" id="itemName" />
                    <button className="button" onClick={addItem}> Add to ToDoList</button>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Mark Completion</th>
                            <th>Item</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            list.length != 0 ? (
                                list.map((ele) => (
                                    <tr key={ele.id}>
                                        <td><input type="checkbox" name="todoItem" check-box-for={ele.id} checked={ele.checked} onChange={resetCheckBox}></input></td>
                                        <td>{ele.item}</td>
                                         
                                    </tr>
                                ))
                            ) : (<tr><td>No items found</td></tr>)
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default ToDoList
