import { imageUrlToBase64 } from "../../utils"
import { API_URL } from "../../configs";

const SaveContact = ({ cellPhone , ...props }) => {

    const contactInfo = {
        firstName: props.firstName ?? 'FDemo',
        lastName: props.lastName ?? 'LDemo',
        phone: cellPhone ?? '0912345678',
        email: props.email ?? 'demo@dafc.com.vn',
        position: props.position ?? 'IT',
        nickname: props.nickname ?? '',
        suffix: props.suffix ?? '',
    };

    const handleAddToContacts = async () => {

        let avatarBase64 = (await imageUrlToBase64(API_URL + props.urlAvatar)).replace('data:image/jpeg;base64,', '')

        const fullName = contactInfo.firstName + ' ' + contactInfo.lastName

        let VCF_CONTENT = 'BEGIN:VCARD\nVERSION:3.0';
        VCF_CONTENT += '\nFN;CHARSET=UTF-8:' + fullName;
        VCF_CONTENT += '\nN;CHARSET=UTF-8:;' + contactInfo.lastName + ';'+contactInfo.firstName+';'+contactInfo.suffix+';';
        VCF_CONTENT += '\nNICKNAME;CHARSET=UTF-8:'+ contactInfo.nickname;
        VCF_CONTENT += '\nTEL;TYPE=CELL:+84' + contactInfo.phone;
        VCF_CONTENT += '\nTEL;TYPE=HOME,VOICE:+84' + contactInfo.phone;
        VCF_CONTENT += '\nTEL;TYPE=WORK,VOICE:+8419002666';
        VCF_CONTENT += '\nTEL;TYPE=WORK,FAX:0304130177';
        VCF_CONTENT += '\nEMAIL;CHARSET=UTF-8;type=HOME,INTERNET:' + contactInfo.email;
        VCF_CONTENT += '\nPHOTO;TYPE=JPEG;ENCODING=b:' + avatarBase64;
        VCF_CONTENT += '\nORG;CHARSET=UTF-8:Duy Anh Fashion and Cosmetic JSC';
        VCF_CONTENT += '\nLABEL;CHARSET=UTF-8;TYPE=WORK:3rd floor, Centec tower';
        VCF_CONTENT += '\nADR;CHARSET=UTF-8;TYPE=WORK:;;72-74 Nguyen Thi Minh Khai;HCM City;District 3;;Vietnam';
        VCF_CONTENT += '\nURL;type=WORK;CHARSET=UTF-8:https://www.dafc.com.vn';
        VCF_CONTENT += '\nTITLE;CHARSET=UTF-8:'+contactInfo.position;
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