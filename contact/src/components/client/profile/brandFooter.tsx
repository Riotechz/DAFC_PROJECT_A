import Image from "next/image";

const BrandFooter = () => {

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
            <div className="px-4 py-4 font-main">
                <div className="justify-center mx-auto my-5 w-[127px] h-auto">
                    <Image className="flex justify-center mx-auto my-5 w-[127px] h-auto" src='https://dafcsignature.web.app/images/logo-dafc.png' alt="DAFC" width={127} height={26} />
                </div>
                <p className="font-normal text-[14px] leading-[1.6] text-justify">DAFC is the leading retail specialist and brand builder with the mission to strategically introduce and sustainable develop the finest luxury brands in Vietnam.</p>
                <div className="grid grid-cols-3 grid-rows-3 gap-4 pt-6 pb-5">
                    {items.map((item, index) => (
                        <div key={index} className="relative bg-white flex items-center justify-center overflow-hidden rounded-sm aspect-[106/70]">
                            <img
                                className="w-auto h-auto max-w-[calc(100%-30px)] max-h-[50px]"
                                src={item.image}
                                alt={item.title} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default BrandFooter;