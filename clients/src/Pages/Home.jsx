import React, { useState } from 'react';

const MarketplaceBanner = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isHovered, setIsHovered] = useState(false);


  const categories = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
          <path d="M2 2l7.586 7.586"></path>
          <circle cx="11" cy="11" r="2"></circle>
        </svg>
      ),
      title: "UI/UX Design",
      jobs: "12k+ Jobs",
      active: true
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
      title: "Development",
      jobs: "8k+ Jobs",
      active: false
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>
      ),
      title: "Marketing",
      jobs: "12k+ Jobs",
      active: false
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      ),
      title: "Telemarketing",
      jobs: "3k+ Jobs",
      active: false
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="4" y1="7" x2="20" y2="7"></line>
          <line x1="10" y1="11" x2="10" y2="17"></line>
          <line x1="14" y1="11" x2="14" y2="17"></line>
          <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12"></path>
          <path d="M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"></path>
        </svg>
      ),
      title: "Editing",
      jobs: "12k+ jobs",
      active: false
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      ),
      title: "Accounting",
      jobs: "17k+ Jobs",
      active: false
    }
  ];
  return (
    <>

      <div className="flex items-center justify-between px-33 py-16 bg-white">
        <div className="w-1/2 pr-8">
          <h1 className="text-7xl font-bold text-green-800 mb-6">
            Find the talents for any job.
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Unlock your potential with quality job & earn from world leading brands & co.
          </p>
          <button className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition duration-300">
            Post a Job
          </button>
          <div className="mt-8 flex items-center space-x-4 opacity-100">
            <span className="text-gray-500 font-bold">Trusted by:</span>
            <img
              src="https://html.creativegigstf.com/jobi/jobi/images/logo/media_14.png"
              alt="Payoneer"
              className="h-6"
            />
            <img
              src="https://html.creativegigstf.com/jobi/jobi/images/logo/media_15.png"
              alt="Google"
              className="h-6"
            />
            <img
              src="https://html.creativegigstf.com/jobi/jobi/images/logo/media_16.png"
              alt="Adobe"
              className="h-6"
            />
          </div>
        </div>
        <div className="w-1/2 relative">
          <div className="absolute inset-0 bg-gradient-to-br opacity-50 rounded-lg"></div>
          <div className="relative z-10 flex justify-center items-center">


            <div className="flex items-center justify-center">
              <svg width="600" height="620" viewBox="0 0 850 613" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M553.968 557.346C553.968 557.346 608.99 548.955 635.842 561.901C662.694 574.846 665.211 581.918 665.211 581.918V586.712C665.211 589.109 663.173 591.147 660.776 591.147L547.734 589.829L534.548 576.044L541.261 558.904L553.968 557.346Z" fill="#FAAA4B" />
                <path d="M579.74 457.141C580.939 456.302 627.091 446.833 657.659 440.6C674.441 437.124 691.823 441.918 704.53 453.425C707.527 456.062 709.325 459.778 709.445 463.733C710.044 473.442 708.725 491.901 693.621 505.565C672.284 524.863 617.741 556.747 617.741 556.747L553.967 557.466C553.967 557.466 538.983 575.565 547.734 590.068C547.734 590.068 399.329 596.901 295.398 579.401C295.398 579.401 273.461 570.051 280.414 537.449C287.247 504.846 324.288 500.411 324.288 500.411C324.288 500.411 462.024 466.13 465.86 466.13C469.456 465.891 579.74 457.141 579.74 457.141Z" fill="#0A2A3C" />
                <path d="M490.435 457.141L454.472 464.692L429.418 485.309C429.418 485.309 451.955 507.243 451.356 505.326C450.756 503.408 459.507 497.175 462.024 485.309L470.775 479.315C470.775 479.315 488.277 487.346 498.946 481.353L490.435 457.141Z" fill="#BD7361" />
                <path d="M465.74 167.433V213.94H515.128V163.118L465.74 167.433Z" fill="#0A2A3C" />
                <path d="M454.472 118.409C454.472 118.409 455.071 172.228 488.276 210.464C488.276 210.464 502.661 207.947 509.614 202.313L506.497 222.929L490.194 226.046L512.731 274.83C512.731 274.83 566.554 264.162 570.99 261.645C575.425 259.128 584.176 225.926 584.176 225.926L553.488 222.21L559.722 125.122L487.677 91.3203L454.472 118.409Z" fill="#BD7361" />
                <path d="M485.16 121.526C485.16 121.526 456.989 143.461 446.92 136.508C436.85 129.676 427.5 56.3204 528.315 56.3204C528.315 56.3204 584.056 61.3546 584.056 113.255V213.7C584.056 213.7 554.927 213.94 528.914 213.7L529.513 148.255L534.428 145.019C539.463 141.663 540.542 134.711 536.586 130.156C532.99 125.961 526.756 125.361 522.561 128.957L514.409 135.669C514.409 135.669 515.728 119.967 496.428 113.735L483.961 106.183L485.16 121.526Z" fill="#0A2A3C" />
                <path d="M490.434 188.529L500.144 181.936" stroke="#0A2A3C" strokeWidth="2" strokeMiterlimit="10" />
                <path d="M634.763 292.689C632.246 226.765 580.1 225.686 580.1 225.686C521.362 252.535 495.229 225.207 495.229 225.207C495.229 225.207 490.075 226.166 454.352 237.672C418.629 249.179 418.51 293.648 418.51 293.648C402.686 388.819 370.08 418.425 370.08 418.425H425.222L452.554 350.223L460.346 386.302L425.222 435.326L436.131 479.435L454.472 464.812L486.239 458.939L495.349 485.428C594.605 478.596 634.883 429.692 634.883 429.692C634.883 429.692 637.281 358.614 634.763 292.689ZM574.706 387.021L588.492 348.186C588.492 348.186 586.574 392.655 594.126 406.439L574.706 387.021Z" fill="#FAAA4B" />
                <path d="M465.74 283.1L448.118 323.254C447.759 324.093 447.639 324.932 447.879 325.771L452.194 344.71" stroke="#F26C5D" strokeWidth="2" strokeMiterlimit="10" />
                <path d="M486.119 457.141C537.185 439.042 594.126 406.439 594.126 406.439C594.126 406.439 588.132 397.929 588.851 333.802" stroke="#F26C5D" strokeWidth="2" strokeMiterlimit="10" />
                <path d="M553.968 557.346L399.33 517.671" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                <path d="M519.204 548.116C519.204 548.116 587.772 458.939 644.113 461.456" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                <path d="M538.984 495.257H457.469L423.185 385.103C422.705 383.785 421.506 382.826 420.068 382.826H253.442C251.285 382.826 249.726 384.984 250.326 387.021L291.443 519.11C291.922 520.788 293.48 521.867 295.159 521.867H343.348H465.74H565.715C565.596 507.243 553.728 495.257 538.984 495.257Z" fill="#5AC3E0" />
                <path d="M601.918 590.548V570.171H559.002C550.491 570.171 543.778 577.962 545.577 586.233C545.936 587.671 546.416 588.99 547.255 589.829L601.918 590.548Z" fill="#BD7361" />
                <path d="M764.582 291.318L720.99 328.636L758.312 372.224L801.904 334.906L764.582 291.318Z" fill="#21B787" />
                <path d="M677.186 219.821L665.582 229.263L675.025 240.866L686.629 231.424L677.186 219.821Z" fill="#FAAA4B" />
                <path d="M211.323 151.041L164.976 107.073L121.002 153.418L167.349 197.386L211.323 151.041Z" fill="#F26C5D" />
                <path d="M227.933 230.172L215.305 243.127L228.261 255.753L240.889 242.798L227.933 230.172Z" fill="#FAAA4B" />
                <path d="M223.501 557.429L222.056 543.945" stroke="#072A3D" strokeWidth="2" strokeMiterlimit="10" />
                <path d="M216.599 551.088L228.96 550.286" stroke="#072A3D" strokeWidth="2" strokeMiterlimit="10" />
                <path d="M349.154 469.765C359.096 469.765 367.156 461.707 367.156 451.766C367.156 441.825 359.096 433.766 349.154 433.766C339.213 433.766 331.153 441.825 331.153 451.766C331.153 461.707 339.213 469.765 349.154 469.765Z" fill="white" />
                <path d="M345.772 201.19C347.821 201.19 349.481 199.529 349.481 197.481C349.481 195.432 347.821 193.772 345.772 193.772C343.724 193.772 342.063 195.432 342.063 197.481C342.063 199.529 343.724 201.19 345.772 201.19Z" stroke="#072A3D" strokeWidth="2" strokeMiterlimit="10" />
                <path d="M257.809 78.5235L238.666 60.4081C244.315 67.242 250.666 73.3562 257.809 78.5235Z" stroke="#072A3D" strokeWidth="2" strokeMiterlimit="10" />
                <path d="M488.261 73.7902L479.044 63.3649C481.694 67.1664 484.69 70.7375 488.261 73.7902Z" stroke="#072A3D" strokeWidth="2" strokeMiterlimit="10" />
                <path d="M746.821 591.944L753.388 598.511" stroke="#072A3D" strokeWidth="2" strokeMiterlimit="10" />
                <path d="M188.989 353.6C186.257 356.943 181.328 357.439 177.986 354.707C174.643 351.975 174.147 347.047 176.879 343.705L177.008 343.547C179.74 340.205 179.244 335.276 175.901 332.545C172.558 329.813 167.63 330.309 164.898 333.651L164.769 333.809C162.037 337.152 157.108 337.647 153.766 334.916C150.423 332.184 149.927 327.256 152.659 323.913L152.788 323.756C155.52 320.413 155.024 315.485 151.681 312.754C148.338 310.022 143.41 310.518 140.678 313.86" stroke="#0A2A3C" strokeWidth="2" strokeMiterlimit="10" />
                <path d="M843.038 441.057C843.553 452.421 834.854 462.103 823.461 462.782C810.712 463.543 800.988 474.476 801.759 487.234" stroke="#0A2A3C" strokeWidth="2" strokeMiterlimit="10" />
                <path d="M841.857 442.072L842.088 442.26L843.033 441.161L844.055 442.197L844.262 441.988L843.022 440.734L841.857 442.072Z" fill="#0A2A3C" />
                <path d="M132.7 505.976C132.7 505.976 177.79 502.91 189.809 472.988C201.827 443.067 202.489 426.571 202.489 426.571C202.489 426.571 179.282 436.353 161.792 445.055C144.303 453.757 132.7 505.976 132.7 505.976Z" fill="#2CC974" />
                <path d="M128.223 531.919H127.396C127.396 502.661 143.559 488.903 154.251 479.785C155.826 478.458 157.235 477.298 158.478 476.137C166.849 468.511 186.079 448.288 186.244 448.121L186.825 448.702C186.66 448.868 167.429 469.092 159.058 476.718L154.831 480.364C144.221 489.399 128.223 503.075 128.223 531.919Z" fill="black" />
                <path d="M118.277 513.27C118.277 513.27 144.553 484.426 126.151 453.509C107.75 422.592 93.8253 409.247 93.8253 409.247C93.8253 409.247 87.5273 430.55 83.8797 447.708C80.232 464.864 118.277 513.27 118.277 513.27Z" fill="#2CC974" />
                <path d="M0 523.879C0 523.879 15.5008 527.858 65.0655 512.028C88.1906 504.733 117.698 518.657 117.698 518.657C117.698 518.657 97.8052 495.035 82.5546 484.591C50.3963 462.461 0 523.879 0 523.879Z" fill="#2CC974" />
                <path d="M116.954 518.326C115.295 515.839 112.81 514.347 110.489 512.773C106.191 509.755 101.706 507.014 97.0609 504.567C86.0374 498.184 73.4393 493.958 60.5909 493.875C53.7317 494.111 47.038 496.049 41.1134 499.511C37.7141 501.416 34.4824 503.655 31.1658 505.643L26.4423 508.296C26.3676 508.332 26.309 508.395 26.2787 508.471C26.2485 508.548 26.2465 508.633 26.2767 508.711C26.4423 509.705 28.1823 508.13 28.6809 507.965C32.6595 505.811 36.3879 503.241 40.201 500.92C45.7542 497.559 51.9796 495.463 58.4371 494.785C61.7879 494.61 65.1469 494.777 68.4654 495.284C74.7271 496.176 80.8516 497.847 86.6995 500.256C93.0157 503.108 99.134 506.376 105.018 510.038C108.749 512.69 113.389 515.092 115.876 518.326C116.125 518.492 116.207 518.823 116.456 518.905C116.706 518.988 117.12 518.574 116.954 518.326Z" fill="black" />
                <path d="M160.717 585.214L172.403 517.912H80.068L92.7488 585.63L160.717 585.214Z" fill="#FFA451" />
                <path d="M174.889 517.912H77.5802V530.825H174.889V517.912Z" fill="#FF7245" />
                <path fillRule="evenodd" clipRule="evenodd" d="M174.081 518.719H78.3876V530.017H174.081V518.719ZM174.889 517.912V530.825H77.5802V517.912H174.889Z" fill="black" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* // =================card================== */}
      <div className="py-8 px-4 md:py-16 md:px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 md:mb-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#005025]">
              Explore the marketplace.
            </h2>

            <div
              className="relative mt-4 md:mt-0"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <a href="#" className="text-[#00bf58] font-medium flex items-center group">
                <span className="text-base">Explore all fields</span>
                <svg className="ml-2" width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.5303 6.53033C13.8232 6.23744 13.8232 5.76256 13.5303 5.46967L8.75736 0.696699C8.46447 0.403806 7.98959 0.403806 7.6967 0.696699C7.40381 0.989593 7.40381 1.46447 7.6967 1.75736L11.9393 6L7.6967 10.2426C7.40381 10.5355 7.40381 11.0104 7.6967 11.3033C7.98959 11.5962 8.46447 11.5962 8.75736 11.3033L13.5303 6.53033ZM0 6.75H13V5.25H0V6.75Z" fill="#22C55E" />
                </svg>
                <div
                  className={`absolute bottom-0 left-0 h-0.5 bg-green-500 transition-all duration-300 ease-in-out ${isHovered ? 'w-full' : 'w-0'}`}
                />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className={`flex w-[200px] flex-col items-center justify-center rounded-[60px] border cursor-pointer transition-all duration-300 ${hoveredIndex === index || index === 0 && hoveredIndex === null
                    ? 'border-green-500 bg-white transform -translate-y-1'
                    : 'border-gray-200 bg-white hover:shadow-md'
                  }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{ padding: "50px 15px 30px" }}
              >
                <div className={`p-4 rounded-full mb-[16px] md:mb-4 transition-colors ${hoveredIndex === index || index === 0 && hoveredIndex === null ? 'text-green-600' : 'text-gray-700'
                  }`}>
                  {category.icon}
                </div>
                <h3 className="text-[18px] text-[#254035] font-semibold mb-2 text-center" style={{ margin: "20px 0 30px" }}>{category.title}</h3>
                <p className="text-[rgba(9,50,28,.6)] text-[14px]">{category.jobs}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>

  );
};

export default MarketplaceBanner;