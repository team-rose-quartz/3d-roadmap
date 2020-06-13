import specializationNodes from './specialization.json';
import technologiesNodes from './technologies.json';

function GetSpecialistArray() {
  const specializationsModel = specializationNodes;
  // loop specializations
  for(let specialization of specializationsModel) {
    if (specialization.hasOwnProperty("entryNodeId")) {
        // convert children from linked list to array
        specialization.technologies = GetTechnologyPathAsOrderedArray(specialization.entryNodeId);
    }
  }
  console.log("specialization ",specializationsModel);
  return specializationsModel;
}

function GetTechnologyPathAsOrderedArray(startingNodeId){
    let orderedArray = [];
    let currentNodeId  = startingNodeId;
    while (currentNodeId) {
        let node = technologiesNodes[currentNodeId];
        orderedArray.push(node);
        currentNodeId = node.nextNodeId;
    }
    
    return orderedArray;
}

export default GetSpecialistArray;
