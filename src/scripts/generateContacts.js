import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
    try {

        let data = await readContacts();
        if (!Array.isArray(data)) {
          data = [];
        };

        for (let i = 0; i < number; i++){
            data.push(createFakeContact());
        }

        await writeContacts(data);
    } catch (err) {
        console.error(err);
    }
};

generateContacts(5);
