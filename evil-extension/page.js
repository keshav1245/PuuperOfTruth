const MATCH_LIST = {
  'there': 'their',
  'their': 'there',
  'they\'re': 'there',
  'There': 'Their',
  'Their': 'There',
  'They\'re': 'There',
  'THERE': 'THEIR',
  'THEIR': 'THERE',
  'THEY\'RE': 'THERE'
};

function transformTextNodes(node) {
  if(node.nodeType == Node.TEXT_NODE){
    var initialData =  node.textContent;
    var myData = initialData.split(' ');
    for(var i =0;i<myData.length;i++){
      if(MATCH_LIST[myData[i]]){
        myData[i] = MATCH_LIST[myData[i]];
      }
    }

    var finalData = myData.join(' ');
    console.log(myData);
    console.log(finalData);
    node.textContent = finalData;
  }

  for(const child of node.childNodes){
    transformTextNodes(child);
  }
}

transformTextNodes(document.body);

// Log statement to test that the extension loaded properly.
console.log('Evil extension loaded!');
console.log('Extension Updated');