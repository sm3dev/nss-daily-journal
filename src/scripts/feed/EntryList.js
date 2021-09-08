// This is taken from giffy and has to be modified
import { Entry } from "./Entry.js";
export const EntryList = (allEntries) => {
	let entryHTML = "";
		//Loop over the array of posts and for each one, invoke the Post component which returns HTML representation
		for (const entryObject of allEntries) {
			//what is a entryObject?
			entryHTML += Entry(entryObject)
		}
		return entryHTML;
	
}