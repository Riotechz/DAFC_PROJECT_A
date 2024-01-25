import Image from "next/image";

const DafcInfo = () => {

    const items = [
        { title: 'Rolex', image: 'https://dafcsignature.web.app/images/brands/1.png' },
        { title: 'Cartier', image: 'https://dafcsignature.web.app/images/brands/2.png' },
        { title: 'Tiffany&Co', image: 'https://dafcsignature.web.app/images/brands/3.png' },
        { title: '', image: 'https://dafcsignature.web.app/images/brands/4.png' },
        { title: '', image: 'https://dafcsignature.web.app/images/brands/5.png' },
        { title: '', image: 'https://dafcsignature.web.app/images/brands/6.png' },
        { title: '', image: 'https://dafcsignature.web.app/images/brands/7.png' },
        { title: '', image: 'https://dafcsignature.web.app/images/brands/8.png' },
        { title: '', image: 'https://dafcsignature.web.app/images/brands/9.png' },
        { title: '', image: 'https://dafcsignature.web.app/images/brands/10.png' },
        { title: '', image: 'https://dafcsignature.web.app/images/brands/11.png' },
        { title: '', image: 'https://dafcsignature.web.app/images/brands/12.png' },
        { title: '', image: 'https://dafcsignature.web.app/images/brands/13.png' },
        { title: '', image: 'https://dafcsignature.web.app/images/brands/14.png' },
        { title: '', image: 'https://dafcsignature.web.app/images/brands/15.png' },
        { title: '', image: 'https://dafcsignature.web.app/images/brands/16.png' },
        { title: '', image: 'https://dafcsignature.web.app/images/brands/17.png' },
        { title: '', image: 'https://dafcsignature.web.app/images/brands/18.png' },
        { title: '', image: 'https://dafcsignature.web.app/images/brands/19.png' },
        { title: '', image: 'https://dafcsignature.web.app/images/brands/20.png' },
        { title: '', image: 'https://dafcsignature.web.app/images/brands/21.png' },
        { title: '', image: 'https://dafcsignature.web.app/images/brands/22.png' },
        { title: '', image: 'https://dafcsignature.web.app/images/brands/23.png' },
        { title: '', image: 'https://dafcsignature.web.app/images/brands/24.png' },
        { title: '', image: 'https://dafcsignature.web.app/images/brands/25.png' },
        { title: '', image: 'https://dafcsignature.web.app/images/brands/26.png' },
        { title: '', image: 'https://dafcsignature.web.app/images/brands/27.png' },
        { title: '', image: 'https://dafcsignature.web.app/images/brands/28.png' },
        { title: '', image: 'https://dafcsignature.web.app/images/brands/29.png' },
        { title: '', image: 'https://dafcsignature.web.app/images/brands/30.png' },
        { title: '', image: 'https://dafcsignature.web.app/images/brands/31.png' },
        { title: '', image: 'https://dafcsignature.web.app/images/brands/32.png' },
        { title: '', image: 'https://dafcsignature.web.app/images/brands/33.png' },
        { title: '', image: 'https://dafcsignature.web.app/images/brands/34.png' },
    ];

    return (
        <>
            <div className="dafc_info">
                <div className="info">
                    <Image src='https://dafcsignature.web.app/images/logo-dafc.png' alt="DAFC" width={127} height={26} />
                    <p>DAFC is the leading retail specialist and brand builder with the mission to strategically introduce and sustainable develop the finest luxury brands in Vietnam.</p>
                </div>
                <div className="dafc_brands">
                    {items.map((item, index) => (
                        <div key={index} className="item">
                            <img src={item.image} alt={item.title} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default DafcInfo;