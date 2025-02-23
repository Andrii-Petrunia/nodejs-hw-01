import { writeContacts } from "../utils/writeContacts.js";
import { readContacts } from "../utils/readContacts.js";

export const removeLastContact = async () => {
    try {
        const contacts = await readContacts();
        if (contacts.length === 0) {
            console.log('There are no entries in the contact list.');
            return;
        }

        await writeContacts(contacts.slice(0, -1));
    } catch(err) {
        console.error(err);
    }
 };

removeLastContact();
