'use strict';
const store = (function () {
    
  const items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];
  const hideCheckedItems = false;
  const searchTerm = '';
  function findById(id) {
    return store.items.find(item => item.id === id);
  }
  function addItem(name){
    try{
      Item.validateName(name);
      this.items.push(Item.create(name));
    }
    catch(error){
      console.error(error.message);
    }
  }
  function findAndToggleChecked(id){
    let item = this.findById(id);
    item.checked = !item.checked;
  }
  function findAndUpdateName(id, newName){
    try{
      Item.validateName(newName);
    }
    catch(error){
      console.error(`Cannot update name: ${error.message}`);
    }
    findById(id).name = newName;
  }

  function findAndDelete(id){
    const index = store.items.findIndex(item => item.id === id);
    store.items.splice(index, 1);
  }  
   
  return { 
    items,
    hideCheckedItems,
    searchTerm,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete,

  };

}());
