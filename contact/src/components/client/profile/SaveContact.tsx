'use client';
type SaveContact = {
    firstName: String,
    lastName: String,
    phone: String,
    email: String,
}

const SaveContact = (props: SaveContact) => {
    const firstName = props.firstName ? props.firstName : '';
    const lastName = props.lastName ? props.lastName : '';
    const phone = props.phone ? props.phone : '';
    const email = props.email ? props.email : '';
    const handleAddToContacts = () => {
        const contactInfo = {
            firstName: firstName,
            lastName: lastName,
            phone: phone,
            email: email,
        };

        const contactURL = `data:text/vcard;charset=utf-8,`
            + `BEGIN:VCARD%0AVERSION:3.0%0AFN:${contactInfo.firstName} ${contactInfo.lastName}%0ATEL:${contactInfo.phone}%0AEMAIL:${contactInfo.email}%0AEND:VCARD`;

        window.open(contactURL);
    };
    return (
        <div className="flex justify-center p-1.5">
            <button className="border border-solid font-main border-white flex justify-center items-center w-[176px] py-1 rounded-full cursor-pointer text-center" onClick={handleAddToContacts}>Save contact</button>
        </div>
    )
}

export default SaveContact;