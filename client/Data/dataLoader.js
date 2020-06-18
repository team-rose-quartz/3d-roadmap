import specializationNodes from './specialization.json';
import technologiesNodes from './technologies.json';

function GetSpecialistArray() {
  const specializationsModel = specializationNodes;
  // loop specializations
  for(let specialization of specializationsModel) {
    if (specialization.hasOwnProperty("orderedChildrenNodeIds")) {
        // convert children from linked list to array
        specialization.children = GetTechnologyPathAsOrderedArray(specialization.orderedChildrenNodeIds);
    } else {
      specialization.children = [];
    }
  }
  console.log("specialization ",specializationsModel);
  return specializationsModel;
}

function GetTechnologyPathAsOrderedArray(orderedChildrenNodeIds){
    let orderedArray = [];    
    for(let nodeId of orderedChildrenNodeIds) {
        let node = technologiesNodes[nodeId];
        node.id = nodeId;
        orderedArray.push(node);        
    }    
    return orderedArray;
}

export default GetSpecialistArray;
