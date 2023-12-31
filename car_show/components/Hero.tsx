"use client";

import Image from "next/image";
import { CustomButton } from ".";

const Hero = () => {
  const handleScroll = () => {

  }
  return (
    <div className="hero">
        <div className="flex-1 pt-36 padding-x">
          <h1 className="hero__title"> 
            Tìm, Đặt hoặc thuê xe - nhanh chóng và dễ dàng
          </h1>
          <p className="hero__subtitle">
            Đơn giản hóa trải nghiệm thuê xe của bạn với quy trình đặt xe dễ dàng của chúng tôi
          </p>

          <CustomButton 
            title="Khám phá thêm"
            containerStyles="bg-primary-blue text-white rounded-full mt-10"
            handleClick={() => {handleScroll}}
          />
        </div>
        <div className="hero__image-container">
          <div className="hero__image">
            {/* <Image src="./" alt="hero" fill className="object-contain"/> */}
            <Image src="/mac.png" alt="hero" fill className="object-contain"/>

          </div>
            <div className="hero__image-overlay"/>
        </div>
    </div>
  )
}

export default Hero;