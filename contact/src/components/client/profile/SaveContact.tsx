'use client';

// const request = require('request');

type SaveContact = {
    firstName: String,
    lastName: String,
    phone: String,
    email: String,
}

const imageUrlToBase64 = async (url: string) => {
    const response = await fetch(url);
    const blob = await response.blob();
    return new Promise((onSuccess, onError) => {
        try {
            const reader = new FileReader();
            reader.onload = function () { onSuccess(this.result) };
            reader.readAsDataURL(blob);
        } catch (e) {
            onError(e);
        }
    });
};

const SaveContact = ({ ...props }) => {

    const firstName = props.firstName ?? 'FDemo';
    const lastName = props.lastName ?? 'LDemo';
    const phone = props.mobileNo ?? '0912345678';
    const email = props.email ?? 'demo@dafc.com.vn';

    const handleAddToContacts = async () => {

        const photo = await imageUrlToBase64('http://172.29.100.12:5000/images/profiles/thnam.jpg');

        const contactInfo = {
            firstName,
            lastName,
            phone,
            email,
        };

        const contactURL = `data:text/vcard;charset=utf-8,`
            + `BEGIN:VCARD%0AVERSION:3.0
            %0AFN:${contactInfo.firstName} ${contactInfo.lastName}
            %0ATEL:${contactInfo.phone}
            %0APHOTO%0ATYPE=JPEG%0AVALUE=URI:http://172.29.100.12:5000/images/profiles/thnam.jpg
            %0AEMAIL:${contactInfo.email}
            %0AEND:VCARD`;

        window.open(contactURL);
    };

    return (
        <div className="flex justify-center p-1.5">
            <button className="border border-solid font-main border-white flex justify-center items-center w-[176px] py-1 rounded-full cursor-pointer text-center" onClick={handleAddToContacts}>Save contact</button>
        </div>
    )
}

export default SaveContact;