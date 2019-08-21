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
    return this.items.find(item => item.id === id);
  }
  function addItem(){
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
   
  return { 
    items,
    hideCheckedItems,
    searchTerm,

  };

}());
