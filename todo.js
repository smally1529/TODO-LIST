var ul = document.getElementById('list');
var li;

var addButton = document.getElementById('add');
addButton.addEventListener('click', addItem);

var removeButton = document.getElementById('remove');
removeButton.addEventListener('click', removeItem);


function addItem() {
    var input = document.getElementById('input');
    var item = input.value;
    ul = document.getElementById('list');
    var textnode = document.createTextNode(item);

    if(item === '') {
        var p = document.createElement('p');
        var t = document.createTextNode("Enter your task!");

        p.appendChild(t);
        document.getElementsById('empty').appendChild(p);

        setTimeout(() => {
            p.className = 'visual2';
        }, 1500);
        return false;
    } else {

        li = document.createElement('li');

        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id', 'check');

        var label = document.createElement('label');
        label.setAttribute('for', 'item');

        ul.appendChild(label);
        li.appendChild(checkbox);
        label.appendChild(textnode);
        li.appendChild(label);
        ul.appendChild(li, ul.childNodes[0]);

        setTimeout(() => {
            li.className = 'visual';
        }, 2);

        input.value = '';
    }
}

function removeItem() {
    li = ul.children;

    for(let index=0; index<li.length; index++){
        while(li[index] && li[index].children[0].checked) {

            ul.removeChild(li[index]);
        }
    }
}