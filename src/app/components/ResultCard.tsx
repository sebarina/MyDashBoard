import React from "react";
import Image from "next/image";

export default  function ResultCard({cardData}){
    const ResultCardData ={
        code: cardData.code,
        ai: cardData.ai,
        bin: cardData.bin,
        image1: "data:image/png;base64," + cardData.image1,
        image2: "data:image/png;base64," + cardData.image2,
        image3: "data:image/png;base64," + cardData.image3
      };
    return (
        <div className="lg:col-span-3 col-span-6"> 
                    <div className="rounded-xl dark:shadow-dark-md shadow-md bg-white dark:bg-darkgray p-0 relative w-full break-words overflow-hidden">
                      <div className="px-6 pb-6 col-span-12">
                        <h5 className="card-title mb-2 pt-2">found ucode: {ResultCardData.code}</h5>
                        <p className="text-dark text-start">ai similarity: {ResultCardData.ai}</p>  
                        <p className="text-dark text-start">binary similarity: {ResultCardData.bin}</p>  
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {/* 第一行：两张图片 */}
                        <div style={{ display: 'flex', gap: '5px' }}>
                          <div style={{ flex: 1, position: 'relative', width: '100%', paddingTop:'50%' }}>
                            <Image src={ResultCardData.image1} alt="" 
                              className="object-cover"    
                              fill
                            />
                          </div>
                          <div style={{ flex: 1, position: 'relative', width: '100%', paddingTop:'50%' }}>
                            <Image src={ResultCardData.image2} alt="" 
                              className="object-cover"
                              fill
                            />
                          </div>
                        </div>
        
                        {/* 第二行：一张图片 */}
                        <div style={{ flex: 1, position: 'relative', width: '100%', paddingTop:'50%' }}>
                          <Image src={ResultCardData.image3} alt="" 
                            className="object-cover"
                            fill
                          />
                        </div>
                      </div>        
                    </div>
                  </div>
    )
};