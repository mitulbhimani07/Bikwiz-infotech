import React from 'react'
import Header from '../header-footer/Header'
import Footer from '../header-footer/Footer'

export default function GetInTouch() {
  return (
    <>
      <Header/>


      {/* add map */}

      <section className="banner-section relative w-[95%] mx-auto h-[410px] flex items-center justify-center bg-cover bg-center my-5 rounded-3xl overflow-hidden">
    <div className="relative z-10 w-full h-full rounded-lg overflow-hidden">
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.7556546098226!2d72.83626827343991!3d21.201863481814105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04ef7edcfbd1f%3A0x93edc2884741b879!2s6R2Q%2BPFH%20Delhi%20Gate%2C%20Japan%20Market%2C%20Begampura%2C%20Surat%2C%20Gujarat%20395008!5e0!3m2!1sen!2sin!4v1747892495191!5m2!1sen!2sin&style=element:geometry%7Ccolor:0x212121&style=element:labels.icon%7Cvisibility:off&style=element:labels.text.fill%7Ccolor:0x757575&style=element:labels.text.stroke%7Ccolor:0x212121&style=feature:administrative%7Celement:geometry%7Ccolor:0x757575&style=feature:administrative.country%7Celement:labels.text.fill%7Ccolor:0x9e9e9e&style=feature:administrative.land_parcel%7Cvisibility:off&style=feature:administrative.locality%7Celement:labels.text.fill%7Ccolor:0xbdbdbd&style=feature:poi%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:poi.park%7Celement:geometry%7Ccolor:0x181818&style=feature:poi.park%7Celement:labels.text.fill%7Ccolor:0x616161&style=feature:poi.park%7Celement:labels.text.stroke%7Ccolor:0x1b1b1b&style=feature:road%7Celement:geometry.fill%7Ccolor:0x2c2c2c&style=feature:road%7Celement:labels.text.fill%7Ccolor:0x8a8a8a&style=feature:road.arterial%7Celement:geometry%7Ccolor:0x373737&style=feature:road.highway%7Celement:geometry%7Ccolor:0x3c3c3c&style=feature:road.highway.controlled_access%7Celement:geometry%7Ccolor:0x4e4e4e&style=feature:road.local%7Celement:labels.text.fill%7Ccolor:0x616161&style=feature:transit%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:water%7Celement:geometry%7Ccolor:0x000000&style=feature:water%7Celement:labels.text.fill%7Ccolor:0x3d3d3d" 
            width="100%" 
            height="100%" 
            style={{border: 0}} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
        </iframe>
    </div>
</section>
      <Footer/>
    </>
  )
}
