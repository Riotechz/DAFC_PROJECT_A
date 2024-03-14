import { useParams } from "react-router-dom";
import BrandFooter from "../../components/profile/brandFooter"
import Profile from "../../components/profile/info"
import { useEffect, useState } from "react";
import { API_URL, DAFC_URL } from "../../configs";

const ProfilePage = () => {

    const { username } = useParams('')
    const [data, setData] = useState('')
    const getProfileApi = async (username) => {
        try {
            const response = await fetch(`${API_URL}/api/client/v1/user/share-profile/${username}`)
            const rep = await response.json();
            if (response.ok) {
                setData(rep)
            }else{
                window.location.replace(DAFC_URL);
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getProfileApi(username)
    }, [])

    if (!data) {
        return
    }

    const profile = data.data
    const imageUrl = profile.urlAvatar === '' ? API_URL + '/images/brands/dafcLogo.jpg' : API_URL + profile.urlAvatar

    return (
        <main className="h-full text-white bg-[#292929]">
            <div className="overflow-hidden w-[500px] max-w-[100%] m-auto">
                <Profile imageUrl={imageUrl} {...profile} />
                <BrandFooter />
            </div>
        </main>
    )
}


export default ProfilePage