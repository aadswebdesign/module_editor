export async function createObjects(...args){
	const [map_object = null, map_entries = null] = args;
	if(map_object !== null && map_entries !== null){
		const map = new Map([[map_object,map_entries]]);
		return map.get(map_object);
	}
	return null;
};

export const createNode = async node => document.createTextNode(node);

export async function getIdHelper(id){
    if(id){
		return await document.getElementById(id);
	}
}