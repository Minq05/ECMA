function Homepage() {
  return (
    <div id="layout" className="pb-4">
      <header
        className="flex p-2 bg-inherit shadow-black text-black"
        id="navbar"
      >
        <div className="flex items-center">
          <img
            className="h-10 cursor-pointer"
            src="./img/logo.png"
            alt="Furniro Logo"
          />
        </div>
        <nav>
          <ul className="list-none flex m-0 p-0">
            <li className="mx-6">
              <a className=" hover:text-red-300 text-2xl" href="/">
                Home
              </a>
            </li>
            <li className="mx-6">
              <a className=" hover:text-red-300 text-2xl" href="/pages/detail">
                Shop
              </a>
            </li>
            <li className="mx-6">
              <a className=" hover:text-red-300 text-2xl" href="/pages/cart">
                Cart
              </a>
            </li>
            <li className="mx-6">
              <a className=" hover:text-red-300 text-2xl" href="pages/checkout">
                CheckOut
              </a>
            </li>
          </ul>
        </nav>
        <div className="mr-2">
          <a href="#" className="mx-3 hover:text-red-300">
            <i className="fas fa-user" />
          </a>
          <a href="#" className="mx-3 hover:text-red-300">
            <i className="fas fa-search" />
          </a>
          <a href="#" className="mx-3 hover:text-red-300">
            <i className="fas fa-heart" />
          </a>
          <a href="#" className="mx-3 hover:text-red-300">
            <i className="fas fa-shopping-cart" />
          </a>
        </div>
      </header>
      <main className="mt-mt60">
        <div>
          <img
            src="./img/banner.png"
            alt
            width="100%"
            className="w-full cursor-pointer"
          />
        </div>
        <div className="flex content-center">
          <h1 className="p-12 text-6xl font-bold cursor-pointer">
            <a className=" hover:text-red-300" href="#">
              New
            </a>
          </h1>
        </div>
        <div className="flex justify-center pl-12 pr-12">
          <div
            style={{
              border: "1px solid black",
              width: 1400,
              height: 0,
              float: "left",
            }}
          />
        </div>
        <div className="grid grid-cols-4 p-12">
          <div className="mx-3" id="big">
            <div className>
              <img
                src="https://images.unsplash.com/photo-1491336238524-c990bd671778?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNvZmF8ZW58MHx8MHx8fDA%3D"
                className="w-full h-96"
                alt
              />
            </div>
            <div className="bg-gray-200 pb-2 cursor-pointer" id="mini">
              <h1 className="block pl-5 mb-2 pt-2 font-bold text-4xl cursor-pointer">
                <a className=" hover:text-red-300" href="#">
                  Syltherine
                </a>
              </h1>
              <span className="block ml-5 mb-2 mr-36 text-gray-500 text-lg cursor-pointer">
                Stylish cafe chair
              </span>
              <del className="ml-5 text-gray-400 cursor-pointer">
                3.500.000đ
              </del>
            </div>
            <div className="grid justify-center" id="mini2">
              <button className="d-flex flex-row btn btn-danger h-10 justify-center mt-24 mb-mm">
                Add to cart
              </button>
              <div className>
                <a href="#" className="cursor-pointer hover:text-red-300">
                  <i className="fas fa-share" /> Share
                </a>
                <a href="#" className="cursor-pointer hover:text-red-300">
                  <i className="fas fa-heart" /> Like
                </a>
              </div>
            </div>
          </div>
          <div className=" mx-3" id="big">
            <div>
              <img
                src="https://images.unsplash.com/photo-1512212621149-107ffe572d2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c29mYXxlbnwwfHwwfHx8MA%3D%3D"
                className="w-full h-96"
                alt
              />
            </div>
            <div className="w-full bg-gray-200 pb-2" id="mini">
              <h1 className="pl-5 pt-2 mb-2 font-bold text-4xl cursor-pointer">
                <a className=" hover:text-red-300" href="#">
                  Leviosa
                </a>
              </h1>
              <span className="block ml-5 mb-2 mr-36 text-gray-500 text-lg cursor-pointer">
                Stylish cafe chair
              </span>
              <del className=" ml-5 text-gray-400 cursor-pointer">
                2.500.000đ
              </del>
            </div>
            <div className="grid justify-center" id="mini2">
              <button className="d-flex flex-row btn btn-danger h-10 justify-center mt-24 mb-mm">
                Add to cart
              </button>
              <div className>
                <a href="#" className="cursor-pointer hover:text-red-300">
                  <i className="fas fa-share" /> Share
                </a>
                <a href="#" className="cursor-pointer hover:text-red-300">
                  <i className="fas fa-heart" /> Like
                </a>
              </div>
            </div>
          </div>
          <div className=" mx-3" id="big">
            <div>
              <img src="https://images.unsplash.com/photo-1509764986935-841accffc894?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNvZmF8ZW58MHx8MHx8fDA%3D" lassName="w-full h-96" alt />
            </div>
            <div className="bg-gray-200 pb-2" id="mini">
              <h1 className="clear-right mb-2 pl-5 pt-2 font-bold text-4xl cursor-pointer">
                <a className=" hover:text-red-300" href="#">
                  Lolito
                </a>
              </h1>
              <h2 className="block float-left ml-5 mb-2 mr-36 text-gray-500 text-lg cursor-pointer">
                Luxury big sofa
              </h2>
              <h3 className="ml-5 text-gray-400 cursor-pointer">14.000.000đ</h3>
            </div>
            <div className="grid justify-center" id="mini2">
              <button className="d-flex flex-row btn btn-danger h-10 justify-center mt-24 mb-mm">
                Add to cart
              </button>
              <div className>
                <a href="#" className="cursor-pointer hover:text-red-300">
                  <i className="fas fa-share" /> Share
                </a>
                <a href="#" className="cursor-pointer hover:text-red-300">
                  <i className="fas fa-heart" /> Like
                </a>
              </div>
            </div>
          </div>
          <div className=" mx-3" id="big">
            <div>
              <img
                src="https://images.unsplash.com/photo-1504194008492-c55ffe34e18d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNvZmF8ZW58MHx8MHx8fDA%3D"
                className="w-full h-96"
                alt
              />
            </div>
            <div className="bg-gray-200 pb-2" id="mini">
              <h1 className="pl-5 pt-2 mb-2 font-bold text-4xl ">
                <a className=" hover:text-red-300" href="#">
                  Respira
                </a>
              </h1>
              <span className="block ml-5 mb-2 mr-36 text-gray-500 text-lg cursor-pointer">
                Outdoor bar table
              </span>
              <del className="ml-5 text-gray-400 cursor-pointer">
                5.000.000đ
              </del>
            </div>
            <div className="grid justify-center" id="mini2">
              <button className="d-flex flex-row btn btn-danger h-10 justify-center mt-24 mb-mm">
                Add to cart
              </button>
              <div className>
                <a href="#" className="cursor-pointer hover:text-red-300">
                  <i className="fas fa-share" /> Share
                </a>
                <a href="#" className="cursor-pointer hover:text-red-300">
                  <i className="fas fa-heart" /> Like
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex content-center">
          <h1 className="p-12 text-6xl font-bold cursor-pointer">
            <a className=" hover:text-red-300" href="#">
              Shop
            </a>
          </h1>
        </div>
        <div className="flex justify-center pl-12 pr-12">
          <div
            style={{
              border: "1px solid black",
              width: 1400,
              height: 0,
              float: "left",
            }}
          />
        </div>
        <div className="p-12">
          <div className="flex flex-wrap justify-center">
            <div className="h-h605 w-w605 mx-4 my-4">
              <img
                src="https://plus.unsplash.com/premium_photo-1673548917477-4c0c8889b439?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHNvZmF8ZW58MHx8MHx8fDA%3D"
                alt
                className="w-full h-full"
              />
            </div>
            <div className="h-h605 w-w605 mx-4 my-4">
              <img
                src="https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHNvZmF8ZW58MHx8MHx8fDA%3D"
                className="w-full h-full"
              />
            </div>
            <div className="h-h605 w-w605 mx-4 my-4">
              <img
                src="https://plus.unsplash.com/premium_photo-1683121203379-ba4d4f27b933?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHNvZmF8ZW58MHx8MHx8fDA%3D"
                className="w-full h-full"
              />
            </div>
            <div className="h-h605 w-w605 mx-4 my-4">
              <img
                src="https://images.unsplash.com/photo-1501183638710-841dd1904471?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHNvZmF8ZW58MHx8MHx8fDA%3D"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
        <div className="flex content-center">
          <h1 className="p-12 text-6xl font-bold cursor-pointer">
            <a className=" hover:text-red-300" href="#">
              Blog
            </a>
          </h1>
        </div>
        <div className="flex justify-center pl-12 pr-12">
          <div
            style={{
              border: "1px solid black",
              width: 1400,
              height: 0,
              float: "left",
            }}
          />
        </div>
        <div className="p-12">
          <div className="flex mb-4">
            <div className="w-w605 h-h250 float-left mr-8">
              <img
                src="https://s3-alpha-sig.figma.com/img/fdd9/64bc/80337241ae54cb06a47ebf73f4d5e4d4?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=idN8GX79hzeDwOcj1M1qVVd-D4lHJDd1H8qgiRJmroRro90y4OXaukge2QfSOQIFkUDh1AQKouX6Jih~SfiDL7LKVGoIDH3fn55dx-YBnMqG6wrp~XtS15Mng~B0BgEWGmcAIlof0KhECCKHUcD2SDNOD~vH0mtvygJ48oSo8RRRRlWeFkL56NXVPDHlwGGfvl~ZkkFPF4tLZCHoBgFOKmr3upFvS~KT0sEAkLkKyTyOZ8yOTk9GZaX1whoz-p1xZMf5nWxi8FxLjXcpS1D-YVKaWIKNzgxdaPn7VZiIvKnMXtWBKRmrOwpoIYtInzKmKEuoblhFub0DywxYwwOzXQ__"
                alt="img"
                className="w-full h-full"
              />
            </div>
            <div className="relative w-w640 h-h250 mr-16">
              <div>
                <h1 className="font-bold text-2xl hover:text-red-300 cursor-pointer">
                  THE ULTIMATE SOFA BUYING GUIDE
                </h1>
              </div>
              <div>
                <div className="absolute bottom-2 right-1">
                  <i className="fa-solid fa-arrow-right text-2xl hover:text-red-300 cursor-pointer" />
                </div>
                <div
                  className="w-full float-left absolute bottom-0"
                  style={{ border: "1px solid black", height: 0 }}
                />
              </div>
            </div>
          </div>
          <div className="flex mb-4">
            <div className="w-w605 h-h250 float-left mr-8">
              <img
                src="https://s3-alpha-sig.figma.com/img/a224/6239/95432abad09eb8de37f4a236cf0f1e7c?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SP2NB00k8Qw7FTQQ5~oo4yiAjau4RHONemzclpfWCVauxz7x28ERALJvxg6F4JeAlrqbaRC6jeo31Jh4UsVCeW-~iv8SEg2ydUNyNtgbTQgyMSRMCIfB6dlw2Up9IeUqQveNTcfR1eW~z2uwRVfeVFfXLMZ0fGcHsfTLp5j8a-fKKX3M56ragvv7uohR12uEetO~BuIjJp5hl8s6PrU0x1eTdOZgAORlw0kedMwOoLPxJcky~rpdv6hrB02vl49jZkTn3~7oTNKHeWFgiuJdJDlpklOnrCPRgLCZxG0j3sbfv63mGmDDywih-y1Fuy2vEUXY2a3S8VxrYpWHx-YOBw__"
                alt="img"
                className="w-full h-full"
              />
            </div>
            <div className="relative w-w640 h-h250 mr-16 ">
              <div>
                <h1 className="font-bold text-2xl mb-2 hover:text-red-300 cursor-pointer">
                  A BEDROOM MUST HAVE SOME THING LIKE THIS
                </h1>
                <h2>
                  Your level of comfort when geting into and out of bed can be
                  greatly influenced by the bed frame you choose. It may
                  significantly affect how want your bedroom to feet and look
                </h2>
              </div>
              <div>
                <h1 className="absolute font-bold bottom-3 right-10 hover:text-red-300 cursor-pointer">
                  ABOUT
                </h1>
                <div className="absolute bottom-2 right-1">
                  <i className="fa-solid fa-arrow-right text-2xl hover:text-red-300 cursor-pointer" />
                </div>
                <div
                  className="w-full float-left absolute bottom-0"
                  style={{ border: "1px solid black", height: 0 }}
                />
              </div>
            </div>
          </div>
          <div className="flex mb-4">
            <div className="w-w605 h-h250 float-left mr-8">
              <img
                src="https://s3-alpha-sig.figma.com/img/511b/7769/8fdab0973cf6b8459ad38d0209e94c15?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QOq508oTN0t7aFgCQ-0ntVBna8JeXTr9LQJocZL6JSORT6pHjwIawYoXHQG29pti9HX~Twlv3~0-0g8YBLv-wuq~wMIZuiTOGzkHh-M47yHl3T6KqYiP6JFq5UWGAaAURF4Xdz9KusLU~mcEI~PLjoCX2O-vP3cOK7yxuSRFth3WdNdXJyMkSyQCMTbqBwdZtmoiTS3jRPl5SWgOALIxy3MyM~2eyQhoh29xyxBpzOW7sBYLv2Frb~ZpIL5L-bAABqbSc8jNA5cljCX5g3TrUxXuFPFO-TmFl9P40lbhh2qtSlGZPYx46B7pNbg5VRZ02UNyAa8ol~g143h-XgCJqg__"
                alt="img"
                className="w-full h-full"
              />
            </div>
            <div className="relative w-w640 h-h250 mr-16">
              <div>
                <h1 className="font-bold text-2xl mb-2 hover:text-red-300 cursor-pointer">
                  WHY IS A TV CONSOLE A MUST IN EVERY HOUSE
                </h1>
                <h3>
                  People do a lot of research to make sure they purchase the
                  ideal televisoin. And like the rest of us, you want to keep
                  that gorgeous flat srceen in your living or bedroom on a table
                  or stand
                </h3>
              </div>
              <div>
                <h1 className="absolute font-bold bottom-3 right-10 hover:text-red-300 cursor-pointer">
                  ABOUT
                </h1>
                <div className="absolute bottom-2 right-1">
                  <i className="fa-solid fa-arrow-right text-2xl hover:text-red-300 cursor-pointer" />
                </div>
                <div
                  className="w-full float-left absolute bottom-0"
                  style={{ border: "1px solid black", height: 0 }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-bg1 h-h270">
          <div className="flex justify-center pt-28">
            <div className="mx-3">
              <i className="fa-solid fa-trophy text-7xl" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">High Quality</h1>
              <h3 className="mt-3 text-gray-500">crafted from top materials</h3>
            </div>
            <div className="mx-3 ">
              <i className="fa-regular fa-circle-check text-7xl ml-8" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Warranty Protection</h1>
              <h3 className="mt-3 text-gray-500">Over 2 years</h3>
            </div>
            <div className="mx-3">
              <i className="fa-solid fa-ship text-7xl ml-8" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Free Shipping</h1>
              <h3 className="mt-3 text-gray-500">Order over 150 $</h3>
            </div>
            <div className="mx-3">
              <i className="fa-solid fa-square-phone-flip text-7xl ml-8" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">24 / 7 Support</h1>
              <h3 className="mt-3 text-gray-500">Dedicated support</h3>
            </div>
          </div>
        </div>
      </main>{" "}
      <hr />
      <footer className="p-12 flex relative pb-5">
        <div className="mr-20">
          <div className="pb-10">
            <img src="./img/logo.png" alt />
          </div>
          <h3 className="text-gray-400">
            400 University Drive Suite 200 Coral Gables,
            <br />
            FL 33134 USA
          </h3>
        </div>
        <div className="block mx-16">
          <div>
            <h3 className="font-bold text-gray-500 cursor-pointer">Link</h3>
            <h3 className="font-bold my-3 hover:text-red-400 cursor-pointer">
              Home
            </h3>
            <h3 className="font-bold my-3 hover:text-red-400 cursor-pointer">
              About
            </h3>
            <h3 className="font-bold my-3 hover:text-red-400 cursor-pointer">
              Contact
            </h3>
          </div>
        </div>
        <div className="mx-16">
          <div>
            <h3 className="font-bold text-gray-500 cursor-pointer">Help</h3>
            <h3 className="font-bold my-3 hover:text-red-400 cursor-pointer">
              Payment Options
            </h3>
            <h3 className="font-bold my-3 hover:text-red-400 cursor-pointer">
              Returns
            </h3>
            <h3 className="font-bold my-3 hover:text-red-400 cursor-pointer">
              Privacy Polices
            </h3>
          </div>
        </div>
        <div className="mx-16">
          <div>
            <h3 className="font-bold text-gray-500 cursor-pointer">
              Newsletter
            </h3>
            <input
              className="btn btn-outline-dark text-left my-3"
              type="search"
              placeholder="Enter Your Email Address"
            />{" "}
            <button className="btn btn-dark">SUBSRICE</button>
          </div>
        </div>
        <div
          className="w-full absolute bottom-8 left-0"
          style={{ border: "1px solid gray", height: 0 }}
        />
        <div className="absolute left-2 font-semibold bottom-0">
          2023 furino. All rights reverved
        </div>
      </footer>
    </div>
  );
}

export default Homepage;
