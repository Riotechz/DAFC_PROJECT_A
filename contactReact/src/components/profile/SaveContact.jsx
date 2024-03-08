import { imageUrlToBase64 } from "../../utils"
import { API_URL } from "../../configs";

const SaveContact = ({ ...props }) => {

    const contactInfo = {
        firstName: props.firstName ?? 'FDemo',
        lastName: props.lastName ?? 'LDemo',
        phone: props.mobileNo ?? '0912345678',
        email: props.email ?? 'demo@dafc.com.vn',
    };

    const handleAddToContacts = async () => {

        let avatarBase64 = (await imageUrlToBase64(API_URL + props.urlAvatar)).replace('data:image/jpeg;base64,', '')

        const fullName = contactInfo.firstName + ' ' + contactInfo.lastName

        let VCF_CONTENT = 'BEGIN:VCARD\nVERSION:3.0';
        VCF_CONTENT += '\nN:' + fullName;
        VCF_CONTENT += '\nTEL:' + contactInfo.phone;
        VCF_CONTENT += '\nEMAIL:' + contactInfo.email;
        VCF_CONTENT += '\nPHOTO;TYPE=JPEG;ENCODING=b:' + avatarBase64;
        VCF_CONTENT += '\nEND:VCARD';

        const link = document.createElement('a');
        link.setAttribute('href', 'data:text/x-vcard;charset=utf-8,' + encodeURIComponent(VCF_CONTENT));
        link.setAttribute('download', `vcard_${contactInfo.firstName}.vcf`);
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

    };



    return (
        <div className="flex justify-center p-1.5">
            <button className="border border-solid font-main 
            border-white flex justify-center items-center 
            w-[176px] py-1 rounded-full cursor-pointer text-center"
                onClick={handleAddToContacts}>Save contact</button>
        </div>
    )
}

export default SaveContact;